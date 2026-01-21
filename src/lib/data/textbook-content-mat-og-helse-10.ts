/**
 * Mat og helse 10. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for mat og helse på 10. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Ernæring og helse
// ============================================================================

export const CHAPTER_MAT_10_1: TextbookChapter = {
  id: 'mat-10-1',
  courseId: 'mat-10',
  chapterNumber: '1',
  title: 'Ernæring og helse',
  description: 'Lær om sammenhengen mellom kosthold, næringsstoffer og god helse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare sammenhenger mellom kosthold, livsstil og helse',
    'bruke kunnskap om næringsstoffer til å vurdere kosthold',
  ],
  content: [
    {
      id: 'mat-10-1-intro',
      type: 'text',
      content: `Mat er kroppens drivstoff og byggemateriale. Det vi spiser påvirker ikke bare vekten vår, men også energinivå, konsentrasjon, humør og risiko for sykdom. I 10. klasse går vi dypere inn i hvordan næringsstoffer virker i kroppen og hvordan du kan ta gode kostholdsvalg.`,
    },
    {
      id: 'mat-10-1-def-1',
      type: 'definition',
      title: 'Ernæring',
      content: `Ernæring er vitenskapen om hvordan mat og næringsstoffer påvirker kroppens vekst, funksjon og helse. Det handler om å forstå hvilke næringsstoffer kroppen trenger og hvordan de brukes.`,
    },
    {
      id: 'mat-10-1-text-2',
      type: 'text',
      content: `**Makronæringsstoffer**

Makronæringsstoffer er de næringsstoffene kroppen trenger i store mengder:

**Karbohydrater** (4 kcal/g):
- Kroppens hovedenergikilde
- Komplekse (fullkorn, grønnsaker) vs. enkle (sukker)
- Bør utgjøre 45-60% av energiinntaket
- Kostfiber er viktig for fordøyelsen

**Proteiner** (4 kcal/g):
- Byggesteiner for muskler, enzymer og hormoner
- Essensielle aminosyrer må vi få fra mat
- Bør utgjøre 10-20% av energiinntaket
- Kilder: kjøtt, fisk, egg, belgfrukter, meieriprodukter

**Fett** (9 kcal/g):
- Energilager og cellemembranbygging
- Umettede (sunt) vs. mettede (begrens)
- Bør utgjøre 25-40% av energiinntaket
- Omega-3 og omega-6 er essensielle fettsyrer`,
    },
    {
      id: 'mat-10-1-text-3',
      type: 'text',
      content: `**Mikronæringsstoffer**

Vitaminer og mineraler trengs i små mengder, men er livsviktige:

**Vannløselige vitaminer** (B-vitaminer, C):
- Lagres ikke i kroppen
- Må inntas daglig
- Viktige for energiomsetning og immunforsvar

**Fettløselige vitaminer** (A, D, E, K):
- Lagres i fettvev og lever
- Kan bli for mye ved høyt inntak av kosttilskudd
- D-vitamin viktig i Norge pga. lite sol

**Mineraler**:
- Kalsium: Bein og tenner
- Jern: Oksygentransport i blodet
- Sink: Immunforsvar og sårheling
- Jod: Skjoldbruskkjertelen`,
    },
    {
      id: 'mat-10-1-text-4',
      type: 'text',
      content: `**Kostholdsråd for ungdom**

Helsedirektoratets anbefalinger:
- **5 om dagen**: Minst 5 porsjoner frukt og grønnsaker
- **Fullkorn**: Velg grove kornprodukter
- **Fisk**: 2-3 ganger i uken
- **Magre meieriprodukter**: Daglig
- **Begrens**: Sukker, salt, rødt og bearbeidet kjøtt

**Væskeinntak**:
- Ca. 1,5-2 liter væske daglig
- Vann er beste tørstedrikk
- Unngå sukkerholdige drikker

**Måltidsrytme**:
- Frokost gir god start på dagen
- Regelmessige måltider stabiliserer blodsukkeret
- Sunne mellommåltider ved behov`,
    },
    {
      id: 'mat-10-1-tip-1',
      type: 'tip',
      title: 'Tallerkenmodellen',
      content: `En enkel måte å sette sammen et sunt måltid: Fyll halve tallerkenen med grønnsaker, en fjerdedel med proteinrik mat og en fjerdedel med karbohydratrik mat som fullkorn eller poteter.`,
    },
    {
      id: 'mat-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken makronæringsstoff er kroppens hovedenergikilde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Karbohydrater',
            multipleChoiceOptions: ['Karbohydrater', 'Proteiner', 'Fett', 'Vitaminer'],
          },
        ],
        solution: 'Karbohydrater er kroppens foretrukne energikilde, spesielt for hjernen som nesten utelukkende bruker glukose.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange kilokalorier gir 1 gram fett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '9 kcal',
            multipleChoiceOptions: ['9 kcal', '4 kcal', '7 kcal', '2 kcal'],
          },
        ],
        solution: 'Fett gir 9 kcal per gram, mer enn dobbelt så mye som karbohydrater og proteiner som gir 4 kcal per gram.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på vannløselige og fettløselige vitaminer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fettløselige lagres i kroppen, vannløselige gjør det ikke',
            multipleChoiceOptions: ['Fettløselige lagres i kroppen, vannløselige gjør det ikke', 'De er like', 'Vannløselige er viktigere', 'Fettløselige finnes bare i fisk'],
          },
        ],
        solution: 'Fettløselige vitaminer (A, D, E, K) lagres i fettvev, mens vannløselige (B, C) skilles ut og må inntas daglig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva anbefaler "5 om dagen"-kampanjen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Minst 5 porsjoner frukt og grønnsaker daglig',
            multipleChoiceOptions: ['Minst 5 porsjoner frukt og grønnsaker daglig', '5 måltider om dagen', '5 glass vann daglig', '5 timer søvn'],
          },
        ],
        solution: '"5 om dagen" anbefaler minst 5 porsjoner (ca. 500g) frukt og grønnsaker hver dag for å sikre tilstrekkelig vitaminer og fiber.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilket mineral er viktig for oksygentransport i blodet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Jern',
            multipleChoiceOptions: ['Jern', 'Kalsium', 'Sink', 'Magnesium'],
          },
        ],
        solution: 'Jern er en viktig del av hemoglobin i røde blodceller, som frakter oksygen fra lungene til alle kroppens celler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar tallerkenmodellen og hvordan den kan hjelpe deg å sette sammen sunne måltider.',
        solution: 'Tallerkenmodellen er en visuell guide: Halve tallerkenen fylles med grønnsaker/salat, en fjerdedel med proteinrik mat (kjøtt, fisk, belgfrukter) og en fjerdedel med karbohydratrik mat (poteter, ris, pasta, brød). Dette sikrer en god balanse mellom næringsstoffer og holder deg mett lenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Bærekraftig matproduksjon
// ============================================================================

export const CHAPTER_MAT_10_2: TextbookChapter = {
  id: 'mat-10-2',
  courseId: 'mat-10',
  chapterNumber: '2',
  title: 'Bærekraftig matproduksjon',
  description: 'Utforsk hvordan mat produseres og hvilken påvirkning det har på miljøet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte problemstillinger knyttet til bærekraftig matproduksjon',
    'vurdere miljøkonsekvenser av ulike matvarevalg',
  ],
  content: [
    {
      id: 'mat-10-2-intro',
      type: 'text',
      content: `Maten vi spiser påvirker ikke bare helsen vår, men også kloden. Matproduksjonen står for omtrent 25-30% av verdens klimagassutslipp. For å sikre nok mat til fremtidige generasjoner må vi produsere og konsumere mat mer bærekraftig.`,
    },
    {
      id: 'mat-10-2-def-1',
      type: 'definition',
      title: 'Bærekraftig matproduksjon',
      content: `Bærekraftig matproduksjon dekker dagens behov for mat uten å ødelegge mulighetene for fremtidige generasjoner. Det innebærer å ta vare på jord, vann, biologisk mangfold og klima.`,
    },
    {
      id: 'mat-10-2-text-2',
      type: 'text',
      content: `**Miljøpåvirkning fra matproduksjon**

**Klimagassutslipp**:
- Husdyrhold (spesielt storfe) gir metan
- Transport av mat over lange avstander
- Kunstgjødsel produksjon og bruk
- Avskoging for jordbruksland

**Vannforbruk**:
- 70% av verdens ferskvann brukes i jordbruket
- 1 kg storfekjøtt krever ca. 15 000 liter vann
- 1 kg grønnsaker krever ca. 300 liter vann

**Arealbruk**:
- 40% av jordens landareal brukes til jordbruk
- Tropisk regnskog hugges for beitemark og dyrefôr
- Tap av biologisk mangfold`,
    },
    {
      id: 'mat-10-2-text-3',
      type: 'text',
      content: `**Økologisk og konvensjonelt landbruk**

**Konvensjonelt landbruk**:
- Bruker kunstgjødsel og kjemiske sprøytemidler
- Ofte høyere avlinger
- Kan påvirke biologisk mangfold negativt
- Billigere produksjon

**Økologisk landbruk**:
- Ingen syntetiske sprøytemidler eller kunstgjødsel
- Bedre for jordhelse og biologisk mangfold
- Ofte lavere avlinger
- Dyrere produksjon
- Merkes med Debio-merket i Norge`,
    },
    {
      id: 'mat-10-2-text-4',
      type: 'text',
      content: `**Matsvinn - et stort problem**

Omtrent 1/3 av all mat som produseres kastes:

**Hvor oppstår matsvinn?**
- Produksjon: Mat som aldri høstes
- Transport og lagring: Ødelagt underveis
- Butikker: Utgått dato, kosmetisk avvik
- Husholdninger: Største kilde i Norge (ca. 46 kg/person/år)

**Tiltak mot matsvinn**:
- Planlegg innkjøp og måltider
- Forstå datomerking ("best før" vs. "siste forbruksdag")
- Oppbevar mat riktig
- Bruk rester kreativt
- Komposter matavfall`,
    },
    {
      id: 'mat-10-2-text-5',
      type: 'text',
      content: `**Bærekraftige matvalg**

**Lavere klimaavtrykk**:
- Mer plantebasert kost
- Velg sesongvarer
- Kjøp lokalprodusert når mulig
- Reduser matsvinn
- Velg sjømat fra bærekraftige bestander (MSC-merket)

**Klimaavtrykk per kg mat**:
- Storfekjøtt: ca. 26 kg CO2
- Svinekjøtt: ca. 7 kg CO2
- Kylling: ca. 5 kg CO2
- Fisk: ca. 3-5 kg CO2
- Grønnsaker: ca. 0,5-2 kg CO2
- Belgfrukter: ca. 1 kg CO2`,
    },
    {
      id: 'mat-10-2-tip-1',
      type: 'tip',
      title: 'Kjøttfrie dager',
      content: `En enkel måte å redusere klimaavtrykket er å ha en eller flere kjøttfrie dager i uken. Erstatt kjøtt med belgfrukter, egg, fisk eller soyaprodukter for å få nok protein.`,
    },
    {
      id: 'mat-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Omtrent hvor stor andel av verdens klimagassutslipp kommer fra matproduksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '25-30%',
            multipleChoiceOptions: ['25-30%', '5-10%', '50-60%', '80-90%'],
          },
        ],
        solution: 'Matproduksjonen står for omtrent 25-30% av verdens totale klimagassutslipp, inkludert produksjon, transport og avfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket kjøtt har høyest klimaavtrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Storfekjøtt',
            multipleChoiceOptions: ['Storfekjøtt', 'Kylling', 'Svinekjøtt', 'Lam'],
          },
        ],
        solution: 'Storfekjøtt har høyest klimaavtrykk (ca. 26 kg CO2/kg) fordi storfe produserer metan og krever mye fôr og areal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner økologisk landbruk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ingen syntetiske sprøytemidler eller kunstgjødsel',
            multipleChoiceOptions: ['Ingen syntetiske sprøytemidler eller kunstgjødsel', 'Høyere avlinger enn konvensjonelt', 'Billigere produksjon', 'Mer maskinbruk'],
          },
        ],
        solution: 'Økologisk landbruk unngår syntetiske kjemikalier og fokuserer på naturlige metoder for gjødsling og skadedyrkontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mye mat kastes omtrent per person per år i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ca. 46 kg',
            multipleChoiceOptions: ['Ca. 46 kg', 'Ca. 10 kg', 'Ca. 100 kg', 'Ca. 200 kg'],
          },
        ],
        solution: 'I norske husholdninger kastes det i gjennomsnitt ca. 46 kg mat per person per år, noe som utgjør et betydelig matsvinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '"Best før" er kvalitet, "siste forbruksdag" er sikkerhet',
            multipleChoiceOptions: ['"Best før" er kvalitet, "siste forbruksdag" er sikkerhet', 'De betyr det samme', '"Best før" er strengere', '"Siste forbruksdag" gjelder bare kjøtt'],
          },
        ],
        solution: '"Best før" angir når kvaliteten begynner å synke (kan ofte spises etter). "Siste forbruksdag" er en sikkerhetsgrense for lett bedervelig mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Nevn tre konkrete tiltak du kan gjøre for å redusere matsvinn hjemme.',
        solution: 'Eksempler: 1) Planlegge måltider og handle etter handleliste. 2) Oppbevare mat riktig (kjøleskap, frys, tørr og mørk plass). 3) Bruke rester til nye måltider som restesuppe eller resteomelett. 4) Fryse mat før den blir dårlig. 5) Forstå datomerking og bruke sansene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Mattradisjoner i Norge
// ============================================================================

export const CHAPTER_MAT_10_3: TextbookChapter = {
  id: 'mat-10-3',
  courseId: 'mat-10',
  chapterNumber: '3',
  title: 'Mattradisjoner i Norge',
  description: 'Utforsk norske mattradisjoner fra ulike deler av landet og gjennom historien.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og presentere mattradisjoner fra Norge',
    'reflektere over mattradisjoners betydning for identitet og kultur',
  ],
  content: [
    {
      id: 'mat-10-3-intro',
      type: 'text',
      content: `Norske mattradisjoner er formet av geografien, klimaet og historien vår. Fra kystens fiske- og sjømatretter til fjellets vilt og seterdrift har hver region utviklet sine særegne tradisjoner. Mange av disse tradisjonene bevares fortsatt, mens andre har blitt modernisert.`,
    },
    {
      id: 'mat-10-3-def-1',
      type: 'definition',
      title: 'Mattradisjon',
      content: `En mattradisjon er matlagings- og spiseskikker som er overlevert gjennom generasjoner og har kulturell, historisk eller religiøs betydning. Tradisjonene reflekterer tilgjengelige råvarer og konserveringsmetoder.`,
    },
    {
      id: 'mat-10-3-text-2',
      type: 'text',
      content: `**Historisk bakgrunn**

Norske mattradisjoner er preget av:

**Konservering**:
- Lange, kalde vintre krevde at mat kunne lagres
- Salting, tørking, røyking og syring
- Eksempler: tørrfisk, rakfisk, spekemat, sursild

**Selvberging**:
- Folk måtte klare seg med det de hadde lokalt
- Lite import før moderne tid
- Enkel, næringsrik mat

**Sesongvariasjoner**:
- Høst var slaktetid
- Sommerens seterdrift ga melk og ost
- Fiske hadde sine sesonger`,
    },
    {
      id: 'mat-10-3-text-3',
      type: 'text',
      content: `**Regionale spesialiteter**

**Vestlandet**:
- Pinnekjøtt (ribbet, saltet og tørket lammekjøtt)
- Smalahove (sauhode)
- Bergensk fiskesuppe

**Østlandet**:
- Rakfisk fra Valdres
- Spekemat og fenalår
- Lefser og lomper

**Trøndelag**:
- Sodd (fårekjøttsuppe med boller)
- Sveler
- Sure lever

**Nord-Norge**:
- Tørrfisk og klippfisk
- Mølje (kokt torsk med lever og rogn)
- Finnbiff (reinsdyrkjøtt)`,
    },
    {
      id: 'mat-10-3-text-4',
      type: 'text',
      content: `**Høytidsmat**

**Jul**:
- Ribbe (Østlandet)
- Pinnekjøtt (Vestlandet)
- Lutefisk (hele landet)
- Julekaker: fattigmann, goro, krumkake, sandbakkel, smultringer, sirupssnipper, berlinerkranser

**Påske**:
- Lam
- Appelsiner og Kvikk Lunsj (påskefjellet)

**17. mai**:
- Pølser i lompe/brød
- Iskrem
- Brus

**Andre merkedager**:
- Fårikål (siste torsdag i september)
- Rømmegrøt på St. Hans
- Kremmerhus og vafler hele året`,
    },
    {
      id: 'mat-10-3-text-5',
      type: 'text',
      content: `**Samisk matkultur**

Den samiske befolkningen har unike mattradisjoner:

**Råvarer**:
- Reinsdyrkjøtt (bidos, finnbiff)
- Villaks og røye
- Vilt (elg, rype)
- Bær (multer, blåbær, tyttebær)

**Tilberedning**:
- Tørking og røyking av kjøtt
- Koking over åpen ild
- Enkle, næringsrike retter

**Duodji**:
- Tradisjonelle kopper (guksi) av bjørk
- Kaffekoking over bål er en viktig sosial tradisjon`,
    },
    {
      id: 'mat-10-3-note-1',
      type: 'note',
      title: 'Mattradisjoner i endring',
      content: `Mange gamle mattradisjoner forsvinner, men det er også økt interesse for "ny nordisk mat" som tar utgangspunkt i lokale råvarer og tradisjoner, men med moderne teknikker.`,
    },
    {
      id: 'mat-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken rett er Norges nasjonalrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fårikål',
            multipleChoiceOptions: ['Fårikål', 'Pinnekjøtt', 'Taco', 'Ribbe'],
          },
        ],
        solution: 'Fårikål ble kåret til Norges nasjonalrett i 1974 og har sin egen dag - siste torsdag i september.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er pinnekjøtt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ribbet, saltet og tørket lammekjøtt',
            multipleChoiceOptions: ['Ribbet, saltet og tørket lammekjøtt', 'Stekt svineribbe', 'Kokt kylling', 'Grillet reinsdyr'],
          },
        ],
        solution: 'Pinnekjøtt er lammeribber som saltes og tørkes, tradisjonelt på Vestlandet. Det dampes over bjørkepinner før servering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor utviklet nordmenn mange konserveringsmetoder?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å bevare mat gjennom den lange vinteren',
            multipleChoiceOptions: ['For å bevare mat gjennom den lange vinteren', 'Fordi det smakte best', 'For å eksportere mat', 'Fordi det var moderne'],
          },
        ],
        solution: 'Norges lange, kalde vintre med lite fersk mat tilgjengelig gjorde det nødvendig å konservere mat fra høsten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er rakfisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fermentert ørret eller røye',
            multipleChoiceOptions: ['Fermentert ørret eller røye', 'Tørket torsk', 'Røkt laks', 'Kokt hyse'],
          },
        ],
        solution: 'Rakfisk er ørret eller røye som saltes og fermenteres i 2-3 måneder. Det er en tradisjon spesielt fra Valdres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilket kjøtt er sentralt i samisk matkultur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Reinsdyrkjøtt',
            multipleChoiceOptions: ['Reinsdyrkjøtt', 'Svinekjøtt', 'Storfekjøtt', 'Kylling'],
          },
        ],
        solution: 'Reinsdyrkjøtt er sentralt i samisk mattradisjon. Reindrift har vært en viktig del av samisk kultur i tusenvis av år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Verdensmat
// ============================================================================

export const CHAPTER_MAT_10_4: TextbookChapter = {
  id: 'mat-10-4',
  courseId: 'mat-10',
  chapterNumber: '4',
  title: 'Verdensmat',
  description: 'Utforsk mattradisjoner og smaker fra ulike verdensdeler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og presentere mattradisjoner fra ulike kulturer',
    'tilberede mat fra forskjellige land',
  ],
  content: [
    {
      id: 'mat-10-4-intro',
      type: 'text',
      content: `Globaliseringen har gjort at vi har tilgang til smaker fra hele verden. Hver kultur har utviklet sine unike mattradisjoner basert på tilgjengelige råvarer, klima, religion og historie. Å lære om andre lands mat gir innsikt i deres kultur og historie.`,
    },
    {
      id: 'mat-10-4-def-1',
      type: 'definition',
      title: 'Verdensmat (fusjonkjøkken)',
      content: `Verdensmat refererer til retter og mattradisjoner fra forskjellige kulturer verden over. Fusjonkjøkken kombinerer elementer fra flere kulturer i nye retter.`,
    },
    {
      id: 'mat-10-4-text-2',
      type: 'text',
      content: `**Asia**

**Kina**:
- Wok-steking, dampkoking
- Ris og nudler som basismat
- Fem smaker: søtt, surt, salt, bittert, umami
- Dim sum, pekingand, chow mein

**Japan**:
- Respekt for råvarenes naturlige smak
- Sushi, sashimi, ramen
- Umami som sentral smak
- Bento-bokser og estetisk presentasjon

**India**:
- Sterkt krydret, ofte vegetarisk
- Curry, tandoori, naan
- Ghee (klarifisert smør) viktig
- Regionale variasjoner (nord vs. sør)

**Thailand**:
- Balanse mellom søtt, surt, salt, krydret
- Pad thai, tom yum, grønn curry
- Fersk urter: koriander, sitrongress, galangal`,
    },
    {
      id: 'mat-10-4-text-3',
      type: 'text',
      content: `**Middelhavsområdet**

**Italia**:
- Regionale forskjeller (nord vs. sør)
- Pasta, pizza, risotto
- Oliveolje, tomat, basilikum
- Enkel tilberedning, kvalitetsråvarer

**Spania**:
- Tapas-kultur (små retter)
- Paella, gazpacho, tortilla
- Oliveolje og sjømat
- Sein middag (kl. 21-22)

**Hellas**:
- Middelhavskost
- Tzatziki, moussaka, souvlaki
- Fetaost, oliven, lam
- Meze (små retter til deling)

**Tyrkia**:
- Bro mellom øst og vest
- Kebab, meze, baklava
- Brød og yoghurt til alt
- Sterk te-tradisjon`,
    },
    {
      id: 'mat-10-4-text-4',
      type: 'text',
      content: `**Amerika**

**Mexico**:
- Mais, bønner, chili som basis
- Tacos, burritos, enchiladas
- Salsaer og guacamole
- Sterke smaker og farger

**USA**:
- Smeltedigel av kulturer
- BBQ, burgere, soul food
- Store porsjoner
- Fast food-kultur, men også farm-to-table

**Peru**:
- Ceviche (rå fisk i lime)
- Poteter i utallige varianter
- Quinoa (opprinnelig herfra)
- Fusjon av urfolk og spansk påvirkning`,
    },
    {
      id: 'mat-10-4-text-5',
      type: 'text',
      content: `**Afrika og Midtøsten**

**Marokko**:
- Tagine (langsomt kokt i leirkrukke)
- Couscous, krydder (ras el hanout)
- Mynte-te og bakverk

**Libanon/Midtøsten**:
- Hummus, falafel, tabbouleh
- Flatbrød som spiseredskap
- Friske urter og grønnsaker
- Meze-tradisjon

**Etiopia**:
- Injera (syrlig flatbrød)
- Wat (gryter)
- Spises med hendene
- Fellesspisning fra felles fat`,
    },
    {
      id: 'mat-10-4-tip-1',
      type: 'tip',
      title: 'Autentisk vs. tilpasset',
      content: `Mange "utenlandske" retter vi spiser i Norge er tilpasset norsk smak. Prøv å lage autentiske versjoner for å oppleve de ekte smakene - det kan være en øyeåpner!`,
    },
    {
      id: 'mat-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken smak er sentral i japansk matlaging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Umami',
            multipleChoiceOptions: ['Umami', 'Søtt', 'Krydret', 'Bittert'],
          },
        ],
        solution: 'Umami (den "femte smaken") er sentral i japansk mat. Den finnes i soyasaus, miso, tang og fermenterte produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner middelhavskost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Mye oliveolje, grønnsaker, fisk og fullkorn',
            multipleChoiceOptions: ['Mye oliveolje, grønnsaker, fisk og fullkorn', 'Mye rødt kjøtt og smør', 'Hovedsakelig fast food', 'Mest frityrstekt mat'],
          },
        ],
        solution: 'Middelhavskost er rik på oliveolje, grønnsaker, frukt, fullkorn, fisk og nøtter, og er assosiert med god helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke tre ingredienser er basis i meksikansk mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Mais, bønner og chili',
            multipleChoiceOptions: ['Mais, bønner og chili', 'Ris, fisk og soya', 'Hvete, melk og ost', 'Poteter, kjøtt og løk'],
          },
        ],
        solution: 'Mais, bønner og chili har vært grunnlaget for meksikansk mat i tusenvis av år, fra før europeerne kom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er tapas?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Små retter som deles i Spania',
            multipleChoiceOptions: ['Små retter som deles i Spania', 'En type pasta', 'Japansk suppe', 'Meksikansk brød'],
          },
        ],
        solution: 'Tapas er en spansk tradisjon med små retter som serveres til deling, ofte sammen med drikke som sosialt samvær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er injera?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et syrlig etiopisk flatbrød',
            multipleChoiceOptions: ['Et syrlig etiopisk flatbrød', 'En indisk curry', 'En japansk nuddelrett', 'En meksikansk dip'],
          },
        ],
        solution: 'Injera er et fermentert, syrlig flatbrød fra Etiopia som brukes både som tallerken og spiseredskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et land og beskriv tre typiske retter og hvilke råvarer som er vanlige.',
        solution: 'Eksempel for Italia: 1) Pasta carbonara - pasta, egg, guanciale (svinekjake), pecorino-ost, pepper. 2) Pizza margherita - deig, tomatsaus, mozzarella, basilikum. 3) Risotto - arborio-ris, buljong, parmesan, smør. Vanlige råvarer: oliveolje, tomater, hvitløk, basilikum, parmesan, pasta, brød.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Allergier og intoleranser
// ============================================================================

export const CHAPTER_MAT_10_5: TextbookChapter = {
  id: 'mat-10-5',
  courseId: 'mat-10',
  chapterNumber: '5',
  title: 'Allergier og intoleranser',
  description: 'Lær om matallergier, intoleranser og hvordan tilpasse mat for ulike behov.',
  estimatedMinutes: 55,
  competenceGoals: [
    'tilpasse mat til personer med allergier og intoleranser',
    'forstå forskjellen mellom allergi og intoleranse',
  ],
  content: [
    {
      id: 'mat-10-5-intro',
      type: 'text',
      content: `Stadig flere har allergier eller intoleranser som krever tilpasset kosthold. Som matlager er det viktig å kjenne til de vanligste problemene og hvordan du trygt kan lage mat for alle. Feil kan i verste fall være livstruende.`,
    },
    {
      id: 'mat-10-5-def-1',
      type: 'definition',
      title: 'Allergi vs. intoleranse',
      content: `**Matallergi**: Immunsystemet reagerer på et stoff i maten som om det var farlig. Kan være livstruende. **Matintoleranse**: Fordøyelsessystemet klarer ikke å bryte ned et stoff. Ubehagelig, men ikke livstruende.`,
    },
    {
      id: 'mat-10-5-text-2',
      type: 'text',
      content: `**De 14 allergener som må merkes**

EU-regelverket krever at disse alltid må deklareres:

1. **Glutenholdige kornslag** (hvete, rug, bygg, havre)
2. **Krepsdyr** (reker, krabbe, hummer)
3. **Egg**
4. **Fisk**
5. **Peanøtter**
6. **Soya**
7. **Melk** (inkl. laktose)
8. **Nøtter** (mandler, hasselnøtter, valnøtter, cashew, pekan, etc.)
9. **Selleri**
10. **Sennep**
11. **Sesamfrø**
12. **Svoveldioksid og sulfitter** (over 10 mg/kg)
13. **Lupiner**
14. **Bløtdyr** (muslinger, blekksprut, snegler)`,
    },
    {
      id: 'mat-10-5-text-3',
      type: 'text',
      content: `**Vanlige allergier og intoleranser**

**Melkeallergi**:
- Reaksjon på melkeprotein
- Må unngå ALL melk og meieriprodukter
- Vanlig hos små barn, ofte vokser de det av seg

**Laktoseintoleranse**:
- Mangel på enzymet laktase
- Kan ofte tåle litt laktose
- Laktosefrie produkter fungerer
- Hard ost og smør inneholder lite laktose

**Cøliaki (glutenintoleranse)**:
- Autoimmun sykdom
- Gluten skader tynntarmen
- Må unngå ALT gluten livet ut
- Havre kan være trygt hvis sertifisert glutenfri`,
    },
    {
      id: 'mat-10-5-text-4',
      type: 'text',
      content: `**Nøtteallergi**

En av de farligste allergiene:
- Kan gi anafylaksi (livstruende)
- Selv små spor kan utløse reaksjon
- Mange allergiske mot flere typer nøtter
- Peanøtter er belgfrukter, ikke nøtter (men ofte kryssreaksjon)

**Symptomer på allergisk reaksjon**:
- Milde: Kløe, utslett, hevelse
- Moderate: Magesmerter, oppkast, diaré
- Alvorlige (anafylaksi): Pustevansker, blodtrykksfall, bevisstløshet

**Ved alvorlig reaksjon**: Ring 113 umiddelbart!`,
    },
    {
      id: 'mat-10-5-text-5',
      type: 'text',
      content: `**Trygg matlaging for allergikere**

**Forebygging av kryssforurensning**:
- Bruk separate redskaper og skjærebrett
- Vask hendene grundig mellom oppgaver
- Lag allergenfri mat først
- Oppbevar allergenfri mat separat
- Merk mat tydelig

**Kommunikasjon**:
- Spør alltid gjester om allergier
- Les ingredienslister nøye
- Vær ærlig om hva maten inneholder
- Si fra hvis du er usikker

**Alternativer**:
- Melk: Havre-, soya-, kokosmelk
- Hvetemel: Mais-, ris-, bokhvetemel
- Egg: Aquafaba, linfrø, kommersielle egg-erstatninger`,
    },
    {
      id: 'mat-10-5-warning-1',
      type: 'warning',
      title: 'Anafylaksi',
      content: `Anafylaksi er en akutt, livstruende allergisk reaksjon. Symptomer inkluderer hevelse i hals, pustevansker og bevisstløshet. Ring 113 umiddelbart og gi adrenalin (EpiPen) hvis tilgjengelig.`,
    },
    {
      id: 'mat-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom allergi og intoleranse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Allergi involverer immunsystemet, intoleranse gjør det ikke',
            multipleChoiceOptions: ['Allergi involverer immunsystemet, intoleranse gjør det ikke', 'De er det samme', 'Intoleranse er farligere', 'Allergi gir bare utslett'],
          },
        ],
        solution: 'Ved allergi reagerer immunsystemet og det kan være livstruende. Intoleranse er et fordøyelsesproblem som er ubehagelig, men ikke farlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange allergener må merkes ifølge EU-regelverket?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '14',
            multipleChoiceOptions: ['14', '8', '10', '20'],
          },
        ],
        solution: 'EU-regelverket krever at 14 allergener alltid må deklareres på matvarer, inkludert gluten, nøtter, melk, egg og skalldyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er cøliaki?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En autoimmun sykdom der gluten skader tynntarmen',
            multipleChoiceOptions: ['En autoimmun sykdom der gluten skader tynntarmen', 'Allergi mot melk', 'Intoleranse mot sukker', 'Allergi mot nøtter'],
          },
        ],
        solution: 'Cøliaki er en autoimmun sykdom der gluten trigger immunsystemet til å angripe tynntarmen. Eneste behandling er glutenfritt kosthold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er anafylaksi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En alvorlig, livstruende allergisk reaksjon',
            multipleChoiceOptions: ['En alvorlig, livstruende allergisk reaksjon', 'En mild allergi', 'En type intoleranse', 'Et symptom på forkjølelse'],
          },
        ],
        solution: 'Anafylaksi er en akutt, livstruende allergisk reaksjon som kan gi pustevansker og blodtrykksfall. Ring 113!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er kryssforurensning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når allergener overføres fra en matvare til en annen',
            multipleChoiceOptions: ['Når allergener overføres fra en matvare til en annen', 'Når mat blir gammel', 'Når mat er for krydret', 'Når mat er for salt'],
          },
        ],
        solution: 'Kryssforurensning skjer når allergener overføres via redskaper, overflater eller hender til mat som skulle vært allergenfri.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du skal lage middag til en gjest med glutenallergi. Beskriv tre tiltak for å sikre trygg matlaging.',
        solution: 'Tre tiltak: 1) Bruk separate redskaper og skjærebrett som ikke har vært i kontakt med gluten. 2) Les ingredienslister nøye på alle produkter - gluten kan skjule seg i soyasaus, buljong og krydder. 3) Lag den glutenfrie maten først, før du lager annen mat, og dekk den til. Eventuelt: Vask hendene grundig mellom oppgaver og hold glutenfri mat separat fra annen mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Hygiene og mattrygghet
// ============================================================================

export const CHAPTER_MAT_10_6: TextbookChapter = {
  id: 'mat-10-6',
  courseId: 'mat-10',
  chapterNumber: '6',
  title: 'Hygiene og mattrygghet',
  description: 'Lær om matbårne sykdommer, hygieneregler og trygg mathåndtering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'praktisere god hygiene ved matlaging',
    'forstå prinsipper for trygg oppbevaring og tilberedning',
  ],
  content: [
    {
      id: 'mat-10-6-intro',
      type: 'text',
      content: `Matbårne sykdommer rammer millioner av mennesker hvert år. God hygiene og riktig mathåndtering kan forebygge de fleste tilfeller. Dette kapitlet gir deg kunnskapen du trenger for trygg matlaging.`,
    },
    {
      id: 'mat-10-6-def-1',
      type: 'definition',
      title: 'Mattrygghet',
      content: `Mattrygghet handler om å sikre at mat er trygg å spise - fri for skadelige bakterier, virus, parasitter, kjemikalier og fremmedlegemer som kan gjøre oss syke.`,
    },
    {
      id: 'mat-10-6-text-2',
      type: 'text',
      content: `**Vanlige årsaker til matforgiftning**

**Bakterier**:
- **Salmonella**: Rått kjøtt, egg, fjærfe
- **E. coli**: Rått kjøtt, upasteurisert melk
- **Listeria**: Upasteurisert ost, pålegg, røkt fisk
- **Campylobacter**: Rått fjærfe

**Virus**:
- **Norovirus**: "Omgangssyke", spres via mat og kontakt
- **Hepatitt A**: Skjell, forurenset vann

**Parasitter**:
- **Trikiner**: Rått svinekjøtt, vilt
- **Anisakis**: Rå fisk (frysing dreper den)`,
    },
    {
      id: 'mat-10-6-text-3',
      type: 'text',
      content: `**De fire grunnreglene for mattrygghet**

**1. RENHOLD**
- Vask hender før og under matlaging
- Hold kjøkken og redskaper rene
- Vask frukt og grønnsaker

**2. SKILL**
- Rått kjøtt separat fra annen mat
- Egne skjærebrett for kjøtt
- Oppbevar rått kjøtt nederst i kjøleskapet

**3. GJENNOMSTEKT**
- Kjernetemperatur på minst 70-75 grader
- Kjøttsaft skal være klar, ikke rosa
- Bruk steketermometer ved tvil

**4. KJØL**
- Kjøleskap: 0-4 grader
- Fryser: -18 grader eller kaldere
- Avkjøl varm mat raskt (innen 2 timer)
- Tin mat i kjøleskap, ikke romtemperatur`,
    },
    {
      id: 'mat-10-6-text-4',
      type: 'text',
      content: `**Temperaturkontroll**

**Faresonen**: 5-60 grader - her formerer bakterier seg raskt

**Trygge temperaturer**:
- Kjøleskap: 0-4 grader
- Fryser: -18 grader eller kaldere
- Varmholding: over 60 grader

**Kjernetemperaturer ved steking**:
- Kylling/kalkun: 75 grader (må være gjennomstekt)
- Svinekjøtt: 70 grader
- Kjøttdeig: 70 grader
- Biff (medium): 55-60 grader
- Fisk: 50-55 grader

**2-timersregelen**: Lett bedervelig mat bør ikke stå i romtemperatur mer enn 2 timer totalt.`,
    },
    {
      id: 'mat-10-6-text-5',
      type: 'text',
      content: `**Personlig hygiene på kjøkkenet**

**Håndhygiene**:
- Vask hender i minst 20 sekunder
- Bruk såpe og varmt vann
- Vask ALLTID: før matlaging, etter toalettbesøk, etter å ha tatt på rått kjøtt

**Bekledning**:
- Rent forkle
- Sett opp langt hår
- Fjern smykker (ringer, armbånd)
- Korte, rene negler

**Når du er syk**:
- Ikke lag mat til andre ved mage-/tarmsykdom
- Vent minst 48 timer etter symptomfrihet
- Dekk sår og kutt med plaster`,
    },
    {
      id: 'mat-10-6-warning-1',
      type: 'warning',
      title: 'Rå kylling er farlig!',
      content: `Rå kylling inneholder ofte Campylobacter og Salmonella. Vask aldri rå kylling - det sprer bakterier. Sørg for at kylling er gjennomstekt til 75 grader kjernetemperatur.`,
    },
    {
      id: 'mat-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er "faresonen" for bakterievekst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '5-60 grader',
            multipleChoiceOptions: ['5-60 grader', '0-4 grader', '60-100 grader', '20-30 grader'],
          },
        ],
        solution: 'Faresonen er 5-60 grader der bakterier formerer seg raskt. Mat bør oppbevares utenfor dette området.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er anbefalt kjernetemperatur for kylling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '75 grader',
            multipleChoiceOptions: ['75 grader', '55 grader', '100 grader', '40 grader'],
          },
        ],
        solution: 'Kylling må ha kjernetemperatur på minst 75 grader for å drepe sykdomsfremkallende bakterier som Salmonella og Campylobacter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal du ikke vaske rå kylling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi det sprer bakterier rundt på kjøkkenet',
            multipleChoiceOptions: ['Fordi det sprer bakterier rundt på kjøkkenet', 'Fordi det ødelegger smaken', 'Fordi det gjør kjøttet seigt', 'Det er helt greit å vaske kylling'],
          },
        ],
        solution: 'Vann spruter bakterier fra kyllingen til vasken, benkeplaten og andre overflater. Steking dreper bakteriene uansett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er de fire grunnreglene for mattrygghet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Renhold, skill, gjennomstekt, kjøl',
            multipleChoiceOptions: ['Renhold, skill, gjennomstekt, kjøl', 'Salt, pepper, olje, eddik', 'Kutt, bland, stek, server', 'Vask, tørk, pakk, frys'],
          },
        ],
        solution: 'De fire grunnreglene er: Renhold (hold alt rent), Skill (hold rått og ferdig separat), Gjennomstekt (riktig temperatur), Kjøl (oppbevar kaldt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvor lenge bør du minst vaske hendene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '20 sekunder',
            multipleChoiceOptions: ['20 sekunder', '5 sekunder', '1 minutt', '3 sekunder'],
          },
        ],
        solution: 'Hendene bør vaskes i minst 20 sekunder med såpe og varmt vann for å fjerne bakterier effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv hvordan du trygt håndterer rått kjøtt på kjøkkenet.',
        solution: 'Trygg håndtering av rått kjøtt: 1) Oppbevar rått kjøtt nederst i kjøleskapet så det ikke drypper på annen mat. 2) Bruk eget skjærebrett for rått kjøtt. 3) Vask hender, redskaper og overflater grundig etter kontakt med rått kjøtt. 4) Stek kjøttet til riktig kjernetemperatur. 5) Bruk aldri samme tallerken for rått og ferdigstekt kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Kosthold og livsstil
// ============================================================================

export const CHAPTER_MAT_10_7: TextbookChapter = {
  id: 'mat-10-7',
  courseId: 'mat-10',
  chapterNumber: '7',
  title: 'Kosthold og livsstil',
  description: 'Utforsk sammenhengen mellom kosthold, fysisk aktivitet og helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sammenhengen mellom kosthold, aktivitet og helse',
    'vurdere kostholdsråd kritisk',
  ],
  content: [
    {
      id: 'mat-10-7-intro',
      type: 'text',
      content: `Kosthold og livsstil henger tett sammen. Det vi spiser påvirker energinivå, konsentrasjon, humør og langsiktig helse. I dette kapitlet ser vi på hvordan du kan ta gode valg for kropp og sinn.`,
    },
    {
      id: 'mat-10-7-def-1',
      type: 'definition',
      title: 'Livsstilssykdommer',
      content: `Livsstilssykdommer er sykdommer som i stor grad påvirkes av hvordan vi lever - kosthold, fysisk aktivitet, røyking og alkohol. Eksempler er type 2-diabetes, hjerte-karsykdommer og enkelte krefttyper.`,
    },
    {
      id: 'mat-10-7-text-2',
      type: 'text',
      content: `**Energibalanse**

**Energiinntak = Energiforbruk** gir stabil vekt

**Energiforbruk består av**:
- **Basalstoffskifte (60-75%)**: Energi til å opprettholde livsviktige funksjoner i hvile
- **Fysisk aktivitet (15-30%)**: All bevegelse
- **Matfordøyelse (ca. 10%)**: Energi til å fordøye mat

**For ungdom**:
- Gutter 14-17 år: ca. 2800-3200 kcal/dag
- Jenter 14-17 år: ca. 2200-2500 kcal/dag
- Varierer med aktivitetsnivå

**Vekstperiode**: Ungdom trenger ekstra næring til vekst og utvikling!`,
    },
    {
      id: 'mat-10-7-text-3',
      type: 'text',
      content: `**Kosthold for aktive**

**Før trening**:
- Spis 2-4 timer før
- Karbohydrater for energi
- Lett fordøyelig mat

**Under trening**:
- Vann ved trening under 1 time
- Sportsdrikke/frukt ved lengre økter

**Etter trening**:
- Protein for muskeloppbygging
- Karbohydrater for å fylle energilagrene
- Spis innen 30-60 minutter

**Gode valg**:
- Fullkornbrød med pålegg
- Yoghurt med frukt og nøtter
- Smoothie med bær og melk
- Egg og grove rundstykker`,
    },
    {
      id: 'mat-10-7-text-4',
      type: 'text',
      content: `**Måltidsmønstre**

**Regelmessige måltider**:
- Stabiliserer blodsukkeret
- Forebygger overspising
- Gir jevnere energi

**Frokost er viktig**:
- "Bryter fasten" etter natten
- Bedre konsentrasjon på skolen
- Gode valg: Havregrøt, brødskiver, yoghurt

**Lunsj på skolen**:
- Ta med niste eller spis i kantina
- Unngå for mye sukker
- Grønnsaker og frukt gir vitaminer

**Mellommåltider**:
- Nøtter, frukt, yoghurt
- Unngå brus og godteri
- Planlegg for å unngå fristelser`,
    },
    {
      id: 'mat-10-7-text-5',
      type: 'text',
      content: `**Kritisk blikk på kostholdsråd**

**Vær skeptisk til**:
- "Mirakeldietter" som lover rask vektnedgang
- Kosttilskudd som lover ekstraordinære resultater
- Ekstreme kosthold (kun ett matslag, etc.)
- Påstander uten vitenskapelig grunnlag

**Pålitelige kilder**:
- Helsedirektoratet
- Folkehelseinstituttet
- Registrerte kliniske ernæringsfysiologer
- Vitenskapelig forskning (fagfellevurdert)

**Sunne holdninger til mat**:
- Mat er både næring og nytelse
- Ingen mat er "forbudt"
- Balanse og variasjon
- Lytt til kroppens signaler`,
    },
    {
      id: 'mat-10-7-tip-1',
      type: 'tip',
      title: 'Intuitivt spisemønster',
      content: `Lær å lytte til kroppen din. Spis når du er sulten, stopp når du er mett. Unngå å spise av kjedsomhet eller følelser. Dette kalles intuitiv spising og gir et sunnere forhold til mat.`,
    },
    {
      id: 'mat-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er den største delen av energiforbruket ditt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Basalstoffskiftet',
            multipleChoiceOptions: ['Basalstoffskiftet', 'Fysisk aktivitet', 'Matfordøyelse', 'Hjerneaktivitet'],
          },
        ],
        solution: 'Basalstoffskiftet står for 60-75% av energiforbruket - det er energien kroppen bruker bare for å opprettholde livsviktige funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du spise etter trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Protein og karbohydrater',
            multipleChoiceOptions: ['Protein og karbohydrater', 'Bare vann', 'Bare sukker', 'Ingenting de første timene'],
          },
        ],
        solution: 'Etter trening trenger kroppen protein for muskeloppbygging og karbohydrater for å fylle energilagrene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er frokost viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Den bryter fasten og gir energi til dagen',
            multipleChoiceOptions: ['Den bryter fasten og gir energi til dagen', 'Det er ikke viktig', 'Bare hvis du skal trene', 'Bare i helgene'],
          },
        ],
        solution: 'Frokost bryter fasten etter natten, stabiliserer blodsukkeret og gir bedre konsentrasjon på skolen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner en "mirakeldiett" du bør være skeptisk til?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Lover rask vektnedgang uten vitenskapelig grunnlag',
            multipleChoiceOptions: ['Lover rask vektnedgang uten vitenskapelig grunnlag', 'Anbefaler variasjon', 'Følger helsemyndighetenes råd', 'Inkluderer alle matvaregrupper'],
          },
        ],
        solution: 'Mirakeldietter lover raske resultater uten dokumentasjon, ofte med ekstreme begrensninger. Bærekraftige endringer tar tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er livsstilssykdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Sykdommer som påvirkes av kosthold og aktivitet',
            multipleChoiceOptions: ['Sykdommer som påvirkes av kosthold og aktivitet', 'Sykdommer du er født med', 'Infeksjonssykdommer', 'Allergier'],
          },
        ],
        solution: 'Livsstilssykdommer som type 2-diabetes og hjerte-karsykdommer påvirkes sterkt av hvordan vi lever - kosthold, aktivitet og andre vaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Matlaging og teknikker
// ============================================================================

export const CHAPTER_MAT_10_8: TextbookChapter = {
  id: 'mat-10-8',
  courseId: 'mat-10',
  chapterNumber: '8',
  title: 'Matlaging og teknikker',
  description: 'Lær avanserte matlagingsteknikker og metoder.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke ulike tilberedningsteknikker',
    'tilpasse oppskrifter og improvisere på kjøkkenet',
  ],
  content: [
    {
      id: 'mat-10-8-intro',
      type: 'text',
      content: `God matlaging handler om å mestre grunnleggende teknikker. Når du forstår metodene bak, kan du tilpasse oppskrifter, improvisere med det du har, og skape egne retter. I 10. klasse går vi dypere inn i viktige teknikker.`,
    },
    {
      id: 'mat-10-8-def-1',
      type: 'definition',
      title: 'Tilberedningsmetode',
      content: `En tilberedningsmetode er måten mat varmes opp eller behandles på. Ulike metoder gir ulik smak, tekstur og næringsinnhold. Eksempler: steking, koking, baking, grilling, damping.`,
    },
    {
      id: 'mat-10-8-text-2',
      type: 'text',
      content: `**Varmebaserte metoder**

**Våte metoder** (med væske):
- **Koking**: 100 grader, mat dekket av vann
- **Sjøkoking**: Like under kokepunkt, forsiktig
- **Posjering**: 70-80 grader, skånsom
- **Damping**: Damp fra kokende vann, bevarer næring
- **Braisering**: Kombinerer steking og koking

**Tørre metoder** (uten væske):
- **Steking**: Høy varme, fett i pannen
- **Sautering**: Rask steking, omrøring
- **Stekeovn**: Varme fra alle kanter
- **Grilling**: Strålevarme fra én side
- **Fritering**: Mat nedsenket i varmt fett`,
    },
    {
      id: 'mat-10-8-text-3',
      type: 'text',
      content: `**Knivteknikker**

**Grunnleggende kutt**:
- **Hakking**: Grove, ujevne biter
- **Terning**: Jevne kuber (stor, medium, liten)
- **Strimler** (julienne): Tynne, lange strimler
- **Skiver**: Tynne, flate biter
- **Chiffonade**: Tynne strimler av blader

**Sikkerhet**:
- Klohånd: Fingertuppene inn, knokene styrer kniven
- Skarp kniv er tryggere enn sløv
- Stabil skjærefjel
- Kutt bort fra kroppen

**Tips**: Øv på billige grønnsaker som gulrot og løk!`,
    },
    {
      id: 'mat-10-8-text-4',
      type: 'text',
      content: `**Sauseteknikker**

**Roux-baserte sauser**:
1. Smelt smør i kjele
2. Rør inn like mye mel
3. La det koke 1-2 min
4. Tilsett væske gradvis under omrøring
5. La det tykne

**Reduksjon**:
- Kok inn væske for å konsentrere smak
- Fond, vin, fløte kan reduseres
- Jo mer reduksjon, jo sterkere smak

**Emulsjoner**:
- Blanding av fett og vann
- Majones: Olje emulgert med egg
- Vinaigrette: Olje og eddik

**Smakstilpasning**:
- For salt: tilsett syre (sitron) eller søtt
- For surt: tilsett sukker eller fett
- For bittert: tilsett salt eller fett
- Krydder helt til slutt`,
    },
    {
      id: 'mat-10-8-text-5',
      type: 'text',
      content: `**Deiger og bakst**

**Gjærdeig**:
- Mel, væske, gjær, salt, (sukker, fett)
- Elting utvikler gluten
- Heving: Gjær produserer CO2
- Temperatur viktig: 37 grader er ideelt for gjær

**Mørdeig**:
- Mel, smør, (sukker, egg)
- Smør kald, kuttes inn i mel
- Ikke overarbeid - blir seig
- Hvile i kjøleskap før bruk

**Tips for baking**:
- Ingredienser i romtemperatur
- Mål nøyaktig (baking er kjemi!)
- Ikke åpne ovnen for tidlig
- Avkjøl på rist`,
    },
    {
      id: 'mat-10-8-example-1',
      type: 'example',
      title: 'Hvordan lage en perfekt omelett',
      content: `1) Pisk 3 egg med salt og pepper. 2) Varm smør i stekepanne på middels varme til det skummer. 3) Hell i eggene og rør forsiktig med en slikkepott. 4) Når bunnen stivner men toppen fortsatt er litt rå, legg fyllet på den ene halvdelen. 5) Brett omeletten sammen og server umiddelbart.`,
    },
    {
      id: 'mat-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på koking og posjering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Koking er 100 grader, posjering er 70-80 grader',
            multipleChoiceOptions: ['Koking er 100 grader, posjering er 70-80 grader', 'De er det samme', 'Posjering er varmere', 'Koking bruker olje'],
          },
        ],
        solution: 'Posjering skjer ved lavere temperatur (70-80 grader) enn koking (100 grader), noe som gir skånsommere tilberedning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en roux?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En blanding av smør og mel som brukes til å jevne sauser',
            multipleChoiceOptions: ['En blanding av smør og mel som brukes til å jevne sauser', 'En type kniv', 'En grønnsak', 'En krydderblanding'],
          },
        ],
        solution: 'Roux er like deler smør og mel som kokes sammen. Det brukes som basis for hvite sauser som bechamel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er julienne-kutt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tynne, lange strimler',
            multipleChoiceOptions: ['Tynne, lange strimler', 'Store terninger', 'Hakkede biter', 'Runde skiver'],
          },
        ],
        solution: 'Julienne er tynne strimler (ca. 3mm x 5cm), ofte brukt til wok-retter eller salater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er skarp kniv tryggere enn sløv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Du trenger mindre kraft og har bedre kontroll',
            multipleChoiceOptions: ['Du trenger mindre kraft og har bedre kontroll', 'Den kutter ikke så dypt', 'Den er lettere', 'Det er ikke sant'],
          },
        ],
        solution: 'Med skarp kniv trenger du mindre kraft, så kniven er mindre sannsynlig til å gli og kutte deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva gjør gjær i en deig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Produserer CO2 som får deigen til å heve',
            multipleChoiceOptions: ['Produserer CO2 som får deigen til å heve', 'Gir farge', 'Gjør deigen seig', 'Dreper bakterier'],
          },
        ],
        solution: 'Gjær er levende mikroorganismer som spiser sukker og produserer karbondioksid (CO2) som får deigen til å heve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv trinn for trinn hvordan du lager en hvit saus (bechamel).',
        solution: '1) Smelt 40g smør i en kjele på middels varme. 2) Rør inn 40g hvetemel og la det koke i 1-2 minutter uten å brunes. 3) Ta kjelen av varmen og tilsett 5 dl kald melk gradvis mens du visper. 4) Sett tilbake på varmen og kok under stadig omrøring til sausen tykner (ca. 5-10 min). 5) Smak til med salt, pepper og evt. muskatnøtt. Tips: Kald melk i varm roux forhindrer klumper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Mat og miljø
// ============================================================================

export const CHAPTER_MAT_10_9: TextbookChapter = {
  id: 'mat-10-9',
  courseId: 'mat-10',
  chapterNumber: '9',
  title: 'Mat og miljø',
  description: 'Utforsk miljøpåvirkning fra matproduksjon og forbruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte problemstillinger knyttet til mat og miljø',
    'ta bevisste forbrukervalg',
  ],
  content: [
    {
      id: 'mat-10-9-intro',
      type: 'text',
      content: `Mat og miljø henger uløselig sammen. Fra jord til bord etterlater maten vår et klimaavtrykk. Ved å forstå disse sammenhengene kan vi ta valg som er bedre for både helsen vår og planetens helse.`,
    },
    {
      id: 'mat-10-9-def-1',
      type: 'definition',
      title: 'Klimaavtrykk',
      content: `Klimaavtrykk (karbonfotavtrykk) er den totale mengden klimagasser som slippes ut i forbindelse med en aktivitet, et produkt eller en tjeneste, målt i CO2-ekvivalenter.`,
    },
    {
      id: 'mat-10-9-text-2',
      type: 'text',
      content: `**Matens klimaavtrykk**

Matproduksjonen står for 25-30% av globale klimagassutslipp:

**Hvor kommer utslippene fra?**
- Husdyrhold (metan fra drøvtyggere)
- Kunstgjødselproduksjon
- Arealbruksendringer (avskoging)
- Transport og lagring
- Matsvinn

**Klimaavtrykk per kg mat**:
- Storfekjøtt: 26 kg CO2
- Lam: 22 kg CO2
- Ost: 13 kg CO2
- Svinekjøtt: 7 kg CO2
- Kylling: 5 kg CO2
- Egg: 4 kg CO2
- Fisk: 3-5 kg CO2
- Melk: 1 kg CO2
- Grønnsaker: 0,5-2 kg CO2
- Belgfrukter: 1 kg CO2`,
    },
    {
      id: 'mat-10-9-text-3',
      type: 'text',
      content: `**Vannforbruk og matproduksjon**

Jordbruket bruker 70% av verdens ferskvann:

**Vannfotavtrykk per kg**:
- Storfekjøtt: 15 000 liter
- Svinekjøtt: 6 000 liter
- Kylling: 4 300 liter
- Egg: 3 300 liter
- Ris: 2 500 liter
- Hvete: 1 800 liter
- Poteter: 300 liter
- Tomater: 200 liter

**Vanningsbehov** varierer med klima - mat fra tørre områder krever ofte mer kunstig vanning.`,
    },
    {
      id: 'mat-10-9-text-4',
      type: 'text',
      content: `**Biologisk mangfold**

Matproduksjonen påvirker artsmangfoldet:

**Trusler**:
- Monokultur reduserer variasjonen
- Sprøytemidler dreper insekter (inkl. pollinatorer)
- Habitattap ved utvidelse av jordbruksland
- Overfiske truer havets økosystemer

**Positive tiltak**:
- Økologisk jordbruk
- Pollinatorvennlig dyrking
- Rotasjon av avlinger
- Bærekraftig fiske (MSC)
- Beskyttelse av våtmarker og naturområder`,
    },
    {
      id: 'mat-10-9-text-5',
      type: 'text',
      content: `**Hva kan du gjøre?**

**Reduser klimaavtrykket**:
- Spis mer plantebasert
- Velg sesongvarer
- Reduser matsvinn
- Velg lokalprodusert når mulig

**Smarte valg**:
- Kjøttfrie dager
- Erstatt storfe med kylling, fisk eller belgfrukter
- Velg norske grønnsaker i sesong
- Frys mat som nærmer seg utgangsdato

**Tenk hele kjeden**:
- Hvordan er maten produsert?
- Hvor langt har den reist?
- Hvordan er den pakket?
- Hva skjer med emballasjen?`,
    },
    {
      id: 'mat-10-9-note-1',
      type: 'note',
      title: 'EAT-Lancet rapporten',
      content: `EAT-Lancet-rapporten fra 2019 anbefaler et "planetarisk kosthold" som er sunt for både mennesker og planeten: Hovedsakelig plantebasert, med moderate mengder fisk, fjærfe og meieri, og lite rødt kjøtt.`,
    },
    {
      id: 'mat-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Omtrent hvor stor andel av verdens ferskvann brukes til jordbruk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '70%',
            multipleChoiceOptions: ['70%', '20%', '40%', '90%'],
          },
        ],
        solution: 'Jordbruket bruker ca. 70% av verdens ferskvannsressurser, hovedsakelig til vanning av avlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken matvare har høyest klimaavtrykk per kg?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Storfekjøtt',
            multipleChoiceOptions: ['Storfekjøtt', 'Kylling', 'Fisk', 'Grønnsaker'],
          },
        ],
        solution: 'Storfekjøtt har høyest klimaavtrykk (ca. 26 kg CO2/kg) pga. metan fra drøvtygging og stort arealbehov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er biologisk mangfold viktig for matproduksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Vi trenger pollinatorer og et variert økosystem',
            multipleChoiceOptions: ['Vi trenger pollinatorer og et variert økosystem', 'Det ser penere ut', 'Det gir billigere mat', 'Det er ikke viktig'],
          },
        ],
        solution: 'Mange avlinger er avhengige av pollinerende insekter. Et variert økosystem er også mer motstandsdyktig mot sykdom og klimaendringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva innebærer å velge sesongvarer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å kjøpe mat som naturlig produseres på den årstiden',
            multipleChoiceOptions: ['Å kjøpe mat som naturlig produseres på den årstiden', 'Å kjøpe mat på salg', 'Å kjøpe mat som snart går ut på dato', 'Å kjøpe importert mat'],
          },
        ],
        solution: 'Sesongvarer er mat som naturlig høstes i den aktuelle årstiden. De krever mindre energi til drivhus og lagring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre ting du kan gjøre for å redusere klimaavtrykket fra maten din.',
        solution: 'Tre tiltak: 1) Spise mer plantebasert og mindre kjøtt, spesielt storfekjøtt. 2) Redusere matsvinn ved å planlegge innkjøp, bruke rester og forstå datomerking. 3) Velge norske sesongvarer i stedet for importerte varer som har reist langt. Andre tiltak: Kjøpe økologisk, velge bærekraftig sjømat (MSC), dyrke selv.',
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

export const CHAPTER_MAT_10_10: TextbookChapter = {
  id: 'mat-10-10',
  courseId: 'mat-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  description: 'Repetisjon og forberedelse til eksamen i mat og helse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'vise helhetlig kompetanse i faget',
    'forberede seg til eksamen',
  ],
  content: [
    {
      id: 'mat-10-10-intro',
      type: 'text',
      content: `I dette avsluttende kapitlet repeterer vi de viktigste temaene fra hele året og gir tips til eksamensforberedelse. Eksamen i mat og helse kan være både praktisk og teoretisk, så det er viktig å beherske begge deler.`,
    },
    {
      id: 'mat-10-10-text-1',
      type: 'text',
      content: `**Oversikt over pensum**

**Ernæring og helse**:
- Makro- og mikronæringsstoffer
- Kostholdsråd og næringsbehov
- Tallerkenmodellen
- Sammenheng kosthold-helse

**Bærekraft og miljø**:
- Klimaavtrykk fra ulike matvarer
- Matsvinn og tiltak
- Økologisk vs. konvensjonelt
- Forbrukerbevissthet

**Mattradisjoner**:
- Norske mattradisjoner (regionalt og sesongbasert)
- Verdensmat og ulike matkulturer
- Mat og religion

**Allergier og helse**:
- Allergi vs. intoleranse
- De 14 allergenene
- Tilpasning av mat`,
    },
    {
      id: 'mat-10-10-text-2',
      type: 'text',
      content: `**Hygiene og mattrygghet**:
- De fire grunnreglene
- Temperaturkontroll og faresonen
- Personlig hygiene
- Forebygging av matforgiftning

**Matlaging**:
- Tilberedningsmetoder
- Knivteknikker
- Sauseteknikker
- Deiger og bakst

**Kosthold og livsstil**:
- Energibalanse
- Måltidsmønstre
- Kritisk tenkning om kostholdsråd`,
    },
    {
      id: 'mat-10-10-text-3',
      type: 'text',
      content: `**Tips til praktisk eksamen**

**Forberedelse**:
- Les oppgaven nøye flere ganger
- Lag en tidsplan
- Forbered ingredienslister
- Tenk gjennom rekkefølge

**Under eksamen**:
- Hold arbeidsplassen ryddig
- Følg hygienereglene
- Smak underveis
- Tenk på anretning

**Vanlige feil å unngå**:
- Dårlig tidsplanlegging
- Glemmer å lese oppskriften ferdig
- Usikker temperaturkontroll
- Rotete arbeidsplass`,
    },
    {
      id: 'mat-10-10-text-4',
      type: 'text',
      content: `**Tips til teoretisk eksamen**

**Forberedelse**:
- Repeter hovedtemaene
- Lag sammendrag/tankekart
- Øv på tidligere eksamensoppgaver
- Diskuter med medelever

**Under eksamen**:
- Les alle oppgaver først
- Start med det du kan best
- Svar på alle delspørsmål
- Bruk fagbegreper

**Svarteknikk**:
- Begrunn påstander
- Gi konkrete eksempler
- Vis bredde i kunnskapen
- Strukturer svaret tydelig`,
    },
    {
      id: 'mat-10-10-text-5',
      type: 'text',
      content: `**Viktige fagbegreper å kunne**

**Ernæring**: Næringsstoffer, makro/mikro, vitaminer, mineraler, energibehov, BMR

**Mattrygghet**: Kryssforurensning, faresone, kjernetemperatur, pasteurisering, allergener

**Bærekraft**: Klimaavtrykk, matsvinn, økologisk, lokalprodusert, sesongvarer

**Matlaging**: Roux, reduksjon, emulsjon, posjering, braisering, julienne

**Kultur**: Mattradisjon, høytidsmat, verdensmat, halal, kosher`,
    },
    {
      id: 'mat-10-10-tip-1',
      type: 'tip',
      title: 'Eksamenstips',
      content: `Eksamen handler ikke bare om å kunne fakta, men å vise forståelse og refleksjon. Vis at du kan knytte sammen teori og praksis, og reflektere over egne valg.`,
    },
    {
      id: 'mat-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke næringsstoffer gir energi (kalorier)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Karbohydrater, proteiner og fett',
            multipleChoiceOptions: ['Karbohydrater, proteiner og fett', 'Vitaminer og mineraler', 'Bare karbohydrater', 'Vann og fiber'],
          },
        ],
        solution: 'Makronæringsstoffene karbohydrater (4 kcal/g), proteiner (4 kcal/g) og fett (9 kcal/g) gir kroppen energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er faresonen for bakterievekst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '5-60 grader',
            multipleChoiceOptions: ['5-60 grader', '0-4 grader', '60-100 grader', 'Under 0 grader'],
          },
        ],
        solution: 'Faresonen 5-60 grader er temperaturen der bakterier formerer seg raskest. Mat bør ikke være i dette området lenge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn de fire grunnreglene for mattrygghet.',
        solution: 'De fire grunnreglene er: 1) RENHOLD - hold alt rent, vask hender. 2) SKILL - hold rått kjøtt adskilt fra ferdig mat. 3) GJENNOMSTEKT - sørg for riktig kjernetemperatur. 4) KJØL - oppbevar mat ved riktig temperatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom allergi og intoleranse.',
        solution: 'Allergi: Immunsystemet reagerer på et stoff som om det var farlig. Kan gi alvorlige, livstruende reaksjoner (anafylaksi). Intoleranse: Kroppen klarer ikke å fordøye et stoff, f.eks. pga. manglende enzymer. Gir ubehag (magesmerter, oppblåsthet), men er ikke livstruende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du redusere klimaavtrykket fra maten din?',
        solution: 'Tiltak for lavere klimaavtrykk: 1) Spis mer plantebasert og mindre kjøtt, spesielt storfe. 2) Velg sesongvarer og lokalprodusert mat. 3) Reduser matsvinn. 4) Velg bærekraftig sjømat (MSC-merket). 5) Velg norske grønnsaker fremfor importerte. 6) Spis mindre bearbeidet mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du skal lage en treretters middag for en person med glutenallergi. Beskriv hva du må tenke på for å sikre trygg mat.',
        solution: 'Ved matlaging for person med glutenallergi: 1) Velg naturlig glutenfrie råvarer (kjøtt, fisk, grønnsaker, ris, poteter). 2) Les ALLE ingredienslister - gluten kan skjule seg i soya, buljong, sauser. 3) Bruk separate redskaper eller vask grundig. 4) Unngå kryssforurensning - lag den glutenfrie maten først. 5) Vær obs på skjulte kilder som panering, mehlsvinger i sauser. 6) Bruk glutenfrie alternativer til pasta, brød etc. 7) Spør gjesten om alvorlighetsgrad og preferanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar tallerkenmodellen og gi et konkret eksempel på et måltid som følger den.',
        solution: 'Tallerkenmodellen: Halve tallerkenen fylles med grønnsaker/salat, en fjerdedel med proteinrik mat, og en fjerdedel med karbohydratrik mat. Eksempel: Grillet kyllingfilet (protein), fullkornspasta (karbohydrat), og stor salat med tomat, agurk, paprika og spinat (grønnsaker). Drikke: vann eller melk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-10-10-ex-8',
      type: 'exercise',
      exercise: {
        id: 'mat-10-10-ex-8',
        number: '8',
        type: 'classic',
        task: 'Velg en norsk mattradisjon og forklar dens historiske bakgrunn og betydning.',
        solution: 'Eksempel - Rakfisk: Historisk bakgrunn: Rakfisk er en fermentert fiskerett som stammer fra innlandet i Norge (spesielt Valdres). Før moderne kjøleteknikker var fermentering en måte å konservere fisk til vinteren. Prosessen: Ørret eller røye saltes og legges i tønner, der melkesyrebakterier fermenterer fisken over 2-3 måneder. Betydning: Rakfisk er en viktig del av norsk matkultur og har egen festival i Valdres. Den representerer norsk tradisjon for å utnytte naturens ressurser og konservere mat.',
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

export const MAT_10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_10_1,
  CHAPTER_MAT_10_2,
  CHAPTER_MAT_10_3,
  CHAPTER_MAT_10_4,
  CHAPTER_MAT_10_5,
  CHAPTER_MAT_10_6,
  CHAPTER_MAT_10_7,
  CHAPTER_MAT_10_8,
  CHAPTER_MAT_10_9,
  CHAPTER_MAT_10_10,
];

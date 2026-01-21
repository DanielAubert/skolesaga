/**
 * Tekstbok kapitler for KRLE 6. klasse
 * Innhold tilpasset elever på 6. trinn basert på LK20
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: KRISTENDOM
// ============================================================================

export const CHAPTER_KRLE_6_1_1: TextbookChapter = {
  id: 'krle-6-1-1',
  courseId: 'krle-6',
  chapterNumber: '1.1',
  title: 'Bibelen',
  description: 'Lær om Bibelen, dens oppbygning og viktige fortellinger.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske og beskrive sentrale fortellinger fra Bibelen'],
  content: [
    {
      id: 'krle-6-1-1-intro',
      type: 'text',
      content: `## Bibelen - kristendommens hellige bok

Bibelen er den viktigste boken for kristne. Den inneholder fortellinger, poesi, lover og profetier som har formet vestlig kultur i tusenvis av år.`,
    },
    {
      id: 'krle-6-1-1-def-bibel',
      type: 'definition',
      title: 'Bibelens oppbygning',
      content: `**Bibelen har to hoveddeler:**

**Det gamle testamentet (GT):**
- 39 bøker
- Jødenes hellige skrifter
- Skapelsen, patriarkene, profetene
- Skrevet før Jesus

**Det nye testamentet (NT):**
- 27 bøker
- Handler om Jesus og de første kristne
- Evangeliene, Apostlenes gjerninger, brevene`,
    },
    {
      id: 'krle-6-1-1-def-evangeliene',
      type: 'definition',
      title: 'Evangeliene',
      content: `**De fire evangeliene:**
- **Matteus** - skrevet for jøder
- **Markus** - det korteste, action-preget
- **Lukas** - detaljert, for grekere
- **Johannes** - filosofisk, annerledes

**Evangelium** betyr "godt budskap".

Alle fire forteller om Jesu liv, men med litt ulike vinklinger.`,
    },
    {
      id: 'krle-6-1-1-def-fortellinger',
      type: 'definition',
      title: 'Viktige bibelfortellinger',
      content: `**Fra Det gamle testamentet:**
- Skapelsen (1. Mosebok)
- Adam og Eva
- Noah og syndfloden
- Moses og utvandringen fra Egypt
- David og Goliat

**Fra Det nye testamentet:**
- Jesu fødsel (julefortellingen)
- Jesu dåp
- Lignelsene (Den bortkomne sønn, Den barmhjertige samaritan)
- Påskefortellingen`,
    },
    {
      id: 'krle-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er de to hoveddelene av Bibelen?',
        solution: 'Det gamle testamentet og Det nye testamentet.',
      },
    },
    {
      id: 'krle-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er et evangelium, og hvor mange evangelier er det?',
        solution: 'Evangelium betyr "godt budskap". Det er fire evangelier: Matteus, Markus, Lukas og Johannes.',
      },
    },
    {
      id: 'krle-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en bibelfortelling du kjenner. Fortell kort hva den handler om og hva du tror budskapet er.',
        solution: 'Svar varierer. Eleven bør gjenfortelle en historie og reflektere over budskapet.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_1_2: TextbookChapter = {
  id: 'krle-6-1-2',
  courseId: 'krle-6',
  chapterNumber: '1.2',
  title: 'Jesu liv og lære',
  description: 'Følg Jesu liv fra fødsel til påske og lær om hans budskap.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['gjøre rede for kristendommens opprinnelse og utvikling'],
  content: [
    {
      id: 'krle-6-1-2-intro',
      type: 'text',
      content: `## Jesus fra Nasaret

Jesus er hovedpersonen i kristendommen. Kristne tror han var Guds sønn som kom for å frelse menneskene.`,
    },
    {
      id: 'krle-6-1-2-def-fodsel',
      type: 'definition',
      title: 'Jesu fødsel',
      content: `**Julefortellingen:**
- Maria og Josef reiste til Betlehem
- Jesus ble født i en stall
- Hyrdene kom for å se barnet
- Vismennene fulgte stjernen

**Viktig for kristne:**
Jesus ble født som et fattig barn, ikke i et palass. Han kom for alle mennesker.`,
    },
    {
      id: 'krle-6-1-2-def-lære',
      type: 'definition',
      title: 'Jesu lære',
      content: `**Hovedbudskap:**
- Elsk Gud og elsk din neste
- Tilgi andre
- Hjelp de svake
- Guds rike er nær

**Lignelser:**
Jesus fortalte lignelser (korte historier med en lærdom):
- Den barmhjertige samaritan (hjelp alle)
- Den bortkomne sønn (Gud tilgir)
- Sennepsfrøet (troen vokser)`,
    },
    {
      id: 'krle-6-1-2-def-paske',
      type: 'definition',
      title: 'Påsken',
      content: `**Den siste uken:**
- Palmesøndag: Jesus rir inn i Jerusalem
- Skjærtorsdag: Det siste måltidet med disiplene
- Langfredag: Jesus dør på korset
- Påskedag: Jesus står opp fra de døde

**Betydning:**
For kristne er påsken den viktigste høytiden. De tror Jesus døde for menneskenes synder og stod opp igjen.`,
    },
    {
      id: 'krle-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvor ble Jesus født, og hva feirer vi på denne dagen?',
        solution: 'Jesus ble født i Betlehem. Vi feirer dette på julaften/juledag.',
      },
    },
    {
      id: 'krle-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er en lignelse? Gi et eksempel.',
        solution: 'En lignelse er en kort historie med en lærdom. Eksempel: Den barmhjertige samaritan handler om å hjelpe alle mennesker, ikke bare de som er like deg selv.',
      },
    },
    {
      id: 'krle-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er påsken den viktigste høytiden for kristne?',
        solution: 'Påsken er viktigst fordi kristne tror Jesus stod opp fra de døde. Dette viser at døden er overvunnet og at det er håp om evig liv.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_1_3: TextbookChapter = {
  id: 'krle-6-1-3',
  courseId: 'krle-6',
  chapterNumber: '1.3',
  title: 'Kristen praksis',
  description: 'Utforsk kristne tradisjoner, høytider og ritualer.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['beskrive kristne høytider og ritualer'],
  content: [
    {
      id: 'krle-6-1-3-intro',
      type: 'text',
      content: `## Kristne tradisjoner og ritualer

Kristne har mange tradisjoner og ritualer som markerer viktige hendelser i livet og året.`,
    },
    {
      id: 'krle-6-1-3-def-dap',
      type: 'definition',
      title: 'Dåpen',
      content: `**Hva er dåp?**
Et ritual der man blir medlem av kirken.

**Barnedåp:**
- Vanligst i Norge
- Presten øser vann over barnets hode
- Faddere lover å hjelpe barnet i troen

**Voksendåp:**
- Noen velger å døpes som voksen
- Ofte neddykking i vann`,
    },
    {
      id: 'krle-6-1-3-def-konfirmasjon',
      type: 'definition',
      title: 'Konfirmasjon',
      content: `**Hva er konfirmasjon?**
- Markerer overgangen til voksenlivet
- Vanlig når man er 14-15 år
- Bekrefter dåpen

**I Norge:**
- Kirkelig konfirmasjon (i kirken)
- Borgerlig konfirmasjon (humanistisk)
- Stor feiring med familie`,
    },
    {
      id: 'krle-6-1-3-def-hoytider',
      type: 'definition',
      title: 'Kristne høytider',
      content: `**De viktigste høytidene:**

**Jul (desember):**
- Feirer Jesu fødsel
- Julaften og juledag

**Påske (mars/april):**
- Feirer Jesu død og oppstandelse
- Langfredag og påskedag

**Pinse (50 dager etter påske):**
- Feirer Den hellige ånd
- Kirkens "fødselsdag"`,
    },
    {
      id: 'krle-6-1-3-def-kirken',
      type: 'definition',
      title: 'Kirken',
      content: `**Kirken er:**
- Bygningen der kristne samles
- Fellesskapet av kristne

**I kirken:**
- Alter (der nattverden feires)
- Prekestol (der presten taler)
- Døpefont (for dåp)
- Kirkebenker

**Gudstjeneste:**
- Samling på søndag
- Sang, bønn, preken
- Nattverd (brød og vin)`,
    },
    {
      id: 'krle-6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er dåp, og når skjer det vanligvis i Norge?',
        solution: 'Dåp er et ritual der man blir medlem av kirken. I Norge døpes de fleste som babyer (barnedåp).',
      },
    },
    {
      id: 'krle-6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn de tre viktigste kristne høytidene og hva de feirer.',
        solution: 'Jul (Jesu fødsel), Påske (Jesu død og oppstandelse), Pinse (Den hellige ånd/kirkens fødselsdag).',
      },
    },
    {
      id: 'krle-6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva er forskjellen på kirkelig og borgerlig konfirmasjon?',
        solution: 'Kirkelig konfirmasjon skjer i kirken og handler om kristen tro. Borgerlig konfirmasjon er humanistisk og fokuserer på verdier uten religion. Begge markerer overgangen til voksenlivet.',
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: ANDRE RELIGIONER
// ============================================================================

export const CHAPTER_KRLE_6_2_1: TextbookChapter = {
  id: 'krle-6-2-1',
  courseId: 'krle-6',
  chapterNumber: '2.1',
  title: 'Islam',
  description: 'Lær om islam, Koranen og muslimske tradisjoner.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske og beskrive sentrale elementer i islam'],
  content: [
    {
      id: 'krle-6-2-1-intro',
      type: 'text',
      content: `## Islam - verdens nest største religion

Islam er en av verdens største religioner med nesten 2 milliarder tilhengere. Muslimer tror på én Gud (Allah) og følger profeten Muhammeds lære.`,
    },
    {
      id: 'krle-6-2-1-def-muhammed',
      type: 'definition',
      title: 'Profeten Muhammed',
      content: `**Muhammed (570-632 e.Kr.):**
- Født i Mekka (Saudi-Arabia)
- Fikk åpenbaringer fra Gud gjennom engelen Gabriel
- Disse åpenbaringene ble Koranen
- Regnes som den siste og viktigste profeten

**Viktig:**
Muslimer tror også på Jesus, Moses og Abraham, men ser dem som profeter, ikke som Guds sønn.`,
    },
    {
      id: 'krle-6-2-1-def-koran',
      type: 'definition',
      title: 'Koranen',
      content: `**Koranen er islams hellige bok:**
- Guds ord, gitt til Muhammed
- Skrevet på arabisk
- 114 kapitler (surer)
- Veiledning for livet

**Muslimer tror:**
- Koranen er Guds direkte ord
- Den er perfekt og uforanderlig`,
    },
    {
      id: 'krle-6-2-1-def-fem',
      type: 'definition',
      title: 'Islams fem søyler',
      content: `**De fem søylene er pliktene til en muslim:**

1. **Trosbekjennelsen (shahada):**
   "Det er ingen gud uten Allah, og Muhammed er hans profet"

2. **Bønn (salat):**
   Bønn fem ganger daglig mot Mekka

3. **Almisse (zakat):**
   Gi til de fattige

4. **Faste (sawm):**
   Faste i måneden Ramadan

5. **Pilegrimsreise (hajj):**
   Reise til Mekka minst én gang`,
    },
    {
      id: 'krle-6-2-1-def-moske',
      type: 'definition',
      title: 'Moskeen',
      content: `**Moskeen er muslimers bønnehus:**

**Kjennetegn:**
- Minaret (tårn for bønnerop)
- Bønnerom (uten stoler)
- Retning mot Mekka
- Man tar av seg skoene

**Fredagsbønn:**
Hovedgudstjenesten er på fredag.`,
    },
    {
      id: 'krle-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva heter islams hellige bok?',
        solution: 'Koranen.',
      },
    },
    {
      id: 'krle-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre av islams fem søyler.',
        solution: 'Eksempler: Trosbekjennelsen, bønn, almisse, faste (Ramadan), pilegrimsreise til Mekka.',
      },
    },
    {
      id: 'krle-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva har islam til felles med kristendommen?',
        solution: 'Begge tror på én Gud. Begge har hellige bøker. Begge anerkjenner mange av de samme profetene (Abraham, Moses, Jesus). Begge har bønn og gode gjerninger som viktig.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_2_2: TextbookChapter = {
  id: 'krle-6-2-2',
  courseId: 'krle-6',
  chapterNumber: '2.2',
  title: 'Jødedommen',
  description: 'Utforsk jødedommen, Toraen og jødiske tradisjoner.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utforske og beskrive sentrale elementer i jødedommen'],
  content: [
    {
      id: 'krle-6-2-2-intro',
      type: 'text',
      content: `## Jødedommen - den eldste av de tre

Jødedommen er over 3000 år gammel og er "moren" til kristendommen og islam. Jødene var det første folket som trodde på bare én Gud.`,
    },
    {
      id: 'krle-6-2-2-def-torah',
      type: 'definition',
      title: 'Toraen',
      content: `**Toraen er jødedommens helligste bok:**
- De fem Mosebøkene
- Inneholder loven Gud ga Moses
- Skrevet på hebraisk
- Oppbevares i en ark i synagogen

**613 bud:**
Toraen inneholder 613 bud og forbud som jøder skal følge.`,
    },
    {
      id: 'krle-6-2-2-def-synagoge',
      type: 'definition',
      title: 'Synagogen',
      content: `**Synagogen er jødenes bønnehus:**

**Kjennetegn:**
- Toraen oppbevares i en ark
- Menn bruker kippa (lue)
- Bønnesjal (tallit)
- Retning mot Jerusalem

**Sabbat:**
Helligdagen fra fredag kveld til lørdag kveld.`,
    },
    {
      id: 'krle-6-2-2-def-hoytider',
      type: 'definition',
      title: 'Jødiske høytider',
      content: `**Viktige høytider:**

**Sabbat:**
- Hver uke (fredag-lørdag)
- Hviledag

**Pesach (påske):**
- Feirer utgangen fra Egypt
- Varer en uke

**Jom Kippur (forsoningsdagen):**
- Helligste dagen
- Faste og bønn

**Chanukka (lysfesten):**
- Åtte dager i desember
- Tenner lys i en åttearmede lysestake`,
    },
    {
      id: 'krle-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva heter jødenes hellige bok?',
        solution: 'Toraen.',
      },
    },
    {
      id: 'krle-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er sabbat, og når feires den?',
        solution: 'Sabbat er jødenes hellige hviledag. Den feires hver uke fra fredag kveld til lørdag kveld.',
      },
    },
    {
      id: 'krle-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor kalles jødedommen, kristendommen og islam for "søsterreligioner"?',
        solution: 'Fordi alle tre stammer fra Abraham. De tror på én Gud. De deler mange av de samme fortellingene og profetene. Jødedommen er den eldste, kristendommen kom fra jødedommen, og islam anerkjenner begge.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_2_3: TextbookChapter = {
  id: 'krle-6-2-3',
  courseId: 'krle-6',
  chapterNumber: '2.3',
  title: 'Hinduisme og buddhisme',
  description: 'Lær om østlige religioner og deres tradisjoner.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske og beskrive sentrale elementer i østlige religioner'],
  content: [
    {
      id: 'krle-6-2-3-intro',
      type: 'text',
      content: `## Religioner fra øst

Hinduismen og buddhismen kommer fra India og Asia. De er ganske forskjellige fra de vestlige religionene, men har påvirket milliarder av mennesker.`,
    },
    {
      id: 'krle-6-2-3-def-hinduisme',
      type: 'definition',
      title: 'Hinduismen',
      content: `**Hinduismen er verdens eldste aktive religion:**
- Over 1 milliard tilhengere
- Mest i India
- Mange guder (Brahma, Vishnu, Shiva)

**Sentrale begreper:**
- **Karma:** Handlingene dine påvirker fremtiden
- **Samsara:** Gjenfødelse - sjelen fødes på nytt
- **Moksha:** Befrielse fra gjenfødelsens hjul`,
    },
    {
      id: 'krle-6-2-3-def-buddhisme',
      type: 'definition',
      title: 'Buddhismen',
      content: `**Buddhismen startet med Buddha:**
- Siddharta Gautama (ca. 500 f.Kr.)
- Oppdaget veien til opplysning
- Ca. 500 millioner buddhister i dag

**De fire edle sannheter:**
1. Livet inneholder lidelse
2. Lidelse skyldes begjær
3. Det er mulig å slutte å lide
4. Den åttefoldige vei er løsningen`,
    },
    {
      id: 'krle-6-2-3-def-karma',
      type: 'definition',
      title: 'Karma og gjenfødelse',
      content: `**Karma:**
- Alle handlinger har konsekvenser
- Gode handlinger → god karma
- Dårlige handlinger → dårlig karma

**Gjenfødelse:**
- Sjelen fødes på nytt etter døden
- Hvilken form avhenger av karma
- Målet er å bryte syklusen`,
    },
    {
      id: 'krle-6-2-3-def-praksis',
      type: 'definition',
      title: 'Praksis',
      content: `**Hinduisme:**
- Bønn og offer i templer
- Yoga og meditasjon
- Hellige elver (Ganges)

**Buddhisme:**
- Meditasjon
- Munker i oransje klær
- Buddhastatuer og templer
- Mantraer og bønn`,
    },
    {
      id: 'krle-6-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er karma?',
        solution: 'Karma betyr at alle handlinger har konsekvenser. Gode handlinger gir god karma, dårlige handlinger gir dårlig karma.',
      },
    },
    {
      id: 'krle-6-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvem var Buddha, og hva oppdaget han?',
        solution: 'Buddha var Siddharta Gautama, en prins fra India. Han oppdaget veien til opplysning og frihet fra lidelse gjennom meditasjon.',
      },
    },
    {
      id: 'krle-6-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva er likt og ulikt mellom hinduisme og buddhisme?',
        solution: 'Likt: Begge tror på karma og gjenfødelse. Begge bruker meditasjon. Begge kommer fra India. Ulikt: Hinduisme har mange guder, buddhisme har ingen skapergud. Hinduisme har kastesystem, buddhisme avviser det.',
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: LIVSSYN OG ETIKK
// ============================================================================

export const CHAPTER_KRLE_6_3_1: TextbookChapter = {
  id: 'krle-6-3-1',
  courseId: 'krle-6',
  chapterNumber: '3.1',
  title: 'Livssyn',
  description: 'Utforsk ulike livssyn og hva det betyr å ha et livssyn.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utforske og beskrive ulike livssyn'],
  content: [
    {
      id: 'krle-6-3-1-intro',
      type: 'text',
      content: `## Hva tror du på?

Et livssyn er det du tror om livet, verden og hva som er viktig. Ikke alle har en religion, men alle har et livssyn!`,
    },
    {
      id: 'krle-6-3-1-def-livssyn',
      type: 'definition',
      title: 'Hva er et livssyn?',
      content: `**Et livssyn handler om:**
- Hva du tror om verden
- Hva som er meningen med livet
- Hva som er rett og galt
- Hvordan du vil leve

**Eksempler:**
- Religiøse livssyn (kristendom, islam, osv.)
- Ikke-religiøse livssyn (humanisme)`,
    },
    {
      id: 'krle-6-3-1-def-humanisme',
      type: 'definition',
      title: 'Humanisme',
      content: `**Humanisme er et ikke-religiøst livssyn:**

**Humanister tror:**
- Mennesket er viktigst
- Vi må bruke fornuft og vitenskap
- Alle mennesker har verdi
- Vi må ta ansvar for hverandre
- Det finnes ingen guder

**Human-Etisk Forbund:**
Norges største livssynsorganisasjon utenfor kirken.`,
    },
    {
      id: 'krle-6-3-1-def-verdier',
      type: 'definition',
      title: 'Verdier',
      content: `**Verdier er det vi synes er viktig:**

**Eksempler på verdier:**
- Ærlighet
- Vennskap
- Familie
- Rettferdighet
- Frihet
- Respekt

Alle har verdier, men ikke alle har samme verdier. Livssynet ditt påvirker hvilke verdier du har.`,
    },
    {
      id: 'krle-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er et livssyn?',
        solution: 'Et livssyn er det man tror om livet, verden og hva som er viktig. Det handler om mening og verdier.',
      },
    },
    {
      id: 'krle-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er humanisme, og hva tror humanister på?',
        solution: 'Humanisme er et ikke-religiøst livssyn. Humanister tror på menneskets verdi, bruker fornuft og vitenskap, og mener vi må ta ansvar for hverandre uten å tro på guder.',
      },
    },
    {
      id: 'krle-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Nevn tre verdier som er viktige for deg, og forklar hvorfor.',
        solution: 'Svar varierer. Eleven bør nevne verdier og reflektere over hvorfor de er viktige.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_3_2: TextbookChapter = {
  id: 'krle-6-3-2',
  courseId: 'krle-6',
  chapterNumber: '3.2',
  title: 'Etikk og valg',
  description: 'Lær å reflektere over rett og galt, og ta gode valg.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['reflektere over etiske spørsmål'],
  content: [
    {
      id: 'krle-6-3-2-intro',
      type: 'text',
      content: `## Rett og galt

Hver dag tar vi valg. Noen er enkle, andre er vanskelige. Etikk handler om å tenke gjennom hva som er rett og galt.`,
    },
    {
      id: 'krle-6-3-2-def-etikk',
      type: 'definition',
      title: 'Hva er etikk?',
      content: `**Etikk** handler om rett og galt.

**Etikk hjelper oss å svare på:**
- Hva bør jeg gjøre?
- Hva er det rette valget?
- Hvordan bør jeg behandle andre?

**Moral** er de reglene vi faktisk følger.

**Eksempel:**
Etikk sier at vi bør være ærlige. Moral er om du faktisk velger å være ærlig.`,
    },
    {
      id: 'krle-6-3-2-def-regler',
      type: 'definition',
      title: 'Den gylne regel',
      content: `**"Gjør mot andre som du vil at andre skal gjøre mot deg"**

Denne regelen finnes i nesten alle religioner og livssyn:
- Kristendom: "Alt dere vil at andre skal gjøre mot dere, skal også dere gjøre mot dem"
- Islam: "Ingen av dere tror før han ønsker for sin bror det han ønsker for seg selv"
- Humanisme: Empati og respekt for andre

**Hva betyr det?**
Tenk på hvordan du vil bli behandlet - og behandle andre på samme måte.`,
    },
    {
      id: 'krle-6-3-2-def-dilemma',
      type: 'definition',
      title: 'Etiske dilemmaer',
      content: `**Et etisk dilemma er når det er vanskelig å velge:**
- Flere valg kan virke riktige
- Eller alle valgene har negative sider

**Eksempel:**
Du finner en lommebok med penger. Du vet hvem den tilhører. Personen er rik. Du er fattig. Hva gjør du?

**Å tenke gjennom et dilemma:**
1. Hva er valgmulighetene?
2. Hva blir konsekvensene?
3. Hva sier samvittigheten?
4. Hva ville du tenkt om andre visste?`,
    },
    {
      id: 'krle-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er den gylne regel?',
        solution: 'Gjør mot andre som du vil at andre skal gjøre mot deg.',
      },
    },
    {
      id: 'krle-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er et etisk dilemma?',
        solution: 'Et etisk dilemma er en situasjon der det er vanskelig å velge fordi flere valg kan virke riktige, eller alle valgene har negative sider.',
      },
    },
    {
      id: 'krle-6-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Din venn ber deg lyve for læreren slik at vennen din ikke får trøbbel. Hva ville du gjort og hvorfor?',
        solution: 'Svar varierer. Eleven bør vurdere konsekvenser, ærlighet, lojalitet til venn vs. rett og galt, og hva den gylne regel sier.',
      },
    },
  ],
};

export const CHAPTER_KRLE_6_3_3: TextbookChapter = {
  id: 'krle-6-3-3',
  courseId: 'krle-6',
  chapterNumber: '3.3',
  title: 'Identitet og fellesskap',
  description: 'Forstå hva som former identiteten vår og betydningen av fellesskap.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['utforske eksistensielle spørsmål'],
  content: [
    {
      id: 'krle-6-3-3-intro',
      type: 'text',
      content: `## Hvem er jeg?

Vi er alle unike, men vi er også formet av familie, venner og kulturen vi lever i. Identiteten din er hvem du er - og den forandrer seg gjennom livet.`,
    },
    {
      id: 'krle-6-3-3-def-identitet',
      type: 'definition',
      title: 'Identitet',
      content: `**Identitet** er hvem du er.

**Identiteten formes av:**
- Familie og oppvekst
- Venner
- Kultur og tradisjon
- Interesser og hobbyer
- Religion eller livssyn
- Egne valg og erfaringer

Du har kontroll over deler av identiteten din, men ikke alt. Du kan velge hvem du vil bli!`,
    },
    {
      id: 'krle-6-3-3-def-fellesskap',
      type: 'definition',
      title: 'Fellesskap',
      content: `**Fellesskap er grupper vi tilhører:**
- Familie
- Klassen
- Vennegjeng
- Idrettslag
- Menighet/livssynssamfunn
- Norge

**Hvorfor er fellesskap viktig?**
- Vi trenger å høre til
- Vi lærer av hverandre
- Vi støtter hverandre
- Det gir identitet`,
    },
    {
      id: 'krle-6-3-3-def-respekt',
      type: 'definition',
      title: 'Respekt for ulikheter',
      content: `**Alle er forskjellige - og det er bra!**

**Ulikheter kan være:**
- Kultur og religion
- Familiestruktur
- Interesser og evner
- Utseende

**Å respektere ulikheter:**
- Være nysgjerrig, ikke dømmende
- Akseptere at andre er annerledes
- Ikke mobbe eller ekskludere
- Lære av forskjeller`,
    },
    {
      id: 'krle-6-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er identitet?',
        solution: 'Identitet er hvem du er. Den formes av familie, venner, kultur, interesser og egne valg.',
      },
    },
    {
      id: 'krle-6-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre fellesskap du tilhører og forklar hvorfor de er viktige for deg.',
        solution: 'Svar varierer. Eksempler: Familie (trygghet og kjærlighet), klassen (læring og venner), fotballaget (trening og samarbeid).',
      },
    },
    {
      id: 'krle-6-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'krle-6-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva tror du former identiteten din mest? Skriv noen setninger om hvem du er og hva som har påvirket deg.',
        solution: 'Svar varierer. Eleven bør reflektere over påvirkninger som familie, venner, hobbyer, og kanskje religion/livssyn.',
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const KRLE_6_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Kristendom
  CHAPTER_KRLE_6_1_1,
  CHAPTER_KRLE_6_1_2,
  CHAPTER_KRLE_6_1_3,
  // Kapittel 2: Andre religioner
  CHAPTER_KRLE_6_2_1,
  CHAPTER_KRLE_6_2_2,
  CHAPTER_KRLE_6_2_3,
  // Kapittel 3: Livssyn og etikk
  CHAPTER_KRLE_6_3_1,
  CHAPTER_KRLE_6_3_2,
  CHAPTER_KRLE_6_3_3,
];

/**
 * Tekstbok kapitler for Naturfag 6. klasse
 * Innhold tilpasset elever på 6. trinn basert på LK20
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: KROPPEN VÅR
// ============================================================================

export const CHAPTER_NATURFAG_6_1_1: TextbookChapter = {
  id: 'naturfag-6-1-1',
  courseId: 'naturfag-6',
  chapterNumber: '1.1',
  title: 'Skjelettet og musklene',
  description: 'Lær om hvordan skjelettet og musklene fungerer sammen for å gi oss bevegelse.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive kroppens oppbygning og funksjoner'],
  content: [
    {
      id: 'naturfag-6-1-1-intro',
      type: 'text',
      content: `## Skjelettet - kroppens stillas

Tenk deg kroppen din uten bein! Du ville vært som en slapp sekk uten form. Skjelettet vårt er som et stillas som holder kroppen oppe og gir den form. Men det gjør mye mer enn det!`,
    },
    {
      id: 'naturfag-6-1-1-def-skjelett',
      type: 'definition',
      title: 'Skjelettet',
      content: `**Skjelettet** består av over 200 bein.

**Skjelettets oppgaver:**
- Gir kroppen form og støtte
- Beskytter viktige organer (hjertet, lungene, hjernen)
- Gjør at vi kan bevege oss
- Lagrer mineraler (kalsium)
- Lager blodceller (i beinmargen)

**Viktige deler:**
- Hodeskallen - beskytter hjernen
- Ryggraden - beskytter ryggmargen
- Brystkassen - beskytter hjerte og lunger`,
    },
    {
      id: 'naturfag-6-1-1-def-ledd',
      type: 'definition',
      title: 'Ledd',
      content: `**Ledd** er der to bein møtes. Ledd gjør at vi kan bevege oss.

**Typer ledd:**
- **Hengselledd** (kne, albue) - beveger seg én vei
- **Kulledd** (skulder, hofte) - kan bevege seg i alle retninger
- **Gliseledd** (håndledd) - glir litt i forhold til hverandre

**I leddet finner vi:**
- Brusk - mykt vev som demper støt
- Leddbånd - holder beinene sammen
- Leddvæske - smører leddet`,
    },
    {
      id: 'naturfag-6-1-1-def-muskler',
      type: 'definition',
      title: 'Muskler',
      content: `**Muskler** får oss til å bevege oss ved å trekke seg sammen.

**Tre typer muskler:**
1. **Skjelettmuskler** - beveger skjelettet (du styrer dem)
2. **Hjertemuskelen** - pumper blod (styrer seg selv)
3. **Glatt muskulatur** - i organer (styrer seg selv)

**Skjelettmuskler arbeider i par:**
- Når du bøyer armen, trekker biceps seg sammen
- Når du strekker armen, trekker triceps seg sammen

Muskler kan bare trekke - ikke dytte!`,
    },
    {
      id: 'naturfag-6-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan vi bøyer armen',
      problem: 'Hva skjer i armen når du løfter en tung bok?',
      solution: `**Når du løfter boken:**
1. Hjernen sender signal til musklene
2. **Biceps** (muskelen på oversiden) trekker seg sammen
3. **Triceps** (muskelen på undersiden) slapper av
4. Underarmen bøyes oppover
5. Leddet i albuen gjør at armen kan bøye

**Når du setter boken ned:**
- Triceps trekker seg sammen
- Biceps slapper av
- Armen strekkes ut igjen`,
    },
    {
      id: 'naturfag-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om skjelettet:',
        subTasks: [
          { label: 'a', task: 'Omtrent hvor mange bein har vi i kroppen?', solution: 'Over 200 bein.' },
          { label: 'b', task: 'Hva beskytter hodeskallen?', solution: 'Hjernen.' },
          { label: 'c', task: 'Hva beskytter brystkassen?', solution: 'Hjerte og lunger.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'naturfag-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen på et hengselledd og et kulledd. Gi et eksempel på hver.',
        solution: 'Et hengselledd beveger seg bare én vei (som en dør), for eksempel albuen eller kneet. Et kulledd kan bevege seg i alle retninger, som skulderen eller hoften.',
        hints: ['Tenk på hvordan en dør beveger seg'],
      },
    },
    {
      id: 'naturfag-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor arbeider skjelettmusklene i par? Forklar med et eksempel fra armen.',
        solution: 'Muskler kan bare trekke, ikke dytte. Derfor må de jobbe i par. Når biceps trekker seg sammen, bøyes armen. For å strekke armen må triceps trekke, mens biceps slapper av.',
        hints: ['Tenk på at muskler bare kan trekke'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_1_2: TextbookChapter = {
  id: 'naturfag-6-1-2',
  courseId: 'naturfag-6',
  chapterNumber: '1.2',
  title: 'Fordøyelsessystemet',
  description: 'Følg matens vei gjennom kroppen fra munn til tarm.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['beskrive kroppens oppbygning og funksjoner'],
  content: [
    {
      id: 'naturfag-6-1-2-intro',
      type: 'text',
      content: `## Matens reise gjennom kroppen

Når du spiser et eple, starter en utrolig reise. Maten må brytes ned til bittesmå deler som kroppen kan bruke. Denne prosessen kalles fordøyelse, og den tar mange timer!`,
    },
    {
      id: 'naturfag-6-1-2-def-fordoyelse',
      type: 'definition',
      title: 'Hva er fordøyelse?',
      content: `**Fordøyelse** er når kroppen bryter ned mat til næringsstoffer.

**Hvorfor trenger vi å fordøye maten?**
- Maten må bli liten nok til å tas opp i blodet
- Næringsstoffene gir oss energi
- Næringsstoffene bygger og reparerer kroppen

**Matens reise:**
Munn → Spiserør → Magesekk → Tynntarm → Tykktarm → Ut`,
    },
    {
      id: 'naturfag-6-1-2-def-munn',
      type: 'definition',
      title: 'Munnen',
      content: `**I munnen** starter fordøyelsen:

- **Tennene** tygger maten i små biter
- **Tungen** blander maten
- **Spytt** fukter maten og begynner å bryte ned stivelse
- **Svelging** sender maten til spiserøret

**Spiserøret** er en muskelrør som skyver maten ned til magesekken. Dette tar bare noen sekunder!`,
    },
    {
      id: 'naturfag-6-1-2-def-magesekk',
      type: 'definition',
      title: 'Magesekken',
      content: `**Magesekken** er som en muskelpose:

- Lagrer maten i 2-4 timer
- Blander maten med magesaft
- Magesaften inneholder syre som dreper bakterier
- Magesaften bryter ned proteiner

**Magesekken kan holde ca. 1-2 liter!**

Når maten er ferdig mikset, sendes den til tynntarmen.`,
    },
    {
      id: 'naturfag-6-1-2-def-tarm',
      type: 'definition',
      title: 'Tynntarm og tykktarm',
      content: `**Tynntarmen** (6-7 meter lang!):
- Næringsstoffene tas opp i blodet her
- Har små "fingre" (tarmtotter) som øker overflaten
- Bukspyttkjertelen og galleblæren hjelper til

**Tykktarmen** (ca. 1,5 meter):
- Tar opp vann fra maten
- Det som blir igjen er avføring
- Inneholder nyttige bakterier

**Hele prosessen tar 24-72 timer!**`,
    },
    {
      id: 'naturfag-6-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Et eplets reise',
      problem: 'Følg et eple gjennom fordøyelsessystemet:',
      solution: `**1. Munnen (sekunder):**
Du tygger eplet og blander det med spytt.

**2. Spiserøret (få sekunder):**
Maten skyves ned til magesekken.

**3. Magesekken (2-4 timer):**
Eplet blandes med magesaft til en grøt.

**4. Tynntarmen (3-5 timer):**
Vitaminer, sukker og fiber tas opp i blodet.

**5. Tykktarmen (12-36 timer):**
Vann tas opp, resten blir til avføring.`,
    },
    {
      id: 'naturfag-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skjer i disse delene av fordøyelsessystemet?',
        subTasks: [
          { label: 'a', task: 'Munnen', solution: 'Tennene tygger maten, spytt fukter og begynner å bryte ned.' },
          { label: 'b', task: 'Magesekken', solution: 'Maten blandes med magesaft som bryter ned proteiner.' },
          { label: 'c', task: 'Tynntarmen', solution: 'Næringsstoffene tas opp i blodet.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'naturfag-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett disse i riktig rekkefølge: tynntarm, munn, magesekk, spiserør, tykktarm.',
        solution: 'Munn → Spiserør → Magesekk → Tynntarm → Tykktarm',
        hints: ['Start der maten går inn'],
      },
    },
    {
      id: 'naturfag-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er tynntarmen så lang (6-7 meter)? Hva er fordelen med dette?',
        solution: 'Tynntarmen er lang fordi det tar tid å ta opp alle næringsstoffene fra maten. Jo lengre tarm, jo mer overflate til å absorbere næringsstoffene.',
        hints: ['Tenk på hva tynntarmens oppgave er'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_1_3: TextbookChapter = {
  id: 'naturfag-6-1-3',
  courseId: 'naturfag-6',
  chapterNumber: '1.3',
  title: 'Blodomløpet',
  description: 'Forstå hvordan hjertet pumper blod rundt i kroppen.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive kroppens oppbygning og funksjoner'],
  content: [
    {
      id: 'naturfag-6-1-3-intro',
      type: 'text',
      content: `## Blodet - kroppens transportør

Blodet ditt reiser konstant gjennom kroppen og leverer oksygen og næring til alle celler. Hjertet er motoren som driver dette fantastiske systemet!`,
    },
    {
      id: 'naturfag-6-1-3-def-hjerte',
      type: 'definition',
      title: 'Hjertet',
      content: `**Hjertet** er en muskel som pumper blod.

**Hjertets oppbygning:**
- Fire rom: to forkammer og to hjertekammer
- Høyre side pumper blod til lungene
- Venstre side pumper blod til resten av kroppen

**Hjerteslag:**
- Hjertet slår ca. 100 000 ganger per dag!
- Ved hvile: 60-100 slag per minutt
- Ved aktivitet: opptil 200 slag per minutt`,
    },
    {
      id: 'naturfag-6-1-3-def-blodkar',
      type: 'definition',
      title: 'Blodårene',
      content: `**Tre typer blodårer:**

**Arterier (pulsårer):**
- Fører blod VEKK fra hjertet
- Tykke, elastiske vegger
- Blodet har høyt trykk

**Vener (blodårer):**
- Fører blod TIL hjertet
- Tynnere vegger
- Har klaffer som hindrer tilbakestrømning

**Kapillærer (hårrørsårer):**
- Bittesmå årer (tynnere enn et hårstrå!)
- Her utveksles oksygen og næring med cellene`,
    },
    {
      id: 'naturfag-6-1-3-def-blod',
      type: 'definition',
      title: 'Blodet',
      content: `**Blodet inneholder:**

**Røde blodceller:**
- Frakter oksygen fra lungene
- Gir blodet rød farge
- 25 000 milliarder i kroppen!

**Hvite blodceller:**
- Bekjemper bakterier og virus
- En del av immunforsvaret

**Blodplater:**
- Stopper blødninger
- Lager skorpe på sår

**Plasma:**
- Væsken blodet flyter i
- Frakter næringsstoffer og avfall`,
    },
    {
      id: 'naturfag-6-1-3-def-kretslopet',
      type: 'definition',
      title: 'Det store og lille kretsløpet',
      content: `**Det lille kretsløpet** (hjerte ↔ lunger):
1. Blod uten oksygen pumpes til lungene
2. I lungene får blodet nytt oksygen
3. Blodet returnerer til hjertet

**Det store kretsløpet** (hjerte ↔ kroppen):
1. Oksygenrikt blod pumpes ut til kroppen
2. Cellene tar opp oksygen og gir fra seg CO₂
3. Blodet returnerer til hjertet`,
    },
    {
      id: 'naturfag-6-1-3-example-1',
      type: 'example',
      title: 'Eksempel: En blodcelles reise',
      problem: 'Følg en rød blodcelle gjennom kroppen:',
      solution: `**1. I lungene:**
Blodcellen henter oksygen.

**2. Til hjertet:**
Blodcellen kommer til venstre forkammer.

**3. Ut i kroppen:**
Hjertet pumper blodcellen ut gjennom arterier.

**4. I kapillærene:**
Blodcellen gir oksygen til muskelceller.

**5. Tilbake:**
Blodcellen tar med seg CO₂ og reiser gjennom vener tilbake til hjertet.

**6. Til lungene igjen:**
Hjertet pumper blodcellen til lungene for å bytte CO₂ med nytt oksygen.`,
    },
    {
      id: 'naturfag-6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på arterier og vener?',
        solution: 'Arterier fører blod vekk fra hjertet og har tykke vegger. Vener fører blod til hjertet og har tynnere vegger med klaffer.',
      },
    },
    {
      id: 'naturfag-6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er oppgaven til de røde blodcellene?',
        solution: 'De røde blodcellene frakter oksygen fra lungene til alle cellene i kroppen, og tar med seg karbondioksid tilbake.',
      },
    },
    {
      id: 'naturfag-6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor vi trenger to kretsløp - det lille og det store.',
        solution: 'Det lille kretsløpet sørger for at blodet får nytt oksygen i lungene. Det store kretsløpet frakter dette oksygenet ut til alle cellene i kroppen som trenger det.',
        hints: ['Tenk på hvor blodet henter oksygen, og hvor det leverer det'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: DYR OG PLANTER
// ============================================================================

export const CHAPTER_NATURFAG_6_2_1: TextbookChapter = {
  id: 'naturfag-6-2-1',
  courseId: 'naturfag-6',
  chapterNumber: '2.1',
  title: 'Celledeling og vekst',
  description: 'Lær om hvordan celler deler seg og organismer vokser.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['beskrive celler og forklare hovedtrekkene i celledeling'],
  content: [
    {
      id: 'naturfag-6-2-1-intro',
      type: 'text',
      content: `## Cellene - livets byggesteiner

Alt levende er bygd opp av celler. Du startet som én eneste celle, og nå har du mange billioner celler! Hvordan skjedde det?`,
    },
    {
      id: 'naturfag-6-2-1-def-celle',
      type: 'definition',
      title: 'Cellen',
      content: `**Cellen** er den minste levende enheten.

**Celletyper:**
- **Dyreceller** - i mennesker og dyr
- **Planteceller** - i planter, har cellevegg og kloroplaster

**Cellens deler:**
- **Cellemembran** - ytre beskyttelse, styrer hva som går inn/ut
- **Cellekjerne** - styrer cellen, inneholder DNA
- **Cytoplasma** - gelé-aktig masse inni cellen
- **Mitokondrier** - "kraftverkene" som lager energi`,
    },
    {
      id: 'naturfag-6-2-1-def-celledeling',
      type: 'definition',
      title: 'Celledeling',
      content: `**Celledeling** er når én celle blir til to like celler.

**Hvorfor deler celler seg?**
- For å vokse (flere celler = større kropp)
- For å reparere skader
- For å erstatte gamle celler

**Hvordan skjer det?**
1. Cellen kopierer alt DNA-et sitt
2. Cellen vokser seg større
3. Cellekjernen deler seg
4. Cellen deler seg i to

Resultatet er to identiske celler!`,
    },
    {
      id: 'naturfag-6-2-1-def-vekst',
      type: 'definition',
      title: 'Vekst',
      content: `**Vi vokser ved at cellene deler seg.**

**Rask celledeling:**
- Når du er liten (barn vokser fort)
- Når et sår gror

**Langsommere celledeling:**
- Når du er voksen
- Noen celler slutter nesten å dele seg (nerveceller)

**Visste du at...**
- Cellene i huden din byttes ut hver 2-3 uke
- Røde blodceller lever i ca. 4 måneder
- Noen celler lever hele livet (nerveceller)`,
    },
    {
      id: 'naturfag-6-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra én til mange',
      problem: 'Hvor mange celler har du etter flere celledelinger?',
      solution: `**Celledeling dobler antallet:**

Start: 1 celle
Etter 1 deling: 2 celler
Etter 2 delinger: 4 celler
Etter 3 delinger: 8 celler
Etter 4 delinger: 16 celler
Etter 10 delinger: 1024 celler!

Etter bare 46 celledelinger har du flere celler enn det finnes sandkorn på jorden!`,
    },
    {
      id: 'naturfag-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre grunner til at celler deler seg.',
        solution: 'For å vokse, for å reparere skader, for å erstatte gamle celler.',
      },
    },
    {
      id: 'naturfag-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du starter med 1 celle. Hvor mange celler har du etter 5 celledelinger?',
        solution: '32 celler. (1→2→4→8→16→32)',
        hints: ['Hver celledeling dobler antallet'],
      },
    },
    {
      id: 'naturfag-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det viktig at cellen kopierer DNA-et før den deler seg?',
        solution: 'DNA inneholder oppskriften på alt cellen trenger. Begge de nye cellene må ha en fullstendig kopi av DNA-et for å fungere riktig.',
        hints: ['Tenk på DNA som en oppskriftsbok'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_2_2: TextbookChapter = {
  id: 'naturfag-6-2-2',
  courseId: 'naturfag-6',
  chapterNumber: '2.2',
  title: 'Fotosyntese',
  description: 'Forstå hvordan planter lager mat ved hjelp av sollys.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['gjøre rede for fotosyntese og celleånding'],
  content: [
    {
      id: 'naturfag-6-2-2-intro',
      type: 'text',
      content: `## Planter - naturens solcellepaneler

Planter er utrolige! De kan lage sin egen mat fra sollys, luft og vann. Denne prosessen kalles fotosyntese, og den er grunnlaget for nesten alt liv på jorden.`,
    },
    {
      id: 'naturfag-6-2-2-def-fotosyntese',
      type: 'definition',
      title: 'Fotosyntese',
      content: `**Fotosyntese** = planter lager mat fra sollys

**Oppskriften:**
- Karbondioksid (CO₂) fra luften
- Vann (H₂O) fra jorden
- Sollys som energikilde

**Resultatet:**
- Druesukker (glukose) - mat til planten
- Oksygen (O₂) - slippes ut i luften

**Formelen:**
Karbondioksid + Vann + Sollys → Druesukker + Oksygen`,
    },
    {
      id: 'naturfag-6-2-2-def-klorofyll',
      type: 'definition',
      title: 'Klorofyll',
      content: `**Klorofyll** er det grønne stoffet i bladene.

**Klorofyllets oppgaver:**
- Fanger opp sollys
- Gjør at fotosyntesen kan skje
- Gir planter grønn farge

**Kloroplaster:**
Klorofyllet finnes i små "fabrikker" i cellen som kalles kloroplaster. Det er her fotosyntesen skjer!

**Visste du at...**
Om høsten brytes klorofyllet ned, og da ser vi andre farger i bladene (gult, oransje, rødt).`,
    },
    {
      id: 'naturfag-6-2-2-def-betydning',
      type: 'definition',
      title: 'Hvorfor er fotosyntese viktig?',
      content: `**Fotosyntesen er livsviktig for:**

**1. Planter:**
- Lager mat (sukker) til vekst
- Lagrer energi

**2. Dyr og mennesker:**
- Vi trenger oksygenet plantene lager
- Vi spiser planter eller dyr som spiser planter

**3. Klimaet:**
- Plantene tar opp CO₂ fra atmosfæren
- Hjelper mot klimaendringer

**Uten fotosyntese - intet liv!**`,
    },
    {
      id: 'naturfag-6-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Et tre som fabrikk',
      problem: 'Se for deg et tre som en fabrikk. Hva er råvarene og produktene?',
      solution: `**Råvarer inn:**
- Karbondioksid fra luften (gjennom bladene)
- Vann fra bakken (gjennom røttene)
- Sollys (fanges av bladene)

**Produkter ut:**
- Sukker (mat til treet)
- Oksygen (slippes ut i luften)

**Fabrikken (bladene):**
Klorofyll fanger sollyset og setter i gang produksjonen!`,
    },
    {
      id: 'naturfag-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva trenger en plante for å gjøre fotosyntese?',
        solution: 'Karbondioksid (fra luften), vann (fra jorden) og sollys.',
      },
    },
    {
      id: 'naturfag-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva produserer planten under fotosyntesen?',
        solution: 'Druesukker (glukose) som mat til planten, og oksygen som slippes ut i luften.',
      },
    },
    {
      id: 'naturfag-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er fotosyntesen viktig for mennesker, selv om vi ikke gjør den selv?',
        solution: 'Fotosyntesen lager oksygenet vi puster inn. Den lager også mat (planter) som vi spiser direkte eller som dyrene våre spiser. Planter tar også opp CO₂ og hjelper mot klimaendringer.',
        hints: ['Tenk på oksygen, mat og klima'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_2_3: TextbookChapter = {
  id: 'naturfag-6-2-3',
  courseId: 'naturfag-6',
  chapterNumber: '2.3',
  title: 'Næringskjeder og økosystemer',
  description: 'Utforsk hvordan dyr og planter er koblet sammen i naturen.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['beskrive ulike økosystemer og forklare sammenhenger'],
  content: [
    {
      id: 'naturfag-6-2-3-intro',
      type: 'text',
      content: `## Alt henger sammen

I naturen er alle levende vesener koblet sammen. Planter, dyr og nedbrytere utgjør et nettverk der alle er avhengige av hverandre.`,
    },
    {
      id: 'naturfag-6-2-3-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: `Et **økosystem** er et område der levende organismer lever sammen med sine omgivelser.

**Eksempler på økosystemer:**
- Skog
- Innsjø
- Havbunn
- Eng
- Korallrev

**Et økosystem inneholder:**
- Levende: planter, dyr, sopp, bakterier
- Ikke-levende: vann, jord, luft, sollys`,
    },
    {
      id: 'naturfag-6-2-3-def-naringskjede',
      type: 'definition',
      title: 'Næringskjede',
      content: `En **næringskjede** viser hvem som spiser hvem.

**Leddene i kjeden:**
1. **Produsenter** (planter) - lager mat fra sollys
2. **Forbrukere** - spiser andre organismer
   - Planteetere (spiser planter)
   - Kjøttetere (spiser dyr)
   - Alteter (spiser begge deler)
3. **Nedbrytere** (sopp, bakterier) - bryter ned døde organismer

**Eksempel:**
Gress → Mus → Ugle → Nedbrytere`,
    },
    {
      id: 'naturfag-6-2-3-def-energi',
      type: 'definition',
      title: 'Energistrøm',
      content: `**Energi flyter gjennom næringskjeden:**

Sollys → Plante → Planteeter → Kjøtteeter

**Ved hvert ledd:**
- Noe energi brukes til å leve
- Noe energi går tapt som varme
- Bare 10% av energien går videre!

**Derfor:**
- Det er mange planter
- Færre planteetere
- Enda færre kjøttetere
- Dette kalles en **energipyramide**`,
    },
    {
      id: 'naturfag-6-2-3-def-nett',
      type: 'definition',
      title: 'Næringsnett',
      content: `Et **næringsnett** viser mange næringskjeder som er koblet sammen.

**Eksempel fra skogen:**
- Nøtter spises av ekorn OG fugler OG mus
- Mus spises av ugler OG rev OG hønsehauker
- Ekorn spises av hønsehauker OG mår

**Hvorfor er næringsnett viktige?**
- Viser at alt henger sammen
- Hvis én art forsvinner, påvirkes mange andre`,
    },
    {
      id: 'naturfag-6-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Næringskjede i skogen',
      problem: 'Lag en næringskjede med eik, ekorn, hønsehauk og sopp.',
      solution: `**Næringskjeden:**
Eik (nøtter) → Ekorn → Hønsehauk → (dør) → Sopp

**Forklaring:**
1. **Eik** (produsent) lager nøtter med fotosyntese
2. **Ekorn** (planteeter) spiser nøttene
3. **Hønsehauk** (kjøtteeter) spiser ekornet
4. **Sopp** (nedbryter) bryter ned den døde hauken

Energi og næringsstoffer går fra ledd til ledd!`,
    },
    {
      id: 'naturfag-6-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på produsenter og forbrukere?',
        solution: 'Produsenter (planter) lager sin egen mat med fotosyntese. Forbrukere (dyr) må spise andre organismer for å få energi.',
      },
    },
    {
      id: 'naturfag-6-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en næringskjede med disse organismene: gress, rev, kanin, bakterier.',
        solution: 'Gress → Kanin → Rev → (dør) → Bakterier',
        hints: ['Start med produsenten (planten), slutt med nedbryter'],
      },
    },
    {
      id: 'naturfag-6-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva kan skje i økosystemet hvis alle rev forsvinner? Tenk på kaninene og plantene.',
        solution: 'Uten rev vil det bli mange flere kaniner (ingen spiser dem). Kaninene vil spise opp mye mer gress og planter. Til slutt kan det bli for lite mat til alle kaninene, og mange vil dø.',
        hints: ['Tenk på hva reven gjør i økosystemet'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: TEKNOLOGI OG DESIGN
// ============================================================================

export const CHAPTER_NATURFAG_6_3_1: TextbookChapter = {
  id: 'naturfag-6-3-1',
  courseId: 'naturfag-6',
  chapterNumber: '3.1',
  title: 'Enkle maskiner',
  description: 'Lær om vektstang, skråplan, trinser og andre enkle maskiner.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['designe og lage teknologiske produkter'],
  content: [
    {
      id: 'naturfag-6-3-1-intro',
      type: 'text',
      content: `## Maskiner som gjør arbeidet lettere

Har du noen gang prøvd å løfte noe tungt? Med de rette verktøyene blir det mye lettere! Enkle maskiner er oppfinnelser som hjelper oss å flytte ting med mindre kraft.`,
    },
    {
      id: 'naturfag-6-3-1-def-vektstang',
      type: 'definition',
      title: 'Vektstang',
      content: `En **vektstang** er en stang som vipper rundt et punkt.

**Delene:**
- **Dreiepunktet** (midten) - der stangen vipper
- **Kraftarm** - der du trykker
- **Lastarm** - der tingen du vil løfte er

**Eksempler:**
- Vippe på lekeplass
- Brekkjern
- Saks
- Tang

**Regelen:**
Jo lengre kraftarm, jo lettere å løfte!`,
    },
    {
      id: 'naturfag-6-3-1-def-skraplan',
      type: 'definition',
      title: 'Skråplan',
      content: `Et **skråplan** er en skrå flate.

**Hvordan virker det?**
- Lettere å skyve noe oppover et skråplan enn å løfte rett opp
- Jo slakere skråplanet, jo lettere å skyve

**Eksempler:**
- Rampe for rullestol
- Vei som svinger opp fjellet
- Lastebrygge for lastebiler
- Skrue (et skråplan viklet rundt en stang!)`,
    },
    {
      id: 'naturfag-6-3-1-def-trinse',
      type: 'definition',
      title: 'Trinse',
      content: `En **trinse** er et hjul med et tau rundt.

**Fast trinse:**
- Endrer retningen på kraften
- Du drar ned, lasten går opp

**Løs trinse:**
- Halverer kraften du trenger
- Men du må dra tauet dobbelt så langt

**Talje:**
- Flere trinser sammen
- Kan løfte veldig tunge ting
- Brukes i byggekraner!`,
    },
    {
      id: 'naturfag-6-3-1-def-hjul',
      type: 'definition',
      title: 'Hjul og aksling',
      content: `**Hjul og aksling** gjør det lettere å flytte ting.

**Hvordan virker det?**
- Hjulet snurrer rundt akslingen
- Reduserer friksjon med bakken

**Eksempler:**
- Trillebår
- Sykkel
- Bil
- Dørhåndtak

**Visste du at...**
Hjulet ble oppfunnet for over 5000 år siden!`,
    },
    {
      id: 'naturfag-6-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Vippe på lekeplass',
      problem: 'Hvorfor kan et lite barn vippe opp en voksen på en vippe?',
      solution: `**Vektstangprinsippet:**

Hvis den voksne sitter nær midten (dreiepunktet) og barnet sitter langt ut, kan barnet vippe opp den voksne!

**Forklaring:**
- Lang kraftarm (barnet) + liten kraft = stor kraft
- Kort lastarm (den voksne) = lettere å løfte

Dette er grunnen til at vipper har lange seter - så man kan justere hvor man sitter!`,
    },
    {
      id: 'naturfag-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble sammen den enkle maskinen med riktig eksempel:',
        subTasks: [
          { label: 'a', task: 'Vektstang', solution: 'Saks, vippe, brekkjern' },
          { label: 'b', task: 'Skråplan', solution: 'Rullestolrampe, fjellvei, lastebrygge' },
          { label: 'c', task: 'Trinse', solution: 'Byggekran, flaggstang, brønn' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'naturfag-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor er det lettere å trille en tung koffert enn å bære den?',
        solution: 'Hjulene reduserer friksjonen med bakken. Når vi bærer kofferten, må vi løfte hele vekten. Med hjul trenger vi bare skyve den fremover.',
        hints: ['Tenk på friksjon og hjulenes funksjon'],
      },
    },
    {
      id: 'naturfag-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor et skråplan gjør det lettere å løfte noe. Bruk eksempelet med en sykkel opp en bakke vs. opp en trapp.',
        solution: 'Et skråplan strekker arbeidet ut over en lengre distanse. Du må bruke mindre kraft om gangen, men over lengre vei. Å sykle opp en slak bakke er lettere enn å bære sykkelen opp en bratt trapp, selv om begge tar deg like høyt.',
        hints: ['Tenk på kraft og distanse'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_3_2: TextbookChapter = {
  id: 'naturfag-6-3-2',
  courseId: 'naturfag-6',
  chapterNumber: '3.2',
  title: 'Elektrisitet',
  description: 'Forstå elektriske kretser og hvordan strøm flyter.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['utforske teknologiske løsninger og vurdere funksjon'],
  content: [
    {
      id: 'naturfag-6-3-2-intro',
      type: 'text',
      content: `## Elektrisitet - usynlig kraft

Tenk på alt du bruker som trenger strøm: lys, TV, telefon, kjøleskap... Elektrisitet er overalt i hverdagen vår! Men hva er egentlig strøm, og hvordan virker det?`,
    },
    {
      id: 'naturfag-6-3-2-def-strom',
      type: 'definition',
      title: 'Hva er elektrisk strøm?',
      content: `**Elektrisk strøm** er bevegelse av små partikler kalt elektroner.

**Tenk på det som vann i et rør:**
- Vannet = elektronene
- Røret = ledningen
- Pumpen = batteriet

**Strømmen trenger:**
- En energikilde (batteri eller stikkontakt)
- En leder (noe strømmen kan gå gjennom)
- En forbruker (noe som bruker strømmen)`,
    },
    {
      id: 'naturfag-6-3-2-def-krets',
      type: 'definition',
      title: 'Elektrisk krets',
      content: `En **elektrisk krets** er en lukket bane der strømmen kan gå.

**Delene i en enkel krets:**
1. **Strømkilde** - batteri eller stikkontakt
2. **Ledninger** - kobbertrå i plastikk
3. **Bryter** - slår strømmen av/på
4. **Forbruker** - lyspære, motor, etc.

**Viktig!**
Kretsen må være lukket (komplett) for at strømmen skal gå. Hvis det er et brudd, stopper strømmen.`,
    },
    {
      id: 'naturfag-6-3-2-def-leder',
      type: 'definition',
      title: 'Ledere og isolatorer',
      content: `**Ledere** - slipper strøm gjennom:
- Metaller (kobber, jern, sølv)
- Vann (med salt i)
- Mennesker!

**Isolatorer** - stopper strøm:
- Plast
- Gummi
- Tre
- Glass

**Derfor:**
- Ledninger er laget av kobber (leder)
- Men dekket med plast (isolator)
- Så vi ikke får støt!`,
    },
    {
      id: 'naturfag-6-3-2-def-sikkerhet',
      type: 'definition',
      title: 'Elektrisitet og sikkerhet',
      content: `**Strøm kan være farlig!**

**Sikkerhetstips:**
- Ikke stikk ting inn i stikkontakter
- Ikke bruk elektriske ting i nærheten av vann
- Ikke rør ledninger som er skadet
- Barn skal ikke reparere elektriske ting

**Hvis noe går galt:**
- Slå av strømmen
- Fortell en voksen
- Ring 113 hvis noen har fått støt`,
    },
    {
      id: 'naturfag-6-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Lage en enkel krets',
      problem: 'Hvordan lager du en krets som får en lyspære til å lyse?',
      solution: `**Du trenger:**
- Et batteri (f.eks. 4,5V)
- To ledninger
- En lyspære i holder
- (Valgfritt: en bryter)

**Koble sammen:**
1. Koble én ledning fra + på batteriet til lyspæren
2. Koble én ledning fra - på batteriet til lyspæren
3. Lyspæren lyser!

**Hva skjer?**
Strømmen går fra batteriet, gjennom ledningen, gjennom lyspæren (som varmes opp og lyser), og tilbake til batteriet.`,
    },
    {
      id: 'naturfag-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Er disse ledere eller isolatorer?',
        subTasks: [
          { label: 'a', task: 'Kobber', solution: 'Leder' },
          { label: 'b', task: 'Plast', solution: 'Isolator' },
          { label: 'c', task: 'Jern', solution: 'Leder' },
          { label: 'd', task: 'Gummi', solution: 'Isolator' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'naturfag-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva skjer med strømmen hvis du åpner bryteren i en krets?',
        solution: 'Strømmen stopper fordi kretsen ikke lenger er lukket. Det blir et brudd i banen, og elektronene kan ikke bevege seg.',
        hints: ['Tenk på at strømmen trenger en komplett bane'],
      },
    },
    {
      id: 'naturfag-6-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er ledninger laget av kobber på innsiden og plast på utsiden?',
        solution: 'Kobber er en god leder som lar strømmen gå gjennom. Plast er en god isolator som beskytter oss fra å få støt når vi tar på ledningen.',
        hints: ['Tenk på hva som leder strøm og hva som stopper strøm'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: BÆREKRAFT
// ============================================================================

export const CHAPTER_NATURFAG_6_4_1: TextbookChapter = {
  id: 'naturfag-6-4-1',
  courseId: 'naturfag-6',
  chapterNumber: '4.1',
  title: 'Klima og miljø',
  description: 'Lær om klimaendringer og hvordan vi kan ta vare på miljøet.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['drøfte hva som kan gjøres for å ta vare på naturen'],
  content: [
    {
      id: 'naturfag-6-4-1-intro',
      type: 'text',
      content: `## Jorden vår trenger hjelp

Klimaet på jorden endrer seg, og vi mennesker har en stor del av skylden. Men det er også vi som kan gjøre noe med det! I dette kapittelet lærer du om klimaendringer og hva vi kan gjøre.`,
    },
    {
      id: 'naturfag-6-4-1-def-klima',
      type: 'definition',
      title: 'Klima vs. vær',
      content: `**Vær** = hva som skjer ute akkurat nå
- Regn, sol, vind, snø

**Klima** = gjennomsnittsværet over lang tid
- Hvordan været pleier å være i et område

**Klimaendringer:**
Når klimaet endrer seg over hele jorden. Nå blir det varmere i gjennomsnitt.`,
    },
    {
      id: 'naturfag-6-4-1-def-drivhus',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: `**Drivhuseffekten** holder jorden varm.

**Slik fungerer det:**
1. Solen varmer opp jorden
2. Varmen prøver å slippe ut i verdensrommet
3. Noen gasser i atmosfæren holder varmen inne
4. Det gjør at jorden er varm nok til å leve på

**Problemet:**
Vi slipper ut for mye drivhusgasser (spesielt CO₂). Da blir det for varmt!

**Kilder til CO₂:**
- Biler og fly
- Fabriker
- Kutt av skog`,
    },
    {
      id: 'naturfag-6-4-1-def-konsekvenser',
      type: 'definition',
      title: 'Konsekvenser av klimaendringer',
      content: `**Hva skjer når det blir varmere?**

- **Is smelter:** Havnivået stiger, isbjørn mister leveområder
- **Ekstremvær:** Flere stormer, flom og tørke
- **Dyr og planter:** Må flytte eller dør ut
- **Mat:** Vanskeligere å dyrke mat noen steder
- **Helse:** Mer hete kan gjøre folk syke

**I Norge:**
- Mildere vintre
- Mer regn på Vestlandet
- Kortere skivintre`,
    },
    {
      id: 'naturfag-6-4-1-def-hjelpe',
      type: 'definition',
      title: 'Hva kan vi gjøre?',
      content: `**Store ting:**
- Bruke fornybar energi (sol, vind, vann)
- Kjøre elektriske biler
- Plante trær
- Kutte utslipp fra industri

**Ting du kan gjøre:**
- Slå av lyset når du går
- Sykle eller gå istedenfor å kjøre bil
- Spise mindre kjøtt
- Kildesortere avfall
- Ikke kaste mat
- Bruk ting om igjen`,
    },
    {
      id: 'naturfag-6-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Karbonkretsløpet',
      problem: 'Hvor kommer CO₂ fra, og hvor forsvinner det?',
      solution: `**CO₂ slippes ut fra:**
- Mennesker og dyr som puster
- Biler, fly og fabrikker
- Brann

**CO₂ tas opp av:**
- Planter (fotosyntese!)
- Havet

**Problemet:**
Vi slipper ut mer CO₂ enn planter og hav klarer å ta opp. Derfor øker mengden CO₂ i atmosfæren.`,
    },
    {
      id: 'naturfag-6-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er drivhuseffekten?',
        solution: 'Drivhuseffekten er når gasser i atmosfæren holder på varme fra solen og gjør jorden varmere.',
      },
    },
    {
      id: 'naturfag-6-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre konsekvenser av klimaendringer.',
        solution: 'Eksempler: Is smelter og havnivået stiger, det blir mer ekstremvær, dyr og planter må flytte eller dør ut, det blir vanskeligere å dyrke mat.',
      },
    },
    {
      id: 'naturfag-6-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv fem ting du og familien din kan gjøre for å være mer klimavennlige.',
        solution: 'Eksempler: Sykle/gå til skolen, slå av lyset, kildesortere, spise mindre kjøtt, ikke kaste mat, bruke ting om igjen, ta kortere dusjer, kjøpe brukte ting.',
        hints: ['Tenk på transport, energi, mat og avfall'],
      },
    },
  ],
};

export const CHAPTER_NATURFAG_6_4_2: TextbookChapter = {
  id: 'naturfag-6-4-2',
  courseId: 'naturfag-6',
  chapterNumber: '4.2',
  title: 'Fornybare ressurser',
  description: 'Utforsk fornybare energikilder som sol, vind og vann.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['gjøre rede for betydningen av biologisk mangfold'],
  content: [
    {
      id: 'naturfag-6-4-2-intro',
      type: 'text',
      content: `## Energi som aldri tar slutt

Tenk om vi kunne bruke energi uten å forurense! Det er akkurat det fornybar energi handler om. Sol, vind og vann kan gi oss strøm uten å slippe ut CO₂.`,
    },
    {
      id: 'naturfag-6-4-2-def-fornybar',
      type: 'definition',
      title: 'Fornybar vs. ikke-fornybar',
      content: `**Fornybar energi:**
- Kan brukes om og om igjen
- Tar ikke slutt
- Forurenser lite

**Ikke-fornybar energi:**
- Tar slutt en gang
- Olje, kull og gass
- Forurenser mye

**Eksempler på fornybar energi:**
☀️ Solenergi
💨 Vindkraft
💧 Vannkraft
🌊 Bølgekraft`,
    },
    {
      id: 'naturfag-6-4-2-def-sol',
      type: 'definition',
      title: 'Solenergi',
      content: `**Solenergi** - energi fra solen

**Slik virker det:**
- Solcellepaneler fanger opp sollyset
- Lyset omdannes til strøm
- Kan brukes på tak eller i store solparker

**Fordeler:**
- Gratis etter at panelene er satt opp
- Forurenser ikke
- Virker i mange år

**Ulemper:**
- Virker best når solen skinner
- Trenger store områder for mye strøm`,
    },
    {
      id: 'naturfag-6-4-2-def-vind',
      type: 'definition',
      title: 'Vindkraft',
      content: `**Vindkraft** - energi fra vinden

**Slik virker det:**
- Store vindmøller (vindturbiner) snurrer
- Rotasjonen lager strøm
- Kan stå på land eller i havet

**Fordeler:**
- Forurenser ikke
- Vinden er gratis

**Ulemper:**
- Trenger vind for å virke
- Kan bråke
- Noen synes de er stygge
- Kan være farlige for fugler`,
    },
    {
      id: 'naturfag-6-4-2-def-vann',
      type: 'definition',
      title: 'Vannkraft',
      content: `**Vannkraft** - energi fra rennende vann

**Slik virker det:**
- Vann samles i en dam
- Vannet slippes gjennom turbiner
- Turbinene snurrer og lager strøm

**Fordeler:**
- Norge har mye vannkraft (96% av strømmen!)
- Forurenser ikke
- Kan reguleres (slå av og på)

**Ulemper:**
- Kan ødelegge for fisk
- Store dammer endrer naturen`,
    },
    {
      id: 'naturfag-6-4-2-def-barekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraft** betyr å bruke ressurser på en måte som ikke ødelegger for fremtiden.

**Tre deler:**
1. **Miljø:** Ta vare på naturen
2. **Økonomi:** Samfunnet må fungere
3. **Sosial:** Rettferdig for alle mennesker

**FNs bærekraftsmål:**
17 mål for en bedre verden:
- Stoppe fattigdom
- Ren energi
- Stoppe klimaendringer
- Rent vann til alle`,
    },
    {
      id: 'naturfag-6-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Norges vannkraft',
      problem: 'Hvorfor er Norge spesielt godt egnet for vannkraft?',
      solution: `**Norge er perfekt for vannkraft:**

1. **Mye regn og snø** = mye vann
2. **Høye fjell** = vannet faller langt
3. **Mange elver og innsjøer** = naturlige vannmagasiner

**Resultatet:**
- 96% av Norges strøm kommer fra vannkraft
- Ren energi til nesten hele landet
- Vi kan eksportere strøm til andre land`,
    },
    {
      id: 'naturfag-6-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre typer fornybar energi.',
        solution: 'Solenergi, vindkraft og vannkraft (også godtatt: bølgekraft, bioenergi).',
      },
    },
    {
      id: 'naturfag-6-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er forskjellen på fornybar og ikke-fornybar energi?',
        solution: 'Fornybar energi (som sol og vind) kan brukes igjen og igjen og tar ikke slutt. Ikke-fornybar energi (som olje og kull) tar slutt en gang og forurenser mye.',
      },
    },
    {
      id: 'naturfag-6-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-6-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det viktig at vi går over til mer fornybar energi i verden?',
        solution: 'Fornybar energi forurenser ikke og slipper ikke ut CO₂. Dette hjelper mot klimaendringene. I tillegg tar ikke fornybar energi slutt, så vi kan bruke den for alltid. Olje og kull vil en gang ta slutt.',
        hints: ['Tenk på klimaendringer og ressurser'],
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const NATURFAG_6_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Kroppen vår
  CHAPTER_NATURFAG_6_1_1,
  CHAPTER_NATURFAG_6_1_2,
  CHAPTER_NATURFAG_6_1_3,
  // Kapittel 2: Dyr og planter
  CHAPTER_NATURFAG_6_2_1,
  CHAPTER_NATURFAG_6_2_2,
  CHAPTER_NATURFAG_6_2_3,
  // Kapittel 3: Teknologi og design
  CHAPTER_NATURFAG_6_3_1,
  CHAPTER_NATURFAG_6_3_2,
  // Kapittel 4: Bærekraft
  CHAPTER_NATURFAG_6_4_1,
  CHAPTER_NATURFAG_6_4_2,
];

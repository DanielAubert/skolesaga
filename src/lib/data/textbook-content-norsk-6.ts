/**
 * Tekstbok kapitler for Norsk 6. klasse
 * Innhold tilpasset elever på 6. trinn basert på LK20
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: LESING OG TEKSTFORSTÅELSE
// ============================================================================

export const CHAPTER_NORSK_6_1_1: TextbookChapter = {
  id: 'norsk-6-1-1',
  courseId: 'norsk-6',
  chapterNumber: '1.1',
  title: 'Å lese ulike tekster',
  description: 'Lær å gjenkjenne og forstå ulike teksttyper som eventyr, fabler, faktatekster og dikt.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['lese og reflektere over skjønnlitteratur og sakprosa'],
  content: [
    {
      id: 'norsk-6-1-1-intro',
      type: 'text',
      content: `## Mange forskjellige tekster

I verden finnes det utallige tekster - fra korte beskjeder til lange romaner. Når du kan kjenne igjen ulike teksttyper, blir det lettere å forstå hva du leser og hva forfatteren vil fortelle deg.

Vi deler tekster inn i to hovedgrupper:
- **Skjønnlitteratur** (oppdiktede tekster)
- **Sakprosa** (tekster om virkeligheten)`,
    },
    {
      id: 'norsk-6-1-1-def-eventyr',
      type: 'definition',
      title: 'Eventyr',
      content: `**Eventyr** er oppdiktede fortellinger med:
- Magiske elementer (troll, feer, magi)
- Typiske åpninger: "Det var en gang..."
- Tre ting som gjentar seg (tre prøver, tre brødre)
- Lykkelig slutt der det gode seirer

Kjente eventyr: "Askeladden og de gode hjelperne", "Rødhette", "Hans og Grete"`,
    },
    {
      id: 'norsk-6-1-1-def-fabel',
      type: 'definition',
      title: 'Fabler',
      content: `**Fabler** er korte fortellinger der:
- Dyr oppfører seg som mennesker
- Det er en klar moral (lærdom) på slutten
- Historien lærer oss noe viktig om livet

Kjente fabler: "Haren og skilpadden", "Reven og rønnebærene", "Mauren og gresshoppen"`,
    },
    {
      id: 'norsk-6-1-1-def-faktatekst',
      type: 'definition',
      title: 'Faktatekster',
      content: `**Faktatekster** gir oss informasjon om virkeligheten:
- Handler om noe som er sant
- Har overskrifter og mellomoverskrifter
- Inneholder fakta og forklaringer
- Bruker ofte bilder og illustrasjoner

Eksempler: Lærebøker, leksikon, nyhetsartikler`,
    },
    {
      id: 'norsk-6-1-1-def-dikt',
      type: 'definition',
      title: 'Dikt',
      content: `**Dikt** er tekster som ofte har:
- Korte linjer (verselinjer)
- Rim (ord som lyder likt)
- Rytme (fast mønster i ordene)
- Billedspråk (sammenligninger og metaforer)
- Sterke følelser eller stemninger

Dikt kan handle om alt fra natur og kjærlighet til humor og hverdagsliv.`,
    },
    {
      id: 'norsk-6-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Kjenne igjen teksttyper',
      problem: `Hvilken teksttype er dette?

**Tekst A:** "Det var en gang en fattig gutt som het Espen. Han hadde to brødre som het Per og Pål. En dag sa kongen at den som kunne gjøre prinsessen glad, skulle få henne og halve kongeriket."

**Tekst B:** "Dinosaurene levde for over 65 millioner år siden. De største dinosaurene kunne bli over 30 meter lange og veie mer enn 70 tonn."`,
      solution: `**Tekst A** er et **eventyr**:
- Starter med "Det var en gang"
- Har tre brødre (typisk for eventyr)
- Handler om en konge og en prinsesse
- Lover belønning (halve kongeriket)

**Tekst B** er en **faktatekst**:
- Gir informasjon om dinosaurer
- Inneholder fakta (tall og målinger)
- Forteller om noe virkelig`,
    },
    {
      id: 'norsk-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva kjennetegner de ulike teksttypene?',
        subTasks: [
          { label: 'a', task: 'Nevn tre kjennetegn på eventyr.', solution: 'Magiske elementer, starter med "Det var en gang", tre ting som gjentar seg, lykkelig slutt.' },
          { label: 'b', task: 'Hva er spesielt med fabler?', solution: 'Dyr oppfører seg som mennesker, og fabelen har en moral (lærdom).' },
          { label: 'c', task: 'Hva er forskjellen på skjønnlitteratur og sakprosa?', solution: 'Skjønnlitteratur er oppdiktet, sakprosa handler om virkeligheten.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk på hva som gjør hver teksttype unik'],
      },
    },
    {
      id: 'norsk-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva slags teksttype er disse?',
        subTasks: [
          { label: 'a', task: '"Reven sa til ravnen: Du synger så vakkert! Kan du synge for meg?" - Hva slags tekst er dette?', solution: 'Dette er en fabel fordi dyrene snakker som mennesker.' },
          { label: 'b', task: '"Regnet faller ned, på mitt tak av blad, drypp drypp drypp, det synger så glad" - Hva slags tekst er dette?', solution: 'Dette er et dikt fordi det har rim og rytme.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Se etter kjennetegn som rim, snakkende dyr, eller fakta'],
      },
    },
    {
      id: 'norsk-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (3-5 setninger) i én av disse sjangrene: eventyr, fabel eller dikt. Forklar hvilken sjanger du valgte og hvorfor.',
        solution: 'Varierende svar. Eleven bør vise kjennetegn på den valgte sjangeren.',
        hints: ['Husk å bruke kjennetegnene for sjangeren du velger'],
      },
    },
    {
      id: 'norsk-6-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en fabel du kjenner til. Hva er moralen i fabelen? Skriv ned moralen og forklar hva den betyr.',
        solution: 'Eksempel: I "Haren og skilpadden" er moralen "Sakte og sikkert vinner kappløpet". Dette betyr at det er bedre å gjøre ting ordentlig enn å gjøre dem fort.',
        hints: ['Moralen er det fabelen vil lære oss'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_1_2: TextbookChapter = {
  id: 'norsk-6-1-2',
  courseId: 'norsk-6',
  chapterNumber: '1.2',
  title: 'Lesestrategier',
  description: 'Bruk strategier som å forutsi, stille spørsmål og oppsummere for å forstå tekster bedre.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['bruke lesestrategier tilpasset formålet med lesingen'],
  content: [
    {
      id: 'norsk-6-1-2-intro',
      type: 'text',
      content: `## Smarte lesere bruker strategier

Gode lesere gjør mer enn bare å lese ordene. De tenker aktivt mens de leser! Ved å bruke lesestrategier kan du forstå og huske mer av det du leser.

Det finnes mange nyttige lesestrategier. Her skal vi lære om de viktigste.`,
    },
    {
      id: 'norsk-6-1-2-def-forutsi',
      type: 'definition',
      title: 'Å forutsi',
      content: `**Å forutsi** betyr å gjette hva som kommer til å skje.

**Før du leser:**
- Se på overskriften - hva tror du teksten handler om?
- Se på bildene - hva forteller de?
- Les første setning - hva tenker du skjer videre?

**Mens du leser:**
- Stopp opp og gjett hva som skjer videre
- Sjekk om gjetningen din stemte`,
    },
    {
      id: 'norsk-6-1-2-def-sporsmal',
      type: 'definition',
      title: 'Å stille spørsmål',
      content: `**Å stille spørsmål** til teksten gjør deg til en aktiv leser.

Spør deg selv:
- Hvem handler teksten om?
- Hva skjer?
- Hvor skjer det?
- Når skjer det?
- Hvorfor skjer det?
- Hvordan ender det?

Gode lesere stiller spørsmål før, under og etter lesingen.`,
    },
    {
      id: 'norsk-6-1-2-def-visualisere',
      type: 'definition',
      title: 'Å visualisere',
      content: `**Å visualisere** betyr å lage bilder i hodet.

Når du leser, prøv å se for deg:
- Hvordan personene ser ut
- Hvordan stedet ser ut
- Hva som skjer i handlingen

Dette gjør det lettere å huske og forstå teksten. Det er som å se en film i hodet!`,
    },
    {
      id: 'norsk-6-1-2-def-oppsummere',
      type: 'definition',
      title: 'Å oppsummere',
      content: `**Å oppsummere** betyr å fortelle det viktigste med få ord.

Når du oppsummerer:
- Finn de viktigste poengene
- Utelat detaljer som ikke er viktige
- Bruk egne ord
- Hold det kort

En god oppsummering svarer på: Hva handlet teksten om?`,
    },
    {
      id: 'norsk-6-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Bruke lesestrategier',
      problem: 'Du skal lese en tekst med overskriften "Den mystiske skatten". Vis hvordan du bruker lesestrategier.',
      solution: `**Forutsi (før lesing):**
"Jeg tror teksten handler om noen som finner en skatt. Kanskje det er en skattekiste eller noe verdifullt?"

**Stille spørsmål (under lesing):**
"Hvem finner skatten? Hvor er skatten gjemt? Hva er i skatten?"

**Visualisere (under lesing):**
"Jeg ser for meg en gammel kiste begravet i sanden ved en strand..."

**Oppsummere (etter lesing):**
"Teksten handlet om to barn som fant et kart og fulgte det til en skattekiste i skogen."`,
    },
    {
      id: 'norsk-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse lesestrategiene?',
        subTasks: [
          { label: 'a', task: 'Hva betyr det å forutsi?', solution: 'Å gjette hva som kommer til å skje i teksten.' },
          { label: 'b', task: 'Hva betyr det å visualisere?', solution: 'Å lage bilder i hodet av det man leser.' },
          { label: 'c', task: 'Hva betyr det å oppsummere?', solution: 'Å fortelle det viktigste med få ord.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk på hva strategien hjelper deg med'],
      },
    },
    {
      id: 'norsk-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Se på overskriften "Mysteriet i den gamle fabrikken". Bruk strategien "forutsi" og skriv ned tre ting du tror teksten handler om.',
        solution: 'Eksempel: 1) Noen utforsker en gammel fabrikk. 2) De finner noe mystisk eller skummelt. 3) Det skjer noe spennende i fabrikken.',
        hints: ['Tenk på ordene i overskriften - hva sier de deg?'],
      },
    },
    {
      id: 'norsk-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv fem spørsmål du kan stille til en tekst du skal lese. Bruk spørreordene hvem, hva, hvor, når og hvorfor.',
        solution: 'Eksempel: Hvem er hovedpersonen? Hva skjer? Hvor foregår handlingen? Når skjer det? Hvorfor handler personene som de gjør?',
        hints: ['Ett spørsmål for hvert spørreord'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_1_3: TextbookChapter = {
  id: 'norsk-6-1-3',
  courseId: 'norsk-6',
  chapterNumber: '1.3',
  title: 'Å forstå det du leser',
  description: 'Finn hovedinnhold, tema og budskap i tekster du leser.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['reflektere over hvordan tekster fremstiller virkeligheten'],
  content: [
    {
      id: 'norsk-6-1-3-intro',
      type: 'text',
      content: `## Mer enn bare ordene

Å forstå en tekst handler om mer enn å lese ordene. Du må også forstå hva teksten egentlig handler om og hva forfatteren vil fortelle deg.

I dette kapittelet lærer du å finne:
- **Hovedinnhold** - hva teksten handler om
- **Tema** - det store emnet teksten tar opp
- **Budskap** - hva forfatteren vil lære oss`,
    },
    {
      id: 'norsk-6-1-3-def-hovedinnhold',
      type: 'definition',
      title: 'Hovedinnhold',
      content: `**Hovedinnholdet** er det viktigste som skjer i teksten.

For å finne hovedinnholdet, spør deg selv:
- Hvem handler teksten om?
- Hva skjer?
- Hvordan ender det?

Hovedinnholdet kan ofte sies i 2-3 setninger.`,
    },
    {
      id: 'norsk-6-1-3-def-tema',
      type: 'definition',
      title: 'Tema',
      content: `**Temaet** er det store emnet som teksten handler om.

Tema er ofte ett eller to ord, for eksempel:
- Vennskap
- Mot
- Kjærlighet
- Rettferdighet
- Ensomhet

Mange forskjellige tekster kan ha samme tema, men fortelle ulike historier.`,
    },
    {
      id: 'norsk-6-1-3-def-budskap',
      type: 'definition',
      title: 'Budskap',
      content: `**Budskapet** er det forfatteren vil lære oss gjennom teksten.

Budskapet svarer på spørsmålet: Hva vil forfatteren at vi skal forstå?

Eksempler på budskap:
- "Det lønner seg å være snill mot andre"
- "Vennskap er viktigere enn rikdom"
- "Man skal ikke dømme andre på utseendet"`,
    },
    {
      id: 'norsk-6-1-3-def-mellom-linjene',
      type: 'definition',
      title: 'Å lese mellom linjene',
      content: `**Å lese mellom linjene** betyr å forstå noe som ikke står direkte i teksten.

Forfatteren sier ikke alltid alt rett ut. Du må noen ganger:
- Bruke ledetråder i teksten
- Tenke selv
- Trekke slutninger

Eksempel: "Sara så ned i gulvet og svarte ikke."
→ Vi forstår at Sara kanskje er trist eller flau, selv om det ikke står direkte.`,
    },
    {
      id: 'norsk-6-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Finne tema og budskap',
      problem: `Les denne korte historien:

"Mauren arbeidet hele sommeren med å samle mat. Gresshoppen sang og danset i solen. Da vinteren kom, hadde mauren nok mat, men gresshoppen frøs og var sulten. Mauren delte maten sin med gresshoppen."

Hva er tema og budskap?`,
      solution: `**Hovedinnhold:**
Mauren jobber og samler mat, mens gresshoppen bare leker. Om vinteren har mauren mat, men gresshoppen har ingenting.

**Tema:**
Arbeid og forberedelse

**Budskap:**
Det lønner seg å planlegge og jobbe hardt. Men teksten viser også at det er fint å dele med andre.`,
    },
    {
      id: 'norsk-6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på hovedinnhold, tema og budskap?',
        subTasks: [
          { label: 'a', task: 'Hva er hovedinnhold?', solution: 'Det viktigste som skjer i teksten.' },
          { label: 'b', task: 'Hva er tema?', solution: 'Det store emnet teksten handler om (ofte ett ord).' },
          { label: 'c', task: 'Hva er budskap?', solution: 'Det forfatteren vil lære oss gjennom teksten.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk på eventyret "Rødhette". Hva er tema og budskap i dette eventyret?',
        solution: 'Tema: Fare/advarsel. Budskap: Man skal lytte til foreldrene sine og være forsiktig med fremmede.',
        hints: ['Tenk på hva eventyret advarer mot'],
      },
    },
    {
      id: 'norsk-6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: '"Lise så på Petter som hadde falt. Hun stoppet ikke, men løp videre." Hva kan vi forstå mellom linjene om Lise?',
        solution: 'Vi kan forstå at Lise kanskje er egoistisk, har dårlig tid, eller ikke bryr seg om Petter. Hun velger å ikke hjelpe.',
        hints: ['Tenk på hva handlingen hennes forteller om personligheten'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: SKRIVING
// ============================================================================

export const CHAPTER_NORSK_6_2_1: TextbookChapter = {
  id: 'norsk-6-2-1',
  courseId: 'norsk-6',
  chapterNumber: '2.1',
  title: 'Fortellende tekster',
  description: 'Lær å skrive spennende fortellinger med innledning, hoveddel og avslutning.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['skrive fortellende tekster med god oppbygning'],
  content: [
    {
      id: 'norsk-6-2-1-intro',
      type: 'text',
      content: `## Å skrive fortellinger

Alle elsker en god fortelling! Når du skriver en fortelling, tar du med leseren på en reise. Du bestemmer hvem som er med, hvor det skjer, og hva som skjer.

En god fortelling har tre deler og følger en spenningskurve som holder leseren interessert.`,
    },
    {
      id: 'norsk-6-2-1-def-oppbygning',
      type: 'definition',
      title: 'Fortellingens oppbygning',
      content: `En fortelling har tre hoveddeler:

**1. Innledning**
- Presenterer hovedpersonen
- Forteller hvor og når handlingen skjer
- Får leseren interessert

**2. Hoveddel**
- Det spennende skjer
- Problemet eller konflikten utvikler seg
- Spenningen bygger seg opp til et høydepunkt

**3. Avslutning**
- Problemet løses
- Vi får vite hvordan det ender
- Gir leseren en god slutt`,
    },
    {
      id: 'norsk-6-2-1-def-spenning',
      type: 'definition',
      title: 'Spenningskurven',
      content: `**Spenningskurven** viser hvordan spenningen i fortellingen stiger og faller:

1. **Begynnelse** - Rolig start, vi blir kjent med personene
2. **Stigende handling** - Noe begynner å skje
3. **Høydepunkt** - Det mest spennende øyeblikket!
4. **Fallende handling** - Problemet begynner å løses
5. **Avslutning** - Alt roer seg, vi får vite slutten

En god fortelling bygger opp spenningen gradvis til høydepunktet.`,
    },
    {
      id: 'norsk-6-2-1-tips',
      type: 'text',
      content: `## Tips for å skrive spennende

**Gode innledninger:**
- Start med handling: "Plutselig hørte han et smell!"
- Start med dialog: "'Stopp!' ropte Maria."
- Start med en hemmelighet: "Det var noe rart med det gamle huset."

**Slik bygger du spenning:**
- La noe uventet skje
- Bruk korte setninger i spennende øyeblikk
- Beskriv følelser: "Hjertet hamret i brystet på Jonas"
- Hold på hemmeligheter

**Gode avslutninger:**
- Løs problemet
- La leseren forstå hva som skjer med personene etterpå
- Ikke la alt skje for fort`,
    },
    {
      id: 'norsk-6-2-1-example-1',
      type: 'example',
      title: 'Eksempel: En kort fortelling med oppbygning',
      problem: 'Skriv en minifortelling med tydelig innledning, hoveddel og avslutning.',
      solution: `**Innledning:**
Emma og hunden Buster gikk tur i skogen. Solen skinte, og fuglene sang.

**Hoveddel:**
Plutselig forsvant Buster mellom trærne. "Buster!" ropte Emma. Hun løp etter, men hunden var borte. Emma ble redd. Hvor var Buster?

Da hørte hun en svak bjeffing. Den kom fra en gammel brønn! Buster hadde falt ned. Emma løp hjem og hentet tau og hjelp fra pappa.

**Avslutning:**
Sammen fikk de Buster opp. Hunden logret med halen og slikket Emma i ansiktet. "Du må passe bedre på," sa Emma og klemte hunden.`,
    },
    {
      id: 'norsk-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skjer i de ulike delene av en fortelling?',
        subTasks: [
          { label: 'a', task: 'Hva forteller vi i innledningen?', solution: 'Hvem hovedpersonen er, og hvor og når handlingen skjer.' },
          { label: 'b', task: 'Hva skjer i hoveddelen?', solution: 'Det spennende skjer, problemet utvikler seg, og spenningen bygger opp.' },
          { label: 'c', task: 'Hva skjer i avslutningen?', solution: 'Problemet løses, og vi får vite hvordan det ender.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre forskjellige innledninger til en fortelling om en gutt som finner en mystisk nøkkel.',
        solution: 'Eksempel: 1) "Jonas kikket ned. Noe glinset i gresset." 2) "\'Hva er dette?\' spurte Jonas og plukket opp noe fra bakken." 3) "Det var den rareste nøkkelen Jonas noensinne hadde sett."',
        hints: ['Prøv å starte med handling, dialog eller noe mystisk'],
      },
    },
    {
      id: 'norsk-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort fortelling på 10-15 setninger med tydelig innledning, hoveddel og avslutning. Du velger selv hva fortellingen skal handle om.',
        solution: 'Varierende svar. Fortellingen bør ha tydelig struktur med innledning som presenterer personer og sted, hoveddel med spenning, og avslutning som løser konflikten.',
        hints: ['Planlegg de tre delene før du begynner å skrive'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_2_2: TextbookChapter = {
  id: 'norsk-6-2-2',
  courseId: 'norsk-6',
  chapterNumber: '2.2',
  title: 'Faktatekster',
  description: 'Skriv saklige tekster med fakta, og lær å bruke kilder.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['skrive tekster med funksjonell håndskrift og tastatur'],
  content: [
    {
      id: 'norsk-6-2-2-intro',
      type: 'text',
      content: `## Å skrive faktatekster

Faktatekster informerer leseren om noe virkelig. De er saklige og objektive. Du skriver faktatekster når du lager presentasjoner, skriver om et emne i naturfag, eller forklarer noe for andre.

I en faktatekst bruker du fakta og informasjon - ikke egne meninger eller fantasier.`,
    },
    {
      id: 'norsk-6-2-2-def-oppbygning',
      type: 'definition',
      title: 'Faktatekstens oppbygning',
      content: `En god faktatekst har:

**Overskrift**
- Forteller hva teksten handler om
- Er kort og presis

**Innledning**
- Introduserer emnet
- Forteller hva teksten skal handle om

**Hoveddel**
- Deler teksten inn i avsnitt med mellomoverskrifter
- Ett tema per avsnitt
- Forklarer og gir eksempler

**Avslutning**
- Oppsummerer det viktigste
- Kan gi en konklusjon`,
    },
    {
      id: 'norsk-6-2-2-def-avsnitt',
      type: 'definition',
      title: 'Å bruke avsnitt',
      content: `**Avsnitt** deler teksten inn i mindre deler.

Hvert avsnitt handler om én ting:
- Start en ny tanke = nytt avsnitt
- Bytt emne = nytt avsnitt

**Mellomoverskrifter** forteller hva avsnittet handler om.

Eksempel:
"## Hvordan bier lager honning
Biene samler nektar fra blomster..."`,
    },
    {
      id: 'norsk-6-2-2-def-kilder',
      type: 'definition',
      title: 'Å bruke kilder',
      content: `**Kilder** er steder du henter informasjon fra.

Kilder kan være:
- Bøker
- Nettsider
- Leksikon
- Intervjuer

**Viktig:**
- Ikke kopier tekst rett fra kilden
- Skriv med egne ord
- Oppgi hvor du fant informasjonen

Eksempel på kildehenvisning:
"Kilde: Store norske leksikon (snl.no)"`,
    },
    {
      id: 'norsk-6-2-2-example-1',
      type: 'example',
      title: 'Eksempel: En faktatekst om bier',
      problem: 'Vis hvordan en faktatekst er bygd opp.',
      solution: `**Overskrift:** Bier - viktige insekter

**Innledning:**
Bier er små insekter som spiller en viktig rolle i naturen. De pollinerer blomster og lager honning.

**Mellomoverskrift:** Hvordan bier lever
Bier lever i kolonier med opptil 60 000 bier. Hver koloni har én dronning som legger egg.

**Mellomoverskrift:** Hvorfor bier er viktige
Bier pollinerer plantene våre. Uten bier ville vi ikke hatt mange frukter og grønnsaker.

**Avslutning:**
Bier er veldig viktige for naturen og for oss mennesker.

**Kilde:** Store norske leksikon (snl.no)`,
    },
    {
      id: 'norsk-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er viktig når du skriver en faktatekst?',
        subTasks: [
          { label: 'a', task: 'Hva skal overskriften gjøre?', solution: 'Fortelle hva teksten handler om, kort og presist.' },
          { label: 'b', task: 'Hvorfor bruker vi avsnitt?', solution: 'For å dele teksten inn i deler som handler om én ting.' },
          { label: 'c', task: 'Hvorfor er det viktig å oppgi kilder?', solution: 'For å vise hvor informasjonen kommer fra, og for å unngå å stjele andres tekst.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et dyr du liker. Skriv tre mellomoverskrifter som kunne brukes i en faktatekst om dyret.',
        solution: 'Eksempel for hund: "Hvordan hunder lever", "Hva hunder spiser", "Forskjellige hunderaser".',
        hints: ['Tenk på ulike aspekter ved dyret'],
      },
    },
    {
      id: 'norsk-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort faktatekst (5-8 setninger) om et emne du kan mye om. Bruk overskrift, minst ett avsnitt med mellomoverskrift, og skriv hvor du har funnet informasjonen.',
        solution: 'Varierende svar. Teksten bør ha overskrift, mellomoverskrift, avsnitt og kildehenvisning.',
        hints: ['Du kan skrive om en hobby, et dyr, eller noe du har lært på skolen'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_2_3: TextbookChapter = {
  id: 'norsk-6-2-3',
  courseId: 'norsk-6',
  chapterNumber: '2.3',
  title: 'Rettskriving og tegnsetting',
  description: 'Lær regler for rettskriving, punktum, komma og store bokstaver.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['mestre sentrale regler for rettskriving og tegnsetting'],
  content: [
    {
      id: 'norsk-6-2-3-intro',
      type: 'text',
      content: `## Riktig skriving gjør teksten lettere å lese

Når du skriver riktig, blir teksten din lettere å forstå. Tegnsetting og rettskriving er som trafikklys i en tekst - de viser leseren hvor de skal stoppe, ta en pause, og hva som er viktig.`,
    },
    {
      id: 'norsk-6-2-3-def-punktum',
      type: 'definition',
      title: 'Punktum og stor bokstav',
      content: `**Punktum (.)** brukes:
- På slutten av en setning
- Etter forkortelser (f.eks., osv.)

**Stor bokstav** brukes:
- I starten av en setning
- I navn på personer (Emma, Jonas)
- I stedsnavn (Oslo, Bergen)
- I navn på land (Norge, Sverige)
- I ukedager og måneder (mandag, januar)`,
    },
    {
      id: 'norsk-6-2-3-def-komma',
      type: 'definition',
      title: 'Komma',
      content: `**Komma (,)** brukes:
- Mellom ting i en oppramsing: "Jeg kjøpte epler, bananer og pærer."
- Før og etter innskudd: "Jonas, som er 11 år, spiller fotball."
- Mellom hovedsetning og leddsetning: "Jeg gikk hjem, fordi det regnet."
- Etter tiltaleord: "Emma, kom hit!"

**Tips:** Les setningen høyt. Der du tar en kort pause, kan det være komma.`,
    },
    {
      id: 'norsk-6-2-3-def-sporsmal-utrop',
      type: 'definition',
      title: 'Spørsmålstegn og utropstegn',
      content: `**Spørsmålstegn (?)** brukes:
- På slutten av spørsmål
- Eksempel: "Kommer du i dag?"

**Utropstegn (!)** brukes:
- Ved utrop og sterke følelser
- Ved kommandoer
- Eksempel: "Stopp!" eller "Så flott!"

**Husk:** Ikke bruk for mange utropstegn!!! Det ser uprofesjonelt ut.`,
    },
    {
      id: 'norsk-6-2-3-def-dobbel',
      type: 'definition',
      title: 'Dobbel konsonant',
      content: `**Dobbel konsonant** brukes når vokalen før er kort:
- hoppe (kort o)
- balle (kort a)
- takk (kort a)

**Enkel konsonant** brukes når vokalen er lang:
- hope (lang o)
- bake (lang a)
- tak (lang a)

**Tips:** Si ordet høyt. Høres vokalen kort ut? Bruk dobbel konsonant!`,
    },
    {
      id: 'norsk-6-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Rett opp feilene',
      problem: 'Finn feilene i denne teksten:\n\n"emma og jonas gikk til butikken de kjøpte melk brød og ost kan du hjelpe meg spurte emma"',
      solution: `**Rettet tekst:**
"Emma og Jonas gikk til butikken. De kjøpte melk, brød og ost. Kan du hjelpe meg? spurte Emma."

**Feilene var:**
- emma → Emma (stor bokstav i navn)
- jonas → Jonas (stor bokstav i navn)
- Mangler punktum etter "butikken"
- Mangler komma mellom oppramsingen
- Mangler spørsmålstegn etter spørsmålet`,
    },
    {
      id: 'norsk-6-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Når bruker vi stor bokstav?',
        subTasks: [
          { label: 'a', task: 'Skriv tre eksempler på ord som skal ha stor bokstav.', solution: 'Eksempler: Emma (personnavn), Oslo (stedsnavn), Norge (land).' },
          { label: 'b', task: 'Hvorfor skal "Bergen" ha stor bokstav?', solution: 'Fordi det er et stedsnavn/bynavn.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn komma der det mangler: "Jeg liker å lese spille fotball og bake kaker"',
        solution: '"Jeg liker å lese, spille fotball og bake kaker." (Komma mellom leddene i oppramsingen, men ikke før "og".)',
        hints: ['Det er en oppramsing med tre ting'],
      },
    },
    {
      id: 'norsk-6-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilke ord har kort vokal og trenger dobbel konsonant?',
        subTasks: [
          { label: 'a', task: 'takk eller tak (for å si "ja takk")?', solution: 'takk (kort a)' },
          { label: 'b', task: 'hoppe eller hope (å hoppe)?', solution: 'hoppe (kort o)' },
          { label: 'c', task: 'bakke eller bake (en bakke å gå opp)?', solution: 'bakke (kort a)' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Si ordene høyt og lytt til vokalen'],
      },
    },
    {
      id: 'norsk-6-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett opp alle feilene i denne teksten: "lars og maria bor i trondheim de har en hund som heter buster i går gikk de på tur i skogen det var veldig fint vær"',
        solution: '"Lars og Maria bor i Trondheim. De har en hund som heter Buster. I går gikk de på tur i skogen. Det var veldig fint vær."',
        hints: ['Se etter manglende stor bokstav, punktum og mellomrom'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: MUNTLIG
// ============================================================================

export const CHAPTER_NORSK_6_3_1: TextbookChapter = {
  id: 'norsk-6-3-1',
  courseId: 'norsk-6',
  chapterNumber: '3.1',
  title: 'Å holde presentasjoner',
  description: 'Planlegg og hold engasjerende presentasjoner for klassen.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['presentere fagstoff muntlig med og uten digitale verktøy'],
  content: [
    {
      id: 'norsk-6-3-1-intro',
      type: 'text',
      content: `## Å snakke foran andre

Å holde en presentasjon kan føles skummelt, men det er en ferdighet du kan øve på og bli bedre i! Alle har noe interessant å fortelle, og med litt forberedelse kan du holde flotte presentasjoner.

I dette kapittelet lærer du hvordan du planlegger, øver og holder gode presentasjoner.`,
    },
    {
      id: 'norsk-6-3-1-def-planlegging',
      type: 'definition',
      title: 'Planlegge presentasjonen',
      content: `**Før presentasjonen:**

1. **Velg tema** - Hva skal du snakke om?
2. **Finn informasjon** - Samle fakta og eksempler
3. **Lag en plan:**
   - Innledning: Presenter temaet og fang oppmerksomheten
   - Hoveddel: 2-4 hovedpunkter
   - Avslutning: Oppsummer og avslutt fint
4. **Lag stikkord** - Ikke skriv alt, bare husk-ord
5. **Øv!** - Øv foran speilet eller familien`,
    },
    {
      id: 'norsk-6-3-1-def-kroppssprak',
      type: 'definition',
      title: 'Kroppsspråk',
      content: `**Kroppsspråket** ditt sier mye:

**Blikkontakt:**
- Se på publikum, ikke ned i gulvet
- Bytt blikk mellom ulike deler av rommet

**Holdning:**
- Stå rett opp
- Ikke vri deg eller vipp på føttene

**Hender:**
- Bruk hendene til å understreke poenger
- Ikke stå med armene i kors
- Ikke stikk hendene i lommene`,
    },
    {
      id: 'norsk-6-3-1-def-stemme',
      type: 'definition',
      title: 'Stemmebruk',
      content: `**Stemmen din** er viktig:

**Volum:**
- Snakk høyt nok til at alle hører deg
- Ikke rop!

**Tempo:**
- Snakk rolig og tydelig
- Ta pauser - det gir tid til å tenke

**Variasjon:**
- Varier stemmen slik at det ikke blir monotont
- Senk stemmen ved viktige poenger

**Tips:** Pust dypt og rolig for å roe nervene!`,
    },
    {
      id: 'norsk-6-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Stikkord til en presentasjon',
      problem: 'Du skal holde en presentasjon om dinosaurer. Lag stikkord for innledning, hoveddel og avslutning.',
      solution: `**Innledning:**
- "Visste dere at..." (fang oppmerksomheten)
- Dinosaurer levde for millioner av år siden

**Hoveddel:**
- Punkt 1: Hvor store de var (eksempel: T-rex)
- Punkt 2: Hva de spiste (planteetere vs. kjøttetere)
- Punkt 3: Hvorfor de døde ut (asteroid)

**Avslutning:**
- Oppsummering: Dinosaurer var fascinerende dyr
- Spørsmål til klassen?`,
    },
    {
      id: 'norsk-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er viktig når du holder en presentasjon?',
        subTasks: [
          { label: 'a', task: 'Hvorfor er blikkontakt viktig?', solution: 'For å holde publikum interessert og vise at du snakker til dem.' },
          { label: 'b', task: 'Hva bør du gjøre med stemmen?', solution: 'Snakke høyt og tydelig, variere tempo, og ta pauser.' },
          { label: 'c', task: 'Hvorfor bruker vi stikkord istedenfor å skrive alt?', solution: 'For å snakke naturlig og ha blikkontakt, ikke lese opp.' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et tema du er interessert i. Skriv stikkord for innledning, tre hovedpunkter, og avslutning.',
        solution: 'Varierende svar. Stikkordene bør være korte og dekke alle delene av presentasjonen.',
        hints: ['Tenk på en hobby, et dyr, eller noe du har lært om'],
      },
    },
    {
      id: 'norsk-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Øv på å holde en kort presentasjon (1 minutt) for noen hjemme. Be om tilbakemelding på stemmebruk og blikkontakt. Skriv ned tilbakemeldingen du fikk.',
        solution: 'Varierende svar. Eleven bør reflektere over tilbakemeldingen og hva de kan forbedre.',
        hints: ['Fokuser på å snakke rolig og se på den du snakker til'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_3_2: TextbookChapter = {
  id: 'norsk-6-3-2',
  courseId: 'norsk-6',
  chapterNumber: '3.2',
  title: 'Samtale og diskusjon',
  description: 'Delta i samtaler, lytt til andre og uttrykk egne meninger.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['delta i samtaler og diskusjoner og begrunne egne synspunkter'],
  content: [
    {
      id: 'norsk-6-3-2-intro',
      type: 'text',
      content: `## Å snakke sammen

Samtaler og diskusjoner handler om å utveksle tanker og meninger med andre. Det er viktig både å si hva du mener og å lytte til hva andre sier.

Gode samtalepartnere respekterer hverandre, selv når de er uenige!`,
    },
    {
      id: 'norsk-6-3-2-def-lytte',
      type: 'definition',
      title: 'Aktiv lytting',
      content: `**Aktiv lytting** betyr å virkelig høre på den som snakker:

- Se på den som snakker
- Nikk for å vise at du følger med
- Ikke avbryt
- Still spørsmål for å forstå bedre
- Vis interesse for det andre sier

**Eksempler på gode lyttespørsmål:**
"Hva mener du med det?"
"Kan du forklare mer?"
"Hvorfor tror du det?"`,
    },
    {
      id: 'norsk-6-3-2-def-mening',
      type: 'definition',
      title: 'Å uttrykke meninger',
      content: `**Slik kan du si hva du mener:**

"Jeg mener at..."
"Jeg tror at..."
"Etter min mening..."

**Gi begrunnelse:**
"Jeg mener at... fordi..."
"Grunnen til at jeg tror det er..."

**Eksempel:**
"Jeg mener at lekser er viktige fordi de hjelper oss å øve på det vi har lært på skolen."`,
    },
    {
      id: 'norsk-6-3-2-def-respekt',
      type: 'definition',
      title: 'Å være uenig med respekt',
      content: `**Du kan være uenig uten å være ufin:**

"Jeg forstår hva du mener, men jeg tror..."
"Det er et godt poeng, men jeg tenker at..."
"Jeg ser det litt annerledes fordi..."

**Ikke si:**
"Det er feil!" eller "Du tar helt feil!"

**Husk:** Det er lov å være uenig. Det viktige er hvordan du sier det.`,
    },
    {
      id: 'norsk-6-3-2-example-1',
      type: 'example',
      title: 'Eksempel: En diskusjon om friminutt',
      problem: 'Se på denne diskusjonen. Hva gjør elevene bra?',
      solution: `**Sara:** "Jeg mener vi burde ha lengre friminutt fordi vi trenger å bevege oss."

**Jonas:** "Jeg forstår hva du mener, men da får vi kortere undervisningstimer. Hva med å ha flere korte pauser istedenfor?"

**Sara:** "Det er en interessant idé! Men jeg liker at vi får tid til å spille fotball."

**Hva gjør de bra:**
- De bruker "jeg mener" og "jeg forstår"
- De avbryter ikke hverandre
- De lytter til hverandres argumenter
- De er uenige, men respektfulle`,
    },
    {
      id: 'norsk-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er viktig når du deltar i en samtale?',
        subTasks: [
          { label: 'a', task: 'Hva betyr aktiv lytting?', solution: 'Å virkelig høre på den som snakker, vise interesse, og stille spørsmål.' },
          { label: 'b', task: 'Hvordan kan du si at du er uenig uten å være ufin?', solution: 'Si "Jeg forstår hva du mener, men jeg tror..." eller "Jeg ser det litt annerledes fordi..."' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv din mening om dette spørsmålet og gi en begrunnelse: "Bør barn ha mobiltelefon på skolen?"',
        solution: 'Varierende svar. Eleven bør bruke "Jeg mener at..." og gi en begrunnelse med "fordi...".',
        hints: ['Husk å begrunne meningen din med "fordi..."'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: SPRÅKLÆRE
// ============================================================================

export const CHAPTER_NORSK_6_4_1: TextbookChapter = {
  id: 'norsk-6-4-1',
  courseId: 'norsk-6',
  chapterNumber: '4.1',
  title: 'Ordklasser',
  description: 'Lær om substantiv, verb, adjektiv og andre ordklasser.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['utforske og beskrive grammatiske strukturer'],
  content: [
    {
      id: 'norsk-6-4-1-intro',
      type: 'text',
      content: `## Ordklasser - ordenes familier

Alle ord tilhører en ordklasse. Ordklassen forteller oss hva slags ord det er og hvordan det brukes i setningen. Å kjenne ordklassene hjelper deg å skrive bedre og forstå hvordan språket fungerer.

De viktigste ordklassene er: substantiv, verb, adjektiv, pronomen og preposisjoner.`,
    },
    {
      id: 'norsk-6-4-1-def-substantiv',
      type: 'definition',
      title: 'Substantiv',
      content: `**Substantiv** er navneord - ord som navngir noe.

**Egennavn** (stor bokstav):
- Navn på personer: Emma, Jonas
- Stedsnavn: Oslo, Norge

**Fellesnavn** (liten bokstav):
- Ting: bord, bok, bil
- Dyr: hund, fugl, fisk
- Personer: lærer, barn, venn

**Test:** Kan du sette "en" eller "ei" foran? Da er det et substantiv!
- en bil, ei bok, et hus`,
    },
    {
      id: 'norsk-6-4-1-def-verb',
      type: 'definition',
      title: 'Verb',
      content: `**Verb** er handlingsord - ord som forteller hva noen gjør eller er.

**Eksempler:**
- løpe, hoppe, snakke, spise
- er, har, kan, vil

**Verb kan bøyes i tid:**
- Nåtid: Jeg løper
- Fortid: Jeg løp
- Fremtid: Jeg skal løpe

**Test:** Kan du sette "å" foran? Da er det ofte et verb!
- å løpe, å hoppe, å lese`,
    },
    {
      id: 'norsk-6-4-1-def-adjektiv',
      type: 'definition',
      title: 'Adjektiv',
      content: `**Adjektiv** er ord som beskriver substantiv.

**Eksempler:**
- stor, liten, fin, stygg
- rød, blå, grønn
- glad, trist, sint

**Adjektiv svarer på spørsmålet "hvordan?"**
- en **stor** hund (Hvordan er hunden? Stor.)
- et **rødt** hus (Hvordan er huset? Rødt.)

**Adjektiv bøyes:**
- stor - større - størst
- fin - finere - finest`,
    },
    {
      id: 'norsk-6-4-1-def-pronomen',
      type: 'definition',
      title: 'Pronomen',
      content: `**Pronomen** er ord som erstatter substantiv.

**Personlige pronomen:**
- jeg, du, han, hun, den, det
- vi, dere, de

**Eksempel:**
"Emma spiser is. **Hun** liker sjokolade."
(Hun erstatter Emma)

**Eiendomspronomen:**
- min, din, hans, hennes
- vår, deres

**Eksempel:**
"Dette er **min** bok."`,
    },
    {
      id: 'norsk-6-4-1-def-preposisjon',
      type: 'definition',
      title: 'Preposisjoner',
      content: `**Preposisjoner** er småord som viser forhold (tid, sted, retning).

**Eksempler:**
- på, i, under, over, ved
- til, fra, gjennom
- før, etter, under, i

**I setninger:**
- Boken ligger **på** bordet
- Vi gikk **til** skolen
- Jeg leste **etter** middag`,
    },
    {
      id: 'norsk-6-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Finne ordklasser',
      problem: 'Finn ordklassene i denne setningen:\n"Den lille katten sov på den myke sofaen."',
      solution: `**Den** - pronomen
**lille** - adjektiv (beskriver katten)
**katten** - substantiv (hva som sov)
**sov** - verb (handlingen)
**på** - preposisjon (hvor)
**den** - pronomen
**myke** - adjektiv (beskriver sofaen)
**sofaen** - substantiv (hvor katten var)`,
    },
    {
      id: 'norsk-6-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er ordklassen til disse ordene?',
        subTasks: [
          { label: 'a', task: 'hund, bil, Emma', solution: 'Substantiv (navneord)' },
          { label: 'b', task: 'løpe, hoppe, spise', solution: 'Verb (handlingsord)' },
          { label: 'c', task: 'stor, fin, rød', solution: 'Adjektiv (beskrivelord)' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle substantivene og verbene i setningen: "Hunden løp etter ballen i parken."',
        solution: 'Substantiv: hunden, ballen, parken. Verb: løp.',
        hints: ['Substantiv kan ha "en/ei/et" foran, verb er handlingen'],
      },
    },
    {
      id: 'norsk-6-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en setning som inneholder minst ett substantiv, ett verb og ett adjektiv. Marker hvilke ord som er hva.',
        solution: 'Eksempel: "Den **store** (adjektiv) **hunden** (substantiv) **sprang** (verb) fort."',
        hints: ['Start med substantiv + verb, legg så til adjektiv'],
      },
    },
    {
      id: 'norsk-6-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle ordklassene i setningen: "Vi gikk til den nye butikken og kjøpte deilig mat."',
        solution: 'Vi (pronomen), gikk (verb), til (preposisjon), den (pronomen), nye (adjektiv), butikken (substantiv), og (konjunksjon), kjøpte (verb), deilig (adjektiv), mat (substantiv).',
        hints: ['Gå gjennom ordet for ord og bruk testene vi har lært'],
      },
    },
  ],
};

export const CHAPTER_NORSK_6_4_2: TextbookChapter = {
  id: 'norsk-6-4-2',
  courseId: 'norsk-6',
  chapterNumber: '4.2',
  title: 'Setningslære',
  description: 'Forstå hvordan setninger er bygd opp med subjekt og predikat.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske og beskrive grammatiske strukturer'],
  content: [
    {
      id: 'norsk-6-4-2-intro',
      type: 'text',
      content: `## Setningens byggeklosser

En setning er ikke bare en tilfeldig samling ord. Den er bygd opp på en bestemt måte med ulike deler som passer sammen.

Akkurat som et hus trenger grunnmur og vegger, trenger en setning subjekt og predikat!`,
    },
    {
      id: 'norsk-6-4-2-def-subjekt',
      type: 'definition',
      title: 'Subjekt',
      content: `**Subjekt** er den eller det som gjør noe eller er noe i setningen.

**Finn subjektet:** Spør "Hvem eller hva?"

**Eksempler:**
- **Katten** sover. (Hvem sover? Katten.)
- **Emma** spiser is. (Hvem spiser? Emma.)
- **Ballen** trillet bortover. (Hva trillet? Ballen.)

Subjektet er ofte et substantiv eller pronomen.`,
    },
    {
      id: 'norsk-6-4-2-def-predikat',
      type: 'definition',
      title: 'Predikat',
      content: `**Predikat** er det som sies om subjektet - handlingen eller tilstanden.

Predikatet er alltid et verb (eller verbfrase).

**Finn predikatet:** Spør "Hva gjør subjektet?"

**Eksempler:**
- Katten **sover**. (Hva gjør katten? Sover.)
- Emma **spiser** is. (Hva gjør Emma? Spiser.)
- Hunden **løp raskt**. (Hva gjorde hunden? Løp raskt.)`,
    },
    {
      id: 'norsk-6-4-2-def-objekt',
      type: 'definition',
      title: 'Objekt',
      content: `**Objekt** er det som handlingen rettes mot.

**Finn objektet:** Spør "Hvem eller hva?" etter verbet.

**Eksempler:**
- Emma spiser **is**. (Hva spiser Emma? Is.)
- Jonas leser **en bok**. (Hva leser Jonas? En bok.)
- Hun klapte **hunden**. (Hvem/hva klapte hun? Hunden.)

Ikke alle setninger har objekt!
- Katten sover. (Ingen objekt)`,
    },
    {
      id: 'norsk-6-4-2-def-leddsetning',
      type: 'definition',
      title: 'Helsetning og leddsetning',
      content: `**Helsetning** kan stå alene og gir mening:
- "Jeg liker sjokolade."

**Leddsetning** kan ikke stå alene:
- "fordi den smaker godt"

Leddsetninger starter ofte med ord som:
- fordi, når, at, som, hvis, selv om

**Eksempel:**
"Jeg liker sjokolade **fordi den smaker godt**."
(Helsetning + leddsetning)`,
    },
    {
      id: 'norsk-6-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Finne subjekt, predikat og objekt',
      problem: 'Finn subjekt, predikat og objekt i setningen:\n"Hunden jager katten."',
      solution: `**Subjekt:** Hunden
(Hvem jager? Hunden jager.)

**Predikat:** jager
(Hva gjør hunden? Hunden jager.)

**Objekt:** katten
(Hvem/hva jager hunden? Katten.)

**Hele analysen:**
Hunden (subjekt) + jager (predikat) + katten (objekt)`,
    },
    {
      id: 'norsk-6-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn subjektet i disse setningene:',
        subTasks: [
          { label: 'a', task: '"Katten sitter i vinduet."', solution: 'Katten (Hvem sitter? Katten.)' },
          { label: 'b', task: '"Emma og Jonas leker."', solution: 'Emma og Jonas (Hvem leker? Emma og Jonas.)' },
          { label: 'c', task: '"Bilen kjørte fort."', solution: 'Bilen (Hva kjørte? Bilen.)' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn subjekt, predikat og objekt i setningen: "Mamma lager middag."',
        solution: 'Subjekt: Mamma. Predikat: lager. Objekt: middag.',
        hints: ['Bruk spørsmålene: Hvem? (subjekt), Hva gjør? (predikat), Hva/hvem? (objekt)'],
      },
    },
    {
      id: 'norsk-6-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Er dette en helsetning eller leddsetning? Forklar svaret.\na) "Jonas liker fotball."\nb) "fordi det er gøy"',
        solution: 'a) Helsetning - kan stå alene og gir mening. b) Leddsetning - kan ikke stå alene, starter med "fordi".',
        hints: ['Prøv å si setningen for seg selv - gir den mening alene?'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 5: NYNORSK
// ============================================================================

export const CHAPTER_NORSK_6_5_1: TextbookChapter = {
  id: 'norsk-6-5-1',
  courseId: 'norsk-6',
  chapterNumber: '5.1',
  title: 'Introduksjon til nynorsk',
  description: 'Lær grunnleggende nynorsk og forskjellene fra bokmål.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['lese og skrive tekster på hovedmål og sidemål'],
  content: [
    {
      id: 'norsk-6-5-1-intro',
      type: 'text',
      content: `## To skriftspråk i Norge

Norge har to offisielle skriftspråk: **bokmål** og **nynorsk**. Begge er norsk, men de ser litt forskjellige ut.

Nynorsk ble laget av Ivar Aasen på 1800-tallet. Han reiste rundt i Norge og samlet ord og uttrykk fra dialektene. Mange av ordene i nynorsk ligner på ord du kanskje bruker når du snakker!`,
    },
    {
      id: 'norsk-6-5-1-def-ivar',
      type: 'definition',
      title: 'Ivar Aasen',
      content: `**Ivar Aasen** (1813-1896) skapte nynorsk.

- Han vokste opp på Sunnmøre
- Han gikk rundt i hele Norge og samlet ord fra dialekter
- Han ville lage et norsk språk basert på folkesnakket
- Han skrev bøker, grammatikk og ordbok

Før Ivar Aasen skrev folk i Norge på dansk fordi Norge var styrt av Danmark i mange år.`,
    },
    {
      id: 'norsk-6-5-1-def-forskjeller',
      type: 'definition',
      title: 'Forskjeller mellom bokmål og nynorsk',
      content: `**Vanlige forskjeller:**

| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| ikke | ikkje |
| hva | kva |
| hvem | kven |
| bok**en** | bok**a** |
| gut**en** | gut**en** |
| og | og |

**a-endelser i nynorsk:**
- jenta (bm: jenten)
- boka (bm: boken)
- klokka (bm: klokken)`,
    },
    {
      id: 'norsk-6-5-1-def-verb',
      type: 'definition',
      title: 'Verb på nynorsk',
      content: `**Verb bøyes litt annerledes:**

| Bokmål | Nynorsk |
|--------|---------|
| spise → spiste → har spist | ete → åt → har ete |
| synge → sang → har sunget | syngje → song → har sunge |
| gå → gikk → har gått | gå → gjekk → har gått |

**Tips:** Nynorske verb ligner ofte på dialekter!`,
    },
    {
      id: 'norsk-6-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Samme setning på bokmål og nynorsk',
      problem: 'Sammenlign disse setningene:',
      solution: `**Bokmål:**
"Jeg vet ikke hva klokken er."

**Nynorsk:**
"Eg veit ikkje kva klokka er."

**Forskjellene:**
- jeg → eg
- vet → veit
- ikke → ikkje
- hva → kva
- klokken → klokka`,
    },
    {
      id: 'norsk-6-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva heter disse ordene på nynorsk?',
        subTasks: [
          { label: 'a', task: 'jeg', solution: 'eg' },
          { label: 'b', task: 'ikke', solution: 'ikkje' },
          { label: 'c', task: 'hva', solution: 'kva' },
          { label: 'd', task: 'boken', solution: 'boka' },
        ],
        solution: 'Se deloppgavene',
      },
    },
    {
      id: 'norsk-6-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett denne setningen til nynorsk: "Jeg liker ikke at klokken er så mye."',
        solution: '"Eg likar ikkje at klokka er så mykje."',
        hints: ['Husk: jeg → eg, ikke → ikkje, klokken → klokka'],
      },
    },
    {
      id: 'norsk-6-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-6-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv 3-4 setninger om deg selv på nynorsk. Fortell hva du heter, hvor gammel du er, og hva du liker å gjøre.',
        solution: 'Eksempel: "Eg heiter Emma. Eg er elleve år gamal. Eg likar å lese bøker og å spele fotball."',
        hints: ['Bruk ordene du har lært: eg, ikkje, kva, boka, osv.'],
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const NORSK_6_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Lesing og tekstforståelse
  CHAPTER_NORSK_6_1_1,
  CHAPTER_NORSK_6_1_2,
  CHAPTER_NORSK_6_1_3,
  // Kapittel 2: Skriving
  CHAPTER_NORSK_6_2_1,
  CHAPTER_NORSK_6_2_2,
  CHAPTER_NORSK_6_2_3,
  // Kapittel 3: Muntlig
  CHAPTER_NORSK_6_3_1,
  CHAPTER_NORSK_6_3_2,
  // Kapittel 4: Språklære
  CHAPTER_NORSK_6_4_1,
  CHAPTER_NORSK_6_4_2,
  // Kapittel 5: Nynorsk
  CHAPTER_NORSK_6_5_1,
];

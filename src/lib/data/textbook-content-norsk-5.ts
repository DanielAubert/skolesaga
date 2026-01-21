/**
 * Tekstbok kapitler for Norsk 5. klasse
 * Innhold tilpasset elever på 5. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: LESING OG LESEFORSTÅELSE
// ============================================================================

export const CHAPTER_NORSK_5_1_1: TextbookChapter = {
  id: 'norsk-5-1-1',
  courseId: 'norsk-5',
  chapterNumber: '1.1',
  title: 'Lesestrategier',
  description: 'Ulike måter å lese på for å forstå tekster bedre.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['bruke ulike lesestrategier tilpasset formålet med lesingen'],
  content: [
    {
      id: 'norsk-5-1-1-intro',
      type: 'text',
      content: `## Hva er lesestrategier?

Lesestrategier er ulike måter å lese på som hjelper deg å forstå teksten bedre. Det er som å ha en verktøykasse med forskjellige verktøy - du velger det som passer best til oppgaven!`,
    },
    {
      id: 'norsk-5-1-1-def-forlesing',
      type: 'definition',
      title: 'Førlesing',
      content: `**Førlesing** er det du gjør FØR du leser teksten:
- Se på overskriften - hva handler teksten om?
- Se på bildene - hva viser de?
- Les mellomoverskrifter
- Tenk: Hva vet jeg om dette fra før?

Førlesing gjør deg klar til å lese og forstå!`,
    },
    {
      id: 'norsk-5-1-1-def-underveis',
      type: 'definition',
      title: 'Underveislesing',
      content: `**Underveislesing** er det du gjør MENS du leser:
- Stopp opp og tenk: Forstår jeg dette?
- Lese om igjen hvis noe var vanskelig
- Lage bilder i hodet av det du leser
- Stille spørsmål til teksten
- Streke under viktige ord`,
    },
    {
      id: 'norsk-5-1-1-def-etterlesing',
      type: 'definition',
      title: 'Etterlesing',
      content: `**Etterlesing** er det du gjør ETTER at du har lest:
- Oppsummere: Hva handlet teksten om?
- Fortelle noen andre hva du har lært
- Svare på spørsmål om teksten
- Tenke: Hva var viktigst?`,
    },
    {
      id: 'norsk-5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva gjør du i de ulike lesefasene?',
        subTasks: [
          { label: 'a', task: 'Hva gjør du i førlesing?', solution: 'Ser på overskrift, bilder, mellomoverskrifter. Tenker på hva jeg vet fra før.' },
          { label: 'b', task: 'Hva gjør du i underveislesing?', solution: 'Stopper opp, leser om igjen, lager bilder i hodet, stiller spørsmål.' },
          { label: 'c', task: 'Hva gjør du i etterlesing?', solution: 'Oppsummerer, forteller andre, svarer på spørsmål.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk på rekkefølgen: før, under, etter'],
      },
    },
    {
      id: 'norsk-5-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Bruke lesestrategier',
      problem: 'Du skal lese en tekst om vikingene. Hvordan bruker du lesestrategiene?',
      solution: `**Førlesing:**
- Leser overskriften "Vikingene - Nordens sjøfarere"
- Ser på bildene av vikingskip
- Tenker: Jeg vet at vikinger levde for lenge siden

**Underveislesing:**
- Leser rolig og stopper ved vanskelige ord
- Ser for meg vikingskipene på havet
- Stiller spørsmål: Hvor reiste de?

**Etterlesing:**
- Oppsummerer: Vikingene var flinke sjøfolk som reiste langt`,
    },
    {
      id: 'norsk-5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal lese en tekst om dinosaurer. Skriv ned hva du vil gjøre i hver fase.',
        solution: 'Førlesing: Se på overskrift, bilder, tenke på hva jeg vet. Underveislesing: Lese nøye, lage bilder i hodet, stoppe ved vanskelig ord. Etterlesing: Fortelle hva teksten handlet om.',
        hints: ['Bruk de tre fasene: før, under og etter'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_1_2: TextbookChapter = {
  id: 'norsk-5-1-2',
  courseId: 'norsk-5',
  chapterNumber: '1.2',
  title: 'Fortellende tekster',
  description: 'Lese og forstå eventyr, fortellinger og noveller.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['lese og samtale om tekster i ulike sjangere'],
  content: [
    {
      id: 'norsk-5-1-2-intro',
      type: 'text',
      content: `## Fortellende tekster

Fortellende tekster er tekster som forteller en historie. Det kan være eventyr, fortellinger, noveller eller romaner. Disse tekstene har noe til felles!`,
    },
    {
      id: 'norsk-5-1-2-def-deler',
      type: 'definition',
      title: 'Fortellingens deler',
      content: `En fortelling har tre hoveddeler:

**1. Innledning (begynnelse)**
- Vi blir kjent med hovedpersonen
- Vi får vite hvor og når handlingen skjer

**2. Hoveddel (midten)**
- Noe spennende skjer (konflikten)
- Spenningen bygger seg opp

**3. Avslutning (slutt)**
- Problemet løses
- Vi får vite hvordan det går`,
    },
    {
      id: 'norsk-5-1-2-def-spenning',
      type: 'definition',
      title: 'Spenningskurven',
      content: `**Spenningskurven** viser hvordan spenningen i en fortelling stiger og faller:

1. Begynnelse - rolig start
2. Stigende spenning - noe skjer
3. Høydepunkt - mest spennende!
4. Fallende spenning - problemet løses
5. Avslutning - ro igjen`,
    },
    {
      id: 'norsk-5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tenk på eventyret "Rødhette". Hva skjer i de ulike delene?',
        subTasks: [
          { label: 'a', task: 'Hva skjer i innledningen?', solution: 'Rødhette skal besøke bestemoren og går inn i skogen.' },
          { label: 'b', task: 'Hva er høydepunktet?', solution: 'Ulven har spist bestemor og ligger i sengen, og Rødhette oppdager at det ikke er bestemor.' },
          { label: 'c', task: 'Hva skjer i avslutningen?', solution: 'Jegeren redder Rødhette og bestemor fra ulven.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk på eventyret fra begynnelse til slutt'],
      },
    },
    {
      id: 'norsk-5-1-2-personer',
      type: 'text',
      content: `## Personer i fortellingen

**Hovedpersonen** er den viktigste personen i fortellingen. Handlingen dreier seg om denne personen.

**Bipersoner** er andre personer som også er med i fortellingen.

Vi lærer om personene gjennom:
- Hva de sier
- Hva de gjør
- Hva andre sier om dem`,
    },
    {
      id: 'norsk-5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et eventyr du kjenner. Hvem er hovedpersonen, og hvem er bipersoner?',
        solution: 'Eksempel: I "Askeladden" er Askeladden hovedperson, og brødrene Per og Pål er bipersoner.',
        hints: ['Hovedpersonen er den historien handler mest om'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_1_3: TextbookChapter = {
  id: 'norsk-5-1-3',
  courseId: 'norsk-5',
  chapterNumber: '1.3',
  title: 'Fagtekster',
  description: 'Lese og forstå tekster som gir informasjon.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['finne informasjon i ulike typer tekster'],
  content: [
    {
      id: 'norsk-5-1-3-intro',
      type: 'text',
      content: `## Hva er fagtekster?

Fagtekster er tekster som gir oss informasjon og fakta om et emne. Du finner fagtekster i lærebøker, leksikon, aviser og på nettet.

Fagtekster er forskjellige fra fortellinger fordi de ikke har en spenningskurve - de forklarer og informerer!`,
    },
    {
      id: 'norsk-5-1-3-def-kjennetegn',
      type: 'definition',
      title: 'Kjennetegn på fagtekster',
      content: `Fagtekster har ofte:
- **Overskrift** som forteller hva teksten handler om
- **Mellomoverskrifter** som deler teksten inn
- **Avsnitt** med ett tema i hvert avsnitt
- **Faktasetninger** med informasjon
- **Fagord** som forklares
- **Bilder og figurer** som illustrerer`,
    },
    {
      id: 'norsk-5-1-3-def-nokkelord',
      type: 'definition',
      title: 'Nøkkelord',
      content: `**Nøkkelord** er de viktigste ordene i teksten. De forteller hva teksten handler om.

**Tips for å finne nøkkelord:**
- De gjentas ofte
- De står gjerne i overskriften
- De er ofte fagord eller navn
- De er viktige for å forstå teksten`,
    },
    {
      id: 'norsk-5-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Finne nøkkelord',
      problem: 'Les denne korte fagteksten og finn nøkkelordene:\n\n"Hjertet er en muskel som pumper blod rundt i kroppen. Hjertet slår omtrent 100 000 ganger hver dag. Blodet fører oksygen til alle deler av kroppen."',
      solution: `**Nøkkelord:** hjertet, muskel, pumper, blod, oksygen, kroppen

Disse ordene er viktigst fordi de forteller hva teksten handler om (hjertet) og hva hjertet gjør (pumper blod med oksygen).`,
    },
    {
      id: 'norsk-5-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på en fagtekst og en fortelling?',
        solution: 'En fagtekst gir fakta og informasjon, mens en fortelling forteller en historie med begynnelse, midtdel og slutt.',
        hints: ['Tenk på hva slags innhold tekstene har'],
      },
    },
    {
      id: 'norsk-5-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les en fagtekst i naturfagboken din. Finn tre nøkkelord og forklar hvorfor de er viktige.',
        solution: 'Svar vil variere avhengig av teksten. Nøkkelordene bør være sentrale for å forstå innholdet.',
        hints: ['Se etter ord som gjentas og som er viktige for temaet'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: SKRIVING
// ============================================================================

export const CHAPTER_NORSK_5_2_1: TextbookChapter = {
  id: 'norsk-5-2-1',
  courseId: 'norsk-5',
  chapterNumber: '2.1',
  title: 'Fortellende skriving',
  description: 'Skrive egne fortellinger med begynnelse, midtdel og slutt.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['skrive fortellende tekster med innledning, hoveddel og avslutning'],
  content: [
    {
      id: 'norsk-5-2-1-intro',
      type: 'text',
      content: `## Å skrive fortellinger

Nå skal du lære å skrive dine egne fortellinger! En god fortelling fanger leserens interesse og har en tydelig oppbygning.`,
    },
    {
      id: 'norsk-5-2-1-def-struktur',
      type: 'definition',
      title: 'Fortellingens oppbygning',
      content: `**Innledning**
- Presenter hovedpersonen
- Fortell hvor og når det skjer
- Fang leserens interesse!

**Hoveddel**
- Noe spennende eller overraskende skjer
- Bygg opp spenningen
- Beskriv hva personene gjør og føler

**Avslutning**
- Løs problemet
- Gi en tilfredsstillende slutt`,
    },
    {
      id: 'norsk-5-2-1-tips',
      type: 'text',
      content: `## Tips for god skriving

**Bruk sanser:** Beskriv hva personen ser, hører, lukter, smaker og føler.

**Bruk beskrivende ord:** I stedet for "Hun var redd", skriv "Hjertet hamret i brystet hennes".

**Varier setningene:** Bruk både korte og lange setninger.

**Start spennende:** "Plutselig hørte Emma et høyt brak fra kjelleren."`,
    },
    {
      id: 'norsk-5-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Starten på en fortelling',
      problem: 'Skriv en spennende innledning.',
      solution: `**Kjedelig start:**
"Jeg heter Lars. Jeg er 10 år. En dag gikk jeg tur i skogen."

**Spennende start:**
"Den kvelden hadde Lars lovet å være hjemme før mørket falt på. Men nå sto han midt i den tette skogen, og solen var i ferd med å forsvinne bak trærne. Hvor var stien?"`,
    },
    {
      id: 'norsk-5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en innledning til en fortelling om en hemmelig dør. Presenter hovedpersonen og skap spenning.',
        solution: 'Eksempel: "Sara hadde alltid lurt på hva som skjulte seg bak den rustne døren i bestemors kjeller. I dag skulle hun endelig finne ut av det."',
        hints: ['Presenter hovedpersonen og skap nysgjerrighet'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_2_2: TextbookChapter = {
  id: 'norsk-5-2-2',
  courseId: 'norsk-5',
  chapterNumber: '2.2',
  title: 'Sakprosa',
  description: 'Skrive faktasetninger og korte fagtekster.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['skrive tekster med saklig innhold'],
  content: [
    {
      id: 'norsk-5-2-2-intro',
      type: 'text',
      content: `## Å skrive sakprosa

Sakprosa er tekster som gir informasjon og fakta. Når du skriver sakprosa, må innholdet være sant og korrekt.`,
    },
    {
      id: 'norsk-5-2-2-def-fakta',
      type: 'definition',
      title: 'Faktasetninger',
      content: `**Faktasetninger** forteller noe som er sant og kan sjekkes.

**Eksempler:**
- "Norge har ca. 5 millioner innbyggere." ✓
- "Oslo er hovedstaden i Norge." ✓
- "Elefanter er de beste dyrene." ✗ (mening, ikke fakta)`,
    },
    {
      id: 'norsk-5-2-2-struktur',
      type: 'text',
      content: `## Oppbygning av fagtekst

1. **Overskrift** - Forteller hva teksten handler om
2. **Innledning** - Kort om temaet
3. **Hoveddel** - Fakta og informasjon delt i avsnitt
4. **Avslutning** - Oppsummering eller konklusjon

**Tips:** Ett tema per avsnitt!`,
    },
    {
      id: 'norsk-5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke av disse er faktasetninger?',
        subTasks: [
          { label: 'a', task: '"Hunder er de beste kjæledyrene."', solution: 'Nei, dette er en mening.' },
          { label: 'b', task: '"Hunder er pattedyr."', solution: 'Ja, dette er en faktasetning.' },
          { label: 'c', task: '"Det er 24 timer i ett døgn."', solution: 'Ja, dette er en faktasetning.' },
        ],
        solution: 'b og c er faktasetninger',
        hints: ['Fakta kan sjekkes og bevises'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_2_3: TextbookChapter = {
  id: 'norsk-5-2-3',
  courseId: 'norsk-5',
  chapterNumber: '2.3',
  title: 'Rettskriving og tegnsetting',
  description: 'Bruke punktum, komma og stor bokstav riktig.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['bruke grunnleggende tegnsetting'],
  content: [
    {
      id: 'norsk-5-2-3-intro',
      type: 'text',
      content: `## Tegnsetting

Tegnsetting gjør teksten lettere å lese og forstå. De viktigste tegnene er punktum, komma og stor bokstav.`,
    },
    {
      id: 'norsk-5-2-3-def-punktum',
      type: 'definition',
      title: 'Punktum',
      content: `**Punktum (.)** brukes:
- På slutten av en hel setning
- Etter forkortelser (f.eks., m.m.)

**Eksempel:**
"Katten sover på sofaen. Den er veldig trøtt."`,
    },
    {
      id: 'norsk-5-2-3-def-komma',
      type: 'definition',
      title: 'Komma',
      content: `**Komma (,)** brukes:
- Ved oppramsing: "Jeg kjøpte epler, bananer og pærer."
- Før og etter innskudd: "Lars, broren min, er ti år."
- Før og, men, eller i sammensatte setninger

**Eksempel:**
"Det regnet, men vi gikk ut likevel."`,
    },
    {
      id: 'norsk-5-2-3-def-storbokstav',
      type: 'definition',
      title: 'Stor bokstav',
      content: `**Stor bokstav** brukes:
- I begynnelsen av en setning
- I egennavn (navn på personer, steder, land)
- I ordet "jeg" når det står alene

**Eksempler:**
- "**N**orge er et land i **E**uropa."
- "**M**in venn **E**rik bor i **O**slo."`,
    },
    {
      id: 'norsk-5-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn punktum og stor bokstav der det mangler: "katten min heter luna hun er tre år gammel"',
        solution: '"Katten min heter Luna. Hun er tre år gammel."',
        hints: ['Hvor slutter setningene?'],
      },
    },
    {
      id: 'norsk-5-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn komma der det trengs: "Jeg har en hund en katt og en kanin"',
        solution: '"Jeg har en hund, en katt og en kanin."',
        hints: ['Komma brukes ved oppramsing'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: GRAMMATIKK
// ============================================================================

export const CHAPTER_NORSK_5_3_1: TextbookChapter = {
  id: 'norsk-5-3-1',
  courseId: 'norsk-5',
  chapterNumber: '3.1',
  title: 'Ordklasser - substantiv og verb',
  description: 'Lære om substantiv og verb og hvordan de bøyes.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['kjenne til og bruke grunnleggende begreper om språk og tekst'],
  content: [
    {
      id: 'norsk-5-3-1-intro',
      type: 'text',
      content: `## Ordklasser

Ordklasser er grupper av ord som har lignende egenskaper. I dette kapittelet lærer du om de to viktigste: **substantiv** og **verb**.`,
    },
    {
      id: 'norsk-5-3-1-def-substantiv',
      type: 'definition',
      title: 'Substantiv',
      content: `**Substantiv** er ord som betegner ting, personer, dyr, steder eller begreper.

**Eksempler:** hund, jente, bok, Norge, kjærlighet

**Substantiv kan bøyes i:**
- **Entall:** én hund
- **Flertall:** flere hunder
- **Bestemt form:** hunden, hundene`,
    },
    {
      id: 'norsk-5-3-1-tabell-sub',
      type: 'text',
      content: `## Bøying av substantiv

| Ubestemt entall | Bestemt entall | Ubestemt flertall | Bestemt flertall |
|----------------|----------------|-------------------|------------------|
| en gutt | gutten | gutter | guttene |
| ei jente | jenta | jenter | jentene |
| et hus | huset | hus | husene |`,
    },
    {
      id: 'norsk-5-3-1-def-verb',
      type: 'definition',
      title: 'Verb',
      content: `**Verb** er ord som uttrykker handling eller tilstand.

**Eksempler:** løpe, spise, være, tenke, sove

**Verb bøyes i tid:**
- **Presens** (nåtid): jeg **løper**
- **Preteritum** (fortid): jeg **løp** / **løpte**`,
    },
    {
      id: 'norsk-5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn alle substantivene: "Katten sitter på stolen og ser på fuglen."',
        solution: 'katten, stolen, fuglen',
        hints: ['Substantiv er navn på ting, dyr, personer'],
      },
    },
    {
      id: 'norsk-5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy verbet "å lese" i presens og preteritum.',
        solution: 'Presens: leser. Preteritum: leste.',
        hints: ['Presens = nå, preteritum = fortid'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_3_2: TextbookChapter = {
  id: 'norsk-5-3-2',
  courseId: 'norsk-5',
  chapterNumber: '3.2',
  title: 'Ordklasser - adjektiv',
  description: 'Lære om adjektiv og gradbøying.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['kjenne til og bruke grunnleggende begreper om språk og tekst'],
  content: [
    {
      id: 'norsk-5-3-2-intro',
      type: 'text',
      content: `## Adjektiv - beskrivende ord

Adjektiv er ord som beskriver substantiv. De forteller hvordan noe er - størrelse, farge, form, følelser og mer!`,
    },
    {
      id: 'norsk-5-3-2-def',
      type: 'definition',
      title: 'Adjektiv',
      content: `**Adjektiv** er ord som beskriver egenskaper ved substantiv.

**Eksempler:** stor, liten, rød, glad, pen, gammel

**I setninger:**
- "Den **store** hunden bjeffet."
- "Jeg har en **rød** sykkel."`,
    },
    {
      id: 'norsk-5-3-2-gradbøying',
      type: 'definition',
      title: 'Gradbøying',
      content: `Adjektiv kan bøyes i **grader** når vi sammenligner:

| Positiv | Komparativ | Superlativ |
|---------|------------|------------|
| stor | større | størst |
| fin | finere | finest |
| god | bedre | best |

**Eksempel:**
- Katten er **stor**.
- Hunden er **større** enn katten.
- Hesten er **størst**.`,
    },
    {
      id: 'norsk-5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gradbøy adjektivene: lang, fin, ung',
        subTasks: [
          { label: 'a', task: 'lang', solution: 'lang - lengre - lengst' },
          { label: 'b', task: 'fin', solution: 'fin - finere - finest' },
          { label: 'c', task: 'ung', solution: 'ung - yngre - yngst' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Positiv - komparativ - superlativ'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_3_3: TextbookChapter = {
  id: 'norsk-5-3-3',
  courseId: 'norsk-5',
  chapterNumber: '3.3',
  title: 'Setninger',
  description: 'Bygge setninger med subjekt og verbal.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['kjenne til grunnleggende setningsstruktur'],
  content: [
    {
      id: 'norsk-5-3-3-intro',
      type: 'text',
      content: `## Setningens byggesteiner

En setning er en gruppe ord som gir mening. For at en setning skal være fullstendig, trenger den minst et **subjekt** og et **verbal**.`,
    },
    {
      id: 'norsk-5-3-3-def-subjekt',
      type: 'definition',
      title: 'Subjekt',
      content: `**Subjektet** forteller hvem eller hva setningen handler om.

**Spørsmål:** Hvem/hva gjør noe?

**Eksempler:**
- "**Hunden** bjeffer." (Hvem bjeffer? Hunden)
- "**Solen** skinner." (Hva skinner? Solen)`,
    },
    {
      id: 'norsk-5-3-3-def-verbal',
      type: 'definition',
      title: 'Verbal',
      content: `**Verbalet** forteller hva som skjer eller gjøres.

**Spørsmål:** Hva gjør subjektet?

**Eksempler:**
- "Hunden **bjeffer**."
- "Solen **skinner**."`,
    },
    {
      id: 'norsk-5-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn subjekt og verbal i setningene:',
        subTasks: [
          { label: 'a', task: '"Katten sover."', solution: 'Subjekt: katten, Verbal: sover' },
          { label: 'b', task: '"Lars spiser frokost."', solution: 'Subjekt: Lars, Verbal: spiser' },
          { label: 'c', task: '"Bilen kjører fort."', solution: 'Subjekt: bilen, Verbal: kjører' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Subjekt = hvem/hva, Verbal = hva gjør'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: MUNTLIG
// ============================================================================

export const CHAPTER_NORSK_5_4_1: TextbookChapter = {
  id: 'norsk-5-4-1',
  courseId: 'norsk-5',
  chapterNumber: '4.1',
  title: 'Å holde en presentasjon',
  description: 'Planlegge og holde korte muntlige fremføringer.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['presentere tekster og tema muntlig'],
  content: [
    {
      id: 'norsk-5-4-1-intro',
      type: 'text',
      content: `## Muntlige presentasjoner

Å holde en presentasjon betyr å fortelle om noe til andre. Det kan virke skummelt, men med god forberedelse blir det lettere!`,
    },
    {
      id: 'norsk-5-4-1-def-oppbygging',
      type: 'definition',
      title: 'Oppbygning av presentasjon',
      content: `**1. Innledning**
- Si hva du skal snakke om
- Fang oppmerksomheten!

**2. Hoveddel**
- Del inn i punkter
- Gi eksempler

**3. Avslutning**
- Oppsummer det viktigste
- Spør om noen har spørsmål`,
    },
    {
      id: 'norsk-5-4-1-tips',
      type: 'text',
      content: `## Tips for god presentasjon

**Forberedelse:**
- Øv flere ganger hjemme
- Bruk stikkord, ikke les alt

**Under presentasjonen:**
- Ha øyekontakt med publikum
- Snakk tydelig og ikke for fort
- Bruk hendene til å peke eller vise
- Husk å puste!`,
    },
    {
      id: 'norsk-5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag stikkord til en 2-minutters presentasjon om ditt favorittdyr.',
        solution: 'Eksempel: 1. Hvilket dyr, 2. Hvordan ser det ut, 3. Hvor lever det, 4. Hva spiser det, 5. Hvorfor er det favoritten min',
        hints: ['Del inn i punkter du kan huske'],
      },
    },
  ],
};

export const CHAPTER_NORSK_5_4_2: TextbookChapter = {
  id: 'norsk-5-4-2',
  courseId: 'norsk-5',
  chapterNumber: '4.2',
  title: 'Samtale og diskusjon',
  description: 'Delta i samtaler og diskusjoner.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['delta i samtaler og diskusjoner'],
  content: [
    {
      id: 'norsk-5-4-2-intro',
      type: 'text',
      content: `## God samtaleteknikk

I en god samtale er det viktig å både snakke OG lytte. Alle skal få si sin mening!`,
    },
    {
      id: 'norsk-5-4-2-def',
      type: 'definition',
      title: 'Regler for god samtale',
      content: `**1. Lytt aktivt**
- Se på den som snakker
- Nikk og vis at du følger med

**2. Vent på tur**
- Ikke avbryt andre
- Rekk opp hånden

**3. Del tankene dine**
- Si hva du mener
- Gi begrunnelse`,
    },
    {
      id: 'norsk-5-4-2-diskusjon',
      type: 'text',
      content: `## Å diskutere

I en diskusjon kan folk være uenige, og det er helt greit! Det viktige er å være **saklig** og **respektfull**.

**Nyttige setninger:**
- "Jeg mener at... fordi..."
- "Jeg er enig/uenig fordi..."
- "Kan du forklare mer?"`,
    },
    {
      id: 'norsk-5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-5-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er tre viktige regler for en god samtale?',
        solution: '1. Lytt aktivt og se på den som snakker. 2. Vent på tur og ikke avbryt. 3. Del tankene dine og gi begrunnelse.',
        hints: ['Tenk på hva som gjør samtaler gode'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4.3: DRAMA OG ROLLESPILL
// ============================================================================

export const CHAPTER_NORSK_5_4_3: TextbookChapter = {
  id: 'norsk-5-4-3',
  courseId: 'norsk-5',
  chapterNumber: '4.3',
  title: 'Drama og rollespill',
  description: 'Lær å uttrykke deg gjennom drama, rollespill og teater.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['bruke drama og rollespill for å utforske tekster og situasjoner'],
  content: [
    { id: 'norsk-5-4-3-intro', type: 'text', content: '## Hva er drama?\n\nDrama handler om å spille roller og late som. Når du leker at du er en annen person, driver du med drama! I drama bruker du kroppen, stemmen og følelsene dine for å fortelle en historie.\n\n**Drama kan være:**\n- Rollespill i klasserommet\n- Små skuespill\n- Improvisasjon (finne på der og da)\n- Teater' },
    { id: 'norsk-5-4-3-def-rolle', type: 'definition', title: 'Rolle', content: 'En **rolle** er en person du later som du er. Når du går inn i en rolle, tenker og handler du som den personen.' },
    { id: 'norsk-5-4-3-kropp', type: 'text', content: '## Bruk kroppen\n\nNår du spiller en rolle, kan kroppen vise hvem du er:\n\n**Gammel person:**\n- Bøyd rygg\n- Sakte bevegelser\n- Skjelvende hender\n\n**Lei person:**\n- Hengende skuldre\n- Slappe armer\n- Sukking\n\n**Glad person:**\n- Rett rygg\n- Kvikke bevegelser\n- Store gester' },
    { id: 'norsk-5-4-3-stemme', type: 'text', content: '## Bruk stemmen\n\nStemmen din kan også vise hvem du er:\n\n- **Volum** - høyt eller lavt\n- **Tempo** - fort eller sakte\n- **Toneleie** - lyst eller mørkt\n- **Følelse** - glad, trist, sint, redd\n\n**Tips:** Prøv å si \"Hei!\" på forskjellige måter - glad, trist, sint, redd. Hør hvor forskjellig det blir!' },
    { id: 'norsk-5-4-3-impro', type: 'definition', title: 'Improvisasjon', content: '**Improvisasjon** er å finne på ting der og da, uten manus. Du vet ikke hva som skal skje - du finner det ut mens du spiller!' },
    { id: 'norsk-5-4-3-regler', type: 'tip', title: 'Ja, og...', content: 'En gyllen regel i improvisasjon er \"Ja, og...\". Det betyr at du alltid skal godta det medspilleren sier, og legge til noe. \n\nEksempel:\n- Spiller 1: \"Se, en drage!\"\n- Spiller 2: \"Ja, og den ser sulten ut!\"' },
    { id: 'norsk-5-4-3-ex1', type: 'exercise', exercise: { id: 'norsk-5-4-3-ex1', type: 'classic', task: 'Prøv å gå inn i ulike roller:', subTasks: [{ label: 'a', task: 'Gå rundt i rommet som om du er gammel', solution: 'Bøy deg litt, gå sakte, kanskje hold deg i ryggen' }, { label: 'b', task: 'Gå rundt som om du er veldig glad', solution: 'Hopp litt, smil, ha raske bevegelser' }, { label: 'c', task: 'Gå rundt som om du leter etter noe du har mistet', solution: 'Se ned, stopp opp, se under ting' }], solution: 'Se deloppgavene' } }
  ],
};

// ============================================================================
// KAPITTEL 5: LITTERATUR OG FORTELLINGER
// ============================================================================

export const CHAPTER_NORSK_5_5_1: TextbookChapter = {
  id: 'norsk-5-5-1',
  courseId: 'norsk-5',
  chapterNumber: '5.1',
  title: 'Eventyr',
  description: 'Lær om eventyrets kjennetegn og hvordan eventyr er bygget opp.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['gjenkjenne og forklare kjennetegn ved eventyr'],
  content: [
    { id: 'norsk-5-5-1-intro', type: 'text', content: '## Hva er et eventyr?\n\nEventyr er fortellinger som har blitt fortalt i mange hundre år. De handler ofte om magiske ting og fantastiske skapninger.\n\n**Eventyr starter ofte med:**\n- \"Det var en gang...\"\n- \"For lenge, lenge siden...\"\n\n**Eventyr slutter ofte med:**\n- \"...og så levde de lykkelig alle sine dager.\"' },
    { id: 'norsk-5-5-1-def-eventyr', type: 'definition', title: 'Eventyr', content: 'Et **eventyr** er en fortelling med magiske eller overnaturlige elementer. Eventyr har ofte en helt som må løse oppgaver og bekjempe det onde.' },
    { id: 'norsk-5-5-1-kjennetegn', type: 'text', content: '## Eventyrets kjennetegn\n\n**1. Magiske elementer**\n- Trolldom og magi\n- Snakkende dyr\n- Magiske gjenstander\n- Overnaturlige skapninger\n\n**2. Faste roller**\n- Helten (ofte en gutt eller jente)\n- Hjelperen (noen som hjelper helten)\n- Skurken (troll, heks, ond stemor)\n- Prinsessen/prinsen (ofte en belønning)\n\n**3. Tretallets lov**\n- Tre brødre/søstre\n- Tre oppgaver\n- Tre ønsker\n- Tre forsøk' },
    { id: 'norsk-5-5-1-oppbygning', type: 'text', content: '## Hvordan er eventyr bygget opp?\n\n**1. Innledning**\nVi møter helten og får vite om et problem.\n\n**2. Handlingen**\nHelten reiser ut og møter utfordringer.\nHelten får hjelp av noen.\nHelten må løse oppgaver.\n\n**3. Høydepunkt**\nDen største utfordringen!\nHelten møter skurken.\n\n**4. Avslutning**\nHelten vinner.\nDet gode seirer over det onde.\nAlle lever lykkelig!' },
    { id: 'norsk-5-5-1-eksempel', type: 'example', title: 'Askeladden', content: '**Innledning:** Tre brødre, Askeladden er den yngste og \"dumme\".\n**Handling:** Brødrene skal ut og vinne prinsessen. De eldre er uhøflige mot folk de møter. Askeladden hjelper alle.\n**Høydepunkt:** Askeladden får hjelp av dem han var snill mot.\n**Avslutning:** Askeladden vinner prinsessen og halve kongeriket!' },
    { id: 'norsk-5-5-1-ex1', type: 'exercise', exercise: { id: 'norsk-5-5-1-ex1', type: 'multiple-choice', task: 'Hva er typisk for eventyr?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Magiske elementer og tretallets lov', 'Sanne historier fra fortiden', 'Vitenskapelige forklaringer', 'Nyheter fra avisen'], solution: 'Eventyr kjennetegnes av magiske elementer (troll, magi, snakkende dyr) og tretallets lov (tre brødre, tre oppgaver osv.).' }] } },
    { id: 'norsk-5-5-1-ex2', type: 'exercise', exercise: { id: 'norsk-5-5-1-ex2', type: 'classic', task: 'Finn eksempler på tretallets lov i eventyr du kjenner.', subTasks: [{ label: 'a', task: 'Hvilket eventyr har tre brødre?', solution: 'Askeladden, De tre bukkene Bruse' }, { label: 'b', task: 'Hvilket eventyr har tre ønsker?', solution: 'Fisken og kona, Lampen til Aladdin' }], solution: 'Se deloppgavene' } }
  ],
};

export const CHAPTER_NORSK_5_5_2: TextbookChapter = {
  id: 'norsk-5-5-2',
  courseId: 'norsk-5',
  chapterNumber: '5.2',
  title: 'Fabler og sagn',
  description: 'Lær om fabler med snakkende dyr og sagn om helter.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['kjenne til ulike typer fortellinger som fabel og sagn'],
  content: [
    { id: 'norsk-5-5-2-fabel-intro', type: 'text', content: '## Hva er en fabel?\n\nEn fabel er en kort fortelling med dyr som oppfører seg som mennesker. Fablene har alltid en moral - noe vi skal lære.\n\n**Kjente fabelforfattere:**\n- Æsop (gammel gresk)\n- Jean de La Fontaine (fransk)' },
    { id: 'norsk-5-5-2-def-fabel', type: 'definition', title: 'Fabel', content: 'En **fabel** er en kort fortelling der dyr snakker og oppfører seg som mennesker. Fabelen har alltid en moral - en lærdom vi skal ta med oss.' },
    { id: 'norsk-5-5-2-eksempel-fabel', type: 'example', title: 'Haren og skilpadden', content: '**Fabelen:** Haren og skilpadden skal løpe om kapp. Haren er sikker på seier og tar en lur. Skilpadden går sakte men sikkert og vinner!\n\n**Moral:** Sakte og stødig vinner løpet. Ikke vær for sikker på deg selv!' },
    { id: 'norsk-5-5-2-sagn-intro', type: 'text', content: '## Hva er et sagn?\n\nEt sagn er en fortelling som folk trodde var sann. Sagn handler ofte om:\n- Underjordiske (troll, nisser, huldra)\n- Historiske personer\n- Steder i naturen\n\nSagn forklarer ofte hvorfor ting er som de er.' },
    { id: 'norsk-5-5-2-def-sagn', type: 'definition', title: 'Sagn', content: 'Et **sagn** er en fortelling som folk trodde var sann. Sagn handler ofte om overnaturlige vesener eller spesielle steder.' },
    { id: 'norsk-5-5-2-eksempel-sagn', type: 'example', title: 'Hvorfor bjørnen har kort hale', content: 'Sagnet forteller at bjørnen hadde lang hale før. Reven lurte bjørnen til å fiske med halen i et hull i isen. Halen frøs fast og brakk av - derfor har bjørnen kort hale!' },
    { id: 'norsk-5-5-2-ex1', type: 'exercise', exercise: { id: 'norsk-5-5-2-ex1', type: 'multiple-choice', task: 'Hva er forskjellen på fabel og sagn?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Fabler har moral, sagn forklarer hvordan ting ble til', 'Begge er sanne historier', 'Fabler er lange, sagn er korte', 'Det er ingen forskjell'], solution: 'Fabler er korte fortellinger med dyr som har en moral. Sagn er fortellinger folk trodde var sanne, og de forklarer ofte hvordan ting ble til.' }] } }
  ],
};

export const CHAPTER_NORSK_5_5_3: TextbookChapter = {
  id: 'norsk-5-5-3',
  courseId: 'norsk-5',
  chapterNumber: '5.3',
  title: 'Dikt og rim',
  description: 'Lær om dikt, rim og rytme i språket.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['lese og skrive dikt med rim og rytme'],
  content: [
    { id: 'norsk-5-5-3-intro', type: 'text', content: '## Hva er et dikt?\n\nEt dikt er en tekst skrevet på en spesiell måte. Dikt har ofte:\n- Korte linjer\n- Rim (ord som høres like ut)\n- Rytme (en takt i språket)\n- Sterke bilder og følelser' },
    { id: 'norsk-5-5-3-def-rim', type: 'definition', title: 'Rim', content: '**Rim** er når ord slutter likt. Sol-bol, hus-mus, seng-peng rimer fordi de har samme lyd på slutten.' },
    { id: 'norsk-5-5-3-rimtyper', type: 'text', content: '## Typer rim\n\n**Parrim (AABB)**\nTo linjer etter hverandre rimer:\n\"Katten lå og sov i **seng** (A)\nGlemte helt at den var **peng** (A)\nSå kom musa listende **inn** (B)\nKatten fikk den på sitt **skinn** (B)\"\n\n**Kryssrim (ABAB)**\nAnnenhver linje rimer:\n\"Sola skinner over **fjell** (A)\nFuglene synger så **fint** (B)\nDet blir snart en vakker **kveld** (A)\nOg jeg føler meg **mint** (B)\"' },
    { id: 'norsk-5-5-3-def-rytme', type: 'definition', title: 'Rytme', content: '**Rytme** er takten i diktet. Noen stavelser er trykklette og noen er trykktunge. Rytme gjør at diktet får en egen \"musikk\".' },
    { id: 'norsk-5-5-3-tips', type: 'tip', title: 'Skriv egne dikt!', content: '1. Velg et tema (naturen, følelser, dyr)\n2. Finn rimord (bruk ordbok eller tenk høyt)\n3. Tell stavelser for å få rytme\n4. Ikke vær redd for å prøve og feile!' },
    { id: 'norsk-5-5-3-ex1', type: 'exercise', exercise: { id: 'norsk-5-5-3-ex1', type: 'classic', task: 'Finn rimord:', subTasks: [{ label: 'a', task: 'Hva rimer på \"sol\"?', solution: 'Bol, skol, stol, pol' }, { label: 'b', task: 'Hva rimer på \"hund\"?', solution: 'Stund, rund, grunn' }, { label: 'c', task: 'Hva rimer på \"tre\"?', solution: 'Se, le, ske, være' }], solution: 'Se deloppgavene' } },
    { id: 'norsk-5-5-3-ex2', type: 'exercise', exercise: { id: 'norsk-5-5-3-ex2', type: 'classic', task: 'Skriv et kort dikt med parrim (AABB) om et dyr du liker.', subTasks: [{ label: 'a', task: 'Skriv fire linjer der linje 1 og 2 rimer, og linje 3 og 4 rimer.', solution: 'Eksempel:\nKatten min er myk og fin (A)\nHun sover i stolen min (A)\nNår hun våkner vil hun ut (B)\nOg jager mus til det blir slutt (B)' }], solution: 'Se eksempel' } }
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const NORSK_5_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Lesing og leseforståelse
  CHAPTER_NORSK_5_1_1,
  CHAPTER_NORSK_5_1_2,
  CHAPTER_NORSK_5_1_3,
  // Kapittel 2: Skriving
  CHAPTER_NORSK_5_2_1,
  CHAPTER_NORSK_5_2_2,
  CHAPTER_NORSK_5_2_3,
  // Kapittel 3: Grammatikk
  CHAPTER_NORSK_5_3_1,
  CHAPTER_NORSK_5_3_2,
  CHAPTER_NORSK_5_3_3,
  // Kapittel 4: Muntlig
  CHAPTER_NORSK_5_4_1,
  CHAPTER_NORSK_5_4_2,
  CHAPTER_NORSK_5_4_3,
  // Kapittel 5: Litteratur
  CHAPTER_NORSK_5_5_1,
  CHAPTER_NORSK_5_5_2,
  CHAPTER_NORSK_5_5_3,
];

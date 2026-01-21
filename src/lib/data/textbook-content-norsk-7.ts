/**
 * Tekstbok kapitler for Norsk 7. klasse
 * Innhold tilpasset elever på 7. trinn (12-13 år)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: LESING OG LITTERATUR
// ============================================================================

export const CHAPTER_NORSK_7_1_1: TextbookChapter = {
  id: 'norsk-7-1-1',
  courseId: 'norsk-7',
  chapterNumber: '1.1',
  title: 'Lesestrategier for lengre tekster',
  description: 'Avanserte lesestrategier for å forstå og bearbeide lengre tekster.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['bruke varierte lesestrategier tilpasset formålet med lesingen'],
  content: [
    {
      id: 'norsk-7-1-1-intro',
      type: 'text',
      content: `## Lesestrategier for lengre tekster

Når tekstene blir lengre og mer komplekse, trenger du gode strategier for å holde oversikt og forstå innholdet. I dette kapittelet lærer du teknikker som hjelper deg å lese effektivt og huske det du har lest.`,
    },
    {
      id: 'norsk-7-1-1-def-blikk',
      type: 'definition',
      title: 'BLIKK-metoden',
      content: `**BLIKK** er en lesestrategi med fem steg:

**B** - **Bli kjent** med teksten først
- Les overskrifter og mellomoverskrifter
- Se på bilder, tabeller og figurer
- Les innledning og avslutning raskt

**L** - **Les** teksten grundig
- Les i eget tempo
- Stopp opp ved vanskelige avsnitt

**I** - **Identifiser** nøkkelord og hovedideer
- Strek under viktige begreper
- Noter viktige poenger i margen

**K** - **Kontroller** forståelsen
- Kan du forklare innholdet med egne ord?
- Er det noe du ikke forstår?

**K** - **Koble** til det du kan fra før
- Hvordan henger dette sammen med det du allerede vet?`,
    },
    {
      id: 'norsk-7-1-1-def-notatteknikk',
      type: 'definition',
      title: 'Notatteknikker',
      content: `**Effektive notatteknikker:**

**Tankekart (mindmap)**
- Skriv hovedtemaet i midten
- Tegn grener ut til undertemaer
- Bruk nøkkelord, ikke hele setninger
- Bruk farger for å skille temaer

**Cornell-metoden**
- Del arket i tre deler
- Hovednotater til høyre
- Stikkord/spørsmål til venstre
- Oppsummering nederst

**Punktnotater**
- Skriv ned hovedpoengene som punkter
- Bruk innrykk for detaljer
- Hold deg kort og presis`,
    },
    {
      id: 'norsk-7-1-1-tip-1',
      type: 'tip',
      title: 'Tips for lengre tekster',
      content: `- Del teksten opp i mindre deler
- Ta pauser mellom seksjonene
- Oppsummer hver del før du går videre
- Les vanskelige avsnitt flere ganger
- Slå opp ord du ikke forstår`,
    },
    {
      id: 'norsk-7-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Bruke BLIKK-metoden',
      problem: 'Du skal lese et kapittel om klimaendringer i naturfagboken. Hvordan bruker du BLIKK-metoden?',
      solution: `**B - Bli kjent:** Leser overskriften "Klimaendringer og konsekvenser", ser på bildene av issmelting og grafer over temperaturøkning.

**L - Les:** Leser kapittelet grundig, stopper opp ved avsnittet om drivhuseffekten som er litt vanskelig.

**I - Identifiser:** Strek under nøkkelord som "drivhusgasser", "global oppvarming", "smeltende isbreer".

**K - Kontroller:** Kan forklare at CO2 holder varmen inne i atmosfæren, men må lese mer om metangass.

**K - Koble:** Husker at vi lærte om fotosyntese i fjor - planter tar opp CO2!`,
    },
    {
      id: 'norsk-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står bokstaven "I" for i BLIKK-metoden?',
        options: [
          { id: 'a', text: 'Identifiser nøkkelord og hovedideer', isCorrect: true },
          { id: 'b', text: 'Interesser deg for innholdet', isCorrect: false },
          { id: 'c', text: 'Ignorer vanskelige ord', isCorrect: false },
          { id: 'd', text: 'Imitere forfatteren', isCorrect: false },
        ],
        solution: 'I BLIKK-metoden står I for "Identifiser nøkkelord og hovedideer".',
        hints: ['Tenk på hva som er viktig å finne i teksten'],
      },
    },
    {
      id: 'norsk-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken notatteknikk passer best når du skal se sammenhenger mellom mange ideer?',
        options: [
          { id: 'a', text: 'Punktnotater', isCorrect: false },
          { id: 'b', text: 'Tankekart (mindmap)', isCorrect: true },
          { id: 'c', text: 'Avskrift av teksten', isCorrect: false },
          { id: 'd', text: 'Understreking', isCorrect: false },
        ],
        solution: 'Tankekart (mindmap) er best for å se sammenhenger fordi du visuelt kobler ideene sammen med grener.',
        hints: ['Hvilken metode viser visuelt hvordan ting henger sammen?'],
      },
    },
    {
      id: 'norsk-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et tankekart over temaet "Skole". Sett "Skole" i midten og tegn minst 5 grener med undertemaer.',
        solution: 'Eksempel på grener: Fag (matte, norsk, naturfag), Venner, Lærere, Friminutt, Lekser, Klasserom, Aktiviteter',
        hints: ['Tenk på alt du forbinder med skole'],
      },
    },
    {
      id: 'norsk-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er hovedformålet med det siste steget i BLIKK-metoden (Koble)?',
        options: [
          { id: 'a', text: 'Å kontrollere stavefeil i teksten', isCorrect: false },
          { id: 'b', text: 'Å knytte ny kunnskap til det du allerede vet', isCorrect: true },
          { id: 'c', text: 'Å kopiere teksten til notatene', isCorrect: false },
          { id: 'd', text: 'Å kritisere forfatterens synspunkter', isCorrect: false },
        ],
        solution: 'Koble-steget handler om å knytte ny kunnskap til tidligere kunnskap, noe som gjør det lettere å huske.',
        hints: ['Tenk på hvorfor det er lettere å huske ting som henger sammen med noe du kan fra før'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_1_2: TextbookChapter = {
  id: 'norsk-7-1-2',
  courseId: 'norsk-7',
  chapterNumber: '1.2',
  title: 'Skjønnlitteratur',
  description: 'Romaner, noveller og dikt - litterær analyse og forståelse.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['lese og analysere skjønnlitteratur fra ulike tider og kulturer'],
  content: [
    {
      id: 'norsk-7-1-2-intro',
      type: 'text',
      content: `## Skjønnlitteratur

Skjønnlitteratur er tekster som er diktet opp - forfatteren bruker fantasien til å skape historier, personer og verdener. I dette kapittelet skal du lære om de viktigste sjangerne og hvordan du kan analysere litteratur.`,
    },
    {
      id: 'norsk-7-1-2-def-roman',
      type: 'definition',
      title: 'Roman',
      content: `**Roman** er en lengre fortelling i prosa (vanlig språk, ikke vers).

**Kjennetegn:**
- Lang fortelling (ofte 100+ sider)
- Flere handlingstråder kan flettes sammen
- Dyptgående personskildringer
- Handling over lengre tid
- Ofte delt inn i kapitler

**Eksempler på ungdomsromaner:**
- "Harry Potter" av J.K. Rowling
- "Hunger Games" av Suzanne Collins
- "Sofies verden" av Jostein Gaarder`,
    },
    {
      id: 'norsk-7-1-2-def-novelle',
      type: 'definition',
      title: 'Novelle',
      content: `**Novelle** er en kort fortelling i prosa.

**Kjennetegn:**
- Kort (1-30 sider)
- Få personer
- Ett handlingsforløp
- Kort tidsrom
- Ofte et vendepunkt eller en "vri" på slutten
- Konsentrert handling - hver setning teller!

En novelle er som et øyeblikksbilde, mens en roman er som en hel film.`,
    },
    {
      id: 'norsk-7-1-2-def-dikt',
      type: 'definition',
      title: 'Dikt',
      content: `**Dikt** (lyrikk) er tekster skrevet på vers med et komprimert språk.

**Kjennetegn:**
- Delt inn i linjer og strofer (vers)
- Ofte rim og rytme
- Bruker språklige bilder (metaforer, sammenligninger)
- Uttrykker følelser og stemninger
- Korte tekster med mye mening

**Typer rim:**
- **Enderim:** Ordene rimer på slutten av linjene
- **Bokstavrim (allitterasjon):** Ord som begynner på samme bokstav`,
    },
    {
      id: 'norsk-7-1-2-analyse',
      type: 'text',
      content: `## Litterær analyse

Når du analyserer en tekst, undersøker du hvordan den er bygget opp og hvilke virkemidler forfatteren bruker.

**Viktige elementer å se etter:**

**1. Handling**
- Hva skjer? I hvilken rekkefølge?
- Hva er konflikten?
- Hvordan løses problemet?

**2. Personer**
- Hvem er hovedpersonen?
- Hvordan beskrives personene? (direkte/indirekte)
- Hvordan utvikler de seg?

**3. Miljø**
- Hvor og når foregår handlingen?
- Hvordan påvirker miljøet handlingen?

**4. Synsvinkel**
- Hvem forteller? (jeg-forteller/tredjeperson)
- Hvor mye vet fortelleren?

**5. Tema**
- Hva handler teksten egentlig om?
- Hva vil forfatteren si oss?`,
    },
    {
      id: 'norsk-7-1-2-def-virkemidler',
      type: 'definition',
      title: 'Språklige virkemidler',
      content: `**Språklige virkemidler** er teknikker forfatteren bruker for å skape effekt:

**Metafor** - sammenligning uten "som"
- "Livet er en reise"

**Sammenligning (simile)** - sammenligning med "som" eller "lik"
- "Hun var rask som en gepard"

**Personifikasjon** - gi liv til ting
- "Vinden hvisket"

**Gjentakelse** - gjenta ord for effekt
- "Aldri, aldri, aldri gir vi opp"

**Kontrast** - motsetninger
- "Lys og mørke, godt og ondt"

**Overdrivelse** - forstørre for effekt
- "Jeg har sagt det en million ganger"`,
    },
    {
      id: 'norsk-7-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Analysere et dikt',
      problem: `Analyser dette diktet:

*Vinter*
Snøen faller stille ned,
dekker verden med et hvitt teppe.
Trærne står som stumme vakter
i den kalde nattens grep.`,
      solution: `**Form:** 4 linjer, ingen enderim, beskrivende språk

**Virkemidler:**
- Personifikasjon: "snøen faller stille" (snø kan ikke velge å være stille)
- Metafor: "hvitt teppe" (snøen sammenlignes med et teppe)
- Sammenligning: "trærne står som stumme vakter"
- Personifikasjon: "nattens grep" (natten har ikke hender)

**Tema:** Vinteren beskrives som fredelig men også kald og stille

**Stemning:** Rolig, stille, litt melankolsk`,
    },
    {
      id: 'norsk-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom en roman og en novelle?',
        options: [
          { id: 'a', text: 'En roman er lengre med flere handlingstråder', isCorrect: true },
          { id: 'b', text: 'En novelle har alltid rim', isCorrect: false },
          { id: 'c', text: 'En roman handler alltid om kjærlighet', isCorrect: false },
          { id: 'd', text: 'En novelle er skrevet på vers', isCorrect: false },
        ],
        solution: 'Romanen er lengre (100+ sider) og har ofte flere handlingstråder, mens novellen er kort og konsentrert.',
        hints: ['Tenk på lengden og kompleksiteten'],
      },
    },
    {
      id: 'norsk-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket språklig virkemiddel er brukt i setningen "Solen kysset huden min"?',
        options: [
          { id: 'a', text: 'Sammenligning', isCorrect: false },
          { id: 'b', text: 'Personifikasjon', isCorrect: true },
          { id: 'c', text: 'Overdrivelse', isCorrect: false },
          { id: 'd', text: 'Gjentakelse', isCorrect: false },
        ],
        solution: 'Personifikasjon - solen får menneskelige egenskaper (å kysse).',
        hints: ['Kan solen egentlig kysse?'],
      },
    },
    {
      id: 'norsk-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: '"Hjertet mitt er en stein." Hva slags virkemiddel er dette?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: true },
          { id: 'b', text: 'Sammenligning', isCorrect: false },
          { id: 'c', text: 'Personifikasjon', isCorrect: false },
          { id: 'd', text: 'Kontrast', isCorrect: false },
        ],
        solution: 'Metafor - en sammenligning uten "som" eller "lik". Hjertet kalles direkte for en stein.',
        hints: ['Brukes ordet "som" i setningen?'],
      },
    },
    {
      id: 'norsk-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les en novelle og skriv en kort analyse (ca. 100 ord) der du beskriver: hovedpersonen, konflikten, og ett språklig virkemiddel.',
        solution: 'Svar vil variere. En god analyse nevner hvem hovedpersonen er, hva konflikten handler om, og identifiserer minst ett virkemiddel med eksempel fra teksten.',
        hints: ['Bruk analysemodellen: person, handling, virkemidler'],
      },
    },
    {
      id: 'norsk-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er enderim?',
        options: [
          { id: 'a', text: 'Når ord på slutten av linjer rimer', isCorrect: true },
          { id: 'b', text: 'Når ord begynner på samme bokstav', isCorrect: false },
          { id: 'c', text: 'Når diktet slutter brått', isCorrect: false },
          { id: 'd', text: 'Når setninger gjentas', isCorrect: false },
        ],
        solution: 'Enderim er når ordene på slutten av verselinjene rimer med hverandre, for eksempel "dag" og "slag".',
        hints: ['Tenk på hvor i linjen rimet kommer'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_1_3: TextbookChapter = {
  id: 'norsk-7-1-3',
  courseId: 'norsk-7',
  chapterNumber: '1.3',
  title: 'Sakprosa og kildekritikk',
  description: 'Vurdere kilder og informasjon kritisk.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['vurdere kilder kritisk og skille mellom fakta og meninger'],
  content: [
    {
      id: 'norsk-7-1-3-intro',
      type: 'text',
      content: `## Sakprosa og kildekritikk

I en verden full av informasjon er det viktigere enn noensinne å kunne skille pålitelig informasjon fra usann eller misvisende informasjon. I dette kapittelet lærer du å vurdere kilder kritisk.`,
    },
    {
      id: 'norsk-7-1-3-def-sakprosa',
      type: 'definition',
      title: 'Sakprosa',
      content: `**Sakprosa** er tekster som handler om virkeligheten og formidler informasjon, meninger eller kunnskap.

**Typer sakprosa:**
- **Artikler** (nyheter, fagartikler)
- **Lærebøker**
- **Leksikon og oppslagsverk**
- **Debattinnlegg og kronikker**
- **Blogger og sosiale medier**
- **Rapporter og dokumenter**

Til forskjell fra skjønnlitteratur er sakprosa basert på virkeligheten, ikke fantasi.`,
    },
    {
      id: 'norsk-7-1-3-def-kildekritikk',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er å vurdere om en kilde er pålitelig og troverdig.

**Spørsmål du bør stille:**
1. **Hvem** står bak informasjonen?
2. **Hva** er hensikten med teksten?
3. **Når** ble den laget? Er den oppdatert?
4. **Hvor** er informasjonen publisert?
5. **Hvorfor** ble dette skrevet?

**Husk:** Ikke alt på internett er sant!`,
    },
    {
      id: 'norsk-7-1-3-def-faktamening',
      type: 'definition',
      title: 'Fakta vs. meninger',
      content: `**Fakta** er påstander som kan bevises eller motbevises.
- "Norge ble selvstendig i 1905."
- "Vann koker ved 100 grader celsius."

**Meninger** er vurderinger som uttrykker hva noen synes.
- "Sommer er den beste årstiden."
- "Denne filmen var kjedelig."

**Tipsordet:** Ofte brukes ord som "jeg synes", "jeg mener", "det beste" i meninger.`,
    },
    {
      id: 'norsk-7-1-3-warning',
      type: 'warning',
      title: 'Vær kritisk til nettkilder',
      content: `**Faresignaler på upålitelige kilder:**
- Ingen forfatter oppgitt
- Ingen dato
- Mange skrivefeil
- Overdrevne påstander ("SENSASJON!")
- Ingen kilder oppgitt
- Ukjent nettsted
- Kun én kilde som hevder dette

**Gode kilder har vanligvis:**
- Kjent forfatter/redaksjon
- Oppgitte kilder
- Nøytralt språk
- Flere kilder bekrefter det samme`,
    },
    {
      id: 'norsk-7-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en nettside',
      problem: 'Du finner en artikkel som hevder at mobilstråling er farlig. Hvordan vurderer du kilden?',
      solution: `**Sjekk hvem som står bak:**
- Er det et anerkjent forskningsmiljø, eller en ukjent blogg?

**Sjekk om det stemmer:**
- Hva sier Store norske leksikon?
- Hva sier Folkehelseinstituttet?
- Finner du flere uavhengige kilder som bekrefter dette?

**Vurder språket:**
- Er artikkelen saklig, eller bruker den skremselsord?
- Oppgir den vitenskapelige kilder?

**Konklusjon:** Hvis bare én ukjent kilde hevder noe som store forskningsinstitusjoner avviser, bør du være skeptisk.`,
    },
    {
      id: 'norsk-7-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse påstandene er en mening?',
        options: [
          { id: 'a', text: 'Oslo er hovedstaden i Norge', isCorrect: false },
          { id: 'b', text: 'Fotball er den beste sporten', isCorrect: true },
          { id: 'c', text: 'En uke har syv dager', isCorrect: false },
          { id: 'd', text: 'Jorda går i bane rundt sola', isCorrect: false },
        ],
        solution: '"Fotball er den beste sporten" er en mening fordi det er en subjektiv vurdering. De andre er fakta som kan bevises.',
        hints: ['Fakta kan bevises, meninger er subjektive vurderinger'],
      },
    },
    {
      id: 'norsk-7-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et viktig tegn på at en nettkilde kan være upålitelig?',
        options: [
          { id: 'a', text: 'Den har oppgitt forfatter og dato', isCorrect: false },
          { id: 'b', text: 'Den bruker overdrevne påstander og mangler kilder', isCorrect: true },
          { id: 'c', text: 'Den er publisert på en .no-adresse', isCorrect: false },
          { id: 'd', text: 'Den har nøytrale overskrifter', isCorrect: false },
        ],
        solution: 'Overdrevne påstander og manglende kilder er faresignaler på upålitelige kilder.',
        hints: ['Tenk på hva seriøse kilder har som useriøse mangler'],
      },
    },
    {
      id: 'norsk-7-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket spørsmål er IKKE en del av kildekritikk?',
        options: [
          { id: 'a', text: 'Hvem står bak informasjonen?', isCorrect: false },
          { id: 'b', text: 'Hvor mange bilder har artikkelen?', isCorrect: true },
          { id: 'c', text: 'Når ble teksten skrevet?', isCorrect: false },
          { id: 'd', text: 'Hva er hensikten med teksten?', isCorrect: false },
        ],
        solution: 'Antall bilder sier ingenting om kildens pålitelighet. De andre spørsmålene er viktige for kildekritikk.',
        hints: ['Tenk på hva som påvirker om informasjonen er pålitelig'],
      },
    },
    {
      id: 'norsk-7-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn to nettkilder om samme tema. Sammenlign dem: Hvilken er mest pålitelig og hvorfor?',
        solution: 'Svar vil variere. En god sammenligning vurderer: forfatter, publiseringssted, dato, kildehenvisninger, språkbruk og om informasjonen bekreftes av andre.',
        hints: ['Bruk de kildekritiske spørsmålene på begge kilder'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: SKRIVING
// ============================================================================

export const CHAPTER_NORSK_7_2_1: TextbookChapter = {
  id: 'norsk-7-2-1',
  courseId: 'norsk-7',
  chapterNumber: '2.1',
  title: 'Argumenterende tekster',
  description: 'Skrive tekster som argumenterer for et synspunkt.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['skrive argumenterende tekster med begrunnede synspunkter'],
  content: [
    {
      id: 'norsk-7-2-1-intro',
      type: 'text',
      content: `## Argumenterende tekster

I en argumenterende tekst prøver du å overbevise leseren om noe. Du fremmer et synspunkt og begrunner hvorfor du mener det du mener. Dette er en viktig ferdighet - enten du skriver leserinnlegg, debatterer eller forklarer en mening.`,
    },
    {
      id: 'norsk-7-2-1-def-oppbygning',
      type: 'definition',
      title: 'Oppbygning av argumenterende tekst',
      content: `**1. Innledning**
- Fang leserens interesse
- Presenter temaet
- Sett fram påstanden/tesen din

**2. Hoveddel**
- Presenter argumentene dine
- Gi begrunnelser og eksempler
- Ta opp motargumenter og tilbakevis dem

**3. Avslutning**
- Oppsummer hovedpoengene
- Gjenta påstanden din
- Kom med en oppfordring eller konklusjon`,
    },
    {
      id: 'norsk-7-2-1-def-argument',
      type: 'definition',
      title: 'Hva er et argument?',
      content: `Et **argument** består av:

**Påstand** - det du mener er sant
*"Skolen bør starte klokken 09:00"*

**Begrunnelse** - hvorfor du mener dette
*"fordi forskning viser at ungdom lærer bedre senere på dagen"*

**Eksempel** - konkret tilfelle som støtter argumentet
*"I en studie fra Sverige presterte elever 15% bedre med sen skolestart"*

**Argumentrekke:**
Påstand + begrunnelse + eksempel = sterkt argument`,
    },
    {
      id: 'norsk-7-2-1-def-typer',
      type: 'definition',
      title: 'Ulike typer argumenter',
      content: `**Fornuftsargument (logos)**
- Bruker fakta, tall og logikk
- *"80% av elevene støtter dette forslaget"*

**Følelsesargument (patos)**
- Appellerer til følelser
- *"Tenk på alle de slitne elevene som sliter med å konsentrere seg"*

**Autoritetsargument (etos)**
- Viser til eksperter
- *"Ifølge søvnforsker Professor Hansen..."*

**Tips:** Bruk gjerne alle typene i teksten din!`,
    },
    {
      id: 'norsk-7-2-1-tip',
      type: 'tip',
      title: 'Tips for god argumentasjon',
      content: `- Start med det sterkeste argumentet
- Bruk overgangsord: "For det første", "Dessuten", "I tillegg"
- Ta motargumenter på alvor før du tilbakeviser dem
- Unngå overdrivelser som svekker troverdigheten
- Avslutt med en tydelig konklusjon`,
    },
    {
      id: 'norsk-7-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Argumenterende avsnitt',
      problem: 'Skriv et argumenterende avsnitt for at elever bør få bruke mobil i friminuttene.',
      solution: `**Påstand:** Elever bør få lov til å bruke mobilen i friminuttene.

**Begrunnelse:** For det første er friminuttet elevenes fritid, og de bør selv få bestemme hvordan de vil bruke den. Dessuten kan mobilen brukes til å holde kontakt med familie eller venner på andre skoler.

**Motargument og tilbakevisning:** Noen mener mobilen gjør elever mindre sosiale. Men mange bruker faktisk mobilen sammen med venner - de ser på videoer, spiller sammen eller deler bilder.

**Konklusjon:** Derfor mener jeg at mobilbruk i friminuttene bør være tillatt, så lenge det ikke forstyrrer undervisningen.`,
    },
    {
      id: 'norsk-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva består et godt argument av?',
        options: [
          { id: 'a', text: 'Påstand, begrunnelse og eksempel', isCorrect: true },
          { id: 'b', text: 'Innledning, hoveddel og avslutning', isCorrect: false },
          { id: 'c', text: 'Spørsmål og svar', isCorrect: false },
          { id: 'd', text: 'Bare en mening', isCorrect: false },
        ],
        solution: 'Et godt argument har en påstand (hva du mener), begrunnelse (hvorfor) og gjerne et eksempel.',
        hints: ['Tenk på hva som gjør at andre tror på deg'],
      },
    },
    {
      id: 'norsk-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: '"Ifølge lege Ola Nordmann er frokost det viktigste måltidet." Hva slags argument er dette?',
        options: [
          { id: 'a', text: 'Fornuftsargument', isCorrect: false },
          { id: 'b', text: 'Følelsesargument', isCorrect: false },
          { id: 'c', text: 'Autoritetsargument', isCorrect: true },
          { id: 'd', text: 'Motargument', isCorrect: false },
        ],
        solution: 'Dette er et autoritetsargument fordi det viser til en ekspert (legen) for å styrke påstanden.',
        hints: ['Hvem uttaler seg her?'],
      },
    },
    {
      id: 'norsk-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre argumenter for hvorfor lekser bør avskaffes. Husk å begrunne hvert argument.',
        solution: 'Eksempel: 1) Elever trenger fritid for å være kreative og aktive. 2) Forskning viser at lekser har liten effekt på læring i barneskolen. 3) Lekser skaper stress for familier.',
        hints: ['Bruk ulike typer argumenter: fakta, følelser, eksperter'],
      },
    },
    {
      id: 'norsk-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det lurt å ta opp motargumenter i teksten din?',
        options: [
          { id: 'a', text: 'For å fylle ut teksten', isCorrect: false },
          { id: 'b', text: 'Det viser at du har tenkt grundig og styrker troverdigheten', isCorrect: true },
          { id: 'c', text: 'For å forvirre leseren', isCorrect: false },
          { id: 'd', text: 'Det er obligatorisk i alle tekster', isCorrect: false },
        ],
        solution: 'Ved å ta opp motargumenter og tilbakevise dem, viser du at du har vurdert saken fra flere sider. Dette gjør argumentasjonen din sterkere.',
        hints: ['Tenk på hva som gjør deg mer overbevisende'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_2_2: TextbookChapter = {
  id: 'norsk-7-2-2',
  courseId: 'norsk-7',
  chapterNumber: '2.2',
  title: 'Kreativ skriving',
  description: 'Skrive noveller og fortellinger med litterære virkemidler.',
  estimatedMinutes: 55,
  exercises: [],
  competenceGoals: ['skrive kreative tekster med litterære virkemidler'],
  content: [
    {
      id: 'norsk-7-2-2-intro',
      type: 'text',
      content: `## Kreativ skriving

I kreativ skriving bruker du fantasien til å skape verdener, personer og historier. Du lærer nå teknikker som gjør fortellingene dine mer levende og engasjerende.`,
    },
    {
      id: 'norsk-7-2-2-def-novelle',
      type: 'definition',
      title: 'Novelleskriving',
      content: `**Kjennetegn på en novelle:**
- Kort fortelling (1-10 sider)
- Få personer
- Konsentrert handling
- Ofte et vendepunkt eller overraskelse
- Hver setning teller!

**Oppbygning:**
1. **Åpning** - Kom rett inn i handlingen
2. **Utvikling** - Bygg opp spenningen
3. **Vendepunkt** - Noe uventet skjer
4. **Avslutning** - Kan være åpen eller lukket`,
    },
    {
      id: 'norsk-7-2-2-def-vis',
      type: 'definition',
      title: 'Vis, ikke fortell',
      content: `**"Show, don't tell"** er en viktig regel:

**Fortelle (svakt):**
*"Maria var redd."*

**Vise (sterkt):**
*"Marias hjerte hamret. Hun presset ryggen mot veggen og kjente hendene skjelve."*

Når du *viser*, lar du leseren selv forstå hva personen føler gjennom handlinger, kroppsspråk og sanseinntrykk.`,
    },
    {
      id: 'norsk-7-2-2-def-spenning',
      type: 'definition',
      title: 'Spenningsoppbygging',
      content: `**Teknikker for å skape spenning:**

**1. Frampek (foreshadowing)**
- Hinte om noe som skal skje
- *"Hun ante ikke at denne dagen skulle forandre alt."*

**2. Korte setninger**
- Øker tempoet
- *"Hun løp. Fort. Raskere."*

**3. Utsettelse**
- Trekk ut øyeblikket
- Beskriv detaljer før noe skjer

**4. Cliffhanger**
- Stopp på det mest spennende
- Få leseren til å ville lese mer`,
    },
    {
      id: 'norsk-7-2-2-tip',
      type: 'tip',
      title: 'Tips for bedre fortellinger',
      content: `- **Start in medias res** - midt i handlingen
- **Bruk dialog** - gir liv til personene
- **Beskriv sansene** - lukt, lyd, smak, syn, følelse
- **Varier setningslengden** - korte for spenning, lange for ro
- **Les høyt** - hører du at det flyter?`,
    },
    {
      id: 'norsk-7-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Spennende åpning',
      problem: 'Skriv en åpning som skaper spenning.',
      solution: `**In medias res (midt i handlingen):**
*Glasset knuste mot gulvet. Emma snudde seg. I døråpningen sto en skikkelse hun aldri hadde sett før.*

**Med frampek:**
*Den natten skulle Emma aldri glemme. Alt begynte med en melding fra et ukjent nummer.*

**Med sansebeskrivelse:**
*Lukten av røyk snek seg under døren. Emma våknet brått. Rommet var fylt av tykk, grå tåke.*`,
    },
    {
      id: 'norsk-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "in medias res"?',
        options: [
          { id: 'a', text: 'Å starte midt i handlingen', isCorrect: true },
          { id: 'b', text: 'Å skrive på latin', isCorrect: false },
          { id: 'c', text: 'Å ha mange personer', isCorrect: false },
          { id: 'd', text: 'Å bruke mange dialoger', isCorrect: false },
        ],
        solution: '"In medias res" er latin og betyr "midt i tingene" - å starte fortellingen midt i handlingen.',
        hints: ['Det handler om hvordan du starter fortellingen'],
      },
    },
    {
      id: 'norsk-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning "viser" følelser i stedet for å "fortelle"?',
        options: [
          { id: 'a', text: '"Han var sint."', isCorrect: false },
          { id: 'b', text: '"Han knyttet nevene og kjente ansiktet bli varmt."', isCorrect: true },
          { id: 'c', text: '"Han følte seg sint og sur."', isCorrect: false },
          { id: 'd', text: '"Han var veldig, veldig sint."', isCorrect: false },
        ],
        solution: 'Den andre setningen "viser" sinne gjennom handlinger (knyttet nevene) og fysiske reaksjoner (ansiktet ble varmt).',
        hints: ['Hvilken setning beskriver hva personen gjør i stedet for å si hva han føler?'],
      },
    },
    {
      id: 'norsk-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om denne setningen ved å "vise" i stedet for å "fortelle": "Sara var veldig glad."',
        solution: 'Eksempel: "Sara hoppet opp og ned. Hun lo høyt og svingte armene i været. Smilet strakte seg fra øre til øre."',
        hints: ['Beskriv hva Sara gjør og hvordan kroppen hennes reagerer'],
      },
    },
    {
      id: 'norsk-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en novelleåpning (3-5 setninger) som starter "in medias res" og bruker sansebeskrivelser.',
        solution: 'Eksempel: "Brannen slikket seg oppover veggene. Lena hostet og krøp langs gulvet der luften fortsatt var klar. Over henne sprakte taket. Varmen brente mot huden. Hun måtte finne veien ut - nå."',
        hints: ['Start midt i en dramatisk situasjon og beskriv lyder, lukter, synsinntrykk'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_2_3: TextbookChapter = {
  id: 'norsk-7-2-3',
  courseId: 'norsk-7',
  chapterNumber: '2.3',
  title: 'Språk og stil',
  description: 'Variere språk og setningsoppbygging.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['variere språk og uttrykksformer i egen skriving'],
  content: [
    {
      id: 'norsk-7-2-3-intro',
      type: 'text',
      content: `## Språk og stil

God skriving handler ikke bare om hva du skriver, men også hvordan du skriver det. Ved å variere språket ditt kan du gjøre tekstene mer interessante og tilpasset ulike situasjoner.`,
    },
    {
      id: 'norsk-7-2-3-def-setningsvar',
      type: 'definition',
      title: 'Setningsvariasjon',
      content: `**Varier setningslengden:**
- **Korte setninger** = fart, spenning, viktige poeng
- **Lange setninger** = detaljer, forklaringer, ro

**Eksempel:**
*"Solen gikk ned bak fjellene og malte himmelen i nyanser av oransje og rosa, mens fuglene fløy mot skogen. Det ble stille. Helt stille."*

**Varier setningsåpningen:**
I stedet for å alltid starte med "Jeg..." eller "Han...", prøv:
- *"Plutselig..."*
- *"Med hjertet i halsen..."*
- *"Uten å nøle..."*
- *"Bak trærne..."*`,
    },
    {
      id: 'norsk-7-2-3-def-ordvalg',
      type: 'definition',
      title: 'Presist ordvalg',
      content: `**Velg presise ord:**
I stedet for "gå", bruk:
- rusle, traske, spankulere, liste, marsjere, trippe

I stedet for "si", bruk:
- hviske, rope, mumle, utbryte, fnise, sukke

I stedet for "glad", bruk:
- lykkelig, henrykt, fornøyd, begeistret, jublende

**Presise ord skaper tydelige bilder!**`,
    },
    {
      id: 'norsk-7-2-3-def-stil',
      type: 'definition',
      title: 'Ulike stiler',
      content: `**Formelt språk:**
- Brukes i saklige tekster, søknader, formelle brev
- Ingen slang, hele setninger, presist
- *"Jeg ønsker med dette å søke om plass på sommerleiren."*

**Uformelt språk:**
- Brukes i personlige tekster, chat, venners brev
- Kan ha forkortelser, slang, muntlige uttrykk
- *"Hei! Gleder meg skikkelig til sommerleiren!"*

**Tilpass stilen til mottakeren og situasjonen!**`,
    },
    {
      id: 'norsk-7-2-3-def-bindingsord',
      type: 'definition',
      title: 'Bindeord og sammenheng',
      content: `**Bindeord skaper flyt i teksten:**

**Tillegg:** dessuten, i tillegg, også, videre
**Motsetning:** men, derimot, likevel, selv om
**Årsak:** fordi, derfor, på grunn av, siden
**Tid:** først, deretter, så, til slutt, mens
**Eksempel:** for eksempel, slik som, blant annet
**Konklusjon:** altså, følgelig, dermed, oppsummert

*"Jeg liker pizza. **Dessuten** er det sunt med grønnsaker. **Derfor** spiser jeg pizza med masse grønnsaker."*`,
    },
    {
      id: 'norsk-7-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Forbedre teksten',
      problem: `Gjør denne teksten bedre ved å variere språket:

"Jeg gikk til skolen. Jeg så en hund. Jeg tenkte at hunden var søt. Jeg gikk videre. Jeg kom til skolen."`,
      solution: `**Forbedret versjon:**
*"På vei til skolen oppdaget jeg en liten, rufsete hund som snuste i gresset. Den så så søt ut med de store, brune øynene. Med et smil fortsatte jeg ned veien, og snart dukket skolebygningen opp mellom trærne."*

**Hva er forbedret:**
- Variert setningsåpning (ikke alle starter med "Jeg")
- Mer beskrivende ord ("rufsete", "store brune øyne")
- Bindeord ("med et smil", "snart")
- Varierende setningslengde`,
    },
    {
      id: 'norsk-7-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord er et mer presist alternativ til "gå"?',
        options: [
          { id: 'a', text: 'Bevege', isCorrect: false },
          { id: 'b', text: 'Rusle', isCorrect: true },
          { id: 'c', text: 'Gjøre', isCorrect: false },
          { id: 'd', text: 'Være', isCorrect: false },
        ],
        solution: '"Rusle" er mer presist fordi det beskriver en bestemt måte å gå på - rolig og avslappet.',
        hints: ['Hvilket ord beskriver en spesiell måte å gå på?'],
      },
    },
    {
      id: 'norsk-7-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken stil passer best i en jobbsøknad?',
        options: [
          { id: 'a', text: 'Uformell med forkortelser og slang', isCorrect: false },
          { id: 'b', text: 'Formell med hele setninger og presist språk', isCorrect: true },
          { id: 'c', text: 'Muntlig med dialektord', isCorrect: false },
          { id: 'd', text: 'Poetisk med mange metaforer', isCorrect: false },
        ],
        solution: 'I en jobbsøknad bruker du formelt språk for å fremstå som profesjonell og seriøs.',
        hints: ['Tenk på hvem som leser teksten'],
      },
    },
    {
      id: 'norsk-7-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om disse setningene med mer variasjon: "Katten satt på trappen. Katten så på meg. Katten mjauet."',
        solution: 'Eksempel: "På trappen satt en oransje katt og stirret på meg med gule øyne. Den mjauet høyt, som om den forventet noe."',
        hints: ['Varier setningsåpning, bruk mer beskrivende ord, bind setningene sammen'],
      },
    },
    {
      id: 'norsk-7-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket bindeord passer best: "Han trente hardt. _____ tapte han kampen."',
        options: [
          { id: 'a', text: 'Dessuten', isCorrect: false },
          { id: 'b', text: 'Likevel', isCorrect: true },
          { id: 'c', text: 'Fordi', isCorrect: false },
          { id: 'd', text: 'Deretter', isCorrect: false },
        ],
        solution: '"Likevel" viser motsetning - selv om han trente hardt, tapte han. Dette er overraskende, så vi trenger et motsetningsord.',
        hints: ['Er det forventet eller overraskende at han tapte?'],
      },
    },
    {
      id: 'norsk-7-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre synonymer til ordet "sa" som viser ulike følelser.',
        solution: 'Eksempel: "hvisket" (hemmelighet/frykt), "ropte" (sinne/begeistring), "sukket" (oppgitthet/tristhet)',
        hints: ['Tenk på ulike måter å snakke på når man er glad, trist, sint osv.'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: GRAMMATIKK
// ============================================================================

export const CHAPTER_NORSK_7_3_1: TextbookChapter = {
  id: 'norsk-7-3-1',
  courseId: 'norsk-7',
  chapterNumber: '3.1',
  title: 'Ordklasser - alle',
  description: 'Repetisjon og utvidelse av alle ordklasser.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['kjenne til og bruke alle ordklassene korrekt'],
  content: [
    {
      id: 'norsk-7-3-1-intro',
      type: 'text',
      content: `## Ordklasser

Ordklasser er grupper av ord som oppfører seg likt grammatisk. På norsk har vi ti ordklasser. I dette kapittelet repeterer vi de du kan fra før og lærer om de nye.`,
    },
    {
      id: 'norsk-7-3-1-def-substantiv',
      type: 'definition',
      title: 'Substantiv',
      content: `**Substantiv** er navn på ting, personer, dyr, steder og begreper.

**Bøying:**
| Ubestemt entall | Bestemt entall | Ubestemt flertall | Bestemt flertall |
|-----------------|----------------|-------------------|------------------|
| en gutt | gutten | gutter | guttene |
| ei jente | jenta | jenter | jentene |
| et hus | huset | hus | husene |

**Test:** Kan du sette "en", "ei" eller "et" foran ordet? Da er det et substantiv.`,
    },
    {
      id: 'norsk-7-3-1-def-verb',
      type: 'definition',
      title: 'Verb',
      content: `**Verb** uttrykker handling eller tilstand.

**Bøying:**

| Infinitiv | Presens | Preteritum | Perfektum |
|-----------|---------|------------|-----------|
| å løpe | løper | løp/løpte | har løpt |
| å spise | spiser | spiste | har spist |
| å være | er | var | har vært |

**Test:** Kan du sette "å" foran ordet? Da er det et verb.`,
    },
    {
      id: 'norsk-7-3-1-def-adjektiv',
      type: 'definition',
      title: 'Adjektiv',
      content: `**Adjektiv** beskriver egenskaper ved substantiv.

**Gradbøying:**
| Positiv | Komparativ | Superlativ |
|---------|------------|------------|
| stor | større | størst |
| pen | penere | penest |
| god | bedre | best |

**Samsvarsbøying:** Adjektivet tilpasses substantivet
- en stor gutt (hankjønn)
- ei stor jente (hunkjønn)
- et stort hus (intetkjønn)
- store gutter (flertall)`,
    },
    {
      id: 'norsk-7-3-1-def-adverb',
      type: 'definition',
      title: 'Adverb',
      content: `**Adverb** beskriver verb, adjektiv eller andre adverb.

**Eksempler:**
- Han løper **fort**. (beskriver verbet "løper")
- Hun er **veldig** pen. (beskriver adjektivet "pen")
- De kom **plutselig**.

**Vanlige adverb:** kanskje, alltid, aldri, ofte, nå, her, der, godt, dårlig

**Tips:** Mange adverb slutter på -t (fort, godt, dårlig → dårligt)`,
    },
    {
      id: 'norsk-7-3-1-def-pronomen',
      type: 'definition',
      title: 'Pronomen',
      content: `**Pronomen** erstatter eller viser til substantiv.

**Personlige pronomen:**
| Subjektsform | Objektsform |
|--------------|-------------|
| jeg | meg |
| du | deg |
| han/hun/hen | ham/henne |
| vi | oss |
| dere | dere |
| de | dem |

**Andre pronomen:**
- Eiendomspronomen: min, din, hans, hennes, vår, deres
- Påpekende: denne, dette, den, det
- Spørrepronomen: hvem, hva, hvilken`,
    },
    {
      id: 'norsk-7-3-1-def-andre',
      type: 'definition',
      title: 'De andre ordklassene',
      content: `**Preposisjoner** - små ord som viser forhold
- på, i, til, fra, med, over, under, bak, foran

**Konjunksjoner** - binder sammen ord/setninger
- og, eller, men, for, så

**Subjunksjoner** - innleder leddsetninger
- at, fordi, hvis, når, da, selv om

**Interjeksjoner** - utrop
- au, hei, oi, æsj, hurra

**Determinativer** - bestemmer substantiv
- den, det, denne, en, ei, et, min, alle, noen`,
    },
    {
      id: 'norsk-7-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Finne ordklasser',
      problem: 'Finn ordklassene i setningen: "Den lille katten jakter ivrig på den røde ballen."',
      solution: `- **Den** - determinativ
- **lille** - adjektiv
- **katten** - substantiv
- **jakter** - verb
- **ivrig** - adverb (eller adjektiv)
- **på** - preposisjon
- **den** - determinativ
- **røde** - adjektiv
- **ballen** - substantiv`,
    },
    {
      id: 'norsk-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken ordklasse hører "plutselig" til?',
        options: [
          { id: 'a', text: 'Substantiv', isCorrect: false },
          { id: 'b', text: 'Verb', isCorrect: false },
          { id: 'c', text: 'Adjektiv', isCorrect: false },
          { id: 'd', text: 'Adverb', isCorrect: true },
        ],
        solution: '"Plutselig" er et adverb som beskriver hvordan noe skjer.',
        hints: ['Besvarer ordet "hvordan?"'],
      },
    },
    {
      id: 'norsk-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken ordklasse er "fordi" i setningen "Jeg er glad fordi solen skinner"?',
        options: [
          { id: 'a', text: 'Konjunksjon', isCorrect: false },
          { id: 'b', text: 'Subjunksjon', isCorrect: true },
          { id: 'c', text: 'Preposisjon', isCorrect: false },
          { id: 'd', text: 'Adverb', isCorrect: false },
        ],
        solution: '"Fordi" er en subjunksjon som innleder en leddsetning (fordi solen skinner).',
        hints: ['Subjunksjoner innleder leddsetninger - setninger som ikke kan stå alene'],
      },
    },
    {
      id: 'norsk-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle ordklassene i setningen: "Vi spiste rask og deilig pizza."',
        solution: 'Vi (pronomen) spiste (verb) rask (adjektiv) og (konjunksjon) deilig (adjektiv) pizza (substantiv).',
        hints: ['Gå gjennom hvert ord systematisk'],
      },
    },
    {
      id: 'norsk-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'I setningen "Han ga henne blomstene sine", hva er ordklassen til "sine"?',
        options: [
          { id: 'a', text: 'Adjektiv', isCorrect: false },
          { id: 'b', text: 'Pronomen (eiendomspronomen)', isCorrect: true },
          { id: 'c', text: 'Determinativ', isCorrect: false },
          { id: 'd', text: 'Adverb', isCorrect: false },
        ],
        solution: '"Sine" er et eiendomspronomen (possessivt pronomen) som viser eierskap og erstatter "hans/hennes".',
        hints: ['Ordet viser hvem som eier noe'],
      },
    },
    {
      id: 'norsk-7-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv én setning som inneholder minst én av hver: substantiv, verb, adjektiv, adverb og preposisjon.',
        solution: 'Eksempel: "Den glade hunden løp fort over plenen." (hunden=substantiv, løp=verb, glade=adjektiv, fort=adverb, over=preposisjon)',
        hints: ['Start med subjekt (substantiv), legg til handling (verb), og bygg ut derfra'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_3_2: TextbookChapter = {
  id: 'norsk-7-3-2',
  courseId: 'norsk-7',
  chapterNumber: '3.2',
  title: 'Setningsanalyse',
  description: 'Finne og forstå setningsledd.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['analysere setninger og finne setningsledd'],
  content: [
    {
      id: 'norsk-7-3-2-intro',
      type: 'text',
      content: `## Setningsanalyse

Setningsanalyse handler om å finne de ulike delene (leddene) i en setning. Dette hjelper deg å forstå hvordan setninger er bygget opp og gjør deg til en bedre skriver.`,
    },
    {
      id: 'norsk-7-3-2-def-subjekt',
      type: 'definition',
      title: 'Subjekt',
      content: `**Subjektet** er den eller det setningen handler om - hvem eller hva som gjør noe.

**Finn subjektet:** Spør "Hvem/hva + verbalet?"

**Eksempler:**
- "**Katten** sover." (Hvem sover? Katten)
- "**Elevene** leser boken." (Hvem leser? Elevene)
- "**Det** regner." (Hva regner? Det - formelt subjekt)

**Subjektet står ofte først i setningen, men ikke alltid!**`,
    },
    {
      id: 'norsk-7-3-2-def-verbal',
      type: 'definition',
      title: 'Verbal',
      content: `**Verbalet** er handlingen eller tilstanden - hva som skjer.

**Finn verbalet:** Det bøyde verbet i setningen.

**Eksempler:**
- "Katten **sover**."
- "Elevene **leser** boken."
- "Han **har spist** frokost." (hjelpeverb + hovedverb)

**Verbalet kan bestå av ett eller flere ord!**`,
    },
    {
      id: 'norsk-7-3-2-def-objekt',
      type: 'definition',
      title: 'Objekt',
      content: `**Objektet** er den eller det som handlingen går ut over.

**Finn objektet:** Spør "Hvem/hva + verbal + subjekt?"

**Direkte objekt:**
- "Hun leser **boken**." (Hva leser hun? Boken)
- "Katten jakter **musen**." (Hva jakter katten? Musen)

**Indirekte objekt:**
- "Hun ga **ham** boken." (Hvem ga hun boken til? Ham)

**Ikke alle setninger har objekt:**
- "Katten sover." (ingen objekt - intransitiv setning)`,
    },
    {
      id: 'norsk-7-3-2-def-adverbial',
      type: 'definition',
      title: 'Adverbial',
      content: `**Adverbialet** gir tilleggsinformasjon om tid, sted, måte eller årsak.

**Finn adverbialet:** Spør "Når? Hvor? Hvordan? Hvorfor?"

**Eksempler:**
- "Hun løper **fort**." (Hvordan? Måtesadverbial)
- "De sover **i teltet**." (Hvor? Stedsadverbial)
- "Vi spiser **kl. 18**." (Når? Tidsadverbial)
- "Han gråt **fordi han var lei seg**." (Hvorfor? Årsaksadverbial)`,
    },
    {
      id: 'norsk-7-3-2-def-analyse',
      type: 'definition',
      title: 'Slik analyserer du',
      content: `**Analyserekke:**
1. Finn verbalet først (det bøyde verbet)
2. Finn subjektet (hvem/hva + verbal?)
3. Finn objektet hvis det finnes (hvem/hva + verbal + subjekt?)
4. Resten er gjerne adverbialer

**Eksempel:** "I går spiste Lars pizza på byen."
- Verbal: spiste
- Subjekt: Lars (Hvem spiste?)
- Objekt: pizza (Hva spiste Lars?)
- Adverbial: i går (Når?), på byen (Hvor?)`,
    },
    {
      id: 'norsk-7-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Fullstendig analyse',
      problem: 'Analyser setningen: "Den lille jenta malte et vakkert bilde i klasserommet."',
      solution: `**Verbal:** malte

**Subjekt:** Den lille jenta
(Hvem malte? Den lille jenta)

**Objekt:** et vakkert bilde
(Hva malte den lille jenta? Et vakkert bilde)

**Adverbial:** i klasserommet
(Hvor malte hun? I klasserommet - stedsadverbial)`,
    },
    {
      id: 'norsk-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er subjektet i setningen "Hunden biter i beinet"?',
        options: [
          { id: 'a', text: 'biter', isCorrect: false },
          { id: 'b', text: 'Hunden', isCorrect: true },
          { id: 'c', text: 'beinet', isCorrect: false },
          { id: 'd', text: 'i beinet', isCorrect: false },
        ],
        solution: 'Subjektet er "Hunden" fordi det er hunden som utfører handlingen (biter).',
        hints: ['Hvem/hva biter?'],
      },
    },
    {
      id: 'norsk-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er objektet i setningen "Sara ga broren sin en is"?',
        options: [
          { id: 'a', text: 'Sara', isCorrect: false },
          { id: 'b', text: 'broren sin', isCorrect: false },
          { id: 'c', text: 'en is', isCorrect: true },
          { id: 'd', text: 'ga', isCorrect: false },
        ],
        solution: '"En is" er det direkte objektet (hva ga Sara?). "Broren sin" er indirekte objekt (til hvem?).',
        hints: ['Hva ga Sara bort?'],
      },
    },
    {
      id: 'norsk-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn subjekt, verbal og objekt i setningen: "Klassen så en spennende film."',
        solution: 'Subjekt: Klassen (Hvem så?), Verbal: så, Objekt: en spennende film (Hva så klassen?)',
        hints: ['Start med å finne verbet, så finn hvem som utfører handlingen'],
      },
    },
    {
      id: 'norsk-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: '"I morgen skal vi reise til Bergen med toget." Hva slags adverbial er "med toget"?',
        options: [
          { id: 'a', text: 'Tidsadverbial', isCorrect: false },
          { id: 'b', text: 'Stedsadverbial', isCorrect: false },
          { id: 'c', text: 'Måtesadverbial', isCorrect: true },
          { id: 'd', text: 'Årsaksadverbial', isCorrect: false },
        ],
        solution: '"Med toget" er et måtesadverbial fordi det svarer på spørsmålet "Hvordan skal vi reise?"',
        hints: ['Hvilket spørsmål svarer "med toget" på?'],
      },
    },
    {
      id: 'norsk-7-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør fullstendig setningsanalyse: "Om sommeren spiser vi ofte is i parken."',
        solution: 'Verbal: spiser, Subjekt: vi (Hvem spiser?), Objekt: is (Hva spiser vi?), Adverbialer: Om sommeren (tidsadverbial), ofte (tidsadverbial), i parken (stedsadverbial)',
        hints: ['Husk å finne alle adverbialene og bestemme hva slags type de er'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: MUNTLIG
// ============================================================================

export const CHAPTER_NORSK_7_4_1: TextbookChapter = {
  id: 'norsk-7-4-1',
  courseId: 'norsk-7',
  chapterNumber: '4.1',
  title: 'Debatt og diskusjon',
  description: 'Delta i debatter med gode argumenter og motargumenter.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['delta aktivt i debatter med velbegrunnede argumenter'],
  content: [
    {
      id: 'norsk-7-4-1-intro',
      type: 'text',
      content: `## Debatt og diskusjon

En debatt er en strukturert diskusjon der ulike synspunkter møtes. Å kunne debattere er en viktig ferdighet - du lærer å tenke kritisk, lytte til andre og uttrykke dine meninger tydelig.`,
    },
    {
      id: 'norsk-7-4-1-def-debatt',
      type: 'definition',
      title: 'Hva er en debatt?',
      content: `**Debatt** er en formell diskusjon der deltakerne argumenterer for eller mot et standpunkt.

**Kjennetegn:**
- To eller flere sider med ulike synspunkter
- Argumenter og motargumenter
- Strukturerte innlegg med tidsbegrensning
- En ordstyrer som leder debatten
- Målet er å overbevise publikum

**Forskjell mellom debatt og krangling:**
- Debatt: saklige argumenter, respekt for andre
- Krangling: personangrep, avbrytelser, uten struktur`,
    },
    {
      id: 'norsk-7-4-1-def-roller',
      type: 'definition',
      title: 'Roller i en debatt',
      content: `**Ordstyrer (moderator)**
- Leder debatten
- Gir ordet til deltakerne
- Passer på tiden
- Holder debatten saklig

**Forslagsstiller/innleder**
- Presenterer påstanden
- Holder innledningsinnlegg

**Debattanter**
- Argumenterer for eller mot
- Svarer på hverandres argumenter

**Publikum**
- Lytter og vurderer argumentene
- Kan stille spørsmål til slutt`,
    },
    {
      id: 'norsk-7-4-1-def-argumentere',
      type: 'definition',
      title: 'Slik argumenterer du i debatt',
      content: `**God debatteknikk:**

**1. Forbered deg**
- Kjenn begge sider av saken
- Ha klare argumenter klare
- Forbered svar på mulige motargumenter

**2. Strukturer innlegget**
- "Jeg mener at..." (påstand)
- "Dette mener jeg fordi..." (begrunnelse)
- "Et eksempel på dette er..." (konkretisering)

**3. Responder på motparten**
- "Du sier at..., men..."
- "Det stemmer at..., likevel..."
- Ikke bare gjenta dine egne argumenter`,
    },
    {
      id: 'norsk-7-4-1-tip',
      type: 'tip',
      title: 'Tips for god debatt',
      content: `- **Lytt aktivt** - noter poenger du kan svare på
- **Hold deg saklig** - angrip argumentet, ikke personen
- **Bruk "jeg mener"** - ta ansvar for egne synspunkter
- **Innrøm gode poenger** - det viser styrke
- **Snakk tydelig** - la alle høre deg
- **Ha øyekontakt** - med publikum og motdebattant`,
    },
    {
      id: 'norsk-7-4-1-warning',
      type: 'warning',
      title: 'Debattfeil du bør unngå',
      content: `**Personangrep:** "Du er dum som mener det!"
*Bør være:* "Argumentet ditt holder ikke fordi..."

**Stråmannsargument:** Forvrenge motpartens argument
*Bør være:* Gjengi motparten korrekt

**Overdrivelser:** "ALLE mener at..."
*Bør være:* "Mange mener at..." eller "Forskning viser..."

**Avbrytelser:** Snakke når andre har ordet
*Bør være:* Vent på tur, noter poenger`,
    },
    {
      id: 'norsk-7-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Debattinnlegg',
      problem: 'Hvordan kan et innlegg i en debatt om lekser se ut?',
      solution: `**Innledning:**
"Jeg mener at lekser bør avskaffes i barneskolen."

**Argument 1:**
"For det første viser forskning at lekser har liten effekt på læring i de laveste klassetrinnene. En studie fra NTNU viste at barn lærer like godt uten lekser."

**Argument 2:**
"For det andre skaper lekser stress for familier. Mange foreldre må hjelpe til, og ikke alle har mulighet til det."

**Svar på motargument:**
"Noen sier at lekser lærer barn disiplin. Men det finnes andre måter å lære disiplin på, som organiserte aktiviteter og ansvar hjemme."

**Avslutning:**
"Derfor mener jeg vi bør la barna lære på skolen og leke hjemme."`,
    },
    {
      id: 'norsk-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er ordstyrers oppgave i en debatt?',
        options: [
          { id: 'a', text: 'Å vinne debatten', isCorrect: false },
          { id: 'b', text: 'Å lede debatten og gi ordet til deltakerne', isCorrect: true },
          { id: 'c', text: 'Å argumentere for den ene siden', isCorrect: false },
          { id: 'd', text: 'Å stille flest mulig spørsmål', isCorrect: false },
        ],
        solution: 'Ordstyreren (moderatoren) leder debatten, gir ordet til deltakerne og passer på at alle holder seg til temaet og tiden.',
        hints: ['Ordstyreren er nøytral og styrer debatten'],
      },
    },
    {
      id: 'norsk-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er et "stråmannsargument"?',
        options: [
          { id: 'a', text: 'Å forvrenge motpartens argument for å lettere tilbakevise det', isCorrect: true },
          { id: 'b', text: 'Å bruke humor i debatten', isCorrect: false },
          { id: 'c', text: 'Å sitere eksperter', isCorrect: false },
          { id: 'd', text: 'Å innrømme at motparten har et poeng', isCorrect: false },
        ],
        solution: 'Et stråmannsargument er å fremstille motpartens synspunkt feilaktig for å lettere kunne angripe det.',
        hints: ['Det handler om å forvrenge hva den andre egentlig mener'],
      },
    },
    {
      id: 'norsk-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv to argumenter FOR og to argumenter MOT at elever bør få velge sine egne sitteplasser i klasserommet.',
        solution: 'FOR: 1) Elevene blir mer motiverte når de sitter med venner. 2) Det lærer dem å ta ansvar for egne valg. MOT: 1) Venner kan distrahere hverandre. 2) Noen elever kan bli utelatt.',
        hints: ['Tenk på fordeler og ulemper for både læring og trivsel'],
      },
    },
    {
      id: 'norsk-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered et 1-minutts debattinnlegg om et valgfritt tema. Ha med påstand, to argumenter og en avslutning.',
        solution: 'Svar vil variere. Sjekk at innlegget har: tydelig påstand, minst to begrunnede argumenter, og en klar avslutning/konklusjon.',
        hints: ['Bruk strukturen: påstand → argumenter med begrunnelse → konklusjon'],
      },
    },
  ],
};

export const CHAPTER_NORSK_7_4_2: TextbookChapter = {
  id: 'norsk-7-4-2',
  courseId: 'norsk-7',
  chapterNumber: '4.2',
  title: 'Presentasjonsteknikk',
  description: 'Holde engasjerende presentasjoner med god struktur og formidling.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['holde presentasjoner med god struktur og tydelig formidling'],
  content: [
    {
      id: 'norsk-7-4-2-intro',
      type: 'text',
      content: `## Presentasjonsteknikk

Å holde en god presentasjon handler om mer enn bare å si noe høyt - det handler om å engasjere publikum, formidle innholdet tydelig og fremstå trygg. Her lærer du teknikkene som gjør deg til en bedre foredragsholder.`,
    },
    {
      id: 'norsk-7-4-2-def-struktur',
      type: 'definition',
      title: 'Strukturer presentasjonen',
      content: `**1. Innledning (fang oppmerksomheten)**
- Start med et spørsmål, en overraskende fakta eller en historie
- Si hva du skal snakke om
- Fortell hvorfor dette er interessant

**2. Hoveddel (fortell innholdet)**
- Del inn i 3-4 hovedpunkter
- Bruk eksempler og illustrasjoner
- Bygg logisk oppover

**3. Avslutning (oppsummer og avlutt sterkt)**
- Gjenta de viktigste poengene
- Avslutt med en tankevekkende setning eller oppfordring
- Takk for oppmerksomheten og åpne for spørsmål`,
    },
    {
      id: 'norsk-7-4-2-def-kroppssprak',
      type: 'definition',
      title: 'Kroppsspråk',
      content: `**Godt kroppsspråk:**
- **Øyekontakt** - se på publikum, ikke på veggen eller notater
- **Stå stødig** - ikke vipp fra fot til fot
- **Bruk hendene** - naturlige bevegelser for å understreke poenger
- **Smil** - du virker vennlig og avslappet
- **Beveg deg** - gå litt rundt, men ikke rastløst

**Unngå:**
- Krysse armene (lukket kroppsspråk)
- Stå med ryggen til publikum
- Fikle med penn, hår eller klær
- Lese alt fra manus`,
    },
    {
      id: 'norsk-7-4-2-def-stemme',
      type: 'definition',
      title: 'Stemmebruk',
      content: `**Bruk stemmen bevisst:**

**Volum** - snakk høyt nok til at alle hører
**Tempo** - varier farten, pause ved viktige poenger
**Tonefall** - ikke vær monoton, bruk liv i stemmen
**Tydelighet** - uttale ordene klart

**Tips:**
- Snakk saktere enn du tror du må
- Ta pauser - det er greit å være stille et øyeblikk
- Pust godt - det roer nervene og gir kraft til stemmen`,
    },
    {
      id: 'norsk-7-4-2-def-visuell',
      type: 'definition',
      title: 'Visuell støtte',
      content: `**PowerPoint/Slides:**
- Lite tekst på hver side (maks 6 punkter)
- Bruk bilder og figurer
- Leselig skrift (stor nok)
- Ikke les opp alt som står der

**Andre visuelle hjelpemidler:**
- Plakater
- Gjenstander å vise frem
- Video-klipp
- Demonstrasjoner

**Husk:** Den visuelle støtten skal støtte deg - ikke erstatte deg!`,
    },
    {
      id: 'norsk-7-4-2-tip',
      type: 'tip',
      title: 'Tips mot nervøsitet',
      content: `- **Øv, øv, øv** - jo bedre du kan stoffet, jo tryggere føler du deg
- **Pust dypt** - roer nervene
- **Snakk med noen før** - det varmer opp stemmen og avleder tankene
- **Tenk positivt** - "Jeg kan dette" i stedet for "Dette går galt"
- **Fokuser på innholdet** - ikke på deg selv
- **Husk:** Publikum vil at du skal lykkes!`,
    },
    {
      id: 'norsk-7-4-2-example-1',
      type: 'example',
      title: 'Eksempel: God åpning',
      problem: 'Du skal holde en presentasjon om klimaendringer. Lag en god åpning.',
      solution: `**Alternativ 1 - Overraskende fakta:**
"Visste dere at de siste ti årene har vært de varmeste som noensinne er målt? I dag skal jeg fortelle dere hvorfor dette skjer og hva vi kan gjøre med det."

**Alternativ 2 - Spørsmål:**
"Hva ville dere gjort hvis hjembyen deres plutselig sto under vann? For millioner av mennesker er dette ikke science fiction - det er en reell trussel på grunn av klimaendringer."

**Alternativ 3 - Personlig historie:**
"I fjor sommer var det så varmt at asfalten smeltet på veien utenfor huset mitt. Da begynte jeg å lure på: Hva skjer egentlig med klimaet vårt?"`,
    },
    {
      id: 'norsk-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et godt tips for bruk av PowerPoint i presentasjoner?',
        options: [
          { id: 'a', text: 'Skriv alt du skal si på slidene', isCorrect: false },
          { id: 'b', text: 'Bruk lite tekst og mer bilder', isCorrect: true },
          { id: 'c', text: 'Les høyt fra slidene', isCorrect: false },
          { id: 'd', text: 'Bruk så mange animasjoner som mulig', isCorrect: false },
        ],
        solution: 'PowerPoint-slides bør ha lite tekst og gjerne bilder. Du skal ikke lese opp alt som står der.',
        hints: ['Slides skal støtte deg, ikke erstatte deg'],
      },
    },
    {
      id: 'norsk-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør du gjøre med blikket ditt under en presentasjon?',
        options: [
          { id: 'a', text: 'Se ned på gulvet', isCorrect: false },
          { id: 'b', text: 'Se på PowerPoint-slidene', isCorrect: false },
          { id: 'c', text: 'Ha øyekontakt med publikum', isCorrect: true },
          { id: 'd', text: 'Se på notatkortene hele tiden', isCorrect: false },
        ],
        solution: 'Øyekontakt med publikum skaper kontakt og viser at du er trygg på stoffet.',
        hints: ['Tenk på hva som gjør at du føler deg sett og hørt'],
      },
    },
    {
      id: 'norsk-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike måter du kan starte en presentasjon om favoritthobbyen din på.',
        solution: 'Eksempel (fotball): 1) Spørsmål: "Hvor mange av dere har sparket en fotball?" 2) Fakta: "Over 4 milliarder mennesker ser på fotball-VM." 3) Personlig: "Jeg husker første gang jeg scoret mål - det var den beste følelsen!"',
        hints: ['Bruk spørsmål, overraskende fakta eller personlig historie'],
      },
    },
    {
      id: 'norsk-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det lurt å variere tempoet når du snakker?',
        options: [
          { id: 'a', text: 'For å forvirre publikum', isCorrect: false },
          { id: 'b', text: 'For å holde oppmerksomheten og fremheve viktige poenger', isCorrect: true },
          { id: 'c', text: 'For å få presentasjonen til å gå raskere', isCorrect: false },
          { id: 'd', text: 'Fordi det er vanskelig å snakke i samme tempo', isCorrect: false },
        ],
        solution: 'Variasjon i tempo holder publikum våkne. Når du senker farten og tar pause, signaliserer du at noe viktig kommer.',
        hints: ['Tenk på hvordan monoton tale påvirker deg som lytter'],
      },
    },
    {
      id: 'norsk-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg en 3-minutters presentasjon om et valgfritt tema. Skriv ned strukturen med stikkord for innledning, 3 hovedpunkter og avslutning.',
        solution: 'Svar vil variere. Sjekk at planen har: engasjerende åpning, tre tydelige hovedpunkter med stikkord, og en avslutning som oppsummerer og avslutter sterkt.',
        hints: ['Husk: fang oppmerksomheten → fortell innholdet → oppsummer og avslutt'],
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const NORSK_7_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Lesing og litteratur
  CHAPTER_NORSK_7_1_1,
  CHAPTER_NORSK_7_1_2,
  CHAPTER_NORSK_7_1_3,
  // Kapittel 2: Skriving
  CHAPTER_NORSK_7_2_1,
  CHAPTER_NORSK_7_2_2,
  CHAPTER_NORSK_7_2_3,
  // Kapittel 3: Grammatikk
  CHAPTER_NORSK_7_3_1,
  CHAPTER_NORSK_7_3_2,
  // Kapittel 4: Muntlig
  CHAPTER_NORSK_7_4_1,
  CHAPTER_NORSK_7_4_2,
];

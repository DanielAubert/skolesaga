/**
 * Norsk VG1 - Del 5: Kapittel 15.1–17.2
 * Grammatikk, rettskriving, flerkulturell litteratur, postkolonial lesning
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_AASEN_NORDMANNEN,
  TEKST_GARBORG_HAUGTUSSA_UTDRAG,
  TEKST_HAMSUN_SULT_AAPNING,
  TEKST_IBSEN_PEER_GYNT_MAROKKO,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 15.1: Setningsanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_15_1: TextbookChapter = {
  id: 'norsk-vg1-15-1',
  courseId: 'norsk-vg1',
  chapterNumber: '8.1',
  title: 'Setningsanalyse',
  description: 'Lær å analysere setninger og identifisere setningsledd.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke grammatisk kunnskap til å analysere og vurdere egen og andres tekst',
    'gjøre rede for setningsoppbygging og bruke dette i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-15-1-intro',
      type: 'text',
      content: `## Setningsanalyse - å forstå hvordan setninger er bygd opp

Setningsanalyse handler om å identifisere de ulike delene (leddene) i en setning og forstå hvordan de fungerer sammen.

**Hvorfor setningsanalyse?**
- Gir deg et språk for å snakke om språk
- Hjelper deg å skrive klarere setninger
- Gjør det lettere å finne feil
- Grunnlag for å lære andre språk
- Viktig på eksamen i norsk

**Hva er et setningsledd?**
Et setningsledd er en del av setningen som har en bestemt funksjon. Hvert ledd svarer på et spørsmål vi kan stille til setningen.

**De viktigste setningsleddene:**
- Verbal (V) - handlingen
- Subjekt (S) - hvem handler
- Objekt (O) - hvem/hva handlingen rammer
- Adverbial (A) - omstendighetene
- Predikativ (P) - beskrivelse av subjekt/objekt

**I dette kapittelet lærer du å identifisere og analysere alle disse leddene.**`,
    },
    {
      id: 'norsk-vg1-15-1-def-1',
      type: 'definition',
      title: 'Verbal (V)',
      content: `**Verbalet er setningens kjerne.**

Verbalet forteller hva som skjer i setningen - handlingen eller tilstanden.

**Hvordan finne verbalet:**
Spør: "Hva skjer?" eller "Hva gjøres?"

**Eksempler:**
- "Lise **leser** en bok." (leser = V)
- "Det **regner** ute." (regner = V)
- "Hun **har jobbet** hele dagen." (har jobbet = V)

**Verbalet kan bestå av flere ord:**
- Hjelpeverb + hovedverb: "har spist", "vil reise", "ble invitert"
- Sammensatt verb: "har blitt gitt"

**Finitt og infinitt verbal:**
- **Finitt:** Bøyd i tid (presens, preteritum): "spiser", "spiste"
- **Infinitt:** Infinitiv eller partisipp: "å spise", "spist"

**Husk:** Enhver fullstendig setning må ha et verbal. Verbalet er obligatorisk.

**Tips:** Finn verbalet først - det gjør det lettere å finne de andre leddene.`,
    },
    {
      id: 'norsk-vg1-15-1-def-2',
      type: 'definition',
      title: 'Subjekt (S)',
      content: `**Subjektet er den eller det som handler eller beskrives.**

Subjektet forteller hvem eller hva setningen handler om.

**Hvordan finne subjektet:**
Spør: "Hvem/hva + verbalet?"

**Eksempler:**
- "**Lise** leser en bok." → Hvem leser? = Lise (S)
- "**Bilen** står i garasjen." → Hva står? = Bilen (S)
- "**Det** regner ute." → Hva regner? = Det (S)

**Subjektet kan være:**
- Substantiv: "Hunden bjeffer."
- Pronomen: "Han kommer."
- Egennavn: "Oslo er Norges hovedstad."
- Setning: "At han kom, overrasket meg."

**Formelt subjekt:**
Noen setninger har "det" som formelt subjekt:
- "Det regner." (hva regner egentlig?)
- "Det er kaldt."
- "Det finnes mange muligheter."

**Samsvarsbøyning:**
Subjektet styrer verbalformen:
- "Jeg **er**" / "Vi **er**"
- "Hun **løper**" / "De **løper**"`,
    },
    {
      id: 'norsk-vg1-15-1-def-3',
      type: 'definition',
      title: 'Objekt (DO og IO)',
      content: `**Objektet er den/det handlingen rammer.**

Vi skiller mellom direkte og indirekte objekt.

**Direkte objekt (DO):**
Spør: "Hvem/hva + verbalet + subjektet?"

**Eksempler på direkte objekt:**
- "Lise leser **en bok**." → Lise leser hva? = en bok (DO)
- "Han kjøpte **en bil**." → Han kjøpte hva? = en bil (DO)
- "Jeg så **henne**." → Jeg så hvem? = henne (DO)

**Indirekte objekt (IO):**
Den som mottar noe. Spør: "Til hvem/for hvem?"

**Eksempler på indirekte objekt:**
- "Hun ga **ham** en gave." → Ga til hvem? = ham (IO)
- "Læreren fortalte **oss** en historie." → Fortalte til hvem? = oss (IO)

**Rekkefølge:**
Normalt kommer IO før DO:
- "Han ga [henne IO] [blomster DO]."

**Ikke alle setninger har objekt:**
- "Solen skinner." (ingen objekt)
- "Hun sover." (ingen objekt)

**Transitive verb** krever objekt: "spise", "se", "lese"
**Intransitive verb** tar ikke objekt: "sove", "le", "gå"`,
    },
    {
      id: 'norsk-vg1-15-1-def-4',
      type: 'definition',
      title: 'Adverbial (A)',
      content: `**Adverbialet forteller om omstendighetene.**

Adverbial gir tilleggsinformasjon om tid, sted, måte, årsak osv.

**Typer adverbial:**

**Tidsadverbial:**
Spør: "Når?"
- "**I går** reiste vi til Bergen."
- "Han kommer **snart**."
- "**Hver dag** trener hun."

**Stedsadverbial:**
Spør: "Hvor?"
- "Boken ligger **på bordet**."
- "De bor **i Oslo**."
- "**Her** er det kaldt."

**Måtesadverbial:**
Spør: "Hvordan?"
- "Hun sang **vakkert**."
- "De arbeidet **hardt**."
- "Han gikk **sakte**."

**Årsaksadverbial:**
Spør: "Hvorfor?"
- "**På grunn av regnet** ble kampen avlyst."
- "De feiret **fordi de vant**."

**Setningsadverbial:**
Modifiserer hele setningen:
- "**Dessverre** kan jeg ikke komme."
- "**Kanskje** har han rett."
- "Hun er **nok** syk."

**En setning kan ha flere adverbialer.**`,
    },
    {
      id: 'norsk-vg1-15-1-def-5',
      type: 'definition',
      title: 'Predikativ (P)',
      content: `**Predikativet beskriver subjektet eller objektet.**

**Subjektspredikativ (SP):**
Beskriver subjektet via kopulaverb (være, bli, virke, synes).

Spør: "Hva er/blir subjektet?"

**Eksempler:**
- "Hun er **lærer**." → Hun = lærer (SP)
- "Maten smaker **godt**." → Maten = godt (SP)
- "Han ble **sur**." → Han = sur (SP)
- "De virker **trøtte**." → De = trøtte (SP)

**Objektspredikativ (OP):**
Beskriver objektet.

**Eksempler:**
- "De kalte ham **feig**." → ham = feig (OP)
- "Vi malte veggen **blå**." → veggen = blå (OP)
- "Hun gjør meg **glad**." → meg = glad (OP)

**Forskjell på predikativ og adverbial:**
- "Han er **rask**." → rask beskriver HAN (predikativ)
- "Han løper **raskt**." → raskt beskriver LØPINGEN (adverbial)

**Kopulaverb:**
Verb som forbinder subjekt og predikativ:
være, bli, virke, synes, føles, lukter, smaker, høres...`,
    },
    {
      id: 'norsk-vg1-15-1-example-1',
      type: 'example',
      title: 'Eksempel: Fullstendig setningsanalyse',
      problem: 'Analyser setningen: "I går ga læreren elevene en vanskelig oppgave på skolen."',
      solution: `**Steg for steg:**

**1. Finn verbalet (V):**
"Hva skjer?" → **ga** (V)

**2. Finn subjektet (S):**
"Hvem ga?" → **læreren** (S)

**3. Finn direkte objekt (DO):**
"Hva ga læreren?" → **en vanskelig oppgave** (DO)

**4. Finn indirekte objekt (IO):**
"Til hvem ga læreren?" → **elevene** (IO)

**5. Finn adverbialene (A):**
"Når?" → **I går** (tidsadverbial)
"Hvor?" → **på skolen** (stedsadverbial)

**Fullstendig analyse:**
| I går | ga | læreren | elevene | en vanskelig oppgave | på skolen |
|-------|-----|---------|---------|---------------------|-----------|
| A (tid) | V | S | IO | DO | A (sted) |

**Setningsskjema:**
Forfelt | V | S | IO | DO | Adverbial
I går | ga | læreren | elevene | en vanskelig oppgave | på skolen`,
    },
    {
      id: 'norsk-vg1-15-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn verbalet i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Katten sover på sofaen."',
            solution: 'sover',
          },
          {
            label: 'b',
            task: '"Hun har alltid elsket musikk."',
            solution: 'har elsket',
          },
          {
            label: 'c',
            task: '"Boken ble skrevet av en berømt forfatter."',
            solution: 'ble skrevet',
          },
          {
            label: 'd',
            task: '"De skulle ha kommet tidligere."',
            solution: 'skulle ha kommet',
          },
        ],
        solution: 'Verbalet kan bestå av ett eller flere ord (hjelpeverb + hovedverb).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn subjekt og eventuelt objekt i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Gutten spiste et eple."',
            solution: 'Subjekt: Gutten. Direkte objekt: et eple.',
          },
          {
            label: 'b',
            task: '"Det regner."',
            solution: 'Subjekt: Det (formelt subjekt). Ingen objekt.',
          },
          {
            label: 'c',
            task: '"Moren ga barnet en is."',
            solution: 'Subjekt: Moren. Indirekte objekt: barnet. Direkte objekt: en is.',
          },
          {
            label: 'd',
            task: '"Solen skinner."',
            solution: 'Subjekt: Solen. Ingen objekt.',
          },
        ],
        hints: ['Spør "hvem/hva + verbalet" for å finne subjekt', 'Spør "hvem/hva + verbalet + subjektet" for objekt'],
        solution: 'Alle setninger har subjekt, men ikke alle har objekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser adverbialer og bestem type (tid, sted, måte):',
        subTasks: [
          {
            label: 'a',
            task: '"I morgen skal vi reise til Paris."',
            solution: 'I morgen = tidsadverbial. Til Paris = stedsadverbial.',
          },
          {
            label: 'b',
            task: '"Hun løp fort gjennom skogen."',
            solution: 'Fort = måtesadverbial. Gjennom skogen = stedsadverbial.',
          },
          {
            label: 'c',
            task: '"Dessverre kan jeg ikke komme i kveld."',
            solution: 'Dessverre = setningsadverbial. I kveld = tidsadverbial.',
          },
        ],
        hints: ['Spør når, hvor, hvordan', 'En setning kan ha flere adverbialer'],
        solution: 'Adverbialer gir tilleggsinformasjon om tid, sted, måte og annet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn predikativet og avgjør om det er subjekts- eller objektspredikativ:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun er lege."',
            solution: 'lege = subjektspredikativ (beskriver subjektet "hun")',
          },
          {
            label: 'b',
            task: '"Maten smaker deilig."',
            solution: 'deilig = subjektspredikativ (beskriver subjektet "maten")',
          },
          {
            label: 'c',
            task: '"De malte huset rødt."',
            solution: 'rødt = objektspredikativ (beskriver objektet "huset")',
          },
          {
            label: 'd',
            task: '"Nyheten gjorde ham trist."',
            solution: 'trist = objektspredikativ (beskriver objektet "ham")',
          },
        ],
        solution: 'Predikativet beskriver enten subjektet (SP) eller objektet (OP).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør fullstendig setningsanalyse av disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Læreren forklarte elevene grammatikken grundig i går."',
            solution: 'Læreren (S) forklarte (V) elevene (IO) grammatikken (DO) grundig (A-måte) i går (A-tid).',
          },
          {
            label: 'b',
            task: '"Den gamle mannen satt stille på benken hele dagen."',
            solution: 'Den gamle mannen (S) satt (V) stille (A-måte) på benken (A-sted) hele dagen (A-tid).',
          },
          {
            label: 'c',
            task: '"Regjeringen ga kommunene mer penger i statsbudsjettet."',
            solution: 'Regjeringen (S) ga (V) kommunene (IO) mer penger (DO) i statsbudsjettet (A-sted/kontekst).',
          },
        ],
        hints: ['Start med verbalet', 'Gå systematisk gjennom ledd for ledd'],
        solution: 'Fullstendig setningsanalyse identifiserer alle leddene og deres funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er verbalet i setningen "Hun har alltid likt å lese bøker"?',
        options: [
          'har likt',
          'å lese',
          'har alltid likt',
          'likt å lese',
        ],
        answer: 0,
        solution: 'Verbalet er "har likt" - hjelpeverbet "har" pluss hovedverbet "likt". "å lese bøker" er objekt (infinitivsfrase).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setningsledd-type svarer på spørsmålet "Hvem/hva + verbalet?"',
        options: [
          'Subjekt',
          'Objekt',
          'Adverbial',
          'Predikativ',
        ],
        answer: 0,
        solution: 'Subjektet finner vi ved å spørre "Hvem/hva + verbalet?", for eksempel "Hvem leser?" → "Lise" (S).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et setningsskjema (forfelt, verbal, midtfelt, sluttfelt) for disse setningene og plasser alle leddene riktig:',
        subTasks: [
          {
            label: 'a',
            task: '"I dag har elevene jobbet godt med grammatikk."',
            solution: 'Forfelt: I dag | V: har jobbet | S: elevene | A-måte: godt | A: med grammatikk.',
          },
          {
            label: 'b',
            task: '"Kanskje vil læreren gi oss en prøve i morgen."',
            solution: 'Forfelt: Kanskje | V: vil gi | S: læreren | IO: oss | DO: en prøve | A-tid: i morgen.',
          },
        ],
        hints: ['Forfeltet er det som står før det finitte verbalet', 'I norsk står det finitte verbalet alltid på andreplass i hovedsetninger (V2)'],
        solution: 'Norsk følger V2-regelen: det finitte verbalet står alltid på andreplass i fortellende hovedsetninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom leddsetninger og hovedsetninger, og analyser disse eksemplene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg vet at han kommer." - Hva er hovedsetningen og hva er leddsetningen?',
            solution: 'Hovedsetning: "Jeg vet". Leddsetning: "at han kommer" (fungerer som direkte objekt).',
          },
          {
            label: 'b',
            task: '"Da vi kom hjem, var det mørkt." - Bestem setningstype og funksjon.',
            solution: 'Leddsetning: "Da vi kom hjem" (adverbial, tid). Hovedsetning: "var det mørkt".',
          },
        ],
        hints: ['Leddsetninger innledes ofte av subjunksjoner', 'En leddsetning kan fungere som et setningsledd'],
        solution: 'Hovedsetninger kan stå alene, mens leddsetninger er underordnet og fungerer som ledd i hovedsetningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en grammatisk analyse (300-400 ord) av et avsnitt fra en roman eller novelle du har lest. Analyser setningslengde, setningstyper og bruk av ulike setningsledd.',
        hints: ['Velg et avsnitt med variasjon i setningsstruktur', 'Kommenter forholdet mellom grammatikk og stil', 'Bruk fagbegreper fra kapittelet systematisk'],
        solution: 'Analysen skal vise evne til å koble grammatiske observasjoner med stilistiske effekter, og bruke fagterminologien presist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv fem setninger med ulik kompleksitet (fra enkel til sammensatt) og gjør fullstendig setningsanalyse av hver. Den siste setningen skal inneholde minst én leddsetning, et indirekte objekt og to adverbialer.',
        hints: ['Øk kompleksiteten gradvis', 'Bruk alle setningsleddene du har lært', 'Vis at du behersker både enkle og komplekse setningsstrukturer'],
        solution: 'Besvarelsen bør vise progresjon fra enkel (S-V) til kompleks (med leddsetninger og flere adverbialer), med korrekt analyse av alle ledd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.2: Tekstbinding
// ============================================================================

export const CHAPTER_NORSK_VG1_15_2: TextbookChapter = {
  id: 'norsk-vg1-15-2',
  courseId: 'norsk-vg1',
  chapterNumber: '8.2',
  title: 'Tekstbinding',
  description: 'Lær hvordan tekster henger sammen gjennom ulike bindeteknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke grammatisk kunnskap til å skape sammenheng i tekst',
    'vurdere og forbedre tekstbinding i egen og andres tekst',
  ],
  content: [
    {
      id: 'norsk-vg1-15-2-intro',
      type: 'text',
      content: `## Tekstbinding - å skape sammenheng

En tekst er mer enn en samling setninger. For at teksten skal fungere godt, må setningene henge sammen på en logisk og tydelig måte. Dette kalles tekstbinding eller kohesjon.

**Hva er tekstbinding?**
Tekstbinding er teknikkene vi bruker for å skape sammenheng mellom setninger og avsnitt.

**Hvorfor er tekstbinding viktig?**
- Gjør teksten lettere å lese
- Viser hvordan ideer henger sammen
- Hjelper leseren følge tankegangen
- Gir teksten flyt
- Viser at du behersker språket

**Hovedtyper tekstbinding:**
1. **Konjunksjoner og subjunksjoner** - bindeord
2. **Referentbinding** - å vise tilbake/fremover
3. **Tematisk binding** - å holde fokus
4. **Leksikalsk binding** - ord som henger sammen

**God tekstbinding = god tekst. Svak tekstbinding = forvirrende tekst.**`,
    },
    {
      id: 'norsk-vg1-15-2-def-1',
      type: 'definition',
      title: 'Konjunksjoner',
      content: `**Konjunksjoner binder sammen likeverdige setningsledd.**

Konjunksjoner (sideordnende bindeord) forbinder ord, fraser eller setninger som er på samme nivå.

**Vanlige konjunksjoner og deres funksjon:**

**Additive (legger til):**
- **og**: "Hun leste og skrev."
- **både...og**: "Både Per og Kari kom."
- **dessuten**: "Han er smart. Dessuten er han snill."
- **også**: "Jeg kommer. Per kommer også."

**Adversative (motsetning):**
- **men**: "Han er ung, men erfaren."
- **ellers**: "Skynd deg, ellers kommer vi for sent."
- **likevel**: "Det regnet. Likevel gikk vi ut."
- **derimot**: "Hun er utadvendt. Han er derimot introvert."

**Alternative:**
- **eller**: "Vil du ha te eller kaffe?"
- **enten...eller**: "Enten vinner vi, eller så taper vi."

**Kausale (årsak):**
- **for**: "Vi ble hjemme, for det regnet."

**Husk:** Konjunksjoner påvirker ikke ordstillingen i setningen.`,
    },
    {
      id: 'norsk-vg1-15-2-def-2',
      type: 'definition',
      title: 'Subjunksjoner',
      content: `**Subjunksjoner innleder leddsetninger.**

Subjunksjoner (underordnende bindeord) innleder setninger som er underordnet hovedsetningen.

**Vanlige subjunksjoner:**

**Tid:**
- **da**: "Da jeg kom hjem, var han der."
- **når**: "Når det regner, blir hun våt."
- **mens**: "Jeg leste mens han sov."
- **etter at**: "Etter at hun dro, ble det stille."
- **før**: "Før du går, må du rydde."

**Årsak:**
- **fordi**: "Jeg gråt fordi jeg var trist."
- **siden**: "Siden du spør, skal jeg svare."
- **ettersom**: "Ettersom det regner, tar vi buss."

**Betingelse:**
- **hvis/dersom**: "Hvis du kommer, blir jeg glad."
- **med mindre**: "Med mindre du slutter, blir det bråk."

**Innrømmelse:**
- **selv om**: "Selv om han var syk, kom han."
- **til tross for at**: "Til tross for at det regnet..."

**Hensikt:**
- **for at**: "Jeg trener for at jeg skal bli sterk."
- **slik at**: "Snakk høyere slik at alle hører."

**At-setninger:**
- **at**: "Jeg vet at du har rett."`,
    },
    {
      id: 'norsk-vg1-15-2-def-3',
      type: 'definition',
      title: 'Referentbinding',
      content: `**Referentbinding viser til noe som er nevnt før eller kommer etterpå.**

**Pronomen:**
Den vanligste formen for referentbinding.

"**Per** kom sent. **Han** hadde sovet."
→ "Han" viser tilbake til "Per"

**Typer pronomenbinding:**
- Personlige: han, hun, de, den, det
- Demonstrative: dette, disse, den der
- Possessive: hans, hennes, sin, sitt

**Synonymer og overbegreper:**
"**Katten** løp over veien. **Dyret** var redd."
→ "Dyret" er overbegrep for "katten"

**Parafrasering:**
"**Oslo** vokser. **Hovedstaden** trenger flere boliger."
→ "Hovedstaden" er alternativ betegnelse

**Ellipse (utelatelse):**
"Per liker fotball. Kari [liker] tennis."
→ Verbet er underforstått

**Feil å unngå:**
- Uklar referanse: "Per og Ole kom. Han var sur." (Hvem?)
- For lang avstand: Pronomen langt fra det det viser til
- Inkonsekvent: Bytte mellom "du" og "man"`,
    },
    {
      id: 'norsk-vg1-15-2-def-4',
      type: 'definition',
      title: 'Tematisk binding',
      content: `**Tematisk binding handler om å holde fokus i teksten.**

**Tema og rema:**
- **Tema**: Det setningen handler om (ofte kjent informasjon)
- **Rema**: Ny informasjon om temaet

"**Per** [tema] kom i går [rema]."
"**Han** [tema] hadde vært på reise [rema]."

**Tematisk progresjon:**
Hvordan teksten utvikler seg fra kjent til ny informasjon.

**Type 1: Konstant tema**
Samme tema gjentas:
- "Hunden løp. Den bjeffet. Den var sulten."
→ Passer for å holde fokus på én ting

**Type 2: Lineær progresjon**
Ny informasjon blir tema i neste setning:
- "Per møtte en mann. Mannen ga ham en bok. Boken handlet om historie."
→ Passer for fortellinger og forklaringer

**Type 3: Overordnet tema**
Flere undertemaer under ett hovedtema:
- "Byen har mye å by på. Museer er gratis. Parkene er vakre. Restaurantene er gode."
→ Passer for beskrivelser og opplistinger

**Tips:** Vær bevisst på hva som er tema i setningene dine. Det hjelper leseren å følge med.`,
    },
    {
      id: 'norsk-vg1-15-2-def-5',
      type: 'definition',
      title: 'Leksikalsk binding',
      content: `**Leksikalsk binding bruker ordvalg for å skape sammenheng.**

**Gjentagelse:**
Samme ord gjentas:
- "Miljøet er truet. Miljøet trenger beskyttelse."
→ Enkel og tydelig, men kan bli monotont

**Synonymer:**
Ord med lignende betydning:
- "Bilen er gammel. Kjøretøyet trenger reparasjon."
→ Variasjon og flyt

**Antonymer:**
Motsetninger:
- "Noen er rike, andre er fattige."
→ Kontrasterer og fremhever

**Kollokasjon:**
Ord som ofte opptrer sammen:
- "Doktor - pasient - sykehus - behandling"
- "Skole - elev - lærer - undervisning"
→ Skaper et semantisk felt

**Ordkjeder:**
Serier av relaterte ord gjennom teksten:
"Klimaet endrer seg. Temperaturen stiger. Isen smelter. Havet stiger."
→ Alle ordene hører til samme tema

**Tips:** Varier ordbruken for å unngå gjentagelser, men behold klarhet. For faglige tekster kan gjentagelse være klargjørende.`,
    },
    {
      id: 'norsk-vg1-15-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av tekstbinding',
      problem: 'Analyser tekstbindingen i dette avsnittet:\n\n"Klimaendringene er vår tids største utfordring. De truer livet på jorda. Derfor må vi handle nå. Hvis vi ikke reduserer utslippene, vil konsekvensene bli katastrofale."',
      solution: `**Analyse av tekstbinding:**

**Setning 1 → 2:**
- **Referentbinding:** "De" viser tilbake til "Klimaendringene"
- **Leksikalsk:** "truer livet" relaterer til "utfordring"

**Setning 2 → 3:**
- **Konjunksjon:** "Derfor" viser årsak-virkning
- **Tematisk:** Konsekvensen av trusselen → handling

**Setning 3 → 4:**
- **Subjunksjon:** "Hvis" innleder betingelse
- **Leksikalsk:** "handle" og "reduserer utslippene" hører sammen tematisk

**Tematisk progresjon:**
Teksten holder fokus på klima hele veien:
klimaendringer → trussel → handling → utslipp → konsekvenser

**Vurdering:**
Avsnittet har god tekstbinding:
- Klare logiske forbindelser
- Tydelige referanser
- Konsekvent tema
- Variasjon i bindemetoder`,
    },
    {
      id: 'norsk-vg1-15-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser konjunksjoner og subjunksjoner og bestem typen:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun kom sent fordi bussen var forsinket."',
            solution: 'fordi = subjunksjon (årsak)',
          },
          {
            label: 'b',
            task: '"Jeg liker kaffe, men foretrekker te."',
            solution: 'men = konjunksjon (motsetning/adversativ)',
          },
          {
            label: 'c',
            task: '"Hvis du øver, blir du bedre."',
            solution: 'Hvis = subjunksjon (betingelse)',
          },
          {
            label: 'd',
            task: '"Han leste både avisen og boken."',
            solution: 'både...og = konjunksjon (additiv)',
          },
        ],
        solution: 'Konjunksjoner binder likeverdige ledd, subjunksjoner innleder leddsetninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn referansene og avgjør hva de viser til:',
        subTasks: [
          {
            label: 'a',
            task: '"Lise kjøpte en bok. Den var spennende."',
            solution: '"Den" viser til "en bok".',
          },
          {
            label: 'b',
            task: '"Per og Ole spilte fotball. Etterpå var de slitne."',
            solution: '"de" viser til "Per og Ole".',
          },
          {
            label: 'c',
            task: '"Regjeringen la fram budsjettet. Dette skapte debatt."',
            solution: '"Dette" viser til at regjeringen la fram budsjettet (hele setningen).',
          },
        ],
        hints: ['Se på pronomenene', 'Hva kommer rett før?'],
        solution: 'Referentbinding bruker pronomen og demonstrativer for å vise tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forbedre tekstbindingen i dette avsnittet:',
        subTasks: [
          {
            label: 'a',
            task: 'Les og vurder: "Skolen vår er gammel. Skolen har dårlige vinduer. Skolen trenger renovering. Kommunen har ikke penger."',
            solution: 'Svak tekstbinding: Monoton gjentagelse av "Skolen", brå overgang til "Kommunen".',
          },
          {
            label: 'b',
            task: 'Skriv avsnittet på nytt med bedre tekstbinding.',
            solution: 'Eksempel: "Skolen vår er gammel og har dårlige vinduer. Den trenger derfor renovering. Dessverre har kommunen ikke penger til dette."',
          },
        ],
        hints: ['Bruk pronomen i stedet for gjentagelse', 'Legg til bindeord som viser sammenheng'],
        solution: 'God tekstbinding krever variasjon og tydelige logiske forbindelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn passende bindeord:',
        subTasks: [
          {
            label: 'a',
            task: '"Det regnet kraftig. ___ ble kampen avlyst."',
            solution: 'Derfor / Følgelig / Dermed',
          },
          {
            label: 'b',
            task: '"Hun trente hardt, ___ hun tapte kampen."',
            solution: 'men / likevel',
          },
          {
            label: 'c',
            task: '"___ du studerer, vil du bestå eksamen."',
            solution: 'Hvis / Dersom',
          },
          {
            label: 'd',
            task: '"Han var sulten. ___ spiste han en stor middag."',
            solution: 'Derfor / Så',
          },
        ],
        hints: ['Tenk på logisk sammenheng', 'Prøv ulike alternativer'],
        solution: 'Riktig bindeord viser den logiske sammenhengen mellom setningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et avsnitt (5-6 setninger) om et selvvalgt tema. Bruk minst tre ulike typer tekstbinding.',
        hints: ['Bruk konjunksjoner/subjunksjoner', 'Bruk pronomen for referanse', 'Hold tematisk fokus', 'Varier ordbruken'],
        solution: 'Avsnittet bør vise bevisst bruk av ulike bindemetoder som skaper god sammenheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva slags bindeord er "fordi"?',
        options: [
          'Subjunksjon (årsak)',
          'Konjunksjon (additiv)',
          'Konjunksjon (adversativ)',
          'Subjunksjon (betingelse)',
        ],
        answer: 0,
        solution: '"Fordi" er en subjunksjon som innleder en årsakssetning (leddsetning). Den viser hvorfor noe skjer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er referentbinding?',
        options: [
          'Å bruke pronomen eller synonymer for å vise tilbake til noe nevnt tidligere',
          'Å gjenta samme ord i hver setning',
          'Å bruke komma mellom setninger',
          'Å skrive lange avsnitt uten punktum',
        ],
        answer: 0,
        solution: 'Referentbinding bruker pronomen, synonymer eller overbegreper for å vise tilbake til noe som allerede er nevnt i teksten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser den tematiske progresjonen i dette avsnittet og bestem hvilken type det er (konstant tema, lineær progresjon eller overordnet tema):\n\n"Norge er et langstrakt land. Landet strekker seg fra Lindesnes i sør til Nordkapp i nord. Det har en kystlinje på over 25 000 kilometer. Fjordene er blant de mest kjente landskapstrekkene."',
        hints: ['Hva er tema i hver setning?', 'Hvordan utvikler teksten seg?'],
        solution: 'Konstant tema: Norge/landet er tema gjennom hele avsnittet. Referentbinding via "Landet", "Det" og "Fjordene" (del av Norge).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre korte avsnitt (2-3 setninger hver) som viser de tre typene tematisk progresjon: konstant tema, lineær progresjon og overordnet tema.',
        hints: ['Konstant: samme subjekt i alle setninger', 'Lineær: ny info i én setning blir tema i neste', 'Overordnet: flere aspekter av ett hovedtema'],
        solution: 'Hvert avsnitt bør tydelig vise den aktuelle typen tematisk progresjon med bevisst bruk av referentbinding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en avisartikkel eller et essay og gjør en fullstendig analyse av tekstbindingen. Identifiser konjunksjoner, subjunksjoner, referentbinding, tematisk binding og leksikalsk binding. Vurder kvaliteten på tekstbindingen.',
        hints: ['Gå systematisk gjennom avsnitt for avsnitt', 'Marker bindeordene', 'Følg referansekjedene', 'Vurder helhetsinntrykket'],
        solution: 'Analysen skal demonstrere evne til å identifisere og vurdere alle typer tekstbinding i en autentisk tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-15-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-15-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to versjoner av et avsnitt (150-200 ord) om samme tema: én med bevisst god tekstbinding og én med bevisst dårlig tekstbinding. Forklar forskjellene i en kort kommentar.',
        hints: ['God: varier bindemetoder, bruk pronomen, hold tematisk fokus', 'Dårlig: gjenta ord, mangler bindeord, hopp mellom temaer', 'Kommentaren bør peke på konkrete forskjeller'],
        solution: 'Besvarelsen viser forståelse for tekstbinding ved å kontrastere god og dårlig praksis, og forklare hva som gjør forskjellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16.1: Rettskriving bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_16_1: TextbookChapter = {
  id: 'norsk-vg1-16-1',
  courseId: 'norsk-vg1',
  chapterNumber: '8.3',
  title: 'Rettskriving bokmål',
  description: 'Lær regler for rettskriving på bokmål med fokus på vanlige feil.',
  estimatedMinutes: 50,
  competenceGoals: [
    'mestre rettskriving og formverk på bokmål',
    'bruke grammatisk kunnskap i egen skriving',
  ],
  content: [
    {
      id: 'norsk-vg1-16-1-intro',
      type: 'text',
      content: `## Rettskriving på bokmål

Rettskriving handler om å skrive ordene riktig i henhold til gjeldende normer. God rettskriving gjør teksten lettere å lese og gir et profesjonelt inntrykk.

**Hvorfor rettskriving er viktig:**
- Gjør teksten lettere å forstå
- Viser respekt for leseren
- Gir godt inntrykk på eksamen og jobbsøknader
- Er del av vurderingskriteriene i norsk

**Bokmålets valgfrihet:**
Bokmål har mange valgfrie former. Du kan velge mellom ulike skrivemåter, men du bør være konsekvent i samme tekst.

**Hjelpemidler:**
- Ordbøker (Bokmålsordboka - ordbok.uib.no)
- Rettskrivningsprogrammer
- Språkrådets nettsider

**I dette kapittelet lærer du:**
- Valgfrie former i bokmål
- De vanligste rettskrivingsfeilene
- Tegnsettingsregler
- Hvordan bli en bedre rettskriver`,
    },
    {
      id: 'norsk-vg1-16-1-def-1',
      type: 'definition',
      title: 'Valgfrie former i bokmål',
      content: `**Bokmål har stor valgfrihet. Her er de viktigste:**

**Substantiv - bestemt form flertall:**
- bøkene/bøker, hestene/hester, visene/viser
- -ene eller -er (mange hunkjønnsord og svake hankjønnsord)

**Hunkjønn - valgfritt:**
- ei/en bok, ei/en jente, ei/en dør
- Du kan velge om du bruker hunkjønn eller ikke
- Hvis du bruker hunkjønn: boka, jenta, døra
- Hvis du bruker hankjønn: boken, jenten, døren

**Fortid av verb (preteritum):**
- kastet/kasta, hoppet/hoppa, snakket/snakka
- -et eller -a for svake verb

**Perfektum partisipp:**
- har kastet/kasta, har snakket/snakka

**Infinitiv:**
- å kaste/å kasta, å være/å være
- De fleste holder seg til -e

**Viktig regel:**
**Vær konsekvent i samme tekst!**
Velg EN stil og hold deg til den:
- Enten: boka, jenta, kasta, hoppa (a-endelser)
- Eller: boken, jenten, kastet, hoppet (konservativt)

**Tips:** Finn din stil og vær konsekvent.`,
    },
    {
      id: 'norsk-vg1-16-1-def-2',
      type: 'definition',
      title: 'Vanlige rettskrivingsfeil',
      content: `**De vanligste feilene på bokmål:**

**1. Feil i dobbeltkonsonant:**
- ✗ takk → ✓ tak (verb: å ta)
- ✗ har kommet → ✓ har kommet (riktig)
- ✗ han sat → ✓ han satt
- Regel: Kort vokal = dobbelt konsonant

**2. Sammenskriving vs. særskriving:**
- ✗ is krem → ✓ iskrem
- ✗ fotball kamp → ✓ fotballkamp
- ✗ idag → ✓ i dag
- ✗ tilslutt → ✓ til slutt
- Sammensatte substantiv = ett ord
- Adverbiale uttrykk = ofte to ord

**3. Da/når-feil:**
- ✗ "Når jeg var liten..." → ✓ "Da jeg var liten..."
- Da = fortid, engangshendelse
- Når = nåtid/fremtid, gjentakelse

**4. De/dem:**
- De = subjekt ("De kom")
- Dem = objekt ("Jeg så dem")
- Test: Bytt ut med "vi/oss"

**5. Sin/si/sitt vs. hans/hennes:**
- "Per vasket bilen sin" (Per sin bil)
- "Per vasket bilen hans" (en annens bil)

**6. Og/å:**
- og = konjunksjon (eple og pære)
- å = infinitivsmerke (å gå)`,
    },
    {
      id: 'norsk-vg1-16-1-def-3',
      type: 'definition',
      title: 'Flere vanlige feil',
      content: `**Flere feil å unngå:**

**7. Ikke/ikkje:**
På bokmål: alltid "ikke" (ikkje er nynorsk)

**8. Hvilket/hvilken:**
- Hvilket = intetkjønn ("Hvilket hus?")
- Hvilken = hankjønn/hunkjønn ("Hvilken bok?")

**9. Feil i verb:**
- ✗ jeg synger → ✓ jeg synger
- ✗ jeg skriver → ✓ jeg skriver
- Husk samsvar: jeg er, han er, vi er

**10. Stor/liten bokstav:**
- Små: mandag, januar, norsk (språk), kristendom
- Store: Per, Oslo, Stortinget, Gud (gudsnavn)

**11. Apostrof:**
- ✗ Per's bil → ✓ Pers bil
- Norsk bruker ikke apostrof i genitiv
- Unntak: Når navnet slutter på s: "Hans' bil" eller "til Hans"

**12. Preposisjoner:**
- interessert i (ikke "interessert av")
- forskjellig fra (ikke "forskjellig enn")
- gift med (ikke "gift til")

**13. Det/de:**
- Det = entall, intetkjønn ("Det er fint")
- De = flertall ("De er fine")

**Bruk ordboka når du er usikker!**`,
    },
    {
      id: 'norsk-vg1-16-1-def-4',
      type: 'definition',
      title: 'Tegnsetting',
      content: `**Regler for tegnsetting på bokmål:**

**Komma:**
Komma brukes:
- Mellom helsetninger med konjunksjon: "Han kom, og hun gikk."
- Etter leddsetning først: "Da han kom, gikk hun."
- Ved innskudd: "Boken, som var rød, lå der."
- Ved tiltale: "Per, kom hit!"
- I oppramsinger: "epler, pærer og bananer"

Komma brukes IKKE:
- Mellom subjekt og verbal: ✗ "Per, kom."
- Før "at" (vanligvis): "Jeg vet at du kommer."

**Punktum:**
- Etter fullstendige setninger
- I forkortelser: f.eks., bl.a., osv.

**Kolon:**
- Før oppramsingsledd: "Han kjøpte: epler, pærer og melk."
- Før forklaring: "Resultatet var klart: vi tapte."
- Ved klokken: kl. 14:30

**Semikolon:**
- Mellom nært beslektede setninger
- "Hun er student; han er lærer."
- Sjeldent brukt

**Anførselstegn:**
- Ved sitater: Hun sa: "Jeg kommer."
- «Gåseøyne» eller "engelske"

**Tankestrek:**
- Ved innskudd: Boken – den røde – var fin.
- Lengre enn bindestrek (–)`,
    },
    {
      id: 'norsk-vg1-16-1-example-1',
      type: 'example',
      title: 'Eksempel: Retting av tekst',
      problem: 'Finn og rett feilene i denne teksten:\n\n"Når jeg var liten likte jeg og lese bøker. Per\'s favoritt var detektiv historier, og dem var spennenede. Idag leser jeg fremdeles mye men det er vanskelig og finne tid."',
      solution: `**Feil og rettinger:**

1. "Når jeg var liten" → **"Da jeg var liten"**
   - "Da" for fortid, engangshendelse

2. "og lese" → **"å lese"**
   - Infinitivsmerke, ikke konjunksjon

3. "Per's" → **"Pers"**
   - Ingen apostrof i norsk genitiv

4. "detektiv historier" → **"detektivhistorier"**
   - Sammenskriving

5. "dem var" → **"de var"**
   - "De" som subjekt

6. "spennenede" → **"spennende"**
   - Skrivefeil

7. "Idag" → **"I dag"**
   - To ord

8. "og finne" → **"å finne"**
   - Infinitivsmerke

**Rettet tekst:**
"Da jeg var liten, likte jeg å lese bøker. Pers favoritt var detektivhistorier, og de var spennende. I dag leser jeg fremdeles mye, men det er vanskelig å finne tid."`,
    },
    {
      id: 'norsk-vg1-16-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig form:',
        subTasks: [
          {
            label: 'a',
            task: '"(Da/Når) jeg var ti år, flyttet vi til Bergen."',
            solution: 'Da - fortid, engangshendelse',
          },
          {
            label: 'b',
            task: '"Jeg liker (og/å) svømme."',
            solution: 'å - infinitivsmerke',
          },
          {
            label: 'c',
            task: '"(De/Dem) kom tidlig."',
            solution: 'De - subjekt',
          },
          {
            label: 'd',
            task: '"Jeg så (de/dem) i går."',
            solution: 'dem - objekt',
          },
        ],
        solution: 'Riktig ordvalg avhenger av grammatisk funksjon og kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett opp særskrivingsfeilene:',
        subTasks: [
          {
            label: 'a',
            task: '"Fotball kampen ble avlyst."',
            solution: 'Fotballkampen - sammensatt ord',
          },
          {
            label: 'b',
            task: '"Jeg kjøpte en is krem."',
            solution: 'iskrem - sammensatt ord',
          },
          {
            label: 'c',
            task: '"Skole sekken var tung."',
            solution: 'Skolesekken - sammensatt ord',
          },
          {
            label: 'd',
            task: '"Vi møttes iforveien."',
            solution: 'i forveien - to ord',
          },
        ],
        hints: ['Sammensatte substantiv skrives i ett ord', 'Adverb og preposisjonsuttrykk kan være to ord'],
        solution: 'Særskriving av sammensatte ord er en vanlig feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn riktig tegn (komma, punktum, kolon):',
        subTasks: [
          {
            label: 'a',
            task: '"Han kom _ og hun gikk"',
            solution: '"Han kom, og hun gikk." - komma før og når to helsetninger',
          },
          {
            label: 'b',
            task: '"Da han kom _ gikk hun"',
            solution: '"Da han kom, gikk hun." - komma etter leddsetning først',
          },
          {
            label: 'c',
            task: '"Vi trenger _ melk brød og ost"',
            solution: '"Vi trenger: melk, brød og ost." - kolon før oppramsing',
          },
        ],
        hints: ['Komma mellom helsetninger med konjunksjon', 'Komma etter leddsetning først'],
        solution: 'Tegnsetting følger grammatiske regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn og rett feilene i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Ole\'s hund løpte over veien."',
            solution: '"Oles hund løp over veien." (apostrof + preteritum av løpe)',
          },
          {
            label: 'b',
            task: '"Når jeg kommer hjem, skal jeg og spise."',
            solution: '"Når jeg kommer hjem, skal jeg spise." (å → utelates etter hjelpeverb)',
          },
          {
            label: 'c',
            task: '"Dem likte boken som var spennenede."',
            solution: '"De likte boken som var spennende." (de som subjekt + skrivefeil)',
          },
        ],
        hints: ['Se etter de vanligste feilene', 'Bruk ordboka hvis usikker'],
        solution: 'Å finne egne feil krever øvelse og oppmerksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et avsnitt (100-150 ord) om et selvvalgt tema. Fokuser på riktig rettskriving og tegnsetting.',
        hints: ['Les gjennom teksten flere ganger', 'Sjekk de vanligste feilene', 'Bruk ordbok ved usikkerhet', 'Pass på særskriving og komma'],
        solution: 'Avsnittet bør vise god beherskelse av rettskriving og tegnsetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er korrekt skrevet?',
        options: [
          '"Da jeg var liten, likte jeg å lese."',
          '"Når jeg var liten, likte jeg og lese."',
          '"Da jeg var liten likte jeg og lese."',
          '"Når jeg var liten likte jeg å lese."',
        ],
        answer: 0,
        solution: 'Alternativ 1 er riktig: "Da" brukes om fortid (engangshendelse), "å" er infinitivsmerke, og komma settes etter leddsetningen som står først.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en særskrivingsfeil?',
        options: [
          'fotball kamp',
          'i dag',
          'til slutt',
          'i forveien',
        ],
        answer: 0,
        solution: '"fotball kamp" er en særskrivingsfeil - det skal skrives som ett ord: "fotballkamp". De andre er korrekt skrevet som to ord.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett alle feilene i denne teksten og forklar hver feil:\n\n"Når Per var liten bodde han i et lite hus. Per\'s mor jobbet på et syke hus. Dem hadde det bra selv om dem ikke hadde mye penger. Idag er Per blitt stor og han liker og tenke tilbake på barndommen sin."',
        hints: ['Se etter da/når, og/å, de/dem, særskriving og apostrof', 'Det er minst 7 feil'],
        solution: 'Rettet: "Da Per var liten, bodde han i et lite hus. Pers mor jobbet på et sykehus. De hadde det bra selv om de ikke hadde mye penger. I dag er Per blitt stor, og han liker å tenke tilbake på barndommen sin." Feil: når→da, manglende komma, Per\'s→Pers, syke hus→sykehus, Dem→De (2x), Idag→I dag, og→å.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom disse ordparene og lag en setning med hvert:',
        subTasks: [
          {
            label: 'a',
            task: 'og / å',
            solution: '"og" er konjunksjon (binder sammen): "Per og Kari". "å" er infinitivsmerke: "å lese".',
          },
          {
            label: 'b',
            task: 'da / når',
            solution: '"da" brukes om fortid/engangshendelse: "Da jeg kom hjem". "når" brukes om nåtid/fremtid/gjentakelse: "Når det regner".',
          },
          {
            label: 'c',
            task: 'de / dem',
            solution: '"de" er subjektsform: "De kommer". "dem" er objektsform: "Jeg ser dem".',
          },
        ],
        hints: ['Tenk på grammatisk funksjon'],
        solution: 'Å forstå forskjellen mellom disse ordparene er grunnleggende for god rettskriving på bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en «rettskrivingsguide» (300-400 ord) for medelever der du forklarer de fem vanligste rettskrivingsfeilene på bokmål. Inkluder eksempler og tips for å unngå feilene.',
        hints: ['Bruk tydelige eksempler', 'Formuler enkle regler', 'Lag «husketips» for de vanskeligste feilene'],
        solution: 'Guiden bør dekke da/når, og/å, de/dem, særskriving og tegnsetting med tydelige forklaringer og praktiske tips.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en tekst du har skrevet tidligere (f.eks. en innlevering). Gå gjennom den systematisk og rett alle rettskrivings- og tegnsettingsfeil. Skriv en kort refleksjon (100-150 ord) om hvilke feil du finner mest, og hva du kan gjøre for å forbedre deg.',
        hints: ['Sjekk systematisk: da/når, og/å, de/dem, særskriving, komma', 'Bruk ordbok for ord du er usikker på', 'Vær ærlig om egne svakheter'],
        solution: 'Refleksjonen bør vise selvinnsikt om egne utfordringer med rettskriving og konkrete strategier for forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16.2: Rettskriving nynorsk
// ============================================================================

export const CHAPTER_NORSK_VG1_16_2: TextbookChapter = {
  id: 'norsk-vg1-16-2',
  courseId: 'norsk-vg1',
  chapterNumber: '8.4',
  title: 'Rettskriving nynorsk',
  description: 'Lær nynorskens særtrekk og unngå vanlige bokmålsfeil på nynorsk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'mestre rettskriving og formverk på nynorsk',
    'skrive tekster på nynorsk med god språkføring',
  ],
  content: [
    {
      id: 'norsk-vg1-16-2-intro',
      type: 'text',
      content: `## Nynorsk - et eget språk

Nynorsk er ikke "dårlig bokmål" eller bokmål med andre endelser. Det er et eget skriftspråk med sin egen grammatikk, sine egne ord og sin egen stil.

**Nynorskens bakgrunn:**
Ivar Aasen skapte landsmål (senere nynorsk) på 1800-tallet basert på norske dialekter. Målet var et skriftspråk som lå nærmere folkemålet enn dansk-norsk.

**Viktig å forstå:**
- Nynorsk har andre ord enn bokmål
- Nynorsk har annen grammatikk
- Nynorsk er ikke "bokmål med a-endelser"
- God nynorsk krever å tenke nynorsk

**I dette kapittelet lærer du:**
- Nynorskens viktigste særtrekk
- De vanligste bokmålsfeilene på nynorsk
- Praktiske skriveråd for nynorsk
- Hvordan bygge nynorskkompetanse

**Tips:** Bruk Nynorskordboka (ordbok.uib.no) aktivt!`,
    },
    {
      id: 'norsk-vg1-16-2-def-1',
      type: 'definition',
      title: 'Nynorskens grammatiske særtrekk',
      content: `**Viktige forskjeller fra bokmål:**

**1. Obligatorisk hunkjønn:**
Nynorsk skiller alltid mellom hankjønn, hunkjønn og intetkjønn.
- ei bok - boka - bøker - bøkene
- ein gut - guten - gutar - gutane
- eit hus - huset - hus - husa

**2. Verbbøyning:**
Infinitiv: å kaste, å lese, å bu
Presens: kastar, les, bur
Preteritum: kasta, las, budde

**Sterke verb:**
- å skrive - skriv - skreiv - har skrive
- å finne - finn - fann - har funne
- å ta - tek - tok - har teke

**3. A-infinitiv eller e-infinitiv:**
Begge er tillatt: å kasta/å kaste
Velg én form og vær konsekvent.

**4. Flertallsendelser:**
- Hankjønn: -ar (gutar, bilar)
- Hunkjønn: -er (jenter, bøker)
- Intetkjønn: ofte ingen ending (hus, barn)

**5. Adjektivbøyning:**
- ein fin bil - eit fint hus - fine bilar
- Intetkjønn entall: -t
- Flertall og bestemt: -e`,
    },
    {
      id: 'norsk-vg1-16-2-def-2',
      type: 'definition',
      title: 'Ord som er annerledes på nynorsk',
      content: `**Mange ord er helt forskjellige på nynorsk og bokmål:**

**Vanlige ord:**
| Bokmål | Nynorsk |
|--------|---------|
| ikke | ikkje |
| meg, deg, seg | meg, deg, seg |
| noe, noen | noko, nokon |
| mye | mykje |
| bare | berre |
| hvilken | kva for ein |
| hver | kvar |
| også | òg / også |
| etter | etter |
| mellom | mellom |
| gjøre | gjere |
| spørre | spørje |
| fortelle | fortelje |

**Spørreord:**
| Bokmål | Nynorsk |
|--------|---------|
| hva | kva |
| hvem | kven |
| hvor | kvar |
| hvordan | korleis |
| hvorfor | kvifor |

**Pronomen:**
| Bokmål | Nynorsk |
|--------|---------|
| hun | ho |
| de (subjekt) | dei |
| dem | dei |
| vi | vi |

**Husk:** Disse ordene er ikke valgfrie - de MÅ brukes på nynorsk.`,
    },
    {
      id: 'norsk-vg1-16-2-def-3',
      type: 'definition',
      title: 'Vanlige bokmålsfeil på nynorsk',
      content: `**Feil som mange gjør:**

**1. Pronomen:**
- ✗ "ikke" → ✓ "ikkje"
- ✗ "hun" → ✓ "ho"
- ✗ "noe" → ✓ "noko"
- ✗ "noen" → ✓ "nokon"
- ✗ "mye" → ✓ "mykje"

**2. Spørreord:**
- ✗ "hva" → ✓ "kva"
- ✗ "hvem" → ✓ "kven"
- ✗ "hvor" → ✓ "kvar"
- ✗ "hvordan" → ✓ "korleis"
- ✗ "hvorfor" → ✓ "kvifor"

**3. Verbbøyning:**
- ✗ "han kommer" → ✓ "han kjem"
- ✗ "de gjør" → ✓ "dei gjer"
- ✗ "jeg vet" → ✓ "eg veit"
- ✗ "har gjort" → ✓ "har gjort/gjert"

**4. Substantivbøyning:**
- ✗ "bøkene" → ✓ "bøkene"
- ✗ "gutene" → ✓ "gutane"
- ✗ "husene" → ✓ "husa"

**5. Bokmålsord:**
- ✗ "derfor" → ✓ "difor"
- ✗ "bare" → ✓ "berre"
- ✗ "aldri" → ✓ "aldri" (lik)
- ✗ "sammen" → ✓ "saman"`,
    },
    {
      id: 'norsk-vg1-16-2-def-4',
      type: 'definition',
      title: 'Praktiske skriveråd for nynorsk',
      content: `**Slik skriver du god nynorsk:**

**1. Bruk nynorskordboka:**
Slå opp ord du er usikker på. Ordbok.uib.no har både bokmåls- og nynorskordbok.

**2. Les nynorsk:**
Jo mer du leser, jo bedre blir du. Les:
- NRK Nynorsk
- Dag og Tid (avis)
- Nynorske bøker
- Framtida.no

**3. Lær deg de vanligste ordene:**
Lag en liste over ord du ofte bruker, og lær dem på nynorsk.

**4. Tenk nynorsk - ikke oversett:**
Ikke skriv på bokmål og "oversett". Prøv å tenke direkte på nynorsk.

**5. Bruk dialekten din:**
Hvis du har en dialekt som ligger nær nynorsk, bruk det som støtte.

**6. Skriv mye:**
Øvelse gjør mester. Skriv dagbok, meldinger eller sosiale medier på nynorsk.

**7. Sjekk de vanligste feilene:**
Før du leverer, sjekk at du har:
- ikkje (ikke "ikke")
- kva, kven, kvar, korleis, kvifor
- ho (ikke "hun")
- noko, nokon, mykje

**8. Vær konsekvent:**
Velg former og hold deg til dem gjennom hele teksten.`,
    },
    {
      id: 'norsk-vg1-16-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra bokmål til nynorsk',
      problem: 'Oversett denne teksten til korrekt nynorsk:\n\n"Hun visste ikke hva hun skulle gjøre. Noen hadde fortalt henne at det var farlig, men hun ville gå dit allikevel. Hvorfor var det så vanskelig?"',
      solution: `**Steg for steg:**

**Ord som må endres:**
- Hun → Ho
- visste → visste/visste
- ikke → ikkje
- hva → kva
- skulle → skulle
- gjøre → gjere
- Noen → Nokon
- fortalt → fortalt/fortald
- henne → henne
- det var → det var
- ville → ville
- gå → gå
- dit → dit
- allikevel → likevel
- Hvorfor → Kvifor
- vanskelig → vanskeleg

**Nynorsk versjon:**
"Ho visste ikkje kva ho skulle gjere. Nokon hadde fortalt henne at det var farleg, men ho ville gå dit likevel. Kvifor var det så vanskeleg?"

**Merknader:**
- "allikevel" → "likevel" (vanlegare på nynorsk)
- "farlig/vanskelig" → "farleg/vanskeleg" (typisk nynorsk)
- Alle pronomen og spørjeord er endra`,
    },
    // Primærtekst: Ivar Aasen - «Nordmannen»
    {
      id: 'norsk-vg1-16-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Nordmannen» (1863)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-16-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_AASEN_NORDMANNEN}`,
        },
      ],
    },
    // Primærtekst: Arne Garborg - Haugtussa (utdrag)
    {
      id: 'norsk-vg1-16-2-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – «Haugtussa» (utdrag, 1895)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-16-2-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_GARBORG_HAUGTUSSA_UTDRAG}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-16-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun vet ikke hva han gjør."',
            solution: '"Ho veit ikkje kva han gjer."',
          },
          {
            label: 'b',
            task: '"Hvorfor kommer de ikke?"',
            solution: '"Kvifor kjem dei ikkje?"',
          },
          {
            label: 'c',
            task: '"Noen har sagt noe."',
            solution: '"Nokon har sagt noko."',
          },
          {
            label: 'd',
            task: '"Hvor mye koster det?"',
            solution: '"Kva/Kor mykje kostar det?"',
          },
        ],
        solution: 'Nynorsk har egne ord for mange vanlige bokmålsord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy disse substantivene på nynorsk (ubest. ent. - best. ent. - ubest. fl. - best. fl.):',
        subTasks: [
          {
            label: 'a',
            task: 'gut (hankjønn)',
            solution: 'ein gut - guten - gutar - gutane',
          },
          {
            label: 'b',
            task: 'bok (hunkjønn)',
            solution: 'ei bok - boka - bøker - bøkene',
          },
          {
            label: 'c',
            task: 'hus (intetkjønn)',
            solution: 'eit hus - huset - hus - husa',
          },
          {
            label: 'd',
            task: 'jente (hunkjønn)',
            solution: 'ei jente - jenta - jenter - jentene',
          },
        ],
        hints: ['Hankjønn: -ar i flertall', 'Hunkjønn: -er i flertall', 'Intetkjønn: ofte uendra i flertall'],
        solution: 'Nynorsk har klare mønstre for substantivbøyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy disse verbene på nynorsk (infinitiv - presens - preteritum - perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å kome (komme)',
            solution: 'å kome - kjem - kom - har kome',
          },
          {
            label: 'b',
            task: 'å skrive',
            solution: 'å skrive - skriv - skreiv - har skrive',
          },
          {
            label: 'c',
            task: 'å gjere (gjøre)',
            solution: 'å gjere - gjer - gjorde - har gjort',
          },
          {
            label: 'd',
            task: 'å vite (vite)',
            solution: 'å vite - veit - visste - har visst',
          },
        ],
        hints: ['Bruk nynorskordboka', 'Mange sterke verb har annen vokalveksling enn på bokmål'],
        solution: 'Verbbøyning på nynorsk følger bestemte mønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn og rett bokmålsfeilene:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg vet ikke hva hun gjør."',
            solution: '"Eg veit ikkje kva ho gjer."',
          },
          {
            label: 'b',
            task: '"De kom ikke fordi det regnet mye."',
            solution: '"Dei kom ikkje fordi det regna mykje."',
          },
          {
            label: 'c',
            task: '"Hvorfor sa han ikke noe?"',
            solution: '"Kvifor sa han ikkje noko?"',
          },
        ],
        hints: ['Sjekk pronomen, spørreord og vanlige bokmålsord'],
        solution: 'Å finne bokmålsfeil krever at du kjenner nynorskens ordforråd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort avsnitt (100-150 ord) på nynorsk om en hobby eller interesse du har.',
        hints: ['Bruk nynorskordboka aktivt', 'Sjekk pronomen og spørreord', 'Les gjennom og se etter bokmålsfeil', 'Vær konsekvent i formvalg'],
        solution: 'Avsnittet bør vise korrekt nynorsk med riktige ordformer og bøyninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er korrekt nynorsk for "Hun vet ikke"?',
        options: [
          'Ho veit ikkje',
          'Hun veit ikke',
          'Ho vet ikkje',
          'Hun vet ikke',
        ],
        answer: 0,
        solution: '"Ho veit ikkje" er korrekt nynorsk. "Hun" skal være "ho", "vet" skal være "veit", og "ikke" skal være "ikkje" på nynorsk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er korrekt flertallsform av "gut" på nynorsk?',
        options: [
          'gutar',
          'gutter',
          'gutene',
          'guttar',
        ],
        answer: 0,
        solution: '"Gutar" er korrekt ubestemt flertall av "gut" på nynorsk. Hankjønnsord får typisk -ar i flertall.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten «Nordmannen» av Ivar Aasen. Identifiser minst fem ord eller uttrykk som skiller seg fra moderne nynorsk, og forklar forskjellene.',
        hints: ['Sammenlign med moderne nynorskordbok', 'Se på bøyningsformer og ordvalg', 'Aasen brukte eldre former enn det som er vanlig i dag'],
        solution: 'Analysen bør vise forståelse for at nynorsk har utviklet seg siden Aasens tid, med konkrete eksempler på endringer i ordformer og bøyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Garborgs «Haugtussa». Skriv en kort analyse (100-150 ord) av språket. Hva kjennetegner Garborgs nynorsk?',
        hints: ['Se på ordvalg og billedbruk', 'Sammenlign med Aasens språk', 'Legg merke til rytme og klang'],
        solution: 'Analysen bør kommentere Garborgs poetiske nynorsk, bruk av billedspråk, rytme, og hvordan språket skiller seg fra moderne nynorsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en sammenhengende tekst (250-350 ord) på nynorsk om temaet «Kva betyr språk for identitet?». Bruk gjerne eksempler fra nynorskens historie eller din egen erfaring.',
        hints: ['Planlegg teksten før du begynner', 'Bruk nynorskordboka aktivt', 'Les gjennom og sjekk for bokmålsfeil', 'Vis at du kan skrive sammenhengende nynorsk'],
        solution: 'Teksten skal vise god nynorsk språkføring med korrekt grammatikk, riktige ordformer og sammenhengende argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-16-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-16-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft (på bokmål eller nynorsk, 400-500 ord): Bør alle norske elever lære å skrive både bokmål og nynorsk? Bruk argumenter fra språkhistorie, identitet og praktiske hensyn.',
        hints: ['Presenter argumenter for og mot', 'Bruk kunnskap fra kapittelet om nynorskens bakgrunn', 'Ta et tydelig standpunkt, men vis nyansering'],
        solution: 'Drøftingen bør vise forståelse for nynorskens rolle i norsk språkhistorie og kultur, og presentere balanserte argumenter med et begrunnet standpunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.1: Flerkulturell litteratur
// ============================================================================

export const CHAPTER_NORSK_VG1_17_1: TextbookChapter = {
  id: 'norsk-vg1-17-1',
  courseId: 'norsk-vg1',
  chapterNumber: '3.6',
  title: 'Flerkulturell litteratur',
  description: 'Utforsk norsk litteratur av forfattere med innvandrerbakgrunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster som utforsker kulturmøter og identitet',
    'reflektere over hvordan litteratur speiler samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg1-17-1-intro',
      type: 'text',
      content: `## Flerkulturell litteratur i Norge

Norge har blitt et flerkulturelt samfunn, og dette speiles i litteraturen. Forfattere med innvandrerbakgrunn eller flerkulturell erfaring beriker norsk litteratur med nye perspektiver, temaer og stemmer.

**Hva er flerkulturell litteratur?**
Litteratur som utforsker kulturmøter, migrasjon, identitet mellom kulturer, og erfaringen av å tilhøre flere steder.

**Hvorfor lese flerkulturell litteratur?**
- Gir innsikt i andre erfaringer
- Utvider forståelsen av hva "norsk" er
- Utfordrer stereotypier
- Speiler et mangfoldig samfunn
- Er del av LK20s fokus på kulturforståelse

**Viktige norske forfattere:**
- Maria Navarro Skaranger
- Zeshan Shakar
- Sumaya Jirde Ali
- Gulraiz Sharif
- Hassan Khemiri (svensk, men lest i Norge)

**I dette kapittelet utforsker vi:**
- Identitet mellom kulturer
- Tilhørighet og utenforskap
- Språk og identitet
- Representasjon i litteratur`,
    },
    {
      id: 'norsk-vg1-17-1-def-1',
      type: 'definition',
      title: 'Identitet mellom kulturer',
      content: `**Å tilhøre flere steder**

Et gjennomgående tema i flerkulturell litteratur er opplevelsen av å stå mellom kulturer - å føle tilhørighet til flere steder, men kanskje ikke fullt ut til noen.

**Nøkkelbegreper:**

**Hybrididentitet:**
En identitet som kombinerer elementer fra flere kulturer. Ikke halvt-halvt, men noe nytt og eget.

**Tredje rom:**
Begrepet kommer fra Homi Bhabha. Det "tredje rommet" er stedet der kulturer møtes og skaper noe nytt - verken den ene eller andre kulturen, men noe mellom.

**Bindestrek-identitet:**
"Norsk-pakistansk", "norsk-somalisk" - identiteter som kombinerer opprinnelse og tilhørighet. Kan både berike og oppleves begrensende.

**Dobbelthet:**
Opplevelsen av å se verden fra flere perspektiver samtidig, å kunne "kode-veksle" mellom kulturer.

**Litterære eksempler:**
- Karakterer som føler seg "for norske" hjemme og "for utenlandske" ute
- Språklig veksling mellom norsk og andre språk
- Konflikter mellom generasjoner
- Forhandling om tradisjoner og modernitet`,
    },
    {
      id: 'norsk-vg1-17-1-def-2',
      type: 'definition',
      title: 'Maria Navarro Skaranger',
      content: `**Maria Navarro Skaranger (f. 1994)**

En av de viktigste unge stemmene i norsk flerkulturell litteratur.

**Bakgrunn:**
- Vokst opp på Romsås i Oslo
- Mor fra Spania, far fra Chile
- Debuterte som 21-åring

**"Alle utlendinger har lukka gardiner" (2015):**
Debutromanen handler om Mariana, en jente på 16 år som vokser opp i en drabantby i Oslo.

**Viktige temaer:**
- Livet i drabantbyen
- Identitet mellom kulturer
- Klasseforskjeller
- Fordommer og stereotypier
- Vennskap og lojalitet

**Språket:**
Skaranger bruker et muntlig, ekte språk inspirert av Oslo-slang med innslag av flere språk. Dette har vært nyskapende i norsk litteratur.

**Eksempel på stil:**
"Hu moren min var full av hat. Hu hata hu nabodama som hadde BMW og nese i sky."

**Betydning:**
- Viser Oslo fra et nytt perspektiv
- Språklig nyskapende
- Representerer erfaringer som sjelden har vært i litteraturen
- Priser: Talentstipend, kritikerrost`,
    },
    {
      id: 'norsk-vg1-17-1-def-3',
      type: 'definition',
      title: 'Zeshan Shakar',
      content: `**Zeshan Shakar (f. 1982)**

Forfatter og samfunnsøkonom som har skrevet noen av de mest leste romanene i norsk litteratur de siste årene.

**Bakgrunn:**
- Vokst opp på Stovner i Oslo
- Foreldre fra Pakistan
- Utdannet samfunnsøkonom

**"Tante Ulrikkes vei" (2017):**
Gjennombruddsromanen handler om Jamal og Mo, to gutter som vokser opp på Stovner.

**Temaer:**
- Oppvekst i drabantby
- Klasseforskjeller og sosial mobilitet
- Forventninger fra familie og samfunn
- Utdanning som vei ut
- Identitet og tilhørighet

**Fortellerteknikk:**
- Veksler mellom Jamals dagboknotater og Mos e-poster
- Kontrasterer to ulike veier gjennom livet
- Muntlig, autentisk språk

**"Gull" (2020):**
Oppfølgeren som fortsetter å utforske klasse og kulturmøter.

**Betydning:**
- Bestselger og kritikerfavoritt
- Filmatisert
- Setter søkelys på klasseperspektivet
- Viser hvordan bakgrunn påvirker muligheter`,
    },
    {
      id: 'norsk-vg1-17-1-def-4',
      type: 'definition',
      title: 'Andre viktige stemmer',
      content: `**Flere forfattere å kjenne til:**

**Sumaya Jirde Ali (f. 1997):**
- Poet og samfunnsdebattant
- "Ikkje ver redd, jiansen" - diktsamling
- Skriver om identitet, rasisme, kjønn
- Modig og direkte stemme

**Gulraiz Sharif (f. 1984):**
- "Hør her'a!" (2020) - debutroman
- Handler om Mahmoud på 15 som skriver brev til lillebroren
- Temaer: maskulinitet, forventninger, identitet
- Morsom og alvorlig på samme tid

**Hassan Khemiri (f. 1978, svensk):**
- "Et øye rødt" - lest i norsk skole
- Utforsker språk og identitet
- Eksperimenterer med form

**Mona Asadi:**
- Forfatter og komiker
- Skriver om det å være norsk-iraner
- Humoristisk og treffende

**Felles trekk:**
- Utforsker identitet mellom kulturer
- Bruker språk bevisst og nyskapende
- Setter søkelys på klasseperspektiver
- Representerer erfaringer som har manglet i litteraturen
- Balanserer det personlige og det politiske`,
    },
    {
      id: 'norsk-vg1-17-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av flerkulturell tekst',
      problem: 'Les dette utdraget fra "Alle utlendinger har lukka gardiner" og analyser hvordan identitet fremstilles:\n\n"Jeg er jo egentlig bare norsk, sier jeg. Ja, men du er ikke hvit norsk, sier hu. Nei, men hva er jeg da, sier jeg. Du er utlending, sier hu. Men jeg er jo født her, sier jeg."',
      solution: `**Analyse:**

**Tema:**
Dialogen handler om definisjonen av "norsk" og hvem som får lov til å definere seg selv.

**Identitetsforhandling:**
- Jeg-personen identifiserer seg som norsk
- Den andre personen kategoriserer basert på utseende
- Konflikten mellom selvoppfatning og andres kategorisering

**Språklige trekk:**
- Kort, direkte dialog
- Muntlig språk ("hu")
- Gjentagelse av "sier jeg" / "sier hu" understreker fram-og-tilbake
- Enkel setningsstruktur forsterker frustrasjonen

**Samfunnsrelevans:**
Teksten tar opp:
- Hvem definerer "norsk"?
- Betydningen av hudfarge i identitetsspørsmål
- Forskjellen på juridisk og sosial tilhørighet
- "Evig utlending"-opplevelsen

**Litterær betydning:**
Skaranger gir stemme til en erfaring mange har, men som sjelden har vært representert i norsk litteratur. Den enkle dialogen avslører kompliserte maktstrukturer.`,
    },
    // Primærtekst: Knut Hamsun - Sult (åpning)
    {
      id: 'norsk-vg1-17-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Knut Hamsun – «Sult» (åpning, 1890)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-17-1-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_HAMSUN_SULT_AAPNING}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-17-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om flerkulturell litteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "hybrididentitet"?',
            solution: 'En identitet som kombinerer elementer fra flere kulturer og skaper noe nytt og eget.',
          },
          {
            label: 'b',
            task: 'Hvorfor er språket viktig i flerkulturell litteratur?',
            solution: 'Språket speiler identitet og kulturmøter. Mange forfattere bruker nyskapende språk med innslag fra flere kulturer.',
          },
          {
            label: 'c',
            task: 'Hva handler Maria Navarro Skarangers "Alle utlendinger har lukka gardiner" om?',
            solution: 'Romanen handler om Mariana, en jente på 16 år som vokser opp i en drabantby i Oslo, og utforsker identitet, klasseforskjeller og fordommer.',
          },
        ],
        solution: 'Flerkulturell litteratur utforsker identitet, tilhørighet og kulturmøter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Maria Navarro Skaranger og Zeshan Shakar:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de to forfatterne til felles?',
            solution: 'Begge skriver om oppvekst i drabantby i Oslo, bruker muntlig språk, utforsker identitet og klasse.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Forskjellig bakgrunn (latinamerikansk vs. pakistansk), ulik fortellerteknikk (enestående forteller vs. vekslende perspektiver).',
          },
        ],
        hints: ['Se på temaer, språk og fortellerteknikk'],
        solution: 'Begge representerer viktige stemmer i norsk flerkulturell litteratur med noen fellestrekk og noen forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over begrepet "bindestrek-identitet".',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "bindestrek-identitet" (f.eks. norsk-pakistansk)?',
            solution: 'Identitet som kombinerer nasjonalitet/opprinnelse med tilhørighet til Norge.',
          },
          {
            label: 'b',
            task: 'Kan slike betegnelser være både berikende og begrensende? Forklar.',
            solution: 'Berikende: anerkjenner flere tilhørigheter. Begrensende: kan oppleves som at man aldri er "helt" norsk.',
          },
        ],
        hints: ['Tenk på hvem som definerer identitet', 'Tenk på forskjellen på selvvalgt og påtvunget betegnelse'],
        solution: 'Identitetsbetegnelser er komplekse og kan oppleves ulikt av ulike mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et utdrag eller en hel tekst av en av forfatterne nevnt i kapittelet og gjør en kort analyse.',
        hints: ['Velg en tekst fra pensum eller biblioteket', 'Se på temaer: identitet, tilhørighet, språk', 'Analyser språklige virkemidler', 'Knytt til samfunnet'],
        solution: 'Analysen bør identifisere temaer, analysere språk og virkemidler, og reflektere over tekstens betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Hvorfor er det viktig at norsk litteratur inkluderer stemmer fra ulike bakgrunner?',
        hints: ['Tenk på representasjon', 'Tenk på hvem som leser', 'Tenk på hva litteratur kan gjøre', 'Tenk på samfunnsendringer'],
        solution: 'Drøftingen bør ta opp representasjon, at lesere kan kjenne seg igjen, at litteratur kan utvide forståelse, og at litteraturen bør speile et mangfoldig samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner flerkulturell litteratur?',
        options: [
          'Den utforsker kulturmøter, migrasjon og identitet mellom kulturer',
          'Den er skrevet på et annet språk enn norsk',
          'Den handler alltid om innvandring til Norge',
          'Den er skrevet av forfattere som ikke bor i Norge',
        ],
        answer: 0,
        solution: 'Flerkulturell litteratur kjennetegnes ved at den utforsker kulturmøter, migrasjon, hybrididentitet og erfaringen av å tilhøre flere steder. Den kan være skrevet av forfattere med ulik bakgrunn.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket tema er sentralt i mye av den flerkulturelle litteraturen?',
        options: [
          'Utenforskap og tilhørighet',
          'Naturskildringer',
          'Kjærlighetshistorier',
          'Teknologisk utvikling',
        ],
        answer: 0,
        solution: 'Utenforskap og tilhørighet er gjennomgående temaer i flerkulturell litteratur. Mange tekster utforsker opplevelsen av å stå mellom kulturer og kjempe for tilhørighet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les åpningen av Hamsuns «Sult» (primærteksten). Analyser hovedpersonen som en outsider-figur. Hvordan opplever han utenforskapet? Hvilke virkemidler bruker Hamsun for å formidle denne opplevelsen?',
        hints: ['Se på fortellerperspektivet (jeg-form)', 'Legg merke til fysiske og psykiske beskrivelser', 'Tenk på forholdet mellom individ og samfunn'],
        solution: 'Analysen bør peke på at hovedpersonen i «Sult» er en outsider på grunn av fattigdom og sult. Hamsun bruker jeg-forteller, stream of consciousness-aktig stil, og intense sanseinntrykk for å formidle utenforskapet innenfra. Hovedpersonen er isolert fra samfunnet rundt seg, og sulten blir en metafor for eksistensiell fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: `Sammenlign outsider-temaet i historisk og moderne norsk litteratur.

Ta utgangspunkt i Hamsuns «Sult»-protagonist og sammenlign med hvordan utenforskap fremstilles i nyere flerkulturell litteratur. Zeshan Shakar skildrer i «Tante Ulrikkes vei» hvordan bakgrunn og postnummer former hvem du kan bli. Maria Navarro Skaranger skriver i «Alle utlendinger har lukka gardiner» om hvordan språk og identitet henger uløselig sammen.

Drøft: Hva er likt og ulikt i fremstillingen av utenforskap hos Hamsun sammenlignet med de nyere forfatterne?`,
        hints: ['Tenk på årsaker til utenforskap (klasse, kultur, etnisitet)', 'Sammenlign perspektiv og fortellerteknikk', 'Vurder samfunnskontekst da og nå'],
        solution: 'Sammenligningen bør vise at utenforskap kan ha ulike årsaker (økonomi/klasse hos Hamsun vs. kultur/etnisitet/klasse i nyere litteratur), men at den subjektive opplevelsen kan ha fellestrekk. Hamsuns perspektiv er individuelt/eksistensielt, mens Shakar og Skaranger utforsker strukturelle og sosiale årsaker. Alle bruker jeg-perspektiv og autentisk språk for å formidle opplevelsen innenfra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Hvordan representerer litteraturen kulturmøter? Bruk eksempler fra minst to tekster eller forfattere du har lest. Drøft hvordan litteraturen kan bidra til forståelse mellom kulturer, og diskuter eventuelle begrensninger.',
        hints: ['Bruk fagbegreper som hybrididentitet, tredje rom, representasjon', 'Trekk inn konkrete eksempler fra tekstene', 'Diskuter litteraturens muligheter og begrensninger', 'Knytt til samfunnskontekst'],
        solution: 'Essayet bør demonstrere evne til å drøfte litteraturens rolle i kulturmøter, med konkrete eksempler som viser hvordan språk, perspektiv og form bidrar til forståelse. Drøftingen bør også reflektere over litteraturens begrensninger (hvem forteller, hvem leser, representasjon vs. virkelighet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en norsk forfatter med flerkulturell bakgrunn (f.eks. Zeshan Shakar, Maria Navarro Skaranger, Gulraiz Sharif, Sumaya Jirde Ali eller en annen). Undersøk og presenter forfatterskapet:\n\na) Kort biografi og bakgrunn.\nb) Hovedtemaer i forfatterskapet.\nc) Analyser et utdrag eller en hel tekst.\nd) Vurder forfatterens betydning for norsk litteratur.',
        hints: ['Bruk biblioteket og pålitelige kilder', 'Les minst ett utdrag fra forfatterens verk', 'Bruk fagbegreper fra kapittelet i analysen', 'Vurder representasjon og stemmer i norsk litteratur'],
        solution: 'Presentasjonen bør vise selvstendig research, evne til litterær analyse med fagbegreper, og refleksjon over forfatterens plass i norsk litteraturhistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.2: Postkolonial lesning
// ============================================================================

export const CHAPTER_NORSK_VG1_17_2: TextbookChapter = {
  id: 'norsk-vg1-17-2',
  courseId: 'norsk-vg1',
  chapterNumber: '3.7',
  title: 'Postkolonial lesning',
  description: 'Lær å lese tekster med et kulturkritisk blikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese tekster med et kritisk og kulturelt perspektiv',
    'reflektere over representasjon og stereotypier i tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-17-2-intro',
      type: 'text',
      content: `## Postkolonial lesning - å lese med kritisk blikk

Postkolonial teori gir oss verktøy til å analysere hvordan kulturer fremstilles i tekster, og hvordan maktforhold påvirker hvem som får fortelle og hvordan.

**Hva betyr "postkolonial"?**
- "Post" betyr "etter"
- "Kolonial" viser til kolonitiden
- Postkolonialisme analyserer ettervirkningene av kolonialisme
- Handler om makt, representasjon og hvem som har definisjonsmakt

**Relevans for norsk:**
Selv om Norge ikke var en stormakt, er vi del av en vestlig tradisjon som har fremstilt andre kulturer på bestemte måter. Postkolonial lesning hjelper oss å se disse mønstrene.

**I dette kapittelet lærer du:**
- Grunnleggende begreper fra postkolonial teori
- Hvordan analysere representasjon i tekster
- Hvordan identifisere stereotypier
- Hvordan lese tekster med kulturkritisk blikk`,
    },
    {
      id: 'norsk-vg1-17-2-def-1',
      type: 'definition',
      title: 'Grunnbegreper i postkolonial teori',
      content: `**Viktige begreper å kjenne:**

**Kolonialisme:**
Europeiske stormakters erobring og kontroll over andre områder i verden (ca. 1500-1960-tallet).

**Postkolonialisme:**
Analyse av hvordan kolonialismen fortsetter å påvirke kultur, identitet og maktforhold i dag.

**Den andre (The Other):**
Et sentralt begrep fra Edward Said. "Vi" definerer oss selv i kontrast til "de andre". De andre fremstilles ofte som:
- Eksotiske
- Primitive
- Farlige
- Mystiske
- Underlegne

**Orientalisme:**
Edward Saids begrep for Vestens måte å fremstille Østen (Orienten) på - ofte stereotypt og forenklet.

**Sentrum og periferi:**
- Sentrum: Vestlige, "utviklede" land
- Periferi: Resten av verden, fremstilt som mindre viktig

**Definisjonsmakt:**
Hvem har makt til å definere virkeligheten? Hvem bestemmer hva som er "normalt"?

**Disse begrepene hjelper oss å se mønstre i hvordan kulturer fremstilles.**`,
    },
    {
      id: 'norsk-vg1-17-2-def-2',
      type: 'definition',
      title: 'Representasjon og stereotypier',
      content: `**Hvordan kulturer fremstilles i tekst:**

**Representasjon:**
Hvordan grupper eller kulturer gjengis i tekster, bilder og medier.

**Spørsmål om representasjon:**
- Hvem fremstilles?
- Hvordan fremstilles de?
- Hvem forteller?
- Hva er perspektivet?
- Hva utelates?

**Stereotypier:**
Forenklede, ofte negative fremstillinger av grupper.

**Vanlige stereotypier i litteratur:**
- "Den edle ville" - naturmennesker som enkle og uskyldige
- "Den farlige fremmed" - andre kulturer som truende
- "Den undertrykte kvinnen" - kvinner fra andre kulturer som ofre
- "Den eksotiske" - andre kulturer som spennende og annerledes

**Hvitt blikk (white gaze):**
Når tekster fremstiller andre kulturer primært sett fra et hvitt, vestlig perspektiv.

**Internalisert underlegenhet:**
Når undertrykte grupper overtar majoritetens negative syn på seg selv.

**Å se stereotypier er første steg mot å forstå dem kritisk.**`,
    },
    {
      id: 'norsk-vg1-17-2-def-3',
      type: 'definition',
      title: 'Hvordan lese postkolonialt',
      content: `**Spørsmål å stille til teksten:**

**Om forteller og perspektiv:**
- Hvem forteller historien?
- Fra hvilket perspektiv?
- Er det en insider eller outsider som forteller?
- Hvem har definisjonsmakten?

**Om representasjon:**
- Hvordan fremstilles karakterer fra ulike kulturer?
- Er det stereotypier?
- Hvem er subjekt (handler) og hvem er objekt (passiv)?
- Hvem har stemme og hvem er tause?

**Om makt:**
- Hvilke maktforhold vises i teksten?
- Er det noen som fremstilles som overlegne/underlegne?
- Hvordan fremstilles møtet mellom kulturer?

**Om språk:**
- Hvordan omtales kulturer og grupper?
- Er det eksotifiserende eller generaliserende språk?
- Hvem får snakke "riktig" språk?

**Om kontekst:**
- Når ble teksten skrevet?
- Hvilke holdninger var vanlige da?
- Hvordan leser vi teksten i dag?

**Tips:** Ikke alle tekster er problematiske, men alle kan analyseres kritisk.`,
    },
    {
      id: 'norsk-vg1-17-2-def-4',
      type: 'definition',
      title: 'Eksempler fra norsk litteratur',
      content: `**Postkolonial lesning av norske tekster:**

**Hamsun og "Sult":**
Hamsuns tekster kan leses i lys av hans syn på "primitive" kulturer. Hvordan fremstilles karakterer fra ulike bakgrunner?

**Eventyr og folkeeventyr:**
- "Askeladden og de gode hjelperne" - hvem er "de gode" og "de onde"?
- Fremstilling av "trollet" - den farlige andre?
- Hvordan fremstilles kvinner fra andre kulturer?

**Misjonslitteratur:**
Tekster fra misjonstiden fremstilte ofte afrikanske kulturer stereotypt. Hvordan?

**Moderne tekster:**
Også moderne tekster kan ha problematiske fremstillinger. Kritisk lesning gjelder all litteratur.

**Motfortellinger:**
Flerkulturell litteratur kan leses som motfortellinger - tekster som forteller andre historier enn de dominerende.

**Viktig balanse:**
- Eldre tekster kan ha verdi selv om de har problematiske elementer
- Vi kan kritisere aspekter uten å forkaste hele teksten
- Kontekst er viktig - andre tider hadde andre normer
- Kritisk lesning betyr ikke sensur, men bevissthet`,
    },
    {
      id: 'norsk-vg1-17-2-bjornson',
      type: 'note',
      title: 'Bjørnstjerne Bjørnson og det internasjonale engasjementet',
      content: `Bjørnstjerne Bjørnson (1832-1910) er kjent som nasjonalpoeten, men han var også en internasjonalt engasjert skikkelse. Bjørnson engasjerte seg i kampen for undertrykte folk i Europa og kritiserte stormaktenes imperialisme. Han støttet blant annet slovakenes kamp mot magyarisering og dreyfusardenes sak i Frankrike. Bjørnsons internasjonale engasjement viser at norske forfattere allerede på 1800-tallet forholdt seg til spørsmål om makt, rettferdighet og representasjon på tvers av kulturer. Samtidig er det verdt å merke seg at selv Bjørnson, som kjempet for rettferdighet, var preget av sin tids syn på andre kulturer og sivilisasjoner.`,
    },
    {
      id: 'norsk-vg1-17-2-example-1',
      type: 'example',
      title: 'Eksempel: Postkolonial analyse',
      problem: 'Les dette fiktive utdraget og analyser det postkolonialt:\n\n"Reisende kom til landsbyen i hjertet av Afrika. De innfødte møtte dem med nysgjerrige blikk. En gammel medisinmann kom frem og tilbød dem underlige drikker. De primitive ritualene fascinerte de vestlige gjestene."',
      solution: `**Postkolonial analyse:**

**Perspektiv:**
- Fortalt fra de "reisendes" (vestlige) perspektiv
- Afrika fremstilles som objekt, ikke subjekt
- Afrikanerne har ikke egen stemme i teksten

**Språklige valg:**
- "De innfødte" - generaliserende, objektiverende
- "Hjertet av Afrika" - eksotifiserende
- "Primitive ritualer" - nedvurderende
- "Underlige" - fremmedgjørende
- "Fascinerte" - de vestlige som de aktive tilskuerne

**Stereotypier:**
- "Medisinmannen" - stereotyp fremstilling
- Afrika som mystisk og primitivt
- Innfødte som kuriositeter

**Maktforhold:**
- De vestlige er subjekter (de som handler, ser, fascineres)
- Afrikanerne er objekter (de som blir sett på)
- Ingen dialog - bare enveis observasjon

**Hva mangler:**
- Afrikanernes eget perspektiv
- Individualisering av karakterene
- Kontekst og kompleksitet
- Afrikanernes tanker og følelser

**Konklusjon:**
Teksten reproduserer koloniale blikk og stereotypier, og fremstiller afrikanere som "de andre" sett utenfra.`,
    },
    // Primærtekst: Henrik Ibsen - Peer Gynt (Marokko-scenen)
    {
      id: 'norsk-vg1-17-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – «Peer Gynt» (Marokko-scenen)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-17-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_IBSEN_PEER_GYNT_MAROKKO}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-17-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar disse begrepene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "den andre" (The Other)?',
            solution: 'Begrepet beskriver hvordan "vi" definerer oss i kontrast til "dem" - de andre fremstilles ofte som forskjellige, eksotiske eller underlegne.',
          },
          {
            label: 'b',
            task: 'Hva er orientalisme?',
            solution: 'Edward Saids begrep for Vestens stereotypiske fremstilling av Østen som eksotisk, mystisk og annerledes.',
          },
          {
            label: 'c',
            task: 'Hva betyr definisjonsmakt?',
            solution: 'Makten til å definere virkeligheten - hvem bestemmer hva som er "normalt", hvem som er "vi" og hvem som er "de".',
          },
        ],
        solution: 'Postkoloniale begreper hjelper oss å analysere makt og representasjon i tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser potensielle stereotypier i disse beskrivelsene:',
        subTasks: [
          {
            label: 'a',
            task: '"Den mystiske kvinnen fra Østen"',
            solution: 'Eksotifiserende, generaliserende ("fra Østen"), fremstiller kvinner som mystiske/uforklarlige.',
          },
          {
            label: 'b',
            task: '"De fargerike stammene i jungelen"',
            solution: '"Fargerike" er eksotifiserende, "stammer" er generaliserende, "jungelen" fremstiller som primitive.',
          },
          {
            label: 'c',
            task: '"Den undertrykte muslimske kvinnen"',
            solution: 'Generaliserer alle muslimske kvinner, fremstiller dem som passive ofre uten egen stemme.',
          },
        ],
        hints: ['Se etter generalisering', 'Se etter eksotifisering', 'Se etter forenkling'],
        solution: 'Stereotypier forenkler og generaliserer komplekse grupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en tekst fra pensum og still postkoloniale spørsmål til den:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem forteller og fra hvilket perspektiv?',
            solution: 'Svar avhenger av teksten. Analyser om fortelleren er insider eller outsider, og hvilke konsekvenser det har.',
          },
          {
            label: 'b',
            task: 'Hvordan fremstilles karakterer fra ulike bakgrunner?',
            solution: 'Se etter stereotypier, generalisering, eksotifisering. Er karakterene komplekse eller forenklede?',
          },
          {
            label: 'c',
            task: 'Hva er maktforholdene i teksten?',
            solution: 'Analyser hvem som har stemme, hvem som er aktive/passive, hvem som fremstilles positivt/negativt.',
          },
        ],
        hints: ['Bruk spørsmålene fra definisjonen om postkolonial lesning'],
        solution: 'Postkolonial lesning avdekker mønstre i representasjon og makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft: Hvordan kan vi lese eldre tekster som har problematiske fremstillinger?',
        hints: ['Tenk på historisk kontekst', 'Kan vi kritisere og verdsette samtidig?', 'Hva er forskjellen på kritikk og sensur?', 'Hva kan vi lære av problematiske tekster?'],
        solution: 'Drøftingen bør ta opp kontekstualisering, kritisk lesning, verdien av å forstå historien, og forskjellen på kritikk og sensur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (200-250 ord) av hvordan en kultur fremstilles i en selvvalgt tekst, film eller medietekst.',
        hints: ['Bruk postkoloniale begreper', 'Analyser perspektiv og representasjon', 'Se etter stereotypier', 'Vurder maktforhold'],
        solution: 'Analysen bør vise bruk av postkoloniale begreper og evne til å identifisere mønstre i representasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer postkolonial lesning?',
        options: [
          'Å analysere hvordan maktforhold og representasjon av kulturer kommer til uttrykk i tekster',
          'Å lese tekster som er skrevet i tidligere kolonier',
          'Å bare lese tekster som er skrevet etter kolonitiden',
          'Å fjerne alle gamle tekster fra pensum',
        ],
        answer: 0,
        solution: 'Postkolonial lesning innebærer å analysere tekster med blikk for maktforhold, representasjon og hvordan kulturer fremstilles. Det handler om å lese kritisk, ikke om å sensurere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan fremstilles ofte "den andre" i vestlig litteratur ifølge postkolonial teori?',
        options: [
          'Som eksotisk, mystisk eller underlegen',
          'Som likeverdig og nyansert',
          'Som teknologisk overlegen',
          'Som identisk med vestlige karakterer',
        ],
        answer: 0,
        solution: '"Den andre" fremstilles ofte stereotypt i vestlig litteratur: som eksotisk, primitiv, farlig eller mystisk. Denne fremstillingen bidrar til å definere "oss" som det normale og "dem" som det avvikende.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Ibsens «Peer Gynt» (Marokko-scenen). Analyser scenene gjennom en postkolonial linse:\n\na) Hvordan fremstiller Ibsen møtet mellom Peer Gynt og den ikke-europeiske kulturen?\nb) Hvilke stereotypier eller orientalistiske trekk finner du?\nc) Kan Ibsen leses som en som ironiserer over Peer Gynts holdninger, eller reproduserer han dem? Begrunn.',
        hints: ['Hvem har perspektivet?', 'Hvordan beskrives de andre karakterene?', 'Hva er Peers holdning?', 'Husk å vurdere historisk kontekst'],
        solution: 'Analysen bør identifisere orientalistiske trekk i Ibsens fremstilling (eksotifisering, Peer som overlegent subjekt), diskutere perspektiv og maktforhold, og reflektere over om Ibsen ironiserer over eller reproduserer disse holdningene. Ibsens intensjon kan leses som satirisk - Peer er en anti-helt som parodierer vestlig selvovervurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksempler på orientalisme i norsk kulturhistorie. Undersøk minst to av disse områdene:\n\na) Norsk misjonslitteratur og bilder fra misjonsarbeid\nb) Reiseskildringer fra 1800-tallet (f.eks. Jonas Lie, Bjørnson)\nc) Norsk reklame eller populærkultur (film, tegneserier, musikk)\nd) Lærebøker i skolen (historiske eksempler)',
        hints: ['Bruk biblioteket eller digitale arkiver', 'Beskriv konkrete eksempler', 'Analyser med postkoloniale begreper'],
        solution: 'Besvarelsen bør inneholde konkrete eksempler der norsk kultur har fremstilt andre kulturer stereotypt, med analyse av orientalistiske trekk og refleksjon over historisk kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Makt, representasjon og «den andre» i norsk litteratur.\n\nDrøft hvordan norsk litteratur har fremstilt fremmede kulturer gjennom tidene. Bruk begrepene «den andre», orientalisme, definisjonsmakt og representasjon systematisk. Ta utgangspunkt i minst to konkrete tekster, hvorav minst en fra pensum.',
        hints: ['Bygg opp essayet med innledning, hoveddel og avslutning', 'Bruk postkoloniale fagbegreper aktivt', 'Vis at du kan balansere kritikk med historisk kontekstualisering', 'Ta et tydelig standpunkt og begrunn det'],
        solution: 'Essayet skal demonstrere evne til systematisk postkolonial tekstanalyse, bruk av relevante fagbegreper, og vise at eleven kan balansere kritisk lesning med historisk kontekstualisering. Det bør inneholde konkrete teksteksempler og en selvstendig drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-17-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-17-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en klassisk norsk tekst som fremstiller fremmede kulturer (f.eks. Ibsens «Peer Gynt», eventyr, misjonslitteratur, reiseskildringer). Sammenlign denne fremstillingen med et moderne perspektiv:\n\na) Analyser den klassiske teksten med postkoloniale begreper.\nb) Finn en moderne tekst eller stemme (f.eks. en flerkulturell forfatter, en debattant, en forsker) som gir et annet perspektiv på samme tema.\nc) Sammenlign de to: Hva har endret seg i måten vi fremstiller og forstår andre kulturer? Hva kan vi lære av å lese de to tekstene sammen?',
        hints: ['Velg tekster som lar seg sammenligne tematisk', 'Bruk postkoloniale begreper systematisk', 'Vis at du forstår historisk endring', 'Reflekter over hva kritisk lesning kan bidra med'],
        solution: 'Besvarelsen bør vise evne til å analysere både en klassisk og en moderne tekst med postkoloniale begreper, og demonstrere forståelse for hvordan representasjon av andre kulturer har endret seg over tid. Sammenligningen bør være konkret og nyansert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL5: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_15_1,
  CHAPTER_NORSK_VG1_15_2,
  CHAPTER_NORSK_VG1_16_1,
  CHAPTER_NORSK_VG1_16_2,
  CHAPTER_NORSK_VG1_17_1,
  CHAPTER_NORSK_VG1_17_2,
];

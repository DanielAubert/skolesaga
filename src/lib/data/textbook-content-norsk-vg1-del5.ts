/**
 * Norsk VG1 - Del 5: Kapittel 3.1-3.2 og 8.1-8.4
 * Flerkulturell litteratur, kulturmøter, grammatikk og rettskriving
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_AASEN_NORDMANNEN,
  TEKST_GARBORG_HAUGTUSSA_UTDRAG,
  TEKST_HAMSUN_SULT_AAPNING,
  TEKST_IBSEN_PEER_GYNT_MAROKKO,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 8.1: Setningsanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_8_1: TextbookChapter = {
  id: 'norsk-vg1-8-1',
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
      id: 'norsk-vg1-8-1-intro',
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
      id: 'norsk-vg1-8-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Setningsledd** | En del av setningen med bestemt funksjon |
| **Verbal** | Setningens kjerne - forteller hva som skjer |
| **Subjekt** | Den eller det som handler eller beskrives |
| **Objekt** | Den eller det handlingen rammer |
| **Adverbial** | Ledd som forteller om tid, sted, måte osv. |
| **Predikativ** | Ledd som beskriver subjektet eller objektet |
| **Finitt verb** | Verb bøyd i tid (presens/preteritum) |
| **Setningsanalyse** | Å identifisere alle leddene i en setning |`,
    },
    {
      id: 'norsk-vg1-8-1-def-1',
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
      id: 'norsk-vg1-8-1-def-2',
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
      id: 'norsk-vg1-8-1-def-3',
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
      id: 'norsk-vg1-8-1-def-4',
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
      id: 'norsk-vg1-8-1-def-5',
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
      id: 'norsk-vg1-8-1-example-1',
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
      id: 'norsk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-1',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-2',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-3',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-4',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-5',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-6',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-7',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-8',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-9',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en grammatisk analyse (300-400 ord) av et avsnitt fra en roman eller novelle du har lest. Analyser setningslengde, setningstyper og bruk av ulike setningsledd.',
        hints: ['Velg et avsnitt med variasjon i setningsstruktur', 'Kommenter forholdet mellom grammatikk og stil', 'Bruk fagbegreper fra kapittelet systematisk'],
        solution: 'Analysen skal vise evne til å koble grammatiske observasjoner med stilistiske effekter, og bruke fagterminologien presist.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv fem setninger med ulik kompleksitet (fra enkel til sammensatt) og gjør fullstendig setningsanalyse av hver. Den siste setningen skal inneholde minst én leddsetning, et indirekte objekt og to adverbialer.',
        hints: ['Øk kompleksiteten gradvis', 'Bruk alle setningsleddene du har lært', 'Vis at du behersker både enkle og komplekse setningsstrukturer'],
        solution: 'Besvarelsen bør vise progresjon fra enkel (S-V) til kompleks (med leddsetninger og flere adverbialer), med korrekt analyse av alle ledd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 8.1

**Hovedpunkter:**
- Setningsanalyse handler om å identifisere setningsledd og forstå deres funksjon
- Verbalet er setningens kjerne og forteller hva som skjer
- Subjektet er den/det som handler, objektet er den/det handlingen rammer
- Adverbialer gir tilleggsinformasjon om tid, sted, måte og årsak
- Predikativer beskriver subjektet eller objektet

**Sentrale begreper:**
- **Verbal (V):** Setningens kjerne - handlingen eller tilstanden
- **Subjekt (S):** Den/det som handler eller beskrives
- **Direkte objekt (DO):** Den/det handlingen rammer direkte
- **Indirekte objekt (IO):** Den som mottar noe
- **Adverbial (A):** Tilleggsinfo om tid, sted, måte, årsak
- **Predikativ (P):** Beskrivelse av subjekt eller objekt

**Tips for eksamen:**
- Finn alltid verbalet først - det gjør det lettere å finne de andre leddene
- Bruk spørreteknikken: "Hvem/hva + verbal?" for subjekt, "Hvem/hva + verbal + subjekt?" for objekt
- Husk at verbalet kan bestå av flere ord (hjelpeverb + hovedverb)
- Øv på å skille mellom predikativ (beskriver) og adverbial (omstendighetene)`,
    },
    {
      id: 'norsk-vg1-8-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **8.2 Tekstbinding og sammenheng** – Bruk setningskunnskap for bedre tekstbinding
- **8.3 Rettskriving bokmål** – Kombiner setningsanalyse med rettskriving
- **5.3 Fagartikkel** – Skriv fagartikler med variert setningsstruktur
- **5.4 Skriveprosess og revisjon** – Forbedre setninger i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Tekstbinding og sammenheng
// ============================================================================

export const CHAPTER_NORSK_VG1_8_2: TextbookChapter = {
  id: 'norsk-vg1-8-2',
  courseId: 'norsk-vg1',
  chapterNumber: '8.2',
  title: 'Tekstbinding og sammenheng',
  description: 'Lær hvordan tekster henger sammen gjennom ulike bindeteknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke grammatisk kunnskap til å skape sammenheng i tekst',
    'vurdere og forbedre tekstbinding i egen og andres tekst',
  ],
  content: [
    {
      id: 'norsk-vg1-8-2-intro',
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
      id: 'norsk-vg1-8-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Tekstbinding** | Teknikker som skaper sammenheng mellom setninger |
| **Kohesjon** | Grammatisk og leksikalsk sammenheng i tekst |
| **Konjunksjon** | Bindeord som og, men, eller |
| **Subjunksjon** | Ord som innleder leddsetninger (fordi, hvis) |
| **Referentbinding** | Bruk av pronomen som viser tilbake (han, det) |
| **Tematisk binding** | Å holde fokus på samme tema |
| **Setningsadverbial** | Ord som derfor, dessuten, likevel |
| **Avsnitt** | Del av teksten som handler om ett poeng |`,
    },
    {
      id: 'norsk-vg1-8-2-def-1',
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
      id: 'norsk-vg1-8-2-def-2',
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
      id: 'norsk-vg1-8-2-def-3',
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
      id: 'norsk-vg1-8-2-def-4',
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
      id: 'norsk-vg1-8-2-def-5',
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
      id: 'norsk-vg1-8-2-example-1',
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
      id: 'norsk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-1',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-2',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-3',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-4',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et avsnitt (5-6 setninger) om et selvvalgt tema. Bruk minst tre ulike typer tekstbinding.',
        hints: ['Bruk konjunksjoner/subjunksjoner', 'Bruk pronomen for referanse', 'Hold tematisk fokus', 'Varier ordbruken'],
        solution: 'Avsnittet bør vise bevisst bruk av ulike bindemetoder som skaper god sammenheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-6',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-7',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser den tematiske progresjonen i dette avsnittet og bestem hvilken type det er (konstant tema, lineær progresjon eller overordnet tema):\n\n"Norge er et langstrakt land. Landet strekker seg fra Lindesnes i sør til Nordkapp i nord. Det har en kystlinje på over 25 000 kilometer. Fjordene er blant de mest kjente landskapstrekkene."',
        hints: ['Hva er tema i hver setning?', 'Hvordan utvikler teksten seg?'],
        solution: 'Konstant tema: Norge/landet er tema gjennom hele avsnittet. Referentbinding via "Landet", "Det" og "Fjordene" (del av Norge).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre korte avsnitt (2-3 setninger hver) som viser de tre typene tematisk progresjon: konstant tema, lineær progresjon og overordnet tema.',
        hints: ['Konstant: samme subjekt i alle setninger', 'Lineær: ny info i én setning blir tema i neste', 'Overordnet: flere aspekter av ett hovedtema'],
        solution: 'Hvert avsnitt bør tydelig vise den aktuelle typen tematisk progresjon med bevisst bruk av referentbinding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en avisartikkel eller et essay og gjør en fullstendig analyse av tekstbindingen. Identifiser konjunksjoner, subjunksjoner, referentbinding, tematisk binding og leksikalsk binding. Vurder kvaliteten på tekstbindingen.',
        hints: ['Gå systematisk gjennom avsnitt for avsnitt', 'Marker bindeordene', 'Følg referansekjedene', 'Vurder helhetsinntrykket'],
        solution: 'Analysen skal demonstrere evne til å identifisere og vurdere alle typer tekstbinding i en autentisk tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to versjoner av et avsnitt (150-200 ord) om samme tema: én med bevisst god tekstbinding og én med bevisst dårlig tekstbinding. Forklar forskjellene i en kort kommentar.',
        hints: ['God: varier bindemetoder, bruk pronomen, hold tematisk fokus', 'Dårlig: gjenta ord, mangler bindeord, hopp mellom temaer', 'Kommentaren bør peke på konkrete forskjeller'],
        solution: 'Besvarelsen viser forståelse for tekstbinding ved å kontrastere god og dårlig praksis, og forklare hva som gjør forskjellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 8.2

**Hovedpunkter:**
- Tekstbinding (kohesjon) handler om å skape sammenheng mellom setninger og avsnitt
- Konjunksjoner binder likeverdige ledd (og, men, eller, for)
- Subjunksjoner innleder leddsetninger (fordi, hvis, når, da, at)
- Referentbinding bruker pronomen og demonstrativer for å vise tilbake/fremover
- Tematisk binding holder fokus på tema gjennom teksten

**Sentrale begreper:**
- **Konjunksjon:** Sideordnende bindeord som forbinder likeverdige ledd
- **Subjunksjon:** Underordnende bindeord som innleder leddsetninger
- **Referentbinding:** Bruk av pronomen (han, hun, det) som viser tilbake
- **Tematisk binding:** Å holde fokus på samme tema gjennom teksten
- **Leksikalsk binding:** Ordvalg som skaper sammenheng (synonymer, antonymer)
- **Tema og rema:** Kjent informasjon vs. ny informasjon

**Tips for eksamen:**
- Varier bindemetodene i teksten din - ikke bare bruk "og" og "men"
- Bruk pronomen for å unngå monoton gjentagelse av samme substantiv
- Pass på at pronomener har tydelig referanse - leseren må vite hva "den" viser til
- Les teksten høyt - da hører du om den flyter eller hakker`,
    },
    {
      id: 'norsk-vg1-8-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **8.1 Setningsanalyse** – Forstå setningsstruktur for bedre tekstbinding
- **5.3 Fagartikkel** – Bruk tekstbinding i akademisk skriving
- **5.4 Skriveprosess og revisjon** – Forbedre tekstbinding i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Rettskriving bokmål
// ============================================================================

export const CHAPTER_NORSK_VG1_8_3: TextbookChapter = {
  id: 'norsk-vg1-8-3',
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
      id: 'norsk-vg1-8-3-intro',
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
      id: 'norsk-vg1-8-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Rettskriving** | Regler for hvordan ord skal skrives |
| **Valgfri form** | Skrivemåte som er valgfri innenfor normen |
| **Konsekvent** | Å holde seg til samme form gjennom teksten |
| **Særskriving** | Feil der sammensatte ord skrives i to ord |
| **Tegnsetting** | Regler for komma, punktum, osv. |
| **Homofon** | Ord som uttales likt, men skrives ulikt |
| **Korrektur** | Gjennomgang av tekst for å rette feil |
| **Bokmålsordboka** | Offisiell ordbok for bokmål |`,
    },
    {
      id: 'norsk-vg1-8-3-def-1',
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
      id: 'norsk-vg1-8-3-def-2',
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
      id: 'norsk-vg1-8-3-def-3',
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
      id: 'norsk-vg1-8-3-def-4',
      type: 'definition',
      title: 'Verbbøyning på bokmål',
      content: `**Verbbøyning - de fire hovedformene:**

Norske verb bøyes i fire former:
1. **Infinitiv** (å-form): å kaste, å lese, å gå
2. **Presens** (nåtid): kaster, leser, går
3. **Preteritum** (fortid): kastet, leste, gikk
4. **Perfektum partisipp** (har-form): har kastet, har lest, har gått

**Svake verb (regelmessige):**

| Gruppe | Infinitiv | Presens | Preteritum | Perf. part. |
|--------|-----------|---------|------------|-------------|
| 1 | å kaste | kaster | kastet/kasta | kastet/kasta |
| 2 | å lese | leser | leste | lest |
| 3 | å leve | lever | levde | levd |
| 4 | å bo | bor | bodde | bodd |

**Sterke verb (uregelmessige):**
Sterke verb endrer vokal (vokalveksling):
- å skrive → skriver → skrev → har skrevet
- å finne → finner → fant → har funnet
- å ta → tar → tok → har tatt
- å gå → går → gikk → har gått
- å få → får → fikk → har fått
- å gi → gir → ga/gav → har gitt

**Vanlige feil:**
- ✗ "Jeg skrivde" → ✓ "Jeg skrev"
- ✗ "har gåt" → ✓ "har gått"
- ✗ "Han sat" → ✓ "Han satt"
- ✗ "Jeg har begynte" → ✓ "Jeg har begynt"

**Tips:** Lær de sterke verbene utenat!`,
    },
    {
      id: 'norsk-vg1-8-3-def-5',
      type: 'definition',
      title: 'Substantivbøyning og kjønn',
      content: `**Substantivenes tre kjønn:**

Bokmål har tre kjønn: hankjønn, hunkjønn og intetkjønn.

**Hankjønn (en):**
| Ubestemt entall | Bestemt entall | Ubestemt flertall | Bestemt flertall |
|-----------------|----------------|-------------------|------------------|
| en stol | stolen | stoler | stolene |
| en gutt | gutten | gutter | guttene |

**Hunkjønn (ei/en):**
| Ubestemt entall | Bestemt entall | Ubestemt flertall | Bestemt flertall |
|-----------------|----------------|-------------------|------------------|
| ei/en bok | boka/boken | bøker | bøkene |
| ei/en jente | jenta/jenten | jenter | jentene |

**Intetkjønn (et):**
| Ubestemt entall | Bestemt entall | Ubestemt flertall | Bestemt flertall |
|-----------------|----------------|-------------------|------------------|
| et hus | huset | hus | husene/husa |
| et barn | barnet | barn | barna |

**Hvordan vite kjønnet?**
Det finnes ingen sikker regel, men noen tendenser:
- Levende vesener: ofte hankjønn (gutt, hund)
- Abstrakte begreper: ofte hunkjønn (tid, sol)
- Konkrete ting: ofte intetkjønn (bord, hus)

**Huskeregler:**
- Ord som slutter på -het, -else, -ning, -dom er hunkjønn
- Ord som slutter på -skap, -verk er intetkjønn
- Låneord fra engelsk er ofte hankjønn (en PC, en film)

**Tips:** Sjekk ordboka når du er usikker!`,
    },
    {
      id: 'norsk-vg1-8-3-def-6',
      type: 'definition',
      title: 'Dobbeltkonsonant',
      content: `**Regelen for dobbeltkonsonant:**

**Hovedregel:** Etter kort, trykksterk vokal kommer dobbeltkonsonant.

**Eksempler:**
- **Kort vokal + dobbelt:** takk, fett, vinn, buss, hall
- **Lang vokal + enkel:** tak (taket), fet (feit), vin, hal

**Slik hører du forskjell:**
- "takk" (kort a) vs. "tak" (lang a)
- "sett" (kort e) vs. "set" (lang e)
- "full" (kort u) vs. "ful" (lang u)

**Vanlige feil:**

**1. Verb i preteritum:**
- ✗ "han sat" → ✓ "han satt" (å sitte)
- "de viste" (fortid av vise) - riktig
- "de visste" (fortid av vite) - riktig med -ss-

**2. Adjektiv:**
- "det var fint" (riktig)
- "han er dum" (riktig - lang u)
- "det var vått" (riktig - kort å)

**3. Verb vs. substantiv:**
- "å ta" (verb) vs. "takk" (substantiv)
- "å si" (verb) vs. "sinn" (substantiv)

**Praktisk test:**
Les ordet høyt. Er vokalen kort? → Dobbeltkonsonant
Er vokalen lang? → Enkel konsonant`,
    },
    {
      id: 'norsk-vg1-8-3-def-7',
      type: 'definition',
      title: 'Sammensetninger (sammensatte ord)',
      content: `**Regler for sammensatte ord:**

**Hovedregel:** Sammensatte substantiv skrives i ETT ord på norsk.

**Eksempler:**
- fotball + kamp = **fotballkamp**
- skole + sekk = **skolesekk**
- is + krem = **iskrem**
- sykkel + sti = **sykkelsti**

**Særskrivingsfeil (vanlig feil!):**
- ✗ "fotball kamp" → ✓ "fotballkamp"
- ✗ "is krem" → ✓ "iskrem"
- ✗ "skole sekk" → ✓ "skolesekk"
- ✗ "dør klokke" → ✓ "dørklokke"

**Binde-s og binde-e:**

Noen sammensatte ord har en s eller e mellom leddene:

**Med -s-:**
- arbeids + dag = **arbeidsdag**
- livs + glede = **livsglede**
- kvalitets + sikring = **kvalitetssikring**

**Med -e-:**
- gutte + rom = **gutterom**
- jente + navn = **jentenavn**
- barne + hage = **barnehage**

**Ord som SKAL være to ord:**
Adverbiale uttrykk skrives ofte i to ord:
- **i dag** (ikke "idag")
- **i morgen** (ikke "imorgen")
- **til slutt** (ikke "tilslutt")
- **i stedet** (ikke "istedet")
- **i forveien** (ikke "iforveien")

**Test:** Kan du sette "en/ei/et" foran?
- "en fotballkamp" → ett ord ✓
- "en i dag" → gir ikke mening → to ord ✓`,
    },
    {
      id: 'norsk-vg1-8-3-example-1',
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
      id: 'norsk-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-1',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-2',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-3',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-4',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et avsnitt (100-150 ord) om et selvvalgt tema. Fokuser på riktig rettskriving og tegnsetting.',
        hints: ['Les gjennom teksten flere ganger', 'Sjekk de vanligste feilene', 'Bruk ordbok ved usikkerhet', 'Pass på særskriving og komma'],
        solution: 'Avsnittet bør vise god beherskelse av rettskriving og tegnsetting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-6',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-7',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett alle feilene i denne teksten og forklar hver feil:\n\n"Når Per var liten bodde han i et lite hus. Per\'s mor jobbet på et syke hus. Dem hadde det bra selv om dem ikke hadde mye penger. Idag er Per blitt stor og han liker og tenke tilbake på barndommen sin."',
        hints: ['Se etter da/når, og/å, de/dem, særskriving og apostrof', 'Det er minst 7 feil'],
        solution: 'Rettet: "Da Per var liten, bodde han i et lite hus. Pers mor jobbet på et sykehus. De hadde det bra selv om de ikke hadde mye penger. I dag er Per blitt stor, og han liker å tenke tilbake på barndommen sin." Feil: når→da, manglende komma, Per\'s→Pers, syke hus→sykehus, Dem→De (2x), Idag→I dag, og→å.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-9',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en «rettskrivingsguide» (300-400 ord) for medelever der du forklarer de fem vanligste rettskrivingsfeilene på bokmål. Inkluder eksempler og tips for å unngå feilene.',
        hints: ['Bruk tydelige eksempler', 'Formuler enkle regler', 'Lag «husketips» for de vanskeligste feilene'],
        solution: 'Guiden bør dekke da/når, og/å, de/dem, særskriving og tegnsetting med tydelige forklaringer og praktiske tips.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en tekst du har skrevet tidligere (f.eks. en innlevering). Gå gjennom den systematisk og rett alle rettskrivings- og tegnsettingsfeil. Skriv en kort refleksjon (100-150 ord) om hvilke feil du finner mest, og hva du kan gjøre for å forbedre deg.',
        hints: ['Sjekk systematisk: da/når, og/å, de/dem, særskriving, komma', 'Bruk ordbok for ord du er usikker på', 'Vær ærlig om egne svakheter'],
        solution: 'Refleksjonen bør vise selvinnsikt om egne utfordringer med rettskriving og konkrete strategier for forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy disse verbene i alle fire former (infinitiv, presens, preteritum, perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å skrive',
            solution: 'å skrive - skriver - skrev - har skrevet (sterkt verb)',
          },
          {
            label: 'b',
            task: 'å sitte',
            solution: 'å sitte - sitter - satt - har sittet (sterkt verb)',
          },
          {
            label: 'c',
            task: 'å kaste',
            solution: 'å kaste - kaster - kastet/kasta - har kastet/kasta (svakt verb)',
          },
          {
            label: 'd',
            task: 'å finne',
            solution: 'å finne - finner - fant - har funnet (sterkt verb)',
          },
          {
            label: 'e',
            task: 'å leve',
            solution: 'å leve - lever - levde - har levd (svakt verb)',
          },
        ],
        hints: ['Sterke verb har vokalveksling', 'Svake verb følger faste mønstre'],
        solution: 'Verbbøyning er grunnleggende for korrekt norsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy disse substantivene i alle fire former (ubestemt entall, bestemt entall, ubestemt flertall, bestemt flertall):',
        subTasks: [
          {
            label: 'a',
            task: 'en bil (hankjønn)',
            solution: 'en bil - bilen - biler - bilene',
          },
          {
            label: 'b',
            task: 'ei/en bok (hunkjønn)',
            solution: 'ei/en bok - boka/boken - bøker - bøkene',
          },
          {
            label: 'c',
            task: 'et bord (intetkjønn)',
            solution: 'et bord - bordet - bord - bordene/borda',
          },
          {
            label: 'd',
            task: 'en lærer (hankjønn)',
            solution: 'en lærer - læreren - lærere - lærerne',
          },
        ],
        hints: ['Husk de ulike mønstrene for hvert kjønn'],
        solution: 'Substantivbøyning følger mønster basert på kjønn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett dobbeltkonsonant-feilene i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Han sat på stolen og vente på bussen."',
            solution: '"Han satt på stolen og ventet på bussen." (satt med dobbelt t, ventet med t)',
          },
          {
            label: 'b',
            task: '"Hun har alldri vært i Frankrike før."',
            solution: '"Hun har aldri vært i Frankrike før." (aldri med enkel l)',
          },
          {
            label: 'c',
            task: '"De svømte i det kalde vanet hele sommeren."',
            solution: '"De svømte i det kalde vannet hele sommeren." (vannet med dobbelt n)',
          },
        ],
        hints: ['Les høyt og lytt etter vokallengden'],
        solution: 'Dobbeltkonsonant etter kort vokal er en viktig regel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-15',
        number: '15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse sammensetningene er FEIL skrevet?',
        options: [
          'fotballkamp',
          'sykkel sti',
          'arbeidsdag',
          'barnehage',
        ],
        answer: 1,
        solution: '"sykkel sti" er feil - det skal skrives som ett ord: "sykkelsti". Sammensatte substantiv skrives i ett ord på norsk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-ex-16',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-3-ex-16',
        number: '16',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning har korrekt verbbøyning?',
        options: [
          'Jeg skrivde et brev i går.',
          'Han har gåt til skolen.',
          'De fant pengene under sofaen.',
          'Hun har begynte på leksene.',
        ],
        answer: 2,
        solution: '"De fant pengene under sofaen" er korrekt. Feil i de andre: "skrivde" → "skrev", "gåt" → "gått", "har begynte" → "har begynt".',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-3-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 8.3

**Hovedpunkter:**
- Bokmål har stor valgfrihet mellom former, men du må være konsekvent
- Dobbeltkonsonant kommer etter kort, trykksterk vokal
- Sammensatte substantiv skrives i ETT ord (fotballkamp, ikke fotball kamp)
- Da brukes om fortid/engangshendelser, når om nåtid/gjentakelse
- De er subjekt, dem er objekt (test med vi/oss)

**Sentrale begreper:**
- **Valgfri form:** Skrivemåter som begge er riktige (boka/boken, kastet/kasta)
- **Særskriving:** Feil der sammensatte ord skrives i to ord
- **Dobbeltkonsonant:** Kort vokal = dobbelt konsonant (takk vs. tak)
- **Homofon:** Ord som uttales likt men skrives ulikt (og/å)
- **Konsekvent:** Å holde seg til samme valg gjennom hele teksten

**Tips for eksamen:**
- Bruk Bokmålsordboka (ordbok.uib.no) når du er usikker
- Les korrektur baklengs for å oppdage skrivefeil
- Særskriving er en vanlig feil - sammensatte substantiv er ETT ord
- Lær de sterke verbene utenat (skrive-skrev-skrevet, finne-fant-funnet)
- Husk: og er konjunksjon, å er infinitivsmerke`,
    },
    {
      id: 'norsk-vg1-8-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **8.4 Rettskriving nynorsk** – Lær rettskriving på sidemålet
- **8.5 Tegnsetting** – Kombiner med riktig tegnsetting
- **8.1 Setningsanalyse** – Forstå grammatikken bak reglene
- **5.4 Skriveprosess og revisjon** – Sjekk rettskriving i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Rettskriving nynorsk
// ============================================================================

export const CHAPTER_NORSK_VG1_8_4: TextbookChapter = {
  id: 'norsk-vg1-8-4',
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
      id: 'norsk-vg1-8-4-intro',
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
      id: 'norsk-vg1-8-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Nynorsk** | Norsk skriftspråk basert på norske dialekter |
| **Landsmål** | Nynorskens opprinnelige navn |
| **Hunkjønn** | Grammatisk kjønn (ei, -a) - obligatorisk i nynorsk |
| **Kløyvd infinitiv** | Å bruke både -e og -a i infinitiv |
| **Nynorskordboka** | Offisiell ordbok for nynorsk |
| **Bokmålsord** | Ord som ikke finnes i nynorsk |
| **Dativ** | Gammel kasusform som fortsatt finnes i dialekter |
| **Sidemål** | Den andre målformen i norskopplæringen |`,
    },
    {
      id: 'norsk-vg1-8-4-def-1',
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
      id: 'norsk-vg1-8-4-def-2',
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
      id: 'norsk-vg1-8-4-def-3',
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
      id: 'norsk-vg1-8-4-def-4',
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
      id: 'norsk-vg1-8-4-def-5',
      type: 'definition',
      title: 'A-endingar vs. e-endingar i nynorsk',
      content: `**Valgfrihet i nynorsk - velg konsekvent!**

Nynorsk har valgfrihet mellom a-endingar og e-endingar i flere tilfelle. Du kan velje, men må vere konsekvent.

**1. Infinitiv:**
Du kan velje mellom -a og -e:
- å kaste / å kasta
- å lese / å lesa
- å skrive / å skriva

**Tips:** Velg EIN form og hald deg til den gjennom heile teksten.

**2. Svake verb i preteritum:**
- kasta / kaste (fortid av å kaste)
- hoppa / hoppe (fortid av å hoppe)

**3. Hunkjønnsord i bestemt form:**
- boka / boki (eldre form)
- jenta / jenti (eldre form)
**Anbefaling:** Bruk a-endingar, dei er vanlegast.

**4. Sterke verb - perfektum partisipp:**
- har skrive / har skrevet
- har funne / har funnet
- har teke / har tatt
**Anbefaling:** Bruk dei tradisjonelle formene (skrive, funne, teke).

**Kva er vanlegast?**
A-infinitiv (å kasta) er den mest utbreidde forma i dialektane og blir ofte sett på som meir "ekte" nynorsk. E-infinitiv (å kaste) ligg nærare bokmål.

**Strategiar:**
- Kjennslebasert: Velg det som føles naturleg
- Dialektbasert: Bruk former frå eigen dialekt
- Tradisjonelt: Velg a-former for "sterkare" nynorsk`,
    },
    {
      id: 'norsk-vg1-8-4-def-6',
      type: 'definition',
      title: 'Verb på nynorsk - former du må kunne',
      content: `**Viktige verbformer på nynorsk:**

**Hjelpeverb:**
| Bokmål | Nynorsk infinitiv | Presens | Preteritum | Perfektum |
|--------|-------------------|---------|------------|-----------|
| å være | å vere/vera | er | var | har vore |
| å ha | å ha | har | hadde | har hatt |
| å bli | å bli/verte | blir/vert | vart/blei | har vorte/blitt |
| å kunne | å kunne/kunna | kan | kunne | har kunna |
| å ville | å vilje/ville | vil | ville | har vilja |
| å skulle | å skulle/skulla | skal | skulle | har skulla |

**Vanlege sterke verb:**
| Bokmål | Nynorsk infinitiv | Presens | Preteritum | Perfektum |
|--------|-------------------|---------|------------|-----------|
| å komme | å kome/koma | kjem | kom | har kome |
| å ta | å ta | tek | tok | har teke |
| å gå | å gå | går | gjekk | har gått |
| å se | å sjå | ser | såg | har sett |
| å gi | å gje/gi | gjev/gir | gav | har gjeve/gitt |
| å stå | å stå | står | stod | har stått |
| å få | å få | får | fekk | har fått |

**Særleg viktige forskjellar:**
- "kommer" → "kjem" (ikkje "kommer"!)
- "ser" → "ser" (same på begge målformer)
- "gjør" → "gjer" (ikkje "gjør"!)
- "tar" → "tek" (ikkje "tar"!)

**Tips:** Desse verba er obligatoriske å kunne - dei kan ikkje oversettast direkte frå bokmål!`,
    },
    {
      id: 'norsk-vg1-8-4-example-1',
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
      id: 'norsk-vg1-8-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ivar Aasen – «Nordmannen» (1863)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-8-4-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_AASEN_NORDMANNEN}`,
        },
      ],
    },
    // Primærtekst: Arne Garborg - Haugtussa (utdrag)
    {
      id: 'norsk-vg1-8-4-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – «Haugtussa» (utdrag, 1895)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-8-4-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_GARBORG_HAUGTUSSA_UTDRAG}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-1',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-2',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-3',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-4',
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
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort avsnitt (100-150 ord) på nynorsk om en hobby eller interesse du har.',
        hints: ['Bruk nynorskordboka aktivt', 'Sjekk pronomen og spørreord', 'Les gjennom og se etter bokmålsfeil', 'Vær konsekvent i formvalg'],
        solution: 'Avsnittet bør vise korrekt nynorsk med riktige ordformer og bøyninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-6',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-7',
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
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten «Nordmannen» av Ivar Aasen. Identifiser minst fem ord eller uttrykk som skiller seg fra moderne nynorsk, og forklar forskjellene.',
        hints: ['Sammenlign med moderne nynorskordbok', 'Se på bøyningsformer og ordvalg', 'Aasen brukte eldre former enn det som er vanlig i dag'],
        solution: 'Analysen bør vise forståelse for at nynorsk har utviklet seg siden Aasens tid, med konkrete eksempler på endringer i ordformer og bøyning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Garborgs «Haugtussa». Skriv en kort analyse (100-150 ord) av språket. Hva kjennetegner Garborgs nynorsk?',
        hints: ['Se på ordvalg og billedbruk', 'Sammenlign med Aasens språk', 'Legg merke til rytme og klang'],
        solution: 'Analysen bør kommentere Garborgs poetiske nynorsk, bruk av billedspråk, rytme, og hvordan språket skiller seg fra moderne nynorsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en sammenhengende tekst (250-350 ord) på nynorsk om temaet «Kva betyr språk for identitet?». Bruk gjerne eksempler fra nynorskens historie eller din egen erfaring.',
        hints: ['Planlegg teksten før du begynner', 'Bruk nynorskordboka aktivt', 'Les gjennom og sjekk for bokmålsfeil', 'Vis at du kan skrive sammenhengende nynorsk'],
        solution: 'Teksten skal vise god nynorsk språkføring med korrekt grammatikk, riktige ordformer og sammenhengende argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft (på bokmål eller nynorsk, 400-500 ord): Bør alle norske elever lære å skrive både bokmål og nynorsk? Bruk argumenter fra språkhistorie, identitet og praktiske hensyn.',
        hints: ['Presenter argumenter for og mot', 'Bruk kunnskap fra kapittelet om nynorskens bakgrunn', 'Ta et tydelig standpunkt, men vis nyansering'],
        solution: 'Drøftingen bør vise forståelse for nynorskens rolle i norsk språkhistorie og kultur, og presentere balanserte argumenter med et begrunnet standpunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bøy desse verba på nynorsk (infinitiv - presens - preteritum - perfektum):',
        subTasks: [
          {
            label: 'a',
            task: 'å vere',
            solution: 'å vere/vera - er - var - har vore',
          },
          {
            label: 'b',
            task: 'å ta',
            solution: 'å ta - tek - tok - har teke',
          },
          {
            label: 'c',
            task: 'å sjå',
            solution: 'å sjå - ser - såg - har sett',
          },
          {
            label: 'd',
            task: 'å gje/gi',
            solution: 'å gje/gi - gjev/gir - gav - har gjeve/gitt',
          },
        ],
        hints: ['Bruk nynorskordboka om du er usikker', 'Sterke verb har vokalveksling'],
        solution: 'Verbbøyning på nynorsk skil seg ofte frå bokmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-13',
        number: '13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Kva er riktig nynorsk for "Hvordan har du det?"',
        options: [
          'Korleis har du det?',
          'Hvordan har du det?',
          'Kordan har du det?',
          'Koss har du det?',
        ],
        answer: 0,
        solution: '"Korleis har du det?" er riktig nynorsk. "Hvordan" er bokmål og skal ikkje brukast på nynorsk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omset desse setningane til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"De tar bussen til skolen hver dag."',
            solution: '"Dei tek bussen til skulen kvar dag."',
          },
          {
            label: 'b',
            task: '"Hun gjør leksene sine før hun går ut."',
            solution: '"Ho gjer leksene sine før ho går ut."',
          },
          {
            label: 'c',
            task: '"Hva synes du om filmen vi så i går?"',
            solution: '"Kva synest du om filmen vi såg i går?"',
          },
          {
            label: 'd',
            task: '"De visste ikke hvorfor han ikke kom."',
            solution: '"Dei visste ikkje kvifor han ikkje kom."',
          },
        ],
        hints: ['Pass på pronomen, spørjeord og verb', 'Bruk nynorskordboka'],
        solution: 'Omsetjing til nynorsk krev at du kjenner dei viktigaste forskjellane.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv ein kort tekst (150-200 ord) på nynorsk om temaet "Min favorittaktivitet". Pass på å bruke riktige nynorskformer og unngå bokmålsord.',
        hints: ['Planlegg teksten før du byrjar', 'Bruk nynorskordboka aktivt', 'Sjekk spørjeord, pronomen og verb', 'Les gjennom og sjekk for bokmålsord'],
        solution: 'Teksten bør vise god nynorsk språkføring utan bokmålsfeil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-ex-16',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-4-ex-16',
        number: '16',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Kva betyr det å velje mellom a-infinitiv og e-infinitiv i nynorsk?',
        options: [
          'Du kan velje mellom "å kaste" og "å kasta", men må vere konsekvent',
          'A-infinitiv er alltid feil på nynorsk',
          'E-infinitiv er den einaste godkjende forma',
          'Det er ingen forskjell mellom formene',
        ],
        answer: 0,
        solution: 'Nynorsk har valfridom mellom a-infinitiv (å kasta) og e-infinitiv (å kaste). Begge er riktige, men du må vere konsekvent gjennom heile teksten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 8.4

**Hovedpunkter:**
- Nynorsk er et eget språk med egen grammatikk, ikke "bokmål med a-endelser"
- Hunkjønn er obligatorisk i nynorsk (ei bok - boka)
- Mange ord er helt forskjellige: ikkje, kva, kven, kvar, korleis, kvifor, ho, noko, mykje
- A-infinitiv og e-infinitiv er begge tillatt, men vær konsekvent
- Les nynorsk aktivt for å bli bedre - Nynorskordboka er din beste venn

**Sentrale begreper:**
- **Obligatorisk hunkjønn:** Nynorsk skiller alltid mellom de tre kjønnene
- **A-infinitiv/e-infinitiv:** Valgfrihet mellom å kasta/å kaste
- **Bokmålsord:** Ord som ikke finnes i nynorsk (f.eks. "ikke", "hva", "hun")
- **Kløyvd infinitiv:** Å bruke både -e og -a i infinitiv etter bestemte regler
- **Sidemål:** Den andre målformen i norskopplæringen

**Tips for eksamen:**
- Sjekk alltid disse ordene: ikkje, kva, kven, kvar, korleis, kvifor, ho, noko, mykje, berre
- Bruk Nynorskordboka aktivt (ordbok.uib.no)
- Tenk nynorsk fra starten - ikke skriv på bokmål og "oversett"
- Velg former (a- eller e-infinitiv) og hold deg til dem gjennom hele teksten
- Les nynorske tekster jevnlig for å bli tryggere på språket`,
    },
    {
      id: 'norsk-vg1-8-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **8.3 Rettskriving bokmål** – Sammenlign med bokmålsregler
- **4.3 Nynorsk og bokmål** – Forstå forskjellene mellom målformene
- **8.5 Tegnsetting** – Tegnsetting er lik på begge målformer
- **5.4 Skriveprosess og revisjon** – Sjekk nynorsk i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Flerkulturell litteratur i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_3_1: TextbookChapter = {
  id: 'norsk-vg1-3-1',
  courseId: 'norsk-vg1',
  chapterNumber: '3.1',
  title: 'Flerkulturell litteratur i Norge',
  description: 'Utforsk norsk litteratur av forfattere med innvandrerbakgrunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster som utforsker kulturmøter og identitet',
    'reflektere over hvordan litteratur speiler samfunnet',
  ],
  content: [
    {
      id: 'norsk-vg1-3-1-intro',
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
      id: 'norsk-vg1-3-1-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Flerkulturell** | Som omfatter flere kulturer |
| **Hybrididentitet** | Identitet som kombinerer elementer fra flere kulturer |
| **Kulturmøte** | Møte mellom ulike kulturer og tradisjoner |
| **Migrasjonslitteratur** | Litteratur som handler om flytting mellom land |
| **Diaspora** | Folk som lever utenfor sitt opprinnelige hjemland |
| **Representasjon** | Hvordan grupper fremstilles i litteratur og medier |
| **Andregenerasjon** | Barn av innvandrere født i det nye landet |
| **Kodeveksling** | Å veksle mellom ulike språk eller dialekter |`,
    },
    {
      id: 'norsk-vg1-3-1-def-1',
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
      id: 'norsk-vg1-3-1-def-2',
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
      id: 'norsk-vg1-3-1-def-3',
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
      id: 'norsk-vg1-3-1-def-4',
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
      id: 'norsk-vg1-3-1-example-1',
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
      id: 'norsk-vg1-3-1-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Knut Hamsun – «Sult» (åpning, 1890)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-1-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_HAMSUN_SULT_AAPNING}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-1',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-2',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-3',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et utdrag eller en hel tekst av en av forfatterne nevnt i kapittelet og gjør en kort analyse.',
        hints: ['Velg en tekst fra pensum eller biblioteket', 'Se på temaer: identitet, tilhørighet, språk', 'Analyser språklige virkemidler', 'Knytt til samfunnet'],
        solution: 'Analysen bør identifisere temaer, analysere språk og virkemidler, og reflektere over tekstens betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Hvorfor er det viktig at norsk litteratur inkluderer stemmer fra ulike bakgrunner?',
        hints: ['Tenk på representasjon', 'Tenk på hvem som leser', 'Tenk på hva litteratur kan gjøre', 'Tenk på samfunnsendringer'],
        solution: 'Drøftingen bør ta opp representasjon, at lesere kan kjenne seg igjen, at litteratur kan utvide forståelse, og at litteraturen bør speile et mangfoldig samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-6',
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
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-7',
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
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les åpningen av Hamsuns «Sult» (primærteksten). Analyser hovedpersonen som en outsider-figur. Hvordan opplever han utenforskapet? Hvilke virkemidler bruker Hamsun for å formidle denne opplevelsen?',
        hints: ['Se på fortellerperspektivet (jeg-form)', 'Legg merke til fysiske og psykiske beskrivelser', 'Tenk på forholdet mellom individ og samfunn'],
        solution: 'Analysen bør peke på at hovedpersonen i «Sult» er en outsider på grunn av fattigdom og sult. Hamsun bruker jeg-forteller, stream of consciousness-aktig stil, og intense sanseinntrykk for å formidle utenforskapet innenfra. Hovedpersonen er isolert fra samfunnet rundt seg, og sulten blir en metafor for eksistensiell fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-9',
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
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Hvordan representerer litteraturen kulturmøter? Bruk eksempler fra minst to tekster eller forfattere du har lest. Drøft hvordan litteraturen kan bidra til forståelse mellom kulturer, og diskuter eventuelle begrensninger.',
        hints: ['Bruk fagbegreper som hybrididentitet, tredje rom, representasjon', 'Trekk inn konkrete eksempler fra tekstene', 'Diskuter litteraturens muligheter og begrensninger', 'Knytt til samfunnskontekst'],
        solution: 'Essayet bør demonstrere evne til å drøfte litteraturens rolle i kulturmøter, med konkrete eksempler som viser hvordan språk, perspektiv og form bidrar til forståelse. Drøftingen bør også reflektere over litteraturens begrensninger (hvem forteller, hvem leser, representasjon vs. virkelighet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en norsk forfatter med flerkulturell bakgrunn (f.eks. Zeshan Shakar, Maria Navarro Skaranger, Gulraiz Sharif, Sumaya Jirde Ali eller en annen). Undersøk og presenter forfatterskapet:\n\na) Kort biografi og bakgrunn.\nb) Hovedtemaer i forfatterskapet.\nc) Analyser et utdrag eller en hel tekst.\nd) Vurder forfatterens betydning for norsk litteratur.',
        hints: ['Bruk biblioteket og pålitelige kilder', 'Les minst ett utdrag fra forfatterens verk', 'Bruk fagbegreper fra kapittelet i analysen', 'Vurder representasjon og stemmer i norsk litteratur'],
        solution: 'Presentasjonen bør vise selvstendig research, evne til litterær analyse med fagbegreper, og refleksjon over forfatterens plass i norsk litteraturhistorie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.1

**Hovedpunkter:**
- Flerkulturell litteratur utforsker kulturmøter, migrasjon og identitet mellom kulturer
- Viktige forfattere: Maria Navarro Skaranger, Zeshan Shakar, Gulraiz Sharif, Sumaya Jirde Ali
- Hybrididentitet kombinerer elementer fra flere kulturer til noe nytt
- Språklig nyskapning er et kjennetegn - f.eks. Oslo-slang med innslag av flere språk
- Litteraturen gir stemme til erfaringer som tidligere har manglet i norsk litteratur

**Sentrale begreper:**
- **Hybrididentitet:** Identitet som kombinerer elementer fra flere kulturer
- **Kulturmøte:** Møte mellom ulike kulturer og tradisjoner
- **Kodeveksling:** Å veksle mellom ulike språk eller dialekter
- **Andregenerasjon:** Barn av innvandrere født i det nye landet
- **Diaspora:** Folk som lever utenfor sitt opprinnelige hjemland
- **Representasjon:** Hvordan grupper fremstilles i litteratur og medier

**Tips for eksamen:**
- Bruk begrepene hybrididentitet, kulturmøte og kodeveksling når du analyserer tekster
- Vær oppmerksom på hvordan språket brukes som identitetsmarkør
- Se etter temaer som tilhørighet, utenforskap, generasjonskonflikter
- Reflekter over hvem som forteller og fra hvilket perspektiv`,
    },
    {
      id: 'norsk-vg1-3-1-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **3.2 Kulturmøter og identitet** – Analyser tekster med postkolonial teori
- **4.1 Språk og identitet** – Forstå språkets rolle for kulturell identitet
- **2.1 Novelleanalyse** – Analyser flerkulturelle noveller
- **2.4 Romananalyse** – Analyser flerkulturelle romaner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Kulturmøter og identitet i tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_3_2: TextbookChapter = {
  id: 'norsk-vg1-3-2',
  courseId: 'norsk-vg1',
  chapterNumber: '3.2',
  title: 'Kulturmøter og identitet i tekster',
  description: 'Lær å lese tekster med et kulturkritisk blikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese tekster med et kritisk og kulturelt perspektiv',
    'reflektere over representasjon og stereotypier i tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-3-2-intro',
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
      id: 'norsk-vg1-3-2-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Postkolonialisme** | Teori som analyserer ettervirkninger av kolonialisme |
| **Orientalisme** | Vestlige fremstillinger av "Østen" som eksotisk/annerledes |
| **Den andre** | Fremstilling av folk som fundamentalt annerledes |
| **Stereotypi** | Forenklet, generalisert bilde av en gruppe |
| **Representasjon** | Hvordan grupper fremstilles i tekster |
| **Definisjonsmakt** | Makt til å bestemme hva som er "normalt" |
| **Eurosentrisme** | Å se verden fra et europeisk ståsted |
| **Kolonialisme** | System der ett land dominerer et annet |`,
    },
    {
      id: 'norsk-vg1-3-2-def-1',
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
      id: 'norsk-vg1-3-2-def-2',
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
      id: 'norsk-vg1-3-2-def-3',
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
      id: 'norsk-vg1-3-2-def-4',
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
      id: 'norsk-vg1-3-2-bjornson',
      type: 'note',
      title: 'Bjørnstjerne Bjørnson og det internasjonale engasjementet',
      content: `Bjørnstjerne Bjørnson (1832-1910) er kjent som nasjonalpoeten, men han var også en internasjonalt engasjert skikkelse. Bjørnson engasjerte seg i kampen for undertrykte folk i Europa og kritiserte stormaktenes imperialisme. Han støttet blant annet slovakenes kamp mot magyarisering og dreyfusardenes sak i Frankrike. Bjørnsons internasjonale engasjement viser at norske forfattere allerede på 1800-tallet forholdt seg til spørsmål om makt, rettferdighet og representasjon på tvers av kulturer. Samtidig er det verdt å merke seg at selv Bjørnson, som kjempet for rettferdighet, var preget av sin tids syn på andre kulturer og sivilisasjoner.`,
    },
    {
      id: 'norsk-vg1-3-2-example-1',
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
      id: 'norsk-vg1-3-2-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – «Peer Gynt» (Marokko-scenen)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-2-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_IBSEN_PEER_GYNT_MAROKKO}`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-1',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-2',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-3',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft: Hvordan kan vi lese eldre tekster som har problematiske fremstillinger?',
        hints: ['Tenk på historisk kontekst', 'Kan vi kritisere og verdsette samtidig?', 'Hva er forskjellen på kritikk og sensur?', 'Hva kan vi lære av problematiske tekster?'],
        solution: 'Drøftingen bør ta opp kontekstualisering, kritisk lesning, verdien av å forstå historien, og forskjellen på kritikk og sensur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (200-250 ord) av hvordan en kultur fremstilles i en selvvalgt tekst, film eller medietekst.',
        hints: ['Bruk postkoloniale begreper', 'Analyser perspektiv og representasjon', 'Se etter stereotypier', 'Vurder maktforhold'],
        solution: 'Analysen bør vise bruk av postkoloniale begreper og evne til å identifisere mønstre i representasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-6',
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
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-7',
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
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Ibsens «Peer Gynt» (Marokko-scenen). Analyser scenene gjennom en postkolonial linse:\n\na) Hvordan fremstiller Ibsen møtet mellom Peer Gynt og den ikke-europeiske kulturen?\nb) Hvilke stereotypier eller orientalistiske trekk finner du?\nc) Kan Ibsen leses som en som ironiserer over Peer Gynts holdninger, eller reproduserer han dem? Begrunn.',
        hints: ['Hvem har perspektivet?', 'Hvordan beskrives de andre karakterene?', 'Hva er Peers holdning?', 'Husk å vurdere historisk kontekst'],
        solution: 'Analysen bør identifisere orientalistiske trekk i Ibsens fremstilling (eksotifisering, Peer som overlegent subjekt), diskutere perspektiv og maktforhold, og reflektere over om Ibsen ironiserer over eller reproduserer disse holdningene. Ibsens intensjon kan leses som satirisk - Peer er en anti-helt som parodierer vestlig selvovervurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksempler på orientalisme i norsk kulturhistorie. Undersøk minst to av disse områdene:\n\na) Norsk misjonslitteratur og bilder fra misjonsarbeid\nb) Reiseskildringer fra 1800-tallet (f.eks. Jonas Lie, Bjørnson)\nc) Norsk reklame eller populærkultur (film, tegneserier, musikk)\nd) Lærebøker i skolen (historiske eksempler)',
        hints: ['Bruk biblioteket eller digitale arkiver', 'Beskriv konkrete eksempler', 'Analyser med postkoloniale begreper'],
        solution: 'Besvarelsen bør inneholde konkrete eksempler der norsk kultur har fremstilt andre kulturer stereotypt, med analyse av orientalistiske trekk og refleksjon over historisk kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Makt, representasjon og «den andre» i norsk litteratur.\n\nDrøft hvordan norsk litteratur har fremstilt fremmede kulturer gjennom tidene. Bruk begrepene «den andre», orientalisme, definisjonsmakt og representasjon systematisk. Ta utgangspunkt i minst to konkrete tekster, hvorav minst en fra pensum.',
        hints: ['Bygg opp essayet med innledning, hoveddel og avslutning', 'Bruk postkoloniale fagbegreper aktivt', 'Vis at du kan balansere kritikk med historisk kontekstualisering', 'Ta et tydelig standpunkt og begrunn det'],
        solution: 'Essayet skal demonstrere evne til systematisk postkolonial tekstanalyse, bruk av relevante fagbegreper, og vise at eleven kan balansere kritisk lesning med historisk kontekstualisering. Det bør inneholde konkrete teksteksempler og en selvstendig drøfting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en klassisk norsk tekst som fremstiller fremmede kulturer (f.eks. Ibsens «Peer Gynt», eventyr, misjonslitteratur, reiseskildringer). Sammenlign denne fremstillingen med et moderne perspektiv:\n\na) Analyser den klassiske teksten med postkoloniale begreper.\nb) Finn en moderne tekst eller stemme (f.eks. en flerkulturell forfatter, en debattant, en forsker) som gir et annet perspektiv på samme tema.\nc) Sammenlign de to: Hva har endret seg i måten vi fremstiller og forstår andre kulturer? Hva kan vi lære av å lese de to tekstene sammen?',
        hints: ['Velg tekster som lar seg sammenligne tematisk', 'Bruk postkoloniale begreper systematisk', 'Vis at du forstår historisk endring', 'Reflekter over hva kritisk lesning kan bidra med'],
        solution: 'Besvarelsen bør vise evne til å analysere både en klassisk og en moderne tekst med postkoloniale begreper, og demonstrere forståelse for hvordan representasjon av andre kulturer har endret seg over tid. Sammenligningen bør være konkret og nyansert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.2

**Hovedpunkter:**
- Postkolonial teori gir verktøy for å analysere hvordan kulturer fremstilles i tekster
- "Den andre" fremstilles ofte som eksotisk, primitiv, farlig eller underlegen
- Orientalisme er Vestens stereotype fremstilling av "Østen"
- Hvem som forteller (perspektiv) og hvem som har definisjonsmakt er sentrale spørsmål
- Kritisk lesning betyr bevissthet, ikke sensur - gamle tekster kan ha verdi selv med problematiske elementer

**Sentrale begreper:**
- **Postkolonialisme:** Teori som analyserer ettervirkninger av kolonialisme
- **Den andre (The Other):** Fremstilling av folk som fundamentalt annerledes
- **Orientalisme:** Vestlige, ofte stereotype fremstillinger av Østen
- **Stereotypi:** Forenklet, generalisert bilde av en gruppe
- **Definisjonsmakt:** Makt til å bestemme hva som er "normalt"
- **Eurosentrisme:** Å se verden fra et europeisk ståsted

**Tips for eksamen:**
- Still kritiske spørsmål: Hvem forteller? Fra hvilket perspektiv? Hvem har stemme?
- Se etter stereotypier og generaliseringer i teksten
- Vurder kontekst - når ble teksten skrevet og hvilke holdninger var vanlige?
- Bruk begrepene fra postkolonial teori systematisk i analysen
- Balanser kritikk med anerkjennelse av tekstens andre kvaliteter`,
    },
    {
      id: 'norsk-vg1-3-2-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **3.1 Flerkulturell litteratur** – Les samtidsforfattere med flerkulturell bakgrunn
- **4.1 Språk og identitet** – Forstå språkets rolle i kulturmøter
- **3.3 Samisk litteratur** – Utforsk urfolksperspektiver i norsk kontekst
- **2.4 Romananalyse** – Analyser romaner med fokus på kulturmøter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Tegnsetting
// ============================================================================

export const CHAPTER_NORSK_VG1_8_5: TextbookChapter = {
  id: 'norsk-vg1-8-5',
  courseId: 'norsk-vg1',
  chapterNumber: '8.5',
  title: 'Tegnsetting',
  description: 'Mestre regler for komma, punktum, kolon og andre skilletegn.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke korrekt tegnsetting i egne tekster',
    'vurdere og forbedre tegnsetting i andres tekster',
    'forstå sammenhengen mellom tegnsetting og tekstens mening',
  ],
  content: [
    {
      id: 'norsk-vg1-8-5-intro',
      type: 'text',
      content: `## Hvorfor er tegnsetting viktig?

Tegnsetting er ikke bare regler å følge - det er et verktøy for å gjøre teksten din tydelig og lettlest. Riktig tegnsetting hjelper leseren å forstå hva du mener.

**Sammenlign:**
- "La oss spise bestemor!" vs. "La oss spise, bestemor!"
- "Hun likte ikke læreren sa han" vs. "Hun likte ikke, læreren sa han." vs. "Hun likte ikke læreren, sa han."

**Tegnsetting påvirker:**
- Meningen i setningen
- Rytmen og flyten i teksten
- Hvordan teksten leses høyt
- Leserens forståelse

**I dette kapittelet lærer du:**
- Punktum, spørsmålstegn og utropstegn
- Alle kommareglene
- Kolon og semikolon
- Tankestrek og bindestrek
- Anførselstegn og sitater
- Apostrof og forkortelser

**Tips:** Les teksten din høyt. Der du naturlig tar en pause, skal det ofte være et tegn.`,
    },
    {
      id: 'norsk-vg1-8-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Punktum** | Skilletegn som avslutter en fullstendig setning |
| **Komma** | Skilletegn som skiller ledd i setningen |
| **Kolon** | Tegn som innleder forklaring, sitat eller liste |
| **Semikolon** | Tegn mellom selvstendige setninger som henger sammen |
| **Tankestrek** | Lang strek som markerer innklipp eller pause |
| **Bindestrek** | Kort strek som binder ord sammen |
| **Anførselstegn** | Tegn rundt sitater og direkte tale |
| **Apostrof** | Tegn som viser utelatt bokstav |`,
    },
    {
      id: 'norsk-vg1-8-5-def-1',
      type: 'definition',
      title: 'Punktum, spørsmålstegn og utropstegn',
      content: `**Punktum (.)**

Punktum avslutter en fullstendig setning.

**Eksempler:**
- "Han gikk hjem."
- "Boken var spennende."
- "Det regner ute."

**Husk:**
- Punktum etter forkortelser: f.eks., bl.a., osv.
- IKKE punktum etter overskrifter
- IKKE punktum etter tall i lister (1, 2, 3 - ikke 1., 2., 3. hvis det ikke er oppramsingsliste)

---

**Spørsmålstegn (?)**

Brukes etter direkte spørsmål.

**Eksempler:**
- "Kommer du i morgen?"
- "Hva heter du?"
- "Er det sant?"

**Husk:**
- IKKE spørsmålstegn etter indirekte spørsmål: "Hun lurte på om han kom." (punktum)
- Retoriske spørsmål har spørsmålstegn: "Er ikke det rart?"

---

**Utropstegn (!)**

Uttrykker sterke følelser, ordre eller utrop.

**Eksempler:**
- "Stopp!"
- "For en fantastisk dag!"
- "Kom deg vekk herfra!"

**Husk:**
- Bruk utropstegn med måte - for mange gjør teksten slitsom å lese
- Aldri mer enn ett utropstegn (!!! er feil)`,
    },
    {
      id: 'norsk-vg1-8-5-def-2',
      type: 'definition',
      title: 'Kommareglene - del 1',
      content: `**Hovedregel:** Komma markerer pauser og skiller setningsledd fra hverandre.

**1. Komma ved oppramsing:**
Sett komma mellom ledd i en oppramsing.

**Eksempler:**
- "Jeg kjøpte epler, bananer, appelsiner og druer."
- "Han er snill, morsom og klok."
- "Vi leste, spiste og sov."

**Husk:** IKKE komma foran "og" i norsk (i motsetning til engelsk).

---

**2. Komma foran leddsetning:**
Sett komma foran setninger som begynner med subjunksjoner (at, som, fordi, hvis, når, da, mens, selv om, osv.).

**Eksempler:**
- "Jeg kommer, hvis det ikke regner."
- "Hun visste, at han hadde rett."
- "De gikk hjem, fordi det var sent."
- "Han leste boken, mens hun lagde mat."

**Unntak:** Når leddsetningen kommer FØRST, er komma valgfritt:
- "Hvis det regner(,) blir jeg hjemme."
- "Da han kom hjem(,) var alle gått."

---

**3. Komma ved innskudd:**
Sett komma rundt innskutte ledd.

**Eksempler:**
- "Kari, som er min beste venn, kommer i morgen."
- "Han var, tross alt, en god mann."
- "Mannen, ifølge vitner, løp sin vei."`,
    },
    {
      id: 'norsk-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning har riktig tegnsetting?',
        options: [
          { id: 'a', text: 'Han sa at, han ville komme.', isCorrect: false },
          { id: 'b', text: 'Han sa, at han ville komme.', isCorrect: true },
          { id: 'c', text: 'Han, sa at han ville komme.', isCorrect: false },
          { id: 'd', text: 'Han sa at han, ville komme.', isCorrect: false },
        ],
        solution: 'Komma settes foran "at" når det innleder en leddsetning. "Han sa, at han ville komme." er korrekt. Alternativt kan komma utelates helt: "Han sa at han ville komme."',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-def-3',
      type: 'definition',
      title: 'Kommareglene - del 2',
      content: `**4. Komma ved tiltale og utropsord:**

**Eksempler:**
- "Kari, kan du hjelpe meg?"
- "Ja, det kan jeg."
- "Nei, det tror jeg ikke."
- "Hei, hvordan går det?"

---

**5. Komma ved motsatte ledd:**
Sett komma mellom ledd som står i motsetning til hverandre.

**Eksempler:**
- "Hun ville gå, men han ville bli."
- "Det var ikke deg, det var meg."
- "Jo flere vi er sammen, jo gladere blir vi."

---

**6. Komma foran sideordnende konjunksjoner med nytt subjekt:**
Sett komma foran "og", "eller", "men", "for" når det kommer ny setning med nytt subjekt.

**Eksempler:**
- "Han gikk hjem, og hun ble igjen." (to subjekter: han, hun)
- "Vil du ha kaffe, eller foretrekker du te?" (du = samme subjekt, men spørsmål)

**Men IKKE:**
- "Han gikk hjem og la seg." (samme subjekt: han)
- "Hun lo og gråt." (samme subjekt: hun)

---

**7. Komma ved datering og adresse:**

**Eksempler:**
- "Oslo, 15. mars 2024"
- "Storgata 15, 0123 Oslo"`,
    },
    {
      id: 'norsk-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når skal du sette komma foran "og"?',
        options: [
          { id: 'a', text: 'Alltid', isCorrect: false },
          { id: 'b', text: 'Aldri', isCorrect: false },
          { id: 'c', text: 'Når det kommer en ny setning med nytt subjekt', isCorrect: true },
          { id: 'd', text: 'Bare i oppramsinger', isCorrect: false },
        ],
        solution: 'Komma settes foran "og" når det kommer en ny selvstendig setning med nytt subjekt: "Han gikk hjem, og hun ble igjen." Men ikke: "Han gikk hjem og la seg." (samme subjekt)',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn riktig tegnsetting.',
        subTasks: [
          {
            label: 'a',
            task: 'Hun kjøpte epler bananer og appelsiner',
            solution: 'Hun kjøpte epler, bananer og appelsiner.',
          },
          {
            label: 'b',
            task: 'Kommer du i morgen spurte han',
            solution: '«Kommer du i morgen?» spurte han. (eller: Kommer du i morgen? spurte han.)',
          },
          {
            label: 'c',
            task: 'Kari som bor i Oslo er min venninne',
            solution: 'Kari, som bor i Oslo, er min venninne.',
          },
          {
            label: 'd',
            task: 'Han ville gå men hun ville bli',
            solution: 'Han ville gå, men hun ville bli.',
          },
        ],
        solution: 'Komma ved oppramsing, innskudd og motsetning. Anførselstegn og spørsmålstegn ved direkte tale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen i betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom "Hun likte ikke læreren, sa han" og "Hun likte ikke, læreren sa han"?',
            solution: 'Første: Noen (han) sier at hun ikke likte læreren. Andre: Hun likte ikke det læreren sa om han.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom "La oss spise, bestemor" og "La oss spise bestemor"?',
            solution: 'Første: Vi inviterer bestemor til å spise. Andre: Vi skal spise bestemor (kannibalisme!).',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom "Studentene som ikke besto, må ta eksamen på nytt" og "Studentene, som ikke besto, må ta eksamen på nytt"?',
            solution: 'Første: Bare de studentene som ikke besto må ta eksamen på nytt (nødvendig leddsetning). Andre: Alle studentene besto ikke, og alle må ta eksamen på nytt (unødvendig leddsetning/innskudd).',
          },
        ],
        hints: ['Tegnsetting kan endre hele meningen', 'Tenk på hva som er innskudd vs. nødvendig informasjon'],
        solution: 'Tegnsetting er ikke bare formelt riktig - det påvirker betydningen av setningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-def-4',
      type: 'definition',
      title: 'Kolon og semikolon',
      content: `**Kolon (:)**

Kolon introduserer noe som utdyper eller forklarer det som kom før.

**Brukes til:**

**1. Før oppramsing:**
- "Jeg trenger: mel, egg og melk."
- "Ta med følgende: sovepose, liggeunderlag og telt."

**2. Før forklaring eller utdyping:**
- "Han skjønte én ting: dette var ikke hans feil."
- "Resultatet var klart: de hadde vunnet."

**3. Før direkte tale:**
- Han sa: "Jeg kommer snart."
- Læreren spurte: "Har alle forstått?"

**4. I klokkeslett:**
- 14:30, 09:00

---

**Semikolon (;)**

Semikolon er et skilletegn som er sterkere enn komma, men svakere enn punktum.

**Brukes til:**

**1. Mellom selvstendige, men nært beslektede setninger:**
- "Han var trett; likevel fortsatte han."
- "Solen skinte; fuglene sang."

**2. I komplekse oppramsinger (der leddene selv inneholder komma):**
- "På møtet var Oslo, med 5 delegater; Bergen, med 3 delegater; og Trondheim, med 2 delegater."

**Tips:** Semikolon brukes sjelden i moderne norsk. Når du er i tvil, bruk punktum eller komma i stedet.`,
    },
    {
      id: 'norsk-vg1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om setningene med riktig bruk av kolon og semikolon.',
        subTasks: [
          {
            label: 'a',
            task: 'Gjør om til setning med kolon: "Du trenger å ta med flere ting. Du trenger mel. Du trenger egg. Du trenger melk."',
            solution: 'Du trenger å ta med flere ting: mel, egg og melk.',
          },
          {
            label: 'b',
            task: 'Gjør om til setning med kolon: "Han forsto endelig. Dette var ikke et spill."',
            solution: 'Han forsto endelig: dette var ikke et spill.',
          },
          {
            label: 'c',
            task: 'Bruk semikolon: "Solen skinte. Fuglene sang. Alt var perfekt."',
            solution: 'Solen skinte; fuglene sang; alt var perfekt. (Eller: Solen skinte; fuglene sang – alt var perfekt.)',
          },
        ],
        hints: ['Kolon introduserer noe', 'Semikolon kobler nært beslektede setninger'],
        solution: 'Kolon og semikolon gir teksten bedre flyt og viser sammenhenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-def-5',
      type: 'definition',
      title: 'Tankestrek og bindestrek',
      content: `**Tankestrek (–)**

Tankestreken er lengre enn bindestreken og har andre funksjoner.

**Brukes til:**

**1. Innskudd (som alternativ til komma eller parentes):**
- "Mannen – som for øvrig var ganske høy – gikk forbi."
- "Vi reiste – mot alle odds – til månen."

**2. Opphold eller brudd i setningen:**
- "Han ville si noe, men –"
- "Jeg trodde at – nei, glem det."

**3. I replikker (dialogstrek):**
- – Hva gjør du? spurte hun.
- – Ingenting, svarte han.

**4. Mellom tall og steder:**
- "Toget Oslo–Bergen"
- "Åpent 09:00–17:00"
- "Perioden 1990–2000"

---

**Bindestrek (-)**

Bindestreken er kortere og binder ord sammen.

**Brukes til:**

**1. Sammensatte ord:**
- "IT-avdeling"
- "New York-tur"
- " 1990-tallet"

**2. Ved orddeling ved linjeskift:**
- "innbyt-
  telse"

**3. Ved forkortelser og tall i ord:**
- "17-åring"
- "2-etasjes"
- "PC-en"

**Husk:** IKKE mellomrom rundt bindestrek, MEN mellomrom rundt tankestrek.`,
    },
    {
      id: 'norsk-vg1-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning bruker tankestrek riktig?',
        options: [
          { id: 'a', text: 'Toget Oslo-Bergen går kl. 10:00.', isCorrect: false },
          { id: 'b', text: 'Toget Oslo–Bergen går kl. 10:00.', isCorrect: true },
          { id: 'c', text: 'Toget Oslo – Bergen går kl. 10:00.', isCorrect: false },
          { id: 'd', text: 'Toget Oslo - Bergen går kl. 10:00.', isCorrect: false },
        ],
        solution: 'Tankestrek (–) brukes mellom steder uten mellomrom: Oslo–Bergen. Bindestrek (-) er kortere og brukes i sammensatte ord.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-def-6',
      type: 'definition',
      title: 'Anførselstegn og sitatpraksis',
      content: `**Anførselstegn («» eller "")**

Brukes for å markere sitater, direkte tale og titler.

**Typer anførselstegn:**
- «Fransk/norsk stil» - vanligst i bøker og aviser
- "Engelsk stil" - vanlig i digitale tekster

**1. Direkte tale og sitater:**
- Hun sa: «Jeg kommer snart.»
- «Dette er uakseptabelt», sa han.
- Ifølge rapporten er situasjonen «kritisk».

**2. Titler på artikler, dikt, noveller:**
- Diktet «Du må ikke sove» av Arnulf Øverland
- Artikkelen «Norges fremtid» i Aftenposten

**3. Ord brukt i spesiell betydning eller ironisk:**
- Han var en «ekspert» på området.
- Denne «løsningen» skapte bare nye problemer.

---

**Sitatpraksis:**

**Korte sitater (under 3 linjer):**
Innarbeides i teksten med anførselstegn.
- Som Ibsen skriver: «Man skal aldri ha sine bukser på når man går ut for å kjempe for frihet og sannhet.»

**Lange sitater (over 3 linjer):**
Settes som eget avsnitt med innrykk, uten anførselstegn.

**Sitat i sitat:**
Bruk motsatt type anførselstegn.
- Han sa: «Da hun ropte 'Stopp!', snudde alle seg.»`,
    },
    {
      id: 'norsk-vg1-8-5-def-7',
      type: 'definition',
      title: 'Apostrof og forkortelser',
      content: `**Apostrof (')**

**I norsk brukes apostrof SJELDEN. Her er de viktigste reglene:**

**1. Genitiv av navn som slutter på s, x eller z:**
- "Marx' teorier"
- "Jens' bil" (men også mulig: "Jens sin bil")
- "Xerxes' hær"

**2. Ved utelatelse av bokstaver (sjelden):**
- "ha'kke" (har ikke) - i dialog/dialekt
- "gi'kke" (gir ikke)

**IKKE apostrof ved:**
- Vanlig genitiv: "Karins bok" (IKKE "Karin's bok")
- Flertall: "PCer" (IKKE "PC'er")
- Tiår: "1980-tallet" eller "80-tallet" (IKKE "80'tallet")

---

**Forkortelser:**

**Med punktum:**
- f.eks. (for eksempel)
- bl.a. (blant annet)
- m.m. (med mer)
- osv. (og så videre)
- dvs. (det vil si)
- ca. (cirka)
- jf. (jamfør)
- nr. (nummer)
- mfl. (med flere)

**Uten punktum:**
- mrd (milliarder)
- km (kilometer)
- kr (kroner)
- kg (kilogram)
- NATO, FN, EU (akronymer)

**Tips:** Bruk forkortelser sparsomt i løpende tekst. Skriv gjerne ut hele ordet for bedre flyt.`,
    },
    {
      id: 'norsk-vg1-8-5-def-8',
      type: 'definition',
      title: 'Vanlige kommafeil',
      content: `**De vanligste kommafeilene - unngå disse!**

**1. Komma mellom subjekt og verbal:**
- ✗ "Per, gikk hjem." (aldri komma mellom subjekt og verbal)
- ✓ "Per gikk hjem."

**2. Komma foran "og" i oppramsing (engelsk påvirkning):**
- ✗ "epler, pærer, og bananer"
- ✓ "epler, pærer og bananer"

**3. Manglende komma foran "og" med nytt subjekt:**
- ✗ "Han gikk hjem og hun ble igjen."
- ✓ "Han gikk hjem, og hun ble igjen."

**4. Komma etter "men" i stedet for foran:**
- ✗ "Han kom men, han gikk snart."
- ✓ "Han kom, men han gikk snart."

**5. Manglende komma rundt innskudd:**
- ✗ "Bilen som var rød sto parkert."
- ✓ "Bilen, som var rød, sto parkert." (hvis det er innskudd)

**6. Feil ved tiltale:**
- ✗ "Per kom hit!"
- ✓ "Per, kom hit!" (komma ved tiltale)

**Huskeregel:** Komma = naturlig pause. Men ikke alle pauser er komma!`,
    },
    {
      id: 'norsk-vg1-8-5-def-9',
      type: 'definition',
      title: 'Kolon vs. semikolon',
      content: `**Kolon eller semikolon? Slik velger du riktig:**

**KOLON (:) brukes når:**

**1. Det som kommer etter forklarer eller utdyper:**
- "Han forsto én ting: dette var alvor."

**2. Før oppramsing:**
- "Ta med: sovepose, liggeunderlag og telt."

**3. Før direkte tale/sitat:**
- Hun sa: "Jeg kommer snart."

**4. I klokkeslett:**
- kl. 14:30

---

**SEMIKOLON (;) brukes når:**

**1. To nært beslektede setninger som kunne stått alene:**
- "Solen skinte; fuglene sang."
- "Han var trett; likevel fortsatte han."

**2. I komplekse oppramsinger (der leddene har komma):**
- "Oslo, 5 delegater; Bergen, 3 delegater."

---

**Hovedforskjellen:**
- **Kolon** = "nemlig" / forklaring følger
- **Semikolon** = pause mellom likeverdige deler

**Tips:** Er du usikker? Bruk punktum i stedet for semikolon!`,
    },
    {
      id: 'norsk-vg1-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett feilene i disse setningene.',
        subTasks: [
          {
            label: 'a',
            task: '"Vi reiste til Bergen, Trondheim, og Oslo."',
            solution: 'Vi reiste til Bergen, Trondheim og Oslo. (Ikke komma foran "og" i oppramsing på norsk.)',
          },
          {
            label: 'b',
            task: '"Karl\'s bil er ny."',
            solution: 'Karls bil er ny. (Ikke apostrof ved vanlig genitiv på norsk.)',
          },
          {
            label: 'c',
            task: '"Han spurte om hun ville komme?"',
            solution: 'Han spurte om hun ville komme. (Indirekte spørsmål har ikke spørsmålstegn.)',
          },
          {
            label: 'd',
            task: '"Toget går kl 0900."',
            solution: 'Toget går kl. 09:00. (Forkortelse med punktum, tid med kolon.)',
          },
        ],
        hints: ['Tenk på forskjellen mellom norsk og engelsk tegnsetting', 'Sjekk forkortelsesreglene'],
        solution: 'Norsk tegnsetting skiller seg fra engelsk på flere punkter, særlig ved komma og apostrof.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Rett tegnsetting',
      problem: 'Sett inn riktig tegnsetting i denne teksten:\n\n"Maria som var sytten år gammel ville reise til Paris Hun hadde drømt om det lenge Moren hennes spurte Har du råd til det Maria svarte Jeg har spart i to år"',
      solution: `**Steg for steg:**

**1. Finn helsetningene:**
- "Maria ville reise til Paris" (hovedsetning)
- "som var sytten år gammel" (innskutt leddsetning)
- "Hun hadde drømt om det lenge" (ny setning)
- osv.

**2. Marker innskudd:**
"Maria, som var sytten år gammel, ville reise til Paris."

**3. Skill setninger:**
"Maria, som var sytten år gammel, ville reise til Paris. Hun hadde drømt om det lenge."

**4. Marker direkte tale:**
"Moren hennes spurte: «Har du råd til det?» Maria svarte: «Jeg har spart i to år.»"

**Ferdig tekst:**
"Maria, som var sytten år gammel, ville reise til Paris. Hun hadde drømt om det lenge. Moren hennes spurte: «Har du råd til det?» Maria svarte: «Jeg har spart i to år.»"

**Tegn brukt:**
- Komma rundt innskudd
- Punktum mellom setninger
- Kolon før direkte tale
- Anførselstegn rundt sitater
- Spørsmålstegn i spørsmål`,
    },
    {
      id: 'norsk-vg1-8-5-example-2',
      type: 'example',
      title: 'Eksempel: Vanlige feil',
      problem: 'Finn og rett feilene i denne teksten:\n\n"Han sa at: han ville komme. Men, han kom ikke. Vi ventet, og ventet, helt til kl 2100. Da ga vi opp og gikk hjem?"',
      solution: `**Feil 1: "Han sa at: han ville komme."**
- FEIL: Kolon etter "at"
- RETT: "Han sa at han ville komme."
- Forklaring: Etter "at" kommer en leddsetning, ikke en oppramsing eller utdyping.

**Feil 2: "Men, han kom ikke."**
- FEIL: Komma etter "men"
- RETT: "Men han kom ikke."
- Forklaring: Det skal ikke være komma rett etter "men" i starten av en setning.

**Feil 3: "Vi ventet, og ventet"**
- FEIL: Komma mellom "ventet og ventet"
- RETT: "Vi ventet og ventet"
- Forklaring: Samme subjekt (vi) i begge ledd, ingen komma.

**Feil 4: "kl 2100"**
- FEIL: Mangler punktum og kolon
- RETT: "kl. 21:00"
- Forklaring: "kl." er forkortelse (punktum), og tid skrives med kolon.

**Feil 5: "...og gikk hjem?"**
- FEIL: Spørsmålstegn etter påstand
- RETT: "...og gikk hjem."
- Forklaring: Dette er en påstand, ikke et spørsmål.

**Rettet tekst:**
"Han sa at han ville komme. Men han kom ikke. Vi ventet og ventet, helt til kl. 21:00. Da ga vi opp og gikk hjem."`,
    },
    {
      id: 'norsk-vg1-8-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn riktig tegnsetting i denne teksten.',
        subTasks: [
          {
            label: 'a',
            task: 'Tekst: "Lise som alltid var punktlig kom for sent i dag Hun hadde sovet for lenge Moren hennes spurte Hva skjedde Lise svarte Vekkerklokken virket ikke"',
            solution: 'Lise, som alltid var punktlig, kom for sent i dag. Hun hadde sovet for lenge. Moren hennes spurte: «Hva skjedde?» Lise svarte: «Vekkerklokken virket ikke.»',
          },
        ],
        hints: ['Finn innskuddene', 'Marker direkte tale', 'Skill setningene'],
        solution: 'Fullstendig tegnsetting krever at du identifiserer alle setningsledd og talearter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-8-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser tegnsettingen i et tekstutdrag.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et avsnitt fra en bok, avis eller nettartikkel (ca. 100 ord) og skriv det av.',
            solution: 'Beskriv hvilket avsnitt du har valgt og hvor det er fra.',
          },
          {
            label: 'b',
            task: 'Identifiser alle tegnsettingstegn i avsnittet og forklar hvorfor hvert tegn er brukt.',
            solution: 'Gå gjennom punkt for punkt: "Punktum her fordi...", "Komma her fordi det er innskudd...", osv.',
          },
          {
            label: 'c',
            task: 'Er det noen tegnsettingsvalg du er uenig i eller usikker på? Forklar.',
            solution: 'Vurder om alle tegn følger reglene, eller om det er stilvalg.',
          },
        ],
        hints: ['Velg en tekst med variert tegnsetting', 'Bruk reglene fra kapittelet til å forklare'],
        solution: 'Analysen viser at du forstår reglene og kan anvende dem på autentiske tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (150-200 ord) der du bevisst bruker minst seks ulike tegnsettingstegn. Marker hvilke tegn du har brukt og forklar hvorfor.',
        hints: [
          'Planlegg hvilke tegn du vil bruke: punktum, komma, kolon, semikolon, tankestrek, anførselstegn, spørsmålstegn, utropstegn',
          'Skriv om et tema som gir naturlige muligheter for variert tegnsetting',
          'Inkluder gjerne et sitat eller en dialog',
        ],
        solution: 'Teksten bør vise variert og korrekt bruk av tegnsetting. Forklaringene bør referere til reglene i kapittelet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn og rett kommafeilene i disse setningene:',
        subTasks: [
          {
            label: 'a',
            task: '"Per, gikk til skolen."',
            solution: '"Per gikk til skolen." (Ikke komma mellom subjekt og verbal.)',
          },
          {
            label: 'b',
            task: '"Han kom hjem og hun gikk ut."',
            solution: '"Han kom hjem, og hun gikk ut." (Komma foran og med nytt subjekt.)',
          },
          {
            label: 'c',
            task: '"Vi kjøpte epler, bananer, og appelsiner."',
            solution: '"Vi kjøpte epler, bananer og appelsiner." (Ikke komma foran og i oppramsing.)',
          },
          {
            label: 'd',
            task: '"Kari kom hit!"',
            solution: '"Kari, kom hit!" (Komma ved tiltale.)',
          },
        ],
        hints: ['Se etter de vanligste kommafeilene'],
        solution: 'Korrekt kommabruk er viktig for at teksten skal bli lett å forstå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-12',
        number: '12',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker kolon korrekt?',
        options: [
          'Han sa: at han ville komme.',
          'Vi trenger: mel, egg og melk.',
          'Resultatet var: klart.',
          'Hun spurte: om jeg ville bli med.',
        ],
        answer: 1,
        solution: '"Vi trenger: mel, egg og melk." bruker kolon korrekt - kolon foran oppramsing. De andre har feil plassering av kolon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig tegn (kolon eller semikolon) og forklar hvorfor:',
        subTasks: [
          {
            label: 'a',
            task: '"Hun forsto endelig _ dette var ikke en lek."',
            solution: 'Kolon (:) - det som kommer etter forklarer/utdyper det første.',
          },
          {
            label: 'b',
            task: '"Solen skinte _ fuglene sang."',
            solution: 'Semikolon (;) - to nært beslektede, selvstendige setninger.',
          },
          {
            label: 'c',
            task: '"Ta med følgende _ mat, drikke og klær."',
            solution: 'Kolon (:) - innleder en oppramsing.',
          },
        ],
        hints: ['Kolon = forklaring følger', 'Semikolon = to likeverdige setninger'],
        solution: 'Kolon og semikolon har ulike funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett inn all manglende tegnsetting i denne teksten:\n\n"Maria som var sytten år hadde en drøm Hun ville bli forfatter Moren hennes spurte Hvorfor vil du det Maria svarte Fordi jeg elsker å fortelle historier Hver dag skrev hun litt og til slutt hadde hun en hel bok"',
        hints: ['Se etter innskudd, direkte tale, og naturlige pauser', 'Bruk punktum, komma, kolon og anførselstegn'],
        solution: '"Maria, som var sytten år, hadde en drøm. Hun ville bli forfatter. Moren hennes spurte: «Hvorfor vil du det?» Maria svarte: «Fordi jeg elsker å fortelle historier.» Hver dag skrev hun litt, og til slutt hadde hun en hel bok."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-5-ex-15',
        number: '15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor har disse to setningene ulik betydning?\n\n1. "Studentene som ikke besto, må ta eksamen på nytt."\n2. "Studentene, som ikke besto, må ta eksamen på nytt."',
        options: [
          '1: Bare de som ikke besto må ta eksamen. 2: Alle studentene besto ikke, og alle må ta eksamen.',
          'De betyr det samme, bare med ulik tegnsetting.',
          '1: Alle må ta eksamen. 2: Bare noen må ta eksamen.',
          'Det er ingen forskjell.',
        ],
        answer: 0,
        solution: 'I setning 1 er "som ikke besto" en nødvendig presisering (bare de som ikke besto). I setning 2 er det et innskudd som gjelder alle studentene (alle besto ikke).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['bruke fagspråk til å beskrive grammatikk'],
      },
    },
    {
      id: 'norsk-vg1-8-5-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 8.5

**Hovedpunkter:**
- Tegnsetting påvirker mening, rytme og leserforståelse
- Komma markerer pauser og skiller setningsledd - det finnes mange regler
- Komma settes foran leddsetninger (fordi, hvis, at, som) og ved oppramsing
- Kolon innleder forklaring, sitat eller liste; semikolon forbinder nært beslektede setninger
- Tankestrek og bindestrek har ulike funksjoner og lengder

**Sentrale begreper:**
- **Komma:** Skilletegn som skiller ledd i setningen
- **Kolon:** Innleder forklaring, sitat eller liste
- **Semikolon:** Forbinder selvstendige setninger som henger nært sammen
- **Tankestrek:** Lang strek som markerer innklipp, pause eller omslag
- **Bindestrek:** Kort strek som binder ord sammen
- **Anførselstegn:** Tegn rundt sitater og direkte tale

**Tips for eksamen:**
- Komma foran "og" bare når det kommer ny setning med nytt subjekt
- Les setningen høyt - der du tar naturlig pause, kan det være tegn
- Komma rundt innskutte ledd (på begge sider!)
- Husk: Kolon etter fullstendig setning, liten bokstav etterpå med mindre det er et egennavn
- Aldri apostrof i norsk genitiv: "Pers bil", ikke "Per's bil"`,
    },
    {
      id: 'norsk-vg1-8-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **8.1 Setningsanalyse** – Forstå setningsstruktur for riktig kommabruk
- **8.3 Rettskriving bokmål** – Kombiner med rettskriving
- **8.4 Rettskriving nynorsk** – Tegnsetting er lik på begge målformer
- **5.4 Skriveprosess og revisjon** – Sjekk tegnsetting i revisjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Samisk litteratur
// ============================================================================

export const CHAPTER_NORSK_VG1_3_3: TextbookChapter = {
  id: 'norsk-vg1-3-3',
  courseId: 'norsk-vg1',
  chapterNumber: '3.3',
  title: 'Samisk litteratur',
  description: 'Utforsk samisk litteratur, fortellertradisjon og joikens rolle som kulturuttrykk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra samisk litteratur',
    'reflektere over joiken som litterær og kulturell uttrykksform',
    'forstå samisk litteratur i en historisk og samtidig kontekst',
  ],
  content: [
    {
      id: 'norsk-vg1-3-3-intro',
      type: 'text',
      content: `## Samisk litteratur - en del av norsk kulturarv

Samisk litteratur er en viktig del av Norges kulturelle mangfold. Som urfolk i Norge har samene en rik litterær tradisjon som strekker seg fra muntlig fortellerkunst til moderne romaner og lyrikk.

**Hvorfor studere samisk litteratur?**
- Samene er Norges urfolk med egen kultur, språk og historie
- Samisk litteratur gir innsikt i alternative perspektiver på natur, samfunn og identitet
- Del av LK20s fokus på samiske forhold
- Viktig for forståelsen av et mangfoldig Norge
- Utfordrer majoritetssamfunnets fortellinger

**Samisk litteratur omfatter:**
- Muntlig tradisjon og fortellinger
- Joik som poetisk uttrykk
- Moderne lyrikk og prosa
- Samtidsromaner og dramatikk

**Viktige samiske forfattere:**
- Nils-Aslak Valkeapää (1943-2001)
- Kirsti Paltto (f. 1947)
- Laila Stien (f. 1946)
- Sigbjørn Skåden (f. 1976)
- Rawdna Carita Eira (f. 1970)

**I dette kapittelet lærer du om:**
- Den muntlige fortellertradisjonen
- Joiken som kulturelt og litterært uttrykk
- Sentrale samiske forfattere
- Temaer i samisk litteratur
- Å analysere samisk lyrikk og prosa`,
    },
    {
      id: 'norsk-vg1-3-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Joik** | Samisk sang uten fast tekst, ofte viet en person, et dyr eller et sted |
| **Muitalus** | Samisk fortelling om hverdagshendelser |
| **Máinnas** | Samisk eventyr med overnaturlige elementer |
| **Stallo** | Trollaktig skikkelse i samisk tradisjon |
| **Ulda** | Underjordisk vesen i samisk folketro |
| **Noaide** | Tradisjonell samisk sjaman |
| **Fornorskning** | Politikken som undertrykte samisk språk og kultur |
| **Revitalisering** | Gjenoppliving av undertrykt språk og kultur |`,
    },
    {
      id: 'norsk-vg1-3-3-def-1',
      type: 'definition',
      title: 'Muntlig tradisjon og fortellerkunst',
      content: `**Den samiske fortellertradisjonen**

Før skriftspråket ble innført, levde samisk kultur gjennom muntlig tradisjon. Fortellingene ble overlevert fra generasjon til generasjon og var en viktig del av kulturens overlevelse.

**Typer muntlige fortellinger:**

**Muitalus (fortelling):**
Hverdagsfortellinger om hendelser, ofte med et poeng eller en lærdom.

**Máinnas (eventyr):**
Eventyr med overnaturlige elementer, dyr som snakker, og magiske hendelser.

**Sáhka (legende):**
Fortellinger som oppfattes som sanne, ofte med historisk forankring.

**Stállu-fortellinger:**
Fortellinger om stállu - en trolllignende skikkelse som ofte blir lurt av samer.

**Kjennetegn ved muntlig tradisjon:**
- Tilpasning til publikum og situasjon
- Gjentakelser og faste formler
- Bruk av rytme og klang
- Naturen som sentral ramme
- Dyr og naturvesener med egne personligheter

**Fortellerens rolle:**
Fortelleren var kulturens hukommelse og hadde ansvar for å bevare og formidle kunnskapen videre. Fortellerkunst var en høyt verdsatt ferdighet.

**Arven i dag:**
Mange moderne samiske forfattere henter inspirasjon fra den muntlige tradisjonen, både i temaer, fortellerteknikk og rytme.`,
    },
    {
      id: 'norsk-vg1-3-3-def-2',
      type: 'definition',
      title: 'Joiken - mer enn sang',
      content: `**Joiken som litterært og kulturelt uttrykk**

Joiken er en av verdens eldste vokaltradisjoner og en unik samisk kunstform som kombinerer musikk, poesi og spiritualitet.

**Hva er joik?**
Joik er ikke å synge *om* noe, men å synge *noe* frem. Man joiker en person, et dyr, et sted - ikke bare beskriver, men fremkaller essensen.

**Typer joik:**

**Personjoik:**
Hver person har tradisjonelt sin egen joik, en musikalsk signatur som fanger personens vesen.

**Dyrejoik:**
Joik av dyr fanger dyrets karakter og bevegelser.

**Landskapsjoik:**
Joik av steder formidler stedets atmosfære og betydning.

**Joikens kjennetegn:**
- Ofte få ord, mange vokaler og stavelser uten direkte mening
- Rytmisk, gjentakende struktur
- Improvisasjon innenfor tradisjonelle rammer
- Emosjonell intensitet
- Nær forbindelse til natur og tradisjon

**Joik som poesi:**
Joiken har poetiske kvaliteter: rytme, klang, komprimert uttrykk, stemning. Den formidler mening gjennom andre kanaler enn vanlig språk.

**Historisk undertrykkelse:**
Joiken ble lenge forbudt og undertrykt av kirke og myndigheter. Dette gjør joikens overlevelse og revitalisering ekstra betydningsfull.

**Moderne joik:**
I dag kombinerer artister som Mari Boine, Sofia Jannok og Ella Marie Hætta Isaksen joik med moderne musikkformer og holder tradisjonen levende.`,
    },
    {
      id: 'norsk-vg1-3-3-def-2b',
      type: 'definition',
      title: 'Joik som litteratur - å lese og analysere joik',
      content: `**Joik i et litterært perspektiv**

Joik kan betraktes som en form for muntlig litteratur - en poetisk uttrykksform som formidler mening gjennom andre virkemidler enn vanlig tekst. Å "lese" joik krever en annen tilnærming enn å lese en bok.

**Typer joik og deres funksjoner:**

**Personjoik (olmmošluohti):**
- Hver person har tradisjonelt sin egen joik
- Joiken fanger personens vesen, ikke utseende
- Fungerer som et lydportrett eller en musikalsk signatur
- Å joike noen er en form for æresbevisning

**Dyrejoik (eallitluohti):**
- Fanger dyrets karakter, bevegelser og vesen
- Reinjoik er særlig viktig i reindriftskulturen
- Ulvejoik, jervejoik, ørnejoik - hvert dyr har sin essens
- Viser respekt for dyret og dets plass i verden

**Landskapsjoik (eatnamalatluohti):**
- Joik av fjell, elver, vidder, spesielle steder
- Formidler stedets atmosfære og betydning
- Kan være knyttet til familiehistorie og bruksrettigheter
- Landskapet som levende vesen, ikke bare kulisse

**Hvordan joik skiller seg fra vestlig sang:**

| Vestlig sang | Joik |
|-------------|------|
| Synger *om* noe | Synger noe *frem* |
| Tekst forteller en historie | Lyd skaper nærvær |
| Artisten fremfører | Joikeren fremkaller |
| Publikum lytter | Deltakerne opplever |
| Lineær tid | Syklisk tid |

**Å analysere joik - spørsmål å stille:**
- Hva er objektet for joiken (person, dyr, sted)?
- Hvilke musikalske elementer brukes (rytme, tonehøyde, intensitet)?
- Hvilken stemning skapes?
- Hva formidler de eventuelle ordene/stavelsene?
- Hvordan forholder joiken seg til tradisjon?
- Hva er konteksten (rituell, sosial, kunstnerisk)?

**Joik i moderne musikk:**

**Mari Boine (f. 1956):**
- Pioner i å kombinere joik med jazz, rock og verdensmusikk
- Politisk engasjert - bruker musikken til å fremme samiske rettigheter
- Albumet "Gula Gula" (1989) var gjennombruddet internasjonalt
- Viser at joik kan tale til et globalt publikum

**Sofia Jannok (f. 1982):**
- Svensk-samisk artist fra Gällivare
- Blander joik med pop, elektronika og visesang
- Synger om klimaendringer og naturvern
- Ny generasjons stemme for samiske saker

**Ella Marie Hætta Isaksen (f. 1998):**
- Vokalist i bandet KEiiNO
- Representerte Norge i Eurovision 2019
- Bringer joik til mainstream popmusikk
- Viser at tradisjon og modernitet kan møtes

**Å "lese" joik - praktiske tips:**
1. Lytt først uten å analysere - la musikken virke
2. Legg merke til gjentakelser og variasjoner
3. Kjenn etter: Hvilken stemning skapes i deg?
4. Les om konteksten: Hva handler joiken om?
5. Lytt igjen med ny forståelse
6. Sammenlign med andre joiker eller med moderne versjoner

**Respekt og forståelse:**
Joik er hellig for mange samer. Noen joiker er personlige og skal ikke deles offentlig. Når vi studerer joik i skolen, gjør vi det med respekt for tradisjonen og forståelse for at vi møter en levende kultur.`,
    },
    {
      id: 'norsk-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-5',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign joik med andre poetiske uttrykksformer du kjenner. Hva er likt og hva er ulikt?',
        hints: ['Tenk på forhold mellom tekst og musikk', 'Tenk på funksjonen - hva skal uttrykket gjøre?', 'Sammenlign med rap, blues, ballader eller annet'],
        solution: 'Sammenligningen bør vise at joik deler trekk med andre muntlige tradisjoner (rytme, gjentakelse, emosjonell intensitet), men skiller seg ut ved å ikke beskrive, men fremkalle. Joik har spirituell/rituell funksjon som skiller den fra f.eks. vestlig populærmusikk, men kan sammenlignes med blues\' emosjonelle uttrykk eller raps muntlige energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner joik som kunstform?',
        options: [
          'Man synger essensen av en person, et dyr eller et sted frem',
          'Man synger lange, narrative ballader om historiske hendelser',
          'Man synger utelukkende på norsk med samiske melodier',
          'Man synger bare ved religiøse seremonier',
        ],
        answer: 0,
        solution: 'Joik kjennetegnes ved at man ikke synger om noe, men synger noe frem - man fremkaller essensen av det man joiker gjennom lyd, rytme og stemning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-def-3',
      type: 'definition',
      title: 'Nils-Aslak Valkeapää - den moderne samiske litteraturens far',
      content: `**Nils-Aslak Valkeapää (1943-2001) - Áillohaš**

Nils-Aslak Valkeapää, kjent under artistnavnet Áillohaš (som betyr "liten ørn"), regnes som **den moderne samiske litteraturens far** og en av de viktigste samiske kunstnerne gjennom tidene. Hans betydning for samisk kultur kan sammenlignes med Henrik Wergelands betydning for norsk nasjonalromantikk - han definerte en hel kunsttradisjon.

**Bakgrunn:**
- Født i Enontekiö, Finland, i en reindriftsfamilie
- Vokste opp med joik, reinflytting og samisk naturforståelse
- Utdannet seg som lærer, men valgte kunsten
- Sentral figur i den samiske politiske oppvåkningen på 1970- og 80-tallet

**Multimediekunstner - en helhetlig visjon:**
Det som gjør Valkeapää unik, er hvordan han kombinerte ulike kunstformer til ett helhetlig uttrykk:

- **Joik**: Han var en mester i tradisjonell joik og fornyet den
- **Poesi**: Komprimerte, billedsterke dikt inspirert av joikens rytme
- **Visuell kunst**: Egne fotografier og tegninger i bøkene
- **Musikk**: Samarbeidet med musikere og komponister
- **Performance**: Fremførelser der alle kunstformer smeltet sammen

Hans bøker er ikke bare tekstsamlinger - de er kunstverk der tekst, bilde og hvite flater skaper en helhet. Man "leser" en Valkeapää-bok like mye med øynene som med intellektet.

**Viktige verk:**

**"Ruoktu váimmus" (1985) - "Hjertet mitt er herfra":**
Diktsamling som kombinerer tekst og fotografier. Vant Nordisk Råds litteraturpris i 1991 - første samiske verk som fikk denne æren. Boken handler om tilhørighet, røtter og samisk identitet.

**"Beaivi, Áhčážan" (1988) - "Solen, min far":**
Monumentalt verk på over 500 sider som kombinerer poesi med fotografier av samisk natur og kultur. En kosmisk hyllest til samisk identitet, der mennesket, reinen, solen og landskapet veves sammen.

**Diktsamlinger:**
- "Terveisiä Lapista" (1971) - "Hilsener fra Lappland"
- "Giđa ijat čuovgadat" (1974) - "Vårnatta er lys"
- "Ádjaga silbasuonat" (1981) - "Bestefars sølvårer"

**Kjennetegn ved Valkeapääs diktning:**
- Naturbilder som bærer dype meninger
- Tradisjon og modernitet i samspill
- Visualitet - tekst og bilde som helhet
- Kort, komprimert form inspirert av joik
- Kosmisk perspektiv - mennesket i naturen
- Politisk undertekst om samisk frigjøring og rettigheter

**Sitat fra "Ruoktu váimmus":**
*"Jeg tilhører vinden og vidda"*

Denne korte linjen sammenfatter mye av Valkeapääs kunstneriske prosjekt: mennesket som del av naturen, ikke herre over den. Tilhørighet, ikke eierskap.

**Politisk betydning:**
Valkeapää var aktiv i samebevegelsen og brukte kunsten som politisk våpen. Han viste at samisk kultur ikke var "primitiv" eller "utdøende", men levende, moderne og verdifull. Han nektet å la majoritetssamfunnet definere hva samisk kultur kunne være.

**Arv og betydning:**
Valkeapää viste at samisk kultur og litteratur har universell verdi og kan tale til lesere over hele verden. Han løftet samisk kunstuttrykk inn i verdenskunsten og inspirerte generasjoner av samiske kunstnere. Når vi i dag har en blomstrende samisk litteratur- og musikkscene, bygger den på det fundamentet Áillohaš la.

**Tips for lesing:**
Når du leser Valkeapää, les sakte. La øynene hvile på bildene. Kjenn rytmen i ordene. Hans bøker er ment å oppleves, ikke bare forstås.`,
    },
    {
      id: 'norsk-vg1-3-3-def-4',
      type: 'definition',
      title: 'Eldre samiske forfattere',
      content: `**Pionerene i samisk litteratur**

I tillegg til Valkeapää var det flere forfattere som la grunnlaget for moderne samisk litteratur.

**Laila Stien (f. 1946):**
- Norsk-samisk forfatter fra Hammerfest
- Noveller og romaner om samisk hverdagsliv
- "Vekselsang" (1985) - novellesamling
- Skildrer møtet mellom samisk og norsk kultur
- Subtil, nøktern stil med dype undertoner

**Kirsti Paltto (f. 1947):**
- Finsk-samisk forfatter
- Skrevet over 30 bøker
- Romaner, noveller, barnebøker
- Historiske og samtidige samiske temaer

**Jovnna-Ánde Vest (Jon-Andreas Vest) (1948-2002):**
- Lyriker og forfatter
- "Čáhci čierru" (1976) - første moderne diktsamling på samisk
- Politisk og naturlyrisk poesi

**Felles trekk:**
- Skriver ofte på samisk (med oversettelser)
- Tematiserer identitet og tilhørighet
- Naturen som sentral referanse
- Forhandler forholdet mellom tradisjon og modernitet`,
    },
    {
      id: 'norsk-vg1-3-3-def-4b',
      type: 'definition',
      title: 'Samtidsforfattere i samisk litteratur',
      content: `**Den nye generasjonen samiske forfattere**

Etter Valkeapääs banebrytende arbeid har en ny generasjon samiske forfattere vokst frem. De skriver om identitet, språk og tilhørighet i en moderne virkelighet, ofte med ett ben i tradisjonen og ett i samtiden.

**Sigbjørn Skåden (f. 1976):**
- Samtidssamisk forfatter fra Tana
- Skriver på både nordsamisk og norsk
- Poet, romanforfatter og essayist
- **Viktige verk:**
  - "Våke over dem som sover" (2014) - roman
  - "Skuovvadivggažat" (2004) - diktsamling
  - Dikt om språk, identitet og tilhørighet
- **Temaer:** Identitet mellom to kulturer, språktap og gjenerobring, moderne samisk liv, klimaendringer i nord
- Skådens poesi er ofte personlig og politisk samtidig - han skriver om å være same i dag, om å gjenvinne et språk som nesten ble tatt fra ham, om å finne seg selv mellom kulturer

**Rawdna Carita Eira (f. 1970):**
- Lyriker, dramatiker og joiker fra Kautokeino
- Eksperimentell og nyskapende kunstner
- **Viktige verk:**
  - "Jienastit jienaid" (2018) - diktsamling
  - Teaterforestillinger og performance
- **Temaer:** Joiktradisjon møter moderne poesi, kropp og landskap, kvinnelige erfaringer, samisk spiritualitet
- Hennes kunst utforsker grensene mellom joik, poesi og performance. Hun spør: Hva kan samisk kunst være i dag?

**Synnøve Persen (f. 1950):**
- Lyriker og billedkunstner fra Tana
- En av de første kvinnelige samiske dikterne
- Skriver på nordsamisk
- **Viktige verk:**
  - "Badjel geasseortnega" (2009) - diktsamling
  - "Cuolmmas" (2006)
- **Temaer:** Natur og menneske, kjønnsidentitet, samisk kvinneliv, spiritualitet og tradisjon
- Persen skaper bilder der naturen og mennesket speiler hverandre, ofte med et feministisk blikk på samisk kultur

**Felles temaer hos samtidsforfatterne:**

**1. Språkrevitalisering:**
Mange skriver om å gjenvinne et tapt eller truet språk. Fornorskingen tok språket fra mange familier, og dagens forfattere skriver om kampen for å få det tilbake.

**2. Identitet mellom kulturer:**
Hva vil det si å være same i dag? Må man velge mellom samisk og norsk identitet? Samtidsforfatterne utforsker hybride identiteter og nekter forenklinger.

**3. Natur under press:**
Klimaendringer, vindkraftutbygging og naturinngrep truer samiske områder. Litteraturen blir et rom for å bearbeide og protestere.

**4. Kolonialismens arv:**
Fornorskingspolitikken er ikke bare historie - den lever videre i skam, tap og sår. Litteraturen gir ord til det som lenge var tiet i hjel.

**5. Tradisjon i ny drakt:**
Hvordan kan joik, fortellinger og samisk naturforståelse leve videre i en digital tid? Samtidsforfatterne eksperimenterer med form og innhold.

**Tips for videre lesing:**
Utforsk gjerne disse forfatterne selv. Mange av verkene finnes i norsk oversettelse.`,
    },
    {
      id: 'norsk-vg1-3-3-def-5',
      type: 'definition',
      title: 'Temaer i samisk litteratur',
      content: `**Gjennomgående temaer**

**1. Natur og kosmologi:**
Naturen er ikke kulisse, men deltaker. Mennesket er del av et større hele der dyr, landskap og naturkrefter har egenverdi og agens.

**2. Identitet og tilhørighet:**
- Hva vil det si å være same i dag?
- Forholdet mellom tradisjon og modernitet
- Språk som identitetsmarkør
- Hybrididentitet mellom samisk og norsk/skandinavisk

**3. Kolonialisme og undertrykkelse:**
- Fornorskingspolitikken og dens konsekvenser
- Tap av språk og kultur
- Motstand og overlevelse
- Dekolonisering og revitalisering

**4. Reindrift og tradisjonelle næringer:**
- Reindriften som levemåte og identitet
- Truet av modernisering og arealinngrep
- Kunnskapsoverføring mellom generasjoner

**5. Språk og tap:**
- Kampen for å bevare samiske språk
- Skammen mange har følt
- Gjenerobring av språket

**6. Åndelighet og tradisjon:**
- Samisk naturforståelse
- Forholdet til forfedre og tradisjoner
- Kritikk av kristen misjonsvirksomhet

**7. Moderne utfordringer:**
- Klimaendringer i Arktis
- Vindkraft og naturinngrep
- Samisk ungdoms plass i samtiden

**Litterær stil:**
Samisk litteratur kjennetegnes ofte av naturbilder, komprimert uttrykk, muntlig pregede fortellinger, og en veksling mellom det konkrete og det kosmiske.`,
    },
    {
      id: 'norsk-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-1',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om samisk litteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er joik, og hva skiller den fra vanlig sang?',
            solution: 'Joik er en samisk vokal tradisjon der man ikke synger om noe, men synger noe frem - man fremkaller essensen av en person, et dyr eller et sted gjennom lyd, rytme og stemning.',
          },
          {
            label: 'b',
            task: 'Hvem var Nils-Aslak Valkeapää, og hvorfor er han viktig?',
            solution: 'Valkeapää (1943-2001), kjent som Áillohaš, regnes som den moderne samiske litteraturens far. Han vant Nordisk Råds litteraturpris i 1991 og viste at samisk kunst har universell verdi.',
          },
          {
            label: 'c',
            task: 'Nevn tre temaer som er vanlige i samisk litteratur.',
            solution: 'Vanlige temaer inkluderer: natur og menneskets plass i den, identitet og tilhørighet, kolonialisme og fornorsking, reindrift, språk og tap, tradisjon og modernitet.',
          },
        ],
        solution: 'Samisk litteratur har en rik tradisjon fra muntlig fortelling og joik til moderne lyrikk og prosa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av samisk dikt',
      problem: `Analyser dette utdraget fra Nils-Aslak Valkeapääs "Ruoktu váimmus":

"Reinflokken min
– de lange vandringenes folk
tusen år
tusen vintre
alltid framover mot horisonten"`,
      solution: `**Analyse:**

**Tema:**
Diktet handler om samisk identitet og tilhørighet, uttrykt gjennom reindriften og nomadekulturen.

**Bildebruk:**
- "Reinflokken min" - personlig tilknytning, eierskap og identitet
- "de lange vandringenes folk" - metafor som knytter rein og same sammen
- "tusen år / tusen vintre" - tidsperspektiv som understreker tradisjonens dybde
- "horisonten" - symbol for fremtid, håp, og det uendelige landskapet

**Form:**
- Kort, komprimert form som minner om joik
- Fravær av tegnsetting skaper flyt
- Gjentakelsen av "tusen" skaper rytme
- Enkel, direkte ordbruk med dyp resonans

**Perspektiv:**
Jeg-perspektivet knytter identitet til reinflokken. "Min" viser tilhørighet, men "folk" utvider til fellesskapet - de som har vandret i tusen år.

**Kosmisk dimensjon:**
"Alltid framover mot horisonten" gir diktet et tidløst preg. Vandringen er både konkret (reindriften) og eksistensiell (menneskets plass i verden).

**Samisk kontekst:**
Diktet uttrykker samisk naturforståelse der menneske og natur er sammenvevd. Reindriften er ikke bare næring, men identitet, historie og fremtid.`,
    },
    // Primærtekst 1: Samisk dikt
    {
      id: 'norsk-vg1-3-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Nils-Aslak Valkeapää – fra «Ruoktu váimmus» (1985)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-3-primaertekst-1-text',
          type: 'text',
          content: `**Fra «Ruoktu váimmus» (Hjertet mitt er herfra)**
*Nils-Aslak Valkeapää, 1985*
*Oversatt fra nordsamisk*

---

Jeg bor i meg selv
i en lavvo av ord
alle ordene er mine

Ordene er mine forfedre
alt de har sett
alt de har gjort
alt de har følt

Ordene mine tilhører et fjell
en elv
et vann

Ordene mine tilhører
snøstormen i mars
midnattssolen i juni
nordlyset i januar

Jeg bor i ordene
ordene bor i meg

---

*Áillohaš kombinerer i dette diktet språk, identitet og natur. Ordene er ikke bare kommunikasjon, men arv, tilhørighet og bosted. Lavvo-metaforen knytter språket til den nomadiske kulturen.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Valkeapää. Analyser hvordan diktet fremstiller forholdet mellom språk, identitet og natur.',
        hints: ['Se på lavvo-metaforen', 'Hva betyr det at ordene "tilhører" naturfenomener?', 'Hvordan kobles forfedre og språk?'],
        solution: 'Analysen bør vise hvordan Valkeapää knytter språk til identitet (ordene som bosted), til tradisjon (ordene som forfedre) og til natur (ordene tilhører landskap og naturkrefter). Lavvo-metaforen forener det hele: språket er det som gir ly og tilhørighet i verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    // Primærtekst 2: Laila Stien
    {
      id: 'norsk-vg1-3-3-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Laila Stien – «Skolebilde» (utdrag fra novelle)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-3-primaertekst-2-text',
          type: 'text',
          content: `**Fra novellen «Skolebilde»**
*Laila Stien*

---

Hun var sju år da hun begynte på skolen. Den første dagen hadde hun på seg kofta si, den med de røde og blå båndene som mamma hadde sydd. Hun var stolt.

Men læreren så på henne og rynket pannen.

"Vi snakker norsk her," sa han. "Forstår du det?"

Hun nikket, selv om hun ikke forsto alt.

De andre barna lo. Hun visste ikke av hva.

Om kvelden spurte hun mamma hvorfor hun ikke kunne bruke kofta på skolen.

"Du kan det," sa mamma. "Ikke hør på dem."

Men neste dag lot hun kofta ligge. Det var lettere sånn.

Femti år senere finner hun kofta i et skap. Den er like vakker. Båndene er like røde og blå. Hun tar den på og ser seg i speilet.

Hun ser et barn som ikke visste at hun hadde rett til å være seg selv.

---

*Stiens novelle handler om fornorskingspolitikken sett fra et barns perspektiv. Den viser hvordan skam og undertrykkelse internaliseres, men også hvordan identitet kan gjenerobres.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-3',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Laila Stiens novelleutdrag «Skolebilde». Analyser hvordan teksten fremstiller fornorskingspolitikken og dens virkninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan opplever barnet møtet med skolen?',
            solution: 'Barnet opplever skam, forvirring og utenforskap. Hun forstår ikke hvorfor hun ikke kan bruke kofta eller hvorfor de andre ler.',
          },
          {
            label: 'b',
            task: 'Hva symboliserer kofta i novellen?',
            solution: 'Kofta symboliserer samisk identitet, tradisjon og tilhørighet. At hun legger den bort viser hvordan hun tvinges til å skjule sin identitet.',
          },
          {
            label: 'c',
            task: 'Hva betyr det at hun tar på kofta femti år senere?',
            solution: 'Det representerer gjenerobring av identitet, forsoning med fortiden, og anerkjennelse av at hun hadde rett til å være seg selv.',
          },
        ],
        solution: 'Novellen viser fornorskingspolitikkens menneskelige kostnader gjennom et barns øyne, men også muligheten for å gjenvinne det tapte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-7',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var fornorskingspolitikken?',
        options: [
          'En politikk som forsøkte å assimilere samer til norsk kultur og språk',
          'En politikk som fremmet samisk språk i skolen',
          'En politikk som ga samer selvstyre',
          'En politikk som bare gjaldt i Sverige og Finland',
        ],
        answer: 0,
        solution: 'Fornorskingspolitikken var en assimileringspolitikk der samiske (og kvenske) barn skulle lære norsk og "bli norske". Samisk språk og kultur ble undertrykt i skole og samfunn.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    // Primærtekst 3: Sigbjørn Skåden
    {
      id: 'norsk-vg1-3-3-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Sigbjørn Skåden – «Morsmål» (dikt)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-3-primaertekst-3-text',
          type: 'text',
          content: `**«Morsmål»**
*Sigbjørn Skåden*

---

Morsmålet mitt
ble tatt fra meg
før jeg ble født

Det ligger begravet
i min bestemors taushet
i min mors usikkerhet
i min egen lengsel

Jeg graver det opp
ord for ord
som arkeolog i eget liv

Noen ord finner jeg hele
andre er knust
noen mangler helt

Men jeg fortsetter å grave
for morsmålet er ikke bare språk
det er alt det som kunne vært sagt
mellom generasjonene

Det som ble tiet i hjel
fordi noen bestemte
at våre ord
ikke var verdt å bevare

---

*Skådens dikt uttrykker sorg over tapt språk, men også vilje til gjenerobring. Arkeolog-metaforen er sentral: identitet må graves frem fra historiens lag.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-4',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Sigbjørn Skådens dikt «Morsmål». Fokuser på arkeolog-metaforen og hva den sier om forholdet mellom språk og identitet.',
        hints: ['Hva graver dikteren etter?', 'Hvorfor er noen ord "knust"?', 'Hva betyr det at språket ble tatt "før jeg ble født"?'],
        solution: 'Analysen bør vise at arkeolog-metaforen uttrykker arbeidet med å gjenfinne et tapt språk og en tapt identitet. "Før jeg ble født" viser at tapet skjedde før dikteren kunne velge - fornorskingen rammet forrige generasjon. "Knuste" ord representerer det som er ødelagt og ikke kan gjenskapes fullt ut. Diktet uttrykker både sorg og motstand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-3-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Hvorfor er det viktig at samisk litteratur har en plass i norskfaget?',
        hints: ['Tenk på samenes status som urfolk', 'Tenk på representasjon og perspektiver', 'Tenk på hva litteratur kan lære oss', 'Tenk på fellesskap og mangfold'],
        solution: 'Drøftingen bør ta opp at samene er Norges urfolk med rett til synlighet i utdanningen, at samisk litteratur gir alternative perspektiver på natur, identitet og historie, at det utvider forståelsen av hva "norsk" litteratur er, og at det bidrar til forsoning med en vanskelig fortid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en samisk artist som kombinerer joik med moderne musikk (f.eks. Mari Boine, Sofia Jannok, Ella Marie Hætta Isaksen, KEiiNO). Lytt til en låt og analyser: Hvordan kombinerer artisten tradisjon og modernitet? Hva formidler teksten/musikken?',
        hints: ['Lytt til både musikk og tekst', 'Se etter tradisjonelle joik-elementer', 'Legg merke til moderne musikalske virkemidler', 'Reflekter over temaer og budskap'],
        solution: 'Analysen bør identifisere hvordan artisten bruker tradisjonelle joik-elementer (vokalteknikk, rytme, gjentakelse) i kombinasjon med moderne sjangre. Refleksjon over tematikk (identitet, natur, motstand) og hvordan musikken formidler samisk kultur til nye publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Natur, identitet og motstand i samisk litteratur. Bruk eksempler fra minst to tekster eller forfattere fra kapittelet.',
        hints: ['Vis hvordan naturen er mer enn kulisse i samisk litteratur', 'Knytt natur til identitet og tilhørighet', 'Drøft motstand mot undertrykkelse', 'Bruk konkrete teksteksempler'],
        solution: 'Essayet bør vise forståelse for hvordan natur, identitet og motstand henger sammen i samisk litteratur. Naturen er identitetsbærende, ikke bare bakgrunn. Motstanden mot kolonialisme uttrykkes ofte gjennom å hevde denne naturforståelsen. Konkrete eksempler fra Valkeapää, Stien, Skåden eller andre må brukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et dikt av en samisk forfatter (f.eks. Sigbjørn Skåden, Synnøve Persen eller Rawdna Carita Eira). Les diktet og skriv en kort analyse (200-300 ord) der du fokuserer på tema, bildebruk og hva diktet formidler om samisk identitet eller kultur.',
        hints: ['Søk på forfatternavnet pluss "dikt" eller "poesi"', 'Les diktet flere ganger før du analyserer', 'Se etter naturbilder og hva de kan symbolisere', 'Tenk på hvordan diktet forholder seg til tradisjon og samtid'],
        solution: 'Analysen bør identifisere diktets tema (f.eks. identitet, språk, natur, tilhørighet), beskrive sentrale bilder og virkemidler, og reflektere over hva diktet sier om samisk erfaring. God analyse viser forståelse for at samisk lyrikk ofte har andre perspektiver enn majoritetskulturens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign tradisjonell joik med moderne samisk musikk. Velg en tradisjonell joik (finn eksempler på YouTube eller Spotify) og sammenlign med en låt av Mari Boine, Sofia Jannok eller KEiiNO. Hva er bevart fra tradisjonen? Hva er nytt?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv den tradisjonelle joiken: Hvilken type joik er det? Hvilke musikalske elementer hører du?',
            solution: 'Beskrivelsen bør identifisere joiktype (person, dyr, sted), notere vokalteknikk (bruk av stavelser, pustepauser), rytme og eventuell tekst.',
          },
          {
            label: 'b',
            task: 'Beskriv den moderne låten: Hvilke joik-elementer finner du? Hvilke moderne elementer er lagt til?',
            solution: 'Bør identifisere tradisjonelle elementer (joikmelodi, vokalteknikk, tematikk) og moderne elementer (instrumentering, produksjon, arrangering, tekstspråk).',
          },
          {
            label: 'c',
            task: 'Drøft: Er det mulig å fornye joik uten å miste det tradisjonelle? Begrunn svaret ditt.',
            solution: 'Drøftingen bør vise forståelse for at tradisjon alltid utvikler seg, at moderne artister ofte har dype røtter i tradisjonen, og at fornyelse kan være nødvendig for at joik skal overleve og nå nye generasjoner.',
          },
        ],
        solution: 'Sammenligningen bør vise evne til å identifisere både kontinuitet og fornyelse i samisk musikkuttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en samtids samisk forfatter (Sigbjørn Skåden, Rawdna Carita Eira eller Synnøve Persen) og gjør research. Skriv en presentasjon (400-500 ord) som inkluderer: bakgrunn, viktige verk, sentrale temaer i forfatterskapet, og hvorfor denne forfatteren er viktig for samisk litteratur i dag.',
        hints: ['Bruk pålitelige kilder (forlag, litteraturleksikon, aviser)', 'Se etter intervjuer med forfatteren', 'Les om et eller flere verk og beskriv dem kort', 'Knytt forfatterskapet til temaer fra kapittelet'],
        solution: 'Presentasjonen bør vise selvstendig research og evne til å plassere forfatteren i en større sammenheng. God besvarelse viser forståelse for forfatterens betydning for samisk litteratur og for hvordan forfatterskapet behandler sentrale samiske temaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur', 'gjøre rede for samiske språk og rettigheter'],
      },
    },
    {
      id: 'norsk-vg1-3-3-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.3

**Hovedpunkter:**
- Samisk litteratur er en viktig del av norsk kulturarv med lang muntlig tradisjon
- Joiken er en unik kunstform - man joiker noe frem, ikke synger om det
- Fornorskingspolitikken undertrykte samisk kultur, noe som preger litteraturens temaer
- Moderne samiske forfattere kombinerer tradisjon med samtidsuttrykk
- Viktige forfattere: Nils-Aslak Valkeapää, Sigbjørn Skåden, Rawdna Carita Eira

**Sentrale begreper:**
- **Joik:** Samisk sang som fremkaller essensen av en person, et dyr eller et sted
- **Muitalus:** Samisk fortelling om hverdagshendelser
- **Máinnas:** Samisk eventyr med overnaturlige elementer
- **Stallo:** Trollaktig skikkelse i samisk tradisjon
- **Fornorskning:** Politikken som undertrykte samisk språk og kultur
- **Revitalisering:** Gjenoppliving av undertrykt språk og kultur

**Tips for eksamen:**
- Forstå forskjellen mellom joik og vanlig sang - joik fremkaller, synger ikke om
- Kjenn til sammenhengen mellom fornorskingspolitikken og litteraturens temaer
- Bruk postkoloniale begreper også på samisk litteratur
- Vær oppmerksom på temaer som identitet, natur, tradisjon og modernitet
- Moderne artister som Mari Boine viser joikens levedyktighet i samtiden`,
    },
    {
      id: 'norsk-vg1-3-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **7.1 De samiske språkene** – Forstå språkene samisk litteratur er skrevet på
- **7.2 Fornorskingspolitikken** – Historisk bakgrunn for samisk litteraturs temaer
- **2.2 Lyrikk og diktanalyse** – Analyser samiske dikt og joiketekster
- **3.2 Kulturmøter og identitet** – Bruk postkoloniale begreper på samisk litteratur`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Litteratur fra andre kulturer
// ============================================================================

export const CHAPTER_NORSK_VG1_3_4: TextbookChapter = {
  id: 'norsk-vg1-3-4',
  courseId: 'norsk-vg1',
  chapterNumber: '3.4',
  title: 'Litteratur fra andre kulturer',
  description: 'Les og analyser skjønnlitteratur i oversettelse fra ulike verdensdeler og kulturer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke skjønnlitterære tekster i oversettelse fra ulike kulturer',
    'reflektere over kulturelle likheter og forskjeller i litteratur',
    'forstå oversettelsens rolle i kulturformidling',
  ],
  content: [
    {
      id: 'norsk-vg1-3-4-intro',
      type: 'text',
      content: `## Verdenslitteratur - å lese på tvers av kulturer

Litteratur er en universell menneskelig uttrykksform. Over hele verden har mennesker fortalt historier, skrevet dikt og skapt dramatikk. Å lese litteratur fra andre kulturer gir oss innsikt i andres erfaringer og utvider vår forståelse av verden.

**Hva er verdenslitteratur?**
Begrepet ble lansert av Johann Wolfgang von Goethe på 1800-tallet. Han mente at litteratur ikke tilhører én nasjon, men menneskeheten. Verdenslitteratur er de verkene som har krysset grenser og taler til lesere på tvers av kulturer.

**Hvorfor lese verdenslitteratur?**
- Gir perspektiv på egen kultur og tenkning
- Viser at noen temaer er universelle
- Avdekker kulturelle forskjeller og særtrekk
- Fremmer empati og forståelse
- Utvider det litterære repertoaret

**Utfordringer:**
- Språkbarrierer og oversettelse
- Kulturelle referanser vi ikke forstår
- Fare for eksotisering
- Hvem velger hva som oversettes?

**I dette kapittelet lærer du:**
- Om verdenslitteratur som begrep
- Om oversettelse og kulturformidling
- Å lese med kulturell bevissthet
- Om litteratur fra ulike kontinenter`,
    },
    {
      id: 'norsk-vg1-3-4-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Verdenslitteratur** | Litteratur som leses og verdsettes på tvers av kulturer |
| **Oversettelse** | Å gjengi en tekst på et annet språk |
| **Kulturformidling** | Å formidle kultur og verdier gjennom kunst og litteratur |
| **Hjemliggjøring** | Oversettelsesteknikk der teksten tilpasses norsk kultur |
| **Fremmedgjøring** | Oversettelsesteknikk der det fremmede beholdes |
| **Kanon** | Samling av verker som regnes som viktige og verdifulle |
| **Eksotisering** | Å fremstille andre kulturer som eksotiske og annerledes |
| **Flerspråklighet** | Å bruke flere språk, også i litterære tekster |`,
    },
    {
      id: 'norsk-vg1-3-4-def-1',
      type: 'definition',
      title: 'Oversettelse og kulturformidling',
      content: `**Oversettelsens kunst og utfordringer**

Når vi leser verdenslitteratur på norsk, leser vi alltid oversettelser. Oversettelse er ikke bare å bytte ut ord, men å formidle mening, stil, rytme og kulturelle nyanser.

**Hva oversetteren må ta stilling til:**

**Språklige valg:**
- Hvordan gjengi ordspill, rim og rytme?
- Skal dialekt oversettes til norsk dialekt?
- Hvordan håndtere ord som ikke finnes på norsk?

**Kulturelle valg:**
- Skal kulturspesifikke begreper forklares?
- Skal mål og vekt "oversettes" til våre?
- Hvordan formidle humor som er kulturspesifikk?

**Domestisering vs. fremmedgjøring:**
- **Domestisering:** Teksten tilpasses norsk kultur
- **Fremmedgjøring:** Det fremmede beholdes

**Eksempel:**
Japanske ord for familiemedlemmer har ingen direkte norske ekvivalenter. "Onee-san" betyr "storesøster", men brukes også om eldre jenter man ikke er i slekt med. Oversetteren må velge.

**Oversettelse som tolkning:**
Enhver oversettelse er en tolkning. Ulike oversettere gir ulike versjoner av samme verk. Det finnes ikke én "riktig" oversettelse.

**Tap og gevinst:**
Noe går alltid tapt i oversettelse (klang, ordspill, nyanser), men noe kan også vinnes (nye lesere, nye perspektiver, nytt liv til gamle tekster).`,
    },
    {
      id: 'norsk-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-5',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over oversettelse som kulturformidling: Hva tror du kan gå tapt når en tekst oversettes fra et språk til et annet? Hva kan eventuelt vinnes?',
        hints: ['Tenk på språklige virkemidler som rim, rytme, ordspill', 'Tenk på kulturspesifikke uttrykk', 'Tenk på hvem som får tilgang til teksten'],
        solution: 'Mulige tap: klang, rytme, ordspill, kulturelle nyanser, doble betydninger. Mulige gevinster: nye lesere, nytt perspektiv på egen kultur, tekstens videre liv, nye tolkninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-def-2',
      type: 'definition',
      title: 'Universelle temaer, kulturelle særtrekk',
      content: `**Det felles menneskelige og det kulturelt spesifikke**

Litteratur viser både det som forener mennesker og det som skiller oss.

**Universelle temaer:**
Noen temaer går igjen i all verdens litteratur:
- Kjærlighet og tap
- Død og sorg
- Vennskap og svik
- Konflikt mellom generasjoner
- Søken etter mening
- Kampen mellom godt og ondt
- Drømmer og ambisjoner
- Utenforskap og tilhørighet

**Kulturelle særtrekk:**
Hvordan disse temaene behandles varierer:
- **Forholdet til naturen:** Ulikt i ulike kulturer
- **Familiestrukturer:** Kjernefamilie vs. storfamilie
- **Individ vs. fellesskap:** Ulik vektlegging
- **Religiøse forestillinger:** Påvirker moral og verdier
- **Historisk kontekst:** Kriger, kolonialisme, revolusjoner

**Eksempel: Kjærlighet**
Kjærlighet finnes i all litteratur, men:
- Vestlig: Ofte fokus på individets valg
- Japansk: Kan innebære plikt og offer
- Afrikansk: Ofte knyttet til familie og samfunn
- Arabisk: Tradisjonell poesi: idealisert, abstrakt

**Å lese med åpenhet:**
Vi må være åpne for at ting kan bety noe annet i andre kulturer, samtidig som vi gjenkjenner det felles menneskelige.`,
    },
    {
      id: 'norsk-vg1-3-4-def-3',
      type: 'definition',
      title: 'Afrikansk litteratur',
      content: `**Et kontinent av fortellinger**

Afrika har over 50 land, tusenvis av språk og en enorm litterær rikdom - fra muntlige tradisjoner til moderne romaner som vinner verdens mest prestisjetunge priser.

**Muntlig tradisjon:**
- Griots (vestafrikanske fortellere/historikere)
- Eventyr, myter og legender
- Ordtak og visdomsord
- Sang og poesi

**Kolonialisme og språk:**
Mange afrikanske forfattere skriver på kolonispråk (engelsk, fransk, portugisisk), noe som skaper debatt om autentisitet og publikum.

**Viktige temaer:**
- Kolonialisme og avkolonisering
- Tradisjon vs. modernitet
- Identitet og kulturmøter
- Politikk og korrupsjon
- Migrasjon og diaspora

**Viktige forfattere:**

**Chinua Achebe (Nigeria, 1930-2013):**
"Ting faller fra hverandre" (1958) - skildrer hvordan kolonialismen ødela afrikansk samfunn innenfra. En av de mest leste afrikanske romanene.

**Chimamanda Ngozi Adichie (Nigeria, f. 1977):**
"Americanah", "Halvparten av en gul sol" - utforsker identitet, migrasjon, kjønn og Biafra-krigen.

**Ngugi wa Thiong'o (Kenya, f. 1938):**
Begynte å skrive på gikuyu istedenfor engelsk som politisk valg. "Decolonising the Mind".

**Abdulrazak Gurnah (Tanzania, f. 1948):**
Nobelprisvinner 2021. Skriver om flyktningers erfaringer og kolonialismens ettervirkninger.`,
    },
    {
      id: 'norsk-vg1-3-4-def-4',
      type: 'definition',
      title: 'Asiatisk litteratur',
      content: `**Mangfold fra verdens største kontinent**

Asia spenner fra Midtøsten til Japan, og litteraturen er tilsvarende mangfoldig.

**Klassiske tradisjoner:**
- Kinesisk poesi (over 3000 år)
- Japansk haiku og tanka
- Indisk epos (Mahabharata, Ramayana)
- Persisk poesi (Rumi, Hafiz)
- Arabisk litteratur (Tusen og én natt)

**Japansk litteratur:**

**Murasaki Shikibu (ca. 978-1014):**
"Fortellingen om Genji" - regnes som verdens første roman, skrevet av en kvinne ved det japanske hoffet.

**Haruki Murakami (f. 1949):**
"Norsk skog", "Kafka på stranden" - blander realisme og surrealisme, japansk og vestlig kultur.

**Kinesisk litteratur:**

**Mo Yan (f. 1955):**
Nobelprisvinner 2012. Magisk realisme og kinesisk historie.

**Indisk litteratur:**

**Arundhati Roy (f. 1961):**
"Guden for små ting" (1997) - Booker Prize. Kastesystem, kjærlighet, politikk.

**Midtøsten:**

**Naguib Mahfouz (Egypt, 1911-2006):**
Nobelprisvinner 1988. "Kairo-trilogien" - egyptisk familiesaga.

**Khalil Gibran (Libanon, 1883-1931):**
"Profeten" - filosofisk og poetisk verk, lest over hele verden.`,
    },
    {
      id: 'norsk-vg1-3-4-def-5',
      type: 'definition',
      title: 'Latinamerikansk litteratur',
      content: `**Magisk realisme og politisk litteratur**

Latinamerikansk litteratur har hatt enorm innflytelse på verdenslitteraturen, særlig gjennom den litterære retningen magisk realisme.

**Magisk realisme:**
En stil der overnaturlige elementer behandles som en naturlig del av virkeligheten. Det magiske er ikke fantasi, men en annen måte å forstå verden på.

**Viktige forfattere:**

**Gabriel García Márquez (Colombia, 1927-2014):**
Nobelprisvinner 1982. "Hundre års ensomhet" - episk familiekrønike med magisk realisme. "Kjærlighet i koleraens tid".

**Jorge Luis Borges (Argentina, 1899-1986):**
Noveller som utforsker uendelighet, tid og labyrinten. "Ficciones" - filosofiske og intellektuelle tekster.

**Isabel Allende (Chile, f. 1942):**
"Åndenes hus" - magisk realisme og chilensk historie. Eksil og identitet.

**Mario Vargas Llosa (Peru, f. 1936):**
Nobelprisvinner 2010. "Byen og hundene" - kritikk av militarisme og machismo.

**Roberto Bolaño (Chile, 1953-2003):**
"2666", "De ville detektiver" - ambisiøse, eksperimentelle romaner.

**Temaer i latinamerikansk litteratur:**
- Diktaturer og politisk undertrykkelse
- Kolonial arv og identitet
- Fattigdom og ulikhet
- Familie og generasjoner
- Myter og folketro
- Natur og landskap`,
    },
    {
      id: 'norsk-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner magisk realisme?',
        options: [
          'Overnaturlige elementer fremstilles som en naturlig del av virkeligheten',
          'Alt som skjer har en rasjonell forklaring',
          'Handlingen foregår alltid i en fantasy-verden',
          'Det er en sjanger kun for barnelitteratur',
        ],
        answer: 0,
        solution: 'Magisk realisme kjennetegnes ved at det overnaturlige behandles som hverdagslig og akseptert. Det er ikke fantasi eller eventyr, men en måte å se virkeligheten på.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-def-6',
      type: 'definition',
      title: 'Å lese med kulturell bevissthet',
      content: `**Tips for å lese verdenslitteratur**

**1. Vær nysgjerrig, ikke dømmende:**
Når noe virker fremmed eller uforståelig, still spørsmål istedenfor å avvise.

**2. Skaff kontekst:**
Les om forfatterens bakgrunn, historisk kontekst og kulturelle referanser. Forord og etterord er nyttige.

**3. Vær oppmerksom på oversettelsen:**
Hvem har oversatt? Når? Oversettelser eldes og nytolkes.

**4. Se etter det universelle i det spesifikke:**
Selv om konteksten er fremmed, kan følelsene være gjenkjennelige.

**5. Unngå eksotisering:**
Ikke les andre kulturer som "eksotiske" eller "pittoreske". De er like komplekse som vår egen.

**6. Tenk på hvem som forteller:**
Er forfatteren fra kulturen som beskrives? Er det en utenfra-stemme?

**7. Sammenlign med egen erfaring:**
Hva er likt? Hva er ulikt? Hvorfor?

**8. Vær oppmerksom på maktforhold:**
Hvem får bli oversatt og utgitt? Hvem definerer "verdenslitteratur"?

**Kritisk spørsmål:**
Verdenslitteratur har lenge vært definert av vestlige forlag og kritikere. Hva blir oversett? Hvem mangler?`,
    },
    {
      id: 'norsk-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-1',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om verdenslitteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med begrepet "verdenslitteratur"?',
            solution: 'Verdenslitteratur refererer til litterære verk som har krysset grenser og taler til lesere på tvers av kulturer og nasjoner. Begrepet ble lansert av Goethe.',
          },
          {
            label: 'b',
            task: 'Nevn to utfordringer ved å lese litteratur i oversettelse.',
            solution: 'Mulige svar: Tap av nyanser, ordspill og rytme; kulturelle referanser vi ikke forstår; oversetterens tolkningsvalg; fare for eksotisering.',
          },
          {
            label: 'c',
            task: 'Hva er magisk realisme?',
            solution: 'Magisk realisme er en litterær stil der overnaturlige elementer behandles som en naturlig del av virkeligheten. Det magiske er ikke fantasi, men en annen måte å forstå verden på.',
          },
        ],
        solution: 'Verdenslitteratur utvider vårt perspektiv, men krever kulturell bevissthet og forståelse for oversettelsens utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av tekst fra en annen kultur',
      problem: `Les dette haiku av Matsuo Bashō (Japan, 1644-1694):

"En gammel dam -
en frosk hopper uti,
lyden av vann."

Analyser diktet med tanke på kulturelle og universelle elementer.`,
      solution: `**Analyse:**

**Form:**
Haiku er en japansk diktform med tradisjonelt 5-7-5 stavelser. Formen er komprimert og fortettet.

**Innhold:**
Diktet beskriver et enkelt øyeblikk: en frosk hopper i en dam. Det er alt - og likevel mye mer.

**Kulturell kontekst:**
- Zen-buddhisme: Oppmerksomhet på øyeblikket
- Japansk estetikk: Det enkle, det flyktige
- Natur som meditasjon, ikke kulisse
- "Wabi-sabi": Skjønnhet i det ufullkomne

**Universelle elementer:**
- Øyeblikket av stillhet som brytes
- Lyden som fyller stillheten
- Naturen som kilde til refleksjon

**Analyse:**
"Gammel dam" etablerer tidsdybde og stillhet. "En frosk hopper uti" er en plutselig handling. "Lyden av vann" er etterdønningen - det som blir igjen.

Diktet handler egentlig om oppmerksomhet - å være til stede i øyeblikket. Det "gamle" møter det "levende" (frosken). Lyden er flyktig, men diktet fanger den for alltid.

**For norsk leser:**
Vi gjenkjenner øyeblikket selv om konteksten er japansk. Men zen-buddhismens filosofi gir diktet en ekstra dimensjon vi kanskje ikke fanger uten kulturell kunnskap.`,
    },
    // Primærtekst: Chinua Achebe
    {
      id: 'norsk-vg1-3-4-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Chinua Achebe – fra «Ting faller fra hverandre» (1958)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-4-primaertekst-1-text',
          type: 'text',
          content: `**Fra «Ting faller fra hverandre» (Things Fall Apart)**
*Chinua Achebe, 1958*
*Oversatt fra engelsk*

---

Okonkwo var godt kjent i alle de ni landsbyene og til og med utover det. Hans berømmelse hvilte på solide personlige bragder. Som ung mann på atten år hadde han brakt ære til landsbyen sin ved å kaste Amalinze, katten. Amalinze var den store bryteren som i syv år var ubeseiret, fra Umuofia til Mbaino. Han ble kalt Katten fordi ryggen hans aldri rørte bakken. Det var denne mannen Okonkwo kastet i en kamp som de gamle sa var en av de heftigste siden den gang landsbyens grunnlegger kjempet mot en ånd i villmarka i syv dager og syv netter.

[...]

Okonkwos far var hetende Unoka, og han var en mislykket mann. Han var fattig og konene og barna hans hadde knapt nok mat. Folk lo av ham fordi han var lat og sløv, men han var en begavet fløytespiller og hans lykkelige, lette hjerte gledet seg til de kommende årstider.

Unoka elsket de gode tingene i livet: god vin, god musikk og godt samvær. Han skyldte alle sine naboer penger, og de visste at han aldri ville betale tilbake. Men han var alltid velkommen fordi han brakte lykke og latter med seg.

[...]

Okonkwo skammet seg over sin far. Han var en mann av handling, en kriger. Hele hans liv var dominert av frykt, frykten for å mislykkes og bli som sin far.

---

*Achebe skildrer igbo-samfunnet i Nigeria før kolonialismen. Romanen viser et komplekst samfunn med egne verdier, konflikter og nyanser - ikke den "primitive" fremstillingen europeisk litteratur ofte ga.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Achebes «Ting faller fra hverandre». Analyser hvordan Achebe fremstiller igbo-kulturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke verdier ser vi i samfunnet som beskrives?',
            solution: 'Ære, styrke, personlige bragder, fellesskap (de ni landsbyene), tradisjon (grunnleggeren), men også rom for forskjeller (Unoka verdsettes for andre kvaliteter).',
          },
          {
            label: 'b',
            task: 'Hvordan fremstilles forholdet mellom far og sønn?',
            solution: 'Okonkwo skammer seg over faren og frykter å bli som ham. Faren representerer andre verdier (glede, musikk, fellesskap) som sønnen avviser.',
          },
        ],
        hints: ['Se på hva som gir status', 'Legg merke til nyansene i fremstillingen'],
        solution: 'Achebe fremstiller et komplekst samfunn med egne verdier, konflikter og menneskelige nyanser - langt fra stereotypier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-4',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign hvordan far-sønn-forholdet fremstilles i Achebes tekst med hvordan slike forhold ofte fremstilles i norsk litteratur du kjenner.',
        hints: ['Tenk på verdier og forventninger', 'Tenk på hva som gir status', 'Er det likheter på tvers av kulturer?'],
        solution: 'Sammenligningen bør vise at generasjonskonflikter er universelle, men at hva som står på spill (ære, status, verdier) kan variere. I begge kulturer kan sønner ønske å distansere seg fra fedre de skammer seg over.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // Primærtekst: García Márquez
    {
      id: 'norsk-vg1-3-4-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Gabriel García Márquez – fra «Hundre års ensomhet» (1967)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-4-primaertekst-2-text',
          type: 'text',
          content: `**Fra «Hundre års ensomhet» (Cien años de soledad)**
*Gabriel García Márquez, 1967*
*Oversatt fra spansk*

---

Mange år senere, foran eksekusjonspelotongen, skulle oberst Aureliano Buendía minnes den fjerne ettermiddagen da faren tok ham med for å se på is.

Macondo var dengang en landsby med tjue hus av leire og bambus bygget ved bredden av en elv med krystallklart vann som rant over en seng av polerte steiner, hvite og enorme som forhistoriske egg. Verden var så ny at mange ting manglet navn, og for å nevne dem måtte man peke med fingeren.

Hvert år i mars måned slo en familie av filler leir i utkanten av landsbyen og med stor ståhei viste de frem de siste oppfinnelsene. Først kom magneten. En tykk sigøyner med ustelt skjegg og spurvehender presenterte seg som Melquíades og ga en offentlig demonstrasjon av hva han selv kalte det åttende verdensunderverket.

---

*Åpningen av García Márquez\' mesterverk etablerer romanens tid og sted: Macondo, en oppdiktet landsby i Colombia. Den berømte første setningen beveger seg frem og tilbake i tid og introduserer den magiske realismen der det hverdagslige og det fantastiske eksisterer side om side.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-3',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra García Márquez\' «Hundre års ensomhet». Analyser åpningens fortellerteknikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan beveger teksten seg i tid?',
            solution: 'Teksten åpner i fremtiden (foran eksekusjonspelotongen), hopper til fortiden (den fjerne ettermiddagen) og beskriver en enda fjernere fortid (verden som var så ny).',
          },
          {
            label: 'b',
            task: 'Finn et eksempel på magisk realisme i utdraget.',
            solution: 'Beskrivelsen av verden som "så ny at mange ting manglet navn" - det er ikke bokstavelig sant, men skaper en mytisk, magisk stemning.',
          },
        ],
        hints: ['Legg merke til den berømte første setningen', 'Se etter det som bryter med realismen'],
        solution: 'García Márquez bruker kompleks tidsstruktur og mytisk språk for å skape en verden der det hverdagslige og det fantastiske møtes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem regnes som den moderne samiske litteraturens far?',
        options: [
          'Nils-Aslak Valkeapää',
          'Gabriel García Márquez',
          'Chinua Achebe',
          'Haruki Murakami',
        ],
        answer: 0,
        solution: 'Nils-Aslak Valkeapää (Áillohaš) regnes som den moderne samiske litteraturens far og vant Nordisk Råds litteraturpris i 1991.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-3-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en forfatter fra kapittelet som du vil undersøke nærmere. Les et utdrag eller en hel tekst og skriv en presentasjon som inkluderer:\na) Kort om forfatteren og kontekst\nb) Sammendrag av teksten\nc) Analyse av sentrale temaer og virkemidler\nd) Refleksjon over kulturelle og universelle elementer',
        hints: ['Bruk biblioteket eller digitale ressurser', 'Sett deg inn i kulturell kontekst', 'Bruk fagbegreper i analysen'],
        solution: 'Presentasjonen bør vise evne til å sette seg inn i en ukjent kulturell kontekst, analysere tekst med relevante begreper, og reflektere over forholdet mellom det kulturspesifikke og det universelle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Hvem bestemmer hva som er "verdenslitteratur"? Er begrepet problematisk?',
        hints: ['Tenk på maktforhold i forlagsbransjen', 'Hvem oversettes? Hvem utgis?', 'Er vestlige perspektiver overrepresentert?', 'Hva kan gjøres for å inkludere flere stemmer?'],
        solution: 'Drøftingen bør ta opp at "verdenslitteratur" historisk har vært definert av vestlige forlag og kritikere, at noen regioner og språk er underrepresentert, og at begrepet kan være problematisk hvis det brukes ukritisk. Samtidig kan det være et nyttig ideal om litteratur som krysser grenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Universelle temaer, kulturelle uttrykk - hva kan vi lære av å lese litteratur fra andre kulturer? Bruk konkrete eksempler fra tekster du har lest.',
        hints: ['Drøft forholdet mellom det universelle og det kulturspesifikke', 'Gi konkrete teksteksempler', 'Reflekter over egen leseerfaring', 'Vurder både muligheter og utfordringer'],
        solution: 'Essayet bør vise evne til å reflektere over hva lesing av verdenslitteratur gir oss, med konkrete eksempler. Det bør balansere entusiasme med kritisk refleksjon over utfordringer som oversettelse, eksotisering og maktforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.4

**Hovedpunkter:**
- Verdenslitteratur er verk som krysser grenser og taler til lesere på tvers av kulturer
- Oversettelse er tolkning - noe går tapt, men noe kan også vinnes
- Noen temaer er universelle (kjærlighet, død, tilhørighet), men behandles ulikt i ulike kulturer
- Afrikas, Asias og Sør-Americas litteratur gir alternative perspektiver
- Viktige forfattere: Chinua Achebe, Haruki Murakami, Gabriel García Márquez

**Sentrale begreper:**
- **Verdenslitteratur:** Litteratur som leses på tvers av kulturer
- **Hjemliggjøring:** Oversettelse der teksten tilpasses norsk kultur
- **Fremmedgjøring:** Oversettelse der det fremmede beholdes
- **Kulturformidling:** Å formidle kultur gjennom kunst og litteratur
- **Kanon:** Samling av verker som regnes som viktige
- **Eksotisering:** Å fremstille andre kulturer som eksotiske og annerledes

**Tips for eksamen:**
- Reflekter over hva som kan gå tapt og vinnes i oversettelse
- Se etter både universelle temaer og kulturelle særtrekk i teksten
- Vær oppmerksom på fare for eksotisering - les med kritisk blikk
- Kjenn til noen viktige forfattere fra ulike verdensdeler
- Vurder hvem som velger hva som oversettes og leses`,
    },
    {
      id: 'norsk-vg1-3-4-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **3.1 Flerkulturell litteratur** – Norske forfattere med flerkulturell bakgrunn
- **3.2 Kulturmøter og identitet** – Postkoloniale perspektiver på litteratur
- **2.4 Romananalyse** – Analyser romaner fra andre kulturer
- **3.5 Samtidslitteratur og aktuelle temaer** – Se verdenslitteratur i samtidskontekst`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Samtidslitteratur og aktuelle temaer
// ============================================================================

export const CHAPTER_NORSK_VG1_3_5: TextbookChapter = {
  id: 'norsk-vg1-3-5',
  courseId: 'norsk-vg1',
  chapterNumber: '3.5',
  title: 'Samtidslitteratur og aktuelle temaer',
  description: 'Utforsk samtidslitteratur som tar opp aktuelle samfunnstemaer som klima, teknologi og globalisering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke samtidige tekster som tar opp aktuelle samfunnstemaer',
    'reflektere over litteraturens rolle som samfunnskritikk og samtidskommentar',
    'forstå hvordan litteratur kan bidra til samtalen om vår tids utfordringer',
  ],
  content: [
    {
      id: 'norsk-vg1-3-5-intro',
      type: 'text',
      content: `## Samtidslitteratur - litteratur om vår egen tid

Samtidslitteratur er litteratur som er skrevet i vår egen tid og som ofte tar opp temaer og utfordringer vi står midt oppe i. Den speiler samfunnet vi lever i og kan hjelpe oss å forstå og bearbeide vår egen virkelighet.

**Hva kjennetegner samtidslitteratur?**
- Skrevet i vår tid (grovt regnet de siste 20-30 årene)
- Tar ofte opp aktuelle temaer
- Reflekterer samtidens språk, kultur og teknologi
- Kan være vanskelig å vurdere historisk betydning
- I stadig dialog med samfunnet rundt

**Aktuelle temaer i samtidslitteraturen:**
- Klimakrise og miljø
- Teknologi og digitalisering
- Globalisering og migrasjon
- Identitet og mangfold
- Ulikhet og klasse
- Mental helse
- Kjønn og seksualitet

**Hvorfor lese samtidslitteratur?**
- Gir perspektiv på egen tid
- Hjelper oss å forstå komplekse utfordringer
- Kan utfordre og utfordres
- Viser at litteratur er levende og relevant
- Gir stemme til erfaringer vi deler

**I dette kapittelet utforsker vi:**
- Klimafiksjon og økolitteratur
- Teknologi og digitalisering i litteraturen
- Globalisering og migrasjon
- Litteratur som samfunnskritikk`,
    },
    {
      id: 'norsk-vg1-3-5-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Samtidslitteratur** | Litteratur skrevet i vår egen tid |
| **Klimafiksjon** | Litteratur som tematiserer klimaendringer (cli-fi) |
| **Økolitteratur** | Litteratur som utforsker forholdet mellom menneske og natur |
| **Dystopi** | Framtidsskildring av et skremmende samfunn |
| **Autofaksjon** | Litteratur basert på forfatterens eget liv |
| **Migrasjonslitteratur** | Litteratur om migrasjon og flerkulturelle erfaringer |
| **Digital litteratur** | Litteratur skapt for eller om digitale medier |
| **Samfunnskritikk** | Kritisk kommentar til samfunnsforhold |`,
    },
    {
      id: 'norsk-vg1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-7',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner samtidslitteratur?',
        options: [
          'Den er skrevet i vår egen tid og tar ofte opp aktuelle temaer',
          'Den er alltid dystopisk',
          'Den må handle om teknologi',
          'Den er skrevet av forfattere under 30 år',
        ],
        answer: 0,
        solution: 'Samtidslitteratur kjennetegnes ved å være skrevet i vår tid og ofte (men ikke alltid) ta opp aktuelle temaer og utfordringer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-def-1',
      type: 'definition',
      title: 'Klimafiksjon og økolitteratur',
      content: `**Litteratur om miljøkrisen**

Klimaendringene er vår tids største utfordring, og litteraturen har begynt å ta dette inn. "Klimafiksjon" (cli-fi) og økolitteratur utforsker miljøkrisens konsekvenser og årsaker.

**Hva er klimafiksjon?**
Skjønnlitteratur som tar opp klimaendringer og miljøkrise - enten som hovedtema eller viktig bakgrunn. Kan være realistisk eller spekulativ.

**Økolitteratur:**
Et bredere begrep for litteratur som setter naturen i sentrum og utforsker forholdet mellom menneske og natur.

**Vanlige temaer:**
- Klimakatastrofer og deres konsekvenser
- Naturens egenverdi
- Menneskets plass i naturen
- Tap av arter og økosystemer
- Generasjonsansvar
- Handlingslammelse og håp

**Norske eksempler:**

**Maja Lunde (f. 1975):**
"Bienes historie" (2015) - tre fortellinger fra ulike tider knyttet sammen av bier og pollinering. Internasjonal bestselger.
"Blå" (2017), "Przewalskis hest" (2019) - fortsetter klimakvartetten.

**Gert Nygårdshaug (f. 1946):**
"Mengele Zoo"-trilogien - politisk og økologisk thriller.

**Internasjonale eksempler:**
- Richard Powers: "The Overstory" (om trær og aktivisme)
- Barbara Kingsolver: "Flight Behavior" (om klimaflyktninger, sommerfugler)
- Kim Stanley Robinson: "The Ministry for the Future" (klimapolitikk som fiksjon)

**Litteraturens rolle:**
Klimafiksjon kan gjøre abstrakte trusler konkrete og emosjonelt tilgjengelige. Den kan vekke engasjement på måter vitenskapelige rapporter ikke klarer.`,
    },
    {
      id: 'norsk-vg1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-6',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en styrke ved klimafiksjon som virkemiddel?',
        options: [
          'Den gjør abstrakte trusler konkrete og emosjonelt tilgjengelige',
          'Den gir eksakte vitenskapelige data om klimaendringer',
          'Den unngår å ta stilling til kontroversielle spørsmål',
          'Den er alltid realistisk og dokumentarisk',
        ],
        answer: 0,
        solution: 'Klimafiksjonens styrke er at den kan gjøre abstrakte, statistiske trusler om til konkrete, følbare erfaringer gjennom karakterer og historier.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-def-2',
      type: 'definition',
      title: 'Teknologi og digitalisering i litteraturen',
      content: `**Litteratur om den digitale tidsalderen**

Teknologi forandrer hvordan vi lever, kommuniserer og forstår oss selv. Samtidslitteraturen utforsker disse endringene.

**Temaer:**
- Sosiale medier og identitet
- Overvåkning og personvern
- Kunstig intelligens og automatisering
- Virtuelle virkeligheter
- Teknologiavhengighet
- Digital ensomhet vs. tilkobling
- Informasjonsoverflod og sannhet

**Norske eksempler:**

**Agnes Ravatn (f. 1983):**
"Operasjon sjølvdisiplin" (2014) - om å koble fra internett og sosiale medier.

**Erlend Loe (f. 1969):**
"Doppler" (2004) - rømmer fra moderne samfunn til skogen.
Mange romaner om fremmedgjøring i moderne liv.

**Tore Renberg (f. 1972):**
Skildrer digital kommunikasjon og samtidsliv.

**Internasjonale eksempler:**
- Dave Eggers: "The Circle" (om et alt-kontrollerende tech-selskap)
- Kazuo Ishiguro: "Klara and the Sun" (AI og menneskelighet)
- Sally Rooney: Romaner der digital kommunikasjon er sentralt

**Dystopi og advarsel:**
Mye teknologilitteratur er dystopisk - den advarer mot utviklinger som allerede er i gang. Men den kan også utforske teknologiens muligheter.

**Spørsmål litteraturen stiller:**
- Hva gjør teknologien med relasjonene våre?
- Hvem kontrollerer teknologien - og oss?
- Hva er menneskelig i en digital verden?
- Hvordan påvirkes identitet av sosiale medier?`,
    },
    {
      id: 'norsk-vg1-3-5-def-3',
      type: 'definition',
      title: 'Globalisering og migrasjon',
      content: `**Litteratur om en verden i bevegelse**

Globalisering har gjort verden mindre, men også mer kompleks. Mennesker flytter, kulturer møtes, og identiteter forhandles. Dette er sentralt i samtidslitteraturen.

**Temaer:**
- Migrasjon og flukt
- Kulturmøter og -kollisjoner
- Diaspora og hybrididentitet
- Hjemløshet og tilhørighet
- Økonomisk ulikhet
- Grenser og nasjonalisme

**Norske stemmer:**
Som vi har sett i kapittel 3.1, har norsk litteratur fått viktige bidrag fra forfattere med flerkulturell bakgrunn.

**Internasjonale eksempler:**

**Mohsin Hamid (Pakistan/UK):**
"Exit West" (2017) - kjærlighet og flukt gjennom magiske dører som åpner til nye steder. Migrasjon som allestedsnærværende erfaring.

**Chimamanda Ngozi Adichie (Nigeria/USA):**
"Americanah" (2013) - nigeriansk kvinne i USA, identitet og rase.

**Hanya Yanagihara (USA):**
"To Paradise" (2022) - alternativ historie og migrasjon.

**Abdulrazak Gurnah (Tanzania/UK):**
Nobelprisvinner 2021. Flyktningerfaringer og kolonialismens ettervirkninger.

**Litteraturens styrke:**
Statistikk om migrasjon er abstrakt. Litteraturen gir ansikter, historier og følelser til tallene. Den kan skape empati og forståelse.`,
    },
    {
      id: 'norsk-vg1-3-5-def-4',
      type: 'definition',
      title: 'Litteratur som samfunnskritikk',
      content: `**Å skrive mot makten**

Litteratur har alltid vært et sted for samfunnskritikk. I dag fortsetter forfattere å utfordre maktstrukturer og sette søkelys på urettferdighet.

**Former for samfunnskritikk:**
- Sosialrealisme: Realistisk skildring av samfunnsproblemer
- Satire: Latterliggjøring av makt og konvensjoner
- Dystopi: Advarsel gjennom skrekkscenarioer
- Dokumentar: Blanding av fakta og fiksjon
- Personlig: Det politiske i det personlige

**Hva kritiserer samtidslitteraturen?**
- Økonomisk ulikhet og klasseskiller
- Rasisme og diskriminering
- Kjønnsbasert undertrykkelse
- Miljøødeleggelse
- Politisk korrupsjon
- Medienes rolle
- Konsumerisme og kapitalisme

**Norske eksempler:**

**Jan Kjærstad (f. 1953):**
"Berge" (2017) - utforsker norsk selvbilde og rikdom.

**Vigdis Hjorth (f. 1959):**
"Arv og miljø" (2016) - familiekritikk som ble samfunnsdebatt.

**Karl Ove Knausgård (f. 1968):**
"Min kamp"-serien - det private som politisk.

**Zeshan Shakar:**
Klassekritikk i "Tante Ulrikkes vei".

**Kan litteratur forandre noe?**
Litteratur forandrer sjelden verden direkte, men den kan:
- Endre hvordan vi ser ting
- Gi ord til erfaringer
- Skape empati
- Inspirere til handling
- Holde debatten levende`,
    },
    {
      id: 'norsk-vg1-3-5-def-5',
      type: 'definition',
      title: 'Samtidslitteraturens utfordringer',
      content: `**Å skrive og lese om egen tid**

Det er utfordringer knyttet til litteratur som handler om det vi står midt oppe i.

**Utfordringer for forfattere:**
- Virkeligheten endrer seg raskt
- Vanskelig å få perspektiv
- Fare for å bli datert
- Balanse mellom aktualitet og tidløshet
- Risiko for å bli "pamflett" eller forenklet

**Utfordringer for lesere:**
- Vi mangler historisk avstand
- Vanskelig å skille det viktige fra støyen
- Kan være ubehagelig å se egen tid
- Risiko for bekreftelse av egne synspunkter

**Litteratur vs. journalistikk:**
- Journalistikk: Fakta, aktualitet, nøytralitet
- Litteratur: Perspektiv, fortolkning, følelser
- Samtidslitteratur kan operere i grenselandet

**Eksempel: Klimafiksjon**
Klimafiksjon kan kritiseres for å forenkle komplekse problemer, men forsvares for å gjøre dem emosjonelt tilgjengelige.

**Tidløshet i samtidslitteratur:**
De beste samtidsromanene klarer å være både aktuelle og tidløse - de tar opp aktuelle temaer, men gjør det på måter som vil være relevante også senere.

**Spørsmål å stille:**
- Er denne teksten bare aktuell, eller også tidløs?
- Forenkler den eller kompliserer den?
- Gir den nye perspektiver eller bekrefter den bare det jeg allerede tror?`,
    },
    {
      id: 'norsk-vg1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-1',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmål om samtidslitteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "klimafiksjon"?',
            solution: 'Klimafiksjon er skjønnlitteratur som tar opp klimaendringer og miljøkrise som hovedtema eller viktig bakgrunn.',
          },
          {
            label: 'b',
            task: 'Nevn tre aktuelle temaer som er vanlige i samtidslitteraturen.',
            solution: 'Mulige svar: Klimakrise, teknologi/digitalisering, migrasjon/globalisering, identitet, ulikhet, mental helse, kjønn og seksualitet.',
          },
          {
            label: 'c',
            task: 'Hvorfor kan det være utfordrende å skrive om sin egen tid?',
            solution: 'Utfordringer: Mangler perspektiv, virkeligheten endrer seg raskt, fare for å bli datert, vanskelig å skille viktig fra uviktig.',
          },
        ],
        solution: 'Samtidslitteratur tar opp aktuelle temaer, men må balansere aktualitet med tidløshet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av klimafiksjon',
      problem: `Analyser dette utdraget fra Maja Lundes "Bienes historie":

"Året 2098. Den siste bien døde i 2045. Nå pollinerte vi for hånd. Jeg strakte meg opp mot de hvite blomstene og førte den lille børsten forsiktig fra blomst til blomst. Pollen festet seg til de stive hårene. Jeg arbeidet systematisk, nøye. Én feil, og det ble ingen frukt.

Solen brant. Ryggen verket. Men jeg fortsatte. For barna. For fremtiden. Eller det som var igjen av den."`,
      solution: `**Analyse:**

**Sjanger og form:**
Klimafiksjon med dystopisk element. Fremtidsscenariet gjør klimakrisen konkret og menneskelig.

**Tema:**
- Tap av biologisk mangfold
- Menneskets avhengighet av naturen
- Konsekvenser av dagens valg
- Generasjonsansvar

**Virkemidler:**

**Konkretisering:**
Abstrakt klimatrussel → håndgripelig handling (manuell pollinering).

**Perspektiv:**
Jeg-forteller skaper nærhet og identifikasjon.

**Detaljer:**
"Den lille børsten", "systematisk, nøye" - viser hvor møysommelig og sårbart systemet er.

**Kroppslige erfaringer:**
"Solen brant. Ryggen verket." - leseren kjenner slitet.

**Emosjonell appell:**
"For barna. For fremtiden." - knytter til universelle verdier.

**Ironi:**
Mennesket må gjøre jobben biene gjorde gratis.

**Effekt:**
Teksten gjør klimakrisen emosjonelt tilgjengelig. Vi forstår ikke bare intellektuelt, men føler konsekvensene. Det skaper engasjement.`,
    },
    // Primærtekst: Maja Lunde
    {
      id: 'norsk-vg1-3-5-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Maja Lunde – fra «Bienes historie» (2015)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-5-primaertekst-1-text',
          type: 'text',
          content: `**Fra «Bienes historie»**
*Maja Lunde, 2015*

---

**Kina, 2098**

Treet hadde blomster på alle de tynne greinene, hvite, skjøre, sårbare. Jeg strakte meg opp mot dem med den lille børsten i hånden. Forsiktig dyttet jeg til pollenbærerne i midten av blomsten, lot de stive hårene i børsten samle opp det gule støvet. Deretter førte jeg børsten videre til neste blomst.

Det var en god dag. Grenene hang lavt, jeg slapp å strekke meg for mye. Treet var så fullt av blomster at det nesten ble hvitt. Så mye liv. Så mange muligheter.

Men mulighetene krevde arbeid. Hver blomst, én etter én. Systematisk. Ingen snarveier.

Jeg arbeidet fra morgen til kveld. Fingrene ble stive av å holde børsten. Nakken verket av å se opp. Men jeg fortsatte.

For hvert drag med børsten tenkte jeg på Wei-Wen. Min sønn. Tre år gammel. Han sov nå, hjemme hos moren min. Når han våknet, ville han spise. Og for at han skulle ha noe å spise, måtte disse trærne bære frukt. Og for at trærne skulle bære frukt, måtte jeg føre børsten fra blomst til blomst.

Det var enkelt, egentlig. En enkel sammenheng. Men også skremmende. For hva hvis jeg gjorde feil? Hva hvis børsten gled, hvis pollen ikke festet seg? Det fantes ingen margin.

Biene hadde gjort dette arbeidet. Millioner av bier. De fløy fra blomst til blomst, uvitende om sin egen betydning. For dem var det bare mat. For oss var det alt.

---

*Maja Lunde bruker tre parallelle fortellinger fra ulike tider for å utforske menneskets forhold til naturen. I 2098-fortellingen er biene borte, og mennesker må gjøre jobben selv.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Maja Lundes «Bienes historie». Analyser hvordan teksten gjør klimakrisen konkret og emosjonelt tilgjengelig.',
        hints: ['Se på hvordan abstrakt trussel blir konkret handling', 'Legg merke til kroppslige beskrivelser', 'Hvordan brukes perspektiv?'],
        solution: 'Analysen bør vise at Lunde konkretiserer klimakrisen gjennom én persons arbeid, bruker kroppslige erfaringer for å skape innlevelse, og knytter til universelle verdier (omsorg for barn/fremtid). Dette gjør det abstrakte emosjonelt tilgjengelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // Primærtekst: Agnes Ravatn
    {
      id: 'norsk-vg1-3-5-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Agnes Ravatn – fra «Operasjon sjølvdisiplin» (2014)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-5-primaertekst-2-text',
          type: 'text',
          content: `**Fra «Operasjon sjølvdisiplin»**
*Agnes Ravatn, 2014*

---

Eg skulle slutte å sjekke Facebook. Det var planen. Ikkje for alltid, berre for ei stund. Kanskje ein månad. Kanskje to.

Problemet var at eg sjekka Facebook heile tida. Om morgonen, før eg stod opp. I lunsjpausen. På do. Før eg sovna. Det var det første og det siste eg gjorde kvar dag.

Og det var ikkje ein gong noko der. Aldri noko viktig. Berre bilete av mat folk hadde laga. Meiningar om ting eg ikkje brydde meg om. Oppdateringar frå folk eg knapt kjente.

Likevel sjekka eg. Igjen og igjen. Som om eg forventa at noko skulle skje. Som om livet mitt var der, inne i telefonen, i staden for her ute.

Det var difor eg bestemte meg. Slutte. Berre slutte.

Første dagen var ikkje så ille. Eg tenkte på det, sjølvsagt. Fleire gongar tok eg opp telefonen før eg hugsa. Men eg la han ned igjen.

Andre dagen var verre. Eg kjente det som kløe. Som om kroppen sakna noko den var vant til å få.

Tredje dagen begynte eg å lure på kva folk dreiv med. Kva dei posta. Om dei sakna meg.

Dei sakna meg ikkje. Det visste eg. Dei la ikkje ein gong merke til at eg var borte.

Men det var kanskje poenget.

---

*Ravatn skriv humoristisk og sjølvironisk om å koble frå den digitale verda. Teksten set ord på erfaringar mange kjenner seg att i.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-3',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Agnes Ravatns «Operasjon sjølvdisiplin». Analyser hvordan teksten skildrer forholdet vårt til sosiale medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke trekk ved digital avhengighet beskrives?',
            solution: 'Konstant sjekking, fysisk ubehag når man slutter, følelse av å gå glipp av noe, automatiske handlinger, innholdet er egentlig uviktig.',
          },
          {
            label: 'b',
            task: 'Hvilken tone har teksten, og hvilken effekt gir den?',
            solution: 'Tonen er selvironisk og humoristisk. Effekten er at leseren kjenner seg igjen uten å føle seg dømt, og kritikken blir lettere å ta inn.',
          },
        ],
        solution: 'Ravatn bruker humor og selvironi for å beskrive digital avhengighet på en måte som er gjenkjennelig og inviterer til refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // Primærtekst: Mohsin Hamid
    {
      id: 'norsk-vg1-3-5-primaertekst-3',
      type: 'collapsible',
      title: 'Primærtekst: Mohsin Hamid – fra «Exit West» (2017)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg1-3-5-primaertekst-3-text',
          type: 'text',
          content: `**Fra «Exit West»**
*Mohsin Hamid, 2017*
*Oversatt fra engelsk*

---

I en by som veltet seg på randen av borgerkrig, var det et par som het Saeed og Nadia. De var unge, og de var i ferd med å bli forelsket.

Saeed kom fra en religiøs familie. Han ba fem ganger om dagen, som faren sin. Nadia bar svart kappe fra topp til tå, men hun ba ikke, og hun levde alene, noe som var uvanlig for en ung kvinne.

De møttes på et kveldskurs, sittende ved siden av hverandre. Han tilbød henne sin te da hun ikke hadde fått. Hun smilte og tok imot.

Utenfor forelesningssalen ble gatene farligere. Eksplosjoner hørtes i det fjerne, deretter nærmere. Kontrollposter dukket opp. Mennesker forsvant.

Rykter spredte seg om dører. Svarte dører som førte andre steder. Man gikk inn i en dør i denne byen og kom ut i en helt annen - i Hellas, i Dubai, i London. Bare rykter, sa folk. Men noen hadde sett dem. Noen hadde gått gjennom.

Saeed og Nadia begynte å lete etter en dør.

Ikke fordi de ønsket å forlate alt de kjente. Men fordi det de kjente var i ferd med å forsvinne uansett.

---

*Hamid bruker magisk realisme for å fortelle om flukt og migrasjon. Dørene som åpner til nye steder gjør migrantopplevelsen universell - alle kan forestille seg å gå gjennom en dør.*`,
        },
      ],
    },
    {
      id: 'norsk-vg1-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-4',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Mohsin Hamids «Exit West». Analyser hvordan han bruker dørene som litterært virkemiddel.',
        hints: ['Hva representerer dørene?', 'Hvorfor magisk realisme?', 'Hva oppnår denne teknikken?'],
        solution: 'Analysen bør vise at dørene er et magisk-realistisk element som gjør migrasjon til noe universelt (alle kan forestille seg å gå gjennom en dør), fokuserer på valget om å forlate fremfor den farlige reisen, og skaper en drømmeaktig kvalitet som gjør det fremmede gjenkjennelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'norsk-vg1-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-5',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign hvordan to av primærtekstene tar opp aktuelle temaer. Hva er likt og ulikt i tilnærmingen?',
        hints: ['Velg to tekster', 'Sammenlign tema, virkemidler og tone', 'Vurder effekten på leseren'],
        solution: 'Sammenligningen bør identifisere likheter og forskjeller i hvordan tekstene tar opp samtiden - for eksempel grad av realisme, bruk av humor vs. alvor, personlig vs. samfunnsmessig fokus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: Kan litteratur bidra til å løse samfunnsproblemer som klimakrisen, eller er det bare underholdning?',
        hints: ['Tenk på hva litteratur kan og ikke kan gjøre', 'Sammenlign med andre måter å kommunisere på', 'Vurder eksempler på litteratur som har hatt samfunnseffekt'],
        solution: 'Drøftingen bør ta opp at litteratur sjelden løser problemer direkte, men kan endre holdninger, skape empati, gi ord til erfaringer og holde debatten levende. Den kan komplementere vitenskap og politikk ved å gjøre det abstrakte konkret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et aktuelt tema (klima, teknologi, migrasjon, ulikhet eller annet) og finn en samtidstekst som tar det opp. Presenter teksten og analyser hvordan den behandler temaet.',
        hints: ['Velg en tekst du har tilgang til', 'Sett deg inn i konteksten', 'Bruk fagbegreper i analysen', 'Vurder tekstens styrker og svakheter'],
        solution: 'Presentasjonen bør vise evne til selvstendig valg av tekst, forståelse for kontekst, bruk av relevante analysebegreper, og kritisk vurdering av hvordan teksten behandler det aktuelle temaet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord): Litteratur og samtiden - hvordan kan skjønnlitteratur hjelpe oss å forstå vår egen tid? Bruk eksempler fra tekster du har lest.',
        hints: ['Drøft litteraturens muligheter og begrensninger', 'Bruk konkrete teksteksempler', 'Reflekter over egen leseerfaring', 'Vurder forholdet mellom fiksjon og virkelighet'],
        solution: 'Essayet bør vise evne til å reflektere over litteraturens rolle som samtidskommentar, med konkrete eksempler. Det bør balansere entusiasme med kritisk vurdering av litteraturens begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-3-5-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.5

**Hovedpunkter:**
- Samtidslitteratur er litteratur skrevet i vår tid om aktuelle temaer og utfordringer
- Klimafiksjon (cli-fi) gjør abstrakte miljøtrusler konkrete og emosjonelt tilgjengelige
- Teknologi og digitalisering er sentrale temaer - ofte med dystopiske undertoner
- Autofaksjon blander fiksjon og selvbiografi
- Viktige norske forfattere: Maja Lunde, Karl Ove Knausgård, Agnes Ravatn

**Sentrale begreper:**
- **Samtidslitteratur:** Litteratur skrevet i vår egen tid
- **Klimafiksjon (cli-fi):** Litteratur som tematiserer klimaendringer
- **Økolitteratur:** Litteratur om forholdet mellom menneske og natur
- **Dystopi:** Fremtidsskildring av et skremmende samfunn
- **Autofaksjon:** Litteratur basert på forfatterens eget liv
- **Samfunnskritikk:** Kritisk kommentar til samfunnsforhold

**Tips for eksamen:**
- Reflekter over hvordan litteratur kan bearbeide samtidsutfordringer
- Se etter temaer som klima, teknologi, identitet, ulikhet, mental helse
- Vurder litteraturens muligheter og begrensninger som samfunnskritikk
- Kjenn til forskjellen mellom dystopi og utopi
- Bruk samtidslitteratur som utgangspunkt for diskusjon om aktuelle spørsmål`,
    },
    {
      id: 'norsk-vg1-3-5-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **3.1 Flerkulturell litteratur** – Les norske samtidsforfattere
- **3.4 Litteratur fra andre kulturer** – Utforsk verdenslitteratur om samtidige temaer
- **2.4 Romananalyse** – Analyser samtidsromaner
- **6.4 Kildekritikk og falske nyheter** – Forstå litteraturens rolle i informasjonssamfunnet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL5: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_8_1,
  CHAPTER_NORSK_VG1_8_2,
  CHAPTER_NORSK_VG1_8_3,
  CHAPTER_NORSK_VG1_8_4,
  CHAPTER_NORSK_VG1_8_5,
  CHAPTER_NORSK_VG1_3_1,
  CHAPTER_NORSK_VG1_3_2,
  CHAPTER_NORSK_VG1_3_3,
  CHAPTER_NORSK_VG1_3_4,
  CHAPTER_NORSK_VG1_3_5,
];

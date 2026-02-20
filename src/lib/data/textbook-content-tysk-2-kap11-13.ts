/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 2 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: Reisen und Tourismus (11.1-11.4)
 * - Kapittel 12: Gesundheit und Wohlbefinden (12.1-12.4)
 * - Kapittel 13: Technologie und digitale Welt (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: REISEN UND TOURISMUS
// ============================================================================

export const CHAPTER_TYSK_2_11_1: TextbookChapter = {
  id: 'tysk-2-11-1',
  courseId: 'tysk-2',
  chapterNumber: '11.1',
  title: 'Reiseziele und Reiseplanung',
  subtitle: 'Reisemål og reiseplanlegging',
  description: 'Lær å snakke om reisemål, planlegge reiser og bruke Konjunktiv II for høflige forespørsler på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive ulike reisemål og ferietyper på tysk',
    'Bruke Konjunktiv II for høflige forespørsler og ønsker',
    'Mestre vokabular knyttet til reiseplanlegging og bestilling',
    'Kunne føre samtaler om reiseplaner og preferanser',
  ],
  content: [
    {
      id: 'tysk-2-11-1-intro',
      type: 'text',
      content: `## Reiseziele und Reiseplanung – Reisemål og reiseplanlegging

Å reise er en av de beste måtene å oppleve nye kulturer på. I dette kapittelet lærer du å snakke om reisemål, planlegge reiser og uttrykke ønsker høflig ved hjelp av **Konjunktiv II**.

Deutschsprachige Länder (tyskspråklige land) er populære reisemål: **Deutschland**, **Österreich** og **die Schweiz** byr på alt fra storbyopplevelser til naturskjønne alper.`,
    },
    {
      id: 'tysk-2-11-1-def-1',
      type: 'definition',
      title: 'Reiseziele – Reisemål',
      content: `**Reisevokabular – Viktige ord og uttrykk:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das Reiseziel | das | reisemål |
| die Pauschalreise | die | pakkereise |
| die Städtereise | die | byreise |
| der Strandurlaub | der | strandferie |
| die Kreuzfahrt | die | cruise |
| der Campingurlaub | der | campingferie |
| die Rundreise | die | rundreise |
| das Abenteuer | das | eventyr |
| die Unterkunft | die | overnatting |
| die Sehenswürdigkeit | die | severdighet |
| der Reiseführer | der | reiseguide |
| die Buchung | die | bestilling |`,
    },
    {
      id: 'tysk-2-11-1-def-2',
      type: 'definition',
      title: 'Konjunktiv II – Høflighetsform',
      content: `**Konjunktiv II** brukes for å uttrykke høflige forespørsler, ønsker og hypotetiske situasjoner.

**Vanlige former:**

| Infinitiv | Konjunktiv II | Norsk |
|-----------|---------------|-------|
| haben | hätte | ville ha |
| sein | wäre | ville være |
| können | könnte | kunne |
| werden | würde | ville |
| mögen | möchte | ville gjerne |
| sollen | sollte | burde |

**Struktur med würde + Infinitiv:**
*Ich würde gern nach Berlin reisen.* – Jeg ville gjerne reise til Berlin.

**Direkte Konjunktiv II:**
*Könnten Sie mir bitte helfen?* – Kunne De hjelpe meg?
*Hätten Sie ein Zimmer frei?* – Ville De ha et ledig rom?`,
    },
    {
      id: 'tysk-2-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Eine Reise planen',
      problem: `Oversett til tysk med Konjunktiv II:\n1. Jeg ville gjerne bestille en pakkereise til Wien.\n2. Kunne du anbefale et godt hotell?\n3. Vi ville gjerne reise i juli.`,
      solution: `1. **Ich würde gern eine Pauschalreise nach Wien buchen.**\n2. **Könntest du ein gutes Hotel empfehlen?**\n3. **Wir würden gern im Juli reisen.**\n\nLegg merke til bruken av *würde + Infinitiv* for høflige ønsker og *könntest* (Konjunktiv II av können) for høflige spørsmål.`,
    },
    {
      id: 'tysk-2-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er korrekt Konjunktiv II for «Jeg ville gjerne reise til München»?',
        options: [
          { id: 'a', text: 'Ich will gern nach München reisen.', isCorrect: false },
          { id: 'b', text: 'Ich würde gern nach München reisen.', isCorrect: true },
          { id: 'c', text: 'Ich werde gern nach München reisen.', isCorrect: false },
          { id: 'd', text: 'Ich reise gern nach München.', isCorrect: false },
        ],
        solution: 'Riktig svar er b) «Ich würde gern nach München reisen.» Konjunktiv II dannes med *würde* + infinitiv for høflige ønsker. *Ich will* er for direkte, *ich werde* er futurum, og siste alternativ er presens.',
      },
    },
    {
      id: 'tysk-2-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Im Reisebüro – På reisebyrået',
      problem: `Les dialogen og identifiser Konjunktiv II-formene:\n\n**Kunde:** Guten Tag! Ich hätte gern Informationen über Reisen nach Österreich.\n**Angestellte:** Natürlich! Wir hätten da eine schöne Pauschalreise nach Salzburg.\n**Kunde:** Das klingt gut. Könnten Sie mir den Preis nennen?\n**Angestellte:** Die Reise würde 850 Euro pro Person kosten.\n**Kunde:** Wäre es möglich, ein Einzelzimmer zu buchen?`,
      solution: `**Konjunktiv II-former i dialogen:**\n\n- **hätte** (av haben) – ville ha\n- **hätten** (av haben, flertall) – ville ha\n- **könnten** (av können) – kunne\n- **würde ... kosten** (würde + infinitiv) – ville koste\n- **wäre** (av sein) – ville være\n\nAlle formene brukes for å gjøre samtalen høflig og formell – typisk i en kundeservicesituasjon.`,
    },
    {
      id: 'tysk-2-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «Hätten Sie ein Doppelzimmer mit Frühstück?»',
        options: [
          { id: 'a', text: 'Har dere et dobbeltrom med frokost?', isCorrect: false },
          { id: 'b', text: 'Ville dere ha et dobbeltrom med frokost? (høflig)', isCorrect: true },
          { id: 'c', text: 'Dere hadde et dobbeltrom med frokost.', isCorrect: false },
          { id: 'd', text: 'Kan dere ha et dobbeltrom med frokost?', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Hätten Sie» er Konjunktiv II av «haben» og brukes som en høflig forespørsel – tilsvarende norsk «Ville De ha ...?» Das Doppelzimmer = dobbeltrom, das Frühstück = frokost.',
      },
    },
    {
      id: 'tysk-2-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (6-8 setninger) der du bestiller en reise på et reisebyrå. Bruk minst fire Konjunktiv II-former.',
        subTasks: [
          { label: 'a', task: 'Hils og si hva slags reise du ønsker.', solution: 'Guten Tag! Ich würde gern eine Städtereise nach Berlin buchen.' },
          { label: 'b', task: 'Spør om pris og tidspunkt.', solution: 'Könnten Sie mir sagen, was die Reise kosten würde? Wäre es möglich, im August zu reisen?' },
          { label: 'c', task: 'Spør om overnatting og severdigheter.', solution: 'Hätten Sie auch ein Hotel in der Nähe vom Brandenburger Tor? Ich würde gern die wichtigsten Sehenswürdigkeiten besichtigen.' },
        ],
        solution: 'En fullstendig dialog bør inneholde Konjunktiv II-former som würde, könnten, hätten og wäre for å gjøre forespørslene høflige.',
      },
    },
    {
      id: 'tysk-2-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det tyske ordet for «severdighet»?',
        options: [
          { id: 'a', text: 'die Unterkunft', isCorrect: false },
          { id: 'b', text: 'die Sehenswürdigkeit', isCorrect: true },
          { id: 'c', text: 'die Buchung', isCorrect: false },
          { id: 'd', text: 'der Reiseführer', isCorrect: false },
        ],
        solution: 'Riktig svar er b) die Sehenswürdigkeit. Die Unterkunft = overnatting, die Buchung = bestilling, der Reiseführer = reiseguide.',
      },
    },
    {
      id: 'tysk-2-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Reisevokabular**: Ord for ulike typer reiser og reisemål (die Pauschalreise, die Städtereise, der Strandurlaub)
- **Konjunktiv II**: Høflighetsformer med würde, hätte, wäre, könnte for å uttrykke ønsker og forespørsler
- **Struktur**: würde + Infinitiv for de fleste verb, direkte former for haben, sein og modalverb
- **Praktisk bruk**: Dialoger på reisebyrå, bestilling av reiser og overnatting

**Viktig regel:** I formelle situasjoner (reisebyrå, hotell, restaurant) bruker man alltid Konjunktiv II + «Sie» for å være høflig.`,
    },
    {
      id: 'tysk-2-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en e-post (8-10 setninger) til et hotell i Wien der du bestiller et rom. Bruk Konjunktiv II gjennomgående.',
        subTasks: [
          { label: 'a', task: 'Innled med en høflig hilsen og forklar formålet med e-posten.', solution: 'Sehr geehrte Damen und Herren, ich würde gern ein Zimmer in Ihrem Hotel buchen.' },
          { label: 'b', task: 'Beskriv hva slags rom og tidsperiode du ønsker.', solution: 'Ich hätte gern ein Doppelzimmer mit Frühstück vom 15. bis zum 22. Juli. Wäre es möglich, ein Zimmer mit Blick auf die Stadt zu bekommen?' },
          { label: 'c', task: 'Spør om pris og avslutningsfrase.', solution: 'Könnten Sie mir bitte den Preis mitteilen? Ich würde mich über eine schnelle Antwort freuen. Mit freundlichen Grüßen.' },
        ],
        solution: 'E-posten bør inneholde: formell hilsen (Sehr geehrte Damen und Herren), Konjunktiv II-former (würde, hätte, wäre, könnten), spesifikke detaljer om oppholdet, og formell avslutning (Mit freundlichen Grüßen).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Reiseziel', definition: 'Reisemål – stedet man reiser til' },
    { term: 'die Pauschalreise', definition: 'Pakkereise – reise der alt er inkludert' },
    { term: 'Konjunktiv II', definition: 'Høflighetsform – brukes for ønsker, forespørsler og hypotetiske situasjoner' },
    { term: 'die Sehenswürdigkeit', definition: 'Severdighet – noe verdt å se på reisen' },
    { term: 'die Buchung', definition: 'Bestilling – reservasjon av reise eller hotell' },
    { term: 'die Unterkunft', definition: 'Overnatting – sted å bo under reisen' },
    { term: 'würde + Infinitiv', definition: 'Konjunktiv II-konstruksjon – «ville + infinitiv» for høflige uttrykk' },
  ],
};

export const CHAPTER_TYSK_2_11_2: TextbookChapter = {
  id: 'tysk-2-11-2',
  courseId: 'tysk-2',
  chapterNumber: '11.2',
  title: 'Im Hotel und am Flughafen',
  subtitle: 'På hotellet og flyplassen',
  description: 'Lær å kommunisere på hotell og flyplass, sjekke inn, håndtere bagasje og løse praktiske situasjoner på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Mestre vokabular for hotell og flyplassituasjoner',
    'Kunne sjekke inn og ut på hotell på tysk',
    'Forstå og bruke uttrykk knyttet til flyreiser',
    'Føre samtaler om praktiske reisesituasjoner',
  ],
  content: [
    {
      id: 'tysk-2-11-2-intro',
      type: 'text',
      content: `## Im Hotel und am Flughafen – På hotellet og flyplassen

Når du reiser i tyskspråklige land, må du kunne kommunisere på hotell og flyplasser. I dette kapittelet lærer du viktige ord og uttrykk for å sjekke inn, håndtere bagasje og løse praktiske situasjoner.`,
    },
    {
      id: 'tysk-2-11-2-def-1',
      type: 'definition',
      title: 'Im Hotel – På hotellet',
      content: `**Hotellvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Rezeption | die | resepsjonen |
| das Einzelzimmer | das | enkeltrom |
| das Doppelzimmer | das | dobbeltrom |
| der Zimmerschlüssel | der | romnøkkel |
| die Klimaanlage | die | klimaanlegg |
| das Frühstücksbuffet | das | frokostbuffet |
| der Aufzug | der | heis |
| das Erdgeschoss | das | første etasje |
| die Minibar | die | minibar |
| einchecken | – | sjekke inn |
| auschecken | – | sjekke ut |
| die Rechnung | die | regningen |

**Nyttige fraser:**
- *Ich habe eine Reservierung auf den Namen ...* – Jeg har en reservasjon i navnet ...
- *Bis wann muss ich auschecken?* – Innen når må jeg sjekke ut?
- *Könnte ich bitte ein ruhiges Zimmer bekommen?* – Kunne jeg få et stille rom?`,
    },
    {
      id: 'tysk-2-11-2-def-2',
      type: 'definition',
      title: 'Am Flughafen – På flyplassen',
      content: `**Flyplassvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| der Flughafen | der | flyplass |
| der Abflug | der | avgang |
| die Ankunft | die | ankomst |
| das Gepäck | das | bagasje |
| das Handgepäck | das | håndbagasje |
| die Bordkarte | die | boardingkort |
| der Sicherheitskontrolle | die | sikkerhetskontroll |
| das Gate | das | gate |
| die Verspätung | die | forsinkelse |
| der Anschlussflug | der | tilknytningsflyging |
| die Gepäckausgabe | die | bagasjeutlevering |
| der Zoll | der | tollen |

**Nyttige fraser:**
- *Wo ist das Gate B12?* – Hvor er gate B12?
- *Mein Flug hat Verspätung.* – Flyet mitt er forsinket.
- *Wo kann ich mein Gepäck abholen?* – Hvor kan jeg hente bagasjen min?`,
    },
    {
      id: 'tysk-2-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: An der Hotelrezeption',
      problem: `Fullfør dialogen med passende uttrykk:\n\n**Gast:** Guten Abend! Ich habe eine ___ auf den Namen Larsen.\n**Rezeptionist:** Willkommen! Ja, ich sehe es – ein ___ für drei Nächte.\n**Gast:** Genau. ___ ich bitte ein Zimmer mit Blick auf den Garten bekommen?\n**Rezeptionist:** Natürlich. Hier ist Ihr ___. Das Zimmer ist im dritten Stock.`,
      solution: `**Gast:** Guten Abend! Ich habe eine **Reservierung** auf den Namen Larsen.\n**Rezeptionist:** Willkommen! Ja, ich sehe es – ein **Doppelzimmer** für drei Nächte.\n**Gast:** Genau. **Könnte** ich bitte ein Zimmer mit Blick auf den Garten bekommen?\n**Rezeptionist:** Natürlich. Hier ist Ihr **Zimmerschlüssel**. Das Zimmer ist im dritten Stock.\n\n*Könnte* er Konjunktiv II av *können* – brukt for høflig forespørsel.`,
    },
    {
      id: 'tysk-2-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Bordkarte» på norsk?',
        options: [
          { id: 'a', text: 'Bagasjebånd', isCorrect: false },
          { id: 'b', text: 'Boardingkort', isCorrect: true },
          { id: 'c', text: 'Flybillett', isCorrect: false },
          { id: 'd', text: 'Passkontrollen', isCorrect: false },
        ],
        solution: 'Riktig svar er b) Boardingkort. Die Bordkarte er kortet du viser ved gate for å gå om bord i flyet.',
      },
    },
    {
      id: 'tysk-2-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Am Check-in-Schalter',
      problem: `Oversett denne dialogen til norsk:\n\n**Angestellte:** Guten Tag! Ihren Reisepass, bitte.\n**Passagier:** Bitte schön. Könnte ich einen Fensterplatz bekommen?\n**Angestellte:** Ja, Platz 14A. Haben Sie Gepäck zum Aufgeben?\n**Passagier:** Ja, einen Koffer und eine Reisetasche.`,
      solution: `**Ansatt:** God dag! Passet Deres, takk.\n**Passasjer:** Vær så god. Kunne jeg få en vindusplass?\n**Ansatt:** Ja, plass 14A. Har De bagasje å sjekke inn?\n**Passasjer:** Ja, en koffert og en reiseveske.\n\n**Viktige ord:** der Fensterplatz (vindusplass), das Gepäck zum Aufgeben (innsjekket bagasje), der Koffer (koffert), die Reisetasche (reiseveske).`,
    },
    {
      id: 'tysk-2-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker du for å si «Jeg har en reservasjon i navnet Hansen» på tysk?',
        options: [
          { id: 'a', text: 'Ich möchte eine Reservierung für Hansen.', isCorrect: false },
          { id: 'b', text: 'Ich habe eine Reservierung auf den Namen Hansen.', isCorrect: true },
          { id: 'c', text: 'Ich brauche ein Zimmer für Hansen.', isCorrect: false },
          { id: 'd', text: 'Ich reserviere auf Hansen.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Den faste frasen er «eine Reservierung auf den Namen ...» – en reservasjon i navnet ...',
      },
    },
    {
      id: 'tysk-2-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog der du sjekker inn på et hotell i Berlin. Bruk minst 6 av hotellordene fra vokabularlisten.',
        subTasks: [
          { label: 'a', task: 'Presenter deg i resepsjonen og oppgi reservasjonen din.', solution: 'Guten Abend! Ich habe eine Reservierung auf den Namen Olsen – ein Doppelzimmer für zwei Nächte.' },
          { label: 'b', task: 'Still spørsmål om rommet og hotellets fasiliteter.', solution: 'Hat das Zimmer eine Klimaanlage? Und bis wann ist das Frühstücksbuffet geöffnet?' },
          { label: 'c', task: 'Spør om innsjekk/utsjekktider.', solution: 'Bis wann muss ich auschecken? Könnte ich den Zimmerschlüssel bis morgen behalten?' },
        ],
        solution: 'Dialogen bør vise naturlig kommunikasjon i en hotellresepsjon med relevante ord som Reservierung, Doppelzimmer, Zimmerschlüssel, Frühstücksbuffet, Klimaanlage, Rezeption osv.',
      },
    },
    {
      id: 'tysk-2-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «der Anschlussflug»?',
        options: [
          { id: 'a', text: 'Direktefly', isCorrect: false },
          { id: 'b', text: 'Charterfly', isCorrect: false },
          { id: 'c', text: 'Tilknytningsflyging / korresponderende fly', isCorrect: true },
          { id: 'd', text: 'Returfly', isCorrect: false },
        ],
        solution: 'Riktig svar er c). Der Anschlussflug er flyet du bytter til underveis – en tilknytningsflyging. Anschluss betyr tilkobling/forbindelse.',
      },
    },
    {
      id: 'tysk-2-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Hotellvokabular**: Ord for romtyper (Einzelzimmer, Doppelzimmer), fasiliteter (Klimaanlage, Aufzug) og prosesser (einchecken, auschecken)
- **Flyplassvokabular**: Ord for flyreiser (Bordkarte, Gepäck, Abflug, Ankunft, Gate)
- **Praktiske dialoger**: Innsjekking på hotell og flyplass, høflige forespørsler
- **Faste uttrykk**: «eine Reservierung auf den Namen ...», «Könnte ich bitte ...»

**Tips:** Øv på å spille rollespill med disse dialogene – det gjør deg tryggere i virkelige situasjoner!`,
    },
    {
      id: 'tysk-2-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en situasjonstekst (8-10 setninger) der du beskriver en flyreise fra Oslo til Wien med mellomlanding i München. Bruk flyplassvokabular fra kapittelet.',
        solution: 'Teksten bør inkludere: avreise fra flyplassen, innsjekking, sikkerhetskontroll, boarding, mellomlanding i München, Anschlussflug til Wien, bagasjeutlevering og ankomst. Bruk ord som Abflug, Bordkarte, Sicherheitskontrolle, Gate, Anschlussflug, Gepäckausgabe og Ankunft.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Rezeption', definition: 'Resepsjonen – mottaket på et hotell' },
    { term: 'das Doppelzimmer', definition: 'Dobbeltrom – hotellrom for to personer' },
    { term: 'die Bordkarte', definition: 'Boardingkort – kortet du trenger for å gå om bord' },
    { term: 'der Anschlussflug', definition: 'Tilknytningsflyging – fly du bytter til underveis' },
    { term: 'die Gepäckausgabe', definition: 'Bagasjeutlevering – stedet der du henter bagasjen' },
    { term: 'die Verspätung', definition: 'Forsinkelse – når flyet er forsinket' },
    { term: 'einchecken / auschecken', definition: 'Sjekke inn / sjekke ut – på hotell eller flyplass' },
  ],
};

export const CHAPTER_TYSK_2_11_3: TextbookChapter = {
  id: 'tysk-2-11-3',
  courseId: 'tysk-2',
  chapterNumber: '11.3',
  title: 'Probleme auf Reisen',
  subtitle: 'Problemer på reisen',
  description: 'Lær å håndtere reiseproblemer som forsinkelser, klager, tapt bagasje og uforutsette situasjoner på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne klage og reklamere høflig på tysk',
    'Mestre vokabular for reiseproblemer og forsinkelser',
    'Bruke Konjunktiv II i klagesituasjoner',
    'Forstå og bruke formelle klageuttrykk',
  ],
  content: [
    {
      id: 'tysk-2-11-3-intro',
      type: 'text',
      content: `## Probleme auf Reisen – Problemer på reisen

Ikke alle reiser går etter planen. Forsinkede fly, tapt bagasje og dårlige hotellrom er situasjoner du kan oppleve. I dette kapittelet lærer du å håndtere slike problemer på tysk – å klage høflig, be om hjelp og finne løsninger.

**Viktig:** Selv i klagesituasjoner er det viktig å være høflig. Konjunktiv II hjelper deg å uttrykke misnøye uten å virke uhøflig.`,
    },
    {
      id: 'tysk-2-11-3-def-1',
      type: 'definition',
      title: 'Reiseprobleme – Vokabular',
      content: `**Problemvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Verspätung | die | forsinkelse |
| die Beschwerde | die | klage |
| sich beschweren | – | å klage |
| die Reklamation | die | reklamasjon |
| das verlorene Gepäck | das | tapt bagasje |
| die Annullierung | die | kansellering |
| die Entschädigung | die | erstatning/kompensasjon |
| der Schadensfall | der | skadetilfelle |
| die Reiseversicherung | die | reiseforsikring |
| die Störung | die | forstyrrelse/feil |
| der Mangel | der | mangel/feil |
| die Lösung | die | løsning |

**Klagefraser:**
- *Ich möchte mich beschweren über ...* – Jeg vil klage på ...
- *Das Zimmer entspricht nicht der Beschreibung.* – Rommet stemmer ikke med beskrivelsen.
- *Ich hätte gern eine Entschädigung.* – Jeg ville gjerne ha en erstatning.
- *Könnten Sie das Problem bitte lösen?* – Kunne De løse problemet?`,
    },
    {
      id: 'tysk-2-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Verlorenes Gepäck – Tapt bagasje',
      problem: `Oversett klagen til tysk:\n\n«Unnskyld, bagasjen min har ikke kommet. Jeg reiste fra Oslo via München og kofferten min er borte. Kunne De hjelpe meg? Jeg ville gjerne fylle ut et skjema.»`,
      solution: `**Entschuldigung, mein Gepäck ist nicht angekommen. Ich bin von Oslo über München gereist und mein Koffer ist verschwunden. Könnten Sie mir bitte helfen? Ich würde gern ein Formular ausfüllen.**

**Viktige uttrykk:**
- *ist nicht angekommen* – har ikke ankommet (Perfekt)
- *ist verschwunden* – har forsvunnet
- *ein Formular ausfüllen* – fylle ut et skjema
- *Könnten Sie* og *Ich würde gern* – Konjunktiv II for høflighet`,
    },
    {
      id: 'tysk-2-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «sich beschweren»?',
        options: [
          { id: 'a', text: 'Å bestille', isCorrect: false },
          { id: 'b', text: 'Å klage', isCorrect: true },
          { id: 'c', text: 'Å spørre', isCorrect: false },
          { id: 'd', text: 'Å betale', isCorrect: false },
        ],
        solution: 'Riktig svar er b) å klage. «Sich beschweren» er et refleksivt verb som betyr å klage/reklamere. Substantivet er «die Beschwerde» (klagen).',
      },
    },
    {
      id: 'tysk-2-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beschwerde im Hotel – Klage på hotellet',
      problem: `Les klagen og identifiser problemene:\n\n«Sehr geehrte Damen und Herren, ich möchte mich über mein Zimmer beschweren. Die Klimaanlage funktioniert nicht, das Badezimmer ist nicht sauber, und der Blick aus dem Fenster geht auf einen Parkplatz – nicht auf den Garten, wie in der Beschreibung stand. Ich hätte gern ein anderes Zimmer oder eine Ermäßigung.»`,
      solution: `**Tre problemer:**\n1. **Die Klimaanlage funktioniert nicht** – Klimaanlegget virker ikke\n2. **Das Badezimmer ist nicht sauber** – Badet er ikke rent\n3. **Der Blick geht auf einen Parkplatz** – Utsikten er mot en parkeringsplass (ikke hagen som lovet)\n\n**Krav:** Et annet rom (ein anderes Zimmer) eller rabatt (eine Ermäßigung)\n\n**Språklige trekk:** Formell tone (Sehr geehrte Damen und Herren), Konjunktiv II (Ich hätte gern), klar beskrivelse av hvert problem.`,
    },
    {
      id: 'tysk-2-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning uttrykker en høflig klage med Konjunktiv II?',
        options: [
          { id: 'a', text: 'Ich will sofort ein neues Zimmer!', isCorrect: false },
          { id: 'b', text: 'Geben Sie mir mein Geld zurück!', isCorrect: false },
          { id: 'c', text: 'Ich hätte gern eine Entschädigung für die Unannehmlichkeiten.', isCorrect: true },
          { id: 'd', text: 'Das ist eine Katastrophe! Ich gehe sofort!', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Ich hätte gern eine Entschädigung für die Unannehmlichkeiten» (Jeg ville gjerne ha erstatning for ulempene) bruker Konjunktiv II (hätte) og er høflig. De andre alternativene er for direkte eller aggressive.',
      },
    },
    {
      id: 'tysk-2-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en formell klage-e-post til et flyselskap fordi flyet ditt ble kansellert.',
        subTasks: [
          { label: 'a', task: 'Åpne med formell hilsen og beskriv situasjonen.', solution: 'Sehr geehrte Damen und Herren, ich möchte mich über die Annullierung meines Fluges LH456 am 15. März beschweren.' },
          { label: 'b', task: 'Forklar konsekvensene og hva du forventer.', solution: 'Durch die Annullierung habe ich meinen Anschlussflug verpasst und musste eine zusätzliche Nacht im Hotel verbringen. Ich hätte gern eine Entschädigung für die Hotelkosten.' },
          { label: 'c', task: 'Avslutt formelt.', solution: 'Ich würde mich über eine schnelle Antwort freuen. Mit freundlichen Grüßen.' },
        ],
        solution: 'Klagen bør inneholde: formell hilsen, klar beskrivelse av problemet, konsekvenser, krav om erstatning med Konjunktiv II, og formell avslutning.',
      },
    },
    {
      id: 'tysk-2-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva betyr «die Entschädigung»?',
        options: [
          { id: 'a', text: 'Unnskyldning', isCorrect: false },
          { id: 'b', text: 'Forsinkelse', isCorrect: false },
          { id: 'c', text: 'Erstatning/kompensasjon', isCorrect: true },
          { id: 'd', text: 'Forsikring', isCorrect: false },
        ],
        solution: 'Riktig svar er c) erstatning/kompensasjon. Die Entschädigung er pengene eller kompensasjonen du krever når noe går galt. Verbet er «entschädigen» (å erstatte).',
      },
    },
    {
      id: 'tysk-2-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Problemvokabular**: Ord for reiseproblemer (Verspätung, Annullierung, verlorenes Gepäck, Beschwerde)
- **Klagefraser**: Høflige måter å uttrykke misnøye på (Ich möchte mich beschweren, Ich hätte gern eine Entschädigung)
- **Formell skriving**: Struktur og tone i klagebrev/e-poster
- **Konjunktiv II i klager**: Bruk av hätte, würde, könnte for å holde høflig tone

**Husk:** Selv når du er frustrert, får du bedre resultater med høflig tysk enn med aggressive krav!`,
    },
    {
      id: 'tysk-2-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rollespill: Du er på hotell og rommet har flere problemer. Skriv en dialog (10 replikker) mellom deg og resepsjonisten der du klager høflig og resepsjonisten prøver å løse problemene.',
        solution: 'Dialogen bør inneholde: høflig åpning, beskrivelse av minst 2-3 problemer (z.B. Klimaanlage defekt, lautes Zimmer, kein warmes Wasser), Konjunktiv II-former, resepsjonistens forsøk på å løse problemene, og en enighet om løsning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Beschwerde', definition: 'Klage – en formell ytring av misnøye' },
    { term: 'sich beschweren', definition: 'Å klage – refleksivt verb for å uttrykke misnøye' },
    { term: 'die Entschädigung', definition: 'Erstatning/kompensasjon – det man krever som oppreisning' },
    { term: 'die Annullierung', definition: 'Kansellering – når en flyavgang eller bestilling blir avlyst' },
    { term: 'das verlorene Gepäck', definition: 'Tapt bagasje – bagasje som ikke ankommer med deg' },
    { term: 'die Reiseversicherung', definition: 'Reiseforsikring – forsikring som dekker problemer på reisen' },
    { term: 'der Mangel', definition: 'Mangel/feil – noe som mangler eller ikke fungerer' },
  ],
};

export const CHAPTER_TYSK_2_11_4: TextbookChapter = {
  id: 'tysk-2-11-4',
  courseId: 'tysk-2',
  chapterNumber: '11.4',
  title: 'Reiseberichte schreiben',
  subtitle: 'Skrive reiserapporter',
  description: 'Lær å skrive reiserapporter og reisebrev på tysk med bruk av Präteritum og beskrivende språk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive en sammenhengende reiserapport på tysk',
    'Bruke Präteritum (preteritum) for å fortelle om reiseopplevelser',
    'Mestre beskrivende adjektiver og uttrykk for opplevelser',
    'Strukturere en tekst med innledning, hoveddel og avslutning',
  ],
  content: [
    {
      id: 'tysk-2-11-4-intro',
      type: 'text',
      content: `## Reiseberichte schreiben – Skrive reiserapporter

En reiserapport (der Reisebericht) er en tekst der du beskriver en reise du har gjort. Du forteller om steder du besøkte, opplevelser du hadde, og inntrykk du fikk. På tysk bruker vi gjerne **Präteritum** (enkel fortid) i skriftlige rapporter.`,
    },
    {
      id: 'tysk-2-11-4-def-1',
      type: 'definition',
      title: 'Präteritum – Enkel fortid (repetisjon)',
      content: `**Viktige Präteritum-former for reisebeskrivelser:**

| Infinitiv | Präteritum | Norsk |
|-----------|-----------|-------|
| sein | war | var |
| haben | hatte | hadde |
| fahren | fuhr | kjørte/reiste |
| fliegen | flog | fløy |
| sehen | sah | så |
| gehen | ging | gikk |
| essen | aß | spiste |
| trinken | trank | drakk |
| schlafen | schlief | sov |
| gefallen | gefiel | behaget/likte |
| besuchen | besuchte | besøkte |
| übernachten | übernachtete | overnattet |

**Beskrivende adjektiver:**
- *atemberaubend* – fantastisk/henrivende
- *malerisch* – malerisk/pittoresk
- *gemütlich* – koselig/hyggelig
- *beeindruckend* – imponerende
- *unvergesslich* – uforglemmelig`,
    },
    {
      id: 'tysk-2-11-4-def-2',
      type: 'definition',
      title: 'Struktur eines Reiseberichts',
      content: `**En reiserapport har typisk denne strukturen:**

**1. Einleitung (Innledning):**
- Hvor og når reiste du? Med hvem?
- *Im letzten Sommer fuhr ich mit meiner Familie nach Salzburg.*

**2. Hauptteil (Hoveddel):**
- Hva opplevde du? Dag for dag eller tematisk.
- *Am ersten Tag besichtigten wir die Altstadt. Das Wetter war herrlich.*

**3. Schluss (Avslutning):**
- Helhetsinntrykk og anbefaling.
- *Die Reise war unvergesslich. Ich würde Salzburg jedem empfehlen.*

**Nyttige koblingsord:**
- *zuerst* (først), *dann* (så), *danach* (deretter), *am nächsten Tag* (neste dag), *schließlich* (til slutt), *außerdem* (dessuten)`,
    },
    {
      id: 'tysk-2-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Ein Reisebericht aus Wien',
      problem: `Les reiserapporten og identifiser Präteritum-formene:\n\n«Letzten Oktober flog ich mit meiner Freundin nach Wien. Wir übernachteten in einem kleinen Hotel in der Innenstadt. Am ersten Tag besuchten wir den Stephansdom und gingen durch die Altstadt. Das Wetter war sonnig und warm. Am Abend aßen wir Wiener Schnitzel in einem gemütlichen Restaurant. Am zweiten Tag fuhren wir nach Schönbrunn und besichtigten das Schloss. Es war beeindruckend! Die Reise war unvergesslich.»`,
      solution: `**Präteritum-former:**\n- **flog** (fliegen) – fløy\n- **übernachteten** (übernachten) – overnattet\n- **besuchten** (besuchen) – besøkte\n- **gingen** (gehen) – gikk\n- **war** (sein) – var\n- **aßen** (essen) – spiste\n- **fuhren** (fahren) – kjørte/reiste\n- **besichtigten** (besichtigen) – besiktiget\n\nLegg merke til at sterke verb (flog, gingen, aßen, fuhren) endrer stammen, mens svake verb (übernachteten, besuchten, besichtigten) legger til «-te».`,
    },
    {
      id: 'tysk-2-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Präteritum av «fliegen» (å fly)?',
        options: [
          { id: 'a', text: 'fliegte', isCorrect: false },
          { id: 'b', text: 'flog', isCorrect: true },
          { id: 'c', text: 'geflogen', isCorrect: false },
          { id: 'd', text: 'fliegt', isCorrect: false },
        ],
        solution: 'Riktig svar er b) flog. «Fliegen» er et sterkt verb med uregelmessig Präteritum. «Geflogen» er Partizip II (brukt i Perfekt), ikke Präteritum.',
      },
    },
    {
      id: 'tysk-2-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket koblingsord betyr «deretter» på tysk?',
        options: [
          { id: 'a', text: 'zuerst', isCorrect: false },
          { id: 'b', text: 'außerdem', isCorrect: false },
          { id: 'c', text: 'danach', isCorrect: true },
          { id: 'd', text: 'schließlich', isCorrect: false },
        ],
        solution: 'Riktig svar er c) danach = deretter. Zuerst = først, außerdem = dessuten, schließlich = til slutt.',
      },
    },
    {
      id: 'tysk-2-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort reiserapport (6-8 setninger) om en reise til Hamburg. Bruk Präteritum og minst tre koblingsord.',
        subTasks: [
          { label: 'a', task: 'Skriv innledningen: Når, med hvem, hvordan reiste du?', solution: 'Im letzten Herbst fuhr ich mit meinem Freund nach Hamburg. Wir nahmen den Zug von Berlin.' },
          { label: 'b', task: 'Beskriv 2-3 opplevelser.', solution: 'Zuerst besuchten wir den Hamburger Hafen. Danach gingen wir in die Speicherstadt – sie war sehr beeindruckend. Am Abend aßen wir Fischbrötchen am Hafen.' },
          { label: 'c', task: 'Avslutt med helhetsinntrykk.', solution: 'Schließlich war die Reise wunderbar. Hamburg ist eine atemberaubende Stadt!' },
        ],
        solution: 'Reiserapporten bør ha klar struktur (innledning-hoveddel-avslutning), konsekvent bruk av Präteritum, og koblingsord som zuerst, dann, danach, schließlich.',
      },
    },
    {
      id: 'tysk-2-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Präteritum**: Enkel fortid for skriftlige tekster – både sterke verb (flog, ging, aß) og svake verb (besuchte, übernachtete)
- **Tekststruktur**: Innledning, hoveddel og avslutning i en reiserapport
- **Beskrivende språk**: Adjektiver som atemberaubend, malerisch, beeindruckend, unvergesslich
- **Koblingsord**: Zuerst, dann, danach, am nächsten Tag, schließlich, außerdem

**Tips for gode reiserapporter:** Bruk sansene – beskriv ikke bare hva du så, men også hva du hørte, smakte og følte!`,
    },
    {
      id: 'tysk-2-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en fullstendig reiserapport (12-15 setninger) om en ferie i Sveits. Beskriv minst tre dager med ulike aktiviteter. Bruk varierte Präteritum-former, beskrivende adjektiver og koblingsord.',
        subTasks: [
          { label: 'a', task: 'Innledning: Beskriv reisen og ankomsten.', solution: 'Letzten Winter flog ich mit meiner Familie in die Schweiz. Wir landeten in Zürich und fuhren mit dem Zug nach Interlaken. Das Hotel war gemütlich und hatte einen wunderbaren Blick auf die Alpen.' },
          { label: 'b', task: 'Hoveddel: Beskriv tre dager med aktiviteter.', solution: 'Am ersten Tag wanderten wir in den Bergen. Die Landschaft war atemberaubend. Dann besuchten wir am zweiten Tag die Altstadt von Bern. Wir aßen Schweizer Fondue und es schmeckte hervorragend. Am dritten Tag fuhren wir zum Jungfraujoch – die Aussicht war unvergesslich.' },
          { label: 'c', task: 'Avslutning: Oppsummer opplevelsen og gi en anbefaling.', solution: 'Schließlich war die Reise eine der besten Erfahrungen meines Lebens. Die Schweiz ist ein malerisches Land und ich würde jedem eine Reise dorthin empfehlen.' },
        ],
        solution: 'En god reiserapport bruker varierte Präteritum-former (war, hatte, flog, fuhren, wanderten, besuchten, aßen), beskrivende adjektiver (atemberaubend, gemütlich, malerisch, unvergesslich) og koblingsord for å skape flyt.',
      },
    },
    {
      id: 'tysk-2-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-11-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «unvergesslich»?',
        options: [
          { id: 'a', text: 'Ubehagelig', isCorrect: false },
          { id: 'b', text: 'Uforglemmelig', isCorrect: true },
          { id: 'c', text: 'Utrolig', isCorrect: false },
          { id: 'd', text: 'Uvanlig', isCorrect: false },
        ],
        solution: 'Riktig svar er b) uforglemmelig. «Unvergesslich» er sammensatt av «un-» (u-) + «vergesslich» (glemsom) = noe man ikke kan glemme.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Reisebericht', definition: 'Reiserapport – en tekst som beskriver en reise' },
    { term: 'das Präteritum', definition: 'Enkel fortid – brukt i skriftlige fortellinger på tysk' },
    { term: 'atemberaubend', definition: 'Fantastisk/henrivende – brukt om noe som tar pusten fra deg' },
    { term: 'unvergesslich', definition: 'Uforglemmelig – noe man aldri glemmer' },
    { term: 'malerisch', definition: 'Malerisk/pittoresk – vakker som et maleri' },
    { term: 'die Sehenswürdigkeit', definition: 'Severdighet – noe verdt å besøke' },
    { term: 'beeindruckend', definition: 'Imponerende – noe som gjør inntrykk' },
    { term: 'schließlich', definition: 'Til slutt – koblingsord for avslutning' },
  ],
};

// ============================================================================
// KAPITTEL 12: GESUNDHEIT UND WOHLBEFINDEN
// ============================================================================

export const CHAPTER_TYSK_2_12_1: TextbookChapter = {
  id: 'tysk-2-12-1',
  courseId: 'tysk-2',
  chapterNumber: '12.1',
  title: 'Körperteile und Gesundheit',
  subtitle: 'Kroppsdeler og helse',
  description: 'Lær navn på kroppsdeler, vanlige symptomer og sykdommer, og hvordan du beskriver helsetilstanden din på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne navngi kroppsdeler på tysk med riktig artikkel',
    'Beskrive symptomer og smerter',
    'Bruke refleksive verb knyttet til helse',
    'Forstå forskjellen mellom Dativ og Akkusativ med kroppsdeler',
  ],
  content: [
    {
      id: 'tysk-2-12-1-intro',
      type: 'text',
      content: `## Körperteile und Gesundheit – Kroppsdeler og helse

For å kunne snakke om helse på tysk, må du først kjenne til ordene for kroppsdeler. I dette kapittelet lærer du grunnleggende kroppsvokabular, hvordan du beskriver symptomer, og viktige uttrykk for å si at du er syk eller frisk.

**Viktig grammatikk:** På tysk bruker man ofte Dativ med kroppsdeler: *Mir tut der Kopf weh* (Hodet mitt gjør vondt) – bokstavelig: «Meg gjør hodet vondt».`,
    },
    {
      id: 'tysk-2-12-1-def-1',
      type: 'definition',
      title: 'Die Körperteile – Kroppsdelene',
      content: `**Hode og overkropp:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| der Kopf | der | hode |
| das Gesicht | das | ansikt |
| das Auge (die Augen) | das | øye (øyne) |
| das Ohr (die Ohren) | das | øre (ører) |
| die Nase | die | nese |
| der Mund | der | munn |
| der Zahn (die Zähne) | der | tann (tenner) |
| der Hals | der | hals |
| die Schulter | die | skulder |
| die Brust | die | bryst |
| der Rücken | der | rygg |
| der Bauch | der | mage |

**Armer og ben:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| der Arm (die Arme) | der | arm (armer) |
| die Hand (die Hände) | die | hånd (hender) |
| der Finger | der | finger |
| das Bein (die Beine) | das | ben (bein) |
| das Knie (die Knie) | das | kne |
| der Fuß (die Füße) | der | fot (føtter) |`,
    },
    {
      id: 'tysk-2-12-1-def-2',
      type: 'definition',
      title: 'Schmerzen und Symptome – Smerter og symptomer',
      content: `**Uttrykk for smerte:**

| Tysk | Norsk |
|------|-------|
| Mir tut der Kopf weh. | Hodet mitt gjør vondt. |
| Ich habe Kopfschmerzen. | Jeg har hodepine. |
| Ich habe Halsschmerzen. | Jeg har vondt i halsen. |
| Ich habe Bauchschmerzen. | Jeg har vondt i magen. |
| Mir ist schlecht/übel. | Jeg er kvalm. |
| Ich habe Fieber. | Jeg har feber. |
| Ich habe Husten. | Jeg har hoste. |
| Ich habe Schnupfen. | Jeg er forkjølet/har snue. |
| Mir ist schwindelig. | Jeg er svimmel. |
| Ich bin erkältet. | Jeg er forkjølet. |

**Grammatikk: wehtun + Dativ**
Verbet *wehtun* (å gjøre vondt) brukes med Dativ:
- *Mir* tut der Kopf weh. (Meg gjør hodet vondt.)
- *Dir* tut der Bauch weh. (Deg gjør magen vondt.)
- *Ihm/Ihr* tut das Knie weh. (Ham/Henne gjør kneet vondt.)`,
    },
    {
      id: 'tysk-2-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Symptome beschreiben',
      problem: `Oversett til tysk:\n1. Jeg har vondt i ryggen.\n2. Øynene mine gjør vondt.\n3. Hun er forkjølet og har feber.`,
      solution: `1. **Mir tut der Rücken weh.** / **Ich habe Rückenschmerzen.**\n2. **Mir tun die Augen weh.** (flertall – tun, ikke tut)\n3. **Sie ist erkältet und hat Fieber.**\n\n**Merk:** Med flertall bruker vi *tun* i stedet for *tut*: Mir tun die Augen weh (øynene), mir tun die Füße weh (føttene).`,
    },
    {
      id: 'tysk-2-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «Mir tut der Bauch weh»?',
        options: [
          { id: 'a', text: 'Jeg har vondt i ryggen.', isCorrect: false },
          { id: 'b', text: 'Jeg har vondt i magen.', isCorrect: true },
          { id: 'c', text: 'Jeg har vondt i hodet.', isCorrect: false },
          { id: 'd', text: 'Jeg har vondt i halsen.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Der Bauch = magen. «Mir tut der Bauch weh» = Magen min gjør vondt.',
      },
    },
    {
      id: 'tysk-2-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Mir tut die Augen weh.', isCorrect: false },
          { id: 'b', text: 'Mir tun die Augen weh.', isCorrect: true },
          { id: 'c', text: 'Mich tun die Augen weh.', isCorrect: false },
          { id: 'd', text: 'Mir tut die Augen weht.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Fordi «die Augen» er flertall, bruker vi «tun» (ikke «tut»). «Mir» er Dativ (ikke «mich» som er Akkusativ). Verbet er «wehtun» (ikke «wehten»).',
      },
    },
    {
      id: 'tysk-2-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv symptomene til tre ulike personer på tysk. Bruk varierte uttrykk.',
        subTasks: [
          { label: 'a', task: 'Person 1 har forkjølelse.', solution: 'Anna ist erkältet. Sie hat Schnupfen und Husten. Ihr tut der Hals weh und sie hat leichtes Fieber.' },
          { label: 'b', task: 'Person 2 har vondt etter trening.', solution: 'Max hat Rückenschmerzen. Ihm tun die Beine weh und seine Schulter tut auch weh. Er hat gestern zu viel trainiert.' },
          { label: 'c', task: 'Person 3 har mageproblemer.', solution: 'Laura hat Bauchschmerzen. Ihr ist schlecht und sie ist schwindelig. Sie hat vielleicht etwas Schlechtes gegessen.' },
        ],
        solution: 'Bruk varierte uttrykk: wehtun + Dativ, «Ich habe ...schmerzen», «Mir ist schlecht/schwindelig», «Ich bin erkältet».',
      },
    },
    {
      id: 'tysk-2-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kroppsdeler**: Detaljert vokabular for hode, overkropp, armer og ben med riktige artikler
- **Symptomer**: Uttrykk for smerte, forkjølelse, feber og andre vanlige plager
- **Grammatikk**: wehtun + Dativ (Mir tut ... weh / Mir tun ... weh)
- **Sammensatte ord**: Kopf+schmerzen, Hals+schmerzen, Bauch+schmerzen

**Husk:** Entall = tut, flertall = tun. Alltid Dativ (mir, dir, ihm, ihr) med wehtun!`,
    },
    {
      id: 'tysk-2-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken artikkel har «das Knie»?',
        options: [
          { id: 'a', text: 'der', isCorrect: false },
          { id: 'b', text: 'die', isCorrect: false },
          { id: 'c', text: 'das', isCorrect: true },
          { id: 'd', text: 'den', isCorrect: false },
        ],
        solution: 'Riktig svar er c) das. Das Knie (kneet) er et intetkjønnsord. Flertall er die Knie (uforandret).',
      },
    },
    {
      id: 'tysk-2-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en tekst (8-10 setninger) der du beskriver en dag du var syk. Bruk Präteritum og minst 6 helseord fra kapittelet.',
        solution: 'Teksten bør beskrive symptomene i Präteritum (Mir war schlecht, Ich hatte Fieber, Mir tat der Kopf weh) og inkludere kroppsdeler, symptomer og beskrivelse av hva du gjorde for å bli frisk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Kopf', definition: 'Hode – den øverste delen av kroppen' },
    { term: 'wehtun + Dativ', definition: 'Å gjøre vondt – brukes med dativ (mir, dir, ihm, ihr)' },
    { term: 'die Kopfschmerzen', definition: 'Hodepine – sammensatt ord av Kopf + Schmerzen' },
    { term: 'das Fieber', definition: 'Feber – forhøyet kroppstemperatur' },
    { term: 'erkältet sein', definition: 'Å være forkjølet – å ha forkjølelse' },
    { term: 'der Rücken', definition: 'Rygg – baksiden av overkroppen' },
    { term: 'das Knie', definition: 'Kne – leddet mellom lår og legg' },
    { term: 'der Husten', definition: 'Hoste – vanlig forkjølelsessymptom' },
  ],
};

export const CHAPTER_TYSK_2_12_2: TextbookChapter = {
  id: 'tysk-2-12-2',
  courseId: 'tysk-2',
  chapterNumber: '12.2',
  title: 'Beim Arzt und in der Apotheke',
  subtitle: 'Hos legen og på apoteket',
  description: 'Lær å kommunisere med lege og apotekpersonell på tysk, beskrive symptomer og forstå medisinske instruksjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive symptomer detaljert til en lege',
    'Forstå medisinske instruksjoner og resepter',
    'Mestre vokabular for legebesøk og apotek',
    'Bruke modalverb i medisinske kontekster (sollen, müssen, dürfen)',
  ],
  content: [
    {
      id: 'tysk-2-12-2-intro',
      type: 'text',
      content: `## Beim Arzt und in der Apotheke – Hos legen og på apoteket

Å kunne kommunisere med helsepersonell er viktig når du er i utlandet. I dette kapittelet lærer du å bestille legetime, beskrive symptomer, forstå legens instruksjoner og handle på apoteket.

**Viktige modalverb i denne konteksten:**
- **sollen** – skal/bør (legens anbefaling): *Sie sollen viel trinken.*
- **müssen** – må: *Sie müssen diese Tabletten nehmen.*
- **dürfen** – får lov til / bør ikke: *Sie dürfen keinen Sport treiben.*`,
    },
    {
      id: 'tysk-2-12-2-def-1',
      type: 'definition',
      title: 'Beim Arzt – Hos legen',
      content: `**Legevokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| der Arzt / die Ärztin | der/die | lege (m/f) |
| die Arztpraxis | die | legekontor |
| der Termin | der | avtale/time |
| die Untersuchung | die | undersøkelse |
| die Diagnose | die | diagnose |
| das Rezept | das | resept |
| die Krankenversicherung | die | helseforsikring |
| die Krankenkarte | die | sykekort |
| der Blutdruck | der | blodtrykk |
| die Spritze | die | sprøyte |
| das Röntgenbild | das | røntgenbilde |
| krankschreiben | – | sykemelde |

**Nyttige fraser hos legen:**
- *Ich möchte einen Termin vereinbaren.* – Jeg vil bestille en time.
- *Ich fühle mich nicht wohl.* – Jeg føler meg ikke bra.
- *Seit wann haben Sie die Beschwerden?* – Hvor lenge har De hatt plagene?
- *Ich verschreibe Ihnen ein Medikament.* – Jeg skriver ut en medisin til Dem.`,
    },
    {
      id: 'tysk-2-12-2-def-2',
      type: 'definition',
      title: 'In der Apotheke – På apoteket',
      content: `**Apotekvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Apotheke | die | apotek |
| der Apotheker / die Apothekerin | der/die | apoteker (m/f) |
| das Medikament | das | medisin |
| die Tablette | die | tablett |
| die Salbe | die | salve |
| der Hustensaft | der | hostesaft |
| die Schmerztablette | die | smertetablett |
| das Pflaster | das | plaster |
| die Tropfen (pl.) | die | dråper |
| rezeptpflichtig | – | reseptpliktig |
| rezeptfrei | – | reseptfri |
| die Nebenwirkung | die | bivirkning |

**Nyttige fraser på apoteket:**
- *Haben Sie etwas gegen Kopfschmerzen?* – Har dere noe mot hodepine?
- *Ist dieses Medikament rezeptfrei?* – Er denne medisinen reseptfri?
- *Wie oft soll ich die Tabletten nehmen?* – Hvor ofte skal jeg ta tablettene?`,
    },
    {
      id: 'tysk-2-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beim Arzt – Dialog',
      problem: `Les dialogen og svar på spørsmålene:\n\n**Arzt:** Was fehlt Ihnen?\n**Patient:** Mir tut der Hals weh und ich habe seit drei Tagen Husten.\n**Arzt:** Haben Sie auch Fieber?\n**Patient:** Ja, gestern Abend hatte ich 38,5 Grad.\n**Arzt:** Ich untersuche Sie kurz. Machen Sie bitte den Mund auf. ... Sie haben eine Halsentzündung. Ich verschreibe Ihnen Antibiotika.\n**Patient:** Wie oft soll ich die Tabletten nehmen?\n**Arzt:** Dreimal täglich, eine Woche lang. Sie sollten auch viel trinken und sich ausruhen.\n\nSpørsmål: Hva er symptomene, diagnosen og behandlingen?`,
      solution: `**Symptomer:**\n- Vondt i halsen (der Hals tut weh)\n- Hoste i tre dager (Husten seit drei Tagen)\n- Feber på 38,5 grader\n\n**Diagnose:** Halsbetennelse (die Halsentzündung)\n\n**Behandling:**\n- Antibiotika – tre ganger daglig i en uke (dreimal täglich, eine Woche lang)\n- Drikke mye (viel trinken)\n- Hvile (sich ausruhen)\n\n**Grammatikk:** «Was fehlt Ihnen?» = Hva feiler Dem? (høflig Dativ-form). «Sie sollten» = De burde (Konjunktiv II av sollen).`,
    },
    {
      id: 'tysk-2-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «das Rezept» i medisinsk sammenheng?',
        options: [
          { id: 'a', text: 'Oppskrift (matlaging)', isCorrect: false },
          { id: 'b', text: 'Resept (medisin)', isCorrect: true },
          { id: 'c', text: 'Kvittering', isCorrect: false },
          { id: 'd', text: 'Regning', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Das Rezept» betyr både oppskrift (matlaging) og resept (medisin), men i medisinsk sammenheng betyr det alltid resept – et dokument fra legen som gir deg rett til å kjøpe medisiner.',
      },
    },
    {
      id: 'tysk-2-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker legen for å spørre «Hva feiler Dem?»',
        options: [
          { id: 'a', text: 'Was machen Sie?', isCorrect: false },
          { id: 'b', text: 'Wie geht es Ihnen?', isCorrect: false },
          { id: 'c', text: 'Was fehlt Ihnen?', isCorrect: true },
          { id: 'd', text: 'Was wollen Sie?', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Was fehlt Ihnen?» er den vanlige medisinske frasen for å spørre hva som feiler. «Wie geht es Ihnen?» er en generell hilsen, ikke et medisinsk spørsmål.',
      },
    },
    {
      id: 'tysk-2-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog hos legen. Du har vondt i magen og føler deg kvalm.',
        subTasks: [
          { label: 'a', task: 'Beskriv symptomene dine til legen.', solution: 'Herr Doktor, ich habe seit zwei Tagen starke Bauchschmerzen. Mir ist oft übel, besonders nach dem Essen.' },
          { label: 'b', task: 'Svar på legens spørsmål om varighet og andre symptomer.', solution: 'Die Schmerzen haben am Montag angefangen. Ich habe auch keinen Appetit und mir ist manchmal schwindelig.' },
          { label: 'c', task: 'Legens diagnose og behandlingsplan.', solution: 'Arzt: Sie haben wahrscheinlich eine Magenentzündung. Ich verschreibe Ihnen Tabletten. Sie sollen dreimal täglich eine Tablette nehmen und dürfen kein scharfes Essen essen.' },
        ],
        solution: 'Dialogen bør inneholde symptombeskrivelse, legens spørsmål, diagnose og behandling med modalverb (sollen, müssen, dürfen).',
      },
    },
    {
      id: 'tysk-2-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «rezeptpflichtig»?',
        options: [
          { id: 'a', text: 'Reseptfri', isCorrect: false },
          { id: 'b', text: 'Reseptpliktig – krever resept fra legen', isCorrect: true },
          { id: 'c', text: 'Uten bivirkninger', isCorrect: false },
          { id: 'd', text: 'Billig medisin', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Rezeptpflichtig» betyr at medisinen krever resept (Rezept + pflichtig = pliktig). Motsetningen er «rezeptfrei» (reseptfri).',
      },
    },
    {
      id: 'tysk-2-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Legevokabular**: Arzt, Termin, Untersuchung, Diagnose, Rezept, Krankenversicherung
- **Apotekvokabular**: Medikament, Tablette, Salbe, Hustensaft, rezeptpflichtig, rezeptfrei
- **Viktige fraser**: «Was fehlt Ihnen?», «Ich verschreibe Ihnen ...», «Wie oft soll ich ...»
- **Modalverb**: sollen (bør), müssen (må), dürfen (får lov til) i medisinske instruksjoner

**Tips:** Husk å ta med helseforsikringskortet (die Krankenversicherungskarte) når du besøker lege i Tyskland!`,
    },
    {
      id: 'tysk-2-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er på ferie i Berlin og blir syk. Skriv tre korte scener: 1) Du ringer legekontoret for å bestille time, 2) Du er hos legen, 3) Du er på apoteket.',
        subTasks: [
          { label: 'a', task: 'Telefonsamtalen med legekontoret.', solution: 'Guten Tag, ich möchte einen Termin vereinbaren. Ich bin Tourist aus Norwegen und fühle mich seit gestern nicht wohl. – Können Sie heute um 14 Uhr kommen? – Ja, das passt mir gut. Vielen Dank.' },
          { label: 'b', task: 'Konsultasjonen hos legen.', solution: 'Arzt: Was fehlt Ihnen? – Mir tut der Hals sehr weh und ich habe Fieber. – Seit wann? – Seit gestern Abend. – Ich untersuche Sie. ... Sie haben eine Halsentzündung. Ich verschreibe Ihnen Antibiotika.' },
          { label: 'c', task: 'Besøket på apoteket.', solution: 'Guten Tag, ich habe ein Rezept vom Arzt. – Ja, das sind Antibiotika. Nehmen Sie dreimal täglich eine Tablette. – Haben Sie auch etwas gegen Halsschmerzen? – Ja, diese Lutschtabletten sind rezeptfrei.' },
        ],
        solution: 'De tre scenene bør vise en naturlig progresjon og bruke relevant vokabular fra hele kapittelet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Arzt / die Ärztin', definition: 'Lege (mannlig/kvinnelig)' },
    { term: 'das Rezept', definition: 'Resept – dokument fra legen for å hente medisin' },
    { term: 'die Apotheke', definition: 'Apotek – stedet der man kjøper medisiner' },
    { term: 'rezeptpflichtig', definition: 'Reseptpliktig – krever resept for å kjøpe' },
    { term: 'die Nebenwirkung', definition: 'Bivirkning – uønsket effekt av medisin' },
    { term: 'die Untersuchung', definition: 'Undersøkelse – medisinsk sjekk hos legen' },
    { term: 'verschreiben', definition: 'Å skrive ut (medisin) – legens handling' },
    { term: 'die Krankenversicherung', definition: 'Helseforsikring – forsikring som dekker legebesøk' },
  ],
};

export const CHAPTER_TYSK_2_12_3: TextbookChapter = {
  id: 'tysk-2-12-3',
  courseId: 'tysk-2',
  chapterNumber: '12.3',
  title: 'Fitness und Ernährung',
  subtitle: 'Trening og ernæring',
  description: 'Lær å snakke om trening, kosthold og sunn livsstil på tysk med relevant vokabular og grammatikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Mestre vokabular om trening og sportsaktiviteter',
    'Kunne diskutere kosthold og ernæring på tysk',
    'Bruke komparativ og superlativ for å sammenligne matvarer',
    'Gi og forstå råd om sunn livsstil',
  ],
  content: [
    {
      id: 'tysk-2-12-3-intro',
      type: 'text',
      content: `## Fitness und Ernährung – Trening og ernæring

Helse handler ikke bare om sykdom – det handler også om forebygging gjennom trening og godt kosthold. I dette kapittelet lærer du å snakke om treningsvaner, matvaregrupper og sunne livsstilsvalg på tysk.`,
    },
    {
      id: 'tysk-2-12-3-def-1',
      type: 'definition',
      title: 'Fitness und Sport – Trening og sport',
      content: `**Treningsvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das Fitnessstudio | das | treningssenter |
| das Training | das | trening |
| die Übung | die | øvelse |
| joggen | – | å jogge |
| schwimmen | – | å svømme |
| Rad fahren | – | å sykle |
| Yoga machen | – | å gjøre yoga |
| Gewichte heben | – | å løfte vekter |
| sich aufwärmen | – | å varme opp |
| sich dehnen | – | å tøye |
| die Ausdauer | die | utholdenhet |
| die Kraft | die | styrke |
| der Muskelkater | der | stølhet |

**Nyttige uttrykk:**
- *Ich treibe regelmäßig Sport.* – Jeg trener regelmessig.
- *Wie oft trainierst du pro Woche?* – Hvor ofte trener du i uken?
- *Ich gehe dreimal pro Woche ins Fitnessstudio.* – Jeg går tre ganger i uken på treningsstudioet.`,
    },
    {
      id: 'tysk-2-12-3-def-2',
      type: 'definition',
      title: 'Ernährung – Ernæring',
      content: `**Matvokabular og ernæring:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Ernährung | die | ernæring |
| das Eiweiß / das Protein | das | protein |
| die Kohlenhydrate (pl.) | die | karbohydrater |
| das Fett | das | fett |
| die Vitamine (pl.) | die | vitaminer |
| die Ballaststoffe (pl.) | die | fiber |
| das Vollkornbrot | das | grovbrød |
| das Obst | das | frukt |
| das Gemüse | das | grønnsaker |
| die Milchprodukte (pl.) | die | melkeprodukter |
| der Zucker | der | sukker |
| kalorienarm | – | kaloriredusert |
| nährstoffreich | – | næringsrik |
| ausgewogen | – | balansert |

**Nyttige uttrykk:**
- *Ich ernähre mich gesund.* – Jeg spiser sunt.
- *Man sollte viel Obst und Gemüse essen.* – Man bør spise mye frukt og grønnsaker.
- *Zucker ist ungesund.* – Sukker er usunt.`,
    },
    {
      id: 'tysk-2-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Über Fitness sprechen',
      problem: `Oversett til tysk:\n1. Jeg trener tre ganger i uken – jeg jogger og løfter vekter.\n2. Frukt er sunnere enn godteri.\n3. Man bør drikke minst to liter vann om dagen.`,
      solution: `1. **Ich trainiere dreimal pro Woche – ich jogge und hebe Gewichte.**\n2. **Obst ist gesünder als Süßigkeiten.**\n3. **Man sollte mindestens zwei Liter Wasser pro Tag trinken.**\n\n**Grammatikk:**\n- Komparativ: gesund → ges**ü**nder (med omlyd!)\n- *sollte* = Konjunktiv II av sollen – for råd\n- *mindestens* = minst`,
    },
    {
      id: 'tysk-2-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «das Fitnessstudio»?',
        options: [
          { id: 'a', text: 'Fotballbane', isCorrect: false },
          { id: 'b', text: 'Treningssenter', isCorrect: true },
          { id: 'c', text: 'Svømmehall', isCorrect: false },
          { id: 'd', text: 'Idrettshall', isCorrect: false },
        ],
        solution: 'Riktig svar er b) treningssenter. Das Fitnessstudio er stedet der man trener med apparater og vekter.',
      },
    },
    {
      id: 'tysk-2-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er komparativ av «gesund» (sunn)?',
        options: [
          { id: 'a', text: 'gesunder', isCorrect: false },
          { id: 'b', text: 'gesünder', isCorrect: true },
          { id: 'c', text: 'mehr gesund', isCorrect: false },
          { id: 'd', text: 'gesunderer', isCorrect: false },
        ],
        solution: 'Riktig svar er b) gesünder. «Gesund» er et adjektiv som får omlyd (Umlaut) i komparativ: gesund → gesünder → am gesündesten. Mange enstavelsesadjektiver får omlyd i komparativ.',
      },
    },
    {
      id: 'tysk-2-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en ukeplan for trening og kosthold på tysk.',
        subTasks: [
          { label: 'a', task: 'Beskriv treningsplanen for tre dager.', solution: 'Am Montag jogge ich 30 Minuten im Park. Am Mittwoch gehe ich ins Fitnessstudio und hebe Gewichte. Am Freitag schwimme ich eine Stunde im Schwimmbad.' },
          { label: 'b', task: 'Beskriv et sunt dagsmåltid (frokost, lunsj, middag).', solution: 'Zum Frühstück esse ich Vollkornbrot mit Käse und trinke Orangensaft. Zum Mittagessen gibt es Salat mit Hähnchen und Reis. Zum Abendessen esse ich Fisch mit Gemüse.' },
          { label: 'c', task: 'Gi tre råd for en sunn livsstil med «man sollte».', solution: 'Man sollte jeden Tag mindestens 30 Minuten Sport treiben. Man sollte viel Wasser trinken und wenig Zucker essen. Man sollte genug schlafen – mindestens sieben Stunden pro Nacht.' },
        ],
        solution: 'Planen bør vise variert vokabular om trening og kosthold, bruk av tidsuttrykk og «man sollte» for råd.',
      },
    },
    {
      id: 'tysk-2-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Treningsvokabular**: Fitnessstudio, joggen, schwimmen, Gewichte heben, Ausdauer, Kraft
- **Ernæringsvokabular**: Eiweiß, Kohlenhydrate, Ballaststoffe, Vollkornbrot, kalorienarm
- **Komparativ med omlyd**: gesund → gesünder, groß → größer, oft → öfter
- **Råd med sollte**: «Man sollte ...» for å gi helseråd

**Merke:** En balansert livsstil (ein ausgewogener Lebensstil) kombinerer trening, godt kosthold og nok søvn!`,
    },
    {
      id: 'tysk-2-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Kohlenhydrate»?',
        options: [
          { id: 'a', text: 'Proteiner', isCorrect: false },
          { id: 'b', text: 'Vitaminer', isCorrect: false },
          { id: 'c', text: 'Karbohydrater', isCorrect: true },
          { id: 'd', text: 'Mineraler', isCorrect: false },
        ],
        solution: 'Riktig svar er c) karbohydrater. Die Kohlenhydrate finnes i brød, pasta, ris og poteter.',
      },
    },
    {
      id: 'tysk-2-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en argumenterende tekst (10-12 setninger) om temaet «Warum ist Sport wichtig?» (Hvorfor er trening viktig?). Bruk komparativ, «man sollte» og eksempler.',
        solution: 'Teksten bør argumentere for trening med konkrete fordeler (gesünder, stärker, glücklicher), bruke «man sollte» for å gi råd, og inkludere komparativformer og eksempler på treningsaktiviteter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Fitnessstudio', definition: 'Treningssenter – sted for styrketrening og kondisjonstrening' },
    { term: 'die Ernährung', definition: 'Ernæring – det man spiser og drikker' },
    { term: 'das Eiweiß', definition: 'Protein – viktig næringsstoff for muskler' },
    { term: 'die Kohlenhydrate', definition: 'Karbohydrater – energikilde fra brød, pasta, ris' },
    { term: 'ausgewogen', definition: 'Balansert – om et variert og sunt kosthold' },
    { term: 'der Muskelkater', definition: 'Stølhet – vondhet i musklene etter trening' },
    { term: 'die Ausdauer', definition: 'Utholdenhet – evnen til å holde ut fysisk aktivitet' },
  ],
};

export const CHAPTER_TYSK_2_12_4: TextbookChapter = {
  id: 'tysk-2-12-4',
  courseId: 'tysk-2',
  chapterNumber: '12.4',
  title: 'Psychische Gesundheit',
  subtitle: 'Psykisk helse og velvære',
  description: 'Lær å snakke om psykisk helse, følelser, stress og velvære på tysk – et viktig tema i dagens samfunn.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne uttrykke følelser og sinnstilstander på tysk',
    'Diskutere psykisk helse og stressmestring',
    'Bruke refleksive verb for å beskrive følelsesmessige tilstander',
    'Forstå og bruke vokabular om velvære og selvhjelp',
  ],
  content: [
    {
      id: 'tysk-2-12-4-intro',
      type: 'text',
      content: `## Psychische Gesundheit – Psykisk helse og velvære

Psykisk helse er like viktig som fysisk helse. I dette kapittelet lærer du å snakke om følelser, stress og velvære på tysk. Du lærer også å gi og motta råd om psykisk helse – et tema som er stadig viktigere i dagens samfunn.

**Viktig:** Å kunne snakke om følelser på et fremmedspråk krever et nyansert ordforråd. Vi starter med grunnleggende følelsesord og bygger opp til mer avanserte uttrykk.`,
    },
    {
      id: 'tysk-2-12-4-def-1',
      type: 'definition',
      title: 'Gefühle und Emotionen – Følelser og emosjoner',
      content: `**Følelsesord:**

| Tysk | Norsk |
|------|-------|
| glücklich | lykkelig |
| traurig | trist |
| wütend / sauer | sint |
| ängstlich | engstelig |
| gestresst | stresset |
| erschöpft | utmattet |
| einsam | ensom |
| zufrieden | fornøyd |
| frustriert | frustrert |
| nervös | nervøs |
| entspannt | avslappet |
| überfordert | overveldet |
| motiviert | motivert |
| hoffnungsvoll | håpefull |

**Refleksive verb for følelser:**
- *sich fühlen* – å føle seg: Ich fühle mich gestresst.
- *sich freuen* – å glede seg: Ich freue mich auf die Ferien.
- *sich Sorgen machen* – å bekymre seg: Ich mache mir Sorgen.
- *sich entspannen* – å slappe av: Du solltest dich entspannen.
- *sich erholen* – å komme seg/hvile: Ich muss mich erholen.`,
    },
    {
      id: 'tysk-2-12-4-def-2',
      type: 'definition',
      title: 'Stress und Wohlbefinden – Stress og velvære',
      content: `**Stressvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| der Stress | der | stress |
| der Druck | der | press |
| die Angst | die | angst |
| die Depression | die | depresjon |
| das Burnout | das | utbrenthet |
| die Erschöpfung | die | utmattelse |
| die Achtsamkeit | die | mindfulness/oppmerksomhet |
| die Selbstfürsorge | die | egenomsorg |
| die Therapie | die | terapi |
| der/die Psychologe/Psychologin | der/die | psykolog (m/f) |
| die Work-Life-Balance | die | balanse mellom jobb og fritid |
| die Meditation | die | meditasjon |

**Nyttige uttrykk:**
- *Ich bin unter Druck.* – Jeg er under press.
- *Das belastet mich.* – Det belaster meg.
- *Ich brauche eine Pause.* – Jeg trenger en pause.
- *Es ist wichtig, über Gefühle zu sprechen.* – Det er viktig å snakke om følelser.`,
    },
    {
      id: 'tysk-2-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Über Gefühle sprechen',
      problem: `Oversett til tysk:\n1. Jeg føler meg stresset på grunn av eksamen.\n2. Han er ensom og trist.\n3. Du burde slappe av og ta en pause.`,
      solution: `1. **Ich fühle mich wegen der Prüfung gestresst.**\n2. **Er ist einsam und traurig.**\n3. **Du solltest dich entspannen und eine Pause machen.**\n\n**Grammatikk:**\n- *sich fühlen* + adjektiv: Ich fühle mich gestresst\n- *wegen* + Genitiv: wegen der Prüfung (på grunn av eksamen)\n- *solltest* = Konjunktiv II av sollen – for råd`,
    },
    {
      id: 'tysk-2-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «sich entspannen»?',
        options: [
          { id: 'a', text: 'Å anstrenge seg', isCorrect: false },
          { id: 'b', text: 'Å slappe av', isCorrect: true },
          { id: 'c', text: 'Å bekymre seg', isCorrect: false },
          { id: 'd', text: 'Å trene', isCorrect: false },
        ],
        solution: 'Riktig svar er b) å slappe av. «Sich entspannen» er et refleksivt verb som betyr å slappe av. Motsetningen er «sich anstrengen» (å anstrenge seg).',
      },
    },
    {
      id: 'tysk-2-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Ratschläge geben – Å gi råd',
      problem: `Din venn forteller deg: «Ich bin total erschöpft und kann nicht schlafen. Ich mache mir Sorgen über alles.»\n\nGi tre råd på tysk med «Du solltest ...» eller «Es wäre gut, wenn ...»`,
      solution: `Tre råd:\n\n1. **Du solltest mit jemandem über deine Sorgen sprechen – vielleicht mit einem Freund oder einer Psychologin.**\n(Du burde snakke med noen om bekymringene dine.)\n\n2. **Es wäre gut, wenn du jeden Abend vor dem Schlafen meditieren würdest.**\n(Det ville vært bra om du mediterte hver kveld før du legger deg.)\n\n3. **Du solltest dir mehr Zeit für dich selbst nehmen und dich entspannen.**\n(Du burde ta deg mer tid til deg selv og slappe av.)\n\n**Grammatikk:** «Es wäre gut, wenn ...» bruker Konjunktiv II i «wenn»-setningen.`,
    },
    {
      id: 'tysk-2-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «überfordert»?',
        options: [
          { id: 'a', text: 'Fornøyd', isCorrect: false },
          { id: 'b', text: 'Overveldet / at noe krever for mye', isCorrect: true },
          { id: 'c', text: 'Overrasket', isCorrect: false },
          { id: 'd', text: 'Overkvalifisert', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Überfordert» betyr at man føler at kravene er for store – man er overveldet. Det brukes ofte om stress på jobb eller skole.',
      },
    },
    {
      id: 'tysk-2-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre ulike personers følelsesmessige situasjon og gi råd til hver av dem.',
        subTasks: [
          { label: 'a', task: 'Person A er stresset på grunn av mye arbeid.', solution: 'Anna fühlt sich gestresst, weil sie zu viel arbeitet. Sie ist erschöpft und hat keine Zeit für Hobbys. Anna sollte eine bessere Work-Life-Balance finden und sich regelmäßig entspannen.' },
          { label: 'b', task: 'Person B føler seg ensom etter å ha flyttet til en ny by.', solution: 'Tom fühlt sich einsam, weil er in eine neue Stadt gezogen ist. Er kennt noch niemanden und vermisst seine Freunde. Tom sollte einem Sportverein beitreten oder einen Sprachkurs besuchen, um neue Leute kennenzulernen.' },
          { label: 'c', task: 'Person C er nervøs for en viktig eksamen.', solution: 'Lena ist nervös wegen ihrer Abschlussprüfung. Sie macht sich große Sorgen und kann nicht schlafen. Lena sollte einen Lernplan machen und genug Pausen einlegen. Es wäre auch gut, wenn sie mit einer Vertrauensperson sprechen würde.' },
        ],
        solution: 'Bruk varierte følelsesord, refleksive verb og Konjunktiv II-råd (sollte, wäre, könnte).',
      },
    },
    {
      id: 'tysk-2-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Følelsesord**: glücklich, traurig, gestresst, erschöpft, einsam, überfordert, zufrieden
- **Refleksive verb**: sich fühlen, sich entspannen, sich Sorgen machen, sich erholen
- **Stressvokabular**: Burnout, Erschöpfung, Druck, Achtsamkeit, Selbstfürsorge
- **Rådgivning**: «Du solltest ...», «Es wäre gut, wenn ...», «Man sollte ...»

**Viktig budskap:** *Es ist keine Schwäche, über Probleme zu sprechen – es ist eine Stärke.* (Det er ingen svakhet å snakke om problemer – det er en styrke.)`,
    },
    {
      id: 'tysk-2-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Achtsamkeit»?',
        options: [
          { id: 'a', text: 'Forsiktighet', isCorrect: false },
          { id: 'b', text: 'Aktsamhet / mindfulness', isCorrect: true },
          { id: 'c', text: 'Oppmerksomhet i klassen', isCorrect: false },
          { id: 'd', text: 'Respekt', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Die Achtsamkeit» betyr mindfulness/oppmerksomhet – å være bevisst til stede i øyeblikket. Det er en viktig teknikk for stressmestring.',
      },
    },
    {
      id: 'tysk-2-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-12-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et blogginnlegg (12-15 setninger) med tittelen «Tipps für ein stressfreies Leben» (Tips for et stressfritt liv). Gi minst fem konkrete råd og bruk variert vokabular fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Innledning: Beskriv problemet med stress i moderne samfunn.', solution: 'Viele Menschen fühlen sich heutzutage gestresst und überfordert. Der Druck in der Schule, bei der Arbeit und in den sozialen Medien kann sehr belastend sein. Deshalb ist es wichtig, auf seine psychische Gesundheit zu achten.' },
          { label: 'b', task: 'Hoveddel: Gi fem konkrete tips.', solution: 'Erstens sollte man regelmäßig Sport treiben, denn Bewegung hilft gegen Stress. Zweitens ist Achtsamkeit sehr wichtig – man sollte sich jeden Tag fünf Minuten Zeit für Meditation nehmen. Drittens sollte man mit Freunden oder Familie über seine Gefühle sprechen. Viertens ist genug Schlaf entscheidend – mindestens sieben Stunden. Fünftens sollte man sich Hobbys suchen, die Spaß machen und einen entspannen.' },
          { label: 'c', task: 'Avslutning: Oppmuntrende avslutning.', solution: 'Es ist wichtig zu wissen: Man muss nicht perfekt sein. Jeder hat mal schlechte Tage. Aber wenn man auf sich selbst achtet und sich Hilfe holt, wenn man sie braucht, kann man ein glücklicheres und stressfreieres Leben führen.' },
        ],
        solution: 'Blogginnlegget bør ha klar struktur, bruke varierte følelsesord, refleksive verb, Konjunktiv II for råd, og koblingsord (erstens, zweitens, drittens ...).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'sich fühlen', definition: 'Å føle seg – refleksivt verb for å beskrive følelsestilstand' },
    { term: 'gestresst', definition: 'Stresset – under press og belastning' },
    { term: 'überfordert', definition: 'Overveldet – når kravene er for store' },
    { term: 'die Achtsamkeit', definition: 'Mindfulness/oppmerksomhet – bevisst tilstedeværelse i øyeblikket' },
    { term: 'die Selbstfürsorge', definition: 'Egenomsorg – å ta vare på seg selv' },
    { term: 'sich entspannen', definition: 'Å slappe av – å redusere spenning og stress' },
    { term: 'sich Sorgen machen', definition: 'Å bekymre seg – å ha bekymringer' },
    { term: 'die Work-Life-Balance', definition: 'Balanse mellom jobb og fritid' },
  ],
};

// ============================================================================
// KAPITTEL 13: TECHNOLOGIE UND DIGITALE WELT
// ============================================================================

export const CHAPTER_TYSK_2_13_1: TextbookChapter = {
  id: 'tysk-2-13-1',
  courseId: 'tysk-2',
  chapterNumber: '13.1',
  title: 'Das Internet und soziale Medien',
  subtitle: 'Internett og sosiale medier',
  description: 'Lær vokabular knyttet til internett og sosiale medier, og øv på å beskrive nettbasert kommunikasjon og medievaner på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive internettbruk og sosiale medier på tysk',
    'Mestre vokabular knyttet til nettbasert kommunikasjon',
    'Kunne diskutere fordeler og ulemper ved sosiale medier',
    'Bruke relevante verb og uttrykk for digital hverdag',
  ],
  content: [
    {
      id: 'tysk-2-13-1-intro',
      type: 'text',
      content: `## Das Internet und soziale Medien – Internett og sosiale medier

Internett og sosiale medier er en stor del av hverdagen vår. I dette kapittelet lærer du å snakke om nettbruk, sosiale medier og online kommunikasjon på tysk.

Mange tyske ord innen teknologi er **engelske lånord** som har fått tysk uttale og grammatikk: *das Internet*, *die App*, *der Computer*. Men det finnes også mange ekte tyske uttrykk som du bør kjenne til!`,
    },
    {
      id: 'tysk-2-13-1-def-1',
      type: 'definition',
      title: 'Internet-Vokabular – Internettvokabular',
      content: `**Grunnleggende internettvokabular:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das Internet | das | internett |
| die Webseite (die Webseiten) | die | nettside (nettsider) |
| der Browser | der | nettleser |
| die Suchmaschine | die | søkemotor |
| der Link (die Links) | der | lenke (lenker) |
| das Passwort (die Passwörter) | das | passord |
| der Benutzername | der | brukernavn |
| das WLAN | das | trådløst nettverk / WiFi |
| herunterladen | – | å laste ned |
| hochladen | – | å laste opp |
| surfen | – | å surfe (på nett) |
| googeln | – | å google |

**Nyttige uttrykk:**
- *im Internet surfen* – å surfe på nettet
- *eine Webseite besuchen* – å besøke en nettside
- *etwas herunterladen* – å laste ned noe
- *sich einloggen / sich anmelden* – å logge inn`,
    },
    {
      id: 'tysk-2-13-1-def-2',
      type: 'definition',
      title: 'Soziale Medien – Sosiale medier',
      content: `**Sosiale medier – ord og uttrykk:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die sozialen Medien | die (fl.) | sosiale medier |
| das soziale Netzwerk | das | sosialt nettverk |
| der Follower (die Follower) | der | følger (følgere) |
| der Beitrag (die Beiträge) | der | innlegg |
| das Profil | das | profil |
| teilen | – | å dele |
| liken | – | å like |
| kommentieren | – | å kommentere |
| abonnieren | – | å abonnere / følge |
| posten | – | å poste / legge ut |
| der Hashtag | der | hashtag / emneord |
| die Benachrichtigung | die | varsling / notifikasjon |

**Viktige verb:**
- *einen Beitrag posten* – å legge ut et innlegg
- *jemandem folgen* – å følge noen
- *ein Foto teilen* – å dele et bilde
- *eine Nachricht senden* – å sende en melding`,
    },
    {
      id: 'tysk-2-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Über soziale Medien sprechen',
      problem: `Oversett til tysk:\n1. Jeg bruker sosiale medier hver dag.\n2. Hun har mange følgere på Instagram.\n3. Vi deler bilder og videoer med venner.`,
      solution: `1. **Ich benutze soziale Medien jeden Tag.**\n2. **Sie hat viele Follower auf Instagram.**\n3. **Wir teilen Fotos und Videos mit Freunden.**\n\n**Merk:** «benutzen» (å bruke) og «verwenden» (å anvende) kan begge brukes om teknologibruk. «Jeden Tag» er akkusativ tidsuttrykk.`,
    },
    {
      id: 'tysk-2-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Suchmaschine» på norsk?',
        options: [
          { id: 'a', text: 'Nettleser', isCorrect: false },
          { id: 'b', text: 'Søkemotor', isCorrect: true },
          { id: 'c', text: 'Nettside', isCorrect: false },
          { id: 'd', text: 'E-postprogram', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Die Suchmaschine = søkemotor. Ordet er sammensatt av «suchen» (å søke) + «die Maschine» (maskin).',
      },
    },
    {
      id: 'tysk-2-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Ich lade ein Video herunter.', isCorrect: true },
          { id: 'b', text: 'Ich herunterlade ein Video.', isCorrect: false },
          { id: 'c', text: 'Ich lade herunter ein Video.', isCorrect: false },
          { id: 'd', text: 'Ich herunterladen ein Video.', isCorrect: false },
        ],
        solution: 'Riktig svar er a). «Herunterladen» er et delbart verb (trennbares Verb). I hovedsetninger plasseres prefikset «herunter» til slutt: Ich lade ... herunter.',
      },
    },
    {
      id: 'tysk-2-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv dine medievaner på tysk. Svar på følgende spørsmål i fullstendige setninger:',
        subTasks: [
          { label: 'a', task: 'Welche sozialen Medien benutzt du? (Hvilke sosiale medier bruker du?)', solution: 'Ich benutze Instagram und TikTok. Ich schaue auch Videos auf YouTube.' },
          { label: 'b', task: 'Wie viel Zeit verbringst du im Internet? (Hvor mye tid bruker du på nettet?)', solution: 'Ich verbringe ungefähr zwei Stunden pro Tag im Internet. Am Wochenende ist es manchmal mehr.' },
          { label: 'c', task: 'Was machst du am liebsten online? (Hva liker du best å gjøre på nett?)', solution: 'Am liebsten schaue ich Videos und chatte mit meinen Freunden. Ich teile auch gern Fotos.' },
        ],
        solution: 'Bruk varierte verb: benutzen, surfen, teilen, posten, chatten, schauen. Husk tidsuttrykk: jeden Tag, pro Tag, am Wochenende.',
      },
    },
    {
      id: 'tysk-2-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Internettvokabular**: Webseite, Browser, Suchmaschine, Passwort, WLAN
- **Sosiale medier**: Beitrag, Follower, teilen, liken, kommentieren, posten
- **Nyttige verb**: herunterladen, hochladen, surfen, sich einloggen
- **Delbare verb**: herunterladen → Ich lade herunter, hochladen → Ich lade hoch

**Husk:** Mange teknologiord er engelske lånord med tysk artikkel og bøyning!`,
    },
    {
      id: 'tysk-2-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «einen Beitrag posten»?',
        options: [
          { id: 'a', text: 'Å sende en e-post', isCorrect: false },
          { id: 'b', text: 'Å laste ned en fil', isCorrect: false },
          { id: 'c', text: 'Å legge ut et innlegg', isCorrect: true },
          { id: 'd', text: 'Å slette en konto', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Der Beitrag» = innlegg, «posten» = å legge ut. «Einen Beitrag posten» = å legge ut et innlegg (på sosiale medier).',
      },
    },
    {
      id: 'tysk-2-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (8-10 setninger) om fordelene og ulempene ved sosiale medier. Bruk minst 8 ord fra kapittelet. Skriv på tysk.',
        solution: 'Teksten bør diskutere Vorteile (fordeler): mit Freunden in Kontakt bleiben, Nachrichten teilen, Informationen finden – og Nachteile (ulemper): zu viel Zeit verbringen, Cybermobbing, Datenschutz-Probleme. Bruk ord som: soziale Medien, teilen, posten, Follower, Beitrag, Benachrichtigung, kommentieren, Profil.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Internet', definition: 'Internett – det globale datanettverket' },
    { term: 'die Suchmaschine', definition: 'Søkemotor – verktøy for å søke på nettet (f.eks. Google)' },
    { term: 'die sozialen Medien', definition: 'Sosiale medier – plattformer for deling og kommunikasjon' },
    { term: 'der Beitrag', definition: 'Innlegg – tekst, bilde eller video delt på nett' },
    { term: 'herunterladen', definition: 'Å laste ned – å hente filer fra internett (delbart verb)' },
    { term: 'teilen', definition: 'Å dele – å sende eller vise innhold til andre' },
    { term: 'das Passwort', definition: 'Passord – hemmelig kode for innlogging' },
    { term: 'der Follower', definition: 'Følger – person som abonnerer på en konto' },
  ],
};

export const CHAPTER_TYSK_2_13_2: TextbookChapter = {
  id: 'tysk-2-13-2',
  courseId: 'tysk-2',
  chapterNumber: '13.2',
  title: 'Technische Geräte und Software',
  subtitle: 'Tekniske enheter og programvare',
  description: 'Lær vokabular for tekniske enheter, apper og programvare, og øv på å beskrive teknologisk utstyr og dets funksjoner på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne navngi tekniske enheter og utstyr på tysk',
    'Beskrive funksjoner og bruksområder for ulike enheter',
    'Mestre vokabular knyttet til programvare og apper',
    'Kunne sammenlikne ulike tekniske produkter på tysk',
  ],
  content: [
    {
      id: 'tysk-2-13-2-intro',
      type: 'text',
      content: `## Technische Geräte und Software – Tekniske enheter og programvare

I dagliglivet er vi omgitt av tekniske apparater – fra smarttelefoner til datamaskiner og nettbrett. I dette kapittelet lærer du å snakke om teknisk utstyr, programvare og deres funksjoner på tysk.

**Grammatikk-fokus:** Vi øver på **Komparativ** (sammenlikningsformer) for å kunne sammenlikne ulike produkter: *Das Tablet ist leichter als der Laptop* (Nettbrettet er lettere enn laptopen).`,
    },
    {
      id: 'tysk-2-13-2-def-1',
      type: 'definition',
      title: 'Technische Geräte – Tekniske enheter',
      content: `**Vanlige tekniske enheter:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das Smartphone | das | smarttelefon |
| das Handy | das | mobiltelefon |
| der Computer | der | datamaskin |
| der Laptop | der | bærbar datamaskin |
| das Tablet | das | nettbrett |
| der Bildschirm | der | skjerm |
| die Tastatur | die | tastatur |
| die Maus | die | mus (datamus) |
| der Drucker | der | skriver |
| der Kopfhörer (die Kopfhörer) | der | hodetelefoner |
| der Lautsprecher | der | høyttaler |
| das Ladegerät | das | lader |
| der USB-Stick | der | minnepinne |
| die Festplatte | die | harddisk |

**Nyttige uttrykk:**
- *das Handy aufladen* – å lade mobilen
- *den Computer hochfahren* – å starte datamaskinen
- *den Computer herunterfahren* – å slå av datamaskinen`,
    },
    {
      id: 'tysk-2-13-2-def-2',
      type: 'definition',
      title: 'Software und Apps – Programvare og apper',
      content: `**Programvare og apper:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Software | die | programvare |
| die App (die Apps) | die | app (apper) |
| das Programm | das | program |
| das Betriebssystem | das | operativsystem |
| die Textverarbeitung | die | tekstbehandling |
| die Tabellenkalkulation | die | regneark |
| die Datenbank | die | database |
| das Update | das | oppdatering |
| der Speicher | der | lagringsplass / minne |
| die Datei (die Dateien) | die | fil (filer) |
| der Ordner | der | mappe |
| speichern | – | å lagre |
| löschen | – | å slette |
| installieren | – | å installere |
| aktualisieren | – | å oppdatere |

**Sammenlikning med Komparativ:**
- *schneller als* – raskere enn
- *besser als* – bedre enn
- *günstiger als* – billigere enn
- *Das neue Modell ist schneller als das alte.* – Den nye modellen er raskere enn den gamle.`,
    },
    {
      id: 'tysk-2-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Geräte beschreiben und vergleichen',
      problem: `Oversett til tysk:\n1. Nettbrettet mitt har en stor skjerm.\n2. Laptopen er dyrere enn nettbrettet.\n3. Jeg må oppdatere programvaren.`,
      solution: `1. **Mein Tablet hat einen großen Bildschirm.**\n   (Akkusativ: einen großen Bildschirm – maskulin)\n2. **Der Laptop ist teurer als das Tablet.**\n   (Komparativ av teuer: teurer – merk: e-en faller bort)\n3. **Ich muss die Software aktualisieren.**\n   (Modalverb «müssen» + infinitiv til slutt)\n\n**Merk:** Komparativ av «teuer» er «teurer» (ikke «teuerer»). Det samme gjelder «dunkel» → «dunkler».`,
    },
    {
      id: 'tysk-2-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Tastatur» på norsk?',
        options: [
          { id: 'a', text: 'Skjerm', isCorrect: false },
          { id: 'b', text: 'Tastatur', isCorrect: true },
          { id: 'c', text: 'Mus', isCorrect: false },
          { id: 'd', text: 'Høyttaler', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Die Tastatur = tastatur. Ordet kommer fra «die Taste» (tast) + «-ur» (ending).',
      },
    },
    {
      id: 'tysk-2-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken komparativform er korrekt? «Das Smartphone ist ___ als der Laptop.»',
        options: [
          { id: 'a', text: 'kleiner', isCorrect: true },
          { id: 'b', text: 'kleinder', isCorrect: false },
          { id: 'c', text: 'mehr klein', isCorrect: false },
          { id: 'd', text: 'kleinerer', isCorrect: false },
        ],
        solution: 'Riktig svar er a). Komparativ av «klein» er «kleiner». På tysk legger man -er til adjektivet (ikke «mehr» som på norsk/engelsk). «Kleinerer» ville vært bøyd form (f.eks. ein kleinerer Bildschirm).',
      },
    },
    {
      id: 'tysk-2-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv en teknisk enhet du bruker daglig. Skriv 5-6 setninger på tysk der du forklarer hva den heter, hva du bruker den til, og hva du liker ved den.',
        solution: 'Eksempelsvar: «Ich benutze jeden Tag mein Smartphone. Es hat einen großen Bildschirm und eine gute Kamera. Ich benutze es, um Nachrichten zu lesen und Fotos zu machen. Die Batterie hält den ganzen Tag. Mein Smartphone ist schneller als mein altes Handy. Ich habe viele nützliche Apps installiert.» Bruk ord som: benutzen, der Bildschirm, die App, installieren, speichern.',
      },
    },
    {
      id: 'tysk-2-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Tekniske enheter**: Smartphone, Laptop, Tablet, Bildschirm, Tastatur, Drucker, Kopfhörer
- **Programvare**: Software, App, Betriebssystem, Update, Datei, Ordner
- **Viktige verb**: speichern, löschen, installieren, aktualisieren, hochfahren, herunterfahren
- **Komparativ**: schneller als, besser als, kleiner als, teurer als

**Husk:** «Das Handy» er det vanligste tyske ordet for mobiltelefon – det brukes ikke på engelsk!`,
    },
    {
      id: 'tysk-2-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «speichern» på norsk?',
        options: [
          { id: 'a', text: 'Å slette', isCorrect: false },
          { id: 'b', text: 'Å installere', isCorrect: false },
          { id: 'c', text: 'Å lagre', isCorrect: true },
          { id: 'd', text: 'Å oppdatere', isCorrect: false },
        ],
        solution: 'Riktig svar er c). Speichern = å lagre. «Die Datei speichern» = å lagre filen. «Der Speicher» = lagringsplass/minne.',
      },
    },
    {
      id: 'tysk-2-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlikn to tekniske produkter (f.eks. to mobiltelefoner eller en laptop og et nettbrett). Skriv 8-10 setninger på tysk og bruk minst 5 komparativformer.',
        solution: 'Teksten bør bruke varierte komparativer: größer, kleiner, schneller, teurer, billiger, leichter, besser, moderner. Eksempel: «Der Laptop ist größer als das Tablet. Das Tablet ist leichter als der Laptop. Der Laptop hat eine bessere Tastatur. Das Tablet hat einen schöneren Bildschirm. Der Laptop ist teurer als das Tablet, aber er hat mehr Speicher.»',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Handy', definition: 'Mobiltelefon – tysk ord for mobiltelefon (brukes ikke på engelsk)' },
    { term: 'der Bildschirm', definition: 'Skjerm – displayet på en enhet' },
    { term: 'die Tastatur', definition: 'Tastatur – inndataenhet med taster for å skrive' },
    { term: 'das Betriebssystem', definition: 'Operativsystem – grunnleggende programvare (f.eks. Windows, iOS)' },
    { term: 'speichern', definition: 'Å lagre – å ta vare på data digitalt' },
    { term: 'löschen', definition: 'Å slette – å fjerne filer eller data permanent' },
    { term: 'das Ladegerät', definition: 'Lader – enhet for å lade opp batterier' },
    { term: 'die Datei', definition: 'Fil – digital enhet for lagring av data' },
  ],
};

export const CHAPTER_TYSK_2_13_3: TextbookChapter = {
  id: 'tysk-2-13-3',
  courseId: 'tysk-2',
  chapterNumber: '13.3',
  title: 'Digitale Kommunikation',
  subtitle: 'Digital kommunikasjon',
  description: 'Lær å skrive e-poster, delta i nettforum og diskutere nettsikkerhet og personvern på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive formelle og uformelle e-poster på tysk',
    'Mestre vokabular for digital kommunikasjon og nettforum',
    'Forstå og diskutere personvern og nettsikkerhet',
    'Bruke Konjunktiv II for høflige forespørsler i e-poster',
  ],
  content: [
    {
      id: 'tysk-2-13-3-intro',
      type: 'text',
      content: `## Digitale Kommunikation – Digital kommunikasjon

Digital kommunikasjon er en viktig del av både privatliv og arbeidsliv. I dette kapittelet lærer du å skrive e-poster (formelle og uformelle), delta i nettforum, og snakke om nettsikkerhet og personvern på tysk.

**Grammatikk-fokus:** Vi bruker **Konjunktiv II** for høflige formuleringer i e-poster: *Könnten Sie mir bitte helfen?* (Kunne De/du hjelpe meg?) og **Relativsätze** (relativsetninger) for å beskrive ting: *die E-Mail, die ich geschickt habe* (e-posten som jeg sendte).`,
    },
    {
      id: 'tysk-2-13-3-def-1',
      type: 'definition',
      title: 'E-Mail-Vokabular – E-postvokabular',
      content: `**E-post – ord og uttrykk:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die E-Mail (die E-Mails) | die | e-post |
| der Absender | der | avsender |
| der Empfänger | der | mottaker |
| der Betreff | der | emne(felt) |
| der Anhang (die Anhänge) | der | vedlegg |
| die Nachricht (die Nachrichten) | die | melding (meldinger) |
| senden / schicken | – | å sende |
| empfangen | – | å motta |
| weiterleiten | – | å videresende |
| antworten | – | å svare |
| die Anrede | die | hilsen (innledning) |
| der Gruß (die Grüße) | der | hilsen (avslutning) |

**Formell e-post – struktur:**
- *Sehr geehrte Frau / Sehr geehrter Herr ...* – Kjære fru / Kjære herr ...
- *Ich schreibe Ihnen, weil ...* – Jeg skriver til Dem/deg fordi ...
- *Könnten Sie mir bitte ... senden?* – Kunne De sende meg ...?
- *Mit freundlichen Grüßen* – Med vennlig hilsen

**Uformell e-post:**
- *Liebe / Lieber ...* – Kjære ...
- *Viele Grüße* – Mange hilsener
- *Bis bald!* – Vi ses snart!`,
    },
    {
      id: 'tysk-2-13-3-def-2',
      type: 'definition',
      title: 'Online-Sicherheit – Nettsikkerhet',
      content: `**Nettsikkerhet og personvern:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Datensicherheit | die | datasikkerhet |
| der Datenschutz | der | personvern |
| die Privatsphäre | die | privatsfære |
| das Cybermobbing | das | nettmobbing |
| der Virus (die Viren) | der | virus |
| der Spam | der | søppelpost |
| die Firewall | die | brannmur |
| die Verschlüsselung | die | kryptering |
| hacken | – | å hacke |
| schützen | – | å beskytte |
| melden | – | å rapportere / melde |
| blockieren | – | å blokkere |

**Viktige uttrykk:**
- *persönliche Daten schützen* – å beskytte personlige data
- *ein sicheres Passwort wählen* – å velge et sikkert passord
- *vorsichtig sein mit ...* – å være forsiktig med ...
- *jemanden blockieren/melden* – å blokkere/rapportere noen`,
    },
    {
      id: 'tysk-2-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Eine formelle E-Mail schreiben',
      problem: `Skriv en formell e-post på tysk der du ber om informasjon om et språkkurs i Berlin. Inkluder:\n- Formell hilsen\n- Grunn for henvendelsen\n- Høflig forespørsel\n- Formell avslutning`,
      solution: `**Betreff: Anfrage – Sprachkurs in Berlin**

Sehr geehrte Damen und Herren,

ich schreibe Ihnen, weil ich mich für einen Deutschkurs in Berlin interessiere.

Könnten Sie mir bitte Informationen über die Kurse im Sommer senden? Ich möchte gerne wissen, wie lange der Kurs dauert und was er kostet.

Ich würde mich über eine Antwort freuen.

Mit freundlichen Grüßen
[Ditt navn]

**Merk:** «Sehr geehrte Damen und Herren» brukes når du ikke vet hvem mottakeren er. «Könnten Sie» og «Ich würde mich freuen» er Konjunktiv II for høflighet.`,
    },
    {
      id: 'tysk-2-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan avslutter man vanligvis en formell e-post på tysk?',
        options: [
          { id: 'a', text: 'Tschüss!', isCorrect: false },
          { id: 'b', text: 'Mit freundlichen Grüßen', isCorrect: true },
          { id: 'c', text: 'Bis bald!', isCorrect: false },
          { id: 'd', text: 'Viele Grüße', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Mit freundlichen Grüßen» (Med vennlig hilsen) er den vanligste formelle avslutningen. «Viele Grüße» og «Bis bald» er uformelle, og «Tschüss» brukes kun muntlig.',
      },
    },
    {
      id: 'tysk-2-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «der Datenschutz» på norsk?',
        options: [
          { id: 'a', text: 'Databeskyttelse / Personvern', isCorrect: true },
          { id: 'b', text: 'Datasikkerhet', isCorrect: false },
          { id: 'c', text: 'Datainnsamling', isCorrect: false },
          { id: 'd', text: 'Datamaskering', isCorrect: false },
        ],
        solution: 'Riktig svar er a). Der Datenschutz = personvern/databeskyttelse. Sammensatt av «die Daten» (data) + «der Schutz» (beskyttelse). Det er et svært viktig konsept i Tyskland (DSGVO = GDPR).',
      },
    },
    {
      id: 'tysk-2-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en uformell e-post til en tysk venn der du forteller om helgen din og inviterer til en filmkveld. Bruk 6-8 setninger på tysk.',
        solution: 'Eksempelsvar: «Lieber Max, wie geht es dir? Am Wochenende war ich im Kino und habe einen tollen Film gesehen. Hast du Lust, am Freitag zu mir zu kommen? Wir könnten zusammen einen Film schauen und Pizza bestellen. Ich habe auch ein neues Spiel, das wir ausprobieren können. Schreib mir bald zurück! Viele Grüße, [navn].» Bruk uformell hilsen (Lieber/Liebe) og avslutning (Viele Grüße).',
      },
    },
    {
      id: 'tysk-2-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **E-postvokabular**: Absender, Empfänger, Betreff, Anhang, senden, antworten
- **Formell e-post**: Sehr geehrte/r ..., Könnten Sie ..., Mit freundlichen Grüßen
- **Uformell e-post**: Liebe/r ..., Viele Grüße, Bis bald
- **Nettsikkerhet**: Datenschutz, Cybermobbing, Virus, schützen, blockieren, melden
- **Konjunktiv II i e-poster**: Könnten Sie ..., Ich würde mich freuen ...

**Husk:** Personvern (Datenschutz) er et spesielt viktig tema i Tyskland – den tyske DSGVO er verdens strengeste personvernlov!`,
    },
    {
      id: 'tysk-2-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning bruker Konjunktiv II korrekt i en e-post?',
        options: [
          { id: 'a', text: 'Können Sie mir bitte helfen?', isCorrect: false },
          { id: 'b', text: 'Könnten Sie mir bitte helfen?', isCorrect: true },
          { id: 'c', text: 'Konnten Sie mir bitte helfen?', isCorrect: false },
          { id: 'd', text: 'Gekonnt Sie mir bitte helfen?', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Könnten» er Konjunktiv II av «können» og uttrykker høflighet. «Können» (a) er Indikativ (direkte), «konnten» (c) er Präteritum, og «gekonnt» (d) er Perfekt Partizip – ingen av dem passer her.',
      },
    },
    {
      id: 'tysk-2-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en formell e-post (10-12 setninger) til en tysk skole der du søker om utvekslingsplass. Inkluder: hvem du er, hvorfor du vil til Tyskland, hva du forventer, og en høflig avslutning. Bruk Konjunktiv II minst tre ganger.',
        solution: 'E-posten bør inneholde: Formell innledning (Sehr geehrte Damen und Herren), presentasjon (Ich bin ... und komme aus Norwegen), begrunnelse (Ich würde gerne ..., Ich interessiere mich für ...), høflige spørsmål (Könnten Sie mir ..., Wäre es möglich ..., Ich würde mich freuen ...), og formell avslutning (Mit freundlichen Grüßen). Konjunktiv II: würde, könnten, wäre, hätte.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die E-Mail', definition: 'E-post – elektronisk brev sendt over internett' },
    { term: 'der Betreff', definition: 'Emne(felt) – overskriften i en e-post' },
    { term: 'der Anhang', definition: 'Vedlegg – fil som er lagt ved en e-post' },
    { term: 'der Datenschutz', definition: 'Personvern – beskyttelse av personlige data' },
    { term: 'das Cybermobbing', definition: 'Nettmobbing – mobbing via digitale kanaler' },
    { term: 'Mit freundlichen Grüßen', definition: 'Med vennlig hilsen – formell avslutning i brev/e-post' },
    { term: 'weiterleiten', definition: 'Å videresende – å sende en mottatt melding videre' },
    { term: 'die Verschlüsselung', definition: 'Kryptering – sikring av data slik at de ikke kan leses av uautoriserte' },
  ],
};

export const CHAPTER_TYSK_2_13_4: TextbookChapter = {
  id: 'tysk-2-13-4',
  courseId: 'tysk-2',
  chapterNumber: '13.4',
  title: 'Technologie und Zukunft',
  subtitle: 'Teknologi og fremtid',
  description: 'Diskuter fremtidens teknologi, kunstig intelligens, automatisering og deres påvirkning på samfunnet. Lær å uttrykke meninger og argumentere på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere fremtidens teknologi på tysk',
    'Mestre vokabular knyttet til kunstig intelligens og automatisering',
    'Uttrykke meninger og argumentere for og imot teknologisk utvikling',
    'Bruke Futur I for å snakke om fremtiden',
  ],
  content: [
    {
      id: 'tysk-2-13-4-intro',
      type: 'text',
      content: `## Technologie und Zukunft – Teknologi og fremtid

Hvordan vil teknologien forme fremtiden vår? Kunstig intelligens, roboter og automatisering endrer allerede samfunnet. I dette kapittelet lærer du å snakke om fremtidens teknologi, uttrykke meninger og diskutere fordeler og ulemper på tysk.

**Grammatikk-fokus:** Vi bruker **Futur I** (werden + Infinitiv) for å snakke om fremtiden: *Roboter werden viele Aufgaben übernehmen* (Roboter kommer til å overta mange oppgaver). Vi øver også på **meningsuttrykk**: *Ich bin der Meinung, dass ...* (Jeg mener at ...).`,
    },
    {
      id: 'tysk-2-13-4-def-1',
      type: 'definition',
      title: 'Zukunftstechnologie – Fremtidsteknologi',
      content: `**Fremtidsteknologi – viktige ord:**

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Künstliche Intelligenz (KI) | die | kunstig intelligens (KI) |
| der Roboter (die Roboter) | der | robot (roboter) |
| die Automatisierung | die | automatisering |
| die virtuelle Realität (VR) | die | virtuell virkelighet (VR) |
| die erweiterte Realität (AR) | die | utvidet virkelighet (AR) |
| das selbstfahrende Auto | das | selvkjørende bil |
| die erneuerbare Energie | die | fornybar energi |
| der 3D-Drucker | der | 3D-skriver |
| die Drohne (die Drohnen) | die | drone (droner) |
| das Smart Home | das | smarthus |
| die Digitalisierung | die | digitalisering |
| die Innovation (die Innovationen) | die | innovasjon (innovasjoner) |

**Futur I (fremtid):**
werden + Infinitiv:
- *Ich werde eine neue App entwickeln.* – Jeg kommer til å utvikle en ny app.
- *Die Technologie wird sich schnell verändern.* – Teknologien kommer til å forandre seg raskt.
- *Wir werden neue Lösungen finden.* – Vi kommer til å finne nye løsninger.`,
    },
    {
      id: 'tysk-2-13-4-def-2',
      type: 'definition',
      title: 'Meinungen äußern – Å uttrykke meninger',
      content: `**Uttrykk for å si din mening:**

| Tysk | Norsk |
|------|-------|
| Ich bin der Meinung, dass ... | Jeg mener at ... |
| Meiner Meinung nach ... | Etter min mening ... |
| Ich finde, dass ... | Jeg synes at ... |
| Ich glaube, dass ... | Jeg tror at ... |
| Einerseits ... andererseits ... | På den ene siden ... på den andre siden ... |
| Ein Vorteil ist, dass ... | En fordel er at ... |
| Ein Nachteil ist, dass ... | En ulempe er at ... |
| Ich stimme (nicht) zu, dass ... | Jeg er (ikke) enig i at ... |
| Das stimmt, aber ... | Det stemmer, men ... |
| Im Gegenteil, ... | Tvert imot, ... |

**Merk:** Etter «dass» (at) kommer verbet til slutt i setningen:
- Ich glaube, dass KI sehr nützlich **ist**.
- Ich finde, dass Roboter viele Jobs **ersetzen werden**.`,
    },
    {
      id: 'tysk-2-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Debatte über KI',
      problem: `Skriv argumenter for og imot kunstig intelligens på tysk.\n\nFor (Vorteile):\n1. KI kan løse komplekse problemer.\n2. Den sparer tid og penger.\n\nImot (Nachteile):\n1. Mange mennesker vil miste jobben.\n2. Det er farlig hvis KI blir for mektig.`,
      solution: `**Vorteile:**\n1. **Künstliche Intelligenz kann komplexe Probleme lösen.**\n2. **Sie spart Zeit und Geld.**\n\n**Nachteile:**\n1. **Viele Menschen werden ihren Job verlieren.**\n   (Futur I: werden + verlieren)\n2. **Es ist gefährlich, wenn KI zu mächtig wird.**\n   (wenn-setning: verbet til slutt)\n\n**Formulert som meninger:**\n- Einerseits finde ich, dass KI sehr nützlich ist. Andererseits glaube ich, dass viele Arbeitsplätze verschwinden werden.\n\n**Merk:** «ihren Job» – Akkusativ (maskulin) med possessivpronomen.`,
    },
    {
      id: 'tysk-2-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «die Künstliche Intelligenz» på norsk?',
        options: [
          { id: 'a', text: 'Kunstig virkelighet', isCorrect: false },
          { id: 'b', text: 'Kunstig intelligens', isCorrect: true },
          { id: 'c', text: 'Kunstig kreativitet', isCorrect: false },
          { id: 'd', text: 'Kunstig kompetanse', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Die Künstliche Intelligenz (KI) = kunstig intelligens. «Künstlich» = kunstig/kunstnerisk, «die Intelligenz» = intelligens.',
      },
    },
    {
      id: 'tysk-2-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken Futur I-setning er korrekt?',
        options: [
          { id: 'a', text: 'Roboter werden viele Jobs übernehmen.', isCorrect: true },
          { id: 'b', text: 'Roboter wird viele Jobs übernehmen.', isCorrect: false },
          { id: 'c', text: 'Roboter werden viele Jobs übernommen.', isCorrect: false },
          { id: 'd', text: 'Roboter wirst viele Jobs übernehmen.', isCorrect: false },
        ],
        solution: 'Riktig svar er a). Futur I = werden (bøyd) + Infinitiv. «Roboter» er flertall, derfor «werden» (ikke «wird» eller «wirst»). Infinitiv «übernehmen» (ikke Partizip «übernommen»).',
      },
    },
    {
      id: 'tysk-2-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Futur I til å skrive 5 setninger om hvordan du tror livet vil være om 20 år. Skriv på tysk.',
        subTasks: [
          { label: 'a', task: 'Transport og biler', solution: 'In 20 Jahren werden die meisten Autos selbstfahrend sein. Wir werden nicht mehr selbst fahren müssen.' },
          { label: 'b', task: 'Arbeid og jobber', solution: 'Roboter werden viele Aufgaben übernehmen. Viele Menschen werden von zu Hause aus arbeiten.' },
          { label: 'c', task: 'Teknologi i hverdagen', solution: 'Wir werden in Smart Homes wohnen. Die Künstliche Intelligenz wird uns im Alltag helfen.' },
        ],
        solution: 'Bruk Futur I: werden + Infinitiv. Eksempler: werden ... sein, werden ... arbeiten, werden ... übernehmen, werden ... helfen, werden ... wohnen.',
      },
    },
    {
      id: 'tysk-2-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fremtidsteknologi**: Künstliche Intelligenz, Roboter, Automatisierung, selbstfahrendes Auto, Smart Home
- **Meningsuttrykk**: Ich bin der Meinung, dass ...; Einerseits ... andererseits ...; Ein Vorteil/Nachteil ist ...
- **Futur I**: werden + Infinitiv for å snakke om fremtiden
- **Argumentasjon**: Vorteile und Nachteile (fordeler og ulemper)

**Husk:** Etter «dass» og «wenn» kommer verbet til slutt i setningen! Futur I = werden (bøyd etter subjekt) + Infinitiv (til slutt).`,
    },
    {
      id: 'tysk-2-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan sier man «Etter min mening» på tysk?',
        options: [
          { id: 'a', text: 'Nach meiner Meinung', isCorrect: false },
          { id: 'b', text: 'Meiner Meinung nach', isCorrect: true },
          { id: 'c', text: 'In meiner Meinung', isCorrect: false },
          { id: 'd', text: 'Von meiner Meinung', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Meiner Meinung nach» er den korrekte formen. Merk at «nach» kommer etter: Meiner Meinung nach ist KI sehr nützlich. Man kan også si «Nach meiner Meinung», men «Meiner Meinung nach» er vanligere.',
      },
    },
    {
      id: 'tysk-2-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-13-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en argumenterende tekst (10-12 setninger) om temaet: «Werden Roboter die Menschen ersetzen?» (Vil roboter erstatte mennesker?). Presenter argumenter for og imot, og avslutt med din egen mening. Bruk Futur I, meningsuttrykk og minst 8 ord fra kapittelet.',
        solution: 'Teksten bør inneholde: Innledning med tema, Vorteile (Roboter können gefährliche Arbeit übernehmen, sie machen keine Fehler, sie arbeiten schneller), Nachteile (viele Menschen verlieren ihren Job, Roboter haben keine Gefühle, Technik kann versagen), og egen mening med «Meiner Meinung nach ...» eller «Ich bin der Meinung, dass ...». Bruk Futur I: werden ... ersetzen, werden ... verändern, werden ... brauchen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Künstliche Intelligenz (KI)', definition: 'Kunstig intelligens – datasystemer som kan lære og ta beslutninger' },
    { term: 'der Roboter', definition: 'Robot – maskin som kan utføre oppgaver automatisk' },
    { term: 'die Automatisierung', definition: 'Automatisering – prosessen med å gjøre ting automatiske' },
    { term: 'das selbstfahrende Auto', definition: 'Selvkjørende bil – bil som kjører uten menneskelig fører' },
    { term: 'Futur I (werden + Infinitiv)', definition: 'Fremtidsform – brukes for å uttrykke hva som vil skje' },
    { term: 'Meiner Meinung nach', definition: 'Etter min mening – uttrykk for å introdusere sin egen mening' },
    { term: 'die Digitalisierung', definition: 'Digitalisering – overgangen til digitale løsninger' },
    { term: 'die erneuerbare Energie', definition: 'Fornybar energi – energi fra kilder som ikke går tom (sol, vind)' },
  ],
};

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const TYSK_2_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_TYSK_2_11_1,
  CHAPTER_TYSK_2_11_2,
  CHAPTER_TYSK_2_11_3,
  CHAPTER_TYSK_2_11_4,
  CHAPTER_TYSK_2_12_1,
  CHAPTER_TYSK_2_12_2,
  CHAPTER_TYSK_2_12_3,
  CHAPTER_TYSK_2_12_4,
  CHAPTER_TYSK_2_13_1,
  CHAPTER_TYSK_2_13_2,
  CHAPTER_TYSK_2_13_3,
  CHAPTER_TYSK_2_13_4,
];

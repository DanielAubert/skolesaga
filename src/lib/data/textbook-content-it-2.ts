/**
 * Tekstbok innhold for Informasjonsteknologi 2 (VG3)
 *
 * Folger LK20 lareplan for informasjonsteknologi 2 (INF02-02).
 * Dekker avanserte temaer innen programmering, systemutvikling og IT i samfunnet.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Avansert programmering og objektorientering
// ============================================================================

export const CHAPTER_IT_2_1: TextbookChapter = {
  id: 'it-2-1',
  courseId: 'it-2',
  chapterNumber: '1',
  title: 'Avansert programmering og objektorientering',
  description: 'Laer om objektorientert programmering med klasser, arv og polymorfisme.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utvikle objektorienterte programmer med klasser, objekter og arv',
    'anvende prinsipper for god programstruktur og kodekvalitet',
  ],
  content: [
    {
      id: 'it-2-1-intro',
      type: 'text',
      content: `## Objektorientert programmering (OOP)

Objektorientert programmering er et programmeringsparadigme som organiserer kode rundt objekter fremfor funksjoner og logikk. Et objekt representerer en ting fra den virkelige verden med egenskaper (attributter) og handlinger (metoder).

**Fordeler med OOP:**
- Gjenbrukbar kode gjennom arv
- Enklere a vedlikeholde og utvide
- Bedre modellering av virkelige systemer
- Innkapsling beskytter data

**De fire soylene i OOP:**
1. **Innkapsling** - Skjule interne detaljer
2. **Arv** - Gjenbruke kode fra overklasser
3. **Polymorfisme** - Samme metode, ulik oppforsel
4. **Abstraksjon** - Forenkle komplekse systemer`,
    },
    {
      id: 'it-2-1-def-1',
      type: 'definition',
      title: 'Klasser og objekter',
      content: `**Klasse:**
En mal eller oppskrift som definerer egenskaper og metoder for objekter av samme type.

**Objekt:**
En konkret instans av en klasse med faktiske verdier.

**Attributter:**
Variabler som tilhorer et objekt og beskriver dets tilstand.

**Metoder:**
Funksjoner som tilhorer et objekt og definerer dets oppforsel.

**Konstruktor:**
En spesiell metode som kjores nar et objekt opprettes, og som initialiserer attributtene.

**self/this:**
Referanse til det aktuelle objektet inne i en metode.`,
    },
    {
      id: 'it-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Klasse i Python',
      problem: 'Lag en klasse for a representere en bankkonto.',
      solution: `\`\`\`python
class Bankkonto:
    def __init__(self, eier, saldo=0):
        self.eier = eier
        self.saldo = saldo

    def sett_inn(self, belop):
        if belop > 0:
            self.saldo += belop
            return True
        return False

    def ta_ut(self, belop):
        if 0 < belop <= self.saldo:
            self.saldo -= belop
            return True
        return False

    def vis_info(self):
        return f"{self.eier}: {self.saldo} kr"

# Opprette objekter
konto1 = Bankkonto("Ola", 1000)
konto1.sett_inn(500)
print(konto1.vis_info())  # Ola: 1500 kr
\`\`\`

**Forklaring:**
- \`__init__\` er konstruktoren som kjores ved opprettelse
- \`self\` refererer til det aktuelle objektet
- Metoder kan endre objektets tilstand (attributter)`,
    },
    {
      id: 'it-2-1-def-2',
      type: 'definition',
      title: 'Arv og polymorfisme',
      content: `**Arv (inheritance):**
En klasse kan arve egenskaper og metoder fra en annen klasse. Underklassen far alle egenskaper fra overklassen og kan legge til eller overstyre funksjonalitet.

**Overklasse/Superklasse:**
Klassen det arves fra.

**Underklasse/Subklasse:**
Klassen som arver.

**Polymorfisme:**
Evnen til a behandle objekter av ulike klasser pa samme mate. Samme metodenavn kan ha ulik implementasjon i ulike klasser.

**Method overriding:**
Nar en underklasse definerer sin egen versjon av en metode fra overklassen.

**super():**
Funksjon for a kalle metoder fra overklassen.`,
    },
    {
      id: 'it-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Arv',
      problem: 'Vis hvordan arv fungerer med en underklasse.',
      solution: `\`\`\`python
class Dyr:
    def __init__(self, navn):
        self.navn = navn

    def lag_lyd(self):
        return "Ukjent lyd"

class Hund(Dyr):
    def __init__(self, navn, rase):
        super().__init__(navn)
        self.rase = rase

    def lag_lyd(self):  # Overstyrer metoden
        return "Voff!"

    def hent_ball(self):
        return f"{self.navn} henter ballen!"

class Katt(Dyr):
    def lag_lyd(self):
        return "Mjau!"

# Polymorfisme i aksjon
dyr_liste = [Hund("Fido", "Labrador"), Katt("Pusur")]
for dyr in dyr_liste:
    print(f"{dyr.navn}: {dyr.lag_lyd()}")
\`\`\`

**Utskrift:**
Fido: Voff!
Pusur: Mjau!`,
    },
    {
      id: 'it-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en klasse og et objekt.',
        solution: 'En klasse er en mal eller oppskrift som definerer strukturen, mens et objekt er en konkret instans av klassen med faktiske verdier. Klassen er som en husplan, objektet er det ferdige huset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en klasse Bok med attributtene tittel, forfatter og antall_sider. Inkluder en metode som returnerer en beskrivelse av boken.',
        hints: ['Bruk __init__ for konstruktoren', 'Husk self-parameteren'],
        solution: `class Bok:
    def __init__(self, tittel, forfatter, antall_sider):
        self.tittel = tittel
        self.forfatter = forfatter
        self.antall_sider = antall_sider

    def beskriv(self):
        return f"{self.tittel} av {self.forfatter}, {self.antall_sider} sider"`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er innkapsling og hvorfor er det viktig?',
        solution: 'Innkapsling handler om a skjule interne detaljer og kun eksponere nodvendig funksjonalitet. Det er viktig fordi det beskytter data fra uonsket endring, gjor koden enklere a vedlikeholde, og lar oss endre implementasjonen uten a pavirke annen kode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en klasse Kjoretoy og to underklasser Bil og Sykkel som arver fra Kjoretoy. Vis polymorfisme med en felles metode.',
        hints: ['La Kjoretoy ha attributter som merke og arsmodell', 'Bruk super() for a kalle overklassens konstruktor'],
        solution: `class Kjoretoy:
    def __init__(self, merke, arsmodell):
        self.merke = merke
        self.arsmodell = arsmodell

    def kjor(self):
        return "Kjorer..."

class Bil(Kjoretoy):
    def __init__(self, merke, arsmodell, drivstoff):
        super().__init__(merke, arsmodell)
        self.drivstoff = drivstoff

    def kjor(self):
        return f"{self.merke} kjorer pa {self.drivstoff}"

class Sykkel(Kjoretoy):
    def kjor(self):
        return f"{self.merke}-sykkelen traar i pedalene"`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom arv og komposisjon? Nar bor du bruke hva?',
        hints: ['Tenk pa "er-en" vs "har-en" relasjoner'],
        solution: 'Arv uttrykker en "er-en"-relasjon (en Hund er et Dyr). Komposisjon uttrykker en "har-en"-relasjon (en Bil har en Motor). Bruk arv nar underklassen virkelig er en spesialisering. Bruk komposisjon nar du vil kombinere funksjonalitet uten a skape sterke avhengigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et klassehierarki for et spill med ulike karaktertyper (spiller, fiende, NPC). Beskriv klassene, deres attributter og metoder.',
        solution: `Forslag til klassehierarki:
- Karakter (overklasse): attributter (navn, helse, posisjon), metoder (beveg, ta_skade)
- Spiller (arver fra Karakter): ekstra attributter (erfaring, inventar), metoder (samle_gjenstand, bruk_gjenstand)
- Fiende (arver fra Karakter): ekstra attributter (aggresjon, belonning), metoder (angrip, patruljer)
- NPC (arver fra Karakter): ekstra attributter (dialog, oppdrag), metoder (snakk, gi_oppdrag)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Datastrukturer og algoritmer
// ============================================================================

export const CHAPTER_IT_2_2: TextbookChapter = {
  id: 'it-2-2',
  courseId: 'it-2',
  chapterNumber: '2',
  title: 'Datastrukturer og algoritmer',
  description: 'Forstaa hvordan data organiseres og effektive metoder for a behandle data.',
  estimatedMinutes: 90,
  competenceGoals: [
    'velge og bruke passende datastrukturer for ulike problemer',
    'analysere og implementere grunnleggende algoritmer',
  ],
  content: [
    {
      id: 'it-2-2-intro',
      type: 'text',
      content: `## Datastrukturer

En datastruktur er en mate a organisere og lagre data pa som gjor det effektivt a fa tilgang til og manipulere dataene. Valg av datastruktur pavirker programmets ytelse betydelig.

**Vanlige datastrukturer:**
- **Lister/Arrays** - Sekvens av elementer
- **Stakker (Stack)** - LIFO (Last In, First Out)
- **Koer (Queue)** - FIFO (First In, First Out)
- **Lenkede lister** - Elementer koblet med pekere
- **Tre** - Hierarkisk struktur
- **Hashtabeller** - Nokkel-verdi-par med rask oppslag`,
    },
    {
      id: 'it-2-2-def-1',
      type: 'definition',
      title: 'Stakk og ko',
      content: `**Stakk (Stack):**
En LIFO-datastruktur der elementer legges til og fjernes fra samme ende (toppen).
- push() - Legg til element pa toppen
- pop() - Fjern og returner element fra toppen
- peek() - Se pa toppen uten a fjerne
- Eksempel: Angre-funksjon, parentesmatching

**Ko (Queue):**
En FIFO-datastruktur der elementer legges til i enden og fjernes fra starten.
- enqueue() - Legg til element bakerst
- dequeue() - Fjern og returner element forrest
- Eksempel: Skriverhoppsliste, bredde-forst-sok`,
    },
    {
      id: 'it-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Stakk i Python',
      problem: 'Implementer en enkel stakk og bruk den.',
      solution: `\`\`\`python
class Stakk:
    def __init__(self):
        self.elementer = []

    def push(self, element):
        self.elementer.append(element)

    def pop(self):
        if not self.er_tom():
            return self.elementer.pop()
        return None

    def peek(self):
        if not self.er_tom():
            return self.elementer[-1]
        return None

    def er_tom(self):
        return len(self.elementer) == 0

# Bruk stakken
stakk = Stakk()
stakk.push("A")
stakk.push("B")
stakk.push("C")
print(stakk.pop())  # C
print(stakk.peek()) # B
\`\`\``,
    },
    {
      id: 'it-2-2-def-2',
      type: 'definition',
      title: 'Algoritmer og kompleksitet',
      content: `**Algoritme:**
En stegvis prosedyre for a lose et problem eller utfore en oppgave.

**Big O-notasjon:**
Beskriver algoritmens tidskompleksitet - hvordan kjøretiden vokser med input-storrelsen.

**Vanlige kompleksiteter:**
- O(1) - Konstant tid (beste)
- O(log n) - Logaritmisk
- O(n) - Linear
- O(n log n) - Linearitmisk
- O(n^2) - Kvadratisk
- O(2^n) - Eksponentiell (verste)

**Eksempler:**
- Oppslag i array: O(1)
- Lineaert sok: O(n)
- Binaert sok: O(log n)
- Boblesortering: O(n^2)
- Quicksort: O(n log n) gjennomsnittlig`,
    },
    {
      id: 'it-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Sorteringsalgoritmer',
      problem: 'Sammenlign boblesortering og innstikksortering.',
      solution: `\`\`\`python
def boblesortering(liste):
    n = len(liste)
    for i in range(n):
        for j in range(0, n-i-1):
            if liste[j] > liste[j+1]:
                liste[j], liste[j+1] = liste[j+1], liste[j]
    return liste

def innstikksortering(liste):
    for i in range(1, len(liste)):
        nokkel = liste[i]
        j = i - 1
        while j >= 0 and liste[j] > nokkel:
            liste[j+1] = liste[j]
            j -= 1
        liste[j+1] = nokkel
    return liste

# Test
tall = [64, 34, 25, 12, 22, 11, 90]
print(boblesortering(tall.copy()))
print(innstikksortering(tall.copy()))
\`\`\`

Begge har O(n^2) i verste fall, men innstikksortering er ofte raskere for nesten sorterte lister.`,
    },
    {
      id: 'it-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en stakk og en ko.',
        solution: 'En stakk er LIFO (Last In, First Out) - siste element inn er forste ut, som en stabel med tallerkener. En ko er FIFO (First In, First Out) - forste element inn er forste ut, som en ko i butikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Implementer en ko-klasse i Python med metodene enqueue, dequeue og er_tom.',
        solution: `class Ko:
    def __init__(self):
        self.elementer = []

    def enqueue(self, element):
        self.elementer.append(element)

    def dequeue(self):
        if not self.er_tom():
            return self.elementer.pop(0)
        return None

    def er_tom(self):
        return len(self.elementer) == 0`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tidskompleksiteten til folgende operasjoner?',
        subTasks: [
          {
            label: 'a',
            task: 'Hente element fra en liste med indeks',
            solution: 'O(1) - konstant tid',
            multipleChoiceOptions: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
          },
          {
            label: 'b',
            task: 'Soke etter et element i en usortert liste',
            solution: 'O(n) - lineaer tid',
            multipleChoiceOptions: ['O(n)', 'O(1)', 'O(log n)', 'O(n^2)'],
          },
          {
            label: 'c',
            task: 'Binaert sok i en sortert liste',
            solution: 'O(log n) - logaritmisk tid',
            multipleChoiceOptions: ['O(log n)', 'O(1)', 'O(n)', 'O(n^2)'],
          },
        ],
        solution: 'a) O(1), b) O(n), c) O(log n)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en funksjon som sjekker om parenteser i en streng er balansert, ved hjelp av en stakk.',
        hints: ['Push ved apningsparentes, pop ved lukkeparentes', 'Stakken skal vaere tom til slutt'],
        solution: `def er_balansert(streng):
    stakk = []
    par = {'(': ')', '[': ']', '{': '}'}

    for tegn in streng:
        if tegn in par:  # Apningsparentes
            stakk.append(tegn)
        elif tegn in par.values():  # Lukkeparentes
            if not stakk or par[stakk.pop()] != tegn:
                return False

    return len(stakk) == 0`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Implementer binaert sok rekursivt.',
        hints: ['Sammenlign med midterste element', 'Sok i venstre eller hoyre halvdel'],
        solution: `def binaert_sok(liste, mal, lav, hoy):
    if lav > hoy:
        return -1

    midt = (lav + hoy) // 2

    if liste[midt] == mal:
        return midt
    elif liste[midt] > mal:
        return binaert_sok(liste, mal, lav, midt - 1)
    else:
        return binaert_sok(liste, mal, midt + 1, hoy)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er det viktig a velge riktig datastruktur? Gi eksempler pa situasjoner der ulike datastrukturer passer best.',
        solution: 'Riktig datastruktur gir bedre ytelse. Eksempler: Bruk dictionary/hashtabell for raske oppslag, stakk for angre-funksjon, ko for a behandle foresporsler i rekkefolge, tre for hierarkisk data som filsystemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Programvareutvikling og testing
// ============================================================================

export const CHAPTER_IT_2_3: TextbookChapter = {
  id: 'it-2-3',
  courseId: 'it-2',
  chapterNumber: '3',
  title: 'Programvareutvikling og testing',
  description: 'Laer om ulike utviklingsmetodikker og hvordan du tester programvare systematisk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke systematiske metoder for utvikling og testing av programvare',
    'dokumentere og kvalitetssikre egen kode',
  ],
  content: [
    {
      id: 'it-2-3-intro',
      type: 'text',
      content: `## Utviklingsmetodikker

Programvareutvikling krever struktur og planlegging. Ulike metodikker gir rammeverk for hvordan team kan samarbeide og levere kvalitetssoftware.

**Fossefallsmodellen:**
- Lineaer prosess: Krav -> Design -> Implementasjon -> Testing -> Vedlikehold
- Hver fase fullfores for neste starter
- Passer for prosjekter med klare, stabile krav

**Smidig utvikling (Agile):**
- Iterativ og inkrementell
- Hyppige leveranser
- Tilpasning til endringer
- Tett samarbeid med kunde`,
    },
    {
      id: 'it-2-3-def-1',
      type: 'definition',
      title: 'Scrum - et smidig rammeverk',
      content: `**Scrum-roller:**
- **Product Owner:** Ansvarlig for produktets maal og prioriteringer
- **Scrum Master:** Fasiliterer prosessen og fjerner hindringer
- **Utviklingsteam:** Selvorganisert team som bygger produktet

**Scrum-artifakter:**
- **Product Backlog:** Prioritert liste over onskede funksjoner
- **Sprint Backlog:** Oppgaver for aktuell sprint
- **Inkrement:** Ferdig funksjonalitet etter hver sprint

**Scrum-seremonier:**
- **Sprint Planning:** Planlegge sprinten
- **Daily Standup:** Daglig statusmote (15 min)
- **Sprint Review:** Demonstrere ferdig arbeid
- **Retrospektiv:** Evaluere og forbedre prosessen

**Sprint:** En tidsavgrenset periode (ofte 2-4 uker) med fokus pa konkrete mal.`,
    },
    {
      id: 'it-2-3-def-2',
      type: 'definition',
      title: 'Testtyper',
      content: `**Enhetstesting (Unit testing):**
Tester enkeltkomponenter/funksjoner isolert.

**Integrasjonstesting:**
Tester at komponenter fungerer sammen.

**Systemtesting:**
Tester hele systemet mot kravene.

**Akseptansetesting:**
Tester at systemet oppfyller brukerens behov.

**Regresjonstesting:**
Sikrer at nye endringer ikke odelegger eksisterende funksjonalitet.

**Test-drevet utvikling (TDD):**
Skriv tester for koden fungerer, deretter implementer kode for a bestaa testene.`,
    },
    {
      id: 'it-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Enhetstesting med pytest',
      problem: 'Skriv tester for en kalkulator-funksjon.',
      solution: `\`\`\`python
# kalkulator.py
def addisjon(a, b):
    return a + b

def divisjon(a, b):
    if b == 0:
        raise ValueError("Kan ikke dele pa null")
    return a / b

# test_kalkulator.py
import pytest
from kalkulator import addisjon, divisjon

def test_addisjon():
    assert addisjon(2, 3) == 5
    assert addisjon(-1, 1) == 0
    assert addisjon(0, 0) == 0

def test_divisjon():
    assert divisjon(10, 2) == 5
    assert divisjon(7, 2) == 3.5

def test_divisjon_null():
    with pytest.raises(ValueError):
        divisjon(10, 0)
\`\`\`

Kjor testene med: \`pytest test_kalkulator.py\``,
    },
    {
      id: 'it-2-3-def-3',
      type: 'definition',
      title: 'Versjonskontroll med Git',
      content: `**Git:**
Et distribuert versjonskontrollsystem som sporer endringer i koden.

**Viktige kommandoer:**
- \`git init\` - Opprett nytt repository
- \`git clone\` - Kopier eksisterende repository
- \`git add\` - Legg til endringer for commit
- \`git commit\` - Lagre endringer med melding
- \`git push\` - Send endringer til server
- \`git pull\` - Hent endringer fra server
- \`git branch\` - Opprett/list grener
- \`git merge\` - Sla sammen grener

**Branching:**
Grener lar deg jobbe med nye funksjoner uten a pavirke hovedkoden.`,
    },
    {
      id: 'it-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign fossefallsmodellen og smidig utvikling. Hvilke fordeler og ulemper har hver?',
        solution: 'Fossefall: Fordeler - klar struktur, god dokumentasjon. Ulemper - lite fleksibel, sen testing. Smidig: Fordeler - tilpasningsdyktig, tidlig feedback, hyppige leveranser. Ulemper - kan mangle helhetlig design, krever engasjert kunde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar de tre rollene i Scrum og deres hovedansvar.',
        solution: 'Product Owner: Definerer hva som skal lages, prioriterer backlog. Scrum Master: Sikrer at Scrum folges, fjerner hindringer for teamet. Utviklingsteam: Selvorganisert team som planlegger og utforer arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv enhetstester for en funksjon som finner det storste tallet i en liste.',
        hints: ['Test normal case, tom liste, liste med ett element, negative tall'],
        solution: `def finn_storst(liste):
    if not liste:
        return None
    return max(liste)

# Tester
def test_finn_storst_normal():
    assert finn_storst([1, 5, 3, 9, 2]) == 9

def test_finn_storst_tom():
    assert finn_storst([]) is None

def test_finn_storst_ett_element():
    assert finn_storst([42]) == 42

def test_finn_storst_negative():
    assert finn_storst([-5, -2, -8]) == -2`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan du ville brukt Git til a samarbeide med en klassekamerat pa et prosjekt.',
        solution: 'Opprett repository pa GitHub, begge kloner. Lag egne grener for nye funksjoner. Commit regelmessig med beskrivende meldinger. Lag pull requests for review. Merge til main etter godkjenning. Pull regelsmessig for a holde seg oppdatert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er test-drevet utvikling (TDD)? Forklar prosessen steg for steg.',
        solution: 'TDD: 1) Skriv en test for onsket funksjonalitet (testen feiler). 2) Skriv minimum kode for at testen bestaar. 3) Refaktorer koden for bedre kvalitet. Gjenta syklusen. Fordel: Sikrer testdekning og tvinger deg til a tenke pa design for implementering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er dokumentasjon viktig i programvareutvikling? Hvilke typer dokumentasjon bor et prosjekt ha?',
        solution: 'Dokumentasjon gjor koden forstaelig for andre og deg selv i fremtiden. Typer: README (oversikt), API-dokumentasjon (hvordan bruke), kommentarer i kode (hvorfor), brukermanualer, arkitekturdokumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Apputvikling
// ============================================================================

export const CHAPTER_IT_2_4: TextbookChapter = {
  id: 'it-2-4',
  courseId: 'it-2',
  chapterNumber: '4',
  title: 'Apputvikling',
  description: 'Laer a utvikle applikasjoner for web og mobil.',
  estimatedMinutes: 90,
  competenceGoals: [
    'planlegge og utvikle brukergrensesnitt for applikasjoner',
    'anvende prinsipper for god brukeropplevelse (UX)',
  ],
  content: [
    {
      id: 'it-2-4-intro',
      type: 'text',
      content: `## Apputvikling - fra ide til produkt

Moderne apputvikling omfatter bade webapplikasjoner og mobilapper. Prosessen starter med a forsta brukernes behov og ender med en ferdig applikasjon.

**Utviklingsprosessen:**
1. Ide og behovsanalyse
2. Design og prototyping
3. Utvikling
4. Testing
5. Lansering og vedlikehold

**Typer applikasjoner:**
- **Native apper:** Laget for spesifikk plattform (iOS/Android)
- **Webapper:** Kjorer i nettleser
- **Hybridapper:** Kombinerer web-teknologi med native innpakning
- **Progressive Web Apps (PWA):** Webapper med app-lignende funksjoner`,
    },
    {
      id: 'it-2-4-def-1',
      type: 'definition',
      title: 'Brukeropplevelse (UX) og brukergrensesnitt (UI)',
      content: `**UX (User Experience):**
Hele brukerens opplevelse med produktet - hvor enkelt, effektivt og tilfredsstillende det er a bruke.

**UI (User Interface):**
Det visuelle grensesnittet brukeren interagerer med - knapper, menyer, farger, typografi.

**UX-prinsipper:**
- **Brukervennlighet:** Enkelt a laere og bruke
- **Tilgjengelighet:** Fungerer for alle brukere
- **Konsistens:** Like elementer oppforer seg likt
- **Feedback:** Systemet responderer pa handlinger
- **Feilhaptering:** Hindre og hjelpe med feil

**Brukersentrert design:**
Start med a forsta brukerne - hvem de er, hva de trenger, og hvordan de tenker.`,
    },
    {
      id: 'it-2-4-def-2',
      type: 'definition',
      title: 'Frontend-teknologier',
      content: `**HTML (HyperText Markup Language):**
Strukturerer innholdet pa en nettside med elementer og tagger.

**CSS (Cascading Style Sheets):**
Styler utseendet - farger, fonter, layout, animasjoner.

**JavaScript:**
Gir interaktivitet og dynamisk oppforsel pa nettsiden.

**Rammeverk:**
- **React:** Komponentbasert bibliotek fra Meta
- **Vue.js:** Progressivt rammeverk
- **Angular:** Fullverdig rammeverk fra Google

**Responsive design:**
Nettsiden tilpasser seg ulike skjermstorrelser automatisk.`,
    },
    {
      id: 'it-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Enkel webapp med HTML, CSS og JavaScript',
      problem: 'Lag en enkel oppgaveliste-app.',
      solution: `\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Oppgaveliste</title>
  <style>
    body { font-family: Arial; max-width: 400px; margin: 50px auto; }
    input { padding: 10px; width: 70%; }
    button { padding: 10px 20px; }
    li { padding: 10px; border-bottom: 1px solid #ccc; }
    .ferdig { text-decoration: line-through; color: gray; }
  </style>
</head>
<body>
  <h1>Mine oppgaver</h1>
  <input type="text" id="nyOppgave" placeholder="Ny oppgave...">
  <button onclick="leggTil()">Legg til</button>
  <ul id="liste"></ul>

  <script>
    function leggTil() {
      const input = document.getElementById('nyOppgave');
      const liste = document.getElementById('liste');

      if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.onclick = function() {
          this.classList.toggle('ferdig');
        };
        liste.appendChild(li);
        input.value = '';
      }
    }
  </script>
</body>
</html>
\`\`\``,
    },
    {
      id: 'it-2-4-def-3',
      type: 'definition',
      title: 'Prototyping og wireframes',
      content: `**Wireframe:**
En enkel skisse som viser layout og struktur uten detaljer. Fokus pa funksjonalitet og informasjonsarkitektur.

**Mockup:**
Mer detaljert visuell representasjon med farger, bilder og typografi.

**Prototype:**
En klikkbar modell som simulerer interaksjon og navigasjon.

**Verktoy:**
- Figma - Samarbeid og design
- Adobe XD - Prototyping
- Sketch - UI-design (Mac)
- Balsamiq - Wireframes

**Brukertest:**
Test prototyper med virkelige brukere for a identifisere problemer tidlig.`,
    },
    {
      id: 'it-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom UX og UI med konkrete eksempler.',
        solution: 'UX handler om hele opplevelsen - hvor raskt appen lastes, hvor lett det er a finne fram, hvor tilfreds brukeren blir. UI er det visuelle - fargevalg, knappestorrelser, ikoner. En app kan ha pen UI men darlig UX hvis den er forvirrende a bruke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en wireframe for en app som lar brukere logge treningsoktene sine.',
        hints: ['Tenk pa hovedskjermene: innlogging, oversikt, registrer okt, historikk'],
        solution: 'Wireframe bor vise: 1) Innloggingsskjerm med felt for brukernavn/passord. 2) Hovedskjerm med oversikt over ukens okter. 3) Registreringsskjerm med felt for type, varighet, dato. 4) Historikkskjerm med liste over tidligere okter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med responsive design? Hvorfor er det viktig?',
        solution: 'Responsive design betyr at nettsiden automatisk tilpasser seg ulike skjermstorrelser - fra mobil til PC. Det er viktig fordi brukere aksesserer nettet fra mange enheter, og en side som ikke fungerer pa mobil gir darlig brukeropplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv HTML og CSS for en enkel navigasjonsmeny med fire lenker.',
        solution: `<nav>
  <ul class="meny">
    <li><a href="#hjem">Hjem</a></li>
    <li><a href="#om">Om oss</a></li>
    <li><a href="#tjenester">Tjenester</a></li>
    <li><a href="#kontakt">Kontakt</a></li>
  </ul>
</nav>

<style>
.meny { list-style: none; display: flex; gap: 20px; }
.meny a { text-decoration: none; color: #333; }
.meny a:hover { color: #0066cc; }
</style>`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign native apper, webapper og hybridapper. Nar passer hver type best?',
        solution: 'Native: Best ytelse, tilgang til alle enhetsfunksjoner, men krever separat utvikling for iOS/Android. Webapp: En kodebase, fungerer i nettleser, begrenset enhetstilgang. Hybrid: En kodebase for begge plattformer, god ytelse, noe tilgang til enhetsfunksjoner. Velg native for ytelses-kritiske apper, webapp for enkle losninger, hybrid for balanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en app for skoleelever som hjelper med lekseplanlegging. Beskriv hovedfunksjoner og lag en enkel wireframe.',
        solution: 'Hovedfunksjoner: Se ukens lekser, legge til nye lekser med fag og frist, markere som ferdig, pabruksler for frister. Wireframe bor vise: Dashboard med ukeoversikt, skjerm for a legge til lekse, detaljvisning av enkeltlekse, innstillinger for varsler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Maskinlaering og kunstig intelligens
// ============================================================================

export const CHAPTER_IT_2_5: TextbookChapter = {
  id: 'it-2-5',
  courseId: 'it-2',
  chapterNumber: '5',
  title: 'Maskinlaering og kunstig intelligens',
  description: 'Introduksjon til hvordan maskiner kan laere av data.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjore rede for prinsipper bak maskinlaering og kunstig intelligens',
    'reflektere over etiske problemstillinger knyttet til AI',
  ],
  content: [
    {
      id: 'it-2-5-intro',
      type: 'text',
      content: `## Kunstig intelligens (AI)

Kunstig intelligens handler om a lage systemer som kan utfore oppgaver som normalt krever menneskelig intelligens - som a forstaa sprak, gjenkjenne bilder, ta beslutninger og laere av erfaring.

**Typer AI:**
- **Smal AI:** Spesialisert pa en oppgave (bildegjenkjenning, sjakk)
- **Generell AI:** Kan lose mange typer problemer (eksisterer ikke enna)
- **Superintelligens:** Overgaar menneskelig intelligens (teoretisk)

**Anvendelser i dag:**
- Taleassistenter (Siri, Alexa)
- Anbefalingssystemer (Netflix, Spotify)
- Selvkjorende biler
- Medisinsk diagnostisering
- Sprakmodeller (ChatGPT)`,
    },
    {
      id: 'it-2-5-def-1',
      type: 'definition',
      title: 'Maskinlaering',
      content: `**Maskinlaering (ML):**
En gren av AI der systemer laerer fra data uten a vaere eksplisitt programmert for hver situasjon.

**Typer maskinlaering:**

**Veiledet laering (Supervised):**
Trenes pa merkede data - systemet vet hva som er riktig svar.
Eksempel: Klassifisere e-post som spam/ikke-spam.

**Uveiledet laering (Unsupervised):**
Finner monstre i data uten forhands-definerte kategorier.
Eksempel: Gruppere kunder med like kjopsmonster.

**Forsterket laering (Reinforcement):**
Laerer gjennom provefeiling med belonning og straff.
Eksempel: AI som laerer a spille spill.`,
    },
    {
      id: 'it-2-5-def-2',
      type: 'definition',
      title: 'Nevrale nettverk og dypering',
      content: `**Nevralt nettverk:**
Inspirert av hjernens struktur. Bestar av lag med noder (nevroner) som prosesserer informasjon.

**Struktur:**
- **Input-lag:** Mottar data
- **Skjulte lag:** Prosesserer og finner monstre
- **Output-lag:** Gir resultat

**Dypering (Deep Learning):**
Nevrale nettverk med mange skjulte lag. Kan laere komplekse monstre fra store datamengder.

**Anvendelser:**
- Bildegjenkjenning
- Naturlig sprakbehandling
- Talesyntese
- Generativ AI (bilder, tekst)`,
    },
    {
      id: 'it-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Enkel klassifisering med scikit-learn',
      problem: 'Bruk maskinlaering til a klassifisere irisblomster.',
      solution: `\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# Last inn data
iris = load_iris()
X = iris.data  # Egenskaper (mal pa kronblad osv.)
y = iris.target  # Art (0, 1, eller 2)

# Del i trenings- og testdata
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Tren modellen
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

# Evaluer
noyaktighet = model.score(X_test, y_test)
print(f"Noyaktighet: {noyaktighet:.2%}")

# Prediksjon
ny_blomst = [[5.0, 3.5, 1.5, 0.2]]
prediksjon = model.predict(ny_blomst)
print(f"Predikert art: {iris.target_names[prediksjon[0]]}")
\`\`\``,
    },
    {
      id: 'it-2-5-def-3',
      type: 'definition',
      title: 'Etikk og AI',
      content: `**Etiske utfordringer:**

**Skjevhet (bias):**
AI-systemer kan arve og forsterke fordommer fra treningsdata.

**Personvern:**
Store datamengder samles inn og brukes, ofte uten klar samtykke.

**Arbeidsplasser:**
Automatisering kan erstatte mange jobber.

**Ansvar:**
Hvem er ansvarlig nar en AI tar feil beslutninger?

**Transparens:**
Mange AI-systemer er "svarte bokser" - vanskelig a forsta hvorfor de tar bestemte beslutninger.

**Falsk innhold:**
Generativ AI kan lage overbevisende falske bilder, video og tekst.`,
    },
    {
      id: 'it-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom veiledet og uveiledet laering med eksempler.',
        solution: 'Veiledet laering: Trenes pa merkede data der vi vet fasiten. Eksempel: Klassifisere bilder av katter/hunder ved a trene pa bilder med merkelapper. Uveiledet laering: Finner monstre uten merkelapper. Eksempel: Gruppere kunder etter kjopsatferd uten forhands-definerte kategorier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et nevralt nettverk? Beskriv strukturen med input, skjulte lag og output.',
        solution: 'Et nevralt nettverk er inspirert av hjernen og bestar av sammenkoblede noder. Input-laget mottar data, skjulte lag prosesserer og finner monstre gjennom vekter, output-laget gir resultatet. Informasjon flyter gjennom nettverket og vektene justeres under trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med bias i AI-systemer? Gi et eksempel pa hvordan bias kan oppsta.',
        solution: 'Bias betyr skjevhet - at AI-systemet favoriserer visse grupper eller utfall. Det oppstar nar treningsdata er skjev. Eksempel: Et ansettelsessystem trent pa historiske data kan diskriminere kvinner hvis selskapet tidligere hovedsakelig ansatte menn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi tre eksempler pa hvordan AI brukes i hverdagen din.',
        hints: ['Tenk pa apper, sosiale medier, streaming-tjenester'],
        solution: 'Eksempler: 1) Anbefalinger pa Netflix/Spotify basert pa det jeg har sett/hort. 2) Ansiktsgjenkjenning for a lase opp telefonen. 3) Autokorrektur og forslag nar jeg skriver meldinger. 4) Spamfilter i e-post. 5) Ruter som foreslarer raskeste vei.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droeft: Bor det vaere lover som regulerer bruk av AI? Begrunn svaret.',
        hints: ['Tenk pa personvern, rettferdighet, sikkerhet'],
        solution: 'For regulering: Beskytte mot diskriminering og bias, sikre personvern, kreve transparens, placere ansvar. Mot: Kan hemme innovasjon, vanskelig a regulere teknologi som utvikles raskt. Konklusjon: Balansert regulering som beskytter rettigheter uten a stoppe utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv et mulig AI-prosjekt du kunne utviklet. Hva slags data trenger du, og hvilken type maskinlaering passer?',
        solution: 'Eksempel: App som klassifiserer matavfall for sortering. Data: Bilder av ulik matavfall med merkelapper (kompost, papir, plast). Type: Veiledet laering med bildegjenkjenning (CNN). Utfordring: Samle nok data, handtere variasjon i belysning og vinkler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Datasikkerhet og kryptering
// ============================================================================

export const CHAPTER_IT_2_6: TextbookChapter = {
  id: 'it-2-6',
  courseId: 'it-2',
  chapterNumber: '6',
  title: 'Datasikkerhet og kryptering',
  description: 'Laer om trusler mot IT-systemer og hvordan data beskyttes.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjore rede for vanlige sikkerhetstrusler og beskyttelsestiltak',
    'forstaa grunnleggende prinsipper for kryptering',
  ],
  content: [
    {
      id: 'it-2-6-intro',
      type: 'text',
      content: `## Datasikkerhet

Datasikkerhet handler om a beskytte informasjon og systemer mot uautorisert tilgang, endring eller odeleggelse.

**CIA-triaden - tre hovedmal:**
- **Konfidensialitet:** Data skal kun vaere tilgjengelig for autoriserte
- **Integritet:** Data skal vaere korrekt og uendret
- **Tilgjengelighet:** Data skal vaere tilgjengelig nar det trengs

**Trusselaktorer:**
- Hackere og cyberkriminelle
- Nasjonalstater
- Innsidere (ansatte)
- Konkurrenter
- Aktivister (hacktivister)`,
    },
    {
      id: 'it-2-6-def-1',
      type: 'definition',
      title: 'Vanlige trusler',
      content: `**Malware (skadevare):**
- **Virus:** Sprer seg ved a infisere filer
- **Trojanere:** Skjuler seg som legitim programvare
- **Ransomware:** Krypterer data og krever losepenger
- **Spyware:** Overvaaker og stjeler informasjon

**Phishing:**
Lureri for a fa tak i sensitiv informasjon, ofte via falske e-poster eller nettsider.

**Social engineering:**
Manipulering av mennesker for a fa tilgang til systemer eller informasjon.

**DDoS-angrep:**
Overbelaster tjenester med trafikk slik at de blir utilgjengelige.

**SQL-injeksjon:**
Ondsinnet kode settes inn i databasesporrringer.

**Man-in-the-middle:**
Angriper avlytter kommunikasjon mellom to parter.`,
    },
    {
      id: 'it-2-6-def-2',
      type: 'definition',
      title: 'Kryptering',
      content: `**Kryptering:**
Prosessen med a gjore data uleselig for alle uten riktig nokkel.

**Symmetrisk kryptering:**
Samme nokkel brukes til bade kryptering og dekryptering.
- Rask og effektiv
- Utfordring: Hvordan dele nokkelen trygt?
- Eksempel: AES

**Asymmetrisk kryptering:**
To nokkler - en offentlig og en privat.
- Offentlig nokkel kan deles fritt
- Kun privat nokkel kan dekryptere
- Langsommere, men loser nokkeldeling
- Eksempel: RSA

**Hashing:**
Enveisfunksjon som lager en unik "fingeravtrykk" av data.
- Kan ikke reverseres
- Brukes til a verifisere integritet og lagre passord
- Eksempel: SHA-256`,
    },
    {
      id: 'it-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Hashing i Python',
      problem: 'Vis hvordan passord kan hashes sikkert.',
      solution: `\`\`\`python
import hashlib
import secrets

def hash_passord(passord):
    # Generer tilfeldig salt
    salt = secrets.token_hex(16)
    # Kombiner passord og salt, hash med SHA-256
    kombinert = passord + salt
    hash_verdi = hashlib.sha256(kombinert.encode()).hexdigest()
    # Returner bade hash og salt (salt lagres med hashen)
    return f"{salt}:{hash_verdi}"

def sjekk_passord(passord, lagret_hash):
    salt, forventet_hash = lagret_hash.split(':')
    kombinert = passord + salt
    faktisk_hash = hashlib.sha256(kombinert.encode()).hexdigest()
    return faktisk_hash == forventet_hash

# Bruk
lagret = hash_passord("mittHemmeligePassord")
print(f"Lagret: {lagret}")
print(f"Riktig: {sjekk_passord('mittHemmeligePassord', lagret)}")
print(f"Feil: {sjekk_passord('feilpassord', lagret)}")
\`\`\``,
    },
    {
      id: 'it-2-6-def-3',
      type: 'definition',
      title: 'Sikkerhetstiltak',
      content: `**Autentisering:**
Verifisere identitet - noe du vet, har, eller er.
- Passord
- To-faktor (2FA)
- Biometri

**Autorisasjon:**
Kontrollere hva en autentisert bruker har tilgang til.

**Brannmur:**
Filtrerer nettverkstrafikk basert pa regler.

**Antivirus:**
Oppdager og fjerner skadevare.

**Sikkerhetskopiering:**
Regelmessige kopier av data for gjenoppretting.

**Oppdateringer:**
Installer sikkerhetsoppdateringer for a tette hull.

**Minste privilegium:**
Gi kun nodvendig tilgang - ikke mer.`,
    },
    {
      id: 'it-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar CIA-triaden med egne ord og gi et eksempel for hver.',
        solution: 'Konfidensialitet: Kun autoriserte far tilgang (kryptert e-post). Integritet: Data er korrekt og uendret (digital signatur). Tilgjengelighet: Systemet fungerer nar det trengs (backup-systemer mot nedetid).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom symmetrisk og asymmetrisk kryptering?',
        solution: 'Symmetrisk: Samme nokkel til kryptering og dekryptering, rask men krever sikker nokkeldeling. Asymmetrisk: To nokkler (offentlig/privat), offentlig krypterer og privat dekrypterer, loser nokkeldelings-problemet men er langsommere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bor passord aldri lagres i klartekst? Hva bor brukes i stedet?',
        solution: 'Klartekst er lesbart for alle med tilgang til databasen. Ved datainnbrudd far angripere alle passord direkte. Bruk hashing med salt - da kan passord verifiseres uten a lagre dem lesbart, og salt gjor det vanskeligere a bruke forhandsberegnede tabeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv et phishing-angrep og hvordan du kan beskytte deg.',
        solution: 'Phishing: Falsk e-post/nettside som later som den er legitim for a fa deg til a oppgi sensitiv info. Beskyttelse: Sjekk URL-en naye, ikke klikk pa lenker i e-post, bruk 2FA, vaer skeptisk til hastemeldinger, kontakt organisasjonen direkte ved tvil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er to-faktorautentisering (2FA) og hvorfor er det sikrere enn kun passord?',
        solution: '2FA krever to ulike typer bevis - typisk noe du vet (passord) og noe du har (mobil/nokkel). Det er sikrere fordi selv om passordet stjeles, trenger angriperen ogsa den andre faktoren. Eksempler: SMS-kode, autentiseringsapp, fysisk nokkel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en sikkerhetspolicy for en liten bedrift. Inkluder minst 5 tiltak med begrunnelse.',
        solution: '1) Passordpolicy: Sterke passord, 2FA (hindre uautorisert tilgang). 2) Oppdateringer: Installer innen 7 dager (tette sikkerhetshull). 3) Backup: Daglig, lagret eksternt (gjenoppretting ved ransomware). 4) Opplaering: Kvartalsvis sikkerhetstrening (motvirke social engineering). 5) Tilgangsstyring: Minste privilegium (begrense skadeomfang).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Systemutvikling og prosjektstyring
// ============================================================================

export const CHAPTER_IT_2_7: TextbookChapter = {
  id: 'it-2-7',
  courseId: 'it-2',
  chapterNumber: '7',
  title: 'Systemutvikling og prosjektstyring',
  description: 'Laer a planlegge og gjennomfore IT-prosjekter systematisk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'planlegge og gjennomfore et utviklingsprosjekt',
    'bruke verktoy for prosjektstyring og samarbeid',
  ],
  content: [
    {
      id: 'it-2-7-intro',
      type: 'text',
      content: `## Systemutvikling

Systemutvikling er prosessen med a planlegge, designe, bygge og vedlikeholde IT-systemer. En strukturert tilnaerming oker sannsynligheten for suksess.

**Systemutviklingens livssyklus (SDLC):**
1. **Planlegging:** Definere mal og omfang
2. **Analyse:** Forsta behov og krav
3. **Design:** Utforme losningen
4. **Utvikling:** Bygge systemet
5. **Testing:** Verifisere kvalitet
6. **Implementering:** Rulle ut systemet
7. **Vedlikehold:** Drifte og forbedre`,
    },
    {
      id: 'it-2-7-def-1',
      type: 'definition',
      title: 'Kravspesifikasjon',
      content: `**Funksjonelle krav:**
Hva systemet skal gjore - spesifikke funksjoner og handlinger.
Eksempel: "Brukeren skal kunne registrere ny kunde"

**Ikke-funksjonelle krav:**
Kvalitetsegenskaper - ytelse, sikkerhet, brukervennlighet.
Eksempel: "Siden skal laste pa under 2 sekunder"

**Brukerhistorier (User Stories):**
Kort beskrivelse fra brukerens perspektiv.
Format: "Som [rolle] onsker jeg [funksjon] slik at [nytte]"
Eksempel: "Som kunde onsker jeg a soeke i produkter slik at jeg raskt finner det jeg leter etter"

**Akseptansekriterier:**
Spesifikke kriterier for nar en funksjon regnes som ferdig.`,
    },
    {
      id: 'it-2-7-def-2',
      type: 'definition',
      title: 'Prosjektstyringsverktoy',
      content: `**Kanban-tavle:**
Visuell oversikt over oppgaver i kolonner (A gjore, Pagart, Ferdig).
Begrenser arbeid i gang for a oke fokus.

**Gantt-diagram:**
Tidslinje som viser oppgaver, varighet og avhengigheter.
God for a planlegge og folge opp fremdrift.

**Verktoy:**
- **Trello:** Enkel Kanban-tavle
- **Jira:** Omfattende for Scrum/Kanban
- **GitHub Projects:** Integrert med kode
- **Microsoft Project:** Tradisjonell prosjektstyring
- **Notion:** Fleksibelt samarbeidsverktoy`,
    },
    {
      id: 'it-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Brukerhistorier for en nettbutikk',
      problem: 'Skriv brukerhistorier for grunnleggende nettbutikkfunksjonalitet.',
      solution: `**Brukerhistorier:**

1. **Sok:**
"Som kunde onsker jeg a soke etter produkter slik at jeg raskt finner det jeg trenger."
Akseptansekriterier: Sokefelt synlig, resultater vises innen 1 sekund, filtrering mulig.

2. **Handlekurv:**
"Som kunde onsker jeg a legge varer i handlekurv slik at jeg kan kjope flere ting samtidig."
Akseptansekriterier: Legg til/fjern varer, se total sum, handlekurv bevares mellom besok.

3. **Betaling:**
"Som kunde onsker jeg a betale sikkert slik at jeg trygt kan gjennomfore kjop."
Akseptansekriterier: Stotter Vipps og kort, kryptert overfoering, bekreftelse pa e-post.

4. **Admin:**
"Som administrator onsker jeg a legge til nye produkter slik at sortimentet holdes oppdatert."
Akseptansekriterier: Last opp bilder, sett pris og beskrivelse, publiser/avpubliser.`,
    },
    {
      id: 'it-2-7-def-3',
      type: 'definition',
      title: 'Risikostyring',
      content: `**Risiko:**
En hendelse som kan pavirke prosjektet negativt.

**Risikostyringsprosessen:**
1. **Identifisere:** Finn potensielle risikoer
2. **Analysere:** Vurder sannsynlighet og konsekvens
3. **Prioritere:** Fokuser pa de viktigste
4. **Handtere:** Planlegg tiltak
5. **Overvake:** Folg opp kontinuerlig

**Risikostrategier:**
- **Unnga:** Endre plan for a eliminere risiko
- **Redusere:** Tiltak for a minske sannsynlighet/konsekvens
- **Overfore:** Forsikring eller outsourcing
- **Akseptere:** Leve med risikoen hvis liten`,
    },
    {
      id: 'it-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de syv fasene i systemutviklingens livssyklus med korte forklaringer.',
        solution: '1) Planlegging: Definere mal og ressurser. 2) Analyse: Kartlegge behov og krav. 3) Design: Utforme teknisk losning. 4) Utvikling: Programmere systemet. 5) Testing: Verifisere at alt fungerer. 6) Implementering: Rulle ut til brukere. 7) Vedlikehold: Fikse feil og forbedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv tre brukerhistorier for en app for a booke treningstimer.',
        hints: ['Tenk pa ulike brukertyper: kunde, trener, administrator'],
        solution: '1) "Som kunde onsker jeg a se ledige timer slik at jeg kan velge en som passer." 2) "Som trener onsker jeg a se hvem som har booket slik at jeg kan forberede okten." 3) "Som kunde onsker jeg a avbestille time slik at andre kan bruke den."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom funksjonelle og ikke-funksjonelle krav? Gi to eksempler av hver.',
        solution: 'Funksjonelle: Hva systemet gjor - "Brukeren kan logge inn", "Systemet sender bekreftelse pa e-post". Ikke-funksjonelle: Kvalitetsegenskaper - "Systemet skal handtere 1000 samtidige brukere", "Alle data skal krypteres".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Identifiser tre risikoer for et skoleprosjekt og foresla tiltak for hver.',
        solution: '1) Risiko: Gruppemedlem blir syk. Tiltak: Ha overlappende kunnskap, dokumenter godt. 2) Risiko: Tekniske problemer. Tiltak: Bruk versjonskontroll, ha backup. 3) Risiko: For lite tid. Tiltak: Prioriter MVP, ha buffer i planen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign Kanban og Gantt-diagram. Nar passer hver metode best?',
        solution: 'Kanban: Fleksibelt, visuelt, bra for lopende arbeid uten faste frister, teamet trekker oppgaver. Gantt: Strukturert, viser tidslinjer og avhengigheter, bra for prosjekter med faste milaepeler. Kanban for smidig, Gantt for mer tradisjonell planlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg et lite IT-prosjekt (f.eks. en nettside for en klubb). Inkluder mal, krav, tidsplan og rollefordeling.',
        solution: 'Eksempel - Nettside for sjakklubb: Mal: Informere om klubben og la folk melde seg pa. Krav: Informasjon om klubben, terminliste, pamelding. Tidsplan: Uke 1-2 design, uke 3-4 utvikling, uke 5 testing. Roller: Designer, utvikler, tester (kan overlapp).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: API-er og webtjenester
// ============================================================================

export const CHAPTER_IT_2_8: TextbookChapter = {
  id: 'it-2-8',
  courseId: 'it-2',
  chapterNumber: '8',
  title: 'API-er og webtjenester',
  description: 'Forstaa hvordan ulike systemer kommuniserer via API-er.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke API-er for a hente og sende data mellom systemer',
    'forstaa grunnleggende prinsipper for webtjenester',
  ],
  content: [
    {
      id: 'it-2-8-intro',
      type: 'text',
      content: `## API-er (Application Programming Interfaces)

Et API er et grensesnitt som lar ulike programmer kommunisere med hverandre. I stedet for a bygge alt selv, kan du bruke andres tjenester via API-er.

**Eksempler pa API-bruk:**
- Vaerae-apper henter data fra meteorologiske institutter
- Betalingslosninger bruker bank-API-er
- Sosiale medier-integrasjoner
- Kartlosninger (Google Maps, OpenStreetMap)
- Oversettelse (Google Translate API)

**Fordeler:**
- Gjenbruk av eksisterende funksjonalitet
- Sparer utviklingstid
- Tilgang til spesialiserte tjenester
- Standardisert kommunikasjon`,
    },
    {
      id: 'it-2-8-def-1',
      type: 'definition',
      title: 'REST API',
      content: `**REST (Representational State Transfer):**
Den vanligste arkitekturen for web-API-er.

**HTTP-metoder:**
- **GET:** Hente data
- **POST:** Opprette nye ressurser
- **PUT:** Oppdatere eksisterende ressurser
- **DELETE:** Slette ressurser

**Statuskoder:**
- 200 OK - Suksess
- 201 Created - Ressurs opprettet
- 400 Bad Request - Ugyldig foresporsel
- 401 Unauthorized - Krever autentisering
- 404 Not Found - Ressurs finnes ikke
- 500 Internal Server Error - Serverfeil

**Endepunkt:**
En URL som gir tilgang til en ressurs.
Eksempel: \`GET /api/brukere/123\``,
    },
    {
      id: 'it-2-8-def-2',
      type: 'definition',
      title: 'JSON - dataformat',
      content: `**JSON (JavaScript Object Notation):**
Lettvekt tekstformat for datautveksling. Lesbart for bade mennesker og maskiner.

**Struktur:**
\`\`\`json
{
  "navn": "Ola Nordmann",
  "alder": 25,
  "student": true,
  "fag": ["IT2", "Matematikk", "Engelsk"],
  "adresse": {
    "gate": "Storgata 1",
    "poststed": "Oslo"
  }
}
\`\`\`

**Datatyper:**
- Strenger: "tekst"
- Tall: 42, 3.14
- Boolsk: true, false
- Arrays: [1, 2, 3]
- Objekter: {"nokkel": "verdi"}
- null`,
    },
    {
      id: 'it-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Hente data fra API med Python',
      problem: 'Hent vaerdata fra et offentlig API.',
      solution: `\`\`\`python
import requests

# Hent vaerdata for Oslo fra Yr/MET
url = "https://api.met.no/weatherapi/locationforecast/2.0/compact"
params = {
    "lat": 59.91,
    "lon": 10.75
}
headers = {
    "User-Agent": "MinApp/1.0"  # Paakrevd av MET
}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    # Hent forste tidspunkt
    tidspunkt = data["properties"]["timeseries"][0]
    temperatur = tidspunkt["data"]["instant"]["details"]["air_temperature"]
    print(f"Temperatur i Oslo: {temperatur}°C")
else:
    print(f"Feil: {response.status_code}")
\`\`\`

**Viktige punkter:**
- \`requests.get()\` sender GET-foresporsel
- \`response.json()\` parser JSON til Python-dict
- Sjekk alltid statuskoden`,
    },
    {
      id: 'it-2-8-def-3',
      type: 'definition',
      title: 'API-autentisering',
      content: `**Hvorfor autentisering:**
Kontrollere hvem som bruker API-et, begrense bruk, spore aktivitet.

**Metoder:**

**API-nokkel:**
En unik streng som identifiserer deg.
Sendes ofte i header: \`Authorization: Bearer din_nokkel\`

**OAuth 2.0:**
Protokoll for sikker autorisasjon.
Lar brukere gi tilgang uten a dele passord.
Brukes av Google, Facebook, etc.

**JWT (JSON Web Token):**
Token som inneholder kryptert brukerinformasjon.
Selvverifikerende - serveren trenger ikke slaa opp i database.

**Rate limiting:**
Begrensning pa antall forespoersler per tidsperiode.
Forhindrer overbelastning og misbruk.`,
    },
    {
      id: 'it-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva et API er og gi tre eksempler pa daglig bruk av API-er.',
        solution: 'API er et grensesnitt som lar programmer kommunisere. Eksempler: 1) Vaerapp henter data fra meteorologisk institutt. 2) Innlogging med Google-konto pa andre nettsider. 3) Kartvisning i transportapper (Google Maps API).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom HTTP-metodene GET, POST, PUT og DELETE?',
        solution: 'GET: Henter data (les). POST: Oppretter nye ressurser. PUT: Oppdaterer eksisterende ressurser. DELETE: Sletter ressurser. GET endrer ikke data, de andre gjor det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en Python-funksjon som henter et tilfeldig sitat fra et API.',
        hints: ['Du kan bruke https://api.quotable.io/random', 'Bruk requests-biblioteket'],
        solution: `import requests

def hent_sitat():
    response = requests.get("https://api.quotable.io/random")
    if response.status_code == 200:
        data = response.json()
        return f'"{data["content"]}" - {data["author"]}'
    return "Kunne ikke hente sitat"

print(hent_sitat())`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr HTTP-statuskodene 200, 404 og 500?',
        solution: '200 OK: Foresporselen var vellykket. 404 Not Found: Ressursen ble ikke funnet (feil URL). 500 Internal Server Error: Noe gikk galt pa serveren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor brukes API-nokler og rate limiting? Forklar bade fra API-leverandorens og utviklerens perspektiv.',
        solution: 'API-nokler: Leverandor kan identifisere brukere, spore bruk, blokkere misbruk. Utvikler far tilgang til tjenesten. Rate limiting: Leverandor beskytter mot overbelastning. Utvikler maa handtere begrensninger i koden sin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et enkelt REST API for en bibliotekapp. Beskriv minst 4 endepunkter med metode og funksjon.',
        solution: 'GET /boker - Hent alle boker. GET /boker/{id} - Hent en spesifikk bok. POST /boker - Legg til ny bok. PUT /boker/{id} - Oppdater bokinfo. DELETE /boker/{id} - Slett bok. GET /brukere/{id}/laan - Hent brukers aktive laan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Sky og distribuerte systemer
// ============================================================================

export const CHAPTER_IT_2_9: TextbookChapter = {
  id: 'it-2-9',
  courseId: 'it-2',
  chapterNumber: '9',
  title: 'Sky og distribuerte systemer',
  description: 'Forstaa skyteknologi og hvordan moderne systemer distribueres.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for skytjenester og deres bruksomrader',
    'forstaa fordeler og utfordringer med skylosninger',
  ],
  content: [
    {
      id: 'it-2-9-intro',
      type: 'text',
      content: `## Skytjenester (Cloud Computing)

Skytjenester gir tilgang til dataressurser over internett - uten a eie egen maskinvare. Du betaler for det du bruker, og kan skalere opp og ned etter behov.

**Karakteristikker:**
- **On-demand selvbetjening:** Tilgang uten menneskelig interaksjon
- **Bred nettverkstilgang:** Tilgjengelig fra mange enheter
- **Ressurspooling:** Delte ressurser mellom kunder
- **Rask elastisitet:** Skalerer automatisk
- **Malt tjeneste:** Betal for faktisk bruk

**Store skyleverandorer:**
- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform (GCP)`,
    },
    {
      id: 'it-2-9-def-1',
      type: 'definition',
      title: 'Tjenestemodeller',
      content: `**IaaS (Infrastructure as a Service):**
Grunnleggende infrastruktur - virtuelle maskiner, nettverk, lagring.
Du styrer: OS, applikasjoner, data.
Eksempel: AWS EC2, Azure VMs.

**PaaS (Platform as a Service):**
Plattform for utvikling - du fokuserer pa koden.
Leverandoren styrer: OS, servere, nettverk.
Eksempel: Heroku, Google App Engine.

**SaaS (Software as a Service):**
Ferdig programvare levert via nett.
Du bruker applikasjonen, leverandoren styrer alt annet.
Eksempel: Gmail, Microsoft 365, Salesforce.

**Serverless/FaaS:**
Kjor kode uten a tenke pa servere.
Betaler kun nar koden kjores.
Eksempel: AWS Lambda, Azure Functions.`,
    },
    {
      id: 'it-2-9-def-2',
      type: 'definition',
      title: 'Distribuerte systemer',
      content: `**Distribuert system:**
Et system der komponenter pa ulike datamaskiner samarbeider som ett system.

**Fordeler:**
- **Skalerbarhet:** Legg til flere servere ved behov
- **Palitelighet:** Systemet overlever hvis en server svikter
- **Ytelse:** Last fordeles pa mange maskiner

**Utfordringer:**
- **Nettverkslatens:** Kommunikasjon tar tid
- **Konsistens:** Holde data synkronisert
- **Feilhaptering:** Handtere at deler svikter

**Begreper:**
- **Load balancer:** Fordeler trafikk mellom servere
- **Replikering:** Kopier av data pa flere steder
- **CDN (Content Delivery Network):** Innhold lagret naer brukerne`,
    },
    {
      id: 'it-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Arkitektur for en nettjeneste',
      problem: 'Hvordan kan en populaer nettjeneste haandtere mange brukere?',
      solution: `**Typisk arkitektur:**

\`\`\`
Brukere
    |
    v
[CDN] - Statisk innhold (bilder, CSS, JS)
    |
    v
[Load Balancer]
    |
    +-----------+-----------+
    |           |           |
[Server 1] [Server 2] [Server 3]
    |           |           |
    +-----------+-----------+
              |
    [Database-klynge]
        |
   [Cache (Redis)]
\`\`\`

**Komponenter:**
1. **CDN:** Serverer statiske filer fra lokasjon naer brukeren
2. **Load balancer:** Fordeler forespoersler mellom web-servere
3. **Web-servere:** Kjorer applikasjonslogikk (flere for redundans)
4. **Database:** Lagrer data (replikert for sikkerhet)
5. **Cache:** Rask tilgang til ofte brukte data`,
    },
    {
      id: 'it-2-9-def-3',
      type: 'definition',
      title: 'Sikkerhet og personvern i skyen',
      content: `**Sikkerhetsutfordringer:**
- Data lagres utenfor egen kontroll
- Delt infrastruktur med andre kunder
- Avhengighet av leverandorens sikkerhet

**Personvernhensyn:**
- Hvor lagres data? (GDPR krever EU/EOS)
- Hvem har tilgang?
- Hvordan handteres sletting?

**Tiltak:**
- **Kryptering:** Krypter data i transit og i ro
- **Tilgangsstyring:** Minste privilegium
- **Logging:** Spor all aktivitet
- **Sertifiseringer:** ISO 27001, SOC 2

**Shared responsibility:**
Sikkerhet er delt ansvar - leverandoren sikrer infrastruktur, du sikrer data og tilgang.`,
    },
    {
      id: 'it-2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom IaaS, PaaS og SaaS med eksempler.',
        solution: 'IaaS: Du faar infrastruktur (servere, nettverk), styrer selv OS og apper (AWS EC2). PaaS: Plattform for utvikling, leverandor styrer servere (Heroku). SaaS: Ferdig programvare i nettleser, du bare bruker det (Gmail, Office 365).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er fordelene og ulempene med skytjenester sammenlignet med egen infrastruktur?',
        solution: 'Fordeler: Ingen store investeringer, skalering etter behov, automatisk vedlikehold, tilgjengelig fra alle steder. Ulemper: Lopende kostnader, avhengighet av leverandor, mindre kontroll, personvernhensyn ved lagring i utlandet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva gjor en load balancer og hvorfor er den viktig?',
        solution: 'En load balancer fordeler innkommende trafikk mellom flere servere. Den er viktig for: 1) Ytelse - ingen server blir overbelastet. 2) Tilgjengelighet - hvis en server svikter, sendes trafikk til de andre. 3) Skalerbarhet - lett a legge til flere servere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke personvernhensyn maa du ta nar du bruker skytjenester?',
        hints: ['Tenk pa GDPR og datalagring'],
        solution: 'Hvor lagres data geografisk (GDPR krever EU/EOS for persondata)? Hvem har tilgang til dataene? Hvordan sikres data (kryptering)? Hva skjer ved oppsigelse - slettes data? Er det databehandleravtale pa plass?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er serverless computing og naar passer det?',
        solution: 'Serverless: Du kjorer funksjoner uten aa administrere servere. Leverandoren skalerer automatisk og du betaler kun naar koden kjorer. Passer for: Ujevn last (betaler ikke for idle), enkle funksjoner, event-drevet arkitektur, rask prototyping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tegn og forklar en enkel skyarkitektur for en bildelagringstjeneste.',
        solution: 'Arkitektur: Brukere -> CDN for rask levering -> Load balancer -> Web-servere (API) -> Objektlagring (f.eks. S3) for bilder -> Database for metadata. CDN cacher ofte aksesserte bilder naer brukeren. Objektlagring gir billig, skalerbar lagring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: IT i samfunnet og fremtidens teknologi
// ============================================================================

export const CHAPTER_IT_2_10: TextbookChapter = {
  id: 'it-2-10',
  courseId: 'it-2',
  chapterNumber: '10',
  title: 'IT i samfunnet og fremtidens teknologi',
  description: 'Reflekter over teknologiens pavirkning pa samfunnet og hva fremtiden bringer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'drofte hvordan informasjonsteknologi pavirker individ og samfunn',
    'reflektere over etiske problemstillinger knyttet til teknologiutvikling',
  ],
  content: [
    {
      id: 'it-2-10-intro',
      type: 'text',
      content: `## IT og samfunnet

Informasjonsteknologi har fundamentalt endret hvordan vi lever, arbeider og kommuniserer. Med stor makt folger stort ansvar - teknologiutviklere maa tenke pa konsekvensene av det de skaper.

**Omrader pavirket av IT:**
- **Arbeidsliv:** Automatisering, hjemmekontor, nye yrker
- **Utdanning:** Digitale laeringsverktoy, tilgang til kunnskap
- **Helse:** Telemedisin, helseapper, AI-diagnostisering
- **Demokrati:** Sosiale medier, desinformasjon, overvaaking
- **Miljo:** Datakraft krever energi, men muliggjor smarte losninger
- **Sosiale relasjoner:** Nye mater a kommunisere, men ogsa utfordringer`,
    },
    {
      id: 'it-2-10-def-1',
      type: 'definition',
      title: 'Digitalt utenforskap',
      content: `**Digitalt utenforskap:**
Nar personer eller grupper ikke har tilgang til eller kompetanse til aa bruke digital teknologi, og dermed faller utenfor viktige samfunnsarenaer.

**Arsaker:**
- Manglende tilgang til utstyr eller internett
- Lav digital kompetanse
- Sprak- eller funksjonsnedsettelser
- Alder - eldre er overrepresentert
- Okonomi

**Konsekvenser:**
- Vanskelig aa benytte offentlige tjenester
- Ga glipp av jobbmuligheter
- Sosial isolasjon
- Darligere tilgang til informasjon

**Tiltak:**
- Universell utforming av digitale tjenester
- Opplaering og stotte
- Beholde ikke-digitale alternativer
- Rimelig internett og utstyr`,
    },
    {
      id: 'it-2-10-def-2',
      type: 'definition',
      title: 'Fremvoksende teknologier',
      content: `**Kunstig intelligens (AI):**
Stadig kraftigere AI-systemer som kan generere tekst, bilder, kode. Reiser sporsmaal om opphavsrett, arbeidsplasser og sannhet.

**Internet of Things (IoT):**
Hverdagsgjenstander koblet til internett - smarthus, wearables, smarte byer. Muliggjor automatisering men reiser sikkerhetssporsmal.

**Kvantecomputing:**
Datamaskiner som utnytter kvantefysikk for enorm regnekraft. Kan lase problemer som er umulige i dag, men ogsa bryte kryptering.

**AR/VR/Metaverse:**
Blanding av fysisk og digital virkelighet. Nye mater aa laere, jobbe og sosialisere, men ogsa bekymringer om avhengighet og virkelighetsoppfatning.

**Bioteknologi og IT:**
Genredigering, personalisert medisin, bio-datamaskiner. Store muligheter men ogsa etiske dilemmaer.`,
    },
    {
      id: 'it-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Etisk analyse av teknologi',
      problem: 'Analyser de etiske aspektene ved ansiktsgjenkjenning i det offentlige rom.',
      solution: `**Fordeler:**
- Sikkerhet: Kan identifisere kriminelle og terrorister
- Effektivitet: Raskere grensekontroll
- Finn savnede personer

**Bekymringer:**
- **Personvern:** Konstant overvaaking uten samtykke
- **Maktmisbruk:** Kan brukes til aa spore politiske motstandere
- **Feil:** Systemene gjor feil, saerlig for minoriteter
- **Chilling effect:** Folk endrer atferd nar de vet de blir overvaaket
- **Normalisering:** Gradvis aksept av overvaaking

**Viktige sporsmaal:**
- Hvem har tilgang til dataene?
- Hvor lenge lagres de?
- Hvilke garantier finnes mot misbruk?
- Er fordelene store nok til aa rettferdiggjore inngrepet?

**Konklusjon:** Krever streng regulering, apenhet og demokratisk kontroll.`,
    },
    {
      id: 'it-2-10-def-3',
      type: 'definition',
      title: 'Barekraft og IT',
      content: `**IT-sektorens klimaavtrykk:**
- Datasentre bruker enorme mengder energi
- Produksjon av elektronikk krever sjeldne mineraler
- E-avfall er et voksende problem

**Tiltak:**
- Effektive datasentre (PUE - Power Usage Effectiveness)
- Fornybar energi
- Lengre levetid pa utstyr
- Resirkulering

**IT som losning:**
- Smarte stramnett optimaliserer energibruk
- Presisjonsjordbruk reduserer ressursbruk
- Videokonferanser erstatter reiser
- Simulering av klimamodeller
- Smarte byer med effektiv transport

**Balanse:**
Digitaliseringens fordeler maa veies mot miljokostnaden.`,
    },
    {
      id: 'it-2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er digitalt utenforskap og hvilke grupper er mest utsatt?',
        solution: 'Digitalt utenforskap betyr aa ikke ha tilgang til eller kompetanse til aa bruke digital teknologi. Mest utsatt: Eldre, lav inntekt, lav utdanning, enkelte innvandrergrupper, personer med funksjonsnedsettelser, folk i omraader med darlig nettilgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Droeft hvordan sosiale medier pavirker demokratiet - baade positivt og negativt.',
        solution: 'Positivt: Lettere aa organisere seg, spre informasjon, holde makthavere ansvarlige, gi stemme til marginaliserte. Negativt: Spredning av desinformasjon, filterbobler, polarisering, manipulasjon av valg, hat og trakassering, korte oppmerksomhetsspenn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en fremvoksende teknologi og analyser potensielle fordeler og risikoer.',
        hints: ['Du kan velge AI, IoT, kvantecomputing, AR/VR eller annet'],
        solution: 'Eksempel - IoT: Fordeler: Smarte hjem, energisparing, helseovervaaking, effektiv industri. Risikoer: Sikkerhetshull (kan hackes), personvern (konstant datainnsamling), avhengighet av internett, miljokostnad ved produksjon. Trengs standarder og sikkerhetskrav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan IT bidra til aa lose klimautfordringer? Gi minst tre konkrete eksempler.',
        solution: '1) Smarte stramnett balanserer tilbud og ettersporsel av fornybar energi. 2) Presisjonsjordbruk bruker sensorer for aa redusere vann og gjodsel. 3) Videokonferanser reduserer reiser. 4) AI optimaliserer logistikk og reduserer utslipp. 5) Digitale tvillinger simulerer og forbedrer industrielle prosesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke yrker tror du vil forsvinne og hvilke nye yrker vil oppstaa paa grunn av teknologisk utvikling?',
        solution: 'Kan forsvinne/endres: Kassamedarbeider, sjaafor, enkel saksbehandling, rutinepreget kontorarbeid. Nye yrker: AI-trener, dataetiker, drone-operatorer, VR-designere, cybersikkerhetseksperter, robotvedlikeholdere. Viktig: Livslang laering og tilpasningsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-2-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-2-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Som IT-utvikler har du ansvar for teknologien du skaper. Droeft hvilket etisk ansvar utviklere har, og hvordan de kan ivareta det.',
        solution: 'Ansvar: Tenke pa konsekvenser, beskytte brukernes personvern, unngaa aa bygge skadevare, sikre tilgjengelighet, vaere aapen om begrensninger. Tiltak: Etiske retningslinjer, mangfoldige team for aa fange bias, brukermedvirkning, drofte etikk i utviklingsprosessen, si ifra om problemer.',
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

export const IT_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_1,
  CHAPTER_IT_2_2,
  CHAPTER_IT_2_3,
  CHAPTER_IT_2_4,
  CHAPTER_IT_2_5,
  CHAPTER_IT_2_6,
  CHAPTER_IT_2_7,
  CHAPTER_IT_2_8,
  CHAPTER_IT_2_9,
  CHAPTER_IT_2_10,
];

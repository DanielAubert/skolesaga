/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 2: Avansert OOP og designmønstre (Kapittel 2.1–2.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Komposisjon og aggregering
// ============================================================================

export const CHAPTER_IT_2_2_1: TextbookChapter = {
  id: 'it-2-2-1',
  courseId: 'it-2',
  title: 'Komposisjon og aggregering',
  slug: 'komposisjon-og-aggregering',
  description: 'Lær forskjellen mellom har-en og er-en relasjoner, samt hvordan du bygger fleksible objektstrukturer med komposisjon.',
  estimatedMinutes: 50,
  objectives: [
    'Forstå forskjellen mellom komposisjon ("har-en") og arv ("er-en")',
    'Implementere komposisjon med klasser i Python',
    'Bruke delegering for å gjenbruke kode',
    'Vurdere når komposisjon er bedre enn arv'
  ],
  keyTerms: [
    'Komposisjon',
    'Aggregering',
    'Delegering',
    'Har-en relasjon',
    'Er-en relasjon',
    'Løs kobling',
    'Tight kobling',
    'Objektsammensetning'
  ],
  content: [
    {
      id: 'it2-2-1-intro',
      type: 'text',
      content: `# Komposisjon og aggregering

Du har lært om arv, der en klasse **er en** spesialisering av en annen. Men ofte ønsker vi at en klasse **har en** annen som del av seg selv. Dette kalles **komposisjon** eller **aggregering**, og er et kraftig alternativ til arv.

I dette kapittelet skal du lære hvordan du bygger komplekse objekter ved å kombinere enklere objekter, og hvorfor "favor composition over inheritance" er et viktig designprinsipp.`
    },

    {
      id: 'it2-2-1-def-1',
      type: 'definition',
      content: `**Komposisjon** er når ett objekt *inneholder* ett eller flere andre objekter som en del av sin tilstand. Vi sier at objektet **har en** relasjon til de andre objektene.

**Aggregering** er en svakere form for komposisjon der inneholdte objekter kan eksistere uavhengig av container-objektet.

**Delegering** betyr å overlate ansvar til et innebygget objekt i stedet for å arve oppførsel.`
    },

    {
      id: 'it2-2-1-ex-1',
      type: 'example',
      content: `## Eksempel: Bil har en motor

I stedet for at \`Bil\` arver fra \`Motor\`, kan vi la \`Bil\` *ha* en \`Motor\`:

\`\`\`python
class Motor:
    def __init__(self, hestekrefter):
        self.hestekrefter = hestekrefter
        self.kjorer = False

    def start(self):
        self.kjorer = True
        print(f"Motor med {self.hestekrefter} hk startet!")

    def stopp(self):
        self.kjorer = False
        print("Motor stoppet.")

class Bil:
    def __init__(self, merke, hestekrefter):
        self.merke = merke
        self.motor = Motor(hestekrefter)  # Komposisjon!

    def start_bil(self):
        print(f"{self.merke} starter...")
        self.motor.start()  # Delegering

    def stopp_bil(self):
        self.motor.stopp()
        print(f"{self.merke} stoppet.")

# Bruk
min_bil = Bil("Tesla Model 3", 450)
min_bil.start_bil()
# Output:
# Tesla Model 3 starter...
# Motor med 450 hk startet!
\`\`\`

Her **har** \`Bil\` en \`Motor\`, og delegerer start/stopp-oppgaver til den.`
    },

    {
      id: 'it2-2-1-ex-2',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilken av følgende beskriver best komposisjon?',
      options: [
        'En klasse arver fra en annen klasse',
        'En klasse inneholder objekter av andre klasser',
        'En klasse overstyrer metoder fra superklassen',
        'En klasse har statiske metoder'
      ],
      correctAnswer: 1,
      explanation: 'Komposisjon betyr at en klasse inneholder objekter av andre klasser som en del av sin tilstand. Dette skaper "har-en" relasjoner.'
    },

    {
      id: 'it2-2-1-def-2',
      type: 'definition',
      content: `**Favor composition over inheritance** er et velkjent designprinsipp som sier:

"Foretrekk å bygge funksjonalitet ved å kombinere objekter (komposisjon) fremfor å arve oppførsel (arv)."

**Fordeler med komposisjon:**
- Mer fleksibel – kan endre oppførsel ved runtime
- Løsere kobling – objekter er mindre avhengige av hverandre
- Enklere testing – kan enkelt bytte ut deler
- Unngår problemer med dyp arvshierarki`
    },

    {
      id: 'it2-2-1-ex-3',
      type: 'example',
      content: `## Eksempel: Komposisjon vs. arv

**Med arv (mindre fleksibelt):**

\`\`\`python
class Flygende:
    def fly(self):
        print("Flyr!")

class Svømmende:
    def svøm(self):
        print("Svømmer!")

class And(Flygende, Svømmende):  # Multippel arv
    pass

# Hva om vi vil ha en and som ikke kan fly?
# Må lage ny klasse...
\`\`\`

**Med komposisjon (mer fleksibelt):**

\`\`\`python
class FlyOppførsel:
    def utfør(self):
        print("Flyr!")

class SvømOppførsel:
    def utfør(self):
        print("Svømmer!")

class IngenFlyOppførsel:
    def utfør(self):
        print("Kan ikke fly.")

class And:
    def __init__(self, fly_oppførsel, svøm_oppførsel):
        self.fly_oppførsel = fly_oppførsel
        self.svøm_oppførsel = svøm_oppførsel

    def fly(self):
        self.fly_oppførsel.utfør()

    def svøm(self):
        self.svøm_oppførsel.utfør()

# Nå kan vi enkelt lage forskjellige ender:
and1 = And(FlyOppførsel(), SvømOppførsel())
and1.fly()  # Flyr!

and2 = And(IngenFlyOppførsel(), SvømOppførsel())
and2.fly()  # Kan ikke fly.
\`\`\`

Med komposisjon kan vi bytte oppførsel uten å lage nye klasser!`
    },

    {
      id: 'it2-2-1-ex-4',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva er hovedfordelen med komposisjon fremfor arv?',
      options: [
        'Komposisjon krever mindre kode',
        'Komposisjon gir bedre ytelse',
        'Komposisjon er mer fleksibel og gir løsere kobling',
        'Komposisjon er alltid enklere å forstå'
      ],
      correctAnswer: 2,
      explanation: 'Komposisjon er mer fleksibel fordi du kan endre oppførsel ved runtime og skaper løsere kobling mellom objekter. Dette gjør koden mer vedlikeholdbar og testbar.'
    },

    {
      id: 'it2-2-1-ex-5',
      type: 'example',
      content: `## Eksempel: Aggregering vs. komposisjon

**Komposisjon (tight kobling):** Hjerte eksisterer ikke uten person.

\`\`\`python
class Hjerte:
    def __init__(self, bpm):
        self.hjerteslag_per_minutt = bpm

    def slå(self):
        print(f"Hjerte slår {self.hjerteslag_per_minutt} ganger/min")

class Person:
    def __init__(self, navn):
        self.navn = navn
        self.hjerte = Hjerte(70)  # Lager hjertet her

# Når person slettes, slettes også hjertet
\`\`\`

**Aggregering (løs kobling):** Bil kan ha hjul, men hjul kan eksistere separat.

\`\`\`python
class Hjul:
    def __init__(self, størrelse):
        self.størrelse = størrelse

class Bil:
    def __init__(self, hjul_liste):
        self.hjul = hjul_liste  # Får hjul utenfra

# Hjul kan eksistere uavhengig av bil
hjul1 = Hjul(18)
hjul2 = Hjul(18)
hjul3 = Hjul(18)
hjul4 = Hjul(18)

min_bil = Bil([hjul1, hjul2, hjul3, hjul4])
# Hjulene eksisterer fortsatt selv om bil slettes
\`\`\`

I praksis brukes begge termer ofte om hverandre.`
    },

    {
      id: 'it2-2-1-ex-6',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hva er forskjellen på komposisjon og aggregering?',
      options: [
        'Komposisjon bruker arv, aggregering ikke',
        'I komposisjon "eier" objektet delene, i aggregering kan delene eksistere uavhengig',
        'Aggregering er raskere enn komposisjon',
        'Det er ingen forskjell, begge er det samme'
      ],
      correctAnswer: 1,
      explanation: 'I komposisjon er delene tett koblet til container-objektet og eksisterer ikke uten det. I aggregering kan delene eksistere uavhengig av container-objektet.'
    },

    {
      id: 'it2-2-1-ex-7',
      type: 'example',
      content: `## Eksempel: Delegering i praksis

La oss bygge et enkelt \`Spill\`-system med komposisjon:

\`\`\`python
class Grafikk:
    def tegn_skjerm(self, tekst):
        print(f"🎮 {tekst}")

class Lyd:
    def spill_effekt(self, lyd):
        print(f"🔊 {lyd}")

class Inndata:
    def les_tast(self):
        return input("Trykk tast > ")

class Spill:
    def __init__(self):
        self.grafikk = Grafikk()
        self.lyd = Lyd()
        self.inndata = Inndata()
        self.poeng = 0

    def start(self):
        self.grafikk.tegn_skjerm("Spillet starter!")
        self.lyd.spill_effekt("Start-musikk")

        while True:
            kommando = self.inndata.les_tast()

            if kommando == "a":
                self.angrip()
            elif kommando == "q":
                self.avslutt()
                break

    def angrip(self):
        self.grafikk.tegn_skjerm("Du angriper!")
        self.lyd.spill_effekt("Sverd-lyd")
        self.poeng += 10
        print(f"Poeng: {self.poeng}")

    def avslutt(self):
        self.grafikk.tegn_skjerm("Spillet avsluttes...")
        self.lyd.spill_effekt("Avslutt-musikk")

# Bruk
# spill = Spill()
# spill.start()
\`\`\`

Spillet **har** grafikk, lyd og inndata-objekter, og delegerer ansvar til dem.`
    },

    {
      id: 'it2-2-1-ex-8',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Du designer en \`Smarttelefon\`-klasse. Hvilken tilnærming følger best komposisjonsprinsippet?',
      options: [
        'class Smarttelefon(Kamera, GPS, Skjerm): pass',
        'class Smarttelefon:\n    def __init__(self):\n        self.kamera = Kamera()\n        self.gps = GPS()\n        self.skjerm = Skjerm()',
        'class Smarttelefon:\n    pass\nclass Kamera(Smarttelefon): pass',
        'Alle alternativene er like gode'
      ],
      correctAnswer: 1,
      explanation: 'Det andre alternativet bruker komposisjon: Smarttelefon inneholder objekter av Kamera, GPS og Skjerm. Dette gir bedre fleksibilitet enn multippel arv og følger "har-en" prinsippet.'
    },

    {
      id: 'it2-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Komposisjon** betyr at en klasse inneholder objekter av andre klasser ("har-en")
- **Aggregering** er en svakere form der inneholdte objekter kan eksistere uavhengig
- **Delegering** er å overlate ansvar til inneholdte objekter
- **"Favor composition over inheritance"** – foretrekk komposisjon for fleksibilitet
- Komposisjon gir **løsere kobling** og gjør kode mer vedlikeholdbar

Neste steg: Vi skal bruke komposisjon til å bygge datastrukturer!`
    },

    // --- Samleoppgaver ---
    {
      id: 'it2-2-1-ex-9',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilket konsept beskriver best relasjonen i denne koden?\n\n```python\nclass Motor:\n    pass\n\nclass Bil:\n    def __init__(self):\n        self.motor = Motor()\n```',
      options: [
        'Arv',
        'Komposisjon',
        'Polymorfisme',
        'Innkapsling'
      ],
      correctAnswer: 1,
      explanation: 'Dette er komposisjon: Bil-klassen inneholder et Motor-objekt. Bil "har en" motor, den "er ikke en" motor.'
    },

    {
      id: 'it2-2-1-ex-10',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Hvilken av disse situasjonene passer BEST for arv (ikke komposisjon)?',
      options: [
        'En Bil har en Motor',
        'En Hund er et Dyr',
        'En Person har et Hjerte',
        'Et Hus har Vinduer'
      ],
      correctAnswer: 1,
      explanation: 'Arv passer best for "er-en" relasjoner: En Hund er et Dyr. De andre eksemplene ("har-en" relasjoner) passer bedre for komposisjon.'
    }
  ],
  exercises: [],
  prevChapter: 'it-2-1-5',
  nextChapter: 'it-2-2-2'
};

// ============================================================================
// Kapittel 2.2: Datastrukturer – lister, stakker og køer
// ============================================================================

export const CHAPTER_IT_2_2_2: TextbookChapter = {
  id: 'it-2-2-2',
  courseId: 'it-2',
  title: 'Datastrukturer – lister, stakker og køer',
  slug: 'datastrukturer-lister-stakker-koer',
  description: 'Utforsk grunnleggende datastrukturer som lister, stakker (LIFO) og køer (FIFO), og implementer dem selv.',
  estimatedMinutes: 55,
  objectives: [
    'Forstå forskjellen mellom lister, stakker og køer',
    'Implementere en stakk med LIFO-prinsippet',
    'Implementere en kø med FIFO-prinsippet',
    'Bruke Pythons collections.deque for effektive køer'
  ],
  keyTerms: [
    'Liste',
    'Stakk (Stack)',
    'Kø (Queue)',
    'LIFO (Last In First Out)',
    'FIFO (First In First Out)',
    'Push/Pop',
    'Enqueue/Dequeue',
    'Deque'
  ],
  content: [
    {
      id: 'it2-2-2-intro',
      type: 'text',
      content: `# Datastrukturer – lister, stakker og køer

En **datastruktur** er en måte å organisere og lagre data på slik at vi kan bruke dem effektivt. Du kjenner allerede til Pythons lister, men nå skal vi se på mer spesialiserte strukturer: **stakker** og **køer**.

Disse strukturene brukes overalt i programmering: fra nettlesernes tilbake-knapp til oppgavehåndtering i operativsystemer.`
    },

    {
      id: 'it2-2-2-def-1',
      type: 'definition',
      content: `**Liste** er en ordnet samling av elementer der du kan legge til, fjerne og hente elementer på vilkårlige posisjoner.

**Stakk (Stack)** er en LIFO-struktur: **Last In, First Out**. Det siste elementet som legges til er det første som tas ut. Tenk på en stabel med tallerkener.

**Kø (Queue)** er en FIFO-struktur: **First In, First Out**. Det første elementet som legges til er det første som tas ut. Tenk på en kø i butikken.`
    },

    {
      id: 'it2-2-2-ex-1',
      type: 'example',
      content: `## Eksempel: Liste-operasjoner i Python

Pythons innebygde \`list\` er veldig fleksibel:

\`\`\`python
# Lage liste
tall = [1, 2, 3, 4, 5]

# Legge til elementer
tall.append(6)         # [1, 2, 3, 4, 5, 6]
tall.insert(0, 0)      # [0, 1, 2, 3, 4, 5, 6]

# Fjerne elementer
tall.pop()             # Fjerner siste: 6
tall.pop(0)            # Fjerner første: 0

# Hente elementer
første = tall[0]
siste = tall[-1]

# Iterere
for tall_element in tall:
    print(tall_element)

# Lengde
antall = len(tall)
\`\`\`

Lister er gode generelt, men ikke alltid mest effektive for spesifikke brukstilfeller.`
    },

    {
      id: 'it2-2-2-ex-2',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hva betyr LIFO?',
      options: [
        'Last In, First Out',
        'List In, First Out',
        'Last Item, Final Output',
        'Linear In, Fast Out'
      ],
      correctAnswer: 0,
      explanation: 'LIFO står for Last In, First Out – det siste elementet som legges inn er det første som tas ut. Dette er prinsippet for en stakk.'
    },

    {
      id: 'it2-2-2-def-2',
      type: 'definition',
      content: `**Stakk-operasjoner:**

- **push(element)** – legger element på toppen av stakken
- **pop()** – fjerner og returnerer elementet på toppen
- **peek()** eller **top()** – ser på elementet på toppen uten å fjerne det
- **is_empty()** – sjekker om stakken er tom
- **size()** – returnerer antall elementer

En stakk har ingen tilgang til elementer i midten – bare toppen!`
    },

    {
      id: 'it2-2-2-ex-3',
      type: 'example',
      content: `## Eksempel: Implementere en stakk

La oss lage vår egen \`Stakk\`-klasse:

\`\`\`python
class Stakk:
    def __init__(self):
        self._elementer = []

    def push(self, element):
        """Legger element på toppen."""
        self._elementer.append(element)

    def pop(self):
        """Fjerner og returnerer element fra toppen."""
        if self.is_empty():
            raise IndexError("pop fra tom stakk")
        return self._elementer.pop()

    def peek(self):
        """Ser på topp-elementet uten å fjerne."""
        if self.is_empty():
            raise IndexError("peek i tom stakk")
        return self._elementer[-1]

    def is_empty(self):
        """Sjekker om stakken er tom."""
        return len(self._elementer) == 0

    def size(self):
        """Returnerer antall elementer."""
        return len(self._elementer)

    def __str__(self):
        return f"Stakk({self._elementer})"

# Bruk
stakk = Stakk()
stakk.push(1)
stakk.push(2)
stakk.push(3)
print(stakk)        # Stakk([1, 2, 3])
print(stakk.pop())  # 3 (siste inn, først ut)
print(stakk.pop())  # 2
print(stakk.peek()) # 1 (ser på toppen)
\`\`\`

Stakken bruker en liste internt, men tilbyr bare stakk-operasjoner!`
    },

    {
      id: 'it2-2-2-ex-4',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva blir output?\n\n```python\ns = Stakk()\ns.push("A")\ns.push("B")\ns.push("C")\nprint(s.pop())\nprint(s.pop())\n```',
      options: [
        'A, B',
        'B, C',
        'C, B',
        'A, C'
      ],
      correctAnswer: 2,
      explanation: 'En stakk følger LIFO: C legges til sist, så C poppes først. Deretter poppes B. Rekkefølgen er C, B.'
    },

    {
      id: 'it2-2-2-ex-5',
      type: 'example',
      content: `## Eksempel: Brukstilfelle for stakk – Angre-funksjon

Stakker er perfekte for å implementere "angre" (undo):

\`\`\`python
class Teksteditor:
    def __init__(self):
        self.tekst = ""
        self.historikk = Stakk()

    def skriv(self, ny_tekst):
        """Legger til tekst og lagrer forrige versjon."""
        self.historikk.push(self.tekst)
        self.tekst += ny_tekst

    def angre(self):
        """Går tilbake til forrige versjon."""
        if not self.historikk.is_empty():
            self.tekst = self.historikk.pop()
        else:
            print("Ingen ting å angre!")

    def vis(self):
        print(f"Tekst: {self.tekst}")

# Bruk
editor = Teksteditor()
editor.skriv("Hei ")
editor.vis()        # Tekst: Hei
editor.skriv("verden!")
editor.vis()        # Tekst: Hei verden!
editor.angre()
editor.vis()        # Tekst: Hei
\`\`\`

Hver gang du skriver, pushes forrige versjon på stakken. Angre popper den tilbake!`
    },

    {
      id: 'it2-2-2-def-3',
      type: 'definition',
      content: `**Kø-operasjoner:**

- **enqueue(element)** – legger element bakerst i køen
- **dequeue()** – fjerner og returnerer elementet fremst i køen
- **peek()** eller **front()** – ser på elementet fremst uten å fjerne det
- **is_empty()** – sjekker om køen er tom
- **size()** – returnerer antall elementer

En kø følger FIFO: første inn, først ut.`
    },

    {
      id: 'it2-2-2-ex-6',
      type: 'example',
      content: `## Eksempel: Implementere en kø

La oss lage vår egen \`Kø\`-klasse:

\`\`\`python
class Kø:
    def __init__(self):
        self._elementer = []

    def enqueue(self, element):
        """Legger element bakerst i køen."""
        self._elementer.append(element)

    def dequeue(self):
        """Fjerner og returnerer element fremst i køen."""
        if self.is_empty():
            raise IndexError("dequeue fra tom kø")
        return self._elementer.pop(0)  # Fjerner første element

    def peek(self):
        """Ser på fremste element uten å fjerne."""
        if self.is_empty():
            raise IndexError("peek i tom kø")
        return self._elementer[0]

    def is_empty(self):
        """Sjekker om køen er tom."""
        return len(self._elementer) == 0

    def size(self):
        """Returnerer antall elementer."""
        return len(self._elementer)

    def __str__(self):
        return f"Kø({self._elementer})"

# Bruk
kø = Kø()
kø.enqueue("Person A")
kø.enqueue("Person B")
kø.enqueue("Person C")
print(kø)              # Kø(['Person A', 'Person B', 'Person C'])
print(kø.dequeue())    # Person A (første inn, først ut)
print(kø.dequeue())    # Person B
print(kø.peek())       # Person C (ser på fremste)
\`\`\`

**Merk:** \`pop(0)\` er ineffektivt for store lister (O(n)). For bedre ytelse, bruk \`collections.deque\`.`
    },

    {
      id: 'it2-2-2-ex-7',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva blir output?\n\n```python\nq = Kø()\nq.enqueue(10)\nq.enqueue(20)\nq.enqueue(30)\nprint(q.dequeue())\nprint(q.dequeue())\n```',
      options: [
        '30, 20',
        '10, 20',
        '20, 30',
        '10, 30'
      ],
      correctAnswer: 1,
      explanation: 'En kø følger FIFO: 10 legges til først, så 10 tas ut først. Deretter tas 20 ut. Rekkefølgen er 10, 20.'
    },

    {
      id: 'it2-2-2-ex-8',
      type: 'example',
      content: `## Eksempel: Bruke collections.deque

Python har en innebygd, effektiv kø-implementasjon: \`collections.deque\`.

\`\`\`python
from collections import deque

# Lage en kø
kø = deque()

# Enqueue (legg til bakerst)
kø.append("Første")
kø.append("Andre")
kø.append("Tredje")

# Dequeue (fjern fra fremst)
print(kø.popleft())  # Første

# Peek (se på fremste)
print(kø[0])         # Andre

# Bruke som stakk også:
stakk = deque()
stakk.append(1)
stakk.append(2)
print(stakk.pop())   # 2 (siste inn, først ut)

# deque er O(1) for både append og popleft!
\`\`\`

\`deque\` (double-ended queue) er optimalisert for raske operasjoner i begge ender.`
    },

    {
      id: 'it2-2-2-ex-9',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hvilken Python-modul gir en effektiv kø-implementasjon?',
      options: [
        'queue',
        'collections',
        'datastructures',
        'stack'
      ],
      correctAnswer: 1,
      explanation: 'collections-modulen har deque (double-ended queue) som er perfekt for køer med O(1) operasjoner i begge ender.'
    },

    {
      id: 'it2-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lister** er fleksible, generelle datastrukturer
- **Stakker** følger **LIFO** (Last In, First Out) – brukes for angre-funksjoner, navigasjonshistorikk
- **Køer** følger **FIFO** (First In, First Out) – brukes for oppgavehåndtering, meldingskøer
- Vi kan implementere stakker og køer med lister
- \`collections.deque\` er mer effektivt for køer enn vanlige lister

Neste kapittel: Vi utvider til ordbøker og mengder!`
    },

    // --- Samleoppgaver ---
    {
      id: 'it2-2-2-ex-10',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Du skal implementere "tilbake-knappen" i en nettleser. Hvilken datastruktur passer best?',
      options: [
        'Kø',
        'Stakk',
        'Liste',
        'Ordbok'
      ],
      correctAnswer: 1,
      explanation: 'En stakk passer best for tilbake-knappen: Den sist besøkte siden er den første du går tilbake til (LIFO). Hver gang du besøker en ny side, pushes forrige på stakken.'
    }
  ],
  exercises: [],
  prevChapter: 'it-2-2-1',
  nextChapter: 'it-2-2-3'
};

// ============================================================================
// Kapittel 2.3: Ordbøker og mengder
// ============================================================================

export const CHAPTER_IT_2_2_3: TextbookChapter = {
  id: 'it-2-2-3',
  courseId: 'it-2',
  title: 'Ordbøker og mengder',
  slug: 'ordboker-og-mengder',
  description: 'Lær å bruke ordbøker (dict) og mengder (set) for effektiv datahåndtering og hvordan hashtabeller fungerer.',
  estimatedMinutes: 50,
  objectives: [
    'Bruke ordbøker til å lagre nøkkel-verdi-par',
    'Forstå hvordan hashtabeller fungerer',
    'Bruke mengder til å håndtere unike elementer',
    'Utføre operasjoner som union, snitt og differanse på mengder'
  ],
  keyTerms: [
    'Ordbok (Dictionary)',
    'Nøkkel-verdi-par',
    'Hashtabell',
    'Mengde (Set)',
    'Union',
    'Snitt (Intersection)',
    'Differanse',
    'Hash-funksjon'
  ],
  content: [
    {
      id: 'it2-2-3-intro',
      type: 'text',
      content: `# Ordbøker og mengder

Lister er gode når du vil ha en ordnet sekvens. Men hva om du vil slå opp data raskt med en nøkkel? Eller håndtere unike elementer?

Da trenger du **ordbøker** (dict) og **mengder** (set)!

Disse datastrukturene brukes overalt: fra databaser til caching, fra JSON-parsing til å finne duplikater.`
    },

    {
      id: 'it2-2-3-def-1',
      type: 'definition',
      content: `**Ordbok (Dictionary)** er en samling av **nøkkel-verdi-par**, der hver nøkkel er unik og brukes til å slå opp verdien.

**Hashtabell** er den underliggende datastrukturen for ordbøker. Den bruker en **hash-funksjon** til å konvertere nøkler til indekser for svært rask oppslag (O(1) i snitt).

**Mengde (Set)** er en samling av **unike elementer** uten rekkefølge. Mengder støtter matematiske operasjoner som union, snitt og differanse.`
    },

    {
      id: 'it2-2-3-ex-1',
      type: 'example',
      content: `## Eksempel: Grunnleggende ordbok-operasjoner

\`\`\`python
# Lage en ordbok
person = {
    "navn": "Anna",
    "alder": 18,
    "by": "Oslo"
}

# Hente verdier
print(person["navn"])        # Anna
print(person.get("alder"))   # 18
print(person.get("land", "Norge"))  # Norge (standard hvis ikke finnes)

# Endre verdier
person["alder"] = 19

# Legge til nye nøkler
person["skole"] = "VG3"

# Sjekke om nøkkel finnes
if "by" in person:
    print(f"Bor i {person['by']}")

# Iterere
for nøkkel, verdi in person.items():
    print(f"{nøkkel}: {verdi}")

# Fjerne nøkler
del person["by"]

# Antall nøkler
antall = len(person)
\`\`\`

Ordbøker gir O(1) oppslag – ekstremt raskt uansett størrelse!`
    },

    {
      id: 'it2-2-3-ex-2',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hva er tidskonpleksiteten for oppslag i en ordbok (i snitt)?',
      options: [
        'O(n)',
        'O(log n)',
        'O(1)',
        'O(n²)'
      ],
      correctAnswer: 2,
      explanation: 'Ordbøker bruker hashtabeller som gir O(1) oppslag i gjennomsnitt – konstant tid uavhengig av størrelse.'
    },

    {
      id: 'it2-2-3-def-2',
      type: 'definition',
      content: `**Hvordan hashtabeller fungerer:**

1. **Hash-funksjon**: Konverterer nøkkelen til et heltall (hash-kode)
2. **Indeks**: Hash-koden brukes til å finne riktig "bøtte" i en intern array
3. **Lagring**: Verdien lagres i den bøtten
4. **Oppslag**: Samme prosess brukes for å finne verdien raskt

**Kollisjoner** oppstår når to nøkler får samme hash. Pythons \`dict\` håndterer dette automatisk.

Eksempel:
\`\`\`python
# Intern representasjon (forenklet):
# hash("navn") -> 12345 -> bøtte[5] -> "Anna"
# hash("alder") -> 67890 -> bøtte[0] -> 18
\`\`\``
    },

    {
      id: 'it2-2-3-ex-3',
      type: 'example',
      content: `## Eksempel: Brukstilfelle – Telling med ordbok

Ordbøker er perfekte for å telle forekomster:

\`\`\`python
def tell_ord(tekst):
    """Teller hvor mange ganger hvert ord forekommer."""
    ord_liste = tekst.lower().split()
    telling = {}

    for ord in ord_liste:
        if ord in telling:
            telling[ord] += 1
        else:
            telling[ord] = 1

    return telling

# Bruk
tekst = "hei hei verden hei"
resultat = tell_ord(tekst)
print(resultat)  # {'hei': 3, 'verden': 1}

# Finne mest frekvente ord
mest_frekvent = max(resultat, key=resultat.get)
print(f"Mest frekvent: {mest_frekvent} ({resultat[mest_frekvent]} ganger)")
\`\`\`

Dette mønsteret brukes mye i tekstanalyse og statistikk.`
    },

    {
      id: 'it2-2-3-ex-4',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva blir output?\n\n```python\nd = {"a": 1, "b": 2}\nd["c"] = 3\nprint(len(d))\n```',
      options: [
        '2',
        '3',
        '4',
        'Feilmelding'
      ],
      correctAnswer: 1,
      explanation: 'Ordboken starter med 2 nøkler ("a" og "b"), deretter legges "c" til. Total lengde blir 3.'
    },

    {
      id: 'it2-2-3-ex-5',
      type: 'example',
      content: `## Eksempel: Grunnleggende mengde-operasjoner

\`\`\`python
# Lage mengder
tall1 = {1, 2, 3, 4, 5}
tall2 = {4, 5, 6, 7, 8}

# Legge til element
tall1.add(6)

# Fjerne element
tall1.remove(1)  # Feil hvis ikke finnes
tall1.discard(1)  # Ingen feil hvis ikke finnes

# Sjekke medlemskap
print(3 in tall1)  # True

# Union (alle unike elementer fra begge)
union = tall1 | tall2
print(union)  # {2, 3, 4, 5, 6, 7, 8}

# Snitt (elementer som finnes i begge)
snitt = tall1 & tall2
print(snitt)  # {4, 5, 6}

# Differanse (elementer i tall1, men ikke tall2)
diff = tall1 - tall2
print(diff)  # {2, 3}

# Symmetrisk differanse (elementer i én, men ikke begge)
sym_diff = tall1 ^ tall2
print(sym_diff)  # {2, 3, 7, 8}
\`\`\`

Mengder eliminerer automatisk duplikater!`
    },

    {
      id: 'it2-2-3-ex-6',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva blir resultatet av {1, 2, 3} & {2, 3, 4}?',
      options: [
        '{1, 2, 3, 4}',
        '{2, 3}',
        '{1, 4}',
        '{1}'
      ],
      correctAnswer: 1,
      explanation: 'Operatoren & gir snitt (intersection): elementer som finnes i begge mengdene. Her er det 2 og 3.'
    },

    {
      id: 'it2-2-3-ex-7',
      type: 'example',
      content: `## Eksempel: Brukstilfelle – Finne duplikater

Mengder er perfekte for å finne duplikater i en liste:

\`\`\`python
def finn_duplikater(liste):
    """Finner duplikater i en liste."""
    sett_set = set()
    duplikater = set()

    for element in liste:
        if element in sett_set:
            duplikater.add(element)
        else:
            sett_set.add(element)

    return duplikater

# Bruk
tall = [1, 2, 3, 2, 4, 5, 3, 6]
print(finn_duplikater(tall))  # {2, 3}

# Enklere måte: liste -> set -> sammenligne lengder
def har_duplikater(liste):
    return len(liste) != len(set(liste))

print(har_duplikater(tall))  # True
\`\`\`

Mengder gjør det enkelt å håndtere unikhet!`
    },

    {
      id: 'it2-2-3-ex-8',
      type: 'example',
      content: `## Eksempel: JSON-lignende data med ordbøker

Ordbøker brukes mye for strukturert data (som JSON):

\`\`\`python
# Strukturert data
skole = {
    "navn": "Oslo VGS",
    "elever": [
        {
            "navn": "Anna",
            "alder": 17,
            "fag": ["Matematikk", "Fysikk", "IT"]
        },
        {
            "navn": "Bjørn",
            "alder": 18,
            "fag": ["Historie", "Norsk", "IT"]
        }
    ],
    "ansatte": 50
}

# Navigere strukturen
print(skole["navn"])                    # Oslo VGS
print(skole["elever"][0]["navn"])       # Anna
print(skole["elever"][1]["fag"][2])     # IT

# Finne alle som har IT
for elev in skole["elever"]:
    if "IT" in elev["fag"]:
        print(f"{elev['navn']} har IT")
\`\`\`

Dette mønsteret er standard for API-data og konfigurasjoner.`
    },

    {
      id: 'it2-2-3-ex-9',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Du har to lister: kunder1 = ["Anna", "Bjørn"] og kunder2 = ["Bjørn", "Cecilie"]. Hvordan finner du kunder som er i begge lister?',
      options: [
        'set(kunder1) + set(kunder2)',
        'set(kunder1) & set(kunder2)',
        'set(kunder1) | set(kunder2)',
        'set(kunder1) - set(kunder2)'
      ],
      correctAnswer: 1,
      explanation: 'Operatoren & (snitt) finner elementer som finnes i begge mengdene. Resultatet blir {"Bjørn"}.'
    },

    {
      id: 'it2-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ordbøker** lagrer nøkkel-verdi-par med O(1) oppslag via hashtabeller
- **Mengder** håndterer unike elementer og støtter matematiske operasjoner
- **Union** (|), **snitt** (&), **differanse** (-) for mengdeoperasjoner
- Ordbøker er perfekte for JSON-data, caching og telling
- Mengder er perfekte for å eliminere duplikater og sjekke medlemskap

Neste kapittel: Vi bruker disse strukturene i designmønstre!`
    },

    // --- Samleoppgaver ---
    {
      id: 'it2-2-3-ex-10',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilken datastruktur gir raskest oppslag hvis du har mange millioner elementer?',
      options: [
        'Liste',
        'Ordbok',
        'Stakk',
        'Kø'
      ],
      correctAnswer: 1,
      explanation: 'Ordbok gir O(1) oppslag takket være hashtabeller, uansett antall elementer. Lister krever O(n) for søk.'
    }
  ],
  exercises: [],
  prevChapter: 'it-2-2-2',
  nextChapter: 'it-2-2-4'
};

// ============================================================================
// Kapittel 2.4: Designmønstre
// ============================================================================

export const CHAPTER_IT_2_2_4: TextbookChapter = {
  id: 'it-2-2-4',
  courseId: 'it-2',
  title: 'Designmønstre',
  slug: 'designmonstre',
  description: 'Lær grunnleggende designmønstre som Observer, Strategy og Factory for gjenbrukbare løsninger.',
  estimatedMinutes: 60,
  objectives: [
    'Forstå hva designmønstre er og hvorfor de er nyttige',
    'Implementere Observer-mønsteret for hendelseshåndtering',
    'Bruke Strategy-mønsteret for utskiftbar oppførsel',
    'Anvende Factory-mønsteret for objektoppretting'
  ],
  keyTerms: [
    'Designmønster',
    'Observer-mønster',
    'Strategy-mønster',
    'Factory-mønster',
    'Loose coupling',
    'Callback',
    'Algoritme-familie',
    'Objektfabrikk'
  ],
  content: [
    {
      id: 'it2-2-4-intro',
      type: 'text',
      content: `# Designmønstre

Mange programmeringsproblemer dukker opp igjen og igjen. I stedet for å finne opp løsningen hver gang, kan vi bruke **designmønstre** – beprøvde oppskrifter for vanlige utfordringer.

Designmønstre er ikke ferdig kode du kan kopiere, men konseptuelle løsninger du tilpasser din situasjon. Vi skal se på tre grunnleggende mønstre: **Observer**, **Strategy** og **Factory**.`
    },

    {
      id: 'it2-2-4-def-1',
      type: 'definition',
      content: `**Designmønster** er en generell, gjenbrukbar løsning på et vanlig problem i programvaredesign. Det er en mal eller oppskrift, ikke ferdig kode.

**Fordeler med designmønstre:**
- Gir et felles språk for utviklere
- Dokumenterer beste praksis
- Gjør kode mer vedlikeholdbar og fleksibel
- Løser vanlige problemer effektivt

Designmønstre ble populære gjennom boken "Design Patterns" (1994) av "Gang of Four".`
    },

    {
      id: 'it2-2-4-ex-1',
      type: 'example',
      content: `## Eksempel: Observer-mønsteret

**Problem:** Du vil at flere objekter skal varsles automatisk når noe endres.

**Løsning:** Observer-mønsteret lar objekter "abonnere" på hendelser.

\`\`\`python
class Subject:
    """Den som observeres."""
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        """Legger til en observer."""
        self._observers.append(observer)

    def detach(self, observer):
        """Fjerner en observer."""
        self._observers.remove(observer)

    def notify(self, data):
        """Varsler alle observers."""
        for observer in self._observers:
            observer.update(data)

class Observer:
    """Baseklasse for observers."""
    def update(self, data):
        """Kalles når subject endres."""
        pass

# Konkrete observers
class EmailObserver(Observer):
    def update(self, data):
        print(f"📧 Sender e-post: {data}")

class SMSObserver(Observer):
    def update(self, data):
        print(f"📱 Sender SMS: {data}")

# Bruk
subject = Subject()
subject.attach(EmailObserver())
subject.attach(SMSObserver())

subject.notify("Ny melding mottatt!")
# Output:
# 📧 Sender e-post: Ny melding mottatt!
# 📱 Sender SMS: Ny melding mottatt!
\`\`\`

Observer-mønsteret brukes i GUI-frameworks, hendelsessystemer og reaktive programmering.`
    },

    {
      id: 'it2-2-4-ex-2',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva er hovedfordelen med Observer-mønsteret?',
      options: [
        'Det gjør kode raskere',
        'Det lar objekter kommunisere uten tett kobling',
        'Det reduserer minne-bruk',
        'Det gjør arv enklere'
      ],
      correctAnswer: 1,
      explanation: 'Observer-mønsteret skaper løs kobling: Subject trenger ikke å vite hvilke konkrete observers som lytter, bare at de implementerer update()-metoden.'
    },

    {
      id: 'it2-2-4-ex-3',
      type: 'example',
      content: `## Eksempel: Observer med praktisk bruk – Værvarsel

\`\`\`python
class Værstasjon(Subject):
    def __init__(self):
        super().__init__()
        self._temperatur = 0

    def sett_temperatur(self, temp):
        self._temperatur = temp
        self.notify(f"Ny temperatur: {temp}°C")

    def get_temperatur(self):
        return self._temperatur

class TermometerDisplay(Observer):
    def __init__(self, navn):
        self.navn = navn

    def update(self, data):
        print(f"{self.navn}: {data}")

class VarslingSystem(Observer):
    def update(self, data):
        if "temperatur" in data.lower():
            temp = int(data.split(": ")[1].split("°")[0])
            if temp < 0:
                print("⚠️ VARSEL: Fare for glatt vei!")

# Bruk
stasjon = Værstasjon()
stasjon.attach(TermometerDisplay("Hjem"))
stasjon.attach(TermometerDisplay("Skole"))
stasjon.attach(VarslingSystem())

stasjon.sett_temperatur(-5)
# Output:
# Hjem: Ny temperatur: -5°C
# Skole: Ny temperatur: -5°C
# ⚠️ VARSEL: Fare for glatt vei!
\`\`\`

Flere displayer oppdateres automatisk når temperaturen endres!`
    },

    {
      id: 'it2-2-4-def-2',
      type: 'definition',
      content: `**Strategy-mønsteret** lar deg definere en familie av algoritmer, innkapsle hver av dem, og gjøre dem utskiftbare.

**Problem:** Du har forskjellige måter å gjøre noe på, og vil enkelt kunne bytte mellom dem.

**Løsning:** Lag en strategy-klasse for hver algoritme, og la konteksten bruke den valgte strategy.

Dette er komposisjon i aksjon: i stedet for å arve oppførsel, "har" objektet en strategy det delegerer til.`
    },

    {
      id: 'it2-2-4-ex-4',
      type: 'example',
      content: `## Eksempel: Strategy-mønsteret – Sortering

\`\`\`python
class SorteringsStrategy:
    """Baseklasse for sorteringsstrategier."""
    def sorter(self, data):
        pass

class BubbleSortStrategy(SorteringsStrategy):
    def sorter(self, data):
        print("Sorterer med Bubble Sort")
        return sorted(data)  # Forenklet

class QuickSortStrategy(SorteringsStrategy):
    def sorter(self, data):
        print("Sorterer med Quick Sort")
        return sorted(data)  # Forenklet

class DataSorter:
    """Kontekst som bruker en strategy."""
    def __init__(self, strategy):
        self._strategy = strategy

    def sett_strategy(self, strategy):
        """Bytt strategy ved runtime!"""
        self._strategy = strategy

    def sorter_data(self, data):
        return self._strategy.sorter(data)

# Bruk
tall = [5, 2, 8, 1, 9]

sorter = DataSorter(BubbleSortStrategy())
print(sorter.sorter_data(tall))
# Output: Sorterer med Bubble Sort
#         [1, 2, 5, 8, 9]

# Bytt strategi ved runtime
sorter.sett_strategy(QuickSortStrategy())
print(sorter.sorter_data(tall))
# Output: Sorterer med Quick Sort
#         [1, 2, 5, 8, 9]
\`\`\`

Strategy gjør det enkelt å legge til nye algoritmer uten å endre eksisterende kode.`
    },

    {
      id: 'it2-2-4-ex-5',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilket designmønster passer best for å bytte algoritme ved runtime?',
      options: [
        'Observer',
        'Strategy',
        'Factory',
        'Singleton'
      ],
      correctAnswer: 1,
      explanation: 'Strategy-mønsteret er designet for nettopp dette: å kunne bytte mellom forskjellige algoritmer eller oppførsler ved runtime.'
    },

    {
      id: 'it2-2-4-ex-6',
      type: 'example',
      content: `## Eksempel: Strategy med praktisk bruk – Betalingsmetoder

\`\`\`python
class BetalingsStrategy:
    def betal(self, beløp):
        pass

class KredittkortStrategy(BetalingsStrategy):
    def __init__(self, kortnummer):
        self.kortnummer = kortnummer

    def betal(self, beløp):
        print(f"💳 Betaler {beløp} kr med kredittkort ****{self.kortnummer[-4:]}")

class VippsStrategy(BetalingsStrategy):
    def __init__(self, telefon):
        self.telefon = telefon

    def betal(self, beløp):
        print(f"📱 Betaler {beløp} kr med Vipps ({self.telefon})")

class KontantStrategy(BetalingsStrategy):
    def betal(self, beløp):
        print(f"💵 Betaler {beløp} kr kontant")

class Handlekurv:
    def __init__(self):
        self._varer = []
        self._betalingsstrategy = None

    def legg_til(self, vare, pris):
        self._varer.append((vare, pris))

    def sett_betalingsmåte(self, strategy):
        self._betalingsstrategy = strategy

    def betal(self):
        total = sum(pris for _, pris in self._varer)
        self._betalingsstrategy.betal(total)

# Bruk
kurv = Handlekurv()
kurv.legg_til("Bok", 299)
kurv.legg_til("Penn", 19)

kurv.sett_betalingsmåte(VippsStrategy("12345678"))
kurv.betal()  # 📱 Betaler 318 kr med Vipps (12345678)
\`\`\`

Enkelt å legge til nye betalingsmåter uten å endre Handlekurv!`
    },

    {
      id: 'it2-2-4-def-3',
      type: 'definition',
      content: `**Factory-mønsteret** brukes til å opprette objekter uten å spesifisere den eksakte klassen.

**Problem:** Du vil skjule kompleks objektoppretting eller bestemme hvilken klasse som skal instansieres basert på input.

**Løsning:** Lag en factory-funksjon eller -klasse som tar imot parametere og returnerer riktig objekttype.

Dette gjør kode mer fleksibel og enklere å utvide.`
    },

    {
      id: 'it2-2-4-ex-7',
      type: 'example',
      content: `## Eksempel: Factory-mønsteret – Dyrefabrikk

\`\`\`python
class Dyr:
    def lag_lyd(self):
        pass

class Hund(Dyr):
    def lag_lyd(self):
        return "Voff!"

class Katt(Dyr):
    def lag_lyd(self):
        return "Mjau!"

class Ku(Dyr):
    def lag_lyd(self):
        return "Mø!"

# Factory-funksjon
def dyrefabrikk(dyretype):
    """Fabrikk som lager riktig dyreobject."""
    if dyretype == "hund":
        return Hund()
    elif dyretype == "katt":
        return Katt()
    elif dyretype == "ku":
        return Ku()
    else:
        raise ValueError(f"Ukjent dyretype: {dyretype}")

# Bruk
dyr1 = dyrefabrikk("hund")
print(dyr1.lag_lyd())  # Voff!

dyr2 = dyrefabrikk("katt")
print(dyr2.lag_lyd())  # Mjau!

# Klienten trenger ikke å vite om Hund-, Katt- eller Ku-klassene!
# Bare dyrefabrikk() trenger å oppdateres hvis nye dyr legges til.
\`\`\`

Factory skjuler kompleksiteten av objektoppretting.`
    },

    {
      id: 'it2-2-4-ex-8',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Hva er hovedfordelen med Factory-mønsteret?',
      options: [
        'Det gjør objekter raskere å opprette',
        'Det reduserer minne-bruk',
        'Det skjuler objektopprettingslogikk og gjør kode mer fleksibel',
        'Det gjør alle objekter til singleton'
      ],
      correctAnswer: 2,
      explanation: 'Factory-mønsteret skjuler kompleks objektopprettingslogikk og gjør det lett å legge til nye typer uten å endre klientkode.'
    },

    {
      id: 'it2-2-4-ex-9',
      type: 'example',
      content: `## Eksempel: Factory med praktisk bruk – Rapportgenerator

\`\`\`python
class Rapport:
    def generer(self, data):
        pass

class PDFRapport(Rapport):
    def generer(self, data):
        return f"📄 PDF-rapport: {data}"

class ExcelRapport(Rapport):
    def generer(self, data):
        return f"📊 Excel-rapport: {data}"

class HTMLRapport(Rapport):
    def generer(self, data):
        return f"🌐 HTML-rapport: {data}"

class RapportFabrikk:
    @staticmethod
    def lag_rapport(format):
        """Statisk factory-metode."""
        formater = {
            "pdf": PDFRapport,
            "excel": ExcelRapport,
            "html": HTMLRapport
        }

        rapport_klasse = formater.get(format.lower())
        if rapport_klasse:
            return rapport_klasse()
        else:
            raise ValueError(f"Ukjent format: {format}")

# Bruk
data = "Salgsdata for Q4"

rapport = RapportFabrikk.lag_rapport("pdf")
print(rapport.generer(data))  # 📄 PDF-rapport: Salgsdata for Q4

rapport = RapportFabrikk.lag_rapport("excel")
print(rapport.generer(data))  # 📊 Excel-rapport: Salgsdata for Q4
\`\`\`

Enkelt å legge til nye rapportformater ved å oppdatere \`formater\`-ordboken!`
    },

    {
      id: 'it2-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Designmønstre** er beprøvde løsninger på vanlige problemer
- **Observer** lar objekter abonnere på hendelser (løs kobling)
- **Strategy** gjør algoritmer utskiftbare ved runtime (fleksibilitet)
- **Factory** skjuler objektopprettingslogikk (enkapsulering)

Disse mønstrene er fundamentale i profesjonell programvareutvikling og dukker opp i nesten alle store systemer.

Neste kapittel: Vi lærer UML for å visualisere disse mønstrene!`
    },

    // --- Samleoppgaver ---
    {
      id: 'it2-2-4-ex-10',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilket mønster brukes i GUI-systemer der knapper varsler lyttere når de klikkes?',
      options: [
        'Factory',
        'Strategy',
        'Observer',
        'Singleton'
      ],
      correctAnswer: 2,
      explanation: 'Observer-mønsteret brukes i event-systemer der GUI-elementer (subjects) varsler lyttere (observers) om hendelser som klikk.'
    }
  ],
  exercises: [],
  prevChapter: 'it-2-2-3',
  nextChapter: 'it-2-2-5'
};

// ============================================================================
// Kapittel 2.5: UML og modellering
// ============================================================================

export const CHAPTER_IT_2_2_5: TextbookChapter = {
  id: 'it-2-2-5',
  courseId: 'it-2',
  title: 'UML og modellering',
  slug: 'uml-og-modellering',
  description: 'Lær å lese og lage UML-diagrammer for å planlegge og dokumentere programvaredesign.',
  estimatedMinutes: 55,
  objectives: [
    'Forstå hva UML er og hvorfor det brukes',
    'Lese og lage klassediagrammer',
    'Bruke use case-diagrammer for å beskrive funksjonalitet',
    'Forstå sekvensdiagrammer for interaksjon mellom objekter'
  ],
  keyTerms: [
    'UML (Unified Modeling Language)',
    'Klassediagram',
    'Use case-diagram',
    'Sekvensdiagram',
    'Relasjon',
    'Aggregering',
    'Komposisjon',
    'Arv'
  ],
  content: [
    {
      id: 'it2-2-5-intro',
      type: 'text',
      content: `# UML og modellering

Før du begynner å kode, er det lurt å planlegge. **UML** (Unified Modeling Language) er et standardisert visuelt språk for å tegne programvaredesign.

UML-diagrammer fungerer som "blåkopier" for kode – de hjelper deg å tenke gjennom strukturen før du skriver en eneste linje Python!

Vi skal se på tre viktige diagramtyper: **klassediagrammer**, **use case-diagrammer** og **sekvensdiagrammer**.`
    },

    {
      id: 'it2-2-5-def-1',
      type: 'definition',
      content: `**UML (Unified Modeling Language)** er et standardisert modelleringsspråk for å visualisere, spesifisere og dokumentere programvaresystemer.

**Fordeler med UML:**
- Gir en felles visuell forståelse av systemet
- Hjelper med planlegging før koding
- Dokumenterer design for andre utviklere
- Gjør det lettere å diskutere løsninger

**Vanlige diagramtyper:**
- **Klassediagram** – viser klasser og relasjoner
- **Use case-diagram** – viser funksjonalitet fra brukerens perspektiv
- **Sekvensdiagram** – viser interaksjon mellom objekter over tid`
    },

    {
      id: 'it2-2-5-ex-1',
      type: 'example',
      content: `## Eksempel: Klassediagram – Grunnleggende

Et klassediagram viser klasser med:
- **Navn** øverst
- **Attributter** (variabler) i midten
- **Metoder** nederst

**Eksempel i UML:**

\`\`\`
┌─────────────────┐
│     Person      │
├─────────────────┤
│ - navn: str     │
│ - alder: int    │
├─────────────────┤
│ + __init__()    │
│ + si_hei()      │
└─────────────────┘
\`\`\`

**Symboler:**
- \`-\` = privat (eller protected i Python: \`_\`)
- \`+\` = public (standard i Python)
- \`#\` = protected

**Tilsvarende Python-kode:**

\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn      # + (public)
        self.alder = alder    # + (public)

    def si_hei(self):
        print(f"Hei, jeg er {self.navn}!")
\`\`\``
    },

    {
      id: 'it2-2-5-ex-2',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hva betyr symbolet "-" i et UML-klassediagram?',
      options: [
        'Public attributt/metode',
        'Privat attributt/metode',
        'Statisk attributt/metode',
        'Abstract metode'
      ],
      correctAnswer: 1,
      explanation: 'Symbolet "-" indikerer at attributten eller metoden er privat (ikke tilgjengelig utenfor klassen).'
    },

    {
      id: 'it2-2-5-def-2',
      type: 'definition',
      content: `**Relasjoner i klassediagram:**

1. **Arv (Inheritance):** Pil med hvit trekant
   - Student ──▷ Person (Student arver fra Person)

2. **Komposisjon (Composition):** Linje med fylt diamant
   - Bil ◆──── Motor (Bil "eier" Motor)

3. **Aggregering (Aggregation):** Linje med tom diamant
   - Skole ◇──── Student (Skole "har" Studenter)

4. **Assosiasjon (Association):** Enkel linje
   - Person ──── Adresse (Person "bruker" Adresse)

5. **Avhengighet (Dependency):** Stiplet pil
   - Klasse A ······> Klasse B (A bruker B midlertidig)`
    },

    {
      id: 'it2-2-5-ex-3',
      type: 'example',
      content: `## Eksempel: Klassediagram med relasjoner

\`\`\`
┌─────────────────┐
│     Person      │
├─────────────────┤
│ - navn: str     │
│ - alder: int    │
├─────────────────┤
│ + si_hei()      │
└─────────────────┘
         △
         │
         │ (arv)
         │
┌─────────────────┐
│    Student      │
├─────────────────┤
│ - studieprogram │
├─────────────────┤
│ + studer()      │
└─────────────────┘

┌─────────────────┐        ┌─────────────────┐
│      Bil        │        │     Motor       │
├─────────────────┤        ├─────────────────┤
│ - merke: str    │ ◆────  │ - hk: int       │
├─────────────────┤        ├─────────────────┤
│ + start()       │        │ + start()       │
└─────────────────┘        └─────────────────┘
  (komposisjon)
\`\`\`

**Tilsvarende Python:**

\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def si_hei(self):
        print(f"Hei, jeg er {self.navn}!")

class Student(Person):  # Arv
    def __init__(self, navn, alder, studieprogram):
        super().__init__(navn, alder)
        self.studieprogram = studieprogram

    def studer(self):
        print(f"Studerer {self.studieprogram}")

class Motor:
    def __init__(self, hk):
        self.hk = hk

    def start(self):
        print(f"Motor med {self.hk} hk startet")

class Bil:
    def __init__(self, merke, hk):
        self.merke = merke
        self.motor = Motor(hk)  # Komposisjon

    def start(self):
        self.motor.start()
\`\`\``
    },

    {
      id: 'it2-2-5-ex-4',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hvilken UML-relasjon representerer "Bil har en Motor der motoren ikke eksisterer uten bilen"?',
      options: [
        'Arv',
        'Aggregering',
        'Komposisjon',
        'Assosiasjon'
      ],
      correctAnswer: 2,
      explanation: 'Komposisjon (fylt diamant) representerer at Motor er en integrert del av Bil og ikke kan eksistere uavhengig av den.'
    },

    {
      id: 'it2-2-5-ex-5',
      type: 'example',
      content: `## Eksempel: Use case-diagram

Use case-diagrammer viser funksjonalitet fra brukerens perspektiv.

**Eksempel: Nettbank-system**

\`\`\`
        Kunde
          │
          │ (bruker)
          ▼
    ┌───────────────┐
    │ Logg inn      │
    └───────────────┘
          │
    ┌───────────────┐
    │ Se saldo      │
    └───────────────┘
          │
    ┌───────────────┐
    │ Overfør penger│
    └───────────────┘
\`\`\`

**Komponenter:**
- **Aktør** (strekfigur): Kunde
- **Use cases** (ovaler): Logg inn, Se saldo, Overfør penger
- **Forbindelser** (linjer): Viser hvem som bruker hva

Use cases beskriver **hva** systemet gjør, ikke **hvordan**.`
    },

    {
      id: 'it2-2-5-ex-6',
      type: 'exercise',
      difficulty: 'easy',
      question: 'Hva viser et use case-diagram?',
      options: [
        'Hvordan klasser er strukturert',
        'Funksjonalitet fra brukerens perspektiv',
        'Interaksjon mellom objekter over tid',
        'Database-struktur'
      ],
      correctAnswer: 1,
      explanation: 'Use case-diagrammer viser systemets funksjonalitet fra brukerens (aktørens) perspektiv – hva systemet kan gjøre.'
    },

    {
      id: 'it2-2-5-def-3',
      type: 'definition',
      content: `**Sekvensdiagram** viser hvordan objekter samhandler over tid.

**Komponenter:**
- **Objekter** øverst (bokser)
- **Livslinjer** (vertikale stiplete linjer)
- **Meldinger** (horisontale piler mellom livslinjer)
- **Aktivering** (tynne bokser på livslinjen)

Sekvensdiagrammer er nyttige for å forstå komplekse interaksjoner og flyten i programmer.`
    },

    {
      id: 'it2-2-5-ex-7',
      type: 'example',
      content: `## Eksempel: Sekvensdiagram – Handlekurv

\`\`\`
Bruker      Handlekurv    Vare
  │             │           │
  │ legg_til()  │           │
  ├────────────>│           │
  │             │ get_pris()│
  │             ├──────────>│
  │             │<──────────┤
  │             │  199 kr   │
  │             │           │
  │   betal()   │           │
  ├────────────>│           │
  │             │ sum()     │
  │             ├──────┐    │
  │             │<─────┘    │
  │<────────────┤           │
  │  "Betalt"   │           │
\`\`\`

**Tolkning:**
1. Bruker kaller \`legg_til()\` på Handlekurv
2. Handlekurv spør Vare om pris
3. Vare returnerer 199 kr
4. Bruker kaller \`betal()\`
5. Handlekurv beregner sum (intern)
6. Handlekurv returnerer "Betalt" til Bruker

Sekvensdiagrammer viser **rekkefølgen** av operasjoner.`
    },

    {
      id: 'it2-2-5-ex-8',
      type: 'exercise',
      difficulty: 'medium',
      question: 'Hva representerer de vertikale stiplede linjene i et sekvensdiagram?',
      options: [
        'Klasser',
        'Objekters livslinjer',
        'Meldinger',
        'Relasjoner'
      ],
      correctAnswer: 1,
      explanation: 'De vertikale stiplede linjene er "livslinjer" som representerer et objekts eksistens over tid i sekvensdiagrammet.'
    },

    {
      id: 'it2-2-5-ex-9',
      type: 'example',
      content: `## Eksempel: Praktisk bruk – Planlegging med UML

La oss planlegge et enkelt biblioteksystem:

**1. Use case-diagram** (funksjonalitet):
\`\`\`
Bibliotekar
    │
    ├── Registrer bok
    ├── Lån ut bok
    └── Ta imot retur

Medlem
    │
    ├── Søk etter bok
    └── Reserver bok
\`\`\`

**2. Klassediagram** (struktur):
\`\`\`
┌─────────────────┐        ┌─────────────────┐
│     Bok         │        │    Medlem       │
├─────────────────┤        ├─────────────────┤
│ - tittel: str   │        │ - navn: str     │
│ - forfatter     │        │ - medlemsnr     │
│ - isbn          │        ├─────────────────┤
├─────────────────┤        │ + lån_bok()     │
│ + __str__()     │ ◇─────  │ + lever_bok()   │
└─────────────────┘        └─────────────────┘
  (aggregering – medlem kan ha bøker)
\`\`\`

**3. Sekvensdiagram** (utlånsprosess):
\`\`\`
Bibliotekar   System    Medlem    Bok
     │           │         │        │
     │ lån_ut()  │         │        │
     ├──────────>│         │        │
     │           │ sjekk_  │        │
     │           ├────────>│        │
     │           │<────────┤        │
     │           │   OK    │        │
     │           │ marker_ │        │
     │           │ utlånt()│        │
     │           ├────────────────>│
     │<──────────┤         │        │
     │ "Suksess" │         │        │
\`\`\`

Ved å planlegge med UML unngår du mange feil før du koder!`
    },

    {
      id: 'it2-2-5-ex-10',
      type: 'exercise',
      difficulty: 'hard',
      question: 'Du skal designe et online bestillingssystem. Hvilken UML-diagramtype er BEST for å vise hva kunden kan gjøre i systemet?',
      options: [
        'Klassediagram',
        'Sekvensdiagram',
        'Use case-diagram',
        'Aktivitetsdiagram'
      ],
      correctAnswer: 2,
      explanation: 'Use case-diagram er best for å vise funksjonalitet fra brukerens perspektiv – altså hva kunden kan gjøre i systemet (f.eks. "Legg til i handlekurv", "Betal bestilling").'
    },

    {
      id: 'it2-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **UML** er et standardisert visuelt språk for programvaredesign
- **Klassediagrammer** viser klasser, attributter, metoder og relasjoner
- **Use case-diagrammer** viser funksjonalitet fra brukerens perspektiv
- **Sekvensdiagrammer** viser interaksjon mellom objekter over tid
- UML hjelper med planlegging, dokumentasjon og kommunikasjon

Med UML kan du tenke gjennom design før du skriver kode – og kommunisere løsninger visuelt!

**Du har nå fullført Seksjon 2: Avansert OOP og designmønstre!**`
    }
  ],
  exercises: [],
  prevChapter: 'it-2-2-4',
  nextChapter: 'it-2-3-1'
};

// ============================================================================
// Export
// ============================================================================

export const IT_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_2_1,
  CHAPTER_IT_2_2_2,
  CHAPTER_IT_2_2_3,
  CHAPTER_IT_2_2_4,
  CHAPTER_IT_2_2_5
];

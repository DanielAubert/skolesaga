/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Del 11: Programmering og simulering (KM236)
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1: Introduksjon til Python
// ============================================================================

export const CHAPTER_9_11_1: TextbookChapter = {
  id: '9-11-1',
  courseId: '9',
  chapterNumber: '11.1',
  title: 'Introduksjon til Python',
  description: 'Grunnleggende Python-programmering: variabler, løkker og betingelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  content: [
    // INTRO
    {
      id: '9-11-1-intro',
      type: 'text',
      content: `## Introduksjon til Python

Har du noen gang lurt på hvordan datamaskiner løser matematiske oppgaver? Svaret er **programmering** — vi skriver instruksjoner som datamaskinen følger steg for steg. I dette kapittelet skal du lære det mest populære programmeringsspråket i verden: **Python**.

Python er mye brukt i matematikk, vitenskap og teknologi. Det er enkelt å lære fordi koden ligner på vanlig engelsk, og det er perfekt for å utforske matematiske sammenhenger.

I dette kapittelet skal du lære:

- Hvordan du bruker **variabler** til å lagre tall og tekst
- Hvordan du skriver ut resultater med **print()**
- Hvordan du tar imot brukerinput med **input()**
- Hvordan du bruker **if/else** for å ta valg
- Hvordan du bruker **for-løkker** og **while-løkker** til å gjenta beregninger
- Hvordan du bruker **lister** til å organisere data`,
    },

    // BLOKK 1: Variabler og print()
    {
      id: '9-11-1-def-1',
      type: 'definition',
      title: 'Variabel',
      content: `En **variabel** i Python er et navn som peker på en verdi lagret i datamaskinens minne. Vi lager en variabel ved å bruke **tilordningsoperatoren** \`=\`.

\`\`\`python
alder = 14
navn = "Nora"
pi = 3.14159
\`\`\`

Viktige regler for variabelnavn:
- Kan inneholde bokstaver, tall og understrek \`_\`
- Kan **ikke** starte med et tall
- Kan **ikke** inneholde mellomrom
- Python skiller mellom store og små bokstaver: \`Tall\` og \`tall\` er to forskjellige variabler

**Datatyper:**
- **int** — heltall: \`42\`, \`-7\`, \`0\`
- **float** — desimaltall: \`3.14\`, \`-0.5\`
- **str** — tekst (streng): \`"Hei"\`, \`'Verden'\`
- **bool** — sannhetsverdi: \`True\` eller \`False\``,
    },
    {
      id: '9-11-1-def-2',
      type: 'definition',
      title: 'print() og input()',
      content: `**print()** skriver ut tekst eller verdier til skjermen:

\`\`\`python
print("Hei, verden!")
print(42)
alder = 14
print("Jeg er", alder, "år gammel")
\`\`\`

Vi kan også bruke **f-strenger** for penere utskrift:

\`\`\`python
alder = 14
print(f"Jeg er {alder} år gammel")
\`\`\`

**input()** lar brukeren skrive inn data:

\`\`\`python
navn = input("Hva heter du? ")
alder = int(input("Hvor gammel er du? "))
\`\`\`

Merk: \`input()\` gir alltid tekst tilbake. Bruker vi \`int()\` eller \`float()\` rundt, konverteres teksten til tall.`,
    },
    {
      id: '9-11-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregne areal av en sirkel',
      problem: 'Skriv et Python-program som ber brukeren om radiusen til en sirkel og regner ut arealet. Husk at arealet av en sirkel er $A = \\pi r^2$.',
      solution: `**Løsning:**

\`\`\`python
pi = 3.14159
radius = float(input("Skriv inn radiusen: "))
areal = pi * radius ** 2
print(f"Arealet av sirkelen er {areal:.2f}")
\`\`\`

**Forklaring:**
- Vi lagrer $\\pi$ i variabelen \`pi\`
- Vi bruker \`float(input(...))\` for å lese inn et desimaltall fra brukeren
- Vi beregner arealet med formelen $A = \\pi \\cdot r^2$, der \`**\` betyr «opphøyd i»
- \`:.2f\` i f-strengen betyr at vi viser 2 desimaler

**Testkjøring:**

\`\`\`
Skriv inn radiusen: 5
Arealet av sirkelen er 78.54
\`\`\`

Vi kan sjekke: $A = \\pi \\cdot 5^2 = 3{,}14159 \\cdot 25 \\approx 78{,}54$ \\checkmark`,
    },

    // BLOKK 2: if/else
    {
      id: '9-11-1-def-3',
      type: 'definition',
      title: 'Betingelser: if, elif og else',
      content: `**Betingelser** lar programmet ta valg basert på om noe er sant eller usant:

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\`

Viktige sammenligningsoperatorer:

| Operator | Betydning |
|----------|-----------|
| \`==\` | Er lik |
| \`!=\` | Er ikke lik |
| \`<\` | Mindre enn |
| \`>\` | Større enn |
| \`<=\` | Mindre enn eller lik |
| \`>=\` | Større enn eller lik |

**NB:** Husk innrykket (4 mellomrom) etter kolon! Python bruker innrykk for å vise hvilken kode som hører til betingelsen.`,
    },
    {
      id: '9-11-1-example-2',
      type: 'example',
      title: 'Eksempel: Sjekke om et tall er delelig',
      problem: 'Skriv et program som sjekker om et tall er delelig med både 3 og 5.',
      solution: `**Løsning:**

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall % 3 == 0 and tall % 5 == 0:
    print(f"{tall} er delelig med både 3 og 5")
elif tall % 3 == 0:
    print(f"{tall} er delelig med 3, men ikke med 5")
elif tall % 5 == 0:
    print(f"{tall} er delelig med 5, men ikke med 3")
else:
    print(f"{tall} er ikke delelig med verken 3 eller 5")
\`\`\`

**Forklaring:**
- \`%\` er **modulo-operatoren** — den gir resten ved divisjon
- \`tall % 3 == 0\` betyr «resten når tall deles på 3 er 0», altså er tallet delelig med 3
- \`and\` betyr at **begge** betingelsene må være sanne

**Testkjøring med $\\text{tall} = 15$:**
- $15 \\div 3 = 5$ med rest $0$ \\checkmark
- $15 \\div 5 = 3$ med rest $0$ \\checkmark
- Utskrift: «15 er delelig med både 3 og 5»`,
    },

    // BLOKK 3: Løkker
    {
      id: '9-11-1-text-lokker',
      type: 'text',
      title: 'Løkker — gjenta kode automatisk',
      content: `## Løkker

En av de viktigste tingene i programmering er å kunne **gjenta** noe mange ganger uten å skrive den samme koden om igjen. Til dette bruker vi **løkker**.

Python har to typer løkker:
- **for-løkke**: Brukes når du vet hvor mange ganger du vil gjenta noe
- **while-løkke**: Brukes når du vil gjenta noe så lenge en betingelse er sann`,
    },
    {
      id: '9-11-1-example-3',
      type: 'example',
      title: 'Eksempel: Summere tall med en for-løkke',
      problem: 'Skriv et program som beregner summen $1 + 2 + 3 + \\ldots + 100$ ved hjelp av en for-løkke.',
      solution: `**Løsning:**

\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i
print(f"Summen er {total}")
\`\`\`

**Forklaring:**
- \`range(1, 101)\` gir tallene $1, 2, 3, \\ldots, 100$ (merk: 101 er **ikke** med)
- For hvert tall \`i\` legger vi det til variabelen \`total\`
- Etter løkken skriver vi ut summen

**Resultat:** \`Summen er 5050\`

Vi kan sjekke med Gauss' formel: $\\frac{n(n+1)}{2} = \\frac{100 \\cdot 101}{2} = 5050$ \\checkmark

**while-løkke-versjon:**

\`\`\`python
total = 0
i = 1
while i <= 100:
    total = total + i
    i = i + 1
print(f"Summen er {total}")
\`\`\`

Her gjenta vi **så lenge** \`i <= 100\`. Vi må huske å øke \`i\` med 1 i hvert steg, ellers kjører løkken for alltid!`,
    },

    // BLOKK 4: Lister
    {
      id: '9-11-1-text-lister',
      type: 'text',
      title: 'Lister',
      content: `## Lister

En **liste** i Python er en samling av verdier i en bestemt rekkefølge. Lister lages med hakeparenteser:

\`\`\`python
karakterer = [5, 4, 6, 3, 5, 4]
navn = ["Ola", "Kari", "Per"]
\`\`\`

Nyttige operasjoner med lister:

\`\`\`python
# Hente element (indeks starter på 0)
print(karakterer[0])    # Skriver ut 5
print(karakterer[2])    # Skriver ut 6

# Legge til element
karakterer.append(6)    # Legger til 6 på slutten

# Finne lengden
print(len(karakterer))  # Skriver ut 7

# Gå gjennom med for-løkke
for k in karakterer:
    print(k)
\`\`\`

Lister er nyttige for å lagre og analysere datasett, som for eksempel karakterer, temperaturmålinger eller terningkast.`,
    },

    // OPPGAVER
    {
      id: '9-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Hva skriver dette programmet ut? Prøv å finne svaret uten å kjøre koden.

\`\`\`python
a = 10
b = 3
c = a + b
print(c)
c = c * 2
print(c)
\`\`\``,
        solution: `Programmet skriver ut:
\`\`\`
13
26
\`\`\`
Først er $c = 10 + 3 = 13$. Deretter oppdateres $c$ til $c = 13 \\cdot 2 = 26$.`,
        hints: ['Følg koden linje for linje. Husk at `=` betyr «sett variabelen lik», ikke «er lik» i matematisk forstand.'],
      },
    },
    {
      id: '9-11-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som ber brukeren om to tall, og skriver ut summen, differansen, produktet og kvotienten av tallene.',
        solution: `\`\`\`python
a = float(input("Skriv inn første tall: "))
b = float(input("Skriv inn andre tall: "))
print(f"Summen er {a + b}")
print(f"Differansen er {a - b}")
print(f"Produktet er {a * b}")
if b != 0:
    print(f"Kvotienten er {a / b}")
else:
    print("Kan ikke dele på null!")
\`\`\``,
        hints: ['Bruk `float(input(...))` for å lese inn desimaltall. Husk å sjekke at du ikke deler på null.'],
      },
    },
    {
      id: '9-11-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som ber brukeren om et tall og skriver ut om tallet er partall eller oddetall.',
        solution: `\`\`\`python
tall = int(input("Skriv inn et tall: "))
if tall % 2 == 0:
    print(f"{tall} er et partall")
else:
    print(f"{tall} er et oddetall")
\`\`\`
Vi bruker modulo-operatoren \`%\` for å sjekke resten ved divisjon med 2. Hvis resten er 0, er tallet et partall.`,
        hints: ['Bruk modulo-operatoren `%`. Husk at `tall % 2` gir resten når `tall` deles på 2.'],
      },
    },
    {
      id: '9-11-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som bruker en for-løkke til å skrive ut gangetabellen for et tall som brukeren velger (fra 1 til 10).',
        solution: `\`\`\`python
tall = int(input("Hvilken gangetabell vil du se? "))
for i in range(1, 11):
    print(f"{tall} * {i} = {tall * i}")
\`\`\`

Eksempel med tall = 7:
\`\`\`
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
...
7 * 10 = 70
\`\`\``,
        hints: ['Bruk `range(1, 11)` for å gå gjennom tallene 1 til 10. I hvert steg ganger du det valgte tallet med løkkevariabelen.'],
      },
    },
    {
      id: '9-11-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som bruker en for-løkke til å beregne $n!$ (n fakultet). La brukeren velge $n$. Husk at $n! = 1 \\cdot 2 \\cdot 3 \\cdot \\ldots \\cdot n$ og at $0! = 1$.',
        solution: `\`\`\`python
n = int(input("Skriv inn n: "))
fakultet = 1
for i in range(1, n + 1):
    fakultet = fakultet * i
print(f"{n}! = {fakultet}")
\`\`\`

Test med $n = 5$: $5! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 = 120$.`,
        hints: ['Start med `fakultet = 1` (ikke 0!). Gange med hvert tall i løkken. Bruk `range(1, n + 1)`.'],
      },
    },
    {
      id: '9-11-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som lager en liste med tallene fra 1 til 20, og deretter:
a) Skriver ut alle partallene i listen
b) Beregner summen av alle tallene i listen
c) Finner det største tallet i listen`,
        solution: `\`\`\`python
tall = list(range(1, 21))

# a) Skriv ut partallene
print("Partallene:")
for t in tall:
    if t % 2 == 0:
        print(t, end=" ")
print()

# b) Beregn summen
total = 0
for t in tall:
    total = total + t
print(f"Summen er {total}")

# c) Finn det største
storst = tall[0]
for t in tall:
    if t > storst:
        storst = t
print(f"Det største tallet er {storst}")
\`\`\`

Resultat: Partallene: 2, 4, 6, ..., 20. Summen: $\\frac{20 \\cdot 21}{2} = 210$. Størst: 20.`,
        hints: ['Bruk `list(range(1, 21))` for å lage listen. For å finne partall, sjekk om `t % 2 == 0`. For å finne det største tallet, sammenlign hvert tall med det foreløpig største.'],
      },
    },
    {
      id: '9-11-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som bruker en while-løkke til å gjette et hemmelig tall. Programmet skal generere et tilfeldig tall mellom 1 og 100 (bruk `import random` og `random.randint(1, 100)`), og la brukeren gjette. Etter hvert gjett skal programmet si om gjettet er for høyt, for lavt, eller riktig. Tell antall forsøk.',
        solution: `\`\`\`python
import random

hemmelig = random.randint(1, 100)
forsok = 0

print("Jeg tenker på et tall mellom 1 og 100.")

while True:
    gjett = int(input("Gjett tallet: "))
    forsok = forsok + 1

    if gjett < hemmelig:
        print("For lavt! Prøv igjen.")
    elif gjett > hemmelig:
        print("For høyt! Prøv igjen.")
    else:
        print(f"Riktig! Du brukte {forsok} forsøk.")
        break
\`\`\`

\`break\` avslutter while-løkken når svaret er riktig. En god strategi er å alltid gjette midt i det gjenværende intervallet (binærsøk) — da klarer du det alltid på 7 forsøk eller færre!`,
        hints: ['Bruk `while True:` for å lage en løkke som kjører til du bruker `break`. Sammenlign gjettet med det hemmelige tallet og gi tilbakemelding.'],
      },
    },
    {
      id: '9-11-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-11-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et program som finner alle primtall mellom 2 og 100. Et primtall er et tall større enn 1 som bare er delelig med 1 og seg selv.

Hint: For hvert tall $n$ fra 2 til 100, sjekk om $n$ er delelig med noe tall fra 2 til $n-1$. Hvis ikke, er $n$ et primtall.`,
        solution: `\`\`\`python
print("Primtall mellom 2 og 100:")

for n in range(2, 101):
    er_primtall = True
    for deler in range(2, n):
        if n % deler == 0:
            er_primtall = False
            break
    if er_primtall:
        print(n, end=" ")
\`\`\`

**Resultat:** 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97

Det er 25 primtall mellom 2 og 100. Programmet bruker en **nøstet løkke** — en for-løkke inni en annen for-løkke.`,
        hints: ['Bruk en variabel `er_primtall = True`. For hvert tall fra 2 til n-1, sjekk om n er delelig. Hvis du finner en deler, sett `er_primtall = False` og bruk `break`.'],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Variabler og datatyper**: Å lagre tall, tekst og sannhetsverdier i variabler med tilordningsoperatoren \`=\`
- **print() og input()**: Å skrive ut resultater til skjermen og lese inn data fra brukeren
- **Betingelser (if/elif/else)**: Å la programmet ta valg basert på om noe er sant eller usant
- **Løkker (for og while)**: Å gjenta kode automatisk et bestemt antall ganger eller så lenge en betingelse er sann
- **Lister**: Å organisere flere verdier i en samling med hakeparenteser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Variabel | Et navn som peker på en verdi lagret i datamaskinens minne |
| Datatype | Typen verdi en variabel inneholder: \`int\`, \`float\`, \`str\` eller \`bool\` |
| \`print()\` | Funksjon som skriver ut tekst eller verdier til skjermen |
| \`input()\` | Funksjon som lar brukeren skrive inn data (returnerer alltid tekst) |
| if/elif/else | Betingelser som lar programmet ta valg |
| for-løkke | Gjentar kode et bestemt antall ganger med \`range()\` |
| while-løkke | Gjentar kode så lenge en betingelse er sann |
| Modulo (\`%\`) | Operator som gir resten ved heltallsdivisjon |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-11-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-11-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forutsi hva Python-programmer skriver ut.',
            subTasks: [
              { label: 'a', task: 'Hva skrives ut?\n```python\nx = 5\ny = 3\nprint(x + y)\n```', solution: '$8$' },
              { label: 'b', task: 'Hva skrives ut?\n```python\nx = 10\nx = x + 5\nprint(x)\n```', solution: '$15$' },
              { label: 'c', task: 'Hva skrives ut?\n```python\nradius = 4\npi = 3.14\nareal = pi * radius ** 2\nprint(areal)\n```', solution: '$50.24$ (fordi $3{,}14 \\cdot 4^2 = 3{,}14 \\cdot 16 = 50{,}24$)' },
              { label: 'd', task: 'Hva skrives ut?\n```python\na = 7\nb = 2\nprint(a // b)\nprint(a % b)\n```', solution: '$3$ (heltallsdivisjon) og $1$ (rest), fordi $7 = 2 \\cdot 3 + 1$' },
              { label: 'e', task: 'Hva skrives ut?\n```python\ntall = 15\nif tall % 5 == 0:\n    print("Delelig")\nelse:\n    print("Ikke delelig")\n```', solution: 'Delelig (fordi $15 \\div 5 = 3$ med rest $0$)' },
              { label: 'f', task: 'Hva skrives ut?\n```python\nprint(2 ** 10)\n```', solution: '$1024$ (fordi $2^{10} = 1024$)' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Følg koden linje for linje. Husk at `**` betyr potens, `//` betyr heltallsdivisjon og `%` gir resten.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn med modulo-operatoren og delelighetstester.',
            subTasks: [
              { label: 'a', task: 'Hva er $17 \\; \\% \\; 5$? (Resten når $17$ deles på $5$.)', solution: '$17 \\; \\% \\; 5 = 2$ (fordi $17 = 5 \\cdot 3 + 2$)' },
              { label: 'b', task: 'Hva er $24 \\; \\% \\; 6$?', solution: '$24 \\; \\% \\; 6 = 0$ (fordi $24 = 6 \\cdot 4 + 0$, altså er $24$ delelig med $6$)' },
              { label: 'c', task: 'Hva er $100 \\; \\% \\; 7$?', solution: '$100 \\; \\% \\; 7 = 2$ (fordi $100 = 7 \\cdot 14 + 2$)' },
              { label: 'd', task: 'Et program sjekker om et tall $n$ er partall ved å teste $n \\; \\% \\; 2 == 0$. Forklar hvorfor dette fungerer.', solution: 'Partall er delelige med $2$, altså er resten ved divisjon med $2$ lik $0$. Oddetall gir rest $1$.' },
              { label: 'e', task: 'Hvilke av tallene $42, \\; 57, \\; 63, \\; 80, \\; 91$ er delelige med $7$? Bruk modulo.', solution: '$42 \\; \\% \\; 7 = 0$ (delelig), $57 \\; \\% \\; 7 = 1$ (nei), $63 \\; \\% \\; 7 = 0$ (delelig), $80 \\; \\% \\; 7 = 3$ (nei), $91 \\; \\% \\; 7 = 0$ (delelig). Svar: $42$, $63$ og $91$.' },
              { label: 'f', task: 'Et program tester om et tall er delelig med både $3$ og $4$. Skriv betingelsen med modulo (du trenger ikke skrive hele programmet).', solution: '`tall % 3 == 0 and tall % 4 == 0` (eller ekvivalent: `tall % 12 == 0`)' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Modulo gir resten ved divisjon. Hvis resten er $0$, er tallet delelig.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forutsi resultatet av for-løkker.',
            subTasks: [
              { label: 'a', task: 'Hva skrives ut?\n```python\nfor i in range(5):\n    print(i)\n```', solution: '$0, 1, 2, 3, 4$ (ett tall per linje)' },
              { label: 'b', task: 'Hva skrives ut?\n```python\ntotal = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)\n```', solution: '$15$ (fordi $1 + 2 + 3 + 4 + 5 = 15$)' },
              { label: 'c', task: 'Hva skrives ut?\n```python\nfor i in range(1, 4):\n    print(i * i)\n```', solution: '$1, 4, 9$ (fordi $1^2 = 1$, $2^2 = 4$, $3^2 = 9$)' },
              { label: 'd', task: 'Hva skrives ut?\n```python\nfor i in range(2, 11, 2):\n    print(i)\n```', solution: '$2, 4, 6, 8, 10$ (partallene fra $2$ til $10$, med steg $2$)' },
              { label: 'e', task: 'Hva skrives ut?\n```python\nprodukt = 1\nfor i in range(1, 5):\n    produkt = produkt * i\nprint(produkt)\n```', solution: '$24$ (fordi $1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$, dette er $4!$)' },
              { label: 'f', task: 'Hvor mange ganger kjøres løkken `for i in range(3, 20, 4)`? Hvilke verdier tar `i`?', solution: '`i` tar verdiene $3, 7, 11, 15, 19$, altså kjøres løkken $5$ ganger.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['`range(start, stopp, steg)` gir tallene fra `start` til (men ikke med) `stopp`, med angitt steg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk matematiske formler til å forutsi programresultater.',
            subTasks: [
              { label: 'a', task: 'Et program beregner arealet av en trekant med grunnlinje $g = 12$ og høyde $h = 7$ med formelen `areal = g * h / 2`. Hva skrives ut?', solution: '$\\frac{12 \\cdot 7}{2} = \\frac{84}{2} = 42{,}0$' },
              { label: 'b', task: 'Et program beregner hypotenusen i en rettvinklet trekant med kateter $a = 3$ og $b = 4$: `c = (a**2 + b**2) ** 0.5`. Hva skrives ut?', solution: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5{,}0$' },
              { label: 'c', task: 'Et program beregner `total = 0` og kjører `for i in range(1, 101): total = total + i`. Hva blir `total`?', solution: '$\\sum_{i=1}^{100} i = \\frac{100 \\cdot 101}{2} = 5050$' },
              { label: 'd', task: 'Hva skrives ut av dette programmet?\n```python\ntall = 1\nfor i in range(6):\n    tall = tall * 2\nprint(tall)\n```', solution: '$64$ (fordi vi starter på $1$ og dobler $6$ ganger: $1 \\to 2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64 = 2^6$)' },
              { label: 'e', task: 'Et program beregner gjennomsnitt:\n```python\ntall = [4, 7, 2, 9, 3]\nsnitt = sum(tall) / len(tall)\nprint(snitt)\n```\nHva skrives ut?', solution: '$\\frac{4 + 7 + 2 + 9 + 3}{5} = \\frac{25}{5} = 5{,}0$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Bruk de matematiske formlene du kjenner: areal, Pytagoras, summeformel, potenser.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser og feilsøk programmer med if/else og løkker.',
            subTasks: [
              { label: 'a', task: 'Hva skrives ut?\n```python\nfor tall in range(1, 21):\n    if tall % 3 == 0 and tall % 5 == 0:\n        print(tall)\n```', solution: '$15$ (det eneste tallet mellom $1$ og $20$ som er delelig med både $3$ og $5$)' },
              { label: 'b', task: 'Hvor mange tall mellom $1$ og $100$ er delelige med $7$? (Tenk som en for-løkke med if.)', solution: '$\\lfloor 100 / 7 \\rfloor = 14$ tall (nemlig $7, 14, 21, \\ldots, 98$)' },
              { label: 'c', task: 'Hva skrives ut?\n```python\nx = 100\nwhile x > 1:\n    x = x / 2\n    print(int(x))\n```', solution: '$50, 25, 12, 6, 3, 1$ (halverer gjentatte ganger, avrunder ned med `int()`)' },
              { label: 'd', task: 'Et program teller antall partall i listen `[3, 8, 15, 22, 7, 10, 13, 4]`. Hva blir resultatet?', solution: 'Partallene er $8, 22, 10, 4$. Antall: $4$.' },
              { label: 'e', task: 'Hva skrives ut?\n```python\nliste = [2, 5, 3, 8, 1]\nstorst = liste[0]\nfor tall in liste:\n    if tall > storst:\n        storst = tall\nprint(storst)\n```', solution: '$8$ (programmet finner det største tallet i listen)' },
              { label: 'f', task: 'Et program kjører `for i in range(1, n+1)` og inni løkken summerer det $i^2$. For $n = 5$, hva blir summen?', solution: '$1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Gå gjennom programmet steg for steg og skriv ned verdien av variablene etter hver linje.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-11-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Forstå matematiske algoritmer uttrykt som kode.',
            subTasks: [
              { label: 'a', task: 'Hva gjør dette programmet, og hva skrives ut for `n = 28`?\n```python\nn = 28\nsummer = 0\nfor i in range(1, n):\n    if n % i == 0:\n        summer = summer + i\nprint(summer)\n```', solution: 'Programmet finner summen av alle ekte divisorer av $n$. For $n = 28$: divisorene er $1, 2, 4, 7, 14$. Summen er $1 + 2 + 4 + 7 + 14 = 28$. ($28$ er et perfekt tall fordi summen av divisorene er lik tallet selv.)' },
              { label: 'b', task: 'Et program finner alle primtall opp til $30$ ved å sjekke om hvert tall bare er delelig med $1$ og seg selv. List opp primtallene opp til $30$.', solution: '$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$' },
              { label: 'c', task: 'Hva skrives ut av dette programmet?\n```python\na, b = 0, 1\nfor i in range(8):\n    print(a)\n    a, b = b, a + b\n```', solution: '$0, 1, 1, 2, 3, 5, 8, 13$ (Fibonacci-tallene: hvert tall er summen av de to foregående)' },
              { label: 'd', task: 'Fibonacci-følgen fra c) starter $0, 1, 1, 2, 3, 5, 8, 13, 21, \\ldots$ Hva er det $12$. Fibonacci-tallet? (Tell fra $F_0 = 0$.)', solution: '$F_{12} = 144$ (følgen: $0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144$)' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['For Fibonacci-følgen: hvert tall er summen av de to foregående. For divisorer: et tall $i$ er en divisor av $n$ når $n \\; \\% \\; i = 0$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Variabel', definition: 'Et navn som peker på en verdi lagret i minnet' },
    { term: 'print()', definition: 'Funksjon som skriver ut tekst eller verdier til skjermen' },
    { term: 'input()', definition: 'Funksjon som lar brukeren skrive inn data' },
    { term: 'if/elif/else', definition: 'Betingelser som lar programmet ta valg' },
    { term: 'for-løkke', definition: 'Gjentar kode et bestemt antall ganger' },
    { term: 'while-løkke', definition: 'Gjentar kode så lenge en betingelse er sann' },
    { term: 'Liste', definition: 'En ordnet samling av verdier i hakeparenteser' },
    { term: 'Modulo (%)', definition: 'Gir resten ved heltallsdivisjon' },
  ],
  nextChapter: '9-11-2',
};

// ============================================================================
// Kapittel 11.2: Simulering av tilfeldige forsøk
// ============================================================================

export const CHAPTER_9_11_2: TextbookChapter = {
  id: '9-11-2',
  courseId: '9',
  chapterNumber: '11.2',
  title: 'Simulering av tilfeldige forsøk',
  description: 'Bruk Python til å simulere terningkast, myntkast og andre tilfeldige forsøk. Sammenlign simulert og teoretisk sannsynlighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  content: [
    // INTRO
    {
      id: '9-11-2-intro',
      type: 'text',
      content: `## Simulering av tilfeldige forsøk

Tenk deg at du vil finne ut sannsynligheten for å slå to seksere med to terninger. Du kan beregne det teoretisk, men du kan også **simulere** forsøket med et dataprogram! Ved å la datamaskinen «kaste terningene» mange tusen ganger, kan vi **estimere** sannsynligheten.

Denne metoden kalles **simulering**, og den er spesielt nyttig når det er vanskelig å beregne sannsynligheten teoretisk. Datamaskiner er perfekte til dette — de kan gjøre millioner av forsøk på sekunder.

I dette kapittelet skal du lære:

- Hvordan du bruker \`random\`-modulen i Python til å lage tilfeldige tall
- Hvordan du simulerer myntkast, terningkast og andre forsøk
- Hvordan du sammenligner simulert og teoretisk sannsynlighet
- Hva **store talls lov** betyr i praksis`,
    },

    // BLOKK 1: random-modulen
    {
      id: '9-11-2-def-1',
      type: 'definition',
      title: 'random-modulen',
      content: `Pythons **random**-modul lar oss generere tilfeldige tall. For å bruke den skriver vi \`import random\` øverst i programmet.

Nyttige funksjoner:

\`\`\`python
import random

# Tilfeldig heltall mellom a og b (inkludert begge)
terning = random.randint(1, 6)

# Tilfeldig desimaltall mellom 0 og 1
x = random.random()

# Velge tilfeldig fra en liste
farger = ["rød", "blå", "grønn"]
valg = random.choice(farger)
\`\`\`

Hver gang du kjører programmet, får du (sannsynligvis) forskjellige tall. Det er dette som gjør simulering mulig — vi kan gjøre et tilfeldig forsøk mange ganger.`,
    },
    {
      id: '9-11-2-def-2',
      type: 'definition',
      title: 'Simulering og sannsynlighet',
      content: `En **simulering** er når vi bruker en datamaskin til å gjenta et tilfeldig forsøk mange ganger, og bruker resultatene til å estimere sannsynligheter.

Når vi simulerer $n$ forsøk og en hendelse $A$ inntreffer $k$ ganger, er den **simulerte sannsynligheten**:

$$P(A) \\approx \\frac{k}{n}$$

For eksempel: Hvis vi simulerer 10 000 terningkast og får sekser 1672 ganger, er den simulerte sannsynligheten for sekser:

$$P(\\text{sekser}) \\approx \\frac{1672}{10\\,000} = 0{,}1672$$

Den **teoretiske** sannsynligheten er $P(\\text{sekser}) = \\frac{1}{6} \\approx 0{,}1667$.

Jo flere forsøk vi gjør, desto nærmere kommer den simulerte sannsynligheten den teoretiske. Dette kalles **store talls lov**.`,
    },
    {
      id: '9-11-2-example-1',
      type: 'example',
      title: 'Eksempel: Simulere terningkast',
      problem: 'Skriv et Python-program som simulerer 10 000 kast med en vanlig terning og finner den simulerte sannsynligheten for å slå en sekser.',
      solution: `**Løsning:**

\`\`\`python
import random

antall_kast = 10000
antall_seksere = 0

for i in range(antall_kast):
    kast = random.randint(1, 6)
    if kast == 6:
        antall_seksere = antall_seksere + 1

simulert = antall_seksere / antall_kast
teoretisk = 1 / 6

print(f"Antall seksere: {antall_seksere}")
print(f"Simulert sannsynlighet: {simulert:.4f}")
print(f"Teoretisk sannsynlighet: {teoretisk:.4f}")
\`\`\`

**Typisk resultat:**
\`\`\`
Antall seksere: 1648
Simulert sannsynlighet: 0.1648
Teoretisk sannsynlighet: 0.1667
\`\`\`

Den simulerte verdien er nær den teoretiske $\\frac{1}{6} \\approx 0{,}1667$, men ikke eksakt lik. Kjører vi programmet igjen, får vi et litt annet svar. Med flere kast (f.eks. 1 000 000) kommer vi enda nærmere.`,
    },
    {
      id: '9-11-2-example-2',
      type: 'example',
      title: 'Eksempel: Simulere myntkast',
      problem: 'Skriv et Python-program som simulerer myntkast og finner den simulerte sannsynligheten for å få mynt (krone). Sammenlign med ulike antall kast: 100, 1000, 10 000 og 100 000.',
      solution: `**Løsning:**

\`\`\`python
import random

for antall_kast in [100, 1000, 10000, 100000]:
    antall_mynt = 0
    for i in range(antall_kast):
        kast = random.randint(0, 1)  # 0 = krone, 1 = mynt
        if kast == 1:
            antall_mynt = antall_mynt + 1

    simulert = antall_mynt / antall_kast
    print(f"Kast: {antall_kast:>7}  |  P(mynt) = {simulert:.4f}")

print(f"Teoretisk:          |  P(mynt) = 0.5000")
\`\`\`

**Typisk resultat:**
\`\`\`
Kast:     100  |  P(mynt) = 0.4600
Kast:    1000  |  P(mynt) = 0.5130
Kast:   10000  |  P(mynt) = 0.4987
Kast:  100000  |  P(mynt) = 0.5003
Teoretisk:     |  P(mynt) = 0.5000
\`\`\`

Legg merke til at den simulerte sannsynligheten svinger rundt 0,5, men **svingningene blir mindre** jo flere kast vi gjør. Dette er et eksempel på **store talls lov**: Med mange nok forsøk nærmer den simulerte sannsynligheten seg den teoretiske.`,
    },

    // BLOKK 2: Store talls lov
    {
      id: '9-11-2-def-3',
      type: 'definition',
      title: 'Store talls lov',
      content: `**Store talls lov** sier at når vi gjentar et tilfeldig forsøk mange ganger, vil den **relative frekvensen** (andelen ganger en hendelse inntreffer) nærme seg den **teoretiske sannsynligheten**.

Mer presist: Hvis vi gjentar et forsøk $n$ ganger, og hendelsen $A$ inntreffer $k$ ganger, da gjelder:

$$\\frac{k}{n} \\to P(A) \\quad \\text{når } n \\to \\infty$$

**I praksis betyr dette:**
- Med 10 kast kan resultatet avvike mye fra det forventede
- Med 1000 kast er avviket vanligvis ganske lite
- Med 100 000 kast er avviket typisk svært lite

Store talls lov er grunnen til at simulering fungerer som metode for å estimere sannsynligheter.`,
    },

    // BLOKK 3: Simulering av sammensatte forsøk
    {
      id: '9-11-2-text-sammensatte',
      type: 'text',
      title: 'Sammensatte forsøk',
      content: `## Sammensatte forsøk

Simulering er spesielt nyttig for **sammensatte forsøk**, der vi kombinerer flere tilfeldige hendelser. For eksempel:

- Kaste to terninger og finne summen
- Trekke kuler fra en bolle uten tilbakelegging
- Spille et spill med flere runder

For slike problemer kan det være vanskelig å beregne sannsynligheten teoretisk, men simuleringen er enkel: Vi programmerer forsøket og gjentar det mange ganger!`,
    },
    {
      id: '9-11-2-example-3',
      type: 'example',
      title: 'Eksempel: Sannsynligheten for å slå summen 7 med to terninger',
      problem: 'Skriv et Python-program som simulerer kast med to terninger og finner den simulerte sannsynligheten for at summen blir 7.',
      solution: `**Løsning:**

\`\`\`python
import random

antall_forsok = 100000
antall_sju = 0

for i in range(antall_forsok):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    if terning1 + terning2 == 7:
        antall_sju = antall_sju + 1

simulert = antall_sju / antall_forsok
print(f"Simulert P(sum = 7): {simulert:.4f}")
print(f"Teoretisk P(sum = 7): {6/36:.4f}")
\`\`\`

**Typisk resultat:**
\`\`\`
Simulert P(sum = 7): 0.1664
Teoretisk P(sum = 7): 0.1667
\`\`\`

**Teoretisk beregning:** Det er 6 gunstige utfall som gir summen 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Med $6 \\times 6 = 36$ mulige utfall totalt, er sannsynligheten:

$$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$$

Simuleringen bekrefter dette!`,
    },

    // OPPGAVER
    {
      id: '9-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som simulerer 1000 terningkast og teller hvor mange ganger du slår hvert av tallene 1 til 6. Skriv ut resultatet.',
        solution: `\`\`\`python
import random

teller = [0, 0, 0, 0, 0, 0]

for i in range(1000):
    kast = random.randint(1, 6)
    teller[kast - 1] = teller[kast - 1] + 1

for verdi in range(1, 7):
    print(f"Antall {verdi}ere: {teller[verdi - 1]}")
\`\`\`

Hvert tall bør forekomme omtrent $\\frac{1000}{6} \\approx 167$ ganger.`,
        hints: ['Bruk en liste med 6 elementer (ett for hvert terningresultat). Husk at indekser i Python starter på 0, så terningverdi 1 lagres i indeks 0.'],
      },
    },
    {
      id: '9-11-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som simulerer 10 000 myntkast (der 0 = krone og 1 = mynt). Beregn og skriv ut den simulerte sannsynligheten for mynt. Sammenlign med den teoretiske sannsynligheten $P(\\text{mynt}) = 0{,}5$.',
        solution: `\`\`\`python
import random

antall_kast = 10000
antall_mynt = 0

for i in range(antall_kast):
    if random.randint(0, 1) == 1:
        antall_mynt = antall_mynt + 1

print(f"Simulert P(mynt) = {antall_mynt / antall_kast:.4f}")
print(f"Teoretisk P(mynt) = 0.5000")
\`\`\`

Resultatet bør ligge nær 0,5000 med 10 000 kast.`,
        hints: ['Bruk `random.randint(0, 1)` for å simulere et myntkast. Tell opp hvor mange ganger du får 1 (mynt).'],
      },
    },
    {
      id: '9-11-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et Python-program som simulerer kast med to terninger 100 000 ganger, og finner den simulerte sannsynligheten for at:
a) Summen er 2 (slangøyne)
b) Summen er 12 (to seksere)
c) Summen er 7

Sammenlign med de teoretiske sannsynlighetene.`,
        solution: `\`\`\`python
import random

n = 100000
teller_2 = 0
teller_12 = 0
teller_7 = 0

for i in range(n):
    s = random.randint(1, 6) + random.randint(1, 6)
    if s == 2:
        teller_2 += 1
    if s == 12:
        teller_12 += 1
    if s == 7:
        teller_7 += 1

print(f"P(sum=2):  simulert {teller_2/n:.4f}, teoretisk {1/36:.4f}")
print(f"P(sum=12): simulert {teller_12/n:.4f}, teoretisk {1/36:.4f}")
print(f"P(sum=7):  simulert {teller_7/n:.4f}, teoretisk {6/36:.4f}")
\`\`\`

Teoretiske verdier: $P(2) = \\frac{1}{36} \\approx 0{,}0278$, $P(12) = \\frac{1}{36} \\approx 0{,}0278$, $P(7) = \\frac{6}{36} \\approx 0{,}1667$.`,
        hints: ['Lag tellere for hvert utfall. Beregn summen av to `random.randint(1, 6)` i hvert forsøk.'],
      },
    },
    {
      id: '9-11-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `I en bolle ligger det 5 røde og 3 blå kuler. Du trekker to kuler uten tilbakelegging. Skriv et Python-program som simulerer dette forsøket 100 000 ganger og finner den simulerte sannsynligheten for å trekke to røde kuler.

Hint: Lag en liste med kulene og bruk \`random.sample(kuler, 2)\` for å trekke to tilfeldige kuler.`,
        solution: `\`\`\`python
import random

kuler = ["rød"] * 5 + ["blå"] * 3
antall_forsok = 100000
antall_to_rode = 0

for i in range(antall_forsok):
    trekk = random.sample(kuler, 2)
    if trekk[0] == "rød" and trekk[1] == "rød":
        antall_to_rode += 1

simulert = antall_to_rode / antall_forsok
teoretisk = (5/8) * (4/7)
print(f"Simulert P(to røde) = {simulert:.4f}")
print(f"Teoretisk P(to røde) = {teoretisk:.4f}")
\`\`\`

Teoretisk: $P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0{,}3571$.`,
        hints: ['`random.sample(liste, 2)` trekker 2 tilfeldige elementer uten tilbakelegging. Lag en liste med 5 "rød" og 3 "blå".'],
      },
    },
    {
      id: '9-11-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `**Store talls lov i praksis:** Skriv et program som simulerer terningkast med ulike antall forsøk: 10, 100, 1000, 10 000 og 100 000. For hvert antall, finn den simulerte sannsynligheten for å slå en sekser. Vis at den simulerte verdien nærmer seg $\\frac{1}{6}$ jo flere forsøk du gjør.`,
        solution: `\`\`\`python
import random

print("Store talls lov — sannsynlighet for sekser")
print("-" * 45)

for antall in [10, 100, 1000, 10000, 100000]:
    seksere = 0
    for i in range(antall):
        if random.randint(1, 6) == 6:
            seksere += 1
    simulert = seksere / antall
    avvik = abs(simulert - 1/6)
    print(f"n = {antall:>7}: P = {simulert:.4f}  (avvik: {avvik:.4f})")

print(f"Teoretisk:       P = {1/6:.4f}")
\`\`\`

Typisk resultat viser at avviket fra $\\frac{1}{6}$ blir stadig mindre med flere forsøk.`,
        hints: ['Bruk en ytre for-løkke over listen `[10, 100, 1000, 10000, 100000]`. For hvert antall, gjennomfør simuleringen og beregn avviket fra den teoretiske verdien.'],
      },
    },
    {
      id: '9-11-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Bursdagsparadokset:** I en klasse med 23 elever, hva er sannsynligheten for at minst to elever har bursdag på samme dag? Skriv et Python-program som simulerer dette forsøket 100 000 ganger.

Hint: Generer 23 tilfeldige tall mellom 1 og 365 (bursdager). Sjekk om noen tall er like.`,
        solution: `\`\`\`python
import random

antall_forsok = 100000
antall_treff = 0

for i in range(antall_forsok):
    bursdager = []
    for j in range(23):
        bursdager.append(random.randint(1, 365))

    # Sjekk om det er duplikater
    if len(bursdager) != len(set(bursdager)):
        antall_treff += 1

simulert = antall_treff / antall_forsok
print(f"Simulert P(felles bursdag) = {simulert:.4f}")
print(f"Teoretisk P(felles bursdag) ≈ 0.5073")
\`\`\`

Overraskende nok er sannsynligheten over 50 %! Med bare 23 personer er det mer sannsynlig enn ikke at to deler bursdag. Denne uventede sannsynligheten kalles **bursdagsparadokset**.`,
        hints: ['Bruk `set()` for å fjerne duplikater. Hvis `len(set(bursdager)) < len(bursdager)`, finnes det minst to like bursdager.'],
      },
    },
    {
      id: '9-11-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-11-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Monty Hall-problemet:** I et TV-show er det tre dører. Bak én dør er det en premie, bak de to andre er det ingenting. Du velger en dør. Programlederen (som vet hva som er bak dørene) åpner en av de andre dørene som IKKE har premien. Du får velge: Vil du **bytte** dør eller **beholde** valget ditt?

Skriv et Python-program som simulerer 100 000 runder av Monty Hall-spillet og finner sannsynligheten for å vinne:
a) Hvis du alltid beholder valget
b) Hvis du alltid bytter dør`,
        solution: `\`\`\`python
import random

antall_forsok = 100000
vinn_behold = 0
vinn_bytt = 0

for i in range(antall_forsok):
    # Premien er bak en tilfeldig dør (0, 1 eller 2)
    premie = random.randint(0, 2)
    # Spilleren velger en tilfeldig dør
    valg = random.randint(0, 2)

    # Strategi 1: Behold valget
    if valg == premie:
        vinn_behold += 1

    # Strategi 2: Bytt (du vinner hvis du IKKE valgte riktig først)
    if valg != premie:
        vinn_bytt += 1

print(f"Behold: P(vinn) = {vinn_behold / antall_forsok:.4f}")
print(f"Bytt:   P(vinn) = {vinn_bytt / antall_forsok:.4f}")
\`\`\`

**Resultat:**
\`\`\`
Behold: P(vinn) = 0.3333
Bytt:   P(vinn) = 0.6667
\`\`\`

Overraskende nok **dobler** du sjansene for å vinne ved å bytte! Det er fordi du velger riktig dør $\\frac{1}{3}$ av gangene, så du velger feil $\\frac{2}{3}$ av gangene. Når du bytter etter at en tom dør er åpnet, vinner du i alle disse $\\frac{2}{3}$ tilfellene.`,
        hints: ['Tenk på det slik: Hvis du beholdt valget ditt, vinner du bare hvis du valgte riktig med en gang. Hvis du bytter, vinner du i alle tilfeller der du IKKE valgte riktig først.'],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **random-modulen**: Å bruke \`random.randint()\`, \`random.random()\` og \`random.choice()\` for å generere tilfeldige tall i Python
- **Simulering**: Å gjenta et tilfeldig forsøk mange ganger med en datamaskin for å estimere sannsynligheter
- **Store talls lov**: At den simulerte sannsynligheten nærmer seg den teoretiske når antall forsøk øker
- **Sammensatte forsøk**: Å simulere komplekse situasjoner som to terninger, kuletrekking uten tilbakelegging og Monty Hall-problemet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| \`random.randint(a, b)\` | Genererer et tilfeldig heltall mellom $a$ og $b$ (inkludert begge) |
| Simulering | Å bruke en datamaskin til å gjenta et tilfeldig forsøk mange ganger |
| Simulert sannsynlighet | Antall gunstige utfall delt på totalt antall forsøk: $P(A) \\approx \\frac{k}{n}$ |
| Store talls lov | Prinsippet om at simulert sannsynlighet nærmer seg den teoretiske ved mange forsøk |
| \`random.sample()\` | Trekker tilfeldige elementer fra en liste uten tilbakelegging |
| Bursdagsparadokset | Med 23 personer er det over 50 % sjanse for at to deler bursdag |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-11-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-11-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn teoretisk sannsynlighet for enkle forsøk.',
            subTasks: [
              { label: 'a', task: 'Du kaster én vanlig terning. Hva er sannsynligheten for å få $6$?', solution: '$P(6) = \\frac{1}{6} \\approx 0{,}167$' },
              { label: 'b', task: 'Du kaster én terning. Hva er sannsynligheten for å få et partall?', solution: '$P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2} = 0{,}5$ (utfallene $2, 4, 6$)' },
              { label: 'c', task: 'Du kaster en mynt. Hva er sannsynligheten for kron?', solution: '$P(\\text{kron}) = \\frac{1}{2} = 0{,}5$' },
              { label: 'd', task: 'Du kaster to mynter. List opp alle mulige utfall.', solution: 'KK, KM, MK, MM (4 mulige utfall)' },
              { label: 'e', task: 'Hva er sannsynligheten for å få to kron når du kaster to mynter?', solution: '$P(\\text{KK}) = \\frac{1}{4} = 0{,}25$' },
              { label: 'f', task: 'Du kaster to mynter. Hva er sannsynligheten for å få minst én kron?', solution: '$P(\\text{minst én kron}) = 1 - P(\\text{MM}) = 1 - \\frac{1}{4} = \\frac{3}{4} = 0{,}75$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Sannsynlighet = antall gunstige utfall delt på antall mulige utfall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forutsi resultater av simuleringer.',
            subTasks: [
              { label: 'a', task: 'Et program simulerer $1000$ terningkast og teller antall seksere. Omtrent hvor mange seksere forventer du?', solution: '$\\frac{1}{6} \\cdot 1000 \\approx 167$ seksere' },
              { label: 'b', task: 'Et program simulerer $10\\,000$ myntkast. Omtrent hvor mange ganger forventer du kron?', solution: '$\\frac{1}{2} \\cdot 10\\,000 = 5\\,000$ ganger' },
              { label: 'c', task: 'I en simulering av $500$ kast med to terninger teller programmet antall ganger summen er $7$. Hva forventer du omtrent?', solution: '$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$. Forventet antall: $\\frac{1}{6} \\cdot 500 \\approx 83$' },
              { label: 'd', task: 'En simulering av $100$ terningkast gir $20$ seksere. Er dette et rimelig resultat?', solution: 'Forventet: $\\frac{100}{6} \\approx 16{,}7$. Med bare $100$ kast er $20$ seksere helt rimelig — tilfeldige svingninger er normale ved få forsøk.' },
              { label: 'e', task: 'En simulering av $1\\,000\\,000$ myntkast gir $499\\,823$ kron. Er dette et godt resultat?', solution: 'Ja. Med $1\\,000\\,000$ forsøk forventer vi nær $500\\,000$, og $499\\,823$ er svært nært. Store talls lov i praksis.' },
              { label: 'f', task: 'Hva sier store talls lov om forholdet mellom simulert og teoretisk sannsynlighet?', solution: 'Jo flere forsøk vi gjør, desto nærmere kommer den simulerte sannsynligheten den teoretiske. Men den blir aldri nøyaktig lik — bare stadig nærmere.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Forventet antall = sannsynlighet ganger antall forsøk. Med få forsøk er det normalt med større avvik.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sannsynlighet med to terninger.',
            subTasks: [
              { label: 'a', task: 'Hvor mange mulige utfall er det når du kaster to terninger?', solution: '$6 \\cdot 6 = 36$ mulige utfall' },
              { label: 'b', task: 'På hvor mange måter kan du få summen $2$ med to terninger?', solution: 'Bare $(1, 1)$, altså $1$ måte.' },
              { label: 'c', task: 'På hvor mange måter kan du få summen $7$ med to terninger? List opp kombinasjonene.', solution: '$(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, altså $6$ måter.' },
              { label: 'd', task: 'Hva er sannsynligheten for å få summen $7$?', solution: '$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}167$' },
              { label: 'e', task: 'Hva er sannsynligheten for å få to like (et par)?', solution: 'Parene er $(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$, altså $6$ stykker. $P = \\frac{6}{36} = \\frac{1}{6}$' },
              { label: 'f', task: 'Hvilken sum er mest sannsynlig? Begrunn.', solution: 'Sum $7$ er mest sannsynlig med $6$ av $36$ mulige kombinasjoner. Sum $6$ og $8$ har $5$ kombinasjoner hver, og det avtar symmetrisk utover.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Lag en systematisk liste over alle kombinasjoner, eller bruk en tabell der rad er terning 1 og kolonne er terning 2.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Beregn sannsynligheter som kan simuleres med Python.',
            subTasks: [
              { label: 'a', task: 'Du trekker ett kort fra en vanlig kortstokk (52 kort). Hva er sannsynligheten for å trekke et ess?', solution: '$P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13} \\approx 0{,}077$' },
              { label: 'b', task: 'Du trekker to kort uten tilbakelegging. Hva er sannsynligheten for at begge er hjerter?', solution: '$P = \\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{156}{2652} = \\frac{1}{17} \\approx 0{,}059$' },
              { label: 'c', task: 'En pose inneholder $3$ røde og $5$ blå kuler. Du trekker $2$ kuler uten tilbakelegging. Hva er sannsynligheten for at begge er røde?', solution: '$P = \\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28} \\approx 0{,}107$' },
              { label: 'd', task: 'I oppgave c), hva er sannsynligheten for å trekke én rød og én blå (i vilkårlig rekkefølge)?', solution: '$P = \\frac{3}{8} \\cdot \\frac{5}{7} + \\frac{5}{8} \\cdot \\frac{3}{7} = \\frac{15}{56} + \\frac{15}{56} = \\frac{30}{56} = \\frac{15}{28} \\approx 0{,}536$' },
              { label: 'e', task: 'Et program simulerer kuletrekking $10\\,000$ ganger og finner at begge er røde $1\\,087$ ganger. Beregn den simulerte sannsynligheten og sammenlign med svaret i c).', solution: 'Simulert: $\\frac{1\\,087}{10\\,000} = 0{,}1087$. Teoretisk: $0{,}107$. Forskjellen er svært liten, noe som bekrefter simuleringen.' },
              { label: 'f', task: 'Du kaster en terning 3 ganger. Hva er sannsynligheten for å ikke få noen sekser?', solution: '$P(\\text{ingen 6}) = \\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216} \\approx 0{,}579$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Ved trekking uten tilbakelegging endres antall gjenstående kuler/kort for hvert trekk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser simuleringsprogrammer og forutsi resultater.',
            subTasks: [
              { label: 'a', task: 'Et program simulerer kast av $3$ mynter og teller antall ganger alle tre viser kron. Hva er den teoretiske sannsynligheten?', solution: '$P(\\text{KKK}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} = 0{,}125$' },
              { label: 'b', task: 'I simuleringen fra a) med $8000$ forsøk, omtrent hvor mange ganger forventer du tre kron?', solution: '$0{,}125 \\cdot 8000 = 1000$ ganger' },
              { label: 'c', task: 'Et program trekker $2$ tall fra listen `[1, 2, 3, 4, 5]` uten tilbakelegging og sjekker om summen er $6$. Hvilke par gir summen $6$?', solution: '$(1, 5), (2, 4), (5, 1), (4, 2)$ — men siden rekkefølge ikke spiller rolle ved trekking: $(1, 5)$ og $(2, 4)$, altså $2$ gunstige par av $\\binom{5}{2} = 10$ mulige. $P = \\frac{2}{10} = 0{,}2$' },
              { label: 'd', task: 'Et program kaster en terning gjentatte ganger til det kommer en $6$. Hva er den forventede (gjennomsnittlige) antall kast?', solution: 'Forventet antall kast: $\\frac{1}{P(6)} = \\frac{1}{1/6} = 6$ kast.' },
              { label: 'e', task: 'I Monty Hall-problemet: du velger dør 1, verten åpner dør 3 (som har en geit). Bør du bytte til dør 2? Hva er sannsynligheten for å vinne hvis du bytter?', solution: 'Ja, du bør bytte. Sannsynligheten for å vinne ved å bytte er $\\frac{2}{3} \\approx 0{,}667$, mens den er bare $\\frac{1}{3}$ hvis du beholder.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['For uavhengige hendelser ganger du sannsynlighetene. For «minst én» er det ofte enklest å bruke komplementet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-11-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte sannsynlighetsberegninger.',
            subTasks: [
              { label: 'a', task: 'Du kaster to terninger. Hva er sannsynligheten for at produktet av de to terningene er delelig med $6$?', solution: 'Vi trenger at produktet er delelig med $6 = 2 \\cdot 3$. Vi kan telle systematisk: av $36$ utfall gir $15$ et produkt delelig med $6$. $P = \\frac{15}{36} = \\frac{5}{12} \\approx 0{,}417$' },
              { label: 'b', task: 'En klasse har $12$ jenter og $8$ gutter. Læreren trekker $3$ tilfeldig elever. Hva er sannsynligheten for at alle tre er jenter?', solution: '$P = \\frac{12}{20} \\cdot \\frac{11}{19} \\cdot \\frac{10}{18} = \\frac{1320}{6840} = \\frac{11}{57} \\approx 0{,}193$' },
              { label: 'c', task: 'Du kaster en terning $4$ ganger. Hva er sannsynligheten for å få minst én sekser?', solution: '$P(\\text{minst én 6}) = 1 - P(\\text{ingen 6}) = 1 - \\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0{,}518$' },
              { label: 'd', task: 'I bursdagsparadokset: med $23$ personer, hva er sannsynligheten for at minst to deler bursdag? (Du trenger bare sette opp uttrykket, ikke beregne nøyaktig.)', solution: '$P = 1 - \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdots \\frac{343}{365} = 1 - \\prod_{k=0}^{22} \\frac{365 - k}{365} \\approx 0{,}507$. Altså over $50\\%$!' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Bruk komplementmetoden: $P(\\text{minst én}) = 1 - P(\\text{ingen})$. Ved trekking uten tilbakelegging reduseres antallet for hvert trekk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'random-modulen', definition: 'Pythons bibliotek for å generere tilfeldige tall' },
    { term: 'random.randint(a, b)', definition: 'Genererer et tilfeldig heltall mellom a og b (inkludert begge)' },
    { term: 'Simulering', definition: 'Bruke en datamaskin til å gjenta et tilfeldig forsøk mange ganger' },
    { term: 'Simulert sannsynlighet', definition: 'Antall gunstige utfall delt på totalt antall forsøk' },
    { term: 'Store talls lov', definition: 'Simulert sannsynlighet nærmer seg den teoretiske når antall forsøk øker' },
    { term: 'random.sample()', definition: 'Trekker tilfeldige elementer fra en liste uten tilbakelegging' },
  ],
  prevChapter: '9-11-1',
  nextChapter: '9-11-3',
};

// ============================================================================
// Kapittel 11.3: Matematisk modellering med kode
// ============================================================================

export const CHAPTER_9_11_3: TextbookChapter = {
  id: '9-11-3',
  courseId: '9',
  chapterNumber: '11.3',
  title: 'Matematisk modellering med kode',
  description: 'Bruk Python til å modellere lineær og eksponentiell vekst, lage tabeller og løse matematiske problemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  content: [
    // INTRO
    {
      id: '9-11-3-intro',
      type: 'text',
      content: `## Matematisk modellering med kode

I matematikk lager vi ofte **modeller** — forenklede beskrivelser av virkeligheten. En modell kan for eksempel beskrive hvordan en befolkning vokser, hvordan temperaturen endrer seg, eller hvor mye penger du sparer over tid.

Med programmering kan vi gjøre modellene **levende**: vi kan beregne verdier for mange tidspunkter, finne når noe skjer, og skrive ut tabeller som viser utviklingen.

I dette kapittelet skal du:

- Modellere **lineær vekst** (jevn økning) med kode
- Modellere **eksponentiell vekst** (prosentvis økning) med kode
- Lage **tabeller** som viser utviklingen over tid
- Bruke programmering til å **løse likninger** ved systematisk prøving
- Utforske matematiske sammenhenger med kode`,
    },

    // BLOKK 1: Lineær vekst
    {
      id: '9-11-3-def-1',
      type: 'definition',
      title: 'Lineær vekst',
      content: `Ved **lineær vekst** øker (eller minker) en størrelse med et **fast beløp** for hvert tidssteg. Den matematiske modellen er:

$$y = ax + b$$

der $a$ er **stigningstallet** (fast endring per steg) og $b$ er **startverdien**.

I Python kan vi modellere dette med en løkke:

\`\`\`python
startverdi = 1000  # b: startverdien
endring = 50       # a: fast endring per måned

verdi = startverdi
for maned in range(1, 13):
    verdi = verdi + endring
    print(f"Måned {maned}: {verdi} kr")
\`\`\`

Her øker verdien med 50 kr for hver måned — en **jevn økning**.`,
    },
    {
      id: '9-11-3-example-1',
      type: 'example',
      title: 'Eksempel: Spareplan med fast månedlig beløp',
      problem: 'Ola setter inn 500 kr i sparebøssen hver måned. Han har 2000 kr fra før. Skriv et Python-program som viser hvor mye Ola har etter hver måned i ett år. Hvor lang tid tar det før han har 10 000 kr?',
      solution: `**Løsning:**

\`\`\`python
saldo = 2000
innskudd = 500

print(f"Start: {saldo} kr")
print("-" * 25)

for maned in range(1, 13):
    saldo = saldo + innskudd
    print(f"Måned {maned:>2}: {saldo} kr")

# Finn når han når 10 000 kr
saldo = 2000
maned = 0
while saldo < 10000:
    saldo = saldo + innskudd
    maned = maned + 1

print(f"\\nOla når 10 000 kr etter {maned} måneder.")
\`\`\`

**Resultat:**
\`\`\`
Start: 2000 kr
-------------------------
Måned  1: 2500 kr
Måned  2: 3000 kr
Måned  3: 3500 kr
...
Måned 12: 8000 kr

Ola når 10 000 kr etter 16 måneder.
\`\`\`

Vi kan sjekke med formelen: $y = 500x + 2000$. Vi løser $500x + 2000 = 10\\,000$:

$$500x = 8000 \\implies x = 16 \\text{ måneder}$$ \\checkmark`,
    },

    // BLOKK 2: Eksponentiell vekst
    {
      id: '9-11-3-def-2',
      type: 'definition',
      title: 'Eksponentiell vekst',
      content: `Ved **eksponentiell vekst** øker (eller minker) en størrelse med en **fast prosentandel** for hvert tidssteg. Den matematiske modellen er:

$$y = a \\cdot b^x$$

der $a$ er **startverdien** og $b$ er **vekstfaktoren**.

- Hvis veksten er $p\\%$, er vekstfaktoren $b = 1 + \\frac{p}{100}$
- Vekst: $b > 1$ (f.eks. $b = 1{,}05$ for 5 % økning)
- Reduksjon: $b < 1$ (f.eks. $b = 0{,}90$ for 10 % reduksjon)

I Python:

\`\`\`python
startverdi = 1000
vekstfaktor = 1.05  # 5 % vekst per år

verdi = startverdi
for aar in range(1, 11):
    verdi = verdi * vekstfaktor
    print(f"År {aar}: {verdi:.2f} kr")
\`\`\`

Her ganger vi med vekstfaktoren i hvert steg — verdien vokser **raskere og raskere**.`,
    },
    {
      id: '9-11-3-example-2',
      type: 'example',
      title: 'Eksempel: Bankinnskudd med rentes rente',
      problem: 'Kari setter 5000 kr i banken med 3 % årlig rente (rentes rente). Skriv et program som viser saldoen hvert år i 20 år. Hvor lang tid tar det før pengene er doblet?',
      solution: `**Løsning:**

\`\`\`python
saldo = 5000
rente = 0.03
vekstfaktor = 1 + rente

print(f"Start: {saldo:.2f} kr")
print("-" * 30)

for aar in range(1, 21):
    saldo = saldo * vekstfaktor
    print(f"År {aar:>2}: {saldo:.2f} kr")

# Finn doblingstiden
saldo = 5000
aar = 0
while saldo < 10000:
    saldo = saldo * vekstfaktor
    aar = aar + 1

print(f"\\nPengene er doblet etter {aar} år.")
\`\`\`

**Utdrag av resultatet:**
\`\`\`
Start: 5000.00 kr
------------------------------
År  1: 5150.00 kr
År  2: 5304.50 kr
År  5: 5796.37 kr
År 10: 6719.58 kr
År 15: 7789.81 kr
År 20: 9030.56 kr

Pengene er doblet etter 24 år.
\`\`\`

Vi kan sjekke med modellen: $y = 5000 \\cdot 1{,}03^x$. For dobling: $5000 \\cdot 1{,}03^x = 10\\,000$, altså $1{,}03^x = 2$.

En tommelfingerregel sier at doblingstiden er omtrent $\\frac{72}{p}$ år der $p$ er rentesatsen i prosent: $\\frac{72}{3} = 24$ år. \\checkmark`,
    },

    // BLOKK 3: Løse likninger med programmering
    {
      id: '9-11-3-text-likninger',
      type: 'text',
      title: 'Løse likninger med systematisk prøving',
      content: `## Løse likninger med systematisk prøving

Noen likninger er vanskelige å løse for hånd, men med programmering kan vi finne **tilnærmede løsninger** ved å prøve mange verdier systematisk.

Metoden kalles **numerisk løsning** eller **brute force**:

1. Velg et intervall der løsningen sannsynligvis befinner seg
2. Prøv mange verdier i dette intervallet
3. Finn verdien som gir den minste forskjellen mellom venstre og høyre side

Python er perfekt for dette fordi den kan prøve tusenvis av verdier på brøkdelen av et sekund.`,
    },
    {
      id: '9-11-3-def-3',
      type: 'definition',
      title: 'Numerisk løsning av likninger',
      content: `For å løse en likning $f(x) = 0$ numerisk, prøver vi mange verdier av $x$ og finner den som gir $f(x)$ nærmest 0:

\`\`\`python
# Løs x^2 - 5 = 0 (altså finn tilnærmet verdi av sqrt(5))
beste_x = 0
minste_avvik = 1000  # Start med et stort tall

for i in range(10001):
    x = i / 10000 * 4  # Prøv verdier fra 0 til 4
    avvik = abs(x**2 - 5)
    if avvik < minste_avvik:
        minste_avvik = avvik
        beste_x = x

print(f"x ≈ {beste_x:.4f}")
\`\`\`

Her prøver vi 10 001 verdier mellom 0 og 4, og finner den som gir $x^2$ nærmest 5. Jo flere verdier vi prøver, desto mer nøyaktig blir svaret.`,
    },
    {
      id: '9-11-3-example-3',
      type: 'example',
      title: 'Eksempel: Når har sparekontoen nok penger?',
      problem: `Ola sparer 200 kr i måneden i en konto med 0,3 % månedlig rente (rentes rente). Han starter med 0 kr. Skriv et Python-program som finner ut:
a) Hvor mye har han etter 2 år?
b) Når har han spart 50 000 kr?`,
      solution: `**Løsning:**

\`\`\`python
rente = 0.003  # 0,3 % per måned
innskudd = 200

# a) Beregn saldo etter 2 år (24 måneder)
saldo = 0
for maned in range(1, 25):
    saldo = saldo * (1 + rente) + innskudd

print(f"a) Etter 2 år: {saldo:.2f} kr")

# b) Finn når han når 50 000 kr
saldo = 0
maned = 0
while saldo < 50000:
    saldo = saldo * (1 + rente) + innskudd
    maned += 1

aar = maned // 12
rest_mnd = maned % 12
print(f"b) Han når 50 000 kr etter {maned} måneder ({aar} år og {rest_mnd} mnd)")
\`\`\`

**Resultat:**
\`\`\`
a) Etter 2 år: 4964.97 kr
b) Han når 50 000 kr etter 184 måneder (15 år og 4 mnd)
\`\`\`

**Forklaring:** Hver måned legger vi først til renter på eksisterende saldo (gange med $1{,}003$), og deretter legger vi til det nye innskuddet på 200 kr. Med rentes rente vokser saldoen raskere og raskere.`,
    },

    // OPPGAVER
    {
      id: '9-11-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En bil kjører med konstant fart 80 km/t. Skriv et Python-program som lager en tabell som viser hvor langt bilen har kjørt etter 1, 2, 3, ..., 10 timer. Bruk formelen $s = v \\cdot t$ der $s$ er strekning, $v$ er fart og $t$ er tid.',
        solution: `\`\`\`python
fart = 80  # km/t

print("Timer | Strekning (km)")
print("-" * 25)
for t in range(1, 11):
    strekning = fart * t
    print(f"  {t:>2}   |    {strekning}")
\`\`\`

Resultat: Etter 1 time: 80 km, 2 timer: 160 km, ..., 10 timer: 800 km. Dette er lineær vekst med $s = 80t$.`,
        hints: ['Bruk en for-løkke fra 1 til 10. I hvert steg regner du ut strekning = fart * tid.'],
      },
    },
    {
      id: '9-11-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En by har 25 000 innbyggere og vokser med 2 % per år. Skriv et Python-program som lager en tabell over befolkningen for hvert av de neste 10 årene.',
        solution: `\`\`\`python
befolkning = 25000
vekstfaktor = 1.02

print("År | Befolkning")
print("-" * 25)
print(f"  0 | {befolkning:.0f}")
for aar in range(1, 11):
    befolkning = befolkning * vekstfaktor
    print(f" {aar:>2} | {befolkning:.0f}")
\`\`\`

Etter 10 år: $25\\,000 \\cdot 1{,}02^{10} \\approx 30\\,475$ innbyggere.`,
        hints: ['Start med `befolkning = 25000`. Gang med `1.02` i hvert steg for å legge til 2 % vekst.'],
      },
    },
    {
      id: '9-11-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et Python-program som sammenligner lineær og eksponentiell vekst:
- Lineær: Starter på 100, øker med 50 per år
- Eksponentiell: Starter på 100, øker med 10 % per år

Lag en tabell for 20 år som viser begge verdiene. Når blir den eksponentielle veksten større enn den lineære?`,
        solution: `\`\`\`python
lin = 100
eksp = 100

print(f"{'År':>3} | {'Lineær':>10} | {'Eksponentiell':>14}")
print("-" * 35)

krysset = False
for aar in range(0, 21):
    if aar > 0:
        lin = lin + 50
        eksp = eksp * 1.10
    if eksp > lin and not krysset:
        print(f" {aar:>2} | {lin:>10.1f} | {eksp:>14.1f}  <-- krysningspunkt")
        krysset = True
    else:
        print(f" {aar:>2} | {lin:>10.1f} | {eksp:>14.1f}")
\`\`\`

Eksponentiell vekst tar over etter ca. 16-17 år. Til å begynne med ser lineær vekst «raskere» ut, men eksponentiell vekst akselererer og tar igjen.`,
        hints: ['Bruk to variabler: `lin` for lineær og `eksp` for eksponentiell. Oppdater begge i hvert steg og sjekk når `eksp > lin`.'],
      },
    },
    {
      id: '9-11-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk Python til å finne en tilnærmet løsning av likningen $x^3 = 100$ ved å prøve verdier av $x$ mellom 0 og 10. Finn $x$ med to desimalers nøyaktighet.`,
        solution: `\`\`\`python
beste_x = 0
minste_avvik = 1000

for i in range(10001):
    x = i / 1000   # Prøv verdier fra 0.000 til 10.000
    avvik = abs(x**3 - 100)
    if avvik < minste_avvik:
        minste_avvik = avvik
        beste_x = x

print(f"x ≈ {beste_x:.3f}")
print(f"Sjekk: {beste_x}^3 = {beste_x**3:.3f}")
\`\`\`

Resultat: $x \\approx 4{,}642$ fordi $4{,}642^3 \\approx 99{,}97 \\approx 100$. Den eksakte verdien er $\\sqrt[3]{100} \\approx 4{,}6416$.`,
        hints: ['Prøv verdier fra 0 til 10 i små steg. For hvert x, beregn $|x^3 - 100|$ og finn den x-verdien som gir det minste avviket.'],
      },
    },
    {
      id: '9-11-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har 10 000 kr og vil kjøpe en mobiltelefon som koster 12 000 kr. Du sparer 400 kr per måned. Skriv et Python-program som finner ut:
a) Etter hvor mange måneder har du nok penger?
b) Hvis mobilens pris faller med 2 % per måned (den blir billigere med tiden), etter hvor mange måneder har du råd?`,
        solution: `\`\`\`python
# a) Uten prisfall
saldo = 10000
pris = 12000
maned = 0
while saldo < pris:
    saldo += 400
    maned += 1
print(f"a) Du har nok etter {maned} måneder (saldo: {saldo} kr)")

# b) Med 2 % prisfall per måned
saldo = 10000
pris = 12000
maned = 0
while saldo < pris:
    saldo += 400
    pris = pris * 0.98
    maned += 1
print(f"b) Med prisfall: {maned} måneder (saldo: {saldo:.0f} kr, pris: {pris:.0f} kr)")
\`\`\`

a) Etter 5 måneder ($10\\,000 + 5 \\cdot 400 = 12\\,000$).
b) Med prisfall trengs det færre måneder fordi prisen synker mens du sparer.`,
        hints: ['Bruk en while-løkke som kjører så lenge `saldo < pris`. I del b) må du oppdatere både saldo og pris i hver runde.'],
      },
    },
    {
      id: '9-11-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Fibonaccitallene:** Tallrekken $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$ kalles Fibonacci-tallene. Hvert tall er summen av de to forrige: $F_n = F_{n-1} + F_{n-2}$.

Skriv et Python-program som:
a) Skriver ut de 30 første Fibonacci-tallene
b) Beregner forholdet $\\frac{F_n}{F_{n-1}}$ for hvert Fibonacci-tall og viser at forholdet nærmer seg det gylne snitt $\\varphi \\approx 1{,}6180$`,
        solution: `\`\`\`python
# a) De 30 første Fibonacci-tallene
a, b = 1, 1
fib = [a, b]
for i in range(28):
    a, b = b, a + b
    fib.append(b)

print("De 30 første Fibonacci-tallene:")
for i, f in enumerate(fib, 1):
    print(f"F({i}) = {f}")

# b) Forholdet mellom påfølgende Fibonacci-tall
print("\\nForholdet F(n)/F(n-1):")
print("-" * 35)
for i in range(1, len(fib)):
    forhold = fib[i] / fib[i-1]
    print(f"F({i+1})/F({i}) = {fib[i]}/{fib[i-1]} = {forhold:.6f}")

print(f"\\nDet gylne snitt φ ≈ 1.618034")
\`\`\`

Allerede etter 10-15 tall er forholdet veldig nært det gylne snitt $\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}6180$.`,
        hints: ['Start med `a = 1, b = 1`. I hvert steg: `a, b = b, a + b` gir neste Fibonacci-tall. Lagre tallene i en liste.'],
      },
    },
    {
      id: '9-11-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Smittespredning:** I starten av en epidemi er 10 personer smittet. Hver dag smitter hver syk person i gjennomsnitt 0,3 nye personer, men 10 % av de syke blir friske. Skriv et Python-program som simulerer de første 30 dagene av epidemien.

Formler per dag:
- Nye smittede: $\\text{syke} \\cdot 0{,}3$
- Friskmeldte: $\\text{syke} \\cdot 0{,}10$
- Oppdatering: $\\text{syke} = \\text{syke} + \\text{nye} - \\text{friske}$

Etter hvor mange dager er det flest syke samtidig?`,
        solution: `\`\`\`python
syke = 10
smitterate = 0.3
friskrate = 0.10

maks_syke = syke
maks_dag = 0

print(f"{'Dag':>4} | {'Syke':>8} | {'Nye':>8} | {'Friske':>8}")
print("-" * 40)

for dag in range(1, 31):
    nye = syke * smitterate
    friske = syke * friskrate
    syke = syke + nye - friske

    if syke > maks_syke:
        maks_syke = syke
        maks_dag = dag

    print(f" {dag:>3} | {syke:>8.1f} | {nye:>8.1f} | {friske:>8.1f}")

print(f"\\nFlest syke: {maks_syke:.0f} personer (dag {maks_dag})")
\`\`\`

Siden smitteraten (0,3) er større enn friskraten (0,10), øker antall syke eksponentielt. I denne enkle modellen (uten begrensning av befolkningsstørrelse) fortsetter veksten, men i virkeligheten flater kurven ut fordi man til slutt går tom for nye folk å smitte.`,
        hints: ['Bruk variablene `nye = syke * 0.3` og `friske = syke * 0.10` i hvert steg. Hold styr på den høyeste verdien for å finne toppen.'],
      },
    },
    {
      id: '9-11-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-11-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Collatz-formodningen:** Ta et positivt heltall $n$.
- Hvis $n$ er partall: del på 2
- Hvis $n$ er oddetall: gang med 3 og legg til 1

Gjenta. Formodningen sier at du alltid ender opp på 1, uansett startverdi.

Skriv et Python-program som:
a) Viser sekvensen for $n = 27$ (denne er overraskende lang!)
b) Finner hvilken startverdi mellom 1 og 1000 som gir den lengste sekvensen`,
        solution: `\`\`\`python
# a) Collatz-sekvensen for n = 27
n = 27
sekvens = [n]
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    sekvens.append(n)

print(f"a) Sekvensen for 27 har {len(sekvens)} steg")
print(f"   De 10 første: {sekvens[:10]}")
print(f"   Maks verdi: {max(sekvens)}")

# b) Lengste sekvens for startverdier 1-1000
lengste = 0
beste_n = 0

for start in range(1, 1001):
    n = start
    lengde = 1
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        lengde += 1
    if lengde > lengste:
        lengste = lengde
        beste_n = start

print(f"\\nb) Lengste sekvens: n = {beste_n} med {lengste} steg")
\`\`\`

For $n = 27$ er sekvensen 112 steg lang og når en maksverdi på 9232! Den startverdien mellom 1 og 1000 med lengst sekvens er $n = 871$ (179 steg).`,
        hints: ['Bruk `//` for heltallsdivisjon. `while n != 1` kjører til sekvensen når 1. For del b) trenger du en ytre løkke over alle startverdier.'],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lineær vekst med kode**: Å modellere jevn økning ($y = ax + b$) ved å legge til et fast beløp i hvert steg i en løkke
- **Eksponentiell vekst med kode**: Å modellere prosentvis økning ($y = a \\cdot b^x$) ved å gange med en vekstfaktor i hvert steg
- **Lage tabeller**: Å bruke løkker til å beregne og skrive ut verdier for mange tidspunkter
- **Numerisk løsning**: Å finne tilnærmede løsninger av likninger ved å prøve mange verdier systematisk med en datamaskin

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Lineær vekst | Størrelsen øker med et fast beløp for hvert tidssteg: $y = ax + b$ |
| Eksponentiell vekst | Størrelsen øker med en fast prosentandel for hvert tidssteg: $y = a \\cdot b^x$ |
| Vekstfaktor | Tallet vi ganger med for hvert steg; $b = 1 + \\frac{p}{100}$ for $p\\%$ vekst |
| Numerisk løsning | Å finne en tilnærmet løsning ved systematisk prøving av mange verdier |
| Modellering | Å bruke matematikk og kode til å beskrive og forutsi virkelige fenomener |
| Doblingstid | Tiden det tar for en størrelse å doble seg ved eksponentiell vekst |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-11-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-11-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forstå lineær vekst og beregn verdier.',
            subTasks: [
              { label: 'a', task: 'En sparekonto starter med $2000$ kr. Hvert år setter du inn $500$ kr. Skriv opp en formel for beløpet $y$ etter $x$ år.', solution: '$y = 500x + 2000$' },
              { label: 'b', task: 'Bruk formelen fra a) til å beregne beløpet etter $5$ år.', solution: '$y = 500 \\cdot 5 + 2000 = 2500 + 2000 = 4500$ kr' },
              { label: 'c', task: 'Bruk formelen fra a) til å finne etter hvor mange år du har $6000$ kr.', solution: '$6000 = 500x + 2000 \\Rightarrow 500x = 4000 \\Rightarrow x = 8$ år' },
              { label: 'd', task: 'Hva er stigningstallet i formelen fra a)? Hva betyr det i praksis?', solution: 'Stigningstallet er $500$. Det betyr at beløpet øker med $500$ kr per år.' },
              { label: 'e', task: 'Et program kjører `verdi = 2000` og deretter en løkke som kjører $10$ ganger med `verdi = verdi + 500` inni. Hva er verdien til slutt?', solution: '$2000 + 10 \\cdot 500 = 2000 + 5000 = 7000$ kr' },
              { label: 'f', task: 'En annen sparekonto starter med $5000$ kr og du tar ut $300$ kr per måned. Etter hvor mange måneder er kontoen tom?', solution: '$0 = 5000 - 300x \\Rightarrow 300x = 5000 \\Rightarrow x = 16{,}\\overline{6}$. Etter $16$ måneder har du $200$ kr igjen, etter $17$ måneder er kontoen tom.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Lineær vekst: $y = ax + b$, der $a$ er endring per steg og $b$ er startverdien.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forstå eksponentiell vekst og beregn verdier.',
            subTasks: [
              { label: 'a', task: 'En bakteriekultur starter med $100$ bakterier og dobler seg hver time. Skriv opp en formel for antall bakterier $y$ etter $x$ timer.', solution: '$y = 100 \\cdot 2^x$' },
              { label: 'b', task: 'Beregn antall bakterier etter $5$ timer.', solution: '$y = 100 \\cdot 2^5 = 100 \\cdot 32 = 3200$ bakterier' },
              { label: 'c', task: 'Beregn antall bakterier etter $10$ timer.', solution: '$y = 100 \\cdot 2^{10} = 100 \\cdot 1024 = 102\\,400$ bakterier' },
              { label: 'd', task: 'Hva er vekstfaktoren i formelen fra a)?', solution: 'Vekstfaktoren er $2$, som tilsvarer $100\\%$ vekst per time.' },
              { label: 'e', task: 'Et program kjører `antall = 100` og deretter en løkke som kjører $4$ ganger med `antall = antall * 2` inni. Hva er verdien til slutt?', solution: '$100 \\cdot 2^4 = 100 \\cdot 16 = 1600$ bakterier' },
              { label: 'f', task: 'Etter hvor mange timer er det mer enn $50\\,000$ bakterier? (Prøv systematisk.)', solution: '$2^x > 500$. Vi prøver: $2^8 = 256$, $2^9 = 512 > 500$. Altså etter $9$ timer: $100 \\cdot 512 = 51\\,200 > 50\\,000$.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Eksponentiell vekst: $y = a \\cdot b^x$, der $a$ er startverdien og $b$ er vekstfaktoren.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn vekstfaktor fra prosent.',
            subTasks: [
              { label: 'a', task: 'Hva er vekstfaktoren ved $5\\%$ økning per år?', solution: '$b = 1 + \\frac{5}{100} = 1{,}05$' },
              { label: 'b', task: 'Hva er vekstfaktoren ved $3\\%$ nedgang per år?', solution: '$b = 1 - \\frac{3}{100} = 0{,}97$' },
              { label: 'c', task: 'En investering på $10\\,000$ kr vokser med $8\\%$ per år. Hva er verdien etter $3$ år?', solution: '$y = 10\\,000 \\cdot 1{,}08^3 = 10\\,000 \\cdot 1{,}2597 \\approx 12\\,597$ kr' },
              { label: 'd', task: 'En bil koster $300\\,000$ kr og mister $15\\%$ av verdien hvert år. Hva er bilen verdt etter $4$ år?', solution: '$y = 300\\,000 \\cdot 0{,}85^4 = 300\\,000 \\cdot 0{,}5220 \\approx 156\\,600$ kr' },
              { label: 'e', task: 'Et program kjører `verdi = 10000` og deretter `for i in range(3): verdi = verdi * 1.08`. Verifiser at dette gir samme svar som c).', solution: 'Etter $1$ steg: $10\\,000 \\cdot 1{,}08 = 10\\,800$. Etter $2$: $10\\,800 \\cdot 1{,}08 = 11\\,664$. Etter $3$: $11\\,664 \\cdot 1{,}08 \\approx 12\\,597$. Stemmer.' },
              { label: 'f', task: 'Hva er doblingstiden for en størrelse som vokser med $10\\%$ per år? (Prøv systematisk med $1{,}1^x > 2$.)', solution: '$1{,}1^7 = 1{,}949$ og $1{,}1^8 = 2{,}144$. Doblingstiden er ca. $7{-}8$ år (nøyaktig: $\\frac{\\ln 2}{\\ln 1{,}1} \\approx 7{,}27$ år).' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Vekstfaktor: $b = 1 + \\frac{p}{100}$ for økning, $b = 1 - \\frac{p}{100}$ for nedgang.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Skille mellom lineær og eksponentiell vekst.',
            subTasks: [
              { label: 'a', task: 'En jobb gir $200$ kr i timen. Etter $x$ timer har du tjent $y$ kr. Er dette lineær eller eksponentiell vekst?', solution: 'Lineær vekst: $y = 200x$. Fast beløp per time.' },
              { label: 'b', task: 'En investering dobler seg hvert $7$. år. Er dette lineær eller eksponentiell vekst?', solution: 'Eksponentiell vekst: verdien ganges med en fast faktor ($2$) per tidsperiode.' },
              { label: 'c', task: 'En tabell viser verdier: $x = 0: y = 100$, $x = 1: y = 150$, $x = 2: y = 200$, $x = 3: y = 250$. Er dette lineær eller eksponentiell vekst? Begrunn.', solution: 'Lineær, fordi $y$ øker med $50$ for hvert steg (fast differanse). $y = 50x + 100$.' },
              { label: 'd', task: 'En tabell viser: $x = 0: y = 100$, $x = 1: y = 120$, $x = 2: y = 144$, $x = 3: y = 172{,}8$. Er dette lineær eller eksponentiell vekst? Finn vekstfaktoren.', solution: 'Eksponentiell, fordi $\\frac{120}{100} = \\frac{144}{120} = \\frac{172{,}8}{144} = 1{,}2$. Vekstfaktor $b = 1{,}2$ ($20\\%$ økning per steg).' },
              { label: 'e', task: 'Hva skrives ut av dette programmet?\n```python\nlin = 100\neks = 100\nfor i in range(5):\n    lin = lin + 100\n    eks = eks * 2\nprint(lin, eks)\n```', solution: 'Lineær: $100 + 5 \\cdot 100 = 600$. Eksponentiell: $100 \\cdot 2^5 = 3200$. Utskrift: $600 \\; 3200$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Lineær: fast differanse mellom etterfølgende verdier. Eksponentiell: fast forholdstall mellom etterfølgende verdier.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk numerisk metode (systematisk prøving) til å løse likninger.',
            subTasks: [
              { label: 'a', task: 'Løs $x^2 = 50$ ved å prøve heltall. Mellom hvilke to heltall ligger $\\sqrt{50}$?', solution: '$7^2 = 49$ og $8^2 = 64$. Altså $7 < \\sqrt{50} < 8$.' },
              { label: 'b', task: 'Bruk én desimal til å finne $\\sqrt{50}$ mer nøyaktig.', solution: '$7{,}0^2 = 49{,}00$, $7{,}1^2 = 50{,}41$. Altså $7{,}0 < \\sqrt{50} < 7{,}1$. Nøyaktig: $\\sqrt{50} \\approx 7{,}07$.' },
              { label: 'c', task: 'Et program prøver $x = 0{,}0, \\; 0{,}1, \\; 0{,}2, \\ldots, \\; 10{,}0$ og finner den $x$ der $2^x$ er nærmest $10$. Omtrent hva er $x$?', solution: '$2^3 = 8$ og $2^{3{,}3} \\approx 9{,}85$ og $2^{3{,}4} \\approx 10{,}56$. Programmet ville finne $x \\approx 3{,}3$.' },
              { label: 'd', task: 'Du setter inn $20\\,000$ kr med $4\\%$ rente per år. Etter hvor mange år har du mer enn $30\\,000$ kr? Bruk systematisk prøving.', solution: '$20\\,000 \\cdot 1{,}04^x > 30\\,000 \\Rightarrow 1{,}04^x > 1{,}5$. Prøver: $1{,}04^{10} = 1{,}480$, $1{,}04^{11} = 1{,}539$. Etter $11$ år.' },
              { label: 'e', task: 'Hva skrives ut av dette programmet?\n```python\nx = 0\nwhile 3**x < 1000:\n    x = x + 1\nprint(x)\n```', solution: '$3^6 = 729 < 1000$, $3^7 = 2187 > 1000$. Utskrift: $7$.' },
              { label: 'f', task: 'Forklar med egne ord hva «numerisk løsning» betyr og når det er nyttig.', solution: 'Numerisk løsning betyr å finne en tilnærmet løsning ved å prøve mange verdier systematisk. Det er nyttig når likningen er vanskelig eller umulig å løse algebraisk, for eksempel $2^x = 10$.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Start med grove verdier for å finne riktig intervall, og snevre inn med finere steg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-11-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-11-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatt modelleringsoppgave med vekst.',
            subTasks: [
              { label: 'a', task: 'En by har $50\\,000$ innbyggere og vokser med $2\\%$ per år. En annen by har $80\\,000$ innbyggere og krymper med $1\\%$ per år. Sett opp formler for begge byene.', solution: 'By 1: $y_1 = 50\\,000 \\cdot 1{,}02^x$. By 2: $y_2 = 80\\,000 \\cdot 0{,}99^x$.' },
              { label: 'b', task: 'Beregn innbyggertallet for begge byene etter $10$ år.', solution: 'By 1: $50\\,000 \\cdot 1{,}02^{10} = 50\\,000 \\cdot 1{,}2190 \\approx 60\\,950$. By 2: $80\\,000 \\cdot 0{,}99^{10} = 80\\,000 \\cdot 0{,}9044 \\approx 72\\,350$.' },
              { label: 'c', task: 'Bruk systematisk prøving til å finne omtrent etter hvor mange år de to byene har like mange innbyggere.', solution: 'Vi trenger $50\\,000 \\cdot 1{,}02^x = 80\\,000 \\cdot 0{,}99^x$, altså $\\left(\\frac{1{,}02}{0{,}99}\\right)^x = 1{,}6$. Prøver: $1{,}0303^{15} \\approx 1{,}563$, $1{,}0303^{16} \\approx 1{,}610$. Etter ca. $16$ år.' },
              { label: 'd', task: 'Et program simulerer de to byene år for år og skriver ut året der by 1 passerer by 2. Hva ville dette programmet skrive ut basert på svaret i c)?', solution: 'Programmet ville skrive ut $16$ (eller muligens $15$ avhengig av avrunding), altså det første året der by 1 har flere innbyggere enn by 2.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Sett opp formlene $y_1 = a_1 \\cdot b_1^x$ og $y_2 = a_2 \\cdot b_2^x$ og finn $x$ der $y_1 = y_2$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Lineær vekst', definition: 'Størrelsen øker med et fast beløp for hvert tidssteg (y = ax + b)' },
    { term: 'Eksponentiell vekst', definition: 'Størrelsen øker med en fast prosentandel for hvert tidssteg (y = a * b^x)' },
    { term: 'Vekstfaktor', definition: 'Tallet vi ganger med for hvert steg; b = 1 + p/100 for p % vekst' },
    { term: 'Numerisk løsning', definition: 'Finne en tilnærmet løsning ved å prøve mange verdier systematisk' },
    { term: 'Modellering', definition: 'Bruke matematikk til å beskrive og forutsi virkelige fenomener' },
    { term: 'Fibonacci-tallene', definition: 'Tallrekke der hvert tall er summen av de to forrige: 1, 1, 2, 3, 5, 8, ...' },
  ],
  prevChapter: '9-11-2',
};

// Eksporter alle kapitler i seksjon 11
export const MATEMATIKK_9_DEL11_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_11_1,
  CHAPTER_9_11_2,
  CHAPTER_9_11_3,
];

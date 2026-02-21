/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Programmering i Python
 *
 * Kapittel 3.2–3.4: Variabler, kontrollstrukturer og funksjoner
 * Dekker LK20 læreplan for Elektro og datateknologi VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.2: Variabler, datatyper og operatorer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_2: TextbookChapter = {
  id: 'elektro-data-vg1-3-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.2',
  title: 'Variabler, datatyper og operatorer',
  description: 'Lær om variabler, datatyper og operatorer i Python. Du lærer å lagre data, gjøre beregninger og ta imot brukerinput.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke variabler og operatorer i programmering',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-2-intro',
      type: 'text',
      content: `## Variabler, datatyper og operatorer

Variabler er grunnmuren i all programmering. En variabel er et navn som peker til en verdi lagret i datamaskinens minne. Når vi programmerer, bruker vi variabler for å holde styr på tall, tekst og andre data som programmet skal jobbe med.

I dette kapittelet skal du lære å opprette og bruke variabler, forstå de viktigste datatypene i Python, og utføre beregninger med operatorer.`,
    },

    // BLOKK 1: Variabler
    {
      id: 'elektro-data-vg1-3-2-def-variabler',
      type: 'definition',
      title: 'Variabler',
      content: `En **variabel** er et navn som refererer til en verdi i minnet. Vi oppretter en variabel med tilordningsoperatoren \`=\`.

\`\`\`python
alder = 17
navn = "Ola"
temperatur = 22.5
\`\`\`

**Navnregler for variabler:**
- Kan inneholde bokstaver, tall og understrek (\`_\`)
- Må starte med bokstav eller understrek, ikke tall
- Kan ikke bruke Python-reserverte ord som \`if\`, \`for\`, \`while\`
- Er case-sensitive: \`Alder\` og \`alder\` er ulike variabler
- Bruk beskrivende navn: \`antall_elever\` er bedre enn \`x\``,
    },
    {
      id: 'elektro-data-vg1-3-2-example-variabler',
      type: 'example',
      title: 'Opprette og endre variabler',
      problem: 'Lag variabler for en elevs fornavn, alder og karakter. Skriv ut verdiene.',
      solution: `\`\`\`python
fornavn = "Kari"
alder = 16
karakter = 5

print(fornavn)    # Kari
print(alder)      # 16
print(karakter)   # 5

# Vi kan endre verdien til en variabel
alder = 17
print(alder)      # 17
\`\`\`

Variabelen \`alder\` endres fra 16 til 17 ved ny tilordning.`,
    },

    // BLOKK 2: Datatyper
    {
      id: 'elektro-data-vg1-3-2-def-datatyper',
      type: 'definition',
      title: 'Datatyper i Python',
      content: `Python har fire grunnleggende datatyper:

| Datatype | Beskrivelse | Eksempel |
|----------|-------------|----------|
| \`int\` | Heltall | \`42\`, \`-7\`, \`0\` |
| \`float\` | Desimaltall | \`3.14\`, \`-0.5\`, \`2.0\` |
| \`str\` | Tekst (streng) | \`"Hei"\`, \`'Python'\` |
| \`bool\` | Sannhetsverdi | \`True\`, \`False\` |

Du kan sjekke datatypen med \`type()\`:

\`\`\`python
print(type(42))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("Hei"))    # <class 'str'>
print(type(True))     # <class 'bool'>
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-2-example-datatyper',
      type: 'example',
      title: 'Typekonvertering',
      problem: 'Konverter mellom ulike datatyper i Python.',
      solution: `\`\`\`python
# Fra tekst til tall
tekst_tall = "25"
heltall = int(tekst_tall)      # 25
desimaltall = float(tekst_tall) # 25.0

# Fra tall til tekst
alder = 17
melding = "Jeg er " + str(alder) + " år"
print(melding)  # Jeg er 17 år

# Fra desimaltall til heltall (avrunder nedover)
pris = 99.9
hel_pris = int(pris)  # 99
\`\`\`

Bruk \`int()\`, \`float()\`, \`str()\` og \`bool()\` for å konvertere mellom typer.`,
    },

    // Oppgave 1
    {
      id: 'elektro-data-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av følgende er et gyldig variabelnavn i Python?',
        options: [
          { id: 'a', text: '2tall', correct: false },
          { id: 'b', text: 'for', correct: false },
          { id: 'c', text: 'min_variabel', correct: true },
          { id: 'd', text: 'mitt-tall', correct: false },
        ],
        hints: ['Variabelnavn kan ikke starte med tall eller inneholde bindestrek.'],
        solution: '`min_variabel` er gyldig fordi det inneholder bokstaver og understrek. `2tall` starter med tall, `for` er et reservert ord, og `mitt-tall` inneholder bindestrek.',
      },
    },

    // BLOKK 3: Aritmetiske operatorer
    {
      id: 'elektro-data-vg1-3-2-def-aritmetiske',
      type: 'definition',
      title: 'Aritmetiske operatorer',
      content: `Python støtter følgende aritmetiske operatorer:

| Operator | Beskrivelse | Eksempel | Resultat |
|----------|-------------|----------|----------|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`7 - 3\` | \`4\` |
| \`*\` | Multiplikasjon | \`7 * 3\` | \`21\` |
| \`/\` | Divisjon | \`7 / 3\` | \`2.333...\` |
| \`//\` | Heltallsdivisjon | \`7 // 3\` | \`2\` |
| \`%\` | Modulo (rest) | \`7 % 3\` | \`1\` |
| \`**\` | Potens | \`2 ** 3\` | \`8\` |

Rekkefølgen følger vanlige matematiske regler: potens først, deretter multiplikasjon/divisjon, og til slutt addisjon/subtraksjon. Bruk parenteser for å endre rekkefølgen.`,
    },
    {
      id: 'elektro-data-vg1-3-2-example-aritmetiske',
      type: 'example',
      title: 'Beregninger med operatorer',
      problem: 'Bruk Python til å beregne arealet av en sirkel med radius 5.',
      solution: `\`\`\`python
radius = 5
pi = 3.14159
areal = pi * radius ** 2

print("Arealet er:", areal)  # Arealet er: 78.53975
\`\`\`

Her brukes \`**\` for å opphøye radius i andre, og \`*\` for å multiplisere med pi. Potensoperatoren har høyere prioritet enn multiplikasjon, så \`radius ** 2\` beregnes først.`,
    },

    // Oppgave 2
    {
      id: 'elektro-data-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva blir resultatet av `17 % 5` i Python?',
        options: [
          { id: 'a', text: '3', correct: false },
          { id: 'b', text: '2', correct: true },
          { id: 'c', text: '3.4', correct: false },
          { id: 'd', text: '12', correct: false },
        ],
        solution: '`%` er modulo-operatoren som gir resten ved heltallsdivisjon. 17 delt på 5 gir 3 med rest **2**. Altså: 17 = 5 × 3 + 2.',
      },
    },

    // BLOKK 4: Sammenligning og logiske operatorer
    {
      id: 'elektro-data-vg1-3-2-def-sammenligning',
      type: 'definition',
      title: 'Sammenligningsoperatorer',
      content: `Sammenligningsoperatorer sammenligner to verdier og returnerer \`True\` eller \`False\`:

| Operator | Betydning | Eksempel | Resultat |
|----------|-----------|----------|----------|
| \`==\` | Er lik | \`5 == 5\` | \`True\` |
| \`!=\` | Er ikke lik | \`5 != 3\` | \`True\` |
| \`<\` | Mindre enn | \`3 < 5\` | \`True\` |
| \`>\` | Større enn | \`3 > 5\` | \`False\` |
| \`<=\` | Mindre enn eller lik | \`5 <= 5\` | \`True\` |
| \`>=\` | Større enn eller lik | \`6 >= 5\` | \`True\` |`,
    },
    {
      id: 'elektro-data-vg1-3-2-def-logiske',
      type: 'definition',
      title: 'Logiske operatorer',
      content: `Logiske operatorer kombinerer sannhetsverdier:

| Operator | Beskrivelse | Eksempel | Resultat |
|----------|-------------|----------|----------|
| \`and\` | Begge må være True | \`True and False\` | \`False\` |
| \`or\` | Minst én må være True | \`True or False\` | \`True\` |
| \`not\` | Snur verdien | \`not True\` | \`False\` |

\`\`\`python
alder = 17
har_lappen = True

kan_kjore = alder >= 18 and har_lappen
print(kan_kjore)  # False (alder er under 18)
\`\`\``,
    },

    // Oppgave 3
    {
      id: 'elektro-data-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-mc-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva blir resultatet av uttrykket `not (5 > 3 and 2 == 2)`?',
        options: [
          { id: 'a', text: 'True', correct: false },
          { id: 'b', text: 'False', correct: true },
          { id: 'c', text: '0', correct: false },
          { id: 'd', text: 'Feilmelding', correct: false },
        ],
        hints: ['Evaluer parentesen først: er 5 > 3 sann? Er 2 == 2 sann? Hva gir and?'],
        solution: 'Steg for steg: `5 > 3` er `True`, `2 == 2` er `True`. `True and True` gir `True`. `not True` gir **`False`**.',
      },
    },

    // BLOKK 5: Input og output
    {
      id: 'elektro-data-vg1-3-2-def-io',
      type: 'definition',
      title: 'Input og output',
      content: `**\`print()\`** skriver ut tekst til skjermen. Du kan skrive ut flere verdier ved å skille med komma:

\`\`\`python
print("Hei, verden!")
print("Summen er:", 3 + 4)
print("Navn:", "Ola", "Alder:", 17)
\`\`\`

**\`input()\`** lar brukeren skrive inn data. Den returnerer alltid en **streng**, så du må konvertere til tall ved behov:

\`\`\`python
navn = input("Hva heter du? ")
alder = int(input("Hvor gammel er du? "))
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-2-example-io',
      type: 'example',
      title: 'Enkel kalkulator',
      problem: 'Lag et program som ber brukeren om to tall og skriver ut summen.',
      solution: `\`\`\`python
tall1 = float(input("Skriv inn første tall: "))
tall2 = float(input("Skriv inn andre tall: "))

summen = tall1 + tall2
print("Summen av", tall1, "og", tall2, "er", summen)
\`\`\`

Vi bruker \`float()\` for å konvertere input-teksten til desimaltall, slik at brukeren kan skrive inn både heltall og desimaltall.`,
    },

    // Oppgave 4
    {
      id: 'elektro-data-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-classic-1',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv et program som ber brukeren om navn og fødselsår, og deretter skriver ut en hilsen med personens omtrentlige alder.

Eksempel på kjøring:
\`\`\`
Hva heter du? Kari
Hvilket år er du født? 2008
Hei, Kari! Du er omtrent 17 år gammel.
\`\`\``,
        hints: ['Husk at `input()` returnerer en streng. Du må konvertere fødselsåret til `int`.'],
        solution: `\`\`\`python
navn = input("Hva heter du? ")
fodeaar = int(input("Hvilket år er du født? "))

alder = 2025 - fodeaar
print("Hei, " + navn + "! Du er omtrent " + str(alder) + " år gammel.")
\`\`\``,
      },
    },

    // Oppgave 5
    {
      id: 'elektro-data-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-classic-2',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som regner om en temperatur fra Celsius til Fahrenheit. Formelen er: F = C × 9/5 + 32.

Programmet skal be brukeren om temperaturen i Celsius, beregne Fahrenheit, og skrive ut resultatet.`,
        hints: ['Bruk `float(input(...))` for å lese inn desimaltall.'],
        solution: `\`\`\`python
celsius = float(input("Skriv inn temperatur i Celsius: "))
fahrenheit = celsius * 9 / 5 + 32

print(celsius, "°C tilsvarer", fahrenheit, "°F")
\`\`\`

For 20°C: F = 20 × 9/5 + 32 = 36 + 32 = 68°F.`,
      },
    },

    // Oppgave 6
    {
      id: 'elektro-data-vg1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-mc-4',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer når du kjører denne koden?\n\n```python\nx = input("Tall: ")  # brukeren skriver 5\nprint(x + x)\n```',
        options: [
          { id: 'a', text: '10', correct: false },
          { id: 'b', text: '"55"', correct: true },
          { id: 'c', text: 'Feilmelding', correct: false },
          { id: 'd', text: '"Tall: Tall: "', correct: false },
        ],
        solution: '`input()` returnerer alltid en **streng**. Når brukeren skriver 5, blir `x` strengen `"5"`. `+` brukt på strenger gir sammenslåing (konkatenering), så `"5" + "5"` blir `"55"`. For å få 10 må du skrive `int(x) + int(x)`.',
      },
    },

    // Oppgave 7
    {
      id: 'elektro-data-vg1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-2-classic-3',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et program som beregner motstanden i en elektrisk krets ved hjelp av Ohms lov (R = U / I). Programmet skal:

1. Be brukeren om spenning (i volt) og strøm (i ampere)
2. Beregne motstanden
3. Skrive ut resultatet med enhet

Legg til en sjekk: hvis brukeren skriver inn 0 for strøm, skriv ut en feilmelding i stedet (divisjon med null er ikke lov).`,
        hints: [
          'Bruk `float()` for å konvertere input til desimaltall.',
          'Du kan sjekke om strøm er 0 med en enkel `if`-setning.',
        ],
        solution: `\`\`\`python
spenning = float(input("Skriv inn spenning (V): "))
strom = float(input("Skriv inn strøm (A): "))

if strom == 0:
    print("Feil: Strøm kan ikke være 0 (divisjon med null).")
else:
    motstand = spenning / strom
    print("Motstanden er", motstand, "ohm")
\`\`\``,
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Variabler** er navn som refererer til verdier i minnet, og opprettes med \`=\`
- **Datatyper** i Python inkluderer \`int\` (heltall), \`float\` (desimaltall), \`str\` (tekst) og \`bool\` (sant/usant)
- **Aritmetiske operatorer** (\`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`) brukes til beregninger
- **Sammenligningsoperatorer** (\`==\`, \`!=\`, \`<\`, \`>\`) gir boolske verdier
- **Typekonvertering** med \`int()\`, \`float()\` og \`str()\` lar deg endre datatype
- **Input** fra brukeren leses med \`input()\` og returnerer alltid en streng

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Variabel | Navn som peker til en verdi i minnet |
| Datatype | Kategorien en verdi tilhører (int, float, str, bool) |
| Operator | Symbol som utfører en operasjon (+, -, *, /) |
| Tilordning | Å gi en variabel en verdi med = |
| Typekonvertering | Endre en verdi fra en datatype til en annen |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Variabel', definition: 'Et navn som refererer til en verdi lagret i minnet.' },
    { term: 'Datatype', definition: 'Kategorien en verdi tilhører, f.eks. int, float, str eller bool.' },
    { term: 'Operator', definition: 'Et symbol som utfører en operasjon, f.eks. +, -, *, /.' },
    { term: 'Tilordning', definition: 'Å gi en variabel en verdi med =-tegnet.' },
    { term: 'Typekonvertering', definition: 'Å endre en verdi fra én datatype til en annen, f.eks. int("5").' },
  ],
  nextChapter: 'elektro-data-vg1-3-3',
  prevChapter: 'elektro-data-vg1-3-1',
};

// ============================================================================
// Kapittel 3.3: Kontrollstrukturer og løkker
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_3: TextbookChapter = {
  id: 'elektro-data-vg1-3-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.3',
  title: 'Kontrollstrukturer og løkker',
  description: 'Lær å styre programflyten med if-setninger, for-løkker og while-løkker. Du lærer også om break, continue og nøstede løkker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke kontrollstrukturer for å styre programflyt',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-3-intro',
      type: 'text',
      content: `## Kontrollstrukturer og løkker

Til nå har programmene våre kjørt linje for linje fra topp til bunn. Men i virkeligheten må programmer ofte ta valg og gjenta handlinger. **Kontrollstrukturer** lar oss styre hvilke kodelinjer som kjøres basert på betingelser, og **løkker** lar oss gjenta kode uten å skrive den flere ganger.

Disse verktøyene er helt sentrale i programmering. Uten dem ville programmene våre vært svært begrensede.`,
    },

    // BLOKK 1: If-setninger
    {
      id: 'elektro-data-vg1-3-3-def-if',
      type: 'definition',
      title: 'If, elif og else',
      content: `En **if-setning** utfører kode bare når en betingelse er sann:

\`\`\`python
if betingelse:
    # Kode som kjører hvis betingelsen er True
\`\`\`

Vi kan legge til **elif** (else if) for flere betingelser, og **else** for alt annet:

\`\`\`python
if betingelse1:
    # Kjører hvis betingelse1 er True
elif betingelse2:
    # Kjører hvis betingelse1 er False og betingelse2 er True
else:
    # Kjører hvis ingen betingelser er True
\`\`\`

**Viktig:** Koden som tilhører en blokk må være **innrykket** (vanligvis 4 mellomrom). Python bruker innrykk i stedet for klammer \`{}\` for å markere kodeblokker.`,
    },
    {
      id: 'elektro-data-vg1-3-3-example-if',
      type: 'example',
      title: 'Karakterberegning',
      problem: 'Lag et program som gir karakter basert på poengsum (0-100).',
      solution: `\`\`\`python
poeng = int(input("Skriv inn poeng (0-100): "))

if poeng >= 90:
    karakter = 6
elif poeng >= 77:
    karakter = 5
elif poeng >= 60:
    karakter = 4
elif poeng >= 40:
    karakter = 3
elif poeng >= 20:
    karakter = 2
else:
    karakter = 1

print("Du fikk karakter:", karakter)
\`\`\`

Python sjekker betingelsene fra toppen. Så snart én betingelse er sann, kjøres den tilhørende blokken og resten hoppes over.`,
    },

    // Oppgave 1
    {
      id: 'elektro-data-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skrives ut av denne koden?\n\n```python\nx = 15\nif x > 20:\n    print("Stor")\nelif x > 10:\n    print("Medium")\nelse:\n    print("Liten")\n```',
        options: [
          { id: 'a', text: 'Stor', correct: false },
          { id: 'b', text: 'Medium', correct: true },
          { id: 'c', text: 'Liten', correct: false },
          { id: 'd', text: 'Stor Medium', correct: false },
        ],
        solution: '`x` er 15. Første betingelse `x > 20` er usann. Andre betingelse `x > 10` er sann (15 > 10), så **"Medium"** skrives ut. `else`-blokken kjøres ikke.',
      },
    },

    // Oppgave 2
    {
      id: 'elektro-data-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-classic-1',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv et program som ber brukeren om et tall og sjekker om tallet er positivt, negativt eller null. Skriv ut en passende melding.`,
        solution: `\`\`\`python
tall = float(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\``,
      },
    },

    // BLOKK 2: For-løkker
    {
      id: 'elektro-data-vg1-3-3-def-for',
      type: 'definition',
      title: 'For-løkker',
      content: `En **for-løkke** gjentar kode et bestemt antall ganger. Vi bruker ofte \`range()\` for å lage en tallsekvens:

\`\`\`python
for i in range(5):
    print(i)
# Skriver ut: 0, 1, 2, 3, 4
\`\`\`

**\`range()\` kan brukes på tre måter:**
- \`range(slutt)\` — fra 0 til slutt-1
- \`range(start, slutt)\` — fra start til slutt-1
- \`range(start, slutt, steg)\` — fra start til slutt-1 med angitt steg

\`\`\`python
for i in range(2, 10, 2):
    print(i)
# Skriver ut: 2, 4, 6, 8
\`\`\`

Vi kan også iterere over strenger og lister:

\`\`\`python
for bokstav in "Hei":
    print(bokstav)
# Skriver ut: H, e, i
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-3-example-for',
      type: 'example',
      title: 'Summere tall med for-løkke',
      problem: 'Beregn summen av tallene fra 1 til 100 med en for-løkke.',
      solution: `\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i

print("Summen er:", total)  # Summen er: 5050
\`\`\`

\`range(1, 101)\` gir tallene 1, 2, 3, ..., 100. For hvert tall legges det til \`total\`. Dette er den berømte summen som Gauss fant som barn.`,
    },

    // Oppgave 3
    {
      id: 'elektro-data-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-mc-2',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut av denne koden?\n\n```python\nfor i in range(1, 8, 3):\n    print(i, end=" ")\n```',
        options: [
          { id: 'a', text: '1 2 3 4 5 6 7', correct: false },
          { id: 'b', text: '1 3 5 7', correct: false },
          { id: 'c', text: '1 4 7', correct: true },
          { id: 'd', text: '3 6', correct: false },
        ],
        hints: ['`range(1, 8, 3)` starter på 1, øker med 3, og stopper før 8.'],
        solution: '`range(1, 8, 3)` gir tallene 1, 4, 7 (start=1, steg=3, stopp før 8). Neste verdi ville vært 10, som er over 8.',
      },
    },

    // BLOKK 3: While-løkker
    {
      id: 'elektro-data-vg1-3-3-def-while',
      type: 'definition',
      title: 'While-løkker',
      content: `En **while-løkke** gjentar kode så lenge en betingelse er sann:

\`\`\`python
while betingelse:
    # Kode som gjentas
\`\`\`

\`\`\`python
teller = 0
while teller < 5:
    print(teller)
    teller = teller + 1
# Skriver ut: 0, 1, 2, 3, 4
\`\`\`

**Advarsel:** Hvis betingelsen aldri blir usann, får du en **uendelig løkke**. Sørg alltid for at noe endrer betingelsen inne i løkken.`,
    },
    {
      id: 'elektro-data-vg1-3-3-example-while',
      type: 'example',
      title: 'Gjetting av tall',
      problem: 'Lag et program der brukeren skal gjette et hemmelig tall.',
      solution: `\`\`\`python
hemmelig = 7
gjett = 0

while gjett != hemmelig:
    gjett = int(input("Gjett tallet (1-10): "))
    if gjett < hemmelig:
        print("For lavt!")
    elif gjett > hemmelig:
        print("For høyt!")

print("Riktig! Tallet var", hemmelig)
\`\`\`

Løkken fortsetter så lenge \`gjett\` ikke er lik \`hemmelig\`. Brukeren får hint etter hvert forsøk.`,
    },

    // Oppgave 4
    {
      id: 'elektro-data-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som ber brukeren om tall gjentatte ganger, og summerer dem. Programmet skal stoppe når brukeren skriver 0, og skrive ut den totale summen.

Eksempel:
\`\`\`
Skriv et tall (0 for å avslutte): 5
Skriv et tall (0 for å avslutte): 3
Skriv et tall (0 for å avslutte): 8
Skriv et tall (0 for å avslutte): 0
Total sum: 16
\`\`\``,
        hints: ['Bruk en while-løkke som kjører så lenge input ikke er 0.'],
        solution: `\`\`\`python
total = 0
tall = int(input("Skriv et tall (0 for å avslutte): "))

while tall != 0:
    total = total + tall
    tall = int(input("Skriv et tall (0 for å avslutte): "))

print("Total sum:", total)
\`\`\``,
      },
    },

    // BLOKK 4: Break og continue
    {
      id: 'elektro-data-vg1-3-3-def-break-continue',
      type: 'definition',
      title: 'Break og continue',
      content: `**\`break\`** avbryter løkken umiddelbart og hopper ut:

\`\`\`python
for i in range(10):
    if i == 5:
        break
    print(i)
# Skriver ut: 0, 1, 2, 3, 4
\`\`\`

**\`continue\`** hopper over resten av den gjeldende iterasjonen og går til neste:

\`\`\`python
for i in range(6):
    if i == 3:
        continue
    print(i)
# Skriver ut: 0, 1, 2, 4, 5  (3 hoppes over)
\`\`\`

\`break\` er nyttig for å stoppe en løkke tidlig, mens \`continue\` er nyttig for å hoppe over visse iterasjoner.`,
    },

    // Oppgave 5
    {
      id: 'elektro-data-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-mc-3',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut av denne koden?\n\n```python\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    if i == 5:\n        break\n    print(i, end=" ")\n```',
        options: [
          { id: 'a', text: '1 2 3 4 5', correct: false },
          { id: 'b', text: '1 2 4 5', correct: false },
          { id: 'c', text: '1 2 4', correct: true },
          { id: 'd', text: '1 2', correct: false },
        ],
        hints: ['`continue` hopper over i=3. `break` stopper løkken ved i=5 (før print).'],
        solution: 'i=1: skrives ut. i=2: skrives ut. i=3: `continue` hopper over print. i=4: skrives ut. i=5: `break` stopper løkken. Resultat: **1 2 4**.',
      },
    },

    // BLOKK 5: Nøstede løkker
    {
      id: 'elektro-data-vg1-3-3-def-nostet',
      type: 'definition',
      title: 'Nøstede løkker',
      content: `En **nøstet løkke** er en løkke inne i en annen løkke. For hver iterasjon av den ytre løkken kjøres hele den indre løkken:

\`\`\`python
for rad in range(3):
    for kolonne in range(4):
        print("*", end=" ")
    print()  # Ny linje etter hver rad
\`\`\`

Output:
\`\`\`
* * * *
* * * *
* * * *
\`\`\`

Den ytre løkken styrer radene, den indre styrer kolonnene. Totalt kjøres print-setningen 3 × 4 = 12 ganger.`,
    },
    {
      id: 'elektro-data-vg1-3-3-example-nostet',
      type: 'example',
      title: 'Gangetabell',
      problem: 'Skriv ut gangetabellen for tallene 1 til 5.',
      solution: `\`\`\`python
for i in range(1, 6):
    for j in range(1, 6):
        resultat = i * j
        print(f"{resultat:4}", end="")
    print()
\`\`\`

Output:
\`\`\`
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
\`\`\`

\`f"{resultat:4}"\` formaterer tallet med 4 tegns bredde for jevne kolonner.`,
    },

    // Oppgave 6
    {
      id: 'elektro-data-vg1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-classic-3',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som bruker nøstede løkker til å skrive ut dette mønsteret:

\`\`\`
*
* *
* * *
* * * *
* * * * *
\`\`\``,
        hints: ['Den ytre løkken styrer radnummeret (1-5). Den indre løkken skriver ut stjerner, like mange som radnummeret.'],
        solution: `\`\`\`python
for rad in range(1, 6):
    for kolonne in range(rad):
        print("*", end=" ")
    print()
\`\`\`

For rad 1 skrives 1 stjerne, for rad 2 skrives 2 stjerner, osv.`,
      },
    },

    // Oppgave 7
    {
      id: 'elektro-data-vg1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-classic-4',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et program som finner alle primtall mellom 2 og 50.

Et primtall er et tall som bare er delelig med 1 og seg selv. Bruk en nøstet løkke der den ytre løkken går gjennom tallene og den indre sjekker delelighet.`,
        hints: [
          'For hvert tall, sjekk om det er delelig med noen tall fra 2 opp til tallet selv.',
          'Bruk modulo-operatoren `%` for å sjekke delelighet.',
          'Bruk en variabel `er_primtall` som settes til False hvis du finner en deler.',
        ],
        solution: `\`\`\`python
for tall in range(2, 51):
    er_primtall = True
    for deler in range(2, tall):
        if tall % deler == 0:
            er_primtall = False
            break
    if er_primtall:
        print(tall, end=" ")
\`\`\`

Output: \`2 3 5 7 11 13 17 19 23 29 31 37 41 43 47\``,
      },
    },

    // Oppgave 8
    {
      id: 'elektro-data-vg1-3-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-3-mc-4',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvor mange ganger skrives \"Hei\" ut i denne koden?\n\n```python\nfor i in range(3):\n    for j in range(i + 1):\n        print("Hei")\n```',
        options: [
          { id: 'a', text: '3', correct: false },
          { id: 'b', text: '6', correct: true },
          { id: 'c', text: '9', correct: false },
          { id: 'd', text: '4', correct: false },
        ],
        hints: ['Tenk på hva `range(i + 1)` gir for i=0, i=1 og i=2.'],
        solution: 'Når i=0: `range(1)` gir 1 print. Når i=1: `range(2)` gir 2 prints. Når i=2: `range(3)` gir 3 prints. Totalt: 1 + 2 + 3 = **6** ganger.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **If-setninger** lar deg styre programflyten basert på betingelser
- **Elif** og **else** gir flere forgreninger i beslutningslogikken
- **For-løkker** med \`range()\` gjentar kode et bestemt antall ganger
- **While-løkker** gjentar kode så lenge en betingelse er sann
- **Break** avbryter en løkke, mens **continue** hopper til neste iterasjon
- **Nøstede løkker** er løkker inne i andre løkker, nyttig for tabeller og matriser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| If-setning | Utfører kode kun når en betingelse er sann |
| For-løkke | Itererer over en sekvens eller et bestemt antall ganger |
| While-løkke | Gjentar kode så lenge betingelsen holder |
| Break | Avbryter en løkke umiddelbart |
| Continue | Hopper til neste iterasjon |
| Nøstet løkke | En løkke inne i en annen løkke |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'If-setning', definition: 'Kontrollstruktur som utfører kode basert på en betingelse.' },
    { term: 'For-løkke', definition: 'Løkke som gjentar kode et bestemt antall ganger.' },
    { term: 'While-løkke', definition: 'Løkke som gjentar kode så lenge en betingelse er sann.' },
    { term: 'Break', definition: 'Nøkkelord som avbryter en løkke umiddelbart.' },
    { term: 'Continue', definition: 'Nøkkelord som hopper til neste iterasjon i en løkke.' },
    { term: 'Nøstet løkke', definition: 'En løkke inne i en annen løkke.' },
  ],
  nextChapter: 'elektro-data-vg1-3-4',
  prevChapter: 'elektro-data-vg1-3-2',
};

// ============================================================================
// Kapittel 3.4: Funksjoner og modularitet
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_4: TextbookChapter = {
  id: 'elektro-data-vg1-3-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.4',
  title: 'Funksjoner og modularitet',
  description: 'Lær å strukturere kode med funksjoner. Du lærer å definere egne funksjoner med parametre, returverdier og standardverdier.',
  estimatedMinutes: 55,
  competenceGoals: [
    'strukturere programmer med funksjoner',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-4-intro',
      type: 'text',
      content: `## Funksjoner og modularitet

Når programmer blir større, blir det vanskelig å holde oversikt. **Funksjoner** lar oss dele opp koden i gjenbrukbare, navngitte blokker som hver løser én oppgave. Du har allerede brukt innebygde funksjoner som \`print()\`, \`input()\` og \`range()\`. Nå skal du lære å lage dine egne.

Fordeler med funksjoner:
- **Gjenbruk:** Skriv koden én gang, bruk den mange ganger
- **Oversikt:** Programmet blir lettere å lese og forstå
- **Feilsøking:** Lettere å finne og fikse feil i isolerte blokker
- **Samarbeid:** Ulike personer kan jobbe med ulike funksjoner`,
    },

    // BLOKK 1: Definere funksjoner
    {
      id: 'elektro-data-vg1-3-4-def-funksjoner',
      type: 'definition',
      title: 'Definere funksjoner med def',
      content: `Vi lager en funksjon med nøkkelordet \`def\`, etterfulgt av funksjonsnavnet og parenteser:

\`\`\`python
def hilsen():
    print("Hei og velkommen!")
    print("Hyggelig å se deg.")
\`\`\`

For å **kalle** (bruke) funksjonen skriver vi navnet med parenteser:

\`\`\`python
hilsen()   # Kjører koden inne i funksjonen
hilsen()   # Vi kan kalle den så mange ganger vi vil
\`\`\`

**Viktig:** Funksjonen må defineres **før** den kalles. Python leser koden ovenfra og ned.`,
    },
    {
      id: 'elektro-data-vg1-3-4-example-enkel',
      type: 'example',
      title: 'En enkel funksjon',
      problem: 'Lag en funksjon som skriver ut en adskiller-linje for å gjøre utskrifter ryddigere.',
      solution: `\`\`\`python
def skriv_linje():
    print("-" * 40)

skriv_linje()
print("Rapport: Spenning i krets A")
skriv_linje()
print("Måling 1: 5.2V")
print("Måling 2: 5.1V")
skriv_linje()
\`\`\`

Output:
\`\`\`
----------------------------------------
Rapport: Spenning i krets A
----------------------------------------
Måling 1: 5.2V
Måling 2: 5.1V
----------------------------------------
\`\`\``,
    },

    // Oppgave 1
    {
      id: 'elektro-data-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig måte å definere en funksjon i Python?',
        options: [
          { id: 'a', text: 'function hils():', correct: false },
          { id: 'b', text: 'def hils():', correct: true },
          { id: 'c', text: 'define hils():', correct: false },
          { id: 'd', text: 'func hils():', correct: false },
        ],
        solution: 'I Python bruker vi nøkkelordet `def` etterfulgt av funksjonsnavn og parenteser. `function`, `define` og `func` er ikke gyldige nøkkelord i Python.',
      },
    },

    // BLOKK 2: Parametre og returverdier
    {
      id: 'elektro-data-vg1-3-4-def-parametre',
      type: 'definition',
      title: 'Parametre og returverdier',
      content: `**Parametre** er verdier vi sender inn til en funksjon. **Returverdier** er resultatet funksjonen gir tilbake.

\`\`\`python
def adder(a, b):       # a og b er parametre
    return a + b       # return sender verdien tilbake

resultat = adder(3, 5) # 3 og 5 er argumenter
print(resultat)        # 8
\`\`\`

En funksjon kan ta null, én eller flere parametre. Uten \`return\` returnerer funksjonen \`None\`.

\`\`\`python
def beregn_areal(lengde, bredde):
    return lengde * bredde

areal = beregn_areal(5, 3)
print("Arealet er:", areal)  # Arealet er: 15
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-4-example-parametre',
      type: 'example',
      title: 'Ohms lov som funksjon',
      problem: 'Lag en funksjon som beregner motstand ved hjelp av Ohms lov: R = U / I.',
      solution: `\`\`\`python
def beregn_motstand(spenning, strom):
    if strom == 0:
        return None   # Kan ikke dele på null
    return spenning / strom

# Bruk funksjonen
r1 = beregn_motstand(12, 0.5)
r2 = beregn_motstand(5, 0.1)

print("Motstand 1:", r1, "ohm")  # 24.0 ohm
print("Motstand 2:", r2, "ohm")  # 50.0 ohm
\`\`\`

Funksjonen tar spenning og strøm som parametre og returnerer motstanden. Ved strøm lik 0 returneres \`None\` for å unngå feil.`,
    },

    // Oppgave 2
    {
      id: 'elektro-data-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-classic-1',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Lag en funksjon \`beregn_effekt(spenning, strom)\` som returnerer effekten P = U × I. Test funksjonen med spenning 230V og strøm 0.5A.`,
        solution: `\`\`\`python
def beregn_effekt(spenning, strom):
    return spenning * strom

effekt = beregn_effekt(230, 0.5)
print("Effekten er:", effekt, "W")  # Effekten er: 115.0 W
\`\`\``,
      },
    },

    // Oppgave 3
    {
      id: 'elektro-data-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-mc-2',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva returnerer denne funksjonen når vi kaller `dobbel(4)`?\n\n```python\ndef dobbel(x):\n    resultat = x * 2\n    print(resultat)\n```',
        options: [
          { id: 'a', text: '8', correct: false },
          { id: 'b', text: 'None', correct: true },
          { id: 'c', text: '4', correct: false },
          { id: 'd', text: 'Feilmelding', correct: false },
        ],
        hints: ['Funksjonen har ingen `return`-setning. Hva returnerer en funksjon uten `return`?'],
        solution: 'Funksjonen **skriver ut** 8 til skjermen, men den har ingen `return`-setning. Uten `return` returnerer funksjonen automatisk `None`. For å returnere verdien må man legge til `return resultat`.',
      },
    },

    // BLOKK 3: Standardverdier
    {
      id: 'elektro-data-vg1-3-4-def-standardverdier',
      type: 'definition',
      title: 'Standardverdier for parametre',
      content: `Vi kan gi parametre en **standardverdi** (default). Da trenger ikke brukeren å oppgi alle argumenter:

\`\`\`python
def hilsen(navn, sprk="norsk"):
    if sprk == "norsk":
        print(f"Hei, {navn}!")
    elif sprk == "engelsk":
        print(f"Hello, {navn}!")

hilsen("Kari")              # Hei, Kari!  (bruker standard "norsk")
hilsen("Kari", "engelsk")   # Hello, Kari!
\`\`\`

**Regler:**
- Parametre med standardverdi må komme **etter** parametre uten
- Standardverdier gjør funksjoner mer fleksible
- Du kan overstyre standardverdien ved å sende inn et argument`,
    },
    {
      id: 'elektro-data-vg1-3-4-example-standardverdier',
      type: 'example',
      title: 'Motstandsberegning med enhet',
      problem: 'Lag en funksjon som beregner og formaterer motstand med valgfri enhet.',
      solution: `\`\`\`python
def vis_motstand(spenning, strom, enhet="ohm"):
    motstand = spenning / strom
    if enhet == "kohm":
        motstand = motstand / 1000
    return f"{motstand:.1f} {enhet}"

print(vis_motstand(12, 0.001))           # 12000.0 ohm
print(vis_motstand(12, 0.001, "kohm"))   # 12.0 kohm
\`\`\`

Når vi ikke oppgir \`enhet\`, brukes standardverdien \`"ohm"\`. Ved behov kan vi oppgi \`"kohm"\` for kilo-ohm.`,
    },

    // Oppgave 4
    {
      id: 'elektro-data-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag en funksjon \`celsius_til(temp, enhet="fahrenheit")\` som konverterer en temperatur fra Celsius til enten Fahrenheit (F = C × 9/5 + 32) eller Kelvin (K = C + 273.15).

Test funksjonen med:
- \`celsius_til(100)\` → skal gi Fahrenheit
- \`celsius_til(0, "kelvin")\` → skal gi Kelvin`,
        solution: `\`\`\`python
def celsius_til(temp, enhet="fahrenheit"):
    if enhet == "fahrenheit":
        return temp * 9 / 5 + 32
    elif enhet == "kelvin":
        return temp + 273.15

print(celsius_til(100))           # 212.0
print(celsius_til(0, "kelvin"))   # 273.15
\`\`\``,
      },
    },

    // BLOKK 4: Scope
    {
      id: 'elektro-data-vg1-3-4-def-scope',
      type: 'definition',
      title: 'Scope: lokale og globale variabler',
      content: `**Scope** handler om hvor en variabel er tilgjengelig.

**Lokale variabler** er opprettet inne i en funksjon og finnes bare der:

\`\`\`python
def min_funksjon():
    x = 10          # Lokal variabel
    print(x)        # 10

min_funksjon()
print(x)            # Feil! x finnes ikke utenfor funksjonen
\`\`\`

**Globale variabler** er opprettet utenfor funksjoner og kan leses overalt:

\`\`\`python
melding = "Hei"     # Global variabel

def skriv():
    print(melding)  # Kan lese globale variabler

skriv()             # Hei
\`\`\`

**Viktig:** Unngå å endre globale variabler inne i funksjoner. Bruk heller parametre og returverdier for å sende data inn og ut av funksjoner.`,
    },
    {
      id: 'elektro-data-vg1-3-4-tip-scope',
      type: 'tip',
      title: 'Beste praksis for scope',
      content: `Tenk på funksjoner som selvstendige enheter:
- **Inn:** Data sendes inn via parametre
- **Ut:** Resultater sendes ut via \`return\`
- **Unngå:** Å bruke globale variabler inne i funksjoner

\`\`\`python
# Dårlig praksis
total = 0
def legg_til(tall):
    global total    # Endrer global variabel
    total = total + tall

# God praksis
def legg_til(total, tall):
    return total + tall

total = legg_til(0, 5)   # total = 5
total = legg_til(total, 3) # total = 8
\`\`\``,
    },

    // Oppgave 5
    {
      id: 'elektro-data-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-mc-3',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut av denne koden?\n\n```python\nx = 5\n\ndef endre():\n    x = 10\n    print(x)\n\nendre()\nprint(x)\n```',
        options: [
          { id: 'a', text: '10 10', correct: false },
          { id: 'b', text: '10 5', correct: true },
          { id: 'c', text: '5 5', correct: false },
          { id: 'd', text: 'Feilmelding', correct: false },
        ],
        hints: ['`x = 10` inne i funksjonen oppretter en *lokal* variabel som skygger for den globale.'],
        solution: 'Inne i funksjonen `endre()` opprettes en **lokal** variabel `x = 10`, som skrives ut som 10. Men den globale `x` er fortsatt 5, så `print(x)` utenfor funksjonen skriver ut **5**. Resultat: **10 5**.',
      },
    },

    // Oppgave 6
    {
      id: 'elektro-data-vg1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-4-classic-3',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Lag et program med tre funksjoner for å beregne elektrisk effekt på ulike måter:

1. \`effekt_ui(spenning, strom)\` — beregner P = U × I
2. \`effekt_ri(motstand, strom)\` — beregner P = R × I²
3. \`effekt_ur(spenning, motstand)\` — beregner P = U² / R

Test alle tre funksjonene med verdier der U = 12V, I = 2A, R = 6Ω og verifiser at alle gir samme resultat (24W).`,
        hints: [
          'Husk at `**` er potensoperatoren i Python.',
          'Alle tre formlene er ulike uttrykk for effekt og skal gi samme svar for konsistente verdier.',
        ],
        solution: `\`\`\`python
def effekt_ui(spenning, strom):
    return spenning * strom

def effekt_ri(motstand, strom):
    return motstand * strom ** 2

def effekt_ur(spenning, motstand):
    return spenning ** 2 / motstand

# Test med U=12, I=2, R=6
print("P = U × I:", effekt_ui(12, 2), "W")     # 24 W
print("P = R × I²:", effekt_ri(6, 2), "W")     # 24 W
print("P = U² / R:", effekt_ur(12, 6), "W")    # 24.0 W
\`\`\`

Alle tre gir 24W, som bekrefter at formlene er konsistente.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Funksjon', definition: 'En navngitt kodeblokk som utfører en bestemt oppgave og kan gjenbrukes.' },
    { term: 'Parameter', definition: 'En variabel i funksjonsdefinisjonen som tar imot verdier.' },
    { term: 'Argument', definition: 'Den faktiske verdien som sendes til en funksjon ved kall.' },
    { term: 'Returverdi', definition: 'Verdien en funksjon gir tilbake med return-setningen.' },
    { term: 'Standardverdi', definition: 'En forhåndsdefinert verdi for en parameter som brukes hvis argumentet ikke oppgis.' },
    { term: 'Scope', definition: 'Området der en variabel er tilgjengelig. Lokalt scope er inne i funksjonen, globalt er utenfor.' },
  ],
  nextChapter: 'elektro-data-vg1-3-5',
  prevChapter: 'elektro-data-vg1-3-3',
};

// ============================================================================
// Eksport
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP3A_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_3_2,
  CHAPTER_ELEKTRO_DATA_VG1_3_3,
  CHAPTER_ELEKTRO_DATA_VG1_3_4,
];

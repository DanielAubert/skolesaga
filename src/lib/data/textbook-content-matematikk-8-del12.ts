/**
 * Matematikk 8. klasse - Del 12: Programmering og algoritmer (KM201)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 11.1: Introduksjon til programmering (Scratch/Python)
 * Kapittel 11.2: Løkker og variabler
 * Kapittel 11.3: Algoritmer i matematikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11.1: Introduksjon til programmering (Scratch/Python)
// LK20 KM201: Bruke programmering til å utforske matematiske eigenskapar og
//              samanhengar og til å kode kreative og interaktive produkt
// ============================================================================

export const CHAPTER_8_11_1: TextbookChapter = {
  id: '8-11-1',
  courseId: '8',
  chapterNumber: '11.1',
  title: 'Introduksjon til programmering (Scratch/Python)',
  description: 'Lær hva programmering er, og hvordan du kan bruke blokkbasert programmering (Scratch) og tekstbasert programmering (Python) til å løse matematiske problemer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-11-1-intro',
      type: 'text',
      content: `## Introduksjon til programmering

Har du noen gang lurt på hvordan dataspill, apper og nettsider lages? Svaret er **programmering**. Programmering handler om å skrive instruksjoner som en datamaskin kan forstå og utføre. Disse instruksjonene kaller vi **kode**.

I matematikken bruker vi programmering som et verktøy for å:
- Gjøre mange beregninger raskt
- Utforske tallmønstre og sammenhenger
- Tegne grafer og figurer
- Løse problemer som ville tatt lang tid for hånd

I dette kapittelet skal du lære:
- Forskjellen mellom blokkbasert og tekstbasert programmering
- Grunnleggende begreper som variabler, utskrift og inndata
- Å skrive enkle programmer med regneoperasjoner`,
    },

    // ========== DEFINISJON: PROGRAMMERING ==========
    {
      id: '8-11-1-def-1',
      type: 'definition',
      title: 'Programmering',
      content: `**Programmering** er prosessen med å skrive instruksjoner (kode) som forteller en datamaskin hva den skal gjøre.

Et **program** er en samling av slike instruksjoner som utfører en bestemt oppgave.

Et **programmeringsspråk** er et sett med regler og ord vi bruker for å skrive disse instruksjonene. Akkurat som vi har norsk, engelsk og spansk for å snakke med mennesker, har vi Python, Scratch og JavaScript for å «snakke» med datamaskiner.`,
    },

    // ========== DEFINISJON: BLOKKBASERT VS TEKSTBASERT ==========
    {
      id: '8-11-1-def-2',
      type: 'definition',
      title: 'Blokkbasert og tekstbasert programmering',
      content: `Det finnes to hovedtyper programmeringsspråk:

**Blokkbasert programmering (f.eks. Scratch):**
- Du drar og slipper fargede blokker for å bygge programmer
- Blokkene passer sammen som puslespillbrikker
- Lettere å komme i gang – ingen skrivefeil i koden
- Brukes mye i skolen for å lære grunnleggende konsepter

**Tekstbasert programmering (f.eks. Python):**
- Du skriver instruksjoner med tekst
- Mer fleksibelt og kraftig enn blokkbasert
- Brukes av profesjonelle programmerere
- Krever nøyaktig skriving (punktum, mellomrom osv. er viktig)

I dette kapittelet fokuserer vi mest på **Python**, som er et tekstbasert språk kjent for å være lett å lese og forstå.`,
    },

    // ========== TEKST: PYTHON-GRUNNLAG ==========
    {
      id: '8-11-1-text-1',
      type: 'text',
      content: `## Å komme i gang med Python

Python er et av verdens mest populære programmeringsspråk. Det er spesielt godt egnet for nybegynnere fordi koden ser ut nesten som vanlig engelsk.

### Skrive ut tekst med print()

Den enkleste tingen vi kan gjøre er å skrive ut en melding på skjermen. Vi bruker funksjonen \`print()\`:

\`\`\`python
print("Hei, verden!")
\`\`\`

Når vi kjører dette programmet, vises teksten:

\`\`\`
Hei, verden!
\`\`\`

**Viktig:** Tekst som skal skrives ut, må stå i anførselstegn (\`"..."\` eller \`'...'\`). Tall trenger ikke anførselstegn.

\`\`\`python
print("Mitt navn er Ola")
print(42)
print(3.14)
\`\`\`

Utskrift:
\`\`\`
Mitt navn er Ola
42
3.14
\`\`\``,
    },

    // ========== DEFINISJON: VARIABLER ==========
    {
      id: '8-11-1-def-3',
      type: 'definition',
      title: 'Variabel',
      content: `En **variabel** er et navn som lagrer en verdi i datamaskinen. Du kan tenke på en variabel som en merkelapp på en boks: boksen inneholder en verdi, og merkelappen (variabelnavnet) hjelper oss å finne den igjen.

I Python lager vi en variabel ved å bruke et likhetstegn:

\`\`\`python
alder = 13
navn = "Kari"
hoyde = 1.65
\`\`\`

Her har vi laget tre variabler:
- \`alder\` inneholder heltallet $13$
- \`navn\` inneholder teksten \`"Kari"\`
- \`hoyde\` inneholder desimaltallet $1{,}65$

**Regler for variabelnavn:**
- Kan inneholde bokstaver, tall og understrek (\`_\`)
- Kan **ikke** starte med et tall
- Kan **ikke** inneholde mellomrom (bruk understrek: \`mitt_tall\`)
- Store og små bokstaver er forskjellige (\`Alder\` og \`alder\` er ulike variabler)`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruke variabler og print()',
      problem: 'Skriv et program som lagrer to tall i variabler og skriver ut summen.',
      solution: `Vi lager to variabler og bruker \`print()\` til å vise resultatet:

\`\`\`python
a = 8
b = 5
summen = a + b
print(summen)
\`\`\`

Utskrift:
\`\`\`
13
\`\`\`

Vi kan også skrive ut mer informasjon:

\`\`\`python
a = 8
b = 5
print("Summen av", a, "og", b, "er", a + b)
\`\`\`

Utskrift:
\`\`\`
Summen av 8 og 5 er 13
\`\`\`

**Forklaring:** Når vi skriver \`a + b\` utenfor anførselstegn, regner Python ut svaret. Komma i \`print()\` setter mellomrom mellom delene.`,
    },

    // ========== TEKST: REGNEOPERASJONER ==========
    {
      id: '8-11-1-text-2',
      type: 'text',
      content: `## Regneoperasjoner i Python

Python kan brukes som en avansert kalkulator. Her er de viktigste regneoperasjonene:

| Operator | Betydning | Eksempel | Resultat |
|----------|-----------|----------|----------|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`7 - 3\` | \`4\` |
| \`*\` | Multiplikasjon | \`7 * 3\` | \`21\` |
| \`/\` | Divisjon | \`7 / 3\` | \`2.333...\` |
| \`**\` | Potens | \`2 ** 3\` | \`8\` |
| \`//\` | Heltallsdivisjon | \`7 // 3\` | \`2\` |
| \`%\` | Rest (modulo) | \`7 % 3\` | \`1\` |

### Regnerekkefølge

Python følger de vanlige regnereglene (PEMDAS):
1. Parenteser \`()\`
2. Potenser \`**\`
3. Multiplikasjon \`*\`, divisjon \`/\`, heltallsdivisjon \`//\`, modulo \`%\`
4. Addisjon \`+\`, subtraksjon \`-\`

\`\`\`python
resultat = 2 + 3 * 4
print(resultat)  # Skriver ut 14 (ikke 20!)

resultat2 = (2 + 3) * 4
print(resultat2)  # Skriver ut 20
\`\`\`

Teksten etter \`#\` er en **kommentar**. Kommentarer er notater til deg selv og blir ignorert av datamaskinen.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregne areal og omkrets',
      problem: 'Skriv et program som beregner arealet og omkretsen av et rektangel med lengde $8$ cm og bredde $5$ cm.',
      solution: `Vi bruker formlene $A = l \\cdot b$ og $O = 2 \\cdot (l + b)$:

\`\`\`python
lengde = 8
bredde = 5

areal = lengde * bredde
omkrets = 2 * (lengde + bredde)

print("Lengde:", lengde, "cm")
print("Bredde:", bredde, "cm")
print("Areal:", areal, "cm²")
print("Omkrets:", omkrets, "cm")
\`\`\`

Utskrift:
\`\`\`
Lengde: 8 cm
Bredde: 5 cm
Areal: 40 cm²
Omkrets: 26 cm
\`\`\`

**Fordelen** med å bruke variabler er at vi enkelt kan endre tallene. Hvis rektangelet er $12 \\times 7$ cm, trenger vi bare å endre de to første linjene.`,
    },

    // ========== TEKST: INPUT ==========
    {
      id: '8-11-1-text-3',
      type: 'text',
      content: `## Inndata med input()

Ofte vil vi at brukeren selv skal kunne skrive inn verdier. Da bruker vi funksjonen \`input()\`:

\`\`\`python
navn = input("Hva heter du? ")
print("Hei,", navn)
\`\`\`

Når programmet kjører, skriver det først ut «Hva heter du?» og venter på at brukeren skriver noe. Etter at brukeren trykker Enter, lagres svaret i variabelen \`navn\`.

### Viktig: input() gir alltid tekst

Alt som kommer fra \`input()\` er tekst (en «streng»). Hvis vi vil bruke det som et tall, må vi konvertere det:

\`\`\`python
# Uten konvertering - dette fungerer IKKE for regning:
tall_tekst = input("Skriv et tall: ")
# tall_tekst er nå tekst, f.eks. "5"

# Med konvertering - nå kan vi regne:
tall = int(input("Skriv et heltall: "))
# tall er nå et heltall, f.eks. 5

desimaltall = float(input("Skriv et desimaltall: "))
# desimaltall er nå et desimaltall, f.eks. 3.14
\`\`\`

- \`int()\` konverterer tekst til et **heltall** (integer)
- \`float()\` konverterer tekst til et **desimaltall** (flyttall)`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-11-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Interaktiv kalkulator',
      problem: 'Skriv et program der brukeren skriver inn to tall, og programmet skriver ut summen, differansen, produktet og kvotienten.',
      solution: `\`\`\`python
tall1 = float(input("Skriv inn det første tallet: "))
tall2 = float(input("Skriv inn det andre tallet: "))

print("Summen er:", tall1 + tall2)
print("Differansen er:", tall1 - tall2)
print("Produktet er:", tall1 * tall2)

if tall2 != 0:
    print("Kvotienten er:", tall1 / tall2)
else:
    print("Kan ikke dele på null!")
\`\`\`

Eksempel på kjøring:
\`\`\`
Skriv inn det første tallet: 15
Skriv inn det andre tallet: 4
Summen er: 19.0
Differansen er: 11.0
Produktet er: 60.0
Kvotienten er: 3.75
\`\`\`

**Merk:** Vi bruker \`float()\` for å tillate desimaltall. Linjen \`if tall2 != 0:\` sjekker om det andre tallet er null, slik at vi unngår divisjon med null (som er udefinert).`,
    },

    // ========== NOTAT: FEILMELDINGER ==========
    {
      id: '8-11-1-note-1',
      type: 'note',
      title: 'Vanlige feilmeldinger',
      content: `Når du programmerer, vil du ofte få **feilmeldinger**. Det er helt normalt! Her er noen vanlige:

**SyntaxError** – Du har skrevet noe feil i koden:
\`\`\`python
print("Hei)  # Mangler avsluttende anførselstegn
\`\`\`

**NameError** – Du bruker en variabel som ikke finnes:
\`\`\`python
print(x)  # x er ikke definert enda
\`\`\`

**TypeError** – Du prøver å gjøre noe som ikke passer:
\`\`\`python
print("Alder: " + 13)  # Kan ikke legge sammen tekst og tall direkte
\`\`\`

**Tips:** Les feilmeldingen nøye. Python forteller deg hvilken linje feilen er på og hva som gikk galt.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '8-11-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Temperaturomregning',
      problem: 'Skriv et program som omregner temperatur fra Celsius til Fahrenheit. Formelen er $F = \\frac{9}{5} \\cdot C + 32$.',
      solution: `\`\`\`python
celsius = float(input("Skriv temperatur i Celsius: "))
fahrenheit = (9/5) * celsius + 32
print(celsius, "°C er det samme som", fahrenheit, "°F")
\`\`\`

Eksempel på kjøring:
\`\`\`
Skriv temperatur i Celsius: 20
20.0 °C er det samme som 68.0 °F
\`\`\`

Et annet eksempel:
\`\`\`
Skriv temperatur i Celsius: 0
0.0 °C er det samme som 32.0 °F
\`\`\`

Vi vet at $0°\\text{C} = 32°\\text{F}$ (frysepunktet til vann), og $100°\\text{C} = 212°\\text{F}$ (kokepunktet). Programmet gir riktige svar!`,
    },

    // ========== TIPS ==========
    {
      id: '8-11-1-tip-1',
      type: 'tip',
      title: 'Tips for nybegynnere',
      content: `- **Start enkelt:** Begynn med korte programmer på 3–5 linjer
- **Test ofte:** Kjør programmet etter hver lille endring
- **Les feilmeldinger:** De forteller deg akkurat hva som er galt
- **Eksperimenter:** Prøv å endre tall og tekst for å se hva som skjer
- **Bruk kommentarer:** Skriv notater i koden med \`#\` for å huske hva koden gjør
- **Ikke gi opp:** Alle programmerere gjør feil – det er en del av læringen!`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skriver dette programmet ut?',
        subTasks: [
          {
            label: 'a',
            task: '```\nx = 5\ny = 3\nprint(x + y)\n```',
            solution: '$8$. Programmet legger sammen $5$ og $3$ og skriver ut summen.',
          },
          {
            label: 'b',
            task: '```\na = 10\nb = 4\nprint(a - b)\nprint(a * b)\n```',
            solution: 'Programmet skriver ut to linjer:\n```\n6\n40\n```\nFørst differansen $10 - 4 = 6$, deretter produktet $10 \\cdot 4 = 40$.',
          },
          {
            label: 'c',
            task: '```\nx = 2\nprint(x ** 4)\n```',
            solution: '$16$. Programmet beregner $2^4 = 16$.',
          },
        ],
        solution: 'a) $8$. b) $6$ og $40$ (to linjer). c) $16$.',
        hints: ['Følg linjene en for en og hold styr på hva variablene inneholder.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skriver dette programmet ut?',
        subTasks: [
          {
            label: 'a',
            task: '```\nprint("3 + 4")\n```',
            solution: '`3 + 4` (som tekst, ikke tallet $7$). Fordi uttrykket står i anførselstegn, behandles det som tekst.',
          },
          {
            label: 'b',
            task: '```\nprint(3 + 4)\n```',
            solution: '$7$. Uten anførselstegn regner Python ut svaret.',
          },
          {
            label: 'c',
            task: '```\nprint(10 / 3)\n```',
            solution: '`3.3333333333333335`. Python gir et desimaltall ved vanlig divisjon.',
          },
          {
            label: 'd',
            task: '```\nprint(10 // 3)\nprint(10 % 3)\n```',
            solution: '`3` og `1` (to linjer). Heltallsdivisjon gir $3$ (vi kan ha $3$ hele treere i $10$), og resten er $10 - 3 \\cdot 3 = 1$.',
          },
        ],
        solution: 'a) `3 + 4` (tekst). b) $7$. c) $3.333...$. d) $3$ og $1$.',
        hints: ['Husk forskjellen: tekst i anførselstegn skrives ut bokstavelig, tall uten anførselstegn regnes ut.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et program som lagrer lengden og bredden av et rektangel i variabler, og skriver ut arealet.',
        solution: `\`\`\`python
lengde = 12
bredde = 7
areal = lengde * bredde
print("Arealet er", areal)
\`\`\`

Utskrift: \`Arealet er 84\`

Man kan velge hvilke tall man vil for lengde og bredde. Det viktige er at arealet beregnes som \`lengde * bredde\`.`,
        hints: ['Areal av rektangel: $A = l \\cdot b$. Lag en variabel for lengden, en for bredden, og en for arealet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som regner ut gjennomsnittet av tre prøveresultater. Bruker skal skrive inn de tre resultatene.',
        solution: `\`\`\`python
resultat1 = float(input("Skriv inn resultat 1: "))
resultat2 = float(input("Skriv inn resultat 2: "))
resultat3 = float(input("Skriv inn resultat 3: "))

gjennomsnitt = (resultat1 + resultat2 + resultat3) / 3
print("Gjennomsnittet er:", gjennomsnitt)
\`\`\`

Eksempel:
\`\`\`
Skriv inn resultat 1: 85
Skriv inn resultat 2: 70
Skriv inn resultat 3: 92
Gjennomsnittet er: 82.33333333333333
\`\`\`

Gjennomsnittet er $\\frac{85 + 70 + 92}{3} = \\frac{247}{3} \\approx 82{,}3$.`,
        hints: [
          'Bruk `float(input(...))` for å hente inn tallene.',
          'Gjennomsnitt = summen av alle tallene delt på antallet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som omregner fra kilometer til mil (norske mil). Brukeren skriver inn antall kilometer.',
        solution: `En norsk mil er $10$ km, så vi deler på $10$:

\`\`\`python
km = float(input("Skriv antall kilometer: "))
mil = km / 10
print(km, "km er", mil, "mil")
\`\`\`

Eksempel:
\`\`\`
Skriv antall kilometer: 47
47.0 km er 4.7 mil
\`\`\``,
        hints: ['1 norsk mil = 10 km. For å gå fra km til mil, deler du på 10.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva skriver dette programmet ut? Følg koden linje for linje.',
        subTasks: [
          {
            label: 'a',
            task: '```\nx = 10\nx = x + 5\nprint(x)\n```',
            solution: '$15$. Først er $x = 10$. Deretter oppdateres $x$ til $10 + 5 = 15$.',
          },
          {
            label: 'b',
            task: '```\na = 3\nb = a * 2\na = a + 1\nprint(a)\nprint(b)\n```',
            solution: 'Programmet skriver ut:\n```\n4\n6\n```\nFørst: $a = 3$. Så: $b = 3 \\cdot 2 = 6$. Så: $a = 3 + 1 = 4$. Merk at $b$ ikke endres selv om $a$ endres etterpå.',
          },
        ],
        solution: 'a) $15$. b) $4$ og $6$ (to linjer).',
        hints: ['Gå gjennom linje for linje og skriv ned hva hver variabel inneholder etter hver linje.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som beregner arealet av en sirkel. Brukeren skriver inn radiusen. Bruk formelen $A = \\pi \\cdot r^2$.',
        solution: `\`\`\`python
pi = 3.14159
radius = float(input("Skriv inn radiusen: "))
areal = pi * radius ** 2
print("Arealet av sirkelen er:", areal)
\`\`\`

Eksempel:
\`\`\`
Skriv inn radiusen: 5
Arealet av sirkelen er: 78.53975
\`\`\`

Vi beregner $A = \\pi \\cdot 5^2 = \\pi \\cdot 25 \\approx 78{,}5$.

**Alternativt** kan man bruke Pythons innebygde \`math\`-modul:
\`\`\`python
import math
radius = float(input("Skriv inn radiusen: "))
areal = math.pi * radius ** 2
print("Arealet av sirkelen er:", areal)
\`\`\``,
        hints: [
          'Du kan sette $\\pi \\approx 3.14159$ i en variabel.',
          'Potens i Python skrives med `**`, så $r^2$ blir `radius ** 2`.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som regner ut prisen etter rabatt. Brukeren skriver inn den opprinnelige prisen og rabatten i prosent.',
        solution: `\`\`\`python
pris = float(input("Skriv inn prisen: "))
rabatt = float(input("Skriv inn rabattprosenten: "))

rabattbelop = pris * rabatt / 100
ny_pris = pris - rabattbelop

print("Opprinnelig pris:", pris, "kr")
print("Rabatt:", rabatt, "%")
print("Du sparer:", rabattbelop, "kr")
print("Ny pris:", ny_pris, "kr")
\`\`\`

Eksempel:
\`\`\`
Skriv inn prisen: 500
Skriv inn rabattprosenten: 20
Opprinnelig pris: 500.0 kr
Rabatt: 20.0 %
Du sparer: 100.0 kr
Ny pris: 400.0 kr
\`\`\`

Vi beregner $20\\%$ av $500 = \\frac{20}{100} \\cdot 500 = 100$ kr. Ny pris: $500 - 100 = 400$ kr.`,
        hints: [
          'For å finne rabattbeløpet: pris · rabatt / 100.',
          'Ny pris = opprinnelig pris − rabattbeløpet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som tar inn et antall sekunder og regner om til timer, minutter og sekunder.',
        solution: `\`\`\`python
totalt = int(input("Skriv inn antall sekunder: "))

timer = totalt // 3600
rest = totalt % 3600
minutter = rest // 60
sekunder = rest % 60

print(totalt, "sekunder er:")
print(timer, "timer,", minutter, "minutter og", sekunder, "sekunder")
\`\`\`

Eksempel:
\`\`\`
Skriv inn antall sekunder: 7384
7384 sekunder er:
2 timer, 3 minutter og 4 sekunder
\`\`\`

**Forklaring:**
- $7384 \\div 3600 = 2$ timer (heltallsdivisjon)
- Rest: $7384 - 2 \\cdot 3600 = 7384 - 7200 = 184$ sekunder
- $184 \\div 60 = 3$ minutter (heltallsdivisjon)
- Rest: $184 - 3 \\cdot 60 = 184 - 180 = 4$ sekunder`,
        hints: [
          'Det er 3600 sekunder i en time og 60 sekunder i et minutt.',
          'Bruk `//` (heltallsdivisjon) for å finne antall hele timer/minutter, og `%` (modulo) for å finne resten.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-1-ex-10',
      type: 'exercise',
      exercise: {
        id: '8-11-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar med egne ord hva følgende program gjør. Hva skrives ut hvis brukeren taster inn $7$?',
        subTasks: [
          {
            label: 'a',
            task: '```\ntall = int(input("Skriv et tall: "))\ndobbelt = tall * 2\nkvadrat = tall ** 2\nprint("Dobbelt:", dobbelt)\nprint("Kvadrat:", kvadrat)\nprint("Sum:", dobbelt + kvadrat)\n```',
            solution: 'Programmet ber brukeren om et tall, beregner det dobbelte og kvadratet, og viser begge samt summen av dem.\n\nMed input $7$:\n- Dobbelt: $7 \\cdot 2 = 14$\n- Kvadrat: $7^2 = 49$\n- Sum: $14 + 49 = 63$',
          },
        ],
        solution: 'Programmet leser inn et tall, beregner det dobbelte og kvadratet, og skriver ut begge samt summen. Med input $7$: Dobbelt $= 14$, Kvadrat $= 49$, Sum $= 63$.',
        hints: ['Gå gjennom linje for linje med $7$ som input.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Programmering
- **Programmering** er å skrive instruksjoner som en datamaskin kan utføre
- **Blokkbasert** (Scratch): dra-og-slipp-blokker, lett å komme i gang
- **Tekstbasert** (Python): skrive kode som tekst, mer kraftig og fleksibelt

### Grunnleggende Python
- \`print()\` – skriver ut tekst eller verdier på skjermen
- \`input()\` – lar brukeren skrive inn data
- \`int()\` og \`float()\` – konverterer tekst til heltall eller desimaltall
- **Variabler** lagrer verdier med et navn, f.eks. \`x = 5\`

### Regneoperasjoner
| Operator | Betydning |
|----------|-----------|
| \`+\`, \`-\` | Addisjon, subtraksjon |
| \`*\`, \`/\` | Multiplikasjon, divisjon |
| \`**\` | Potens ($x^n$) |
| \`//\`, \`%\` | Heltallsdivisjon, rest (modulo) |

### Tips
- Kommentarer skrives med \`#\` og forklarer koden
- Feilmeldinger er normale – les dem nøye for å finne feilen
- Test programmet ofte underveis`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.2: Løkker og variabler
// LK20 KM201: Bruke programmering til å utforske matematiske eigenskapar og
//              samanhengar og til å kode kreative og interaktive produkt
// ============================================================================

export const CHAPTER_8_11_2: TextbookChapter = {
  id: '8-11-2',
  courseId: '8',
  chapterNumber: '11.2',
  title: 'Løkker og variabler',
  description: 'Lær å bruke for-løkker og while-løkker til å gjenta instruksjoner, og utforsk tallfølger og gangetabellen med programmering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-11-2-intro',
      type: 'text',
      content: `## Løkker og variabler

I forrige kapittel lærte du å skrive enkle programmer som utfører instruksjoner linje for linje. Men hva om du vil gjøre det samme mange ganger? For eksempel: hva om du vil skrive ut gangetabellen for $7$? Du kunne skrive ti \`print()\`-kommandoer, men det finnes en mye bedre måte: **løkker**.

En **løkke** er en instruksjon som gjentar en kodeblokk mange ganger. Tenk deg en karrusell som går rundt og rundt – koden i løkken kjøres om igjen og om igjen.

I dette kapittelet skal du lære:
- Hvordan variabler kan oppdateres
- For-løkker for å gjenta kode et bestemt antall ganger
- While-løkker for å gjenta kode så lenge en betingelse er sann
- Å bruke løkker til å utforske tallmønstre og matematikk`,
    },

    // ========== DEFINISJON: OPPDATERE VARIABLER ==========
    {
      id: '8-11-2-def-1',
      type: 'definition',
      title: 'Oppdatere variabler',
      content: `En variabel kan endres underveis i programmet. Vi kan oppdatere verdien ved å bruke variabelens gamle verdi:

\`\`\`python
teller = 0
teller = teller + 1   # teller er nå 1
teller = teller + 1   # teller er nå 2
teller = teller + 1   # teller er nå 3
print(teller)          # Skriver ut 3
\`\`\`

**Forkortelser for vanlige oppdateringer:**

| Vanlig skriving | Forkorting |
|----------------|------------|
| \`x = x + 3\` | \`x += 3\` |
| \`x = x - 1\` | \`x -= 1\` |
| \`x = x * 2\` | \`x *= 2\` |
| \`x = x / 5\` | \`x /= 5\` |

Disse forkortingene gjør akkurat det samme, men er raskere å skrive.`,
    },

    // ========== DEFINISJON: FOR-LØKKE ==========
    {
      id: '8-11-2-def-2',
      type: 'definition',
      title: 'For-løkke',
      content: `En **for-løkke** gjentar en kodeblokk et bestemt antall ganger. I Python bruker vi \`for\` sammen med \`range()\`:

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

Utskrift:
\`\`\`
0
1
2
3
4
\`\`\`

**Hvordan det fungerer:**
- \`range(5)\` gir tallene $0, 1, 2, 3, 4$ (altså $5$ tall, men starter fra $0$)
- Variabelen \`i\` tar etter tur verdien $0$, $1$, $2$, $3$ og $4$
- For hver verdi av \`i\` kjøres koden som er **innrykket** under \`for\`-linjen

**Range med start og slutt:**
- \`range(1, 6)\` gir $1, 2, 3, 4, 5$ (fra $1$ til, men ikke med, $6$)
- \`range(0, 20, 2)\` gir $0, 2, 4, 6, \\ldots, 18$ (fra $0$, steg på $2$, stopper før $20$)
- \`range(10, 0, -1)\` gir $10, 9, 8, \\ldots, 1$ (teller nedover)

**Viktig:** Koden inne i løkken **må** ha innrykk (4 mellomrom eller 1 tab). Dette forteller Python hva som tilhører løkken.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Gangetabellen',
      problem: 'Skriv et program som skriver ut gangetabellen for $7$, fra $7 \\cdot 1$ til $7 \\cdot 10$.',
      solution: `\`\`\`python
for i in range(1, 11):
    print(7, "*", i, "=", 7 * i)
\`\`\`

Utskrift:
\`\`\`
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
\`\`\`

**Forklaring:**
- \`range(1, 11)\` gir tallene $1, 2, 3, \\ldots, 10$
- For hvert tall \`i\` skrives det ut en linje med $7 \\cdot i$
- Løkken kjører 10 ganger – mye enklere enn å skrive 10 separate \`print()\`-linjer!`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Summere tall med løkke',
      problem: 'Skriv et program som beregner summen $1 + 2 + 3 + \\ldots + 100$.',
      solution: `\`\`\`python
total = 0
for i in range(1, 101):
    total += i

print("Summen fra 1 til 100 er:", total)
\`\`\`

Utskrift:
\`\`\`
Summen fra 1 til 100 er: 5050
\`\`\`

**Forklaring:**
- Vi starter med \`total = 0\`
- For hvert tall \`i\` fra $1$ til $100$ legger vi det til \`total\`
- Etter løkken inneholder \`total\` summen av alle tallene

**Sjekk:** Summen $1 + 2 + 3 + \\ldots + n$ kan beregnes med formelen $\\frac{n(n+1)}{2}$:

$$\\frac{100 \\cdot 101}{2} = 5050 \\checkmark$$

Denne historien er kjent: den unge Carl Friedrich Gauss fant denne formelen allerede som 10-åring!`,
    },

    // ========== DEFINISJON: WHILE-LØKKE ==========
    {
      id: '8-11-2-def-3',
      type: 'definition',
      title: 'While-løkke',
      content: `En **while-løkke** gjentar en kodeblokk **så lenge en betingelse er sann**:

\`\`\`python
tall = 1
while tall <= 5:
    print(tall)
    tall += 1
\`\`\`

Utskrift:
\`\`\`
1
2
3
4
5
\`\`\`

**Hvordan det fungerer:**
1. Python sjekker betingelsen \`tall <= 5\`
2. Hvis den er sann (True), kjøres koden inni løkken
3. Deretter går Python tilbake til steg 1 og sjekker igjen
4. Når betingelsen blir usann (False), hopper Python ut av løkken

**Sammenligningsoperatorer:**

| Operator | Betydning |
|----------|-----------|
| \`==\` | Er lik |
| \`!=\` | Er ulik |
| \`<\` | Mindre enn |
| \`>\` | Større enn |
| \`<=\` | Mindre enn eller lik |
| \`>=\` | Større enn eller lik |`,
    },

    // ========== ADVARSEL ==========
    {
      id: '8-11-2-warning-1',
      type: 'warning',
      title: 'Uendelig løkke',
      content: `Hvis betingelsen i en while-løkke **aldri** blir usann, vil løkken kjøre for alltid! Dette kalles en **uendelig løkke**.

\`\`\`python
# IKKE kjør dette - det stopper aldri!
tall = 1
while tall > 0:
    print(tall)
    tall += 1
\`\`\`

Her vokser \`tall\` hele tiden, og betingelsen \`tall > 0\` er alltid sann.

**Tips:** Sørg alltid for at noe inni while-løkken bringer deg nærmere slutten. Hvis programmet «henger», trykk Ctrl+C for å stoppe det.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-11-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Dobling med while-løkke',
      problem: 'Vi starter med $1$ kr og dobler beløpet hver dag. Hvor mange dager tar det før vi har mer enn $1000$ kr?',
      solution: `\`\`\`python
belop = 1
dager = 0

while belop <= 1000:
    belop = belop * 2
    dager = dager + 1

print("Etter", dager, "dager har du", belop, "kr")
\`\`\`

Utskrift:
\`\`\`
Etter 10 dager har du 1024 kr
\`\`\`

**Steg for steg:**

| Dag | Beløp |
|-----|-------|
| $0$ | $1$ kr |
| $1$ | $2$ kr |
| $2$ | $4$ kr |
| $3$ | $8$ kr |
| $4$ | $16$ kr |
| $5$ | $32$ kr |
| $6$ | $64$ kr |
| $7$ | $128$ kr |
| $8$ | $256$ kr |
| $9$ | $512$ kr |
| $10$ | $1024$ kr |

Etter $10$ dager har vi $2^{10} = 1024$ kr, som er mer enn $1000$ kr. Eksponentiell vekst er kraftig!`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '8-11-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Utforske tallmønstre med løkke',
      problem: 'Bruk en løkke til å skrive ut de 10 første trekanttallene. Trekanttall nummer $n$ er $T_n = \\frac{n(n+1)}{2}$.',
      solution: `\`\`\`python
for n in range(1, 11):
    trekanttall = n * (n + 1) // 2
    print("T" + str(n) + " =", trekanttall)
\`\`\`

Utskrift:
\`\`\`
T1 = 1
T2 = 3
T3 = 6
T4 = 10
T5 = 15
T6 = 21
T7 = 28
T8 = 36
T9 = 45
T10 = 55
\`\`\`

**Mønsteret:** $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \\ldots$

Legg merke til at differansene mellom trekanttallene er $2, 3, 4, 5, 6, \\ldots$ – altså de naturlige tallene! Det gir mening fordi $T_n - T_{n-1} = n$.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '8-11-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Partall og oddetall med range()',
      problem: 'Skriv to programmer: ett som skriver ut alle partall fra $2$ til $20$, og ett som skriver ut alle oddetall fra $1$ til $19$.',
      solution: `**Partall:**
\`\`\`python
for i in range(2, 21, 2):
    print(i, end=" ")
\`\`\`

Utskrift: \`2 4 6 8 10 12 14 16 18 20\`

**Oddetall:**
\`\`\`python
for i in range(1, 20, 2):
    print(i, end=" ")
\`\`\`

Utskrift: \`1 3 5 7 9 11 13 15 17 19\`

**Forklaring:**
- \`range(2, 21, 2)\` starter på $2$, øker med $2$ for hvert steg, og stopper før $21$
- \`range(1, 20, 2)\` starter på $1$, øker med $2$ for hvert steg, og stopper før $20$
- \`end=" "\` gjør at \`print()\` setter mellomrom etter hver verdi i stedet for linjeskift`,
    },

    // ========== TEKST: NESTEDE LØKKER ==========
    {
      id: '8-11-2-text-1',
      type: 'text',
      content: `## Nestet løkke

En **nestet løkke** er en løkke inne i en annen løkke. For hver gjennomkjøring av den ytre løkken, kjører den indre løkken alle sine gjennomkjøringer.

\`\`\`python
for rad in range(1, 4):
    for kolonne in range(1, 4):
        print(rad, "*", kolonne, "=", rad * kolonne)
    print()  # Tom linje mellom radene
\`\`\`

Utskrift:
\`\`\`
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3

2 * 1 = 2
2 * 2 = 4
2 * 3 = 6

3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
\`\`\`

**Forklaring:** Den ytre løkken (\`rad\`) går fra $1$ til $3$. For hver verdi av \`rad\` kjører den indre løkken (\`kolonne\`) fra $1$ til $3$. Totalt blir det $3 \\times 3 = 9$ utskrifter.`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skriver dette programmet ut?',
        subTasks: [
          {
            label: 'a',
            task: '```\nfor i in range(4):\n    print(i)\n```',
            solution: '```\n0\n1\n2\n3\n```\n`range(4)` gir tallene $0, 1, 2, 3$.',
          },
          {
            label: 'b',
            task: '```\nfor i in range(1, 6):\n    print(i * 2)\n```',
            solution: '```\n2\n4\n6\n8\n10\n```\nFor hvert tall $i$ fra $1$ til $5$ skrives $2i$ ut.',
          },
          {
            label: 'c',
            task: '```\nfor i in range(3, 0, -1):\n    print(i)\nprint("Start!")\n```',
            solution: '```\n3\n2\n1\nStart!\n```\n`range(3, 0, -1)` teller nedover: $3, 2, 1$. `print("Start!")` er utenfor løkken (ikke innrykket).',
          },
        ],
        solution: 'a) $0, 1, 2, 3$ (under hverandre). b) $2, 4, 6, 8, 10$. c) $3, 2, 1$ og deretter «Start!».',
        hints: ['Husk at `range(n)` starter på $0$ og stopper før $n$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et program som skriver ut gangetabellen for $9$ (fra $9 \\cdot 1$ til $9 \\cdot 10$) ved å bruke en for-løkke.',
        solution: `\`\`\`python
for i in range(1, 11):
    print("9 *", i, "=", 9 * i)
\`\`\`

Utskrift:
\`\`\`
9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
...
9 * 10 = 90
\`\`\``,
        hints: ['Bruk `range(1, 11)` for å gå fra $1$ til $10$. Inni løkken, skriv ut $9 \\cdot i$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et program som beregner summen $1 + 2 + 3 + \\ldots + 50$ ved å bruke en for-løkke.',
        solution: `\`\`\`python
total = 0
for i in range(1, 51):
    total += i
print("Summen er:", total)
\`\`\`

Utskrift: \`Summen er: 1275\`

Sjekk med formelen: $\\frac{50 \\cdot 51}{2} = 1275$ $\\checkmark$`,
        hints: ['Lag en variabel `total` som starter på $0$. I løkken legger du til hvert tall.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva skriver dette programmet ut?',
        subTasks: [
          {
            label: 'a',
            task: '```\nx = 1\nfor i in range(5):\n    x = x * 2\nprint(x)\n```',
            solution: '$32$. Vi starter med $x = 1$ og dobler $5$ ganger: $1 \\to 2 \\to 4 \\to 8 \\to 16 \\to 32$. Altså $x = 2^5 = 32$.',
          },
          {
            label: 'b',
            task: '```\ntotal = 0\nfor i in range(1, 6):\n    total += i * i\nprint(total)\n```',
            solution: '$55$. Vi beregner $1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$.',
          },
        ],
        solution: 'a) $32$. b) $55$.',
        hints: ['Lag en tabell der du skriver ned verdien av variablene etter hver gjennomkjøring av løkken.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som bruker en for-løkke til å beregne $n!$ (n-fakultet) for $n = 7$. Husk at $n! = 1 \\cdot 2 \\cdot 3 \\cdot \\ldots \\cdot n$.',
        solution: `\`\`\`python
n = 7
fakultet = 1
for i in range(1, n + 1):
    fakultet *= i
print(str(n) + "! =", fakultet)
\`\`\`

Utskrift: \`7! = 5040\`

**Sjekk:** $7! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 \\cdot 7 = 5040$ $\\checkmark$`,
        hints: [
          'Start med `fakultet = 1`. Ganger med hvert tall fra $1$ til $n$ i løkken.',
          'Bruk `fakultet *= i` for å gange inn hvert nytt tall.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som bruker en while-løkke til å finne det minste tallet $n$ slik at $2^n > 1\\,000\\,000$.',
        solution: `\`\`\`python
n = 0
potens = 1  # 2^0 = 1

while potens <= 1000000:
    n += 1
    potens *= 2

print("2 ^", n, "=", potens)
print("Det minste n er:", n)
\`\`\`

Utskrift:
\`\`\`
2 ^ 20 = 1048576
Det minste n er: 20
\`\`\`

Altså er $2^{20} = 1\\,048\\,576 > 1\\,000\\,000$, og $2^{19} = 524\\,288 < 1\\,000\\,000$.`,
        hints: [
          'Start med `potens = 1` og doble den i hver gjennomkjøring.',
          'Bruk `while potens <= 1000000:` som betingelse.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som skriver ut alle kvadrattall fra $1$ til $200$. Bruk en while-løkke.',
        solution: `\`\`\`python
n = 1
while n * n <= 200:
    print(n * n)
    n += 1
\`\`\`

Utskrift:
\`\`\`
1
4
9
16
25
36
49
64
81
100
121
144
169
196
\`\`\`

Det siste kvadrattallet som er $\\leq 200$ er $14^2 = 196$. Det neste ville vært $15^2 = 225 > 200$.`,
        hints: [
          'Start med $n = 1$. Sjekk om $n^2 \\leq 200$. Skriv ut $n^2$ og øk $n$ med $1$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som bruker en for-løkke til å skrive ut de 15 første leddene i Fibonacci-følgen: $1, 1, 2, 3, 5, 8, 13, \\ldots$',
        solution: `\`\`\`python
a = 1
b = 1
print(a)
print(b)

for i in range(13):  # Vi har allerede de 2 første, trenger 13 til
    c = a + b
    print(c)
    a = b
    b = c
\`\`\`

Utskrift:
\`\`\`
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
\`\`\`

**Forklaring:** Hvert nytt ledd $c$ er summen av de to forrige ($a$ og $b$). Etter at vi har skrevet ut $c$, oppdaterer vi $a$ og $b$ slik at de peker på de to siste tallene.`,
        hints: [
          'Du trenger to variabler for å huske de to forrige leddene.',
          'Hvert nytt ledd = summen av de to forrige. Etter utregning oppdaterer du variablene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som bruker nestede løkker til å skrive ut den lille gangetabellen ($1 \\times 1$ til $10 \\times 10$).',
        solution: `\`\`\`python
for rad in range(1, 11):
    linje = ""
    for kolonne in range(1, 11):
        produkt = rad * kolonne
        linje += str(produkt).rjust(4)
    print(linje)
\`\`\`

Utskrift (forenklet):
\`\`\`
   1   2   3   4   5   6   7   8   9  10
   2   4   6   8  10  12  14  16  18  20
   3   6   9  12  15  18  21  24  27  30
   ...
  10  20  30  40  50  60  70  80  90 100
\`\`\`

**Forklaring:**
- Den ytre løkken går gjennom radene ($1$ til $10$)
- Den indre løkken bygger opp en linje med alle produktene i den raden
- \`.rjust(4)\` høyrejusterer hvert tall i et felt på 4 tegn, slik at tabellen ser pen ut`,
        hints: [
          'Den ytre løkken styrer radnummeret, den indre løkken styrer kolonnenummeret.',
          'For å få pen formatering, bruk `str(tall).rjust(4)` for å høyrejustere.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-2-ex-10',
      type: 'exercise',
      exercise: {
        id: '8-11-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk en løkke til å utforske følgende påstand: «Summen av de $n$ første oddetallene er alltid et kvadrattall.» Skriv et program som beregner summen for $n = 1, 2, 3, \\ldots, 10$ og viser at det stemmer.',
        solution: `\`\`\`python
for n in range(1, 11):
    total = 0
    for i in range(n):
        oddetall = 2 * i + 1
        total += oddetall
    print("Sum av de", n, "første oddetallene:", total, "=", n, "^ 2")
\`\`\`

Utskrift:
\`\`\`
Sum av de 1 første oddetallene: 1 = 1 ^ 2
Sum av de 2 første oddetallene: 4 = 2 ^ 2
Sum av de 3 første oddetallene: 9 = 3 ^ 2
Sum av de 4 første oddetallene: 16 = 4 ^ 2
Sum av de 5 første oddetallene: 25 = 5 ^ 2
Sum av de 6 første oddetallene: 36 = 6 ^ 2
Sum av de 7 første oddetallene: 49 = 7 ^ 2
Sum av de 8 første oddetallene: 64 = 8 ^ 2
Sum av de 9 første oddetallene: 81 = 9 ^ 2
Sum av de 10 første oddetallene: 100 = 10 ^ 2
\`\`\`

Vi ser at $1 + 3 + 5 + \\ldots + (2n - 1) = n^2$ for alle $n$ fra $1$ til $10$.

Matematisk kan vi vise at dette alltid gjelder:

$$\\sum_{i=1}^{n} (2i - 1) = 2 \\cdot \\frac{n(n+1)}{2} - n = n^2 + n - n = n^2$$`,
        hints: [
          'De første oddetallene er $1, 3, 5, 7, 9, \\ldots$ Oddetall nummer $i$ er $2i - 1$.',
          'Bruk en nestet løkke: den ytre for $n$, den indre for å summere de $n$ første oddetallene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Oppdatere variabler
- \`x = x + 3\` (eller kortformen \`x += 3\`) oppdaterer verdien av $x$
- Vanlig å bruke en «teller» eller «akkumulator» som oppdateres i løkken

### For-løkke
- \`for i in range(n):\` gjentar koden $n$ ganger, med $i = 0, 1, 2, \\ldots, n-1$
- \`range(start, slutt)\` – fra \`start\` til (men ikke med) \`slutt\`
- \`range(start, slutt, steg)\` – med et bestemt steg mellom verdiene
- Koden inni løkken **må ha innrykk**

### While-løkke
- \`while betingelse:\` gjentar koden så lenge betingelsen er sann
- Pass på at betingelsen til slutt blir usann, ellers får du en uendelig løkke
- Nyttig når du ikke vet på forhånd hvor mange ganger koden skal kjøres

### Nestede løkker
- En løkke inne i en annen løkke
- Brukes f.eks. til å lage tabeller (rader og kolonner)

### Matematisk utforskning
- Løkker er perfekte for å utforske tallmønstre (trekanttall, Fibonacci, osv.)
- Vi kan bruke programmering til å bekrefte eller oppdage matematiske sammenhenger`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.3: Algoritmer i matematikk
// LK20 KM201: Bruke programmering til å utforske matematiske eigenskapar og
//              samanhengar og til å kode kreative og interaktive produkt
// ============================================================================

export const CHAPTER_8_11_3: TextbookChapter = {
  id: '8-11-3',
  courseId: '8',
  chapterNumber: '11.3',
  title: 'Algoritmer i matematikk',
  description: 'Lær hva en algoritme er, og utforsk klassiske matematiske algoritmer som Eratosthenes\' sil for primtall, sortering av tall og bruk av flytdiagram.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-11-3-intro',
      type: 'text',
      content: `## Algoritmer i matematikk

Du bruker algoritmer hver dag uten å tenke over det. Når du følger en oppskrift for å lage mat, eller når du sorterer spillkortene dine, utfører du en algoritme. En algoritme er rett og slett en oppskrift – en steg-for-steg-plan for å løse et problem.

I matematikken har algoritmer blitt brukt i tusenvis av år. Den greske matematikeren Euklid beskrev en algoritme for å finne den største felles divisoren allerede rundt 300 f.Kr. I dag bruker vi datamaskiner til å utføre algoritmer lynraskt.

I dette kapittelet skal du lære:
- Hva en algoritme er og hva som kjennetegner en god algoritme
- Å lage flytdiagram for å beskrive algoritmer visuelt
- Å kode klassiske algoritmer: finne primtall og sortere tall`,
    },

    // ========== DEFINISJON: ALGORITME ==========
    {
      id: '8-11-3-def-1',
      type: 'definition',
      title: 'Algoritme',
      content: `En **algoritme** er en nøyaktig, steg-for-steg-beskrivelse av hvordan man løser et problem eller utfører en oppgave.

**Kjennetegn på en god algoritme:**
1. **Endelig:** Den må stoppe etter et begrenset antall steg
2. **Entydig:** Hvert steg må være klart og presist, uten rom for tolkning
3. **Inndata:** Den kan ta imot informasjon (input)
4. **Utdata:** Den gir et resultat (output)
5. **Effektiv:** Den bør løse problemet uten unødvendige steg

**Hverdagseksempel:** Algoritme for å krysse veien:
1. Gå til et gangfelt
2. Se til venstre
3. Se til høyre
4. Hvis det ikke kommer biler: gå over
5. Hvis det kommer biler: vent, og gå tilbake til steg 2`,
    },

    // ========== DEFINISJON: FLYTDIAGRAM ==========
    {
      id: '8-11-3-def-2',
      type: 'definition',
      title: 'Flytdiagram',
      content: `Et **flytdiagram** er en visuell fremstilling av en algoritme. Det bruker ulike former for å vise de forskjellige delene:

- **Oval (avrundet rektangel):** Start og slutt
- **Rektangel:** En handling/instruksjon
- **Rombe (diamant):** En beslutning (ja/nei-spørsmål)
- **Piler:** Viser retningen – hva som skjer neste

**Eksempel: Flytdiagram for «er et tall partall?»**

Start → Les inn tallet $n$ → Er $n \\div 2$ uten rest? → Ja: «$n$ er partall» → Slutt
                                                       → Nei: «$n$ er oddetall» → Slutt

Flytdiagram er nyttige fordi de gir oss en oversikt over hele algoritmen før vi begynner å kode.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Algoritme for å finne det største tallet',
      problem: 'Beskriv en algoritme som finner det største av tre tall $a$, $b$ og $c$.',
      solution: `**Algoritme (med ord):**
1. Les inn tallene $a$, $b$ og $c$
2. Sett \`storst = a\`
3. Hvis $b > $ \`storst\`, sett \`storst = b\`
4. Hvis $c > $ \`storst\`, sett \`storst = c\`
5. Skriv ut \`storst\`

**Python-kode:**
\`\`\`python
a = int(input("Skriv inn a: "))
b = int(input("Skriv inn b: "))
c = int(input("Skriv inn c: "))

storst = a
if b > storst:
    storst = b
if c > storst:
    storst = c

print("Det største tallet er:", storst)
\`\`\`

**Eksempel:** Med $a = 5$, $b = 12$ og $c = 8$:
1. \`storst = 5\`
2. Er $12 > 5$? Ja, så \`storst = 12\`
3. Er $8 > 12$? Nei, \`storst\` forblir $12$
4. Svar: $12$

Denne algoritmen fungerer uansett hvilke tall vi setter inn!`,
    },

    // ========== TEKST: IF-SETNINGER ==========
    {
      id: '8-11-3-text-1',
      type: 'text',
      content: `## If-setninger (betingelser)

For å lage algoritmer som tar beslutninger, trenger vi **if-setninger**. De lar programmet velge ulike veier basert på en betingelse:

\`\`\`python
alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig")
else:
    print("Du er ikke myndig ennå")
\`\`\`

**Forklaring:**
- \`if\` sjekker om betingelsen er sann
- Hvis den er sann, kjøres koden under \`if\`
- Hvis den er usann, kjøres koden under \`else\`

Vi kan også sjekke flere betingelser med \`elif\` (kort for «else if»):

\`\`\`python
poeng = int(input("Hvor mange poeng fikk du? "))

if poeng >= 90:
    print("Karakter: 6")
elif poeng >= 75:
    print("Karakter: 5")
elif poeng >= 60:
    print("Karakter: 4")
elif poeng >= 40:
    print("Karakter: 3")
elif poeng >= 25:
    print("Karakter: 2")
else:
    print("Karakter: 1")
\`\`\`

Python sjekker betingelsene fra toppen. Så snart en betingelse er sann, kjøres den tilhørende koden, og resten hoppes over.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sjekke om et tall er primtall',
      problem: 'Skriv en algoritme som sjekker om et gitt tall $n$ er et primtall.',
      solution: `**Hva er et primtall?** Et tall større enn $1$ som bare er delelig med $1$ og seg selv.

**Algoritme:**
1. Les inn tallet $n$
2. Hvis $n < 2$: «Ikke primtall»
3. For hvert tall $i$ fra $2$ til $n - 1$:
   - Hvis $n$ er delelig med $i$: «Ikke primtall», stopp
4. Hvis vi kom gjennom hele løkken uten å finne en deler: «Primtall»

**Python-kode:**
\`\`\`python
n = int(input("Skriv et tall: "))

if n < 2:
    print(n, "er ikke et primtall")
else:
    er_primtall = True
    for i in range(2, n):
        if n % i == 0:
            er_primtall = False
            break  # Trenger ikke sjekke flere

    if er_primtall:
        print(n, "er et primtall")
    else:
        print(n, "er ikke et primtall")
\`\`\`

**Eksempler:**
- $n = 7$: Vi sjekker $7 \\div 2, 7 \\div 3, 7 \\div 4, 7 \\div 5, 7 \\div 6$ – ingen gir rest $0$, så $7$ er et primtall $\\checkmark$
- $n = 12$: Vi sjekker $12 \\div 2 = 6$ (rest $0$!) – $12$ er **ikke** et primtall

**Nøkkelord:** \`break\` avslutter løkken umiddelbart. Når vi finner en deler, trenger vi ikke sjekke flere.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-11-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Eratosthenes\' sil',
      problem: 'Bruk Eratosthenes\' sil til å finne alle primtall opp til $50$.',
      solution: `**Eratosthenes' sil** er en av de eldste algoritmene vi kjenner til (ca. 240 f.Kr.). Den finner primtall ved å systematisk «sile bort» tall som ikke er primtall.

**Algoritme:**
1. Skriv opp alle tall fra $2$ til $50$
2. Start med det minste tallet ($2$). Det er et primtall.
3. Stryk alle multipler av $2$ (unntatt $2$ selv): $4, 6, 8, 10, \\ldots$
4. Gå til neste tall som ikke er strøket ($3$). Det er et primtall.
5. Stryk alle multipler av $3$ (unntatt $3$ selv): $6, 9, 12, 15, \\ldots$
6. Fortsett med $5, 7, \\ldots$ til du har gått gjennom alle
7. Tallene som gjenstår er primtallene

**Python-kode:**
\`\`\`python
grense = 50
er_primtall = [True] * (grense + 1)
er_primtall[0] = False
er_primtall[1] = False

for i in range(2, grense + 1):
    if er_primtall[i]:
        # Stryk alle multipler av i
        for j in range(i * 2, grense + 1, i):
            er_primtall[j] = False

# Skriv ut alle primtall
print("Primtall opp til", grense, ":")
for i in range(2, grense + 1):
    if er_primtall[i]:
        print(i, end=" ")
\`\`\`

Utskrift:
\`\`\`
Primtall opp til 50:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
\`\`\`

Det er $15$ primtall mellom $2$ og $50$.`,
    },

    // ========== NOTAT: LISTER ==========
    {
      id: '8-11-3-note-1',
      type: 'note',
      title: 'Lister i Python',
      content: `I Eratosthenes' sil brukte vi en **liste**. En liste er en samling av verdier:

\`\`\`python
# Lage en liste med tall
tall = [3, 7, 2, 9, 1]
print(tall)       # [3, 7, 2, 9, 1]
print(tall[0])    # 3 (første element, indeks 0)
print(tall[2])    # 2 (tredje element, indeks 2)
print(len(tall))  # 5 (antall elementer)
\`\`\`

**Viktig:** Lister i Python er indeksert fra $0$, ikke $1$. Det første elementet har indeks $0$, det andre har indeks $1$, og så videre.

Vi kan lage en liste med like verdier:
\`\`\`python
# En liste med 10 nuller
nuller = [0] * 10
# Gir: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
\`\`\``,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '8-11-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Sortere tall (boblesortering)',
      problem: 'Beskriv og programmer en algoritme som sorterer en liste med tall fra minst til størst.',
      solution: `**Boblesortering** er en enkel sorteringsalgoritme. Den sammenligner to og to naboer og bytter dem hvis de er i feil rekkefølge. Vi gjentar prosessen til listen er sortert.

**Algoritme:**
1. Gå gjennom listen fra start til slutt
2. Sammenlign hvert element med neste element
3. Hvis de er i feil rekkefølge, bytt dem
4. Gjenta steg 1–3 til ingen bytter trengs

**Python-kode:**
\`\`\`python
tall = [64, 25, 12, 22, 11]
print("Før sortering:", tall)

n = len(tall)
for i in range(n - 1):
    for j in range(n - 1 - i):
        if tall[j] > tall[j + 1]:
            # Bytt de to tallene
            tall[j], tall[j + 1] = tall[j + 1], tall[j]

print("Etter sortering:", tall)
\`\`\`

Utskrift:
\`\`\`
Før sortering: [64, 25, 12, 22, 11]
Etter sortering: [11, 12, 22, 25, 64]
\`\`\`

**Steg for steg (første gjennomgang):**
- $[\\mathbf{64}, \\mathbf{25}, 12, 22, 11]$ → bytt: $[25, 64, 12, 22, 11]$
- $[25, \\mathbf{64}, \\mathbf{12}, 22, 11]$ → bytt: $[25, 12, 64, 22, 11]$
- $[25, 12, \\mathbf{64}, \\mathbf{22}, 11]$ → bytt: $[25, 12, 22, 64, 11]$
- $[25, 12, 22, \\mathbf{64}, \\mathbf{11}]$ → bytt: $[25, 12, 22, 11, 64]$

Etter første gjennomgang er det største tallet ($64$) «boblet» til slutten. Vi trenger flere gjennomganger for å sortere resten.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: '8-11-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Euklids algoritme for SFD',
      problem: 'Bruk Euklids algoritme til å finne den største felles divisoren (SFD) av $48$ og $18$.',
      solution: `**Euklids algoritme** finner den største felles divisoren (SFD) av to tall. Den er basert på at $\\text{SFD}(a, b) = \\text{SFD}(b, a \\bmod b)$, der $\\bmod$ er rest etter divisjon.

**Steg for steg:**
1. $\\text{SFD}(48, 18)$: $48 \\bmod 18 = 12$ → $\\text{SFD}(18, 12)$
2. $\\text{SFD}(18, 12)$: $18 \\bmod 12 = 6$ → $\\text{SFD}(12, 6)$
3. $\\text{SFD}(12, 6)$: $12 \\bmod 6 = 0$ → Ferdig! SFD $= 6$

**Python-kode:**
\`\`\`python
a = int(input("Skriv inn a: "))
b = int(input("Skriv inn b: "))

# Lagre originalverdiene for utskrift
a_orig, b_orig = a, b

while b != 0:
    rest = a % b
    a = b
    b = rest

print("SFD av", a_orig, "og", b_orig, "er:", a)
\`\`\`

Eksempel:
\`\`\`
Skriv inn a: 48
Skriv inn b: 18
SFD av 48 og 18 er: 6
\`\`\`

**Sjekk:** Divisorene til $48$ er $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$. Divisorene til $18$ er $1, 2, 3, 6, 9, 18$. Den største de har felles er $6$ $\\checkmark$`,
    },

    // ========== TEKST: FLYTDIAGRAM-EKSEMPEL ==========
    {
      id: '8-11-3-text-2',
      type: 'text',
      content: `## Lage flytdiagram

Et flytdiagram hjelper oss å planlegge en algoritme visuelt før vi skriver kode. La oss lage et flytdiagram for «sjekk om et tall er delelig med $3$»:

**Flytdiagram (tekstversjon):**

\`\`\`
    ┌──────────┐
    │  START   │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ Les inn  │
    │ tall n   │
    └────┬─────┘
         │
    ┌────▼─────────┐
    │ Er n % 3 == 0│
    │   (rest=0?)  │
    └──┬────────┬──┘
       │ Ja     │ Nei
  ┌────▼────┐ ┌─▼──────────┐
  │ Skriv:  │ │ Skriv:     │
  │ "n er   │ │ "n er ikke │
  │ delelig │ │ delelig    │
  │ med 3"  │ │ med 3"     │
  └────┬────┘ └─┬──────────┘
       │        │
    ┌──▼────────▼──┐
    │    SLUTT     │
    └──────────────┘
\`\`\`

**Tips for å tegne flytdiagram:**
- Start alltid med en oval «Start»
- Bruk rektangler for handlinger (beregninger, utskrift)
- Bruk romber for ja/nei-spørsmål
- Sørg for at alle veier fører til «Slutt»
- Piler viser retningen gjennom algoritmen`,
    },

    // ========== TIPS ==========
    {
      id: '8-11-3-tip-1',
      type: 'tip',
      title: 'Fra flytdiagram til kode',
      content: `Når du skal løse et programmeringsproblem, kan du følge denne fremgangsmåten:

1. **Forstå problemet:** Hva er input? Hva er ønsket output?
2. **Beskriv med ord:** Skriv algoritmen med vanlige norske setninger
3. **Tegn flytdiagram:** Visualiser stegene og beslutningene
4. **Skriv kode:** Oversett flytdiagrammet til Python
5. **Test:** Kjør programmet med ulike verdier og sjekk at svaret er riktig

Det er mye lettere å feilsøke en algoritme i et flytdiagram enn i kode!`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-11-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva en algoritme er. Gi et eksempel fra hverdagen som ikke handler om datamaskiner.',
        solution: 'En algoritme er en steg-for-steg-oppskrift for å løse et problem. Eksempler fra hverdagen: en matoppskrift (steg-for-steg-instruksjoner for å lage en rett), reisebeskrivelse (sving til venstre, gå 200 meter, osv.), eller instruksjoner for å montere en IKEA-hylle.',
        hints: ['Tenk på noe du gjør steg for steg i hverdagen, for eksempel å lage mat eller finne veien.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skriver dette programmet ut? Er $15$ et primtall?',
        subTasks: [
          {
            label: 'a',
            task: '```\nn = 15\ner_primtall = True\nfor i in range(2, n):\n    if n % i == 0:\n        er_primtall = False\n        break\n\nif er_primtall:\n    print("Primtall")\nelse:\n    print("Ikke primtall")\n```',
            solution: 'Programmet skriver ut `Ikke primtall`. Når $i = 3$ sjekker det $15 \\bmod 3 = 0$, altså er $15$ delelig med $3$. Dermed settes `er_primtall = False` og løkken brytes med `break`.',
          },
        ],
        solution: '`Ikke primtall`. $15 = 3 \\cdot 5$, så $15$ er ikke et primtall.',
        hints: ['Følg koden og sjekk hva som skjer når $i = 3$. Hva er $15 \\bmod 3$?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tegn et flytdiagram for en algoritme som avgjør om et tall er positivt, negativt eller null.',
        solution: `Flytdiagrammet har følgende struktur:

1. **Start**
2. Les inn tallet $n$
3. Er $n > 0$? Ja → Skriv ut «Positivt» → Slutt
4. Er $n < 0$? Ja → Skriv ut «Negativt» → Slutt
5. Ellers → Skriv ut «Null» → Slutt

Kode:
\`\`\`python
n = float(input("Skriv et tall: "))
if n > 0:
    print("Positivt")
elif n < 0:
    print("Negativt")
else:
    print("Null")
\`\`\``,
        hints: ['Du trenger to beslutninger (romber): «Er tallet større enn 0?» og «Er tallet mindre enn 0?»'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Euklids algoritme (med penn og papir) til å finne SFD av følgende tallpar.',
        subTasks: [
          {
            label: 'a',
            task: 'SFD$(24, 36)$',
            solution: '$36 \\bmod 24 = 12$ → $24 \\bmod 12 = 0$ → SFD $= 12$.',
          },
          {
            label: 'b',
            task: 'SFD$(56, 21)$',
            solution: '$56 \\bmod 21 = 14$ → $21 \\bmod 14 = 7$ → $14 \\bmod 7 = 0$ → SFD $= 7$.',
          },
          {
            label: 'c',
            task: 'SFD$(100, 75)$',
            solution: '$100 \\bmod 75 = 25$ → $75 \\bmod 25 = 0$ → SFD $= 25$.',
          },
        ],
        solution: 'a) SFD$(24, 36) = 12$. b) SFD$(56, 21) = 7$. c) SFD$(100, 75) = 25$.',
        hints: [
          'Euklids algoritme: Del det større tallet på det mindre. Resten blir det nye «lille tallet». Gjenta til resten er $0$.',
          'SFD$(a, b)$ = SFD$(b, a \\bmod b)$. Stopp når $b = 0$; da er svaret $a$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Eratosthenes\' sil med penn og papir til å finne alle primtall opp til $30$.',
        solution: `Vi skriver opp tallene fra $2$ til $30$ og streker ut multipler:

1. **Stryk multipler av $2$:** ~~4~~, ~~6~~, ~~8~~, ~~10~~, ~~12~~, ~~14~~, ~~16~~, ~~18~~, ~~20~~, ~~22~~, ~~24~~, ~~26~~, ~~28~~, ~~30~~
2. **Stryk multipler av $3$:** ~~9~~, ~~15~~, ~~21~~, ~~27~~ (6, 12, 18, 24, 30 er allerede strøket)
3. **Stryk multipler av $5$:** ~~25~~ (10, 15, 20, 30 er allerede strøket)
4. $5^2 = 25 < 30$ og $6^2 = 36 > 30$, så vi trenger ikke gå lenger.

**Primtallene opp til $30$:** $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$

Det er $10$ primtall opp til $30$.`,
        hints: [
          'Skriv opp tallene $2, 3, 4, 5, \\ldots, 30$. Start med $2$ og stryk ut $4, 6, 8, \\ldots$',
          'Du trenger bare å sile multipler av primtall opp til $\\sqrt{30} \\approx 5{,}5$, altså primtallene $2$, $3$ og $5$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som finner alle primtall mellom $1$ og $100$ ved å bruke Eratosthenes\' sil.',
        solution: `\`\`\`python
grense = 100
er_primtall = [True] * (grense + 1)
er_primtall[0] = False
er_primtall[1] = False

for i in range(2, grense + 1):
    if er_primtall[i]:
        for j in range(i * 2, grense + 1, i):
            er_primtall[j] = False

print("Primtall mellom 1 og 100:")
antall = 0
for i in range(2, grense + 1):
    if er_primtall[i]:
        print(i, end=" ")
        antall += 1
print()
print("Antall:", antall)
\`\`\`

Utskrift:
\`\`\`
Primtall mellom 1 og 100:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
Antall: 25
\`\`\`

Det er $25$ primtall mellom $1$ og $100$.`,
        hints: [
          'Lag en liste `er_primtall` med `True` for alle tall fra $0$ til $100$.',
          'For hvert primtall $i$, stryk alle multipler $2i, 3i, 4i, \\ldots$ ved å sette dem til `False`.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis steg for steg hvordan boblesortering sorterer listen $[5, 3, 8, 1, 4]$.',
        solution: `**Gjennomgang 1:**
- $[\\mathbf{5}, \\mathbf{3}, 8, 1, 4]$ → bytt: $[3, 5, 8, 1, 4]$
- $[3, \\mathbf{5}, \\mathbf{8}, 1, 4]$ → ok
- $[3, 5, \\mathbf{8}, \\mathbf{1}, 4]$ → bytt: $[3, 5, 1, 8, 4]$
- $[3, 5, 1, \\mathbf{8}, \\mathbf{4}]$ → bytt: $[3, 5, 1, 4, 8]$

**Gjennomgang 2:**
- $[\\mathbf{3}, \\mathbf{5}, 1, 4, 8]$ → ok
- $[3, \\mathbf{5}, \\mathbf{1}, 4, 8]$ → bytt: $[3, 1, 5, 4, 8]$
- $[3, 1, \\mathbf{5}, \\mathbf{4}, 8]$ → bytt: $[3, 1, 4, 5, 8]$

**Gjennomgang 3:**
- $[\\mathbf{3}, \\mathbf{1}, 4, 5, 8]$ → bytt: $[1, 3, 4, 5, 8]$
- $[1, \\mathbf{3}, \\mathbf{4}, 5, 8]$ → ok

**Gjennomgang 4:**
- $[\\mathbf{1}, \\mathbf{3}, 4, 5, 8]$ → ok

Listen er nå sortert: $[1, 3, 4, 5, 8]$`,
        hints: [
          'Sammenlign to og to naboer. Hvis de er i feil rekkefølge, bytt dem.',
          'Etter første gjennomgang er det største tallet på riktig plass (helt til høyre).',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tegn et flytdiagram for Euklids algoritme (finne SFD av to tall). Oversett deretter flytdiagrammet til Python-kode.',
        solution: `**Flytdiagram (tekstversjon):**
\`\`\`
    ┌──────────┐
    │  START   │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ Les inn  │
    │ a og b   │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ Er b = 0?│
    └──┬────┬──┘
       │Ja  │Nei
       │  ┌─▼────────┐
       │  │rest = a%b │
       │  │a = b      │
       │  │b = rest   │
       │  └─┬─────────┘
       │    │ (tilbake til "Er b = 0?")
       │
  ┌────▼─────┐
  │Skriv ut a│
  │(SFD = a) │
  └────┬─────┘
       │
    ┌──▼───┐
    │SLUTT │
    └──────┘
\`\`\`

**Python-kode:**
\`\`\`python
a = int(input("Skriv inn a: "))
b = int(input("Skriv inn b: "))
a_orig, b_orig = a, b

while b != 0:
    rest = a % b
    a = b
    b = rest

print("SFD av", a_orig, "og", b_orig, "er", a)
\`\`\``,
        hints: [
          'Flytdiagrammet trenger en løkke (pil tilbake). Betingelsen er «Er $b = 0$?»',
          'I hvert steg: beregn resten, flytt $b$ til $a$ og resten til $b$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som ber brukeren om et tall $n$ og skriver ut alle **delere** (faktorene) til $n$.',
        solution: `\`\`\`python
n = int(input("Skriv inn et tall: "))

print("Delerne til", n, "er:")
for i in range(1, n + 1):
    if n % i == 0:
        print(i, end=" ")
\`\`\`

Eksempel med $n = 24$:
\`\`\`
Delerne til 24 er:
1 2 3 4 6 8 12 24
\`\`\`

**Forklaring:** Vi sjekker alle tall fra $1$ til $n$. Hvis $n$ er delelig med $i$ (dvs. $n \\bmod i = 0$), er $i$ en deler.

**Sjekk:** $24 = 1 \\cdot 24 = 2 \\cdot 12 = 3 \\cdot 8 = 4 \\cdot 6$, så delerne er $1, 2, 3, 4, 6, 8, 12, 24$ $\\checkmark$`,
        hints: [
          'En deler er et tall som deler $n$ uten rest.',
          'Bruk `if n % i == 0:` for å sjekke om $i$ er en deler av $n$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-11-3-ex-10',
      type: 'exercise',
      exercise: {
        id: '8-11-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en algoritme (med flytdiagram eller pseudokode) og et Python-program som gjetter et hemmelig tall mellom $1$ og $100$. Programmet skal bruke «halveringssøk»: det gjetter midt i intervallet og brukeren svarer om det hemmelige tallet er høyere, lavere eller riktig.',
        solution: `**Algoritme (pseudokode):**
1. Sett \`lav = 1\` og \`hoy = 100\`
2. Beregn \`gjett = (lav + hoy) // 2\`
3. Spør brukeren: «Er tallet \`gjett\`?»
4. Hvis riktig: «Hurra!» og stopp
5. Hvis for lavt: \`lav = gjett + 1\`, gå til steg 2
6. Hvis for høyt: \`hoy = gjett - 1\`, gå til steg 2

**Python-kode:**
\`\`\`python
print("Tenk på et tall mellom 1 og 100!")
print("Svar 'h' (høyere), 'l' (lavere) eller 'r' (riktig)")

lav = 1
hoy = 100
forsok = 0

while lav <= hoy:
    gjett = (lav + hoy) // 2
    forsok += 1
    svar = input("Er tallet " + str(gjett) + "? ")

    if svar == "r":
        print("Jeg gjettet riktig på", forsok, "forsøk!")
        break
    elif svar == "h":
        lav = gjett + 1
    elif svar == "l":
        hoy = gjett - 1
\`\`\`

**Hvorfor er dette effektivt?** For hvert gjett halverer vi antall mulige tall. Vi kan alltid finne riktig tall i maks $7$ forsøk (fordi $2^7 = 128 > 100$).

Dette prinsippet kalles **binærsøk** og er en av de mest brukte algoritmene i informatikk.`,
        hints: [
          'Start med hele intervallet $[1, 100]$ og gjett midt i.',
          'Basert på svaret, forkast den halvdelen der tallet ikke kan være.',
          'Bruk `(lav + hoy) // 2` for å finne midtpunktet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Algoritmer
- En **algoritme** er en steg-for-steg-oppskrift for å løse et problem
- Kjennetegn: endelig, entydig, med inndata og utdata
- Vi har brukt algoritmer i matematikken i tusenvis av år

### Flytdiagram
- Visuell fremstilling av en algoritme
- **Ovaler** = start/slutt, **rektangler** = handlinger, **romber** = beslutninger
- Nyttig for planlegging og kommunikasjon

### Klassiske algoritmer
- **Eratosthenes' sil:** Finner primtall ved å stryke multipler systematisk
- **Boblesortering:** Sorterer tall ved å bytte naboer i feil rekkefølge
- **Euklids algoritme:** Finner største felles divisor (SFD) med gjentatt divisjon
- **Binærsøk:** Finner et tall ved å halvere søkeområdet for hvert steg

### If-setninger
- \`if\`, \`elif\`, \`else\` lar programmet ta beslutninger
- Sammenligningsoperatorer: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`

### Lister
- Samling av verdier: \`tall = [3, 7, 2, 9]\`
- Indeksert fra $0$: \`tall[0]\` gir $3$
- \`len(tall)\` gir antall elementer

### Problemløsning
1. Forstå problemet (hva er input og output?)
2. Beskriv algoritmen med ord
3. Tegn flytdiagram
4. Skriv kode
5. Test med ulike verdier`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 12
// ============================================================================

export const MATEMATIKK_8_DEL12_CHAPTERS = [
  CHAPTER_8_11_1,
  CHAPTER_8_11_2,
  CHAPTER_8_11_3,
];

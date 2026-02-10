/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Seksjon 5: Programmering (Kapittel 5.1–5.7)
 * Denne filen inneholder kapittel 5.1–5.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Grunnleggende programmering
// ============================================================================

export const CHAPTER_TOF_1_5_1: TextbookChapter = {
  id: 'tof-1-5-1',
  courseId: 'tof-1',
  chapterNumber: '5.1',
  title: 'Grunnleggende programmering',
  description: 'Variabler, datatyper, operatorer og enkel inn/ut.',
  estimatedMinutes: 30,
  competenceGoals: ['skrive enkle programmer'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-1-intro',
      type: 'text',
      content: `## Grunnleggende programmering

Programmering handler om å gi presise instruksjoner til en datamaskin. I teknologi og forskningslære bruker vi programmering til å samle inn data fra sensorer, analysere måleresultater, styre elektroniske kretser og automatisere prosesser.

I dette kapittelet lærer du det aller mest grunnleggende: hvordan du lagrer informasjon i **variabler**, hvilke **datatyper** som finnes, hvordan du bruker **operatorer** til å utføre beregninger, og hvordan du kommuniserer med brukeren gjennom **input og print**. Vi bruker programmeringsspråket **Python**, som er mye brukt i forskning, datavitenskap og teknologiutvikling.

Etter dette kapittelet vil du kunne skrive enkle programmer som tar inn data, gjør beregninger og presenterer resultater.`,
    },

    // --- TEORI: Variabler ---
    {
      id: 'tof1-5-1-def-variabler',
      type: 'definition',
      title: 'Variabel',
      content: `En **variabel** er et navn som refererer til en verdi som er lagret i datamaskinens minne. Du kan tenke på en variabel som en **merket boks** der du legger informasjon.

I Python oppretter vi en variabel ved å gi den et navn og en verdi med **tilordningsoperatoren** \`=\`:

\`\`\`python
navn = "Kari"
alder = 17
temperatur = 22.5
\`\`\`

**Regler for variabelnavn i Python:**
- Må starte med en bokstav eller understrek (\`_\`)
- Kan inneholde bokstaver, tall og understrek
- Kan **ikke** inneholde mellomrom eller spesialtegn
- Er **versalfølsomme** (\`Temperatur\` og \`temperatur\` er ulike variabler)
- Bør bruke **beskrivende navn** som forklarer hva variabelen inneholder

**Tips:** Bruk \`snake_case\` (små bokstaver med understrek) for variabelnavn i Python, f.eks. \`maks_temperatur\` og \`antall_malinger\`.`,
    },
    {
      id: 'tof1-5-1-text-variabler',
      type: 'text',
      content: `### Variabler i praksis

Variabler kan endres underveis i programmet – derav navnet «variabel». Du kan tildele en ny verdi til en eksisterende variabel:

\`\`\`python
temperatur = 20.0    # Oppretter variabelen
print(temperatur)    # Skriver ut: 20.0

temperatur = 23.5    # Endrer verdien
print(temperatur)    # Skriver ut: 23.5
\`\`\`

Du kan også bruke verdien i en variabel til å beregne en ny verdi:

\`\`\`python
radius = 5.0
areal = 3.14159 * radius * radius
print(areal)  # Skriver ut: 78.53975
\`\`\`

Det er viktig å forstå at \`=\` i Python **ikke** betyr «er lik» slik det gjør i matematikk. Det betyr **«tilordne verdien til høyre til variabelen til venstre»**. Uttrykket \`x = x + 1\` er helt lovlig i Python – det betyr «ta den nåværende verdien av x, legg til 1, og lagre resultatet tilbake i x».`,
    },

    // --- EKSEMPEL: Variabler ---
    {
      id: 'tof1-5-1-example-variabler',
      type: 'example',
      title: 'Eksempel: Bruk av variabler',
      problem: 'Skriv et Python-program som beregner arealet av en sirkel med radius 7,0 cm og skriver ut resultatet.',
      solution: `\`\`\`python
radius = 7.0
pi = 3.14159
areal = pi * radius * radius

print("Radius:", radius, "cm")
print("Areal:", areal, "cm²")
\`\`\`

**Utskrift:**
\`\`\`
Radius: 7.0 cm
Areal: 153.93791 cm²
\`\`\`

Vi lagrer radius og pi som variabler, beregner arealet med formelen $A = \\pi r^2$, og skriver ut resultatet med \`print()\`. Legg merke til at vi kan skrive ut flere verdier i samme \`print()\`-kall ved å skille dem med komma.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse er et gyldig variabelnavn i Python?',
        options: [
          { id: 'a', text: '2tall', isCorrect: false },
          { id: 'b', text: 'min-verdi', isCorrect: false },
          { id: 'c', text: 'maks_temperatur', isCorrect: true },
          { id: 'd', text: 'mitt nummer', isCorrect: false },
        ],
        solution: 'Riktig svar er C. `maks_temperatur` er gyldig fordi det bruker bokstaver og understrek. `2tall` er ugyldig fordi det starter med et tall. `min-verdi` er ugyldig fordi bindestrek ikke er tillatt. `mitt nummer` er ugyldig fordi variabelnavn ikke kan inneholde mellomrom.',
      },
    },

    // --- TEORI: Datatyper ---
    {
      id: 'tof1-5-1-def-datatyper',
      type: 'definition',
      title: 'Datatyper i Python',
      content: `En **datatype** angir hva slags data en variabel inneholder. Python har flere innebygde datatyper:

| Datatype | Python-navn | Eksempel | Bruksområde |
|---|---|---|---|
| Heltall | \`int\` | \`42\`, \`-7\`, \`0\` | Telling, indekser |
| Desimaltall | \`float\` | \`3.14\`, \`-0.5\`, \`2.0\` | Målinger, beregninger |
| Tekst (streng) | \`str\` | \`"Hei"\`, \`'Python'\` | Tekst, navn, beskjeder |
| Boolsk | \`bool\` | \`True\`, \`False\` | Sannhetsverdier, betingelser |

Python er **dynamisk typet** – du trenger ikke oppgi datatype eksplisitt. Python finner ut typen automatisk ut fra verdien du tilordner:

\`\`\`python
antall = 10          # int
temperatur = 22.5    # float
navn = "Ola"         # str
er_varm = True       # bool
\`\`\`

Du kan sjekke typen til en variabel med funksjonen \`type()\`:

\`\`\`python
print(type(antall))       # <class 'int'>
print(type(temperatur))   # <class 'float'>
\`\`\``,
    },
    {
      id: 'tof1-5-1-text-typekonvertering',
      type: 'text',
      content: `### Typekonvertering

Noen ganger trenger du å konvertere mellom datatyper. De vanligste konverteringsfunksjonene er:

\`\`\`python
heltall = int(3.7)        # Gir 3 (kutter desimalene)
desimal = float(5)        # Gir 5.0
tekst = str(42)           # Gir "42"
tall = int("17")          # Gir 17
\`\`\`

Typekonvertering er spesielt viktig når vi bruker \`input()\`-funksjonen, fordi den alltid returnerer en **streng** – selv om brukeren skriver inn et tall:

\`\`\`python
alder_tekst = input("Hvor gammel er du? ")  # Returnerer streng
alder = int(alder_tekst)                     # Konverterer til heltall
print("Om 10 år er du", alder + 10)
\`\`\`

Dersom du prøver å konvertere noe som ikke gir mening, f.eks. \`int("hei")\`, får du en **feilmelding** (ValueError).`,
    },

    // --- EKSEMPEL: Datatyper ---
    {
      id: 'tof1-5-1-example-datatyper',
      type: 'example',
      title: 'Eksempel: Temperaturomregning',
      problem: 'Skriv et program som ber brukeren om en temperatur i Celsius og regner om til Fahrenheit. Formelen er $F = C \\cdot 1{,}8 + 32$.',
      solution: `\`\`\`python
celsius_tekst = input("Skriv inn temperatur i Celsius: ")
celsius = float(celsius_tekst)

fahrenheit = celsius * 1.8 + 32

print(celsius, "°C tilsvarer", fahrenheit, "°F")
\`\`\`

**Eksempelkjøring:**
\`\`\`
Skriv inn temperatur i Celsius: 25
25.0 °C tilsvarer 77.0 °F
\`\`\`

Vi bruker \`float()\` for å konvertere tekst-inputen til et desimaltall. Deretter bruker vi formelen for omregning og skriver ut resultatet.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva blir resultatet av `type(3.14)` i Python?',
        options: [
          { id: 'a', text: '<class \'int\'>', isCorrect: false },
          { id: 'b', text: '<class \'float\'>', isCorrect: true },
          { id: 'c', text: '<class \'str\'>', isCorrect: false },
          { id: 'd', text: '<class \'bool\'>', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Tallet 3.14 har desimaler, og Python tolker det automatisk som en `float` (desimaltall). Heltall uten desimaler (f.eks. `3`) er `int`.',
      },
    },

    // --- TEORI: Operatorer ---
    {
      id: 'tof1-5-1-def-operatorer',
      type: 'definition',
      title: 'Aritmetiske operatorer',
      content: `**Operatorer** brukes til å utføre beregninger og sammenligninger. De vanligste **aritmetiske operatorene** i Python er:

| Operator | Betydning | Eksempel | Resultat |
|---|---|---|---|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`7 - 3\` | \`4\` |
| \`*\` | Multiplikasjon | \`7 * 3\` | \`21\` |
| \`/\` | Divisjon | \`7 / 3\` | \`2.3333...\` |
| \`//\` | Heltallsdivisjon | \`7 // 3\` | \`2\` |
| \`%\` | Modulo (rest) | \`7 % 3\` | \`1\` |
| \`**\` | Potens | \`2 ** 3\` | \`8\` |

**Operatorpresedens** (regnerekkefølge): Potens → Multiplikasjon/Divisjon → Addisjon/Subtraksjon. Bruk **parenteser** for å endre rekkefølgen:

\`\`\`python
resultat = 2 + 3 * 4      # Gir 14 (multiplikasjon først)
resultat = (2 + 3) * 4    # Gir 20 (parentesen først)
\`\`\``,
    },
    {
      id: 'tof1-5-1-text-strengoperatorer',
      type: 'text',
      content: `### Operatorer for strenger

Noen operatorer fungerer også på tekststrenger:

\`\`\`python
fornavn = "Ola"
etternavn = "Nordmann"

fullt_navn = fornavn + " " + etternavn    # Sammenslåing (konkatenering)
print(fullt_navn)   # Ola Nordmann

linje = "-" * 20    # Repetisjon
print(linje)        # --------------------
\`\`\`

**f-strenger** er en praktisk måte å sette inn variabler i tekst:

\`\`\`python
temperatur = 22.5
sted = "Oslo"
print(f"Temperaturen i {sted} er {temperatur} grader.")
# Skriver ut: Temperaturen i Oslo er 22.5 grader.
\`\`\`

Du kan også formatere tall inne i f-strenger. For å vise desimaltall med et bestemt antall desimaler bruker du kolon og formatkode:

\`\`\`python
pi = 3.14159265
print(f"Pi avrundet: {pi:.2f}")  # Pi avrundet: 3.14
\`\`\``,
    },

    // --- EKSEMPEL: Operatorer ---
    {
      id: 'tof1-5-1-example-operatorer',
      type: 'example',
      title: 'Eksempel: Beregning av gjennomsnitt',
      problem: 'Skriv et program som beregner gjennomsnittstemperaturen fra tre målinger: 18.3 °C, 21.7 °C og 19.5 °C.',
      solution: `\`\`\`python
maling_1 = 18.3
maling_2 = 21.7
maling_3 = 19.5

gjennomsnitt = (maling_1 + maling_2 + maling_3) / 3

print(f"Måling 1: {maling_1} °C")
print(f"Måling 2: {maling_2} °C")
print(f"Måling 3: {maling_3} °C")
print(f"Gjennomsnitt: {gjennomsnitt:.1f} °C")
\`\`\`

**Utskrift:**
\`\`\`
Måling 1: 18.3 °C
Måling 2: 21.7 °C
Måling 3: 19.5 °C
Gjennomsnitt: 19.8 °C
\`\`\`

Vi bruker parenteser for å sikre at summen beregnes før divisjonen, og \`:.1f\` i f-strengen for å vise gjennomsnittet med én desimal.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva blir resultatet av `17 % 5` i Python?',
        options: [
          { id: 'a', text: '3', isCorrect: false },
          { id: 'b', text: '3.4', isCorrect: false },
          { id: 'c', text: '2', isCorrect: true },
          { id: 'd', text: '5', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Modulo-operatoren `%` gir resten ved heltallsdivisjon. $17 \\div 5 = 3$ med rest $2$ (fordi $5 \\cdot 3 = 15$ og $17 - 15 = 2$). Derfor er `17 % 5` lik `2`.',
      },
    },

    // --- NOTE: Print og input ---
    {
      id: 'tof1-5-1-note-io',
      type: 'note',
      title: 'Print og input – kommunikasjon med brukeren',
      content: `De to viktigste funksjonene for kommunikasjon med brukeren er:

**\`print()\`** – skriver ut tekst og verdier til skjermen:
\`\`\`python
print("Hei, verden!")
print("Svaret er:", 42)
print(f"Verdien er {variabel}")
\`\`\`

**\`input()\`** – ber brukeren om å skrive inn noe:
\`\`\`python
svar = input("Skriv noe: ")  # Returnerer alltid en streng
tall = float(input("Skriv et tall: "))  # Konverterer direkte til float
\`\`\`

Husk at \`input()\` alltid gir en **streng**. Hvis du trenger et tall, må du konvertere med \`int()\` eller \`float()\`.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Grunnleggende programmering

I dette kapittelet har du lært de mest grunnleggende byggesteinene i Python:

| Konsept | Forklaring | Eksempel |
|---|---|---|
| **Variabel** | Navngitt lagringsplass for verdier | \`temperatur = 22.5\` |
| **Datatyper** | int, float, str, bool | \`type(3.14)\` → float |
| **Operatorer** | +, -, *, /, //, %, ** | \`2 ** 3\` → 8 |
| **Print** | Skriv ut til skjermen | \`print("Hei")\` |
| **Input** | Les inn fra brukeren | \`input("Skriv: ")\` |
| **f-strenger** | Formatert tekst med variabler | \`f"Temp: {t:.1f}"\` |

**Viktige prinsipper:**
- Bruk beskrivende variabelnavn (snake_case)
- Husk å konvertere input til riktig datatype
- Bruk parenteser for å styre regnerekkefølgen
- Kommentarer med \`#\` gjør koden lesbar for andre`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som ber brukeren om lengde og bredde på et rektangel (i cm), og deretter beregner og skriver ut både arealet og omkretsen. Bruk f-strenger til å formatere utskriften pent, med én desimal.',
        hints: ['Husk at `input()` alltid gir en streng. Du må konvertere til `float()`. Areal = lengde × bredde, omkrets = 2 × (lengde + bredde).'],
        solution: `\`\`\`python
lengde = float(input("Skriv inn lengden (cm): "))
bredde = float(input("Skriv inn bredden (cm): "))

areal = lengde * bredde
omkrets = 2 * (lengde + bredde)

print(f"Lengde: {lengde:.1f} cm")
print(f"Bredde: {bredde:.1f} cm")
print(f"Areal: {areal:.1f} cm²")
print(f"Omkrets: {omkrets:.1f} cm")
\`\`\`

Programmet leser inn lengde og bredde som float-verdier, beregner areal ($A = l \\cdot b$) og omkrets ($O = 2(l + b)$), og bruker f-strenger med \`:.1f\` for å vise resultatet med én desimal.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som konverterer en tid oppgitt i sekunder til timer, minutter og sekunder. Programmet skal be brukeren om antall sekunder og skrive ut resultatet i formatet «X timer, Y minutter og Z sekunder». Bruk heltallsdivisjon (`//`) og modulo (`%`).',
        hints: ['Antall timer = totalt_sekunder // 3600. Resten (totalt_sekunder % 3600) kan deretter deles på 60 for å finne minutter. Siste rest er gjenværende sekunder.'],
        solution: `\`\`\`python
totalt = int(input("Skriv inn antall sekunder: "))

timer = totalt // 3600
rest = totalt % 3600
minutter = rest // 60
sekunder = rest % 60

print(f"{totalt} sekunder = {timer} timer, {minutter} minutter og {sekunder} sekunder")
\`\`\`

**Eksempelkjøring:**
\`\`\`
Skriv inn antall sekunder: 7384
7384 sekunder = 2 timer, 3 minutter og 4 sekunder
\`\`\`

Programmet bruker heltallsdivisjon (\`//\`) for å finne hele timer og minutter, og modulo (\`%\`) for å finne restene. Forklaring: 7384 // 3600 = 2 timer. 7384 % 3600 = 184 sekunder igjen. 184 // 60 = 3 minutter. 184 % 60 = 4 sekunder.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Kontrollstrukturer
// ============================================================================

export const CHAPTER_TOF_1_5_2: TextbookChapter = {
  id: 'tof-1-5-2',
  courseId: 'tof-1',
  chapterNumber: '5.2',
  title: 'Kontrollstrukturer',
  description: 'If-setninger, for-løkker, while-løkker og logiske operatorer.',
  estimatedMinutes: 35,
  prerequisites: ['tof-1-5-1'],
  competenceGoals: ['bruke kontrollstrukturer i programmer'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-2-intro',
      type: 'text',
      content: `## Kontrollstrukturer

Til nå har programmene våre kjørt linje for linje fra topp til bunn. Men i virkelige programmer trenger vi ofte å **ta valg** (gjøre noe bare hvis en betingelse er oppfylt) og **gjenta handlinger** (kjøre de samme instruksjonene mange ganger). Dette styres med **kontrollstrukturer**.

I dette kapittelet lærer du tre viktige kontrollstrukturer:
- **If-setninger** – for å ta beslutninger basert på betingelser
- **For-løkker** – for å gjenta kode et bestemt antall ganger
- **While-løkker** – for å gjenta kode så lenge en betingelse er sann

Disse verktøyene gjør at du kan skrive programmer som reagerer på data og utfører komplekse oppgaver automatisk.`,
    },

    // --- TEORI: Boolske uttrykk ---
    {
      id: 'tof1-5-2-def-boolske',
      type: 'definition',
      title: 'Boolske uttrykk og sammenligningsoperatorer',
      content: `Et **boolsk uttrykk** er et uttrykk som evalueres til enten \`True\` (sant) eller \`False\` (usant). Boolske uttrykk bygges med **sammenligningsoperatorer**:

| Operator | Betydning | Eksempel | Resultat |
|---|---|---|---|
| \`==\` | Er lik | \`5 == 5\` | \`True\` |
| \`!=\` | Er ulik | \`5 != 3\` | \`True\` |
| \`<\` | Mindre enn | \`3 < 5\` | \`True\` |
| \`>\` | Større enn | \`3 > 5\` | \`False\` |
| \`<=\` | Mindre enn eller lik | \`5 <= 5\` | \`True\` |
| \`>=\` | Større enn eller lik | \`6 >= 5\` | \`True\` |

**Logiske operatorer** kombinerer flere boolske uttrykk:

| Operator | Betydning | Eksempel |
|---|---|---|
| \`and\` | Begge må være sanne | \`x > 0 and x < 100\` |
| \`or\` | Minst én må være sann | \`x < 0 or x > 100\` |
| \`not\` | Negasjon (snur sannhetsverdien) | \`not (x > 0)\` |`,
    },
    {
      id: 'tof1-5-2-text-boolske',
      type: 'text',
      content: `### Boolske uttrykk i praksis

Boolske uttrykk er grunnlaget for alle beslutninger i programmering. Her er noen eksempler:

\`\`\`python
temperatur = 25
fuktighet = 80

print(temperatur > 20)          # True
print(temperatur == 25)         # True (merk: dobbelt likhetstegn!)
print(temperatur > 20 and fuktighet > 70)  # True
print(temperatur > 30 or fuktighet > 90)   # False
\`\`\`

**Vanlig feil:** Å bruke enkelt likhetstegn (\`=\`) i stedet for dobbelt (\`==\`) i sammenligninger. Husk: \`=\` **tilordner** en verdi, mens \`==\` **sammenligner** to verdier.

Boolske uttrykk er spesielt nyttige i teknologi og forskningslære – for eksempel for å sjekke om en sensorverdi er innenfor et akseptabelt område, eller om en måling overskrider en alarmgrense.`,
    },

    // --- EKSEMPEL: Boolske uttrykk ---
    {
      id: 'tof1-5-2-example-boolske',
      type: 'example',
      title: 'Eksempel: Sensorvurdering',
      problem: 'En temperatursensor gir verdien 28.5 °C. Skriv boolske uttrykk som sjekker: a) Er temperaturen over 30 °C? b) Er temperaturen mellom 20 og 30 °C? c) Er temperaturen under 0 eller over 35?',
      solution: `\`\`\`python
temp = 28.5

# a) Er temperaturen over 30 °C?
print(temp > 30)     # False

# b) Er temperaturen mellom 20 og 30 °C?
print(temp > 20 and temp < 30)   # True

# c) Er temperaturen under 0 eller over 35?
print(temp < 0 or temp > 35)     # False
\`\`\`

Uttrykk b) bruker \`and\` fordi **begge** betingelsene må stemme. Uttrykk c) bruker \`or\` fordi det holder at **én** av betingelsene er sann.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Gitt `x = 7`, hva blir resultatet av `x >= 5 and x < 10`?',
        options: [
          { id: 'a', text: 'True', isCorrect: true },
          { id: 'b', text: 'False', isCorrect: false },
          { id: 'c', text: '7', isCorrect: false },
          { id: 'd', text: 'Feilmelding', isCorrect: false },
        ],
        solution: 'Riktig svar er A. `x >= 5` er `True` (fordi 7 >= 5), og `x < 10` er `True` (fordi 7 < 10). Når begge sider av `and` er `True`, blir resultatet `True`.',
      },
    },

    // --- TEORI: If-setninger ---
    {
      id: 'tof1-5-2-def-if',
      type: 'definition',
      title: 'If-setninger',
      content: `En **if-setning** lar programmet utføre ulike handlinger avhengig av om en betingelse er sann eller usann.

**Grunnleggende if:**
\`\`\`python
if betingelse:
    # Kode som kjøres hvis betingelsen er True
\`\`\`

**If-else:**
\`\`\`python
if betingelse:
    # Kjøres hvis True
else:
    # Kjøres hvis False
\`\`\`

**If-elif-else (flere betingelser):**
\`\`\`python
if betingelse_1:
    # Kjøres hvis betingelse_1 er True
elif betingelse_2:
    # Kjøres hvis betingelse_2 er True
elif betingelse_3:
    # Kjøres hvis betingelse_3 er True
else:
    # Kjøres hvis ingen av betingelsene er True
\`\`\`

**Viktig:** Kodeblokken under en betingelse må være **rykket inn** med 4 mellomrom (eller én tab). Innrykket forteller Python hvilken kode som hører til betingelsen.`,
    },

    // --- EKSEMPEL: If-setninger ---
    {
      id: 'tof1-5-2-example-if',
      type: 'example',
      title: 'Eksempel: Temperaturvarsling',
      problem: 'Skriv et program som leser inn en temperatur og skriver ut en passende melding: under 0 → «Frost!», 0–15 → «Kaldt», 15–25 → «Behagelig», over 25 → «Varmt!».',
      solution: `\`\`\`python
temp = float(input("Skriv inn temperaturen (°C): "))

if temp < 0:
    print("Frost! Vær forsiktig med glatte veier.")
elif temp <= 15:
    print("Kaldt. Ta på deg en jakke.")
elif temp <= 25:
    print("Behagelig temperatur.")
else:
    print("Varmt! Husk å drikke nok vann.")
\`\`\`

**Eksempelkjøring:**
\`\`\`
Skriv inn temperaturen (°C): 18
Behagelig temperatur.
\`\`\`

Python sjekker betingelsene ovenfra og ned og utfører koden under den **første** betingelsen som er sann. Rekkefølgen er viktig – vi sjekker \`temp < 0\` først, deretter \`temp <= 15\` (som også dekker \`temp >= 0\` fordi vi allerede har utelukket negative verdier).`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skriver følgende kode ut?\n\n```python\nx = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelif x > 5:\n    print("C")\nelse:\n    print("D")\n```',
        options: [
          { id: 'a', text: 'A', isCorrect: false },
          { id: 'b', text: 'B', isCorrect: true },
          { id: 'c', text: 'C', isCorrect: false },
          { id: 'd', text: 'B og C', isCorrect: false },
        ],
        solution: 'Riktig svar er B. `x > 20` er `False` (15 er ikke > 20), så vi hopper videre. `x > 10` er `True` (15 > 10), så «B» skrives ut. Selv om `x > 5` også er `True`, sjekkes den aldri fordi Python stopper ved den første sanne betingelsen i en if-elif-else-kjede.',
      },
    },

    // --- TEORI: For-løkker ---
    {
      id: 'tof1-5-2-def-for',
      type: 'definition',
      title: 'For-løkker',
      content: `En **for-løkke** brukes til å gjenta en kodeblokk et bestemt antall ganger, eller for å gå gjennom elementene i en sekvens.

**Grunnleggende for-løkke med range():**
\`\`\`python
for i in range(5):
    print(i)       # Skriver ut 0, 1, 2, 3, 4
\`\`\`

**range() med ulike argumenter:**
| Kall | Genererer | Forklaring |
|---|---|---|
| \`range(5)\` | 0, 1, 2, 3, 4 | Fra 0 til (men ikke med) 5 |
| \`range(2, 7)\` | 2, 3, 4, 5, 6 | Fra 2 til (men ikke med) 7 |
| \`range(0, 10, 2)\` | 0, 2, 4, 6, 8 | Fra 0 til 10, med steg 2 |

**Løkke gjennom en sekvens:**
\`\`\`python
farger = ["rød", "grønn", "blå"]
for farge in farger:
    print(farge)   # Skriver ut: rød, grønn, blå
\`\`\`

For-løkker er svært nyttige for å behandle mange datapunkter, f.eks. sensorverdier fra et eksperiment.`,
    },

    // --- EKSEMPEL: For-løkker ---
    {
      id: 'tof1-5-2-example-for',
      type: 'example',
      title: 'Eksempel: Gjennomsnitt av målinger',
      problem: 'Skriv et program som ber brukeren om 5 temperaturmålinger, beregner gjennomsnittet og skriver det ut.',
      solution: `\`\`\`python
total = 0

for i in range(5):
    maling = float(input(f"Skriv inn måling {i + 1}: "))
    total = total + maling

gjennomsnitt = total / 5
print(f"Gjennomsnittstemperatur: {gjennomsnitt:.1f} °C")
\`\`\`

**Eksempelkjøring:**
\`\`\`
Skriv inn måling 1: 18.2
Skriv inn måling 2: 19.5
Skriv inn måling 3: 20.1
Skriv inn måling 4: 19.8
Skriv inn måling 5: 18.9
Gjennomsnittstemperatur: 19.3 °C
\`\`\`

Løkken kjører 5 ganger (\`range(5)\` gir verdiene 0–4). For hver iterasjon leser vi inn en måling og legger den til totalen. Vi bruker \`i + 1\` i utskriften slik at nummerering starter på 1 i stedet for 0.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skriver `for i in range(3, 8): print(i)` ut?',
        options: [
          { id: 'a', text: '3 4 5 6 7', isCorrect: true },
          { id: 'b', text: '3 4 5 6 7 8', isCorrect: false },
          { id: 'c', text: '0 1 2 3 4 5 6 7', isCorrect: false },
          { id: 'd', text: '3 5 7', isCorrect: false },
        ],
        solution: 'Riktig svar er A. `range(3, 8)` genererer tallene fra 3 til (men **ikke** med) 8, altså 3, 4, 5, 6, 7. Husk at sluttverdi-en i `range()` ikke er inkludert.',
      },
    },

    // --- TEORI: While-løkker ---
    {
      id: 'tof1-5-2-def-while',
      type: 'definition',
      title: 'While-løkker',
      content: `En **while-løkke** gjentar en kodeblokk **så lenge** en betingelse er sann. While-løkker er nyttige når du ikke vet på forhånd hvor mange ganger løkken skal kjøre.

\`\`\`python
while betingelse:
    # Kode som gjentas så lenge betingelsen er True
\`\`\`

**Eksempel – nedtelling:**
\`\`\`python
tall = 5
while tall > 0:
    print(tall)
    tall = tall - 1    # Viktig: oppdater variabelen!
print("Start!")
\`\`\`
Utskrift: 5, 4, 3, 2, 1, Start!

**Advarsel:** Hvis betingelsen aldri blir \`False\`, får du en **uendelig løkke** – programmet stopper aldri. Pass alltid på at løkkevariabelen endres slik at betingelsen til slutt blir usann.

**\`break\`-setningen** avbryter løkken umiddelbart:
\`\`\`python
while True:
    svar = input("Skriv 'stopp' for å avslutte: ")
    if svar == "stopp":
        break
\`\`\``,
    },

    // --- EKSEMPEL: While-løkke ---
    {
      id: 'tof1-5-2-example-while',
      type: 'example',
      title: 'Eksempel: Gjett tallet',
      problem: 'Skriv et program der datamaskinen velger et tilfeldig tall mellom 1 og 20, og brukeren skal gjette til de finner det riktige tallet.',
      solution: `\`\`\`python
import random

hemmelig = random.randint(1, 20)
antall_forsok = 0

print("Jeg tenker på et tall mellom 1 og 20.")

while True:
    gjett = int(input("Ditt gjett: "))
    antall_forsok = antall_forsok + 1

    if gjett < hemmelig:
        print("For lavt! Prøv igjen.")
    elif gjett > hemmelig:
        print("For høyt! Prøv igjen.")
    else:
        print(f"Riktig! Du brukte {antall_forsok} forsøk.")
        break
\`\`\`

Programmet bruker \`while True\` for å kjøre løkken inntil brukeren gjetter riktig. Inne i løkken brukes en if-elif-else for å gi tilbakemelding. Når brukeren gjetter riktig, avsluttes løkken med \`break\`.`,
    },

    // --- OPPGAVE 4 ---
    {
      id: 'tof1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva blir verdien av `teller` etter at følgende kode er kjørt?\n\n```python\nteller = 0\nwhile teller < 10:\n    teller = teller + 3\n```',
        options: [
          { id: 'a', text: '9', isCorrect: false },
          { id: 'b', text: '10', isCorrect: false },
          { id: 'c', text: '12', isCorrect: true },
          { id: 'd', text: '3', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Løkken øker `teller` med 3 hver gang: 0 → 3 → 6 → 9 → 12. Når `teller` er 9, er betingelsen `9 < 10` sann, så løkken kjører én gang til og gir 12. Når `teller` er 12, er `12 < 10` usann, og løkken stopper. Sluttverdien er 12.',
      },
    },

    // --- WARNING: Uendelige løkker ---
    {
      id: 'tof1-5-2-warning-uendelig',
      type: 'warning',
      title: 'Uendelige løkker',
      content: `En **uendelig løkke** oppstår når betingelsen i en while-løkke aldri blir \`False\`:

\`\`\`python
# FEIL – dette stopper aldri!
tall = 1
while tall > 0:
    print(tall)
    tall = tall + 1    # tall blir bare større, aldri <= 0
\`\`\`

Hvis du havner i en uendelig løkke, trykk **Ctrl+C** for å avbryte programmet. For å unngå uendelige løkker:
- Sørg alltid for at løkkevariabelen **endres** inne i løkken
- Sjekk at endringen bringer betingelsen **nærmere False**
- Bruk \`break\` som nødstopp i \`while True\`-løkker`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Kontrollstrukturer

Du har nå lært de tre viktigste kontrollstrukturene i Python:

| Struktur | Bruksområde | Nøkkelord |
|---|---|---|
| **If-setning** | Ta beslutninger basert på betingelser | \`if\`, \`elif\`, \`else\` |
| **For-løkke** | Gjenta kode et bestemt antall ganger | \`for\`, \`in\`, \`range()\` |
| **While-løkke** | Gjenta kode så lenge betingelse er sann | \`while\`, \`break\` |

**Sammenligningsoperatorer:** \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`
**Logiske operatorer:** \`and\`, \`or\`, \`not\`

**Tommelfingerregel:** Bruk en **for-løkke** når du vet hvor mange ganger koden skal kjøre. Bruk en **while-løkke** når du ikke vet antall gjentagelser, men har en betingelse som skal sjekkes.

Kontrollstrukturer er kjernen i all programmering. Med if-setninger og løkker kan du skrive programmer som reagerer intelligent på data – for eksempel analysere målinger, styre sensorer og automatisere prosesser.`,
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som skriver ut alle partall fra 2 til og med 20 ved hjelp av en for-løkke. Programmet skal i tillegg beregne og skrive ut summen av alle disse partallene.',
        hints: ['Bruk `range(2, 21, 2)` for å generere partall. Opprett en variabel `total = 0` og legg til hvert partall i løkken.'],
        solution: `\`\`\`python
total = 0
print("Partall fra 2 til 20:")

for tall in range(2, 21, 2):
    print(tall)
    total = total + tall

print(f"Summen av partallene: {total}")
\`\`\`

**Utskrift:**
\`\`\`
Partall fra 2 til 20:
2
4
6
...
20
Summen av partallene: 110
\`\`\`

Vi bruker \`range(2, 21, 2)\` som starter på 2, slutter før 21, og øker med 2. Summen $2 + 4 + 6 + ... + 20 = 110$.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 6 ---
    {
      id: 'tof1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som simulerer en enkel temperatursensor. Programmet skal: a) Generere 10 tilfeldige temperaturverdier mellom 15.0 og 35.0 °C (bruk `random.uniform(15, 35)`). b) Skrive ut hver måling med nummering. c) Telle hvor mange målinger som er over 25 °C (alarmgrensen). d) Beregne og skrive ut gjennomsnittstemperaturen og antall alarmer.',
        hints: ['Bruk `import random` og `random.uniform(15, 35)`. Opprett variabler for total-sum og alarm-teller utenfor løkken, og oppdater dem inne i løkken.'],
        solution: `\`\`\`python
import random

total = 0
antall_alarmer = 0

print("Temperatursimulering (10 målinger)")
print("-" * 35)

for i in range(10):
    temp = random.uniform(15, 35)
    total = total + temp

    if temp > 25:
        status = "ALARM!"
        antall_alarmer = antall_alarmer + 1
    else:
        status = "OK"

    print(f"Måling {i + 1:2d}: {temp:.1f} °C  [{status}]")

gjennomsnitt = total / 10
print("-" * 35)
print(f"Gjennomsnitt: {gjennomsnitt:.1f} °C")
print(f"Antall alarmer: {antall_alarmer} av 10")
\`\`\`

Programmet kombinerer for-løkke, if-setning, random-generering og f-strenger. Det teller opp alarmer ved å sjekke hver måling mot grenseverdien 25 °C.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: Funksjoner og moduler
// ============================================================================

export const CHAPTER_TOF_1_5_3: TextbookChapter = {
  id: 'tof-1-5-3',
  courseId: 'tof-1',
  chapterNumber: '5.3',
  title: 'Funksjoner og moduler',
  description: 'Definere og kalle funksjoner, parametre, returverdier og moduler.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-5-2'],
  competenceGoals: ['strukturere programmer med funksjoner'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-3-intro',
      type: 'text',
      content: `## Funksjoner og moduler

Etter hvert som programmene dine blir lengre og mer komplekse, blir det viktig å **organisere koden** godt. **Funksjoner** lar deg samle relaterte instruksjoner i gjenbrukbare blokker med et beskrivende navn. I stedet for å skrive den samme koden på nytt hver gang du trenger den, kan du definere en funksjon én gang og kalle den så mange ganger du vil.

**Moduler** lar deg bruke funksjoner som andre har skrevet – for eksempel Pythons innebygde \`math\`-modul med matematiske funksjoner, eller \`random\`-modulen for tilfeldige tall.

I dette kapittelet lærer du å:
- **Definere** egne funksjoner med \`def\`
- Bruke **parametre** for å sende inn data
- Bruke **returverdier** for å hente ut resultater
- **Importere** og bruke moduler`,
    },

    // --- TEORI: Definere funksjoner ---
    {
      id: 'tof1-5-3-def-funksjoner',
      type: 'definition',
      title: 'Funksjoner',
      content: `En **funksjon** er en navngitt blokk med kode som utfører en bestemt oppgave. Du **definerer** funksjonen med nøkkelordet \`def\`, og **kaller** den ved å skrive navnet med parenteser.

**Enkleste form – funksjon uten parametre:**
\`\`\`python
def hils():
    print("Hei og velkommen!")
    print("Klar for programmering?")

# Kalle funksjonen:
hils()    # Skriver ut de to linjene
hils()    # Kan kalles flere ganger
\`\`\`

**Funksjonen utføres ikke av seg selv** – den kjøres bare når du **kaller** den (skriver navnet med parenteser). Du kan kalle den så mange ganger du ønsker.

**Navnekonvensjoner:**
- Bruk \`snake_case\` (små bokstaver med understrek)
- Velg beskrivende navn som forklarer hva funksjonen gjør
- Eksempler: \`beregn_areal()\`, \`les_temperatur()\`, \`skriv_rapport()\``,
    },
    {
      id: 'tof1-5-3-text-parametre',
      type: 'text',
      content: `### Parametre og argumenter

**Parametre** gjør funksjoner fleksible – de lar deg sende inn ulike data hver gang du kaller funksjonen.

\`\`\`python
def hils_person(navn):       # 'navn' er en parameter
    print(f"Hei, {navn}!")

hils_person("Ola")           # "Ola" er et argument
hils_person("Kari")          # "Kari" er et argument
\`\`\`

Du kan ha **flere parametre**, separert med komma:

\`\`\`python
def beskriv_maling(sted, temperatur, tid):
    print(f"Sted: {sted}")
    print(f"Temperatur: {temperatur} °C")
    print(f"Tidspunkt: {tid}")

beskriv_maling("Oslo", 18.5, "14:30")
beskriv_maling("Bergen", 15.2, "09:00")
\`\`\`

**Standardverdier** lar deg gi parametre forhåndsdefinerte verdier:

\`\`\`python
def beregn_kraft(masse, akselerasjon=9.81):
    kraft = masse * akselerasjon
    print(f"Kraft: {kraft:.1f} N")

beregn_kraft(10)           # Bruker standardverdien 9.81
beregn_kraft(10, 3.7)      # Overstyrer med 3.7 (f.eks. Mars)
\`\`\``,
    },

    // --- EKSEMPEL: Funksjoner med parametre ---
    {
      id: 'tof1-5-3-example-parametre',
      type: 'example',
      title: 'Eksempel: Funksjon for temperaturomregning',
      problem: 'Skriv en funksjon `celsius_til_fahrenheit(celsius)` som regner om Celsius til Fahrenheit, og en funksjon `fahrenheit_til_celsius(fahrenheit)` som regner den andre veien. Test begge.',
      solution: `\`\`\`python
def celsius_til_fahrenheit(celsius):
    fahrenheit = celsius * 1.8 + 32
    print(f"{celsius} °C = {fahrenheit:.1f} °F")

def fahrenheit_til_celsius(fahrenheit):
    celsius = (fahrenheit - 32) / 1.8
    print(f"{fahrenheit} °F = {celsius:.1f} °C")

# Test:
celsius_til_fahrenheit(0)      # 0 °C = 32.0 °F
celsius_til_fahrenheit(100)    # 100 °C = 212.0 °F
fahrenheit_til_celsius(98.6)   # 98.6 °F = 37.0 °C
\`\`\`

Hver funksjon har et tydelig navn som beskriver hva den gjør, og tar inn én parameter. Ved å skrive beregningen som en funksjon kan vi enkelt gjenbruke den med ulike verdier.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skriver følgende kode ut?\n\n```python\ndef doble(x):\n    print(x * 2)\n\ndoble(7)\n```',
        options: [
          { id: 'a', text: '7', isCorrect: false },
          { id: 'b', text: '14', isCorrect: true },
          { id: 'c', text: 'x * 2', isCorrect: false },
          { id: 'd', text: 'Ingenting – funksjonen er bare definert, ikke kalt', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Funksjonen `doble(7)` kalles med argumentet 7. Inne i funksjonen er `x = 7`, og `x * 2 = 14` skrives ut.',
      },
    },

    // --- TEORI: Returverdier ---
    {
      id: 'tof1-5-3-def-retur',
      type: 'definition',
      title: 'Returverdier',
      content: `En funksjon kan **returnere** en verdi tilbake til stedet den ble kalt fra, ved å bruke nøkkelordet \`return\`.

\`\`\`python
def beregn_areal(radius):
    areal = 3.14159 * radius ** 2
    return areal

# Bruk returverdien:
mitt_areal = beregn_areal(5.0)
print(f"Arealet er {mitt_areal:.2f}")  # Arealet er 78.54
\`\`\`

**Forskjellen mellom \`print()\` og \`return\`:**
- \`print()\` viser verdien på skjermen, men **lagrer** den ikke
- \`return\` sender verdien **tilbake** slik at den kan brukes videre i programmet

\`\`\`python
# Med print – kan ikke bruke resultatet videre:
def areal_print(r):
    print(3.14159 * r ** 2)

# Med return – resultatet kan lagres og brukes:
def areal_return(r):
    return 3.14159 * r ** 2

resultat = areal_return(3.0)      # resultat = 28.27...
dobbelt = resultat * 2             # Kan brukes videre!
\`\`\`

En funksjon kan returnere **flere verdier** ved å skille dem med komma:

\`\`\`python
def beregn_sirkel(radius):
    areal = 3.14159 * radius ** 2
    omkrets = 2 * 3.14159 * radius
    return areal, omkrets

a, o = beregn_sirkel(5.0)
print(f"Areal: {a:.1f}, Omkrets: {o:.1f}")
\`\`\``,
    },

    // --- EKSEMPEL: Returverdier ---
    {
      id: 'tof1-5-3-example-retur',
      type: 'example',
      title: 'Eksempel: Statistikkfunksjoner',
      problem: 'Skriv en funksjon `beregn_gjennomsnitt(verdier)` som tar inn en liste med tall og returnerer gjennomsnittet. Skriv også en funksjon `finn_maks(verdier)` som returnerer den høyeste verdien.',
      solution: `\`\`\`python
def beregn_gjennomsnitt(verdier):
    total = 0
    for v in verdier:
        total = total + v
    return total / len(verdier)

def finn_maks(verdier):
    hoyest = verdier[0]
    for v in verdier:
        if v > hoyest:
            hoyest = v
    return hoyest

# Test med temperaturdata:
temperaturer = [18.3, 21.7, 19.5, 23.1, 17.8]

snitt = beregn_gjennomsnitt(temperaturer)
maks = finn_maks(temperaturer)

print(f"Gjennomsnitt: {snitt:.1f} °C")    # 20.1 °C
print(f"Høyeste: {maks} °C")               # 23.1 °C
\`\`\`

Begge funksjonene bruker \`return\` for å sende resultatet tilbake. Vi kan deretter lagre resultatene i variabler og bruke dem videre. Funksjonen \`len(verdier)\` gir antall elementer i listen.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er verdien av `resultat` etter at følgende kode er kjørt?\n\n```python\ndef legg_til(a, b):\n    return a + b\n\ndef doble(x):\n    return x * 2\n\nresultat = doble(legg_til(3, 4))\n```',
        options: [
          { id: 'a', text: '7', isCorrect: false },
          { id: 'b', text: '10', isCorrect: false },
          { id: 'c', text: '14', isCorrect: true },
          { id: 'd', text: '24', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Først evalueres `legg_til(3, 4)` som returnerer 7. Deretter kalles `doble(7)` som returnerer 14. Funksjoner kan brukes som argumenter til andre funksjoner – Python evaluerer innenfra og ut.',
      },
    },

    // --- TEORI: Moduler ---
    {
      id: 'tof1-5-3-def-moduler',
      type: 'definition',
      title: 'Moduler',
      content: `En **modul** er en fil med Python-kode som inneholder funksjoner, variabler og klasser som kan gjenbrukes i andre programmer. Python har mange **innebygde moduler** som er klare til bruk.

**Importere en hel modul:**
\`\`\`python
import math

print(math.pi)           # 3.141592653589793
print(math.sqrt(25))     # 5.0
print(math.sin(math.pi)) # ~0 (sinus til pi)
\`\`\`

**Importere bestemte funksjoner:**
\`\`\`python
from math import sqrt, pi

print(pi)          # 3.141592653589793
print(sqrt(25))    # 5.0 (trenger ikke 'math.' foran)
\`\`\`

**Nyttige innebygde moduler for teknologi og forskning:**

| Modul | Beskrivelse | Eksempel |
|---|---|---|
| \`math\` | Matematiske funksjoner | \`math.sqrt()\`, \`math.log()\` |
| \`random\` | Tilfeldige tall | \`random.randint()\`, \`random.uniform()\` |
| \`time\` | Tid og forsinkelser | \`time.sleep()\`, \`time.time()\` |
| \`statistics\` | Statistikk | \`statistics.mean()\`, \`statistics.stdev()\` |`,
    },
    {
      id: 'tof1-5-3-text-moduler',
      type: 'text',
      content: `### Moduler i praksis

Her er et eksempel som bruker flere moduler for å simulere et vitenskapelig eksperiment:

\`\`\`python
import math
import random
import statistics

# Generere simulerte temperaturdata med støy
malinger = []
for i in range(20):
    sann_temp = 22.0 + 3.0 * math.sin(i * 0.5)  # Varierer med sinus
    stoy = random.uniform(-0.5, 0.5)              # Tilfeldig målestøy
    malinger.append(sann_temp + stoy)

# Bruke statistics-modulen for analyse
gjennomsnitt = statistics.mean(malinger)
std_avvik = statistics.stdev(malinger)

print(f"Antall målinger: {len(malinger)}")
print(f"Gjennomsnitt: {gjennomsnitt:.2f} °C")
print(f"Standardavvik: {std_avvik:.2f} °C")
\`\`\`

Du kan også lage dine **egne moduler** ved å lagre funksjoner i en Python-fil. Hvis du lagrer funksjoner i \`mine_funksjoner.py\`, kan du importere dem i et annet program med \`import mine_funksjoner\`.

Moduler er en av de store styrkene ved Python – de lar deg bygge på arbeidet til andre og gjenbruke kode på tvers av prosjekter.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken modul må du importere for å bruke funksjonen `sqrt()` (kvadratrot)?',
        options: [
          { id: 'a', text: 'random', isCorrect: false },
          { id: 'b', text: 'math', isCorrect: true },
          { id: 'c', text: 'time', isCorrect: false },
          { id: 'd', text: 'statistics', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Funksjonen `sqrt()` (kvadratrot) finnes i `math`-modulen. Du kan bruke den med `import math` og deretter `math.sqrt(25)`, eller med `from math import sqrt` og deretter `sqrt(25)`.',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Funksjoner og moduler

Du har lært hvordan du organiserer kode i gjenbrukbare blokker:

| Konsept | Forklaring | Eksempel |
|---|---|---|
| **Definere funksjon** | Lag en navngitt kodeblokk | \`def beregn(x):\` |
| **Parametre** | Dataen funksjonen tar imot | \`def f(a, b):\` |
| **Returverdi** | Resultat som sendes tilbake | \`return areal\` |
| **Standardverdi** | Forhåndsdefinert parameterverdi | \`def f(x=10):\` |
| **Modul** | Fil med gjenbrukbare funksjoner | \`import math\` |

**Fordeler med funksjoner:**
- **Gjenbruk:** Skriv koden én gang, bruk den mange ganger
- **Lesbarhet:** Beskrivende funksjonsnavn gjør koden lettere å forstå
- **Vedlikehold:** Endringer gjøres ett sted, virker overalt
- **Testing:** Lettere å teste små, isolerte deler av programmet

**Tommelfingerregel:** Hvis du kopierer og limer inn den samme koden mer enn to ganger, bør du lage en funksjon.`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en funksjon `beregn_bmi(vekt_kg, hoyde_m)` som beregner og returnerer BMI (body mass index). Formelen er $\\text{BMI} = \\frac{\\text{vekt}}{\\text{høyde}^2}$. Skriv deretter et hovedprogram som bruker funksjonen: les inn vekt og høyde fra brukeren, beregn BMI, og skriv ut resultatet med én desimal samt en vurdering (under 18.5: «Undervekt», 18.5–24.9: «Normalvekt», 25–29.9: «Overvekt», 30+: «Fedme»).',
        hints: ['Definer funksjonen med `def beregn_bmi(vekt_kg, hoyde_m):` og bruk `return vekt_kg / hoyde_m ** 2`. Bruk if-elif-else for vurderingen i hovedprogrammet.'],
        solution: `\`\`\`python
def beregn_bmi(vekt_kg, hoyde_m):
    return vekt_kg / hoyde_m ** 2

# Hovedprogram:
vekt = float(input("Skriv inn vekt (kg): "))
hoyde = float(input("Skriv inn høyde (m): "))

bmi = beregn_bmi(vekt, hoyde)

if bmi < 18.5:
    kategori = "Undervekt"
elif bmi < 25:
    kategori = "Normalvekt"
elif bmi < 30:
    kategori = "Overvekt"
else:
    kategori = "Fedme"

print(f"BMI: {bmi:.1f} ({kategori})")
\`\`\`

Funksjonen \`beregn_bmi\` er ren – den tar inn data og returnerer et resultat uten sideeffekter. Hovedprogrammet håndterer brukerinteraksjon og vurdering. Denne separasjonen gjør koden ryddig og gjenbrukbar.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et program med tre funksjoner for enkel dataanalyse: a) `generer_data(n)` – genererer og returnerer en liste med `n` tilfeldige heltall mellom 1 og 100 (bruk `random.randint`). b) `analyser_data(data)` – tar inn en liste og returnerer gjennomsnitt, høyeste verdi og laveste verdi (bruk `return snitt, maks, min_v`). c) `skriv_rapport(data, snitt, maks, min_v)` – skriver en pent formatert rapport. Hovedprogrammet skal generere 15 tall, analysere dem og skrive rapporten.',
        hints: ['I `generer_data` bruker du en for-løkke og `append()` for å bygge listen. I `analyser_data` bruker du en for-løkke for å finne maks/min, og sum/lengde for gjennomsnittet.'],
        solution: `\`\`\`python
import random

def generer_data(n):
    data = []
    for i in range(n):
        data.append(random.randint(1, 100))
    return data

def analyser_data(data):
    total = 0
    maks = data[0]
    min_v = data[0]
    for verdi in data:
        total = total + verdi
        if verdi > maks:
            maks = verdi
        if verdi < min_v:
            min_v = verdi
    snitt = total / len(data)
    return snitt, maks, min_v

def skriv_rapport(data, snitt, maks, min_v):
    print("=" * 30)
    print("DATAANALYSE-RAPPORT")
    print("=" * 30)
    print(f"Antall verdier: {len(data)}")
    print(f"Data: {data}")
    print(f"Gjennomsnitt: {snitt:.1f}")
    print(f"Høyeste verdi: {maks}")
    print(f"Laveste verdi: {min_v}")
    print(f"Spennvidde: {maks - min_v}")
    print("=" * 30)

# Hovedprogram:
data = generer_data(15)
snitt, maks, min_v = analyser_data(data)
skriv_rapport(data, snitt, maks, min_v)
\`\`\`

Programmet viser god bruk av funksjoner: hver funksjon har én tydelig oppgave, og hovedprogrammet er kort og oversiktlig. Funksjonene kan gjenbrukes med ulike data uten endringer.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Lister og datastrukturer
// ============================================================================

export const CHAPTER_TOF_1_5_4: TextbookChapter = {
  id: 'tof-1-5-4',
  courseId: 'tof-1',
  chapterNumber: '5.4',
  title: 'Lister og datastrukturer',
  description: 'Lister, indeksering, iterasjon og grunnleggende databehandling.',
  estimatedMinutes: 35,
  prerequisites: ['tof-1-5-3'],
  competenceGoals: ['arbeide med lister og datastrukturer'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-4-intro',
      type: 'text',
      content: `## Lister og datastrukturer

Når du arbeider med data fra eksperimenter og sensorer, trenger du ofte å lagre **mange verdier** sammen – for eksempel 100 temperaturmålinger, en serie med tidspunkter, eller navnene på ulike kjemiske stoffer. I Python bruker vi **lister** til dette.

En **liste** er en ordnet samling av verdier som du kan legge til, fjerne, sortere og lete gjennom. Lister er den mest brukte datastrukturen i Python og er helt sentrale for databehandling i teknologi og forskning.

I dette kapittelet lærer du å:
- Opprette og bruke lister
- Hente ut elementer med **indeksering**
- Gå gjennom lister med **iterasjon**
- Bruke innebygde funksjoner for **sortering** og analyse`,
    },

    // --- TEORI: Opprette lister ---
    {
      id: 'tof1-5-4-def-lister',
      type: 'definition',
      title: 'Lister i Python',
      content: `En **liste** er en ordnet samling av verdier, avgrenset med hakeparenteser \`[]\` og separert med komma.

\`\`\`python
# Ulike typer lister:
temperaturer = [18.3, 21.7, 19.5, 23.1, 17.8]
elever = ["Ola", "Kari", "Per", "Liv"]
primtall = [2, 3, 5, 7, 11, 13]
blandet = ["tekst", 42, 3.14, True]    # Kan blande typer
tom_liste = []                          # Tom liste
\`\`\`

**Viktige egenskaper ved lister:**
- **Ordnet:** Elementene har en bestemt rekkefølge
- **Indeksert:** Hvert element har en **indeks** (posisjon) som starter på 0
- **Foranderlig (mutable):** Du kan legge til, fjerne og endre elementer
- **Kan inneholde alle datatyper**, inkludert andre lister

**Lengden** til en liste finner du med \`len()\`:
\`\`\`python
print(len(temperaturer))   # 5
print(len(tom_liste))      # 0
\`\`\``,
    },
    {
      id: 'tof1-5-4-text-indeksering',
      type: 'text',
      content: `### Indeksering – hente ut elementer

Hvert element i en liste har en **indeks** som starter på **0**:

\`\`\`python
frukter = ["eple", "banan", "appelsin", "druer"]
#  indeks:    0       1         2          3
\`\`\`

Hent ut elementer med hakeparenteser:
\`\`\`python
print(frukter[0])    # eple      (første element)
print(frukter[2])    # appelsin  (tredje element)
print(frukter[-1])   # druer     (siste element)
print(frukter[-2])   # appelsin  (nest siste)
\`\`\`

**Slicing** – hent ut en del av listen:
\`\`\`python
tall = [10, 20, 30, 40, 50, 60]

print(tall[1:4])     # [20, 30, 40]  (indeks 1, 2, 3)
print(tall[:3])      # [10, 20, 30]  (fra start til indeks 3)
print(tall[3:])      # [40, 50, 60]  (fra indeks 3 til slutt)
\`\`\`

Du kan også **endre** et element ved å tilordne en ny verdi:
\`\`\`python
frukter[1] = "mango"
print(frukter)       # ["eple", "mango", "appelsin", "druer"]
\`\`\`

**OBS:** Hvis du prøver å hente ut en indeks som ikke finnes (f.eks. \`frukter[10]\`), får du en \`IndexError\`.`,
    },

    // --- EKSEMPEL: Indeksering ---
    {
      id: 'tof1-5-4-example-indeks',
      type: 'example',
      title: 'Eksempel: Temperaturdata',
      problem: 'Gitt listen `temp = [15.2, 18.7, 22.1, 19.8, 24.3, 20.5, 17.6]` (syv daglige temperaturmålinger). Finn: a) Temperaturen på dag 1 (indeks 0), b) Temperaturen på den siste dagen, c) Temperaturene fra dag 3 til dag 5.',
      solution: `\`\`\`python
temp = [15.2, 18.7, 22.1, 19.8, 24.3, 20.5, 17.6]

# a) Dag 1 (indeks 0):
print(f"Dag 1: {temp[0]} °C")       # 15.2 °C

# b) Siste dag:
print(f"Siste dag: {temp[-1]} °C")  # 17.6 °C

# c) Dag 3 til dag 5 (indeks 2, 3, 4):
print(f"Dag 3–5: {temp[2:5]}")      # [22.1, 19.8, 24.3]
\`\`\`

Husk at indeksering starter på 0, så «dag 1» er indeks 0 og «dag 3» er indeks 2. Ved slicing er startindeksen inkludert, men sluttindeksen er **ikke** inkludert – \`temp[2:5]\` gir indeks 2, 3 og 4.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Gitt `data = [10, 20, 30, 40, 50]`. Hva er verdien av `data[3]`?',
        options: [
          { id: 'a', text: '30', isCorrect: false },
          { id: 'b', text: '40', isCorrect: true },
          { id: 'c', text: '50', isCorrect: false },
          { id: 'd', text: 'IndexError', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Indeksering starter på 0: `data[0]` = 10, `data[1]` = 20, `data[2]` = 30, `data[3]` = 40. Det er vanlig å forveksle indeks og verdi, men husk at indeks 3 er det **fjerde** elementet.',
      },
    },

    // --- TEORI: Listefunksjoner ---
    {
      id: 'tof1-5-4-def-metoder',
      type: 'definition',
      title: 'Listemetoder',
      content: `Python har mange innebygde **metoder** for å manipulere lister:

| Metode | Beskrivelse | Eksempel |
|---|---|---|
| \`append(x)\` | Legger til x på slutten | \`liste.append(42)\` |
| \`insert(i, x)\` | Setter inn x på indeks i | \`liste.insert(0, "ny")\` |
| \`remove(x)\` | Fjerner første forekomst av x | \`liste.remove(42)\` |
| \`pop(i)\` | Fjerner og returnerer element på indeks i | \`liste.pop(2)\` |
| \`sort()\` | Sorterer listen (endrer originalen) | \`liste.sort()\` |
| \`reverse()\` | Snur rekkefølgen | \`liste.reverse()\` |
| \`count(x)\` | Teller forekomster av x | \`liste.count(5)\` |
| \`index(x)\` | Finner indeks til første x | \`liste.index("Ola")\` |

**Innebygde funksjoner** som virker på lister:

| Funksjon | Beskrivelse | Eksempel |
|---|---|---|
| \`len(liste)\` | Antall elementer | \`len([1, 2, 3])\` → 3 |
| \`sum(liste)\` | Summen av tallene | \`sum([1, 2, 3])\` → 6 |
| \`min(liste)\` | Minste verdi | \`min([3, 1, 2])\` → 1 |
| \`max(liste)\` | Største verdi | \`max([3, 1, 2])\` → 3 |
| \`sorted(liste)\` | Ny sortert kopi | \`sorted([3, 1, 2])\` → [1, 2, 3] |`,
    },
    {
      id: 'tof1-5-4-text-metoder',
      type: 'text',
      content: `### Bygge opp lister dynamisk

I teknologi og forskning bygger vi ofte opp lister trinn for trinn – for eksempel ved å lese inn sensordata i en løkke:

\`\`\`python
malinger = []    # Start med tom liste

for i in range(5):
    verdi = float(input(f"Måling {i + 1}: "))
    malinger.append(verdi)    # Legg til ny måling

print(f"Du skrev inn: {malinger}")
print(f"Gjennomsnitt: {sum(malinger) / len(malinger):.1f}")
\`\`\`

**Forskjellen mellom \`sort()\` og \`sorted()\`:**

\`\`\`python
tall = [5, 2, 8, 1, 9]

# sort() endrer originalen:
tall.sort()
print(tall)           # [1, 2, 5, 8, 9]  (originalen er endret)

# sorted() lager en ny liste:
tall = [5, 2, 8, 1, 9]
ny = sorted(tall)
print(ny)             # [1, 2, 5, 8, 9]  (ny sortert liste)
print(tall)           # [5, 2, 8, 1, 9]  (originalen er uendret)
\`\`\`

Bruk \`sorted()\` når du vil beholde originalen, og \`.sort()\` når du er ferdig med den opprinnelige rekkefølgen.`,
    },

    // --- EKSEMPEL: Listefunksjoner ---
    {
      id: 'tof1-5-4-example-metoder',
      type: 'example',
      title: 'Eksempel: Analyse av eksperimentdata',
      problem: 'Du har målt pH-verdier i en elv på 8 ulike steder: `[7.2, 6.8, 7.5, 6.3, 7.1, 6.9, 7.8, 6.5]`. Skriv et program som finner gjennomsnitt, høyeste og laveste verdi, sorterer målingene og teller hvor mange som er under 7.0 (sur).',
      solution: `\`\`\`python
ph_verdier = [7.2, 6.8, 7.5, 6.3, 7.1, 6.9, 7.8, 6.5]

# Grunnleggende statistikk:
gjennomsnitt = sum(ph_verdier) / len(ph_verdier)
hoyest = max(ph_verdier)
lavest = min(ph_verdier)

# Tell sure prøver (pH < 7.0):
antall_sure = 0
for ph in ph_verdier:
    if ph < 7.0:
        antall_sure = antall_sure + 1

# Sortert oversikt:
sortert = sorted(ph_verdier)

print(f"Antall målinger: {len(ph_verdier)}")
print(f"Gjennomsnitt pH: {gjennomsnitt:.2f}")
print(f"Laveste pH: {lavest}")
print(f"Høyeste pH: {hoyest}")
print(f"Sortert: {sortert}")
print(f"Antall sure prøver (pH < 7): {antall_sure}")
\`\`\`

**Utskrift:**
\`\`\`
Antall målinger: 8
Gjennomsnitt pH: 7.01
Laveste pH: 6.3
Høyeste pH: 7.8
Sortert: [6.3, 6.5, 6.8, 6.9, 7.1, 7.2, 7.5, 7.8]
Antall sure prøver (pH < 7): 4
\`\`\``,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skriver følgende kode ut?\n\n```python\ntall = [3, 1, 4, 1, 5]\ntall.append(9)\ntall.sort()\nprint(tall[0], tall[-1])\n```',
        options: [
          { id: 'a', text: '3 9', isCorrect: false },
          { id: 'b', text: '1 9', isCorrect: true },
          { id: 'c', text: '9 1', isCorrect: false },
          { id: 'd', text: '1 5', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Etter `append(9)` er listen `[3, 1, 4, 1, 5, 9]`. Etter `sort()` er listen `[1, 1, 3, 4, 5, 9]`. `tall[0]` er det første elementet (1) og `tall[-1]` er det siste (9). Utskriften er `1 9`.',
      },
    },

    // --- TEORI: Iterasjon ---
    {
      id: 'tof1-5-4-def-iterasjon',
      type: 'definition',
      title: 'Iterasjon over lister',
      content: `**Iterasjon** betyr å gå gjennom hvert element i en liste. Det finnes flere måter å gjøre dette på i Python:

**Metode 1: Direkte iterasjon (vanligst)**
\`\`\`python
farger = ["rød", "grønn", "blå"]
for farge in farger:
    print(farge)
\`\`\`

**Metode 2: Iterasjon med indeks**
\`\`\`python
for i in range(len(farger)):
    print(f"Indeks {i}: {farger[i]}")
\`\`\`

**Metode 3: enumerate() – gir både indeks og verdi**
\`\`\`python
for i, farge in enumerate(farger):
    print(f"{i}: {farge}")
\`\`\`

**List comprehension** – en kompakt måte å lage nye lister:
\`\`\`python
tall = [1, 2, 3, 4, 5]
kvadrater = [x ** 2 for x in tall]
print(kvadrater)   # [1, 4, 9, 16, 25]

# Med betingelse:
store = [x for x in tall if x > 3]
print(store)       # [4, 5]
\`\`\`

List comprehension er spesielt nyttig for databehandling – for eksempel å filtrere ut målinger som overstiger en grenseverdi.`,
    },

    // --- EKSEMPEL: Iterasjon ---
    {
      id: 'tof1-5-4-example-iterasjon',
      type: 'example',
      title: 'Eksempel: Filtrering av sensordata',
      problem: 'Du har en liste med 10 lysmålinger (i lux): `[450, 120, 890, 35, 670, 15, 780, 200, 950, 80]`. Skriv et program som filtrerer ut alle målinger under 100 lux (mørke forhold) og beregner gjennomsnittet av de gjenværende målingene.',
      solution: `\`\`\`python
malinger = [450, 120, 890, 35, 670, 15, 780, 200, 950, 80]

# Filtrer med list comprehension:
lyse = [m for m in malinger if m >= 100]
morke = [m for m in malinger if m < 100]

print(f"Alle målinger: {malinger}")
print(f"Lyse målinger (>= 100 lux): {lyse}")
print(f"Mørke målinger (< 100 lux): {morke}")

if len(lyse) > 0:
    snitt = sum(lyse) / len(lyse)
    print(f"Gjennomsnitt (uten mørke): {snitt:.0f} lux")
\`\`\`

**Utskrift:**
\`\`\`
Alle målinger: [450, 120, 890, 35, 670, 15, 780, 200, 950, 80]
Lyse målinger (>= 100 lux): [450, 120, 890, 670, 780, 200, 950]
Mørke målinger (< 100 lux): [35, 15, 80]
Gjennomsnitt (uten mørke): 580 lux
\`\`\`

List comprehension \`[m for m in malinger if m >= 100]\` lager en ny liste med bare de verdiene som oppfyller betingelsen. Dette er en svært nyttig teknikk for å filtrere eksperimentdata.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva blir resultatet av følgende kode?\n\n```python\ntall = [2, 4, 6, 8, 10]\nresultat = [x * 3 for x in tall if x > 5]\nprint(resultat)\n```',
        options: [
          { id: 'a', text: '[6, 12, 18, 24, 30]', isCorrect: false },
          { id: 'b', text: '[18, 24, 30]', isCorrect: true },
          { id: 'c', text: '[6, 8, 10]', isCorrect: false },
          { id: 'd', text: '[2, 4, 6, 8, 10]', isCorrect: false },
        ],
        solution: 'Riktig svar er B. List comprehension-en gjør to ting: 1) Filtrerer – bare elementer der `x > 5` beholdes (6, 8, 10). 2) Transformerer – hvert element ganges med 3 (6×3=18, 8×3=24, 10×3=30). Resultatet er `[18, 24, 30]`.',
      },
    },

    // --- NOTE: Dictionaries ---
    {
      id: 'tof1-5-4-note-dict',
      type: 'note',
      title: 'Andre datastrukturer: Dictionaries',
      content: `I tillegg til lister har Python **dictionaries** (ordbøker) som lagrer data som **nøkkel-verdi-par**:

\`\`\`python
sensor = {
    "type": "temperatur",
    "enhet": "°C",
    "verdi": 22.5,
    "sted": "Oslo"
}

print(sensor["verdi"])     # 22.5
print(sensor["sted"])      # Oslo

sensor["verdi"] = 23.1     # Endre verdi
sensor["tid"] = "14:30"    # Legge til nytt par
\`\`\`

Dictionaries er nyttige for å lagre **strukturerte data** der hver verdi har et beskrivende navn (nøkkel), for eksempel sensoravlesninger med metadata.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Lister og datastrukturer

Du har lært å arbeide med Pythons viktigste datastruktur:

| Konsept | Forklaring | Eksempel |
|---|---|---|
| **Opprette liste** | Hakeparenteser med komma | \`[1, 2, 3]\` |
| **Indeksering** | Hente element med posisjon | \`liste[0]\`, \`liste[-1]\` |
| **Slicing** | Hente en del av listen | \`liste[1:4]\` |
| **append()** | Legge til på slutten | \`liste.append(x)\` |
| **sort() / sorted()** | Sortere listen | \`liste.sort()\` |
| **len/sum/min/max** | Innebygde funksjoner | \`sum(liste)\` |
| **List comprehension** | Kompakt listebygging | \`[x**2 for x in tall]\` |
| **Iterasjon** | Gå gjennom alle elementer | \`for x in liste:\` |

**Viktige prinsipper:**
- Indeksering starter alltid på **0**
- Negative indekser teller bakfra (\`-1\` = siste)
- Ved slicing er sluttindeksen **ikke** inkludert
- \`sort()\` endrer originallisten, \`sorted()\` lager en kopi

Lister er uunnværlige for databehandling – fra innsamling av sensordata til analyse og presentasjon av resultater.`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som ber brukeren om å skrive inn karakterer (heltall 1–6) til de skriver «ferdig». Programmet skal lagre karakterene i en liste og deretter skrive ut: antall karakterer, gjennomsnittskarakteren (med én desimal), beste og dårligste karakter, og listen sortert fra best til dårligst.',
        hints: ['Bruk en while-løkke med `input()`. Sjekk om brukeren skriver «ferdig» for å avslutte. Konverter til `int()` og bruk `append()` for å legge til i listen. Husk at 6 er best og 1 er dårligst i det norske systemet – bruk `sort(reverse=True)` for synkende rekkefølge.'],
        solution: `\`\`\`python
karakterer = []

print("Skriv inn karakterer (1-6). Skriv 'ferdig' for å avslutte.")

while True:
    svar = input("Karakter: ")
    if svar == "ferdig":
        break
    karakter = int(svar)
    if 1 <= karakter <= 6:
        karakterer.append(karakter)
    else:
        print("Ugyldig karakter. Skriv et tall mellom 1 og 6.")

if len(karakterer) > 0:
    snitt = sum(karakterer) / len(karakterer)
    sortert = sorted(karakterer, reverse=True)

    print(f"\\nAntall karakterer: {len(karakterer)}")
    print(f"Gjennomsnitt: {snitt:.1f}")
    print(f"Beste karakter: {max(karakterer)}")
    print(f"Dårligste karakter: {min(karakterer)}")
    print(f"Sortert (best til dårligst): {sortert}")
else:
    print("Ingen karakterer ble registrert.")
\`\`\`

Programmet kombinerer while-løkke, if-setninger, listemetoder og innebygde funksjoner. Det validerer også input for å sikre at bare gyldige karakterer (1–6) legges til.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som simulerer et enkelt værstasjons-datasystem. Programmet skal: a) Generere 30 tilfeldige temperaturmålinger mellom -10.0 og 30.0 °C (bruk `random.uniform(-10, 30)`). b) Beregne gjennomsnitt, medianen (midtverdi i sortert liste), høyeste og laveste temperatur. c) Telle antall dager med frost (under 0 °C), lune dager (0–20 °C) og varme dager (over 20 °C). d) Skrive ut en pent formatert rapport med alle resultatene.',
        hints: ['For medianen: sorter listen og finn elementet i midten. Hvis listen har partall lengde, ta gjennomsnittet av de to midterste. Bruk `len(liste) // 2` for å finne midtindeksen. Lag gjerne egne funksjoner for beregningene.'],
        solution: `\`\`\`python
import random

def beregn_median(verdier):
    sortert = sorted(verdier)
    n = len(sortert)
    if n % 2 == 1:
        return sortert[n // 2]
    else:
        return (sortert[n // 2 - 1] + sortert[n // 2]) / 2

# Generer data
temperaturer = []
for i in range(30):
    temperaturer.append(random.uniform(-10, 30))

# Beregn statistikk
gjennomsnitt = sum(temperaturer) / len(temperaturer)
median = beregn_median(temperaturer)
hoyest = max(temperaturer)
lavest = min(temperaturer)

# Tell kategorier
frost = [t for t in temperaturer if t < 0]
lune = [t for t in temperaturer if 0 <= t <= 20]
varme = [t for t in temperaturer if t > 20]

# Rapport
print("=" * 40)
print("   VÆRSTASJONSRAPPORT (30 dager)")
print("=" * 40)
print(f"Gjennomsnitt:    {gjennomsnitt:6.1f} °C")
print(f"Median:          {median:6.1f} °C")
print(f"Høyeste:         {hoyest:6.1f} °C")
print(f"Laveste:         {lavest:6.1f} °C")
print(f"Spennvidde:      {hoyest - lavest:6.1f} °C")
print("-" * 40)
print(f"Frostdager (< 0 °C):    {len(frost):3d}")
print(f"Lune dager (0–20 °C):   {len(lune):3d}")
print(f"Varme dager (> 20 °C):  {len(varme):3d}")
print("=" * 40)
\`\`\`

Programmet viser avansert bruk av lister: generering med løkke, innebygde funksjoner for statistikk, list comprehension for filtrering og en egendefinert funksjon for median.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 6 ---
    {
      id: 'tof1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som leser inn en liste med navn og tilhørende poeng (fra en konkurranse). Programmet skal: a) Be brukeren skrive inn navn og poeng for minst 5 deltakere (lagre i to parallelle lister). b) Finne og skrive ut vinneren (den med flest poeng). c) Sortere deltakerne etter poeng (synkende) og skrive ut en resultatliste med plassering. Bruk funksjoner for å strukturere programmet.',
        hints: ['Bruk to lister: `navn_liste` og `poeng_liste` med same indeks for samme person. For å finne vinneren, bruk `max(poeng_liste)` og `poeng_liste.index(maks)` for å finne indeksen. For sortert visning kan du bruke `zip()` og `sorted()` med `key`-parameter.'],
        solution: `\`\`\`python
def les_inn_deltakere():
    navn_liste = []
    poeng_liste = []

    print("Skriv inn minst 5 deltakere. Skriv 'ferdig' for å avslutte.")
    while len(navn_liste) < 5 or (len(navn_liste) >= 5):
        navn = input(f"Deltaker {len(navn_liste) + 1} (navn eller 'ferdig'): ")
        if navn == "ferdig" and len(navn_liste) >= 5:
            break
        elif navn == "ferdig":
            print(f"Du må skrive inn minst 5 deltakere (har {len(navn_liste)}).")
            continue
        poeng = int(input(f"Poeng for {navn}: "))
        navn_liste.append(navn)
        poeng_liste.append(poeng)

    return navn_liste, poeng_liste

def finn_vinner(navn_liste, poeng_liste):
    maks_poeng = max(poeng_liste)
    vinner_indeks = poeng_liste.index(maks_poeng)
    return navn_liste[vinner_indeks], maks_poeng

def skriv_resultatliste(navn_liste, poeng_liste):
    # Kombiner og sorter etter poeng (synkende)
    deltakere = list(zip(navn_liste, poeng_liste))
    sortert = sorted(deltakere, key=lambda x: x[1], reverse=True)

    print("\\nRESULTATLISTE")
    print("-" * 30)
    for i, (navn, poeng) in enumerate(sortert):
        print(f"  {i + 1}. {navn:15s} {poeng:4d} poeng")

# Hovedprogram
navn, poeng = les_inn_deltakere()
vinner, vinner_poeng = finn_vinner(navn, poeng)

print(f"\\nVinner: {vinner} med {vinner_poeng} poeng!")
skriv_resultatliste(navn, poeng)
\`\`\`

Programmet viser parallelle lister, \`zip()\` for å kombinere dem, \`sorted()\` med \`key\`-parameter for tilpasset sortering, og god funksjonsstruktur der hver funksjon har én oppgave.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Filhåndtering og databehandling
// ============================================================================

export const CHAPTER_TOF_1_5_5: TextbookChapter = {
  id: 'tof-1-5-5',
  courseId: 'tof-1',
  chapterNumber: '5.5',
  title: 'Filhåndtering og databehandling',
  description: 'Lese og skrive filer, CSV-data og enkel databehandling.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-5-4'],
  competenceGoals: ['behandle data fra filer i programmer'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-5-intro',
      type: 'text',
      content: `## Filhåndtering og databehandling

I teknologi og forskningslære jobber vi ofte med data som er lagret i **filer** – for eksempel temperaturmålinger fra en sensor, trafikkdata fra en kommune, eller kjemiske analyseresultater. For å kunne analysere slike data med programmering, må vi kunne **lese data fra filer** og **skrive resultater tilbake**.

I dette kapittelet lærer du å:
- Åpne, lese og skrive **tekstfiler** med Python
- Lese og behandle data i **CSV-format** (kommaseparerte verdier)
- Bruke \`with\`-setningen for sikker filhåndtering
- Gjøre enkel **databehandling** som filtrering, beregning og oppsummering

Filhåndtering er en sentral ferdighet i all programmering – fra å lese inndata fra sensorer til å generere rapporter og eksportere resultater.`,
    },

    // --- TEORI: Åpne og lese filer ---
    {
      id: 'tof1-5-5-def-open',
      type: 'definition',
      title: 'Åpne filer med open()',
      content: `Funksjonen **\`open()\`** åpner en fil i Python. Den tar to hovedargumenter: **filnavnet** og **modusen** (hva du vil gjøre med filen).

\`\`\`python
fil = open("data.txt", "r")   # Åpne for lesing (read)
fil = open("resultat.txt", "w")  # Åpne for skriving (write) – overskriver!
fil = open("logg.txt", "a")   # Åpne for tillegg (append)
\`\`\`

**Viktige moduser:**
| Modus | Betydning | Beskrivelse |
|-------|-----------|-------------|
| \`"r"\` | Read | Leser filen (standard) |
| \`"w"\` | Write | Skriver til filen – **sletter** eksisterende innhold |
| \`"a"\` | Append | Legger til på slutten av filen |

**Best practice:** Bruk alltid **\`with\`-setningen** for å åpne filer. Da lukkes filen automatisk når du er ferdig, selv om det oppstår en feil:

\`\`\`python
with open("data.txt", "r") as fil:
    innhold = fil.read()
    print(innhold)
# Filen lukkes automatisk her
\`\`\``,
    },
    {
      id: 'tof1-5-5-text-lese-metoder',
      type: 'text',
      content: `### Ulike måter å lese filer på

Python gir deg flere metoder for å lese innholdet i en fil:

\`\`\`python
# Metode 1: Les hele filen som én streng
with open("data.txt", "r") as fil:
    alt = fil.read()
    print(alt)

# Metode 2: Les alle linjer som en liste
with open("data.txt", "r") as fil:
    linjer = fil.readlines()
    for linje in linjer:
        print(linje.strip())   # strip() fjerner linjeskift

# Metode 3: Les linje for linje (mest minneeffektivt)
with open("data.txt", "r") as fil:
    for linje in fil:
        print(linje.strip())
\`\`\`

**\`strip()\`** fjerner mellomrom og linjeskift (\`\\n\`) i starten og slutten av en streng. Dette er viktig fordi hver linje i en fil vanligvis ender med et linjeskift-tegn.

**Metode 3** er anbefalt for store filer, fordi den bare leser én linje om gangen i stedet for å laste hele filen inn i minnet.`,
    },

    // --- EKSEMPEL: Lese en fil ---
    {
      id: 'tof1-5-5-example-les',
      type: 'example',
      title: 'Lese målinger fra en tekstfil',
      content: `Tenk deg at vi har en fil \`temperaturer.txt\` med én temperaturverdi per linje:

\`\`\`
18.3
21.7
19.5
23.1
17.8
22.0
\`\`\`

Vi kan lese disse verdiene og beregne gjennomsnittet:

\`\`\`python
temperaturer = []

with open("temperaturer.txt", "r") as fil:
    for linje in fil:
        verdi = float(linje.strip())
        temperaturer.append(verdi)

antall = len(temperaturer)
gjennomsnitt = sum(temperaturer) / antall

print(f"Antall målinger: {antall}")
print(f"Gjennomsnitt: {gjennomsnitt:.1f} °C")
print(f"Høyeste: {max(temperaturer):.1f} °C")
print(f"Laveste: {min(temperaturer):.1f} °C")
\`\`\`

**Utskrift:**
\`\`\`
Antall målinger: 6
Gjennomsnitt: 20.4 °C
Høyeste: 23.1 °C
Laveste: 17.8 °C
\`\`\`

Legg merke til at vi bruker \`float(linje.strip())\` for å konvertere hver linje fra tekst til desimaltall. Uten \`strip()\` ville linjeskift-tegnet forårsaket en feil.`,
    },

    // --- OPPGAVE 1 (multiple-choice) ---
    {
      id: 'tof1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør modusen `"a"` når du åpner en fil med `open("logg.txt", "a")`?',
        options: [
          { id: 'a', text: 'Leser innholdet i filen', isCorrect: false },
          { id: 'b', text: 'Sletter innholdet og skriver nytt', isCorrect: false },
          { id: 'c', text: 'Legger til nytt innhold på slutten av filen', isCorrect: true },
          { id: 'd', text: 'Oppretter en kopi av filen', isCorrect: false },
        ],
        solution: 'Modusen `"a"` (append) legger til nytt innhold på slutten av filen uten å slette det eksisterende innholdet. Til forskjell sletter `"w"` (write) alt eksisterende innhold, og `"r"` (read) åpner filen bare for lesing.',
      },
    },

    // --- TEORI: Skrive til fil ---
    {
      id: 'tof1-5-5-text-skrive',
      type: 'text',
      content: `### Skrive til filer

For å lagre resultater bruker vi \`write()\` eller \`print()\` med \`file\`-parameteren:

\`\`\`python
# Metode 1: write() – skriver en streng
with open("resultat.txt", "w") as fil:
    fil.write("Temperaturrapport\\n")
    fil.write("=================\\n")
    fil.write(f"Gjennomsnitt: {20.4:.1f} °C\\n")

# Metode 2: print() med file-parameter
with open("resultat.txt", "w") as fil:
    print("Temperaturrapport", file=fil)
    print("=================", file=fil)
    print(f"Gjennomsnitt: {20.4:.1f} °C", file=fil)
\`\`\`

**Merk:** Med \`write()\` må du legge til linjeskift (\`\\n\`) manuelt, mens \`print()\` legger det til automatisk.

Du kan også skrive mange linjer på én gang med \`writelines()\`:

\`\`\`python
linjer = ["Linje 1\\n", "Linje 2\\n", "Linje 3\\n"]
with open("output.txt", "w") as fil:
    fil.writelines(linjer)
\`\`\`

**Tips:** Bruk **\`"a"\`-modus** (append) når du vil legge til data i en eksisterende fil uten å slette det som allerede er der – for eksempel for å logge sensordata over tid.`,
    },

    // --- EKSEMPEL: Skrive resultat til fil ---
    {
      id: 'tof1-5-5-example-skriv',
      type: 'example',
      title: 'Lagre analyseresultater i en fil',
      content: `La oss lese temperaturer fra en fil, analysere dem, og skrive en rapport til en ny fil:

\`\`\`python
# Les data
temperaturer = []
with open("temperaturer.txt", "r") as fil:
    for linje in fil:
        temperaturer.append(float(linje.strip()))

# Analyser
gjennomsnitt = sum(temperaturer) / len(temperaturer)
frost = [t for t in temperaturer if t < 0]

# Skriv rapport
with open("rapport.txt", "w") as fil:
    print("TEMPERATURRAPPORT", file=fil)
    print("=" * 30, file=fil)
    print(f"Antall målinger:  {len(temperaturer)}", file=fil)
    print(f"Gjennomsnitt:     {gjennomsnitt:.1f} °C", file=fil)
    print(f"Høyeste:          {max(temperaturer):.1f} °C", file=fil)
    print(f"Laveste:          {min(temperaturer):.1f} °C", file=fil)
    print(f"Frostdager:       {len(frost)}", file=fil)

print("Rapport skrevet til rapport.txt")
\`\`\`

Programmet viser en typisk arbeidsflyt: **les data → analyser → skriv resultater**. Dette mønsteret brukes i nesten all databehandling.`,
    },

    // --- OPPGAVE 2 (multiple-choice) ---
    {
      id: 'tof1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer hvis du kjører følgende kode to ganger etter hverandre?\n\n```python\nwith open("logg.txt", "w") as fil:\n    fil.write("Måling 1\\n")\n```',
        options: [
          { id: 'a', text: 'Filen inneholder "Måling 1" to ganger', isCorrect: false },
          { id: 'b', text: 'Filen inneholder "Måling 1" bare én gang', isCorrect: true },
          { id: 'c', text: 'Programmet gir en feilmelding ved andre kjøring', isCorrect: false },
          { id: 'd', text: 'Filen blir tom etter andre kjøring', isCorrect: false },
        ],
        solution: 'Modusen `"w"` (write) **sletter alt eksisterende innhold** i filen hver gang den åpnes. Derfor vil filen bare inneholde "Måling 1" fra den siste kjøringen. Hvis du ville beholde begge, måtte du brukt `"a"` (append) i stedet.',
      },
    },

    // --- TEORI: CSV-filer ---
    {
      id: 'tof1-5-5-def-csv',
      type: 'definition',
      title: 'CSV – kommaseparerte verdier',
      content: `**CSV** (Comma-Separated Values) er et enkelt og mye brukt filformat for tabelldata. Hver linje representerer en **rad**, og verdiene i raden er separert med **komma** (eller semikolon i norske filer).

Eksempel på en CSV-fil (\`vær.csv\`):
\`\`\`
dato,temperatur,nedbor,vind
2024-01-15,3.2,0.0,4.5
2024-01-16,-1.8,2.3,7.1
2024-01-17,0.5,0.0,3.2
2024-01-18,-3.1,5.7,8.9
\`\`\`

Første linje er ofte en **overskriftsrad** (header) som beskriver kolonnene.

Python har en innebygd **\`csv\`-modul** for å lese og skrive CSV-filer:
\`\`\`python
import csv

with open("vær.csv", "r") as fil:
    leser = csv.reader(fil)
    overskrift = next(leser)    # Les første linje (header)
    for rad in leser:
        print(rad)              # Hver rad er en liste med strenger
\`\`\`

**Viktig:** Alle verdier i en CSV-fil leses som **strenger**. Du må konvertere til riktig datatype (f.eks. \`float()\` for desimaltall).`,
    },
    {
      id: 'tof1-5-5-text-csv-behandling',
      type: 'text',
      content: `### Behandle CSV-data

Når du leser en CSV-fil, er det vanlig å samle dataene i lister for videre analyse:

\`\`\`python
import csv

datoer = []
temperaturer = []
nedbor = []

with open("vær.csv", "r") as fil:
    leser = csv.reader(fil)
    next(leser)   # Hopp over overskriften
    for rad in leser:
        datoer.append(rad[0])
        temperaturer.append(float(rad[1]))
        nedbor.append(float(rad[2]))

# Nå kan vi analysere dataene
print(f"Antall dager: {len(datoer)}")
print(f"Snitttemperatur: {sum(temperaturer) / len(temperaturer):.1f} °C")
print(f"Total nedbør: {sum(nedbor):.1f} mm")
\`\`\`

Du kan også **skrive** CSV-filer:
\`\`\`python
import csv

data = [
    ["Stoff", "Masse (g)", "Volum (mL)"],
    ["Vann", 100.0, 100.0],
    ["Etanol", 78.9, 100.0],
    ["Kvikksølv", 1360.0, 100.0],
]

with open("tetthet.csv", "w", newline="") as fil:
    skriver = csv.writer(fil)
    skriver.writerows(data)
\`\`\`

Parameteren \`newline=""\` forhindrer tomme linjer mellom radene på Windows.`,
    },

    // --- EKSEMPEL: CSV-databehandling ---
    {
      id: 'tof1-5-5-example-csv',
      type: 'example',
      title: 'Analysere værdata fra CSV',
      content: `Her er et komplett program som leser værdata fra en CSV-fil og lager en oppsummering:

\`\`\`python
import csv

# Les data fra CSV-filen
datoer = []
temperaturer = []
nedbor = []

with open("vær.csv", "r") as fil:
    leser = csv.reader(fil)
    next(leser)   # Hopp over overskrift
    for rad in leser:
        datoer.append(rad[0])
        temperaturer.append(float(rad[1]))
        nedbor.append(float(rad[2]))

# Beregn statistikk
snitt_temp = sum(temperaturer) / len(temperaturer)
total_nedbor = sum(nedbor)
frostdager = [d for d, t in zip(datoer, temperaturer) if t < 0]
torrdag = sum(1 for n in nedbor if n == 0)

# Skriv ut rapport
print("VÆRRAPPORT")
print("=" * 40)
print(f"Periode: {datoer[0]} til {datoer[-1]}")
print(f"Antall dager: {len(datoer)}")
print(f"Snitttemperatur:  {snitt_temp:6.1f} °C")
print(f"Høyeste temp.:    {max(temperaturer):6.1f} °C")
print(f"Laveste temp.:    {min(temperaturer):6.1f} °C")
print(f"Total nedbør:     {total_nedbor:6.1f} mm")
print(f"Tørre dager:      {torrdag:6d}")
print(f"Frostdager:       {len(frostdager):6d}")
\`\`\`

Programmet viser hele flyten: lese CSV, sortere data i separate lister, beregne statistikk med innebygde funksjoner og list comprehension, og presentere resultatene i en ryddig rapport.`,
    },

    // --- OPPGAVE 3 (classic) ---
    {
      id: 'tof1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som leser en tekstfil med navn `tall.txt` der hver linje inneholder ett heltall. Programmet skal skrive ut summen av alle tallene, gjennomsnittet og det største tallet.',
        hints: ['Bruk `with open("tall.txt", "r") as fil:` for å åpne filen. Les linje for linje, bruk `int(linje.strip())` for å konvertere, og samle tallene i en liste. Bruk `sum()`, `len()` og `max()` for beregningene.'],
        solution: `\`\`\`python
tall = []

with open("tall.txt", "r") as fil:
    for linje in fil:
        tall.append(int(linje.strip()))

total = sum(tall)
gjennomsnitt = total / len(tall)
storst = max(tall)

print(f"Antall tall: {len(tall)}")
print(f"Sum: {total}")
print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Største tall: {storst}")
\`\`\`

Programmet leser tall fra filen linje for linje, konverterer fra streng til heltall med \`int()\`, og bruker innebygde funksjoner for å beregne sum, gjennomsnitt og maksimum.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-5-oppsummering',
      type: 'text',
      content: `### Oppsummering

I dette kapittelet har du lært å:

- **Åpne filer** med \`open()\` i modusene \`"r"\` (les), \`"w"\` (skriv) og \`"a"\` (legg til)
- Bruke **\`with\`-setningen** for sikker filhåndtering der filen lukkes automatisk
- **Lese filer** med \`read()\`, \`readlines()\` eller linje for linje i en for-løkke
- **Skrive til filer** med \`write()\` og \`print(file=...)\`
- Lese og skrive **CSV-filer** med \`csv.reader()\` og \`csv.writer()\`
- Utføre enkel **databehandling**: samle data i lister, beregne statistikk og filtrere

**Viktige prinsipper:**
- Bruk alltid \`with\` for å håndtere filer – det er tryggere og ryddigere
- Husk at CSV-verdier leses som strenger – konverter med \`int()\` eller \`float()\`
- Modusene \`"w"\` og \`"a"\` har forskjellig oppførsel: \`"w"\` overskriver, \`"a"\` legger til

Filhåndtering og databehandling er kjernen i mye av det vi gjør i teknologi og forskningslære – fra å lese sensordata til å analysere forsøksresultater.`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som leser en CSV-fil `elever.csv` med kolonnene `navn,norsk,matte,engelsk`. Programmet skal: a) Beregne gjennomsnittskarakteren for hver elev. b) Skrive ut en tabell med navn og gjennomsnitt. c) Finne eleven med høyest gjennomsnitt.',
        hints: ['Bruk `csv.reader()` for å lese filen. For hver rad: `float(rad[1])`, `float(rad[2])`, `float(rad[3])` gir karakterene. Beregn gjennomsnitt med `(norsk + matte + eng) / 3`. Lagre navn og gjennomsnitt i to parallelle lister for å finne best elev.'],
        solution: `\`\`\`python
import csv

navn_liste = []
snitt_liste = []

with open("elever.csv", "r") as fil:
    leser = csv.reader(fil)
    next(leser)  # Hopp over overskrift
    for rad in leser:
        navn = rad[0]
        norsk = float(rad[1])
        matte = float(rad[2])
        engelsk = float(rad[3])
        snitt = (norsk + matte + engelsk) / 3

        navn_liste.append(navn)
        snitt_liste.append(snitt)

# Skriv ut tabell
print(f"{'Navn':15s} {'Snitt':>6s}")
print("-" * 22)
for navn, snitt in zip(navn_liste, snitt_liste):
    print(f"{navn:15s} {snitt:6.2f}")

# Finn beste elev
best_indeks = snitt_liste.index(max(snitt_liste))
print(f"\\nBeste elev: {navn_liste[best_indeks]} ({snitt_liste[best_indeks]:.2f})")
\`\`\`

Programmet leser CSV med \`csv.reader()\`, beregner gjennomsnitt for hver elev, bruker f-streng-formatering for en ryddig tabell, og finner den beste eleven med \`max()\` og \`index()\`.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som fungerer som en enkel datalogger. Programmet skal: a) Be brukeren skrive inn temperaturmålinger (avslutt med «ferdig»). b) Lagre alle målingene i en fil `malinger.txt` med tidsstempel. c) Beregne og vise statistikk (antall, gjennomsnitt, min, maks). d) Lagre statistikken i en egen fil `statistikk.txt`.',
        hints: ['Bruk `from datetime import datetime` og `datetime.now().strftime("%Y-%m-%d %H:%M:%S")` for tidsstempel. Bruk en while-løkke for innlesing. Skriv til `malinger.txt` med `"a"` (append) for å beholde gamle målinger, og `statistikk.txt` med `"w"` for å overskrive med nyeste statistikk.'],
        solution: `\`\`\`python
from datetime import datetime

malinger = []

# Les inn målinger
print("Temperaturlogger (skriv 'ferdig' for å avslutte)")
while True:
    svar = input("Temperatur (°C): ")
    if svar.lower() == "ferdig":
        break
    try:
        temp = float(svar)
        malinger.append(temp)
    except ValueError:
        print("Ugyldig verdi, prøv igjen.")

if len(malinger) == 0:
    print("Ingen målinger registrert.")
else:
    # Lagre målinger med tidsstempel
    tidspunkt = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("malinger.txt", "a") as fil:
        print(f"--- Logg {tidspunkt} ---", file=fil)
        for i, temp in enumerate(malinger):
            print(f"  Måling {i + 1}: {temp:.1f} °C", file=fil)

    # Beregn statistikk
    snitt = sum(malinger) / len(malinger)
    lavest = min(malinger)
    hoyest = max(malinger)

    # Vis statistikk
    print(f"\\nStatistikk ({len(malinger)} målinger):")
    print(f"  Gjennomsnitt: {snitt:.1f} °C")
    print(f"  Laveste:      {lavest:.1f} °C")
    print(f"  Høyeste:      {hoyest:.1f} °C")

    # Lagre statistikk til fil
    with open("statistikk.txt", "w") as fil:
        print(f"Statistikk generert: {tidspunkt}", file=fil)
        print(f"Antall målinger: {len(malinger)}", file=fil)
        print(f"Gjennomsnitt: {snitt:.1f} °C", file=fil)
        print(f"Laveste: {lavest:.1f} °C", file=fil)
        print(f"Høyeste: {hoyest:.1f} °C", file=fil)

    print("\\nData lagret i malinger.txt og statistikk.txt")
\`\`\`

Programmet kombinerer brukerinnlesing med feilhåndtering (\`try/except\`), filskriving med append-modus for logg og write-modus for statistikk, og bruker \`datetime\` for tidsstempel.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Plotting og visualisering
// ============================================================================

export const CHAPTER_TOF_1_5_6: TextbookChapter = {
  id: 'tof-1-5-6',
  courseId: 'tof-1',
  chapterNumber: '5.6',
  title: 'Plotting og visualisering',
  description: 'Matplotlib, grafer, diagrammer og vitenskapelig visualisering.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-5-5'],
  competenceGoals: ['visualisere data med programmering'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-6-intro',
      type: 'text',
      content: `## Plotting og visualisering

I forskning og teknologi er det sjelden nok å bare beregne tall – vi trenger også å **visualisere dataene** for å oppdage mønstre, trender og sammenhenger. En god graf kan formidle mer enn en tabell med tusen tall.

I Python bruker vi biblioteket **Matplotlib** til å lage profesjonelle grafer og diagrammer. Matplotlib er det mest brukte plottingsbiblioteket i Python og brukes i alt fra skoleforsøk til publiserte forskningsartikler.

I dette kapittelet lærer du å:
- Lage **linjediagrammer** for å vise endringer over tid
- Lage **stolpediagrammer** for å sammenligne kategorier
- Lage **punktdiagrammer** (scatter plot) for å vise sammenhenger mellom variabler
- **Tilpasse** grafene med tittel, aksenavn, farger og rutenett
- Bruke **flere delplott** i ett vindu

Etter dette kapittelet vil du kunne lage profesjonelle visualiseringer av data fra eksperimenter og undersøkelser.`,
    },

    // --- TEORI: Grunnleggende plotting ---
    {
      id: 'tof1-5-6-def-matplotlib',
      type: 'definition',
      title: 'Matplotlib – grunnleggende bruk',
      content: `**Matplotlib** er et Python-bibliotek for plotting og visualisering. Vi importerer det slik:

\`\`\`python
import matplotlib.pyplot as plt
\`\`\`

Et enkelt **linjediagram** lages med \`plt.plot()\`:

\`\`\`python
import matplotlib.pyplot as plt

timer = [0, 1, 2, 3, 4, 5]
temperatur = [18.0, 19.2, 21.5, 23.0, 22.3, 20.1]

plt.plot(timer, temperatur)
plt.xlabel("Tid (timer)")
plt.ylabel("Temperatur (°C)")
plt.title("Temperaturutvikling")
plt.grid(True)
plt.show()
\`\`\`

**Viktige funksjoner:**
| Funksjon | Beskrivelse |
|----------|-------------|
| \`plt.plot(x, y)\` | Linjediagram |
| \`plt.bar(x, y)\` | Stolpediagram |
| \`plt.scatter(x, y)\` | Punktdiagram |
| \`plt.xlabel()\` | Navn på x-aksen |
| \`plt.ylabel()\` | Navn på y-aksen |
| \`plt.title()\` | Tittel på grafen |
| \`plt.grid(True)\` | Vis rutenett |
| \`plt.legend()\` | Vis forklaring (tegnforklaring) |
| \`plt.show()\` | Vis grafen på skjermen |
| \`plt.savefig("fil.png")\` | Lagre grafen som bilde |`,
    },
    {
      id: 'tof1-5-6-text-tilpasning',
      type: 'text',
      content: `### Tilpasse utseendet

Du kan gjøre grafene mer lesbare og profesjonelle med ulike tilpasninger:

\`\`\`python
import matplotlib.pyplot as plt

tid = [0, 1, 2, 3, 4, 5, 6]
inne = [21.0, 21.5, 22.0, 22.3, 22.1, 21.8, 21.2]
ute = [5.0, 6.2, 8.5, 11.0, 12.3, 10.1, 7.5]

# Linjestil og farge
plt.plot(tid, inne, "r-o", label="Inne")    # rød linje med sirkler
plt.plot(tid, ute, "b--s", label="Ute")     # blå stiplet med firkanter

plt.xlabel("Tid (timer)", fontsize=12)
plt.ylabel("Temperatur (°C)", fontsize=12)
plt.title("Inne- og utetemperatur", fontsize=14)
plt.legend(fontsize=11)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
\`\`\`

**Formatstrenger** for \`plt.plot()\`:
- **Farge:** \`r\` = rød, \`b\` = blå, \`g\` = grønn, \`k\` = svart
- **Linjestil:** \`-\` = heltrukket, \`--\` = stiplet, \`:\` = prikket
- **Markør:** \`o\` = sirkel, \`s\` = firkant, \`^\` = trekant, \`*\` = stjerne

Du kan kombinere: \`"r-o"\` = rød heltrukket linje med sirkelmarkører.`,
    },

    // --- EKSEMPEL: Linjediagram ---
    {
      id: 'tof1-5-6-example-linje',
      type: 'example',
      title: 'Linjediagram – temperaturmålinger',
      content: `La oss lage et komplett linjediagram med to datasett og god formatering:

\`\`\`python
import matplotlib.pyplot as plt

# Data: Temperaturer gjennom en dag
klokkeslett = [6, 8, 10, 12, 14, 16, 18, 20, 22]
mandag = [8.0, 10.5, 14.2, 17.8, 19.1, 17.5, 14.0, 11.5, 9.0]
fredag = [5.5, 7.0, 11.8, 15.2, 16.5, 15.0, 12.3, 9.8, 7.2]

plt.figure(figsize=(10, 6))
plt.plot(klokkeslett, mandag, "r-o", label="Mandag", linewidth=2)
plt.plot(klokkeslett, fredag, "b--s", label="Fredag", linewidth=2)

plt.xlabel("Klokkeslett", fontsize=12)
plt.ylabel("Temperatur (°C)", fontsize=12)
plt.title("Temperatur gjennom dagen – mandag vs. fredag", fontsize=14)
plt.legend(fontsize=11)
plt.grid(True, alpha=0.3)
plt.xticks(klokkeslett)
plt.tight_layout()
plt.savefig("temperatur_dag.png", dpi=150)
plt.show()
\`\`\`

**Forklaring av nye elementer:**
- \`plt.figure(figsize=(10, 6))\` – setter størrelsen på figuren (bredde, høyde i tommer)
- \`linewidth=2\` – tykkere linjer for bedre synlighet
- \`plt.xticks(klokkeslett)\` – viser bare de klokkeslettene vi har data for
- \`plt.tight_layout()\` – justerer marginene slik at alt teksten får plass
- \`plt.savefig("temperatur_dag.png", dpi=150)\` – lagrer grafen som et bilde med god oppløsning`,
    },

    // --- OPPGAVE 1 (multiple-choice) ---
    {
      id: 'tof1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken funksjon bruker du for å lage et stolpediagram i Matplotlib?',
        options: [
          { id: 'a', text: 'plt.plot()', isCorrect: false },
          { id: 'b', text: 'plt.bar()', isCorrect: true },
          { id: 'c', text: 'plt.scatter()', isCorrect: false },
          { id: 'd', text: 'plt.column()', isCorrect: false },
        ],
        solution: '`plt.bar()` lager et stolpediagram (bar chart). `plt.plot()` lager linjediagram, `plt.scatter()` lager punktdiagram, og `plt.column()` finnes ikke i Matplotlib.',
      },
    },

    // --- TEORI: Stolpediagram og punktdiagram ---
    {
      id: 'tof1-5-6-text-stolpe-scatter',
      type: 'text',
      content: `### Stolpediagram

Stolpediagram er gode for å **sammenligne kategorier**:

\`\`\`python
import matplotlib.pyplot as plt

fag = ["Norsk", "Matte", "Engelsk", "Naturfag", "ToF"]
snitt = [4.1, 3.8, 4.3, 3.9, 4.5]

plt.figure(figsize=(8, 5))
plt.bar(fag, snitt, color=["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"])
plt.ylabel("Gjennomsnittskarakter")
plt.title("Karaktersnitt per fag")
plt.ylim(1, 6)       # Sett y-aksen fra 1 til 6
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.show()
\`\`\`

### Punktdiagram (scatter plot)

Punktdiagram brukes for å vise **sammenhenger** mellom to variabler:

\`\`\`python
import matplotlib.pyplot as plt

studietimer = [2, 5, 1, 8, 3, 6, 4, 7, 9, 3]
karakter = [3, 5, 2, 6, 3, 5, 4, 5, 6, 4]

plt.figure(figsize=(8, 6))
plt.scatter(studietimer, karakter, color="blue", s=80, alpha=0.7)
plt.xlabel("Studietimer per uke")
plt.ylabel("Karakter")
plt.title("Sammenheng mellom studietid og karakter")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
\`\`\`

Parameteren \`s=80\` setter størrelsen på punktene, og \`alpha=0.7\` gjør dem litt gjennomsiktige (nyttig når punkter overlapper).`,
    },

    // --- EKSEMPEL: Stolpediagram ---
    {
      id: 'tof1-5-6-example-stolpe',
      type: 'example',
      title: 'Stolpediagram med flere kategorier',
      content: `La oss lage et stolpediagram som sammenligner resultater fra to klasser:

\`\`\`python
import matplotlib.pyplot as plt

fag = ["Norsk", "Matte", "Engelsk", "Naturfag"]
klasse_a = [4.2, 3.9, 4.5, 4.0]
klasse_b = [3.8, 4.3, 4.1, 4.4]

# Beregn posisjoner for stolpene
x = range(len(fag))
bredde = 0.35

plt.figure(figsize=(9, 6))
plt.bar([i - bredde/2 for i in x], klasse_a, bredde, label="Klasse A", color="#3498db")
plt.bar([i + bredde/2 for i in x], klasse_b, bredde, label="Klasse B", color="#e74c3c")

plt.xlabel("Fag", fontsize=12)
plt.ylabel("Gjennomsnittskarakter", fontsize=12)
plt.title("Karaktersammenligning mellom klasser", fontsize=14)
plt.xticks(x, fag)
plt.ylim(1, 6)
plt.legend()
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.show()
\`\`\`

**Forklaring:** For å plassere stolpene side ved side, forskyver vi x-posisjonene med halve bredden til venstre og høyre. \`plt.xticks(x, fag)\` sørger for at fagnavnene vises midt mellom stolpeparene.`,
    },

    // --- OPPGAVE 2 (multiple-choice) ---
    {
      id: 'tof1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva gjør `plt.savefig("graf.png", dpi=200)` i Matplotlib?',
        options: [
          { id: 'a', text: 'Åpner en bildefil kalt graf.png', isCorrect: false },
          { id: 'b', text: 'Lagrer grafen som et PNG-bilde med 200 piksler per tomme', isCorrect: true },
          { id: 'c', text: 'Viser grafen på skjermen i 200 % størrelse', isCorrect: false },
          { id: 'd', text: 'Importerer et bilde og legger det i bakgrunnen av grafen', isCorrect: false },
        ],
        solution: '`plt.savefig("graf.png", dpi=200)` lagrer den gjeldende grafen som en PNG-bildefil med 200 DPI (dots per inch = piksler per tomme). Høyere DPI gir bedre oppløsning. Denne funksjonen må kalles **før** `plt.show()`, ellers vil bildet bli tomt.',
      },
    },

    // --- TEORI: Subplots ---
    {
      id: 'tof1-5-6-text-subplots',
      type: 'text',
      content: `### Flere grafer i ett vindu med subplots

Noen ganger vil du vise flere grafer ved siden av hverandre for å sammenligne. Da bruker du **subplots**:

\`\`\`python
import matplotlib.pyplot as plt

timer = [0, 1, 2, 3, 4, 5]
temperatur = [18.0, 19.2, 21.5, 23.0, 22.3, 20.1]
luftfuktighet = [65, 60, 55, 50, 52, 58]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# Venstre graf: Temperatur
ax1.plot(timer, temperatur, "r-o")
ax1.set_xlabel("Tid (timer)")
ax1.set_ylabel("Temperatur (°C)")
ax1.set_title("Temperatur")
ax1.grid(True, alpha=0.3)

# Høyre graf: Luftfuktighet
ax2.plot(timer, luftfuktighet, "b-s")
ax2.set_xlabel("Tid (timer)")
ax2.set_ylabel("Luftfuktighet (%)")
ax2.set_title("Luftfuktighet")
ax2.grid(True, alpha=0.3)

fig.suptitle("Værmålinger gjennom dagen", fontsize=14)
plt.tight_layout()
plt.show()
\`\`\`

**Forklaring:**
- \`plt.subplots(1, 2)\` lager 1 rad med 2 kolonner (to grafer side ved side)
- \`plt.subplots(2, 1)\` ville gitt to grafer oppå hverandre
- Bruk \`ax1.plot()\` i stedet for \`plt.plot()\` når du jobber med subplots
- Metodene heter \`set_xlabel()\`, \`set_ylabel()\` og \`set_title()\` i stedet for \`plt.xlabel()\` osv.`,
    },

    // --- EKSEMPEL: Komplett visualisering ---
    {
      id: 'tof1-5-6-example-komplett',
      type: 'example',
      title: 'Komplett visualisering av eksperimentdata',
      content: `Her er et komplett eksempel som leser data og lager flere visualiseringer:

\`\`\`python
import matplotlib.pyplot as plt

# Eksperimentdata: Pendelperiode som funksjon av lengde
lengder = [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00]
perioder = [0.63, 0.90, 1.10, 1.27, 1.42, 1.55, 1.67, 1.79, 1.90, 2.01]

# Beregn teoretisk verdi: T = 2*pi*sqrt(L/g)
import math
g = 9.81
teoretisk = [2 * math.pi * math.sqrt(L / g) for L in lengder]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Graf 1: Målt vs. teoretisk
ax1.scatter(lengder, perioder, color="red", s=60, label="Målt", zorder=5)
ax1.plot(lengder, teoretisk, "b-", label="Teoretisk", linewidth=2)
ax1.set_xlabel("Pendellengde (m)", fontsize=12)
ax1.set_ylabel("Periode (s)", fontsize=12)
ax1.set_title("Pendelperiode vs. lengde", fontsize=13)
ax1.legend(fontsize=11)
ax1.grid(True, alpha=0.3)

# Graf 2: Avvik mellom målt og teoretisk
avvik = [m - t for m, t in zip(perioder, teoretisk)]
ax2.bar(range(len(avvik)), avvik, color="#e74c3c", alpha=0.7)
ax2.set_xlabel("Måling nr.", fontsize=12)
ax2.set_ylabel("Avvik (s)", fontsize=12)
ax2.set_title("Avvik fra teoretisk verdi", fontsize=13)
ax2.axhline(y=0, color="black", linewidth=0.8)
ax2.grid(axis="y", alpha=0.3)

fig.suptitle("Pendelforsøk – analyse", fontsize=15)
plt.tight_layout()
plt.savefig("pendelforsok.png", dpi=150)
plt.show()
\`\`\`

Programmet viser et typisk vitenskapelig plott: målte verdier som punkter, teoretisk kurve som linje, og et avviksdiagram for å vurdere målenøyaktigheten.`,
    },

    // --- OPPGAVE 3 (classic) ---
    {
      id: 'tof1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et Python-program som lager et stolpediagram over gjennomsnittlig nedbør per måned for et år. Bruk disse dataene (mm): Jan: 49, Feb: 36, Mar: 47, Apr: 41, Mai: 53, Jun: 65, Jul: 81, Aug: 89, Sep: 90, Okt: 84, Nov: 73, Des: 55. Diagrammet skal ha tittel, aksenavn og passende farger.',
        hints: ['Bruk to lister: en for månedsnavn (forkortet) og en for nedbørsverdier. Bruk `plt.bar()` for stolpene. `plt.xticks(rotation=45)` roterer etiketene for bedre lesbarhet. Bruk `plt.tight_layout()` for å sikre at alt får plass.'],
        solution: `\`\`\`python
import matplotlib.pyplot as plt

maneder = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun",
           "Jul", "Aug", "Sep", "Okt", "Nov", "Des"]
nedbor = [49, 36, 47, 41, 53, 65, 81, 89, 90, 84, 73, 55]

plt.figure(figsize=(10, 6))
farger = ["#3498db" if n < 60 else "#2ecc71" if n < 80 else "#e74c3c" for n in nedbor]
plt.bar(maneder, nedbor, color=farger)
plt.xlabel("Måned", fontsize=12)
plt.ylabel("Nedbør (mm)", fontsize=12)
plt.title("Gjennomsnittlig nedbør per måned", fontsize=14)
plt.xticks(rotation=45)
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.savefig("nedbor.png", dpi=150)
plt.show()
\`\`\`

Programmet bruker en list comprehension for å gi stolpene ulike farger basert på nedbørmengde: blå for lite nedbør, grønn for middels og rød for mye nedbør.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-6-oppsummering',
      type: 'text',
      content: `### Oppsummering

I dette kapittelet har du lært å:

- Importere og bruke **Matplotlib** for plotting (\`import matplotlib.pyplot as plt\`)
- Lage **linjediagrammer** med \`plt.plot()\` for å vise endringer over tid
- Lage **stolpediagrammer** med \`plt.bar()\` for å sammenligne kategorier
- Lage **punktdiagrammer** med \`plt.scatter()\` for å vise sammenhenger
- **Tilpasse** grafer med tittel, aksenavn, farger, rutenett og tegnforklaring
- Bruke **formatstrenger** for å styre farge, linjestil og markører
- Lage **subplots** for å vise flere grafer i ett vindu
- **Lagre** grafer som bildefiler med \`plt.savefig()\`

**Gode vaner for vitenskapelig visualisering:**
- Alltid inkluder **aksenavn med enheter** (f.eks. «Temperatur (°C)»)
- Bruk **tegnforklaring** (\`legend\`) når du har flere datasett
- Velg **diagramtype** som passer dataene: linje for tidsserier, stolpe for kategorier, scatter for sammenhenger
- Lagre grafer med høy oppløsning (\`dpi=150\` eller mer) for bruk i rapporter`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et program som simulerer et kast med to terninger 1000 ganger. Programmet skal: a) Bruke `random.randint(1, 6)` for hvert kast. b) Telle opp hvor mange ganger hver sum (2–12) forekommer. c) Lage et stolpediagram som viser antall forekomster for hver sum. d) Legge til en horisontal linje som viser gjennomsnittet.',
        hints: ['Bruk en liste med 13 elementer (indeks 0–12) som teller, der `teller[sum]` gir antall forekomster. Bruk `plt.bar(range(2, 13), teller[2:])` for stolpediagrammet. For gjennomsnitt: 1000 / 11 = ca. 90.9 (det er 11 mulige summer).'],
        solution: `\`\`\`python
import random
import matplotlib.pyplot as plt

# Simuler 1000 kast med to terninger
teller = [0] * 13   # Indeks 0–12; vi bruker bare 2–12

for _ in range(1000):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    total = terning1 + terning2
    teller[total] += 1

# Lag stolpediagram
summer = list(range(2, 13))
antall = teller[2:]
gjennomsnitt = 1000 / len(summer)

plt.figure(figsize=(10, 6))
plt.bar(summer, antall, color="#3498db", edgecolor="white")
plt.axhline(y=gjennomsnitt, color="red", linestyle="--", label=f"Gjennomsnitt ({gjennomsnitt:.1f})")
plt.xlabel("Sum av to terninger", fontsize=12)
plt.ylabel("Antall forekomster", fontsize=12)
plt.title("Fordeling av terningkast (1000 kast)", fontsize=14)
plt.xticks(summer)
plt.legend(fontsize=11)
plt.grid(axis="y", alpha=0.3)
plt.tight_layout()
plt.show()
\`\`\`

Programmet viser at summen 7 forekommer oftest, noe som stemmer med sannsynlighetsteorien – det finnes flest kombinasjoner som gir 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et program som visualiserer Ohms lov ($U = R \\cdot I$). Programmet skal: a) Definere en motstand $R = 100 \\, \\Omega$. b) Beregne spenning $U$ for strømverdier $I$ fra 0 til 0.5 A (bruk 20 punkter). c) Lage et subplot med to grafer: (1) linjediagram av $U$ vs. $I$, og (2) stolpediagram av effekten $P = U \\cdot I$ for 5 utvalgte strømverdier. d) Lagre figuren som `ohms_lov.png`.',
        hints: ['Bruk `[i * 0.5 / 19 for i in range(20)]` for å generere 20 jevnt fordelte strømverdier fra 0 til 0.5. Beregn `U = R * I` for hver. For effekten: velg 5 verdier, f.eks. I = 0.1, 0.2, 0.3, 0.4, 0.5. Bruk `plt.subplots(1, 2)` for to grafer side ved side.'],
        solution: `\`\`\`python
import matplotlib.pyplot as plt

R = 100  # Motstand i ohm

# Beregn spenning for 20 strømverdier
strom = [i * 0.5 / 19 for i in range(20)]
spenning = [R * I for I in strom]

# Velg 5 strømverdier for effektdiagram
strom_utvalg = [0.1, 0.2, 0.3, 0.4, 0.5]
effekt = [R * I * I for I in strom_utvalg]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Graf 1: Spenning vs. strøm (Ohms lov)
ax1.plot(strom, spenning, "b-o", linewidth=2, markersize=5)
ax1.set_xlabel("Strøm I (A)", fontsize=12)
ax1.set_ylabel("Spenning U (V)", fontsize=12)
ax1.set_title(f"Ohms lov (R = {R} Ω)", fontsize=13)
ax1.grid(True, alpha=0.3)

# Graf 2: Effekt for utvalgte strømverdier
etiketter = [f"{I} A" for I in strom_utvalg]
ax2.bar(etiketter, effekt, color="#e74c3c", alpha=0.8)
ax2.set_xlabel("Strøm I", fontsize=12)
ax2.set_ylabel("Effekt P (W)", fontsize=12)
ax2.set_title("Effekt P = U · I", fontsize=13)
ax2.grid(axis="y", alpha=0.3)

# Legg til verdier over stolpene
for i, p in enumerate(effekt):
    ax2.text(i, p + 0.3, f"{p:.1f} W", ha="center", fontsize=10)

fig.suptitle("Ohms lov – spenning og effekt", fontsize=15)
plt.tight_layout()
plt.savefig("ohms_lov.png", dpi=150)
plt.show()
\`\`\`

Programmet illustrerer Ohms lov grafisk med et lineært forhold mellom strøm og spenning, og viser at effekten øker kvadratisk med strømmen ($P = R \\cdot I^2$).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7: Prosjektarbeid med programmering
// ============================================================================

export const CHAPTER_TOF_1_5_7: TextbookChapter = {
  id: 'tof-1-5-7',
  courseId: 'tof-1',
  chapterNumber: '5.7',
  title: 'Prosjektarbeid med programmering',
  description: 'Planlegging, koding, testing og dokumentasjon av programmeringsprosjekter.',
  estimatedMinutes: 25,
  prerequisites: ['tof-1-5-6'],
  competenceGoals: ['gjennomføre et programmeringsprosjekt'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-5-7-intro',
      type: 'text',
      content: `## Prosjektarbeid med programmering

Gjennom denne seksjonen har du lært variabler, kontrollstrukturer, funksjoner, lister, filhåndtering og visualisering. Nå er det tid for å sette alt sammen i et **prosjektarbeid**.

Et programmeringsprosjekt er mer enn bare koding – det handler også om å **planlegge**, **teste**, **feilsøke** og **dokumentere** arbeidet ditt. Disse ferdighetene er sentrale i teknologi og forskningslære, og de gjenspeiler hvordan profesjonelle utviklere og forskere arbeider.

I dette kapittelet lærer du:
- Hvordan du **planlegger** et prosjekt med pseudokode og flytskjema
- Teknikker for **testing** og **debugging** (feilsøking)
- Hvordan du **dokumenterer** koden din med kommentarer og docstrings
- Hvordan du **strukturerer** et større program med funksjoner og moduler

Etter dette kapittelet vil du ha verktøyene du trenger for å gjennomføre et selvstendig programmeringsprosjekt fra start til slutt.`,
    },

    // --- TEORI: Planlegging ---
    {
      id: 'tof1-5-7-def-planlegging',
      type: 'definition',
      title: 'Planlegging med pseudokode og flytskjema',
      content: `**Pseudokode** er en uformell beskrivelse av en algoritme som bruker vanlig språk og enkel struktur. Det er et mellomsteg mellom ideen i hodet ditt og den ferdige Python-koden.

**Eksempel – pseudokode for et analyseprogram:**
\`\`\`
LES data fra fil
FOR hver måling i data:
    LEGG TIL måling i liste
BEREGN gjennomsnitt
BEREGN standardavvik
HVIS gjennomsnitt > grenseverdi:
    SKRIV advarsel
LAG graf av målingene
LAGRE rapport til fil
\`\`\`

Et **flytskjema** er en visuell fremstilling av programflyten med standardiserte symboler:
- **Oval:** Start/slutt
- **Rektangel:** Prosess (handling)
- **Diamant (rombe):** Beslutning (if/else)
- **Parallellogram:** Inndata/utdata

**Fordeler med planlegging:**
- Du oppdager logiske feil **før** du begynner å kode
- Det er lettere å dele opp arbeidet i funksjoner
- Andre kan forstå planen din og gi tilbakemelding
- Du slipper å skrive om store deler av koden underveis`,
    },
    {
      id: 'tof1-5-7-text-prosjektfaser',
      type: 'text',
      content: `### De fire fasene i et programmeringsprosjekt

Et godt prosjekt følger disse fasene:

**1. Planlegging (20 % av tiden)**
- Definer problemet tydelig: Hva skal programmet gjøre?
- Skisser løsningen med pseudokode eller flytskjema
- Identifiser hvilke **funksjoner** du trenger
- Bestem hvilke **biblioteker** som er nyttige (csv, matplotlib, math)

**2. Koding (40 % av tiden)**
- Skriv én funksjon om gangen
- Test hver funksjon for seg (**enhetstesting**)
- Bruk beskrivende variabelnavn og kommentarer
- Følg Python-konvensjoner (\`snake_case\`, innrykk med 4 mellomrom)

**3. Testing (25 % av tiden)**
- Test med **kjente data** der du vet svaret
- Test **grensetilfeller** (tom liste, null, negative tall)
- Test med **ugyldig inndata** (tekst der det forventes tall)
- Rett feil (**debugging**) og test på nytt

**4. Dokumentasjon (15 % av tiden)**
- Skriv en kort **beskrivelse** av programmet
- Kommenter **vanskelige** deler av koden
- Lag en **brukerveiledning** hvis programmet har brukerinteraksjon
- Dokumenter **kilder** (data, formler, biblioteker)`,
    },

    // --- EKSEMPEL: Pseudokode til kode ---
    {
      id: 'tof1-5-7-example-pseudokode',
      type: 'example',
      title: 'Fra pseudokode til ferdig program',
      content: `La oss følge prosessen for et program som analyserer temperaturdata:

**Steg 1 – Pseudokode:**
\`\`\`
LES temperaturer fra CSV-fil
BEREGN gjennomsnitt, min, maks
TELL dager med frost (under 0)
LAG linjediagram av temperaturene
LAGRE rapport til tekstfil
\`\`\`

**Steg 2 – Identifiser funksjoner:**
- \`les_data(filnavn)\` – leser CSV og returnerer lister
- \`beregn_statistikk(temperaturer)\` – returnerer gjennomsnitt, min, maks
- \`lag_graf(datoer, temperaturer)\` – lager og viser grafen
- \`skriv_rapport(statistikk, filnavn)\` – skriver rapport til fil

**Steg 3 – Kode:**
\`\`\`python
import csv
import matplotlib.pyplot as plt

def les_data(filnavn):
    """Leser temperaturdata fra en CSV-fil."""
    datoer = []
    temperaturer = []
    with open(filnavn, "r") as fil:
        leser = csv.reader(fil)
        next(leser)  # Hopp over overskrift
        for rad in leser:
            datoer.append(rad[0])
            temperaturer.append(float(rad[1]))
    return datoer, temperaturer

def beregn_statistikk(temperaturer):
    """Beregner og returnerer statistikk som en dictionary."""
    return {
        "antall": len(temperaturer),
        "gjennomsnitt": sum(temperaturer) / len(temperaturer),
        "maks": max(temperaturer),
        "min": min(temperaturer),
        "frost": sum(1 for t in temperaturer if t < 0),
    }

def lag_graf(datoer, temperaturer):
    """Lager et linjediagram av temperaturene."""
    plt.figure(figsize=(12, 5))
    plt.plot(temperaturer, "b-", linewidth=1.5)
    plt.axhline(y=0, color="red", linestyle="--", alpha=0.5)
    plt.xlabel("Dag nr.")
    plt.ylabel("Temperatur (°C)")
    plt.title("Daglige temperaturer")
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig("temperaturgraf.png", dpi=150)
    plt.show()

def skriv_rapport(statistikk, filnavn):
    """Skriver en rapport med statistikk til fil."""
    with open(filnavn, "w") as fil:
        print("TEMPERATURRAPPORT", file=fil)
        print("=" * 30, file=fil)
        for nokkel, verdi in statistikk.items():
            if isinstance(verdi, float):
                print(f"{nokkel:15s}: {verdi:8.1f}", file=fil)
            else:
                print(f"{nokkel:15s}: {verdi:8d}", file=fil)

# Hovedprogram
datoer, temperaturer = les_data("temperaturer.csv")
statistikk = beregn_statistikk(temperaturer)
lag_graf(datoer, temperaturer)
skriv_rapport(statistikk, "temperaturrapport.txt")

print("Analyse fullført!")
\`\`\`

Legg merke til at hovedprogrammet på slutten er svært lesbart – hver linje beskriver ett steg i analysen.`,
    },

    // --- OPPGAVE 1 (multiple-choice) ---
    {
      id: 'tof1-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken fase av et programmeringsprosjekt bør du bruke mest tid på?',
        options: [
          { id: 'a', text: 'Planlegging', isCorrect: false },
          { id: 'b', text: 'Koding', isCorrect: true },
          { id: 'c', text: 'Testing', isCorrect: false },
          { id: 'd', text: 'Dokumentasjon', isCorrect: false },
        ],
        solution: 'Koding tar vanligvis ca. 40 % av tiden i et prosjekt. Men merk at testing (25 %) og planlegging (20 %) også er svært viktige. Mange nybegynnere hopper rett til koding uten planlegging, noe som ofte fører til at de må skrive om mye kode senere.',
      },
    },

    // --- TEORI: Testing og debugging ---
    {
      id: 'tof1-5-7-def-testing',
      type: 'definition',
      title: 'Testing og debugging',
      content: `**Testing** handler om å sjekke at programmet fungerer korrekt. **Debugging** handler om å finne og rette feil.

**Tre typer tester:**

1. **Test med kjente data:** Bruk inndata der du vet svaret.
\`\`\`python
# Test: gjennomsnitt av [2, 4, 6] skal gi 4.0
resultat = beregn_gjennomsnitt([2, 4, 6])
print(f"Forventet: 4.0, Fikk: {resultat}")
\`\`\`

2. **Test grensetilfeller:** Sjekk at programmet håndterer spesielle verdier.
\`\`\`python
# Test med tom liste
# Test med ett element
# Test med negative tall
# Test med veldig store tall
\`\`\`

3. **Test med ugyldig inndata:** Sjekk at programmet ikke krasjer.
\`\`\`python
# Hva skjer hvis brukeren skriver "abc" i stedet for et tall?
try:
    tall = float(input("Tall: "))
except ValueError:
    print("Ugyldig inndata – skriv inn et tall.")
\`\`\`

**Debugging-teknikker:**
- **Print-debugging:** Legg til \`print()\` for å se verdier underveis
- **Les feilmeldingen nøye:** Python forteller deg type feil og linjenummer
- **Kommenter ut kode:** Isoler problemet ved å deaktivere deler av koden
- **Gummiand-metoden:** Forklar koden høyt for en «gummiand» (eller en medstudent)`,
    },
    {
      id: 'tof1-5-7-text-debugging-praksis',
      type: 'text',
      content: `### Vanlige feil og hvordan du fikser dem

Her er de vanligste feilene nybegynnere møter i Python:

**1. SyntaxError – skrivefeil i koden**
\`\`\`python
# Feil: mangler kolon
if x > 5
    print("Stor")

# Riktig:
if x > 5:
    print("Stor")
\`\`\`

**2. IndentationError – feil innrykk**
\`\`\`python
# Feil: blander mellomrom og tab
def funksjon():
    print("a")
      print("b")    # For mye innrykk!

# Riktig: konsekvent innrykk med 4 mellomrom
def funksjon():
    print("a")
    print("b")
\`\`\`

**3. NameError – variabelen finnes ikke**
\`\`\`python
# Feil: skrivefeil i variabelnavn
temperatur = 22.5
print(tempratur)    # NameError!

# Riktig:
print(temperatur)
\`\`\`

**4. TypeError – feil datatype**
\`\`\`python
# Feil: kan ikke legge sammen streng og tall
alder = "17"
neste_ar = alder + 1    # TypeError!

# Riktig:
neste_ar = int(alder) + 1
\`\`\`

**5. IndexError – ugyldig indeks**
\`\`\`python
# Feil: listen har bare 3 elementer (indeks 0–2)
tall = [10, 20, 30]
print(tall[3])    # IndexError!

# Riktig:
print(tall[2])    # Siste element
\`\`\`

**Tips:** Les alltid hele feilmeldingen. Den forteller deg **type feil**, **linjenummer** og ofte hva som gikk galt.`,
    },

    // --- EKSEMPEL: Testing ---
    {
      id: 'tof1-5-7-example-testing',
      type: 'example',
      title: 'Systematisk testing av en funksjon',
      content: `Her tester vi en funksjon som beregner karaktergjennomsnitt:

\`\`\`python
def beregn_snitt(karakterer):
    """Beregner gjennomsnittet av en liste med karakterer (1-6)."""
    if len(karakterer) == 0:
        return 0.0
    return sum(karakterer) / len(karakterer)

# === TESTER ===

# Test 1: Vanlig tilfelle
resultat = beregn_snitt([4, 5, 3, 6, 4])
forventet = 4.4
print(f"Test 1: {resultat} == {forventet}? {'OK' if abs(resultat - forventet) < 0.01 else 'FEIL'}")

# Test 2: Alle like
resultat = beregn_snitt([5, 5, 5])
forventet = 5.0
print(f"Test 2: {resultat} == {forventet}? {'OK' if abs(resultat - forventet) < 0.01 else 'FEIL'}")

# Test 3: Bare én karakter
resultat = beregn_snitt([6])
forventet = 6.0
print(f"Test 3: {resultat} == {forventet}? {'OK' if abs(resultat - forventet) < 0.01 else 'FEIL'}")

# Test 4: Tom liste (grensetilfelle)
resultat = beregn_snitt([])
forventet = 0.0
print(f"Test 4: {resultat} == {forventet}? {'OK' if abs(resultat - forventet) < 0.01 else 'FEIL'}")
\`\`\`

**Utskrift:**
\`\`\`
Test 1: 4.4 == 4.4? OK
Test 2: 5.0 == 5.0? OK
Test 3: 6.0 == 6.0? OK
Test 4: 0.0 == 0.0? OK
\`\`\`

Legg merke til at vi bruker \`abs(resultat - forventet) < 0.01\` for å sammenligne desimaltall – direkte sammenligning med \`==\` kan gi feil på grunn av avrunding.`,
    },

    // --- OPPGAVE 2 (multiple-choice) ---
    {
      id: 'tof1-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en **docstring** i Python?',
        options: [
          { id: 'a', text: 'En kommentar som starter med #', isCorrect: false },
          { id: 'b', text: 'En streng med trippel-anførselstegn rett etter en funksjondefinisjon, som beskriver funksjonen', isCorrect: true },
          { id: 'c', text: 'Et eget dokument som beskriver hele programmet', isCorrect: false },
          { id: 'd', text: 'En innebygd Python-funksjon for å lage dokumenter', isCorrect: false },
        ],
        solution: 'En **docstring** er en streng med trippel-anførselstegn (`"""..."""`) plassert rett etter en funksjonsdefinisjon (`def`). Den beskriver hva funksjonen gjør, og kan hentes frem med `help(funksjon)`. Docstrings er standard måten å dokumentere funksjoner i Python.',
      },
    },

    // --- TEORI: Dokumentasjon ---
    {
      id: 'tof1-5-7-text-dokumentasjon',
      type: 'text',
      content: `### Dokumentasjon av kode

God dokumentasjon gjør koden din forståelig for andre – og for deg selv om noen uker!

**Kommentarer** forklarer **hvorfor** du gjør noe (ikke **hva** – det ser man av koden):

\`\`\`python
# Dårlig kommentar (sier hva koden gjør – det ser vi allerede):
x = x + 1  # Øker x med 1

# God kommentar (sier hvorfor):
x = x + 1  # Kompenser for 0-indeksering i utskriften
\`\`\`

**Docstrings** dokumenterer funksjoner:

\`\`\`python
def beregn_bmi(vekt_kg, hoyde_m):
    """
    Beregner Body Mass Index (BMI).

    Parametre:
        vekt_kg (float): Vekt i kilogram
        hoyde_m (float): Høyde i meter

    Returnerer:
        float: BMI-verdien
    """
    return vekt_kg / (hoyde_m ** 2)
\`\`\`

**Filhode** – en kommentar øverst i filen som beskriver programmet:

\`\`\`python
"""
Temperaturanalyse – Prosjektoppgave ToF 1

Programmet leser temperaturdata fra en CSV-fil,
beregner statistikk og lager visualiseringer.

Forfatter: Kari Nordmann
Dato: 2024-03-15
"""
\`\`\`

**Husk:** Kode leses mye oftere enn den skrives. God dokumentasjon er en investering i fremtidig leseforståelse.`,
    },

    // --- EKSEMPEL: Dokumentert prosjekt ---
    {
      id: 'tof1-5-7-example-dokumentert',
      type: 'example',
      title: 'Et godt dokumentert miniprosjekt',
      content: `Her er et komplett miniprosjekt med god struktur og dokumentasjon:

\`\`\`python
"""
BMI-kalkulator med statistikk

Programmet lar brukeren registrere BMI for flere personer,
beregner statistikk og lager et stolpediagram.

Forfatter: Elev Elevesen
Dato: 2024-03-20
"""

import matplotlib.pyplot as plt

def beregn_bmi(vekt_kg, hoyde_m):
    """Beregner BMI basert på vekt (kg) og høyde (m)."""
    return vekt_kg / (hoyde_m ** 2)

def bmi_kategori(bmi):
    """Returnerer BMI-kategori som tekst."""
    if bmi < 18.5:
        return "Undervekt"
    elif bmi < 25:
        return "Normalvekt"
    elif bmi < 30:
        return "Overvekt"
    else:
        return "Fedme"

def les_inn_data():
    """Leser inn navn, vekt og høyde for flere personer."""
    navn_liste = []
    bmi_liste = []

    print("BMI-kalkulator (skriv 'ferdig' for å avslutte)")
    while True:
        navn = input("Navn: ")
        if navn.lower() == "ferdig":
            break
        try:
            vekt = float(input("Vekt (kg): "))
            hoyde = float(input("Høyde (m): "))
            bmi = beregn_bmi(vekt, hoyde)
            navn_liste.append(navn)
            bmi_liste.append(bmi)
            print(f"  BMI: {bmi:.1f} ({bmi_kategori(bmi)})")
        except ValueError:
            print("  Ugyldig input – prøv igjen.")

    return navn_liste, bmi_liste

def vis_statistikk(navn_liste, bmi_liste):
    """Skriver ut en oppsummering av BMI-dataene."""
    print("\\nOPPSUMMERING")
    print("=" * 35)
    for navn, bmi in zip(navn_liste, bmi_liste):
        print(f"  {navn:15s} BMI: {bmi:5.1f} ({bmi_kategori(bmi)})")
    print("-" * 35)
    print(f"  Gjennomsnitt: {sum(bmi_liste) / len(bmi_liste):.1f}")

def lag_diagram(navn_liste, bmi_liste):
    """Lager et stolpediagram over BMI-verdiene."""
    farger = ["green" if 18.5 <= b < 25 else "orange" for b in bmi_liste]
    plt.figure(figsize=(8, 5))
    plt.bar(navn_liste, bmi_liste, color=farger)
    plt.axhline(y=18.5, color="gray", linestyle="--", alpha=0.5)
    plt.axhline(y=25, color="gray", linestyle="--", alpha=0.5)
    plt.ylabel("BMI")
    plt.title("BMI-oversikt")
    plt.tight_layout()
    plt.savefig("bmi_oversikt.png", dpi=150)
    plt.show()

# === HOVEDPROGRAM ===
navn, bmi = les_inn_data()
if len(navn) > 0:
    vis_statistikk(navn, bmi)
    lag_diagram(navn, bmi)
else:
    print("Ingen data registrert.")
\`\`\`

Programmet viser alle elementene i et godt prosjekt: filhode, docstrings, feilhåndtering, modulær oppbygging med funksjoner, og en tydelig hovedprogramdel.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-5-7-oppsummering',
      type: 'text',
      content: `### Oppsummering

I dette kapittelet har du lært å:

- **Planlegge** et programmeringsprosjekt med pseudokode og flytskjema
- Følge de fire fasene: planlegging, koding, testing og dokumentasjon
- **Teste** programmer systematisk med kjente data, grensetilfeller og ugyldig inndata
- **Debugge** vanlige Python-feil: SyntaxError, IndentationError, NameError, TypeError og IndexError
- **Dokumentere** kode med kommentarer, docstrings og filhoder
- **Strukturere** et program med funksjoner som har tydelig ansvar

**Nøkkelprinsipper for gode prosjekter:**
- Planlegg før du koder – det sparer tid til slutt
- Skriv og test én funksjon om gangen
- Les feilmeldinger nøye – de forteller deg hva som er galt
- Dokumenter koden din – fremtidens deg vil takke deg
- Hold funksjoner små og med ett tydelig formål

Med ferdighetene fra hele seksjon 5 – variabler, kontrollstrukturer, funksjoner, lister, filhåndtering, visualisering og prosjektarbeid – har du et solid grunnlag for å bruke programmering som verktøy i teknologi og forskningslære.`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv pseudokode for et program som leser inn poengsummer fra en prøve, beregner gjennomsnitt og median, og avgjør om snittet er bestått (over 50 %). Oversett deretter pseudokoden til Python-kode med minst to funksjoner.',
        hints: ['Pseudokode: LES inn poeng → BEREGN gjennomsnitt → SORTER og FINN median → SJEKK om bestått. Lag funksjoner som `beregn_gjennomsnitt(poeng)` og `beregn_median(poeng)`. Median: sorter listen og ta midtverdien (eller gjennomsnittet av de to midterste).'],
        solution: `**Pseudokode:**
\`\`\`
LES antall elever
FOR hver elev:
    LES poengsum
    LEGG TIL i liste
BEREGN gjennomsnitt (sum / antall)
SORTER listen
BEREGN median (midtverdi)
HVIS gjennomsnitt > 50:
    SKRIV "Bestått"
ELLERS:
    SKRIV "Ikke bestått"
\`\`\`

**Python-kode:**
\`\`\`python
def beregn_gjennomsnitt(poeng):
    """Beregner gjennomsnittet av en liste med poeng."""
    return sum(poeng) / len(poeng)

def beregn_median(poeng):
    """Beregner medianen av en liste med poeng."""
    sortert = sorted(poeng)
    n = len(sortert)
    if n % 2 == 1:
        return sortert[n // 2]
    else:
        return (sortert[n // 2 - 1] + sortert[n // 2]) / 2

# Hovedprogram
poeng_liste = []
antall = int(input("Antall elever: "))

for i in range(antall):
    p = float(input(f"Poeng for elev {i + 1}: "))
    poeng_liste.append(p)

snitt = beregn_gjennomsnitt(poeng_liste)
median = beregn_median(poeng_liste)

print(f"\\nGjennomsnitt: {snitt:.1f} poeng")
print(f"Median: {median:.1f} poeng")

if snitt > 50:
    print("Resultatet: Bestått (snitt over 50 poeng)")
else:
    print("Resultat: Ikke bestått (snitt under 50 poeng)")
\`\`\`

Programmet viser overgangen fra pseudokode til Python: hver linje i pseudokoden tilsvarer en del av den ferdige koden. Funksjonene gjør hovedprogrammet ryddig og lesbart.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-5-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør et miniprosjekt: Lag et Python-program som fungerer som en «værstasjon». Programmet skal: a) Lese inn daglige målinger (temperatur, nedbør) i en uke (7 dager). b) Beregne og vise statistikk (gjennomsnitt, min, maks for begge). c) Lage to grafer med subplots: temperatur over uken og nedbør som stolpediagram. d) Lagre en rapport til en tekstfil. Kravliste: minst 3 funksjoner, docstrings på alle funksjoner, feilhåndtering for ugyldig inndata, og et filhode.',
        hints: ['Struktur: `les_vaerdata()` for innlesing med try/except, `beregn_statistikk(data)` for statistikkberegninger, `lag_graf(temp, nedbor)` med plt.subplots(2, 1) for to grafer, og `skriv_rapport(temp_stat, nedbor_stat)` for filskriving. Lag et filhode med trippel-anførselstegn øverst i programmet.'],
        solution: `\`\`\`python
"""
Værstasjon – Ukeanalysator

Leser inn daglige værmålinger (temperatur og nedbør),
beregner statistikk og lager grafer og rapport.

Forfatter: Elevnavn
Dato: 2024-03-22
"""

import matplotlib.pyplot as plt

def les_vaerdata():
    """Leser inn temperatur og nedbør for 7 dager."""
    ukedager = ["Mandag", "Tirsdag", "Onsdag", "Torsdag",
                "Fredag", "Lørdag", "Søndag"]
    temperaturer = []
    nedbor = []

    print("Skriv inn værmålinger for uken:")
    for dag in ukedager:
        while True:
            try:
                temp = float(input(f"  {dag} - temperatur (°C): "))
                ned = float(input(f"  {dag} - nedbør (mm): "))
                temperaturer.append(temp)
                nedbor.append(ned)
                break
            except ValueError:
                print("  Ugyldig verdi – prøv igjen.")

    return ukedager, temperaturer, nedbor

def beregn_statistikk(verdier, navn):
    """Beregner og returnerer statistikk for en liste med verdier."""
    stat = {
        "navn": navn,
        "gjennomsnitt": sum(verdier) / len(verdier),
        "maks": max(verdier),
        "min": min(verdier),
    }
    return stat

def lag_grafer(ukedager, temperaturer, nedbor):
    """Lager subplots med temperatur og nedbør."""
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

    ax1.plot(ukedager, temperaturer, "r-o", linewidth=2)
    ax1.set_ylabel("Temperatur (°C)")
    ax1.set_title("Temperatur gjennom uken")
    ax1.grid(True, alpha=0.3)

    ax2.bar(ukedager, nedbor, color="#3498db")
    ax2.set_ylabel("Nedbør (mm)")
    ax2.set_title("Nedbør gjennom uken")
    ax2.grid(axis="y", alpha=0.3)

    plt.tight_layout()
    plt.savefig("vaerrapport_uke.png", dpi=150)
    plt.show()

def skriv_rapport(temp_stat, nedbor_stat, filnavn):
    """Skriver en rapport med statistikk til en tekstfil."""
    with open(filnavn, "w") as fil:
        print("UKENTLIG VÆRRAPPORT", file=fil)
        print("=" * 35, file=fil)
        for stat in [temp_stat, nedbor_stat]:
            print(f"\\n{stat['navn']}:", file=fil)
            print(f"  Gjennomsnitt: {stat['gjennomsnitt']:.1f}", file=fil)
            print(f"  Høyeste:      {stat['maks']:.1f}", file=fil)
            print(f"  Laveste:      {stat['min']:.1f}", file=fil)

# === HOVEDPROGRAM ===
ukedager, temperaturer, nedbor = les_vaerdata()
temp_stat = beregn_statistikk(temperaturer, "Temperatur (°C)")
nedbor_stat = beregn_statistikk(nedbor, "Nedbør (mm)")

print("\\n--- Statistikk ---")
print(f"Snitttemperatur: {temp_stat['gjennomsnitt']:.1f} °C")
print(f"Total nedbør: {sum(nedbor):.1f} mm")

lag_grafer(ukedager, temperaturer, nedbor)
skriv_rapport(temp_stat, nedbor_stat, "vaerrapport.txt")
print("\\nRapport lagret i vaerrapport.txt")
\`\`\`

Prosjektet demonstrerer alle elementene: filhode, docstrings, feilhåndtering med try/except, modulær oppbygging med fire funksjoner, subplots for visualisering, og filskriving for rapportering.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 5 (kapittel 5.1–5.7)
// ============================================================================

export const TOF_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_5_1,
  CHAPTER_TOF_1_5_2,
  CHAPTER_TOF_1_5_3,
  CHAPTER_TOF_1_5_4,
  CHAPTER_TOF_1_5_5,
  CHAPTER_TOF_1_5_6,
  CHAPTER_TOF_1_5_7,
];

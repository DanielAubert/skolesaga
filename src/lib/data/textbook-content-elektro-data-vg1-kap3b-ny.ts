/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 3 (del B): Nye delkapitler
 *
 * Dekker: 3.5, 3.7, 3.8, 3.9
 * Temaer: Lister og datastrukturer, Arduino-programmering, IoT, feilsøking og testing
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.5: Lister og datastrukturer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_5: TextbookChapter = {
  id: 'elektro-data-vg1-3-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.5',
  title: 'Lister og datastrukturer',
  description: 'Lister, tupler og ordbøker i Python – opprette, indeksere, manipulere og iterere over datastrukturer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke datastrukturer for å organisere data',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-5-intro',
      type: 'text',
      content: `## Lister og datastrukturer

Når vi programmerer, trenger vi ofte å lagre og håndtere mange verdier samtidig. Tenk deg at du skal lagre temperaturen fra en sensor hvert minutt i en time – da trenger du 60 verdier. Det ville vært upraktisk å lage 60 separate variabler!

**Datastrukturer** lar oss samle flere verdier i én variabel. I Python finnes det flere typer datastrukturer, og i dette kapittelet skal vi se på de tre viktigste:

- **Lister** – fleksible samlinger der vi kan legge til, fjerne og endre elementer
- **Tupler** – uforanderlige samlinger som ikke kan endres etter at de er opprettet
- **Ordbøker** – samlinger der hver verdi har en nøkkel (som et oppslagsverk)

Vi skal også lære å bruke **for-løkker** til å gå gjennom alle elementene i en datastruktur.`,
    },

    // BLOKK 1: Lister
    {
      id: 'elektro-data-vg1-3-5-def-1',
      type: 'definition',
      title: 'Lister i Python',
      content: `En **liste** er en ordnet samling av verdier. Lister lages med hakeparenteser \`[]\` og kan inneholde verdier av ulike typer.

**Opprette lister:**
\`\`\`python
temperaturer = [22.5, 23.1, 21.8, 24.0, 22.9]
navn = ["Anna", "Ole", "Kari"]
blandet = [42, "hei", True, 3.14]
tom_liste = []
\`\`\`

**Indeksering** – hvert element har en posisjon (indeks) som starter på 0:
\`\`\`python
print(temperaturer[0])   # 22.5 (første element)
print(temperaturer[2])   # 21.8 (tredje element)
print(temperaturer[-1])  # 22.9 (siste element)
\`\`\`

**Slicing** – hente ut en del av listen:
\`\`\`python
print(temperaturer[1:3])  # [23.1, 21.8] (indeks 1 og 2)
print(temperaturer[:2])   # [22.5, 23.1] (de to første)
print(temperaturer[3:])   # [24.0, 22.9] (fra indeks 3 og ut)
\`\`\`

**Nyttige metoder:**
| Metode | Beskrivelse |
|--------|------------|
| \`liste.append(x)\` | Legger til x på slutten |
| \`liste.insert(i, x)\` | Setter inn x på posisjon i |
| \`liste.remove(x)\` | Fjerner første forekomst av x |
| \`liste.pop(i)\` | Fjerner og returnerer element på posisjon i |
| \`len(liste)\` | Antall elementer |
| \`liste.sort()\` | Sorterer listen |`,
    },
    {
      id: 'elektro-data-vg1-3-5-example-1',
      type: 'example',
      title: 'Arbeide med en temperaturliste',
      problem: 'En sensor har målt temperaturer gjennom dagen: `[18.5, 20.1, 22.3, 24.7, 23.1, 19.8]`. Finn gjennomsnittet, den høyeste og den laveste temperaturen.',
      solution: `\`\`\`python
temperaturer = [18.5, 20.1, 22.3, 24.7, 23.1, 19.8]

gjennomsnitt = sum(temperaturer) / len(temperaturer)
hoeyeste = max(temperaturer)
laveste = min(temperaturer)

print(f"Gjennomsnitt: {gjennomsnitt:.1f} °C")  # 21.4 °C
print(f"Høyeste: {hoeyeste} °C")                # 24.7 °C
print(f"Laveste: {laveste} °C")                  # 18.5 °C
\`\`\`

Vi bruker de innebygde funksjonene \`sum()\`, \`len()\`, \`max()\` og \`min()\` som alle fungerer direkte på lister med tall.`,
    },
    {
      id: 'elektro-data-vg1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skrives ut av følgende kode?\n\n```python\nfarger = ["rød", "grønn", "blå", "gul"]\nprint(farger[1])\n```',
        options: [
          { id: 'a', text: 'rød', correct: false },
          { id: 'b', text: 'grønn', correct: true },
          { id: 'c', text: 'blå', correct: false },
          { id: 'd', text: '1', correct: false },
        ],
        solution: 'Indeksering i Python starter på 0. `farger[0]` er "rød", `farger[1]` er "grønn", `farger[2]` er "blå" og `farger[3]` er "gul". Derfor gir `farger[1]` svaret **grønn**.',
      },
    },

    // BLOKK 2: Tupler
    {
      id: 'elektro-data-vg1-3-5-def-2',
      type: 'definition',
      title: 'Tupler – uforanderlige lister',
      content: `En **tuppel** (tuple) ligner på en liste, men kan **ikke endres** etter at den er opprettet. Tupler lages med vanlige parenteser \`()\`.

\`\`\`python
koordinat = (59.91, 10.75)   # Breddegrad, lengdegrad
rgb_farge = (255, 128, 0)    # Rød, grønn, blå
\`\`\`

**Indeksering** fungerer akkurat som for lister:
\`\`\`python
print(koordinat[0])  # 59.91
print(rgb_farge[2])  # 0
\`\`\`

**Men du kan IKKE endre verdier:**
\`\`\`python
koordinat[0] = 60.0  # TypeError! Tupler kan ikke endres
\`\`\`

**Når bør du bruke tupler?**
- Når dataene **ikke skal endres** (f.eks. koordinater, farger, innstillinger)
- Tupler er raskere enn lister og bruker mindre minne
- Tupler kan brukes som nøkler i ordbøker (det kan ikke lister)`,
    },
    {
      id: 'elektro-data-vg1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en liste og en tuppel i Python?',
        options: [
          { id: 'a', text: 'En liste bruker () og en tuppel bruker []', correct: false },
          { id: 'b', text: 'En tuppel kan ikke endres etter at den er opprettet', correct: true },
          { id: 'c', text: 'En tuppel kan bare inneholde tall', correct: false },
          { id: 'd', text: 'Det er ingen forskjell', correct: false },
        ],
        solution: 'Hovedforskjellen er at en tuppel er **uforanderlig** (immutable). Etter at en tuppel er opprettet, kan du ikke legge til, fjerne eller endre elementer. En liste er **foranderlig** (mutable) og kan endres fritt. Lister bruker `[]` og tupler bruker `()`.',
      },
    },

    // BLOKK 3: Ordbøker
    {
      id: 'elektro-data-vg1-3-5-def-3',
      type: 'definition',
      title: 'Ordbøker (dictionaries)',
      content: `En **ordbok** (dictionary) lagrer data som **nøkkel-verdi-par**. Ordbøker lages med krøllparenteser \`{}\`.

\`\`\`python
sensor = {
    "type": "temperatur",
    "verdi": 22.5,
    "enhet": "°C",
    "aktiv": True
}
\`\`\`

**Hente verdier med nøkkel:**
\`\`\`python
print(sensor["type"])    # "temperatur"
print(sensor["verdi"])   # 22.5
\`\`\`

**Legge til og endre verdier:**
\`\`\`python
sensor["verdi"] = 23.1          # Endrer eksisterende verdi
sensor["plassering"] = "stue"   # Legger til ny nøkkel
\`\`\`

**Nyttige metoder:**
| Metode | Beskrivelse |
|--------|------------|
| \`d.keys()\` | Returnerer alle nøkler |
| \`d.values()\` | Returnerer alle verdier |
| \`d.items()\` | Returnerer alle nøkkel-verdi-par |
| \`d.get(key, default)\` | Henter verdi, returnerer default hvis nøkkelen mangler |`,
    },
    {
      id: 'elektro-data-vg1-3-5-example-2',
      type: 'example',
      title: 'Sensordata med ordbok',
      problem: 'Lag en ordbok for en fuktighetssensor, og skriv ut all informasjon formatert.',
      solution: `\`\`\`python
sensor = {
    "navn": "DHT22",
    "fuktighet": 65.3,
    "temperatur": 22.1,
    "plassering": "drivhus"
}

for noekkel, verdi in sensor.items():
    print(f"{noekkel}: {verdi}")
\`\`\`

**Utskrift:**
\`\`\`
navn: DHT22
fuktighet: 65.3
temperatur: 22.1
plassering: drivhus
\`\`\`

Metoden \`.items()\` gir oss både nøkkel og verdi for hvert element, og for-løkken går gjennom alle parene.`,
    },
    {
      id: 'elektro-data-vg1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skrives ut av følgende kode?\n\n```python\nelev = {"navn": "Kari", "alder": 17, "klasse": "1EDA"}\nprint(elev["klasse"])\n```',
        options: [
          { id: 'a', text: 'klasse', correct: false },
          { id: 'b', text: '1EDA', correct: true },
          { id: 'c', text: '{"klasse": "1EDA"}', correct: false },
          { id: 'd', text: 'KeyError', correct: false },
        ],
        solution: 'I en ordbok henter vi verdier ved å bruke nøkkelen i hakeparenteser. `elev["klasse"]` henter verdien som hører til nøkkelen `"klasse"`, som er `"1EDA"`.',
      },
    },

    // BLOKK 4: Iterering med for-løkker
    {
      id: 'elektro-data-vg1-3-5-text-iter',
      type: 'text',
      title: 'Iterering med for-løkker',
      content: `## Iterering med for-løkker

En **for-løkke** lar oss gå gjennom alle elementene i en datastruktur, ett om gangen. Dette kalles **iterering**.

**Iterere over en liste:**
\`\`\`python
sensorer = ["temperatur", "fuktighet", "trykk"]
for sensor in sensorer:
    print(f"Leser av: {sensor}")
\`\`\`

**Med indeks (enumerate):**
\`\`\`python
malinger = [22.5, 23.1, 21.8]
for i, verdi in enumerate(malinger):
    print(f"Måling {i}: {verdi} °C")
\`\`\`

**Iterere over en ordbok:**
\`\`\`python
innstillinger = {"lysstyrke": 80, "volum": 50, "kontrast": 70}
for noekkel, verdi in innstillinger.items():
    print(f"{noekkel} = {verdi}")
\`\`\`

**List comprehension** – en kompakt måte å lage nye lister:
\`\`\`python
tall = [1, 2, 3, 4, 5]
kvadrater = [x**2 for x in tall]  # [1, 4, 9, 16, 25]
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-5-example-3',
      type: 'example',
      title: 'Filtrere sensordata med for-løkke',
      problem: 'Gitt en liste med temperaturmålinger, finn alle målinger over 25 °C og lagre dem i en ny liste.',
      solution: `\`\`\`python
malinger = [22.5, 26.1, 24.8, 27.3, 23.0, 25.5, 21.9]
hoye_temp = []

for temp in malinger:
    if temp > 25:
        hoye_temp.append(temp)

print(f"Målinger over 25 °C: {hoye_temp}")
# Målinger over 25 °C: [26.1, 27.3, 25.5]
\`\`\`

**Alternativt med list comprehension:**
\`\`\`python
hoye_temp = [temp for temp in malinger if temp > 25]
\`\`\`

Begge metodene gir samme resultat. List comprehension er mer kompakt, men for-løkken er lettere å forstå for nybegynnere.`,
    },
    {
      id: 'elektro-data-vg1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv et Python-program som har en liste med 8 temperaturer. Programmet skal:\n\na) Skrive ut alle temperaturer med indeks\nb) Beregne og skrive ut gjennomsnittet\nc) Finne og skrive ut hvor mange målinger som er over gjennomsnittet',
        hints: ['Bruk `enumerate()` for å få indeks og verdi.', 'Bruk `sum()` og `len()` for gjennomsnitt.'],
        solution: '```python\ntemp = [19.2, 21.5, 23.8, 22.1, 25.0, 24.3, 20.7, 22.9]\n\n# a) Skriv ut med indeks\nfor i, t in enumerate(temp):\n    print(f"Måling {i}: {t} °C")\n\n# b) Gjennomsnitt\nsnitt = sum(temp) / len(temp)\nprint(f"Gjennomsnitt: {snitt:.1f} °C")\n\n# c) Antall over gjennomsnittet\nover = len([t for t in temp if t > snitt])\nprint(f"Antall over gjennomsnittet: {over}")\n```',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de viktigste datastrukturene i Python:

- **Lister** \`[]\` – fleksible samlinger som kan endres, med indeksering fra 0
- **Tupler** \`()\` – uforanderlige samlinger, brukes når data ikke skal endres
- **Ordbøker** \`{}\` – nøkkel-verdi-par for organisert datalagring
- **For-løkker** – brukes til å iterere gjennom alle elementer i en datastruktur
- **List comprehension** – kompakt syntaks for å lage nye lister

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Liste | Foranderlig, ordnet samling med \`[]\`-syntaks |
| Indeksering | Tilgang til enkeltelementer via posisjon (starter på 0) |
| Slicing | Hente ut en del av en liste med \`[start:stopp]\` |
| Tuppel | Uforanderlig samling med \`()\`-syntaks |
| Ordbok | Nøkkel-verdi-par med \`{}\`-syntaks |
| Iterering | Å gå gjennom alle elementer i en datastruktur |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et Python-program som bruker en ordbok til å lagre informasjon om 3 sensorer (navn, type og siste måling). Bruk en for-løkke til å skrive ut all informasjon formatert, og finn sensoren med den høyeste målingen.',
        hints: ['Du kan lage en liste med ordbøker, eller en ordbok med ordbøker som verdier.', 'Bruk en variabel til å holde styr på den høyeste målingen mens du itererer.'],
        solution: '```python\nsensorer = [\n    {"navn": "Sensor A", "type": "temperatur", "verdi": 23.5},\n    {"navn": "Sensor B", "type": "fuktighet", "verdi": 67.2},\n    {"navn": "Sensor C", "type": "temperatur", "verdi": 25.1}\n]\n\nhoyest_navn = ""\nhoyest_verdi = float("-inf")\n\nfor s in sensorer:\n    print(f"{s[\'navn\']} ({s[\'type\']}): {s[\'verdi\']}")\n    if s["verdi"] > hoyest_verdi:\n        hoyest_verdi = s["verdi"]\n        hoyest_navn = s["navn"]\n\nprint(f"Høyest måling: {hoyest_navn} med {hoyest_verdi}")\n```',
      },
    },
    {
      id: 'elektro-data-vg1-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva skrives ut av denne koden?\n\n```python\ntall = [10, 20, 30, 40, 50]\nprint(tall[1:4])\n```',
        options: [
          { id: 'a', text: '[10, 20, 30, 40]', correct: false },
          { id: 'b', text: '[20, 30, 40]', correct: true },
          { id: 'c', text: '[20, 30, 40, 50]', correct: false },
          { id: 'd', text: '[10, 20, 30]', correct: false },
        ],
        solution: 'Slicing `tall[1:4]` henter elementer fra indeks 1 opp til (men ikke inkludert) indeks 4. Indeks 1 er 20, indeks 2 er 30 og indeks 3 er 40. Resultatet er `[20, 30, 40]`.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Liste', definition: 'Foranderlig, ordnet samling av verdier med []-syntaks i Python.' },
    { term: 'Tuppel', definition: 'Uforanderlig samling av verdier med ()-syntaks i Python.' },
    { term: 'Ordbok', definition: 'Datastruktur som lagrer nøkkel-verdi-par med {}-syntaks.' },
    { term: 'Indeksering', definition: 'Tilgang til enkeltelementer via posisjon, starter på 0.' },
    { term: 'Slicing', definition: 'Hente ut en del av en sekvens med [start:stopp]-syntaks.' },
    { term: 'Iterering', definition: 'Å gå gjennom alle elementer i en datastruktur med en løkke.' },
  ],
};

// ============================================================================
// Kapittel 3.7: Arduino-programmering og prosjekter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_7: TextbookChapter = {
  id: 'elektro-data-vg1-3-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.7',
  title: 'Arduino-programmering og prosjekter',
  description: 'Programmering av Arduino med sensoravlesning, PWM-styring, LED-prosjekter og seriell kommunikasjon.',
  estimatedMinutes: 65,
  competenceGoals: [
    'programmere mikrokontrollere for å styre fysiske komponenter',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-7-intro',
      type: 'text',
      content: `## Arduino-programmering og prosjekter

**Arduino** er en mikrokontrollerplattform som gjør det enkelt å bygge elektroniske prosjekter. Med en Arduino kan du lese av sensorer, styre motorer og LED-er, og kommunisere med en datamaskin – alt med noen få linjer kode.

Arduino programmeres i **C/C++** og har en enkel grunnstruktur med to hovedfunksjoner:
- \`setup()\` – kjøres én gang når programmet starter
- \`loop()\` – kjøres om og om igjen etter setup

I dette kapittelet skal du lære:
- Grunnleggende Arduino-programmering (C/C++ syntax)
- Lese av sensorer med \`analogRead()\` og \`digitalRead()\`
- Styre LED-er og motorer med \`analogWrite()\` (PWM)
- Kommunisere med datamaskinen via seriell kommunikasjon`,
    },

    // BLOKK 1: Grunnstruktur og pinMode
    {
      id: 'elektro-data-vg1-3-7-def-1',
      type: 'definition',
      title: 'Arduino-programmets grunnstruktur',
      content: `Alle Arduino-programmer har samme grunnstruktur:

\`\`\`cpp
// Globale variabler deklareres her
int ledPin = 13;

void setup() {
  // Kjøres én gang ved oppstart
  pinMode(ledPin, OUTPUT);    // Sett pinne 13 som utgang
  Serial.begin(9600);         // Start seriell kommunikasjon
}

void loop() {
  // Kjøres om og om igjen
  digitalWrite(ledPin, HIGH); // Slå på LED
  delay(1000);                // Vent 1 sekund (1000 ms)
  digitalWrite(ledPin, LOW);  // Slå av LED
  delay(1000);                // Vent 1 sekund
}
\`\`\`

**Viktige funksjoner:**
| Funksjon | Beskrivelse |
|----------|------------|
| \`pinMode(pin, modus)\` | Setter en pinne som INPUT eller OUTPUT |
| \`digitalWrite(pin, verdi)\` | Setter en digital utgang til HIGH eller LOW |
| \`digitalRead(pin)\` | Leser en digital inngang (returnerer HIGH eller LOW) |
| \`analogRead(pin)\` | Leser en analog inngang (returnerer 0–1023) |
| \`analogWrite(pin, verdi)\` | Setter PWM-verdi på en pinne (0–255) |
| \`delay(ms)\` | Pause i millisekunder |`,
    },
    {
      id: 'elektro-data-vg1-3-7-example-1',
      type: 'example',
      title: 'Blinke-LED med knapp',
      problem: 'Skriv et Arduino-program som leser en trykkknapp på pinne 2 og slår på en LED på pinne 13 når knappen trykkes.',
      solution: `\`\`\`cpp
int knappPin = 2;
int ledPin = 13;

void setup() {
  pinMode(knappPin, INPUT_PULLUP); // Inngang med intern pull-up
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int knappStatus = digitalRead(knappPin);

  if (knappStatus == LOW) {    // LOW betyr knappen er trykket
    digitalWrite(ledPin, HIGH); // Slå på LED
  } else {
    digitalWrite(ledPin, LOW);  // Slå av LED
  }
}
\`\`\`

**Forklaring:**
- \`INPUT_PULLUP\` aktiverer en intern motstand som holder pinnen HIGH når knappen ikke er trykket
- Når knappen trykkes, kobles pinnen til jord (GND), og verdien blir LOW
- \`if/else\` sjekker knappens status og styrer LED-en deretter`,
    },
    {
      id: 'elektro-data-vg1-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken funksjon brukes til å lese verdien fra en analog sensor i Arduino?',
        options: [
          { id: 'a', text: 'digitalRead()', correct: false },
          { id: 'b', text: 'analogRead()', correct: true },
          { id: 'c', text: 'sensorRead()', correct: false },
          { id: 'd', text: 'readAnalog()', correct: false },
        ],
        solution: '`analogRead()` brukes til å lese verdien fra en analog sensor. Den returnerer en verdi mellom 0 og 1023, der 0 tilsvarer 0V og 1023 tilsvarer 5V (på en standard Arduino Uno). `digitalRead()` brukes til å lese digitale verdier (HIGH eller LOW).',
      },
    },

    // BLOKK 2: Sensoravlesning
    {
      id: 'elektro-data-vg1-3-7-text-sensor',
      type: 'text',
      title: 'Sensoravlesning',
      content: `## Sensoravlesning

Arduino kan lese to typer sensorsignaler:

**Digitale sensorer** gir enten HIGH (1) eller LOW (0):
- Trykkknapper
- Bevegelsessensorer (PIR)
- Reed-kontakter (magnetbrytere)

**Analoge sensorer** gir en verdi mellom 0 og 1023:
- Temperatursensorer (f.eks. TMP36)
- Lyssensorer (LDR)
- Potensiometre
- Fuktighetssensorer

**Eksempel – lese temperatursensor (TMP36):**
\`\`\`cpp
int sensorPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int raVerdi = analogRead(sensorPin);
  float spenning = raVerdi * (5.0 / 1023.0);
  float temperatur = (spenning - 0.5) * 100.0;

  Serial.print("Temperatur: ");
  Serial.print(temperatur);
  Serial.println(" °C");

  delay(1000);
}
\`\`\`

Formelen \`(spenning - 0.5) * 100\` er spesifikk for TMP36-sensoren. Andre sensorer har andre omregningsformler.`,
    },
    {
      id: 'elektro-data-vg1-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En analog sensor gir verdien 512 når du bruker `analogRead()`. Hvilken spenning tilsvarer dette omtrent (med 5V referanse)?',
        options: [
          { id: 'a', text: '1.0 V', correct: false },
          { id: 'b', text: '2.5 V', correct: true },
          { id: 'c', text: '3.3 V', correct: false },
          { id: 'd', text: '5.0 V', correct: false },
        ],
        solution: 'Spenningen beregnes med formelen: spenning = råverdi × (5.0 / 1023.0). For 512: spenning = 512 × (5.0 / 1023.0) ≈ 2.50 V. Siden 512 er omtrent halvparten av 1023, gir det omtrent halvparten av 5V, altså ca. **2.5V**.',
      },
    },

    // BLOKK 3: PWM og motorstyring
    {
      id: 'elektro-data-vg1-3-7-def-2',
      type: 'definition',
      title: 'PWM – pulsbreddemodulasjon',
      content: `**PWM (Pulse Width Modulation)** er en teknikk der vi raskt slår en digital utgang av og på for å simulere en analog spenning. \`analogWrite()\` bruker PWM til å styre lysstyrke på LED-er eller hastighet på motorer.

**Hvordan PWM fungerer:**
- Verdien 0 betyr alltid AV (0% duty cycle)
- Verdien 127 betyr halvparten av tiden PÅ (50% duty cycle)
- Verdien 255 betyr alltid PÅ (100% duty cycle)

\`\`\`cpp
int ledPin = 9; // Må være en PWM-pinne (~)

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Gradvis øk lysstyrke
  for (int i = 0; i <= 255; i++) {
    analogWrite(ledPin, i);
    delay(10);
  }
  // Gradvis senk lysstyrke
  for (int i = 255; i >= 0; i--) {
    analogWrite(ledPin, i);
    delay(10);
  }
}
\`\`\`

**Viktig:** PWM fungerer bare på bestemte pinner, merket med ~ på Arduino-kortet (typisk pinne 3, 5, 6, 9, 10, 11 på Arduino Uno).`,
    },
    {
      id: 'elektro-data-vg1-3-7-example-2',
      type: 'example',
      title: 'Styre LED med potensiometer',
      problem: 'Bruk et potensiometer til å styre lysstyrken på en LED. Potensiometeret er koblet til analog pinne A0 og LED-en til PWM-pinne 9.',
      solution: `\`\`\`cpp
int potPin = A0;
int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int potVerdi = analogRead(potPin);      // 0–1023
  int lysstyrke = potVerdi / 4;            // 0–255 (1023/4 ≈ 255)
  analogWrite(ledPin, lysstyrke);
  delay(10);
}
\`\`\`

**Forklaring:**
- \`analogRead()\` returnerer verdier fra 0 til 1023
- \`analogWrite()\` tar verdier fra 0 til 255
- Vi deler på 4 for å konvertere mellom de to områdene
- Alternativt kan man bruke \`map(potVerdi, 0, 1023, 0, 255)\``,
    },
    {
      id: 'elektro-data-vg1-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv et Arduino-program som leser en lyssensor (LDR) på pinne A0, og slår på en LED på pinne 13 når det er mørkt (sensorverdi under 300). Bruk seriell kommunikasjon til å skrive ut sensorverdien hvert sekund.',
        hints: ['Husk å sette opp `Serial.begin(9600)` i `setup()`.', 'Bruk `if/else` for å sjekke om verdien er under 300.'],
        solution: '```cpp\nint ldrPin = A0;\nint ledPin = 13;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lysverdi = analogRead(ldrPin);\n  Serial.print("Lysverdi: ");\n  Serial.println(lysverdi);\n\n  if (lysverdi < 300) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n  delay(1000);\n}\n```',
      },
    },

    // BLOKK 4: Seriell kommunikasjon
    {
      id: 'elektro-data-vg1-3-7-text-serial',
      type: 'text',
      title: 'Seriell kommunikasjon',
      content: `## Seriell kommunikasjon

**Seriell kommunikasjon** lar Arduino-en sende og motta data til/fra en datamaskin via USB-kabelen. Dette er essensielt for feilsøking og datalogging.

**Sende data:**
\`\`\`cpp
Serial.begin(9600);         // Start med 9600 baud
Serial.print("Verdi: ");   // Skriv uten linjeskift
Serial.println(42);         // Skriv med linjeskift
\`\`\`

**Motta data:**
\`\`\`cpp
void loop() {
  if (Serial.available() > 0) {
    char tegn = Serial.read();
    Serial.print("Mottok: ");
    Serial.println(tegn);
  }
}
\`\`\`

**Serial Monitor** i Arduino IDE viser data som sendes fra Arduino-en, og lar deg sende tekst tilbake. Åpnes med Ctrl+Shift+M (eller Verktøy → Serial Monitor).

Seriell kommunikasjon er spesielt nyttig for:
- **Feilsøking** – se verdier fra sensorer i sanntid
- **Datalogging** – lagre målinger over tid
- **Styring** – sende kommandoer fra datamaskinen til Arduino-en`,
    },
    {
      id: 'elektro-data-vg1-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom `Serial.print()` og `Serial.println()` i Arduino?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', correct: false },
          { id: 'b', text: 'println() legger til et linjeskift etter teksten', correct: true },
          { id: 'c', text: 'print() kan bare skrive tall, println() kan skrive tekst', correct: false },
          { id: 'd', text: 'println() er raskere enn print()', correct: false },
        ],
        solution: '`Serial.println()` legger automatisk til et linjeskift (\\n) etter teksten som skrives ut, slik at neste utskrift kommer på en ny linje. `Serial.print()` skriver uten linjeskift, slik at neste utskrift fortsetter på samme linje.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært grunnleggende Arduino-programmering:

- **Grunnstruktur:** \`setup()\` kjøres én gang, \`loop()\` kjøres i en evig løkke
- **Digital I/O:** \`digitalRead()\` og \`digitalWrite()\` for av/på-signaler
- **Analog lesning:** \`analogRead()\` gir verdier 0–1023 fra analoge sensorer
- **PWM:** \`analogWrite()\` gir verdier 0–255 for å simulere analog utgang
- **Seriell kommunikasjon:** \`Serial.print()\` for å sende data til datamaskinen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| setup() | Funksjonen som kjøres én gang ved oppstart |
| loop() | Funksjonen som kjøres om og om igjen |
| pinMode() | Setter en pinne som inngang eller utgang |
| analogRead() | Leser analog verdi (0–1023) |
| analogWrite() | Setter PWM-verdi (0–255) |
| PWM | Pulsbreddemodulasjon – simulerer analog utgang med raske digitale pulser |
| Serial Monitor | Verktøy for å vise seriell data fra Arduino |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design et Arduino-basert alarmsystem som bruker en PIR-bevegelsessensor (digital, pinne 2) og en buzzer (pinne 8). Når bevegelse detekteres, skal buzzeren pipe i 2 sekunder, og en melding skrives til seriell monitor. Skriv fullstendig kode med kommentarer.',
        hints: ['PIR-sensoren gir HIGH når den registrerer bevegelse.', 'Bruk `tone(pin, frekvens)` for å spille lyd og `noTone(pin)` for å stoppe.'],
        solution: '```cpp\nint pirPin = 2;\nint buzzerPin = 8;\n\nvoid setup() {\n  pinMode(pirPin, INPUT);\n  pinMode(buzzerPin, OUTPUT);\n  Serial.begin(9600);\n  Serial.println("Alarmsystem aktivert!");\n  delay(2000); // Gi PIR tid til å stabilisere\n}\n\nvoid loop() {\n  if (digitalRead(pirPin) == HIGH) {\n    Serial.println("BEVEGELSE REGISTRERT!");\n    tone(buzzerPin, 1000); // 1000 Hz tone\n    delay(2000);           // Pip i 2 sekunder\n    noTone(buzzerPin);     // Stopp lyd\n  }\n  delay(100);\n}\n```',
      },
    },
    {
      id: 'elektro-data-vg1-3-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Arduino-program som leser en temperatursensor (TMP36) på pinne A0 og styrer en vifte (motor) på PWM-pinne 9. Viften skal:\n- Stå stille under 20 °C\n- Gå på halv hastighet mellom 20–25 °C\n- Gå på full hastighet over 25 °C\nSkriv temperaturen og viftehastigheten til seriell monitor.',
        hints: ['Bruk formelen: temperatur = (spenning - 0.5) * 100 for TMP36.', 'Halv hastighet = analogWrite(pin, 127), full hastighet = analogWrite(pin, 255).'],
        solution: '```cpp\nint sensorPin = A0;\nint viftePin = 9;\n\nvoid setup() {\n  pinMode(viftePin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int raVerdi = analogRead(sensorPin);\n  float spenning = raVerdi * (5.0 / 1023.0);\n  float temp = (spenning - 0.5) * 100.0;\n  int hastighet = 0;\n\n  if (temp > 25.0) {\n    hastighet = 255;\n  } else if (temp >= 20.0) {\n    hastighet = 127;\n  } else {\n    hastighet = 0;\n  }\n\n  analogWrite(viftePin, hastighet);\n  Serial.print("Temp: ");\n  Serial.print(temp, 1);\n  Serial.print(" °C | Vifte: ");\n  Serial.println(hastighet);\n  delay(2000);\n}\n```',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arduino', definition: 'Mikrokontrollerplattform for bygging av elektroniske prosjekter.' },
    { term: 'setup()', definition: 'Funksjonen som kjøres én gang ved oppstart av et Arduino-program.' },
    { term: 'loop()', definition: 'Funksjonen som kjøres i en evig løkke etter setup().' },
    { term: 'analogRead()', definition: 'Leser analog spenning og returnerer en verdi mellom 0 og 1023.' },
    { term: 'analogWrite()', definition: 'Setter en PWM-utgang til en verdi mellom 0 og 255.' },
    { term: 'PWM', definition: 'Pulsbreddemodulasjon – teknikk for å simulere analog spenning med digitale pulser.' },
    { term: 'Serial Monitor', definition: 'Verktøy i Arduino IDE for å sende og motta seriell data.' },
  ],
};

// ============================================================================
// Kapittel 3.8: IoT og nettverkstilkobling
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_8: TextbookChapter = {
  id: 'elektro-data-vg1-3-8',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.8',
  title: 'IoT og nettverkstilkobling',
  description: 'Grunnleggende IoT-konsepter, WiFi-moduler (ESP32/ESP8266), MQTT-protokollen og enkel skytilkobling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utvikle enkle IoT-løsninger med mikrokontrollere',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-8-intro',
      type: 'text',
      content: `## IoT og nettverkstilkobling

**IoT (Internet of Things)** – tingenes internett – handler om å koble fysiske gjenstander til internett slik at de kan samle inn data, kommunisere og utføre handlinger automatisk.

Tenk deg en temperatursensor i et drivhus som sender målinger til en sky-tjeneste. Hvis temperaturen faller under en grense, sender systemet en varsling til mobilen din og slår på varmesystemet automatisk. Dette er IoT i praksis!

**IoT-arkitektur i fire lag:**
1. **Sensorer** – samler inn data fra den fysiske verden (temperatur, fuktighet, lys, bevegelse)
2. **Nettverk** – overfører data via WiFi, Bluetooth eller mobilnett
3. **Sky (cloud)** – lagrer, analyserer og visualiserer dataene
4. **Handling** – alarmer, styring av enheter, varsler til brukere

I dette kapittelet skal du lære:
- Hvordan IoT-systemer fungerer
- Bruke ESP32/ESP8266 for WiFi-tilkobling
- MQTT-protokollen for enkel datautveksling
- Sende sensordata til en skytjeneste`,
    },

    // BLOKK 1: ESP32/ESP8266
    {
      id: 'elektro-data-vg1-3-8-def-1',
      type: 'definition',
      title: 'ESP32 og ESP8266 – WiFi-mikrokontrollere',
      content: `**ESP32** og **ESP8266** er mikrokontrollere med innebygd WiFi (og Bluetooth på ESP32). De programmeres med Arduino IDE og bruker nesten identisk syntax som vanlig Arduino.

**Forskjeller fra vanlig Arduino:**
| Egenskap | Arduino Uno | ESP32 |
|----------|------------|-------|
| WiFi | Nei (krever ekstra modul) | Ja, innebygd |
| Bluetooth | Nei | Ja |
| Klokkefrekvens | 16 MHz | 240 MHz |
| Analog oppløsning | 10 bit (0–1023) | 12 bit (0–4095) |
| Pris | ~200 kr | ~50 kr |

**Koble til WiFi med ESP32:**
\`\`\`cpp
#include <WiFi.h>

const char* ssid = "MittNett";
const char* passord = "hemmelig123";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, passord);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("Tilkoblet!");
  Serial.print("IP-adresse: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // IoT-logikk her
}
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en viktig fordel ESP32 har over en standard Arduino Uno?',
        options: [
          { id: 'a', text: 'ESP32 har flere digitale pinner', correct: false },
          { id: 'b', text: 'ESP32 har innebygd WiFi og Bluetooth', correct: true },
          { id: 'c', text: 'ESP32 bruker Python i stedet for C++', correct: false },
          { id: 'd', text: 'ESP32 trenger ikke strøm', correct: false },
        ],
        solution: 'Den viktigste fordelen med ESP32 er **innebygd WiFi og Bluetooth**, som gjør den ideell for IoT-prosjekter. Med en Arduino Uno trenger du ekstra moduler for trådløs kommunikasjon, noe som gjør prosjektet dyrere og mer komplisert.',
      },
    },

    // BLOKK 2: MQTT-protokollen
    {
      id: 'elektro-data-vg1-3-8-def-2',
      type: 'definition',
      title: 'MQTT – protokoll for IoT',
      content: `**MQTT (Message Queuing Telemetry Transport)** er en lettvekts kommunikasjonsprotokoll designet for IoT. Den bruker en **publish/subscribe**-modell:

**Tre roller:**
- **Broker** – en server som mottar og videresender meldinger (f.eks. Mosquitto)
- **Publisher** – sender data til et emne (topic)
- **Subscriber** – abonnerer på et emne og mottar meldinger

**Eksempel:**
\`\`\`
Sensor (publisher) → "drivhus/temperatur" → Broker → App (subscriber)
\`\`\`

Sensoren publiserer temperaturen til emnet \`drivhus/temperatur\`. Appen abonnerer på samme emne og mottar oppdateringer automatisk.

**Fordeler med MQTT:**
- Svært lite dataforbruk (perfekt for batteridrevne enheter)
- Pålitelig levering med tre kvalitetsnivåer (QoS 0, 1, 2)
- Støtter tusenvis av enheter samtidig
- Emner (topics) organiseres hierarkisk: \`hus/stue/temperatur\`, \`hus/soverom/fuktighet\``,
    },
    {
      id: 'elektro-data-vg1-3-8-example-1',
      type: 'example',
      title: 'Sende temperatur via MQTT',
      problem: 'Vis hvordan en ESP32 kan lese en temperatursensor og publisere verdien via MQTT.',
      solution: `\`\`\`cpp
#include <WiFi.h>
#include <PubSubClient.h>  // MQTT-bibliotek

const char* ssid = "MittNett";
const char* passord = "hemmelig123";
const char* mqttServer = "broker.hivemq.com";
const int mqttPort = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Koble til WiFi
  WiFi.begin(ssid, passord);
  while (WiFi.status() != WL_CONNECTED) delay(500);

  // Koble til MQTT-broker
  client.setServer(mqttServer, mqttPort);
  while (!client.connected()) {
    client.connect("ESP32_Sensor");
  }
  Serial.println("MQTT tilkoblet!");
}

void loop() {
  int raVerdi = analogRead(34);
  float temp = raVerdi * 0.1;  // Forenklet omregning

  char melding[10];
  dtostrf(temp, 4, 1, melding);
  client.publish("drivhus/temperatur", melding);

  Serial.print("Sendt: ");
  Serial.println(melding);
  delay(5000);  // Send hvert 5. sekund
}
\`\`\`

Programmet publiserer temperaturen til emnet \`drivhus/temperatur\` hvert 5. sekund. Enhver enhet som abonnerer på dette emnet, mottar verdien automatisk.`,
    },
    {
      id: 'elektro-data-vg1-3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'I MQTT-protokollen, hva er rollen til en «broker»?',
        options: [
          { id: 'a', text: 'Den leser av sensorer direkte', correct: false },
          { id: 'b', text: 'Den mottar meldinger og videresender dem til riktige abonnenter', correct: true },
          { id: 'c', text: 'Den lagrer data permanent i en database', correct: false },
          { id: 'd', text: 'Den krypterer all kommunikasjon', correct: false },
        ],
        solution: 'En MQTT-broker er en **meldingsformidler**. Den mottar meldinger fra publishere og videresender dem til alle subscribere som har abonnert på det aktuelle emnet (topic). Brokeren lagrer ikke data permanent – den er bare et mellomledd for sanntidskommunikasjon.',
      },
    },

    // BLOKK 3: Skytilkobling
    {
      id: 'elektro-data-vg1-3-8-text-sky',
      type: 'text',
      title: 'Datainnsamling til sky',
      content: `## Datainnsamling til sky

En skytjeneste lar deg lagre, analysere og visualisere IoT-data. Populære plattformer inkluderer:

- **ThingSpeak** – gratis plattform med grafer og analyser
- **Adafruit IO** – brukervennlig med dashbord
- **Firebase** – Googles plattform med sanntidsdatabase
- **Home Assistant** – åpen kildekode for hjemmeautomasjon

**Typisk IoT-dataflyt:**
\`\`\`
Sensor → ESP32 → WiFi → MQTT broker → Skytjeneste → Dashbord/App
\`\`\`

**Eksempel – sende data til ThingSpeak:**
\`\`\`cpp
#include <WiFi.h>
#include <HTTPClient.h>

String apiKey = "DIN_API_NOEKKEL";

void sendTilThingSpeak(float temperatur) {
  HTTPClient http;
  String url = "http://api.thingspeak.com/update?api_key="
               + apiKey + "&field1=" + String(temperatur);
  http.begin(url);
  int respons = http.GET();
  http.end();
}
\`\`\`

Med ThingSpeak kan du lage grafer og sette opp varsler basert på sensordata – alt via en nettleser.`,
    },
    {
      id: 'elektro-data-vg1-3-8-example-2',
      type: 'example',
      title: 'IoT-system for et drivhus',
      problem: 'Beskriv arkitekturen for et IoT-system som overvåker temperatur og fuktighet i et drivhus.',
      solution: `**Systemarkitektur:**

**1. Sensorlag:**
- ESP32 med DHT22-sensor (temperatur + fuktighet)
- Jordfuktighetssensor for å overvåke vanningsbehov
- Strømforsyning: USB eller solcelle med batteri

**2. Nettverkslag:**
- ESP32 kobler til WiFi i drivhuset
- Data sendes via MQTT til en lokal broker eller direkte til skyen
- Emner: \`drivhus/temperatur\`, \`drivhus/fuktighet\`, \`drivhus/jord\`

**3. Skylag:**
- ThingSpeak lagrer data og lager grafer over tid
- Regler: Hvis temperatur < 5°C, send varsling

**4. Handlingslag:**
- Mobilapp viser sanntidsdata og historikk
- Automatisk varsling ved ekstreme verdier
- Mulighet for å styre vanning og ventilasjon remotely

Hele systemet kan bygges for under 300 kr i komponenter.`,
    },
    {
      id: 'elektro-data-vg1-3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Beskriv de fire lagene i en IoT-arkitektur for et smart klasserom som måler temperatur, CO₂-nivå og støynivå. For hvert lag, forklar hvilke komponenter du ville brukt og hvorfor.',
        hints: ['Tenk på hvilke sensorer som trengs, hvordan data overføres, hvor data lagres, og hva som skjer basert på dataene.'],
        solution: '**1. Sensorlag:** ESP32 med temperatursensor (DHT22), CO₂-sensor (MH-Z19) og mikrofon/lydnivåsensor. ESP32 velges fordi den har innebygd WiFi. **2. Nettverkslag:** ESP32 kobler til skolens WiFi. Data publiseres via MQTT med emner som `klasserom/temp`, `klasserom/co2`, `klasserom/stoey`. **3. Skylag:** Data lagres i ThingSpeak eller lignende. Grafer viser historikk. Regler sjekker grenseverdier. **4. Handlingslag:** Dashboard på en skjerm i klasserommet viser sanntidsdata. Varsling til læreren hvis CO₂ > 1000 ppm (dårlig luftkvalitet). Automatisk styring av ventilasjon.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om IoT – tingenes internett:

- **IoT-arkitektur:** Sensorer → Nettverk → Sky → Handling
- **ESP32/ESP8266:** Mikrokontrollere med innebygd WiFi, programmeres med Arduino IDE
- **MQTT:** Lettvekts publish/subscribe-protokoll for IoT-kommunikasjon
- **Skytjenester:** ThingSpeak, Adafruit IO m.fl. for lagring og visualisering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| IoT | Internet of Things – fysiske enheter koblet til internett |
| ESP32 | Mikrokontroller med innebygd WiFi og Bluetooth |
| MQTT | Lettvekts meldingsprotokoll med publish/subscribe-modell |
| Broker | Server som videresender MQTT-meldinger |
| Topic | Emne (adresse) som meldinger publiseres til og abonneres på |
| Skytjeneste | Nettbasert plattform for lagring og visualisering av data |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-8-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken MQTT-topicstruktur er mest hensiktsmessig for et smarthus med sensorer i flere rom?',
        options: [
          { id: 'a', text: 'sensor1, sensor2, sensor3', correct: false },
          { id: 'b', text: 'hus/rom/sensortype (f.eks. hus/stue/temperatur)', correct: true },
          { id: 'c', text: 'temperatur_stue, temperatur_soverom, fuktighet_stue', correct: false },
          { id: 'd', text: 'data', correct: false },
        ],
        solution: 'Den hierarkiske strukturen `hus/rom/sensortype` er mest hensiktsmessig. MQTT-topics organiseres naturlig som et tre, og denne strukturen lar deg abonnere på ulike nivåer: `hus/#` for alle data, `hus/stue/#` for alt i stuen, eller `hus/+/temperatur` for alle temperaturer i alle rom.',
      },
    },
    {
      id: 'elektro-data-vg1-3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design et komplett IoT-system for en værstasjon som måler temperatur, luftfuktighet og lufttrykk. Beskriv: a) Hvilke sensorer og mikrokontroller du ville brukt, b) Hvordan data overføres og lagres, c) MQTT-topicstrukturen, d) Hva slags visualisering og varsler du ville satt opp.',
        hints: ['BME280 er en populær sensor som måler alle tre verdiene.', 'Tenk på hva som er nyttige grenseverdier for varsler.'],
        solution: 'a) **Komponenter:** ESP32 med BME280-sensor (temperatur, fuktighet, trykk i én modul). Solcelle + batteri for strømforsyning utendørs. b) **Dataoverføring:** ESP32 kobler til WiFi og publiserer via MQTT hvert 5. minutt til en HiveMQ-broker. Data lagres i ThingSpeak. c) **MQTT-topics:** `vaerstasjon/temperatur`, `vaerstasjon/fuktighet`, `vaerstasjon/trykk`, `vaerstasjon/status` (batterinivå). d) **Visualisering:** ThingSpeak-dashbord med grafer for siste 24 timer og 7 dager. Varsler: temperatur < -10°C eller > 35°C, trykk-endring > 5 hPa/time (indikerer værskifte).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'IoT', definition: 'Internet of Things – fysiske enheter koblet til internett for datainnsamling og styring.' },
    { term: 'ESP32', definition: 'Mikrokontroller med innebygd WiFi og Bluetooth, populær for IoT-prosjekter.' },
    { term: 'MQTT', definition: 'Lettvekts meldingsprotokoll basert på publish/subscribe-modell.' },
    { term: 'Broker', definition: 'Server som mottar og videresender MQTT-meldinger mellom enheter.' },
    { term: 'Topic', definition: 'Hierarkisk adresse i MQTT som meldinger publiseres til og abonneres på.' },
    { term: 'Skytjeneste', definition: 'Nettbasert plattform for lagring, analyse og visualisering av IoT-data.' },
  ],
};

// ============================================================================
// Kapittel 3.9: Feilsøking og testing
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3_9: TextbookChapter = {
  id: 'elektro-data-vg1-3-9',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3.9',
  title: 'Feilsøking og testing',
  description: 'Systematisk feilsøking av programmer – syntaksfeil, logiske feil, kjøretidsfeil, print-debugging og testing med assert.',
  estimatedMinutes: 50,
  competenceGoals: [
    'feilsøke og teste programmer systematisk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-9-intro',
      type: 'text',
      content: `## Feilsøking og testing

Alle programmerere lager feil – det er en helt naturlig del av utviklingsprosessen. Forskjellen mellom en nybegynner og en erfaren programmerer er ikke at den erfarne lager færre feil, men at den erfarne er **bedre til å finne og rette dem**.

Det finnes tre hovedtyper feil i programmer:
1. **Syntaksfeil** – brudd på programmeringsspråkets regler
2. **Kjøretidsfeil** – feilen oppstår når programmet kjøres
3. **Logiske feil** – programmet kjører uten feilmeldinger, men gir feil resultat

I dette kapittelet skal du lære:
- Hvordan du skiller mellom de tre feiltypene
- Systematisk feilsøking med print-debugging
- Hvordan du leser og tolker feilmeldinger
- Testing med \`assert\` og edge cases`,
    },

    // BLOKK 1: Feiltyper
    {
      id: 'elektro-data-vg1-3-9-def-1',
      type: 'definition',
      title: 'Tre typer feil',
      content: `**Syntaksfeil (SyntaxError)**
Oppstår når koden bryter reglene i programmeringsspråket. Programmet starter ikke engang.

\`\`\`python
# Manglende kolon etter if
if x > 5
    print("Stor")  # SyntaxError: expected ':'

# Feil innrykk
def beregn():
print("Hei")       # IndentationError: expected an indented block
\`\`\`

**Kjøretidsfeil (RuntimeError)**
Programmet starter, men krasjer underveis.

\`\`\`python
tall = [1, 2, 3]
print(tall[5])      # IndexError: list index out of range

resultat = 10 / 0   # ZeroDivisionError: division by zero

alder = int("hei")  # ValueError: invalid literal for int()
\`\`\`

**Logiske feil**
Programmet kjører uten feilmeldinger, men gir feil resultat. Disse er vanskeligst å finne!

\`\`\`python
# Skal beregne gjennomsnitt, men glemmer parenteser
gjennomsnitt = sum_tall / antall + 1  # Feil: deler bare sum_tall
gjennomsnitt = sum_tall / (antall + 1)  # Riktig: deler på (antall + 1)
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-9-example-1',
      type: 'example',
      title: 'Identifisere feiltyper',
      problem: 'Klassifiser følgende feil som syntaksfeil, kjøretidsfeil eller logisk feil:\n\n1. `print("Hei"` (manglende parentes)\n2. Et program som beregner arealet av en sirkel med `areal = 2 * pi * r` i stedet for `pi * r**2`\n3. `navn = input("Navn: ")` etterfulgt av `print(navn + 10)`',
      solution: `1. **Syntaksfeil** – manglende avsluttende parentes er et brudd på Python-syntaksen. Python vil gi \`SyntaxError: '(' was never closed\` og programmet vil ikke starte.

2. **Logisk feil** – formelen \`2 * pi * r\` er omkretsen, ikke arealet. Programmet kjører uten feilmeldinger, men gir feil svar. Dette er den vanskeligste feiltypen fordi Python ikke kan vite hva du *mente* å skrive.

3. **Kjøretidsfeil** – du kan ikke legge sammen en streng (\`navn\`) og et tall (\`10\`) i Python. Programmet starter og venter på input, men krasjer med \`TypeError\` når det forsøker å utføre addisjonen.`,
    },
    {
      id: 'elektro-data-vg1-3-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-9-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type feil er det når programmet kjører uten feilmeldinger, men gir feil resultat?',
        options: [
          { id: 'a', text: 'Syntaksfeil', correct: false },
          { id: 'b', text: 'Kjøretidsfeil', correct: false },
          { id: 'c', text: 'Logisk feil', correct: true },
          { id: 'd', text: 'Kompileringsfeil', correct: false },
        ],
        solution: 'En **logisk feil** gjør at programmet kjører uten feilmeldinger, men gir feil resultat. Python kan ikke oppdage logiske feil fordi koden er teknisk sett gyldig – den gjør bare ikke det du hadde tenkt. Syntaksfeil stopper programmet før det starter, og kjøretidsfeil krasjer programmet under kjøring.',
      },
    },

    // BLOKK 2: Print-debugging
    {
      id: 'elektro-data-vg1-3-9-text-print',
      type: 'text',
      title: 'Print-debugging',
      content: `## Print-debugging

Den enkleste og mest brukte feilsøkingsteknikken er å legge inn **print-setninger** for å se hva som skjer inne i programmet.

**Strategi:**
1. Identifiser hvor feilen *trolig* oppstår
2. Legg inn \`print()\`-setninger for å vise variabelverdier
3. Kjør programmet og analyser utskriften
4. Flytt/legg til print-setninger for å snevre inn feilen
5. Fjern print-setninger når feilen er funnet

**Eksempel – feilsøke en beregning:**
\`\`\`python
def beregn_karakter(poeng, maks_poeng):
    prosent = poeng / maks_poeng * 100
    print(f"DEBUG: poeng={poeng}, maks={maks_poeng}, prosent={prosent}")

    if prosent >= 90:
        return 6
    elif prosent >= 75:
        return 5
    elif prosent >= 55:
        return 4
    elif prosent >= 40:
        return 3
    elif prosent >= 20:
        return 2
    else:
        return 1

karakter = beregn_karakter(45, 60)
print(f"DEBUG: karakter={karakter}")
\`\`\`

**Tips:** Bruk prefikset \`DEBUG:\` på feilsøkingsutskrifter, slik at de er lette å finne og fjerne etterpå.`,
    },
    {
      id: 'elektro-data-vg1-3-9-example-2',
      type: 'example',
      title: 'Finne en logisk feil med print-debugging',
      problem: 'Følgende program skal finne det største tallet i en liste, men gir feil resultat. Bruk print-debugging til å finne feilen.\n\n```python\ndef finn_storst(tall):\n    storst = 0\n    for t in tall:\n        if t > storst:\n            storst = t\n    return storst\n\nresultat = finn_storst([-3, -1, -7, -2])\nprint(resultat)  # Forventer -1, men får 0\n```',
      solution: `Vi legger inn print-setninger for å se hva som skjer:

\`\`\`python
def finn_storst(tall):
    storst = 0
    print(f"DEBUG: startverdi storst={storst}")
    for t in tall:
        print(f"DEBUG: sjekker {t} > {storst} => {t > storst}")
        if t > storst:
            storst = t
    return storst
\`\`\`

**Utskrift:**
\`\`\`
DEBUG: startverdi storst=0
DEBUG: sjekker -3 > 0 => False
DEBUG: sjekker -1 > 0 => False
DEBUG: sjekker -7 > 0 => False
DEBUG: sjekker -2 > 0 => False
\`\`\`

**Feilen:** Startverdien \`storst = 0\` er større enn alle negative tall! Ingen verdier erstatter den.

**Løsning:** Sett \`storst = tall[0]\` (første element) i stedet for 0:
\`\`\`python
def finn_storst(tall):
    storst = tall[0]  # Bruk første element som startverdi
    for t in tall[1:]:
        if t > storst:
            storst = t
    return storst
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Følgende program skal beregne summen av alle partall i en liste, men gir feil resultat. Finn feilen og forklar den.\n\n```python\ndef sum_partall(tall):\n    total = 0\n    for t in tall:\n        if t % 2 == 1:\n            total += t\n    return total\n\nresultat = sum_partall([1, 2, 3, 4, 5, 6])\nprint(resultat)  # Forventer 12, men får 9\n```',
        hints: ['Hva sjekker `t % 2 == 1`? Er det partall eller oddetall?', 'Partall har rest 0 ved deling på 2.'],
        solution: 'Feilen er i betingelsen: `t % 2 == 1` sjekker om tallet er **oddetall**, ikke partall! For partall er resten ved deling på 2 lik 0. Riktig betingelse er `t % 2 == 0`. Med den feilaktige betingelsen summeres oddetallene 1+3+5=9, ikke partallene 2+4+6=12.',
      },
    },

    // BLOKK 3: Systematisk feilsøking
    {
      id: 'elektro-data-vg1-3-9-def-2',
      type: 'definition',
      title: 'Systematisk feilsøking',
      content: `Erfarne programmerere følger en **systematisk fremgangsmåte** for feilsøking:

**Steg 1: Les feilmeldingen nøye**
Python-feilmeldinger inneholder verdifull informasjon:
\`\`\`
Traceback (most recent call last):
  File "program.py", line 5, in <module>
    resultat = tall[10]
IndexError: list index out of range
\`\`\`
- **Filen og linjenummeret:** \`line 5\` – feilen er på linje 5
- **Feiltypen:** \`IndexError\` – indeksen er utenfor listens rekkevidde
- **Beskrivelsen:** \`list index out of range\` – du prøver å hente et element som ikke finnes

**Steg 2: Isoler feilen**
- Kommenter ut deler av koden for å finne *hvor* feilen oppstår
- Test med enkle, kjente inputverdier
- Reduser problemet til den minste koden som reproduserer feilen

**Steg 3: Forstå feilen**
- Hva *forventet* du at koden skulle gjøre?
- Hva gjør koden *faktisk*?
- Hva er forskjellen?

**Steg 4: Rett feilen og test**
- Gjør én endring om gangen
- Test med flere ulike inputverdier
- Kontroller at rettelsen ikke introduserer nye feil`,
    },
    {
      id: 'elektro-data-vg1-3-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-9-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Du får feilmeldingen:\n```\nTraceback (most recent call last):\n  File "sensor.py", line 12, in <module>\n    temperatur = int(svar)\nValueError: invalid literal for int() with base 10: \'tjueto\'\n```\nHva er mest sannsynlig årsak til feilen?',
        options: [
          { id: 'a', text: 'Variabelen svar er ikke definert', correct: false },
          { id: 'b', text: 'Funksjonen int() kan ikke konvertere teksten "tjueto" til et tall', correct: true },
          { id: 'c', text: 'Filen sensor.py finnes ikke', correct: false },
          { id: 'd', text: 'Linje 12 har feil innrykk', correct: false },
        ],
        solution: 'Feilmeldingen `ValueError: invalid literal for int() with base 10: \'tjueto\'` forteller oss at Python prøver å konvertere tekststrengen "tjueto" til et heltall med `int()`, men dette er ikke mulig fordi "tjueto" ikke er et gyldig tall. Brukeren har skrevet inn tekst i stedet for et tall. Løsning: bruk `try/except` for å håndtere ugyldig input.',
      },
    },

    // BLOKK 4: Testing med assert
    {
      id: 'elektro-data-vg1-3-9-text-testing',
      type: 'text',
      title: 'Testing med assert og edge cases',
      content: `## Testing med assert

\`assert\` er et Python-nøkkelord som sjekker om en betingelse er sann. Hvis betingelsen er usann, krasjer programmet med en \`AssertionError\`.

\`\`\`python
def beregn_areal(lengde, bredde):
    return lengde * bredde

# Tester
assert beregn_areal(5, 3) == 15, "5 × 3 skal gi 15"
assert beregn_areal(0, 10) == 0, "0 × 10 skal gi 0"
assert beregn_areal(2.5, 4) == 10.0, "2.5 × 4 skal gi 10.0"
print("Alle tester bestått!")
\`\`\`

**Edge cases** – grensetilfeller som ofte avslører feil:
- Tom liste eller streng
- Null (0) som input
- Negative tall
- Svært store tall
- Samme verdi for alle input

\`\`\`python
def gjennomsnitt(tall):
    if len(tall) == 0:
        return 0  # Håndter tom liste
    return sum(tall) / len(tall)

# Test med edge cases
assert gjennomsnitt([10]) == 10        # Bare ett element
assert gjennomsnitt([]) == 0           # Tom liste
assert gjennomsnitt([-5, 5]) == 0      # Positive og negative
assert gjennomsnitt([3, 3, 3]) == 3    # Alle like
print("Alle tester bestått!")
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-3-9-example-3',
      type: 'example',
      title: 'Skrive tester for en funksjon',
      problem: 'Skriv tester med `assert` for funksjonen `er_gyldig_alder(alder)` som returnerer `True` hvis alderen er mellom 0 og 150.',
      solution: `\`\`\`python
def er_gyldig_alder(alder):
    return 0 <= alder <= 150

# Vanlige tilfeller
assert er_gyldig_alder(25) == True, "25 er gyldig"
assert er_gyldig_alder(0) == True, "0 er gyldig"
assert er_gyldig_alder(150) == True, "150 er gyldig"

# Ugyldige verdier
assert er_gyldig_alder(-1) == False, "-1 er ugyldig"
assert er_gyldig_alder(151) == False, "151 er ugyldig"
assert er_gyldig_alder(-100) == False, "-100 er ugyldig"

# Edge cases - grenseverdier
assert er_gyldig_alder(1) == True, "1 er gyldig"
assert er_gyldig_alder(149) == True, "149 er gyldig"

print("Alle tester bestått!")
\`\`\`

Vi tester:
- **Vanlige verdier** som vi vet skal gi True eller False
- **Grenseverdier** (0, 1, 149, 150, 151, -1) som er der feil ofte oppstår
- **Ekstremt ugyldige verdier** for å være sikre`,
    },
    {
      id: 'elektro-data-vg1-3-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en funksjon `er_partall(tall)` som returnerer `True` hvis tallet er partall, og `False` ellers. Skriv deretter minst 5 assert-tester som dekker vanlige tilfeller og edge cases.',
        hints: ['Et partall har rest 0 ved deling på 2.', 'Husk å teste med 0, negative tall og oddetall.'],
        solution: '```python\ndef er_partall(tall):\n    return tall % 2 == 0\n\n# Tester\nassert er_partall(4) == True, "4 er partall"\nassert er_partall(7) == False, "7 er oddetall"\nassert er_partall(0) == True, "0 er partall"\nassert er_partall(-6) == True, "-6 er partall"\nassert er_partall(-3) == False, "-3 er oddetall"\nassert er_partall(1000000) == True, "1000000 er partall"\nprint("Alle tester bestått!")\n```',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-9-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært systematisk feilsøking og testing:

- **Syntaksfeil** – brudd på språkets regler, oppdages før programmet starter
- **Kjøretidsfeil** – programmet krasjer under kjøring (IndexError, TypeError, osv.)
- **Logiske feil** – programmet gir feil resultat uten feilmeldinger
- **Print-debugging** – legg inn \`print()\` for å se hva som skjer inne i koden
- **Systematisk feilsøking** – les feilmelding → isoler → forstå → rett → test
- **assert** – sjekk at funksjoner gir riktig resultat med kjente inputverdier
- **Edge cases** – test med grenseverdier som tomme lister, null og negative tall

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Syntaksfeil | Brudd på programmeringsspråkets regler |
| Kjøretidsfeil | Feil som oppstår når programmet kjøres |
| Logisk feil | Programmet gir feil resultat uten feilmeldinger |
| Print-debugging | Bruke print() til å vise variabelverdier under feilsøking |
| assert | Sjekker at en betingelse er sann, krasjer hvis ikke |
| Edge case | Grensetilfelle som kan avsløre feil (tom liste, 0, negative tall) |`,
    },

    // --- Samleoppgave ---
    {
      id: 'elektro-data-vg1-3-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-9-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Følgende program har tre feil – én syntaksfeil, én kjøretidsfeil og én logisk feil. Finn og rett alle tre. Forklar hvilken type feil hver av dem er.\n\n```python\ndef beregn_statistikk(malinger)\n    antall = len(malinger)\n    gjennomsnitt = sum(malinger) / antall\n    avvik = []\n    for i in range(antall + 1):\n        avvik.append(malinger[i] - gjennomsnitt)\n    total_avvik = sum(avvik) / antall\n    return gjennomsnitt, total_avvik\n\nresultat = beregn_statistikk([20, 22, 25, 21, 23])\nprint(f"Gjennomsnitt: {resultat[0]}, Avvik: {resultat[1]}")\n```',
        hints: ['Se nøye på funksjonsdefinisjonen.', 'Hva skjer med `range(antall + 1)` når listen har 5 elementer?', 'Gir `sum(avvik) / antall` gjennomsnittlig absolutt avvik, eller noe annet?'],
        solution: '**Feil 1 – Syntaksfeil:** Manglende kolon etter funksjonsdefinisjonen: `def beregn_statistikk(malinger)` skal være `def beregn_statistikk(malinger):`. **Feil 2 – Kjøretidsfeil:** `range(antall + 1)` gir indekser 0 til 5, men listen har bare indekser 0 til 4. `malinger[5]` gir `IndexError`. Rett til `range(antall)`. **Feil 3 – Logisk feil:** `sum(avvik) / antall` gir alltid 0 fordi positive og negative avvik opphever hverandre. For gjennomsnittlig avvik bør man bruke absoluttverdier: `sum(abs(a) for a in avvik) / antall`.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Syntaksfeil', definition: 'Brudd på programmeringsspråkets regler som hindrer programmet i å starte.' },
    { term: 'Kjøretidsfeil', definition: 'Feil som oppstår under kjøring og får programmet til å krasje.' },
    { term: 'Logisk feil', definition: 'Feil der programmet kjører uten feilmeldinger, men gir feil resultat.' },
    { term: 'Print-debugging', definition: 'Feilsøkingsteknikk der man bruker print() til å vise variabelverdier.' },
    { term: 'assert', definition: 'Python-nøkkelord som sjekker om en betingelse er sann.' },
    { term: 'Edge case', definition: 'Grensetilfelle som ofte avslører feil, f.eks. tom liste, null eller negative tall.' },
  ],
};

// ============================================================================
// Eksportarray
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP3B_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_3_5,
  CHAPTER_ELEKTRO_DATA_VG1_3_7,
  CHAPTER_ELEKTRO_DATA_VG1_3_8,
  CHAPTER_ELEKTRO_DATA_VG1_3_9,
];

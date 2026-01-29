/**
 * Tekstbok kapitler for 1P - Algoritmisk tenking og programmering
 * (Matematikk 1P - Praktisk matematikk VG1)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9.1: HVA ER EN ALGORITME?
// ============================================================================

export const CHAPTER_1P_9_1: TextbookChapter = {
  id: '1p-9-1',
  courseId: '1p',
  chapterNumber: '9.1',
  title: 'Hva er en algoritme?',
  description: 'Lær hva algoritmer er, hvordan de brukes i hverdagen og i matematikk, og hvordan vi kan beskrive dem med flytskjema og pseudokode.',
  estimatedMinutes: 45,
  competenceGoals: [
    'formulere og løyse problem ved hjelp av algoritmisk tenking',
  ],
  content: [
    {
      id: '1p-9-1-intro',
      type: 'text',
      content: `## Algoritmer er overalt

Hver gang du følger en oppskrift for å lage pannekaker, bruker du en algoritme. Når du forklarer noen veien til skolen, beskriver du en algoritme. Når du sorterer en kortstokk fra lavest til høyest, følger du en algoritme.

En **algoritme** er rett og slett en presis, steg-for-steg-beskrivelse av hvordan man løser et problem eller utfører en oppgave. Det som gjør algoritmer spesielle, er at de er så tydelige at hvem som helst (eller en datamaskin) kan følge dem og komme frem til riktig resultat.

I dette kapittelet skal vi se på hva som kjennetegner en god algoritme, og lære ulike måter å beskrive algoritmer på.`,
    },
    {
      id: '1p-9-1-def-algoritme',
      type: 'definition',
      title: 'Algoritme',
      content: `En **algoritme** er en endelig, ordnet sekvens av entydige instruksjoner som løser et bestemt problem eller utfører en bestemt oppgave.

En algoritme har disse egenskapene:
- **Endelig**: Den stopper etter et bestemt antall steg.
- **Entydig**: Hvert steg er klart definert, uten rom for tolkning.
- **Input**: Den kan ta inn data (men trenger ikke).
- **Output**: Den gir et resultat.`,
    },
    {
      id: '1p-9-1-hverdag',
      type: 'text',
      content: `## Algoritmer i hverdagen

Her er noen eksempler på algoritmer vi bruker daglig, uten å tenke over det:

**Oppskrift for kokt egg:**
1. Fyll en kjele med vann.
2. Sett kjelen på platen og kok opp vannet.
3. Legg egget forsiktig i det kokende vannet.
4. Vent i 4 minutter (bløtkokt) eller 8 minutter (hardkokt).
5. Ta egget opp med en skje og kjøl det under kaldt vann.

**Veibeskrivelse:**
1. Gå ut døren og ta til venstre.
2. Gå rett frem i 200 meter.
3. Ta til høyre ved lyskrysset.
4. Bygningen er den tredje på venstre side.

Legg merke til at begge eksemplene har noe til felles: de har en klar rekkefølge, hvert steg er tydelig, og de fører til et bestemt resultat.`,
    },
    {
      id: '1p-9-1-example-divisjon',
      type: 'example',
      title: 'Eksempel 1: Divisjonsalgoritmen',
      problem: `Beskriv en algoritme for å utføre heltallsdivisjon av 47 med 6 (finn hvor mange ganger 6 går opp i 47, og hva resten blir).`,
      solution: `**Algoritme for heltallsdivisjon:**

1. Start med dividenden (47) og divisoren (6).
2. Sett telleren til 0.
3. Så lenge dividenden er større enn eller lik divisoren:
   - Trekk divisoren fra dividenden: $47 - 6 = 41$
   - Øk telleren med 1.
4. Gjenta steg 3:
   - $41 - 6 = 35$, teller = 2
   - $35 - 6 = 29$, teller = 3
   - $29 - 6 = 23$, teller = 4
   - $23 - 6 = 17$, teller = 5
   - $17 - 6 = 11$, teller = 6
   - $11 - 6 = 5$, teller = 7
5. Nå er dividenden (5) mindre enn divisoren (6), så vi stopper.

**Svar:** $47 \\div 6 = 7$ med rest $5$ (fordi $7 \\cdot 6 + 5 = 47$).`,
    },
    {
      id: '1p-9-1-example-gcd',
      type: 'example',
      title: 'Eksempel 2: Euklids algoritme for største felles faktor',
      problem: `Finn største felles faktor (GCD) av 48 og 18 ved hjelp av Euklids algoritme.`,
      solution: `**Euklids algoritme:**
Gjenta følgende: Del det største tallet på det minste. Erstatt det største tallet med resten. Stopp når resten er 0.

1. Del 48 på 18: $48 = 2 \\cdot 18 + 12$ (rest 12)
2. Del 18 på 12: $18 = 1 \\cdot 12 + 6$ (rest 6)
3. Del 12 på 6: $12 = 2 \\cdot 6 + 0$ (rest 0)

Resten er 0, så vi stopper. Det siste tallet vi delte med er **6**.

**Svar:** Største felles faktor av 48 og 18 er $\\text{GCD}(48, 18) = 6$.

Vi kan sjekke: $48 = 6 \\cdot 8$ og $18 = 6 \\cdot 3$, og 8 og 3 har ingen felles faktorer.`,
    },
    {
      id: '1p-9-1-flytskjema',
      type: 'text',
      content: `## Flytskjema

Et **flytskjema** er en visuell fremstilling av en algoritme. Vi bruker ulike symboler:

- **Oval** (avrundet rektangel): Start og stopp
- **Rektangel**: En handling eller beregning
- **Rombe** (diamant): Et valg / en betingelse (ja/nei)
- **Piler**: Viser rekkefølgen

Flytskjema gjør det lett å se strukturen i en algoritme, spesielt når det er valg og gjentakelser involvert.

**Eksempel: Flytskjema for å sjekke om et tall er partall**

\`\`\`
[Start] → [Les inn tallet n] → <Er n delelig med 2?>
                                    |              |
                                   Ja             Nei
                                    |              |
                              [Skriv "Partall"] [Skriv "Oddetall"]
                                    |              |
                                    → → [Stopp] ← ←
\`\`\``,
    },
    {
      id: '1p-9-1-pseudokode',
      type: 'text',
      content: `## Pseudokode

**Pseudokode** er en måte å skrive algoritmer på med vanlig tekst, uten å bruke et bestemt programmeringsspråk. Det er en mellomting mellom naturlig språk og programkode.

Her er pseudokode for å sjekke om et tall er partall:

\`\`\`
LES inn tallet n
HVIS n er delelig med 2
    SKRIV "Tallet er partall"
ELLERS
    SKRIV "Tallet er oddetall"
\`\`\`

Og her er pseudokode for å finne det største tallet i en liste:

\`\`\`
LES inn en liste med tall
SETT størst = første tall i listen
FOR hvert tall i listen:
    HVIS tall > størst
        SETT størst = tall
SKRIV størst
\`\`\`

Pseudokode bruker innrykk for å vise hvilke instruksjoner som hører sammen, akkurat som i ekte programmering.`,
    },
    {
      id: '1p-9-1-def-iterasjon',
      type: 'definition',
      title: 'Iterasjon og betingelser',
      content: `**Iterasjon** (gjentakelse/løkke) betyr å gjenta en gruppe instruksjoner flere ganger. Vi bruker ord som FOR og SÅ LENGE (WHILE).

**Betingelse** (valg) betyr å utføre forskjellige instruksjoner avhengig av om noe er sant eller usant. Vi bruker ord som HVIS ... ELLERS (IF ... ELSE).

Disse to byggesteinene, sammen med sekvens (instruksjoner etter hverandre), er alt vi trenger for å beskrive enhver algoritme.`,
    },
    {
      id: '1p-9-1-example-sum',
      type: 'example',
      title: 'Eksempel 3: Pseudokode for å summere tallene 1 til 100',
      problem: `Skriv pseudokode for å beregne summen $1 + 2 + 3 + \\ldots + 100$.`,
      solution: `**Pseudokode:**

\`\`\`
SETT sum = 0
FOR n = 1 TIL 100:
    SETT sum = sum + n
SKRIV "Summen er: ", sum
\`\`\`

**Gjennomgang:**
- Vi starter med sum = 0.
- Løkken kjører for n = 1, 2, 3, ..., 100.
- For hver verdi av n legger vi n til sum.
- Etter løkken har vi: sum $= 1 + 2 + 3 + \\ldots + 100 = 5050$.

Vi kan sjekke med formelen: $\\frac{100 \\cdot 101}{2} = 5050$ ✓`,
    },
    {
      id: '1p-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-9-1-ex-1',
        number: '9.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke av disse er eksempler på algoritmer?',
        options: [
          { id: 'a', text: 'En oppskrift på boller', isCorrect: true },
          { id: 'b', text: 'Et dikt om våren', isCorrect: false },
          { id: 'c', text: 'Instruksjoner for å montere en hylle', isCorrect: true },
          { id: 'd', text: 'Et maleri av en solnedgang', isCorrect: false },
        ],
        solution: 'En oppskrift og monteringsinstruksjoner er algoritmer fordi de er steg-for-steg-instruksjoner som fører til et bestemt resultat. Et dikt og et maleri er kunstuttrykk uten entydige steg.',
        hints: ['Tenk på definisjonen: en algoritme er en steg-for-steg-prosedyre med et entydig resultat.'],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-9-1-ex-2',
        number: '9.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv en algoritme (i pseudokode) for å avgjøre om et tall er positivt, negativt eller null.`,
        solution: `\`\`\`
LES inn tallet n
HVIS n > 0
    SKRIV "Tallet er positivt"
ELLERS HVIS n < 0
    SKRIV "Tallet er negativt"
ELLERS
    SKRIV "Tallet er null"
\`\`\``,
        hints: ['Du trenger to betingelser: en for å sjekke om tallet er positivt, og en for å sjekke om det er negativt. Hva skjer hvis ingen av dem er sanne?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-9-1-ex-3',
        number: '9.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk Euklids algoritme til å finne største felles faktor (GCD) av 84 og 36. Vis alle stegene.`,
        solution: `1. $84 = 2 \\cdot 36 + 12$ (rest 12)
2. $36 = 3 \\cdot 12 + 0$ (rest 0)

Resten er 0, så GCD(84, 36) = 12.

Sjekk: $84 = 12 \\cdot 7$ og $36 = 12 \\cdot 3$. ✓`,
        answer: 12,
        hints: ['Del det største tallet på det minste. Erstatt det største tallet med resten. Gjenta til resten er 0.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-9-1-tip',
      type: 'tip',
      title: 'Fra algoritme til program',
      content: `Når du har skrevet en algoritme i pseudokode, er det korte veien til å gjøre den om til et dataprogram. Pseudokode ligner på ekte programkode, men bruker vanlig norsk i stedet for engelske nøkkelord.

I neste kapittel skal vi lære å skrive algoritmer i programmeringsspråket Python, som er et av de enkleste språkene å komme i gang med.`,
    },
    {
      id: '1p-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-9-1-ex-4',
        number: '9.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv pseudokode for en algoritme som finner det minste tallet i en liste med fem tall. Bruk en løkke.`,
        solution: `\`\`\`
LES inn tallene t1, t2, t3, t4, t5
SETT minst = t1
FOR hvert tall t i [t2, t3, t4, t5]:
    HVIS t < minst
        SETT minst = t
SKRIV "Det minste tallet er: ", minst
\`\`\`

Eksempel: For tallene 7, 3, 9, 1, 5 gir algoritmen svaret 1.`,
        hints: ['Start med å anta at det første tallet er det minste. Gå gjennom resten og oppdater hvis du finner noe mindre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-9-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- En **algoritme** er en steg-for-steg-prosedyre som løser et problem.
- Algoritmer finnes overalt i hverdagen: oppskrifter, veibeskrivelser, spilleregler.
- Matematiske algoritmer inkluderer divisjonsalgoritmen og Euklids algoritme.
- Vi kan beskrive algoritmer med **flytskjema** (visuelt) eller **pseudokode** (tekst).
- De tre grunnleggende byggesteinene er: **sekvens**, **betingelse** (valg) og **iterasjon** (gjentakelse).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: PROGRAMMERING MED PYTHON
// ============================================================================

export const CHAPTER_1P_9_2: TextbookChapter = {
  id: '1p-9-2',
  courseId: '1p',
  chapterNumber: '9.2',
  title: 'Programmering med Python',
  description: 'Lær grunnleggende programmering i Python: variabler, datatyper, betingelser, løkker og funksjoner, med praktiske eksempler fra matematikken.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke programmering til å utforske matematiske samanhengar',
  ],
  content: [
    {
      id: '1p-9-2-intro',
      type: 'text',
      content: `## Hvorfor Python?

Python er et programmeringsspråk som er spesielt godt egnet for nybegynnere. Det har en enkel syntaks som ligner på vanlig engelsk, og det er kraftig nok til å brukes av forskere, ingeniører og dataanalytikere over hele verden.

I matematikk bruker vi Python fordi det er enkelt å:
- Gjøre beregninger raskt og nøyaktig
- Utforske mønstre og sammenhenger
- Tegne grafer og visualisere data
- Simulere tilfeldige forsøk

For å komme i gang trenger du bare en nettleser. Du kan bruke gratistjenester som **Trinket** (trinket.io) eller **replit.com** til å skrive og kjøre Python-kode uten å installere noe.`,
    },
    {
      id: '1p-9-2-variabler',
      type: 'text',
      content: `## Variabler og datatyper

En **variabel** er et navn som peker på en verdi. Tenk på det som en merkelapp på en boks der du oppbevarer noe.

\`\`\`python
alder = 16
navn = "Ola"
hoyde = 1.75
er_elev = True
\`\`\`

Python har flere **datatyper**:

| Datatype | Beskrivelse | Eksempel |
|----------|-------------|----------|
| \`int\` | Heltall | \`42\`, \`-7\`, \`0\` |
| \`float\` | Desimaltall | \`3.14\`, \`-0.5\` |
| \`str\` | Tekst (streng) | \`"Hei"\`, \`'Verden'\` |
| \`bool\` | Sannhetsverdi | \`True\`, \`False\` |

Merk: I Python bruker vi punktum som desimalskilletegn, ikke komma (altså \`3.14\` i stedet for \`3,14\`).`,
    },
    {
      id: '1p-9-2-def-variabel',
      type: 'definition',
      title: 'Variabel',
      content: `En **variabel** er et navn som refererer til en verdi lagret i datamaskinens minne.

Vi oppretter en variabel med tilordning (\`=\`):

\`\`\`python
pris = 299
\`\`\`

Variabelnavnet (\`pris\`) er til venstre, verdien (\`299\`) er til høyre. Vi kan endre verdien senere:

\`\`\`python
pris = 349
\`\`\``,
    },
    {
      id: '1p-9-2-io',
      type: 'text',
      content: `## Input og output

For å skrive ut noe til skjermen bruker vi \`print()\`. For å lese inn noe fra brukeren bruker vi \`input()\`.

\`\`\`python
# Skrive ut tekst
print("Hei, verden!")

# Skrive ut en variabel
resultat = 7 + 3
print(resultat)          # Skriver ut: 10
print("Svaret er", resultat)  # Skriver ut: Svaret er 10

# Lese inn fra brukeren
navn = input("Hva heter du? ")
print("Hei,", navn)
\`\`\`

**Viktig:** \`input()\` gir alltid tekst tilbake. Hvis du vil bruke det som et tall, må du konvertere:

\`\`\`python
tekst = input("Skriv inn et tall: ")
tall = int(tekst)       # Gjør om til heltall
# eller
tall = float(tekst)     # Gjør om til desimaltall
\`\`\``,
    },
    {
      id: '1p-9-2-regneoperasjoner',
      type: 'text',
      content: `## Regneoperasjoner i Python

Python kan brukes som en kraftig kalkulator. Her er de viktigste operatorene:

| Operator | Betydning | Eksempel | Resultat |
|----------|-----------|----------|----------|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`10 - 4\` | \`6\` |
| \`*\` | Multiplikasjon | \`5 * 3\` | \`15\` |
| \`/\` | Divisjon | \`17 / 4\` | \`4.25\` |
| \`**\` | Potens | \`2 ** 5\` | \`32\` |
| \`//\` | Heltallsdivisjon | \`17 // 4\` | \`4\` |
| \`%\` | Rest (modulo) | \`17 % 4\` | \`1\` |

\`\`\`python
# Eksempler
print(3 + 4)       # 7
print(2 ** 10)     # 1024
print(17 // 5)     # 3 (heltallsdivisjon)
print(17 % 5)      # 2 (rest: 17 = 3*5 + 2)
print(3.14 * 5**2) # 78.5 (areal av sirkel med radius 5)
\`\`\``,
    },
    {
      id: '1p-9-2-example-temp',
      type: 'example',
      title: 'Eksempel 1: Temperaturomregning',
      problem: `Skriv et Python-program som regner om fra Celsius til Fahrenheit. Formelen er: $F = \\frac{9}{5} \\cdot C + 32$.`,
      solution: `\`\`\`python
celsius = float(input("Skriv inn temperatur i Celsius: "))
fahrenheit = (9/5) * celsius + 32
print(celsius, "grader Celsius er", fahrenheit, "grader Fahrenheit")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Skriv inn temperatur i Celsius: 20
20.0 grader Celsius er 68.0 grader Fahrenheit
\`\`\`

Programmet leser inn temperaturen fra brukeren, gjør om til desimaltall med \`float()\`, regner ut Fahrenheit med formelen, og skriver ut svaret.`,
    },
    {
      id: '1p-9-2-if',
      type: 'text',
      content: `## If-setninger (betingelser)

En **if-setning** lar programmet ta valg. Den sjekker om en betingelse er sann, og utfører kode basert på resultatet.

\`\`\`python
alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig.")
else:
    print("Du er ikke myndig ennå.")
\`\`\`

Vi kan også ha flere betingelser med \`elif\` (forkortelse for "else if"):

\`\`\`python
poeng = int(input("Hvor mange poeng fikk du? "))

if poeng >= 90:
    print("Karakter: 6")
elif poeng >= 75:
    print("Karakter: 5")
elif poeng >= 55:
    print("Karakter: 4")
elif poeng >= 40:
    print("Karakter: 3")
elif poeng >= 25:
    print("Karakter: 2")
else:
    print("Karakter: 1")
\`\`\`

**Sammenligningsoperatorer:**
- \`==\` er lik
- \`!=\` er ikke lik
- \`>\` større enn, \`<\` mindre enn
- \`>=\` større enn eller lik, \`<=\` mindre enn eller lik`,
    },
    {
      id: '1p-9-2-warning',
      type: 'warning',
      title: 'Innrykk er viktig i Python!',
      content: `I Python bruker vi **innrykk** (4 mellomrom eller 1 tabulator) for å vise hvilke linjer som hører til en if-setning, løkke eller funksjon. Feil innrykk gir feilmelding!

**Riktig:**
\`\`\`python
if alder >= 18:
    print("Myndig")    # 4 mellomrom innrykk
\`\`\`

**Feil:**
\`\`\`python
if alder >= 18:
print("Myndig")        # Mangler innrykk - gir feil!
\`\`\``,
    },
    {
      id: '1p-9-2-lokker',
      type: 'text',
      content: `## Løkker (gjentakelse)

Løkker lar oss gjenta kode mange ganger uten å skrive den om igjen.

### For-løkke
Brukes når vi vet hvor mange ganger vi vil gjenta:

\`\`\`python
# Skriv ut tallene 1 til 5
for i in range(1, 6):
    print(i)
\`\`\`

\`range(1, 6)\` gir tallene 1, 2, 3, 4, 5 (merk: 6 er ikke inkludert).

\`\`\`python
# Beregn summen 1 + 2 + 3 + ... + 100
total = 0
for tall in range(1, 101):
    total = total + tall
print("Summen er", total)   # Skriver ut: Summen er 5050
\`\`\`

### While-løkke
Brukes når vi vil gjenta så lenge en betingelse er sann:

\`\`\`python
# Tell ned fra 10
n = 10
while n > 0:
    print(n)
    n = n - 1
print("Start!")
\`\`\``,
    },
    {
      id: '1p-9-2-example-prosent',
      type: 'example',
      title: 'Eksempel 2: Prosentregning',
      problem: `Skriv et Python-program som beregner vekstfaktor og ny pris etter en prosentvis endring.`,
      solution: `\`\`\`python
pris = float(input("Oppgi opprinnelig pris: "))
endring = float(input("Oppgi prosentvis endring (f.eks. 15 for økning, -20 for nedgang): "))

vekstfaktor = 1 + endring / 100
ny_pris = pris * vekstfaktor

print("Vekstfaktor:", vekstfaktor)
print("Ny pris:", round(ny_pris, 2), "kr")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Oppgi opprinnelig pris: 500
Oppgi prosentvis endring (f.eks. 15 for økning, -20 for nedgang): -25
Vekstfaktor: 0.75
Ny pris: 375.0 kr
\`\`\`

Funksjonen \`round(ny_pris, 2)\` runder av til 2 desimaler.`,
    },
    {
      id: '1p-9-2-funksjoner',
      type: 'text',
      content: `## Funksjoner

En **funksjon** er en navngitt blokk med kode som utfører en bestemt oppgave. Vi kan bruke den igjen og igjen.

\`\`\`python
def hils(navn):
    print("Hei,", navn, "!")

hils("Sara")     # Skriver ut: Hei, Sara !
hils("Erik")     # Skriver ut: Hei, Erik !
\`\`\`

Funksjoner kan også **returnere** en verdi:

\`\`\`python
def areal_rektangel(lengde, bredde):
    return lengde * bredde

a = areal_rektangel(5, 3)
print("Arealet er", a)    # Skriver ut: Arealet er 15
\`\`\`

Funksjoner gjør koden ryddigere og enklere å gjenbruke. Tenk på en funksjon som en liten maskin: du putter inn noe (argumenter), maskinen gjør sitt, og du får noe tilbake (returverdi).`,
    },
    {
      id: '1p-9-2-example-gjennomsnitt',
      type: 'example',
      title: 'Eksempel 3: Beregne gjennomsnitt',
      problem: `Skriv en Python-funksjon som beregner gjennomsnittet av en liste med tall.`,
      solution: `\`\`\`python
def gjennomsnitt(talliste):
    total = 0
    for tall in talliste:
        total = total + tall
    return total / len(talliste)

karakterer = [4, 5, 3, 6, 5, 4]
snitt = gjennomsnitt(karakterer)
print("Gjennomsnittet er", round(snitt, 2))
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Gjennomsnittet er 4.5
\`\`\`

Her bruker vi:
- \`len(talliste)\` for å finne antall elementer i listen
- En for-løkke for å summere alle tallene
- \`round()\` for å avrunde svaret`,
    },
    {
      id: '1p-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-9-2-ex-1',
        number: '9.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skrives ut av følgende Python-kode?',
        subTasks: [
          {
            label: 'a',
            task: '`print(3 + 4 * 2)`',
            solution: '`11` (multiplikasjon utføres før addisjon)',
            answer: 11,
            multipleChoiceOptions: ['11', '14', '10', '24'],
          },
          {
            label: 'b',
            task: '`print(2 ** 4)`',
            solution: '`16` (2 opphøyd i 4)',
            answer: 16,
            multipleChoiceOptions: ['16', '8', '6', '24'],
          },
          {
            label: 'c',
            task: '`print(15 // 4)`',
            solution: '`3` (heltallsdivisjon: 15 delt på 4 er 3 med rest)',
            answer: 3,
            multipleChoiceOptions: ['3', '3.75', '4', '12'],
          },
          {
            label: 'd',
            task: '`print(15 % 4)`',
            solution: '`3` (rest: 15 = 3*4 + 3)',
            answer: 3,
            multipleChoiceOptions: ['3', '0', '4', '1'],
          },
        ],
        solution: 'a) 11  b) 16  c) 3  d) 3',
        hints: ['Husk at Python følger vanlige regneregler (ganging før pluss). `**` er potens, `//` er heltallsdivisjon, og `%` er rest.'],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-9-2-ex-2',
        number: '9.6',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv et Python-program som ber brukeren om to tall og skriver ut summen, differansen, produktet og kvotienten.`,
        solution: `\`\`\`python
a = float(input("Skriv inn første tall: "))
b = float(input("Skriv inn andre tall: "))

print("Sum:", a + b)
print("Differanse:", a - b)
print("Produkt:", a * b)
if b != 0:
    print("Kvotient:", a / b)
else:
    print("Kan ikke dele på null!")
\`\`\``,
        hints: ['Bruk float(input(...)) for å lese inn desimaltall. Husk å sjekke at du ikke deler på null!'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-9-2-ex-3',
        number: '9.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et Python-program som ber brukeren om en pris og en rabattprosent, og beregner ny pris etter rabatten. Bruk en funksjon.`,
        solution: `\`\`\`python
def beregn_rabatt(pris, rabatt_prosent):
    vekstfaktor = 1 - rabatt_prosent / 100
    return pris * vekstfaktor

pris = float(input("Oppgi prisen: "))
rabatt = float(input("Oppgi rabattprosent: "))
ny_pris = beregn_rabatt(pris, rabatt)
print("Ny pris etter", rabatt, "% rabatt:", round(ny_pris, 2), "kr")
\`\`\``,
        hints: ['Lag en funksjon med to parametre: pris og rabatt_prosent. Vekstfaktor ved nedgang er 1 - p/100.'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-9-2-ex-4',
        number: '9.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et Python-program som skriver ut gangetabellen for et tall brukeren velger (fra 1 til 10). For eksempel, hvis brukeren skriver inn 7, skal programmet skrive ut: 7 * 1 = 7, 7 * 2 = 14, osv.`,
        solution: `\`\`\`python
tall = int(input("Hvilken gangetabell vil du se? "))

for i in range(1, 11):
    print(tall, "*", i, "=", tall * i)
\`\`\`

**Eksempel på kjøring (tall = 7):**
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
\`\`\``,
        hints: ['Bruk en for-løkke med range(1, 11) for å gå gjennom tallene 1 til 10.'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-2-tip',
      type: 'tip',
      title: 'Vanlige feil for nybegynnere',
      content: `- **Glemt kolon (:)** etter \`if\`, \`for\`, \`while\`, \`def\` — Python krever kolon før innrykket blokk.
- **Feil innrykk** — bruk alltid 4 mellomrom (eller 1 tab) konsekvent.
- **Bruk av \`=\` i stedet for \`==\`** — enkelt likhetstegn tilordner en verdi, dobbelt sjekker likhet.
- **Glemmer \`int()\` eller \`float()\`** — \`input()\` gir alltid tekst, så du må konvertere til tall.
- **Variabelnavn med mellomrom** — bruk understrek i stedet: \`min_variabel\` (ikke \`min variabel\`).`,
    },
    {
      id: '1p-9-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- **Python** er et enkelt og kraftig programmeringsspråk, godt egnet for matematikk.
- **Variabler** lagrer verdier: \`x = 5\`.
- **Datatyper**: \`int\` (heltall), \`float\` (desimaltall), \`str\` (tekst), \`bool\` (sant/usant).
- **Input/output**: \`input()\` leser inn, \`print()\` skriver ut.
- **Regneoperasjoner**: \`+\`, \`-\`, \`*\`, \`/\`, \`**\`, \`//\`, \`%\`.
- **If-setninger**: tar valg basert på betingelser.
- **Løkker**: \`for\` (bestemt antall) og \`while\` (så lenge betingelsen er sann).
- **Funksjoner**: navngitte blokker med kode, definert med \`def\`.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3: MATEMATIKK MED PROGRAMMERING
// ============================================================================

export const CHAPTER_1P_9_3: TextbookChapter = {
  id: '1p-9-3',
  courseId: '1p',
  chapterNumber: '9.3',
  title: 'Matematikk med programmering',
  description: 'Bruk Python til å utforske renter og sparing, simulere tilfeldige forsøk, løse likninger og analysere statistikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke programmering til å utforske matematiske samanhengar',
    'bruke digitale verktøy i utforsking og problemløysing',
  ],
  content: [
    {
      id: '1p-9-3-intro',
      type: 'text',
      content: `## Programmering som verktøy i matematikk

I de to forrige kapitlene lærte vi hva algoritmer er, og hvordan vi skriver programmer i Python. Nå skal vi bruke disse ferdighetene til å løse ekte matematiske problemer.

Datamaskinen er fantastisk til oppgaver som krever mange beregninger eller gjentakelser. Der vi mennesker fort blir slitne av å gjenta den samme utregningen 50 ganger, kan en datamaskin gjøre det på et brøkdels sekund.

I dette kapittelet skal vi se på:
- Beregne renter og sparing over tid
- Simulere tilfeldige forsøk (terningkast)
- Finne nullpunkter til funksjoner
- Beregne statistiske mål med programmer`,
    },
    {
      id: '1p-9-3-renter',
      type: 'text',
      content: `## Beregne renter med løkker

Når du setter penger i banken, får du renter. Med **rentesrente** tjener du renter på rentene. Vi kan bruke vekstfaktor og en løkke for å beregne hvordan en sparesum vokser over tid.

Formelen for rentesrente er:

$$K_n = K_0 \\cdot \\left(1 + \\frac{r}{100}\\right)^n$$

der $K_0$ er startbeløpet, $r$ er rentesatsen i prosent, og $n$ er antall år.

Men med et program kan vi beregne dette steg for steg, og se hva som skjer hvert år:

\`\`\`python
startbelop = 10000
rente = 3.5        # 3,5 % rente per år
antall_ar = 10

belop = startbelop
for ar in range(1, antall_ar + 1):
    rente_dette_ar = belop * rente / 100
    belop = belop + rente_dette_ar
    print("Etter", ar, "år:", round(belop, 2), "kr")

print("Totalvekst:", round(belop - startbelop, 2), "kr")
\`\`\``,
    },
    {
      id: '1p-9-3-example-sparing',
      type: 'example',
      title: 'Eksempel 1: Sparing over 20 år',
      problem: `Du setter 5 000 kr inn i en sparekonto med 4 % årlig rente. Skriv et program som viser beløpet etter hvert år i 20 år.`,
      solution: `\`\`\`python
belop = 5000
rente = 4       # prosent

for ar in range(1, 21):
    belop = belop * (1 + rente/100)
    print("År", ar, ":", round(belop, 2), "kr")

print()
print("Etter 20 år har du", round(belop, 2), "kr")
print("Du startet med 5000 kr, så du har tjent", round(belop - 5000, 2), "kr i renter")
\`\`\`

**Utvalgte linjer fra kjøringen:**
\`\`\`
År 1 : 5200.0 kr
År 5 : 6083.26 kr
År 10 : 7401.22 kr
År 15 : 9004.73 kr
År 20 : 10955.62 kr

Etter 20 år har du 10955.62 kr
Du startet med 5000 kr, så du har tjent 5955.62 kr i renter
\`\`\`

Legg merke til at beløpet mer enn dobles. Rentesrente-effekten gjør at veksten akselererer over tid!`,
    },
    {
      id: '1p-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-9-3-ex-1',
        number: '9.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som sammenligner to spareplaner over 15 år:
- Plan A: Du setter inn 20 000 kr med 3 % rente.
- Plan B: Du setter inn 15 000 kr med 5 % rente.
Hvilken plan gir mest penger etter 15 år?`,
        solution: `\`\`\`python
belop_a = 20000
belop_b = 15000

for ar in range(1, 16):
    belop_a = belop_a * 1.03
    belop_b = belop_b * 1.05

print("Plan A etter 15 år:", round(belop_a, 2), "kr")
print("Plan B etter 15 år:", round(belop_b, 2), "kr")

if belop_a > belop_b:
    print("Plan A gir mest penger.")
else:
    print("Plan B gir mest penger.")
\`\`\`

Resultat: Plan A gir ca. 31 159 kr, Plan B gir ca. 31 184 kr. Plan B er (så vidt) best tross lavere startbeløp, fordi den høyere renten over lang tid kompenserer for forskjellen i startkapital.`,
        hints: ['Bruk vekstfaktor 1.03 for plan A og 1.05 for plan B i en for-løkke.'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-3-grafer',
      type: 'text',
      content: `## Tegne grafer med programmering

Et av de kraftigste verktøyene i Python er muligheten til å tegne grafer. Vi bruker et tilleggsbibliotek som heter **matplotlib**.

Her er et program som tegner grafen til funksjonen $f(x) = x^2 - 4$:

\`\`\`python
import matplotlib.pyplot as plt

# Lag en liste med x-verdier
x_verdier = []
y_verdier = []

x = -5
while x <= 5:
    x_verdier.append(x)
    y_verdier.append(x**2 - 4)
    x = x + 0.1

# Tegn grafen
plt.plot(x_verdier, y_verdier)
plt.axhline(y=0, color='black', linewidth=0.5)
plt.axvline(x=0, color='black', linewidth=0.5)
plt.grid(True)
plt.title("Grafen til f(x) = x^2 - 4")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.show()
\`\`\`

Prinsippet er enkelt: vi regner ut $f(x)$ for mange x-verdier og lar Python tegne punktene som en sammenhengende kurve. Jo tettere x-verdiene ligger, desto jevnere blir kurven.`,
    },
    {
      id: '1p-9-3-simulering',
      type: 'text',
      content: `## Simulering: Terningkast

Med programmering kan vi simulere tilfeldige forsøk tusenvis av ganger og se om resultatene samsvarer med det teorien sier.

Sannsynligheten for å kaste en sekser med en vanlig terning er $\\frac{1}{6} \\approx 0{,}167 = 16{,}7\\%$.

La oss sjekke dette med et program:

\`\`\`python
import random

antall_kast = 10000
antall_seksere = 0

for i in range(antall_kast):
    terning = random.randint(1, 6)
    if terning == 6:
        antall_seksere = antall_seksere + 1

relativ_frekvens = antall_seksere / antall_kast
print("Antall kast:", antall_kast)
print("Antall seksere:", antall_seksere)
print("Relativ frekvens:", round(relativ_frekvens, 4))
print("Teoretisk sannsynlighet:", round(1/6, 4))
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Antall kast: 10000
Antall seksere: 1672
Relativ frekvens: 0.1672
Teoretisk sannsynlighet: 0.1667
\`\`\`

Jo flere kast vi simulerer, desto nærmere kommer den relative frekvensen den teoretiske sannsynligheten. Dette kalles **de store talls lov**.`,
    },
    {
      id: '1p-9-3-def-simulering',
      type: 'definition',
      title: 'Simulering',
      content: `En **simulering** er et eksperiment utført av en datamaskin som etterligner en virkelig situasjon. I stedet for å kaste en terning 10 000 ganger for hånd, lar vi datamaskinen gjøre det.

\`random.randint(1, 6)\` gir et tilfeldig heltall mellom 1 og 6, akkurat som å kaste en terning.

**Relativ frekvens** er andelen ganger en hendelse skjer:
$$\\text{Relativ frekvens} = \\frac{\\text{antall ganger hendelsen skjer}}{\\text{totalt antall forsøk}}$$`,
    },
    {
      id: '1p-9-3-example-tosimulering',
      type: 'example',
      title: 'Eksempel 2: Simulere to terninger',
      problem: `Skriv et program som simulerer kast med to terninger 10 000 ganger og finner hvor ofte summen blir 7.`,
      solution: `\`\`\`python
import random

antall_kast = 10000
antall_sju = 0

for i in range(antall_kast):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    if terning1 + terning2 == 7:
        antall_sju = antall_sju + 1

relativ_frekvens = antall_sju / antall_kast
print("Relativ frekvens for sum = 7:", round(relativ_frekvens, 4))
print("Teoretisk sannsynlighet:", round(6/36, 4))
\`\`\`

**Forklaring:**
Det finnes 6 gunstige utfall som gir sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Totalt er det $6 \\times 6 = 36$ mulige utfall. Teoretisk sannsynlighet: $\\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$.

Simuleringen vil gi et resultat nær 0,1667.`,
    },
    {
      id: '1p-9-3-bruteforce',
      type: 'text',
      content: `## Brute-force: Løse likninger ved å prøve mange verdier

Noen ganger kan vi løse likninger ved å la datamaskinen prøve mange verdier og se hvilken som passer best. Denne metoden kalles **brute-force** (rå kraft).

La oss si vi vil løse likningen $3x + 7 = 22$. Vi vet at svaret er $x = 5$, men datamaskinen kan finne det ved å prøve:

\`\`\`python
for x in range(-100, 101):
    if 3 * x + 7 == 22:
        print("Løsning: x =", x)
\`\`\`

For likninger med desimaltall kan vi lete etter verdien der uttrykket er nærmest null:

\`\`\`python
# Løs 2.5*x - 8.3 = 0
best_x = -100
minste_avvik = abs(2.5 * (-100) - 8.3)

x = -100
while x <= 100:
    avvik = abs(2.5 * x - 8.3)
    if avvik < minste_avvik:
        minste_avvik = avvik
        best_x = x
    x = x + 0.01

print("Tilnærmet løsning: x =", round(best_x, 2))
\`\`\`

Denne metoden er ikke den mest elegante, men den fungerer for mange typer likninger!`,
    },
    {
      id: '1p-9-3-halvering',
      type: 'text',
      content: `## Halveringsmetoden (biseksjonsmetoden)

Halveringsmetoden er en smartere måte å finne nullpunkter på. I stedet for å prøve alle verdier, halverer vi søkeområdet i hvert steg.

**Prinsippet:** Hvis $f(a)$ og $f(b)$ har ulikt fortegn, vet vi at det finnes et nullpunkt mellom $a$ og $b$. Vi sjekker midtpunktet $m = \\frac{a+b}{2}$. Hvis $f(m)$ har samme fortegn som $f(a)$, ligger nullpunktet mellom $m$ og $b$. Ellers ligger det mellom $a$ og $m$.

\`\`\`python
def f(x):
    return x**2 - 7    # Vi leter etter x der x^2 = 7

a = 2     # f(2) = 4 - 7 = -3 (negativ)
b = 3     # f(3) = 9 - 7 = 2  (positiv)

for i in range(50):     # 50 halveringer gir ekstremt god nøyaktighet
    m = (a + b) / 2
    if f(m) * f(a) > 0:
        a = m           # Nullpunktet er mellom m og b
    else:
        b = m           # Nullpunktet er mellom a og m

print("Nullpunkt: x =", round(m, 10))
print("Sjekk: f(x) =", round(f(m), 15))
\`\`\`

**Resultat:** $x \\approx 2{,}6457513111$ (som er $\\sqrt{7}$!)`,
    },
    {
      id: '1p-9-3-example-nullpunkt',
      type: 'example',
      title: 'Eksempel 3: Finne nullpunkter med halveringsmetoden',
      problem: `Bruk halveringsmetoden til å finne nullpunktet til $f(x) = x^3 - 2x - 5$ i intervallet $[1, 3]$.`,
      solution: `Vi sjekker først fortegnene: $f(1) = 1 - 2 - 5 = -6$ (negativ) og $f(3) = 27 - 6 - 5 = 16$ (positiv). Siden fortegnene er ulike, finnes det et nullpunkt i intervallet.

\`\`\`python
def f(x):
    return x**3 - 2*x - 5

a = 1
b = 3

for i in range(40):
    m = (a + b) / 2
    if f(m) * f(a) > 0:
        a = m
    else:
        b = m

print("Nullpunkt: x =", round(m, 6))
print("Sjekk: f(x) =", round(f(m), 10))
\`\`\`

**Resultat:**
\`\`\`
Nullpunkt: x = 2.094552
Sjekk: f(x) = -0.0000000001
\`\`\`

Nullpunktet er $x \\approx 2{,}0946$. Vi kan verifisere: $2{,}0946^3 - 2 \\cdot 2{,}0946 - 5 \\approx 0$ ✓`,
    },
    {
      id: '1p-9-3-statistikk',
      type: 'text',
      content: `## Statistikk med programmering

Python er perfekt for å beregne statistiske mål fra datasett. Her er et program som beregner gjennomsnitt, median og variasjonsbredde:

\`\`\`python
def gjennomsnitt(data):
    return sum(data) / len(data)

def median(data):
    sortert = sorted(data)
    n = len(sortert)
    if n % 2 == 1:
        return sortert[n // 2]         # Odde antall: midterste verdi
    else:
        midt1 = sortert[n // 2 - 1]
        midt2 = sortert[n // 2]
        return (midt1 + midt2) / 2     # Par antall: snitt av de to midterste

def variasjonsbredde(data):
    return max(data) - min(data)

# Testresultater fra en prøve
resultater = [78, 85, 62, 91, 74, 88, 67, 95, 73, 80]

print("Gjennomsnitt:", gjennomsnitt(resultater))
print("Median:", median(resultater))
print("Variasjonsbredde:", variasjonsbredde(resultater))
\`\`\`

**Resultat:**
\`\`\`
Gjennomsnitt: 79.3
Median: 79.0
Variasjonsbredde: 33
\`\`\``,
    },
    {
      id: '1p-9-3-example-automat',
      type: 'example',
      title: 'Eksempel 4: Automatisere beregninger fra hverdagen',
      problem: `Skriv et program som beregner den totale strømregningen for en husstand. Programmet skal ta inn antall kilowattimer (kWh) brukt, pris per kWh (i kroner), nettleie per måned og merverdiavgift (25 %).`,
      solution: `\`\`\`python
def beregn_stromregning(kwh, pris_per_kwh, nettleie):
    stromkostnad = kwh * pris_per_kwh
    sum_uten_mva = stromkostnad + nettleie
    mva = sum_uten_mva * 0.25
    total = sum_uten_mva + mva
    return stromkostnad, nettleie, mva, total

kwh = float(input("Antall kWh brukt denne måneden: "))
pris = float(input("Pris per kWh (kr): "))
nettleie = float(input("Nettleie per måned (kr): "))

strom, nett, mva, total = beregn_stromregning(kwh, pris, nettleie)

print()
print("=== Strømregning ===")
print("Strømforbruk:", kwh, "kWh x", pris, "kr =", round(strom, 2), "kr")
print("Nettleie:", round(nett, 2), "kr")
print("MVA (25 %):", round(mva, 2), "kr")
print("-------------------------")
print("TOTAL:", round(total, 2), "kr")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Antall kWh brukt denne måneden: 850
Pris per kWh (kr): 1.20
Nettleie per måned (kr): 350

=== Strømregning ===
Strømforbruk: 850.0 kWh x 1.2 kr = 1020.0 kr
Nettleie: 350.0 kr
MVA (25 %): 342.5 kr
-------------------------
TOTAL: 1712.5 kr
\`\`\``,
    },
    {
      id: '1p-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-9-3-ex-2',
        number: '9.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et program som simulerer 10 000 terningkast og teller opp hvor mange ganger hvert øyetall (1 til 6) dukker opp. Skriv ut den relative frekvensen for hvert øyetall.`,
        solution: `\`\`\`python
import random

antall_kast = 10000
teller = [0, 0, 0, 0, 0, 0]   # teller[0] for øyetall 1, osv.

for i in range(antall_kast):
    resultat = random.randint(1, 6)
    teller[resultat - 1] = teller[resultat - 1] + 1

print("Øyetall | Antall | Relativ frekvens")
for oye in range(1, 7):
    frekvens = teller[oye - 1] / antall_kast
    print(oye, "       |", teller[oye - 1], " |", round(frekvens, 4))
\`\`\`

Alle relative frekvenser bør ligge nær $\\frac{1}{6} \\approx 0{,}1667$.`,
        hints: ['Bruk en liste med 6 elementer for å telle hvert øyetall. Husk at indeksene i Python starter på 0.'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-9-3-ex-3',
        number: '9.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk halveringsmetoden til å finne $\\sqrt{20}$ (altså løsningen til $x^2 = 20$) med minst 6 desimalers nøyaktighet. Start med intervallet $[4, 5]$.`,
        solution: `\`\`\`python
def f(x):
    return x**2 - 20

a = 4    # f(4) = 16 - 20 = -4 (negativ)
b = 5    # f(5) = 25 - 20 = 5  (positiv)

for i in range(50):
    m = (a + b) / 2
    if f(m) * f(a) > 0:
        a = m
    else:
        b = m

print("sqrt(20) =", round(m, 6))
\`\`\`

Resultat: $\\sqrt{20} \\approx 4{,}472136$.`,
        answer: 4.472136,
        hints: ['Definer f(x) = x^2 - 20. Nullpunktet til f er der x^2 = 20, altså x = sqrt(20).'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-9-3-ex-4',
        number: '9.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et program som beregner gjennomsnitt og median av en liste med tall som brukeren skriver inn. Brukeren skal kunne skrive inn så mange tall de vil, og avslutte med å skrive "ferdig".`,
        solution: `\`\`\`python
tall_liste = []

while True:
    svar = input("Skriv inn et tall (eller 'ferdig' for å avslutte): ")
    if svar == "ferdig":
        break
    tall_liste.append(float(svar))

if len(tall_liste) == 0:
    print("Ingen tall ble skrevet inn.")
else:
    # Gjennomsnitt
    snitt = sum(tall_liste) / len(tall_liste)
    print("Gjennomsnitt:", round(snitt, 2))

    # Median
    sortert = sorted(tall_liste)
    n = len(sortert)
    if n % 2 == 1:
        med = sortert[n // 2]
    else:
        med = (sortert[n // 2 - 1] + sortert[n // 2]) / 2
    print("Median:", med)
    print("Antall tall:", n)
\`\`\``,
        hints: [
          'Bruk en while-løkke som kjører til brukeren skriver "ferdig".',
          'Bruk break for å stoppe løkken.',
          'For å finne medianen, sortér listen og finn det midterste elementet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1p-9-3-ex-5',
        number: '9.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du setter inn 500 kr i måneden på en sparekonto med 4 % årlig rente. Skriv et program som beregner hvor mye du har spart etter 10 år. (Hint: Regn med månedlig rente, der månedlig rente er årsrente delt på 12.)`,
        solution: `\`\`\`python
manedlig_innskudd = 500
arsrente = 4
manedlig_rente = arsrente / 100 / 12
antall_maneder = 10 * 12

saldo = 0
totalt_innskudd = 0

for maned in range(1, antall_maneder + 1):
    saldo = saldo + manedlig_innskudd
    saldo = saldo * (1 + manedlig_rente)
    totalt_innskudd = totalt_innskudd + manedlig_innskudd

print("Etter 10 år:")
print("Saldo:", round(saldo, 2), "kr")
print("Totalt innbetalt:", totalt_innskudd, "kr")
print("Opptjente renter:", round(saldo - totalt_innskudd, 2), "kr")
\`\`\`

**Resultat:**
\`\`\`
Etter 10 år:
Saldo: 73624.89 kr
Totalt innbetalt: 60000 kr
Opptjente renter: 13624.89 kr
\`\`\`

Du har satt inn 500 kr x 120 måneder = 60 000 kr, men på grunn av rentesrente har du fått over 13 600 kr ekstra!`,
        hints: [
          'Månedlig rente er årsrente / 12.',
          'For hver måned: legg til innskuddet, så beregn rente på hele saldoen.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: '1p-9-3-tip',
      type: 'tip',
      title: 'Videre utforsking',
      content: `Programmering åpner opp en helt ny verden av muligheter i matematikk. Når du har lært grunnleggende Python, kan du:

- **Utforske tallmønstre**: Finn primtall, Fibonacci-tall eller perfekte tall.
- **Lage egne kalkulatorer**: BMI-kalkulator, valutaomregner, eller budsjettkalkulator.
- **Visualisere data**: Tegn søylediagrammer og sektordiagrammer med matplotlib.
- **Løse optimeringsproblemer**: Finn den billigste flyreisen eller den korteste ruten.

Det viktigste er å eksperimentere og ha det gøy med å utforske!`,
    },
    {
      id: '1p-9-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Med **løkker** kan vi beregne rentesrente og sparing steg for steg.
- **Simulering** lar oss gjenta tilfeldige forsøk tusenvis av ganger og sammenligne med teoretisk sannsynlighet.
- **Brute-force** betyr å prøve mange verdier for å finne løsningen til en likning.
- **Halveringsmetoden** er en effektiv algoritme for å finne nullpunkter: den halverer søkeområdet i hvert steg.
- Python er godt egnet for **statistikk**: beregne gjennomsnitt, median og variasjonsbredde fra lister med data.
- Programmering gjør det mulig å **automatisere** hverdagsberegninger og utforske matematikk på nye måter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const CHAPTERS_1P_PROGRAMMERING = [CHAPTER_1P_9_1, CHAPTER_1P_9_2, CHAPTER_1P_9_3];

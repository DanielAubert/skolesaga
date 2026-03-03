/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 12
 *
 * Kapittel 11.1: Introduksjon til programmering (Scratch/Python)
 * Kapittel 11.2: Løkker og variabler
 * Kapittel 11.3: Algoritmer i matematikk
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1 NARRATIV: Introduksjon til programmering
// ============================================================================

export const CHAPTER_8_11_1_NARRATIV: TextbookChapter = {
  id: '8-11-1-narrativ',
  courseId: '8',
  chapterNumber: '11.1',
  title: 'Introduksjon til programmering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende innforing i programmering der vi starter med Scratch som visuelt sprak og beveger oss over til Python -- fra de forste print-kommandoene til enkle beregninger og brukerinndata.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  linkedChapterId: '8-11-1',
  content: [
    {
      id: '8-11-1-n-intro',
      type: 'text',
      content: `## Snakke med datamaskinen

Tenk deg at du har en veldig lydig, men litt bokstavelig venn. Denne vennen gjor **noyaktig** det du sier -- verken mer eller mindre. Sier du «hopp tre ganger», hopper hen tre ganger. Sier du «hopp til du blir sliten», hopper hen til hen blir sliten. Men sier du bare «gjor noe goy», star hen og ser forvirret pa deg.

Denne vennen er datamaskinen. Og spraket dere snakker sammen heter **programmering**.

Et program er rett og slett en **liste med instruksjoner** som datamaskinen folger, steg for steg. Datamaskinen er lynrask og gjor aldri regnefeil -- men den forstår bare det du skriver, ikke det du **mener**. Derfor er det viktig a vaere presis.

I dette kapittelet skal vi ta de aller forste stegene. Vi begynner med **Scratch**, et visuelt programmeringssprak der du bygger programmer med klosser, og gar deretter videre til **Python**, et tekstbasert sprak der du skriver instruksjonene selv.`,
    },

    {
      id: '8-11-1-n-section1',
      type: 'text',
      content: `## Scratch -- programmering med klosser

Scratch er utviklet av MIT og er designet for a gjore det enkelt a laere programmering. I stedet for a skrive tekst, drar du fargerike **klosser** inn pa arbeidsflaten og setter dem sammen som puslespillbrikker.

Her er noen viktige Scratch-klosser:

- **«si [Hei!] i [2] sekunder»** -- katten pa skjermen sier noe
- **«ga [10] steg»** -- katten flytter seg
- **«gjenta [4] ganger»** -- gjentar klossene inni et bestemt antall ganger
- **«sett [x] til [0]»** -- lagrer en verdi i en variabel
- **«spor [Hva heter du?] og vent»** -- lar brukeren skrive inn noe

Det fine med Scratch er at du **ser resultatet med en gang**. Katten beveger seg, snakker, og reagerer -- og du laerer de grunnleggende ideene i programmering uten a matte huske vanskelig syntaks.

**Eksempel i Scratch (beskrevet med tekst):**
1. Nar det gronne flagget trykkes
2. Si «Hei! Jeg skal regne for deg!» i 2 sekunder
3. Spor «Skriv inn et tall:» og vent
4. Sett variabel «svar_tall» til (svar)
5. Si (sett sammen «Dobbelt av tallet er: » og (svar_tall * 2)) i 3 sekunder

Dette lille programmet ber brukeren om et tall og viser det dobbelte. De samme ideene -- inndata, beregning, utdata -- finnes i alle programmeringssprak.`,
    },

    {
      id: '8-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa grunnleggende programmering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-1-n-quiz1-q0',
            task: 'Hva er et program?',
            options: [
              { id: 'a', text: 'En type datamaskin', isCorrect: false },
              { id: 'b', text: 'En liste med instruksjoner som datamaskinen folger steg for steg', isCorrect: true },
              { id: 'c', text: 'Et regnestykke som datamaskinen finner opp selv', isCorrect: false },
              { id: 'd', text: 'Et spill pa nettet', isCorrect: false },
            ],
            solution: 'Et program er en serie instruksjoner som datamaskinen utforer i rekkefolge. Datamaskinen gjor noyaktig det den far beskjed om -- verken mer eller mindre.',
          },
          {
            id: '8-11-1-n-quiz1-q1',
            task: 'Hva er den storste fordelen med Scratch for nybegynnere?',
            options: [
              { id: 'a', text: 'Det er det raskeste programmeringsspraket', isCorrect: false },
              { id: 'b', text: 'Du slipper a huske vanskelig syntaks -- du bygger med visuelle klosser', isCorrect: true },
              { id: 'c', text: 'Det kan bare brukes til matematikk', isCorrect: false },
              { id: 'd', text: 'Det fungerer uten datamaskin', isCorrect: false },
            ],
            solution: 'Scratch bruker fargerike klosser som du drar og slipper. Du trenger ikke a huske kommandoer eller bekymre deg for skrivefeil -- du fokuserer pa logikken.',
          },
        ],
      },
    },

    {
      id: '8-11-1-n-section2',
      type: 'text',
      content: `## Python -- fra klosser til tekst

Scratch er fantastisk for a komme i gang, men etter hvert vil du ønske noe kraftigere. **Python** er et av verdens mest populaere programmeringssprak, og det er overraskende enkelt a laere.

Det aller forste du laerer i Python er a skrive noe pa skjermen med \`print()\`:

\`\`\`python
print("Hei, verden!")
\`\`\`

Nar du kjorer dette programmet, dukker teksten \`Hei, verden!\` opp pa skjermen. Ferdig! Ditt forste Python-program.

Vi kan ogsa bruke \`print()\` til a vise resultater av beregninger:

\`\`\`python
print(3 + 7)
print(12 * 5)
print(100 / 4)
\`\`\`

Dette skriver ut:
\`\`\`
10
60
25.0
\`\`\`

Legg merke til at divisjon alltid gir et desimaltall i Python (25.0 i stedet for 25). De fire regneartene i Python er:
- \`+\` addisjon
- \`-\` subtraksjon
- \`*\` multiplikasjon
- \`/\` divisjon
- \`**\` potens (for eksempel \`3 ** 2\` gir $3^2 = 9$)`,
    },

    {
      id: '8-11-1-n-section3',
      type: 'text',
      content: `## Variabler -- navnelapper pa verdier

I Scratch brukte vi variabler nar vi skrev «sett [svar_tall] til (svar)». I Python gjor vi det slik:

\`\`\`python
navn = "Nora"
alder = 14
pi = 3.14159
\`\`\`

En **variabel** er et navn som peker pa en verdi. Tenk pa det som en eske med en lapp pa: lappen er navnet, og inni esken ligger verdien.

Vi kan bruke variabler i beregninger:

\`\`\`python
lengde = 8
bredde = 5
areal = lengde * bredde
print(f"Arealet er {areal} kvadratmeter")
\`\`\`

Resultatet: \`Arealet er 40 kvadratmeter\`

Her bruker vi en **f-streng** (legg merke til \`f\` foran anforseltegnene). Alt inni krøllparentesene \`{}\` erstattes med verdien til variabelen.

Vi kan ogsa la brukeren skrive inn verdier med \`input()\`:

\`\`\`python
navn = input("Hva heter du? ")
print(f"Hei, {navn}!")
\`\`\`

**Viktig:** \`input()\` gir alltid **tekst** tilbake. Hvis du vil bruke svaret som et tall, ma du gjore det om:

\`\`\`python
tall = int(input("Skriv et heltall: "))
desimaltall = float(input("Skriv et desimaltall: "))
\`\`\`

\`int()\` gjor om til heltall og \`float()\` gjor om til desimaltall.`,
    },

    {
      id: '8-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Python-grunnleggende:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-1-n-quiz2-q0',
            task: 'Hva skriver dette programmet ut?\n\n```python\na = 7\nb = 3\nprint(a * b)\n```',
            options: [
              { id: 'a', text: '`a * b`', isCorrect: false },
              { id: 'b', text: '`10`', isCorrect: false },
              { id: 'c', text: '`21`', isCorrect: true },
              { id: 'd', text: '`73`', isCorrect: false },
            ],
            solution: 'Python regner ut $7 \\cdot 3 = 21$ og skriver ut resultatet. Variabelnavnene erstattes med verdiene sine.',
          },
          {
            id: '8-11-1-n-quiz2-q1',
            task: 'Hva er resultatet av `int(input("Tall: "))` nar brukeren skriver inn `5`?',
            options: [
              { id: 'a', text: 'Teksten `"5"`', isCorrect: false },
              { id: 'b', text: 'Heltallet `5`', isCorrect: true },
              { id: 'c', text: 'Desimaltallet `5.0`', isCorrect: false },
              { id: 'd', text: 'En feilmelding', isCorrect: false },
            ],
            solution: '`input()` gir teksten `"5"`. Nar vi pakker inn i `int()`, blir teksten konvertert til heltallet `5`. Hadde vi brukt `float()`, ville vi fatt `5.0`.',
          },
          {
            id: '8-11-1-n-quiz2-q2',
            task: 'Hva betyr `**` i Python?',
            options: [
              { id: 'a', text: 'Multiplikasjon', isCorrect: false },
              { id: 'b', text: 'Divisjon', isCorrect: false },
              { id: 'c', text: 'Opphoyd i (potens)', isCorrect: true },
              { id: 'd', text: 'Gjenta', isCorrect: false },
            ],
            solution: '`**` er potensoperatoren. For eksempel er `2 ** 3` det samme som $2^3 = 8$. Vanlig multiplikasjon er `*`.',
          },
        ],
      },
    },

    {
      id: '8-11-1-n-section4',
      type: 'text',
      content: `## Et komplett eksempel: Arealberegner

La oss sette alt sammen i et lite program som beregner arealet av en trekant:

\`\`\`python
print("=== Arealberegner for trekant ===")

grunnlinje = float(input("Skriv inn grunnlinjen (cm): "))
hoyde = float(input("Skriv inn hoyden (cm): "))

areal = (grunnlinje * hoyde) / 2

print(f"Grunnlinje: {grunnlinje} cm")
print(f"Hoyde: {hoyde} cm")
print(f"Areal: {areal} cm²")
\`\`\`

Nar programmet kjores:
\`\`\`
=== Arealberegner for trekant ===
Skriv inn grunnlinjen (cm): 10
Skriv inn hoyden (cm): 6
Grunnlinje: 10.0 cm
Hoyde: 6.0 cm
Areal: 30.0 cm²
\`\`\`

Programmet bruker formelen $A = \\frac{g \\cdot h}{2}$. Det tar imot to tall fra brukeren, beregner arealet og viser resultatet. Dette er den grunnleggende strukturen i nesten alle programmer:

1. **Inndata** -- ta imot informasjon (med \`input()\`)
2. **Beregning** -- gjor noe med informasjonen
3. **Utdata** -- vis resultatet (med \`print()\`)

Du kan lett endre programmet til a beregne arealet av et rektangel, en sirkel, eller hva som helst annet -- bare bytt ut formelen!`,
    },

    {
      id: '8-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa et komplett program:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-1-n-quiz3-q0',
            task: 'Hva er de tre hoveddelene i et typisk program?',
            options: [
              { id: 'a', text: 'Start, midten, slutt', isCorrect: false },
              { id: 'b', text: 'Inndata, beregning, utdata', isCorrect: true },
              { id: 'c', text: 'Variabler, funksjoner, klasser', isCorrect: false },
              { id: 'd', text: 'Print, input, if', isCorrect: false },
            ],
            solution: 'De tre hoveddelene er: inndata (ta imot informasjon), beregning (gjore noe med den) og utdata (vise resultatet). Nesten alle programmer folger dette monsteret.',
          },
          {
            id: '8-11-1-n-quiz3-q1',
            task: 'Hva skriver dette programmet ut?\n\n```python\nside = 4\nareal = side ** 2\nprint(areal)\n```',
            options: [
              { id: 'a', text: '`8`', isCorrect: false },
              { id: 'b', text: '`16`', isCorrect: true },
              { id: 'c', text: '`44`', isCorrect: false },
              { id: 'd', text: '`side ** 2`', isCorrect: false },
            ],
            solution: '`side ** 2` betyr $4^2 = 16$. Programmet beregner arealet av et kvadrat med sidelengde 4.',
          },
          {
            id: '8-11-1-n-quiz3-q2',
            task: 'Hvilken linje gjor om brukerens svar fra tekst til et desimaltall?',
            options: [
              { id: 'a', text: '`input("Skriv et tall: ")`', isCorrect: false },
              { id: 'b', text: '`print(tall)`', isCorrect: false },
              { id: 'c', text: '`float(input("Skriv et tall: "))`', isCorrect: true },
              { id: 'd', text: '`str(input("Skriv et tall: "))`', isCorrect: false },
            ],
            solution: '`input()` gir alltid tekst. `float()` gjor teksten om til et desimaltall. Uten `float()` ville Python behandlet svaret som tekst og ikke kunne regne med det.',
          },
        ],
      },
    },

    {
      id: '8-11-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har tatt de forste stegene i programmering:

- **Scratch**: Visuelt programmeringssprak med klosser -- perfekt for a laere grunnideene
- **Python**: Tekstbasert sprak som er enkelt a laere og kraftig nok for profesjonell bruk
- **print()**: Skriver ut tekst eller beregningsresultater pa skjermen
- **Regneoperasjoner**: \`+\`, \`-\`, \`*\`, \`/\`, \`**\` (potens)
- **Variabler**: Navnelapper pa verdier (\`alder = 14\`)
- **input()**: Tar imot tekst fra brukeren
- **int()** og **float()**: Gjor tekst om til heltall eller desimaltall
- **f-strenger**: Pen formatering med \`f"Svaret er {variabel}"\`
- **Programmets tre deler**: Inndata, beregning, utdata

Med disse verktoyene kan du allerede lage programmer som beregner areal, omregner temperaturer, og mye mer. I neste kapittel skal vi laere noe som gjor programmering virkelig kraftig: **lokker** -- a fa datamaskinen til a gjenta ting tusenvis av ganger!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.2 NARRATIV: Løkker og variabler
// ============================================================================

export const CHAPTER_8_11_2_NARRATIV: TextbookChapter = {
  id: '8-11-2-narrativ',
  courseId: '8',
  chapterNumber: '11.2',
  title: 'Løkker og variabler',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av lokker og variabler der vi oppdager hvordan datamaskinen kan gjenta instruksjoner tusenvis av ganger, utforske tallrekker og la oss eksperimentere med matematiske monstre.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  linkedChapterId: '8-11-2',
  content: [
    {
      id: '8-11-2-n-intro',
      type: 'text',
      content: `## Gjenta uten a bli sliten

Tenk deg at du far i oppgave a skrive ut alle tallene fra 1 til 1000. For hand ville det tatt deg timevis. Men en datamaskin gjor det pa et brøkdels sekund -- fordi den kan **gjenta** instruksjoner sa mange ganger den vil, uten a bli sliten eller gjore feil.

Denne evnen til a gjenta ting -- det vi kaller **lokker** -- er kanskje den viktigste grunnen til at programmering er sa nyttig i matematikk. Med lokker kan vi:
- Summere hundrevis av tall pa et oyeblikk
- Utforske tallrekker og monstre
- Sjekke tusenvis av muligheter

La oss starte med de to typene lokker i Python: **for-lokken** og **while-lokken**.`,
    },

    {
      id: '8-11-2-n-section1',
      type: 'text',
      content: `## For-lokken -- gjenta et bestemt antall ganger

En **for-lokke** brukes nar du vet pa forhand hvor mange ganger du vil gjenta noe. I Python ser den slik ut:

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

Dette skriver ut:
\`\`\`
0
1
2
3
4
\`\`\`

\`range(5)\` lager tallene $0, 1, 2, 3, 4$ -- altsaa 5 tall, men den starter pa 0 og stopper **for** 5. Variabelen \`i\` tar etter tur verdien av hvert tall.

Du kan ogsa bestemme start- og sluttverdi:

\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

Dette skriver ut $1, 2, 3, 4, 5$. Formatet er \`range(start, stopp)\` der \`stopp\` **ikke** er med.

**Innrykk er viktig!** Alt som skal gjentas ma ha 4 mellomrom foran seg. Koden uten innrykk kjores etter at lokken er ferdig:

\`\`\`python
for i in range(3):
    print(f"Inne i lokken: {i}")
print("Denne linjen kjores etter lokken")
\`\`\`

Resultat:
\`\`\`
Inne i lokken: 0
Inne i lokken: 1
Inne i lokken: 2
Denne linjen kjores etter lokken
\`\`\``,
    },

    {
      id: '8-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa for-lokker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-2-n-quiz1-q0',
            task: 'Hva skriver `for i in range(4): print(i)` ut?',
            options: [
              { id: 'a', text: '`1 2 3 4`', isCorrect: false },
              { id: 'b', text: '`0 1 2 3`', isCorrect: true },
              { id: 'c', text: '`0 1 2 3 4`', isCorrect: false },
              { id: 'd', text: '`1 2 3`', isCorrect: false },
            ],
            solution: '`range(4)` gir tallene $0, 1, 2, 3$ -- altsaa 4 tall som starter pa 0 og stopper for 4.',
          },
          {
            id: '8-11-2-n-quiz1-q1',
            task: 'Hva skriver `for i in range(2, 7): print(i)` ut?',
            options: [
              { id: 'a', text: '`2 3 4 5 6`', isCorrect: true },
              { id: 'b', text: '`2 3 4 5 6 7`', isCorrect: false },
              { id: 'c', text: '`1 2 3 4 5 6 7`', isCorrect: false },
              { id: 'd', text: '`2 7`', isCorrect: false },
            ],
            solution: '`range(2, 7)` starter pa 2 og stopper **for** 7, sa vi far tallene $2, 3, 4, 5, 6$.',
          },
          {
            id: '8-11-2-n-quiz1-q2',
            task: 'Hvorfor er innrykk (4 mellomrom) viktig i Python?',
            options: [
              { id: 'a', text: 'Det er bare for a gjore koden pen', isCorrect: false },
              { id: 'b', text: 'Det forteller Python hvilken kode som tilhorer lokken', isCorrect: true },
              { id: 'c', text: 'Det gjor programmet raskere', isCorrect: false },
              { id: 'd', text: 'Det er valgfritt', isCorrect: false },
            ],
            solution: 'Python bruker innrykk for a vite hvilke linjer som horer til lokken. Uten riktig innrykk far du en feilmelding, eller koden kjores pa feil tidspunkt.',
          },
        ],
      },
    },

    {
      id: '8-11-2-n-section2',
      type: 'text',
      content: `## Bruke lokker til matematikk

Na kommer det goyeste: a bruke lokker til a utforske matematikk!

**Eksempel 1: Summere tallene fra 1 til 100**

Den unge Gauss fikk denne oppgaven pa skolen og fant svaret med en genial snarvei. Men vi kan bruke en lokke:

\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i
print(f"Summen av tallene 1 til 100 er {total}")
\`\`\`

Resultat: \`Summen av tallene 1 til 100 er 5050\`

Vi kan sjekke med Gauss' formel: $\\frac{100 \\cdot 101}{2} = 5050$. Stemmer!

**Eksempel 2: Gangetabellen**

\`\`\`python
tall = 7
for i in range(1, 11):
    print(f"{tall} * {i} = {tall * i}")
\`\`\`

Resultat:
\`\`\`
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
...
7 * 10 = 70
\`\`\`

**Eksempel 3: Finne alle partall fra 1 til 20**

\`\`\`python
for i in range(1, 21):
    if i % 2 == 0:
        print(i)
\`\`\`

Her bruker vi **modulo** (\`%\`), som gir resten ved divisjon. Hvis \`i % 2 == 0\`, betyr det at \`i\` er delelig med 2 -- altsaa et partall.`,
    },

    {
      id: '8-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa lokker og matematikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-2-n-quiz2-q0',
            task: 'Hva skriver dette programmet ut?\n\n```python\ntotal = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)\n```',
            options: [
              { id: 'a', text: '`6`', isCorrect: false },
              { id: 'b', text: '`15`', isCorrect: true },
              { id: 'c', text: '`21`', isCorrect: false },
              { id: 'd', text: '`10`', isCorrect: false },
            ],
            solution: '`range(1, 6)` gir tallene $1, 2, 3, 4, 5$. Summen er $1 + 2 + 3 + 4 + 5 = 15$.',
          },
          {
            id: '8-11-2-n-quiz2-q1',
            task: 'Hva er verdien av `15 % 4`?',
            options: [
              { id: 'a', text: '`3`', isCorrect: true },
              { id: 'b', text: '`3.75`', isCorrect: false },
              { id: 'c', text: '`4`', isCorrect: false },
              { id: 'd', text: '`1`', isCorrect: false },
            ],
            solution: '$15 = 4 \\cdot 3 + 3$, sa resten er $3$. Modulo-operatoren gir nettopp denne resten.',
          },
          {
            id: '8-11-2-n-quiz2-q2',
            task: 'Hvilket tall sjekker `if i % 3 == 0` for?',
            options: [
              { id: 'a', text: 'Om `i` er et partall', isCorrect: false },
              { id: 'b', text: 'Om `i` er delelig med 3', isCorrect: true },
              { id: 'c', text: 'Om `i` er storre enn 3', isCorrect: false },
              { id: 'd', text: 'Om `i` er et primtall', isCorrect: false },
            ],
            solution: '`i % 3` gir resten nar `i` deles pa 3. Hvis resten er 0, er `i` delelig med 3. For eksempel: $9 \\div 3 = 3$ med rest $0$, sa $9 \\% 3 == 0$ er sant.',
          },
        ],
      },
    },

    {
      id: '8-11-2-n-section3',
      type: 'text',
      content: `## While-lokken -- gjenta sa lenge en betingelse er sann

Den andre typen lokke er **while-lokken**. Den gjentar koden sa lenge en betingelse er oppfylt:

\`\`\`python
tall = 1
while tall <= 10:
    print(tall)
    tall = tall + 1
\`\`\`

Dette skriver ut tallene 1 til 10. While-lokken sjekker betingelsen \`tall <= 10\` for hvert gjennomgang. Nar \`tall\` blir 11, er betingelsen ikke lenger sann, og lokken stopper.

**Viktig:** Du ma huske a oppdatere variabelen inne i lokken! Glemmer du \`tall = tall + 1\`, vil \`tall\` alltid vaere 1, betingelsen er alltid sann, og lokken kjorer for alltid (en «evig lokke»).

**Eksempel: Doble et tall til det overstiger 1000**

\`\`\`python
tall = 1
antall = 0
while tall <= 1000:
    tall = tall * 2
    antall = antall + 1
print(f"Etter {antall} doblinger er tallet {tall}")
\`\`\`

Resultat: \`Etter 10 doblinger er tallet 1024\`

Fordi $2^{10} = 1024 > 1000$. While-lokken er perfekt nar vi ikke vet pa forhand hvor mange ganger vi ma gjenta -- vi vet bare **nar vi skal stoppe**.`,
    },

    {
      id: '8-11-2-n-section4',
      type: 'text',
      content: `## Utforske tallrekker med lokker

Lokker er fantastiske for a utforske matematiske monstre. La oss se pa noen eksempler.

**Kvadrattallene:**

\`\`\`python
print("Kvadrattallene:")
for n in range(1, 11):
    print(f"{n}² = {n**2}")
\`\`\`

Resultat:
\`\`\`
1² = 1
2² = 4
3² = 9
4² = 16
...
10² = 100
\`\`\`

**Trekanttallene** (1, 3, 6, 10, 15, ...):

\`\`\`python
print("Trekanttallene:")
trekanttall = 0
for n in range(1, 11):
    trekanttall = trekanttall + n
    print(f"T({n}) = {trekanttall}")
\`\`\`

Hvert trekanttall er summen av de forste $n$ naturlige tallene: $T(n) = 1 + 2 + 3 + \\ldots + n$.

**Fibonacci-tallene** (1, 1, 2, 3, 5, 8, 13, 21, ...):

\`\`\`python
a = 1
b = 1
print(a)
print(b)
for i in range(10):
    c = a + b
    print(c)
    a = b
    b = c
\`\`\`

Hvert Fibonacci-tall er summen av de to foregaende. Denne rekken dukker opp overalt i naturen -- i solsikker, sneglehus og ananas!`,
    },

    {
      id: '8-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa while-lokker og tallrekker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-2-n-quiz3-q0',
            task: 'Hva er forskjellen mellom en for-lokke og en while-lokke?',
            options: [
              { id: 'a', text: 'De gjor noyaktig det samme', isCorrect: false },
              { id: 'b', text: 'For-lokken gjentar et bestemt antall ganger, while-lokken gjentar sa lenge en betingelse er sann', isCorrect: true },
              { id: 'c', text: 'While-lokken er raskere', isCorrect: false },
              { id: 'd', text: 'For-lokken kan bare telle oppover', isCorrect: false },
            ],
            solution: 'For-lokken brukes nar du vet antall gjentakelser (f.eks. «gjenta 10 ganger»). While-lokken brukes nar du vet betingelsen for a stoppe (f.eks. «gjenta til tallet er storre enn 1000»).',
          },
          {
            id: '8-11-2-n-quiz3-q1',
            task: 'Hva er det femte trekanttallet $T(5)$?',
            options: [
              { id: 'a', text: '$10$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: true },
              { id: 'c', text: '$25$', isCorrect: false },
              { id: 'd', text: '$5$', isCorrect: false },
            ],
            solution: '$T(5) = 1 + 2 + 3 + 4 + 5 = 15$. Trekanttallene kalles det fordi du kan arrangere dem som trekanter med prikker.',
          },
          {
            id: '8-11-2-n-quiz3-q2',
            task: 'Fibonacci-tallene begynner med 1, 1, 2, 3, 5, 8. Hva er det neste tallet?',
            options: [
              { id: 'a', text: '$11$', isCorrect: false },
              { id: 'b', text: '$13$', isCorrect: true },
              { id: 'c', text: '$14$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: 'Hvert Fibonacci-tall er summen av de to foregaende: $5 + 8 = 13$. Sa rekken fortsetter med 13.',
          },
        ],
      },
    },

    {
      id: '8-11-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Lokker lar datamaskinen gjenta instruksjoner -- og det gjor programmering til et kraftig verktoy i matematikk:

- **For-lokken** gjentar et bestemt antall ganger: \`for i in range(start, stopp)\`
- **While-lokken** gjentar sa lenge en betingelse er sann: \`while betingelse:\`
- **range(n)** gir tallene $0, 1, \\ldots, n-1$. **range(a, b)** gir $a, a+1, \\ldots, b-1$.
- **Modulo** (\`%\`) gir resten ved divisjon -- nyttig for a sjekke delbarhet
- **Summering**: Start med \`total = 0\` og legg til i lokken
- **Matematiske rekker**: Kvadrattall ($n^2$), trekanttall ($1 + 2 + \\ldots + n$) og Fibonacci-tall (summen av de to foregaende)
- **Innrykk**: Koden med innrykk tilhorer lokken, koden uten kjores etterpå
- **Pass opp for evig lokke**: Husk a oppdatere variabelen i while-lokken!

Med lokker kan du utforske matematiske monstre som ville tatt timer for hand -- men som datamaskinen fikser pa millisekunder. I neste kapittel skal vi laere om **algoritmer** -- oppskrifter for a lose problemer steg for steg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3 NARRATIV: Algoritmer i matematikk
// ============================================================================

export const CHAPTER_8_11_3_NARRATIV: TextbookChapter = {
  id: '8-11-3-narrativ',
  courseId: '8',
  chapterNumber: '11.3',
  title: 'Algoritmer i matematikk',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av algoritmer der vi laerer hva en algoritme er, hvordan vi beskriver dem med flytdiagrammer, og utforsker klassiske eksempler som Eratosthenes sil for a finne primtall.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å kode kreative og interaktive produkt',
  ],
  linkedChapterId: '8-11-3',
  content: [
    {
      id: '8-11-3-n-intro',
      type: 'text',
      content: `## Oppskrifter for a lose problemer

Nar du baker en kake, folger du en oppskrift: «bland mel og sukker, tilsett egg, ror til jevn masse, stek i 25 minutter.» Oppskriften er en **steg-for-steg-instruksjon** som garanterer et godt resultat -- sa lenge du folger den noyaktig.

I matematikk og programmering kaller vi slike oppskrifter for **algoritmer**. En algoritme er:

1. En **endelig** rekke med instruksjoner (den ma stoppe pa et tidspunkt)
2. Hvert steg er **presist** nok til a folges uten tvetydighet
3. Den tar inn **inndata** og gir ut **utdata**

Du har allerede brukt algoritmer hele livet uten a tenke over det:
- **Addisjon med tiervenn**: En algoritme for a legge sammen flersifrede tall
- **Lang divisjon**: En algoritme for a dele store tall
- **Deling pa fellesfaktor**: En algoritme for a forkorte broker

I dette kapittelet skal vi laere a tenke som algoritmeutviklere og bruke Python til a gjore algoritmene levende.`,
    },

    {
      id: '8-11-3-n-section1',
      type: 'text',
      content: `## Flytdiagrammer -- algoritmer som bilder

For vi koder, kan det vaere lurt a **tegne** algoritmen. Et **flytdiagram** bruker symboler for a vise flyten:

- **Ovaler**: Start og slutt
- **Rektangler**: Handlinger (f.eks. «beregn $x + 3$»)
- **Romber**: Valg/beslutninger (f.eks. «er $x > 10$?» -- ja/nei)
- **Piler**: Viser retningen fra steg til steg

**Eksempel:** En algoritme for a sjekke om et tall er positivt, negativt eller null:

1. **Start**
2. Les inn tallet $x$
3. Er $x > 0$? → Ja: Skriv «Positivt» → Ga til 6
4. Er $x < 0$? → Ja: Skriv «Negativt» → Ga til 6
5. Skriv «Null»
6. **Slutt**

I Python:

\`\`\`python
x = int(input("Skriv inn et tall: "))

if x > 0:
    print("Positivt")
elif x < 0:
    print("Negativt")
else:
    print("Null")
\`\`\`

Legg merke til hvordan flytdiagrammets «valg» (rombene) tilsvarer \`if\`/\`elif\`/\`else\` i Python. A tegne flytdiagrammet forst hjelper deg a tenke gjennom alle mulighetene for du begynner a kode.`,
    },

    {
      id: '8-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa algoritmer og flytdiagrammer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-3-n-quiz1-q0',
            task: 'Hva er en algoritme?',
            options: [
              { id: 'a', text: 'Et programmeringssprak', isCorrect: false },
              { id: 'b', text: 'En endelig rekke presise instruksjoner for a lose et problem', isCorrect: true },
              { id: 'c', text: 'En type datamaskin', isCorrect: false },
              { id: 'd', text: 'Et flytdiagram', isCorrect: false },
            ],
            solution: 'En algoritme er en steg-for-steg-oppskrift som er presis nok til a folges uten tvetydighet. Den ma ogsa vaere endelig -- den ma stoppe pa et tidspunkt.',
          },
          {
            id: '8-11-3-n-quiz1-q1',
            task: 'Hvilken form brukes for **valg/beslutninger** i et flytdiagram?',
            options: [
              { id: 'a', text: 'Oval', isCorrect: false },
              { id: 'b', text: 'Rektangel', isCorrect: false },
              { id: 'c', text: 'Rombe (diamantform)', isCorrect: true },
              { id: 'd', text: 'Sirkel', isCorrect: false },
            ],
            solution: 'Romber (diamantformer) brukes for valg der svaret er ja eller nei. Ovaler brukes for start/slutt, og rektangler brukes for handlinger.',
          },
          {
            id: '8-11-3-n-quiz1-q2',
            task: 'Hvilken av disse er IKKE et krav til en algoritme?',
            options: [
              { id: 'a', text: 'Den ma ha presise instruksjoner', isCorrect: false },
              { id: 'b', text: 'Den ma stoppe pa et tidspunkt', isCorrect: false },
              { id: 'c', text: 'Den ma vaere skrevet i Python', isCorrect: true },
              { id: 'd', text: 'Den ma gi et resultat', isCorrect: false },
            ],
            solution: 'En algoritme kan beskrives pa mange mater: med ord, flytdiagram, pseudokode eller et programmeringssprak. Den trenger ikke vaere i Python -- det er bare en av mange mater a uttrykke den pa.',
          },
        ],
      },
    },

    {
      id: '8-11-3-n-section2',
      type: 'text',
      content: `## Eratosthenes' sil -- en klassisk algoritme

En av historiens mest elegante algoritmer ble oppfunnet av den greske matematikeren **Eratosthenes** for over 2000 ar siden. Den finner alle **primtall** opp til et gitt tall.

Husk: et **primtall** er et tall storre enn 1 som bare er delelig med 1 og seg selv. De forste primtallene er $2, 3, 5, 7, 11, 13, 17, 19, 23, \\ldots$

**Algoritmen (for a finne alle primtall opp til 30):**

1. Skriv opp alle tall fra 2 til 30
2. Det forste tallet (2) er et primtall. **Stryk** alle multipler av 2: $4, 6, 8, 10, 12, \\ldots$
3. Det neste ustrukne tallet (3) er et primtall. **Stryk** alle multipler av 3: $6, 9, 12, 15, \\ldots$
4. Det neste ustrukne tallet (5) er et primtall. **Stryk** alle multipler av 5: $10, 15, 20, 25, 30$
5. Fortsett til du har gaatt gjennom alle tall. De gjenvaerende (ustrukne) tallene er primtallene!

Resultatet: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$

Genialiteten er at vi ikke trenger a sjekke hvert tall individuelt -- vi «siler bort» sammensatte tall i store grupper.`,
    },

    {
      id: '8-11-3-n-section3',
      type: 'text',
      content: `## Eratosthenes' sil i Python

La oss programmere denne algoritmen:

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
primtall = []
for i in range(2, grense + 1):
    if er_primtall[i]:
        primtall.append(i)

print(f"Primtall opp til {grense}:")
print(primtall)
\`\`\`

Resultat:
\`\`\`
Primtall opp til 50:
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
\`\`\`

Her bruker vi en **liste** \`er_primtall\` der hvert element starter som \`True\`. Nar vi finner en multipler, setter vi den til \`False\`. Til slutt er alle tall som fortsatt er \`True\` primtall.

\`range(i * 2, grense + 1, i)\` gir alle multipler av \`i\`: den starter pa \`i * 2\`, gar opp til \`grense\`, og hopper \`i\` steg om gangen. For $i = 3$ gir dette $6, 9, 12, 15, \\ldots$

Denne algoritmen er over 2000 ar gammel, men den brukes fortsatt den dag i dag -- bare med storre tall!`,
    },

    {
      id: '8-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Eratosthenes sil:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-3-n-quiz2-q0',
            task: 'I Eratosthenes sil: etter at vi har streket ut alle multipler av 2 og 3, hva er det neste primtallet vi finner?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$6$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'Etter a ha streket ut multipler av 2 ($4, 6, 8, \\ldots$) og 3 ($6, 9, 12, \\ldots$), er det neste ustrukne tallet 5. Altsaa er 5 et primtall.',
          },
          {
            id: '8-11-3-n-quiz2-q1',
            task: 'Hva gjor `range(6, 51, 3)` i Python?',
            options: [
              { id: 'a', text: 'Gir tallene $6, 7, 8, \\ldots, 50$', isCorrect: false },
              { id: 'b', text: 'Gir tallene $6, 9, 12, \\ldots, 48$', isCorrect: true },
              { id: 'c', text: 'Gir tallene $3, 6, 9, \\ldots, 51$', isCorrect: false },
              { id: 'd', text: 'Gir tre tall: $6, 51, 3$', isCorrect: false },
            ],
            solution: '`range(6, 51, 3)` starter pa 6, stopper for 51, og hopper 3 om gangen: $6, 9, 12, 15, \\ldots, 48$. Det tredje argumentet er steglengden.',
          },
          {
            id: '8-11-3-n-quiz2-q2',
            task: 'Hvor mange primtall er det mellom 1 og 20?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: true },
              { id: 'c', text: '$9$', isCorrect: false },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Primtallene mellom 1 og 20 er: $2, 3, 5, 7, 11, 13, 17, 19$ -- det er 8 stykker.',
          },
        ],
      },
    },

    {
      id: '8-11-3-n-section4',
      type: 'text',
      content: `## Flere algoritmer i matematikk

La oss se pa to viktige algoritmer til.

**Algoritme: Finn storste faktor**

\`\`\`python
tall = int(input("Skriv inn et tall: "))
storste = 1

for i in range(2, tall + 1):
    if tall % i == 0:
        storste = i

print(f"Storste faktor (utenom seg selv) av {tall} er {storste}")
\`\`\`

Denne algoritmen sjekker alle tall fra 2 til \`tall\` og husker det siste som er en faktor.

**Algoritme: Euklids algoritme for storste felles faktor (SFF)**

Euklid oppdaget for over 2300 ar siden at vi kan finne storste felles faktor for to tall ved a gjenta divisjon med rest:

\`\`\`python
a = int(input("Forste tall: "))
b = int(input("Andre tall: "))

original_a = a
original_b = b

while b != 0:
    rest = a % b
    a = b
    b = rest

print(f"SFF({original_a}, {original_b}) = {a}")
\`\`\`

**Eksempel:** SFF(48, 18)
- $48 \\div 18 = 2$ med rest $12$ → $a = 18$, $b = 12$
- $18 \\div 12 = 1$ med rest $6$ → $a = 12$, $b = 6$
- $12 \\div 6 = 2$ med rest $0$ → $a = 6$, $b = 0$
- Stopp! $\\text{SFF}(48, 18) = 6$

Denne algoritmen er elegant fordi den **alltid** finner svaret og gjor det raskt -- selv for veldig store tall.`,
    },

    {
      id: '8-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa matematiske algoritmer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-11-3-n-quiz3-q0',
            task: 'Bruk Euklids algoritme: Hva er SFF(24, 36)?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: '$36 \\div 24 = 1$ rest $12$ → $a = 24$, $b = 12$. $24 \\div 12 = 2$ rest $0$ → Stopp! $\\text{SFF}(24, 36) = 12$.',
          },
          {
            id: '8-11-3-n-quiz3-q1',
            task: 'Hva er SFF nyttig for i matematikk?',
            options: [
              { id: 'a', text: 'Finne primtall', isCorrect: false },
              { id: 'b', text: 'Forkorte broker', isCorrect: true },
              { id: 'c', text: 'Beregne areal', isCorrect: false },
              { id: 'd', text: 'Tegne grafer', isCorrect: false },
            ],
            solution: 'Storste felles faktor brukes til a forkorte broker. For eksempel: $\\frac{24}{36}$ kan forkortes med SFF = 12 til $\\frac{2}{3}$.',
          },
          {
            id: '8-11-3-n-quiz3-q2',
            task: 'Hvilken Python-konstruksjon passer best nar vi ikke vet hvor mange steg algoritmen trenger?',
            options: [
              { id: 'a', text: 'For-lokke', isCorrect: false },
              { id: 'b', text: 'While-lokke', isCorrect: true },
              { id: 'c', text: 'Print-kommando', isCorrect: false },
              { id: 'd', text: 'Input-kommando', isCorrect: false },
            ],
            solution: 'Nar vi ikke vet antall gjentakelser pa forhand (som i Euklids algoritme der vi gjentar til resten er 0), bruker vi en while-lokke.',
          },
        ],
      },
    },

    {
      id: '8-11-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Algoritmer er grunnlaget for all programmering -- og de finnes overalt i matematikken:

- **Algoritme**: En endelig, presis oppskrift for a lose et problem steg for steg
- **Flytdiagram**: Et visuelt verktoy for a planlegge algoritmer -- med ovaler (start/slutt), rektangler (handlinger) og romber (valg)
- **Eratosthenes' sil**: En 2000 ar gammel algoritme for a finne primtall ved a «sile bort» multipler
- **Euklids algoritme**: Finner storste felles faktor ved gjentatt divisjon med rest -- nyttig for a forkorte broker
- **Lister**: Brukes til a lagre mange verdier, for eksempel alle tall fra 2 til 50
- **Stegvis tenkning**: Bryt problemet ned i sma, presise steg for du koder

Det viktigste du har laert er en mate a **tenke** pa: dele opp problemer i sma steg, vaere presis i instruksjonene, og la datamaskinen gjore det tunge arbeidet. Denne algoritmiske tenkematen er nyttig langt utenfor matematikken -- den hjelper deg a lose alle slags problemer pa en systematisk mate.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL12_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_11_1_NARRATIV,
  CHAPTER_8_11_2_NARRATIV,
  CHAPTER_8_11_3_NARRATIV,
];

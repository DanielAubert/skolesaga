/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 11
 *
 * Kapittel 11.1: Introduksjon til Python
 * Kapittel 11.2: Simulering av tilfeldige forsøk
 * Kapittel 11.3: Matematisk modellering med kode
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1 NARRATIV: Introduksjon til Python
// ============================================================================

export const CHAPTER_9_11_1_NARRATIV: TextbookChapter = {
  id: '9-11-1-narrativ',
  courseId: '9',
  chapterNumber: '11.1',
  title: 'Introduksjon til Python',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende innforing i Python-programmering der vi folger en elev som oppdager hvordan datamaskinen kan bli en kraftig matematisk medspiller -- fra de forste variablene til lokker som gjor tusenvis av beregninger pa et oyeblikk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  linkedChapterId: '9-11-1',
  content: [
    {
      id: '9-11-1-n-intro',
      type: 'text',
      content: `## Datamaskinen som matematikkpartner

Tenk deg at du har en assistent som aldri blir sliten, aldri regner feil, og som kan gjore en million beregninger mens du rekker a ta en slurk av kakao. Den assistenten er datamaskinen din -- og spraket dere snakker sammen heter **Python**.

Python er det mest populaere programmeringsspraket i verden. Det brukes av forskere, ingeniorer, spillutviklere og -- ja -- matematikkelever. Grunnen er enkel: Python er lett a lese, lett a skrive, og fantastisk godt egnet til a utforske matematikk.

I dette kapittelet skal vi ta de forste stegene. Vi begynner med noe helt grunnleggende: hvordan lagre tall, hvordan fa datamaskinen til a skrive ut svar, og hvordan ta imot informasjon fra brukeren.`,
    },

    {
      id: '9-11-1-n-section1',
      type: 'text',
      content: `## Variabler -- navnelapper pa verdier

Det forste du trenger a forstå i Python er **variabler**. En variabel er rett og slett et navn som peker pa en verdi. Tenk pa det som en eske med en lapp pa: esken inneholder en verdi, og lappen forteller deg hva som er inni.

\`\`\`python
alder = 14
navn = "Nora"
pi = 3.14159
\`\`\`

Her har vi tre esker. Den forste heter \`alder\` og inneholder tallet \`14\`. Den andre heter \`navn\` og inneholder teksten \`"Nora"\`. Den tredje heter \`pi\` og inneholder desimaltallet \`3.14159\`.

Python har fire grunnleggende **datatyper**:
- **int** -- heltall, som \`42\` eller \`-7\`
- **float** -- desimaltall, som \`3.14\` eller \`-0.5\`
- **str** -- tekst (strenger), som \`"Hei"\` eller \`'Verden'\`
- **bool** -- sannhetsverdier: \`True\` eller \`False\`

For a vise resultater pa skjermen bruker vi \`print()\`:

\`\`\`python
alder = 14
print(f"Jeg er {alder} ar gammel")
\`\`\`

Her bruker vi en **f-streng** -- legg merke til \`f\` foran anforseltegnene. Alt inni krøllparentesene \`{}\` erstattes med verdien av variabelen. Resultatet blir: \`Jeg er 14 ar gammel\`.

Vi kan ogsa ta imot input fra brukeren med \`input()\`:

\`\`\`python
radius = float(input("Skriv inn radiusen: "))
areal = 3.14159 * radius ** 2
print(f"Arealet er {areal:.2f}")
\`\`\`

\`input()\` gir alltid tekst tilbake, sa vi bruker \`float()\` for a gjore den om til et desimaltall. Tegnet \`**\` betyr «opphøyd i», sa \`radius ** 2\` er $r^2$.`,
    },

    {
      id: '9-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa variabler og print:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-1-n-quiz1-q0',
            task: 'Hva skriver dette programmet ut?\n\n```python\na = 5\nb = 3\nprint(a + b)\n```',
            options: [
              { id: 'a', text: '`a + b`', isCorrect: false },
              { id: 'b', text: '`8`', isCorrect: true },
              { id: 'c', text: '`53`', isCorrect: false },
              { id: 'd', text: '`ab`', isCorrect: false },
            ],
            solution: 'Python regner ut verdien av `a + b = 5 + 3 = 8` og skriver ut resultatet. Det er ikke tekst, sa det blir ikke \"a + b\" -- det er et regnestykke.',
          },
          {
            id: '9-11-1-n-quiz1-q1',
            task: 'Hva er resultatet av `float(input("Tall: "))` nar brukeren skriver inn `7`?',
            options: [
              { id: 'a', text: 'Teksten `"7"`', isCorrect: false },
              { id: 'b', text: 'Heltallet `7`', isCorrect: false },
              { id: 'c', text: 'Desimaltallet `7.0`', isCorrect: true },
              { id: 'd', text: 'En feilmelding', isCorrect: false },
            ],
            solution: '`input()` gir alltid tekst tilbake (strengen `"7"`). Nar vi pakker den inn i `float()`, blir den konvertert til desimaltallet `7.0`.',
          },
          {
            id: '9-11-1-n-quiz1-q2',
            task: 'Hva betyr `**` i Python?',
            options: [
              { id: 'a', text: 'Multiplikasjon', isCorrect: false },
              { id: 'b', text: 'Divisjon', isCorrect: false },
              { id: 'c', text: 'Opphoyd i (potens)', isCorrect: true },
              { id: 'd', text: 'Modulo (rest ved divisjon)', isCorrect: false },
            ],
            solution: '`**` er potensoperatoren i Python. For eksempel er `3 ** 2` det samme som $3^2 = 9$. Multiplikasjon er `*`, divisjon er `/`, og modulo er `%`.',
          },
        ],
      },
    },

    {
      id: '9-11-1-n-section2',
      type: 'text',
      content: `## Betingelser -- nar programmet tar valg

Sa langt har programmene vare gjort det samme hver gang. Men hva om vi vil at programmet skal **reagere forskjellig** avhengig av hva som skjer? Da trenger vi **betingelser** -- Python-versjonen av «hvis ... sa».

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\`

Her sjekker Python forst om \`tall > 0\`. Hvis ja, skriver den ut «Tallet er positivt» og hopper over resten. Hvis nei, sjekker den neste betingelse (\`elif\` er kort for «else if»). Til slutt har vi \`else\`, som fanger opp alt annet.

Legg merke til **innrykket** (4 mellomrom) etter kolon. Python bruker innrykk for a vise hvilken kode som horer til betingelsen. Glemmer du innrykket, far du en feilmelding.

En veldig nyttig operator her er **modulo** (\`%\`), som gir resten ved divisjon. For eksempel:
- \`10 % 3\` gir \`1\` (fordi $10 = 3 \\cdot 3 + 1$)
- \`15 % 5\` gir \`0\` (fordi $15 = 5 \\cdot 3$ gar opp)

Modulo er perfekt for a sjekke delbarhet: \`tall % 2 == 0\` betyr «tallet er et partall».`,
    },

    {
      id: '9-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa betingelser og modulo:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-1-n-quiz2-q0',
            task: 'Hva er verdien av `17 % 5`?',
            options: [
              { id: 'a', text: '`3`', isCorrect: false },
              { id: 'b', text: '`2`', isCorrect: true },
              { id: 'c', text: '`3.4`', isCorrect: false },
              { id: 'd', text: '`5`', isCorrect: false },
            ],
            solution: '$17 = 5 \\cdot 3 + 2$, sa resten er $2$. Modulo-operatoren gir nettopp denne resten.',
          },
          {
            id: '9-11-1-n-quiz2-q1',
            task: 'Hva skriver dette programmet ut nar `x = 12`?\n\n```python\nif x % 3 == 0 and x % 4 == 0:\n    print("A")\nelif x % 3 == 0:\n    print("B")\nelse:\n    print("C")\n```',
            options: [
              { id: 'a', text: '`A`', isCorrect: true },
              { id: 'b', text: '`B`', isCorrect: false },
              { id: 'c', text: '`C`', isCorrect: false },
              { id: 'd', text: '`A` og `B`', isCorrect: false },
            ],
            solution: '$12 \\div 3 = 4$ (rest $0$) og $12 \\div 4 = 3$ (rest $0$). Begge betingelsene er oppfylt, sa \`and\` gir \`True\`. Programmet skriver ut \`A\` og hopper over resten.',
          },
        ],
      },
    },

    {
      id: '9-11-1-n-section3',
      type: 'text',
      content: `## Lokker -- gjenta uten a bli sliten

Tenk deg at du skal beregne $1 + 2 + 3 + \\ldots + 100$. For hand ville det tatt evig tid. Men med en **lokke** kan Python gjore det pa et millisekund.

Python har to typer lokker:

**For-lokken** brukes nar du vet hvor mange ganger du vil gjenta noe:

\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i
print(f"Summen er {total}")
\`\`\`

\`range(1, 101)\` gir tallene $1, 2, 3, \\ldots, 100$. Merk: det siste tallet (101) er **ikke** med -- Python stopper rett for. For hvert tall \`i\` legger vi det til variabelen \`total\`. Etter lokken skriver vi ut summen: \`5050\`. Vi kan sjekke med Gauss' formel: $\\frac{100 \\cdot 101}{2} = 5050$.

**While-lokken** brukes nar du vil gjenta sa lenge en betingelse er sann:

\`\`\`python
tall = 1
while tall <= 10:
    print(tall)
    tall = tall + 1
\`\`\`

Her skriver Python ut tallene 1 til 10. **Viktig:** Du ma huske a oppdatere \`tall\` i hvert steg, ellers kjorer lokken for alltid!`,
    },

    {
      id: '9-11-1-n-section4',
      type: 'text',
      content: `## Lister -- samle data pa ett sted

Noen ganger trenger du a lagre mange verdier. I stedet for a lage hundre variabler, kan du bruke en **liste**:

\`\`\`python
karakterer = [5, 4, 6, 3, 5, 4]
\`\`\`

En liste lages med hakeparenteser og kan inneholde sa mange elementer du vil. Du far tak i enkeltelementer med indeks (som starter pa 0):

\`\`\`python
print(karakterer[0])   # Skriver ut 5 (forste element)
print(karakterer[2])   # Skriver ut 6 (tredje element)
\`\`\`

Du kan ga gjennom alle elementene i en liste med en for-lokke:

\`\`\`python
total = 0
for k in karakterer:
    total = total + k
snitt = total / len(karakterer)
print(f"Gjennomsnittet er {snitt}")
\`\`\`

\`len(karakterer)\` gir antall elementer i listen (her: 6). Sa dette programmet beregner gjennomsnittskarakteren!

Lister er fantastisk nyttige i matematikk -- du kan lagre malinger, terningkast, eller hele datasett, og sa analysere dem med lokker.`,
    },

    {
      id: '9-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa lokker og lister:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-1-n-quiz3-q0',
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
            id: '9-11-1-n-quiz3-q1',
            task: 'Gitt listen `tall = [10, 20, 30, 40]`, hva er `tall[1]`?',
            options: [
              { id: 'a', text: '`10`', isCorrect: false },
              { id: 'b', text: '`20`', isCorrect: true },
              { id: 'c', text: '`30`', isCorrect: false },
              { id: 'd', text: '`1`', isCorrect: false },
            ],
            solution: 'Indekser i Python starter pa 0. Sa `tall[0]` er `10`, `tall[1]` er `20`, `tall[2]` er `30`, osv.',
          },
          {
            id: '9-11-1-n-quiz3-q2',
            task: 'Hva er `len([3, 7, 2, 9, 1])`?',
            options: [
              { id: 'a', text: '`9`', isCorrect: false },
              { id: 'b', text: '`22`', isCorrect: false },
              { id: 'c', text: '`5`', isCorrect: true },
              { id: 'd', text: '`4`', isCorrect: false },
            ],
            solution: '`len()` gir antall elementer i listen. Listen har 5 elementer: 3, 7, 2, 9 og 1.',
          },
        ],
      },
    },

    {
      id: '9-11-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har tatt de forste stegene i Python-programmering:

- **Variabler** lagrer verdier med navn (\`alder = 14\`)
- **print()** viser resultater, og **f-strenger** gir pen formatering
- **input()** lar brukeren skrive inn data
- **Betingelser** (\`if/elif/else\`) lar programmet ta valg
- **Modulo** (\`%\`) gir resten ved divisjon -- perfekt for a sjekke delbarhet
- **For-lokker** gjentar kode et bestemt antall ganger
- **While-lokker** gjentar kode sa lenge en betingelse er sann
- **Lister** samler mange verdier pa ett sted

Med disse verktoyene har du allerede nok til a skrive programmer som beregner areal, sjekker primtall, summerer tallrekker og analyserer data. I neste kapittel skal vi bruke Python til noe virkelig goy: simulering av tilfeldige forsok!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.2 NARRATIV: Simulering av tilfeldige forsøk
// ============================================================================

export const CHAPTER_9_11_2_NARRATIV: TextbookChapter = {
  id: '9-11-2-narrativ',
  courseId: '9',
  chapterNumber: '11.2',
  title: 'Simulering av tilfeldige forsøk',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende reise inn i simuleringens verden der vi lar datamaskinen kaste terninger, snu mynter og utforske sannsynlighet -- med overraskende resultater som bursdagsparadokset og Monty Hall-problemet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  linkedChapterId: '9-11-2',
  content: [
    {
      id: '9-11-2-n-intro',
      type: 'text',
      content: `## La datamaskinen kaste terningen

Forestill deg at du vil finne ut hvor sannsynlig det er a sla to seksere med to terninger. Du kan selvfolgelig sette deg ned og beregne det teoretisk -- men du kan ogsa la datamaskinen gjore forsokat for deg. Ikke bare en gang, men **hundre tusen ganger**.

Denne metoden kalles **simulering**, og den er et av de kraftigste verktoyene i moderne matematikk og vitenskap. Vaermeldinger, medisinsk forskning, okonomiske prognoser -- alt bruker simulering. Og det beste er at det er overraskende enkelt a komme i gang med Python.`,
    },

    {
      id: '9-11-2-n-section1',
      type: 'text',
      content: `## random-modulen -- tilfeldighetens verktoy

For a simulere tilfeldige forsok trenger vi tilfeldige tall. Python har en innebygd modul for dette som heter \`random\`:

\`\`\`python
import random

# Simuler et terningkast
terning = random.randint(1, 6)
print(f"Du slo {terning}")
\`\`\`

\`random.randint(1, 6)\` gir et tilfeldig heltall mellom 1 og 6 -- akkurat som en ekte terning. Hver gang du kjorer programmet, far du (sannsynligvis) et annet tall.

Na kan vi simulere mange kast og **telle** hvor ofte en bestemt hendelse inntreffer:

\`\`\`python
import random

antall_kast = 10000
antall_seksere = 0

for i in range(antall_kast):
    kast = random.randint(1, 6)
    if kast == 6:
        antall_seksere += 1

simulert = antall_seksere / antall_kast
print(f"Simulert P(sekser) = {simulert:.4f}")
print(f"Teoretisk P(sekser) = {1/6:.4f}")
\`\`\`

Den **simulerte sannsynligheten** er antall gunstige utfall delt pa totalt antall forsok:

$$P(A) \\approx \\frac{k}{n}$$

Med 10 000 kast far vi typisk noe naert $\\frac{1}{6} \\approx 0{,}1667$, men ikke eksakt likt. Og det er helt normalt -- simulering gir et **estimat**, ikke et eksakt svar.`,
    },

    {
      id: '9-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa simulering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-2-n-quiz1-q0',
            task: 'Hva gjor `random.randint(1, 6)` i Python?',
            options: [
              { id: 'a', text: 'Gir alltid tallet 6', isCorrect: false },
              { id: 'b', text: 'Gir et tilfeldig desimaltall mellom 1 og 6', isCorrect: false },
              { id: 'c', text: 'Gir et tilfeldig heltall fra 1 til 6 (inkludert begge)', isCorrect: true },
              { id: 'd', text: 'Gir et tilfeldig heltall fra 1 til 5', isCorrect: false },
            ],
            solution: '`random.randint(1, 6)` gir et tilfeldig heltall der bade 1 og 6 er mulige verdier -- akkurat som en vanlig terning.',
          },
          {
            id: '9-11-2-n-quiz1-q1',
            task: 'Du simulerer 10 000 terningkast og far 1 653 seksere. Hva er den simulerte sannsynligheten for sekser?',
            options: [
              { id: 'a', text: '$0{,}1653$', isCorrect: true },
              { id: 'b', text: '$1{,}653$', isCorrect: false },
              { id: 'c', text: '$0{,}01653$', isCorrect: false },
              { id: 'd', text: '$16{,}53$', isCorrect: false },
            ],
            solution: 'Den simulerte sannsynligheten er $\\frac{k}{n} = \\frac{1653}{10\\,000} = 0{,}1653$. Dette er naert den teoretiske verdien $\\frac{1}{6} \\approx 0{,}1667$.',
          },
        ],
      },
    },

    {
      id: '9-11-2-n-section2',
      type: 'text',
      content: `## Store talls lov -- jo flere, jo bedre

Her er et viktig poeng: med bare 10 kast kan du fa helt ville resultater. Kanskje 0 seksere, kanskje 4. Men med 100 000 kast vil den simulerte sannsynligheten nesten alltid ligge veldig naert den teoretiske.

Dette kalles **store talls lov**: nar du gjentar et tilfeldig forsok mange nok ganger, vil den relative frekvensen naerme seg den teoretiske sannsynligheten.

$$\\frac{k}{n} \\to P(A) \\quad \\text{nar } n \\to \\infty$$

Vi kan demonstrere dette med myntkast:

\`\`\`python
import random

for antall_kast in [10, 100, 1000, 10000, 100000]:
    mynt = 0
    for i in range(antall_kast):
        if random.randint(0, 1) == 1:
            mynt += 1
    print(f"n = {antall_kast:>7}: P(mynt) = {mynt/antall_kast:.4f}")
\`\`\`

Typisk resultat:
\`\`\`
n =      10: P(mynt) = 0.6000
n =     100: P(mynt) = 0.4700
n =    1000: P(mynt) = 0.5130
n =   10000: P(mynt) = 0.4987
n =  100000: P(mynt) = 0.5003
\`\`\`

Med 10 kast svinger det mye. Med 100 000 kast er vi nesten noyaktig pa 0,5. Store talls lov i aksjon!`,
    },

    {
      id: '9-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa store talls lov:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-2-n-quiz2-q0',
            task: 'Hva sier store talls lov?',
            options: [
              { id: 'a', text: 'Store tall er alltid mer sannsynlige enn sma tall', isCorrect: false },
              { id: 'b', text: 'Med mange nok forsok naermer simulert sannsynlighet seg den teoretiske', isCorrect: true },
              { id: 'c', text: 'Datamaskiner regner alltid riktig', isCorrect: false },
              { id: 'd', text: 'Jo flere forsok du gjor, desto storre blir tallene', isCorrect: false },
            ],
            solution: 'Store talls lov sier at den relative frekvensen (simulert sannsynlighet) naermer seg den teoretiske sannsynligheten nar antall forsok oker.',
          },
          {
            id: '9-11-2-n-quiz2-q1',
            task: 'Du kaster en mynt 20 ganger og far 14 mynt. Er dette bevis for at mynten er urettferdig?',
            options: [
              { id: 'a', text: 'Ja, 14 av 20 er langt fra 50 %', isCorrect: false },
              { id: 'b', text: 'Nei, med sa fa kast er store avvik helt normalt', isCorrect: true },
              { id: 'c', text: 'Ja, sannsynligheten burde vaert noyaktig 10', isCorrect: false },
              { id: 'd', text: 'Vi kan aldri vite om en mynt er rettferdig', isCorrect: false },
            ],
            solution: 'Med bare 20 kast er det helt normalt a avvike mye fra 50 %. Store talls lov sier at vi trenger mange forsok for a fa pålitelige estimater. 14 av 20 er ikke uvanlig for en rettferdig mynt.',
          },
        ],
      },
    },

    {
      id: '9-11-2-n-section3',
      type: 'text',
      content: `## Sammensatte forsok -- nar det blir spennende

Simulering er spesielt nyttig for **sammensatte forsok** der det er vanskelig a beregne sannsynligheten teoretisk. La oss se pa et klassisk eksempel: summen av to terninger.

\`\`\`python
import random

antall_forsok = 100000
antall_sju = 0

for i in range(antall_forsok):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    if terning1 + terning2 == 7:
        antall_sju += 1

print(f"P(sum = 7) = {antall_sju/antall_forsok:.4f}")
\`\`\`

Resultatet blir omtrent $0{,}1667$, som stemmer med den teoretiske verdien $\\frac{6}{36} = \\frac{1}{6}$. Det finnes nemlig 6 kombinasjoner som gir summen 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, av totalt $36$ mulige utfall.

Men hva med virkelig kompliserte problemer? Ta **bursdagsparadokset**: I en klasse med 23 elever, hva er sannsynligheten for at minst to deler bursdag? Svaret er over 50 % -- noe de fleste finner helt utrolig. Med simulering kan vi verifisere dette:

\`\`\`python
import random

treff = 0
for i in range(100000):
    bursdager = [random.randint(1, 365) for _ in range(23)]
    if len(bursdager) != len(set(bursdager)):
        treff += 1

print(f"P(felles bursdag) = {treff/100000:.4f}")
\`\`\`

Resultatet? Omtrent $0{,}507$ -- altsaa rett over 50 %. Simuleringen bekrefter det overraskende teoretiske svaret!`,
    },

    {
      id: '9-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa sammensatte forsok:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-2-n-quiz3-q0',
            task: 'Hvor mange mulige utfall er det nar du kaster to terninger?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$36$', isCorrect: true },
              { id: 'c', text: '$6$', isCorrect: false },
              { id: 'd', text: '$11$', isCorrect: false },
            ],
            solution: 'Forste terning har 6 mulige utfall, andre terning har 6 mulige utfall. Totalt: $6 \\times 6 = 36$ kombinasjoner.',
          },
          {
            id: '9-11-2-n-quiz3-q1',
            task: 'I bursdagsparadokset: Med 23 personer i et rom, er sannsynligheten for at minst to deler bursdag...',
            options: [
              { id: 'a', text: 'Under 10 %', isCorrect: false },
              { id: 'b', text: 'Omtrent 23 %', isCorrect: false },
              { id: 'c', text: 'Litt over 50 %', isCorrect: true },
              { id: 'd', text: 'Naer 100 %', isCorrect: false },
            ],
            solution: 'Overraskende nok er sannsynligheten litt over 50 % (ca. 50,7 %). De fleste tror den er mye lavere, og det er nettopp det som gjor det til et «paradoks».',
          },
          {
            id: '9-11-2-n-quiz3-q2',
            task: 'Hva gjor `set()` nar den brukes pa en liste i Python?',
            options: [
              { id: 'a', text: 'Sorterer listen', isCorrect: false },
              { id: 'b', text: 'Fjerner duplikater (beholder bare unike elementer)', isCorrect: true },
              { id: 'c', text: 'Teller antall elementer', isCorrect: false },
              { id: 'd', text: 'Summerer alle elementene', isCorrect: false },
            ],
            solution: '`set()` fjerner duplikater. Hvis `len(set(liste)) < len(liste)`, betyr det at listen hadde minst to like elementer. Det er slik vi sjekker for felles bursdager.',
          },
        ],
      },
    },

    {
      id: '9-11-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket hvordan Python kan brukes til a simulere tilfeldige forsok:

- **random-modulen** gir oss tilfeldige tall (\`random.randint(a, b)\`)
- En **simulering** gjentar et forsok mange ganger og estimerer sannsynligheter
- **Simulert sannsynlighet** $\\approx \\frac{\\text{gunstige utfall}}{\\text{totalt antall forsok}}$
- **Store talls lov** garanterer at estimatet blir bedre jo flere forsok vi gjor
- **Sammensatte forsok** (to terninger, kuletrekking, bursdagsparadokset) er enkle a simulere men kan vaere vanskelige a beregne teoretisk

Simulering er et uunnvaerlig verktoy i moderne vitenskap. Vaermeldinger, medisinsk forskning og finansanalyse -- alt bruker simulering for a handtere usikkerhet. Du har na verktoyene til a gjore det samme!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3 NARRATIV: Matematisk modellering med kode
// ============================================================================

export const CHAPTER_9_11_3_NARRATIV: TextbookChapter = {
  id: '9-11-3-narrativ',
  courseId: '9',
  chapterNumber: '11.3',
  title: 'Matematisk modellering med kode',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hvordan Python kan brukes til a modellere vekst, lose likninger og utforske matematiske sammenhenger -- fra spareplaner og smittespredning til Fibonacci-tallene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke programmering til å utforske matematiske eigenskapar og samanhengar og til å utforske sannsyn',
  ],
  linkedChapterId: '9-11-3',
  content: [
    {
      id: '9-11-3-n-intro',
      type: 'text',
      content: `## Nar matematikken blir levende

I matematikk lager vi ofte **modeller** -- forenklede beskrivelser av virkeligheten. En modell kan fortelle oss hvordan en befolkning vokser, hvordan penger oker pa en sparekonto, eller hvordan en sykdom sprer seg.

Med papir og blyant kan du kanskje beregne 5--10 tidspunkter for du gir opp. Men med Python kan du beregne tusenvis av tidspunkter pa et oyeblikk, lage tabeller, og finne noyaktig nar noe viktig skjer. La oss utforske to grunnleggende vekstmodeller og se hvordan programmering gjor dem levende.`,
    },

    {
      id: '9-11-3-n-section1',
      type: 'text',
      content: `## Lineaer vekst -- jevnt og trutt

Den enkleste modellen er **lineaer vekst**: noe oker med et **fast belop** for hvert tidssteg. Matematisk skriver vi dette som:

$$y = ax + b$$

der $a$ er den faste endringen per steg (stigningstallet) og $b$ er startverdien.

Tenk pa en sparebosse der du putter inn 500 kr hver maned. Har du 2000 kr fra for, sa har du etter $x$ maneder:

$$y = 500x + 2000$$

Med Python kan vi lage en hel tabell:

\`\`\`python
saldo = 2000
innskudd = 500

print(f"Start: {saldo} kr")
for maned in range(1, 13):
    saldo = saldo + innskudd
    print(f"Maned {maned:>2}: {saldo} kr")
\`\`\`

Pa 12 maneder har du $2000 + 12 \\cdot 500 = 8000$ kr. Enkelt og forutsigbart -- det er lineaer vekst i et notteskall.

Men nar nar du 10 000 kr? Med en while-lokke kan Python finne svaret:

\`\`\`python
saldo = 2000
maned = 0
while saldo < 10000:
    saldo += 500
    maned += 1
print(f"Du nar 10 000 etter {maned} maneder")
\`\`\`

Svaret er 16 maneder. Vi kan verifisere: $500 \\cdot 16 + 2000 = 10\\,000$. Stemmer!`,
    },

    {
      id: '9-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa lineaer vekst:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-3-n-quiz1-q0',
            task: 'En bil kjorer med konstant fart 80 km/t. Hvor langt har den kjort etter 3 timer?',
            options: [
              { id: 'a', text: '$160$ km', isCorrect: false },
              { id: 'b', text: '$240$ km', isCorrect: true },
              { id: 'c', text: '$320$ km', isCorrect: false },
              { id: 'd', text: '$83$ km', isCorrect: false },
            ],
            solution: 'Lineaer vekst med $s = 80t$. Etter 3 timer: $s = 80 \\cdot 3 = 240$ km.',
          },
          {
            id: '9-11-3-n-quiz1-q1',
            task: 'Du sparer 300 kr i maneden og starter med 1000 kr. Hvilken formel beskriver saldoen etter $x$ maneder?',
            options: [
              { id: 'a', text: '$y = 1000 \\cdot 300^x$', isCorrect: false },
              { id: 'b', text: '$y = 300x + 1000$', isCorrect: true },
              { id: 'c', text: '$y = 1000x + 300$', isCorrect: false },
              { id: 'd', text: '$y = 1300x$', isCorrect: false },
            ],
            solution: 'Lineaer vekst: $y = ax + b$ der $a = 300$ (fast okning per maned) og $b = 1000$ (startverdi). Altsaa $y = 300x + 1000$.',
          },
        ],
      },
    },

    {
      id: '9-11-3-n-section2',
      type: 'text',
      content: `## Eksponentiell vekst -- nar det akselererer

Tenk pa penger i banken med rente. Hvis du har 5000 kr og far 3 % arlig rente, sa far du forste ar $5000 \\cdot 0{,}03 = 150$ kr i rente. Men andre ar far du rente pa 5150 kr, altsaa $5150 \\cdot 0{,}03 = 154{,}50$ kr. Renten oker hvert ar fordi du far **rente pa renten**!

Dette er **eksponentiell vekst**: en storrelse oker med en **fast prosentandel** for hvert tidssteg. Modellen er:

$$y = a \\cdot b^x$$

der $a$ er startverdien og $b$ er **vekstfaktoren**. For 3 % vekst er $b = 1 + \\frac{3}{100} = 1{,}03$.

I Python:

\`\`\`python
saldo = 5000
vekstfaktor = 1.03

for aar in range(1, 21):
    saldo = saldo * vekstfaktor
    print(f"Ar {aar:>2}: {saldo:.2f} kr")
\`\`\`

Etter 20 ar: $5000 \\cdot 1{,}03^{20} \\approx 9030{,}56$ kr. Pengene har nesten doblet seg!

En tommelfingerregel sier at doblingstiden er omtrent $\\frac{72}{p}$ ar, der $p$ er rentesatsen i prosent. Med 3 % rente: $\\frac{72}{3} = 24$ ar.

Forskjellen mellom lineaer og eksponentiell vekst er dramatisk over tid. Lineaer vekst oker jevnt. Eksponentiell vekst starter sakte, men akselererer og tar til slutt fullstendig av.`,
    },

    {
      id: '9-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa eksponentiell vekst:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-3-n-quiz2-q0',
            task: 'En by har 20 000 innbyggere og vokser med 5 % per ar. Hva er vekstfaktoren?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$0{,}05$', isCorrect: false },
              { id: 'c', text: '$1{,}05$', isCorrect: true },
              { id: 'd', text: '$1{,}5$', isCorrect: false },
            ],
            solution: 'Vekstfaktoren er $b = 1 + \\frac{p}{100} = 1 + \\frac{5}{100} = 1{,}05$. Vi ganger med $1{,}05$ for hvert ar.',
          },
          {
            id: '9-11-3-n-quiz2-q1',
            task: 'Hva betyr `saldo = saldo * 1.03` i Python?',
            options: [
              { id: 'a', text: 'Legger til 3 kr', isCorrect: false },
              { id: 'b', text: 'Oker saldoen med 3 %', isCorrect: true },
              { id: 'c', text: 'Ganger saldoen med 3', isCorrect: false },
              { id: 'd', text: 'Setter saldoen til 1.03', isCorrect: false },
            ],
            solution: 'A gange med $1{,}03$ er det samme som a legge til 3 %. Hvis saldoen er 1000 kr, blir den $1000 \\cdot 1{,}03 = 1030$ kr -- altsaa 30 kr (3 %) mer.',
          },
          {
            id: '9-11-3-n-quiz2-q2',
            task: 'Med tommelfingerregelen $\\frac{72}{p}$: Omtrent hvor lang tid tar det a doble pengene med 6 % arlig rente?',
            options: [
              { id: 'a', text: 'Ca. 6 ar', isCorrect: false },
              { id: 'b', text: 'Ca. 12 ar', isCorrect: true },
              { id: 'c', text: 'Ca. 72 ar', isCorrect: false },
              { id: 'd', text: 'Ca. 36 ar', isCorrect: false },
            ],
            solution: '$\\frac{72}{6} = 12$ ar. Med 6 % arlig rente dobles pengene pa omtrent 12 ar.',
          },
        ],
      },
    },

    {
      id: '9-11-3-n-section3',
      type: 'text',
      content: `## Lose likninger med systematisk proving

Noen likninger er vanskelige a lose for hand, men med Python kan vi finne **tilnaermede losninger** ved a prove mange verdier. Metoden kalles **numerisk losning**.

La oss finne $\\sqrt[3]{100}$ -- altsaa det tallet $x$ der $x^3 = 100$:

\`\`\`python
beste_x = 0
minste_avvik = 1000

for i in range(10001):
    x = i / 1000    # Verdier fra 0.000 til 10.000
    avvik = abs(x**3 - 100)
    if avvik < minste_avvik:
        minste_avvik = avvik
        beste_x = x

print(f"x = {beste_x:.3f}")
print(f"Sjekk: {beste_x}^3 = {beste_x**3:.3f}")
\`\`\`

Python prover 10 001 verdier og finner den som gir $x^3$ naermest $100$. Svaret er $x \\approx 4{,}642$. Jo flere verdier vi prover, desto mer noyaktig blir svaret.

Denne metoden er overraskende kraftig. Vi kan ogsa bruke den til a finne nar ting skjer, som nar en spareplan nar et mal eller nar en eksponentiell vekst krysser en lineaer vekst.`,
    },

    {
      id: '9-11-3-n-section4',
      type: 'text',
      content: `## Utforske matematiske monstre

En av de goyeste tingene med programmering er a utforske matematiske monstre. La oss se pa **Fibonacci-tallene**: $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$ -- der hvert tall er summen av de to forrige.

\`\`\`python
a, b = 1, 1
for i in range(20):
    print(f"F({i+1}) = {a}")
    a, b = b, a + b
\`\`\`

Noe magisk skjer nar vi beregner forholdet mellom pafolgende Fibonacci-tall:

$$\\frac{F_{n+1}}{F_n} \\to \\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}6180$$

Dette tallet kalles **det gylne snitt** og dukker opp overalt -- i naturen, i kunst og i arkitektur.

Programmering lar oss oppdage slike monstre fordi vi raskt kan beregne hundrevis av verdier og se hva som skjer. Det er matematisk utforskning pa sitt beste!`,
    },

    {
      id: '9-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa modellering og monstre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-11-3-n-quiz3-q0',
            task: 'Hva er forskjellen mellom lineaer og eksponentiell vekst?',
            options: [
              { id: 'a', text: 'Lineaer vekst er alltid raskere', isCorrect: false },
              { id: 'b', text: 'Lineaer oker med fast belop, eksponentiell oker med fast prosent', isCorrect: true },
              { id: 'c', text: 'Eksponentiell vekst avtar over tid', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Lineaer vekst oker med et fast belop (f.eks. 500 kr/maned). Eksponentiell vekst oker med en fast prosentandel (f.eks. 3 % per ar), noe som gjor at selve okningen blir storre og storre.',
          },
          {
            id: '9-11-3-n-quiz3-q1',
            task: 'Hva er det 7. Fibonacci-tallet? (Start: 1, 1, 2, 3, 5, ...)',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$13$', isCorrect: true },
              { id: 'c', text: '$21$', isCorrect: false },
              { id: 'd', text: '$11$', isCorrect: false },
            ],
            solution: 'Fibonacci-tallene: $1, 1, 2, 3, 5, 8, 13, \\ldots$ Det 7. tallet er $13$ (fordi $5 + 8 = 13$).',
          },
          {
            id: '9-11-3-n-quiz3-q2',
            task: 'Hva betyr «numerisk losning» av en likning?',
            options: [
              { id: 'a', text: 'A lose likningen for hand', isCorrect: false },
              { id: 'b', text: 'A prove mange verdier systematisk og finne den beste tilnaermelsen', isCorrect: true },
              { id: 'c', text: 'A bruke en kalkulator', isCorrect: false },
              { id: 'd', text: 'A gjette tilfeldig', isCorrect: false },
            ],
            solution: 'Numerisk losning betyr a prove mange verdier systematisk (f.eks. med en lokke) og finne den verdien som gir det minste avviket. Det er ikke tilfeldig gjetting -- det er organisert, systematisk proving.',
          },
        ],
      },
    },

    {
      id: '9-11-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har sett hvordan Python gjor matematiske modeller levende:

- **Lineaer vekst** ($y = ax + b$): fast okning per steg. Grafen er en rett linje.
- **Eksponentiell vekst** ($y = a \\cdot b^x$): prosentvis okning per steg. Vekstfaktoren er $b = 1 + \\frac{p}{100}$.
- **Doblingstid** kan estimeres med $\\frac{72}{p}$ ar.
- **Numerisk losning**: prove mange verdier med en lokke for a finne tilnaermede svar.
- **Fibonacci-tallene** viser hvordan programmering avslorer skjulte monstre (det gylne snitt).

Med programmering handler ikke matematikk bare om a finne riktig svar -- det handler om a **utforske**, **eksperimentere** og **oppdage**. Datamaskinen er din laboratoriepartner i denne utforskningen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL11_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_11_1_NARRATIV,
  CHAPTER_9_11_2_NARRATIV,
  CHAPTER_9_11_3_NARRATIV,
];

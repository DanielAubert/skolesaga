/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 3: Algoritmer og problemløsning (Kapittel 3.1–3.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Hva er en algoritme?
// ============================================================================

export const CHAPTER_IT_1_3_1: TextbookChapter = {
  id: 'it-1-3-1',
  courseId: 'it-1',
  chapterNumber: '3.1',
  title: 'Hva er en algoritme?',
  description: 'Lær hva en algoritme er, hvorfor algoritmer er viktige i informatikk og dagliglivet, og hvordan du kan beskrive algoritmer på en presis og entydig måte.',
  estimatedMinutes: 50,
  prevChapter: 'it-1-2-6',
  nextChapter: 'it-1-3-2',
  competenceGoals: [
    'forklare hva en algoritme er og gi eksempler fra dagliglivet og programmering',
    'beskrive egenskapene til en god algoritme',
    'oversette enkle algoritmer fra naturlig språk til Python-kode',
  ],
  keyTerms: [
    { term: 'Algoritme', definition: 'En presis, trinnvis oppskrift for å løse et bestemt problem eller utføre en oppgave. Algoritmen må være entydig, endelig og gi et korrekt resultat for alle gyldige inndata.' },
    { term: 'Inndata (input)', definition: 'Data som en algoritme mottar som utgangspunkt for beregningen. For eksempel kan inndata til en sorteringsalgoritme være en usortert liste med tall.' },
    { term: 'Utdata (output)', definition: 'Resultatet som en algoritme produserer etter at den har prosessert inndataene. For eksempel vil utdata fra en sorteringsalgoritme være den sorterte listen.' },
    { term: 'Sekvens', definition: 'En serie instruksjoner som utføres i rekkefølge, den ene etter den andre. Sekvens er den enkleste kontrollstrukturen i programmering.' },
    { term: 'Betingelse (valg)', definition: 'En kontrollstruktur der programmet velger mellom ulike handlinger basert på om en betingelse er sann eller usann. I Python brukes if-elif-else for betingelser.' },
    { term: 'Iterasjon (løkke)', definition: 'En kontrollstruktur der en gruppe instruksjoner gjentas flere ganger, enten et bestemt antall ganger eller til en betingelse er oppfylt. I Python brukes for- og while-løkker.' },
    { term: 'Entydighet', definition: 'Egenskapen at hvert steg i en algoritme har én og bare én mulig tolkning. Det skal aldri være tvil om hva som skal gjøres i neste steg.' },
    { term: 'Terminering', definition: 'Egenskapen at en algoritme alltid vil stoppe etter et endelig antall steg. En algoritme som aldri stopper er ikke en gyldig algoritme.' },
  ],
  exercises: [],
  content: [
    {
      id: 'it-1-3-1-intro',
      type: 'text',
      content: `# Hva er en algoritme?

Har du noen gang fulgt en matoppskrift, bygget et LEGO-sett etter instruksjonene, eller forklart veien til noen? I så fall har du allerede brukt algoritmer uten å tenke over det. En algoritme er rett og slett en presis, trinnvis beskrivelse av hvordan en oppgave skal utføres. Begrepet er helt sentralt i informatikk og programmering, men det strekker seg langt utover datamaskiner.

I dette kapittelet skal vi utforske hva algoritmer er, hvilke egenskaper en god algoritme har, og hvordan vi kan bruke de tre grunnleggende kontrollstrukturene sekvens, betingelse og iterasjon til å bygge opp algoritmer som løser reelle problemer. Vi skal også se hvordan algoritmer kan oversettes direkte til Python-kode.

Ordet «algoritme» kommer fra navnet til den persiske matematikeren Muhammad ibn Musa al-Khwarizmi, som levde på 800-tallet. Han skrev lærebøker om matematikk og systematiske metoder for å løse likninger. Gjennom latinsk oversettelse ble navnet hans til «Algoritmi», og begrepet «algoritme» ble født. Det er fascinerende at et konsept som ble formalisert for over tusen år siden, er selve grunnsteinen i moderne datavitenskap.`,
    },
    {
      id: 'it-1-3-1-def-algoritme',
      type: 'definition',
      title: 'Algoritme',
      content: `En **algoritme** er en endelig, ordnet sekvens av presise og entydige instruksjoner for å løse et bestemt problem eller utføre en bestemt oppgave. Algoritmen tar imot inndata (input), prosesserer dem gjennom en serie steg, og produserer utdata (output). For at noe skal kalles en algoritme, må følgende krav være oppfylt: (1) hvert steg må være klart og entydig definert, (2) algoritmen må terminere etter et endelig antall steg, og (3) den må produsere et korrekt resultat for alle gyldige inndata.`,
    },
    {
      id: 'it-1-3-1-text-dagligliv',
      type: 'text',
      title: 'Algoritmer i dagliglivet',
      content: `## Algoritmer i dagliglivet

Du bruker algoritmer hele tiden, selv om du ikke tenker på det som det. Her er noen eksempler:

**Matoppskrift:** En oppskrift på pannekaker er en algoritme. Den har inndata (ingredienser: mel, egg, melk, sukker), en serie instruksjoner (bland mel og sukker, visp inn egg, tilsett melk, stek i panne), og utdata (ferdige pannekaker). Hvert steg er presist beskrevet, og rekkefølgen er viktig. Du kan ikke steke deigen før du har blandet den.

**Veibeskrivelse:** Når du forklarer veien fra skolen til nærmeste butikk, gir du en algoritme: «Gå ut av hovedinngangen. Ta til venstre. Gå rett frem i 200 meter. Ta til høyre ved lyskrysset. Butikken er 50 meter fremme på venstre side.» Hvert steg er entydig, og du vet når du er ferdig (du har kommet til butikken).

**Morgensrutine:** Å gjøre seg klar om morgenen følger en algoritme. Stå opp, dusj, kle på seg, spis frokost, puss tennene, ta på sko, gå til bussen. Endrer du rekkefølgen (tar på sko før du dusjer), fungerer det kanskje, men resultatet blir annerledes.

**Spill og strategi:** Å spille et brettspill krever at du følger regler i en bestemt rekkefølge. Reglene i et spill er i praksis en algoritme som beskriver hva som skal skje i hvert trekk.

Det som gjør algoritmer i informatikk spesielle, er at de må være så presise at en datamaskin kan følge dem. En datamaskin gjør nøyaktig det du ber den om. Den kan ikke tolke, gjette eller improvisere. Derfor må algoritmene vi skriver for datamaskiner, være helt entydige.`,
    },
    {
      id: 'it-1-3-1-example-1',
      type: 'example',
      title: 'Algoritme for å finne det største tallet',
      problem: `Beskriv en algoritme som finner det største av tre tall a, b og c.`,
      solution: `**Algoritme i naturlig språk:**
1. Les inn tre tall: a, b og c
2. Anta at a er det største tallet (kall det «størst»)
3. Hvis b er større enn «størst», oppdater «størst» til b
4. Hvis c er større enn «størst», oppdater «størst» til c
5. Skriv ut «størst»

**Implementasjon i Python:**

\`\`\`python
# Finn det største av tre tall
a = int(input("Skriv inn tall a: "))
b = int(input("Skriv inn tall b: "))
c = int(input("Skriv inn tall c: "))

storst = a

if b > storst:
    storst = b

if c > storst:
    storst = c

print(f"Det største tallet er {storst}")
\`\`\`

**Kjøring:**
\`\`\`
Skriv inn tall a: 7
Skriv inn tall b: 15
Skriv inn tall c: 3
Det største tallet er 15
\`\`\`

Legg merke til at algoritmen fungerer uansett hvilke tre tall du gir inn. Den sjekker systematisk hvert tall og oppdaterer «størst» om nødvendig. Dette er en viktig egenskap ved algoritmer: de skal gi korrekt resultat for alle gyldige inndata.`,
    },
    {
      id: 'it-1-3-1-text-egenskaper',
      type: 'text',
      title: 'Egenskapene til en god algoritme',
      content: `## Egenskapene til en god algoritme

Ikke alle instruksjoner kvalifiserer som en algoritme. For at noe skal være en algoritme i informatisk forstand, må det oppfylle flere krav:

**1. Entydighet (presisjon)**
Hvert steg i algoritmen må ha én og bare én mulig tolkning. Instruksjonen «tilsett litt salt» er tvetydig, for hva betyr «litt»? En presis instruksjon ville være «tilsett 5 gram salt». I programmering betyr dette at hver linje kode gjør nøyaktig én ting, og det er ingen tvil om hva den gjør.

**2. Terminering (endelighet)**
Algoritmen må alltid stoppe etter et endelig antall steg. Den kan ikke gå i en evig løkke. Instruksjonen «fortsett å lete til du finner svaret» er problematisk, for hva om svaret ikke finnes? En bedre formulering er «sjekk de neste 100 tallene, og rapporter om svaret ble funnet eller ikke».

**3. Korrekthet**
Algoritmen må produsere riktig svar for alle gyldige inndata. Det er ikke nok at den fungerer for noen tilfeller. En sorteringsalgoritme som sorterer [3, 1, 2] riktig, men feiler på [5, 5, 3], er ikke korrekt.

**4. Effektivitet**
En god algoritme bruker ressurser (tid og minne) fornuftig. Hvis du kan løse et problem med 10 steg i stedet for 1000, er den kortere versjonen bedre. Effektivitet blir spesielt viktig når vi jobber med store datamengder.

**5. Generalitet**
Algoritmen bør kunne håndtere en hel klasse av problemer, ikke bare ett spesifikt tilfelle. En algoritme for å finne det største tallet bør fungere for 3 tall, 100 tall eller 1 million tall, ikke bare for ett bestemt sett av verdier.`,
    },
    {
      id: 'it-1-3-1-def-kontrollstrukturer',
      type: 'definition',
      title: 'De tre kontrollstrukturene',
      content: `Alle algoritmer kan bygges opp av tre grunnleggende kontrollstrukturer: **sekvens** (instruksjoner som utføres i rekkefølge), **betingelse/valg** (instruksjoner som utføres bare hvis en betingelse er oppfylt) og **iterasjon/løkke** (instruksjoner som gjentas). Böhm og Jacopini beviste i 1966 at enhver algoritme kan uttrykkes med bare disse tre strukturene. Dette kalles strukturteoremet og er et av de viktigste resultatene i informatikk.`,
    },
    {
      id: 'it-1-3-1-text-sekvens',
      type: 'text',
      title: 'Sekvens',
      content: `## Sekvens

Sekvens er den enkleste kontrollstrukturen. Instruksjoner utføres i rekkefølge, den ene etter den andre, fra topp til bunn. Python-programmer kjøres som standard sekvensielt.

\`\`\`python
# Sekvens: beregn arealet av et rektangel
lengde = 8
bredde = 5
areal = lengde * bredde
print(f"Arealet er {areal} cm²")
\`\`\`

Her utføres linje 1 først, deretter linje 2, så linje 3, og til slutt linje 4. Rekkefølgen er avgjørende. Hvis vi prøver å beregne arealet før vi har definert lengde og bredde, får vi en feilmelding.

Sekvens alene er nok til å lage enkle programmer, men for å løse mer komplekse problemer trenger vi betingelser og løkker.`,
    },
    {
      id: 'it-1-3-1-text-betingelse',
      type: 'text',
      title: 'Betingelse (valg)',
      content: `## Betingelse (valg)

En betingelse lar programmet ta avgjørelser. Basert på om en betingelse er sann eller usann, velger programmet hvilken kode som skal kjøres. I Python bruker vi \`if\`, \`elif\` og \`else\`:

\`\`\`python
# Betingelse: sjekk om et tall er positivt, negativt eller null
tall = int(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\`

Betingelser gjør det mulig å lage programmer som reagerer ulikt på ulike inndata. Uten betingelser ville alle programmer gjøre nøyaktig det samme hver gang de kjøres, uansett hva brukeren skriver inn.

Et hverdagseksempel på en betingelse: «Hvis det regner, ta med paraply. Ellers, la paraplyen ligge.» Programmet sjekker en betingelse (regner det?) og utfører ulike handlinger basert på svaret.`,
    },
    {
      id: 'it-1-3-1-text-iterasjon',
      type: 'text',
      title: 'Iterasjon (løkke)',
      content: `## Iterasjon (løkke)

Iterasjon betyr å gjenta en gruppe instruksjoner flere ganger. I Python har vi to typer løkker:

**For-løkke** brukes når du vet på forhånd hvor mange ganger du vil gjenta:

\`\`\`python
# For-løkke: skriv ut tallene 1 til 5
for i in range(1, 6):
    print(i)
\`\`\`

**While-løkke** brukes når du vil gjenta så lenge en betingelse er sann:

\`\`\`python
# While-løkke: gjett et tall
hemmelig = 7
gjett = 0

while gjett != hemmelig:
    gjett = int(input("Gjett tallet (1-10): "))

print("Riktig! Du gjettet riktig!")
\`\`\`

Iterasjon er ekstremt kraftig. Uten løkker ville du måtte skrive samme kode tusenvis av ganger for å behandle store datamengder. Med en løkke kan du behandle én million tall med bare noen få linjer kode.

Et hverdagseksempel på iterasjon: «Rør i gryta hvert femte minutt til sausen tykner.» Du gjentar handlingen (rører) til en betingelse er oppfylt (sausen er tykk nok).`,
    },
    {
      id: 'it-1-3-1-example-2',
      type: 'example',
      title: 'Algoritme med alle tre kontrollstrukturene',
      problem: `Skriv en algoritme og et Python-program som sjekker om et tall fra brukeren er et primtall.`,
      solution: `**Algoritme:**
1. Les inn et tall n fra brukeren
2. Hvis n er mindre enn 2, er det IKKE et primtall. Stopp.
3. For hvert tall i fra 2 til n-1:
   a. Hvis n er delelig med i (n % i == 0), er n IKKE et primtall. Stopp.
4. Hvis ingen divisor ble funnet, ER n et primtall.

**Python-kode:**

\`\`\`python
# Sjekk om et tall er et primtall
n = int(input("Skriv inn et tall: "))

if n < 2:
    print(f"{n} er IKKE et primtall")
else:
    er_primtall = True

    for i in range(2, n):
        if n % i == 0:
            er_primtall = False
            break  # Ingen grunn til å sjekke flere

    if er_primtall:
        print(f"{n} ER et primtall")
    else:
        print(f"{n} er IKKE et primtall")
\`\`\`

**Kjøring:**
\`\`\`
Skriv inn et tall: 17
17 ER et primtall

Skriv inn et tall: 12
12 er IKKE et primtall
\`\`\`

Denne algoritmen bruker alle tre kontrollstrukturene: sekvens (linjene kjøres i rekkefølge), betingelse (if-setningen sjekker delbarhet), og iterasjon (for-løkken sjekker alle mulige divisorer). Nøkkelordet \`break\` avbryter løkken tidlig hvis vi finner en divisor, noe som gjør algoritmen mer effektiv.`,
    },
    {
      id: 'it-1-3-1-tip-1',
      type: 'tip',
      title: 'Tenk algoritme før kode',
      content: `En vanlig feil blant nybegynnere er å begynne å kode umiddelbart uten å tenke gjennom algoritmen først. Det er som å begynne å bygge et hus uten tegninger. Ta deg tid til å beskrive løsningen i naturlig språk eller som en punktliste før du åpner kodeeditoren. Når algoritmen er klar, er det ofte overraskende enkelt å oversette den til Python-kode.`,
    },
    {
      id: 'it-1-3-1-warning-1',
      type: 'warning',
      title: 'Pass opp for uendelige løkker',
      content: `En while-løkke som aldri stopper kalles en uendelig løkke. Dette skjer når betingelsen i løkken aldri blir usann. For eksempel:

\`\`\`python
# FEIL: Uendelig løkke!
x = 1
while x > 0:
    x = x + 1  # x blir bare større, aldri 0 eller negativ
\`\`\`

Denne løkken stopper aldri fordi x alltid er positiv. For å unngå dette, sørg alltid for at noe inne i løkken bringer deg nærmere avslutningsbetingelsen. Hvis programmet ditt henger, trykk **Ctrl+C** for å avbryte.`,
    },
    {
      id: 'it-1-3-1-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.1

**Hovedpunkter:**
- En algoritme er en presis, trinnvis oppskrift for å løse et problem
- Gode algoritmer er entydige, terminerer alltid, gir korrekt resultat, er effektive og generelle
- Alle algoritmer bygges opp av tre kontrollstrukturer: sekvens, betingelse og iterasjon
- Sekvens: instruksjoner utføres i rekkefølge
- Betingelse: programmet velger mellom ulike handlinger basert på en test
- Iterasjon: en gruppe instruksjoner gjentas
- Strukturteoremet sier at disse tre kontrollstrukturene er tilstrekkelige til å uttrykke enhver algoritme`,
    },
    {
      id: 'it-1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken av følgende er den beste definisjonen av en algoritme?`,
        options: [
          { id: 'a', text: 'Et dataprogram skrevet i Python', isCorrect: false, feedback: 'Et Python-program er en implementasjon av en algoritme, men algoritmer kan beskrives uten kode.' },
          { id: 'b', text: 'En presis, trinnvis oppskrift for å løse et problem', isCorrect: true },
          { id: 'c', text: 'En matematisk formel', isCorrect: false, feedback: 'En formel kan være del av en algoritme, men en algoritme er mer enn bare en formel.' },
          { id: 'd', text: 'En liste med tilfeldige instruksjoner', isCorrect: false, feedback: 'Instruksjonene i en algoritme må være ordnet og presise, ikke tilfeldige.' },
        ],
        solution: `En algoritme er en presis, trinnvis oppskrift for å løse et bestemt problem. Den må ha klart definerte steg, ta imot inndata, og produsere korrekt utdata. Algoritmer kan beskrives i naturlig språk, pseudokode eller programmeringskode.`,
      },
    },
    {
      id: 'it-1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken kontrollstruktur beskriver at instruksjoner utføres i rekkefølge, den ene etter den andre?`,
        options: [
          { id: 'a', text: 'Betingelse', isCorrect: false, feedback: 'Betingelse handler om å velge mellom ulike handlinger basert på en test.' },
          { id: 'b', text: 'Iterasjon', isCorrect: false, feedback: 'Iterasjon handler om å gjenta instruksjoner flere ganger.' },
          { id: 'c', text: 'Sekvens', isCorrect: true },
          { id: 'd', text: 'Rekursjon', isCorrect: false, feedback: 'Rekursjon er en teknikk der en funksjon kaller seg selv, og er noe annet enn sekvens.' },
        ],
        solution: `Sekvens er den enkleste kontrollstrukturen. Instruksjoner utføres i rekkefølge, fra topp til bunn. Sammen med betingelse og iterasjon utgjør sekvens de tre grunnleggende byggesteinene i alle algoritmer.`,
      },
    },
    {
      id: 'it-1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-3',
        number: '3.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hvilken egenskap betyr at en algoritme alltid vil stoppe etter et endelig antall steg?`,
        options: [
          { id: 'a', text: 'Entydighet', isCorrect: false, feedback: 'Entydighet betyr at hvert steg har bare én mulig tolkning.' },
          { id: 'b', text: 'Korrekthet', isCorrect: false, feedback: 'Korrekthet betyr at algoritmen gir riktig svar.' },
          { id: 'c', text: 'Effektivitet', isCorrect: false, feedback: 'Effektivitet handler om å bruke minst mulig ressurser.' },
          { id: 'd', text: 'Terminering', isCorrect: true },
        ],
        solution: `Terminering betyr at en algoritme garantert stopper etter et endelig antall steg. En prosess som kan kjøre for alltid (som en uendelig løkke) oppfyller ikke kravet om terminering og er dermed ikke en gyldig algoritme.`,
      },
    },
    {
      id: 'it-1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-4',
        number: '3.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva skriver dette programmet ut?\n\n\`\`\`python\ntall = 10\nif tall > 5:\n    print("Stort")\n    if tall > 15:\n        print("Veldig stort")\n    else:\n        print("Middels stort")\nelse:\n    print("Lite")\n\`\`\``,
        options: [
          { id: 'a', text: 'Stort\nVeldig stort', isCorrect: false, feedback: '10 er ikke større enn 15, så den indre if-betingelsen er usann.' },
          { id: 'b', text: 'Stort\nMiddels stort', isCorrect: true },
          { id: 'c', text: 'Lite', isCorrect: false, feedback: '10 er større enn 5, så den ytre if-betingelsen er sann.' },
          { id: 'd', text: 'Stort', isCorrect: false, feedback: 'Den ytre betingelsen er sann, men det er også en indre betingelse som gir mer utskrift.' },
        ],
        solution: `Siden tall = 10, er 10 > 5 sann, så "Stort" skrives ut. Deretter sjekkes den indre betingelsen: 10 > 15 er usann, så else-blokken kjøres og "Middels stort" skrives ut. Resultatet blir "Stort" etterfulgt av "Middels stort".`,
      },
    },
    {
      id: 'it-1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv en algoritme i naturlig språk (som en nummerert liste) og deretter i Python som beregner summen av alle heltall fra 1 til n, der n er et tall brukeren skriver inn.`,
        solution: `**Algoritme:**
1. Les inn et tall n fra brukeren
2. Sett summen til 0
3. For hvert tall i fra 1 til n:
   a. Legg i til summen
4. Skriv ut summen

**Python-kode:**
\`\`\`python
n = int(input("Skriv inn et tall: "))
summen = 0

for i in range(1, n + 1):
    summen = summen + i

print(f"Summen av tallene 1 til {n} er {summen}")
\`\`\`

For n = 5 gir dette: 1 + 2 + 3 + 4 + 5 = 15.`,
      },
    },
    {
      id: 'it-1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv et Python-program som bruker en while-løkke til å finne det første tallet som er større enn 1000 i følgen 1, 2, 4, 8, 16, 32, ... (der hvert tall er det dobbelte av det forrige).`,
        solution: `\`\`\`python
tall = 1

while tall <= 1000:
    tall = tall * 2

print(f"Det første tallet større enn 1000 er {tall}")
\`\`\`

**Kjøring gir:**
\`\`\`
Det første tallet større enn 1000 er 1024
\`\`\`

Følgen er 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Tallet 1024 er det første som er større enn 1000. Løkken dobler tallet i hvert steg, og stopper når betingelsen tall <= 1000 ikke lenger er sann.`,
      },
    },
    {
      id: 'it-1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-7',
        number: '3.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et Python-program som ber brukeren om tall gjentatte ganger (med en while-løkke). Programmet skal stoppe når brukeren skriver 0. Til slutt skal programmet skrive ut hvor mange tall som ble skrevet inn (ikke medregnet 0), summen av tallene, og gjennomsnittet.`,
        solution: `\`\`\`python
antall = 0
summen = 0

tall = int(input("Skriv inn et tall (0 for å avslutte): "))

while tall != 0:
    antall += 1
    summen += tall
    tall = int(input("Skriv inn et tall (0 for å avslutte): "))

if antall > 0:
    gjennomsnitt = summen / antall
    print(f"\\nDu skrev inn {antall} tall")
    print(f"Summen er {summen}")
    print(f"Gjennomsnittet er {gjennomsnitt:.2f}")
else:
    print("Du skrev ikke inn noen tall.")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Skriv inn et tall (0 for å avslutte): 10
Skriv inn et tall (0 for å avslutte): 20
Skriv inn et tall (0 for å avslutte): 30
Skriv inn et tall (0 for å avslutte): 0

Du skrev inn 3 tall
Summen er 60
Gjennomsnittet er 20.00
\`\`\`

Programmet bruker en while-løkke som kjører så lenge brukeren ikke skriver 0. For hvert tall oppdateres antall og sum. Etter løkken sjekker vi at antall > 0 for å unngå divisjon med null.`,
      },
    },
    {
      id: 'it-1-3-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-1-ex-8',
        number: '3.1.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva skriver dette programmet ut?\n\n\`\`\`python\nresultat = 0\nfor i in range(1, 5):\n    if i % 2 == 0:\n        resultat += i * 2\n    else:\n        resultat += i\nprint(resultat)\n\`\`\``,
        options: [
          { id: 'a', text: '10', isCorrect: false, feedback: 'Husk at partall og oddetall behandles forskjellig.' },
          { id: 'b', text: '16', isCorrect: true },
          { id: 'c', text: '20', isCorrect: false, feedback: 'range(1, 5) gir tallene 1, 2, 3, 4 (ikke 5).' },
          { id: 'd', text: '14', isCorrect: false, feedback: 'Sjekk beregningen nøye for hvert tall.' },
        ],
        solution: `Løkken går gjennom i = 1, 2, 3, 4. For oddetall (i % 2 != 0) legges i til direkte. For partall (i % 2 == 0) legges i * 2 til.
- i=1 (oddetall): resultat = 0 + 1 = 1
- i=2 (partall): resultat = 1 + 2*2 = 5
- i=3 (oddetall): resultat = 5 + 3 = 8
- i=4 (partall): resultat = 8 + 4*2 = 16

Svaret er 16.`,
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3.2: Problemløsningsstrategier
// ============================================================================

export const CHAPTER_IT_1_3_2: TextbookChapter = {
  id: 'it-1-3-2',
  courseId: 'it-1',
  chapterNumber: '3.2',
  title: 'Problemløsningsstrategier',
  description: 'Lær systematiske strategier for å bryte ned og løse problemer med programmering, inkludert dekomponering, mønstergjenkjenning, abstraksjon og algoritmisk tenkning.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-3-1',
  nextChapter: 'it-1-3-3',
  competenceGoals: [
    'bruke dekomponering til å bryte ned komplekse problemer i håndterbare delproblemer',
    'gjenkjenne mønstre og bruke abstraksjon i problemløsning',
    'planlegge og utvikle løsninger systematisk ved hjelp av algoritmisk tenkning',
  ],
  keyTerms: [
    { term: 'Dekomponering', definition: 'Teknikken med å bryte ned et stort og komplekst problem i mindre, mer håndterbare delproblemer. Hvert delproblem kan løses separat, og delløsningene kan settes sammen til en helhetlig løsning.' },
    { term: 'Mønstergjenkjenning', definition: 'Evnen til å oppdage likheter, trender og gjentakende strukturer i problemer og data. Når du gjenkjenner et mønster, kan du gjenbruke kjente løsninger i stedet for å finne opp hjulet på nytt.' },
    { term: 'Abstraksjon', definition: 'Prosessen med å fokusere på de viktigste detaljene og ignorere det som er uvesentlig for problemet. Abstraksjon lar deg forenkle komplekse systemer ved å skjule unødvendig kompleksitet.' },
    { term: 'Algoritmisk tenkning', definition: 'En systematisk tilnærming til problemløsning der du definerer problemet, bryter det ned, finner mønstre, abstraherer, og designer en trinnvis løsning som kan implementeres som et program.' },
    { term: 'Top-down-design', definition: 'En tilnærming til problemløsning der du starter med det overordnede problemet og gradvis bryter det ned i stadig mindre delproblemer. Også kalt trinnvis forfining.' },
    { term: 'Funksjoner', definition: 'Navngitte kodeblokker som utfører en bestemt deloppgave. Funksjoner lar deg organisere koden i gjenbrukbare moduler, noe som gjør programmet lettere å lese, teste og vedlikeholde.' },
    { term: 'Trinnvis forfining', definition: 'Prosessen med å starte med en grov beskrivelse av løsningen og gradvis legge til mer detalj i hvert steg, til man har en fullstendig og presis algoritme som kan implementeres direkte i kode.' },
  ],
  exercises: [],
  content: [
    {
      id: 'it-1-3-2-intro',
      type: 'text',
      content: `# Problemløsningsstrategier

Den største utfordringen i programmering er ikke å lære syntaksen til et programmeringsspråk. Det vanskeligste er å finne ut *hvordan* du skal løse et problem. Mange nybegynnere blir lammet når de møter en oppgave som er litt mer kompleks enn det de har sett før. De stirrer på en tom editor og vet ikke hvor de skal begynne.

Heldigvis finnes det velprøvde strategier for problemløsning som du kan lære og øve på. I dette kapittelet skal vi se på fire nøkkelstrategier som utgjør kjernen i det som kalles *algoritmisk tenkning* (eller «computational thinking» på engelsk): dekomponering, mønstergjenkjenning, abstraksjon og algoritmedesign. Disse strategiene brukes ikke bare i programmering, men i alle fagfelt der du trenger å løse problemer systematisk.

Du vil lære å bryte ned store problemer i små biter, gjenkjenne mønstre som lar deg gjenbruke løsninger, fokusere på det som er viktig og ignorere det som er uvesentlig, og til slutt designe steg-for-steg-løsninger som kan oversettes direkte til kode.`,
    },
    {
      id: 'it-1-3-2-def-algoritmisk',
      type: 'definition',
      title: 'Algoritmisk tenkning',
      content: `**Algoritmisk tenkning** (computational thinking) er en problemløsningsmetodikk som innebærer å formulere problemer på en måte som gjør det mulig å bruke en datamaskin til å løse dem. Det er ikke det samme som å programmere, men det er grunnlaget for all programmering. Algoritmisk tenkning består av fire hovedkomponenter: (1) dekomponering – bryte ned problemet, (2) mønstergjenkjenning – finne likheter med kjente problemer, (3) abstraksjon – forenkle ved å fokusere på det vesentlige, og (4) algoritmedesign – lage en trinnvis løsning.`,
    },
    {
      id: 'it-1-3-2-text-dekomponering',
      type: 'text',
      title: 'Dekomponering: bryt ned problemet',
      content: `## Dekomponering

Dekomponering er kanskje den viktigste problemløsningsstrategien. Ideen er enkel: et stort, uoverkommelig problem blir lett å håndtere når du bryter det ned i mindre deler.

Tenk deg at du skal lage et program som er en enkel quiz. Det høres kanskje overveldende ut i starten, men bryter du det ned, ser du at det består av flere små, håndterbare oppgaver:

1. Definere spørsmål og svar
2. Vise ett spørsmål til brukeren
3. Lese inn brukerens svar
4. Sjekke om svaret er riktig
5. Telle poeng
6. Vise resultatet til slutt

Hvert av disse stegene er langt enklere å løse alene enn hele quizen under ett. Og når du har løst hvert delsteg, kan du sette dem sammen til et komplett program.

**Fremgangsmåte for dekomponering:**
1. Les oppgaven nøye og identifiser hva som er input og hva som er ønsket output
2. List opp alle deloppgavene som må utføres
3. Ordne deloppgavene i riktig rekkefølge
4. Løs hver deloppgave separat
5. Sett delløsningene sammen og test helheten`,
    },
    {
      id: 'it-1-3-2-example-1',
      type: 'example',
      title: 'Dekomponering: Quizprogram',
      problem: `Bruk dekomponering til å lage et enkelt quizprogram med tre spørsmål.`,
      solution: `Vi bryter ned problemet i deler og implementerer dem steg for steg:

\`\`\`python
# === Quiz-program ===

# Del 1: Definer spørsmål og svar
sp1 = "Hva er hovedstaden i Norge? "
sv1 = "oslo"

sp2 = "Hvilket år ble Norge selvstendig? "
sv2 = "1905"

sp3 = "Hva heter Norges lengste elv? "
sv3 = "glomma"

# Del 2: Sett opp poengtelling
poeng = 0

# Del 3: Still spørsmål og sjekk svar
print("=== QUIZ ===\\n")

svar = input(sp1).strip().lower()
if svar == sv1:
    print("Riktig!\\n")
    poeng += 1
else:
    print(f"Feil! Riktig svar var {sv1}.\\n")

svar = input(sp2).strip().lower()
if svar == sv2:
    print("Riktig!\\n")
    poeng += 1
else:
    print(f"Feil! Riktig svar var {sv2}.\\n")

svar = input(sp3).strip().lower()
if svar == sv3:
    print("Riktig!\\n")
    poeng += 1
else:
    print(f"Feil! Riktig svar var {sv3}.\\n")

# Del 4: Vis resultat
print(f"Du fikk {poeng} av 3 riktig!")
\`\`\`

Ved å bryte ned quizen i fire klare deler (definere data, sette opp telling, stille spørsmål, vise resultat) ble oppgaven mye enklere å løse. Legg merke til at vi bruker \`.strip()\` for å fjerne mellomrom og \`.lower()\` for å gjøre sammenligningen uavhengig av store/små bokstaver.`,
    },
    {
      id: 'it-1-3-2-text-monster',
      type: 'text',
      title: 'Mønstergjenkjenning',
      content: `## Mønstergjenkjenning

Når du har brutt ned et problem, vil du ofte oppdage at flere av delene ligner på hverandre. I quizeksempelet over gjentok vi nesten identisk kode for hvert spørsmål: vis spørsmålet, les svaret, sjekk om det er riktig, oppdater poengsummen. Dette er et mønster!

Når du gjenkjenner et mønster, kan du:
- Bruke en **løkke** for å gjenta den samme koden med forskjellige data
- Lage en **funksjon** som utfører det gjentakende arbeidet
- Bruke **datastrukturer** (som lister) for å organisere data som hører sammen

Mønstergjenkjenning handler også om å koble nye problemer til problemer du har løst før. Har du løst et problem med å finne det største tallet i en liste? Samme mønster kan brukes til å finne det dyreste produktet i en nettbutikk, den varmeste dagen i en temperaturlogg, eller den beste karakteren i et datasett.

La oss forbedre quizprogrammet ved å bruke mønstergjenkjenning:

\`\`\`python
# Forbedret quiz med lister og løkke
sporsmaal = [
    ("Hva er hovedstaden i Norge? ", "oslo"),
    ("Hvilket år ble Norge selvstendig? ", "1905"),
    ("Hva heter Norges lengste elv? ", "glomma"),
]

poeng = 0

print("=== QUIZ ===\\n")

for sporsmal, fasit in sporsmaal:
    svar = input(sporsmal).strip().lower()
    if svar == fasit:
        print("Riktig!\\n")
        poeng += 1
    else:
        print(f"Feil! Riktig svar var {fasit}.\\n")

print(f"Du fikk {poeng} av {len(sporsmaal)} riktig!")
\`\`\`

Nå kan vi enkelt legge til flere spørsmål bare ved å utvide listen, uten å skrive mer kode. Mønsteret er identifisert og gjenbrukt.`,
    },
    {
      id: 'it-1-3-2-def-abstraksjon',
      type: 'definition',
      title: 'Abstraksjon',
      content: `**Abstraksjon** er prosessen med å trekke ut de vesentlige detaljene fra et problem og ignorere det som er uvesentlig. I programmering betyr abstraksjon å skjule kompleksitet bak et enkelt grensesnitt. Når du bruker funksjonen \`print()\` i Python, trenger du ikke vite hvordan teksten faktisk vises på skjermen. Du trenger bare å vite at du gir den en tekst, og den viser den. Alt det komplekse arbeidet er abstrahert bort bak et enkelt funksjonskall.`,
    },
    {
      id: 'it-1-3-2-text-abstraksjon',
      type: 'text',
      title: 'Abstraksjon i praksis',
      content: `## Abstraksjon i praksis

Abstraksjon handler om å tenke på **hva** som skal gjøres, ikke **hvordan** det gjøres. I programmering bruker vi funksjoner for å oppnå abstraksjon. La oss se på quizprogrammet igjen, nå med funksjoner:

\`\`\`python
def still_sporsmal(sporsmal, fasit):
    """Stiller et spørsmål og returnerer True hvis svaret er riktig."""
    svar = input(sporsmal).strip().lower()
    if svar == fasit:
        print("Riktig!\\n")
        return True
    else:
        print(f"Feil! Riktig svar var {fasit}.\\n")
        return False

def kjor_quiz(sporsmaal):
    """Kjører en quiz med en liste av (spørsmål, svar)-tupler."""
    poeng = 0
    for sporsmal, fasit in sporsmaal:
        if still_sporsmal(sporsmal, fasit):
            poeng += 1
    return poeng

def vis_resultat(poeng, totalt):
    """Viser resultatet av quizen."""
    prosent = (poeng / totalt) * 100
    print(f"Du fikk {poeng} av {totalt} riktig ({prosent:.0f}%)")
    if prosent == 100:
        print("Fantastisk! Full score!")
    elif prosent >= 50:
        print("Bra jobbet!")
    else:
        print("Øv litt mer og prøv igjen!")

# Hovedprogram
sporsmaal = [
    ("Hva er hovedstaden i Norge? ", "oslo"),
    ("Hvilket år ble Norge selvstendig? ", "1905"),
    ("Hva heter Norges lengste elv? ", "glomma"),
]

print("=== QUIZ ===\\n")
poeng = kjor_quiz(sporsmaal)
vis_resultat(poeng, len(sporsmaal))
\`\`\`

Nå er hovedprogrammet bare fire linjer. All kompleksitet er gjemt inne i funksjonene. Hver funksjon har et tydelig navn som forklarer hva den gjør, og du kan lese hovedprogrammet nesten som vanlig norsk: «Kjør quizen. Vis resultatet.»`,
    },
    {
      id: 'it-1-3-2-text-topdown',
      type: 'text',
      title: 'Top-down-design og trinnvis forfining',
      content: `## Top-down-design og trinnvis forfining

Top-down-design er en strategi der du starter med den overordnede løsningen og gradvis bryter den ned i mer detaljerte deler. Det er som å tegne et kart der du først tegner landegrensene, deretter fylkene, byene, og til slutt gatene.

**Eksempel: Bygge en karakterkalkulator**

**Steg 1: Overordnet plan**
\`\`\`
1. Les inn karakterer
2. Beregn gjennomsnitt
3. Vis resultater
\`\`\`

**Steg 2: Forfin hvert steg**
\`\`\`
1. Les inn karakterer
   1.1 Spør hvor mange fag
   1.2 For hvert fag: les inn fagnavn og karakter
   1.3 Lagre i en liste

2. Beregn gjennomsnitt
   2.1 Summer alle karakterer
   2.2 Del på antall fag

3. Vis resultater
   3.1 Vis alle fag med karakterer
   3.2 Vis gjennomsnittet
   3.3 Vis beste og svakeste fag
\`\`\`

**Steg 3: Implementer i Python**

\`\`\`python
def les_karakterer():
    """Leser inn fag og karakterer fra brukeren."""
    antall = int(input("Hvor mange fag? "))
    fag_liste = []

    for i in range(antall):
        fag = input(f"Fagnavn {i + 1}: ")
        karakter = int(input(f"Karakter i {fag} (1-6): "))
        fag_liste.append((fag, karakter))

    return fag_liste

def beregn_gjennomsnitt(fag_liste):
    """Beregner gjennomsnittskarakteren."""
    total = sum(karakter for _, karakter in fag_liste)
    return total / len(fag_liste)

def vis_resultater(fag_liste, gjennomsnitt):
    """Viser alle karakterer og statistikk."""
    print("\\n=== KARAKTEROVERSIKT ===")
    for fag, karakter in fag_liste:
        print(f"  {fag}: {karakter}")

    print(f"\\nGjennomsnitt: {gjennomsnitt:.2f}")

    beste = max(fag_liste, key=lambda x: x[1])
    svakeste = min(fag_liste, key=lambda x: x[1])
    print(f"Beste fag: {beste[0]} ({beste[1]})")
    print(f"Svakeste fag: {svakeste[0]} ({svakeste[1]})")

# Hovedprogram
fag_liste = les_karakterer()
gjennomsnitt = beregn_gjennomsnitt(fag_liste)
vis_resultater(fag_liste, gjennomsnitt)
\`\`\`

Denne tilnærmingen gjør det enkelt å utvikle selv komplekse programmer. Du fokuserer på én ting om gangen og bygger opp løsningen lag for lag.`,
    },
    {
      id: 'it-1-3-2-tip-1',
      type: 'tip',
      title: 'Gummiandeteknikken',
      content: `Når du står fast, prøv «gummiandeteknikken» (rubber duck debugging). Forklar problemet høyt til en gummiand, en venn, eller til og med deg selv i speilet. Ved å formulere problemet i ord tvinges du til å tenke gjennom det systematisk, og ofte oppdager du løsningen mens du forklarer. Mange profesjonelle programmerere bruker denne teknikken daglig.`,
    },
    {
      id: 'it-1-3-2-text-steg',
      type: 'text',
      title: 'Systematisk fremgangsmåte for problemløsning',
      content: `## Systematisk fremgangsmåte

Her er en steg-for-steg-fremgangsmåte du kan bruke for enhver programmeringsoppgave:

**1. Forstå problemet**
- Les oppgaven nøye, gjerne flere ganger
- Hva er input? Hva er ønsket output?
- Finnes det spesialtilfeller? Hva med ugyldige inndata?

**2. Planlegg løsningen**
- Bruk dekomponering: bryt ned i delproblemer
- Se etter mønstre: ligner dette på noe du har løst før?
- Skriv algoritmen i naturlig språk eller pseudokode

**3. Implementer**
- Skriv kode for én del om gangen
- Test hver del før du går videre
- Bruk beskrivende variabelnavn og kommentarer

**4. Test**
- Test med normale inndata
- Test med grensetilfeller (0, negative tall, tomme lister)
- Test med ugyldige inndata
- Sammenlign resultatet med forventet utdata

**5. Forbedre**
- Kan koden forenkles?
- Er det gjentakende kode som kan bli en funksjon?
- Er variabelnavnene beskrivende?
- Er koden godt kommentert?

Denne prosessen er iterativ. Du vil ofte gå tilbake til et tidligere steg når du oppdager noe nytt. Det er helt normalt og en del av prosessen.`,
    },
    {
      id: 'it-1-3-2-example-2',
      type: 'example',
      title: 'Fullstendig problemløsningsprosess',
      problem: `Bruk den systematiske fremgangsmåten til å lage et program som analyserer en tekst og teller antall vokaler, konsonanter og andre tegn.`,
      solution: `**1. Forstå problemet:**
- Input: en tekststreng
- Output: antall vokaler, konsonanter og andre tegn
- Spesialtilfelle: store og små bokstaver, æøå

**2. Planlegg (dekomponering):**
- Les inn tekst
- Gå gjennom hvert tegn
- Sjekk om tegnet er vokal, konsonant eller annet
- Tell opp i riktig kategori
- Vis resultatene

**3. Implementer:**

\`\`\`python
def analyser_tekst(tekst):
    """Analyserer en tekst og teller vokaler, konsonanter og andre tegn."""
    vokaler = "aeiouyæøå"
    konsonanter = "bcdfghjklmnpqrstvwxz"

    antall_vokaler = 0
    antall_konsonanter = 0
    antall_andre = 0

    for tegn in tekst.lower():
        if tegn in vokaler:
            antall_vokaler += 1
        elif tegn in konsonanter:
            antall_konsonanter += 1
        else:
            antall_andre += 1

    return antall_vokaler, antall_konsonanter, antall_andre

# Hovedprogram
tekst = input("Skriv inn en tekst: ")
vokaler, konsonanter, andre = analyser_tekst(tekst)

print(f"\\nAnalyse av teksten:")
print(f"  Vokaler:     {vokaler}")
print(f"  Konsonanter: {konsonanter}")
print(f"  Andre tegn:  {andre}")
print(f"  Totalt:      {len(tekst)}")
\`\`\`

**4. Test:**
\`\`\`
Skriv inn en tekst: Hei på deg!

Analyse av teksten:
  Vokaler:     4
  Konsonanter: 4
  Andre tegn:  3
  Totalt:      11
\`\`\`

Vi brukte dekomponering (dele opp i funksjon og hovedprogram), mønstergjenkjenning (sjekke hvert tegn følger samme mønster), og abstraksjon (funksjonen skjuler detaljene).`,
    },
    {
      id: 'it-1-3-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.2

**Hovedpunkter:**
- Algoritmisk tenkning består av fire komponenter: dekomponering, mønstergjenkjenning, abstraksjon og algoritmedesign
- Dekomponering bryter et stort problem ned i mindre, håndterbare deler
- Mønstergjenkjenning lar deg finne likheter mellom problemer og gjenbruke løsninger
- Abstraksjon betyr å fokusere på det vesentlige og skjule unødvendig kompleksitet, for eksempel ved å bruke funksjoner
- Top-down-design starter med helheten og forfiner gradvis ned til implementerbare detaljer
- En systematisk fremgangsmåte (forstå, planlegg, implementer, test, forbedre) gir struktur til problemløsningsprosessen`,
    },
    {
      id: 'it-1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva betyr dekomponering i programmering?`,
        options: [
          { id: 'a', text: 'Å slette deler av koden', isCorrect: false, feedback: 'Dekomponering handler om å bryte ned problemer, ikke slette kode.' },
          { id: 'b', text: 'Å bryte ned et stort problem i mindre, håndterbare delproblemer', isCorrect: true },
          { id: 'c', text: 'Å skrive koden raskere', isCorrect: false, feedback: 'Dekomponering handler om problemløsning, ikke hastighet.' },
          { id: 'd', text: 'Å fjerne feil fra programmet', isCorrect: false, feedback: 'Det du beskriver er feilsøking (debugging), ikke dekomponering.' },
        ],
        solution: `Dekomponering er å bryte ned et stort, komplekst problem i mindre deler som er enklere å forstå og løse hver for seg. Delløsningene kan deretter settes sammen til en helhetlig løsning.`,
      },
    },
    {
      id: 'it-1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken av de fire komponentene i algoritmisk tenkning handler om å fokusere på det vesentlige og ignorere uvesentlige detaljer?`,
        options: [
          { id: 'a', text: 'Dekomponering', isCorrect: false, feedback: 'Dekomponering handler om å bryte ned problemer i deler.' },
          { id: 'b', text: 'Mønstergjenkjenning', isCorrect: false, feedback: 'Mønstergjenkjenning handler om å finne likheter mellom problemer.' },
          { id: 'c', text: 'Abstraksjon', isCorrect: true },
          { id: 'd', text: 'Algoritmedesign', isCorrect: false, feedback: 'Algoritmedesign handler om å lage trinnvise løsninger.' },
        ],
        solution: `Abstraksjon er prosessen med å fokusere på de viktige detaljene og ignorere det uvesentlige. I programmering betyr det å skjule kompleksitet bak funksjoner og moduler slik at du kan tenke på et høyere nivå.`,
      },
    },
    {
      id: 'it-1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-3',
        number: '3.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva er hovedfordelen med å bruke funksjoner i et program?`,
        options: [
          { id: 'a', text: 'Programmet kjører raskere', isCorrect: false, feedback: 'Funksjoner gjør ikke nødvendigvis programmet raskere i seg selv.' },
          { id: 'b', text: 'Koden blir organisert, gjenbrukbar og lettere å forstå', isCorrect: true },
          { id: 'c', text: 'Programmet bruker mindre minne', isCorrect: false, feedback: 'Funksjoner handler primært om organisering, ikke minnebruk.' },
          { id: 'd', text: 'Man slipper å bruke variabler', isCorrect: false, feedback: 'Funksjoner bruker også variabler (parametere og lokale variabler).' },
        ],
        solution: `Funksjoner organiserer koden i gjenbrukbare blokker med tydelige navn. Dette gjør programmet lettere å lese (abstraksjon), lettere å teste (du kan teste hver funksjon separat), og lettere å vedlikeholde (endringer i en funksjon påvirker bare den funksjonen).`,
      },
    },
    {
      id: 'it-1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Du skal lage et program som konverterer mellom temperaturskalaer (Celsius, Fahrenheit, Kelvin). Bruk dekomponering og skriv programmet med funksjoner. Programmet skal spørre brukeren om en temperatur, hvilken skala den er i, og hvilken skala den skal konverteres til.`,
        solution: `\`\`\`python
def celsius_til_fahrenheit(c):
    return c * 9/5 + 32

def celsius_til_kelvin(c):
    return c + 273.15

def fahrenheit_til_celsius(f):
    return (f - 32) * 5/9

def kelvin_til_celsius(k):
    return k - 273.15

def konverter(temp, fra_skala, til_skala):
    """Konverterer mellom alle tre skalaer via Celsius."""
    # Først: konverter til Celsius
    if fra_skala == "c":
        celsius = temp
    elif fra_skala == "f":
        celsius = fahrenheit_til_celsius(temp)
    else:
        celsius = kelvin_til_celsius(temp)

    # Deretter: konverter fra Celsius til ønsket skala
    if til_skala == "c":
        return celsius
    elif til_skala == "f":
        return celsius_til_fahrenheit(celsius)
    else:
        return celsius_til_kelvin(celsius)

# Hovedprogram
temp = float(input("Temperatur: "))
fra = input("Fra skala (C/F/K): ").lower()
til = input("Til skala (C/F/K): ").lower()

resultat = konverter(temp, fra, til)
print(f"{temp} {fra.upper()} = {resultat:.2f} {til.upper()}")
\`\`\`

Dekomponering: vi brøt ned problemet i små konverteringsfunksjoner. Abstraksjon: funksjonen \`konverter()\` skjuler at alle konverteringer går via Celsius.`,
      },
    },
    {
      id: 'it-1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk mønstergjenkjenning. Disse tre kodebitene gjør lignende ting. Skriv én funksjon som erstatter alle tre:\n\n\`\`\`python\n# Kode 1: Finn minste tall\nminst = tall[0]\nfor t in tall:\n    if t < minst:\n        minst = t\n\n# Kode 2: Finn lengste ord\nlengst = ord[0]\nfor o in ord:\n    if len(o) > len(lengst):\n        lengst = o\n\n# Kode 3: Finn billigste produkt\nbilligst = produkter[0]\nfor p in produkter:\n    if p.pris < billigst.pris:\n        billigst = p\n\`\`\``,
        solution: `Mønsteret er: gå gjennom en liste, sammenlign hvert element, behold det som vinner sammenligningen. Python har innebygde funksjoner for dette:

\`\`\`python
def finn_ekstrem(liste, nokkel=None, minst=True):
    """Finner minste eller største element i en liste."""
    if minst:
        return min(liste, key=nokkel)
    else:
        return max(liste, key=nokkel)

# Bruk:
minste_tall = finn_ekstrem([5, 2, 8, 1], minst=True)
lengste_ord = finn_ekstrem(["hei", "verden", "abc"], nokkel=len, minst=False)
\`\`\`

Alternativt kan du bruke Pythons innebygde \`min()\` og \`max()\` direkte med \`key\`-parameter. Mønsteret er det samme i alle tre tilfellene: finn det elementet som er "best" ifølge et kriterium.`,
      },
    },
    {
      id: 'it-1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk top-down-design til å lage et program som fungerer som en enkel handleliste. Programmet skal kunne: (1) legge til varer, (2) fjerne varer, (3) vise listen, og (4) avslutte. Bruk funksjoner for hvert valg og en while-løkke for hovedmenyen.`,
        solution: `\`\`\`python
def vis_meny():
    print("\\n=== HANDLELISTE ===")
    print("1. Legg til vare")
    print("2. Fjern vare")
    print("3. Vis handleliste")
    print("4. Avslutt")

def legg_til(handleliste):
    vare = input("Skriv inn vare: ").strip()
    if vare:
        handleliste.append(vare)
        print(f"'{vare}' lagt til!")

def fjern_vare(handleliste):
    if not handleliste:
        print("Handlelisten er tom.")
        return
    vis_liste(handleliste)
    nummer = int(input("Nummer å fjerne: ")) - 1
    if 0 <= nummer < len(handleliste):
        fjernet = handleliste.pop(nummer)
        print(f"'{fjernet}' fjernet!")
    else:
        print("Ugyldig nummer.")

def vis_liste(handleliste):
    if not handleliste:
        print("Handlelisten er tom.")
    else:
        print("\\nDin handleliste:")
        for i, vare in enumerate(handleliste, 1):
            print(f"  {i}. {vare}")

# Hovedprogram
handleliste = []

while True:
    vis_meny()
    valg = input("Velg (1-4): ")

    if valg == "1":
        legg_til(handleliste)
    elif valg == "2":
        fjern_vare(handleliste)
    elif valg == "3":
        vis_liste(handleliste)
    elif valg == "4":
        print("Ha det bra!")
        break
    else:
        print("Ugyldig valg.")
\`\`\`

Top-down: vi startet med fire hovedfunksjoner (meny, legg til, fjern, vis) og implementerte dem separat. Hovedprogrammet er enkelt og oversiktlig.`,
      },
    },
    {
      id: 'it-1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-2-ex-7',
        number: '3.2.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Du skal lage et program som beregner BMI, kategoriserer resultatet, og gir en anbefaling. Hvilken rekkefølge er best for å løse oppgaven med top-down-design?`,
        options: [
          { id: 'a', text: 'Skriv all koden i én lang blokk, test til slutt', isCorrect: false, feedback: 'Å skrive alt i én blokk er det motsatte av top-down-design.' },
          { id: 'b', text: 'Start med å designe detaljene, deretter bygg opp til helheten', isCorrect: false, feedback: 'Det du beskriver er bottom-up-design, ikke top-down.' },
          { id: 'c', text: 'Definer hovedtrinnene først (les inn, beregn, kategoriser, vis), lag funksjoner for hvert trinn, test trinnvis', isCorrect: true },
          { id: 'd', text: 'Kopier kode fra internett og tilpass den', isCorrect: false, feedback: 'Det er ikke en design-strategi. Top-down handler om å bryte ned problemet systematisk.' },
        ],
        solution: `Top-down-design starter med det overordnede (les inn data, beregn BMI, kategoriser, vis resultat) og bryter gradvis ned i detaljer. Hvert hovedtrinn blir en funksjon som implementeres og testes separat. Dette gir en strukturert og vedlikeholdbar løsning.`,
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3.3: Pseudokode og flytdiagrammer
// ============================================================================

export const CHAPTER_IT_1_3_3: TextbookChapter = {
  id: 'it-1-3-3',
  courseId: 'it-1',
  chapterNumber: '3.3',
  title: 'Pseudokode og flytdiagrammer',
  description: 'Lær å beskrive algoritmer ved hjelp av pseudokode og flytdiagrammer, to viktige verktøy for å planlegge og kommunisere løsninger før du begynner å kode.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-3-2',
  nextChapter: 'it-1-3-4',
  competenceGoals: [
    'skrive pseudokode for å beskrive algoritmer på en strukturert måte',
    'tegne og tolke flytdiagrammer som representerer algoritmer',
    'oversette mellom pseudokode, flytdiagrammer og Python-kode',
  ],
  keyTerms: [
    { term: 'Pseudokode', definition: 'En uformell, menneskelesbar beskrivelse av en algoritme som bruker strukturerte konstruksjoner (som HVIS, GJENTA, SÅ LENGE) uten å følge syntaksen til et bestemt programmeringsspråk. Pseudokode fungerer som en bro mellom naturlig språk og programmeringskode.' },
    { term: 'Flytdiagram', definition: 'En visuell fremstilling av en algoritme ved hjelp av standardiserte symboler og piler som viser flyten av kontroll gjennom programmet. Flytdiagrammer gjør det lettere å se den overordnede strukturen og logikken i en algoritme.' },
    { term: 'Prosessymbol', definition: 'Et rektangel i et flytdiagram som representerer en handling eller beregning, for eksempel «Beregn sum = a + b». Det er det vanligste symbolet i flytdiagrammer.' },
    { term: 'Beslutningssymbol', definition: 'En rombe (diamantform) i et flytdiagram som representerer et valg eller en betingelse. Fra romben går det to piler: én for «Ja» (betingelsen er sann) og én for «Nei» (betingelsen er usann).' },
    { term: 'Start/Stopp-symbol', definition: 'En avrundet rektangel (oval) i et flytdiagram som markerer begynnelsen eller slutten av algoritmen. Hvert flytdiagram skal ha nøyaktig én start og minst én stopp.' },
    { term: 'Inn/Ut-symbol', definition: 'Et parallellogram i et flytdiagram som representerer innlesing av data (input) eller utskrift av resultater (output).' },
  ],
  exercises: [],
  content: [
    {
      id: 'it-1-3-3-intro',
      type: 'text',
      content: `# Pseudokode og flytdiagrammer

Før du setter deg ned og skriver kode, er det lurt å planlegge løsningen din. Akkurat som en arkitekt tegner plantegninger før byggearbeiderne begynner, bør en programmerer beskrive algoritmen sin før hen begynner å kode. To av de viktigste verktøyene for dette er pseudokode og flytdiagrammer.

Pseudokode lar deg beskrive algoritmen i en blanding av naturlig språk og programmering, uten å bekymre deg for syntaksregler og semikolon. Flytdiagrammer gir deg et visuelt bilde av hvordan algoritmen flyter, noe som er spesielt nyttig for å forstå forgreninger og løkker.

I dette kapittelet skal du lære å skrive klar og strukturert pseudokode, tegne flytdiagrammer med standardiserte symboler, og oversette mellom pseudokode, flytdiagrammer og Python-kode. Disse ferdighetene er verdifulle både på eksamen og i profesjonell programvareutvikling.`,
    },
    {
      id: 'it-1-3-3-def-pseudokode',
      type: 'definition',
      title: 'Pseudokode',
      content: `**Pseudokode** er en uformell, tekstlig beskrivelse av en algoritme som bruker strukturerte nøkkelord for kontrollstrukturer (som HVIS, ELLERS, GJENTA, SÅ LENGE, FOR HVER), men som ikke er bundet til syntaksen til noe bestemt programmeringsspråk. Pseudokoden skal være presis nok til at en programmerer kan oversette den direkte til kode, men lesbar nok til at også ikke-programmerere kan forstå den. Det finnes ingen offisiell standard for pseudokode, men det er vanlig å bruke innrykk for å vise struktur.`,
    },
    {
      id: 'it-1-3-3-text-pseudokode-regler',
      type: 'text',
      title: 'Hvordan skrive god pseudokode',
      content: `## Hvordan skrive god pseudokode

Selv om det ikke finnes én offisiell standard for pseudokode, er det noen konvensjoner som gjør pseudokoden lettere å lese og oversette til kode:

**Nøkkelord for kontrollstrukturer:**
- \`LES\` eller \`INNDATA\` – les inn data fra brukeren
- \`SKRIV\` eller \`VIS\` – skriv ut data til skjermen
- \`SETT\` – tilordne en verdi til en variabel
- \`HVIS ... SÅ ... ELLERS\` – betingelse
- \`GJENTA SÅ LENGE\` – while-løkke
- \`FOR HVER ... I ...\` – for-løkke
- \`FUNKSJON\` – definere en funksjon
- \`RETURNER\` – returnere en verdi fra en funksjon

**Regler for god pseudokode:**
1. Bruk **innrykk** for å vise hvilke linjer som hører sammen (som i Python)
2. Skriv **nøkkelord med store bokstaver** for å skille dem fra vanlig tekst
3. Bruk **beskrivende variabelnavn** som gjør det klart hva variabelen inneholder
4. Hold hvert steg på **én linje** der det er mulig
5. Nummerer linjene hvis det gjør det lettere å referere til dem
6. Vær **presis** – unngå tvetydige formuleringer

Pseudokode er ikke ment å kjøres av en datamaskin. Den er et kommunikasjonsverktøy mellom mennesker, og dens viktigste egenskap er klarhet.`,
    },
    {
      id: 'it-1-3-3-example-1',
      type: 'example',
      title: 'Pseudokode for å beregne karaktersnitt',
      problem: `Skriv pseudokode for et program som leser inn karakterer til brukeren skriver -1, og deretter beregner og viser gjennomsnittet.`,
      solution: `**Pseudokode:**
\`\`\`
SETT sum = 0
SETT antall = 0

LES karakter

GJENTA SÅ LENGE karakter != -1:
    SETT sum = sum + karakter
    SETT antall = antall + 1
    LES karakter

HVIS antall > 0:
    SETT gjennomsnitt = sum / antall
    VIS "Gjennomsnittet er " + gjennomsnitt
ELLERS:
    VIS "Ingen karakterer ble skrevet inn"
\`\`\`

**Tilsvarende Python-kode:**
\`\`\`python
summen = 0
antall = 0

karakter = int(input("Skriv inn karakter (-1 for å avslutte): "))

while karakter != -1:
    summen += karakter
    antall += 1
    karakter = int(input("Skriv inn karakter (-1 for å avslutte): "))

if antall > 0:
    gjennomsnitt = summen / antall
    print(f"Gjennomsnittet er {gjennomsnitt:.2f}")
else:
    print("Ingen karakterer ble skrevet inn")
\`\`\`

Legg merke til hvor direkte oversettelsen er fra pseudokode til Python. GJENTA SÅ LENGE blir \`while\`, HVIS/ELLERS blir \`if/else\`, LES blir \`input()\`, og VIS blir \`print()\`.`,
    },
    {
      id: 'it-1-3-3-text-flytdiagram',
      type: 'text',
      title: 'Flytdiagrammer',
      content: `## Flytdiagrammer

Et flytdiagram er en visuell representasjon av en algoritme. Det bruker standardiserte symboler koblet sammen med piler for å vise hvordan data og kontroll flyter gjennom programmet. Flytdiagrammer er spesielt nyttige for å visualisere betingelser og løkker.

**Standardsymboler i flytdiagrammer:**

| Symbol | Form | Betydning |
|--------|------|-----------|
| Start/Stopp | Avrundet rektangel (oval) | Markerer starten og slutten av algoritmen |
| Prosess | Rektangel | En handling eller beregning (f.eks. «sum = a + b») |
| Beslutning | Rombe (diamant) | Et valg basert på en betingelse (Ja/Nei) |
| Inn/Ut | Parallellogram | Innlesing eller utskrift av data |
| Pil | Pil (→) | Viser retningen flyten følger |

**Regler for gode flytdiagrammer:**
1. Hvert flytdiagram har nøyaktig **én Start** og minst **én Stopp**
2. Alle symboler skal ha **piler** som viser flyten
3. Beslutningssymboler har alltid **to utganger**: Ja og Nei
4. Pilene skal aldri krysse hverandre der det kan unngås
5. Flyten skal gå **ovenfra og ned** som hovedretning
6. Bruk konsekvent stil og størrelse på symbolene`,
    },
    {
      id: 'it-1-3-3-example-2',
      type: 'example',
      title: 'Flytdiagram for partall/oddetall',
      problem: `Beskriv flytdiagrammet for en algoritme som sjekker om et tall er partall eller oddetall.`,
      solution: `**Beskrivelse av flytdiagrammet (ovenfra og ned):**

\`\`\`
[Start]
    ↓
[Les inn tall]
    ↓
<Er tall % 2 == 0?>
   /         \\
  Ja          Nei
  ↓            ↓
[Vis          [Vis
"Partall"]   "Oddetall"]
  ↓            ↓
   \\         /
    ↓
[Stopp]
\`\`\`

**Forklaring:**
1. Start-symbolet markerer begynnelsen
2. Et parallellogram (Inn/Ut) leser inn tallet
3. En rombe (Beslutning) sjekker om tallet er delelig med 2
4. Basert på svaret skrives enten «Partall» eller «Oddetall» ut
5. Begge grenene fører til Stopp-symbolet

**Tilsvarende Python-kode:**
\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall % 2 == 0:
    print("Partall")
else:
    print("Oddetall")
\`\`\`

Flytdiagrammet gjør det visuelt tydelig at det er to mulige veier gjennom programmet, avhengig av betingelsen.`,
    },
    {
      id: 'it-1-3-3-text-flyt-lokker',
      type: 'text',
      title: 'Flytdiagrammer med løkker',
      content: `## Flytdiagrammer med løkker

Løkker i flytdiagrammer vises ved at en pil går tilbake til et tidligere punkt i diagrammet, slik at en gruppe symboler gjentas. Her er et eksempel på en while-løkke som teller ned fra 5 til 1:

\`\`\`
[Start]
    ↓
[Sett teller = 5]
    ↓
<Er teller > 0?>──Nei──→[Vis "Ferdig!"]──→[Stopp]
    |
   Ja
    ↓
[Vis teller]
    ↓
[Sett teller = teller - 1]
    |
    └────────→ (tilbake til beslutningen)
\`\`\`

**Tilsvarende Python-kode:**
\`\`\`python
teller = 5

while teller > 0:
    print(teller)
    teller -= 1

print("Ferdig!")
\`\`\`

Pilen som går tilbake oppover er det som skaper løkken. Uten denne pilen ville koden bare kjørt én gang. Det er viktig at noe inne i løkken endrer betingelsen (her: \`teller\` reduseres), slik at løkken til slutt stopper.

**For-løkker** kan også vises i flytdiagrammer. De har en teller som økes automatisk i hvert gjennomløp:

\`\`\`
[Start]
    ↓
[Sett i = 1]
    ↓
<Er i <= 10?>──Nei──→[Stopp]
    |
   Ja
    ↓
[Vis i * i]
    ↓
[Sett i = i + 1]
    |
    └────────→ (tilbake til beslutningen)
\`\`\`

Dette tilsvarer:
\`\`\`python
for i in range(1, 11):
    print(i * i)
\`\`\``,
    },
    {
      id: 'it-1-3-3-example-3',
      type: 'example',
      title: 'Fra pseudokode til flytdiagram til Python',
      problem: `Lag pseudokode, beskriv flytdiagrammet, og skriv Python-kode for en algoritme som finner summen av alle partall fra 1 til n.`,
      solution: `**Pseudokode:**
\`\`\`
LES n
SETT sum = 0
FOR HVER i FRA 1 TIL n:
    HVIS i % 2 == 0:
        SETT sum = sum + i
VIS "Summen av partall fra 1 til " + n + " er " + sum
\`\`\`

**Flytdiagram (beskrivelse):**
\`\`\`
[Start]
    ↓
[Les inn n]
    ↓
[Sett sum = 0, i = 1]
    ↓
<Er i <= n?>──Nei──→[Vis sum]──→[Stopp]
    |
   Ja
    ↓
<Er i % 2 == 0?>
   /         \\
  Ja          Nei
  ↓            |
[sum = sum + i] |
  ↓            |
   \\         /
    ↓
[i = i + 1]
    |
    └────────→ (tilbake til "Er i <= n?")
\`\`\`

**Python-kode:**
\`\`\`python
n = int(input("Skriv inn n: "))
summen = 0

for i in range(1, n + 1):
    if i % 2 == 0:
        summen += i

print(f"Summen av partall fra 1 til {n} er {summen}")
\`\`\`

**Kjøring med n = 10:**
\`\`\`
Skriv inn n: 10
Summen av partall fra 1 til 10 er 30
\`\`\`

Partallene fra 1 til 10 er 2, 4, 6, 8, 10, og summen er 2+4+6+8+10 = 30.`,
    },
    {
      id: 'it-1-3-3-text-sammenligning',
      type: 'text',
      title: 'Sammenligning av pseudokode og flytdiagrammer',
      content: `## Når bør du bruke hva?

Både pseudokode og flytdiagrammer er nyttige verktøy, men de har ulike styrker:

| Egenskap | Pseudokode | Flytdiagram |
|----------|------------|-------------|
| **Representasjon** | Tekstlig | Visuell |
| **Best for** | Detaljerte algoritmer | Overordnet logikkflyt |
| **Betingelser** | Tydelig med HVIS/ELLERS | Svært visuelt med rombe |
| **Løkker** | Kompakt skrivemåte | Piler som går tilbake |
| **Komplekse algoritmer** | Skalerer godt | Kan bli uoversiktlig |
| **Oversettelse til kode** | Svært direkte | Krever mer tolkning |
| **Kommunikasjon** | Teknisk publikum | Bredere publikum |

**Anbefaling:** Bruk flytdiagrammer for å visualisere den overordnede logikken, spesielt for betingelser og løkker. Bruk pseudokode for å beskrive detaljene i algoritmen. I praksis bruker mange programmerere begge deler: først et flytdiagram for å forstå den store strukturen, deretter pseudokode for å beskrive hvert steg i detalj.

Uansett hvilket verktøy du bruker, er det viktigste at du planlegger før du koder. Erfarne programmerere bruker ofte mer tid på planlegging og design enn på selve kodingen.`,
    },
    {
      id: 'it-1-3-3-tip-1',
      type: 'tip',
      title: 'Verktøy for flytdiagrammer',
      content: `Du kan tegne flytdiagrammer for hånd på papir, men det finnes også gode digitale verktøy. **draw.io** (diagrams.net) er gratis og nettbasert, og har ferdige maler for flytdiagrammer. **Lucidchart** har en gratis versjon for studenter. I VS Code finnes utvidelsen **Draw.io Integration** som lar deg tegne diagrammer direkte i editoren. Å bruke digitale verktøy gjør det enkelt å redigere og dele diagrammene dine.`,
    },
    {
      id: 'it-1-3-3-example-4',
      type: 'example',
      title: 'Kompleks pseudokode: passordvalidering',
      problem: `Skriv pseudokode for et program som validerer et passord. Passordet må ha minst 8 tegn, inneholde minst én stor bokstav, minst én liten bokstav, og minst ett siffer.`,
      solution: `**Pseudokode:**
\`\`\`
FUNKSJON valider_passord(passord):
    HVIS lengden av passord < 8:
        RETURNER "For kort – minst 8 tegn kreves"

    SETT har_stor = USANN
    SETT har_liten = USANN
    SETT har_siffer = USANN

    FOR HVERT tegn I passord:
        HVIS tegn er stor bokstav:
            SETT har_stor = SANN
        HVIS tegn er liten bokstav:
            SETT har_liten = SANN
        HVIS tegn er siffer:
            SETT har_siffer = SANN

    HVIS IKKE har_stor:
        RETURNER "Mangler stor bokstav"
    HVIS IKKE har_liten:
        RETURNER "Mangler liten bokstav"
    HVIS IKKE har_siffer:
        RETURNER "Mangler siffer"

    RETURNER "Passordet er gyldig!"

LES passord
VIS valider_passord(passord)
\`\`\`

**Python-kode:**
\`\`\`python
def valider_passord(passord):
    if len(passord) < 8:
        return "For kort – minst 8 tegn kreves"

    har_stor = False
    har_liten = False
    har_siffer = False

    for tegn in passord:
        if tegn.isupper():
            har_stor = True
        if tegn.islower():
            har_liten = True
        if tegn.isdigit():
            har_siffer = True

    if not har_stor:
        return "Mangler stor bokstav"
    if not har_liten:
        return "Mangler liten bokstav"
    if not har_siffer:
        return "Mangler siffer"

    return "Passordet er gyldig!"

passord = input("Skriv inn passord: ")
print(valider_passord(passord))
\`\`\`

**Kjøring:**
\`\`\`
Skriv inn passord: Hemmelig123
Passordet er gyldig!

Skriv inn passord: kort
For kort – minst 8 tegn kreves
\`\`\``,
    },
    {
      id: 'it-1-3-3-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.3

**Hovedpunkter:**
- Pseudokode er en tekstlig beskrivelse av en algoritme som bruker strukturerte nøkkelord (HVIS, GJENTA, FOR HVER) uten å følge syntaksen til noe bestemt språk
- Flytdiagrammer er visuelle representasjoner av algoritmer med standardiserte symboler: oval (start/stopp), rektangel (prosess), rombe (beslutning), parallellogram (inn/ut)
- Pseudokode er best for detaljerte algoritmer og enkel oversettelse til kode
- Flytdiagrammer er best for å visualisere overordnet logikkflyt og kommunisere med ikke-tekniske personer
- Løkker vises i flytdiagrammer som piler som går tilbake til et beslutningssymbol
- Planlegging med pseudokode og/eller flytdiagrammer før koding gir bedre og mer gjennomtenkte løsninger`,
    },
    {
      id: 'it-1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hvilken form brukes for å representere en beslutning (betingelse) i et flytdiagram?`,
        options: [
          { id: 'a', text: 'Rektangel', isCorrect: false, feedback: 'Et rektangel representerer en prosess eller beregning.' },
          { id: 'b', text: 'Rombe (diamantform)', isCorrect: true },
          { id: 'c', text: 'Oval', isCorrect: false, feedback: 'En oval representerer start eller stopp.' },
          { id: 'd', text: 'Parallellogram', isCorrect: false, feedback: 'Et parallellogram representerer inn- eller utdata.' },
        ],
        solution: `En rombe (diamantform) brukes for beslutninger i flytdiagrammer. Den har to utganger merket «Ja» og «Nei» som viser de to mulige veiene basert på om betingelsen er sann eller usann.`,
      },
    },
    {
      id: 'it-1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er hovedfordelen med pseudokode sammenlignet med å skrive kode direkte?`,
        options: [
          { id: 'a', text: 'Pseudokode kjører raskere enn vanlig kode', isCorrect: false, feedback: 'Pseudokode kan ikke kjøres av en datamaskin.' },
          { id: 'b', text: 'Du kan fokusere på logikken uten å bekymre deg for syntaks', isCorrect: true },
          { id: 'c', text: 'Pseudokode er obligatorisk i alle programmeringsprosjekter', isCorrect: false, feedback: 'Pseudokode er et nyttig verktøy, men ikke obligatorisk.' },
          { id: 'd', text: 'Pseudokode er det samme som Python-kode', isCorrect: false, feedback: 'Pseudokode er uavhengig av programmeringsspråk og har friere form enn Python.' },
        ],
        solution: `Pseudokode lar deg konsentrere deg om algoritmen og logikken uten å bli distrahert av syntaksregler. Du kan beskrive hva programmet skal gjøre uten å tenke på parenteser, innrykk-regler eller funksjonsnavn.`,
      },
    },
    {
      id: 'it-1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva tilsvarer denne pseudokoden i Python?\n\n\`\`\`\nSETT total = 0\nFOR HVER tall I [3, 7, 2, 9]:\n    HVIS tall > 5:\n        SETT total = total + tall\nVIS total\n\`\`\``,
        options: [
          { id: 'a', text: '21 (summen av alle tallene)', isCorrect: false, feedback: 'Bare tall som er større enn 5 legges til.' },
          { id: 'b', text: '16 (7 + 9)', isCorrect: true },
          { id: 'c', text: '9 (det største tallet)', isCorrect: false, feedback: 'Pseudokoden summerer alle tall over 5, den finner ikke det største.' },
          { id: 'd', text: '5 (3 + 2)', isCorrect: false, feedback: 'Pseudokoden velger tall som er større enn 5, ikke mindre.' },
        ],
        solution: `Pseudokoden går gjennom listen [3, 7, 2, 9] og legger bare til tall som er større enn 5. Tall 3: nei (3 <= 5). Tall 7: ja (total = 0 + 7 = 7). Tall 2: nei (2 <= 5). Tall 9: ja (total = 7 + 9 = 16). Svaret er 16.`,
      },
    },
    {
      id: 'it-1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv pseudokode for en algoritme som sjekker om et ord er et palindrom (leses likt fra begge retninger, som «anna» eller «regninger»). Oversett deretter pseudokoden til Python.`,
        solution: `**Pseudokode:**
\`\`\`
LES ord
SETT ord = gjør om til små bokstaver(ord)
SETT baklengs = reverser(ord)

HVIS ord == baklengs:
    VIS ord + " er et palindrom!"
ELLERS:
    VIS ord + " er IKKE et palindrom."
\`\`\`

**Python-kode:**
\`\`\`python
ord_inn = input("Skriv inn et ord: ").lower()
baklengs = ord_inn[::-1]

if ord_inn == baklengs:
    print(f"{ord_inn} er et palindrom!")
else:
    print(f"{ord_inn} er IKKE et palindrom.")
\`\`\`

**Kjøring:**
\`\`\`
Skriv inn et ord: Anna
anna er et palindrom!

Skriv inn et ord: Python
python er IKKE et palindrom.
\`\`\`

I Python reverserer \`[::-1]\` en streng. Vi bruker \`.lower()\` for å gjøre sammenligningen uavhengig av store/små bokstaver.`,
      },
    },
    {
      id: 'it-1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Beskriv et flytdiagram (med tekst, som i eksemplene) for en algoritme som leser inn tall fra brukeren helt til brukeren skriver 0, og deretter viser det største tallet som ble skrevet inn.`,
        solution: `**Flytdiagram:**
\`\`\`
[Start]
    ↓
[Les inn tall]
    ↓
<Er tall == 0?>──Ja──→[Vis storst]──→[Stopp]
    |
   Nei
    ↓
<Er storst udefinert ELLER tall > storst?>
   /         \\
  Ja          Nei
  ↓            |
[storst = tall] |
  ↓            |
   \\         /
    ↓
[Les inn tall]
    |
    └────────→ (tilbake til "Er tall == 0?")
\`\`\`

**Python-kode:**
\`\`\`python
storst = None

tall = int(input("Skriv inn et tall (0 for å avslutte): "))

while tall != 0:
    if storst is None or tall > storst:
        storst = tall
    tall = int(input("Skriv inn et tall (0 for å avslutte): "))

if storst is not None:
    print(f"Det største tallet var {storst}")
else:
    print("Ingen tall ble skrevet inn.")
\`\`\``,
      },
    },
    {
      id: 'it-1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv pseudokode og Python-kode for et program som gjetter et tilfeldig tall mellom 1 og 100. Programmet skal gi tilbakemelding om gjettet er for høyt, for lavt eller riktig, og telle antall forsøk.`,
        solution: `**Pseudokode:**
\`\`\`
SETT hemmelig = tilfeldig tall mellom 1 og 100
SETT forsok = 0

VIS "Jeg tenker på et tall mellom 1 og 100."

GJENTA:
    LES gjett
    SETT forsok = forsok + 1

    HVIS gjett < hemmelig:
        VIS "For lavt! Prøv igjen."
    ELLERS HVIS gjett > hemmelig:
        VIS "For høyt! Prøv igjen."
    ELLERS:
        VIS "Riktig! Du brukte " + forsok + " forsøk."
SÅ LENGE gjett != hemmelig
\`\`\`

**Python-kode:**
\`\`\`python
import random

hemmelig = random.randint(1, 100)
forsok = 0

print("Jeg tenker på et tall mellom 1 og 100.")

while True:
    gjett = int(input("Ditt gjett: "))
    forsok += 1

    if gjett < hemmelig:
        print("For lavt! Prøv igjen.")
    elif gjett > hemmelig:
        print("For høyt! Prøv igjen.")
    else:
        print(f"Riktig! Du brukte {forsok} forsøk.")
        break
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Jeg tenker på et tall mellom 1 og 100.
Ditt gjett: 50
For høyt! Prøv igjen.
Ditt gjett: 25
For lavt! Prøv igjen.
Ditt gjett: 37
Riktig! Du brukte 3 forsøk.
\`\`\`

Denne strategien (halvere intervallet) kalles binærsøk og er en svært effektiv søkealgoritme som vi skal lære mer om i kapittel 3.4.`,
      },
    },
    {
      id: 'it-1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-3-ex-7',
        number: '3.3.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Gitt følgende flytdiagram-beskrivelse:\n\n1. Start\n2. Sett n = 1\n3. Er n > 5? Ja: gå til 7. Nei: gå til 4.\n4. Vis n * n\n5. Sett n = n + 1\n6. Gå til 3.\n7. Stopp.\n\nHva er den fullstendige utskriften fra dette flytdiagrammet?`,
        options: [
          { id: 'a', text: '1, 4, 9, 16, 25', isCorrect: true },
          { id: 'b', text: '1, 2, 3, 4, 5', isCorrect: false, feedback: 'Programmet skriver ut n*n, ikke n.' },
          { id: 'c', text: '1, 4, 9, 16, 25, 36', isCorrect: false, feedback: 'Løkken stopper når n > 5, altså etter n = 5.' },
          { id: 'd', text: '2, 4, 6, 8, 10', isCorrect: false, feedback: 'Programmet beregner n*n, ikke n*2.' },
        ],
        solution: `Flytdiagrammet starter med n = 1 og gjentar: vis n*n, øk n med 1, sjekk om n > 5. Utskriften blir: n=1: 1*1=1, n=2: 2*2=4, n=3: 3*3=9, n=4: 4*4=16, n=5: 5*5=25. Når n=6 er n>5 sann, og programmet stopper.`,
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3.4: Søke- og sorteringsalgoritmer
// ============================================================================

export const CHAPTER_IT_1_3_4: TextbookChapter = {
  id: 'it-1-3-4',
  courseId: 'it-1',
  chapterNumber: '3.4',
  title: 'Søke- og sorteringsalgoritmer',
  description: 'Lær de mest grunnleggende algoritmene for søking og sortering av data: lineært søk, binærsøk, boblesortering, innsettingssortering og utvalgssortering.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-3-3',
  nextChapter: 'it-1-3-5',
  competenceGoals: [
    'implementere og forklare lineært søk og binærsøk i Python',
    'implementere og forklare boblesortering, innsettingssortering og utvalgssortering',
    'sammenligne søke- og sorteringsalgoritmer med hensyn til effektivitet',
  ],
  keyTerms: [
    { term: 'Lineært søk', definition: 'En søkealgoritme som går gjennom elementene i en liste én etter én fra begynnelsen til slutten til den finner det søkte elementet eller har sjekket alle elementer. Enkel å implementere, men treg for store datasett.' },
    { term: 'Binærsøk', definition: 'En effektiv søkealgoritme som krever at listen er sortert. Den halverer søkeområdet i hvert steg ved å sammenligne det søkte elementet med midtelementet. Mye raskere enn lineært søk for store datasett.' },
    { term: 'Boblesortering', definition: 'En enkel sorteringsalgoritme som gjentatte ganger sammenligner naboelementer og bytter dem hvis de er i feil rekkefølge. Elementene «bobler» opp til riktig posisjon. Enkel å forstå, men ineffektiv for store datasett.' },
    { term: 'Innsettingssortering', definition: 'En sorteringsalgoritme som bygger opp den sorterte listen ett element om gangen ved å sette hvert nytt element inn på riktig plass i den allerede sorterte delen. Fungerer godt for små eller nesten sorterte datasett.' },
    { term: 'Utvalgssortering', definition: 'En sorteringsalgoritme som gjentatte ganger finner det minste elementet i den usorterte delen av listen og plasserer det på riktig plass i den sorterte delen. Enkel å forstå, men ineffektiv for store datasett.' },
    { term: 'Bytte (swap)', definition: 'Operasjonen å bytte verdien til to variabler eller to elementer i en liste. I Python gjøres dette elegant med a, b = b, a. Bytte er en grunnleggende operasjon i mange sorteringsalgoritmer.' },
    { term: 'Sortert liste', definition: 'En liste der elementene er ordnet i en bestemt rekkefølge, enten stigende (minst til størst) eller synkende (størst til minst). Binærsøk krever at listen er sortert.' },
  ],
  exercises: [],
  content: [
    {
      id: 'it-1-3-4-intro',
      type: 'text',
      content: `# Søke- og sorteringsalgoritmer

Tenk deg at du har en telefonkatalog med 10 000 navn. Hvis du skal finne nummeret til «Olsen», kan du starte fra begynnelsen og sjekke hvert navn. Men det er jo ikke slik du faktisk bruker en telefonkatalog. Du slår opp omtrent midt i boken, ser at du er på «M», og vet at «O» er litt lenger bak. Deretter halverer du igjen og igjen til du finner riktig side. Denne intuitive metoden er faktisk en av de viktigste algoritmene i informatikk: binærsøk.

Søking og sortering er to av de mest grunnleggende operasjonene i informatikk. Praktisk talt alle programmer som arbeider med data, må søke i data og sortere data. E-postprogrammet ditt sorterer meldinger etter dato. Nettbutikken sorterer produkter etter pris. Søkemotorer søker gjennom milliarder av nettsider for å finne det du leter etter.

I dette kapittelet skal du lære å implementere de mest kjente søke- og sorteringsalgoritmene i Python, forstå hvordan de fungerer, og sammenligne dem med hensyn til effektivitet.`,
    },
    {
      id: 'it-1-3-4-def-lineaert',
      type: 'definition',
      title: 'Lineært søk',
      content: `**Lineært søk** (også kalt sekvensielt søk) er den enkleste søkealgoritmen. Den starter fra begynnelsen av listen og sjekker hvert element i rekkefølge til den enten finner det søkte elementet eller har gått gjennom hele listen uten å finne det. Lineært søk fungerer på alle lister, uavhengig av om de er sorterte eller ikke. I verste fall (elementet er sist eller ikke finnes) må den sjekke alle n elementer, noe som gjør den treg for svært store datasett.`,
    },
    {
      id: 'it-1-3-4-text-lineaert',
      type: 'text',
      title: 'Lineært søk i praksis',
      content: `## Lineært søk

Lineært søk er som å lete etter en bestemt bok i en usortert bokhylle. Du begynner med den første boken, sjekker om det er riktig bok, og hvis ikke, går du videre til neste. Du fortsetter til du finner boken eller har sjekket alle.

**Algoritme:**
1. Start fra det første elementet i listen
2. Sammenlign elementet med det du søker etter
3. Hvis det er likt, returner posisjonen
4. Hvis ikke, gå til neste element
5. Hvis du har sjekket alle elementer uten å finne, returner «ikke funnet»

\`\`\`python
def lineaert_sok(liste, sokeord):
    """Søker etter sokeord i listen. Returnerer indeksen eller -1."""
    for i in range(len(liste)):
        if liste[i] == sokeord:
            return i  # Funnet på posisjon i
    return -1  # Ikke funnet

# Eksempel
tall = [4, 7, 2, 9, 1, 5, 8, 3, 6]

resultat = lineaert_sok(tall, 5)
if resultat != -1:
    print(f"Fant 5 på posisjon {resultat}")
else:
    print("Fant ikke 5")

resultat = lineaert_sok(tall, 10)
if resultat != -1:
    print(f"Fant 10 på posisjon {resultat}")
else:
    print("Fant ikke 10")
\`\`\`

**Kjøring:**
\`\`\`
Fant 5 på posisjon 5
Fant ikke 10
\`\`\`

**Analyse:** For en liste med n elementer må lineært søk i gjennomsnitt sjekke n/2 elementer, og i verste fall alle n. Vi sier at lineært søk har tidskompleksitet O(n), der n er antall elementer. For en liste med 1 000 000 elementer kan det ta opptil 1 000 000 sammenligninger.`,
    },
    {
      id: 'it-1-3-4-def-binaersok',
      type: 'definition',
      title: 'Binærsøk',
      content: `**Binærsøk** er en svært effektiv søkealgoritme som krever at listen er sortert på forhånd. Algoritmen sammenligner det søkte elementet med midtelementet i listen. Hvis det søkte er mindre, fortsetter søket i venstre halvdel. Hvis det er større, fortsetter søket i høyre halvdel. Slik halveres søkeområdet for hvert steg. For en sortert liste med n elementer trenger binærsøk maksimalt log₂(n) sammenligninger, noe som er dramatisk raskere enn lineært søk for store datasett.`,
    },
    {
      id: 'it-1-3-4-text-binaersok',
      type: 'text',
      title: 'Binærsøk i praksis',
      content: `## Binærsøk

Binærsøk er som å slå opp i en telefonkatalog. Fordi navnene er sortert alfabetisk, kan du halvere søkeområdet i hvert steg.

**Algoritme:**
1. Sett \`lav\` til 0 og \`hoy\` til siste indeks
2. Finn \`midt\` = (lav + hoy) // 2
3. Hvis elementet på \`midt\` er det du søker, returner \`midt\`
4. Hvis elementet på \`midt\` er for stort, sett \`hoy\` = midt - 1
5. Hvis elementet på \`midt\` er for lite, sett \`lav\` = midt + 1
6. Gjenta fra steg 2 så lenge \`lav\` <= \`hoy\`
7. Hvis \`lav\` > \`hoy\`, er elementet ikke i listen

\`\`\`python
def binaersok(sortert_liste, sokeord):
    """Binærsøk i en sortert liste. Returnerer indeksen eller -1."""
    lav = 0
    hoy = len(sortert_liste) - 1

    while lav <= hoy:
        midt = (lav + hoy) // 2

        if sortert_liste[midt] == sokeord:
            return midt  # Funnet!
        elif sortert_liste[midt] < sokeord:
            lav = midt + 1  # Søk i høyre halvdel
        else:
            hoy = midt - 1  # Søk i venstre halvdel

    return -1  # Ikke funnet

# Eksempel
sortert = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

print(binaersok(sortert, 7))   # 3 (posisjon 3)
print(binaersok(sortert, 12))  # -1 (ikke funnet)
\`\`\`

**Trinnvis gjennomgang for å finne 7 i [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]:**

| Steg | lav | hoy | midt | Verdi på midt | Handling |
|------|-----|-----|------|---------------|----------|
| 1 | 0 | 9 | 4 | 9 | 9 > 7, hoy = 3 |
| 2 | 0 | 3 | 1 | 3 | 3 < 7, lav = 2 |
| 3 | 2 | 3 | 2 | 5 | 5 < 7, lav = 3 |
| 4 | 3 | 3 | 3 | 7 | Funnet! |

Bare 4 sammenligninger for å finne tallet i en liste med 10 elementer! For en liste med 1 000 000 elementer trenger binærsøk maksimalt 20 sammenligninger (log₂(1 000 000) ≈ 20), sammenlignet med 1 000 000 for lineært søk.`,
    },
    {
      id: 'it-1-3-4-warning-1',
      type: 'warning',
      title: 'Binærsøk krever sortert liste',
      content: `Binærsøk fungerer bare på sorterte lister! Hvis listen ikke er sortert, vil binærsøk gi feil svar. Hvis du trenger å søke i en usortert liste, har du to valg: (1) bruk lineært søk, eller (2) sorter listen først og bruk deretter binærsøk. Valg 2 lønner seg hvis du skal søke mange ganger i den samme listen, fordi sorteringen bare trenger å gjøres én gang.`,
    },
    {
      id: 'it-1-3-4-text-boblesortering',
      type: 'text',
      title: 'Boblesortering',
      content: `## Boblesortering (Bubble Sort)

Boblesortering er den enkleste sorteringsalgoritmen å forstå. Ideen er å gjentatte ganger gå gjennom listen og sammenligne naboelementer. Hvis to naboelementer er i feil rekkefølge, bytter vi dem. Vi gjentar dette til listen er sortert.

Navnet «boblesortering» kommer av at de største elementene gradvis «bobler opp» til riktig posisjon, akkurat som luftbobler stiger til overflaten i et glass vann.

\`\`\`python
def boblesortering(liste):
    """Sorterer en liste med boblesortering."""
    n = len(liste)

    for i in range(n - 1):
        byttet = False

        for j in range(n - 1 - i):
            if liste[j] > liste[j + 1]:
                # Bytt naboelementer
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
                byttet = True

        # Optimalisering: hvis ingen bytter ble gjort, er listen sortert
        if not byttet:
            break

    return liste

# Eksempel
tall = [64, 34, 25, 12, 22, 11, 90]
print(f"Usortert: {tall}")
boblesortering(tall)
print(f"Sortert:  {tall}")
\`\`\`

**Kjøring:**
\`\`\`
Usortert: [64, 34, 25, 12, 22, 11, 90]
Sortert:  [11, 12, 22, 25, 34, 64, 90]
\`\`\`

**Trinnvis eksempel med [5, 3, 1, 4, 2]:**

Gjennomgang 1: [3, 1, 4, 2, **5**] (5 bobler opp til slutten)
Gjennomgang 2: [1, 3, 2, **4**, 5] (4 på plass)
Gjennomgang 3: [1, 2, **3**, 4, 5] (3 på plass)
Gjennomgang 4: [1, **2**, 3, 4, 5] (ingen bytter, ferdig!)

Boblesortering er enkel og intuitiv, men den er treg for store datasett fordi den i verste fall trenger omtrent n² sammenligninger.`,
    },
    {
      id: 'it-1-3-4-text-innsettingssortering',
      type: 'text',
      title: 'Innsettingssortering',
      content: `## Innsettingssortering (Insertion Sort)

Innsettingssortering fungerer som du sorterer spillkort på hånden. Du tar ett kort om gangen fra bunken og setter det inn på riktig plass blant de kortene du allerede holder sortert.

**Algoritme:**
1. Start med det andre elementet (det første er «sortert» alene)
2. Ta elementet og sammenlign det med elementene til venstre
3. Flytt elementene som er større ett steg til høyre
4. Sett inn elementet på riktig plass
5. Gjenta for alle gjenværende elementer

\`\`\`python
def innsettingssortering(liste):
    """Sorterer en liste med innsettingssortering."""
    for i in range(1, len(liste)):
        nokkel = liste[i]  # Elementet vi skal sette inn
        j = i - 1

        # Flytt elementer som er større enn nøkkelen
        while j >= 0 and liste[j] > nokkel:
            liste[j + 1] = liste[j]
            j -= 1

        # Sett inn nøkkelen på riktig plass
        liste[j + 1] = nokkel

    return liste

# Eksempel
tall = [5, 3, 1, 4, 2]
print(f"Usortert: {tall}")
innsettingssortering(tall)
print(f"Sortert:  {tall}")
\`\`\`

**Trinnvis for [5, 3, 1, 4, 2]:**

| Steg | Nøkkel | Handling | Resultat |
|------|--------|----------|----------|
| 1 | 3 | 3 < 5, flytt 5, sett inn 3 | [3, 5, 1, 4, 2] |
| 2 | 1 | 1 < 5, flytt 5; 1 < 3, flytt 3; sett inn 1 | [1, 3, 5, 4, 2] |
| 3 | 4 | 4 < 5, flytt 5; 4 > 3, sett inn 4 | [1, 3, 4, 5, 2] |
| 4 | 2 | 2 < 5, flytt; 2 < 4, flytt; 2 < 3, flytt; 2 > 1, sett inn | [1, 2, 3, 4, 5] |

Innsettingssortering er spesielt effektiv for lister som allerede er nesten sorterte, fordi den da gjør svært få flytteoperasjoner.`,
    },
    {
      id: 'it-1-3-4-text-utvalgssortering',
      type: 'text',
      title: 'Utvalgssortering',
      content: `## Utvalgssortering (Selection Sort)

Utvalgssortering er en annen enkel sorteringsalgoritme. Ideen er: finn det minste elementet og plasser det først. Finn deretter det nest minste og plasser det på posisjon 2, og så videre.

\`\`\`python
def utvalgssortering(liste):
    """Sorterer en liste med utvalgssortering."""
    n = len(liste)

    for i in range(n - 1):
        # Finn indeksen til det minste elementet i resten av listen
        min_indeks = i
        for j in range(i + 1, n):
            if liste[j] < liste[min_indeks]:
                min_indeks = j

        # Bytt det minste elementet med elementet på posisjon i
        liste[i], liste[min_indeks] = liste[min_indeks], liste[i]

    return liste

# Eksempel
tall = [29, 10, 14, 37, 13]
print(f"Usortert: {tall}")
utvalgssortering(tall)
print(f"Sortert:  {tall}")
\`\`\`

**Trinnvis for [29, 10, 14, 37, 13]:**

| Steg | Finner minst | Bytte | Resultat |
|------|-------------|-------|----------|
| 1 | 10 (pos 1) | Bytt 29 og 10 | [**10**, 29, 14, 37, 13] |
| 2 | 13 (pos 4) | Bytt 29 og 13 | [10, **13**, 14, 37, 29] |
| 3 | 14 (pos 2) | Allerede riktig | [10, 13, **14**, 37, 29] |
| 4 | 29 (pos 4) | Bytt 37 og 29 | [10, 13, 14, **29**, **37**] |

Utvalgssortering gjør alltid nøyaktig n(n-1)/2 sammenligninger, uavhengig av om listen er sortert eller ikke. Den er enkel å forstå, men ikke spesielt effektiv.`,
    },
    {
      id: 'it-1-3-4-text-sammenligning',
      type: 'text',
      title: 'Sammenligning av algoritmene',
      content: `## Sammenligning av søke- og sorteringsalgoritmer

**Søkealgoritmer:**

| Algoritme | Krav | Verste fall | Kommentar |
|-----------|------|-------------|-----------|
| Lineært søk | Ingen | n sammenligninger | Enkel, fungerer alltid |
| Binærsøk | Sortert liste | log₂(n) sammenligninger | Svært rask for store datasett |

For å illustrere forskjellen: i en liste med 1 000 000 elementer gjør lineært søk opptil 1 000 000 sammenligninger, mens binærsøk gjør maksimalt 20!

**Sorteringsalgoritmer:**

| Algoritme | Verste fall | Beste fall | Stabil? | Kommentar |
|-----------|-------------|------------|---------|-----------|
| Boblesortering | n² | n (optimalisert) | Ja | Enklest å forstå |
| Innsettingssortering | n² | n | Ja | Best for nesten sorterte data |
| Utvalgssortering | n² | n² | Nei | Færrest bytteoperasjoner |

Alle tre sorteringsalgoritmene har tidskompleksitet O(n²) i verste fall, noe som betyr at de blir svært trege for store datamengder. I praksis bruker Python den innebygde funksjonen \`sorted()\` eller metoden \`.sort()\`, som bruker Timsort-algoritmen med tidskompleksitet O(n log n), noe som er vesentlig raskere.

\`\`\`python
# Pythons innebygde sortering (Timsort) – bruk denne i praksis!
tall = [64, 34, 25, 12, 22, 11, 90]
sortert = sorted(tall)        # Lager ny sortert liste
tall.sort()                    # Sorterer listen direkte
\`\`\`

Likevel er det verdifullt å forstå de enklere algoritmene, fordi de illustrerer grunnleggende konsepter som sammenligning, bytting og iterasjon, og fordi de er et godt utgangspunkt for å forstå algoritmekompleksitet.`,
    },
    {
      id: 'it-1-3-4-example-1',
      type: 'example',
      title: 'Praktisk bruk: sortering og søking sammen',
      problem: `Lag et program som leser inn en liste med elevnavn, sorterer den alfabetisk med innsettingssortering, og lar brukeren søke etter et navn med binærsøk.`,
      solution: `\`\`\`python
def innsettingssortering(liste):
    for i in range(1, len(liste)):
        nokkel = liste[i]
        j = i - 1
        while j >= 0 and liste[j].lower() > nokkel.lower():
            liste[j + 1] = liste[j]
            j -= 1
        liste[j + 1] = nokkel
    return liste

def binaersok(sortert_liste, sokeord):
    lav = 0
    hoy = len(sortert_liste) - 1

    while lav <= hoy:
        midt = (lav + hoy) // 2
        if sortert_liste[midt].lower() == sokeord.lower():
            return midt
        elif sortert_liste[midt].lower() < sokeord.lower():
            lav = midt + 1
        else:
            hoy = midt - 1
    return -1

# Les inn elevnavn
elever = ["Sara", "Ole", "Anna", "Erik", "Lise", "Kari", "Per"]
print(f"Original: {elever}")

# Sorter
innsettingssortering(elever)
print(f"Sortert:  {elever}")

# Søk
navn = input("\\nSøk etter navn: ")
pos = binaersok(elever, navn)
if pos != -1:
    print(f"Fant {elever[pos]} på posisjon {pos + 1}")
else:
    print(f"{navn} finnes ikke i listen")
\`\`\`

**Kjøring:**
\`\`\`
Original: ['Sara', 'Ole', 'Anna', 'Erik', 'Lise', 'Kari', 'Per']
Sortert:  ['Anna', 'Erik', 'Kari', 'Lise', 'Ole', 'Per', 'Sara']

Søk etter navn: Kari
Fant Kari på posisjon 3
\`\`\`

Vi bruker \`.lower()\` i sammenligningene for å gjøre sorteringen og søket uavhengig av store/små bokstaver.`,
    },
    {
      id: 'it-1-3-4-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.4

**Hovedpunkter:**
- **Lineært søk** sjekker hvert element fra start til slutt – fungerer på alle lister, men er tregt (O(n))
- **Binærsøk** halverer søkeområdet i hvert steg – krever sortert liste, men er svært raskt (O(log n))
- **Boblesortering** bytter naboelementer gjentatte ganger – enkel å forstå, men treg (O(n²))
- **Innsettingssortering** setter hvert element inn på riktig plass i den sorterte delen – effektiv for nesten sorterte data
- **Utvalgssortering** finner det minste elementet og plasserer det først, deretter det nest minste, osv.
- Alle tre sorteringsalgoritmene har O(n²) i verste fall, men de illustrerer viktige konsepter
- I praksis bruker vi Pythons innebygde \`sorted()\` og \`.sort()\` som er mye raskere (O(n log n))`,
    },
    {
      id: 'it-1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er hovedforskjellen mellom lineært søk og binærsøk?`,
        options: [
          { id: 'a', text: 'Lineært søk er alltid raskere', isCorrect: false, feedback: 'Binærsøk er mye raskere for store sorterte datasett.' },
          { id: 'b', text: 'Binærsøk krever at listen er sortert, lineært søk gjør det ikke', isCorrect: true },
          { id: 'c', text: 'Lineært søk krever at listen er sortert', isCorrect: false, feedback: 'Det er omvendt – binærsøk krever sortert liste.' },
          { id: 'd', text: 'De gir alltid samme resultat med samme hastighet', isCorrect: false, feedback: 'Binærsøk er dramatisk raskere for store sorterte datasett.' },
        ],
        solution: `Binærsøk krever at listen er sortert, men til gjengjeld er den ekstremt effektiv fordi den halverer søkeområdet i hvert steg (O(log n)). Lineært søk fungerer på alle lister, men er tregere fordi den sjekker hvert element (O(n)).`,
      },
    },
    {
      id: 'it-1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hvor mange sammenligninger trenger binærsøk maksimalt for å finne et element i en sortert liste med 1024 elementer?`,
        options: [
          { id: 'a', text: '1024', isCorrect: false, feedback: 'Det er lineært søk som trenger opptil 1024 sammenligninger.' },
          { id: 'b', text: '512', isCorrect: false, feedback: 'Binærsøk halverer listen, det blir ikke halvparten av n.' },
          { id: 'c', text: '10', isCorrect: true },
          { id: 'd', text: '100', isCorrect: false, feedback: 'Binærsøk trenger log₂(n) sammenligninger.' },
        ],
        solution: `Binærsøk trenger maksimalt log₂(n) sammenligninger. log₂(1024) = 10, fordi 2¹⁰ = 1024. Etter 10 halveringer har du bare 1 element igjen. Sammenlignet med 1024 sammenligninger for lineært søk er dette en enorm forbedring.`,
      },
    },
    {
      id: 'it-1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-3',
        number: '3.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `I boblesortering, hva skjer i den første gjennomgangen av listen [5, 3, 8, 1, 4]?`,
        options: [
          { id: 'a', text: 'Det minste elementet plasseres først', isCorrect: false, feedback: 'Det er utvalgssortering som plasserer det minste først.' },
          { id: 'b', text: 'Det største elementet bobler opp til siste posisjon', isCorrect: true },
          { id: 'c', text: 'Listen blir fullstendig sortert', isCorrect: false, feedback: 'Boblesortering trenger flere gjennomganger for å sortere listen helt.' },
          { id: 'd', text: 'Alle elementer flyttes én posisjon til venstre', isCorrect: false, feedback: 'Boblesortering bytter bare naboelementer som er i feil rekkefølge.' },
        ],
        solution: `I første gjennomgang sammenlignes naboelementer og byttes om nødvendig: [5,3]→bytt→[3,5,8,1,4], [5,8]→ok, [8,1]→bytt→[3,5,1,8,4], [8,4]→bytt→[3,5,1,4,8]. Det største elementet (8) har boblet opp til siste posisjon.`,
      },
    },
    {
      id: 'it-1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Gå gjennom binærsøk steg for steg for å finne tallet 13 i listen [2, 5, 8, 13, 17, 21, 25, 30]. Skriv ned verdiene for lav, hoy og midt i hvert steg.`,
        solution: `Liste: [2, 5, 8, 13, 17, 21, 25, 30], søker etter 13.

**Steg 1:** lav=0, hoy=7, midt=(0+7)//2=3, liste[3]=13
13 == 13 → Funnet på posisjon 3!

Binærsøk fant 13 med bare 1 sammenligning! Elementet lå akkurat på midten av listen.

Hadde vi søkt etter 5:
**Steg 1:** lav=0, hoy=7, midt=3, liste[3]=13, 5<13 → hoy=2
**Steg 2:** lav=0, hoy=2, midt=1, liste[1]=5, 5==5 → Funnet på posisjon 1!

Bare 2 sammenligninger for 8 elementer.`,
      },
    },
    {
      id: 'it-1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Implementer en funksjon i Python som bruker utvalgssortering til å sortere en liste med ordbøker etter en gitt nøkkel. For eksempel skal listen [{"navn": "Sara", "alder": 17}, {"navn": "Ole", "alder": 16}] kunne sorteres etter "alder" eller "navn".`,
        solution: `\`\`\`python
def utvalgssortering_ordbok(liste, nokkel):
    """Sorterer en liste med ordbøker etter en gitt nøkkel."""
    n = len(liste)

    for i in range(n - 1):
        min_indeks = i
        for j in range(i + 1, n):
            if liste[j][nokkel] < liste[min_indeks][nokkel]:
                min_indeks = j
        liste[i], liste[min_indeks] = liste[min_indeks], liste[i]

    return liste

# Eksempel
elever = [
    {"navn": "Sara", "alder": 17},
    {"navn": "Ole", "alder": 16},
    {"navn": "Anna", "alder": 18},
    {"navn": "Erik", "alder": 15},
]

print("Sortert etter alder:")
utvalgssortering_ordbok(elever, "alder")
for elev in elever:
    print(f"  {elev['navn']}: {elev['alder']} år")

print("\\nSortert etter navn:")
utvalgssortering_ordbok(elever, "navn")
for elev in elever:
    print(f"  {elev['navn']}: {elev['alder']} år")
\`\`\`

**Kjøring:**
\`\`\`
Sortert etter alder:
  Erik: 15 år
  Ole: 16 år
  Sara: 17 år
  Anna: 18 år

Sortert etter navn:
  Anna: 18 år
  Erik: 15 år
  Ole: 16 år
  Sara: 17 år
\`\`\``,
      },
    },
    {
      id: 'it-1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et Python-program som sammenligner hastigheten til lineært søk og binærsøk. Programmet skal lage en sortert liste med 100 000 tall, søke etter et bestemt tall med begge metoder, og telle antall sammenligninger hver metode gjør.`,
        solution: `\`\`\`python
def lineaert_sok_teller(liste, sokeord):
    """Lineært søk som teller sammenligninger."""
    sammenligninger = 0
    for i in range(len(liste)):
        sammenligninger += 1
        if liste[i] == sokeord:
            return i, sammenligninger
    return -1, sammenligninger

def binaersok_teller(sortert_liste, sokeord):
    """Binærsøk som teller sammenligninger."""
    lav = 0
    hoy = len(sortert_liste) - 1
    sammenligninger = 0

    while lav <= hoy:
        sammenligninger += 1
        midt = (lav + hoy) // 2
        if sortert_liste[midt] == sokeord:
            return midt, sammenligninger
        elif sortert_liste[midt] < sokeord:
            lav = midt + 1
        else:
            hoy = midt - 1

    return -1, sammenligninger

# Test med en stor liste
import random
n = 100_000
liste = sorted(random.sample(range(n * 10), n))
sokeord = liste[random.randint(0, n - 1)]  # Velg et tall vi vet finnes

pos_lin, teller_lin = lineaert_sok_teller(liste, sokeord)
pos_bin, teller_bin = binaersok_teller(liste, sokeord)

print(f"Søker etter {sokeord} i en liste med {n} elementer:")
print(f"Lineært søk:  funnet på posisjon {pos_lin}, {teller_lin} sammenligninger")
print(f"Binærsøk:     funnet på posisjon {pos_bin}, {teller_bin} sammenligninger")
print(f"Binærsøk var {teller_lin / teller_bin:.0f}x raskere!")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Søker etter 534721 i en liste med 100000 elementer:
Lineært søk:  funnet på posisjon 53461, 53462 sammenligninger
Binærsøk:     funnet på posisjon 53461, 17 sammenligninger
Binærsøk var 3145x raskere!
\`\`\``,
      },
    },
    {
      id: 'it-1-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-4-ex-7',
        number: '3.4.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hvilken sorteringsalgoritme er mest effektiv for en liste som allerede er nesten sortert (f.eks. bare 2-3 elementer er på feil plass)?`,
        options: [
          { id: 'a', text: 'Boblesortering', isCorrect: false, feedback: 'Boblesortering kan dra nytte av det med optimaliseringen, men innsettingssortering er enda bedre.' },
          { id: 'b', text: 'Innsettingssortering', isCorrect: true },
          { id: 'c', text: 'Utvalgssortering', isCorrect: false, feedback: 'Utvalgssortering gjør alltid n(n-1)/2 sammenligninger uansett.' },
          { id: 'd', text: 'Alle er like effektive', isCorrect: false, feedback: 'For nesten sorterte data er det store forskjeller.' },
        ],
        solution: `Innsettingssortering er klart best for nesten sorterte lister fordi den i beste fall bare trenger n-1 sammenligninger (O(n)). Hvert element trenger bare å flyttes noen få plasser. Utvalgssortering gjør alltid like mange sammenligninger uansett. Boblesortering med optimalisering kan også være god, men innsettingssortering er generelt å foretrekke.`,
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3.5: Rekursjon og algoritmekompleksitet
// ============================================================================

export const CHAPTER_IT_1_3_5: TextbookChapter = {
  id: 'it-1-3-5',
  courseId: 'it-1',
  chapterNumber: '3.5',
  title: 'Rekursjon og algoritmekompleksitet',
  description: 'Lær hva rekursjon er og hvordan rekursive funksjoner fungerer, og forstå grunnleggende algoritmekompleksitet med Big O-notasjon for å vurdere effektiviteten til algoritmer.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-3-4',
  nextChapter: 'it-1-4-1',
  competenceGoals: [
    'forklare hva rekursjon er og implementere rekursive funksjoner i Python',
    'identifisere basistilfelle og rekursivt tilfelle i en rekursiv funksjon',
    'bruke Big O-notasjon til å beskrive og sammenligne algoritmers effektivitet',
  ],
  keyTerms: [
    { term: 'Rekursjon', definition: 'En programmeringsteknikk der en funksjon kaller seg selv for å løse et problem. Problemet brytes ned i stadig mindre delproblemer til man når et basistilfelle som kan løses direkte uten flere rekursive kall.' },
    { term: 'Basistilfelle', definition: 'Det enkleste tilfellet i en rekursiv funksjon som kan løses direkte uten å kalle funksjonen på nytt. Uten et basistilfelle ville den rekursive funksjonen kalle seg selv uendelig mange ganger og aldri stoppe.' },
    { term: 'Rekursivt tilfelle', definition: 'Tilfellet i en rekursiv funksjon der funksjonen kaller seg selv med et forenklet delproblem. Hvert rekursivt kall bringer problemet nærmere basistilfellet.' },
    { term: 'Big O-notasjon', definition: 'En matematisk notasjon som beskriver den øvre grensen for en algoritmes tids- eller plassforbruk som funksjon av inndatastørrelsen n. For eksempel betyr O(n) at tiden vokser lineært med n, mens O(n²) betyr at tiden vokser kvadratisk.' },
    { term: 'Tidskompleksitet', definition: 'Et mål på hvor lang tid en algoritme bruker som funksjon av inndatastørrelsen. Måles vanligvis i antall grunnleggende operasjoner (som sammenligninger) og uttrykkes med Big O-notasjon.' },
    { term: 'Kallstakk', definition: 'En datastruktur i minnet som holder styr på alle aktive funksjonskall. Ved rekursjon legges hvert kall på stakken til basistilfellet nås, og deretter avvikles kallene i omvendt rekkefølge. For mange rekursive kall kan gi «stack overflow».' },
    { term: 'Logaritmisk tid', definition: 'En algoritme med tidskompleksitet O(log n) der tiden vokser svært sakte i forhold til inndatastørrelsen. Binærsøk er et typisk eksempel. Å doble inndatastørrelsen gir bare ett ekstra steg.' },
    { term: 'Stack overflow', definition: 'En feil som oppstår når kallstakken blir full, typisk fordi en rekursiv funksjon kaller seg selv for mange ganger uten å nå basistilfellet. I Python er standardgrensen ca. 1000 rekursive kall.' },
  ],
  exercises: [],
  content: [
    {
      id: 'it-1-3-5-intro',
      type: 'text',
      content: `# Rekursjon og algoritmekompleksitet

Tenk deg at du står foran et speil som reflekterer et annet speil. Du ser deg selv, som ser deg selv, som ser deg selv, i en tilsynelatende uendelig rekke av refleksjoner. Dette er en visuell metafor for rekursjon: noe som refererer til seg selv.

I programmering er rekursjon en kraftig teknikk der en funksjon løser et problem ved å kalle seg selv med et enklere delproblem. Det kan virke magisk, kanskje til og med litt forvirrende, den første gangen du ser det, men det er egentlig et elegant verktøy for å løse problemer som naturlig kan deles inn i like, men enklere delproblemer.

I tillegg til rekursjon skal vi i dette kapittelet se på algoritmekompleksitet, en måte å måle og sammenligne effektiviteten til algoritmer. Vi har allerede sett at binærsøk er raskere enn lineært søk, og at sorteringsalgoritmer har forskjellig ytelse. Big O-notasjonen gir oss et presist språk for å snakke om disse forskjellene.`,
    },
    {
      id: 'it-1-3-5-def-rekursjon',
      type: 'definition',
      title: 'Rekursjon',
      content: `**Rekursjon** er en problemløsningsteknikk der en funksjon løser et problem ved å kalle seg selv med en forenklet versjon av det samme problemet. En rekursiv funksjon har alltid to deler: (1) et **basistilfelle** som stopper rekursjonen og gir et direkte svar, og (2) et **rekursivt tilfelle** der funksjonen kaller seg selv med et mindre problem. Uten et basistilfelle ville funksjonen kalle seg selv uendelig mange ganger og til slutt krasje med en «stack overflow»-feil.`,
    },
    {
      id: 'it-1-3-5-text-fakultet',
      type: 'text',
      title: 'Rekursjon: fakultet',
      content: `## Rekursjon med fakultet

Det klassiske eksempelet på rekursjon er beregning av fakultet. Fakultet av n (skrevet n!) er produktet av alle positive heltall fra 1 til n:

- 5! = 5 × 4 × 3 × 2 × 1 = 120
- 3! = 3 × 2 × 1 = 6
- 1! = 1
- 0! = 1 (per definisjon)

Det finnes en elegant rekursiv definisjon:
- n! = n × (n-1)! for n > 0
- 0! = 1 (basistilfelle)

Altså: 5! = 5 × 4!, og 4! = 4 × 3!, og så videre til vi når 0! = 1.

**Iterativ løsning (med løkke):**
\`\`\`python
def fakultet_iterativ(n):
    resultat = 1
    for i in range(1, n + 1):
        resultat *= i
    return resultat
\`\`\`

**Rekursiv løsning:**
\`\`\`python
def fakultet(n):
    # Basistilfelle
    if n == 0:
        return 1
    # Rekursivt tilfelle
    return n * fakultet(n - 1)

print(fakultet(5))  # 120
print(fakultet(0))  # 1
\`\`\`

**Hva skjer når vi kaller \`fakultet(4)\`?**

\`\`\`
fakultet(4) = 4 * fakultet(3)
                   = 3 * fakultet(2)
                            = 2 * fakultet(1)
                                     = 1 * fakultet(0)
                                              = 1  ← basistilfelle!
                                     = 1 * 1 = 1
                            = 2 * 1 = 2
                   = 3 * 2 = 6
             = 4 * 6 = 24
\`\`\`

Funksjonen kaller seg selv med stadig mindre verdier av n til den når basistilfellet (n == 0). Deretter «rulles» resultatet tilbake opp gjennom alle kallene.`,
    },
    {
      id: 'it-1-3-5-example-1',
      type: 'example',
      title: 'Rekursiv summasjon',
      problem: `Skriv en rekursiv funksjon som beregner summen av tallene fra 1 til n.`,
      solution: `**Rekursiv definisjon:**
- sum(n) = n + sum(n-1) for n > 0
- sum(0) = 0 (basistilfelle)

\`\`\`python
def sum_rekursiv(n):
    # Basistilfelle
    if n == 0:
        return 0
    # Rekursivt tilfelle
    return n + sum_rekursiv(n - 1)

print(sum_rekursiv(5))   # 15 (1+2+3+4+5)
print(sum_rekursiv(100)) # 5050
\`\`\`

**Oppruling av sum_rekursiv(5):**
\`\`\`
sum_rekursiv(5) = 5 + sum_rekursiv(4)
                = 5 + 4 + sum_rekursiv(3)
                = 5 + 4 + 3 + sum_rekursiv(2)
                = 5 + 4 + 3 + 2 + sum_rekursiv(1)
                = 5 + 4 + 3 + 2 + 1 + sum_rekursiv(0)
                = 5 + 4 + 3 + 2 + 1 + 0
                = 15
\`\`\`

Merk: Gauss fant en formel for denne summen: n × (n+1) / 2. For n = 100 gir det 100 × 101 / 2 = 5050. Men den rekursive versjonen illustrerer prinsippet godt.`,
    },
    {
      id: 'it-1-3-5-text-fibonacci',
      type: 'text',
      title: 'Fibonacci-tallene',
      content: `## Fibonacci-tallene

Fibonacci-tallrekken er et berømt eksempel som passer naturlig til rekursjon. Hvert tall er summen av de to foregående:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

**Rekursiv definisjon:**
- fib(0) = 0
- fib(1) = 1
- fib(n) = fib(n-1) + fib(n-2) for n > 1

\`\`\`python
def fibonacci(n):
    # Basistilfeller
    if n == 0:
        return 0
    if n == 1:
        return 1
    # Rekursivt tilfelle
    return fibonacci(n - 1) + fibonacci(n - 2)

# Skriv ut de 10 første Fibonacci-tallene
for i in range(10):
    print(f"fib({i}) = {fibonacci(i)}")
\`\`\`

**Kjøring:**
\`\`\`
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
\`\`\`

Fibonacci-rekursjonen har et viktig problem: den er svært ineffektiv! For å beregne \`fibonacci(5)\` kalles \`fibonacci(3)\` to ganger, \`fibonacci(2)\` tre ganger, og så videre. Antall kall vokser eksponentielt. \`fibonacci(40)\` kan ta flere sekunder, og \`fibonacci(100)\` ville ta lengre enn universets levetid!

**Effektiv iterativ versjon:**
\`\`\`python
def fibonacci_effektiv(n):
    if n <= 1:
        return n
    forrige = 0
    naavaerende = 1
    for _ in range(2, n + 1):
        forrige, naavaerende = naavaerende, forrige + naavaerende
    return naavaerende

print(fibonacci_effektiv(50))  # 12586269025 (umiddelbart!)
\`\`\`

Denne iterative versjonen beregner \`fibonacci(50)\` umiddelbart, mens den rekursive versjonen ville bruke ufattelig lang tid. Dette illustrerer at rekursjon ikke alltid er den beste løsningen, selv om den er elegant.`,
    },
    {
      id: 'it-1-3-5-warning-1',
      type: 'warning',
      title: 'Rekursjonsgrense i Python',
      content: `Python har en standard rekursjonsgrense på omtrent 1000 kall. Hvis en rekursiv funksjon kaller seg selv mer enn 1000 ganger uten å nå basistilfellet, krasjer programmet med en \`RecursionError: maximum recursion depth exceeded\`. Dette er en sikkerhetsmekanisme for å forhindre at programmet bruker alt minne. For problemer som krever mer enn 1000 rekursive kall, bør du bruke en iterativ løsning i stedet.`,
    },
    {
      id: 'it-1-3-5-example-2',
      type: 'example',
      title: 'Rekursivt binærsøk',
      problem: `Implementer binærsøk som en rekursiv funksjon i Python.`,
      solution: `\`\`\`python
def binaersok_rekursiv(liste, sokeord, lav, hoy):
    """Rekursivt binærsøk."""
    # Basistilfelle: elementet finnes ikke
    if lav > hoy:
        return -1

    midt = (lav + hoy) // 2

    # Basistilfelle: elementet er funnet
    if liste[midt] == sokeord:
        return midt

    # Rekursivt tilfelle: søk i riktig halvdel
    if liste[midt] < sokeord:
        return binaersok_rekursiv(liste, sokeord, midt + 1, hoy)
    else:
        return binaersok_rekursiv(liste, sokeord, lav, midt - 1)

# Bruk
sortert = [2, 5, 8, 13, 17, 21, 25, 30]

resultat = binaersok_rekursiv(sortert, 17, 0, len(sortert) - 1)
print(f"Fant 17 på posisjon {resultat}")  # 4

resultat = binaersok_rekursiv(sortert, 10, 0, len(sortert) - 1)
print(f"Fant 10 på posisjon {resultat}")  # -1
\`\`\`

**Gjennomgang for å finne 17 i [2, 5, 8, 13, 17, 21, 25, 30]:**

1. Kall 1: lav=0, hoy=7, midt=3, liste[3]=13 < 17 → søk høyre
2. Kall 2: lav=4, hoy=7, midt=5, liste[5]=21 > 17 → søk venstre
3. Kall 3: lav=4, hoy=4, midt=4, liste[4]=17 == 17 → Funnet!

Den rekursive versjonen er elegant fordi den gjenspeiler algoritmen direkte: halvér, velg side, gjenta. Hvert rekursivt kall reduserer søkeområdet til det halve.`,
    },
    {
      id: 'it-1-3-5-def-bigo',
      type: 'definition',
      title: 'Big O-notasjon',
      content: `**Big O-notasjon** er en matematisk notasjon som beskriver den øvre grensen for en algoritmes ressursbruk (tid eller plass) som funksjon av inndatastørrelsen n. Den fokuserer på hvordan ressursbruken *vokser* når n øker, og ignorerer konstante faktorer og lavere ordens ledd. For eksempel: en algoritme som gjør 3n² + 5n + 10 operasjoner har tidskompleksitet O(n²), fordi n²-leddet dominerer for store verdier av n.`,
    },
    {
      id: 'it-1-3-5-text-bigo',
      type: 'text',
      title: 'Forstå Big O-notasjon',
      content: `## Forstå Big O-notasjon

Big O-notasjon gir oss et språk for å snakke om hvor raskt en algoritme vokser i tid eller plass når inndataen blir større. Vi bryr oss ikke om nøyaktig antall operasjoner, men om veksthastigheten.

**De vanligste kompleksitetsklassene (fra raskest til tregest):**

| Big O | Navn | Eksempel | 1000 elementer |
|-------|------|----------|----------------|
| O(1) | Konstant | Tilgang til listelement via indeks | 1 operasjon |
| O(log n) | Logaritmisk | Binærsøk | ~10 operasjoner |
| O(n) | Lineær | Lineært søk | 1 000 operasjoner |
| O(n log n) | Linearitmisk | Pythons innebygde sortering | ~10 000 operasjoner |
| O(n²) | Kvadratisk | Boblesortering | 1 000 000 operasjoner |
| O(2ⁿ) | Eksponentiell | Naiv Fibonacci-rekursjon | ~10³⁰⁰ operasjoner |

**Hvorfor er dette viktig?**

Tenk deg at du har en algoritme som fungerer fint for 100 elementer, men brukerne dine har 1 000 000 elementer:

- **O(n)**: 1 000 000 operasjoner – tar millisekunder
- **O(n log n)**: ~20 000 000 operasjoner – tar sekunder
- **O(n²)**: 1 000 000 000 000 operasjoner – tar timer eller dager!

Forskjellen mellom O(n) og O(n²) kan bety forskjellen mellom et program som kjører på et sekund og et som tar en uke.`,
    },
    {
      id: 'it-1-3-5-text-bigo-eksempler',
      type: 'text',
      title: 'Big O i praksis',
      content: `## Big O i praksis: hvordan bestemme kompleksiteten

**O(1) – Konstant tid:**
Operasjonen tar like lang tid uansett størrelsen på inndataen.
\`\`\`python
# O(1) – å hente et element fra en liste via indeks
def hent_forste(liste):
    return liste[0]  # Alltid 1 operasjon
\`\`\`

**O(n) – Lineær tid:**
Tiden vokser proporsjonalt med inndataen. Én løkke gjennom n elementer.
\`\`\`python
# O(n) – lineært søk
def finn_maks(liste):
    storst = liste[0]
    for tall in liste:       # n gjennomløp
        if tall > storst:
            storst = tall
    return storst
\`\`\`

**O(n²) – Kvadratisk tid:**
Nøstede løkker der begge går gjennom n elementer.
\`\`\`python
# O(n²) – boblesortering
def boblesortering(liste):
    n = len(liste)
    for i in range(n):           # n gjennomløp
        for j in range(n - 1):   # n gjennomløp for hvert i
            if liste[j] > liste[j + 1]:
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
\`\`\`

**O(log n) – Logaritmisk tid:**
Halverer dataene i hvert steg.
\`\`\`python
# O(log n) – binærsøk halverer søkeområdet
def binaersok(liste, maal):
    lav, hoy = 0, len(liste) - 1
    while lav <= hoy:            # Halverer for hvert steg
        midt = (lav + hoy) // 2
        if liste[midt] == maal:
            return midt
        elif liste[midt] < maal:
            lav = midt + 1
        else:
            hoy = midt - 1
    return -1
\`\`\`

**Tommelfingerregler:**
- Én enkel løkke gjennom n elementer → O(n)
- To nøstede løkker gjennom n elementer → O(n²)
- Tre nøstede løkker → O(n³)
- Halvering i hvert steg → O(log n)
- Én løkke med halvering i hvert steg → O(n log n)`,
    },
    {
      id: 'it-1-3-5-example-3',
      type: 'example',
      title: 'Sammenligning av algoritmekompleksitet i praksis',
      problem: `Skriv et Python-program som måler tiden det tar å sortere lister av ulike størrelser med boblesortering vs. Pythons innebygde sortering, for å demonstrere forskjellen mellom O(n²) og O(n log n).`,
      solution: `\`\`\`python
import time
import random

def boblesortering(liste):
    n = len(liste)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if liste[j] > liste[j + 1]:
                liste[j], liste[j + 1] = liste[j + 1], liste[j]

storrelser = [1000, 2000, 5000, 10000]

print(f"{'Størrelse':<12} {'Boblesortering':<18} {'sorted()':<12}")
print("-" * 42)

for n in storrelser:
    data = [random.randint(0, 100000) for _ in range(n)]

    # Boblesortering
    kopi1 = data.copy()
    start = time.time()
    boblesortering(kopi1)
    tid_boble = time.time() - start

    # Pythons innebygde sortering
    kopi2 = data.copy()
    start = time.time()
    sorted(kopi2)
    tid_python = time.time() - start

    print(f"{n:<12} {tid_boble:<18.4f} {tid_python:<12.6f}")
\`\`\`

**Typisk kjøring:**
\`\`\`
Størrelse    Boblesortering     sorted()
------------------------------------------
1000         0.0450             0.000080
2000         0.1780             0.000170
5000         1.1200             0.000450
10000        4.4800             0.000950
\`\`\`

Legg merke til at boblesortering (O(n²)) bruker ~4x lenger tid når n dobles, mens sorted() (O(n log n)) vokser mye saktere. For 10 000 elementer er Pythons innebygde sortering omtrent 4700x raskere!`,
    },
    {
      id: 'it-1-3-5-tip-1',
      type: 'tip',
      title: 'Når bør du bruke rekursjon?',
      content: `Rekursjon er spesielt nyttig for problemer som naturlig kan deles inn i like delproblemer, som trestrukturer, mappehierarkier, og «del og hersk»-algoritmer. For enkle problemer som summer og fakultet er iterasjon ofte enklere og mer effektivt. En god tommelfingerregel: bruk rekursjon når problemet er naturlig rekursivt (som å traversere et tre), og iterasjon når det er en enkel gjentakelse. I IT 1 er det viktigst å forstå konseptet og kunne implementere enkle eksempler.`,
    },
    {
      id: 'it-1-3-5-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 3.5

**Hovedpunkter:**
- **Rekursjon** er en teknikk der en funksjon kaller seg selv for å løse et problem
- Alle rekursive funksjoner trenger et **basistilfelle** (stoppbetingelse) og et **rekursivt tilfelle**
- Uten basistilfelle oppstår uendelig rekursjon og stack overflow
- Rekursjon er elegant, men ikke alltid effektivt (som naiv Fibonacci)
- **Big O-notasjon** beskriver hvordan en algoritmes tid eller plass vokser med inndatastørrelsen
- De viktigste kompleksitetsklassene: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)
- Valg av algoritme har enorm betydning for ytelsen ved store datamengder
- I praksis bruker vi Pythons innebygde funksjoner (O(n log n)) for sortering, men det er viktig å forstå hvorfor de er raske`,
    },
    {
      id: 'it-1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva er de to nødvendige delene i en rekursiv funksjon?`,
        options: [
          { id: 'a', text: 'En for-løkke og en if-setning', isCorrect: false, feedback: 'Rekursive funksjoner bruker vanligvis ikke for-løkker.' },
          { id: 'b', text: 'Et basistilfelle og et rekursivt tilfelle', isCorrect: true },
          { id: 'c', text: 'En input og en output', isCorrect: false, feedback: 'Alle funksjoner har input og output, men det er ikke det som definerer rekursjon.' },
          { id: 'd', text: 'En while-løkke og en variabel', isCorrect: false, feedback: 'While-løkker brukes i iterative løsninger, ikke rekursive.' },
        ],
        solution: `En rekursiv funksjon trenger et basistilfelle som stopper rekursjonen og gir et direkte svar, og et rekursivt tilfelle der funksjonen kaller seg selv med et forenklet problem. Uten basistilfellet ville rekursjonen aldri stoppe.`,
      },
    },
    {
      id: 'it-1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva betyr O(n) i Big O-notasjon?`,
        options: [
          { id: 'a', text: 'Algoritmen tar alltid nøyaktig n millisekunder', isCorrect: false, feedback: 'Big O handler om vekst, ikke om nøyaktig tid i millisekunder.' },
          { id: 'b', text: 'Tiden vokser lineært med inndatastørrelsen n', isCorrect: true },
          { id: 'c', text: 'Algoritmen er den raskeste mulige', isCorrect: false, feedback: 'O(1) og O(log n) er raskere enn O(n).' },
          { id: 'd', text: 'Algoritmen bruker n megabyte minne', isCorrect: false, feedback: 'Big O kan beskrive minne, men O(n) refererer vanligvis til tid, og verdien er ikke i megabyte.' },
        ],
        solution: `O(n) betyr at algoritmens tidsforbruk vokser proporsjonalt (lineært) med inndatastørrelsen n. Dobler du inndataen, dobles omtrent tiden. Et typisk eksempel er lineært søk som i verste fall sjekker alle n elementer.`,
      },
    },
    {
      id: 'it-1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva returnerer denne rekursive funksjonen for kallet \`mysterium(4)\`?\n\n\`\`\`python\ndef mysterium(n):\n    if n == 0:\n        return 0\n    return n + mysterium(n - 1)\n\`\`\``,
        options: [
          { id: 'a', text: '4', isCorrect: false, feedback: 'Funksjonen legger sammen n + (n-1) + ... + 0.' },
          { id: 'b', text: '10', isCorrect: true },
          { id: 'c', text: '24', isCorrect: false, feedback: '24 er 4! (fakultet). Denne funksjonen bruker addisjon, ikke multiplikasjon.' },
          { id: 'd', text: '0', isCorrect: false, feedback: 'Bare basistilfellet returnerer 0. For n=4 returneres 4+3+2+1+0.' },
        ],
        solution: `mysterium(4) = 4 + mysterium(3) = 4 + 3 + mysterium(2) = 4 + 3 + 2 + mysterium(1) = 4 + 3 + 2 + 1 + mysterium(0) = 4 + 3 + 2 + 1 + 0 = 10. Funksjonen beregner summen av tallene fra 0 til n.`,
      },
    },
    {
      id: 'it-1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-4',
        number: '3.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Ranger disse Big O-kompleksitetene fra raskest til tregest: O(n²), O(1), O(n log n), O(log n), O(n)`,
        options: [
          { id: 'a', text: 'O(1), O(log n), O(n), O(n log n), O(n²)', isCorrect: true },
          { id: 'b', text: 'O(1), O(n), O(log n), O(n log n), O(n²)', isCorrect: false, feedback: 'O(log n) er raskere enn O(n), ikke tregere.' },
          { id: 'c', text: 'O(n²), O(n log n), O(n), O(log n), O(1)', isCorrect: false, feedback: 'Dette er fra tregest til raskest, ikke fra raskest til tregest.' },
          { id: 'd', text: 'O(1), O(log n), O(n log n), O(n), O(n²)', isCorrect: false, feedback: 'O(n) er raskere enn O(n log n), ikke tregere.' },
        ],
        solution: `Riktig rekkefølge fra raskest til tregest: O(1) konstant < O(log n) logaritmisk < O(n) lineær < O(n log n) linearitmisk < O(n²) kvadratisk. For store verdier av n er denne forskjellen dramatisk.`,
      },
    },
    {
      id: 'it-1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv en rekursiv funksjon \`potens(base, eksponent)\` som beregner base opphøyd i eksponent uten å bruke **-operatoren. For eksempel skal potens(2, 5) returnere 32. Identifiser basistilfellet og det rekursive tilfellet.`,
        solution: `**Basistilfelle:** eksponent == 0 → returner 1 (ethvert tall opphøyd i 0 er 1)
**Rekursivt tilfelle:** base × potens(base, eksponent - 1)

\`\`\`python
def potens(base, eksponent):
    # Basistilfelle
    if eksponent == 0:
        return 1
    # Rekursivt tilfelle
    return base * potens(base, eksponent - 1)

print(potens(2, 5))   # 32 (2*2*2*2*2)
print(potens(3, 4))   # 81 (3*3*3*3)
print(potens(10, 0))  # 1
print(potens(7, 1))   # 7
\`\`\`

**Oppruling av potens(2, 5):**
\`\`\`
potens(2, 5) = 2 * potens(2, 4)
             = 2 * 2 * potens(2, 3)
             = 2 * 2 * 2 * potens(2, 2)
             = 2 * 2 * 2 * 2 * potens(2, 1)
             = 2 * 2 * 2 * 2 * 2 * potens(2, 0)
             = 2 * 2 * 2 * 2 * 2 * 1
             = 32
\`\`\``,
      },
    },
    {
      id: 'it-1-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en rekursiv funksjon \`reverser(tekst)\` som reverserer en streng. For eksempel skal reverser("hallo") returnere "ollah". Hint: basistilfellet er en tom streng eller én bokstav. Det rekursive tilfellet flytter første bokstav til slutten.`,
        solution: `\`\`\`python
def reverser(tekst):
    # Basistilfelle: tom streng eller ett tegn
    if len(tekst) <= 1:
        return tekst
    # Rekursivt tilfelle: reverser resten, legg første tegn til slutt
    return reverser(tekst[1:]) + tekst[0]

print(reverser("hallo"))    # "ollah"
print(reverser("Python"))   # "nohtyP"
print(reverser("abcde"))    # "edcba"
print(reverser("a"))        # "a"
print(reverser(""))         # ""
\`\`\`

**Oppruling av reverser("hei"):**
\`\`\`
reverser("hei") = reverser("ei") + "h"
                = (reverser("i") + "e") + "h"
                = (("i") + "e") + "h"
                = "ie" + "h"
                = "ieh"
\`\`\`

Funksjonen tar resten av strengen (alt unntatt første tegn), reverserer den rekursivt, og legger det første tegnet til slutt.`,
      },
    },
    {
      id: 'it-1-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bestem Big O-kompleksiteten for hver av disse Python-funksjonene og forklar hvorfor:\n\n\`\`\`python\n# Funksjon A\ndef funk_a(n):\n    return n * (n + 1) / 2\n\n# Funksjon B\ndef funk_b(liste):\n    for element in liste:\n        print(element)\n\n# Funksjon C\ndef funk_c(liste):\n    for i in liste:\n        for j in liste:\n            print(i, j)\n\`\`\``,
        solution: `**Funksjon A: O(1) – Konstant tid**
Uansett hvor stor n er, utfører funksjonen nøyaktig én beregning (en multiplikasjon, en addisjon og en divisjon). Antall operasjoner er uavhengig av n.

**Funksjon B: O(n) – Lineær tid**
Funksjonen har én løkke som går gjennom alle n elementer i listen. Dobler du listen, dobles antall operasjoner.

**Funksjon C: O(n²) – Kvadratisk tid**
Funksjonen har to nøstede løkker som begge går gjennom alle n elementer. For hvert av de n elementene i den ytre løkken, kjøres den indre løkken n ganger. Totalt: n × n = n² operasjoner. Dobler du listen, firedobles antall operasjoner.`,
      },
    },
    {
      id: 'it-1-3-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-3-5-ex-8',
        number: '3.5.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva er tidskompleksiteten til denne funksjonen?\n\n\`\`\`python\ndef mysterie(n):\n    i = n\n    teller = 0\n    while i > 1:\n        i = i // 2\n        teller += 1\n    return teller\n\`\`\``,
        options: [
          { id: 'a', text: 'O(n)', isCorrect: false, feedback: 'Verdien halveres i hvert steg, ikke reduseres med 1.' },
          { id: 'b', text: 'O(n²)', isCorrect: false, feedback: 'Det er bare én løkke, og den halverer i.' },
          { id: 'c', text: 'O(log n)', isCorrect: true },
          { id: 'd', text: 'O(1)', isCorrect: false, feedback: 'Antall iterasjoner avhenger av størrelsen på n.' },
        ],
        solution: `Funksjonen halverer i i hvert steg av while-løkken. For n=8: i=8→4→2→1 (3 steg). For n=16: i=16→8→4→2→1 (4 steg). For n=1024: 10 steg. Antall steg er log₂(n), altså O(log n). Funksjonen beregner faktisk gulv av log₂(n).`,
      },
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 3
// ============================================================================

export const IT_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_3_1,
  CHAPTER_IT_1_3_2,
  CHAPTER_IT_1_3_3,
  CHAPTER_IT_1_3_4,
  CHAPTER_IT_1_3_5,
];

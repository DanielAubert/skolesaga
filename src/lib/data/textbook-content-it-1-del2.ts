/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 2: Grunnleggende programmering (Kapittel 2.1–2.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Hva er programmering?
// ============================================================================

export const CHAPTER_IT_1_2_1: TextbookChapter = {
  id: 'it-1-2-1',
  courseId: 'it-1',
  chapterNumber: '2.1',
  title: 'Hva er programmering?',
  description: 'Lær hva programmering er, forskjellen på kompilerte og tolkede språk, hvordan du setter opp et utviklingsmiljø (IDE), og skriv ditt første Python-program.',
  estimatedMinutes: 45,
  prevChapter: 'it-1-1-5',
  nextChapter: 'it-1-2-2',
  competenceGoals: [
    'forklare hva programmering er og hvorfor det er nyttig',
    'beskrive forskjellen mellom kompilerte og tolkede programmeringsspråk',
    'sette opp et utviklingsmiljø og skrive enkle programmer',
  ],
  keyTerms: [
    { term: 'Programmering', definition: 'Prosessen med å skrive instruksjoner (kode) som en datamaskin kan forstå og utføre for å løse en bestemt oppgave.' },
    { term: 'Programmeringsspråk', definition: 'Et formelt språk med regler for syntaks og semantikk som brukes til å skrive dataprogrammer. Eksempler er Python, JavaScript og Java.' },
    { term: 'Kompilering', definition: 'Prosessen der hele kildekoden oversettes til maskinkode på én gang før programmet kjøres. Språk som C++ og Java bruker kompilering.' },
    { term: 'Tolkning', definition: 'Prosessen der kildekoden oversettes og kjøres linje for linje av en tolk (interpreter). Python er et tolket språk.' },
    { term: 'IDE', definition: 'Integrated Development Environment (integrert utviklingsmiljø) - et program som gir verktøy for å skrive, kjøre og feilsøke kode, som VS Code eller Thonny.' },
    { term: 'Kildekode', definition: 'Den menneskelig lesbare teksten som en programmerer skriver i et programmeringsspråk. Kildekoden må oversettes til maskinkode for å kunne kjøres.' },
    { term: 'Maskinkode', definition: 'Instruksjoner i binært format (nuller og enere) som prosessoren i datamaskinen kan forstå og utføre direkte.' },
    { term: 'Algoritme', definition: 'En trinnvis oppskrift for å løse et problem. Algoritmer kan beskrives i naturlig språk, flytdiagrammer eller pseudokode før de implementeres i et programmeringsspråk.' },
  ],
  content: [
    {
      id: 'it1-2-1-intro',
      type: 'text',
      content: `# Hva er programmering?

Tenk deg at du skal forklare en oppgave til noen som tar alt helt bokstavelig. Du kan ikke si «rydd rommet» og forvente at personen forstår hva du mener. Du må gi eksakte instruksjoner: «Plukk opp sokkene fra gulvet. Legg dem i skittentøyskurven. Ta bøkene fra sengen. Sett dem i bokhyllen.» Programmering fungerer på nøyaktig samme måte. Du skriver presise, steg-for-steg-instruksjoner som datamaskinen følger slavisk.

Programmering er en av de viktigste ferdighetene du kan lære i informasjonsteknologi. Det handler ikke bare om å lage apper og spill, men om en måte å tenke på. Når du lærer å programmere, lærer du å bryte ned komplekse problemer i håndterbare deler, og å formulere løsninger på en logisk og systematisk måte. Denne evnen til å tenke strukturert og analytisk, ofte kalt algoritmisk tenkning, er nyttig langt utover programmering.

I dette kapittelet skal du få en innføring i hva programmering egentlig er, hvilke typer programmeringsspråk som finnes, og hvordan du setter opp verktøyene du trenger for å skrive ditt aller første program. Vi bruker programmeringsspråket Python, som er et av de mest populære og nybegynnervennlige språkene i verden.`,
    },
    {
      id: 'it1-2-1-def-1',
      type: 'definition',
      title: 'Programmering',
      content: `Programmering er prosessen med å skrive instruksjoner, kalt kode, som en datamaskin kan forstå og utføre. Disse instruksjonene skrives i et programmeringsspråk og utgjør til sammen et program. Programmering innebærer å analysere et problem, designe en løsning (en algoritme), implementere løsningen i kode, og teste at den fungerer som forventet. Det er en kreativ prosess som kombinerer logisk tenkning med problemløsning.`,
    },
    {
      id: 'it1-2-1-text-1',
      type: 'text',
      title: 'Hva er et programmeringsspråk?',
      content: `## Programmeringsspråk

Et programmeringsspråk er et formelt språk som lar oss kommunisere med datamaskinen. Akkurat som norsk har grammatikk og regler for setningsoppbygging, har programmeringsspråk regler for syntaks (hvordan koden skal skrives) og semantikk (hva koden betyr).

Det finnes hundrevis av programmeringsspråk, og de brukes til forskjellige formål:

- **Python** - Allsidig og nybegynnervennlig. Brukes til dataanalyse, kunstig intelligens, webutvikling og mye mer. Dette er språket vi bruker i dette kurset.
- **JavaScript** - Brukes til å lage interaktive nettsider og webapplikasjoner. Kjører direkte i nettleseren.
- **Java** - Populært i store bedriftssystemer og Android-apper. Kjent for å være plattformuavhengig.
- **C++** - Brukes der ytelse er kritisk, som i spill, operativsystemer og innebygde systemer.
- **C#** - Mye brukt i spillutvikling (Unity) og Windows-applikasjoner.
- **Swift** - Apples språk for utvikling av iOS- og macOS-apper.

Hvert språk har sine styrker og svakheter. Valget av språk avhenger av hva du skal lage, hvilken plattform du utvikler for, og hvilke verktøy og biblioteker som er tilgjengelige. Python er et utmerket startspråk fordi det har en enkel og lesbar syntaks som ligner naturlig engelsk.`,
    },
    {
      id: 'it1-2-1-def-2',
      type: 'definition',
      title: 'Kompilering vs. tolkning',
      content: `Datamaskiner forstår bare maskinkode (binære nuller og enere). Derfor må kildekoden vi skriver i et programmeringsspråk oversettes til maskinkode. Det finnes to hovedmetoder for denne oversettelsen: **kompilering** og **tolkning**. Ved kompilering oversettes hele programmet til maskinkode på én gang, og resultatet lagres som en kjørbar fil. Ved tolkning leses og kjøres koden linje for linje av et tolkprogram (interpreter). Noen språk, som Java, bruker en kombinasjon der koden først kompileres til en mellomkode (bytekode) som deretter tolkes.`,
    },
    {
      id: 'it1-2-1-text-2',
      type: 'text',
      title: 'Kompilerte og tolkede språk',
      content: `## Kompilering og tolkning i praksis

Forskjellen mellom kompilering og tolkning er viktig å forstå, fordi den påvirker hvordan du jobber med et språk.

**Kompilerte språk (f.eks. C++, Go, Rust)**

Når du skriver et program i et kompilert språk, bruker du et verktøy kalt en kompilator for å oversette hele kildekoden til en kjørbar fil med maskinkode. Denne filen kan deretter kjøres direkte av operativsystemet, uten at du trenger kompilatoren lenger. Fordelen er at programmet kjører raskt fordi maskinkoden er optimalisert. Ulempen er at du må kompilere koden på nytt hver gang du gjør en endring, og den kompilerte filen fungerer bare på den plattformen den ble kompilert for.

**Tolkede språk (f.eks. Python, JavaScript, Ruby)**

Når du skriver et program i et tolket språk, bruker du et tolkprogram (interpreter) som leser kildekoden linje for linje, oversetter den og kjører den umiddelbart. Du trenger ikke å kompilere først, noe som gjør utviklingsprosessen raskere. Ulempen er at programmer i tolkede språk ofte kjører litt saktere enn kompilerte programmer, fordi oversettelsen skjer mens programmet kjører.

Python er et tolket språk. Det betyr at du kan skrive en linje kode og se resultatet med én gang. Dette gjør det til et utmerket språk for å lære programmering, fordi du får umiddelbar tilbakemelding på koden din.

**Sammenligning:**

| Egenskap | Kompilerte språk | Tolkede språk |
|----------|------------------|---------------|
| Oversettelse | Hele programmet på én gang | Linje for linje |
| Hastighet | Raskere kjøring | Litt tregere kjøring |
| Utvikling | Må kompilere mellom endringer | Kjører umiddelbart |
| Feilmeldinger | Vises ved kompilering | Vises ved kjøring |
| Eksempler | C++, Go, Rust | Python, JavaScript, Ruby |`,
    },
    {
      id: 'it1-2-1-text-3',
      type: 'text',
      title: 'Utviklingsmiljø (IDE)',
      content: `## Hva er en IDE?

For å skrive kode trenger du et verktøy. Du kan i teorien skrive kode i et hvilket som helst tekstredigeringsprogram, som Notisblokk, men det er som å prøve å bygge et hus med bare en hammer. Et integrert utviklingsmiljø (IDE) gir deg alle verktøyene du trenger samlet på ett sted.

En god IDE tilbyr:

- **Kodeeditor** med syntaksfarging (ulike deler av koden får forskjellige farger, noe som gjør koden lettere å lese)
- **Autofullføring** som foreslår kode mens du skriver, slik at du slipper å huske alle kommandoer
- **Feilmarkering** som understreker feil i koden din før du kjører den
- **Kjøremiljø** slik at du kan kjøre programmet ditt direkte i editoren
- **Debugger** som hjelper deg å finne og rette feil i koden

**Populære verktøy for Python:**

- **VS Code (Visual Studio Code)** - Gratis og svært populær kodeeditor fra Microsoft. Støtter mange språk via utvidelser. Anbefales for dette kurset.
- **Thonny** - Enkel IDE designet spesielt for Python-nybegynnere. Lett å installere og bruke.
- **PyCharm** - Avansert IDE spesielt for Python. Community-utgaven er gratis.
- **Replit** - Nettbasert kodeeditor som ikke krever installasjon. Fungerer direkte i nettleseren.

For dette kurset anbefaler vi å installere VS Code og Python-utvidelsen, eller å bruke Thonny hvis du vil ha en enklere start. Du kan også bruke Replit i nettleseren hvis du ikke har mulighet til å installere programvare.`,
    },
    {
      id: 'it1-2-1-note-1',
      type: 'note',
      title: 'Installere Python',
      content: `For å kjøre Python-programmer trenger du Python installert på datamaskinen din. Last ned Python fra python.org. Ved installasjon på Windows er det viktig å huke av for "Add Python to PATH" i installasjonsprogrammet. På Mac er Python ofte allerede installert, men det kan være en eldre versjon. Du kan sjekke ved å åpne terminalen og skrive \`python3 --version\`. Vi anbefaler Python 3.10 eller nyere.`,
    },
    {
      id: 'it1-2-1-text-4',
      type: 'text',
      title: 'Ditt første program',
      content: `## Ditt første Python-program

Tradisjonen i programmering er at det første programmet du skriver i et nytt språk bare skal skrive ut teksten "Hello, World!" på skjermen. La oss følge denne tradisjonen.

Åpne din IDE (VS Code, Thonny eller Replit), lag en ny fil med navnet \`hei.py\`, og skriv følgende kode:

\`\`\`python
print("Hei, verden!")
\`\`\`

Kjør programmet. Du skal se teksten \`Hei, verden!\` på skjermen. Gratulerer, du har skrevet ditt første program!

La oss bryte ned hva som skjer:

1. **\`print\`** er en innebygd funksjon i Python som skriver ut tekst på skjermen.
2. **Parentesene \`()\`** forteller Python at vi kaller (bruker) funksjonen.
3. **\`"Hei, verden!"\`** er en tekststreng (string) som vi sender til \`print\`-funksjonen. Teksten må stå i anførselstegn.

Du kan også skrive ut flere ting:

\`\`\`python
print("Hei, verden!")
print("Jeg heter Python.")
print("Jeg er et programmeringsspråk.")
\`\`\`

**Kjøring gir:**
\`\`\`
Hei, verden!
Jeg heter Python.
Jeg er et programmeringsspråk.
\`\`\`

Hver \`print\`-setning skriver ut teksten sin på en ny linje. Python kjører instruksjonene fra topp til bunn, én linje om gangen.`,
    },
    {
      id: 'it1-2-1-example-1',
      type: 'example',
      title: 'Et program med flere print-setninger',
      problem: `Skriv et program som presenterer deg selv med navn, alder og favorittfag.`,
      solution: `\`\`\`python
print("=== Min presentasjon ===")
print("Navn: Sara")
print("Alder: 17 år")
print("Favorittfag: IT 1")
print("========================")
\`\`\`

**Kjøring gir:**
\`\`\`
=== Min presentasjon ===
Navn: Sara
Alder: 17 år
Favorittfag: IT 1
========================
\`\`\`

Her ser vi at vi kan bruke \`print()\` til å skrive ut hva vi vil. Likhetstegnene brukes bare for å lage en visuell ramme rundt presentasjonen. Python bryr seg ikke om innholdet i tekststrengen, den skriver bare ut det som står mellom anførselstegnene.`,
    },
    {
      id: 'it1-2-1-text-5',
      type: 'text',
      title: 'Kommentarer i koden',
      content: `## Kommentarer

Kommentarer er tekst i koden som Python ignorerer fullstendig. De er skrevet for mennesker, ikke for datamaskinen. Kommentarer brukes til å forklare hva koden gjør, og er spesielt nyttige når du jobber i team eller når du skal se på koden din igjen senere.

I Python lager du en kommentar med \`#\`-tegnet:

\`\`\`python
# Dette er en kommentar - Python ignorerer denne linjen
print("Hei!")  # Kommentar kan også stå etter kode

# Du kan bruke kommentarer for å forklare hva koden gjør:
# Beregn arealet av en sirkel
radius = 5
areal = 3.14 * radius * radius
print(areal)  # Skriver ut 78.5
\`\`\`

**Gode vaner for kommentering:**
- Kommenter **hvorfor** du gjør noe, ikke bare **hva** du gjør
- Hold kommentarene oppdaterte når du endrer koden
- Skriv kommentarer på norsk eller engelsk, men vær konsekvent
- Ikke overkommenter åpenbar kode (som \`x = 5  # Sett x til 5\`)`,
    },
    {
      id: 'it1-2-1-def-3',
      type: 'definition',
      title: 'Algoritme',
      content: `En algoritme er en presis, trinnvis beskrivelse av hvordan et problem skal løses. Tenk på det som en oppskrift: den beskriver nøyaktig hvilke steg som skal utføres, i hvilken rekkefølge, for å nå et bestemt resultat. Før du begynner å skrive kode, bør du alltid tenke gjennom algoritmen først. Du kan beskrive algoritmen i vanlig norsk, som en punktliste, i et flytdiagram, eller i pseudokode (en forenklet versjon av programmeringsspråk). Alle programmer er implementasjoner av algoritmer.`,
    },
    {
      id: 'it1-2-1-example-2',
      type: 'example',
      title: 'Fra algoritme til program',
      problem: `Lag en algoritme og et program som beregner gjennomsnittet av tre tall.`,
      solution: `**Algoritme (i naturlig språk):**
1. Velg tre tall
2. Legg tallene sammen for å få summen
3. Del summen på 3 for å få gjennomsnittet
4. Vis resultatet

**Implementasjon i Python:**

\`\`\`python
# Beregn gjennomsnittet av tre tall
tall1 = 8
tall2 = 15
tall3 = 4

# Beregn summen
summen = tall1 + tall2 + tall3

# Beregn gjennomsnittet
gjennomsnitt = summen / 3

# Vis resultatet
print("Tallene er:", tall1, tall2, tall3)
print("Summen er:", summen)
print("Gjennomsnittet er:", gjennomsnitt)
\`\`\`

**Kjøring gir:**
\`\`\`
Tallene er: 8 15 4
Summen er: 27
Gjennomsnittet er: 9.0
\`\`\`

Legg merke til at vi først skrev algoritmen på vanlig norsk, og deretter oversatte hvert steg til Python-kode. Kommentarene i koden gjenspeiler stegene i algoritmen. Resultatet \`9.0\` (med desimal) skyldes at Python bruker desimaldivisjon som standard.`,
    },
    {
      id: 'it1-2-1-tip-1',
      type: 'tip',
      title: 'Gode vaner fra starten',
      content: `Start med gode vaner helt fra begynnelsen. Gi variablene beskrivende navn (som \`gjennomsnitt\` i stedet for \`g\`), bruk kommentarer for å forklare koden, og test programmet ditt grundig etter hver endring. Det er mye lettere å lære gode vaner enn å avlære dårlige.`,
    },
    {
      id: 'it1-2-1-warning-1',
      type: 'warning',
      title: 'Vanlige feil for nybegynnere',
      content: `Pass på disse vanlige feilene når du skriver dine første Python-programmer:

- **Glemme anførselstegn** rundt tekst: \`print(Hei)\` gir feil, riktig er \`print("Hei")\`
- **Feil parenteser**: \`print "Hei"\` fungerer ikke i Python 3, du må ha parenteser: \`print("Hei")\`
- **Store/små bokstaver**: Python skiller mellom store og små bokstaver. \`Print\` er ikke det samme som \`print\`
- **Manglende hermetegn**: Hver tekststreng må ha matchende anførselstegn. \`print("Hei)\` mangler slutt-anførselstegn`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er programmering?',
      options: [
        { id: 'a', text: 'Å installere programvare på en datamaskin', isCorrect: false, feedback: 'Det er installasjon, ikke programmering.' },
        { id: 'b', text: 'Å skrive instruksjoner som en datamaskin kan forstå og utføre', isCorrect: true },
        { id: 'c', text: 'Å reparere maskinvare i en datamaskin', isCorrect: false, feedback: 'Det er maskinvarereparasjon, ikke programmering.' },
        { id: 'd', text: 'Å surfe på internett', isCorrect: false, feedback: 'Det er internettbruk, ikke programmering.' },
      ],
      solution: 'Programmering er prosessen med å skrive kode (instruksjoner) i et programmeringsspråk som datamaskinen kan kjøre for å løse oppgaver.',
    },
    {
      id: 'it-1-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom et kompilert og et tolket programmeringsspråk?',
      options: [
        { id: 'a', text: 'Kompilerte språk er nyere enn tolkede språk', isCorrect: false, feedback: 'Alderen på språket har ikke noe med kompilering vs. tolkning å gjøre.' },
        { id: 'b', text: 'Kompilerte språk oversetter hele programmet på én gang, tolkede språk oversetter linje for linje', isCorrect: true },
        { id: 'c', text: 'Det er ingen forskjell, begge fungerer likt', isCorrect: false, feedback: 'Det er en viktig forskjell i hvordan koden oversettes og kjøres.' },
        { id: 'd', text: 'Tolkede språk er alltid raskere enn kompilerte', isCorrect: false, feedback: 'Det er vanligvis omvendt: kompilerte programmer kjører ofte raskere.' },
      ],
      solution: 'I kompilerte språk oversettes hele kildekoden til maskinkode på én gang av en kompilator. I tolkede språk leser og kjører en tolk (interpreter) koden linje for linje. Python er et tolket språk.',
    },
    {
      id: 'it-1-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en IDE?',
      options: [
        { id: 'a', text: 'En type programmeringsspråk', isCorrect: false, feedback: 'En IDE er et verktøy, ikke et språk.' },
        { id: 'b', text: 'En samling verktøy for å skrive, kjøre og feilsøke kode', isCorrect: true },
        { id: 'c', text: 'En nettleser for å surfe på internett', isCorrect: false, feedback: 'En IDE brukes til programmering, ikke nettsurfing.' },
        { id: 'd', text: 'Et operativsystem', isCorrect: false, feedback: 'En IDE er et program som kjører på et operativsystem, ikke et operativsystem i seg selv.' },
      ],
      solution: 'IDE står for Integrated Development Environment (integrert utviklingsmiljø). Det er et program som samler verktøy for kodeediting, kjøring, feilsøking og mer på ett sted. Eksempler er VS Code, Thonny og PyCharm.',
    },
    {
      id: 'it-1-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gjør `#`-tegnet i Python-kode?',
      options: [
        { id: 'a', text: 'Det starter en ny funksjon', isCorrect: false, feedback: 'Funksjoner defineres med nøkkelordet def.' },
        { id: 'b', text: 'Det markerer starten på en kommentar som Python ignorerer', isCorrect: true },
        { id: 'c', text: 'Det brukes for å lage overskrifter', isCorrect: false, feedback: 'Overskrifter finnes ikke i Python-kode på den måten.' },
        { id: 'd', text: 'Det brukes til å skrive ut tekst', isCorrect: false, feedback: 'For å skrive ut tekst bruker du print()-funksjonen.' },
      ],
      solution: '# markerer en kommentar i Python. Alt som kommer etter # på samme linje ignoreres av Python når programmet kjøres. Kommentarer brukes til å forklare koden for mennesker.',
    },
    {
      id: 'it-1-2-1-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Skriv et Python-program som skriver ut følgende tre linjer:\n\n\`\`\`\nMitt første program\nLaget i IT 1\nProgrammering er gøy!\n\`\`\``,
      solution: `\`\`\`python\nprint("Mitt første program")\nprint("Laget i IT 1")\nprint("Programmering er gøy!")\n\`\`\`\n\nHver print()-setning skriver ut én linje tekst. Python kjører linjene fra topp til bunn.`,
    },
    {
      id: 'it-1-2-1-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Skriv et Python-program som beregner og skriver ut arealet av et rektangel med bredde 12 og høyde 7. Programmet skal skrive ut både beregningen og resultatet på en forståelig måte. Bruk kommentarer i koden.`,
      solution: `\`\`\`python\n# Program som beregner arealet av et rektangel\nbredde = 12\nhøyde = 7\n\n# Beregn arealet\nareal = bredde * høyde\n\n# Vis resultatet\nprint("Rektangel-kalkulator")\nprint("Bredde:", bredde)\nprint("Høyde:", høyde)\nprint("Areal:", areal)\n\`\`\`\n\nKjøring gir:\n\`\`\`\nRektangel-kalkulator\nBredde: 12\nHøyde: 7\nAreal: 84\n\`\`\``,
    },
    {
      id: 'it-1-2-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken av disse påstandene om Python er FEIL?',
      options: [
        { id: 'a', text: 'Python er et tolket språk', isCorrect: false, feedback: 'Dette er riktig, Python er tolket.' },
        { id: 'b', text: 'Python-kode kan kjøres direkte uten kompilering', isCorrect: false, feedback: 'Dette er riktig, tolken oversetter koden linje for linje.' },
        { id: 'c', text: 'Python skiller ikke mellom store og små bokstaver', isCorrect: true },
        { id: 'd', text: 'Python bruker innrykk for å strukturere kode', isCorrect: false, feedback: 'Dette er riktig og er en viktig egenskap ved Python.' },
      ],
      solution: 'Python skiller absolutt mellom store og små bokstaver (det er case-sensitive). `print` og `Print` er to forskjellige ting. `print()` er den innebygde funksjonen, mens `Print()` vil gi en feilmelding.',
    },
    {
      id: 'it-1-2-1-ex-8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Skriv først en algoritme i naturlig norsk (som en nummerert liste), og implementer den deretter som et Python-program: Beregn totalprisen for 3 pizzaer til 149 kr, 2 brus til 29 kr, og legg til 10 % tips. Vis prisen for hver vare, totalen og tipsen.`,
      solution: `**Algoritme:**\n1. Sett pris per pizza til 149 kr\n2. Sett pris per brus til 29 kr\n3. Beregn pizzapris: 3 * 149\n4. Beregn bruspris: 2 * 29\n5. Beregn sum uten tips\n6. Beregn tips: sum * 0.10\n7. Beregn totalpris: sum + tips\n8. Vis alle beløpene\n\n**Python-program:**\n\`\`\`python\n# Bestillingskalkulator\npris_pizza = 149\npris_brus = 29\n\n# Beregn delpriser\ntotal_pizza = 3 * pris_pizza\ntotal_brus = 2 * pris_brus\n\n# Beregn sum og tips\nsum_uten_tips = total_pizza + total_brus\ntips = sum_uten_tips * 0.10\ntotalpris = sum_uten_tips + tips\n\n# Vis resultater\nprint("=== Bestilling ===")\nprint("3 pizzaer:", total_pizza, "kr")\nprint("2 brus:", total_brus, "kr")\nprint("Sum:", sum_uten_tips, "kr")\nprint("Tips (10%):", tips, "kr")\nprint("Totalt:", totalpris, "kr")\n\`\`\`\n\nKjøring gir:\n\`\`\`\n=== Bestilling ===\n3 pizzaer: 447 kr\n2 brus: 58 kr\nSum: 505 kr\nTips (10%): 50.5 kr\nTotalt: 555.5 kr\n\`\`\``,
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Variabler og datatyper
// ============================================================================

export const CHAPTER_IT_1_2_2: TextbookChapter = {
  id: 'it-1-2-2',
  courseId: 'it-1',
  chapterNumber: '2.2',
  title: 'Variabler og datatyper',
  description: 'Lær om variabler, de grunnleggende datatypene i Python (int, float, str, bool), typekonvertering, og hvordan du bruker input() og print() for å kommunisere med brukeren.',
  estimatedMinutes: 50,
  prevChapter: 'it-1-2-1',
  nextChapter: 'it-1-2-3',
  competenceGoals: [
    'bruke variabler til å lagre og manipulere data',
    'forklare forskjellen mellom de grunnleggende datatypene i Python',
    'konvertere mellom ulike datatyper',
    'bruke input() og print() for brukerinteraksjon',
  ],
  keyTerms: [
    { term: 'Variabel', definition: 'En navngitt lagringsplass i datamaskinens minne som kan holde en verdi. Verdien kan endres underveis i programmet.' },
    { term: 'Datatype', definition: 'Kategorien av data en variabel inneholder. Python har blant annet typene int (heltall), float (desimaltall), str (tekst) og bool (sannhetsverdi).' },
    { term: 'int', definition: 'Heltallsdatatypen i Python. Representerer hele tall uten desimaler, som 42, -7 eller 0.' },
    { term: 'float', definition: 'Desimaltallsdatatypen i Python. Representerer tall med desimaler, som 3.14, -0.5 eller 2.0.' },
    { term: 'str', definition: 'Tekststreng-datatypen i Python. Representerer tekst omsluttet av anførselstegn, som "Hei" eller \'Python\'.' },
    { term: 'bool', definition: 'Sannhetsverdidatatypen i Python. Kan bare ha to verdier: True (sant) eller False (usant).' },
    { term: 'Typekonvertering', definition: 'Prosessen med å endre en verdi fra én datatype til en annen, for eksempel fra str til int med int()-funksjonen.' },
    { term: 'f-streng', definition: 'En formateringsmetode i Python der du plasserer variabler direkte i en tekststreng ved å bruke f foran anførselstegnene og krøllparenteser rundt variabelnavnene, som f"Hei, {navn}".' },
  ],
  content: [
    {
      id: 'it1-2-2-intro',
      type: 'text',
      content: `# Variabler og datatyper

I det forrige kapittelet skrev vi programmer der alle verdier var skrevet direkte i koden. Men hva om vi vil at programmet skal huske verdier, endre dem, eller bruke verdier som brukeren skriver inn? Da trenger vi variabler.

Variabler er en av de mest grunnleggende byggesteinene i programmering. En variabel er som en merket boks der du kan lagre data. Boksen har et navn (variabelnavnet), og inne i boksen ligger en verdi. Du kan når som helst se hva som er i boksen, bytte ut innholdet, eller bruke innholdet i beregninger.

I dette kapittelet skal du lære å opprette variabler, forstå de forskjellige datatypene Python tilbyr, konvertere mellom typer, og bruke input/output for å lage interaktive programmer.`,
    },
    {
      id: 'it1-2-2-def-1',
      type: 'definition',
      title: 'Variabel',
      content: `En variabel er en navngitt referanse til en verdi lagret i datamaskinens minne. I Python oppretter du en variabel ved å gi den et navn etterfulgt av likhetstegnet og verdien du vil lagre. For eksempel oppretter \`alder = 17\` en variabel med navnet \`alder\` som inneholder verdien \`17\`. Variabelnavnet er som en etikett på en boks, og verdien er innholdet i boksen. Du kan når som helst endre verdien ved å tilordne en ny verdi til variabelen.`,
    },
    {
      id: 'it1-2-2-text-1',
      type: 'text',
      title: 'Opprette og bruke variabler',
      content: `## Opprette variabler i Python

I Python oppretter du en variabel ved å skrive variabelnavnet, etterfulgt av et likhetstegn (\`=\`), etterfulgt av verdien:

\`\`\`python
navn = "Kari"
alder = 17
høyde = 1.72
er_elev = True
\`\`\`

Her har vi opprettet fire variabler med forskjellige typer verdier. Likhetstegnet i programmering betyr ikke «er lik» slik som i matematikk. Det betyr «tilordne verdien til høyre til variabelen til venstre». Vi sier at vi tilordner verdien \`"Kari"\` til variabelen \`navn\`.

**Regler for variabelnavn i Python:**

- Navnet kan inneholde bokstaver, tall og understrek (\`_\`)
- Navnet kan **ikke** starte med et tall (\`2navn\` er ugyldig)
- Navnet kan **ikke** inneholde mellomrom (bruk understrek i stedet: \`mitt_navn\`)
- Navnet kan **ikke** være et av Pythons reserverte nøkkelord (som \`if\`, \`for\`, \`while\`, \`True\`, \`False\`)
- Python skiller mellom store og små bokstaver (\`Navn\` og \`navn\` er to forskjellige variabler)

**Gode variabelnavn:**

\`\`\`python
# Gode, beskrivende navn:
fornavn = "Erik"
antall_elever = 28
gjennomsnittskarakter = 4.5

# Dårlige, uforståelige navn:
x = "Erik"
n = 28
g = 4.5
\`\`\`

Bruk alltid beskrivende variabelnavn som forteller hva variabelen inneholder. Det gjør koden mye lettere å lese og forstå.`,
    },
    {
      id: 'it1-2-2-text-2',
      type: 'text',
      title: 'Endre verdien i en variabel',
      content: `## Endre verdier

En variabel kan endre verdi i løpet av programmet. Den nye verdien overskriver den gamle:

\`\`\`python
poeng = 0
print("Poeng:", poeng)  # Skriver ut: Poeng: 0

poeng = 10
print("Poeng:", poeng)  # Skriver ut: Poeng: 10

poeng = poeng + 5
print("Poeng:", poeng)  # Skriver ut: Poeng: 15
\`\`\`

Linjen \`poeng = poeng + 5\` kan virke merkelig. Men husk at \`=\` betyr «tilordne». Python regner først ut uttrykket på høyre side (\`15 + 5 = 20\`... nei, \`10 + 5 = 15\`), og tilordner deretter resultatet til variabelen \`poeng\`. Dette er et svært vanlig mønster i programmering.

Python har også forkortede skrivemåter for å oppdatere variabler:

\`\`\`python
poeng = 100

poeng += 10    # Samme som: poeng = poeng + 10  (nå er poeng 110)
poeng -= 20    # Samme som: poeng = poeng - 20  (nå er poeng 90)
poeng *= 2     # Samme som: poeng = poeng * 2   (nå er poeng 180)
poeng /= 3     # Samme som: poeng = poeng / 3   (nå er poeng 60.0)

print("Poeng:", poeng)  # Skriver ut: Poeng: 60.0
\`\`\`

Legg merke til at etter divisjon med \`/=\` ble resultatet \`60.0\` (et desimaltall), ikke \`60\` (et heltall). Dette bringer oss til et viktig tema: datatyper.`,
    },
    {
      id: 'it1-2-2-def-2',
      type: 'definition',
      title: 'Datatyper i Python',
      content: `En datatype angir hva slags data en variabel inneholder, og bestemmer hvilke operasjoner som kan utføres på dataen. De fire grunnleggende datatypene i Python er: **int** (heltall som 42), **float** (desimaltall som 3.14), **str** (tekststrenger som "Hei"), og **bool** (sannhetsverdier: True eller False). Python bestemmer automatisk datatypen basert på verdien du tilordner, noe som kalles dynamisk typing. Du kan sjekke datatypen med funksjonen \`type()\`.`,
    },
    {
      id: 'it1-2-2-text-3',
      type: 'text',
      title: 'De fire grunnleggende datatypene',
      content: `## Datatypene i detalj

### int - Heltall

Heltall er hele tall uten desimaler. De kan være positive, negative eller null:

\`\`\`python
alder = 17
temperatur = -5
antall = 0
stort_tall = 1000000

print(type(alder))  # <class 'int'>
\`\`\`

Du kan utføre matematiske operasjoner med heltall:

\`\`\`python
a = 10
b = 3

print(a + b)   # Addisjon: 13
print(a - b)   # Subtraksjon: 7
print(a * b)   # Multiplikasjon: 30
print(a / b)   # Divisjon: 3.3333... (gir alltid float!)
print(a // b)  # Heltallsdivisjon: 3
print(a % b)   # Modulo (rest): 1
print(a ** b)  # Potens: 1000
\`\`\`

### float - Desimaltall

Desimaltall brukes når du trenger presisjon utover hele tall:

\`\`\`python
pris = 49.90
pi = 3.14159
temperatur = -2.5

print(type(pris))  # <class 'float'>
\`\`\`

### str - Tekststrenger

Tekst omsluttes av enkle eller doble anførselstegn:

\`\`\`python
fornavn = "Kari"
etternavn = 'Nordmann'
setning = "Hei, jeg heter Kari!"

# Sette sammen tekst (konkatenering)
fullt_navn = fornavn + " " + etternavn
print(fullt_navn)  # Skriver ut: Kari Nordmann
\`\`\`

### bool - Sannhetsverdier

Boolske verdier er enten \`True\` (sant) eller \`False\` (usant):

\`\`\`python
er_elev = True
har_bil = False

print(type(er_elev))  # <class 'bool'>
\`\`\`

Boolske verdier er spesielt viktige når vi jobber med betingelser (if-setninger), som vi lærer om i neste kapittel.`,
    },
    {
      id: 'it1-2-2-example-1',
      type: 'example',
      title: 'Sjekke datatyper med type()',
      problem: `Opprett variabler med de fire datatypene og bruk type() til å sjekke hvilken type de har.`,
      solution: `\`\`\`python
# Opprett variabler med forskjellige datatyper
heltall = 42
desimaltall = 3.14
tekst = "Python er gøy"
sannhet = True

# Sjekk datatypene
print(heltall, "har typen:", type(heltall))
print(desimaltall, "har typen:", type(desimaltall))
print(tekst, "har typen:", type(tekst))
print(sannhet, "har typen:", type(sannhet))
\`\`\`

**Kjøring gir:**
\`\`\`
42 har typen: <class 'int'>
3.14 har typen: <class 'float'>
Python er gøy har typen: <class 'str'>
True har typen: <class 'bool'>
\`\`\`

Funksjonen \`type()\` returnerer datatypen til verdien. Dette er nyttig for feilsøking når du er usikker på hvilken type en variabel har.`,
    },
    {
      id: 'it1-2-2-text-4',
      type: 'text',
      title: 'Typekonvertering',
      content: `## Typekonvertering

Noen ganger trenger du å konvertere en verdi fra én datatype til en annen. Python har innebygde funksjoner for dette:

\`\`\`python
# Konvertere til heltall
tall_som_tekst = "42"
tall = int(tall_som_tekst)
print(tall + 8)  # 50

# Konvertere til desimaltall
pris_tekst = "99.90"
pris = float(pris_tekst)
print(pris * 2)  # 199.8

# Konvertere til tekst
alder = 17
tekst = str(alder)
print("Jeg er " + tekst + " år")  # Jeg er 17 år

# Konvertere til bool
print(bool(1))     # True
print(bool(0))     # False
print(bool("Hei")) # True (ikke-tom streng)
print(bool(""))    # False (tom streng)
\`\`\`

Typekonvertering er spesielt viktig når du jobber med \`input()\`, fordi \`input()\` alltid returnerer en tekststreng. Hvis brukeren skriver inn et tall, må du konvertere det til \`int\` eller \`float\` for å kunne regne med det.

**Vanlige konverteringsfunksjoner:**

| Funksjon | Konverterer til | Eksempel |
|----------|-----------------|----------|
| \`int()\` | Heltall | \`int("42")\` gir \`42\` |
| \`float()\` | Desimaltall | \`float("3.14")\` gir \`3.14\` |
| \`str()\` | Tekst | \`str(42)\` gir \`"42"\` |
| \`bool()\` | Sannhetsverdi | \`bool(1)\` gir \`True\` |`,
    },
    {
      id: 'it1-2-2-text-5',
      type: 'text',
      title: 'Input og output',
      content: `## input() og print() - Kommunisere med brukeren

For å lage interaktive programmer trenger du å kunne ta imot data fra brukeren og vise resultater. Python bruker \`input()\` for å lese data og \`print()\` for å skrive ut data.

### input() - Lese fra brukeren

\`\`\`python
navn = input("Hva heter du? ")
print("Hei, " + navn + "!")
\`\`\`

**Kjøring:**
\`\`\`
Hva heter du? Sara
Hei, Sara!
\`\`\`

Viktig: \`input()\` returnerer alltid en tekststreng (\`str\`). Hvis du vil ha et tall, må du konvertere:

\`\`\`python
alder_tekst = input("Hvor gammel er du? ")
alder = int(alder_tekst)

# Eller kortere:
alder = int(input("Hvor gammel er du? "))
\`\`\`

### print() - Skrive ut til brukeren

\`print()\` kan ta flere argumenter adskilt med komma:

\`\`\`python
navn = "Ola"
alder = 16

# Flere argumenter (legger automatisk til mellomrom)
print("Hei,", navn, "- du er", alder, "år gammel")
# Utskrift: Hei, Ola - du er 16 år gammel

# f-strenger (anbefalt metode)
print(f"Hei, {navn} - du er {alder} år gammel")
# Utskrift: Hei, Ola - du er 16 år gammel
\`\`\`

### f-strenger - Den beste måten å formatere tekst

f-strenger (f-strings) er den anbefalte måten å sette inn variabler i tekst. Sett \`f\` foran anførselstegnet og variabelnavnet i krøllparenteser:

\`\`\`python
pris = 49.90
antall = 3
total = pris * antall

print(f"Du kjøpte {antall} varer til {pris} kr stykket")
print(f"Total: {total} kr")
print(f"Total avrundet: {total:.2f} kr")  # 2 desimaler
\`\`\`

**Kjøring gir:**
\`\`\`
Du kjøpte 3 varer til 49.9 kr stykket
Total: 149.7 kr
Total avrundet: 149.70 kr
\`\`\``,
    },
    {
      id: 'it1-2-2-example-2',
      type: 'example',
      title: 'Interaktiv kalkulator',
      problem: `Lag et program som spør brukeren om to tall og viser summen, differansen, produktet og kvotienten.`,
      solution: `\`\`\`python
# Interaktiv kalkulator
print("=== Enkel kalkulator ===")

# Les inn to tall fra brukeren
tall1 = float(input("Skriv inn det første tallet: "))
tall2 = float(input("Skriv inn det andre tallet: "))

# Beregn resultatene
summen = tall1 + tall2
differanse = tall1 - tall2
produkt = tall1 * tall2

# Vis resultatene med f-strenger
print(f"\\n--- Resultater ---")
print(f"{tall1} + {tall2} = {summen}")
print(f"{tall1} - {tall2} = {differanse}")
print(f"{tall1} * {tall2} = {produkt}")

# Sjekk at vi ikke deler på null
if tall2 != 0:
    kvotient = tall1 / tall2
    print(f"{tall1} / {tall2} = {kvotient:.2f}")
else:
    print("Kan ikke dele på null!")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
=== Enkel kalkulator ===
Skriv inn det første tallet: 15
Skriv inn det andre tallet: 4
\n--- Resultater ---
15.0 + 4.0 = 19.0
15.0 - 4.0 = 11.0
15.0 * 4.0 = 60.0
15.0 / 4.0 = 3.75
\`\`\`

Vi bruker \`float()\` for typekonvertering slik at brukeren kan skrive inn både heltall og desimaltall. f-strengene gjør utskriften ryddig og lesbar.`,
    },
    {
      id: 'it1-2-2-warning-1',
      type: 'warning',
      title: 'Typekonvertering kan feile',
      content: `Hvis du prøver å konvertere en tekst som ikke inneholder et gyldig tall til \`int\` eller \`float\`, vil Python krasje med en feilmelding:

\`\`\`python
tall = int("hei")  # ValueError: invalid literal for int()
\`\`\`

Vær forsiktig med hva brukeren skriver inn. I kapittel 2.6 lærer du å håndtere slike feil med try/except.`,
    },
    {
      id: 'it1-2-2-tip-1',
      type: 'tip',
      title: 'Bruk f-strenger',
      content: `f-strenger er den mest lesbare og effektive måten å kombinere tekst og variabler i Python. I stedet for å bruke \`+\` for å sette sammen strenger, bruk \`f"tekst {variabel} mer tekst"\`. Det gjør koden mye enklere å lese, og du slipper å tenke på typekonvertering inne i print-setningen.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er datatypen til verdien `3.14` i Python?',
      options: [
        { id: 'a', text: 'int', isCorrect: false, feedback: 'int er for heltall uten desimaler.' },
        { id: 'b', text: 'float', isCorrect: true },
        { id: 'c', text: 'str', isCorrect: false, feedback: 'str er for tekst i anførselstegn.' },
        { id: 'd', text: 'bool', isCorrect: false, feedback: 'bool er for True/False.' },
      ],
      solution: '3.14 er et desimaltall og har derfor datatypen float i Python. Heltall (uten desimaler) som 3 har datatypen int.',
    },
    {
      id: 'it-1-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skriver dette programmet ut?\n\n```python\nx = 10\nx = x + 5\nprint(x)\n```',
      options: [
        { id: 'a', text: '10', isCorrect: false, feedback: 'Verdien av x endres i linje 2.' },
        { id: 'b', text: '15', isCorrect: true },
        { id: 'c', text: 'x + 5', isCorrect: false, feedback: 'Python regner ut uttrykket og tilordner resultatet.' },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: 'Koden er gyldig og kjører uten feil.' },
      ],
      solution: 'Først settes x til 10. Deretter beregnes x + 5 = 10 + 5 = 15, og resultatet tilordnes tilbake til x. print(x) skriver derfor ut 15.',
    },
    {
      id: 'it-1-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er resultatet av følgende kode?\n\n```python\na = "3"\nb = "7"\nprint(a + b)\n```',
      options: [
        { id: 'a', text: '10', isCorrect: false, feedback: 'Husk at a og b er tekststrenger, ikke tall.' },
        { id: 'b', text: '"10"', isCorrect: false, feedback: 'Python utfører strengkonkatenering, ikke addisjon.' },
        { id: 'c', text: '37', isCorrect: true },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: '+  mellom to strenger er gyldig og setter dem sammen.' },
      ],
      solution: 'Fordi a og b er tekststrenger (str), ikke tall, setter + dem sammen (konkatenering). "3" + "7" = "37". For å få 10 måtte vi konvertere: int(a) + int(b).',
    },
    {
      id: 'it-1-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor returnerer `input()` alltid en tekststreng (str)?',
      options: [
        { id: 'a', text: 'Fordi Python ikke kan lagre tall', isCorrect: false, feedback: 'Python kan lagre tall i int og float.' },
        { id: 'b', text: 'Fordi alt brukeren skriver på tastaturet er tekst, og Python vet ikke automatisk om det skal tolkes som tall', isCorrect: true },
        { id: 'c', text: 'Det er en feil i Python', isCorrect: false, feedback: 'Det er en bevisst designbeslutning.' },
        { id: 'd', text: 'Fordi tekst tar mindre plass i minnet', isCorrect: false, feedback: 'Det handler om at Python ikke kan gjette hva brukeren mener.' },
      ],
      solution: 'Når brukeren skriver på tastaturet, er alt som skrives tegn (tekst). Python kan ikke automatisk vite om "42" er ment som tallet 42 eller teksten "42". Derfor returnerer input() alltid str, og programmereren må eksplisitt konvertere med int() eller float() ved behov.',
    },
    {
      id: 'it-1-2-2-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Skriv et program som spør brukeren om fornavn og etternavn, og deretter skriver ut en hilsen med fullt navn. Bruk f-strenger.`,
      solution: `\`\`\`python\nfornavn = input("Hva er fornavnet ditt? ")\netternavn = input("Hva er etternavnet ditt? ")\n\nprint(f"Hei, {fornavn} {etternavn}! Velkommen!")\n\`\`\`\n\nEksempel på kjøring:\n\`\`\`\nHva er fornavnet ditt? Sara\nHva er etternavnet ditt? Hansen\nHei, Sara Hansen! Velkommen!\n\`\`\``,
    },
    {
      id: 'it-1-2-2-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Skriv et program som spør brukeren om temperaturen i Celsius og konverterer den til Fahrenheit. Formelen er: F = C * 9/5 + 32. Skriv ut resultatet med én desimal.`,
      solution: `\`\`\`python\n# Temperaturkonvertering: Celsius til Fahrenheit\ncelsius = float(input("Skriv inn temperaturen i Celsius: "))\n\nfahrenheit = celsius * 9/5 + 32\n\nprint(f"{celsius} °C tilsvarer {fahrenheit:.1f} °F")\n\`\`\`\n\nEksempel på kjøring:\n\`\`\`\nSkriv inn temperaturen i Celsius: 20\n20.0 °C tilsvarer 68.0 °F\n\`\`\`\n\nVi bruker float() for å konvertere input til desimaltall, og :.1f i f-strengen for å vise én desimal.`,
    },
    {
      id: 'it-1-2-2-ex-7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Skriv et program som spør brukeren om en pris, antall enheter og en rabattprosent. Beregn og vis: totalpris uten rabatt, rabattbeløp, og totalpris med rabatt. Bruk f-strenger med to desimaler på alle beløp.`,
      solution: `\`\`\`python\n# Rabattkalkulator\nprint("=== Rabattkalkulator ===")\n\npris = float(input("Pris per enhet (kr): "))\nantall = int(input("Antall enheter: "))\nrabatt_prosent = float(input("Rabattprosent: "))\n\n# Beregninger\ntotal_uten_rabatt = pris * antall\nrabatt_belop = total_uten_rabatt * rabatt_prosent / 100\ntotal_med_rabatt = total_uten_rabatt - rabatt_belop\n\n# Vis resultatene\nprint(f"\\n--- Kvittering ---")\nprint(f"Pris per enhet: {pris:.2f} kr")\nprint(f"Antall: {antall}")\nprint(f"Totalpris uten rabatt: {total_uten_rabatt:.2f} kr")\nprint(f"Rabatt ({rabatt_prosent}%): -{rabatt_belop:.2f} kr")\nprint(f"Totalpris med rabatt: {total_med_rabatt:.2f} kr")\n\`\`\`\n\nEksempel på kjøring:\n\`\`\`\n=== Rabattkalkulator ===\nPris per enhet (kr): 199.90\nAntall enheter: 3\nRabattprosent: 15\n\n--- Kvittering ---\nPris per enhet: 199.90 kr\nAntall: 3\nTotalpris uten rabatt: 599.70 kr\nRabatt (15.0%): -89.96 kr\nTotalpris med rabatt: 509.75 kr\n\`\`\``,
    },
    {
      id: 'it-1-2-2-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skriver dette programmet ut?\n\n```python\na = 7\nb = 2\nprint(a / b)\nprint(a // b)\nprint(a % b)\n```',
      options: [
        { id: 'a', text: '3.5, 3, 1', isCorrect: true },
        { id: 'b', text: '3, 3, 1', isCorrect: false, feedback: 'Vanlig divisjon (/) gir alltid et desimaltall i Python.' },
        { id: 'c', text: '3.5, 3.5, 1', isCorrect: false, feedback: '// er heltallsdivisjon som runder ned til nærmeste heltall.' },
        { id: 'd', text: '3.5, 3, 0', isCorrect: false, feedback: '7 delt på 2 gir 3 med rest 1, ikke rest 0.' },
      ],
      solution: '/ er vanlig divisjon: 7/2 = 3.5. // er heltallsdivisjon: 7//2 = 3 (runder ned). % er modulo (rest): 7 % 2 = 1 (fordi 7 = 3*2 + 1).',
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Betingelser og valg (if/else)
// ============================================================================

export const CHAPTER_IT_1_2_3: TextbookChapter = {
  id: 'it-1-2-3',
  courseId: 'it-1',
  chapterNumber: '2.3',
  title: 'Betingelser og valg (if/else)',
  description: 'Lær å bruke if, elif og else for å la programmer ta beslutninger basert på betingelser, sammenligningsoperatorer og logiske operatorer.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-2-2',
  nextChapter: 'it-1-2-4',
  competenceGoals: [
    'bruke if, elif og else til å kontrollere programflyten',
    'bruke sammenligningsoperatorer til å sammenligne verdier',
    'kombinere betingelser med logiske operatorer (and, or, not)',
    'lage programmer som reagerer på brukerinput med betingelser',
  ],
  keyTerms: [
    { term: 'Betingelse', definition: 'Et uttrykk som evalueres til enten True (sant) eller False (usant). Betingelser brukes i if-setninger for å styre programflyten.' },
    { term: 'if-setning', definition: 'En kontrollstruktur som kjører en kodeblokk bare hvis en betingelse er sann (True). Syntaksen er: if betingelse: etterfulgt av innrykket kode.' },
    { term: 'elif', definition: 'Forkortelse for "else if". Brukes for å teste en ny betingelse hvis den forrige var usann. Du kan ha mange elif-blokker etter en if.' },
    { term: 'else', definition: 'Fanger opp alle tilfeller der ingen av de foregående if/elif-betingelsene var sanne. else har ingen betingelse og kommer alltid sist.' },
    { term: 'Sammenligningsoperator', definition: 'Operatorer som sammenligner to verdier og returnerer True eller False. Eksempler: == (er lik), != (er ulik), < (mindre enn), > (større enn).' },
    { term: 'Logisk operator', definition: 'Operatorer som kombinerer eller endrer sannhetsverdier: and (begge må være True), or (minst én må være True), not (inverterer verdien).' },
    { term: 'Innrykk', definition: 'Mellomrom i starten av en kodelinje som viser at linjen tilhører en blokk (f.eks. koden inne i en if-setning). Python bruker 4 mellomrom som standard innrykk.' },
    { term: 'Nøstet if-setning', definition: 'En if-setning plassert inne i en annen if-setning. Brukes når du trenger å sjekke flere betingelser i rekkefølge.' },
  ],
  content: [
    {
      id: 'it1-2-3-intro',
      type: 'text',
      content: `# Betingelser og valg (if/else)

Til nå har programmene våre kjørt fra topp til bunn uten å ta noen beslutninger. Hver linje ble utført etter tur, uavhengig av hva som skjedde. Men i virkelige programmer trenger vi ofte at datamaskinen tar valg: «Hvis brukeren skriver riktig passord, gi tilgang. Ellers vis en feilmelding.» Eller: «Hvis temperaturen er under null, vis advarsel om frost.»

Betingelser og if-setninger er verktøyene som gir programmene våre evnen til å ta slike beslutninger. De er en av de mest fundamentale byggesteinene i programmering, og du vil bruke dem i nesten alle programmer du skriver.

I dette kapittelet lærer du å bruke if, elif og else til å kontrollere hvilke deler av koden som kjøres, basert på betingelser du definerer. Vi skal også se på sammenligningsoperatorer og logiske operatorer som lar deg formulere både enkle og komplekse betingelser.`,
    },
    {
      id: 'it1-2-3-def-1',
      type: 'definition',
      title: 'Betingelse (condition)',
      content: `En betingelse er et uttrykk som Python evaluerer til enten \`True\` (sant) eller \`False\` (usant). Betingelser brukes i kontrollstrukturer som if-setninger for å bestemme hvilken kode som skal kjøres. Enkle betingelser bruker sammenligningsoperatorer (som \`==\`, \`<\`, \`>\`), mens komplekse betingelser kombinerer flere sammenligninger med logiske operatorer (\`and\`, \`or\`, \`not\`). Resultatet av en betingelse er alltid en boolsk verdi.`,
    },
    {
      id: 'it1-2-3-text-1',
      type: 'text',
      title: 'Sammenligningsoperatorer',
      content: `## Sammenligningsoperatorer

Før vi ser på if-setninger, må vi forstå sammenligningsoperatorer. Disse operatorene sammenligner to verdier og returnerer \`True\` eller \`False\`:

\`\`\`python
# Sammenligningsoperatorer
print(5 == 5)    # True  (er lik)
print(5 != 3)    # True  (er ikke lik)
print(5 > 3)     # True  (større enn)
print(5 < 3)     # False (mindre enn)
print(5 >= 5)    # True  (større enn eller lik)
print(5 <= 3)    # False (mindre enn eller lik)
\`\`\`

**Oversikt over sammenligningsoperatorer:**

| Operator | Betydning | Eksempel | Resultat |
|----------|-----------|----------|----------|
| \`==\` | Er lik | \`5 == 5\` | \`True\` |
| \`!=\` | Er ikke lik | \`5 != 3\` | \`True\` |
| \`>\` | Større enn | \`5 > 3\` | \`True\` |
| \`<\` | Mindre enn | \`5 < 3\` | \`False\` |
| \`>=\` | Større enn eller lik | \`5 >= 5\` | \`True\` |
| \`<=\` | Mindre enn eller lik | \`5 <= 3\` | \`False\` |

Du kan også sammenligne tekst. Python sammenligner tekst alfabetisk:

\`\`\`python
print("anna" < "bjørn")   # True (a kommer før b)
print("hei" == "hei")     # True
print("Hei" == "hei")     # False (stor H er ikke lik liten h)
\`\`\``,
    },
    {
      id: 'it1-2-3-text-2',
      type: 'text',
      title: 'if-setningen',
      content: `## if-setningen

En if-setning lar deg kjøre kode bare hvis en betingelse er sann:

\`\`\`python
alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig!")
    print("Du kan stemme ved valg.")
\`\`\`

**Forklaring linje for linje:**
1. Vi ber brukeren skrive inn alderen sin og konverterer til heltall
2. \`if alder >= 18:\` sjekker om alderen er 18 eller høyere
3. Koden med innrykk (4 mellomrom) kjøres bare hvis betingelsen er \`True\`
4. Hvis betingelsen er \`False\`, hopper Python over de innrykkede linjene

**Innrykk er avgjørende i Python.** Det er innrykket som forteller Python hvilke linjer som hører til if-blokken. Alle linjer med samme innrykk etter if-setningen tilhører blokken:

\`\`\`python
temperatur = -5

if temperatur < 0:
    print("Det er minusgrader!")    # Inne i if-blokken
    print("Kle deg godt!")           # Inne i if-blokken

print("Ha en fin dag!")              # Utenfor if-blokken (kjøres alltid)
\`\`\`

Hvis temperaturen er -5, skrives alle tre linjene ut. Hvis temperaturen er 10, skrives bare «Ha en fin dag!» ut, fordi de to første print-setningene er inne i if-blokken.`,
    },
    {
      id: 'it1-2-3-text-3',
      type: 'text',
      title: 'if-else',
      content: `## if-else: To veier

Ofte vil vi gjøre noe hvis betingelsen er sann, og noe annet hvis den er usann. Da bruker vi \`else\`:

\`\`\`python
alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig!")
else:
    print("Du er ikke myndig ennå.")
\`\`\`

\`else\`-blokken kjøres bare når betingelsen i \`if\` er \`False\`. Det er alltid enten if-blokken ELLER else-blokken som kjøres, aldri begge.

**Eksempel: Partall eller oddetall**

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall % 2 == 0:
    print(f"{tall} er et partall")
else:
    print(f"{tall} er et oddetall")
\`\`\`

Her bruker vi modulo-operatoren \`%\` som gir resten etter divisjon. Hvis resten av divisjon med 2 er 0, er tallet et partall. Ellers er det et oddetall.`,
    },
    {
      id: 'it1-2-3-text-4',
      type: 'text',
      title: 'if-elif-else',
      content: `## if-elif-else: Flere veier

Når du har mer enn to muligheter, bruker du \`elif\` (forkortelse for "else if") for å teste flere betingelser:

\`\`\`python
poeng = int(input("Hvor mange poeng fikk du? "))

if poeng >= 90:
    karakter = "A"
elif poeng >= 80:
    karakter = "B"
elif poeng >= 60:
    karakter = "C"
elif poeng >= 40:
    karakter = "D"
else:
    karakter = "F"

print(f"Du fikk karakteren {karakter}")
\`\`\`

**Hvordan dette fungerer:**
1. Python sjekker den første betingelsen: \`poeng >= 90\`
2. Hvis den er \`True\`, kjøres koden i den blokken, og resten hoppes over
3. Hvis den er \`False\`, sjekkes neste betingelse: \`poeng >= 80\`
4. Dette fortsetter nedover til en betingelse er \`True\`
5. Hvis ingen betingelser er \`True\`, kjøres \`else\`-blokken

**Viktig:** Rekkefølgen på betingelsene er avgjørende. Python sjekker betingelsene fra topp til bunn og stopper ved den første som er sann. Derfor starter vi med den høyeste verdien (90) og jobber oss nedover.

La oss se et eksempel med vær:

\`\`\`python
temperatur = float(input("Hva er temperaturen? "))

if temperatur > 30:
    print("Det er tropisk varmt! Finn et basseng!")
elif temperatur > 20:
    print("Deilig sommertemperatur!")
elif temperatur > 10:
    print("Behagelig, men ta med en jakke.")
elif temperatur > 0:
    print("Det er kjølig. Kle deg godt.")
else:
    print("Det er minusgrader! Hold deg inne!")
\`\`\``,
    },
    {
      id: 'it1-2-3-def-2',
      type: 'definition',
      title: 'Logiske operatorer',
      content: `Logiske operatorer kombinerer eller endrer sannhetsverdier. Python har tre logiske operatorer: **and** (og) returnerer \`True\` bare hvis begge betingelsene er sanne. **or** (eller) returnerer \`True\` hvis minst én av betingelsene er sann. **not** (ikke) inverterer sannhetsverdien, slik at \`True\` blir \`False\` og omvendt. Logiske operatorer brukes til å lage sammensatte betingelser i if-setninger.`,
    },
    {
      id: 'it1-2-3-text-5',
      type: 'text',
      title: 'Logiske operatorer i praksis',
      content: `## Kombinere betingelser med and, or og not

Med logiske operatorer kan du kombinere flere betingelser i én if-setning:

### and - Begge må være sanne

\`\`\`python
alder = int(input("Alder: "))
har_lappen = input("Har du førerkort? (ja/nei): ")

if alder >= 18 and har_lappen == "ja":
    print("Du kan kjøre bil!")
else:
    print("Du kan ikke kjøre bil.")
\`\`\`

Meldingen "Du kan kjøre bil!" vises bare hvis BEGGE betingelsene er oppfylt: alderen er minst 18 OG personen har førerkort.

### or - Minst én må være sann

\`\`\`python
dag = input("Hvilken dag er det? ").lower()

if dag == "lørdag" or dag == "søndag":
    print("Det er helg! Sov lenge!")
else:
    print("Det er hverdag. Opp og hopp!")
\`\`\`

Her holder det at det er lørdag ELLER søndag for at det skal være helg.

### not - Inverterer verdien

\`\`\`python
regner = input("Regner det? (ja/nei): ") == "ja"

if not regner:
    print("Fint vær! Gå en tur!")
else:
    print("Ta med paraply!")
\`\`\`

\`not regner\` er \`True\` når \`regner\` er \`False\`, altså når det ikke regner.

### Sannhetstabeller

| A | B | A and B | A or B |
|---|---|---------|--------|
| True | True | True | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |

| A | not A |
|---|-------|
| True | False |
| False | True |`,
    },
    {
      id: 'it1-2-3-example-1',
      type: 'example',
      title: 'Påloggingssystem',
      problem: `Lag et enkelt påloggingssystem der brukeren må skrive inn riktig brukernavn OG riktig passord for å få tilgang.`,
      solution: `\`\`\`python
# Enkelt påloggingssystem
print("=== Pålogging ===")

# Riktig brukernavn og passord
riktig_brukernavn = "admin"
riktig_passord = "hemmelig123"

# Les inn fra brukeren
brukernavn = input("Brukernavn: ")
passord = input("Passord: ")

# Sjekk om begge er riktige
if brukernavn == riktig_brukernavn and passord == riktig_passord:
    print("Innlogging vellykket! Velkommen!")
elif brukernavn != riktig_brukernavn:
    print("Feil brukernavn!")
else:
    print("Feil passord!")
\`\`\`

**Eksempel på kjøring 1:**
\`\`\`
=== Pålogging ===
Brukernavn: admin
Passord: hemmelig123
Innlogging vellykket! Velkommen!
\`\`\`

**Eksempel på kjøring 2:**
\`\`\`
=== Pålogging ===
Brukernavn: admin
Passord: feil
Feil passord!
\`\`\`

Vi bruker \`and\` for å sjekke at BEGGE feltene er riktige. Deretter bruker vi \`elif\` for å gi mer spesifikk tilbakemelding om hva som var feil.`,
    },
    {
      id: 'it1-2-3-example-2',
      type: 'example',
      title: 'Karakterkalkulator med validering',
      problem: `Lag et program som konverterer en poengsum (0-100) til norsk karakter (1-6) og validerer at inputen er gyldig.`,
      solution: `\`\`\`python
# Karakterkalkulator
print("=== Karakterkalkulator ===")
poeng = int(input("Skriv inn poengsum (0-100): "))

# Valider inputen
if poeng < 0 or poeng > 100:
    print("Ugyldig poengsum! Må være mellom 0 og 100.")
elif poeng >= 90:
    print(f"{poeng} poeng gir karakter 6 (Fremragende)")
elif poeng >= 77:
    print(f"{poeng} poeng gir karakter 5 (Meget god)")
elif poeng >= 63:
    print(f"{poeng} poeng gir karakter 4 (God)")
elif poeng >= 50:
    print(f"{poeng} poeng gir karakter 3 (Nokså god)")
elif poeng >= 35:
    print(f"{poeng} poeng gir karakter 2 (Lav)")
else:
    print(f"{poeng} poeng gir karakter 1 (Meget lav)")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
=== Karakterkalkulator ===
Skriv inn poengsum (0-100): 72
72 poeng gir karakter 4 (God)
\`\`\`

Legg merke til at vi sjekker for ugyldig input først (under 0 eller over 100). Deretter bruker vi elif-kjeden for å finne riktig karakter, fra høyest til lavest poengsum.`,
    },
    {
      id: 'it1-2-3-text-6',
      type: 'text',
      title: 'Nøstede if-setninger',
      content: `## Nøstede if-setninger

Du kan plassere if-setninger inne i andre if-setninger. Dette kalles nøsting:

\`\`\`python
alder = int(input("Alder: "))

if alder >= 13:
    print("Du kan opprette konto på sosiale medier.")
    if alder >= 18:
        print("Du kan også opprette konto uten foreldresamtykke.")
    else:
        print("Men du trenger foreldresamtykke.")
else:
    print("Du er for ung for sosiale medier.")
\`\`\`

Nøstede if-setninger kan gjøre koden uoversiktlig. Ofte kan du oppnå det samme med \`and\`:

\`\`\`python
# Samme logikk uten nøsting:
if alder >= 18:
    print("Du kan opprette konto uten foreldresamtykke.")
elif alder >= 13:
    print("Du kan opprette konto, men trenger foreldresamtykke.")
else:
    print("Du er for ung for sosiale medier.")
\`\`\`

Den andre versjonen er enklere å lese. Som tommelfingerregel bør du unngå å nøste dypere enn to nivåer. Hvis koden blir veldig nøstet, prøv å omstrukturere med elif eller logiske operatorer.`,
    },
    {
      id: 'it1-2-3-warning-1',
      type: 'warning',
      title: 'Vanlige feil med if-setninger',
      content: `**= vs ==:** Husk at \`=\` er tilordning og \`==\` er sammenligning. \`if alder = 18:\` gir feil. Riktig er \`if alder == 18:\`.

**Glemmer kolon:** Etter \`if\`, \`elif\` og \`else\` må det alltid stå kolon (\`:\`). \`if alder >= 18\` gir feil. Riktig er \`if alder >= 18:\`.

**Feil innrykk:** Koden inne i en if-blokk må ha konsistent innrykk (4 mellomrom). Blanding av tabs og mellomrom kan gi uventede feil.

**Rekkefølge i elif:** Sjekk betingelsene i riktig rekkefølge. Hvis du sjekker \`poeng >= 40\` før \`poeng >= 90\`, vil alle poeng over 40 matche den første betingelsen.`,
    },
    {
      id: 'it1-2-3-tip-1',
      type: 'tip',
      title: 'Test alle veier i koden',
      content: `Når du skriver if/elif/else-setninger, test programmet med verdier som utløser hver gren. Hvis du har en if-elif-elif-else, bør du teste minst fire forskjellige verdier, én for hver gren. Inkluder også grenseverdier, for eksempel hvis betingelsen er \`>= 18\`, test med 17, 18 og 19.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skriver dette programmet ut hvis brukeren skriver inn 15?\n\n```python\nalder = int(input("Alder: "))\nif alder >= 18:\n    print("Voksen")\nelse:\n    print("Ungdom")\n```',
      options: [
        { id: 'a', text: 'Voksen', isCorrect: false, feedback: '15 er mindre enn 18, så betingelsen er False.' },
        { id: 'b', text: 'Ungdom', isCorrect: true },
        { id: 'c', text: 'Både Voksen og Ungdom', isCorrect: false, feedback: 'Bare én av blokkene kjøres, aldri begge.' },
        { id: 'd', text: 'Ingenting', isCorrect: false, feedback: 'Når betingelsen er False, kjøres else-blokken.' },
      ],
      solution: 'Siden 15 < 18 er betingelsen `alder >= 18` False. Derfor hoppes if-blokken over og else-blokken kjøres, som skriver ut "Ungdom".',
    },
    {
      id: 'it-1-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er resultatet av uttrykket `5 > 3 and 2 < 1`?',
      options: [
        { id: 'a', text: 'True', isCorrect: false, feedback: 'For at and skal gi True, må begge sider være True.' },
        { id: 'b', text: 'False', isCorrect: true },
        { id: 'c', text: 'Feilmelding', isCorrect: false, feedback: 'Uttrykket er gyldig Python-kode.' },
        { id: 'd', text: '5', isCorrect: false, feedback: 'Sammenligningsuttrykk gir True eller False.' },
      ],
      solution: '5 > 3 er True, men 2 < 1 er False. Med `and` må begge være True for at resultatet skal bli True. Siden én er False, blir resultatet False.',
    },
    {
      id: 'it-1-2-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skriver dette programmet ut?\n\n```python\nx = 25\nif x > 30:\n    print("A")\nelif x > 20:\n    print("B")\nelif x > 10:\n    print("C")\nelse:\n    print("D")\n```',
      options: [
        { id: 'a', text: 'A', isCorrect: false, feedback: '25 er ikke større enn 30.' },
        { id: 'b', text: 'B', isCorrect: true },
        { id: 'c', text: 'C', isCorrect: false, feedback: 'Selv om 25 > 10 er True, stopper Python ved den første True-betingelsen.' },
        { id: 'd', text: 'B og C', isCorrect: false, feedback: 'Python stopper ved den første betingelsen som er True og hopper over resten.' },
      ],
      solution: 'Python sjekker betingelsene fra topp til bunn. 25 > 30 er False, så vi sjekker neste. 25 > 20 er True, så "B" skrives ut. De resterende betingelsene sjekkes ikke.',
    },
    {
      id: 'it-1-2-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken logisk operator bruker du når du vil at betingelsen skal være sann hvis MINST ÉN av to delvilkår er sann?',
      options: [
        { id: 'a', text: 'and', isCorrect: false, feedback: 'and krever at begge delvilkår er sanne.' },
        { id: 'b', text: 'or', isCorrect: true },
        { id: 'c', text: 'not', isCorrect: false, feedback: 'not inverterer én betingelse, den kombinerer ikke to.' },
        { id: 'd', text: '==', isCorrect: false, feedback: '== er en sammenligningsoperator, ikke en logisk operator.' },
      ],
      solution: '`or` returnerer True hvis minst én av betingelsene er True. For eksempel: `alder < 3 or alder > 67` er True for alle under 3 eller over 67.',
    },
    {
      id: 'it-1-2-3-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Skriv et program som spør brukeren om et tall og skriver ut om tallet er positivt, negativt eller null.`,
      solution: `\`\`\`python\ntall = float(input("Skriv inn et tall: "))\n\nif tall > 0:\n    print(f"{tall} er positivt")\nelif tall < 0:\n    print(f"{tall} er negativt")\nelse:\n    print("Tallet er null")\n\`\`\`\n\nVi bruker float() for å tillate desimaltall. if sjekker om tallet er positivt, elif sjekker negativt, og else fanger opp det eneste gjenværende tilfellet: null.`,
    },
    {
      id: 'it-1-2-3-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Lag et quiz-program med tre spørsmål. Programmet skal holde telling av poeng og gi en tilbakemelding basert på antall riktige svar (0: "Bedre lykke neste gang", 1-2: "Bra innsats", 3: "Perfekt score!"). Bruk if/elif/else.`,
      solution: `\`\`\`python\n# Quiz-program\nprint("=== Quiz! ===")\npoeng = 0\n\n# Spørsmål 1\nsvar1 = input("Hva er hovedstaden i Norge? ")\nif svar1.lower() == "oslo":\n    print("Riktig!")\n    poeng += 1\nelse:\n    print("Feil! Riktig svar er Oslo.")\n\n# Spørsmål 2\nsvar2 = input("Hvilket år ble Norge selvstendig? ")\nif svar2 == "1905":\n    print("Riktig!")\n    poeng += 1\nelse:\n    print("Feil! Riktig svar er 1905.")\n\n# Spørsmål 3\nsvar3 = input("Hva heter Norges lengste elv? ")\nif svar3.lower() == "glomma":\n    print("Riktig!")\n    poeng += 1\nelse:\n    print("Feil! Riktig svar er Glomma.")\n\n# Vis resultat\nprint(f"\\nDu fikk {poeng} av 3 riktige!")\nif poeng == 3:\n    print("Perfekt score!")\nelif poeng >= 1:\n    print("Bra innsats!")\nelse:\n    print("Bedre lykke neste gang!")\n\`\`\`\n\n.lower() konverterer svaret til små bokstaver slik at "Oslo", "oslo" og "OSLO" alle godtas.`,
    },
    {
      id: 'it-1-2-3-ex-7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Lag et program for en enkel billettautomat. Spør om brukerens alder og om det er helg (ja/nei). Prisregler:\n- Barn (under 12): 30 kr\n- Ungdom (12-17): 50 kr\n- Voksen (18-66): 100 kr\n- Senior (67+): 50 kr\n- Helgetillegg: 20 kr ekstra for alle\n\nVis alderskategori, grunnpris, eventuelt helgetillegg og totalpris.`,
      solution: `\`\`\`python\n# Billettautomat\nprint("=== Billettautomat ===")\nalder = int(input("Alder: "))\ner_helg = input("Er det helg? (ja/nei): ").lower() == "ja"\n\n# Bestem kategori og grunnpris\nif alder < 12:\n    kategori = "Barn"\n    grunnpris = 30\nelif alder < 18:\n    kategori = "Ungdom"\n    grunnpris = 50\nelif alder < 67:\n    kategori = "Voksen"\n    grunnpris = 100\nelse:\n    kategori = "Senior"\n    grunnpris = 50\n\n# Beregn helgetillegg\nhelgetillegg = 20 if er_helg else 0\ntotalpris = grunnpris + helgetillegg\n\n# Vis kvittering\nprint(f"\\n--- Billett ---")\nprint(f"Kategori: {kategori}")\nprint(f"Grunnpris: {grunnpris} kr")\nif er_helg:\n    print(f"Helgetillegg: {helgetillegg} kr")\nprint(f"Totalpris: {totalpris} kr")\n\`\`\`\n\nProgrammet bruker elif-kjede for å bestemme alderskategori, en betinget tildeling for helgetillegg, og if inne i utskriften for å bare vise helgetillegget når det er helg.`,
    },
    {
      id: 'it-1-2-3-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skriver dette programmet ut?\n\n```python\nx = 10\ny = 5\nz = 8\n\nif x > y and y > z:\n    print("A")\nelif x > z or y > z:\n    print("B")\nelif not (x == 10):\n    print("C")\nelse:\n    print("D")\n```',
      options: [
        { id: 'a', text: 'A', isCorrect: false, feedback: 'x > y er True (10>5), men y > z er False (5>8 er usant). and krever begge True.' },
        { id: 'b', text: 'B', isCorrect: true },
        { id: 'c', text: 'C', isCorrect: false, feedback: 'Vi kommer aldri til denne elif fordi B allerede matchet.' },
        { id: 'd', text: 'D', isCorrect: false, feedback: 'B matcher, så vi kommer aldri til else.' },
      ],
      solution: 'Første betingelse: x > y (True) and y > z (False) = False. Andre betingelse: x > z (True, 10>8) or y > z (False, 5>8) = True. Siden or bare krever én True, skrives "B" ut.',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Løkker og gjentakelse
// ============================================================================

export const CHAPTER_IT_1_2_4: TextbookChapter = {
  id: 'it-1-2-4',
  courseId: 'it-1',
  chapterNumber: '2.4',
  title: 'Løkker og gjentakelse',
  description: 'Lær å bruke for-løkker og while-løkker for å gjenta kode, range()-funksjonen, break og continue, og nøstede løkker.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-2-3',
  nextChapter: 'it-1-2-5',
  competenceGoals: [
    'bruke for-løkker til å iterere over sekvenser og tallområder',
    'bruke while-løkker for gjentakelse basert på betingelser',
    'forstå og bruke range()-funksjonen',
    'bruke break og continue for å kontrollere løkker',
    'forstå og bruke nøstede løkker',
  ],
  keyTerms: [
    { term: 'Løkke', definition: 'En kontrollstruktur som gjentar en kodeblokk flere ganger. Python har to typer løkker: for-løkker og while-løkker.' },
    { term: 'for-løkke', definition: 'En løkke som itererer over en sekvens (som en liste, streng eller range). For hver verdi i sekvensen kjøres kodeblokken én gang.' },
    { term: 'while-løkke', definition: 'En løkke som gjentar en kodeblokk så lenge en betingelse er sann (True). Betingelsen sjekkes før hver repetisjon.' },
    { term: 'range()', definition: 'En innebygd funksjon som genererer en sekvens av tall. range(5) gir 0,1,2,3,4. range(1,6) gir 1,2,3,4,5. range(0,10,2) gir 0,2,4,6,8.' },
    { term: 'Iterasjon', definition: 'Én enkelt gjennomgang av koden i en løkke. Hvis en løkke kjører 5 ganger, har den 5 iterasjoner.' },
    { term: 'break', definition: 'Et nøkkelord som avbryter en løkke umiddelbart, uavhengig av betingelsen. Programmet fortsetter med koden etter løkken.' },
    { term: 'continue', definition: 'Et nøkkelord som hopper over resten av den aktuelle iterasjonen og går direkte til neste gjennomgang av løkken.' },
    { term: 'Uendelig løkke', definition: 'En while-løkke der betingelsen aldri blir False, slik at løkken kjører for alltid. Dette er vanligvis en feil, men kan brukes bevisst med break.' },
  ],
  content: [
    {
      id: 'it1-2-4-intro',
      type: 'text',
      content: `# Løkker og gjentakelse

Forestill deg at du skal skrive ut tallene fra 1 til 100. Uten løkker måtte du skrive 100 print-setninger. Med en løkke klarer du det med to linjer kode. Løkker er en av de kraftigste verktøyene i programmering fordi de lar deg gjenta kode så mange ganger du vil, uten å skrive den samme koden om og om igjen.

Python har to typer løkker: **for-løkker** som itererer over en bestemt sekvens, og **while-løkker** som gjentar kode så lenge en betingelse er sann. I dette kapittelet skal du lære å bruke begge typene, samt spesielle nøkkelord som \`break\` og \`continue\` for å kontrollere løkkenes oppførsel.`,
    },
    {
      id: 'it1-2-4-def-1',
      type: 'definition',
      title: 'Løkke (loop)',
      content: `En løkke er en kontrollstruktur i programmering som gjentar en blokk med kode flere ganger. Løkker er essensielle for å automatisere repetitive oppgaver. I stedet for å skrive den samme koden hundre ganger, kan du bruke en løkke som kjører koden hundre ganger automatisk. Python tilbyr to typer: for-løkker (for å iterere over en kjent sekvens) og while-løkker (for å gjenta basert på en betingelse).`,
    },
    {
      id: 'it1-2-4-text-1',
      type: 'text',
      title: 'for-løkker',
      content: `## for-løkker

En for-løkke itererer over en sekvens og kjører kodeblokken én gang for hvert element i sekvensen. Det vanligste er å bruke \`range()\` for å generere en tallsekvens:

\`\`\`python
# Skriv ut tallene 0 til 4
for i in range(5):
    print(i)
\`\`\`

**Kjøring gir:**
\`\`\`
0
1
2
3
4
\`\`\`

**Forklaring:** \`range(5)\` genererer tallene 0, 1, 2, 3, 4 (5 tall, men starter på 0). For hver iterasjon får variabelen \`i\` neste verdi fra sekvensen, og koden inne i løkken kjøres.

### range() med forskjellige argumenter

\`\`\`python
# range(start, stopp) - starter på start, stopper FØR stopp
for i in range(1, 6):
    print(i)     # Skriver ut: 1, 2, 3, 4, 5

# range(start, stopp, steg) - med egendefinert steg
for i in range(0, 20, 5):
    print(i)     # Skriver ut: 0, 5, 10, 15

# Telle nedover
for i in range(10, 0, -1):
    print(i)     # Skriver ut: 10, 9, 8, ..., 2, 1
\`\`\`

### Iterere over tekst

Du kan også bruke for-løkker til å gå gjennom hver bokstav i en tekststreng:

\`\`\`python
navn = "Python"
for bokstav in navn:
    print(bokstav)
\`\`\`

**Kjøring gir:**
\`\`\`
P
y
t
h
o
n
\`\`\`

### Iterere over en liste

\`\`\`python
frukter = ["eple", "banan", "appelsin", "druer"]
for frukt in frukter:
    print(f"Jeg liker {frukt}!")
\`\`\`

**Kjøring gir:**
\`\`\`
Jeg liker eple!
Jeg liker banan!
Jeg liker appelsin!
Jeg liker druer!
\`\`\``,
    },
    {
      id: 'it1-2-4-example-1',
      type: 'example',
      title: 'Gangetabell med for-løkke',
      problem: `Skriv et program som spør brukeren om et tall og skriver ut gangetabellen for det tallet (1 til 10).`,
      solution: `\`\`\`python
# Gangetabell
tall = int(input("Hvilket tall vil du se gangetabellen for? "))

print(f"\\nGangetabellen for {tall}:")
print("-" * 20)

for i in range(1, 11):
    resultat = tall * i
    print(f"{tall} x {i} = {resultat}")
\`\`\`

**Eksempel på kjøring (input: 7):**
\`\`\`
Hvilket tall vil du se gangetabellen for? 7

Gangetabellen for 7:
--------------------
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
\`\`\`

\`range(1, 11)\` genererer tallene 1 til 10. For hver verdi av \`i\` beregner vi produktet og skriver ut en formatert linje. \`"-" * 20\` gjentar bindestreken 20 ganger for å lage en skillelinje.`,
    },
    {
      id: 'it1-2-4-text-2',
      type: 'text',
      title: 'while-løkker',
      content: `## while-løkker

En while-løkke gjentar kodeblokken så lenge en betingelse er sann (\`True\`). Betingelsen sjekkes før hver iterasjon:

\`\`\`python
# Telle til 5 med while
teller = 1
while teller <= 5:
    print(teller)
    teller += 1

print("Ferdig!")
\`\`\`

**Kjøring gir:**
\`\`\`
1
2
3
4
5
Ferdig!
\`\`\`

**Steg for steg:**
1. \`teller = 1\` - variabelen starter på 1
2. \`while teller <= 5:\` - er 1 <= 5? Ja (True), kjør blokken
3. Skriv ut 1, øk teller til 2
4. Er 2 <= 5? Ja, kjør blokken...
5. (Fortsetter til teller er 6)
6. Er 6 <= 5? Nei (False), stopp løkken
7. "Ferdig!" skrives ut

### Når bruker du while vs. for?

- Bruk **for** når du vet på forhånd hvor mange ganger løkken skal kjøre
- Bruk **while** når løkken skal fortsette til en betingelse endrer seg

\`\`\`python
# while er perfekt for brukerinteraksjon
svar = ""
while svar != "ja":
    svar = input("Vil du avslutte? (ja/nei): ")

print("Ha det bra!")
\`\`\`

Her vet vi ikke på forhånd hvor mange ganger brukeren vil svare "nei", så while er det naturlige valget.`,
    },
    {
      id: 'it1-2-4-warning-1',
      type: 'warning',
      title: 'Uendelige løkker',
      content: `En uendelig løkke oppstår når betingelsen i en while-løkke aldri blir \`False\`. Da kjører programmet for alltid:

\`\`\`python
# ADVARSEL: Uendelig løkke!
teller = 1
while teller <= 5:
    print(teller)
    # Feil: Vi glemte å øke teller!
\`\`\`

Denne løkken skriver ut 1 i all evighet fordi \`teller\` aldri endrer seg. For å stoppe et program som henger i en uendelig løkke, trykk Ctrl+C.

Sørg alltid for at noe inne i while-løkken endrer betingelsen slik at den til slutt blir \`False\`.`,
    },
    {
      id: 'it1-2-4-text-3',
      type: 'text',
      title: 'break og continue',
      content: `## break og continue

Python har to spesielle nøkkelord for å kontrollere løkker:

### break - Avbryt løkken

\`break\` stopper løkken umiddelbart og hopper ut av den:

\`\`\`python
# Finn det første tallet delelig med 7 mellom 50 og 100
for tall in range(50, 101):
    if tall % 7 == 0:
        print(f"Fant det! {tall} er delelig med 7")
        break
\`\`\`

**Kjøring gir:**
\`\`\`
Fant det! 56 er delelig med 7
\`\`\`

Uten \`break\` ville løkken fortsatt å lete etter flere tall. Med \`break\` stopper vi ved det første treffet.

### continue - Hopp til neste iterasjon

\`continue\` hopper over resten av den aktuelle iterasjonen og går til neste:

\`\`\`python
# Skriv ut alle tall fra 1 til 10, unntatt tall delelig med 3
for i in range(1, 11):
    if i % 3 == 0:
        continue  # Hopp over dette tallet
    print(i)
\`\`\`

**Kjøring gir:**
\`\`\`
1
2
4
5
7
8
10
\`\`\`

Tallene 3, 6 og 9 ble hoppet over fordi \`continue\` ble utløst.

### break i while-løkker

\`break\` er spesielt nyttig i while-løkker for å lage kontrollerte utganger:

\`\`\`python
# Gjette-spill
import random
hemmelig = random.randint(1, 10)

while True:  # Uendelig løkke
    gjett = int(input("Gjett et tall (1-10): "))

    if gjett == hemmelig:
        print("Riktig! Du gjettet det!")
        break  # Avbryt løkken
    elif gjett < hemmelig:
        print("For lavt! Prøv igjen.")
    else:
        print("For høyt! Prøv igjen.")
\`\`\`

Her bruker vi \`while True\` (som aldri blir False) sammen med \`break\` for å avslutte når brukeren gjetter riktig.`,
    },
    {
      id: 'it1-2-4-text-4',
      type: 'text',
      title: 'Nøstede løkker',
      content: `## Nøstede løkker

Du kan plassere en løkke inne i en annen løkke. Den indre løkken kjøres ferdig for hver iterasjon av den ytre løkken:

\`\`\`python
# Gangetabell 1-5
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i} x {j} = {i*j:2d}", end="   ")
    print()  # Ny linje etter hver rad
\`\`\`

**Kjøring gir:**
\`\`\`
1 x 1 =  1   1 x 2 =  2   1 x 3 =  3   1 x 4 =  4   1 x 5 =  5
2 x 1 =  2   2 x 2 =  4   2 x 3 =  6   2 x 4 =  8   2 x 5 = 10
3 x 1 =  3   3 x 2 =  6   3 x 3 =  9   3 x 4 = 12   3 x 5 = 15
4 x 1 =  4   4 x 2 =  8   4 x 3 = 12   4 x 4 = 16   4 x 5 = 20
5 x 1 =  5   5 x 2 = 10   5 x 3 = 15   5 x 4 = 20   5 x 5 = 25
\`\`\`

Den ytre løkken (\`i\`) styrer radene, og den indre løkken (\`j\`) styrer kolonnene. For \`i=1\` kjører \`j\` gjennom alle verdier 1-5, deretter økes \`i\` til 2, og \`j\` kjører igjen gjennom 1-5, osv.

\`end="   "\` i \`print()\` gjør at neste print kommer på samme linje (med tre mellomrom mellom). Den tomme \`print()\` lager et linjeskift etter hver rad.

**Et enklere eksempel med nøstede løkker:**

\`\`\`python
# Skriv ut et mønster med stjerner
for rad in range(1, 6):
    for stjerne in range(rad):
        print("*", end="")
    print()
\`\`\`

**Kjøring gir:**
\`\`\`
*
**
***
****
*****
\`\`\``,
    },
    {
      id: 'it1-2-4-example-2',
      type: 'example',
      title: 'Summering med løkker',
      problem: `Skriv et program som lar brukeren skrive inn tall helt til de skriver 0. Programmet skal vise summen, antallet tall og gjennomsnittet.`,
      solution: `\`\`\`python
# Summeringsprogram
print("Skriv inn tall. Skriv 0 for å avslutte.")

total = 0
antall = 0

while True:
    tall = float(input("Tall: "))

    if tall == 0:
        break

    total += tall
    antall += 1

# Vis resultater
if antall > 0:
    gjennomsnitt = total / antall
    print(f"\\nDu skrev inn {antall} tall")
    print(f"Summen er {total}")
    print(f"Gjennomsnittet er {gjennomsnitt:.2f}")
else:
    print("Du skrev ikke inn noen tall.")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
Skriv inn tall. Skriv 0 for å avslutte.
Tall: 10
Tall: 20
Tall: 30
Tall: 0

Du skrev inn 3 tall
Summen er 60.0
Gjennomsnittet er 20.00
\`\`\`

Vi bruker \`while True\` med \`break\` fordi vi ikke vet på forhånd hvor mange tall brukeren vil skrive inn. Vi sjekker om \`antall > 0\` før vi beregner gjennomsnittet for å unngå divisjon med null.`,
    },
    {
      id: 'it1-2-4-tip-1',
      type: 'tip',
      title: 'Akkumulator-mønsteret',
      content: `Et av de vanligste mønstrene i programmering er akkumulator-mønsteret: du oppretter en variabel (akkumulatoren) før løkken, og oppdaterer den for hver iterasjon. For eksempel \`total = 0\` som akkumulerer en sum, eller \`antall = 0\` som teller antall iterasjoner. Dette mønsteret brukes hele tiden i praksis.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skriver denne koden ut?\n\n```python\nfor i in range(3):\n    print(i)\n```',
      options: [
        { id: 'a', text: '1, 2, 3', isCorrect: false, feedback: 'range(3) starter på 0, ikke 1.' },
        { id: 'b', text: '0, 1, 2', isCorrect: true },
        { id: 'c', text: '0, 1, 2, 3', isCorrect: false, feedback: 'range(3) gir 3 tall: 0, 1, 2. Tallet 3 er ikke inkludert.' },
        { id: 'd', text: '3', isCorrect: false, feedback: 'range(3) gir en sekvens av tall, ikke bare tallet 3.' },
      ],
      solution: 'range(3) genererer tallene 0, 1, 2 (tre tall, starter på 0, stopper FØR 3). Løkken kjører tre ganger og skriver ut hvert tall.',
    },
    {
      id: 'it-1-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når bør du bruke en while-løkke i stedet for en for-løkke?',
      options: [
        { id: 'a', text: 'Alltid, while er bedre enn for', isCorrect: false, feedback: 'Begge har sine bruksområder.' },
        { id: 'b', text: 'Når du vet nøyaktig hvor mange ganger løkken skal kjøre', isCorrect: false, feedback: 'Da er for-løkke vanligvis bedre.' },
        { id: 'c', text: 'Når løkken skal gjenta til en betingelse endrer seg, og du ikke vet antall repetisjoner på forhånd', isCorrect: true },
        { id: 'd', text: 'Aldri, for-løkker kan gjøre alt while kan', isCorrect: false, feedback: 'Teknisk mulig, men while er naturlig for betingelsesbasert gjentakelse.' },
      ],
      solution: 'while-løkker er best når du ikke vet på forhånd hvor mange ganger koden skal gjentas. For eksempel: gjenta til brukeren skriver "ja", eller gjenta til riktig svar er gitt.',
    },
    {
      id: 'it-1-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skriver denne koden ut?\n\n```python\nfor i in range(1, 10, 3):\n    print(i, end=" ")\n```',
      options: [
        { id: 'a', text: '1 2 3 4 5 6 7 8 9', isCorrect: false, feedback: 'Steget er 3, ikke 1. Vi hopper over tall.' },
        { id: 'b', text: '1 4 7', isCorrect: true },
        { id: 'c', text: '3 6 9', isCorrect: false, feedback: 'Sekvensen starter på 1, ikke 3.' },
        { id: 'd', text: '1 4 7 10', isCorrect: false, feedback: 'range stopper FØR 10, og 10 er ikke inkludert.' },
      ],
      solution: 'range(1, 10, 3) starter på 1 og øker med 3 for hvert steg: 1, 4, 7. Neste verdi ville vært 10, men range stopper før stoppverdien.',
    },
    {
      id: 'it-1-2-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom `break` og `continue`?',
      options: [
        { id: 'a', text: 'De gjør det samme', isCorrect: false, feedback: 'De har helt forskjellig funksjon.' },
        { id: 'b', text: 'break avslutter hele programmet, continue avslutter løkken', isCorrect: false, feedback: 'break avslutter løkken, ikke hele programmet.' },
        { id: 'c', text: 'break avslutter løkken helt, continue hopper til neste iterasjon', isCorrect: true },
        { id: 'd', text: 'break fungerer bare i for-løkker, continue bare i while-løkker', isCorrect: false, feedback: 'Begge fungerer i begge typer løkker.' },
      ],
      solution: 'break avbryter hele løkken og fortsetter med koden etter løkken. continue hopper over resten av den aktuelle iterasjonen og går direkte til neste gjennomgang av løkken.',
    },
    {
      id: 'it-1-2-4-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Skriv et program som bruker en for-løkke til å skrive ut alle partall fra 2 til 20 (inkludert 20).`,
      solution: `\`\`\`python\n# Skriv ut partall fra 2 til 20\nfor tall in range(2, 21, 2):\n    print(tall)\n\`\`\`\n\nAlternativ løsning:\n\`\`\`python\nfor tall in range(2, 21):\n    if tall % 2 == 0:\n        print(tall)\n\`\`\`\n\nDen første løsningen bruker steget i range() for å bare generere partall. Den andre sjekker hvert tall med modulo-operatoren.`,
    },
    {
      id: 'it-1-2-4-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Lag et passordprogram som gir brukeren 3 forsøk på å gjette riktig passord ("python123"). Etter hvert feil forsøk skal programmet vise hvor mange forsøk som gjenstår. Hvis alle forsøk er brukt opp, vis en melding om at kontoen er låst.`,
      solution: `\`\`\`python\n# Passordprogram med 3 forsøk\nriktig_passord = "python123"\nmaks_forsok = 3\n\nprint("=== Innlogging ===")\n\nfor forsok in range(1, maks_forsok + 1):\n    passord = input(f"Forsøk {forsok}/{maks_forsok} - Skriv passord: ")\n\n    if passord == riktig_passord:\n        print("Riktig passord! Velkommen inn!")\n        break\n    else:\n        gjenstaar = maks_forsok - forsok\n        if gjenstaar > 0:\n            print(f"Feil passord! {gjenstaar} forsøk gjenstår.")\n        else:\n            print("Feil passord! Kontoen er nå låst.")\n\`\`\`\n\nVi bruker en for-løkke med range(1, 4) for nøyaktig 3 forsøk. break avbryter løkken hvis passordet er riktig. Ellers viser vi gjenstående forsøk.`,
    },
    {
      id: 'it-1-2-4-ex-7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Skriv et program som bruker nøstede løkker til å skrive ut følgende mønster:\n\n\`\`\`\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n\`\`\``,
      solution: `\`\`\`python\n# Tallmønster med nøstede løkker\nfor rad in range(1, 6):\n    for kolonne in range(1, rad + 1):\n        print(kolonne, end=" ")\n    print()  # Ny linje etter hver rad\n\`\`\`\n\nDen ytre løkken styrer radene (1 til 5). For hver rad styrer den indre løkken kolonnene. Når rad=1 kjører den indre løkken med range(1, 2) som gir bare 1. Når rad=3 kjører den med range(1, 4) som gir 1, 2, 3. end=" " gjør at tallene skrives på samme linje med mellomrom, og print() uten argumenter lager linjeskift.`,
    },
    {
      id: 'it-1-2-4-ex-8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Lag et terningspill der datamaskinen \"kaster\" en terning (tilfeldig tall 1-6) gjentatte ganger. Programmet skal:\n- Kaste terningen og vise resultatet\n- Spørre om brukeren vil kaste igjen\n- Holde styr på antall kast, summen av alle kast, og det høyeste kastet\n- Vise statistikk til slutt\n\nBruk \`import random\` og \`random.randint(1, 6)\`.`,
      solution: `\`\`\`python\nimport random\n\nprint("=== Terningspill ===")\n\nantall_kast = 0\ntotal = 0\nhoyeste = 0\n\nwhile True:\n    # Kast terningen\n    kast = random.randint(1, 6)\n    antall_kast += 1\n    total += kast\n\n    if kast > hoyeste:\n        hoyeste = kast\n\n    print(f"\\nKast {antall_kast}: Du fikk {kast}!")\n\n    # Spør om nytt kast\n    igjen = input("Kaste igjen? (ja/nei): ").lower()\n    if igjen != "ja":\n        break\n\n# Vis statistikk\ngjennomsnitt = total / antall_kast\nprint(f"\\n=== Statistikk ===")\nprint(f"Antall kast: {antall_kast}")\nprint(f"Sum av alle kast: {total}")\nprint(f"Høyeste kast: {hoyeste}")\nprint(f"Gjennomsnitt: {gjennomsnitt:.1f}")\n\`\`\`\n\nProgrammet bruker while True med break for å la brukeren kaste så mange ganger de vil. random.randint(1, 6) gir et tilfeldig heltall mellom 1 og 6 (inkludert begge).`,
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Funksjoner og gjenbruk
// ============================================================================

export const CHAPTER_IT_1_2_5: TextbookChapter = {
  id: 'it-1-2-5',
  courseId: 'it-1',
  chapterNumber: '2.5',
  title: 'Funksjoner og gjenbruk',
  description: 'Lær å definere egne funksjoner med def, bruke parametere og returverdier, forstå variabelskop (scope), og importere moduler for å gjenbruke kode.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-2-4',
  nextChapter: 'it-1-2-6',
  competenceGoals: [
    'definere og kalle egne funksjoner i Python',
    'bruke parametere og returverdier i funksjoner',
    'forklare forskjellen mellom lokale og globale variabler',
    'importere og bruke moduler',
  ],
  keyTerms: [
    { term: 'Funksjon', definition: 'En navngitt, gjenbrukbar blokk med kode som utfører en bestemt oppgave. Funksjoner defineres med nøkkelordet def og kan ta imot parametere og returnere verdier.' },
    { term: 'def', definition: 'Nøkkelordet som brukes til å definere (opprette) en funksjon i Python. Syntaksen er: def funksjonsnavn(parametere):' },
    { term: 'Parameter', definition: 'En variabel i funksjonsdefinisjonen som tar imot en verdi når funksjonen kalles. Parametere står i parentesene etter funksjonsnavnet.' },
    { term: 'Argument', definition: 'Den faktiske verdien som sendes til en funksjon når den kalles. Argumentet tilordnes til den tilsvarende parameteren.' },
    { term: 'Returverdi', definition: 'Verdien en funksjon sender tilbake til koden som kalte den. Returverdien angis med nøkkelordet return.' },
    { term: 'Scope', definition: 'Området der en variabel er tilgjengelig. Lokale variabler (opprettet inne i en funksjon) er bare tilgjengelige inne i den funksjonen. Globale variabler er tilgjengelige overalt.' },
    { term: 'Modul', definition: 'En fil med Python-kode som inneholder funksjoner, klasser og variabler som kan importeres og gjenbrukes i andre programmer. Eksempler er math, random og os.' },
    { term: 'import', definition: 'Nøkkelordet som brukes til å laste inn (importere) moduler i Python slik at du kan bruke funksjonene og variablene de tilbyr.' },
  ],
  content: [
    {
      id: 'it1-2-5-intro',
      type: 'text',
      content: `# Funksjoner og gjenbruk

Tenk deg at du har skrevet kode som beregner gjennomsnittet av tre tall, og du trenger å gjøre den samme beregningen flere steder i programmet. Du kan kopiere og lime inn koden, men det fører til duplisering, feil og vanskelig vedlikehold. Funksjoner løser dette problemet.

En funksjon er en navngitt blokk med kode som du kan kalle (bruke) når som helst i programmet. Du har allerede brukt funksjoner som \`print()\`, \`input()\`, \`int()\` og \`range()\`. Nå skal du lære å lage dine egne funksjoner.

Funksjoner er et av de viktigste konseptene i programmering. De lar deg organisere koden i logiske enheter, unngå gjentakelse, og gjøre programmer lettere å lese, teste og vedlikeholde. I dette kapittelet lærer du å definere funksjoner, bruke parametere og returverdier, og importere ferdige moduler.`,
    },
    {
      id: 'it1-2-5-def-1',
      type: 'definition',
      title: 'Funksjon',
      content: `En funksjon er en navngitt, gjenbrukbar blokk med kode som utfører en bestemt oppgave. Funksjoner gjør det mulig å bryte ned et stort program i mindre, håndterbare deler. Du kan tenke på en funksjon som en maskin: du putter noe inn (parametere), maskinen gjør sitt arbeid, og du får noe ut (returverdi). Funksjoner defineres én gang og kan kalles (brukes) mange ganger. De viktigste fordelene med funksjoner er gjenbruk av kode, bedre organisering og enklere feilsøking.`,
    },
    {
      id: 'it1-2-5-text-1',
      type: 'text',
      title: 'Definere og kalle funksjoner',
      content: `## Din første funksjon

Du definerer en funksjon med \`def\`-nøkkelordet, etterfulgt av funksjonsnavnet, parenteser og kolon:

\`\`\`python
# Definere en funksjon
def si_hei():
    print("Hei! Velkommen til programmet!")
    print("Ha det gøy!")

# Kalle (bruke) funksjonen
si_hei()
si_hei()  # Du kan kalle den mange ganger
\`\`\`

**Kjøring gir:**
\`\`\`
Hei! Velkommen til programmet!
Ha det gøy!
Hei! Velkommen til programmet!
Ha det gøy!
\`\`\`

**Viktig:** Å definere en funksjon utfører den ikke. Koden inne i funksjonen kjøres først når du kaller funksjonen ved å skrive navnet med parenteser: \`si_hei()\`.

### Funksjoner med parametere

Parametere lar deg sende verdier inn i funksjonen:

\`\`\`python
def hils_paa(navn):
    print(f"Hei, {navn}! Hyggelig å møte deg!")

hils_paa("Sara")     # Hei, Sara! Hyggelig å møte deg!
hils_paa("Ole")      # Hei, Ole! Hyggelig å møte deg!
hils_paa("Kari")     # Hei, Kari! Hyggelig å møte deg!
\`\`\`

\`navn\` er en **parameter** i funksjonsdefinisjonen. \`"Sara"\`, \`"Ole"\` og \`"Kari"\` er **argumenter** som sendes til funksjonen.

### Flere parametere

\`\`\`python
def presenter(fornavn, etternavn, alder):
    print(f"Jeg heter {fornavn} {etternavn} og er {alder} år.")

presenter("Sara", "Hansen", 17)
presenter("Ole", "Berg", 16)
\`\`\`

**Kjøring gir:**
\`\`\`
Jeg heter Sara Hansen og er 17 år.
Jeg heter Ole Berg og er 16 år.
\`\`\`

Rekkefølgen på argumentene må matche rekkefølgen på parameterne.`,
    },
    {
      id: 'it1-2-5-text-2',
      type: 'text',
      title: 'Returverdier',
      content: `## Returverdier med return

Funksjoner kan sende en verdi tilbake til koden som kalte dem med \`return\`:

\`\`\`python
def beregn_areal(bredde, hoyde):
    areal = bredde * hoyde
    return areal

# Bruk returverdien
resultat = beregn_areal(5, 3)
print(f"Arealet er {resultat}")  # Arealet er 15

# Eller bruk returverdien direkte
print(f"Arealet er {beregn_areal(10, 4)}")  # Arealet er 40
\`\`\`

Når Python møter \`return\`, stopper funksjonen umiddelbart og sender verdien tilbake. Kode etter \`return\` i samme funksjon kjøres aldri.

### Funksjoner med og uten returverdi

Funksjoner som bruker \`return\` gir en verdi tilbake som du kan lagre i en variabel eller bruke i beregninger. Funksjoner uten \`return\` (eller med bare \`return\` uten verdi) returnerer automatisk \`None\`:

\`\`\`python
# Funksjon MED returverdi (beregner noe)
def adder(a, b):
    return a + b

summen = adder(5, 3)
print(summen)  # 8

# Funksjon UTEN returverdi (gjør en handling)
def skriv_linje():
    print("-" * 40)

skriv_linje()  # Skriver ut en linje med bindestreker
\`\`\`

**Tommelfingerregel:** Hvis funksjonen beregner noe, bruk \`return\`. Hvis funksjonen bare gjør en handling (som å skrive ut tekst), trenger du ikke \`return\`.

### Returnere flere verdier

Python lar deg returnere flere verdier som en tuppel:

\`\`\`python
def beregn_statistikk(tall1, tall2, tall3):
    summen = tall1 + tall2 + tall3
    gjennomsnitt = summen / 3
    storste = max(tall1, tall2, tall3)
    return summen, gjennomsnitt, storste

s, g, maks = beregn_statistikk(10, 20, 30)
print(f"Sum: {s}, Gjennomsnitt: {g}, Størst: {maks}")
# Sum: 60, Gjennomsnitt: 20.0, Størst: 30
\`\`\``,
    },
    {
      id: 'it1-2-5-example-1',
      type: 'example',
      title: 'Kalkulator med funksjoner',
      problem: `Lag en kalkulator som bruker funksjoner for de fire regneartene.`,
      solution: `\`\`\`python
# Kalkulator med funksjoner

def adder(a, b):
    return a + b

def subtraher(a, b):
    return a - b

def multipliser(a, b):
    return a * b

def divider(a, b):
    if b == 0:
        return "Kan ikke dele på null!"
    return a / b

# Hovedprogram
print("=== Kalkulator ===")
tall1 = float(input("Første tall: "))
tall2 = float(input("Andre tall: "))

print(f"\\n{tall1} + {tall2} = {adder(tall1, tall2)}")
print(f"{tall1} - {tall2} = {subtraher(tall1, tall2)}")
print(f"{tall1} * {tall2} = {multipliser(tall1, tall2)}")
print(f"{tall1} / {tall2} = {divider(tall1, tall2)}")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
=== Kalkulator ===
Første tall: 10
Andre tall: 3

10.0 + 3.0 = 13.0
10.0 - 3.0 = 7.0
10.0 * 3.0 = 30.0
10.0 / 3.0 = 3.3333333333333335
\`\`\`

Hver regneart er sin egen funksjon. \`divider()\`-funksjonen sjekker for divisjon med null. Hovedprogrammet kaller funksjonene og viser resultatene.`,
    },
    {
      id: 'it1-2-5-def-2',
      type: 'definition',
      title: 'Scope (virkeområde)',
      content: `Scope bestemmer hvor i koden en variabel er tilgjengelig. **Lokale variabler** opprettes inne i en funksjon og eksisterer bare mens funksjonen kjører. De er ikke tilgjengelige utenfor funksjonen. **Globale variabler** opprettes utenfor alle funksjoner og er tilgjengelige overalt i programmet. Funksjoner kan lese globale variabler, men for å endre dem må du bruke nøkkelordet \`global\`. Som hovedregel bør du unngå globale variabler og heller bruke parametere og returverdier.`,
    },
    {
      id: 'it1-2-5-text-3',
      type: 'text',
      title: 'Scope i praksis',
      content: `## Lokale og globale variabler

\`\`\`python
# Global variabel
melding = "Hei fra utenfor!"

def min_funksjon():
    # Lokal variabel
    lokal_melding = "Hei fra inni funksjonen!"
    print(lokal_melding)   # Fungerer
    print(melding)         # Fungerer (kan lese global variabel)

min_funksjon()
print(melding)             # Fungerer (global variabel)
# print(lokal_melding)     # FEIL! Variabelen finnes ikke her
\`\`\`

**Viktige regler:**
1. Lokale variabler er bare tilgjengelige inne i funksjonen der de er opprettet
2. Globale variabler kan leses inne i funksjoner
3. Parametere oppfører seg som lokale variabler

\`\`\`python
def doble(tall):
    resultat = tall * 2  # resultat er lokal
    return resultat

svar = doble(5)
print(svar)     # 10
# print(tall)   # FEIL! tall er en parameter (lokal)
# print(resultat)  # FEIL! resultat er lokal
\`\`\`

### Standardverdier for parametere

Du kan gi parametere standardverdier som brukes hvis argumentet ikke sendes:

\`\`\`python
def hils(navn, hilsen="Hei"):
    print(f"{hilsen}, {navn}!")

hils("Sara")              # Hei, Sara!
hils("Ole", "God morgen")  # God morgen, Ole!
\`\`\`

Parametere med standardverdier må komme etter parametere uten standardverdier.`,
    },
    {
      id: 'it1-2-5-text-4',
      type: 'text',
      title: 'Moduler og import',
      content: `## Moduler - Gjenbruk andres kode

Python kommer med hundrevis av ferdige moduler som inneholder nyttige funksjoner. Du importerer en modul med \`import\`:

\`\`\`python
# Importere hele modulen
import math

print(math.pi)          # 3.141592653589793
print(math.sqrt(16))    # 4.0 (kvadratrot)
print(math.ceil(3.2))   # 4 (runder opp)
print(math.floor(3.8))  # 3 (runder ned)
\`\`\`

### Forskjellige måter å importere på

\`\`\`python
# Importere hele modulen
import random
print(random.randint(1, 10))

# Importere spesifikke funksjoner
from random import randint, choice
print(randint(1, 10))          # Trenger ikke skrive random.
print(choice(["eple", "banan", "appelsin"]))

# Importere med alias
import random as rnd
print(rnd.randint(1, 10))
\`\`\`

### Nyttige standardmoduler

| Modul | Beskrivelse | Eksempel |
|-------|-------------|----------|
| \`math\` | Matematiske funksjoner | \`math.sqrt(25)\`, \`math.pi\` |
| \`random\` | Tilfeldige tall | \`random.randint(1, 100)\` |
| \`datetime\` | Dato og tid | \`datetime.datetime.now()\` |
| \`os\` | Operativsystem-funksjoner | \`os.getcwd()\` |
| \`string\` | Tekstmanipulering | \`string.ascii_lowercase\` |

\`\`\`python
# Eksempel med datetime
import datetime

naa = datetime.datetime.now()
print(f"Dato: {naa.day}.{naa.month}.{naa.year}")
print(f"Klokke: {naa.hour}:{naa.minute:02d}")
\`\`\``,
    },
    {
      id: 'it1-2-5-example-2',
      type: 'example',
      title: 'BMI-kalkulator med funksjoner',
      problem: `Lag en BMI-kalkulator (kroppsmasseindeks) som bruker funksjoner for beregning og kategorisering.`,
      solution: `\`\`\`python
def beregn_bmi(vekt_kg, hoyde_m):
    """Beregner BMI basert på vekt i kg og høyde i meter."""
    bmi = vekt_kg / (hoyde_m ** 2)
    return round(bmi, 1)

def bmi_kategori(bmi):
    """Returnerer BMI-kategorien basert på verdien."""
    if bmi < 18.5:
        return "Undervekt"
    elif bmi < 25:
        return "Normalvekt"
    elif bmi < 30:
        return "Overvekt"
    else:
        return "Fedme"

# Hovedprogram
print("=== BMI-kalkulator ===")
vekt = float(input("Vekt (kg): "))
hoyde = float(input("Høyde (m): "))

bmi = beregn_bmi(vekt, hoyde)
kategori = bmi_kategori(bmi)

print(f"\\nDin BMI er {bmi}")
print(f"Kategori: {kategori}")
\`\`\`

**Eksempel på kjøring:**
\`\`\`
=== BMI-kalkulator ===
Vekt (kg): 70
Høyde (m): 1.75

Din BMI er 22.9
Kategori: Normalvekt
\`\`\`

Programmet er delt i to funksjoner med klare ansvarsområder: \`beregn_bmi()\` gjør beregningen og \`bmi_kategori()\` bestemmer kategorien. Teksten i trippel-anførselstegn (\`"""..."""\`) er en docstring som dokumenterer hva funksjonen gjør.`,
    },
    {
      id: 'it1-2-5-tip-1',
      type: 'tip',
      title: 'Funksjoner bør gjøre én ting',
      content: `En god funksjon gjør én ting og gjør den godt. Hvis en funksjon både beregner, validerer og skriver ut resultater, bør du vurdere å dele den opp i flere funksjoner. Dette gjør koden lettere å lese, teste og vedlikeholde. Gi funksjonene beskrivende navn som forteller hva de gjør, for eksempel \`beregn_areal()\`, \`valider_alder()\`, \`vis_meny()\`.`,
    },
    {
      id: 'it1-2-5-warning-1',
      type: 'warning',
      title: 'Definer funksjoner før du kaller dem',
      content: `Python leser koden fra topp til bunn. Hvis du prøver å kalle en funksjon før den er definert, får du en feilmelding:

\`\`\`python
si_hei()  # NameError: name 'si_hei' is not defined

def si_hei():
    print("Hei!")
\`\`\`

Definer alltid funksjonene øverst i filen, og kall dem lenger ned i koden.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er riktig måte å definere en funksjon i Python?',
      options: [
        { id: 'a', text: 'function hils():', isCorrect: false, feedback: 'Python bruker def, ikke function.' },
        { id: 'b', text: 'def hils():', isCorrect: true },
        { id: 'c', text: 'define hils():', isCorrect: false, feedback: 'Nøkkelordet er def, ikke define.' },
        { id: 'd', text: 'func hils():', isCorrect: false, feedback: 'Python bruker def for å definere funksjoner.' },
      ],
      solution: 'I Python defineres funksjoner med nøkkelordet `def`, etterfulgt av funksjonsnavnet, parenteser (med eventuelle parametere) og kolon.',
    },
    {
      id: 'it-1-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom en parameter og et argument?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell, de betyr det samme', isCorrect: false, feedback: 'De har forskjellig betydning.' },
        { id: 'b', text: 'En parameter er variabelen i funksjonsdefinisjonen, et argument er den faktiske verdien som sendes ved kall', isCorrect: true },
        { id: 'c', text: 'Et argument er i funksjonsdefinisjonen, en parameter er verdien', isCorrect: false, feedback: 'Det er omvendt.' },
        { id: 'd', text: 'Parametere brukes i for-løkker, argumenter i funksjoner', isCorrect: false, feedback: 'Begge hører til funksjoner.' },
      ],
      solution: 'En parameter er variabelen i funksjonsdefinisjonen (f.eks. `def hils(navn):`). Et argument er den faktiske verdien du sender når du kaller funksjonen (f.eks. `hils("Sara")`).',
    },
    {
      id: 'it-1-2-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skriver dette programmet ut?\n\n```python\ndef doble(tall):\n    return tall * 2\n\nresultat = doble(7)\nprint(resultat)\n```',
      options: [
        { id: 'a', text: '7', isCorrect: false, feedback: 'Funksjonen dobler verdien.' },
        { id: 'b', text: '14', isCorrect: true },
        { id: 'c', text: 'tall * 2', isCorrect: false, feedback: 'Python beregner uttrykket og returnerer resultatet.' },
        { id: 'd', text: 'None', isCorrect: false, feedback: 'Funksjonen har en return-setning som sender tilbake en verdi.' },
      ],
      solution: 'Funksjonen `doble(7)` beregner 7 * 2 = 14 og returnerer dette. Returverdien lagres i `resultat`, som deretter skrives ut.',
    },
    {
      id: 'it-1-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en lokal variabel?',
      options: [
        { id: 'a', text: 'En variabel som er tilgjengelig overalt i programmet', isCorrect: false, feedback: 'Det er en global variabel.' },
        { id: 'b', text: 'En variabel som er opprettet inne i en funksjon og bare er tilgjengelig der', isCorrect: true },
        { id: 'c', text: 'En variabel som lagres på harddisken', isCorrect: false, feedback: 'Alle variabler lagres i minnet, ikke på harddisken.' },
        { id: 'd', text: 'En variabel som aldri endrer verdi', isCorrect: false, feedback: 'Det har med konstanter å gjøre, ikke scope.' },
      ],
      solution: 'En lokal variabel opprettes inne i en funksjon og eksisterer bare mens funksjonen kjører. Når funksjonen er ferdig, forsvinner variabelen. Den er ikke tilgjengelig utenfor funksjonen.',
    },
    {
      id: 'it-1-2-5-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Skriv en funksjon \`beregn_areal_sirkel(radius)\` som beregner og returnerer arealet av en sirkel. Bruk \`math.pi\`. Test funksjonen med radius 5 og 10.`,
      solution: `\`\`\`python\nimport math\n\ndef beregn_areal_sirkel(radius):\n    areal = math.pi * radius ** 2\n    return round(areal, 2)\n\n# Test funksjonen\nprint(f"Areal med radius 5: {beregn_areal_sirkel(5)}")\nprint(f"Areal med radius 10: {beregn_areal_sirkel(10)}")\n\`\`\`\n\nKjøring gir:\n\`\`\`\nAreal med radius 5: 78.54\nAreal med radius 10: 314.16\n\`\`\``,
    },
    {
      id: 'it-1-2-5-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Skriv en funksjon \`er_skuddaar(aar)\` som returnerer \`True\` hvis året er et skuddår og \`False\` ellers. Regler: Et år er skuddår hvis det er delelig med 4, MEN IKKE delelig med 100, MED UNNTAK av år delelig med 400 (som er skuddår). Test med årene 2000, 1900, 2024 og 2023.`,
      solution: `\`\`\`python\ndef er_skuddaar(aar):\n    if aar % 400 == 0:\n        return True\n    elif aar % 100 == 0:\n        return False\n    elif aar % 4 == 0:\n        return True\n    else:\n        return False\n\n# Test\ntest_aar = [2000, 1900, 2024, 2023]\nfor aar in test_aar:\n    resultat = "er" if er_skuddaar(aar) else "er ikke"\n    print(f"{aar} {resultat} et skuddår")\n\`\`\`\n\nKjøring gir:\n\`\`\`\n2000 er et skuddår\n1900 er ikke et skuddår\n2024 er et skuddår\n2023 er ikke et skuddår\n\`\`\`\n\n2000 er delelig med 400 (skuddår). 1900 er delelig med 100 men ikke 400 (ikke skuddår). 2024 er delelig med 4 (skuddår). 2023 er ikke delelig med 4 (ikke skuddår).`,
    },
    {
      id: 'it-1-2-5-ex-7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Lag et program med en meny-drevet kalkulator som bruker funksjoner. Programmet skal:\n1. Vise en meny med valgene: addere, subtrahere, multiplisere, dividere, avslutte\n2. La brukeren velge en operasjon\n3. Spørre om to tall\n4. Vise resultatet med en egen funksjon\n5. Gjenta til brukeren velger å avslutte\n\nBruk minst 5 funksjoner (én per regneart + meny-funksjon).`,
      solution: `\`\`\`python\ndef vis_meny():\n    print("\\n=== Kalkulator ===")\n    print("1. Addere")\n    print("2. Subtrahere")\n    print("3. Multiplisere")\n    print("4. Dividere")\n    print("5. Avslutte")\n    return input("Velg (1-5): ")\n\ndef adder(a, b):\n    return a + b\n\ndef subtraher(a, b):\n    return a - b\n\ndef multipliser(a, b):\n    return a * b\n\ndef divider(a, b):\n    if b == 0:\n        return "Feil: Divisjon med null!"\n    return a / b\n\ndef hent_tall():\n    a = float(input("Første tall: "))\n    b = float(input("Andre tall: "))\n    return a, b\n\n# Hovedløkke\nwhile True:\n    valg = vis_meny()\n\n    if valg == "5":\n        print("Ha det bra!")\n        break\n\n    if valg not in ["1", "2", "3", "4"]:\n        print("Ugyldig valg!")\n        continue\n\n    a, b = hent_tall()\n\n    if valg == "1":\n        print(f"Resultat: {adder(a, b)}")\n    elif valg == "2":\n        print(f"Resultat: {subtraher(a, b)}")\n    elif valg == "3":\n        print(f"Resultat: {multipliser(a, b)}")\n    elif valg == "4":\n        print(f"Resultat: {divider(a, b)}")\n\`\`\`\n\nProgrammet bruker separate funksjoner for meny, regneart og input. Hovedløkken med while True og break styrer programflyten.`,
    },
    {
      id: 'it-1-2-5-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skriver dette programmet ut?\n\n```python\ndef mystisk(a, b=10):\n    return a + b\n\nprint(mystisk(5))\nprint(mystisk(5, 20))\nprint(mystisk(b=3, a=7))\n```',
      options: [
        { id: 'a', text: '15, 25, 10', isCorrect: true },
        { id: 'b', text: '15, 25, 3', isCorrect: false, feedback: 'I det tredje kallet er a=7 og b=3, så 7+3=10.' },
        { id: 'c', text: 'Feilmelding', isCorrect: false, feedback: 'All koden er gyldig, inkludert navngitte argumenter.' },
        { id: 'd', text: '15, 15, 10', isCorrect: false, feedback: 'I det andre kallet overstyres standardverdien b=10 med b=20.' },
      ],
      solution: 'Første kall: a=5, b=10 (standard), 5+10=15. Andre kall: a=5, b=20 (overstyrt), 5+20=25. Tredje kall: navngitte argumenter b=3, a=7, 7+3=10.',
    },
  ],
};

// ============================================================================
// Kapittel 2.6: Feilsøking og debugging
// ============================================================================

export const CHAPTER_IT_1_2_6: TextbookChapter = {
  id: 'it-1-2-6',
  courseId: 'it-1',
  chapterNumber: '2.6',
  title: 'Feilsøking og debugging',
  description: 'Lær om de tre typene programmeringsfeil (syntaksfeil, logiske feil og runtime-feil), teknikker for print-debugging, og hvordan du håndterer feil med try/except.',
  estimatedMinutes: 50,
  prevChapter: 'it-1-2-5',
  nextChapter: 'it-1-3-1',
  competenceGoals: [
    'identifisere og skille mellom syntaksfeil, logiske feil og kjøretidsfeil',
    'bruke print-debugging til å finne feil i kode',
    'bruke try/except til å håndtere feil på en kontrollert måte',
    'lese og forstå feilmeldinger i Python',
  ],
  keyTerms: [
    { term: 'Feilsøking (debugging)', definition: 'Prosessen med å finne, forstå og rette feil i et program. Begrepet kommer fra en tidlig historie der en faktisk insektbille (bug) forårsaket feil i en datamaskin.' },
    { term: 'Syntaksfeil', definition: 'Feil i kodens grammatikk som gjør at Python ikke kan forstå koden. Eksempler: manglende kolon, feil innrykk, ubalanserte parenteser. Python oppdager syntaksfeil før programmet kjøres.' },
    { term: 'Logisk feil', definition: 'Feil der koden kjører uten feilmelding, men gir feil resultat. Logiske feil skyldes feil i programmererens tenkning eller algoritme, ikke i syntaksen.' },
    { term: 'Kjøretidsfeil (runtime error)', definition: 'Feil som oppstår mens programmet kjører. Eksempler: divisjon med null, forsøk på å konvertere tekst til tall, tilgang til noe som ikke finnes.' },
    { term: 'Exception', definition: 'Et Python-objekt som representerer en feil som oppsto under kjøring. Vanlige exceptions er ValueError, TypeError, ZeroDivisionError og IndexError.' },
    { term: 'try/except', definition: 'En kontrollstruktur som lar deg fange opp og håndtere feil (exceptions) uten at programmet krasjer. Koden som kan feile plasseres i try-blokken, og feilhåndteringen i except-blokken.' },
    { term: 'Traceback', definition: 'Feilmeldingen Python viser når et unntak oppstår. Den viser hvilken fil, linje og type feil som oppsto, og hjelper deg med å finne hvor feilen ligger.' },
    { term: 'Print-debugging', definition: 'En enkel feilsøkingsteknikk der du legger inn print()-setninger i koden for å vise verdien av variabler og sjekke om koden kjører som forventet.' },
  ],
  content: [
    {
      id: 'it1-2-6-intro',
      type: 'text',
      content: `# Feilsøking og debugging

Feil i kode er uunngåelig. Selv de mest erfarne programmererne skriver kode med feil. Forskjellen er at erfarne programmerere vet hvordan de skal finne og rette feilene effektivt. Feilsøking (debugging) er en viktig ferdighet som du vil bruke like mye som selve programmeringen.

Det finnes tre hovedtyper feil i programmering: syntaksfeil (skrivefeil i koden), logiske feil (koden kjører, men gir feil resultat) og kjøretidsfeil (koden krasjer under kjøring). I dette kapittelet lærer du å gjenkjenne, forstå og rette alle tre typene. Du lærer også å bruke print-debugging og try/except for å gjøre programmene dine mer robuste.

Husk: Å finne en feil er ikke et tegn på at du er en dårlig programmerer. Det er en naturlig del av prosessen. Jo flere feil du finner og retter, jo bedre blir du.`,
    },
    {
      id: 'it1-2-6-def-1',
      type: 'definition',
      title: 'Debugging',
      content: `Debugging (feilsøking) er prosessen med å finne, analysere og rette feil i et dataprogram. Begrepet stammer fra 1947 da Grace Hopper fant en faktisk møll (bug) fanget i en relémaskin som forårsaket feil. I dag brukes «bug» om alle typer programmeringsfeil, og «debugging» om prosessen med å fjerne dem. Debugging krever systematisk tenkning, tålmodighet og evnen til å lese feilmeldinger nøye.`,
    },
    {
      id: 'it1-2-6-text-1',
      type: 'text',
      title: 'Syntaksfeil (SyntaxError)',
      content: `## Syntaksfeil

Syntaksfeil er «skrivefeil» i koden. Python oppdager dem før programmet starter og viser en feilmelding med en pil som peker på hvor feilen er:

\`\`\`python
# Feil 1: Manglende kolon
if alder >= 18
    print("Myndig")
# SyntaxError: expected ':'

# Feil 2: Manglende parentes
print("Hei"
# SyntaxError: unexpected EOF while parsing

# Feil 3: Feil innrykk
if True:
print("Hei")
# IndentationError: expected an indented block

# Feil 4: Manglende anførselstegn
print(Hei)
# NameError: name 'Hei' is not defined
\`\`\`

**Hvordan fikse syntaksfeil:**
1. Les feilmeldingen nøye - den forteller deg hva som er galt og på hvilken linje
2. Se på linjen feilmeldingen peker på, og linjen over (feilen kan være der)
3. Sjekk etter vanlige problemer: manglende kolon, parenteser, anførselstegn og innrykk
4. Bruk en IDE med syntaksfarging som markerer feil automatisk

Syntaksfeil er de enkleste feilene å fikse fordi Python forteller deg nøyaktig hva som er galt og hvor.`,
    },
    {
      id: 'it1-2-6-text-2',
      type: 'text',
      title: 'Kjøretidsfeil (RuntimeError)',
      content: `## Kjøretidsfeil

Kjøretidsfeil oppstår når koden er syntaktisk korrekt, men noe går galt mens programmet kjører. Python viser en traceback (sporingsmelding) som forteller deg hva som gikk galt:

\`\`\`python
# ZeroDivisionError - divisjon med null
tall = 10 / 0
# ZeroDivisionError: division by zero

# ValueError - ugyldig konvertering
tall = int("hei")
# ValueError: invalid literal for int() with base 10: 'hei'

# TypeError - feil type i operasjon
resultat = "5" + 3
# TypeError: can only concatenate str (not "int") to str

# IndexError - ugyldig indeks
liste = [1, 2, 3]
print(liste[5])
# IndexError: list index out of range

# NameError - variabel finnes ikke
print(udefinert_variabel)
# NameError: name 'udefinert_variabel' is not defined
\`\`\`

### Lese en traceback

\`\`\`
Traceback (most recent call last):
  File "program.py", line 3, in <module>
    resultat = 10 / 0
ZeroDivisionError: division by zero
\`\`\`

**Slik leser du traceback:**
1. **Siste linje** forteller deg hva feilen er: \`ZeroDivisionError: division by zero\`
2. **Linjen over** viser koden som forårsaket feilen: \`resultat = 10 / 0\`
3. **Filnavn og linjenummer** forteller hvor: \`File "program.py", line 3\`

Les tracebacken fra bunnen og opp for å forstå feilen raskest.`,
    },
    {
      id: 'it1-2-6-text-3',
      type: 'text',
      title: 'Logiske feil',
      content: `## Logiske feil

Logiske feil er de vanskeligste å finne fordi Python ikke gir noen feilmelding. Koden kjører perfekt, men resultatet er feil. Feilen ligger i programmererens logikk:

\`\`\`python
# Eksempel 1: Feil formel for gjennomsnittet
tall1 = 10
tall2 = 20
tall3 = 30

# FEIL: Glemte parenteser
gjennomsnitt = tall1 + tall2 + tall3 / 3  # Gir 40.0 (bare tall3 deles)

# RIKTIG:
gjennomsnitt = (tall1 + tall2 + tall3) / 3  # Gir 20.0
\`\`\`

\`\`\`python
# Eksempel 2: Feil sammenligning i if-setning
alder = 17

# FEIL: Bruker = (tilordning) i stedet for == (sammenligning)
# if alder = 18:  # SyntaxError, men illustrerer poenget

# FEIL: Feil logikk
if alder > 18:      # Feil: 18-åringer er myndige, men > utelukker dem
    print("Myndig")

# RIKTIG:
if alder >= 18:     # Riktig: >= inkluderer 18
    print("Myndig")
\`\`\`

\`\`\`python
# Eksempel 3: Off-by-one error (en-av-feil)
# Skrive ut tallene 1 til 10

# FEIL:
for i in range(10):     # Gir 0-9, ikke 1-10
    print(i)

# RIKTIG:
for i in range(1, 11):  # Gir 1-10
    print(i)
\`\`\`

**Hvordan finne logiske feil:**
- Test programmet med verdier der du vet hva svaret skal være
- Bruk print-debugging for å sjekke verdier underveis
- Gå gjennom koden steg for steg og tenk gjennom hva som skjer
- Spør deg selv: «Er grenseverdiene riktige? Bruker jeg riktig operator?»`,
    },
    {
      id: 'it1-2-6-def-2',
      type: 'definition',
      title: 'try/except',
      content: `\`try/except\` er en kontrollstruktur som lar deg fange opp feil (exceptions) og håndtere dem uten at programmet krasjer. Koden som kan forårsake en feil plasseres i \`try\`-blokken. Hvis en feil oppstår, hopper Python til \`except\`-blokken der du kan håndtere feilen. Hvis ingen feil oppstår, hoppes \`except\`-blokken over. Du kan fange spesifikke feiltyper eller alle feil, og du kan ha flere except-blokker for forskjellige feiltyper.`,
    },
    {
      id: 'it1-2-6-text-4',
      type: 'text',
      title: 'Print-debugging',
      content: `## Print-debugging

Den enkleste og mest effektive feilsøkingsteknikken for nybegynnere er å legge inn \`print()\`-setninger for å se hva som skjer inne i programmet:

\`\`\`python
def beregn_rabatt(pris, rabatt_prosent):
    print(f"DEBUG: pris = {pris}, rabatt_prosent = {rabatt_prosent}")

    rabatt = pris * rabatt_prosent
    print(f"DEBUG: rabatt = {rabatt}")

    ny_pris = pris - rabatt
    print(f"DEBUG: ny_pris = {ny_pris}")

    return ny_pris

resultat = beregn_rabatt(100, 20)
print(f"Pris med rabatt: {resultat}")
\`\`\`

**Kjøring gir:**
\`\`\`
DEBUG: pris = 100, rabatt_prosent = 20
DEBUG: rabatt = 2000
DEBUG: ny_pris = -1900
Pris med rabatt: -1900
\`\`\`

Vi ser at rabatt er 2000, noe som er galt. Problemet er at \`rabatt_prosent\` er 20 (hele tallet), men formelen trenger desimaltall (0.20). Vi må dele på 100:

\`\`\`python
rabatt = pris * rabatt_prosent / 100  # Fikset!
\`\`\`

**Tips for print-debugging:**
- Merk print-setningene med «DEBUG:» slik at du lett kan finne og fjerne dem etterpå
- Skriv ut variabelverdier på viktige punkter i koden
- Skriv ut «Kom hit!» for å sjekke om koden når bestemte steder
- Fjern eller kommenter ut debug-prints når feilen er fikset`,
    },
    {
      id: 'it1-2-6-text-5',
      type: 'text',
      title: 'try/except i praksis',
      content: `## Feilhåndtering med try/except

\`try/except\` lar deg kontrollere hva som skjer når en feil oppstår, i stedet for at programmet krasjer:

\`\`\`python
# Uten try/except (krasjer ved ugyldig input)
# tall = int(input("Skriv et tall: "))  # Krasjer hvis brukeren skriver "hei"

# Med try/except (håndterer feilen)
try:
    tall = int(input("Skriv et tall: "))
    print(f"Du skrev {tall}")
except ValueError:
    print("Det var ikke et gyldig tall!")
\`\`\`

### Fange flere typer feil

\`\`\`python
try:
    tall1 = int(input("Tall 1: "))
    tall2 = int(input("Tall 2: "))
    resultat = tall1 / tall2
    print(f"Resultat: {resultat}")
except ValueError:
    print("Ugyldig input! Skriv inn hele tall.")
except ZeroDivisionError:
    print("Kan ikke dele på null!")
\`\`\`

### try/except med else og finally

\`\`\`python
try:
    tall = int(input("Skriv et tall: "))
except ValueError:
    print("Ugyldig tall!")
else:
    # Kjører bare hvis ingen feil oppsto
    print(f"Tallet ditt er {tall}")
finally:
    # Kjører ALLTID, uansett om det var feil eller ikke
    print("Programmet er ferdig.")
\`\`\`

### Løkke med feilhåndtering

Et vanlig mønster er å bruke try/except i en løkke for å spørre brukeren på nytt ved feil:

\`\`\`python
while True:
    try:
        alder = int(input("Hvor gammel er du? "))
        break  # Gyldig input, bryt ut av løkken
    except ValueError:
        print("Ugyldig! Skriv inn et helt tall.")

print(f"Du er {alder} år gammel.")
\`\`\`

Dette er mye bedre enn å la programmet krasje. Brukeren får prøve igjen helt til de skriver inn gyldig input.`,
    },
    {
      id: 'it1-2-6-example-1',
      type: 'example',
      title: 'Robust kalkulator med feilhåndtering',
      problem: `Lag en kalkulator som håndterer alle typer feil: ugyldig input, divisjon med null, og ugyldig operator.`,
      solution: `\`\`\`python
def hent_tall(beskjed):
    """Ber brukeren om et tall, gjentar til gyldig input."""
    while True:
        try:
            return float(input(beskjed))
        except ValueError:
            print("Ugyldig! Skriv inn et tall.")

def beregn(tall1, operator, tall2):
    """Utfører beregningen og returnerer resultatet."""
    if operator == "+":
        return tall1 + tall2
    elif operator == "-":
        return tall1 - tall2
    elif operator == "*":
        return tall1 * tall2
    elif operator == "/":
        if tall2 == 0:
            return "Feil: Kan ikke dele på null!"
        return tall1 / tall2
    else:
        return f"Feil: Ukjent operator '{operator}'"

# Hovedprogram
print("=== Robust kalkulator ===")
print("Operatorer: +, -, *, /")

tall1 = hent_tall("Første tall: ")
operator = input("Operator (+, -, *, /): ")
tall2 = hent_tall("Andre tall: ")

resultat = beregn(tall1, operator, tall2)
print(f"Resultat: {tall1} {operator} {tall2} = {resultat}")
\`\`\`

**Eksempel på kjøring med feil input:**
\`\`\`
=== Robust kalkulator ===
Operatorer: +, -, *, /
Første tall: abc
Ugyldig! Skriv inn et tall.
Første tall: 10
Operator (+, -, *, /): /
Andre tall: 0
Resultat: 10.0 / 0 = Feil: Kan ikke dele på null!
\`\`\`

\`hent_tall()\` bruker while True med try/except for å sikre gyldig input. \`beregn()\` sjekker for divisjon med null og ugyldig operator. Programmet krasjer aldri.`,
    },
    {
      id: 'it1-2-6-example-2',
      type: 'example',
      title: 'Finne og rette en logisk feil',
      problem: `Følgende program skal finne det største tallet i en liste, men det fungerer ikke riktig. Finn og rett feilen.

\`\`\`python
def finn_storst(tall_liste):
    storst = 0
    for tall in tall_liste:
        if tall > storst:
            storst = tall
    return storst

print(finn_storst([-5, -2, -8, -1]))
\`\`\``,
      solution: `**Feilen:** \`storst\` starter på 0. Hvis alle tallene i listen er negative, vil ingen av dem være større enn 0, og funksjonen returnerer 0 i stedet for det faktiske største tallet (-1).

**Print-debugging for å bekrefte:**
\`\`\`python
def finn_storst(tall_liste):
    storst = 0
    print(f"DEBUG: Starter med storst = {storst}")
    for tall in tall_liste:
        print(f"DEBUG: Sjekker {tall} > {storst}? {tall > storst}")
        if tall > storst:
            storst = tall
    return storst
\`\`\`

Ingen av de negative tallene er større enn 0, så \`storst\` forblir 0.

**Fikset versjon:**
\`\`\`python
def finn_storst(tall_liste):
    storst = tall_liste[0]  # Start med det første tallet i listen
    for tall in tall_liste:
        if tall > storst:
            storst = tall
    return storst

print(finn_storst([-5, -2, -8, -1]))  # Gir -1 (riktig!)
\`\`\`

Ved å starte med det første elementet i listen fungerer funksjonen korrekt for alle tall, inkludert negative.`,
    },
    {
      id: 'it1-2-6-tip-1',
      type: 'tip',
      title: 'Systematisk feilsøking',
      content: `Når du finner en feil, følg disse stegene:
1. **Les feilmeldingen** nøye (for syntaks- og kjøretidsfeil)
2. **Reproduser feilen** - forstå nøyaktig når den oppstår
3. **Isoler problemet** - finn den minste kodeblokken som forårsaker feilen
4. **Bruk print-debugging** for å se verdier og programflyt
5. **Formuler en hypotese** om hva som er galt
6. **Test hypotesen** ved å gjøre en endring
7. **Verifiser** at fiksen løser problemet uten å lage nye feil`,
    },
    {
      id: 'it1-2-6-warning-1',
      type: 'warning',
      title: 'Ikke fang alle feil blindt',
      content: `Unngå å bruke bare \`except:\` uten å spesifisere feiltypen. Det kan skjule uventede feil og gjøre debugging mye vanskeligere:

\`\`\`python
# DÅRLIG - fanger alle feil, inkludert feil du ikke forventer
try:
    resultat = beregn_noe()
except:
    print("Noe gikk galt")

# BRA - fanger bare de feilene du forventer
try:
    resultat = beregn_noe()
except ValueError:
    print("Ugyldig verdi")
except ZeroDivisionError:
    print("Kan ikke dele på null")
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type feil er det når Python viser "SyntaxError: expected \':\'\"?',
      options: [
        { id: 'a', text: 'Logisk feil', isCorrect: false, feedback: 'Logiske feil gir ingen feilmelding fra Python.' },
        { id: 'b', text: 'Syntaksfeil', isCorrect: true },
        { id: 'c', text: 'Kjøretidsfeil', isCorrect: false, feedback: 'SyntaxError oppdages før programmet kjøres.' },
        { id: 'd', text: 'Importfeil', isCorrect: false, feedback: 'Importfeil er en annen type feil.' },
      ],
      solution: 'SyntaxError er en syntaksfeil som betyr at koden bryter Pythons grammatikkregler. "expected \':\'" betyr at Python forventet et kolon, typisk etter if, for, while eller def.',
    },
    {
      id: 'it-1-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer hvis koden inne i en try-blokk IKKE forårsaker noen feil?',
      options: [
        { id: 'a', text: 'except-blokken kjøres også', isCorrect: false, feedback: 'except kjøres bare når det oppstår en feil.' },
        { id: 'b', text: 'Programmet krasjer', isCorrect: false, feedback: 'try/except forhindrer krasj, det forårsaker dem ikke.' },
        { id: 'c', text: 'except-blokken hoppes over, og programmet fortsetter normalt', isCorrect: true },
        { id: 'd', text: 'Python gir en advarsel', isCorrect: false, feedback: 'Ingen advarsel gis når koden fungerer normalt.' },
      ],
      solution: 'Hvis ingen feil oppstår i try-blokken, hoppes except-blokken helt over. Programmet fortsetter med koden etter try/except-strukturen.',
    },
    {
      id: 'it-1-2-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket type feil har dette programmet? Det kjører uten feilmelding, men gir feil resultat.\n\n```python\ndef beregn_areal_trekant(grunnlinje, hoyde):\n    return grunnlinje * hoyde\n\nprint(beregn_areal_trekant(10, 5))  # Skriver ut 50\n```',
      options: [
        { id: 'a', text: 'Syntaksfeil', isCorrect: false, feedback: 'Koden kjører uten syntaksfeil.' },
        { id: 'b', text: 'Kjøretidsfeil', isCorrect: false, feedback: 'Koden kjører uten feilmeldinger.' },
        { id: 'c', text: 'Logisk feil', isCorrect: true },
        { id: 'd', text: 'Det er ingen feil i koden', isCorrect: false, feedback: 'Arealet av en trekant er grunnlinje * høyde / 2, ikke grunnlinje * høyde.' },
      ],
      solution: 'Dette er en logisk feil. Formelen for arealet av en trekant er grunnlinje * høyde / 2. Koden mangler divisjon med 2, så resultatet (50) er dobbelt av riktig svar (25).',
    },
    {
      id: 'it-1-2-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skriver dette programmet ut?\n\n```python\ntry:\n    x = int("abc")\n    print("Suksess!")\nexcept ValueError:\n    print("Feil!")\nprint("Ferdig")\n```',
      options: [
        { id: 'a', text: 'Suksess! og Ferdig', isCorrect: false, feedback: 'int("abc") forårsaker en ValueError.' },
        { id: 'b', text: 'Feil! og Ferdig', isCorrect: true },
        { id: 'c', text: 'Bare Feil!', isCorrect: false, feedback: '"Ferdig" er utenfor try/except og kjøres alltid.' },
        { id: 'd', text: 'Programmet krasjer', isCorrect: false, feedback: 'try/except fanger opp feilen.' },
      ],
      solution: 'int("abc") forårsaker en ValueError. Python hopper til except-blokken og skriver ut "Feil!". Deretter fortsetter programmet med koden etter try/except og skriver ut "Ferdig".',
    },
    {
      id: 'it-1-2-6-ex-5',
      type: 'classic',
      difficulty: 'lett',
      task: `Følgende kode har tre syntaksfeil. Finn og rett dem:\n\n\`\`\`python\ndef beregn_sum(a, b)\n    resulat = a + b\n    print("Summen er: " + resultat)\n    return resultat\n\nberegn_sum(5, 3\n\`\`\``,
      solution: `Feil 1: Manglende kolon etter funksjonsdefinisjonen.\nFeil 2: print() prøver å legge sammen str og int med +. Må konvertere eller bruke f-streng.\nFeil 3: Manglende sluttparentes ved funksjonskallet.\n\nRettet kode:\n\`\`\`python\ndef beregn_sum(a, b):                    # Lagt til kolon\n    resultat = a + b\n    print(f"Summen er: {resultat}")       # Bruker f-streng\n    return resultat\n\nberegn_sum(5, 3)                          # Lagt til sluttparentes\n\`\`\``,
    },
    {
      id: 'it-1-2-6-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: `Skriv en funksjon \`sikker_input(beskjed)\` som bruker try/except i en while-løkke for å be brukeren om et heltall. Funksjonen skal gjenta spørsmålet til brukeren gir gyldig input, og returnere heltallet. Test den ved å bruke funksjonen til å lage et program som adderer to tall.`,
      solution: `\`\`\`python\ndef sikker_input(beskjed):\n    """Ber om heltall fra brukeren, gjentar til gyldig input."""\n    while True:\n        try:\n            tall = int(input(beskjed))\n            return tall\n        except ValueError:\n            print("Ugyldig! Vennligst skriv inn et helt tall.")\n\n# Test programmet\ntall1 = sikker_input("Første tall: ")\ntall2 = sikker_input("Andre tall: ")\n\nprint(f"{tall1} + {tall2} = {tall1 + tall2}")\n\`\`\`\n\nEksempel på kjøring:\n\`\`\`\nFørste tall: abc\nUgyldig! Vennligst skriv inn et helt tall.\nFørste tall: 3.14\nUgyldig! Vennligst skriv inn et helt tall.\nFørste tall: 10\nAndre tall: 5\n10 + 5 = 15\n\`\`\``,
    },
    {
      id: 'it-1-2-6-ex-7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Lag et robust tallgjettespill med full feilhåndtering:\n- Datamaskinen velger et tilfeldig tall mellom 1 og 100\n- Brukeren gjetter gjentatte ganger\n- Vis "For høyt!" eller "For lavt!" som hint\n- Tell antall forsøk\n- Håndter ugyldig input (ikke tall, tall utenfor 1-100)\n- Vis antall forsøk ved riktig gjetting\n\nBruk funksjoner for å organisere koden.`,
      solution: `\`\`\`python\nimport random\n\ndef hent_gjetting():\n    """Ber om en gyldig gjetting mellom 1 og 100."""\n    while True:\n        try:\n            gjetting = int(input("Din gjetting (1-100): "))\n            if gjetting < 1 or gjetting > 100:\n                print("Tallet må være mellom 1 og 100!")\n                continue\n            return gjetting\n        except ValueError:\n            print("Ugyldig! Skriv inn et helt tall.")\n\ndef gi_hint(gjetting, fasit):\n    """Gir hint basert på gjettingen."""\n    if gjetting < fasit:\n        print("For lavt! Prøv et høyere tall.")\n        return False\n    elif gjetting > fasit:\n        print("For høyt! Prøv et lavere tall.")\n        return False\n    else:\n        return True\n\ndef spill():\n    """Hovedspilllogikken."""\n    fasit = random.randint(1, 100)\n    forsok = 0\n\n    print("=== Gjettespill ===")\n    print("Jeg tenker på et tall mellom 1 og 100.")\n\n    while True:\n        gjetting = hent_gjetting()\n        forsok += 1\n\n        if gi_hint(gjetting, fasit):\n            print(f"Riktig! Du gjettet det på {forsok} forsøk!")\n            if forsok <= 5:\n                print("Imponerende!")\n            elif forsok <= 10:\n                print("Bra jobbet!")\n            else:\n                print("Du klarte det til slutt!")\n            break\n\nspill()\n\`\`\`\n\nProgrammet bruker tre funksjoner med tydelige ansvarsområder. hent_gjetting() sikrer gyldig input med try/except og validering. gi_hint() gir feedback. spill() styrer spillets gang.`,
    },
    {
      id: 'it-1-2-6-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er resultatet av å kjøre denne koden?\n\n```python\ndef test():\n    try:\n        print("A")\n        x = 1 / 0\n        print("B")\n    except ZeroDivisionError:\n        print("C")\n    finally:\n        print("D")\n    print("E")\n\ntest()\n```',
      options: [
        { id: 'a', text: 'A, B, C, D, E', isCorrect: false, feedback: 'B skrives aldri ut fordi feilen oppstår på linjen over.' },
        { id: 'b', text: 'A, C, D, E', isCorrect: true },
        { id: 'c', text: 'A, C, D', isCorrect: false, feedback: 'E er utenfor try/except/finally og kjøres normalt.' },
        { id: 'd', text: 'A, D', isCorrect: false, feedback: 'except-blokken (C) kjøres også fordi feilen fanges.' },
      ],
      solution: 'A skrives ut. Deretter krasjer 1/0 med ZeroDivisionError, så B hoppes over. C skrives ut (except fanger feilen). D skrives ut (finally kjøres alltid). E skrives ut (koden etter try/except/finally).',
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const IT_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_2_1,
  CHAPTER_IT_1_2_2,
  CHAPTER_IT_1_2_3,
  CHAPTER_IT_1_2_4,
  CHAPTER_IT_1_2_5,
  CHAPTER_IT_1_2_6,
];

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi og medieproduksjon VG1
 *
 * Seksjon 2: Programmering og algoritmer (Kapittel 2.1–2.8)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Introduksjon til programmering
// ============================================================================

export const CHAPTER_IM_VG1_2_1: TextbookChapter = {
  id: 'im-vg1-2-1',
  courseId: 'im-vg1',
  chapterNumber: '2.1',
  title: 'Introduksjon til programmering',
  description: 'Bli kjent med hva programmering er, hvorfor det er viktig, og få en oversikt over programmeringsspråk og utviklingsmiljøer.',
  estimatedMinutes: 50,
  prevChapter: 'im-vg1-1-7',
  nextChapter: 'im-vg1-2-2',
  competenceGoals: [
    'forklare hva programmering er og hvorfor det er viktig',
    'beskrive ulike programmeringsspråk og deres bruksområder',
    'sette opp et utviklingsmiljø og skrive enkle Python-programmer',
  ],
  keyTerms: [
    { term: 'Programmering', definition: 'Prosessen med å skrive instruksjoner (kode) som en datamaskin kan forstå og utføre for å løse oppgaver.' },
    { term: 'Programmeringsspråk', definition: 'Et formelt språk med regler for syntaks og semantikk som brukes til å skrive dataprogrammer, for eksempel Python og JavaScript.' },
    { term: 'IDE', definition: 'Integrated Development Environment – et program som samler verktøy for å skrive, kjøre og feilsøke kode.' },
    { term: 'Kompilering', definition: 'Oversettelse av hele kildekoden til maskinkode på én gang før programmet kjøres.' },
    { term: 'Tolkning', definition: 'Oversettelse og kjøring av kildekode linje for linje ved hjelp av et tolkprogram (interpreter).' },
  ],
  content: [
    {
      id: 'im-2-1-intro',
      type: 'text',
      content: `# Introduksjon til programmering

Programmering handler om å gi datamaskinen presise instruksjoner for å løse oppgaver. Tenk deg at du skal forklare veien til skolen for noen som aldri har vært der – du må beskrive hvert eneste steg. Programmering fungerer på akkurat samme måte: du skriver steg-for-steg-instruksjoner i et programmeringsspråk.

I dette kapittelet lærer du hva programmering er, hvilke språk som finnes, forskjellen mellom kompilering og tolkning, og hvordan du setter opp et utviklingsmiljø for Python.`,
    },
    {
      id: 'im-2-1-text-1',
      type: 'text',
      title: 'Programmeringsspråk og kompilering',
      content: `## Programmeringsspråk

Det finnes hundrevis av programmeringsspråk. **Python** er allsidig og nybegynnervennlig – vi bruker det i dette kurset. **JavaScript** lager interaktive nettsider. **C++** brukes der ytelse er kritisk. **Java** er populært i bedriftssystemer.

## Kompilering vs. tolkning

Datamaskiner forstår bare maskinkode. Kildekoden må oversettes:

- **Kompilerte språk** (C++, Go): Hele programmet oversettes på én gang. Rask kjøring, men må kompilere på nytt etter endringer.
- **Tolkede språk** (Python, JavaScript): Koden kjøres linje for linje. Enklere utvikling, men litt tregere kjøring.

Python er tolket – du kan skrive en linje og se resultatet umiddelbart.`,
    },
    {
      id: 'im-2-1-text-2',
      type: 'text',
      title: 'Utviklingsmiljø og første program',
      content: `## Sette opp et utviklingsmiljø (IDE)

En IDE gir kodeeditor med syntaksfarging, autofullføring og kjøremiljø. Anbefalte verktøy: **VS Code** (gratis fra Microsoft), **Thonny** (enkel for nybegynnere), eller **Replit** (nettbasert).

## Ditt første Python-program

\`\`\`python
print("Hei, verden!")
print("Jeg heter Python.")
\`\`\`

\`print()\` er en innebygd funksjon som skriver ut tekst. Teksten må stå i anførselstegn. Kommentarer skrives med \`#\` og ignoreres av Python:

\`\`\`python
# Beregn summen av to tall
a = 10
b = 25
print("Summen er:", a + b)  # Skriver ut: Summen er: 35
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er programmering?',
      options: [
        { id: 'a', text: 'Å installere programmer på datamaskinen', isCorrect: false, feedback: 'Det er installasjon, ikke programmering.' },
        { id: 'b', text: 'Å skrive instruksjoner som en datamaskin kan forstå og utføre', isCorrect: true },
        { id: 'c', text: 'Å reparere maskinvare', isCorrect: false, feedback: 'Det er maskinvarereparasjon.' },
        { id: 'd', text: 'Å bruke sosiale medier', isCorrect: false, feedback: 'Det er internettbruk.' },
      ],
      solution: 'Programmering er prosessen med å skrive kode i et programmeringsspråk som datamaskinen kan kjøre for å løse oppgaver.',
    },
    {
      id: 'im-vg1-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom kompilerte og tolkede språk?',
      options: [
        { id: 'a', text: 'Kompilerte språk er alltid nyere', isCorrect: false, feedback: 'Alderen har ingenting med det å gjøre.' },
        { id: 'b', text: 'Kompilerte oversetter alt på én gang, tolkede oversetter linje for linje', isCorrect: true },
        { id: 'c', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'Det er en viktig forskjell.' },
        { id: 'd', text: 'Tolkede språk kjører alltid raskere', isCorrect: false, feedback: 'Kompilerte kjører vanligvis raskere.' },
      ],
      solution: 'Ved kompilering oversettes hele kildekoden på én gang. Ved tolkning leses og kjøres koden linje for linje.',
    },
    {
      id: 'im-vg1-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken av disse er en IDE?',
      options: [
        { id: 'a', text: 'Google Chrome', isCorrect: false, feedback: 'Chrome er en nettleser.' },
        { id: 'b', text: 'VS Code', isCorrect: true },
        { id: 'c', text: 'Windows Utforsker', isCorrect: false, feedback: 'Det er et filhåndteringsprogram.' },
        { id: 'd', text: 'Spotify', isCorrect: false, feedback: 'Spotify er en musikktjeneste.' },
      ],
      solution: 'VS Code er et integrert utviklingsmiljø (IDE) med kodeeditor, feilsøking og kjøremiljø.',
    },
    {
      id: 'im-vg1-2-1-ex-4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv et Python-program som skriver ut navnet ditt, alderen din og favorittfaget ditt på tre linjer.',
      solution: `\`\`\`python\nprint("Navn: Ola Nordmann")\nprint("Alder: 16 år")\nprint("Favorittfag: IM")\n\`\`\`\n\nHver print()-setning gir en ny linje.`,
    },
    {
      id: 'im-vg1-2-1-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv et program med kommentarer som beregner arealet av et rektangel med lengde 12 og bredde 5.',
      solution: `\`\`\`python\n# Beregn arealet av et rektangel\nlengde = 12\nbredde = 5\nareal = lengde * bredde\nprint("Arealet er:", areal)  # 60\n\`\`\``,
    },
    {
      id: 'im-vg1-2-1-ex-6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar med egne ord forskjellen mellom kompilering og tolkning. Gi ett eksempel på hvert.',
      solution: 'Ved kompilering oversettes hele kildekoden til maskinkode på én gang (f.eks. C++). Ved tolkning leser en interpreter koden linje for linje og kjører den umiddelbart (f.eks. Python).',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Variabler, datatyper og operatorer
// ============================================================================

export const CHAPTER_IM_VG1_2_2: TextbookChapter = {
  id: 'im-vg1-2-2',
  courseId: 'im-vg1',
  chapterNumber: '2.2',
  title: 'Variabler, datatyper og operatorer',
  description: 'Lær om grunnleggende byggeklosser i programmering: variabler for å lagre data, ulike datatyper og operatorer for beregninger.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-2-1',
  nextChapter: 'im-vg1-2-3',
  competenceGoals: [
    'opprette og bruke variabler i Python',
    'beskrive ulike datatyper og når de brukes',
    'bruke aritmetiske operatorer og strengoperasjoner',
  ],
  keyTerms: [
    { term: 'Variabel', definition: 'Et navngitt lagringssted i minnet som holder på en verdi som kan endres underveis.' },
    { term: 'Datatype', definition: 'Kategorien en verdi tilhører: int (heltall), float (desimaltall), str (tekst), bool (sannhetsverdi).' },
    { term: 'Operator', definition: 'Et symbol som utfører en operasjon, som + (addisjon), * (multiplikasjon), % (modulo).' },
    { term: 'f-streng', definition: 'En formattert tekststreng i Python som lar deg sette inn variabler direkte: f"Hei {navn}".' },
  ],
  content: [
    {
      id: 'im-2-2-intro',
      type: 'text',
      content: `# Variabler, datatyper og operatorer

Variabler, datatyper og operatorer er de mest grunnleggende byggesteinene i programmering. En variabel er som en navngitt boks der du lagrer verdier. Datatypen bestemmer hva slags verdi boksen inneholder.

\`\`\`python
navn = "Kari"          # str (tekst)
alder = 16             # int (heltall)
hoyde = 1.72           # float (desimaltall)
er_elev = True         # bool (sannhetsverdi)
\`\`\`

Variabelnavn må starte med bokstav eller understrek, skiller store/små bokstaver, og kan ikke bruke reserverte ord som \`if\` eller \`for\`.`,
    },
    {
      id: 'im-2-2-text-1',
      type: 'text',
      title: 'Operatorer og strenger',
      content: `## Aritmetiske operatorer

| Operator | Beskrivelse | Eksempel | Resultat |
|----------|-------------|----------|----------|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`7 - 3\` | \`4\` |
| \`*\` | Multiplikasjon | \`7 * 3\` | \`21\` |
| \`/\` | Divisjon | \`7 / 3\` | \`2.333...\` |
| \`//\` | Heltallsdivisjon | \`7 // 3\` | \`2\` |
| \`%\` | Modulo (rest) | \`7 % 3\` | \`1\` |
| \`**\` | Potens | \`2 ** 3\` | \`8\` |

## Strenger og f-strenger

\`\`\`python
fornavn = "Ola"
etternavn = "Nordmann"
print(fornavn + " " + etternavn)  # Ola Nordmann

alder = 16
print(f"Jeg er {alder} år gammel.")

temperatur = float(input("Celsius: "))
fahrenheit = temperatur * 9/5 + 32
print(f"{temperatur}°C = {fahrenheit:.1f}°F")
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er datatypen til verdien `3.14` i Python?',
      options: [
        { id: 'a', text: 'int', isCorrect: false, feedback: 'int er for heltall uten desimaler.' },
        { id: 'b', text: 'float', isCorrect: true },
        { id: 'c', text: 'str', isCorrect: false, feedback: 'str er for tekst.' },
        { id: 'd', text: 'bool', isCorrect: false, feedback: 'bool er for True/False.' },
      ],
      solution: '3.14 er et desimaltall og har datatypen float.',
    },
    {
      id: 'im-vg1-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva blir resultatet av `17 % 5`?',
      options: [
        { id: 'a', text: '3', isCorrect: false, feedback: '17 / 5 = 3.4, men modulo gir resten.' },
        { id: 'b', text: '3.4', isCorrect: false, feedback: 'Det er vanlig divisjon.' },
        { id: 'c', text: '2', isCorrect: true },
        { id: 'd', text: '5', isCorrect: false, feedback: '17 // 5 = 3 med rest 2.' },
      ],
      solution: 'Modulo (%) gir resten. 17 / 5 = 3 rest 2, så 17 % 5 = 2.',
    },
    {
      id: 'im-vg1-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skrives ut?\n\n```python\nx = "3"\ny = "7"\nprint(x + y)\n```',
      options: [
        { id: 'a', text: '10', isCorrect: false, feedback: 'x og y er strenger, ikke tall.' },
        { id: 'b', text: '37', isCorrect: true },
        { id: 'c', text: 'Feilmelding', isCorrect: false, feedback: 'Strenger kan settes sammen med +.' },
        { id: 'd', text: '3 7', isCorrect: false, feedback: '+ setter strenger sammen uten mellomrom.' },
      ],
      solution: 'Siden x og y er strenger, setter + dem sammen: "3" + "7" = "37".',
    },
    {
      id: 'im-vg1-2-2-ex-4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Opprett variabler for lengde og bredde av et rektangel. Beregn og skriv ut areal og omkrets.',
      solution: `\`\`\`python\nlengde = 8\nbredde = 5\nareal = lengde * bredde\nomkrets = 2 * (lengde + bredde)\nprint(f"Areal: {areal}, Omkrets: {omkrets}")\n\`\`\`\n\nGir: Areal: 40, Omkrets: 26`,
    },
    {
      id: 'im-vg1-2-2-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv et program som ber om navn og fødselsår, beregner alderen (bruk 2025), og skriver ut en hilsen med f-streng.',
      solution: `\`\`\`python\nnavn = input("Navn: ")\naar = int(input("Fødselsår: "))\nalder = 2025 - aar\nprint(f"Hei, {navn}! Du er {alder} år.")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-2-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag et program som konverterer Celsius til Fahrenheit (F = C × 9/5 + 32). Be om temperaturen og vis resultatet med én desimal.',
      solution: `\`\`\`python\ncelsius = float(input("Celsius: "))\nfahrenheit = celsius * 9/5 + 32\nprint(f"{celsius}°C = {fahrenheit:.1f}°F")\n\`\`\`\n\n\`:.1f\` formaterer med én desimal. 20°C gir 68.0°F.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Kontrollstrukturer og betingelser
// ============================================================================

export const CHAPTER_IM_VG1_2_3: TextbookChapter = {
  id: 'im-vg1-2-3',
  courseId: 'im-vg1',
  chapterNumber: '2.3',
  title: 'Kontrollstrukturer og betingelser',
  description: 'Forstå hvordan programmer tar beslutninger ved hjelp av if-setninger, logiske uttrykk og sammenligningsoperatorer.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-2-2',
  nextChapter: 'im-vg1-2-4',
  competenceGoals: [
    'bruke if-, elif- og else-setninger til å styre programflyten',
    'anvende logiske og sammenligningsoperatorer',
    'konstruere nøstede betingelser for sammensatte beslutninger',
  ],
  keyTerms: [
    { term: 'If-setning', definition: 'Kontrollstruktur som kjører en kodeblokk bare dersom en betingelse er sann (True).' },
    { term: 'Elif', definition: 'Kort for «else if» – sjekker en ny betingelse dersom den forrige var usann.' },
    { term: 'Logisk operator', definition: 'Operatorer som kombinerer betingelser: and (begge sanne), or (minst én sann), not (snur verdi).' },
    { term: 'Sammenligningsoperator', definition: 'Operatorer som sammenligner: == (lik), != (ulik), <, >, <=, >=.' },
  ],
  content: [
    {
      id: 'im-2-3-intro',
      type: 'text',
      content: `# Kontrollstrukturer og betingelser

De fleste programmer trenger å ta beslutninger. Med if-setninger kan du kjøre ulik kode basert på betingelser.

\`\`\`python
alder = 17
if alder >= 18:
    print("Du er myndig.")
else:
    print("Du er ikke myndig ennå.")
\`\`\`

Legg merke til kolon (\`:\`) etter betingelsen og innrykk (4 mellomrom) for kodeblokken.

Med **elif** sjekker du flere betingelser:

\`\`\`python
poeng = 75
if poeng >= 90:
    print("A")
elif poeng >= 80:
    print("B")
elif poeng >= 60:
    print("C")
else:
    print("F")
\`\`\``,
    },
    {
      id: 'im-2-3-text-1',
      type: 'text',
      title: 'Logiske operatorer og nøsting',
      content: `## Sammenlignings- og logiske operatorer

Sammenligninger: \`==\` (lik), \`!=\` (ulik), \`<\`, \`>\`, \`<=\`, \`>=\`. Bruk \`==\` for sammenligning og \`=\` for tilordning.

Kombiner betingelser med \`and\`, \`or\` og \`not\`:

\`\`\`python
alder = 17
har_tillatelse = True
if alder >= 18 or har_tillatelse:
    print("Tilgang gitt!")

temperatur = 22
if temperatur >= 20 and temperatur <= 30:
    print("Behagelig temperatur!")
\`\`\`

## Nøstede betingelser

\`\`\`python
tall = int(input("Tall: "))
if tall > 0:
    if tall % 2 == 0:
        print("Positivt partall")
    else:
        print("Positivt oddetall")
elif tall < 0:
    print("Negativt tall")
else:
    print("Null")
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skrives ut?\n\n```python\nx = 10\nif x > 5:\n    print("Stor")\nelse:\n    print("Liten")\n```',
      options: [
        { id: 'a', text: 'Stor', isCorrect: true },
        { id: 'b', text: 'Liten', isCorrect: false, feedback: '10 > 5 er True.' },
        { id: 'c', text: 'Stor og Liten', isCorrect: false, feedback: 'Bare én gren kjøres.' },
        { id: 'd', text: 'Ingenting', isCorrect: false, feedback: 'Betingelsen er True.' },
      ],
      solution: 'Siden 10 > 5 er True, kjøres if-grenen og "Stor" skrives ut.',
    },
    {
      id: 'im-vg1-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er resultatet av `True and False or True`?',
      options: [
        { id: 'a', text: 'True', isCorrect: true },
        { id: 'b', text: 'False', isCorrect: false, feedback: 'and evalueres før or.' },
        { id: 'c', text: 'Feilmelding', isCorrect: false, feedback: 'Gyldig uttrykk.' },
        { id: 'd', text: 'None', isCorrect: false, feedback: 'Logiske uttrykk gir True/False.' },
      ],
      solution: 'and har høyere prioritet: True and False = False. Deretter: False or True = True.',
    },
    {
      id: 'im-vg1-2-3-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv et program som ber om et tall og skriver ut om det er positivt, negativt eller null.',
      solution: `\`\`\`python\ntall = int(input("Tall: "))\nif tall > 0:\n    print("Positivt")\nelif tall < 0:\n    print("Negativt")\nelse:\n    print("Null")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-3-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag et program som ber om alder og gir billettype: barn (0-15), ungdom (16-25), voksen (26-66), senior (67+).',
      solution: `\`\`\`python\nalder = int(input("Alder: "))\nif alder <= 15:\n    print("Barn")\nelif alder <= 25:\n    print("Ungdom")\nelif alder <= 66:\n    print("Voksen")\nelse:\n    print("Senior")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-3-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Skriv et program som sjekker om et årstall er skuddår. Regler: delelig med 4 men ikke 100, med mindre delelig med 400.',
      solution: `\`\`\`python\naar = int(input("Årstall: "))\nif (aar % 4 == 0 and aar % 100 != 0) or (aar % 400 == 0):\n    print(f"{aar} er et skuddår")\nelse:\n    print(f"{aar} er ikke et skuddår")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skrives ut?\n\n```python\na, b, c = 5, 10, 15\nif a > b:\n    print("A")\nelif b > c:\n    print("B")\nelif a + b > c:\n    print("C")\nelse:\n    print("D")\n```',
      options: [
        { id: 'a', text: 'A', isCorrect: false, feedback: '5 > 10 er False.' },
        { id: 'b', text: 'B', isCorrect: false, feedback: '10 > 15 er False.' },
        { id: 'c', text: 'C', isCorrect: false, feedback: '15 > 15 er False (ikke større enn).' },
        { id: 'd', text: 'D', isCorrect: true },
      ],
      solution: 'Alle betingelser er False: 5>10, 10>15, 15>15. Else-grenen kjøres.',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Løkker og iterasjon
// ============================================================================

export const CHAPTER_IM_VG1_2_4: TextbookChapter = {
  id: 'im-vg1-2-4',
  courseId: 'im-vg1',
  chapterNumber: '2.4',
  title: 'Løkker og iterasjon',
  description: 'Lær å bruke for- og while-løkker til å gjenta kodeblokker, og forstå hvordan iterasjon brukes til å behandle data effektivt.',
  estimatedMinutes: 60,
  prevChapter: 'im-vg1-2-3',
  nextChapter: 'im-vg1-2-5',
  competenceGoals: [
    'bruke for-løkker til å iterere over sekvenser og tallområder',
    'bruke while-løkker for gjentakelse basert på betingelser',
    'forstå og anvende break, continue og nøstede løkker',
  ],
  keyTerms: [
    { term: 'For-løkke', definition: 'Løkke som itererer over en sekvens og kjører kodeblokken for hvert element.' },
    { term: 'While-løkke', definition: 'Løkke som gjentar kodeblokken så lenge en betingelse er sann.' },
    { term: 'range()', definition: 'Innebygd funksjon som genererer en tallsekvens: range(5) gir 0, 1, 2, 3, 4.' },
    { term: 'break', definition: 'Avbryter løkken umiddelbart.' },
    { term: 'continue', definition: 'Hopper over resten av iterasjonen og går til neste.' },
  ],
  content: [
    {
      id: 'im-2-4-intro',
      type: 'text',
      content: `# Løkker og iterasjon

Løkker lar deg gjenta kode. I stedet for å skrive \`print("Hei")\` ti ganger, bruker du en løkke.

## For-løkker

\`\`\`python
for i in range(5):
    print(i)           # 0, 1, 2, 3, 4

frukter = ["eple", "banan", "appelsin"]
for frukt in frukter:
    print(f"Jeg liker {frukt}!")

for i in range(2, 11, 2):  # Start, stopp, steg
    print(i)           # 2, 4, 6, 8, 10
\`\`\`

## While-løkker

\`\`\`python
teller = 1
while teller <= 5:
    print(f"Runde {teller}")
    teller += 1
\`\`\``,
    },
    {
      id: 'im-2-4-text-1',
      type: 'text',
      title: 'Break, continue og nøstede løkker',
      content: `## Break og continue

\`\`\`python
for tall in range(1, 100):
    if tall == 5:
        break         # Stopper løkken
    print(tall)       # 1, 2, 3, 4

for tall in range(1, 6):
    if tall == 3:
        continue      # Hopper over 3
    print(tall)       # 1, 2, 4, 5
\`\`\`

## Nøstede løkker og akkumulator

\`\`\`python
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}*{j}={i*j}", end="  ")
    print()

# Akkumulatormønster
total = 0
for tall in range(1, 11):
    total += tall
print(f"Sum 1-10: {total}")  # 55
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange ganger kjøres koden i `for i in range(7): print(i)`?',
      options: [
        { id: 'a', text: '6', isCorrect: false, feedback: 'range(7) gir 0-6, altså 7 verdier.' },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '8', isCorrect: false, feedback: 'range(7) stopper før 7.' },
        { id: 'd', text: '1', isCorrect: false, feedback: 'Løkken gjentas for hvert tall.' },
      ],
      solution: 'range(7) gir 0, 1, 2, 3, 4, 5, 6 – det er 7 tall.',
    },
    {
      id: 'im-vg1-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skrives ut?\n\n```python\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=" ")\n```',
      options: [
        { id: 'a', text: '1 2 3 4 5', isCorrect: false, feedback: 'continue hopper over 3.' },
        { id: 'b', text: '1 2 4 5', isCorrect: true },
        { id: 'c', text: '1 2', isCorrect: false, feedback: 'Løkken fortsetter etter continue.' },
        { id: 'd', text: '3', isCorrect: false, feedback: '3 hoppes over.' },
      ],
      solution: 'continue hopper over resten av iterasjonen når i==3. Alle andre tall skrives ut.',
    },
    {
      id: 'im-vg1-2-4-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv en for-løkke som skriver ut alle partall fra 2 til 20.',
      solution: `\`\`\`python\nfor tall in range(2, 21, 2):\n    print(tall)\n\`\`\`\n\nrange(2, 21, 2) gir 2, 4, 6, ..., 20.`,
    },
    {
      id: 'im-vg1-2-4-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag et gjettespill med while-løkke. Det hemmelige tallet er 42. Gi hint «For høyt» / «For lavt».',
      solution: `\`\`\`python\nhemmelig = 42\ngjetting = 0\nwhile gjetting != hemmelig:\n    gjetting = int(input("Gjett: "))\n    if gjetting > hemmelig:\n        print("For høyt!")\n    elif gjetting < hemmelig:\n        print("For lavt!")\nprint("Riktig!")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-4-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Bruk en for-løkke til å beregne fakultet av et tall n (n! = 1 × 2 × ... × n). Be brukeren om n.',
      solution: `\`\`\`python\nn = int(input("Tall: "))\nfakultet = 1\nfor i in range(1, n + 1):\n    fakultet *= i\nprint(f"{n}! = {fakultet}")\n\`\`\`\n\nFor n=5: 1×2×3×4×5 = 120.`,
    },
    {
      id: 'im-vg1-2-4-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bruk nøstede løkker til å skrive ut mønsteret:\n```\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5\n```',
      solution: `\`\`\`python\nfor rad in range(1, 6):\n    for kol in range(1, rad + 1):\n        print(kol, end=" ")\n    print()\n\`\`\`\n\nYtre løkke styrer rader, indre løkke skriver tall fra 1 til radnummeret.`,
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Funksjoner og modularisering
// ============================================================================

export const CHAPTER_IM_VG1_2_5: TextbookChapter = {
  id: 'im-vg1-2-5',
  courseId: 'im-vg1',
  chapterNumber: '2.5',
  title: 'Funksjoner og modularisering',
  description: 'Forstå hvordan funksjoner strukturerer kode, gjør den gjenbrukbar og lettere å vedlikeholde gjennom modularisering.',
  estimatedMinutes: 60,
  prevChapter: 'im-vg1-2-4',
  nextChapter: 'im-vg1-2-6',
  competenceGoals: [
    'definere og kalle egne funksjoner i Python',
    'bruke parametere og returverdier effektivt',
    'organisere kode i gjenbrukbare moduler',
  ],
  keyTerms: [
    { term: 'Funksjon', definition: 'En navngitt kodeblokk som utfører en bestemt oppgave og kan kalles flere ganger.' },
    { term: 'Parameter', definition: 'Variabel i funksjonsdefinisjonen som mottar en verdi ved kall.' },
    { term: 'Returverdi', definition: 'Verdien en funksjon sender tilbake med return.' },
    { term: 'Modularisering', definition: 'Å dele opp et program i mindre, selvstendige funksjoner for oversikt og gjenbruk.' },
  ],
  content: [
    {
      id: 'im-2-5-intro',
      type: 'text',
      content: `# Funksjoner og modularisering

Funksjoner pakker sammen kode som hører sammen. Du definerer dem én gang og kaller dem så mange ganger du vil.

\`\`\`python
def hilsen(navn):
    print(f"Hei, {navn}!")

hilsen("Kari")   # Hei, Kari!
hilsen("Ola")    # Hei, Ola!
\`\`\`

## Returverdier og standardverdier

\`\`\`python
def adder(a, b):
    return a + b

print(adder(3, 7))  # 10

def hilsen(navn, ord="Hei"):
    return f"{ord}, {navn}!"

print(hilsen("Kari"))            # Hei, Kari!
print(hilsen("Ola", "God dag"))  # God dag, Ola!
\`\`\``,
    },
    {
      id: 'im-2-5-text-1',
      type: 'text',
      title: 'Modularisering og lokale variabler',
      content: `## Organisering med funksjoner

\`\`\`python
import math

def sirkel_areal(radius):
    return math.pi * radius ** 2

def sirkel_omkrets(radius):
    return 2 * math.pi * radius

r = float(input("Radius: "))
print(f"Areal: {sirkel_areal(r):.2f}")
print(f"Omkrets: {sirkel_omkrets(r):.2f}")
\`\`\`

Variabler inne i en funksjon er **lokale** og finnes bare der. Variabler utenfor er **globale**:

\`\`\`python
x = 10  # Global
def test():
    y = 5  # Lokal
    print(x, y)

test()     # 10 5
# print(y) gir feil – y finnes bare i funksjonen
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva returnerer `doble(7)`?\n\n```python\ndef doble(tall):\n    return tall * 2\n```',
      options: [
        { id: 'a', text: '7', isCorrect: false, feedback: 'Funksjonen dobler.' },
        { id: 'b', text: '14', isCorrect: true },
        { id: 'c', text: '72', isCorrect: false, feedback: 'Det er multiplikasjon, ikke strengrepetisjon.' },
        { id: 'd', text: 'None', isCorrect: false, feedback: 'Funksjonen har return.' },
      ],
      solution: 'doble(7) returnerer 7 * 2 = 14.',
    },
    {
      id: 'im-vg1-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skrives ut?\n\n```python\ndef f(a, b=5):\n    return a + b\nprint(f(3))\nprint(f(3, 10))\n```',
      options: [
        { id: 'a', text: '8 og 13', isCorrect: true },
        { id: 'b', text: '8 og 8', isCorrect: false, feedback: 'Andre kall sender 10 som b.' },
        { id: 'c', text: '3 og 13', isCorrect: false, feedback: 'Første kall bruker b=5.' },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: 'Standardverdier er gyldige.' },
      ],
      solution: 'f(3) bruker b=5: 3+5=8. f(3,10): 3+10=13.',
    },
    {
      id: 'im-vg1-2-5-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv en funksjon `kvadrat(tall)` som returnerer kvadratet. Test med 4, 7 og 12.',
      solution: `\`\`\`python\ndef kvadrat(tall):\n    return tall ** 2\n\nprint(kvadrat(4))   # 16\nprint(kvadrat(7))   # 49\nprint(kvadrat(12))  # 144\n\`\`\``,
    },
    {
      id: 'im-vg1-2-5-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag `er_partall(tall)` som returnerer True/False. Bruk den i en løkke som skriver ut partall fra 1 til 20.',
      solution: `\`\`\`python\ndef er_partall(tall):\n    return tall % 2 == 0\n\nfor i in range(1, 21):\n    if er_partall(i):\n        print(i)\n\`\`\``,
    },
    {
      id: 'im-vg1-2-5-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Skriv `karakter(poeng)` som returnerer A (90+), B (80+), C (60+), D (40+), F (under 40). Test med 95, 72, 45, 30.',
      solution: `\`\`\`python\ndef karakter(poeng):\n    if poeng >= 90: return "A"\n    elif poeng >= 80: return "B"\n    elif poeng >= 60: return "C"\n    elif poeng >= 40: return "D"\n    else: return "F"\n\nfor p in [95, 72, 45, 30]:\n    print(f"{p}: {karakter(p)}")\n\`\`\`\n\nGir: 95→A, 72→C, 45→D, 30→F.`,
    },
    {
      id: 'im-vg1-2-5-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag tre funksjoner: `les_tall(nr)` som ber om et tall, `gjennomsnitt(liste)` som beregner snitt, og `hovedprogram()` som samler 5 tall og viser snittet.',
      solution: `\`\`\`python\ndef les_tall(nr):\n    return float(input(f"Tall {nr}: "))\n\ndef gjennomsnitt(liste):\n    return sum(liste) / len(liste)\n\ndef hovedprogram():\n    tall = [les_tall(i) for i in range(1, 6)]\n    print(f"Snitt: {gjennomsnitt(tall):.1f}")\n\nhovedprogram()\n\`\`\``,
    },
  ],
};

// ============================================================================
// Kapittel 2.6: Lister, ordbøker og datastrukturer
// ============================================================================

export const CHAPTER_IM_VG1_2_6: TextbookChapter = {
  id: 'im-vg1-2-6',
  courseId: 'im-vg1',
  chapterNumber: '2.6',
  title: 'Lister, ordbøker og datastrukturer',
  description: 'Lær å organisere og håndtere samlinger av data ved hjelp av lister, ordbøker og andre sentrale datastrukturer.',
  estimatedMinutes: 60,
  prevChapter: 'im-vg1-2-5',
  nextChapter: 'im-vg1-2-7',
  competenceGoals: [
    'opprette og manipulere lister med ulike metoder',
    'bruke ordbøker til å lagre nøkkel-verdi-par',
    'sortere, filtrere og iterere over datastrukturer',
  ],
  keyTerms: [
    { term: 'Liste', definition: 'Ordnet samling av verdier i hakeparenteser. Kan endres etter opprettelse.' },
    { term: 'Indeks', definition: 'Posisjon til et element i en liste. Første element har indeks 0.' },
    { term: 'Ordbok (dict)', definition: 'Samling av nøkkel-verdi-par i krøllparenteser.' },
    { term: 'Tuppel', definition: 'Ordnet samling som ikke kan endres etter opprettelse. Skrives med parenteser.' },
    { term: 'Sortering', definition: 'Å ordne elementer i bestemt rekkefølge, f.eks. stigende eller synkende.' },
  ],
  content: [
    {
      id: 'im-2-6-intro',
      type: 'text',
      content: `# Lister, ordbøker og datastrukturer

## Lister

\`\`\`python
elever = ["Anna", "Bjørn", "Camilla"]
print(elever[0])     # Anna
print(elever[-1])    # Camilla

elever.append("David")   # Legg til
elever.remove("Bjørn")   # Fjern
print(len(elever))        # 3

tall = [3, 1, 4, 1, 5]
tall.sort()              # [1, 1, 3, 4, 5]

# Listeforståelse
kvadrater = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]
\`\`\``,
    },
    {
      id: 'im-2-6-text-1',
      type: 'text',
      title: 'Ordbøker og tupler',
      content: `## Ordbøker (dictionaries)

\`\`\`python
elev = {"navn": "Kari", "alder": 16, "klasse": "1IMA"}

print(elev["navn"])      # Kari
elev["skole"] = "VGS"   # Legg til

for nokkel, verdi in elev.items():
    print(f"{nokkel}: {verdi}")
\`\`\`

## Tupler

Tupler kan ikke endres etter opprettelse:

\`\`\`python
koordinat = (10, 20)
print(koordinat[0])  # 10
x, y = koordinat     # Utpakking
\`\`\`

Bruk lister for data som endres, tupler for faste verdier.`,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er `frukter[1]` når `frukter = ["eple", "banan", "appelsin"]`?',
      options: [
        { id: 'a', text: 'eple', isCorrect: false, feedback: 'Indeks 0 er "eple".' },
        { id: 'b', text: 'banan', isCorrect: true },
        { id: 'c', text: 'appelsin', isCorrect: false, feedback: 'Indeks 2.' },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: 'Gyldig indeks.' },
      ],
      solution: 'Nullindeksering: indeks 0="eple", 1="banan", 2="appelsin".',
    },
    {
      id: 'im-vg1-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skrives ut?\n\n```python\ninfo = {"navn": "Ola", "alder": 17}\ninfo["fag"] = "IM"\nprint(len(info))\n```',
      options: [
        { id: 'a', text: '2', isCorrect: false, feedback: 'Vi la til en ny nøkkel.' },
        { id: 'b', text: '3', isCorrect: true },
        { id: 'c', text: '4', isCorrect: false, feedback: 'len() teller nøkler.' },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: 'Gyldig operasjon.' },
      ],
      solution: 'Starter med 2 nøkler, legger til "fag" = 3 nøkler.',
    },
    {
      id: 'im-vg1-2-6-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Opprett en liste med 5 favorittfilmer. Skriv ut første og siste, legg til en ny, og vis hele listen.',
      solution: `\`\`\`python\nfilmer = ["Inception", "Interstellar", "Matrix", "Parasite", "Dune"]\nprint("Første:", filmer[0])\nprint("Siste:", filmer[-1])\nfilmer.append("Oppenheimer")\nprint("Alle:", filmer)\n\`\`\``,
    },
    {
      id: 'im-vg1-2-6-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag en ordbok for en elev med navn, alder, klasse og fag (liste). Skriv ut alt formatert.',
      solution: `\`\`\`python\nelev = {"navn": "Sara", "alder": 16, "klasse": "1IMA", "fag": ["Norsk", "Matte", "IM"]}\nprint(f"Navn: {elev['navn']}")\nprint(f"Alder: {elev['alder']}")\nprint(f"Klasse: {elev['klasse']}")\nfor fag in elev["fag"]:\n    print(f"  - {fag}")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-6-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Be om 5 tall, lagre i en liste, og skriv ut største, minste og gjennomsnitt.',
      solution: `\`\`\`python\ntall = []\nfor i in range(5):\n    tall.append(float(input(f"Tall {i+1}: ")))\nprint(f"Størst: {max(tall)}")\nprint(f"Minst: {min(tall)}")\nprint(f"Snitt: {sum(tall)/len(tall):.1f}")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-6-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag et program som teller forekomster av hvert ord i en setning. Bruk ordbok og `split()`.',
      solution: `\`\`\`python\nsetning = input("Setning: ").lower().split()\ntelling = {}\nfor ord in setning:\n    if ord in telling:\n        telling[ord] += 1\n    else:\n        telling[ord] = 1\nfor ord, antall in telling.items():\n    print(f"'{ord}': {antall}")\n\`\`\``,
    },
  ],
};

// ============================================================================
// Kapittel 2.7: Algoritmer og problemløsning
// ============================================================================

export const CHAPTER_IM_VG1_2_7: TextbookChapter = {
  id: 'im-vg1-2-7',
  courseId: 'im-vg1',
  chapterNumber: '2.7',
  title: 'Algoritmer og problemløsning',
  description: 'Utvikle algoritmisk tenkning og lær å bryte ned problemer i steg-for-steg-løsninger med flytskjemaer og pseudokode.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-2-6',
  nextChapter: 'im-vg1-2-8',
  competenceGoals: [
    'beskrive algoritmer med pseudokode og flytskjemaer',
    'implementere søke- og sorteringsalgoritmer i Python',
    'analysere og sammenligne algoritmiske tilnærminger',
  ],
  keyTerms: [
    { term: 'Algoritme', definition: 'Presis, trinnvis oppskrift for å løse et bestemt problem.' },
    { term: 'Pseudokode', definition: 'Uformell beskrivelse av en algoritme på vanlig norsk, uten strenge syntaksregler.' },
    { term: 'Flytskjema', definition: 'Visuelt diagram med symboler: rektangler (prosess), diamanter (beslutning), piler (flyt).' },
    { term: 'Lineært søk', definition: 'Søkealgoritme som sjekker elementene ett for ett.' },
    { term: 'Boblesortering', definition: 'Sorteringsalgoritme som sammenligner og bytter naboer gjentatte ganger.' },
  ],
  content: [
    {
      id: 'im-2-7-intro',
      type: 'text',
      content: `# Algoritmer og problemløsning

En algoritme er en trinnvis oppskrift for å løse et problem. Før du koder, bør du planlegge med pseudokode eller flytskjema.

## Pseudokode

\`\`\`
ALGORITME: Finn største tall
1. Sett største = første element
2. For hvert tall i resten av listen:
   a. Hvis tall > største: sett største = tall
3. Returner største
\`\`\`

\`\`\`python
def finn_storste(liste):
    storste = liste[0]
    for tall in liste[1:]:
        if tall > storste:
            storste = tall
    return storste
\`\`\`

## Flytskjemaer

Symboler: **Oval** (start/slutt), **Rektangel** (prosess), **Diamant** (beslutning), **Parallellogram** (inn-/utdata), **Piler** (flyt).`,
    },
    {
      id: 'im-2-7-text-1',
      type: 'text',
      title: 'Søke- og sorteringsalgoritmer',
      content: `## Lineært søk

\`\`\`python
def lineaert_sok(liste, maal):
    for i in range(len(liste)):
        if liste[i] == maal:
            return i
    return -1

print(lineaert_sok([4, 7, 2, 9], 9))  # 3
\`\`\`

I verste fall sjekkes alle n elementer.

## Boblesortering

\`\`\`python
def boblesortering(liste):
    n = len(liste)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if liste[j] > liste[j + 1]:
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
    return liste

print(boblesortering([64, 34, 25, 12]))  # [12, 25, 34, 64]
\`\`\`

Boblesortering er enkel men ineffektiv. I praksis bruker vi \`sorted()\`.`,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en algoritme?',
      options: [
        { id: 'a', text: 'Et programmeringsspråk', isCorrect: false, feedback: 'En algoritme er en oppskrift, ikke et språk.' },
        { id: 'b', text: 'En trinnvis oppskrift for å løse et problem', isCorrect: true },
        { id: 'c', text: 'En type datamaskin', isCorrect: false, feedback: 'Algoritmer er konseptuelle.' },
        { id: 'd', text: 'En feilmelding', isCorrect: false, feedback: 'Har med problemløsning å gjøre.' },
      ],
      solution: 'En algoritme er en presis, trinnvis beskrivelse av hvordan et problem løses.',
    },
    {
      id: 'im-vg1-2-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er worst-case for lineært søk i en liste med n elementer?',
      options: [
        { id: 'a', text: '1 sammenligning', isCorrect: false, feedback: 'Det er best case.' },
        { id: 'b', text: 'n sammenligninger', isCorrect: true },
        { id: 'c', text: 'n/2 sammenligninger', isCorrect: false, feedback: 'Det er gjennomsnittlig.' },
        { id: 'd', text: 'log(n) sammenligninger', isCorrect: false, feedback: 'Det gjelder binærsøk.' },
      ],
      solution: 'I verste fall er elementet sist eller ikke til stede – alle n elementer sjekkes.',
    },
    {
      id: 'im-vg1-2-7-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv pseudokode for å beregne gjennomsnittet av en liste med tall.',
      solution: `\`\`\`\nALGORITME: Gjennomsnitt\n1. Sett sum = 0\n2. For hvert tall i listen: legg tall til sum\n3. Beregn snitt = sum / antall elementer\n4. Returner snitt\n\`\`\``,
    },
    {
      id: 'im-vg1-2-7-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Implementer lineært søk som funksjon. Test med en liste av navn.',
      solution: `\`\`\`python\ndef lineaert_sok(liste, maal):\n    for i in range(len(liste)):\n        if liste[i] == maal:\n            return i\n    return -1\n\nnavn = ["Anna", "Bjørn", "Camilla"]\nprint(lineaert_sok(navn, "Camilla"))  # 2\nprint(lineaert_sok(navn, "Erik"))     # -1\n\`\`\``,
    },
    {
      id: 'im-vg1-2-7-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Implementer boblesortering med utskrift etter hver runde. Test med [5, 3, 8, 1, 2].',
      solution: `\`\`\`python\ndef boblesortering(liste):\n    n = len(liste)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if liste[j] > liste[j + 1]:\n                liste[j], liste[j + 1] = liste[j + 1], liste[j]\n        print(f"Runde {i+1}: {liste}")\n    return liste\n\nboblesortering([5, 3, 8, 1, 2])\n\`\`\``,
    },
    {
      id: 'im-vg1-2-7-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket symbol i et flytskjema representerer en beslutning?',
      options: [
        { id: 'a', text: 'Rektangel', isCorrect: false, feedback: 'Rektangler er prosesser.' },
        { id: 'b', text: 'Oval', isCorrect: false, feedback: 'Ovaler er start/slutt.' },
        { id: 'c', text: 'Diamant', isCorrect: true },
        { id: 'd', text: 'Parallellogram', isCorrect: false, feedback: 'Parallellogrammer er inn-/utdata.' },
      ],
      solution: 'Diamantformen (rombe) brukes for beslutningspunkter med ja/nei-utganger.',
    },
  ],
};

// ============================================================================
// Kapittel 2.8: Feilsøking og testing
// ============================================================================

export const CHAPTER_IM_VG1_2_8: TextbookChapter = {
  id: 'im-vg1-2-8',
  courseId: 'im-vg1',
  chapterNumber: '2.8',
  title: 'Feilsøking og testing',
  description: 'Lær systematiske metoder for å finne og rette feil i kode, og forstå betydningen av testing for kvalitetssikring.',
  estimatedMinutes: 50,
  prevChapter: 'im-vg1-2-7',
  nextChapter: 'im-vg1-3-1',
  competenceGoals: [
    'skille mellom syntaksfeil, kjøretidsfeil og logiske feil',
    'bruke debugging-teknikker for å finne feil',
    'skrive enhetstester og bruke try-except for feilhåndtering',
  ],
  keyTerms: [
    { term: 'Syntaksfeil', definition: 'Feil i kodens skrivemåte. Python gir feilmelding og kan ikke kjøre koden.' },
    { term: 'Logisk feil', definition: 'Koden kjører uten feilmelding, men gir feil resultat.' },
    { term: 'Kjøretidsfeil', definition: 'Feil som oppstår under kjøring, f.eks. divisjon med null.' },
    { term: 'Debugging', definition: 'Prosessen med å finne og rette feil (bugs) i et program.' },
    { term: 'Enhetstest', definition: 'Automatisert test som sjekker at en funksjon gir riktig resultat.' },
    { term: 'try-except', definition: 'Feilhåndtering: try prøver koden, except håndterer eventuelle feil.' },
  ],
  content: [
    {
      id: 'im-2-8-intro',
      type: 'text',
      content: `# Feilsøking og testing

Alle programmerere skriver kode med feil. Det viktige er å finne og rette dem systematisk.

## Tre typer feil

**Syntaksfeil** – bryter med Pythons grammatikk (manglende kolon, feil innrykk). Lett å finne.

**Kjøretidsfeil** – oppstår under kjøring: \`int("abc")\` (ValueError), \`10/0\` (ZeroDivisionError).

**Logiske feil** – koden kjører, men gir feil resultat: \`a + b / 2\` i stedet for \`(a + b) / 2\`. Vanskeligst å finne.

## Debugging med print

\`\`\`python
def rabatt(pris, prosent):
    print(f"DEBUG: pris={pris}, prosent={prosent}")
    return pris - pris * prosent / 100
\`\`\`

Systematisk: 1) Reproduser feilen, 2) Isoler den, 3) Forstå den, 4) Rett den, 5) Test.`,
    },
    {
      id: 'im-2-8-text-1',
      type: 'text',
      title: 'Try-except og enhetstesting',
      content: `## Feilhåndtering med try-except

\`\`\`python
try:
    tall = int(input("Tall: "))
    print(100 / tall)
except ValueError:
    print("Ugyldig tall!")
except ZeroDivisionError:
    print("Kan ikke dele på null!")
\`\`\`

## Enhetstesting med assert

\`\`\`python
def adder(a, b):
    return a + b

assert adder(2, 3) == 5
assert adder(-1, 1) == 0
assert adder(0, 0) == 0
print("Alle tester bestått!")
\`\`\`

\`assert\` sjekker om uttrykket er True. Hvis False, krasjer programmet med feilmelding. Skriv tester for å fange feil tidlig.`,
    },
  ],
  exercises: [
    {
      id: 'im-vg1-2-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type feil er `print("Hei"` (manglende parentes)?',
      options: [
        { id: 'a', text: 'Syntaksfeil', isCorrect: true },
        { id: 'b', text: 'Logisk feil', isCorrect: false, feedback: 'Logiske feil gir ikke feilmelding.' },
        { id: 'c', text: 'Kjøretidsfeil', isCorrect: false, feedback: 'Koden kan ikke starte.' },
        { id: 'd', text: 'Ingen feil', isCorrect: false, feedback: 'Mangler sluttparentes.' },
      ],
      solution: 'Manglende parentes gir SyntaxError – Python kan ikke tolke koden.',
    },
    {
      id: 'im-vg1-2-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skrives ut?\n\n```python\ntry:\n    print("A")\n    x = 10 / 0\n    print("B")\nexcept ZeroDivisionError:\n    print("C")\nprint("D")\n```',
      options: [
        { id: 'a', text: 'A, B, C, D', isCorrect: false, feedback: 'B hoppes over pga. feil.' },
        { id: 'b', text: 'A, C, D', isCorrect: true },
        { id: 'c', text: 'A, C', isCorrect: false, feedback: 'D er utenfor try/except.' },
        { id: 'd', text: 'A, B, D', isCorrect: false, feedback: '10/0 gir ZeroDivisionError.' },
      ],
      solution: 'A skrives ut. 10/0 gir feil, B hoppes over. C skrives ut (except). D skrives ut normalt.',
    },
    {
      id: 'im-vg1-2-8-ex-3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn og rett tre feil:\n\n```python\ndef beregn_areal(lengde, bredde)\n    areal = lengde * bredde\n    return Areal\n\nprint(beregn_areal(5 3))\n```',
      solution: `Feil 1: Manglende kolon etter def.\nFeil 2: \`Areal\` → \`areal\` (store/små bokstaver).\nFeil 3: Manglende komma: \`(5, 3)\`.\n\n\`\`\`python\ndef beregn_areal(lengde, bredde):\n    areal = lengde * bredde\n    return areal\n\nprint(beregn_areal(5, 3))\n\`\`\``,
    },
    {
      id: 'im-vg1-2-8-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv `sikker_divisjon(a, b)` som bruker try-except til å håndtere ZeroDivisionError.',
      solution: `\`\`\`python\ndef sikker_divisjon(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Kan ikke dele på null"\n\nprint(sikker_divisjon(10, 3))  # 3.333...\nprint(sikker_divisjon(10, 0))  # Kan ikke dele på null\n\`\`\``,
    },
    {
      id: 'im-vg1-2-8-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv `absoluttverdi(tall)` og test den med assert for positivt tall, negativt tall og null.',
      solution: `\`\`\`python\ndef absoluttverdi(tall):\n    if tall < 0:\n        return -tall\n    return tall\n\nassert absoluttverdi(5) == 5\nassert absoluttverdi(-3) == 3\nassert absoluttverdi(0) == 0\nprint("Alle tester bestått!")\n\`\`\``,
    },
    {
      id: 'im-vg1-2-8-ex-6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Denne funksjonen har en logisk feil. Finn den, rett den, og skriv tester:\n\n```python\ndef nest_storste(liste):\n    storst = liste[0]\n    nest = liste[0]\n    for tall in liste:\n        if tall > storst:\n            storst = tall\n        elif tall > nest:\n            nest = tall\n    return nest\n```',
      solution: `Feilen: Når storst oppdateres, lagres ikke den gamle storst som nest.

\`\`\`python\ndef nest_storste(liste):\n    storst = liste[0]\n    nest = float('-inf')\n    for tall in liste:\n        if tall > storst:\n            nest = storst\n            storst = tall\n        elif tall > nest and tall != storst:\n            nest = tall\n    return nest\n\nassert nest_storste([1, 5, 3, 9, 7]) == 7\nassert nest_storste([10, 20, 30]) == 20\nassert nest_storste([5, 5, 3, 1]) == 3\nprint("Alle tester bestått!")\n\`\`\``,
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const IM_VG1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_2_1,
  CHAPTER_IM_VG1_2_2,
  CHAPTER_IM_VG1_2_3,
  CHAPTER_IM_VG1_2_4,
  CHAPTER_IM_VG1_2_5,
  CHAPTER_IM_VG1_2_6,
  CHAPTER_IM_VG1_2_7,
  CHAPTER_IM_VG1_2_8,
];

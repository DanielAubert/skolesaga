/**
 * Informasjonsteknologi 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Informasjonsteknologi 1 (VG2)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Digital kompetanse og samfunn
// ============================================================================

export const CHAPTER_IT_1_1: TextbookChapter = {
  id: 'it-1-1',
  courseId: 'it-1',
  chapterNumber: '1',
  title: 'Digital kompetanse og samfunn',
  description: 'Forstå digitaliseringens påvirkning på samfunnet og utvikle digital dømmekraft.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske hvordan digitalisering påvirker samfunnet',
    'drøfte etiske problemstillinger knyttet til digital teknologi',
  ],
  content: [
    {
      id: 'it-1-1-intro',
      type: 'text',
      content: `Digital teknologi har forandret måten vi lever, arbeider og kommuniserer på. I dette kapittelet skal vi se på hvordan digitaliseringen påvirker samfunnet og hvilken kompetanse som kreves for å navigere i den digitale verden.`,
    },
    {
      id: 'it-1-1-text-1',
      type: 'text',
      title: 'Hva er digital kompetanse?',
      content: `Digital kompetanse handler om mer enn bare å kunne bruke teknologi. Det omfatter:

- **Tekniske ferdigheter**: Evnen til å bruke digitale verktøy og programvare
- **Informasjonskompetanse**: Evnen til å finne, vurdere og bruke informasjon kritisk
- **Kommunikasjonskompetanse**: Evnen til å kommunisere effektivt i digitale kanaler
- **Produksjonskompetanse**: Evnen til å skape digitalt innhold
- **Digital dømmekraft**: Evnen til å ta gode valg i digitale sammenhenger`,
    },
    {
      id: 'it-1-1-def-1',
      type: 'definition',
      title: 'Digitalisering',
      content: `Digitalisering er prosessen med å bruke digital teknologi til å endre forretningsmodeller, prosesser og tjenester. Det handler ikke bare om å gjøre analoge prosesser digitale, men om å utnytte mulighetene teknologien gir for å skape nye verdier.`,
    },
    {
      id: 'it-1-1-text-2',
      type: 'text',
      title: 'Digitaliseringens påvirkning på samfunnet',
      content: `Digitaliseringen har påvirket nesten alle områder av samfunnet:

**Arbeidsliv**
- Nye yrker har oppstått (f.eks. UX-designer, dataingeniør)
- Noen yrker har forsvunnet eller endret seg dramatisk
- Hjemmekontor og fleksibel arbeidstid har blitt vanligere

**Utdanning**
- Tilgang til læringsressurser fra hele verden
- Nye læringsformer som e-læring og spillbasert læring
- Digitale vurderingsformer

**Helse**
- Telemedisin og digitale helsetjenester
- Helsapper og wearables
- Elektroniske pasientjournaler

**Demokrati og deltakelse**
- Sosiale medier som arena for debatt
- Digital tilgang til offentlig informasjon
- Nye former for politisk mobilisering`,
    },
    {
      id: 'it-1-1-example-1',
      type: 'example',
      title: 'Digital transformasjon i praksis',
      content: `**Eksempel: Banktjenester**

Før digitaliseringen måtte man fysisk oppsøke banken for de fleste tjenester. I dag kan man:
- Sjekke saldo via app
- Betale regninger med nettbank
- Søke om lån digitalt
- Bruke Vipps for betalinger

Dette har ført til at mange bankfilialer har blitt nedlagt, men også til at banktjenester er tilgjengelige 24/7.`,
    },
    {
      id: 'it-1-1-def-2',
      type: 'definition',
      title: 'Digital dømmekraft',
      content: `Digital dømmekraft er evnen til å foreta gode valg og vurderinger i digitale sammenhenger. Det inkluderer å vurdere troverdighet av informasjon, forstå konsekvenser av digital deling, og handle etisk ansvarlig på nett.`,
    },
    {
      id: 'it-1-1-warning-1',
      type: 'warning',
      title: 'Digitalt utenforskap',
      content: `Ikke alle har like god tilgang til eller kompetanse i å bruke digital teknologi. Dette kan føre til digitalt utenforskap, der grupper faller utenfor fordi de ikke mestrer de digitale verktøyene som samfunnet forutsetter at alle kan bruke.`,
    },
    {
      id: 'it-1-1-tip-1',
      type: 'tip',
      content: `Hold deg oppdatert på teknologisk utvikling ved å følge med på nyheter, delta i kurs og være nysgjerrig på nye verktøy og tjenester.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er digital kompetanse?',
      options: [
        { id: 'a', text: 'Kun evnen til å bruke en datamaskin', isCorrect: false, feedback: 'Digital kompetanse omfatter mye mer enn bare tekniske ferdigheter.' },
        { id: 'b', text: 'En kombinasjon av tekniske ferdigheter, informasjonskompetanse og digital dømmekraft', isCorrect: true },
        { id: 'c', text: 'Evnen til å programmere', isCorrect: false, feedback: 'Programmering er én del, men digital kompetanse er bredere.' },
        { id: 'd', text: 'Å ha mange følgere på sosiale medier', isCorrect: false, feedback: 'Dette har lite med digital kompetanse å gjøre.' },
      ],
      solution: 'Digital kompetanse er en bred ferdighet som omfatter tekniske ferdigheter, informasjonskompetanse, kommunikasjon, produksjon og digital dømmekraft.',
    },
    {
      id: 'it-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med digitalisering?',
      options: [
        { id: 'a', text: 'Å skanne papirdokumenter', isCorrect: false, feedback: 'Dette er digitisering, ikke digitalisering.' },
        { id: 'b', text: 'Prosessen med å bruke digital teknologi til å endre prosesser og skape nye verdier', isCorrect: true },
        { id: 'c', text: 'Å kjøpe nye datamaskiner', isCorrect: false, feedback: 'Digitalisering handler om mer enn bare utstyr.' },
        { id: 'd', text: 'Å legge ut bilder på Instagram', isCorrect: false, feedback: 'Dette er bruk av sosiale medier, ikke digitalisering.' },
      ],
      solution: 'Digitalisering handler om å utnytte digital teknologi til å transformere prosesser, tjenester og forretningsmodeller.',
    },
    {
      id: 'it-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er digital dømmekraft?',
      options: [
        { id: 'a', text: 'Evnen til å dømme andre på internett', isCorrect: false, feedback: 'Digital dømmekraft handler om egne valg, ikke å dømme andre.' },
        { id: 'b', text: 'Evnen til å foreta gode valg og vurderinger i digitale sammenhenger', isCorrect: true },
        { id: 'c', text: 'Å kunne skille mellom Mac og PC', isCorrect: false, feedback: 'Dette er ikke hva digital dømmekraft handler om.' },
        { id: 'd', text: 'Å være rask til å ta beslutninger', isCorrect: false, feedback: 'Digital dømmekraft handler om kvaliteten på beslutninger, ikke hastighet.' },
      ],
      solution: 'Digital dømmekraft innebærer å vurdere troverdighet, forstå konsekvenser av deling, og handle etisk på nett.',
    },
    {
      id: 'it-1-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er digitalt utenforskap?',
      options: [
        { id: 'a', text: 'Å velge å ikke bruke sosiale medier', isCorrect: false, feedback: 'Dette er et bevisst valg, ikke utenforskap.' },
        { id: 'b', text: 'Å ikke ha råd til internett', isCorrect: false, feedback: 'Økonomi kan være én faktor, men utenforskap er bredere.' },
        { id: 'c', text: 'At grupper faller utenfor fordi de ikke mestrer digitale verktøy samfunnet forutsetter', isCorrect: true },
        { id: 'd', text: 'Å bli utestengt fra et nettforum', isCorrect: false, feedback: 'Dette er ikke hva digitalt utenforskap handler om.' },
      ],
      solution: 'Digitalt utenforskap oppstår når personer eller grupper ikke har tilgang til eller kompetanse i å bruke digital teknologi som samfunnet forventer.',
    },
    {
      id: 'it-1-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken påstand om digitaliseringens påvirkning på arbeidslivet er mest presis?',
      options: [
        { id: 'a', text: 'Digitaliseringen har kun skapt nye jobber', isCorrect: false, feedback: 'Noen jobber har også forsvunnet.' },
        { id: 'b', text: 'Digitaliseringen har kun fjernet jobber', isCorrect: false, feedback: 'Mange nye jobber har også blitt skapt.' },
        { id: 'c', text: 'Digitaliseringen har både skapt nye jobber og endret eller fjernet eksisterende', isCorrect: true },
        { id: 'd', text: 'Digitaliseringen har ikke påvirket arbeidslivet nevneverdig', isCorrect: false, feedback: 'Digitaliseringen har hatt stor påvirkning på arbeidslivet.' },
      ],
      solution: 'Digitaliseringen har hatt en kompleks effekt: nye yrker har oppstått, noen har forsvunnet, og mange har endret seg betydelig.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Grunnleggende programmering
// ============================================================================

export const CHAPTER_IT_1_2: TextbookChapter = {
  id: 'it-1-2',
  courseId: 'it-1',
  chapterNumber: '2',
  title: 'Grunnleggende programmering',
  description: 'Lær de grunnleggende konseptene i programmering med Python.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lage programmer som løser definerte problemer',
    'bruke variabler, datatyper og kontrollstrukturer',
  ],
  content: [
    {
      id: 'it-1-2-intro',
      type: 'text',
      content: `Programmering handler om å gi datamaskinen instruksjoner for å løse oppgaver. I dette kapittelet lærer du de grunnleggende byggesteinene i programmering ved hjelp av programmeringsspråket Python.`,
    },
    {
      id: 'it-1-2-def-1',
      type: 'definition',
      title: 'Program',
      content: `Et program er en samling instruksjoner som forteller datamaskinen hva den skal gjøre. Instruksjonene skrives i et programmeringsspråk og utføres i rekkefølge.`,
    },
    {
      id: 'it-1-2-text-1',
      type: 'text',
      title: 'Variabler',
      content: `En variabel er en navngitt lagringsplass for data. Tenk på den som en boks med et navn, der du kan legge inn verdier.

\`\`\`python
navn = "Ola"
alder = 16
høyde = 1.75
er_elev = True
\`\`\`

Her har vi laget fire variabler med forskjellige datatyper.`,
    },
    {
      id: 'it-1-2-def-2',
      type: 'definition',
      title: 'Datatyper',
      content: `**Vanlige datatyper i Python:**
- **str** (string/tekst): "Hei på deg"
- **int** (heltall): 42
- **float** (desimaltall): 3.14
- **bool** (sannhetsverdi): True eller False
- **list** (liste): [1, 2, 3]`,
    },
    {
      id: 'it-1-2-text-2',
      type: 'text',
      title: 'Input og output',
      content: `For å kommunisere med brukeren bruker vi \`input()\` og \`print()\`:

\`\`\`python
navn = input("Hva heter du? ")
print("Hei, " + navn + "!")
\`\`\`

\`input()\` leser tekst fra brukeren, og \`print()\` skriver ut tekst på skjermen.`,
    },
    {
      id: 'it-1-2-example-1',
      type: 'example',
      title: 'Enkelt program',
      content: `**Oppgave:** Lag et program som spør om brukerens alder og forteller hvor gammel de vil være om 10 år.

\`\`\`python
alder = int(input("Hvor gammel er du? "))
om_10_aar = alder + 10
print("Om 10 år er du", om_10_aar, "år gammel.")
\`\`\`

Merk at vi bruker \`int()\` for å konvertere input til et heltall, siden \`input()\` alltid returnerer tekst.`,
    },
    {
      id: 'it-1-2-text-3',
      type: 'text',
      title: 'Betingelser (if-setninger)',
      content: `Betingelser lar programmet ta valg basert på om noe er sant eller usant:

\`\`\`python
alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig")
elif alder >= 13:
    print("Du er tenåring")
else:
    print("Du er barn")
\`\`\`

Innrykk (4 mellomrom) er viktig i Python for å vise hva som hører til betingelsen.`,
    },
    {
      id: 'it-1-2-def-3',
      type: 'definition',
      title: 'Sammenligningsoperatorer',
      content: `| Operator | Betydning |
|----------|-----------|
| == | Er lik |
| != | Er ikke lik |
| < | Mindre enn |
| > | Større enn |
| <= | Mindre enn eller lik |
| >= | Større enn eller lik |`,
    },
    {
      id: 'it-1-2-text-4',
      type: 'text',
      title: 'Løkker',
      content: `Løkker lar oss gjenta kode flere ganger.

**For-løkke:**
\`\`\`python
for i in range(5):
    print(i)  # Skriver ut 0, 1, 2, 3, 4
\`\`\`

**While-løkke:**
\`\`\`python
tall = 0
while tall < 5:
    print(tall)
    tall = tall + 1
\`\`\``,
    },
    {
      id: 'it-1-2-tip-1',
      type: 'tip',
      content: `Start alltid med å planlegge programmet ditt før du begynner å kode. Skriv ned stegene programmet skal utføre på vanlig norsk først.`,
    },
    {
      id: 'it-1-2-warning-1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `- Glemme å konvertere input til tall med \`int()\` eller \`float()\`
- Feil innrykk (må være konsistent)
- Bruke = (tilordning) i stedet for == (sammenligning)
- Glemme kolon (:) etter if, elif, else, for, while`,
    },
  ],
  exercises: [
    {
      id: 'it-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken datatype har verdien "Hallo"?',
      options: [
        { id: 'a', text: 'int', isCorrect: false, feedback: 'int er for heltall.' },
        { id: 'b', text: 'float', isCorrect: false, feedback: 'float er for desimaltall.' },
        { id: 'c', text: 'str', isCorrect: true },
        { id: 'd', text: 'bool', isCorrect: false, feedback: 'bool er for True/False.' },
      ],
      solution: 'Tekst (i anførselstegn) har datatypen str (string).',
    },
    {
      id: 'it-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skriver dette programmet ut?\n\n```python\nx = 5\ny = 3\nprint(x + y)\n```',
      options: [
        { id: 'a', text: 'x + y', isCorrect: false, feedback: 'Python regner ut verdiene.' },
        { id: 'b', text: '8', isCorrect: true },
        { id: 'c', text: '53', isCorrect: false, feedback: 'Dette ville skjedd med tekst, ikke tall.' },
        { id: 'd', text: 'Feilmelding', isCorrect: false, feedback: 'Koden er gyldig.' },
      ],
      solution: 'Python regner ut 5 + 3 = 8 og skriver ut resultatet.',
    },
    {
      id: 'it-1-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig måte å sjekke om variabelen `alder` er lik 18?',
      options: [
        { id: 'a', text: 'if alder = 18:', isCorrect: false, feedback: 'Enkelt likhetstegn brukes for tilordning, ikke sammenligning.' },
        { id: 'b', text: 'if alder == 18:', isCorrect: true },
        { id: 'c', text: 'if alder equals 18:', isCorrect: false, feedback: 'Python bruker ikke "equals".' },
        { id: 'd', text: 'if alder is 18:', isCorrect: false, feedback: '"is" sjekker identitet, ikke likhet.' },
      ],
      solution: 'Dobbelt likhetstegn (==) brukes for å sammenligne verdier i Python.',
    },
    {
      id: 'it-1-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange ganger kjøres print-setningen?\n\n```python\nfor i in range(4):\n    print("Hei")\n```',
      options: [
        { id: 'a', text: '3 ganger', isCorrect: false, feedback: 'range(4) gir verdiene 0, 1, 2, 3.' },
        { id: 'b', text: '4 ganger', isCorrect: true },
        { id: 'c', text: '5 ganger', isCorrect: false, feedback: 'range(4) stopper før 4.' },
        { id: 'd', text: '1 gang', isCorrect: false, feedback: 'Løkken kjører flere ganger.' },
      ],
      solution: 'range(4) genererer tallene 0, 1, 2, 3 - altså 4 tall, så løkken kjører 4 ganger.',
    },
    {
      id: 'it-1-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva blir skrevet ut?\n\n```python\ntall = 10\nif tall > 5:\n    if tall > 15:\n        print("A")\n    else:\n        print("B")\nelse:\n    print("C")\n```',
      options: [
        { id: 'a', text: 'A', isCorrect: false, feedback: '10 er ikke større enn 15.' },
        { id: 'b', text: 'B', isCorrect: true },
        { id: 'c', text: 'C', isCorrect: false, feedback: '10 er større enn 5, så vi går inn i første if.' },
        { id: 'd', text: 'Ingenting', isCorrect: false, feedback: 'En av print-setningene vil kjøre.' },
      ],
      solution: '10 > 5 er sant, men 10 > 15 er usant, så vi havner i else-grenen og skriver ut "B".',
    },
  ],
};

// ============================================================================
// Kapittel 3: Algoritmer og problemløsning
// ============================================================================

export const CHAPTER_IT_1_3: TextbookChapter = {
  id: 'it-1-3',
  courseId: 'it-1',
  chapterNumber: '3',
  title: 'Algoritmer og problemløsning',
  description: 'Forstå hva algoritmer er og hvordan de brukes til å løse problemer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke algoritmer og programmering til å løse problemer',
    'dokumentere og forklare programkode',
  ],
  content: [
    {
      id: 'it-1-3-intro',
      type: 'text',
      content: `En algoritme er en oppskrift for å løse et problem. Når vi programmerer, oversetter vi algoritmer til kode som datamaskinen kan utføre. I dette kapittelet lærer du å tenke algoritmisk og løse problemer steg for steg.`,
    },
    {
      id: 'it-1-3-def-1',
      type: 'definition',
      title: 'Algoritme',
      content: `En algoritme er en presis beskrivelse av en serie handlinger som skal utføres for å løse et bestemt problem. En god algoritme er:
- **Entydig**: Hvert steg er klart definert
- **Endelig**: Den stopper etter et begrenset antall steg
- **Effektiv**: Den løser problemet med rimelig ressursbruk`,
    },
    {
      id: 'it-1-3-example-1',
      type: 'example',
      title: 'Hverdagsalgoritme: Lage te',
      content: `1. Fyll kjelen med vann
2. Sett kjelen på kokeplaten
3. Vent til vannet koker
4. Legg tepose i koppen
5. Hell kokende vann i koppen
6. Vent 3-5 minutter
7. Ta ut teposen
8. Tilsett eventuelt melk og sukker

Dette er en algoritme fordi den beskriver presist hvordan man løser "problemet" å lage te.`,
    },
    {
      id: 'it-1-3-text-1',
      type: 'text',
      title: 'Problemløsning i programmering',
      content: `Når vi skal løse et problem med programmering, følger vi ofte disse stegene:

1. **Forstå problemet**: Hva er input? Hva skal output være?
2. **Planlegg løsningen**: Bryt ned problemet i mindre deler
3. **Skriv pseudokode**: Beskriv løsningen på vanlig språk
4. **Implementer**: Oversett til programkode
5. **Test**: Sjekk at løsningen fungerer
6. **Feilsøk**: Finn og rett eventuelle feil`,
    },
    {
      id: 'it-1-3-def-2',
      type: 'definition',
      title: 'Pseudokode',
      content: `Pseudokode er en uformell beskrivelse av en algoritme som bruker vanlig språk blandet med programmeringsstrukturer. Det er lettere å lese enn kode, men mer presist enn vanlig tekst.`,
    },
    {
      id: 'it-1-3-example-2',
      type: 'example',
      title: 'Fra problem til kode',
      content: `**Problem:** Finn det største av tre tall.

**Pseudokode:**
\`\`\`
Les inn tre tall: a, b, c
Hvis a er størst:
    Skriv ut a
Ellers hvis b er størst:
    Skriv ut b
Ellers:
    Skriv ut c
\`\`\`

**Python-kode:**
\`\`\`python
a = int(input("Tall 1: "))
b = int(input("Tall 2: "))
c = int(input("Tall 3: "))

if a >= b and a >= c:
    print("Største tall:", a)
elif b >= a and b >= c:
    print("Største tall:", b)
else:
    print("Største tall:", c)
\`\`\``,
    },
    {
      id: 'it-1-3-text-2',
      type: 'text',
      title: 'Vanlige algoritmemønstre',
      content: `**Søking**: Finne et element i en samling
\`\`\`python
tall = [4, 2, 7, 1, 9]
søk = 7
for t in tall:
    if t == søk:
        print("Fant tallet!")
        break
\`\`\`

**Summering**: Legge sammen alle verdier
\`\`\`python
tall = [4, 2, 7, 1, 9]
total = 0
for t in tall:
    total = total + t
print("Sum:", total)
\`\`\`

**Telling**: Telle forekomster
\`\`\`python
tekst = "programmering"
antall_r = 0
for bokstav in tekst:
    if bokstav == "r":
        antall_r = antall_r + 1
print("Antall r:", antall_r)
\`\`\``,
    },
    {
      id: 'it-1-3-text-3',
      type: 'text',
      title: 'Flytdiagram',
      content: `Et flytdiagram er en visuell fremstilling av en algoritme. Vanlige symboler:

- **Oval**: Start/slutt
- **Rektangel**: Prosess/handling
- **Rombe**: Beslutning (ja/nei)
- **Paralellogram**: Input/output
- **Piler**: Viser flyten mellom steg

Flytdiagram hjelper oss å visualisere og kommunisere algoritmer.`,
    },
    {
      id: 'it-1-3-tip-1',
      type: 'tip',
      content: `Når du sitter fast, prøv å løse problemet for hånd med et konkret eksempel først. Dette hjelper deg å forstå stegene som trengs.`,
    },
    {
      id: 'it-1-3-warning-1',
      type: 'warning',
      title: 'Uendelige løkker',
      content: `Pass på at algoritmer alltid terminerer! En while-løkke uten oppdatering av betingelsen kan kjøre for alltid:
\`\`\`python
# FEIL - uendelig løkke!
i = 0
while i < 10:
    print(i)
    # Mangler: i = i + 1
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'it-1-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en algoritme?',
      options: [
        { id: 'a', text: 'Et programmeringsspråk', isCorrect: false, feedback: 'Algoritmer kan beskrives i mange språk.' },
        { id: 'b', text: 'En presis beskrivelse av steg for å løse et problem', isCorrect: true },
        { id: 'c', text: 'En type datamaskin', isCorrect: false, feedback: 'Algoritmer er ikke maskinvare.' },
        { id: 'd', text: 'Et regneark', isCorrect: false, feedback: 'Regneark er et verktøy, ikke en algoritme.' },
      ],
      solution: 'En algoritme er en presis, steg-for-steg oppskrift for å løse et bestemt problem.',
    },
    {
      id: 'it-1-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er pseudokode?',
      options: [
        { id: 'a', text: 'Feil kode som ikke fungerer', isCorrect: false, feedback: 'Pseudo betyr "uekte", men pseudokode er nyttig.' },
        { id: 'b', text: 'Kode skrevet i Python', isCorrect: false, feedback: 'Pseudokode er ikke et spesifikt programmeringsspråk.' },
        { id: 'c', text: 'En uformell beskrivelse av en algoritme på vanlig språk', isCorrect: true },
        { id: 'd', text: 'Kommentarer i koden', isCorrect: false, feedback: 'Kommentarer forklarer kode, pseudokode er en planleggingsmetode.' },
      ],
      solution: 'Pseudokode bruker vanlig språk til å beskrive algoritmer før de implementeres i et programmeringsspråk.',
    },
    {
      id: 'it-1-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva blir verdien av `total` etter denne koden?\n\n```python\ntall = [1, 2, 3, 4]\ntotal = 0\nfor t in tall:\n    total = total + t\n```',
      options: [
        { id: 'a', text: '4', isCorrect: false, feedback: 'Koden summerer alle tallene, ikke bare det siste.' },
        { id: 'b', text: '10', isCorrect: true },
        { id: 'c', text: '0', isCorrect: false, feedback: 'Total oppdateres i løkken.' },
        { id: 'd', text: '[1, 2, 3, 4]', isCorrect: false, feedback: 'Total er et tall, ikke en liste.' },
      ],
      solution: 'Koden summerer 1 + 2 + 3 + 4 = 10.',
    },
    {
      id: 'it-1-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket symbol i et flytdiagram brukes for beslutninger?',
      options: [
        { id: 'a', text: 'Rektangel', isCorrect: false, feedback: 'Rektangel brukes for prosesser/handlinger.' },
        { id: 'b', text: 'Oval', isCorrect: false, feedback: 'Oval brukes for start og slutt.' },
        { id: 'c', text: 'Rombe', isCorrect: true },
        { id: 'd', text: 'Sirkel', isCorrect: false, feedback: 'Sirkel er ikke standard i flytdiagrammer.' },
      ],
      solution: 'Rombe (diamantform) brukes for beslutninger med ja/nei-utganger.',
    },
    {
      id: 'it-1-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er problemet med denne koden?\n\n```python\ni = 1\nwhile i <= 10:\n    print(i)\n```',
      options: [
        { id: 'a', text: 'Feil syntaks', isCorrect: false, feedback: 'Syntaksen er korrekt.' },
        { id: 'b', text: 'i starter på feil verdi', isCorrect: false, feedback: 'Å starte på 1 er greit.' },
        { id: 'c', text: 'Løkken vil aldri stoppe (uendelig løkke)', isCorrect: true },
        { id: 'd', text: 'print() mangler argument', isCorrect: false, feedback: 'print(i) er korrekt.' },
      ],
      solution: 'Variabelen i blir aldri oppdatert inne i løkken, så betingelsen i <= 10 vil alltid være sann.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Webteknologi - HTML og CSS
// ============================================================================

export const CHAPTER_IT_1_4: TextbookChapter = {
  id: 'it-1-4',
  courseId: 'it-1',
  chapterNumber: '4',
  title: 'Webteknologi - HTML og CSS',
  description: 'Lær å lage nettsider med HTML og CSS.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utvikle og publisere nettsteder med multimedieinnhold',
    'bruke standarder for webpublisering',
  ],
  content: [
    {
      id: 'it-1-4-intro',
      type: 'text',
      content: `Nettsider bygges med tre hovedteknologier: HTML for struktur, CSS for utseende, og JavaScript for interaktivitet. I dette kapittelet fokuserer vi på HTML og CSS.`,
    },
    {
      id: 'it-1-4-def-1',
      type: 'definition',
      title: 'HTML',
      content: `HTML (HyperText Markup Language) er et markeringsspråk som brukes til å strukturere innhold på nettsider. HTML bruker tagger som \`<p>\`, \`<h1>\`, \`<div>\` for å definere elementer.`,
    },
    {
      id: 'it-1-4-text-1',
      type: 'text',
      title: 'Grunnleggende HTML-struktur',
      content: `En enkel nettside ser slik ut:

\`\`\`html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Min første nettside</title>
</head>
<body>
    <h1>Velkommen!</h1>
    <p>Dette er min første nettside.</p>
</body>
</html>
\`\`\`

- \`<!DOCTYPE html>\` forteller nettleseren at dette er HTML5
- \`<html>\` er rotelementet
- \`<head>\` inneholder metadata
- \`<body>\` inneholder synlig innhold`,
    },
    {
      id: 'it-1-4-text-2',
      type: 'text',
      title: 'Vanlige HTML-elementer',
      content: `| Element | Beskrivelse |
|---------|-------------|
| \`<h1>\` - \`<h6>\` | Overskrifter (h1 er størst) |
| \`<p>\` | Avsnitt |
| \`<a href="...">\` | Lenke |
| \`<img src="...">\` | Bilde |
| \`<ul>\`, \`<ol>\`, \`<li>\` | Lister |
| \`<div>\` | Gruppering (blokk) |
| \`<span>\` | Gruppering (inline) |
| \`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\` | Semantiske seksjoner |`,
    },
    {
      id: 'it-1-4-example-1',
      type: 'example',
      title: 'HTML-eksempel',
      content: `\`\`\`html
<header>
    <h1>Bloggen min</h1>
    <nav>
        <a href="index.html">Hjem</a>
        <a href="om.html">Om meg</a>
    </nav>
</header>

<main>
    <article>
        <h2>Første innlegg</h2>
        <p>Her er teksten i innlegget.</p>
        <img src="bilde.jpg" alt="Beskrivelse av bildet">
    </article>
</main>

<footer>
    <p>&copy; 2024 Mitt navn</p>
</footer>
\`\`\``,
    },
    {
      id: 'it-1-4-def-2',
      type: 'definition',
      title: 'CSS',
      content: `CSS (Cascading Style Sheets) brukes til å bestemme utseendet på nettsider: farger, skrifttyper, avstander, layout og mer.`,
    },
    {
      id: 'it-1-4-text-3',
      type: 'text',
      title: 'CSS-syntaks',
      content: `CSS består av regler med selektorer og deklarasjoner:

\`\`\`css
selektor {
    egenskap: verdi;
}
\`\`\`

**Eksempel:**
\`\`\`css
h1 {
    color: blue;
    font-size: 24px;
}

p {
    line-height: 1.6;
    margin-bottom: 1em;
}
\`\`\``,
    },
    {
      id: 'it-1-4-text-4',
      type: 'text',
      title: 'CSS-selektorer',
      content: `| Selektor | Eksempel | Velger |
|----------|----------|--------|
| Element | \`p\` | Alle \`<p>\`-elementer |
| Klasse | \`.intro\` | Elementer med \`class="intro"\` |
| ID | \`#header\` | Element med \`id="header"\` |
| Kombinert | \`div p\` | \`<p>\` inne i \`<div>\` |`,
    },
    {
      id: 'it-1-4-example-2',
      type: 'example',
      title: 'CSS-eksempel',
      content: `\`\`\`css
/* Generell styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
}

/* Overskrift */
h1 {
    color: #333;
    border-bottom: 2px solid #007bff;
}

/* Klasse for viktig tekst */
.viktig {
    color: red;
    font-weight: bold;
}

/* ID for hovedinnhold */
#main {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
}
\`\`\``,
    },
    {
      id: 'it-1-4-text-5',
      type: 'text',
      title: 'Koble CSS til HTML',
      content: `Det er tre måter å legge til CSS:

**1. Ekstern fil (anbefalt):**
\`\`\`html
<link rel="stylesheet" href="stil.css">
\`\`\`

**2. I head med style-tag:**
\`\`\`html
<style>
    p { color: blue; }
</style>
\`\`\`

**3. Inline (unngå):**
\`\`\`html
<p style="color: blue;">Tekst</p>
\`\`\``,
    },
    {
      id: 'it-1-4-tip-1',
      type: 'tip',
      content: `Bruk alltid semantiske HTML-elementer som \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\` og \`<footer>\`. Dette gjør koden lettere å forstå og bedre for tilgjengelighet.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står HTML for?',
      options: [
        { id: 'a', text: 'High Tech Modern Language', isCorrect: false, feedback: 'Dette er ikke riktig.' },
        { id: 'b', text: 'HyperText Markup Language', isCorrect: true },
        { id: 'c', text: 'Home Tool Markup Language', isCorrect: false, feedback: 'Dette er ikke riktig.' },
        { id: 'd', text: 'Hyper Transfer Mail Link', isCorrect: false, feedback: 'Dette er ikke riktig.' },
      ],
      solution: 'HTML står for HyperText Markup Language.',
    },
    {
      id: 'it-1-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken tag brukes for den største overskriften i HTML?',
      options: [
        { id: 'a', text: '<header>', isCorrect: false, feedback: '<header> er for sidens toppseksjon.' },
        { id: 'b', text: '<h6>', isCorrect: false, feedback: '<h6> er den minste overskriften.' },
        { id: 'c', text: '<h1>', isCorrect: true },
        { id: 'd', text: '<title>', isCorrect: false, feedback: '<title> er for sidetittelen i nettleserfanen.' },
      ],
      solution: '<h1> er den største overskriften, <h6> er den minste.',
    },
    {
      id: 'it-1-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan velger du et element med klassen "menu" i CSS?',
      options: [
        { id: 'a', text: '#menu', isCorrect: false, feedback: '# brukes for ID, ikke klasse.' },
        { id: 'b', text: '.menu', isCorrect: true },
        { id: 'c', text: 'menu', isCorrect: false, feedback: 'Dette velger et element med taggen <menu>.' },
        { id: 'd', text: '*menu', isCorrect: false, feedback: '* er ikke en klasseselektor.' },
      ],
      solution: 'Punktum (.) foran navnet brukes for å velge klasser i CSS.',
    },
    {
      id: 'it-1-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig måte å koble en ekstern CSS-fil til HTML?',
      options: [
        { id: 'a', text: '<style src="stil.css">', isCorrect: false, feedback: '<style> brukes for intern CSS.' },
        { id: 'b', text: '<link rel="stylesheet" href="stil.css">', isCorrect: true },
        { id: 'c', text: '<css file="stil.css">', isCorrect: false, feedback: '<css> er ikke en gyldig tag.' },
        { id: 'd', text: '<script src="stil.css">', isCorrect: false, feedback: '<script> brukes for JavaScript.' },
      ],
      solution: '<link rel="stylesheet" href="filnavn.css"> i <head> kobler til ekstern CSS.',
    },
    {
      id: 'it-1-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken CSS-regel har høyest spesifisitet?',
      options: [
        { id: 'a', text: 'p { color: red; }', isCorrect: false, feedback: 'Element-selektor har lavest spesifisitet.' },
        { id: 'b', text: '.tekst { color: blue; }', isCorrect: false, feedback: 'Klasse har middels spesifisitet.' },
        { id: 'c', text: '#intro { color: green; }', isCorrect: true },
        { id: 'd', text: 'div p { color: yellow; }', isCorrect: false, feedback: 'To element-selektorer er fortsatt lavere enn ID.' },
      ],
      solution: 'ID-selektorer (#) har høyere spesifisitet enn klasser (.) og elementer.',
    },
  ],
};

// ============================================================================
// Kapittel 5: JavaScript og dynamiske nettsider
// ============================================================================

export const CHAPTER_IT_1_5: TextbookChapter = {
  id: 'it-1-5',
  courseId: 'it-1',
  chapterNumber: '5',
  title: 'JavaScript og dynamiske nettsider',
  description: 'Gjør nettsider interaktive med JavaScript.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utvikle nettsteder med interaktivitet',
    'bruke programmering i webløsninger',
  ],
  content: [
    {
      id: 'it-1-5-intro',
      type: 'text',
      content: `JavaScript er et programmeringsspråk som kjører i nettleseren og gjør det mulig å lage interaktive nettsider. Med JavaScript kan du reagere på brukerhandlinger, endre innhold, validere skjemaer og mye mer.`,
    },
    {
      id: 'it-1-5-def-1',
      type: 'definition',
      title: 'JavaScript',
      content: `JavaScript er et programmeringsspråk som primært brukes til å lage interaktive nettsider. Det kjører i nettleseren og kan manipulere HTML og CSS dynamisk.`,
    },
    {
      id: 'it-1-5-text-1',
      type: 'text',
      title: 'Legge til JavaScript',
      content: `JavaScript legges til i HTML på to måter:

**Intern script:**
\`\`\`html
<script>
    console.log("Hei fra JavaScript!");
</script>
\`\`\`

**Ekstern fil (anbefalt):**
\`\`\`html
<script src="script.js"></script>
\`\`\`

Plasser \`<script>\`-taggen rett før \`</body>\` for best ytelse.`,
    },
    {
      id: 'it-1-5-text-2',
      type: 'text',
      title: 'Variabler i JavaScript',
      content: `\`\`\`javascript
// Moderne måte (anbefalt)
let navn = "Ola";        // Kan endres
const PI = 3.14159;      // Konstant (kan ikke endres)

// Gammel måte (unngå)
var alder = 16;          // Ikke anbefalt lenger
\`\`\`

Bruk \`let\` for variabler som skal endres, og \`const\` for verdier som ikke skal endres.`,
    },
    {
      id: 'it-1-5-text-3',
      type: 'text',
      title: 'DOM-manipulering',
      content: `DOM (Document Object Model) lar JavaScript få tilgang til og endre HTML-elementer:

\`\`\`javascript
// Finne elementer
let overskrift = document.getElementById("tittel");
let knapper = document.querySelectorAll(".btn");

// Endre innhold
overskrift.textContent = "Ny tekst";
overskrift.innerHTML = "<em>Kursiv tekst</em>";

// Endre stil
overskrift.style.color = "blue";
overskrift.style.fontSize = "24px";

// Legge til/fjerne klasser
overskrift.classList.add("aktiv");
overskrift.classList.remove("skjult");
\`\`\``,
    },
    {
      id: 'it-1-5-example-1',
      type: 'example',
      title: 'Hendelseshåndtering',
      content: `JavaScript kan reagere på brukerhandlinger:

**HTML:**
\`\`\`html
<button id="minKnapp">Klikk meg!</button>
<p id="beskjed"></p>
\`\`\`

**JavaScript:**
\`\`\`javascript
let knapp = document.getElementById("minKnapp");
let beskjed = document.getElementById("beskjed");

knapp.addEventListener("click", function() {
    beskjed.textContent = "Du klikket på knappen!";
});
\`\`\`

Vanlige hendelser: \`click\`, \`mouseover\`, \`keydown\`, \`submit\`, \`change\``,
    },
    {
      id: 'it-1-5-text-4',
      type: 'text',
      title: 'Funksjoner',
      content: `Funksjoner grupperer kode som kan gjenbrukes:

\`\`\`javascript
// Vanlig funksjon
function hilsen(navn) {
    return "Hei, " + navn + "!";
}

// Arrow function (moderne syntaks)
const hilsen2 = (navn) => {
    return "Hei, " + navn + "!";
};

// Kort arrow function
const hilsen3 = (navn) => "Hei, " + navn + "!";

// Bruk
console.log(hilsen("Kari"));  // "Hei, Kari!"
\`\`\``,
    },
    {
      id: 'it-1-5-example-2',
      type: 'example',
      title: 'Komplett eksempel: Tellere',
      content: `**HTML:**
\`\`\`html
<p>Antall: <span id="tall">0</span></p>
<button id="pluss">+</button>
<button id="minus">-</button>
\`\`\`

**JavaScript:**
\`\`\`javascript
let teller = 0;
let tallElement = document.getElementById("tall");

document.getElementById("pluss").addEventListener("click", () => {
    teller++;
    tallElement.textContent = teller;
});

document.getElementById("minus").addEventListener("click", () => {
    teller--;
    tallElement.textContent = teller;
});
\`\`\``,
    },
    {
      id: 'it-1-5-tip-1',
      type: 'tip',
      content: `Bruk \`console.log()\` for å skrive ut verdier til konsollen under feilsøking. Åpne utviklerverktøyene i nettleseren med F12.`,
    },
    {
      id: 'it-1-5-warning-1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `- Glemme semikolon (;) på slutten av setninger
- Bruke = i stedet for == eller === for sammenligning
- Prøve å manipulere DOM før siden er lastet
- Stavefeil i element-IDer`,
    },
  ],
  exercises: [
    {
      id: 'it-1-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes JavaScript primært til på nettsider?',
      options: [
        { id: 'a', text: 'Strukturere innhold', isCorrect: false, feedback: 'Det er HTMLs oppgave.' },
        { id: 'b', text: 'Style utseende', isCorrect: false, feedback: 'Det er CSS sin oppgave.' },
        { id: 'c', text: 'Gjøre nettsider interaktive', isCorrect: true },
        { id: 'd', text: 'Lagre data på serveren', isCorrect: false, feedback: 'JavaScript kjører i nettleseren, ikke på serveren (vanligvis).' },
      ],
      solution: 'JavaScript brukes til å legge til interaktivitet og dynamisk oppførsel på nettsider.',
    },
    {
      id: 'it-1-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken metode brukes for å finne et element med en bestemt ID?',
      options: [
        { id: 'a', text: 'document.querySelector()', isCorrect: false, feedback: 'querySelector krever # foran ID.' },
        { id: 'b', text: 'document.getElementById()', isCorrect: true },
        { id: 'c', text: 'document.findById()', isCorrect: false, feedback: 'Denne metoden finnes ikke.' },
        { id: 'd', text: 'document.selectId()', isCorrect: false, feedback: 'Denne metoden finnes ikke.' },
      ],
      solution: 'document.getElementById("idNavn") returnerer elementet med den angitte IDen.',
    },
    {
      id: 'it-1-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom let og const?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'De har ulik oppførsel.' },
        { id: 'b', text: 'let kan endres, const kan ikke endres', isCorrect: true },
        { id: 'c', text: 'const er for tall, let er for tekst', isCorrect: false, feedback: 'Begge kan brukes for alle datatyper.' },
        { id: 'd', text: 'let er gammel syntaks, const er ny', isCorrect: false, feedback: 'Begge ble introdusert i ES6.' },
      ],
      solution: 'Bruk let for variabler som skal endres senere, og const for konstanter som ikke skal endres.',
    },
    {
      id: 'it-1-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan legger du til en klikk-hendelse på en knapp?',
      options: [
        { id: 'a', text: 'knapp.onClick = funksjon()', isCorrect: false, feedback: 'Nesten riktig, men feil syntaks.' },
        { id: 'b', text: 'knapp.addEventListener("click", funksjon)', isCorrect: true },
        { id: 'c', text: 'knapp.click(funksjon)', isCorrect: false, feedback: 'click() utløser klikket, registrerer ikke en lytter.' },
        { id: 'd', text: 'addClick(knapp, funksjon)', isCorrect: false, feedback: 'Denne funksjonen finnes ikke.' },
      ],
      solution: 'addEventListener() er den moderne og anbefalte måten å legge til hendelseslyttere.',
    },
    {
      id: 'it-1-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skjer når denne koden kjøres?\n\n```javascript\nlet x = "5";\nlet y = 2;\nconsole.log(x + y);\n```',
      options: [
        { id: 'a', text: '7', isCorrect: false, feedback: 'JavaScript konverterer ikke automatisk til tall her.' },
        { id: 'b', text: '"52"', isCorrect: true },
        { id: 'c', text: 'Feilmelding', isCorrect: false, feedback: 'Koden kjører uten feil.' },
        { id: 'd', text: 'NaN', isCorrect: false, feedback: 'Strengkonkatenering skjer, ikke matematikk.' },
      ],
      solution: 'Når en streng adderes med et tall, konverteres tallet til streng og de settes sammen: "5" + "2" = "52".',
    },
  ],
};

// ============================================================================
// Kapittel 6: Databaser og datamodellering
// ============================================================================

export const CHAPTER_IT_1_6: TextbookChapter = {
  id: 'it-1-6',
  courseId: 'it-1',
  chapterNumber: '6',
  title: 'Databaser og datamodellering',
  description: 'Forstå hvordan data organiseres og lagres i databaser.',
  estimatedMinutes: 75,
  competenceGoals: [
    'modellere og opprette databaser',
    'utvikle løsninger med kobling mot databaser',
  ],
  content: [
    {
      id: 'it-1-6-intro',
      type: 'text',
      content: `Databaser er systemer for å lagre, organisere og hente ut data på en strukturert måte. De brukes i nesten alle moderne applikasjoner, fra sosiale medier til nettbutikker.`,
    },
    {
      id: 'it-1-6-def-1',
      type: 'definition',
      title: 'Database',
      content: `En database er en organisert samling av data som lagres elektronisk. Et databasehåndteringssystem (DBMS) brukes til å opprette, vedlikeholde og søke i databaser.`,
    },
    {
      id: 'it-1-6-text-1',
      type: 'text',
      title: 'Relasjonsdatabaser',
      content: `En relasjonsdatabase organiserer data i tabeller med rader og kolonner:

| elev_id | fornavn | etternavn | klasse |
|---------|---------|-----------|--------|
| 1 | Ola | Nordmann | 2ITA |
| 2 | Kari | Hansen | 2ITB |
| 3 | Per | Olsen | 2ITA |

- **Tabell**: En samling av relaterte data (f.eks. "elever")
- **Rad**: Ett enkelt dataelement (én elev)
- **Kolonne**: En egenskap/attributt (f.eks. "fornavn")
- **Primærnøkkel**: Unik identifikator for hver rad (f.eks. elev_id)`,
    },
    {
      id: 'it-1-6-def-2',
      type: 'definition',
      title: 'SQL',
      content: `SQL (Structured Query Language) er et språk for å kommunisere med relasjonsdatabaser. Med SQL kan du opprette tabeller, sette inn data, hente ut data og oppdatere data.`,
    },
    {
      id: 'it-1-6-text-2',
      type: 'text',
      title: 'Grunnleggende SQL-kommandoer',
      content: `**Opprette tabell:**
\`\`\`sql
CREATE TABLE elever (
    elev_id INTEGER PRIMARY KEY,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    klasse TEXT
);
\`\`\`

**Sette inn data:**
\`\`\`sql
INSERT INTO elever (fornavn, etternavn, klasse)
VALUES ('Ola', 'Nordmann', '2ITA');
\`\`\`

**Hente data:**
\`\`\`sql
SELECT * FROM elever;
SELECT fornavn, etternavn FROM elever WHERE klasse = '2ITA';
\`\`\`

**Oppdatere data:**
\`\`\`sql
UPDATE elever SET klasse = '3ITA' WHERE elev_id = 1;
\`\`\`

**Slette data:**
\`\`\`sql
DELETE FROM elever WHERE elev_id = 3;
\`\`\``,
    },
    {
      id: 'it-1-6-text-3',
      type: 'text',
      title: 'Datamodellering',
      content: `Før man oppretter en database, lager man ofte en datamodell som viser:

- **Entiteter**: Ting vi vil lagre data om (f.eks. elever, fag, karakterer)
- **Attributter**: Egenskaper ved entitetene (f.eks. navn, fødselsår)
- **Relasjoner**: Sammenhenger mellom entiteter (f.eks. elev tar fag)

**ER-diagram** (Entity-Relationship) er en visuell fremstilling av datamodellen.`,
    },
    {
      id: 'it-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Skoleregister',
      content: `**Entiteter:**
- Elev (elev_id, fornavn, etternavn, klasse_id)
- Klasse (klasse_id, navn, kontaktlærer)
- Fag (fag_id, navn, timer_per_uke)

**Relasjoner:**
- En elev tilhører én klasse (mange-til-én)
- En elev kan ta mange fag (mange-til-mange)

**SQL for mange-til-mange:**
\`\`\`sql
CREATE TABLE elev_fag (
    elev_id INTEGER,
    fag_id INTEGER,
    PRIMARY KEY (elev_id, fag_id)
);
\`\`\``,
    },
    {
      id: 'it-1-6-def-3',
      type: 'definition',
      title: 'Normalisering',
      content: `Normalisering er prosessen med å organisere data for å redusere redundans (gjentakelse) og sikre dataintegritet. Målet er å unngå at samme informasjon lagres flere steder.`,
    },
    {
      id: 'it-1-6-tip-1',
      type: 'tip',
      content: `Når du designer en database, tenk på hvilke spørsmål du vil kunne stille til dataene. Dette hjelper deg å velge riktige tabeller og relasjoner.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en primærnøkkel i en database?',
      options: [
        { id: 'a', text: 'Det første feltet i tabellen', isCorrect: false, feedback: 'Primærnøkkelen trenger ikke være først.' },
        { id: 'b', text: 'En unik identifikator for hver rad', isCorrect: true },
        { id: 'c', text: 'Passordet til databasen', isCorrect: false, feedback: 'Dette har ingenting med primærnøkler å gjøre.' },
        { id: 'd', text: 'Den viktigste kolonnen', isCorrect: false, feedback: 'Primærnøkkel handler om unikhet, ikke viktighet.' },
      ],
      solution: 'En primærnøkkel identifiserer hver rad unikt og kan ikke ha duplikater.',
    },
    {
      id: 'it-1-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken SQL-kommando brukes for å hente data?',
      options: [
        { id: 'a', text: 'GET', isCorrect: false, feedback: 'GET er ikke en SQL-kommando.' },
        { id: 'b', text: 'FETCH', isCorrect: false, feedback: 'FETCH brukes i annen kontekst.' },
        { id: 'c', text: 'SELECT', isCorrect: true },
        { id: 'd', text: 'RETRIEVE', isCorrect: false, feedback: 'RETRIEVE er ikke en SQL-kommando.' },
      ],
      solution: 'SELECT brukes for å hente (velge) data fra tabeller.',
    },
    {
      id: 'it-1-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gjør denne SQL-spørringen?\n\n`SELECT navn FROM produkter WHERE pris > 100;`',
      options: [
        { id: 'a', text: 'Henter alle kolonner fra produkter', isCorrect: false, feedback: 'Bare navn-kolonnen hentes.' },
        { id: 'b', text: 'Henter navn på produkter som koster mer enn 100', isCorrect: true },
        { id: 'c', text: 'Endrer prisen på produkter', isCorrect: false, feedback: 'SELECT henter data, endrer ikke.' },
        { id: 'd', text: 'Sletter produkter som koster over 100', isCorrect: false, feedback: 'DELETE brukes for sletting.' },
      ],
      solution: 'WHERE filtrerer rader basert på en betingelse, her produkter med pris over 100.',
    },
    {
      id: 'it-1-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hensikten med normalisering?',
      options: [
        { id: 'a', text: 'Gjøre databasen raskere', isCorrect: false, feedback: 'Hastighet kan være en bieffekt, men ikke hovedmålet.' },
        { id: 'b', text: 'Redusere redundans og sikre dataintegritet', isCorrect: true },
        { id: 'c', text: 'Kryptere dataene', isCorrect: false, feedback: 'Normalisering handler ikke om sikkerhet.' },
        { id: 'd', text: 'Komprimere dataene', isCorrect: false, feedback: 'Normalisering handler ikke om komprimering.' },
      ],
      solution: 'Normalisering organiserer data slik at informasjon ikke lagres flere steder (redundans) og holder dataene konsistente.',
    },
    {
      id: 'it-1-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken SQL-kommando legger til en ny rad i tabellen "kunder"?',
      options: [
        { id: 'a', text: 'ADD INTO kunder VALUES (...)', isCorrect: false, feedback: 'ADD er ikke riktig nøkkelord.' },
        { id: 'b', text: 'INSERT INTO kunder VALUES (...)', isCorrect: true },
        { id: 'c', text: 'CREATE ROW kunder VALUES (...)', isCorrect: false, feedback: 'CREATE ROW finnes ikke.' },
        { id: 'd', text: 'UPDATE kunder SET VALUES (...)', isCorrect: false, feedback: 'UPDATE endrer eksisterende rader.' },
      ],
      solution: 'INSERT INTO tabellnavn VALUES (...) legger til nye rader i en tabell.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Brukergrensesnitt og design
// ============================================================================

export const CHAPTER_IT_1_7: TextbookChapter = {
  id: 'it-1-7',
  courseId: 'it-1',
  chapterNumber: '7',
  title: 'Brukergrensesnitt og design',
  description: 'Lær prinsipper for god design av brukergrensesnitt.',
  estimatedMinutes: 60,
  competenceGoals: [
    'designe og utvikle brukergrensesnitt',
    'anvende prinsipper for universell utforming',
  ],
  content: [
    {
      id: 'it-1-7-intro',
      type: 'text',
      content: `Et godt brukergrensesnitt (UI) gjør det enkelt og behagelig å bruke en applikasjon. God design handler om å forstå brukernes behov og skape løsninger som er intuitive, tilgjengelige og estetisk tiltalende.`,
    },
    {
      id: 'it-1-7-def-1',
      type: 'definition',
      title: 'UI og UX',
      content: `**UI (User Interface)** er det visuelle grensesnittet brukeren ser og interagerer med: knapper, menyer, farger, skrifttyper.

**UX (User Experience)** er den totale opplevelsen brukeren har med produktet, inkludert hvor lett det er å bruke, hvor effektivt det er, og hvordan det føles.`,
    },
    {
      id: 'it-1-7-text-1',
      type: 'text',
      title: 'Designprinsipper',
      content: `**1. Konsistens**
Bruk samme stiler, farger og oppførsel gjennom hele applikasjonen.

**2. Tilbakemelding**
Gi brukeren beskjed om at handlinger er registrert (f.eks. lastsymbol, bekreftelse).

**3. Synlighet**
Viktige funksjoner skal være lett synlige, ikke gjemt.

**4. Feilforebygging**
Design som reduserer sannsynligheten for feil (f.eks. bekreftelse før sletting).

**5. Fleksibilitet**
La brukere tilpasse og ta snarveier når de blir mer erfarne.`,
    },
    {
      id: 'it-1-7-def-2',
      type: 'definition',
      title: 'Universell utforming',
      content: `Universell utforming betyr å designe produkter slik at de kan brukes av alle, uavhengig av funksjonsevne. På nettsider innebærer dette god kontrast, tastaturnavigering, skjermleservennlighet og mer.`,
    },
    {
      id: 'it-1-7-text-2',
      type: 'text',
      title: 'WCAG-retningslinjer',
      content: `WCAG (Web Content Accessibility Guidelines) er internasjonale retningslinjer for tilgjengelighet:

**Oppfattbar**: Innhold må kunne oppfattes
- Alternativ tekst for bilder
- God kontrast mellom tekst og bakgrunn
- Teksting av video

**Brukbar**: Brukergrensesnittet må kunne brukes
- Tastaturnavigering
- Nok tid til å lese og bruke innhold
- Unngå innhold som kan forårsake anfall

**Forståelig**: Innhold og brukergrensesnitt må være forståelig
- Lesbart språk
- Forutsigbar oppførsel
- Hjelpefunksjoner

**Robust**: Innhold må kunne tolkes av ulike teknologier
- Valid HTML
- Kompatibilitet med hjelpemidler`,
    },
    {
      id: 'it-1-7-text-3',
      type: 'text',
      title: 'Farger og kontrast',
      content: `Farger påvirker lesbarhet og brukeropplevelse:

**Kontrastkrav (WCAG AA):**
- Normal tekst: minimum 4.5:1
- Stor tekst (18pt+): minimum 3:1

**Tips for fargebruk:**
- Ikke bruk farge alene for å formidle informasjon
- Test for fargeblindhet
- Sørg for tilstrekkelig kontrast
- Bruk en begrenset fargepalett`,
    },
    {
      id: 'it-1-7-example-1',
      type: 'example',
      title: 'Tilgjengelig skjema',
      content: `\`\`\`html
<form>
    <label for="epost">E-postadresse:</label>
    <input type="email" id="epost" name="epost"
           required aria-describedby="epost-hjelp">
    <span id="epost-hjelp">Vi deler aldri e-posten din.</span>

    <button type="submit">Send inn</button>
</form>
\`\`\`

**Gode praksiser:**
- \`<label>\` kobles til input med \`for\`-attributtet
- \`aria-describedby\` gir ekstra informasjon til skjermlesere
- Tydelig knappetekst`,
    },
    {
      id: 'it-1-7-text-4',
      type: 'text',
      title: 'Responsive design',
      content: `Nettsider må fungere på alle skjermstørrelser. CSS media queries lar deg tilpasse layout:

\`\`\`css
/* Standard (mobil først) */
.container {
    width: 100%;
    padding: 10px;
}

/* Nettbrett og oppover */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}
\`\`\``,
    },
    {
      id: 'it-1-7-tip-1',
      type: 'tip',
      content: `Test alltid designet ditt med tastaturnavigering (Tab-tasten) og prøv en skjermleser for å forstå hvordan brukere med nedsatt syn opplever siden.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom UI og UX?',
      options: [
        { id: 'a', text: 'Det er det samme', isCorrect: false, feedback: 'UI og UX er relaterte, men ulike konsepter.' },
        { id: 'b', text: 'UI er visuelt design, UX er totalopplevelsen', isCorrect: true },
        { id: 'c', text: 'UI er for nettsider, UX er for apper', isCorrect: false, feedback: 'Begge gjelder alle typer grensesnitt.' },
        { id: 'd', text: 'UX er viktigere enn UI', isCorrect: false, feedback: 'Begge er viktige og henger sammen.' },
      ],
      solution: 'UI handler om det visuelle grensesnittet, mens UX omfatter hele brukeropplevelsen.',
    },
    {
      id: 'it-1-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr universell utforming?',
      options: [
        { id: 'a', text: 'At designet er likt over hele verden', isCorrect: false, feedback: 'Universell utforming handler om tilgjengelighet.' },
        { id: 'b', text: 'At produktet kan brukes av alle, uavhengig av funksjonsevne', isCorrect: true },
        { id: 'c', text: 'At designet fungerer på alle nettlesere', isCorrect: false, feedback: 'Det er en del, men ikke hovedfokus.' },
        { id: 'd', text: 'At man bruker universelle symboler', isCorrect: false, feedback: 'Symboler kan være en del, men ikke definisjonen.' },
      ],
      solution: 'Universell utforming sikrer at alle kan bruke produktet, inkludert personer med funksjonsnedsettelser.',
    },
    {
      id: 'it-1-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er minimumskravet for kontrast mellom normal tekst og bakgrunn ifølge WCAG AA?',
      options: [
        { id: 'a', text: '2:1', isCorrect: false, feedback: 'For lavt kontrast.' },
        { id: 'b', text: '3:1', isCorrect: false, feedback: 'Dette gjelder for stor tekst.' },
        { id: 'c', text: '4.5:1', isCorrect: true },
        { id: 'd', text: '7:1', isCorrect: false, feedback: 'Dette er kravet for AAA-nivå.' },
      ],
      solution: 'WCAG AA krever minimum 4.5:1 kontrast for normal tekst, 3:1 for stor tekst.',
    },
    {
      id: 'it-1-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor bør man ikke bruke farge alene for å formidle informasjon?',
      options: [
        { id: 'a', text: 'Fordi farger er stygt', isCorrect: false, feedback: 'Farger er en viktig del av design.' },
        { id: 'b', text: 'Fordi noen brukere har fargeblindhet', isCorrect: true },
        { id: 'c', text: 'Fordi det bruker mer data', isCorrect: false, feedback: 'Farger påvirker ikke datamengde betydelig.' },
        { id: 'd', text: 'Fordi det er mot reglene', isCorrect: false, feedback: 'Det er en retningslinje, ikke en lov.' },
      ],
      solution: 'Ca. 8% av menn har fargeblindhet. Bruk også tekst, ikoner eller mønstre for viktig informasjon.',
    },
    {
      id: 'it-1-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva brukes media queries til i CSS?',
      options: [
        { id: 'a', text: 'Legge til bilder', isCorrect: false, feedback: 'Bilder legges til med HTML eller CSS bakgrunner.' },
        { id: 'b', text: 'Tilpasse design til ulike skjermstørrelser', isCorrect: true },
        { id: 'c', text: 'Spille av video', isCorrect: false, feedback: 'Video styres med HTML5 video-element.' },
        { id: 'd', text: 'Koble til databaser', isCorrect: false, feedback: 'CSS kan ikke koble til databaser.' },
      ],
      solution: 'Media queries lar deg endre CSS basert på skjermstørrelse, noe som er essensielt for responsive design.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Nettverk og sikkerhet
// ============================================================================

export const CHAPTER_IT_1_8: TextbookChapter = {
  id: 'it-1-8',
  courseId: 'it-1',
  chapterNumber: '8',
  title: 'Nettverk og sikkerhet',
  description: 'Forstå hvordan datanett fungerer og hvordan man beskytter seg.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare hvordan datanett fungerer',
    'beskrive og drøfte tiltak for informasjonssikkerhet',
  ],
  content: [
    {
      id: 'it-1-8-intro',
      type: 'text',
      content: `Internett og lokale nettverk gjør det mulig å dele data og kommunisere over avstander. I dette kapittelet lærer du hvordan nettverk fungerer og hvordan du kan beskytte deg mot digitale trusler.`,
    },
    {
      id: 'it-1-8-def-1',
      type: 'definition',
      title: 'Datanettverk',
      content: `Et datanettverk er to eller flere enheter som er koblet sammen slik at de kan dele ressurser og kommunisere. Nettverk kan variere fra små hjemmenettverk til det globale internett.`,
    },
    {
      id: 'it-1-8-text-1',
      type: 'text',
      title: 'Nettverkstyper',
      content: `**LAN (Local Area Network)**
Lokalt nettverk innenfor et begrenset område som hjem, skole eller kontor.

**WAN (Wide Area Network)**
Nettverk som dekker store geografiske områder. Internett er verdens største WAN.

**WLAN (Wireless LAN)**
Trådløst lokalt nettverk, ofte kalt WiFi.`,
    },
    {
      id: 'it-1-8-text-2',
      type: 'text',
      title: 'Hvordan internett fungerer',
      content: `**IP-adresser**
Hver enhet på internett har en unik IP-adresse (f.eks. 192.168.1.1 eller 2001:db8::1).

**DNS (Domain Name System)**
Oversetter domenenavn (f.eks. vg.no) til IP-adresser.

**HTTP/HTTPS**
Protokoller for å overføre nettsider. HTTPS er kryptert og tryggere.

**TCP/IP**
Grunnleggende protokoller som styrer hvordan data pakkes, sendes og mottas.`,
    },
    {
      id: 'it-1-8-example-1',
      type: 'example',
      title: 'Hva skjer når du besøker en nettside?',
      content: `1. Du skriver "vg.no" i nettleseren
2. Nettleseren spør DNS-serveren om IP-adressen til vg.no
3. DNS-serveren svarer med IP-adressen (f.eks. 195.88.55.16)
4. Nettleseren sender en HTTP/HTTPS-forespørsel til den IP-adressen
5. Serveren svarer med nettsiden (HTML, CSS, bilder, etc.)
6. Nettleseren viser siden`,
    },
    {
      id: 'it-1-8-def-2',
      type: 'definition',
      title: 'Informasjonssikkerhet',
      content: `Informasjonssikkerhet handler om å beskytte data mot uautorisert tilgang, endring og ødeleggelse. De tre hovedprinsippene er:
- **Konfidensialitet**: Bare autoriserte kan se dataene
- **Integritet**: Dataene er korrekte og uendret
- **Tilgjengelighet**: Dataene er tilgjengelige når de trengs`,
    },
    {
      id: 'it-1-8-text-3',
      type: 'text',
      title: 'Vanlige sikkerhetstrusler',
      content: `**Malware (skadelig programvare)**
- Virus: Sprer seg ved å infisere filer
- Trojaner: Ser uskyldig ut, men har skjult skadelig funksjon
- Ransomware: Krypterer filene dine og krever løsepenger

**Phishing**
Falske e-poster eller nettsider som prøver å lure deg til å oppgi sensitiv informasjon.

**Social engineering**
Manipulasjon av mennesker for å få tilgang til systemer eller informasjon.

**DDoS-angrep**
Overbelaster en tjeneste med trafikk slik at den blir utilgjengelig.`,
    },
    {
      id: 'it-1-8-text-4',
      type: 'text',
      title: 'Beskyttelsestiltak',
      content: `**Passord**
- Bruk sterke, unike passord
- Aktiver tofaktorautentisering (2FA)
- Bruk passordbehandler

**Programvare**
- Hold operativsystem og apper oppdatert
- Bruk antivirus
- Last bare ned fra pålitelige kilder

**Nettverk**
- Bruk HTTPS
- Vær forsiktig på offentlige WiFi-nettverk
- Bruk VPN ved behov

**Brannmur**
Overvåker og kontrollerer nettverkstrafikk basert på sikkerhetsregler.`,
    },
    {
      id: 'it-1-8-warning-1',
      type: 'warning',
      title: 'Phishing-advarsler',
      content: `Vær skeptisk til:
- E-poster som haster og krever umiddelbar handling
- Lenker som ser rare ut eller ikke matcher avsender
- Forespørsler om passord eller personlig informasjon
- Grammatiske feil og dårlig formatering`,
    },
    {
      id: 'it-1-8-tip-1',
      type: 'tip',
      content: `Aktiver tofaktorautentisering (2FA) på alle viktige kontoer. Selv om noen får tak i passordet ditt, kan de ikke logge inn uten den ekstra koden.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gjør DNS?',
      options: [
        { id: 'a', text: 'Beskytter mot virus', isCorrect: false, feedback: 'DNS handler om navneoversettelse.' },
        { id: 'b', text: 'Oversetter domenenavn til IP-adresser', isCorrect: true },
        { id: 'c', text: 'Krypterer nettverkstrafikk', isCorrect: false, feedback: 'Kryptering gjøres av andre protokoller.' },
        { id: 'd', text: 'Blokkerer uønsket trafikk', isCorrect: false, feedback: 'Det er brannmurens oppgave.' },
      ],
      solution: 'DNS (Domain Name System) oversetter menneskeleselige domenenavn som vg.no til IP-adresser.',
    },
    {
      id: 'it-1-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom HTTP og HTTPS?',
      options: [
        { id: 'a', text: 'HTTPS er raskere', isCorrect: false, feedback: 'Hastighet er ikke hovedforskjellen.' },
        { id: 'b', text: 'HTTPS er kryptert', isCorrect: true },
        { id: 'c', text: 'HTTP er nyere', isCorrect: false, feedback: 'HTTPS er den nyere og sikrere standarden.' },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'Det er en viktig sikkerhetsforskjell.' },
      ],
      solution: 'HTTPS bruker kryptering (TLS/SSL) for å beskytte data som sendes mellom nettleser og server.',
    },
    {
      id: 'it-1-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er phishing?',
      options: [
        { id: 'a', text: 'En type virus', isCorrect: false, feedback: 'Phishing er sosial manipulasjon, ikke et virus.' },
        { id: 'b', text: 'Forsøk på å lure noen til å oppgi sensitiv informasjon', isCorrect: true },
        { id: 'c', text: 'Å hacke et nettverk', isCorrect: false, feedback: 'Phishing er ikke teknisk hacking.' },
        { id: 'd', text: 'Å stjele WiFi', isCorrect: false, feedback: 'Det handler ikke om WiFi-tyveri.' },
      ],
      solution: 'Phishing bruker falske e-poster eller nettsider for å lure folk til å oppgi passord eller annen sensitiv informasjon.',
    },
    {
      id: 'it-1-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er tofaktorautentisering (2FA)?',
      options: [
        { id: 'a', text: 'Å ha to passord', isCorrect: false, feedback: '2FA bruker ulike typer verifisering.' },
        { id: 'b', text: 'Å logge inn fra to enheter', isCorrect: false, feedback: 'Det handler ikke om antall enheter.' },
        { id: 'c', text: 'Å bruke to ulike typer bekreftelse for innlogging', isCorrect: true },
        { id: 'd', text: 'Å dele innlogging med to personer', isCorrect: false, feedback: 'Dette ville vært usikkert.' },
      ],
      solution: '2FA kombinerer noe du vet (passord) med noe du har (telefon/kode) for økt sikkerhet.',
    },
    {
      id: 'it-1-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er de tre hovedprinsippene i informasjonssikkerhet?',
      options: [
        { id: 'a', text: 'Passord, kryptering, backup', isCorrect: false, feedback: 'Dette er tiltak, ikke prinsipper.' },
        { id: 'b', text: 'Konfidensialitet, integritet, tilgjengelighet', isCorrect: true },
        { id: 'c', text: 'Brannmur, antivirus, VPN', isCorrect: false, feedback: 'Dette er verktøy, ikke prinsipper.' },
        { id: 'd', text: 'Innlogging, utlogging, overvåking', isCorrect: false, feedback: 'Dette er prosesser, ikke prinsipper.' },
      ],
      solution: 'CIA-triaden: Konfidensialitet (hvem kan se), Integritet (er data korrekt), Tilgjengelighet (er data tilgjengelig).',
    },
  ],
};

// ============================================================================
// Kapittel 9: Personvern og etikk
// ============================================================================

export const CHAPTER_IT_1_9: TextbookChapter = {
  id: 'it-1-9',
  courseId: 'it-1',
  chapterNumber: '9',
  title: 'Personvern og etikk',
  description: 'Forstå personvern, opphavsrett og etiske problemstillinger i IT.',
  estimatedMinutes: 60,
  competenceGoals: [
    'drøfte problemstillinger knyttet til personvern og etikk',
    'gjøre rede for gjeldende regelverk innenfor personvern',
  ],
  content: [
    {
      id: 'it-1-9-intro',
      type: 'text',
      content: `Digital teknologi reiser viktige spørsmål om personvern, opphavsrett og etikk. Som IT-kyndige må vi forstå regelverket og ta ansvar for hvordan vi bruker og utvikler teknologi.`,
    },
    {
      id: 'it-1-9-def-1',
      type: 'definition',
      title: 'Personvern',
      content: `Personvern er retten til å bestemme over egne personopplysninger - hvem som kan samle inn, bruke og dele informasjon om deg.`,
    },
    {
      id: 'it-1-9-text-1',
      type: 'text',
      title: 'GDPR og personopplysningsloven',
      content: `GDPR (General Data Protection Regulation) er EUs personvernforordning som også gjelder i Norge gjennom personopplysningsloven.

**Grunnprinsipper:**
- **Lovlighet**: Det må være et rettslig grunnlag for behandling
- **Formålsbegrensning**: Data kan bare brukes til oppgitte formål
- **Dataminimering**: Bare samle inn nødvendige data
- **Riktighet**: Data må være korrekte
- **Lagringsbegrensning**: Ikke lagre lenger enn nødvendig
- **Integritet og konfidensialitet**: Sikre dataene`,
    },
    {
      id: 'it-1-9-text-2',
      type: 'text',
      title: 'Dine rettigheter',
      content: `Som registrert har du rett til:

- **Innsyn**: Se hvilke data som er lagret om deg
- **Retting**: Korrigere feil i dataene
- **Sletting**: Be om at data slettes ("retten til å bli glemt")
- **Dataportabilitet**: Få utlevert dine data i et lesbart format
- **Protest**: Motsette deg visse typer behandling
- **Informasjon**: Bli informert om datainnsamling`,
    },
    {
      id: 'it-1-9-example-1',
      type: 'example',
      title: 'Samtykke i praksis',
      content: `Når du besøker en nettside og blir bedt om å godta cookies, er dette et eksempel på samtykke.

**Gyldig samtykke må være:**
- Frivillig (ikke presset)
- Spesifikt (klart hva du samtykker til)
- Informert (forklart på en forståelig måte)
- Utvetydig (aktivt valg, ikke forhåndsavkrysset)
- Mulig å trekke tilbake`,
    },
    {
      id: 'it-1-9-def-2',
      type: 'definition',
      title: 'Opphavsrett',
      content: `Opphavsrett gir skaperen av et verk (tekst, bilde, musikk, kode) enerett til å bestemme over verket. I Norge varer opphavsretten i 70 år etter opphavspersonens død.`,
    },
    {
      id: 'it-1-9-text-3',
      type: 'text',
      title: 'Lisenser for digital innhold',
      content: `**Opphavsrett (Copyright ©)**
Full beskyttelse - må ha tillatelse for bruk.

**Creative Commons (CC)**
Fleksible lisenser som tillater ulik grad av bruk:
- CC BY: Kan brukes fritt med kreditering
- CC BY-SA: Må dele videre med samme lisens
- CC BY-NC: Kun ikke-kommersiell bruk
- CC0: Ingen restriksjoner (public domain)

**Open Source**
Programvare der kildekoden er åpent tilgjengelig. Eksempler: MIT-lisens, GPL.`,
    },
    {
      id: 'it-1-9-text-4',
      type: 'text',
      title: 'Etiske problemstillinger i IT',
      content: `**Overvåkning og privatliv**
- Hvor mye overvåkning er akseptabelt for sikkerhet?
- Hvem eier dataene dine?

**Algoritmer og diskriminering**
- AI-systemer kan forsterke fordommer i treningsdata
- Hvem har ansvar når algoritmer tar dårlige beslutninger?

**Automatisering og arbeidsplasser**
- Hva skjer med jobber som automatiseres?
- Hvordan sikre rettferdig fordeling av gevinstene?

**Digital avhengighet**
- Design som er ment å gjøre oss avhengige
- Ansvar for barns skjermbruk`,
    },
    {
      id: 'it-1-9-warning-1',
      type: 'warning',
      title: 'Datainnsamling',
      content: `Mange gratistjenester tjener penger på å samle og selge brukerdata. "Hvis tjenesten er gratis, er du produktet." Vær bevisst på hvilke data du deler og med hvem.`,
    },
    {
      id: 'it-1-9-tip-1',
      type: 'tip',
      content: `Når du utvikler programvare, tenk på "Privacy by Design" - bygg inn personvern fra starten, ikke som en ettertanke.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er GDPR?',
      options: [
        { id: 'a', text: 'Et programmeringsspråk', isCorrect: false, feedback: 'GDPR er et regelverk.' },
        { id: 'b', text: 'EUs personvernforordning', isCorrect: true },
        { id: 'c', text: 'En type database', isCorrect: false, feedback: 'GDPR handler om personvern.' },
        { id: 'd', text: 'Et antivirusprogram', isCorrect: false, feedback: 'GDPR er lovgivning.' },
      ],
      solution: 'GDPR (General Data Protection Regulation) er EUs strenge personvernregler som gjelder i hele EØS.',
    },
    {
      id: 'it-1-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gir opphavsretten deg?',
      options: [
        { id: 'a', text: 'Rett til å kopiere andres verk', isCorrect: false, feedback: 'Opphavsrett beskytter mot ulovlig kopiering.' },
        { id: 'b', text: 'Enerett til å bestemme over ditt eget verk', isCorrect: true },
        { id: 'c', text: 'Gratis tilgang til alle verk', isCorrect: false, feedback: 'Opphavsrett gir beskyttelse, ikke fri tilgang.' },
        { id: 'd', text: 'Rett til å selge andres verk', isCorrect: false, feedback: 'Du kan ikke selge andres verk uten tillatelse.' },
      ],
      solution: 'Opphavsretten gir skaperen kontroll over hvordan verket brukes, kopieres og distribueres.',
    },
    {
      id: 'it-1-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kreves for at et samtykke til databehandling skal være gyldig?',
      options: [
        { id: 'a', text: 'Det holder å ha det i brukervilkårene', isCorrect: false, feedback: 'Samtykke må være aktivt og tydelig.' },
        { id: 'b', text: 'Frivillig, spesifikt, informert og utvetydig', isCorrect: true },
        { id: 'c', text: 'Bare at brukeren klikker "OK"', isCorrect: false, feedback: 'Brukeren må forstå hva de samtykker til.' },
        { id: 'd', text: 'At det er på norsk', isCorrect: false, feedback: 'Språk er bare én del av informasjonskravet.' },
      ],
      solution: 'Gyldig samtykke må være frivillig gitt, spesifikt for formålet, basert på tydelig informasjon, og et aktivt valg.',
    },
    {
      id: 'it-1-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr CC BY-lisens?',
      options: [
        { id: 'a', text: 'Verket kan ikke brukes av andre', isCorrect: false, feedback: 'CC-lisenser tillater bruk.' },
        { id: 'b', text: 'Verket kan brukes fritt hvis du krediterer opphavspersonen', isCorrect: true },
        { id: 'c', text: 'Verket er gratis å kjøpe', isCorrect: false, feedback: 'CC handler om bruksrettigheter, ikke pris.' },
        { id: 'd', text: 'Verket tilhører Carbon Copy', isCorrect: false, feedback: 'CC står for Creative Commons.' },
      ],
      solution: 'CC BY (Creative Commons Attribution) lar deg bruke, dele og endre verket så lenge du krediterer skaperen.',
    },
    {
      id: 'it-1-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "retten til å bli glemt"?',
      options: [
        { id: 'a', text: 'Retten til å glemme passord', isCorrect: false, feedback: 'Dette handler om persondata, ikke passord.' },
        { id: 'b', text: 'Retten til anonymitet på internett', isCorrect: false, feedback: 'Det handler spesifikt om sletting av data.' },
        { id: 'c', text: 'Retten til å kreve at personopplysninger slettes', isCorrect: true },
        { id: 'd', text: 'Retten til å slette andres data', isCorrect: false, feedback: 'Du kan bare kreve sletting av egne data.' },
      ],
      solution: 'Under GDPR har du rett til å be om at virksomheter sletter personopplysninger de har lagret om deg.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Prosjektarbeid og dokumentasjon
// ============================================================================

export const CHAPTER_IT_1_10: TextbookChapter = {
  id: 'it-1-10',
  courseId: 'it-1',
  chapterNumber: '10',
  title: 'Prosjektarbeid og dokumentasjon',
  description: 'Lær å planlegge, gjennomføre og dokumentere IT-prosjekter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'planlegge og gjennomføre IT-prosjekter',
    'dokumentere og vurdere eget arbeid',
  ],
  content: [
    {
      id: 'it-1-10-intro',
      type: 'text',
      content: `Prosjektarbeid er en sentral del av IT-faget. Du lærer å planlegge, samarbeide, dokumentere og levere fungerende løsninger. God prosjektmetodikk hjelper deg å holde oversikt og levere kvalitet.`,
    },
    {
      id: 'it-1-10-text-1',
      type: 'text',
      title: 'Prosjektfaser',
      content: `Et IT-prosjekt følger vanligvis disse fasene:

**1. Planlegging**
- Definere mål og krav
- Lage tidsplan
- Fordele oppgaver

**2. Analyse og design**
- Forstå problemet
- Designe løsningen
- Lage prototyper

**3. Utvikling**
- Skrive kode
- Teste underveis
- Løse problemer

**4. Testing**
- Systematisk testing
- Feilretting
- Brukertesting

**5. Levering og evaluering**
- Dokumentere
- Presentere
- Reflektere over læring`,
    },
    {
      id: 'it-1-10-def-1',
      type: 'definition',
      title: 'Smidig utvikling (Agile)',
      content: `Smidig utvikling er en tilnærming der man jobber i korte sykluser (sprinter), leverer fungerende deler underveis, og tilpasser seg endringer. Scrum og Kanban er populære smidige metoder.`,
    },
    {
      id: 'it-1-10-text-2',
      type: 'text',
      title: 'Verktøy for prosjektstyring',
      content: `**Oppgavehåndtering**
- Trello: Visuelle tavler med kort
- GitHub Issues: Integrert med kode
- Notion: Kombinerer notater og oppgaver

**Versjonskontroll**
- Git: Sporer endringer i kode
- GitHub/GitLab: Nettbasert samarbeid

**Kommunikasjon**
- Slack/Discord: Chat og kanaler
- Teams: Videomøter og deling`,
    },
    {
      id: 'it-1-10-example-1',
      type: 'example',
      title: 'Git-arbeidsflyt',
      content: `\`\`\`bash
# Klone et prosjekt
git clone https://github.com/bruker/prosjekt.git

# Lage en ny gren for en funksjon
git checkout -b ny-funksjon

# Gjøre endringer og lagre
git add .
git commit -m "Legger til innloggingsside"

# Pushe til GitHub
git push origin ny-funksjon

# Lage pull request på GitHub for gjennomgang
\`\`\``,
    },
    {
      id: 'it-1-10-text-3',
      type: 'text',
      title: 'Dokumentasjon',
      content: `God dokumentasjon er viktig for at andre (og du selv senere) skal forstå prosjektet:

**README-fil**
- Beskrivelse av prosjektet
- Installasjonsinstrukser
- Brukerveiledning

**Kodekommentarer**
- Forklare komplisert logikk
- Dokumentere funksjoner
- Ikke kommenter det åpenbare

**Teknisk dokumentasjon**
- Arkitekturbeskrivelse
- API-dokumentasjon
- Databaseskjema`,
    },
    {
      id: 'it-1-10-example-2',
      type: 'example',
      title: 'README-eksempel',
      content: `\`\`\`markdown
# Prosjektnavn

Kort beskrivelse av hva prosjektet gjør.

## Installasjon

1. Klon repositoriet: \`git clone ...\`
2. Installer avhengigheter: \`npm install\`
3. Start serveren: \`npm start\`

## Bruk

Beskriv hvordan man bruker applikasjonen.

## Teknologier

- HTML/CSS
- JavaScript
- Node.js

## Bidragsytere

- Navn Navnesen
\`\`\``,
    },
    {
      id: 'it-1-10-text-4',
      type: 'text',
      title: 'Testing',
      content: `**Manuell testing**
Test funksjonalitet ved å bruke applikasjonen selv.

**Automatiserte tester**
Kode som tester annen kode automatisk.

**Brukertesting**
La andre prøve løsningen og gi tilbakemelding.

**Testplan**
Dokument som beskriver hva som skal testes og hvordan.`,
    },
    {
      id: 'it-1-10-text-5',
      type: 'text',
      title: 'Presentasjon og vurdering',
      content: `**Presentasjon av prosjekt**
- Vis fungerende løsning
- Forklar tekniske valg
- Demonstrer hovedfunksjoner
- Vær ærlig om utfordringer

**Egenvurdering**
- Hva fungerte bra?
- Hva var utfordrende?
- Hva ville du gjort annerledes?
- Hva har du lært?`,
    },
    {
      id: 'it-1-10-tip-1',
      type: 'tip',
      content: `Start med en enkel, fungerende versjon (MVP - Minimum Viable Product) og bygg ut derfra. Det er bedre å ha noe som fungerer enn noe ambisiøst som ikke blir ferdig.`,
    },
  ],
  exercises: [
    {
      id: 'it-1-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med versjonskontroll (Git)?',
      options: [
        { id: 'a', text: 'Å kjøre kode raskere', isCorrect: false, feedback: 'Git påvirker ikke ytelse.' },
        { id: 'b', text: 'Å spore endringer og samarbeide om kode', isCorrect: true },
        { id: 'c', text: 'Å designe brukergrensesnitt', isCorrect: false, feedback: 'Git er for kodeversjonering.' },
        { id: 'd', text: 'Å teste applikasjoner', isCorrect: false, feedback: 'Testing gjøres med andre verktøy.' },
      ],
      solution: 'Git lar deg spore alle endringer i koden, gå tilbake til tidligere versjoner, og samarbeide med andre.',
    },
    {
      id: 'it-1-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva bør en README-fil inneholde?',
      options: [
        { id: 'a', text: 'Bare koden', isCorrect: false, feedback: 'Koden er i egne filer.' },
        { id: 'b', text: 'Prosjektbeskrivelse og brukerveiledning', isCorrect: true },
        { id: 'c', text: 'Personlige notater', isCorrect: false, feedback: 'README er for prosjektinformasjon.' },
        { id: 'd', text: 'Testresultater', isCorrect: false, feedback: 'Test har egne rapporter.' },
      ],
      solution: 'README gir en oversikt over prosjektet, hvordan det installeres og brukes.',
    },
    {
      id: 'it-1-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner smidig (agile) utvikling?',
      options: [
        { id: 'a', text: 'Alt planlegges i detalj på forhånd', isCorrect: false, feedback: 'Smidig tilpasser seg underveis.' },
        { id: 'b', text: 'Man jobber i korte sykluser og tilpasser seg endringer', isCorrect: true },
        { id: 'c', text: 'Man leverer kun ved prosjektslutt', isCorrect: false, feedback: 'Smidig leverer underveis.' },
        { id: 'd', text: 'Dokumentasjon er viktigere enn fungerende programvare', isCorrect: false, feedback: 'Smidig prioriterer fungerende løsninger.' },
      ],
      solution: 'Smidig utvikling fokuserer på iterasjoner, tilpasning og hyppige leveranser av fungerende programvare.',
    },
    {
      id: 'it-1-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en pull request (PR)?',
      options: [
        { id: 'a', text: 'En forespørsel om å laste ned kode', isCorrect: false, feedback: 'Det handler om å slå sammen kode.' },
        { id: 'b', text: 'En forespørsel om å slå sammen kodeendringer', isCorrect: true },
        { id: 'c', text: 'En feilmelding i Git', isCorrect: false, feedback: 'PR er en samarbeidsmekanisme.' },
        { id: 'd', text: 'En automatisk test', isCorrect: false, feedback: 'PR er for kodegjennomgang.' },
      ],
      solution: 'En pull request ber om at kodeendringer i en gren skal gjennomgås og slås sammen med hovedgrenen.',
    },
    {
      id: 'it-1-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er MVP (Minimum Viable Product)?',
      options: [
        { id: 'a', text: 'Det beste mulige produkt', isCorrect: false, feedback: 'MVP er minimalt, ikke maksimalt.' },
        { id: 'b', text: 'En enkel versjon med kjernefunksjonalitet', isCorrect: true },
        { id: 'c', text: 'En prototype uten kode', isCorrect: false, feedback: 'MVP er fungerende, om enn enkel.' },
        { id: 'd', text: 'Den endelige leveransen', isCorrect: false, feedback: 'MVP er startpunktet, ikke slutten.' },
      ],
      solution: 'MVP er den enkleste versjonen av produktet som kan leveres og gi verdi, og brukes som utgangspunkt for videre utvikling.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const IT_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_1,
  CHAPTER_IT_1_2,
  CHAPTER_IT_1_3,
  CHAPTER_IT_1_4,
  CHAPTER_IT_1_5,
  CHAPTER_IT_1_6,
  CHAPTER_IT_1_7,
  CHAPTER_IT_1_8,
  CHAPTER_IT_1_9,
  CHAPTER_IT_1_10,
];

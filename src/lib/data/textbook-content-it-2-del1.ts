/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 1: Objektorientert programmering – grunnlag (Kapittel 1.1–1.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er objektorientert programmering?
// ============================================================================

export const CHAPTER_IT_2_1_1: TextbookChapter = {
  id: 'it-2-1-1',
  courseId: 'it-2',
  title: 'Hva er objektorientert programmering?',
  description: 'En introduksjon til OOP-paradigmet, sammenligning med prosedyrell programmering, og historisk utvikling.',
  section: 'Seksjon 1: Objektorientert programmering – grunnlag',
  previousChapterId: undefined,
  nextChapterId: 'it-2-1-2',
  estimatedMinutes: 50,
  keyTerms: [
    'Objektorientert programmering (OOP)',
    'Prosedyrell programmering',
    'Paradigme',
    'Modularitet',
    'Gjenbrukbarhet',
    'Abstraksjon',
    'Simula',
    'Java'
  ],
  content: [
    {
      id: 'it2-1-1-intro',
      type: 'text',
      content: `# Hva er objektorientert programmering?

Velkommen til IT 2! I dette kurset skal du lære å programmere på en ny måte – en måte som gjør det enklere å bygge store, komplekse programmer. Metoden kalles **objektorientert programmering** (OOP), og den brukes i de fleste moderne programmeringsspråk.

Kanskje lurer du på: Hva betyr egentlig "objektorientert"? Hvorfor kan vi ikke bare fortsette å programmere som vi gjorde i IT 1? I dette kapittelet skal vi utforske hva OOP er, hvorfor det finnes, og hvordan det skiller seg fra den prosedyrelle programmeringen du er vant til.`
    },
    {
      id: 'it2-1-1-def-1',
      type: 'definition',
      title: 'Paradigmer i programmering',
      content: `Et **programmeringsparadigme** er en grunnleggende stil eller filosofi for hvordan vi organiserer og strukturerer kode. De to viktigste paradigmene du møter er:

- **Prosedyrell programmering**: Koden organiseres i funksjoner som utfører oppgaver i en bestemt rekkefølge
- **Objektorientert programmering (OOP)**: Koden organiseres rundt objekter som representerer ting i den virkelige verden eller i programmet`
    },
    {
      id: 'it2-1-1-text-1',
      type: 'text',
      content: `## Fra prosedyrer til objekter

I IT 1 programmerte du hovedsakelig prosedyrelt. Du skrev funksjoner som gjorde ting, lagret data i variabler og lister, og kalte funksjonene når du trengte dem. Dette fungerer fint for små programmer, men etter hvert som programmene blir større, oppstår noen utfordringer:

**Problem 1: Data og funksjoner er atskilt**
Når du har mange funksjoner og variabler, er det lett å miste oversikten over hvilke funksjoner som jobber med hvilke data.

**Problem 2: Vanskelig å gjenbruke kode**
Hvis du vil ha to "spillere" i et spill, må du lage separate variabler for hver (spiller1_poeng, spiller2_poeng, osv.).

**Problem 3: Kompleksiteten vokser fort**
Jo flere funksjoner du legger til, jo vanskeligere blir det å holde orden på hva som hører sammen.

Objektorientert programmering løser disse problemene ved å samle relatert data og funksjoner i **objekter**.`
    },
    {
      id: 'it2-1-1-example-1',
      type: 'example',
      title: 'Sammenligning: Prosedyrell vs. objektorientert',
      content: `La oss se på et eksempel som illustrerer forskjellen. Vi skal lage et enkelt program som håndterer en bankkonto.

**Prosedyrell tilnærming:**

\`\`\`python
# Data lagres i variabler
kontonummer = "12345678"
saldo = 1000
eier = "Kari Nordmann"

# Funksjoner jobber med dataene
def sett_inn(belop):
    global saldo
    saldo += belop

def ta_ut(belop):
    global saldo
    if belop <= saldo:
        saldo -= belop
        return True
    return False

def vis_saldo():
    print(f"Saldo for konto {kontonummer}: {saldo} kr")

# Bruk
sett_inn(500)
ta_ut(200)
vis_saldo()
\`\`\`

**Objektorientert tilnærming:**

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, eier, startsaldo=0):
        self.kontonummer = kontonummer
        self.saldo = startsaldo
        self.eier = eier

    def sett_inn(self, belop):
        self.saldo += belop

    def ta_ut(self, belop):
        if belop <= self.saldo:
            self.saldo -= belop
            return True
        return False

    def vis_saldo(self):
        print(f"Saldo for konto {self.kontonummer}: {self.saldo} kr")

# Bruk
konto = Bankkonto("12345678", "Kari Nordmann", 1000)
konto.sett_inn(500)
konto.ta_ut(200)
konto.vis_saldo()
\`\`\`

**Fordelen?** I den objektorienterte versjonen er alt som hører til en bankkonto samlet på ett sted. Vi kan enkelt lage flere kontoer, og hver konto har sine egne data. Metodene (funksjonene) er "bundet til" objektet.`
    },
    {
      id: 'it2-1-1-exercise-1',
      type: 'exercise',
      title: 'Identifiser paradigme',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hvilket paradigme brukes i følgende kodesnutt?\n\n```python\ndef beregn_areal(lengde, bredde):\n    return lengde * bredde\n\nlengde = 5\nbredde = 3\nareal = beregn_areal(lengde, bredde)\nprint(f"Areal: {areal}")\n```',
      options: [
        'Objektorientert programmering',
        'Prosedyrell programmering',
        'Funksjonell programmering',
        'Logisk programmering'
      ],
      correctAnswer: 1,
      explanation: 'Dette er prosedyrell programmering. Vi har en funksjon som tar inn data og returnerer et resultat, men data og funksjon er ikke samlet i et objekt.'
    },
    {
      id: 'it2-1-1-def-2',
      type: 'definition',
      title: 'Grunnbegreper i OOP',
      content: `Når vi snakker om objektorientert programmering, møter du på noen kjernebegreper:

- **Klasse**: En mal eller oppskrift for å lage objekter (som en kakeform)
- **Objekt**: En konkret instans av en klasse (som en ferdigbakt kake)
- **Attributt**: Data som tilhører et objekt (f.eks. kontonummer, saldo)
- **Metode**: En funksjon som tilhører et objekt (f.eks. sett_inn, ta_ut)

Disse begrepene kommer vi tilbake til i detalj i de neste kapitlene.`
    },
    {
      id: 'it2-1-1-text-2',
      type: 'text',
      content: `## Historien bak OOP

Objektorientert programmering er ikke noe nytt. Faktisk ble det første OOP-språket, **Simula**, utviklet i Norge på 1960-tallet av Ole-Johan Dahl og Kristen Nygaard ved Norsk Regnesentral. De ville simulere komplekse systemer (derav navnet "Simula") og trengte en bedre måte å organisere kode på.

På 1970- og 80-tallet utviklet flere språk OOP-konseptet videre:
- **Smalltalk** (1972) – et rent objektorientert språk
- **C++** (1983) – la til OOP i C-språket
- **Java** (1995) – populariserte OOP for nettet

I dag støtter de fleste moderne språk OOP: Python, JavaScript, C#, Ruby, Swift, Kotlin – listen er lang. Selv om ikke alle programmer skrives objektorientert, er det en svært viktig ferdighet for moderne utviklere.`
    },
    {
      id: 'it2-1-1-exercise-2',
      type: 'exercise',
      title: 'Norsk OOP-historie',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hvilket programmeringsspråk regnes som det første objektorienterte språket, og ble utviklet i Norge?',
      options: [
        'Java',
        'Python',
        'Simula',
        'C++'
      ],
      correctAnswer: 2,
      explanation: 'Simula ble utviklet av Ole-Johan Dahl og Kristen Nygaard på 1960-tallet i Norge, og regnes som det første objektorienterte programmeringsspråket.'
    },
    {
      id: 'it2-1-1-text-3',
      type: 'text',
      content: `## Fordelene med OOP

Hvorfor har objektorientert programmering blitt så populært? Det er flere grunner:

**1. Modularitet**
Koden deles inn i selvstendige moduler (klasser). Hver klasse har et klart ansvar, noe som gjør det lettere å forstå og vedlikeholde koden.

**2. Gjenbrukbarhet**
Når du har laget en god klasse, kan du gjenbruke den i mange programmer. Du kan også utvide klasser (arv) uten å endre den opprinnelige koden.

**3. Vedlikeholdbarhet**
Hvis du oppdager en feil i hvordan bankkonto-logikken fungerer, trenger du bare å fikse det på ett sted – i Bankkonto-klassen. Alt annet fungerer fortsatt.

**4. Abstraksjon**
Du kan skjule kompleksitet. Brukeren av en Bankkonto-klasse trenger ikke å vite hvordan saldo lagres eller hvordan renter beregnes – de kaller bare metodene.

**5. Naturlig modellering**
OOP gjør det lettere å modellere virkelige ting. En app for dyrehospital kan ha klasser som Hund, Katt, Behandling, Veterinær – det følger den naturlige strukturen.`
    },
    {
      id: 'it2-1-1-example-2',
      type: 'example',
      title: 'Gjenbruk av klasser',
      content: `La oss si du har laget en Bankkonto-klasse. Senere vil du lage en Sparekonto som har de samme grunnfunksjonene, men også beregner renter. Med OOP kan du bygge videre på det du allerede har:

\`\`\`python
# Original klasse
class Bankkonto:
    def __init__(self, kontonummer, eier, startsaldo=0):
        self.kontonummer = kontonummer
        self.saldo = startsaldo
        self.eier = eier

    def sett_inn(self, belop):
        self.saldo += belop

    def ta_ut(self, belop):
        if belop <= self.saldo:
            self.saldo -= belop
            return True
        return False

# Utvidet klasse som arver fra Bankkonto
class Sparekonto(Bankkonto):
    def __init__(self, kontonummer, eier, startsaldo=0, rentesats=0.02):
        super().__init__(kontonummer, eier, startsaldo)
        self.rentesats = rentesats

    def legg_til_renter(self):
        renter = self.saldo * self.rentesats
        self.sett_inn(renter)
        print(f"La til {renter:.2f} kr i renter")

# Bruk
sparekonto = Sparekonto("87654321", "Ola Nordmann", 5000, 0.03)
sparekonto.legg_til_renter()  # La til 150.00 kr i renter
\`\`\`

Legg merke til at Sparekonto **arver** alle metodene fra Bankkonto (sett_inn, ta_ut), men legger til ny funksjonalitet (legg_til_renter). Dette er gjenbruk i praksis!`
    },
    {
      id: 'it2-1-1-exercise-3',
      type: 'exercise',
      title: 'OOP-fordeler',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hvilken av følgende er IKKE en hovedfordel med objektorientert programmering?',
      options: [
        'Bedre gjenbruk av kode',
        'Enklere vedlikehold av store programmer',
        'Raskere kjøretid enn prosedyrell kode',
        'Naturlig modellering av virkelige konsepter'
      ],
      correctAnswer: 2,
      explanation: 'OOP gir ikke nødvendigvis raskere kjøretid – fordelen ligger i bedre struktur, gjenbruk og vedlikehold. Kjøretiden avhenger mer av algoritmer og implementasjon.'
    },
    {
      id: 'it2-1-1-text-4',
      type: 'text',
      content: `## Når bør du bruke OOP?

Objektorientert programmering er kraftig, men det er ikke alltid det beste valget. Her er noen retningslinjer:

**Bruk OOP når:**
- Programmet er stort og komplekst
- Du jobber med data som naturlig kan grupperes (f.eks. personer, produkter, kjøretøy)
- Du trenger å gjenbruke kode på tvers av prosjekter
- Flere utviklere jobber på samme prosjekt

**Prosedyrell kode kan være bedre når:**
- Programmet er lite og enkelt (et par dusin linjer)
- Du skriver et enkelt skript som kjøres én gang
- Ytelse er kritisk og du vil unngå overhead

I IT 2 fokuserer vi på OOP fordi det er den dominerende stilen i moderne utvikling, og fordi det lærer deg å tenke strukturert om komplekse problemer.`
    },
    {
      id: 'it2-1-1-exercise-4',
      type: 'exercise',
      title: 'Velg riktig tilnærming',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Du skal lage et program som simulerer et bibliotek med bøker, lånere, utlån og reservasjoner. Programmet skal brukes av 5 ansatte og skal kunne håndtere tusenvis av bøker.\n\nForklár hvorfor objektorientert programmering er en god tilnærming for dette prosjektet. Nevn minst tre konkrete fordeler.',
      hint: 'Tenk på hvor mange forskjellige "ting" (entiteter) som finnes i systemet, og hvordan de henger sammen.',
      answer: `Objektorientert programmering er en god tilnærming fordi:

1. **Naturlig modellering**: Systemet har tydelige entiteter som kan modelleres som klasser – Bok, Låner, Utlån, Reservasjon. Dette gjør koden lettere å forstå og følger den virkelige strukturen.

2. **Gjenbruk og utvidbarhet**: Vi kan lage grunnklasser (f.eks. Bok) og deretter spesialisere dem (Lydbok, Ebok) uten å endre eksisterende kode. Dette er viktig i et system som skal vokse.

3. **Vedlikehold**: Med mange ansatte som bruker systemet, vil det være behov for endringer og feilrettinger. OOP gjør det lettere å endre en klasse (f.eks. hvordan utlån fungerer) uten å påvirke resten av systemet.

4. **Innkapsling**: Vi kan beskytte sensitive data (f.eks. at en bok ikke skal kunne lånes ut hvis den allerede er utlånt) ved å skjule intern logikk i klasser.`
    },
    {
      id: 'it2-1-1-text-5',
      type: 'text',
      content: `## OOP i Python

I dette kurset bruker vi Python for å lære OOP. Python støtter både prosedyrell og objektorientert programmering, noe som gjør det til et godt undervisningsspråk.

Python-syntaksen for OOP er ren og enkel:
- Vi bruker \`class\` for å definere en klasse
- Vi bruker \`__init__\` som konstruktør (oppsett ved opprettelse)
- Vi bruker \`self\` for å referere til objektet selv

Her er et minimalt eksempel:

\`\`\`python
class Hund:
    def __init__(self, navn):
        self.navn = navn

    def bjeff(self):
        print(f"{self.navn} sier: Voff!")

# Lag et objekt
min_hund = Hund("Fido")
min_hund.bjeff()  # Fido sier: Voff!
\`\`\`

I de neste kapitlene skal vi dykke dypere inn i hvordan klasser og objekter fungerer.`
    },
    {
      id: 'it2-1-1-exercise-5',
      type: 'exercise',
      title: 'Første klasse',
      difficulty: 'easy',
      exerciseType: 'classic',
      question: 'Skriv en enkel klasse `Bil` som har attributten `merke` og metoden `start()` som skriver ut "Bilen starter". Lag deretter et objekt av klassen og kall metoden.',
      hint: 'Husk å bruke __init__ for å sette attributter, og self for å referere til objektet.',
      answer: `\`\`\`python
class Bil:
    def __init__(self, merke):
        self.merke = merke

    def start(self):
        print("Bilen starter")

# Lag objekt og kall metoden
min_bil = Bil("Toyota")
min_bil.start()  # Skriver ut: Bilen starter
\`\`\`

Forklaring:
- __init__ er konstruktøren som kjøres når vi lager et objekt
- self.merke lagrer merket som en attributt på objektet
- start() er en metode som alle Bil-objekter har
- min_bil er et objekt (instans) av Bil-klassen`
    },
    {
      id: 'it2-1-1-summary',
      type: 'summary',
      title: 'Oppsummering',
      content: `I dette kapittelet har du lært:

- **Programmeringsparadigmer**: Prosedyrell programmering organiserer kode i funksjoner, mens objektorientert programmering organiserer kode rundt objekter
- **OOP-historie**: Simula var det første OOP-språket, utviklet i Norge på 1960-tallet
- **Hovedfordelene med OOP**: Modularitet, gjenbrukbarhet, vedlikeholdbarhet, abstraksjon og naturlig modellering
- **Når bruke OOP**: Best for store, komplekse programmer med mange sammenheng entiteter
- **Python og OOP**: Python støtter OOP med \`class\`, \`__init__\` og \`self\`

I neste kapittel skal vi dykke dypere inn i hvordan klasser og objekter fungerer i praksis.`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-1-1-exercise-6',
      type: 'exercise',
      title: 'Sammenlign tilnærminger',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Du skal lage et enkelt program som holder styr på studenters navn og karakterer.\n\na) Skriv pseudokode for en prosedyrell tilnærming (med variabler og funksjoner).\n\nb) Skriv pseudokode for en objektorientert tilnærming (med en Student-klasse).\n\nc) Hvilket valg ville du gjort hvis programmet skulle håndtere 1000 studenter? Begrunn.',
      hint: 'Pseudokode trenger ikke være komplett Python – bruk norsk og vis strukturen.',
      answer: `a) **Prosedyrell tilnærming:**
\`\`\`
studenter_navn = ["Kari", "Ola", "Emma"]
studenter_karakterer = [5, 4, 6]

funksjon legg_til_student(navn, karakter):
    legg navn til studenter_navn
    legg karakter til studenter_karakterer

funksjon finn_gjennomsnitt():
    returner gjennomsnitt av studenter_karakterer
\`\`\`

b) **Objektorientert tilnærming:**
\`\`\`
klasse Student:
    attributter: navn, karakter

    metode __init__(navn, karakter):
        sett self.navn = navn
        sett self.karakter = karakter

studenter = []  # liste med Student-objekter

funksjon legg_til_student(navn, karakter):
    lag nytt Student-objekt
    legg til i studenter-listen

funksjon finn_gjennomsnitt():
    regn ut gjennomsnitt av alle student.karakter
\`\`\`

c) **Valg for 1000 studenter:**
Jeg ville valgt den objektorienterte tilnærmingen fordi:
- Hver student er en naturlig enhet med tilhørende data
- Det blir lettere å legge til flere egenskaper senere (f.eks. adresse, studiepoeng)
- Vi kan legge til metoder på Student-klassen (f.eks. beregn_snitt_for_denne_studenten)
- Koden blir mer oversiktlig – én liste med Student-objekter er enklere enn mange parallelle lister`
    },
    {
      id: 'it2-1-1-exercise-7',
      type: 'exercise',
      title: 'Identifiser klasser',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Du skal lage et booking-system for et kino. Systemet skal håndtere filmer, forestillinger, billetter, kunder og saler.\n\nIdentifiser minst 4 klasser som ville være naturlige i et slikt system. For hver klasse, list opp 2-3 attributter og 1-2 metoder.',
      hint: 'Tenk på hvilke "ting" eller entiteter som finnes i virkeligheten på et kino.',
      answer: `**Forslag til klasser:**

1. **Film**
   - Attributter: tittel, varighet, sjanger, aldersgrense
   - Metoder: vis_info(), er_egnet_for(alder)

2. **Forestilling**
   - Attributter: film, tidspunkt, sal, ledige_plasser
   - Metoder: reserver_billett(), er_fullbooket()

3. **Billett**
   - Attributter: forestilling, radnummer, setenummer, pris
   - Metoder: skriv_ut(), avbestill()

4. **Kunde**
   - Attributter: navn, epost, telefon, medlemsnummer
   - Metoder: kjop_billett(), vis_mine_billetter()

5. **Sal** (bonus)
   - Attributter: salnummer, antall_rader, seter_per_rad
   - Metoder: vis_seteplan(), er_ledig(rad, sete)

Denne strukturen gjør det enkelt å uttrykke relasjoner: En Forestilling tilhører en Film og foregår i en Sal. En Billett er knyttet til en Forestilling og en Kunde. Dette er kjernen i objektorientert modellering.`
    },
    {
      id: 'it2-1-1-exercise-8',
      type: 'exercise',
      title: 'OOP eller ikke?',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Du skal lage et skript som konverterer temperaturer fra Celsius til Fahrenheit. Skriptet tar inn én verdi, gjør beregningen, og skriver ut resultatet.\n\nHvilken tilnærming er mest hensiktsmessig?',
      options: [
        'Objektorientert – lag en Temperatur-klasse med konverteringsmetoder',
        'Prosedyrell – lag en enkel funksjon som returnerer konvertert verdi',
        'Objektorientert – lag separate klasser for Celsius og Fahrenheit',
        'Prosedyrell – bruk globale variabler og print-setninger'
      ],
      correctAnswer: 1,
      explanation: 'For et enkelt, lite skript som gjør én beregning, er en prosedyrell tilnærming med en funksjon mest hensiktsmessig. OOP ville være overkill her og gjøre koden unødig kompleks. Alternativ 1 og 3 ville fungert, men er ikke den enkleste løsningen for dette problemet.'
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Klasser og objekter
// ============================================================================

export const CHAPTER_IT_2_1_2: TextbookChapter = {
  id: 'it-2-1-2',
  courseId: 'it-2',
  title: 'Klasser og objekter',
  description: 'Lær å definere klasser, bruke konstruktører, lage attributter og metoder, og forstå hva self betyr.',
  section: 'Seksjon 1: Objektorientert programmering – grunnlag',
  previousChapterId: 'it-2-1-1',
  nextChapterId: 'it-2-1-3',
  estimatedMinutes: 55,
  keyTerms: [
    'Klasse',
    'Objekt',
    'Instans',
    'Konstruktør (__init__)',
    'Attributt',
    'Metode',
    'self',
    'Instansiering'
  ],
  content: [
    {
      id: 'it2-1-2-intro',
      type: 'text',
      content: `# Klasser og objekter

Nå er det tid for å gå fra teori til praksis! I dette kapittelet skal du lære å **definere dine egne klasser** i Python, og forstå hvordan klasser og objekter henger sammen.

Tenk på en klasse som en oppskrift eller en mal. Hvis klassen er oppskriften på en kake, er objektet den ferdige kaken. Du kan bake mange kaker fra samme oppskrift – hver kake er et unikt objekt, men alle følger samme mal.`
    },
    {
      id: 'it2-1-2-def-1',
      type: 'definition',
      title: 'Klasse vs. objekt',
      content: `- **Klasse**: En mal eller blueprint som definerer hvilke attributter (data) og metoder (funksjoner) objekter av denne typen skal ha
- **Objekt**: En konkret instans av en klasse, med sine egne verdier for attributtene
- **Instans**: Et annet ord for objekt – vi sier at vi "instansierer" en klasse når vi lager et objekt av den`
    },
    {
      id: 'it2-1-2-example-1',
      type: 'example',
      title: 'Din første klasse',
      content: `La oss lage en enkel klasse som representerer en person:

\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def hilse(self):
        print(f"Hei, jeg heter {self.navn} og er {self.alder} år gammel.")

# Lag objekter (instanser) av Person-klassen
person1 = Person("Kari", 25)
person2 = Person("Ola", 30)

# Bruk objektene
person1.hilse()  # Hei, jeg heter Kari og er 25 år gammel.
person2.hilse()  # Hei, jeg heter Ola og er 30 år gammel.

# Aksesser attributter
print(person1.navn)   # Kari
print(person2.alder)  # 30
\`\`\`

**Hva skjer her?**
1. Vi **definerer** en klasse med \`class Person:\`
2. Vi lager en **konstruktør** (\`__init__\`) som kjører når objektet opprettes
3. Vi lagrer **attributter** (\`navn\` og \`alder\`) på objektet med \`self.navn\` osv.
4. Vi definerer en **metode** (\`hilse\`) som objektet kan bruke
5. Vi **instansierer** klassen to ganger for å lage to forskjellige Person-objekter`
    },
    {
      id: 'it2-1-2-def-2',
      type: 'definition',
      title: 'Konstruktøren __init__',
      content: `**Konstruktøren** er en spesiell metode som kjører automatisk når du lager et nytt objekt. I Python heter den alltid \`__init__\`.

Syntaks:
\`\`\`python
def __init__(self, parameter1, parameter2, ...):
    self.attributt1 = parameter1
    self.attributt2 = parameter2
    # ... annen oppsettskode
\`\`\`

Konstruktøren brukes til:
- Sette startverdi for attributter
- Initialisere objektet
- Kjøre nødvendig oppsettskode`
    },
    {
      id: 'it2-1-2-text-1',
      type: 'text',
      content: `## Hva er self?

Det mystiske \`self\` dukker opp overalt i Python-klasser. Hva betyr det egentlig?

**\`self\` refererer til objektet selv** – det objektet som metoden kalles på. Når du skriver \`person1.hilse()\`, er \`self\` inni \`hilse()\`-metoden lik \`person1\`.

Tenk på det slik: Når du sier "Jeg går til butikken", refererer "jeg" til deg selv. På samme måte refererer \`self\` til objektet som "snakker".

**Hvorfor må vi skrive self?**
Python krever at du eksplisitt sender med objektreferansen som første parameter i metoder. Dette gjør det tydelig at metoden jobber med objektets egne data. Noen språk (som Java) har \`this\` i stedet, som fungerer automatisk.`
    },
    {
      id: 'it2-1-2-exercise-1',
      type: 'exercise',
      title: 'Forstå self',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hva representerer `self` i denne koden?\n\n```python\nclass Bil:\n    def __init__(self, merke):\n        self.merke = merke\n    \n    def start(self):\n        print(f"{self.merke} starter")\n\nmin_bil = Bil("Toyota")\nmin_bil.start()\n```',
      options: [
        'Klassen Bil',
        'Metoden start',
        'Objektet min_bil',
        'Strengen "Toyota"'
      ],
      correctAnswer: 2,
      explanation: 'self refererer til det spesifikke objektet metoden kalles på – i dette tilfellet min_bil. Når vi skriver min_bil.start(), blir self inni start()-metoden lik min_bil.'
    },
    {
      id: 'it2-1-2-example-2',
      type: 'example',
      title: 'Attributter med standardverdier',
      content: `Du kan gi attributter standardverdier i konstruktøren. Dette gjør det valgfritt å sende inn verdien:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, eier, saldo=0):
        self.kontonummer = kontonummer
        self.eier = eier
        self.saldo = saldo

    def vis_info(self):
        print(f"Konto: {self.kontonummer}")
        print(f"Eier: {self.eier}")
        print(f"Saldo: {self.saldo} kr")

# Lag konto uten å oppgi saldo (bruker standard 0)
konto1 = Bankkonto("12345678", "Kari Nordmann")
konto1.vis_info()
# Konto: 12345678
# Eier: Kari Nordmann
# Saldo: 0 kr

# Lag konto med startsaldo
konto2 = Bankkonto("87654321", "Ola Nordmann", 5000)
konto2.vis_info()
# Konto: 87654321
# Eier: Ola Nordmann
# Saldo: 5000 kr
\`\`\`

Parameteren \`saldo=0\` betyr at hvis brukeren ikke oppgir en saldo, settes den automatisk til 0.`
    },
    {
      id: 'it2-1-2-exercise-2',
      type: 'exercise',
      title: 'Lag en Bok-klasse',
      difficulty: 'easy',
      exerciseType: 'classic',
      question: 'Lag en klasse `Bok` med attributtene `tittel`, `forfatter` og `antall_sider`. Klassen skal ha en metode `beskrivelse()` som skriver ut informasjon om boken.\n\nEksempel på bruk:\n```python\nbok = Bok("1984", "George Orwell", 328)\nbok.beskrivelse()\n# Utskrift: "1984" av George Orwell (328 sider)\n```',
      hint: 'Husk __init__ for å sette attributter, og bruk self for å aksessere dem i metoden.',
      answer: `\`\`\`python
class Bok:
    def __init__(self, tittel, forfatter, antall_sider):
        self.tittel = tittel
        self.forfatter = forfatter
        self.antall_sider = antall_sider

    def beskrivelse(self):
        print(f'"{self.tittel}" av {self.forfatter} ({self.antall_sider} sider)')

# Test
bok = Bok("1984", "George Orwell", 328)
bok.beskrivelse()  # "1984" av George Orwell (328 sider)
\`\`\``
    },
    {
      id: 'it2-1-2-text-2',
      type: 'text',
      content: `## Metoder som endrer objektet

Metoder kan ikke bare lese attributter – de kan også **endre** dem. Dette er en av de store fordelene med OOP: Objektet holder styr på sin egen tilstand.

La oss utvide Bankkonto-eksemplet:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, eier, saldo=0):
        self.kontonummer = kontonummer
        self.eier = eier
        self.saldo = saldo

    def sett_inn(self, belop):
        if belop > 0:
            self.saldo += belop
            print(f"Satt inn {belop} kr. Ny saldo: {self.saldo} kr")
        else:
            print("Beløpet må være positivt")

    def ta_ut(self, belop):
        if belop > self.saldo:
            print("Ikke nok penger på konto")
        elif belop <= 0:
            print("Beløpet må være positivt")
        else:
            self.saldo -= belop
            print(f"Tok ut {belop} kr. Ny saldo: {self.saldo} kr")

# Bruk
konto = Bankkonto("12345678", "Kari Nordmann", 1000)
konto.sett_inn(500)    # Satt inn 500 kr. Ny saldo: 1500 kr
konto.ta_ut(200)       # Tok ut 200 kr. Ny saldo: 1300 kr
konto.ta_ut(2000)      # Ikke nok penger på konto
\`\`\`

Legg merke til hvordan metodene endrer \`self.saldo\` og også validerer input. Dette er fornuftig logikk som hører hjemme i Bankkonto-klassen.`
    },
    {
      id: 'it2-1-2-exercise-3',
      type: 'exercise',
      title: 'Metode som endrer tilstand',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Utvid Bok-klassen fra forrige oppgave med en metode `les_sider(antall)` som holder styr på hvor mange sider brukeren har lest. Klassen skal ha et attributt `leste_sider` som starter på 0.\n\nEksempel:\n```python\nbok = Bok("1984", "George Orwell", 328)\nbok.les_sider(50)\nbok.les_sider(30)\nprint(f"Du har lest {bok.leste_sider} av {bok.antall_sider} sider")\n# Du har lest 80 av 328 sider\n```',
      hint: 'Legg til self.leste_sider = 0 i __init__, og øk denne verdien i les_sider-metoden.',
      answer: `\`\`\`python
class Bok:
    def __init__(self, tittel, forfatter, antall_sider):
        self.tittel = tittel
        self.forfatter = forfatter
        self.antall_sider = antall_sider
        self.leste_sider = 0

    def beskrivelse(self):
        print(f'"{self.tittel}" av {self.forfatter} ({self.antall_sider} sider)')

    def les_sider(self, antall):
        self.leste_sider += antall
        if self.leste_sider > self.antall_sider:
            self.leste_sider = self.antall_sider
        print(f"Du har nå lest {self.leste_sider} av {self.antall_sider} sider")

# Test
bok = Bok("1984", "George Orwell", 328)
bok.les_sider(50)   # Du har nå lest 50 av 328 sider
bok.les_sider(30)   # Du har nå lest 80 av 328 sider
\`\`\`

Vi setter en grense slik at leste_sider ikke kan overstige antall_sider.`
    },
    {
      id: 'it2-1-2-text-3',
      type: 'text',
      content: `## Flere objekter av samme klasse

En av styrkene ved klasser er at du kan lage mange objekter fra samme mal. Hvert objekt har sine egne attributtverdier og er uavhengig av de andre:

\`\`\`python
class Hund:
    def __init__(self, navn, rase, alder):
        self.navn = navn
        self.rase = rase
        self.alder = alder

    def bjeff(self):
        print(f"{self.navn}: Voff voff!")

    def beskriv(self):
        print(f"{self.navn} er en {self.alder} år gammel {self.rase}")

# Lag flere hunder
hund1 = Hund("Fido", "Golden Retriever", 3)
hund2 = Hund("Max", "Labrador", 5)
hund3 = Hund("Bella", "Schæfer", 2)

# Hver hund er et selvstendig objekt
hund1.beskriv()  # Fido er en 3 år gammel Golden Retriever
hund2.beskriv()  # Max er en 5 år gammel Labrador
hund3.bjeff()    # Bella: Voff voff!

# Endre én hunds attributt påvirker ikke de andre
hund1.alder = 4
print(hund1.alder)  # 4
print(hund2.alder)  # 5 (uendret)
\`\`\`

Selv om alle tre objektene er Hund-objekter, har de hver sin \`navn\`, \`rase\` og \`alder\`.`
    },
    {
      id: 'it2-1-2-exercise-4',
      type: 'exercise',
      title: 'Uavhengige objekter',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hva skrives ut av følgende kode?\n\n```python\nclass Teller:\n    def __init__(self):\n        self.verdi = 0\n    \n    def øk(self):\n        self.verdi += 1\n\nteller1 = Teller()\nteller2 = Teller()\n\nteller1.øk()\nteller1.øk()\nteller2.øk()\n\nprint(teller1.verdi, teller2.verdi)\n```',
      options: [
        '0 0',
        '1 1',
        '2 1',
        '3 3'
      ],
      correctAnswer: 2,
      explanation: 'teller1 og teller2 er separate objekter. teller1.øk() kjøres to ganger, så teller1.verdi blir 2. teller2.øk() kjøres én gang, så teller2.verdi blir 1. Output: "2 1".'
    },
    {
      id: 'it2-1-2-text-4',
      type: 'text',
      content: `## Metoder som returnerer verdier

Ikke alle metoder skriver bare ut noe eller endrer objektet. Mange metoder **returnerer** en verdi, akkurat som vanlige funksjoner:

\`\`\`python
class Rektangel:
    def __init__(self, lengde, bredde):
        self.lengde = lengde
        self.bredde = bredde

    def areal(self):
        return self.lengde * self.bredde

    def omkrets(self):
        return 2 * (self.lengde + self.bredde)

    def er_kvadrat(self):
        return self.lengde == self.bredde

# Bruk
rekt = Rektangel(5, 3)
print(f"Areal: {rekt.areal()} cm²")      # Areal: 15 cm²
print(f"Omkrets: {rekt.omkrets()} cm")   # Omkrets: 16 cm
print(f"Kvadrat: {rekt.er_kvadrat()}")   # Kvadrat: False

kvadrat = Rektangel(4, 4)
print(f"Kvadrat: {kvadrat.er_kvadrat()}")  # Kvadrat: True
\`\`\`

Metodene \`areal()\`, \`omkrets()\` og \`er_kvadrat()\` regner ut noe basert på objektets attributter og returnerer resultatet.`
    },
    {
      id: 'it2-1-2-exercise-5',
      type: 'exercise',
      title: 'Sirkel-klasse',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag en klasse `Sirkel` med attributtet `radius`. Klassen skal ha metoder:\n- `areal()` som returnerer sirkelens areal (π * r²)\n- `omkrets()` som returnerer sirkelens omkrets (2 * π * r)\n\nBruk `import math` og `math.pi` for π.\n\nEksempel:\n```python\nsirkel = Sirkel(5)\nprint(sirkel.areal())     # ca. 78.54\nprint(sirkel.omkrets())   # ca. 31.42\n```',
      hint: 'Husk å importere math-modulen øverst. Bruk math.pi for π-verdien.',
      answer: `\`\`\`python
import math

class Sirkel:
    def __init__(self, radius):
        self.radius = radius

    def areal(self):
        return math.pi * self.radius ** 2

    def omkrets(self):
        return 2 * math.pi * self.radius

# Test
sirkel = Sirkel(5)
print(f"Areal: {sirkel.areal():.2f}")      # Areal: 78.54
print(f"Omkrets: {sirkel.omkrets():.2f}")  # Omkrets: 31.42
\`\`\`

Vi bruker ** for potens (radius²) og :.2f for å formatere til 2 desimaler.`
    },
    {
      id: 'it2-1-2-text-5',
      type: 'text',
      content: `## Klasser med sammensatte data

Attributter i en klasse kan være hvilken som helst datatype – inkludert lister, ordbøker, eller til og med andre objekter!

\`\`\`python
class Handlekurv:
    def __init__(self):
        self.varer = []  # Tom liste

    def legg_til(self, vare, pris):
        self.varer.append({"vare": vare, "pris": pris})
        print(f"La til {vare} i handlekurven")

    def total_pris(self):
        return sum(vare["pris"] for vare in self.varer)

    def vis_innhold(self):
        print("Handlekurv:")
        for vare in self.varer:
            print(f"  - {vare['vare']}: {vare['pris']} kr")
        print(f"Totalt: {self.total_pris()} kr")

# Bruk
kurv = Handlekurv()
kurv.legg_til("Melk", 20)
kurv.legg_til("Brød", 35)
kurv.legg_til("Ost", 80)
kurv.vis_innhold()
# Handlekurv:
#   - Melk: 20 kr
#   - Brød: 35 kr
#   - Ost: 80 kr
# Totalt: 135 kr
\`\`\`

Her bruker vi en liste (\`self.varer\`) for å lagre ordbøker med vareinformasjon. Dette viser hvordan OOP kan håndtere kompleks data på en ryddig måte.`
    },
    {
      id: 'it2-1-2-exercise-6',
      type: 'exercise',
      title: 'Spilleliste-klasse',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag en klasse `Spilleliste` som håndterer en liste med sanger. Klassen skal ha:\n- En tom liste `sanger` som attributt\n- Metode `legg_til_sang(tittel, artist)` som legger til en sang (lagre som ordbok)\n- Metode `antall_sanger()` som returnerer antall sanger i listen\n- Metode `vis_spilleliste()` som skriver ut alle sanger\n\nEksempel:\n```python\nminliste = Spilleliste()\nminliste.legg_til_sang("Bohemian Rhapsody", "Queen")\nminliste.legg_til_sang("Imagine", "John Lennon")\nprint(f"Antall sanger: {minliste.antall_sanger()}")\nminliste.vis_spilleliste()\n```',
      hint: 'Bruk en liste for å lagre ordbøker med "tittel" og "artist" som nøkler.',
      answer: `\`\`\`python
class Spilleliste:
    def __init__(self):
        self.sanger = []

    def legg_til_sang(self, tittel, artist):
        self.sanger.append({"tittel": tittel, "artist": artist})
        print(f'La til "{tittel}" av {artist}')

    def antall_sanger(self):
        return len(self.sanger)

    def vis_spilleliste(self):
        print("\\nSpilleliste:")
        for i, sang in enumerate(self.sanger, 1):
            print(f"{i}. {sang['tittel']} - {sang['artist']}")

# Test
minliste = Spilleliste()
minliste.legg_til_sang("Bohemian Rhapsody", "Queen")
minliste.legg_til_sang("Imagine", "John Lennon")
print(f"\\nAntall sanger: {minliste.antall_sanger()}")
minliste.vis_spilleliste()

# Output:
# La til "Bohemian Rhapsody" av Queen
# La til "Imagine" av John Lennon
#
# Antall sanger: 2
#
# Spilleliste:
# 1. Bohemian Rhapsody - Queen
# 2. Imagine - John Lennon
\`\`\``
    },
    {
      id: 'it2-1-2-summary',
      type: 'summary',
      title: 'Oppsummering',
      content: `I dette kapittelet har du lært:

- **Definere klasser** med \`class KlasseNavn:\`
- **Konstruktører** med \`__init__(self, ...)\` for å sette opp objekter
- **Attributter** lagres med \`self.attributtnavn = verdi\`
- **Metoder** er funksjoner i klassen som tar \`self\` som første parameter
- **self** refererer til objektet som metoden kalles på
- **Instansiering** – å lage objekter fra en klasse
- **Uavhengighet** – hvert objekt har sine egne attributtverdier
- **Returnere verdier** fra metoder for å gjøre beregninger
- **Sammensatte data** som lister og ordbøker kan være attributter

I neste kapittel skal vi se på **innkapsling** – hvordan vi kan beskytte data i klasser og kontrollere tilgangen.`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-1-2-exercise-7',
      type: 'exercise',
      title: 'Student-klasse',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag en klasse `Student` med attributtene `navn` og `karakterer` (en tom liste). Klassen skal ha metodene:\n- `legg_til_karakter(karakter)` – legger til en karakter (1-6) i listen\n- `gjennomsnitt()` – returnerer gjennomsnittskarakteren, eller None hvis ingen karakterer\n- `best_karakter()` – returnerer høyeste karakter\n- `antall_bestått()` – returnerer hvor mange karakterer som er 2 eller høyere\n\nEksempel:\n```python\nstudent = Student("Kari")\nstudent.legg_til_karakter(5)\nstudent.legg_til_karakter(4)\nstudent.legg_til_karakter(6)\nprint(student.gjennomsnitt())  # 5.0\nprint(student.best_karakter())  # 6\nprint(student.antall_bestått())  # 3\n```',
      hint: 'Bruk sum() og len() for gjennomsnitt, max() for beste karakter.',
      answer: `\`\`\`python
class Student:
    def __init__(self, navn):
        self.navn = navn
        self.karakterer = []

    def legg_til_karakter(self, karakter):
        if 1 <= karakter <= 6:
            self.karakterer.append(karakter)
            print(f"La til karakter {karakter} for {self.navn}")
        else:
            print("Karakter må være mellom 1 og 6")

    def gjennomsnitt(self):
        if len(self.karakterer) == 0:
            return None
        return sum(self.karakterer) / len(self.karakterer)

    def best_karakter(self):
        if len(self.karakterer) == 0:
            return None
        return max(self.karakterer)

    def antall_bestått(self):
        return sum(1 for k in self.karakterer if k >= 2)

# Test
student = Student("Kari")
student.legg_til_karakter(5)
student.legg_til_karakter(4)
student.legg_til_karakter(6)
student.legg_til_karakter(1)

print(f"Gjennomsnitt: {student.gjennomsnitt()}")  # 4.0
print(f"Best karakter: {student.best_karakter()}")  # 6
print(f"Antall bestått: {student.antall_bestått()}")  # 3 (ikke 1-karakteren)
\`\`\``
    },
    {
      id: 'it2-1-2-exercise-8',
      type: 'exercise',
      title: 'Debugging',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Følgende kode har flere feil. Identifiser og forklar minst 3 feil:\n\n```python\nclass Bil:\n    def init(merke, modell):\n        merke = merke\n        modell = modell\n    \n    def start():\n        print(f"{merke} starter")\n\nmin_bil = Bil("Toyota", "Corolla")\nmin_bil.start()\n```',
      hint: 'Se på konstruktøren, self-parameteren, og hvordan attributter lagres.',
      answer: `**Feil i koden:**

1. **Feil: \`def init\` i stedet for \`def __init__\`**
   - Konstruktøren må ha doble understreker før og etter: \`__init__\`

2. **Feil: Mangler \`self\` som første parameter**
   - Alle metoder (inkludert __init__) må ha \`self\` som første parameter
   - Riktig: \`def __init__(self, merke, modell):\`

3. **Feil: Attributter lagres uten \`self.\`**
   - \`merke = merke\` lagrer bare i en lokal variabel
   - Riktig: \`self.merke = merke\` for å lagre på objektet

4. **Feil: \`start()\` mangler \`self\` parameter**
   - Riktig: \`def start(self):\`

5. **Feil: Refererer til \`merke\` uten \`self.\`**
   - Inne i start() må vi bruke \`self.merke\` for å aksessere attributten

**Rettet kode:**
\`\`\`python
class Bil:
    def __init__(self, merke, modell):
        self.merke = merke
        self.modell = modell

    def start(self):
        print(f"{self.merke} starter")

min_bil = Bil("Toyota", "Corolla")
min_bil.start()  # Toyota starter
\`\`\``
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.3: Innkapsling og tilgangskontroll
// ============================================================================

export const CHAPTER_IT_2_1_3: TextbookChapter = {
  id: 'it-2-1-3',
  courseId: 'it-2',
  title: 'Innkapsling og tilgangskontroll',
  description: 'Lær om innkapsling, private attributter, get/set-metoder, properties og information hiding.',
  section: 'Seksjon 1: Objektorientert programmering – grunnlag',
  previousChapterId: 'it-2-1-2',
  nextChapterId: 'it-2-1-4',
  estimatedMinutes: 60,
  keyTerms: [
    'Innkapsling (encapsulation)',
    'Information hiding',
    'Private attributter',
    'Public attributter',
    'Getter',
    'Setter',
    'Property',
    '@property'
  ],
  content: [
    {
      id: 'it2-1-3-intro',
      type: 'text',
      content: `# Innkapsling og tilgangskontroll

I forrige kapittel lærte du å lage klasser med attributter og metoder. Men det var ett problem: Alle attributter var direkte tilgjengelige utenfra. Noen kan skrive \`konto.saldo = -1000000\` og ødelegge logikken i programmet!

**Innkapsling** er prinsippet om å skjule intern data og bare eksponere det som er nødvendig. Dette er en av de fire grunnpilarene i objektorientert programmering, sammen med arv, polymorfisme og abstraksjon.

I dette kapittelet skal du lære hvordan du beskytter data i klassene dine, og hvordan du kontrollerer tilgangen til dem.`
    },
    {
      id: 'it2-1-3-def-1',
      type: 'definition',
      title: 'Innkapsling (Encapsulation)',
      content: `**Innkapsling** betyr å pakke data (attributter) og funksjoner (metoder) sammen i en klasse, og samtidig **skjule** den interne implementasjonen fra omverdenen.

Formål med innkapsling:
- **Beskytte data**: Hindre ugyldig eller uforsiktig tilgang
- **Kontrollere endringer**: Validere data før de lagres
- **Skjule kompleksitet**: Brukeren trenger ikke å vite hvordan ting fungerer internt
- **Enklere vedlikehold**: Du kan endre intern logikk uten å påvirke ekstern kode`
    },
    {
      id: 'it2-1-3-text-1',
      type: 'text',
      content: `## Problemet med offentlige attributter

La oss se på et problem med den enkle Bankkonto-klassen:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, saldo=0):
        self.kontonummer = kontonummer
        self.saldo = saldo

    def ta_ut(self, belop):
        if belop <= self.saldo:
            self.saldo -= belop
            return True
        return False

# Lag en konto
konto = Bankkonto("12345678", 1000)

# PROBLEM: Noen kan endre saldo direkte!
konto.saldo = -5000  # Dette burde ikke være mulig!
print(konto.saldo)   # -5000

# Metoden ta_ut() er nå meningsløs
konto.ta_ut(100)  # Fungerer selv med negativ saldo
\`\`\`

Ved å la alle aksessere \`saldo\` direkte, mister vi kontrollen. Løsningen er **innkapsling** – vi gjør \`saldo\` privat.`
    },
    {
      id: 'it2-1-3-def-2',
      type: 'definition',
      title: 'Private vs. Public i Python',
      content: `I Python markerer vi private attributter med **én eller to understreker** foran navnet:

- **Offentlig (public)**: \`self.navn\` – kan aksesseres hvor som helst
- **Beskyttet (protected)**: \`self._navn\` – én understrek, konvensjon for "intern bruk"
- **Privat (private)**: \`self.__navn\` – to understreker, name mangling gjør det vanskelig å aksessere

**Viktig:** Python har ikke ekte private attributter som i Java/C++. En understrek er bare en konvensjon som sier "ikke rør dette". To understreker gjør name mangling, men det er fortsatt mulig å aksessere attributtet hvis man virkelig vil.`
    },
    {
      id: 'it2-1-3-example-1',
      type: 'example',
      title: 'Privat attributt med getter og setter',
      content: `La oss lage en bedre Bankkonto-klasse med privat saldo:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, saldo=0):
        self.kontonummer = kontonummer
        self.__saldo = saldo  # Privat attributt (to understreker)

    def hent_saldo(self):
        """Getter: Hent saldo (read-only)"""
        return self.__saldo

    def sett_inn(self, belop):
        """Setter: Legg inn penger (med validering)"""
        if belop > 0:
            self.__saldo += belop
            return True
        return False

    def ta_ut(self, belop):
        """Setter: Ta ut penger (med validering)"""
        if 0 < belop <= self.__saldo:
            self.__saldo -= belop
            return True
        return False

# Bruk
konto = Bankkonto("12345678", 1000)

# Vi kan hente saldo
print(konto.hent_saldo())  # 1000

# Men vi kan ikke endre den direkte
# konto.__saldo = -5000  # Dette fungerer IKKE som forventet

# Vi må bruke metodene
konto.sett_inn(500)
konto.ta_ut(200)
print(konto.hent_saldo())  # 1300

# Forsøk på ugyldig operasjon
konto.sett_inn(-100)  # Returnerer False, ingen endring
print(konto.hent_saldo())  # Fortsatt 1300
\`\`\`

Nå er saldo beskyttet! Vi må bruke metodene for å endre den, og metodene validerer input.`
    },
    {
      id: 'it2-1-3-exercise-1',
      type: 'exercise',
      title: 'Identifiser private attributter',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hvilken av følgende attributter er privat i Python-konvensjonen?',
      options: [
        'self.navn',
        'self._alder',
        'self.__passord',
        'self.KONSTANT'
      ],
      correctAnswer: 2,
      explanation: 'self.__passord med to understreker er privat. self._alder (én understrek) er "beskyttet" men fortsatt tilgjengelig. self.navn er offentlig.'
    },
    {
      id: 'it2-1-3-text-2',
      type: 'text',
      content: `## Properties: Pythonisk tilgangskontroll

Å skrive \`konto.hent_saldo()\` hver gang vi vil lese saldo er litt tungvint. Python har en elegant løsning: **properties**.

En **property** gjør at en metode oppfører seg som et attributt. Vi bruker dekoratoren \`@property\` for getter, og \`@attributt.setter\` for setter:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, saldo=0):
        self.kontonummer = kontonummer
        self.__saldo = saldo

    @property
    def saldo(self):
        """Getter for saldo"""
        return self.__saldo

    @saldo.setter
    def saldo(self, verdi):
        """Setter for saldo (med validering)"""
        if verdi >= 0:
            self.__saldo = verdi
        else:
            raise ValueError("Saldo kan ikke være negativ")

# Bruk ser ut som vanlige attributter!
konto = Bankkonto("12345678", 1000)
print(konto.saldo)  # 1000 (kaller getter)

konto.saldo = 1500  # Kaller setter (med validering)
print(konto.saldo)  # 1500

konto.saldo = -100  # ValueError: Saldo kan ikke være negativ
\`\`\`

Dette er Python-måten: Enkel syntaks utad, men med kontroll og validering inni.`
    },
    {
      id: 'it2-1-3-exercise-2',
      type: 'exercise',
      title: 'Property-syntaks',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hva er fordelen med å bruke @property i stedet for vanlige getter/setter-metoder?',
      options: [
        'Det kjører raskere',
        'Det gjør koden kortere å skrive',
        'Det gir mer naturlig syntaks (attributt-lignende) med validering',
        'Det gjør attributtet helt privat'
      ],
      correctAnswer: 2,
      explanation: '@property gir en elegant syntaks som ser ut som vanlig attributt-tilgang (konto.saldo i stedet for konto.hent_saldo()), men med mulighet for validering og kontroll i bakgrunnen.'
    },
    {
      id: 'it2-1-3-example-2',
      type: 'example',
      title: 'Property med beregnet verdi',
      content: `Properties er også nyttige for beregnet verdier som ikke lagres, men regnes ut on-the-fly:

\`\`\`python
class Person:
    def __init__(self, fornavn, etternavn, fødselsår):
        self.fornavn = fornavn
        self.etternavn = etternavn
        self.fødselsår = fødselsår

    @property
    def fullt_navn(self):
        """Beregnet property: Kombinerer fornavn og etternavn"""
        return f"{self.fornavn} {self.etternavn}"

    @property
    def alder(self):
        """Beregnet property: Regner ut alder basert på fødselsår"""
        from datetime import datetime
        return datetime.now().year - self.fødselsår

# Bruk
person = Person("Kari", "Nordmann", 1995)
print(person.fullt_navn)  # Kari Nordmann
print(person.alder)       # 31 (i 2026)

# Fullt navn oppdateres automatisk hvis vi endrer fornavn
person.fornavn = "Anne"
print(person.fullt_navn)  # Anne Nordmann
\`\`\`

Vi trenger ikke lagre \`fullt_navn\` eller \`alder\` som egne attributter – de beregnes når vi trenger dem.`
    },
    {
      id: 'it2-1-3-exercise-3',
      type: 'exercise',
      title: 'Rektangel med property',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag en klasse `Rektangel` med private attributter `__lengde` og `__bredde`. Lag properties for:\n- `lengde` og `bredde` (med getter og setter som validerer at verdien er positiv)\n- `areal` (beregnet property uten setter)\n\nEksempel:\n```python\nrekt = Rektangel(5, 3)\nprint(rekt.areal)  # 15\nrekt.lengde = 10\nprint(rekt.areal)  # 30\nrekt.bredde = -5   # ValueError\n```',
      hint: 'Bruk @property for getter, @attributt.setter for setter, og raise ValueError for ugyldig input.',
      answer: `\`\`\`python
class Rektangel:
    def __init__(self, lengde, bredde):
        self.__lengde = lengde
        self.__bredde = bredde

    @property
    def lengde(self):
        return self.__lengde

    @lengde.setter
    def lengde(self, verdi):
        if verdi > 0:
            self.__lengde = verdi
        else:
            raise ValueError("Lengde må være positiv")

    @property
    def bredde(self):
        return self.__bredde

    @bredde.setter
    def bredde(self, verdi):
        if verdi > 0:
            self.__bredde = verdi
        else:
            raise ValueError("Bredde må være positiv")

    @property
    def areal(self):
        """Beregnet property (ingen setter)"""
        return self.__lengde * self.__bredde

# Test
rekt = Rektangel(5, 3)
print(rekt.areal)  # 15

rekt.lengde = 10
print(rekt.areal)  # 30

try:
    rekt.bredde = -5
except ValueError as e:
    print(e)  # Bredde må være positiv
\`\`\``
    },
    {
      id: 'it2-1-3-text-3',
      type: 'text',
      content: `## Information Hiding – hvorfor gjemme data?

**Information hiding** (informasjonsskjuling) er et nøkkelbegrep i OOP. Det handler ikke om å være hemmelighetsfull, men om å:

**1. Redusere kompleksitet**
Brukeren trenger ikke å vite hvordan saldo lagres internt – de bruker bare metodene.

**2. Forhindre feil**
Hvis saldo var offentlig, kunne noen ved et uhell sette den til en ugyldig verdi.

**3. Muliggjøre endringer**
Du kan endre hvordan saldo lagres (f.eks. i øre i stedet for kroner) uten at det påvirker kode som bruker klassen.

**4. Tvinge bruk av korrekt API**
Ved å gjøre attributter private, tvinger du brukere til å bruke dine validerte metoder.

Eksempel på intern endring uten å påvirke brukere:

\`\`\`python
# Versjon 1: Saldo lagres i kroner
class Bankkonto:
    def __init__(self, saldo=0):
        self.__saldo_kr = saldo

    @property
    def saldo(self):
        return self.__saldo_kr

# Versjon 2: Saldo lagres i øre (for bedre presisjon)
class Bankkonto:
    def __init__(self, saldo=0):
        self.__saldo_øre = saldo * 100  # Lagre i øre

    @property
    def saldo(self):
        return self.__saldo_øre / 100  # Returner i kroner

# Brukeren merker ingen forskjell!
konto = Bankkonto(1000)
print(konto.saldo)  # 1000 i begge versjoner
\`\`\`

Den interne representasjonen endret seg, men API-et (det brukeren ser) er det samme.`
    },
    {
      id: 'it2-1-3-exercise-4',
      type: 'exercise',
      title: 'Fordeler med information hiding',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hvilken av følgende er IKKE en fordel med information hiding?',
      options: [
        'Gjør det lettere å endre intern implementasjon senere',
        'Forhindrer at brukere setter ugyldige verdier',
        'Gjør koden raskere å kjøre',
        'Reduserer kompleksiteten brukeren må forholde seg til'
      ],
      correctAnswer: 2,
      explanation: 'Information hiding handler om struktur og vedlikehold, ikke ytelse. Det gjør ikke koden raskere – tvert imot kan properties ha litt overhead. Men fordelene i form av bedre design oppveier dette.'
    },
    {
      id: 'it2-1-3-text-4',
      type: 'text',
      content: `## Read-only properties

Noen ganger vil du at et attributt skal være **read-only** (skrivebeskyttet) – det kan leses, men ikke endres utenfra. Dette gjøres ved å lage en getter uten setter:

\`\`\`python
class Produkt:
    def __init__(self, navn, pris):
        self.__navn = navn
        self.__pris = pris
        self.__antall_solgt = 0

    @property
    def navn(self):
        """Read-only: Navn kan ikke endres etter opprettelse"""
        return self.__navn

    @property
    def pris(self):
        return self.__pris

    @pris.setter
    def pris(self, ny_pris):
        """Pris kan endres (men valideres)"""
        if ny_pris > 0:
            self.__pris = ny_pris
        else:
            raise ValueError("Pris må være positiv")

    @property
    def antall_solgt(self):
        """Read-only: Kan bare endres gjennom selg()-metoden"""
        return self.__antall_solgt

    def selg(self, antall=1):
        self.__antall_solgt += antall

# Bruk
produkt = Produkt("Laptop", 10000)

# Kan lese alle
print(produkt.navn)          # Laptop
print(produkt.pris)          # 10000
print(produkt.antall_solgt)  # 0

# Kan endre pris
produkt.pris = 9500
print(produkt.pris)  # 9500

# Kan IKKE endre navn eller antall_solgt direkte
# produkt.navn = "PC"  # AttributeError: can't set attribute
# produkt.antall_solgt = 100  # AttributeError: can't set attribute

# Men kan selge via metode
produkt.selg(5)
print(produkt.antall_solgt)  # 5
\`\`\`

Dette gir presis kontroll over hva som kan endres og hvordan.`
    },
    {
      id: 'it2-1-3-exercise-5',
      type: 'exercise',
      title: 'Bruker-klasse med read-only ID',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag en klasse `Bruker` med:\n- Private attributter: `__bruker_id`, `__brukernavn`, `__epost`\n- `bruker_id` skal være read-only (settes ved opprettelse, kan ikke endres)\n- `brukernavn` og `epost` skal ha både getter og setter\n- Setter for `epost` skal validere at strengen inneholder "@"\n\nTest at `bruker_id` ikke kan endres, men `epost` kan.',
      hint: 'Lag property uten setter for bruker_id, med setter for de andre.',
      answer: `\`\`\`python
class Bruker:
    def __init__(self, bruker_id, brukernavn, epost):
        self.__bruker_id = bruker_id
        self.__brukernavn = brukernavn
        self.__epost = epost

    @property
    def bruker_id(self):
        """Read-only"""
        return self.__bruker_id

    @property
    def brukernavn(self):
        return self.__brukernavn

    @brukernavn.setter
    def brukernavn(self, verdi):
        self.__brukernavn = verdi

    @property
    def epost(self):
        return self.__epost

    @epost.setter
    def epost(self, verdi):
        if "@" in verdi:
            self.__epost = verdi
        else:
            raise ValueError("Ugyldig epostadresse")

# Test
bruker = Bruker(101, "kari", "kari@example.com")
print(bruker.bruker_id)    # 101
print(bruker.epost)        # kari@example.com

# Kan endre epost
bruker.epost = "kari.nordmann@example.com"
print(bruker.epost)  # kari.nordmann@example.com

# Kan IKKE endre bruker_id
try:
    bruker.bruker_id = 999
except AttributeError as e:
    print("Kan ikke endre bruker_id")

# Validering fungerer
try:
    bruker.epost = "ugyldig-epost"
except ValueError as e:
    print(e)  # Ugyldig epostadresse
\`\`\``
    },
    {
      id: 'it2-1-3-text-5',
      type: 'text',
      content: `## Når skal du bruke innkapsling?

Ikke alle klasser trenger streng innkapsling. Her er noen retningslinjer:

**Bruk private attributter når:**
- Attributtet må valideres (f.eks. saldo, alder, epost)
- Attributtet brukes i beregninger som må være konsistente
- Du vil reservere retten til å endre intern representasjon senere
- Attributtet er kritisk for objektets integritet

**Public attributter er OK når:**
- Det er enkle data uten logikk (f.eks. koordinater: x, y)
- Klassen er en enkel datastruktur (dataclass)
- Det er intern kode som ikke skal brukes av andre

**En god tommelfingerregel:**
Start med public attributter for enkelhetens skyld. Hvis du senere merker at du trenger validering eller kontroll, gjør dem private og legg til properties.`
    },
    {
      id: 'it2-1-3-summary',
      type: 'summary',
      title: 'Oppsummering',
      content: `I dette kapittelet har du lært:

- **Innkapsling** betyr å skjule intern data og kontrollere tilgang
- **Private attributter** markeres med \`__attributt\` (to understreker)
- **Beskyttede attributter** markeres med \`_attributt\` (én understrek) – konvensjon
- **Getter og setter** er metoder for å lese og endre private attributter
- **@property** gir elegant syntaks for getters
- **@attributt.setter** definerer setter for en property
- **Read-only properties** har getter men ingen setter
- **Information hiding** gjør kode enklere å vedlikeholde og endre
- **Validering** i setters forhindrer ugyldige verdier

I neste kapittel skal vi se på **arv** – hvordan klasser kan bygge videre på hverandre.`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-1-3-exercise-6',
      type: 'exercise',
      title: 'Temperatur-klasse',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag en klasse `Temperatur` som lagrer temperatur i Celsius som privat attributt. Klassen skal ha properties:\n- `celsius` (getter og setter)\n- `fahrenheit` (getter og setter – regner om til/fra Celsius)\n- `kelvin` (getter og setter – regner om til/fra Celsius)\n\nFormler:\n- Fahrenheit = Celsius × 9/5 + 32\n- Kelvin = Celsius + 273.15\n\nValidering: Temperatur kan ikke være under absolutt nullpunkt (-273.15°C).\n\nTest at endring av én enhet påvirker de andre.',
      hint: 'Lagre kun Celsius internt. Andre enheter beregnes on-the-fly.',
      answer: `\`\`\`python
class Temperatur:
    def __init__(self, celsius=0):
        self.__celsius = celsius
        if self.__celsius < -273.15:
            raise ValueError("Under absolutt nullpunkt!")

    @property
    def celsius(self):
        return self.__celsius

    @celsius.setter
    def celsius(self, verdi):
        if verdi < -273.15:
            raise ValueError("Under absolutt nullpunkt!")
        self.__celsius = verdi

    @property
    def fahrenheit(self):
        return self.__celsius * 9/5 + 32

    @fahrenheit.setter
    def fahrenheit(self, verdi):
        celsius = (verdi - 32) * 5/9
        self.celsius = celsius  # Bruker celsius setter for validering

    @property
    def kelvin(self):
        return self.__celsius + 273.15

    @kelvin.setter
    def kelvin(self, verdi):
        celsius = verdi - 273.15
        self.celsius = celsius  # Bruker celsius setter for validering

# Test
temp = Temperatur(0)
print(f"{temp.celsius}°C = {temp.fahrenheit}°F = {temp.kelvin}K")
# 0°C = 32.0°F = 273.15K

temp.fahrenheit = 100
print(f"{temp.celsius:.1f}°C")  # 37.8°C

temp.kelvin = 300
print(f"{temp.celsius:.2f}°C")  # 26.85°C

# Validering
try:
    temp.celsius = -300
except ValueError as e:
    print(e)  # Under absolutt nullpunkt!
\`\`\``
    },
    {
      id: 'it2-1-3-exercise-7',
      type: 'exercise',
      title: 'Tilgangskontroll i praksis',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Forklar hvorfor følgende kode er problematisk, og skriv en forbedret versjon med innkapsling:\n\n```python\nclass Ansatt:\n    def __init__(self, navn, lønn):\n        self.navn = navn\n        self.lønn = lønn\n\n# Bruk\nansatt = Ansatt("Kari", 500000)\nansatt.lønn = -100000  # Problem!\n```',
      hint: 'Tenk på hva som kan gå galt, og hvordan properties kan hjelpe.',
      answer: `**Problemer med original kode:**

1. **Negativ lønn**: Ingenting hindrer oss i å sette en ugyldig lønn
2. **Ingen validering**: Lønn kan settes til hva som helst (streng, None, osv.)
3. **Manglende kontroll**: Hvis vi senere vil logge lønnsendringer, må vi endre all eksisterende kode

**Forbedret versjon med innkapsling:**

\`\`\`python
class Ansatt:
    def __init__(self, navn, lønn):
        self.navn = navn
        self.__lønn = lønn  # Privat

    @property
    def lønn(self):
        return self.__lønn

    @lønn.setter
    def lønn(self, verdi):
        if not isinstance(verdi, (int, float)):
            raise TypeError("Lønn må være et tall")
        if verdi < 0:
            raise ValueError("Lønn kan ikke være negativ")
        # Her kan vi legge til logging hvis ønskelig
        print(f"Endrer lønn for {self.navn} fra {self.__lønn} til {verdi}")
        self.__lønn = verdi

# Bruk
ansatt = Ansatt("Kari", 500000)

# Gyldig endring
ansatt.lønn = 550000  # OK, med logging

# Ugyldig endring stoppes
try:
    ansatt.lønn = -100000
except ValueError as e:
    print(e)  # Lønn kan ikke være negativ

try:
    ansatt.lønn = "mye"
except TypeError as e:
    print(e)  # Lønn må være et tall
\`\`\`

**Fordeler:**
- Validering sikrer datakvalitet
- Enklere å debugge (vet hvor ugyldige verdier settes)
- Kan legge til logging/auditing senere uten å endre API
- Tvinger riktig bruk av klassen`
    },
    {
      id: 'it2-1-3-exercise-8',
      type: 'exercise',
      title: 'Name mangling',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Python bruker "name mangling" for attributter med doble understreker. Undersøk og forklar hva følgende kode skriver ut:\n\n```python\nclass Hemmelig:\n    def __init__(self):\n        self.__privat = "hemmelig"\n        self._beskyttet = "synlig"\n\nobj = Hemmelig()\nprint(dir(obj))\nprint(obj._beskyttet)\n# print(obj.__privat)  # Hva skjer?\nprint(obj._Hemmelig__privat)  # Hva skjer?\n```\n\nForklar hvordan name mangling fungerer, og om Python virkelig har "private" attributter.',
      hint: 'Bruk dir() for å se alle attributter på objektet.',
      answer: `**Forklaring av name mangling:**

\`\`\`python
class Hemmelig:
    def __init__(self):
        self.__privat = "hemmelig"
        self._beskyttet = "synlig"

obj = Hemmelig()

# dir() viser alle attributter
print([a for a in dir(obj) if not a.startswith('__')])
# ['_Hemmelig__privat', '_beskyttet']

# _beskyttet er direkte tilgjengelig (konvensjon, ikke tvang)
print(obj._beskyttet)  # synlig

# __privat er "mangled" (omnavnet)
try:
    print(obj.__privat)
except AttributeError as e:
    print(e)  # 'Hemmelig' object has no attribute '__privat'

# Men det finnes fortsatt, bare med et annet navn!
print(obj._Hemmelig__privat)  # hemmelig
\`\`\`

**Hva skjer?**

Python gjør "name mangling" på attributter med doble understreker: \`__privat\` blir til \`_KlasseNavn__privat\`. Dette gjør det vanskelig (men ikke umulig) å aksessere attributtet utenfra.

**Konklusjon:**
Python har IKKE ekte private attributter som i Java/C++. Det er en konvensjon og et mekanisme som gjør utilsiktet tilgang vanskeligere, men hvis noen virkelig vil, kan de aksessere attributtet via det manglede navnet.

**Pythons filosofi:**
"We're all consenting adults here" – Python stoler på at utviklere respekterer konvensjoner. Én understrek betyr "intern bruk, ikke rør", og det er ofte nok.`
    }
  ],
  exercises: []
};


// ============================================================================
// Kapittel 1.4: Arv og gjenbruk
// ============================================================================

export const CHAPTER_IT_2_1_4: TextbookChapter = {
  id: 'it-2-1-4',
  courseId: 'it-2',
  title: 'Arv og gjenbruk',
  description: 'Lær om arv, superklasser og subklasser, override, super() og isinstance().',
  section: 'Seksjon 1: Objektorientert programmering – grunnlag',
  previousChapterId: 'it-2-1-3',
  nextChapterId: 'it-2-1-5',
  estimatedMinutes: 65,
  keyTerms: [
    'Arv (inheritance)',
    'Superklasse (parent class)',
    'Subklasse (child class)',
    'Override',
    'super()',
    'isinstance()',
    'Spesialisering',
    'Generalisering'
  ],
  content: [
    {
      id: 'it2-1-4-intro',
      type: 'text',
      content: `# Arv og gjenbruk

Tenk deg at du har laget en god Bil-klasse med masse nyttig funksjonalitet. Nå vil du lage en Elbil-klasse. Elbiler er biler, men med noen ekstra egenskaper (batteri, lading). Må du skrive all Bil-koden på nytt?

Nei! Dette er hvor **arv** kommer inn. Arv lar deg lage en ny klasse basert på en eksisterende klasse – du **arver** alle attributter og metoder, og kan deretter legge til eller endre det du trenger.

Arv er en av de fire grunnpilarene i OOP, og handler om **gjenbruk av kode** og **hierarkiske relasjoner**.`
    },
    {
      id: 'it2-1-4-def-1',
      type: 'definition',
      title: 'Arv (Inheritance)',
      content: `**Arv** er når en klasse (subklassen) overtar attributter og metoder fra en annen klasse (superklassen).

Terminologi:
- **Superklasse / Foreldrek lasse / Base class**: Den klassen som arves fra
- **Subklasse / Barneklasse / Derived class**: Den klassen som arver
- **"is-a" relasjon**: En Elbil "er en" Bil – dette signaliserer at arv passer

Syntaks i Python:
\`\`\`python
class Superklasse:
    pass

class Subklasse(Superklasse):  # Arver fra Superklasse
    pass
\`\`\``
    },
    {
      id: 'it2-1-4-example-1',
      type: 'example',
      title: 'Enkel arv',
      content: `La oss se på et konkret eksempel:

\`\`\`python
class Dyr:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def lag_lyd(self):
        print("Dyret lager en lyd")

    def beskriv(self):
        print(f"{self.navn} er {self.alder} år gammel")

# Hund arver fra Dyr
class Hund(Dyr):
    def lag_lyd(self):
        print(f"{self.navn} sier: Voff!")

# Katt arver fra Dyr
class Katt(Dyr):
    def lag_lyd(self):
        print(f"{self.navn} sier: Mjau!")

# Bruk
hund = Hund("Fido", 3)
hund.beskriv()    # Arvet fra Dyr: Fido er 3 år gammel
hund.lag_lyd()    # Overstyrt i Hund: Fido sier: Voff!

katt = Katt("Mimir", 2)
katt.beskriv()    # Arvet fra Dyr: Mimir er 2 år gammel
katt.lag_lyd()    # Overstyrt i Katt: Mimir sier: Mjau!
\`\`\`

**Hva skjer?**
- Hund og Katt arver \`__init__\` og \`beskriv\` fra Dyr
- De **overstyrer** (override) \`lag_lyd\` med sin egen versjon
- Vi trenger ikke å skrive \`__init__\` og \`beskriv\` på nytt!`
    },
    {
      id: 'it2-1-4-exercise-1',
      type: 'exercise',
      title: 'Identifiser super- og subklasse',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'I følgende kode, hva er superklassen?\n\n```python\nclass Kjøretøy:\n    pass\n\nclass Bil(Kjøretøy):\n    pass\n```',
      options: [
        'Bil',
        'Kjøretøy',
        'Begge er superklasser',
        'Ingen – Python har ikke superklasser'
      ],
      correctAnswer: 1,
      explanation: 'Kjøretøy er superklassen (foreldren), mens Bil er subklassen (barnet) som arver fra Kjøretøy.'
    },
    {
      id: 'it2-1-4-text-1',
      type: 'text',
      content: `## Utvide med nye attributter og metoder

Når du arver, kan du legge til nye attributter og metoder i subklassen:

\`\`\`python
class Dyr:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def beskriv(self):
        print(f"{self.navn} er {self.alder} år gammel")

class Hund(Dyr):
    def __init__(self, navn, alder, rase):
        self.navn = navn
        self.alder = alder
        self.rase = rase  # Nytt attributt

    def apporter(self):  # Ny metode
        print(f"{self.navn} apporterer!")

# Bruk
hund = Hund("Fido", 3, "Golden Retriever")
hund.beskriv()    # Fido er 3 år gammel (arvet)
hund.apporter()   # Fido apporterer! (ny)
print(hund.rase)  # Golden Retriever (nytt attributt)
\`\`\`

Men her er det et problem: Vi gjentar kode i \`__init__\`. Løsningen er \`super()\`.`
    },
    {
      id: 'it2-1-4-def-2',
      type: 'definition',
      title: 'super() – kalle superklassens metoder',
      content: `**super()** brukes til å kalle metoder fra superklassen. Dette er spesielt nyttig i konstruktører (\`__init__\`) for å gjenbruke oppsettskode.

Syntaks:
\`\`\`python
class Subklasse(Superklasse):
    def __init__(self, ...):
        super().__init__(...)  # Kaller Superklasse.__init__
        # ... legg til egne attributter
\`\`\`

**super()** returnerer en proxy til superklassen, slik at du kan kalle dens metoder.`
    },
    {
      id: 'it2-1-4-example-2',
      type: 'example',
      title: 'Bruk av super() i konstruktør',
      content: `La oss forbedre Hund-eksemplet med \`super()\`:

\`\`\`python
class Dyr:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder
        print(f"Opprettet dyr: {navn}")

    def beskriv(self):
        print(f"{self.navn} er {self.alder} år gammel")

class Hund(Dyr):
    def __init__(self, navn, alder, rase):
        super().__init__(navn, alder)  # Kaller Dyr.__init__
        self.rase = rase
        print(f"Det er en {rase}")

    def beskriv(self):
        super().beskriv()  # Kaller Dyr.beskriv()
        print(f"Rasen er {self.rase}")

# Bruk
hund = Hund("Fido", 3, "Golden Retriever")
# Output:
# Opprettet dyr: Fido
# Det er en Golden Retriever

hund.beskriv()
# Output:
# Fido er 3 år gammel
# Rasen er Golden Retriever
\`\`\`

**Fordeler med super():**
- Unngår duplisering av kode
- Hvis Dyr.__init__ endres, fungerer Hund fortsatt
- Klar indikasjon på hvilken metode som kalles`
    },
    {
      id: 'it2-1-4-exercise-2',
      type: 'exercise',
      title: 'Person og Student med super()',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag to klasser:\n\n1. `Person` med attributter `navn` og `alder`, og metode `introduser()` som skriver ut "Hei, jeg heter [navn]"\n\n2. `Student` som arver fra Person og har ekstra attributt `studieprogram`. Bruk `super()` i konstruktøren. Overstyrt `introduser()` slik at den også nevner studieprogrammet.\n\nEksempel:\n```python\nstudent = Student("Kari", 20, "Informatikk")\nstudent.introduser()\n# Hei, jeg heter Kari\n# Jeg studerer Informatikk\n```',
      hint: 'Bruk super().__init__(...) i Student.__init__, og super().introduser() i Student.introduser().',
      answer: `\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def introduser(self):
        print(f"Hei, jeg heter {self.navn}")

class Student(Person):
    def __init__(self, navn, alder, studieprogram):
        super().__init__(navn, alder)
        self.studieprogram = studieprogram

    def introduser(self):
        super().introduser()  # Kaller Person.introduser()
        print(f"Jeg studerer {self.studieprogram}")

# Test
student = Student("Kari", 20, "Informatikk")
student.introduser()
# Hei, jeg heter Kari
# Jeg studerer Informatikk

person = Person("Ola", 30)
person.introduser()
# Hei, jeg heter Ola
\`\`\``
    },
    {
      id: 'it2-1-4-text-2',
      type: 'text',
      content: `## Override – overstyre metoder

Når en subklasse definerer en metode med samme navn som i superklassen, sier vi at den **overstyrer** (overrides) metoden. Dette lar oss spesialisere oppførselen:

\`\`\`python
class Bankkonto:
    def __init__(self, kontonummer, saldo=0):
        self.kontonummer = kontonummer
        self.saldo = saldo

    def ta_ut(self, belop):
        if belop <= self.saldo:
            self.saldo -= belop
            return True
        print("Ikke nok penger")
        return False

class Sparekonto(Bankkonto):
    def __init__(self, kontonummer, saldo=0, min_saldo=1000):
        super().__init__(kontonummer, saldo)
        self.min_saldo = min_saldo

    def ta_ut(self, belop):
        # Overstyrt versjon med ekstra regel
        if self.saldo - belop < self.min_saldo:
            print(f"Kan ikke ta ut – må ha minst {self.min_saldo} kr")
            return False
        return super().ta_ut(belop)  # Kaller Bankkonto.ta_ut

# Bruk
vanlig = Bankkonto("11111111", 2000)
vanlig.ta_ut(1900)  # OK
print(vanlig.saldo)  # 100

spare = Sparekonto("22222222", 2000, min_saldo=1000)
spare.ta_ut(1100)  # Kan ikke ta ut – må ha minst 1000 kr
spare.ta_ut(900)   # OK
print(spare.saldo)  # 1100
\`\`\`

Sparekonto har strengere regler, men gjenbruker logikken fra Bankkonto via \`super()\`.`
    },
    {
      id: 'it2-1-4-exercise-3',
      type: 'exercise',
      title: 'Override vs super',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hva er forskjellen på å override en metode med og uten å kalle super()?\n\n```python\n# Versjon A\nclass Hund(Dyr):\n    def lag_lyd(self):\n        print("Voff!")\n\n# Versjon B\nclass Hund(Dyr):\n    def lag_lyd(self):\n        super().lag_lyd()\n        print("Voff!")\n```',
      options: [
        'Ingen forskjell – begge gjør det samme',
        'Versjon A erstatter metoden helt, B kjører først superklassens versjon',
        'Versjon B gir feilmelding',
        'Versjon A arver ikke metoden'
      ],
      correctAnswer: 1,
      explanation: 'Versjon A erstatter lag_lyd() fullstendig. Versjon B kjører først Dyr.lag_lyd() (via super()), deretter legger til sin egen funksjonalitet. Dette kalles "utvidelse" av metoden.'
    },
    {
      id: 'it2-1-4-text-3',
      type: 'text',
      content: `## isinstance() – sjekke objekttype

Noen ganger må du sjekke om et objekt er av en bestemt klasse, eller arver fra en klasse. Til dette bruker vi \`isinstance()\`:

\`\`\`python
class Dyr:
    pass

class Hund(Dyr):
    pass

class Katt(Dyr):
    pass

# Lag objekter
hund = Hund()
katt = Katt()

# isinstance(objekt, Klasse) returnerer True/False
print(isinstance(hund, Hund))   # True
print(isinstance(hund, Dyr))    # True (Hund arver fra Dyr)
print(isinstance(hund, Katt))   # False

print(isinstance(katt, Katt))   # True
print(isinstance(katt, Dyr))    # True
print(isinstance(katt, Hund))   # False

# isinstance kan også sjekke mot tuple av klasser
print(isinstance(hund, (Hund, Katt)))  # True (hund er Hund)
\`\`\`

**Brukstilfeller:**
- Validere input til funksjoner
- Ulik behandling av forskjellige objekttyper
- Unngå feil når du kaller metoder som bare finnes i visse subklasser`
    },
    {
      id: 'it2-1-4-exercise-4',
      type: 'exercise',
      title: 'Bruke isinstance()',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Skriv en funksjon `fôr_dyr(dyr)` som tar inn et Dyr-objekt og:\n- Hvis det er en Hund, skriv "Gir hundemat"\n- Hvis det er en Katt, skriv "Gir kattemat"\n- Hvis det er et annet Dyr, skriv "Gir generell mat"\n\nBruk isinstance() for å sjekke typen.',
      hint: 'Sjekk mest spesifikke typer først (Hund, Katt), deretter den generelle (Dyr).',
      answer: `\`\`\`python
class Dyr:
    def __init__(self, navn):
        self.navn = navn

class Hund(Dyr):
    pass

class Katt(Dyr):
    pass

def fôr_dyr(dyr):
    if isinstance(dyr, Hund):
        print(f"Gir hundemat til {dyr.navn}")
    elif isinstance(dyr, Katt):
        print(f"Gir kattemat til {dyr.navn}")
    elif isinstance(dyr, Dyr):
        print(f"Gir generell mat til {dyr.navn}")
    else:
        print("Dette er ikke et dyr!")

# Test
hund = Hund("Fido")
katt = Katt("Mimir")
dyr = Dyr("Ukjent")

fôr_dyr(hund)  # Gir hundemat til Fido
fôr_dyr(katt)  # Gir kattemat til Mimir
fôr_dyr(dyr)   # Gir generell mat til Ukjent
\`\`\`

**Viktig:** Vi må sjekke Hund og Katt FØR vi sjekker Dyr, fordi en Hund er også et Dyr (isinstance(hund, Dyr) er True).`
    },
    {
      id: 'it2-1-4-text-4',
      type: 'text',
      content: `## Hierarkier og spesialisering

Arv lar oss bygge **hierarkier** av klasser, fra generelle til spesifikke:

\`\`\`
        Dyr
         |
    +----+----+
    |         |
  Pattedyr  Fugl
    |         |
  +---+     +---+
  |   |     |   |
Hund Katt Ørn Spurv
\`\`\`

Dette kalles **spesialisering** (nedover i hierarkiet) eller **generalisering** (oppover):

\`\`\`python
class Dyr:
    def __init__(self, navn):
        self.navn = navn

    def spis(self):
        print(f"{self.navn} spiser")

class Pattedyr(Dyr):
    def die(self):
        print(f"{self.navn} dier")

class Hund(Pattedyr):
    def bjeff(self):
        print(f"{self.navn}: Voff!")

# Hund arver fra både Pattedyr og Dyr
hund = Hund("Fido")
hund.spis()   # Fra Dyr
hund.die()    # Fra Pattedyr
hund.bjeff()  # Fra Hund
\`\`\`

**is-a relasjonen gjelder hele veien:**
- En Hund "er et" Pattedyr
- Et Pattedyr "er et" Dyr
- Derfor: En Hund "er et" Dyr

Dette bekreftes med isinstance:
\`\`\`python
print(isinstance(hund, Hund))      # True
print(isinstance(hund, Pattedyr))  # True
print(isinstance(hund, Dyr))       # True
\`\`\``
    },
    {
      id: 'it2-1-4-exercise-5',
      type: 'exercise',
      title: 'Kjøretøy-hierarki',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag et hierarki med klassene:\n\n- `Kjøretøy` (superklasse): attributt `merke`, metode `start()`\n- `Bil` (arver fra Kjøretøy): attributt `antall_dører`\n- `Elbil` (arver fra Bil): attributt `batterikapasitet`, metode `lad(timer)` som øker batteriet\n\nBruk super() i alle konstruktører.\n\nTest at en Elbil kan bruke metoder fra alle tre nivåer.',
      hint: 'Husk super().__init__(...) i hver konstruktør for å kalle foreldrekonstruktøren.',
      answer: `\`\`\`python
class Kjøretøy:
    def __init__(self, merke):
        self.merke = merke

    def start(self):
        print(f"{self.merke} starter")

class Bil(Kjøretøy):
    def __init__(self, merke, antall_dører):
        super().__init__(merke)
        self.antall_dører = antall_dører

    def beskriv(self):
        print(f"{self.merke} med {self.antall_dører} dører")

class Elbil(Bil):
    def __init__(self, merke, antall_dører, batterikapasitet):
        super().__init__(merke, antall_dører)
        self.batterikapasitet = batterikapasitet
        self.batterinivå = 50  # Start med 50%

    def lad(self, timer):
        self.batterinivå += timer * 10  # 10% per time
        if self.batterinivå > 100:
            self.batterinivå = 100
        print(f"Ladet i {timer} timer. Batterinivå: {self.batterinivå}%")

# Test
elbil = Elbil("Tesla Model 3", 4, 75)

elbil.start()          # Fra Kjøretøy: Tesla Model 3 starter
elbil.beskriv()        # Fra Bil: Tesla Model 3 med 4 dører
elbil.lad(3)           # Fra Elbil: Ladet i 3 timer. Batterinivå: 80%

print(isinstance(elbil, Elbil))     # True
print(isinstance(elbil, Bil))       # True
print(isinstance(elbil, Kjøretøy))  # True
\`\`\``
    },
    {
      id: 'it2-1-4-text-5',
      type: 'text',
      content: `## Når skal du bruke arv?

Arv er kraftig, men kan også misbrukes. Her er retningslinjer:

**Bruk arv når:**
- Det er en klar "is-a" relasjon (en Elbil **er en** Bil)
- Subklassen er en spesialisering av superklassen
- Du vil gjenbruke mye felles kode
- Endringer i superklassen skal påvirke subklassene

**Ikke bruk arv når:**
- Relasjonen er "has-a" (en Bil **har en** Motor – bruk komposisjon)
- Du bare vil gjenbruke noe kode (vurder funksjoner eller komposisjon)
- Hierarkiet blir for dypt (mer enn 3-4 nivåer)

**Eksempel på "has-a" (komposisjon):**

\`\`\`python
# FEIL: Bil arver fra Motor
class Motor:
    pass

class Bil(Motor):  # Gir ikke mening – en bil er ikke en motor!
    pass

# RIKTIG: Bil har en Motor
class Motor:
    def __init__(self, hestekrefter):
        self.hestekrefter = hestekrefter

class Bil:
    def __init__(self, merke):
        self.merke = merke
        self.motor = Motor(150)  # Bil HAR en motor
\`\`\`

Tommelfingerregel: **"Favor composition over inheritance"** (Foretrekk komposisjon over arv) når du er i tvil.`
    },
    {
      id: 'it2-1-4-exercise-6',
      type: 'exercise',
      title: 'Is-a vs. Has-a',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hvilken av følgende er en god bruk av arv ("is-a" relasjon)?',
      options: [
        'class Hus(Dør): – et hus er en dør',
        'class Laptop(Skjerm): – en laptop er en skjerm',
        'class Elev(Person): – en elev er en person',
        'class Bil(Gir): – en bil er et gir'
      ],
      correctAnswer: 2,
      explanation: 'Elev er en Person er en klar "is-a" relasjon. De andre er "has-a" relasjoner: Et Hus har en Dør, en Laptop har en Skjerm, en Bil har et Gir. Disse bør modelleres med komposisjon, ikke arv.'
    },
    {
      id: 'it2-1-4-summary',
      type: 'summary',
      title: 'Oppsummering',
      content: `I dette kapittelet har du lært:

- **Arv** lar en klasse (subklasse) overta attributter og metoder fra en annen klasse (superklasse)
- **Syntaks**: \`class Subklasse(Superklasse):\`
- **super()** brukes til å kalle superklassens metoder, spesielt i \`__init__\`
- **Override** betyr å overskrive en metode fra superklassen
- **isinstance(objekt, Klasse)** sjekker om et objekt er av en klasse eller arver fra den
- **"is-a" relasjon** indikerer at arv passer (en Hund er et Dyr)
- **"has-a" relasjon** indikerer komposisjon (en Bil har en Motor)
- **Hierarkier** kan bygges med flere nivåer av arv
- **Spesialisering** går fra generell til spesifikk klasse

I neste kapittel skal vi se på **polymorfisme og abstraksjon** – hvordan ulike objekter kan brukes på samme måte.`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-1-4-exercise-7',
      type: 'exercise',
      title: 'Ansatt-hierarki',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag et hierarki for ansatte i et firma:\n\n1. `Ansatt` (superklasse): attributter `navn`, `lønn`, metode `årslønn()` som returnerer lønn × 12\n\n2. `Manager` (arver fra Ansatt): ekstra attributt `bonus`, overstyrt `årslønn()` som inkluderer bonus\n\n3. `Utvikler` (arver fra Ansatt): ekstra attributt `programmeringsspråk` (en liste)\n\nLag deretter en funksjon `skriv_rapport(ansatte)` som tar en liste med ansatte og skriver ut info om hver.\n\nBruk isinstance() for å gi ekstra info om Managere og Utviklere.',
      hint: 'Bruk super() i konstruktører og ved override av årslønn().',
      answer: `\`\`\`python
class Ansatt:
    def __init__(self, navn, lønn):
        self.navn = navn
        self.lønn = lønn

    def årslønn(self):
        return self.lønn * 12

class Manager(Ansatt):
    def __init__(self, navn, lønn, bonus):
        super().__init__(navn, lønn)
        self.bonus = bonus

    def årslønn(self):
        return super().årslønn() + self.bonus

class Utvikler(Ansatt):
    def __init__(self, navn, lønn, programmeringsspråk):
        super().__init__(navn, lønn)
        self.programmeringsspråk = programmeringsspråk

def skriv_rapport(ansatte):
    print("=== PERSONALRAPPORT ===\\n")
    for ansatt in ansatte:
        print(f"Navn: {ansatt.navn}")
        print(f"Årslønn: {ansatt.årslønn()} kr")

        if isinstance(ansatt, Manager):
            print(f"Rolle: Manager (bonus: {ansatt.bonus} kr)")
        elif isinstance(ansatt, Utvikler):
            språk = ", ".join(ansatt.programmeringsspråk)
            print(f"Rolle: Utvikler (kan: {språk})")
        else:
            print("Rolle: Ansatt")

        print()

# Test
ansatte = [
    Ansatt("Ola Nordmann", 40000),
    Manager("Kari Sjefen", 60000, 100000),
    Utvikler("Per Koder", 50000, ["Python", "JavaScript", "Go"])
]

skriv_rapport(ansatte)

# Output:
# === PERSONALRAPPORT ===
#
# Navn: Ola Nordmann
# Årslønn: 480000 kr
# Rolle: Ansatt
#
# Navn: Kari Sjefen
# Årslønn: 820000 kr
# Rolle: Manager (bonus: 100000 kr)
#
# Navn: Per Koder
# Årslønn: 600000 kr
# Rolle: Utvikler (kan: Python, JavaScript, Go)
\`\`\``
    },
    {
      id: 'it2-1-4-exercise-8',
      type: 'exercise',
      title: 'Feilsøking i arv',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Følgende kode har problemer. Identifiser og fiks minst 3 feil:\n\n```python\nclass Form:\n    def __init__(self, farge):\n        self.farge = farge\n\n    def areal(self):\n        return 0\n\nclass Rektangel(Form):\n    def __init__(self, farge, lengde, bredde):\n        self.farge = farge\n        self.lengde = lengde\n        self.bredde = bredde\n\n    def areal():\n        return lengde * bredde\n\nrekt = Rektangel("rød", 5, 3)\nprint(rekt.areal())\nprint(isinstance(rekt, Form))\n```',
      hint: 'Se etter manglende super(), manglende self, og feil referanser til attributter.',
      answer: `**Feil i koden:**

1. **Feil: Mangler \`super().__init__\` i Rektangel**
   - Vi bør bruke super() for å kalle Form.__init__ i stedet for å duplisere \`self.farge = farge\`

2. **Feil: \`areal()\` mangler \`self\` parameter**
   - Alle metoder må ha self som første parameter
   - Riktig: \`def areal(self):\`

3. **Feil: Refererer til \`lengde\` og \`bredde\` uten \`self.\`**
   - Inne i metoder må vi bruke \`self.lengde\` og \`self.bredde\`

**Rettet kode:**

\`\`\`python
class Form:
    def __init__(self, farge):
        self.farge = farge

    def areal(self):
        return 0

class Rektangel(Form):
    def __init__(self, farge, lengde, bredde):
        super().__init__(farge)  # FIX 1: Bruk super()
        self.lengde = lengde
        self.bredde = bredde

    def areal(self):  # FIX 2: Legg til self
        return self.lengde * self.bredde  # FIX 3: Bruk self.

rekt = Rektangel("rød", 5, 3)
print(rekt.areal())              # 15
print(isinstance(rekt, Form))    # True
print(isinstance(rekt, Rektangel))  # True
\`\`\`

**Ekstra forbedringer:**
- Kunne ha overstyrt areal() for å kalle super().areal() hvis det var nødvendig, men her trenger vi ikke det siden Form.areal() bare returnerer 0.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.5: Polymorfisme og abstraksjon
// ============================================================================

export const CHAPTER_IT_2_1_5: TextbookChapter = {
  id: 'it-2-1-5',
  courseId: 'it-2',
  title: 'Polymorfisme og abstraksjon',
  description: 'Lær om polymorfisme (duck typing, overstyring av metoder), abstrakte klasser, grensesnitt i Python og åpen/lukket-prinsippet.',
  section: 'Seksjon 1: Objektorientert programmering – grunnlag',
  previousChapterId: 'it-2-1-4',
  nextChapterId: 'it-2-2-1',
  estimatedMinutes: 55,
  keyTerms: [
    'Polymorfisme',
    'Duck typing',
    'Metode-overstyring (override)',
    'Abstrakt klasse',
    'Abstrakt metode',
    'abc-modulen',
    'Grensesnitt (interface)',
    'Protokoll (Protocol)',
    'Åpen/lukket-prinsippet'
  ],
  content: [
    {
      id: 'it2-1-5-intro',
      type: 'text',
      content: `# Polymorfisme og abstraksjon

I forrige kapittel lærte du om **arv** – hvordan klasser kan bygge videre på hverandre. Nå skal vi ta dette et steg videre og utforske to av de kraftigste konseptene i objektorientert programmering: **polymorfisme** og **abstraksjon**.

Polymorfisme betyr bokstavelig talt «mange former». I programmering betyr det at ulike objekter kan brukes på samme måte, selv om de oppfører seg forskjellig. Tenk på en universalfjernkontroll: den har en «spill av»-knapp som fungerer uansett om du bruker den til en TV, en DVD-spiller eller en spillkonsoll. Knappen er den samme, men resultatet er forskjellig.

Abstraksjon handler om å definere **hva** noe skal gjøre, uten å bestemme **hvordan** det gjøres. Det er som en stillingsbeskrivelse: den sier hva jobben innebærer, men ikke nøyaktig hvordan hver ansatt utfører oppgavene.`
    },
    {
      id: 'it2-1-5-def-1',
      type: 'definition',
      title: 'Polymorfisme',
      content: `**Polymorfisme** (fra gresk: poly = mange, morph = form) er evnen til at objekter av ulike klasser kan behandles likt – for eksempel ved å kalle samme metode – men oppføre seg forskjellig.

Det finnes to hovedformer for polymorfisme i Python:

- **Duck typing**: Hvis et objekt har riktig metode, kan det brukes – uavhengig av klasse. «Hvis det går som en and og kvakker som en and, er det en and.»
- **Metode-overstyring (override)**: Subklasser definerer sin egen versjon av en metode som finnes i superklassen.`
    },
    {
      id: 'it2-1-5-example-1',
      type: 'example',
      title: 'Polymorfisme i praksis',
      content: `La oss se på et klassisk eksempel med geometriske former:

\`\`\`python
import math

class Form:
    def areal(self):
        return 0

    def beskrivelse(self):
        return "Ukjent form"

class Sirkel(Form):
    def __init__(self, radius):
        self.radius = radius

    def areal(self):
        return math.pi * self.radius ** 2

    def beskrivelse(self):
        return f"Sirkel med radius {self.radius}"

class Rektangel(Form):
    def __init__(self, lengde, bredde):
        self.lengde = lengde
        self.bredde = bredde

    def areal(self):
        return self.lengde * self.bredde

    def beskrivelse(self):
        return f"Rektangel ({self.lengde} x {self.bredde})"

class Trekant(Form):
    def __init__(self, grunnlinje, hoyde):
        self.grunnlinje = grunnlinje
        self.hoyde = hoyde

    def areal(self):
        return 0.5 * self.grunnlinje * self.hoyde

    def beskrivelse(self):
        return f"Trekant (grunnlinje={self.grunnlinje}, høyde={self.hoyde})"

# Polymorfisme: Behandle alle former likt!
former = [Sirkel(5), Rektangel(4, 6), Trekant(3, 8)]

for form in former:
    print(f"{form.beskrivelse()}: areal = {form.areal():.2f}")
\`\`\`

**Utskrift:**
\`\`\`
Sirkel med radius 5: areal = 78.54
Rektangel (4 x 6): areal = 24.00
Trekant (grunnlinje=3, høyde=8): areal = 12.00
\`\`\`

**Nøkkelpunkt:** Vi kaller \`areal()\` og \`beskrivelse()\` på hvert objekt uten å bry oss om hvilken klasse det tilhører. Hver klasse har sin egen implementasjon, men **grensesnittet er det samme**.`
    },
    {
      id: 'it2-1-5-exercise-1',
      type: 'exercise',
      title: 'Forstå polymorfisme',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hva er polymorfisme i objektorientert programmering?',
      options: [
        'At en klasse kan arve fra flere superklasser',
        'At ulike objekter kan behandles likt, men oppføre seg forskjellig',
        'At en klasse kan ha flere konstruktører',
        'At metoder kan ha samme navn men forskjellige parametre'
      ],
      correctAnswer: 1,
      explanation: 'Polymorfisme betyr at ulike objekter kan behandles på samme måte (f.eks. kalle samme metode), men de oppfører seg forskjellig basert på sin klasse. I eksempelet over kaller vi areal() på alle former, men resultatet avhenger av om det er en sirkel, rektangel eller trekant.'
    },
    {
      id: 'it2-1-5-text-1',
      type: 'text',
      content: `## Duck typing i Python

Python er et **dynamisk typet** språk. Det betyr at Python ikke sjekker hvilken klasse et objekt tilhører – den sjekker bare om objektet har metoden vi prøver å kalle. Dette kalles **duck typing**.

Navnet kommer fra uttrykket: *«Hvis det går som en and, svømmer som en and og kvakker som en and, er det sannsynligvis en and.»*

I praksis betyr dette at du ikke trenger arv for å få polymorfisme i Python. Så lenge objektene har de riktige metodene, fungerer det.`
    },
    {
      id: 'it2-1-5-example-2',
      type: 'example',
      title: 'Duck typing',
      content: `Her ser vi hvordan duck typing fungerer uten arv:

\`\`\`python
class Hund:
    def lyd(self):
        return "Voff!"

class Katt:
    def lyd(self):
        return "Mjau!"

class Ku:
    def lyd(self):
        return "Møø!"

# Ingen felles superklasse – men alle har lyd()-metoden!
def dyrelyder(dyr_liste):
    for dyr in dyr_liste:
        print(dyr.lyd())

mine_dyr = [Hund(), Katt(), Ku()]
dyrelyder(mine_dyr)
\`\`\`

**Utskrift:**
\`\`\`
Voff!
Mjau!
Møø!
\`\`\`

Funksjonen \`dyrelyder()\` bryr seg ikke om hvilke klasser objektene tilhører. Den spør bare: «Har du en \`lyd()\`-metode?» Hvis ja, fungerer det!

**Merk:** Hvis vi sender inn et objekt som *ikke* har \`lyd()\`, får vi en \`AttributeError\`. Det er risikoen med duck typing – feil oppdages først ved kjøring.`
    },
    {
      id: 'it2-1-5-exercise-2',
      type: 'exercise',
      title: 'Duck typing i praksis',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag tre klasser – `Bil`, `Sykkel` og `Baat` – som alle har en metode `kjor()` som returnerer en passende tekst. Skriv deretter en funksjon `start_alle(kjoretoy_liste)` som kaller `kjor()` på hvert element i listen.\n\nKjør programmet med en liste som inneholder ett objekt av hver klasse.',
      hint: 'Du trenger ikke arv. Bare sørg for at alle klassene har en kjor()-metode.',
      answer: `\`\`\`python
class Bil:
    def kjor(self):
        return "Bilen kjører på veien"

class Sykkel:
    def kjor(self):
        return "Sykkelen trår i pedalene"

class Baat:
    def kjor(self):
        return "Båten seiler på vannet"

def start_alle(kjoretoy_liste):
    for kjoretoy in kjoretoy_liste:
        print(kjoretoy.kjor())

# Test med en blanding av kjøretøy
mine_kjoretoy = [Bil(), Sykkel(), Baat()]
start_alle(mine_kjoretoy)
\`\`\`

**Utskrift:**
\`\`\`
Bilen kjører på veien
Sykkelen trår i pedalene
Båten seiler på vannet
\`\`\`

Dette fungerer takket være duck typing – Python bryr seg ikke om klassen, bare at objektet har \`kjor()\`-metoden.`
    },
    {
      id: 'it2-1-5-text-2',
      type: 'text',
      content: `## Abstrakte klasser

Noen ganger vil vi lage en superklasse som **aldri skal instansieres direkte**. Den finnes bare for å definere et felles grensesnitt som subklassene *må* implementere.

For eksempel: Det gir mening å lage en \`Sirkel\` eller \`Rektangel\`, men en generisk \`Form\` alene gir ikke mening – hva slags form er det? Vi kan bruke **abstrakte klasser** for å uttrykke dette.

Python har modulen \`abc\` (Abstract Base Classes) som lar oss definere abstrakte klasser og metoder.`
    },
    {
      id: 'it2-1-5-def-2',
      type: 'definition',
      title: 'Abstrakt klasse og abstrakt metode',
      content: `- **Abstrakt klasse**: En klasse som ikke kan instansieres direkte. Den fungerer som en mal som subklasser må følge.
- **Abstrakt metode**: En metode som er deklarert i den abstrakte klassen, men som *ikke har noen implementasjon*. Subklasser **må** implementere (overstyre) alle abstrakte metoder.

I Python bruker vi dekoratoren \`@abstractmethod\` fra \`abc\`-modulen for å markere en metode som abstrakt.`
    },
    {
      id: 'it2-1-5-example-3',
      type: 'example',
      title: 'Abstrakte klasser med abc',
      content: `\`\`\`python
from abc import ABC, abstractmethod

class Form(ABC):
    """Abstrakt superklasse for geometriske former."""

    @abstractmethod
    def areal(self):
        """Beregn arealet. Alle subklasser MÅ implementere denne."""
        pass

    @abstractmethod
    def omkrets(self):
        """Beregn omkretsen. Alle subklasser MÅ implementere denne."""
        pass

    def vis_info(self):
        """Konkret metode – arves av alle subklasser."""
        print(f"Areal: {self.areal():.2f}")
        print(f"Omkrets: {self.omkrets():.2f}")

class Sirkel(Form):
    def __init__(self, radius):
        self.radius = radius

    def areal(self):
        import math
        return math.pi * self.radius ** 2

    def omkrets(self):
        import math
        return 2 * math.pi * self.radius

class Kvadrat(Form):
    def __init__(self, side):
        self.side = side

    def areal(self):
        return self.side ** 2

    def omkrets(self):
        return 4 * self.side

# Bruk:
s = Sirkel(5)
s.vis_info()
# Areal: 78.54
# Omkrets: 31.42

k = Kvadrat(4)
k.vis_info()
# Areal: 16.00
# Omkrets: 16.00

# Prøv å lage en Form direkte:
# form = Form()  # TypeError: Can't instantiate abstract class Form
\`\`\`

**Viktige poenger:**
1. \`Form\` arver fra \`ABC\` (Abstract Base Class) – dette gjør den abstrakt
2. \`areal()\` og \`omkrets()\` har \`@abstractmethod\` – subklasser **må** implementere dem
3. \`vis_info()\` er en vanlig metode som alle subklasser arver
4. Du **kan ikke** lage et objekt av \`Form\` direkte – du får \`TypeError\``
    },
    {
      id: 'it2-1-5-exercise-3',
      type: 'exercise',
      title: 'Hva skjer?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      question: 'Hva skjer hvis du prøver å kjøre denne koden?\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass Dyr(ABC):\n    @abstractmethod\n    def lyd(self):\n        pass\n\nclass Hund(Dyr):\n    pass\n\nh = Hund()\n```',
      options: [
        'Programmet kjører uten feil, men lyd() gjør ingenting',
        'TypeError: Hund må implementere den abstrakte metoden lyd()',
        'SyntaxError: abstractmethod er ugyldig',
        'Programmet kjører og Hund arver lyd() fra Dyr'
      ],
      correctAnswer: 1,
      explanation: 'Fordi Dyr har den abstrakte metoden lyd(), og Hund ikke implementerer (overstyrer) den, kan vi ikke lage et Hund-objekt. Python gir TypeError og sier at Hund må implementere alle abstrakte metoder.'
    },
    {
      id: 'it2-1-5-example-4',
      type: 'example',
      title: 'Manglende implementasjon gir feil',
      content: `La oss se hva som skjer når vi glemmer å implementere en abstrakt metode:

\`\`\`python
from abc import ABC, abstractmethod

class Betaling(ABC):
    @abstractmethod
    def betal(self, belop):
        pass

    @abstractmethod
    def kvittering(self):
        pass

class Kortbetaling(Betaling):
    def __init__(self, kortnummer):
        self.kortnummer = kortnummer

    def betal(self, belop):
        print(f"Betaler {belop} kr med kort {self.kortnummer[-4:]}")

    # OBS: Vi glemte å implementere kvittering()!

# Dette gir feil:
# k = Kortbetaling("1234567890123456")
# TypeError: Can't instantiate abstract class Kortbetaling
# with abstract method kvittering
\`\`\`

Python tvinger oss til å implementere **alle** abstrakte metoder. Dette er en kraftig sikkerhet – det garanterer at alle subklasser har den funksjonaliteten vi forventer.

**Rettet versjon:**
\`\`\`python
class Kortbetaling(Betaling):
    def __init__(self, kortnummer):
        self.kortnummer = kortnummer

    def betal(self, belop):
        print(f"Betaler {belop} kr med kort {self.kortnummer[-4:]}")

    def kvittering(self):
        return f"Kvittering: Kortbetaling med kort ****{self.kortnummer[-4:]}"
\`\`\`

Nå kan vi lage et \`Kortbetaling\`-objekt uten feil.`
    },
    {
      id: 'it2-1-5-exercise-4',
      type: 'exercise',
      title: 'Abstrakt klasse for dyr',
      difficulty: 'medium',
      exerciseType: 'classic',
      question: 'Lag en abstrakt klasse `Dyr` med:\n- En abstrakt metode `lyd()` som returnerer en streng\n- En abstrakt metode `beveg()` som returnerer en streng\n- En konkret metode `presenter()` som skriver ut dyrets lyd og bevegelsesmåte\n\nLag deretter to subklasser: `Fisk` og `Fugl`. Lag ett objekt av hver og kall `presenter()` på begge.',
      hint: 'Husk å importere ABC og abstractmethod fra abc. Den konkrete metoden presenter() kan kalle self.lyd() og self.beveg().',
      answer: `\`\`\`python
from abc import ABC, abstractmethod

class Dyr(ABC):
    @abstractmethod
    def lyd(self):
        pass

    @abstractmethod
    def beveg(self):
        pass

    def presenter(self):
        print(f"Lyd: {self.lyd()}")
        print(f"Bevegelse: {self.beveg()}")
        print()

class Fisk(Dyr):
    def lyd(self):
        return "Blub blub"

    def beveg(self):
        return "Svømmer i vannet"

class Fugl(Dyr):
    def lyd(self):
        return "Kvitrer!"

    def beveg(self):
        return "Flyr i luften"

# Test
fisk = Fisk()
fisk.presenter()
# Lyd: Blub blub
# Bevegelse: Svømmer i vannet

fugl = Fugl()
fugl.presenter()
# Lyd: Kvitrer!
# Bevegelse: Flyr i luften
\`\`\`

Den abstrakte klassen \`Dyr\` tvinger subklassene til å implementere \`lyd()\` og \`beveg()\`, mens \`presenter()\` er en felles metode som bruker disse.`
    },
    {
      id: 'it2-1-5-text-3',
      type: 'text',
      content: `## Grensesnitt og protokoller i Python

I mange programmeringsspråk (som Java og C#) finnes det egne **grensesnitt** (interfaces) som definerer hvilke metoder en klasse må ha. Python har ikke et eget \`interface\`-nøkkelord, men tilbyr to alternativer:

1. **Abstrakte klasser** (som vi nettopp har sett) – fungerer som grensesnitt
2. **Protokoller** (\`Protocol\` fra \`typing\`-modulen) – en mer moderne tilnærming

En **protokoll** definerer et sett med metoder som et objekt må ha, uten å kreve arv. Det er en formalisering av duck typing.`
    },
    {
      id: 'it2-1-5-example-5',
      type: 'example',
      title: 'Protokoller i Python',
      content: `\`\`\`python
from typing import Protocol

class Lagrbar(Protocol):
    """Alle klasser som kan lagres må ha disse metodene."""

    def lagre(self, filnavn: str) -> None:
        ...

    def last_inn(self, filnavn: str) -> None:
        ...

class Dokument:
    def __init__(self, innhold: str):
        self.innhold = innhold

    def lagre(self, filnavn: str) -> None:
        print(f"Lagrer dokument til {filnavn}")

    def last_inn(self, filnavn: str) -> None:
        print(f"Laster dokument fra {filnavn}")

class Bilde:
    def __init__(self, bredde: int, hoyde: int):
        self.bredde = bredde
        self.hoyde = hoyde

    def lagre(self, filnavn: str) -> None:
        print(f"Lagrer bilde ({self.bredde}x{self.hoyde}) til {filnavn}")

    def last_inn(self, filnavn: str) -> None:
        print(f"Laster bilde fra {filnavn}")

def sikkerhetskopi(objekter: list[Lagrbar]) -> None:
    """Lagrer alle objekter som følger Lagrbar-protokollen."""
    for obj in objekter:
        obj.lagre("backup.dat")

# Fungerer – begge har lagre() og last_inn()
filer = [Dokument("Hei"), Bilde(800, 600)]
sikkerhetskopi(filer)
\`\`\`

**Forskjell fra abstrakte klasser:**
- Protokoller krever **ingen arv** – klassen trenger bare å ha riktige metoder
- Protokoller er primært for **typesjekkere** (som mypy), ikke kjøretidskontroll
- Abstrakte klasser gir feilmelding ved kjøring, protokoller ved typesjekkingen`
    },
    {
      id: 'it2-1-5-exercise-5',
      type: 'exercise',
      title: 'Abstrakt klasse vs. protokoll',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hva er hovedforskjellen mellom en abstrakt klasse (ABC) og en protokoll (Protocol) i Python?',
      options: [
        'Abstrakte klasser er raskere å kjøre enn protokoller',
        'Protokoller krever arv, men abstrakte klasser gjør det ikke',
        'Abstrakte klasser krever arv og gir kjøretidsfeil, protokoller sjekker bare typer',
        'Det er ingen forskjell – de fungerer på nøyaktig samme måte'
      ],
      correctAnswer: 2,
      explanation: 'Abstrakte klasser (ABC) krever at subklassen arver fra dem og gir TypeError ved kjøring hvis abstrakte metoder mangler. Protokoller (Protocol) krever ingen arv – de sjekker bare at objektet har riktige metoder, og dette skjer primært gjennom typesjekkere som mypy.'
    },
    {
      id: 'it2-1-5-text-4',
      type: 'text',
      content: `## Åpen/lukket-prinsippet

Polymorfisme og abstraksjon gjør det mulig å følge et viktig designprinsipp i programvareutvikling: **åpen/lukket-prinsippet** (Open/Closed Principle).

> Programvare skal være **åpen for utvidelse**, men **lukket for endring**.

Hva betyr dette i praksis? Det betyr at vi skal kunne legge til ny funksjonalitet (nye klasser) uten å endre eksisterende kode. La oss se et eksempel.`
    },
    {
      id: 'it2-1-5-example-6',
      type: 'example',
      title: 'Åpen/lukket-prinsippet i praksis',
      content: `**Dårlig design – lukket for utvidelse:**

\`\`\`python
# DÅRLIG: Må endre funksjonen for hver ny betalingstype
def prosesser_betaling(type, belop):
    if type == "kort":
        print(f"Betaler {belop} kr med kort")
    elif type == "vipps":
        print(f"Betaler {belop} kr med Vipps")
    elif type == "kontant":
        print(f"Betaler {belop} kr kontant")
    # Ny betalingstype? Må endre DENNE funksjonen...
\`\`\`

**Godt design – åpen for utvidelse:**

\`\`\`python
from abc import ABC, abstractmethod

class Betaling(ABC):
    @abstractmethod
    def betal(self, belop):
        pass

class Kortbetaling(Betaling):
    def betal(self, belop):
        print(f"Betaler {belop} kr med kort")

class VippsBetaling(Betaling):
    def betal(self, belop):
        print(f"Betaler {belop} kr med Vipps")

class KontantBetaling(Betaling):
    def betal(self, belop):
        print(f"Betaler {belop} kr kontant")

def prosesser_betaling(betaling: Betaling, belop):
    betaling.betal(belop)

# Ny betalingstype? Bare lag en ny klasse!
class KryptoBetaling(Betaling):
    def betal(self, belop):
        print(f"Betaler {belop} kr med kryptovaluta")

# Ingen endring i eksisterende kode nødvendig:
prosesser_betaling(KryptoBetaling(), 500)
\`\`\`

**Forskjellen:**
- I den dårlige versjonen må vi endre \`prosesser_betaling()\` hver gang
- I den gode versjonen legger vi bare til en ny klasse – eksisterende kode røres ikke`
    },
    {
      id: 'it2-1-5-exercise-6',
      type: 'exercise',
      title: 'Åpen/lukket-prinsippet',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      question: 'Hvorfor er if/elif-kjeder for å sjekke typer ofte et tegn på dårlig OOP-design?',
      options: [
        'Fordi if/elif er tregere enn metoder',
        'Fordi if/elif ikke støttes i alle Python-versjoner',
        'Fordi du må endre eksisterende kode hver gang du legger til en ny type',
        'Fordi if/elif ikke kan håndtere mer enn 5 alternativer'
      ],
      correctAnswer: 2,
      explanation: 'If/elif-kjeder bryter åpen/lukket-prinsippet: du må endre eksisterende kode (legge til en ny elif) for å støtte nye typer. Med polymorfisme lager du bare en ny klasse – ingen eksisterende kode endres.'
    },
    {
      id: 'it2-1-5-exercise-7',
      type: 'exercise',
      title: 'Designmønster med polymorfisme',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Du skal lage et varslingssystem. Lag en abstrakt klasse `Varsler` med en abstrakt metode `send(melding)`. Implementer tre subklasser:\n\n- `EpostVarsler` – skriver ut at melding sendes som e-post\n- `SMSVarsler` – skriver ut at melding sendes som SMS\n- `PushVarsler` – skriver ut at melding sendes som push-varsling\n\nLag en funksjon `varsle_alle(varslere, melding)` som sender meldingen via alle varslere.\n\nTest programmet ved å sende meldingen «Serveren er nede!» via alle tre kanalene.',
      hint: 'Bruk abc-modulen. Funksjonen varsle_alle() tar en liste av Varsler-objekter og kaller send() på hver.',
      answer: `\`\`\`python
from abc import ABC, abstractmethod

class Varsler(ABC):
    @abstractmethod
    def send(self, melding):
        pass

class EpostVarsler(Varsler):
    def send(self, melding):
        print(f"[E-post] {melding}")

class SMSVarsler(Varsler):
    def send(self, melding):
        print(f"[SMS] {melding}")

class PushVarsler(Varsler):
    def send(self, melding):
        print(f"[Push] {melding}")

def varsle_alle(varslere, melding):
    for varsler in varslere:
        varsler.send(melding)

# Test
kanaler = [EpostVarsler(), SMSVarsler(), PushVarsler()]
varsle_alle(kanaler, "Serveren er nede!")
\`\`\`

**Utskrift:**
\`\`\`
[E-post] Serveren er nede!
[SMS] Serveren er nede!
[Push] Serveren er nede!
\`\`\`

Legg merke til at \`varsle_alle()\` er helt uavhengig av hvilke typer varslere som finnes. Å legge til en ny kanal (f.eks. \`SlackVarsler\`) krever bare en ny klasse – ingen endring i \`varsle_alle()\`.`
    },
    {
      id: 'it2-1-5-text-5',
      type: 'text',
      content: `## Polymorfisme med innebygde funksjoner

Polymorfisme er ikke bare noe vi lager selv – det er innebygd i Python! Mange av Pythons innebygde funksjoner bruker polymorfisme via **dunder-metoder** (dobbel understrek, «double underscore»).

For eksempel bruker \`len()\` metoden \`__len__()\`, \`str()\` bruker \`__str__()\`, og \`+\` bruker \`__add__()\`. Ved å implementere disse i våre egne klasser kan vi gjøre objektene våre kompatible med Pythons innebygde funksjoner.`
    },
    {
      id: 'it2-1-5-example-7',
      type: 'example',
      title: 'Dunder-metoder og polymorfisme',
      content: `\`\`\`python
class Handlekurv:
    def __init__(self):
        self.varer = []

    def legg_til(self, vare, pris):
        self.varer.append({"vare": vare, "pris": pris})

    def __len__(self):
        """Gjør at len(kurv) fungerer."""
        return len(self.varer)

    def __str__(self):
        """Gjør at print(kurv) gir pen utskrift."""
        if not self.varer:
            return "Tom handlekurv"
        linjer = [f"  - {v['vare']}: {v['pris']} kr" for v in self.varer]
        total = sum(v['pris'] for v in self.varer)
        return "Handlekurv:\\n" + "\\n".join(linjer) + f"\\n  Totalt: {total} kr"

    def __contains__(self, varenavn):
        """Gjør at 'vare' in kurv fungerer."""
        return any(v['vare'] == varenavn for v in self.varer)

kurv = Handlekurv()
kurv.legg_til("Melk", 25)
kurv.legg_til("Brød", 35)
kurv.legg_til("Ost", 55)

print(len(kurv))          # 3
print(kurv)               # Pen utskrift av handlekurven
print("Melk" in kurv)     # True
print("Juice" in kurv)    # False
\`\`\`

Ved å implementere \`__len__\`, \`__str__\` og \`__contains__\` integreres klassen vår med Pythons innebygde funksjoner. Dette er polymorfisme i praksis!`
    },
    {
      id: 'it2-1-5-exercise-8',
      type: 'exercise',
      title: 'Lag en egen klasse med dunder-metoder',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Lag en klasse `Spillerliste` som representerer en liste med spillere i et spill. Klassen skal ha:\n\n- En metode `legg_til(navn, poeng)` for å legge til spillere\n- `__len__()` som returnerer antall spillere\n- `__str__()` som returnerer en pen oversikt over alle spillere med poeng\n- `__contains__(navn)` som sjekker om en spiller er i listen\n\nVis at `len()`, `print()` og `in` fungerer med klassen din.',
      hint: 'Bruk en liste med ordbøker (eller en dict) internt. Dunder-metodene gjør at Pythons innebygde funksjoner fungerer med klassen din.',
      answer: `\`\`\`python
class Spillerliste:
    def __init__(self):
        self.spillere = []

    def legg_til(self, navn, poeng):
        self.spillere.append({"navn": navn, "poeng": poeng})

    def __len__(self):
        return len(self.spillere)

    def __str__(self):
        if not self.spillere:
            return "Ingen spillere registrert"
        linjer = []
        for i, s in enumerate(self.spillere, 1):
            linjer.append(f"  {i}. {s['navn']}: {s['poeng']} poeng")
        return "Spillerliste:\\n" + "\\n".join(linjer)

    def __contains__(self, navn):
        return any(s['navn'] == navn for s in self.spillere)

# Test
liste = Spillerliste()
liste.legg_til("Ada", 150)
liste.legg_til("Bo", 230)
liste.legg_til("Cecilie", 180)

print(len(liste))          # 3
print(liste)               # Pen utskrift
print("Ada" in liste)      # True
print("David" in liste)    # False
\`\`\`

**Utskrift:**
\`\`\`
3
Spillerliste:
  1. Ada: 150 poeng
  2. Bo: 230 poeng
  3. Cecilie: 180 poeng
True
False
\`\`\``
    },
    {
      id: 'it2-1-5-summary',
      type: 'summary',
      title: 'Oppsummering',
      content: `I dette kapittelet har du lært:

- **Polymorfisme**: Ulike objekter kan behandles likt ved å kalle samme metode, men oppføre seg forskjellig basert på sin klasse
- **Duck typing**: Python sjekker ikke klasse, bare om objektet har riktig metode – «Hvis det kvakker som en and...»
- **Abstrakte klasser (ABC)**: Klasser som ikke kan instansieres direkte og som tvinger subklasser til å implementere bestemte metoder
- **Abstrakte metoder**: Metoder markert med \`@abstractmethod\` som subklasser **må** overstyre
- **Protokoller (Protocol)**: En moderne måte å definere grensesnitt uten arv – brukes med typesjekkere
- **Åpen/lukket-prinsippet**: Kode skal være åpen for utvidelse (nye klasser), men lukket for endring (ikke endre eksisterende kode)
- **Dunder-metoder**: \`__len__\`, \`__str__\`, \`__contains__\` osv. lar objektene våre integreres med Pythons innebygde funksjoner

Med dette kapittelet har du fullført grunnlaget for objektorientert programmering. I neste seksjon skal vi bygge videre og lære om mer avanserte OOP-teknikker.`
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-1-5-exercise-9',
      type: 'exercise',
      title: 'Komplett mediespiller',
      difficulty: 'hard',
      exerciseType: 'classic',
      question: 'Du skal modellere en enkel mediespiller. Lag en abstrakt klasse `Media` med:\n- En abstrakt metode `spill_av()` som returnerer en streng\n- En abstrakt metode `varighet()` som returnerer antall sekunder (int)\n- En konkret metode `info()` som skriver ut type media, avspillingstekst og varighet\n\nLag tre subklasser: `Sang`, `Podcast` og `Lydbok`.\n\nLag deretter en funksjon `total_spilletid(medier)` som beregner total spilletid i minutter og sekunder for en liste med media-objekter.\n\nTest programmet med minst ett objekt av hver type.',
      hint: 'Bruk abc-modulen. For total_spilletid(), summer varighet() for alle objekter og regn om til minutter og sekunder.',
      answer: `\`\`\`python
from abc import ABC, abstractmethod

class Media(ABC):
    @abstractmethod
    def spill_av(self):
        pass

    @abstractmethod
    def varighet(self):
        pass

    def info(self):
        print(f"Type: {self.__class__.__name__}")
        print(f"  {self.spill_av()}")
        print(f"  Varighet: {self.varighet()} sekunder")

class Sang(Media):
    def __init__(self, tittel, artist, sekunder):
        self.tittel = tittel
        self.artist = artist
        self.sekunder = sekunder

    def spill_av(self):
        return f"Spiller sang: {self.tittel} av {self.artist}"

    def varighet(self):
        return self.sekunder

class Podcast(Media):
    def __init__(self, tittel, episode, sekunder):
        self.tittel = tittel
        self.episode = episode
        self.sekunder = sekunder

    def spill_av(self):
        return f"Spiller podcast: {self.tittel}, episode {self.episode}"

    def varighet(self):
        return self.sekunder

class Lydbok(Media):
    def __init__(self, tittel, kapittel, sekunder):
        self.tittel = tittel
        self.kapittel = kapittel
        self.sekunder = sekunder

    def spill_av(self):
        return f"Spiller lydbok: {self.tittel}, kapittel {self.kapittel}"

    def varighet(self):
        return self.sekunder

def total_spilletid(medier):
    total_sek = sum(m.varighet() for m in medier)
    minutter = total_sek // 60
    sekunder = total_sek % 60
    return f"Total spilletid: {minutter} min og {sekunder} sek"

# Test
medier = [
    Sang("Aurora", "Runaway", 234),
    Podcast("NRK Nyheter", 45, 1800),
    Lydbok("Sofies verden", 3, 2400)
]

for m in medier:
    m.info()
    print()

print(total_spilletid(medier))
\`\`\`

**Utskrift:**
\`\`\`
Type: Sang
  Spiller sang: Aurora av Runaway
  Varighet: 234 sekunder

Type: Podcast
  Spiller podcast: NRK Nyheter, episode 45
  Varighet: 1800 sekunder

Type: Lydbok
  Spiller lydbok: Sofies verden, kapittel 3
  Varighet: 2400 sekunder

Total spilletid: 73 min og 54 sek
\`\`\``
    }
  ],
  exercises: []
};

// ============================================================================
// EXPORT
// ============================================================================

export const IT_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_1_1,
  CHAPTER_IT_2_1_2,
  CHAPTER_IT_2_1_3,
  CHAPTER_IT_2_1_4,
  CHAPTER_IT_2_1_5,
];

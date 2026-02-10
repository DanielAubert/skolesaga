/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 3: Algoritmer og databehandling (Kapittel 3.1–3.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 3.1: Algoritmisk tenkning og effektivitet
// ============================================================================

export const CHAPTER_IT_2_3_1: TextbookChapter = {
  id: 'it-2-3-1',
  courseId: 'it-2',
  title: 'Algoritmisk tenkning og effektivitet',
  description: 'Lær å tenke algoritmisk og analysere hvor effektive ulike løsninger er. Vi ser på Big O-notasjon, tidskompleksitet og hvordan du optimaliserer koden din.',
  sections: [
    {
      id: 'it2-3-1-intro',
      type: 'text' as const,
      title: 'Introduksjon',
      content: `# Algoritmisk tenkning og effektivitet

Når du programmerer, finnes det ofte mange måter å løse samme problem på. Men ikke alle løsninger er like gode. Noen programmer kjører raskt selv med store datamengder, mens andre henger seg opp når dataene vokser.

I dette kapittelet skal du lære å:
- Tenke algoritmisk og strukturere løsninger
- Analysere hvor effektiv en algoritme er
- Forstå Big O-notasjon
- Optimalisere koden din for bedre ytelse

Dette er grunnleggende ferdigheter for enhver som jobber med programmering og store datasett.`
    },
    {
      id: 'it2-3-1-def-1',
      type: 'definition' as const,
      title: 'Hva er en algoritme?',
      content: `**Algoritme**: En steg-for-steg-oppskrift for å løse et problem eller utføre en oppgave.

En god algoritme har disse egenskapene:
- **Definert input**: Vi vet hva som går inn
- **Definert output**: Vi vet hva som skal ut
- **Utvetydig**: Hvert steg er klart definert
- **Endelig**: Algoritmen stopper etter et visst antall steg
- **Effektiv**: Den løser problemet på en fornuftig måte

Eksempel på en enkel algoritme for å finne det største tallet i en liste:
1. Start med første tall som "størst så langt"
2. Gå gjennom resten av listen
3. Hvis du finner et større tall, oppdater "størst så langt"
4. Når listen er ferdig, returner "størst så langt"`
    },
    {
      id: 'it2-3-1-ex-1',
      type: 'example' as const,
      title: 'Eksempel: To måter å sjekke duplikater',
      content: `La oss se på to måter å sjekke om en liste har duplikater:

**Løsning 1: Sammenligne hvert element med alle andre**

\`\`\`python
def har_duplikater_v1(liste):
    """Sjekker om liste har duplikater - treg versjon"""
    for i in range(len(liste)):
        for j in range(i + 1, len(liste)):
            if liste[i] == liste[j]:
                return True
    return False

# Test
tall = [1, 2, 3, 4, 5, 2]
print(har_duplikater_v1(tall))  # True
\`\`\`

**Løsning 2: Bruke et sett (set)**

\`\`\`python
def har_duplikater_v2(liste):
    """Sjekker om liste har duplikater - rask versjon"""
    return len(liste) != len(set(liste))

# Test
tall = [1, 2, 3, 4, 5, 2]
print(har_duplikater_v2(tall))  # True
\`\`\`

Begge løsningene gir riktig svar, men løsning 2 er **mye** raskere når listen er stor. Hvorfor? Det handler om hvor mange operasjoner som må utføres.`
    },
    {
      id: 'it2-3-1-def-2',
      type: 'definition' as const,
      title: 'Tidskompleksitet og Big O-notasjon',
      content: `**Tidskompleksitet**: Et mål på hvor mange operasjoner en algoritme må utføre som funksjon av input-størrelsen (n).

**Big O-notasjon**: En matematisk måte å beskrive hvordan kjøretiden vokser når input blir større. Vi fokuserer på den dominerende faktoren og ignorerer konstanter.

**Vanlige tidskompleksiteter** (fra best til verst):

| Big O | Navn | Beskrivelse | Eksempel |
|-------|------|-------------|----------|
| O(1) | Konstant | Samme tid uansett input-størrelse | Hente element fra liste med indeks |
| O(log n) | Logaritmisk | Halverer søkeområdet hver gang | Binærsøk |
| O(n) | Lineær | Proporsjonalt med input-størrelse | Gå gjennom en liste én gang |
| O(n log n) | Linearitmisk | Effektive sorteringsalgoritmer | Merge sort, quick sort |
| O(n²) | Kvadratisk | Nestede løkker over samme data | Bubble sort, innstikksortering |
| O(2ⁿ) | Eksponentiell | Dobles for hver ny input | Rekursiv Fibonacci uten memoisering |
| O(n!) | Faktoriell | Kombinatoriske problemer | Finne alle permutasjoner |

**Viktig**: Big O beskriver worst-case scenario, altså hvor lang tid algoritmen kan ta i verste fall.`
    },
    {
      id: 'it2-3-1-ex-2',
      type: 'example' as const,
      title: 'Eksempel: Analysere tidskompleksitet',
      content: `La oss analysere tidskompleksiteten til våre duplikat-funksjoner:

**Løsning 1: Nestede løkker**

\`\`\`python
def har_duplikater_v1(liste):
    for i in range(len(liste)):          # n ganger
        for j in range(i + 1, len(liste)):  # opptil n ganger
            if liste[i] == liste[j]:     # Konstant tid
                return True
    return False
\`\`\`

- Ytre løkke: n iterasjoner
- Indre løkke: opptil n iterasjoner
- Totalt: omtrent n × n = n² sammenligninger
- **Tidskompleksitet: O(n²)**

**Løsning 2: Bruke set**

\`\`\`python
def har_duplikater_v2(liste):
    return len(liste) != len(set(liste))
\`\`\`

- \`set(liste)\`: går gjennom listen én gang (n operasjoner)
- \`len()\`: konstant tid for begge kall
- **Tidskompleksitet: O(n)**

**Forskjellen i praksis:**
- Med 100 elementer: O(n²) = 10,000 operasjoner vs O(n) = 100 operasjoner
- Med 1,000 elementer: O(n²) = 1,000,000 operasjoner vs O(n) = 1,000 operasjoner
- Med 10,000 elementer: O(n²) = 100,000,000 operasjoner vs O(n) = 10,000 operasjoner

Dette er grunnen til at tidskompleksitet betyr noe!`
    },
    {
      id: 'it2-3-1-exercise-1',
      type: 'exercise' as const,
      title: 'Oppgave 1: Identifiser tidskompleksitet',
      content: `Hva er tidskompleksiteten til denne funksjonen?

\`\`\`python
def summer_alle(liste):
    total = 0
    for tall in liste:
        total += tall
    return total
\`\`\``,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 1,
      question: 'Hva er tidskompleksiteten til summer_alle()?',
      options: [
        { id: 'a', text: 'O(1) - Konstant tid', isCorrect: false },
        { id: 'b', text: 'O(n) - Lineær tid', isCorrect: true },
        { id: 'c', text: 'O(n²) - Kvadratisk tid', isCorrect: false },
        { id: 'd', text: 'O(log n) - Logaritmisk tid', isCorrect: false }
      ],
      hint: 'Hvor mange ganger går vi gjennom listen?',
      solution: `**Riktig svar: b) O(n) - Lineær tid**

Funksjonen går gjennom listen nøyaktig én gang. Hver iterasjon utfører en konstant operasjon (addisjon). Derfor er totalt antall operasjoner proporsjonalt med listens lengde n.

Tidskompleksitet: **O(n)**`
    },
    {
      id: 'it2-3-1-exercise-2',
      type: 'exercise' as const,
      title: 'Oppgave 2: Sammenlign algoritmer',
      content: `To funksjoner finner om et tall finnes i en liste:

\`\`\`python
# Funksjon A
def finn_v1(liste, mål):
    for element in liste:
        if element == mål:
            return True
    return False

# Funksjon B
def finn_v2(sortert_liste, mål):
    venstre = 0
    høyre = len(sortert_liste) - 1
    while venstre <= høyre:
        midten = (venstre + høyre) // 2
        if sortert_liste[midten] == mål:
            return True
        elif sortert_liste[midten] < mål:
            venstre = midten + 1
        else:
            høyre = midten - 1
    return False
\`\`\``,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilken påstand er riktig?',
      options: [
        { id: 'a', text: 'Begge har O(n) tidskompleksitet', isCorrect: false },
        { id: 'b', text: 'Funksjon A har O(n), funksjon B har O(log n)', isCorrect: true },
        { id: 'c', text: 'Funksjon A er alltid raskere', isCorrect: false },
        { id: 'd', text: 'Funksjon B fungerer på usorterte lister', isCorrect: false }
      ],
      hint: 'Funksjon B halverer søkeområdet hver gang.',
      solution: `**Riktig svar: b) Funksjon A har O(n), funksjon B har O(log n)**

**Funksjon A (lineært søk):**
- Går gjennom listen element for element
- Worst case: må sjekke alle n elementer
- Tidskompleksitet: O(n)

**Funksjon B (binærsøk):**
- Krever sortert liste
- Halverer søkeområdet hver gang
- Worst case: log₂(n) iterasjoner
- Tidskompleksitet: O(log n)

**Eksempel med 1024 elementer:**
- Lineært søk: opptil 1024 sammenligninger
- Binærsøk: opptil 10 sammenligninger (2¹⁰ = 1024)

Binærsøk er mye raskere, men krever at listen er sortert først.`
    },
    {
      id: 'it2-3-1-def-3',
      type: 'definition' as const,
      title: 'Plasskompleksitet',
      content: `**Plasskompleksitet**: Et mål på hvor mye minne en algoritme bruker som funksjon av input-størrelsen.

Akkurat som tidskompleksitet bruker vi Big O-notasjon for plasskompleksitet.

**Eksempler:**

**O(1) - Konstant plass:**
\`\`\`python
def summer_alle(liste):
    total = 0  # Én variabel uansett liste-størrelse
    for tall in liste:
        total += tall
    return total
\`\`\`

**O(n) - Lineær plass:**
\`\`\`python
def doble_alle(liste):
    ny_liste = []  # Ny liste med samme størrelse som input
    for tall in liste:
        ny_liste.append(tall * 2)
    return ny_liste
\`\`\`

**Viktig**: Vi må ofte velge mellom tid og plass. Noen ganger kan vi bruke mer minne for å få raskere kjøretid (caching/memoisering).`
    },
    {
      id: 'it2-3-1-ex-3',
      type: 'example' as const,
      title: 'Eksempel: Optimalisering av Fibonacci',
      content: `La oss se på tre implementasjoner av Fibonacci-tallene og deres effektivitet:

**Versjon 1: Naiv rekursjon**

\`\`\`python
def fibonacci_v1(n):
    """Treg: O(2^n) tid, O(n) plass"""
    if n <= 1:
        return n
    return fibonacci_v1(n-1) + fibonacci_v1(n-2)

# Veldig treg for store tall!
print(fibonacci_v1(35))  # Tar flere sekunder
\`\`\`

**Versjon 2: Memoisering (caching)**

\`\`\`python
def fibonacci_v2(n, cache={}):
    """Rask: O(n) tid, O(n) plass"""
    if n in cache:
        return cache[n]
    if n <= 1:
        return n
    cache[n] = fibonacci_v2(n-1, cache) + fibonacci_v2(n-2, cache)
    return cache[n]

print(fibonacci_v2(35))  # Nesten øyeblikkelig
\`\`\`

**Versjon 3: Iterativ (best)**

\`\`\`python
def fibonacci_v3(n):
    """Raskest: O(n) tid, O(1) plass"""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

print(fibonacci_v3(35))  # Nesten øyeblikkelig
\`\`\`

**Sammenligning:**
- V1: Eksponentiell tid, kan ikke håndtere store tall
- V2: Lineær tid, bruker ekstra minne for cache
- V3: Lineær tid, minimal minnebruk - beste løsningen!`
    },
    {
      id: 'it2-3-1-exercise-3',
      type: 'exercise' as const,
      title: 'Oppgave 3: Analyser plasskompleksitet',
      content: `Se på denne funksjonen:

\`\`\`python
def reverser_liste(liste):
    ny_liste = []
    for i in range(len(liste) - 1, -1, -1):
        ny_liste.append(liste[i])
    return ny_liste
\`\`\``,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 1,
      question: 'Hva er plasskompleksiteten til denne funksjonen?',
      options: [
        { id: 'a', text: 'O(1) - Konstant plass', isCorrect: false },
        { id: 'b', text: 'O(log n) - Logaritmisk plass', isCorrect: false },
        { id: 'c', text: 'O(n) - Lineær plass', isCorrect: true },
        { id: 'd', text: 'O(n²) - Kvadratisk plass', isCorrect: false }
      ],
      hint: 'Hvor stor blir ny_liste sammenlignet med input?',
      solution: `**Riktig svar: c) O(n) - Lineær plass**

Funksjonen oppretter en helt ny liste (\`ny_liste\`) som har nøyaktig samme størrelse som input-listen. Hvis input-listen har n elementer, vil ny_liste også ha n elementer.

Dette gir plasskompleksitet: **O(n)**

**Merk**: Vi kunne redusert plasskompleksiteten til O(1) ved å reversere lista in-place:
\`\`\`python
def reverser_in_place(liste):
    venstre = 0
    høyre = len(liste) - 1
    while venstre < høyre:
        liste[venstre], liste[høyre] = liste[høyre], liste[venstre]
        venstre += 1
        høyre -= 1
    return liste
\`\`\`

Men da må vi endre den originale listen.`
    },
    {
      id: 'it2-3-1-def-4',
      type: 'definition' as const,
      title: 'Prematuur optimalisering',
      content: `**Prematuur optimalisering**: Å bruke for mye tid på å optimalisere kode før det er nødvendig.

Donald Knuth sa berømt: "Premature optimization is the root of all evil" (i programmering).

**Retningslinjer for optimalisering:**

1. **Få det til å virke først**: Skriv kode som løser problemet korrekt
2. **Mål ytelsen**: Bruk profileringsverktøy for å finne flaskehalser
3. **Optimaliser der det trengs**: Fokuser på de delene som faktisk er trege
4. **Test at det fortsatt virker**: Verifiser at optimaliseringen ikke introduserer bugs

**Når bør du tenke på effektivitet?**
- Når du jobber med store datasett (tusenvis eller millioner av elementer)
- I funksjoner som kalles veldig mange ganger
- Når brukerne opplever treg respons

**Når er det mindre viktig?**
- For små datasett (under 100 elementer)
- Kode som bare kjøres én gang
- Når lesbarhet er viktigere enn hastighet

**Huskeregel**: Skriv lesbar kode først. Optimaliser senere hvis nødvendig.`
    },
    {
      id: 'it2-3-1-ex-4',
      type: 'example' as const,
      title: 'Eksempel: Måle ytelse med timeit',
      content: `Python har en innebygd modul for å måle hvor lang tid kode tar:

\`\`\`python
import timeit

# Lag testdata
store_data = list(range(10000))

# Test løsning 1
tid_v1 = timeit.timeit(
    lambda: har_duplikater_v1(store_data),
    number=10
)

# Test løsning 2
tid_v2 = timeit.timeit(
    lambda: har_duplikater_v2(store_data),
    number=10
)

print(f"Løsning 1: {tid_v1:.4f} sekunder")
print(f"Løsning 2: {tid_v2:.4f} sekunder")
print(f"Løsning 2 er {tid_v1/tid_v2:.1f}x raskere")
\`\`\`

**Output:**
\`\`\`
Løsning 1: 8.2450 sekunder
Løsning 2: 0.0023 sekunder
Løsning 2 er 3585.7x raskere
\`\`\`

Dette viser konkret hvordan forskjellen mellom O(n²) og O(n) påvirker kjøretiden!`
    },
    {
      id: 'it2-3-1-exercise-4',
      type: 'exercise' as const,
      title: 'Oppgave 4: Optimalisering',
      content: `Du har denne funksjonen som teller hvor mange ganger hvert ord forekommer:

\`\`\`python
def tell_ord(tekst):
    ord_liste = tekst.lower().split()
    antall = []
    for ord in ord_liste:
        funnet = False
        for i in range(len(antall)):
            if antall[i][0] == ord:
                antall[i] = (ord, antall[i][1] + 1)
                funnet = True
                break
        if not funnet:
            antall.append((ord, 1))
    return antall
\`\`\`

Hva er et bedre alternativ?`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilken løsning er mest effektiv?',
      options: [
        { id: 'a', text: 'Bruke nested loops med liste', isCorrect: false },
        { id: 'b', text: 'Bruke dictionary for å telle', isCorrect: true },
        { id: 'c', text: 'Sortere listen først', isCorrect: false },
        { id: 'd', text: 'Bruke set for å telle', isCorrect: false }
      ],
      hint: 'Dictionary gir O(1) oppslag.',
      solution: `**Riktig svar: b) Bruke dictionary for å telle**

Den originale funksjonen har O(n²) tidskompleksitet fordi den søker gjennom hele antall-listen for hvert ord.

**Optimalisert versjon med dictionary:**

\`\`\`python
def tell_ord(tekst):
    ord_liste = tekst.lower().split()
    antall = {}
    for ord in ord_liste:
        antall[ord] = antall.get(ord, 0) + 1
    return list(antall.items())
\`\`\`

Eller enda bedre, bruk Pythons Counter:

\`\`\`python
from collections import Counter

def tell_ord(tekst):
    ord_liste = tekst.lower().split()
    return Counter(ord_liste).items()
\`\`\`

**Tidskompleksitet:**
- Original: O(n²) - må søke gjennom liste for hvert ord
- Dictionary: O(n) - konstant oppslag-tid i dictionary

**Fordeler med dictionary:**
- Mye raskere for store tekster
- Enklere kode
- Innebygd i Python (Counter er standard library)`
    },
    {
      id: 'it2-3-1-exercise-5',
      type: 'exercise' as const,
      title: 'Oppgave 5: Best case vs worst case',
      content: `Se på denne funksjonen som sjekker om en liste er sortert:

\`\`\`python
def er_sortert(liste):
    for i in range(len(liste) - 1):
        if liste[i] > liste[i + 1]:
            return False
    return True
\`\`\``,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Hva er best case og worst case tidskompleksitet for denne funksjonen?',
      hint: 'Tenk på når funksjonen returnerer raskt vs når den må gå gjennom hele listen.',
      solution: `**Best case: O(1) - Konstant tid**

Best case inntreffer når de to første elementene er i feil rekkefølge:
\`\`\`python
liste = [5, 1, 2, 3, 4]
# Funksjonen returnerer False allerede i første iterasjon
\`\`\`

**Worst case: O(n) - Lineær tid**

Worst case inntreffer når listen faktisk er sortert, og vi må sjekke alle n-1 par:
\`\`\`python
liste = [1, 2, 3, 4, 5]
# Må gå gjennom hele listen før vi kan returnere True
\`\`\`

**Average case: O(n)**

I gjennomsnitt må vi sjekke omtrent halvparten av listen, som fortsatt er O(n).

**Viktig læring**: Mange algoritmer har forskjellig ytelse avhengig av input-dataene. Når vi analyserer algoritmer, fokuserer vi vanligvis på worst case, fordi det gir oss en garanti for at algoritmen aldri blir tregere enn det.`
    },
    {
      id: 'it2-3-1-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `## Oppsummering

I dette kapittelet har du lært:

**Algoritmisk tenkning:**
- En algoritme er en steg-for-steg løsning på et problem
- Samme problem kan løses på mange måter med ulik effektivitet

**Big O-notasjon:**
- O(1): Konstant tid - best
- O(log n): Logaritmisk tid - veldig bra
- O(n): Lineær tid - akseptabelt
- O(n log n): Linearitmisk - bra for sortering
- O(n²): Kvadratisk tid - unngå hvis mulig
- O(2ⁿ): Eksponentiell tid - kun for små input

**Tidskompleksitet:**
- Beskriver hvor mange operasjoner som kreves
- Fokuserer på worst-case scenario
- Ignorerer konstante faktorer

**Plasskompleksitet:**
- Beskriver hvor mye minne som brukes
- Ofte trade-off mellom tid og plass

**Optimalisering:**
- Få koden til å virke først
- Mål ytelsen før du optimaliserer
- Fokuser på flaskehalser
- Ikke optimaliser for tidlig

**Praktiske tips:**
- Unngå nestede løkker over samme data når mulig
- Bruk innebygde datastrukturer (dict, set) for raske oppslag
- Bruk list comprehensions og generator expressions
- Test med realistiske datastørrelser`
    },
    {
      id: 'it2-3-1-samleoppgaver',
      type: 'text' as const,
      title: 'Samleoppgaver',
      content: '## Samleoppgaver\n\nHer er noen oppgaver som kombinerer flere konsepter fra kapittelet:'
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-3-1-exercise-6',
      type: 'exercise' as const,
      title: 'Samleoppgave 1: Analyser kompleks funksjon',
      content: `Analyser tidskompleksiteten til denne funksjonen:

\`\`\`python
def finn_duplikat_par(liste):
    resultat = []
    for i in range(len(liste)):
        for j in range(i + 1, len(liste)):
            if liste[i] == liste[j]:
                resultat.append((i, j))
    return resultat
\`\`\``,
      difficulty: 'hard' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'Hva er tidskompleksiteten, og hvordan kan funksjonen optimaliseres?',
      hint: 'Tell antall iterasjoner i begge løkkene. Tenk på dictionary for optimalisering.',
      solution: `**Tidskompleksitet: O(n²)**

**Analyse:**
- Ytre løkke: n iterasjoner
- Indre løkke: i gjennomsnitt n/2 iterasjoner
- Totalt: omtrent n × n/2 = n²/2 sammenligninger
- Big O ignorerer konstanter: O(n²)

**Optimalisert versjon med O(n) tidskompleksitet:**

\`\`\`python
def finn_duplikat_par(liste):
    resultat = []
    sett_indekser = {}  # Verdi -> liste av indekser

    for i, verdi in enumerate(liste):
        if verdi in sett_indekser:
            # Finn alle tidligere indekser med samme verdi
            for tidligere_i in sett_indekser[verdi]:
                resultat.append((tidligere_i, i))
            sett_indekser[verdi].append(i)
        else:
            sett_indekser[verdi] = [i]

    return resultat

# Test
print(finn_duplikat_par([1, 2, 1, 3, 2]))
# Output: [(0, 2), (1, 4)]
\`\`\`

**Forbedring:**
- Går gjennom listen bare én gang
- Bruker dictionary for O(1) oppslag
- Tidskompleksitet: O(n)
- Plasskompleksitet: O(n) for dictionary

Dette er et klassisk eksempel på time-space tradeoff: Vi bruker mer minne for å få raskere kjøretid.`
    },
    {
      id: 'it2-3-1-exercise-7',
      type: 'exercise' as const,
      title: 'Samleoppgave 2: Velg beste algoritme',
      content: `Du skal lage en funksjon som finner de 3 største tallene i en stor liste med millioner av tall.

Hvilken tilnærming gir best ytelse?

A) Sorter hele listen og ta de tre siste
B) Gå gjennom listen én gang og hold styr på de tre største
C) Bruk Pythons heapq.nlargest()
D) Bruk max() tre ganger og fjern elementet hver gang`,
      difficulty: 'hard' as const,
      exerciseType: 'multiple-choice' as const,
      points: 3,
      question: 'Hvilken tilnærming er mest effektiv for STORE lister?',
      options: [
        { id: 'a', text: 'A - Sorter hele listen', isCorrect: false },
        { id: 'b', text: 'B - Gå gjennom én gang', isCorrect: true },
        { id: 'c', text: 'C - Bruk heapq.nlargest()', isCorrect: false },
        { id: 'd', text: 'D - Bruk max() tre ganger', isCorrect: false }
      ],
      hint: 'Tenk på hva hver tilnærming må gjøre med hele listen.',
      solution: `**Riktig svar: B - Gå gjennom listen én gang**

**Analyse av hver tilnærming:**

**A) Sorter hele listen:**
\`\`\`python
def tre_storste_a(liste):
    return sorted(liste)[-3:]
# Tidskompleksitet: O(n log n)
\`\`\`
- Må sortere HELE listen selv om vi bare trenger 3 tall
- Ineffektivt for store datasett

**B) Gå gjennom én gang:**
\`\`\`python
def tre_storste_b(liste):
    if len(liste) < 3:
        return sorted(liste)

    # Start med de tre første
    storste = sorted(liste[:3])

    # Sjekk resten
    for tall in liste[3:]:
        if tall > storste[0]:
            storste[0] = tall
            storste.sort()

    return storste
# Tidskompleksitet: O(n)
\`\`\`
- Går gjennom listen nøyaktig én gang
- Holder bare 3 tall i minne
- **Best for store lister!**

**C) heapq.nlargest():**
\`\`\`python
import heapq
def tre_storste_c(liste):
    return heapq.nlargest(3, liste)
# Tidskompleksitet: O(n log k) hvor k=3
\`\`\`
- Veldig effektiv, O(n log 3) ≈ O(n)
- God generell løsning, men B er raskere for k=3

**D) max() tre ganger:**
\`\`\`python
def tre_storste_d(liste):
    liste_kopi = liste.copy()
    resultat = []
    for _ in range(3):
        største = max(liste_kopi)
        resultat.append(største)
        liste_kopi.remove(største)
    return resultat
# Tidskompleksitet: O(n²)
\`\`\`
- max() er O(n), remove() er O(n)
- Må gjøres 3 ganger = 3n + 3n = 6n operasjoner
- Men remove() må lete gjennom hele listen hver gang!

**Konklusjon:** For store lister er B best fordi den går gjennom dataene nøyaktig én gang. C (heapq) er også veldig god og mer generell hvis du trenger k største hvor k varierer.`
    },
    {
      id: 'it2-3-1-exercise-8',
      type: 'exercise' as const,
      title: 'Samleoppgave 3: Praktisk optimalisering',
      content: `Du har skrevet denne koden for å finne alle anagram-par i en liste med ord:

\`\`\`python
def finn_anagrammer(ordliste):
    anagram_par = []
    for i in range(len(ordliste)):
        for j in range(i + 1, len(ordliste)):
            if sorted(ordliste[i]) == sorted(ordliste[j]):
                anagram_par.append((ordliste[i], ordliste[j]))
    return anagram_par

# Test
ord = ['abc', 'bca', 'xyz', 'cab', 'zyx']
print(finn_anagrammer(ord))
# [('abc', 'bca'), ('abc', 'cab'), ('bca', 'cab'), ('xyz', 'zyx')]
\`\`\`

Koden virker, men er treg for store ordlister.`,
      difficulty: 'hard' as const,
      exerciseType: 'classic' as const,
      points: 5,
      question: 'Skriv en optimalisert versjon og forklar forbedringen.',
      hint: 'Bruk dictionary hvor nøkkelen er det sorterte ordet.',
      solution: `**Optimalisert versjon:**

\`\`\`python
def finn_anagrammer(ordliste):
    # Grupper ord etter deres sorterte form
    anagram_grupper = {}

    for ord in ordliste:
        sortert_ord = ''.join(sorted(ord))
        if sortert_ord not in anagram_grupper:
            anagram_grupper[sortert_ord] = []
        anagram_grupper[sortert_ord].append(ord)

    # Finn alle par innenfor hver gruppe
    anagram_par = []
    for gruppe in anagram_grupper.values():
        # Lag alle par fra denne gruppen
        for i in range(len(gruppe)):
            for j in range(i + 1, len(gruppe)):
                anagram_par.append((gruppe[i], gruppe[j]))

    return anagram_par

# Test
ord = ['abc', 'bca', 'xyz', 'cab', 'zyx']
print(finn_anagrammer(ord))
\`\`\`

**Forbedring:**

**Original versjon:**
- Tidskompleksitet: O(n² × m log m) hvor n = antall ord, m = lengde per ord
- Sammenligner hvert ord med alle andre ord
- Sorterer samme ord mange ganger

**Optimalisert versjon:**
- Tidskompleksitet: O(n × m log m) for hoveddelen
- Sorterer hvert ord bare én gang
- Bruker dictionary for å gruppere anagrammer
- Worst case for par-generering: O(n²), men kun for ord i samme gruppe

**Praktisk eksempel:**
Med 1000 ord:
- Original: 1000 × 1000 = 1,000,000 sammenligninger
- Optimalisert: 1000 operasjoner + små grupper

**Hvis vi har 10 grupper med 100 ord hver:**
- Nestede løkker: 100 × 100 × 10 = 100,000 (mye bedre enn 1,000,000!)

**Key insight:** Ved å gruppere data først, reduserer vi antall sammenligninger dramatisk. Dette er et vanlig optimaliserings-mønster.`
    }
  ],
  exercises: [],
  keyTerms: [
    'Algoritme',
    'Tidskompleksitet',
    'Big O-notasjon',
    'Plasskompleksitet',
    'Optimalisering',
    'Trade-off',
    'Worst case',
    'Memoisering'
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-2-5',
  nextChapter: 'it-2-3-2'
};

// ============================================================================
// CHAPTER 3.2: Søke- og sorteringsalgoritmer
// ============================================================================

export const CHAPTER_IT_2_3_2: TextbookChapter = {
  id: 'it-2-3-2',
  courseId: 'it-2',
  title: 'Søke- og sorteringsalgoritmer',
  description: 'Lær klassiske søke- og sorteringsalgoritmer: lineært og binærsøk, bubble sort, selection sort, insertion sort og merge sort. Forstå når du skal bruke hvilken.',
  sections: [
    {
      id: 'it2-3-2-intro',
      type: 'text' as const,
      title: 'Introduksjon',
      content: `# Søke- og sorteringsalgoritmer

Søking og sortering er to av de mest grunnleggende operasjonene i programmering. Nesten alle programmer trenger å:
- Finne spesifikke data i en samling (søking)
- Organisere data i en bestemt rekkefølge (sortering)

I dette kapittelet skal du lære:
- Lineært søk og binærsøk
- Flere sorteringsalgoritmer og når de er nyttige
- Hvordan du analyserer og sammenligner algoritmer
- Pythons innebygde verktøy for søk og sortering

Disse algoritmene er fundamentale i informatikk og brukes i alt fra databaser til søkemotorer.`
    },
    {
      id: 'it2-3-2-def-1',
      type: 'definition' as const,
      title: 'Søkealgoritmer: Oversikt',
      content: `**Søkealgoritme**: En metode for å finne et spesifikt element i en datastruktur.

**To hovedtyper:**

**1. Lineært søk (Sequential Search)**
- Går gjennom elementene ett om gangen
- Fungerer på både sorterte og usorterte lister
- Tidskompleksitet: O(n)

**2. Binærsøk (Binary Search)**
- Deler søkeområdet i to for hver iterasjon
- Krever at listen er sortert
- Tidskompleksitet: O(log n)

**Valg av algoritme:**
- Små lister (< 100 elementer): Lineært søk er helt greit
- Usortert liste: Må bruke lineært søk
- Stor, sortert liste: Binærsøk er mye raskere
- Hvis du må sortere først: Vurder om sortering + binærsøk er verdt det`
    },
    {
      id: 'it2-3-2-ex-1',
      type: 'example' as const,
      title: 'Eksempel: Lineært søk',
      content: `Lineært søk er den enkleste søkealgoritmen - vi går gjennom lista element for element til vi finner det vi leter etter.

**Implementasjon:**

\`\`\`python
def lineært_søk(liste, mål):
    """
    Søker etter mål i liste.
    Returnerer indeks hvis funnet, -1 hvis ikke funnet.
    """
    for i in range(len(liste)):
        if liste[i] == mål:
            return i
    return -1

# Test
tall = [4, 2, 7, 1, 9, 3]
print(lineært_søk(tall, 7))   # 2
print(lineært_søk(tall, 5))   # -1
\`\`\`

**Med Pythons innebygde metoder:**

\`\`\`python
tall = [4, 2, 7, 1, 9, 3]

# Sjekk om element finnes
if 7 in tall:
    indeks = tall.index(7)
    print(f"Funnet på indeks {indeks}")

# index() kaster ValueError hvis ikke funnet
try:
    indeks = tall.index(5)
except ValueError:
    print("Ikke funnet")
\`\`\`

**Analyse:**
- Best case: O(1) - elementet er først i listen
- Worst case: O(n) - elementet er sist eller ikke i listen
- Average case: O(n/2) = O(n) - må sjekke halvparten i gjennomsnitt

**Fordeler:**
- Enkel å implementere
- Fungerer på usorterte lister
- Ingen forberedelse nødvendig

**Ulemper:**
- Treg for store lister
- Må potensielt sjekke alle elementer`
    },
    {
      id: 'it2-3-2-ex-2',
      type: 'example' as const,
      title: 'Eksempel: Binærsøk',
      content: `Binærsøk er mye raskere, men krever at listen er sortert. Strategien er å halvere søkeområdet for hver iterasjon.

**Slik virker det:**
1. Se på midterste element
2. Hvis det er målet: Ferdig!
3. Hvis målet er mindre: Søk i venstre halvdel
4. Hvis målet er større: Søk i høyre halvdel
5. Gjenta til elementet er funnet eller området er tomt

**Implementasjon (iterativ):**

\`\`\`python
def binærsøk(sortert_liste, mål):
    """
    Binærsøk i sortert liste.
    Returnerer indeks hvis funnet, -1 hvis ikke funnet.
    """
    venstre = 0
    høyre = len(sortert_liste) - 1

    while venstre <= høyre:
        midten = (venstre + høyre) // 2

        if sortert_liste[midten] == mål:
            return midten
        elif sortert_liste[midten] < mål:
            venstre = midten + 1  # Søk i høyre halvdel
        else:
            høyre = midten - 1    # Søk i venstre halvdel

    return -1

# Test
tall = [1, 2, 3, 4, 7, 9]  # MÅ være sortert!
print(binærsøk(tall, 7))   # 4
print(binærsøk(tall, 5))   # -1
\`\`\`

**Implementasjon (rekursiv):**

\`\`\`python
def binærsøk_rekursiv(sortert_liste, mål, venstre=0, høyre=None):
    """Rekursiv versjon av binærsøk"""
    if høyre is None:
        høyre = len(sortert_liste) - 1

    if venstre > høyre:
        return -1

    midten = (venstre + høyre) // 2

    if sortert_liste[midten] == mål:
        return midten
    elif sortert_liste[midten] < mål:
        return binærsøk_rekursiv(sortert_liste, mål, midten + 1, høyre)
    else:
        return binærsøk_rekursiv(sortert_liste, mål, venstre, midten - 1)
\`\`\`

**Med Pythons bisect-modul:**

\`\`\`python
import bisect

tall = [1, 2, 3, 4, 7, 9]

# Finn indeks hvor element skulle vært
indeks = bisect.bisect_left(tall, 7)
if indeks < len(tall) and tall[indeks] == 7:
    print(f"Funnet på indeks {indeks}")
\`\`\`

**Analyse:**
- Tidskompleksitet: O(log n)
- Med 1000 elementer: Maks 10 sammenligninger (2¹⁰ = 1024)
- Med 1,000,000 elementer: Maks 20 sammenligninger (2²⁰ ≈ 1 million)

**Eksempel på effektiviteten:**
\`\`\`
n = 100:      Lineært = 100, Binært = 7
n = 1,000:    Lineært = 1,000, Binært = 10
n = 1,000,000: Lineært = 1,000,000, Binært = 20
\`\`\`

Binærsøk er dramatisk raskere, men husk: Listen MÅ være sortert først!`
    },
    {
      id: 'it2-3-2-exercise-1',
      type: 'exercise' as const,
      title: 'Oppgave 1: Forstå binærsøk',
      content: `Du søker etter tallet 23 i denne sorterte listen med binærsøk:

\`\`\`
[5, 12, 17, 23, 28, 31, 44, 56, 63, 71, 82]
\`\`\`

Hvor mange sammenligninger må du gjøre?`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvor mange sammenligninger kreves for å finne 23?',
      options: [
        { id: 'a', text: '1 sammenligning', isCorrect: false },
        { id: 'b', text: '2 sammenligninger', isCorrect: false },
        { id: 'c', text: '3 sammenligninger', isCorrect: true },
        { id: 'd', text: '4 sammenligninger', isCorrect: false }
      ],
      hint: 'Gå gjennom algoritmen steg for steg: først midten, så ny midten, osv.',
      solution: `**Riktig svar: c) 3 sammenligninger**

La oss gå gjennom søket steg for steg:

**Liste:** [5, 12, 17, 23, 28, 31, 44, 56, 63, 71, 82]
**Indekser:** 0   1   2   3   4   5   6   7   8   9  10

**Steg 1:**
- venstre = 0, høyre = 10
- midten = (0 + 10) // 2 = 5
- tall[5] = 31
- 31 > 23, så søk i venstre halvdel
- Oppdater: høyre = 4

**Steg 2:**
- venstre = 0, høyre = 4
- midten = (0 + 4) // 2 = 2
- tall[2] = 17
- 17 < 23, så søk i høyre halvdel
- Oppdater: venstre = 3

**Steg 3:**
- venstre = 3, høyre = 4
- midten = (3 + 4) // 2 = 3
- tall[3] = 23
- Funnet! ✓

**Totalt: 3 sammenligninger**

Dette viser styrken i binærsøk: Med 11 elementer trengte vi bare 3 sammenligninger, mens lineært søk i verste fall ville trengt 4 (hvis 23 var på indeks 3).`
    },
    {
      id: 'it2-3-2-def-2',
      type: 'definition' as const,
      title: 'Sorteringsalgoritmer: Oversikt',
      content: `**Sorteringsalgoritme**: En metode for å organisere elementer i en bestemt rekkefølge (vanligvis stigende eller synkende).

**Hovedkategorier:**

**Simple algoritmer (O(n²)):**
- Bubble Sort - enklest å forstå, bytter naboer
- Selection Sort - finner minste element gjentatte ganger
- Insertion Sort - bygger sortert liste gradvis

**Effektive algoritmer (O(n log n)):**
- Merge Sort - del-og-hersk strategi
- Quick Sort - velger pivot og partisjonerer
- Heap Sort - bruker heap-datastruktur

**Når brukes de?**

| Algoritme | Best for | Unngå når |
|-----------|----------|-----------|
| Bubble Sort | Undervisning, nesten sorterte lister | Store datasett |
| Selection Sort | Små lister, minimere writes | Store datasett |
| Insertion Sort | Nesten sorterte data, små lister | Helt usorterte store data |
| Merge Sort | Store datasett, stabil sortering | Begrenset minne |
| Quick Sort | Store datasett, in-place sortering | Worst-case må unngås |

**Pythons sorted() og .sort():**
- Bruker Timsort (hybrid av merge + insertion)
- O(n log n) i gjennomsnitt
- Meget optimalisert og stabil
- Best å bruke i praksis!`
    },
    {
      id: 'it2-3-2-ex-3',
      type: 'example' as const,
      title: 'Eksempel: Bubble Sort',
      content: `Bubble Sort er den enkleste sorteringsalgoritmen. Den sammenligner naboelementer og bytter dem hvis de er i feil rekkefølge.

**Slik virker det:**
- Gå gjennom listen gjentatte ganger
- Sammenlign hvert par av naboer
- Bytt hvis de er i feil rekkefølge
- Etter første runde er største element "boblet" til slutten
- Gjenta til ingen bytter skjer

**Implementasjon:**

\`\`\`python
def bubble_sort(liste):
    """
    Sorterer liste med bubble sort.
    Endrer listen in-place.
    """
    n = len(liste)

    # Trenger maks n-1 runder
    for i in range(n - 1):
        # Flagg for å sjekke om noen bytter skjedde
        byttet = False

        # Gå gjennom usortert del
        for j in range(n - 1 - i):
            # Sammenlign naboelement
            if liste[j] > liste[j + 1]:
                # Bytt
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
                byttet = True

        # Hvis ingen bytter, er listen sortert
        if not byttet:
            break

    return liste

# Test
tall = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(tall))
# [11, 12, 22, 25, 34, 64, 90]
\`\`\`

**Visualisering av første runde:**
\`\`\`
Start:    [64, 34, 25, 12, 22, 11, 90]
Steg 1:   [34, 64, 25, 12, 22, 11, 90]  (byttet 64 og 34)
Steg 2:   [34, 25, 64, 12, 22, 11, 90]  (byttet 64 og 25)
Steg 3:   [34, 25, 12, 64, 22, 11, 90]  (byttet 64 og 12)
Steg 4:   [34, 25, 12, 22, 64, 11, 90]  (byttet 64 og 22)
Steg 5:   [34, 25, 12, 22, 11, 64, 90]  (byttet 64 og 11)
Steg 6:   [34, 25, 12, 22, 11, 64, 90]  (ingen bytt, 90 er største)
\`\`\`

**Analyse:**
- Tidskompleksitet: O(n²) i verste og gjennomsnittlig case
- Best case: O(n) hvis listen allerede er sortert (med byttet-flagg)
- Plasskompleksitet: O(1) - sorterer in-place
- Stabil: Bevarer relativ rekkefølge for like elementer

**Fordeler:**
- Enkel å forstå og implementere
- Sorterer in-place (bruker lite minne)
- Oppdager når listen er sortert

**Ulemper:**
- Veldig treg for store lister
- Mange sammenligninger og bytter`
    },
    {
      id: 'it2-3-2-ex-4',
      type: 'example' as const,
      title: 'Eksempel: Selection Sort',
      content: `Selection Sort finner det minste elementet og plasserer det først, deretter nest-minste osv.

**Slik virker det:**
1. Finn minste element i usortert del
2. Bytt det med første element i usortert del
3. Flytt grensen mellom sortert og usortert én plass
4. Gjenta til hele listen er sortert

**Implementasjon:**

\`\`\`python
def selection_sort(liste):
    """
    Sorterer liste med selection sort.
    Endrer listen in-place.
    """
    n = len(liste)

    # Gå gjennom hele listen
    for i in range(n - 1):
        # Finn minste element i usortert del
        min_indeks = i
        for j in range(i + 1, n):
            if liste[j] < liste[min_indeks]:
                min_indeks = j

        # Bytt minste element med første i usortert del
        liste[i], liste[min_indeks] = liste[min_indeks], liste[i]

    return liste

# Test
tall = [64, 25, 12, 22, 11]
print(selection_sort(tall))
# [11, 12, 22, 25, 64]
\`\`\`

**Visualisering:**
\`\`\`
Start:     [64, 25, 12, 22, 11]
           |<- usortert ->|

Runde 1:   [11, 25, 12, 22, 64]  (byttet 11 og 64)
           [S] |<-usortert->|

Runde 2:   [11, 12, 25, 22, 64]  (byttet 12 og 25)
           [  S  ] |<usort>|

Runde 3:   [11, 12, 22, 25, 64]  (byttet 22 og 25)
           [    S    ] |uso|

Runde 4:   [11, 12, 22, 25, 64]  (ingen bytt nødvendig)
           [      S      ] |u|

Ferdig:    [11, 12, 22, 25, 64]
           [    Sortert     ]
\`\`\`

**Analyse:**
- Tidskompleksitet: O(n²) alltid (også best case!)
- Plasskompleksitet: O(1) - sorterer in-place
- Ikke stabil: Kan endre rekkefølge på like elementer

**Sammenligninger:** n(n-1)/2 = O(n²)
**Bytter:** Maks n (én per runde)

**Fordeler:**
- Minimalt antall bytter (n-1)
- Sorterer in-place
- Fungerer bra når writing er dyrt

**Ulemper:**
- Alltid O(n²), selv om listen er sortert
- Ikke stabil`
    },
    {
      id: 'it2-3-2-exercise-2',
      type: 'exercise' as const,
      title: 'Oppgave 2: Sammenlign Bubble Sort og Selection Sort',
      content: `Du skal sortere listen [5, 1, 4, 2, 8] med både bubble sort og selection sort.`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilken påstand er riktig?',
      options: [
        { id: 'a', text: 'Bubble sort gjør færre sammenligninger', isCorrect: false },
        { id: 'b', text: 'Selection sort gjør færre bytter', isCorrect: true },
        { id: 'c', text: 'Begge har samme antall bytter', isCorrect: false },
        { id: 'd', text: 'Bubble sort er alltid raskere', isCorrect: false }
      ],
      hint: 'Selection sort bytter bare én gang per runde.',
      solution: `**Riktig svar: b) Selection sort gjør færre bytter**

**Bubble Sort:**
- Bytter elementer hver gang naboer er i feil rekkefølge
- For [5, 1, 4, 2, 8]: Mange bytter underveis

**Selection Sort:**
- Finner minste element i hver runde
- Bytter bare én gang per runde (4 bytter totalt for 5 elementer)

**Detaljert sammenligning:**

| Aspekt | Bubble Sort | Selection Sort |
|--------|-------------|----------------|
| Sammenligninger | O(n²) | O(n²) |
| Bytter | O(n²) worst case | O(n) alltid |
| Best case tid | O(n) hvis sortert | O(n²) alltid |
| Stabil | Ja | Nei |

**Konklusjon:**
Selection sort gjør **færre bytter** (maks n-1), men begge har O(n²) sammenligninger. Dette gjør selection sort bedre når bytter er dyre operasjoner (f.eks. flytting av store objekter i minnet).`
    },
    {
      id: 'it2-3-2-ex-5',
      type: 'example' as const,
      title: 'Eksempel: Insertion Sort',
      content: `Insertion Sort bygger en sortert liste gradvis ved å sette inn hvert element på riktig plass.

**Analogi:** Som å sortere spillkort i hånden - du tar ett kort om gangen og setter det inn på riktig plass blant kortene du allerede har sortert.

**Slik virker det:**
1. Start med første element (allerede "sortert")
2. Ta neste element
3. Finn riktig posisjon i sortert del
4. Skyv elementer til siden og sett inn
5. Gjenta for alle elementer

**Implementasjon:**

\`\`\`python
def insertion_sort(liste):
    """
    Sorterer liste med insertion sort.
    Endrer listen in-place.
    """
    for i in range(1, len(liste)):
        # Element som skal settes inn
        nøkkel = liste[i]

        # Finn riktig posisjon i sortert del
        j = i - 1
        while j >= 0 and liste[j] > nøkkel:
            # Skyv element én plass til høyre
            liste[j + 1] = liste[j]
            j -= 1

        # Sett inn nøkkelen på riktig plass
        liste[j + 1] = nøkkel

    return liste

# Test
tall = [12, 11, 13, 5, 6]
print(insertion_sort(tall))
# [5, 6, 11, 12, 13]
\`\`\`

**Visualisering:**
\`\`\`
Start:       [12, 11, 13, 5, 6]
             [S]  <- første element er sortert

Runde 1:     [11, 12, 13, 5, 6]
             [  S  ]  <- satt inn 11 før 12

Runde 2:     [11, 12, 13, 5, 6]
             [    S    ]  <- 13 allerede på rett plass

Runde 3:     [5, 11, 12, 13, 6]
             [      S      ]  <- 5 satt inn først

Runde 4:     [5, 6, 11, 12, 13]
             [        S        ]  <- 6 satt inn etter 5

Ferdig!
\`\`\`

**Analyse:**
- Best case: O(n) - hvis listen allerede er sortert
- Average case: O(n²)
- Worst case: O(n²) - hvis listen er reversert
- Plasskompleksitet: O(1) - sorterer in-place
- Stabil: Ja

**Fordeler:**
- Enkel å implementere
- Effektiv for små datasett
- Effektiv for nesten sorterte data
- Sorterer in-place
- Stabil sortering
- Online: Kan sortere mens data mottas

**Ulemper:**
- O(n²) for store, usorterte datasett

**Når er Insertion Sort best:**
\`\`\`python
# Perfekt for nesten sortert data
nesten_sortert = [1, 2, 3, 5, 4, 6, 7]  # Bare ett element feil
# Insertion sort vil være O(n) her!

# Også bra for små lister
små_data = [3, 1, 4, 1, 5]
# Overhead fra mer komplekse algoritmer lønner seg ikke
\`\`\``
    },
    {
      id: 'it2-3-2-exercise-3',
      type: 'exercise' as const,
      title: 'Oppgave 3: Velg beste enkle sortering',
      content: `Du har disse tre scenarioene:

A) Sortere en liste med 10 elementer
B) Sortere en liste med 10,000 elementer som nesten er sortert (bare 5 elementer feil)
C) Sortere en liste med 10,000 helt tilfeldige elementer

Hvilken enkel sorteringsalgoritme (Bubble, Selection, eller Insertion) ville du valgt for hver?`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Begrunn valget av algoritme for hvert scenario.',
      hint: 'Tenk på best case vs worst case for hver algoritme.',
      solution: `**A) 10 elementer:**

**Svar: Insertion Sort** (men alle fungerer greit)

Begrunnelse:
- Med bare 10 elementer spiller valg av algoritme minimal rolle
- Insertion sort er ofte raskest for små datasett i praksis
- Enkel å implementere og forstå

**B) 10,000 nesten sorterte elementer:**

**Svar: Insertion Sort**

Begrunnelse:
- Insertion sort har O(n) best case for sorterte data
- Med bare 5 elementer feil, vil de fleste sammenligninger finne rett plass med én gang
- Bubble sort (med optimalisering) kunne også fungert, men insertion er raskere
- Selection sort ville alltid ta O(n²) tid uansett

**C) 10,000 helt tilfeldige elementer:**

**Svar: Bruk IKKE enkle algoritmer - bruk Pythons sorted()!**

Begrunnelse:
- Alle tre enkle algoritmer er O(n²) = 100,000,000 operasjoner
- Pythons sorted() er O(n log n) = ~132,000 operasjoner
- sorted() er også høyt optimalisert i C

Hvis du MÅ bruke en av de tre:
- **Selection Sort** hvis du vil minimere antall bytter
- Insertion/Bubble er omtrent like trege for tilfeldig data

**Praktisk kode:**
\`\`\`python
# Scenario A: Små data
små_liste = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
insertion_sort(små_liste)  # Helt greit

# Scenario B: Nesten sortert
nesten_sortert = list(range(10000))
nesten_sortert[100], nesten_sortert[5000] = nesten_sortert[5000], nesten_sortert[100]
# ... noen få fler bytter ...
insertion_sort(nesten_sortert)  # Veldig rask!

# Scenario C: Store, tilfeldige data
import random
stor_liste = [random.randint(1, 10000) for _ in range(10000)]
sortert = sorted(stor_liste)  # ALLTID bruk sorted() her!
\`\`\`

**Hovedpoeng:** Bruk riktig verktøy for jobben. Enkle algoritmer er fine for læring og spesielle tilfeller, men Pythons innebygde sortering er nesten alltid bedre for produksjonskode.`
    },
    {
      id: 'it2-3-2-def-3',
      type: 'definition' as const,
      title: 'Merge Sort - Del-og-hersk',
      content: `**Merge Sort**: En effektiv sorteringsalgoritme som bruker del-og-hersk (divide and conquer) strategi.

**Prinsipp:**
1. **Del**: Splitt listen i to like store halvdeler
2. **Hersk**: Sorter hver halvdel rekursivt
3. **Kombiner**: Slå sammen (merge) de to sorterte halvdelene

**Egenskaper:**
- Tidskompleksitet: O(n log n) for alle tilfeller
- Plasskompleksitet: O(n) - trenger ekstra minne
- Stabil: Bevarer rekkefølge for like elementer
- Ikke in-place: Lager nye lister underveis

**Hvorfor O(n log n)?**
- Vi deler listen i to log₂(n) ganger (det er høyden på rekursjons-treet)
- På hvert nivå slår vi sammen n elementer totalt
- Totalt: n × log₂(n) operasjoner

**Visualisering:**
\`\`\`
Original:    [38, 27, 43, 3, 9, 82, 10]

Del:         [38, 27, 43, 3] [9, 82, 10]
             [38, 27] [43, 3] [9, 82] [10]
             [38] [27] [43] [3] [9] [82] [10]

Merge:       [27, 38] [3, 43] [9, 82] [10]
             [3, 27, 38, 43] [9, 10, 82]
             [3, 9, 10, 27, 38, 43, 82]
\`\`\``
    },
    {
      id: 'it2-3-2-ex-6',
      type: 'example' as const,
      title: 'Eksempel: Merge Sort implementasjon',
      content: `La oss implementere Merge Sort i Python:

**Komplett implementasjon:**

\`\`\`python
def merge_sort(liste):
    """
    Sorterer liste med merge sort.
    Returnerer ny sortert liste.
    """
    # Base case: Liste med 0 eller 1 element er allerede sortert
    if len(liste) <= 1:
        return liste

    # Del: Finn midtpunkt og splitt
    midten = len(liste) // 2
    venstre = liste[:midten]
    høyre = liste[midten:]

    # Hersk: Sorter hver halvdel rekursivt
    venstre = merge_sort(venstre)
    høyre = merge_sort(høyre)

    # Kombiner: Slå sammen sorterte halvdeler
    return merge(venstre, høyre)


def merge(venstre, høyre):
    """
    Slår sammen to sorterte lister til én sortert liste.
    """
    resultat = []
    i = j = 0

    # Sammenlign elementer fra begge listene
    while i < len(venstre) and j < len(høyre):
        if venstre[i] <= høyre[j]:
            resultat.append(venstre[i])
            i += 1
        else:
            resultat.append(høyre[j])
            j += 1

    # Legg til resterende elementer
    resultat.extend(venstre[i:])
    resultat.extend(høyre[j:])

    return resultat


# Test
tall = [38, 27, 43, 3, 9, 82, 10]
sortert = merge_sort(tall)
print(sortert)
# [3, 9, 10, 27, 38, 43, 82]
\`\`\`

**Steg-for-steg med små data:**

\`\`\`python
# Sorter [3, 1, 4, 2]

def merge_sort_verbose(liste, dybde=0):
    """Merge sort med debug-output"""
    indent = "  " * dybde
    print(f"{indent}Sorterer: {liste}")

    if len(liste) <= 1:
        print(f"{indent}Base case: {liste}")
        return liste

    midten = len(liste) // 2
    venstre = merge_sort_verbose(liste[:midten], dybde + 1)
    høyre = merge_sort_verbose(liste[midten:], dybde + 1)

    resultat = merge(venstre, høyre)
    print(f"{indent}Merged: {resultat}")
    return resultat

merge_sort_verbose([3, 1, 4, 2])
\`\`\`

**Output:**
\`\`\`
Sorterer: [3, 1, 4, 2]
  Sorterer: [3, 1]
    Sorterer: [3]
    Base case: [3]
    Sorterer: [1]
    Base case: [1]
  Merged: [1, 3]
  Sorterer: [4, 2]
    Sorterer: [4]
    Base case: [4]
    Sorterer: [2]
    Base case: [2]
  Merged: [2, 4]
Merged: [1, 2, 3, 4]
\`\`\`

**Analyse av merge-funksjonen:**
- Går gjennom begge listene nøyaktig én gang
- Tidskompleksitet: O(n) hvor n = total lengde
- Alltid lineær tid for å merge

**Fordeler med Merge Sort:**
- Garantert O(n log n) - ingen worst case
- Stabil sortering
- Godt for lenkelister
- Paralleliserbar

**Ulemper:**
- Trenger O(n) ekstra minne
- Litt tregere enn Quick Sort i praksis (flere kopieringer)`
    },
    {
      id: 'it2-3-2-exercise-4',
      type: 'exercise' as const,
      title: 'Oppgave 4: Analyser Merge Sort',
      content: `Du kjører merge_sort() på en liste med 8 elementer: [8, 3, 5, 4, 7, 6, 1, 2]`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvor mange ganger kalles merge-funksjonen?',
      options: [
        { id: 'a', text: '3 ganger', isCorrect: false },
        { id: 'b', text: '7 ganger', isCorrect: true },
        { id: 'c', text: '8 ganger', isCorrect: false },
        { id: 'd', text: '15 ganger', isCorrect: false }
      ],
      hint: 'Tegn rekursjons-treet. merge() kalles én gang for hver intern node.',
      solution: `**Riktig svar: b) 7 ganger**

La oss tegne rekursjons-treet:

\`\`\`
Nivå 0:                [8,3,5,4,7,6,1,2]
                      /                 \\
Nivå 1:        [8,3,5,4]              [7,6,1,2]
              /        \\              /        \\
Nivå 2:    [8,3]      [5,4]        [7,6]      [1,2]
          /    \\      /    \\      /    \\      /    \\
Nivå 3: [8]   [3]  [5]   [4]  [7]   [6]  [1]   [2]
\`\`\`

**Telling av merge-kall:**

**Nivå 3 → Nivå 2:** 4 merge-kall
- merge([8], [3]) → [3,8]
- merge([5], [4]) → [4,5]
- merge([7], [6]) → [6,7]
- merge([1], [2]) → [1,2]

**Nivå 2 → Nivå 1:** 2 merge-kall
- merge([3,8], [4,5]) → [3,4,5,8]
- merge([6,7], [1,2]) → [1,2,6,7]

**Nivå 1 → Nivå 0:** 1 merge-kall
- merge([3,4,5,8], [1,2,6,7]) → [1,2,3,4,5,6,7,8]

**Totalt: 4 + 2 + 1 = 7 merge-kall**

**Generelt mønster:**
For n elementer kalles merge() n-1 ganger totalt.
- n = 8: 7 kall
- n = 16: 15 kall
- n = 32: 31 kall

Dette er fordi hvert merge-kall kombinerer to sublister til én, og vi begynner med n sublister (enkelt-elementer) og ender med 1 liste (hele den sorterte listen). Derfor trengs n-1 sammenslåinger.`
    },
    {
      id: 'it2-3-2-def-4',
      type: 'definition' as const,
      title: 'Pythons sorteringsverktøy',
      content: `Python har innebygde, høyt optimaliserte verktøy for sortering:

**sorted() - Funksjon**
\`\`\`python
# Returnerer ny sortert liste, original uendret
tall = [3, 1, 4, 1, 5]
sortert = sorted(tall)
print(tall)     # [3, 1, 4, 1, 5] - uendret
print(sortert)  # [1, 1, 3, 4, 5]
\`\`\`

**.sort() - Metode**
\`\`\`python
# Sorterer listen in-place, returnerer None
tall = [3, 1, 4, 1, 5]
tall.sort()
print(tall)  # [1, 1, 3, 4, 5]
\`\`\`

**Nøkkelparametre:**

**reverse** - Synkende rekkefølge:
\`\`\`python
tall = [3, 1, 4, 1, 5]
print(sorted(tall, reverse=True))  # [5, 4, 3, 1, 1]
\`\`\`

**key** - Egendefinert sorteringsnøkkel:
\`\`\`python
# Sorter etter lengde
ord = ["eple", "banan", "kiwi", "jordbær"]
print(sorted(ord, key=len))
# ['kiwi', 'eple', 'banan', 'jordbær']

# Sorter personer etter alder
personer = [
    {"navn": "Anna", "alder": 25},
    {"navn": "Bob", "alder": 20},
    {"navn": "Charlie", "alder": 30}
]
sortert = sorted(personer, key=lambda p: p["alder"])
# Bob (20), Anna (25), Charlie (30)
\`\`\`

**Timsort - Pythons algoritme:**
- Hybrid av merge sort og insertion sort
- O(n log n) worst case
- O(n) best case for nesten sorterte data
- Stabil sortering
- Optimalisert i C

**Når bruke hva:**
- \`.sort()\`: Når du vil endre eksisterende liste
- \`sorted()\`: Når du trenger ny liste eller skal sortere annen iterable
- Egne algoritmer: Kun for læring eller svært spesielle tilfeller`
    },
    {
      id: 'it2-3-2-exercise-5',
      type: 'exercise' as const,
      title: 'Oppgave 5: Pythons sortering',
      content: `Du har en liste med studenter:

\`\`\`python
studenter = [
    {"navn": "Emma", "karakter": 4, "alder": 18},
    {"navn": "Oliver", "karakter": 5, "alder": 19},
    {"navn": "Sofie", "karakter": 4, "alder": 18},
    {"navn": "Lucas", "karakter": 6, "alder": 18}
]
\`\`\`

Du vil sortere først etter karakter (høyest først), deretter etter navn alfabetisk hvis karakterene er like.`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Hvordan sorterer du listen riktig?',
      hint: 'Bruk tuple som sorteringsnøkkel: (karakter, navn). Husk reverse for karakter.',
      solution: `**Løsning:**

\`\`\`python
studenter = [
    {"navn": "Emma", "karakter": 4, "alder": 18},
    {"navn": "Oliver", "karakter": 5, "alder": 19},
    {"navn": "Sofie", "karakter": 4, "alder": 18},
    {"navn": "Lucas", "karakter": 6, "alder": 18}
]

# Sorter etter karakter (synkende) og navn (stigende)
sortert = sorted(studenter, key=lambda s: (-s["karakter"], s["navn"]))

for student in sortert:
    print(f"{student['navn']}: {student['karakter']}")
\`\`\`

**Output:**
\`\`\`
Lucas: 6
Oliver: 5
Emma: 4
Sofie: 4
\`\`\`

**Forklaring:**

1. **key=lambda s: (-s["karakter"], s["navn"])**
   - Returnerer tuple med to elementer
   - Python sorterer tuples element for element

2. **-s["karakter"]**
   - Negerer karakteren for synkende sortering
   - 6 blir -6, 5 blir -5, etc.
   - -6 < -5 < -4, så høyeste karakter kommer først

3. **s["navn"]**
   - Navn sorteres alfabetisk (stigende) som vanlig
   - Brukes kun når karakterer er like

**Alternative løsninger:**

**Metode 2: Sorter to ganger**
\`\`\`python
# Sorter først etter navn
studenter.sort(key=lambda s: s["navn"])
# Deretter etter karakter (stabil sortering bevarer navn-rekkefølge)
studenter.sort(key=lambda s: s["karakter"], reverse=True)
\`\`\`

Dette fungerer fordi Python bruker stabil sortering - elementer med samme sorteringsnøkkel beholder sin relative rekkefølge.

**Metode 3: Bruk operator.itemgetter**
\`\`\`python
from operator import itemgetter

sortert = sorted(studenter,
                key=lambda s: (-s["karakter"], s["navn"]))
\`\`\`

**Beste praksis:**
Tuple-metoden (første løsning) er tydeligst og mest effektiv for flere sorteringskriterier.`
    },
    {
      id: 'it2-3-2-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `## Oppsummering

**Søkealgoritmer:**

| Algoritme | Krav | Tidskompleksitet | Bruk når |
|-----------|------|------------------|----------|
| Lineært søk | Ingen | O(n) | Små/usorterte lister |
| Binærsøk | Sortert liste | O(log n) | Store sorterte lister |

**Sorteringsalgoritmer:**

| Algoritme | Best | Average | Worst | Minne | Stabil | Når bruke |
|-----------|------|---------|-------|-------|--------|-----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Ja | Undervisning, små lister |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | Nei | Minimere writes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Ja | Nesten sorterte data |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Ja | Store datasett, garantert ytelse |
| Python sorted() | O(n) | O(n log n) | O(n log n) | O(n) | Ja | **Alltid i praksis!** |

**Viktige konsepter:**

**Stabil sortering:**
- Bevarer rekkefølge for elementer med samme verdi
- Viktig når du sorterer på flere kriterier

**In-place vs ny liste:**
- In-place: Endrer original, bruker O(1) ekstra minne
- Ny liste: Original uendret, bruker O(n) ekstra minne

**Trade-offs:**
- Tid vs minne (merge sort bruker mer minne, men garantert rask)
- Enkelt vs effektivt (bubble sort er enkel, men treg)
- Generelt vs spesialisert (insertion sort er best for nesten sorterte data)

**Praktiske råd:**
1. Bruk Pythons \`sorted()\` og \`.sort()\` i produksjonskode
2. Forstå algoritmene for å kunne velge riktig i spesielle tilfeller
3. Profiler før du optimaliserer
4. Binærsøk krever sortert data - vurder om sortering lønner seg`
    },
    {
      id: 'it2-3-2-samleoppgaver',
      type: 'text' as const,
      title: 'Samleoppgaver',
      content: '## Samleoppgaver\n\nOppgaver som kombinerer søk, sortering og analyse:'
    },
    // --- Samleoppgaver ---
    {
      id: 'it2-3-2-exercise-6',
      type: 'exercise' as const,
      title: 'Samleoppgave 1: Finn median effektivt',
      content: `Medianen er det midterste tallet i en sortert liste. For en usortert liste må vi:
1. Sortere listen
2. Finne midterste element(ene)

Hvis listen har n elementer:
- Oddetall: Median = liste[n//2]
- Partall: Median = (liste[n//2-1] + liste[n//2]) / 2

Hva er tidskompleksiteten for å finne medianen i en usortert liste?`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva er tidskompleksiteten for å finne median?',
      options: [
        { id: 'a', text: 'O(n) - kan finnes i én gjennomgang', isCorrect: false },
        { id: 'b', text: 'O(n log n) - må sortere først', isCorrect: true },
        { id: 'c', text: 'O(n²) - må sammenligne alle par', isCorrect: false },
        { id: 'd', text: 'O(log n) - kan bruke binærsøk', isCorrect: false }
      ],
      hint: 'Den dominerende operasjonen er sortering.',
      solution: `**Riktig svar: b) O(n log n) - må sortere først**

**Implementasjon:**

\`\`\`python
def finn_median(liste):
    """Finner median i usortert liste"""
    # Sorter listen
    sortert = sorted(liste)  # O(n log n)
    n = len(sortert)

    # Finn median
    if n % 2 == 1:
        # Oddetall: Ta midterste
        return sortert[n // 2]
    else:
        # Partall: Gjennomsnitt av to midterste
        return (sortert[n // 2 - 1] + sortert[n // 2]) / 2

# Test
print(finn_median([3, 1, 4, 1, 5]))  # 3
print(finn_median([3, 1, 4, 1]))     # 2.5
\`\`\`

**Analyse:**
- Sortering: O(n log n)
- Finne midterste: O(1)
- **Total: O(n log n)**

Sorteringen dominerer tidskompleksiteten.

**Fun fact:** Det finnes en O(n) algoritme (Quickselect) for å finne median uten full sortering, men den er kompleks og sjelden nødvendig i praksis.`
    },
    {
      id: 'it2-3-2-exercise-7',
      type: 'exercise' as const,
      title: 'Samleoppgave 2: Når lønner binærsøk seg?',
      content: `Du har en usortert liste med n elementer. Du skal søke etter k forskjellige elementer.

Hvilken strategi er best?

A) Bruk lineært søk for hvert element (k × n sammenligninger)
B) Sorter først, deretter binærsøk (n log n + k log n sammenligninger)`,
      difficulty: 'hard' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'For hvilke verdier av k lønner det seg å sortere først?',
      hint: 'Sett opp ulikheten: k × n > n log n + k log n, og løs for k.',
      solution: `**Analyse:**

**Strategi A: Lineært søk for alt**
- k søk, hver med O(n) tid
- Total: O(k × n)

**Strategi B: Sorter først, deretter binærsøk**
- Sortering: O(n log n)
- k binærsøk: O(k log n)
- Total: O(n log n + k log n)

**Når er B bedre enn A?**

\`\`\`
n log n + k log n < k × n
log n (n + k) < k × n
n + k < k × n / log n
\`\`\`

For store n:
\`\`\`
k > (n log n) / (n - log n)
k ≈ n log n / n = log n
\`\`\`

**Konklusjon:**
Sorter først hvis k > log n (omtrent)

**Praktiske eksempler:**

**n = 1,000 elementer (log n ≈ 10):**
- Hvis k < 10: Bruk lineært søk
- Hvis k > 10: Sorter først, bruk binærsøk

**n = 1,000,000 elementer (log n ≈ 20):**
- Hvis k < 20: Bruk lineært søk
- Hvis k > 20: Sorter først, bruk binærsøk

**Python-kode:**

\`\`\`python
import bisect

def søk_mange(liste, søk_verdier):
    """Optimal strategi for mange søk"""
    n = len(liste)
    k = len(søk_verdier)

    if k > math.log2(n):
        # Sorter først
        sortert = sorted(liste)
        resultater = []
        for verdi in søk_verdier:
            indeks = bisect.bisect_left(sortert, verdi)
            if indeks < len(sortert) and sortert[indeks] == verdi:
                resultater.append(True)
            else:
                resultater.append(False)
        return resultater
    else:
        # Bruk lineært søk
        return [verdi in liste for verdi in søk_verdier]
\`\`\`

**Alternativ: Bruk set!**

For mange medlemskapstester er set den beste løsningen:
\`\`\`python
liste_set = set(liste)  # O(n) tid
resultater = [verdi in liste_set for verdi in søk_verdier]  # O(k) tid
# Total: O(n + k)
\`\`\`

Dette er raskere enn både lineært søk og sortering + binærsøk!`
    },
    {
      id: 'it2-3-2-exercise-8',
      type: 'exercise' as const,
      title: 'Samleoppgave 3: Implementer sortering med custom sammenligning',
      content: `Implementer en funksjon som sorterer en liste med komplekse objekter ved å bruke bubble sort, men med en egendefinert sammenlignings-funksjon.

\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __repr__(self):
        return f"{self.navn}({self.alder})"

personer = [
    Person("Anna", 25),
    Person("Bob", 20),
    Person("Charlie", 30),
    Person("Diana", 20)
]
\`\`\`

Sorter først etter alder, deretter alfabetisk etter navn hvis alderen er lik.`,
      difficulty: 'hard' as const,
      exerciseType: 'classic' as const,
      points: 5,
      question: 'Implementer bubble_sort_custom(liste, sammenlign_funksjon)',
      hint: 'sammenlign_funksjon(a, b) skal returnere True hvis a skal komme før b.',
      solution: `**Komplett løsning:**

\`\`\`python
def bubble_sort_custom(liste, sammenlign):
    """
    Sorterer liste med bubble sort og egendefinert sammenligningsfunksjon.

    Args:
        liste: Liste å sortere (endres in-place)
        sammenlign: Funksjon(a, b) som returnerer True hvis a < b
    """
    n = len(liste)

    for i in range(n - 1):
        byttet = False

        for j in range(n - 1 - i):
            # Bruk sammenlign-funksjonen i stedet for <
            if not sammenlign(liste[j], liste[j + 1]):
                # Bytt hvis de er i feil rekkefølge
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
                byttet = True

        if not byttet:
            break

    return liste


class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __repr__(self):
        return f"{self.navn}({self.alder})"


# Definer sammenligningsfunksjon
def sammenlign_personer(p1, p2):
    """
    Returnerer True hvis p1 skal komme før p2.
    Først etter alder, deretter navn.
    """
    if p1.alder != p2.alder:
        return p1.alder < p2.alder
    return p1.navn < p2.navn


# Test
personer = [
    Person("Anna", 25),
    Person("Bob", 20),
    Person("Charlie", 30),
    Person("Diana", 20)
]

bubble_sort_custom(personer, sammenlign_personer)
print(personer)
# [Bob(20), Diana(20), Anna(25), Charlie(30)]
\`\`\`

**Forklaring:**

1. **Sammenligningsfunksjon:**
   - Returnerer True hvis første argument skal komme FØR andre argument
   - Sammenligner først alder, deretter navn hvis alder er lik

2. **Bubble sort tilpasning:**
   - I stedet for \`liste[j] > liste[j + 1]\`
   - Bruker \`not sammenlign(liste[j], liste[j + 1])\`
   - Bytter hvis rekkefølgen er feil

3. **Funker med alle objekttyper:**
   - Kan sortere hva som helst med riktig sammenligningsfunksjon

**Alternativ: Bruk __lt__ i klassen**

\`\`\`python
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __lt__(self, other):
        """Mindre-enn operator for Person"""
        if self.alder != other.alder:
            return self.alder < other.alder
        return self.navn < other.navn

    def __repr__(self):
        return f"{self.navn}({self.alder})"

# Nå kan vi bruke vanlig sorted()
personer = [
    Person("Anna", 25),
    Person("Bob", 20),
    Person("Charlie", 30),
    Person("Diana", 20)
]

print(sorted(personer))
# [Bob(20), Diana(20), Anna(25), Charlie(30)]
\`\`\`

Dette er den pythonic måten å gjøre det på!

**Enda bedre: Bruk functools.total_ordering**

\`\`\`python
from functools import total_ordering

@total_ordering
class Person:
    def __init__(self, navn, alder):
        self.navn = navn
        self.alder = alder

    def __eq__(self, other):
        return self.navn == other.navn and self.alder == other.alder

    def __lt__(self, other):
        if self.alder != other.alder:
            return self.alder < other.alder
        return self.navn < other.navn

    def __repr__(self):
        return f"{self.navn}({self.alder})"

# @total_ordering genererer automatisk __le__, __gt__, __ge__
\`\`\`

Dette gir deg alle sammenligningsoperatorer basert på __eq__ og __lt__!`
    }
  ],
  exercises: [],
  keyTerms: [
    'Lineært søk',
    'Binærsøk',
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
    'Merge Sort',
    'Del-og-hersk',
    'Stabil sortering'
  ],
  estimatedMinutes: 70,
  prevChapter: 'it-2-3-1',
  nextChapter: 'it-2-3-3'
};

// ============================================================================
// CHAPTER 3.3: Datastrukturer
// ============================================================================

export const CHAPTER_IT_2_3_3: TextbookChapter = {
  id: 'it-2-3-3',
  courseId: 'it-2',
  title: 'Datastrukturer',
  description: 'Lær om ulike datastrukturer i Python: lister, stakker, køer, ordbøker og mengder. Forstå når du skal bruke hvilken datastruktur for å løse problemer effektivt.',
  sections: [
    {
      id: 'it2-3-3-intro',
      type: 'text' as const,
      title: 'Introduksjon',
      content: `# Datastrukturer

En datastruktur er en måte å organisere og lagre data på, slik at vi kan bruke dem effektivt. Valg av riktig datastruktur kan utgjøre enorm forskjell for både ytelse og lesbarhet i koden din.

I dette kapittelet skal du lære:
- Hva en datastruktur er og hvorfor det er viktig
- Lister og deres operasjoner
- Stakker (LIFO) og køer (FIFO)
- Ordbøker (dictionaries) og oppslag
- Mengder (sets) og mengdeoperasjoner
- Hvordan du velger riktig datastruktur

Alle eksemplene bruker Pythons innebygde datastrukturer, som er godt optimalisert og enkle å bruke.`
    },
    {
      id: 'it2-3-3-def-1',
      type: 'definition' as const,
      title: 'Hva er en datastruktur?',
      content: `**Datastruktur**: En organisert måte å lagre og håndtere data på, som gir effektiv tilgang og modifikasjon.

**Hvorfor er datastrukturer viktige?**

Tenk på det som forskjellen mellom å lete etter et ord i en usortert bunke med lapper, versus å slå opp i en ordbok. Begge inneholder de samme ordene, men organiseringen gjør en enorm forskjell.

**Viktige egenskaper å vurdere:**

| Egenskap | Spørsmål |
|----------|----------|
| Innsetting | Hvor raskt kan vi legge til data? |
| Sletting | Hvor raskt kan vi fjerne data? |
| Søking | Hvor raskt kan vi finne data? |
| Tilgang | Hvor raskt kan vi hente data vi vet hvor er? |
| Rekkefølge | Trenger vi å bevare rekkefølgen? |
| Duplikater | Kan vi ha like elementer? |

**Pythons innebygde datastrukturer:**
- **list** - Ordnet, indeksert, tillater duplikater
- **dict** - Nøkkel-verdi-par, raske oppslag
- **set** - Uordnet, ingen duplikater
- **tuple** - Ordnet, uforanderlig (immutable)
- **deque** - Dobbel-endet kø (fra collections)`
    },
    {
      id: 'it2-3-3-ex-1',
      type: 'example' as const,
      title: 'Eksempel: Lister i Python',
      content: `Lister er den mest brukte datastrukturen i Python. De er fleksible og støtter mange operasjoner.

**Grunnleggende operasjoner:**

\`\`\`python
# Opprette lister
tall = [1, 2, 3, 4, 5]
tomme = []
blandet = [1, "hei", True, 3.14]

# Tilgang med indeks - O(1)
print(tall[0])    # 1 (første element)
print(tall[-1])   # 5 (siste element)

# Slicing - O(k) hvor k er størrelsen på utsnitt
print(tall[1:3])  # [2, 3]
print(tall[::2])  # [1, 3, 5] (annethvert element)

# Legge til elementer
tall.append(6)         # O(1) - legger til på slutten
tall.insert(0, 0)      # O(n) - skyver alle elementer
tall.extend([7, 8])    # O(k) - legger til flere

# Fjerne elementer
tall.pop()             # O(1) - fjerner siste
tall.pop(0)            # O(n) - fjerner første, skyver resten
tall.remove(3)         # O(n) - søker og fjerner

# Søking
indeks = tall.index(4)    # O(n) - finn indeks
finnes = 4 in tall         # O(n) - sjekk om element finnes

# Lengde
print(len(tall))           # O(1) - returnerer lengden
\`\`\`

**Tidskompleksiteter for lister:**

| Operasjon | Tid | Forklaring |
|-----------|-----|------------|
| Indekstilgang \`l[i]\` | O(1) | Direkte tilgang via posisjon |
| append() | O(1) | Legger til på slutten |
| pop() (siste) | O(1) | Fjerner siste element |
| insert(0, x) | O(n) | Må skyve alle elementer |
| pop(0) | O(n) | Må skyve alle elementer |
| \`x in l\` | O(n) | Må sjekke hvert element |
| sort() | O(n log n) | Timsort |

**Viktig innsikt:** Lister er raske for tilgang og å legge til/fjerne på slutten, men trege for å legge til/fjerne i starten.`
    },
    {
      id: 'it2-3-3-exercise-1',
      type: 'exercise' as const,
      title: 'Oppgave 1: Listeoperasjoner',
      content: `Gitt denne koden:

\`\`\`python
data = [10, 20, 30, 40, 50]
data.append(60)
data.insert(0, 5)
data.pop()
data.pop(0)
\`\`\`

Hva inneholder \`data\` etter at alle operasjonene er utført?`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva er innholdet i data etter alle operasjonene?',
      options: [
        { id: 'a', text: '[10, 20, 30, 40, 50]', isCorrect: true },
        { id: 'b', text: '[5, 10, 20, 30, 40, 50, 60]', isCorrect: false },
        { id: 'c', text: '[10, 20, 30, 40, 50, 60]', isCorrect: false },
        { id: 'd', text: '[5, 10, 20, 30, 40, 50]', isCorrect: false }
      ],
      hint: 'Gå gjennom operasjonene steg for steg. append() legger til på slutten, insert(0, x) legger til i starten, pop() fjerner siste, pop(0) fjerner første.',
      solution: `**Riktig svar: a) [10, 20, 30, 40, 50]**

La oss gå gjennom steg for steg:

\`\`\`python
data = [10, 20, 30, 40, 50]       # Start
data.append(60)                     # [10, 20, 30, 40, 50, 60]
data.insert(0, 5)                   # [5, 10, 20, 30, 40, 50, 60]
data.pop()                          # [5, 10, 20, 30, 40, 50]  (fjernet 60)
data.pop(0)                         # [10, 20, 30, 40, 50]     (fjernet 5)
\`\`\`

Vi la til to elementer og fjernet de samme to igjen, og endte opp med den opprinnelige listen!`
    },
    {
      id: 'it2-3-3-def-2',
      type: 'definition' as const,
      title: 'Stakk (Stack) - LIFO',
      content: `**Stakk (Stack)**: En datastruktur der elementer legges til og fjernes fra toppen. Siste element inn er første element ut (LIFO - Last In, First Out).

**Analogi:** Tenk på en stabel med tallerkener. Du legger alltid en ny tallerken på toppen, og tar alltid den øverste tallerkenen først.

**Operasjoner:**
- **push(element)**: Legg til element på toppen
- **pop()**: Fjern og returner element fra toppen
- **peek()**: Se på toppelementet uten å fjerne det
- **is_empty()**: Sjekk om stakken er tom

**Alle operasjoner er O(1)!**

**Bruksområder:**
- Angre-funksjoner (Ctrl+Z)
- Navigasjonshistorikk i nettlesere
- Funksjonskall-stakken (call stack)
- Evaluering av parenteser og uttrykk
- Dybde-først-søk (DFS)

**I Python:** Vi bruker en vanlig liste som stakk - \`append()\` for push og \`pop()\` for pop.`
    },
    {
      id: 'it2-3-3-ex-2',
      type: 'example' as const,
      title: 'Eksempel: Stakk i Python',
      content: `Python har ingen egen stakk-klasse, men lister fungerer utmerket som stakker:

**Grunnleggende bruk:**

\`\`\`python
# Stakk med vanlig liste
stakk = []

# Push - legg til på toppen
stakk.append("A")
stakk.append("B")
stakk.append("C")
print(stakk)  # ['A', 'B', 'C']

# Peek - se på toppen
print(stakk[-1])  # 'C'

# Pop - fjern fra toppen
topp = stakk.pop()
print(topp)    # 'C'
print(stakk)   # ['A', 'B']

# Sjekk om tom
print(len(stakk) == 0)  # False
\`\`\`

**Praktisk eksempel: Sjekke balanserte parenteser**

\`\`\`python
def er_balansert(tekst):
    """
    Sjekker om parenteser, klammer og krøllparenteser er balansert.
    Bruker en stakk til å holde styr på åpne parenteser.
    """
    stakk = []
    par = {"(": ")", "[": "]", "{": "}"}

    for tegn in tekst:
        if tegn in par:
            # Åpen parentes - push på stakken
            stakk.append(tegn)
        elif tegn in par.values():
            # Lukket parentes - sjekk mot toppen
            if not stakk:
                return False  # Ingen åpen parentes å matche
            åpen = stakk.pop()
            if par[åpen] != tegn:
                return False  # Feil type parentes

    # Stakken skal være tom hvis alt er balansert
    return len(stakk) == 0

# Test
print(er_balansert("(a + b) * [c - d]"))     # True
print(er_balansert("((a + b)"))                # False - mangler )
print(er_balansert("{[}]"))                    # False - feil rekkefølge
print(er_balansert("hello world"))             # True - ingen parenteser
\`\`\`

**Hvordan stakken fungerer for \`(a + [b])\`:**
\`\`\`
Tegn: (    stakk: ['(']
Tegn: a    stakk: ['(']        (ignorert)
Tegn: +    stakk: ['(']        (ignorert)
Tegn: [    stakk: ['(', '[']
Tegn: b    stakk: ['(', '[']   (ignorert)
Tegn: ]    stakk: ['(']        (matchet med '[')
Tegn: )    stakk: []           (matchet med '(')
Ferdig: stakk er tom -> balansert!
\`\`\``
    },
    {
      id: 'it2-3-3-exercise-2',
      type: 'exercise' as const,
      title: 'Oppgave 2: Stakk-operasjoner',
      content: `Du utfører følgende operasjoner på en tom stakk:

\`\`\`python
stakk = []
stakk.append(1)
stakk.append(2)
stakk.append(3)
stakk.pop()
stakk.append(4)
stakk.pop()
stakk.pop()
\`\`\`

Hva er igjen i stakken?`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva inneholder stakken etter alle operasjonene?',
      options: [
        { id: 'a', text: '[1]', isCorrect: true },
        { id: 'b', text: '[1, 4]', isCorrect: false },
        { id: 'c', text: '[1, 2]', isCorrect: false },
        { id: 'd', text: '[]', isCorrect: false }
      ],
      hint: 'LIFO: pop() fjerner alltid det siste elementet som ble lagt til.',
      solution: `**Riktig svar: a) [1]**

Steg for steg:

\`\`\`
stakk.append(1)   -> [1]
stakk.append(2)   -> [1, 2]
stakk.append(3)   -> [1, 2, 3]
stakk.pop()        -> [1, 2]       (fjernet 3)
stakk.append(4)   -> [1, 2, 4]
stakk.pop()        -> [1, 2]       (fjernet 4)
stakk.pop()        -> [1]          (fjernet 2)
\`\`\`

Bare element 1 er igjen.`
    },
    {
      id: 'it2-3-3-def-3',
      type: 'definition' as const,
      title: 'Kø (Queue) - FIFO',
      content: `**Kø (Queue)**: En datastruktur der elementer legges til bak og fjernes foran. Første element inn er første element ut (FIFO - First In, First Out).

**Analogi:** Tenk på en kø i butikken. Den som kom først, blir betjent først.

**Operasjoner:**
- **enqueue(element)**: Legg til element bakerst
- **dequeue()**: Fjern og returner element fra fronten
- **front()**: Se på frontelementet uten å fjerne det
- **is_empty()**: Sjekk om køen er tom

**Bruksområder:**
- Køsystemer (print-kø, ventekø)
- Bredde-først-søk (BFS)
- Asynkrone oppgaver (task queue)
- Buffere (f.eks. tastaturinput)

**I Python:** Bruk \`collections.deque\` i stedet for vanlig liste for køer, fordi \`deque\` har O(1) for både innsetting bak og fjerning foran.

**Hvorfor ikke vanlig liste?**
- \`liste.pop(0)\` er O(n) - må flytte alle elementer
- \`deque.popleft()\` er O(1) - effektivt begge veier`
    },
    {
      id: 'it2-3-3-ex-3',
      type: 'example' as const,
      title: 'Eksempel: Kø med deque',
      content: `\`\`\`python
from collections import deque

# Opprett en kø
kø = deque()

# Enqueue - legg til bakerst
kø.append("Kunde 1")
kø.append("Kunde 2")
kø.append("Kunde 3")
print(kø)  # deque(['Kunde 1', 'Kunde 2', 'Kunde 3'])

# Dequeue - fjern fra fronten
neste = kø.popleft()
print(neste)  # 'Kunde 1'
print(kø)     # deque(['Kunde 2', 'Kunde 3'])

# Front - se på første element
print(kø[0])  # 'Kunde 2'

# Sjekk om tom
print(len(kø) == 0)  # False
\`\`\`

**Praktisk eksempel: Enkel oppgavekø**

\`\`\`python
from collections import deque

def oppgavekø_demo():
    """Simulerer en enkel oppgavekø"""
    kø = deque()

    # Legg til oppgaver
    oppgaver = ["Skriv rapport", "Send e-post", "Les artikkel", "Oppdater kode"]
    for oppgave in oppgaver:
        kø.append(oppgave)
        print(f"Lagt til: {oppgave}")

    print(f"\\nOppgaver i kø: {len(kø)}")

    # Behandle oppgaver i rekkefølge
    while kø:
        oppgave = kø.popleft()
        print(f"Utfører: {oppgave}")

    print("Alle oppgaver utført!")

oppgavekø_demo()
\`\`\`

**Output:**
\`\`\`
Lagt til: Skriv rapport
Lagt til: Send e-post
Lagt til: Les artikkel
Lagt til: Oppdater kode

Oppgaver i kø: 4
Utfører: Skriv rapport
Utfører: Send e-post
Utfører: Les artikkel
Utfører: Oppdater kode
Alle oppgaver utført!
\`\`\`

**Sammenligning: list vs deque**

| Operasjon | list | deque |
|-----------|------|-------|
| append() (bak) | O(1) | O(1) |
| pop() (bak) | O(1) | O(1) |
| insert(0, x) (foran) | O(n) | O(1) |
| pop(0) (foran) | O(n) | O(1) |
| Indeksering [i] | O(1) | O(n) |

Bruk \`deque\` når du trenger effektiv innsetting/fjerning i begge ender!`
    },
    {
      id: 'it2-3-3-exercise-3',
      type: 'exercise' as const,
      title: 'Oppgave 3: Stakk eller kø?',
      content: `For hvert scenario, avgjør om du bør bruke en stakk (LIFO) eller en kø (FIFO):

A) Angre-funksjon i et tekstprogram
B) Skrivekø for en printer
C) Tilbake-knappen i en nettleser
D) Behandle kundehenvendelser i den rekkefølgen de kom inn`,
      difficulty: 'easy' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Begrunn valget for hvert scenario.',
      hint: 'LIFO: siste inn, første ut. FIFO: første inn, første ut.',
      solution: `**A) Angre-funksjon: STAKK (LIFO)**
- Du angrer alltid den siste handlingen først
- Push når brukeren gjør noe, pop for å angre

**B) Skrivekø for printer: KØ (FIFO)**
- Dokumenter skrives ut i den rekkefølgen de ble sendt
- Første dokument sendt = første dokument skrevet ut

**C) Tilbake-knappen i nettleser: STAKK (LIFO)**
- Du går tilbake til siste besøkte side
- Hver ny side pushes, tilbake = pop

**D) Kundehenvendelser: KØ (FIFO)**
- Kunder betjenes i den rekkefølgen de tok kontakt
- Rettferdig behandling: først til mølla

**Huskeregel:**
- Bruk **stakk** når du trenger å reversere rekkefølge eller angre
- Bruk **kø** når du trenger rettferdig, kronologisk behandling`
    },
    {
      id: 'it2-3-3-def-4',
      type: 'definition' as const,
      title: 'Ordbøker (Dictionaries)',
      content: `**Ordbok (dict)**: En datastruktur som lagrer data som nøkkel-verdi-par. Gir ekstremt raske oppslag basert på nøkkelen.

**Egenskaper:**
- Nøkler må være unike og uforanderlige (str, int, tuple)
- Verdier kan være hva som helst
- Rekkefølge bevares (fra Python 3.7+)
- Oppslag, innsetting og sletting er O(1) i gjennomsnitt

**Tidskompleksiteter:**

| Operasjon | Tid |
|-----------|-----|
| Oppslag \`d[key]\` | O(1) |
| Innsetting \`d[key] = val\` | O(1) |
| Sletting \`del d[key]\` | O(1) |
| \`key in d\` | O(1) |
| Iterere over alle | O(n) |

**Hvordan fungerer det?**
Ordbøker bruker en **hash-tabell** internt. Nøkkelen konverteres til et tall (hash) som bestemmer hvor verdien lagres. Dette gir direkte tilgang uten å søke.

**Bruksområder:**
- Oppslag og indeksering (brukernavn -> brukerdata)
- Telle forekomster
- Gruppering av data
- Caching / memoisering
- Konfigurasjonsinnstillinger`
    },
    {
      id: 'it2-3-3-ex-4',
      type: 'example' as const,
      title: 'Eksempel: Ordbøker i praksis',
      content: `**Grunnleggende operasjoner:**

\`\`\`python
# Opprette ordbok
elev = {
    "navn": "Emma",
    "alder": 17,
    "klasse": "3A",
    "karakterer": [5, 4, 6, 5]
}

# Oppslag - O(1)
print(elev["navn"])          # 'Emma'
print(elev.get("alder"))     # 17
print(elev.get("hobby", "Ukjent"))  # 'Ukjent' (standardverdi)

# Sett inn / oppdater - O(1)
elev["skole"] = "Katta VGS"
elev["alder"] = 18

# Sletting - O(1)
del elev["klasse"]

# Sjekk om nøkkel finnes - O(1)
print("navn" in elev)  # True
\`\`\`

**Praktisk eksempel: Telle ordfrekvens**

\`\`\`python
def tell_ord(tekst):
    """Teller forekomster av hvert ord i en tekst"""
    ordtelling = {}
    ord_liste = tekst.lower().split()

    for ord in ord_liste:
        # Fjern tegnsetting
        ord = ord.strip(".,!?;:")
        if ord in ordtelling:
            ordtelling[ord] += 1
        else:
            ordtelling[ord] = 1

    return ordtelling

tekst = "Python er gøy. Python er kraftig. Python er Python."
resultat = tell_ord(tekst)
print(resultat)
# {'python': 4, 'er': 3, 'gøy': 1, 'kraftig': 1}

# Sorter etter frekvens
sortert = sorted(resultat.items(), key=lambda x: x[1], reverse=True)
for ord, antall in sortert:
    print(f"{ord}: {antall}")
\`\`\`

**Enklere med Counter:**

\`\`\`python
from collections import Counter

tekst = "Python er gøy. Python er kraftig. Python er Python."
ord_liste = tekst.lower().replace(".", "").split()
teller = Counter(ord_liste)
print(teller.most_common(3))
# [('python', 4), ('er', 3), ('gøy', 1)]
\`\`\``
    },
    {
      id: 'it2-3-3-exercise-4',
      type: 'exercise' as const,
      title: 'Oppgave 4: Ordbok vs liste',
      content: `Du skal lagre informasjon om 10,000 elever og ofte slå opp en elev basert på elevnummeret.

Hvilken datastruktur er best?

A) En liste med elevnummer som indeks
B) En ordbok med elevnummer som nøkkel
C) En sortert liste som du søker i med binærsøk`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilken tilnærming er mest effektiv?',
      options: [
        { id: 'a', text: 'Liste med elevnummer som indeks', isCorrect: false },
        { id: 'b', text: 'Ordbok med elevnummer som nøkkel', isCorrect: true },
        { id: 'c', text: 'Sortert liste med binærsøk', isCorrect: false },
        { id: 'd', text: 'Alle er like effektive', isCorrect: false }
      ],
      hint: 'Tenk på hva som skjer hvis elevnumrene ikke er sammenhengende (f.eks. 10001, 10050, 20030).',
      solution: `**Riktig svar: b) Ordbok med elevnummer som nøkkel**

**Hvorfor?**

**A) Liste med indeks:**
- Hvis elevnumre er 10001-20000, trenger du en liste med 20,001 plasser
- De fleste plassene vil være tomme (sløsing med minne)
- Fungerer dårlig med ikke-sammenhengende numre

**B) Ordbok (dict): BEST!**
- O(1) oppslag med elevnummer
- Bruker bare plass for faktiske elever
- Fungerer uansett hva elevnumrene er

\`\`\`python
elever = {
    10001: {"navn": "Anna", "klasse": "3A"},
    10050: {"navn": "Bob", "klasse": "2B"},
    20030: {"navn": "Charlie", "klasse": "1C"}
}

# Lynraskt oppslag - O(1)
elev = elever[10050]
\`\`\`

**C) Sortert liste med binærsøk:**
- O(log n) oppslag (tregere enn ordbok)
- Innsetting er O(n) (må flytte elementer)
- Mer komplisert kode`
    },
    {
      id: 'it2-3-3-def-5',
      type: 'definition' as const,
      title: 'Mengder (Sets)',
      content: `**Mengde (set)**: En uordnet samling av unike elementer. Duplikater fjernes automatisk.

**Egenskaper:**
- Ingen duplikater
- Uordnet (ingen indeksering)
- Elementer må være uforanderlige (hashable)
- Raske medlemskapstester: O(1)

**Tidskompleksiteter:**

| Operasjon | Tid |
|-----------|-----|
| \`x in s\` | O(1) |
| add(x) | O(1) |
| remove(x) | O(1) |
| union (\\|) | O(n + m) |
| intersection (&) | O(min(n, m)) |
| difference (-) | O(n) |

**Mengdeoperasjoner (som i matematikken):**
- **Union (A | B)**: Alle elementer fra begge
- **Snitt (A & B)**: Elementer som finnes i begge
- **Differanse (A - B)**: Elementer i A som ikke er i B
- **Symmetrisk differanse (A ^ B)**: Elementer i A eller B, men ikke begge

**Bruksområder:**
- Fjerne duplikater fra en liste
- Rask sjekk av medlemskap
- Finne felles eller unike elementer mellom samlinger
- Filtrering`
    },
    {
      id: 'it2-3-3-ex-5',
      type: 'example' as const,
      title: 'Eksempel: Mengder og mengdeoperasjoner',
      content: `**Grunnleggende bruk:**

\`\`\`python
# Opprette mengder
frukt = {"eple", "banan", "kiwi"}
tall = {1, 2, 3, 2, 1}  # Duplikater fjernes
print(tall)  # {1, 2, 3}

# Fjerne duplikater fra en liste
liste_med_duplikater = [1, 2, 2, 3, 3, 3, 4]
unik_liste = list(set(liste_med_duplikater))
print(unik_liste)  # [1, 2, 3, 4]

# Medlemskapstester - O(1)
print("eple" in frukt)   # True
print("mango" in frukt)  # False
\`\`\`

**Mengdeoperasjoner:**

\`\`\`python
fag_anna = {"matte", "norsk", "engelsk", "naturfag"}
fag_bob = {"matte", "norsk", "historie", "gym"}

# Union - alle fag samlet
alle_fag = fag_anna | fag_bob
print(alle_fag)
# {'matte', 'norsk', 'engelsk', 'naturfag', 'historie', 'gym'}

# Snitt - felles fag
felles = fag_anna & fag_bob
print(felles)  # {'matte', 'norsk'}

# Differanse - fag bare Anna har
bare_anna = fag_anna - fag_bob
print(bare_anna)  # {'engelsk', 'naturfag'}

# Symmetrisk differanse - fag bare én av dem har
ulike = fag_anna ^ fag_bob
print(ulike)  # {'engelsk', 'naturfag', 'historie', 'gym'}
\`\`\`

**Praktisk eksempel: Finn felles venner**

\`\`\`python
venner = {
    "Anna": {"Bob", "Charlie", "Diana", "Eva"},
    "Bob": {"Anna", "Charlie", "Frank"},
    "Charlie": {"Anna", "Bob", "Diana"}
}

def felles_venner(person1, person2):
    """Finner felles venner mellom to personer"""
    v1 = venner.get(person1, set())
    v2 = venner.get(person2, set())
    felles = v1 & v2 - {person1, person2}
    return felles

print(felles_venner("Anna", "Bob"))
# {'Charlie'}
\`\`\``
    },
    {
      id: 'it2-3-3-exercise-5',
      type: 'exercise' as const,
      title: 'Oppgave 5: Mengdeoperasjoner',
      content: `Gitt:
\`\`\`python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
\`\`\`

Hva er resultatet av \`A & B\`?`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva er snittet av A og B?',
      options: [
        { id: 'a', text: '{1, 2, 3, 4, 5, 6, 7, 8}', isCorrect: false },
        { id: 'b', text: '{4, 5}', isCorrect: true },
        { id: 'c', text: '{1, 2, 3}', isCorrect: false },
        { id: 'd', text: '{6, 7, 8}', isCorrect: false }
      ],
      hint: 'Snittet (& / intersection) gir elementene som finnes i begge mengdene.',
      solution: `**Riktig svar: b) {4, 5}**

**A & B** (snitt/intersection) gir elementene som finnes i **begge** mengdene:
- A = {1, 2, 3, **4**, **5**}
- B = {**4**, **5**, 6, 7, 8}
- A & B = {4, 5}

**De andre operasjonene for referanse:**
- A | B (union) = {1, 2, 3, 4, 5, 6, 7, 8}
- A - B (differanse) = {1, 2, 3}
- B - A (differanse) = {6, 7, 8}
- A ^ B (symmetrisk differanse) = {1, 2, 3, 6, 7, 8}`
    },
    {
      id: 'it2-3-3-def-6',
      type: 'definition' as const,
      title: 'Velge riktig datastruktur',
      content: `**Oversikt over datastrukturer og når de bør brukes:**

| Behov | Datastruktur | Hvorfor |
|-------|-------------|---------|
| Ordnet sekvens med indekstilgang | **list** | O(1) indeksering |
| LIFO (angre, navigasjon) | **list** (som stakk) | O(1) append/pop |
| FIFO (kø, rekkefølge) | **deque** | O(1) begge ender |
| Raske oppslag med nøkkel | **dict** | O(1) oppslag |
| Unike elementer, medlemstest | **set** | O(1) medlemstest |
| Uforanderlig sekvens | **tuple** | Sikkerhet, som dict-nøkkel |

**Beslutningstre:**

1. Trenger du nøkkel-verdi-par?
   - Ja -> **dict**

2. Trenger du bare unike elementer?
   - Ja -> **set**

3. Trenger du ordnet sekvens?
   - Ja, og den skal ikke endres -> **tuple**
   - Ja, og du legger til/fjerner mest i endene -> **deque**
   - Ja, generell bruk -> **list**

**Ytelsessammenligning for \`x in samling\`:**

\`\`\`python
import time

data_list = list(range(1_000_000))
data_set = set(range(1_000_000))
data_dict = {i: True for i in range(1_000_000)}

# Søk etter verdi som ikke finnes
# list:  ~50 ms    (O(n) - må sjekke alle)
# set:   ~0.001 ms (O(1) - hash-oppslag)
# dict:  ~0.001 ms (O(1) - hash-oppslag)
\`\`\`

Set og dict er opptil **50,000 ganger raskere** enn lister for medlemskapstester!`
    },
    {
      id: 'it2-3-3-exercise-6',
      type: 'exercise' as const,
      title: 'Oppgave 6: Velg datastruktur',
      content: `Du skal bygge et system for å administrere en nettbutikk. Velg riktig datastruktur for hvert behov:

A) Lagre produktinformasjon der hvert produkt har en unik ID
B) Holde styr på handlekurven (ordnet liste av produkter)
C) Holde styr på hvilke produkter en kunde har sett (ingen duplikater)
D) Implementere en "sist sett"-funksjon der nyeste produkt vises først`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'Begrunn valget av datastruktur for hvert scenario.',
      hint: 'Tenk på hvilke operasjoner du trenger mest: oppslag, ordnet innsetting, unike verdier, eller LIFO.',
      solution: `**A) Produktinformasjon med unik ID: dict**

\`\`\`python
produkter = {
    "P001": {"navn": "T-skjorte", "pris": 299, "lager": 50},
    "P002": {"navn": "Bukse", "pris": 599, "lager": 30},
}
# O(1) oppslag med produkt-ID
\`\`\`

**B) Handlekurv: list**

\`\`\`python
handlekurv = ["P001", "P002", "P001"]  # Samme produkt kan legges til flere ganger
# Ordnet, tillater duplikater, enkel å iterere
\`\`\`

**C) Sett produkter kunden har sett: set**

\`\`\`python
sett_produkter = {"P001", "P003", "P007"}
# Ingen duplikater, rask sjekk: "P001" in sett_produkter -> O(1)
\`\`\`

**D) "Sist sett"-funksjon: list (brukt som stakk)**

\`\`\`python
sist_sett = []
sist_sett.append("P003")  # Bruker så på P003
sist_sett.append("P001")  # Bruker så på P001
# sist_sett[-1] gir nyeste produkt
# Kan også bruke deque med maxlen for å begrense størrelsen
from collections import deque
sist_sett = deque(maxlen=10)  # Maks 10 sist sette produkter
\`\`\``
    },
    {
      id: 'it2-3-3-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `## Oppsummering

**Datastrukturer i Python:**

| Datastruktur | Type | Duplikater | Ordnet | Oppslag | Bruksområde |
|-------------|------|------------|--------|---------|-------------|
| list | Sekvens | Ja | Ja | O(n) | Generell samling |
| dict | Mapping | Nei (nøkler) | Ja* | O(1) | Nøkkel-verdi |
| set | Mengde | Nei | Nei | O(1) | Unikhet, medlemstest |
| tuple | Sekvens | Ja | Ja | O(n) | Uforanderlig data |
| deque | Sekvens | Ja | Ja | O(n) | Kø, dobbel-endet |

*dict bevarer innsettingsrekkefølge fra Python 3.7+

**Stakk vs Kø:**
- **Stakk (LIFO):** append() + pop() - angre, tilbake, rekursjon
- **Kø (FIFO):** append() + popleft() - ventekø, BFS, oppgaver

**Viktige valg:**
1. Trenger du raske oppslag? -> **dict** eller **set**
2. Trenger du ordnet sekvens? -> **list** eller **deque**
3. Trenger du unike elementer? -> **set**
4. Trenger du nøkkel-verdi? -> **dict**

**Ytelsestips:**
- Bruk \`set\` for medlemskapstester, ikke \`list\`
- Bruk \`deque\` for køer, ikke \`list\`
- Bruk \`dict\` for oppslag, ikke nestede løkker
- Velg riktig datastruktur FØR du begynner å kode`
    },
    {
      id: 'it2-3-3-samleoppgaver',
      type: 'text' as const,
      title: 'Samleoppgaver',
      content: '## Samleoppgaver\n\nOppgaver som kombinerer flere datastrukturer:'
    },
    {
      id: 'it2-3-3-exercise-7',
      type: 'exercise' as const,
      title: 'Samleoppgave 1: Inventarsystem',
      content: `Du skal lage et enkelt inventarsystem for en butikk. Systemet skal kunne:
- Legge til produkter med navn og antall
- Oppdatere antallet for eksisterende produkter
- Fjerne produkter som er utsolgt
- Finne produkter raskt basert på navn

Hvilken datastruktur egner seg best, og hvordan ville du implementert det?`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'Implementer et enkelt inventarsystem med riktig datastruktur.',
      hint: 'Tenk på hva som er nøkkelen og hva som er verdien. Du trenger raske oppslag basert på produktnavn.',
      solution: `**Løsning: Bruk dict**

\`\`\`python
class Inventar:
    def __init__(self):
        self.produkter = {}  # dict: produktnavn -> antall

    def legg_til(self, navn, antall):
        """Legg til produkt eller oppdater antall"""
        if navn in self.produkter:
            self.produkter[navn] += antall
        else:
            self.produkter[navn] = antall
        print(f"Oppdatert: {navn} -> {self.produkter[navn]} stk")

    def selg(self, navn, antall=1):
        """Selg et produkt"""
        if navn not in self.produkter:
            print(f"Feil: {navn} finnes ikke")
            return False
        if self.produkter[navn] < antall:
            print(f"Feil: Bare {self.produkter[navn]} stk igjen")
            return False
        self.produkter[navn] -= antall
        if self.produkter[navn] == 0:
            del self.produkter[navn]
            print(f"{navn} er utsolgt og fjernet")
        else:
            print(f"Solgt {antall} {navn}. {self.produkter[navn]} igjen")
        return True

    def vis_alle(self):
        """Vis alle produkter"""
        for navn, antall in sorted(self.produkter.items()):
            print(f"  {navn}: {antall} stk")

# Test
butikk = Inventar()
butikk.legg_til("T-skjorte", 50)
butikk.legg_til("Bukse", 30)
butikk.selg("T-skjorte", 2)
butikk.vis_alle()
\`\`\`

**Begrunnelse:** Dict gir O(1) oppslag, innsetting og sletting basert på produktnavn.`
    },
    {
      id: 'it2-3-3-exercise-8',
      type: 'exercise' as const,
      title: 'Samleoppgave 2: Analyse av tidskompleksitet',
      content: `Se på disse to implementasjonene som sjekker om to lister har felles elementer:

**Versjon A:**
\`\`\`python
def felles_v1(liste1, liste2):
    for element in liste1:
        if element in liste2:
            return True
    return False
\`\`\`

**Versjon B:**
\`\`\`python
def felles_v2(liste1, liste2):
    sett = set(liste2)
    for element in liste1:
        if element in sett:
            return True
    return False
\`\`\``,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 3,
      question: 'Hva er tidskompleksiteten for versjon A og B (worst case)?',
      options: [
        { id: 'a', text: 'A: O(n), B: O(n)', isCorrect: false },
        { id: 'b', text: 'A: O(n*m), B: O(n+m)', isCorrect: true },
        { id: 'c', text: 'A: O(n+m), B: O(n*m)', isCorrect: false },
        { id: 'd', text: 'A: O(n*m), B: O(n*m)', isCorrect: false }
      ],
      hint: 'I versjon A er "element in liste2" O(m). I versjon B er "element in sett" O(1).',
      solution: `**Riktig svar: b) A: O(n*m), B: O(n+m)**

Hvor n = len(liste1) og m = len(liste2).

**Versjon A: O(n * m)**
- Ytre løkke: n iterasjoner
- \`element in liste2\`: O(m) for hver sjekk (lineært søk i liste)
- Totalt: O(n * m)

**Versjon B: O(n + m)**
- \`set(liste2)\`: O(m) for å bygge settet
- Ytre løkke: n iterasjoner
- \`element in sett\`: O(1) for hver sjekk (hash-oppslag)
- Totalt: O(m) + O(n) = O(n + m)

**Eksempel med n=m=10,000:**
- Versjon A: 100,000,000 operasjoner
- Versjon B: 20,000 operasjoner

Versjon B er **5,000 ganger raskere** bare ved å konvertere til set!`
    }
  ],
  exercises: [],
  keyTerms: [
    'Datastruktur',
    'Liste',
    'Stakk (Stack)',
    'Kø (Queue)',
    'LIFO',
    'FIFO',
    'Ordbok (dict)',
    'Mengde (set)',
    'Hash-tabell',
    'deque'
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-3-2',
  nextChapter: 'it-2-3-4'
};

// ============================================================================
// CHAPTER 3.4: Rekursjon
// ============================================================================

export const CHAPTER_IT_2_3_4: TextbookChapter = {
  id: 'it-2-3-4',
  courseId: 'it-2',
  title: 'Rekursjon',
  description: 'Lær å tenke rekursivt og skrive rekursive funksjoner. Forstå basetilfeller, rekursive kall, sammenligningen med iterasjon og hvordan du unngår stack overflow.',
  sections: [
    {
      id: 'it2-3-4-intro',
      type: 'text' as const,
      title: 'Introduksjon',
      content: `# Rekursjon

Rekursjon er en teknikk der en funksjon kaller seg selv for å løse et problem. Det høres kanskje rart ut, men det er en av de mest elegante og kraftige ideene i informatikk.

I dette kapittelet skal du lære:
- Hva rekursjon er og hvordan det fungerer
- Basetilfeller og rekursive tilfeller
- Klassiske rekursive problemer
- Sammenligning mellom rekursjon og iterasjon
- Stack overflow og hvordan du unngår det

Mange algoritmer og datastrukturer bygger på rekursjon, inkludert merge sort, trestrukturer og mange søkealgoritmer.`
    },
    {
      id: 'it2-3-4-def-1',
      type: 'definition' as const,
      title: 'Hva er rekursjon?',
      content: `**Rekursjon**: En teknikk der en funksjon løser et problem ved å kalle seg selv med en enklere versjon av det samme problemet.

**To nødvendige deler:**

1. **Basetilfelle (base case)**: Betingelsen som stopper rekursjonen. Uten dette vil funksjonen kalle seg selv i det uendelige.

2. **Rekursivt tilfelle (recursive case)**: Funksjonen kaller seg selv med et forenklet problem som beveger seg mot basetilfellet.

**Analogi:** Tenk på russiske matryoshka-dukker. Du åpner en dukke og finner en mindre dukke inni. Du fortsetter å åpne til du finner den minste dukken (basetilfellet).

**Grunnleggende mønster:**
\`\`\`python
def rekursiv_funksjon(problem):
    if problem er enkelt nok:   # Basetilfelle
        return løsning direkte
    else:                        # Rekursivt tilfelle
        del_opp_problemet
        return rekursiv_funksjon(enklere_problem)
\`\`\`

**Viktig:** Hvert rekursivt kall MÅ bringe oss nærmere basetilfellet, ellers stopper aldri funksjonen.`
    },
    {
      id: 'it2-3-4-ex-1',
      type: 'example' as const,
      title: 'Eksempel: Fakultet (n!)',
      content: `Fakultet er det klassiske eksempelet på rekursjon:
- 5! = 5 × 4 × 3 × 2 × 1 = 120
- Rekursiv definisjon: n! = n × (n-1)!
- Basetilfelle: 0! = 1

**Rekursiv implementasjon:**

\`\`\`python
def fakultet(n):
    """Beregner n! rekursivt"""
    # Basetilfelle
    if n == 0 or n == 1:
        return 1

    # Rekursivt tilfelle
    return n * fakultet(n - 1)

print(fakultet(5))   # 120
print(fakultet(0))   # 1
print(fakultet(10))  # 3628800
\`\`\`

**Hvordan fungerer det? La oss spore fakultet(4):**

\`\`\`
fakultet(4)
= 4 * fakultet(3)
= 4 * (3 * fakultet(2))
= 4 * (3 * (2 * fakultet(1)))
= 4 * (3 * (2 * 1))          <- Basetilfelle!
= 4 * (3 * 2)                <- Ruller tilbake
= 4 * 6
= 24
\`\`\`

**Visualisering av kall-stakken:**
\`\`\`
fakultet(4)  -> venter...
  fakultet(3)  -> venter...
    fakultet(2)  -> venter...
      fakultet(1)  -> returnerer 1
    returnerer 2 * 1 = 2
  returnerer 3 * 2 = 6
returnerer 4 * 6 = 24
\`\`\`

**Iterativ versjon for sammenligning:**

\`\`\`python
def fakultet_iterativ(n):
    """Beregner n! iterativt"""
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat
\`\`\`

Begge gir samme svar, men den rekursive er mer lik den matematiske definisjonen.`
    },
    {
      id: 'it2-3-4-exercise-1',
      type: 'exercise' as const,
      title: 'Oppgave 1: Forstå rekursjon',
      content: `Hva returnerer denne funksjonen når den kalles med \`summer(4)\`?

\`\`\`python
def summer(n):
    if n == 0:
        return 0
    return n + summer(n - 1)
\`\`\``,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva returnerer summer(4)?',
      options: [
        { id: 'a', text: '4', isCorrect: false },
        { id: 'b', text: '10', isCorrect: true },
        { id: 'c', text: '24', isCorrect: false },
        { id: 'd', text: 'Uendelig rekursjon', isCorrect: false }
      ],
      hint: 'Spor gjennom kallene: summer(4) = 4 + summer(3) = 4 + 3 + summer(2) = ...',
      solution: `**Riktig svar: b) 10**

La oss spore gjennom:

\`\`\`
summer(4) = 4 + summer(3)
          = 4 + (3 + summer(2))
          = 4 + (3 + (2 + summer(1)))
          = 4 + (3 + (2 + (1 + summer(0))))
          = 4 + (3 + (2 + (1 + 0)))     <- Basetilfelle!
          = 4 + (3 + (2 + 1))
          = 4 + (3 + 3)
          = 4 + 6
          = 10
\`\`\`

Funksjonen beregner summen 1 + 2 + 3 + 4 = 10.

Generelt: summer(n) = n + (n-1) + ... + 1 + 0 = n(n+1)/2`
    },
    {
      id: 'it2-3-4-def-2',
      type: 'definition' as const,
      title: 'Kall-stakken og rekursjon',
      content: `**Kall-stakken (Call Stack)**: Når en funksjon kalles, legges den på en stakk i minnet. Når den returnerer, fjernes den fra stakken.

**Rekursjon og kall-stakken:**
Hver gang en rekursiv funksjon kaller seg selv, legges et nytt kall på stakken. Alle ventende kall holdes i minnet til de kan fullføres.

\`\`\`
Kall-stakken under fakultet(4):

Steg 1: [fakultet(4)]
Steg 2: [fakultet(4), fakultet(3)]
Steg 3: [fakultet(4), fakultet(3), fakultet(2)]
Steg 4: [fakultet(4), fakultet(3), fakultet(2), fakultet(1)]
Steg 5: [fakultet(4), fakultet(3), fakultet(2)]  <- 1 returnert
Steg 6: [fakultet(4), fakultet(3)]               <- 2 returnert
Steg 7: [fakultet(4)]                            <- 6 returnert
Steg 8: []                                       <- 24 returnert
\`\`\`

**Stack Overflow**: Hvis rekursjonen aldri når basetilfellet, vokser kall-stakken til den sprenger minnegrensen. Python har en standard grense på ca. 1000 rekursive kall.

\`\`\`python
import sys
print(sys.getrecursionlimit())  # Vanligvis 1000

# ALDRI gjør dette:
def uendelig(n):
    return uendelig(n + 1)  # Ingen basetilfelle!
# RecursionError: maximum recursion depth exceeded
\`\`\`

**Plasskompleksitet:** Rekursive funksjoner bruker O(n) minne for stakken, der n er dybden av rekursjonen.`
    },
    {
      id: 'it2-3-4-ex-2',
      type: 'example' as const,
      title: 'Eksempel: Fibonacci-tallene',
      content: `Fibonacci-tallene er definert rekursivt:
- F(0) = 0, F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1
- Serien: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

**Naiv rekursiv løsning:**

\`\`\`python
def fib(n):
    """Fibonacci - naiv rekursiv versjon"""
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(10))  # 55
# print(fib(40))  # Ekstremt tregt! Ikke kjør dette.
\`\`\`

**Problemet: Dobbeltarbeid!**
\`\`\`
fib(5)
= fib(4) + fib(3)
= (fib(3) + fib(2)) + (fib(2) + fib(1))
= ((fib(2) + fib(1)) + (fib(1) + fib(0))) + ((fib(1) + fib(0)) + 1)
...
\`\`\`
fib(2) beregnes 3 ganger, fib(1) beregnes 5 ganger! Tidskompleksitet: O(2^n).

**Løsning 1: Memoisering (top-down)**

\`\`\`python
def fib_memo(n, cache={}):
    """Fibonacci med memoisering"""
    if n <= 1:
        return n
    if n not in cache:
        cache[n] = fib_memo(n - 1) + fib_memo(n - 2)
    return cache[n]

print(fib_memo(50))  # 12586269025 - lynraskt!
\`\`\`

**Løsning 2: Iterativ (bottom-up)**

\`\`\`python
def fib_iterativ(n):
    """Fibonacci iterativt"""
    if n <= 1:
        return n
    forrige = 0
    nåværende = 1
    for _ in range(2, n + 1):
        forrige, nåværende = nåværende, forrige + nåværende
    return nåværende

print(fib_iterativ(50))  # 12586269025
\`\`\`

**Sammenligning:**

| Metode | Tid | Minne | fib(40) tid |
|--------|-----|-------|-------------|
| Naiv rekursjon | O(2^n) | O(n) | ~60 sekunder |
| Memoisering | O(n) | O(n) | < 0.001 sekunder |
| Iterativ | O(n) | O(1) | < 0.001 sekunder |

Memoisering gjør den rekursive versjonen like rask som den iterative!`
    },
    {
      id: 'it2-3-4-exercise-2',
      type: 'exercise' as const,
      title: 'Oppgave 2: Identifiser basetilfellet',
      content: `Se på denne rekursive funksjonen:

\`\`\`python
def mystisk(tekst):
    if len(tekst) <= 1:
        return tekst
    return mystisk(tekst[1:]) + tekst[0]
\`\`\`

Hva returnerer \`mystisk("hei")\`?`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva returnerer mystisk("hei")?',
      options: [
        { id: 'a', text: '"hei"', isCorrect: false },
        { id: 'b', text: '"ieh"', isCorrect: true },
        { id: 'c', text: '"ehi"', isCorrect: false },
        { id: 'd', text: '"hie"', isCorrect: false }
      ],
      hint: 'Funksjonen tar resten av strengen og legger til første tegn bakerst. Spor gjennom: mystisk("hei") = mystisk("ei") + "h".',
      solution: `**Riktig svar: b) "ieh"**

La oss spore gjennom:

\`\`\`
mystisk("hei")
= mystisk("ei") + "h"
= (mystisk("i") + "e") + "h"
= ("i" + "e") + "h"          <- Basetilfelle: len("i") <= 1
= "ie" + "h"
= "ieh"
\`\`\`

Funksjonen **reverserer** en streng rekursivt! Den tar første tegn, legger det bakerst, og kaller seg selv med resten.

**Generelt mønster:**
- mystisk("abc") = mystisk("bc") + "a" = mystisk("c") + "b" + "a" = "cba"
- mystisk("Python") = "nohtyP"`
    },
    {
      id: 'it2-3-4-ex-3',
      type: 'example' as const,
      title: 'Eksempel: Rekursiv liste-behandling',
      content: `Mange listeoperasjoner kan skrives rekursivt:

**Sum av liste:**

\`\`\`python
def rekursiv_sum(liste):
    """Beregner summen av en liste rekursivt"""
    # Basetilfelle: tom liste
    if len(liste) == 0:
        return 0

    # Rekursivt: første element + sum av resten
    return liste[0] + rekursiv_sum(liste[1:])

print(rekursiv_sum([1, 2, 3, 4, 5]))  # 15
\`\`\`

**Finn største element:**

\`\`\`python
def rekursiv_maks(liste):
    """Finner største element rekursivt"""
    # Basetilfelle: bare ett element
    if len(liste) == 1:
        return liste[0]

    # Rekursivt: sammenlign første med maks av resten
    maks_resten = rekursiv_maks(liste[1:])
    if liste[0] > maks_resten:
        return liste[0]
    else:
        return maks_resten

print(rekursiv_maks([3, 7, 2, 9, 4]))  # 9
\`\`\`

**Tell forekomster:**

\`\`\`python
def tell(liste, mål):
    """Teller forekomster av mål i liste, rekursivt"""
    if len(liste) == 0:
        return 0

    treff = 1 if liste[0] == mål else 0
    return treff + tell(liste[1:], mål)

print(tell([1, 2, 3, 2, 1, 2], 2))  # 3
\`\`\`

**Merk:** Disse rekursive versjonene er ikke mer effektive enn iterative versjoner. De bruker mer minne (kall-stakken) og \`liste[1:]\` lager en ny liste for hvert kall (O(n) ekstra).

**Når er rekursiv listebehandling nyttig?**
- For å lære rekursiv tenkning
- Når datastrukturen selv er rekursiv (f.eks. trestrukturer)
- I funksjonelle programmeringsspråk
- For problemer som naturlig deler seg i delproblemer`
    },
    {
      id: 'it2-3-4-exercise-3',
      type: 'exercise' as const,
      title: 'Oppgave 3: Skriv rekursiv funksjon',
      content: `Skriv en rekursiv funksjon \`potens(base, eksponent)\` som beregner base^eksponent uten å bruke \`**\`-operatoren eller \`pow()\`.

Hint:
- base^0 = 1 (basetilfelle)
- base^n = base * base^(n-1) (rekursivt tilfelle)`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Implementer potens-funksjonen rekursivt.',
      hint: 'Basetilfellet er eksponent == 0, som gir 1. Det rekursive tilfellet er base * potens(base, eksponent - 1).',
      solution: `**Løsning:**

\`\`\`python
def potens(base, eksponent):
    """
    Beregner base^eksponent rekursivt.
    Forutsetter eksponent >= 0.
    """
    # Basetilfelle
    if eksponent == 0:
        return 1

    # Rekursivt tilfelle
    return base * potens(base, eksponent - 1)

# Test
print(potens(2, 10))  # 1024
print(potens(3, 4))   # 81
print(potens(5, 0))   # 1
print(potens(7, 1))   # 7
\`\`\`

**Sporing av potens(2, 4):**
\`\`\`
potens(2, 4) = 2 * potens(2, 3)
             = 2 * (2 * potens(2, 2))
             = 2 * (2 * (2 * potens(2, 1)))
             = 2 * (2 * (2 * (2 * potens(2, 0))))
             = 2 * (2 * (2 * (2 * 1)))
             = 2 * (2 * (2 * 2))
             = 2 * (2 * 4)
             = 2 * 8
             = 16
\`\`\`

**Bonusversjon: Raskere med halvering (O(log n)):**

\`\`\`python
def potens_rask(base, eksponent):
    """Raskere versjon: O(log n) i stedet for O(n)"""
    if eksponent == 0:
        return 1
    if eksponent % 2 == 0:
        halvparten = potens_rask(base, eksponent // 2)
        return halvparten * halvparten
    else:
        return base * potens_rask(base, eksponent - 1)

print(potens_rask(2, 10))  # 1024
\`\`\`

Den raske versjonen bruker at x^10 = (x^5)^2, slik at vi bare trenger log2(n) rekursive kall i stedet for n.`
    },
    {
      id: 'it2-3-4-def-3',
      type: 'definition' as const,
      title: 'Rekursjon vs iterasjon',
      content: `**Alle rekursive løsninger kan skrives iterativt, og omvendt.** Valget avhenger av problemet og lesbarheten.

**Sammenligning:**

| Aspekt | Rekursjon | Iterasjon |
|--------|-----------|-----------|
| Kodestruktur | Funksjonen kaller seg selv | Bruker løkker |
| Lesbarhet | Elegant for rekursive problemer | Enklere for enkle løkker |
| Ytelse | Overhead for funksjonskall | Vanligvis raskere |
| Minne | O(n) for kall-stakk | O(1) vanligvis |
| Stack overflow | Risiko ved dyp rekursjon | Ingen risiko |
| Debugging | Kan være vanskelig å spore | Enklere å debugge |

**Når bruke rekursjon:**
- Problemer som naturlig deler seg i delproblemer (del-og-hersk)
- Trestrukturer og grafer
- Backtracking-algoritmer
- Når den rekursive koden er mye klarere enn den iterative

**Når bruke iterasjon:**
- Enkle gjentakelser (løkker)
- Når ytelse er kritisk
- Når rekursjonsdybden kan bli stor
- Lineære gjennomganger av data

**Huskeregel:** Bruk rekursjon når problemet er naturlig rekursivt. Bruk iterasjon når problemet er naturlig lineært.`
    },
    {
      id: 'it2-3-4-ex-4',
      type: 'example' as const,
      title: 'Eksempel: Rekursjon vs iterasjon i praksis',
      content: `La oss sammenligne rekursiv og iterativ løsning for noen vanlige problemer:

**Problem 1: Nedtelling**

\`\`\`python
# Rekursiv
def nedtelling_rek(n):
    if n <= 0:
        print("Start!")
        return
    print(n)
    nedtelling_rek(n - 1)

# Iterativ
def nedtelling_iter(n):
    for i in range(n, 0, -1):
        print(i)
    print("Start!")

# Begge gir: 5, 4, 3, 2, 1, Start!
\`\`\`

Her er den iterative versjonen klart enklere. Rekursjon gir ingen fordel.

**Problem 2: Katalogstruktur (trestruktur)**

\`\`\`python
import os

# Rekursiv - naturlig og elegant
def vis_filer_rek(mappe, innrykk=0):
    """Vis alle filer rekursivt"""
    for element in os.listdir(mappe):
        sti = os.path.join(mappe, element)
        print("  " * innrykk + element)
        if os.path.isdir(sti):
            vis_filer_rek(sti, innrykk + 1)

# Iterativ - mer komplisert med egen stakk
def vis_filer_iter(mappe):
    """Vis alle filer iterativt med eksplisitt stakk"""
    stakk = [(mappe, 0)]
    while stakk:
        nåværende, innrykk = stakk.pop()
        print("  " * innrykk + os.path.basename(nåværende))
        if os.path.isdir(nåværende):
            for element in reversed(os.listdir(nåværende)):
                stakk.append((os.path.join(nåværende, element), innrykk + 1))
\`\`\`

Her er den rekursive versjonen mye mer lesbar fordi filsystemer er en trestruktur.

**Problem 3: Omvendt streng**

\`\`\`python
# Rekursiv
def reverser_rek(s):
    if len(s) <= 1:
        return s
    return reverser_rek(s[1:]) + s[0]

# Iterativ
def reverser_iter(s):
    return s[::-1]

# Pythonic
"hei"[::-1]  # "ieh"
\`\`\`

Her er Python-slicing klart enklest. Rekursjon er unødvendig.

**Konklusjon:** Velg den tilnærmingen som gir mest lesbar kode for det aktuelle problemet.`
    },
    {
      id: 'it2-3-4-exercise-4',
      type: 'exercise' as const,
      title: 'Oppgave 4: Rekursjon eller iterasjon?',
      content: `For hvert problem, avgjør om rekursjon eller iterasjon er mest naturlig:

A) Beregne gjennomsnittet av en liste med tall
B) Søke gjennom en trestruktur (f.eks. filsystem)
C) Skrive ut tallene fra 1 til n
D) Merge sort`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilke problemer er naturlig rekursive?',
      options: [
        { id: 'a', text: 'Alle er best løst med rekursjon', isCorrect: false },
        { id: 'b', text: 'Bare B og D', isCorrect: true },
        { id: 'c', text: 'Bare A og C', isCorrect: false },
        { id: 'd', text: 'Bare D', isCorrect: false }
      ],
      hint: 'Trestrukturer og del-og-hersk-algoritmer er naturlig rekursive.',
      solution: `**Riktig svar: b) Bare B og D**

**A) Gjennomsnitt av liste: ITERASJON**
- Lineær gjennomgang: summer alle tall, del på antall
- Rekursjon gir ingen fordel, bare ekstra overhead

**B) Søke i trestruktur: REKURSJON**
- Trær er rekursive strukturer (hver node har undertrær)
- Rekursjon følger naturlig strukturen
- Iterativ versjon krever eksplisitt stakk

**C) Skrive ut 1 til n: ITERASJON**
- Enkel lineær gjennomgang
- \`for i in range(1, n+1)\` er klart best
- Rekursjon er unødvendig komplisert

**D) Merge sort: REKURSJON**
- Del-og-hersk: del listen, sorter halvdelene, slå sammen
- Rekursjon uttrykker algoritmen naturlig
- Iterativ merge sort finnes, men er mer komplisert å implementere`
    },
    {
      id: 'it2-3-4-ex-5',
      type: 'example' as const,
      title: 'Eksempel: Stack overflow og rekursjonsgrenser',
      content: `**Hva er stack overflow?**

Når en rekursiv funksjon kaller seg selv for mange ganger, fylles kall-stakken opp og programmet krasjer.

\`\`\`python
# Dette vil krasje!
def evig_rekursjon(n):
    return evig_rekursjon(n + 1)

# RecursionError: maximum recursion depth exceeded
\`\`\`

**Pythons rekursjonsgrense:**

\`\`\`python
import sys

# Se gjeldende grense
print(sys.getrecursionlimit())  # 1000

# Endre grensen (forsiktig!)
sys.setrecursionlimit(5000)
\`\`\`

**Eksempel: Fakultet med dyp rekursjon**

\`\`\`python
def fakultet(n):
    if n <= 1:
        return 1
    return n * fakultet(n - 1)

# Fungerer
print(fakultet(500))   # Stort tall, men OK

# Krasjer!
# print(fakultet(1500))  # RecursionError
\`\`\`

**Løsninger for å unngå stack overflow:**

**1. Skriv om til iterasjon:**
\`\`\`python
def fakultet_iterativ(n):
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

print(fakultet_iterativ(10000))  # Ingen problem!
\`\`\`

**2. Bruk halerekursjon-optimalisering (ikke i Python):**
\`\`\`python
# Python optimaliserer IKKE halerekursjon, men konseptet:
def fakultet_hale(n, akkumulator=1):
    if n <= 1:
        return akkumulator
    return fakultet_hale(n - 1, n * akkumulator)
# Siste kall er det rekursive kallet - ingen ventende operasjoner
# Noen språk (Scheme, Haskell) optimaliserer dette til en løkke
\`\`\`

**3. Bruk memoisering for å redusere dybden:**
\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# Bygger opp cache gradvis
for i in range(0, 2000, 100):
    fib(i)
print(fib(1999))  # Fungerer fordi cache reduserer dybden
\`\`\`

**Huskeregel:** Hvis rekursjonsdybden kan bli over ~500, vurder iterativ løsning.`
    },
    {
      id: 'it2-3-4-exercise-5',
      type: 'exercise' as const,
      title: 'Oppgave 5: Finn feilen',
      content: `Denne rekursive funksjonen skal beregne summen av sifrene i et tall, men den har en feil. Hva er feilen?

\`\`\`python
def siffer_sum(n):
    if n == 0:
        return 0
    return n % 10 + siffer_sum(n / 10)
\`\`\``,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva er feilen i funksjonen?',
      options: [
        { id: 'a', text: 'Basetilfellet er feil', isCorrect: false },
        { id: 'b', text: 'Skal bruke heltallsdivisjon (//)', isCorrect: true },
        { id: 'c', text: 'Formelen for å hente siste siffer er feil', isCorrect: false },
        { id: 'd', text: 'Funksjonen mangler return', isCorrect: false }
      ],
      hint: 'Hva skjer med n / 10 vs n // 10 i Python?',
      solution: `**Riktig svar: b) Skal bruke heltallsdivisjon (//) i stedet for vanlig divisjon (/)**

**Problemet:**
- \`n / 10\` gir desimaltall (float): 123 / 10 = 12.3
- \`n // 10\` gir heltall (int): 123 // 10 = 12
- Med vanlig divisjon blir n aldri nøyaktig 0, og funksjonen krasjer

**Feil versjon:**
\`\`\`
siffer_sum(123)
= 3 + siffer_sum(12.3)      # 123 / 10 = 12.3
= 3 + 3 + siffer_sum(1.23)  # 12.3 / 10 = 1.23
= 3 + 3 + 3 + siffer_sum(0.123)
= ...  # Aldri 0, krasjer!
\`\`\`

**Riktig versjon:**
\`\`\`python
def siffer_sum(n):
    if n == 0:
        return 0
    return n % 10 + siffer_sum(n // 10)  # // i stedet for /

print(siffer_sum(123))  # 6 (1 + 2 + 3)
print(siffer_sum(9876)) # 30 (9 + 8 + 7 + 6)
\`\`\``
    },
    {
      id: 'it2-3-4-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `## Oppsummering

**Rekursjon er en teknikk der en funksjon kaller seg selv.**

**To nødvendige deler:**
1. **Basetilfelle** - stopper rekursjonen
2. **Rekursivt tilfelle** - forenkler problemet og kaller seg selv

**Klassiske rekursive problemer:**
- Fakultet: n! = n * (n-1)!
- Fibonacci: F(n) = F(n-1) + F(n-2)
- Tretraversering
- Merge sort (del-og-hersk)
- Binærsøk

**Rekursjon vs iterasjon:**

| Bruk rekursjon | Bruk iterasjon |
|----------------|----------------|
| Trestrukturer | Lineære gjennomganger |
| Del-og-hersk | Enkle tellere/løkker |
| Backtracking | Når ytelse er kritisk |
| Naturlig rekursive definisjoner | Når rekursjonsdybden er stor |

**Viktige konsepter:**
- **Stack overflow**: Oppstår når rekursjonen er for dyp
- **Memoisering**: Cache resultater for å unngå dobbeltarbeid
- **Halerekursjon**: Siste operasjon er det rekursive kallet (ikke optimalisert i Python)

**Praktiske tips:**
1. Alltid definer basetilfelle(r) først
2. Sørg for at hvert kall beveger seg mot basetilfellet
3. Vurder iterasjon hvis rekursjonsdybden kan bli > 500
4. Bruk memoisering for overlappende delproblemer (som Fibonacci)
5. Test med små input og spor gjennom kall-stakken`
    },
    {
      id: 'it2-3-4-samleoppgaver',
      type: 'text' as const,
      title: 'Samleoppgaver',
      content: '## Samleoppgaver\n\nOppgaver som kombinerer rekursiv tenkning med andre konsepter:'
    },
    {
      id: 'it2-3-4-exercise-6',
      type: 'exercise' as const,
      title: 'Samleoppgave 1: Rekursiv palindrom-sjekk',
      content: `Et palindrom er et ord som leses likt begge veier (f.eks. "ana", "racecar").

Skriv en rekursiv funksjon som sjekker om en streng er et palindrom.

Hint: Et ord er et palindrom hvis:
- Første og siste bokstav er like
- Resten av ordet (uten første og siste) også er et palindrom`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'Implementer er_palindrom(tekst) rekursivt.',
      hint: 'Basetilfelle: tom streng eller streng med 1 tegn er alltid palindrom. Rekursivt: sjekk første == siste, og kall deg selv med tekst[1:-1].',
      solution: `**Løsning:**

\`\`\`python
def er_palindrom(tekst):
    """Sjekker om tekst er palindrom, rekursivt"""
    # Fjern mellomrom og gjør til lowercase
    tekst = tekst.lower().replace(" ", "")

    # Basetilfelle: 0 eller 1 tegn
    if len(tekst) <= 1:
        return True

    # Rekursivt: sjekk ytterste tegn, så resten
    if tekst[0] != tekst[-1]:
        return False

    return er_palindrom(tekst[1:-1])

# Test
print(er_palindrom("anna"))       # True
print(er_palindrom("racecar"))    # True
print(er_palindrom("Agnes i senga"))  # True
print(er_palindrom("python"))     # False
\`\`\`

**Sporing av er_palindrom("anna"):**
\`\`\`
er_palindrom("anna")
  "a" == "a" -> True
  er_palindrom("nn")
    "n" == "n" -> True
    er_palindrom("")
      len("") <= 1 -> True  (basetilfelle)
    -> True
  -> True
-> True
\`\`\``
    },
    {
      id: 'it2-3-4-exercise-7',
      type: 'exercise' as const,
      title: 'Samleoppgave 2: Tårnet i Hanoi',
      content: `Tårnet i Hanoi er et klassisk rekursivt problem:
- Du har 3 pinner (A, B, C) og n disker i ulik størrelse
- Alle disker starter på pinne A, sortert med størst nederst
- Mål: Flytt alle disker til pinne C
- Regler: Flytt bare én disk om gangen, aldri en større disk på en mindre

Hvor mange trekk kreves for å flytte n disker?`,
      difficulty: 'hard' as const,
      exerciseType: 'multiple-choice' as const,
      points: 3,
      question: 'Hvor mange trekk kreves for n disker?',
      options: [
        { id: 'a', text: 'n trekk', isCorrect: false },
        { id: 'b', text: 'n^2 trekk', isCorrect: false },
        { id: 'c', text: '2^n - 1 trekk', isCorrect: true },
        { id: 'd', text: 'n! trekk', isCorrect: false }
      ],
      hint: 'For å flytte n disker: flytt n-1 disker til hjelpepinne, flytt største disk til mål, flytt n-1 disker fra hjelpepinne til mål.',
      solution: `**Riktig svar: c) 2^n - 1 trekk**

**Rekursiv algoritme:**

\`\`\`python
def hanoi(n, fra_pinne, til_pinne, hjelpe_pinne):
    """Løser Tårnet i Hanoi rekursivt"""
    if n == 1:
        print(f"Flytt disk 1 fra {fra_pinne} til {til_pinne}")
        return 1

    # Flytt n-1 disker fra start til hjelper
    trekk = hanoi(n - 1, fra_pinne, hjelpe_pinne, til_pinne)

    # Flytt største disk til mål
    print(f"Flytt disk {n} fra {fra_pinne} til {til_pinne}")
    trekk += 1

    # Flytt n-1 disker fra hjelper til mål
    trekk += hanoi(n - 1, hjelpe_pinne, til_pinne, fra_pinne)

    return trekk

trekk = hanoi(3, "A", "C", "B")
print(f"Totalt {trekk} trekk")  # 7 trekk
\`\`\`

**Hvorfor 2^n - 1?**
- T(1) = 1
- T(n) = 2 * T(n-1) + 1
- T(n) = 2^n - 1

**Eksempler:**
- 3 disker: 2^3 - 1 = 7 trekk
- 5 disker: 2^5 - 1 = 31 trekk
- 10 disker: 2^10 - 1 = 1023 trekk`
    }
  ],
  exercises: [],
  keyTerms: [
    'Rekursjon',
    'Basetilfelle',
    'Rekursivt tilfelle',
    'Kall-stakk',
    'Stack overflow',
    'Memoisering',
    'Halerekursjon',
    'Del-og-hersk'
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-3-3',
  nextChapter: 'it-2-3-5'
};

// ============================================================================
// CHAPTER 3.5: Databehandling og filhåndtering
// ============================================================================

export const CHAPTER_IT_2_3_5: TextbookChapter = {
  id: 'it-2-3-5',
  courseId: 'it-2',
  title: 'Databehandling og filhåndtering',
  description: 'Lær å lese og skrive filer, jobbe med CSV og JSON, rengjøre data og bruke pandas for dataanalyse. Praktiske ferdigheter for å behandle data fra den virkelige verden.',
  sections: [
    {
      id: 'it2-3-5-intro',
      type: 'text' as const,
      title: 'Introduksjon',
      content: `# Databehandling og filhåndtering

I den virkelige verden ligger data sjelden ferdig i en Python-liste. Data lagres i filer, databaser og på nettet. For å bruke disse dataene må du kunne lese dem inn, behandle dem og ofte lagre resultatene tilbake.

I dette kapittelet skal du lære:
- Lese og skrive tekstfiler i Python
- Jobbe med CSV-filer (kommaseparerte verdier)
- Lese og skrive JSON-data
- Grunnleggende datarensing
- Introduksjon til pandas for dataanalyse

Disse ferdighetene er essensielle for alle som jobber med data, enten det er vitenskapelig forskning, webutvikling eller dataanalyse.`
    },
    {
      id: 'it2-3-5-def-1',
      type: 'definition' as const,
      title: 'Filhåndtering i Python',
      content: `**Filhåndtering**: Prosessen med å lese fra og skrive til filer på datamaskinen.

**Grunnleggende konsepter:**

**Åpne en fil:**
\`\`\`python
fil = open("filnavn.txt", modus)
\`\`\`

**Moduser:**

| Modus | Beskrivelse |
|-------|-------------|
| \`"r"\` | Lese (read) - standard |
| \`"w"\` | Skrive (write) - overskriver filen |
| \`"a"\` | Legge til (append) - legger til på slutten |
| \`"x"\` | Opprett ny fil - feil hvis filen finnes |

**Viktig: Bruk \`with\`-blokk!**
\`\`\`python
# Anbefalt: with lukker filen automatisk
with open("data.txt", "r") as fil:
    innhold = fil.read()
# Filen er nå lukket automatisk

# IKKE anbefalt: Må huske å lukke selv
fil = open("data.txt", "r")
innhold = fil.read()
fil.close()  # Lett å glemme!
\`\`\`

**Tegnsett (encoding):**
For norske tegn (æ, ø, å), bruk UTF-8:
\`\`\`python
with open("norsk.txt", "r", encoding="utf-8") as fil:
    innhold = fil.read()
\`\`\``
    },
    {
      id: 'it2-3-5-ex-1',
      type: 'example' as const,
      title: 'Eksempel: Lese og skrive tekstfiler',
      content: `**Skrive til fil:**

\`\`\`python
# Skrive tekst til fil
with open("dagbok.txt", "w", encoding="utf-8") as fil:
    fil.write("Dag 1: Lærte om filhåndtering\\n")
    fil.write("Dag 2: Lærte om CSV-filer\\n")
    fil.write("Dag 3: Lærte om JSON\\n")

# Legge til mer tekst
with open("dagbok.txt", "a", encoding="utf-8") as fil:
    fil.write("Dag 4: Lærte om pandas\\n")
\`\`\`

**Lese fra fil:**

\`\`\`python
# Les hele filen som én streng
with open("dagbok.txt", "r", encoding="utf-8") as fil:
    innhold = fil.read()
    print(innhold)

# Les linje for linje
with open("dagbok.txt", "r", encoding="utf-8") as fil:
    for linje in fil:
        print(linje.strip())  # strip() fjerner \\n

# Les alle linjer til en liste
with open("dagbok.txt", "r", encoding="utf-8") as fil:
    linjer = fil.readlines()
    print(linjer)
    # ['Dag 1: ...\\n', 'Dag 2: ...\\n', ...]
\`\`\`

**Praktisk eksempel: Behandle en loggfil**

\`\`\`python
def analyser_logg(filnavn):
    """Analyserer en loggfil og teller feilmeldinger"""
    feil_teller = 0
    advarsel_teller = 0

    with open(filnavn, "r", encoding="utf-8") as fil:
        for linje in fil:
            if "ERROR" in linje:
                feil_teller += 1
            elif "WARNING" in linje:
                advarsel_teller += 1

    print(f"Feil: {feil_teller}")
    print(f"Advarsler: {advarsel_teller}")

# Lagre rapport
def lagre_rapport(filnavn, data):
    """Lagrer en rapport til fil"""
    with open(filnavn, "w", encoding="utf-8") as fil:
        fil.write("=== Rapport ===\\n\\n")
        for nøkkel, verdi in data.items():
            fil.write(f"{nøkkel}: {verdi}\\n")
    print(f"Rapport lagret til {filnavn}")

rapport = {"Antall brukere": 150, "Aktive i dag": 42, "Nye i uka": 12}
lagre_rapport("rapport.txt", rapport)
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-1',
      type: 'exercise' as const,
      title: 'Oppgave 1: Filhåndtering',
      content: `Hva skriver denne koden til filen "tall.txt"?

\`\`\`python
with open("tall.txt", "w") as fil:
    for i in range(1, 4):
        fil.write(str(i * 10) + "\\n")

with open("tall.txt", "a") as fil:
    fil.write("Ferdig!")
\`\`\``,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva inneholder filen "tall.txt" etter at koden har kjørt?',
      options: [
        { id: 'a', text: '10\\n20\\n30\\nFerdig!', isCorrect: true },
        { id: 'b', text: 'Ferdig!', isCorrect: false },
        { id: 'c', text: '10 20 30 Ferdig!', isCorrect: false },
        { id: 'd', text: '1\\n2\\n3\\nFerdig!', isCorrect: false }
      ],
      hint: 'Første blokk bruker "w" (skrive), andre bruker "a" (legge til). range(1, 4) gir 1, 2, 3.',
      solution: `**Riktig svar: a) 10\\n20\\n30\\nFerdig!**

**Steg 1: Skriving ("w"-modus)**
- i=1: skriver "10\\n"
- i=2: skriver "20\\n"
- i=3: skriver "30\\n"

**Steg 2: Legge til ("a"-modus)**
- Legger til "Ferdig!" på slutten

**Filens innhold:**
\`\`\`
10
20
30
Ferdig!
\`\`\`

Merk: "w"-modus overskriver filen, mens "a"-modus legger til på slutten uten å slette eksisterende innhold.`
    },
    {
      id: 'it2-3-5-def-2',
      type: 'definition' as const,
      title: 'CSV-filer (Comma Separated Values)',
      content: `**CSV**: Et tekstbasert filformat der data er organisert i rader og kolonner, separert med komma (eller semikolon).

**Eksempel på CSV-fil (elever.csv):**
\`\`\`
navn,alder,karakter
Anna,17,5
Bob,18,4
Charlie,17,6
\`\`\`

**Hvorfor CSV?**
- Enkelt og lesbart format
- Kan åpnes i Excel, Google Sheets, etc.
- Lett å eksportere fra databaser
- Standard format for datautveksling

**Pythons csv-modul:**
\`\`\`python
import csv
\`\`\`

**Viktige funksjoner:**
- \`csv.reader()\` - Leser CSV som lister
- \`csv.DictReader()\` - Leser CSV som ordbøker
- \`csv.writer()\` - Skriver lister til CSV
- \`csv.DictWriter()\` - Skriver ordbøker til CSV

**Vanlige problemer:**
- Norske filer bruker ofte semikolon (;) som separator
- Tegnsett: Bruk UTF-8 for norske tegn
- Desimaltall: Norsk format bruker komma (3,14) vs punkt (3.14)`
    },
    {
      id: 'it2-3-5-ex-2',
      type: 'example' as const,
      title: 'Eksempel: Jobbe med CSV-filer',
      content: `**Lese CSV med csv.reader:**

\`\`\`python
import csv

with open("elever.csv", "r", encoding="utf-8") as fil:
    leser = csv.reader(fil)
    overskrift = next(leser)  # Hopp over overskriftsraden
    print(f"Kolonner: {overskrift}")

    for rad in leser:
        navn, alder, karakter = rad
        print(f"{navn} er {alder} år og har karakter {karakter}")
\`\`\`

**Lese CSV med DictReader (anbefalt):**

\`\`\`python
import csv

with open("elever.csv", "r", encoding="utf-8") as fil:
    leser = csv.DictReader(fil)

    for elev in leser:
        print(f"{elev['navn']}: karakter {elev['karakter']}")
\`\`\`

DictReader bruker første rad som nøkler, så du kan referere til kolonner med navn.

**Skrive CSV:**

\`\`\`python
import csv

elever = [
    {"navn": "Diana", "alder": 18, "karakter": 5},
    {"navn": "Erik", "alder": 17, "karakter": 4},
    {"navn": "Fiona", "alder": 18, "karakter": 6}
]

with open("nye_elever.csv", "w", encoding="utf-8", newline="") as fil:
    felter = ["navn", "alder", "karakter"]
    skriver = csv.DictWriter(fil, fieldnames=felter)

    skriver.writeheader()  # Skriv overskriftsrad
    for elev in elever:
        skriver.writerow(elev)
\`\`\`

**Norsk CSV med semikolon:**

\`\`\`python
import csv

# Les norsk CSV med semikolon
with open("norsk_data.csv", "r", encoding="utf-8") as fil:
    leser = csv.reader(fil, delimiter=";")
    for rad in leser:
        print(rad)
\`\`\`

**Praktisk eksempel: Beregne gjennomsnitt fra CSV**

\`\`\`python
import csv

def beregn_snitt(filnavn, kolonne):
    """Beregner gjennomsnittet av en numerisk kolonne i CSV"""
    verdier = []

    with open(filnavn, "r", encoding="utf-8") as fil:
        leser = csv.DictReader(fil)
        for rad in leser:
            verdier.append(float(rad[kolonne]))

    snitt = sum(verdier) / len(verdier)
    return round(snitt, 2)

snitt_karakter = beregn_snitt("elever.csv", "karakter")
print(f"Gjennomsnittskarakter: {snitt_karakter}")
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-2',
      type: 'exercise' as const,
      title: 'Oppgave 2: Lese CSV-fil',
      content: `Du har en CSV-fil "temperaturer.csv" med dette innholdet:

\`\`\`
by,temperatur
Oslo,5.2
Bergen,8.1
Tromsø,-3.4
Trondheim,4.7
\`\`\`

Skriv kode som leser filen og finner byen med høyest temperatur.`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 3,
      question: 'Skriv kode som finner byen med høyest temperatur fra CSV-filen.',
      hint: 'Bruk csv.DictReader, konverter temperatur til float, og hold styr på maksimum.',
      solution: `**Løsning:**

\`\`\`python
import csv

def finn_varmeste_by(filnavn):
    """Finner byen med høyest temperatur fra CSV"""
    varmeste_by = None
    høyeste_temp = float("-inf")

    with open(filnavn, "r", encoding="utf-8") as fil:
        leser = csv.DictReader(fil)

        for rad in leser:
            by = rad["by"]
            temp = float(rad["temperatur"])

            if temp > høyeste_temp:
                høyeste_temp = temp
                varmeste_by = by

    return varmeste_by, høyeste_temp

by, temp = finn_varmeste_by("temperaturer.csv")
print(f"Varmeste by: {by} ({temp}°C)")
# Varmeste by: Bergen (8.1°C)
\`\`\`

**Alternativ med max():**
\`\`\`python
import csv

with open("temperaturer.csv", "r", encoding="utf-8") as fil:
    leser = csv.DictReader(fil)
    rader = list(leser)

varmeste = max(rader, key=lambda r: float(r["temperatur"]))
print(f"{varmeste['by']}: {varmeste['temperatur']}°C")
\`\`\``
    },
    {
      id: 'it2-3-5-def-3',
      type: 'definition' as const,
      title: 'JSON (JavaScript Object Notation)',
      content: `**JSON**: Et tekstbasert format for å lagre og utveksle strukturerte data. Brukes mye i web-APIer og konfigurasjoner.

**JSON-format:**
\`\`\`json
{
    "navn": "Anna",
    "alder": 17,
    "fag": ["matte", "norsk", "engelsk"],
    "aktiv": true,
    "adresse": {
        "gate": "Storgata 1",
        "by": "Oslo"
    }
}
\`\`\`

**JSON vs Python:**

| JSON | Python |
|------|--------|
| object \`{}\` | dict |
| array \`[]\` | list |
| string \`""\` | str |
| number | int/float |
| true/false | True/False |
| null | None |

**Pythons json-modul:**
\`\`\`python
import json
\`\`\`

**Viktige funksjoner:**
- \`json.load(fil)\` - Les JSON fra fil
- \`json.loads(streng)\` - Les JSON fra streng
- \`json.dump(data, fil)\` - Skriv JSON til fil
- \`json.dumps(data)\` - Konverter til JSON-streng

**Fordeler med JSON:**
- Lesbart for mennesker
- Støtter nestede strukturer
- Standard format for web-APIer
- Støttes av nesten alle programmeringsspråk`
    },
    {
      id: 'it2-3-5-ex-3',
      type: 'example' as const,
      title: 'Eksempel: Jobbe med JSON',
      content: `**Skrive JSON til fil:**

\`\`\`python
import json

elever = [
    {
        "navn": "Anna",
        "alder": 17,
        "fag": ["matte", "norsk", "IT"],
        "karakterer": {"matte": 5, "norsk": 4, "IT": 6}
    },
    {
        "navn": "Bob",
        "alder": 18,
        "fag": ["matte", "engelsk"],
        "karakterer": {"matte": 4, "engelsk": 5}
    }
]

# Skriv til fil
with open("elever.json", "w", encoding="utf-8") as fil:
    json.dump(elever, fil, indent=2, ensure_ascii=False)
    # indent=2 gjør filen lesbar
    # ensure_ascii=False bevarer norske tegn
\`\`\`

**Lese JSON fra fil:**

\`\`\`python
import json

with open("elever.json", "r", encoding="utf-8") as fil:
    elever = json.load(fil)

for elev in elever:
    print(f"{elev['navn']} tar {len(elev['fag'])} fag")
    for fag, karakter in elev['karakterer'].items():
        print(f"  {fag}: {karakter}")
\`\`\`

**JSON fra streng (f.eks. fra web-API):**

\`\`\`python
import json

json_streng = '{"by": "Oslo", "temperatur": 5.2, "nedbør": true}'
data = json.loads(json_streng)
print(data["by"])          # Oslo
print(data["temperatur"])  # 5.2

# Tilbake til streng
ny_streng = json.dumps(data, ensure_ascii=False)
print(ny_streng)
\`\`\`

**Praktisk eksempel: Konfigurasjonsfil**

\`\`\`python
import json

def les_konfig(filnavn="config.json"):
    """Leser konfigurasjon fra JSON-fil"""
    try:
        with open(filnavn, "r", encoding="utf-8") as fil:
            return json.load(fil)
    except FileNotFoundError:
        # Returner standardverdier
        return {"tema": "lys", "språk": "nb", "font_størrelse": 14}

def lagre_konfig(konfig, filnavn="config.json"):
    """Lagrer konfigurasjon til JSON-fil"""
    with open(filnavn, "w", encoding="utf-8") as fil:
        json.dump(konfig, fil, indent=2, ensure_ascii=False)

# Bruk
konfig = les_konfig()
konfig["tema"] = "mørk"
lagre_konfig(konfig)
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-3',
      type: 'exercise' as const,
      title: 'Oppgave 3: CSV vs JSON',
      content: `Hvilken påstand om CSV og JSON er riktig?`,
      difficulty: 'easy' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilken påstand er riktig?',
      options: [
        { id: 'a', text: 'CSV støtter nestede strukturer, JSON gjør det ikke', isCorrect: false },
        { id: 'b', text: 'JSON støtter nestede strukturer, CSV gjør det ikke', isCorrect: true },
        { id: 'c', text: 'Begge støtter nestede strukturer', isCorrect: false },
        { id: 'd', text: 'Ingen av dem støtter nestede strukturer', isCorrect: false }
      ],
      hint: 'Tenk på strukturen til CSV (rader og kolonner) versus JSON (objekter med nøkler og verdier).',
      solution: `**Riktig svar: b) JSON støtter nestede strukturer, CSV gjør det ikke**

**CSV:**
- Flat struktur: rader og kolonner
- Kan IKKE ha nestede objekter eller lister i en celle
- Best for tabelldata (som regneark)

**JSON:**
- Støtter nesting: objekter i objekter, lister i objekter, osv.
- Kan representere komplekse datastrukturer
- Best for hierarkiske data og API-svar

**Eksempel:**
\`\`\`
CSV kan representere:
navn,alder,by
Anna,17,Oslo

JSON kan representere:
{
  "navn": "Anna",
  "alder": 17,
  "adresse": {
    "gate": "Storgata 1",
    "by": "Oslo"
  },
  "fag": ["matte", "norsk"]
}
\`\`\`

Adresse-objektet og fag-listen kan IKKE uttrykkes naturlig i CSV.`
    },
    {
      id: 'it2-3-5-def-4',
      type: 'definition' as const,
      title: 'Datarensing (Data Cleaning)',
      content: `**Datarensing**: Prosessen med å oppdage og korrigere feil, mangler og inkonsistenser i data.

**Vanlige problemer i reelle data:**

| Problem | Eksempel | Løsning |
|---------|----------|---------|
| Manglende verdier | tom celle, "N/A" | Fjerne rad eller fylle inn |
| Feil datatype | "atten" i stedet for 18 | Konvertere eller fjerne |
| Duplikater | Samme rad to ganger | Fjerne duplikater |
| Inkonsistent format | "Oslo", "oslo", "OSLO" | Standardisere |
| Whitespace | " Oslo " | strip() |
| Uteliggere | Alder: 999 | Vurdere og eventuelt fjerne |

**Steg i datarensing:**
1. **Inspiser**: Se på dataene, finn problemer
2. **Valider**: Sjekk datatyper, verdier og formater
3. **Rens**: Fiks problemer systematisk
4. **Verifiser**: Sjekk at rensingen var vellykket

**Tommelregel:** Du bruker ofte 80% av tiden på datarensing og bare 20% på selve analysen!`
    },
    {
      id: 'it2-3-5-ex-4',
      type: 'example' as const,
      title: 'Eksempel: Datarensing i praksis',
      content: `La oss rense et datasett med elever som har diverse problemer:

\`\`\`python
import csv

def les_og_rens(filnavn):
    """Leser CSV og renser dataene"""
    renset_data = []
    forkastet = 0

    with open(filnavn, "r", encoding="utf-8") as fil:
        leser = csv.DictReader(fil)

        for rad in leser:
            # 1. Fjern whitespace fra alle verdier
            renset = {k: v.strip() for k, v in rad.items()}

            # 2. Standardiser navn (stor forbokstav)
            renset["navn"] = renset["navn"].title()

            # 3. Sjekk manglende verdier
            if not renset["navn"] or not renset["alder"]:
                forkastet += 1
                continue

            # 4. Konverter og valider alder
            try:
                alder = int(renset["alder"])
                if alder < 15 or alder > 20:
                    forkastet += 1
                    continue
                renset["alder"] = alder
            except ValueError:
                forkastet += 1
                continue

            # 5. Konverter og valider karakter
            try:
                karakter = int(renset["karakter"])
                if karakter < 1 or karakter > 6:
                    forkastet += 1
                    continue
                renset["karakter"] = karakter
            except ValueError:
                renset["karakter"] = None  # Manglende karakter OK

            renset_data.append(renset)

    print(f"Beholdt {len(renset_data)} rader, forkastet {forkastet}")
    return renset_data

# Fjerne duplikater
def fjern_duplikater(data, nøkkel="navn"):
    """Fjerner duplikater basert på en nøkkel"""
    sett = set()
    unik = []
    for rad in data:
        if rad[nøkkel] not in sett:
            sett.add(rad[nøkkel])
            unik.append(rad)
    return unik
\`\`\`

**Vanlige rensefunksjoner:**

\`\`\`python
# Standardisere tekst
def rens_tekst(tekst):
    """Renser og standardiserer tekst"""
    tekst = tekst.strip()       # Fjern whitespace
    tekst = tekst.lower()       # Til lowercase
    tekst = " ".join(tekst.split())  # Fjern ekstra mellomrom
    return tekst

# Håndtere manglende verdier
def fyll_manglende(data, kolonne, standardverdi):
    """Fyller inn manglende verdier"""
    for rad in data:
        if rad[kolonne] is None or rad[kolonne] == "":
            rad[kolonne] = standardverdi
    return data

# Konvertere datoformat
def standardiser_dato(dato_tekst):
    """Konverterer ulike datoformater til standard"""
    from datetime import datetime
    formater = ["%d.%m.%Y", "%d/%m/%Y", "%Y-%m-%d"]
    for fmt in formater:
        try:
            return datetime.strptime(dato_tekst, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return None
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-4',
      type: 'exercise' as const,
      title: 'Oppgave 4: Datarensing',
      content: `Du har denne listen med data:

\`\`\`python
data = [
    {"navn": "  Anna ", "alder": "17", "karakter": "5"},
    {"navn": "bob", "alder": "atten", "karakter": "4"},
    {"navn": "Charlie", "alder": "18", "karakter": ""},
    {"navn": "Anna", "alder": "17", "karakter": "5"},
    {"navn": "Diana", "alder": "200", "karakter": "3"}
]
\`\`\`

Hvilke rader bør forkastes og hvorfor?`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hvilke rader har problemer som krever forkasting?',
      options: [
        { id: 'a', text: 'Rad 2 og 5 (ugyldig alder)', isCorrect: true },
        { id: 'b', text: 'Rad 1, 2, og 4 (whitespace, format, duplikat)', isCorrect: false },
        { id: 'c', text: 'Bare rad 2 (tekst som alder)', isCorrect: false },
        { id: 'd', text: 'Rad 2, 3, og 5', isCorrect: false }
      ],
      hint: 'Rad 1 kan fikses med strip() og title(). Rad 3 har tom karakter men er ellers ok. Rad 4 er duplikat (kan fjernes separat).',
      solution: `**Riktig svar: a) Rad 2 og 5 (ugyldig alder)**

**Analyse av hver rad:**

**Rad 1: "  Anna ", "17", "5"**
- Problem: Ekstra whitespace i navn
- Løsning: strip() -> "Anna"
- Beholdes etter rensing

**Rad 2: "bob", "atten", "4"**
- Problem: "atten" kan ikke konverteres til int
- Forkastes - ugyldig alder

**Rad 3: "Charlie", "18", ""**
- Problem: Tom karakter
- Løsning: Settes til None (manglende verdi er OK)
- Beholdes

**Rad 4: "Anna", "17", "5"**
- Problem: Duplikat av rad 1 (etter rensing)
- Kan fjernes i duplikatsjekk, men er ikke ugyldig
- Beholdes i rensing, fjernes i deduplisering

**Rad 5: "Diana", "200", "3"**
- Problem: Alder 200 er urimelig (uteligger)
- Forkastes - ugyldig alder`
    },
    {
      id: 'it2-3-5-def-5',
      type: 'definition' as const,
      title: 'Introduksjon til pandas',
      content: `**pandas**: Et kraftig Python-bibliotek for dataanalyse og manipulasjon. Det er standard verktøyet for å jobbe med strukturerte data i Python.

**Hovedkonsepter:**

**DataFrame**: En tabell med rader og kolonner (som et regneark)
\`\`\`python
import pandas as pd

df = pd.DataFrame({
    "navn": ["Anna", "Bob", "Charlie"],
    "alder": [17, 18, 17],
    "karakter": [5, 4, 6]
})
\`\`\`

**Series**: En enkelt kolonne (som en liste med indeks)
\`\`\`python
alder = df["alder"]  # Series
\`\`\`

**Hvorfor pandas?**
- Raskere enn løkker for store datasett
- Innebygde funksjoner for datarensing
- Enkel fillesing (CSV, JSON, Excel, etc.)
- Kraftig filtrering og gruppering
- Statistiske funksjoner innebygd

**Installasjon:**
\`\`\`
pip install pandas
\`\`\`

**Import-konvensjon:**
\`\`\`python
import pandas as pd
\`\`\``
    },
    {
      id: 'it2-3-5-ex-5',
      type: 'example' as const,
      title: 'Eksempel: Grunnleggende pandas',
      content: `**Lese data:**

\`\`\`python
import pandas as pd

# Les fra CSV
df = pd.read_csv("elever.csv", encoding="utf-8")

# Les fra JSON
df = pd.read_json("elever.json", encoding="utf-8")

# Les norsk CSV med semikolon
df = pd.read_csv("norsk_data.csv", sep=";", encoding="utf-8")
\`\`\`

**Inspeksjon av data:**

\`\`\`python
import pandas as pd

df = pd.read_csv("elever.csv")

print(df.head())         # Første 5 rader
print(df.info())         # Kolonnetyper og manglende verdier
print(df.describe())     # Statistikk for numeriske kolonner
print(df.shape)          # (antall_rader, antall_kolonner)
print(df.columns.tolist()) # Kolonnenavn
\`\`\`

**Velge data:**

\`\`\`python
# Velg kolonne
navn = df["navn"]

# Velg flere kolonner
utvalg = df[["navn", "karakter"]]

# Filtrere rader
voksne = df[df["alder"] >= 18]
flinke = df[df["karakter"] >= 5]

# Kombinert filter
flinke_voksne = df[(df["alder"] >= 18) & (df["karakter"] >= 5)]
\`\`\`

**Beregninger:**

\`\`\`python
# Statistikk
print(df["karakter"].mean())     # Gjennomsnitt
print(df["karakter"].median())   # Median
print(df["karakter"].max())      # Maks
print(df["karakter"].min())      # Min
print(df["karakter"].std())      # Standardavvik

# Gruppering
per_alder = df.groupby("alder")["karakter"].mean()
print(per_alder)
\`\`\`

**Datarensing med pandas:**

\`\`\`python
# Fjern rader med manglende verdier
df_ren = df.dropna()

# Fyll inn manglende verdier
df["karakter"] = df["karakter"].fillna(df["karakter"].mean())

# Fjern duplikater
df_unik = df.drop_duplicates()

# Endre datatype
df["alder"] = df["alder"].astype(int)

# Standardiser tekst
df["navn"] = df["navn"].str.strip().str.title()
\`\`\`

**Lagre resultat:**

\`\`\`python
df.to_csv("resultat.csv", index=False, encoding="utf-8")
df.to_json("resultat.json", orient="records", force_ascii=False)
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-5',
      type: 'exercise' as const,
      title: 'Oppgave 5: Pandas-operasjoner',
      content: `Gitt denne DataFrame:

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    "navn": ["Anna", "Bob", "Charlie", "Diana", "Erik"],
    "fag": ["matte", "norsk", "matte", "norsk", "matte"],
    "karakter": [5, 4, 6, 5, 3]
})
\`\`\`

Hva gir \`df.groupby("fag")["karakter"].mean()\`?`,
      difficulty: 'medium' as const,
      exerciseType: 'multiple-choice' as const,
      points: 2,
      question: 'Hva er gjennomsnittskarakteren per fag?',
      options: [
        { id: 'a', text: 'matte: 4.67, norsk: 4.5', isCorrect: true },
        { id: 'b', text: 'matte: 14, norsk: 9', isCorrect: false },
        { id: 'c', text: 'matte: 5, norsk: 4', isCorrect: false },
        { id: 'd', text: 'matte: 6, norsk: 5', isCorrect: false }
      ],
      hint: 'Matte: (5+6+3)/3 = 14/3 = 4.67. Norsk: (4+5)/2 = 9/2 = 4.5.',
      solution: `**Riktig svar: a) matte: 4.67, norsk: 4.5**

**Steg for steg:**

1. **groupby("fag")** grupperer radene:
   - matte: Anna(5), Charlie(6), Erik(3)
   - norsk: Bob(4), Diana(5)

2. **["karakter"]** velger karakter-kolonnen for hver gruppe

3. **.mean()** beregner gjennomsnittet:
   - matte: (5 + 6 + 3) / 3 = 14/3 = 4.67
   - norsk: (4 + 5) / 2 = 9/2 = 4.50

**Resultatet:**
\`\`\`
fag
matte    4.666667
norsk    4.500000
Name: karakter, dtype: float64
\`\`\``
    },
    {
      id: 'it2-3-5-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `## Oppsummering

**Filhåndtering:**
- Bruk alltid \`with open(...) as fil:\` for automatisk lukking
- Moduser: "r" (les), "w" (skriv), "a" (legg til)
- Bruk \`encoding="utf-8"\` for norske tegn

**CSV-filer:**
- Tabellformat med rader og kolonner
- Bruk \`csv.DictReader()\` for enkel lesing
- Bruk \`csv.DictWriter()\` for skriving
- Husk \`delimiter=";"\` for norske filer

**JSON:**
- Støtter nestede strukturer (objekter og lister)
- \`json.load()\` / \`json.dump()\` for filer
- \`json.loads()\` / \`json.dumps()\` for strenger
- Bruk \`indent=2\` for lesbarhet

**Datarensing:**
- Fjern whitespace: \`strip()\`
- Standardiser: \`lower()\`, \`title()\`
- Valider datatyper: try/except med \`int()\`, \`float()\`
- Håndter manglende verdier
- Fjern duplikater

**pandas:**
- \`pd.read_csv()\` / \`pd.read_json()\` for innlesing
- \`df.head()\`, \`df.info()\`, \`df.describe()\` for inspeksjon
- Filtrering: \`df[df["kolonne"] > verdi]\`
- Gruppering: \`df.groupby("kolonne").mean()\`
- Rensing: \`dropna()\`, \`fillna()\`, \`drop_duplicates()\`

**Filformat-sammenligning:**

| Format | Struktur | Bruksområde | Lesbarhet |
|--------|----------|-------------|-----------|
| TXT | Ustrukturert | Logger, notater | God |
| CSV | Flat tabell | Regneark, enkel data | God |
| JSON | Nestede objekter | APIer, konfigurasjon | God |`
    },
    {
      id: 'it2-3-5-samleoppgaver',
      type: 'text' as const,
      title: 'Samleoppgaver',
      content: '## Samleoppgaver\n\nOppgaver som kombinerer filhåndtering, datarensing og analyse:'
    },
    {
      id: 'it2-3-5-exercise-6',
      type: 'exercise' as const,
      title: 'Samleoppgave 1: Komplett databehandlingspipeline',
      content: `Du har en CSV-fil "salg.csv" med disse kolonnene: produkt, antall, pris, dato.

Beskriv stegene for en komplett databehandlingspipeline som:
1. Leser inn dataene
2. Renser dataene (håndterer manglende verdier og feil)
3. Beregner total omsetning per produkt
4. Lagrer resultatet som JSON`,
      difficulty: 'hard' as const,
      exerciseType: 'classic' as const,
      points: 5,
      question: 'Implementer en komplett databehandlingspipeline.',
      hint: 'Del opp i funksjoner: les_data(), rens_data(), analyser_data(), lagre_resultat().',
      solution: `**Komplett løsning:**

\`\`\`python
import csv
import json

def les_salgsdata(filnavn):
    """Steg 1: Les inn CSV-data"""
    data = []
    with open(filnavn, "r", encoding="utf-8") as fil:
        leser = csv.DictReader(fil)
        for rad in leser:
            data.append(rad)
    print(f"Lest {len(data)} rader")
    return data

def rens_salgsdata(data):
    """Steg 2: Rens dataene"""
    renset = []
    forkastet = 0

    for rad in data:
        # Fjern whitespace
        rad = {k: v.strip() for k, v in rad.items()}

        # Sjekk manglende verdier
        if not rad["produkt"] or not rad["antall"] or not rad["pris"]:
            forkastet += 1
            continue

        # Konverter og valider tall
        try:
            rad["antall"] = int(rad["antall"])
            rad["pris"] = float(rad["pris"])
            if rad["antall"] <= 0 or rad["pris"] <= 0:
                forkastet += 1
                continue
        except ValueError:
            forkastet += 1
            continue

        # Standardiser produktnavn
        rad["produkt"] = rad["produkt"].title()

        renset.append(rad)

    print(f"Beholdt {len(renset)}, forkastet {forkastet}")
    return renset

def analyser_salg(data):
    """Steg 3: Beregn omsetning per produkt"""
    omsetning = {}
    for rad in data:
        produkt = rad["produkt"]
        total = rad["antall"] * rad["pris"]

        if produkt in omsetning:
            omsetning[produkt]["total"] += total
            omsetning[produkt]["antall_salg"] += 1
        else:
            omsetning[produkt] = {"total": total, "antall_salg": 1}

    # Sorter etter omsetning
    sortert = dict(sorted(omsetning.items(),
                          key=lambda x: x[1]["total"], reverse=True))
    return sortert

def lagre_resultat(data, filnavn):
    """Steg 4: Lagre som JSON"""
    with open(filnavn, "w", encoding="utf-8") as fil:
        json.dump(data, fil, indent=2, ensure_ascii=False)
    print(f"Resultat lagret til {filnavn}")

# Kjør pipeline
data = les_salgsdata("salg.csv")
renset = rens_salgsdata(data)
resultat = analyser_salg(renset)
lagre_resultat(resultat, "omsetning.json")
\`\`\``
    },
    {
      id: 'it2-3-5-exercise-7',
      type: 'exercise' as const,
      title: 'Samleoppgave 2: Filformat-valg',
      content: `For hvert scenario, velg riktig filformat (TXT, CSV eller JSON) og begrunn valget:

A) Lagre en liste med 1000 temperaturer med tidspunkt og sted
B) Lagre brukerinnstillinger for en app (tema, språk, varsler, favoritter)
C) Lagre en loggfil med hendelser som skjer i et program
D) Eksportere data fra en database som skal åpnes i Excel`,
      difficulty: 'medium' as const,
      exerciseType: 'classic' as const,
      points: 4,
      question: 'Velg og begrunn filformat for hvert scenario.',
      hint: 'Tenk på om dataene er flate (tabellform) eller nestede (hierarkiske), og hvem som skal bruke dem.',
      solution: `**A) 1000 temperaturer: CSV**
- Tabelldata med kolonner: tidspunkt, sted, temperatur
- Enkelt å åpne i regneark
- Kompakt format for mange rader
\`\`\`csv
tidspunkt,sted,temperatur
2024-01-01 08:00,Oslo,2.5
2024-01-01 08:00,Bergen,5.1
\`\`\`

**B) Brukerinnstillinger: JSON**
- Nestede strukturer: favoritter kan være en liste, varsler et objekt
- Lett å lese og oppdatere programmatisk
- Bevarer datatyper
\`\`\`json
{
  "tema": "mørk",
  "språk": "nb",
  "varsler": {"e-post": true, "push": false},
  "favoritter": ["matte", "IT"]
}
\`\`\`

**C) Loggfil: TXT**
- Sekvensiell skriving (append)
- Enkel og rask
- Kan leses med vanlige tekstverktøy
\`\`\`
2024-01-15 10:30:15 INFO Bruker logget inn
2024-01-15 10:31:02 ERROR Database tilkobling feilet
\`\`\`

**D) Data for Excel: CSV**
- Excel åpner CSV direkte
- Standard eksportformat fra databaser
- Enkel å generere og lese`
    }
  ],
  exercises: [],
  keyTerms: [
    'Filhåndtering',
    'CSV',
    'JSON',
    'Datarensing',
    'pandas',
    'DataFrame',
    'with-blokk',
    'Encoding (UTF-8)',
    'DictReader',
    'Manglende verdier'
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-3-4',
  nextChapter: 'it-2-4-1'
};

// ============================================================================
// EXPORT
// ============================================================================

export const IT_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_3_1,
  CHAPTER_IT_2_3_2,
  CHAPTER_IT_2_3_3,
  CHAPTER_IT_2_3_4,
  CHAPTER_IT_2_3_5,
];

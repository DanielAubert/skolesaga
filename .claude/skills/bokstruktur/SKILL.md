---
name: bokstruktur
description: Analyser og omstrukturer lærebokkapitler til teori-eksempel-oppgave-mønster
argument-hint: [kapittel-id eller filsti] [--analyse | --fikse]
---

# Bokstruktur: Teori-Eksempel-Oppgave-mønster

Denne skillen analyserer og omstrukturerer lærebokkapitler slik at innholdet følger pedagogisk beste praksis: teori etterfulgt av eksempel etterfulgt av relevant oppgave.

## Målstruktur

```
┌─────────────────────────────────────┐
│  INTRO (type: 'text')               │
├─────────────────────────────────────┤
│  TEORI 1 (type: 'definition')       │
│  EKSEMPEL 1 (type: 'example')       │  ← Blokk 1
│  OPPGAVE 1-2 (type: 'exercise')     │
├─────────────────────────────────────┤
│  TEORI 2 (type: 'definition')       │
│  EKSEMPEL 2 (type: 'example')       │  ← Blokk 2
│  OPPGAVE 3-4 (type: 'exercise')     │
├─────────────────────────────────────┤
│  TEORI 3 (type: 'text/definition')  │
│  PRIMÆRTEKST (type: 'text' m/tekst) │  ← Blokk 3
│  OPPGAVE 5 (type: 'exercise')       │
├─────────────────────────────────────┤
│  // --- Samleoppgaver ---           │
│  OPPGAVE 6-10 (vanskelige/drøfting) │  ← Avslutning
└─────────────────────────────────────┘
```

## Bruk

### Analysere et kapittel
```
/bokstruktur norsk-vg1-1-4 --analyse
```
Viser strukturen og identifiserer problemer.

### Analysere en hel fil
```
/bokstruktur src/lib/data/textbook-content-norsk-vg1-del1.ts --analyse
```

### Fikse strukturen
```
/bokstruktur norsk-vg1-1-4 --fikse
```
Omstrukturerer kapittelet automatisk.

## Strukturregler

### 1. Teori-Eksempel-Oppgave-blokker

Hver teoriblokk (definition/text med faginnhold) bør følges av:
1. Et eksempel som illustrerer teorien
2. 1-2 oppgaver som tester forståelsen av akkurat dette

### 2. Oppgaveplassering

| Oppgavetype | Plassering |
|-------------|------------|
| Forklaringsoppgaver | Rett etter relevant definisjon |
| Analyseoppgaver | Rett etter eksempel/primærtekst |
| Anvendelsesoppgaver | Rett etter relevant teori |
| Drøftingsoppgaver | Samleoppgaver på slutten |
| Kreative oppgaver | Samleoppgaver på slutten |

### 3. Samleoppgaver

De siste 2-4 oppgavene i et kapittel er **samleoppgaver** som:
- Krever kunnskap fra hele kapittelet
- Er vanskeligere (medium/vanskelig)
- Involverer drøfting, kreativ skriving, eller prosjektarbeid
- Markeres med kommentaren `// --- Samleoppgaver ---`

### 4. ID-konvensjoner

```typescript
// Teori/definisjon
{ id: 'norsk-vg1-1-4-def-1', type: 'definition', ... }

// Eksempel
{ id: 'norsk-vg1-1-4-example-1', type: 'example', ... }

// Oppgave rett etter def-1
{ id: 'norsk-vg1-1-4-ex-1', type: 'exercise', exercise: { number: '1', ... } }

// Samleoppgave
{ id: 'norsk-vg1-1-4-ex-8', type: 'exercise', exercise: { number: '8', ... } }
```

## Fremgangsmåte for --fikse

### Steg 1: Analyser innholdet

For hvert kapittel, identifiser:
- Alle teoriblokker (text/definition med faginnhold)
- Alle eksempler
- Alle primærtekster
- Alle oppgaver og hva de handler om

### Steg 2: Match oppgaver til innhold

Les hver oppgaves `task`-felt og match den til relevant innhold:

```typescript
// Oppgave: "Forklar hva etos, patos og logos betyr"
// → Hører til etter definisjonen av retoriske appellformer

// Oppgave: "Analyser talen i primærtekst 1 med fokus på appellformer"
// → Hører til etter primærteksten

// Oppgave: "Skriv en egen tale der du bruker alle tre appellformene"
// → Samleoppgave (krever alt fra kapittelet)
```

### Steg 3: Omstrukturer

```typescript
content: [
  // INTRO
  { id: '...-intro', type: 'text', content: `## Introduksjon...` },

  // BLOKK 1: Appellformer
  { id: '...-def-1', type: 'definition', title: 'Retoriske appellformer', ... },
  { id: '...-example-1', type: 'example', title: 'Eksempel på appellformer', ... },
  { id: '...-ex-1', type: 'exercise', exercise: { number: '1', task: 'Forklar etos, patos, logos...' } },
  { id: '...-ex-2', type: 'exercise', exercise: { number: '2', task: 'Hvilken appellform brukes her...' } },

  // BLOKK 2: Virkemidler
  { id: '...-def-2', type: 'definition', title: 'Retoriske virkemidler', ... },
  { id: '...-example-2', type: 'example', title: 'Analyse av virkemidler', ... },
  { id: '...-ex-3', type: 'exercise', exercise: { number: '3', task: 'Identifiser virkemidlene...' } },

  // BLOKK 3: Primærtekst
  { id: '...-primaertekst-1', type: 'text', title: 'Primærtekst: Tale av...', ... },
  { id: '...-ex-4', type: 'exercise', exercise: { number: '4', task: 'Analyser talen...' } },

  // --- Samleoppgaver ---
  { id: '...-ex-5', type: 'exercise', exercise: { number: '5', difficulty: 'medium', task: 'Sammenlign...' } },
  { id: '...-ex-6', type: 'exercise', exercise: { number: '6', difficulty: 'vanskelig', task: 'Skriv egen...' } },
]
```

### Steg 4: Oppdater nummerering

- Nummerer oppgaver sekvensielt: 1, 2, 3, 4...
- Behold ID-er uendret (bare endre `number`-feltet)

### Steg 5: Valider

```bash
npx tsc --noEmit
```

## Analyseoutput

Når du kjører `--analyse`, vis:

```
📚 Kapittel: norsk-vg1-1-4 - Kronikk og leserinnlegg

STRUKTUR:
  ├─ intro (text)
  ├─ def-1: Hva er en kronikk? (definition)
  ├─ def-2: Hva er et leserinnlegg? (definition)
  ├─ def-3: Struktur (definition)
  ├─ example-1: Analyse av leserinnlegg (example)
  ├─ primaertekst-1: Kronikk om skjermtid (text)
  ├─ primaertekst-2: Leserinnlegg om buss (text)
  ├─ primaertekst-3: Øverland-kronikk (text)
  ├─ ex-1: Begrepsoppgave (exercise) ← burde komme etter def-1
  ├─ ex-2: Strukturoppgave (exercise) ← burde komme etter def-3
  └─ ...

⚠️  PROBLEMER:
  - 10 oppgaver samlet på slutten
  - Ingen oppgaver etter definisjoner
  - Primærtekster uten tilhørende oppgave

✅ FORSLAG:
  - Flytt ex-1 (begreper) til etter def-1
  - Flytt ex-2 (struktur) til etter def-3
  - Flytt ex-3 (analyse) til etter example-1
  - Behold ex-8, ex-9, ex-10 som samleoppgaver
```

## Eksempel: Før og etter

### FØR (alle oppgaver på slutten)
```
intro → def-1 → def-2 → def-3 → example-1 → primærtekst-1 →
ex-1 → ex-2 → ex-3 → ex-4 → ex-5 → ex-6 → ex-7 → ex-8 → ex-9 → ex-10
```

### ETTER (teori-eksempel-oppgave)
```
intro →
def-1 → ex-1 →
def-2 → example-1 → ex-2 → ex-3 →
def-3 → ex-4 →
primærtekst-1 → ex-5 →
primærtekst-2 → ex-6 →
// --- Samleoppgaver ---
ex-7 → ex-8 → ex-9 → ex-10
```

## Sjekkliste

- [ ] Hver definisjon har minst én oppgave etter seg
- [ ] Hvert eksempel har en analyseoppgave etter seg
- [ ] Primærtekster har tilhørende oppgaver
- [ ] Samleoppgaver er markert med kommentar
- [ ] Oppgaver er nummerert sekvensielt (1, 2, 3...)
- [ ] TypeScript kompilerer uten feil

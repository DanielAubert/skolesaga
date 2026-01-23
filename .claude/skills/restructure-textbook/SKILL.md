---
name: restructure-textbook
description: Omstrukturer en lærebok slik at oppgaver kommer rett etter relevant teori
argument-hint: [filsti-til-lærebok] [kapittelnummer]
---

# Omstrukturering av lærebok

Denne skillen hjelper deg med å omstrukturere lærebokkapitler slik at oppgaver plasseres rett etter den teorien de relaterer til, i stedet for samlet på slutten.

## Målstruktur per delkapittel

```
1. Introduksjonstekst (type: 'text')
2. Definisjon 1 (type: 'definition')
3. Oppgave relatert til definisjon 1 (number: '1')
4. Tekst/Definisjon 2 (type: 'text' eller 'definition')
5. Oppgave relatert til tekst/definisjon 2 (number: '2')
6. Eksempel (type: 'example')
7. Oppgave relatert til eksempel (number: '3')
8. Eventuell ekstra tekst
9. // --- Oppsummeringsoppgaver ---
10. Oppsummeringsoppgave(r) (number: '4', '5', osv.)
```

## Fremgangsmåte

### Steg 1: Analyser kapittelstrukturen

Les filen og identifiser for hvert delkapittel:
- Alle innholdsblokker (`type: 'text'`, `type: 'definition'`, `type: 'example'`)
- Alle oppgaver (`type: 'exercise'`)
- Hva hver oppgave handler om (les `task`-feltet)

### Steg 2: Match oppgaver til innhold

For hver oppgave, identifiser hvilken innholdsblokk den relaterer til:
- Oppgaver om definisjoner → plasseres etter relevant definisjon
- Oppgaver om eksempler → plasseres etter eksempelet
- Generelle/drøftende oppgaver → blir oppsummeringsoppgaver

### Steg 3: Omstrukturer

For hvert delkapittel:

1. **Flytt oppgaver** til rett etter relevant innhold
2. **Oppdater oppgavenummerering** sekvensielt (1, 2, 3...)
3. **Behold eller legg til** kommentaren `// --- Oppsummeringsoppgaver ---` før siste oppgave(r)
4. **Fjern duplikater** fra slutten av kapittelet

### Steg 4: Valider

- Kjør `npm run build` for å sikre ingen syntaksfeil
- Sjekk at oppgavenummereringen er korrekt (1, 2, 3, 4...)

## Eksempel på korrekt struktur

```typescript
export const CHAPTER_EKSEMPEL_1_1: TextbookChapter = {
  id: 'eksempel-1-1',
  // ... metadata ...
  content: [
    {
      id: 'eksempel-1-1-intro',
      type: 'text',
      content: `## Introduksjon...`,
    },
    {
      id: 'eksempel-1-1-def-1',
      type: 'definition',
      title: 'Viktig begrep',
      content: `Definisjon av begrepet...`,
    },
    {
      id: 'eksempel-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eksempel-1-1-ex-1',
        number: '1',  // Første oppgave
        type: 'classic',
        task: 'Forklar begrepet...',
        solution: '...',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eksempel-1-1-text-2',
      type: 'text',
      content: `## Mer teori...`,
    },
    {
      id: 'eksempel-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eksempel-1-1-ex-2',
        number: '2',  // Andre oppgave
        type: 'classic',
        task: 'Beskriv sammenhengen...',
        solution: '...',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eksempel-1-1-example',
      type: 'example',
      title: 'Praktisk eksempel',
      content: `Her er et eksempel...`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'eksempel-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eksempel-1-1-ex-3',
        number: '3',  // Oppsummeringsoppgave
        type: 'classic',
        task: 'Drøft hvordan...',
        solution: '...',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};
```

## Viktige regler

1. **Ikke lag intro-oppgaver** - Ingen oppgave rett etter intro-teksten
2. **Sekvensielle nummer** - Oppgaver nummereres 1, 2, 3, 4... uavhengig av ID
3. **Behold oppgave-ID-er** - Ikke endre `id`-feltene, bare `number`
4. **Minst én oppsummeringsoppgave** - Siste oppgave(r) er alltid oppsummering/drøfting

## Bruk

```
/restructure-textbook src/lib/data/textbook-content-[fag].ts 3
```

Der `3` er kapittelnummeret som skal omstruktureres (f.eks. kapittel 3.1-3.7).

Uten kapittelnummer vil hele filen analyseres og en plan foreslås.

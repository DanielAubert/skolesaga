# Eksempler på omstrukturering

## Eksempel 1: Kapittel 6.3 - FN og menneskerettigheter

### FØR (gammel struktur)

```typescript
content: [
  { id: '...-intro', type: 'text', content: '## FNs menneskerettighetsarbeid...' },
  { id: '...-verdenserkleringen', type: 'definition', title: 'Verdenserklæringen...', content: '...' },
  { id: '...-konvensjoner', type: 'text', content: '## FNs konvensjoner...' },
  { id: '...-andre-konvensjoner', type: 'example', title: 'Andre viktige konvensjoner', content: '...' },
  { id: '...-overvaking', type: 'text', content: '## FNs overvåkingssystem...' },
  { id: '...-begrensninger', type: 'text', content: '## Begrensninger...' },
  // Alle oppgaver samlet på slutten:
  { id: '...-ex-1', type: 'exercise', exercise: { number: '1', task: 'Hva er forskjellen på Verdenserklæringen...' } },
  { id: '...-ex-2', type: 'exercise', exercise: { number: '2', task: 'Nevn de to hovedkonvensjonene...' } },
  { id: '...-ex-3', type: 'exercise', exercise: { number: '3', task: 'Hvordan overvåker FN...' } },
  { id: '...-ex-4', type: 'exercise', exercise: { number: '4', task: 'Hva er svakhetene...' } },
]
```

### ETTER (ny struktur)

```typescript
content: [
  { id: '...-intro', type: 'text', content: '## FNs menneskerettighetsarbeid...' },
  { id: '...-verdenserkleringen', type: 'definition', title: 'Verdenserklæringen...', content: '...' },
  // Oppgave rett etter definisjon:
  { id: '...-ex-1', type: 'exercise', exercise: { number: '1', task: 'Hva er forskjellen på Verdenserklæringen...' } },
  { id: '...-konvensjoner', type: 'text', content: '## FNs konvensjoner...' },
  // Oppgave rett etter konvensjoner-tekst:
  { id: '...-ex-2', type: 'exercise', exercise: { number: '2', task: 'Nevn de to hovedkonvensjonene...' } },
  { id: '...-andre-konvensjoner', type: 'example', title: 'Andre viktige konvensjoner', content: '...' },
  { id: '...-overvaking', type: 'text', content: '## FNs overvåkingssystem...' },
  // Oppgave rett etter overvåking-tekst:
  { id: '...-ex-3', type: 'exercise', exercise: { number: '3', task: 'Hvordan overvåker FN...' } },
  { id: '...-begrensninger', type: 'text', content: '## Begrensninger...' },
  // --- Oppsummeringsoppgaver ---
  { id: '...-ex-4', type: 'exercise', exercise: { number: '4', task: 'Hva er svakhetene...' } },
]
```

## Eksempel 2: Matching av oppgaver til innhold

### Oppgave-analyse

| Oppgave | Task | Relatert innhold | Plassering |
|---------|------|------------------|------------|
| ex-1 | "Hva er forskjellen på Verdenserklæringen og konvensjoner?" | Definisjon av Verdenserklæringen | Etter `verdenserkleringen` |
| ex-2 | "Nevn de to hovedkonvensjonene fra 1966..." | Tekst om konvensjoner | Etter `konvensjoner` |
| ex-3 | "Hvordan overvåker FN at stater følger...?" | Tekst om overvåking | Etter `overvaking` |
| ex-4 | "Hva er de viktigste svakhetene...?" | Generell drøfting | Oppsummering |

## Eksempel 3: Redigering med Edit-verktøyet

### Legge til oppgave etter definisjon

```typescript
// FØR:
Verdenserklæringen er ikke juridisk bindende...`,
    },
    {
      id: 'samfunnskunnskap-6-3-konvensjoner',
      type: 'text',

// ETTER:
Verdenserklæringen er ikke juridisk bindende...`,
    },
    {
      id: 'samfunnskunnskap-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på Verdenserklæringen og FNs konvensjoner?',
        solution: '...',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-3-konvensjoner',
      type: 'text',
```

### Fjerne duplikater fra slutten

```typescript
// FØR (på slutten av kapittelet):
    { id: '...-ex-1', ... },  // Duplikat - fjernes
    { id: '...-ex-2', ... },  // Duplikat - fjernes
    { id: '...-ex-3', ... },  // Duplikat - fjernes
    // --- Oppsummeringsoppgaver ---
    { id: '...-ex-4', ... },  // Beholdes

// ETTER:
    // --- Oppsummeringsoppgaver ---
    { id: '...-ex-4', ... },  // Beholdes
```

## Eksempel 4: Sjekkliste for hvert kapittel

- [ ] Les gjennom alle oppgavene og forstå hva de handler om
- [ ] Identifiser hvilken innholdsblokk hver oppgave relaterer til
- [ ] Flytt oppgave 1 etter første definisjon
- [ ] Flytt oppgave 2 etter andre tekst/definisjon
- [ ] Flytt oppgave 3 etter eksempel (hvis relevant)
- [ ] Sett inn `// --- Oppsummeringsoppgaver ---` kommentar
- [ ] La siste oppgave(r) være oppsummeringsoppgaver
- [ ] Fjern duplikater fra slutten
- [ ] Oppdater oppgavenumre til 1, 2, 3, 4...
- [ ] Kjør build for å verifisere

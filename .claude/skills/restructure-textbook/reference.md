# Referanse: Lærebokstruktur

## TypeScript-typer

Lærebøkene bruker følgende typer fra `src/lib/types/textbook.ts`:

### TextbookChapter

```typescript
interface TextbookChapter {
  id: string;
  courseId: string;
  chapterNumber: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  competenceGoals: string[];
  content: TextbookContentItem[];
  exercises: TextbookExercise[];
}
```

### TextbookContentItem

Innholdsblokker kan være av følgende typer:

```typescript
type TextbookContentItem =
  | TextbookTextContent
  | TextbookDefinitionContent
  | TextbookExampleContent
  | TextbookExerciseContent;
```

#### Text (type: 'text')
```typescript
interface TextbookTextContent {
  id: string;
  type: 'text';
  content: string;  // Markdown-formatert tekst
}
```

#### Definition (type: 'definition')
```typescript
interface TextbookDefinitionContent {
  id: string;
  type: 'definition';
  title: string;
  content: string;  // Markdown-formatert tekst
}
```

#### Example (type: 'example')
```typescript
interface TextbookExampleContent {
  id: string;
  type: 'example';
  title: string;
  content?: string;
  problem?: string;
  solution?: string;
}
```

#### Exercise (type: 'exercise')
```typescript
interface TextbookExerciseContent {
  id: string;
  type: 'exercise';
  exercise: TextbookExercise;
}
```

### TextbookExercise

```typescript
interface TextbookExercise {
  id: string;
  number: string;
  type: 'classic' | 'multiple-choice' | 'fill-in-blank';
  task: string;
  solution: string;
  allowsUpload: boolean;
  allowsCanvasDrawing: boolean;
  hint?: string;
  options?: string[];  // For multiple-choice
}
```

## Fil-konvensjoner

### Filnavn
- `textbook-content-[fagnavn].ts`
- Eksempel: `textbook-content-samfunnskunnskap.ts`

### Kapittelnavn
- `CHAPTER_[FAGNAVN]_[KAPITTEL]_[DELKAPITTEL]`
- Eksempel: `CHAPTER_SAMFUNNSKUNNSKAP_6_3`

### ID-konvensjoner
- Innhold: `[fag]-[kapittel]-[delkapittel]-[type]` eller `[fag]-[kapittel]-[delkapittel]-[navn]`
- Oppgaver: `[fag]-[kapittel]-[delkapittel]-ex-[nummer]`
- Eksempler:
  - `samfunnskunnskap-6-3-intro`
  - `samfunnskunnskap-6-3-def-1`
  - `samfunnskunnskap-6-3-ex-1`

## Eksisterende lærebøker

| Fil | Fag | Status |
|-----|-----|--------|
| `textbook-content-samfunnskunnskap.ts` | Samfunnskunnskap | Omstrukturert |
| `textbook-content-historie.ts` | Historie | Ikke omstrukturert |
| `textbook-content-geografi.ts` | Geografi | Ikke omstrukturert |

## Typiske innholdsmønstre

### Mønster 1: Standard kapittel (4 oppgaver)
1. intro → def-1 → **ex-1** → text-2 → **ex-2** → example → **ex-3** → // oppsummering → **ex-4**

### Mønster 2: Kortere kapittel (2-3 oppgaver)
1. intro → def-1 → **ex-1** → text-2 → // oppsummering → **ex-2**

### Mønster 3: Komplekst kapittel (5+ oppgaver)
1. intro → def-1 → **ex-1** → def-2 → **ex-2** → text → **ex-3** → example → **ex-4** → // oppsummering → **ex-5** → **ex-6**

## Tips for matching av oppgaver

### Nøkkelord i oppgaver som indikerer plassering:

| Oppgave inneholder | Plasseres etter |
|--------------------|-----------------|
| "Hva er...", "Forklar begrepet..." | Første definisjon |
| "Gi eksempler på...", "Nevn tre..." | Definisjon eller eksempel |
| "Hvordan fungerer...", "Beskriv prosessen..." | Relevant tekstseksjon |
| "Drøft...", "Vurder...", "Sammenlign..." | Oppsummering (slutten) |
| "Hva mener du...", "Reflekter over..." | Oppsummering (slutten) |

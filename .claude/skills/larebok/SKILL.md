---
name: lærebok
description: Utvikle eller utvide en komplett lærebok basert på LK20-læreplanen
argument-hint: [kurs-id] f.eks. biologi-1, kjemi-2, fysikk-1
---

# Lærebok: Utvikle komplett lærebok fra LK20-læreplanen

Denne skillen utvikler en komplett lærebok eller utvider en eksisterende bok til full størrelse. Den bruker LK20-læreplanen som grunnlag og matcher stilen til eksisterende innhold.

## Hva den gjør

1. **Analyserer eksisterende innhold** for å forstå stil og struktur
2. **Henter LK20-kompetansemål** fra UDIR for faget
3. **Planlegger kapittelstruktur** basert på kompetansemålene
4. **Fyller ut stub-kapitler** og lager nye kapitler der det mangler
5. **Genererer komplett innhold** med teori, eksempler og oppgaver
6. **Kjører build-sjekk** ved høy risiko for feil
7. **Oppretter rapport** over hva som ble generert

## Bruk

```
/lærebok biologi-1
/lærebok kjemi-2
/lærebok fysikk-1
```

## Fremgangsmåte

### Fase 1: Analyse av eksisterende bok

**Steg 1.1: Finn kursdefinisjon**
```bash
# Søk etter kurset i textbook-courses.ts
grep -n "COURSE_[FAG]" src/lib/data/textbook-courses.ts
```

Finn ut:
- Hvor mange kapitler finnes?
- Hvilke kapitler har innhold vs. er stubs?
- Hva er ID-mønsteret? (f.eks. `biologi-1-1`, `kjemi-2-3-2`)

**Steg 1.2: Analyser innholdsfiler**
```bash
# Finn innholdsfiler
ls src/lib/data/textbook-content-[fag]*.ts
```

Les 2-3 kapitler grundig for å forstå:
- Skrivestil (formell/uformell, "du"/"vi"/passiv)
- Typisk lengde på tekst-blokker
- Hvordan definisjoner er formatert
- Hvordan eksempler er strukturert
- Oppgavetyper som brukes
- Antall oppgaver per kapittel

**Steg 1.3: Identifiser mangler**
Lag en liste over:
- Kapitler som bare er metadata (stubs)
- Kompetansemål som ikke er dekket
- Temaer som burde ha egne kapitler

### Fase 2: Planlegging

**Steg 2.1: Hent LK20-kompetansemål**

Søk på UDIR eller bruk eksisterende kompetansemål fra kurset:
```typescript
competenceGoals: [
  'forklare hovedtrekk ved cellebiologi',
  'beskrive sammenhenger i økosystemer',
  // ...
]
```

**Steg 2.2: Lag kapitteloversikt**

Planlegg strukturen (typisk 8-12 hovedkapitler, 3-6 delkapitler hver):

```
Kapittel 1: [Hovedtema]
  1.1 [Deltema] - kompetansemål: [...]
  1.2 [Deltema] - kompetansemål: [...]
  1.3 [Deltema] - kompetansemål: [...]

Kapittel 2: [Hovedtema]
  2.1 [Deltema] - kompetansemål: [...]
  ...
```

**Steg 2.3: Beregn omfang**

Typisk lærebok:
- 40-60 kapitler totalt
- 45-60 min per kapittel
- 5-8 oppgaver per kapittel
- ~2000-4000 ord teori per kapittel

### Fase 3: Generering av innhold

**Steg 3.1: Opprett/oppdater innholdsfiler**

Navnekonvensjon:
```
textbook-content-[fag]-del[nummer].ts
```

Eksempel for Biologi 1:
```
textbook-content-biologi-1-del1.ts  // Kap 1-3
textbook-content-biologi-1-del2.ts  // Kap 4-6
textbook-content-biologi-1-del3.ts  // Kap 7-9
```

**Steg 3.2: Generer kapittelinnhold**

Hver kapittel skal inneholde:

```typescript
export const CHAPTER_BIOLOGI_1_1_1: TextbookChapter = {
  id: 'biologi-1-1-1',
  courseId: 'biologi-1',
  chapterNumber: '1.1',
  title: 'Cellen som livets grunnenhet',
  description: 'Lær om cellens oppbygning og funksjoner.',
  estimatedMinutes: 55,
  competenceGoals: ['forklare hovedtrekk ved cellebiologi'],
  content: [
    // 1. Introduksjon (type: 'text')
    // 2. Ordliste/nøkkelbegreper (type: 'definition')
    // 3. Hovedteori med underoverskrifter (type: 'text')
    // 4. Definisjonsbokser for viktige begreper (type: 'definition')
    // 5. Eksempler med løsning (type: 'example')
    // 6. Tips/noter der relevant (type: 'tip', 'note', 'warning')
    // 7. Oppgaver spredt utover (type: 'exercise')
    // 8. Oppsummering på slutten (type: 'text')
  ],
  exercises: [],
};
```

**Steg 3.3: Innholdsblokk-maler**

**Intro-tekst:**
```typescript
{
  id: '[kap-id]-intro',
  type: 'text',
  content: `## [Engasjerende overskrift]

[Introduksjon som setter kontekst - 2-3 avsnitt]

I dette kapittelet skal du lære:
- [Læringsmål 1]
- [Læringsmål 2]
- [Læringsmål 3]`
}
```

**Definisjonsboks:**
```typescript
{
  id: '[kap-id]-def-[nummer]',
  type: 'definition',
  title: '[Begrep]',
  content: `**[Begrep]** er [definisjon].

[Utdypende forklaring med eksempel]`
}
```

**Eksempel med løsning:**
```typescript
{
  id: '[kap-id]-ex-[nummer]',
  type: 'example',
  title: 'Eksempel: [Tittel]',
  problem: '[Oppgavetekst]',
  solution: `**Løsning:**

[Steg-for-steg løsning]

**Svar:** [Endelig svar]`
}
```

**Multiple-choice oppgave:**
```typescript
{
  id: '[kap-id]-oppg-[nummer]',
  type: 'exercise',
  exercise: {
    id: '[kap-id]-oppg-[nummer]',
    number: '[nummer]',
    type: 'multiple-choice',
    task: '[Spørsmål]',
    options: [
      { id: 'a', text: '[Alternativ A]', isCorrect: false },
      { id: 'b', text: '[Alternativ B]', isCorrect: true },
      { id: 'c', text: '[Alternativ C]', isCorrect: false },
      { id: 'd', text: '[Alternativ D]', isCorrect: false },
    ],
    solution: '[Forklaring på hvorfor B er riktig]',
  },
}
```

**Fritekst-oppgave:**
```typescript
{
  id: '[kap-id]-oppg-[nummer]',
  type: 'exercise',
  exercise: {
    id: '[kap-id]-oppg-[nummer]',
    number: '[nummer]',
    type: 'short-answer',
    task: '[Oppgavetekst]',
    hints: ['[Hint 1]', '[Hint 2]'],
    solution: '[Fasit med forklaring]',
  },
}
```

**Oppsummering:**
```typescript
{
  id: '[kap-id]-oppsummering',
  type: 'text',
  content: `## Oppsummering

I dette kapittelet har du lært:

- **[Hovedpunkt 1]**: [Kort forklaring]
- **[Hovedpunkt 2]**: [Kort forklaring]
- **[Hovedpunkt 3]**: [Kort forklaring]

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| [Begrep 1] | [Kort definisjon] |
| [Begrep 2] | [Kort definisjon] |`
}
```

### Fase 4: Registrering

**Steg 4.1: Oppdater eksport-array i innholdsfilen**
```typescript
export const BIOLOGI_1_DEL1_CHAPTERS = [
  CHAPTER_BIOLOGI_1_1_1,
  CHAPTER_BIOLOGI_1_1_2,
  CHAPTER_BIOLOGI_1_1_3,
  // ...
];
```

**Steg 4.2: Importer i textbook-content.ts**
```typescript
import { BIOLOGI_1_DEL1_CHAPTERS } from './textbook-content-biologi-1-del1';

// I ALL_CHAPTERS:
...Object.fromEntries(BIOLOGI_1_DEL1_CHAPTERS.map(c => [c.id, c])),
```

**Steg 4.3: Oppdater textbook-courses.ts**

Legg til/oppdater kapittelmetadata:
```typescript
chapters: [
  {
    id: 'biologi-1-1-1',
    number: '1.1',
    title: 'Cellen som livets grunnenhet',
    description: 'Lær om cellens oppbygning og funksjoner.',
    estimatedMinutes: 55,
    exerciseCount: 6,
    topics: ['Celle', 'Organeller', 'Cellemembran'],
    competenceGoals: ['forklare hovedtrekk ved cellebiologi']
  },
  // ...
]
```

### Fase 5: Validering og rapport

**Steg 5.1: Kjør build-sjekk**
```bash
npm run build
```

Fiks eventuelle TypeScript-feil før du fortsetter.

**Steg 5.2: Kjør politisk nøytralitetssjekk**

Kjør `/politisk-nøytralitet [kurs-id]` for å sjekke at innholdet er balansert og nøytralt. Dette er spesielt viktig for fag som:
- Historie
- Samfunnskunnskap
- KRLE
- Biologi (evolusjon, GMO, klima)
- Geografi (klima, ressurser)

Fiks eventuelle funn som flagges som kritiske eller moderate.

**Steg 5.3: Generer rapport**

Skriv ut en kort rapport:

```
## Lærebok-rapport: [Fag]

### Statistikk
- Totalt antall kapitler: X
- Nye kapitler opprettet: Y
- Stub-kapitler fylt ut: Z
- Total estimert lesetid: X timer

### Kapitteloversikt
| Kapittel | Tittel | Status | Min | Oppgaver |
|----------|--------|--------|-----|----------|
| 1.1 | [Tittel] | NY | 55 | 6 |
| 1.2 | [Tittel] | UTVIDET | 50 | 5 |
| ... | ... | ... | ... | ... |

### Kompetansemål dekket
- [x] [Kompetansemål 1]
- [x] [Kompetansemål 2]
- [ ] [Kompetansemål 3] (delvis)

### Politisk nøytralitet
- Nøytralitetsscore: X/10
- Kritiske funn fikset: X
- Moderate funn fikset: X

### Neste steg
- [ ] Kjør `/narrativ` for lesevennlige versjoner
- [ ] Generer forsidebilder
- [ ] Legg til video-lenker der relevant
```

## Kvalitetskrav

### Innhold
- ALL teori skal være faglig korrekt
- Definisjoner skal være presise og konsistente
- Eksempler skal være relevante og løsbare
- Oppgaver skal ha varierende vanskelighetsgrad

### Struktur
- Hvert kapittel: intro → teori → definisjoner → eksempler → oppgaver → oppsummering
- Gradvis progresjon i vanskelighetsgrad
- Kryss-referanser til tidligere kapitler der relevant

### Teknisk
- Alle ID-er skal være unike
- TypeScript skal kompilere uten feil
- Markdown-formattering skal være korrekt
- LaTeX-formler skal være gyldige (bruk `$...$` for inline, `$$...$$` for display)

## Sjekkliste

- [ ] Analysert eksisterende stil og struktur
- [ ] Hentet LK20-kompetansemål
- [ ] Planlagt kapittelstruktur
- [ ] Generert alle kapitler med komplett innhold
- [ ] Hvert kapittel har: intro, teori, definisjoner, eksempler, oppgaver, oppsummering
- [ ] Blanding av multiple-choice og fritekst-oppgaver
- [ ] Oppdatert eksport-arrays
- [ ] Importert i textbook-content.ts
- [ ] Oppdatert textbook-courses.ts
- [ ] Build-sjekk bestått
- [ ] Politisk nøytralitetssjekk kjørt og eventuelle funn fikset
- [ ] Rapport generert

## Eksempel: Typisk arbeidsflyt

```
1. /lærebok biologi-1

2. [Claude analyserer eksisterende Biologi 1-innhold]

3. [Claude henter LK20-kompetansemål for Biologi 1]

4. [Claude planlegger 45 kapitler fordelt på 8 hovedtemaer]

5. [Claude genererer innhold fil for fil]
   - textbook-content-biologi-1-del1.ts (kap 1-3)
   - textbook-content-biologi-1-del2.ts (kap 4-6)
   - ...

6. [Claude oppdaterer textbook-content.ts og textbook-courses.ts]

7. [Claude kjører npm run build]

8. [Claude kjører /politisk-nøytralitet biologi-1]
   - Sjekker for politisk vinkling
   - Fikser eventuelle kritiske/moderate funn

9. [Claude genererer rapport]
```

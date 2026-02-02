---
name: narrativ
description: Konverter et vanlig lærebokkapittel til narrativ versjon med quiz og lydbok
argument-hint: [kapittel-id] f.eks. historie-1-2
---

# Narrativ: Konverter kapittel til lesevennlig fortellende format

Denne skillen konverterer et vanlig lærebokkapittel til en narrativ versjon som er optimalisert for å lese/lytte til på mobil. Etter konvertering kjøres `/texttovoice` automatisk for å generere lydbok.

## Hva den gjør

1. **Leser originalkapittelet** og forstår innholdet
2. **Skriver om** all teori til sammenhengende, engasjerende prosa
3. **Konverterer øvelser** til multiple-choice quizzer (4 alternativer)
4. **Legger til oppsummering** på slutten
5. **Kjører `/texttovoice`** for å generere lydbok automatisk

## Bruk

```
/narrativ historie-1-2
```

## Transformasjonsregler

### Strukturendringer

| Original | Narrativ |
|----------|----------|
| `definition`-blokk | Vevd inn i sammenhengende tekst |
| `example`-blokk | Vevd inn i sammenhengende tekst |
| `exercise` (classic) | `exercise` (multiple-choice quiz) |
| Ingen `audio`-blokker | Audio-blokker legges til av `/texttovoice` |
| Ingen `linkedChapterId` | `linkedChapterId` peker tilbake til originalen |
| Ingen `subtitle` | `subtitle: 'Narrativ versjon'` |

### ID-konvensjoner

| Type | Original | Narrativ |
|------|----------|----------|
| Kapittel | `historie-1-2` | `historie-1-2-narrativ` |
| Intro | `historie-1-2-intro` | `historie-1-2-n-intro` |
| Seksjon | (ingen) | `historie-1-2-n-section1` |
| Quiz | `historie-1-2-ex-1` | `historie-1-2-n-quiz1` |
| Audio | (ingen) | `historie-1-2-n-audio-1` |
| Oppsummering | (ingen) | `historie-1-2-n-summary` |

### Eksport-konvensjon

```typescript
export const CHAPTER_HISTORIE_1_2_NARRATIV: TextbookChapter = { ... }
```

Variabelnavn: `CHAPTER_` + kapittel-id i UPPER_SNAKE_CASE + `_NARRATIV`

## Fremgangsmåte

### Steg 1: Les originalkapittelet

Finn kapittelet i `src/lib/data/textbook-content-*-del*.ts` og forstå:
- Alle text-blokker (teori)
- Alle definition-blokker (begreper)
- Alle example-blokker (eksempler)
- Alle exercise-blokker (oppgaver)
- Kompetansemål og metadata

### Steg 2: Planlegg narrativ struktur

Del innholdet i **seksjoner** med én quiz etter hver seksjon:

```
intro (2-3 avsnitt, sett scenen)
section1 (utdyp første tema)
quiz1
section2 (utdyp andre tema)
quiz2
section3 (utdyp tredje tema)
quiz3
section4 (utdyp fjerde tema)
quiz4
section5 (utdyp femte tema)
quiz5
summary (oppsummering med nøkkelbegreper)
```

**Mål:** 5 quizzer per kapittel (6 segmenter inkl. oppsummering).

### Steg 3: Skriv narrativ tekst

**Skrivestil:**
- Skriv som om du forteller en historie til en elev
- Bruk "du" og "vi" – gjør det personlig
- Start med et engasjerende scenario eller spørsmål
- Bruk konkrete eksempler og analogier
- Unngå kulepunktlister – bruk prosa i stedet
- Markdown-overskrifter (`##`) for hver seksjon
- Fet skrift (`**`) for viktige begreper
- Kursiv (`*`) for vektlegging
- Hold hver seksjon på 150-400 ord

**Innholdsregler:**
- ALL faglig informasjon fra originalen MÅ med
- Definisjoner veves inn naturlig i teksten
- Eksempler blir del av fortellingen
- Legg til kontekst og overganger mellom temaer
- Avslutt med en oppsummeringsseksjon

### Steg 4: Lag quizzer

Konverter originale oppgaver til multiple-choice format:

```typescript
{
  id: 'historie-1-2-n-quiz1',
  type: 'exercise',
  exercise: {
    id: 'historie-1-2-n-quiz1',
    number: 'Quiz 1',
    type: 'multiple-choice',
    task: 'Spørsmål basert på teksten over?',
    options: [
      { id: 'a', text: 'Feil svar 1', isCorrect: false },
      { id: 'b', text: 'Riktig svar', isCorrect: true },
      { id: 'c', text: 'Feil svar 2', isCorrect: false },
      { id: 'd', text: 'Feil svar 3', isCorrect: false },
    ],
    solution: 'Forklaring av hvorfor b er riktig, med referanse til teksten.',
  },
}
```

**Quiz-regler:**
- 4 alternativer (a, b, c, d)
- Alltid 1 riktig svar
- Varier posisjonen til riktig svar
- Feil svar skal være plausible, ikke åpenbart gale
- Solution-teksten forklarer hvorfor svaret er riktig
- Spørsmålet skal teste forståelse, ikke bare hukommelse

### Steg 5: Skriv TypeScript-koden

Legg til kapittelet i narrativ-filen (f.eks. `textbook-content-historie-narrativ.ts`):

```typescript
export const CHAPTER_HISTORIE_1_2_NARRATIV: TextbookChapter = {
  id: 'historie-1-2-narrativ',
  courseId: 'historie',
  chapterNumber: '1.2',
  title: 'Kilder og kildekritikk',       // Samme som original
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om ...',    // Ny, engasjerende beskrivelse
  estimatedMinutes: 40,                   // Juster etter lengde
  competenceGoals: ['...'],               // Samme som original
  linkedChapterId: 'historie-1-2',        // Peker tilbake
  content: [
    // intro
    // section1
    // quiz1
    // section2
    // quiz2
    // ...
    // summary
  ],
  exercises: [],
};
```

**VIKTIG:** IKKE legg til audio-blokker manuelt. `/texttovoice` gjør dette automatisk.

### Steg 6: Oppdater eksport-arrayet

Legg til den nye konstanten i eksport-arrayet nederst i filen:

```typescript
export const HISTORIE_NARRATIV_CHAPTERS = [
  CHAPTER_HISTORIE_1_1_NARRATIV,
  CHAPTER_HISTORIE_1_2_NARRATIV,  // ← ny
  // ...
];
```

### Steg 7: Registrer i kurs-konfigurasjonen

Oppdater `textbook-courses.ts` (eller tilsvarende) for å inkludere det nye kapittelet.

### Steg 8: Generer lydbok

Kjør `/texttovoice` med det nye kapittelets ID:

```
/texttovoice historie-1-2-narrativ
```

## Eksempel: Transformasjon

### Original (definition-blokk):
```typescript
{
  type: 'definition',
  title: 'Kildetyper',
  content: `**Primærkilder** er førstehåndsberetninger...
  **Sekundærkilder** er tolkninger...`
}
```

### Narrativ (tekst-blokk):
```typescript
{
  type: 'text',
  content: `## En soldat skriver hjem

  Tenk deg at du finner et brev fra 1814...
  Dette brevet er det historikere kaller en primærkilde –
  en førstehåndsberetning fra noen som var der da det skjedde.

  Men hva om du leser om det samme i en lærebok skrevet i 2024?
  Da bruker du en sekundærkilde – noen som har tolket og
  analysert primærkildene i ettertid...`
}
```

## Sjekkliste

- [ ] All faglig informasjon fra originalen er med
- [ ] 5 quizzer med 4 alternativer hver
- [ ] Oppsummering med nøkkelbegreper på slutten
- [ ] Engasjerende skrivestil med "du/vi"
- [ ] `linkedChapterId` peker til originalkapittelet
- [ ] `subtitle: 'Narrativ versjon'`
- [ ] Riktig ID-format (`-narrativ`, `-n-`)
- [ ] Lagt til i eksport-array
- [ ] TypeScript kompilerer uten feil
- [ ] `/texttovoice` kjørt for å generere lydbok

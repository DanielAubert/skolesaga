---
name: quiznarrativ
description: Utvid narrativ-quizer til sekvensielle fler-spørsmål-quizer som dekker alt pensum per seksjon
argument-hint: [kapittel-id] f.eks. 1t-1-2-narrativ
---

# Quiznarrativ: Utvid narrative quizer til sekvensielle fler-spørsmål-quizer

Denne skillen tar et eksisterende narrativt kapittel som har enkle 1-spørsmåls-quizer og utvider dem til sekvensielle quizer med nok spørsmål til å dekke alt pensum fra hver seksjon.

## Hva den gjør

1. **Leser det narrative kapittelet** og identifiserer alle quizer og deres tilhørende tekstseksjoner
2. **Analyserer hver seksjon** for å finne alle konsepter, regler og ferdigheter som undervises
3. **Utvider hver quiz** med nok spørsmål til å dekke alle viktige konsepter fra seksjonen
4. **Beholder eksisterende spørsmål** som første spørsmål i den sekvensielle quizen

## Bruk

```
/quiznarrativ 1t-1-2-narrativ
```

Uten argument: Finn alle narrative kapitler som har single-question quizer og list dem opp, spør bruker hvilke(t) som skal utvides.

## Sekvensiell quiz-format

Sekvensielle quizer bruker `questions`-arrayet på `TextbookExercise`. Når dette feltet finnes, rendrer `SequentialQuizExercise`-komponenten spørsmålene ett om gangen med auto-sjekk ved klikk.

### TypeScript-struktur

```typescript
{
  id: 'kapittel-n-quiz1',
  type: 'exercise',
  exercise: {
    id: 'kapittel-n-quiz1',
    number: 'Quiz 1',
    type: 'multiple-choice',
    task: 'Test deg selv på [tema]:',           // Kort beskrivelse av quizen
    options: [                                    // Dummy — trengs for bakoverkompatibilitet
      { id: 'a', text: 'placeholder', isCorrect: true },
    ],
    questions: [                                  // ← DEN SEKVENSIELLE QUIZEN
      {
        id: 'kapittel-n-quiz1-q0',
        task: 'Spørsmåltekst med $LaTeX$?',
        options: [
          { id: 'a', text: 'Feil svar', isCorrect: false },
          { id: 'b', text: 'Riktig svar', isCorrect: true },
          { id: 'c', text: 'Feil svar', isCorrect: false },
          { id: 'd', text: 'Feil svar', isCorrect: false },
        ],
        solution: 'Forklaring av riktig svar.',
      },
      {
        id: 'kapittel-n-quiz1-q1',
        task: 'Neste spørsmål...',
        options: [ ... ],
        solution: '...',
      },
      // ... så mange som trengs
    ],
  },
}
```

### ID-konvensjoner

| Type | Format |
|------|--------|
| Quiz exercise-blokk | `kapittel-n-quiz1` |
| Individuelt spørsmål | `kapittel-n-quiz1-q0`, `kapittel-n-quiz1-q1`, ... |
| Submission-lagring | `exerciseId__q0`, `exerciseId__q1`, ... (håndteres av komponenten) |

## Fremgangsmåte

### Steg 1: Les det narrative kapittelet

Finn filen i `src/lib/data/textbook-content-*-narrativ*.ts` og identifiser:
- Alle `text`-blokker (seksjonene)
- Alle `exercise`-blokker med `type: 'multiple-choice'` (quizene)
- Parene seksjon→quiz (hvilken quiz hører til hvilken seksjon)

### Steg 2: Analyser pensum per seksjon

For HVER seksjon, lag en liste over alle konsepter som undervises:
- Regler og formler
- Definisjoner og begreper
- Ulike brukstilfeller og varianter (f.eks. "med koeffisienter", "med brøk", "med negative eksponenter")
- Vanlige feil som nevnes
- Kombinerte/avanserte eksempler

### Steg 3: Bestem antall spørsmål per quiz

**KRITISK: Verken antall quizer per kapittel eller antall spørsmål per quiz er forhåndsbestemt. La pensum styre begge deler:**

**Antall spørsmål per quiz:**
- Enkel seksjon med 1-2 konsepter → 2 spørsmål
- Normal seksjon med 3-4 konsepter → 3-4 spørsmål
- Tung seksjon med mange konsepter/varianter → 5-6 spørsmål

**Antall quizer per kapittel:**
- Noen seksjoner er for korte/enkle til å trenge quiz → hopp over
- Andre seksjoner dekker så mye at de trenger quiz → legg til
- Ikke tving en quiz etter hver eneste seksjon — kun der det er naturlig og nyttig

Hvert spørsmål skal teste ETT distinkt konsept eller ferdighetsnivå fra seksjonen. Ikke lag to spørsmål som tester det samme.

### Steg 4: Skriv spørsmålene

**Regler for gode quiz-spørsmål:**

1. **Test forståelse, ikke hukommelse** — eleven skal bruke en regel, ikke sitere den
2. **Progressiv vanskelighetsgrad** — start med grunnleggende, øk gradvis
3. **Plausible feilsvar** — basert på vanlige misforståelser (f.eks. glemme å opphøye koeffisienten)
4. **Varier riktig-svar-posisjon** — ikke alltid 'b' eller 'c'
5. **Alltid 4 alternativer** (a, b, c, d)
6. **Solution skal forklare** — vis utregningen steg for steg
7. **LaTeX i spørsmål og svar** — bruk `$...$` for matematikk
8. **Kort og konsis task** — spørsmålet skal være tydelig på første lesning

**Typiske feilsvar-strategier:**
- Legge sammen i stedet for å gange (eller omvendt)
- Glemme å opphøye koeffisienten: $(3x)^2 = 3x^2$ i stedet for $9x^2$
- Blande addisjon/multiplikasjon av eksponenter
- Glemme en variabel i uttrykk med flere variabler
- Forveksle negativ eksponent med negativt tall

### Steg 5: Oppdater exercise-blokken

Behold den eksisterende `exercise`-blokken men legg til `questions`-arrayet. Det eksisterende spørsmålet (fra `task` og `options`) blir `questions[0]`.

```typescript
// FØR (single question):
exercise: {
  id: 'kap-n-quiz1',
  number: 'Quiz 1',
  type: 'multiple-choice',
  task: 'Hva blir $(3x)^2$?',
  options: [
    { id: 'a', text: '$3x^2$', isCorrect: false },
    { id: 'b', text: '$9x^2$', isCorrect: true },
    ...
  ],
  solution: '...',
}

// ETTER (sequential quiz):
exercise: {
  id: 'kap-n-quiz1',
  number: 'Quiz 1',
  type: 'multiple-choice',
  task: 'Test deg selv på potens av produkt:',
  options: [{ id: 'a', text: '$9x^2$', isCorrect: true }],  // dummy
  questions: [
    {
      id: 'kap-n-quiz1-q0',
      task: 'Hva blir $(3x)^2$?',                            // ← original spørsmål
      options: [ ... ],
      solution: '...',
    },
    {
      id: 'kap-n-quiz1-q1',
      task: 'Hva blir $(2a)^3$?',                            // ← nytt spørsmål
      options: [ ... ],
      solution: '...',
    },
    // ...
  ],
}
```

**Merk:** Toppnivå `task` endres til en kort beskrivelse av quizens tema (f.eks. "Test deg selv på divisjon og negative eksponenter:"). Toppnivå `options` beholdes med ett dummy-alternativ for bakoverkompatibilitet.

### Steg 6: Verifiser

```bash
npx tsc --noEmit
```

Sjekk at TypeScript kompilerer uten feil.

## Sjekkliste

- [ ] Alle quizer i kapittelet er utvidet
- [ ] Hvert spørsmål tester et distinkt konsept fra seksjonen
- [ ] Antall spørsmål matcher kompleksiteten i seksjonen (ikke tvunget til et fast antall)
- [ ] Eksisterende spørsmål beholdt som `questions[0]`
- [ ] Progressiv vanskelighetsgrad innen hver quiz
- [ ] Plausible feilsvar basert på vanlige misforståelser
- [ ] Solution forklarer utregningen steg for steg
- [ ] Riktig ID-format (`quiz1-q0`, `quiz1-q1`, ...)
- [ ] Toppnivå `task` endret til quiz-tema-beskrivelse
- [ ] TypeScript kompilerer uten feil

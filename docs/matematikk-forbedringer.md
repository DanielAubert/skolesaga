# Matematikk 8/9/10: Forbedringer til lærebokstandard

## Sammendrag

Bøkene har solid faglig fundament, korrekt matematikk og unik digital profil (narrativer, programmering). Men de mangler oppgavemengde (~80% for lite) og illustrasjoner (~90% for lite) sammenliknet med tradisjonelle lærebøker som Faktor, Maximum og Grunntall.

---

## 1. Repetisjonsoppgaver i alle kapitler (KRITISK)

### Hva

Hvert kapittel skal få en **sammenleggbar seksjon** med repetisjonsoppgaver nederst, etter oppsummeringen. Formatet finnes allerede i 1T-boken (se `textbook-content-1t.ts`, kapittel 1.3).

### Format

```typescript
// ========== REPETISJONSOPPGAVER ==========
{
  id: '[kap-id]-repetisjon',
  type: 'collapsible',
  title: 'Repetisjonsoppgaver',
  buttonText: 'Vis repetisjonsoppgaver',
  content: [
    {
      id: '[kap-id]-rep-1',
      type: 'exercise',
      exercise: {
        id: '[kap-id]-rep-ex-1',
        number: 'R1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$...$', solution: '$...$' },
          { label: 'b', task: '$...$', solution: '$...$' },
          // 4-8 deloppgaver per R-oppgave
        ],
        solution: '...',
        hideInlineSolution: true,
        hints: ['...'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // R2, R3, ... R5-R8 per kapittel
  ],
},
```

### Mengde per kapittel

| Vanskelighetsgrad | Antall R-oppgaver | Deloppgaver per stk | Totalt deloppgaver |
|---|---|---|---|
| Lett | 2-3 | 6 | 12-18 |
| Medium | 2-3 | 4-6 | 8-18 |
| Vanskelig | 1-2 | 3-4 | 3-8 |
| **Sum per kapittel** | **5-8** | | **~30-40 deloppgaver** |

### Innhold i repetisjonsoppgavene

- **R1-R3 (lett):** Ren prosedyretrening. Samme type oppgave som i kapittelet, men nye tall. Mange deloppgaver for automatisering.
- **R4-R5 (medium):** Blanding av ferdigheter fra kapittelet. Krever at eleven velger riktig metode.
- **R6-R8 (vanskelig):** Sammensatte oppgaver som kombinerer stoff fra dette og tidligere kapitler. Tekstoppgaver med kontekst.

### Omfang

| Bok | Kapitler | R-oppgaver å lage | Estimerte deloppgaver |
|---|---|---|---|
| Mat 8 | 40 | ~240 | ~1400 |
| Mat 9 | 40 | ~240 | ~1400 |
| Mat 10 | 39 | ~235 | ~1380 |
| **Totalt** | **119** | **~715** | **~4180** |

---

## 2. Oppsummering i alle kapitler (HØY)

### Hva

Mange kapitler mangler oppsummeringsblokk. Alle skal ha en.

### Status

| Bok | Kapitler med oppsummering | Mangler |
|---|---|---|
| Mat 8 (base kap 1-5) | 3 av 20 | **17** |
| Mat 8 (nye kap 6-11) | 20 av 20 | 0 |
| Mat 9 (base kap 1-6) | 0 av 18 | **18** |
| Mat 9 (nye kap 7-12) | 15 av 22 | **7** (del7) |
| Mat 10 (base) | Varierende | **~10-15** |
| Mat 10 (nye) | De fleste | **~5** |
| **Totalt mangler** | | **~50-57 kapitler** |

### Format

```typescript
{
  id: '[kap-id]-oppsummering',
  type: 'text',
  content: `## Oppsummering

I dette kapittelet har du lært:

- **[Punkt 1]**: [Kort forklaring]
- **[Punkt 2]**: [Kort forklaring]
- **[Punkt 3]**: [Kort forklaring]

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| [Begrep 1] | [Definisjon] |
| [Begrep 2] | [Definisjon] |

### Viktige formler
- $[formel 1]$
- $[formel 2]$`,
},
```

---

## 3. Flere oppgavetyper i eksisterende kapitler (HØY)

### Hva mangler

Kapitlene har nesten bare `type: 'classic'`-oppgaver. Tradisjonelle bøker har mange flere typer.

### Oppgavetyper å legge til

#### a) «Finn feilen»-oppgaver
Eleven skal finne og rette feil i et utregningseksempel.
```typescript
{
  type: 'exercise',
  exercise: {
    type: 'classic',
    task: 'Finn feilen i utregningen og forklar hva som er galt:\n\n$3(x + 2) = 3x + 2$',
    solution: 'Feilen er at 3 ikke er ganget med 2. Riktig: $3(x + 2) = 3x + 6$',
  },
}
```

#### b) Sant/usant-oppgaver
```typescript
{
  type: 'exercise',
  exercise: {
    type: 'multiple-choice',
    task: 'Er påstanden sann eller usann?',
    questions: [
      { text: '$(-3)^2 = -9$', options: ['Sann', 'Usann'], correctAnswer: 1 },
      { text: '$\\sqrt{16} = \\pm 4$', options: ['Sann', 'Usann'], correctAnswer: 1 },
    ],
  },
}
```

#### c) Sorteringsoppgaver
«Sorter tallene fra minst til størst», «Koble riktig uttrykk med forenkling».

#### d) Åpne undersøkelsesoppgaver
```
Velg tre forskjellige trekanter. Mål vinklene i alle tre.
Hva legger du merke til? Formuler en regel.
```

#### e) Drøftingsoppgaver
```
Lisa sier at $0,\overline{9} < 1$. Erik sier at $0,\overline{9} = 1$.
Hvem har rett? Begrunn svaret ditt.
```

### Mengde å legge til

Legg til 2-4 varierte oppgaver i selve innholdsdelen per kapittel (ikke bare repetisjonsoppgavene). Fokuser på:
- 1 «finn feilen» eller sant/usant
- 1 åpen/drøftingsoppgave
- 1-2 kontekstoppgaver (hverdagsmatematikk)

---

## 4. Virkelighetsforankring og kontekst (MEDIUM)

### Hva mangler

Kapitlene har for lite kobling til virkeligheten. Tradisjonelle bøker har 3-5 praktiske scenarioer per kapittel.

### Hva som skal legges til

#### «Matematikk i praksis»-bokser
Korte tekstblokker (type: 'text') som viser hvor matematikken brukes i virkeligheten.

```typescript
{
  id: '[kap-id]-praksis',
  type: 'text',
  content: `### Matematikk i praksis: GPS og koordinater

Visste du at GPS-systemet bruker koordinater for å bestemme posisjonen din?
Hver posisjon på jorda beskrives med to tall: breddegrad og lengdegrad.
Oslo ligger på omtrent $(59,9°N,\\ 10,7°Ø)$.`,
},
```

#### Forslag per emne

| Emne | Kontekster å bruke |
|------|-------------------|
| Tall og regning | Priser, valuta, oppskrifter, sport |
| Algebra | Mobilabonnement, strømpris, billettpriser |
| Geometri | Arkitektur, idrettsbaner, emballasje, kart |
| Funksjoner | Temperatur, fart, befolkningsvekst |
| Statistikk | Valgresultater, idrettsstatistikk, været |
| Økonomi | Sparing, lån, budsjett, rabatter |
| Sannsynlighet | Terning, kort, lotteri, medisinsk testing |
| Programmering | Spill, simulering, automatisering |

#### Mengde
2-3 praksisbokser per kapittel, plassert mellom teoriblokker der de passer naturlig.

---

## 5. Historisk og kulturell kontekst (MEDIUM)

### Hva mangler

Ingen «Visste du at?»-bokser. Tradisjonelle bøker har 1-2 per kapittel.

### Format

```typescript
{
  id: '[kap-id]-historie',
  type: 'text',
  content: `### Visste du at...?

**Pytagoras** (ca. 570-495 f.Kr.) var en gresk matematiker og filosof.
Selv om setningen bærer hans navn, kjente babylonerne til sammenhengen
mellom katetene og hypotenusen over 1000 år tidligere!`,
},
```

### Eksempler å inkludere

| Kapittel | Historisk kontekst |
|----------|-------------------|
| Negative tall | Kineserne brukte negative tall 200 f.Kr. |
| Desimaltall | Al-Khwarizmi og desimalsystemet |
| Algebra | Al-jabr — opprinnelsen til ordet algebra |
| Pytagoras | Babylonske leirtavler med pytagoreiske tripler |
| Primtall | Eratosthenes' sil, største kjente primtall |
| Sannsynlighet | Pascal og Fermat, terningspillet (1654) |
| Funksjoner | Euler og funksjonsbegrepet |
| Pi | Arkimedes' tilnærming, pi-dag |
| Statistikk | Florence Nightingale og datavisualisering |
| Programmering | Ada Lovelace, verdens første programmerer |

---

## 6. Eksamensoppgaver for Mat 10 (HØY — eksamensår)

### Hva mangler

10. klasse er eksamensår. Tradisjonelle bøker integrerer tidligere eksamensoppgaver i hvert kapittel. Vår bok har kun 20 oppgaver i kapittel 12.

### Plan

#### a) Integrer eksamensoppgaver i hvert kapittel
Legg til 2-3 tidligere eksamensoppgaver per kapittel, merket tydelig:

```typescript
{
  id: '10-3-1-eksamen-1',
  type: 'exercise',
  exercise: {
    number: 'E1',
    type: 'classic',
    task: '**Eksamensoppgave (V2023, Del 1, oppg. 3)**\n\nEn lineær funksjon er gitt ved $f(x) = 2x - 3$.\n\na) Tegn grafen til $f$ i et koordinatsystem.\nb) Bestem nullpunktet til $f$.',
    solution: '...',
    difficulty: 'medium',
  },
},
```

#### b) Utvid kapittel 12 (Eksamensforberedelse)
- Legg til 30-40 eksamensoppgaver (mot nåværende 20)
- Sorter etter emne og vanskelighetsgrad
- Inkluder oppgaver fra både Del 1 (uten hjelpemidler) og Del 2 (med hjelpemidler)

#### Mengde
| Kilde | Antall oppgaver |
|-------|----------------|
| Per ordinært kapittel (2-3 stk × 10 kap) | ~25 |
| Utvidet kap 12 | ~30 |
| **Totalt** | **~55 eksamensoppgaver** |

---

## 7. Illustrasjoner og diagrammer (KRITISK — men separat prosjekt)

### Status

Bøkene har nesten ingen matematiske diagrammer. Dette er den største svakheten, men krever et annet verktøy enn ren tekstgenerering.

### Hva som trengs

| Type | Eksempler | Antall per bok |
|------|-----------|----------------|
| Talllinjer | Negative tall, brøk, desimaltall | 10-15 |
| Koordinatsystemer | Funksjonsgrafer, punktplotting | 20-30 |
| Geometriske figurer | Trekanter, firkanter, sirkler, vinkler | 25-40 |
| 3D-figurer | Prisme, sylinder, kjegle, kule | 10-15 |
| Statistikkdiagrammer | Søyle, sektor, boksplott, histogram | 10-15 |
| Sannsynlighetstrær | Trestrukturer, venndiagram | 5-10 |
| Enhetstrapper | Omgjøring mellom enheter | 3-5 |
| **Totalt per bok** | | **~80-130** |

### Mulige løsninger

1. **SVG-filer** generert med script (TikZ → SVG)
2. **GeoGebra-eksporter** for interaktive figurer
3. **Mermaid/LaTeX** for enkle diagrammer
4. **Bilde-generering** med AI (DALL-E, Midjourney) for konseptillustrasjoner

> **Merk:** Illustrasjoner er et eget prosjekt som krever verktøy utenfor ren kodeskriving. Bør planlegges separat.

---

## 8. Formellister per seksjon (MEDIUM)

### Hva mangler

Tradisjonelle bøker har oppslagssider med alle formler. Våre bøker har ingen.

### Plan

Legg til en formelblokk i oppsummeringen for matematikktunge kapitler:

```markdown
### Viktige formler

| Formel | Beskrivelse |
|--------|-------------|
| $a^m \cdot a^n = a^{m+n}$ | Multiplikasjon av potenser med samme grunntall |
| $\frac{a^m}{a^n} = a^{m-n}$ | Divisjon av potenser med samme grunntall |
| $(a^m)^n = a^{m \cdot n}$ | Potens av potens |
```

Gjelder spesielt:
- Potensregler
- Areal- og volumformler
- Pytagoras' setning
- Lineære funksjoner ($y = ax + b$)
- Prosentregning
- Sannsynlighet
- Statistiske mål

---

## 9. «Prøv selv»-inline-oppgaver (LAV-MEDIUM)

### Hva

Tradisjonelle bøker har små øvingsoppgaver innimellom teoriblokkene som eleven kan prøve umiddelbart etter å ha lest en definisjon.

### Format

Disse kan legges som enkle `type: 'exercise'`-blokker med `difficulty: 'lett'` rett etter en definisjon — dette gjøres allerede i mange kapitler. Vurder å legge til 1-2 ekstra der det mangler, spesielt i base-kapitlene (1-6) som ofte har teori → teori → teori → mange oppgaver til slutt i stedet for det foretrukne teori → øving → teori → øving-mønsteret.

---

## Prioritert gjennomføringsplan

### Fase 1: Repetisjonsoppgaver (størst effekt) — FULLFØRT

| Steg | Oppgave | Omfang | Status |
|------|---------|--------|--------|
| 1a | Legg til repetisjonsoppgaver i Mat 8 (40 kapitler) | 240 R-oppgaver (6 per kapittel) | FERDIG |
| 1b | Legg til repetisjonsoppgaver i Mat 9 (40 kapitler) | 240 R-oppgaver (6 per kapittel) | FERDIG |
| 1c | Legg til repetisjonsoppgaver i Mat 10 (40 kapitler) | 240 R-oppgaver (6 per kapittel) | FERDIG |

**Resultat:** 720 repetisjonsoppgaver (R1-R6) med ~4300 deloppgaver fordelt på 120 kapitler.
Alle oppgaver har `hideInlineSolution: true`, hints, og støtte for opplasting/tegning.
Verifisert med `npx tsc --noEmit` — 0 feil.

### Fase 2: Oppsummering og formler
| Steg | Oppgave | Omfang |
|------|---------|--------|
| 2a | Legg til oppsummering i Mat 8 base-kapitler (17 stk) | 17 blokker |
| 2b | Legg til oppsummering i Mat 9 base-kapitler (18 stk) | 18 blokker |
| 2c | Legg til oppsummering i Mat 10 kapitler som mangler | ~15 blokker |
| 2d | Legg til formellister i relevante oppsummeringer | ~40 tillegg |

### Fase 3: Varierte oppgavetyper
| Steg | Oppgave | Omfang |
|------|---------|--------|
| 3a | Legg til 2-3 varierte oppgaver per kapittel (alle 3 bøker) | ~350 oppgaver |
| 3b | Finn feilen, sant/usant, drøfting, undersøkelse | Blanding |

### Fase 4: Kontekst og forankring
| Steg | Oppgave | Omfang |
|------|---------|--------|
| 4a | Legg til «Matematikk i praksis»-bokser | ~200 bokser |
| 4b | Legg til «Visste du at?»-historiske bokser | ~60 bokser |
| 4c | Integrer eksamensoppgaver i Mat 10 | ~55 oppgaver |

### Fase 5: Illustrasjoner (separat prosjekt)
| Steg | Oppgave | Omfang |
|------|---------|--------|
| 5a | Planlegg illustrasjonsbehov per kapittel | Liste |
| 5b | Generer/tegn SVG-figurer | ~300 figurer |

---

## Totalt estimat

| Kategori | Antall elementer | Prioritet |
|----------|-----------------|-----------|
| Repetisjonsoppgaver | 720 R-oppgaver (~4300 deloppgaver) | FULLFØRT |
| Oppsummeringer | ~50 blokker | HØY |
| Varierte oppgaver | ~350 oppgaver | HØY |
| Eksamensoppgaver (Mat 10) | ~55 oppgaver | HØY |
| Praksisbokser | ~200 bokser | MEDIUM |
| Historiebokser | ~60 bokser | MEDIUM |
| Formellister | ~40 tillegg | MEDIUM |
| Illustrasjoner | ~300 figurer | KRITISK (separat) |

---

## Referansefiler

| Fil | Innhold |
|-----|---------|
| `textbook-content-1t.ts` kap 1.3 (linje 2489-2694) | Referanse for repetisjonsoppgaver-format |
| `textbook-content-matematikk-8-del7.ts` | Referanse for nyere kapittelstruktur |
| `textbook-content-matematikk-9-del8.ts` | Referanse for oppsummering-format |
| `textbook-courses-matte.ts` | All kapittelmeta for Mat 8/9/10 |

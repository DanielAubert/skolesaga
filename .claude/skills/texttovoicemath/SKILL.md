# Text-to-Voice Math: Matematisk uttale-konvertering og lydbok-pipeline

Denne skillen definerer regler for hvordan LaTeX-matematikk skal konverteres til naturlig norsk tale for lydbok-generering, og den fulle pipelinen for å generere, segmentere og integrere lyd i narrative kapitler.

## Bruk

```
/texttovoicemath [kapittel-id]
```

Uten argument: Vis gjeldende konverteringsregler.
Med argument: Konverter kapittelet til tale-format, generer lyd, segmenter og legg til i kapittelet.

## Full pipeline

### Oversikt

```
1. Konverter → Lag tale-tekst i docs/ med /texttovoicemath-reglene
2. Generer  → Send til ElevenLabs, kutt intro, lag master-fil
3. Segmenter → Finn "Slutt på del"-markører, splitt i deler
4. Integrer → Legg til audio-blokker i kapittelfilen
```

### Steg 1: Konverter kapittel til tale-tekst

Les det narrative kapittelet og konverter ALL matematikk til norsk tale. Lagre i `docs/`:

```
docs/{fag}-uttaletest-{kapitler}.md
```

**Format:**
- Hver seksjon + intro mellom to quizer = én "del"
- Sett inn `... Slutt på del N. ...` etter hver dels innhold
- IKKE inkluder quiz-spørsmålene — bare tekst-seksjonene

**Eksempel:**
```markdown
## Kapittel 1.1: Fortegn og regnerekkefølge

### Del 1: Intro og addisjon/subtraksjon
[Konvertert tekst fra intro + section1]
... Slutt på del 1. ...

### Del 2: Multiplikasjon og divisjon
[Konvertert tekst fra section2]
... Slutt på del 2. ...

[...osv...]

### Del 6: Oppsummering
[Konvertert tekst fra summary]
... Slutt på del 6. ...
```

### Steg 2: Generer master-lydfil

Bruk `scripts/generate-{fag}-{kap}-audio.ts` (se mønster i `generate-1t-kap1-audio.ts`):

1. **Les tale-teksten** fra docs-filen
2. **Splitt i chunks** < 4900 tegn (plass til norsk intro-prefix)
3. **Send til ElevenLabs** med norsk intro-prefix for å tvinge norsk uttale
4. **Kutt intro** fra hver chunk med `silencedetect` (finn lengste stillhet mellom 4-12s)
5. **Sett sammen** rene chunks til master-fil i `public/audio/{fag}/_master/`

**Nøkkelparametere:**
- Voice: `TX3LPaxmHKxFdv7VOQHJ` (Liam)
- Model: `eleven_v3`
- Language: `no`
- Norsk intro: `"Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n"`
- Intro-kutting: `silencedetect=noise=-30dB:d=0.3`, finn lengste stillhet 4-12s, kutt ved `silence_end - 0.2s`

### Steg 3: Segmenter master-filen

Bruk `scripts/segment-{fag}-{kap}.py` (se mønster i `segment-1t-kap1.py`):

1. **Les tale-teksten** og finn tekstposisjon for hver "Slutt på del N" markør
2. **Estimer tidspunkt**: `estimated_time = (char_pos / total_chars) * total_duration`
3. **Kjør silencedetect** på master-filen
4. **Finn lengste stillhet** i ±20s vindu rundt hvert estimat (min 0.5s varighet)
5. **Splitt**: `seg_end = silence_start + 0.3s`, `seg_start = silence_end - 0.2s`
6. **Lagre segmenter** i `public/audio/{fag}/{prefix}-narrativ-del{N}.mp3`

**VIKTIG:** Bruk IKKE Whisper for å finne markørene — Whisper tiny gir for mange falske positiver (matcher "sluttparentes" osv.). Tekstposisjon-estimering er mye mer pålitelig.

### Steg 4: Legg til audio-blokker i kapittelet

Sett inn `type: 'audio'`-blokker FORAN tilhørende tekst-seksjoner:

```typescript
{
  id: '{prefix}-n-audio-{N}',
  type: 'audio',
  title: N === totalDeler ? 'Lytt til oppsummeringen' : 'Lytt til denne delen',
  src: '/audio/{fag}/{prefix}-narrativ-del{N}.mp3',
  description: N === 1 ? 'Lydfil som leser opp teksten frem til første quiz.'
    : N === totalDeler ? 'Lydfil som leser opp oppsummeringen.'
    : 'Lydfil som leser opp teksten frem til neste quiz.',
},
```

**Plassering i content-arrayet:**
```
audio-1 → intro → section1 → quiz1
audio-2 → section2 → quiz2
audio-3 → section3 → quiz3
...
audio-N → summary
```

Audio-blokker skal ALLTID gå FØR tekst-seksjonene (ikke etter).

## Konverteringsregler

### Likhetstegn og relasjoner

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `=` | "ilime" | varierende (se under) |
| `\neq` | — | "er ikke lik" |
| `\approx` | — | "er omtrent lik" |
| `\leq` | — | "er mindre enn eller lik" |
| `\geq` | — | "er større enn eller lik" |
| `<` | — | "er mindre enn" |
| `>` | — | "er større enn" |

#### Muntlig variasjon av likhetstegn

For å få talen til å høres mer naturlig og menneskelig ut, skal likhetstegnet (`=`) **varieres** mellom flere formuleringer:

| Variant | Når den passer |
|---------|---------------|
| ", som er lik, " | Standard, trygt valg for de fleste likhetstegn |
| ", som altså er lik, " | Når resultatet følger logisk fra forrige steg, gjerne midt i en utregning |
| ", som da blir, " | Når man beregner/forenkler og kommer frem til et resultat |
| ", altså, " | Kort og muntlig, passer for enkle forenklinger og sluttresultater |
| ", det vil si, " | Når man omformulerer eller forklarer hva noe betyr |
| ", lik, " | Kort og nøytralt, passer i kjeder av likhetstegn eller formelle uttrykk |

**Implementasjon:** `mathToNorwegian()` skal IKKE håndtere likhetstegn. I stedet:

1. `mathToNorwegian()` erstatter `=` med en plassholder: `[EQ]`
2. Etter at `extractFullText()` har bygget opp hele teksten, går AI-en gjennom teksten og erstatter **hver** `[EQ]` manuelt med den varianten som passer best i konteksten
3. AI-en skriver disse erstatningene direkte i genererings-skriptet som en post-prosessering

Målet er at talen skal høres ut som en lærer som forklarer ved tavla – naturlig, variert og ikke robotaktig. Unngå å bruke samme variant to ganger på rad.

### Potenser

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `x^2` | "x kvadrert" | "x i andre" |
| `x^3` | "x kubikk" | "x i tredje" |
| `x^4` | — | "x i fjerde" |
| `x^5` | — | "x i femte" |
| `x^n` | — | "x opphøyd i n" |
| `x^{n+m}` | — | "x opphøyd i n pluss m" |
| `x^{1+2}` | — | "x opphøyd i 1 pluss 2" |

### Parenteser

| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `(` | (ingenting) | "startparentes" |
| `)` | (ingenting) | "sluttparentes" |
| `\left(` | (ingenting) | "startparentes" |
| `\right)` | (ingenting) | "sluttparentes" |

### Implisitt multiplikasjon

I matematikk er gangetegnet ofte usynlig. For tale må **alle** usynlige gangetegn leses opp eksplisitt. Hovedregelen: når to faktorer står inntil hverandre uten operator, sett inn "ganger".

#### Tall/bokstav foran parentes
| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `3(x+2)` | "tre x pluss to" | "3 ganger startparentes x pluss 2 sluttparentes" |
| `2(x-3)` | "to x minus tre" | "2 ganger startparentes x minus 3 sluttparentes" |
| `-3(2x-2)` | "minus tre to x minus to" | "minus 3 ganger startparentes 2x minus 2 sluttparentes" |
| `x(x+3)` | "x x pluss tre" | "x ganger startparentes x pluss 3 sluttparentes" |
| `xy(x^2+y+2)` | — | "x y ganger startparentes x i andre pluss y pluss 2 sluttparentes" |

#### Tall foran bokstav (koeffisienter)
| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `3x` | "tre x" (OK for enkle tilfeller) | "3 x" (OK, trenger ikke "ganger" her) |
| `2xy` | "to x y" | "2 x y" (OK) |

**NB:** For enkle koeffisienter som `3x` trenger vi IKKE sette inn "ganger" – det høres unaturlig ut. Men for `3x^2` bør det leses som "3 x i andre".

#### Parentes foran parentes
| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `(x+2)(x+3)` | "x pluss to x pluss tre" | "startparentes x pluss 2 sluttparentes ganger startparentes x pluss 3 sluttparentes" |
| `(a+b)(c+d)` | — | "startparentes a pluss b sluttparentes ganger startparentes c pluss d sluttparentes" |

#### Sluttparentes foran tall/bokstav
| LaTeX/tekst | Feil uttale | Riktig uttale |
|-------------|-------------|---------------|
| `(x+2)x` | — | "startparentes x pluss 2 sluttparentes ganger x" |
| `(x-3) \cdot 3` | — | "startparentes x minus 3 sluttparentes ganger 3" (allerede OK med `\cdot`) |

### Operasjoner

| LaTeX | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `\cdot` | "ganger" | "ganger" (OK) |
| `\times` | — | "ganger" |
| `\frac{a}{b}` | — | "a delt på b" |
| `\sqrt{x}` | — | "kvadratroten av x" |
| `\pm` | — | "pluss minus" |
| `-` (operator) | (utelates) | "minus" |
| `+` (operator) | (OK som regel) | "pluss" |

### Minustegn

ElevenLabs kan utelate minustegnet (`-`) fra talen, spesielt som operator mellom ledd. **Løsning:** Erstatt `-` med ordet "minus" i den konverterte teksten.

| Tekst | Feil uttale | Riktig uttale |
|-------|-------------|---------------|
| `3x - 2` | "3 x 2" | "3 x minus 2" |
| `x^2 - 5x + 6` | "x i andre 5x 6" | "x i andre minus 5x pluss 6" |
| `-3` (negativt tall) | (utelates/feil) | "minus 3" |

**NB:** Minustegnet erstattes *etter* at LaTeX-kommandoer er konvertert, men *før* parenteser konverteres til tale. Regelen må håndtere både operatoren (`a - b`) og negativt fortegn (`-a`).

## Implementasjon

Disse reglene implementeres i `stripMarkdown`-funksjonen som brukes i lydbok-skript. Her er kjernekonverteringene:

```typescript
function mathToNorwegian(text: string): string {
  return text
    // Likhetstegn og relasjoner
    .replace(/\\approx/g, ' er omtrent lik ')
    .replace(/\\neq/g, ' er ikke lik ')
    .replace(/\\leq/g, ' er mindre enn eller lik ')
    .replace(/\\geq/g, ' er større enn eller lik ')
    .replace(/</g, ' er mindre enn ')
    .replace(/>/g, ' er større enn ')
    // Likhetstegn → plassholder (AI erstatter manuelt etterpå)
    .replace(/=/g, ' [EQ] ')

    // Potenser: x^{uttrykk} og x^n
    // NB: Alle erstatninger har trailing space for å unngå "i andrey" → "i andre y"
    .replace(/\^{(\d+)\s*\+\s*(\d+)}/g, ' opphøyd i $1 pluss $2 ')
    .replace(/\^{([^}]+)}/g, (_, exp) => {
      if (exp === '2') return ' i andre ';
      if (exp === '3') return ' i tredje ';
      if (exp === '4') return ' i fjerde ';
      if (exp === '5') return ' i femte ';
      return ` opphøyd i ${exp} `;
    })
    .replace(/\^2(?!\d)/g, ' i andre ')
    .replace(/\^3(?!\d)/g, ' i tredje ')
    .replace(/\^4(?!\d)/g, ' i fjerde ')
    .replace(/\^5(?!\d)/g, ' i femte ')
    .replace(/\^(\d+)/g, ' opphøyd i $1 ')
    .replace(/\^([a-z])/g, ' opphøyd i $1 ')

    // Parenteser (konverter først, så legger vi inn ganger mellom dem)
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')

    // Implisitt multiplikasjon: tall/bokstav foran parentes
    .replace(/(\d)\(/g, '$1 ganger (')
    .replace(/([a-zA-Z])\(/g, '$1 ganger (')

    // Implisitt multiplikasjon: sluttparentes foran startparentes
    .replace(/\)\(/g, ') ganger (')

    // Implisitt multiplikasjon: sluttparentes foran tall/bokstav
    .replace(/\)(\d)/g, ') ganger $1')
    .replace(/\)([a-zA-Z])/g, ') ganger $1')

    // Konverter parenteser til tale
    .replace(/\(/g, 'startparentes ')
    .replace(/\)/g, ' sluttparentes')

    // Brøk
    .replace(/\\frac{([^}]+)}{([^}]+)}/g, '$1 delt på $2')

    // Kvadratrot
    .replace(/\\sqrt{([^}]+)}/g, 'kvadratroten av $1')

    // Andre LaTeX-kommandoer
    .replace(/\\cdot/g, ' ganger ')
    .replace(/\\times/g, ' ganger ')
    .replace(/\\pm/g, ' pluss minus ')

    // Pluss og minus som operatorer (etter LaTeX-konvertering)
    .replace(/\s*-\s*/g, ' minus ')
    .replace(/\s*\+\s*/g, ' pluss ')

    // Rydd opp
    .replace(/\s{2,}/g, ' ')
    .trim();
}
```

## Kjente uttalefeil i ElevenLabs

### Minustegn utelates fra talen
ElevenLabs kan hoppe over minustegnet (`-`), spesielt når det står som operator mellom matematiske ledd. **Løsning:** Erstatt `-` med ordet "minus" eksplisitt i teksten som sendes til API-et. Pluss (`+`) bør også erstattes med "pluss" for konsistens.

```typescript
// Etter LaTeX-konvertering, erstatt +/- med ord
.replace(/\s*-\s*/g, ' minus ')
.replace(/\s*\+\s*/g, ' pluss ')
```

**NB:** Disse reglene må komme *etter* alle LaTeX-kommandoer er konvertert (slik at `\pm`, `\neq` osv. allerede er håndtert), men *før* parenteser konverteres til tale.

### Bokstaven "x" leses feil
ElevenLabs kan feiltolke enkeltstående `x` som et kinesisk/fremmedspråklig tegn ("kang"). **Løsning:**

1. **x med tall ved siden av** (f.eks. `3x`, `5x`, `8x`): Skriv sammenhengende uten mellomrom. ElevenLabs leser `3x` korrekt som "tre x".
2. **x alene** (uten tall/bokstav inntil): Bruk stor `X`. ElevenLabs leser `X` korrekt.

```typescript
// Etter all annen LaTeX-konvertering, fiks "x"-uttale
// Enkeltstående x (med ordgrenser) → stor X
.replace(/\bx\b/g, 'X')
```

**NB:** Dette må gjøres *etter* at LaTeX er konvertert. Koeffisienter som `3x` trenger ingen endring — de leses riktig sammenhengende.

**Tidligere forsøk som IKKE fungerte:**
- Bare `x` alene → ElevenLabs leser "kang" eller lignende
- `eks` → ElevenLabs stammer: "e ek eks"
- `iks` → Ikke korrekt norsk uttale

## Merknader

- Disse reglene gjelder kun for **lydbok-generering**, ikke for visuell visning
- Reglene brukes i `stripMarkdown`-funksjonen i skriptene som genererer lydbok-tekst
- Listen utvides etter hvert som nye problemer oppdages
- Test alltid med ElevenLabs etter endringer for å verifisere at uttalen er naturlig

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
   1a. Konverter LaTeX → norsk tekst (mathToNorwegian-reglene)
   1b. Erstatt [EQ]-plassholdere med varierende likhetstegn-formuleringer
   1c. Kjør applyNumberFixes() — erstatt problematiske tall med norske ord
   1d. Kjør applyPronunciationFixes() — fiks ord ElevenLabs uttaler feil
   1e. Lagre i docs/{fag}-uttaletest-{kapitler}.md
2. Generer  → Send til ElevenLabs, kutt intro, lag master-fil
3. Segmenter → Finn "Slutt på del"-markører, splitt i deler
4. Integrer → Legg til audio-blokker i kapittelfilen
5. Verifiser → Whisper QA-transkribering for å fange uttalefeil
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

### Steg 5: Verifiser med Whisper (QA)

Etter at master-filen er generert (Steg 2), kjør en automatisk Whisper-transkribering for å fange uttalefeil:

1. Transkriber master-filen med Whisper `small` (norsk):
   ```bash
   python3 -c "
   import whisper
   model = whisper.load_model('small')
   result = model.transcribe('public/audio/{fag}/_master/{prefix}-narrativ-full-master.mp3', language='no')
   with open('/tmp/{prefix}-whisper-qa.txt', 'w') as f:
       for seg in result['segments']:
           f.write(f'[{seg[\"start\"]:.1f}-{seg[\"end\"]:.1f}] {seg[\"text\"].strip()}\n')
   "
   ```

2. Sammenlign transkripsjonen mot originalteksten:
   - Sjekk for systematiske feil (samme ord feil >2 ganger)
   - Regenerer master BARE for de aktuelle kapitlene om kritiske feil finnes

3. Akseptabel feilrate: <5% av ord bør være feil. Whisper selv har ~3% feilrate,
   så noen "feil" er Whisper-transkripsjonen, ikke ElevenLabs.

## Sjekkliste for lydbok-generering

- [ ] LaTeX konvertert til norsk tale (mathToNorwegian)
- [ ] [EQ]-plassholdere erstattet med varierende formuleringer
- [ ] Problematiske tall konvertert til norske ord (applyNumberFixes)
- [ ] Uttaleordbok-fiksene kjørt (applyPronunciationFixes)
- [ ] Tekst lest gjennom for ukonvertert LaTeX/symboler
- [ ] Master-fil generert og segmentert
- [ ] Whisper QA kjørt — ingen nye systematiske feil
- [ ] Audio-blokker lagt til i kapittelfilen

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
    // --- Derivasjon (må komme FØR apostrof/annen prosessering) ---
    .replace(/(\w)''\s*\(/g, '$1 dobbeltderivert av (')  // f''(x)
    .replace(/(\w)'\s*\(/g, '$1 derivert av (')           // f'(x)

    // --- Trigonometriske funksjoner ---
    .replace(/\\sin\^{-1}/g, 'invers sinus av ')
    .replace(/\\cos\^{-1}/g, 'invers cosinus av ')
    .replace(/\\tan\^{-1}/g, 'invers tangens av ')
    .replace(/\\sin/g, 'sinus til ')
    .replace(/\\cos/g, 'cosinus til ')
    .replace(/\\tan/g, 'tangens til ')

    // --- Grenseverdi ---
    .replace(/\\lim_{([^}]+)\\to\s*([^}]+)}/g, 'grenseverdien når $1 går mot $2 av ')
    .replace(/\\lim/g, 'grenseverdien av ')

    // --- Summering ---
    .replace(/\\sum/g, 'summen av ')

    // --- Mengdenotasjon ---
    .replace(/\\mathbb{N}/g, 'de naturlige tallene N')
    .replace(/\\mathbb{Z}/g, 'de hele tallene Z')
    .replace(/\\mathbb{Q}/g, 'de rasjonale tallene Q')
    .replace(/\\mathbb{R}/g, 'de reelle tallene R')

    // --- Mengdeoperasjoner ---
    .replace(/\\subset/g, ' er en delmengde av ')
    .replace(/\\notin/g, ' tilhører ikke ')
    .replace(/\\in/g, ' tilhører ')
    .replace(/\\cup/g, ' union ')
    .replace(/\\cap/g, ' snitt ')
    .replace(/\\setminus/g, ' minus ')
    .replace(/\\emptyset/g, 'den tomme mengden')

    // --- Logikk og implikasjon ---
    .replace(/\\Rightarrow/g, ' medfører ')
    .replace(/\\neg\s*/g, 'ikke ')

    // --- Vinkler ---
    .replace(/\\angle/g, 'vinkel ')

    // --- Spesialtegn ---
    .replace(/\\infty/g, 'uendelig')
    .replace(/\\pi/g, 'pi')
    .replace(/\\ln/g, 'den naturlige logaritmen av ')
    .replace(/\\ldots/g, 'og så videre')
    .replace(/\\cdots/g, 'og så videre')
    .replace(/°/g, ' grader')

    // --- N-te røtter ---
    .replace(/\\sqrt\[3\]{([^}]+)}/g, 'tredjeroten av $1')
    .replace(/\\sqrt\[4\]{([^}]+)}/g, 'fjerde roten av $1')
    .replace(/\\sqrt\[(\d+)\]{([^}]+)}/g, '$1-te roten av $2')

    // --- Tekst i formler ---
    .replace(/\\text{([^}]+)}/g, '$1')

    // --- Absoluttverdi ---
    .replace(/\|([^|]+)\|/g, 'absoluttverdi av $1')
    .replace(/\\mid/g, ' slik at ')

    // --- Desimaltall med norsk komma ---
    .replace(/(\d){,}(\d)/g, '$1 komma $2')

    // --- Subskript ---
    .replace(/_\{([^}]+)\}/g, '-$1')  // x_{n-1} → x-n-1
    .replace(/_(\d)/g, '-$1')          // x_1 → x-1
    .replace(/_([a-z])/g, '-$1')       // x_n → x-n

    // --- Likhetstegn og relasjoner ---
    .replace(/\\approx/g, ' er omtrent lik ')
    .replace(/\\neq/g, ' er ikke lik ')
    .replace(/\\leq/g, ' er mindre enn eller lik ')
    .replace(/\\geq/g, ' er større enn eller lik ')
    .replace(/</g, ' er mindre enn ')
    .replace(/>/g, ' er større enn ')
    .replace(/=/g, ' [EQ] ')

    // --- Potenser ---
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

    // --- Parenteser ---
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/(\d)\(/g, '$1 ganger (')
    .replace(/([a-zA-Z])\(/g, '$1 ganger (')
    .replace(/\)\(/g, ') ganger (')
    .replace(/\)(\d)/g, ') ganger $1')
    .replace(/\)([a-zA-Z])/g, ') ganger $1')
    .replace(/\(/g, 'startparentes ')
    .replace(/\)/g, ' sluttparentes')

    // --- Brøk ---
    .replace(/\\frac{([^}]+)}{([^}]+)}/g, '$1 delt på $2')

    // --- Kvadratrot (enkel, etter n-te røtter) ---
    .replace(/\\sqrt{([^}]+)}/g, 'kvadratroten av $1')

    // --- Operasjoner ---
    .replace(/\\cdot/g, ' ganger ')
    .replace(/\\times/g, ' ganger ')
    .replace(/\\pm/g, ' pluss minus ')

    // --- Pluss/minus som operatorer ---
    .replace(/\s*-\s*/g, ' minus ')
    .replace(/\s*\+\s*/g, ' pluss ')

    // --- Intervallnotasjon (\\langle, \\rangle, [ , ]) ---
    // Håndteres manuelt av AI ved konvertering

    // --- Rydd opp ---
    .replace(/\\\\/g, '')           // fjern gjenværende backslash
    .replace(/\$/g, '')             // fjern $-tegn
    .replace(/\s{2,}/g, ' ')
    .trim();
}
```

## Tall-uttale: Konverter siffer til norske ord

ElevenLabs v3 uttaler mange norske tall feil som siffer. Spesielt:
- **7** → leses som "suu" eller "tju"
- **9** → feil uttale
- **16** → feil
- **21, 22** → feil
- **Tall over 100** → "101" leses ikke som "hundre og en", "124" ikke som "hundre og tjuefire"

### Regel: Konverter problematiske tall til norske ord

Etter `mathToNorwegian()` og `[EQ]`-erstatning, kjør `applyNumberFixes()` som erstatter siffer med norske ord:

```typescript
function numberToNorwegian(n: number): string {
  const ones = ['null', 'en', 'to', 'tre', 'fire', 'fem', 'seks', 'syv', 'åtte', 'ni'];
  const teens = ['ti', 'elleve', 'tolv', 'tretten', 'fjorten', 'femten', 'seksten', 'sytten', 'atten', 'nitten'];
  const tens = ['', '', 'tjue', 'tretti', 'førti', 'femti', 'seksti', 'sytti', 'åtti', 'nitti'];

  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) {
    const t = Math.floor(n / 10);
    const o = n % 10;
    return o === 0 ? tens[t] : tens[t] + (o === 1 ? 'en' : ones[o]);
  }
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const rest = n % 100;
    const prefix = h === 1 ? 'hundre' : ones[h] + ' hundre';
    if (rest === 0) return prefix;
    return prefix + ' og ' + numberToNorwegian(rest);
  }
  if (n < 1000000) {
    const t = Math.floor(n / 1000);
    const rest = n % 1000;
    const prefix = t === 1 ? 'tusen' : numberToNorwegian(t) + ' tusen';
    if (rest === 0) return prefix;
    if (rest < 100) return prefix + ' og ' + numberToNorwegian(rest);
    return prefix + ' ' + numberToNorwegian(rest);
  }
  return String(n);
}

function shouldConvertNumber(n: number): boolean {
  const str = String(n);
  if (n > 100) return true;
  if (str.includes('7') || str.includes('9')) return true;
  if ([16, 21, 22].includes(n)) return true;
  return false;
}

function applyNumberFixes(text: string): string {
  return text.replace(/\b(\d+)\b/g, (match) => {
    const n = parseInt(match, 10);
    if (isNaN(n)) return match;
    if (shouldConvertNumber(n)) return numberToNorwegian(n);
    return match;
  });
}
```

### Hvilke tall konverteres?

| Kriterium | Eksempler |
|-----------|-----------|
| Inneholder siffer 7 | 7, 17, 27, 37, 47, 57, 67, 70-79, 87, 97 |
| Inneholder siffer 9 | 9, 19, 29, 39, 49, 59, 69, 79, 89, 90-99 |
| Spesifikke tall | 16, 21, 22 |
| Alle tall > 100 | 101, 124, 200, 700, 7000, osv. |
| Tall ≤ 100 uten 7/9 og ikke 16/21/22 | Beholdes som siffer (1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 18, 20, 23-26, 28, 30, osv.) |

### Plassering i pipeline

```
Steg 1c (NY): Kjør applyNumberFixes() på hele teksten
```

Kjøres ETTER `mathToNorwegian()` og `[EQ]`-erstatning, men FØR teksten sendes til ElevenLabs.

## Norsk uttaleordbok — ord ElevenLabs feiltolker

Disse ordene skal erstattes med fonetisk korrekte varianter i tale-teksten. Kjør `applyPronunciationFixes()` etter `mathToNorwegian()` og `[EQ]`-erstatning, men FØR teksten sendes til ElevenLabs.

| Originalord | Erstatning | Kommentar |
|-------------|------------|-----------|
| regner | reigner | "gn" → "ign" tvinger riktig uttale |
| regnerekkefølgen | reignerekkefølgen | Samme gn-fiks |
| fortegnene | for-tegnene | Bindestrek bryter opp feillesing |
| fortegn | for-tegn | Samme mønster |
| fjerde | fjerrde | Dobbel-r tvinger riktig uttale |
| kansellerer | kan-sellerer | Bindestrek |
| Termometeret | Terrmometeret | Dobbel-r hindrer engelsk uttale |
| nøyaktig | nøy-aktig | Bindestrek |

**Viktig:** Listen skal utvides etter hvert som nye feil oppdages. Hver gang en Whisper-QA avslører nye feilord, skal de legges til her.

```typescript
function applyPronunciationFixes(text: string): string {
  const fixes: Record<string, string> = {
    'regner': 'reigner',
    'regnerekkefølgen': 'reignerekkefølgen',
    'fortegnene': 'for-tegnene',
    'fortegn': 'for-tegn',
    'fjerde': 'fjerrde',
    'kansellerer': 'kan-sellerer',
    'Termometeret': 'Terrmometeret',
    'termometeret': 'terrmometeret',
    'nøyaktig': 'nøy-aktig',
  };

  for (const [original, replacement] of Object.entries(fixes)) {
    text = text.replace(new RegExp(original, 'gi'), replacement);
  }
  return text;
}
```

### Plassering i pipeline

```
Steg 1d (NY): Kjør applyPronunciationFixes() på hele teksten
```

Kjøres ETTER `applyNumberFixes()` (Steg 1c), men FØR teksten lagres i docs/.

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

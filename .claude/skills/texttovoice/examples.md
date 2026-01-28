# Eksempler: Text-to-Voice

## Eksempel 1: Historie 1.2 Narrativ

### Input
```
/texttovoice historie-1-2-narrativ
```

### Prosess

#### 1. Finn kapittel
```typescript
// Fra src/lib/data/textbook-content-historie-narrativ.ts
export const CHAPTER_HISTORIE_1_2_NARRATIV: TextbookChapter = {
  id: 'historie-1-2-narrativ',
  title: 'Kilder og kildekritikk',
  content: [
    { id: '...-intro', type: 'text', content: '## Vinduet til fortiden...' },
    { id: '...-section1', type: 'text', content: '## En soldat skriver hjem...' },
    { id: '...-quiz1', type: 'exercise', ... },
    { id: '...-section2', type: 'text', content: '## Primærkilder og sekundærkilder...' },
    // ... 5 quizer totalt = 6 segmenter
  ]
}
```

#### 2. Ekstraher tekst
Total: 7749 tegn → deles i 2 chunks (under 5000 hver)

```
Chunk 1 (4632 tegn):
"Vinduet til fortiden... [alt til og med del 3]... Slutt på del 3."

Chunk 2 (3105 tegn):
"Levning og beretning... [resten]... Slutt på del 5. Oppsummering..."
```

#### 3. Generer lyd
```bash
# Chunk 1 → 5.75 MB
# Chunk 2 → 3.65 MB
# Satt sammen → 9.4 MB, 10:15 varighet
```

#### 4. Finn segmentgrenser med Whisper
```
138.80 - 141.40: Slut på del 1.
229.44 - 232.04: Slut på del 2.
348.04 - 350.64: Slut på del tre.
431.04 - 434.04: Slut på del fyret.
555.64 - 559.64: Slut på del fem, oppsymering.
```

#### 5. Splitt (fjern markører)
```bash
ffmpeg -y -i full.mp3 -ss 0 -to 138.8 -c copy del1.mp3      # 2:18
ffmpeg -y -i full.mp3 -ss 141.4 -to 229.4 -c copy del2.mp3  # 1:28
ffmpeg -y -i full.mp3 -ss 232.0 -to 348.0 -c copy del3.mp3  # 1:56
ffmpeg -y -i full.mp3 -ss 350.6 -to 431.0 -c copy del4.mp3  # 1:20
ffmpeg -y -i full.mp3 -ss 434.0 -to 555.6 -c copy del5.mp3  # 2:01
ffmpeg -y -i full.mp3 -ss 558.0 -c copy del6.mp3            # 0:57
```

#### 6. Resultat
```
public/audio/historie/
├── _master/historie-1-2-narrativ-full-master.mp3 (9.4 MB)
├── historie-1-2-narrativ-del1.mp3 (2.1 MB)
├── historie-1-2-narrativ-del2.mp3 (1.3 MB)
├── historie-1-2-narrativ-del3.mp3 (1.8 MB)
├── historie-1-2-narrativ-del4.mp3 (1.2 MB)
├── historie-1-2-narrativ-del5.mp3 (1.9 MB)
└── historie-1-2-narrativ-del6.mp3 (0.9 MB)
```

---

## Eksempel 2: Finne nøyaktig kuttpunkt

### Problem
"Oppsummering" ble sagt på slutten av del 5, men skal være starten av del 6.

### Løsning
Klipp ut grenseområdet og analyser med bedre modell:

```bash
# Klipp 550-570s
ffmpeg -y -i full.mp3 -ss 550 -to 570 -c copy /tmp/boundary.mp3

# Analyser med small-modell
whisper --model small --language no /tmp/boundary.mp3 --output_format json
```

Output (tidspunkt relativt til klippet som starter ved 550s):
```
5.64 - 8.08: Slut på del fem.
8.08 - 8.56: Oppsummering.
10.04 - 14.70: Kildekritikk er kunsten...
```

Absolutte tidspunkt:
- "Slutt på del fem" slutter ved 558.08
- "Oppsummering" er 558.08 - 558.56
- Innhold starter ved 560.04

Kutt del 6 fra 558.0 for å inkludere "Oppsummering".

---

## Eksempel 3: Håndtere dansk uttale

### Problem
ElevenLabs genererer dansk selv med `language_code: "no"`.

### Diagnose
```bash
for i in 1 2 3 4 5 6; do
  echo "=== Del $i ==="
  whisper --model tiny /path/del${i}.mp3 2>&1 | grep "Detected language"
done
```

Output:
```
Del 1: Detected language: Norwegian
Del 2: Detected language: Danish
Del 3: Detected language: Danish
...
```

### Løsning
Generer hele kapittelet som én sammenhengende fil – dette gir konsistent språk gjennom hele opptaket.

```typescript
// Kombiner all tekst
const fullText = extractAllText(chapter);

// Del i chunks ved avsnitt (ikke ved quiz-markører)
const chunks = splitAtParagraphs(fullText, 4800);

// Generer sekvensielt
for (const chunk of chunks) {
  const audio = await generateSpeech(chunk);
  tempFiles.push(audio);
}

// Sett sammen
execSync(`ffmpeg -f concat ... -c copy full.mp3`);
```

Splitt deretter med ffmpeg basert på Whisper-tidsstempler.

---

## Eksempel 4: Legge til audio-blokker i kapittel

Etter generering, legg til audio-blokker i TypeScript-filen:

```typescript
// FØR (ingen audio)
content: [
  { id: '...-intro', type: 'text', content: '...' },
  { id: '...-quiz1', type: 'exercise', ... },
  ...
]

// ETTER (med audio)
content: [
  {
    id: 'historie-1-2-n-audio-1',
    type: 'audio',
    title: 'Lytt til denne delen',
    src: '/audio/historie/historie-1-2-narrativ-del1.mp3',
    description: 'Lydfil som leser opp teksten frem til første quiz.',
  },
  { id: '...-intro', type: 'text', content: '...' },
  { id: '...-section1', type: 'text', content: '...' },
  { id: '...-quiz1', type: 'exercise', ... },
  {
    id: 'historie-1-2-n-audio-2',
    type: 'audio',
    title: 'Lytt til denne delen',
    src: '/audio/historie/historie-1-2-narrativ-del2.mp3',
    description: 'Lydfil som leser opp teksten frem til neste quiz.',
  },
  { id: '...-section2', type: 'text', content: '...' },
  // osv...
]
```

Mønster: Audio-blokk → tekstblokker → quiz → (gjenta)

---
name: texttovoice
description: Generer lydbok fra narrativt lærebokkapittel med ElevenLabs og splitt i segmenter
argument-hint: [kapittel-id] f.eks. historie-1-2-narrativ
---

# Text-to-Voice: Lydbok-generator

Denne skillen automatiserer generering av lydbøker fra narrative lærebokkapitler.

## Hva den gjør

1. **Ekstraherer tekst** fra et narrativt kapittel (hopper over audio/video/exercise-blokker)
2. **Genererer lyd** med ElevenLabs v3 API (Liam-stemmen, norsk)
3. **Setter sammen** chunks med ffmpeg (hvis teksten overstiger 5000 tegn)
4. **Finner segmentgrenser** med Whisper speech-to-text
5. **Splitter lydfilen** ved quiz-markører (fjerner "slutt på del X")
6. **Lagrer master-fil** i `_master/`-mappen

## Forutsetninger

### API-nøkkel
Legg til i `.env.local`:
```
ELEVENLABS_API_KEY="din-nøkkel-her"
```

### Installerte verktøy
- `ffmpeg` (brew install ffmpeg)
- `whisper` (pip3 install openai-whisper)

Whisper-sti: `/Users/danielandreasaubert/Library/Python/3.9/bin/whisper`

## Bruk

```
/texttovoice historie-1-2-narrativ
```

## Fremgangsmåte

### Steg 1: Identifiser kapittel

Finn kapittel-eksporten i `src/lib/data/textbook-content-*-narrativ.ts`:
```typescript
export const CHAPTER_HISTORIE_1_2_NARRATIV: TextbookChapter = { ... }
```

### Steg 2: Ekstraher og generer tekst

Lag skript som:
1. Importerer kapittelet
2. Itererer over `content`-arrayet
3. For hver blokk:
   - `text`: Strip markdown, legg til tekst
   - `definition`: "Definisjon: {title}. {content}"
   - `example`: "Eksempel: {title}. {problem}. {solution}"
   - `exercise`: Legg til markør "... Slutt på del {n}. ..."
   - Hopp over: `audio`, `video`, `image`, `geogebra`

### Steg 3: Generer lyd med ElevenLabs

**VIKTIG – Norsk intro-prefix:** For å tvinge ElevenLabs til å bruke norsk uttale (ikke dansk), må **ALLE** chunks starte med denne setningen:

```
Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.
```

Legg den til i starten av **hver** chunk som sendes til API-et. Introen kuttes bort fra lyden etterpå (se steg 6).

```typescript
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam
const NORSK_INTRO = 'Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende.\n\n';

await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
  method: 'POST',
  headers: {
    'xi-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    text: NORSK_INTRO + chunkText, // Intro + innhold, maks 5000 tegn totalt
    model_id: 'eleven_v3',
    language_code: 'no',
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.75,
      style: 0.0,
      use_speaker_boost: true,
    },
  }),
});
```

**Viktig:** Maks 5000 tegn per API-kall (inkl. intro). Del opp ved naturlige pauser (avsnitt). Husk å trekke fra intro-lengden (~90 tegn) fra chunk-størrelsen.

### Steg 4: Kutt intro fra hver chunk og sett sammen

Hver chunk starter med den norske introen (~5-7 sekunder). Bruk Whisper på hver chunk for å finne hvor introen slutter, og kutt den bort:

```bash
# For hver chunk: finn intro-slutt med Whisper
whisper --model tiny --language no chunk1.mp3 --output_format json --output_dir /tmp/whisper-chunk

# Typisk: introen slutter ved ~5-7 sekunder (se etter "spennende" i transkripsjonen)
# Kutt introen bort
ffmpeg -y -i chunk1.mp3 -ss 6.8 -c copy chunk1-clean.mp3
```

Sett sammen de rensede chunk-filene:

```bash
# Lag liste-fil
echo "file 'chunk1-clean.mp3'" > concat_list.txt
echo "file 'chunk2-clean.mp3'" >> concat_list.txt

# Sett sammen
ffmpeg -y -f concat -safe 0 -i concat_list.txt -c copy output-full.mp3
```

Lagre denne sammensatte filen (uten intro) som master i `_master/`-mappen.

### Steg 5: Finn segmentgrenser med Whisper

```bash
whisper --model tiny --language no input.mp3 --output_format json --output_dir /tmp/whisper
```

Søk etter "slutt" i JSON-output:
```python
for seg in data['segments']:
    if 'slutt' in seg['text'].lower():
        print(f"{seg['start']:.2f} - {seg['end']:.2f}: {seg['text']}")
```

### Steg 6: Splitt lydfilen

For hvert segment, kutt **før** "slutt på del X" og **etter** forrige slutt:

```bash
# Del 1: 0 → før "slutt på del 1"
ffmpeg -y -i full.mp3 -ss 0 -to 138.8 -c copy del1.mp3

# Del 2: etter "slutt på del 1" → før "slutt på del 2"
ffmpeg -y -i full.mp3 -ss 141.4 -to 229.4 -c copy del2.mp3

# osv...
```

**Tips:** For nøyaktige kutt rundt "Oppsummering", bruk `whisper --model small` på et kort segment.

### Steg 7: Lagre master og oppdater kapittel

1. Kopier full-filen til `public/audio/[fag]/_master/`
2. Verifiser at audio-blokker i kapittelet peker til riktige filer:

```typescript
{
  id: 'historie-1-2-n-audio-1',
  type: 'audio',
  title: 'Lytt til denne delen',
  src: '/audio/historie/historie-1-2-narrativ-del1.mp3',
  description: 'Lydfil som leser opp teksten frem til første quiz.',
},
```

## Filstruktur

```
public/audio/historie/
├── _master/
│   ├── README.md
│   └── historie-1-2-narrativ-full-master.mp3
├── historie-1-2-narrativ-del1.mp3
├── historie-1-2-narrativ-del2.mp3
├── historie-1-2-narrativ-del3.mp3
├── historie-1-2-narrativ-del4.mp3
├── historie-1-2-narrativ-del5.mp3
└── historie-1-2-narrativ-del6.mp3
```

## Feilsøking

### Dansk/svensk uttale
ElevenLabs kan noen ganger produsere dansk selv med `language_code: "no"`. Løsninger:
1. **Norsk intro-prefix (obligatorisk):** Alle chunks MÅ starte med "Jeg er en norsk nordmann og heter Daniel. Jeg vil gjerne fortelle deg om noe spennende." – dette tvinger modellen til norsk uttale. Introen kuttes fra lyden etterpå.
2. Generer hele kapittelet som én fil (konsistent språk)
3. Splitt etterpå med ffmpeg

### For lang tekst (>5000 tegn)
Del teksten ved avsnitt (dobbel linjeskift) og generer chunks separat.

### Whisper finner ikke markører
Bruk `--model small` eller `--model medium` for bedre nøyaktighet.

## Eksisterende skript

Se `scripts/generate-audiobook.ts` og `scripts/generate-full-chapter.ts` for referanse-implementasjoner.

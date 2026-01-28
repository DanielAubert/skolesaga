# Referanse: Text-to-Voice

## ElevenLabs API

### Stemmer

| Stemme | Voice ID | Beskrivelse |
|--------|----------|-------------|
| Liam | `TX3LPaxmHKxFdv7VOQHJ` | Energisk, sosial (anbefalt) |
| Rachel | `21m00Tcm4TlvDq8ikWAM` | Standard kvinnestemme |

### Modeller

| Modell | model_id | Beskrivelse |
|--------|----------|-------------|
| Eleven v3 | `eleven_v3` | Beste kvalitet, støtter norsk |
| Multilingual v2 | `eleven_multilingual_v2` | God flerspråklig |
| Turbo v2.5 | `eleven_turbo_v2_5` | Raskere, litt lavere kvalitet |

### Språkkoder

| Språk | Kode |
|-------|------|
| Norsk | `no` |
| Dansk | `da` |
| Svensk | `sv` |

**Viktig:** Bruk `no`, ikke `nor` eller `nb`.

### API-begrensninger

- Maks 5000 tegn per request
- Rate limiting: ~100 requests/minutt (avhenger av plan)

## Whisper

### Modeller

| Modell | Størrelse | Nøyaktighet | Hastighet |
|--------|-----------|-------------|-----------|
| tiny | 39 MB | Lav | Veldig rask |
| base | 74 MB | OK | Rask |
| small | 244 MB | God | Medium |
| medium | 769 MB | Veldig god | Treg |
| large | 1550 MB | Best | Veldig treg |

Anbefalt: `tiny` for rask sjekk, `small` for nøyaktige tidsstempler.

### Kommandoer

```bash
# Grunnleggende transkribering
whisper --model tiny --language no input.mp3 --output_format json --output_dir /tmp

# Med ordnivå-tidsstempler
whisper --model small --language no --word_timestamps True input.mp3 --output_format json

# Bare detektere språk
whisper --model tiny input.mp3 2>&1 | grep "Detected language"
```

### JSON-output format

```json
{
  "segments": [
    {
      "id": 0,
      "start": 0.0,
      "end": 5.5,
      "text": " Teksten som ble sagt.",
      "words": [
        {"word": "Teksten", "start": 0.0, "end": 0.8},
        {"word": "som", "start": 0.9, "end": 1.1},
        ...
      ]
    }
  ]
}
```

## ffmpeg

### Klippe lydfil

```bash
# Fra start til tidspunkt
ffmpeg -y -i input.mp3 -ss 0 -to 138.8 -c copy output.mp3

# Fra tidspunkt til slutt
ffmpeg -y -i input.mp3 -ss 558 -c copy output.mp3

# Mellom to tidspunkt
ffmpeg -y -i input.mp3 -ss 141.4 -to 229.4 -c copy output.mp3
```

### Sette sammen filer

```bash
# Lag liste
cat > concat_list.txt << EOF
file 'chunk1.mp3'
file 'chunk2.mp3'
file 'chunk3.mp3'
EOF

# Sett sammen
ffmpeg -y -f concat -safe 0 -i concat_list.txt -c copy output.mp3
```

### Hente info

```bash
# Varighet
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 input.mp3

# Full info
ffprobe input.mp3
```

## Markdown-stripping

```typescript
function stripMarkdown(text: string): string {
  return text
    .replace(/^#{1,6}\s+/gm, '')           // Headings
    .replace(/\*\*([^*]+)\*\*/g, '$1')     // Bold
    .replace(/\*([^*]+)\*/g, '$1')         // Italic
    .replace(/^\d+\.\s+/gm, '')            // Numbered lists
    .replace(/^[-•]\s+/gm, '')             // Bullet lists
    .replace(/\n{3,}/g, '\n\n')            // Extra newlines
    .trim();
}
```

## Kapittelstruktur

Narrative kapitler har denne strukturen:
```
audio-1 → text (intro) → text (section1) → quiz1 →
audio-2 → text (section2) → quiz2 →
audio-3 → text (section3) → quiz3 →
...
audio-n → text (summary)
```

Hvert audio-segment dekker teksten **før** neste quiz.

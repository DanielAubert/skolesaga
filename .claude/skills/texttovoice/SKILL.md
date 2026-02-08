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
4. **Finner segmentgrenser** med Whisper (omtrentlige) + ffmpeg silencedetect (presise)
5. **Splitter lydfilen** ved naturlige pauser før quiz-markører (fjerner "slutt på del X")
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

### Steg 5: Finn segmentgrenser (to-stegs metode)

Segmentering bruker **to verktøy sammen** for presise kutt:

#### 5a: Whisper – finn omtrentlige markør-tidspunkter

```bash
whisper --model tiny --language no --word_timestamps True master.mp3 \
  --output_format json --output_dir /tmp/whisper
```

Parse JSON og finn "slutt"-markører med ord-nivå tidsstempler:
```python
import json
with open('/tmp/whisper/master.json') as f:
    data = json.load(f)

for seg in data['segments']:
    words = seg.get('words', [])
    first_words = ' '.join([w['word'].strip().lower() for w in words[:3]])
    if first_words.startswith('slut') and 'på' in first_words and 'del' in first_words:
        slutt_start = words[0]['start']
        # Finn hvor overskriften starter (etter tall-ordet)
        for j, w in enumerate(words):
            wl = w['word'].strip().lower().rstrip('.,!?')
            if wl in ['1','2','3','4','5','en','to','tre','fire','fem','ett']:
                heading_start = words[j+1]['start'] if j+1 < len(words) else None
                break
        print(f"Markør: {seg['text'].strip()}")
        print(f"  Slutt-ord starter: {slutt_start:.2f}")
        print(f"  Overskrift starter: {heading_start:.2f}")
```

**NB:** Whisper kan transkribere "Slutt" som "Slut", "Schlutt" osv. Søk bredt.

#### 5b: silencedetect – finn presise kuttpunkter for BÅDE start og slutt

Whisper-tidsstempler har ~0.5s marginfeil. Bruk `ffmpeg silencedetect` for å finne
de eksakte stilhetsperiodene – både mellom innhold→markør og markør→overskrift:

```bash
ffmpeg -i master.mp3 -af silencedetect=noise=-30dB:d=0.3 -f null - 2>&1 | grep silence_
```

Parse alle stillhetsperioder og finn presise kuttpunkter:
```python
import re, subprocess

result = subprocess.run(
    ["ffmpeg", "-i", "master.mp3", "-af", "silencedetect=noise=-30dB:d=0.3", "-f", "null", "-"],
    capture_output=True, text=True
)

silences = []
for line in result.stderr.split('\n'):
    m_start = re.search(r'silence_start: ([\d.]+)', line)
    m_end = re.search(r'silence_end: ([\d.]+) \| silence_duration: ([\d.]+)', line)
    if m_start:
        current_start = float(m_start.group(1))
    if m_end:
        silences.append((current_start, float(m_end.group(1)), float(m_end.group(2))))

# For hver markør, finn to stillhetsperioder:
for slutt_start, heading_start in zip(whisper_slutt_starts, whisper_heading_starts):
    # 1) SEGMENT-SLUTT: stillhet FØR "Slutt"-markøren (mellom innhold og markør)
    before = [(s, e, d) for s, e, d in silences if e > slutt_start - 5 and e <= slutt_start + 0.5]
    best_before = min(before, key=lambda x: abs(x[1] - slutt_start))
    seg_end = best_before[0] + 0.3  # Slutt på tale + 0.3s naturlig stillhet

    # 2) SEGMENT-START: stillhet ETTER "Slutt"-markøren (mellom markør og overskrift)
    after = [(s, e, d) for s, e, d in silences if s > slutt_start and e > heading_start - 3 and e <= heading_start + 0.5]
    best_after = min(after, key=lambda x: abs(x[1] - heading_start))
    seg_start = best_after[1] - 0.2  # silence_end - 0.2s = buffer før første ord

    print(f"  Markør ~{slutt_start:.2f}s:")
    print(f"    Forrige segment slutter: {seg_end:.2f}s")
    print(f"    Neste segment starter:   {seg_start:.2f}s")
```

### Steg 6: Splitt lydfilen

Bruk kuttpunktene fra steg 5b (silencedetect) for **både** segment-start og segment-slutt:

```bash
# Del 1: 0 → silence_start + 0.3 (naturlig pause etter siste ord)
ffmpeg -y -i master.mp3 -ss 0 -to 167.86 -c copy del1.mp3

# Del 2: silence_end - 0.2 (buffer før overskrift) → silence_start + 0.3 (neste tale-slutt)
ffmpeg -y -i master.mp3 -ss 170.32 -to 270.73 -c copy del2.mp3

# osv...
```

**Viktig:**
- **Segment-slutt** = `silence_start + 0.3` fra stillheten FØR markøren (beholder alt innhold + naturlig pause)
- **Segment-start** = `silence_end - 0.2` fra stillheten ETTER markøren (buffer før første ord så det ikke klippes)
- IKKE bruk Whisper-tidsstempler direkte til kutt – de har for stor marginfeil
- Whisper brukes kun til å identifisere *hvilke* stillhetsperioder som er relevante

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
- Whisper kan transkribere "Slutt" som "Slut", "Schlutt", etc. Søk bredt med `'slut' in text.lower()`.
- Bruk `--word_timestamps True` for ord-nivå tidsstempler.
- Bruk `--model small` for bedre nøyaktighet (men mye tregere på CPU).

### Markør-rester høres i segmentet
Whisper-tidsstempler har ~0.5s marginfeil. Bruk alltid silencedetect (steg 5b) for presise kuttpunkter. ALDRI bruk Whisper-tidsstempler direkte til kutt.

## Eksisterende skript

Se `scripts/generate-audiobook.ts` og `scripts/generate-full-chapter.ts` for referanse-implementasjoner.

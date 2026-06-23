# Nordsamisk KI-utkast lokalt (NorMistral + Ollama)

Lager **maskinutkast** av matte-kapitler på nordsamisk (davvisámegiella) helt
lokalt på egen maskin — **ingen betalt API**. Modellen NorMistral-11B er trent
på bokmål/nynorsk/nordsamisk og har åpne vekter (Apache-2.0). Kostnaden er kun
strøm/regnekraft.

> ⚠️ Utkastet er **aldri** publiseringsklart alene. Det skal gjennom
> `sme-validate.mjs` (Divvun-stavekontroll) og **menneskelig revisjon** av en
> nordsamisktalende før det kan vises som en ekte språkversjon. Maskinutkast på
> lavressursspråk som nordsamisk inneholder typisk feil bøyning/kasus og av og
> til oppdiktede sammensetninger.

## 1. Maskinvare

NorMistral-11B i 4-bit (Q4_K_M) trenger ca. **7–8 GB** minne for modellen.

- **Apple Silicon (M1/M2/M3/M4)** med ≥16 GB unified memory: går fint via Metal.
- **NVIDIA-GPU** med ≥8 GB VRAM: går fint.
- Kun CPU: fungerer, men tregt (sekunder per felt). Greit for ett kapittel.

## 2. Installer Ollama

```bash
# macOS
brew install ollama
# eller last ned fra https://ollama.com/download

ollama serve          # starter lokal server på http://localhost:11434
```

## 3. Hent NorMistral-modellen (GGUF, 4-bit)

NorMistral ligger som GGUF på Hugging Face (`norallm/normistral-11b-warm`,
fila `normistral-11b-warm-Q4_K_M.gguf`). Last den ned, og lag en Ollama-modell:

```bash
# Last ned GGUF-fila (krever ev. `huggingface-cli login` for gated repo)
huggingface-cli download norallm/normistral-11b-warm \
  normistral-11b-warm-Q4_K_M.gguf --local-dir ~/models/normistral

# Lag en Modelfile
cat > ~/models/normistral/Modelfile <<'EOF'
FROM ./normistral-11b-warm-Q4_K_M.gguf
PARAMETER temperature 0.2
PARAMETER top_p 0.9
PARAMETER stop "\nBokmål:"
PARAMETER stop "\nNordsamisk:"
EOF

ollama create normistral -f ~/models/normistral/Modelfile
ollama list   # bekreft at «normistral» finnes
```

> NorMistral-11B-warm er en **completion**-modell (ikke chat-tunet). Skriptet
> bruker derfor NorMistrals dokumenterte oversettelsesformat
> (`Bokmål: …\nNordsamisk:`) med few-shot — ikke en chat-mal.

## 4. (Valgfritt) Hent korrekturminnet

Few-shot-eksempler og godkjente term-/staverettinger gjør utkastet bedre. De
hentes fra Supabase med `corrections_pull.py` (krever service-role-nøkkel):

```bash
mkdir -p scripts/sme-corrections
cd scripts/sme-corrections
SUPA_URL="$NEXT_PUBLIC_SUPABASE_URL" SRK="$SUPABASE_SERVICE_ROLE_KEY" \
  python3 /path/to/corrections_pull.py
# → glossary_auto.json (auto-anvendes) + fewshot.jsonl (few-shot) + rules.md
```

Skriptet leter etter disse i `scripts/sme-corrections/` (overstyr med
`SME_CORR_DIR`). Mangler de, kjøres utkastet uten few-shot — bare termbasen.

## 5. Lag utkast

```bash
node scripts/sme-draft.mjs 1t-1-2
# → src/lib/data/chapters/sme/1t-1-2.json  (_meta.status = draft-needs-human-review)
```

Miljøvariabler: `OLLAMA_URL` (default `http://localhost:11434`),
`SME_MODEL` (default `normistral`), `SME_CORR_DIR`, `SME_OVERWRITE=1`.

## 6. Valider og revider

```bash
node scripts/sme-validate.mjs 1t-1-2      # Divvun-stavekontroll → <id>.flags.json
```

Åpne deretter `/sme-review/1t/1t-1-2` på siden, send lenken til en
nordsamisktalende revisor, og la rettingene flyte inn i korrekturminnet
(Supabase). Godkjente globale rettinger havner i `glossary_auto.json` og
auto-anvendes neste gang `sme-draft.mjs` kjøres → utkastene blir gradvis bedre.

## Hva skriptet gjør (kort)

1. Leser bokmål-kapittelet `src/lib/data/chapters/<id>.json`.
2. For hvert tekstfelt (`title/description/content/problem/solution/task/buttonText/hints/competenceGoals`):
   - hopper over rene matte-/tomme felt,
   - bygger en prompt med (a) instruks, (b) **relevant termbase** (kun fagord som finnes i feltet), (c) **few-shot** fra korrekturminnet,
   - kaller den lokale modellen.
3. Anvender godkjente term-/staverettinger (`glossary_auto.json`) på resultatet.
4. Skriver `src/lib/data/chapters/sme/<id>.json` med `_meta.status = draft-needs-human-review`.

All matematikk/LaTeX bevares uendret; bare prosa oversettes.

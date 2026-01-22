# Bildegenerering med Google GenAI

## Installasjon

```bash
# Installer google-genai biblioteket
pip install google-genai

# For Excel-støtte (valgfritt)
pip install pandas openpyxl
```

## Sett opp API-nøkkel

Hent API-nøkkel fra [Google AI Studio](https://aistudio.google.com/apikey)

```bash
# Mac/Linux
export GEMINI_API_KEY="din-api-nøkkel-her"

# Eller legg til permanent i ~/.zshrc eller ~/.bashrc
echo 'export GEMINI_API_KEY="din-api-nøkkel"' >> ~/.zshrc
source ~/.zshrc
```

## Bruk

### Fra tekstfil (en prompt per linje):

```bash
python generate_images.py --input prompts.txt --output ./bilder
```

### Fra Excel-fil (prompts i første kolonne):

```bash
python generate_images.py --input prompts.xlsx --output ./bilder
```

### Med tilpasset forsinkelse (unngå rate limiting):

```bash
python generate_images.py --input prompts.txt --output ./bilder --delay 3.0
```

### Med Imagen 3 modellen (alternativ):

```bash
python generate_images.py --input prompts.txt --output ./bilder --model imagen
```

## Eksempel på prompts.txt

```
A colorful illustration of mathematics with numbers and formulas
A beautiful Norwegian landscape with fjords and mountains
An educational diagram of the human body
```

## Eksempel på prompts.xlsx

| Prompt |
|--------|
| A colorful illustration of mathematics |
| A Norwegian landscape |
| An educational diagram |

## Tilgjengelige modeller

| Modell | Beskrivelse |
|--------|-------------|
| `gemini` | Gemini 2.0 Flash med bildegenerering (default) |
| `imagen` | Imagen 3.0 (høyere kvalitet, men mer begrenset) |

## Argumenter

| Argument | Kort | Beskrivelse | Default |
|----------|------|-------------|---------|
| `--input` | `-i` | Input-fil (.txt eller .xlsx) | (påkrevd) |
| `--output` | `-o` | Output-mappe | `./generated_images` |
| `--delay` | `-d` | Sekunder mellom kall | `2.0` |
| `--model` | `-m` | Modell (gemini/imagen) | `gemini` |

## Feilsøking

### "GEMINI_API_KEY er ikke satt"
```bash
export GEMINI_API_KEY="din-nøkkel"
```

### Rate limiting
Øk forsinkelsen mellom kall:
```bash
python generate_images.py -i prompts.txt -o ./bilder --delay 5.0
```

### Quota exceeded
Du har brukt opp gratis-kvoten. Vent til neste dag eller oppgrader til betalt plan.

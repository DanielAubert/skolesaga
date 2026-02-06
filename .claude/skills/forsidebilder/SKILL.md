---
name: forsidebilder
description: Generer forsidebilder for alle kapitler i en lærebok som mangler coverImage
argument-hint: "[kurs-id] f.eks. historie-vg2, biologi-1, 1t"
---

# /forsidebilder – Generer manglende forsidebilder for en lærebok

## Hva den gjør

1. Scanner `textbook-courses.ts` og finner alle kapitler i det angitte kurset som mangler `coverImage`
2. Hopper automatisk over narrative versjoner (`isNarrativeVersion: true`) – disse arver bilde fra originalkapittelet
3. Genererer bildeprompts tilpasset hvert kapittels tema, tittel og innhold
4. Kjører bildegenerering via Gemini API (`scripts/generate-cover-image.ts`)
5. Konverterer fra PNG til WebP med `cwebp`
6. Legger til `coverImage`-referanser i `textbook-courses.ts`
7. Verifiserer med `npx tsc --noEmit`

## Bruk

```
/forsidebilder historie-vg2
/forsidebilder biologi-1
/forsidebilder norsk-vg1
```

## Fremgangsmåte

### Fase 1: Finn manglende bilder

1. Les kursdefinisjon fra `src/lib/data/textbook-courses.ts` for det angitte kurs-ID-et
2. Identifiser alle kapitler der:
   - `coverImage` IKKE er satt
   - `isNarrativeVersion` IKKE er `true`
3. List opp kapitlene som mangler bilder med id, nummer og tittel
4. Hvis alle kapitler har bilder: meld fra og avslutt

### Fase 2: Utled bildemappe og navnekonvensjon

Bildemappen bestemmes av kurs-ID:

| Kurs-type | Eksempel kurs-id | Bildemappe |
|-----------|-------------------|------------|
| Matematikk | `1t`, `1p`, `r1`, `s2` | `public/images/textbook/{kurs-id}/` |
| Andre fag | `biologi-1`, `historie-vg2` | `public/images/textbook/{kurs-id}/` |

**Filnavnkonvensjon:** `{slug}-hero.webp`

Slug lages fra kapitteltittelen:
- Lowercase
- Erstatt mellomrom og spesialtegn med bindestrek
- Fjern norske tegn: æ→ae, ø→o, å→a
- Fjern doble bindestreker
- Eksempel: "Å skrive i historiefaget" → `a-skrive-i-historiefaget-hero.webp`

### Fase 3: Generer bildeprompts

Lag en batchfil i `scripts/{kurs-id}-covers.txt` med dette formatet:

```
# ================================================================================
# BILDEPROMPTS - {KURS-TITTEL}
# ================================================================================
# Format: 2816 x 1536 piksler (liggende)
# Til bruk i Google Gemini (nanabanana-modellen)

{filnavn-1}.png
{prompt-1}

{filnavn-2}.png
{prompt-2}
```

**Regler for prompts:**

Hver prompt skal:
- Starte med: `Lag et illustrert forsidebilde i liggende format (2816x1536 piksler) til et lærebokkapittel`
- Spesifisere faget (i historie, i biologi, i matematikk osv.)
- Inneholde: `Teksten "{Kapitteltittel}" skal stå sentrert i bildet med stor, elegant skrift.`
- Beskrive en visuell scene som reflekterer kapitteltemaet (100-200 ord)
- Avslutte med fargepalett og stil: `Fargepaletten er {farger}. Halvrealistisk, engasjerende illustrasjon med {faglig} estetikk.`

**Prompt-mal:**

```
Lag et illustrert forsidebilde i liggende format (2816x1536 piksler) til et lærebokkapittel i {fag}. Teksten "{Kapitteltittel}" skal stå sentrert i bildet med stor, elegant skrift. Bakgrunnen viser {visuell beskrivelse av temaet med symboler, figurer, scener, og detaljer som knytter seg til kapittelet}. Fargepaletten er {2-4 farger med stemning}. Halvrealistisk, engasjerende illustrasjon med {faglig/tematisk} estetikk.
```

**Tilpasning per fagområde:**

| Fag | Fargetoner | Estetikk-suffix |
|-----|-----------|-----------------|
| Historie | Varme jordtoner, gull, dyp blå | historisk estetikk |
| Biologi | Grønt, turkis, naturlige toner | naturvitenskapelig estetikk |
| Fysikk | Kosmisk blå, neon, elektrisk | fysikk-estetikk |
| Kjemi | Laboratorieblå, grønt, klart | kjemisk estetikk |
| Matematikk | Dyp blå, gull, lilla | matematisk estetikk |
| Norsk | Nordiske toner, midnatt, gull | litterær estetikk |
| Engelsk | Internasjonale farger, blått | språklig estetikk |
| Samfunnsfag | Dyp rød, blå, grønt | samfunnsfaglig estetikk |
| Geografi | Jordtoner, havblått, grønt | geografisk estetikk |
| Naturfag | Grønt, blått, oransje | naturvitenskapelig estetikk |
| Kroppsøving | Energiske farger, dynamisk | aktivitets-estetikk |
| Religion | Lilla, gull, mystisk blå | religiøs-filosofisk estetikk |

**Viktig:** Promptene skal IKKE inkludere tekst som ber om å generere tekst med feil stavemåte. Vær nøyaktig med norsk – bruk eksakt kapitteltittel.

### Fase 4: Generer bilder

Kjør bildegenerering med batch-skriptet:

```bash
npx tsx scripts/generate-cover-image.ts \
  --batch scripts/{kurs-id}-covers.txt \
  --output-dir public/images/textbook/{kurs-id}/ \
  --aspect-ratio 16:9 \
  --size 2K \
  --delay 5
```

**Parametre:**
- `--aspect-ratio 16:9` – Liggende format for hero-bilder
- `--size 2K` – God oppløsning uten å bli for store
- `--delay 5` – 5 sekunder mellom API-kall for å unngå rate-limiting

**Viktig:** Denne kommandoen kan ta lang tid (ca. 15-30 sekunder per bilde). Kjør den med `run_in_background: true` og `timeout: 600000`.

### Fase 5: Konverter til WebP

Konverter alle genererte PNG-filer til WebP og slett originalene:

```bash
cd public/images/textbook/{kurs-id}/ && \
for f in *-hero.png; do
  webp="${f%.png}.webp"
  cwebp -q 80 "$f" -o "$webp" && rm "$f"
done
```

**Fallback** hvis `cwebp` ikke er installert: Bruk `npx sharp-cli` eller `ffmpeg`:
```bash
# Med sharp
npx sharp-cli -i "$f" -o "$webp" --format webp --quality 80

# Med ffmpeg
ffmpeg -i "$f" -quality 80 "$webp"
```

Forventet filstørrelse: 200-700 KB per bilde (tilsvarende eksisterende bilder).

### Fase 6: Oppdater textbook-courses.ts

For hvert kapittel som fikk nytt bilde, legg til `coverImage`-property:

```typescript
// FØR:
{ id: 'historie-5-1', ..., competenceGoals: ['...'] },

// ETTER:
{ id: 'historie-5-1', ..., competenceGoals: ['...'], coverImage: '/images/textbook/historie-vg2/renessansen-og-humanismen-hero.webp' },
```

**Viktig:**
- Bruk relativ sti fra `public/`: `/images/textbook/{kurs-id}/{slug}-hero.webp`
- Legg `coverImage` som siste property før `}` (eller etter siste eksisterende property)
- Bruk `Edit`-verktøyet for å oppdatere – IKKE skriv om hele filen

### Fase 7: Verifiser

1. Kjør typesjekk: `npx tsc --noEmit`
2. Verifiser at alle nye bilder finnes i riktig mappe
3. Tell antall kapitler med og uten coverImage for kurset
4. Vis en oppsummeringstabell med genererte bilder

## Sjekkliste

- [ ] Alle ikke-narrative kapitler har nå `coverImage`
- [ ] Bilder er i WebP-format (ikke PNG)
- [ ] Bildestier bruker riktig format: `/images/textbook/{kurs-id}/{slug}-hero.webp`
- [ ] Batchfil lagret i `scripts/{kurs-id}-covers.txt` for dokumentasjon
- [ ] TypeScript kompilerer uten feil
- [ ] Ingen narrative versjoner har fått unødvendig coverImage
- [ ] Bildefilstørrelser er rimelige (200-700 KB)

## Eksempel: Komplett kjøring

```
> /forsidebilder historie-vg2

Scanning COURSE_HISTORIE_VG2...
Fant 11 kapitler uten coverImage (av 49 ikke-narrative):

  2.5  Å skrive i historiefaget
  2.6  Muntlige ferdigheter og debatt
  3.1  Menneskets utvikling og steinalderen
  3.2  Jordbruksrevolusjonen og de første byene
  3.6  Religionenes fremvekst
  5.1  Renessansen og humanismen
  5.2  Reformasjonen og religionskrigene
  5.3  Oppdagelsesreisene og tidlig kolonialisme
  5.4  Makt og samfunn i tidlig nytid
  5.5  Norge i dansketiden
  9.2  Afrika under kolonitiden

Genererer bildeprompts → scripts/historie-vg2-covers.txt
Kjører bildegenerering (11 bilder, estimert tid: ~3 min)...
  [1/11] skrive-i-historiefaget-hero.png ✓ (3069 KB)
  [2/11] muntlige-ferdigheter-hero.png ✓ (2997 KB)
  ...
  [11/11] afrika-under-kolonitiden-hero.png ✓ (3618 KB)

Konverterer til WebP...
  11 bilder konvertert (gjennomsnitt: 420 KB)

Oppdaterer textbook-courses.ts...
  11 coverImage-referanser lagt til

Typesjekk: ✓ Ingen feil

FERDIG: 11 forsidebilder generert og koblet til.
```

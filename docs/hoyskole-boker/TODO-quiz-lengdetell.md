# TODO: quiz «lengde-tell»-fiks (resten etter høyskolefagene)

Fasiten (`options[0]`) er systematisk det lengste alternativet, så en
student kan gjette ved å velge det lengste svaret. Regel + audit i
BYGGEPLAN-MAL «LENGDE-TELL»; verktøy: `scripts/hoyskolebok/quiz-lengdesjekk.mjs`.

**Metode (samme som econ1210 15. juli 2026):**
1. `npx tsx <extract>` — flagg spørsmål der fasit er eneste lengste (global gid).
2. Split i batcher (~28); agenter (MAKS 4 av gangen) skriver fyldigere,
   plausible, faglig GALE distraktorer på ~85–110 % av fasitlengden.
3. `apply.mjs` — bytt kun distraktorene (options[0] urørt), per gid.
4. Verifiser: `quiz-lengdesjekk.mjs <emne>` < 35 %, `npm run build` grønn.
5. Scoped commit per emne.
   Pipeline-scriptene ligger i scratchpad `quizfix/` (extract/apply gjenbrukes per emne).

## Status høyskole (gjøres natt 15. juli 2026)
- ✅ econ1210: 77 % → **5 %** (422 spm, straddle-miks, committet 21ccc8c7)
- ✅ stv1100: 36 % → **14 %** (203 spm, committet febc0dbb; 20 lange fasitsvar
  kunne ikke straddle helt — kandidat for pass-2 om ønskelig)
- ✅ bi-okonomi: 36 % → **7 %** (98 spm, committet 40d78d2e). NB: 32 % «korteste»
  er PRE-EKSISTERENDE (naturlig korte fasitsvar, eget «kortest»-mønster som
  lengst-fiksen ikke rører — evt. egen runde senere)
- econ1310/exphil03/jus1111/psy1010 — under terskel (≤34 %), ingen fiks.
  exphil03 (34 %) og psy1010 (34 %) er grensetilfeller — vurder ved neste runde.
- ALLE høyskolefag med bygde bøker er nå ✅ under 35 %.

**Metode-artefakter (gjenbruk for resten):** `scratchpad/quizfix/` har
`extract.mts` (flagg + gid), `apply.mjs` (bytt distraktorer per gid),
`buildmix.mjs` (straddle-balansering), `validate.mjs`. Agent-prompt: skriv 3
fyldigere, plausible, faglig GALE distraktorer ≥ fasitlengde; buildmix lager
straddle (≥1 kortere + ≥1 lengre) så fasiten havner i midten.

## Fikset natt 15. juli — 27 VGS/ungdomsskole-bøker (30 totalt m/høyskole), ~8100 spm
✅ helseoppvekst-vg3 (96→8%), kroppsoving-vg3 (96→14%), psykologi-2 (96→12%),
komkult-3 (95→12%), entrebed (94→8%), helseoppvekst-vg1 (94→11%), helseoppvekst-vg2 (94→19%), medieinfo-2 (94→21%), religion-etikk (94→24%), samfunnskunnskap (94→15%), kroppsoving-vg1 (93→14%), medieinfo-1 (93→13%), politikk-menneskerett (92→17%), sosiologi (92→33%), trening-1 (92→11%), samfokonomi-2 (91→0%), geografi (90→26%), handverk-design-vg1 (90→17%), kroppsoving-9 (90→27%), kunst-9 (90→29%). Se også de 7 første under. MERK: multi-line options-format finnes (samfokonomi-2) — bruk quiz-apply-import.mjs (import-basert, robust) i stedet for linje-apply.
✅ komkult (98→5%), markedsforing (98→16%), trening-3 (98→9%),
sosiologi-full (97→3%), kroppsoving-vg2 (98→17%), trening-2 (97→21%),
komkult-2 (96→2%). Alle committet scoped. (Bøker med mange KORTE fasitsvar —
kroppsoving-vg2/trening-2 — lander høyere (17–21%) pga. noStraddle, men ✅.)
Fjern disse fra lista under etter hvert. + helseoppvekst-vg3 (96->8%). 11 bøker totalt m/høyskole. NESTE: kroppsoving-vg3, psykologi-2, komkult-3, entrebed, helseoppvekst-vg1/vg2, …

## Fikset natt 15. juli (forts.) — 36 bøker totalt
✅ tof-2 (89→15%), filosofi-etikk (88→20%). im-vg1 pågår. Bruk `split.mjs <emne> <prefix> <size>` for batching og `apply2.mjs` (import-basert, robust for multi-line options).

## Resterende flaggede filer (134) — sortert verst først

| Emne | Spm | Fasit-eneste-lengst |
|---|---|---|
| komkult | 130 | 98% |
| kroppsoving-vg2 | 295 | 98% |
| markedsforing | 50 | 98% |
| trening-3 | 200 | 98% |
| sosiologi-full | 190 | 97% |
| trening-2 | 200 | 97% |
| helseoppvekst-vg3 | 250 | 96% |
| komkult-2 | 200 | 96% |
| kroppsoving-vg3 | 50 | 96% |
| psykologi-2 | 200 | 96% |
| komkult-3 | 200 | 95% |
| entrebed | 480 | 94% |
| helseoppvekst-vg1 | 275 | 94% |
| helseoppvekst-vg2 | 290 | 94% |
| medieinfo-2 | 200 | 94% |
| religion-etikk | 180 | 94% |
| samfunnskunnskap | 410 | 94% |
| kroppsoving-vg1 | 320 | 93% |
| medieinfo-1 | 200 | 93% |
| politikk-menneskerett | 225 | 92% |
| sosiologi | 51 | 92% |
| trening-1 | 200 | 92% |
| samfokonomi-2 | 200 | 91% |
| geografi | 250 | 90% |
| handverk-design-vg1 | 275 | 90% |
| kroppsoving-9 | 200 | 90% |
| kunst-9 | 200 | 90% |
| it-1 | 205 | 89% |
| kroppsoving-10 | 200 | 89% |
| mat-og-helse-10 | 200 | 89% |
| mat-og-helse-9 | 200 | 89% |
| tof-2 | 220 | 89% |
| filosofi-etikk | 235 | 88% |
| im-vg1 | 275 | 88% |
| it | 100 | 88% |
| komkult-1 | 200 | 88% |
| musikk-10 | 200 | 88% |
| psykologi-1 | 250 | 88% |
| samfunnsfag-10 | 200 | 88% |
| krle-9 | 200 | 87% |
| int-engelsk | 200 | 86% |
| tof | 100 | 86% |
| trening | 95 | 86% |
| biologi-2 | 215 | 85% |
| frisor-blomster-vg1 | 275 | 85% |
| krle-10 | 297 | 85% |
| krle-8 | 200 | 85% |
| kunst-10 | 200 | 85% |
| kunst-7 | 40 | 85% |
| musikk-9 | 200 | 85% |
| norsk-10 | 200 | 85% |
| salg-service-vg1 | 275 | 85% |
| samføkonomi | 80 | 85% |
| kroppsoving-8 | 200 | 84% |
| medieinfo | 100 | 84% |
| norsk-vg2 | 210 | 84% |
| geofag | 340 | 83% |
| samfokonomi-1 | 40 | 83% |
| engelsk-vg1 | 255 | 82% |
| norsk-6 | 55 | 82% |
| norsk-vg1 | 215 | 82% |
| historie | 375 | 81% |
| it-2 | 200 | 81% |
| samfunnsfag-9 | 185 | 81% |
| sikkerhetsfag | 240 | 81% |
| krle-6 | 45 | 80% |
| kroppsoving-6 | 50 | 80% |
| musikk-7 | 40 | 80% |
| norsk-7 | 50 | 80% |
| psykologi | 100 | 79% |
| restaurant-mat-vg1 | 240 | 79% |
| økonomi-ledelse | 240 | 79% |
| kroppsoving-5 | 40 | 78% |
| mat-og-helse-7 | 40 | 78% |
| norsk-9 | 200 | 78% |
| norsk-vg3 | 320 | 78% |
| rettslære | 345 | 78% |
| kunst-8 | 200 | 77% |
| samf-engelsk | 200 | 77% |
| mat-og-helse-8 | 200 | 76% |
| naturbruk-vg1 | 280 | 76% |
| økonomi-drift | 240 | 76% |
| engelsk-10 | 200 | 75% |
| krle-7 | 40 | 73% |
| kroppsoving-7 | 40 | 73% |
| naturfag-vg1 | 280 | 73% |
| norsk-5 | 75 | 73% |
| tysk-3 | 320 | 73% |
| engelsk-9 | 190 | 72% |
| fransk-3 | 320 | 72% |
| tof-1 | 225 | 72% |
| naturfag-8 | 200 | 71% |
| okonomistyring | 200 | 71% |
| naturfag-9 | 200 | 70% |
| biologi-1 | 250 | 69% |
| kunst-5 | 45 | 69% |
| mat-og-helse-6 | 45 | 69% |
| musikk-6 | 45 | 69% |
| naturfag-10 | 241 | 69% |
| naturfag-7 | 45 | 69% |
| norsk-8 | 212 | 69% |
| kunst-6 | 80 | 68% |
| samfunnsfag-7 | 40 | 68% |
| samfunnsfag-8 | 200 | 67% |
| tif-vg1 | 275 | 67% |
| naturfag-6 | 50 | 66% |
| musikk-8 | 200 | 65% |
| bygg-anlegg-vg1 | 225 | 64% |
| engelsk-8 | 195 | 64% |
| regnskap-revisjon | 240 | 63% |
| kjemi2 | 240 | 62% |
| musikk-5 | 30 | 60% |
| spansk-3 | 320 | 60% |
| engelsk-7 | 45 | 58% |
| krle-5 | 40 | 58% |
| mat-og-helse-5 | 40 | 58% |
| naturfag-5 | 50 | 58% |
| tysk-2 | 320 | 58% |
| spansk-2 | 320 | 57% |
| fysikk | 325 | 54% |
| kjemi1 | 170 | 54% |
| elektro-data-vg1 | 380 | 53% |
| samfunnsfag-6 | 45 | 53% |
| fransk-2 | 320 | 52% |
| s2 | 260 | 52% |
| 1t | 275 | 44% |
| fransk-1 | 405 | 43% |
| s1 | 443 | 43% |
| samfunnsfag-5 | 40 | 43% |
| engelsk-6 | 45 | 42% |
| r1 | 250 | 42% |
| 2p | 175 | 41% |
| spansk-1 | 325 | 38% |
| tysk-1 | 325 | 35% |

**Sum: 134 filer, ~26094 spørsmål totalt.**

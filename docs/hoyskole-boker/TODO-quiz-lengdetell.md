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


## Fikset natt 15. juli (forts. med Opus) — 52 bøker denne økta, ~11 500 spm
Alle verifisert < 35 % «eneste lengst» + `tsc` grønn, scoped committet per emne.
Metode: `split.mjs <emne> <prefix> <size>` for batcher + `apply2.mjs` (import-basert,
robust for multi-line options). MERK race: `buildmix.mjs` må kjøres når ALLE
`<prefix>-out-*.json` er ferdigskrevet — kjør på nytt hvis den melder `mangler-agent > 0`.
Med 12 agenter kan hele boka fyres av i én bølge.

✅ tof-2 (89→15%), filosofi-etikk (88→20%), im-vg1 (88→20%), it (88→24%),
komkult-1 (88→7%), musikk-10 (88→22%), psykologi-1 (88→6%), samfunnsfag-10 (88→29%),
krle-9 (87→11%), int-engelsk (86→34%), tof (86→17%), trening (86→11%),
biologi-2 (85→9%), frisor-blomster-vg1 (85→19%), krle-10 (85→13%), kunst-10 (85→6%),
kunst-7 (85→23%), musikk-9 (85→17%), norsk-10 (85→19%), salg-service-vg1 (85→23%),
kroppsoving-8 (84→10%), medieinfo (84→5%), norsk-vg2 (84→25%), geofag (83→10%),
samfokonomi-1 (83→33%), engelsk-vg1 (82→24%), norsk-vg1 (82→18%), historie (81→13%),
it-2 (81→8%), samfunnsfag-9 (81→19%), sikkerhetsfag (81→7%), norsk-6 (82→2%),
norsk-9 (78→13%), norsk-vg3 (78→22%), rettslære (78→15%).
(+ 3 høyskole + 30 VGS/ungdomsskole fikset tidligere samme natt, se seksjonene over.)

## Resterende flaggede filer (72) — live-målt 15. juli, sortert verst først
Kjør `npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs` (uten arg) for oppdatert liste.
NB: exphil03/jus1111/psy1010/econ1310 er store høyskole-eksamensbøker som IKKE var
fikset (tidligere notat om «≤34 %» stemte ikke — de ligger 82–94 %). Språkfag
(tysk/fransk/spansk) og mattebøker (s1/s2/r1/1t/2p) har mange korte fasitsvar →
lander naturlig lavere, men flere er fortsatt > 35 %.

| Emne | Størrelse | Fasit eneste lengst |
|---|---|---|
| exphil03 | (592 spm) | 94% |
| jus1111 | (546 spm) | 87% |
| samføkonomi | (80 spm) | 85% |
| psy1010 | (548 spm) | 85% |
| krle-8 | (200 spm) | 85% |
| econ1310 | (510 spm) | 82% |
| norsk-7 | (50 spm) | 80% |
| musikk-7 | (40 spm) | 80% |
| kroppsoving-6 | (50 spm) | 80% |
| krle-6 | (45 spm) | 80% |
| økonomi-ledelse | (240 spm) | 79% |
| restaurant-mat-vg1 | (240 spm) | 79% |
| psykologi | (100 spm) | 79% |
| mat-og-helse-7 | (40 spm) | 78% |
| kroppsoving-5 | (40 spm) | 78% |
| samf-engelsk | (200 spm) | 77% |
| kunst-8 | (200 spm) | 77% |
| økonomi-drift | (240 spm) | 76% |
| naturbruk-vg1 | (280 spm) | 76% |
| mat-og-helse-8 | (200 spm) | 76% |
| engelsk-10 | (200 spm) | 75% |
| tysk-3 | (320 spm) | 73% |
| norsk-5 | (75 spm) | 73% |
| naturfag-vg1 | (280 spm) | 73% |
| kroppsoving-7 | (40 spm) | 73% |
| krle-7 | (40 spm) | 73% |
| tof-1 | (225 spm) | 72% |
| fransk-3 | (320 spm) | 72% |
| engelsk-9 | (190 spm) | 72% |
| okonomistyring | (200 spm) | 71% |
| naturfag-8 | (200 spm) | 71% |
| naturfag-9 | (200 spm) | 70% |
| norsk-8 | (212 spm) | 69% |
| naturfag-7 | (45 spm) | 69% |
| naturfag-10 | (241 spm) | 69% |
| musikk-6 | (45 spm) | 69% |
| mat-og-helse-6 | (45 spm) | 69% |
| kunst-5 | (45 spm) | 69% |
| biologi-1 | (250 spm) | 69% |
| samfunnsfag-7 | (40 spm) | 68% |
| kunst-6 | (80 spm) | 68% |
| tif-vg1 | (275 spm) | 67% |
| samfunnsfag-8 | (200 spm) | 67% |
| naturfag-6 | (50 spm) | 66% |
| musikk-8 | (200 spm) | 65% |
| engelsk-8 | (195 spm) | 64% |
| bygg-anlegg-vg1 | (225 spm) | 64% |
| regnskap-revisjon | (240 spm) | 63% |
| kjemi2 | (240 spm) | 62% |
| spansk-3 | (320 spm) | 60% |
| musikk-5 | (30 spm) | 60% |
| tysk-2 | (320 spm) | 58% |
| naturfag-5 | (50 spm) | 58% |
| mat-og-helse-5 | (40 spm) | 58% |
| krle-5 | (40 spm) | 58% |
| engelsk-7 | (45 spm) | 58% |
| spansk-2 | (320 spm) | 57% |
| kjemi1 | (170 spm) | 54% |
| fysikk | (325 spm) | 54% |
| samfunnsfag-6 | (45 spm) | 53% |
| elektro-data-vg1 | (380 spm) | 53% |
| s2 | (260 spm) | 52% |
| fransk-2 | (320 spm) | 52% |
| 1t | (275 spm) | 44% |
| samfunnsfag-5 | (40 spm) | 43% |
| s1 | (443 spm) | 43% |
| fransk-1 | (405 spm) | 43% |
| r1 | (250 spm) | 42% |
| engelsk-6 | (45 spm) | 42% |
| 2p | (175 spm) | 41% |
| spansk-1 | (325 spm) | 38% |
| tysk-1 | (325 spm) | 35% |

**Sum: 72 filer fortsatt over terskel. 77 av 152 quiz-data-filer er nå rene (✅).**

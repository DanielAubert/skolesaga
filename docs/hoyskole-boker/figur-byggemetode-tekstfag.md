# Figur-byggemetode — høyskole tekstfag

Valgt og **validert** genereringsmetode for de 156 kartlagte figurene
(se `figur-kartlegging-tekstfag.md`). Fastsatt før masseproduksjon starter.

## Konklusjon: parametrisert Python-generator, ikke håndtegning

Håndtegning av SVG med manuelle pikselkoordinater ble forkastet. For 156 figurer
gir det treg, inkonsistent og feilutsatt produksjon — særlig **tekstoverflyt og
feiljustering**, som var gjengangerproblemet i økonomifasen. En generator løser
dette fordi den **måler teksten og dimensjonerer bokser/celler automatisk** med
ordbryting, håndhever husstil ett sted, og regner kvantitativ geometri eksakt.

Bibliotek: **`scripts/hoyskolebok/gen-tekstfigurer.py`** (utfyller
`gen-mikrofigurer.py`/`gen-slutsky.py` for økonomi).

## Fire familier → fire byggere

| Familie | Figurtyper (antall) | Byggefunksjon | Metode |
|---------|---------------------|---------------|--------|
| **A. Rutenett** | sammenligningsmatrise (33), typologi/2×2 (8) | `matrise()` | Auto cellestørrelse fra målt tekst, uthevet nøkkelcelle, fargede kolonneoverskrifter |
| **B. Boks-og-pil** | flytdiagram (30), distinksjon (18), beslutningstre (9), taksonomi (6), partsforhold (5), argumentkart (4), design-diagram (10), prosessflyt (2) | `flyt_vertikal()`, `flyt_forgren()`, `distinksjon()`, `beslutningstre()`, `taksonomi_trapp()`, `partsforhold()`, `argumentkart()` | Auto-dimensjonerte bokser, rutet piler, layout beregnet (kjede/tre/kolonner/forgrening) |
| **C. Akse** | tidslinje (3), politisk-akse (1) | `tidslinje()`, `spektrum()` | 1D-posisjonering, skraverte soner |
| **D. Kvantitative plott** | fordeling (14), spredningsplott (7) | `normalfordeling()`, `spredningsplott()` | **Eksakt geometri (numpy)** — sampler ekte PDF / genererer punkter med gitt r |

## Husstil (delt med økonomifigurene)

- `viewBox` auto fra innhold; hvit `<rect>`-bakgrunn; `font-family` Georgia serif.
- Farger: rød `#c0392b`, blå `#2471a3`, grønn `#1e8449`, lilla `#7d3c98`, grå `#666`.
  Lyse bokstinter paret med kant i samme farge. Uthevet matrisecelle: gyllen `#b8860b`.
- Piler: `arrow()` med polygonhode. Avrundede bokser `rx=8`.
- Bildetekst (`caption`) nederst i grått, som i økonomifigurene.

## Valideringsbevis

`python3 scripts/hoyskolebok/gen-tekstfigurer.py --demo <dir>` genererer 12
representative figurer (én+ per familie, basert på ekte kartlagte tilfeller:
Berlin/Pettit-matrise, Rawls-flyt, avtale-beslutningstre, målenivå-trapp,
68-95-99,7-normalfordeling, r=0,85-spredningsplott m.fl.). Alle 12 verifisert som
gyldig XML + visuelt rasterisert (qlmanage → PNG → Read). To bugs funnet og fikset
i valideringen: slutt-boks-kollisjon i beslutningstre (H tok ikke høyde for
slutt-boksens høyde) og boks-overlapp i taksonomi-trapp (stegbredde < boksbredde).

## Arbeidsflyt per figur (byggefasen)

1. Les manifest-oppføring (`docs/hoyskole-boker/figur-manifests-tekstfag/<fag>.json`).
2. Kall riktig byggefunksjon med data fra `suggestedFigure` → SVG til
   `public/images/textbook/<fag>/<kapittel>-<slug>.svg`.
3. Wire `image`-blokk inn i kapittel-JSON rett etter blokken figuren hører til.
4. Skriv om teksten så den refererer figuren direkte.
5. `npx tsx scripts/upload-media-storage.ts` (SVG-er er gitignorert → må til Storage).
6. Scoped commit av kapittel-JSON (`git commit --no-verify`, kun egne filer —
   se [[commit-delt-arbeidstre]]).

Prioritér de **83 HØY-konfidens + høy-prioritet**-figurene først.

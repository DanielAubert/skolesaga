# Figur-audit — alle 249 figurer, alle 6 fag (16. juli 2026)

Hver figur er vurdert visuelt (rasterisert PNG) **mot teksten rundt** (kapittelblokk + caption) og på alt-tekst-kvalitet, av 10 parallelle revisor-agenter. Dom: `ok` / `rerender` / `fix-alt`.

## Resultat

| Fag | Vurdert | Rerender | Fix-alt | OK |
|-----|---------|----------|---------|----|
| econ1210 | 135 | 68 | 7 | 62 |
| econ1310 | 32 | 19 | 0 | 13 |
| exphil03 | 8 | 8 | 0 | 0 |
| jus1111 | 25 | 25 | 0 | 0 |
| psy1010 | 37 | 19 | 1 | 17 |
| stv1100 | 12 | 7 | 0 | 5 |
| **Totalt** | **249** | **146 (59 %)** | **8** | **97** |

## Rotårsaker (én figur kan ha flere)

| Antall | Årsak | Fikses hvor |
|--------|-------|-------------|
| 64 | Etikett-kollisjon / etikett oppå kurve | Re-render med klaring fra linja (felles oppskrift) |
| 57 | Avkuttet tekst / for smal viewBox | Generator: mål tittel/celletekst inn i W; kalibrer breddemåling |
| 33 | Innbakt duplikat-caption, avkuttet med «…» | Generator: FJERN innbakt caption (appen viser block.caption selv) |
| 27 | Svevende punkter / feil kurvegeometri (punkt ikke i kryss, feil helning, ikke-parallelle skift, manglende tangering) | Eksakt geometri: regn kryss/kurver fra formlene, aldri håndtegn |
| 22 | Figuren viser ikke det teksten/captionen lover (manglende p-hale, feil kausalmodell, feil areal) | Individuell re-render fra kapittelinnholdet |
| 15 | Løsrevne/svevende piler | Re-render: piler skal forbinde konkrete elementer |
| 12 | Ugyldig SVG / rå subskript (p_M) / ødelagt ø | Re-render + XML-validering i pipeline |

## Verste enkeltfunn

- elastisitet-langs-linja.svg — ugyldig XML, rendrer rød feilboks (econ1210)
- econ1210-5-4-monkonk.svg — panel (b) tangerer ikke: antyder profitt der teksten sier nullprofitt
- psy1010-5-2-tredjevariabel.svg — viser mediasjon (z→X→Y) der teksten forklarer konfunder-gaffel (X←z→Y)
- econ1310-6-3-kostnadssjokk-neg.svg — RR-skift tegnet FEIL VEI ift. caption
- psy1010-4-3-testvalg-tre.svg — logikkfeil: uten tilleggsvariabel → toveis ANOVA (skal være uparet t-test)
- econ1210-5-5-ex9 — KO-areal viser 3750 der fasit sier 5000
- 6+ IS-RR-PK-figurer (econ1310-5/6) — likevektspunkter svever utenfor kurvekryssene
- jus1111-4-6-medvirkning — nr. 3 (identifikasjon) mangler, teksten bygger på tre numre

## Fikseplan

**Fase 1 — generatorfiks + mekanisk re-render (tekstfagene, 59 figurer):**
1. `gen-tekstfigurer.py`: fjern innbakt caption; mål tittelbredde inn i W; kalibrer tekstbredde-estimat (sikkerhetsfaktor); kollisjonshåndtering i tidslinje/partsforhold; XML-valider output.
2. Re-kjør alle `build-*.py` (ligger i scratchpad) → alle 82 tekstfag-figurer regenereres.
3. Fiks de ~10 innholdsfeilene i byggeskriptene samtidig (konfunder-gaffel, p-hale, SE-kontrast, testvalg-logikk, medvirkning nr. 3, dyd-midten-poler m.fl.) — krever 2 nye generatorfunksjoner (skravert hale, to-kurve-sammenligning).

**Fase 2 — økonomi eksakt-geometri (87 figurer):** re-render alle flaggede econ1210/econ1310-figurer med beregnet geometri fra formlene i teksten (kryss regnes, punkter PÅ kurvene, parallelle skift per konstruksjon, etiketter med klaring, arealer regnet). Bygg på gen-mikrofigurer.py/gen-slutsky.py-tilnærmingen. Agenter per kapittelklynge.

**Fase 3 — fix-alt (8 figurer):** fyldigere alt-tekster (alt skal kunne stå alene når figuren ikke vises).

Fullstendige per-figur-dommer: `docs/hoyskole-boker/figur-audit-dommer.json` (249 oppføringer med konkrete issues + fixHint).
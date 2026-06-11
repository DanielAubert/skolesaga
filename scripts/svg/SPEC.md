# Spec: Generer presisjonsfigurer som SVG med figlib

## Mål
For dine tildelte bøker: gå gjennom HVER prompt i scripts/bildeprompter-<bok>-innhold.txt, avgjør SVG vs Gemini, og implementér SVG-figurene med kodebiblioteket. Resultat: deterministisk korrekte figurer i public/images/content/<bok>/.

## Klassifiseringsrubrikk (per prompt)
- **SVG**: figurens kjerne kan tegnes presist med linjer/geometri/tekst — koordinatsystem, grafer, fordelinger, diagrammer (søyle/sektor/boksplott/histogram), tallinjer, brøkstaver, enhetssirkler, fortegnslinjer, geometriske konstruksjoner med mål, vektorer, valgtrær, krysstabeller, flytskjemaer, arealmodeller, rutenett
- **GEMINI (behold i .txt)**: kjernen er en gjenkjennelig scene/objekt der illustrasjonsvarme er poenget — mat (pizza/sjokolade), mennesker/yrkesscener, rom/bygninger, fysiske gjenstander (vekt, termometer, tommestokk, klokke, handlekurv). Ved tvil: SVG (presisjon trumfer).

## Verktøy
1. **LES scripts/svg/figlib.py FØRST** — den har Fig-klassen med palett per bok (Fig('1p') osv.) og primitiver: coords/plot/point/shade_under, number_line, fraction_bar, bar_chart, normal_curve, unit_circle, right_triangle, pie, sign_chart, flow_box, vector, line/rect/circle/poly/text/arrow/title, og fmt() for norsk tallformat.
2. **IKKE rediger figlib.py** (deles av parallelle agenter — konflikt!). Trenger du nye primitiver (boksplott, histogram, valgtre, tabell, prikkdiagram, arealmodell m.m.): definer dem som hjelpefunksjoner ØVERST i din egen generator-fil.
3. Skriv generator: scripts/svg/figurer-<bok>.py som lager ALLE bokens SVG-figurer ved kjøring. Filnavn: samme som i prompten, men .svg i stedet for .png. Output: public/images/content/<bok>/.
4. **Visuell QA er OBLIGATORISK**: render med `node scripts/svg/render_check.mjs public/images/content/<bok>/` og INSPISER renderne (Read på .check.png-filene) — minst en tredjedel av figurene, og ALLE med ny/uvanlig layout. Fiks tekstkollisjoner, klipping og feil geometri, og re-render. Slett .check.png-filene til slutt (de skal ikke i repo).

## Kvalitetskrav
- Matematisk korrekt: regn ut alle posisjoner/verdier (det er hele poenget med SVG-ruten)
- Følg promptens faglige innhold og bokens palett; promptens dekorative formuleringer kan forenkles
- Maks 5-6 korte tekstetiketter, god avstand, ingen overlapp; tekststørrelse ≥ 26
- Unicode for matematikk: √ ² ³ π μ σ ≈ ≤ ≥ − (fmt() gir norsk desimalkomma og ekte minus)

## Etterarbeid per bok
- Fjern de SVG-implementerte promptene fra scripts/bildeprompter-<bok>-innhold.txt (parene filnavn+prompt), så fila kun inneholder Gemini-scenene. Oppdater headerkommentaren med «# NB: Presisjonsfigurer er flyttet til SVG — se scripts/svg/figurer-<bok>.py».
- Rapport: antall SVG / Gemini per bok, nye primitiver du laget, QA-runder og hva som ble fikset.

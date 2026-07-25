# Figurbestillinger — ECON1100 Matematikk I (UiO)

Figurene bestilles her av kapittelforfatterne og bygges i figurfasen. Filene
legges i `public/images/textbook/econ1100/` og MÅ lastes opp med
`npx tsx scripts/upload-media-storage.ts` før deploy — ellers 404 i produksjon.

**Stil:** akser i `#6b7280`, kurver i mid-tone farger, norsk tekst, transparent
bakgrunn (lesbar i både lys og mørk modus), viewBox ca. 480×360, merkede akser
og punkter med stiplede hjelpelinjer ned til aksene. Valider XML før wiring.

## Hvorfor ECON1100 trenger figurer

Skjelettet lover grafisk arbeid flere steder. FD-oppgaven (endimensjonal
funksjonsdrøfting — i alle seks ordinære sett 2020–2025) ber om **skisse**, og i
minst ett sett gis grafen til $f$ eller $f'$ og kandidaten skal **lese av**
hvor $f$ vokser og har ekstrempunkter. Nivåkurve- og Lagrange-oppgavene lever av
tangeringsbildet (indifferenskurve mot budsjettlinje, isokvant mot isokostlinje).

DNA-regnefag er tydelig: **figur-i-ord er et komplement, aldri en erstatning**,
og **ber oppgaven om figur, skal løsningsforslaget vise figuren** (skjerpet 15.
juli 2026, produkteier). Kjernediagrammene som gjentas gjennom boka SKAL derfor
rendres som SVG.

Samtidig er ECON1100 et regnefag der de fleste delpunktene er ren algebra: én
figur per gjentatt standarddiagram er nok, og de gjenbrukes som referansefigur i
drillkapitler og øvingseksamener («slik skal skissen din se ut — merk aksene»),
med ny `id` og ny, skreddersydd `caption`.

## Regler for bestillinger

- **Kapitlet skal være lesbart FØR figuren finnes:** hvert figursvar har
  allerede en figur-i-ord som står på egne ben (akse-konvensjon, kurveform,
  markerte punkter, tangent, asymptotisk oppførsel). Når SVG-en er bygget,
  wires `image`-blokken inn nøyaktig der figur-i-ord-teksten står.
- **Figuren skal stemme med kapitlets faktiske eksempel.** Bestillingsteksten
  under gir formålet; figurbyggeren leser kapitlet som er skrevet og bruker
  DENS funksjon, DENS tall og DENS punktnavn. En figur som viser en annen
  oppførsel enn kapitlets kjørte fasit er feil uansett hvor pen den er.
- **`caption` skreddersys per plassering** (knytt figuren til kapitlets eget
  eksempel og termbruk); `alt` beskriver figuren bokstavelig for skjermleser og
  oppgir aldri tallverdier aksene ikke har merket.
- **En figur viser bare det kapitlet har lært bort.** Del figuren ved behov —
  f.eks. nivåkurven som ren helning i kap. 5.1, og krumningsvarianten først i
  kap. 5.2.
- Ber en oppgave- eller prøvetekst om «skisser», «tegn grafen», «vis i figur»
  eller «marker i diagrammet», skal løsningsforslaget vise figuren — også inne i
  `collapsible`-er (nøstede `image`-blokker rendres, men MÅ ha `id` og `src` mot
  en opplastet fil).
- Ingen figur skal vise matrise-/vektorapparat eller andre tema fra
  fraværsbildet (se BYGGEKONTRAKT «Kritisk faglig avgrensning»).

## Bestillinger

| # | Kapittel | Filnavn | Hva figuren skal vise |
|---|---|---|---|
| F1 | 3.2 | `tangent-under-konveks.svg` | Konveks kurve $f$ med tangentlinjen i $x_0$ tegnet inn. Tangenten ligger UNDER kurven; de to vertikale avstandene $\Delta f$ (kurve) og $df$ (tangent) fra $x_0$ til $x_0+\Delta x$ er merket, så approksimasjonsfeilens fortegn blir synlig. Brukes til å forklare hvorfor konveksitet gir underestimat. |
| F2 | 4.1 | `fortegnsskjema.svg` | Fortegnslinje/fortegnsskjema: en tallinje med nullpunktene til $f'$ og en under den for $f''$, med $+$/$-$ i hvert intervall og konklusjonslinjen «vokser / avtar» og «konveks / konkav» under. Dette er sensors forventede *begrunnelse*, ikke bare et hjelpemiddel. Gjenbrukes som referansefigur i 4.5 og i Del 4-prøvene. |
| F3 | 4.2 | `x4-globalt-minimum.svg` | Grafen til $f(x)=x^4$ nær origo med den karakteristisk flate bunnen. Horisontal tangent i $x=0$ markert, med tekstankere: «$f'(0)=0$», «$f''(0)=0$ — testen sier ingenting» og «$f''(x)=12x^2\ge 0$ overalt → globalt minimum». Bærer fallgruve-warningen i kap. 4.2. |
| F4 | 4.2 | `x3-stasjonaer-ikke-ekstrem.svg` | Grafen til $f(x)=x^3$ med horisontal tangent i $x=0$, punktet markert som vendepunkt (ikke ekstrempunkt), og $f''$ sitt fortegnsskifte antydet på hver side. Viser skillet stasjonærpunkt vs. ekstrempunkt. |
| F5 | 4.3 | `randminimum.svg` | En funksjon definert på et halvåpent/lukket område (typisk $\sqrt{x}$ på $[0,\infty)$ eller $x-\ln x$ på $(0,\infty)$): definisjonsmengdens endepunkt markert med utfylt punkt, pil som viser at $f$ vokser inn i området fordi $f'>0$, og randminimum merket. Den grafiske motsatsen til «å sette inn tallverdier». |
| F6 | 4.4 | `drofting-syntese.svg` | Full skisse av kapitlets tredjegradsfunksjon: nullpunkter, topp- og bunnpunkt, vendepunkt, og tangentlinjen i det oppgitte punktet tegnet inn med sitt stigningstall. Dette er «slik ser en konsistent skisse ut»-figuren, og gjenbrukes i 4.5, i Del 4-prøvene og i øvingseksamen 1 (Oppgave 4). |
| F7 | 4.4 | `avlesning-fmerket.svg` | Grafen til **$f'$** tegnet alene, med områdene over og under $x$-aksen markert og tolkningslinjen under: «$f'>0$ → $f$ vokser», «$f'<0$ → $f$ avtar», «$f'=0$ → stasjonærpunkt». Trener den omvendte oppgaven (gitt grafen til $f'$, si noe om $f$). |
| F8 ✅ | 5.1 | `nivakurve-helning.svg` (LEVERT av B2 25. juli 2026 — bygget, wiret inn i kap. 5.1 og lastet opp til Storage, verifisert 200) | En nivåkurve $F(x,y)=c$ i $xy$-planet med tangenten i et markert punkt. Helningen merket som $y'=-F'_x/F'_y$, med stiplede hjelpelinjer til aksene. Økonomitolkningen (indifferenskurve / MRS) står i `caption`, ikke i figuren. |
| F9 ✅ | 5.2 | `nivakurve-krumning.svg` (LEVERT av B2 25. juli 2026 — bygget, wiret inn i kap. 5.2 OG gjenbrukt som fasitfigur i `econ1100-5-prove` prøve 5.D, lastet opp til Storage, verifisert 200) | To nivåkurver ved siden av hverandre: én konveks ($y''>0$, avtakende marginal substitusjonsrate) og én konkav ($y''<0$), begge fallende, med tangenter i to punkter som viser hvordan helningen endrer seg. Bærer krumningsargumentet i kap. 5.2. |
| F10 | 6.1 | `hesse-tre-utfall.svg` | Tre små paneler side ved side, hvert med nivåkurvebildet rundt et stasjonærpunkt: lukkede kurver rundt et **lokalt minimum** ($D>0$, $f''_{xx}>0$), lukkede kurver rundt et **lokalt maksimum** ($D>0$, $f''_{xx}<0$), og hyperbelformede kurver rundt et **sadelpunkt** ($D<0$). Ingen 3D-flate — nivåkurvespråket er allerede lært i Del 5. |
| F11 | 8.2 | `tangering-budsjett.svg` | Budsjettlinjen $p_1x+p_2y=m$ og en indifferenskurve som tangerer den i $(x^*,y^*)$, med stiplede hjelpelinjer til aksene og tangeringsbetingelsen merket som «MRS = prisforhold». Bokas viktigste økonomifigur; gjenbrukes i 8.5, Del 8-prøvene og øvingseksamen 1 (Oppgave 3). |
| F12 | 8.3 | `skyggepris-budsjettskift.svg` | Samme diagram som F11, men med budsjettlinjen skiftet utover ved økt $m$ og en ny tangering på en høyere indifferenskurve. Merket: «$dU^*/dm=\lambda$ — verdien av én krone til». Gjør skyggeprisen synlig. |
| F13 | 9.2 | `isokvant-isokost.svg` | Isokvanten $F(K,L)=\bar Y$ med en isokostlinje $rK+wL=\text{konst.}$ som tangerer den i $(K^*,L^*)$; tangeringsbetingelsen $MP_K/MP_L=r/w$ merket. Akser $L$ (horisontalt) og $K$ (vertikalt). Gjenbrukes i Del 9-prøvene og øvingseksamen 3. |
| F14 | 10.1 | `invers-speiling.svg` | En strengt voksende funksjon $f$ og dens inverse $g$ speilet om linjen $y=x$ (stiplet), med et punkt $(a,b)$ på $f$ og speilpunktet $(b,a)$ på $g$. Gjør både eksistenskravet (monotoni) og $g'(y)=1/f'(x)$ visuelt. |
| F15 | 10.2 | `areal-mellom-kurver.svg` | To kurver med det skraverte arealet mellom dem fra $x=a$ til $x=b$, grensene merket på $x$-aksen. Brukes til arealtolkningen av det bestemte integralet. |

## Figurløfter som verifikator skal sjekke

Etter byggebølgen skal `python3 scripts/hoyskolebok/sjekk-figurer.py econ1100`
være grønn, og dette grepet skal ikke gi treff uten tilhørende `image`-blokk i
løsnings-subtreet:

```bash
grep -nE "skisser|tegn grafen|vis i (en )?figur|marker i diagrammet|ved hjelp av (en )?figur" \
  src/lib/data/chapters/econ1100-*.json
```

Steder som med sikkerhet vil treffe: kap. 4.4, 4.5, `econ1100-4-prove` (prøve
4.D), `econ1100-5-prove` (prøve 5.D) og øvingseksamen 1 (kap. 11.2, Oppgave 4
og 5). Disse SKAL ha SVG i løsningen, ikke bare figur-i-ord.

**Status 25. juli 2026 (B2 — Del 3 og Del 5):** F8 og F9 er bygget, wiret inn og
lastet opp; `sjekk-figurer.py econ1100` er grønn. Prøve 5.D er innfridd — dens
skisse-delpunkt har både figur-i-ord og `image`-blokken `econ1100-5-prove-p4-fig`
(gjenbruk av F9 med skreddersydd caption). F1 (kap. 3.2, `tangent-under-konveks.svg`)
er IKKE bygget: kap. 3.2 har figur-i-ord under overskriften «Slik ser bommen ut»,
og ingen oppgave der lover en figur, så porten er grønn — men bestillingen står
fortsatt og bør bygges i figurfasen. **NB for figurfasen:** worktreet
`bok-econ1100` har en minimal `.env.local` med kun `NEXT_PUBLIC_SUPABASE_URL`, slik
at `sjekk-figurer.py` kan kjøres derfra. Opplasting gjøres med
`python3 scripts/hoyskolebok/last-opp-figurer.py <arbeidstre> econ1100` (leser
nøkler fra hovedtreets `.env.local`).

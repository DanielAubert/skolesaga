# Auditverktøy for Skolesaga-kapitler (22.10.2026)

Daniel 22.10.2026: «Jeg gjør en del auditer, det kan kanskje derfor være greit om du passer på at du lager verktøy som
gjør at vi trenger minst mulig tokens til dette.»

Prinsippet: **alt som kan måles, måles av skript (0 tokens)**. Modellen leser bare et kompakt utdrag, bare blokker som er
endret siden forrige godkjente audit, og dømmer bare det som krever skjønn.

## Kort bruk

```bash
cd Skolesaga
scripts/audit/kjor-audit.sh 1t 2p                       # første audit: alle blokker
scripts/audit/kjor-audit.sh --bare-endret --navn r2 1t   # senere: bare nye/endrede blokker og åpne funn
# → scripts/audit/kjoringer/<dato-tid>-<navn>/OPPDRAG-MODELL.md  (gi denne til modellauditoren)
python3 scripts/audit/hukommelse.py fra-audit scripts/audit/kjoringer/<mappe> --runde r2 --hvem opus-k1
python3 scripts/audit/hukommelse.py status 1t 2p --kort
```

Alt kjører lokalt på Mac-en (Python 3.9 + sympy, Node + KaTeX fra `Skolesaga/node_modules`). Hele 1T + 2P (98 kapitler,
bm + nn) tar ca. 11 sekunder. Eneste nettverkskall: ordlisteporten slår opp ukjente ord i hunspell på adhv-box når
hunspell ikke finnes lokalt — svarene hurtiglagres i `cache/`, så kjente ord trenger aldri noden.

## Arbeidsflyt

1. **Maskin** — `kjor-audit.sh` kjører `maskin.py` (alle porter) og `regn.py` (regnesjekk), og lager `utdrag/<id>.txt`
   + `<id>.manifest.json` og `OPPDRAG-MODELL.md`.
2. **Modell på utdrag** — auditoren leser `OPPDRAG-MODELL.md` og utdragene (aldri rå JSON), dømmer bare skjønn og
   skriver `funn.jsonl` + `dom.json` i kjøringsmappa. Den avgjør også `⚑REGN`-kandidatene (ekte feil eller falskt positivt).
3. **Retting** — retteren bruker `maskin-funn.tsv` (maskinfunn, sortert feil → bør → info) og `funn.jsonl`.
4. **Hukommelse** — `hukommelse.py fra-audit <mappe> --runde R`: blokker med funn (feil/bør) → FUNN, resten av
   blokkene i utdraget → GODKJENT, med hashen fra da utdraget ble laget. Blokker som endres etterpå, regnes som endret.
5. **Neste runde** — `kjor-audit.sh --bare-endret …`: bare blokker som er nye, endret eller har åpne FUNN kommer med.
   Etter retting merkes rettede blokker godkjent når kontrollen er bestått (`marker-godkjent <id> <blokk…> --runde R`).

## Filene

| fil | gjør |
|---|---|
| `felles.py` | kapittel-I/O, `felt(blokk)` = det eleven ser (speiler `content-block-renderer.tsx`/`textbook-exercise-item.tsx`: skjult løsning ved `hideInlineSolution` eller når deloppgavene har løsning), segmentering av `$…$`/`$$…$$`/kode slik `LatexRenderer` gjør det, blokkhash. `_meta` hoppes alltid over. |
| `maskin.py` | alle maskinelle porter (tabellen under). `--narrativ` tar med `-narrativ`-filene, `--tsv` lager funnliste for retteren. |
| `katex_port.cjs` | rendrer hver formel med KaTeX som siden (trust, `\displaystyle` foran inline `\frac`), men `throwOnError: true`. |
| `aeoa.py` | ordlisteportene (æøå og bokmål i nn) med hunspell lokalt → adhv-box → hurtiglager/korpus. |
| `regn.py` | regnesjekk av likhetskjeder (under). |
| `test_regn.py` | mutasjonstest som måler følsomheten til regn.py. |
| `test_maskin.py` | selvtest: kunstig kapittel med én kjent feil per port (24/24 porter slår ut, `_meta` ignoreres). |
| `utdrag.py` | kompakt utdrag for modellen; `--maal` måler tokens rå JSON mot utdrag. |
| `hukommelse.py` | ledger per bok i `ledger/<bok>.json` (hash bm/nn, dato, dom, hvem, runde); fillås. |
| `kjor-audit.sh`, `oppdrag.py`, `OPPDRAG-MAL.md` | samler alt i én kjøringsmappe med ferdig modelloppdrag. |
| `cache/hunspell-*.json` | hurtiglager for ordlisteoppslag (commit — sparer nodekall). `cache/korpus-*` og `kjoringer/` er i `.gitignore`. |

## Portene i maskin.py

| port | alvor | dekker |
|---|---|---|
| katex | feil | formel KaTeX ikke kan rendre (eleven ser rød feiltekst) |
| dollar | feil | `$` som blir stående synlig (ubalansert, inline-formel over linjeskift) |
| prosent-i-matte | feil | `%` uten bakstrek i matte (A4) |
| krollkomma-tekst | feil | `{,}` utenfor matte (A9) |
| desimalpunktum-matte / -tekst | feil / bør | `2.5` i matte; i tekst unntatt kode, «se 1.5», kapittelnr., datoer, klokkeslett |
| tusenskille-komma | bør | `12,500` i matte (A7) |
| literal-n | feil | literal `\n` (ekte `\neq`, `\nu` … er unntatt; A1) |
| kontrolltegn | feil | formfeed/tab/VT fra `\frac`, `\times`, `\vec`, `\right` (A2) |
| mistet-bakstrek | bør | `frac{`, `cdot` uten bakstrek i matte (A3) |
| aeoa | bør | «losning» → «løsning» via ordlista (A5), distinkte ord |
| forbudt | per regel | konveks/konkav, smilende/sur, andrederivert, IQR, arcsin, SOH-CAH-TOA/PEMDAS, «Steg N», vitenskapelig notasjon, kvotientregel, ligning, injektiv/domene/verdiområde, outlier/treediagram/break-even, permille, modelltenkning, interne notiser (V24, KM…), intervall med `( )` (C2), ln/e og R1-stoff under R1, lærebok-/forlagsnavn, læreplanprat, «Hvorfor»-bokser, ✓ (info) |
| stegnummer | feil | «1.»/«1)» som linjestart i løsninger (ikke når oppgaven selv er nummerert) |
| svar-mangler / -rep | bør / info | eksempel uten `**Svar:**`; oppgave med føring over flere linjer uten `**Svar:**` (unntatt «Vis at/Forklar/Tegn …») |
| prosa | bør | a) og b) på én linje, eller én lang linje med regning uten føring |
| vanskegrad / -synker | feil / info | `difficulty` utenfor lett/medium/vanskelig; synkende vanskegrad i en oppgaverekke |
| dobbel-id | feil | samme id to ganger (blokk-id = exercise-id i samme blokk er tillatt) |
| tomt-felt | bør | blokk uten elevsynlig innhold |
| bilde-mangler / alt-mangler | feil / bør | bildesti finnes ikke i `public/`; bilde uten alt-tekst |
| figurhenvisning | bør | «figuren (nedenfor)» uten figur i blokka eller ±3 naboblokker |
| fremmede-tegn | feil | kyrillisk bokstav i prosa («Fellesnemнaren») |
| bmnn-fil/-struktur/-fasit | feil | nn-fil mangler; blokk-id-er, rekkefølge, typer, felt; answer/isCorrect/difficulty/bildesti ulike |
| bmnn-matte/-tall/-svar | bør | formler, tall i teksten, antall `**Svar` ulike i samme felt |
| bmnn-kode | info | GeoGebra-kommandoer ulike (kan være nynorske kommandonavn) |
| nn-bokmaal | bør | fast liste bokmålsformer i nn (ikke, hva, -lig, -het, tegn, foran, Løs( …) |
| nn-bokmaal-ord | info | ord ≤ 10 tegn som nn_NO avviser og nb_NO godtar (distinkte ord) |

## regn.py — automatisk regnesjekk

Finner likhetskjeder (`a = b = c`, `≈`, aligned-rader, `$$= …$$` på ny linje som fortsetter forrige linje) i alle felt,
oversetter hvert ledd til sympy med en egen parser for norsk skolenotasjon (`{,}`, tusenskille `\,`/mellomrom, `\cdot`,
`:`, `\frac`, `\sqrt[n]`, `^` med LaTeX-semantikk, `%`, `‰`, `°`, `\sin^{-1}`, `\log_b`, `\binom`, blandet tall,
enheter i `\text{}` og rett etter `$…$`, «av» = gange, «millioner»), med `sympy.parsing.latex` som smal reserve. Hvert
nabopar sjekkes numerisk med toleranse etter oppgitte desimaler (≈ 1600 → ±50) og avrundingsslakk fra avrundede tall i
høyre ledd. Alternative tolkninger prøves før avvik meldes: % som enhet («prosentpoeng»), grader som tall
(«9,5 °C»), trig-argument i grader, skalaord. Ledd med variabler hoppes over (likninger); kjeder med ≥ 3 symbolske
ledd og like variabelsett sjekkes som identiteter.

Klasser: **avvik** (skal sjekkes), **symbolsk-avvik**, **fasitfelt** (`answer` finnes ikke blant tallene i egen
løsning), og info-klassene **avrunding-likhet** («=» der det burde stå «≈»), **avrunding-mellomledd** (avviket forklares
av en avrundet mellomverdi i venstre ledd), **motsigelse?** (blokka handler om en bevisst motsigelse/«finn feilen»),
**overslag**, **likning?**.

Målt 22.10.2026:

| bok | kjeder | ledd tolket | numeriske par | symbolske par | fasitfelt | avvik | info |
|---|---|---|---|---|---|---|---|
| 1T + 2P | 10 355 | 97 % | 3 280 | 581 | 921 | 1 (ekte) | 35 |
| R1 | 8 791 | 89 % | 1 918 | 436 | 685 | 3 + 1 symbolsk | ≈ 32 |
| R2 | 10 552 | 86 % | 2 094 | 460 | 389 | 9 + 2 symbolske | ≈ 35 |

Falske positive etter justering: 1T/2P 0 av 1 avvik; R1 ca. 1 av 4; R2 ca. 2 av 11 (de øvrige er ekte regne- eller
avrundingsfeil, se sluttrapporten 22.10). Følsomhet (`test_regn.py 1t 2p`, siste tall i en godkjent kjede endret i
kildeteksten): siste siffer +1 fanges i 72 % som avvik (82 % med info-klassen), ×1,1 i 86 %. Resten er i hovedsak
mutasjoner i ledd som ikke er sjekkbare (`x = −1`, `t = 10`).

Ikke dekket (modellen må regne): ledd med variabler/funksjoner (`f(2) = …` uten definisjon i samme ledd), integraler,
grenseverdier, `\pm`, tabeller, tekstsvar, likninger (løsningen settes ikke inn).

## Tokenbesparelse (målt 22.10.2026, tokens ≈ tegn/4)

| | tokens | mot rå filer |
|---|---|---|
| 1T + 2P, bm + nn-filene på disk (98 kapitler) | 1 343 016 | — |
| samme som innrykket JSON uten `_meta` | 1 114 884 | −17 % |
| `utdrag.py` (bm + nn-avvik, maskinmerker) | 367 053 | **−73 %** |
| 5 kapitler fullt utdrag | 28 058 | −72 % |
| samme 5 med `--bare-endret` (ca. 10 % blokker endret) | 3 267 | **−97 %** (−88 % mot fullt utdrag) |

Et fullt 1T + 2P-utdrag er fortsatt ≈ 370 k tokens: del modellauditen i pakker på 8–10 kapitler (≈ 35–45 k tokens).

## Hukommelse (ledger)

`ledger/<bok>.json`: `{kapittel: {blokk-id: {bm, nn, dom, dato, hvem, runde[, notat, tidligere]}}}`. Hashen er sha256
(16 hex) av elevsynlig innhold inkl. fasitfelt og bildestier, så endret ordlyd, tall, svar eller figur gir ny hash, mens
endringer i `_meta`, `allowsUpload` o.l. ikke gjør det. `AUDIT_LEDGER=<mappe>` gir en egen ledger (tester).

## Selvtest

```bash
python3 scripts/audit/test_maskin.py <tom mappe i scratchpad>   # 24/24 porter + _meta
python3 scripts/audit/test_regn.py 1t 2p --maks 600              # følsomhet regn.py
```

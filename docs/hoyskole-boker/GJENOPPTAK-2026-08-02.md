# Gjenopptak: UTV1000 og TDT4120

Skrevet 2. august 2026 da byggingen stanset midt i to bøker. Øktgrensen ble
nådd, og alle byggeagentene ble avbrutt samtidig. **Alt arbeid er sikret i
commits** — ingenting lå usporet da det skjedde.

## Hvor det står

| bok | på disk | mangler | branch |
|---|---|---|---|
| UTV1000 | 10 av 35 | 25 | `bok/utv1000` @ `c3b94f95b` |
| TDT4120 | 26 av 45 | 19 | `bok/tdt4120` @ `b0a3a5ccb` |

Arbeidstrærne står i `.claude/worktrees/bok-utv1000` og `-tdt4120`.

### UTV1000 — mangler 25 filer

```
1-1 1-2 1-3 · 2-1 2-2 2-3 2-4 2-5 · 4-1 4-2 · 5-1 5-2 · 6-1 6-2 6-3
8-4 8-5 8-6
1-prove 2-prove 4-prove 5-prove 6-prove 7-prove 8-prove
```

Ferdig: hele Del 0, hele Del 3, kap. 7.1, og 8-1 til 8-3.
144 definisjoner, 9 quizfiler.

### TDT4120 — mangler 19 filer

```
1-5 1-6 · 2-1 2-2 2-3 2-4 · 3-2 3-5 · 4-4 4-5 · 5-2 5-3 · 6-3 6-5 · 7-2
8-2 8-5 · 1-prove 2-prove
```

**Del 2 er den eneste delen som er helt urørt.** Ingen del er komplett utenom
Del 0. 339 definisjoner.

⚠ **Bare 6 quizfiler er skrevet mot 26 kapitler.** Quizen ligger systematisk
etter kapitlene, og `wire-bok.py` leser den fra `src/lib/data/quiz-staging/`.
Uten quizfilene kan boka ikke wires i det hele tatt. **Ta quizen først når du
gjenopptar** — det er den korteste veien fra 26 kapitler til en bok som kan
verifiseres.

## Det som virket, og bør gjentas

Alle seks byggeagentene fikk en **felles kravliste** før første fil:
`scripts/hoyskolebok/` har ikke plass til den, men innholdet er destillert i
`BYGGEKONTRAKT-MAL.md`. Resultatet er målbart: **null byggespråk i
overskrifter, null fete pseudo-overskrifter og null påstander om leserens
lesehistorikk** i alle 36 nye filer. Til sammenlikning måtte 3 048 + 103 + 72
+ 73 slike ryddes ut av bøker bygget uten den lista.

Kjør denne før du erklærer noe ferdig:

```bash
python3 scripts/hoyskolebok/sjekk-bok.py <emne>
python3 scripts/hoyskolebok/sjekk-statiskflervalg.py <emne>
python3 scripts/hoyskolebok/sjekk-latex.py <emne>
python3 scripts/hoyskolebok/sjekk-alternativref.py <emne>
python3 scripts/hoyskolebok/sjekk-fasitfordeling.py <emne>
python3 scripts/hoyskolebok/sjekk-prosaregel.py <emne>
```

## To feller som gjelder disse to bøkene spesielt

**TDT4120: masterteoremets tilfelle 2 står med `k > 0` i kontrakten. Riktig er
`k ≥ 0`.** Med `k > 0` faller Merge-Sort utenfor teoremet, og to av NTNUs egne
fasiter bruker `k = 0`. Agentene fikk beskjed, men kontrakten er ikke rettet —
gjør det.

**TDT4120: «løkke» er et ekte fagord her.** `for-løkke`, `while-løkke`, «den
ytre løkka». Forbudet gjelder byggespråk i overskrifter og nummererte
kryssreferanser, aldri fagbruken. En rydding må forankres på syntaks.

## Om agentbølgen som stanset

Seks agenter ble startet, men de spawnet i sin tur egne underagenter per
kapittelpar. Det er trolig grunnen til at flåtegrensen ble nådd før
øktgrensen — én av dem skrev selv «Still at the fleet limit. I'll write 2.1
myself while waiting.» Vurder å be agentene arbeide selv i stedet for å
delegere videre, eller å starte færre samtidig.

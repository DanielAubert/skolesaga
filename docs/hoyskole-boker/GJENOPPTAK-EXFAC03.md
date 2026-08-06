# Gjenopptak: de fire EXFAC03-variantene

Skrevet 6. august 2026 da arbeidet ble satt på pause. **Alt er committet og
pushet. Ingen fil er halvskrevet** — de fire agentene ble stoppet kontrollert
rett før de begynte på skjelettene.

## Hvor vi står

| variant | analyse | skjelett | kontrakt | bygg |
|---|---|---|---|---|
| `exfac03-spr` | ✅ 1038 linjer | — | — | — |
| `exfac03-hark` | ✅ 1079 linjer | — | — | — |
| `exfac03-nord` | ✅ 850 linjer | — | — | — |
| `exfac03-east` | ✅ 1050 linjer | — | — | — |

## Neste steg: fire skjeletter

Én agent per variant. Analysen ligger i
`docs/hoyskole-boker/<emne>/EKSAMENSANALYSE.md` og er grunnlaget.

Krav som må stå i hver brief (alle er lærdommer som har kostet oss noe før):

- **v3-format**, ellers stopper `wire-bok.py` på assert:
  ```
  #### Kapittel 3.1: Tittelen
  **id:** `exfac03-spr-3-1` · **number:** 3.1 · **estimatedMinutes:** 75 · **prerequisites:** `exfac03-spr-1-1`

  - **Kapitteltype:** tema.
  - **Description:** Én til tre setninger, REN TEKST.

  **Belegg:** …
  ```
- `prerequisites` MÅ stå i backticks. **Tom linje etter Description**, ellers
  blør den inn i Belegg-blokka. Aldri prosa-forkunnskaper.
- **Hvert prøvekapittel MÅ ha FIRE prøver** — `wire-bok.py` hardkoder
  «Fire prøver …» i beskrivelsen.
- `description` er ren tekst: ingen `$matte$`, `**fet**` eller backticks.
- «Sist du var her» forbudt, også i overskrifter. «## Løkke 3» forbudt.
- Minst 500 quiz og 500 flashcards per bok.
- Kjør `python3 scripts/hoyskolebok/sjekk-skjelett.py <emne>` før ferdigmelding.

## ⚠ Det viktigste å ikke glemme

**Dette er fire ULIKE fag, ikke varianter av ett.** De deler emnekodefamilie og
rollen som obligatorisk examen facultatum, men:

| variant | faget | terminer |
|---|---|---|
| SPR | fonetikk og fonologi, transkripsjon | 6 |
| HARK | humanioras idéhistorie og periodisering | 6 |
| NORD | nordiske studier (mappevurdering) | 6 |
| EAST | Øst-Asia som region, IR, kjønn i Japan/Kina | 8 |

`svexfac03/BYGGEKONTRAKT.md` er **formmal, ikke innholdskilde**.

**Arkivene er tynne** (6–10 filer hver, mot 40 terminer for JFEXFAC04). Hver
bok må si hva den er kalibrert mot og aldri antyde bredere dekning. For HARK
er eksamen **én essayoppgave per termin**, så sjangertrening veier tyngre enn
temabredde.

**Variantspesifikke hensyn analysene har dokumentert:**

- **SPR:** IPA-tegn må overleve i JSON og skal IKKE ligge i `$…$` —
  `sjekk-latex.py` slår ut på løs backslash. Analysen har en egen seksjon.
- **NORD:** mappevurdering, ikke skoleeksamen. Det endrer hele sjangertreningen.
- **EAST:** går om VÅREN (de andre om høsten), oppgavene har fast ordgrense
  (400–800 ord × 3 spørsmål), og veiledningene finnes på både norsk og engelsk.
  Nøytralitetskravet er skjerpet — Kina, Japans krigshistorie, Taiwan, Korea.

## Etter skjelettene

Kontrakt per variant (mal: `svexfac03/BYGGEKONTRAKT.md` og
`juroff1500/BYGGEKONTRAKT.md`), så bygg i eget worktree per bok:

```bash
git worktree add .claude/worktrees/bok-<emne> -b bok/<emne>
# … agenter skriver kapitler + quiz-staging …
python3 scripts/hoyskolebok/wire-bok.py <emne>
rm -rf src/lib/data/quiz-staging
python3 scripts/hoyskolebok/sjekk-bok.py <emne>
```

⚠ **Tell quiz-staging mot antall temakapitler FØR wiring.** JUROFF1500 ble
wiret med 750 av 774 spørsmål fordi ett kapittels quizfil ble skrevet etter
wiringen — og bokporten var grønn likevel, siden 750 er godt over minstekravet
på 500.

⚠ Ved merge til main: `python3 scripts/hoyskolebok/los-bokmerge.py` løser de
fem wiringkonfliktene. Kjør `npx tsc --noEmit` etterpå.

## Kontekst

Kartleggingen i `UIO-FORSTESEMESTER-KARTLEGGING.md`: 23 av 136
1.-semesteremner har bok. Disse fire dekker til sammen **15 studieløp** og er
den billigste veien videre. Målt på nytt med
`python3 scripts/hoyskolebok/mal-forstesemester.py`.

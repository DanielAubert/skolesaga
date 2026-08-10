# Gjenopptak: de fire EXFAC03-variantene

Oppdatert 10. august 2026. **Arbeidet er FULLFØRT — alle fire er live.**
Dokumentet beholdes som oppskrift for neste flervariant-familie.

## Hvor vi står

| variant | analyse | skjelett | kontrakt | config | bygg |
|---|---|---|---|---|---|
| `exfac03-spr` | ✅ | ✅ 47 kap | ✅ | ✅ | ✅ **LIVE** — 57 filer, 857 fc, 894 quiz |
| `exfac03-east` | ✅ | ✅ 40 kap | ✅ | ✅ | ✅ **LIVE** — 48 filer |
| `exfac03-hark` | ✅ | ✅ 38 kap | ✅ | ✅ | ✅ **LIVE** — 45 filer, 705 fc, 747 quiz |
| `exfac03-nord` | ✅ | ✅ 48 kap | ✅ | ✅ | ✅ **LIVE** — 57 filer, 831 fc, 926 quiz |

**ALLE FIRE VARIANTENE ER LIVE.** Katalogen står på **45 bøker** (10. august 2026).

NORD var den første boka bygget med rang- og stubbekravet i agentbriefen fra
start, og forskjellen er målbar: hele boka landet på 26 % fasit lengst,
21 % kortest, rang 27/27/24/22 og 0 % stubber — **ingen fil over noe tak**,
uten en eneste rettrunde fra koordinatoren. HARK trengte tre.



## Oppskriften som virket — gjenbruk den

**Én bok om gangen, 4–6 agenter.** 22 agenter samtidig staller på API-overlast.
SPR ble bygget med fem, NORD med seks, og begge deler fungerte.

⚠ **Øktgrensen tar agenter midt i sluttverifiseringen.** To NORD-agenter stanset
nøyaktig der, etter at quizbankene var grønne. Filene lå på disk, og
koordinatoren kunne måle og gateste ferdig selv — fordi hver agent committet
underveis og rapporterte hva den hadde målt. Bygg alltid slik at arbeidet er
gjenopptakbart av en annen enn den som startet det.

Hver byggeagent trenger i briefen:
- kontrakt + skjelett + analyse som lesning, og en ferdig bok som strukturmal
- **LENGDE-TELL i BEGGE retninger.** Rotasjon, ikke retning: fasiten lengst i
  ca. én av fire, kortest i ca. én av fire. Rotårsaken er at distraktorene får
  en påhengt begrunnelsesklausul mens fasiten står som bar etikett — fjern
  fyllet fra distraktorene. Mål selv på staging; `quiz-lengdesjekk.mjs` virker
  først etter wiring.
- **LENGDERANG og STUBBER** *(nytt 10. august 2026 — se BYGGEKONTRAKT-MAL)*.
  Ytterpunktmålingen ser bare rang 1 og rang 4. HARK Del 6 hadde fasiten på
  rang 3 i 62–95 % av spørsmålene og var grønn på ytterpunktene. Krev at
  agenten måler rangfordelingen selv og lander nær 25 % på hver rang, og at
  ingen distraktor er under halvparten av snittet til de tre andre.
  Rettemåten er ALLTID å heve distraktorene — gjør den gale påstanden mer
  SPESIFIKK, ikke lengre med fyllord. Fasiten røres aldri.
- quizforklaringer skal aldri vise til et alternativs plassering
- `description` ren tekst · «Sist du var her» forbudt · byggespråk forbudt ·
  `difficulty` = `lett|middels|vanskelig` · deloppgaver a), b), c)
- **hvert prøvekapittel MÅ ha fire prøver** (wire-bok hardkoder teksten)

## Variantspesifikt — det som skiller dem

**HARK.** Emnet la om fra essay til **mappe**, og bare ÉN termin (H2024)
dokumenterer dagens form. Fem av seks terminer er det utgåtte essayformatet.
Kontrakten har hard port på formrammen. Ingen oppgave er «skriv dette på 45
minutter» — mappa er reviderte tekster, så alle øvelser har avgrensningstrinn
og revisjonsrunde. Del 6 er bevisst overdimensjonert mot frekvens (1 av 6
terminer, men 2 av mappas 3 oppgaver) — ikke «rett» den ned.

**NORD.** Mappe med **bestått / ikke bestått — ingen gradert skala**. Det snur
husets karakterregel: «godkjent er målet, ikke perfeksjon», med en
bestått-på-marginen-besvarelse og registrene *ikke godkjent / godkjent
(minstekravet) / klart over minstekravet*. `A-besvarelse`, `karakterskala` og
`fire timer` er forbudte termer. Prøvekapitlene er **mappeøvelser**, ikke
eksamenssett.

**EAST.** Tre spørsmål à **400–800 ord** som teller likt — ordgrensen er bokas
ryggrad, og alle prøver og modellbesvarelser skal oppgi ordtall. Skjerpet
nøytralitet (Kina, Japans krigshistorie, Taiwan, Korea) med fem vippe-case og
en uttømmende robust-liste som ikke skal balanseres bort. Landbalansen er
strukturell: ett kapittel per land, identisk quizkvote.

## Etter bygging, per bok

```bash
python3 scripts/hoyskolebok/wire-bok.py <emne>
rm -rf src/lib/data/quiz-staging
python3 scripts/hoyskolebok/sjekk-bok.py <emne>
# merge til main:
python3 scripts/hoyskolebok/los-bokmerge.py && npx tsc --noEmit && npm run build
```

⚠ **Tell quiz-staging mot antall temakapitler FØR wiring.** JUROFF1500 ble
wiret med 750 av 774 spørsmål fordi én quizfil ble skrevet etter wiringen — og
bokporten var grønn likevel, siden 750 er over minstekravet på 500.

## Kontekst

`UIO-FORSTESEMESTER-KARTLEGGING.md`: 23 av 136 1.-semesteremner har bok. De
fire EXFAC03-variantene dekker **12 unike studieløp** (ikke 15 — radsummen
dobbelttelte «Nordiske studier» og to studieretninger).

⚠ De fire er IKKE varianter av samme emne. `SVEXFAC03`- og
`JFEXFAC04`-kontraktene er **formmal, ikke innholdskilde**.

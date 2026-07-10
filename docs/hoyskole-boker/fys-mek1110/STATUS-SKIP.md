# STATUS: HOPPET OVER — fys-mek1110

**Dato:** 2026-07-09
**Avgjørelse:** Bygg IKKE eget SKJELETT.md for `fys-mek1110`.
**Grunn:** Nedlagt emne, og etterfølgeren er allerede dekket av en bygget (skjelett-)bok.

## Bakgrunn

FYS-MEK1110 Mekanikk (UiO) er **nedlagt** (jf. `EKSAMENSANALYSE.md` §0):

| Trekk | Status |
|---|---|
| Siste ordinære undervisning | Vår 2022 |
| Siste eksamen | Vår 2024 |
| Etterfølger | **FYS1100 – Mekanikk og modellering** (fra H2022/2023) |

Analysen slår eksplisitt fast at emnet bare er *byggeverdig* fordi pensumkjernen
lever videre i FYS1100 («**Etterfølgeren FYS1100 gjør denne boka byggeverdig** ved
at pensumkjernen fortsatt eksamineres», §8). Det finnes altså ingen aktiv
FYS-MEK1110-eksamen å kalibrere mot — kun FYS1100s.

## Hvorfor SKIP i stedet for etterfølger-profilering

Oppdraget sier: bygg etterfølger-profilert skjelett i fys-mek1110-mappa **med
mindre** etterfølgeren allerede er «dekket av bygget bok». Det er nettopp tilfellet:

1. **`docs/hoyskole-boker/fys1100/SKJELETT.md` finnes allerede** (komplett, bygget
   9. juli 2026): 33 kapitler, 559 quiz, 578 flashcards, KVALITETSPORT OK.
2. FYS1100-skjelettet dekker **hele den delte mekanikk-kjernen** som en
   etterfølger-profilert FYS-MEK1110-bok ville bestått av: kinematikk/skrått kast
   (Del 2), Newtons lover + frilegemediagram (Del 3), sirkelbevegelse (Del 4),
   arbeid–energi–bevegelsesmengde (Del 5), rotasjon/stive legemer/spinn (Del 6),
   differensiallikninger/svingninger (Del 7), numerisk modellering i Python
   (Del 8), gravitasjon (Del 9) og spesiell relativitet (Del 10).
3. FYS1100 har også egen fagprofil i plattformen
   (`src/lib/data/fagprofil/fys1100.json`), med tittel «FYS1100 Mekanikk og
   modellering (tidligere FYS-MEK1110)» — koblingen er allerede eksplisitt anerkjent.

En etterfølger-profilert FYS-MEK1110-bok måtte per definisjon kalibreres mot
FYS1100s gjeldende eksamensform og nivå (analysen §0/§7). Resultatet ville blitt
en **tilnærmet duplikat av det eksisterende FYS1100-skjelettet** — samme
institusjon (UiO), samme aktive eksamen, samme pensumkjerne. Det bryter med
pipelinens mål (unik eksamensrettet dekning) og er akkurat «dekket av bygget bok».

## Det FYS-MEK1110-unike er ikke eksamensrelevant lenger

De temaene der FYS-MEK1110 gikk dypere enn FYS1100 — **roterende referansesystemer
/ fiktive krefter (Coriolis/sentrifugal)**, **Lorentz/Minkowski i full dybde** og
**elastisitet (spenning/tøyning, E-modul)** — er i analysen merket «dypere enn
FYS1100-nivå; kalibrer vekt lavt» (§0, §6, §7 nivå 3). Siden emnet er nedlagt uten
aktiv eksamen, finnes det ingen eksamensmål å rette dette restinnholdet mot. Der
FYS1100-eksamen faktisk berører disse temaene (mildere relativitet på
partikkelhenfall-form), er de allerede dekket i FYS1100-skjelettets Del 10.

## Konklusjon

Ingen ny eksamensrettet bok kan forsvares for `fys-mek1110`: emnet har ingen aktiv
eksamen, og etterfølgeren FYS1100 — den eneste gyldige kalibreringsmålestokken — er
allerede dekket av `fys1100/SKJELETT.md`. Fase 2 avsluttes med SKIP.
Eksamensanalysen (`EKSAMENSANALYSE.md`) beholdes som historisk grunnlagsdokument og
som kalibreringskilde for FYS1100-boka.

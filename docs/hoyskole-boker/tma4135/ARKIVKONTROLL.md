# Arkivkontroll — hva TMA4135-korpuset faktisk er

Målt 29. juli 2026 mot `~/Desktop/Eksamner/` og `_sortering/manifest.csv`.
Skrevet fordi tre ulike tall var i omløp, og kildepåstander skal være sanne.

## Fasit

**56 unike filer** med `tma4135` i filnavnet: **29 oppgavesett** og
**27 løsningsforslag**. Alle er høst- eller kontinuasjonseksamener. **Null
våreksamener** — emnet har aldri hatt en.

De ligger i to grupper, med hver sin navnekonvensjon:

| Gruppe | Mappe | Navn | År | Filer |
|---|---|---|---|---|
| Nyere | `NTNU/TMA4135/` | `Matte4D-2015H.pdf` | 2015–2024 | 26 |
| Eldre | `NTNU/TMA4125/`, `TMA4123/`, `TMA4130/` | `tma4135_05h.pdf` | 2003–2014 | 30 |

Den eldre gruppa ligger under søsteremnene fordi NTNUs Matematikk 4-serie har
byttet emnekode flere ganger. Filnavnene sier `tma4135`, så de hører hit.

## De tre gale tallene, og hvorfor

| Påstand | Tall | Feilen |
|---|---|---|
| Byggelederens prompt | 86 filer | Søkte på `tma4135` i hele **filstien**, ikke filnavnet. Traff dermed alt i TMA4125-mappa, inkludert 52 rader som ikke er unike filer. |
| Kontraktagentens funn | 26 filer | Så bare i `NTNU/TMA4135/`. Riktig for den mappa, men de 30 eldre lå et annet sted. |
| Denne kontrollen | **56 unike** | Deduplisert på filnavn, på tvers av alle mapper. |

Agenten hadde rett i å avvise byggelederens tall, og rett i å skrive kildenoten
med verifiserte tall framfor oppgitte. Den kunne bare ikke vite om filene under
søsteremnene.

## Hva boka skal påstå

**Frekvensnevneren forblir 13** — de velkarakteriserte settene H2015–Kont2024
som `EKSAMENSANALYSE.md` faktisk har gjennomgått. Står det «N av 13 sett» i
boka, er det disse.

De eldre settene (2003–2014) er **ikke** talt med i frekvensene, av to grunner:
de er ikke gjennomgått i analysen, og pensum har drevet over tjue år. De skal
likevel nevnes i kildegrunnlaget, fordi de finnes og fordi de gir dekning for
at oppgavetradisjonen er gammel og stabil.

**Ordet «sensorveiledning» skal ikke brukes.** Alle 27 er
`INTERNT-LF` — faglærerskrevne løsningsforslag, opphavsrettslig vernet.
Fasitkilde, aldri gjengitt.

## Konsekvens for EKSAMENSANALYSE.md

Analysen sier at arkivet er 26 PDF-er. Det er sant for mappa den så i, men
ufullstendig. Byggelederen oppdaterer §8 med denne kontrollen som kilde, slik
at kildenoten i boka og analysen ikke motsier hverandre.

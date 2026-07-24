# GJENOPPTAK — tre bøker under bygging (startet 24. juli 2026)

## STATUS 25. juli, natt (oppdater denne blokken ved hvert avbrudd)

| Bok | Steg 1 kapitler | Steg 2 wiring | Figurer | Steg 3 verifikasjon | Steg 4 sluttport |
|---|---|---|---|---|---|
| FYS1001 | ✅ 35/35 (+7 prøver) | ✅ BOKPORT OK (42 filer / 550 fc / 558 quiz) | ✅ 95 SVG bygget | 🔄 5 agenter (V1–V5) | ⬜ |
| ECON2310 | ✅ 29/29 (+6 prøver) | ✅ BOKPORT OK (35 filer / 542 fc / 528 quiz) | 🔄 3 agenter (G1–G3), 49 bestillinger | ⬜ | ⬜ |
| ECON2220 | ✅ 34/34 (+7 prøver) | ✅ BOKPORT OK (41 filer / 554 fc / 570 quiz) | 🔄 2 agenter (F1–F2), 64 bestillinger | 🔄 Del 6–7 (W1) | ⬜ |

Alle tre branchene er **pushet til GitHub** (`bok/fys1001`, `bok/econ2310`,
`bok/econ2220`), så arbeidet er trygt selv om maskinen dør.

**Rekkefølgen som gjelder:** figurer må være ferdige før verifikasjon starter i
samme del (ellers redigerer to agenter samme fil), og verifikasjon må være
ferdig før sluttporten.

**Sluttporten per bok (ikke startet for noen):**
1. `npx tsx scripts/upload-media-storage.ts` fra HOVEDTREET (worktreene mangler
   `.env.local`, og Turbopack avviser deres `node_modules`-symlink). NB: bare 19
   av fys1001s 95 SVG-er er i Storage — resten gir 404 til dette er kjørt.
2. `npx tsc --noEmit` + `npm run build` fra hovedtreet (merge bokbranchen inn i
   et landingsbranch der først).
3. Prod-curl `PORT=3063 npm run start` → 200 + innholdssjekk på bokforside,
   3 kapittelruter, quiz, flashcards, kildegrunnlag.
4. Statustavle i `docs/hoyskole-boker/README.md` + kryss av i `TODO-OPUS.md`.
5. Merge `origin/main` inn i bokbranchen (additive konflikter i delte
   wiring-filer — behold BEGGE sider; `_registry.json` har både `chapterIds` og
   `aliases`), så push og land på main.

Denne siden er inngangen hvis en økt blir avbrutt (kvotestopp, ECONNRESET,
død agent). **Alt arbeid ligger på disk og i git — ingenting bor i en samtale.**
Lim inn gjenopptakssetningen nederst i en ny Claude Code-økt, så fortsetter den
der forrige stoppet.

## Hvor arbeidet foregår

| Bok | Kapitler | Arbeidstre | Branch |
|---|---|---|---|
| FYS1001 Innføring i fysikk (UiO) | 35 | `.claude/worktrees/bok-fys1001` | `bok/fys1001` |
| ECON2310 Makroøkonomi 2 (UiO) | 29 | `.claude/worktrees/bok-econ2310` | `bok/econ2310` |
| ECON2220 Mikroøkonomi 2 (UiO) | 34 | `.claude/worktrees/bok-econ2220` | `bok/econ2220` |

Hvert arbeidstre er et eget git-arbeidstre på egen branch, utgått fra `main`
(`0cc69421`). De deler ikke indeks, så flere agenter kan committe samtidig uten
å tråkke på hverandre. Rammeverket (EKSAMENSANALYSE.md + SKJELETT.md) er ferdig
og KVALITETSPORT-godkjent for alle tre.

## Måle fremdrift — én kommando per bok

```bash
python3 scripts/hoyskolebok/status-bok.py fys1001      # full oversikt per del
python3 scripts/hoyskolebok/status-bok.py fys1001 --mangler   # bare id-ene som gjenstår
```

Skriptet leser **disk**, ikke rapporter: det sammenligner kapittel-id-ene
skjelettet lover med JSON-filene i `src/lib/data/chapters/`, teller
flashcard-definisjoner og oppgaver, og flagger ugyldig JSON. Det er fasiten på
hvor langt boka er kommet — kjør det først, alltid.

## Byggeoppdrag (hvem eier hvilke kapitler)

Hver bok har sin egen `docs/hoyskole-boker/<emne>/GJENOPPTAK.md` med den
detaljerte tabellen (agent → kapittel-id-er). Grovinndelingen:

- **fys1001 (6 oppdrag):** A1 = Del 0+1 · A2 = Del 2+3 · A3 = Del 4 · A4 = Del 5+6 · A5 = Del 7 · A6 = Del 8 (eksamenstrening)
- **econ2310 (5 oppdrag):** B1 = Del 0+1 · B2 = Del 2+3 · B3 = Del 4 · B4 = Del 5+6 · B5 = Del 7
- **econ2220 (7 oppdrag):** C1 = Del 0+1 · C2 = Del 2 · C3 = Del 3 · C4 = Del 4 · C5 = Del 5 · C6 = Del 6+7 · C7 = Del 8

Byggeagentene committer **etter hvert ferdige kapittel**, ikke bare på slutten.
Et avbrudd koster derfor maks ett kapittel, og `git log` i arbeidstreet viser
nøyaktig hva som er landet.

## Fasene per bok (BYGGEPLAN-MAL.md styrer)

1. **Steg 0** — BYGGEKONTRAKT.md + BOKCONFIG.json + GJENOPPTAK.md.
2. **Steg 1** — byggebølge: kapittelforfatterne over.
3. **Steg 2** — wiring: `python3 scripts/hoyskolebok/wire-bok.py <emne>`
   (COURSE-entry, registry, quiz-data, institusjoner), så
   `python3 scripts/hoyskolebok/sjekk-bok.py <emne>` → BOKPORT.
4. **Steg 3** — verifikatorbølge: etterregn ALLE fasiter numerisk (python/sympy).
5. **Steg 4** — sluttport: studentpanel-port, KaTeX-port, build, prod-curl, merge
   main inn, push.

## Faste feller (dyrekjøpt erfaring — les før du fortsetter)

- **Mål alltid disk før du bygger videre.** Døde agenter etterlater som regel
  ferdige filer; å bygge på nytt er sløsing. `status-bok.py` er laget for dette.
- **KaTeX-port før «ferdig»:** kjør alle `$…$`/`$$…$$` gjennom
  `katex.renderToString` og let etter `katex-error`. `\begin{psmallmatrix}`
  finnes ikke i repoets KaTeX, og en formel som ender på løs backslash knekker
  fordi rendereren `.trim()`-er strengen.
- **Ingen duplikat-datasett:** drilloppgaver og prøver skal ha egne tall — ikke
  gjenbruk av gjennomregnede eksempler i samme bok.
- **`_registry.json` har to nøkler** (`chapterIds` OG `aliases`) — behold begge
  ved merge, ellers krasjer /quiz i build.
- **Prod-curl:** `pkill -f "next start"` dreper ikke serveren (den heter
  `next-server`). Bruk `kill -9 $(lsof -ti :PORT)`, ellers tester du gammel build.
- **SVG-er må lastes opp til Supabase Storage** før deploy
  (`npx tsx scripts/upload-media-storage.ts`), ellers gir hver figur 404 i
  produksjon — bildene serveres fra Storage, ikke fra `public/`. Gjelder alle
  nye figurer agentene lager. Verifiser med curl mot
  `<SUPABASE_URL>/storage/v1/object/public/media/images/textbook/<emne>/<fil>.svg`.
- **Figurbestillinger:** agentene skriver ikke SVG selv i econ-bøkene; de fører
  `docs/hoyskole-boker/<emne>/FIGUR-BESTILLINGER.md`. Den lista er arbeidsordren
  for figurgenereringen før sluttporten.

## Gjenopptakssetning (lim inn i ny økt)

> Les docs/hoyskole-boker/GJENOPPTAK-3-BOKER.md og
> docs/hoyskole-boker/<emne>/GJENOPPTAK.md, kjør
> `python3 scripts/hoyskolebok/status-bok.py <emne>` for å måle fremdrift på
> disk, og fortsett byggingen av `<emne>` etter BYGGEPLAN-MAL.md fra det steget
> statusen viser. Bygg aldri på nytt det som allerede ligger på disk.

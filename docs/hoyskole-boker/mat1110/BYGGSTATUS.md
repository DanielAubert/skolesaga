# BYGGSTATUS — mat1110 (oppdateres ved hver commit)

**Sist oppdatert:** 20. juli 2026 — STEG 4 FERDIG, boka komplett (unntatt push/merge).

- **Steg 1 (byggebølge): FERDIG.** 40/40 kapittelfiler, quiz 515, flashcards 510
  (eksakt lik skjelettets Summeringskontroll). Del 6+7 bygget i denne økta;
  Del 0–5 lå komplett fra DELVIS-commit 38314aaf (alle kvoter verifisert).
- **Steg 2 (wiring): FERDIG.** wire-bok.py → WIRING OK (registry 10741,
  quiz-data-mat1110.ts, institusjoner uio). kildegrunnlag.ts-oppføring lagt til.
  quiz-staging slettet (mellomprodukt).
- **Steg 3 (verifiseringsbølge): FERDIG.** 4 Opus-verifikatorer (Del 0–2, 3–4,
  5, 6–7): ~430 fasiter etterregnet numerisk, 0 mattefeil funnet. Fikser: 7
  skrivefeil, verifiser-sanering, 1 pausepunkt.
- **Steg 4 (sluttport): FERDIG.** BOKPORT OK (null avvik, null merknader) etter
  portfiks (10 symbollister, 4 warning-blokker, 5 verifiser-omformuleringer,
  26 deloppgave-formatfikser, 1 læringsmål-gloss). Studentpanel-/bølge 4+5-greps
  grønne. Quiz-lengdesjekk ✅ (30 % eneste-lengst).
  - **SVG Storage:** VERIFISERT 20. juli. Boka har KUN 1 figur
    (`mat1110-7-3-o6-omrade.svg`). Lå IKKE i media-bucket ved gjenopptak
    (public-URL ga 400) — bakgrunnskjøringen fra 18. juli hadde altså ikke
    fullført. Lastet opp kirurgisk (kun denne fila, upsert) → public-URL 200.
  - **Porter:** `npx tsc --noEmit` EXIT 0. `npm run build` EXIT 0 (ingen feil,
    BUILD_ID UBEjyx0F-EGCt8WV4gh6O). Prod-curl `PORT=3063 npm run start`:
    /bok/mat1110, /mat1110-0-1, /mat1110-1-1, /mat1110-7-3, /mat1110-1-prove,
    /flashcards, /kildegrunnlag, /bok/trinn/hoyere/uio → alle 200 med ekte
    innhold (7-3 refererer SVG-en; 1-1 = 515 KB; forside viser MAT1110/Kalkulus).
  - Alle 40 kapittelfiler validert med json.load (0 feil).
- **GJENSTÅR:** Kun push + merge til main (utføres utenfor denne økta).
- **Kjent akseptert avvik (uendret):** kryssbok-lenker til mat1100 som klartekst
  med aktiveringsmarkør — mat1100 finnes ikke i denne worktreen; aktiveres etter
  merge.
- **Kjente avvik:** kryssbok-lenker til mat1100 skrevet som klartekst med
  aktiveringsmarkør (ikke lenke) — mat1100 finnes ikke på disk her; død lenke
  ville feilet BOKPORT. Aktiveres når mat1100-boka lander.

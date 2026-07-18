# BYGGSTATUS — mat1110 (oppdateres ved hver commit)

**Sist oppdatert:** 18. juli 2026, etter steg 1–3 + BOKPORT.

- **Steg 1 (byggebølge): FERDIG.** 40/40 kapittelfiler, quiz 515, flashcards 510
  (eksakt lik skjelettets Summeringskontroll). Del 6+7 bygget i denne økta;
  Del 0–5 lå komplett fra DELVIS-commit 38314aaf (alle kvoter verifisert).
- **Steg 2 (wiring): FERDIG.** wire-bok.py → WIRING OK (registry 10741,
  quiz-data-mat1110.ts, institusjoner uio). kildegrunnlag.ts-oppføring lagt til.
  quiz-staging slettet (mellomprodukt).
- **Steg 3 (verifiseringsbølge): FERDIG.** 4 Opus-verifikatorer (Del 0–2, 3–4,
  5, 6–7): ~430 fasiter etterregnet numerisk, 0 mattefeil funnet. Fikser: 7
  skrivefeil, verifiser-sanering, 1 pausepunkt.
- **Steg 4 (sluttport): DELVIS.** BOKPORT OK (null avvik, null merknader) etter
  portfiks (10 symbollister, 4 warning-blokker, 5 verifiser-omformuleringer,
  26 deloppgave-formatfikser, 1 læringsmål-gloss). Studentpanel-/bølge 4+5-greps
  grønne. Quiz-lengdesjekk ✅ (30 % eneste-lengst).
- **GJENSTÅR:** SVG-opplasting Storage (kjører i bakgrunnen), npx tsc --noEmit,
  npm run build, prod-curl PORT=3063, sluttcommit. IKKE push/merge.
- **Kjente avvik:** kryssbok-lenker til mat1100 skrevet som klartekst med
  aktiveringsmarkør (ikke lenke) — mat1100 finnes ikke på disk her; død lenke
  ville feilet BOKPORT. Aktiveres når mat1100-boka lander.

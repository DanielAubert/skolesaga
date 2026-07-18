# BYGGSTATUS — mat1100 (oppdateres ved hver commit)

**Sist oppdatert:** 15. juli 2026, etter Steg 2 (wiring).

- **Steg 1 (byggebølge): FERDIG.** Alle 42 kapittelfiler på disk og gatet:
  flashcards 512 (krav ≥500), quiz 570 (= skjelettets sum), forbudt-termer 0,
  lengde-tell 14 % (grense 35 %), ingen tomme collapsibles, 21 SVG-er.
- **Steg 2 (wiring): FERDIG.** wire-bok.py → «WIRING OK» (registry 10743,
  quiz-data-mat1100.ts 570 spm, institusjoner.ts/uio), quiz-staging slettet,
  kildegrunnlag.ts-oppføring lagt til (sannferdig: løsningsforslag, IKKE
  «sensorveiledninger»), `npx tsc --noEmit` grønn.
- **Steg 3 (verifiseringsbølge): PÅGÅR.** V1 (Del 0–2) FERDIG grønn (0 regnefeil,
  14 lenkefikser, terminologi-harmonisering). V2 (Del 3–4) FERDIG grønn (1
  regnefeil fikset i 4-2: 8,72→9,06; brukket oppgavetekst i 4-7 ryddet; 2 skjulte
  «Prioritet: **perfekt**» normalisert). V3 (Del 5–6) og V4 (Del 7) KJØRER NÅ.
  Kjent sjekkpunkt til V3: prøve 5.B-matrisen har kolonnesummer 1,0/0,5 —
  verifisere at case-teksten forklarer lekkasjen.
- **Gjenstår:** V3+V4-fikser, sjekk-bok.py-port, SVG-opplasting
  (upload-media-storage.ts), npm run build, prod-curl PORT=3061, sluttcommit.
- **Kjente avvik:** ingen røde porter så langt.

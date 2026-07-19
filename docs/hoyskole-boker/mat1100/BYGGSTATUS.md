# BYGGSTATUS — mat1100 (oppdateres ved hver commit)

**Sist oppdatert:** 20. juli 2026 — BOKA FERDIG (alle steg + sluttport grønn).

- **Steg 1 (byggebølge): FERDIG.** Alle 42 kapittelfiler på disk og gatet:
  flashcards 512 (krav ≥500), quiz 570 (= skjelettets sum), forbudt-termer 0,
  lengde-tell (eneste-lengst) 14 % (grense 35 %), ingen tomme collapsibles, 21 SVG.
- **Steg 2 (wiring): FERDIG.** Verifisert intakt (samme mønster som econ1310):
  chapters/_registry.json 42 mat1100-oppføringer; course-oppføring `id: 'mat1100'`
  i textbook-courses-hoyskole.ts; UiO-oppføring i
  app/bok/trinn/hoyere/institusjoner.ts; quiz-data-mat1100.ts 570 spørsmål;
  kildegrunnlag sannferdig (løsningsforslag/fasiter, IKKE «sensorveiledninger»).
- **Steg 3 (verifiseringsbølge): FERDIG grønn.** V1 (Del 0–2) + V2 (Del 3–4)
  ferdig tidligere. V3 (Del 5–6) + V4 (Del 7) fullført 20. juli: ALLE fasiter i
  15 kapitler (5-1…5-6, 5-prove, 6-1…6-3, 6-prove, 7-1…7-4) etterregnet numerisk
  (python3/sympy) — **null bekreftede regnefeil, null redigeringer**. 5.B-
  overgangsmatrisen (kolonnesummer 1,0/0,5) bekreftet KONSISTENT: case-teksten
  forklarer eksplisitt at 50 % av Bølge sier opp og forsvinner ut av systemet
  (det M = 0 er poenget i deloppgave c, rettet opp i deloppgave d). Deriverbarhet-
  i-punkt-regelen og eksplisitt lim-notasjon i uegentlige integraler verifisert
  overholdt overalt.
- **Sluttport-kalibrering (sjekk-bok.py): FERDIG.** Tre prinsipielle, generelle
  presiseringer i den delte porten (gjelder alle høyskolebøker): (1) «(verifiser)»
  flagges kun som literal markør; (2) Del 0 unntas Forkunnskaper-kravet; (3)
  vurderings-/simuleringskapitler unntas teorikapitlets pliktblokker (symbolliste,
  Typiske feil-warning), jf. kontraktens prøve-/simulering-spec.
- **Steg 4 (sluttport): FERDIG grønn.**
  - `sjekk-bok.py mat1100` → BOKPORT OK (42 filer, 512 def, 570 quiz, exit 0).
    7 gjenstående merknader er RÅDGIVENDE + verifiserte falske positiver
    (kompakte «**Svar:** (a)…(b)…»-oppsummeringslinjer, ikke inline-deloppgaver).
  - SVG-opplasting: alle 21 mat1100-SVG-er bekreftet i Supabase Storage (HTTP 200
    mot media-bucket). (Bulk-skriptets øvrige «fetch failed» gjelder andre bøkers
    filer, ikke mat1100.)
  - `npx tsc --noEmit` → exit 0.
  - `npm run build` → exit 0 (prebuild kombinerte 10743 kapitler inkl. mat1100).
  - prod-curl (PORT=3061): /bok/mat1100 + 0-1, 5-3, 7-4, 1-prove → alle HTTP 200
    med forventet innhold.
- **Kjente avvik:** ingen. Boka er ferdig og klar for merge (gjøres av hovedøkta;
  IKKE pushet herfra).

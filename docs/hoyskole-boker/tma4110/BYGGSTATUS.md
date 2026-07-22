# BYGGSTATUS — TMA4110 Lineær algebra, komplekse tall og differensiallikninger

Branch: `bok/tma4110` (worktree). Arketype: regnefag. Institusjon: NTNU (slug `ntnu`).

## Kvotemål (fra SKJELETT §Summeringskontroll — AUTORITATIVT)
- Kapitler: **42** tema/drill/trening + prøvekapitler (1 `-prove`-fil per del 1–10; Del 11 = 3 øvingseksamener 11.3–11.5).
- Quiz: **671** (≥500). Flashcards (toppnivå `definition` m/title): **812** (≥500).

## Faser
- [x] Steg 0 — Forutsetninger: config-filer, fagprofil, kildegrunnlag.
- [~] Steg 1 — Byggebølge: Del 0–9 KOMPLETT (quiz 9-3/9-4 lagt til, LENGDE-TELL-fikset). Del 10 + Del 11 under bygging (2 underagenter).
- [ ] Steg 2 — Wiring (wire-bok.py)
- [ ] Steg 3 — Verifikatorbølge (etterregn alle fasiter numerisk)
- [ ] Steg 4 — Sluttport (sjekk-bok + studentpanel + SVG-opplasting + tsc + build + prod-curl)

## Filer på disk (per overtakelse 22. juli)
- Kapittelfiler: Del 0–9 komplett (0.1; 1.1–1.3; 2.1–2.3; 3.1–3.5; 4.1–4.2; 5.1–5.5;
  6.1–6.5; 7.1–7.4; 8.1–8.2; 9.1–9.4) + prøver 1–9. **Mangler: Del 10 (10.1–10.3+prøve), Del 11 (11.1–11.5).**
- Quiz-staging: 0–9 unntatt **9-3, 9-4** (bygges). Del 10/11 gjenstår.

## Logg
- (Overtakelse 22. juli, forts.) Kjørte sjekk-bok.py på Del 0–9: rettet 4 strukturavvik —
  fjernet leftover `*(verifiser)*`-markør i 0-1, la til «Typiske feil»-warning i drillkapitlene
  1-3, 3-5, 6-5 (feilkatalog per tema). Gjenstår kun KVOTE (quiz wires i steg 2) + Del 10/11.
- (Overtakelse 22. juli) Ny byggeleder. Validerte alt ukommittert (Del 9: 5 kap + 2 quiz — alle gyldig JSON).
  Del 9b-agenten leverte 9.3/9.4/prøve komplett. Fullførte Fourier→koordinatkoeffisient-renamet
  i 6-2 quiz (forrige leder rakk kun kapitlet). 0-1 sin Fourier-omtale er korrekt scoping
  («boka dekker ikke Fourier») — beholdt.

# BYGGSTATUS — STK1100 (oppdateres ved hver commit)

**Sist oppdatert:** 22. juli 2026, etter Steg 0.

## Kvoter (skjelettet, autoritativt)
- 27 kapitler (1 eksamenskart + 22 tema hvorav 5 drill + 4 eksamenstrening) + 8 prøvekapitler (Del 1–8).
- Quiz totalt: **510** (krav ≥500). Flashcards totalt: **505** (krav ≥500).
- Estimert totaltid: ~2 215 min ≈ 37 t.

## Fasestatus
- **Steg 0 FERDIG (denne commiten):**
  - `docs/hoyskole-boker/stk1100/BYGGEKONTRAKT.md` (instansiert fra mal, STK1100-notasjon).
  - `docs/hoyskole-boker/stk1100/BOKCONFIG.json` (uio, prøvedeler 1–8, sectionNames).
  - `src/lib/data/fagprofil/stk1100.json` (fantes ferdig — validert, 8 sensornøkler/8 typiske feil).
  - `python3 scripts/hoyskolebok/sjekk-skjelett.py stk1100` → KVALITETSPORT OK.
- **Steg 1** (byggebølge): IKKE STARTET. 0/27 kapittelfiler + 0/8 prøver på disk.
- **Steg 2** (wiring): ikke startet.
- **Steg 3** (verifikator): ikke startet.
- **Steg 4** (sluttport): ikke startet.

## Byggerekkefølge (fra skjelettets §6)
1. Metadata via wire-bok.py (fase 5).
2. Del 0 (0.1) — etablerer sjanger A–L + frekvenser + STK1110-avgrensning.
3. Del 1 → Del 2 → Del 3 (fundament, avhengighetsrekkefølge).
4. Del 4 → Del 5 → Del 6 (broen + kjeden; drillspor 4.3 → 5.3 → 6.3).
5. Del 7 → Del 8 → Del 9 (øvingseksamener sist — gjenbruker alt).
6. Prøver Del 1–8.

## Agent-plan (maks 2 samtidige)
Batcher: 0.1 · Del1(1.1–1.3) · Del2(2.1–2.3) · Del3(3.1–3.2) · Del4(4.1–4.3) ·
Del5(5.1–5.3) · Del6(6.1–6.3) · Del7(7.1–7.2) · Del8(8.1–8.3) · Del9(9.1–9.4) ·
Prøver(1–8, splittes).

## Kjente avvik / merknader
(fylles ut underveis)

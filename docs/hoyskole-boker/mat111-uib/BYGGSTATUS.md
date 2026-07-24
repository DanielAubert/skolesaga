# BYGGSTATUS — MAT111 Grunnkurs i matematikk I (UiB)

Branch: `bok/mat111-uib` (worktree). Bygges fra ferdig skjelett til komplett bok.

## Steg-oversikt
- [x] Steg 0 — forutsetninger: EKSAMENSANALYSE + SKJELETT finnes; `sjekk-skjelett.py mat111-uib` → KVALITETSPORT OK; BOKCONFIG.json + BYGGEKONTRAKT.md opprettet; alle 42 kryssbok-lenker (1t/r1/r2/s2) verifisert til å eksistere.
- [x] Steg 1 — byggebølge (34 kap + 7 prøvekap = 41 filer + quiz-staging) — FULLFØRT.
- [x] Steg 2 — wiring: COURSE_MAT111_UIB i textbook-courses-hoyskole.ts + import/spread i textbook-courses.ts; 41 registry-oppføringer; quiz-data-mat111-uib.ts (528 quiz) import/spread i quiz-data.ts; UiB-fag i institusjoner.ts; kildegrunnlag.ts. Alle delte wiring-filer verifisert rent additive (kun mat111).
- [x] Steg 3 — verifiseringsbølge: alle fasiter etterregnet numerisk (fullført før wiring).
- [x] Steg 4 — sluttport (24. juli 2026): sjekk-bok BOKPORT OK (41 filer / 549 def / 528 quiz); `npx tsc --noEmit` grønn; `npm run build` grønn (10971 kap); prod-curl 13/13 sider rendrer med ekte innhold (146–635 KB).

## Merknad (avvik fra brief)
mat1100/mat1110/tma4245 er IKKE til stede i denne worktreen (ikke ancestor av
HEAD; «mat»-prefiks-filene er VGS-mattebøker). Skjelettets Forkunnskaper lenker
uansett KUN til 1t/r1/r2/s2 (alle finnes). Kryssbok-lenker til de tre
høyskolebøkene skrives derfor som klartekst m/«aktiver lenke når den finnes» KUN
hvis en byggeagent trenger dem (skjelettet gjør det ikke).

## Filstatus (41 filer)
Del 0: ✅ 0.1 (committet) · Del 1: ✅ 1.1–1.4 + 1-prove (committet) · Del 2: ✅ 2.1–2.4 + 2-prove (committet) ·
Del 3: ✅ 3.1–3.5 (salvage 3bcdb439) · 3-prove under bygging ·
Del 4: ✅ 4.1–4.3 (salvage) · 4.4 + 4-prove under bygging ·
Del 5: ✅ 5.1–5.4 (salvage) · 5.5–5.7 + 5-prove under bygging ·
Del 6: ✅ 6.1–6.3 + 6-prove (salvage; quiz 6-1…6-3 gjenstår) ·
Del 7: ✅ 7.1 (salvage; quiz gjenstår) · 7.2 + 7-prove under bygging ·
Del 8: ✅ 8.1–8.3 (salvage) · 8.4 gjenstår

Ferdig: 31/41 filer. Quiz committet: Del 0 = 10, Del 1 = 82, Del 2 = 72,
Del 3 = 67 (3-5 gjenstår), Del 4 = 52 (4-4 gjenstår), Del 5 = 68 (5-5…5-7
gjenstår), Del 8 = 22 (8-4 gjenstår). Sum committet: 373.
Flashcard-defs committet (Del 0–2 som før 153; salvage-delene oppfyller
delkvotene per fil, kontrolltalt ved salvage).

Kvotekrav: quiz ≥ 528, flashcards ≥ 516.

## Salvage-notat (22. juli 2026)
Del 1+2 kvalitetssjekket mot SKJELETT/BYGGEKONTRAKT: quiz 1-1…1-4 normalisert
dict→liste; lengde-tell rebalansert i 1-2/1-3/1-4/2-1/2-2/2-3 (alle < 35 %
strict); Repetisjonsoppgaver lagt til i 1-1–1-3 og utvidet til 4 i 2-1–2-3;
Symbol- og formelliste flyttet sist i 1-1–1-4; kyrillisk skrivefeil i 1-prove
rettet; quiz 2-4 (16) og kapittel 2-prove nyskrevet (alle fasiter etterregnet
numerisk).

## Commit-logg
- (steg 0) BOKCONFIG + BYGGEKONTRAKT + BYGGSTATUS opprettet (0c49fcb1).
- (steg 1) Del 1: 1.1–1.4 + 1-prove + quiz 1-1…1-4 (82 quiz, 75 defs).
- (steg 1) Del 2: 2.1–2.4 + 2-prove + quiz 2-1…2-4 (72 quiz, 68 defs).
- (steg 1) Del 0: 0.1 eksamenskartet + quiz (10 quiz, 10 defs).
- (steg 1) Salvage 3bcdb439: 20 kapittelfiler (3.1–3.5, 4.1–4.3, 5.1–5.4,
  6.1–6.3 + 6-prove, 7.1, 8.1–8.3) + 14 quizfiler + 2 SVG kvalitetssjekket
  mot kontrakt/skjelett; lengde-tell rebalansert (9 filer), +1 def i 3.5,
  SVG-merkelapp fikset.

## Salvage-notat 2 (24. juli 2026)
Ucommittet materiale fra tidligere byggeagent var langt større enn antatt
(20 kapitler, ikke 2). Kvalitetssjekk: JSON ok, kvoter ok (3-5 manglet 1 def
— lagt til), struktur ok (EV/FK/Symbol-liste/Repetisjon), forbudt-termer 0,
kryssbok-lenker ok, exercises komplette (1 bevisst kald bank i 8.1).
Lengde-tell-brudd i 4-1/4-2/4-3/5-2/5-3/5-4/8-1/8-2/8-3 (40–80 %) →
rebalansert til 20–25 %. Matematisk sannhetskontroll gjøres i steg 3.

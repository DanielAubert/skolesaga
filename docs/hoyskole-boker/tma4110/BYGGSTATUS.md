# BYGGSTATUS — TMA4110 Lineær algebra, komplekse tall og differensiallikninger

Branch: `bok/tma4110` (worktree). Arketype: regnefag. Institusjon: NTNU (slug `ntnu`).

## Kvotemål (fra SKJELETT §Summeringskontroll — AUTORITATIVT)
- Kapitler: **42** tema/drill/trening + prøvekapitler (1 `-prove`-fil per del 1–10; Del 11 = 3 øvingseksamener 11.3–11.5).
- Quiz: **671** (≥500). Flashcards (toppnivå `definition` m/title): **812** (≥500).

## Faser
- [x] Steg 0 — Forutsetninger: config-filer, fagprofil, kildegrunnlag.
- [x] Steg 1 — Byggebølge: Del 0–11 KOMPLETT (52 kapittelfiler, 816 definisjoner). Del 11-agenten døde på API-feil (ECONNRESET) mid-LENGDE-TELL-polish; byggeleder målte disk (alt gyldig+komplett), fullførte 11-2 quiz-balansering (6→3/14) og committet. 11-5 O1-figur gjenbruker eksisterende tma4110-7-3-z4-minus16.svg (matcher z^4=-16).
- [x] Steg 2 — Wiring (wire-bok.py): COURSE_TMA4110 (52 kap), registry +52 (10879),
      quiz-data-tma4110.ts 671 spørsmål, institusjoner.ts (ntnu). sjekk-bok BOKPORT OK. tsc grønn. quiz-staging slettet.
- [x] Steg 3 — Verifikatorbølge KOMPLETT (alle 11 deler etterregnet, ~475 sjekker, 0 fasitavvik).
- [x] Steg 4 — Sluttport OK: sjekk-bok BOKPORT OK (52 kap / 816 def / 671 quiz), studentpanel-port
      (0 tomme collapsibles, 0 «Prioritet: perfekt», 0 meta-fasit, alle oppgaver har hint unntatt
      merket kald bank/prøve), KaTeX-port (16 574 formler, 0 feil), alle 6 SVG-er verifisert i
      Supabase Storage (HTTP 200), tsc grønn, `npm run build` grønn (11 023 kap etter merge med
      main), prod-curl PORT=3063: 11/11 ruter 200 med Forkunnskaper + Symbol- og formelliste +
      inline læringsløkke (Løkke→Eksempel→Oppgave) bekreftet i servert HTML.

## Filer på disk (per overtakelse 22. juli)
- Kapittelfiler: Del 0–9 komplett (0.1; 1.1–1.3; 2.1–2.3; 3.1–3.5; 4.1–4.2; 5.1–5.5;
  6.1–6.5; 7.1–7.4; 8.1–8.2; 9.1–9.4) + prøver 1–9. **Mangler: Del 10 (10.1–10.3+prøve), Del 11 (11.1–11.5).**
- Quiz-staging: 0–9 unntatt **9-3, 9-4** (bygges). Del 10/11 gjenstår.

## Logg
- (24. juli, steg 3 forts. II — ny økt etter ECONNRESET-brudd; byggeleder regner selv)
  **DEL 6 FERDIG.** 6-3 (15 sympy-sjekker), 6-4 (~20, inkl. rangdefekt-rref og
  parabel-residual), 6-5 og 6-prove (4 prøver, ~30 sjekker) — **0 fasitavvik**.
  Quiz 6-3/6-4/6-5 (52 spm) fasitkontrollert: alle riktige. Tre fikser:
  (1) tre drilloppgaver i 6.5 (opg. 7, 9, 13) var IDENTISKE med gjennomregnede
  eksempler i 6.4 (samme tall) — gitt nye datasett med sympy-etterregnede fasiter
  (opg. 13 fikk også en annen avhengighetstype: kolonne 2 $=2\times$ kolonne 1);
  (2) Forkunnskaper-punktvis-standarden innført i 6-3/6-4/6-5/6-prove
  («Sist du var her»-formelblokkene beholdt); (3) LENGDE-TELL i hele Del 6
  balansert: 6-2 56 %→28 %, 6-3 56 %→28 %, 6-4 39 %→28 %, 6-5 50 %→31 %
  (17 distraktorer forlenget, fasit og semantikk urørt). Bok-nivå: 31 %.
- (24. juli, steg 3 forts. V) **DEL 11 FERDIG — STEG 3 KOMPLETT.** 11-1..11-5 gjennomgått
  (~70 sjekker): alle tre øvingseksamenene etterregnet (komplekse røtter, parametersystemer,
  Col/Nul + dimensjonsteoremet, $A^n$ via diagonalisering, Gram–Schmidt både standard og
  integral, minste kvadrater, ODE m/resonans, ODE-system, bevis). **0 fasitavvik.**
  Quiz 11-1..11-5 (43 spm) fasitkontrollert: alle riktige.
  **RENDERINGSFUNN (hele boka):** kjørte alle 16 574 formler gjennom KaTeX —
  2 formler rendret som rød feiltekst i produksjon: `\begin{psmallmatrix}` (11-1; ikke
  støttet av KaTeX-versjonen i repoet → byttet til `\left(\begin{smallmatrix}…`) og
  `$\cos,\sin,e,\ $` (10-3; renderer trimmer strengen, så den endte på en løs backslash).
  Dessuten 3 formler med gåseøyne inne i `\text{}` («No character metrics») — flyttet ut.
  Etter fiks: **16 574 formler, 0 KaTeX-feil.** Ellers: typo «felller», manglende `)` i
  en kortittel, og 11.4 opg. 5 (minste kvadrater) hadde identiske data OG fasit som
  6.5 opg. 8 — nye punkter, ny fasit ($y=\tfrac12+\tfrac75x$), sympy-verifisert.
- (24. juli, steg 3 forts. IV) **DEL 10 FERDIG.** 10-1/10-2/10-3 + prøve etterregnet
  (~90 sjekker: egenverdier, egenvektorer, real/imaginærdel, IVP-konstanter, klassifisering;
  alle nye og gamle systemløsninger sympy-verifisert mot $\mathbf x'=A\mathbf x$).
  **0 fasitavvik.** Quiz 10-1..10-3 (46 spm) fasitkontrollert: alle riktige; LENGDE-TELL 7–19 %.
  Fiks (samme mønster som Del 6/9, her mer utbredt): drill- og prøvekapitlene gjenbrukte de
  samme matrisene som de gjennomregnede eksemplene — verst var 10.3 opg. 11 («kald bank»),
  som var identisk med kapitlets EGET case. Nye datasett i 10.3 opg. 3/5/9/11 og i prøvene
  1 (opg. 3+4), 2 (opg. 1+2), 3 (opg. 3/4/5) og 4 (opg. 3) — alle nye fasiter sympy-etterregnet.
- (24. juli, steg 3 forts. III) **DEL 9 FERDIG.** 9-1/9-2/9-3/9-4 + prøve etterregnet
  (~115 sjekker): alle ODE-løsninger verifisert numerisk med mpmath (residual ~1e-25 i
  tre punkter + IVP-verdier), inkl. variasjon-av-parametere-svarene (tan/sec/csc/e^x·x⁻¹).
  **0 fasitavvik.** Quiz 9-1..9-4 (68 spm) fasitkontrollert: alle riktige; LENGDE-TELL
  31–44 % (innenfor). Fikser: (1) 9.4 opg. 1/2/6 var identiske med gjennomregnede
  eksempler i 9.1/9.2 selv om kapitlet lover «nyskrevne tall» — nye likninger med
  sympy-etterregnede fasiter (opg. 4 fulgte med, siden den bruker opg. 1);
  (2) tre kryssbok-lenker pekte til FEIL kapittel (lenketeksten lovet noe annet enn
  målet): 4-1 og 7-2 «Trigonometriske funksjoner…» → r2-4-2 Enhetssirkelen,
  9-3 «Regningsregler for integrasjon» → s2-1-6 Delvis integrasjon. Full lenkeskann:
  alle interne /bok/-lenker i boka finnes (0 brutte).
- (24. juli, steg 3 forts. — byggeleder regner selv, API ustabilt for subagenter)
  Del 3–4 KOMPLETT verifisert og committet (65c18f39): 87 sympy-sjekker, 0 fasitavvik;
  quiz 3-1..4-2 (122 spm) fasitkontrollert, LENGDE-TELL 6–31 %. Forkunnskaper
  punktvis-standard: 8 blokker Del 1–2/7–8 (f4ea5160) + 9 filer Del 3–4 + 9 filer
  Del 9–10 (fra døde verifikatoragenter, kvalitetssjekket — committes med sine deler).
  - 5-1 verifisert: 12 sjekker, 0 avvik.
  - 5-2 verifisert: 10 sjekker, 0 avvik.
  - 5-3 verifisert: 8 sjekker, 0 avvik.
  - 5-4 verifisert: 11 sjekker, 0 avvik (én falsk positiv i egen sjekk — usimplifisert
    matriselikhet i sympy, fasit korrekt).
  - 5-5 verifisert: 12 sjekker, 0 avvik.
  - 5-prove verifisert: 7 sjekker, 0 avvik. Quiz 5-1..5-5 (90 spm): fasiter riktige;
    LENGDE-TELL balansert 5-2 (7→5/20), 5-4 (9→4/16), 5-5 (11→5/16) — 14 opsjons-
    justeringer, semantikk uendret. DEL 5 FERDIG.
  - 6-1 verifisert: 11 sjekker, 0 avvik.
  - 6-2 verifisert: 11 sjekker, 0 avvik (Gram-Schmidt/Legendre eksakt).
- (22. juli, steg 3-oppstart) Committet estetikk-fikser: (1) 4 filer fra forrige økt
  (10-2, 10-3, 6-1, 7-prove — deloppgaver egne linjer, sjangerkode ut av
  competenceGoals, commit 1fd5f69e); (2) fullt sveip over alle 52 filer etter
  inline «(a) … (b) …» — 5 nye funn rettet i 10-2, 2-2, 2-3 (×2), 6-1
  (deloppgaver til `**a)**` på egne linjer + normaliserte `**(a)**`→`**a)**`,
  commit 037c4398). Verifikatorbølge (steg 3) startet: 5 parallelle agenter
  etterregner Del 0–2, 3–4, 5–6, 7–8, 9–11 numerisk (sympy/numpy).
- (Overtakelse 22. juli, forts.) Kjørte sjekk-bok.py på Del 0–9: rettet 4 strukturavvik —
  fjernet leftover `*(verifiser)*`-markør i 0-1, la til «Typiske feil»-warning i drillkapitlene
  1-3, 3-5, 6-5 (feilkatalog per tema). Gjenstår kun KVOTE (quiz wires i steg 2) + Del 10/11.
- (Overtakelse 22. juli) Ny byggeleder. Validerte alt ukommittert (Del 9: 5 kap + 2 quiz — alle gyldig JSON).
  Del 9b-agenten leverte 9.3/9.4/prøve komplett. Fullførte Fourier→koordinatkoeffisient-renamet
  i 6-2 quiz (forrige leder rakk kun kapitlet). 0-1 sin Fourier-omtale er korrekt scoping
  («boka dekker ikke Fourier») — beholdt.

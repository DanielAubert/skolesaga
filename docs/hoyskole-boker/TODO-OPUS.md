# TODO: Bokbygging med Opus — bare å sette i gang

Alt her er forberedt slik at en Opus-økt kan bygge én bok om gangen uten
forarbeid — og uten kvalitetssikring i etterkant: kvalitetsdommene ligger i
skjelettkontraktene, de ferdigskrevne promptene og de deterministiske
portene. **Kickoff per fag = lim inn denne ene setningen i Claude Code
(repo-rot), med fagets id:**

> Bygg boka for `<emne>` ved å følge docs/hoyskole-boker/BYGGEPLAN-MAL.md
> steg 0–4 MEKANISK (rammeverk: docs/hoyskole-boker/`<emne>`/). Bruk Opus på
> alle agenter, maks 2 samtidige, og gå aldri videre forbi en rød port.

Erfaringstall per bok (fra econ1310/jus1111): ~9 byggeagenter + wiring +
4–5 verifikatorer; med maks 2 samtidige ≈ 4–6 timer veggklokke, mest venting.
Bøkene er uavhengige — rekkefølgen under er anbefalt prioritet (størst
studentvolum + sterkest rammeverk først), men plukk fritt.

## A. Klare til bygging (rammeverk ferdig — bare kjør kickoff)

- [ ] `exphil03` — EXPHIL03 Examen philosophicum (UiO). Størst volum av alle
      (obligatorisk for alle UiO-studenter). Drøfting; 30 kap planlagt.
- [ ] `psy1010` — PSY1010 Innføring i metode (UiO). Hybrid drøfting/tall;
      stort kull. NB: hybrid-valgene står i skjelettets §2.
- [ ] `econ1210` — ECON1210 Mikroøkonomi 1 (UiO). Regnefag; CORE-anleggs-
      modellen er bokstandard (IKKE standard produsentteori).
- [ ] `tma4245` — TMA4245 Statistikk (NTNU). Størst NTNU-emne; husk eget
      Python/Monte Carlo-kapittel (fast eksamensinnslag siden 2023).
- [ ] `fys1001` — FYS1001 Innføring i fysikk (UiO). Regnefag; kvalitativ
      hverdagsfysikk-sjanger + formelark-skillet står i skjelettet.
- [ ] `econ2310` — ECON2310 Makroøkonomi 2 (UiO). Bygger videre på
      econ1310-boka (kryssbok-lenker dit er spesifisert i skjelettet).
- [ ] `econ2220` — ECON2220 Mikroøkonomi 2 (UiO). Bygger på econ1210-boka;
      brokapittel CORE→c′(y) er pålagt.
- [ ] `svmet1010` — SVMET1010 Kvalitative metoder (UiO). Drøfting; skjelettet
      var pilot og følger eldre headingformat — konverter number til
      del-basert i fase 5 (wiring-skriptet håndterer det, jf. jus1111).

- [ ] `mat1100` — MAT1100 Kalkulus (UiO). To treningsformer (flervalg midtveis
      + langsvar slutteksamen); signaturoppgave-drillen i skjelettets 3.3.
- [ ] `econ2130` — ECON2130 Statistikk 1 (UiO). R-integrert (2025-regimet
      hands-on med CSV); metodesignalene bærer poengene.

- [ ] `econ3150` — ECON3150 Introductory Econometrics (UiO). Regnefag;
      kausalitet som akse, OVB-baklengs-drill, tospråklig begrepsbank
      (eksamen på engelsk).
- [ ] `jus1211` — JUS1211 Privatrett II (UiO). Jus; rettstilstandssjekk gjort
      i skjelettet (arveloven 2019, 15G-tak, hevdslova § 8). NB: fase 6 SKAL
      ha Lovdata-verifikatør — el. § 59/§ 61-leddstruktur er (verifiser)-merket.

- [ ] `fys1120` — FYS1120 Elektromagnetisme (UiO). Eget Python-spor (100 %
      siden 2018); «navngi loven» + symmetriargument er drillmål.
- [ ] `mat111-uib` — MAT111 (UiB). Åpen bok; difflikninger/Newton/Taylor-
      restledd-ryggrad; arkiv 2003–2020 (ærlighetsforbehold i Del 0).
- [ ] `stk1100` — STK1100 (UiO). Pivotal-kjeden som ryggrad; ingen
      hypotesetesting/kombinatorikk (UiO-egenart).
- [ ] `in1900` — IN1900 (UiO). Kodefag-DNA (API-lister, kodesporing);
      ODESolver post-2023-signatur; rekursjon forbudt.
- [ ] `tdt4120` — TDT4120 (NTNU). Kortsvars-presisjon («lange svar teller
      ikke positivt»); CLRS-standard; reduksjonsretning-drill.
- [ ] `met4-nhh` — MET4 (NHH). 2025-formen (6 t, R-del + regnedel);
      tidsrekker tungt; IV/DiD/RDD utelatt (aldri testet på skoleeksamen).
- [ ] `jus2111` — JUS2111 (UiO). Jus; rettstilstandssjekk gjort (§ 89-ordlyd
      2020, CRPD inkorporert 1.1.2026, derogasjon nedstemt). Fase 6 SKAL ha
      Lovdata-verifikatør.
- [ ] `sosant1000` — SOSANT1000 (UiO). Drøfting; etnografisk eksempellager
      per tema; monografikapittel ⚠ utgavesensitiv (sjekk pensumliste).

## C. Trenger analyse + skjelett først

(Tom — alle 22 fag i porteføljen har komplett rammeverk. Nye fag: kjør
fase 1–2 i PRODUKSJONSLOYPE med arkiv fra `~/Desktop/Eksamner/`.)


## D. Etterarbeid på eksisterende bøker (valgfritt, når som helst)

- [ ] Narrativ-versjoner (lesevennlig toggle) for `econ1310` (35 kap) og
      `jus1111` (42 kap) — bruk `/narrativ`-mønsteret; husk registry +
      linkedChapterId (se minne/matte-strukturløft-metoden).
- [ ] Forsidebilder for `econ1310` og `jus1111` (`/forsidebilder`-skillen).
- [ ] Lydbøker/illustrasjoner ved behov (egne skills finnes).

## Huskeregler for Opus-økten (kortversjon — detaljer i PRODUKSJONSLOYPE)

1. Maks 2 samtidige agenter. Etter hver bølge: MÅL DISK og gap-fill.
2. Kvotesammendraget i skjelettet er fasit (quiz/flashcards ≥500/500).
3. Flashcards = toppnivå definition-blokker med title. Quiz: options[0] riktig.
4. Wiring: metadata + sectionNames + registry + quiz-merge + institusjoner.ts
   (mønster: scripts i økten for econ1310/jus1111; se PRODUKSJONSLOYPE fase 5).
5. Verifiseringsbølge FØR commit; jus alltid med Lovdata-agent.
6. ALDRI meld ferdig uten grønn `npm run build` + prod-server-curl (200 +
   innholdssjekk). Commit + push til slutt.

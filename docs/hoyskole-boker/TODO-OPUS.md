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

## C. Transje 2 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

Prioritert etter studentvolum og materialstyrke:
- [ ] `nokut-afb` — Nasjonal deleksamen anatomi/fysiologi/biokjemi, sykepleie (87 filer; alle sykepleiestudenter i Norge)
- [ ] `oslomet-mat1000` — Matematikk 1000, ingeniør (OsloMet, 669 filer)
- [ ] `econ1100` — Matematikk I (UiO, 60 filer, SV)
- [ ] `econ1410` — Internasjonal økonomi (UiO, 45 filer, SV)
- [ ] `fys1100` — Mekanikk og modellering (UiO, 36 filer, SV)
- [ ] `mek1100` — Feltteori og vektoranalyse (UiO, 50 filer)
- [ ] `mat1110` — Kalkulus og lineær algebra (UiO, 26 filer)
- [ ] `stk1110` — Statistiske metoder og dataanalyse (UiO, 41 filer; oppfølger til stk1100)
- [ ] `in1010` — Objektorientert programmering (UiO, 25 filer, SV)
- [ ] `in2010` — Algoritmer og datastrukturer (UiO, 34 filer, SV)
- [ ] `tdt4100` — Objektorientert programmering (NTNU, 45 filer)
- [ ] `tdt4145` — Datamodellering og databasesystemer (NTNU, 40 filer, SV)


## C3. Transje 3 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

- [ ] `mat121-uib` — Lineær algebra (UiB, 110 filer)
- [ ] `tfy4125` — Fysikk (NTNU, 92 filer, SV)
- [ ] `tfy4115` — Fysikk (NTNU, 50 filer)
- [ ] `mat2200` — Grupper, ringer og kropper (UiO, 43 filer)
- [ ] `ma0301` — Elementær diskret matematikk (NTNU, 43 filer)
- [ ] `sos1120` — Kvantitativ metode (UiO, 41 filer)
- [ ] `mat2400` — Reell analyse (UiO, 33 filer)
- [ ] `stv1020` — Politisk analyse 2: forskningsdesign/kvantitativ (UiO, 32 filer)
- [ ] `kj2050` — Analytisk kjemi grunnkurs (NTNU, 28 filer)
- [ ] `in1000` — Introduksjon til objektorientert programmering (UiO, 27 filer)
- [ ] `fil1001` — Innføring i metafysikk og bevissthetsfilosofi (UiO, 22 filer)

## C4. Transje 4 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

- [ ] `mat112-uib` — Kalkulus II (UiB, 65 filer; oppfølger MAT111)
- [ ] `tfy4104` — Fysikk (NTNU, 55 filer; nær TFY4115)
- [ ] `psy1000` — Innføring i generell psykologi (UiO, 42 filer)
- [ ] ~~`econ2200`~~ — NEDLAGT (siste V2018); pensum delt mellom ECON1100 + ECON2220, som begge har rammeverk. Skjelett droppet (redundant); analyse beholdt.
- [ ] `sok1002` — Mikroøkonomi (NTNU, 34 filer)
- [ ] `tma4135` — Matematikk 4D (NTNU, 26 filer)
- [ ] `sos1004` — Innføring i sosiologi (UiO; SOS1001/SOS1000/SOS1003 nedlagt →
      etterfølger-profilert mot aktivt SOS1004, arkiv ~72 filer på tvers av
      forgjengerkodene). Rammeverk underveis (8. juli 2026).
- [ ] `kjm1110` — Kjemi (UiO, 22 filer)
- [ ] `in1020` — Introduksjon til datateknologi (UiO, 22 filer)
- [ ] `econ1220` — Velferd og økonomisk politikk (UiO, 22 filer)
- [ ] `psyc1201` — Sosialpsykologi (UiO, 17 filer)
- [ ] `sosant1090` — Antropologisk metode (UiO, 16 filer; AKTIVT — sensor-
      veiledning t.o.m. V2026). Rammeverk underveis (8. juli 2026).

## C5. Transje 5 — rammeverk FERDIG unntatt tdt4186-skjelett underveis (8. juli 2026; alle AKTIV-verifisert)

- [ ] `sos2200` — Organisasjon, ledelse og arbeid (UiO, 38 filer)
- [ ] `jus4111` — Metode og etikk (UiO, 22 filer; jus)
- [ ] `econ2500` — Investering og finansiering (UiO, 22 filer)
- [ ] `econ1910` — Poverty and Distribution in Developing Countries (UiO, 21 filer)
- [ ] `tdt4136` — Introduksjon til kunstig intelligens (NTNU, 17 filer)
- [ ] `tdt4110` — Informasjonsteknologi grunnkurs (NTNU, 17 filer)
- [ ] `econ4310` — Macroeconomic Theory (UiO, 16 filer)
- [ ] `tdt4171` — Metoder i kunstig intelligens (NTNU, 15 filer)
- [ ] `fys2140` — Kvantefysikk (UiO, 15 filer)
- [ ] `mat1120` — Lineær algebra (UiO, 12 filer)
- [ ] `in2060` — Digitalteknikk og datamaskinarkitektur (UiO, 12 filer)
- [ ] `tdt4186` — Operativsystemer (NTNU, 11 filer)

## C6. Transje 6 — analyse + skjelett underveis (8. juli 2026; status verifisert per fag)

- [ ] `jus2211` — Forvaltningsrett og EØS-rett (UiO, 22 filer; jus, AKTIV)
- [ ] `med1100` — Medisinstudiet modul 1 (UiO, 42 filer; AKTIV)
- [ ] `ttm4100` — Kommunikasjon: Tjenester og nett (NTNU, 32 filer; AKTIV)
- [ ] `met2910-bi` — Matematikk for økonomer (BI, 23 filer; AKTIV)
- [ ] `sok3500-bi` — Samfunnsøkonomi II (BI, 21 filer; AKTIV)
- [ ] `econ3120` — Mathematics 2 (UiO, 18+15 filer; AKTIV; «equivalent with
      ECON4120» — ett rammeverk dekker begge kodene)
- [ ] `econ3010` — Anvendt økonomisk analyse (UiO, 19 filer; AKTIV)
- [ ] `ttm4135` — Anvendt kryptografi og nettverkssikkerhet (NTNU, 27 filer; AKTIV)
- [ ] `tma4111` — Matematikk 3 (NTNU; arkiv TMA4110 196 filer; TMA4110 ERSTATTET
      av TMA4111 fra reformen — etterfølger-profilert, sos1004-metoden)
- [ ] `tma4106` — Matematikk 2 (NTNU; arkiv TMA4105 114 filer; ERSTATTET av
      TMA4106 — etterfølger-profilert)
- [ ] `tdt4237` — Programvaresikkerhet og personvern (NTNU, 13 filer; AKTIV)
- [ ] `ling1100` — Innføring i semantikk og pragmatikk (UiO, 13 filer; AKTIV)
- [ ] `econ4915` — Development Economics (UiO, 11 filer; AKTIV; bygger på econ1910)
- [ ] `econ4260` — Behavioral Economics (UiO, 10 filer; AKTIV)

Hoppet over (verifisert, dokumentert her så de ikke gjenåpnes): TMA4140
Diskret matematikk UTGÅTT → dekket av `ma0301`; TFY4102 ERSTATTET → dekket av
`tfy4104`; ECON3610 UTGÅTT uten etterfølger (econ2200-presedens). Kandidater
for transje 7: JUS3112 (arkiv JUS3111, 14), JUS4212/JUS4213 (arkiv JUS4211,
20, splittet etterfølger), TMA4121 (arkiv TMA4120, 47), resten av BI-porteføljen.

## C7. Transje 7 — analyse + skjelett underveis (8. juli 2026; sluttfører det vettede universet)

Mål: fullføre ALLE gjenværende fagbeskrivelse-vettede emner med brukbart arkiv.
Bygges (AKTIVE med ≥5 filer + høyverdi-etterfølgere):
- **Matte-reform-etterfølgere (NTNU):** `tma4121` (←TMA4120, 47 f). NB: NTNUs
  matematikkreform spredte innhold på tvers av koder, så de to store matte-
  arkivene er retargetet til det de FAKTISK inneholder (ikke kodeetiketten):
  - ⚠ `tma4106` → bygget som `tma4101` «Flervariabel kalkulus og vektoranalyse»:
    TMA4105-arkivet (114 f) er 100 % flervariabel/vektoranalyse; reformen la det i
    TMA4101 Matematikk 1, mens TMA4106 tester ODE/Fourier/kompleks (annet pensum).
  - ⚠ `tma4111` → bygget som `tma4110` «Lineær algebra, komplekse tall og
    differensiallikninger»: TMA4110-arkivet (196 f) er lin.alg + elementære
    komplekse tall + ODE; dagens TMA4111 (vektorkalkulus/PDE) dekkes av tma4101 +
    tma4135. Arkivet fikk ærlig, arkivbelagt hjem under sitt gamle innhold.
  - Begge har kodetilhørighet merket (verifiser); TMA4106/TMA4111s greenfield-
    pensum (ODE/Fourier hhv. vektorkalkulus/PDE-som-eget-emne) HOPPET OVER —
    krever egne post-reform eksamenssett (ikke i arkivet); dekkes delvis av
    tma4101/tma4135/tma4110.
- **BI-portefølje (første BI-fag i fabrikken):** `met2910-bi`, `sok3500-bi`,
  `met2920-bi`, `met1190-bi`, `bok3423-bi`, `bok3532-bi`, `bok3632-bi`,
  `fin3521-bi`, `jur3420-bi`, `str3605-bi`, `org3620-bi`, `mrk3481-bi`.
- **UiO:** `ling1100`, `econ4260`, `econ4220`, `econ2610`, `jus3213`, `jus5511`,
  `fil1003`, `in1030`, `in2040`, `mat2500`, `jus3112` (←JUS3111), `jus4212`+
  `jus4213` (←JUS4211 splittet), `kj1020`/`in1140`/`econ4160` (etterfølger-profilert).
- **NTNU:** `tdt4160`, `tdt4300`, `tdt4137`, `it2805`, `ttk4240`, `tio4215`,
  `tdt4102`, `tdt4260`, `tdt4225`, `tfe4101`, `tfe4171`, `ttt4120`, `tgb4100`.

Hoppet over (dokumentert): TMA4240 Statistikk → dekket av `tma4245`; TMA4115
Matematikk 3 → dekket av `tma4111`-familien; TFE4101 Krets- og digitalteknikk
(nedlagt; krets+digital dekket av `ttk4240`/`in2060`/`tdt4160`); ECON4130
Statistics 2 (nedlagt uten etterfølger, dekket av `stk1110`); ECON4160 (nedlagt);
MET3590/EMS3666 (≤2 filer), FARM1110/BIOS1100/BIOS1110 (0 filer), samt rene
3–4-fils avanserte valgemner uten sensorveiledning (TDT4200/4215/4242/4258,
TTT4185, MRK3580, ORG3403/3610, BØK3430/3657, FYS1105) — for tynt arkiv for
kvalitetsanalyse. Kan tas senere ved behov; arkiv finnes.

**STATUS transje 7 FULLFØRT (8. juli 2026):** alle skjeletter levert, gatet og
pushet — inkludert de to siste (`kj1020`, `tfe4171`) etter at Opus-kvoten kom
tilbake. **HELE DET VETTEDE FAGBESKRIVELSES-UNIVERSET ER NÅ KOMPLETT:** 118
skjeletter (115 gjennom porten; 3 kjente ufarlige avvik = econ1310/jus1111 live-
bøker + svmet1010-pilot), 119 analyser, ~4 112 kapitler, ~69 900 quiz og ~69 000
flashcards planlagt. Alle gjenværende arkiver er enten bygget, etterfølger-
profilert, eller dokumentert hoppet over (nedlagt-uten-etterfølger / for tynt
arkiv). Neste steg er BOKBYGGING (fase 3–7) via kickoff-setningene over — ikke
flere rammeverk.

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

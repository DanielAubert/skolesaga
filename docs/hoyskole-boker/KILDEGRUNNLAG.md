# Kildegrunnlag per fag — hvorfor bøkene er bygget som de er

> Konsolidert oversikt over det empiriske grunnlaget bak hvert rammeverk.
> Autoritative detaljer ligger i hvert `<emne>/EKSAMENSANALYSE.md` (kildeliste,
> temafrekvens, sensorkrav, prioritering) og `<emne>/SKJELETT.md` (kalibrering).
> Denne fila samler proveniensen ett sted og forklarer *hvorfor*, ikke bare *hva*.

> **NB (8. juli 2026):** Fabrikken er utvidet fra 77 til **121 fag** i transje 6–7. Tabellen under dekker de første 77; **README-statustavlen er nå den autoritative fag-listen**, og per-fag-grunnlaget ligger i hver `EKSAMENSANALYSE.md`. Full oppdatering av denne tabellen gjenstår.

## Metoden — og hvorfor den er nødvendig

Hvert fag bygges i to grunnlagsfaser før noen bok skrives:

1. **Eksamensanalyse** — én agent leser hele eksamensarkivet (`~/Desktop/Eksamner/<inst>/<kode>/`): ALLE sensorveiledninger/løsningsforslag grundig, siste ~8 år med oppgaver grundig, eldre skummet. Produserer empirisk temafrekvens, oppgavesjangre, sensorkrav og prioritering.
2. **Skjelett** — én agent kombinerer analysen + fagbeskrivelsen + DNA-arketype til en komplett kapittelplan med kvoter, kontrakter og kalibrering.

**Hvorfor analyse først?** Fordi emnebeskrivelsene gjentatte ganger viser seg å feilrepresentere hva eksamen faktisk tester. Katalog over dokumenterte tilfeller:

- **econ1310** — Tester KUN Holdens IS-RR-PK; IS-LM/AD-AS/Solow står i emnebeskrivelsen, men er utestet på 11 år → utelatt.
- **econ4310** — Neoklassisk dynamisk optimering (Euler/Solow-kjerne); IS-RR-PK/Keynes/Bellman = ECON2310-tradisjon, aldri testet i 4310.
- **econ2130** — Enkel lineær regresjon aldri testet på 13 sett (dekkes lett som tolkning); metodesignalene bærer poengene.
- **met4-nhh** — NHH empirisk metode; 2025-formen (6t, R-del + regnedel); tidsrekker tungt; IV/DiD/RDD aldri på skoleeksamen → utelatt.
- **econ1910** — Teoridrevet Oslo-skole (Mehlum–Moene), IKKE RCT/Banerjee-Duflo; flerlikevekt/vicious-circle er rød tråd.
- **sos2200** — «Organisasjon, ledelse og arbeid» (IKKE teorikanon); Lysgaards Arbeiderkollektivet er signaturteksten.
- **sosant1090** — «Antropologiens historie» (teorihistorie, IKKE metode); formatskifte V2023; relasjon+faghistorisk plassering = A/B.
- **kjm1110** — «Organisk kjemi I» (ikke generell kjemi — premiss korrigert); nomenklatur/syntese/mekanisme-konstruksjon.
- **jus1111** — Ren praktikum siden 2020; familie-/arverett er IKKE pensum; skjulte delspørsmål + hjemmelsfeller avgjør karakteren.
- **econ3120** — ECON3120=ECON4120 (byte-identiske sett); metodelydighet dyreste regel; KT/substitusjon ut, differens/Bellman inn H2024.

Uten analysen ville bøkene fulgt pensumlista og brukt plass på utestet stoff. Analysen flytter vekten til det som faktisk gir eksamenspoeng.

## Prioritert rekkefølge

Fagene er tatt i transjer prioritert etter **studentvolum + materialstyrke** (rikt arkiv med mange sensorveiledninger gir sterkest grunnlag). Tabellen under er sortert på samme prinsipp (arkivstørrelse som proxy), med de to live bøkene først. Kvalitet er *frontlastet*: all kalibrering ligger i skjelettet, slik at Opus senere kan bygge uten etterkontroll.

## Oversikt per fag

«Arkiv» = antall filer i eksamensarkivet (derav sensorveiledn./løsningsforslag) og årsspenn. «Fagb.» = egen fagbeskrivelse-ekstrakt brukt. «Kvote» = quiz/flashcards i skjelettet.

| # | Fag | Inst | Arkiv (filer · sv/løsn · år) | Fagb. | Arketype | Kap | Kvote | Status | Nøkkelgrunnlag |
|--:|---|---|---|:--:|---|--:|---|---|---|
| 1 | `jus1111` | UiO | 104 · 21 · 2011–2025 | ja | jus | 36 | 546/532 | bok (live) | Ren praktikum siden 2020; familie-/arverett er IKKE pensum; skjulte delspørsmål + hjemmelsfeller avgjør karakteren. |
| 2 | `econ1310` | UiO | 98 · 47 · 2015–2025 | ja | regnefag | – | 525/510 | bok (live) | Tester KUN Holdens IS-RR-PK; IS-LM/AD-AS/Solow står i emnebeskrivelsen, men er utestet på 11 år → utelatt. |
| 3 | `oslomet-mat1000` | OsloMet | 669 · 2 · 2000–2020 | ja | regnefag | 35 | 547/504 | skjelett | Størst arkiv (669 filer); hjelpemiddel-/formatskiftet 2014→2015 deler faget i to epoker. |
| 4 | `tma4245` | NTNU | 170 · 0 · ? | ja | regnefag | 35 | 540/505 | skjelett | Størst NTNU-emne; inferens-kjeden ML→KI→test er ryggrad siden 2016; eget Python/Monte Carlo-innslag. |
| 5 | `mat121-uib` | UiB | 110 · 40 · 2000–2021 | ja | regnefag | 37 | 554/592 | skjelett | UiB lineær algebra (110 filer, 40 løsn.); bevisoppgave som egen del; rikt materiale. |
| 6 | `mat111-uib` | UiB | 102 · 40 · 2003–2020 | ja | regnefag | 34 | 528/516 | skjelett | UiB kalkulus (åpen bok); difflikninger/Newton/Taylor-restledd; samme norske kalkulus-signatursjanger som UiO. |
| 7 | `fys1001` | UiO | 98 · 49 · 2003–2024 | ja | regnefag | 35 | 550/505 | skjelett | Innføringsfysikk; fluidmekanikk uvanlig sterk (64 %) pga. medisin/naturvit.-profil; kvalitativ hverdagsfysikk-sjanger. |
| 8 | `tfy4125` | NTNU | 92 · 0 · 2004–2024 | ja | regnefag | 36 | 686/544 | skjelett | NTNU-fysikk (92 filer); roterende temavalg (termo/bølger/optikk/fluid/relativitet/kjerne); høy kvote. |
| 9 | `nokut-afb` | NOKUT | 87 · 28 · 2004–2026 | ja | fakta/pugg | 41 | 566/526 | skjelett | Nasjonal deleksamen, alle sykepleiestudenter; dagens veiledning deler settet i 11–16 organsystem-seksjoner = ryggrad; ingen minuspoeng. |
| 10 | `sos1004` | UiO | 87 · 24 · 2003–2021 | — | drøfting | 34 | 658/640 | skjelett | Etterfølger-profilert (SOS1001/1000/1003 → aktivt SOS1004, eget arkiv H2021–25); paradokser er B/A-drøftingsmotor. |
| 11 | `psy1010` | UiO | 86 · 10 · 2008–2024 | ja | HYBRID | 34 | 548/520 | skjelett | Metode/statistikk-hybrid; kjernetema-stjernemerking (⭐⭐⭐ garantert) styrer kapittelvekt. |
| 12 | `fys1120` | UiO | 80 · 2 · 2009–2025 | ja | regnefag | 32 | 509/508 | skjelett | Elektromagnetisme; eget Python-spor (100 % siden 2018); «navngi loven» + symmetriargument drilles. |
| 13 | `in1900` | UiO | 76 · 38 · 2007–2025 | ja | regnefag | 35 | 594/510 | skjelett | Vitenskapelig Python (Langtangen-tradisjonen); fem kjernesjangre dekker mesteparten av poengene; ODESolver-signatur. |
| 14 | `econ3150` | UiO | 74 · 29 · 2003–2025 | ja | regnefag | 32 | 565/510 | skjelett | R-integrert regimeskifte; kausalitet som akse, OVB-baklengs-drill; tospråklig (engelsk eksamen). |
| 15 | `exphil03` | UiO | 74 · 9 · 2017–2025 | ja | drøfting | 30 | 582/551 | skjelett | Størst studentvolum (obligatorisk for alle UiO); pensumskiftet V2021 er det store bruddet analysen kalibrerer mot. |
| 16 | `mat1100` | UiO | 65 · 18 · 2003–2023 | ja | regnefag | 36 | 570/510 | skjelett | Kalkulus; kontinuitet/deriverbarhet i ett punkt er signaturoppgaven; to treningsformer (flervalg + langsvar). |
| 17 | `mat112-uib` | UiB | 65 · 19 · 2000–2014 | — | regnefag | 36 | 576/640 | skjelett | UiB kalkulus II; flervariabel (partiell derivasjon/gradient) er kjernen; oppfølger MAT111. |
| 18 | `econ1100` | UiO | 60 · 30 · 2018–2025 | ja | regnefag | 37 | 541/504 | skjelett | Matematikk for økonomer; gjenganger-score bygd på 9 ordinære + 7 utsatte sett; signaturoppgaver drilles ferskt. |
| 19 | `met4-nhh` | NHH | 59 · 18 · ? | ja | regnefag | 35 | 565/505 | skjelett | NHH empirisk metode; 2025-formen (6t, R-del + regnedel); tidsrekker tungt; IV/DiD/RDD aldri på skoleeksamen → utelatt. |
| 20 | `sos1120` | UiO | 57 · 15 · 2003–2023 | ja | HYBRID med statistikk-tyng | 37 | 666/592 | skjelett | Kvantitativ metode (nedlagt→SOSGEO1120); statistikk-tyngdepunkt med hands-on-tolkning. |
| 21 | `jus2111` | UiO | 56 · 0 · 2012–2025 | ja | jus | 39 | 520/502 | skjelett | Statsforfatning + folkerett; § 89-ordlyd 2020, CRPD inkorporert 1.1.2026 snur eldre eksamenspremisser. |
| 22 | `tfy4104` | NTNU | 55 · 0 · 2008–2018 | — | regnefag | 37 | 708/568 | skjelett | NTNU-fysikk; flervalg uten minuspoeng; optikk som beredskapsstoff, ikke kjerne. |
| 23 | `jus1211` | UiO | 54 · 0 · 2012–2025 | ja | jus | 38 | 532/502 | skjelett | Privatrett II; rettstilstandssjekk gjort (arveloven 2019, 15G-tak); familie-/arve-/tingsrett etter reell frekvens. |
| 24 | `mek1100` | UiO | 50 · 25 · 2003–2018 | ja | regnefag | 27 | 508/502 | skjelett | (se EKSAMENSANALYSE.md — kildeliste og prioritering) |
| 25 | `tfy4115` | NTNU | 50 · 1 · 2004–2018 | ja | regnefag | 37 | 710/564 | skjelett | NTNU-fysikk; to like blokker mekanikk + termisk fysikk; flervalg uten minuspoeng. |
| 26 | `econ1210` | UiO | 48 · 22 · 2018–2025 | ja | regnefag | 34 | 545/505 | skjelett | CORE-anleggsmodellen er bokstandard (ikke klassisk produsentteori); Oppg. 3 roterer klima/karbonprising vs. monopol. |
| 27 | `econ1410` | UiO | 45 · 22 · 2015–2025 | ja | regnefag | 31 | 510/515 | skjelett | Poengbasert retting fra 2018; definisjonspresisjon straffes hardt — V2023 gir minuspoeng for en fjerde forklaring. |
| 28 | `tdt4100` | NTNU | 45 · 0 · 2005–2017 | ja | regnefag | 28 | 584/646 | skjelett | NTNU OOP; enhetstesting/feilsøking + moderne verktøy; stabil kjerne tross AI-tillegg. |
| 29 | `tdt4120` | NTNU | 45 · 0 · 2015–2023 | ja | regnefag | 38 | 622/534 | skjelett | Kortsvarspresisjon («lange svar teller ikke»); figur-univers er kosmetikk; reduksjonsretning-drill. |
| 30 | `svmet1010` | UiO | 44 · 11 · 2004–2025 | ja | drøfting | – | 546/521 | skjelett | Nytt eksamensformat H2024; vitenskapsteori/diskursanalyse utfaset etter 2015, webetnografi/fokusgrupper inn. |
| 31 | `ma0301` | NTNU | 43 · 21 · 2020–2020 | ja | regnefag | 38 | 575/644 | skjelett | Diskret matematikk; gjenganger-score på 13 sett; bevis + struktur etter faktisk vekting. |
| 32 | `mat2200` | UiO | 43 · 18 · 2004–2023 | ja | regnefag | 39 | 593/690 | skjelett | Grupper/ringer/kropper; korona-hjemmeeksamen-år skiller seg; bevisstruktur etter frekvens. |
| 33 | `med1100` | UiO | 42 · 0 · 2021–2026 | ja | fakta/pugg-hybrid | 50 | 706/734 | skjelett | Tre separate bestått/ikke-bestått-blokkeksamener med ulikt format → tre parallelle delbøker; ingen kompensasjon mellom blokker. |
| 34 | `psy1000` | UiO | 42 · 3 · 2009–2018 | ja | drøfting/fakta-hybrid | 56 | 636/796 | skjelett | Bred redegjørelse/fakta-pugg; psykologihistorie er signaturen og krever egen fyldig del; 56 kap dekker hele bredden. |
| 35 | `econ2200` | UiO | 41 · 15 · 2004–2018 | ja | ? | – | – | analyse | NEDLAGT (siste V2018); pensum delt mellom econ1100 + econ2220 (begge har rammeverk). Skjelett droppet som redundant. |
| 36 | `stk1110` | UiO | 41 · 19 · 2004–2025 | ja | regnefag | 25 | 515/505 | skjelett | Statistiske metoder; kontrast til STK1100 (her ikke simulering/bootstrap); oppfølger stk1100. |
| 37 | `tdt4145` | NTNU | 40 · 0 · 2015–2024 | ja | regnefag | 40 | 658/680 | skjelett | Datamodellering/databaser; delvis uttelling er regelen (eksplisitt gradert). |
| 38 | `sos2200` | UiO | 38 · 10 · 2004–2024 | ja | drøfting | 35 | 634/696 | skjelett | «Organisasjon, ledelse og arbeid» (IKKE teorikanon); Lysgaards Arbeiderkollektivet er signaturteksten. |
| 39 | `fys1100` | UiO | 36 · 1 · 2021–2025 | ja | regnefag | 33 | 559/578 | skjelett | Mekanikk/modellering (nedlagt V2022); arkivet lukket → komplett bilde; Python-modelleringsspor. |
| 40 | `in2010` | UiO | 34 · 17 · 2010–2024 | ja | regnefag | 35 | 542/502 | skjelett | Algoritmer/datastrukturer; temafrekvens 2018–2024 styrer; ingen minuspoeng. |
| 41 | `sok1002` | NTNU | 34 · 11 · 2017–2024 | — | regnefag | 29 | 542/510 | skjelett | NTNU mikro; markedskrysset + skatteoverveltning + velferdstap er kjernemodell. |
| 42 | `econ3120` | UiO | 33 · 9 · 2015–2025 | ja | regnefag | 40 | 597/564 | skjelett | ECON3120=ECON4120 (byte-identiske sett); metodelydighet dyreste regel; KT/substitusjon ut, differens/Bellman inn H2024. |
| 43 | `mat2400` | UiO | 33 · 10 · 2004–2022 | ja | regnefag | 33 | 509/636 | skjelett | Reell analyse; lærebokas kapittelstruktur er naturlig ryggrad; høy definisjon-/teoremtetthet. |
| 44 | `stv1020` | UiO | 32 · 5 · 2012–2022 | ja | HYBRID | 35 | 632/578 | skjelett | Kvantitativ forskningsdesign-hybrid; E krever mekaniske kjerneoppgaver, A krever bredde på tvers. |
| 45 | `ttm4100` | NTNU | 32 · 0 · 2015–2024 | ja | regnefag | 37 | 722/574 | skjelett | Datakommunikasjon top-down (Kurose); sikkerhet 94 % topptema; tre formatskifter men stabilt pensum; fast regne-verktøykasse + momentliste-sensur. |
| 46 | `kj2050` | NTNU | 28 · 0 · 2001–2012 | ja | Regnefag/prosedyre-hybrid | 36 | 532/632 | skjelett | Analytisk kjemi; EDTA-titrerfeil-beregning er signatur-regneoppgave; klassisk-analytisk kjerne. |
| 47 | `sosant1000` | UiO | 28 · 10 · 2020–2025 | ja | drøfting | 29 | 549/513 | skjelett | Etnografisk eksempellager per tema; pensumskifte + monografi-utgavesensitivitet flagget. |
| 48 | `in1000` | UiO | 27 · 7 · 2014–2024 | ja | regnefag | 29 | 516/508 | skjelett | Python-intro (OOP); kodesporing tegn-for-tegn; kontrast til IN1900 dokumentert. |
| 49 | `ttm4135` | NTNU | 27 · 0 · 2011–2024 | ja | regnefag | 41 | 762/566 | skjelett | Hybrid krypto (50/50 MCQ vs. skriftlig); tre formskifter men stabile sjangre; hybrid in2060×tdt4120. |
| 50 | `mat1110` | UiO | 26 · 3 · 2004–2025 | ja | regnefag | 34 | 515/510 | skjelett | Kalkulus + lineær algebra; V2025-regimeskifte skarp kontrast til ti foregående år (beredskapsmerking). |
| 51 | `tma4135` | NTNU | 26 · 0 · 2015–2024 | ja | regnefag | 36 | 539/546 | skjelett | Matematikk 4D; bølgeligning/d'Alembert er 4D-signatur; kalkulator + eget notatark. |
| 52 | `econ2130` | UiO | 25 · 12 · 2018–2025 | ja | regnefag | 35 | 550/510 | skjelett | Enkel lineær regresjon aldri testet på 13 sett (dekkes lett som tolkning); metodesignalene bærer poengene. |
| 53 | `econ2310` | UiO | 25 · 12 · 2018–2025 | ja | regnefag | 29 | 515/510 | skjelett | Bygger på econ1310s IS-RR; Mehlums vekst-vri er vanligste A-differensiator (4–5/13 sett). |
| 54 | `in1010` | UiO | 25 · 16 · 2015–2024 | ja | regnefag | 29 | 558/500 | skjelett | Objektorientert; konstruktør/super + interface-signatur er poengtunge faste sjangre. |
| 55 | `stk1100` | UiO | 24 · 7 · 2015–2024 | ja | regnefag | 27 | 510/505 | skjelett | Sannsynlighet; estimering + konfidensintervall er ryggrad i hvert sett; ingen hypotesetesting (UiO-egenart). |
| 56 | `kjm1110` | UiO | 23 · 15 · 2010–2018 | — | Regnefag / kjemi-konstruks | 37 | 564/744 | skjelett | «Organisk kjemi I» (ikke generell kjemi — premiss korrigert); nomenklatur/syntese/mekanisme-konstruksjon. |
| 57 | `econ1220` | UiO | 22 · 9 · 2018–2025 | ja | DRØFTING/HYBRID | 35 | 563/593 | skjelett | Velferds-/politikkdrøfting med kvalitativ verktøykasse; åpen bok tidligere → drøftingsdybde, ikke regning, avgjør. |
| 58 | `econ2220` | UiO | 22 · 11 · 2018–2025 | ja | regnefag | 34 | 570/510 | skjelett | Konsumentoptimering + generell likevekt/Pareto er ryggraden i 11/11 sett; bygger på econ1210 (CORE→c′(y)-bro). |
| 59 | `econ2500` | UiO | 22 · 10 · 2018–2025 | ja | regnefag | 34 | 582/538 | skjelett | Investering/finansiering; stabil temafrekvens 2018–2025 (2 sett/år, ordinær + utsatt) styrer prioriteringen. |
| 60 | `fil1001` | UiO | 22 · 0 · 2005–2024 | ja | drøfting | 30 | 675/696 | skjelett | Metafysikk/bevissthetsfilosofi; sensor spør etter navngitte nøkkeltekster → begrepsrik flashcard-tetthet (696). |
| 61 | `in1020` | UiO | 22 · 6 · 2017–2023 | ja | regnefag | 32 | 697/556 | skjelett | Datateknologi-innføring; datasikkerhet med minuspoeng på «mål vs. tiltak»-krysning. |
| 62 | `jus2211` | UiO | 22 · 0 · 2015–2025 | ja | jus | 46 | 576/600 | skjelett | Signatur = kobling forvaltning↔EØS; ny fvl. (2025) vedtatt men IKKE i kraft → bygg på fvl. 1967, ny lov i parentes (§41→§74). |
| 63 | `jus4111` | UiO | 22 · 0 · 2015–2025 | ja | HYBRID jus × drøft | 36 | 522/626 | skjelett | Metode + etikk (A–F, ikke bestått/ikke-bestått som JUS1111); domsanalysen er tyngdepunkt-signatursjanger. |
| 64 | `econ1910` | UiO | 21 · 10 · 2018–2025 | ja | DRØFTING/HYBRID | 33 | 552/614 | skjelett | Teoridrevet Oslo-skole (Mehlum–Moene), IKKE RCT/Banerjee-Duflo; flerlikevekt/vicious-circle er rød tråd. |
| 65 | `econ3010` | UiO | 19 · 9 · 2018–2025 | ja | DRØFTING | 32 | 528/614 | skjelett | INGEN regning i hele arkivet; drøftingsfag der prisenes signalfunksjon vs. separat omfordeling er svarnøkkelen. |
| 66 | `psyc1201` | UiO | 17 · 7 · 2020–2024 | ja | drøfting/fakta-hybrid (FAK | 38 | 536/638 | skjelett | Fakta-forklaringshybrid; sensorkommentarene gir ferdig mal for differensierte modellsvar (bestått- + toppversjon). |
| 67 | `tdt4110` | NTNU | 17 · 0 · ? | ja | regnefag | 39 | 662/558 | skjelett | NTNUs Python-intro (INGEN OOP); tredelt teori+kodeforståelse+programmering; egen IT-teoridel (~25 %). |
| 68 | `tdt4136` | NTNU | 17 · 9 · 2015–2023 | ja | regnefag | 42 | 712/610 | skjelett | Intro KI; jevn breddedekning (søk/A*/CSP/logikk/adversarielt); NLP forsvant etter 2021. |
| 69 | `econ4310` | UiO | 16 · 8 · 2018–2025 | ja | regnefag | 35 | 20/12 | skjelett | Neoklassisk dynamisk optimering (Euler/Solow-kjerne); IS-RR-PK/Keynes/Bellman = ECON2310-tradisjon, aldri testet i 4310. |
| 70 | `sosant1090` | UiO | 16 · 7 · 2020–2022 | — | drøfting | 36 | 696/708 | skjelett | «Antropologiens historie» (teorihistorie, IKKE metode); formatskifte V2023; relasjon+faghistorisk plassering = A/B. |
| 71 | `fys2140` | UiO | 15 · 0 · 2015–2024 | ja | regnefag | 32 | 582/658 | skjelett | Kvantefysikk; hydrogenatom + angulærmoment + superposisjon er stabil kjerne. |
| 72 | `tdt4171` | NTNU | 15 · 0 · 2015–2024 | ja | regnefag | 34 | 616/554 | skjelett | Metoder i KI; True/False-batteri med tung minusstraff (+2/−3) → kalibreringsstrategi drilles. |
| 73 | `tdt4237` | NTNU | 13 · 1 · 2015–2023 | ja | Hybrid: drøfting (base | 34 | 656/656 | skjelett | Programvaresikkerhet; RMF-risikovurdering av case er selve faget (100 %); STRIDE i fagbeskrivelsen brukes aldri → misuse cases + attack trees. |
| 74 | `in2060` | UiO | 12 · 7 · 2018–2023 | ja | regnefag | 37 | 745/580 | skjelett | Digitalteknikk/arkitektur i 8 faste temablokker; ingen trekk for feil svar (fra H2019); H2023-nyheter dekket. |
| 75 | `mat1120` | UiO | 12 · 7 · 2018–2024 | ja | regnefag | 33 | 539/628 | skjelett | Abstrakte vektorrom er signaturdelen; alt leses fra RREF-vedlegg (aldri manuell radreduksjon). |
| 76 | `econ4915` | UiO | 11 · 0 · 2015–2025 | ja | DRØFTING/ESSAY med empiris | 37 | 584/654 | skjelett | Master-påbygg econ1910; identifikasjon foran korrelasjon (master-signatur); RCT/Banerjee-Duflo ER påkrevd her (motsatt econ1910). |
| 77 | `tdt4186` | NTNU | 11 · 0 · 2010–2012 | ja | regnefag | 32 | 608/650 | skjelett | To eksamenstradisjoner (regnetung A + diskursiv B); boka dekker UNIONEN — robust mot ukjent faglærer. |

**Sum:** 77 fag med rammeverk — 2 bøker live, resten byggeklare skjeletter (noen få under bygging). Kildegrunnlaget for hvert er sporbart til arkivfiler + fagbeskrivelse + analyse.

## Spesialtilfeller i grunnlaget

- **Etterfølger-profilering** (nedlagt emne → aktiv arvtaker): `sos1004` (arkiv SOS1001/1000/1003), `psy1000`, `kjm1110`, `tma4111`/`tma4106`. Analysen bygger på forgjengerarkivet + verifisert arvtaker-emneside.
- **Én bok, flere koder:** `econ3120` dekker ECON3120+ECON4120 (byte-identiske sett).
- **Rettstilstandssjekk før skriving** (jus): `jus2211` (ny fvl. vedtatt, ikke i kraft → fvl. 1967), `jus1211` (arveloven 2019), `jus2111` (CRPD 2026). Verifiseres mot Lovdata i fase 6.
- **Skannede sett OCR-lest** der tekstlag manglet: `jus2211`, `jus4111`, `med1100` (delvis).
- **Manglende sensorveiledninger** (grunnlag utledet fra oppgavetekst, flagget): `jus2211`, `jus4111`, samt rene løsningsforslag-fag (NTNU) uten egne veiledninger.
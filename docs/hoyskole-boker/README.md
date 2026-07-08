# Høyskolebøker — eksamensrettede lærebøker

Pipeline for å bygge eksamensrettede lærebøker for høyskole-/universitetsemner.
**Formålet er eksamen** — ikke å dekke all fagkunnskap i emnet. Alt innholdsvalg
styres av hva som faktisk testes, med hvilken vekt, og hva sensor belønner.

## Filstruktur

```
docs/hoyskole-boker/
├── README.md              ← denne fila (prosess + byggeinstruks)
├── DNA-regnefag.md        ← arketype: kvantitative fag (økonomi, matte, statistikk, fysikk, informatikk)
├── DNA-jus.md             ← arketype: rettsdogmatiske fag med praktikum
├── DNA-drofting.md        ← arketype: essay-/metodefag (metode, sosiologi, filosofi, statsvitenskap)
└── <emnekode>/
    ├── EKSAMENSANALYSE.md ← empirisk analyse av emnets eksamensarkiv (temafrekvens,
    │                        oppgavetyper, sensorkrav, typiske feil, prioritering)
    └── SKJELETT.md        ← komplett bokskjelett: kapittelliste med per-kapittel-DNA,
                             klar til utbygging av forfatter-agent (Opus)
```

## Prosessen (per emne)

1. **Eksamensanalyse**: En agent leser emnets eksamensarkiv
   (`~/Desktop/Eksamner/<institusjon>/<emnekode>/`) — alle sensorveiledninger grundig,
   siste ~8 år med oppgaver grundig, eldre skummet — og skriver `EKSAMENSANALYSE.md`.
2. **Arketype-valg**: Emnet tilordnes én DNA-mal (regnefag / jus / drøfting).
   Hybridemner (f.eks. statistikk med drøftingsdel) bruker primær-arketype + lånte
   elementer, dokumentert i skjelettet.
3. **Skjelett**: Med analyse + fagbeskrivelse + DNA-mal skrives `SKJELETT.md` —
   komplett kapittelliste der hvert kapittel har alt en forfatter trenger for å
   skrive kapitlet UTEN å lese eksamensarkivet selv.
4. **Utbygging (Opus)**: Forfatter-agenter bygger kapitlene som JSON i plattformformatet
   (se under), pluss metadata-oppføring, narrativ-versjoner og quiz.

## Byggeinstruks for forfatter-agenten (Opus)

### Plattformformat
- **Metadata**: `TextbookCourse`-oppføring, mønster: `COURSE_BI_OKONOMI` i
  `src/lib/data/textbook-courses-matte.ts` (id, title, `level: 'Høyskole'`,
  chapters[] med id/number/title/description/estimatedMinutes/topics/
  competenceGoals/prerequisites/linkedChapterId).
- **Kapittelinnhold**: én JSON-fil per kapittel i `src/lib/data/chapters/<id>.json`
  med `content[]`-blokker. Referanseeksempler på blokktypene:
  `bi-okonomi-1-1.json` (text, definition, theorem, example, exercise, tip,
  warning, collapsible) og `r2-1-1.json` (exercise-struktur med subTasks/hints/
  difficulty).
- **Narrativ**: hvert kapittel får `<id>-narrativ.json` (lesevennlig versjon med
  quizer) — se `/narrativ`-skillen og eksisterende `*-narrativ.json`.
- **Navigasjon**: høyskolebøker ligger under hierarkiet Høyskole/universitet →
  institusjon → fagkode + fagnavn. Nye emner registreres i
  `src/app/bok/trinn/hoyere/institusjoner.ts` under riktig institusjon, med
  visningsnavn «FAGKODE Fagnavn» (f.eks. «ECON1310 Makroøkonomi I»).
- Matematikk i LaTeX (`$...$` / `$$...$$`). Norsk bokmål.

### Leserkrav (gjelder alle arketyper — fra produkteier)
- **Kun eksamensrelevant**: hvert avsnitt er eksamensrelevant eller bygger opp
  mot noe eksamensrelevant; mindre viktig stoff kommer ETTER det viktige,
  sortert etter viktighet, og merkes («bør kjenne til»).
- **Forkunnskaper eksplisitt**: hvert kapittel sier tidlig hvilke kapitler det
  bygger på og hvilke forkunnskaper som kreves — med markdown-lenker
  (`[tittel](/bok/<courseId>/<chapterId>)`) til kapitler i ANDRE bøker i
  systemet når forkunnskapen ikke dekkes i boka selv. Lenk kun til kapitler
  som finnes.
- **Lett å lese og engasjerende**: korte avsnitt, aktiv «du»-form, konkrete
  eksempler før formalisme — uten faglige feil; presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave er eksplisitt eksamensforankret
  (si hvilken sjanger den trener) eller åpenbart relevant på annen måte.
- **Symbol- og formelliste per delkapittel**: hvert delkapittel som bruker
  symboler/formler skal ha en egen blokk (collapsible «Symbol- og formelliste»
  rett etter Forkunnskaper) som forklarer ALLE variabler og formler brukt i
  delkapitlet — f.eks. at $Y$ = BNP, $C$ = privat konsum osv. Unntak kun når
  det er smertefritt åpenbart (kapitler helt uten symboler/formler). Et symbol
  regnes ikke som «forklart» fordi et tidligere kapittel forklarte det —
  listen er per delkapittel.

### Eksamensrettede krav (gjelder alle arketyper)
- Hvert kapittel skal ha en **«Eksamensvinkel»**-blokk (type `tip`): hvordan og hvor
  ofte temaet testes, med hvilken vekt, og hva sensor ser etter — hentet fra
  skjelettets per-kapittel-DNA.
- Hvert kapittel skal ha en **«Typiske feil»**-blokk (type `warning`): feilene
  sensorveiledningene faktisk trekker for.
- Oppgavene skal være **modellert på reelle eksamensmønstre** (sjangrene i
  EKSAMENSANALYSE §3), med stigende vanskelighetsgrad som ENDER på eksamensnivå.
- Prioritering følger analysens §7: «må beherskes perfekt»-temaer får flest
  kapitler/oppgaver; «bør kjenne til» får minst.

### Opphavsrett (ufravikelig)
- Eksamensoppgaver og sensorveiledninger brukes som **grunnlag** (mønstre,
  temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver i boka er
  nyskrevne i samme sjanger — endre tall, parter, fakta og formuleringer.
- Pensumlitteratur refereres (forfatter/verk/begrep), aldri siteres i lengde.

### Minimumskrav (fra CLAUDE.md)
Per emne: ≥500 quizspørsmål, ≥500 flashcards, ≥4 prøver per tema, utfyllende
studieguide. Skjelettet fordeler disse per kapittel.

## Statustavle

Status: **analyse** = EKSAMENSANALYSE.md ferdig · **skjelett** = SKJELETT.md
ferdig (= rammeverk komplett, klart for Opus-bygging via BYGGEKONTRAKT-MAL) ·
**bok** = bygget og wiret i plattformen.

| Emne | Arketype | Status |
|---|---|---|
| ECON1310 Makroøkonomi I (UiO) | regnefag | **bok** (live) |
| JUS1111 Privatrett I (UiO) | jus | **bok** (live) |
| JUS4213 Strafferett og straffeprosess (UiO) | jus | skjelett |
| TGB4100 Geologi, innføring (NTNU) | fakta/pugg | skjelett |
| TTT4120 Digital signalbehandling (NTNU) | regnefag | skjelett |
| TFE4171 Design av digitale systemer 2 (NTNU) | regnefag/verifikasjonsfag | skjelett |
| JUR 3420 Forretningsjus (BI) | jus | skjelett |
| ORG 3620 Arbeids- og personaljus (BI) | jus | skjelett |
| STR 3605 Strategi (BI) | drøfting/case-analyse | skjelett |
| BØK 3423 Finans (BI) | regnefag | skjelett |
| FIN 3521 Finansiering av bedrifter (BI) | regnefag | skjelett |
| BØK 3532 Finansregnskap og regnskapsanalyse (BI) | regnefag | skjelett |
| BØK 3632 Finansiell styring (BI) | regnefag/corporate finance II | skjelett |
| SØK 3500 Samfunnsøkonomi II (BI) | regnefag | skjelett |
| MET 2910 Matematikk for økonomer (BI) | regnefag | skjelett |
| MET 2920 Statistikk for økonomer (BI) | regnefag | skjelett |
| MET 1190 Statistikk (BI) | regnefag | skjelett |
| ECON1100 Matematikk I for økonomer (UiO) | regnefag | skjelett |
| ECON1210 Mikroøkonomi 1 (UiO) | regnefag | skjelett |
| ECON1220 Velferd og økonomisk politikk (UiO) | drøfting/hybrid | skjelett |
| ECON1410 Internasjonal økonomi (UiO) | regnefag | skjelett |
| ECON2610 Ressursallokering, fordeling og strategisk atferd (UiO) | regnefag/figur-i-ord-hybrid | skjelett |
| ECON1910 Poverty and Distribution (UiO) | drøfting/hybrid | skjelett |
| ECON4915 Development Economics (UiO) | drøfting | skjelett |
| ECON2130 Statistikk 1 (UiO) | regnefag | skjelett |
| ECON2220 Mikroøkonomi 2 (UiO) | regnefag | skjelett |
| ECON4220 Microeconomics 3 (UiO) | regnefag | skjelett |
| ECON2310 Makroøkonomi 2 (UiO) | regnefag | skjelett |
| ECON2500 Investering og finansiering (UiO) | regnefag | skjelett |
| ECON3150 Introductory Econometrics (UiO) | regnefag | skjelett |
| ECON4310 Macroeconomic Theory (UiO) | regnefag/essay-hybrid | skjelett |
| EXPHIL03 Examen philosophicum (UiO) | drøfting | skjelett |
| FIL1001 Metafysikk og bevissthetsfilosofi (UiO) | drøfting | skjelett |
| LING1100 Innføring i semantikk og pragmatikk (UiO) | formell-hybrid | skjelett |
| FIL1003 Innføring i etikk (UiO) | drøfting | skjelett |
| FYS1001 Innføring i fysikk (UiO) | regnefag | skjelett |
| FYS1100 Mekanikk og modellering (UiO) | regnefag | skjelett |
| FYS1120 Elektromagnetisme (UiO) | regnefag | skjelett |
| FYS2140 Kvantefysikk (UiO) | regnefag | skjelett |
| IN1000 Intro. objektorientert programmering (UiO) | regnefag/kodefag | skjelett |
| IN1010 Objektorientert programmering (UiO) | regnefag/kodefag | skjelett |
| IN1020 Introduksjon til datateknologi (UiO) | regnefag | skjelett |
| IN1030 Systemer, krav og konsekvenser (UiO) | drøfting/prosedyre-hybrid | skjelett |
| IN1900 Python-programmering (UiO) | regnefag/kodefag | skjelett |
| IN2010 Algoritmer og datastrukturer (UiO) | regnefag | skjelett |
| IN2040 Funksjonell programmering (UiO) | regnefag/kodefag | skjelett |
| IN2060 Digitalteknikk og datamaskinarkitektur (UiO) | regnefag | skjelett |
| JUS1211 Privatrett II (UiO) | jus | skjelett |
| JUS2111 Statsforfatningsrett og folkerett (UiO) | jus | skjelett |
| JUS4111 Metode og etikk (UiO) | jus/drøfting-hybrid | skjelett |
| JUS4212 Sivilprosess (UiO) | jus | skjelett |
| KJ2050 Analytisk kjemi, grunnkurs (NTNU) | regnefag/prosedyre-hybrid | skjelett |
| KJM1110 / KJM1111 Organisk kjemi I (UiO) | regnefag/kjemi-konstruksjon-hybrid | skjelett |
| MA0301 Elementær diskret matematikk (NTNU) | regnefag | skjelett |
| MAT111 Grunnkurs matematikk I (UiB) | regnefag | skjelett |
| MAT112 Grunnkurs matematikk II (UiB) | regnefag | skjelett |
| MAT121 Lineær algebra (UiB) | regnefag | skjelett |
| MAT1100 Kalkulus (UiO) | regnefag | skjelett |
| MAT1110 Kalkulus og lineær algebra (UiO) | regnefag | skjelett |
| MAT1120 Lineær algebra (UiO) | regnefag | skjelett |
| MAT2200 Grupper, ringer og kropper (UiO) | regnefag | skjelett |
| MAT2400 Reell analyse (UiO) | regnefag | skjelett |
| MAT2500 Geometri (UiO) | regnefag | skjelett |
| MEK1100 Feltteori og vektoranalyse (UiO) | regnefag | skjelett |
| MET4 Empiriske metoder (NHH) | regnefag/hybrid | skjelett |
| Matematikk 1000 / DAFE1000 (OsloMet) | regnefag | skjelett |
| AFB Anatomi, fysiologi og biokjemi (NOKUT, sykepleie) | fakta/pugg | skjelett |
| MED1100 Medisinstudiet modul 1 (UiO) | fakta/pugg-hybrid | skjelett |
| PSY1000 Innføring i generell psykologi (UiO) | drøfting/fakta-hybrid | skjelett |
| PSY1010 Innføring i metode (UiO) | drøfting/hybrid | skjelett |
| PSYC1201 Sosialpsykologi (UiO) | fakta-forklaring-hybrid | skjelett |
| MRK 3481 Forbrukerpsykologi (BI) | drøfting/fakta-hybrid | skjelett |
| SOK1002 Mikroøkonomi (NTNU) | regnefag | skjelett |
| SOS1120 / SOSGEO1120 Kvantitativ metode (UiO) | hybrid (statistikk-tyngdepunkt) | skjelett |
| SOS2200 Organisasjon, ledelse og arbeid (UiO) | drøfting | skjelett |
| SOSANT1000 Innføring i sosialantropologi (UiO) | drøfting | skjelett |
| STK1100 Sannsynlighet og statistisk modellering (UiO) | regnefag | skjelett |
| STK1110 Statistiske metoder og dataanalyse (UiO) | regnefag | skjelett |
| STV1020 Politisk analyse 2 (UiO) | drøfting/hybrid | skjelett |
| SVMET1010 Kvalitative metoder (UiO) | drøfting | skjelett |
| TDT4100 Objektorientert programmering (NTNU) | regnefag/kodefag | skjelett |
| TDT4102 Prosedyre- og objektorientert programmering (C++) (NTNU) | regnefag/kodefag | skjelett |
| TDT4110 Informasjonsteknologi grunnkurs (NTNU) | regnefag/kodefag | skjelett |
| TDT4120 Algoritmer og datastrukturer (NTNU) | regnefag | skjelett |
| TDT4136 Introduksjon til kunstig intelligens (NTNU) | regnefag | skjelett |
| TDT4137 Kognitive systemer (NTNU) | drøfting/regne-hybrid | skjelett |
| TDT4145 Datamodellering og databasesystemer (NTNU) | regnefag | skjelett |
| TDT4225 Store, distribuerte datamengder (NTNU) | drøfting/regne-hybrid | skjelett |
| TDT4160 Datamaskiner (NTNU) | regnefag | skjelett |
| TDT4260 Datamaskinarkitektur (NTNU) | regnefag/begrepsdrevet hybrid | skjelett |
| TDT4300 Datavarehus og datagruvedrift (NTNU) | regnefag | skjelett |
| TDT4171 Metoder i kunstig intelligens (NTNU) | regnefag | skjelett |
| TDT4237 Programvaresikkerhet og personvern (NTNU) | drøfting/prosedyre-hybrid | skjelett |
| TFY4104 Fysikk (NTNU) | regnefag | skjelett |
| TFY4115 Fysikk (NTNU) | regnefag | skjelett |
| TFY4125 Fysikk (NTNU) | regnefag | skjelett |
| TMA4101 Flervariabel kalkulus og vektoranalyse (NTNU) | regnefag | skjelett |
| TMA4110 Lineær algebra, komplekse tall og differensiallikninger (NTNU) | regnefag | skjelett |
| TMA4121 Matematikk 4 (NTNU) | regnefag | skjelett |
| TMA4135 Matematikk 4D (NTNU) | regnefag | skjelett |
| TMA4245 Statistikk (NTNU) | regnefag | skjelett |
| TDT4186 Operativsystemer (NTNU) | regnefag/hybrid | skjelett |
| TTM4100 Kommunikasjon — Tjenester og nett (NTNU) | regnefag/hybrid | skjelett |
| SOS1004 Innføring i sosiologi (UiO; arkiv SOS1000/1001/1003) | drøfting | skjelett |
| SOSANT1090 Antropologiens historie (UiO) | drøfting | skjelett |
| JUS2211 Forvaltningsrett og EØS-rett (UiO) | jus | skjelett |
| JUS3213 Formuerett II (UiO) | jus | skjelett |
| JUS3112 Formuerett I (UiO) | jus | skjelett |
| JUS5511 Individuell arbeidsrett (UiO) | jus | skjelett |
| ECON3010 Anvendt økonomisk analyse (UiO) | drøfting | skjelett |
| ECON4260 Behavioral Economics (UiO) | regnefag/drøfting-hybrid | skjelett |
| ECON3120/4120 Mathematics 2 (UiO) | regnefag | skjelett |
| TTM4135 Anvendt kryptografi og nettverkssikkerhet (NTNU) | regnefag/hybrid | skjelett |
| TTK4240 Industriell elektroteknikk (NTNU) | regnefag | skjelett |
| IT2805 Webteknologi (NTNU) | kodefag-hybrid | skjelett |
| TIØ4215 Kontraktsrett og kontraktsforhandlinger (NTNU) | jus/forhandling-hybrid | skjelett |
| ECON2200 Matematikk 1/mikro (UiO) | — | analyse (NEDLAGT; dekkes av ECON1100+ECON2220) |

**Slik settes Opus på et fag senere:** følg PRODUKSJONSLOYPE fase 3–7 —
instansier `BYGGEKONTRAKT-MAL.md` til `<emne>/BYGGEKONTRAKT.md` (fyll
fagspesifikk stil fra skjelettets identitetsseksjon), kjør byggebølge
(én Opus-agent per del, maks 2 samtidige), wiring, verifiseringsbølge, build.

Skalering videre: 156 aktive emner kartlagt i `fagbeskrivelser-samlet`
(Desktop); 137 har eksamensarkiv, 67 har sensorveiledningsinnsikt.

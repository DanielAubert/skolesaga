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
| AFB Anatomi, fysiologi og biokjemi (NOKUT, sykepleie) | fakta/pugg | skjelett |
| SVMET1010 Kvalitative metoder (UiO) | drøfting | skjelett |
| ECON1210 Mikroøkonomi 1 (UiO) | regnefag | skjelett |
| ECON1100 Matematikk I (UiO) | regnefag | skjelett |
| ECON2130 Statistikk 1 (UiO) | regnefag | skjelett |
| ECON2220 Mikroøkonomi 2 (UiO) | regnefag | skjelett |
| ECON2310 Makroøkonomi 2 (UiO) | regnefag | skjelett |
| EXPHIL03 Examen philosophicum (UiO) | drøfting | skjelett |
| FYS1001 Innføring i fysikk (UiO) | regnefag | skjelett |
| JUS1211 Privatrett II (UiO) | jus | skjelett |
| MAT1100 Kalkulus (UiO) | regnefag | skjelett |
| PSY1010 Innføring i metode (UiO) | drøfting/hybrid | skjelett |
| TMA4245 Statistikk (NTNU) | regnefag | skjelett |
| KJ2050 Analytisk kjemi, grunnkurs (NTNU) | regnefag/prosedyre-hybrid | skjelett |
| ECON3150 Econometrics (UiO) | regnefag | skjelett |
| FYS1120 Elektromagnetisme (UiO) | regnefag | skjelett |
| MAT111 Grunnkurs matematikk I (UiB) | regnefag | skjelett |
| STK1100 Sannsynlighet (UiO) | regnefag | skjelett |
| IN1900 Python-programmering (UiO) | regnefag | i kø |
| TDT4120 Algoritmer (NTNU) | regnefag | skjelett |
| TDT4145 Datamodellering og databasesystemer (NTNU) | regnefag | skjelett |
| MET4 Empiriske metoder (NHH) | regnefag/hybrid | skjelett |
| JUS2111 Statsforfatningsrett (UiO) | jus | skjelett |
| SOSANT1000 Sosialantropologi (UiO) | drøfting | skjelett |
| STV1020 Politisk analyse 2 (UiO) | drøfting/hybrid | skjelett |

**Slik settes Opus på et fag senere:** følg PRODUKSJONSLOYPE fase 3–7 —
instansier `BYGGEKONTRAKT-MAL.md` til `<emne>/BYGGEKONTRAKT.md` (fyll
fagspesifikk stil fra skjelettets identitetsseksjon), kjør byggebølge
(én Opus-agent per del, maks 2 samtidige), wiring, verifiseringsbølge, build.

Skalering videre: 156 aktive emner kartlagt i `fagbeskrivelser-samlet`
(Desktop); 137 har eksamensarkiv, 67 har sensorveiledningsinnsikt.

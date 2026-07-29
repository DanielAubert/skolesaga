# Byggekontrakt — TMA4135 Matematikk 4D (NTNU), regnefag-arketype

Instansiert fra `BYGGEKONTRAKT-MAL.md` for `tma4135`. Arketype: **DNA-regnefag**
(`DNA-regnefag.md`). Denne kontrakten er bindende for hver kapittelforfatter.
Les den HELT før du skriver.

`tma4135/SKJELETT.md` er autoritativt for kapitteltitler, per-kapittel-DNA,
kvoter, minutter og eksamensbelegg; `tma4135/EKSAMENSANALYSE.md` er
grunnlagsdokumentet bak skjelettet. Ved konflikt vinner **skjelettet på
faginnhold**, **denne kontrakten på form/struktur**. Forfatteren leser IKKE
eksamensarkivet — alt av frekvenser, sjangre, sensorkrav og typiske feil står i
skjelettet.

**Bokens omfang:** **36 kapitler** (1 eksamenskart + 1 repetisjonskapittel +
26 temakapitler + 4 drillkapitler + 4 i eksamenstreningsdelen) fordelt på
**deler 0–9**, **+ 8 prøvekapitler** (Del 1–8). **2 730 min ≈ 45,5 timer**.
**539 quiz** og **546 flashcards** (begge over 500-gulvet).

---

## 0. Emnestatus og målgruppe (bindende — kilde: `MÅLGRUPPE.md`)

**TMA4135 er et aktivt emne som går som normalt.** Det undervises høsten 2026,
med ordinær skriftlig eksamen **4. januar 2027 kl. 09:00 (4 timer)**,
**hjelpemiddelkode C**, og faglig innhold ordrett identisk med 2024-utgaven.
Emnesiden har **ingen** utfasingsvarsel.

> **Ordet «utfaset» (og «utfasing», «utgår», «siste kull») skal ALDRI brukes om
> TMA4135 noe sted i boka.** Emnesiden sier ikke det, og en student som leser
> at emnet hennes er på vei ut, mister tillit til boka uten grunn. Det som
> derimot er sant og relevant, er at hun kan ha meldt seg opp i et *annet*
> emne — og det håndteres som en målgruppeavklaring, ikke som et forbehold om
> at boka er mindre verdt.

### To Matematikk 4-emner går parallelt høsten 2026

| | **TMA4135 Matematikk 4D** (denne boka) | **TMA4432 Matematikk 4C** |
|---|---|---|
| Semester | Høst 2026 | Høst 2026 |
| Eksamen | 04.01.2027, 4 timer | — |
| Hjelpemidler | **Kode C** — spesifiserte trykte og håndskrevne hjelpemidler + enkel kalkulator (utdelt formelark + eget A5-ark) | **Kode D** — bestemt enkel kalkulator, **ingen** trykte eller håndskrevne hjelpemidler |
| Status | aktivt, innhold ordrett identisk med 2024 | **nytt fra studieåret 2026/2027** |
| Laplace-transform | bærende del (Del 2, høyeste prioritet) | ikke i emnebeskrivelsen |
| Fourier, PDE, numerikk | ja | ja |
| SVD, matrise-/tensorfaktorisering | nei | ja |
| Splines og Bézier-kurver | nei | ja |

MTKOM har TMA4432 i stedet fra kull25, og etterfølgerne
TMA4431/TMA4432/TMA4420/TMA4430 er alle kode D. Det er derfor fullt mulig at en
leser som googler «Matematikk 4» havner her med feil emne.

### Hvorfor dette avgjør bokas verdi

Hele boka hviler på at studenten har et formelark: Del 0 har
formelark-strategien, Del 9 har verkstedet der hun bygger sitt eget A5-ark, og
drillen handler gjennomgående om å **velge riktig metode og føre den** — ikke om
å pugge formler. **For en TMA4432-student er det premisset feil.** Hun har ikke
formelark; trener hun etter denne boka, trener hun på en ferdighet hun ikke får
bruke, og oppdager det først på eksamensdagen. Motsatt ville en
TMA4135-student som leser en 44xx-rettet bok, brukt tid på SVD, splines og
Bézier som ikke står på hennes eksamen — og fått for lite Laplace.

### KRAV: «Er dette boka di?»-boksen i kapittel 0.1

**Aller først i kap. 0.1, før alt annet fagstoff** (før Eksamensvinkel-tipen,
før «Slik leser du denne boka»-boksen, før eksamensformen): én `tip`- eller
`text`-blokk med overskriften **«Er dette boka di?»**. Den skal si, kort og
konkret:

1. at boka er skrevet for **TMA4135 Matematikk 4D**, med ordinær eksamen
   **4. januar 2027**, **hjelpemiddelkode C**;
2. at NTNU samtidig tilbyr **TMA4432 Matematikk 4C**, nytt fra studieåret
   2026/2027, med **kode D — ingen trykte eller håndskrevne hjelpemidler**;
3. at en student på TMA4432 **ikke bør bruke denne boka**: den trener
   formelark-bruk hun ikke får ha med seg, og Laplace-transform — en bærende
   del her — står ikke i hennes emnebeskrivelse (hun skal i stedet ha SVD,
   splines og Bézier, som ikke er dekket her);
4. **hvordan hun sjekker hvilken hun har**: emnekoden i studieplanen og på
   eksamensoppmeldingen.

Boksen er en **sorteringshjelp** — leseren skal kunne plassere seg selv på
under et minutt. Den skal ikke bli en drøfting av NTNUs matematikkreform, ikke
liste opp hele 44xx-serien, og ikke be om unnskyldning for bokas avgrensning.
Ingen `warning`-blokk (det er ikke en advarsel), ingen `definition` (det ville
endret flashcard-kvoten).

**Profilering:** boka omtaler seg ALDRI som gyldig for TMA4431/4432/4420/4430,
lover ALDRI at den dekker dem, og ingen innlednings- eller
markedsføringstekst får antyde at innholdet er eksamensrettet mot 44xx-serien.
Den ene omtalen av TMA4432 er sorteringsboksen over.

---

## 1. Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/tma4135-<del>-<nr>.json`
(prøver: `src/lib/data/chapters/tma4135-<del>-prove.json`). Quiz:
`src/lib/data/quiz-staging/tma4135-<del>-<nr>.quiz.json`.

IKKE rør `_registry.json`, `_all.json`, `textbook-courses*.ts`, `quiz-data*.ts`
— wiring gjøres sentralt (fase 5, `scripts/hoyskolebok/wire-bok.py`). Generer
ALL JSON via python `json.dump(..., ensure_ascii=False, indent=2)` — aldri for
hånd (LaTeX-backslash må bli `\\` i JSON, og TMA4135 er det mest
LaTeX-tunge faget i serien).

## 2. Kapittel-JSON (toppnivå)

`{ id, courseId: 'tma4135', chapterNumber: '<del>.<nr>' (fra skjelettet),
title, description, estimatedMinutes, competenceGoals: [2–4 «kunne …» — INGEN
kald kode/sjangerbokstav her], content: [blokker], exercises: [] }`

`title`, `description` og `estimatedMinutes` tas **ORDRETT fra SKJELETT.md**
(se §4 under). `exercises`-arrayet på toppnivå står tomt — oppgavene ligger
inline i `content[]`.

## 3. Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{id, type, content}` (markdown + LaTeX `$...$`/`$$...$$`)
- `definition`: `{id, type, title, content}` — **title OBLIGATORISK**; åpne med
  forklaring i ORD, formelen kommer ETTER (aldri en ligning som første linje).
  Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`.
- `theorem`: `{id, type, title, content}` — brukes for de navngitte teoremene
  (andreforskyvnings-, konvolusjons-, fikspunkt-, mellomverdisetningen,
  konvergensteoremet, d'Alemberts formel).
- `example`: `{id, type, title, problem, solution}` (solution = A-besvarelse
  med hvert transformoppslag og hvert mellomsteg skrevet ut)
- `tip` / `warning`: `{id, type, title, content}`
- `exercise`: `{id, type, exercise: {id, number, type: 'classic', difficulty:
  'lett'|'middels'|'vanskelig', task, solution, hints: [...]}}`. ALDRI
  `solutionVideo`/`allowsUpload`/`allowsCanvasDrawing`/`answer`. IKKE bruk
  `subTasks` — deloppgaver a) b) c) skrives på egen linje i `task`/`solution`.
- `collapsible`: `{id, type, title, buttonText, content: [blokker]}` —
  `content` er feltnavnet og skal ALLTID ha blokker (aldri tom, aldri
  `text`-nøkkel).
- `image`: `{id, type, src, alt, caption}` — for SVG-figurer (se «Figurkrav»).

Blokk-id: `<kapittel-id>-<løpenavn>`, unike i kapitlet.

---

## 4. KAPITTELTITLER — ORDRETT fra SKJELETT.md (ufravikelig)

**Tittelen tas ORDRETT fra `SKJELETT.md` §3 — ALDRI fra byggeprompten,
kø-dokumentet, en oppsummering eller din egen forkortelse.** Fire kapitler i
tidligere bøker i serien fikk feil tittel fordi byggelederen kortet dem ned i
agentprompten og forfatteren stolte på prompten. Prompten er ikke en kilde.
Åpne skjelettet, finn `#### Kapittel X.Y: …`, og kopier alt etter kolonet
tegn for tegn — inkludert tankestreker (—), parenteser og LaTeX (`$k$`,
`$R(z)$`, `$r\le\tfrac12$`, `$\mathbb{R}$`).

Samme regel gjelder `description` og `estimatedMinutes`: ordrett fra
kapittelets skjelettavsnitt.

| # | Tittel (ORDRETT) | Type | Min | Quiz | FC |
|---|---|---|---|---|---|
| 0.1 | Slik testes TMA4135 — de fire søylene og formelarket | eksamenskart | 35 | 12 | 14 |
| 1.1 | Komplekse tall, Eulers formel og enhetsrøtter | teori | 50 | 14 | 18 |
| 2.1 | Laplace-transformen, derivasjonsregelen og ODE/IVP | teori | 60 | 22 | 24 |
| 2.2 | Invers Laplace — delbrøk og kvadratkomplettering | teori | 60 | 20 | 20 |
| 2.3 | Forskyvningsteoremene, Heaviside og Dirac | teori | 60 | 20 | 22 |
| 2.4 | Konvolusjon og integro-differensiallikninger | teori | 55 | 16 | 18 |
| 2.5 | Drill — Laplace-sjangeren fra ende til annen | drill | 90 | 14 | 10 |
| 3.1 | Fourier-rekker — koeffisienter og symmetriutnyttelse | teori | 60 | 20 | 20 |
| 3.2 | Halvintervall-utvidelser, konvergens og midling | teori | 55 | 17 | 18 |
| 3.3 | Kompleks Fourier-rekke | teori | 50 | 14 | 16 |
| 3.4 | Drill — Fourier-rekke-sjangeren | drill | 85 | 14 | 10 |
| 4.1 | Fourier-transformen — tabell, derivasjons- og konvolusjonsregel | teori | 60 | 18 | 22 |
| 4.2 | Fourier-transform for PDE på hele $\mathbb{R}$ | teori | 55 | 12 | 12 |
| 4.3 | Diskret Fourier-transform (DFT) | teori | 55 | 14 | 16 |
| 5.1 | Separasjon av variable — varmelikningen og de tre $k$-tilfellene | teori | 70 | 20 | 20 |
| 5.2 | Superposisjon, Fourier-matching og ikke-homogene problemer | teori | 60 | 16 | 16 |
| 5.3 | Bølgeligningen og d'Alemberts formel | teori | 60 | 18 | 18 |
| 5.4 | Verifiser at en funksjon løser en PDE + klassifisering (4D-signaturen) | teori | 55 | 14 | 16 |
| 5.5 | Drill — separasjon av variable fra ende til annen | drill | 90 | 14 | 8 |
| 6.1 | Interpolasjon — Lagrange og Newtons dividerte differanser | teori | 60 | 18 | 20 |
| 6.2 | Numerisk integrasjon — trapes, Simpson, presisjonsgrad og Gauss–Legendre | teori | 60 | 18 | 20 |
| 6.3 | Fikspunktiterasjon og kontraksjon | teori | 55 | 16 | 16 |
| 6.4 | Rotsøking — Newtons metode, biseksjon og sekant | teori | 55 | 15 | 16 |
| 7.1 | Euler, Heun og Runge–Kutta — ett skritt for hånd | teori | 60 | 18 | 18 |
| 7.2 | Butcher-tabeller og ordensbetingelser | teori | 60 | 16 | 18 |
| 7.3 | Innfelt RK-par og steglengdekontroll | teori | 55 | 14 | 14 |
| 7.4 | Stabilitetsfunksjonen $R(z)$ og stabilitetsintervall | teori | 50 | 13 | 14 |
| 7.5 | Drill — numerisk ODE-sjangeren | drill | 85 | 12 | 8 |
| 8.1 | Differansekvotienter og avkuttingsfeil via Taylor | teori | 55 | 14 | 16 |
| 8.2 | Eksplisitt skjema for varmelikningen og stabilitet $r\le\tfrac12$ | teori | 60 | 16 | 16 |
| 8.3 | Crank–Nicolson og implisitte skjemaer | teori | 55 | 13 | 12 |
| 8.4 | Randverdiproblemer, falsk rand og kodefeil-lokalisering | teori | 60 | 14 | 14 |
| 9.1 | Formelark-verksted — bygg ditt A5-ark og tren oppslaget | drill | 75 | 18 | 26 |
| 9.2 | Øvingseksamen 1 — den klassiske malen | øvingseksamen | 240 | 5 | 0 |
| 9.3 | Øvingseksamen 2 — Fourier-transform og differansemetoder | øvingseksamen | 240 | 5 | 0 |
| 9.4 | Øvingseksamen 3 — nyeste mal med DFT og innfelt RK-par | øvingseksamen | 240 | 5 | 0 |
| | **Sum 36 kapitler** | | **2 730** | **539** | **546** |

Delsummer for kontroll (minutter / quiz / flashcards): Del 0 = 35/12/14 ·
Del 1 = 50/14/18 · Del 2 = 325/92/94 · Del 3 = 250/65/64 · Del 4 = 170/44/50 ·
Del 5 = 335/82/78 · Del 6 = 230/67/72 · Del 7 = 310/73/72 · Del 8 = 230/57/58 ·
Del 9 = 795/33/26.

**Seksjonstitler** (`sectionNames`, settes i wiring — gjengitt her så
forfatteren bruker samme deltittel i prøvekapitlenes titler):
0 Eksamenskart og formelark-strategi · 1 Komplekse tall og funksjoner
(repetisjon) · 2 Laplace-transform · 3 Fourier-rekker · 4 Fourier-transform og
DFT · 5 Partielle differensiallikninger · 6 Numerisk analyse I: interpolasjon,
integrasjon, rotsøking · 7 Numeriske metoder for ODE · 8 Differansemetoder for
PDE og randverdiproblemer · 9 Eksamenstrening.

---

## 5. INTERNE LENKER — ingen `/bok`-prefiks (kritisk)

`/bok`-prefikset ble **fjernet fra plattformen 27. juli 2026** og finnes ikke
lenger. Alle interne kapittellenker skrives:

```
[kap. 2.3](/tma4135/tma4135-2-3)
```

**ALDRI** `/bok/tma4135/…` — den lenken er død, og lenkeporten i
`sjekk-bok.py` fanger den. Grep-kravet før ferdigmelding: `](/bok/` = 0 treff.

Øvrige lenkeregler: «kap. X.Y» i Forkunnskaper-blokker og i fasiter skal være
klikkbare markdown-lenker; død «se kapittel …»-tekst er FORBUDT; aldri lenker i
`title`-felt; kryssbok-lenker legges KUN til kapitler som faktisk finnes i
`src/lib/data/chapters/`. For matematiske forkunnskaper (derivasjon,
integrasjon, delvis integrasjon, komplekse tall): lenk til R1/R2-bøkene bare
hvis du har verifisert id-en i `src/lib/data/chapters/`; ellers skriv kravet i
klartekst uten lenke.

---

## 6. Obligatorisk kapittelstruktur

### Teorikapitler (i denne rekkefølgen)

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre hentet ORDRETT fra
   kapitlets «Eksamensbelegg»-punkt i SKJELETT §3. Frekvenstallene er telte
   belegg («12 av 13 sett = 92 %») og skal aldri rundes, pyntes eller
   gjenfortelles med andre tall.
2. `text` **Forkunnskaper** — kapitler i boka som markdown-lenker
   `[kap. X.Y](/tma4135/tma4135-X-Y)`, ellers «kan leses uten forkunnskaper».
   Tunge kapitler (2.5, 3.4, 5.1, 5.5, 7.5, 8.2, 8.4, 9.1) skal ha en
   **«Sist du var her»**-blokk som VISER de 2–3 nøkkelformlene ferdig
   oppfrisket (f.eks. derivasjonsregelen $\mathcal{L}\{y'\}=sY-y(0)$,
   koeffisientintegralene, $r=\Delta t/h^2$).
3. `text` **Motivasjon** — hverdagsanker/fysisk knagg før apparatet.
4. **Læringsløkker:** teori (`text`/`definition`/`theorem`, med
   «Intuisjon:»-linjer i utledninger) → `example` → `exercise` INLINE, gjentatt
   løkke for løkke gjennom kapitlet. IKKE all teori øverst / alle oppgaver
   nederst. 2–4 eksempler per kapittel, det siste på eksamensnivå og løst som
   A-besvarelse. 6–12 oppgaver med `solution` + `hints`.
5. `warning` **Typiske feil** — de konkrete fra skjelettets «Typiske
   feil»-punkt for nettopp dette kapitlet.
6. **Begrepsbank** — `definition`-blokker til flashcard-kvoten. Hver stor bank
   åpner med standardnotisen «flashcard-/repetisjonsstoff — hopp trygt over ved
   førstegangslesing; tidsanslaget gjelder kjernestoffet».
7. `collapsible` **Repetisjonsoppgaver** — 4–6 korte fra forkunnskapskapitlene.
8. SIST: `collapsible` **Symbol- og formelliste** (title «Symbol- og
   formelliste», buttonText «Vis symboler og formler»). Første linje:
   «Oppslagsverk — alt her forklares underveis i kapitlet.» Deretter
   markdown-tabell `| Symbol | Betydning |` + «**Formler i dette kapitlet:**»
   med display-LaTeX og én ordlinje per formel. ALLE symboler og formler brukt
   i kapitlet, per kapittel — ingen arv fra tidligere kapitler.
   **TMA4135-tillegg:** hver formel i listen merkes **«(står på det utdelte
   formelarket)»** eller **«(må kunnes/utledes aktivt)»**, og listen sier hva
   kolliderende symboler betyr i nettopp dette kapitlet ($k$ =
   separasjonskonstant i Del 5, men tidssteg på formelarket i Del 8; $c$ =
   bølgefart i Del 5, men node/koeffisient ellers; $L$ = halvperiode i Del 3,
   men kontraksjonskonstant i 6.3; $r$ = rot/radius i Del 1 og 6, men
   stabilitetstall i Del 8; $F$ = Laplace-transform i Del 2, men $F(x)$ i
   separasjonsansatsen i Del 5).

### Drillkapitler (2.5, 3.4, 5.5, 7.5, 9.1)

`tip` **Eksamensvinkel** → `text` **Forkunnskaper** («Sist du var her») →
`text` **Løsningsoppskrift** (nummerert algoritme, ordrett fra skjelettets
innholdskontrakt) → `example` **Gjennomregnet eksamenscase** med
sensor-margnotater om hva som gir uttelling i hvert steg → 8–15 `exercise` på
eksamensnivå som roterer sjangervariantene → `warning` **Typiske feil** →
Symbol- og formelliste SIST. Drillkapitlene trenger ikke egen begrepsbank i
vanlig forstand — nå flashcard-kvoten med **formelkort/oppskriftskort**
(`definition`-blokker: «Oppskrift: Laplace-IVP i fire steg», «Kort: de tre
$k$-tilfellene»).

### Øvingseksamener (9.2, 9.3, 9.4)

Komplett 4-timers sett etter skjelettets miks (9.2: 8 oppgaver; 9.3: 9
oppgaver; 9.4: 10 oppgaver à 10 poeng). Struktur: `tip` med eksamensform,
poengsum og tidsbudsjett + `text` Forkunnskaper + **hver oppgave som egen
`collapsible`** med oppgavetekst og A-besvarelse-fasit + `tip`-notat om
poengvekting per delpunkt og tidsbruk. Kap. 9.4 markerer eksplisitt hvilke
oppgaver (DFT, innfelt RK-par, Gauss–Legendre) som hviler på tynnest
arkivbelegg. Symbol- og formelliste SIST. Ber en oppgave om skisse («skissér
den periodiske utvidelsen», «tegn gitteret»), skal fasiten vise faktisk SVG —
se «Figurkrav».

---

## 7. Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»)

- Kun eksamensrelevant stoff; «bør kjenne til»-stoff sist og merket. I TMA4135
  gjelder det gradient/retningsderivert (5.4), sekantmetoden (6.4) og
  LU/Doolittle + Jacobi/Gauss–Seidel (sjanger S, beredskap — nevnes i 6.x-quiz
  og i 9.1, ikke som egen kapittelkjede).
- Korte avsnitt (2–4 setninger), «du»-form, konkret norsk knagg før
  formalisme — presisjon vinner ved tvil.
- Hver oppgave synlig eksamensforankret («(Eksamenssjanger C — Heaviside-last)»)
  eller åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise` inline (se §6.4).
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel,
  en formel eller en metode som ikke er introdusert tidligere i SAMME kapittel
  (t.o.m. eksempelet rett foran) eller i et kapittel oppført i
  Forkunnskaper-blokken. Sjekk hver `exercise` eksplisitt.
- **Deloppgaver på egen linje, fet merking:** `…\n\n**a)** …\n**b)** …`. ALDRI
  a) b) c) bak hverandre i løpende tekst. IKKE `subTasks`.
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER sjangerbokstav (A–S),
  feilkode og karakterbokstav forklares i klarspråk ved FØRSTE bruk **per
  kapittel**; ALDRI kald kode i `competenceGoals` eller i aller første
  tekstboks. Tunge fagtermer (konvolusjon, egenfunksjon, kontraksjon,
  Butcher-tabell, stabilitetsfunksjon, avkuttingsfeil, aliasing, falsk rand)
  skrives ut med klarspråksforklaring første gang.
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0
  (eksamen er A–F med prosentbasert skala: A 80–90, B 69–79, C 59–68, D 48–58,
  E 37–47, F 0–36). «Prioritet: perfekt» er FORBUDT — skriv «høyeste
  prioritet». «Gapet til A» = oppgraderingsmeny. Modellbesvarelser er ærlig
  merket og **nyskrevne** (aldri omtalt som ekte studentbesvarelser); minst én
  ærlig merket B-/midtnivå-besvarelse i Del 0 og i øvingseksamenene.
- **Meta-fasit forbudt:** «en A-besvarelse ville ha utledet …» erstattes av
  den faktisk utskrevne utledningen.
- **Signalbokser ETTER oppgaven:** varsel om hva en drilloppgave tester står
  etter oppgaven eller som collapsible hint, aldri foran.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; én lett
  innstegsoppgave (difficulty `lett`, ren gjengivelse — «slå opp
  $\mathcal{L}\{t^3\}$ i tabellen») tidlig i teorikapitler der første oppgave
  ellers er full eksamenssjanger.
- **Hint + difficulty-spredning:** alle `exercise` har utfylte `hints` (første
  hint = formelen/tabelloppslaget/første grep, ALDRI konklusjonen). Stigende
  vanskelighet: 2–3 lett, 2–4 middels, 2–4 vanskelig. Boka samlet skal ha noen
  «(krevende)»-merkede oppgaver og **én merket kald bank UTEN hint** (fasit =
  momentliste) i kap. 9.1. Ikke skriv «(vanskelig)» inne i `task` — det er
  redundant med `difficulty`-feltet.
- **Fasitmønster-variasjon:** gjelder ALLE ensartede fasitlister — aldri «alle
  a», aldri «alle felle»/«alle riktig». Distraktorer gjengir ALDRI bokas egne
  nyanser som «galt» svar.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum
  deltider forklares. «Lite tid?»-boksen sier at anslagene er LESEtid (×1,5
  ved håndskriving); eksamensmålet er ~24 min per 10-poengsoppgave i
  2023/2024-malen.
- **Øktmerking:** kapitler > 45 min (det er de fleste — alle unntatt 0.1) har
  tidsanslag per løkke og «— naturlig pausepunkt —»-markører; lange
  modellbesvarelser i øvingseksamenene likeså.

---

## 8. FORMELARK-DOKTRINEN — bokas bærende premiss

Hjelpemiddelkode C betyr at studenten møter opp med kalkulator og **ett gult,
stemplet A5-ark med egne håndskrevne notater**, og at et **formelark deles ut
sammen med oppgavesettet** (Laplace-tabell, Fourier-transform-tabell,
trigonometriske identiteter, reduksjonsformler for delvis integrasjon, og en
full numerikk-side; fra 2022 også RK-ordensbetingelsene for $p=1..4$).

**Konsekvensen for undervisningen — dette er hele bokas didaktiske akse:**
eksamen tester **å velge riktig metode og føre den**, ikke å huske formler.
Boka skal derfor ALDRI presentere noe som puggestoff, og skal aldri be leseren
memorere en tabellrad. Drillen handler om tre ting: (1) se hvilken sjanger
oppgaven er, (2) vite hvilken rad/tabell på arket som løser den og sette inn
riktig $a$/$\omega$/$n$, og (3) føre utledningen for det arket IKKE gir.

**Premisset skal begrunnes eksplisitt der det introduseres** (kap. 0.1, og
kort igjen i kap. 9.1): det er **hjelpemiddelkode C** som gjør at boka driller
metodevalg framfor pugging. Leseren skal aldri møte formelark-strategien som
en umotivert pedagogisk preferanse — den følger av eksamensreglementet i
nettopp hennes emne. Dette er også koblingen til «Er dette boka di?»-boksen
(§0): har hun kode D, faller begrunnelsen bort, og boka er feil verktøy.

### Toveis-markeringen (obligatorisk i HVERT kapittel)

Hvert kapittel skiller eksplisitt, med disse to frasene, slik at de kan
grep-sjekkes:

- **«står på det utdelte formelarket — tren oppslaget»**: Laplace-parene
  ($\cos\omega t$, $\sin\omega t$, $\cosh$, $\sinh$,
  $t^n\leftrightarrow n!/s^{n+1}$, $e^{at}\leftrightarrow 1/(s-a)$,
  andreforskyvning $f(t-a)u(t-a)\leftrightarrow e^{-as}F(s)$,
  $\delta(t-a)\leftrightarrow e^{-as}$); Fourier-transform-tabellen (Gauss-par,
  $e^{-a|x|}$, $1/(x^2+a^2)$, boksfunksjon); trig-identitetene;
  reduksjonsformlene for $\int x^n\cos ax\,dx$ / $\int x^n\sin ax\,dx$; hele
  numerikk-siden (Newton skalar + system med $J_F$, Lagrange +
  interpolasjonsfeilen $\varepsilon_n(x)=\prod(x-x_k)f^{(n+1)}(\xi)/(n+1)!$,
  Chebyshev-punktene, Newtons dividerte differanser, trapes/Simpson med
  feilledd, Jacobi/Gauss–Seidel, Euler/forbedret Euler/RK4/bakover-Euler,
  differansekvotientene, Crank–Nicolson) og RK-ordensbetingelsene $p=1..4$.
- **«må kunnes/utledes aktivt»**: transformere en ODE og løse for $Y(s)$;
  derivasjonsregelen; delbrøk + kvadratkomplettering; «finn $f$ først,
  forskyv sist»; konvolusjonsteoremet (navngis); koeffisientintegralene og
  symmetriargumentet; halvintervall-utvidelse og midling; kompleks
  Fourier-rekke; DFT-definisjonen; alle tre $k$-tilfellene; Fourier-matching;
  d'Alemberts formel; verifikasjon av PDE-løsning; presisjonsgrad ved å teste
  $x^n$; $[a,b]\to[-1,1]$-transformasjonen; **begge** fikspunktvilkårene og
  a-priori-estimatet; entydighetsargumentet via mellomverdisetningen;
  biseksjonstellingen; avlesing av Butcher-tabell og rad-for-rad
  ordensverifikasjon; feilestimat og steglengdeformel i innfelt par;
  utledningen av $R(z)$; Taylor-utledningen av avkuttingsfeil; oppsettet av
  det eksplisitte skjemaet og $r\le\tfrac12$; falsk-rand-eliminering;
  kodefeil-lokalisering.

Markeringen står tre steder i hvert kapittel: i teksten der formelen
introduseres, i eksempelets fasit («fra tabellen: …»), og i Symbol- og
formellisten til slutt.

### Del 0 og kap. 9.1

- **Kap. 0.1** åpner med **«Er dette boka di?»-boksen** (§0) og presenterer
  deretter **formelark-strategien** som eget hovedavsnitt: hva arket
  inneholder, hva det ikke inneholder, at det er kode C som gjør det
  tilgjengelig, og hvorfor det gjør pugging bortkastet.
- **Kap. 9.1 er et verksted**, ikke en oppsummering. Leveranse (1): studenten
  bygger sitt eget A5-ark — boka gir en kuratert liste over det som *ikke*
  står på det utdelte arket, men ofte trengs (konvolusjonsteoremet,
  a-priori-estimatet, d'Alemberts formel, steglengdeformelen, DFT-definisjonen,
  «finn $f$ først»-regelen, strukturen i de tre $k$-tilfellene,
  $r=\Delta t/h^2$ og $r\le\tfrac12$). Leveranse (2): oppslagsdrillen — for
  hver sjanger A–S: hvilken rad på det utdelte arket løser den, og hva som må
  hentes fra hodet/A5-arket. Pluss samlet sjangeroversikt A–S med
  løsningsoppskriftene fra 2.5, 3.4, 5.5 og 7.5 i kortform.

---

## 9. Prøvekapitler — MERK: strukturen VARIERER (ikke 4 per del)

Boka har **8 prøvekapitler**, ett per del fra 1 til 8. **Del 0 og Del 9 har
INGEN prøvekapittel** (Del 0 er eksamenskart; Del 9 er selv eksamenstrening med
formelark-verksted og tre komplette øvingseksamener).

**Del 1 har 2 prøver, ikke 4** — den er en ren repetisjonsdel på ett kapittel
og er *forutsetning* for de andre delene, ikke en egen eksamenssjanger. Dette
avviket er dokumentert i SKJELETT §2 (avvik 4) og §4, og skal IKKE «rettes opp»
til 4. Del 2–8 har 4 prøver hver. Til sammen **30 prøver**.

Id `tma4135-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver til del
<del>: <deltittel>» (deltittel fra `sectionNames`-lista i §4).

Struktur: `tip` (deklarerer antall prøver, minutter per prøve og «kan trygt
deles over flere kvelder — én prøve per økt» — aldri bare totalsum) + `text`
**Forkunnskaper** (kreves av porten) + `text` intro + én `collapsible` per
prøve (title «Prøve <del>.A» …, buttonText «Vis prøve <del>.A» …) med
nyskrevne oppgaver og full A-fasit + avkryssbar selvdiagnose-sjekkliste (☐)
etter hver fasit + SIST `collapsible` **Symbol- og formelliste** (kreves av
porten siden prøvene har LaTeX). Kap-referanser i fasitene som markdown-lenker.
**Ingen quiz og ingen begrepsbank i prøvefiler.**

Innhold og minutter per prøve er fastlagt i SKJELETT §4 og gjengis her som
byggekontrakt:

| Del | Antall | Prøver (tittel · minutter · sjanger) |
|---|---|---|
| 1 | **2** | 1.A Polar form, Eulers formel, komplekse røtter · 20 min<br>1.B Enhetsrøtter og komplekse partialbrøk (bro til Laplace/DFT) · 20 min |
| 2 | 4 | 2.A Ren ODE/IVP med derivasjonsregelen · 35 min · A<br>2.B Invers Laplace — delbrøk **og** kvadratkomplettering, reell vs. kompleks · 35 min · A<br>2.C Heaviside/Dirac med andreforskyvningsteoremet · 35 min · C<br>2.D Integro-differensiallikning med konvolusjon, full kjede som O1–O2 · 45 min · B+A |
| 3 | 4 | 3.A Reell rekke med symmetriutnyttelse + delvis integrasjon · 35 min · D<br>3.B Halvintervall-utvidelse, skisse og midling i sprang · 30 min · D<br>3.C Kompleks Fourier-rekke og broen til $a_n,b_n$ · 30 min · D<br>3.D Full Fourier-oppgave med tallrekkesum via innsetting · 45 min · D |
| 4 | 4 | 4.A Fourier-transform-utregning + integrallikning · 35 min · E<br>4.B Fourier-transform for en PDE på $\mathbb{R}$ · 35 min · F<br>4.C DFT — koeffisienter, reell-test, skifteegenskap · 30 min · R<br>4.D Blandet transformoppgave (E + F/R) · 40 min |
| 5 | 4 | 5.A Separasjon — alle tre $k$-tilfellene + egenverdier · 45 min · G<br>5.B Superposisjon + Fourier-matching + ikke-homogen reduksjon · 40 min · G<br>5.C d'Alembert + variabelskifte · 35 min · H<br>5.D 4D-signaturen — verifiser/klassifiser PDE + gradient-innslag · 45 min · H |
| 6 | 4 | 6.A Interpolasjon Lagrange **og** Newton + feilanslag · 35 min · I<br>6.B Numerisk integrasjon + presisjonsgrad + Gauss–Legendre · 35 min · J<br>6.C Fikspunktiterasjon — begge vilkår + a-priori-estimat · 35 min · K<br>6.D Newtons metode (entydig rot) + biseksjonstelling · 40 min · L |
| 7 | 4 | 7.A Ett skritt Euler/Heun/RK4 + bakover-Euler · 35 min · M<br>7.B Butcher-tabell fra kode + ordensverifikasjon rad for rad · 35 min · M<br>7.C Innfelt RK-par + steglengdekontroll · 35 min · N<br>7.D Stabilitet $R(z)$ skalar + system, maks $h$ · 40 min · O |
| 8 | 4 | 8.A Differansekvotienter + avkuttingsfeil via Taylor + avveining · 35 min · Q<br>8.B Eksplisitt varmeskjema, gitterpunkt for hånd + stabilitet $r\le\tfrac12$ · 40 min · P<br>8.C Crank–Nicolson tridiagonalt system · 35 min · P<br>8.D Randverdiproblem $A\mathbf U=\mathbf b$ + falsk rand + kodefeil-lokalisering · 45 min · P |

Statiske flervalg i prøve-collapsibles (der du bruker dem — TMA4135s eksamen
har **aldri** flervalg, så flervalg skal merkes som *treningsform*, ikke som
eksamensform): stokkede fasit-bokstaver, aldri «alle a», og prøve-tipen sier
hvor flervalget bor. Quiz-filene beholder `options[0]`-invarianten.

---

## 10. Quiz

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{question, options: [4 stk — options[0] ALLTID riktig], explanation}]`.

Kvote per kapittel = tabellen i §4 (AUTORITATIV — overskyt gjerne, aldri
underskrid). Distraktorene skal være **reelle feller** fra skjelettets «Typiske
feil»: første i stedet for andre forskyvningsteorem, glemt $-sy(0)$-ledd,
funksjonsverdi i stedet for midling $\tfrac12(f^++f^-)$, bare ett
fikspunktvilkår, orden én for høy fordi ordenssjekken stoppet for tidlig,
$r>\tfrac12$ uten kommentar, feil $1/N$-konvensjon i DFT, $x\pm t$ i stedet for
$x\pm ct$, feil eksponent $1/(p+1)$ i steglengdeformelen.

**INGEN LENGDE-TELL:** fasiten (`options[0]`) skal ikke være det lengste eller
mest detaljerte alternativet. Alle fire alternativer skal ha jevn lengde og
presisjon — «velg det lengste» skal treffe ~25 %. Sjekk med
`scripts/hoyskolebok/quiz-lengdesjekk.mjs`.

---

## 11. Del 0-pakken (kun kap. 0.1)

Rekkefølgen i kapitlet: **«Er dette boka di?»-boksen først** (§0), deretter
«Slik leser du denne boka», så eksamensformen og resten under.

- **«Er dette boka di?»-boks** — ALLER FØRST, se §0 for den bindende ordlyden
  (fire punkter: emne + dato + kode C · TMA4432 kode D · hvorfor 4C-studenten
  ikke bør bruke boka · hvordan hun sjekker emnekoden).
- **«Slik leser du denne boka»-orienteringsboks** (type `text`/`tip`, ALDRI
  `definition` — det ville endret flashcard-kvoten): karakterskalaen A–F med
  de prosentbaserte grensene, «C er en god og vanlig karakter», kompakt liste
  over sjangerkodene **A–S** (hver forklart i én linje), og at typiske feil har
  et samlet register (Feilkatalogen). Ramm inn tunge symboler leseren møter
  senere («du trenger ikke forstå $\mathcal{L}\{f\}$ eller $R(z)$ ennå — de
  forklares der de brukes»).
- **Eksamensformen:** 4 timers skriftlig skoleeksamen (09:00–13:00), kode C,
  6–10 oppgaver, **ingen flervalgsdel**, og den faste instruksen om at alle
  svar skal begrunnes med nok mellomregning.
- **Formelark-strategien** (§8), med kode C skrevet ut som begrunnelsen for at
  boka driller metodevalg framfor pugging.
- **«Lite tid?»-boks:** hurtigrute 3–5 dager + ukeplan bygget på de summerte
  `estimatedMinutes` (totalt 2 730 min). Anslagene er LESEtid — ×1,5 ved
  håndskriving.
- **Deltidsrute** (10–12 uker) og **«lese mye, skrive lite»-boks**.
- **Prosedyre-/sjangerkort på ÉN side** — selve kortet, ikke en lenkeliste.
- **Formel-minimum-side** (`collapsible`: «Formlene du må kunne aktivt — resten
  står på det utdelte arket»).
- **Kildenote for frekvens-empirien** — se §12.

## 12. Kildenote — sannferdige kildepåstander (UFRAVIKELIG)

Kildenoten i kap. 0.1, alle «N av M sett»-påstander og enhver omtale av
grunnlaget skal beskrive arkivet **nøyaktig slik det er**:

- Arkivet er **56 unike filer: 29 oppgavesett og 27 løsningsforslag**
  (`ARKIVKONTROLL.md`, målt 29. juli 2026). De ligger i to grupper: de nyere
  settene 2015–2024 under `NTNU/TMA4135/`, og 30 eldre filer 2003–2014 under
  søsteremnene TMA4123/TMA4125/TMA4130 med den gamle navnekonvensjonen
  (`tma4135_05h.pdf`) — Matematikk 4-serien har byttet emnekode flere ganger.
- **Frekvensgrunnlaget er de 13 velkarakteriserte settene H2015–Kont2024** som
  `EKSAMENSANALYSE.md` faktisk har gjennomgått. **Nevneren i alle frekvenstall
  er 13** — «12 av 13 sett», aldri «av 29» eller «av 56».
- **De eldre settene (2003–2014) inngår IKKE i frekvenstallene** — de er ikke
  gjennomgått i analysen, og pensum har drevet over tjue år. De skal likevel
  nevnes i kildenoten, fordi de finnes og fordi de gir dekning for én reell
  påstand: **oppgavetradisjonen i dette emnet er gammel og stabil**. Formuler
  det omtrent slik: «Arkivet rekker tilbake til 2003; frekvenstallene bygger på
  de 13 settene fra 2015 og framover, som er gjennomgått oppgave for oppgave,
  mens de eldre settene viser at oppgavetradisjonen har ligget fast lenge.»
  Ikke bruk de eldre settene som belegg for noe konkret tema eller tall.
- Arkivet inneholder **kun høst- og kontinuasjonseksamener** — emnet har aldri
  hatt våreksamen, så det finnes ingen vårsett å savne. Det kan sies rett ut.
- **Forbehold som SKAL med:** ingen 2021-sett i arkivet; `Matte4D-2016H-LF`,
  `-2016Kont`/`-2016Kont-LF` og `-2017Kont-LF` er skannede/håndskrevne og lot
  seg ikke tekstutvinne, så for disse settene bygger analysen på
  oppgavesettene alene; fra 2018 er eksamen felles for TMA4130 (4N) og TMA4135
  (4D), og kun én oppgave per sett har egne 4D-varianter; de nye sjangrene
  (DFT, innfelt RK-par, Gauss–Legendre) er konsentrert i 2022–2024 og har tynt
  belegg.
- **Bruk ALDRI ordet «sensorveiledning»** som kildetype. Arkivet består av
  oppgavesett og **løsningsforslag** — alle 27 er interne, faglærerskrevne og
  opphavsrettslig vernede fasiter (flere med intern poengfordeling). De er
  fasitkilde, aldri gjengitt. Metaregler om retting formuleres som
  «løsningsforslagene viser/krever …», aldri «sensor sier …» når belegget er et
  løsningsforslag. Der boka bruker ordet «sensorkrav», skal det være tydelig at
  kravet er lest ut av oppgaveinstruksen og fasitpraksisen.
- **Modellbesvarelser er nyskrevne** og skal alltid omtales slik — aldri som
  ekte studentbesvarelser.
- Frekvenstall = telte belegg: hver «N av M sett»-påstand skal stemme eksakt
  med skjelettets tall. Ikke oppfinn nye prosenter.

> **Merknad til byggelederen (ikke innhold i boka):** tre tall har vært i
> omløp — 86 (søk i filsti, ikke filnavn), 26 (bare mappa `NTNU/TMA4135/`) og
> det korrekte **56 unike filer**, deduplisert på filnavn på tvers av mapper i
> `ARKIVKONTROLL.md`. `EKSAMENSANALYSE.md` §8 sier fortsatt 26 og skal
> oppdateres med arkivkontrollen som kilde, slik at analysen og kildenoten ikke
> motsier hverandre. **Frekvensnevneren 13 endres uansett ikke** — den følger
> hva analysen har gjennomgått, ikke hvor mange filer som finnes. Kildenoten
> følger analysen; analysen følger arkivet.

---

## 13. FAGSPESIFIKK STIL — TMA4135

### 13.1 Notasjonsstandard (følges slavisk — grep-sjekkes i verifisering)

- **Laplace:** $\mathcal{L}$ (aldri «L» eller «Lap»), $F(s)=\mathcal{L}\{f\}$,
  $Y(s)$ for den transformerte løsningen. Derivasjonsregelen
  $\mathcal{L}\{y'\}=sY-y(0)$, $\mathcal{L}\{y''\}=s^2Y-sy(0)-y'(0)$.
  Heaviside $u(t-a)$, Dirac $\delta(t-a)$. Konvolusjon
  $(g*y)(t)=\int_0^t g(\tau)y(t-\tau)\,d\tau$.
- **Fourier:** $f̂(\omega)$ for transformen; $a_n$, $b_n$ i den reelle rekka og
  $c_n$ i den komplekse ($\sum c_n e^{inx}$); halvintervall $[0,L]$.
  Transformkonvensjonen er arkets:
  $f̂(\omega)=\tfrac1{\sqrt{2\pi}}\int f(x)e^{-i\omega x}dx$ — hold
  $\sqrt{2\pi}$-faktoren konsistent i HELE boka.
- **PDE:** separasjonsansatsen $u(x,t)=F(x)G(t)$, separasjonskonstant $k$ (alle
  tre tilfellene $k>0$, $k=0$, $k<0$ behandles ALLTID eksplisitt), bølgefart
  $c$, d'Alemberts formel.
- **Numerikk:** Butcher-tabell
  $\begin{array}{c|c} c & A \\ \hline & b^{\!\top}\end{array}$;
  stabilitetsfunksjon $R(z)$ med $z=\lambda h$; gitterverdier
  $U_i^n \approx u(x_i,t_n)$.
- **NOTASJONSKLASH $k$ (må håndteres eksplisitt):** formelarket kaller
  **tidssteget** $k$ og skriver $r=k/h^2$, men $k$ er også
  separasjonskonstanten i Del 5. **I Del 8 skriver boka tidssteget som
  $\Delta t$ og stabilitetstallet som $r=\Delta t/h^2$** (evt. $r=c^2\Delta
  t/h^2$), med en synlig fotnote/`tip` i kap. 8.2 om at *arket kaller
  tidssteget $k$* — slik at studenten kjenner igjen arket under eksamen.
  Separasjonskonstanten $k$ brukes KUN i Del 5.
- **Svarform:** eksakt uttrykk der det er mulig, ellers tallverdi med nok
  siffer. Engelsk fagterm i parentes ved første forekomst der den er
  innarbeidet («steglengdekontroll (step-size control)»).
- **LaTeX:** alle uttrykk i `$...$`/`$$...$$` med `\\` i JSON. INGEN
  unicode-mattesymboler i formeltekst («ω», «Σ», «≤», «√», «∫», «∞», «π», «≈»,
  «⁻¹», unicode-brøker) — bruk `\\omega`, `\\sum`, `\\le`, `\\sqrt`, `\\int`,
  `\\infty`, `\\pi`, `\\approx`. Løpende brødtekst kan bruke «≈» sparsomt, men
  i formler: LaTeX.

### 13.2 Sensorreglene som styrer ALLE modellbesvarelser

Den faste instruksen på hvert sett er at alle svar skal begrunnes med nok
mellomregning til at tenkemåten klart framgår. Bar fasit gir ikke full
uttelling. Fire regler gjelder i hver eneste `example`-`solution`, hver
`exercise`-`solution` og hver prøvefasit:

1. **Bær metode-/teoremnavnet eksplisitt** — «etter andreforskyvningsteoremet
   …», «ved konvolusjonsteoremet …», «fikspunktteoremet gir …», «etter
   mellomverdisetningen …», «d'Alemberts formel gir …». Løsningsforslagene
   skriver dem ut; det skal boka også.
2. **Vis flere gyldige metoder der de finnes, og navngi dem.** Minst to veier
   der sjangeren har to: delbrøk vs. kvadratkomplettering; reell vs. kompleks
   delbrøk; cover-up vs. lineært system for delbrøk-koeffisienter; Lagrange vs.
   Newtons dividerte differanser. Si hvilken som er raskest, men aldri at den
   andre er feil.
3. **Marker tabelloppslag:** «fra tabellen på formelarket: $\mathcal{L}\{\sin
   \omega t\}=\omega/(s^2+\omega^2)$». Oppslaget er en handling som skal synes.
4. **Kjedet føring, ikke fasit-avhengighet:** delpunktene er ofte koblet («bruk
   uttrykket fra b) i c)»), og feilforplantning tolereres — regner du riktig
   videre med en feil mellomverdi, gir det fortsatt uttelling. Boka skal lære
   kjedet føring og si dette til leseren i Del 0.

**Karakterskillene** (gjengis i Del 0 og brukes til å kalibrere
oppgavevanskeligheten): *bestått* = de mekaniske delpunktene (transformer
ODE-en, sett opp koeffisientintegralet, sett $u=FG$, ett Euler-skritt, sett opp
skjemaet); *midtsjikt* = delbrøk + kvadratkomplettering, alle tre
$k$-tilfellene, presisjonsgrad, a-priori-estimat; *toppsjikt* = **begge**
fikspunktvilkårene, rad-for-rad ordensverifikasjon, korrekt rand- og
stabilitetsbehandling, andreforskyvning riktig brukt, og å se
delpunkt-koblingene.

### 13.3 Matematisk sannhetskontroll (UFRAVIKELIG — regnefagets parametersjekk)

ALLE tallsvar, fasiter, koeffisienter, egenverdier, iterasjonstall og
stabilitetsgrenser **etterregnes numerisk med `python3` FØR de skrives**
(sympy/numpy). Det gjelder særlig: delbrøk-koeffisienter, inverse
Laplace-transformer (verifiser ved å transformere tilbake),
Fourier-koeffisienter (verifiser integralet numerisk), tallrekkesummer
(sammenlign delsum med påstått grense), egenverdier/egenfunksjoner (sett inn i
PDE-en og i randbetingelsene), interpolasjonspolynomer (sjekk at $p(x_k)=f_k$),
presisjonsgrader (test faktisk på $x^n$), Newton-/fikspunkt-iterater,
biseksjons- og a-priori-tellinger (rund **oppover**), RK-skritt,
ordensbetingelser, feilestimater og steglengder, differanseskjema-verdier og
$r$-grenser.

Fortegns- og «alltid»-påstander verifiseres i hele det relevante
parameterrommet før de påstås. Er en påstand bare betinget sann, skal
betingelsen skrives ut. En «Vis at …» som ikke holder ubetinget, skal ikke
skrives.

### 13.4 Figurkrav (SVG, ikke bare ord)

Ber en oppgave, et eksempel eller en prøvetekst om figur — og i TMA4135 gjør
Fourier-sjangeren det ofte («skissér den periodiske utvidelsen over flere
perioder», «tegn grafen på $[-3,3]$») — SKAL løsningen vise en faktisk
`image`-blokk med SVG. «*Figur i ord:*» er komplement, aldri erstatning, også
inne i `collapsible`-er.

Figurene som SKAL rendres: odde og like periodisk utvidelse med sprang og
markert midlingsverdi (3.2, 3.4, prøve 3.B/3.D), firkantpuls/sagtann (3.1),
Heaviside-trappelast $f(t)$ før transform (2.3), to bølger som løper hver sin
vei i d'Alembert (5.3), gitteret med indre punkter, randpunkter og falsk node
(8.2, 8.4), stabilitetsintervallet på den reelle aksen for $R(z)$ (7.4).

Filer: `public/images/textbook/tma4135/<navn>.svg`; akser `#6b7280`, norsk
tekst, transparent bakgrunn, viewBox ca. 480×360, valider XML. Meld fra i
sluttrapporten hvilke SVG-filer du la igjen — byggeleder kjører
`npx tsx scripts/upload-media-storage.ts` i fase 5, ellers blir de 404 i prod.

### 13.5 Python-innslag

TMA4135 har en egen kodesjanger: **les en Butcher-tabell ut av Python-kode**
(7.2) og **lokaliser den innebygde feilen i et kort differanseskjema** (8.4,
prøve 8.D, øvingseksamen 2 og 3). Reglene:

- Koden skrives i ```` ```python ````-fenced blokker i `content`-markdown, er
  komplett og kort (10–25 linjer), og bruker numpy-idiomatisk stil.
- **All kode kjøres faktisk med `python3` før innsjekk** — også den med den
  innebygde feilen (du må vite nøyaktig hvilket gale svar den gir).
- Feilen som skal lokaliseres er ÉN og realistisk: feil matriseoppføring, feil
  randledd, en løkkegrense av ved én, eller en randbetingelse som aldri blir
  satt. Fasiten peker på linja OG forklarer hvorfor symptomet (brutt
  randbetingelse) følger av den.
- Python er verktøy for lesing og feilsøking — ikke et programmeringspensum.
  Ingen oppgave krever at studenten skriver et fullt program.

### 13.6 Nye sjangre med tynt belegg (skal merkes)

Kap. **4.3 (DFT)**, **7.3 (innfelt RK-par)** og **6.2 (Gauss–Legendre)** dekker
sjangre som først dukker opp i 2022–2024-settene og som er konsentrert i
kontinuasjonssettene. Hvert av dem skal ha en `tip` som ærlig sier: dette er
nytt, belegget i arkivet er tynt (2–3 av 13 sett), men det er fast i de siste
settene og skal derfor beherskes. Samme forbehold gjentas i kap. 9.4.
Motsatt vei: **sjanger S** (LU/Doolittle, Jacobi/Gauss–Seidel) og
**sekantmetoden** er utdøende — de står fortsatt på formelarket og holdes som
beredskap på «kjenne»-nivå, uten egen kapittelkjede.

### 13.7 Forbudt-termer (grep = 0; håndheves i port + verifisering)

- `Prioritet: perfekt` (skriv «høyeste prioritet»)
- `en A-besvarelse ville` / `ville ha drøftet` / `ville ha utledet` (meta-fasit
  — skriv utledningen ut)
- `sensorveiledning` (arkivet har oppgavesett + løsningsforslag)
- `](/bok/` (det fjernede lenkeprefikset)
- `r=k/h^2` / `r = k/h^2` som bokas EGEN notasjon i Del 8 (tillatt kun i den
  eksplisitte fotnoten om hva arket kaller tidssteget)
- unicode `ω`, `Σ`, `√`, `π`, `∫`, `∞`, `≤`, `≥` inne i `$...$`
- «flervalg» omtalt som eksamensform (eksamen har aldri flervalgsdel)
- `utfas` (fanger «utfaset»/«utfasing»), `utgår`, `siste kull`, `nedlagt` brukt
  om TMA4135 — emnet går som normalt, se §0
- enhver formulering som profilerer boka mot TMA4431/4432/4420/4430 (§0). Den
  ENE tillatte omtalen av TMA4432 er «Er dette boka di?»-boksen i kap. 0.1.

---

## 14. Opphavsrett (ufravikelig)

ALLE oppgaver, funksjoner, tall og kontekster er **NYSKREVNE**.
Eksamenssjangrene er malen, aldri originaloppgavene. Skjelettets
mønstereksempler er selv omskrivninger og skal **varieres videre** — ikke
kopieres ordrett inn. Ingen formuleringer fra reelle sett eller
løsningsforslag. Matematiske uttrykk, metodenavn og teoremnavn er standard
fagnotasjon og fritt brukbare. Referanser forfatteren er usikker på, merkes
`(verifiser)` og løses i verifikatorfasen.

Innholdet fremstiller seg ALDRI som offisielt eller NTNU-tilknyttet og lover
aldri eksamensutfall (uavhengighets- og rådgivningsdeklarasjonene vises
automatisk av plattformen; ved wiring registreres boka på institusjon `ntnu`).

---

## 15. Kvalitetskrav før ferdigmelding (per agent)

1. `python3 json.load` på hver fil (helst generert via `json.dump`).
2. **Kvotetelling** mot tabellen i §4: toppnivå `definition`-blokker med
   `title` == flashcard-tallet; antall quiz-spørsmål == quiz-tallet.
3. **Tittel/description/minutter ORDRETT fra SKJELETT.md** — diff mot
   skjelettet, ikke mot prompten (§4).
4. Forbudt-termer-grep = 0 (§13.7), inkludert `](/bok/`.
5. Alle kap-/kryssbok-lenker peker på filer som finnes i
   `src/lib/data/chapters/`, og har formen `/tma4135/tma4135-X-Y`.
6. **Læringsløkke:** `content[]` veksler teori→eksempel→oppgave med
   `exercise`-blokker inline (ikke all teori topp / alle oppgaver bunn).
7. **Forkunnskapsdekning:** hver `exercise` gjennomgått — ingen usett
   formel/teknikk/begrep.
8. **Nybegynner-inngang:** sjangerbokstavene A–S og all karaktersjargong
   glosset ved første bruk per kapittel; ingen kald kode i `competenceGoals`
   eller første tekstboks; Del 0 har «Slik leser du denne boka»-boksen (type
   `text`/`tip`, ALDRI `definition`).
9. **Målgruppeboksen (kap. 0.1):** «Er dette boka di?» er FØRSTE blokk i
   `content[]`, er `tip`/`text` (aldri `warning`/`definition`), og har alle
   fire punktene fra §0 — TMA4135 + 04.01.2027 + kode C · TMA4432 kode D ·
   hvorfor 4C-studenten ikke bør bruke boka · sjekk emnekoden i studieplanen
   og eksamensoppmeldingen. Grep for `utfas`/`utgår`/`siste kull` = 0.
10. **Formelark-markeringen** finnes i kapitlet: grep etter både «står på det
    utdelte formelarket» og «må kunnes» gir treff, og Symbol- og formellisten
    merker hver formel. I kap. 0.1 og 9.1 er kode C skrevet ut som
    begrunnelsen for formelark-strategien.
11. **Notasjonsklash $k$:** i Del 8 er tidssteget $\Delta t$ og
    stabilitetstallet $r=\Delta t/h^2$, med fotnoten om arkets $k$;
    separasjonskonstanten $k$ opptrer bare i Del 5.
12. **Teorem-/metodenavn båret eksplisitt** i alle relevante fasiter
    (andreforskyvnings-, konvolusjons-, fikspunkt-, mellomverdisetningen,
    d'Alemberts formel).
13. **Flere metoder vist** der sjangeren har dem (2.2, 6.1, og i drillene).
14. **Toppsjikt-markørene dekket** med egen `warning`/drillmål: begge
    fikspunktvilkårene (6.3), alle tre $k$-tilfellene (5.1/5.5), rad-for-rad
    ordensverifikasjon (7.2), rand-/stabilitetsbehandling (7.4/8.2/8.4),
    andreforskyvning (2.3).
15. **Nye sjangre merket** med belegg-forbehold (4.3, 6.2, 7.3, 9.4).
16. Symbol- og formelliste SIST i HVERT kapittel (også drill, prøve og
    øvingseksamen); Forkunnskaper-blokk finnes; Typiske feil-`warning` finnes
    i teori- og drillkapitler.
17. Ingen tom `collapsible` (feltet heter `content` og skal ha blokker).
18. **Prøvestrukturen stemmer:** Del 1 har 2 prøver, Del 2–8 har 4 hver, Del 0
    og Del 9 har ingen prøvefil; tip-en deklarerer «N prøver à ~X min» +
    deling over flere kvelder; selvdiagnose-☐ etter hver fasit.
19. **Flervalg** (der brukt i prøver): stokkede fasit-bokstaver, aldri «alle
    a», og merket som treningsform — eksamen har ingen flervalgsdel.
20. **Fasitmønster** sjekket i alle ensartede fasitlister; distraktorer gjengir
    ikke bokas egne nyanser som «galt».
21. **Hints** utfylt på alle `exercise` (unntatt den merkede kalde banken i
    9.1); første hint røper aldri konklusjonen.
22. **Frekvenstall** = skjelettets telte belegg med nevner 13 (aldri «av 29»
    eller «av 56»); kildenoten følger §12 (56 unike filer, 29 oppgavesett + 27
    løsningsforslag, eldre sett 2003–2014 nevnt men utenfor frekvensgrunnlaget,
    ingen «sensorveiledning», forbeholdene med).
23. **Alle tallsvar numerisk etterregnet** med `python3` (§13.3); all
    Python-kode faktisk kjørt (§13.5).
24. **Figurkrav:** hver «skissér/tegn»-forespørsel i oppgave, eksempel eller
    prøve besvart med en faktisk SVG i `public/images/textbook/tma4135/` —
    meld filnavnene i sluttrapporten.
25. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag og
    pausepunkt-markører; øvingseksamenene har tidsbudsjett per oppgave.

Rapporter kort ved ferdigmelding: filer skrevet, kvotestatus per fil,
valideringsstatus, ev. SVG lagt til, ev. usikre referanser merket
`(verifiser)`.

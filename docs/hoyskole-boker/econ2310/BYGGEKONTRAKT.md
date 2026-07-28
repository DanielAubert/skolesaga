# Byggekontrakt: ECON2310 Makroøkonomi 2 (UiO) — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `econ2310`. Faglig innhold
styres av `SKJELETT.md` (per-kapittel-DNA + identitetsseksjon §1) — les ditt
kapittels avsnitt der nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne
kontrakten definerer format og krav. Arketype: **DNA-regnefag**
(`DNA-regnefag.md`), undertype **symbolsk-grafisk modellfag uten tallregning**
(«forklar relasjonen», figur + mekanisme og eksplisitt fortegnshåndtering er
kjernehåndverket).

**Forgjengerbok:** econ2310 bygger EKSPLISITT videre på den ferdige og live
econ1310-boka. Forkunnskaper som dekkes der skal IKKE re-undervises — de lenkes
(se «Kryssbok-lenker til econ1310» under).

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tatt inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i
  Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov.
- **Unntak:** prøvekapitlene (`econ2310-<del>-prove`) og øvingseksamenene
  (kap. 7.2–7.4) følger sin egen arketype — komplett oppgavesett først,
  løsninger i collapsibles.
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `econ2310-4-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (fase 5,
`scripts/hoyskolebok/wire-bok.py`). Generer JSON via python `json.dump`
(garantert gyldig escaping; husk doble backslash i LaTeX og escaping av `"` i
norske sitattegn).

Boka består av **35 filer**: 29 kapitler (1 eksamenskart + 24 tema + 4
eksamenstrening) + 6 prøvekapitler (`econ2310-1-prove` … `econ2310-6-prove`).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "econ2310-4-1",
  "courseId": "econ2310",
  "chapterNumber": "4.1",
  "title": "…(fra skjelettet, ordrett)…",
  "description": "…(setningen fra skjelettet)…",
  "estimatedMinutes": 70,
  "competenceGoals": ["kunne forklare alle tre rentekanalene i IS-relasjonen", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `4.1`;
prøvekapitler `<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer avledet
av innholdskontrakten — **ingen kald sjangerkode eller karakterbokstav her**.
`exercises` er alltid tom liste (oppgaver ligger som `exercise`-blokker inline i
`content`).

## Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title). Åpne med forklaringen i ORD; formelen kommer
  etter — aldri en ligning som første linje.
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på resultat", "content": "…" }`
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  (solution = A-besvarelse med figur-i-ord der sensor forventer figur).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo`/`allowsUpload`/`allowsCanvasDrawing`/`answer`. Ikke bruk
  `subTasks`-feltet (deloppgaver skrives inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/econ2310/<navn>.svg", "alt": "…", "caption": "…" }`
  — se «Figurspråket» under.
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — Symbol- og formelliste, sekundærstoff, prøve-collapsibles, repetisjon.
  ALDRI tom: feltnavnet er `content` og skal ha blokker.

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `econ2310-4-1-def-2`,
`econ2310-4-1-ex-5`. Unike innen kapitlet.

## Obligatorisk kapittelstruktur (teorikapitler — DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:

1. `tip` **Eksamensvinkel** — frekvens, vekt og sjangre, med tallene fra
   skjelettets Eksamensbelegg-felt (og ingen andre tall).
2. `text` **Forkunnskaper** — kapitler i boka + kryssbok-lenker til econ1310
   (`[tittel](/econ1310/<chapterId>)`), KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen. I tunge,
   sene kapitler (Del 4–7) skal blokken være en **«Sist du var her»**-blokk som
   VISER de 2–3 nøkkelrelasjonene ferdig oppfrisket, ikke bare lenker.

Deretter DNA-regnefag-løpet i læringsløkker: `text` hverdagsanker/motivasjon →
`definition`/`theorem` kjernebegrep (flashcard-kilden — toppnivå med title!) →
`text` utledning med «Intuisjon:»-linje etter hvert steg (kun der skjelettet sier
«MÅ KUNNE UTLEDES AKTIVT») → `example` ×2–4 med stigende nivå (siste på
eksamensnivå, med figur-i-ord der sensor forventer figur) → `warning` **Typiske
feil** (fra feilkatalogen #1–#12 under) → 6–12 `exercise` inline, stigende
(lett → middels → vanskelig; de vanskelige = eksamenskloner av kapittelets
sjangre).

Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol- og
formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk —
alt her forklares underveis i kapitlet.», deretter markdown-tabell
`| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX +
tolkning. ALLE symboler/formler brukt i delkapitlet — per delkapittel, ikke arv.
Dette faget har symbolkollisjoner (se «Symbolkollisjoner» under) — listen skal
si eksplisitt hvilken betydning som gjelder i nettopp dette kapitlet.

Og alltid til slutt: begrepsbank-`definition`-blokker opp til flashcard-kvoten
(hver stor begrepsbank åpner med standard-notisen «flashcard-/repetisjonsstoff —
hopp trygt over ved førstegangslesing; tidsanslaget gjelder kjernestoffet») +
`collapsible` repetisjon (teorikapitler).

**Drillkapitlene (1.7, 4.6, 6.4, 7.1)** følger DNA-varianten: `tip`
Eksamensvinkel → `text` **Løsningsoppskrift** (algoritmen fra skjelettets
innholdskontrakt, steg for steg) → `example` gjennomregnet eksamenscase med
sensor-margnotater (hva som gir uttelling ved hvert steg) → 8–15 `exercise` som
roterer sjangrene, alle på eksamensnivå med nyskrevne kontekster.

**Øvingseksamenene (7.2–7.4)** er komplette 3-timers sett (`estimatedMinutes`
180): nyskrevet oppgavesett i eksamensform → `collapsible` A-besvarelse per
oppgave/delspørsmål + `tip` med vekting og tidsbudsjett (7.2: 135 min / 45 min
etter 75/25-vektingen; 7.3 og 7.4: eget budsjett per del). Lange
modellbesvarelser har «— naturlig pausepunkt —»-markører.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket (gjelder
  særlig kap. 6.3 og FDI-nyansen i kap. 1.1).
- **Korte avsnitt** (2–4 setninger), aktiv «du»-form, konkret norsk knagg
  (kronekursen, strømprisen ute, statsbudsjettet) før formalismen — presisjon
  vinner ved tvil. Godt, flytende norsk; ALDRI telegramstil.
- **Meningsfulle oppgaver**: hver oppgave synlig eksamensforankret
  («(Eksamenssjanger G — skiftanalyse, 6 av 13 sett.)») eller åpenbart relevant.
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution`
  HVER på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende
  tekst; ikke bruk `subTasks`-feltet. Listemerking med små bokstaver.
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER sjangerkode (A–L),
  feilkode (#1–#12), karakterbokstav og all karaktersjargong («C-nivå»,
  «A-differensiator») + insider-term (komparativ statikk, redusert form,
  fortegnsubestemthet, endogen/eksogen, steady state, panser-åpning) forklares i
  klarspråk ved FØRSTE bruk. Ingen kald kode i `competenceGoals` eller i aller
  første tekstboks. Kap. 0.1 har en **«Slik leser du denne boka»-orienteringsboks
  (type `text`/`tip`, ALDRI `definition`)** med karakterskalaen (A–F,
  H2018-signalene), kompakt liste over sjangerkodene A–L og feilkodene #1–#12,
  og setningen om at tunge symboler forklares der de brukes.
- **Del 0-pakken (kap. 0.1):** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan
  summert fra `estimatedMinutes`, med presiseringen at anslagene er LESEtid,
  ×1,5 ved håndskriving) + **kildenote** (se «Sannferdig kildenote» under) +
  sjangerkortet A–L på ÉN side (kortet selv, ikke lenkeliste) + deltidsrute
  (10–12 uker) + «lese mye, skrive lite»-boks + **formel-minimum-collapsible**
  («Formlene du må kunne utenat — og resten kan du slå opp»): Solows
  bevegelsesligning (med og uten $g$), golden rule-betingelsen, IS/RR/PK i
  bokstandard, UIP og hovedkursens fem relasjoner inkl. den supplerte
  π-definisjonen — hver med én ordlinje.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/econ2310/econ2310-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  grep «Prioritet: perfekt» skal gi 0 treff. NB: «PERFEKT» i skjelettets
  deltitler er en *prioritetsklasse* (perfekt/kunne/kjenne = nivå 1/2/3), IKKE en
  oppfordring om plettfri besvarelse — ramm den inn som «må sitte / høyeste
  prioritet». Faget har eksplisitt sensorstøtte for dette: god uttelling er mulig
  med hull så lenge helheten henger sammen (metaregel 6). Modellbesvarelser ærlig
  merket (en «C-besvarelse» ER C) + minst én autentisk B-/midtnivå-besvarelse.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty lett, ren gjengivelse) tidlig i teorikapitler der
  første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer åpner med
  hverdagsanker; eksempler er verdens-caser (rentemøte, kronekurs, lønnsoppgjør,
  fattige lands vekst), aldri «en medstudent skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum deltider
  forklares. Øvingseksamenene deklarerer tidsbudsjettet per oppgave.
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  relasjonen/første grep, ALDRI konklusjonen); boka har noen «(krevende)»-merkede
  oppgaver + én merket **kald bank** (8–10 oppgaver UTEN hint, fasit =
  momentliste) i eksamenstreningsdelen (legges i kap. 7.1).
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer — aldri «alle
  a», aldri «alle riktig»/«alle felle». Særlig relevant her: fortegnsdrillene
  (prøve 3.B) skal blande styrking og svekkelse, og ubestemte fortegn skal
  forekomme både der og i skiftanalyse-oppgavene.
- **Distraktorer straffer aldri grundig lesing:** en distraktor gjengir ALDRI
  bokas egne presiseringer (f.eks. «effekten er ubestemt») som «galt» svar; nære
  distraktorer forklares eksplisitt i fasit-kommentaren.
- **Meta-fasit forbudt:** «en A-besvarelse ville ha drøftet …» erstattes av
  faktisk utskrevet drøftelse. Minst én modellbesvarelse lander SKARPT.
- **Signalbokser ETTER oppgaven** (varsel om hva en drilloppgave tester).
- **Frekvenstall = telte belegg:** «N av 13 sett» skal stemme EKSAKT med
  belegg-listen i skjelettets Eksamensbelegg-felt. Tell før du skriver.
- **Øktmerking:** kapitler med `estimatedMinutes` > 45 (1.1–1.7, 3.1, 4.1–4.6,
  5.1–5.3, 6.1, 6.4, 7.1–7.4) har tidsanslag per løkke («Løkke 2 — … (~20 min)»)
  eller «— naturlig pausepunkt —»-markører. Feilkoder glosses ved første bruk
  PER KAPITTEL.
- **Juridisk:** innholdet fremstiller seg ALDRI som offisielt eller
  UiO-tilknyttet og lover aldri eksamensutfall.

### Sannferdig kildenote (UFRAVIKELIG — produkteier)

Kildenoten i Del 0 og all omtale av grunnlaget nevner KUN kildetyper som faktisk
finnes i fagets arkiv, jf. `EKSAMENSANALYSE.md` §8:

> 8 ordinære eksamenssett (H2018–H2025), 8 sensorveiledninger, 5 utsatt-sett
> (H2021u–H2025u) og 4 utsatt-sensorveiledninger — 25 dokumenter, 13 sett.
> Sensorveiledning for H2022-utsatt finnes ikke i arkivet. Emnet har kun
> høsteksamen, så datagrunnlaget er mindre enn i ECON1310 og frekvensprosentene
> har tilsvarende større usikkerhet — men rotasjonsmønsteret og sensorkravene er
> stabile gjennom hele perioden.

Dette faget **har** sensorveiledninger, så de kan nevnes. Modellbesvarelser
omtales som **nyskrevne** — aldri som ekte studentbesvarelser.

## Fagspesifikk stil (ufravikelig for ECON2310 — fra skjelettets §1)

### Eksamensform og hjelpemidler (gjengis korrekt overalt)

3 timers skriftlig skoleeksamen i Inspera, karakter **A–F**, **eneste
hjelpemiddel er ordbok**; svar godtas på norsk, svensk, dansk eller engelsk.
Settene tillater at greske bokstaver erstattes med latinske og at fotskrifter
droppes (Inspera-tilpasning) — nevnes i Del 0 og i øvingseksamenene. Formen er
**få, store oppgaver** (5–12 delspørsmål totalt), ALDRI kortsvarsbatteri;
vekting oppgis normalt ikke (unntak H2025: 75/25). Relasjonssettene oppgis
uforklart med formuleringen at de «kan komme til nytte».

### Føringsstandard (bokas eget håndverkskrav — gjelder alle løsninger)

1. **«Forklar relasjonen» først (sensorens metaregel nr. 1).** Hvert
   modellkapittel (1.1, 2.1, 3.1, 4.1, 4.2, 4.3, 5.1) skal ha en eksplisitt
   «slik forklarer du relasjonen på eksamen»-mal: **2–5 setninger per relasjon**
   som (i) definerer symbolene, (ii) gir den økonomiske logikken, (iii) angir
   fortegn/mekanisme og (iv) sier hva som er eksogent. Å regne på uforklarte
   ligninger gir ikke uttelling.
2. **Suppleringsrefleksen.** Der eksamen utelater en relasjon (KPI-definisjonen
   $\pi = \alpha p_i + (1-\alpha)p_s$ i hovedkursmodellen, UIP-formen inne i IS,
   Solow-oppsettet fra verbale egenskaper) skal løsningen legge den til selv og
   si at den gjør det.
3. **Åpne panseret.** Redusert form gir bare $Y$ og $i$; en fullgod besvarelse
   sporer videre til konsum, investeringer, eksport/import, valutakurs, ledighet
   og inflasjon (KPI *og* norske varers prisvekst).
4. **Flagg det ubestemte.** Ubestemte fortegn signeres ALDRI — de flagges med
   hva de avhenger av. Faste tilfeller: $Y$ ved kronesvekkelse (avhenger av
   sentralbankens valutakursrespons), $C$ og $I$ ved $\Delta G > 0$
   (inntektseffekt mot renteeffekt), langsiktig konsum per arbeider ved
   $s$-økning (golden rule-posisjonen), prisveksten på norske varer ved
   kurssjokk.
5. **Kort/lang sikt-skille** i all komparativ statikk, med figur OG mekanisme i
   ord.
6. **Presiser forutsetningene og vær konsekvent** — der flere spor er mulige
   (med eller uten produktivitetsvekst), sies antakelsen eksplisitt og holdes
   gjennom hele analysen.
7. **Disponering** i drøftingsoppgavene: si hvilken modell som brukes til hva,
   bruk mellomtitler, og avslutt med å svare på spørsmålet — ikke med sammendrag.

Sensorens seks metaregler (gjengis i kap. 0.1 og brukes som fasit-standard):
forklar relasjonene · ikke mist spørsmålet av syne · åpne panseret på redusert
form · presiser forutsetningene og vær konsekvent · figurer er førsteklasses
svar · besvarelsen må ikke være plettfri.

### Modell- og notasjonsstandard (KRITISK KONTRAKTSLINJE — ufravikelig)

**Solow (Weil-standarden):** sparerate $s$, kapitalslit $\delta$,
befolkningsvekst $n$, produktivitetsvekst $g$. $Y = F(K,L)$ med konstant
skalaavkastning → $y = f(k)$, $y = Y/L$, $k = K/L$, $f'(k) > 0$, $f''(k) < 0$.
Bevegelsesligning $\Delta k = s f(k) - (n+\delta)k$; med produktivitetsvekst
$\Delta k = s f(k) - (n+g+\delta)k$ ($k$ da per effektivitetsenhet). Steady
state $s f(k^*) = (n+\delta)k^*$; konsum per arbeider $(1-s)f(k)$; golden rule
$f'(k^*) = n+\delta$. Eldre sett bruker $\gamma$ for sparerate og nyere $d$ for
kapitalslit — studenten **trenes i å gjenkjenne** variantene, men boka skriver
$s$ og $\delta$.

**Åpen IS-RR-PK (bokstandard = H2024/H2025-formen):** koeffisientene som
$g$-parametre ($g_Y, g_E, g_\pi$), utenlandsk rente $i^F$ og forventet
langsiktskurs $E^e$ eksplisitt med.
- UIP: $E = E^e + \kappa(i^F - i)$ (høyere $E$ = svakere krone — 1310-konvensjonen).
- RR: $i = Z^i + g_Y (Y-Y^n)/Y^n + g_E Z^E + g_\pi Z^\pi$.
- PK: $\pi = Z^\pi + \beta (Y-Y^n)/Y^n$.
- «Under panseret»-formen (H2022) brukes til tolkning av IS:
  $Y = m Z^D + m a_2 Z^E - m a_3 Z^\pi - m(c_2 + b_2 + a_2\kappa)\,i$ — de tre
  rentekanalene er $c_2$ (konsum), $b_2$ (investering) og $a_2\kappa$
  (valutakurs/eksport), og ALLE TRE skal alltid med.
- Endogene: $Y, i, \pi$. Eksogene: $Z^D, Z^E, Z^\pi, Z^i, Y^n$. Alle parametre
  positive.
- Gjenkjenningsvarianter (kun i merkede gjenkjenningsøvelser): H2022-formens
  $\gamma$-koeffisienter og H2023-formen med $\beta$ direkte i multiplikatoren.
  Settene sier selv at egen notasjon er tillatt.
- Merknad som skal med i kap. 4.1: Holdens lærebok har en parameter $m_i$ som i
  eksamensformene er satt lik 1.

**Hovedkursmodellen (vekstrateform, små bokstaver = vekstrater):**
$p_s = w - z_s$, $w = p_k + z_k + k$, $p_k = q_k + v$, $p_i = q_i + v$, og den
**supplerte** KPI-definisjonen $\pi = \alpha p_i + (1-\alpha)p_s$ ($\alpha$ =
importandel). Kjerneutledningene:
$$\pi = \alpha q_i + (1-\alpha)q_k + v + (1-\alpha)(z_k + k - z_s)$$
$$w - \pi = \alpha(q_k - q_i) + \alpha z_k + (1-\alpha)z_s + \alpha k$$
Spesialtilfellet $q_k = q_i = \pi^*$, $z_k = z_s = z$: $\pi = \pi^* + v +
(1-\alpha)k$ og $w - \pi = z + \alpha k$. H2024 kaller KPI-veksten $\pi^C$ —
nevnes som variant.

**Keynes-krysset (forutsatt kjent fra 1310):** $Y = C + I_0$, $C = c_0 + c_1 Y$
→ $Y = (c_0+I_0)/(1-c_1)$; H2018-varianten $\gamma Y$ mot $I = I_0 + \alpha Y$ i
$(Y, I)$-diagram med likevekt $Y = I_0/(\gamma - \alpha)$.

LaTeX i `$...$` / `$$...$$`, dobbel backslash i JSON (`\\Delta`, `\\alpha`);
ingen unicode-brøker.

### Symbolkollisjoner (obligatorisk varsling — DNA «Enhets- og konvensjonsvalg»)

Fire symboler har ulik betydning i ulike deler av boka. Hvert sted en betydning
tas i bruk, skal Symbol- og formellisten si hvilken som gjelder, og ved skifte
skal en `warning`-blokk varsle («NB: to betydninger i omløp — sjekk hva oppgaven
bruker»):

| Symbol | Betydning 1 | Betydning 2 |
|---|---|---|
| $k$ | kapital per arbeider / per effektivitetsenhet (Del 1) | ekstraordinær lønnsvekst (Del 5) |
| $g$ | produktivitetsvekst (kap. 1.4) | RR-koeffisientene $g_Y, g_E, g_\pi$ (Del 4) |
| $\alpha$ | importandel i KPI (kap. 3.2, Del 5) | investeringskoeffisient i H2018-Keynes-varianten (kap. 2.1) |
| $\gamma$ | sparerate i eldre Solow-sett (gjenkjenning) | $1-c_1$ i H2018-varianten (kap. 2.1); RR-koeffisienter i H2022-formen |

### Figurspråket (KRITISK SJANGERREGEL — figurer er førsteklasses svar)

Figurkravet er eksplisitt i alle Solow-sett (6 av 13 sett), og
sensorveiledningene godtar at en korrekt figur med forklarende tekst er fullgodt
svar. DNA-regnefagets figurkrav gjelder fullt ut:

1. **Figur-i-ord er obligatorisk i HVERT figursvar** — hvert `example` og hvert
   løsningsforslag som nevner en figur inneholder (i) en presis
   figurbeskrivelse i ord: akse-konvensjon (fasediagram: $k$ horisontalt;
   tidsbane: $t$ horisontalt; IS-RR-PK: $Y$ horisontalt, $i$ vertikalt),
   kurvene navngitt og formen beskrevet (konkav $s f(k)$ mot rett stråle
   $(n+\delta)k$; fallende IS, stigende RR), gamle og nye likevekter markert med
   bokstav og stiplede hjelpelinjer til aksene, dynamikkpiler der de trengs — OG
   (ii) den verbale mekanismen. Aldri figur uten forklaring, aldri forklaring
   uten figur.
2. **Faktiske SVG-er for kjernediagrammene.** Figur-i-ord er et KOMPLEMENT,
   aldri en erstatning: diagrammene som gjentas gjennom boka SKAL rendres som
   `image`-blokker med `src: "/images/textbook/econ2310/<navn>.svg"`. Minimum
   figurbibliotek: Solow-fasediagram med $k^*$ · tilpasningsbane over tid
   ($k$, $y$ mot asymptote) · $s$-skift · $n$-skift · $\delta$-skift ·
   golden rule (tangent parallell med strålen, konsum som vertikal avstand) ·
   dobbeltkryssing med trappetrinns-$s$ (to stabile likevekter + terskel +
   dynamikkpiler) · dobbeltkryssing med endogen $n$ · $(Y,i)$-diagram med IS og
   RR i likevekt · $Z^D$-skift · $Z^E$-skift (BEGGE kurver) · høy-β-varianten
   (begge kurver brattere) · Keynes-krysset og H2018-varianten i $(Y,I)$.
   Stil: akser `#6b7280`, norsk tekst, transparent bakgrunn, viewBox ca. 480×360,
   merkede akser og likevektspunkter med stiplede hjelpelinjer. Nye SVG-er MÅ
   lastes opp med `npx tsx scripts/upload-media-storage.ts` før deploy, ellers
   404 i prod.
3. **Ber oppgaven om figur, SKAL løsningen vise figuren.** Sier en oppgave-
   eller prøvetekst «tegn», «vis i figur/diagram», «skisser» e.l., er et
   løsningsforslag med bare «*Figur i ord:* …» UFULLSTENDIG — SVG-en skal inn
   rett etter delsvaret. Gjelder også prøver og øvingseksamener skrevet som
   tekstblokker inne i `collapsible`-er (nøstede image-blokker rendres, men MÅ
   ha `id` og `src` som peker på en opplastet fil).
4. **En figur viser bare det kapitlet har lært bort** — del figuren ved behov
   (f.eks. rent fasediagram i 1.2, golden rule-varianten først i 1.5).
   `caption` skreddersys per plassering; `alt` beskriver figuren bokstavelig.

### Sannhetskontroll (DNA-regnefag, tilpasset et fag uten tallregning)

Faget har **ingen rene regneoppgaver** (null på åtte år) — alt er symbolsk,
grafisk og verbalt. Sannhetskontrollen gjelder derfor **fortegns- og
entydighetspåstander**, som skal parametersjekkes numerisk (python3) i modellens
fulle parameterrom FØR de skrives. Obligatorisk sjekkliste:

- at høyere $\beta$ gir mindre multiplikator $m$ og brattere IS *og* RR
  (høy-β-analysen i kap. 4.3), og at $Y$-effekten av $Z^D$ da blir mindre;
- at $s$-økning gir høyere $k^*$ og $y^*$, men at langsiktig konsum per arbeider
  kan gå begge veier avhengig av golden rule-posisjonen;
- at $f'(k^*) = n+\delta$ faktisk maksimerer $(1-s)f(k^*)$;
- at $n$-økning og $\delta$-økning virker likt for per arbeider-størrelser, men
  ulikt for totalstørrelsene;
- at $i$ stiger entydig ved kronesvekkelse mens $Y$ er ubestemt;
- at trappetrinns-$s$ og endogen $n$ gir to stabile likevekter med en ustabil
  terskel imellom (sjekk dynamikken i hvert intervall);
- fortegnsfasiten for UIP ($i$ opp hjemme styrker krona; $i^F$ eller $E^e$ opp
  svekker den).

Er en påstand bare betinget sann, skrives betingelsen eksplisitt. En «vis at
…»-oppgave der påstanden ikke holder ubetinget KAN IKKE LØSES og skal ikke
skrives. To selvrettingssteder skal aldri lande motsatt.

### Sjangerkoder A–L (fra skjelettets §3 / analysens oppgavetype-katalog)

**A** sett opp Solow fra verbale egenskaper · **B** steady state-diagram og
tilpasningsbane · **C** komparativ statikk i Solow ($s$/$n$/$\delta$/$g$) ·
**D** Solow-utvidelser (golden rule, flere likevekter, fattigdomsfelle) ·
**E** forklar IS (tre rentekanaler + multiplikator med prisvirkning) ·
**F** forklar RR fra pengepolitikkens mål · **G** skiftanalyse i IS-RR-PK med
panser-åpning · **H** valutakurs og UIP · **I** hovedkursmodellen (utled $\pi$
og $w-\pi$, tolk $k$) · **J** Keynes-kryss/spareparadoks/Solow-kontrast ·
**K** penge- vs. finanspolitikk komponent for komponent · **L** aktualitets-/
kreativitetsspørsmål. Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3) — forklares i klarspråk ved første bruk.

### Feilkatalogen #1–#12 (bruk i «Typiske feil»-blokker; glosses ved første bruk per kapittel)

#1 «K og Y er konstante i steady state» (positivt feil — per arbeider er
konstant, totalt vokser med $n$) · #2 utelate én av rentens tre kanaler (oftest
valutakurs/eksport) · #3 glemme prisvirkningen i multiplikatoren, eller få kjeden
feil vei (riktig: høyere $Y$ → *lavere* ledighet → høyere lønnsvekst → *lavere*
eksport) · #4 ikke skille KPI-inflasjon fra prisvekst på norske varer · #5 feil
fortegn på valutakursmekanismen · #6 behandle RR som markedsligning i stedet for
begrunnet reaksjonsfunksjon · #7 bare regne, ikke forklare · #8 miste spørsmålet
av syne i drøftingsoppgavene · #9 inkonsistente forutsetninger (bytte mellom
modell med og uten produktivitetsvekst) · #10 signere ubestemte effekter ·
#11 forveksle sparerate og konsumtilbøyelighet ($\gamma = 1 - c_1$) · #12 glemme
veien til likevekten (steady state uten tilpasningsbane er halvt svar).

Feilkatalogen samles i studieguiden med henvisning til kapitlet som forebygger
hver feil.

### Forbudt-termer (grep-sjekkes — skal gi 0 treff utenfor de angitte unntakene)

`LM-kurve`, `IS-LM`, `AD-AS`, `Ramsey`, `OLG`, `DSGE` — unntatt i kap. 0.1s
avgrensningsavsnitt, som eksplisitt sier at disse har 0 forekomster og er
utelatt. Videre: **ingen rene tallregningsoppgaver**; ingen selvstendig
behandling av likviditetsfelle, Ricardiansk ekvivalens eller handlingsregelen
(1310-stoff, testes ikke i 2310); ingen kortsvars- eller
nasjonalregnskapsoppgaver. `\gamma` som sparerate og `d` som kapitalslit brukes
KUN i tydelig merkede gjenkjenningsøvelser — bokas egen fremstilling skriver
$s$ og $\delta$. Grep «Prioritet: perfekt» = 0; grep «en A-besvarelse ville» /
«ville ha drøftet» = 0.

## Kryssbok-lenker til econ1310 (verifisert — alle filene finnes)

Lenkeform `[tittel](/econ1310/<id>)`. Titlene under er de faktiske
kapitteltitlene i econ1310-boka og skal brukes ordrett:

| Brukes i | econ1310-id | Tittel |
|---|---|---|
| 0.1, 2.2 | `econ1310-0-1` | Eksamenskartet: slik testes ECON1310 |
| 1.1 | `econ1310-1-1` | Nasjonalregnskapet: BNP, BNI og disponibel inntekt |
| 6.3 | `econ1310-1-3` | Penger, banker og finanssystemet |
| 3.1 | `econ1310-1-5` | Valutakurs og åpen økonomi: nominell kurs, realkurs og trilemmaet |
| 1.1 | `econ1310-2-1` | Modellens anatomi: atferdsligninger, endogene variabler og telleregelen |
| 2.1, 4.1, 6.2 | `econ1310-2-2` | Multiplikatoren på tilvekstform: kjerneteknikken |
| 2.1 | `econ1310-2-3` | Følgestørrelsene: ΔC, ΔT, ΔB og ΔS |
| 4.1 | `econ1310-2-4` | Modellvarianter: åpen økonomi, eksogen skatt og finanspolitiske regler |
| 4.5 | `econ1310-3-1` | Virkemiddellæren: offentlige kjøp, skatt og automatiske stabilisatorer |
| 4.2, 5.1 | `econ1310-4-1` | Lønns- og priskurvemodellen og likevektsledigheten |
| 3.2, 4.3 | `econ1310-4-2` | Phillips-kurven: β-mekanismen og kausalkjeden |
| 5.1, 5.3 | `econ1310-4-3` | Frontfagsmodellen og koordinert lønnsdannelse |
| 4.2 | `econ1310-5-1` | Renteregelen og RR-kurven |
| 4.3, 4.4 | `econ1310-5-2` | IS-RR-PK-diagrammet: etterspørselssjokk |
| 4.4 | `econ1310-5-3` | Kostnadssjokk og sentralbankens målkonflikt |
| 4.2, 4.5 | `econ1310-5-6` | Pengepolitikk i praksis: fleksibel inflasjonsstyring, gradvishet og likviditetsfellen |
| 6.1 | `econ1310-6-3` | Fra nyhetsbilde til modell: aktualitetstrening |

Intern lenke i kap. 5.3: `[Skiftanalyse med panser-åpning: sjokkene gjennom
systemet](/econ2310/econ2310-4-4)` — skrives først når 4.4 er på disk.
**Regel:** lenk aldri til en fil som ikke finnes; kontroller mot
`src/lib/data/chapters/` før ferdigmelding.

## Prøvekapitler

Seks prøvedeler: **[1, 2, 3, 4, 5, 6]** — én prøvekvote (4 prøver) per temadel
1–6, altså 24 prøver, jf. skjelettets «Prøve-kvote Del N»-linjer og §4.
**Del 0 er metadel (ingen prøve). Del 7 har ingen prøver** — den består av
«forklar relasjonen»-drillen (7.1) og 3 komplette øvingseksamener (7.2–7.4).

Prøvekapittel: id `econ2310-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk; deklarerer «4 prøver à ~X
min» — bruk minuttene fra skjelettets prøve-kvote-linjer — + «kan trygt deles
over flere kvelder — én prøve per økt») + `text` Forkunnskaper + fire
`collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N») med nyskrevne
oppgaver i eksamens sjangre og full fasit (A-besvarelse med figur/SVG der
oppgaven ber om figur, + poengfordeling). Flervalg i prøve-collapsibles: stokkede
fasit-bokstaver (aldri «alle a»), og prøve-tipen sier hvor flervalget bor. Etter
hver prøvefasit: avkryssbar selvdiagnose-sjekkliste (☐). Kap-referanser i
fasitene som markdown-lenker. Ingen begrepsbank/quiz-kvote for prøvekapitler.

## Quiz-kvoten

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Nøyaktig 4 alternativer. Distraktorer = reelle feller fra feilkatalogen
(fortegnsfeil på valutakursen, glemt rentekanal, glemt prisvirkning, KPI vs.
norske varer, RR som markedsligning, «K og Y står stille») — ikke tullesvar.
Runtime stokker rekkefølgen.

### Kvotetabell (AUTORITATIV — bindende total, aldri underskrid)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 10 | 10 | 0 (metadel) |
| 1 | 1.1–1.7 | 155 | 150 | 4 |
| 2 | 2.1–2.2 | 35 | 30 | 4 |
| 3 | 3.1–3.2 | 40 | 40 | 4 |
| 4 | 4.1–4.6 | 140 | 125 | 4 |
| 5 | 5.1–5.3 | 50 | 55 | 4 |
| 6 | 6.1–6.4 | 45 | 55 | 4 |
| 7 | 7.1–7.4 | 40 | 45 | 0 (3 øvingseksamener) |
| **Sum** | **29 kap.** | **515 ✓ (≥500)** | **510 ✓ (≥500)** | **24 + 3 ØE** |

Per kapittel (quiz · flashcards) — dette er minimum, aldri under:

| Kap. | Q · F | Kap. | Q · F | Kap. | Q · F |
|---|---|---|---|---|---|
| 0.1 | 10 · 10 | 3.1 | 25 · 25 | 5.2 | 20 · 20 |
| 1.1 | 20 · 25 | 3.2 | 15 · 15 | 5.3 | 15 · 15 |
| 1.2 | 25 · 25 | 4.1 | 30 · 30 | 6.1 | 15 · 20 |
| 1.3 | 30 · 30 | 4.2 | 25 · 25 | 6.2 | 10 · 15 |
| 1.4 | 20 · 20 | 4.3 | 20 · 20 | 6.3 | 10 · 10 |
| 1.5 | 20 · 20 | 4.4 | 30 · 25 | 6.4 | 10 · 10 |
| 1.6 | 20 · 20 | 4.5 | 15 · 15 | 7.1 | 25 · 45 |
| 1.7 | 20 · 10 | 4.6 | 20 · 10 | 7.2–7.4 | 5 · 0 (hver) |
| 2.1 | 20 · 15 | 5.1 | 15 · 20 | | |
| 2.2 | 15 · 15 | | | | |

**Bindende total: quiz 515 · flashcards 510.** Flashcards telles som toppnivå
`definition`-blokker med `title`. Fordelingen speiler frekvens: Del 1 + Del 4
(hovedblokkene) bærer 295 av 515 quiz.

## Opphavsrett (ufravikelig)

Alle oppgaver, case, scenarioer og sitater er NYSKREVNE — eksamenssjangrene er
malen, ALDRI originaloppgavene. Sitatbaserte oppgaver (7.3, 6.4, prøve 6.D)
bruker **oppdiktede** utdrag i nasjonalbudsjett-/rapportstil, tydelig fiktive.
Skjelettets mønstereksempler er selv omskrivninger og skal varieres videre, ikke
kopieres ordrett inn. Pensumkildene veiledningene viser til (Holden
«Makroøkonomi» kap. 16 i Mehlums reviderte versjon, Weil «Economic Growth»,
Mehlums notater om hovedkursen og om omfordeling/S=I, Mehlums artikkel om todelt
koronaøkonomi) refereres, aldri siteres i lengde. Referanser forfatteren er
usikker på merkes `(verifiser)` og løses i fase 6.

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil; ingen trailing
   commas, ingen uescapede `"`/`\` (LaTeX-backslash = `\\`).
2. **Kvotetelling** mot kvotetabellen over (autoritativ, total 515/510):
   toppnivå `definition`-blokker med title + antall quiz-spørsmål per fil.
3. **Forbudt-termer-grep = 0** (LM-kurve, IS-LM, AD-AS, Ramsey, OLG, DSGE
   utenfor kap. 0.1s avgrensning; `\gamma`/`d` som bokas egen notasjon;
   «Prioritet: perfekt»; «en A-besvarelse ville»/«ville ha drøftet»).
4. **Kryssbok-lenker** peker på eksisterende filer i `src/lib/data/chapters/`
   (tabellen over) — og interne kap-referanser er markdown-lenker.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert
   tidligere i kapitlet eller i en referert forkunnskap.
7. **Nybegynner-inngang:** alle koder (A–L, #1–#12, A–F) og karaktersjargong
   forklart ved første bruk; ingen kald kode i `competenceGoals`/første tekstboks;
   kap. 0.1 har «Slik leser du denne boka»-boksen (type `text`/`tip`, ALDRI
   `definition`) + formel-minimum-collapsible.
8. **«Forklar relasjonen»-mal** finnes i hvert modellkapittel (1.1, 2.1, 3.1,
   4.1, 4.2, 4.3, 5.1) og drilles i 7.1.
9. **Figur + mekanisme:** hvert figursvar har både figur-i-ord og verbal
   mekanisme; ber oppgaven om figur, ligger SVG-en i løsningen; refererte SVG-er
   finnes/er bestilt og lastet opp til Storage.
10. **Ubestemte fortegn flagges** overalt der analysen krever det ($Y$ ved
    kronesvekkelse, $C$/$I$ ved $\Delta G$, langsiktig konsum ved $s$-økning,
    norske varepriser ved kurssjokk) — aldri signert.
11. **«Positivt feil»-presiseringen** (per arbeider konstant, $K$ og $Y$ vokser
    med $n$) står i 1.2, 1.7 og øvingseksamen 3 (kap. 7.4).
12. **Ingen tallregningsoppgaver** — alle øvinger er symbolske, grafiske eller
    verbale.
13. **Prøve-flervalg:** fasitmønster sjekket (aldri «alle a»/«alle felle»);
    selvdiagnose-sjekkliste etter hver prøvefasit; ingen tom `collapsible`.
14. **hints** utfylt på alle exercises (unntatt den merkede kalde banken i 7.1),
    første hint røper aldri konklusjonen.
15. **Frekvenstall** = antall listede belegg (tell hver «N av 13»-påstand mot
    skjelettets Eksamensbelegg-felt); kildenoten nevner kun kildetypene i §8.
16. **Sannhetskontroll:** alle fortegns-/entydighetspåstander parametersjekket
    numerisk (python3), jf. sjekklisten over.
17. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag/pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling; feilkoder glosses ved
    første bruk per kapittel.
18. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt/
    UiO-tilknyttet og lover aldri eksamensutfall (deklarasjonene vises automatisk
    av plattformen; ved wiring registreres boka i `institusjoner.ts` under UiO).
19. **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
    (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen.

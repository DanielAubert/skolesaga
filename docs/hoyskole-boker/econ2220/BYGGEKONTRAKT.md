# Byggekontrakt: ECON2220 Mikroøkonomi 2 — teknisk kontrakt for kapittelforfattere

Gjelder ALLE forfatter-agenter som bygger kapitler til `econ2220`. Faglig innhold
styres av `SKJELETT.md` (per-kapittel-DNA + identitetsseksjon §1) — les ditt
kapittels avsnitt der nøye, pluss `EKSAMENSANALYSE.md` ved behov. Denne
kontrakten definerer format og krav. Arketype: **DNA-regnefag**
(`DNA-regnefag.md`), undertype **optimerings- og utledningsfag med fast
tre-oppgavers eksamensmal** (Lagrange-håndverket + kravet «utled matematisk OG
tolk i økonomiske enheter» er kjernehåndverket).

Boka bygger videre på den live ECON1210-boka. **Les seksjonen «Broen fra
ECON1210: CORE-anleggsmodellen → $c'(y)$» før du skriver ett eneste
tilbudsavsnitt** — de to bøkene bruker ulike produsentmodeller med vilje.

## LÆRINGSLØKKE-KONTRAKT (ufravikelig byggekrav — produkteier 9. juli 2026)

Fra skjelettets topp, tas inn her som bindende byggekrav:

- HVERT kapittels `content[]` struktureres som gjentatte små løkker
  **Teori → Eksempel → Oppgave**. `exercise`-blokker plasseres INLINE i
  `content[]` rett etter teorien/eksempelet de trener — ALDRI all teori øverst
  med oppgavene samlet nederst.
- **Ingen usett forkunnskap:** ingen oppgave får kreve et begrep, en regel, en
  formel eller en metode som ikke er introdusert tidligere i kapitlet (t.o.m.
  eksempelet rett foran) eller i et tidligere kapittel referert i
  Forkunnskaper-blokken. Flytt teoribiten tidligere ved behov.
- **Unntak:** øvingseksamen-/prøvekapitler (kap. 8.3–8.5 og prøvekapitlene)
  følger sin egen arketype (komplett oppgavesett først, løsninger i
  collapsibles).
- Kvotene og innholdskontraktene i skjelettet er UENDRET — løkka styrer kun
  REKKEFØLGEN.

## Filplassering

Ett JSON-dokument per kapittel: `src/lib/data/chapters/<kapittel-id>.json`
(f.eks. `econ2220-2-1.json`). IKKE rør `_registry.json`, `_all.json`,
`textbook-courses*.ts` eller `quiz-data*.ts` — wiring gjøres sentralt (steg 2,
`scripts/hoyskolebok/wire-bok.py`). Generer JSON via python `json.dump`
(garantert gyldig escaping; husk å escape `"` i norske sitattegn og doble
backslash i LaTeX: `\\frac`, `\\omega`, `\\partial`, `\\mathcal{L}`).

## Kapittel-JSON (toppnivå)

```json
{
  "id": "econ2220-2-2",
  "courseId": "econ2220",
  "chapterNumber": "2.2",
  "title": "…(fra skjelettet)…",
  "description": "…(én setning fra skjelettet)…",
  "estimatedMinutes": 55,
  "competenceGoals": ["kunne utlede Cobb-Douglas-etterspørselen c1 = am/p1 fra begge funksjonsformer", "…"],
  "content": [ …blokker… ],
  "exercises": []
}
```

`chapterNumber` = skjelettets `number` (`<del>.<nr>`, f.eks. `0.1`, `2.2`;
prøvekapitler `<del>.P`). `competenceGoals`: 2–4 «kunne …»-formuleringer avledet
av kapittelets innholdskontrakt — **ingen kald sjangerkode (A–N) eller feilkode
her**. `exercises` er alltid tom liste (oppgaver ligger som `exercise`-blokker
inline i `content`).

## Blokktyper (eksakte felt — referanse: `src/lib/data/chapters/econ1310-2-1.json`)

- `text`: `{ "id", "type": "text", "content": "markdown + LaTeX" }`
- `definition`: `{ "id", "type": "definition", "title": "Begrepet", "content": "forklaring" }`
  — **title er OBLIGATORISK** (flashcards genereres KUN fra toppnivå
  definition-blokker med title; nøstede definisjoner i collapsibles teller IKKE).
- `theorem`: `{ "id", "type": "theorem", "title": "Navn på resultat", "content": "…" }`
- `example`: `{ "id", "type": "example", "title": "Eksempel N: …", "problem": "…", "solution": "…" }`
  (solution = A-besvarelse: utledning + enhetstolkning + figur i ord).
- `tip` / `warning`: `{ "id", "type", "title", "content" }`
- `exercise`: `{ "id", "type": "exercise", "exercise": { "id", "number", "type": "classic", "difficulty": "lett"|"middels"|"vanskelig", "task", "solution", "hints": [] } }`
  — ALDRI `solutionVideo`/`allowsUpload`/`allowsCanvasDrawing`/`answer`. Ikke bruk
  `subTasks`-feltet (skriv deloppgaver a)/b)/c) inline, se Leserkrav).
- `image`: `{ "id", "type": "image", "src": "/images/textbook/econ2220/<navn>.svg", "alt": "…", "caption": "…" }`
  — se «Figurspråket».
- `collapsible`: `{ "id", "type": "collapsible", "title", "buttonText": "Vis …", "content": [blokker] }`
  — brukes til **Symbol- og formelliste**, sekundærstoff, prøve-collapsibles,
  øvingseksamen-løsninger og repetisjon. ALDRI tom: feltet heter `content` og
  skal ha blokker.

Blokk-id-er: `<kapittel-id>-<løpenavn>`, f.eks. `econ2220-2-2-def-1`,
`econ2220-2-2-ex-3`. Unike innen kapitlet.

## Obligatorisk kapittelstruktur (teorikapitler — DNA-regnefag + skjelettet)

Alltid, i denne rekkefølgen først i kapitlet:
1. `tip` **Eksamensvinkel** (frekvens, vekt, sjangre — tallene fra skjelettets
   «Eksamensbelegg»-felt for nettopp ditt kapittel, ikke oppdiktede tall).
2. `text` **Forkunnskaper** (kapitler i boka + kryssbok-lenker
   `[tittel](/bok/econ1210/<chapterId>)` — KUN til kapitler som finnes i
   `src/lib/data/chapters/`; «kan leses uten forkunnskaper» hvis ingen). I tunge
   kapitler (Del 3–6) skal blokken **vise** de 2–3 nøkkelformlene på nytt («Sist
   du var her»), ikke bare lenke.

Deretter DNA-regnefag-løpet i læringsløkker: `text` hverdagsanker/motivasjon →
`definition`/`theorem` kjernebegreper (flashcard-kilden, toppnivå med title!) →
`text` utledning med intuisjon per steg (kun det skjelettet merker «utledes
aktivt») → `example` ×2–4 med stigende nivå (siste på eksamensnivå, hver med
figur i ord) → `warning` **Typiske feil** (fra feilkatalogen under) → 6–12
`exercise` inline, stigende (lett → middels → vanskelig; de vanskelige =
eksamenskloner av skjelettets sjangre).

Og SIST i kapitlet: `collapsible` **Symbol- og formelliste** (title «Symbol- og
formelliste», buttonText «Vis symboler og formler»): første linje «Oppslagsverk —
alt her forklares underveis i kapitlet.», deretter markdown-tabell
`| Symbol | Betydning |` + «**Formler i dette delkapitlet:**» med display-LaTeX +
tolkning. ALLE symboler/formler brukt i delkapitlet — per delkapittel, ikke arv.

Og alltid til slutt: begrepsbank-`definition`-blokker opp til flashcard-kvoten
(hver stor begrepsbank åpner med standard-notisen «flashcard-/repetisjonsstoff —
hopp trygt over ved førstegangslesing; tidsanslaget gjelder kjernestoffet») +
`collapsible` repetisjon.

Drillkapitlene (2.5, 3.4, 4.5, 5.5) og sjangertreningen (8.1, 8.2) følger
DNA-varianten: **løsningsoppskrift (algoritme)** → gjennomregnet eksamenscase med
sensor-margnotater → 8–15 oppgaver som roterer sjangeren. Øvingseksamenene
(8.3–8.5) følger øvingseksamen-DNA: komplett nyskrevet sett i eksamensform →
`collapsible` A-besvarelse per oppgave + `tip` med vekting og tidsbudsjett.

## Leserkrav (ufravikelig — full ordlyd i README «Leserkrav»; SKAL i førsteutkastet)

- **Kun eksamensrelevant stoff**; «bør kjenne til» sist og merket. Del 7
  (spillteori/atferd) er hele veien merket beredskapsstoff.
- **Korte avsnitt** (2–4 setninger), «du»-form, konkret norsk knagg (strømprisen,
  kornbonden, ferjebilletten) før formalismen — presisjon vinner ved tvil.
- **Meningsfulle oppgaver**: hver oppgave synlig eksamensforankret — f.eks.
  «(Eksamenssjanger C — Cobb-Douglas-utledning, i alle tre siste ordinære sett.)»
- **Læringsløkke Teori → Eksempel → Oppgave** med `exercise`-blokker INLINE.
- **Ingen usett forkunnskap** (se løkke-kontrakten øverst).
- **Deloppgaver på egen linje, fet merking:** a), b), c) i `task`/`solution` HVER
  på egen linje — `…\n\n**a)** …\n**b)** …`. ALDRI bak hverandre i løpende tekst;
  ikke bruk `subTasks`-feltet. Små bokstaver, aldri A)/[A].
- **Nybegynner-inngang / ingen uforklart sjargong:** HVER sjangerkode (A–N),
  feilkode (#1–#13) og karakterbokstav + all karaktersjargong («C-stoff»,
  «A-markør») og alle insider-termer (MSB, MTB, MTSB, beholdning/endowment,
  Slutsky-kompensasjon, renprofitt, grunnrente, delspill-perfekt) forklares i
  klarspråk ved FØRSTE bruk — og glosses på nytt ved første bruk PER KAPITTEL.
  Ingen kald kode i `competenceGoals` eller i aller første tekstboks. Del 0
  (kap. 0.1) har en **«Slik leser du denne boka»-orienteringsboks (type
  `text`/`tip`, ALDRI `definition`)** med karakterskalaen A–F, kompakt kodeliste
  (sjangrene A–N + feilkodene) og at feilene har et samlet register.
- **Stokket flervalg i prøvetekster:** statiske flervalg i prøve-collapsibles har
  stokkede fasit-bokstaver (ALDRI «alle a»); prøve-tipen sier hvor flervalget bor.
  Quiz-filene beholder options[0]-invarianten.
- **Del 0-pakken:** «Lite tid?»-boks (hurtigrute 3–5 dager + ukeplan fra summerte
  `estimatedMinutes`, og at anslagene er LESEtid — ×1,5 ved håndskriving) +
  **kildenote for frekvens-empirien** + prosedyre-/sjangerkort på ÉN side (kortet
  selv, ikke en lenkeliste) + deltidsrute (10–12 uker) + «lese mye, skrive
  lite»-boks + egen boks for konte-kandidater (utsatt er systematisk vanskeligere
  og henter fra Del 3 og 6).
- **Kildenoten — eksakt og sannferdig (UFRAVIKELIG):** grunnlaget er **7 ordinære
  eksamenssett V2018–V2025** (emnet går kun om våren; V2021 mangler i arkivet),
  **7 sensorveiledninger**, **4 utsatt-eksamener V2022–V2025** og **4
  utsatt-sensorveiledninger** — til sammen **22 dokumenter**. Dette faget HAR
  sensorveiledninger, så de kan nevnes. Forbehold som skal med: settene før 2023
  hører til et annet regime (spill/atferd), 2020–2022 var korona-/hjemme-preget,
  og V2024-settet oppgir ikke prosentvekter. Ingen andre kildetyper skal påstås.
  Modellbesvarelser er **nyskrevne**, aldri ekte studentbesvarelser.
- **Klikkbare kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter =
  markdown-lenke `[kap. X.Y](/bok/econ2220/econ2220-X-Y)`; død «se kapittel»-tekst
  er FORBUDT (aldri lenker i title-felt).
- **Karakter-realisme:** «C er en god og vanlig karakter» eksplisitt i Del 0;
  «Prioritet: perfekt» FORBUDT i prosaen (skriv «høyeste prioritet» / «dette må
  sitte»). NB: «PERFEKT» i skjelettets deltitler er en *prioritetsklasse*
  (perfekt/kunne/kjenne = nivå 1/2/3), ikke et krav om plettfri besvarelse.
  Modellbesvarelser ærlig merket (en «C-besvarelse» ER C) + minst én autentisk
  B-/midtnivå-besvarelse; «Gapet til A» skrives som oppgraderingsmeny.
  Karaktertersklene E/C/A fra skjelettets kap. 0.1 gjengis nøkternt.
- **Selvdiagnose:** avkryssbar sjekkliste (☐) etter hver prøvefasit; lett
  innstegsoppgave (difficulty `lett`, ren gjengivelse) tidlig i teorikapitler der
  første oppgave ellers er full eksamenssjanger.
- **Hverdagsanker + verdens-caser:** abstrakte kjernetemaer (Lagrange, bytteboks,
  velferdsteoremene) åpner med hverdagsanker; eksempler er verdens-caser
  (strømkunde med solceller, kornbonde, settefiskanlegg, kollektivbillett), aldri
  «en medstudent skriver …»-metaeksempler.
- **Tidsbudsjett-konsistens:** avvik mellom deklarert oppgavetid og sum deltider
  forklares. Øvingseksamenene (240 min) deklarerer tidsbudsjett per oppgave — og
  siden deloppgavene teller likt, brytes budsjettet ned per deloppgave.
- **Hint + difficulty-spredning:** alle exercises har utfylte `hints` (første =
  formel/første grep — ALDRI konklusjonen); boka har noen «(krevende)»-merkede
  oppgaver + én merket kald bank UTEN hint (fasit = momentliste) i Del 8.
- **Fasitmønster-variasjon:** ALLE ensartede fasitlister varierer — aldri «alle
  a», aldri «alle sanne»/«alle usanne»/«alle feller». I sann/usann-bankene
  (sjanger L) skal både sanne, usanne og *betinget* sanne påstander være med.
  Distraktorer gjengir ALDRI bokas egne nyanser som «galt» svar; nær-sanne
  distraktorer forklares eksplisitt i fasit-kommentaren.
- **Meta-fasit forbudt:** «en A-besvarelse ville ha drøftet …» erstattes av
  faktisk utskrevet drøftelse. Minst én modellbesvarelse lander SKARPT.
- **Signalbokser ETTER oppgaven** (varsel om hva en drilloppgave tester står
  etter oppgaven eller som collapsible hint, aldri foran).
- **Frekvenstall = telte belegg:** hver «N av M sett»-påstand skal stemme eksakt
  med belegg-listen som følger, og med skjelettets tall for ditt kapittel.
- **Faglige påstander verifiseres FØR skriving** (se «Matematisk
  sannhetskontroll»).
- **Øktmerking:** kapitler > 45 min har tidsanslag per løkke og
  pausepunkt-markører; lange modellbesvarelser (øvingseksamenene) har «— naturlig
  pausepunkt —». Bokas samlede oppslagskort er **formel-minimum** (studieguidens
  §6-formelark, gjengitt i Del 0).

## Fagspesifikk stil (ufravikelig for ECON2220 — fra skjelettets identitetsseksjon §1)

### Broen fra ECON1210: CORE-anleggsmodellen → $c'(y)$ (KRITISK KONTRAKTSLINJE)

Forgjengerboka `econ1210` er live og bruker **CORE-anleggsmodellen** som
bokstandard for tilbudssiden: anlegg med *konstante enhetskostnader* (=
marginalkostnader) og *gitt kapasitet*; markedets T-kurve fremkommer ved å rangere
anleggene etter enhetskostnad. ECON2220 krever den **klassiske produsentteorien**:
produktfunksjon $F(K,L)$, kostnadsfunksjon $c(y)$, profittmaksimering
$p = c'(y)$, skalautbytte og stigende marginalkostnad. Reglene:

1. **Kap. 1.1 (`econ2220-1-1`) er bokas ENESTE bro- og anleggskapittel.** Der —
   og bare der — omtales anleggsmodellen, med lenke til
   [Tilbudskurven: anleggsmodellen](/bok/econ1210/econ1210-1-2).
2. **Formuleringen som skal stå der:** de to er **ulike modellvalg for samme
   fenomen, ikke motstridende fakta**. Anleggsmodellen aggregerer diskrete
   enheter med konstant enhetskostnad; den klassiske modellen glatter dette til
   en deriverbar kostnadsfunksjon $c(y)$ som kan deriveres og optimeres.
   ECON2220-eksamen krever den klassiske varianten med derivasjon, og resten av
   denne boka bruker den konsekvent. Skriv det rett ut — studenten skal ikke tro
   at hun har lært noe galt i 1210.
3. **Broen skal bygges begge veier, ikke bare avvises.** Vis at 1210-intuisjonen
   gjenbrukes i grensetilfellet: konstant skalautbytte gir $c(y) = k\,y$,
   horisontal tilbudskurve ved $k$ og nullprofitt i likevekt (kap. 5.3–5.4) —
   nøyaktig anleggsmodellens bilde når anleggene er identiske. Stigende
   marginalkostnad i 2220 svarer til at anleggene har ulik enhetskostnad.
4. **Etterspørselssiden i samme kapittel:** 1210 postulerte etterspørselskurven
   ([Etterspørselskurven](/bok/econ1210/econ1210-1-1)) og konsumenttilpasningen
   ([Konsumentteori: budsjettlinje, indifferenskurver og tilpasning](/bok/econ1210/econ1210-7-1));
   2220 *utleder* dem fra nyttemaksimering. 1210s verbale substitusjons- og
   inntektseffekt ([Arbeidstilbudet: substitusjons- og inntektseffekt](/bok/econ1210/econ1210-6-2))
   blir 2220s Slutsky-likning. [Markedslikevekt](/bok/econ1210/econ1210-1-3) og
   [KO, PO og SO](/bok/econ1210/econ1210-2-1) generaliseres til likevekt i *alle*
   markeder og Pareto-effektivitet.
5. **Notasjonsbroen tas samme sted:** 1210 skriver konsumgodene $x_1, x_2$; denne
   boka skriver $c_1, c_2$. Sies én gang i kap. 0.1 (eldre sett varierer) og én
   gang i kap. 1.1 — deretter aldri mer.
6. **Arbeidsdelingen mellom bøkene:** monopol, prisregulering, skatteoverveltning
   og klimapolitikk BOR i 1210-boka; 2220 eier Lagrange, generell likevekt,
   velferdsteoremene og beredskapsspillteorien. Ingen MI = MK-analyse noe sted i
   econ2220 — lenk i stedet til
   [Monopolets tilpasning](/bok/econ1210/econ1210-5-1).
7. **Grep-kontroll (steg 3/4):** `anlegg`, `anleggsmodell`, `kapasitet`,
   `E-kurven`, `T-kurven`, `KO/PO/SO` skal gi **null treff utenfor kap. 1.1**.
   Ordet «enhetskostnad» er tillatt i kap. 1.1 og i kap. 5.3–5.4 (der $k$ i
   $c(y) = k\,y$ navngis som enhetskostnaden) — aldri som modellapparat andre
   steder.

### Notasjonsstandard (gjelder HELE boka)

- Konsum $c_1, c_2$ (ALDRI $x_1, x_2$ som primærnotasjon — kun engangsmerknaden i
  0.1/1.1 om at eldre sett varierer); priser $p_1, p_2$; pengeinntekt $m$.
- **Beholdning $\omega$** ($\omega_1, \omega_2$; $\omega_1^A$ osv. i
  to-konsument-økonomier). Konsumenter heter **A og B**.
- **Faktorpriser $r$ (kapital) og $w$ (arbeid)** — $\omega$ brukes ALDRI om
  faktorpriser. Arkivsettene har vært inkonsekvente; boka standardiserer og sier
  det én gang (kap. 3.1).
- Marginalnytter $u'_1, u'_2$. Produsent: $F(K,L)$ med $F'_K, F'_L$;
  én-faktor-varianten $x = F(n)$; produktpris $p$; kostnadsfunksjon $c(y)$,
  variable kostnader $c_v(y)$, faste kostnader $F$; profitt $\pi = py - c(y)$;
  Lagrange-funksjonen $\mathcal{L}$, multiplikator $\lambda$.
- Norsk begrepsapparat: **MSB** (marginal substitusjonsbrøk), **MTB** (marginal
  transformasjonsbrøk), **MTSB** (marginal teknisk substitusjonsbrøk). Engelsk
  (MRS/MRT/MRTS) kun i parentes ved FØRSTE forekomst, aldri som primærterm.
- Nøkkelbetingelser i eksamens form: $u'_1/u'_2 = p_1/p_2$; $c_1 = am/p_1$,
  $c_2 = (1-a)m/p_2$; $p_1c_1 + p_2c_2 = p_1\omega_1 + p_2\omega_2$;
  $\frac{\partial c_1}{\partial p_1} = \frac{\partial c_1^s}{\partial p_1} + (\omega_1 - c_1)\frac{\partial c_1}{\partial m}$;
  $c_1 + \frac{c_2}{1+r} = m_1 + \frac{m_2}{1+r}$; $p = c'(y)$ og $pF'(n) = w$;
  $F'_K/F'_L = r/w$; $F(tK,tL) \gtreqless tF(K,L)$; $\text{MTB} = p_1/p_2 = \text{MSB}$;
  $u'_1/u'_2 = g'(n_2)/f'(n_1)$.
- **Slutsky-substitusjon** (kompensasjon = råd til samme godekurv) er bokas
  standard. Hicks (samme nyttenivå) nevnes KUN i én markert fotnote i kap. 2.3 og
  i én linje i 2.5 — godtas på eksamen, men er ikke kursets hovedspor.
- Budsjett- og ressursbetingelser holder alltid med likhet (monotoni), og
  begrunnelsen skrives ut første gang.
- LaTeX i `$...$` / `$$...$$`, dobbel backslash i JSON. Ingen unicode-brøker
  eller unicode-subskript i kapittelinnholdet ($c_1$, aldri «c₁»).

### Føringsstandard og sjangerregel (KRITISK — dette er faget)

Sensor krever **matematisk utledning for full score i optimeringsoppgaver** —
figur er støtte, aldri erstatning. Og motsatt: enhver formell betingelse skal
**tolkes i økonomiske enheter**; «MSB = prisforholdet» uten enhetsforklaring gir
trekk. Alle eksempler og løsningsforslag følger derfor **tretrinnsmalen**:

1. **Sett opp problemet formelt** (målfunksjon + bibetingelse med likhet, og
   hvorfor likhet).
2. **Utled steg for steg** (Lagrange: sett opp $\mathcal{L}$, deriver, kombiner
   FOB-ene ved å dele dem på hverandre slik at $\lambda$ elimineres).
3. **Oversett resultatet til bytteforhold i enheter** — hva venstresiden er, hva
   høyresiden er, og hvorfor likhet er optimum. Deretter figurbeskrivelse i ord
   der sensor forventer figur.

**Egenskaper skal vises, aldri påstås:** normalitet krever derivasjon mhp. $m$;
skalautbytte krever $F(tK,tL)$-testen eller fortegnet på $c''(y)$; konveksitet
krever figur eller blandingsargument; kurveform krever $c''$-fortegn.

### Sjangerkoder (bruk i oppgavemerking og eksamensbelegg — fra skjelettet §3)

**A** nyttemaksimering med tolkningskrav · **B** figurforklaring av
(ikke-)optimal tilpasning · **C** Cobb-Douglas-etterspørsel + normalitet ·
**D** Slutsky-dekomponering · **E** beholdnings-Slutsky / netto kjøper–selger
(inkl. den intertemporale varianten) · **F** bytteboks (Edgeworth) ·
**G** likevekts- og Pareto-definisjoner med presisjonskrav ·
**H** velferdsteoremene · **I** kostnadsminimering ·
**J** profittmaksimering/skalautbytte/kurvene ·
**K** MTB = MSB-produksjonsøkonomien (Robinson–Fredag) ·
**L** sann/usann-påstander med begrunnelse · **M** aktualisert åpen drøfting ·
**N** spillteori-/atferdsblokken (i dvale siden 2022).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3)
— gjengis i prosa som «må sitte» / «må kunne» / «bør kjenne».
Hver kode forklares i klarspråk ved første bruk per kapittel.

### Feilkatalogen (bruk i «Typiske feil»-blokker — glosses ved første bruk per kapittel)

#1 figur levert i stedet for utledning · #2 formelen gjentatt som «tolkning»
(uten enheter) · #3 normalitet/skalautbytte påstått uten derivasjon/test ·
#4 tro at kostnadsminimering bestemmer kvantum · #5 innsettingsmetoden brukt på
kostnadsminimering (beskrankningen kan ikke løses ut) · #6 individuell tilpasning
kalt likevekt (markedsklarering i alle markeder mangler) · #7 strøkne eller
urangerte forutsetninger for velferdsteoremene · #8 normativ Pareto-tolkning
(effektiv = rettferdig) · #9 fortegnsfeil i beholdnings-Slutsky (glemme at netto
selger blir rikere) · #10 parallellskift av beholdningsbudsjettet (det roterer
gjennom $W$) · #11 nullprofitt tolket som «ingen tjener penger» · #12
spillteori-arven (pugge 2018–2022-spill på bekostning av produsentteori) ·
#13 svare på noe annet enn det spurte i åpne drøftinger (kjøp vs. bruk).
Hvert kapittels `warning` **Typiske feil** henter fra skjelettets egen liste for
kapitlet og knytter den til kodene over.

### Figurspråket

Eksamen honorerer figur som *støtte* til utledningen, og skjelettets studieguide
§7 definerer figurbiblioteket. Regelen:

1. **Figur-i-ord er obligatorisk i HVERT figursvar**: akse-konvensjon, kurvene
   navngitt, punkter merket med bokstav, stiplede hjelpelinjer til aksene,
   arealer/avstander navngitt — pluss den verbale mekanismen. Aldri figur uten
   forklaring, aldri figurpåstand uten beskrivelse.
2. **SVG-er for de gjentatte kjernediagrammene** legges i
   `public/images/textbook/econ2220/` og wires som `image`-blokker rett etter
   teorien/eksempelet de hører til. Standardfigurene: budsjettlinje med
   indifferenskurver og tangering (2.1); ikke-optimale punkter på budsjettlinjen
   (2.1); Slutsky A→B→C (2.3); beholdningsbudsjett med rotasjon gjennom $W$
   (3.1/3.2); to-periode-budsjettet (3.3); Edgeworth-boksen med $W$, linse og
   kontraktkurve (4.1); isokvant/isokost (5.2); MK/GK-diagram med profittareal
   (5.3/5.4); PMK med isoprofitt-tangering (6.1/6.2); spilltre (7.2).
   `scripts/hoyskolebok/gen-slutsky.py <ut-katalog>` genererer eksakt geometri for
   Slutsky-figuren og kan målrettes mot econ2220-katalogen med egne aksenavn.
3. **Ber oppgaveteksten om figur («vis i figur», «tegn», «skisser»), SKAL
   løsningen vise figuren** — også i prøver og øvingseksamener inne i
   `collapsible`-er (nøstede `image`-blokker rendres, men må ha `id` og `src`).
4. **Nye SVG-er MÅ lastes opp:** `npx tsx scripts/upload-media-storage.ts` før
   deploy, ellers 404 i produksjon. En `image`-blokk får aldri peke på en fil som
   ikke finnes; lover en caption en figur, skal figuren være der.
5. **Skreddersydd `caption` per plassering** (knytt figuren til kapitlets eget
   eksempel og termbruk); `alt` beskriver figuren bokstavelig for skjermleser.

### Matematisk sannhetskontroll (DNA-regnefag — UFRAVIKELIG)

Alle fortegns- og entydighetspåstander parametersjekkes numerisk (python3) i
fullt parameterrom FØR de skrives. Særlig disse, som boka lever av:

- at Cobb-Douglas gir $c_1 = am/p_1$ med $\partial c_1/\partial m = a/p_1 > 0$ og
  $\partial c_1/\partial p_2 = 0$ (SE og IE nøyaktig like store og motsatte);
- at substitusjonsleddet $\partial c_1^s/\partial p_1 \le 0$ i alle
  parametervalg som brukes;
- at totaleffekten for en **netto selger** er ubestemt (finn parametervalg som gir
  begge fortegn før du skriver «ubestemt»), mens nyttekonklusjonen er entydig;
- at $F(tK,tL)$-testen faktisk gir det påståtte skalaregimet for hver konkrete
  teknologi som brukes, og at $c''(y)$-fortegnet stemmer med regimet;
- at $c(y) = 2y\sqrt{rw}$-typen kostnadsfunksjoner er etterregnet fra FOB-ene;
- at numeriske likevektspriser klarerer BEGGE markeder (kontroller Walras
  numerisk selv om du bare regner ett marked i teksten);
- at nåverdi-typetallene går opp uten kalkulator;
- at Fehr-Schmidt-avslagsgrensen $m < \alpha/(1+2\alpha)$ gir riktig tall med
  kursets faste $\alpha = 0{,}8$, $\beta = 0{,}6$.

En «vis at …»-oppgave der påstanden ikke holder ubetinget KAN IKKE LØSES — skriv
betingelsen eksplisitt i stedet. Fasiter etterregnes numerisk; to selvrettingssteder
skal aldri lande motsatt.

### Forbudt-termer (grep-sjekkes — skal gi 0 treff)

`anlegg`, `anleggsmodell`, `kapasitet` utenfor kap. 1.1 · «enhetskostnad» utenfor
1.1/5.3/5.4 · `E-kurven`, `T-kurven`, `D-kurven`, `S-kurven` · `KO`, `PO`, `SO`
som apparat (velferd måles i 2220 med Pareto, ikke overskuddsarealer) · `MRS`,
`MRT`, `MRTS` som primærtermer (norsk MSB/MTB/MTSB er standard; engelsk kun i
parentes ved første forekomst) · `Hicks` utenfor de markerte fotnotene i 2.3/2.5 ·
$x_1$/$x_2$ som primær konsumnotasjon (kun engangsmerknaden i 0.1/1.1) ·
$\omega$ brukt om faktorpriser · monopol-/`MI = MK`-analyse (bor i econ1210) ·
«Prioritet: perfekt» · meta-fasit («en A-besvarelse ville ha …»).
Påkrevd i stedet: $c_1, c_2$, $p_1, p_2$, $m$, $\omega$, $r$, $w$, $F(K,L)$,
$c(y)$, $\pi$, MSB, MTB, MTSB, Slutsky-kompensasjon.

## Prøvekapitler

Sju prøvedeler: **[1, 2, 3, 4, 5, 6, 7]** — fire prøver per temadel (28 totalt),
jf. skjelettets prøve-kvote-linjer og §4 (som gir tema og minutter per prøve).
**Del 0 er metadel (ingen prøve). Del 8 har ingen egne prøver** — den består av
sjangertrening (8.1–8.2) og tre komplette øvingseksamener (8.3–8.5).

Prøvekapittel: id `econ2220-<del>-prove`, chapterNumber `<del>.P`, tittel «Prøver
til del <del>: <deltittel>»: `tip` (dekning + tidsbruk; deklarerer «4 prøver à ~X
min» + «kan trygt deles over flere kvelder — én prøve per økt») + `text`
Forkunnskaper + fire `collapsible` («Prøve 1»–«Prøve 4», buttonText «Vis prøve N»)
med nyskrevne oppgaver i eksamens sjangre og full fasit (A-besvarelse: utledning +
enhetstolkning + figurbeskrivelse i ord + poengfordeling der deloppgavene teller
likt). Flervalg i prøve-collapsibles: stokkede fasit-bokstaver; sann/usann-prøver
blander sanne, usanne og betinget sanne påstander. Etter hver prøvefasit:
avkryssbar selvdiagnose-sjekkliste (☐). Kap-referanser som markdown-lenker. Ingen
quiz- eller flashcard-kvote for prøvekapitler.

## Øvingseksamener (kap. 8.3–8.5)

Tre komplette firetimers sett (240 min) etter de tre dokumenterte malene:
8.3 = V2025-malen 35/35/30, 8.4 = V2023-malen 30/20/50, 8.5 = utsatt-profilen
40/30/30 (se skjelettets §4-tabell for miksen). Struktur: nyskrevet komplett
oppgavesett i eksamensform → `collapsible` A-besvarelse per oppgave (utledning +
enhetstolkning + figurbeskrivelse i ord, med «— naturlig pausepunkt —» i lange
løsninger) + `tip` med vekting, tidsbudsjett per oppgave og hvor skilleoppgavene
ligger. 8.5 har eksplisitt «utsatt er vanskeligere»-forord. Alle tall pene og
nyskrevne. Sjanger N dekkes bevisst IKKE av øvingseksamenene (kun av prøvene
7.A–7.D), fordi settene skal speile en *typisk* eksamen.

## Quiz

`src/lib/data/quiz-staging/<kapittel-id>.quiz.json`:
`[{ "question", "options": [4 stk, options[0] ALLTID riktig], "explanation" }]`.
Nøyaktig 4 alternativer. Distraktorer = reelle feller fra feilkatalogen
(fortegnsfeil i beholdnings-Slutsky, parallellskift, normalitet uten derivasjon,
individuell tilpasning kalt likevekt, nullprofitt = «ingen tjener penger») — ikke
tullesvar. Runtime stokker rekkefølgen. **LENGDE-TELL:** riktig svar skal ikke
systematisk være det lengste alternativet — hold andelen «lengste = fasit» under
~30 % per fil.

### Kvotetabell (AUTORITATIV — bindende total, aldri underskrid)

| Del | Kapitler (quiz/flashcards per kapittel) | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 (10/10) | 10 | 10 | 0 (metadel) |
| 1 | 1.1 (15/15) · 1.2 (15/20) · 1.3 (15/15) | 45 | 50 | 4 |
| 2 | 2.1 (25/20) · 2.2 (25/20) · 2.3 (25/20) · 2.4 (15/15) · 2.5 (15/15) | 105 | 90 | 4 |
| 3 | 3.1 (20/15) · 3.2 (25/20) · 3.3 (15/15) · 3.4 (15/10) | 75 | 60 | 4 |
| 4 | 4.1 (25/25) · 4.2 (20/25) · 4.3 (25/25) · 4.4 (15/15) · 4.5 (15/10) | 100 | 100 | 4 |
| 5 | 5.1 (20/20) · 5.2 (25/20) · 5.3 (20/15) · 5.4 (25/20) · 5.5 (15/10) | 105 | 85 | 4 |
| 6 | 6.1 (15/15) · 6.2 (20/15) · 6.3 (15/15) | 50 | 45 | 4 |
| 7 | 7.1 (15/15) · 7.2 (15/15) · 7.3 (15/15) | 45 | 45 | 4 |
| 8 | 8.1 (10/15) · 8.2 (10/10) · 8.3 (5/0) · 8.4 (5/0) · 8.5 (5/0) | 35 | 25 | 0 (3 øvingseksamener) |
| **Sum** | **34 kapitler** | **570 ✓ (≥500)** | **510 ✓ (≥500)** | **28 + 3 ØE** |

**Bindende total: quiz 570 · flashcards 510.** Kvotene er minimum per kapittel;
forfatteren kan overskyte, aldri underskride. Flashcards telles som toppnivå
`definition`-blokker med `title` — kapitlene 8.3–8.5 skal derfor ikke ha
begrepsbank. Fordelingen speiler frekvens: Del 2 + Del 4 + Del 5 (de tre
eksamensoppgavene) står for 310 av 570 quiz; beredskapsdelen (Del 7) holdes
bevisst lav.

## Opphavsrett (ufravikelig)

Alle oppgaver, case og faktum er NYSKREVNE (egne tall, egne bransjer, egne
kontekster) — eksamenssjangrene er malen, ALDRI originaloppgavene. Skjelettets
mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
ordrett inn. Kalibreringsverdier fra arkivet (Cournot-tallene, nåverdi-typetall,
Fehr-Schmidt-parametrene $\alpha = 0{,}8$/$\beta = 0{,}6$ som er kursets faste
regime) brukes KUN til nivå- og sjangervalg — oppgavetallene skal være nye.
Pensum refereres, aldri siteres i lengde; pensumreferansen «Varian, *Intermediate
Microeconomics (with Calculus)*» er analysens beste slutning og skal enten merkes
`(verifiser)` eller utelates. Innholdet fremstiller seg ALDRI som offisielt,
godkjent eller UiO-tilknyttet, og lover aldri eksamensutfall.

## Kvalitetskrav før ferdigmelding (per agent)

1. `python3 -c "import json; json.load(open('…'))"` på hver fil; ingen trailing
   commas, ingen uescapede `"`/`\` (LaTeX-backslash = `\\`).
2. **Kvotetelling** mot kvotetabellen over (toppnivå definition-blokker med title
   + antall quiz i staging-fila) — tabellen er autoritativ, total 570/510.
3. **Forbudt-termer-grep = 0** (listen over), og klassisk produsentteori overalt:
   grep `anlegg` utenfor kap. 1.1 = 0 treff.
4. Alle kryssbok-lenker peker på eksisterende filer i `src/lib/data/chapters/`.
   Verifisert 24. juli 2026 som eksisterende: `econ1210-1-1`, `econ1210-1-2`,
   `econ1210-1-3`, `econ1210-2-1`, `econ1210-3-2`, `econ1210-4-1`,
   `econ1210-4-2`, `econ1210-4-3`, `econ1210-5-1`, `econ1210-6-2`,
   `econ1210-7-1`, `econ1210-7-2`, `econ1210-7-3`. Andre lenker skal sjekkes før
   bruk.
5. **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker med
   `exercise`-blokker INLINE. Unntak: prøve-/øvingseksamenkapitler.
6. **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert
   tidligere i kapitlet eller i en referert forkunnskap — ingen usett begrep,
   regel, formel eller metode.
7. **Nybegynner-inngang:** alle koder (A–N, #1–#13, A–F) og all karaktersjargong
   forklart ved første bruk per kapittel; ingen kald kode i `competenceGoals`
   eller første tekstboks; Del 0 har «Slik leser du denne boka»-boksen (type
   `text`/`tip`, ALDRI `definition`).
8. **Utledning + tolkning:** hvert eksempel og løsningsforslag med en optimering
   har både den matematiske utledningen OG enhetstolkningen; normalitet vises ved
   derivasjon, skalautbytte ved test eller $c''$-fortegn; hver figur har
   figurbeskrivelse i ord, og figur-forespørsler i oppgavetekst er besvart med
   faktisk `image`-blokk.
9. **Prøve-flervalg:** fasitmønsteret sjekket — riktig svar varierer posisjon
   (aldri «alle a»/«alle sanne»).
10. grep «Prioritet: perfekt» = 0; ingen tom collapsible (`content` med blokker).
11. Kap-referanser i fasiter/forkunnskaper er markdown-lenker til eksisterende
    filer; Del 0-pakken på plass med den eksakte kildenoten (22 dokumenter).
12. **hints** utfylt på alle exercises (unntatt den ene merkede kalde banken),
    første hint røper aldri konklusjonen; **frekvenstall** = antall listede
    belegg; meta-fasit-grep («ville ha drøftet», «en A-besvarelse ville») = 0.
13. **Matematisk sannhetskontroll:** alle fortegns-/entydighetspåstander
    parametersjekket numerisk (python3); alle fasiter etterregnet.
14. **Øktmerking:** kapitler > 45 min har løkke-tidsanslag/pausepunkter;
    prøvekapitler deklarerer «4 prøver à ~X min» + deling over flere kvelder.
15. **Juridiske deklarasjoner:** innholdet fremstiller seg ALDRI som offisielt
    eller institusjons-tilknyttet og lover aldri eksamensutfall (deklarasjonene
    vises automatisk av plattformen; ved wiring registreres emnet i
    `institusjoner.ts` og `kildegrunnlag.ts`).
16. **Verifiser rendering** (steg 4): prod-server + curl mot kapittel- og
    narrativ-ruter (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen.

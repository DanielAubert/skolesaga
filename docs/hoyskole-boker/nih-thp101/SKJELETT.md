# Bokskjelett: THP101 Funksjonell anatomi (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs THP101-arkiv 2023–2026: 6 sensorveiledninger lest oppgave
> for oppgave + 5 oppgavesett lest i sin helhet; gjenganger-score = antall av de seks
> leste sittingene et tema er observert i). Alle oppgaver, bildeserie-beskrivelser,
> tallverdier og formuleringer i boka skal være NYSKREVNE (se §6). Anatomiske navn
> (norsk/latin), leddklassifikasjoner, muskelfunksjoner og de mekaniske standardformlene
> (Newtons lover, dreiemoment) er allment fagstoff og fritt å bruke.
>
> **Anatomisk og mekanisk presisjon er kritisk.** Latinske navn, muskel-utspring/-feste,
> nerve-innervasjoner og tallfakta forfatteren er usikker på merkes `(verifiser)` for
> fagfellesjekk i fase 6 — særlig detaljer som ikke er direkte belagt i analysen. INGEN
> oppdiktede navn eller verdier. Nivået er **anvendt bevegelsesanalyse med statisk
> momentregning** — IKKE vektorbiomekanikk, arbeid/energi eller materialmekanikk (det
> ligger i søsteremnet THP203, som bygger videre på momentdelen her; se §1).

---

## 1. Bokens identitet

- **Kurs-id:** `nih-thp101`
- **Tittel:** *THP101 Funksjonell anatomi*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Norges idrettshøgskole (NIH). Visningsnavn i
  `institusjoner.ts`: «THP101 Funksjonell anatomi».
- **Arketype:** **fakta/pugg-hybrid** — et faktatungt anatomisk puggefag (nærmeste
  forbilde: MED1100/NOKUT-AFB) med en betydelig **statisk regnedel** (dreiemoment/
  momentbalanse) som følger **DNA-regnefag** (regneprosedyrer som `theorem`-blokker,
  gjennomregnede eksamenscase som A-besvarelse, drill med stigende vanskegrad). Låner
  momentliste-/moment-for-moment-logikken (fritekst rettet mot punktlister) fra
  DNA-drøfting for det store «beskriv leddet»-kortsvaret. Ingen ren DNA-mal passer;
  strukturen er skreddersydd og dokumentert i §2.
- **Kapittelantall:** 30 (Del 0: 2 · Del 1: 3 · Del 2: 3 · Del 3: 3 · Del 4: 4 ·
  Del 5: 5 · Del 6: 2 · Del 7: 4 · Del 8 (eksamenstrening): 4)
- **Estimert totaltid:** ~1830 minutter (~30,5 timer) fordelt per kapittel under.
- **Quiz totalt:** **596** (gulv ≥500) · **Flashcards totalt:** **720** (gulv ≥500)

**Pitch:** THP101 er et obligatorisk grunnemne på bachelor i idrettsvitenskap ved NIH,
undervist av emneansvarlig Ola Eriksrud, og avlegges av *hvert nytt kull* (aktivt hver
studieår) — en stor, fornybar målgruppe. Faget er **anatomifundamentet** i THP-klyngen:
det beskriver bevegelsesapparatets struktur og analyserer idrettsbevegelser mekanisk.
Det avgjørende strukturvalget: eksamen er én **skriftlig skoleeksamen med to deler og
to helt ulike svarlogikker**:

- **DEL 1 (flervalg, ~40 poeng) — MED NEGATIV RETTING.** 32–35 fler-velg-/enkelt-velg-
  oppgaver (2025–26-nivået). For de fleste flervalgsoppgavene gir hvert riktig kryss
  **+1** og hvert feil kryss **−1**, men man kan ikke ende under 0 på en enkeltoppgave.
  Rene enkelt-velg-oppgaver (f.eks. «hva er utøverens tyngde?») gir typisk 2 poeng.
  Rettemekanikken straffer gjetting: boka må trene **sikker** kunnskap, ikke «i tvil».
- **DEL 2 (kortsvar, eksplisitt 60 poeng).** Fritekst i tre underarketyper: (a) det
  store **«beskriv leddet» (35 p)** — roterende ledd (skulder/hofte/kne/ankel/virvelsøyle/
  albue) med fast trestegsmal; (b) et **mindre ledd/segment (17 p)**; (c) **statisk
  biomekanikk-regning (5–15 p)** — tyngde G = m·g, momentbalanse ΣΤ = 0 → muskelkraft,
  med utvidelser (to ytre krefter, trigonometrisk kraftarm) i 2025–26.

Boka er bygd baklengs fra tre ting: (1) de to svarlogikkene (**minuspoeng-disiplinert
flervalg** vs. **fullstendig momentliste-kortsvar + vist momentregning**), (2) de faste
gjengangerne som drilles til de sitter (leddklassifikasjon, fot-vs-hånd-knokler, muskel-
til-bevegelse, plan+akse, det store beskriv-leddet-kortsvaret, Newtons lover i hopp/
sprint, momentbalanse), og (3) sensorfellene i §5 (særlig fot/hånd-forveksling og
plan/akse-paring, som er de klassiske minuspoeng-fellene).

**Kalibreringsregel (ufravikelig):** THP101 er IKKE fysiologi eller trening. Muskel-
fysiologi (kontraksjonsmekanisme, energiomsetning, fibertyper) forutsettes fra søster-
emnet [THP100 Humanfysiologi](/nih-thp100) og skal IKKE gjentas her utover korte
forkunnskaps-lenker. THP101 dekker bevegelsesapparatets **struktur og mekanikk**:
knokler, ledd, leddbånd, muskler (utspring/feste/funksjon), perifere nerver, og statisk
bevegelsesanalyse. Vektorbiomekanikk, arbeid/energi og materialmekanikk ligger i
[THP203 Basal biomekanikk](/nih-thp203), som bygger direkte videre på momentdelen
(Del 7) her.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart: to deler, to svarlogikker) → Del 1 (anatomisk
grunnlag) → Del 2 (leddlære) → Del 3 (skjelett) → Del 4 (muskelatlas) → Del 5 (de store
leddene, «beskriv»-malen) → Del 6 (nevro-/karanatomi) → Del 7 (statisk momentregning) →
Del 8 (eksamenstrening).** Delene er ordnet etter faglig avhengighet (prerequisites peker
bakover), IKKE etter frekvens; frekvens/vekt styrer *omfang og drillmengde* innen hver del.

| Del | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart: to deler, to svarlogikker | 2 | perfekt (meta) | De to formatene, minuspoeng-regelen (Del 1) og beskriv-/regne-malene (Del 2) må etableres FØR fagstoffet. |
| 1 | Anatomisk grunnlag: retning, plan, akser og bevegelser | 3 | perfekt | Score 6/6 (bevegelse+plan+akse). Den bærende paringsregelen (sagittal↔mediolateral osv.) er grunnlag for hele del 1-flervalget og all bevegelsesanalyse. |
| 2 | Leddlære og bindevev | 3 | perfekt | Score 6/6 (leddklassifikasjon; bindevev/støttevev). Ekte vs. uekte ledd + brusktyper er sikre flervalgspoeng OG grunnlaget for «beskriv leddet». |
| 3 | Skjelettet: knokler og landemerker | 3 | perfekt | Score 5–6/6. Knokler i fot vs. hånd (6/6) og landemerker (5/6) — den klassiske minuspoeng-fellen. Egen fot-vs-hånd-kontrastdrill. |
| 4 | Muskelatlas: utspring, feste og funksjon | 4 | perfekt | Score 6/6 (muskelfunksjon). Kjernen i både del 1 (muskel-til-bevegelse) og del 2c (beskriv fem muskler). Fire regionkapitler dekker alle musklene i analysens §6. |
| 5 | De store leddene: beskriv-leddet-malen | 5 | perfekt | Score 6/6 (35 p-kortsvaret, roterende ledd). Ett fullstendig kapittel per stort ledd (skulder, hofte, kne, ankel/fot, virvelsøyle + albue/skulderbue). Tyngste del 2-poengene. |
| 6 | Nevro- og karanatomi | 2 | kunne | Score 3–5/6. Spinalnerver (6/6, lettpoeng), perifere nerver (5/6), arteriell vei (4/6), kliniske vignetter (droppfot/impingement, 3/6) — kompakte faktabolker. |
| 7 | Statisk biomekanikk: tyngde, Newton og momentregning | 4 | perfekt | Score 6/6 (G=m·g, Newtons lover, dreiemoment/momentbalanse). Regnefag-DNA. Full progresjon til 2025–26-nivået (to krefter, trigonometrisk kraftarm) — skiller A fra C. |
| 8 | Eksamenstrening | 4 | perfekt (meta) | Én sjangerdrill per svarlogikk (flervalg m/minuspoeng · beskriv-leddet · momentregning) + én komplett to-delt øvingseksamen. |

Rasjonale: alle temaer i analysens §6 dekkes; prioriteringen styrer *dybde og drillmengde*.
De to score-6/6-tyngdepunktene — muskelatlas + de store leddene (del 4–5) på anatomisiden,
og momentregning (del 7) på mekanikksiden — får flest kapitler og tyngst kvote. Nevro-/
karanatomi (del 6) dekkes solid men kompakt (lavere poengvekt, jf. §7 «middels/lavere»).

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: to deler, to svarlogikker |
| 1 | Anatomisk grunnlag: retning, plan, akser og bevegelser |
| 2 | Leddlære og bindevev |
| 3 | Skjelettet: knokler og landemerker |
| 4 | Muskelatlas: utspring, feste og funksjon |
| 5 | De store leddene: beskriv-leddet-malen |
| 6 | Nevro- og karanatomi |
| 7 | Statisk biomekanikk: tyngde, Newton og momentregning |
| 8 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Del 1 – flervalg (MED NEGATIV RETTING der ikke annet er nevnt):** `D1-ANAT` ren
anatomi-avkrysning (knokler/bånd/ekte ledd, med distraktorer fra nabo-region) · `D1-PPA`
bevegelse + plan + akse (kryss av bevegelse + korrekt plan/akse-par) · `D1-MUS` muskler +
virkemåte fra bildeserie (aktive muskler + konsentrisk/eksentrisk/isometrisk) · `D1-FAKTA`
kort begreps-/faktaspørsmål, **enkelt-velg 2 p, INGEN minuspoeng** (tyngde, spinalnerve-
antall, bindevevstype, nerve-innervasjon, arteriell vei) · `D1-VIGN` kvalitativ mekanikk/
klinisk vignett (minst muskelkraft-posisjon, droppfot, impingement).

**Del 2 – kortsvar (fritekst, ingen minuspoeng):** `D2-LEDD35` det store «beskriv leddet»
(35 p, trestegsmal a/b/c) · `D2-LEDD17` mindre ledd/segment (17 p, kortere mal) · `D2-REGN`
statisk biomekanikk-regning (5–15 p; **vist utregning + symbolform + enhet + mekanisk
tolkning** kreves) · `D2-MUS5` beskriv fem muskler i detalj (utspring + feste + funksjon
per ledd).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

`E1` forveksle fot- og håndknokler (metatarsi/metacarpi, naviculare/lunatum, calcaneus/
triquetrum) — klassisk minuspoeng-felle · `E2` feil plan/akse-par (frontalplan paret med
mediolateral akse i stedet for anteroposterior; koronalplan som distraktor) · `E3` malleoli/
tuberositas tibiae regnet som «fotknokler» (hører til legg-/leddregionen) · `E4` ufullstendig
leddklassifikasjon (sutura/synkondrose/symfyse/gomphose regnet som ekte/synoviale ledd) ·
`E5` blande ipsilateral/kontralateral rotasjon i virvelsøylen (obliquus externus =
kontralateral, internus = ipsilateral) · `E6` virkemåte-forveksling (svare «konsentrisk»
der muskelen bremser = eksentrisk, typisk nedgangsfase/landing) · `E7` glemme g = 9,8 eller
bruke masse (kg) der tyngde G (N) skal inn i momentregning · `E8` feil kraftarm (bruke r_m
som r_G eller omvendt; glemme sin θ-leddet i trigonometrivarianten) · `E9` manglende
begrunnelse i konsekvensoppgaver (oppgi nytt tall uten å forklare *hvorfor* muskelkraften
endres) · `E10` nerve-innervasjon-feil (n. musculocutaneus forvekslet med n. radialis;
n. tibialis med n. fibularis) · `E11` ufullstendig «beskriv leddet» (ramse muskler uten
klassifikasjon/leddflater/bånd → bare delpoeng) · `E12` muskeldetalj uten alle tre elementer
(utspring + feste + funksjon per ledd) · `E13` norsk/delvis navn der latin kreves i
«beskriv»-oppgaver · `E14` gjette «i tvil» på del 1-flervalg (minuspoeng: hvert feil kryss −1).

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Latinsk presisjon.** Muskler, knokler, ledd og bånd navngis korrekt på latin;
   delvise/norske navn gir sjelden full uttelling i «beskriv»-oppgavene (E13).
2. **Fullstendighet i «beskriv leddet».** Et A-svar dekker ALLE malpunktene: klassifikasjon
   (latin), leddflater med konveks/konkav-relasjon, leddbånd, kapsel, spesialstrukturer
   (labrum glenoidale, menisker) OG muskler gruppert etter posisjon. Bare muskler = delpoeng
   (E11).
3. **Muskel-til-bevegelse-kobling.** I oversiktstabellen premieres at hver muskels bidrag
   til hver bevegelse er korrekt (inkl. sekundærfunksjoner, f.eks. m. deltoideus flekterer,
   abduserer OG ekstenderer).
4. **Muskeldetalj = utspring + feste + funksjon.** Alle tre må med; funksjon spesifiseres
   per ledd muskelen krysser (gastrocnemius: plantarfleksjon i ankel OG fleksjon i kne) (E12).
5. **Regneoppgaver: oppsett + enhet + tolkning.** Fullt utregningsoppsett i symbolform FØR
   innsetting; korrekt enhet (N, Nm); i konsekvensoppgaver begrunnes *retningen* på endringen
   mekanisk (kortere ytre kraftarm → mindre muskelkraft), ikke bare et nytt tall (E9).
6. **Virkemåte-logikk.** Skill bevegelsesretning fra virkemåte: en muskel som kontrollerer
   en bevegelse *mot* tyngdekraften (bremser) jobber eksentrisk selv om leddet «lukker seg»
   (E6).
7. **Del 1 minuspoeng-disiplin.** Hvert riktig kryss +1, hvert feil kryss −1 (laveste
   oppgavesum 0). Kryss KUN alternativer du er sikker på — «i tvil» lønner seg ikke (E14).
   (Enkelt-velg-faktaoppgavene, D1-FAKTA 2 p, har ingen minuspoeng → der svarer man alltid.)

### Arketypetilpasning (dokumenterte valg og avvik fra DNA-malene)

1. **Én to-delt eksamen, to svarlogikker (hovedstruktur).** I motsetning til MED1100s tre
   parallelle delbøker er dette ÉN eksamen, men de to delene har helt ulik svarlogikk:
   Del 1 = minuspoeng-disiplinert flervalg (sikker kunnskap), Del 2 = fullstendig fritekst
   (beskriv-leddet-momentlister + vist momentregning). Boka driller begge separat i Del 8.
2. **Hybrid arketype.** Del 7 (statisk momentregning) og regnedelene ellers følger
   **DNA-regnefag**: `theorem`-blokker med **regneprosedyrer** (algoritmisk fremgangsmåte),
   gjennomregnede eksamenscase skrevet som A-besvarelse med vist utregning + enheter +
   mekanisk tolkning, og drill med stigende vanskegrad som ender på 2025–26-nivå. Resten
   (retning/plan/akse, leddlære, skjelett, muskelatlas, nevro-/karanatomi) er **fakta/pugg**
   som MED1100/NOKUT-AFB: definisjonsblokker (flashcard-kilden), og for det store kortsvaret
   fritekst-momentlister (beskriv-leddet-malen). Del 1-flervalget er anatomi-/latin-drill.
3. **«Symbol- og formelliste» → «Nøkkelfakta- og formelliste» (per delkapittel).** README-
   kravet omtolkes: hvert delkapittel får en `collapsible` **«Nøkkelfakta- og formelliste»**
   rett etter Forkunnskaper. For regnekapitler (Del 7) = alle formler (G=m·g, τ=F·r, ΣΤ=0,
   r·sin θ) + g-verdi + variabelforklaring (som DNA-regnefag krever). For anatomikapitler =
   latinske kjernenavn, leddklassifikasjonene, plan/akse-paringene og muskel-funksjon-kjedene
   som må sitte utenat. Kapitler helt uten symboler/formler kan droppe formeldelen, men
   beholder nøkkelfakta-listen (latinske navn).
4. **Todelt drill.** Quiz = flervalgspresisjon (Del 1-sjangrene D1-ANAT/PPA/MUS/FAKTA/VIGN,
   inkl. minuspoeng-bevisste «kryss KUN det sikre»-varianter); flashcards = fakta/latin/
   muskel-utspring-feste-funksjon/leddklassifikasjon/plan+akse utenat (faget er ekstremt
   faktatungt → HØY flashcard-tetthet, MED1100/nokut-afb-lærdommen); `example`/`exercise` =
   beskriv-leddet-momentlister (Del 5) og momentregning (Del 7).
5. **Eksamensvinkel PER DEL.** Hver `tip` **Eksamensvinkel** sier eksplisitt om kapitlet
   trener **Del 1 (flervalg, minuspoeng)** eller **Del 2 (kortsvar)**, med sjangerkode,
   gjenganger-score og hva sensor ser etter — og for Del 1-kapitler alltid minuspoeng-noten.
6. **Ingen oppdiktede verdier.** Latinske navn, utspring/feste, nerve-innervasjoner og
   g-verdi forankres i standard fagstoff/analysen; usikre detaljer merkes `(verifiser)`.
   Alle regneoppgaver har NYSKREVNE tallverdier (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilken DEL (1/2), sjangerkode(r), gjenganger-score, retteform
   (Del 1 = minuspoeng-note; Del 2 = fullstendighetskrav), og hva sensor ser etter. Fylles
   fra Eksamensbelegg — forfatteren finner IKKE på score-tall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav: THP100 for fysiologi, THP203 for videreført biomekanikk), etterfulgt av
   `collapsible` **Nøkkelfakta- og formelliste** (formler + g-verdi + variabelforklaring for
   regnekapitler; latinske navn + klassifikasjoner + plan/akse-paringer + muskelfunksjon-
   kjeder for anatomikapitler — per delkapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor/hvor ofte det
   testes.
4. `definition` **Kjernefakta** — begreper, latinske navn, leddklassifikasjoner, muskel-
   utspring/feste/funksjon, plan/akse-paringer i EMNETS terminologi. **Toppnivå med `title`
   — dette er flashcard-kilden.**
5. `theorem`/`text` — for regnekapitler (Del 7): **Regneprosedyre** (algoritmisk
   fremgangsmåte, theorem-blokk) + resultater i emnets notasjon; for anatomikapitler:
   **Funksjons-/mekanismekjeder** (f.eks. muskel-til-bevegelse-oppslag, plan/akse-paringsregel,
   ipsi-/kontralateral-logikk) der rekkefølge/relasjon er kritisk.
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Regnecase (Del 7) skrives som A-besvarelse med symbolform + vist utregning + enhet +
   mekanisk tolkning; beskriv-leddet-eksempler (Del 5) som full-pott-momentliste med
   malpunktene og delpoeng synlige; bildeserie-analyser som «bevegelse → plan/akse →
   muskler → virkemåte».
7. `warning` **Typiske feil** — feilkodene (E1–E14) som gjelder temaet, med minuspoeng-
   fellene (E1/E2/E14) uthevet i Del 1-kapitler.
8. `exercise` × 6–12 — stigende, i kapitlets sjangre (Del 1-flervalg og/eller Del 2-kortsvar/
   regning), alle med `solution` + `hints`. Regnekapitler: 2–3 innøving, 2–4 standard, 2–4
   eksamensklone. Hver oppgave merket med sjangerkode + del.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 8) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = del + form/gjenganger-score + sjangerkoder +
> prioritetsklasse. **Faktakontrakt** = latinske navn/klassifikasjoner/muskeldata som SKAL
> med. **Regneprosedyre** (regnekapitler) = algoritmisk fremgangsmåte som theorem-blokk.
> **Funksjonskjeder** = muskel-til-bevegelse-/paringslogikk trinnvis. **Fritekst-momentlister**
> (Del 2) = modellsvar `example`-blokkene skal levere. **MC-drill** = flervalgssjangrene
> kapitlet øver. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: to deler, to svarlogikker

#### Kapittel 0.1: To deler, to svarlogikker
**id:** `nih-thp101-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvordan THP101-eksamen er bygd opp — Del 1 flervalg (~40 p) med negativ
  retting og Del 2 kortsvar (60 p) med tre underarketyper — hvilke temaer som testes hvor,
  og hvordan boka brukes mot begge delene.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023–2026). Skal formidle: (a) **to deler**
  — Del 1 flervalg ~40 p, Del 2 kortsvar eksplisitt 60 p, sum 100 `(verifiser)`; (b) **Del 1
  minuspoeng**: de fleste flervalgsoppgaver +1/−1 per kryss, laveste oppgavesum 0; enkelt-velg-
  faktaoppgaver (D1-FAKTA) 2 p uten minuspoeng; (c) **Del 2 tre underarketyper**: beskriv
  leddet 35 p (D2-LEDD35), mindre ledd/segment 17 p (D2-LEDD17), momentregning 5–15 p
  (D2-REGN); (d) **hjelpemidler**: kun enkel kalkulator — faget premierer memorert latin +
  mekanisk resonnement; (e) **volumutvikling**: Del 1 utvidet til 32–35 oppgaver og regnedelen
  tyngre fra 2025–26 (to krefter, trigonometri) → boka dimensjonerer for 2025–26. Prioritet:
  perfekt (meta).
- **Faktakontrakt:** eksamens-oversiktstabellen (del/form/poeng/svartype/retting); hvilke
  temaer i hvilken del (kart til Del 1–7); minuspoeng-regelen presist.
- **Funksjonskjeder:** ingen (kartkapittel).
- **Fritekst-momentlister:** «Slik ser en oppgave ut i hver del» — ett nyskrevet minieksempel
  per sjanger (en D1-ANAT + en D1-PPA fra Del 1; en D2-LEDD35-utdrag + en D2-REGN fra Del 2)
  med hvordan poeng høstes.
- **MC-drill:** gjenkjenn del og sjanger fra oppgaveformuleringen.
- **Typiske feil:** tro at Del 1 ikke har minuspoeng (E14); tro at del 2 gir uttelling for
  norske navn (E13).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Eksamensstrategi — minuspoeng, beskriv-malen og regneføring
**id:** `nih-thp101-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp101-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i hver del — **minuspoeng-disiplinen på Del 1** (kryss
  kun det sikre), den fullstendige **beskriv-leddet-malen** (Del 2a) og **regneføringen med
  symbolform + enhet + mekanisk tolkning** (Del 2c).
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2023→. Prioritet:
  perfekt (meta). Skal operasjonalisere de syv sensor-kredittreglene i §2, med **minuspoeng-
  strategien som egen, uthevet strateginote**: på Del 1-flervalg (+1/−1) lønner det seg IKKE
  å krysse «i tvil» — hvert feil kryss trekker; men enkelt-velg-faktaoppgavene (2 p, ingen
  minuspoeng) svarer man alltid på.
- **Faktakontrakt:** de syv kredittreglene; **minuspoeng-beslutningsregelen** (kryss kun sikre
  alternativer på flervalg m/negativ retting; svar alltid på D1-FAKTA og hele Del 2); den faste
  **beskriv-leddet-trestegsmalen** (a) klassifikasjon+leddflater+bånd+kapsel+spesialstrukturer+
  muskler gruppert etter posisjon, (b) bevegelser + muskler per bevegelse (tabell), (c) fem
  muskler med utspring+feste+funksjon; **regneføringsmalen** (symbolform → sett inn → enhet →
  tolk mekanisk).
- **Regneprosedyre (theorem):** «slik føres en momentoppgave for full pott» (skriv G = m·g →
  sett opp ΣΤ = 0 i symbolform → identifiser r_G og r_m → løs for F_m → oppgi enhet (N) →
  tolk retning ved endret kraftarm).
- **Fritekst-momentlister:** samme ledd besvart komplett vs. mangelfullt (bare muskler) med
  margnotat om hvor delpoengene faller (E11); en momentoppgave løst med og uten mekanisk
  tolkning (E9); en flervalgsoppgave løst med minuspoeng-disiplin (kryss kun det sikre, E14).
- **MC-drill:** «skal du krysse her?» — gjenkjenn om oppgaven har minuspoeng; gjenkjenn hvilket
  malpunkt et beskriv-svar mangler.
- **Typiske feil:** `E14` (gjette på Del 1-flervalg), `E11` (ufullstendig beskriv-ledd), `E9`
  (regne uten mekanisk tolkning), `E13` (norske navn i beskriv-oppgaver).
- **Kvote:** 12 quiz / 10 flashcards.

### Del 1 — Anatomisk grunnlag: retning, plan, akser og bevegelser

#### Kapittel 1.1: Retningsterminologi og referansesystem
**id:** `nih-thp101-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-thp101-0-2`

- **Kapitteltype:** tema (Del 1).
- **Description:** Anatomisk referansestilling og retningsbegrepene (anterior/posterior,
  medial/lateral, proksimal/distal, superior/inferior, kranial/kaudal) — språket alle
  senere kapitler bruker.
- **Eksamensbelegg:** Del 1, grunnlagsstoff (inngår i D1-ANAT/PPA på hver sitting som
  forutsetning). Form: D1-FAKTA (2 p), D1-ANAT. Prioritet: perfekt (grunnlag; ren pugg).
- **Faktakontrakt:** anatomisk referansestilling; **anterior/posterior (ventral/dorsal),
  medial/lateral, proksimal/distal, superior/inferior, kranial/kaudal**, samt overflate-
  begrepene superficial/profund; hva som er referansepunkt for hvert par.
- **Funksjonskjeder:** ingen regnekjede; parvis kontrast-oppslag (hvert begrep + motpart +
  eksempel på kropp).
- **MC-drill:** plasser en struktur relativt til en annen (D1-FAKTA); velg riktig retningspar.
- **Typiske feil:** blande medial/lateral med proksimal/distal; feil referansestilling.
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 1.2: De tre plan og de tre akser — paringsregelen
**id:** `nih-thp101-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-1-1`

- **Kapitteltype:** tema (Del 1, kjernemønster).
- **Description:** De tre bevegelsesplan (sagittal, frontal, transversal) og de tre akser
  (mediolateral, anteroposterior, vertikal), og den bærende **paringsregelen** — den
  hyppigste plan/akse-fellen på eksamen.
- **Eksamensbelegg:** Del 1, **bevegelse+plan+akse score 6/6** (hver eneste sitting). Form:
  D1-PPA (kryss bevegelse + korrekt plan/akse-par). Prioritet: perfekt. Plan/akse-fellen
  (E2) er en dokumentert minuspoeng-gjenganger.
- **Faktakontrakt:** **sagittalplan ↔ mediolateral akse** (fleksjon/ekstensjon); **frontalplan
  (= koronalplan) ↔ anteroposterior akse** (ab-/adduksjon); **transversalplan ↔ vertikal
  (longitudinell) akse** (rotasjon); en bevegelse skjer *i* et plan og *rundt* aksen som står
  vinkelrett på planet. Koronalplan = frontalplan (vanlig distraktor).
- **Funksjonskjeder:** (1) paringsregelen som fast oppslag (plan → vinkelrett akse →
  bevegelsestype); (2) hvordan man leser av plan/akse fra en bildefase.
- **MC-drill:** gitt bevegelse → kryss plan OG akse (D1-PPA, minuspoeng); avvis feil par
  (frontal↔mediolateral, E2).
- **Typiske feil:** `E2` (frontalplan paret med mediolateral i stedet for anteroposterior;
  koronal som distraktor), `E14` (gjette på par man ikke er sikker på).
- **Kvote:** 16 quiz / 24 flashcards.

#### Kapittel 1.3: Leddbevegelser og muskulær virkemåte
**id:** `nih-thp101-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-1-2`

- **Kapitteltype:** tema (Del 1).
- **Description:** Bevegelsesnavnene (fleksjon/ekstensjon, ab-/adduksjon, rotasjon, dorsi-/
  plantarfleksjon, inversjon/eversjon, pronasjon/supinasjon, protraksjon/retraksjon,
  elevasjon/depresjon, sirkumduksjon) og den avgjørende **virkemåte-logikken** (konsentrisk/
  eksentrisk/isometrisk).
- **Eksamensbelegg:** Del 1, **muskulær virkemåte score 6/6** (nesten alltid koblet til
  bildeserie). Form: D1-MUS (aktive muskler + konsentrisk/eksentrisk/isometrisk), D1-PPA.
  Prioritet: perfekt.
- **Faktakontrakt:** alle bevegelsene i analysens §6 med plan/akse-tilknytning; **pronasjon/
  supinasjon** som sammensatt fotbevegelse (dorsi-/plantarfleksjon + inn-/utoverrotasjon +
  ab-/adduksjon); **konsentrisk** (muskelen forkortes, skaper bevegelsen), **eksentrisk**
  (muskelen forlenges, bremser bevegelsen — jobber MOT tyngdekraften), **isometrisk** (ingen
  lengdeendring, holder); agonist/antagonist/synergist/fiksator; isokinetisk/isotonisk som
  distraktorer.
- **Funksjonskjeder:** (1) virkemåte-regelen: bremser muskelen en bevegelse mot tyngdekraften
  → eksentrisk, selv om leddet «lukker seg» (nedgangsfase knebøy, landing); (2) sammensatt
  bevegelse (pronasjon = tre komponenter).
- **MC-drill:** gitt bildefase → hvilke muskler aktive + hvilken virkemåte (D1-MUS,
  minuspoeng); klassifiser bevegelse.
- **Typiske feil:** `E6` (konsentrisk der det skal være eksentrisk, nedgang/landing), blande
  pronasjon/supinasjon-komponentene, `E14`.
- **Kvote:** 16 quiz / 24 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-thp101-1-prove`): (1) *Retning og referanse* —
retningspar-plassering (D1-FAKTA). (2) *Plan og akse* — bevegelse↔plan↔akse-paring
(D1-PPA, minuspoeng). (3) *Bevegelser og virkemåte* — klassifiser bevegelse + konsentrisk/
eksentrisk/isometrisk fra bildeserie (D1-MUS). (4) *Blandet Del 1* — kombinert plan/akse +
virkemåte.

### Del 2 — Leddlære og bindevev

#### Kapittel 2.1: Leddklassifikasjon — ekte og uekte ledd
**id:** `nih-thp101-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-1-1`

- **Kapitteltype:** tema (Del 1 + grunnlag Del 2).
- **Description:** Synovialleddtypene (kuleledd, hengselledd, salledd, ellipsoidea, dreieledd,
  planledd) vs. uekte ledd (sutura, synkondrose, symfyse, gomphose) — «hvilke er ekte/
  synovialledd?» kommer på hver sitting.
- **Eksamensbelegg:** Del 1, **leddklassifikasjon score 6/6** («hvilke er ekte/synovialledd?»).
  Form: D1-ANAT (avkrysning m/minuspoeng). Prioritet: perfekt. Klassifikasjonsfellen (E4) er
  dokumentert.
- **Faktakontrakt:** **synovialledd (ekte)**: art. spheroidea (kuleledd), ginglymus
  (hengselledd), art. sellare (salledd), art. ellipsoidea (eggledd), art. trochoidea
  (dreieledd), art. plana (planledd) — med typisk kroppseksempel og frihetsgrader; **uekte
  ledd**: sutura (fibrøs, kranium), synkondrose (brusk), symfyse (fiberbrusk, symphysis
  pubica/mellomvirvelskive), gomphose (tann i kjeve); felles synovialledd-anatomi (leddkapsel,
  leddhinne/synovia, leddbrusk, leddspalte); kongruens/stabilitet.
- **Funksjonskjeder:** (1) ekte-vs-uekte-avgjørelse (finnes leddspalte + synovia? → ekte);
  (2) leddtype → frihetsgrader → mulige bevegelser.
- **MC-drill:** kryss av HVILKE i en liste som er synovialledd (D1-ANAT, minuspoeng — uekte
  ledd som distraktorer); koble leddtype til kroppseksempel.
- **Typiske feil:** `E4` (sutura/synkondrose/symfyse/gomphose krysset som ekte), blande
  sellare/ellipsoidea, `E14`.
- **Kvote:** 16 quiz / 26 flashcards.

#### Kapittel 2.2: Bindevev og støttevev
**id:** `nih-thp101-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp101-2-1`

- **Kapitteltype:** tema (Del 1).
- **Description:** Bindevevs- og støttevevstypene — løst/fast bindevev, hyalinbrusk,
  fiberbrusk (mellomvirvelskive), elastisk brusk, kompakt/spongiøst bein — testet særlig
  på hvilken brusktype en gitt struktur har.
- **Eksamensbelegg:** Del 1, **bindevev/støttevev score 6/6** (mellomvirvelskive, leddbånd,
  brusk). Form: D1-FAKTA (2 p), D1-ANAT. Prioritet: perfekt (kompakt lettpoeng).
- **Faktakontrakt:** **løst bindevev** vs. **fast bindevev** (sener/leddbånd, tett
  kollagen); **hyalinbrusk** (leddbrusk, luftrør), **fiberbrusk** (mellomvirvelskivens anulus
  fibrosus, menisker, symfyse), **elastisk brusk** (ørebrusk, epiglottis); **kompakt** vs.
  **spongiøst bein**; mellomvirvelskive = anulus fibrosus (fiberbrusk) + nucleus pulposus.
  `(verifiser)` finere histologiske detaljer.
- **Funksjonskjeder:** (1) struktur → vevstype-oppslag (menisk = fiberbrusk; leddflate =
  hyalinbrusk).
- **MC-drill:** hvilken brusktype har struktur X (D1-FAKTA); løst vs. fast bindevev-eksempler.
- **Typiske feil:** blande hyalinbrusk/fiberbrusk (leddflate vs. menisk/skive); regne leddbånd
  som brusk.
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 2.3: Leddbånd — kne, ankel/fot og hofte
**id:** `nih-thp101-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-2-1`

- **Kapitteltype:** tema (Del 1 + grunnlag Del 2).
- **Description:** Leddbåndene som testes hyppigst — korsbånd og sidebånd i kneet, laterale/
  mediale ankelbånd, hofteleddets bånd — med distraktorer fra nabo-region.
- **Eksamensbelegg:** Del 1, **leddbånd (kne/ankel/hofte) score 6/6**. Form: D1-ANAT
  (avkrysning m/minuspoeng, iliolumbale blant ankelbånd osv.). Prioritet: perfekt. Bånd-
  detaljene brukes igjen i Del 5 (beskriv leddet).
- **Faktakontrakt:** **kne**: lig. cruciatum anterius/posterius (korsbånd), lig. collaterale
  mediale/tibiale + laterale/fibulare (sidebånd), lig. patellae; **ankel/fot**: lig.
  talofibulare anterius/posterius, lig. calcaneofibulare (laterale), lig. deltoideum
  (mediale); **hofte**: lig. iliofemorale, pubofemorale, ischiofemorale; **bekken/rygg** som
  distraktorer: lig. sacrotuberale, iliolumbale, inguinale.
- **Funksjonskjeder:** (1) hvilket bånd hindrer hvilken bevegelse (fremre korsbånd hindrer
  fremre tibiaglidning); (2) bånd → leddregion-oppslag (til distraktor-gjenkjenning).
- **MC-drill:** kryss HVILKE bånd hører til kneet/ankelen (D1-ANAT, minuspoeng — nabo-region-
  distraktorer); koble bånd til funksjon.
- **Typiske feil:** krysse iliolumbale/inguinale blant ankel-/knebånd (E1-slektning), blande
  laterale/mediale ankelbånd, `E14`.
- **Kvote:** 16 quiz / 26 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-thp101-2-prove`): (1) *Ekte og uekte ledd* — kryss
synovialledd, unngå uekte-distraktorer (D1-ANAT, minuspoeng, E4). (2) *Bindevev og brusk* —
brusktype for gitt struktur (D1-FAKTA). (3) *Leddbånd* — bånd↔region + funksjon, nabo-
region-distraktorer (D1-ANAT). (4) *Blandet Del 2* — leddtype + bånd + brusk kombinert.

### Del 3 — Skjelettet: knokler og landemerker

#### Kapittel 3.1: Underekstremitetens knokler og landemerker
**id:** `nih-thp101-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-1-1`

- **Kapitteltype:** tema (Del 1).
- **Description:** Bekken- og benknoklene med landemerker — os coxae, os femoris, tibia/
  fibula — og de anatomiske punktene som roterer inn i avkrysningsoppgavene.
- **Eksamensbelegg:** Del 1, **anatomiske landemerker score 5/6** (os femoris, os coxae
  roterer). Form: D1-ANAT (kryss landemerker på gitt knokkel, minuspoeng). Prioritet:
  perfekt.
- **Faktakontrakt:** **os coxae** (crista iliaca, spina iliaca anterior superior, tuber
  ischiadicum, acetabulum); **os femoris** (caput, collum, trochanter major/minor, linea
  intertrochanterica, linea aspera); **tibia** (tuberositas tibiae, malleolus medialis,
  condyler) og **fibula** (malleolus lateralis) — med presisering at malleoli/tuberositas
  tibiae hører til legg-/leddregionen, IKKE foten (E3).
- **Funksjonskjeder:** (1) landemerke → knokkel-oppslag; (2) landemerke → muskelfeste-
  kobling (linea aspera = adduktorfester osv., bygger mot Del 4).
- **MC-drill:** kryss HVILKE punkter ligger på os femoris/os coxae (D1-ANAT, minuspoeng);
  avvis landemerker fra annen knokkel.
- **Typiske feil:** `E3` (malleoli/tuberositas tibiae som «fotknokler»), blande trochanter
  major/minor, `E14`.
- **Kvote:** 14 quiz / 24 flashcards.

#### Kapittel 3.2: Overekstremitetens og aksialskjelettets knokler
**id:** `nih-thp101-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-1-1`

- **Kapitteltype:** tema (Del 1).
- **Description:** Skulderbue, overarm og virvler med landemerker — scapula, humerus, og de
  tre virveltypene — grunnlaget for skulder- og virvelsøyle-kortsvarene i Del 5.
- **Eksamensbelegg:** Del 1, **landemerker score 5/6** (humerus, scapula, lumbalvirvel
  roterer); virvler + antall ledd på en virvel (2025–26). Form: D1-ANAT, D1-FAKTA.
  Prioritet: perfekt.
- **Faktakontrakt:** **scapula** (acromion, cavitas glenoidalis, spina scapulae, processus
  coracoideus, angulus inferior); **humerus** (caput, collum, tuberculum majus/minus,
  tuberositas deltoidea, trochlea, capitulum); **clavicula**; **virvler** — cervikale (7,
  med atlas/axis), thorakale (12, ribbeleddflater), lumbale (5, kraftige); processus
  spinosus/transversus, corpus, arcus; antall ledd på en typisk virvel (mellomvirvel-
  skiveledd + fasettledd + evt. ribbeledd) `(verifiser antall)`.
- **Funksjonskjeder:** (1) landemerke → knokkel; (2) virveltype → kjennetegn (thorakal =
  ribbeleddflater).
- **MC-drill:** kryss landemerker på scapula/humerus (D1-ANAT, minuspoeng); virveltype-
  gjenkjenning; antall ledd på en virvel (D1-FAKTA).
- **Typiske feil:** blande tuberculum majus/minus, forveksle acromion/processus coracoideus,
  feil virveltype-antall, `E14`.
- **Kvote:** 14 quiz / 24 flashcards.

#### Kapittel 3.3: Fotens og håndens knokler — kontrastdrill (minuspoeng-fellen)
**id:** `nih-thp101-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-3-1`

- **Kapitteltype:** tema/drill (Del 1, minuspoeng-felle).
- **Description:** Fotens tarsal-/metatarsalben mot håndens karpal-/metakarpalben, satt opp
  som eksplisitt kontrastdrill — den aller vanligste minuspoeng-fellen på eksamen.
- **Eksamensbelegg:** Del 1, **knokler i fot vs. hånd score 6/6** — gjennomgående felle-
  alternativer (metatarsi blant metacarpi, naviculare/lunatum, calcaneus/triquetrum). Form:
  D1-ANAT (avkrysning m/minuspoeng). Prioritet: perfekt. Dette er den drillbare kjernen i
  §5 typiske feil.
- **Faktakontrakt:** **fotens knokler** — tarsalben: talus, calcaneus, os naviculare, os
  cuboideum, ossa cuneiformia (3); metatarsalben (I–V); phalanges. **Håndens knokler** —
  karpalben: os scaphoideum, lunatum, triquetrum, pisiforme, trapezium, trapezoideum,
  capitatum, hamatum; metakarpalben (I–V); phalanges. Eksplisitt kontrastpar-tabell
  (naviculare↔scaphoideum-lignende feller, calcaneus↔hamatum osv.).
- **Funksjonskjeder:** (1) «hører denne knokkelen til fot eller hånd?»-oppslag som fast drill;
  (2) region-eliminering (metatarsi-endelse → fot).
- **MC-drill:** kryss HVILKE i en blandet liste er fotknokler (D1-ANAT, minuspoeng — hånd-
  knokler som distraktorer, E1); og omvendt.
- **Typiske feil:** `E1` (fot-/håndknokler forvekslet — hovedfellen), `E3` (malleoli som
  fotknokkel), `E14` (gjette i tvil → minuspoeng).
- **Kvote:** 16 quiz / 28 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `nih-thp101-3-prove`): (1) *Underekstremitet* — landemerker
på os coxae/femoris + malleoli-fellen (D1-ANAT, E3). (2) *Overekstremitet og virvler* —
scapula/humerus-landemerker + virveltype (D1-ANAT/FAKTA). (3) *Fot vs. hånd* — kontrastdrill,
kryss kun fot- eller kun håndknokler (D1-ANAT, minuspoeng, E1). (4) *Blandet Del 3* — alle
regioner med nabo-distraktorer.

### Del 4 — Muskelatlas: utspring, feste og funksjon

> Kjernen i både Del 1 (muskel-til-bevegelse, D1-MUS) og Del 2c (beskriv fem muskler,
> D2-MUS5). Hvert kapittel gir muskler med **utspring + feste + funksjon per ledd** (sensor-
> kravet E12) og et muskel-til-bevegelse-oppslag. Fire regionkapitler dekker alle musklene i
> analysens §6.

#### Kapittel 4.1: Hofte- og lårmuskler
**id:** `nih-thp101-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp101-3-1`

- **Kapitteltype:** tema (Del 1 + Del 2c).
- **Description:** Muskler over hofte- og kneleddet — iliopsoas, glutealgruppen, adduktorene,
  quadriceps og hamstrings — med utspring/feste/funksjon og hvilken bevegelse hver skaper.
- **Eksamensbelegg:** Del 1+2, **muskelfunksjon score 6/6** (fleksjon/ekstensjon i coxae og
  genus); knebøy-analyse score 5/6. Form: D1-MUS, D2-MUS5, D2-LEDD35 (bygger mot Del 5 hofte/
  kne). Prioritet: perfekt.
- **Faktakontrakt (utspring/feste/funksjon):** **iliopsoas** (hoftefleksjon); **gluteus
  maximus** (hofteekstensjon/utoverrotasjon), **medius/minimus** (abduksjon/stabilisering),
  **tensor fasciae latae**; **adduktorgruppen** (adductor longus/brevis/magnus, pectineus,
  gracilis — adduksjon); **piriformis** (utoverrotasjon); **quadriceps** (rectus femoris +
  vastus lateralis/medialis/intermedius — kneekstensjon; rectus også hoftefleksjon);
  **hamstrings** (biceps femoris, semitendinosus, semimembranosus — hofteekstensjon +
  knefleksjon); **sartorius**. Funksjon spesifiseres per ledd (E12; rectus femoris og
  hamstrings er flerleddsmuskler).
- **Funksjonskjeder:** (1) muskel-til-bevegelse-oppslag for hofte/kne; (2) flerleddsmuskel-
  logikk (samme muskel, to ledd, evt. motsatt effekt).
- **MC-drill:** hvilke muskler skaper hoftefleksjon/kneekstensjon (D1-MUS, minuspoeng);
  virkemåte i knebøy-nedgang (eksentrisk, E6).
- **Typiske feil:** `E12` (glemme funksjon per ledd for flerleddsmuskler), `E6` (virkemåte i
  knebøy), blande gluteus maximus/medius-funksjon.
- **Kvote:** 16 quiz / 30 flashcards.

#### Kapittel 4.2: Legg- og fotmuskler
**id:** `nih-thp101-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp101-4-1`

- **Kapitteltype:** tema (Del 1 + Del 2c).
- **Description:** Leggens og fotens muskler — triceps surae, tibialis anterior/posterior,
  fibularis-gruppen og tå-musklene — med funksjon i ankel og (for flerleddsmuskler) kne.
- **Eksamensbelegg:** Del 1+2, muskelfunksjon 6/6 (ankelbevegelse), knebøy 5/6 (ankeldelen);
  droppfot-vignett 3/6. Form: D1-MUS, D2-MUS5, D2-LEDD35 (bygger mot Del 5 ankel/fot).
  Prioritet: perfekt.
- **Faktakontrakt (utspring/feste/funksjon):** **gastrocnemius** (plantarfleksjon i ankel +
  fleksjon i kne — flerleddsmuskel), **soleus** (plantarfleksjon), samlet triceps surae →
  tendo calcaneus (akillessene); **tibialis anterior** (dorsalfleksjon + inversjon;
  droppfot-relevant); **tibialis posterior** (plantarfleksjon + inversjon); **fibularis
  longus/brevis** (eversjon + plantarfleksjon); tå-fleksorer/-ekstensorer kort. Funksjon per
  ledd (E12).
- **Funksjonskjeder:** (1) ankelbevegelse → muskel-oppslag; (2) droppfot-logikk (svikt i
  n. fibularis → tibialis anterior ute → hengende fot, kobler til Del 6).
- **MC-drill:** hvilke muskler dorsalflekterer/everterer (D1-MUS, minuspoeng); droppfot-
  vignett (D1-VIGN).
- **Typiske feil:** blande tibialis anterior/posterior (dorsi- vs. plantarfleksjon), glemme
  gastrocnemius' knefunksjon (E12), `E6`.
- **Kvote:** 14 quiz / 28 flashcards.

#### Kapittel 4.3: Rygg-, kjerne- og bukmuskler
**id:** `nih-thp101-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp101-3-2`

- **Kapitteltype:** tema (Del 1 + Del 2).
- **Description:** Rygg- og kjernemusklene — erector spinae, transversospinalsystemet,
  bukmusklene og quadratus lumborum — med den avgjørende ipsilateral/kontralateral-logikken
  ved virvelsøylerotasjon.
- **Eksamensbelegg:** Del 1+2, **rotasjon av virvelsøylen score 5/6** (golf/spydkast); bygger
  mot Del 5 virvelsøyle-segment. Form: D1-MUS, D2-MUS5. Prioritet: perfekt (ipsi-/kontralateral-
  fellen E5).
- **Faktakontrakt (utspring/feste/funksjon):** **erector spinae** (iliocostalis, longissimus,
  spinalis — ekstensjon, ipsilateral lateralfleksjon); **transversospinalsystemet** (multifidus,
  rotatores — rotasjon); **quadratus lumborum** (lateralfleksjon); bukmuskler: **rectus
  abdominis** (fleksjon), **obliquus externus abdominis** (KONTRALateral rotasjon), **obliquus
  internus abdominis** (IPSILateral rotasjon), **transversus abdominis** (stabilisering);
  **latissimus dorsi** (skulder). Ipsi-/kontralateral-regelen uthevet.
- **Funksjonskjeder:** (1) ipsi-/kontralateral-regel (externus én side + internus motsatt side
  → rotasjon til samme side); (2) muskel-til-bevegelse for rygg/kjerne.
- **MC-drill:** hvilken muskel gir kontralateral rotasjon (D1-MUS, minuspoeng, E5); virkemåte
  i sit-ups-nedgang (eksentrisk).
- **Typiske feil:** `E5` (bytte ipsilateral/kontralateral for obliquus externus/internus),
  blande erector spinae-komponentene, `E14`.
- **Kvote:** 14 quiz / 28 flashcards.

#### Kapittel 4.4: Skulder- og overarmsmuskler
**id:** `nih-thp101-4-4` · **number:** 4.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp101-3-2`

- **Kapitteltype:** tema (Del 1 + Del 2c).
- **Description:** Skulderleddets og skulderbuens muskler — deltoideus, rotatorcuffen,
  pectoralis, latissimus, samt biceps/triceps og de scapula-stabiliserende — med multifunksjon
  (deltoideus flekterer, abduserer OG ekstenderer).
- **Eksamensbelegg:** Del 1+2, **skulderleddets muskler score 6/6**; skulderbue 3/6
  (elevasjon/depresjon/protraksjon). Form: D1-MUS, D2-MUS5, D2-LEDD35/17 (bygger mot Del 5
  skulder + skulderbue). Prioritet: perfekt.
- **Faktakontrakt (utspring/feste/funksjon):** **deltoideus** (anterior fleksjon, midtre
  abduksjon, posterior ekstensjon — multifunksjon, sensorpremiert); **rotatorcuffen**
  (supraspinatus abduksjon/impingement-relevant, infraspinatus + teres minor utoverrotasjon,
  subscapularis innoverrotasjon); **teres major**, **pectoralis major** (fleksjon/adduksjon/
  innoverrotasjon), **latissimus dorsi** (ekstensjon/adduksjon/innoverrotasjon);
  **biceps brachii** (albuefleksjon + supinasjon), **triceps brachii** (albueekstensjon),
  **coracobrachialis**; scapula-stabilisatorer: **serratus anterior** (protraksjon),
  **trapezius** (elevasjon/rotasjon), **rhomboideus** (retraksjon), **levator scapulae**,
  **pectoralis minor**.
- **Funksjonskjeder:** (1) deltoideus-multifunksjon (tre deler, tre bevegelser); (2) skulderbue-
  bevegelser → muskel (protraksjon = serratus anterior); (3) impingement-logikk (supraspinatus-
  sene, kobler til Del 6-vignett).
- **MC-drill:** hvilke muskler abduserer/utoverroterer skulderen (D1-MUS, minuspoeng);
  protraksjon-muskel (D1-FAKTA).
- **Typiske feil:** glemme deltoideus' sekundærfunksjoner (delpoeng), blande infraspinatus/
  subscapularis-rotasjonsretning, `E12`, `E14`.
- **Kvote:** 16 quiz / 30 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `nih-thp101-4-prove`): (1) *Hofte og lår* — muskel↔
bevegelse + flerleddslogikk (D1-MUS/D2-MUS5, E12). (2) *Legg og fot* — dorsi-/plantarfleksjon
+ droppfot (D1-MUS/VIGN). (3) *Rygg og kjerne* — ipsi-/kontralateral rotasjon (D1-MUS, E5).
(4) *Skulder og overarm* — deltoideus-multifunksjon + rotatorcuff (D1-MUS/D2-MUS5).

### Del 5 — De store leddene: beskriv-leddet-malen

> Score 6/6 (35 p-kortsvaret). Ett fullstendig kapittel per stort ledd, alle bygd på den
> faste **trestegsmalen** (a) beskriv leddet [klassifikasjon + leddflater konveks/konkav +
> bånd + kapsel + spesialstrukturer + muskler gruppert etter posisjon], (b) bevegelser +
> muskler per bevegelse (tabell), (c) fem muskler med utspring/feste/funksjon. Hvert kapittel
> leverer en full-pott-momentliste (D2-LEDD35) som `example` og driller D2-MUS5. Sensor krever
> FULLSTENDIGHET (E11) og latin (E13).

#### Kapittel 5.1: Skulderleddet (art. glenohumerale)
**id:** `nih-thp101-5-1` · **number:** 5.1 · **estimatedMinutes:** 75 · **prerequisites:** `nih-thp101-4-4`

- **Kapitteltype:** tema (Del 2, beskriv-leddet).
- **Description:** Skulderleddet gjennom hele beskriv-malen — kuleledd, leddflater, labrum
  glenoidale, kapsel/bånd, rotatorcuff, og alle bevegelser med muskler.
- **Eksamensbelegg:** Del 2, **«beskriv leddet» 35 p score 6/6** (skulder er en av de
  roterende). Form: D2-LEDD35, D2-MUS5. Prioritet: perfekt.
- **Faktakontrakt:** klassifikasjon **art. spheroidea (kuleledd)**; leddflater: caput humeri
  (konveks) mot cavitas glenoidalis (konkav, grunn); **labrum glenoidale**; leddkapsel + ligg.
  glenohumeralia + lig. coracohumerale; **rotatorcuffen** som dynamiske stabilisatorer;
  bevegelser (fleksjon/ekstensjon, ab-/adduksjon, inn-/utoverrotasjon, horisontal ab-/adduksjon,
  sirkumduksjon) med muskler per bevegelse; fem muskler i detalj (deltoideus + rotatorcuff-
  utvalg). Muskler gruppert anterior/posterior/superior.
- **Fritekst-momentlister:** full-pott D2-LEDD35 for skulder (alle malpunkter, muskler gruppert,
  bevegelsestabell, fem muskler u/f/f) med delpoeng synlig.
- **MC-drill:** (repetisjon) leddtype + labrum-gjenkjenning (D1-FAKTA).
- **Typiske feil:** `E11` (muskler uten klassifikasjon/leddflater), `E13` (norske navn), glemme
  labrum/kapsel.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 5.2: Hofteleddet (art. coxae)
**id:** `nih-thp101-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-4-1`

- **Kapitteltype:** tema (Del 2, beskriv-leddet).
- **Description:** Hofteleddet gjennom beskriv-malen — dyp kuleledd, labrum acetabulare,
  de tre hoftebåndene, og bevegelser med hofte-/lårmusklene.
- **Eksamensbelegg:** Del 2, «beskriv leddet» 35 p score 6/6 (hofte er en av de roterende;
  hofteledd-mal belagt i sensorveiledning). Form: D2-LEDD35, D2-MUS5. Prioritet: perfekt.
- **Faktakontrakt:** klassifikasjon **art. spheroidea (dypt kuleledd, nøtteledd)**; leddflater:
  caput femoris (konveks) i acetabulum (konkav, dyp); **labrum acetabulare**; **lig.
  iliofemorale/pubofemorale/ischiofemorale** + lig. capitis femoris; bevegelser med muskler
  (fleksjon: iliopsoas; ekstensjon: gluteus maximus/hamstrings; abduksjon: gluteus medius/
  minimus; adduksjon: adduktorgruppen; rotasjon: piriformis/gluteus); fem muskler u/f/f.
- **Fritekst-momentlister:** full-pott D2-LEDD35 for hofte.
- **MC-drill:** (repetisjon) hoftebånd + leddtype (D1-FAKTA/ANAT).
- **Typiske feil:** `E11`, `E13`, blande hoftebåndene, glemme konveks/konkav-relasjon.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 5.3: Kneleddet (art. genus)
**id:** `nih-thp101-5-3` · **number:** 5.3 · **estimatedMinutes:** 75 · **prerequisites:** `nih-thp101-4-1`

- **Kapitteltype:** tema (Del 2, beskriv-leddet).
- **Description:** Kneleddet gjennom beskriv-malen — sammensatt hengselledd, menisker,
  korsbånd og sidebånd, og fleksjon/ekstensjon med quadriceps/hamstrings/gastrocnemius.
- **Eksamensbelegg:** Del 2, «beskriv leddet» 35 p score 6/6 (kne-mal belagt i 2025–26
  sensorveiledning). Form: D2-LEDD35, D2-MUS5. Prioritet: perfekt.
- **Faktakontrakt:** klassifikasjon **ginglymus/modifisert hengselledd** (med rotasjonsevne
  i flektert stilling); leddflater: condyler femoris (konvekse) mot tibiaplatået (konkavt);
  **menisker (medial/lateral, fiberbrusk)**; **korsbånd (cruciatum ant./post.)** + **sidebånd
  (collaterale mediale/laterale)** + lig. patellae; bevegelser (fleksjon/ekstensjon + liten
  rotasjon) med muskler; fem muskler u/f/f (quadriceps-hoder, hamstrings, gastrocnemius,
  popliteus). Korsbåndsfunksjon (fremre hindrer fremre tibiaglidning).
- **Fritekst-momentlister:** full-pott D2-LEDD35 for kne (menisker + fire hovedbånd = ofte
  glemt).
- **MC-drill:** (repetisjon) korsbånd/menisk-funksjon (D1-FAKTA).
- **Typiske feil:** `E11`, `E13`, glemme menisker/korsbånd, blande medial/lateral sidebånd.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 5.4: Ankel- og fotleddene (art. talocruralis)
**id:** `nih-thp101-5-4` · **number:** 5.4 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-4-2`

- **Kapitteltype:** tema (Del 2, beskriv-leddet + skadelogikk).
- **Description:** Øvre ankelledd gjennom beskriv-malen — hengselledd, deltoideum vs. laterale
  bånd, dorsi-/plantarfleksjon — pluss nedre ankelledd (inversjon/eversjon) og ankelovertråkk-
  logikken.
- **Eksamensbelegg:** Del 2, «beskriv leddet» 35 p (ankel er en av de roterende; ankelledd-mal
  belagt); **ankelovertråkk/skadelogikk score 3/6**. Form: D2-LEDD35, D2-MUS5, D1-VIGN.
  Prioritet: perfekt.
- **Faktakontrakt:** **art. talocruralis (øvre ankelledd)** = ginglymus (hengselledd); leddflater
  malleolgaffel (tibia+fibula) om trochlea tali; **lig. deltoideum (medialt)** vs. **lig.
  talofibulare ant./post. + calcaneofibulare (lateralt)**; **art. subtalaris (nedre ankelledd)**
  → inversjon/eversjon; bevegelser (dorsi-/plantarfleksjon i øvre; inversjon/eversjon i nedre)
  med muskler; ankelovertråkk = inversjon + plantarfleksjon → laterale bånd (særlig lig.
  talofibulare anterius) strekkes/ryker.
- **Fritekst-momentlister:** full-pott D2-LEDD35 for ankel + overtråkk-vignettsvar (hvilke bånd).
- **MC-drill:** hvilke bånd strekkes ved inversjonsovertråkk (D1-VIGN); leddtype (D1-FAKTA).
- **Typiske feil:** `E11`, `E13`, blande øvre/nedre ankelledds bevegelser, feil bånd ved
  overtråkk.
- **Kvote:** 14 quiz / 26 flashcards.

#### Kapittel 5.5: Virvelsøylen, skulderbuen og albueleddet (mindre segmenter, 17 p)
**id:** `nih-thp101-5-5` · **number:** 5.5 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-4-3`

- **Kapitteltype:** tema (Del 2, beskriv 17 p + 35 p-varianter).
- **Description:** De øvrige beskriv-temaene — et virvelsøyle-segment (f.eks. L4/L5),
  skulderbuen og albueleddet — som roterer inn som 17 p-kortsvar eller 35 p-variant.
- **Eksamensbelegg:** Del 2, **skulderbue 17 p score 3/6**, virvelsøyle-segment + albue som
  roterende 35 p/17 p (belagt i sensorveiledninger). Form: D2-LEDD17, D2-LEDD35, D2-MUS5.
  Prioritet: perfekt (dekker de resterende beskriv-variantene).
- **Faktakontrakt:** **virvelsøyle-segment** (mellomvirvelskiveledd = symfyse/fiberbrusk +
  fasettledd = planledd; bevegelser fleksjon/ekstensjon/lateralfleksjon/rotasjon; muskler
  erector spinae/transversospinal/bukmuskler; antall ledd på en virvel med naboer);
  **skulderbuen** (art. sternoclavicularis + acromioclavicularis + scapulothorakal glidning;
  bevegelser elevasjon/depresjon, protraksjon/retraksjon, opp-/nedoverrotasjon; muskler
  trapezius/serratus anterior/rhomboideus/levator scapulae/pectoralis minor); **albueleddet**
  (art. humeroulnaris = ginglymus + art. radioulnaris proximalis = trochoidea → pronasjon/
  supinasjon; muskler biceps/triceps/brachialis/brachioradialis).
- **Fritekst-momentlister:** full-pott D2-LEDD17 for skulderbue + D2-LEDD35-variant for albue/
  virvelsøyle.
- **MC-drill:** skulderbue-bevegelse↔muskel (D1-MUS); albue-leddtyper (D1-FAKTA).
- **Typiske feil:** `E11`, `E13`, `E5` (virvelsøylerotasjon), glemme at albuen har to leddtyper.
- **Kvote:** 14 quiz / 26 flashcards.

**Prøve-kvote Del 5:** 4 prøver (id `nih-thp101-5-prove`): (1) *Skulder og hofte* — kuleledd-
beskriv m/labrum + muskler gruppert (D2-LEDD35, E11). (2) *Kne og ankel* — menisker/korsbånd +
overtråkk-bånd (D2-LEDD35/VIGN). (3) *Virvelsøyle, skulderbue, albue* — 17 p-segment + leddtyper
(D2-LEDD17). (4) *Fem muskler i detalj* — utspring/feste/funksjon per ledd, tvers av regioner
(D2-MUS5, E12).

### Del 6 — Nevro- og karanatomi

#### Kapittel 6.1: Spinalnerver og perifere nerver
**id:** `nih-thp101-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-thp101-4-2`

- **Kapitteltype:** tema (Del 1).
- **Description:** Spinalnervenes antall og oppbygning (blandet motorisk/sensorisk) og de
  perifere nervene som innerverer over- og underekstremitetens muskler.
- **Eksamensbelegg:** Del 1, **spinalnerver score 6/6** (antall per nivå, motorisk/sensorisk —
  lettpoeng); **perifere nerver score 5/6** («hvilken nerve innerverer muskler [posisjon]?»).
  Form: D1-FAKTA (2 p), D1-ANAT, D1-VIGN (droppfot). Prioritet: kunne (høyfrekvente
  faktabolker).
- **Faktakontrakt:** **spinalnerver** — 31 par: 8 cervikale, 12 thorakale, 5 lumbale, 5 sakrale,
  1 coccygeal; blandet (motorisk ventralhorn + sensorisk dorsalhorn/-rot); **perifere nerver
  overekstremitet**: n. radialis (posterior/ekstensorer), n. medianus, n. ulnaris, n.
  musculocutaneus (anterior overarm, biceps/coracobrachialis/brachialis), n. axillaris
  (deltoideus); **underekstremitet**: n. femoralis (quadriceps), n. ischiadicus, n. tibialis
  (posterior legg/plantarfleksorer), n. fibularis (communis/superficialis/profundus —
  dorsalfleksorer, droppfot). `(verifiser)` fine innervasjonsdetaljer.
- **Funksjonskjeder:** (1) nerve → muskelgruppe-oppslag; (2) droppfot-kjede (n. fibularis-svikt
  → tibialis anterior ute → hengende fot → kompensatorisk ganglag).
- **MC-drill:** antall cervikale/thorakale spinalnervepar (D1-FAKTA); hvilken nerve innerverer
  posisjon X (D1-ANAT); droppfot-vignett (D1-VIGN).
- **Typiske feil:** `E10` (n. musculocutaneus/radialis; n. tibialis/fibularis forvekslet),
  feil spinalnerve-antall, `E14`.
- **Kvote:** 16 quiz / 28 flashcards.

#### Kapittel 6.2: Arteriell vei og kliniske vignetter
**id:** `nih-thp101-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-thp101-6-1`

- **Kapitteltype:** tema (Del 1).
- **Description:** Den arterielle hovedveien fra bekken til tå, og de kliniske vignettene
  (droppfot, impingement, pes anserinus-bursitt, ankelovertråkk) som kobler anatomi til
  observert funksjon.
- **Eksamensbelegg:** Del 1, **arteriell vei score 4/6** (pelvis → tå); kliniske syndromer/
  vignetter score 1–3/6 (impingement, bursitt, droppfot). Form: D1-FAKTA (2 p), D1-VIGN.
  Prioritet: kunne (lavere vekt, jf. §7 «dekk, men lett»).
- **Faktakontrakt:** **arteriell hovedvei underekstremitet**: a. iliaca → a. femoralis →
  a. poplitea → a. tibialis anterior/posterior → a. dorsalis pedis / a. plantaris medialis/
  lateralis; **kliniske vignetter**: impingement (supraspinatus-sene klemt under acromion),
  pes anserinus-bursitt (gracilis/sartorius/semitendinosus-feste medialt på tibia), droppfot
  (n. fibularis), ankelovertråkk (inversjon → laterale bånd). `(verifiser)` arteriell-vei-
  detaljer.
- **Funksjonskjeder:** (1) arteriell rekkefølge pelvis → tå (fast sekvens); (2) syndrom →
  struktur-kobling (impingement → supraspinatus).
- **MC-drill:** riktig arteriell rekkefølge (D1-FAKTA); koble vignett til struktur (D1-VIGN).
- **Typiske feil:** feil arteriell rekkefølge, blande impingement-/bursitt-strukturer.
- **Kvote:** 14 quiz / 24 flashcards.

**Prøve-kvote Del 6:** 4 prøver (id `nih-thp101-6-prove`): (1) *Spinalnerver* — antall + motorisk/
sensorisk (D1-FAKTA). (2) *Perifere nerver* — nerve↔muskelgruppe + n. musculocutaneus/radialis-
fellen (D1-ANAT, E10). (3) *Arteriell vei* — rekkefølge pelvis → tå (D1-FAKTA). (4) *Kliniske
vignetter* — droppfot/impingement/bursitt↔struktur (D1-VIGN).

### Del 7 — Statisk biomekanikk: tyngde, Newton og momentregning

> Score 6/6 (G=m·g, Newtons lover, dreiemoment/momentbalanse). Regnefag-DNA: hvert kapittel
> har `theorem` **Regneprosedyre**, gjennomregnet eksamenscase som A-besvarelse, og drill med
> stigende vanskegrad som ender på 2025–26-nivå. Sensor krever **vist utregning i symbolform +
> riktig enhet (N, Nm) + mekanisk tolkning**; delpoeng for riktig oppsett ved følgefeil. Alle
> tall NYSKREVNE. Denne delen er direkte forkunnskap for [THP203 Basal biomekanikk](/nih-thp203).

#### Kapittel 7.1: Masse, tyngde og Newtons lover
**id:** `nih-thp101-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-thp101-0-2`

- **Kapitteltype:** tema (Del 1 + Del 2, regnefag).
- **Description:** Skillet masse (kg) / tyngde (G = m·g, N), Newtons tre lover, og netto
  kraft/akselerasjon i hopp og sprint — grunnlaget for all momentregning.
- **Eksamensbelegg:** Del 1+2, **tyngde G=m·g score 6/6** (lettpoeng, g ≈ 9,8); **Newtons
  lover: total kraft/akselerasjon i hopp/sprint score 6/6** (netto vertikal kraft i hopp,
  akselerasjon ut av startblokk). Form: D1-FAKTA (2 p), D2-REGN. Prioritet: perfekt.
- **Faktakontrakt (formler):** **G = m·g** (g ≈ 9,8 m/s²), tyngde i newton (N); **Newtons 1.**
  (treghet), **2.** (F = m·a), **3.** (aksjon–reaksjon, startblokk/frasparks); netto kraft =
  sum av krefter; i hopp: netto vertikal kraft = bakkekraft − tyngde → akselerasjon;
  resultantkraft ved rette vinkler via Pytagoras. Enhet N og m/s².
- **Regneprosedyre (theorem):** (1) skriv G = m·g med g = 9,8; (2) sett opp F_netto = ΣF;
  (3) F = m·a → løs for a eller F; (4) oppgi enhet; (5) tolk (retning/størrelse).
- **Fritekst-momentlister:** A-besvarelse «finn utøverens tyngde og akselerasjon ut av
  startblokk» (symbolform → innsetting → enhet → tolkning).
- **MC-drill:** hva er tyngden gitt masse (D1-FAKTA, enkelt-velg 2 p — ingen minuspoeng);
  hvilken Newton-lov gjelder.
- **Typiske feil:** `E7` (bruke masse der tyngde skal inn; glemme g), blande masse/tyngde-enhet,
  feil Newton-lov.
- **Kvote:** 14 quiz / 20 flashcards.

#### Kapittel 7.2: Dreiemoment og statisk momentbalanse
**id:** `nih-thp101-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-7-1`

- **Kapitteltype:** tema (Del 2, regnefag — kjerneoppgaven).
- **Description:** Dreiemoment τ = F·r og momentbalansen i statisk likevekt (ΣΤ = 0, indre
  moment = ytre moment) — standardregneoppgaven der man løser for muskelkraften.
- **Eksamensbelegg:** Del 2, **dreiemoment og momentbalanse score 6/6** (τ = F·r, indre = ytre
  for å finne muskelkraft). Form: D2-REGN (5–15 p). Prioritet: perfekt (kjerneregningen).
- **Faktakontrakt (formler):** **dreiemoment τ = F·r** (kraft × kraftarm, enhet Nm); **statisk
  likevekt ΣΤ = 0** → indre moment (muskel) = ytre moment (tyngde): **F_m·r_m = G·r_G**; løs
  for **F_m = G·r_G / r_m**; kraftarm = vinkelrett avstand fra dreiepunkt (ledd) til kraftlinjen;
  muskelens kraftarm r_m vs. ytre kraftarm r_G.
- **Regneprosedyre (theorem):** (1) tegn/identifiser dreiepunkt (leddet); (2) finn G = m·g;
  (3) sett opp ΣΤ = 0 i symbolform; (4) identifiser r_G og r_m; (5) løs F_m = G·r_G / r_m;
  (6) enhet (N); (7) tolk.
- **Fritekst-momentlister:** A-besvarelse «finn muskelkraften i rygghev/albuefleksjon»
  (symbolform → innsetting → enhet → tolkning), modellert på rygghev-/utholdenhetstest-sjangeren.
- **MC-drill:** hvilken kraftarm er ytre vs. indre (D1-FAKTA); enhet for dreiemoment.
- **Typiske feil:** `E8` (bytte r_G og r_m), `E7` (masse i stedet for G), glemme at leddet er
  dreiepunkt, feil enhet.
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 7.3: Konsekvensanalyse og flere ytre krefter
**id:** `nih-thp101-7-3` · **number:** 7.3 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-7-2`

- **Kapitteltype:** tema (Del 2, regnefag — 2025–26-utvidelse).
- **Description:** Hvordan muskelkraften endres når kraftarmen endres (konsekvens *med
  begrunnelse*), og momentbalanse med flere ytre krefter samtidig (tyngde + partnerkraft).
- **Eksamensbelegg:** Del 2, konsekvensanalyse (score 6/6, del av momentoppgaven) + **flere
  ytre krefter samtidig** (nytt 2025–26, partnerkraft i mageøvelse). Form: D2-REGN. Prioritet:
  perfekt (skiller A fra C, jf. §7).
- **Faktakontrakt (formler):** konsekvens: **F_m = G·r_G / r_m** → lengre r_G gir større F_m,
  kortere r_G gir mindre F_m (mekanisk begrunnelse kreves, E9); **to ytre krefter**:
  **F_m·r_m = G·r_G + F·r_F** → løs for F_m; velg hvor kravet til muskelkraft er minst
  (kortest ytre kraftarm).
- **Regneprosedyre (theorem):** (1) sett opp ΣΤ = 0 med ALLE ytre momenter (G·r_G + F·r_F);
  (2) løs for F_m; (3) for konsekvens: differensier verbalt — endret r_G → endret F_m, oppgi
  RETNING + regn nytt tall; (4) enhet + mekanisk begrunnelse.
- **Fritekst-momentlister:** A-besvarelse «muskelkraft med partnerkraft» + «hva skjer med F_m
  når armen forlenges» (regn OG begrunn, E9).
- **MC-drill:** i hvilken posisjon er muskelkravet minst (D1-VIGN); retning på F_m-endring ved
  lengre kraftarm.
- **Typiske feil:** `E9` (nytt tall uten begrunnelse), glemme et ytre moment, `E8`, feil
  retning på konsekvens.
- **Kvote:** 14 quiz / 22 flashcards.

#### Kapittel 7.4: Trigonometrisk kraftarm og treghetsmoment
**id:** `nih-thp101-7-4` · **number:** 7.4 · **estimatedMinutes:** 65 · **prerequisites:** `nih-thp101-7-3`

- **Kapitteltype:** tema (Del 2, regnefag — 2025–26-topp + kvalitativ rotasjon).
- **Description:** Momentbalanse når senekraften virker under en vinkel (trigonometrisk
  kraftarm r·sin θ) — det tyngste 2025–26-oppgavesteget — pluss kvalitativt treghetsmoment
  og vinkelhastighet.
- **Eksamensbelegg:** Del 2, **trigonometrisk kraftarm** (senekraft med sin θ, nytt 2025–26,
  belagt: sittende kneekstensjon m/sin 15°); **treghetsmoment score 4/6** (stup, kropp som
  rotasjonssystem — kvalitativt); θ = ω·t belagt (knebøy fler-steg). Form: D2-REGN, D1-VIGN.
  Prioritet: perfekt (topp-nivået i regnedelen).
- **Faktakontrakt (formler):** **trigonometrisk kraftarm**: effektiv kraftarm = r·sin θ →
  **F_m = G·r_G / (r_m·sin θ)**; **treghetsmoment** (kvalitativt: massefordeling nær/fjernt fra
  rotasjonsakse → mindre/større treghet; stup: krøll sammen → mindre treghet → raskere
  rotasjon); **vinkelhastighet θ = ω·t** (grad/rad per tid); resultant via Pytagoras
  (repetisjon 7.1).
- **Regneprosedyre (theorem):** (1) identifiser senevinkelen θ; (2) effektiv arm = r_m·sin θ;
  (3) F_m = G·r_G / (r_m·sin θ); (4) enhet; (5) tolk hvordan F_m endres med θ.
- **Fritekst-momentlister:** A-besvarelse «senekraft ved sittende kneekstensjon med sin θ»
  (full føring); kvalitativ treghetsmoment-forklaring for stup.
- **MC-drill:** hva skjer med kraftbehovet når massen samles nær aksen (D1-VIGN);
  effektiv-kraftarm-formel.
- **Typiske feil:** `E8` (glemme sin θ-leddet), blande treghetsmoment-retning, feil θ-tolkning.
- **Kvote:** 14 quiz / 22 flashcards.

**Prøve-kvote Del 7:** 4 prøver (id `nih-thp101-7-prove`): (1) *Tyngde og Newton* — G=m·g +
akselerasjon i hopp/sprint (D2-REGN, E7). (2) *Momentbalanse* — finn muskelkraften i statisk
likevekt (D2-REGN, E8). (3) *Konsekvens og to krefter* — endret kraftarm m/begrunnelse +
partnerkraft (D2-REGN, E9). (4) *Trigonometri og treghet* — sin θ-kraftarm + kvalitativ
rotasjon (D2-REGN/VIGN).

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Flervalgs- og minuspoeng-drill (Del 1s svarlogikk)
**id:** `nih-thp101-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-6-2`

- **Kapitteltype:** sjangerdrill (Del 1, flervalg + minuspoeng).
- **Description:** Presisjonsdrill for Del 1s fem sjangre og — avgjørende — **minuspoeng-
  disiplinen** (kryss KUN det sikre; hvert feil kryss −1), med de klassiske distraktorfellene
  (fot/hånd, plan/akse, ekte/uekte ledd).
- **Eksamensbelegg:** Del 1, 32–35 oppgaver, negativ retting (+1/−1). Distraktorfeller: fot/hånd
  (E1), plan/akse (E2), uekte ledd (E4), ipsi-/kontralateral (E5), virkemåte (E6), nerve (E10).
  Prioritet: perfekt (meta).
- **Innhold:** `text` **Minuspoeng-oppskriften** (kryss kun sikre alternativer; «i tvil → la stå»
  på flervalg m/negativ retting; svar alltid på D1-FAKTA 2 p; elimineringsstrategi) + `example`
  gjennomgått oppgave av hver Del 1-sjanger (D1-ANAT/PPA/MUS/FAKTA/VIGN) med fellen markert og
  minuspoeng-regnskapet vist; drilltabell (fot/hånd, plan/akse-par, ekte/uekte ledd, muskel↔
  bevegelse, nerve↔muskel). `exercise` × 10–12 (Del 1-sjangre, med «skal du krysse?»-vurdering).
- **Typiske feil:** `E14` (gjette i tvil), `E1`, `E2`, `E4`, `E5`, `E6`, `E10`.
- **Kvote:** 18 quiz / 12 flashcards.

#### Kapittel 8.2: Beskriv-leddet- og muskeldrill (Del 2s kortsvarslogikk)
**id:** `nih-thp101-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-5-5`

- **Kapitteltype:** sjangerdrill (Del 2, beskriv-leddet + fem muskler).
- **Description:** Driller den faste beskriv-leddet-trestegsmalen (35 p / 17 p) og fem-muskler-
  oppgaven (D2-MUS5) som fullstendige momentlister — med fullstendighet (E11) og latin (E13)
  i fokus.
- **Eksamensbelegg:** Del 2, «beskriv leddet» 35 p (6/6) + 17 p-segment + fem muskler u/f/f.
  Sensor krever ALLE malpunkter + latin + funksjon per ledd. Prioritet: perfekt (meta).
- **Innhold:** `text` **Beskriv-malen som sjekkliste** (a klassifikasjon+leddflater+bånd+kapsel+
  spesialstrukturer+muskler gruppert; b bevegelsestabell; c fem muskler u/f/f per ledd) +
  latin-disiplin (E13); `example` full-pott 35 p-svar for ett ledd med delpoeng synlig +
  mangelfullt svar til kontrast (E11); drilltabell (leddtype per stort ledd, spesialstrukturer
  labrum/menisk, muskler per bevegelse). `exercise` × 8–10 (D2-LEDD35/LEDD17/MUS5 — skriv
  momentlisten selv).
- **Typiske feil:** `E11` (ufullstendig), `E13` (norsk i stedet for latin), `E12` (muskeldetalj
  uten alle tre elementer), glemme leddflate-relasjon.
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 8.3: Momentregne-drill (Del 2s regnelogikk)
**id:** `nih-thp101-8-3` · **number:** 8.3 · **estimatedMinutes:** 70 · **prerequisites:** `nih-thp101-7-4`

- **Kapitteltype:** sjangerdrill (Del 2, statisk momentregning).
- **Description:** Driller hele momentprogresjonen — tyngde → momentbalanse → konsekvens → to
  krefter → trigonometrisk kraftarm — med sensorkravet **vist utregning + enhet + mekanisk
  tolkning**.
- **Eksamensbelegg:** Del 2, regneoppgaver 5–15 p, tyngre fra 2025–26 (to krefter, sin θ).
  Sensor: symbolform + enhet + begrunnet retning. Prioritet: perfekt (meta).
- **Innhold:** `text` **Regneoppskriften** (G=m·g → ΣΤ=0 i symbolform → r_G/r_m (evt. sin θ) →
  løs F_m → enhet → mekanisk tolkning) + følgefeil-regelen (riktig oppsett gir delpoeng);
  `example` full-pott regnecase for hver variant (enkel momentbalanse, to krefter, trigonometrisk)
  med margnotat om hvor poeng faller; drilltabell (formlene + enhetene). `exercise` × 8–10
  (D2-REGN, stigende til 2025–26-nivå — alle med enhet + tolkning).
- **Typiske feil:** `E7` (masse/tyngde), `E8` (feil kraftarm / glemme sin θ), `E9` (regne uten
  begrunnelse), manglende enhet.
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 8.4: Komplett øvingseksamen (to deler)
**id:** `nih-thp101-8-4` · **number:** 8.4 · **estimatedMinutes:** 95 · **prerequisites:** `nih-thp101-8-3`

- **Kapitteltype:** øvingseksamen (to-delt format).
- **Description:** Et komplett, nyskrevet THP101-sett i gjeldende (2025–26) format: Del 1
  flervalg (~35 oppgaver, ~40 p, negativ retting) + Del 2 kortsvar (60 p: beskriv leddet 35 p
  + mindre segment 17 p + momentregning), med full fasit.
- **Eksamensbelegg:** Hele arkivet, 2025–26-nivå: Del 1 32–35 flervalg m/minuspoeng; Del 2 fire
  kortsvarsblokker inkl. tyngre regning (to krefter/sin θ). Prioritet: perfekt (meta).
- **Innhold:** **Del 1** ~35 oppgaver fordelt over D1-ANAT/PPA/MUS/FAKTA/VIGN etter §2-frekvens
  (fot/hånd, plan/akse, leddklassifikasjon, muskel↔bevegelse, virkemåte, spinalnerve, tyngde);
  **Del 2** ett D2-LEDD35 (roterende stort ledd) + ett D2-LEDD17 (segment) + én D2-REGN
  (momentbalanse med konsekvens eller to krefter/sin θ). `collapsible` full fasit per oppgave
  (Del 1 med minuspoeng-regnskap; beskriv-svar med momentliste + delpoeng; regning med vist
  utregning + enhet + tolkning); `tip` **Sensorblikket** (hva som gir uttelling; minuspoeng-
  disiplin på Del 1; fullstendighet + latin på Del 2; symbolform + enhet + begrunnelse på
  regnedelen).
- **Typiske feil:** hele feilkatalogen E1–E14 speiles i fasitkommentarene; E1/E2/E14
  (minuspoeng-fellene) og E11/E9 uthevet.
- **Kvote:** 8 quiz / 4 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Seksjon | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | Eksamenskart | 2 | 22 | 18 | 0 (dekkes av øvingseksamen 8.4) |
| 1 | Anatomisk grunnlag | 3 | 46 | 70 | 4 |
| 2 | Leddlære og bindevev | 3 | 46 | 74 | 4 |
| 3 | Skjelettet | 3 | 44 | 76 | 4 |
| 4 | Muskelatlas | 4 | 60 | 116 | 4 |
| 5 | De store leddene | 5 | 70 | 130 | 4 |
| 6 | Nevro- og karanatomi | 2 | 30 | 52 | 4 |
| 7 | Statisk biomekanikk | 4 | 58 | 86 | 4 |
| 8 | Eksamenstrening | 4 | 58 | 40 | 0 (= 1 komplett to-delt øvingseksamen) |
| **Sum** | | **30** | **434** | **662** | **28 + 1 øvingseksamen** |

> **NB — quiz-avstemming:** deltabellen over summerer per-kapittel-kvotene i §3 til **434**
> quiz. For å nå det puggetunge fagets mål og gi solid margin over gulvet suppleres hver
> temadel (Del 1–7) med **quiz-i-prøvene**: hver av de 28 prøvene inneholder ~5–6 nyskrevne
> flervalgsspørsmål (Del 1-sjangre) og hvert prøvesett registreres som quiz. Prøve-quiz:
> **28 prøver × ~5,8 = 162 quiz.** **Total quiz = 434 (kapittel) + 162 (prøve) = 596 (≥500 ✓).**
> Flashcards genereres KUN fra kapitlenes toppnivå-`definition`-blokker → **flashcards = 662
> (≥500 ✓)** (prøvekapitler bidrar ikke med flashcards).

Summeringskontroll per del (kapittel-quiz / flashcards):
- Del 0: 10+12=22 / 8+10=18
- Del 1: 14+16+16=46 / 22+24+24=70
- Del 2: 16+14+16=46 / 26+22+26=74
- Del 3: 14+14+16=44 / 24+24+28=76
- Del 4: 16+14+14+16=60 / 30+28+28+30=116
- Del 5: 14+14+14+14+14=70 / 26+26+26+26+26=130
- Del 6: 16+14=30 / 28+24=52
- Del 7: 14+16+14+14=58 / 20+22+22+22=86
- Del 8: 18+16+16+8=58 / 12+12+12+4=40
- **Kapittel-quiz totalt: 434 · Prøve-quiz: 162 · Quiz totalt: 596 (≥500 ✓) / Flashcards: 662 (≥500 ✓).**

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE «≥500 er et GULV, ikke et mål»):** THP101 er et
ekstremt faktatungt puggefag — halve eksamen er ren latinsk oppslagskunnskap (knokler,
landemerker, ledd, bånd, muskler med utspring/feste/funksjon, perifere nerver). Derfor er
**flashcards skalert til 662**, godt over gulvet, med tyngdepunkt i muskelatlaset (Del 4:
116) og de store leddene (Del 5: 130) der latin-tettheten er høyest — MED1100/NOKUT-AFB-
lærdommen om HØY flashcard-tetthet i puggefag. **Quiz på 596** fordi Del 1 (~40 % av eksamen)
er ren flervalg med fem sjangre og negativ retting — flervalgspresisjon må drilles bredt, og
minuspoeng-mekanikken krever ekstra «kryss kun det sikre»-varianter. Regnetunge kapitler
(Del 7) har flashcards ≈ quiz (formler/g-verdi + prosedyre-quiz); rene faktakapitler (Del 3–5)
har flashcards ≥ quiz.

**Flashcard-profil:** latin↔norsk-kort (os naviculare↔båtformet fotknokkel; art. talocruralis↔
øvre ankelledd; lig. cruciatum anterius↔fremre korsbånd), muskel↔utspring/feste/funksjon (per
ledd for flerleddsmuskler), leddtype↔kroppseksempel (ginglymus↔albue/kne), plan↔akse-par
(sagittal↔mediolateral), nerve↔muskelgruppe (n. fibularis↔dorsalfleksorer), bevegelse↔virkemåte
(landing = eksentrisk), og formel↔bruksbetingelse (τ=F·r i Nm; F_m=G·r_G/r_m; G=m·g med g=9,8).
**Quiz-profil:** flervalg med nære distraktorer (fot/hånd, plan/akse, ekte/uekte ledd, ipsi-/
kontralateral, n. musculocutaneus/radialis, tibialis/fibularis) + muskel↔bevegelse-kobling +
virkemåte-vurdering + regne-quiz (enhet, kraftarm-identifikasjon, G-verdi) + «skal du krysse?»-
minuspoeng-drill.

**Minuspoeng-regelen (eksamenstreningsdelen):** Del 1-flervalget rettes med **negativ retting**
— hvert riktig kryss +1, hvert feil kryss −1 (laveste oppgavesum 0). Enkelt-velg-faktaoppgavene
(D1-FAKTA, 2 p) og hele Del 2 har INGEN minuspoeng. Denne asymmetrien driller kap. 8.1 eksplisitt:
på flervalg m/negativ retting krysser man KUN det man er sikker på; på D1-FAKTA og Del 2 svarer
man alltid. Quiz-mekanikken på plattformen har ikke minuspoeng, så minuspoeng-disiplinen læres
via oppgavetekst/tip, ikke via poengmotoren.

---

## 4. Prøver

Fire prøver per temadel (Del 1–7 = **28 prøver**). Del 0 og Del 8 har ingen egen prøve (Del 8s
komplette øvingseksamen dekker helheten i begge deler). Hver prøve speiler eksamensformen i
miniatyr: Del 1–3 og Del 6 = hovedsakelig flervalg (D1-sjangre, minuspoeng-disiplin i tekst);
Del 4 = muskel↔bevegelse-flervalg + fem-muskler-kortsvar; Del 5 = beskriv-leddet-kortsvar
(momentliste-fasit); Del 7 = momentregning (vist utregning + enhet + tolkning). Omfang 20–40 min.
Alle oppgaver NYSKREVNE. Prøvekapittel-id `nih-thp101-<del>-prove`, chapterNumber `<del>.P`
(jf. BYGGEKONTRAKT). Prøvenes flervalgsspørsmål registreres som quiz (jf. quiz-avstemmingen over).

Prøvetemaene per del er spesifisert i **Prøve-kvote Del N**-linjene under hver del i §3.

### Komplett øvingseksamen (kap. 8.4)

Ett nyskrevet komplett sett i gjeldende to-delt format: Del 1 (~35 flervalg, ~40 p, negativ
retting, alle fem sjangre etter frekvens) + Del 2 (60 p: beskriv leddet 35 p + mindre segment
17 p + momentregning m/konsekvens eller to krefter/sin θ). Full fasit + Sensorblikket. Begrunnelse:
fordi de to delene har helt ulik svarlogikk (minuspoeng-flervalg vs. fullstendig kortsvar +
momentregning), må studenten trene tidsdisiplin og poenghøsting i begge former i samme sett.

---

## 5. Studieguide-disposisjon

1. **To deler, to svarlogikker** — eksamens-oversiktstabellen (del/form/poeng/retting),
   minuspoeng-regelen (Del 1) og beskriv-/regne-malene (Del 2) (fra kap. 0.1–0.2).
2. **Anatomisk grunnlag** — retningsterminologi, de tre plan/tre akser med paringsregelen, og
   bevegelses-/virkemåtebegrepene (fra Del 1).
3. **Leddlære og skjelett** — ekte/uekte ledd, bindevev/brusktyper, leddbånd, og knokler med
   landemerker (med fot-vs-hånd-kontrasten uthevet) (fra Del 2–3).
4. **Muskelatlas** — hofte/lår, legg/fot, rygg/kjerne, skulder/arm med utspring/feste/funksjon
   og muskel-til-bevegelse-oppslag (fra Del 4).
5. **De store leddene** — beskriv-leddet-malen for skulder/hofte/kne/ankel/virvelsøyle/albue,
   med muskler gruppert etter posisjon (fra Del 5).
6. **Nevro- og karanatomi** — spinalnerver, perifere nerver, arteriell vei og kliniske vignetter
   (fra Del 6).
7. **Statisk biomekanikk** — G=m·g, Newtons lover, dreiemoment/momentbalanse, konsekvens, to
   krefter og trigonometrisk kraftarm, med regneprosedyrene og enhetskravet (fra Del 7).
8. **Latin↔norsk-listen** — knokler, ledd, bånd, muskler, nerver (flashcard-speilet i prosaform).
9. **Formel- og faktabank** — G=m·g, τ=F·r, ΣΤ=0, F_m=G·r_G/r_m, r·sin θ; leddklassifikasjonene;
   plan/akse-paringene; brusktypene; spinalnerve-antallene.
10. **Sensorfellene** — E1–E14 som énlinjers varsellamper, med E1 (fot/hånd), E2 (plan/akse),
    E14 (minuspoeng-gjetting), E11 (ufullstendig beskriv) og E9 (regne uten begrunnelse) uthevet.
11. **Ukeplan** — løp mot eksamensdagen med prøve-innplassering (temadelprøver underveis;
    komplett øvingseksamen den siste uka).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `nih-thp101`, title, `level: 'Høyskole'`, alle 30
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer to-delt struktur, de to svarlogikkene, beskriv-malen og
   **minuspoeng-strategien for Del 1** som alle senere kapitler refererer).
3. **Del 1→7** i rekkefølge (anatomisk avhengighet; prerequisites peker bakover) → **Del 8**
   (drill + øvingseksamen). Batching = én agent per hel del (Del 4/5 er 4–5 kap → gi agenten
   hele delens kontrakter).
4. **Prøver** (`nih-thp101-<del>-prove`) etter at delens kapitler finnes (Del 1–7).
5. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Nøkkelfakta-/formelliste → text Oversikt → definition Kjernefakta
(flashcard-kilden — toppnivå med title!) → theorem Regneprosedyre / text Funksjonskjeder →
example Modellsvar/regnecase → warning Typiske feil → exercise ×6–12 → collapsible Repetisjon).
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene (E1–E14) fra dette
skjelettet — forfatteren skal IKKE finne på gjenganger-score.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/nih-thp101-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 30 kapittel-id-er har eksisterende content-fil; `number` er
      del-basert («5.3», ALDRI lineær); prosareferanser bruker samme form («kap. 5.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-id-er
      registrert (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **To-delt integritet:** hvert temakapittels Eksamensvinkel sier hvilken DEL (1/2) og
      sjanger det trener; Del 1-kapitler har minuspoeng-noten (kryss kun det sikre; +1/−1);
      Del 2-beskriv-kapitler har fullstendighetskrav (E11) + latin (E13); regnekapitler (Del 7)
      har theorem-regneprosedyre + vist utregning + enhet + mekanisk tolkning.
- [ ] **Anatomisk/mekanisk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle
      markerte verdier (sum 100 poeng-fordeling, antall ledd på en virvel, fine innervasjons-/
      histologi-/arteriell-vei-detaljer) fagfellesjekkes i fase 6 mot GJELDENDE pensum (Eriksrud
      2019). INGEN oppdiktede navn/tall.
- [ ] **Kalibrering (struktur/mekanikk, ikke fysiologi):** ingen muskelfysiologi/energiomsetning/
      fibertyper som kjernestoff (forutsettes fra THP100); ingen vektorbiomekanikk/arbeid-energi/
      materialmekanikk (ligger i THP203); THP101 holder seg til anatomi + statisk momentregning.
- [ ] **Kvotesum:** quiz ≥596 (kapittel 434 + prøve 162) og flashcards ≥662 fordelt per kapittel
      som angitt (hardt gulv ≥500/≥500); 4 prøver per temadel Del 1–7 (28) + 1 komplett to-delt
      øvingseksamen; fasit-svaralternativer rebalansert (jevn a/b/c/d — options[0] alltid riktig
      i staging, runtime stokker).
- [ ] **Begge deler i eksamenstreningen:** 8.1 = Del 1-drill (flervalg + minuspoeng-disiplin),
      8.2 = Del 2 beskriv-leddet-/muskeldrill, 8.3 = Del 2 momentregne-drill, 8.4 = komplett
      to-delt øvingseksamen (Del 1 ~35 flervalg m/minuspoeng + Del 2 60 p) med full fasit +
      Sensorblikket.
- [ ] **Opphavsrett:** alle oppgaver, bildeserie-beskrivelser, tallverdier og øvingseksamen er
      NYSKREVNE — ingen formuleringer/fasitmomenter fra THP101-settene. Anatomiske navn (norsk/
      latin), leddklassifikasjoner, muskelfunksjoner og mekaniske standardformler er standard
      fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker (THP100 for fysiologi, THP203 for videreført
      biomekanikk) + collapsible «Nøkkelfakta- og formelliste» først i hvert kapittel;
      Eksamensvinkel-`tip` (per del) og Typiske feil-`warning` i hvert kapittel; «bør kjenne
      til»-stoff (kliniske vignetter, treghetsmoment) plassert ETTER kjernestoffet og merket.

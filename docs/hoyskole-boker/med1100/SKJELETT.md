# Bokskjelett: MED1100 Medisinstudiet modul 1 (UiO) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiOs MED1100-arkiv 2021–2026: ~42 oppgavesett over tre
> blokkeksamener, mange med innebygde sensorveiledninger; siste ~8 sittinger per
> blokk lest oppgave for oppgave, eldre skummet). Alle oppgaver, case, figurtekster,
> tallverdier og formuleringer i boka skal være NYSKREVNE (se §6). Anatomiske navn
> (norsk/latin), fysiologiske sammenhenger og statistiske standardformler er standard
> fagstoff og fritt å bruke.
>
> **Medisinsk presisjon er kritisk.** Normalverdier og tallfakta forfatteren er usikker
> på merkes `(verifiser)` for fagfellesjekk i fase 6 — flere er hentet fra eldre sett
> (2021–2022) og skal kontrolleres mot gjeldende pensum. INGEN oppdiktede tall eller
> navn. Nivået er **det friske mennesket** (grunnfag: celle-/molekylærbiologi, histologi,
> anatomi, fysiologi, biokjemi/metabolisme, genetikk, immunologi-grunnlag, medisinsk
> statistikk) — IKKE klinikk, patofysiologi eller behandling. Den nasjonale «felles
> avsluttende deleksamen» (klinisk, sent i studiet) er IKKE relevant og holdes utenfor
> (analysen §8).

---

## 1. Bokens identitet

- **Kurs-id:** `med1100`
- **Tittel:** *MED1100 Medisinstudiet modul 1*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo (UiO). Visningsnavn i
  `institusjoner.ts`: «MED1100 Medisinstudiet modul 1».
- **Arketype:** **fakta/pugg-hybrid** — et faktatungt puggefag (nærmeste forbilde:
  NOKUT-AFB) med en betydelig **regnedel** (medisinsk statistikk = 40 % av blokk 1;
  pluss regneoppgaver i blokk 2) som følger **DNA-regnefag** (regneprosedyrer som
  theorem-blokker, gjennomregnede eksamenscase, drill). Låner momentliste-/moment-for-
  moment-logikken (fritekst rettet mot punktlister) fra DNA-drøfting for blokk 2s
  essaydel. Ingen ren DNA-mal passer; strukturen er skreddersydd og dokumentert i §2.
- **Kapittelantall:** 50 (Del 0: 2 · blokk 1-deler 1–4: 14 · blokk 2-deler 5–9: 16 ·
  blokk 3-deler 10–13: 12 · eksamenstrening Del 14: 6)
- **Estimert totaltid:** ~2970 minutter (~49,5 timer) fordelt per kapittel under.
- **Quiz totalt:** **706** (krav ≥600) · **Flashcards totalt:** **734** (krav ≥700)

**Pitch:** MED1100 er første semester i det integrerte profesjonsstudiet i medisin ved
UiO og avlegges av *alle* nye medisinstudenter der (aktivt vår og høst) — en stor,
fornybar årskull-målgruppe. Det avgjørende strukturvalget: modulen avsluttes **ikke**
med én eksamen, men med **TRE separate bestått/ikke-bestått blokkeksamener med helt
ulikt format, fagområde og svarlogikk**. Man kan ikke kompensere en svak blokk med en
sterk — alle tre må bestås. Derfor bygges boka som **tre parallelle delbøker** med hver
sin drilllogikk:

- **BLOKK 1 (digital, ~5 t, Inspera):** blandet flervalg + kortsvar/essay +
  **statistikkregning**. Fire seksjoner i fast rekkefølge: Humanbiologi (20 %),
  Atferdsfag (20 %), Samfunnsmedisin (20 %), **Statistikk (40 %, tyngst)**.
  **Har hjelpemidler:** enkel kalkulator + **statistiske tabeller + formelsamling** —
  statistikk tester *bruk* av formler, ikke memorering av dem (skarp kontrast til
  NOKUT-AFB, som er helt uten hjelpemidler). Statistikkdelen bruker regnefag-DNA.
  Ingen dokumentert minuspoeng.
- **BLOKK 2 (skriftlig, 6 t, 09–15):** **rent essay/kortsvar/regning/bildetolkning**.
  9–12 hovedoppgaver A–L med oppgitt **vekttall, sum eksakt 100**. Kalkulator.
  Temaene histologi + metabolisme + genetikk + cellesignalering er **14/14** sittinger.
  **NEGATIV RETTING** forekommer KUN her, og kun på rutenett/flervalg-innslag
  (+0,5/−0,5/0, evt. +0,4/−0,4/0 eller +0,25/−0,25/0), laveste sum på en oppgave er 0,
  blankt = 0 → **blankt lønner seg over gjetting** (egen strateginote i 0.2).
- **BLOKK 3 (digital flervalg, Inspera):** **rent flervalg** fra en spørsmålsbank på
  ~90–110 spm (numrene hopper). «Velg ett» dominerer, fast innslag «velg TO / de 2 mest
  riktige». **Ingen minuspoeng.** Fire seksjoner: Anatomi thorax (~30 %) og Immunologi
  (~30 %) tyngst, Mikrobiologi (~25 %), Fysiologi/blod (~15 %). De sikreste gjengangerne:
  **T-celleutvikling i thymus (4/4)** og **n. phrenicus (4/4)**. Latinsk nomenklatur og
  nære distraktorer avgjør.

Boka er bygd baklengs fra tre ting: (1) gjengangerne som drilles til de sitter (KI +
hypotesetest og biopsykososial modell i blokk 1; histologibilde-begrunnelse, arvegang,
metabolisme og signalering i blokk 2; T-celleutvikling, koronarkar og n. phrenicus i
blokk 3), (2) de tre ulike svarlogikkene (vist statistikkregning · nummerert mekanisme-
essay med negativ-retting-disiplin · latinsk flervalgspresisjon), og (3) de faste
sensorfellene i §5.

**Kalibreringsregel (ufravikelig):** Boka dekker DET FRISKE MENNESKET. Ingen klinikk,
patofysiologi, farmakoterapi eller behandlingsvalg som kjernestoff. Den nasjonale
«felles avsluttende deleksamen» (kliniske case-MCQ sent i studiet) er en ANNEN eksamen
og holdes helt utenfor (analysen §8). Detaljbiokjemi og molekylærdetaljer som
sensorveiledningene eksplisitt merker «ikke forventet» (ribosom-subenheter, mtDNA-
lengde, enzymnavn i parentes) omtales maks som «bør kjenne til», aldri som kjernekrav.

---

## 2. Makrostruktur

Rekkefølge: **Del 0 (eksamenskart for de tre blokkene) → BLOKK 1-deler → BLOKK 2-deler
→ BLOKK 3-deler → eksamenstrening (drill + én øvingseksamen i hver av de tre formene).**
De tre blokkene er hoveddel-blokker; hver har egne temadeler under, ordnet innen blokken
etter frekvens/vekt (tyngst mest omfang), med prerequisites som peker bakover.

| Del | Blokk | Seksjonstittel | Kap. | Vekt/prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | meta | Eksamenskart: tre blokker, tre eksamener | 2 | perfekt (meta) | De tre formatene, svarlogikkene, hjelpemidlene og minuspoeng-strategien for blokk 2 må etableres FØR fagstoffet. |
| 1 | 1 | Humanbiologi: celle, kropp og oversiktsfysiologi | 4 | kunne | Blokk 1, 20 %. Oversiktsnivå (minuttvolum, syre-base, nyre/ADH, nervevev, fordøyelse, celle/meiose) — *lettere* enn blokk 2s molekylærbiologi. |
| 2 | 1 | Atferdsfag: modeller, roller og kommunikasjon | 2 | kunne | Blokk 1, 20 %. Biopsykososial modell ~14/16, CanMEDS-roller ~12/16, pasientsentrert metode ~11/16 — svært stabile gjengangere. |
| 3 | 1 | Samfunnsmedisin og epidemiologi | 3 | perfekt | Blokk 1, 20 %. Testegenskaper ~14/16, studiedesign ~13/16, bias, sosiale helseulikheter ~12/16, + 2 faste essay hver sitting. |
| 4 | 1 | Medisinsk statistikk (med regning) | 5 | perfekt | Blokk 1, **40 % — tyngst**. KI + hypotesetest ~15/16, 2×2/kji-kvadrat, OR/RR/PR, t-test, styrke, PPV/NPV, rullerende anvendt tema. Regnefag-DNA, mest drill. |
| 5 | 2 | Histologi og vevstolkning | 2 | perfekt | Blokk 2, **14/14** (oppg. A, 9–12 vt). Lys-/elektronmikroskopi + farger + epitel/muskel/nerve/ben/brusk/kjertel — bildetolkning MED begrunnelse. |
| 6 | 2 | Metabolisme og biokjemi | 4 | perfekt | Blokk 2, **14/14, største blokk (14–22 vt)**. Glykolyse/glukoneogenese/glykogen/β-oksidasjon/insulin-glukagon + enzymkinetikk + konsentrasjonsregning. |
| 7 | 2 | Molekylærbiologi og genetikk | 4 | perfekt | Blokk 2, **14/14** (oppg. D/E, opptil 18 vt). Molekylærmetoder + genstruktur-regning, arvegang/slektstre, Hardy-Weinberg, meiose/kromosomavvik/epigenetikk. |
| 8 | 2 | Cellesignalering, cellesyklus og celledød | 3 | perfekt | Blokk 2, **14/14** (oppg. B+C). GPCR/RTK/kjernereseptor/feedback, pRB/CDK/p53-kreft, apoptose (Bax/Bcl-2/cytokrom c). |
| 9 | 2 | Membran, proteinsortering og embryologi | 3 | perfekt | Blokk 2 (oppg. H+I/J). Membranpotensial/Nernst-regning, proteinsortering/cytoskjelett, embryologi (nesten alltid siste oppgave). |
| 10 | 3 | Immunologi | 4 | perfekt | Blokk 3, **~30 %**. T-celleutvikling i thymus **4/4** (sikreste), kimsenter, NK/komplement/PRR, lymfoide organer. |
| 11 | 3 | Mikrobiologi | 3 | perfekt | Blokk 3, **~25 %**. Antibiotika-mekanismer/resistens, pneumokokk-kapsel, Gram-morfologi, virus/sopp/toksiner. |
| 12 | 3 | Blod og hematologi | 2 | kunne | Blokk 3, **~15 %**. Blodutstryk-morfologi, hematopoiese, nøytrofil kinetikk; hemostase (verifiser dekning), O₂-transport, leukotriener. |
| 13 | 3 | Thoraksanatomi (latinsk nomenklatur) | 3 | perfekt | Blokk 3, **~30 %**. Koronarkar/klaffer/apex cordis/ledningssystem, **n. phrenicus 4/4** + mediastinum/store kar, respirasjonsmuskler/pleura/thoraxvegg. |
| 14 | meta | Eksamenstrening (tre former) | 6 | perfekt (meta) | 3 sjanger-/feildrillkapitler (ett per blokks svarlogikk) + 3 komplette øvingseksamener, én i hver av de tre eksamensformene. |

Rasjonale: fordi de tre blokkene er separate bestått/ikke-bestått-eksamener, dekkes
**alle tre fullt ut** — prioriteringen styrer *dybde og drillmengde*, ikke hva som er med.
Innen hver blokk styrer frekvens/vekt omfanget: statistikk (40 %) og de fire 14/14-temaene
i blokk 2 samt anatomi/immunologi i blokk 3 får flest kapitler og tyngst kvote; atferdsfag
og blod dekkes solid men kompakt.

### Seksjonstitler (`sectionNames` i metadata — vises som «Kapittel N: <tittel>» på bokforsiden)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart: tre blokker, tre eksamener |
| 1 | Humanbiologi: celle, kropp og oversiktsfysiologi |
| 2 | Atferdsfag: modeller, roller og kommunikasjon |
| 3 | Samfunnsmedisin og epidemiologi |
| 4 | Medisinsk statistikk (med regning) |
| 5 | Histologi og vevstolkning |
| 6 | Metabolisme og biokjemi |
| 7 | Molekylærbiologi og genetikk |
| 8 | Cellesignalering, cellesyklus og celledød |
| 9 | Membran, proteinsortering og embryologi |
| 10 | Immunologi |
| 11 | Mikrobiologi |
| 12 | Blod og hematologi |
| 13 | Thoraksanatomi (latinsk nomenklatur) |
| 14 | Eksamenstrening (tre former) |

### Sjangerkoder per blokk (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Blokk 1:** `B1-MC` flervalg konseptspørsmål (velg ett / velg TO/TRE, kliniske vignetter,
auto) · `B1-KORT` kortsvar/innfylling (manuelt/auto) · `B1-STAT` statistikk-regne-/
resonnementoppgave i fritekst (**vist utregning + eksplisitte hypoteser + klartekst-
tolkning** kreves) · `B1-ESS` samfunnsmedisin-essay (definisjon + konkret eksempel +
oppramsing «nevn tre …», ofte maks ½ side).

**Blokk 2:** `B2-HIST` histologi/EM-bildetolkning (navngi **og begrunn** ut fra farge/
morfologi) · `B2-MEK` mekanisme-essay (nummerert molekylkjede, riktig rekkefølge) ·
`B2-REGN` regneoppgave (**vist utregning + riktige enheter**, enhetskonvertering
poenggivende) · `B2-RUTE` riktig/galt- eller «klasse 1/2/begge»-rutenett **med NEGATIV
RETTING** (blankt = 0, blankt slår gjetting) · `B2-NED` nedtrekk/utfylling.

**Blokk 3:** `B3-1` velg ett (dominerer, ~75–85 %) · `B3-2` velg to / «angi de 2 mest
riktige» (**nøyaktig to**) · `B3-NOM` latinsk navnegjenkjenning / struktur-ID på bilde ·
`B3-BILDE` morfologigjenkjenning (blodutstryk, histologi, CT/røntgen thorax, hjertetegning).

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**Blokk 1:** `E1` OR/RR forvekslet (eller risikospråk i tverrsnitt der PR/OR kreves) ·
`E2` glemme at OR≈RR/PR bare ved sjelden sykdom/lav prevalens · `E3` statistisk
signifikans ≠ klinisk relevans (stor n) · `E4` tolke ikke-signifikant funn som «ingen
effekt» (underpowered) · `E5` behandle avhengige observasjoner som uavhengige · `E6`
bruke 1,96 der t-verdi kreves (lite utvalg) · `E7` korrelasjon vs. regresjon · `E8`
overse selvseleksjon · `E9` glemme multippel-testing-korreksjon · `E10` overdiagnostikk
vs. falske positive · `E11` glemme faktor 2 i tosidig p-verdi · `E12` svare på lavere
nivå enn spørreordet i essay / mangle klartekst-tolkning etter test.

**Blokk 2:** `E13` kreftgen-forveksling (pRB/p53/CKI = tumorsuppressorer, IKKE proto-
onkogener; cyklin/CDK/E2F = proto-onkogener) · `E14` Hardy-Weinberg: glemme at recessive
sykdomsalleler ligger hos friske bærere; letale recessive alleler er IKKE i HW-likevekt ·
`E15` pentosefosfatshunten gir NADPH, ikke ATP · `E16` glukose-6-fosfatase kun i lever/
nyrebark (ikke erytrocytt/muskel) · `E17` hemmertype-feil (kompetitiv ↑Km/=Vmax;
ikke-kompetitiv ↓Vmax/=Km) · `E18` histologi: serøst/mukøst endestykke eller enlaget/
flerlaget epitel forvekslet · `E19` glemme netto glykolyse → laktat gir 2 ATP, 0 NADH ·
`E20` **gjette på negativt rettet rutenett** (−0,5 per feil; blankt = 0) · `E21`
identifisere histologisk struktur uten begrunnelse · `E22` oppgi sluttsvar uten vist
utregning / glemme enhetskonvertering.

**Blokk 3:** `E23` nære immunologi-distraktorer (MHC I vs II; cortex vs medulla i thymus;
afferente/efferente lymfekar; C3a/C4a/C5a; V- vs C-region) · `E24` «mest korrekt»-fellen
(delvis sant framfor mest presist) · `E25` latinsk upresisjon (bøyning longus/-a/-um,
sinistra/dextra, ventral/dorsal — n. phrenicus vs n. vagus; ramus marginalis dexter vs
circumflexus; fantasinavn ductus botalli/cardiacus vs ductus thoracicus) · `E26`
mikrobiologifeller (Mycoplasma mangler cellevegg → penicillin virker ikke; pneumokokk-
**kapsel** ikke betalaktamase som primær fagocytoseresistens; RNA-virus i cytoplasma /
DNA-virus i kjerne).

### Sensor-kredittregler (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Blokk 1 statistikk:** vist utregning kreves; hypoteser skrives eksplisitt (H₀ og Hₐ
   med parametrene definert); klartekst-tolkning etter test/KI. Riktig tankegang
   premieres over eksakt tallsvar («ikke trekk for følgefeil»). Alternative korrekte
   metoder godtas (kji-kvadrat *eller* Y-test; faktor 2 *eller* 1,96; normal- *eller*
   t-tilnærming ved stor df).
2. **Blokk 2 negativ retting (STRATEGINOTE):** rutenett/flervalg-innslag rettes
   +0,5/−0,5/0 (evt. +0,4/−0,4/0 eller +0,25/−0,25/0). **Laveste sum på oppgaven er
   alltid 0** (aldri negativ totalsum); **blankt = 0**. Derfor: **på rutenett i blokk 2
   lønner det seg IKKE å gjette — blankt slår feil.** (Motsatt av blokk 1 og blokk 3, der
   det ikke er minuspoeng og man ALLTID skal svare.)
3. **Blokk 2 bildetolkning krever begrunnelse:** «begrunn svaret» — det holder ikke å
   navngi vevet, man må vise til morfologiske/farge-kjennetegn.
4. **Blokk 2 regning:** utregning må vises; enhetskonvertering er poenggivende. Delpoeng
   for fornuftig resonnement selv ved feil sluttsvar («feil system, men rett forklaring
   gir 50 %»). Sensor markerer hva som **ikke forventes** (tallverdier, enzymnavn).
5. **Blokk 3:** velg-to = **nøyaktig to** (antall oppgis alltid); antatt at begge må være
   riktige for uttelling *(verifiser plattformoppsett)*. Ingen minuspoeng → svar alltid.
6. **Latinsk nomenklatur** (blokk 3): norsk og/eller latin godtas der pensum bruker det,
   men bøyning og relasjon (sinistra/dextra, ventral/dorsal) må være presis.

### Arketypetilpasning (dokumenterte valg og avvik fra DNA-malene)

1. **Tre parallelle delbøker, ikke én bok (hovedavvik).** Fordi de tre blokkene har helt
   ulikt format, fagområde og svarlogikk og vurderes hver for seg, er hoveddelene
   organisert PER BLOKK, ikke som ett sammenhengende pensumløp. Hver blokk har egen
   drilllogikk og egen øvingseksamen i sitt eget format (Del 14). Dette avviker fra både
   DNA-regnefags og NOKUT-AFBs enkelteksamen-struktur.
2. **Hybrid arketype.** Blokk 1s statistikkdel (Del 4) og blokk 2s regneoppgaver
   (enzymkinetikk, Nernst, dose/osmolaritet, Hardy-Weinberg, genstruktur) følger
   **DNA-regnefag**: `theorem`-blokker med **regneprosedyrer** (algoritmisk fremgangsmåte),
   gjennomregnede eksamenscase med sensor-margnotater, og drill med stigende vanskegrad
   som ender på eksamensnivå. Resten (histologi, anatomi, immunologi, mikrobiologi,
   atferdsfag) er **fakta/pugg** som NOKUT-AFB: definisjonsblokker (flashcard-kilden),
   mekanismekjeder, og for blokk 2 fritekst-momentlister. Blokk 3 er nesten ren
   flervalgs-/latin-drill.
3. **«Symbol- og formelliste» → «Nøkkelfakta- og formelliste» (per kapittel).** README-
   kravet omtolkes: hvert kapittel får en `collapsible` **«Nøkkelfakta- og formelliste»**
   rett etter Forkunnskaper. For statistikk-/regnekapitler = alle formler + kritiske
   verdier + variabelforklaring (som DNA-regnefag krever). For fakta-kapitler =
   normalverdier, latinske kjernenavn og mekanismekjedene som må sitte utenat. Merk:
   blokk 1 HAR formelsamling på eksamen, så statistiske formler skal *forstås og brukes*,
   ikke memoreres — men bøkas liste gir oversikt og bruksbetingelser.
4. **Todelt/tredelt drill.** Quiz = flervalgspresisjon (dominerer blokk 1 og 3 — sikt
   høyt); flashcards = fakta/normalverdi/mekanisme/latin utenat (faget er svært
   faktatungt → HØY flashcard-tetthet, nokut-afb-lærdommen); `example`/`exercise` =
   statistikk-regneprosedyrer (blokk 1) og mekanisme-momentlister + regning (blokk 2).
5. **Eksamensvinkel PER BLOKK.** Fordi et tema kan opptre i flere blokker med ulik form
   (f.eks. immunforsvar-oversikt i blokk 1 MC vs. T-celleutvikling i blokk 3 flervalg vs.
   signalering i blokk 2 essay), sier hver `tip` **Eksamensvinkel** eksplisitt hvilken
   blokk kapitlet trener, med hvilken form/vekt og hva sensor ser etter i akkurat den
   blokken.
6. **Ingen oppdiktede verdier.** Normalverdier, doser og latinske navn forankres i
   standard pensum; usikre detaljer merkes `(verifiser)`. Alle statistikk-/regneoppgaver
   har NYSKREVNE tallverdier (opphavsrett, §6).

### Kapittel-DNA (temakapittel — obligatorisk blokk-rekkefølge)

1. `tip` **Eksamensvinkel** — hvilken blokk, form (B1/B2/B3-sjangre), frekvens/vekt,
   retteform, og hva sensor ser etter. Fylles fra Eksamensbelegg under — forfatteren
   finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), etterfulgt av `collapsible` **Nøkkelfakta- og formelliste** (formler +
   kritiske verdier + variabelforklaring for regnekapitler; normalverdier + latinske navn
   + mekanismekjeder for fakta-kapitler — per kapittel).
3. `text` **Oversikt** — kort (maks 2–3 avsnitt): hva temaet er og hvorfor det testes.
4. `definition` **Kjernefakta** — begreper, struktur, normalverdier, latinske navn i
   EMNETS terminologi. **Toppnivå med `title` — dette er flashcard-kilden.**
5. `theorem`/`text` — for regnekapitler: **Regneprosedyre** (algoritmisk fremgangsmåte,
   theorem-blokk) + resultater i emnets notasjon; for fakta-kapitler: **Mekanismekjeder**
   nummerert trinnvis (rekkefølge kritisk).
6. `example` × 2–4 — første enkelt, siste på EKSAMENSNIVÅ modellert på reell sjanger.
   Regnecase skrives som A-besvarelse med vist utregning + enheter + klartekst-tolkning;
   blokk 2-essay som full-pott-momentliste med spørreordet markert og delpoeng synlige;
   histologi/bilde som begrunnet vevstolkning.
7. `warning` **Typiske feil** — feilkodene (E1–E26) som gjelder temaet.
8. `exercise` × 6–12 — stigende, i kapitlets blokk-sjangre (blandet der temaet går i
   flere blokker), alle med `solution` + `hints`. Statistikk/regning: 2–3 innøving, 2–4
   standard, 2–4 eksamensklone. Hver oppgave merket med sjangerkode + blokk.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og forutgående.

Drill- og øvingseksamenskapitlene (Del 14) har egne oppsett — se §3.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = blokk + form/vekt/frekvens + sjangerkoder +
> prioritetsklasse. **Faktakontrakt** = definisjoner/struktur/normalverdier/latin som
> SKAL med. **Regneprosedyre** (regnekapitler) = algoritmisk fremgangsmåte som
> theorem-blokk. **Mekanismekjeder** = årsakskjeder rekonstruert trinnvis. **Fritekst-
> momentlister** (blokk 2) = modellsvar `example`-blokkene skal levere. **MC-drill** =
> flervalgs-/rutenett-sjangre kapitlet øver. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart: tre blokker, tre eksamener

#### Kapittel 0.1: Tre blokker, tre eksamener
**id:** `med1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Hvorfor modul 1 er tre separate bestått/ikke-bestått-eksamener med
  helt ulikt format, hva hver blokk tester og teller, hvilke hjelpemidler som er tillatt,
  og hvordan boka brukes som tre parallelle delbøker mot de tre eksamensdagene.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2021–2026). Skal formidle: (a) **tre
  blokker** som må bestås hver for seg — ingen kompensasjon; (b) **formene**: blokk 1 =
  digital Inspera ~5 t, blandet flervalg + kortsvar/essay + statistikkregning, 4
  seksjoner (Humanbiologi/Atferdsfag/Samfunnsmedisin á 20 % + Statistikk 40 %), **med
  kalkulator + statistiske tabeller + formelsamling**; blokk 2 = skriftlig 6 t (09–15),
  rent essay/kortsvar/regning/bildetolkning, 9–12 oppgaver A–L med vekttall **sum 100**,
  kalkulator; blokk 3 = digital Inspera, rent flervalg fra bank ~90–110 spm, 4 seksjoner
  (Anatomi thorax ~30 %, Immunologi ~30 %, Mikrobiologi ~25 %, Fysiologi/blod ~15 %),
  ingen hjelpemidler; (c) **hjelpemiddel-kontrasten**: to av tre blokker har kalkulator
  (blokk 1 dessuten tabeller/formelsamling) — statistikk tester bruk, ikke pugg, av
  formler; (d) **minuspoeng**: kun blokk 2 har negativ retting, og kun på rutenett
  (utdypes i 0.2); blokk 1 og 3 har det ikke; (e) **de tre svarlogikkene** boka driller.
  Prioritet: perfekt (meta).
- **Faktakontrakt:** blokk-oversiktstabellen (tema/form/tid/svartype/struktur/hjelpemidler/
  retting); seksjonsvektene; hvilke temaer som ligger i hvilken blokk (kart til Del 1–13).
- **Mekanismekjeder:** ingen (kartkapittel).
- **Fritekst-momentlister:** «Slik ser en oppgave ut i hver blokk» — ett nyskrevet
  minieksempel per blokk (en B1-MC + B1-STAT; en B2-MEK + B2-RUTE; en B3-1 + B3-2) med
  hvordan poeng høstes.
- **MC-drill:** gjenkjenn blokk og sjanger fra oppgaveformuleringen.
- **Typiske feil:** tro at man kan kompensere svak blokk; blande hjelpemiddelreglene
  (gjette at man kan slå opp statistiske formler i blokk 2/3 — kun blokk 1).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 0.2: Eksamensstrategi per blokk — og minuspoeng-strategien i blokk 2
**id:** `med1100-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `med1100-0-1`

- **Kapitteltype:** eksamensteknikk (strateginote).
- **Description:** Hvordan man skårer i hver av de tre formene — vist statistikkregning
  med eksplisitte hypoteser (blokk 1), nummerert mekanisme-essay og bildebegrunnelse
  (blokk 2), latinsk flervalgspresisjon (blokk 3) — og den avgjørende **minuspoeng-
  strategien for blokk 2s rutenett**.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile 2021→. Prioritet:
  perfekt (meta). Skal operasjonalisere de seks sensor-kredittreglene i §2, med
  **minuspoeng-strategien som egen, uthevet strateginote**: på blokk 2s rutenett/flervalg
  er retting +0,5/−0,5/0 (evt. +0,4/−0,4/0 eller +0,25/−0,25/0), **laveste oppgavesum = 0,
  blankt = 0 → blankt slår gjetting**; men i blokk 1 og blokk 3 er det INGEN minuspoeng,
  så der svarer man ALLTID. Denne asymmetrien er en av de vanligste tabbene.
- **Faktakontrakt:** de seks kredittreglene; **minuspoeng-beslutningsregelen** (gjett i
  blokk 1/3, blankt ved usikkerhet i blokk 2-rutenett); spørreordtrappen for blokk 2-
  essay (beskriv/forklar/gjør rede for — svar på riktig nivå, E12); krav om vist utregning
  + eksplisitte hypoteser + klartekst-tolkning i statistikk; krav om begrunnelse ved
  bildetolkning; velg-to = nøyaktig to.
- **Regneprosedyre:** «slik føres en statistikkoppgave for full pott» (definer parameter →
  skriv H₀/Hₐ → velg test → sett inn → sammenlign med kritisk verdi → **konkluder i ord**).
- **Fritekst-momentlister:** samme mekanismespørsmål besvart på tre nivåer (beskriv/
  forklar/gjør rede for) med margnotat om hvor poengene faller; en rutenett-oppgave løst
  med minuspoeng-disiplin (svar kun det du er sikker på).
- **MC-drill:** «skal du gjette her?» — gjenkjenn om oppgaven har minuspoeng (blokk) ;
  spørreord-gjenkjenning.
- **Typiske feil:** `E20` (gjette på blokk 2-rutenett), `E12` (feil svarnivå / mangle
  tolkning), `E22` (sluttsvar uten utregning/enhet), å la være å svare i blokk 1/3.
- **Kvote:** 12 quiz / 8 flashcards.

### Del 1 — Humanbiologi: celle, kropp og oversiktsfysiologi (BLOKK 1)

#### Kapittel 1.1: Cellen, celledeling og kjønnsceller
**id:** `med1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Prokaryot vs. eukaryot celle, endosymbioseteorien, og meiose med
  haploid/diploid — grunnbiologien som blokk 1 tester på oversiktsnivå.
- **Eksamensbelegg:** Blokk 1, Humanbiologi (20 %). Celle prokaryot/eukaryot + endosymbiose
  ~6/16; kjønnsceller/meiose (haploid/diploid) ~6/16. Form: B1-MC (velg ett/to), B1-KORT.
  Prioritet: kunne.
- **Faktakontrakt:** prokaryot (ingen kjerne/membranorganeller, bakterier) vs. eukaryot
  (kjerne + organeller); endosymbioseteorien (mitokondrier/kloroplaster fra oppslukte
  bakterier — eget DNA, dobbeltmembran); haploid (n) vs. diploid (2n); meiose gir fire
  haploide kjønnsceller med rekombinasjon; mitose vs. meiose kort. `(verifiser)` detaljert
  fasetall.
- **Mekanismekjeder:** (1) meiose i grove trekk (DNA-dobling → meiose I reduksjon → meiose
  II → fire haploide celler).
- **MC-drill:** prokaryot/eukaryot-kjennetegn (B1-MC); haploid/diploid ved ulike celletyper;
  hva endosymbioseteorien forklarer.
- **Typiske feil:** blande mitose/meiose; feil kromosomtall etter meiose I vs. II.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 1.2: Sirkulasjon og syre-base på oversiktsnivå
**id:** `med1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Minuttvolum = slagvolum × hjertefrekvens (inkl. kompensasjon ved
  blodtap), og syre-base-balansen (hyperventilering → CO₂ ut → pH opp) — to av blokk 1s
  sikreste humanbiologi-gjengangere.
- **Eksamensbelegg:** Blokk 1, Humanbiologi. **Minuttvolum = slagvolum × hjertefrekvens**
  ~10/16 (ofte kompensasjon ved blodtap); syre-base (hyperventilering/pH) ~8/16;
  CO₂-transport ~10 % oppløst / ~20 % Hb-bundet / ~70 % bikarbonat `(verifiser — eldre
  sett)`. Form: B1-MC, B1-KORT, av og til B1-STAT-lignende regning. Prioritet: kunne.
- **Faktakontrakt:** **minuttvolum (MV) = slagvolum (SV) × hjertefrekvens (HF)**;
  kompensasjon ved blodtap (HF opp for å holde MV); syre-base: hyperventilering → CO₂ ut →
  H⁺ ned → **pH opp** (respiratorisk alkalose), hypoventilering → motsatt; bikarbonat-
  buffersystemet grovt (CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻); normal blod-pH 7,35–7,45
  `(verifiser)`.
- **Mekanismekjeder:** (1) blodtapskompensasjon (redusert SV → økt HF → MV opprettholdt);
  (2) hyperventilering → pH-endring (retningskjede).
- **Regneprosedyre:** MV-regning (SV × HF; finn manglende ledd) — enkel B1-KORT/STAT.
- **MC-drill:** hva skjer med pH ved hyper-/hypoventilering (B1-MC); regn ut MV/SV/HF.
- **Typiske feil:** snu pH-retningen ved hyperventilering; blande oppløst/Hb-bundet/
  bikarbonat-andelene.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 1.3: Nyrefysiologi og nervevev
**id:** `med1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 1).
- **Description:** ADH/akvaporiner og reabsorpsjon i nyren, og nervevevets celler
  (myelin, gliaceller, blod-hjerne-barriere, aksjonspotensial) — på blokk 1s oversiktsnivå.
- **Eksamensbelegg:** Blokk 1, Humanbiologi. Nyrefysiologi (ADH/akvaporiner, ~99 % vann
  reabsorberes, glukose ~100 %) ~9/16; nervevev/gliaceller (myelin: Schwann i PNS,
  oligodendrocytter i CNS; astrocytter/BHB; aksjonspotensial) ~9/16. Form: B1-MC, B1-KORT.
  Prioritet: kunne.
- **Faktakontrakt:** nefronets tre grovprosesser (filtrasjon → reabsorpsjon → sekresjon,
  detaljer i blokk 2 er ikke krevd her); **ADH** øker vannreabsorpsjon via **akvaporiner**
  i samlerør; **~99 % av filtrert vann** og **~100 % av glukose** reabsorberes `(verifiser)`;
  gliaceller: **Schwann-celler** (myelin i PNS), **oligodendrocytter** (myelin i CNS),
  **astrocytter** (blod-hjerne-barriere, støtte); aksjonspotensial grovt (depolarisering
  Na⁺ inn → repolarisering K⁺ ut; myelin gir saltatorisk ledning).
- **Mekanismekjeder:** (1) ADH-effekten (ADH → akvaporiner settes inn → vann reabsorberes →
  konsentrert urin); (2) saltatorisk ledning (myelin + Ranviers innsnøringer → rask ledning).
- **MC-drill:** hvilken celle lager myelin hvor (B1-MC, nær distraktor CNS/PNS); ADH-effekt
  på urin; hva reabsorberes ~100 %.
- **Typiske feil:** bytte Schwann/oligodendrocytt (PNS/CNS); tro ADH øker urinmengden.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 1.4: Fordøyelse, metabolisme-oversikt og signalering
**id:** `med1100-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Fordøyelsens grovtrinn (galle/emulgering, pankreas eksokrin, pepsinogen→
  pepsin), metabolisme-oversikt (anabolisme/katabolisme, faste/postabsorptiv fase),
  hormonell signalering (autokrin/parakrin/endokrin) og immunforsvar-oversikt — på blokk
  1-nivå (molekylærdybden ligger i blokk 2).
- **Eksamensbelegg:** Blokk 1, Humanbiologi. Fordøyelse ~7/16; metabolisme-oversikt ~6/16;
  hormonell signalering (autokrin/parakrin/endokrin) ~5/16; immunforsvar (medfødt/adaptivt,
  antibiotikaresistens) ~6/16. Form: B1-MC, B1-KORT. Prioritet: kunne. NB: metabolisme og
  immunforsvar behandles i DYBDEN i blokk 2/3 (Del 6, 10) — her kun oversikt.
- **Faktakontrakt:** **galle** emulgerer fett (leveren lager, galleblæren lagrer); **pankreas
  eksokrin** (fordøyelsesenzymer til tarm); **pepsinogen → pepsin** (aktiveres av magesyre,
  bryter protein); **anabolisme** (bygge, energikrevende) vs. **katabolisme** (bryte ned,
  energifrigjørende); **faste/postabsorptiv fase** (glukagon dominerer, glukose frigjøres)
  vs. mett/absorptiv (insulin); signaltyper: **autokrin** (på seg selv), **parakrin** (på
  naboceller), **endokrin** (via blod til fjerne mål); medfødt (rask, uspesifikk) vs.
  adaptivt (spesifikt, hukommelse) immunforsvar; antibiotikaresistens grovt.
- **Mekanismekjeder:** (1) fett-fordøyelse (galle emulgerer → større overflate → pankreas-
  lipase bryter → opptak); (2) faste-respons (blodsukker synker → glukagon → glukose fra
  lever).
- **MC-drill:** autokrin/parakrin/endokrin-eksempler (B1-MC); anabolisme/katabolisme;
  hvilken fase glukagon dominerer; medfødt vs. adaptivt.
- **Typiske feil:** blande anabolisme/katabolisme; bytte parakrin/endokrin; tro pankreas
  kun er endokrin.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 2 — Atferdsfag: modeller, roller og kommunikasjon (BLOKK 1)

#### Kapittel 2.1: Den biopsykososiale modellen og legens roller
**id:** `med1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Den biopsykososiale modellen og CanMEDS-rollene — blokk 1s aller
  sikreste atferdsfag-gjengangere (nesten hver sitting).
- **Eksamensbelegg:** Blokk 1, Atferdsfag (20 %). **Biopsykososial modell ~14/16** (nesten
  hver sitting); **legens roller (CanMEDS-lignende) ~12/16**. Form: B1-MC (kliniske
  vignetter — riktig svar er det helhetlige/empatiske alternativet), B1-KORT. Prioritet:
  perfekt (innen blokk 1 er dette et sikkert poeng).
- **Faktakontrakt:** **biopsykososial modell** — helse/sykdom forstås som samspill mellom
  **biologiske**, **psykologiske** og **sosiale** faktorer (kontrast: rent biomedisinsk
  modell); **CanMEDS-rollene**: medisinsk ekspert (kjernen), kommunikator, samarbeider,
  leder, helseforkjemper/talsperson, akademiker, forvalter; predisponerende/utløsende/
  vedlikeholdende faktorer (kort, utdypes i 2.2).
- **Mekanismekjeder:** (1) biopsykososial analyse av en case (identifiser bio-/psyko-/
  sosial-faktor for samme pasient).
- **MC-drill:** koble situasjon til CanMEDS-rolle (B1-MC); gjenkjenn biopsykososiale
  faktorer; velg det helhetlige alternativet.
- **Typiske feil:** velge rent biomedisinsk framfor biopsykososialt alternativ; blande
  CanMEDS-rollene.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 2.2: Pasientsentrert klinisk metode og kommunikasjon
**id:** `med1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `med1100-2-1`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Pasientsentrert klinisk metode, kommunikasjonsmodellen, disease/illness/
  sickness og predisponerende/utløsende/vedlikeholdende faktorer.
- **Eksamensbelegg:** Blokk 1, Atferdsfag. Pasientsentrert metode ~11/16; kommunikasjons-
  modell ~10/16; disease/illness/sickness ~5/16; predisponerende/utløsende/vedlikeholdende
  ~5/16; kommunikasjon med barn/ungdom ~6/16. Form: B1-MC (empatisk/autonomirespekterende/
  alderstilpasset alternativ er riktig), B1-KORT. Prioritet: kunne.
- **Faktakontrakt:** **pasientsentrert metode** (kartlegg *hvorfor* pasienten kommer:
  oppfatninger/bekymringer/forventninger — «ideas, concerns, expectations»); **kommunikasjons-
  modellen** (start åpent → kombiner åpne og lukkede spørsmål → mikro-oppsummeringer →
  empati); **disease** (medisinsk diagnose) / **illness** (pasientens opplevelse) /
  **sickness** (samfunnets fortolkning); predisponerende (sårbarhet) / utløsende (trigger) /
  vedlikeholdende (opprettholder) faktorer; alderstilpasset kommunikasjon (barn/ungdom).
- **Mekanismekjeder:** (1) en pasientsentrert samtale trinnvis (åpne → utforske ICE →
  lukkede → oppsummere → felles plan).
- **MC-drill:** velg det empatiske/autonomirespekterende svaret (B1-MC); disease/illness/
  sickness-eksempler; kategoriser faktorer.
- **Typiske feil:** velge lukket/paternalistisk framfor åpent/autonomirespekterende svar;
  blande disease/illness/sickness; feil faktorkategori.
- **Kvote:** 12 quiz / 14 flashcards.

### Del 3 — Samfunnsmedisin og epidemiologi (BLOKK 1)

#### Kapittel 3.1: Diagnostiske testegenskaper
**id:** `med1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 1, regnetungt).
- **Description:** Sensitivitet, spesifisitet, PPV og NPV — og den avgjørende innsikten at
  PPV/NPV avhenger av prevalens mens sensitivitet/spesifisitet ikke gjør det. Bygg 2×2 og
  regn.
- **Eksamensbelegg:** Blokk 1, Samfunnsmedisin (20 %). **Testegenskaper (sens/spes/PPV/NPV)
  ~14/16** — den sikreste i seksjonen. Form: B1-STAT (bygg 2×2 for f.eks. 10 000 personer,
  regn PPV/NPV, vis prevalensavhengighet), B1-MC. Prioritet: perfekt.
- **Faktakontrakt:** **sensitivitet** = sanne pos / (sanne pos + falske neg) = P(pos test |
  syk); **spesifisitet** = sanne neg / (sanne neg + falske pos) = P(neg test | frisk);
  **PPV** = sanne pos / (sanne pos + falske pos); **NPV** = sanne neg / (sanne neg + falske
  neg); **PPV/NPV avhenger av prevalens**, sens/spes gjør ikke; eksplisitt formel: NPV =
  spes·(1−prev) / [spes·(1−prev) + (1−sens)·prev].
- **Regneprosedyre (theorem):** (1) velg populasjonsstørrelse (f.eks. 10 000); (2) fordel
  etter prevalens (syke/friske); (3) fyll 2×2 med sens/spes; (4) les av PPV/NPV fra
  kolonnene; (5) gjenta med annen prevalens → vis at PPV stiger med prevalens.
- **Fritekst-momentlister:** «Forklar hvorfor PPV øker med prevalens» (klartekst-tolkning).
- **MC-drill:** hvilke mål endres med prevalens (B1-MC); les av sens/spes fra 2×2.
- **Typiske feil:** blande sensitivitet/PPV; tro sens/spes endres med prevalens; `E12`
  (mangle tolkning).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 3.2: Studiedesign og bias
**id:** `med1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-3-1`

- **Kapitteltype:** tema (blokk 1).
- **Description:** Kohort, tverrsnitt, kasus-kontroll, RCT og økologisk design — og
  systematiske feilkilder (seleksjon, informasjon, konfundering).
- **Eksamensbelegg:** Blokk 1, Samfunnsmedisin. **Studiedesign ~13/16**; bias (seleksjon/
  frafall, informasjon/recall, konfundering) ~10/16. Form: B1-MC, B1-KORT, B1-ESS.
  Prioritet: perfekt.
- **Faktakontrakt:** **kohort** (følger eksponerte/ueksponerte over tid → insidens/RR);
  **kasus-kontroll** (syke vs. friske, ser bakover → OR); **tverrsnitt** (øyeblikksbilde →
  prevalens/PR); **RCT** (randomisering balanserer også ukjente konfundere); **økologisk**
  (gruppenivå — økologisk feilslutning); bias: **seleksjonsbias** (selvseleksjon, frafall),
  **informasjonsbias** (recall, målefeil), **konfundering** (tredje faktor); reliabilitet
  (repeterbarhet) vs. validitet (treffer sant).
- **Mekanismekjeder:** (1) hvorfor randomisering fjerner konfundering (også ukjent);
  (2) hvordan seleksjon oppstår ved frivillige grupper.
- **MC-drill:** koble design til effektmål (kohort→RR, kasus-kontroll→OR, tverrsnitt→PR)
  (B1-MC); identifiser biastype i en case.
- **Typiske feil:** `E1` (risikospråk i tverrsnitt), `E8` (selvseleksjon oversett), blande
  reliabilitet/validitet, feil design→effektmål.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 3.3: Epidemiologiske mål, folkehelse og samfunnsmedisin-essayet
**id:** `med1100-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-3-2`

- **Kapitteltype:** tema (blokk 1, med essaydrill).
- **Description:** Prevalens/insidens, sosiale helseulikheter, ernæring/fedme, helse-
  tjenestens organisering og overdiagnostikk — og malen for de to faste samfunnsmedisin-
  essayene hver sitting.
- **Eksamensbelegg:** Blokk 1, Samfunnsmedisin. Sosiale helseulikheter (gradient,
  determinanter) ~12/16; ernæring/fedme ~10/16; helsetjenestens organisering ~10/16;
  prevalens/insidens ~9/16; overdiagnostikk ~6/16; WHOs helsedefinisjon ~6/16; klima og
  helse ~6/16 (økende); + **2 samfunnsmedisin-essay per sitting** (B1-ESS: definisjon +
  konkret eksempel + oppramsing, ofte maks ½ side). Prioritet: perfekt.
- **Faktakontrakt:** **prevalens** (andel med sykdom på et tidspunkt) vs. **insidens** (nye
  tilfeller per tid; insidensrate = hendelser/persontid); **sosiale helseulikheter**
  (sosial gradient; forklaringsmodeller: materiell/psykososial/livsløp/helseatferd);
  ernæring/fedme (global fedmeepidemi, fosterprogrammering/«thrifty phenotype», WHOs
  feilernæringsbegrep); helsetjenestens organisering (**kommune** = fastlege/allmennlege,
  selvstendig næringsdrivende m/basistilskudd; **fylkeskommune** = tannhelse; **stat/
  helseforetak** = spesialisthelsetjeneste; LEON-prinsippet); offentlig andel av
  helsefinansiering ~85 % `(verifiser)`; ikke-smittsomme sykdommers andel av global død
  ~74 % `(verifiser)`; topp dødsårsak = iskemisk hjertesykdom; **overdiagnostikk**
  (asymptomatisk, ekte, men aldri klinisk relevant funn — ikke det samme som falsk
  positiv); WHOs helsedefinisjon (fullstendig fysisk/psykisk/sosialt velvære).
- **Regneprosedyre (theorem):** persontid/insidensrate (summer personår → rate =
  hendelser/persontid).
- **Fritekst-momentlister:** modell-essay «Gjør rede for sosiale helseulikheter og nevn tre
  forklaringsmodeller» (B1-ESS: definisjon + eksempel + tre punkter); «Forklar forskjellen
  på overdiagnostikk og falsk positiv»; «Nevn tre årsaker til og tre tiltak mot fedme».
- **MC-drill:** ansvarsnivå for tjeneste (B1-MC: kommune/fylke/stat); prevalens vs.
  insidens; overdiagnostikk-gjenkjenning.
- **Typiske feil:** `E10` (overdiagnostikk vs. falsk positiv), blande prevalens/insidens,
  feil forvaltningsnivå, `E12` (essay uten konkret eksempel).
- **Kvote:** 14 quiz / 16 flashcards.

### Del 4 — Medisinsk statistikk (med regning) (BLOKK 1 — regnefag-DNA, 40 %)

> Tyngste seksjon i blokk 1. Følger DNA-regnefag: hvert kapittel har `theorem`
> **Regneprosedyre**, gjennomregnet eksamenscase, og drill med stigende vanskegrad.
> Blokk 1 HAR formelsamling + statistiske tabeller + kalkulator — så formlene skal
> FORSTÅS og BRUKES, ikke pugges; boka gir oversikt, bruksbetingelser og feilvaksine.
> Sensor krever **vist utregning, eksplisitte hypoteser (H₀/Hₐ) og klartekst-tolkning**;
> «ikke trekk for følgefeil»; alternative korrekte metoder godtas. Alle tall NYSKREVNE.

#### Kapittel 4.1: Konfidensintervall for andel og gjennomsnitt
**id:** `med1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-3-1`

- **Kapitteltype:** tema (blokk 1, regnefag).
- **Description:** 95 %-konfidensintervall for en andel og for et gjennomsnitt (og for
  risikodifferanse) — den aller hyppigste statistikkoppgaven, med tolkning av om
  intervallet dekker 0.
- **Eksamensbelegg:** Blokk 1, Statistikk (40 %). **KI (95 %) for andel og gjennomsnitt
  ~15/16** — nesten hver sitting. Form: B1-STAT. Prioritet: perfekt (tyngst i faget).
- **Faktakontrakt:** KI for andel: **p̂ ± 1,96·√(p̂(1−p̂)/n)** (faktor 2 godtas); KI for
  gjennomsnitt: **x̄ ± t·(s/√n)** (1,96 ved stor df); risikodifferanse-KI analogt;
  tolkning: dekker intervallet **0** (differanse) eller **1** (OR/RR)? kritisk verdi
  **1,96** (tosidig 5 %); normaltilnærming når np og n(1−p) ≥ 5.
- **Regneprosedyre (theorem):** (1) beregn estimatet (p̂ eller x̄); (2) beregn standardfeil;
  (3) multipliser med 1,96 (eller t); (4) legg til/trekk fra estimatet; (5) **tolk i ord**
  (dekker 0/1 → ikke signifikant).
- **Fritekst-momentlister:** «Regn ut og tolk et 95 % KI for andelen» (full føring med
  tolkning).
- **MC-drill:** hvilken kritisk verdi (1,96); hva betyr et KI som dekker 0.
- **Typiske feil:** `E6` (1,96 der t kreves ved lite utvalg), glemme kvadratrot i SE,
  `E12` (ingen tolkning), tolke KI som «95 % av observasjonene».
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 4.2: Hypotesetesting, z- og t-test
**id:** `med1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 70 · **prerequisites:** `med1100-4-1`

- **Kapitteltype:** tema (blokk 1, regnefag).
- **Description:** Formell hypotesetest med eksplisitte hypoteser på 5 %-nivå, ett-
  proporsjons z-test, ett-/to-utvalgs og parret t-test, og p-verdien — med konklusjon i
  klartekst.
- **Eksamensbelegg:** Blokk 1, Statistikk. **Hypotesetest ~15/16**; t-test ~11/16;
  p-verdi ~9/16. Form: B1-STAT (eksplisitte H₀/Hₐ, vist teststørrelse, konklusjon i ord).
  Prioritet: perfekt.
- **Faktakontrakt:** hypoteser: **H₀** (ingen effekt/likhet) og **Hₐ** (tosidig som regel);
  ett-proporsjons z-test: **Z = (X − np₀)/√(np₀(1−p₀))**, kritisk **1,96** (tosidig 5 %);
  t-test (ett-/to-utvalgs/parret) mot t-tabell (t-verdi ved lav df, 1,96 ved stor df —
  t-verdier: 2,021 ved 40 df, 2,145 ved 14 df, 1,98 ved 120 df); **p-verdi for tosidig
  test = 2 × ensidig sannsynlighet**; **parret t-test** når observasjonene er avhengige
  (før/etter samme individ).
- **Regneprosedyre (theorem):** (1) definer parameter; (2) skriv H₀ og Hₐ; (3) velg test;
  (4) beregn teststørrelse; (5) sammenlign med kritisk verdi / finn p; (6) **konkluder i
  ord** (forkast/behold H₀; hva betyr det faglig).
- **Fritekst-momentlister:** «Sett opp hypotesene, utfør testen og konkluder» (full A-føring).
- **MC-drill:** velg riktig test (parret vs. uavhengig); tosidig p = 2× ensidig; når t vs. z.
- **Typiske feil:** `E5` (avhengige obs. som uavhengige → skulle brukt parret), `E6`
  (1,96 der t kreves), `E11` (glemme faktor 2 i p), `E4` (ikke-signifikant = «ingen
  effekt»), `E3` (signifikans ≠ klinisk relevans), mangle eksplisitte hypoteser.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 4.3: 2×2-tabeller: kji-kvadrat, OR, RR og PR
**id:** `med1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-4-2`

- **Kapitteltype:** tema (blokk 1, regnefag).
- **Description:** Kji-kvadrattest for en 2×2-tabell, og beregning/tolkning av odds ratio,
  relativ risiko, prevalensratio og risikodifferanse — inkludert når OR tilnærmer RR/PR.
- **Eksamensbelegg:** Blokk 1, Statistikk. **2×2 + kji-kvadrat ~12/16**; **OR/RR/PR/
  risikodifferanse med tolkning ~12/16**. Form: B1-STAT. Prioritet: perfekt.
- **Faktakontrakt:** **χ² = N(ad−bc)² / [(a+b)(a+c)(b+d)(c+d)]**, sammenlign med **3,84**
  (1 fg, 5 %); Y-test (z mot 1,96) godtas som alternativ; **OR = ad/bc**; **RR =
  (a/(a+b))/(c/(c+d))**; **PR** analogt (tverrsnitt); risikodifferanse = forskjell i
  risiko; **OR ≈ RR ved sjelden sykdom / OR ≈ PR ved lav prevalens**; tolkning i klartekst
  («oddsen er 1,4 ganger så høy», «prevalensen er 84 % høyere»).
- **Regneprosedyre (theorem):** (1) sett opp 2×2 med a,b,c,d riktig plassert; (2) for test:
  regn χ² → sammenlign 3,84; (3) for effekt: regn OR/RR/PR; (4) **tolk i ord** + vurder om
  OR≈RR/PR-betingelsen holder.
- **Fritekst-momentlister:** «Regn ut OR og RR og forklar når de er tilnærmet like»
  (tolkning + betingelse).
- **MC-drill:** kritisk χ²-verdi (3,84); OR vs. RR fra samme tabell; når OR≈RR.
- **Typiske feil:** `E1` (OR/RR forvekslet), `E2` (glemme sjelden-sykdom-betingelsen),
  feil celleplassering, `E12` (ingen klartekst-tolkning).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 4.4: Utvalgsstørrelse, styrke og binomisk fordeling
**id:** `med1100-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-4-2`

- **Kapitteltype:** tema (blokk 1, regnefag).
- **Description:** Beregne nødvendig utvalgsstørrelse for gitt styrke, og bruke binomisk
  fordeling med normaltilnærming.
- **Eksamensbelegg:** Blokk 1, Statistikk. Utvalgsstørrelse/styrke (80/90 %) ~10/16;
  binomisk fordeling (μ=np, normaltilnærming) ~7/16. Form: B1-STAT. Prioritet: perfekt
  (men noe lavere frekvens enn 4.1–4.3).
- **Faktakontrakt:** utvalgsstørrelse (kontinuerlig): **n = 2(σ/Δ)²·k** per gruppe, med
  **k ≈ 10,5 (90 % styrke)**, **k ≈ 7,9 (80 %)** ved 5 %-nivå; **rund alltid opp** og legg
  til forventet frafall; **styrke** = P(påvise reell effekt) = 1 − β; binomisk: **μ = np**,
  **σ = √(np(1−p))**, normaltilnærming når np og n(1−p) ≥ 5.
- **Regneprosedyre (theorem):** (1) hent σ, Δ (minste klinisk relevante forskjell) og k;
  (2) sett inn i n-formelen; (3) rund opp; (4) juster for frafall.
- **Fritekst-momentlister:** «Beregn nødvendig gruppestørrelse for 90 % styrke» (full føring
  m/opprunding og frafall).
- **MC-drill:** hvilken k for 80/90 %; effekt av mindre Δ på n (større n); μ og σ binomisk.
- **Typiske feil:** ikke runde opp, glemme frafall, blande styrke og signifikansnivå,
  `E4` (feiltolke underpowered).
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 4.5: Anvendte metoder — flokkimmunitet, overlevelse og regresjon
**id:** `med1100-4-5` · **number:** 4.5 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-4-3`

- **Kapitteltype:** tema (blokk 1, regnefag — det rullerende temaet).
- **Description:** Det «anvendte» statistikktemaet som rullerer per sitting: R₀/
  flokkimmunitet, Kaplan-Meier-overlevelse, lineær regresjon/korrelasjon, og multippel
  testing.
- **Eksamensbelegg:** Blokk 1, Statistikk. **Ett anvendt tema rullerer per sitting.**
  R₀/flokkimmunitet ~6/16; Kaplan-Meier/sensurering ~6/16; lineær regresjon/korrelasjon
  ~6/16; statistisk vs. klinisk signifikans ~5/16; multippel testing/Bonferroni ~3/16.
  Form: B1-STAT, B1-MC. Prioritet: perfekt (må dekke alle fordi ett garantert kommer).
- **Faktakontrakt:** **R₀** = kontaktrate × smittesannsynlighet × varighet; **R_eff = R₀·S**
  (S = mottakelig andel); **kritisk vaksinasjonsdekning = 1 − 1/R₀**; **Kaplan-Meier**:
  kumulativ overlevelse = produkt av (1 − 1/r) ved hvert hendelsestidspunkt, 1 ved
  sensurering; **lineær regresjon**: koeffisient = endring i Y per enhet X (med KI/p);
  **korrelasjon** = spredning om linja (uavhengig av stigningstall); **multippel testing**
  (mange tester → oppblåst falsk-positiv-rate → Bonferroni); signifikans ≠ klinisk relevans.
- **Regneprosedyre (theorem):** (1) flokkimmunitet: R₀ → 1 − 1/R₀; (2) Kaplan-Meier:
  levetidstabell med (1 − 1/r), kumulativt produkt; (3) regresjon: tolk koeffisient + KI.
- **Fritekst-momentlister:** «Beregn kritisk vaksinasjonsdekning og tolk»; «Les av og tolk
  en Kaplan-Meier-kurve».
- **MC-drill:** flokkimmunitet-formel; korrelasjon vs. regresjon (B1-MC); hva sensurering
  betyr.
- **Typiske feil:** `E7` (korrelasjon vs. regresjon), `E9` (multippel testing glemt),
  `E3` (signifikans/klinisk relevans), feil i 1 − 1/R₀.
- **Kvote:** 16 quiz / 16 flashcards.

### Del 5 — Histologi og vevstolkning (BLOKK 2)

> Blokk 2 er 6-timers skriftlig, rent essay/regning/bilde, 9–12 oppgaver A–L med vekttall
> sum 100. Histologi er oppgave A på hver sitting (14/14). Bildetolkning krever
> **begrunnelse ut fra farge/morfologi** — navngiving uten begrunnelse gir ikke poeng.

#### Kapittel 5.1: Lysmikroskopi, farger og epitelvev
**id:** `med1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 2, bildetolkning).
- **Description:** Histologiske farger (HE, PAS) og hva de binder, og de ulike epiteltypene
  — å navngi vevet OG begrunne ut fra farge/morfologi.
- **Eksamensbelegg:** Blokk 2, oppgave A histologi (**14/14**, 9–12 vt). Form: B2-HIST
  (navngi + begrunn), B2-NED. Prioritet: perfekt.
- **Faktakontrakt:** **hematoksylin** binder negativt ladde molekyler (DNA/RNA → blå kjerne/
  ruER), **eosin** binder positivt ladde (kollagen/cytoplasma → rosa); **PAS** farger
  karbohydrater (mucin, basalmembran); epiteltyper: enlaget plateepitel/kubisk/sylinder,
  flerlaget plateepitel, overgangsepitel; kjertelepitel (serøst vs. mukøst endestykke);
  eksokrin vs. endokrin kjertel; snittretning forklarer hvorfor like celler ser ulike ut.
- **Mekanismekjeder:** (1) fargelogikk (ladning → hvilken farge binder → hva det avslører);
  (2) koble epiteltype til funksjon/lokalisasjon.
- **Fritekst-momentlister:** «Identifiser epiteltypen og begrunn ut fra morfologi» (B2-HIST
  full-pott: navn + minst to morfologiske kjennetegn); «Skill serøst fra mukøst endestykke».
- **MC-drill:** hva binder hematoksylin/eosin/PAS (B2-NED); epiteltype-gjenkjenning.
- **Typiske feil:** `E18` (serøst/mukøst, enlaget/flerlaget forvekslet), `E21` (navngi uten
  begrunnelse), blande hematoksylin/eosin-binding.
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 5.2: Elektronmikroskopi, celleorganeller og støttevev
**id:** `med1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-5-1`

- **Kapitteltype:** tema (blokk 2, bildetolkning).
- **Description:** EM-tolkning av celleorganeller (eukromatin/heterokromatin, ruER/
  nukleolus = proteinsyntese) og gjenkjenning av muskel-, nerve-, ben-, brusk- og
  kjertelvev.
- **Eksamensbelegg:** Blokk 2, oppgave A (EM-celle + vevs-ID, 14/14). Form: B2-HIST, B2-NED.
  Prioritet: perfekt.
- **Faktakontrakt:** **eukromatin** (lyst/ekstendert, aktivt) vs. **heterokromatin**
  (mørkt/kondensert, inaktivt); **mye ruER + stor nukleolus = høy proteinsyntese**;
  **osmiumsyre** farger lipider (myelin); mitokondrier (cristae); muskeltyper (tverrstripet
  skjelett/hjerte, glatt); nervevev (nevron/glia); benvev (osteocytter i lakuner);
  bruskvev (kondrocytter i lakuner, matriks); kjertelvev (kort). Norsk + latin.
- **Mekanismekjeder:** (1) EM-tolkning: organell-mengde → celleaktivitet (mye ruER →
  sekretorisk celle); (2) eukromatin/heterokromatin → transkripsjonsaktivitet.
- **Fritekst-momentlister:** «Denne cellen har mye ruER og stor nukleolus — hva forteller
  det, og begrunn» (B2-HIST); «Skill hjerte- fra skjelettmuskel histologisk».
- **MC-drill:** eukromatin vs. heterokromatin-betydning; hvilket vev fra bilde (B2-NED);
  osmiumsyre → hva.
- **Typiske feil:** `E21` (ingen begrunnelse), bytte eukromatin/heterokromatin, blande
  muskeltypene.
- **Kvote:** 14 quiz / 18 flashcards.

### Del 6 — Metabolisme og biokjemi (BLOKK 2 — største blokk, 14–22 vt)

> Blokk 2s tyngste temablokk. Metabolisme-essay/-regning (14/14), enzymkinetikk (13/14)
> og konsentrasjonsregning (14/14). Regnekapitlene følger regnefag-DNA (theorem-
> regneprosedyre + vist utregning + enheter). Sensor krever mekanisme i riktig rekkefølge
> og vist utregning med enhetskonvertering.

#### Kapittel 6.1: Glykolyse, glukoneogenese og regulering
**id:** `med1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-1-4`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Glykolysen og glukoneogenesen med nettoutbytte, og den sentrale
  reguleringen via fruktose-2,6-bisfosfat.
- **Eksamensbelegg:** Blokk 2, oppgave G metabolisme (**14/14**, 14–22 vt — størst). Form:
  B2-MEK, B2-REGN. Prioritet: perfekt.
- **Faktakontrakt:** glykolyse (glukose → 2 pyruvat, netto **2 ATP + 2 NADH**);
  **anaerobt → laktat gir 2 ATP og 0 NADH netto** (NADH regenereres til NAD⁺);
  glukoneogenese (motsatt vei, i lever/nyrebark); **fruktose-2,6-bisfosfat aktiverer PFK-1
  (glykolyse↑) og hemmer FBPase-1 (glukoneogenese↓); insulin↑, glukagon↓ F2,6BP**;
  **glukose-6-fosfatase kun i lever/nyrebark** (ikke erytrocytt/muskel); pentosefosfat-
  shunten gir **NADPH, ikke ATP**.
- **Mekanismekjeder:** (1) glykolyse-nettoregnskap (investering 2 ATP → gevinst 4 ATP →
  netto 2); (2) F2,6BP-reguleringen (hormon → F2,6BP → PFK-1/FBPase-1 → retning).
- **Fritekst-momentlister:** «Gjør rede for hvordan F2,6-bisfosfat styrer valget mellom
  glykolyse og glukoneogenese» (B2-MEK, riktig rekkefølge); «Hva er nettoutbyttet av
  anaerob glykolyse?».
- **MC-drill (rutenett med NEGATIV RETTING):** riktig/galt om glykolyseprodukter (B2-RUTE
  — blankt slår gjetting); pentosefosfat → NADPH ikke ATP.
- **Typiske feil:** `E15` (pentosefosfat gir NADPH, ikke ATP), `E16` (G6Pase kun lever/
  nyre), `E19` (laktat → 2 ATP/0 NADH), `E20` (gjette på rutenett).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.2: Glykogen, β-oksidasjon og insulin/glukagon
**id:** `med1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-6-1`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Glykogenomsetning, fettsyreoksidasjon, og hvordan insulin og glukagon
  styrer metabolismen mellom mett og fastende tilstand.
- **Eksamensbelegg:** Blokk 2, oppgave G (metabolisme, 14/14). Form: B2-MEK, B2-REGN.
  Prioritet: perfekt.
- **Faktakontrakt:** glykogen (lager i lever/muskel; leverglykogen → blodglukose, muskel
  bruker selv); **β-oksidasjon**: per runde **1 acetyl-CoA + 1 FADH₂ + 1 NADH**; palmitat
  (16C) = **7 runder**; **aktivering koster 2 ATP**; **malonyl-CoA hemmer karnitin-
  acyltransferase I** (blokkerer fettsyreinntak i mitokondrie når syntese pågår); insulin
  (mett: lagring — glykogen/fett-syntese, GLUT4) vs. glukagon (fastende: nedbrytning);
  ketonlegemer (kort, ved langvarig faste).
- **Mekanismekjeder:** (1) β-oksidasjon per runde (produkter); (2) insulin/glukagon-bryteren
  (blodsukker → hormon → anabol/katabol retning).
- **Regneprosedyre (theorem):** tell acetyl-CoA/FADH₂/NADH fra en fettsyre av gitt lengde
  (antall runder = C/2 − 1).
- **Fritekst-momentlister:** «Regn ut antall acetyl-CoA og reduserte koenzymer fra β-
  oksidasjon av palmitat» (B2-REGN, vist utregning); «Forklar malonyl-CoAs regulatoriske
  rolle».
- **MC-drill (rutenett):** produkter per β-oksidasjonsrunde (B2-RUTE); insulin/glukagon-
  effekter.
- **Typiske feil:** feil antall runder (C/2 − 1), glemme aktiveringskostnad, bytte insulin/
  glukagon-effekt, `E20` (rutenett-gjetting).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.3: Enzymkinetikk
**id:** `med1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-6-1`

- **Kapitteltype:** tema (blokk 2, regnefag).
- **Description:** Michaelis-Menten, Lineweaver-Burk, allosteri og identifikasjon av
  hemmertype — en fast regneoppgave (oppgave F).
- **Eksamensbelegg:** Blokk 2, oppgave F enzymkinetikk (**~13/14**, opptil 18 vt). Form:
  B2-REGN (M-M-tabell/Lineweaver-Burk, identifiser hemmertype), B2-NED. Prioritet: perfekt.
- **Faktakontrakt:** **V₀ = Vmax·[S]/(Km + [S])**; Lineweaver-Burk: **y-skjæring = 1/Vmax,
  x-skjæring = −1/Km**; **katalytisk effektivitet = Kcat/Km; Kcat = Vmax/[E]**; allosterisk
  enzym = **sigmoid** kurve (T→R); hemmertyper: **kompetitiv ↑Km, =Vmax**; **ikke-
  kompetitiv ↓Vmax, =Km**; en hemmer som endrer BEGGE kan ikke klassifiseres i M-M-modellen.
- **Regneprosedyre (theorem):** (1) sett opp 1/V₀ mot 1/[S] (Lineweaver-Burk); (2) les av
  1/Vmax og −1/Km; (3) sammenlign med/uten hemmer → hvilken parameter endres → hemmertype.
- **Fritekst-momentlister:** «Bestem hemmertypen fra tabellen og begrunn via Km/Vmax»
  (B2-REGN med vist utregning); «Hvorfor gir et allosterisk enzym en sigmoid kurve?».
- **MC-drill:** kompetitiv vs. ikke-kompetitiv effekt på Km/Vmax (B2-NED — hvordan hemmer
  påvirker); Lineweaver-Burk-skjæringer.
- **Typiske feil:** `E17` (hemmertype-forveksling), lese av skjæringene feil, `E22` (sluttsvar
  uten utregning/enhet).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 6.4: Konsentrasjons-, doserings- og osmolaritetsregning
**id:** `med1100-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-6-1`

- **Kapitteltype:** tema (blokk 2, regnefag).
- **Description:** Farmakologisk doseregning (mg/kg), molaritet↔masse (mM→mg/mL) og
  osmolaritet — minst én slik regneoppgave er garantert hver sitting.
- **Eksamensbelegg:** Blokk 2, konsentrasjons-/doseringsregning (**14/14**, 2–3 vt).
  Form: B2-REGN (vist utregning + enhetskonvertering poenggivende). Prioritet: perfekt.
- **Faktakontrakt:** **dose(mg) = mg/kg · vekt(kg)**; **volum = dose/konsentrasjon**;
  fra molaritet: **mM · MW(g/mol) = g/L = mg/mL**; **osmolaritet**: NaCl gir **2 partikler**
  (9 g/L / 58 g/mol = 0,15 M → 0,30 osmol/L); enhetskonvertering (µg/mg/g, mL/L) er poeng-
  givende.
- **Regneprosedyre (theorem):** (1) konverter ALLE verdier til én enhet; (2) sett inn i
  riktig formel (dose/volum/molaritet/osmolaritet); (3) oppgi svar med enhet.
- **Fritekst-momentlister:** «Regn ut infusjonsvolumet» (B2-REGN, full føring m/enheter);
  «Regn ut osmolariteten til en NaCl-løsning».
- **MC-drill:** enhetskonvertering (mM→mg/mL); antall osmotisk aktive partikler for
  NaCl/glukose.
- **Typiske feil:** `E22` (glemme enhetskonvertering / sluttsvar uten utregning), glemme
  faktor 2 for NaCl-osmolaritet, feil MW-bruk.
- **Kvote:** 12 quiz / 12 flashcards.

### Del 7 — Molekylærbiologi og genetikk (BLOKK 2)

> Blokk 2 oppgave D (molekylær) og E (genetikk), opptil 18 vt. Genetikk 14/14 (arvegang +
> begrunn + sannsynlighet). Regnekapitlene (genstruktur, Hardy-Weinberg) følger regnefag-DNA.

#### Kapittel 7.1: Molekylærbiologi og genstruktur-regning
**id:** `med1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 2, regnefag + mekanisme).
- **Description:** Molekylærmetodene (PCR, Sanger, NGS) og genstruktur-regning (eksoner/
  introner/UTR/aminosyrer).
- **Eksamensbelegg:** Blokk 2, oppgave D. Molekylærmetoder ~11/14; genstruktur-regning
  ~8/14. Form: B2-MEK, B2-REGN, B2-NED. Prioritet: perfekt.
- **Faktakontrakt:** **PCR** (denaturering → primerbinding → forlengelse, eksponentiell
  amplifisering); **Sanger-sekvensering** (kjedeterminerende ddNTP); **NGS** (massiv
  parallell); genstruktur: **ORF = antall aminosyrer · 3 (+3 for stoppkodon)**; **13 eksoner
  → 12 introner**; **5′UTR = startkodon-posisjon − 1**; **3′UTR = mRNA − 5′UTR − ORF**;
  transkripsjon → spleising → translasjon (kort).
- **Regneprosedyre (theorem):** genstruktur — gitt mRNA-lengde og ORF: regn UTR-lengder og
  aminosyreantall; tell introner fra eksoner.
- **Fritekst-momentlister:** «Regn ut 5′UTR, 3′UTR og antall aminosyrer fra oppgitte
  lengder» (B2-REGN); «Forklar prinsippet i PCR».
- **MC-drill:** eksoner→introner (n−1); ORF↔aminosyrer; hvilken metode gjør hva (B2-NED).
- **Typiske feil:** glemme +3 for stoppkodon, feil intron-antall, `E22` (uten utregning).
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 7.2: Arvegang og slektstre
**id:** `med1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 2, regnefag + resonnement).
- **Description:** Bestemme arvegang fra et slektstre, begrunne valget, og regne
  sannsynlighet for sykt barn.
- **Eksamensbelegg:** Blokk 2, oppgave E genetikk (**14/14**): bestem arvegang + begrunn +
  regn sannsynlighet. Form: B2-MEK (begrunnelse), B2-REGN (sannsynlighet). Prioritet: perfekt.
- **Faktakontrakt:** arvegangstyper: **autosomal dominant** (hvert affisert barn har
  affisert forelder, begge kjønn), **autosomal recessiv** (friske bærerforeldre, hopper
  generasjoner), **X-bundet recessiv** (rammer mest gutter, via bærermødre), X-bundet
  dominant; begrunnelse fra slektstre-mønster; sannsynlighetsregning (produktregel for
  uavhengige ledd).
- **Regneprosedyre (theorem):** (1) test hvert arvegangsmønster mot slektstreet; (2) uteluk
  de som strider; (3) regn sannsynlighet (bærersannsynlighet × 1/4 × …).
- **Fritekst-momentlister:** «Bestem arvegangen og begrunn ut fra slektstreet» (B2-MEK,
  minst to begrunnende observasjoner); «Regn ut sannsynligheten for at neste barn er sykt».
- **MC-drill:** koble mønster til arvegang; sannsynlighet ved gitt genotype.
- **Typiske feil:** bestemme arvegang uten begrunnelse, feil sannsynlighet (glemme
  bærersannsynlighet), `E14` (glemme friske bærere).
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 7.3: Hardy-Weinberg og populasjonsgenetikk
**id:** `med1100-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-7-2`

- **Kapitteltype:** tema (blokk 2, regnefag).
- **Description:** Hardy-Weinberg-likevekten og bærerfrekvens-beregning — med de faste
  fellene rundt friske bærere og letale alleler.
- **Eksamensbelegg:** Blokk 2, del av genetikkblokken. Hardy-Weinberg-beregning (2pq) ~7/14.
  Form: B2-REGN. Prioritet: perfekt (innen genetikk).
- **Faktakontrakt:** **p² + 2pq + q² = 1**; **q² = prevalens → q = √prev**; **bærerfrekvens
  = 2pq ≈ 2q** når p ≈ 1; fast eksempel: prevalens 1/10 000 → q = 0,01, 2pq ≈ 0,02;
  **P(sykt barn av to friske) = 2pq · 0,25 · (partners bærersannsynlighet)**; **letale
  recessive alleler er IKKE i HW-likevekt** (seleksjon mot homozygote); recessive
  sykdomsalleler ligger hos **friske heterozygote bærere**.
- **Regneprosedyre (theorem):** (1) q = √(prevalens); (2) p = 1 − q; (3) bærerfrekvens = 2pq;
  (4) evt. barnsannsynlighet med produktregel.
- **Fritekst-momentlister:** «Beregn bærerfrekvensen fra sykdomsprevalensen» (B2-REGN);
  «Forklar hvorfor letale recessive alleler ikke er i HW-likevekt».
- **MC-drill:** q fra prevalens; 2pq-tolkning; når HW IKKE gjelder.
- **Typiske feil:** `E14` (glemme friske bærere / letale alleler), forveksle q og q²,
  `E22` (uten utregning).
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 7.4: Meiose, kromosomavvik og epigenetikk
**id:** `med1100-7-4` · **number:** 7.4 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-7-2`

- **Kapitteltype:** tema (blokk 2, mekanisme).
- **Description:** Meiosefeil (non-disjunction), strukturelle kromosomavvik, mosaikk, og
  epigenetisk regulering (DNA-metylering, imprinting).
- **Eksamensbelegg:** Blokk 2, del av genetikkblokken. Meiose/kromosomavvik ~11/14;
  epigenetikk (metylering, histonmod., imprinting) ~7/14. Form: B2-MEK, B2-NED, B2-RUTE.
  Prioritet: perfekt (innen genetikk).
- **Faktakontrakt:** **non-disjunction** (kromosom skiller ikke lag → aneuploidi, f.eks.
  trisomi); **translokasjon** (kromosomdel flyttet); **mosaikk** (to cellelinjer fra
  postzygotisk feil); epigenetikk: **DNA-metylering** (genstillhet), histonmodifikasjon,
  **imprinting** (uttrykk avhenger av foreldreopphav); ikke endrer DNA-sekvensen.
- **Mekanismekjeder:** (1) non-disjunction i meiose I vs. II → ulik aneuploidi; (2)
  metylering → genstillhet.
- **Fritekst-momentlister:** «Forklar hvordan non-disjunction gir trisomi» (B2-MEK);
  «Hva er imprinting?».
- **MC-drill (rutenett):** riktig/galt om epigenetiske mekanismer (B2-RUTE); mosaikk vs.
  translokasjon.
- **Typiske feil:** blande non-disjunction I/II, tro epigenetikk endrer sekvensen, `E20`
  (rutenett-gjetting).
- **Kvote:** 14 quiz / 16 flashcards.

### Del 8 — Cellesignalering, cellesyklus og celledød (BLOKK 2)

> Blokk 2 oppgave C (signalering, 14/14) og B (celledød/kreft, ~14/14). Signalveier og
> kreftgener testes som mekanisme-essay og rutenett med negativ retting (kjernereseptor-
> klasse, feedback-hormoner).

#### Kapittel 8.1: Cellesignalering og reseptorer
**id:** `med1100-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-1-4`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** GPCR- og RTK-signalveier, kjernereseptorer (klasse 1/2), og feedback —
  med de sentrale, nummererte signalkjedene sensor forventer.
- **Eksamensbelegg:** Blokk 2, oppgave C signalering (**14/14**, «5 prinsipper»). Kjerne-
  reseptor klasse 1/2 + domener ~4/14 (rutenett med negativ retting). Form: B2-MEK, B2-RUTE
  (klasse 1/2/begge — negativ retting), B2-NED (feedback-hormoner). Prioritet: perfekt.
- **Faktakontrakt:** **GPCR → G-protein → adenylatcyklase → cAMP → PKA**; **RTK →
  autofosforylering → intracellulær kaskade**; sentrale kjeder: **insulin → RTK → IRS →
  PI3K → PIP₃ → Akt → GLUT4**; **adrenalin → GPCR → cAMP → PKA**; **kjernereseptorer**:
  klasse 1 (cytoplasma, steroidhormon → translokerer til kjerne) vs. klasse 2 (allerede i
  kjernen); negativ feedback (hormonakse); autokrin/parakrin/endokrin (fra 1.4).
- **Mekanismekjeder:** (1) insulinsignalveien (nummerert til GLUT4); (2) adrenalin via
  cAMP/PKA; (3) negativ feedback i en hormonakse.
- **Fritekst-momentlister:** «Beskriv insulinsignalveien trinn for trinn fram til GLUT4»
  (B2-MEK, riktig rekkefølge); «Skill kjernereseptor klasse 1 fra klasse 2».
- **MC-drill (rutenett med NEGATIV RETTING):** klasse 1/2/begge for reseptoregenskaper
  (B2-RUTE, +0,5/−0,5/0 → **blankt ved usikkerhet**); feedback-hormon-nedtrekk (+0,25/−0,25/0).
- **Typiske feil:** feil rekkefølge i signalkjeden, bytte GPCR/RTK, bytte klasse 1/2, `E20`
  (gjette på klasse-rutenettet).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 8.2: Cellesyklus og kreft
**id:** `med1100-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-8-1`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Cellesyklusens kontroll (CDK/cyklin, pRB, p53) og skillet mellom
  tumorsuppressorer og proto-onkogener — en fast forvekslingsfelle.
- **Eksamensbelegg:** Blokk 2, oppgave B (**~14/14**). Form: B2-MEK, B2-RUTE. Prioritet:
  perfekt.
- **Faktakontrakt:** cellesyklus (G1→S→G2→M) med sjekkpunkter; **CDK aktiveres av cyklin**;
  **pRB** holder E2F i sjakk (fosforylering slipper E2F → S-fase); **p53** («genomets
  vokter» → p21/BAX ved skade); **tumorsuppressorer: pRB, p53, CKI (p16, p21)** —
  tap fremmer kreft; **proto-onkogener: cyklin, CDK, E2F, RTK** — overaktivering fremmer
  kreft; p53 → p21 (arrest) eller BAX (apoptose).
- **Mekanismekjeder:** (1) pRB/E2F-kontrollen av S-fase-inngang; (2) p53-responsen på
  DNA-skade (p21 arrest / BAX apoptose).
- **Fritekst-momentlister:** «Forklar hvordan p53 hindrer at en skadet celle deler seg»
  (B2-MEK); «Klassifiser pRB, p53, cyklin og E2F som tumorsuppressor eller proto-onkogen».
- **MC-drill (rutenett):** tumorsuppressor vs. proto-onkogen (B2-RUTE — negativ retting);
  CDK/cyklin-rollen.
- **Typiske feil:** `E13` (pRB/p53/CKI feilklassifisert som onkogen), `E20` (rutenett-
  gjetting), blande CDK og cyklin.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 8.3: Apoptose og celledød
**id:** `med1100-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-8-2`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Den indre (mitokondrielle) apoptoseveien og hvordan den skiller seg fra
  nekrose — ofte del av oppgave B.
- **Eksamensbelegg:** Blokk 2, del av oppgave B (**~13/14**). Form: B2-MEK, B2-RUTE.
  Prioritet: perfekt.
- **Faktakontrakt:** **Bax** danner porer i ytre mitokondriemembran → **cytokrom c** ut →
  **APAF-1 + ATP → apoptosom → caspase-9** → effektorcaspaser; **Bcl-2 hemmer** (anti-
  apoptotisk); **DNA-«stigemønster»** = fragmenter i n × ~200 bp (nukleosomavstand) via
  caspase-aktivert DNase; apoptose (ryddig, ingen betennelse) vs. nekrose (sprekker,
  betennelse).
- **Mekanismekjeder:** (1) indre apoptosevei nummerert (Bax → cytokrom c → APAF-1 →
  caspase-9 → celledød).
- **Fritekst-momentlister:** «Beskriv den mitokondrielle apoptoseveien trinn for trinn»
  (B2-MEK); «Hvorfor gir apoptose et DNA-stigemønster?».
- **MC-drill (rutenett):** pro- vs. anti-apoptotiske faktorer (Bax/Bcl-2) (B2-RUTE);
  apoptose vs. nekrose-kjennetegn.
- **Typiske feil:** bytte Bax/Bcl-2-rolle, feil rekkefølge, `E20` (rutenett-gjetting).
- **Kvote:** 14 quiz / 16 flashcards.

### Del 9 — Membran, proteinsortering og embryologi (BLOKK 2)

> Blokk 2 oppgave H (proteinsortering/cytoskjelett, ~13/14) og I/J (membran/nevron/
> embryologi, ~14/14 — embryologi nesten alltid siste oppgave). Membranpotensial følger
> regnefag-DNA (Nernst).

#### Kapittel 9.1: Membrantransport og membranpotensial (Nernst)
**id:** `med1100-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-1-3`

- **Kapitteltype:** tema (blokk 2, regnefag).
- **Description:** Membrantransport (Na/K-ATPase) og beregning av membranpotensial med den
  forenklede Nernst-likningen.
- **Eksamensbelegg:** Blokk 2, oppgave I/J (**~14/14**). Form: B2-REGN (Nernst), B2-MEK.
  Prioritet: perfekt.
- **Faktakontrakt:** **Na⁺/K⁺-ATPase** (3 Na⁺ ut / 2 K⁺ inn, ATP-drevet — opprettholder
  gradientene); passiv (diffusjon/kanaler) vs. aktiv transport; **Nernst (forenklet):
  Em = 61 mV · log₁₀(K⁺ute/K⁺inne)**; hyperkalemi (ute 3,5 → 7 mM) → depolarisering
  ~18 mV `(verifiser)`; hvilepotensial nær K⁺-likevekt.
- **Regneprosedyre (theorem):** sett inn ione-konsentrasjonene i Nernst → beregn Em; endre
  ekstracellulær konsentrasjon → beregn ny Em og retning (depol./hyperpol.).
- **Fritekst-momentlister:** «Beregn likevektspotensialet for K⁺ og forklar effekten av
  hyperkalemi» (B2-REGN, vist utregning m/enhet).
- **MC-drill:** Na/K-ATPase-støkiometri (3:2); retning av potensialendring ved endret [K⁺].
- **Typiske feil:** feil forhold ute/inne i log, `E22` (uten enhet/utregning), bytte
  Na/K-pumpens retning.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 9.2: Proteinsortering og cytoskjelett
**id:** `med1100-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-1-1`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Hvordan proteiner sorteres til ER/lysosom, nedbrytes i proteasomet, og
  transporteres langs cytoskjelettet.
- **Eksamensbelegg:** Blokk 2, oppgave H (**~13/14**). Form: B2-MEK, B2-NED. Prioritet:
  perfekt.
- **Faktakontrakt:** **SRP** kjenner signalpeptid → **translokon → ER** (membran/sekret-
  proteiner); **M6P-merking → lysosom**; **proteasom** (ubikvitin-merket nedbrytning);
  cytoskjelett: **kinesin** (mot pluss-ende/perifert) og **dynein** (mot minus-ende/
  sentralt) på mikrotubuli; **kollagen** (prolyl-/lysyl-hydroksylering, vitamin C).
- **Mekanismekjeder:** (1) ER-målstyring (signalpeptid → SRP → translokon → ER); (2) lysosom-
  målstyring (M6P → lysosom); (3) proteasom (ubikvitin → nedbrytning).
- **Fritekst-momentlister:** «Forklar hvordan et sekretprotein havner i ER» (B2-MEK); «Hva
  skiller kinesin fra dynein?».
- **MC-drill:** koble signal til destinasjon (SRP→ER, M6P→lysosom) (B2-NED); kinesin/dynein-
  retning.
- **Typiske feil:** bytte kinesin/dynein-retning, blande M6P/proteasom-vei, feil rekkefølge.
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 9.3: Embryologi
**id:** `med1100-9-3` · **number:** 9.3 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-8-1`

- **Kapitteltype:** tema (blokk 2, mekanisme-essay).
- **Description:** Befruktning, tidlig utvikling, gastrulering og nevrallistdannelse — den
  oppgaven som nesten alltid avslutter blokk 2.
- **Eksamensbelegg:** Blokk 2, siste oppgave (**~13/14**). Form: B2-MEK, B2-NED. Prioritet:
  perfekt.
- **Faktakontrakt:** befruktning (**zona pellucida**, akrosomreaksjon, blokk mot polyspermi);
  **gastrulering** (tre kimlag: ekto-/meso-/endoderm); **nevrallist** (dannes ved **EMT** +
  migrasjon → mange derivater); nevralrøret; **Shh fra chorda dorsalis → ventral gradient
  i nevralrøret**; teratogen (skadelig i utviklingen); nevrulering (kort).
- **Mekanismekjeder:** (1) nevrallistdannelse (EMT → migrasjon → derivater); (2) Shh-
  gradient (kilde → ventral mønstring).
- **Fritekst-momentlister:** «Forklar hvordan nevrallistceller dannes og migrerer» (B2-MEK);
  «Hvilken rolle spiller Shh i nevralrøret?».
- **MC-drill:** kimlag-derivater (B2-NED); zona pellucidas rolle; teratogen-gjenkjenning.
- **Typiske feil:** blande kimlagene, feil Shh-retning (ventral/dorsal), feil rekkefølge.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 10 — Immunologi (BLOKK 3)

> Blokk 3 er rent flervalg fra en bank (~90–110 spm), ingen minuspoeng → svar alltid.
> Immunologi ~30 %, mest repetert. Nære distraktorer avgjør (MHC I/II, cortex/medulla,
> C3a/C5a). T-celleutvikling i thymus er 4/4 — den sikreste.

#### Kapittel 10.1: T-celleutvikling og T-celleaktivering
**id:** `med1100-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** T-cellenes modning i thymus (dobbelt-negativ → dobbelt-positiv →
  enkelt-positiv) og aktivering av modne T-celler — den sikreste gjengangeren i blokk 3.
- **Eksamensbelegg:** Blokk 3, Immunologi (~30 %). **T-celleutvikling i thymus 4/4** (den
  sikreste). Signal 2 (CD28–CD80/86), CD8-drap, Th1 forekommer. Form: B3-1, B3-2, B3-NOM
  (lymfoide organ-bilde). Prioritet: perfekt.
- **Faktakontrakt:** T-celleutvikling: **dobbelt-negativ → dobbelt-positiv (i cortex) →
  enkelt-positiv (i medulla)**; **TCR VDJ-rekombinasjon**; positiv/negativ seleksjon
  (affinitet); **MHC I → CD8⁺, MHC II → CD4⁺**; aktivering: signal 1 (TCR–MHC/peptid) +
  **signal 2 (CD28–CD80/86)**; Th1 (IFN-γ, IL-2); **CD8⁺ drap** (perforin/granzym B);
  antigenprosessering (endogent → MHC I; eksogent → MHC II).
- **Mekanismekjeder:** (1) thymus-modningen i rekkefølge (cortex → medulla); (2) T-celle-
  aktivering (signal 1 + 2 → proliferasjon).
- **MC-drill:** rekkefølge DN→DP→SP (B3-1); cortex vs. medulla-lokalisasjon; MHC I→CD8/
  MHC II→CD4; velg de 2 som kreves for aktivering (B3-2).
- **Typiske feil:** `E23` (cortex/medulla, MHC I/II, CD4/CD8 forvekslet), glemme signal 2,
  feil rekkefølge DN/DP/SP.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 10.2: B-celler, kimsenterreaksjon og antistoffer
**id:** `med1100-10-2` · **number:** 10.2 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-10-1`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** B-cellereseptoren, kimsenterreaksjonen (somatisk hypermutasjon,
  isotypeskift, affinitetsmodning) og antigenprosessering via MHC II.
- **Eksamensbelegg:** Blokk 3, Immunologi. **Kimsenterreaksjon 3/3**; B-celle/BCR 2/2. Form:
  B3-1, B3-2. Prioritet: perfekt.
- **Faktakontrakt:** naiv B-celle: **BCR = IgM + IgD** (samme V- ulik C-region);
  **kimsenterreaksjon**: **somatisk hypermutasjon** → **affinitetsmodning**, **isotypeskift
  IgM→IgG/IgA/IgE**, langlivede **plasmaceller → benmarg** + hukommelsesceller;
  antigenprosessering (BCR → endosom → **MHC II → CD4⁺** T-hjelp); antistoffstruktur (V/C-
  region, tung/lett kjede).
- **Mekanismekjeder:** (1) kimsenterreaksjonen (hypermutasjon → seleksjon → isotypeskift →
  plasmacelle/hukommelse); (2) B-celle-antigenprosessering til MHC II.
- **MC-drill:** hva naiv B-celle uttrykker (IgM+IgD) (B3-1); hva skjer i kimsenteret; velg
  de 2 prosessene i affinitetsmodning (B3-2).
- **Typiske feil:** `E23` (V- vs. C-region), blande somatisk hypermutasjon/isotypeskift,
  tro isotypeskift endrer antigenspesifisitet.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 10.3: Medfødt immunitet — NK-celler, komplement og PRR
**id:** `med1100-10-3` · **number:** 10.3 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-10-1`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** NK-cellenes «missing self»-logikk, komplementsystemets tre veier og
  effektorer, og mønstergjenkjenning (PRR/PAMP).
- **Eksamensbelegg:** Blokk 3, Immunologi. **NK-celler 3/3**, **komplement 2/2**; PRR/PAMP
  forekommer. Form: B3-1, B3-2. Prioritet: perfekt.
- **Faktakontrakt:** **NK-celler** (medfødt; **«missing self»** — dreper celler uten
  inhibitorisk MHC-I-signal; IFN-γ); **komplement**: klassisk (antistoff), lektin (MBL),
  **alternativ vei (faktor B + D)**; **C3 opsonisering**, **C5a anafylatoksin/kjemotaksi**,
  membranangrepskompleks; **faktor H** (regulator; svikt → aHUS); **PRR/PAMP**: **TLR4-LPS**,
  TLR9 (CpG-DNA), RIG-I (viralt RNA), C-type-lektin.
- **Mekanismekjeder:** (1) NK «missing self» (tap av MHC-I → NK dreper); (2) komplement-
  opsonisering/kjemotaksi (C3b/C5a).
- **MC-drill:** NK-gjenkjenning (missing self) (B3-1); C3 vs. C5a-funksjon (nær distraktor
  C3a/C4a/C5a); alternativ vei = faktor B+D; velg de 2 riktige PRR-PAMP-parene (B3-2).
- **Typiske feil:** `E23` (C3a/C4a/C5a forvekslet), tro NK er adaptiv, blande komplement-
  veiene.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 10.4: Lymfoide organer
**id:** `med1100-10-4` · **number:** 10.4 · **estimatedMinutes:** 45 · **prerequisites:** `med1100-10-1`

- **Kapitteltype:** tema (blokk 3, flervalg + histologi).
- **Description:** Anatomi og histologi til lymfeknute, milt, thymus og tonsille — ofte
  som bilde-ID.
- **Eksamensbelegg:** Blokk 3, Immunologi (anatomi/histologi). Lymfoide organers anatomi
  forekommer. Form: B3-1, B3-NOM/B3-BILDE (histologi HE av lymfoide organer). Prioritet:
  kunne (innen immunologi).
- **Faktakontrakt:** **lymfeknute** (cortex/paracortex/medulla; afferente lymfekar inn,
  ett efferent ut; høyendotelvenyler for lymfocyttinngang); **milt** (rød pulpa =
  blodfiltrering, hvit pulpa/PALS = lymfoid); **thymus** (cortex/medulla, **Hassalske
  legemer** i medulla); **tonsille**; primære (benmarg, thymus) vs. sekundære (lymfeknute,
  milt, tonsille) lymfoide organer.
- **Mekanismekjeder:** (1) lymfens vei gjennom en lymfeknute (afferent → efferent).
- **MC-drill:** koble struktur til organ (B3-NOM); afferent/efferent lymfekar; primær vs.
  sekundær.
- **Typiske feil:** `E23` (afferente/efferente lymfekar, cortex/medulla), blande rød/hvit
  pulpa.
- **Kvote:** 12 quiz / 14 flashcards.

### Del 11 — Mikrobiologi (BLOKK 3)

> Blokk 3, ~25 %. Antibiotika-mekanismer/resistens og pneumokokk-kapsel er sikre; nære
> distraktorer (Mycoplasma uten cellevegg; kapsel vs. betalaktamase; RNA/DNA-virus).

#### Kapittel 11.1: Bakterier — Gram, morfologi og virulens
**id:** `med1100-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** Gram-positiv vs. -negativ oppbygning, bakteriemorfologi fra preparat, og
  virulensfaktorer — med pneumokokk-kapselen som gjenganger.
- **Eksamensbelegg:** Blokk 3, Mikrobiologi. ***S. pneumoniae*: kapsel som antifagocytær
  virulensfaktor 3/3**; Gram+/Gram−-morfologi. Form: B3-1, B3-2, B3-BILDE (Gram-preparat).
  Prioritet: perfekt.
- **Faktakontrakt:** **Gram-positiv** (tykt peptidoglykan, farges blått) vs. **Gram-negativ**
  (tynt peptidoglykan + ytre membran m/**LPS**, farges rødt); morfologi (kokker/staver,
  klynger/kjeder); **kapsel** = antifagocytær virulensfaktor (**pneumokokk**); **Mycoplasma
  mangler cellevegg** (penicillin virker ikke); *S. aureus*, *N. meningitidis* (kort);
  toksiner: **LPS/endotoksin → TLR4**, difteritoksin (A/B), **superantigen**.
- **Mekanismekjeder:** (1) hvorfor kapsel gir fagocytoseresistens; (2) Gram-fargingens
  grunnlag (peptidoglykan-tykkelse).
- **MC-drill:** Gram+ vs. Gram− kjennetegn (B3-1); hva gir pneumokokk fagocytoseresistens
  (kapsel, ikke betalaktamase); Mycoplasma + penicillin; velg de 2 riktige toksin-utsagn
  (B3-2).
- **Typiske feil:** `E26` (Mycoplasma uten cellevegg; kapsel vs. betalaktamase), blande
  Gram+/Gram−-farge, LPS-plassering.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 11.2: Antibiotika og resistens
**id:** `med1100-11-2` · **number:** 11.2 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-11-1`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** Antibiotikas virkningsmekanismer og de viktigste resistensmekanismene.
- **Eksamensbelegg:** Blokk 3, Mikrobiologi. **Antibiotika-mekanismer 3/3**; resistens
  (MRSA/mecA, ESBL, betalaktamase). Form: B3-1, B3-2. Prioritet: perfekt.
- **Faktakontrakt:** **penicillin/betalaktam → transpeptidase (PBP)**, hemmer celleveggs-
  syntese; **kinolon → topoisomerase/gyrase**; **makrolid/aminoglykosid → ribosom**
  (proteinsyntese); **vankomycin → celleveggs-byggestein**; resistens: **betalaktamase**
  (bryter penicillin), **ESBL** (utvidet spektrum), **MRSA/mecA** (endret PBP), endret
  målsete/effluks.
- **Mekanismekjeder:** (1) betalaktam-virkning (transpeptidase-hemming → svak cellevegg);
  (2) betalaktamase-resistens.
- **MC-drill:** koble antibiotikum til angrepspunkt (B3-1); hvilken resistens mot penicillin
  (betalaktamase/mecA); velg de 2 ribosomhemmende (B3-2).
- **Typiske feil:** `E26` (kapsel vs. betalaktamase), blande angrepspunktene, MRSA-mekanisme.
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 11.3: Virus, sopp og toksiner
**id:** `med1100-11-3` · **number:** 11.3 · **estimatedMinutes:** 50 · **prerequisites:** `med1100-11-1`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** Virusreplikasjon (RNA vs. DNA), antigen shift/drift, antivirale
  mekanismer, sopp og de viktigste toksinene.
- **Eksamensbelegg:** Blokk 3, Mikrobiologi. Virusreplikasjon, shift/drift, acyclovir/
  tymidinkinase, CMV-reaktivering, *Candida*, normalflora/mikrobiom 2/2. Form: B3-1, B3-2.
  Prioritet: perfekt.
- **Faktakontrakt:** **RNA-virus replikerer i cytoplasma, DNA-virus i kjernen** (unntak
  finnes); **antigen shift** (reassortering, stort sprang) vs. **drift** (mutasjon, smått);
  **acyclovir** aktiveres av viral **tymidinkinase** (selektivitet); **CMV-reaktivering**
  ved immunsvikt; **Candida albicans** (opportunist); **normalflora/mikrobiom** (kolonisering,
  opportunist ved ubalanse); toksiner (fra 11.1).
- **Mekanismekjeder:** (1) acyclovirs selektivitet (viral tymidinkinase → aktiv form kun i
  infisert celle); (2) shift vs. drift.
- **MC-drill:** RNA-virus/cytoplasma, DNA-virus/kjerne (B3-1); shift vs. drift; velg de 2
  riktige om normalflora (B3-2).
- **Typiske feil:** `E26` (RNA/DNA-virus lokalisasjon), blande shift/drift, glemme
  tymidinkinase-selektivitet.
- **Kvote:** 14 quiz / 16 flashcards.

### Del 12 — Blod og hematologi (BLOKK 3)

> Blokk 3, ~15 %. Blodutstryk-morfologi og hematopoiese; hemostase kan være
> underrepresentert i uttrekket — `(verifiser dekning)`.

#### Kapittel 12.1: Blodutstryk-morfologi og hematopoiese
**id:** `med1100-12-1` · **number:** 12.1 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 3, bilde-ID).
- **Description:** Gjenkjenne blod- og benmargsceller (May-Grünwald-Giemsa) og forstå hvor
  blodcellene dannes gjennom livet.
- **Eksamensbelegg:** Blokk 3, Fysiologi/blod. Blod-/benmargsutstryk-morfologi (høy);
  hematopoiese-lokalisasjon; nøytrofil kinetikk; AML/differensieringsstopp. Form: B3-1,
  B3-BILDE (utstryk), B3-2. Prioritet: kunne (innen blod).
- **Faktakontrakt:** blodceller (erytrocytt, nøytrofil/eosinofil/basofil, lymfocytt,
  monocytt, trombocytt) og modningsstadier (myeloblast→promyelocytt→…); **hematopoiese
  gjennom livet: plommesekk → lever (foster) → benmarg/aksialt skjelett (voksen)**;
  retikulocytt (ung erytrocytt); **nøytrofil halveringstid < 1 døgn** `(verifiser)`; **AML**
  = differensieringsstopp (blaster); **May-Grünwald-Giemsa**-farging.
- **Mekanismekjeder:** (1) hematopoiesens lokalisasjonsskifte foster→voksen; (2)
  myeloid modningsrekke.
- **MC-drill:** identifiser celletype/stadium fra utstryk (B3-BILDE); hvor dannes blod i
  voksen (aksialt skjelett); velg de 2 riktige om nøytrofiler (B3-2).
- **Typiske feil:** blande celletyper/stadier, feil hematopoiese-lokalisasjon, `E24` («mest
  korrekt»).
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 12.2: Hemostase, oksygentransport og leukotriener
**id:** `med1100-12-2` · **number:** 12.2 · **estimatedMinutes:** 50 · **prerequisites:** `med1100-12-1`

- **Kapitteltype:** tema (blokk 3, flervalg).
- **Description:** Koagulasjon i grove trekk, oksygentransportens Bohr-logikk, og
  leukotriener som nydannede mediatorer.
- **Eksamensbelegg:** Blokk 3, Fysiologi/blod. O₂-transport (Bohr); leukotriener (nydannes,
  ikke lagret). **Hemostase virker underrepresentert i uttrekket — `(verifiser)`.** Form:
  B3-1, B3-2. Prioritet: kunne.
- **Faktakontrakt:** hemostase grovt (vasokonstriksjon → blodplateplugg → koagulasjon/
  fibrinnett) `(verifiser dekning)`; **O₂-transport**: hemoglobin, **Bohr-effekten** (lav pH/
  høy CO₂/høy temp → O₂ avgis lettere i vev); **leukotriener nydannes fra arakidonsyre**
  (ikke forhåndslagret), betennelsesmediatorer; CO₂-transport (fra 1.2).
- **Mekanismekjeder:** (1) Bohr-effekten (vevsforhold → O₂-avgivelse); (2) leukotrien-
  frigjøring (stimulus → nysyntese).
- **MC-drill:** Bohr-retning (B3-1); leukotriener nydannes vs. lagret; velg de 2 riktige om
  hemostase (B3-2).
- **Typiske feil:** snu Bohr-effekten, tro leukotriener er lagret, `E24`.
- **Kvote:** 12 quiz / 14 flashcards.

### Del 13 — Thoraksanatomi (latinsk nomenklatur) (BLOKK 3)

> Blokk 3, ~30 % (tyngst sammen med immunologi). Latinsk nomenklatur og bøyning avgjør;
> nære distraktorer og fantasinavn. **n. phrenicus er 4/4** — den sikreste anatomien.

#### Kapittel 13.1: Hjertets anatomi og koronarkar
**id:** `med1100-13-1` · **number:** 13.1 · **estimatedMinutes:** 65 · **prerequisites:** `med1100-0-2`

- **Kapitteltype:** tema (blokk 3, flervalg + bilde).
- **Description:** Hjertets kamre, klaffer, koronararterier med forsyningsområder, apex/
  ictus cordis-projeksjon og ledningssystemet — med latinsk nomenklatur.
- **Eksamensbelegg:** Blokk 3, Anatomi thorax (~30 %). **Koronararterier og forsyningsområder
  3/3**; klaffer/indre struktur (høy); **ictus/apex cordis-projeksjon 2/2**; ledningssystem.
  Form: B3-1, B3-2, B3-NOM/B3-BILDE (hjertetegning m/piler til koronargrener). Prioritet:
  perfekt.
- **Faktakontrakt:** kamre (**atrium/ventriculus dexter/sinister**); klaffer (**valva
  tricuspidalis, mitralis (bicuspidalis), pulmonalis, aortae**); **mm. papillares + chordae
  tendineae**; fossa ovalis; **a. coronaria dextra** (RCA → ramus marginalis dexter, ofte
  bakvegg/AV-knute) og **a. coronaria sinistra** (→ **ramus interventricularis anterior/LAD**
  + **ramus circumflexus**); **apex/ictus cordis: 4.–5. intercostalrom, medioklavikulær-
  linjen**; ledningssystem (sinusknute → AV-knute → His → Purkinje); truncus pulmonalis,
  arcus aortae, vena cava.
- **Mekanismekjeder:** (1) blodets vei gjennom hjertet (latinske klaffer i rekkefølge);
  (2) koronar forsyning (hvilken arterie forsyner hva).
- **MC-drill:** koble koronararterie til forsyningsområde (B3-1, nær distraktor marginalis
  dexter vs. circumflexus); apex cordis-lokalisasjon; navnsett struktur på hjertetegning
  (B3-NOM); velg de 2 grenene av a. coronaria sinistra (B3-2).
- **Typiske feil:** `E25` (ramus marginalis dexter vs. circumflexus; sinistra/dextra), blande
  klaffene, feil apex-lokalisasjon.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 13.2: Mediastinum, nerver og store kar
**id:** `med1100-13-2` · **number:** 13.2 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-13-1`

- **Kapitteltype:** tema (blokk 3, flervalg + latin).
- **Description:** Mediastinums nerver (n. phrenicus vs. n. vagus) og store kar — med
  n. phrenicus som blokk 3s sikreste enkeltfakta.
- **Eksamensbelegg:** Blokk 3, Anatomi thorax. **n. phrenicus 4/4** (funksjon + beliggenhet
  **ventralt for radix pulmonis**; n. vagus dorsalt); store kar/ductus thoracicus. Form:
  B3-1, B3-2, B3-NOM. Prioritet: perfekt.
- **Faktakontrakt:** **n. phrenicus** (motorisk til diafragma; C3–C5; **ventralt for radix/
  hilum pulmonis**) vs. **n. vagus** (**dorsalt**); **n. laryngeus recurrens**; nn.
  splanchnici; store kar: **arcus aortae, vena cava sup./inf., truncus pulmonalis,
  bifurcatio tracheae**; **ductus thoracicus → venevinkelen** (ikke fantasinavnene ductus
  botalli/cardiacus); mediastinums inndeling (kort).
- **Mekanismekjeder:** (1) n. phrenicus' bane og funksjon; (2) lymfedrenasje via ductus
  thoracicus.
- **MC-drill:** n. phrenicus vs. n. vagus (ventral/dorsal) (B3-1); hva ductus thoracicus
  drenerer til; utpek fantasinavn-distraktor; velg de 2 riktige om store kar (B3-2).
- **Typiske feil:** `E25` (n. phrenicus/n. vagus ventral/dorsal; fantasinavn ductus botalli/
  cardiacus), feil segmentnivå C3–C5.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 13.3: Respirasjonsmuskulatur, pleura og thoraxvegg
**id:** `med1100-13-3` · **number:** 13.3 · **estimatedMinutes:** 55 · **prerequisites:** `med1100-13-1`

- **Kapitteltype:** tema (blokk 3, flervalg + latin).
- **Description:** Pustemuskulaturen (rolig inspirasjon vs. ekspirasjon), pleura,
  thoraxveggens nivåbestemmelse og kar-histologi/kapillærtyper.
- **Eksamensbelegg:** Blokk 3, Anatomi thorax. **Respirasjonsmuskler 3/3** (rolig
  inspirasjon = diafragma + mm. intercostales externi; **rolig ekspirasjon = ingen aktiv
  muskel**); pleura, angulus sterni/T4, dermatom T4, kapillærtyper. Form: B3-1, B3-2,
  B3-NOM/B3-BILDE (kar-histologi/EM-kapillærtyper). Prioritet: perfekt.
- **Faktakontrakt:** **rolig inspirasjon = diafragma + mm. intercostales externi**;
  **rolig ekspirasjon = passiv (ingen aktiv muskel)**; forsert ekspirasjon (mm.
  intercostales interni, bukmuskler); **mm. scaleni** (hjelpemuskler); **pleura parietalis/
  visceralis**, **recessus costodiaphragmaticus**; **angulus sterni = T4-nivå** (bifurcatio
  tracheae); **dermatom T4 = papilla mammaria**; kar-histologi (tunica intima/media/
  adventitia); kapillærtyper (kontinuerlig/fenestrert/sinusoid).
- **Mekanismekjeder:** (1) rolig inspirasjon (diafragma + externi → volum opp → luft inn);
  (2) hvorfor rolig ekspirasjon er passiv (elastisk tilbaketrekning).
- **MC-drill:** hvilke muskler ved rolig inspirasjon/ekspirasjon (B3-1); angulus sterni-nivå;
  koble kapillærtype til organ (B3-NOM); velg de 2 aktive ved rolig inspirasjon (B3-2).
- **Typiske feil:** tro rolig ekspirasjon er aktiv, `E25` (externi/interni), feil T4-relasjon,
  blande kapillærtypene.
- **Kvote:** 14 quiz / 18 flashcards.

### Del 14 — Eksamenstrening (tre former)

> Tre sjanger-/feildrillkapitler (ett per blokks svarlogikk) + tre komplette øvingseksamener,
> én i HVER av de tre eksamensformene. Alle oppgaver, case, tallverdier og figurtekster er
> NYSKREVNE.

#### Kapittel 14.1: Statistikk-regnedrill (blokk 1s svarlogikk)
**id:** `med1100-14-1` · **number:** 14.1 · **estimatedMinutes:** 70 · **prerequisites:** `med1100-4-5`

- **Kapitteltype:** sjangerdrill (blokk 1, regnefag).
- **Description:** Samlet drill av alle statistikk-regneprosedyrene med eksplisitte
  hypoteser, vist utregning og klartekst-tolkning — der de fleste av blokk 1s 40 % ligger.
- **Eksamensbelegg:** Blokk 1, Statistikk (40 %). Sikre gjengangere: KI, hypotesetest,
  2×2/kji-kvadrat, OR/RR/PR, t-test, PPV/NPV, styrke + det rullerende anvendte temaet.
  Prioritet: perfekt (meta).
- **Regneprosedyre:** `text` **Løsningsoppskrift** per sjanger (definer parameter → H₀/Hₐ →
  test → kritisk verdi → **konklusjon i ord**); `example` gjennomregnet eksamenscase med
  sensor-margnotat om delpoeng («ikke trekk for følgefeil»); `exercise` × 10–12 varianter
  på eksamensnivå (alle B1-STAT). Trekker på fellene E1–E12.
- **Typiske feil:** E1 (OR/RR), E6 (1,96 vs. t), E11 (faktor 2), E12 (mangle tolkning),
  E5 (avhengige obs.).
- **Kvote:** 18 quiz / 8 flashcards.

#### Kapittel 14.2: Mekanisme-essay- og regnedrill (blokk 2s svarlogikk)
**id:** `med1100-14-2` · **number:** 14.2 · **estimatedMinutes:** 70 · **prerequisites:** `med1100-9-3`

- **Kapitteltype:** sjangerdrill (blokk 2, momentliste + regning + negativ retting).
- **Description:** Driller de faste mekanismekjedene som nummererte momentlister, regne-
  oppgavene med enhetskonvertering, og — avgjørende — **negativ-retting-disiplinen på
  rutenett** (blankt slår gjetting).
- **Eksamensbelegg:** Blokk 2, oppgave A–I/L, sum 100 vt. Faste kjeder: histologi-begrunnelse,
  metabolisme (glykolyse/β-oksidasjon/F2,6BP), signalering (insulinveien), apoptose,
  arvegang, Hardy-Weinberg, enzymkinetikk, Nernst, dosering, proteinsortering, embryologi.
  Prioritet: perfekt (meta).
- **Innhold:** `text` **Momentliste-metoden** (nummererte ledd, rett rekkefølge, rett
  fagterm, spørreordnivå) + **negativ-retting-strateginoten** (rutenett: svar kun det du er
  sikker på; **blankt = 0 slår −0,5**); `example` full-pott-momentlister for 3–4 tunge kjeder
  med delpoeng synlig og margnotat om hva sensor IKKE forventer; `exercise` × 8–10 (B2-MEK/
  B2-REGN/B2-RUTE — skriv momentlisten selv / regn med enhet / avgjør om du skal svare på
  rutenettet).
- **Typiske feil:** E20 (gjette på rutenett), E13 (kreftgen), E17 (hemmertype), E22 (uten
  utregning/enhet), E21 (bilde uten begrunnelse), feil mekanismerekkefølge.
- **Kvote:** 16 quiz / 8 flashcards.

#### Kapittel 14.3: Flervalgs- og latindrill (blokk 3s svarlogikk)
**id:** `med1100-14-3` · **number:** 14.3 · **estimatedMinutes:** 60 · **prerequisites:** `med1100-13-3`

- **Kapitteltype:** sjangerdrill (blokk 3, flervalg + latin).
- **Description:** Presisjonsdrill for blokk 3s nære distraktorer og latinske nomenklatur —
  velg ett / velg to, «mest korrekt», og bilde-/navngjenkjenning. Ingen minuspoeng → svar
  alltid.
- **Eksamensbelegg:** Blokk 3, ~90–110 spm, ingen minuspoeng. Nære distraktorer avgjør
  (MHC I/II, cortex/medulla, C3a/C5a, marginalis dexter/circumflexus, n. phrenicus/vagus,
  Mycoplasma/kapsel). Prioritet: perfekt (meta).
- **Innhold:** `text` **Oppskrift** (elimineringsstrategi; «mest korrekt» = mest presist,
  ikke bare sant; velg-to = nøyaktig to; latinsk bøyning/relasjon; **svar ALLTID — ingen
  minuspoeng**); `example` gjennomgått spørsmål av hver type med fellen markert; drilltabell:
  T-celleutvikling, komplement, koronarkar-forsyning, n. phrenicus, respirasjonsmuskler,
  antibiotika-angrepspunkt, virus RNA/DNA. `exercise` × 10–12 (B3-1/B3-2/B3-NOM).
- **Typiske feil:** E23 (immunologi-distraktorer), E24 («mest korrekt»), E25 (latinsk
  upresisjon), E26 (mikrobiologifeller), å la være å svare.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 14.4: Øvingseksamen blokk 1 (digital, blandet + statistikk)
**id:** `med1100-14-4` · **number:** 14.4 · **estimatedMinutes:** 90 · **prerequisites:** `med1100-14-1`

- **Kapitteltype:** øvingseksamen (blokk 1-format).
- **Description:** Et komplett, nyskrevet blokk 1-sett i gjeldende format: digital, ~5 t,
  fire seksjoner i fast rekkefølge (Humanbiologi 20 %, Atferdsfag 20 %, Samfunnsmedisin
  20 %, Statistikk 40 %), med kalkulator + tabeller + formelsamling, ingen minuspoeng.
- **Innhold:** ~37–48 oppgaver fordelt etter seksjonsvekt; humanbiologi/atferdsfag/
  samfunnsmedisin hovedsakelig B1-MC + 2–3 B1-ESS (samfunnsmedisin), statistikk ~10 B1-STAT.
  `collapsible` full fasit per oppgave (statistikk med vist utregning + eksplisitte
  hypoteser + tolkning; essay med momentliste); `tip` **Sensorblikket** (bestått/ikke-
  bestått; hva som gir uttelling; svar alltid — ingen minuspoeng her).
- **Typiske feil:** hele feilkatalogen E1–E12 speiles i fasitkommentarene.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 14.5: Øvingseksamen blokk 2 (6-timers skriftlig, A–I med vekttall)
**id:** `med1100-14-5` · **number:** 14.5 · **estimatedMinutes:** 95 · **prerequisites:** `med1100-14-2`

- **Kapitteltype:** øvingseksamen (blokk 2-format).
- **Description:** Et komplett, nyskrevet blokk 2-sett: skriftlig 6 t, 9–12 oppgaver A–L med
  vekttall **sum 100**, rent essay/regning/bildetolkning, kalkulator, **negativ retting på
  rutenettene**.
- **Innhold:** oppgaver etter malen A = histologi/EM (9–12 vt), B = celledød/kreft, C =
  signalering, D = molekylærbiologi, E = genetikk (opptil 18 vt), F = enzymkinetikk, G =
  metabolisme (størst), H = proteinsortering, I/J = membran/embryologi — vekttall summert
  eksakt til 100. Minst én B2-REGN (dose/Nernst/enzymkinetikk) og minst ett B2-RUTE med
  negativ retting. `collapsible` full momentliste-fasit med delpoeng + vist utregning +
  enheter; `tip` **Sensorblikket** (moment-for-moment; negativ-retting-strategi; hva som
  IKKE forventes; «feil system, rett forklaring gir 50 %»).
- **Typiske feil:** E13–E22 speiles; E20 (rutenett-gjetting) uthevet.
- **Kvote:** 8 quiz / 2 flashcards.

#### Kapittel 14.6: Øvingseksamen blokk 3 (rent flervalg, spørsmålsbank)
**id:** `med1100-14-6` · **number:** 14.6 · **estimatedMinutes:** 90 · **prerequisites:** `med1100-14-3`

- **Kapitteltype:** øvingseksamen (blokk 3-format).
- **Description:** Et komplett, nyskrevet blokk 3-sett: digitalt rent flervalg, delsett fra
  en bank (~50–60 spm i øvingssettet, speiler ~90–110-banken), fire seksjoner (Anatomi
  thorax ~30 %, Immunologi ~30 %, Mikrobiologi ~25 %, Fysiologi/blod ~15 %), ingen
  minuspoeng.
- **Innhold:** hovedsakelig B3-1 (velg ett) + fast innslag B3-2 (velg to — nøyaktig to) +
  B3-NOM/B3-BILDE (blodutstryk, histologi, hjertetegning, CT/røntgen thorax beskrevet i
  tekst). `collapsible` fasit med per-alternativ-begrunnelse (hvorfor de nære distraktorene
  er gale); `tip` **Sensorblikket** (velg-to = nøyaktig to; svar alltid — ingen minuspoeng;
  latinsk presisjon).
- **Typiske feil:** E23–E26 speiles i distraktorbegrunnelsene.
- **Kvote:** 8 quiz / 2 flashcards.

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Blokk | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | meta | 2 | 22 | 16 | 0 (dekkes av øvingseksamenene) |
| 1 | 1 | 4 | 56 | 64 | 4 |
| 2 | 1 | 2 | 26 | 30 | 4 |
| 3 | 1 | 3 | 44 | 48 | 4 |
| 4 | 1 | 5 | 78 | 78 | 4 |
| 5 | 2 | 2 | 28 | 36 | 4 |
| 6 | 2 | 4 | 60 | 64 | 4 |
| 7 | 2 | 4 | 56 | 62 | 4 |
| 8 | 2 | 3 | 44 | 50 | 4 |
| 9 | 2 | 3 | 42 | 50 | 4 |
| 10 | 3 | 4 | 60 | 68 | 4 |
| 11 | 3 | 3 | 42 | 48 | 4 |
| 12 | 3 | 2 | 26 | 30 | 4 |
| 13 | 3 | 3 | 46 | 58 | 4 |
| 14 | meta | 6 | 76 | 32 | 0 (= 3 øvingseksamener, én per form) |
| **Sum** | | **50** | **706** | **734** | **52 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12=22 / 8+8=16
- Del 1: 14+14+14+14=56 / 16+16+16+16=64
- Del 2: 14+12=26 / 16+14=30
- Del 3: 16+14+14=44 / 16+16+16=48
- Del 4: 16+16+16+14+16=78 / 16+16+16+14+16=78
- Del 5: 14+14=28 / 18+18=36
- Del 6: 16+16+16+12=60 / 18+18+16+12=64
- Del 7: 14+14+14+14=56 / 16+16+14+16=62
- Del 8: 16+14+14=44 / 18+16+16=50
- Del 9: 14+14+14=42 / 16+18+16=50
- Del 10: 16+16+16+12=60 / 18+18+18+14=68
- Del 11: 14+14+14=42 / 16+16+16=48
- Del 12: 14+12=26 / 16+14=30
- Del 13: 16+16+14=46 / 20+20+18=58
- Del 14: 18+16+18+8+8+8=76 / 8+8+10+2+2+2=32
- **Totalt: 706 quiz (≥600 ✓) / 734 flashcards (≥700 ✓).**

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE «≥500/≥700 er GULV»):** MED1100 er svært
faktatungt OG dekker tre separate eksamener som alle må bestås, med 50 kapitler (>32 →
høyere sum). Derfor er kvotene skalert godt over gulvet: **flashcards 734** fordi faget
er ekstremt puggetungt (latinske navn, normalverdier, mekanismekjeder, immunologiske
distraktorer, formler med bruksbetingelser — nokut-afb-lærdommen om HØY flashcard-tetthet
i puggefag), og **quiz 706** fordi flervalg dominerer 2 av 3 blokker (blokk 1 og blokk 3
er i stor grad automatisk-rettet) og blokk 2s rutenett også drilles som quiz. Regnetunge
kapitler (Del 4 statistikk, enzymkinetikk, Nernst, Hardy-Weinberg, genstruktur, dosering)
har flashcards ≈ quiz (formler/kritiske verdier + prosedyre-quiz); rene faktakapitler
(histologi, anatomi, immunologi) har flashcards ≥ quiz.

**Flashcard-profil:** fakta-, normalverdi-, formel-, latin- og mekanismekort til pugg —
struktur↔navn (latin↔norsk: n. phrenicus↔mellomgulvsnerven; valva mitralis↔mitralklaffen),
normalverdier (blod-pH 7,35–7,45; kritiske verdier 1,96/3,84), formel↔bruksbetingelse
(OR≈RR kun ved sjelden sykdom; kompetitiv ↑Km), hormon-/signal↔kjede (insulin→RTK→…→GLUT4),
mekanismeledd↔rekkefølge (apoptose: Bax→cytokrom c→APAF-1→caspase-9), klassifikasjon
(pRB/p53 = tumorsuppressor; cyklin/CDK = proto-onkogen), og «blokk↔form↔minuspoeng»-kort
(blokk 2-rutenett = negativ retting → blankt). **Quiz-profil:** flervalg med nære
distraktorer (MHC I/II, cortex/medulla, C3a/C5a, OR/RR, korrelasjon/regresjon, sensitivitet/
PPV, marginalis dexter/circumflexus, n. phrenicus/vagus, Mycoplasma/kapsel) + sekvens-
spørsmål (T-celle DN→DP→SP, ledningssystem, apoptosekjede, signalvei) + regne-quiz
(kritiske verdier, enhetskonvertering, HW-2pq, Nernst-forhold) + rutenett-/velg-to-drill.

---

## 4. Prøver

Fire prøver per temadel (Del 1–13 = **52 prøver**). Del 0 og Del 14 har ingen egen prøve
(Del 14s tre øvingseksamener dekker helheten i hver form). Hver prøve speiler blokkens
eksamensform i miniatyr: blokk 1-deler = blandet MC + statistikkregning/essay; blokk 2-
deler = essay/regning/bildetolkning med momentliste-fasit + evt. rutenett med negativ
retting; blokk 3-deler = rent flervalg (velg ett/velg to) med per-alternativ-begrunnelse.
Omfang 20–40 min. Alle oppgaver NYSKREVNE. Prøvekapittel-id `med1100-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).

**Prøve-kvote Del 1:** 4 prøver: (1) *Cellen og meiose* — prokaryot/eukaryot + haploid/
diploid (B1-MC). (2) *Sirkulasjon og syre-base* — MV=SV×HF-regning + hyperventilering/pH.
(3) *Nyre og nervevev* — ADH/akvaporiner + myelin PNS/CNS. (4) *Blandet Del 1* — fordøyelse/
metabolisme/signalering-oversikt.

**Prøve-kvote Del 2:** 4 prøver: (1) *Biopsykososial modell* — casegjenkjenning + CanMEDS-
roller. (2) *Kommunikasjon* — velg det empatiske/autonomirespekterende svaret. (3) *Disease/
illness/sickness og faktorer* — kategorisering. (4) *Blandet Del 2*.

**Prøve-kvote Del 3:** 4 prøver: (1) *Testegenskaper* — bygg 2×2, regn PPV/NPV, vis
prevalensavhengighet (B1-STAT). (2) *Studiedesign og bias* — design↔effektmål + biastype.
(3) *Folkehelse og organisering* — forvaltningsnivå + sosiale helseulikheter + essay. (4)
*Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *KI og hypotesetest* — full føring m/H₀/Hₐ + tolkning
(B1-STAT). (2) *2×2 og kji-kvadrat* — χ² + OR/RR/PR. (3) *Utvalgsstørrelse og styrke* — n-
beregning m/opprunding + frafall. (4) *Anvendte metoder* — flokkimmunitet/Kaplan-Meier/
regresjon.

**Prøve-kvote Del 5:** 4 prøver: (1) *Farger og epitel* — hematoksylin/eosin/PAS + epiteltype
(B2-HIST). (2) *EM og organeller* — eukromatin/heterokromatin + ruER/nukleolus. (3)
*Støttevev* — muskel/ben/brusk-ID med begrunnelse. (4) *Blandet Del 5* (bildetolkning med
begrunnelse — E21-vaksine).

**Prøve-kvote Del 6:** 4 prøver: (1) *Glykolyse og regulering* — F2,6BP + laktat-ATP-regnskap
(B2-MEK/RUTE). (2) *β-oksidasjon og insulin/glukagon* — acetyl-CoA-telling. (3) *Enzymkinetikk*
— hemmertype fra tabell (B2-REGN). (4) *Konsentrasjonsregning* — dose/molaritet/osmolaritet
m/enhet.

**Prøve-kvote Del 7:** 4 prøver: (1) *Molekylærmetoder og genstruktur* — UTR/aminosyre-regning
(B2-REGN). (2) *Arvegang og slektstre* — bestem + begrunn + sannsynlighet. (3) *Hardy-
Weinberg* — 2pq-bærerfrekvens + letale-allel-unntaket (E14). (4) *Meiose og epigenetikk* —
non-disjunction + imprinting (B2-RUTE).

**Prøve-kvote Del 8:** 4 prøver: (1) *Signalveier* — insulinveien i rekkefølge + klasse 1/2-
rutenett (negativ retting). (2) *Cellesyklus og kreft* — tumorsuppressor/proto-onkogen (E13,
B2-RUTE). (3) *Apoptose* — Bax→cytokrom c→caspase-9-kjeden. (4) *Blandet Del 8*.

**Prøve-kvote Del 9:** 4 prøver: (1) *Membran og Nernst* — likevektspotensial-regning m/enhet
(B2-REGN). (2) *Proteinsortering* — SRP→ER/M6P→lysosom + kinesin/dynein. (3) *Embryologi* —
nevrallist/Shh/kimlag. (4) *Blandet Del 9*.

**Prøve-kvote Del 10:** 4 prøver: (1) *T-celleutvikling* — DN→DP→SP + cortex/medulla (B3-1,
4/4-malen). (2) *B-celle og kimsenter* — IgM+IgD + somatisk hypermutasjon (B3-2). (3) *NK og
komplement* — missing self + C3/C5a (nære distraktorer). (4) *Lymfoide organer* — struktur-ID.

**Prøve-kvote Del 11:** 4 prøver: (1) *Bakterier og Gram* — Gram±-morfologi + pneumokokk-kapsel
(E26). (2) *Antibiotika og resistens* — angrepspunkt + betalaktamase/mecA. (3) *Virus og
toksiner* — RNA/DNA-lokalisasjon + shift/drift. (4) *Blandet Del 11* (velg-to).

**Prøve-kvote Del 12:** 4 prøver: (1) *Blodutstryk* — celletype/stadium-ID (B3-BILDE). (2)
*Hematopoiese* — lokalisasjon foster→voksen. (3) *Bohr og leukotriener* — O₂-avgivelse +
nydannelse. (4) *Blandet Del 12*.

**Prøve-kvote Del 13:** 4 prøver: (1) *Hjerte og koronarkar* — koronararterie↔forsyning +
apex cordis (E25). (2) *Nerver og store kar* — n. phrenicus/vagus ventral/dorsal (4/4-malen)
+ ductus thoracicus. (3) *Respirasjonsmuskler og pleura* — rolig inspirasjon/ekspirasjon
(aktiv/passiv) + angulus sterni/T4. (4) *Blandet Del 13* (velg-to + latin-NOM).

### Komplette øvingseksamener (3 — kapitlene 14.4–14.6, én per form)

Tre nyskrevne komplette sett, ett i HVER eksamensform: 14.4 = blokk 1 (digital blandet +
statistikk, 4 seksjoner, kalkulator/tabeller, ingen minuspoeng); 14.5 = blokk 2 (6 t
skriftlig, A–I med vekttall sum 100, essay/regning/bilde, negativ retting på rutenett);
14.6 = blokk 3 (rent flervalg fra bank, velg ett/velg to, ingen minuspoeng). Full fasit +
Sensorblikket per sett. Begrunnelse: fordi de tre blokkene har helt ulik form og alle må
bestås, må studenten trene tidsdisiplin og poenghøsting SEPARAT i hver form.

---

## 5. Studieguide-disposisjon

1. **Tre blokker, tre eksamener** — blokk-oversiktstabellen (form/tid/svartype/hjelpemidler/
   retting), seksjonsvektene, og minuspoeng-asymmetrien (blokk 2-rutenett = negativ retting;
   blokk 1/3 = ingen) (fra kap. 0.1–0.2).
2. **Blokk 1-kart** — humanbiologi-oversiktsfysiologi + atferdsfag-modeller + samfunnsmedisin
   + statistikkens tyngdepunkt (40 %), med formel-/kritisk-verdi-samlingen (1,96; 3,84; k;
   HW-2pq; osv.) og bruksbetingelsene.
3. **Blokk 2-kart** — oppgavemalen A–I/L med vekttall, de faste mekanismekjedene som
   nummererte momentlister (glykolyse/F2,6BP, insulinveien, apoptose, arvegang, enzymkinetikk,
   Nernst, proteinsortering, embryologi) og regneprosedyrene med enhetskonvertering, +
   negativ-retting-strateginoten.
4. **Blokk 3-kart** — anatomi thorax (koronarkar, n. phrenicus, respirasjonsmuskler),
   immunologi (T-celleutvikling, kimsenter, NK/komplement), mikrobiologi og blod — med de
   nære distraktorene og latinsk nomenklatur.
5. **Latin↔norsk-listen** — thoraksanatomiens faste navn (klaffer, koronargrener, nerver,
   store kar, respirasjonsmuskler, kapillærtyper).
6. **Normalverdi-, formel- og faktabank** — statistiske kritiske verdier og formler,
   metabolske tallfakta (β-oksidasjonsregnskap, glykolyse-ATP), HW/Nernst/dose-formler,
   immunologiske og anatomiske nøkkelfakta — flashcard-speilet i prosaform.
7. **Sensorfellene** — E1–E26 som énlinjers varsellamper, med E20 (blokk 2-rutenett-gjetting),
   E13 (kreftgen), E23/E25 (immun-/latindistraktorer) uthevet.
8. **Bestått-strategi per blokk** — hva som sikrer bestått i hver av de tre (blokk 1: sikre
   statistikkregning med vist metode + gjenganger-MC; blokk 2: momentlister i rett rekkefølge
   + vist regning + rutenett-disiplin; blokk 3: latinsk presisjon + svar alltid).
9. **Ukeplan** — løp mot tre eksamensdager med prøve-innplassering (temadelprøver underveis;
   øvingseksamen i hver form de siste ukene, i den rekkefølgen blokkene avlegges).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI`, skrives til
   `textbook-courses-hoyskole.ts`): id `med1100`, title, `level: 'Høyskole'`, alle 50
   kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen.
2. **Del 0** først (etablerer tre-blokk-strukturen, de tre svarlogikkene, spørreordtrappen
   og **minuspoeng-strategien for blokk 2** som alle senere kapitler refererer).
3. **Blokk 1 (Del 1→4)** → **Blokk 2 (Del 5→9)** → **Blokk 3 (Del 10→13)** → **Del 14**
   (drill + øvingseksamener). Prerequisites peker bakover; batching = én agent per hel del
   (Del 4 og Del 6/7 er >3 kap → gi agenten hele delens kontrakter).
4. **Prøver** (`med1100-<del>-prove`) etter at delens kapitler finnes (Del 1–13).
5. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og quiz-
   registrering til slutt.

Per temakapittel gjelder blokk-rekkefølgen i §2 «Kapittel-DNA» (tip Eksamensvinkel → text
Forkunnskaper + collapsible Nøkkelfakta-/formelliste → text Oversikt → definition Kjernefakta
(flashcard-kilden — toppnivå med title!) → theorem Regneprosedyre / text Mekanismekjeder →
example Modellsvar/regnecase → warning Typiske feil → exercise ×6–12 → collapsible Repetisjon).
Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og feilkodene (E1–E26) fra dette
skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/med1100-*.json` parser med
      `json.load` (generer via `json.dump`). `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 50 kapittel-id-er har eksisterende content-fil; `number`
      er del-basert («7.3», ALDRI lineær); prosareferanser bruker samme form («kap. 7.3»);
      prerequisites peker på eksisterende id-er (og bakover); `sectionNames` satt; narrativ-
      id-er registrert (verifiser med prod-server + curl at narrativ-ruter gir 200).
- [ ] **Tre-blokk-integritet:** hvert kapittels Eksamensvinkel sier hvilken BLOKK og form det
      trener; blokk 2-kapitler med rutenett har negativ-retting-note (blankt = 0); blokk 1/3
      har «svar alltid — ingen minuspoeng»; statistikk-/regnekapitler har theorem-regneprosedyre
      + vist utregning + enheter.
- [ ] **Medisinsk presisjon / `(verifiser)`-markeringer:** grep `-i verifiser` — alle markerte
      verdier (CO₂-transportandeler, ~99 % vannreabsorpsjon, ~85 % offentlig finansiering,
      ~74 % NCD-død, nøytrofil halveringstid <1 døgn, hyperkalemi-depolarisering ~18 mV, blod-pH,
      hemostase-dekning i blokk 3) fagfellesjekkes i fase 6 mot GJELDENDE pensum. INGEN
      oppdiktede tall/navn.
- [ ] **Kalibrering (frisk kropp):** ingen klinikk/patofysiologi/farmakoterapi som kjernestoff;
      «felles avsluttende deleksamen»-stoff holdes utenfor; detaljer merket «ikke forventet»
      (ribosom-subenheter, mtDNA-lengde, enzymnavn i parentes) kun som «bør kjenne til».
- [ ] **Kvotesum:** quiz ≥706 og flashcards ≥734 fordelt per kapittel som angitt (hardt
      minimum ≥600 quiz / ≥700 flashcards); 4 prøver per temadel Del 1–13 (52) + 3
      øvingseksamener (én per form); fasit-svaralternativer rebalansert (jevn a/b/c/d —
      options[0] alltid riktig i staging, runtime stokker).
- [ ] **Tre former i eksamenstreningen:** 14.4 = blokk 1-format, 14.5 = blokk 2-format
      (vekttall sum 100 + negativ retting), 14.6 = blokk 3-format (velg ett/to, ingen
      minuspoeng); hver med full fasit + Sensorblikket.
- [ ] **Opphavsrett:** alle oppgaver, case, figurtekster, tallverdier og øvingseksamener er
      NYSKREVNE — ingen formuleringer/fasitmomenter fra MED1100-settene. Anatomiske navn
      (norsk/latin), fysiologiske sammenhenger og statistiske standardformler er standard
      fagstoff og fritt.
- [ ] **Leserkrav:** Forkunnskaper-blokk med lenker + collapsible «Nøkkelfakta- og formelliste»
      først i hvert kapittel; Eksamensvinkel-`tip` (per blokk) og Typiske feil-`warning` i hvert
      kapittel; «bør kjenne til»-stoff plassert ETTER kjernestoffet og merket.

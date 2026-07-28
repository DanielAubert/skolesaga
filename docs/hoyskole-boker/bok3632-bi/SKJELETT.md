# Bokskjelett: BØK 3632 Finansiell styring — eksamensrettet lærebok

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


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (5 komplette sett: ett udatert mønster-/øvingssett, én kontinuasjonseksamen
> V2024 og tre ordinære skoleeksamener H2024/V2025/H2025, pluss det utdelte
> **formelarket** med 20 emnespesifikke formler — identisk på alle fem settene).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
> Format-forbilder: `bok3423-bi` (BI-format: «vis utregning» + formelark-håndverk)
> og `fin3521-bi` (beslektet corporate finance II — se arbeidsdelingen i §1).
> **Kalibrer faglig utelukkende mot BØK 3632-analysen** — bok3423/fin3521 er
> format- og nabofagsforbilder, ikke faglige forbilder.
>
> **Fagets identitet (viktig avklaring).** Tross navnet «Finansiell styring» er
> dette **ikke** økonomistyring / management accounting. Det finnes **ingen**
> kostnadsfordeling, bidrags-/selvkostkalkyle, ABC, dekningspunkt/CVP,
> budsjettering eller standardkost/avviksanalyse i arkivet. Emnet er
> **videregående bedriftsfinansiering (corporate finance II)**: kapitalstruktur,
> Modigliani–Miller, verdsettelse/APV, obligasjoner/rentestruktur, opsjoner og
> utbyttepolitikk/emisjon. Boken bygges rundt dette, aldri rundt kostnadsteori.
>
> **Alle mønstereksempler i skjelettet har nyskrevne tallverdier og egne,
> fiktive selskapsnavn** (Bjørkli Kraft AS, Saltström Marin AS, Granli Teknologi
> AS, Vindheim Fornybar AS, Myrland Eiendom AS, Storhaug Industri AS m.fl.).
> Forfatteren varierer dem videre — **aldri** kopiér tall eller selskapsnavn fra
> reelle sett (ikke FjellFinans, Oslo Solenergi, Fjordtek, Nordic Solutions,
> Arctic Renewables, ScandiDesign, Vidda Utvikling, Aurora Solutions, TechVista
> osv.). Fordi arkivet mangler sensorveiledninger, er alle sensorkrav utledet av
> oppgavetekstenes instruksjoner; usikre detaljer merkes `(verifiser)` i den
> ferdige boka.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `bok3632-bi` |
| Tittel | **BØK 3632 Finansiell styring** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (bachelor i økonomi og administrasjon; 7,5 ECTS) |
| Arketype | Regnefag (videregående bedriftsfinansiering / corporate finance II, med utdelt formelark og tunge, kjedede regneoppgaver) |
| Antall kapitler | **30** (3 eksamenskart/håndverk + 23 tema/drill + 4 eksamenstrening) + 24 prøvekapitler |
| Estimert totaltid | **≈ 33 timer** (uten prøver) |
| Quiz totalt | **530** (krav ≥500) |
| Flashcards totalt | **522** (krav ≥500) |

**Pitch (ett avsnitt):** BØK 3632 vurderes med **100 % individuell skriftlig
skoleeksamen (3 timer)** — ingen case, ingen gruppeinnlevering. Hele karakteren
settes av én tung, tidsknapp regneeksamen. Fem oppgaver à ~20 % ligger i en
**fast 5-blokks-arkitektur** som gjentar seg identisk på hvert sett: O1 utbytte &
emisjon, O2 obligasjoner/rentestruktur, O3 kapitalstruktur/MM, O4 fri
kontantstrøm/APV/verdsettelse, O5 opsjoner. Boken drilles mot nøyaktig disse fem
posisjonene. To BI-særtrekk dresseres i hvert kapittel: **«vis beregning»** (kun
fasittall gir ikke full uttelling — formelvalg og mellomsteg bærer poengene) og
**formelarket** — 20 emnespesifikke formler deles ut identisk på alle sett, men
**fem av de mest testede mekanismene står IKKE på arket og må pugges**: durasjon
(Macaulay), spotrente fra nullkupongpris, terminrente (arbitrasjefri forward),
obligasjonsprising fra kupong, og hele fri kontantstrøm-oppstillingen. Fordi
oppgavene er **kjedet** (a gir Vu, b bruker Vu, c gjeldsbeta, d EK-beta …) trenes
hele **regnekjeder med mellomsteg**, ikke isolerte formelbruk. Fordi tallene i
oppgavebanken er **randomiserte** (selskapsnavn roterer, oppgavetype fast per
posisjon), gis hver temadel en **parametrisk mal** som studenten fyller med nye
tall. Emnet bygger på **BØK 3423 Finans** (CAPM, nåverdi, obligasjons-basics) og
bruker **BØK 3532**-regnskapstall som input til fri kontantstrøm.

**Kritisk regel #1 — «Vis beregning» (gjelder HELE boka).** «Vis beregninger» /
«Vis beregning» står eksplisitt på flere delspørsmål. Konsekvens: (i) hvert
løsningsforslag skrives som en A-besvarelse der **formelen velges og settes opp
eksplisitt FØR innsetting**, med ett steg per linje; (ii) kalkulatorens
finansfunksjoner nevnes bare som kontroll, aldri som løsning; (iii) fordi
oppgavene er kjedet, gis riktig **metode** i et senere ledd normalt uttelling
selv med et feil inndatatall — **følgefeil straffes ikke to ganger** (antatt
BI-praksis, merk `(verifiser)`); (iv) hver regneoppgave skal ende i et svar med
**enhet** (kr / tusen / mill.) og — der oppgaven ber om det — en **konklusjon
eller tolkning** («høyest selskapsverdi fordi …», «arbitrasje finnes, gevinst
= …»). Dette skal gjennomsyre alle løsningsforslag.

**Kritisk regel #2 — Formelarket dekker 20 formler, men fem kjernemekanismer må
pugges (gjelder HELE boka).** Det utdelte arket har **20 nummererte formler**
(CAPM m/u skatt, WACC, av-/pågiring av beta, ex-rights/tegningsrett, MM-relasjoner
m/u skatt, vekstverdsettelse, Lintner, Gordon, opsjonsutbetalinger, put–call,
sikringsforhold, binomisk pris). **Studenten trenger ikke pugge disse, men må
vite nøyaktig hvilken formel som passer til hvilken situasjon og kunne alle
mellomstegene manuelt.** Hvert delkapittels **Symbol- og formelliste** merker
hver formel enten **«(på formelarket, nr. X)»** eller **«(må pugges — IKKE på
arket)»**. **Må pugges** (blant de mest testede undertemaene, men ikke på arket):
**durasjon (Macaulay)**, **spotrente fra nullkupongpris**, **terminrente /
arbitrasjefri rentestruktur**, **obligasjonsprising fra kupong**, og hele **fri
kontantstrøm-oppstillingen** (DFRSI → DES → investeringer → endring
arbeidskapital → FCF). Dette er bokas viktigste strukturinnsikt: kapitalstruktur-
og opsjonsmatematikken kan læres «med arket i hånden» (velg riktig formel), mens
obligasjons- og FCF-mekanikken må sitte utenat.

**Kritisk regel #3 — Kjedet regneoppgave + parametrisk mal (gjelder HELE boka).**
Delspørsmålene bygger på hverandre og **en feil tidlig forplanter seg**. Boken
trener **hele kjeder** (bær tall videre ryddig, merk hva som er inndata til neste
ledd), aldri isolerte formelbruk. Fordi oppgavebanken **randomiserer tallene**
(fast oppgavetype per posisjon, byttede tall/parametere per semester), får hver
temadel en **parametrisk mal**: en generisk oppskrift med symboler i stedet for
tall, som studenten instansierer med de aktuelle tallene på eksamen. Malene er
bokas bærende pedagogiske grep — de speiler nøyaktig hvordan settene er bygget.

**Kritisk regel #4 — Hjelpemidler: kalkulator + rentetabeller (gjelder Del 5
særlig).** Tillatt: **BI-godkjent eksamenskalkulator**, enkel kalkulator og
**rentetabeller**. Boken lærer studenten **manuell** neddiskontering og
tabellbruk (ikke kalkulator-snarveier), siden mellomregning kreves. Flervalg er
**nesten fraværende** (1 av ~110 delspørsmål i hele arkivet) — quiz/flashcards
bygges likevel, men **eksamenstreningen prioriterer kjedede regneoppgaver med
mellomregning**, ikke flervalgsstrategi.

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk BI-pensumets norske
finansnotasjon konsekvent (Bøhren & Michalsen-tradisjonen — *inferert av
notasjonen på arket, ikke bekreftet av arkivet; merk `(verifiser)` ved
notasjonspåstander*):

| Symbol | Betydning |
|---|---|
| $k_E$, $k_G$, $k_T$, $k_U$ | egenkapital-, gjelds-, total- (WACC) og ugiret kapitalkostnad |
| $\beta_E$, $\beta_I$ (= $\beta_U$), $\beta_G$ | egenkapitalbeta, ugiret / investeringsbeta, gjeldsbeta |
| OER, OFR, OFRS | overskudd til egenkapital; overskudd før renter; overskudd før renter og skatt (derfor multipliseres OFRS med $(1-s)$ i $V_U$-formelen) |
| DES, DFRSI | driftsresultat etter skatt; driftsresultat før renter, skatt og avskrivning på immaterielle eiendeler |
| APIK | avkastning på investert kapital |
| DPA, OPA | dividende per aksje; overskudd/resultat per aksje |
| $V_U$, $V_M$ | verdi av ugiret selskap; verdi av giret (markedsverdi) selskap |
| $PG$, $E$, $V$ | markedsverdi gjeld; markedsverdi egenkapital; $V = E + PG$ |
| $s$, $t_E$, $t_D$ | selskapsskattesats; personskatt på egenkapital-/gjeldsinntekt (toledd-skatt) |
| $r_f$, $E(r_M)$ | risikofri rente; forventet markedsavkastning |
| $P_0$, $P_e$, $P_X$, $T_n$ | markedskurs (cum rights); emisjonskurs; ex-rights-kurs; tegningsrettens verdi |
| $A_0$, $A_T$, $I$, $K_0$, $S_0$ | aksjekurs i dag / ved forfall; innløsningskurs; kjøps-/salgsopsjonspris i dag |
| $\varnothing$, $n$ | opp-/nedfaktor i binomisk tre (multiplikativ) |
| $D$ (durasjon), YTM | Macaulay-durasjon; yield to maturity (effektiv rente på obligasjon) |
| $r_t$, $f$ | spotrente for løpetid $t$; terminrente (forward) |

Skriv rentestørrelser i prosent i teksten (7 %) og desimal i formlene (0,07).
**ALDRI** kostnads-/management-accounting-formler (CVP, bidragskalkyle, ABC,
avviksanalyse) — 0 forekomster i arkivet.

### Arbeidsdeling mot FIN 3521 (nabofag — begge corporate finance II)

> NB: FIN 3521-kolonnen bygger på fin3521-skjelettet/-analysen, ikke på BØK 3632-arkivet — *(verifiser mot fin3521-boka ved bygging)*.

BØK 3632 og [FIN 3521](/fin3521-bi) overlapper delvis (begge er videregående
bedriftsfinansiering), men har **egne oppgavebanker og ulik kalibrering**.
Forskjellene bøkene må respektere:

| Trekk | **BØK 3632 (denne boka)** | **FIN 3521 (nabofag)** |
|---|---|---|
| Formelark | **Ja** — 20 formler, identisk på alle sett | **Nei** — alt må memoreres |
| Obligasjoner/durasjon/rentestruktur | **Tung** (fast O2, 18 %) | Fraværende |
| APV (justert nåverdi) | **Kjernetema** (O4) | Dekket implisitt |
| M&A / fusjon-oppkjøp | **Fraværende** | Fast (80 %, egen oppgave) |
| Miller-modell med personskatt ($t_E$, $t_D$) | Kort (én forekomst, toledd-skatt-utvidelse) | **Kjernetema** |
| MM med selskapsskatt | Kjerne (O3) | Kjerne |
| Opsjoner (binomisk, put–call, sikring) | Kjerne (O5) | Fast, men mindre |

**Kryssbok-lenk som aktiveringsmarkør:** i Del 0, i kapitalstruktur-delen (2.4
toledd-skatt) og i opsjons-/utbyttedelene skal boken **nevne FIN 3521 ved navn**
og peke på at M&A og Miller-personskatt hører hjemme der, mens obligasjoner/APV
er BØK 3632s særpreg. **Live markdown-lenke `[FIN 3521](/fin3521-bi/...)`
brukes KUN dersom `fin3521-bi` faktisk er bygget** (leserkravet: lenk kun til
kapitler som finnes); er den ikke bygget, refereres FIN 3521 med navn uten lenke.
Samme regel for BØK 3423 og BØK 3532: refereres med navn; **live lenker går
foreløpig kun til de verifiserte `bi-okonomi`-kapitlene** (se §2).

---

## 2. Makrostruktur

Rekkefølgen kombinerer faglig avhengighet (fundament først) med
eksamensdramaturgien (de fem faste blokkene), og størrelsen styres av frekvens/vekt.
`sectionNames` = den beskrivende tittelen per del (vises som «Kapittel N: …» på
bokforsiden). **`number` er del-basert («2.3»), aldri lineær** — bokforsiden
grupperer på `number.split('.')[0]`. Prosareferanser i innholdet bruker samme
form («kap. 2.3»).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Vekt/prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, «vis beregning» og regnekjede-håndverket | 3 | — | Prioriteringsverktøy + føringshåndverk (fagets sterkeste sensorsignal) + formelark-vs-pugg-oversikten + regnekjede-/parametrisk-mal-håndverket som resten refererer til. Kjerne i studieguiden. |
| 1 | Repetisjon: tidsverdi og CAPM *(fundament)* | 2 | **FUNDAMENT** | Kort repetisjon (bygger på BØK 3423). Nåverdi/evig strøm og CAPM/beta forutsettes i alle fem blokkene. Holdes slank (2 kap). |
| 2 | Kapitalstruktur og Modigliani–Miller | 5 | **PERFEKT — STØRST (25 %, O3)** | Fagets tyngdepunkt (5/5). Vu via CAPM, av-/pågiring av beta, gjeldsbeta, MM m/u skatt, WACC, toledd-skatt + kvalitativ drøfting. Teori + drill. |
| 3 | Fri kontantstrøm, verdsettelse og APV | 4 | **PERFEKT (20 %, O4)** | 5/5. FCF-oppstilling *(må pugges)*, enterprise value med vekst, APV, APV vs. WACC-metode. Begge undertyper drilles likt. Teori + drill. |
| 4 | Opsjoner | 4 | **PERFEKT (20 %, O5)** | 5/5. Opsjonsutbetaling/put–call, binomisk prising *(risikonøytral sannsynlighet er kjernen)*, sikringsforhold/arbitrasje, kvalitativ sikring. Teori + drill. |
| 5 | Obligasjoner og rentestruktur *(må pugges)* | 4 | **PERFEKT (18 %, O2)** | 5/5. Obligasjonspris, durasjon, spot-/terminrente — **alle fire må pugges** (ikke på arket). Mest formeluavhengige oppgaven. Teori + drill. |
| 6 | Utbyttepolitikk og emisjon | 4 | **PERFEKT (17 %, O1)** | 5/5. Ex-rights/tegningsrett dominerer (4/5); utbytteteori (Lintner/Gordon 2-fase) 1/5. Enkleste blokk å banke fullt. Teori + drill. |
| 7 | Eksamenstrening | 4 | — | Strategi/formelark-oversikt + 3 komplette øvingseksamener (5 oppgaver fast posisjon, 3 t, formelark + rentetabeller + kalkulator). |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som
studentens sjekkliste, ordnet etter oppgaveposisjon O1–O5):
`E` emisjon med tegningsretter (ex-rights, $T_n$, eierandel) — O1 ·
`U` utbytteteori (Lintner, Gordon 2-fase, avkastning etter skatt) — O1-variant ·
`O` obligasjonsprising (kupong → pris / pris → YTM) — O2 ·
`D` durasjon (Macaulay) og rentefølsomhet — O2 ·
`R` rentestruktur (spotrente, terminrente, NV gitt rentekurve) — O2 ·
`K` kapitalstruktur/MM (Vu, av-/pågiring av beta, MM m/u skatt, WACC) — O3 ·
`F` fri kontantstrøm-bygging + enterprise value — O4 ·
`A` APV / justert nåverdi (NPV(EK) + skjold, APV vs. WACC) — O4 ·
`B` binomisk opsjonsprising + risikonøytral sannsynlighet — O5 ·
`S` sikring/arbitrasje (sikringsforhold, put–call-arbitrasje, collar) — O5 ·
`T` kort teori/drøfting under stram ordgrense (maks 5 linjer).

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har tre kapitler, ikke ett.** DNA legger opp til ett eksamenskart.
   BØK 3632 får i tillegg kap. 0.2 (**«vis beregning»-håndverk + formelark-vs-
   pugg-oversikten** — fagets sterkeste enkeltsignal og den viktigste
   strukturinnsikten) og kap. 0.3 (**regnekjede- og parametrisk-mal-håndverket**
   — de to strukturtrekkene som gjør emnet så forutsigbart: kjedede oppgaver og
   randomiserte tall). Å etablere føringsstandard, formelark-skillet og
   mal-tenkningen tidlig gjør resten billigere.
2. **Del 2 (kapitalstruktur/MM) er bokas STØRSTE del (5 kap) og ligger først av
   temadelene**, foran verdsettelse. Grunnen er ren vekt/frekvens: det er fagets
   tyngdepunkt (O3, 25 %, 5/5) og der flest poeng tapes (beta-omregning med skatt,
   skjold-basis, Vu vs. VM). Den plasseres rett etter tidsverdi/CAPM-repetisjonen
   fordi Vu = OFRS(1−s)/kU krever CAPM.
3. **Drillkapitlene ligger inne i temadelene sine** (2.5, 3.4, 4.4, 5.4, 6.4),
   ikke samlet i siste del — dette er 5/5-gjengangersjangre som må automatiseres
   rett etter teorien. Del 7 beholder strategi/formelark-oversikten og de tre
   komplette øvingseksamenene (som selv rommer alle fem oppgaveposisjonene).
4. **Fem mekanismer er merket «må pugges» på tvers av DNA-ens formelbruk-antakelse**
   (durasjon, spotrente, terminrente, obligasjonspris, FCF-oppstilling) — Del 5
   og kap. 3.1 læres uten formelstøtte, i kontrast til de arket-støttede delene.
5. **Flervalg har egen linje i fraværsbildet, ikke egen sjanger** (1 av ~110
   delspørsmål) — nevnes med én setning i Del 0; treningen vektlegger kjedede
   regneoppgaver. **M&A og Miller-personskatt er nedtonet** (hører til FIN 3521,
   jf. §1): M&A utelates helt; Miller-personskatt dekkes kort som toledd-skatt-
   utvidelse i kap. 2.4.

**Kryssbok-lenker (verifisert bygget):** peker på **bi-okonomi** (Matematikk for
økonomer — verifisert bygget: `bi-okonomi-4-1` Renter og renteberegning, `-4-2`
Nåverdi og fremtidsverdi, `-4-3` Annuiteter, `-4-5` Investeringsanalyse; `-2-2`/
`-2-3` andregrads-/likningssett — brukes til simultanligning i M&A-fri emisjon og
aksjeoppgjør). Lenkeform: `[tittel](/bi-okonomi/bi-okonomi-4-2)`. **Lenk kun
til disse verifiserte id-ene.** BØK 3423, BØK 3532 og FIN 3521 refereres med navn;
live lenker dit legges inn først når de respektive bøkene er bygget.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Symbol- og formelliste-blokk (per
delkapittel, med «(på formelarket, nr. X)» / «(må pugges)»-merking), Eksamensvinkel-
`tip`, Typiske feil-`warning` og de øvrige obligatoriske kapittel-DNA-blokkene
spesifiseres i BYGGEKONTRAKT — her angis innholdet de skal dekke. Hver
temadel-oppskrift skrives som en **parametrisk mal** (symboler før tall) etterfulgt
av minst én **fullt gjennomregnet regnekjede med mellomsteg** og nyskrevne tall.

---

### Del 0 — Eksamenskart, «vis beregning» og regnekjede-håndverket

#### Kapittel 0.1: Eksamenskartet — slik testes BØK 3632

- **id:** `bok3632-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Vurderingsformen (100 % skoleeksamen, 3 t), den faste 5-blokks-arkitekturen, temafrekvensene, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 5 sett + formelarket. Skal gjengi: (i) **formen**: 100 % individuell skriftlig skoleeksamen, 3 timer, ingen case/gruppe; hjelpemidler = BI-kalkulator + rentetabeller + utdelt formelark. (ii) **den faste 5-blokks-dramaturgien** (identisk på alle sett): O1 utbytte & emisjon (~17 %), O2 obligasjoner/rentestruktur (~18 %), O3 kapitalstruktur/MM (~25 %), O4 fri kontantstrøm/APV/verdsettelse (~20 %), O5 opsjoner (~20 %); 4–8 delspørsmål à 2–8 % per oppgave. (iii) **temafrekvensen**: alle fem hovedtemaene 5/5 (100 %); undertemaer med finere prioritet (av-/pågiring av beta 5/5, MM med skatt 5/5, Vu via CAPM 5/5, binomisk pris 5/5, obligasjonspris 5/5, spotrente 4–5/5, terminrente 4/5, WACC 4/5, ex-rights 4/5, durasjon 3–4/5, APV 3/5; utbytteteori/toledd-skatt 1/5 men tunge). (iv) **oppgavebankens natur**: randomiserte tall, roterende selskapsnavn, fast oppgavetype per posisjon → parametrisk mal. (v) **sensorens metaregler** (se kap. 0.2). (vi) **fraværsbildet** — én setning: kostnadsteori/CVP/ABC, M&A og tung Miller-personskatt testes ikke/marginalt; flervalg praktisk talt fraværende.
- **Forkunnskaper:** ingen. Metakapittel uten symboler av betydning — kort formelliste kan utelates.
- **Innholdskontrakt:** Sjangerkatalogen E, U, O, D, R, K, F, A, B, S, T presenteres som studentens sjekkliste med oppgaveposisjon O1–O5 og typisk vekt. **Karakterskillene** (utledet, merk `(verifiser)`): **bestått (E)** = riktig Vu via CAPM, riktig obligasjonspris, riktig binomisk kjøpsopsjon, riktig ex-rights-kurs; **midtsjikt (C/D)** = korrekt av-/pågiring av beta med (1−s)-leddet, riktig skjold PG·s, durasjon og terminrente riktig, APV satt opp; **toppsjikt (A/B)** = bærer kjedede tall feilfritt, ser hvorfor APV og WACC-metoden avviker, priser opsjoner risikonøytralt og kvantifiserer arbitrasjegevinst, drøfter agentkostnader/optimal gjeldsgrad presist under ordgrensen. Avslutt med **leseplan**: Del 2–6 = «må perfekt» (alle fem blokkene testes hver gang); Del 1 = fundament-repetisjon; Del 7 = sluttrening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at hver av de fem oppgavene teller ~20 % og du har 180 minutter — sett opp et tidsbudsjett» og «hvorfor gir et riktig sluttall uten oppsatt formel likevel ikke full uttelling?».
- **Typiske feil:** Metafeilene: bruke like mye tid på en 6 %- som på en 25 %-oppgave; hoppe over mellomregning; la en tidlig regnefeil velte hele kjeden uten å merke inndata; tro at kalkulatorsvaret alene teller.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 0.2: «Vis beregning» — føringshåndverk og formelarket (arket vs. pugg)

- **id:** `bok3632-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3632-bi-0-1` · **kapitteltype:** teori (metaregel)
- **description:** Fagets to bærende regler operasjonalisert: hvordan skrive ut beregningen slik sensor krever, og nøyaktig hva som står på det utdelte formelarket vs. hva som må pugges.
- **Eksamensbelegg:** Metaregel-kapittel bygget på «Vis beregninger»-instruksjonen (bl.a. S3 oppg. 1d/3g) og på det 20-formlers formelarket (identisk på alle sett). Fagets sterkeste enkeltsignal + den viktigste strukturinnsikten. Prioritet: **PERFEKT** (bærer karakteren i alle blokker).
- **Forkunnskaper:** Bygger på kap. 0.1. **Symbol- og formelliste (collapsible):** oversikt over ALLE bokas formler, hver merket **«(på formelarket, nr. X)»** (de 20 arkformlene) eller **«(må pugges)»** (durasjon, spotrente, terminrente, obligasjonspris, FCF-oppstillingen).
- **Innholdskontrakt:** **(A) Føringsstandarden:** hvert løsningsforslag skrives som A-besvarelse — **velg** riktig formel (oppgi arknummer eller «pugges»), sett den opp eksplisitt FØR innsetting, ett steg per linje, marker sluttsvaret med **enhet** (kr / tusen / mill.) og — ved konklusjonsspørsmål — én setnings tolkning. Kalkulatorens finansfunksjoner bare som kontroll. To kontrastpar «samme matematikk, ulik føring» (én lav-uttellings, én full-scorings versjon, med margnotater). **(B) Formelark-oversikten** (theorem-blokk): de 20 formlene skrevet ut og gruppert etter blokk (CAPM/WACC/beta → K; ex-rights/tegningsrett → E; MM-relasjoner → K; vekst/Lintner/Gordon → F/U; opsjonsutbetaling/put–call/sikring/binomisk → B/S). Poeng: **disse trenger man ikke pugge, men må kunne velge og bruke raskt.** **(C) Pugge-listen** (theorem-blokk): de fem mekanismene som IKKE er på arket — durasjon (Macaulay), spotrente fra nullkupongpris, terminrente (arbitrasjefri), obligasjonspris fra kupong, FCF-oppstillingen — med eksplisitt beskjed om at nettopp disse er blant de mest testede og må sitte utenat. **(D) Rentetabellene:** hva de er (diskonteringsfaktor, nåverdi-annuitetsfaktor) og hvordan de leses — men manuell neddiskontering er primær. **(E) Enhets- og fortegnsdisiplin:** arkivet blander kr, tusen og millioner; investering negativ, AK-reversering positiv — én enhetsrot gir svar som er 1000× feil.
- **Oppgavesjangre:** Meta (forbereder alle). Mønstereksempel: «Besvarelsen under gir riktig binomisk opsjonspris, men ville tapt de fleste poengene. Pek på de to føringsmanglene (formel/arknummer ikke oppgitt; risikonøytral sannsynlighet ikke vist) og skriv den om til full uttelling.»
- **Typiske feil:** Oppgi svar uten mellomregning; tro at durasjon/spotrente/FCF-oppsettet står på arket (det gjør de ikke — pugg!); velge feil arkformel (formel 4 vs. 5, 17a vs. 17b); glemme enhet; blande kr/tusen/mill.
- **Quiz: 16 · Flashcards: 32** (formelark-innhold formel↔bruk, pugge-listen, føringsregler, rentetabeller — flashcard-gull)

#### Kapittel 0.3: Regnekjeden og den parametriske malen — håndverket

- **id:** `bok3632-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `bok3632-bi-0-2` · **kapitteltype:** teori (håndverk)
- **description:** De to strukturtrekkene som gjør BØK 3632 forutsigbart: oppgavene er kjedet (feil forplanter seg), og tallene er randomiserte rundt en fast mal per oppgaveposisjon.
- **Eksamensbelegg:** Bygget på oppgavebankens observerte natur (roterende selskapsnavn, fast oppgavetype per posisjon, byttede tall). Prioritet: **PERFEKT** (håndverk, ikke ny finansteori — men avgjør uttellingen).
- **Forkunnskaper:** Bygger på kap. 0.2. **Symbol- og formelliste:** den generiske **kjede-notasjonen** (a → b → c … der utdata fra ett ledd er inndata til neste) presenteres her; ingen nye finansformler.
- **Innholdskontrakt:** **(A) Regnekjeden:** hvordan et delspørsmål mater det neste (typisk O3: a) Vu via CAPM → b) VM med gjeld → c) gjeldsbeta βG → d) pågiring av βE → e) WACC). Regel: skriv hvert mellomsvar med enhet og **merk hva som er inndata videre**; bær ubrutte desimaler internt, rund kun i sluttsvaret; når du oppdager en tidlig feil, korriger uten å regne alt på nytt. Fordi metode belønnes, gir riktig oppsett i ledd d uttelling selv om ledd a var feil (følgefeil straffes ikke to ganger — antatt, `(verifiser)`). **(B) Den parametriske malen:** hver temadel har en fast oppskrift med **symboler** i stedet for tall; på eksamen instansieres den med de aktuelle tallene. Vis ett eksempel: emisjonsmalen ($n$, $P_0$, $m$, $P_e$ → $P_X$, $T_n$, eierandel) instansiert med to ulike tallsett for å demonstrere at oppskriften er invariant. **(C) Enhets- og fortegnssjekk** som fast siste steg i hver kjede. **(D) Tidsbudsjett** for en 5-blokks-eksamen.
- **Oppgavesjangre:** Håndverk (forbereder K, F, A, B, O). Mønstereksempel: «Her er oppgave 3 med to ulike tallsett rundt samme mal. Fyll malen for begge og vis at oppskriften er den samme — bare inndataene endres.»
- **Typiske feil:** Runde av for tidlig og forplante avrundingsfeil; regne hele kjeden på nytt etter en tidlig feil (tidssluk); miste oversikten over hvilket mellomsvar som er inndata til neste ledd; enhetsrot mellom ledd.
- **Quiz: 12 · Flashcards: 16**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Repetisjon: tidsverdi og CAPM *(prioritet: FUNDAMENT — bygger på BØK 3423)*

#### Kapittel 1.1: Nåverdi, evig strøm og annuitet — det du trenger videre

- **id:** `bok3632-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** `bok3632-bi-0-2` · **kapitteltype:** teori (repetisjon)
- **description:** Kompakt repetisjon av diskonteringsverktøyet som alle fem blokkene hviler på: nåverdi av en strøm, evig strøm $C/r$, evig strøm med vekst, og annuitet — grunnlaget for obligasjonspris, Vu, enterprise value og skjold.
- **Eksamensbelegg:** Ikke en egen oppgaveposisjon, men **fundament** under O2 (obligasjonspris), O3 (Vu = OFRS(1−s)/kU), O4 (enterprise value, NV av skjold) og O1 (Gordon). Nåverdi/evig strøm forekommer indirekte i hvert eneste sett. Prioritet: **FUNDAMENT**.
- **Forkunnskaper:** Bygger på [Renter og renteberegning](/bi-okonomi/bi-okonomi-4-1), [Nåverdi og fremtidsverdi](/bi-okonomi/bi-okonomi-4-2) og [Annuiteter](/bi-okonomi/bi-okonomi-4-3) (Matematikk for økonomer), og forutsettes fra BØK 3423 Finans. **Symbol- og formelliste:** $C_t$, $r$, $t$, $n$, $g$; nåverdi, evig strøm, evig strøm med vekst, annuitet — alle **(må pugges — IKKE på arket)** (unntatt Gordon $P_0=D_1/(r-v)$ som er **formelark nr. 16**).
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP: flerperiodisk nåverdi $\sum_t C_t/(1+r)^t$; **evig strøm** $NV=C/r$; **evig strøm med vekst** $NV=C_1/(r-g)$; annuitet $NV=\frac{C}{r}\left(1-(1+r)^{-n}\right)$. Intuisjon per formel, kort. **Regnekjede (nyskrevet, Bjørkli Kraft AS):** en strøm på 30, 45 og 70 mill. kr i år 1–3, krav 9 %: $NV=30/1{,}09+45/1{,}09^2+70/1{,}09^3=27{,}52+37{,}88+54{,}05=119{,}45$ mill. kr. Evig strøm: 8 mill./år, krav 8 % → $8/0{,}08=100$ mill. Med vekst 2 %: $8/(0{,}08-0{,}02)=133{,}3$ mill.
- **Oppgavesjangre:** Fundament (forbereder O, K, F, A, U). Mønstereksempel: «Saltström Marin forventer 20, 35 og 50 mill. kr i årene 1–3, krav 10 %. Sett opp formelen eksplisitt og regn nåverdien.»
- **Typiske feil:** Feil eksponent (glemme at år 3 diskonteres med $(1+r)^3$); bruke $C/r$ på en endelig strøm; blande evig strøm med og uten vekst; svar uten enhet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.2: CAPM, beta og kapitalkostnad — repetisjon mot formelarket

- **id:** `bok3632-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori (repetisjon)
- **description:** Repetisjon av CAPM med og uten skatt fra formelarket — verktøyet som gir kU, kE og kG i kapitalstruktur- og verdsettelsesoppgavene.
- **Eksamensbelegg:** Direkte inndata til O3 (Vu via kU, gjeldsbeta βG fra kG) og O4 (WACC-komponenter). CAPM er på arket, men **anvendelsen** testes tungt (5/5). Prioritet: **FUNDAMENT/PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1 og [Investeringsanalyse](/bi-okonomi/bi-okonomi-4-5); forutsettes fra BØK 3423. **Symbol- og formelliste:** $r_f$, $E(r_M)$, $\beta_E$, $\beta_G$, $\beta_I$; CAPM $k_E=r_f+\beta_E\,(E(r_M)-r_f)$ **(formelark nr. 1)**, skattejustert CAPM **(nr. 2)**, gjeldskostnad $k_G$ tilsvarende **(nr. 1b)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: CAPM forlengs (finn $k_E$/$k_G$ fra beta) og **baklengs** (finn $\beta_G$ fra oppgitt $k_G$: $\beta_G=(k_G-r_f)/(E(r_M)-r_f)$ — brukes i O3). Systematisk vs. usystematisk risiko i én setning (bakgrunn for gjeldsbeta ≈ 0-drøftingen i Del 2). **Regnekjede (nyskrevet):** $r_f=3\,\%$, markedspremie $E(r_M)-r_f=5\,\%$, $\beta_E=1{,}1$ → $k_E=3\%+1{,}1\cdot5\%=8{,}5\,\%$. Baklengs: gjeldskostnad $k_G=4\,\%$ → $\beta_G=(4\%-3\%)/5\%=0{,}2$.
- **Oppgavesjangre:** Fundament (forbereder K, F, A). Mønstereksempel: «Granli Teknologi har $\beta_E=0{,}95$, $r_f=3\,\%$, markedspremie 4,5 %. Finn egenkapitalkostnaden, og finn gjeldsbetaen dersom lånerenten er 3,8 %.»
- **Typiske feil:** Bruke markedsavkastning $E(r_M)$ der markedspremien $E(r_M)-r_f$ kreves; glemme å løse baklengs for $\beta_G$; forveksle $\beta_E$ (giret) med $\beta_I$ (ugiret) — det skillet hører til Del 2.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (1.A nåverdi + evig strøm m/u vekst, fundament; 1.B annuitet + nåverdi av strøm, fundament; 1.C CAPM forlengs + baklengs (gjeldsbeta), fundament; 1.D blandet tidsverdi/CAPM som inndata til en kort O3-kjede).

---

### Del 2 — Kapitalstruktur og Modigliani–Miller *(prioritet: PERFEKT — bokas STØRSTE del, 25 %, O3)*

#### Kapittel 2.1: Ugiret selskapsverdi — Vu via CAPM

- **id:** `bok3632-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `bok3632-bi-1-2` · **kapitteltype:** teori
- **description:** Startpunktet i hver kapitalstruktur-oppgave: verdien av et selskap uten gjeld, funnet ved å kapitalisere forventet driftsoverskudd med den ugirete kapitalkostnaden fra CAPM.
- **Eksamensbelegg:** Vu via CAPM 5/5 (S1–S5, delspørsmål 1a/9) — første ledd i O3-kjeden. Formlene $k_U$ (CAPM) er på arket; $V=E(OFR)/k_T=E(OER)/k_U$ er **formelark nr. 9**. Prioritet: **PERFEKT (kritisk)**.
- **Forkunnskaper:** Bygger på kap. 1.2. **Symbol- og formelliste:** $V_U$, OFR, OFRS, OER, $k_U$, $\beta_I$; $k_U=r_f+\beta_I\,(E(r_M)-r_f)$ **(formelark nr. 1/9)**; $V_U=E(OFRS)(1-s)/k_U$ (ugiret del av **nr. 10**). Merk kU beregnes med **ugiret beta** $\beta_I$.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: finn $k_U$ fra CAPM med ugiret beta; $V_U=\dfrac{E(OFRS)(1-s)}{k_U}$ (evig, skattejustert driftsoverskudd) — eller $V_U=E(OFR)/k_U$ når oppgaven jobber uten skatt. Skillet OFR (før skatt) vs. OFRS (etter skatt) vs. OER (til egenkapital). **Parametrisk mal (O3, ledd a):** gitt $E(OFRS)$, $s$, $\beta_I$, $r_f$, markedspremie → $k_U$ → $V_U$. **Regnekjede (nyskrevet, Vindheim Fornybar AS):** $E(OFRS)=150$ mill. før skatt, $s=0{,}22$, $\beta_I=0{,}9$, $r_f=3\,\%$, premie 5 % → $k_U=3\%+0{,}9\cdot5\%=7{,}5\,\%$; $V_U=150\cdot(1-0{,}22)/0{,}075=117/0{,}075=1560$ mill. kr.
- **Oppgavesjangre:** K (O3, ledd a). Mønstereksempel: «Myrland Eiendom har forventet driftsresultat før renter 120 mill., skattesats 22 %, ugiret beta 0,8, risikofri rente 3 %, markedspremie 4,5 %. Finn den ugirete kapitalkostnaden og den ugirete selskapsverdien.»
- **Typiske feil:** Bruke giret beta $\beta_E$ i kU; glemme (1−s)-justeringen av driftsoverskuddet; forveksle OFR og OER; diskontere en evig strøm med feil kapitalkostnad.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.2: Av- og pågiring av egenkapitalbeta (med gjeldsbeta)

- **id:** `bok3632-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `bok3632-bi-2-1` · **kapitteltype:** teori
- **description:** Hjertet i O3: hvordan egenkapitalbetaen endrer seg når selskapet tar opp gjeld (pågiring) eller når man renser en observert beta for gjeldseffekten (avgiring), inkludert gjeldsbetaens rolle.
- **Eksamensbelegg:** Av-/pågiring av beta 5/5 (S1–S5) — den hyppigste og mest feilutsatte mekanismen i faget. Gjeldsbeta βG fra kG 4/5. Formel 4 (pågiring), 5 (avgiring), 1b (βG). Prioritet: **PERFEKT (kritisk)**.
- **Forkunnskaper:** Bygger på kap. 2.1 og 1.2. **Symbol- og formelliste:** $\beta_E$, $\beta_I$, $\beta_G$, $s$, $G/E$, vekter $w_E$, $w_G$; **pågiring** $\beta_E=\beta_I+(\beta_I-\beta_G)(1-s)\,G/E$ **(formelark nr. 4)**; **avgiring** $\beta_I=\beta_E\,w_E+\beta_G(1-s)\,w_G$ **(nr. 5)**; $\beta_G=(k_G-r_f)/(E(r_M)-r_f)$ **(nr. 1b)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: pågiring (finn $\beta_E$ etter låneopptak) og avgiring (finn $\beta_I$ fra observert $\beta_E$). Nøkkelen er **(1−s)-leddet på gjeldsvekten** og bruk av **markedsverdivekter** (ikke bokførte). Gjeldsbeta hentes baklengs fra oppgitt gjeldskostnad. **Parametrisk mal (O3, ledd c–d):** gitt $\beta_I$, $k_G$ (→ $\beta_G$), $s$, $G/E$ → $\beta_E$. **Regnekjede (nyskrevet):** $\beta_I=0{,}9$, $k_G=3{,}8\,\%$, $r_f=3\,\%$, premie 5 % → $\beta_G=(3{,}8\%-3\%)/5\%=0{,}16$. Etter låneopptak $G/E=0{,}5$, $s=0{,}22$: $\beta_E=0{,}9+(0{,}9-0{,}16)(1-0{,}22)\cdot0{,}5=0{,}9+0{,}74\cdot0{,}78\cdot0{,}5=0{,}9+0{,}2886=1{,}189$.
- **Oppgavesjangre:** K (O3, ledd c–d). Mønstereksempel: «Storhaug Industri har ugiret beta 0,85 og tar opp gjeld til $G/E=0{,}6$. Lånerenten er 4 %, risikofri rente 3 %, markedspremie 4,5 %, skatt 22 %. Finn gjeldsbetaen og den nye egenkapitalbetaen.»
- **Typiske feil:** Glemme (1−s) på gjeldsvekten; bruke **bokførte** i stedet for markedsverdi-vekter av EK/G; sette $\beta_G=0$ når oppgaven gir en gjeldskostnad > $r_f$; forveksle av- og pågiringsretningen; regne $G/E$ som $G/V$.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.3: Modigliani–Miller med og uten skatt — renteskatteskjoldet

- **id:** `bok3632-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `bok3632-bi-2-2` · **kapitteltype:** teori
- **description:** Verdien av å ta opp gjeld: MM uten skatt (verdien er uendret) og MM med selskapsskatt (verdien øker med nåverdien av renteskatteskjoldet, PG·s ved evig gjeld).
- **Eksamensbelegg:** MM med skatt $V_M=V_U+PG\cdot s$ 5/5 (S1–S5) — fast midtledd i O3. Renteskattegevinst som egen post 4/5. Formel 10, 11. Prioritet: **PERFEKT (kritisk)**.
- **Forkunnskaper:** Bygger på kap. 2.1. **Symbol- og formelliste:** $V_U$, $V_M$, $PG$, $s$, $E$; MM med skatt $V_M=\dfrac{E(OFRS)(1-s)}{k_U}+PG\cdot s=V_U+PG\cdot s$ **(formelark nr. 10)**; $k_E=k_T+(k_T-k_G)(1-s)\,G/E$ **(nr. 11)**. MM uten skatt: $V_M=V_U$ (proposisjon I).
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **MM uten skatt** — verdien er uavhengig av finansiering ($V_M=V_U$), kapitalkostnaden $k_E$ stiger lineært med gjeldsgraden. **MM med selskapsskatt** — gjeld gir et renteskatteskjold; ved **evig gjeld** er skjoldets nåverdi $PG\cdot s$, så $V_M=V_U+PG\cdot s$; egenkapitalverdi $E=V_M-PG$. Antakelser (perfekt marked, evig gjeld) må nevnes. **Parametrisk mal (O3, ledd b):** gitt $V_U$, $PG$, $s$ → $V_M$, $E$. **Regnekjede (nyskrevet, videreført Vindheim):** $V_U=1560$ mill., selskapet tar opp $PG=500$ mill. gjeld, $s=0{,}22$ → skjold $=500\cdot0{,}22=110$; $V_M=1560+110=1670$ mill.; $E=1670-500=1170$ mill. Ved aksjetilbakekjøp for 500 mill.: antall aksjer faller, kursen er uendret i perfekt marked (verdien av skjoldet tilfaller gjenværende aksjonærer).
- **Oppgavesjangre:** K (O3, ledd b) + T (drøfting). Mønstereksempel: «Et ugiret selskap er verdt 900 mill. Det tar opp 300 mill. i evig gjeld og kjøper tilbake aksjer. Skatt 22 %. Finn selskapsverdi og egenkapitalverdi før og etter, og forklar hva som skjer med aksjekursen.»
- **Typiske feil:** Sette skjoldet til rentekostnad·s eller lån·rente i stedet for **PG·s**; forveksle $V_U$ (ugiret) med $V_M$ (giret); legge skjoldet til feil basis; glemme at $E=V_M-PG$; blande MM med og uten skatt.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 2.4: WACC, MM-kapitalkostnadene og toledd-skatt

- **id:** `bok3632-bi-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-2-3` · **kapitteltype:** teori
- **description:** Totalkapitalkostnaden (WACC) som veier egenkapital- og gjeldskostnad, MM-relasjonene som binder kU/kE/kT/kG sammen, og den tyngre toledd-skatt-utvidelsen (selskaps- + personskatt).
- **Eksamensbelegg:** WACC (kT) 4/5; MM-kapitalkostnadsrelasjonene inngår i O3-drøfting; toledd-skatt 1/5 men tungt vektet (6 %). Formel 3, 8, 11. **Toledd-skatt/Miller-personskatt er nedtonet her — kjernetema i FIN 3521** (jf. §1). Prioritet: **PERFEKT (WACC) / KJENNE (toledd)**.
- **Forkunnskaper:** Bygger på kap. 2.3. **Symbol- og formelliste:** $k_T$, $k_E$, $k_G$, $k_U$, $w_E$, $w_G$, $s$, $t_E$, $t_D$; WACC $k_T=k_E\,w_E+k_G(1-s)\,w_G$ **(formelark nr. 3)**; MM-relasjoner $k_E=E(OER)/E$, $k_G=r\cdot PG/G$, $k_T=E(OFR)/V$ **(nr. 8a–c)**; toledd-skattefordel $[1-\frac{(1-s)(1-t_E)}{1-t_D}]$ **(utvidet MM — utledet, merk `(verifiser)`)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: WACC med **markedsverdivekter** og skattejustert gjeldsledd; sammenhengen $k_E=k_T+(k_T-k_G)(1-s)G/E$; MM-relasjonene som kontroll (skal gi samme $V_M$). **Toledd-skatt** (kort): når både selskap ($s$), egenkapitalinntekt ($t_E$) og gjeldsinntekt ($t_D$) beskattes, blir skjoldets verdi $[1-\frac{(1-s)(1-t_E)}{1-t_D}]\cdot PG$; forklar når klammeuttrykket er positivt/null. **Parametrisk mal (O3, ledd e):** gitt $k_E$, $k_G$, $w_E$, $w_G$, $s$ → $k_T$. **Regnekjede (nyskrevet):** $k_E=8{,}9\,\%$, $k_G=4\,\%$, $w_E=0{,}7$, $w_G=0{,}3$, $s=0{,}22$ → $k_T=0{,}089\cdot0{,}7+0{,}04\cdot0{,}78\cdot0{,}3=0{,}0623+0{,}00936=7{,}17\,\%$. Toledd-eksempel: $s=0{,}22$, $t_E=0{,}10$, $t_D=0{,}25$ → $1-\frac{0{,}78\cdot0{,}90}{0{,}75}=1-0{,}936=0{,}064$; skjold $=0{,}064\cdot PG$ (langt lavere enn $0{,}22\cdot PG$).
- **Oppgavesjangre:** K (O3, ledd e) + T (drøfting av toledd-skatt). Mønstereksempel: «Et selskap har $k_E=9{,}2\,\%$, lånerente 4,2 %, markedsverdivekter 60/40, skatt 22 %. Finn WACC. Hvordan endres renteskattefordelen dersom eierne i tillegg betaler 15 % skatt på aksjeinntekt og 30 % på renteinntekt?»
- **Typiske feil:** Glemme (1−s) på gjeldsleddet i WACC; bruke bokførte vekter; regne toledd-skatt-klammen med feil plassering av $t_E$/$t_D$; tro at WACC og APV alltid gir samme verdi (se kap. 3.3).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.5: Drill — full kapitalstruktur-kjede og drøfting (O3)

- **id:** `bok3632-bi-2-5` · **number:** 2.5 · **estimatedMinutes:** 80 · **prerequisites:** `bok3632-bi-2-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele O3-kjeden fra Vu til WACC, pluss modellsvar på de tilbakevendende kvalitative drøftespørsmålene under stram ordgrense.
- **Eksamensbelegg:** Dekker sjanger K + T (O3, 25 %, 5/5). Kvalitative drøftetemaer: agentkostnader (S1/S2), interessekonflikt eier–kreditor og optimal gjeldsgrad (S1/S5), gjeldsbeta > EK-beta eller ≈ 0 (S2/S4). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1–2.4. **Symbol- og formelliste:** hele kapitalstruktur-apparatet, hver formel merket «(formelark nr. X)».
- **Innholdskontrakt:** **Løsningsoppskrift (parametrisk mal for O3):** 1) $k_U$ via CAPM → $V_U$; 2) $V_M=V_U+PG\cdot s$, $E=V_M-PG$; 3) $\beta_G=(k_G-r_f)/$premie; 4) pågiring $\beta_E$; 5) $k_E$ via CAPM; 6) WACC $k_T$. **Gjennomregnet eksamens-case** (a–f, nyskrevet, sensor-margnotater om delpoeng ved hvert ledd) som viser at metode belønnes selv med et feil inndatatall. **Modellsvar (maks 5 linjer)** på: (i) hva agentkostnader er og hvordan de begrenser optimal gjeldsgrad; (ii) hvorfor gjeldsbeta normalt er lav/≈ 0 og alltid < EK-beta; (iii) interessekonflikten eier–kreditor. 10–14 nyskrevne oppgaver som roterer hele K-kjeden med varierte tall + 4–5 rene drøfteoppgaver. Alle med `solution` + `hints`.
- **Oppgavesjangre:** K + T. Mønstereksempel (full kjede a–f): «(a) Finn Vu. (b) VM og E etter 400 mill. i gjeld. (c) gjeldsbeta. (d) ny EK-beta. (e) kE. (f) WACC. (g, maks 5 linjer) Diskuter hvorfor selskapet ikke bare girer maksimalt.»
- **Typiske feil:** Hele §2-repertoaret samlet: (1−s)-leddet, bokførte vekter, skjold-basis, Vu/VM-forveksling, gjeldsbeta = 0 uten grunnlag, sprenge ordgrensen på drøftedelen.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A Vu via CAPM + MM med skatt, K; 2.B av-/pågiring av beta med gjeldsbeta, K; 2.C WACC + MM-relasjonene, K; 2.D full O3-kjede a–g med drøfting på eksamensnivå, K+T).

---

### Del 3 — Fri kontantstrøm, verdsettelse og APV *(prioritet: PERFEKT — 20 %, O4)*

#### Kapittel 3.1: Fri kontantstrøm-oppstillingen *(må pugges)*

- **id:** `bok3632-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori
- **description:** Å bygge fri kontantstrøm fra regnskapstall (BØK 3532-input): fra DFRSI via DES til investeringer og endring i arbeidskapital — hele oppstillingen som ikke står på formelarket og må sitte utenat.
- **Eksamensbelegg:** FCF-bygging fra regnskap 2/5, men fundament under all verdsettelse i O4 (5/5). **Hele oppstillingen står IKKE på arket — må pugges** (kritisk strukturinnsikt). Prioritet: **PERFEKT (må pugges)**.
- **Forkunnskaper:** Bygger på kap. 1.1; bruker regnskapstall som forutsettes fra BØK 3532 Finansregnskap. **Symbol- og formelliste:** DFRSI, DES, avskrivning, investeringer, AK, $\Delta$AK, $s$ — **alle (må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP UTENAT: **FCF-oppstillingen** — DFRSI (driftsresultat før renter, skatt, avskrivning) − avskrivning = driftsresultat før renter og skatt; − skatt (på driftsresultatet, **uten** rentefradrag i totalkapital-FCF) = **DES**; + avskrivning (tilbake, ikke-kontant); − investeringer (endring i varige driftsmidler **+ avskrivning**); − $\Delta$ arbeidskapital = **fri kontantstrøm (FCF)**. Poeng: renter trekkes ikke i totalkapital-FCF; avskrivning legges tilbake men gir skatteskjold; AK-økning binder, reversering frigjør. **Parametrisk mal (O4, ledd a):** gitt DFRSI, avskrivning, $s$, investeringer, $\Delta$AK → FCF per år. **Regnekjede (nyskrevet, Bjørkli Kraft):** DFRSI 200, avskrivning 40 → driftsresultat 160; skatt $=160\cdot0{,}22=35{,}2$ → DES $=124{,}8$; + avskrivning 40 = 164,8; − investeringer 50 − $\Delta$AK 10 = **FCF $=104{,}8$ mill.**
- **Oppgavesjangre:** F (O4, ledd a). Mønstereksempel: «Saltström Marin har DFRSI 180, avskrivning 30, skatt 22 %, investeringer 45 og en økning i arbeidskapital på 12. Sett opp fri kontantstrøm for året.»
- **Typiske feil:** Behandle avskrivning som utbetaling i stedet for å legge den tilbake; trekke renter i totalkapital-FCF; feil fortegn på $\Delta$AK; forveksle DES med resultat etter skatt (inkl. renter); enhetsrot (tusen/mill.).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Enterprise value med vekst

- **id:** `bok3632-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `bok3632-bi-3-1` · **kapitteltype:** teori
- **description:** Å verdsette selskapet fra fri kontantstrøm med vekst: enterprise value via vekstverdsettelsesformelen, koblingen til investeringsrate og avkastning på investert kapital (APIK).
- **Eksamensbelegg:** Enterprise value fra FCF med vekst 2/5 (S1/S3); WACC-metode-verdsettelse er den ene undertypen av O4. Formel 12, 13. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 3.1 og 1.1. **Symbol- og formelliste:** DES, $g$ (vekst), APIK, $k_U$, $k_T$; vekstverdsettelse $V=\dfrac{DES_1\,(1-g/APIK)}{k_U-g}$ **(formelark nr. 12)**; multippel EV/EBIT **(nr. 13)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: enterprise value med vekst $V=\dfrac{DES_1(1-g/APIK)}{k_U-g}$; intuisjon — $(1-g/APIK)$ er andelen av overskuddet som ikke reinvesteres (utdelbar del); vekst skaper verdi bare når $APIK>k_U$. WACC-metoden: diskontér FCF med $k_T$ og legg til vekst. Multippel-verdsettelse (EV/EBIT) nevnes kort — **på arket, men aldri observert brukt** (dekkes for fullstendighet). **Parametrisk mal (O4, ledd b):** gitt $DES_1$, $g$, APIK, $k_U$ → $V$. **Regnekjede (nyskrevet, videreført Bjørkli):** $DES_1=124{,}8$, $g=3\,\%$, APIK $=12\,\%$, $k_U=8\,\%$ → $V=124{,}8\,(1-0{,}03/0{,}12)/(0{,}08-0{,}03)=124{,}8\cdot0{,}75/0{,}05=93{,}6/0{,}05=1872$ mill.
- **Oppgavesjangre:** F (O4, ledd b). Mønstereksempel: «Granli Teknologi har forventet DES neste år 90 mill., vekst 2,5 %, APIK 15 %, ugiret kapitalkostnad 9 %. Finn enterprise value, og forklar hvorfor vekst her øker verdien.»
- **Typiske feil:** Bruke $DES_0$ i stedet for $DES_1$ i telleren; glemme $(1-g/APIK)$-leddet (overvurderer verdien); bruke $k_U<g$ (formelen bryter sammen); tro at all vekst er verdiskapende (kun når APIK > kapitalkostnad).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: Justert nåverdi (APV) og APV vs. WACC-metoden

- **id:** `bok3632-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `bok3632-bi-2-3` · **kapitteltype:** teori
- **description:** Prosjektverdsettelse med gjeld holdt separat: netto nåverdi finansiert med ren egenkapital pluss nåverdien av renteskattegevinsten — og hvorfor APV og WACC-metoden gir ulikt svar når gjeldsgraden ikke er konstant.
- **Eksamensbelegg:** APV 3/5 (S2/S4/S5); NPV av investeringsprosjekt 3/5; APV vs. WACC-metode 2/5 (S4/S5, tester nettopp forståelsen av avviket). Formel 9–11. **APV er BØK 3632s særpreg** (jf. FIN 3521 i §1). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 3.1, 3.2 og 2.3. **Symbol- og formelliste:** $NPV_{EK}$, skjold, $k_U$, $r_G$, $PG$, $s$; APV $=NPV_{EK}+NV(\text{skjold})$; skjold ved evig gjeld $=PG\cdot s$ (fra **formelark nr. 10**), ved endelig gjeld $NV=\sum r_G\,PG\,s/(1+r_G)^t$ **(må pugges — oppstilling)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **APV** = (1) NPV av prosjektet som om det var **rent egenkapitalfinansiert** (diskontér FCF med $k_U$, trekk investeringen); + (2) **nåverdien av renteskatteskjoldet** (ved evig gjeld $PG\cdot s$; ved endelig, nedbetalt gjeld: summér skjoldet $r_G\cdot PG_t\cdot s$ neddiskontert). **APV vs. WACC-metoden:** APV forutsetter et **fast gjeldsbeløp**; WACC-metoden forutsetter **konstant gjeldsandel** ($G/E$). Derfor avviker de når gjeldsgraden ikke holdes konstant — forklar hvorfor. **Parametrisk mal (O4-variant):** gitt FCF, investering, $k_U$, $PG$, $s$ → $NPV_{EK}$ → + skjold → APV. **Regnekjede (nyskrevet, Vindheim-prosjekt):** investering 500, FCF 80/år evig, $k_U=8\,\%$ → $NPV_{EK}=-500+80/0{,}08=-500+1000=500$; evig gjeld $PG=300$, $s=0{,}22$ → skjold $=66$; **APV $=500+66=566$ mill.**
- **Oppgavesjangre:** A (O4-variant) + T. Mønstereksempel: «Et prosjekt krever 400 mill., gir 60 mill./år i det uendelige, ugiret krav 9 %. Det finansieres med 250 mill. i evig gjeld, skatt 22 %. Finn NPV med ren egenkapital, verdien av skatteskjoldet og APV. Hvorfor kan WACC-metoden gi et annet svar?»
- **Typiske feil:** Diskontere FCF med WACC i APV (skal være $k_U$); glemme skjoldet; forvente at APV = WACC-metoden alltid; feil skjold-basis ved endelig gjeld; blande fast gjeldsbeløp og konstant gjeldsandel.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Drill — verdsettelse og APV (O4)

- **id:** `bok3632-bi-3-4` · **number:** 3.4 · **estimatedMinutes:** 75 · **prerequisites:** `bok3632-bi-3-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på begge O4-undertypene: FCF → enterprise value (WACC-metode) og prosjekt-APV, som veksler fra sett til sett.
- **Eksamensbelegg:** Dekker sjanger F + A (O4, 20 %, 5/5). Begge undertyper drilles like grundig fordi de veksler. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 3.1–3.3. **Symbol- og formelliste:** hele FCF-/verdsettelse-/APV-apparatet, hver merket «(på formelarket nr. X)» eller «(må pugges)».
- **Innholdskontrakt:** **To løsningsoppskrifter (parametriske maler):** (A) **FCF → enterprise value**: bygg FCF (kap. 3.1) → $V$ med vekst (kap. 3.2) → evt. egenkapitalverdi = $V-PG$. (B) **Prosjekt-APV**: $NPV_{EK}$ med $k_U$ → + skjold → APV → sammenlign med WACC-metode. **To gjennomregnede eksamens-case** (én per undertype, sensor-margnotater). 8–12 nyskrevne oppgaver som veksler mellom undertypene med varierte tall. Alle med `solution` + `hints`; hver ender i en verdi med enhet og — der oppgaven ber om det — en kommentar om rimeligheten.
- **Oppgavesjangre:** F + A. Mønstereksempel: to fullstendige O4-oppgaver (én FCF/enterprise value, én APV) med anbefaling/kommentar.
- **Typiske feil:** Renter i totalkapital-FCF; $DES_0$ i vekstformelen; APV diskontert med WACC; enhetsrot; manglende kommentar til rimeligheten.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A FCF-oppstilling fra regnskap, F; 3.B enterprise value med vekst, F; 3.C APV + skjold + APV-vs-WACC, A; 3.D full O4-oppgave (begge undertyper) på eksamensnivå, F+A).

---

### Del 4 — Opsjoner *(prioritet: PERFEKT — 20 %, O5)*

#### Kapittel 4.1: Opsjonsutbetalinger og put–call-paritet

- **id:** `bok3632-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori
- **description:** Grunnlaget for O5: hva en kjøps- og salgsopsjon betaler ved forfall, og put–call-pariteten som binder opsjonsprisene, aksjekursen og en risikofri plassering sammen.
- **Eksamensbelegg:** Opsjonsutbetaling og put–call inngår i alle opsjonsoppgaver (5/5). Formel 17a/17b (utbetaling), 18 (put–call). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1. **Symbol- og formelliste:** $A_T$, $I$, $K_0$, $S_0$, $A_0$, $r_f$; kjøpsopsjon $K_T=\max[0,A_T-I]$, salgsopsjon $S_T=\max[0,I-A_T]$ **(formelark nr. 17a/17b)**; put–call $K_0-S_0=A_0-I/(1+r_f)$ **(nr. 18)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: utbetalingsfunksjonene ved forfall (tegn diagrammet i ord); put–call-pariteten og hvordan den brukes til å finne én opsjonspris når de tre andre størrelsene er kjent, eller til å avsløre arbitrasje. **Parametrisk mal (O5, ledd for salgsopsjon via paritet):** gitt $K_0$, $A_0$, $I$, $r_f$ → $S_0$. **Regnekjede (nyskrevet):** $A_0=100$, $I=100$, $r_f=5\,\%$, kjøpsopsjon $K_0=11{,}90$ → $S_0=K_0-A_0+I/(1+r_f)=11{,}90-100+100/1{,}05=11{,}90-100+95{,}24=7{,}14$.
- **Oppgavesjangre:** S (O5). Mønstereksempel: «Aksjen i Storhaug Industri står i 80, innløsningskurs 80, risikofri rente 4 %, kjøpsopsjonen koster 9. Finn salgsopsjonens verdi med put–call-pariteten.»
- **Typiske feil:** Bytte om kjøps- og salgsopsjonens utbetaling (17a vs. 17b); feil fortegn i pariteten $K_0-S_0=A_0-I/(1+r_f)$; glemme å neddiskontere innløsningskursen $I$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Binomisk prising og risikonøytral sannsynlighet

- **id:** `bok3632-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `bok3632-bi-4-1` · **kapitteltype:** teori
- **description:** Kjernen i O5: å prise en opsjon i en ettperiodes binomisk modell ved hjelp av den risikonøytrale (sikrings-)sannsynligheten — ikke den faktiske sannsynligheten.
- **Eksamensbelegg:** Binomisk kjøps- og salgsopsjonsverdi 5/5 (S1–S5). Risikonøytral sannsynlighet er den mest feilutsatte innsikten. Formel 20. Prioritet: **PERFEKT (kritisk)**.
- **Forkunnskaper:** Bygger på kap. 4.1. **Symbol- og formelliste:** $A_0$, $\varnothing$ (oppfaktor), $n$ (nedfaktor), $K_\varnothing$, $K_n$, $r_f$; binomisk pris $K_0=\dfrac{K_\varnothing\frac{1+r_f-n}{\varnothing-n}+K_n\frac{\varnothing-1-r_f}{\varnothing-n}}{1+r_f}$ **(formelark nr. 20)**; risikonøytral sannsynlighet $p=\frac{1+r_f-n}{\varnothing-n}$.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: sett opp opp-/nedtilstanden ($A_\varnothing=\varnothing A_0$, $A_n=nA_0$), regn utbetalingene $K_\varnothing$/$K_n$, finn **risikonøytral sannsynlighet** $p=(1+r_f-n)/(\varnothing-n)$, og pris opsjonen som neddiskontert forventet utbetaling under $p$. Poeng: den **faktiske** sannsynligheten inngår aldri. **Parametrisk mal (O5, ledd a):** gitt $A_0$, $\varnothing$, $n$, $I$, $r_f$ → $K_\varnothing$, $K_n$, $p$, $K_0$. **Regnekjede (nyskrevet):** $A_0=100$, $\varnothing=1{,}25$ ($A_\varnothing=125$), $n=0{,}85$ ($A_n=85$), $I=100$, $r_f=5\,\%$ → $K_\varnothing=\max[0,125-100]=25$, $K_n=0$; $p=(1{,}05-0{,}85)/(1{,}25-0{,}85)=0{,}20/0{,}40=0{,}5$; $K_0=(25\cdot0{,}5+0\cdot0{,}5)/1{,}05=12{,}5/1{,}05=11{,}90$. Salgsopsjon samme tre: $S_\varnothing=0$, $S_n=15$ → $S_0=(0+15\cdot0{,}5)/1{,}05=7{,}14$ (stemmer med pariteten).
- **Oppgavesjangre:** B (O5, ledd a). Mønstereksempel: «Aksjen står i 120, kan gå til 150 eller 96 om ett år, risikofri rente 6 %, innløsningskurs 120. Finn kjøps- og salgsopsjonens verdi med den binomiske modellen. Vis den risikonøytrale sannsynligheten.»
- **Typiske feil:** Bruke faktisk i stedet for **risikonøytral** sannsynlighet; glemme å neddiskontere forventet utbetaling; blande kjøps- og salgsopsjonens utbetaling; feil opp-/nedfaktor (kroner vs. faktor).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.3: Sikringsforhold, risikofri posisjon og arbitrasje

- **id:** `bok3632-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-4-2` · **kapitteltype:** teori
- **description:** Å bygge en risikofri posisjon av aksjer og opsjoner (sikringsforholdet), og å avsløre og kvantifisere arbitrasje når en opsjon er feilpriset.
- **Eksamensbelegg:** Sikringsforhold / risikofri posisjon 2/5 (S1/S3); arbitrasje ved feilpriset opsjon inngår i O5. Formel 19, 20. Prioritet: **PERFEKT/HØY**.
- **Forkunnskaper:** Bygger på kap. 4.2. **Symbol- og formelliste:** $m$ (sikringsforhold), $A_0$, $\varnothing$, $n$, $K_\varnothing$, $K_n$; sikringsforhold $m=\dfrac{A_0(\varnothing-n)}{K_\varnothing-K_n}$ **(formelark nr. 19)**; arbitrasjegevinst = |markedspris − modellpris| justert for posisjon.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: sikringsforholdet $m$ — antall opsjoner (eller aksjer) som gjør en kombinert posisjon **risikofri** (samme verdi i opp- og nedtilstand); avkastningen på den risikofrie posisjonen skal være $r_f$ (ellers arbitrasje). **Arbitrasje:** når markedsprisen avviker fra modellprisen (kap. 4.2), selg det dyre / kjøp det billige og lås inn differansen; **kvantifiser** gevinsten (mange stopper ved «ja, det finnes arbitrasje»). **Parametrisk mal (O5, ledd b–c):** gitt tre + feilpriset opsjon → $m$, arbitrasjestrategi, gevinst. **Regnekjede (nyskrevet, videreført):** $m=A_0(\varnothing-n)/(K_\varnothing-K_n)=100\cdot0{,}40/(25-0)=40/25=1{,}6$. Er kjøpsopsjonen priset i markedet til 13 mot modell 11,90, er den overpriset: selg opsjonen, kjøp sikringsandel aksjer, lås inn $13-11{,}90=1{,}10$ per opsjon (justert for $m$).
- **Oppgavesjangre:** S (O5, ledd b–c). Mønstereksempel: «Bruk treet fra forrige oppgave. Finn sikringsforholdet som gjør en aksje–opsjon-posisjon risikofri. Hvis kjøpsopsjonen selges i markedet for 14, finnes det arbitrasje? Kvantifiser gevinsten.»
- **Typiske feil:** Feil brøk i sikringsforholdet (aksjeledd/opsjonsledd byttet); identifisere arbitrasje uten å kvantifisere gevinsten; feil retning (kjøpe det dyre); glemme neddiskontering i sammenligningen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.4: Drill — opsjoner og sikringsstrategi (O5)

- **id:** `bok3632-bi-4-4` · **number:** 4.4 · **estimatedMinutes:** 70 · **prerequisites:** `bok3632-bi-4-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele O5: binomisk prising, kombinert posisjon, sikringsforhold, arbitrasje, og de kvalitative sikringsstrategiene (beskyttende salgsopsjon, short + kjøpsopsjon, collar).
- **Eksamensbelegg:** Dekker sjanger B + S + T (O5, 20 %, 5/5). Kvalitativ sikring 3/5 (S2/S4/S5). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 4.1–4.3. **Symbol- og formelliste:** hele opsjonsapparatet, hver merket «(formelark nr. X)».
- **Innholdskontrakt:** **Løsningsoppskrift (parametrisk mal for O5):** 1) sett opp treet ($A_\varnothing$, $A_n$); 2) utbetalinger $K_\varnothing$/$K_n$ (eller salg); 3) risikonøytral $p$; 4) pris $K_0$; 5) evt. sikringsforhold $m$ / arbitrasjesjekk; 6) avkastning på kombinert posisjon. **Gjennomregnet eksamens-case** (a–e, sensor-margnotater). **Modellsvar (maks 5 linjer)** på kvalitative strategier: (i) beskyttende salgsopsjon (aksje + salgsopsjon = gulv); (ii) dekket kjøpsopsjon / short + kjøpsopsjon; (iii) collar (kjøp salgsopsjon, selg kjøpsopsjon — begrenser både ned- og oppside). 10–14 nyskrevne oppgaver som roterer B/S med varierte tall + 3–4 strategidrøftinger. Alle med `solution` + `hints`.
- **Oppgavesjangre:** B + S + T. Mønstereksempel (full a–e): «(a) Pris kjøps- og salgsopsjon binomisk. (b) sikringsforhold. (c) avkastning på en aksje + to solgte kjøpsopsjoner. (d) arbitrasje hvis opsjonen selges for 14? (e, maks 5 linjer) Hvilken strategi begrenser nedsiderisikoen best?»
- **Typiske feil:** Hele §4-repertoaret: faktisk vs. risikonøytral sannsynlighet, byttet utbetaling, feil sikringsforhold, uidentifisert/ukvantifisert arbitrasje, feil strategivalg.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A opsjonsutbetaling + put–call-paritet, S; 4.B binomisk pris + risikonøytral sannsynlighet, B; 4.C sikringsforhold + arbitrasje, S; 4.D full O5-oppgave med strategidrøfting på eksamensnivå, B+S+T).

---

### Del 5 — Obligasjoner og rentestruktur *(prioritet: PERFEKT — 18 %, O2 — MÅ PUGGES)*

#### Kapittel 5.1: Obligasjonsprising — kupong, pålydende og YTM *(må pugges)*

- **id:** `bok3632-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori
- **description:** Å prise en kupongobligasjon som nåverdien av kuponger og pålydende, og å finne markedsrenten (YTM) baklengs fra en gitt pris — mekanikk som ikke står på formelarket.
- **Eksamensbelegg:** Obligasjonspris fra kupong + markedsrente 5/5 (S1–S5). **Ikke på arket — må pugges.** Prioritet: **PERFEKT (kritisk, må pugges)**.
- **Forkunnskaper:** Bygger på kap. 1.1; forutsettes fra BØK 3423. **Symbol- og formelliste:** kupong $C$, pålydende $F$, YTM $y$, løpetid $n$; pris $P=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{F}{(1+y)^n}$ — **(må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP UTENAT: obligasjonspris som nåverdi av kupongstrøm + pålydende; sammenhengen pris ↔ markedsrente (over pari når $y<$ kupongrente, under pari når $y>$); YTM baklengs (interpolasjon/prøving når $n>2$). Bruk av rentetabell for annuitetsdelen. **Parametrisk mal (O2, ledd a):** gitt $C$, $F$, $y$, $n$ → $P$ (eller gitt $P$ → $y$). **Regnekjede (nyskrevet):** pålydende 1000, kupong 5 % (50/år), 3 år, markedsrente 4 % → $P=50/1{,}04+50/1{,}04^2+1050/1{,}04^3=48{,}08+46{,}23+933{,}45=1027{,}76$ (over pari fordi kupong > markedsrente).
- **Oppgavesjangre:** O (O2, ledd a). Mønstereksempel: «En obligasjon har pålydende 1000, 6 % kupong, 4 års løpetid. Markedsrenten er 5 %. Finn prisen, og forklar hvorfor den ligger over pålydende.»
- **Typiske feil:** Glemme pålydende i siste ledd; neddiskontere med kupongrenten i stedet for markedsrenten; feil løpetid/eksponent; blande kupongbeløp og kupongrente.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Durasjon (Macaulay) og rentefølsomhet *(må pugges)*

- **id:** `bok3632-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-5-1` · **kapitteltype:** teori
- **description:** Obligasjonens tidsvektede løpetid (Macaulay-durasjon) som mål på rentefølsomhet — en av de mest testede mekanismene som ikke står på formelarket.
- **Eksamensbelegg:** Durasjon (Macaulay) 3–4/5 (S1/S4/S5 utregning; S3 kvalitativt). **Ikke på arket — må pugges.** Prioritet: **PERFEKT (kritisk, må pugges)**.
- **Forkunnskaper:** Bygger på kap. 5.1. **Symbol- og formelliste:** durasjon $D$, kontantstrøm $C_t$, YTM $y$, pris $P$; $D=\dfrac{\sum_t t\cdot C_t/(1+y)^t}{P}$ — **(må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP UTENAT: Macaulay-durasjon = tidsvektet nåverdi av kontantstrømmene delt på prisen; intuisjon — «gjennomsnittlig tid til pengene kommer», og et mål på rentefølsomhet (lengre durasjon → mer prisfall ved renteøkning). Nullkupongobligasjon: durasjon = løpetid. **Parametrisk mal (O2, ledd b):** for hvert år regn $t\cdot PV(C_t)$, summér, del på $P$. **Regnekjede (nyskrevet, videreført 5.1):** $P=1027{,}76$; $PV_1=48{,}08$, $PV_2=46{,}23$, $PV_3=933{,}45$; teller $=1\cdot48{,}08+2\cdot46{,}23+3\cdot933{,}45=48{,}08+92{,}46+2800{,}35=2940{,}89$; $D=2940{,}89/1027{,}76=2{,}86$ år.
- **Oppgavesjangre:** D (O2, ledd b). Mønstereksempel: «Finn Macaulay-durasjonen til obligasjonen fra forrige oppgave (pålydende 1000, 6 % kupong, 4 år, markedsrente 5 %). Hvilken av to obligasjoner med lik løpetid har lavest durasjon — den med høyest eller lavest kupong?»
- **Typiske feil:** Dividere på **pålydende** i stedet for pris; glemme å neddiskontere hvert ledd før vekting; glemme pålydende i siste ledds kontantstrøm; forveksle durasjon med løpetid for kupongobligasjoner.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.3: Spotrenter og terminrenter *(må pugges)*

- **id:** `bok3632-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-5-1` · **kapitteltype:** teori
- **description:** Rentestrukturen: spotrenter fra nullkupongpriser, den arbitrasjefrie terminrenten (forward), og nåverdi av en kontantstrøm gitt en hel rentekurve — mekanikk som ikke står på formelarket.
- **Eksamensbelegg:** Spotrente fra nullkupongpris 4–5/5; terminrente (arbitrasjefri forward) 4/5; NV gitt rentekurve 2/5. **Ikke på arket — må pugges.** Prioritet: **PERFEKT (kritisk, må pugges)**.
- **Forkunnskaper:** Bygger på kap. 5.1. **Symbol- og formelliste:** spotrente $r_t$, nullkupongpris $P_t$, terminrente $f$, pålydende $F$; spotrente $r_t=(F/P_t)^{1/t}-1$; arbitrasjefri termin $(1+r_2)^2=(1+r_1)(1+f)$ — **begge (må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP UTENAT: **spotrente** fra nullkupongpris $r_t=(F/P_t)^{1/t}-1$ (riktig eksponent = år $t$); **terminrente** fra den geometriske, arbitrasjefrie relasjonen $(1+r_2)^2=(1+r_1)(1+f)$ (ikke differanse i spotrenter); **nåverdi gitt rentekurven** (diskontér hvert år med sin egen spotrente). **Parametrisk mal (O2, ledd c–d):** gitt nullkupongpriser → spotrenter → terminrente. **Regnekjede (nyskrevet):** 2-års nullkupong pris 915, pålydende 1000 → $r_2=(1000/915)^{1/2}-1=(1{,}0929)^{0{,}5}-1=4{,}54\,\%$. Med $r_1=3\,\%$: termin $f=(1+r_2)^2/(1+r_1)-1=1{,}0929/1{,}03-1=6{,}11\,\%$.
- **Oppgavesjangre:** R (O2, ledd c–d). Mønstereksempel: «En 1-års nullkupong koster 970 og en 2-års koster 925 (pålydende 1000). Finn de to spotrentene og den impliserte 1-års terminrenten om ett år.»
- **Typiske feil:** Regne terminrenten som **differanse** i spotrenter i stedet for den geometriske relasjonen; feil eksponent i spotrenten ($1/t$); bruke én flat rente på hele kurven; blande nullkupong- og kupongpris.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.4: Drill — obligasjoner og rentestruktur (O2)

- **id:** `bok3632-bi-5-4` · **number:** 5.4 · **estimatedMinutes:** 70 · **prerequisites:** `bok3632-bi-5-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele O2 som ren mekanikk: pris, durasjon, spot- og terminrente, og nåverdi gitt rentekurven — alt uten formelark.
- **Eksamensbelegg:** Dekker sjanger O + D + R (O2, 18 %, 5/5). Den mest formeluavhengige oppgaven — må øves som ren mekanikk. Prioritet: **PERFEKT (må pugges)**.
- **Forkunnskaper:** Bygger på kap. 5.1–5.3. **Symbol- og formelliste:** hele obligasjons-/rentestruktur-apparatet, **alt merket (må pugges — IKKE på arket)** (viktig kontrast til de arket-støttede delene).
- **Innholdskontrakt:** **Løsningsoppskrift (parametrisk mal for O2):** 1) obligasjonspris fra kupong (eller YTM baklengs); 2) durasjon (tidsvektet PV / pris); 3) spotrenter fra nullkupongpriser; 4) terminrente arbitrasjefritt; 5) NV av en gitt strøm på kurven. **Gjennomregnet eksamens-case** (a–e, sensor-margnotater; understreker at ingen av formlene er på arket). 12–15 nyskrevne oppgaver som roterer hele O2-mekanikken med varierte tall. Alle med `solution` + `hints`.
- **Oppgavesjangre:** O + D + R. Mønstereksempel (full a–e): «(a) Pris en 3-års 5 %-obligasjon ved 4 % markedsrente. (b) durasjon. (c) spotrenter fra tre nullkupongpriser. (d) 1-års terminrente om to år. (e) nåverdi av 100/år i 3 år på rentekurven.»
- **Typiske feil:** Durasjon dividert på pålydende; terminrente som spotdifferanse; feil eksponent i spotrente; glemt pålydende i obligasjonsprisen; enhetsrot.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A obligasjonspris + YTM baklengs, O; 5.B durasjon (Macaulay), D; 5.C spot- og terminrente, R; 5.D full O2-oppgave (pris + durasjon + rentestruktur) på eksamensnivå, O+D+R).

---

### Del 6 — Utbyttepolitikk og emisjon *(prioritet: PERFEKT — 17 %, O1)*

#### Kapittel 6.1: Aksjeemisjon med tegningsretter — ex-rights

- **id:** `bok3632-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori
- **description:** Den dominerende O1-varianten: en fortrinnsrettsemisjon der man regner kursen etter emisjon (ex-rights), antall tegningsretter per ny aksje og tegningsrettens verdi.
- **Eksamensbelegg:** Ex-rights-kurs 4/5; tegningsrettens verdi + antall retter 4/5 (S1/S2/S4/S5) — emisjonsvarianten dominerer O1. Formel 6, 7. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1. **Symbol- og formelliste:** $n$ (gamle aksjer), $m$ (nye aksjer), $P_0$ (markedskurs cum), $P_e$ (emisjonskurs), $P_X$ (ex-rights-kurs), $T_n$ (tegningsrettens verdi); ex-rights $P_X=\dfrac{n\,P_0+m\,P_e}{n+m}$ **(formelark nr. 6)**; tegningsrett $T_n$ (to former) **(nr. 7)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: ex-rights-kursen som vektet snitt av gammel markedskurs og emisjonskurs; **antall tegningsretter per ny aksje** = $n/m$ (gamle/nye); **tegningsrettens verdi** = $P_0-P_X$ per gammel aksje, eller $(P_X-P_e)/(n/m)$. **Parametrisk mal (O1, ledd a–c):** gitt $n$, $P_0$, $m$, $P_e$ → $P_X$, retter per ny aksje, $T_n$. **Regnekjede (nyskrevet, Myrland Eiendom):** $n=1\,000\,000$ aksjer à $P_0=80$; emisjon $m=250\,000$ nye à $P_e=60$ → $P_X=(1\,000\,000\cdot80+250\,000\cdot60)/1\,250\,000=(80+15)\text{ mill.}/1{,}25\text{ mill.}=76$. Retter per ny aksje $=n/m=4$. Tegningsrettens verdi per gammel aksje $=P_0-P_X=80-76=4$.
- **Oppgavesjangre:** E (O1, ledd a–c). Mønstereksempel: «Storhaug Industri har 2 mill. aksjer à 50 kr og gjennomfører en emisjon av 500 000 nye aksjer til 40 kr. Finn ex-rights-kursen, antall tegningsretter per ny aksje og tegningsrettens verdi.»
- **Typiske feil:** Bruke markedskurs $P_0$ der emisjonskurs $P_e$ skal inn (eller omvendt) i formel 6; feil telling av retter per ny aksje ($n/m$ vs. $m/n$); regne tegningsrett fra feil kursdifferanse.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Eierandel og innskudd ved emisjon

- **id:** `bok3632-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `bok3632-bi-6-1` · **kapitteltype:** teori
- **description:** Emisjonens virkning på en aksjonær: hva man må skyte inn for å beholde eierandelen, og hvordan andelen utvannes hvis man ikke deltar — og hvorfor tegningsretten kompenserer for tapet.
- **Eksamensbelegg:** Eierandel/innskudd ved emisjon 4/5 (S1/S2/S4/S5); emisjonseffekt på kurs og eierstruktur er også et kvalitativt drøftetema (S5). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 6.1. **Symbol- og formelliste:** eierandel, antall retter, innskudd; ingen ny arkformel — bygger på $P_X$, $P_e$, $T_n$ fra kap. 6.1. Kan trenge simultanligning (se [Likningssett](/bi-okonomi/bi-okonomi-2-3)).
- **Innholdskontrakt:** MÅ KUNNE BRUKES: for å **beholde** eierandelen må aksjonæren tegne sin forholdsmessige andel av de nye aksjene (innskudd = antall nye aksjer $\times P_e$); **deltar man ikke**, utvannes andelen, men salget av tegningsrettene kompenserer for kurstapet i et perfekt marked (netto formue uendret). **Parametrisk mal (O1, ledd d):** gitt eierandel, $m$, $P_e$, $n/m$ → nødvendig innskudd / utvanning / kompensasjon. **Regnekjede (nyskrevet, videreført Myrland):** en aksjonær eier 40 000 aksjer (4 %). For å beholde 4 % må hun tegne $4\,\% \cdot 250\,000=10\,000$ nye aksjer → innskudd $=10\,000\cdot60=600\,000$ kr. Deltar hun ikke, faller kursen fra 80 til 76 (tap $4\cdot40\,000=160\,000$), men 40 000 tegningsretter à 4 kr = 160 000 kr dekker tapet.
- **Oppgavesjangre:** E (O1, ledd d) + T. Mønstereksempel: «En aksjonær eier 5 % av Storhaug Industri før emisjonen i forrige oppgave. Hvor mye må hun skyte inn for å beholde eierandelen? Hva skjer med formuen hennes hvis hun i stedet selger tegningsrettene?»
- **Typiske feil:** Forveksle «beholde andel» (må investere) med «ikke delta» (utvannes); glemme at tegningsretten kompenserer i perfekt marked; feil forholdsmessig andel; bruke $P_X$ i stedet for $P_e$ i innskuddet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.3: Utbytteteori — Lintner, Gordon 2-fase og avkastning etter skatt

- **id:** `bok3632-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `bok3632-bi-1-1` · **kapitteltype:** teori
- **description:** Den alternative O1-varianten: utbytteteori — Lintners utbyttejustering, aksjeverdsettelse med Gordon i to vekstfaser, og avkastning etter skatt på kursgevinst kontra dividende.
- **Eksamensbelegg:** Ren utbytteteori var O1 i Høst 2024 (1/5, kan erstatte emisjonsvarianten): Lintner 1/5, Gordon 2-fase 1/5, avkastning etter skatt 1/5. Formel 15, 16. Prioritet: **KUNNE (kan komme i stedet for emisjon)**.
- **Forkunnskaper:** Bygger på kap. 1.1. **Symbol- og formelliste:** DPA, OPA, justeringsfart $a$, målutdelingsgrad $b$, vekst $v$, avkastningskrav $r$; Lintner $DPA_t=DPA_{t-1}+a\,(b\cdot OPA_t-DPA_{t-1})$ **(formelark nr. 15)**; Gordon $P_0=D_1/(r-v)$ **(nr. 16)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **Lintner-modellen** — utbyttet justeres delvis mot et mål ($b\cdot OPA$) med fart $a$; regn neste års DPA. **Gordon i to vekstfaser** — høy vekst i noen år, deretter konstant vekst (terminalverdi $P_T=D_{T+1}/(r-v)$ neddiskontert). **Avkastning etter skatt** — sammenlign netto avkastning på kursgevinst mot dividende gitt ulike skattesatser. **Parametrisk mal (O1-variant):** gitt $DPA_{t-1}$, $a$, $b$, $OPA_t$ → $DPA_t$; gitt to-fasers vekst → $P_0$. **Regnekjede (nyskrevet):** $DPA_{t-1}=4$, $a=0{,}5$, $b=0{,}6$, $OPA_t=10$ → $DPA_t=4+0{,}5\,(0{,}6\cdot10-4)=4+0{,}5\cdot2=5$. Gordon: $D_1=5$, høy vekst 8 % i 2 år så 3 %, $r=10\,\%$.
- **Oppgavesjangre:** U (O1-variant). Mønstereksempel: «Et selskap betalte 3 kr i utbytte i fjor, har et resultat per aksje på 8 kr, målutdelingsgrad 50 % og justeringsfart 0,4. Finn årets utbytte med Lintner-modellen. Verdsett deretter aksjen med Gordon hvis utbyttet vokser 3 % evig og kravet er 9 %.»
- **Typiske feil:** Bruke $DPA_0$ i Gordon-telleren i stedet for $D_1$; sette opp Lintner-justeringen feil (fortegn/rekkefølge); glemme terminalverdien i to-fase-Gordon; blande skatt på gevinst og dividende.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.4: Drill — emisjon og utbytte (O1)

- **id:** `bok3632-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 65 · **prerequisites:** `bok3632-bi-6-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på begge O1-variantene: fortrinnsrettsemisjon (ex-rights, tegningsrett, eierandel) og utbytteteori (Lintner, Gordon 2-fase).
- **Eksamensbelegg:** Dekker sjanger E + U (O1, 17 %, 5/5). Emisjon dominerer (4/5), utbytteteori kan erstatte den (1/5) — begge drilles. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 6.1–6.3. **Symbol- og formelliste:** hele emisjons-/utbytteapparatet, hver merket «(formelark nr. X)».
- **Innholdskontrakt:** **To løsningsoppskrifter (parametriske maler):** (A) **emisjon**: $P_X$ → retter per ny aksje → $T_n$ → innskudd/eierandel; (B) **utbytte**: Lintner-DPA → Gordon (evt. to-fase). **To gjennomregnede eksamens-case** (én emisjon, én utbytte, sensor-margnotater). 10–14 nyskrevne oppgaver som veksler mellom variantene med varierte tall. Alle med `solution` + `hints`.
- **Oppgavesjangre:** E + U. Mønstereksempel: to fullstendige O1-oppgaver (én emisjon a–d, én utbytte).
- **Typiske feil:** $P_0$/$P_e$-forveksling i ex-rights; feil retter per ny aksje; «beholde vs. ikke delta»-forveksling; $DPA_0$ i Gordon; glemt terminalverdi.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A ex-rights + tegningsrett, E; 6.B eierandel/innskudd ved emisjon, E; 6.C Lintner + Gordon 2-fase, U; 6.D full O1-oppgave (emisjon eller utbytte) på eksamensnivå, E+U).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Strategi, formelark-oversikt og sjangerguide

- **id:** `bok3632-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `bok3632-bi-0-1` · **kapitteltype:** eksamensstrategi
- **description:** Sluttoppsummering: tidsbudsjett for 5-blokks-eksamenen, en samlet formeloversikt (arket vs. pugg), sjangerguidens parametriske maler i kortform, og de fem faste oppgaveposisjonene.
- **Eksamensbelegg:** Metakapittel — bygger på hele boka. Prioritet: — (studieguidekjerne).
- **Forkunnskaper:** Bygger på alle deler. **Symbol- og formelliste:** samlet formeloversikt for hele faget, hver merket **(på formelarket nr. X)** / **(må pugges)**.
- **Innholdskontrakt:** **(A) Formelark-oversikten** — alle 20 arkformlene på én tabell koblet til oppgaveposisjon, tydelig skilt fra de fem **må-pugges**-mekanismene (durasjon, spotrente, terminrente, obligasjonspris, FCF-oppstilling). **(B) Sjangerguiden** — de parametriske malene fra drillkapitlene (2.5, 3.4, 4.4, 5.4, 6.4) i kortform, sjanger E/U/O/D/R/K/F/A/B/S/T. **(C) Tidsbudsjett** — 5 oppgaver à ~20 % på 180 minutter, med råd om å ta de sikre blokkene (emisjon, obligasjonspris) først og legge tid i O3/O4-kjedene. **(D) Sensorreglene** + karakterskillene samlet (merk `(verifiser)`). **(E) Regnekjede-disiplinen** — bær tall videre, merk inndata, følgefeil straffes ikke to ganger. **(F) Feilkatalogen** — de elleve typiske feilene med henvisning til forebyggende kapittel. **(G) Arbeidsdelingen mot FIN 3521** — én setning om at M&A og Miller-personskatt hører til FIN 3521, ikke hit.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Sett opp et tidsbudsjett for en 5-blokks-eksamen der O3 (kapitalstruktur) og O4 (APV) er de tyngste, og O1 (emisjon) den sikreste.»
- **Typiske feil:** Feil tidsprioritering; pugge feil (tro at durasjon/FCF står på arket); la en tidlig regnefeil velte hele kjeden; bruke tid på flervalgsstrategi som knapt testes.
- **Quiz: 16 · Flashcards: 26**

#### Kapittel 7.2: Øvingseksamen 1 — emisjonsvariant (5 oppgaver)

- **id:** `bok3632-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 120 · **prerequisites:** `bok3632-bi-7-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen i fast 5-blokks-format med emisjonsvarianten i O1: O1 emisjon/tegningsrett, O2 obligasjoner/rentestruktur, O3 kapitalstruktur/MM, O4 FCF/enterprise value, O5 opsjoner — 3 timer, formelark + rentetabeller + kalkulator.
- **Eksamensbelegg:** Speiler et typisk ordinært sett (S1/S2/S4/S5-profilen). Miks: O1 emisjon (~17 %) + O2 obligasjonspris/durasjon/spotrente (~18 %) + O3 full kapitalstruktur-kjede (~25 %) + O4 FCF → enterprise value (~20 %) + O5 binomisk + sikring (~20 %). Prioritet: — (sluttrening).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet (arket + må-pugges).
- **Innholdskontrakt:** Komplett sett med nyskrevne oppgaver som speiler 5-blokks-strukturen, oppgitt prosentvekt per oppgave, `collapsible`-løsningsforslag per oppgave skrevet som A-besvarelse med `tip`-notat om delpoeng/vekting. Kjedede delspørsmål med mellomsteg vist eksplisitt; hvert numerisk svar med enhet. Minst ett kort drøftespørsmål (maks 5 linjer). Formelvalg/arknummer oppgitt overalt.
- **Oppgavesjangre:** E, O/D/R, K, F, B/S, T. Mønstereksempel: hele settet.
- **Typiske feil:** Tidssprekk på O3/O4; kalkulatorsvar uten mellomregning; durasjon dividert på pålydende; faktisk vs. risikonøytral sannsynlighet i O5; enhetsrot.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2 — utbytte- og APV-variant (5 oppgaver)

- **id:** `bok3632-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 120 · **prerequisites:** `bok3632-bi-7-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen der O1 er utbytteteori (Lintner + Gordon 2-fase) og O4 er prosjekt-APV — trener de mindre hyppige, men tunge variantene, med toledd-skatt i O3.
- **Eksamensbelegg:** Speiler H2024-profilen (utbyttevariant) + APV-tunge sett (S2/S5). Miks: O1 utbytteteori (~17 %) + O2 spot-/terminrente + durasjon (~18 %) + O3 kapitalstruktur med toledd-skatt-drøfting (~25 %) + O4 prosjekt-APV + APV-vs-WACC (~20 %) + O5 binomisk + arbitrasje (~20 %). Prioritet: — (sluttrening; dekker de sjeldnere variantene).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett nyskrevet sett som dekker utbytte- og APV-variantene, oppgitt vekt, `collapsible`-løsningsforslag som A-besvarelse med `tip`-delpoengnotat. Toledd-skatt-drøftingen i O3 og APV-vs-WACC-forklaringen i O4 vist eksplisitt. Kjedede mellomsteg overalt.
- **Oppgavesjangre:** U, R/D, K+T, A+T, B/S. Mønstereksempel: hele settet.
- **Typiske feil:** $DPA_0$ i Gordon; terminrente som spotdifferanse; APV diskontert med WACC; feil toledd-skatt-klamme; ukvantifisert arbitrasje.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3 — verdsettelsestung variant (5 oppgaver)

- **id:** `bok3632-bi-7-4` · **number:** 7.4 · **estimatedMinutes:** 120 · **prerequisites:** `bok3632-bi-7-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen med tyngde på FCF-bygging fra regnskap og enterprise value, kombinert med hele obligasjonsmekanikken og en opsjonsstrategi-drøfting — den bredeste sluttprøven.
- **Eksamensbelegg:** Speiler S1/S3-profilen (FCF fra regnskap → enterprise value). Miks: O1 emisjon eller utbytte (~17 %) + O2 full obligasjonsmekanikk (pris + durasjon + terminrente, ~18 %) + O3 kapitalstruktur-kjede med gjeldsbeta-drøfting (~25 %) + O4 FCF fra regnskap → enterprise value med vekst (~20 %) + O5 binomisk + collar/beskyttende salgsopsjon-strategi (~20 %). Prioritet: — (sluttrening; bredest dekning).
- **Forkunnskaper:** Bygger på Del 1–6. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett nyskrevet sett med FCF bygget fra en oppgitt regnskapsoppstilling (BØK 3532-input), full obligasjonsmekanikk og en kvalitativ opsjonsstrategi-drøfting. Oppgitt vekt, `collapsible`-løsningsforslag som A-besvarelse med delpoengnotat. Kjedede mellomsteg og enheter overalt.
- **Oppgavesjangre:** E/U, O+D+R, K+T, F, B+S+T. Mønstereksempel: hele settet.
- **Typiske feil:** Renter i totalkapital-FCF; DES-forveksling; durasjon på pålydende; enhetsrot mellom tusen/mill.; feil strategivalg i O5.
- **Quiz: 8 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen (eksamenstreningsdel — inneholder selv de tre komplette settene).

---

## 4. Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 16+16+12 = **44** | 16+32+16 = **64** |
| 1 | 1.1–1.2 | 16+18 = **34** | 18+20 = **38** |
| 2 | 2.1–2.5 | 22+24+24+22+18 = **110** | 22+24+24+22+12 = **104** |
| 3 | 3.1–3.4 | 22+18+22+16 = **78** | 24+18+22+10 = **74** |
| 4 | 4.1–4.4 | 20+22+18+16 = **76** | 20+22+18+10 = **70** |
| 5 | 5.1–5.4 | 20+20+20+16 = **76** | 22+24+24+10 = **80** |
| 6 | 6.1–6.4 | 20+18+18+16 = **72** | 20+18+18+10 = **66** |
| 7 | 7.1–7.4 | 16+8+8+8 = **40** | 26+0+0+0 = **26** |
| **Sum** | **30 kap.** | **530 ≥ 500 ✓** | **522 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tettheten er skalert til fagets omfang og natur (jf. PRODUKSJONSLOYPE «≥500 er
et gulv»):** boka er et **rent regnefag med relativt få begreper**, så
quiz-summen ligger nær gulvet (530). **Flashcards er likevel løftet til 522**
fordi faget har en uvanlig sterk **formel↔bruk-side**: det utdelte formelarket
har 20 formler som hver kobles til en bestemt oppgaveposisjon (flashcard-gull:
«hvilken formel til hvilken situasjon»), OG fem **må-pugges**-mekanismer
(durasjon, spotrente, terminrente, obligasjonspris, FCF-oppstilling) som per
definisjon skal sitte utenat — nettopp det flashcards er til for. Derfor har
kap. 0.2 (formelark vs. pugg) hele 32 flashcards, og Del 5 (må-pugges-delen) har
høyest flashcard-tetthet (80). Fordelingen speiler vekt: de fem perfekt-delene
(2–6) bærer 412 av 530 quiz, med **Del 2 (kapitalstruktur/MM) som den tyngste
enkeltdelen (110 quiz)** fordi den er fagets største og hyppigste tema (25 %,
O3). Regnetunge drillkapitler har lav flashcard-kvote (10) siden ferdigheten
sitter i oppgaver, ikke i kort; øvingseksamenene (7.2–7.4) har kun quiz.

---

## 5. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag,
formelvalg (arknummer eller «pugges») og mellomsteg vist eksplisitt, enhet i
svaret og — der relevant — konklusjon/tolkning. Bygges som
`bok3632-bi-<del>-prove` (chapterNumber `<del>.P`). De fire prøvene per del er
spesifisert i «**Prøve-kvote Del N**»-linjene under hver del i §3 (sjangre og
innhold angitt der). Del 0 og Del 7 har ingen prøver (metadel / eksamenstreningsdel
som selv rommer de tre komplette settene).

### Øvingseksamener (3 komplette skoleeksamener — kap. 7.2–7.4)

| Sett | Variant den speiler | Miks (fast 5-blokk) |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | Emisjonsvariant (S1/S2/S4/S5) | O1 emisjon 17 % + O2 obl./durasjon/spotrente 18 % + O3 kapitalstruktur 25 % + O4 FCF→enterprise value 20 % + O5 binomisk+sikring 20 % |
| Øvingseksamen 2 (kap. 7.3) | Utbytte- og APV-variant (H2024/S2/S5) | O1 utbytteteori 17 % + O2 spot-/terminrente+durasjon 18 % + O3 kapitalstruktur m/toledd-skatt 25 % + O4 prosjekt-APV+APV-vs-WACC 20 % + O5 binomisk+arbitrasje 20 % |
| Øvingseksamen 3 (kap. 7.4) | Verdsettelsestung (S1/S3) | O1 emisjon/utbytte 17 % + O2 full obl.mekanikk 18 % + O3 kapitalstruktur+gjeldsbeta-drøfting 25 % + O4 FCF fra regnskap→enterprise value 20 % + O5 binomisk+collar 20 % |

Til sammen dekker de tre øvingseksamenene samtlige sjangre E/U/O/D/R/K/F/A/B/S/T
minst én gang, og begge O1-variantene (emisjon og utbytte) og begge O4-variantene
(FCF/enterprise value og APV) trenes eksplisitt.

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kap. 7.1 + kapitlenes
Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 100 % individuell skoleeksamen (3 t, formelark +
   rentetabeller + kalkulator), den faste 5-blokks-arkitekturen (O1–O5 à ~20 %)
   og prognosen (alle fem hovedtemaene 5/5) — fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvensen som lesenivåer: **perfekt** (Del 2
   kapitalstruktur/MM, Del 3 FCF/APV, Del 4 opsjoner, Del 5 obligasjoner, Del 6
   emisjon/utbytte), **fundament** (Del 1 tidsverdi/CAPM-repetisjon), **kjenne**
   (toledd-skatt, multippel-verdsettelse, porteføljebeta = kort/utelatt).
3. **Sjangerguiden** — de elleve oppgavetypene E/U/O/D/R/K/F/A/B/S/T med de
   parametriske malene fra drillkapitlene (2.5, 3.4, 4.4, 5.4, 6.4) i kortform
   (fra kap. 7.1).
4. **Formelark-oversikten** — alle formlene på én oversikt, tydelig delt i
   **«står på arket» (20 formler, nummerert)** og **«må pugges»** (durasjon,
   spotrente, terminrente, obligasjonspris, FCF-oppstillingen) — fra kap. 0.2 og
   7.1. Bokas viktigste strukturinnsikt.
5. **Sensorreglene** — «vis beregning» (kun fasittall ≠ full uttelling),
   metode/følgefeil straffes ikke to ganger, enhet + konklusjon kreves,
   stram ordgrense på drøfting (maks 5 linjer) — pluss karakterskillene
   (E/C-D/A-B), alt merket `(verifiser)`.
6. **Feilkatalogen** — de elleve typiske feilene (fra analysen §5), hver med
   henvisning til forebyggende kapittel: (1) beta-omregning uten (1−s) (2.2),
   (2) feil skjold-basis PG·s (2.3), (3) Vu/VM-forveksling (2.3), (4) durasjon
   på pålydende (5.2), (5) terminrente som spotdifferanse (5.3), (6) ex-rights
   $P_0$/$P_e$-forveksling (6.1), (7) renter i totalkapital-FCF (3.1),
   (8) APV = WACC-metode antatt (3.3), (9) faktisk vs. risikonøytral
   sannsynlighet (4.2), (10) put–call-fortegn / ukvantifisert arbitrasje (4.1/4.3),
   (11) enhetsrot kr/tusen/mill. (0.2).
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → Del 1 (repetisjon) → Del 2 (STØRST) → Del 3 → Del 5 (må pugges — tidlig
   nok til å modne) → Del 4 → Del 6 → prøvene underveis → de tre øvingseksamenene
   de siste ukene under tidspress (5-blokks-tidsbudsjett).

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `bok3632-bi` med alle 30
   kapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`. `sectionNames`
   = del-nummer → seksjonstitlene i §2-tabellen.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene E/U/O/D/R/K/F/A/B/S/T,
   formelark-vs-pugg-skillet og regnekjede-/parametrisk-mal-håndverket som resten
   refererer til.
3. **Del 1** (repetisjon: tidsverdi + CAPM) — fundament for alle temadeler.
4. **Perfekt-delene i avhengighetsrekkefølge**: Del 2 (kapitalstruktur/MM —
   **bokas største del, én agent for hele delen**) → Del 3 (FCF/verdsettelse/APV)
   → Del 4 (opsjoner) → Del 5 (obligasjoner/rentestruktur) → Del 6 (emisjon/utbytte).
5. **Del 7** (strategi + de tre øvingseksamenene til slutt — de gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§5) bygges som `bok3632-bi-<del>-prove`-
   kapitler etter hver temadel 1–6.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
  konsistente subskript ($k_E$, $k_U$, $\beta_E$, $\beta_I$, $\beta_G$, $V_U$,
  $V_M$, $P_X$, $T_n$, $A_0$, $K_0$, $S_0$).
- [ ] **Formelark-vs-pugg konsekvent**: hver Symbol- og formelliste merker hver
  formel **(på formelarket nr. X)** eller **(må pugges)**; de fem må-pugges-
  mekanismene (durasjon, spotrente, terminrente, obligasjonspris, FCF-oppstilling)
  er merket «må pugges» overalt de forekommer, med eksplisitt kontrast til
  arkformlene.
- [ ] **Regnekjeder overalt**: hver kjedet oppgave viser formelvalg → innsatte
  tall → mellomsvar med enhet (merket som inndata til neste ledd) → sluttsvar med
  enhet → evt. konklusjon. Løsningsforslag demonstrerer at metode belønnes og at
  følgefeil ikke straffes to ganger.
- [ ] **Parametriske maler**: hver temadel (2–6) har en eksplisitt parametrisk mal
  (symboler før tall) i drillkapitlet, instansiert med minst to ulike tallsett.
- [ ] **Notasjonskonsistens**: tekstsøk over alle bok3632-bi-filer — bruk
  BI-notasjonen ($k_E/k_G/k_T/k_U$, OER/OFR/OFRS, DES/DFRSI, APIK, DPA, PG);
  **forbudte termer**: «bidragskalkyle», «selvkost», «dekningspunkt», «CVP», «ABC»,
  «avviksanalyse», «standardkost», «M&A», «fusjon», «bytteforhold» (M&A hører til
  FIN 3521, ikke hit).
- [ ] **Arbeidsdeling mot FIN 3521**: M&A og Miller-personskatt nedtonet
  (toledd-skatt kun kort i kap. 2.4); kryssbok-referanse til FIN 3521 med navn
  (live lenke kun hvis `fin3521-bi` er bygget). APV og obligasjoner/durasjon er
  BØK 3632s særpreg — dekket tungt.
- [ ] **Fellene drillet**: beta uten (1−s), skjold-basis, Vu/VM, durasjon på
  pålydende, terminrente som spotdifferanse, ex-rights-forveksling, renter i
  totalkapital-FCF, APV=WACC, faktisk vs. risikonøytral sannsynlighet, put–call-
  fortegn/ukvantifisert arbitrasje har hver minst én advarsel + én eksamensklone.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  herfra), Typiske feil-`warning`, Forkunnskaper-`text` + Symbol- og formelliste-
  `collapsible`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har parametrisk
  mal + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 530 og flashcard-sum ≥ 522** per kvotetabellen (§4).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener (fast 5-blokk,
  3 t, formelark + rentetabeller) som sammen dekker sjangrene E–T og begge
  O1-/O4-variantene.
- [ ] **Kryssbok-lenker**: alle `/bi-okonomi/...`-lenker peker på eksisterende
  kapitler (`bi-okonomi-4-1`, `-4-2`, `-4-3`, `-4-5`, `-2-2`, `-2-3` er verifisert).
  BØK 3423/BØK 3532/FIN 3521 refereres med navn; live lenker dit kun hvis bygget.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne selskapsnavn (Bjørkli Kraft
  AS, Saltström Marin AS, Granli Teknologi AS, Vindheim Fornybar AS, Myrland
  Eiendom AS, Storhaug Industri AS m.fl.), egne tall, egne scenarioer; **ikke**
  FjellFinans, Oslo Solenergi, Fjordtek, Nordic Solutions, Arctic Renewables m.fl.;
  ingen formuleringer fra reelle sett; pensumlitteratur (Bøhren & Michalsen)
  refereres, aldri siteres i lengde. Sensorkrav uten fasitbelegg merkes
  `(verifiser)`.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

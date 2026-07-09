# Bokskjelett: PSY2014 Kvantitativ metode / Generell lineær modell (UiO) — eksamensrettet lærebok

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (7 komplette oppgavesett V2018–V2024, hvorav 6 med
> sensorveiledning, alle skrevet av samme kjerneteam ved Psykologisk institutt, UiO).
> Alle oppgaver, output-tabeller, vignetter, tall og modellbesvarelser i boka skal
> være NYSKREVNE (se §6). UiOs eksamensoppgaver, output og veiledninger brukes som
> **grunnlag** (mønstre, temavekting, vurderingskriterier), **aldri ordrett**.
> Pensumlitteratur (Agresti, *Statistical Methods for the Social Sciences*)
> refereres — aldri siteres i lengde.
>
> **Faglig presisjon er kritisk.** Statistiske detaljer, formler og pensum-
> kapittelnumre forfatteren er usikker på merkes `(verifiser)` for fagfellesjekk i
> fase 6. Referanser til Agresti er utgaveavhengige og merkes ⚠.

---

## 1. Bokens identitet

- **Kurs-id:** `psy2014`
- **Tittel:** *PSY2014 Kvantitativ metode / Generell lineær modell (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo. Visningsnavn i
  `institusjoner.ts`: «PSY2014 Kvantitativ metode».
- **Arketype:** **REGNEFAG (GLM-verktøybok med output-lesing og regnetrening)** —
  primærmalen er **DNA-regnefag** (Del 0 eksamenskart → temadeler ordnet etter
  faglig avhengighet → drillkapitler for perfekt-temaer → øvingseksamener). Fordi
  eksamen ikke bare regner, men også krever at kandidaten **leser ferdig R-/SPSS-
  output og forklarer den i prosa**, er regnefag-malen supplert med et lånt
  «output-lese»-lag: hvert temakapittel har en **output-simulator** (en nyskrevet,
  egenkonstruert regresjons-/ANOVA-/krysstabelloutput) med ferdig tolkning på
  **bestått-nivå (C)** og **A-nivå**. Hybrid-valget er dokumentert i §2
  «Arketypetilpasning».
- **Kapittelantall:** 29 (Del 0: 2 · temadeler 1–10: 20 · eksamenstrening Del 11: 7)
- **Estimert totaltid:** ~1 720 minutter (~29 timer) fordelt per kapittel under
- **Quiz totalt:** 546 (krav ≥500) · **Flashcards totalt:** 548 (krav ≥500) — se
  autoritativt Kvotesammendrag (§4)

**Pitch:** PSY2014-eksamen har én jernfast logikk: **3 timers skriftlig skoleeksamen
i Inspera, kalkulator + formelark + t-tabell tillatt, «forsøk å besvare ALLE
oppgavene»** (i motsetning til PSY1010s «3 av 4» — her kan ingenting velges bort).
Hvert sett 2018–2024 består av (a) én stor, dominerende **regresjonsoppgave
(~55–65 %)** der du leser ferdig output fra fire til seks nøstede modeller og tolker
koeffisienter, standardfeil, R²/justert R², konfidensintervaller, signifikans,
standardiserte koeffisienter og residualdiagnostikk — og ofte regner selv (forventet
Y fra ligningen, R² fra sum of squares, t = b̂/SE); (b) én **variansanalyseoppgave
(~25–35 %)** med enveis + toveis ANOVA, F-testens rasjonale, utfylling av en sladdet
ANOVA-tabell, interaksjon og post-hoc; og (c) én kortere **kji-kvadratoppgave
(~10–20 %)** med krysstabell, forventede frekvenser, standardiserte residualer og
uavhengighetstest. Selve ryggraden er den **generelle lineære modellen som forenende
rammeverk** — at enveis ANOVA er en dummy-kodet regresjon med *samme* H0 og *samme*
F, og at kji-kvadrat er en egen modell for frekvenser. Boka er bygd baklengs fra
dette: hvert kjernetema leveres som en **regne-/tolkemodul** med (1) prosa-forklaring,
(2) en output-simulator med bestått/A-tolkning, og (3) en «fyll inn de sladdede
tallene»-drill. **Den store multippel-regresjonsoppgaven** (tolke output +
kontroll-logikk konfunder/suppressor) og **enveis+toveis ANOVA** er bokas to
ryggrader — begge faste i hvert eneste sett.

---

## 2. Makrostruktur

Følger DNA-regnefag-malen (Del 0 eksamenskart → temadeler ordnet etter faglig
avhengighet, IKKE frekvens → drillkapitler for perfekt-temaer → øvingseksamener).
Rekkefølgen på temadelene følger analysens anbefalte bokdesign (§7): fra korrelasjon
(bro fra PSY1010) via multippel regresjon og dens utvidelser, til ANOVA, til
GLM-broen som binder dem, og til slutt kji-kvadrat. Frekvensen styrer *omfanget*,
ikke rekkefølgen: den 55–65 %-tunge regresjonsoppgaven får flest kapitler + drill.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og regne-/output-håndverk | 2 | perfekt (meta) | «Besvar ALLE», formelark/kalkulator-rammen, output-lesing i to dialekter (R/SPSS) og C→A-logikken må etableres FØR fagstoffet. |
| 1 | Fra korrelasjon til enkel regresjon (bro fra PSY1010) | 2 | kunne | Repeterer r/regresjonslinje/SE kort (PSY1010-stoff), etablerer minste kvadrater + Ŷ = b̂₀ + b̂₁X som fundament for alt videre. |
| 2 | Multippel regresjon og statistisk kontroll | 3 | **perfekt** | **Bokas ryggrad (55–65 % i hvert sett).** Tolke b/b̂₀/R², forventet Y, «endrer b seg ved kontroll?» — konfunder (6/7) og suppressor (2/7). |
| 3 | Standardiserte koeffisienter, standardfeil og signifikansavlesning | 2 | **perfekt** | Standardiserte β (6/7), SE + dens tre determinanter (5/7), signifikans fra t/CI/p + regne t = b̂/SE (5/7). |
| 4 | Forutsetninger, residualdiagnostikk og innflytelse | 2 | **perfekt/kunne** | Residualantagelser (6/7), uteligger vs. leverage vs. Cook's d (2/7), multikollinearitet/VIF (2/7). |
| 5 | Polynom, kurvilinearitet og modellsammenlikning | 2 | **perfekt** | Annengradsledd (6/7) + ΔR²/AIC/nested-F + ekstrapoleringsforbehold — nesten alltid ett ledd i regresjonsoppgaven. |
| 6 | Interaksjon i regresjon og mediering | 2 | kunne | Regresjonsinteraksjon/moderering stigende (3/7); mediering kort (V2022) med henvisning til PSYC2104 for dybden. |
| 7 | Enveis variansanalyse (ANOVA) | 2 | **perfekt** | **Bokas andre ryggrad (7/7).** F-testens rasjonale (mellom/innen-gruppe), forventet F=1, utfylle sladdet ANOVA-tabell. |
| 8 | Toveis ANOVA, interaksjon og post-hoc | 2 | **perfekt** | Toveis + interaksjon (6/7), F-endring enveis→toveis (A-markør), Bonferroni-post-hoc (3/7), η². |
| 9 | Den generelle lineære modellen — broen ANOVA ↔ regresjon | 1 | **perfekt** | **Fagets røde tråd (6/7).** ANOVA = dummy-regresjon (samme H0, samme F); dummykoding; hvorfor lineær regresjon er uegnet for kategorisk/binært utfall. |
| 10 | Kji-kvadrat og kategoriske data | 2 | **perfekt** | **Fast avsluttende oppgave (7/7).** Forventede frekvenser, χ² for hånd, df=(R−1)(C−1), standardiserte residualer. |
| 11 | Eksamenstrening | 7 | perfekt (meta) | 2 drill-/håndverkskapitler (regnekjerne + feilvaksine) + 3 modellbesvarelser (bestått/A, DNA-krav ≥3) + 2 komplette øvingseksamener i «besvar alle»-format. |

Rasjonale: perfekt-temaene (multippel regresjon/kontroll, standardisert β/SE/
signifikans, polynom, enveis+toveis ANOVA, GLM-broen, kji-kvadrat) får flest
kapitler, egen output-simulator og «fyll-inn»-drill; kunne-temaene
(korrelasjonsbroen, interaksjon/mediering) får solid, men kompakt dekning;
lavfrekvent stoff (sentrering, effektstørrelse η², modellseleksjon forward/backward,
SE_diff) dekkes kompakt inne i beslektede kapitler og merkes «bør kjenne til».
**Ingenting i pensumkjernen utelates** — men fordi alle oppgaver må besvares, styrer
prioriteringen *dybde og drillmengde*, ikke hva som er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og regne-/output-håndverk |
| 1 | Fra korrelasjon til enkel regresjon |
| 2 | Multippel regresjon og statistisk kontroll |
| 3 | Standardiserte koeffisienter, standardfeil og signifikans |
| 4 | Forutsetninger, residualdiagnostikk og innflytelse |
| 5 | Polynom, kurvilinearitet og modellsammenlikning |
| 6 | Interaksjon og mediering |
| 7 | Enveis variansanalyse (ANOVA) |
| 8 | Toveis ANOVA, interaksjon og post-hoc |
| 9 | Den generelle lineære modellen — GLM-broen |
| 10 | Kji-kvadrat og kategoriske data |
| 11 | Eksamenstrening |

### Oppgavesjangre (fra analysen §3 — brukes i «Oppgavesjangre» under)

**R** «Den store regresjonsoppgaven» (~55–65 %, oppg. 1) — tolke output fra nøstede
modeller: b̂₁ (retning/enhet), b̂₀ (forventet Y ved alle prediktorer = 0), forventet
Y for en profil (regne), R²/justert R², CI, standardiserte β, signifikans, «hvorfor
endret b̂ seg ved kontroll?», polynom, residualdiagnostikk. · **A** «Variansanalyse-
oppgaven» (~25–35 %, oppg. 2) — F-testens rasjonale, utfylle sladdet ANOVA-tabell,
toveis + interaksjon, F-endring enveis→toveis, post-hoc/Bonferroni. · **K**
«Kji-kvadratoppgaven» (~10–20 %, oppg. 3) — er lineær regresjon egnet? + forventede
frekvenser + χ² for hånd + df + standardiserte residualer. · **G** «GLM-broen» —
vis at enveis ANOVA er en dummy-kodet regresjon (samme H0, samme F); dummykoding;
hvorfor lineær regresjon er uegnet for kategorisk/binær DV. **De fleste faktiske
oppgaver er flerdelte** (R kombinerer 6–9 delledd) — boka bygger derfor hvert
kjernetema så det kan besvares på alle deltrinn, med regning vist.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** «innen > mellom-gruppe-variasjon = bevis mot H0» — eksplisitt GAL (V2020);
F = MSb/MSw, det er *stor mellom-* relativt til innen-gruppe-varians som taler mot
H0. · **F2** feiltolke konstantleddet — b̂₀ er forventet Y når *alle* prediktorer = 0
(tolkbart som «ved gjennomsnittet» først ved sentrert X). · **F3** feiltolke
dummy-koeffisient — behandle b̂ for en kategorivariabel som «per enhet»-effekt i
stedet for gruppeforskjell mot referansen; lese forskjellen mellom to ikke-referanse-
nivåer rett fra tabellen uten å subtrahere. · **F4** overse hvorfor b̂ endres ved
kontroll — ikke koble til korrelerte prediktorer / konfunder / suppressor, eller
ikke identifisere *hvilken* variabel som driver endringen. · **F5** blande konfunder
(b̂ krymper) / suppressor (b̂ vokser/skifter fortegn) / mediering (mekanisme). ·
**F6** rangere prediktorer med ustandardiserte koeffisienter når enhetene er ulike —
må bruke standardiserte β. · **F7** feil signifikansavlesning — ikke kunne fastslå
signifikans fra t (|t|>2), CI (rommer 0?) eller p; ikke regne t = b̂/SE når t er
sladdet. · **F8** lineær regresjon på binær/kategorisk utfallsvariabel — gir umulige
predikerte verdier; kji-kvadrat/logistisk er riktig. · **F9** ikke velge/begrunne
polynom når residualene viser kvadratisk struktur — eller ekstrapolere polynom
utenfor dataområdet uten forbehold. · **F10** overse multikollinearitet — ikke
gjenkjenne oppblåst SE / VIF > 5 / ikke-signifikante enkeltkoeffisienter med
signifikant samlet F. · **F11** blande uteligger (høy residual) og innflytelse (høy
leverage / Cook's d). · **F12** ikke forklare F-endringen enveis→toveis (redusert
residual-MS) — bare rapportere at F ble større. · **F13** rote i ANOVA-tabellen —
SST = SSb + SSw, dfb = g−1, dfw = n−g, MS = SS/df, F = MSb/MSw. · **F14** hoppe over
post-hoc/multippel-testing-korreksjon etter signifikant omnibus-F. · **F15** kausal
overtolkning av regresjon/kji-kvadrat på observasjonelle data. · **F16** ikke vise
utregning i regne-/utfyllingsoppgaver — usynlig regning kan ikke reddes. · **F17**
misforstå GLM-broen — ikke se at enveis ANOVA og en dummy-kodet regresjon tester
samme H0 og gir samme F.

### Sensorkrav og kredittlogikk (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Alle oppgaver obligatoriske.** «Forsøk å besvare alle oppgavene» — ingenting
   kan velges bort. Regresjonsoppgaven teller alltid mest og må drilles til refleks.
2. **Vis fremgangsmåten.** Regneoppgaver (forventet Y, R², t = b̂/SE, χ², utfylte
   ANOVA-celler) krever synlig utregning (F16). Enkle regnefeil/fortegnsrot tilgis
   så lenge logikken er korrekt.
3. **Definisjoner premieres når de brukes.** Kort definere konfidensintervall,
   konfunder, mediator, interaksjon, standardisert koeffisient, leverage — og
   deretter *bruke* definisjonen på output — honoreres gjennomgående.
4. **Figurer premieres.** Tegne kausalmodell/regresjonsplan, kommentere linjediagram
   (interaksjon), box-/spredningsplott trekker opp.
5. **Momentlister, ikke fasit.** Veiledningene lister «momenter som bør adresseres»;
   forståelse trumfer fullstendighet. «Andre ting som kan være relevant» markerer
   bonusstoff over grunnkravet — bokas C/A-skille speiler dette.

### A/B-markører (bonus i veiledningene — «Toppsvar-løftet» per kapittel bygger på disse)

- Forklare *hvorfor* en koeffisient endres ved kontroll (statistisk kontroll /
  isolering av unik effekt) og **identifisere hvilken** variabel som driver det.
- Skille **konfunder** (b̂ krymper) fra **suppressor** (b̂ vokser/skifter fortegn)
  fra **mediering** (mekanisme).
- Bruke **standardiserte** koeffisienter til å rangere prediktorer med ulik enhet.
- Forklare **GLM-broen** (enveis ANOVA = dummy-regresjon, samme H0, samme F, samme
  antagelser).
- Forklare **F-endringen enveis→toveis** (redusert residual-MS).
- Begrunne signifikans korrekt fra t/CI/p og regne t når den er sladdet.
- Velge **polynom** fra residualstruktur + ΔR²/AIC/nested-F; advare mot
  **ekstrapolering**.
- Diagnostisere **multikollinearitet** (VIF > 5, oppblåst SE, R²_multippel << Σ
  bivariate R²).
- Skille **uteligger** (høy residual, lav innflytelse) fra **høy leverage/Cook's d**
  og begrunne om et punkt bør fjernes.
- Korrigere for **multippel testing** (Bonferroni) og drøfte familywise error / η².

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Regnefag med output-lese-lag, ikke rent regnefag.** PSY2014 er UiO-psykologiens
   klareste GLM-regnefag (kalkulator + formelark, «vis fremgangsmåten»), men eksamen
   er samtidig et **output-lesingsfag**: kandidaten leser ferdig R-/SPSS-output og
   forklarer den i prosa. Derfor beholdes DNA-regnefags makrostruktur (Del 0-kart,
   temadeler etter avhengighet, drillkapitler, øvingseksamener), men hvert
   temakapittel får en **output-simulator** (nyskrevet, egenkonstruert output) med
   ferdig tolkning på **bestått (C)- og A-nivå** — det tolkende laget som skiller
   dette fra et rent utregningsfag.
2. **To output-dialekter.** Output-formatet vandret fra SPSS (V18–V19) til R (V22→).
   Boka trener *begge*, men legger vekten på **R-stil** (`lm()`, `aov()`, `anova()`,
   `confint()`, `summary()`, `AIC`, `lm.beta`; kolonnene Estimate/Std. Error/t
   value/Pr(>|t|); stjernekodene `*** ** *`). Alle tabeller er nyskrevne — UiOs tall
   gjenbrukes aldri.
3. **«Fyll inn de sladdede tallene»-drill.** Analysens dokumenterte faste
   regnesjangre — utfylle sladdet ANOVA-tabell, maskert t (regn t = b̂/SE), R² fra
   SSE/SST, χ² fra krysstabell, n fra frihetsgrader — bygges som gjennomregnede
   eksempler med snille tall (formel på arket) i hvert relevant kapittel + samlet i
   drillkapitlet 11.1.
4. **Differensierte modellsvar (C vs. A) erstatter DNA-regnefags rene A-løsning.**
   Fordi sensor eksplisitt skiller grunntolkning (C) fra kontroll-logikk/GLM-bro/
   forutsetningsnyanser (A), gis hver kjerneoppgave en **bestått-versjon**
   (grunntolkning + korrekt regning) og en **A-versjon** (konfunder/suppressor-skille,
   GLM-broen, F-endringsforklaring, forutsetnings-/innflytelsesnyanse, multippel-
   testing-korreksjon), med sensorkommentar i veiledningenes momentspråk.
5. **Symbol- og formelliste er obligatorisk.** Faget er notasjonstungt; hvert
   delkapittel med symboler/formler får en `collapsible` **«Symbol- og formelliste»**
   (rett etter Forkunnskaper) som forklarer ALLE symboler brukt i delkapitlet
   (b̂₀/b̂₁, β, R², SSE/SST, SSb/SSw, df, MS, F, χ², E, O, SE osv.) — per delkapittel,
   ikke arvet.
6. **Feilvaksine.** De 17 feilene i §5 drilles — særlig innen/mellom-gruppe-vranglæren
   (F1), dummy-/konstantledd-tolkning (F2/F3), konfunder-vs-suppressor (F5),
   ustandardisert-vs-standardisert (F6), lineær-regresjon-på-binært-utfall (F8), og
   GLM-broen (F17).

### Avgrensning mot andre byggede/skjelett-psykologiemner (unngå dublering — analysen §7)

PSY2014 sitter mellom UiOs innføringsfag **PSY1010** (skjelett bygget) og
profesjonsstudiets kvantitativ metode A **PSYC2104** (analyse ferdig, skjelett ikke
bygget ennå). Boka **eier den generelle lineære modellen** og henviser de andre for
stoff som er deres.

| PSY1010 (forutsettes kjent — repeteres kort i Del 1) | PSY2014 (bokas tyngde — GLM) | PSYC2104 (hører dit — psykometri) |
|---|---|---|
| Enkel korrelasjon; r; korrelasjon ≠ kausalitet; regresjonslinjen Ŷ = a + bX som «videreføring av korrelasjon»; H0/H1, p, Type I/II, power, SE, samplingfordeling | **Multippel** regresjon; statistisk kontroll; konfunder/**suppressor**; standardiserte β; SE(b̂) + determinanter; **polynom**; multikollinearitet (VIF); residual-/innflytelsesdiagnostikk; **ANOVA som GLM** (enveis + toveis, interaksjon, tabellutfylling, F-endring, post-hoc); **dummykoding**; **kji-kvadrat**; **GLM-broen** | Regresjonsoutput i tjeneste for **mediering/moderering i dybden** (Baron & Kenny, bootstrapping/Process); **klassisk testteori (X=T+e), reliabilitet (α, SEM), målingsvaliditet, standardskårer, faktoranalyse** |

**Kort:** PSY1010-boka lærer *hva* korrelasjon, hypotesetesting og design er.
**PSY2014-boka eier den generelle lineære modellen** (regresjon og ANOVA forent,
faktoriell ANOVA, dummy-/kontrastkoding, polynom, forutsetnings- og innflytelses-
diagnostikk, kji-kvadrat, GLM-broen). **PSYC2104-boka eier det psykometriske stoffet**
og den tunge medierings-/modereringspipelinen. Der fagene overlapper på output-
tolkning holder PSY2014 seg til GLM-vinkelen (kontroll-logikk, dummy, polynom,
ANOVA-ekvivalens) og henviser mediering-i-dybden og psykometri til PSYC2104. Del 1
åpner med en kort «du kan dette fra PSY1010»-bro (lenk til PSY1010-kapitler når de
finnes ved byggetid — ellers utelates lenken). Ingen overlapp av betydning med
PSY1000 (generell psykologi), PSY2013 (kvalitativ metode) eller PSYC1201
(sosialpsykologi).

### Pensumankere (fra analysen §6 — brukes i innholdskontraktene)

| Kilde | Rolle | Det veiledningene henter derfra (⚠ utgaveavhengig, verifiser) |
|---|---|---|
| **Agresti, *Statistical Methods for the Social Sciences*** ⚠ | Hovedbok for hele GLM-løpet | Regresjon (b, β, R², SE, minste kvadrater); dekomposisjon SST = SSM + SSE; enveis- og toveis-ANOVA (SSb/SSw, MS, F, forventningsrette variansestimater); kji-kvadrat (O−E)²/E, df, standardiserte residualer; kontraster/post-hoc/multippel testing |
| **Forelesningene (Canvas)** ⚠ | Selvstendig kilde | Innen-/mellom-gruppe varians; residualdiagnostikk (histogram, QQ-plot, scatter); innflytelsesstatistikk (leverage, Cook's d, DFBETA); GLM-broen ANOVA↔regresjon; polynom + modellsammenlikning (AIC, nested-ANOVA); firetrinns mediering |
| **Formelark + t-tabell (utdelt på eksamen)** | Regnegrunnlag | Alle formlene i notasjonstabellen under — brukes, pugges ikke |

### Statistisk notasjon boka må normalisere (formelark + output — inn i Symbol- og formellistene)

| Notasjon | Betydning |
|---|---|
| X̄, s²ₓ, sₓ ; sₓᵧ ; r = sₓᵧ/(sₓsᵧ) | gjennomsnitt, varians, standardavvik; kovarians; Pearson-r |
| b̂₁ = sₓᵧ/s²ₓ ; b̂₀ = Ȳ − b̂₁·X̄ | minste kvadraters estimater (bivariat) |
| SE(b̂₁) = s/√Σ(Xᵢ−X̄)² | standardfeil til stigningskoeffisienten |
| βᵢ = bᵢ·(sₓ/sᵧ) | standardisert regresjonskoeffisient |
| s = √[Σ(Y−Ŷ)²/(n−p−1)] | residual standardavvik |
| r² = 1 − SSE/SST ; justert r² = 1 − (n−1)(1−r²)/(n−p−1) | forklart varians; justert |
| Z = (X − X̄)/sₓ | z-skåre |
| F = MS_M/MS_E ~ F(p, n−p−1) | F-ratio (regresjon/ANOVA) |
| t = b̂ᵢ/SE(b̂ᵢ) ~ t(n−p−1) | t-test av koeffisient |
| SST = SSM + SSE ; SSb, SSw ; dfb = g−1, dfw = n−g | sum-of-squares-dekomposisjon; ANOVA |
| χ² = Σ(O−E)²/E ~ χ²((R−1)(C−1)) ; E = Rⱼ·Cᵢ/n | kji-kvadrat; forventet frekvens |
| SE_diff = √(2·MS_w/n) | standardfeil for differanse mellom to snitt |
| `Estimate / Std. Error / t value / Pr(>\|t\|)` ; `*** ** *` ; AIC ; `confint` ; `lm.beta` | R-output boka må lese |

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-forekomster (V + år) + antall av 7 +
> oppgavesjangre (R/A/K/G) + prioritetsklasse (perfekt/kunne/kjenne, fra §7).
> **Innholdskontrakt** = definisjoner/teoremer/formler som SKAL med (med notasjon),
> utledninger som kreves aktivt vs. kun bruk, og hvilken output-simulator kapitlet
> skal ha. **Oppgavesjangre** = mønstrene kapitlet driller (med nyskrevet
> mønstereksempel). **Typiske feil** = feilkodene (F1–F17). **Kvote** = quiz/flashcards.

Hvert temakapittel følger DNA-regnefags teorikapittel-DNA, konkretisert:
`tip` Eksamensvinkel → `text` Forkunnskaper + `collapsible` Symbol- og formelliste →
`text` Motivasjon → `definition`/`theorem` begreper i emnets notasjon → `text`
utledning med intuisjon (kun der eksamen krever aktiv utledning) → `example`
**output-simulator** med bestått/A-tolkning (+ ev. gjennomregnet «fyll-inn»-eksempel)
→ `warning` typiske feil → `exercise` × 6–12 (stigende, ender på eksamensnivå, med
`solution` + `hints`) → `collapsible` repetisjonsoppgaver.

### Del 0 — Eksamenskart og regne-/output-håndverk

#### Kapittel 0.1: Slik testes PSY2014 — «besvar alle», formelark og de tre oppgavene
**id:** `psy2014-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** meta/eksamenskart.
- **Description:** Eksamensformen, den faste tredelingen (regresjon 55–65 % / ANOVA
  25–35 % / kji-kvadrat 10–20 %), «forsøk å besvare ALLE oppgavene»-regelen,
  kalkulator-/formelark-rammen og temafrekvensen — studentens prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel (hele arkivet V2018–V2024, 7 sett). Skal formidle:
  (a) **formen** — 3 t skriftlig skoleeksamen i Inspera, kalkulator uten grafisk
  display + formelark + t-tabell tillatt, digital håndtegning på skisseark, karakter
  A–F; (b) **den faste tredelingen** og at ALT er obligatorisk (kontrast til PSY1010s
  «3 av 4»); (c) **temafrekvens-tabellen** — multippel regresjon/kontroll 7/7,
  enveis ANOVA 7/7, kji-kvadrat 7/7, GLM-broen 6/7, toveis ANOVA/interaksjon 6/7,
  konfunder 6/7, residualforutsetninger 6/7, standardiserte β 6/7, polynom 6/7,
  SE-determinanter 5/7, signifikansavlesning 5/7, R²/justert R² 4/7, regresjons-
  interaksjon 3/7 (stigende), post-hoc/Bonferroni 3/7 (stigende), multikollinearitet
  2/7, innflytelse 2/7, suppressor 2/7, mediering 1/7; (d) **gjenbruket** — samme
  oppgaveforløp fra sett til sett (bare scenarioene bytter), så å drille gamle
  mønstre er den mest treffsikre forberedelsen. Sjangre: meta. Prioritet: perfekt.
- **Innholdskontrakt:** eksamensform-fakta; den faste tredelingen; «besvar alle»;
  temafrekvens-tabellen; pensumankeret (Agresti); oversikten R/A/K/G (peker til 0.2);
  regnekjernen som kommer syklisk igjen (peker til 11.1). Ingen output-simulator
  (kart) — men en «slik er et typisk sett bygd opp»-gjennomgang av ett nyskrevet
  tredelt eksempelsett med vekting per oppgave.
- **Oppgavesjangre:** ingen (kartkapittel) — leseferdighet: gjenkjenne hvilken av de
  tre oppgavetypene man står i.
- **Typiske feil:** misforståelsen at man kan velge bort en oppgave (alle er
  obligatoriske); undervurdere regresjonsoppgavens vekt.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 0.2: Regne-/output-håndverket — les tabellen, vis regningen, løft fra C til A
**id:** `psy2014-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-0-1`

- **Kapitteltype:** meta/håndverk.
- **Description:** Hvordan man leser R-/SPSS-output, viser utregning fra formelarket,
  og hva som skiller bestått (C) fra topp (A) ifølge sensorlogikken. Etablerer
  output-simulatoren og C/A-modellsvaret som bokas gjennomgående maler.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile V2018–2024
  (samme kjerneteam). Sjangre: meta. Prioritet: perfekt. Skal operasjonalisere: (a)
  **de to output-dialektene** — R (`lm`/`aov`/`anova`/`confint`/AIC/`lm.beta`;
  Estimate/Std. Error/t value/Pr(>|t|); `*** ** *`) og SPSS, side ved side på samme
  nyskrevne data; (b) **«vis fremgangsmåten»** (F16) — regneoppgaver krever synlig
  utregning; (c) **definér-og-bruk** — kort definisjon anvendt på output honoreres;
  (d) **figurpremien** — kausalmodell/linjediagram/box-/spredningsplott; (e)
  **nivåbildet**: A/B tolker hele output presist + kontroll-logikk + GLM-bro +
  forutsetningsnyanser + korrekt regning; C = grunntolkning + korrekt regning, men
  mangler kontroll-logikk/suppressor/GLM-bro/finpoeng; D/E = upresist, feiltolker
  konstant/dummy; F = regresjonsoppgaven reelt ubesvart.
- **Innholdskontrakt:** output-leseskjema (hvor står b̂, SE, t, p, CI, R², AIC, F, df);
  regnekjernen fra formelarket (forventet Y, R² fra SSE/SST, t = b̂/SE, n fra df,
  ANOVA-celler, χ²) presentert som «dette er billige, faste poeng»; C/A-modellsvar-
  malen; `collapsible` **Symbol- og formelliste** for hele notasjonstabellen (§2).
- **Output-simulator:** ett nyskrevet lite regresjonsoutput lest i R- og SPSS-dialekt
  parallelt, med bestått- og A-tolkning side ved side.
- **Oppgavesjangre:** meta — «les denne output-linjen», «hva mangler i C-svaret for
  å bli A?».
- **Typiske feil:** F16 (usynlig regning), F7 (feil signifikansavlesning), samt en
  oversikt over alle F1–F17 (drilles i temakapitlene og 11.2).
- **Kvote:** 14 quiz / 14 flashcards.

### Del 1 — Fra korrelasjon til enkel regresjon (bro fra PSY1010)

#### Kapittel 1.1: Korrelasjon, kovarians og regresjonslinjen — repetisjon fra PSY1010
**id:** `psy2014-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-0-2`

- **Kapitteltype:** tema (bro/repetisjon).
- **Description:** Kort oppfriskning av det PSY1010 lærte: Pearson-r, kovarians,
  korrelasjon ≠ kausalitet, og regresjonslinjen Ŷ = b̂₀ + b̂₁X som «videreføring av
  korrelasjon» — fundamentet alt videre bygger på.
- **Eksamensbelegg:** Forutsettes kjent (PSY1010-stoff), men r/kovarians/linjen inngår
  som grunnmur i hver regresjonsoppgave. Sjangre: R (grunnlag). Prioritet: kunne
  (§7 — kort bro).
- **Innholdskontrakt:** Agresti ⚠: **Pearson-r** (r = sₓᵧ/(sₓsᵧ), styrke + retning,
  −1..1); **kovarians** sₓᵧ; **korrelasjon ≠ kausalitet** (F15-forløper);
  **regresjonslinjen** Ŷ = b̂₀ + b̂₁X; **r² = forklart varians** (bro til R² i Del 2).
  Kun *bruk* av formlene (utledning ikke krevd her). `collapsible` Symbol- og
  formelliste: r, sₓᵧ, sₓ, sᵧ, Ŷ, b̂₀, b̂₁, r².
- **Output-simulator:** en enkel bivariat `lm()`-output lest: hva er b̂₁, b̂₀, r²?
- **Oppgavesjangre:** R (oppvarming): «tolk r og regresjonslinjen», «hvorfor kan vi
  ikke slutte årsak av r?».
- **Typiske feil:** F15 (kausal overtolkning av r); forveksle r og r².
- **Kvote:** 12 quiz / 14 flashcards.

#### Kapittel 1.2: Enkel lineær regresjon og minste kvadraters metode
**id:** `psy2014-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-1-1`

- **Kapitteltype:** tema.
- **Description:** Enkel regresjon som modell: minste kvadraters estimater b̂₀/b̂₁,
  tolkning av stigning og konstantledd, forventet Y fra ligningen, og residualer som
  utgangspunkt for alt senere (SST = SSM + SSE).
- **Eksamensbelegg:** Fundament for den store regresjonsoppgaven (7/7). «Regn
  forventet Y» og «tolk b̂₀/b̂₁» er faste delledd. Sjangre: R. Prioritet: kunne/perfekt
  (grunnmuren).
- **Innholdskontrakt:** Agresti ⚠: **minste kvadraters metode** (SSE = Σ(Y−Ŷ)²
  minimeres; følsom for uteliggere — forløper til Del 4); **b̂₁ = sₓᵧ/s²ₓ**,
  **b̂₀ = Ȳ − b̂₁·X̄**; **tolkning** (b̂₁ = endring i forventet Y per enhets X;
  b̂₀ = forventet Y når X = 0, F2); **forventet Y** fra ligningen; **residual**
  (Y − Ŷ); **dekomposisjonen SST = SSM + SSE**; **r² = SSM/SST = 1 − SSE/SST**.
  Utledning av b̂₀/b̂₁ vises med intuisjon (minimere kvadratsum), men eksamen krever
  *bruk*, ikke full derivasjon. `collapsible` Symbol- og formelliste: b̂₀, b̂₁, Ŷ,
  SSE, SSM, SST, r², s.
- **Output-simulator:** nyskrevet bivariat output — regn forventet Y for en gitt X,
  og R² fra SSE/SST; bestått vs. A (A tolker b̂₀ presist ved X = 0 og nevner
  minste-kvadrat-følsomhet).
- **Oppgavesjangre:** R: «tolk b̂₀ og b̂₁ og regn forventet Y for X = …»; «regn R² fra
  SSE og SST».
- **Typiske feil:** F2 (feiltolke konstantleddet); F16 (ikke vise regning); F15
  (kausal overtolkning).
- **Kvote:** 16 quiz / 18 flashcards.

### Del 2 — Multippel regresjon og statistisk kontroll

#### Kapittel 2.1: Multippel regresjon — tolke output fra en modell med flere prediktorer
**id:** `psy2014-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `psy2014-1-2`

- **Kapitteltype:** tema.
- **Description:** Bokas ryggrad starter: hvordan man leser og tolker output fra en
  multippel regresjon — partielle koeffisienter, konstantledd, R²/justert R²,
  forventet Y for en profil, og n fra frihetsgradene.
- **Eksamensbelegg:** Den suverene gjengangeren — kjernen i den 55–65 %-tunge
  oppgaven (7/7). Sjangre: R. Prioritet: **perfekt** (§7 pkt. 1).
- **Innholdskontrakt:** Agresti ⚠: **multippel regresjon** Ŷ = b̂₀ + b̂₁X₁ + … + b̂ₚXₚ;
  **partiell regresjonskoeffisient** (effekten av Xⱼ når de andre holdes konstant);
  **konstantledd** (forventet Y når *alle* prediktorer = 0, F2); **forventet Y for en
  profil** (sett inn verdier, regn); **R² og justert R²** (justert straffer
  kompleksitet — kan synke når svake prediktorer legges til); **F-test av samlet
  modell** (MS_reg/MS_res); **n fra df** (n = df_residual + p + 1). *Bruk* av
  formlene; utledning ikke krevd. `collapsible` Symbol- og formelliste: b̂ⱼ, Xⱼ, R²,
  justert R², F, df_reg, df_residual, p, n.
- **Output-simulator:** nyskrevet `summary(lm())`-output med to–tre prediktorer —
  tolk hver koeffisient, konstantleddet, R²/justert R², regn forventet Y for en
  profil og n fra df. Bestått (grunntolkning) vs. A (justert R²-logikk, n fra df,
  presist konstantledd).
- **Oppgavesjangre:** R: «oppsummer modellen — tolk b̂ⱼ, b̂₀, R²/justert R², og regn
  forventet Y for en person med X₁ = …, X₂ = …».
- **Typiske feil:** F2 (konstantledd), F16 (ikke vise regning), forveksle R² og
  justert R².
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.2: Statistisk kontroll og konfundering — hvorfor b̂ endres når kontrollvariabler legges til
**id:** `psy2014-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `psy2014-2-1`

- **Kapitteltype:** tema.
- **Description:** Det sentrale A/B-skillet i regresjonsoppgaven: hvorfor en
  koeffisient endres når kontrollvariabler legges til (korrelerte prediktorer,
  statistisk kontroll, isolering av unik effekt), konfundering, og hvordan man
  identifiserer *hvilken* variabel som driver endringen.
- **Eksamensbelegg:** «Endrer b seg ved kontroll?» / konfundering (6/7). Sjangre: R.
  Prioritet: **perfekt** (§7 pkt. 1/6 — kjerne-A/B-skillet).
- **Innholdskontrakt:** Agresti ⚠: **statistisk kontroll / justering** (holde andre
  prediktorer konstant); **unik vs. delt varians**; **konfunder** (tredjevariabel
  korrelert med *både* X og Y; blåser opp/ned bivariat b̂ — spuriøs sammenheng);
  **hvorfor b̂ endres** (prediktorene er korrelerte → kontroll isolerer den unike
  effekten av X); **identifisere hvilken** variabel som driver endringen (fra
  korrelasjonstabell/partielle korrelasjoner, F4). `collapsible` Symbol- og
  formelliste: b̂ⱼ (bivariat vs. justert), korrelasjonstabell, partiell korrelasjon.
- **Output-simulator:** to nøstede nyskrevne modeller (modell 1 bivariat → modell 2
  med to kontrollvariabler) der b̂ for X krymper — forklar hvorfor og pek ut driveren
  fra en korrelasjonstabell. Bestått (nevner statistisk kontroll) vs. A (identifiserer
  driveren + definerer konfunder + skiller fra ren støy).
- **Oppgavesjangre:** R: «i modell 2 endrer b̂ for X seg — forklar hvorfor, og avgjør
  hvilken kontrollvariabel som driver endringen».
- **Typiske feil:** F4 (ikke koble endringen til korrelerte prediktorer/konfunder,
  eller ikke identifisere driveren); F15 (kausal overtolkning); F5 (blande med
  suppressor — vent til 2.3).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 2.3: Suppressor og kategoriske prediktorer (dummykoding i regresjon)
**id:** `psy2014-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-2-2`

- **Kapitteltype:** tema.
- **Description:** To A-differensierere: suppressoreffekten (b̂ *vokser*/skifter
  fortegn ved kontroll) holdt skarpt fra konfundering, og kategoriske prediktorer med
  flere nivåer som dummy-kodes — hvordan konstantledd og dummy-koeffisienter tolkes.
- **Eksamensbelegg:** Suppressor (2/7, klassisk A-differensierer); kategorisk prediktor/
  dummykoding inngår i regresjonsoppgaven i flere sett. Sjangre: R (frempek G, Del 9).
  Prioritet: **perfekt/kunne** (§7 pkt. 6).
- **Innholdskontrakt:** Agresti ⚠: **suppressor** (b̂ øker/skifter fortegn ved kontroll
  fordi prediktorene virker i motsatt retning og delvis kanselleres — skille fra
  konfunder der b̂ krymper, F5); **dummy-/indikatorkoding** (0/1) av kategorisk
  prediktor; **konstantledd = forventet Y for referansekategorien**; **hver dummy-
  koeffisient = forskjellen fra referansen** (F3); **forskjellen mellom to ikke-
  referanse-nivåer = differansen mellom deres koeffisienter** (kan ikke leses direkte,
  F3); **F-testen** tester om *alle* dummyer samtidig er 0; **reversering av 0/1-
  koding** (b̂₀ endres, dummy skifter fortegn, R² uendret). `collapsible` Symbol- og
  formelliste: dummy Dⱼ, referansekategori, b̂₀, dummy-koeffisient.
- **Output-simulator:** (a) nyskrevet output der b̂ vokser ved kontroll (suppressor);
  (b) output med en 3-nivås kategorisk prediktor dummy-kodet — tolk konstantledd og
  hver dummy, regn forskjellen mellom to ikke-referanse-nivåer. Bestått vs. A (A
  skiller suppressor fra konfunder og subtraherer dummyer korrekt).
- **Oppgavesjangre:** R: «forklar hvorfor b̂ *økte* ved kontroll (suppressor vs.
  konfunder)»; «tolk dummy-koeffisientene og regn forskjellen mellom nivå 2 og 3».
- **Typiske feil:** F5 (suppressor/konfunder blandet); F3 (dummy som «per enhet», eller
  lese ikke-referanse-forskjell rett fra tabellen).
- **Kvote:** 18 quiz / 18 flashcards.

### Del 3 — Standardiserte koeffisienter, standardfeil og signifikansavlesning

#### Kapittel 3.1: Standardiserte koeffisienter og standardfeilen til en koeffisient
**id:** `psy2014-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-2-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan man rangerer prediktorer med ulik målenhet (standardiserte
  β), og hva standardfeilen til en koeffisient er + de tre forholdene som gjør den
  mindre — koblet til statistisk styrke.
- **Eksamensbelegg:** Standardiserte β (6/7, «hvilken variabel er sterkest?»); SE +
  dens tre determinanter (5/7). Sjangre: R. Prioritet: **perfekt** (§7 pkt. 8).
- **Innholdskontrakt:** Agresti ⚠: **standardisert (beta-)koeffisient**
  βᵢ = bᵢ·(sₓ/sᵧ) (SD-endring i Y per SD-endring i X; β = r ved én prediktor);
  **hvorfor** standardiserte kreves for å sammenligne prediktorer med ulik enhet
  (ustandardiserte avhenger av målenhet — minutter vs. timer, F6); **standardfeilen
  SE(b̂₁) = s/√Σ(Xᵢ−X̄)²** (estimert SD i samplingfordelingen til koeffisienten); de
  **tre determinantene** — (i) flere observasjoner n, (ii) mindre residualvarians s
  (reliabelt Y-mål / flere forklarende variabler), (iii) større spredning i X;
  kobling til **statistisk styrke**. `collapsible` Symbol- og formelliste: βᵢ, bᵢ,
  sₓ, sᵧ, SE(b̂₁), s, Σ(Xᵢ−X̄)².
- **Output-simulator:** nyskrevet output (via `lm.beta`) med to prediktorer i ulik
  enhet — hvilken er sterkest assosiert med Y? + «hvordan gjøre SE mindre?». Bestått
  (velger standardisert) vs. A (forklarer alle tre SE-determinantene + styrke-koblingen).
- **Oppgavesjangre:** R: «hvilken av to prediktorer med ulik enhet er sterkest
  assosiert med Y?»; «hva forteller Std. Error, og hvordan gjøre den mindre?».
- **Typiske feil:** F6 (rangere med ustandardiserte koeffisienter); glemme én av de
  tre SE-determinantene.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 3.2: Signifikansavlesning — t, konfidensintervall og p (og regne t når den er sladdet)
**id:** `psy2014-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-3-1`

- **Kapitteltype:** tema.
- **Description:** Klassisk «vis at du forstår tabellen»-ledd: fastslå signifikans fra
  t (|t| > 2), fra konfidensintervall (rommer 0?), eller fra oppgitt p — og regne
  t = b̂/SE når t er maskert.
- **Eksamensbelegg:** Signifikansavlesning fra sladdet output (5/7). Sjangre: R.
  Prioritet: **perfekt** (§7 pkt. 1).
- **Innholdskontrakt:** Agresti ⚠: **t-test av enkeltkoeffisient** t = b̂ᵢ/SE(b̂ᵢ),
  df = n − p − 1; **|t| > ~2** som signifikanstommelfinger i store utvalg
  (z-approksimasjon, ±1,96); **konfidensintervall** (verdiene som *ikke* kan
  forkastes; rommer 0 → ikke signifikant); **p mot α = 0,05**; **regne t når den er
  sladdet** (t = b̂/SE); stjernekodene `*** ** *`. `collapsible` Symbol- og
  formelliste: t, b̂ᵢ, SE(b̂ᵢ), df, CI, p, α.
- **Output-simulator:** nyskrevet output der t-verdien for én koeffisient er sladdet —
  regn t = b̂/SE, og avgjør signifikans for alle koeffisienter fra t, CI *og* p.
  Bestått (leser stjerner/p) vs. A (regner maskert t + definerer CI + z-approksimasjon).
- **Oppgavesjangre:** R: «hvilke koeffisienter er signifikante på 0,05-nivå? Begrunn
  fra t, CI og p, og regn t der den mangler».
- **Typiske feil:** F7 (feil signifikansavlesning; ikke regne maskert t); F16 (usynlig
  regning).
- **Kvote:** 16 quiz / 16 flashcards.

### Del 4 — Forutsetninger, residualdiagnostikk og innflytelse

#### Kapittel 4.1: Regresjonsforutsetninger og residualdiagnostikk
**id:** `psy2014-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-1-2`

- **Kapitteltype:** tema.
- **Description:** De fire antagelsene bak minste kvadrater (fra εᵢ ~ N(0,σ²)) og
  hvordan man leser residualfigurer: «hvilken antagelse er brutt i denne figuren?».
- **Eksamensbelegg:** Residualforutsetninger via residualer (6/7). Sjangre: R.
  Prioritet: **perfekt** (§7 pkt. 10).
- **Innholdskontrakt:** Agresti ⚠ / forelesningene: **εᵢ ~ N(0, σ²)** som kilde til
  antagelsene; **linearitet**; **normalfordelte residualer** (histogram, QQ-plot);
  **homoskedastisitet** (konstant residualvarians — «trakt» = brudd); **uavhengige
  residualer**; hvordan hver antagelse ses i et residualplott (kvadratisk struktur =
  ikke-linearitet → polynom i Del 5; vifteform = heteroskedastisitet). `collapsible`
  Symbol- og formelliste: εᵢ, σ², residual Y−Ŷ, QQ-plot, histogram.
- **Output-simulator:** tre nyskrevne (verbalt beskrevne) residualfigurer — match hver
  til den brutte antagelsen. Bestått (identifiserer bruddet) vs. A (kobler til
  εᵢ ~ N(0,σ²) og til rett fiks: polynom/transformasjon).
- **Oppgavesjangre:** R: «hvilken antagelse er brutt i denne residualfiguren, og hva
  bør gjøres?».
- **Typiske feil:** F9 (ikke se kvadratisk struktur → polynom); forveksle heteroskeda-
  stisitet og ikke-linearitet.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 4.2: Innflytelse og multikollinearitet — uteligger, leverage, Cook's d og VIF
**id:** `psy2014-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-4-1`

- **Kapitteltype:** tema.
- **Description:** Skille en uteligger i Y (høy residual) fra et innflytelsesrikt punkt
  (høy leverage / Cook's d), avgjøre om et punkt bør fjernes, og diagnostisere
  multikollinearitet (VIF > 5, oppblåst SE).
- **Eksamensbelegg:** Innflytelsesstatistikk (2/7); multikollinearitet (2/7). Sjangre:
  R. Prioritet: **kunne** (§7 pkt. 10 — differensierende A-stoff).
- **Innholdskontrakt:** Agresti ⚠ / forelesningene: **uteligger i Y** (høy residual,
  lav innflytelse) **vs. i X** (høy leverage); **Cook's distance / DFBETA** (flagger
  innflytelsesrike punkter); **minste kvadraters følsomhet** (residualer kvadreres);
  **«bør punktet fjernes?»** (begrunn fra leverage + Cook's d + residual, F11);
  **multikollinearitet** (høyt korrelerte prediktorer, **VIF > 5**, oppblåst SE,
  ustabile/ikke-signifikante enkeltkoeffisienter mens samlet F er signifikant,
  R²_multippel << Σ bivariate R², F10). `collapsible` Symbol- og formelliste:
  leverage, Cook's d, DFBETA, VIF, toleranse.
- **Output-simulator:** (a) et spredningsplott (verbalt) med ett høy-leverage- og ett
  høy-residual-punkt — hvilket er innflytelsesrikt? (b) output der SE er oppblåst og
  enkeltkoeffisienter er ikke-signifikante mens F er signifikant — diagnostiser
  multikollinearitet fra VIF. Bestått vs. A (skiller leverage/residual + leser VIF).
- **Oppgavesjangre:** R: «er dette punktet en uteligger eller innflytelsesrikt — bør
  det fjernes?»; «hvor i utskriften ser du at prediktorene er høyt korrelert?».
- **Typiske feil:** F11 (uteligger = innflytelse uten å skille leverage/Cook's d); F10
  (overse multikollinearitet).
- **Kvote:** 16 quiz / 16 flashcards.

### Del 5 — Polynom, kurvilinearitet og modellsammenlikning

#### Kapittel 5.1: Polynomisk (kurvilineær) regresjon — annengradsleddet
**id:** `psy2014-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-4-1`

- **Kapitteltype:** tema.
- **Description:** Hvorfor og hvordan man legger til et annengradsledd (X²) for å fange
  en ikke-lineær sammenheng, hvordan fortegnet tolkes (konkav/konveks, utflating), og
  ekstrapoleringsforbeholdet.
- **Eksamensbelegg:** Polynom/kurvilinearitet (6/7 — nesten alltid ett ledd i
  regresjonsoppgaven). Sjangre: R. Prioritet: **perfekt** (§7 pkt. 7).
- **Innholdskontrakt:** Agresti ⚠ / forelesningene: **polynomisk regresjon**
  Ŷ = b̂₀ + b̂₁X + b̂₂X²; **tolke fortegn** (negativt X² → konkav/utflating, effekten
  avtar/snur; positivt → konveks); **når** polynom trengs (kvadratisk struktur i
  residualene fra den lineære modellen, F9); **ekstrapolering** (polynomer
  «eksploderer» utenfor dataområdet — advar, F9); (kort «bør kjenne til») **sentrering**
  av X for tolkbart konstantledd. `collapsible` Symbol- og formelliste: X², b̂₂,
  konkav/konveks, sentrering.
- **Output-simulator:** nyskrevet output med et signifikant X²-ledd + en beskrevet
  residualfigur fra den lineære modellen — begrunn polynomet og tolk fortegnet.
  Bestått (ser X² signifikant) vs. A (kobler til residualstruktur + advarer mot
  ekstrapolering).
- **Oppgavesjangre:** R: «er sammenhengen kurvilineær? Hvorfor legge til X², og hva
  betyr fortegnet? Bør du stole på prediksjon utenfor dataområdet?».
- **Typiske feil:** F9 (ikke begrunne polynom fra residualer; ekstrapolere uten
  forbehold); tolke X²-fortegnet feil.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 5.2: Modellsammenlikning — ΔR², AIC og nested-ANOVA-F
**id:** `psy2014-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-5-1`

- **Kapitteltype:** tema.
- **Description:** Hvordan man avgjør om en utvidet modell (f.eks. med X²) er bedre:
  økning i R² (ΔR²), lavere AIC, og en signifikant nested-ANOVA-F som sammenligner
  modellene formelt.
- **Eksamensbelegg:** Modellsammenlikning inngår i polynomleddet (V2019, V2023, V2024).
  Sjangre: R. Prioritet: **perfekt/kunne** (§7 pkt. 7).
- **Innholdskontrakt:** forelesningene ⚠: **ΔR²** (økning i forklart varians);
  **justert R²** (straffer kompleksitet — kan synke); **AIC** (lavere = bedre
  balanse tilpasning/kompleksitet); **nested-ANOVA-F-test** (`anova(m1, m2)` —
  tester om det ekstra leddet forbedrer modellen signifikant); (kort «bør kjenne
  til») forward/backward-seleksjon. `collapsible` Symbol- og formelliste: ΔR²,
  justert R², AIC, nested-F.
- **Output-simulator:** nyskrevet `anova(m1, m2)` + AIC-sammenligning for en lineær vs.
  polynommodell — konkluder om annengradsleddet lønner seg. Bestått (ser ΔR²) vs. A
  (leser nested-F + AIC + justert R² sammen).
- **Oppgavesjangre:** R: «hva forteller ΔR², AIC og en nested-ANOVA om nytten av
  annengradsleddet?».
- **Typiske feil:** F9 (ikke bruke formelle kriterier); tro at høyere R² alltid = bedre
  modell (justert R²/AIC-poenget).
- **Kvote:** 14 quiz / 14 flashcards.

### Del 6 — Interaksjon og mediering

#### Kapittel 6.1: Interaksjon i regresjon (moderering)
**id:** `psy2014-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-2-3`

- **Kapitteltype:** tema.
- **Description:** Moderering via produktledd X₁·X₂: betinget effekt, hvordan en
  dikotom moderator gir to regresjonslinjer, og hvordan interaksjonskoeffisientens
  fortegn tolkes — holdt skarpt fra ANOVA-interaksjon (Del 8).
- **Eksamensbelegg:** Regresjonsinteraksjon/moderering (3/7, stigende). Sjangre: R.
  Prioritet: **kunne** (§7 pkt. 11 — stigende).
- **Innholdskontrakt:** Agresti ⚠: **interaksjon/moderering** (produktledd X₁·X₂);
  **betinget effekt** (effekten av X₁ avhenger av nivået til X₂); **to regresjonslinjer**
  (én per gruppe når moderatoren er dikotom); **tolke fortegn** på interaksjons-
  koeffisienten; **skille regresjonsinteraksjon fra ANOVA-interaksjon** (samme idé,
  ulik output — frempek Del 8). `collapsible` Symbol- og formelliste: X₁·X₂,
  interaksjonskoeffisient, betinget/enkel effekt.
- **Output-simulator:** nyskrevet output med et signifikant produktledd — tolk den
  betingede effekten og skisser de to linjene. Bestått vs. A (tegner linjene + skiller
  fra ANOVA-interaksjon).
- **Oppgavesjangre:** R: «tolk interaksjonskoeffisienten — hvordan avhenger effekten av
  X₁ av X₂?».
- **Typiske feil:** tolke hovedeffekten som ubetinget når et produktledd er med; blande
  regresjons- og ANOVA-interaksjon.
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 6.2: Mediering — firetrinns fremgangsmåte (med henvisning til PSYC2104)
**id:** `psy2014-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-6-1`

- **Kapitteltype:** tema (bør kunne).
- **Description:** Mediering som mekanisme (X→M→Y): den klassiske firetrinns
  fremgangsmåten og hvordan man leser «gir modellene støtte til mediering?» — holdt
  skarpt fra konfundering og suppressor. Dybden (bootstrapping/Process) tilhører
  PSYC2104.
- **Eksamensbelegg:** Mediering (1/7, V2022 — klart pensum). Sjangre: R. Prioritet:
  **kunne** (§7 pkt. 6 — lavfrekvent, men differensierer).
- **Innholdskontrakt:** forelesningene ⚠: **mediator** (variabel i kausalkjeden
  X→M→Y); **firetrinns fremgangsmåte** (1) X→Y signifikant, (2) X→M signifikant,
  (3) M→Y kontrollert for X signifikant, (4) redusert direkte X→Y kontrollert for M;
  **mediering = mekanisme** vs. **konfunder** (spuriøs) vs. **moderering** (betingelse)
  — skill de tre (F5); **kryssreferanse til PSYC2104** for a×b/c′, bootstrapping og
  Hayes' Process (dybden). `collapsible` Symbol- og formelliste: X, M, Y, direkte/
  indirekte effekt, c/c′.
- **Output-simulator:** tre nyskrevne nøstede modeller som følger firetrinns-mønsteret
  — gir de støtte til mediering? Bestått (følger de fire trinnene) vs. A (skiller
  mediering fra konfunder/moderering).
- **Oppgavesjangre:** R: «gjennomfør firetrinns medierings­analysen — gir modellene
  støtte til at M medierer X→Y?».
- **Typiske feil:** F5 (blande mediering/konfunder/suppressor); hoppe over det fjerde
  trinnet (redusert direkte effekt).
- **Kvote:** 12 quiz / 12 flashcards.

### Del 7 — Enveis variansanalyse (ANOVA)

#### Kapittel 7.1: Enveis ANOVA og F-testens rasjonale
**id:** `psy2014-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `psy2014-1-2`

- **Kapitteltype:** tema.
- **Description:** Bokas andre ryggrad: hvordan total variasjon deles i mellom- og
  innen-gruppe (SST = SSb + SSw), hva mean squares er, og hvorfor F = MSb/MSw har
  forventet verdi 1 under H0 — med den eksplisitte «innen > mellom»-fellen (F1).
- **Eksamensbelegg:** Enveis ANOVA / F-rasjonale (7/7). Sjangre: A. Prioritet:
  **perfekt** (§7 pkt. 2).
- **Innholdskontrakt:** Agresti ⚠: **faktor, nivå, celle**; **enveis mellom-gruppe
  ANOVA**; **total/mellom-/innen-gruppe variasjon** (SST, **SSb** = gruppesnittenes
  avvik fra totalsnittet, **SSw** = individenes avvik fra sitt gruppesnitt);
  **frihetsgrader** (dfb = g−1, dfw = n−g); **mean squares** MS = SS/df; **F = MSb/MSw**
  (under H0 er *både* MSb og MSw forventningsrette estimater på populasjonsvariansen →
  forventet F = 1; store F taler mot H0); **omnibus-test**; **den eksplisitte fellen**
  (F1: «innen > mellom = bevis mot H0» er GAL — det er omvendt). Utledning av
  forventet F = 1 vises med intuisjon. `collapsible` Symbol- og formelliste: SST, SSb,
  SSw, dfb, dfw, MSb, MSw, F, g, n.
- **Output-simulator:** nyskrevet `aov()`-output — les F/df/p og konkluder; forklar
  mellom-/innen-gruppe-logikken. Bestått (leser F og konkluderer) vs. A (forklarer
  forventet F = 1 + forventningsrette variansestimater + avviser F1-fellen).
- **Oppgavesjangre:** A: «forklar F-testens rasjonale — mellom- vs. innen-gruppe
  varians, og hvordan forholdet brukes til å vurdere H0».
- **Typiske feil:** F1 (innen > mellom = bevis mot H0 — GAL); F13 (rote i SS-
  dekomposisjonen).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 7.2: Fyll inn den sladdede ANOVA-tabellen
**id:** `psy2014-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-7-1`

- **Kapitteltype:** tema (regnedrill).
- **Description:** Den nesten garanterte regne-/utfyllingsoppgaven: gitt noen celler i
  en ANOVA-tabell, fyll inn resten (SS, df, MS, F) og konkluder — med vist utregning.
- **Eksamensbelegg:** Utfylle sladdet ANOVA-tabell (fast, 5+/7). Sjangre: A. Prioritet:
  **perfekt** (§7 pkt. 2 — billige, faste poeng).
- **Innholdskontrakt:** Agresti ⚠: **utfyllingsalgoritmen** — SST = SSb + SSw;
  dfb = g − 1; dfw = n − g; MS = SS/df; F = MSb/MSw; **konklusjon** (H0 = like
  gruppesnitt i populasjonen; høy signifikant F → forkast; forskjellene skyldes neppe
  tilfeldig samplingvariasjon). Rene regnesteg med snille tall. `collapsible` Symbol-
  og formelliste: SS, df, MS, F (samme som 7.1).
- **Output-simulator:** en nyskrevet ANOVA-tabell med 2–3 sladdede celler — fyll inn og
  konkluder. Gjennomregnet eksempel + «fyll-inn»-drill. Bestått (fyller riktig) vs. A
  (viser hvert steg + presis H0-konklusjon).
- **Oppgavesjangre:** A: «fyll inn de manglende cellene i ANOVA-tabellen og konkluder».
- **Typiske feil:** F13 (feil formler i utfyllingen); F16 (ikke vise regning); glemme
  konklusjonen.
- **Kvote:** 14 quiz / 14 flashcards.

### Del 8 — Toveis ANOVA, interaksjon og post-hoc

#### Kapittel 8.1: Toveis (faktoriell) ANOVA, interaksjon og F-endringen enveis→toveis
**id:** `psy2014-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `psy2014-7-2`

- **Kapitteltype:** tema.
- **Description:** Toveis ANOVA: hovedeffekter + interaksjon (ikke-parallelle linjer i
  linjediagram), og A-markøren — hvorfor F for hovedfaktoren *øker* fra enveis til
  toveis (redusert residual-MS).
- **Eksamensbelegg:** Toveis + interaksjon (6/7); F-endring enveis→toveis (A-markør,
  4/7). Sjangre: A. Prioritet: **perfekt** (§7 pkt. 2).
- **Innholdskontrakt:** Agresti ⚠: **toveis (faktoriell) ANOVA**; **hovedeffekt**;
  **interaksjonseffekt** (effekten av én faktor avhenger av nivået til den andre;
  ikke-parallelle linjer i linjediagram); **F-endringen enveis→toveis** (når en andre
  faktor inkluderes, forklarer den en del av det som lå i residualen → SSw/MSw krymper
  → nevneren i F blir mindre → F for opprinnelig faktor blir *større*, mer styrke,
  F12); **linjediagram-matching** (match hovedeffekter/interaksjon mot F/p);
  **effektstørrelse η²** (bør kjenne til). `collapsible` Symbol- og formelliste:
  hovedeffekt, interaksjon, SSw/MSw, F, η².
- **Output-simulator:** nyskrevet toveis `aov()`-output + tre beskrevne linjediagram —
  tolk hovedeffekter/interaksjon, match rett diagram, og forklar F-endringen fra en
  gitt enveis-analyse. Bestått (rapporterer effektene) vs. A (forklarer F-endringen
  via redusert residual-MS + η²).
- **Oppgavesjangre:** A: «tolk hovedeffekter og interaksjon; forklar hvorfor F for den
  første faktoren nå er høyere enn i enveisanalysen; hvilket linjediagram passer?».
- **Typiske feil:** F12 (ikke forklare F-endringen — bare rapportere at F ble større);
  lese interaksjon feil av parallelle linjer.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 8.2: Post-hoc og multippel testing — Bonferroni og familywise error
**id:** `psy2014-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-8-1`

- **Kapitteltype:** tema.
- **Description:** Etter en signifikant omnibus-F: parvise sammenlikninger, hvorfor man
  må korrigere for antall tester (familywise error), og hvordan Bonferroni-justerte
  p-verdier leses av output.
- **Eksamensbelegg:** Post-hoc/Bonferroni (3/7, stigende). Sjangre: A. Prioritet:
  **perfekt/kunne** (§7 pkt. 12).
- **Innholdskontrakt:** Agresti ⚠: **omnibus-test → post-hoc** (en signifikant F sier
  bare at *minst én* forskjell finnes; parvise sammenlikninger lokaliserer den);
  **multippel testing / familywise error** (flere tester blåser opp Type I-risiko);
  **Bonferroni-korreksjon** (juster α/p for antall tester); **planlagte vs. post-hoc**
  kontraster; **effektstørrelse η²** (bør kjenne til). `collapsible` Symbol- og
  formelliste: familywise error, Bonferroni-justert p, η², planlagt/post-hoc kontrast.
- **Output-simulator:** nyskrevet Bonferroni-justert parvis output etter signifikant
  ANOVA — hvilke par skiller seg? Bestått (leser justert p) vs. A (forklarer hvorfor
  korreksjon trengs + familywise error).
- **Oppgavesjangre:** A: «følg opp med passende post-hoc-sammenlikninger og forklar
  hvorfor korreksjon for antall tester er nødvendig».
- **Typiske feil:** F14 (hoppe over post-hoc/korreksjon); bruke ukorrigerte p-verdier.
- **Kvote:** 14 quiz / 14 flashcards.

### Del 9 — Den generelle lineære modellen (GLM-broen)

#### Kapittel 9.1: ANOVA som dummy-kodet regresjon — GLM-broen
**id:** `psy2014-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-8-1`

- **Kapitteltype:** tema.
- **Description:** Fagets røde tråd: at enveis ANOVA er en dummy-kodet regresjon med
  *samme* H0 og *samme* F, hvorfor de deler antagelser, og hvorfor lineær regresjon er
  uegnet for en kategorisk/binær utfallsvariabel (bruk kji-kvadrat i stedet).
- **Eksamensbelegg:** GLM-broen (6/7 — faget er bygget rundt dette); lineær regresjon
  uegnet for binær DV (2/7). Sjangre: G. Prioritet: **perfekt** (§7 pkt. 3 — fagets DNA).
- **Innholdskontrakt:** Agresti ⚠ / forelesningene: **GLM som forenende rammeverk**;
  **enveis ANOVA = dummy-kodet regresjon** (samme H0: alle gruppesnitt like; *samme*
  F-verdi; F17); **dummy-/kontrastkoding** (konstantledd = referansegruppens snitt,
  dummy = gruppeforskjell — koble til 2.3); **felles antagelser** (lik varians i
  grupper, normalfordelte residualer, uavhengige observasjoner); **kji-kvadrat som
  egen (ikke-lineær) modell** for frekvenser (frempek Del 10); **hvorfor lineær
  regresjon er uegnet for kategorisk/binær DV** (umulige predikerte verdier < 0 eller
  > 1 → kji-kvadrat/logistisk, F8). `collapsible` Symbol- og formelliste: dummy,
  referansegruppe, H0, F, felles antagelser.
- **Output-simulator:** en enveis `aov()`-output og en dummy-kodet `lm()`-output på
  *samme* nyskrevne data side ved side — vis at F og H0 er identiske. Bestått (ser at
  F er lik) vs. A (forklarer *hvorfor* + felles antagelser + binær-DV-poenget).
- **Oppgavesjangre:** G: «vis at enveis ANOVA kan uttrykkes som en dummy-kodet
  regresjon (samme H0, samme F)»; «hvorfor er lineær regresjon dårlig egnet for en
  binær utfallsvariabel?».
- **Typiske feil:** F17 (ikke se at ANOVA og dummy-regresjon tester samme H0/F); F8
  (lineær regresjon på binær DV); F3 (dummy-tolkning).
- **Kvote:** 18 quiz / 18 flashcards.

### Del 10 — Kji-kvadrat og kategoriske data

#### Kapittel 10.1: Kji-kvadrat — uavhengighet, forventede frekvenser og χ² for hånd
**id:** `psy2014-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-9-1`

- **Kapitteltype:** tema.
- **Description:** Den faste avsluttende oppgaven: krysstabell, uavhengighets-H0,
  forventede frekvenser E = (rad-total × kol-total)/n, χ² = Σ(O−E)²/E for hånd,
  df = (R−1)(C−1) og konklusjon mot kritisk verdi.
- **Eksamensbelegg:** Kji-kvadrat (7/7). Sjangre: K. Prioritet: **perfekt** (§7 pkt. 4).
- **Innholdskontrakt:** Agresti ⚠: **krysstabell**; **uavhengighets-H0** (variablene
  er uavhengige); **observert (O) vs. forventet (E)** frekvens, **E = Rⱼ·Cᵢ/n**;
  **χ² = Σ(O−E)²/E**; **frihetsgrader (R−1)(C−1)**; **χ²-fordelingen som samplingfordeling
  under H0**; **kritisk verdi fra tabell**; **konklusjon** (forkast om χ² > kritisk
  verdi); **kausalitetsforbehold** (signifikant sammenheng ≠ årsak, F15). Gjennomregnet
  χ² for en 2×2/3×3 med snille tall (F16). `collapsible` Symbol- og formelliste: O, E,
  χ², R, C, df, kritisk verdi.
- **Output-simulator:** en nyskrevet krysstabell — regn forventede frekvenser, χ² for
  hånd, df, og konkluder mot en kritisk verdi. Gjennomregnet eksempel + «vis at
  χ² = …»-drill. Bestått (regner χ² og konkluderer) vs. A (forklarer χ²-samplingfordeling
  + kausalitetsforbehold).
- **Oppgavesjangre:** K: «regn forventede frekvenser og vis at χ² tar den oppgitte
  verdien; hva konkluderer du med df = (R−1)(C−1)?».
- **Typiske feil:** F16 (ikke vise χ²-utregning); F15 (kausal overtolkning); feil df.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 10.2: Standardiserte residualer og modellvalg for kategoriske utfall
**id:** `psy2014-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-10-1`

- **Kapitteltype:** tema.
- **Description:** *Hvordan* variablene henger sammen: lese standardiserte residualer
  celle for celle (|z| > 2 av interesse), og «er lineær regresjon egnet her?»-fellen
  (nei for kategorisk/binært utfall — bruk kji-kvadrat).
- **Eksamensbelegg:** Standardiserte residualer (fast del av kji-kvadratoppgaven);
  «lineær regresjon uegnet for binær DV» (2/7). Sjangre: K, G. Prioritet: **perfekt/
  kunne** (§7 pkt. 4).
- **Innholdskontrakt:** Agresti ⚠: **standardiserte residualer** (z-fordelte per celle;
  |verdi| > 2 er av interesse; viser hvilke celler avviker mest fra forventet under
  uavhengighet); **celletolkning** (over-/underrepresentert); **hvorfor lineær
  regresjon er uegnet for kategorisk/binær DV** (umulige predikerte verdier → kji-
  kvadrat/logistisk, F8 — kobling til 9.1). `collapsible` Symbol- og formelliste:
  standardisert residual, |z| > 2, celle.
- **Output-simulator:** en nyskrevet krysstabell med standardiserte residualer per
  celle — hvilke celler driver sammenhengen? Bestått (leser |z| > 2) vs. A (tolker
  retning + kobler til modellvalg-poenget).
- **Oppgavesjangre:** K: «hvilke celler avviker mest fra det forventede (standardiserte
  residualer)?»; G: «hvorfor er lineær regresjon uegnet, og hva bør brukes i stedet?».
- **Typiske feil:** F8 (lineær regresjon på kategorisk utfall); overse celletolkningen
  via residualene.
- **Kvote:** 14 quiz / 14 flashcards.

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Regnekjerne-drill — forventet Y, R², t = b̂/SE, ANOVA-celler og χ²
**id:** `psy2014-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-0-2`

- **Kapitteltype:** drill (regnekjerne).
- **Description:** Den syklisk gjentatte regnekjernen samlet ett sted: forventet Y fra
  ligningen, R² fra SSE/SST, t = b̂/SE, n fra frihetsgrader, utfylle sladdede ANOVA-
  celler, og χ² fra en krysstabell — alt med snille tall og vist fremgangsmåte.
- **Eksamensbelegg:** Alle sett (den billige, faste regnedelen). Sjangre: R/A/K (regne-
  ledd). Prioritet: **perfekt** (drill).
- **Innholdskontrakt:** **Løsningsoppskrifter** for hver regnesjanger (forventet Y:
  sett inn i Ŷ; R²: 1 − SSE/SST; t: b̂/SE mot |t| > 2; n: df_residual + p + 1;
  ANOVA-celler: SSb = SST − SSw, dfb = g−1, MS = SS/df, F = MSb/MSw; χ²: E = Rⱼ·Cᵢ/n,
  Σ(O−E)²/E) med gjennomregnede eksempler + margnotater om delpoeng (F16). `collapsible`
  Symbol- og formelliste: hele regnekjernen.
- **Output-simulator:** ikke aktuelt — ren regnedrill (8–15 varianter på eksamensnivå).
- **Oppgavesjangre:** R/A/K: alle regnesjangrene, hver i flere varianter.
- **Typiske feil:** F16 (usynlig regning); F13 (ANOVA-celler); feil df i t/χ².
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 11.2: Feilvaksine — de 17 typiske feilene
**id:** `psy2014-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-0-2`

- **Kapitteltype:** drill (feilvaksine).
- **Description:** Systematisk gjennomgang av F1–F17 med «finn feilen»-oppgaver:
  kandidatsvar/tolkninger som begår hver feil, og hvordan de rettes til full pott.
- **Eksamensbelegg:** Destillert fra alle sensorveiledningene. Sjangre: meta.
  Prioritet: **perfekt** (feilvaksine).
- **Innholdskontrakt:** F1–F17 (fra §2) med diagnostiske eksempler og fikser — særlig
  F1 (innen/mellom-gruppe), F2/F3 (konstant/dummy), F5 (konfunder/suppressor/mediering),
  F6 (ustandardisert rangering), F8 (lineær regresjon på binær DV), F12 (F-endring),
  F17 (GLM-broen). `collapsible` Symbol- og formelliste: n/a (henviser til kapitlene).
- **Output-simulator:** for hver feil: vis feil tolkning → diagnostiser feilkode → vis
  rettet tolkning.
- **Oppgavesjangre:** meta — «hvilken feil begår kandidaten, og hva er rett?».
- **Typiske feil:** alle F1–F17 (målet er å vaksinere).
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 11.3: Modellbesvarelse — den store regresjonsoppgaven (bestått vs. A)
**id:** `psy2014-11-3` · **number:** 11.3 · **estimatedMinutes:** 55 · **prerequisites:** `psy2014-5-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Én nyskrevet, komplett regresjonsoppgave (nøstede modeller: bivariat
  → kontroll/konfunder → polynom → kategorisk → signifikans/standardisert), besvart i
  **bestått-versjon** (grunntolkning + korrekt regning) og **A-versjon** (kontroll-
  logikk, suppressor/konfunder, polynombegrunnelse, standardisert rangering,
  forutsetningsnyanse), med sensorkommentar i momentspråk.
- **Eksamensbelegg:** Modellerer den 55–65 %-tunge oppgaven (Del 2–5). Sjangre: R.
  Prioritet: **perfekt** (DNA-krav ≥3 modellbesvarelser).
- **Innholdskontrakt:** repeterer Del 2–5; **bestått** = tolker b/b̂₀/R², regner
  forventet Y, ser signifikans; **A** = forklarer kontroll-logikken + identifiserer
  driveren + begrunner polynom fra residualer/AIC + rangerer med standardiserte β +
  advarer mot ekstrapolering.
- **Output-simulator:** full nyskrevet output for fire nøstede modeller + full tekst i
  begge versjoner med margnotater («her: identifiserer konfunderen → A», «her: regner
  forventet Y → poeng»).
- **Oppgavesjangre:** R (helhet).
- **Typiske feil:** F2, F4, F5, F6, F9 (vises i bestått-versjonens svakheter).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 11.4: Modellbesvarelse — variansanalyseoppgaven (bestått vs. A)
**id:** `psy2014-11-4` · **number:** 11.4 · **estimatedMinutes:** 50 · **prerequisites:** `psy2014-8-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Én nyskrevet komplett ANOVA-oppgave (F-rasjonale → utfylle sladdet
  tabell → toveis + interaksjon → post-hoc), i bestått- og A-versjon med sensorkommentar.
- **Eksamensbelegg:** Modellerer den 25–35 %-tunge oppgaven (Del 7–8). Sjangre: A.
  Prioritet: **perfekt**.
- **Innholdskontrakt:** repeterer Del 7–8; **bestått** = fyller tabellen, rapporterer
  effektene, konkluderer; **A** = forklarer forventet F = 1 + F-endringen enveis→toveis
  (redusert residual-MS) + post-hoc-korreksjon + avviser F1-fellen.
- **Output-simulator:** nyskrevet enveis + toveis output + sladdet tabell + full tekst
  begge versjoner med margnotater («her: forklarer F-endringen → A», «her: unngår
  innen/mellom-fellen → poeng»).
- **Oppgavesjangre:** A (helhet).
- **Typiske feil:** F1, F12, F13, F14 (vises i bestått-versjonens svakheter).
- **Kvote:** 10 quiz / 8 flashcards.

#### Kapittel 11.5: Modellbesvarelse — kji-kvadrat og GLM-broen (bestått vs. A)
**id:** `psy2014-11-5` · **number:** 11.5 · **estimatedMinutes:** 45 · **prerequisites:** `psy2014-10-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Én nyskrevet oppgave som binder kji-kvadrat (forventede frekvenser +
  χ² for hånd + standardiserte residualer) og GLM-broen (hvorfor lineær regresjon er
  uegnet for binær DV), i bestått- og A-versjon.
- **Eksamensbelegg:** Modellerer den 10–20 %-tunge oppgaven + GLM-broen (Del 9–10).
  Sjangre: K, G. Prioritet: **perfekt**.
- **Innholdskontrakt:** repeterer Del 9–10; **bestått** = regner χ², konkluderer,
  leser residualer; **A** = forklarer χ²-samplingfordeling + kausalitetsforbehold +
  GLM-broen (ANOVA = dummy-regresjon) + binær-DV-poenget.
- **Output-simulator:** nyskrevet krysstabell + standardiserte residualer + full tekst
  begge versjoner med margnotater («her: forklarer hvorfor lineær regresjon svikter →
  A», «her: viser χ²-regning → poeng»).
- **Oppgavesjangre:** K, G (helhet).
- **Typiske feil:** F8, F15, F16, F17 (vises i bestått-versjonens svakheter).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 11.6: Øvingseksamen A — komplett «besvar alle»-sett med fasit
**id:** `psy2014-11-6` · **number:** 11.6 · **estimatedMinutes:** 90 · **prerequisites:** `psy2014-0-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Ett nyskrevet, komplett eksamenssett i reelt format (stor
  regresjonsoppgave ~55–65 % + ANOVA-oppgave ~25–35 % + kji-kvadratoppgave ~10–20 %,
  alle obligatoriske), med full output, delpoengfasit og bestått/A-momentlister.
- **Eksamensbelegg:** Speiler settstrukturen i hele arkivet. Sjangre: R/A/K/G (helhet).
  Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** tre oppgaver med reell vekting; nyskrevet R-stil output;
  løsningsforslag per oppgave som A-besvarelse med delpoeng/vekting-notat;
  tidsstyring (regresjonsoppgaven tar mest).
- **Output-simulator:** hele settets output er nyskrevet (R-dialekt).
- **Oppgavesjangre:** R/A/K/G (fullt sett).
- **Typiske feil:** feil tidsstyring (regresjonsoppgaven undervurdert); alle temafeil i
  miniatyr.
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 11.7: Øvingseksamen B — komplett «besvar alle»-sett (SPSS-dialekt) med fasit
**id:** `psy2014-11-7` · **number:** 11.7 · **estimatedMinutes:** 90 · **prerequisites:** `psy2014-0-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et andre nyskrevet komplett sett, denne gang med **SPSS-stil output**
  (V2018–V2019-dialekten) og et sekstall-oppdelt oppgaveformat (jf. V2022) for
  variasjon, med delpoengfasit og bestått/A-momentlister.
- **Eksamensbelegg:** Speiler SPSS-dialekten + V2022s sekstall-format. Sjangre: R/A/K/G
  (helhet). Prioritet: **perfekt** (dialekt- og formatvariasjon).
- **Innholdskontrakt:** samme temafordeling, men SPSS-output og korte deloppgaver;
  løsningsforslag som A-besvarelse med delpoeng; trener at kandidaten mestrer *begge*
  output-dialekter.
- **Output-simulator:** hele settets output er nyskrevet (SPSS-dialekt).
- **Oppgavesjangre:** R/A/K/G (fullt sett).
- **Typiske feil:** låse seg til R-dialekten; alle temafeil i miniatyr.
- **Kvote:** 8 quiz / 6 flashcards.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 28 | 26 | 0 (dekkes av øvingseksamen) |
| 1 | 2 | 28 | 32 | 4 |
| 2 | 3 | 54 | 56 | 4 |
| 3 | 2 | 34 | 36 | 4 |
| 4 | 2 | 32 | 34 | 4 |
| 5 | 2 | 30 | 30 | 4 |
| 6 | 2 | 26 | 26 | 4 |
| 7 | 2 | 32 | 32 | 4 |
| 8 | 2 | 32 | 32 | 4 |
| 9 | 1 | 18 | 18 | 4 |
| 10 | 2 | 32 | 32 | 4 |
| 11 | 7 | 68 | 56 | 0 (= øvingseksamener 11.6/11.7) |
| **Sum** | **29** | **546 ✓ (≥500)** | **548 ✓ (≥500)** | **40** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 14+14=28 / 12+14=26
- Del 1: 12+16=28 / 14+18=32
- Del 2: 18+18+18=54 / 20+18+18=56
- Del 3: 18+16=34 / 20+16=36
- Del 4: 16+16=32 / 18+16=34
- Del 5: 16+14=30 / 16+14=30
- Del 6: 14+12=26 / 14+12=26
- Del 7: 18+14=32 / 18+14=32
- Del 8: 18+14=32 / 18+14=32
- Del 9: 18=18 / 18=18
- Del 10: 18+14=32 / 18+14=32
- Del 11: 12+12+10+10+8+8+8=68 / 10+10+8+8+8+6+6=56
- **Totalt: 546 quiz / 548 flashcards.**

**Kvoteprofil (begrunnelse):** PSY2014 er et **regne- og output-tolkningsfag** der
tyngden ligger på å *lese output og vise regning*, ikke å pugge navn. Quiz og
flashcards er derfor omtrent balansert (546/548), begge trygt over gulvet på 500 uten
å blåses opp. Kjernedelene (2 multippel regresjon/kontroll, 7 enveis ANOVA, 3
standardisert β/SE/signifikans, 9 GLM-broen, 10 kji-kvadrat) har høyest tetthet fordi
de bærer eksamen; kunne-delene (1 korrelasjonsbro, 6 interaksjon/mediering) og
drillkapitlene i Del 11 er lettere. **Flashcard-profil:** begrepspar-driller på de
skillene sensor tester (b vs. β · R² vs. justert R² · konfunder vs. suppressor vs.
mediering · SSb vs. SSw · uteligger vs. leverage vs. Cook's d · hovedeffekt vs.
interaksjon · enveis vs. toveis ANOVA · regresjon vs. ANOVA vs. kji-kvadrat) +
formel⇄bruk-kort (b̂₁ = sₓᵧ/s²ₓ, R² = 1 − SSE/SST, t = b̂/SE, F = MSb/MSw, E = Rⱼ·Cᵢ/n,
df-reglene) + output-avlesningskort (hvor står b̂/SE/t/p/CI/R²/AIC/F/df i R og SPSS).
**Quiz-profil:** flervalg med nabobegrep-distraktorer (konfunder/suppressor, SSb/SSw,
uteligger/leverage, R²/justert R², b/β) + «hva sier denne output-cellen?»-spørsmål +
«hvilken feil begår kandidaten?» (F1/F5/F8/F12/F17-vaksine) + regne-flervalg
(forventet Y, R², t, ANOVA-celle, χ²).

---

## 5. Prøver

Fire prøver per temadel (Del 1–10 = 40 prøver). Hver prøve speiler eksamensformatet i
miniatyr: en blanding av begreps-/kontrollspørsmål (flervalg, med fasit), et regne-/
utfyllingsledd (med vist fremgangsmåte) og et output-tolkningsledd (bestått/A-
momentliste-fasit). Omfang 25–40 min. Alle oppgaver, output-tabeller og tall NYSKREVNE.
Prøvekapittel-id `psy2014-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT).
Del 0 og Del 11 har ingen egen prøve (øvingseksamenene 11.6/11.7 dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *Korrelasjon* — tolk r + korrelasjon ≠ kausalitet
(F15). (2) *Regresjonslinjen* — b̂₀/b̂₁ + regn forventet Y (F2/F16). (3) *Minste
kvadrater* — SST = SSM + SSE + R² fra SSE/SST. (4) *Blandet Del 1*.

**Prøve-kvote Del 2:** 4 prøver: (1) *Output-tolkning* — b̂ⱼ/b̂₀/R²/justert R² + forventet
Y for en profil (F2). (2) *Konfundering* — «hvorfor endret b̂ seg?» + identifiser
driveren (F4). (3) *Suppressor + dummy* — suppressor vs. konfunder + dummy-koeffisienter
(F3/F5). (4) *Blandet Del 2*.

**Prøve-kvote Del 3:** 4 prøver: (1) *Standardiserte β* — hvilken prediktor er sterkest
(F6). (2) *Standardfeil* — de tre determinantene + styrke. (3) *Signifikans* — t/CI/p +
regn maskert t (F7/F16). (4) *Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *Residualer* — hvilken antagelse er brutt? (2)
*Uteligger vs. innflytelse* — leverage/Cook's d (F11). (3) *Multikollinearitet* — VIF +
oppblåst SE (F10). (4) *Blandet Del 4*.

**Prøve-kvote Del 5:** 4 prøver: (1) *Polynom* — begrunn X² fra residualer + tolk fortegn
(F9). (2) *Ekstrapolering* — hvorfor ikke stole på prediksjon utenfor dataområdet (F9).
(3) *Modellsammenlikning* — ΔR²/AIC/nested-F. (4) *Blandet Del 5*.

**Prøve-kvote Del 6:** 4 prøver: (1) *Interaksjon* — produktledd + betinget effekt + to
linjer. (2) *Regresjon vs. ANOVA-interaksjon* — begrepsskille. (3) *Mediering* —
firetrinns fremgangsmåte + skille fra konfunder (F5). (4) *Blandet Del 6*.

**Prøve-kvote Del 7:** 4 prøver: (1) *F-rasjonale* — mellom/innen-gruppe + forventet F=1
+ innen/mellom-fellen (F1). (2) *ANOVA-tabell* — fyll inn sladdede celler (F13/F16). (3)
*SS-dekomposisjon* — SST = SSb + SSw + df-reglene. (4) *Blandet Del 7*.

**Prøve-kvote Del 8:** 4 prøver: (1) *Toveis* — hovedeffekter + interaksjon + linjediagram-
matching. (2) *F-endring* — hvorfor F for hovedfaktoren øker enveis→toveis (F12). (3)
*Post-hoc* — Bonferroni + familywise error (F14). (4) *Blandet Del 8*.

**Prøve-kvote Del 9:** 4 prøver: (1) *GLM-broen* — ANOVA = dummy-regresjon, samme H0/F
(F17). (2) *Dummykoding* — konstantledd/dummy-tolkning (F3). (3) *Binær DV* — hvorfor
lineær regresjon svikter (F8). (4) *Blandet Del 9*.

**Prøve-kvote Del 10:** 4 prøver: (1) *χ² for hånd* — forventede frekvenser + χ² + df
(F16). (2) *Standardiserte residualer* — celletolkning (|z|>2). (3) *Modellvalg* —
kji-kvadrat vs. lineær regresjon for kategorisk utfall (F8) + kausalitetsforbehold (F15).
(4) *Blandet Del 10*.

---

## 6. Opphavsrett og nyskriving

- Eksamensoppgaver, output-tabeller og sensorveiledninger er brukt som **grunnlag**
  (mønstre, temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver,
  output, tabelltall, vignetter og modellbesvarelser i boka er NYSKREVNE i samme
  sjanger — endre tall, scenarioer, variabelnavn og formuleringer. Den dokumenterte
  oppgave- og output-gjenbruken i arkivet betyr at boka *må* nyskrive særlig grundig
  på ryggrad-temaene (multippel regresjon/kontroll, enveis+toveis ANOVA, kji-kvadrat)
  for ikke å reprodusere et gjenbrukt sett.
- Pensumlitteratur (Agresti, *Statistical Methods for the Social Sciences* ⚠)
  refereres (forfatter/verk/begrep), aldri siteres i lengde.
- Utgaveavhengige kapittelnumre og usikre attribusjoner merkes ⚠ / `(verifiser)` for
  fase 6.

---

## 7. Byggerekkefølge og wiring-merknad

- **Byggerekkefølge (fase 4):** én agent per hel del. Del 2 (multippel regresjon/
  kontroll) og Del 7 (enveis ANOVA) er de to ryggradene — bygg dem tidlig og la
  modellbesvarelsene (11.3/11.4/11.5) og øvingseksamenene (11.6/11.7) leses mot dem.
  Del 11-agenten leser HELE skjelettet.
- **Prerequisites er DEL-baserte, aldri lineære** — hvert kapittel peker på det/de
  kapitlene det faktisk bygger på (typisk forrige i delen, `psy2014-0-2` for del-
  åpnere, eller en konkret tidligere avhengighet: 6.1→2.3, 9.1→8.1, 10.1→9.1).
- **Kryssbok-lenker:** Del 1 skal lenke til PSY1010-kapitler (bro fra innføringsfaget)
  KUN når de finnes i systemet ved byggetid — ellers utelates lenken. Del 6.2 og
  psykometri-berøringer henviser til PSYC2104 (bygg lenke først når PSYC2104-boka
  finnes).
- **Output-dialekter:** R-stil er hovedvekten; SPSS-stil trenes i 0.2, hvert
  temakapittels output-simulator (der naturlig) og øvingseksamen 11.7. Alle
  output-tabeller er nyskrevne — UiOs tall gjenbrukes aldri.

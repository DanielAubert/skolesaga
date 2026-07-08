# Eksamensanalyse: TMA4150 Algebra (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **~34 filer** i arkivet, hvorav **~24 lot seg tekst-utvinne** og danner et **kvantitativt grunnlag på 15 velkarakteriserte eksamenssett** (V2014-kont, V2015, V2016, V2017, V2018, V2019, V2020, V2021, V2022, Kont2023, V2023, V2024, Kont2024, V2025, Kont2025) pluss et samlearkiv med eldre MA2201/TMA4150-sett (2007-2009-æraen). **Offisielle/utfyllende løsningsforslag** ble lest grundig for V2018, V2019, V2020, V2024, V2025 (typesatte fasiter) samt Kont2023 og enkelte kont-sett (håndskrevne, OCR-utvunnet). De siste ~8 årene (2018-2025) er kartlagt oppgave-for-oppgave; eldre sett er skummet for tradisjon og temaspekter. **Alt innhold er omskrevet med egne ord** - ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teoremnavn og standardnotasjon (Sylow, Lagrange, `Z_n[x]/(f)`, `A_n`, `D_n`) er standard fagnotasjon og ikke opphavsrettslig beskyttet.

> **Hovedfunn (les dette først):** TMA4150 er et **svært stabilt og forutsigbart** emne med en nesten uforanderlig oppskrift: **10 like-vektede deloppgaver, 4 timer, hjelpemiddelkode D** (ingen trykte/håndskrevne hjelpemidler; kun enkel kalkulator - som knapt trengs). Faste instruks: **«Alle svar skal begrunnes.»** Faget er **utpreget bevistungt** - anslagsvis **75-85 % av poengene ligger i bevis, begrunnelser og strukturelle argumenter**, ikke i tallregning. Fem søyler bærer hvert sett: **(1) endelige abelske grupper og gruppestruktur** (klassifikasjon opp til isomorfi, enhetsgrupper `U(Z_n)`, ordensregning), **(2) permutasjonsgrupper** (disjunkte sykler, orden = minste felles multiplum, like/odde, `A_n`/`D_n`, generatorer), **(3) undergrupper/normalitet/kvotienter/homomorfier** (undergruppetest, kjerne er normal, fundamentalteoremet for gruppehomomorfier, isomorfisetninger), **(4) Sylow-teori og enkelhet** (tell Sylow-`p`-undergrupper, vis at gruppa ikke er simpel), og **(5) ring- og kroppsteori** (irredusible polynomer over `Z_p`, konstruer endelig kropp `Z_p[x]/(f)`, maksimale/primidealer, integritetsområder). Nesten hvert sett har i tillegg en **Burnside-/gruppevirknings-tellingoppgave** (fargelegg en figur; tell baner). **Galois-teori i egentlig forstand testes ikke** - «kroppsteori» stopper ved konstruksjon av endelige kropper, underkropper og syklisitet til `F^*`. Den viktigste utviklingen: eldre sett (MA2201, til ~2016) inkluderte **tallteori** (Euler `φ`, kongruenser, GCD) og hadde **utdelt figur som hjelpemiddel (kode B)**; moderne TMA4150 (fra ~2018) har droppet tallteorien og gått til **kode D uten vedlegg**, med figurene trykt i selve oppgaven.

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (09:00-13:00)**, bokstavkarakter A-F, 7,5 studiepoeng. Fast instruks på hvert sett: **«Eksamenssettet består av ti (del)oppgaver som teller likt. Alle svar skal begrunnes.»** Ren fasit uten resonnement gir ikke uttelling - dette er et bevisfag der *argumentet* er svaret.

### Formathistorikk

| Periode | Emnekode | Struktur | Hjelpemidler |
|---|---|---|---|
| ~2007-2013 | **MA2201** (Algebra og tallteori) | 7-8 oppgaver, «alle svar skal begrunnes» | Bestemt kalkulator (HP30S) |
| 2014-2017 | **MA2201/TMA4150** (overgang) | **10 like-vektede deloppgaver** (2014/2015); 2016/2017 færre hovedoppgaver med deloppgaver | 2014/15: enkel kalkulator; **2016/2017: kode B - enkel kalkulator + utdelt figur** (for Burnside-oppgaven) |
| 2018-2019 | **Ren TMA4150** | **10 like-vektede (del)oppgaver** (f.eks. 1, 2, 3a, 3b, 4, 5a, 5b, 6, 7a, 7b); engelsk oversettelse vedlagt | **Kode D: ingen trykte/håndskrevne hjelpemidler**, kun enkel kalkulator |
| 2020 | TMA4150 | 10 deloppgaver som teller likt | **«Alle» (åpen bok)** - covid-anomali; ellers samme faglige innhold |
| 2021-2025 | TMA4150 | 10 deloppgaver som teller likt; figurer trykt i oppgaven | **Kode D**, enkel kalkulator |

### Konstanter på tvers av alle år
- **10 like-vektede deloppgaver, 4 timer, ingen flervalg.** Avkryssingsboksen «skal ha flervalgskjema» på trykk-informasjonsarket er skjemametadata og er aldri i bruk.
- **Fem faste søyler dekker bredden hvert år:** (1) abelsk gruppestruktur/isomorfiklassifikasjon, (2) permutasjoner, (3) undergruppe/normal/kvotient/homomorfi, (4) Sylow/enkelhet, (5) ring/kropp med endelig-kropp-konstruksjon. En Burnside-tellingsoppgave kommer i tillegg de fleste år.
- **Ingen formelsamling eller formelark deles ut** (i motsetning til analysefagene som TMA4135). Kode D betyr at studenten må kunne alle definisjoner, teoremer og standardargumenter **utenat** og kunne anvende dem formelt. Dette er den vesentligste forskjellen fra NTNUs analyse-/statistikkemner.
- **Deloppgavene er ofte kjedet:** en tidlig deloppgave etablerer et resultat (f.eks. «finn de irredusible polynomene av grad 2») som brukes i den neste («konstruer en kropp med 9 elementer»); eller a) beviser en generell egenskap som b) anvender på et konkret tilfelle.

### Utviklingstrekk (viktigste strukturfunn)
1. **Tallteorien er faset ut.** Eldre MA2201-sett (til ~2013) hadde egne oppgaver i Eulers `φ`-funksjon, lineære kongruenser (`9x ≡ 7 mod 12`) og siste-siffer-oppgaver. Moderne TMA4150 (2018+) er **ren abstrakt algebra** - tallteori dukker bare opp indirekte (gcd for enheter i `Z_n`, orden modulo `n`).
2. **Hjelpemiddel-innstramming.** 2016/2017 hadde «utdelt figur» (kode B) fordi Burnside-oppgaven trengte en figur; fra 2018 trykkes figuren i oppgaven og hjelpemiddelkoden er **D (ingenting)**. En bok bør trene på et fag der *alt* må huskes.
3. **Kreativ innpakning av standardsjangre.** De senere settene pakker faste oppgavetyper inn i fortellinger: Burnside-tellingen blir til fotball-VM-baller (2022), glassmesterens blyvinduer (2017/2021), sultanens juvel-terninger (2016) eller lokalhistorielagets roser (2019). Selve matematikken er alltid den samme kjernen (tell baner via Burnside/Cauchy-Frobenius). Boken bør avmystifisere innpakningen.
4. **Matrisegrupper som gjennomgangstema.** `GL(2, Z_p)`, `SL(2, R)`, øvre-triangulære matriser og Heisenberg-lignende `3×3`-grupper brukes gjentatte ganger som konkrete arenaer for undergruppe-/normal-/kvotient-/Sylow-argumenter (2015, 2017, 2020, kont, 2024, 2025).

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én deloppgave. Basert på **15 velkarakteriserte sett**: Periode A (2014-kont, 2015, 2016, 2017 - overgang MA2201/TMA4150, 4 sett), Periode B (2018, 2019, 2020, 2021 - ren TMA4150, 4 sett), Periode C (2022, Kont2023, 2023, 2024, Kont2024, 2025, Kont2025 - 7 sett). Eldre MA2201-arkiv (2007-2009) er skummet og bekrefter samme mønster (pluss tallteori som siden er faset ut).

| Tema | A (4) | B (4) | C (7) | **Gjenganger-score** |
|---|---|---|---|---|
| **Ring/kropp: irredusible polynomer over `Z_p` + konstruer endelig kropp** `Z_p[x]/(f)` | 4 | 4 | 7 | **15/15 = 100 %** |
| **Undergruppe/normal/kvotient + homomorfi/fundamentalteoremet** | 4 | 4 | 7 | **15/15 = 100 %** |
| **Permutasjoner** (disjunkte sykler, orden=lcm, like/odde, `A_n`, generatorer) | 3 | 4 | 6 | **13/15 = 87 %** |
| **Abelsk gruppestruktur** (klassifikasjon opp til isomorfi, `U(Z_n)`, høyeste orden) | 3 | 4 | 5 | **12/15 = 80 %** |
| **Sylow-teori + «vis at G ikke er simpel»** | 3 | 3 | 5 | **11/15 = 73 %** |
| **Gruppevirkning / Burnside-telling** (fargelegg figur, tell baner/isotropi) | 3 | 3 | 3 | **9/15 = 60 %** |
| **Konstruer/verifiser en gruppe fra grunnen** (binæroperasjon: aksiomsjekk) | 2 | 1 | 4 | **7/15 = 47 %** |
| **Matrisegruppe som arena** (`GL(2,Z_p)`, `SL(2,R)`, triangulære) | 3 | 1 | 3 | **7/15 = 47 %** |
| **`F^*` er syklisk / finn generator for endelig kropps enhetsgruppe** | 1 | 3 | 3 | **7/15 = 47 %** |
| **Lagrange / ordensregning / syklisk-kriterium** (ofte som verktøy) | 2 | 2 | 3 | **7/15 = 47 %** |
| **Maksimale/primidealer** (definisjon, `(f)` maksimal ⟺ `f` irredusibel) | 2 | 2 | 3 | **7/15 = 47 %** |
| **Isomorfisetningene** (2./3., eller `G/(H∩K) ↪ G/H × G/K`) | 2 | 1 | 3 | **6/15 = 40 %** |
| **Integritetsområde** (endelig integritetsomr. er kropp; `R^*`) | 1 | 1 | 3 | **5/15 = 33 %** |
| **Kommutator / oppløsbar / komposisjonsrekke** | 1 | 2 | 0 | **3/15 = 20 %** |
| **Senter `Z(G)`** (av `S_n`, av `G` med `|G|=p^n`) | 1 | 0 | 2 | **3/15 = 20 %** |
| **Frobenius-endomorfi `a↦a^p` / underkropper av `GF(p^n)`** | 0 | 0 | 2 | **2/15 = 13 %** |
| **`R/Z ≅ U`** (enhetssirkelen; standard homomorfi-oppgave) | 1 | 0 | 1 | **2/15 = 13 %** |
| **Cauchys teorem** (element av orden `p`) | 0 | 1 | 1 | **2/15 = 13 %** |
| **Boolesk ring / spesialringegenskaper** | 0 | 0 | 1 | **1/15 = 7 %** |
| **Tallteori** (Euler `φ`, kongruenser, gcd) | (eldre) | 0 | 0 | **kun MA2201-æraen (faset ut)** |

**Viktigste funn:**
1. **To temaer er praktisk talt garantert på hvert eneste sett (100 %):** (a) en ring/kropp-oppgave som finner irredusible polynomer over `Z_p` og konstruerer/analyserer en endelig kropp `Z_p[x]/(f)`; (b) en undergruppe/normal/kvotient/homomorfi-oppgave med fundamentalteoremet for gruppehomomorfier. Disse to alene bærer 20-30 % av settet.
2. **Permutasjoner og abelsk klassifikasjon (80-87 %)** er nesten like sikre og er de mest «mekaniske» temaene - her henter bestått-sjiktet trygge poeng (skriv `σ` på syklform, orden = lcm, tell paritet, list opp `Z_...`-produktene).
3. **Sylow + «ikke simpel» (73 %)** er den klassiske «karakterskiller»-oppgaven: tell `n_p` via de to Sylow III-kravene, konkluder normalitet/enkelhet. Nesten alltid formulert som et bevis.
4. **Burnside-tellingen (60 %)** er den ene oppgaven med et konkret tallsvar, men krever korrekt oppsett av gruppevirkningen og utregning av fikspunktmengdene `|X_g|`. Ofte kreativt innpakket.
5. **Galois-teori i tradisjonell forstand (kroppsutvidelser, minimalpolynom over `Q`, Galois-gruppen, løsbarhet med radikaler) forekommer IKKE.** Emnets kroppsteori er begrenset til endelige kropper: konstruksjon, orden `p^n`, syklisk `F^*`, underkropper og Frobenius. Dette er et sentralt avgrensningsfunn for boken.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med fasitens foretrukne bevis-/løsningsmetode (verifisert mot de typesatte løsningsforslagene der de finnes).

### A. Klassifiser endelige abelske grupper opp til isomorfi
- **Krav:** Primtallsfaktoriser ordenen `n = p1^a1 · ... `; **fundamentalteoremet for endeliggenererte abelske grupper** gir én isomorfiklasse per partisjon av hver eksponent. List alle `Z_{p^k}`-produkter. Ofte kobles dette til et konkret objekt: «hvilken av disse er `U(Z_n)` / `Z12×Z8 / ⟨(3,4)⟩` isomorf med?» - da må man **finne et element av høyest orden** (eller sjekke om gruppa er syklisk) for å velge riktig klasse.
- **Frekvens:** 80 %. Fast åpningsoppgave.
- **Omskrevet eksempel:** «Beskriv alle abelske grupper av orden 16 opp til isomorfi, og avgjør hvilken `U(Z_34)` er isomorf med.» (Kont2025)

### B. Enhetsgruppen `U(Z_n)` og dens struktur
- **Krav:** Enhetene er `{a : gcd(a,n)=1}`. Skriv dem opp, regn orden til hvert element (bruk Lagrange: ordenen deler `|U(Z_n)|`), avgjør syklisitet og match mot en abelsk-klassifikasjonsliste. Fasiten regner ofte en full ordenstabell (V2020: `U(Z_16) ≅ Z_4×Z_2`).
- **Frekvens:** del av abelsk-blokken; ~6/15.

### C. Permutasjoner: syklform, orden, paritet
- **Krav:** Skriv `σ` som produkt av **disjunkte** sykler; da er **ord(σ) = lcm** av syklengdene. Paritet: skriv som produkt av transposisjoner - en `k`-sykel er `k-1` transposisjoner; like/odde bestemmer medlemskap i `A_n`. Ofte spørres om **undergruppen `⟨σ⟩`** eller `⟨σ, τ⟩` generert av flere elementer (list elementene, finn orden). «Finnes et element av orden `m` i `S_n`?» besvares ved partisjoner av `n` med lcm = `m`.
- **Frekvens:** 87 %.
- **Omskrevet eksempel:** «Skriv `(1,3,5,4)(1,3,4,6)(3,4)` som disjunkte sykler og finn ordenen.» (Kont2025)

### D. Undergruppetest + normalitet
- **Krav:** **Undergruppetesten** (ikke-tom + lukket under produkt og invers, eller ettrinns `ab^{-1}∈H`). For normalitet: vis `gHg^{-1}=H` (eller `⊆`) for alle `g`, ofte ved konkret matriseregning; eller vis at `H` er kjernen til en homomorfi. Standard motargument: finn ett konkret `g` med `gHg^{-1}⊄H` for å vise **ikke**-normal (V2020: `K` normal i `H` men ikke i `G`).
- **Frekvens:** 100 % (del av kjerneblokken).

### E. Homomorfi + fundamentalteoremet for gruppehomomorfier
- **Krav:** Definer/gjenkjenn en homomorfi `φ`, vis homomorfiegenskapen `φ(ab)=φ(a)φ(b)`, regn ut **kjernen** `Ker φ` (som automatisk er normal), vis **surjektivitet**, og konkluder via **fundamentalteoremet** `G/Ker φ ≅ Im φ`. Den kanoniske teknikken for å identifisere en kvotientgruppe. Klassikeren `R/Z ≅ U` (enhetssirkelen) via `r ↦ e^{2πir}`.
- **Frekvens:** 100 %. Fasiten navngir teoremet eksplisitt.
- **Omskrevet eksempel:** «Vis at `R/Z` er isomorf med enhetssirkelen `U`.» (2014, 2024)

### F. Sylow-teori: tell `n_p` og vis «ikke simpel»
- **Krav:** For `|G|=p^a·m`: **Sylow III** gir `n_p ≡ 1 (mod p)` og `n_p | |G|` (eller `n_p | m`). Kryss av divisorene som oppfyller kongruensen; hvis `n_p=1` er Sylow-`p`-undergruppen **normal** ⟹ `G` ikke simpel. Standardargumentet for enkelhet. Varianter: `|G|=p^n` (bruk klasseligningen / `|X|≡|X_G| mod p` og senter `Z(G)≠{e}`); `|G|=pq`, `|G|=p^{t}m` med `m<p`.
- **Frekvens:** 73 %. Den definerende «bevis»-oppgaven.
- **Omskrevet eksempel:** «Vis at ingen gruppe av orden 55 er simpel.» (Aug2024)

### G. Gruppevirkning + Burnside (baneopptelling)
- **Krav:** **Burnsides formel** (Cauchy-Frobenius): antall baner `= (1/|G|)·Σ_{g∈G} |X_g|`, der `X_g` er fikspunktmengden. Identifiser symmetrigruppen (ofte `D_n` eller rotasjonsgruppen til et polyeder/tetraeder), regn `|X_g|` for hver konjugasjonsklasse (`= antall farger^{antall sykler i g's virkning}`), sett inn. Delspørsmål om **isotropiundergruppen** `G_x` og **banen** til et konkret element forekommer. Kreativt innpakket (VM-baller, glassvinduer, terninger, roser).
- **Frekvens:** 60 %. Den ene oppgaven med konkret tallsvar.
- **Omskrevet eksempel:** «Hvor mange måter kan hjørnene i en regulær femkant fargelegges med 4 farger, opp til symmetriene i `D_5`?» (2018 → svar 136)

### H. Irredusible polynomer over `Z_p`
- **Krav:** Et polynom av **grad 2 eller 3** er irredusibelt over en kropp ⟺ det har **ingen røtter** (test alle `p` elementer). For **grad 4-5** holder ikke rot-testen alene: man må også utelukke faktorisering i lavere irredusible faktorer (grad 2·2 osv.) - fasiten teller de rot-frie polynomene og trekker fra de som er produkt av to irredusible andregradspolynomer (V2019: 8 rot-frie grad-5, men 2 er redusible ⟹ 6 irredusible). Ofte begrenset til **moniske** polynomer.
- **Frekvens:** 100 % (del av ring/kropp-blokken).
- **Omskrevet eksempel:** «Finn alle de moniske irredusible andregradspolynomene i `Z_3[x]`.» (V2020, Aug2024)

### I. Konstruer en endelig kropp `Z_p[x]/(f)`
- **Krav:** Velg et irredusibelt `f` av grad `n`; da er `(f)` et **maksimalt ideal** ⟹ faktorringen er en **kropp** med `p^n` elementer. Fasiten sier eksplisitt: irredusibel ⟹ `(f)` maksimal ⟹ kvotienten er kropp (via resultatet «`R/M` kropp ⟺ `M` maksimal»). Ofte etterfulgt av: vis at et gitt element (`x+I` eller `x+1+I`) **genererer** den sykliske enhetsgruppen `F^*` (sjekk at ordenen ikke er en ekte divisor av `p^n − 1`).
- **Frekvens:** 100 %.
- **Omskrevet eksempel:** «Konstruer en kropp med 9 elementer.» (V2025, Aug2024) / «Vis at `x+I` genererer `F^*` i `Z_3[x]/(x^3+2x+1)`.» (2023)

### J. Ideal-teori: maksimale og primidealer
- **Krav:** Definer maksimalt ideal (`M ⊊ R`, ingen ideal strengt mellom `M` og `R`). Standardresultater: `R/I` integritetsområde ⟺ `I` primideal; `R/I` kropp ⟺ `I` maksimalt; ⟹ maksimalt ⟹ prim. Konkret: vis at `(10)` ikke er maksimalt i `Z` (ligger i `(2)` og `(5)`); `(f)` maksimalt ⟺ `f` irredusibel i `F[x]`.
- **Frekvens:** 47 %.

### K. Endelig integritetsområde ⟹ kropp
- **Krav:** For `a≠0` i endelig integritetsområde `R`: avbildningen `x↦ax` er injektiv (ingen nulldelere) ⟹ surjektiv (endelig mengde) ⟹ `1` treffes ⟹ `a` er en enhet. Standard kortbevis. Beslektet: `α^{|F|}=α` for alle `α` i endelig kropp (Fermat/Lagrange i `F^*`).
- **Frekvens:** 33 %.

### L. Aksiomverifikasjon: vis at `(G, ∗)` er en gruppe
- **Krav:** For en eksplisitt definert operasjon (`a∗b = ab/7`, `a∗b=a+b+ab`, matriseprodukt, komponentvis regel på `Q×Q`): sjekk **lukkethet, assosiativitet, identitet, invers** (og kommutativitet for abelsk). Fasiten går punkt for punkt; den subtile delen er ofte å vise lukkethet (at inversen faktisk ligger i `G`, at operasjonen unngår forbudte verdier).
- **Frekvens:** 47 %.

### M. Isomorfisetningene / produkt- og kvotient-argumenter
- **Krav:** 2. og 3. isomorfisetning; `G/(H∩K) ↪ (G/H)×(G/K)` (injektiv, med isomorfikriterium); `HK` er undergruppe når `K` normal. Kommutatorundergruppen `C(G)`: `G/N` abelsk ⟺ `C(G)⊆N`.
- **Frekvens:** 40 %.

### N. Endelige kropper: Frobenius, underkropper (avansert)
- **Krav:** Frobenius-endomorfien `φ(a)=a^p` er en ringhomomorfi (binomialformelen: `(a+b)^p=a^p+b^p` i karakteristikk `p`); den er en automorfi av `GF(p^n)`; fikspunktmengdene `E^{φ^t}` er underkroppene, én per divisor `t | n`. Krever induksjon og strukturforståelse.
- **Frekvens:** 13 % (kun de tyngste settene, f.eks. 2022, Kont2025).

### O. Oppløsbare grupper / komposisjonsrekker / senter
- **Krav:** Definer oppløsbar/komposisjonsrekke; vis at `p`-grupper og `D_n` er oppløsbare (bruk Sylow I / syklisk normal undergruppe). `Z(S_n)={e}` for `n≥3` (hvilke elementer kommuterer med alle transposisjoner?). List komposisjonsrekker for `Z_7×Z_7` (tell undergrupper av orden 7).
- **Frekvens:** senter 20 %, oppløsbar/komposisjon 20 %.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de typesatte fasitene)
1. **Alle svar skal begrunnes.** Ordrett instruks på hvert sett. I et bevisfag *er* begrunnelsen svaret; et korrekt tall uten gyldig argument gir lite.
2. **Teorem- og definisjonsnavn skal bæres eksplisitt:** «fundamentalteoremet for gruppehomomorfier», «Lagranges teorem», «Sylow III», «Cauchys teorem», «undergruppetesten», «Burnsides formel», «fundamentalteoremet for endeliggenererte abelske grupper». De typesatte fasitene skriver dem ut hver gang og henviser til «resultater gjennomgått i kurset».
3. **Formell bevisføring forventes:** en undergruppe vises ved å sjekke *alle* aksiomene (ikke-tom, lukket, invers); normalitet ved `gHg^{-1}=H` for **alle** `g` (ikke bare eksempler); irredusibilitet av grad 4-5 ved å utelukke **alle** faktoriseringstyper, ikke bare røtter. Kvantorer og «for alle»/«det finnes» skal håndteres riktig.
4. **Deloppgavegjenbruk er designet inn:** «finn de irredusible polynomene» i a) mates rett inn i «konstruer kroppen» i b); en generell egenskap i a) anvendes på et konkret objekt i b). Å se koblingen premieres.
5. **Ti like-vektede deloppgaver:** ingen eksplisitt poengvekting utover at hver av de ti teller likt. Det finnes ingen offentlig prosentbasert karakterskala i settene (til forskjell fra TMA4135); karakteren settes helhetlig av sensor.
6. **Konkrete tellinger skal stemme eksakt:** Burnside-svaret er et heltall (136, 6273, ...); en feil i én `|X_g|` gir feil endesvar. Fasiten viser hele oppsettet.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske sjangrene: skriv permutasjon på syklform + orden + paritet; list abelske grupper via faktorisering; sett opp (men fullfør ikke nødvendigvis) undergruppe-/homomorfisjekker; test røtter i lavgrads polynomer.
- **Midtsjiktet** behersker i tillegg: fullstendig undergruppe-/normalitetsbevis med generelle `g`; korrekt Sylow-telling og enkelhetskonklusjon; konstruksjon av endelig kropp med korrekt begrunnelse (irredusibel ⟹ maksimal ⟹ kropp); korrekt Burnside-oppsett med alle fikspunktmengder.
- **Toppsjiktet** kjennetegnes av: (i) fullstendig, kvantor-korrekt bruk av **fundamentalteoremet for gruppehomomorfier** (definer `φ`, homomorfi, kjerne, surjektivitet); (ii) å utelukke **alle** faktoriseringstyper i høygrads irredusibilitet; (iii) å vise at et element **genererer** `F^*` ved å eliminere alle ekte divisor-ordener; (iv) rene isomorfisetning-argumenter og `G/(H∩K)↪G/H×G/K`; (v) de tyngste struktursjangrene (Frobenius/underkropper, oppløsbarhet, komposisjonsrekker) med induksjon og korrekt teoribruk; (vi) å se og utnytte deloppgave-koblingene.

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Normalitet vist bare med eksempler:** å sjekke `gHg^{-1}=H` for noen få `g` i stedet for alle - eller motsatt, å konkludere normal uten å teste et `g` utenfor `H`. Fasiten viser enten det generelle argumentet eller finner ett moteksempel.
2. **Irredusibilitet for grad ≥4 stoppet ved rot-testen:** et rot-fritt fjerde-/femtegradspolynom kan likevel faktorisere i to andregradsfaktorer. Man må eksplisitt utelukke slike produkter (klassisk felle i V2019/V2015-grad 4-5-oppgavene).
3. **Feil i Sylow-tellingen:** å bruke feil av de to Sylow III-kravene (`n_p | |G|` **og** `n_p ≡ 1 mod p`), eller å glemme at `n_p=1` ⟹ normal ⟹ ikke simpel.
4. **Orden av permutasjon uten disjunkthet:** å regne lcm av syklengder *før* sykleneer gjort disjunkte, eller å telle paritet feil (glemme at en `k`-sykel er `k-1` transposisjoner).
5. **Glemt å vise surjektivitet/kjerne i fundamentalteoremet:** å påstå `G/N≅H` uten å verifisere at homomorfien er surjektiv og at `N` faktisk er kjernen.
6. **Feil valg av isomorfiklasse:** å liste de abelske gruppene korrekt, men velge feil klasse fordi man ikke sjekket høyeste elementorden / syklisitet i det konkrete objektet.
7. **Burnside: feil fikspunkttelling:** feil antall sykler i en gruppevirkning ⟹ feil eksponent i `farger^{sykler}` ⟹ feil banetall. En enkelt feil `|X_g|` velter endesvaret.
8. **Ideal-forveksling:** å blande maksimalt og primideal, eller å glemme at maksimalt ⟹ prim (men ikke omvendt), eller å tro `{0}` er maksimalt i `Z_p[x]`.
9. **Aksiomsjekk som hopper over lukkethet/invers-tilhørighet:** i «vis at `(G,∗)` er en gruppe» er den subtile delen ofte at inversen faktisk ligger i `G` (unngå forbudt verdi som `-1`).
10. **Generator-argument ufullstendig:** for «`α` genererer `F^*`» må man vise at `α` **ikke** har noen av de ekte divisor-ordnene av `p^n − 1` - ikke bare regne noen få potenser.
11. **Tidsfelle:** de bevistunge struktur-/Sylow-/Frobenius-oppgavene tar lang tid; siden alle ti deloppgaver teller likt, lønner det seg å sikre de mekaniske (permutasjon, abelsk klassifikasjon, kropp-konstruksjon) *først*.

---

## 6. Teorem-, notasjons- og formelapparat

### Ingen hjelpemidler - alt må kunne aktivt (kode D)
I motsetning til analysefagene deles **ingen formelsamling** ut. Studenten må kunne definisjoner, teoremer og standardbevis utenat og anvende dem formelt. Boken bør derfor bygge et **aktivt reservoar** av følgende:

**Gruppeteori:**
- **Lagranges teorem** (`ord(g) | |G|`; indeks; konsekvenser for grupper av primtallsorden/`p^2`).
- **Fundamentalteoremet for endeliggenererte abelske grupper** (klassifikasjon som produkt av `Z_{p^k}`).
- **Cauchys teorem** (element av orden `p` når `p | |G|`).
- **Sylow-teoremene I-III** (eksistens, konjugasjon, `n_p ≡ 1 mod p` og `n_p | m`).
- **Fundamentalteoremet for gruppehomomorfier** (`G/Ker φ ≅ Im φ`) + **2. og 3. isomorfisetning**.
- **Undergruppetesten** (ett- og totrinns); kjerne er normal; `gHg^{-1}` er undergruppe isomorf med `H`.
- **Permutasjoner:** disjunkte sykler, `ord = lcm`, paritet, `A_n`, `D_n` (dihedral), `S_n` generert av transposisjoner / av `(1,2)` og en `n`-sykel; `Z(S_n)={e}` for `n≥3`.
- **Gruppevirkning:** bane, isotropi (stabilisator), bane-stabilisator-teoremet, **Burnsides formel** `#baner = (1/|G|)Σ|X_g|`, klasseligningen `|X|≡|X_G| mod p`.
- **Kommutatorundergruppe, oppløsbare grupper, komposisjonsrekker** (Jordan-Hölder-perspektiv).

**Ring- og kroppsteori:**
- **Idealer:** definisjon, generert ideal `(a)`, maksimalt/primideal; `R/I` kropp ⟺ `I` maksimalt; `R/I` integritetsområde ⟺ `I` primideal; maksimalt ⟹ prim.
- **Polynomringer `F[x]`:** grad, divisjonsalgoritme, faktorteoremet (`α` rot ⟺ `(x-α) | f`), maks `n` røtter for grad `n`, irredusibilitet (rot-test kun gyldig for grad 2-3).
- **Endelige kropper:** `Z_p[x]/(f)` med `f` irredusibel av grad `n` er en kropp med `p^n` elementer; `F^*` er **syklisk**; `α^{|F|}=α`; Frobenius `a↦a^p`; underkropper svarer til divisorer av `n`.
- **Enheter og integritetsområder:** `U(Z_n)`, `R^*` er abelsk gruppe, endelig integritetsområde er kropp.

### Notasjonskonvensjoner boken bør speile
`Z_n` sykliske grupper; `U(Z_n)` / `Z_n^*` enheter; `S_n`, `A_n`, `D_n`; `⟨g⟩` generert undergruppe; `ord(g)`; `[G:H]` indeks; `H ◁ G` normal; `G/N` kvotient; `Ker φ`, `Im φ`; `Z(G)` senter; `n_p` antall Sylow-`p`-undergrupper; `(f)` ideal generert av `f`; `Z_p[x]/(f)`; `GF(p^n)`; `F^*` enhetsgruppe; disjunkt syklnotasjon `(1,4,6)(3,8,7,5)`; Burnside `X_g`, `G_x`.

---

## 7. Prognose og prioritering

> TMA4150 er blant de mest forutsigbare emnene i arkivet: samme fem søyler hvert år, uendret 10-deloppgavemal, ingen hjelpemidler. Prognosen vekter de faste bevissjangrene tyngst. **Merk balansen: dette er et bevisfag - trening bør prioritere korrekt, fullstendig argumentasjon fremfor regnehastighet.**

### Nivå 1 - må beherskes perfekt (bærer eksamenen)
1. **Ring/kropp: irredusible polynomer over `Z_p` + konstruer endelig kropp `Z_p[x]/(f)`** - 100 %. Rot-test (grad 2-3), full faktoriseringsutelukkelse (grad ≥4), maksimalt ideal ⟹ kropp, `p^n` elementer, generator for `F^*`.
2. **Undergruppe/normal/kvotient + homomorfi + fundamentalteoremet** - 100 %. Undergruppetesten, normalitet for alle `g`, kjerne, surjektivitet, `G/Ker φ ≅ Im φ`.
3. **Permutasjoner** - 87 %. Disjunkte sykler, orden = lcm, paritet, `A_n`, generatorer, orden-eksistens.
4. **Abelsk gruppestruktur / isomorfiklassifikasjon** - 80 %. Fundamentalteoremet for endelige abelske grupper, `U(Z_n)`, høyeste orden / syklisitet.
5. **Sylow-teori + «vis at G ikke er simpel»** - 73 %. Tell `n_p`, konkluder normalitet/enkelhet; varianter `p^n`, `pq`, `p^t m`.

### Nivå 2 - må kunne (bredde + karakterskiller)
6. **Gruppevirkning + Burnside-telling** - 60 %. Symmetrigruppe (`D_n`/polyeder), fikspunktmengder, banetall; isotropi og bane til konkret element.
7. **Konstruer/verifiser gruppe fra aksiomene** - 47 %. Full aksiomsjekk, inkl. lukkethet og invers-tilhørighet.
8. **Matrisegrupper som arena** (`GL(2,Z_p)`, `SL(2,R)`, triangulære, Heisenberg-`3×3`) - 47 %. Orden, undergruppe/normal, Sylow-5, konjugasjon.
9. **`F^*` syklisk / finn generator** - 47 %. Eliminer ekte divisor-ordener av `p^n−1`.
10. **Maksimale/primidealer + integritetsområder** - 47 %/33 %. Definisjoner, `R/I`-korrespondanser, endelig integritetsområde er kropp.
11. **Isomorfisetningene + `HK`/`G/(H∩K)`-argumenter** - 40 %.

### Nivå 3 - bør dekkes (lav frekvens / dybde / karaktertopp)
12. **Frobenius-endomorfi + underkropper av `GF(p^n)`** - 13 %, men fast i de tyngste settene; binomialformel i karakteristikk `p`, induksjon.
13. **Oppløsbare grupper / komposisjonsrekker** - 20 %. `p`-grupper og `D_n` oppløsbare; list komposisjonsrekker.
14. **Senter `Z(G)`, kommutatorundergruppe** - 20 %. `Z(S_n)={e}`; `G/N` abelsk ⟺ `C(G)⊆N`.
15. **`R/Z ≅ U`, Cauchys teorem, spesialringer (boolesk)** - 7-13 %. Standard homomorfi- og struktursjangre.
16. **Tallteori (Euler `φ`, kongruenser)** - **faset ut** etter MA2201-æraen; ikke prioriter for moderne sett, men nevn kort som historisk kontekst.

### Konkret prognose for neste sett
Basert på den svært stabile malen: **10 like-vektede deloppgaver over 4 timer, kode D** (ingen hjelpemidler, kun enkel kalkulator), ingen flervalg, med anslagsvis denne fordelingen:
- **O1:** permutasjoner (syklform, orden, paritet, `⟨σ⟩`) **eller** abelsk klassifikasjon + `U(Z_n)`.
- **O2:** aksiomverifikasjon av en eksplisitt gruppe **eller** gruppestruktur (`⟨σ,τ⟩`, matrisegruppe).
- **O3-O4:** undergruppe/normal/kvotient med **fundamentalteoremet for gruppehomomorfier** (ofte matrisegruppe eller `R/Z≅U`); og isomorfisetning/`HK`-argument.
- **O5-O6:** Sylow-teori + «vis at G ikke er simpel»; og/eller senter/oppløsbar.
- **O7-O8:** ring/kropp - irredusible polynomer over `Z_p` og **konstruer en endelig kropp** (+ generator for `F^*` eller ideal-teori).
- **O9-O10:** Burnside-tellingsoppgave (kreativt innpakket) og/eller endelig integritetsområde / Frobenius.

**Usikkerhetsmoment:** Rekkefølgen og innpakningen varierer, men de fem søylene er stabile. Frobenius/underkropper og oppløsbarhet er «karaktertopp»-sjangre som ikke er på hvert sett - dekk dem grundig, men vet at de er mindre garantert enn kjerneblokken. Verifiser at faget fortsatt kjører kode D uten vedlegg (ingen tegn til endring 2018-2025).

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4150/` (~34 PDF-er).

**Løsningsforslag lest grundig:**
- `losningsforslag.pdf` (V2019, typesatt offisiell fasit, 10 deloppgaver)
- `lfeksamen.pdf` (V2018, typesatt fasit)
- `tma4150eksamenv2020lf.pdf` (V2020, typesatt fasit)
- `tma4150v2024lf.pdf`, `tma4150v2025lf.pdf` (V2024, V2025 - håndskrevne, OCR-utvunnet men lesbare)
- `tma4150_-_2023_-_konte.pdf` (Kont/aug 2023, håndskrevet fasit, OCR)
- `bmkont.pdf`, `bmeksamen.pdf` (kont- og ordinærsett med fasit/oppgaver, ~2019-æra)

**Oppgavesett lest grundig (siste ~8 år, oppgave-for-oppgave):**
- `bmeksamen.pdf` (V2018), `losningsforslag.pdf`/oppgaver (V2019), `tma4150eksamenv2020bm.pdf` (V2020), `eksamen-2021-vaar.pdf` (V2021), `tma4150-eksamen-2022-05-28.pdf` (V2022), `eksamen-2023-06.pdf` (V2023), `tma4150_-_2023_-_konte.pdf` (Kont2023), `tma4150v2024bm.pdf` (V2024), `tma4150august2024bm.pdf` (Kont2024), `tma4150vaar2025bm.pdf` (V2025), `tma4150aug2025bm.pdf` (Kont2025), `bmkont.pdf` (kont).

**Eldre sett skummet (tradisjon + temaspekter):**
- `bokmaal.pdf` (V2015, MA2201/TMA4150), `kont2014bokmaal.pdf` (Kont2014), `tma415023mai16.pdf` (V2016, kode B m/utdelt figur), `tma4150mai2017.pdf` (V2017, kode B), `MA2201eksamen1986-2009.pdf` (samlearkiv med MA2201-sett fra ~2007-æraen - bekrefter samme mal, pluss tallteori som siden er faset ut).

**Merknader om kildene:**
- **Skann-hull (0 tekst-tegn, ikke OCR-behandlet, utelatt fra kvantitativ analyse):** `leks23-5-16.pdf`, `lf-2022-05-28.pdf`, `lf-eksamen-2023-06.pdf`, `losningsforslagmai17.pdf`, `tma4150-lf-2021.pdf`. Disse er rene bildeskann av løsningsforslag; **de tilhørende oppgavesettene finnes imidlertid som tekst** (V2016, V2022, V2023, V2017, V2021), så temadekningen er ivaretatt - kun de detaljerte fasitformuleringene for disse fem er ikke lest.
- **De håndskrevne fasitene** (V2024, V2025, Kont2023) ble OCR-utvunnet; teksten er stedvis støyete, men matematisk innhold og metode er entydig identifiserbart.
- **V2020-anomali:** dette settet hadde hjelpemiddelkode «Alle» (åpen bok) pga. covid-hjemmeeksamen; det faglige innholdet er representativt, men hjelpemiddelregelen er ikke normen (som er kode D).
- **Emneidentitet bekreftet (K1):** TMA4150 er abstrakt algebra - gruppeteori (Lagrange, normale undergrupper, kvotienter, homomorfier, Sylow, permutasjonsgrupper, gruppevirkning/Burnside), ringteori (idealer, kvotientringer, polynomringer, maksimale/primidealer, integritetsområder) og endelige kropper (`Z_p[x]/(f)`, syklisk `F^*`, Frobenius, underkropper). **Galois-teori i tradisjonell forstand (kroppsutvidelser over `Q`, Galois-grupper, løsbarhet med radikaler) forekommer ikke** i noe kartlagt sett. Verifisert mot 15 faktiske oppgavesett.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, teoremnavn og standardnotasjon er ikke opphavsrettslig beskyttet.

**Forbilde:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal og NTNU-realfagstradisjon; helt annet fag - analyse/numerikk - så ingen innholdsoverlapp).

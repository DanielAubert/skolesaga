# Bokskjelett: TTT4120 Digital signalbehandling — eksamensrettet lærebok (NTNU)

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er angitt her, destillert fra
> `EKSAMENSANALYSE.md` (fire distinkte sett des-2015 / des-2016 / aug-2017 /
> des-2017, hvorav **kun des-2015 har fullstendig lesbar fasit**). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Alle mønstereksempler er
> omskrevne (nyskrevne tallverdier og filtre); formlene er standard DSP-notasjon
> og ikke opphavsrettslig beskyttet.
>
> **⚠️ Kalibrering (les før bygging):** Emnet er **aktivt** (ordinær eksamen
> 2. des. 2026), **4 timers** skriftlig skoleeksamen, hjelpemiddelkode **D**
> (enkel kalkulator + **utdelt to-siders formelark**), undervist og eksaminert på
> **engelsk**. Eksamen er **regnetung med utledninger, INGEN flervalg**:
> ~70 % regning/«vis at»-utledning, ~30 % skisse + konseptforklaring. Arkivet er
> lite (n=4) men **strukturen er tilnærmet invariant**: hvert sett har nøyaktig
> **fire faste oppgaver** (~18/18/16/16 p) med **gjenbruk av ETT filter** gjennom
> oppg 1→2→3. Boka bygges derfor **rundt fire oppgavefamilier + ett gjennomgående
> eksempelfilter**, ikke rent tematisk.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ttt4120` |
| Tittel | **TTT4120 Digital signalbehandling — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU |
| Arketype | Regnefag (regnetung problemløsning, «fire faste oppgavefamilier»-drillvariant) |
| Antall kapitler | **33** (1 eksamenskart + 28 tema, hvorav 4 familiedrill + 1 konseptdrill + 3 øvingseksamener) |
| Estimert totaltid | **2 610 min ≈ 43,5 timer** |
| Quiz totalt | **564** (krav ≥500) |
| Flashcards totalt | **596** (krav ≥500) |
| Format | Kode D (kalkulator + **utdelt formelark**), 4 t skriftlig, engelsk, A–F |

**Pitch (ett avsnitt):** TTT4120-eksamen er blant de mest maldrevne i hele
porteføljen. Alle fire settene i arkivet (2015–2017) har nøyaktig **fire
oppgaver** med samme tema og nesten samme vekting, og — avgjørende — de
**gjenbruker ETT filter** som analyseres i oppg 1, implementeres i oppg 2 og
brukes til stokastisk modellering i oppg 3. Denne boka etterligner det: den er
organisert rundt de **fire tilbakevendende oppgavefamiliene**, med en kompakt
verktøykasse-teori foran og **ett gjennomgående eksempelfilter** som følger
leseren fra pol-nullpunkt (fam. 1) → filterstruktur/avrundingsstøy (fam. 2) →
AR-modellering (fam. 3). **Familie 1** (differanselikning↔$H(z)$, kaskade/
parallell, pol-nullpunkt/ROC/stabilitet/fase, invers z-transform → $h[n]$) og
**familie 3** (hvit støy → AR/MA/ARMA, $\gamma_{XX}$/$\Gamma_{XX}$, lineær
prediksjon via Normal-likninger) er de to store; **familie 2** (DF-II/kaskade/
parallell-strukturer + avrundingsstøy $\sigma_z^2=\sigma_e^2\sum h^2$) og
**familie 4** (samplingsteorem/aliasing + multirate desimering/interpolasjon)
er like sikre men mindre. Fordi svaret ofte er **oppgitt** («show that
$h[n]=\dots$»), er dette en eksamen der man kan **selvsjekke** underveis — boka
utnytter det: hver fullførte utledning ender på et rent, oppgitt resultat.

**Kritisk rammebetingelse — det utdelte formelarket (gjelder HELE boka, bokas
signaturgrep):** Eksamen deler ut et **to-siders formelark** med geometriske
summer, konvolusjon/transform-definisjoner (z, DTFT, DFT, IDFT),
samplingsteoremet, autokorrelasjon/energispekter/Parseval, multirate-relasjoner,
effekttetthet (Wiener–Khintchin), Yule–Walker/Normal-likningene og en tabell
over vanlige z-transformpar. Boka skal derfor **ALDRI** fremstille disse
formlene som puggestoff. Skillet i HVERT delkapittels Symbol- og formelliste er:
- **«Står på formelarket — hentes»**: definisjonene av transformene, geometriske
  summer $\sum_{n=0}^{N-1}\alpha^n=\frac{1-\alpha^N}{1-\alpha}$ og
  $\sum_{n=0}^{\infty}\alpha^n=\frac{1}{1-\alpha}$ ($|\alpha|<1$), samplingsteoremet
  $X(f)=F_s\sum_k X_a([f-k]F_s)$, $S_{hh}(z)=H(z)H(z^{-1})$, Parseval, Normal-/
  Yule–Walker-oppsettet, z-transformpar-tabellen.
- **«Må beherskes aktivt — ferdighet, ikke på arket»**: faktorisering av 2. ordens
  $H(z)$ til poler; delbrøk-/residyoppspaltning til parallellform med impulsrespons;
  pol-nullpunkt-analyse (ROC, stabilitet, minimum/lineær fase, allpass); konvertering
  differanselikning ↔ $H(z)$ ↔ $h[n]$ begge veier; avrundingsstøyvarians per struktur
  ($r_{hh}[0]/\sum h^2$) + skalering; oppsett og løsning av Normal-likningene for
  AR(1)/AR(2) + $\sigma_f^2$; spektrumskisser ved sampling/desimering/interpolasjon/
  rate-konvertering; DFT-/radix-2-lengder ut fra lineær-konvolusjons-kravet.
Boka trener **bruk og utledning** (hvilken formel når, korrekt indeksering), ikke pugg.

**Kritisk sensorregel A — «begrunn klassifiseringen med polkriterier» (gjelder HELE
boka, egen `warning` i hvert relevant kapittel):** 2015-fasiten er eksplisitt:
*«State the reason for your answers.»* Å svare **«ja, stabilt»** uten å vise at
**polene ligger innenfor enhetssirkelen** gir ikke full uttelling. Samme for:
- **kausal** ⇒ ROC *utenfor* ytterste pol (høyresidig $h[n]$),
- **stabil** ⇒ enhetssirkelen $|z|=1$ ligger i ROC ⇔ (for kausalt filter) **alle
  poler innenfor** $|z|<1$,
- **minimum fase** ⇒ **poler OG nullpunkt innenfor** $|z|<1$.
Hver påstand skal begrunnes med det aktuelle polkriteriet, ikke bare ja/nei.

**Kritisk sensorregel B — minimum-fase-fallgruven (egen `warning`, gjentas i
Del 0, kap. 3.2, 3.3, 3.5 og studieguiden):** Et **nullpunkt PÅ enhetssirkelen
betyr IKKE minimum fase**, selv om alle poler ligger innenfor. 2015-fasiten
fremhever nettopp dette: det gjennomgående filteret har nullpunkt *på* $|z|=1$
(ved $z=1$) og har **derfor ikke minimum fase**, selv om polen er innenfor.
Klassisk feil: å blande sammen **stabilitet** (poler innenfor) med **minimum
fase** (poler *og* nullpunkt innenfor). Minimum fase krever nullpunktene **strengt
innenfor** — et nullpunkt *på* sirkelen diskvalifiserer.

**Pragmatisk rigor (fra 2015-fasiten — dempes inn der det er relevant):** Sensor
belønner korrekt hovedresonnement, ikke pedantisk fullstendighet: støykilder i
strukturtegningene «is not default required from the students»; et ekstra
avrundingsstøyledd etter skalering kan utelates («both kind of answers should be
accepted»); **flere gyldige veier godtas** (residy vs. kvadrering-og-summering for
$r_{hh}[0]$); **kombinatorisk telle-resonnement premieres** («hvor mange
kaskadestrukturer kan du velge blant?»). Bøka viser flere metoder der de finnes
og navngir dem.

**Notasjonskonvensjoner boka skal speile slavisk (fra settene og formelarket):**
- Signaler/systemer: $x[n],h[n],y[n]$; systemfunksjon $H(z)$, frekvensrespons
  $H(f)$ (normalisert frekvens $f=F\,T_x$, $-\tfrac12<f\le\tfrac12$); ROC;
  konvolusjon $y[n]=h[n]*x[n]=\sum_k h[k]x[n-k]$.
- Autokorrelasjon: $r_{hh}[l]$ (**deterministisk energi**, $=\sum_n h[n]h[n+l]$)
  vs. $\gamma_{XX}[l]$ (**stokastisk**, $=E\{X[n]X[n+l]\}$); effekttetthetsspekter
  $\Gamma_{XX}(f)=\text{DTFT}\{\gamma_{XX}[l]\}$; energispekter $S_{hh}(f)=|H(f)|^2$.
- Varianser: $\sigma_e^2$ (avrundingsstøy per kvantiseringskilde),
  $\sigma_f^2$ (prediksjonsfeileffekt), $\sigma_W^2$ (hvit-støy-effekt).
- Strukturer: DF-II (Direct Form II), kaskade (cascade), parallell (parallel);
  modeller AR($p$)/MA($q$)/ARMA($p,q$), fortegnskonvensjon $a_0=1$.
- **Engelsk fagterminologi i parentes ved første forekomst** (kurset er engelsk):
  pole–zero, region of convergence (ROC), minimum phase, linear phase, allpass,
  whitening filter, decimation, interpolation, upsampling/downsampling, aliasing.
- Svar oppgis som **eksakt brøk/uttrykk** der mulig (tallene er håndregnbare brøker).

**Det gjennomgående eksempelfilteret (nyskrevet — brukes i fam. 1→2→3):**
Boka bruker ETT filter som rød tråd, akkurat slik settene gjør. Alle tallverdier
er nyskrevne (opphavsrett):
$$H(z)=\frac{1-z^{-1}}{\left(1-\tfrac12 z^{-1}\right)\left(1+\tfrac14 z^{-1}\right)}
     =\frac{1-z^{-1}}{1-\tfrac14 z^{-1}-\tfrac18 z^{-2}}.$$
- **Differanselikning:** $y[n]=\tfrac14 y[n-1]+\tfrac18 y[n-2]+x[n]-x[n-1]$.
- **Poler:** $z=\tfrac12$ og $z=-\tfrac14$ (begge **innenfor** $|z|=1$ ⇒ stabilt,
  kausalt). **Nullpunkt:** $z=1$ (**på** enhetssirkelen ⇒ **ikke minimum fase** —
  fallgruven!).
- **Parallellform (delbrøk):** $H(z)=\dfrac{-2/3}{1-\tfrac12 z^{-1}}+\dfrac{5/3}{1+\tfrac14 z^{-1}}$
  (residyene $A=-\tfrac23,\ B=\tfrac53$; kontroll: $A+B=1=$ tellerkonstant).
- **Impulsrespons:** $h[n]=\left[-\tfrac23\left(\tfrac12\right)^n+\tfrac53\left(-\tfrac14\right)^n\right]u[n]$
  (kontroll: $h[0]=1$, $h[1]=-\tfrac34$ — matcher differanselikningen; selvsjekk).
- **Kaskadeform:** grupper nullpunktet med én av polene, f.eks.
  $H(z)=\underbrace{\tfrac{1-z^{-1}}{1-\tfrac12 z^{-1}}}_{H_a}\cdot\underbrace{\tfrac{1}{1+\tfrac14 z^{-1}}}_{H_b}$
  (flere grupperinger mulige → telle-resonnementet).
- **Som formende filter (fam. 3):** hvit støy inn ⇒ ARMA(2,1)-utgang; den rene
  **pol-delen** $\tfrac{1}{1-\tfrac14 z^{-1}-\tfrac18 z^{-2}}$ gir en ren **AR(2)**-
  modell som brukes i Normal-liknings-eksemplet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: verktøykasse → familier);
frekvensen styrer *omfanget*. De fire 4/4-oppgavefamiliene får hver sin del med
teori vevd inn + familiedrill; verktøykassen (signaler/LTI, z-transform,
frekvensanalyse) dekkes kompakt som *forutsetning* for familiene; FIR/IIR-design
er beredskap med `(verifiser)`-preg.

| Del | Tittel | Kap. | Begrunnelse (frekvens/status → omfang) |
|---|---|---|---|
| 0 | Eksamenskart, «vis utledning»-føring og formelark-håndverk | 1 | Prioriteringsverktøyet + kjerne i studieguiden. Etablerer 4-oppgavers-malen, sjanger-katalogen A–N, det gjennomgående eksempelfilteret, de to kritiske sensorreglene og formelark-prinsippet. |
| 1 | Diskret-tids-signaler og LTI-systemer | 3 | Verktøykasse (**kunne**): sekvenser, konvolusjon/impulsrespons (grunnlaget for alt), og systemdefinisjonene (stabilitet/kausalitet/tidsinvarians, sjanger N, 1/4). |
| 2 | z-transform, ROC og invers z-transform | 3 | Verktøykasse (**kunne→perfekt**): z-transform + ROC, transformpar-/egenskapstabellen (formelark), og invers via delbrøk/residy → $h[n]$ (tema 4, **4/4**). |
| 3 | Familie 1 — Systemfunksjon, pol-nullpunkt, kaskade/parallell, stabilitet og fase | 5 | **Oppg 1-familien**, temaene 1–5 alle **4/4** → nivå 1 «perfekt», bokas største del: 4 teori + familiedrill. Minimum-fase-fallgruven og polkriterie-begrunnelsen bor her. |
| 4 | Frekvensanalyse: DTFT, frekvensrespons, DFT og FFT | 3 | DTFT/frekvensrespons (**kunne**, filtertype LP/HP/BP/AP 3/4); DFT-lengder (tema 20, 2/4, **kunne**); FFT/overlap-add/vindu (temaene 21–23, 1/4, **kjenne**-bredde). |
| 5 | Familie 2 — Filterstrukturer og avrundingsstøy | 4 | **Oppg 2-familien**, temaene 7–8 **4/4** → nivå 1 «perfekt»: 3 teori (strukturer; avrundingsstøy $\sigma_z^2=\sigma_e^2\sum h^2$; skalering/S-N) + familiedrill. |
| 6 | Familie 3 — Stokastiske signaler, parametrisk modellering og lineær prediksjon | 5 | **Oppg 3-familien**, temaene 11–14 alle **4/4** → nivå 1 «perfekt», nest største del: 4 teori (γ/Γ; AR/MA/ARMA; prediksjon/Normal-likninger; whitening/Wiener) + familiedrill. |
| 7 | Familie 4 — Sampling, aliasing og multirate | 3 | **Oppg 4-familien**, temaene 17–19 alle **4/4** → nivå 1 «perfekt»: 2 teori (samplingsteorem/aliasing/skisse; multirate I/D) + familiedrill. |
| 8 | FIR/IIR-filterdesign *(beredskap, verifiser)* | 2 | «design» i oppg 1-tittelen, men **selve designmetodene er ikke belagt i arkivet** (analyse-temaene stopper ved klassifisering/analyse). Dekkes kompakt: FIR-vindusmetode + IIR bilineær transform. Merket `(verifiser mot pensum)`. |
| 9 | Eksamenstrening | 4 | Konsept-/definisjonsdrill (sjanger N + 1/4-bredde: DFT/FFT-teori, overlap-add, vindu, WSS/ergodisitet) + 3 komplette 4-timers øvingseksamener etter 4-oppgavers-malen med gjennomgående filter og formelark. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og formelark-håndverk |
| 1 | Diskret-tids-signaler og LTI-systemer |
| 2 | z-transform, ROC og invers z-transform |
| 3 | Familie 1: Pol-nullpunkt, stabilitet og fase |
| 4 | Frekvensanalyse: DTFT, DFT og FFT |
| 5 | Familie 2: Filterstrukturer og avrundingsstøy |
| 6 | Familie 3: Parametrisk modellering og prediksjon |
| 7 | Familie 4: Sampling, aliasing og multirate |
| 8 | FIR/IIR-filterdesign (beredskap) |
| 9 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Boka er organisert rundt fire oppgavefamilier, ikke rent tematisk.** DNA sier
   «én del per hovedtema, ordnet etter avhengighet». Her *er* de fire tematiske
   hoveddelene (3, 5, 6, 7) samtidig de fire eksamensoppgavene — det er den mest
   direkte eksamensrettede strukturen for et arkiv der samme fire oppgaver går igjen
   sett etter sett. Verktøykasse-delene (1, 2, 4) tjener familiene og er kompakte.
   Dette er analysens eksplisitte anbefaling (§8).
2. **Ett gjennomgående eksempelfilter** følger leseren gjennom Del 3→5→6, slik de
   reelle settene gjenbruker ett filter gjennom oppg 1→2→3. Dette er et grep utover
   DNA-en, begrunnet i den observerte malen (analyse §7).
3. **Fire familiedrillkapitler (3.5, 5.4, 6.5, 7.3)** ligger inne i sine familiedeler,
   ikke samlet i siste del — sjangrene er 4/4-gjengangere som må drilles umiddelbart
   etter teorien (samme grep som fys1120/tma4135). Del 9 beholder den *tverrgående*
   konsept-/definisjonsdrillen (sjanger N + 1/4-bredde) og øvingseksamenene.
4. **Del 8 (FIR/IIR-design) merkes gjennomgående `(verifiser mot pensum)`** — «design»
   står i oppg 1-tittelen, men de fire lesbare settene tester bare *analyse/
   klassifisering*, ikke designmetoder (vindusmetode, bilineær transform). Delen er
   derfor kompakt beredskap, får **2 prøver** (ikke 4), og nedtones eksplisitt i
   prioriteringskartet. Dokumentert i §4.
5. **33 kapitler** ligger i øvre halvdel av DNA-rammen (20–35). Begrunnelse: fire
   fullverdige oppgavefamilier (hver med 3–5 kapitler + drill) + tre verktøykasse-
   deler + beredskap + eksamenstrening. Ingen del kan kuttes uten å miste en
   dokumentert 4/4-sjanger.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–N)** refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3),
gruppert etter de fire familiene:
**Familie 1:** A differanselikning↔$H(z)$↔$h[n]$ · B pol-nullpunkt/ROC/stabilitet/
kausalitet-klassifisering (med begrunnelse) · C minimum/lineær fase, allpass,
inverst filter · D kaskade- og parallellform (faktorisering/delbrøk/residy) ·
E invers z-transform → $h[n]$.
**Familie 2:** F tegne filterstruktur (DF-II/kaskade/parallell) · G avrundingsstøy-
varians $\sigma_z^2=\sigma_e^2\sum h^2$ + struktursammenlikning · H skalering/overflow
+ S/N.
**Familie 3:** I AR/MA/ARMA-klassifisering + orden, $\gamma_{XX}$/$\Gamma_{XX}$ ·
J lineær prediksjon (Normal-likninger) + $\sigma_f^2$ (+ whitening/Wiener).
**Familie 4:** K samplingsteorem/aliasing + spektrumskisse · L multirate desimering/
interpolasjon/rate-konvertering I/D · M DFT/FFT-lengder, overlap-add, vindu (bredde).
**Tverrgående:** N konseptuell forklaring/definisjon (stabilitet/kausalitet/
tidsinvarians, WSS/ergodisitet, Wiener-prinsipp, aliasing, lekkasje).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (ALLE symboler
og formler i delkapitlet, per delkapittel — ikke arvet — **med formelark-markering**
«står på arket» vs. «ferdighet»), `text` **Motivasjon**, `definition`/`theorem` i
emnets notasjon, `text` **Utledning med intuisjon** (kun for det som skal kunne
*utledes*/«vises»), 2–4 `example` (siste på eksamensnivå, løst som A-besvarelse med
skisser der sensor forventer skisse), `warning` **Typiske feil**, 6–12 `exercise`
(stigende, `solution` + `hints`, minst én ren N-oppgave), `collapsible`
**Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart, «vis utledning»-føring og formelark-håndverk

#### Kapittel 0.1: Slik testes TTT4120 — fire oppgavefamilier, ett filter og formelarket

- **id:** `ttt4120-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, den invariante 4-oppgavers-malen, det gjennomgående eksempelfilteret, de to kritiske sensorreglene (polkriterie-begrunnelse; minimum-fase-fallgruven), sjanger-katalogen A–N og formelark-prinsippet — studentens prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel — bygger på alle fire settene 2015–2017 + NTNUs emneside. Skal gjengi: (i) **formen** — 4-timers skriftlig skoleeksamen, **kode D** (enkel kalkulator + **utdelt to-siders formelark**), **engelsk**, A–F, **ingen flervalg**; ~70 % regning/«vis at»-utledning, ~30 % skisse/konsept; deloppgavevekt oppgitt ved hver oppgave (3+5+4+4+6-typisk). (ii) **Den invariante 4-oppgavers-malen** (tilnærmet identisk 2015→2017, ~18/18/16/16 p): **Oppg 1** «Basics of filter theory» (differanselikning↔$H(z)$, kaskade/parallell, pol-nullpunkt/ROC/stabilitet/fase, invers z-transform→$h[n]$, inverst filter); **Oppg 2** «Filter structures» (DF-II/kaskade/parallell + avrundingsstøy + skalering/S-N); **Oppg 3** «Parametric modeling» (hvit støy→AR/MA/ARMA, $\gamma_{XX}$/$\Gamma_{XX}$, lineær prediksjon/Normal-likninger, $\sigma_f^2$, whitening/Wiener); **Oppg 4** «Sampling, rate-conversion and DFT/FFT» (samplingsteorem/aliasing, spektrumskisse, multirate I/D, DFT/FFT-lengder). (iii) **Gjenbruket av ETT filter** gjennom oppg 1→2→3 — presentér **det gjennomgående eksempelfilteret** (§1) og lov leseren at det følger hele boka. (iv) **Temafrekvens-tabellen** som tre lesenivåer: *perfekt* (4/4 — familiene 1–4: pol-nullpunkt/kaskade/parallell/invers-z/differanselikning; strukturer + avrundingsstøy; AR/MA/ARMA + γ/Γ + prediksjon; samplingsteorem + spektrumskisse + multirate); *kunne* (2/4 — skalering/S-N, whitening/Wiener, allpass/inverst filter, DFT-lengder/radix-2); *kjenne* (1/4 — overlap-add, vindu/lekkasje, radix-2-prinsipp, formelle definisjoner). (v) **Prognosen** (analyse §7): neste sett = fire oppgaver etter malen, med et 1.–2. ordens IIR-filter som rød tråd. (vi) **Evidensforbeholdet:** arkivet stopper i 2017; verifiser dagens vekting (særlig DFT/FFT vs. multirate i oppg 4, Wiener vs. whitening i oppg 3).
- **Innholdskontrakt:** Presentér **sjanger-katalogen A–N** som studentens sjekkliste med familietilhørighet og frekvens. Presentér de **to kritiske sensorreglene** i full form: (A) **begrunn hver klassifisering med polkriterier** (kausal ⇒ ROC utenfor ytterste pol; stabil ⇒ poler innenfor; minimum fase ⇒ poler OG nullpunkt innenfor) — ikke bare ja/nei; (B) **minimum-fase-fallgruven** — nullpunkt PÅ enhetssirkelen gir IKKE minimum fase. Presentér **formelark-prinsippet** med konkret liste «står på arket / hentes» vs. «ferdighet / må beherskes aktivt». Presentér **den pragmatiske rigoren** (støykilder i strukturtegninger valgfrie; flere veier godtas; telle-resonnement premieres). **Karakterskillene** (fra analyse §4): *bestå* ≈ sette opp $H(z)$/differanselikning, faktorisere, delbrøk, klassifisere FIR/IIR og AR/MA/ARMA, kunne samplingsteoremet; *middels→god* ≈ føre avrundingsstøyvarians for én struktur, løse Normal-likningene for AR(2), skissere rate-konvertering, begrunne stabilitet/fase med polkriterier; *topp* ≈ skalering/overflow + S/N på tvers av strukturer, se allpass og utnytte det, par/odde-indeksdeling i $\sum|h[n]|$, korrekt radix-2-lengde, presis whitening/Wiener.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «gitt 4 timer og fire like-vektede oppgaver — sett opp et tidsbudsjett»; «for hvert uttrykk: står det på formelarket (hentes) eller er det en ferdighet (må beherskes)?»; «forklar hvorfor et nullpunkt på enhetssirkelen diskvalifiserer minimum fase selv om polen er innenfor».
- **Typiske feil:** Tidsfella — bruke for lang tid på de tunge utledningsoppgavene (delbrøk/residy, Normal-likninger) og miste billige skisse-/konseptpoeng; svare «ja/nei» på klassifisering uten polkriterie-begrunnelse (regel A); blande stabilitet og minimum fase (regel B); tro at man må pugge formelarket (bruk det!).
- **Quiz: 14 · Flashcards: 16** (form, 4-oppgavers-malen, det gjennomgående filteret, sensorregel A og B, sjanger-katalog A–N, formelark-prinsippet, frekvensnivåene)

---

### Del 1 — Diskret-tids-signaler og LTI-systemer  *(prioritet: KUNNE — verktøykasse)*

#### Kapittel 1.1: Diskret-tids-signaler og standardsekvenser

- **id:** `ttt4120-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `ttt4120-0-1` · **kapitteltype:** teori
- **description:** Diskrete sekvenser, standardsignalene ($\delta[n]$, $u[n]$, $\alpha^n u[n]$), energi/effekt og normalisert frekvens — språket resten av boka snakker.
- **Eksamensbelegg:** Ikke egen oppgave, men **forutsetning** i alle fire familiene. Standardsekvensene og geometriske summer (fra formelarket) brukes i hver eneste impulsrespons- og autokorrelasjonsutledning. Prioritet: **kunne** (fundament — kort).
- **Forkunnskaper/kryssbok:** kap. 0.1. Geometriske rekker og komplekse tall forutsettes (refereres i klartekst til søsterbøker i matematikk der de er bygget; lenk kun til kapitler som finnes ved bygg).
- **Innholdskontrakt:** Alt til *bruk*. Sekvensbegrepet $x[n]$; **standardsignaler** enhetsimpuls $\delta[n]$, enhetssteg $u[n]$, eksponensial $\alpha^n u[n]$, sinusoid $\cos(2\pi f n)$; energi $E=\sum_n|x[n]|^2$ og effekt $P=\lim\frac{1}{2N+1}\sum|x[n]|^2$; **geometriske summer** (formelarket) $\sum_{n=0}^{\infty}\alpha^n=\frac{1}{1-\alpha}$ ($|\alpha|<1$), $\sum_{n=0}^{N-1}\alpha^n=\frac{1-\alpha^N}{1-\alpha}$; **normalisert frekvens** $f=F\,T_x=F/F_s$; skifting/speiling/skalering av sekvenser. **Formelark-markering:** geometriske summer *står på arket*; gjenkjenning av «hvilken sum» er *ferdighet*.
- **Oppgavesjangre:** Støtte til A/E/G. Mønstereksempel: «Skriv $x[n]=\left(\tfrac13\right)^n u[n]-\left(\tfrac13\right)^{n-2}u[n-2]$ som en endelig sekvens, og finn energien ved en geometrisk sum.»
- **Typiske feil:** Feil øvre/nedre grense i geometrisk sum; glemme $u[n]$-avgrensningen (summere over negative $n$); blande $|\alpha|<1$-betingelsen; rote normalisert vs. fysisk frekvens.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: LTI-systemer, konvolusjon og impulsrespons

- **id:** `ttt4120-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-1-1` · **kapitteltype:** teori
- **description:** LTI-systemet karakterisert ved impulsresponsen $h[n]$, konvolusjonssummen, og FIR vs. IIR — grunnlaget for hele familie 1 og 2.
- **Eksamensbelegg:** Konvolusjon og impulsrespons er selve **navet** i oppg 1 og 2 (impulsrespons 4/4; FIR/IIR-klassifisering 3/4). Kjeden $h[n]\leftrightarrow$ differanselikning $\leftrightarrow H(z)$ starter her. Prioritet: **kunne** (grensende til perfekt — fôrer Del 3 og 5).
- **Forkunnskaper/kryssbok:** kap. 1.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **LTI-egenskapene** (linearitet + tidsinvarians) og hvorfor de gir **konvolusjon** $y[n]=h[n]*x[n]=\sum_{k}h[k]x[n-k]$; impulsrespons $h[n]$ som fullstendig karakterisering; **kaskade** $h=h_1*h_2$ (⇒ $H=H_1H_2$) og **parallell** $h=h_1+h_2$; **FIR** (endelig $h[n]$, ikke-rekursiv) vs. **IIR** (uendelig $h[n]$, rekursiv); step-respons $s[n]=\sum_{k\le n}h[k]$. **Utledning som kreves aktivt:** konvolusjonssummen fra LTI-egenskapene; regne $y[n]$ for korte sekvenser ved «flip-and-slide». **Formelark-markering:** konvolusjonsdefinisjonen *står på arket*; utregningen er *ferdighet*.
- **Oppgavesjangre:** A-støtte, N (FIR/IIR-klassifisering). Mønstereksempel: «Et system har $h[n]=\delta[n]-\tfrac12\delta[n-1]$. Finn $y[n]$ når $x[n]=\left(\tfrac13\right)^n u[n]$ ved konvolusjon, og avgjør om systemet er FIR eller IIR.»
- **Typiske feil:** Glemme å speile ($h[n-k]$ vs. $h[k-n]$); feil grenser i konvolusjonssummen; kalle et rekursivt system FIR; blande kaskade ($\times$) og parallell ($+$) i $H$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: Systemegenskaper — kausalitet, stabilitet og tidsinvarians (definisjoner)

- **id:** `ttt4120-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `ttt4120-1-2` · **kapitteltype:** teori
- **description:** De formelle systemdefinisjonene og BIBO-stabilitetskriteriet $\sum|h[n]|<\infty$ — konseptspørsmålet (sjanger N) og fundamentet for pol-kriteriene i Del 3.
- **Eksamensbelegg:** Formelle definisjoner er sjanger N, **1/4** (des-2017) — lav frekvens, men billig og fôrer stabilitetsbegrunnelsen (regel A) i hele familie 1. Prioritet: **kjenne** (definisjoner) / **kunne** (BIBO-koblingen).
- **Forkunnskaper/kryssbok:** kap. 1.2.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (definere presist). **Kausalitet** ($h[n]=0$ for $n<0$; utgang avhenger kun av nåtid/fortid); **tidsinvarians** (skift inn ⇒ skift ut); **linearitet** (superposisjon); **BIBO-stabilitet** $\Leftrightarrow \sum_n|h[n]|<\infty$ — **broen til pol-kriteriet** (kap. 3.2: for kausalt filter ⇔ alle poler innenfor $|z|=1$). **Utledning:** vis at $\sum|h[n]|<\infty$ for det gjennomgående filteret via geometrisk sum. **Formelark-markering:** definisjonene er *ferdighet* (må kunne skrives presist på engelsk); geometrisk sum *står på arket*.
- **Oppgavesjangre:** N. Mønstereksempel: «Avgjør om $y[n]=x[n]+2x[n+1]$ er (a) kausalt, (b) tidsinvariant, (c) BIBO-stabilt. Begrunn hvert svar med definisjonen.»
- **Typiske feil:** Forveksle kausalitet og stabilitet; påstå tidsinvarians uten sjekk (systemer med $n$-avhengige koeffisienter er ikke TI); glemme at BIBO krever *absolutt* summerbarhet ($\sum|h[n]|$, ikke $\sum h[n]$).
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (1.A standardsekvenser + energi via geometrisk sum · 1.B konvolusjon og impulsrespons (flip-and-slide, kaskade/parallell) · 1.C FIR/IIR + systemegenskaper med definisjonsbegrunnelse (sjanger N) · 1.D blandet verktøykasse på eksamensnivå)

---

### Del 2 — z-transform, ROC og invers z-transform  *(prioritet: KUNNE→PERFEKT — verktøykasse)*

#### Kapittel 2.1: z-transform og konvergensområde (ROC)

- **id:** `ttt4120-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttt4120-1-2` · **kapitteltype:** teori
- **description:** z-transformen, konvergensområdet (ROC) og hvordan ROC koder kausalitet og stabilitet — motoren under hele familie 1.
- **Eksamensbelegg:** ROC-resonnement er en del av pol-nullpunkt/stabilitet-familien (**4/4**) og fôrer den. ROC-forvirring kausalt vs. antikausalt/inverst filter er en dokumentert fallgruve (analyse §5.7). Prioritet: **kunne** (grunnlaget for kap. 3.2 og 3.3 — grensende til perfekt).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2. Geometriske rekker (kap. 1.1).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **z-transform** $X(z)=\sum_n x[n]z^{-n}$; **ROC** som ringområde $r_1<|z|<r_2$; transform av $\alpha^n u[n]$ (kausal, $\text{ROC}:|z|>|\alpha|$) og $-\alpha^n u[-n-1]$ (antikausal, $\text{ROC}:|z|<|\alpha|$) — **samme $X(z)$, ulik ROC**; **ROC-regler:** ingen poler i ROC; kausal ⇒ ROC utenfor ytterste pol; stabil ⇒ $|z|=1$ i ROC; endelig sekvens ⇒ hele planet (unntatt evt. $0/\infty$). **Utledning som kreves aktivt:** $X(z)$ + ROC for det gjennomgående filterets impulsrespons via to geometriske summer. **Formelark-markering:** z-transformdefinisjonen og transformpar-tabellen *står på arket*; ROC-resonnementet er *ferdighet*.
- **Oppgavesjangre:** B-støtte (ROC). Mønstereksempel: «Finn $X(z)$ og ROC for $x[n]=\left(\tfrac12\right)^n u[n]+\left(-\tfrac14\right)^n u[n]$, og forklar hvorfor sekvensen er både kausal og stabil ut fra ROC.»
- **Typiske feil:** Oppgi $X(z)$ uten ROC (transformen er ikke entydig uten); tro at kausal og antikausal har ulik $X(z)$ (kun ROC skiller); plassere en pol i ROC; feil ytterpol ved kausalitetsvurdering.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: z-transform-egenskaper og transformpar-tabellen (formelark-bevisst)

- **id:** `ttt4120-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttt4120-2-1` · **kapitteltype:** teori
- **description:** Egenskapene (linearitet, tidsskift, konvolusjon→produkt) og den utdelte transformpar-tabellen — trening i *rask, riktig oppslag*, ikke pugg.
- **Eksamensbelegg:** Egenskapene brukes i hver $H(z)$-manipulasjon (differanselikning↔$H(z)$, kaskade $H_1H_2$). Konvolusjonsegenskapen er navet i «$Y(z)=H(z)X(z)$». Prioritet: **kunne** (fundament for hele familie 1).
- **Forkunnskaper/kryssbok:** kap. 2.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (som oppslag). **Egenskaper:** linearitet; **tidsskift** $x[n-k]\leftrightarrow z^{-k}X(z)$ (broen differanselikning↔$H(z)$); **konvolusjon** $x*h\leftrightarrow X(z)H(z)$; modulasjon/skalering $\alpha^n x[n]\leftrightarrow X(z/\alpha)$; **transformpar-tabellen** (formelarket) — $\delta[n]$, $u[n]$, $\alpha^n u[n]$, $n\alpha^n u[n]$, $\cos/\sin$. **Formelark-markering:** hele tabellen og egenskapene *står på arket*; å velge riktig par/egenskap raskt er *ferdighet* — dette kapitlet er et «bruk arket riktig»-verksted (analog til fys1120s formelark-prinsipp, men her ER arket delt ut).
- **Oppgavesjangre:** A/E-støtte. Mønstereksempel: «Bruk tidsskift- og linearitetsegenskapen til å finne $H(z)$ fra differanselikningen $y[n]-\tfrac14 y[n-1]-\tfrac18 y[n-2]=x[n]-x[n-1]$ (det gjennomgående filteret).»
- **Typiske feil:** Feil fortegn i eksponenten på $z^{-k}$; bruke feil transformpar (blande $\alpha^n u[n]$ og $n\alpha^n u[n]$); glemme at konvolusjon i tid blir produkt (ikke sum) i z.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 2.3: Invers z-transform — delbrøk-/residyoppspaltning → impulsrespons

- **id:** `ttt4120-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-2-2` · **kapitteltype:** teori
- **description:** Fra $H(z)$ tilbake til $h[n]$ via delbrøk (partial fractions) og residyer — sjanger E (**4/4**), og selve maskineriet i parallellformen (kap. 3.4).
- **Eksamensbelegg:** Invers z-transform → $h[n]$ er tema 4, **4/4** — én av ryggradsjangrene. Delbrøk-/residyfeil (fortegn på $A$ og $B$, glemt $z^{-1}$-ledd i teller) er dokumentert fallgruve (§5.6). Prioritet: **kunne→perfekt** (dette er halve oppg 1).
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Delbrøkoppspaltning** av rasjonell $H(z)$ (distinkte reelle poler): $\frac{N(z)}{\prod(1-p_i z^{-1})}=\sum_i\frac{A_i}{1-p_i z^{-1}}$; **residymetoden** $A_i=(1-p_i z^{-1})H(z)\big|_{z=p_i}$; **invers per ledd** $\frac{A_i}{1-p_i z^{-1}}\leftrightarrow A_i p_i^n u[n]$ (kausal); håndtering av **teller-$z^{-1}$-ledd** og av **direkte ledd** når teller- og nevnergrad er like (polynomdivisjon først); kort om dobbeltpoler ($n p^n$-ledd). **Utledning som kreves aktivt:** hele veien for det gjennomgående filteret → $A=-\tfrac23,B=\tfrac53$ → $h[n]=[-\tfrac23(\tfrac12)^n+\tfrac53(-\tfrac14)^n]u[n]$, med **selvsjekk** $h[0]=1,h[1]=-\tfrac34$. **Flere veier** (analyse §4): direkte serieutvikling (lang divisjon) som alternativ — vis begge og navngi dem. **Formelark-markering:** transformpar-tabellen *står på arket*; delbrøk/residy-teknikken er *ferdighet*.
- **Oppgavesjangre:** E, D. Mønstereksempel: «Finn $h[n]$ for $H(z)=\dfrac{1-z^{-1}}{1-\tfrac14 z^{-1}-\tfrac18 z^{-2}}$ ved delbrøk og residyer, og kontroller de to første leddene mot differanselikningen.»
- **Typiske feil (§5.6):** Fortegn på residyene $A,B$; glemme et $z^{-1}$-ledd i telleren; hoppe over polynomdivisjonen når gradene er like (mister direkteleddet); feil ROC-gren (kausal vs. antikausal invers).
- **Quiz: 22 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (2.A z-transform + ROC med kausal/antikausal-skille · 2.B egenskaper og transformpar (differanselikning→$H(z)$) · 2.C invers z-transform via delbrøk/residy → $h[n]$ med selvsjekk · 2.D blandet z-transform på eksamensnivå)

---

### Del 3 — Familie 1: Systemfunksjon, pol-nullpunkt, kaskade/parallell, stabilitet og fase  *(prioritet: PERFEKT — bokas største del)*

#### Kapittel 3.1: Differanselikning ↔ systemfunksjon $H(z)$ ↔ impulsrespons

- **id:** `ttt4120-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttt4120-2-3` · **kapitteltype:** teori
- **description:** Den frie oversettelsen mellom differanselikning, $H(z)$ og $h[n]$ — begge veier, med det gjennomgående filteret som gjennomgående eksempel.
- **Eksamensbelegg:** Tema 5, **4/4** — starter nesten hver oppg 1. Kjeden differanselikning↔$H(z)$↔$h[n]$ er selve inngangen til hele familien. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.2, 2.2, 2.3.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Fra **differanselikning** $\sum_k a_k y[n-k]=\sum_k b_k x[n-k]$ til **systemfunksjon** $H(z)=\frac{\sum b_k z^{-k}}{\sum a_k z^{-k}}=\frac{Y(z)}{X(z)}$ (via tidsskift, $a_0=1$-konvensjon); begge veier; avlese **teller = nullpunkt-polynom**, **nevner = pol-polynom**; $h[n]$ fra $H(z)$ (kap. 2.3) og differanselikningens rekursjon for selvsjekk. **FIR** ($H(z)$ polynom i $z^{-1}$, kun nullpunkt) vs. **IIR** (ekte nevner, poler). **Utledning som kreves aktivt:** full rundtur for det gjennomgående filteret differanselikning → $H(z)$ → poler/nullpunkt → $h[n]$. **Formelark-markering:** tidsskiftegenskapen *står på arket*; oversettelsen er *ferdighet*.
- **Oppgavesjangre:** A. Mønstereksempel: «Gitt $y[n]=\tfrac14 y[n-1]+\tfrac18 y[n-2]+x[n]-x[n-1]$: finn $H(z)$, identifiser poler og nullpunkt, og skriv opp $h[n]$.»
- **Typiske feil:** Fortegnsfeil ved flytting av $a_k y[n-k]$-ledd til $H(z)$-nevner; bytte om teller/nevner; glemme $a_0=1$; forveksle FIR/IIR fra $H(z)$-formen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Pol-nullpunkt, ROC, stabilitet og kausalitet — med begrunnelse

- **id:** `ttt4120-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-3-1` · **kapitteltype:** teori
- **description:** Pol-nullpunktdiagram med ROC, og de begrunnede klassifiseringene stabil/kausal — sensorregel A i praksis.
- **Eksamensbelegg:** Tema 1, **4/4** — kjernen i oppg 1. **Sensorregel A** bor her: klassifiseringspåstand krever polkriterie-begrunnelse. Skisse (pol-nullpunktdiagram + ROC) er selvstendig poenggivende. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1 (ROC), 3.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Pol-nullpunktdiagram** (pole–zero plot): faktorisér $H(z)$, plott poler (×) og nullpunkt (○) i $z$-planet, tegn enhetssirkelen, marker ROC; **stabilitet** ⇔ $|z|=1$ i ROC ⇔ (kausalt) alle poler $|p_i|<1$; **kausalitet** ⇔ ROC utenfor ytterste pol; kobling til BIBO (kap. 1.3). **Sensorregel A (egen `warning`):** hver påstand («stabilt», «kausalt») **begrunnes med polkriteriet** — ikke bare ja/nei. **Skissekrav:** pol-nullpunktdiagram med enhetssirkel og ROC-skravering for hvert eksempel. **Utledning:** vis for det gjennomgående filteret at polene $\tfrac12,-\tfrac14$ ligger innenfor ⇒ stabilt og kausalt, med ROC $|z|>\tfrac12$. **Formelark-markering:** ingen ny formel — ren *ferdighet* + skisse.
- **Oppgavesjangre:** B (+ N). Mønstereksempel: «Tegn pol-nullpunktdiagrammet med ROC for $H(z)=\dfrac{1-z^{-1}}{(1-\tfrac12 z^{-1})(1+\tfrac14 z^{-1})}$. Avgjør, med begrunnelse i polkriteriene, om systemet er kausalt og stabilt.»
- **Typiske feil (§5.7, sensorregel A):** Svare «ja, stabilt» uten polkriterie-begrunnelse; ROC-forvirring kausalt vs. antikausalt; glemme enhetssirkelen/ROC på skissen; plassere pol i ROC.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.3: Minimum fase, lineær fase, allpass og inverst filter

- **id:** `ttt4120-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `ttt4120-3-2` · **kapitteltype:** teori
- **description:** Fase-klassifiseringene — og fallgruven: nullpunkt på enhetssirkelen ⇒ IKKE minimum fase. Pluss allpass og inverst filter med ROC-bytte.
- **Eksamensbelegg:** Del av tema 1 (**4/4**); allpass/inverst filter tema 25 (**2/4**, des-2017/aug-2017). **Sensorregel B** (minimum-fase-fallgruven) er eksplisitt i 2015-fasiten og bor her. Prioritet: **perfekt** (min./lineær fase) / **kunne** (allpass, inverst filter).
- **Forkunnskaper/kryssbok:** kap. 3.2.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Minimum fase** (minimum phase) ⇔ **alle poler OG alle nullpunkt strengt innenfor** $|z|<1$; **lineær fase** (linear phase) ⇔ symmetrisk/antisymmetrisk $h[n]$ (FIR), konstant gruppeforsinkelse; **allpass** ⇔ $|H(f)|^2=1$ for alle $f$ (poler og nullpunkt i konjugert-resiprok par $p$ og $1/p$); **inverst filter** $H_I(z)=1/H(z)$ (bytter poler ↔ nullpunkt ⇒ **ny ROC og ny stabilitetsvurdering**). **Sensorregel B (egen `warning`):** nullpunkt **på** enhetssirkelen ⇒ **ikke** minimum fase selv med pol innenfor — vis eksplisitt med det gjennomgående filteret (nullpunkt ved $z=1$, på sirkelen). **Utledning:** vis at $H_I(z)$ for et filter med nullpunkt på/utenfor sirkelen blir ustabilt eller ikke-kausalt. **Formelark-markering:** $S_{hh}(z)=H(z)H(z^{-1})$ *står på arket* (allpass); resten *ferdighet*.
- **Oppgavesjangre:** C. Mønstereksempel: «Har $H(z)=\dfrac{1-z^{-1}}{(1-\tfrac12 z^{-1})(1+\tfrac14 z^{-1})}$ minimum fase? Begrunn. Finn det inverse filteret $H_I(z)$, dets poler/nullpunkt og ROC, og avgjør om $H_I$ er stabilt og kausalt.»
- **Typiske feil (§5.1, sensorregel B):** Kalle filteret minimum fase fordi polen er innenfor (overser nullpunkt på/utenfor sirkelen); blande minimum fase og stabilitet; glemme at inverst filter bytter poler/nullpunkt ⇒ ny ROC; tro at allpass betyr «konstant fase» (det er konstant *amplitude*).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.4: Kaskadeform og parallellform (faktorisering, delbrøk, residy)

- **id:** `ttt4120-3-4` · **number:** 3.4 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-3-3` · **kapitteltype:** teori
- **description:** De to realiseringsformene: kaskade $H_1H_2$ (faktorisér poler) og parallell $H_3+H_4$ (delbrøk/residy) — begge av det gjennomgående filteret, med telle-resonnementet om antall grupperinger.
- **Eksamensbelegg:** Temaene 2 og 3, **begge 4/4** — fast del av oppg 1, og broen til filterstrukturene i oppg 2 (Del 5). Telle-resonnementet («hvor mange kaskadestrukturer?») er dokumentert premiert (§4.5). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.3 (delbrøk/residy), 3.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Kaskadeform** $H(z)=\prod_i H_i(z)$: faktorisér nevner (og teller) i 1.-/2.-ordens seksjoner; **grupperingsvalg** (hvilket nullpunkt med hvilken pol) → **telle-resonnement** om antall gyldige kaskader; **parallellform** $H(z)=\sum_i H_i(z)$ via **delbrøk/residy** (kap. 2.3), med impulsrespons per gren. **Utledning som kreves aktivt:** for det gjennomgående filteret: kaskade $\frac{1-z^{-1}}{1-\tfrac12 z^{-1}}\cdot\frac{1}{1+\tfrac14 z^{-1}}$ (og alternative grupperinger), og parallell $\frac{-2/3}{1-\tfrac12 z^{-1}}+\frac{5/3}{1+\tfrac14 z^{-1}}$; kontrollér at begge gir samme $h[n]$. **Formelark-markering:** ren *ferdighet* (faktorisering + delbrøk).
- **Oppgavesjangre:** D. Mønstereksempel: «Skriv det gjennomgående filteret på (a) kaskadeform og (b) parallellform. Hvor mange ulike kaskaderealiseringer finnes, og hvorfor? Kontroller at begge former gir $h[0]=1$.»
- **Typiske feil (§5.6):** Delbrøkfeil (residyfortegn, glemt $z^{-1}$-ledd); feil faktorisering av 2.-ordens nevner; glemme at kaskade er *produkt* og parallell er *sum*; telle grupperinger feil.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.5: Familiedrill — Oppgave 1 (fra differanselikning til full pol-nullpunkt/fase-analyse)

- **id:** `ttt4120-3-5` · **number:** 3.5 · **estimatedMinutes:** 90 · **prerequisites:** `ttt4120-3-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppg 1-kjeden: differanselikning → $H(z)$ → poler/nullpunkt → kaskade + parallell → $h[n]$ → ROC/stabilitet/fase-klassifisering med begrunnelse, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker familie 1 samlet (temaene 1–5, alle **4/4**) i alle varianter. Både sensorregel A (polkriterie-begrunnelse) og B (minimum-fase-fallgruven) drilles eksplisitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) differanselikning → $H(z)$ (tidsskift, $a_0=1$); 2) faktorisér → poler og nullpunkt; 3) tegn pol-nullpunktdiagram med enhetssirkel + ROC; 4) klassifisér **med polkriterie-begrunnelse** (kausal/stabil/minimum fase/allpass) — sjekk eksplisitt for nullpunkt på sirkelen (regel B); 5) kaskadeform (+ telle grupperinger) og parallellform (delbrøk/residy); 6) $h[n]$ per parallellgren + selvsjekk mot rekursjonen; 7) evt. inverst filter (bytt poler/nullpunkt, ny ROC). **Gjennomregnet eksamenscase** (nyskrevet filter, f.eks. $H(z)=\frac{1+z^{-1}}{(1-\tfrac13 z^{-1})(1-\tfrac12 z^{-1})}$) med margnotater om hvor poengene sitter (begrunnelse, skisse, selvsjekk). **10–15 varianter** på eksamensnivå (min. fase / ikke, allpass, inverst filter, dobbeltpol, FIR-tilfelle).
- **Oppgavesjangre:** A, B, C, D, E. Mønstereksempel: «(a) Gitt $y[n]=\tfrac56 y[n-1]-\tfrac16 y[n-2]+x[n]$, finn $H(z)$, poler/nullpunkt og $h[n]$. (b) Er systemet stabilt, kausalt, minimum fase? Begrunn hver påstand. (c) Skriv $H(z)$ på kaskade- og parallellform.»
- **Typiske feil:** Hele §5.1/§5.6/§5.7-repertoaret samlet: klassifisering uten begrunnelse (A); minimum-fase-fallgruven (B); delbrøk-/residyfeil; ROC-forvirring; glemt skisse.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A differanselikning↔$H(z)$↔$h[n]$ · 3.B pol-nullpunkt/ROC/stabilitet med begrunnelse (sensorregel A) + minimum-fase-fallgruven (regel B) · 3.C kaskade- og parallellform med telle-resonnement · 3.D full oppg 1-klone på eksamensnivå (differanselikning → fase-analyse + inverst filter))

---

### Del 4 — Frekvensanalyse: DTFT, frekvensrespons, DFT og FFT  *(DTFT/frekvensrespons: KUNNE · DFT: KUNNE · FFT/vindu: KJENNE)*

#### Kapittel 4.1: DTFT og frekvensrespons $H(f)$

- **id:** `ttt4120-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttt4120-3-2` · **kapitteltype:** teori
- **description:** DTFT, frekvensresponsen $H(f)=H(z)\big|_{z=e^{j2\pi f}}$, amplitude/fase og filtertype (LP/HP/BP/AP) — koblingen fra pol-nullpunkt til frekvensvirkning.
- **Eksamensbelegg:** Filtertype-klassifisering (LP/HP/BP/AP) er tema 6, **3/4**; frekvensrespons brukes i allpass ($|H(f)|^2=1$) og i effekttetthet (Del 6). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 3.2–3.3.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **DTFT** $X(f)=\sum_n x[n]e^{-j2\pi f n}$ (periodisk med 1); **frekvensrespons** $H(f)=H(z)\big|_{z=e^{j2\pi f}}$; **amplituderespons** $|H(f)|$ og **faserespons** $\angle H(f)$; **filtertype** fra $|H(f)|$ ved $f=0$ og $f=\tfrac12$ (LP/HP/BP/notch/AP); geometrisk tolkning (pol nær sirkel ⇒ topp, nullpunkt på sirkel ⇒ null i $|H(f)|$). **Utledning:** vis at det gjennomgående filterets nullpunkt ved $z=1$ gir $H(f=0)=0$ ⇒ demper DC (høypass-preg). **Formelark-markering:** DTFT-definisjonen *står på arket*; tolkningen er *ferdighet* + skisse.
- **Oppgavesjangre:** B/N. Mønstereksempel: «Skisser $|H(f)|$ for det gjennomgående filteret ($f\in[0,\tfrac12]$), avgjør filtertypen, og forklar hvordan nullpunktet ved $z=1$ og polen ved $z=\tfrac12$ former responsen.»
- **Typiske feil:** Blande normalisert og fysisk frekvens; glemme at $|H(f)|$ er periodisk; tro at et nullpunkt utenfor sirkelen gir eksakt null i $|H(f)|$ (kun nullpunkt *på* sirkelen gir det); lese filtertype feil.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.2: DFT, IDFT og lineær konvolusjon via DFT

- **id:** `ttt4120-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttt4120-4-1` · **kapitteltype:** teori
- **description:** DFT/IDFT som samplet DTFT, sirkulær vs. lineær konvolusjon, og lengdekravet $N\ge M+L-1$ — grunnlaget for oppg 4s DFT-gren.
- **Eksamensbelegg:** DFT-størrelser (lineær konv.: $N\ge M+L-1$) + radix-2-lengde er tema 20, **2/4** (2015, des-2017). Fallgruve §5.9: glemme lengdekravet før man runder opp til toerpotens. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 4.1, 1.2 (konvolusjon).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **DFT** $X[k]=\sum_{n=0}^{N-1}x[n]e^{-j2\pi kn/N}$ og **IDFT**; DFT = samplet DTFT ($N$ punkter); **sirkulær konvolusjon** (produkt av DFT-er) vs. **lineær konvolusjon**; **lengdekravet** $N\ge M+L-1$ for at sirkulær = lineær (nullutfylling/zero-padding); frekvensoppløsning $\Delta f=1/N$. **Utledning:** vis hvorfor sirkulær konvolusjon av to sekvenser lengde $M,L$ krever $N\ge M+L-1$ for å unngå time-aliasing. **Formelark-markering:** DFT/IDFT-definisjonene *står på arket*; lengderesonnementet er *ferdighet*.
- **Oppgavesjangre:** M. Mønstereksempel: «To sekvenser har lengde $M=6$ og $L=9$. Hvilken minste DFT-lengde $N$ gir lineær konvolusjon, og hvilken toerpotens velger du for radix-2-FFT?»
- **Typiske feil (§5.9):** Bruke $N=\max(M,L)$ (gir time-aliasing); glemme $-1$ i $M+L-1$; velge toerpotens *før* man har sjekket lengdekravet; blande sirkulær og lineær konvolusjon.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Radix-2 FFT, overlap-add og vindu/spektral lekkasje  *(bredde, KJENNE)*

- **id:** `ttt4120-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttt4120-4-2` · **kapitteltype:** teori
- **description:** De lavfrekvente breddetemaene fra oppg 4: radix-2-prinsippet (butterflies, kompleksitet), overlap-add-filtrering, og vindu/lekkasje-avveiningen.
- **Eksamensbelegg:** Radix-2-prinsipp (tema 23), overlap-add (tema 21), vindu/lekkasje (tema 22) — alle **1/4** (typisk Johnsen-2015). Billige å dekke, gir trygghet mot «det ene konseptspørsmålet», men **drilles ikke hardt**. Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 4.2.
- **Innholdskontrakt:** MÅ KJENNE (konseptuelt). **Radix-2 FFT:** dele-og-hersk, $N^2\to \tfrac{N}{2}\log_2 N$ komplekse multiplikasjoner, butterfly-strukturen (kun prinsipp); **overlap-add** frekvensdomene-filtrering av lange signaler (blokkvis DFT-produkt + skjøting) og multiplikasjonstelling tid vs. frekvens; **vindu/lekkasje:** rektangulært vs. tapered (Hann/Hamming) vindu, hovedlobe-bredde vs. sidelobe-nivå, **oppløsning–lekkasje-avveiningen**. **Formelark-markering:** ingen tunge formler; konseptuelt oversiktskapittel — pek på at dette er 1/4-stoff.
- **Oppgavesjangre:** M/N (konsept). Mønstereksempel: «Forklar hvorfor et rektangulært vindu gir mest spektral lekkasje, og hvilken avveining et Hann-vindu innebærer for frekvensoppløsningen.»
- **Typiske feil:** Overinvestere i dette 1/4-stoffet på bekostning av de fire familiene; blande overlap-add og overlap-save; tro at FFT endrer resultatet (bare hastigheten) vs. direkte DFT.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A DTFT og frekvensrespons + filtertype (skisse $|H(f)|$) · 4.B DFT/IDFT og lineær konvolusjon med lengdekrav $N\ge M+L-1$ · 4.C radix-2/overlap-add/vindu (konsept, bredde) · 4.D blandet frekvensanalyse på eksamensnivå)

---

### Del 5 — Familie 2: Filterstrukturer og avrundingsstøy  *(prioritet: PERFEKT)*

#### Kapittel 5.1: Filterstrukturer — Direct Form II, kaskade og parallell (tegning)

- **id:** `ttt4120-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttt4120-3-4` · **kapitteltype:** teori
- **description:** Å tegne de tre realiseringsstrukturene (DF-II, kaskade, parallell) av et gitt filter — blokkskjema med forsinkelser, multiplikatorer og summasjonsnoder.
- **Eksamensbelegg:** Tema 7, **4/4** — fast del av oppg 2. Bygger direkte på kaskade/parallell fra kap. 3.4 (samme gjennomgående filter). Skisse er selvstendig poenggivende. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 3.4 (kaskade/parallell), 3.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Direct Form II (DF-II):** kanonisk struktur (minimalt antall forsinkelser $z^{-1}$), rekkefølge pol-del før nullpunkt-del; **kaskadestruktur:** seksjoner i serie (fra kap. 3.4); **parallellstruktur:** grener i parallell (fra delbrøk); blokkelementene forsinkelse $z^{-1}$, multiplikator (koeffisient), summasjonsnode; **telle multiplikatorer/forsinkelser** per struktur (fôrer støyregningen i 5.2). **Pragmatisk rigor:** støykilder trenger **ikke** tegnes inn som standard (§4.3) — men strukturen må være riktig. **Skissekrav:** korrekt blokkskjema for hver av de tre formene av det gjennomgående filteret. **Formelark-markering:** ingen formel — ren *ferdighet* + skisse.
- **Oppgavesjangre:** F. Mønstereksempel: «Tegn det gjennomgående filteret på (a) DF-II, (b) kaskade- og (c) parallellform. Angi antall forsinkelser og multiplikatorer i hver.»
- **Typiske feil:** Feil rekkefølge på pol/nullpunkt-del i DF-II; for mange forsinkelser (ikke-kanonisk); glemme en koeffisient/summasjonsnode; forveksle kaskade- og parallelltopologi.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Fixed-point avrundingsstøy — $\sigma_z^2=\sigma_e^2\sum h^2$ per struktur

- **id:** `ttt4120-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `ttt4120-5-1` · **kapitteltype:** teori
- **description:** Avrundingsstøyvariansen ved utgangen, $\sigma_z^2=\sigma_e^2\sum_k h_i^2[k]$, regnet per struktur — den tyngste utledningen i oppg 2.
- **Eksamensbelegg:** Tema 8, **4/4** — navet i oppg 2. Fallgruvene §5.2–5.3, 5.5 (feil telling av kilder; feil delfilter; par/odde-indeksdeling) er dokumentert. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1, 1.1 (geometriske summer), 6.1 (autokorrelasjon $r_{hh}[0]$ — foregripes; ellers klartekst).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Fixed-point-modellen:** hver multiplikasjon avrundes ⇒ additiv hvit støykilde med varians $\sigma_e^2=\Delta^2/12$; **utgangsstøyvarians** $\sigma_z^2=\sigma_e^2\sum_i r_{h_i h_i}[0]=\sigma_e^2\sum_i\sum_k h_i^2[k]$ der $h_i[n]$ er impulsresponsen **fra støyinjeksjonspunktet $i$ til utgangen** (ikke fra inngangen!); **energisum** via geometrisk sum: for et ledd $A p^n u[n]$ er $\sum_n(Ap^n)^2=\frac{A^2}{1-p^2}$; **par/odde-indeksdeling** for alternerende responser (f.eks. $(-\tfrac14)^n$) i $\sum|h[n]|$/$\sum h^2$. **Flere veier (§4.4):** $r_{hh}[0]$ ved residy/kontur *eller* ved kvadrering-og-summering — vis begge. **Utledning som kreves aktivt:** $\sigma_z^2$ for DF-II vs. parallellform av det gjennomgående filteret, med korrekt kildetelling. **Formelark-markering:** $r_{hh}[0]=\sum h^2=\int|H(f)|^2 df$ (Parseval) *står på arket*; kildetellingen og delfilter-valget er *ferdighet*.
- **Oppgavesjangre:** G. Mønstereksempel: «For DF-II-realiseringen av det gjennomgående filteret: identifiser avrundingsstøykildene, finn impulsresponsen fra hver kilde til utgangen, og regn den totale utgangsstøyvariansen $\sigma_z^2$ uttrykt ved $\sigma_e^2$.»
- **Typiske feil (§5.2–5.3, §5.5):** Feil antall støykilder per struktur; bruke $h[n]$ (inngang→utgang) i stedet for $h_i[n]$ (kilde→utgang); fortegn/indeksfeil i par/odde-splitting for $(-\tfrac14)^n$; feil geometrisk sum ($\frac{A^2}{1-p^2}$).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.3: Skalering mot overflow og S/N-sammenlikning

- **id:** `ttt4120-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `ttt4120-5-2` · **kapitteltype:** teori
- **description:** Skaleringsfaktoren mot overflow ($\sum|h|$ ved verste sum-node), tapet i S/N, og valg av beste struktur — toppsjikt-stoffet i oppg 2.
- **Eksamensbelegg:** Skalering/overflow + S/N-tap er tema 10, **2/4** (fullt utviklet i 2015, høy poengverdi, krevende — toppkarakter-markør §4). Struktursammenlikning på støy er tema 9, **3/4**. Prioritet: **kunne** (toppsjikt).
- **Forkunnskaper/kryssbok:** kap. 5.2.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Skalering mot overflow:** skaleringsfaktor $s$ slik at hver **summasjonsnode** holder seg innenfor tallområdet — bestemt av den **største** $\sum_n|h_{\text{til node}}[n]|$ (L1-norm) blant **alle** noder, ikke automatisk utgangsnoden; **S/N-forhold:** skalering demper signal ⇒ reduserer S/N; sammenlikn strukturer ($\sigma_z^2$ + skaleringstap) og **velg beste**; **pragmatisk rigor (§4.3):** ekstra avrundingsledd etter skalering kan utelates — begge svar godtas. **Utledning:** finn skaleringsfaktoren for det gjennomgående filteret ved å sjekke alle sum-noder, og sammenlikn S/N for DF-II vs. kaskade. **Formelark-markering:** $\sum|h[n]|$-normen er *ferdighet*.
- **Oppgavesjangre:** H. Mønstereksempel: «Finn skaleringsfaktoren som hindrer overflow i det gjennomgående filterets DF-II-struktur ved å vurdere alle summasjonsnoder, og forklar hvordan skaleringen påvirker S/N-forholdet.»
- **Typiske feil (§5.4):** Sjekke bare utgangsnoden (må sjekke alle); bruke $\sum h^2$ der $\sum|h|$ skal brukes for overflow; glemme at skalering koster S/N; ikke begrunne struktur­valget.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.4: Familiedrill — Oppgave 2 (struktur → avrundingsstøy → sammenlikning)

- **id:** `ttt4120-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `ttt4120-5-3` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppg 2-kjeden: tegn DF-II/kaskade/parallell → tell støykilder → regn $\sigma_z^2$ per struktur → skalering → sammenlikn og velg beste, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker familie 2 samlet (temaene 7–10). Bruker det gjennomgående filteret (samme som oppg 1) — «samme filter implementeres nå». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) tegn de tre strukturene (DF-II/kaskade/parallell); 2) identifisér avrundingsstøykildene per struktur (multiplikatorer); 3) finn $h_i[n]$ fra hver kilde til utgang; 4) regn $\sigma_z^2=\sigma_e^2\sum_i\sum_k h_i^2[k]$ (geometrisk sum, par/odde ved behov); 5) skaleringsfaktor fra verste sum-node ($\sum|h|$); 6) sammenlikn $\sigma_z^2$ + S/N og **velg beste struktur med begrunnelse**. **Gjennomregnet eksamenscase** (nyskrevet filter) med margnotater (kildetelling, delfilter-valg, verste node, pragmatisk rigor). **10–15 varianter** på eksamensnivå (ulike strukturer, med/uten skalering).
- **Oppgavesjangre:** F, G, H. Mønstereksempel: «For filteret $H(z)=\dfrac{1}{(1-\tfrac13 z^{-1})(1-\tfrac12 z^{-1})}$: (a) tegn DF-II og parallellform; (b) regn utgangsstøyvariansen for begge; (c) hvilken struktur gir lavest støy, og hvorfor?»
- **Typiske feil:** Hele §5.2–5.5-repertoaret: feil kildetelling, feil delfilter ($h$ vs. $h_i$), par/odde-feil, feil sum-node ved skalering, uttelling uten struktur­begrunnelse.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A tegne DF-II/kaskade/parallell + telle forsinkelser/multiplikatorer · 5.B avrundingsstøyvarians $\sigma_z^2=\sigma_e^2\sum h^2$ per struktur (kildetelling, geometrisk sum) · 5.C skalering mot overflow + S/N-sammenlikning · 5.D full oppg 2-klone på eksamensnivå (samme filter, tre strukturer, velg beste))

---

### Del 6 — Familie 3: Stokastiske signaler, parametrisk modellering og lineær prediksjon  *(prioritet: PERFEKT — nest største del)*

#### Kapittel 6.1: Stokastiske signaler — WSS, autokorrelasjon $\gamma_{XX}[l]$ og effekttetthet $\Gamma_{XX}(f)$

- **id:** `ttt4120-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-4-1` · **kapitteltype:** teori
- **description:** Rammeverket for oppg 3: WSS-prosesser, autokorrelasjon $\gamma_{XX}[l]$, effekttetthetsspekter $\Gamma_{XX}(f)$, og hvit støy gjennom et filter.
- **Eksamensbelegg:** $\gamma_{XX}[l]$ og $\Gamma_{XX}(f)$ fra hvit støy gjennom $H(z)$ er tema 12, **4/4**; WSS/ergodisitet-definisjoner tema 26, **2/4**. Prioritet: **perfekt** (γ/Γ) / **kunne** (definisjoner).
- **Forkunnskaper/kryssbok:** kap. 4.1 (DTFT), 1.2. Grunnleggende forventning/varians forutsettes (klartekst til statistikk-søsterbok).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **WSS** (wide-sense stationary): konstant middel, autokorrelasjon avhenger kun av lag $l$; **autokorrelasjon** $\gamma_{XX}[l]=E\{X[n]X[n+l]\}$, effekt $\gamma_{XX}[0]=\sigma_X^2$; **hvit støy** $\gamma_{WW}[l]=\sigma_W^2\delta[l]$, flatt spekter $\Gamma_{WW}(f)=\sigma_W^2$; **filtreringsrelasjonen** $\gamma_{YY}[l]=\sigma_W^2\, r_{hh}[l]$ og $\Gamma_{YY}(f)=\sigma_W^2|H(f)|^2$ når hvit støy $W$ passerer $H(z)$; **Wiener–Khintchin** $\Gamma_{XX}(f)=\text{DTFT}\{\gamma_{XX}[l]\}$. Kort om **ergodisitet** og korttidsstasjonaritet (definisjoner). **Utledning som kreves aktivt:** $\gamma_{YY}[l]$ og $\Gamma_{YY}(f)$ når hvit støy passerer det gjennomgående filterets pol-del. **Formelark-markering:** Wiener–Khintchin, $S_{hh}(z)=H(z)H(z^{-1})$ og Parseval *står på arket*; utregningen er *ferdighet*.
- **Oppgavesjangre:** I (+ N). Mønstereksempel: «Hvit støy med effekt $\sigma_W^2$ sendes gjennom $H(z)=\dfrac{1}{1-\tfrac12 z^{-1}}$. Finn utgangens effekttetthet $\Gamma_{YY}(f)$ og autokorrelasjon $\gamma_{YY}[l]$.»
- **Typiske feil:** Blande $\gamma_{XX}$ (stokastisk) og $r_{hh}$ (deterministisk energi); glemme $\sigma_W^2$-faktoren; feil symmetri ($\gamma_{XX}[-l]=\gamma_{XX}[l]$); bruke $|H(f)|$ i stedet for $|H(f)|^2$ i effekttettheten.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.2: Hvit støy gjennom filter — AR, MA og ARMA + modellorden

- **id:** `ttt4120-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-6-1` · **kapitteltype:** teori
- **description:** Klassifisering av det formende filteret som AR, MA eller ARMA, og bestemmelse av modellorden — kjernen i oppg 3s første del.
- **Eksamensbelegg:** AR/MA/ARMA-klassifisering + orden er tema 11, **4/4**. Bygger på det gjennomgående filteret (ARMA(2,1)) og dets rene pol-del (AR(2)). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1, 3.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Modelltypene** som formende filter for hvit støy: **MA($q$)** = kun nullpunkt (FIR, $H(z)=\sum_{k=0}^q b_k z^{-k}$); **AR($p$)** = kun poler ($H(z)=1/\sum_{k=0}^p a_k z^{-k}$); **ARMA($p,q$)** = begge; **orden** avlest fra pol-/nullpunkttall; sammenhengen modell ↔ $H(z)$ ↔ differanselikning ↔ $\gamma_{XX}$-form. **Utledning som kreves aktivt:** vis at det gjennomgående filteret gir en **ARMA(2,1)**-utgang, mens pol-delen alene gir **AR(2)**; skriv modell-differanselikningen. **Formelark-markering:** ingen ny formel — *ferdighet* (gjenkjenning).
- **Oppgavesjangre:** I (+ N). Mønstereksempel: «En prosess $Y[n]$ genereres ved å sende hvit støy gjennom $H(z)=\dfrac{1-z^{-1}}{1-\tfrac14 z^{-1}-\tfrac18 z^{-2}}$. Klassifisér modellen (AR/MA/ARMA) og angi ordenen. Hva blir modellen hvis nullpunktet fjernes?»
- **Typiske feil:** Kalle et alt-pol-filter MA (det er AR); feil orden (telle poler/nullpunkt feil); blande modellens differanselikning med systemets; tro at ARMA alltid trengs (ofte holder AR).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.3: Lineær prediksjon — Normal-likningene, AR(1)/AR(2) og $\sigma_f^2$

- **id:** `ttt4120-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `ttt4120-6-2` · **kapitteltype:** teori
- **description:** Beste lineære prediktor via Normal-likningene, koeffisientene $a_1,a_2$ for AR(1)/AR(2), og prediksjonsfeileffekten $\sigma_f^2$ — den tyngste regningen i oppg 3.
- **Eksamensbelegg:** Lineær prediksjon via Normal-likninger er tema 13 (**4/4**); prediksjonsfeileffekt $\sigma_f^2$ (Yule–Walker, $n=0$) er tema 14 (**4/4**). Fallgruven §5.10 (forveksle Normal- og autokorrelasjonslikning; glemme $a_0=1$) er dokumentert. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Lineær prediktor** $\hat X[n]=-\sum_{k=1}^p a_k X[n-k]$, prediksjonsfeil $f[n]=X[n]-\hat X[n]$; **Normal-likningene (Yule–Walker for $n=1\ldots p$):** $\sum_{k=1}^p a_k\gamma_{XX}[n-k]=-\gamma_{XX}[n]$ — løser for koeffisientene $a_1,\ldots,a_p$; **prediksjonsfeileffekten ($n=0$-likningen):** $\sigma_f^2=\gamma_{XX}[0]+\sum_{k=1}^p a_k\gamma_{XX}[k]$; **fortegnskonvensjon $a_0=1$**; AR(1): $a_1=-\gamma_{XX}[1]/\gamma_{XX}[0]$; AR(2): $2\times2$-system. **Utledning som kreves aktivt:** sett opp og løs Normal-likningene for AR(2) fra gitte $\gamma_{XX}[0],\gamma_{XX}[1],\gamma_{XX}[2]$, og regn $\sigma_f^2$. **Formelark-markering:** Yule–Walker-/Normal-oppsettet (med $a_0=1$) *står på arket*; oppsett + løsning er *ferdighet*.
- **Oppgavesjangre:** J. Mønstereksempel: «En WSS-prosess har $\gamma_{XX}[0]=4,\ \gamma_{XX}[1]=2,\ \gamma_{XX}[2]=1$. Finn den beste AR(2)-prediktorens koeffisienter via Normal-likningene, og regn prediksjonsfeileffekten $\sigma_f^2$.»
- **Typiske feil (§5.10):** Forveksle Normal-likningene ($n=1\ldots p$ → koeffisienter) og $n=0$-likningen ($\sigma_f^2$); glemme $a_0=1$; fortegnsfeil (prediktoren har $-a_k$); løse $2\times2$-systemet feil.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.4: Whitening-filter og Wiener-filterprinsippet

- **id:** `ttt4120-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `ttt4120-6-3` · **kapitteltype:** teori
- **description:** Whitening-filteret (invers av det formende filteret) og Wiener-filterprinsippet (MSE-optimal estimering, blokkskjema) — høyverdig beredskap i oppg 3.
- **Eksamensbelegg:** Whitening-filter er tema 15, **2/4** (2016, aug-2017); Wiener-filterprinsipp tema 16, **2/4** (2015, des-2017). Analysen: dekk **begge** grener siden foreleser veksler. Prioritet: **kunne** (toppsjikt).
- **Forkunnskaper/kryssbok:** kap. 6.2–6.3, 3.3 (inverst filter).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Whitening-filter** $H_W(z)=1/H_{\text{form}}(z)$: gjør en farget prosess hvit igjen (invers av det formende filteret); knytning til lineær prediksjon (prediksjonsfeilfilteret **er** et whitening-filter); stabilitet/kausalitet krever minimum-fase formende filter (bro til kap. 3.3). **Wiener-filterprinsippet:** MSE-optimal estimering $\hat X$ av ønsket signal fra støyete observasjon; **blokkskjema** (signal + støy → Wiener-filter → estimat); ortogonalitetsprinsippet (feil ⊥ data); løsning i frekvensdomenet $H_{\text{opt}}(f)=\Gamma_{XX}(f)/\Gamma_{YY}(f)$ (konseptuelt). **Skissekrav:** blokkskjema for whitening og Wiener. **Formelark-markering:** effekttetthets-relasjonene *står på arket*; prinsippet + skisse er *ferdighet*.
- **Oppgavesjangre:** J (+ N). Mønstereksempel: «Det formende filteret er $H(z)=\dfrac{1}{1-\tfrac12 z^{-1}}$. Finn whitening-filteret, forklar hvorfor det gjør utgangen hvit, og tegn blokkskjemaet. Er whitening-filteret stabilt?»
- **Typiske feil:** Whitening-filter uten å sjekke minimum fase (kan bli ustabilt/ikke-kausalt); blande whitening (invers) og Wiener (MSE-optimal); tro at Wiener-filteret alltid er kausalt; feil retning på $\Gamma_{XX}/\Gamma_{YY}$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.5: Familiedrill — Oppgave 3 (hvit støy → modell → prediksjon → whitening/Wiener)

- **id:** `ttt4120-6-5` · **number:** 6.5 · **estimatedMinutes:** 90 · **prerequisites:** `ttt4120-6-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppg 3-kjeden: hvit støy → $\gamma_{XX}$/$\Gamma_{XX}$ → AR/MA/ARMA + orden → beste AR-prediktor via Normal-likninger → $\sigma_f^2$ → whitening/Wiener, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker familie 3 samlet (temaene 11–16). Bruker det gjennomgående filteret som formende filter — «samme filter brukes nå til modellering». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) hvit støy inn → $\Gamma_{YY}(f)=\sigma_W^2|H(f)|^2$, $\gamma_{YY}[l]=\sigma_W^2 r_{hh}[l]$; 2) klassifisér modell (AR/MA/ARMA) + orden; 3) sett opp Normal-likningene fra $\gamma_{XX}$, løs for $a_k$; 4) $n=0$-likningen → $\sigma_f^2$; 5) whitening-filter = invers (sjekk minimum fase) / Wiener-blokkskjema. **Gjennomregnet eksamenscase** (nyskrevet formende filter) med margnotater (γ vs. r, $a_0=1$, Normal vs. $n=0$). **10–15 varianter** på eksamensnivå (AR(1)/AR(2), MA, ARMA, whitening eller Wiener).
- **Oppgavesjangre:** I, J (+ N). Mønstereksempel: «Hvit støy sendes gjennom $H(z)=\dfrac{1}{1-\tfrac13 z^{-1}}$. (a) Klassifisér prosessen og finn $\gamma_{YY}[l]$. (b) Bestem den beste AR(1)-prediktoren og $\sigma_f^2$. (c) Finn whitening-filteret.»
- **Typiske feil:** Hele §5.10-repertoaret: γ/r-forveksling, $a_0=1$ glemt, Normal vs. $n=0$-likning byttet, whitening uten minimum-fase-sjekk.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A hvit støy → $\gamma_{XX}$/$\Gamma_{XX}$ + WSS-definisjoner (sjanger N) · 6.B AR/MA/ARMA-klassifisering + modellorden · 6.C lineær prediksjon: Normal-likninger for AR(2) + $\sigma_f^2$ · 6.D full oppg 3-klone på eksamensnivå (modell → prediksjon → whitening/Wiener))

---

### Del 7 — Familie 4: Sampling, aliasing og multirate  *(prioritet: PERFEKT)*

#### Kapittel 7.1: Samplingsteoremet, Nyquist og aliasing — med spektrumskisse

- **id:** `ttt4120-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-4-1` · **kapitteltype:** teori
- **description:** Samplingsteoremet, Nyquist-grensen, aliasing, og skissen av spekteret $X(f)$ til et samplet signal — de to 4/4-ferdighetene i oppg 4.
- **Eksamensbelegg:** Samplingsteorem/Nyquist/aliasing er tema 17 (**4/4**); skisse av samplet spektrum (periodisk) tema 18 (**4/4**). Skisse er selvstendig poenggivende. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1 (DTFT).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Samplingsteoremet** (formelarket) $X(f)=F_s\sum_k X_a([f-k]F_s)$ — samplet spektrum = periodisk repetisjon av det analoge, periode $F_s$; **Nyquist-grensen** $F_s>2F_{\max}$; **aliasing** når $F_s$ er for lav (spektralrepetisjoner overlapper) og folde-frekvensen $F_s/2$; **skisse av samplet spektrum:** riktig periodisitet, skalering ($F_s$-faktor) og evt. overlapp. **Utledning:** vis hvordan et smalbåndet analogt spektrum repeteres ved sampling, og hvor foldingen skjer ved underabtasting. **Skissekrav:** $X(f)$ for samplet signal med og uten aliasing. **Formelark-markering:** samplingsteoremet *står på arket*; skissen + aliasing-resonnementet er *ferdighet*.
- **Oppgavesjangre:** K (+ N). Mønstereksempel: «Et analogt signal har spektrum begrenset til $F_{\max}=3$ kHz og samples ved $F_s=5$ kHz. Skisser spekteret til det samplede signalet, marker folde-frekvensen, og forklar hvor aliasing oppstår.»
- **Typiske feil (§5.8):** Feil Nyquist-grense; glemme $F_s$-skaleringen i skissen; feil periodisitet; tegne aliasing der det ikke er, eller motsatt.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 7.2: Multirate — desimering, interpolasjon og rate-konvertering $I/D$

- **id:** `ttt4120-7-2` · **number:** 7.2 · **estimatedMinutes:** 65 · **prerequisites:** `ttt4120-7-1` · **kapitteltype:** teori
- **description:** Desimering (nedsampling + antialiasfilter), interpolasjon (oppsampling + interpolasjonsfilter) og brøkvis rate-konvertering $I/D$ — med spektrumskisser i hvert steg.
- **Eksamensbelegg:** Multirate (desimering/interpolasjon/rate-konvertering $I/D$) er tema 19, **4/4** — dreiningen i oppg 4 fra 2016 og framover (mens 2015 vektet DFT/FFT). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Desimering med $D$** (decimation): lavpass-antialiasfilter (båndbredde $1/2D$) **før** nedsampling ↓$D$; spekteret strekkes med faktor $D$; **interpolasjon med $I$** (interpolation): oppsampling ↑$I$ (sett inn nuller) + lavpass-interpolasjonsfilter (fjerner bildespektra), forsterkning $I$; spekteret komprimeres med faktor $I$; **rate-konvertering $I/D$:** oppsample ↑$I$ → felles lavpassfilter (min. av de to grensene) → nedsample ↓$D$; rekkefølgen (opp før ned) unngår unødig informasjonstap. **Skissekrav:** spektrum i hvert steg (opp/filter/ned). **Utledning:** vis hvorfor nedsampling **uten** antialiasfilter gir aliasing, og hvorfor oppsampling må komme før nedsampling i $I/D$. **Formelark-markering:** multirate-relasjonene *står på arket*; skissene + filtergrensene er *ferdighet*.
- **Oppgavesjangre:** L. Mønstereksempel: «Et signal samplet ved $F_s$ skal rate-konverteres med faktor $\tfrac{3}{2}$. Tegn blokkskjemaet ($\uparrow 3$, lavpass, $\downarrow 2$), angi lavpassfilterets grensefrekvens, og skisser spekteret etter hvert steg.»
- **Typiske feil (§5.8):** Glemme antialiasfilter før nedsampling; feil grensefrekvens på filteret; feil rekkefølge (ned før opp i $I/D$); glemme $I$-forsterkningen ved interpolasjon; feil strekking/komprimering i skissen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 7.3: Familiedrill — Oppgave 4 (sampling/aliasing + multirate-skisser)

- **id:** `ttt4120-7-3` · **number:** 7.3 · **estimatedMinutes:** 90 · **prerequisites:** `ttt4120-7-2` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppg 4-kjeden: samplingsteorem/aliasing → spektrumskisse → multirate (desimering/interpolasjon/rate-konvertering) → evt. DFT/FFT-lengder, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker familie 4 samlet (temaene 17–20). Både multirate-grenen (2016→) og DFT/FFT-grenen (2015) representeres. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) tegn/analyser samplet spektrum (periodisitet, $F_s$-skalering, aliasing?); 2) desimering: antialiasfilter → ↓$D$, skisse; 3) interpolasjon: ↑$I$ → interpolasjonsfilter, skisse; 4) rate-konvertering $I/D$: ↑$I$ → felles lavpass → ↓$D$; 5) evt. DFT-lengde ($N\ge M+L-1$ → toerpotens). **Gjennomregnet eksamenscase** (nyskrevne rater) med margnotater (Nyquist, filtergrenser, rekkefølge, skalering). **10–15 varianter** på eksamensnivå (ren sampling, desimering, interpolasjon, brøkvis $I/D$, DFT-lengde).
- **Oppgavesjangre:** K, L, M. Mønstereksempel: «Et signal med analog båndbredde $4$ kHz samples ved $F_s=10$ kHz. (a) Skisser spekteret. (b) Det skal desimeres med $D=2$ — angi antialiasfilteret og skisser resultatet. (c) Deretter interpoleres med $I=3$ — skisser sluttspekteret.»
- **Typiske feil:** Hele §5.8-repertoaret: feil Nyquist-grense, manglende antialiasfilter, feil rekkefølge i $I/D$, feil skisse-skalering, glemt lengdekrav i DFT-delen.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (7.A samplingsteorem/Nyquist/aliasing + spektrumskisse · 7.B desimering og interpolasjon med antialiasfilter/skisser · 7.C brøkvis rate-konvertering $I/D$ · 7.D full oppg 4-klone på eksamensnivå (sampling + multirate + evt. DFT-lengde))

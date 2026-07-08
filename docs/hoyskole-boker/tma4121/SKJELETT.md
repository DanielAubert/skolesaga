# Bokskjelett: TMA4121 Matematikk 4 — eksamensrettet lærebok (NTNU)

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (11 velkarakteriserte sett H2014–H2024 fra **TMA4120
> Matematikk 4K**-arkivet, ~47 filer, alle tekst-utvinnbare løsningsforslag +
> de utdelte formelarkene lest oppgave-for-oppgave). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her.
>
> **⚠️ Kilde- vs. målemne (les før bygging):** Kildearkivet er **TMA4120
> Matematikk 4K**, som NTNU har **erstattet med TMA4121 Matematikk 4** i
> matematikkreformen (aktivt undervist vår 2026). Reformen **utvidet** faget:
> TMA4121 dekker **fire områder — (1) flervariabel kalkulus, (2) partielle
> differensiallikninger, (3) kompleks funksjonsteori, (4) lineær algebra**. To
> ting er kritiske for hele boka og gjentas i kontraktene under:
> 1. **Innholdskontinuitet (VERIFISERT trygg kjerne):** **kompleks
>    funksjonsteori** (analytisitet, CR, kompleks integrasjon, Laurent, residyer)
>    og **PDE (separasjon)** står *eksplisitt* i TMA4121-pensum og er ryggraden i
>    TMA4120-arkivet. Bygg boka her.
> 2. **Kode E — INGEN hjelpemidler, på Inspera (VERIFISERT formatbrudd).** TMA4120
>    hadde kode C med **utdelt transformtabell**. Den tabellen **forsvinner** i
>    TMA4121. Fourier-/Laplace-**transform** står dessuten *ikke* eksplisitt blant
>    de fire områdene (vekt usikker; Laplace var 100 % i TMA4120). Derfor: eget
>    **«reproduser tabellen»-treningsspor** + eksplisitt **utledning** av
>    transformpar, og all transformdekning **merket `(verifiser)`**.
> 3. **NYTT, ikke i arkivet:** **flervariabel kalkulus** og **lineær algebra** —
>    egne **merkede utvidelsesmoduler «(TMA4121-tillegg, verifiser mot pensum)»**
>    som kryssrefererer søsterbøkene `tma4101` (flervariabel) og `tma4110`
>    (lineær algebra). Kan ikke prognostiseres fra dette arkivet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4121` |
| Tittel | **TMA4121 Matematikk 4 — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU |
| Arketype | Regnefag (kvantitativt emne med svært fast oppgavetradisjon i kjernen) |
| Antall kapitler | **41** (1 eksamenskart + 34 tema, hvorav 7 drill + 4 eksamenstrening + 2 merkede tilleggsmoduler) |
| Estimert totaltid | **3 165 min ≈ 52,75 timer** |
| Quiz totalt | **613** (krav ≥500) |
| Flashcards totalt | **630** (krav ≥500) |
| Reform/format | TMA4121 (reform), **hjelpemiddelkode E — ingen hjelpemidler**, Inspera, 4 t, A–F *(verifiser mot første reelle TMA4121-sett)* |

**Pitch (ett avsnitt):** TMA4120-arkivet (kilden) er blant de mest forutsigbare i
hele materialet: hvert sett består av **6–8 like-vektede oppgaver, ingen
flervalg**, og de samme seks søylene går igjen år etter år. **Kompleks
funksjonsteori er ryggraden** og er **fullt kontinuerlig** inn i TMA4121:
**residy/kurveintegral 91 %**, **Taylor/Laurent + konvergensområde 82 %**,
**analytisitet/Cauchy–Riemann/harmonisk konjugert 73 %**, singularitetsklassifisering
55 %. Den andre trygge søylen er **PDE-separasjon 91 %** (varme-/bølge-/Laplace-
likning). To søyler er høyfrekvente i kilden men **usikre i vekt** for TMA4121 fordi
den utdelte tabellen forsvinner med kode E: **Laplace-transform (100 % i TMA4120)**
og **Fourier-rekke (73 %)**/Fourier-transform (64 %). I tillegg legger reformen til
**flervariabel kalkulus** og **lineær algebra** som arkivet ikke belyser. Denne
boka vekter derfor **kompleks analyse + PDE tyngst** (den trygge kjernen), dekker
transformene **grundig men med kode E-tilpasset utledningsspor og `(verifiser)`-
merking**, og legger de to nye områdene i **eksplisitt merkede tilleggsmoduler** som
kryssreferer søsterbøkene. Arbeidsdeling mot `tma4135` (Matematikk 4D):
**tma4121 EIER kompleks analyse** (residy/Laurent/CR — fraværende i 4D); **tma4135
EIER numerikk** (fraværende i 4K); den delte Laplace/Fourier/PDE-kjernen
**kryssrefereres**.

**Kritisk kalibrering — «alle svar begrunnes» (gjelder HELE boka):** Den faste
instruksen i arkivet er *«Alle svar må begrunnes; vis tydelig hvordan du kom fram
til svaret.»* Bar fasit uten utledning gir **ikke** full uttelling. Tre sensorregler
går igjen i alle innholdskontrakter under:
1. **Teorem-/metodenavn skal bæres eksplisitt** — «Cauchy–Riemanns likninger»,
   «Cauchys integralteorem», «Cauchys integralformel», «Laurents teorem»,
   «residysetningen», «ML-ulikheten», «Weierstrass' M-test», «konvergenssetningen
   for Fourier-rekker», «konvolusjonsteoremet», «andreforskyvningsteoremet»,
   «superposisjonsprinsippet». Fasiten skriver dem ut; det skal boka også.
2. **Flere gyldige metoder premieres alle** — delbrøk **vs.** kvadratkomplettering
   ved invers Laplace; grensedefinisjon av `f'` **vs.** Cauchy–Riemann; residysetningen
   **vs.** Cauchys integralformel for deriverte; endelig sum **vs.** uendelig rekke i
   separasjon. Der en sjanger har flere aksepterte veier, skal kapitlet vise **minst
   to** og navngi dem.
3. **Feil i egen oppgavetekst / feilforplantning tolereres** — degenererte tilfeller
   håndteres fornuftig; riktig videre­regning på feil mellomverdi gir uttelling i
   senere delpunkt.

**Kode E-prinsippet (gjelder HVERT delkapittel med transform/formel — bokas
signaturgrep):** Fordi TMA4121 er **kode E (ingen hjelpemidler)**, kan studenten
**ikke** anta noen utdelt tabell. Hvert transform-/formeltungt kapittel må derfor
eksplisitt skille:
- **«Må reproduseres fra hukommelsen — tren oppslaget innenfra»**: de standard
  transformparene ($\mathcal{L}\{1\}, \mathcal{L}\{t^n\}, \mathcal{L}\{e^{at}\},
  \mathcal{L}\{\cos\omega t\}, \mathcal{L}\{\sin\omega t\}, \mathcal{L}\{\cosh/\sinh\}$,
  Fourier-Gauss-paret, residyformelen for pol av orden $n$, generalløsningen av
  2. ordens lineær ODE i tre rot-tilfeller). I TMA4120 sto disse på arket; i
  TMA4121 må de **kunnes utenat** — kapitlet har et «reproduser tabellen»-mål.
- **«Må kunnes utledes aktivt»**: selve utledningen av standardparene
  ($\mathcal{L}\{\cos/\sin\}$ via delvis integrasjon eller Euler; Gauss-transformen),
  delbrøk + kvadratkomplettering, begge forskyvningsteoremene, konvolusjonsteoremet,
  CR-sjekk + harmonisk konjugert, alle tre $k$-tilfellene i separasjon, ML-argumentet,
  dobbeltpol-residy, annulus-inndeling. **Boka legger mer vekt på utledning av
  standardpar enn TMA4120-fasitene gjorde** (der tabellen ble delt ut). Kap. 9.1 er
  et eget «reproduser tabellen»-verksted.

**De seks obligatoriske delstegene (skiller toppsjiktet — hver får egen `warning`):**
Sensor honorerer disse eksplisitt, og de utgjør bokas viktigste drillmål. Hvert
listes i sitt hovedkapittel og samles i Del 0 + studieguiden:
- **(i)** Alle tre $k$-tilfellene ($k>0$, $k=0$, $k<0$) i separasjon — kap. 7.1/7.6.
- **(ii)** $n=0$-leddet ved Neumann-rand — kap. 7.2.
- **(iii)** ML-argumentet for at halvsirkelbuen $\to 0$ (ikke valgfri) — kap. 4.4.
- **(iv)** Dobbeltpol-/orden-$n$-residyformelen (med derivasjonen) — kap. 4.2.
- **(v)** Konvergensområdet (annulus) for **hver** Laurent-rekke — kap. 3.3.
- **(vi)** Analytisitet krever en **hel omegn** (ikke et isolert CR-punkt) — kap. 1.3.

**Notasjonskonvensjoner boka skal speile slavisk** (fra settene og formelarkene):
- Kompleks analyse: $z=x+iy$, $f(z)=u(x,y)+iv(x,y)$; Cauchy–Riemann
  $u_x=v_y,\ u_y=-v_x$; $f'(z)$; $\overline{z}$, $|z|^2=z\overline z$;
  $\operatorname{Res}_{z=z_0}f$; annulus $A:\ r<|z-z_0|<R$; kontur $\oint_C$;
  kompleks logaritme $\operatorname{Ln} z=\ln|z|+i\operatorname{Arg}z$, $-\pi<\operatorname{Arg}z\le\pi$.
- Laplace: $\mathcal{L}$, $F(s)=\mathcal{L}\{f\}$, $Y(s)$; $\mathcal{L}\{y'\}=sY-y(0)$;
  Heaviside $u(t-a)$, Dirac $\delta(t-a)$; konvolusjon
  $(g*y)(t)=\int_0^t g(\tau)y(t-\tau)\,d\tau$.
- Fourier: $\hat f(\omega)$ for transformen; koeffisienter $a_n,b_n$ (reell rekke)
  og $c_n$ (kompleks rekke $\sum c_n e^{in\pi x/L}$); halvintervall $[0,L]$.
- PDE: separasjonsansatsen $u(x,t)=F(x)G(t)$, separasjonskonstant $k$ (behandle
  **alltid** $k>0,\ k=0,\ k<0$); bølgefart $c$; d'Alemberts formel.
- Svar oppgis som **eksakt uttrykk** der mulig. Engelsk fagterminologi i parentes
  ved første forekomst der den er innarbeidet (f.eks. «keyhole-kontur»).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:
kontinuerlige «må beherskes perfekt»-søyler får full kapittelkjede + drillkapittel,
transformblokken dekkes grundig men med kode E-/`(verifiser)`-merking, de nye
områdene får merkede tilleggsmoduler.

| Del | Tittel | Kap. | Begrunnelse (frekvens/status → omfang) |
|---|---|---|---|
| 0 | Eksamenskart, føringsstandard og kode E-håndverk | 1 | Prioriteringsverktøyet + kjerne i studieguiden. Presenterer sjanger-katalogen A–K, føringsstandarden, kode E-prinsippet og de seks delstegene. |
| 1 | Kompleks funksjonsteori: analytisitet, Cauchy–Riemann, harmonisk konjugert | 5 | **73 %**, kontinuerlig → nivå 1 «perfekt». Isolert-CR-fella (delsteg vi), direkte $f'$-alternativ, harmonisk konjugert. Inkl. fundament + elementære komplekse funksjoner. |
| 2 | Kompleks integrasjon og Cauchys teoremer | 4 | Kurveintegral 91 % (oppsettsapparatet). Cauchys integralteorem/-formel, veiuavhengighet — grunnlaget for residyer. |
| 3 | Taylor- og Laurent-rekker med konvergensområde | 4 | **82 %**, kontinuerlig → nivå 1 «perfekt». Geometrisk rekke, annuli, radius via nærmeste singularitet, leddvis derivasjon/integrasjon (delsteg v). |
| 4 | Residyer, residysetningen og reelle integraler | 6 | **91 %**, kontinuerlig, den tyngste kompleks-blokken → nivå 1 «perfekt» + drillkapittel. Klassifisering, dobbeltpol (iv), halvsirkel + ML (iii), keyhole/branch. |
| 5 | Fourier-rekker | 4 | **73 %**, trygg som PDE-verktøy → «kunne/perfekt». Symmetri, sprangkonvergens $\tfrac12(f^++f^-)$, Weierstrass' M-test, kompleks form. |
| 6 | Fourier- og Laplace-transform *(kode E — utled parene)* | 5 | Laplace 100 %/Fourier-transform 64 % i TMA4120, **vekt usikker (verifiser)**. Dekkes grundig med **utledning** framfor tabelloppslag + «reproduser tabellen»-drill. |
| 7 | Partielle differensiallikninger og Sturm–Liouville | 6 | **91 %**, kontinuerlig, den tyngste enkeltoppgaven → nivå 1 «perfekt» + drillkapittel. Tre $k$-tilfeller (i), Neumann $n=0$ (ii), transform-metode, Sturm–Liouville. |
| 8 | TMA4121-tillegg *(verifiser mot pensum)* | 2 | **NYTT i TMA4121, ikke i arkivet.** Flervariabel kalkulus (kryssref `tma4101`) + lineær algebra (kryssref `tma4110`). Merket usikkerhet, kan ikke prognostiseres. |
| 9 | Eksamenstrening | 4 | Kode E-verksted (reproduser tabellen + føringsstandard) + 3 komplette øvingseksamener (6–8 oppg., kode E) med A-løsningsforslag. |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart, føringsstandard og kode E-håndverk |
| 1 | Kompleks funksjonsteori: analytisitet og Cauchy–Riemann |
| 2 | Kompleks integrasjon og Cauchys teoremer |
| 3 | Taylor- og Laurent-rekker |
| 4 | Residyer og reelle integraler |
| 5 | Fourier-rekker |
| 6 | Fourier- og Laplace-transform (kode E) |
| 7 | Partielle differensiallikninger og Sturm–Liouville |
| 8 | TMA4121-tillegg: flervariabel kalkulus og lineær algebra |
| 9 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **41 kapitler** — over DNA-rammen (20–35), på linje med tma4135 (36). Begrunnelse:
   TMA4121 dekker **fire pensumområder**. Kompleks analyse alene bærer fire kapitler-
   verdig av høyfrekvente søyler (analytisitet, integrasjon, Laurent, residyer),
   PDE er en full del, transformblokken en full del, **pluss** to nye områder som
   må dekkes. Ingen del kan kuttes uten å miste en dokumentert (eller pensumpålagt)
   sjanger.
2. **Kompleks analyse er delt på tre deler (1, 2, 3, 4)** i stedet for én — DNA sier
   én del per hovedtema, men kompleks-analyse-blokken er for stor og faglig heterogen
   (analytisitet vs. integrasjon vs. rekker vs. residyer) for én del; splitten følger
   naturlige undertema og gir hver sitt drill-/prøvenivå. Residydelen (Del 4) er
   størst fordi den er den tyngste og mest gjentakende kompleks-sjangeren (91 %).
3. **Seks drillkapitler (1.5, 2.4, 3.4, 4.6, 5.4, 7.6)** ligger inne i temadelene
   sine — sjangrene er 73–91 %-gjengangere (CR/analytisitet, kompleks integrasjon,
   Laurent, residy, Fourier-rekke, separasjon) som må drilles umiddelbart etter
   teorien (samme grep som tma4135/ECON1310). Del 9 beholder kode E-verkstedet og
   øvingseksamenene.
4. **Del 8 (tilleggsmodulene) er to merkede kapitler** som **ikke** kan bygges på
   TMA4120-arkivet — de får **eget `(verifiser)`-preg** og kryssreferer søsterbøkene
   `tma4101`/`tma4110`. De får **2 prøver hver** (ikke 4), fordi arkivbelegget mangler
   og vekten i TMA4121 er ukjent — dokumentert i §4.
5. **Del 6 (transform) merkes gjennomgående `(verifiser)`** — den er høyfrekvent i
   kilden men usikker i TMA4121 pga. kode E og pensumformuleringen. Den er full, men
   nedtones eksplisitt i prioriteringskartet.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». **Sjangerbokstavene (A–K)** refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
A analytisitet/Cauchy–Riemann · B harmonisk konjugert · C kompleks integrasjon
(Cauchys teorem/formel) · D Taylor/Laurent + konvergensområde · E residy — lukket
kurve · F residy — reelt uegentlig integral (halvsirkel + ML) · G Fourier-rekke ·
H Laplace-transform *(verifiser)* · I Fourier-transform *(verifiser)* · J PDE-
separasjon (varme/bølge/Laplace) · K TMA4121-tillegg (flervariabel/lineær algebra,
verifiser). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3).

Hvert teorikapittel skal (jf. DNA + Leserkrav) inneholde: `tip` **Eksamensvinkel**,
`text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (alle symboler
og formler i delkapitlet, per delkapittel — ikke arvet), `text` **Motivasjon**,
`definition`/`theorem` i emnets notasjon **med kode E-markering** («reproduser fra
hukommelsen» vs. «utled»), `text` **Utledning med intuisjon** (kun for det som skal
kunne *utledes*), 2–4 `example` (siste på eksamensnivå, løst som A-besvarelse),
`warning` **Typiske feil**, 6–12 `exercise` (stigende, `solution` + `hints`),
`collapsible` **Repetisjonsoppgaver**.

---

### Del 0 — Eksamenskart, føringsstandard og kode E-håndverk

#### Kapittel 0.1: Slik testes TMA4121 — søylene, føringsstandarden og kode E

- **id:** `tma4121-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de kontinuerlige søylene, transformusikkerheten, de nye tilleggsområdene, sjanger-katalogen A–K, føringsstandarden og de seks delstegene — studentens prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel — bygger på alle 11 velkarakteriserte TMA4120-sett + TMA4121s emneside. Skal gjengi: (i) **formen** — kilden var 4-timers skriftlig skoleeksamen, **6–8 like-vektede oppgaver, ingen flervalg**, «alle svar begrunnes»; **TMA4121-endring (verifisert):** **kode E — ingen hjelpemidler**, Inspera, 4 t, A–F *(verifiser detaljer mot første reelle sett)*; (ii) **temafrekvens-tabellen** (Laplace 100 % *(verifiser vekt)*, residy/kurveintegral 91 %, PDE-separasjon 91 %, Taylor/Laurent 82 %, Fourier-rekke 73 %, analytisitet/CR 73 %, Fourier-transform 64 % *(verifiser)*, singularitetsklassifisering 55 %, kompleks likning 9 %, konform avbildning 9 %, flervariabel kalkulus/lineær algebra = **nytt, 0 % i arkivet**); (iii) **kontinuitetskartet:** grønt = kompleks analyse + PDE (bygg her); gult `(verifiser)` = transformer; rødt/merket = flervariabel + lineær algebra (nytt); (iv) **kode E-prinsippet** — hva som må reproduseres fra hukommelsen vs. utledes, og at den utdelte tabellen er borte; (v) **prognose** for et TMA4121-kompleks-/PDE-/transform-sett (fra analysen §7): én Laplace-, én Fourier-rekke-, én PDE-separasjons-, én analytisitet/CR-, én Laurent-, én residyoppgave, **pluss** sannsynlig flervariabel-/lineæralgebra-innslag.
- **Innholdskontrakt:** Presenter **sjanger-katalogen A–K** som studentens sjekkliste. Presenter **føringsstandarden**: begrunn alt; bær teorem-/metodenavn eksplisitt (lang navneliste fra §1); vis flere metoder der de finnes; tegn kurven og marker singularitetene/radiene ved konturintegral; oppgi eksakte svar. Presenter **de seks obligatoriske delstegene** (i–vi fra §1) som toppsjikt-markørene. Presenter **kode E-prinsippet** med konkret liste over «reproduser fra hukommelsen» vs. «utled». **Karakterskillene:** bestått ≈ mekaniske grep (regn de fire partiellderiverte og sjekk CR; sett opp residyen for én pol; sett $u=FG$ og få to ODE-er; transformér ODE-en og løs for $Y(s)$); midtsjikt ≈ delbrøk + kvadratkomplettering, alle tre $k$-tilfellene, korrekt annulus, ML-argumentet; toppsjikt ≈ analytisitet kun i hel omegn, dobbeltpol-residy, $n=0$ ved Neumann, konvergensområde per Laurent-rekke, keyhole/branch, Weierstrass/Parseval.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og et sett med de kontinuerlige søylene — sett opp et tidsbudsjett» og «avgjør for hvert uttrykk om det må reproduseres fra hukommelsen (kode E) eller kan utledes på stedet».
- **Typiske feil:** Tidsfella — bruke for lang tid på separasjons- og residyintegral-oppgavene og miste dyre sluttoppgaver; å stole på en «utdelt tabell» som ikke finnes lenger (kode E); å overinvestere i transformblokken (usikker vekt) på bekostning av kompleks analyse/PDE (trygg kjerne).
- **Quiz: 12 · Flashcards: 14** (form, frekvenser, kontinuitetskart, sjanger-katalog A–K, føringsstandard, kode E-prinsipp, de seks delstegene)

---

### Del 1 — Kompleks funksjonsteori: analytisitet, Cauchy–Riemann, harmonisk konjugert  *(prioritet: PERFEKT)*

#### Kapittel 1.1: Komplekse tall og funksjoner — planet, polar form og enhetsrøtter

- **id:** `tma4121-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Fundamentet hele kompleks-delen står på: kartesisk/polar form, Eulers formel, modulus/argument, konjugat og komplekse røtter.
- **Eksamensbelegg:** Ikke egen eksamensoppgave, men **forutsetning** i alle kompleks-søylene (A–F) og i kompleks Fourier-rekke (G). Prioritet: **kjenne** (fundament — kort). Kryssref søsterbok: `tma4110` dekker komplekse tall og differensiallikninger — lenk kun hvis kapitlet finnes ved bygg.
- **Innholdskontrakt:** Alt til *bruk*. Kartesisk vs. polar form $z=re^{i\theta}=r(\cos\theta+i\sin\theta)$; **Eulers formel** $e^{i\theta}=\cos\theta+i\sin\theta$ og følgene $\cos\theta=\tfrac12(e^{i\theta}+e^{-i\theta})$, $\sin\theta=\tfrac1{2i}(e^{i\theta}-e^{-i\theta})$; modulus $|z|$, argument $\operatorname{Arg}z\in(-\pi,\pi]$, konjugat $\overline z$, $|z|^2=z\overline z$; **de $n$ komplekse røttene** $z^{1/n}=r^{1/n}e^{i(\theta+2\pi k)/n}$; regneregler i planet. **Kode E-markering:** alt *må reproduseres* (ingen tabell); trig-identiteter må kunnes utenat.
- **Oppgavesjangre:** Støttesjanger til A/D/G. Mønstereksempel: «Skriv $-1+i\sqrt3$ på polar form, finn alle fjerderøtter, og uttrykk $\cos 3\theta$ ved komplekse eksponentialer.»
- **Typiske feil:** Feil kvadrant for argumentet; glemme $2\pi k$ i røttene (miste røtter); rote med fortegn i $\tfrac1{2i}$-formelen for $\sin$.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 1.2: Elementære komplekse funksjoner — eksponensial, trig/hyperbolsk og kompleks logaritme

- **id:** `tma4121-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-1-1 · **kapitteltype:** teori
- **description:** De komplekse elementærfunksjonene og deres feller: flertydig $\operatorname{Ln}$, hovedgren, og trig/hyperbolske identiteter via eksponensialer.
- **Eksamensbelegg:** Underbygger analytisitet (A), Laurent (D) og kompleks likning (sjanger K i analysen, lav frekvens 9 % men kontinuerlig). Kompleks likning: løs $\sin z=i$-typer via $w=e^{iz}$ og kompleks log (H2022-mønster). Prioritet: **kunne** (log/likning: **kjenne**).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. $e^{z}=e^{x}(\cos y+i\sin y)$; $\cos z,\sin z$ og $\cosh z,\sinh z$ via eksponensialer, med bro $\cos z=\cosh(iz)$; **kompleks logaritme** $\operatorname{Ln}z=\ln|z|+i\operatorname{Arg}z$ (hovedgren) og flertydigheten $\log z=\operatorname{Ln}z+2\pi in$; komplekse potenser $z^{a}=e^{a\log z}$; kort **kompleks likning**: skriv om via eksponensialdefinisjon, løs andregradslikning i $w=e^{iz}$, bruk kompleks log ($z=-i\log w$). **Kode E-markering:** definisjonene og identitetene *må reproduseres*; likningsmanøveren *må kunnes*.
- **Oppgavesjangre:** A-støtte / K (kompleks likning). Mønstereksempel: «Løs $\cos z=2$ for alle $z\in\mathbb{C}$ ved å sette $w=e^{iz}$ og bruke kompleks logaritme.»
- **Typiske feil:** Glemme flertydigheten ($+2\pi in$); feil gren av $\operatorname{Arg}$; behandle $|\cos z|\le 1$ som om det gjaldt komplekst (det gjør det ikke).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.3: Analytisitet og Cauchy–Riemanns likninger

- **id:** `tma4121-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** tma4121-1-2 · **kapitteltype:** teori
- **description:** Kjernesjangeren: skriv $f=u+iv$, sjekk Cauchy–Riemann, og konkludér analytisk **kun der likningene holder i en hel omegn** — ikke i et isolert punkt.
- **Eksamensbelegg:** Sjanger A i **8/11 sett (73 %)**. Toppsjikt-markør **(delsteg vi):** for $|z|^2$, $e^{-|z|^2}$, $\overline z$ holder CR bare **isolert** (ofte kun $z=0$) ⇒ **ingensteds analytisk** (analytisitet krever en hel omegn). Alternativ fasit godtar: regn $f'(z)$ direkte fra grensedefinisjonen. Omskrevet mønster (à la H2024/H2021): «Avgjør hvor $f(z)=\overline z\,\operatorname{Re}z$ er kompleks deriverbar og hvor den er analytisk.» Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Grensedefinisjonen av $f'(z)$ (uavhengig av retning); **Cauchy–Riemanns likninger** $u_x=v_y,\ u_y=-v_x$; **analytisitet** = kompleks deriverbar i en **hel omegn**; teoremet: $f$ analytisk $\Leftrightarrow$ CR holder **og** partiellderiverte kontinuerlige på et åpent område; $f'(z)=u_x+iv_x$. **Delsteg vi (egen `warning`):** CR i ett isolert punkt gir **ikke** analytisitet — vis eksplisitt med $|z|^2$/$\overline z$. Alternativ: $f'$ direkte fra grensedefinisjonen. **Kode E-markering:** CR-likningene *må reproduseres*; sjekkprosedyren + omegn-argumentet *må kunnes*.
- **Oppgavesjangre:** A. Mønstereksempel: «La $f(z)=x^2-y^2+2ixy$. Vis at CR er oppfylt overalt, at $f$ er hel (entire), og finn $f'(z)$; sammenlign med $\overline z$, som ikke er analytisk noe sted.»
- **Typiske feil (analysen §5.1):** Påstå analytisitet fordi CR holder i **ett** punkt (mangler hel omegn — delsteg vi); glemme kontinuitetskravet på partiellderiverte; fortegnsfeil i $u_y=-v_x$.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.4: Harmoniske funksjoner og harmonisk konjugert

- **id:** `tma4121-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-1-3 · **kapitteltype:** teori
- **description:** Vis at $u$ er harmonisk, konstruer den harmoniske konjugerte $v$ ved integrasjon, og sett sammen den analytiske $f=u+iv$.
- **Eksamensbelegg:** Del av analytisitet-blokken (sjanger B, del av de 73 %). Fast fremgangsmåte: vis $u_{xx}+u_{yy}=0$, integrér $v_x=-u_y$, derivér, sammenlign med $v_y=u_x$ for å finne $C(y)$ (Kont2023/Des2023/Kont2017-mønster). Variant: gitt $v$, finn $u$. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Harmonisk funksjon** $\nabla^2u=u_{xx}+u_{yy}=0$; realdel/imaginærdel av en analytisk funksjon er harmonisk; **harmonisk konjugert** $v$ slik at $f=u+iv$ er analytisk. **Konstruksjonsalgoritme (mal):** 1) verifiser $u$ harmonisk; 2) $v_x=-u_y$ (fra CR), integrér mhp. $x$ → $v=\int(-u_y)\,dx+C(y)$; 3) derivér resultatet mhp. $y$; 4) sett lik $v_y=u_x$ for å bestemme $C'(y)$, integrér; 5) skriv $f=u+iv$ og (ofte) uttrykk i $z$. **Kode E-markering:** CR-koblingen *må reproduseres*; integrasjonsprosedyren *må kunnes*.
- **Oppgavesjangre:** B. Mønstereksempel: «Vis at $u(x,y)=x^3-3xy^2+2y$ er harmonisk, finn en harmonisk konjugert $v$, og uttrykk $f=u+iv$ som funksjon av $z$.»
- **Typiske feil:** Glemme integrasjonskonstanten $C(y)$ (som avhenger av $y$, ikke bare et tall); fortegnsfeil i $v_x=-u_y$; ikke verifisere at $u$ faktisk er harmonisk før man starter.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.5: Drill — analytisitet, Cauchy–Riemann og harmonisk konjugert

- **id:** `tma4121-1-5` · **number:** 1.5 · **estimatedMinutes:** 90 · **prerequisites:** tma4121-1-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele A/B-komplekset: CR-sjekk → analytisitetskonklusjon (hel omegn!) → $f'$ → harmonisk konjugert, i A-besvarelsesform med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjangrene A (73 %) og B i alle varianter (hel funksjon, ingensteds analytisk, isolert-CR-felle, gitt $u$ finn $v$, gitt $v$ finn $u$). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) skriv $f=u+iv$, regn $u_x,u_y,v_x,v_y$; 2) sjekk CR; 3) konkludér analytisk **kun i hel omegn** (marker isolert-CR-fella eksplisitt); 4) $f'=u_x+iv_x$ (eller grensedefinisjon som alternativ — vis begge når naturlig); 5) ved harmonisk konjugert: bruk 5-stegsmalen fra 1.4. **Gjennomregnet eksamenscase** med margnotater om hva som gir uttelling (særlig at analytisitet krever hel omegn — delsteg vi). 10–15 varianter på eksamensnivå ($\overline z$-typer, $e^z$-typer, polynom, $|z|^2$, gitt $u$/gitt $v$).
- **Oppgavesjangre:** A, B. Mønstereksempel: «(a) Avgjør hvor $f(z)=\overline z^2$ er deriverbar og hvor den er analytisk. (b) Vis at $u=e^{x}\cos y$ er harmonisk og finn $v$ slik at $f$ er hel; (c) verifiser at $f=e^{z}$.»
- **Typiske feil:** Hele §5.1-repertoaret: analytisitet fra isolert CR-punkt (delsteg vi); glemt kontinuitetskrav; glemt $C(y)$; fortegn i CR.
- **Quiz: 12 · Flashcards: 8**

---

### Del 2 — Kompleks integrasjon og Cauchys teoremer

#### Kapittel 2.1: Konturintegraler og parametrisering

- **id:** `tma4121-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-1-3 · **kapitteltype:** teori
- **description:** Definisjonen av $\int_C f\,dz$, parametrisering av kurver, og direkte utregning når integranden ikke er analytisk.
- **Eksamensbelegg:** Oppsettsapparatet bak residy/kurveintegral (91 %). For ikke-analytisk integrand ($\overline z$, $|z|^2$) langs en bue: **parametrisér** $z(t)=Re^{it}$ og regn $\int f(z(t))z'(t)\,dt$ direkte (H2022 P4, H2021 P4-mønster). Prioritet: **kunne** (fundament for Del 4).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Konturintegralet $\int_C f(z)\,dz=\int_a^b f(z(t))z'(t)\,dt$; parametrisering av rette linjestykker og sirkelbuer $z(t)=z_0+Re^{it}$; nøkkelintegralet $\oint_{|z|=R}\frac{dz}{z}=2\pi i$ (og $\oint (z-z_0)^n dz=0$ for $n\ne-1$); **direkte utregning** når integranden ikke er analytisk; **ML-ulikheten** $\left|\int_C f\,dz\right|\le M\cdot L$ (introduseres her, brukes tungt i 4.4). **Kode E-markering:** nøkkelintegralene *må reproduseres*; parametriseringen *må kunnes*.
- **Oppgavesjangre:** C-oppsett. Mønstereksempel: «Regn $\int_C \overline z\,dz$ langs den øvre halvsirkelen $|z|=2$ fra $2$ til $-2$ ved parametrisering.»
- **Typiske feil:** Glemme $z'(t)$-faktoren; feil orientering (positiv = mot klokka); bruke residysetningen på en **ikke-lukket** kurve eller ikke-analytisk integrand.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.2: Cauchys integralteorem og veiuavhengighet

- **id:** `tma4121-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-2-1 · **kapitteltype:** teori
- **description:** Når et lukket konturintegral er null, når integralet er veiuavhengig, og hvordan en antiderivert forenkler alt.
- **Eksamensbelegg:** Grunnlaget for at analytiske integrander gir $\oint=0$ (H2021 P4i-mønster). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Cauchys integralteorem:** $f$ analytisk på og innenfor en enkel lukket kurve $C$ $\Rightarrow \oint_C f\,dz=0$; **veiuavhengighet** for analytiske funksjoner i et enkeltsammenhengende område; **antiderivert** $\int_C f=F(\text{slutt})-F(\text{start})$ når $F'=f$; deformasjon av kontur rundt singulariteter (bro til residysetningen). **Kode E-markering:** teoremet *må reproduseres og navngis*; anvendelsen *må kunnes*.
- **Oppgavesjangre:** C. Mønstereksempel: «Forklar hvorfor $\oint_{|z|=1} e^{z^2}\,dz=0$, og regn $\int_C \cos z\,dz$ langs en vilkårlig vei fra $0$ til $i\pi$ ved en antiderivert.»
- **Typiske feil:** Bruke teoremet når integranden har en singularitet **innenfor** kurven; glemme at veiuavhengighet krever enkeltsammenhengende område; forveksle «lukket kurve» med «vilkårlig kurve».
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Cauchys integralformel og formelen for deriverte

- **id:** `tma4121-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-2-2 · **kapitteltype:** teori
- **description:** Cauchys integralformel og dens deriverte-versjon — en direkte vei til konturintegraler med én pol, og et alternativ til residysetningen.
- **Eksamensbelegg:** Alternativ metode som fasiten viser side om side med residysetningen (H2022 P7 viser begge). Prioritet: **kunne** (toppsjikt honorerer at man kan velge/kombinere metode).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Cauchys integralformel** $f(z_0)=\frac{1}{2\pi i}\oint_C\frac{f(z)}{z-z_0}\,dz$ og **deriverte-versjonen** $f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz$; bruk til å regne $\oint$ når integranden er $\frac{g(z)}{(z-z_0)^{n+1}}$ med $g$ analytisk; **parallell** til residysetningen (samme svar — vis begge veier). **Kode E-markering:** begge formlene *må reproduseres*; valget av $g$ og $z_0$ *må kunnes*.
- **Oppgavesjangre:** C. Mønstereksempel: «Regn $\oint_{|z|=2}\frac{e^{z}}{(z-1)^2}\,dz$ med Cauchys formel for den deriverte, og bekreft svaret med residysetningen.»
- **Typiske feil:** Feil $n!$-faktor eller feil orden $n+1$ i nevneren; velge $g$ som ikke er analytisk i hele området; glemme $2\pi i$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.4: Drill — kompleks integrasjon

- **id:** `tma4121-2-4` · **number:** 2.4 · **estimatedMinutes:** 85 · **prerequisites:** tma4121-2-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele C-komplekset: velg riktig verktøy (direkte parametrisering / Cauchys teorem / Cauchys formel) og før svaret som sensor vil se det.
- **Eksamensbelegg:** Dekker sjanger C (91 %-oppsettsdelen) i alle varianter (analytisk → $0$ eller antiderivert; $\frac{g}{(z-z_0)^{n+1}}$ → Cauchys formel; ikke-analytisk → direkte). Prioritet: **kunne** (grensende til perfekt — fôrer Del 4).
- **Innholdskontrakt:** Løsningsoppskrift: 1) er kurven lukket? 2) er integranden analytisk innenfor? (ja → Cauchys teorem $=0$ eller antiderivert); 3) singularitet innenfor på formen $\frac{g}{(z-z_0)^{n+1}}$? (→ Cauchys integralformel); 4) ikke-analytisk? (→ parametrisér direkte); 5) **tegn kurven, marker singularitetene** (føringskrav). **Gjennomregnet eksamenscase** med margnotater. 10–14 varianter på eksamensnivå.
- **Oppgavesjangre:** C. Mønstereksempel: «For hvert integral, velg og navngi metoden og regn det ut: (a) $\oint_{|z|=1}\frac{\sin z}{z}\,dz$; (b) $\int_C |z|^2\,dz$ langs $z(t)=e^{it}$, $0\le t\le\pi$; (c) $\oint_{|z|=3}\frac{z}{(z-2)^3}\,dz$.»
- **Typiske feil:** Bruke residysetningen/Cauchys formel på ikke-analytisk integrand; feil metodevalg; glemme å tegne/markere kurven.
- **Quiz: 12 · Flashcards: 8**

---

### Del 3 — Taylor- og Laurent-rekker med konvergensområde  *(prioritet: PERFEKT)*

#### Kapittel 3.1: Komplekse rekker, potensrekker og konvergensradius

- **id:** `tma4121-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-1-2 · **kapitteltype:** teori
- **description:** Potensrekker i det komplekse planet, konvergensradius via nærmeste singularitet, og geometrisk rekke som arbeidshest.
- **Eksamensbelegg:** Grunnlaget for Taylor/Laurent (82 %). **Radius via nærmeste singularitet:** konvergensradius = avstand fra sentrum til nærmeste singularitet (Kont2018 P5-mønster → radius $\pi$). Prioritet: **kunne** (fundament for 3.2–3.4).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Komplekse potensrekker $\sum a_n(z-z_0)^n$; **konvergensradius** $R$ og at $R$ = **avstanden fra sentrum til nærmeste singularitet**; **geometrisk rekke** $\frac{1}{1-w}=\sum_{n\ge0}w^n$ for $|w|<1$ (arbeidshesten); leddvis derivasjon/integrasjon bevarer radius. **Kode E-markering:** geometrisk rekke og radius-regelen *må reproduseres*; singularitetsjakten *må kunnes*.
- **Oppgavesjangre:** D-oppsett. Mønstereksempel: «Finn konvergensradien til Taylor-rekka om $z_0=1$ for $f(z)=\frac{1}{z^2+4}$ ved å lokalisere nærmeste singularitet.»
- **Typiske feil:** Regne radius fra feil sentrum; glemme komplekse (ikke bare reelle) singulariteter; bruke geometrisk rekke utenfor $|w|<1$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.2: Taylor-rekker og geometrisk-rekke-teknikken

- **id:** `tma4121-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-3-1 · **kapitteltype:** teori
- **description:** Utvikle funksjoner i Taylor-rekke ved smart substitusjon i den geometriske rekka, og ved leddvis derivasjon/integrasjon.
- **Eksamensbelegg:** Del av Taylor/Laurent (82 %). **Maclaurin via leddvis derivasjon** (Kont2017 P5-mønster: $(1-z)^{-3}=\sum \tfrac{n(n+1)}2 z^n$). Log-typer: derivér, geometrisk rekke, **integrér leddvis** (H2021 P6). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Taylor-koeffisienter $a_n=\frac{f^{(n)}(z_0)}{n!}$; **substitusjonsteknikken** i geometrisk rekke (skriv $\frac{1}{az+b}$ på formen $\frac{c}{1-w}$); standardrekker $e^z,\cos z,\sin z$; **leddvis derivasjon** ($(1-z)^{-2}$, $(1-z)^{-3}$) og **integrasjon** ($\operatorname{Ln}(1+z)$); radius = avstand til nærmeste singularitet. **Kode E-markering:** standardrekkene *må reproduseres*; substitusjons-/leddvis-teknikken *må kunnes*.
- **Oppgavesjangre:** D. Mønstereksempel: «Finn Taylor-rekka om $z_0=0$ for $f(z)=\frac{z}{(1-2z)^2}$ ved leddvis derivasjon, og angi konvergensradien.»
- **Typiske feil:** Feil «faktorisering til $\frac{1}{1-w}$-form»; feil indeksforskyvning ved leddvis derivasjon; glemme å oppgi radius.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.3: Laurent-rekker, annuli og konvergensområde

- **id:** `tma4121-3-3` · **number:** 3.3 · **estimatedMinutes:** 65 · **prerequisites:** tma4121-3-2 · **kapitteltype:** teori
- **description:** Laurent-rekker i ringområder: hver annulus gir sin egen rekke, og **konvergensområdet må alltid oppgis** (delsteg v).
- **Eksamensbelegg:** Sjanger D i **9/11 sett (82 %)**. Toppsjikt-markør **(delsteg v):** oppgi **konvergensområdet (annulus) for hver Laurent-rekke**. «Ut/inn»-varianten $\frac1z\cdot\frac{1}{1-a/z}$ for $|z|>|a|$; sentrum + singularitetenes avstand bestemmer annuli (Des2023 P6, H2022 P5, Kont2016 P6-mønstre). Punkt-test: regn $|z-z_0|$, plassér i riktig annulus (H2024 P5, H2014 P4c). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Laurents teorem:** en funksjon analytisk i en annulus $r<|z-z_0|<R$ har en Laurent-rekke $\sum_{n=-\infty}^{\infty}a_n(z-z_0)^n$ der; hovedelen (negative $n$) koder singulariteten; **flere annuli** rundt samme sentrum gir **flere ulike rekker** — én per ring mellom nabosingulariteter; **«ut/inn»-substitusjonen** for $|z|>|a|$ ($\frac1z\cdot\frac1{1-a/z}=\sum a^n/z^{n+1}$). **Delsteg v (egen `warning`):** hver Laurent-rekke skal oppgis **med annulus den gjelder i** — en rekke uten konvergensområde er ufullstendig. **Punkt-test:** for å avgjøre hvilken rekke som gjelder i $z_1$, regn $|z_1-z_0|$ og plassér. **Kode E-markering:** geometrisk-rekke-verktøyet *må reproduseres*; annulus-inndelingen og ut/inn-substitusjonen *må kunnes*.
- **Oppgavesjangre:** D. Mønstereksempel: «For $f(z)=\frac{1}{(z-1)(z-3)}$ om $z_0=0$: finn Laurent-/Taylor-rekkene i alle tre områdene $|z|<1$, $1<|z|<3$ og $|z|>3$, og angi hvilken som gjelder i $z=2$.»
- **Typiske feil (analysen §5.5):** Feil «ut/inn»-substitusjon; **oppgi en Laurent-rekke uten annulus** (delsteg v); feil annulus-inndeling (bomme på hvilken ring et punkt ligger i).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: Drill — Laurent-rekker og konvergensområde

- **id:** `tma4121-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** tma4121-3-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele D-komplekset: velg sentrum → identifiser annuli → skriv rekka per ring **med konvergensområde** → punkt-test.
- **Eksamensbelegg:** Dekker sjanger D (82 %) i alle varianter (Taylor, Laurent i flere annuli, ut/inn, log-type, punkt-test). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) finn singularitetene og deres avstand til sentrum; 2) tegn annuli-inndelingen; 3) for hver ring: manipulér til geometrisk-rekke-form (ut/inn ved behov), skriv rekka; 4) **oppgi konvergensområdet for hver rekke** (delsteg v); 5) ved punkt-test: regn $|z-z_0|$, velg riktig rekke. **Gjennomregnet eksamenscase** med margnotater (særlig at konvergensområdet aldri utelates). 8–14 varianter på eksamensnivå.
- **Oppgavesjangre:** D. Mønstereksempel: «(a) Finn alle Laurent-rekkene til $f(z)=\frac{z+1}{z(z-2)}$ om $z_0=0$ med konvergensområde. (b) Avgjør om rekka konvergerer i $z=\tfrac32$.»
- **Typiske feil:** §5.5 i alle varianter — glemt konvergensområde (delsteg v), feil ut/inn, feil ring.
- **Quiz: 12 · Flashcards: 8**

---

### Del 4 — Residyer, residysetningen og reelle integraler  *(prioritet: PERFEKT)*

#### Kapittel 4.1: Singularitetsklassifisering — pol av orden n, essensiell, hevbar

- **id:** `tma4121-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-3-3 · **kapitteltype:** teori
- **description:** Klassifiser en isolert singularitet fra Laurent-rekkas hoveddel — avgjørende for hvilken residyformel som gjelder.
- **Eksamensbelegg:** Sjanger (klassifisering) i **6/11 sett (55 %)**, alltid del av en residyoppgave. Hevbar singularitet gir residy 0 (Kont2023 P7-mønster: $\sin z/(z^3(z-\pi))$). Prioritet: **kunne** (grensende til perfekt — styrer 4.2).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Isolert singularitet; **klassifisering fra hoveddelen** av Laurent-rekka: **hevbar** (ingen negative potenser — residy $0$), **pol av orden $n$** (høyeste negative potens $-n$), **essensiell** (uendelig mange negative potenser); praktiske tester: pol av orden $n$ hvis $\lim_{z\to z_0}(z-z_0)^n f(z)$ er endelig og $\ne0$; nullpunkt av orden $m$ i nevner minus orden $\ell$ i teller gir pol av orden $m-\ell$. **Kode E-markering:** klassifiseringskriteriene *må reproduseres*; grenseanalysen *må kunnes*.
- **Oppgavesjangre:** E-oppsett. Mønstereksempel: «Klassifiser singularitetene til $f(z)=\frac{1-\cos z}{z^4}$ og $g(z)=e^{1/z}$.»
- **Typiske feil (analysen §5.7):** Forveksle hevbar med pol (feil orden-klassifisering); overse at teller-nullpunkt senker polordenen; kalle en essensiell singularitet for en pol.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.2: Residyer — enkel pol, dobbeltpol og orden-n

- **id:** `tma4121-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-4-1 · **kapitteltype:** teori
- **description:** Regn residyet med riktig formel for polordenen — særlig **dobbeltpolformelen med derivasjonen** (delsteg iv).
- **Eksamensbelegg:** Kjernen i residy/kurveintegral (91 %). Toppsjikt-markør **(delsteg iv):** riktig **dobbeltpol-/orden-$n$-residyformel** (glemme derivasjonen er en typisk feil). Enkel pol: $\operatorname{Res}=\lim(z-z_0)f$; orden 2: $\operatorname{Res}=\lim\frac{d}{dz}[(z-z_0)^2f]$ (Kont2016 P6-mønster). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Enkel pol:** $\operatorname{Res}_{z=z_0}f=\lim_{z\to z_0}(z-z_0)f(z)$, og for $f=p/q$ med enkel pol: $\operatorname{Res}=p(z_0)/q'(z_0)$; **pol av orden $n$:** $\operatorname{Res}_{z=z_0}f=\frac{1}{(n-1)!}\lim_{z\to z_0}\frac{d^{n-1}}{dz^{n-1}}\big[(z-z_0)^n f(z)\big]$ — **delsteg iv (egen `warning`):** dobbeltpol ($n=2$) krever **én derivasjon**; å glemme den er den vanligste feilen; hevbar → residy $0$. **Kode E-markering:** orden-$n$-residyformelen *må reproduseres fra hukommelsen* (den sto på TMA4120-arket, men er borte med kode E); anvendelsen *må kunnes*.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn residyene til $f(z)=\frac{e^{z}}{z^2(z-1)}$ i alle polene.»
- **Typiske feil (analysen §5.7):** **Glemme derivasjonen i dobbeltpolformelen** (delsteg iv); feil $(n-1)!$; bruke enkeltpol-formelen på en dobbeltpol.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.3: Residysetningen og lukkede kurveintegraler

- **id:** `tma4121-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-4-2 · **kapitteltype:** teori
- **description:** Summér residyene innenfor kurven: $\oint_C f=2\pi i\sum\operatorname{Res}$ — den mest gjentakende kompleks-sjangeren.
- **Eksamensbelegg:** Sjanger E i **10/11 sett (91 %)**. $\oint=2\pi i\cdot\sum\operatorname{Res}$ over singulariteter **innenfor** kurven; kontrast mot Cauchys teorem ($\oint=0$ når ingen singularitet innenfor). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Residysetningen:** $f$ analytisk på og innenfor en enkel lukket kurve $C$ unntatt i isolerte singulariteter $z_1,\dots,z_m$ innenfor $\Rightarrow \oint_C f\,dz=2\pi i\sum_{j}\operatorname{Res}_{z=z_j}f$. **Prosedyre-mal:** 1) finn alle singulariteter; 2) avgjør hvilke som ligger **innenfor** $C$ (tegn kurven!); 3) klassifiser (fra 4.1) og regn residyet (fra 4.2) for hver; 4) summér og gang med $2\pi i$. Parallell til Cauchys integralformel (2.3). **Kode E-markering:** setningen *må reproduseres og navngis*; utvelgelsen «innenfor» + summeringen *må kunnes*.
- **Oppgavesjangre:** E. Mønstereksempel: «Regn $\oint_{|z|=2}\frac{z+1}{z^2(z-3)}\,dz$ med residysetningen; tegn kurven og marker hvilke poler som teller.»
- **Typiske feil:** Ta med poler **utenfor** kurven; glemme $2\pi i$; ikke tegne kurven (føringskrav) og dermed telle feil poler.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.4: Reelle uegentlige integraler via halvsirkel og ML-ulikheten

- **id:** `tma4121-4-4` · **number:** 4.4 · **estimatedMinutes:** 65 · **prerequisites:** tma4121-4-3 · **kapitteltype:** teori
- **description:** Den faste «halvsirkel»-oppgaven: lukk konturen i øvre halvplan, vis at buen **→ 0** med ML-ulikheten (delsteg iii), og les av det reelle integralet.
- **Eksamensbelegg:** Sjanger F — den faste reelle-integral-fjerdedelen (del av de 91 %). Toppsjikt-markør **(delsteg iii):** ML-argumentet for at halvsirkelbuen $\to 0$ er **ikke valgfritt**. $\int e^{ix}/(x^2+4)^2$, $\int x^2/(1+x^4)$-mønstre (H2024 P6, Kont2016 P7). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Halvsirkelmetoden:** lukk det reelle integralet $\int_{-\infty}^{\infty}f(x)\,dx$ med en halvsirkel $S_R$ i øvre halvplan; **residysetningen** gir $\oint=2\pi i\sum\operatorname{Res}$ (poler i øvre halvplan); **delsteg iii (egen `warning`):** vis at $\int_{S_R}\to0$ når $R\to\infty$ via **ML-ulikheten** $\left|\int_{S_R}\right|\le \max_{S_R}|f|\cdot\pi R$, med estimater som $|e^{iz}|=e^{-y}\le1$ ($y\ge0$), $|z^2+4|\ge|z|^2-4$, $|z^4+1|\ge R^4-1$; ta **real-/imaginærdel** til slutt for $\cos/\sin$-varianten. **Prosedyre-mal:** 1) velg integrand $f(z)$ og kontur; 2) poler i øvre halvplan + residyer; 3) ML-argument for buen (obligatorisk); 4) $\int_{-\infty}^\infty f=2\pi i\sum\operatorname{Res}$; 5) real-/imaginærdel. **Kode E-markering:** ML-ulikheten *må reproduseres*; estimatene og real/imaginærdel-grepet *må kunnes*.
- **Oppgavesjangre:** F. Mønstereksempel: «Regn $\int_{-\infty}^{\infty}\frac{\cos 3x}{x^2+9}\,dx$ ved halvsirkelmetoden; begrunn eksplisitt med ML-ulikheten at bidraget fra buen forsvinner.»
- **Typiske feil (analysen §5.6):** **Hoppe over ML-argumentet** (delsteg iii); feil ulikhet ($|z^2+4|\ge|z|^2-4$); glemme å ta realdel for $\cos$-varianten; ta med poler i nedre halvplan.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.5: Keyhole-/branch-integraler og trigonometriske reelle integraler

- **id:** `tma4121-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-4-4 · **kapitteltype:** teori
- **description:** De tyngste kontur-variantene: logaritme-branch med innrykket keyhole-kontur, og $\int_0^{2\pi}$-integraler via substitusjonen $z=e^{i\theta}$.
- **Eksamensbelegg:** Branch/keyhole-variant (Kont2018 P6-mønster: $\int_0^\infty \ln x/(x^2+a^2)$ med innrykket kontur); kvartsirkel + symmetri-triks (Kont2023 P8, $z=ix$); trig-integraler $\int_0^{2\pi}R(\cos\theta,\sin\theta)\,d\theta$. Toppsjikt-markør. **Merk:** de tyngste branch-integralene kan være nedtonet i TMA4121 *(verifiser)*. Prioritet: **kunne** (toppsjikt-beredskap).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Trig-integraler:** $z=e^{i\theta}$, $\cos\theta=\tfrac12(z+z^{-1})$, $\sin\theta=\tfrac{1}{2i}(z-z^{-1})$, $d\theta=dz/(iz)$ → konturintegral over $|z|=1$, deretter residysetningen. **Keyhole/branch:** for $\int_0^\infty$-integraler med $\ln x$ eller $x^\alpha$: bruk **keyhole-kontur** med $\log z=\ln r+i\theta$, $0\le\theta<2\pi$, og innrykk $C_\varepsilon\cup C_R$ rundt grenen. **Symmetri-triks:** kvartsirkel + substitusjon $z=ix$. **Kode E-markering:** substitusjonen $z=e^{i\theta}$ *må reproduseres*; keyhole-oppsettet *må kunnes*.
- **Oppgavesjangre:** E/F (tunge varianter). Mønstereksempel: «Regn $\int_0^{2\pi}\frac{d\theta}{5-4\cos\theta}$ ved substitusjonen $z=e^{i\theta}$ og residysetningen.»
- **Typiske feil:** Glemme $d\theta=dz/(iz)$-faktoren; feil gren/argumentintervall i keyhole; ta med feil poler (kun de innenfor $|z|=1$).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 4.6: Drill — residyregning fra ende til annen

- **id:** `tma4121-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** tma4121-4-5 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele E/F-komplekset: klassifiser → residy (riktig ordenformel) → residysetningen eller halvsirkel + ML, som A-besvarelse med sensor-margnotater.
- **Eksamensbelegg:** Dekker sjangrene E (91 %) og F i alle varianter (lukket kurve, reelt integral via halvsirkel + ML, trig-integral, keyhole). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) klassifiser type (lukket kurve / reelt uegentlig / trig / branch); 2) finn og klassifiser singularitetene; 3) regn residyene med **riktig ordenformel** (delsteg iv ved dobbeltpol); 4) lukket kurve → residysetningen (tegn kurven!); reelt integral → halvsirkel + **ML-argument** (delsteg iii); trig → $z=e^{i\theta}$; 5) real-/imaginærdel ved behov. **Gjennomregnet eksamenscase** med margnotater om poenguttelling (særlig ML-argumentet og dobbeltpol-derivasjonen). 10–15 varianter på eksamensnivå.
- **Oppgavesjangre:** E, F. Mønstereksempel: «(a) $\oint_{|z|=2}\frac{\cos z}{z^3}\,dz$ (dobbeltpol/orden 3-residy). (b) $\int_{-\infty}^{\infty}\frac{x^2}{(x^2+1)(x^2+4)}\,dx$ (halvsirkel + ML). (c) $\int_0^{2\pi}\frac{d\theta}{2+\sin\theta}$.»
- **Typiske feil:** §5.6 (glemt ML-argument, delsteg iii) og §5.7 (feil dobbeltpol-residy, delsteg iv) i alle varianter; poler utenfor kurven; glemt real-/imaginærdel.
- **Quiz: 12 · Flashcards: 8**

---

### Del 5 — Fourier-rekker

#### Kapittel 5.1: Fourier-rekker — koeffisienter og symmetriutnyttelse

- **id:** `tma4121-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-1-1 · **kapitteltype:** teori
- **description:** Den reelle Fourier-rekka, koeffisientintegralene og hvordan paritet halverer arbeidet før man regner.
- **Eksamensbelegg:** Sjanger G i **8/11 sett (73 %)**. Fast triks: utnytt symmetri **først** (odde → ren sinus, like → ren cosinus). Kryssref søsterbok `tma4135` (delt kjerne) — lenk kun hvis kapitlet finnes. Prioritet: **kunne** (grensende til perfekt — trygg som PDE-verktøy).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Fourier-rekka $f(x)=a_0+\sum_{n\ge1}\big(a_n\cos\tfrac{n\pi x}{L}+b_n\sin\tfrac{n\pi x}{L}\big)$ med $a_0=\tfrac1{2L}\int_{-L}^{L}f$, $a_n=\tfrac1L\int_{-L}^{L}f\cos\tfrac{n\pi x}{L}$, $b_n=\tfrac1L\int_{-L}^{L}f\sin\tfrac{n\pi x}{L}$; **symmetriregler** (odde $\Rightarrow a_n=0$, like $\Rightarrow b_n=0$); **delvis integrasjon** for $x\cos$-, $x\sin$-ledd (nesten alle koeffisienter krever den). **Kode E-markering:** koeffisientintegralene og reduksjonsformlene for $\int x^n\cos/\sin$ *må reproduseres* (sto på TMA4120-arket, borte med kode E); symmetriargumentet *må kunnes*.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn Fourier-rekka til $f(x)=x^2$ på $[-\pi,\pi]$, og bruk paritet til å begrunne at $b_n=0$.»
- **Typiske feil:** Regne alle koeffisienter uten å utnytte symmetri (tidssluk); fortegnsfeil i delvis integrasjon; feil $L$/periodefaktor.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Halvintervall-utvidelser, konvergens, midling og Weierstrass' M-test

- **id:** `tma4121-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-5-1 · **kapitteltype:** teori
- **description:** Utvid $f$ på $[0,L]$ til odde/like periodisk, vit hva rekka konvergerer mot i sprang ($\tfrac12(f^++f^-)$), og vis uniform konvergens med M-testen.
- **Eksamensbelegg:** Del av Fourier-blokken (73 %). Cosinus-/sinusrekke av $f$ på $[0,L]$ er rekka til den **like/odde $2L$-periodiske utvidelsen** — nevn utvidelsen eksplisitt (H2024 P2, Des2023 P2). **Sum av tallrekke:** sett inn smart punkt — kontinuitetspunkt ($S=f$) eller sprangpunkt (**konvergenssetningen** $S=\tfrac12(f^++f^-)$; H2022 P2 → $\sum(-1)^n/(2n+1)=\pi/4$). **Weierstrass' M-test** for uniform/absolutt konvergens (H2024 P2iii). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Odde og like halvintervall-utvidelse (ren sinus- hhv. cosinusrekke); **skisse** av den periodiske utvidelsen over flere perioder (beskriv figuren slik sensor forventer: periodisitet, spranghøyder, endepunkter); **konvergenssetningen** — i et sprang konvergerer rekka til $\tfrac12(f(x^+)+f(x^-))$; sett inn en spesiell $x$ for en **tallrekkesum**; **Weierstrass' M-test** ($|a_n\cos(\cdot)|\le M_n$, $\sum M_n$ konvergerer $\Rightarrow$ uniform + absolutt konvergens, f.eks. $M_n=1/n^2$). **Kode E-markering:** ingen tabell — alt *må kunnes/reproduseres*.
- **Oppgavesjangre:** G. Mønstereksempel: «Utvid $f(x)=1-x$ på $[0,1]$ til en odde funksjon med periode 2, skissér på $[-3,3]$, finn sinusrekka, og bruk et passende punkt til å summere en tallrekke; vis dessuten uniform konvergens med M-testen der den gjelder.»
- **Typiske feil (analysen §5.4):** Glemme **midlingen** i sprangpunkt (bruke funksjonsverdien i stedet for $\tfrac12(f^++f^-)$); feil paritet i skissen; glemme å navngi konvergenssetningen/M-testen.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.3: Kompleks Fourier-rekke

- **id:** `tma4121-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** tma4121-5-1 · **kapitteltype:** teori
- **description:** Den komplekse formen $\sum c_n e^{in\pi x/L}$, koeffisienten $c_n$ og broen til den reelle rekka via Eulers formel.
- **Eksamensbelegg:** Del av Fourier-blokken (73 %) og bro til Fourier-transform. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. $f(x)=\sum_{n=-\infty}^{\infty}c_n e^{in\pi x/L}$ med $c_n=\tfrac1{2L}\int_{-L}^{L}f e^{-in\pi x/L}\,dx$; sammenhengen $c_n=\tfrac12(a_n-ib_n)$, $c_{-n}=\overline{c_n}$ (kobling 1.1, Eulers formel); reell funksjon $\Rightarrow$ konjugert symmetri. **Kode E-markering:** hele apparatet *må reproduseres*; Euler-oversettelsen *må kunnes*.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn den komplekse Fourier-rekka til $f(x)=e^{x}$ på $[-\pi,\pi]$ og vis hvordan $a_n,b_n$ følger av $c_n$.»
- **Typiske feil:** Fortegn i eksponenten ($e^{-in\pi x/L}$ i integralet, $e^{+in\pi x/L}$ i rekka); glemme $n=0$-leddet; ikke bruke konjugert symmetri.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.4: Drill — Fourier-rekke-sjangeren

- **id:** `tma4121-5-4` · **number:** 5.4 · **estimatedMinutes:** 85 · **prerequisites:** tma4121-5-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele G-komplekset: paritet → utvidelse → koeffisienter → skisse → konvergens/tallrekke, i A-besvarelsesform.
- **Eksamensbelegg:** Dekker sjanger G (73 %) i alle varianter (reell sinus/cosinus, halvintervall-utvidelse, kompleks form, tallrekkesum, M-test). Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** Løsningsoppskrift: 1) avgjør paritet/periode (evt. odde/like utvidelse); 2) sett opp koeffisientintegralene, dropp de som er null ved symmetri; 3) delvis integrasjon; 4) skriv rekka; 5) skissér den periodiske utvidelsen over flere perioder; 6) angi konvergensverdi i spesielle punkt (midling — konvergenssetningen); 7) evt. sett inn $x$ for tallrekkesum; 8) evt. M-test for uniform konvergens. **Gjennomregnet eksamenscase** med margnotater. 8–14 varianter på eksamensnivå.
- **Oppgavesjangre:** G. Mønstereksempel: «(a) Utvid $f(x)=\pi-x$ på $[0,\pi]$ til en odde funksjon med periode $2\pi$ og skissér. (b) Finn Fourier-rekka. (c) Bruk et sprangpunkt (konvergenssetningen) til å finne en oppgitt tallrekkesum.»
- **Typiske feil:** §5.4 (manglende midling) i alle varianter; feil skisse-paritet; stoppe før tallrekke-innsettingen når den er spurt.
- **Quiz: 12 · Flashcards: 8**

---

### Del 6 — Fourier- og Laplace-transform  *(kode E — utled parene; VERIFISER vekt)*

> **Del-merknad (gjelder alle kapitler i Del 6):** Laplace var 100 % og Fourier-
> transform 64 % i TMA4120-**kilden**, men **står ikke eksplisitt blant TMA4121s
> fire pensumområder**, og den **utdelte transformtabellen forsvinner med kode E**.
> Vekten i TMA4121 er derfor **usikker — merk `(verifiser)`** gjennomgående. Boka
> dekker blokken grundig, men (a) legger vekt på **utledning** av standardpar
> framfor tabelloppslag, og (b) har et eksplisitt **«reproduser tabellen»-mål**
> (kulminerer i drillkapittel 6.5 og verkstedet 9.1). Delt kjerne med `tma4135` —
> kryssreferer.

#### Kapittel 6.1: Laplace-transformen — definisjon, derivasjonsregel og utledning av standardparene

- **id:** `tma4121-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-1-1 · **kapitteltype:** teori
- **description:** Grunnmekanikken i Laplace-metoden og — sentralt for kode E — hvordan standardparene $\cos,\sin,e^{at},t^n$ **utledes** i stedet for å slås opp.
- **Eksamensbelegg:** Sjanger H — Laplace 100 % i TMA4120, **vekt usikker i TMA4121 (verifiser)**. Nesten alltid oppgave 1 i kilden. Kryssref `tma4135` (delt kjerne). Prioritet: **kunne** *(verifiser — kan være perfekt eller nedtonet)*.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT. Definisjonen $F(s)=\mathcal{L}\{f\}=\int_0^\infty e^{-st}f(t)\,dt$; **utled standardparene** fra definisjonen (kode E-kjernen): $\mathcal{L}\{1\}=1/s$, $\mathcal{L}\{t^n\}=n!/s^{n+1}$, $\mathcal{L}\{e^{at}\}=1/(s-a)$, $\mathcal{L}\{\cos\omega t\}=s/(s^2+\omega^2)$ og $\mathcal{L}\{\sin\omega t\}=\omega/(s^2+\omega^2)$ (via delvis integrasjon eller Euler + $\mathcal{L}\{e^{i\omega t}\}$), $\cosh/\sinh$; **derivasjonsregelen** $\mathcal{L}\{y'\}=sY-y(0)$, $\mathcal{L}\{y''\}=s^2Y-sy(0)-y'(0)$; linearitet; **førsteforskyvningsteoremet** $\mathcal{L}\{e^{at}f\}=F(s-a)$. Løsningsalgoritmen (transformér → sett inn IB → løs for $Y(s)$ → invers). **Kode E-markering:** standardparene *må reproduseres fra hukommelsen* **og** kunne *utledes*; derivasjonsregelen *må kunnes*.
- **Oppgavesjangre:** H. Mønstereksempel: «Utled $\mathcal{L}\{\cos\omega t\}$ og $\mathcal{L}\{\sin\omega t\}$ fra definisjonen via $\mathcal{L}\{e^{i\omega t}\}$, og bruk dem til å løse $y''+9y=0$, $y(0)=1$, $y'(0)=0$.»
- **Typiske feil:** Glemme et ledd i $\mathcal{L}\{y''\}$ (særlig $-sy(0)$); ikke kunne utlede parene når tabellen mangler (kode E); blande $\mathcal{L}\{y'\}$ med produktregelen.
- **Quiz: 18 · Flashcards: 22** (transformpar er flashcard-gull — kode E krever rask reproduksjon)

#### Kapittel 6.2: Invers Laplace — delbrøk, kvadratkomplettering og forskyvning

- **id:** `tma4121-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-6-1 · **kapitteltype:** teori
- **description:** De to teknikkene for å bringe $Y(s)$ på gjenkjennelig form — delbrøk og kvadratkomplettering — begge honoreres, boka viser begge.
- **Eksamensbelegg:** Fast del av Laplace-blokken. Fasiten viser **flere metoder** (delbrøk **og** kvadratkomplettering; H2024 P1ii: $(3s+3)/(s^2+2s+2)\to 3e^{-t}\cos t$). **Vekt usikker (verifiser).** Prioritet: **kunne** *(verifiser)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Delbrøkoppspalting** (enkle/multiple poler, irredusible andregradsnevnere; koeffisienter via cover-up **og** lineært system); **kvadratkomplettering** for å treffe $\frac{s-a}{(s-a)^2+\omega^2}\leftrightarrow e^{at}\cos\omega t$ og $\frac{\omega}{(s-a)^2+\omega^2}\leftrightarrow e^{at}\sin\omega t$ (kobling til førsteforskyvning fra 6.1); reell vs. kompleks delbrøk. **Kode E-markering:** måltabellformene *må reproduseres*; delbrøk-/kvadratkompletterings-manøveren *må kunnes*.
- **Oppgavesjangre:** H. Mønstereksempel: «Finn den inverse Laplace-transformen av $\frac{s+2}{s^2+6s+13}$ ved kvadratkomplettering, og vis at kompleks delbrøk gir samme svar.»
- **Typiske feil (analysen §5.8):** Feil fortegn/plassering i delbrøken; glemme kvadratkomplettering slik at en irredusibel nevner ikke treffer standardformen; feil $\omega$ etter kvadratkomplettering.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.3: Konvolusjon, Heaviside og Dirac

- **id:** `tma4121-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-6-2 · **kapitteltype:** teori
- **description:** Volterra-/integro-differensiallikninger via konvolusjonsteoremet, og stykkevis/impulsdrevet last via andreforskyvningsteoremet — «finn $f$ først, forskyv sist».
- **Eksamensbelegg:** Sjanger H-varianter: konvolusjon (H2024 P1i-mønster, svar $2-e^{-t}$) og Heaviside/Dirac (Kont2018 P1: $g=u(t)-2u(t-1)+u(t-2)$; H2022 P1: $\delta$). Toppsjikt-markør: korrekt **andreforskyvningsteorem**. **Vekt usikker (verifiser).** Prioritet: **kunne** *(verifiser)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Konvolusjonen** $(g*y)(t)=\int_0^t g(\tau)y(t-\tau)\,d\tau$ og **konvolusjonsteoremet** $\mathcal{L}\{g*y\}=G(s)Y(s)$ — gjenkjenn integralleddet, transformér til produkt, løs for $Y(s)$; **andreforskyvningsteoremet** $\mathcal{L}\{f(t-a)u(t-a)\}=e^{-as}F(s)$ og den omvendte veien (**finn $f(t)$ først**, deretter $y=u(t-a)f(t-a)$); skriv stykkevis last som sum av trappeledd $u(t-a)$ før transform; **Dirac** $\mathcal{L}\{\delta(t-a)\}=e^{-as}$. **Kode E-markering:** forskyvnings-/Dirac-parene *må reproduseres*; konvolusjonsgjenkjenning + «finn $f$ først»-rekkefølgen *må kunnes og navngis*.
- **Oppgavesjangre:** H. Mønstereksempel: «Løs $y(t)-3\int_0^t e^{-\tau}y(t-\tau)\,d\tau=e^{-2t}$ ved konvolusjonsteoremet; deretter: slå på en enhetsimpuls ved $t=1$ og finn den nye responsen.»
- **Typiske feil (analysen §5.2):** Bruke **første** i stedet for **andre** forskyvningsteorem; glemme å skrive $y=u(t-a)f(t-a)$ etter å ha funnet $f$; ikke se konvolusjonsstrukturen; glemme å navngi konvolusjonsteoremet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: Fourier-transformen — utledning av par, derivasjons- og konvolusjonsregel

- **id:** `tma4121-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-5-3 · **kapitteltype:** teori
- **description:** Fourier-transformen $\hat f(\omega)$, hvordan Gauss-paret **utledes**, og reglene som gjør at man sjelden integrerer fra bunn.
- **Eksamensbelegg:** Sjanger I — Fourier-transform 64 % i TMA4120 (utregning, invers via residy, PDE på $\mathbb{R}$). **Ikke eksplisitt i TMA4121s fire områder — vekt usikker (verifiser).** Invers via residy (Kont2017 P3-mønster) knytter til Del 4. Kryssref `tma4135`. Prioritet: **kunne** *(verifiser)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT + utledning. Konvensjonen $\hat f(\omega)=\tfrac1{\sqrt{2\pi}}\int f(x)e^{-i\omega x}\,dx$, $f(x)=\tfrac1{\sqrt{2\pi}}\int\hat f(\omega)e^{i\omega x}\,d\omega$; **utled** Gauss-paret $e^{-ax^2}\leftrightarrow\tfrac1{\sqrt{2a}}e^{-\omega^2/4a}$ og transformen av $e^{-ax}u(x)$ direkte fra definisjonen; **derivasjonsregelen** $\widehat{f'}=i\omega\hat f$; **konvolusjonsteoremet** $\widehat{f*g}=\sqrt{2\pi}\hat f\hat g$; Parseval; **invers via residy** (kobling Del 4) når standardpar ikke rekker. **Kode E-markering:** standardparene *må reproduseres/utledes*; reglene *må kunnes*.
- **Oppgavesjangre:** I. Mønstereksempel: «Regn Fourier-transformen av $f(x)=e^{-3|x|}$ direkte fra definisjonen, og bruk residyregning til å invers-transformere $\hat g(\omega)=1/(1+\omega^2)^2$.»
- **Typiske feil:** Feil $\sqrt{2\pi}$-faktor (konvensjonsavhengig — vær konsistent); blande $e^{-ax^2}$ og $e^{-a|x|}$; glemme konvolusjonsteoremets $\sqrt{2\pi}$.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.5: Drill — «reproduser tabellen» og transformoppgaver (kode E)

- **id:** `tma4121-6-5` · **number:** 6.5 · **estimatedMinutes:** 85 · **prerequisites:** tma4121-6-4 · **kapitteltype:** drill
- **description:** Kode E-signaturdrillen: gjenskap hele transformtabellen fra hukommelse/utledning, og løs deretter fulle Laplace-/Fourier-oppgaver uten hjelpemidler.
- **Eksamensbelegg:** Dekker sjangrene H (Laplace) og I (Fourier-transform) samlet, tilpasset **kode E** (ingen utdelt tabell). Prioritet: **kunne** *(verifiser vekt)*.
- **Innholdskontrakt:** To spor. **(1) «Reproduser tabellen»:** studenten skal fra blankt ark skrive opp — og for de sentrale parene **utlede** — Laplace-parene ($1,t^n,e^{at},\cos\omega t,\sin\omega t,\cosh,\sinh,u(t-a),\delta$), forskyvningsteoremene, konvolusjonsteoremet, og Fourier-Gauss-paret + reglene. **(2) Transformoppgaver:** løsningsoppskrift — klassifiser (ren ODE / integro-diff / Heaviside-Dirac / Fourier); transformér med derivasjonsregelen/IB; konvolusjon → konvolusjonsteoremet; trappelast → trappeledd; løs for $Y(s)$/$\hat u$; invers via delbrøk **og/eller** kvadratkomplettering (evt. residy for Fourier); «finn $f$ først» ved Heaviside; eksakt svar. **Gjennomregnet eksamenscase** med margnotater; hvert transformoppslag markeres «utledet/reprodusert» (ikke «fra tabellen» — den finnes ikke). 10–15 varianter på eksamensnivå.
- **Oppgavesjangre:** H, I. Mønstereksempel: «Uten hjelpemidler: (a) skriv opp og utled $\mathcal{L}\{\sin\omega t\}$ og $\mathcal{L}\{e^{at}\cos\omega t\}$; (b) løs $y''+2y'+5y=e^{-t}$, $y(0)=0,y'(0)=1$; (c) forskyv lasten til å slå på ved $t=\pi$.»
- **Typiske feil:** Ikke kunne reprodusere/utlede et par (kode E-fella); §5.2 (feil forskyvningsteorem); §5.8 (delbrøk/kvadratkomplettering); ubegrunnet oppslag.
- **Quiz: 14 · Flashcards: 12**

---

### Del 7 — Partielle differensiallikninger og Sturm–Liouville  *(prioritet: PERFEKT)*

#### Kapittel 7.1: Separasjon av variable — varmelikningen og de tre k-tilfellene

- **id:** `tma4121-7-1` · **number:** 7.1 · **estimatedMinutes:** 70 · **prerequisites:** tma4121-5-1 · **kapitteltype:** teori
- **description:** Emnets tyngste enkeltoppgave: sett $u=F(x)G(t)$, del i to ODE-er, og behandl **alle tre** tilfellene $k>0,k=0,k<0$ (delsteg i) for å finne egenverdiene.
- **Eksamensbelegg:** Sjanger J i **10/11 sett (91 %)**, ofte den tyngste enkeltoppgaven. Toppsjikt-markør **(delsteg i):** eksplisitt behandling av **alle tre** $k$-tilfellene. Kryssref `tma4135` (delt kjerne). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT, steg for steg. Ansatsen $u(x,t)=F(x)G(t)$; innsetting og separasjon i to ODE-er med **felles konstant $k$** ($F''/F=G'/(c^2G)=-k$, tydelig fortegnskonvensjon); **delsteg i (egen `warning`):** behandle **alle tre** tilfellene $k>0$, $k=0$, $k<0$ — vis at bare ett gir ikke-trivielle løsninger som oppfyller randbetingelsene, de andre kun triviell løsning; egenverdiene $k_n$ og egenfunksjonene $F_n(x)$ fra randbetingelsene (**Dirichlet** $u=0$ → $\sin(n\pi x/L)$; **Neumann** $u_x=0$ → $\cos(n\pi x/L)$). Løs $G$/$T$ per egenverdi. **Variabel-koeffisient-variant** ($(1/(1+2t))u_t-u_{xx}=0$; H2024 P3): separér likevel, $G$-likningen løses ved integrasjon. **Kode E-markering:** ingen snarvei — hele separasjonsprosessen og $k$-analysen *må kunnes*.
- **Oppgavesjangre:** J (oppsettsdelen). Mønstereksempel: «Bruk separasjon av variable på $u_t=3u_{xx}$, $0<x<\pi$, $u(0,t)=u(\pi,t)=0$, og finn egenverdiene og egenfunksjonene ved å behandle alle tre tilfellene for separasjonskonstanten.»
- **Typiske feil (analysen §5.3):** **Hoppe over ett $k$-tilfelle** (særlig at $k>0$ og $k=0$ bare gir triviell løsning — delsteg i); feil fortegnskonvensjon på $k$; blande sinus- og cosinus-egenfunksjoner (Dirichlet vs. Neumann).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.2: Superposisjon, Fourier-matching, Neumann (n=0) og ikke-homogene problemer

- **id:** `tma4121-7-2` · **number:** 7.2 · **estimatedMinutes:** 65 · **prerequisites:** tma4121-7-1 · **kapitteltype:** teori
- **description:** Superponer egenløsningene, match initialbetingelsen (husk **$n=0$-leddet ved Neumann**, delsteg ii), og reduser ikke-homogene problemer via en stasjonær løsning.
- **Eksamensbelegg:** Andre halvdel av separasjonsoppgaven (91 %). Toppsjikt-markør **(delsteg ii):** inkludér **$n=0$-leddet ved Neumann**. Fourier-matching ofte triviell når initialdata alt er en $\sin/\cos$-sum (endelig sum). Ikke-homogen reduksjon (H2014 P6: $v=u+\sin x$). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Superposisjon** $u(x,t)=\sum_n B_nF_n(x)G_n(t)$; **Fourier-matching** — bestem $B_n$ ved å utvikle $u(x,0)$ i egenfunksjonene (les av direkte når initialdata er en endelig $\sin/\cos$-sum; ellers koeffisientintegral fra Del 5); **delsteg ii (egen `warning`):** ved **Neumann-rand** består basisen av $\cos(n\pi x/L)$ **inkludert konstantleddet $n=0$** — glemme det er en typisk toppsjikt-feil; **ikke-homogen reduksjon**: finn stasjonær partikulærløsning $w(x)$, sett $v=u-w$, løs $v$ homogent; **langtidsoppførsel** $t\to\infty$ (dempede ledd dør ut). **Kode E-markering:** koeffisientintegralene *finnes via Del 5*; superposisjons-/reduksjonsgrepet + $n=0$-leddet *må kunnes*.
- **Oppgavesjangre:** J (matching-delen). Mønstereksempel: «Løs $u_t=u_{xx}$, $0<x<1$, $u_x(0,t)=u_x(1,t)=0$ (isolerte ender), $u(x,0)=2+\cos\pi x$, og bestem likevektstemperaturen når $t\to\infty$ — pass på $n=0$-leddet.»
- **Typiske feil (analysen §5.3):** **Glemme $n=0$-leddet ved Neumann** (delsteg ii); regne et koeffisientintegral der initialdata alt er en egenfunksjonssum; glemme reduksjonen $v=u-w$ ved ikke-homogenitet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.3: Bølgelikningen, d'Alembert og Laplace-likningen på rektangel

- **id:** `tma4121-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-7-1 · **kapitteltype:** teori
- **description:** Bølgelikningen (separasjon gir dempet svingning; d'Alembert på $\mathbb{R}$) og Laplace-likningen på rektangel (der $G$ blir eksponensiell/$\cosh$).
- **Eksamensbelegg:** Del av PDE-blokken (91 %). Dempet bølge $e^{-t}(A\cos\omega t+B\sin\omega t)$ (H2022 P6, Des2023 P3); **Laplace-likning på rektangel** med blandede randbetingelser, $G$ eksponensiell/$\cosh$ (H2021 P7, Kont2017 P2, H2014 P6); d'Alembert på uendelig streng (Des2018-mønster). Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. **Bølgelikningen** $u_{tt}=c^2u_{xx}$: separasjon → $T$-likning gir svingninger (dempet: $e^{-t}(A\cos\omega t+B\sin\omega t)$); **d'Alemberts formel** $u(x,t)=\tfrac12(f(x+ct)+f(x-ct))+\tfrac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds$ (to bølger med fart $c$); **Laplace-likningen** $u_{xx}+u_{yy}=0$ på rektangel: separasjon gir én trigonometrisk og én **eksponensiell/$\cosh$/$\sinh$**-faktor; bruk randbetingelsene til å velge riktig hyperbolsk kombinasjon. **Kode E-markering:** d'Alemberts formel og generalløsningen av 2. ordens ODE *må reproduseres*; hyperbolsk-valget *må kunnes*.
- **Oppgavesjangre:** J. Mønstereksempel: «Løs Laplace-likningen på rektangelet $0<x<\pi$, $0<y<1$ med $u(0,y)=u(\pi,y)=0$, $u(x,0)=0$, $u(x,1)=\sin 2x$, ved separasjon.»
- **Typiske feil:** Feil bølgefart $c$ i d'Alembert-argumentene ($x\pm ct$, ikke $x\pm t$); glemme $\tfrac1{2c}$-faktoren; velge feil hyperbolsk kombinasjon på rektangelet (ikke tilpasse randen).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.4: Fourier-/Laplace-transform-metoden for PDE på ℝ

- **id:** `tma4121-7-4` · **number:** 7.4 · **estimatedMinutes:** 55 · **prerequisites:** tma4121-6-4 · **kapitteltype:** teori
- **description:** Transformér PDE-en (Fourier i $x$ eller Laplace i $t$), løs den resulterende ODE-en, og invers-transformér — varmekjerne-metoden.
- **Eksamensbelegg:** Sjanger I/J-bro — Fourier-transform for PDE på $\mathbb{R}$ (H2021 P8, H2014 P3, Kont2023 P4 med Parseval). **Vekt usikker (verifiser)** pga. transformusikkerheten. Prioritet: **kunne** *(verifiser)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT. Fourier-transformér PDE-en i $x$ ($\widehat{u_x}=i\omega\hat u$, $\widehat{u_{xx}}=-\omega^2\hat u$) → en **ODE i $t$** for $\hat u(\omega,t)$; løs ($\hat u=C(\omega)e^{\cdots}$), bestem $C(\omega)=\hat u(\omega,0)$ fra initialbetingelsen, invers-transformér (ofte en Gauss-/varmekjerne-konvolusjon); alternativt Laplace i $t$. Kort **Parseval** for energiestimat. **Kode E-markering:** transformparene/reglene *fra Del 6*; PDE→ODE-oversettelsen *må kunnes*.
- **Oppgavesjangre:** I/J. Mønstereksempel: «Løs varmelikningen $u_t=u_{xx}$ på $\mathbb{R}$ med $u(x,0)=e^{-x^2}$ ved Fourier-transform, og uttrykk svaret ved varmekjernen.»
- **Typiske feil:** Feil fortegn på $-\omega^2$ for $u_{xx}$; behandle $t$-ODE-en som om $\omega$ varierer (den er konstant der); glemme å sette inn initialdata for $C(\omega)$.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 7.5: Sturm–Liouville-problemer og egenfunksjonsutvidelser

- **id:** `tma4121-7-5` · **number:** 7.5 · **estimatedMinutes:** 60 · **prerequisites:** tma4121-7-1 · **kapitteltype:** teori
- **description:** Rammeverket bak separasjon: egenverdiproblemet $-(pF')'+qF=\lambda wF$, ortogonale egenfunksjoner og generaliserte Fourier-rekker.
- **Eksamensbelegg:** Teoretisk fundament for PDE-blokken (91 %). Ikke alltid egen oppgave i TMA4120-arkivet, men **eksplisitt del av TMA4121-pensum (PDE)** — forklarer hvorfor egenfunksjonene er ortogonale og hvorfor Fourier-matching virker. **Merk:** vekt i TMA4121 *(verifiser)*. Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (rammeverk + anvendelse). **Sturm–Liouville-problemet** $-(p(x)F')'+q(x)F=\lambda w(x)F$ med homogene randbetingelser; **egenskaper:** reelle egenverdier, ortogonale egenfunksjoner mht. vektfunksjonen $w$ ($\int_a^b F_m F_n w\,dx=0$ for $m\ne n$); **generalisert Fourier-rekke** $f=\sum c_n F_n$ med $c_n=\frac{\langle f,F_n\rangle_w}{\langle F_n,F_n\rangle_w}$; kobling: den vanlige Fourier-rekka (Del 5) er spesialtilfellet $p=w=1,q=0$, og separasjons-egenfunksjonene (7.1) er SL-egenfunksjoner. **Kode E-markering:** ortogonalitets-/koeffisientformlene *må reproduseres*; anvendelsen *må kunnes*.
- **Oppgavesjangre:** J (rammeverk). Mønstereksempel: «Vis at egenfunksjonene $\sin(n\pi x/L)$ til $-F''=\lambda F$, $F(0)=F(L)=0$, er ortogonale på $[0,L]$, og skriv $f(x)=x$ som en egenfunksjonsutvidelse.»
- **Typiske feil:** Glemme vektfunksjonen $w$ i indreproduktet; anta ortogonalitet uten SL-form; feil normeringskonstant $\langle F_n,F_n\rangle$.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 7.6: Drill — separasjon av variable fra ende til annen

- **id:** `tma4121-7-6` · **number:** 7.6 · **estimatedMinutes:** 90 · **prerequisites:** tma4121-7-5 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele J-komplekset (den tyngste oppgaven): oppsett → tre $k$-tilfeller → egenverdier → superposisjon → Fourier-matching ($n=0$ ved Neumann!), som A-besvarelse.
- **Eksamensbelegg:** Dekker sjanger J (91 %, tyngste enkeltoppgave) i alle varianter (Dirichlet/Neumann, homogen/ikke-homogen, varme/bølge/Laplace-rektangel, variabel koeffisient). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) sett $u=F(x)G(t)$ og separér; 2) behandl **alle tre** $k$-tilfellene eksplisitt (delsteg i); 3) randbetingelsene → egenverdier/egenfunksjoner ($\sin$ ved Dirichlet, $\cos$ **inkl. $n=0$** ved Neumann — delsteg ii); 4) løs $t$-ODE-en; 5) superponér; 6) Fourier-match initialbetingelsen (les av direkte når mulig); 7) ved ikke-homogenitet: stasjonær $w$ + $v=u-w$; 8) evt. $t\to\infty$. **Gjennomregnet eksamenscase** med margnotater om poenguttelling per steg (særlig at alle tre $k$-tilfellene og $n=0$-leddet må vises). 8–15 varianter på eksamensnivå.
- **Oppgavesjangre:** J. Mønstereksempel: «Løs $u_t=2u_{xx}$, $0<x<1$, $u_x(0,t)=u_x(1,t)=0$, $u(x,0)=3+\cos 2\pi x$, og finn likevektstemperaturen når $t\to\infty$.»
- **Typiske feil:** §5.3 (glemt $k$-tilfelle, delsteg i; glemt $n=0$ ved Neumann, delsteg ii) i alle varianter; unødvendig koeffisientintegral; tidsfella.
- **Quiz: 12 · Flashcards: 8**

---

### Del 8 — TMA4121-tillegg *(verifiser mot pensum)*

> **Del-merknad (gjelder begge kapitler i Del 8):** Flervariabel kalkulus og lineær
> algebra er **nye i TMA4121 og finnes IKKE i TMA4120-arkivet** — de kan **ikke
> prognostiseres** fra kilden. Hele delen er **merket «(TMA4121-tillegg, verifiser
> mot pensum)»**. Innhold og vekt **må verifiseres mot TMA4121s pensum og første
> reelle eksamenssett**. Kapitlene kryssreferer søsterbøkene `tma4101` (flervariabel
> kalkulus og vektoranalyse) og `tma4110` (lineær algebra, komplekse tall og
> differensiallikninger) — **lenk kun til kapitler som finnes ved bygg**; ellers
> referér ved navn. Frekvens/vekt-tallene i EKSAMENSANALYSE gjelder **ikke** denne
> delen.

#### Kapittel 8.1: Flervariabel kalkulus (TMA4121-tillegg — kryssref tma4101)

- **id:** `tma4121-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** tma4121-1-1 · **kapitteltype:** teori
- **description:** **(TMA4121-tillegg, verifiser mot pensum.)** Kjerneverktøyene i flervariabel kalkulus som TMA4121 legger til: gradient, retningsderivert, multiple integraler og elementær vektoranalyse.
- **Eksamensbelegg:** **NYTT i TMA4121 — 0/11 i arkivet, kan ikke prognostiseres.** Sannsynlig innslag i et TMA4121-sett (analysens prognose), men vekt/form ukjent. **Merk (verifiser)** gjennomgående. Sourced fra TMA4105/TMA4101-tradisjonen. Kryssref søsterbok `tma4101` — lenk kun hvis kapitlet finnes. Prioritet: **kjenne** *(verifiser — kan være høyere)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (utvalg, verifiser mot pensum). **Gradient** $\nabla f=(f_x,f_y,f_z)$; **retningsderivert** $D_{\mathbf v}f=\nabla f\cdot\hat{\mathbf v}$ og at $\nabla f$ peker i retning av raskest vekst; **nivåkurver/-flater** står normalt på $\nabla f$; **dobbelt-/trippelintegral** og iterert integrasjon, bytte av integrasjonsrekkefølge, polar-/sylinder-/kulekoordinater med jakobian; kort **vektoranalyse**: divergens $\nabla\cdot\mathbf F$, curl $\nabla\times\mathbf F$, og (oversikt, «bør kjenne til») Greens/Gauss'/Stokes' setninger som bro til kompleks integrasjon. **Alt merket som tillegg.** **Kode E-markering:** gradient-/integraldefinisjonene *må reproduseres*; koordinatbyttene *må kunnes*.
- **Oppgavesjangre:** K (flervariabel). Mønstereksempel: «Finn retningsderiverten til $f(x,y)=x^2y-y^3$ i punktet $(1,2)$ i retning $\mathbf v=(3,4)$, og regn $\iint_R f\,dA$ over rektangelet $[0,1]\times[0,2]$.»
- **Typiske feil:** Glemme å normere $\mathbf v$ i retningsderiverten; feil jakobian i koordinatbytte; forveksle gradient (vektor) med derivert (skalar).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.2: Lineær algebra (TMA4121-tillegg — kryssref tma4110)

- **id:** `tma4121-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** tma4121-1-1 · **kapitteltype:** teori
- **description:** **(TMA4121-tillegg, verifiser mot pensum.)** Lineæralgebra-verktøyene TMA4121 legger til: egenverdier, egenvektorer, diagonalisering og koblingen til lineære ODE-systemer.
- **Eksamensbelegg:** **NYTT i TMA4121 — 0/11 i arkivet, kan ikke prognostiseres.** Sannsynlig innslag (analysens prognose), vekt/form ukjent. **Merk (verifiser)** gjennomgående. Sourced fra TMA4110-tradisjonen. Kryssref søsterbok `tma4110` — lenk kun hvis kapitlet finnes. Prioritet: **kjenne** *(verifiser — kan være høyere)*.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT (utvalg, verifiser mot pensum). **Egenverdier/egenvektorer**: karakteristisk likning $\det(A-\lambda I)=0$, egenrom; **diagonalisering** $A=PDP^{-1}$ og betingelsen (nok lineært uavhengige egenvektorer); komplekse egenverdier (kobling Del 1); kort **anvendelse**: løs et lineært ODE-system $\mathbf x'=A\mathbf x$ via egenverdier/-vektorer ($\mathbf x=\sum c_i e^{\lambda_i t}\mathbf v_i$) — broen til transform-/PDE-delene; determinant, invers, rang (oversikt, «bør kjenne til»). **Alt merket som tillegg.** **Kode E-markering:** karakteristisk-likning-/diagonaliserings-oppskriften *må reproduseres*; systemløsningen *må kunnes*.
- **Oppgavesjangre:** K (lineær algebra). Mønstereksempel: «Finn egenverdiene og egenvektorene til $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, diagonaliser $A$, og løs $\mathbf x'=A\mathbf x$.»
- **Typiske feil:** Feil fortegn i $\det(A-\lambda I)$; anta at en matrise alltid er diagonaliserbar (mangler nok egenvektorer); glemme de komplekse egenverdiene når de finnes.
- **Quiz: 16 · Flashcards: 18**

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Kode E-verksted — reproduser tabellen og før som sensor vil se det

- **id:** `tma4121-9-1` · **number:** 9.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–8 · **kapitteltype:** drill
- **description:** Operasjonaliser kode E: gjenskap hele formelapparatet fra hukommelse/utledning, tren føringsstandarden, og gå gjennom de seks delstegene og sjanger-katalogen A–K samlet.
- **Eksamensbelegg:** Metakapittel som operasjonaliserer **kode E-prinsippet** (fra Del 0). Uten utdelt tabell må studenten kunne reprodusere/utlede alt selv. Prioritet: gjelder alle sjangre.
- **Innholdskontrakt:** Tre leveranser. **(1) «Reproduser tabellen»-arket:** en kuratert liste over alt som TMA4120 delte ut men TMA4121 ikke gjør — Laplace-parene + forskyvnings-/konvolusjonsteoremene, Fourier-Gauss-paret + regler, residyformelen for pol av orden $n$, generalløsningen av 2. ordens lineær ODE (tre rot-tilfeller), standardintegralene og trig-identitetene — med **utledningsskisse** for de sentrale. **(2) Føringsstandard-drillen:** for hver sjanger A–K, hva sensor krever (navngi teoremet, tegn kurven, vis flere metoder, oppgi eksakt svar/konvergensområde). **(3) De seks delstegene** samlet som sjekkliste (tre $k$-tilfeller, $n=0$ ved Neumann, ML-argument, dobbeltpol-residy, konvergensområde per Laurent, hel-omegn-analytisitet) med henvisning til kapitlet som drilles. Flashcards her er rene gjenkjenningskort (transformpar, teoremnavn, residyformler, delsteg → sjanger).
- **Oppgavesjangre:** Alle A–K i kortform. Mønstereksempel: «Uten hjelpemidler, skriv opp og (der mulig) utled: de fem Laplace-standardparene, residyformelen for en pol av orden $n$, og de seks obligatoriske delstegene med hvilken sjanger hver hører til.»
- **Typiske feil:** Bruke tid på å pugge det som kan utledes raskt; ikke ha residyformelen/konvolusjonsteoremet/d'Alembert klart (ingen tabell i kode E); hoppe over ett av de seks delstegene.
- **Quiz: 16 · Flashcards: 24** (samler transformpar/teoremer/delsteg på tvers — rask gjenkjenning)

#### Kapittel 9.2: Øvingseksamen 1 — den komplekse-analyse-tunge malen (kode E)

- **id:** `tma4121-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** tma4121-9-1 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett (7 like-vektede oppgaver, kode E) som speiler den stabile kompleks-analyse-/PDE-kjernen.
- **Eksamensbelegg/miks:** Speiler et typisk TMA4120-sett omkalibrert for TMA4121 (kode E, ingen tabell): **O1** analytisitet/CR + harmonisk konjugert (A/B); **O2** kompleks integrasjon — Cauchys formel vs. residysetningen (C/E); **O3** Laurent-rekke i flere annuli **med konvergensområde** (D); **O4** residy — reelt integral via halvsirkel + ML (F); **O5** Fourier-rekke med utvidelse + tallrekkesum (G); **O6** PDE-separasjon for varmelikningen med alle tre $k$-tilfellene + Fourier-matching (J); **O7** Laplace-transform med konvolusjon/Heaviside — **utled parene** (H, *verifiser vekt*). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave, med `tip`-notat om delpoeng (like vekt) og tidsbudsjett, og markering av de seks delstegene der de inngår.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2 — PDE- og transformtung mal (kode E)

- **id:** `tma4121-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** tma4121-9-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett (8 like-vektede oppgaver, kode E) som vrir tyngden mot PDE, transform-metoden og de tyngre residy-variantene.
- **Eksamensbelegg/miks:** **O1** harmonisk konjugert gitt $v$, finn $u$ (B); **O2** residy — lukket kurve med dobbeltpol (E, delsteg iv); **O3** keyhole-/trig-integral (E/F, toppsjikt); **O4** Fourier-transform — utregning + invers via residy (I, *verifiser*); **O5** Fourier-transform-metoden for PDE på $\mathbb{R}$ + varmekjerne (I/J, *verifiser*); **O6** PDE-separasjon med **Neumann-rand** ($n=0$-leddet, delsteg ii) (J); **O7** Laplace med integro-differensiallikning (H, *verifiser*); **O8** Sturm–Liouville — ortogonalitet + egenfunksjonsutvidelse (J). Justert for å dekke sjangrene som Øvingseksamen 1 ikke traff. Løsningsforslag som A-besvarelse med vektings-tips.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3 — bred reform-mal med tilleggsområdene (kode E)

- **id:** `tma4121-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** tma4121-9-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett (7 like-vektede oppgaver, kode E) etter den brede TMA4121-reformmalen, med de nye tilleggsområdene flervariabel og lineær algebra.
- **Eksamensbelegg/miks:** Speiler et bredt TMA4121-sett (**verifiser mot første reelle sett**): **O1** analytisitet — ingensteds analytisk / isolert-CR-felle (A, delsteg vi); **O2** Taylor/Laurent + punkt-test (D, delsteg v); **O3** residy — reelt integral via halvsirkel + ML (F, delsteg iii); **O4** PDE-separasjon — bølge/Laplace-rektangel (J); **O5** Fourier-rekke — kompleks form + M-test (G); **O6** flervariabel kalkulus — gradient/retningsderivert + dobbeltintegral (K, **TMA4121-tillegg, verifiser**); **O7** lineær algebra — egenverdier/diagonalisering + ODE-system (K, **TMA4121-tillegg, verifiser**). Dekker de nye reform-områdene eksplisitt; markér hvor tilleggsområdene har **null arkivbelegg** (verifiser mot pensum). Løsningsforslag som A-besvarelse.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 14 |
| 1 | 1.1–1.5 | 14+16+20+18+12 = **80** | 18+20+22+20+8 = **88** |
| 2 | 2.1–2.4 | 16+16+18+12 = **62** | 16+18+20+8 = **62** |
| 3 | 3.1–3.4 | 16+16+20+12 = **64** | 18+18+22+8 = **66** |
| 4 | 4.1–4.6 | 16+18+18+18+14+12 = **96** | 18+22+20+20+14+8 = **102** |
| 5 | 5.1–5.4 | 18+16+14+12 = **60** | 18+16+14+8 = **56** |
| 6 | 6.1–6.5 | 18+18+16+16+14 = **82** | 22+20+18+18+12 = **90** |
| 7 | 7.1–7.6 | 20+18+16+14+14+12 = **94** | 20+18+16+14+16+8 = **92** |
| 8 | 8.1–8.2 | 16+16 = **32** | 18+18 = **36** |
| 9 | 9.1–9.4 | 16+5+5+5 = **31** | 24+0+0+0 = **24** |
| **Sum** | **41 kap.** | **613 ≥ 500 ✓** | **630 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tetthetsbegrunnelse (jf. audit «≥500 er gulv»):** TMA4121 er både teorem-tungt
(kompleks analyse) og transform-tungt (kode E krever memorering/utledning), og
dekker **fire pensumområder**. Derfor ligger begge kvotene godt over gulvet
(quiz 613, flashcards 630). **Flashcards (630) > quiz (613)** fordi kode E gjør
**transformpar, teoremnavn (Cauchy–Riemann, Laurent, residysetningen, ML,
Weierstrass, konvolusjon, d'Alembert), residyformler og de seks delstegene til
ren gjenkjennings-/reproduksjonstrening** — flashcard-gull. Tyngdepunktet ligger i
den **trygge kontinuerlige kjernen**: kompleks analyse (Del 1–4) bærer **302 av
613 quiz** og **318 av 630 flashcards** (om lag halvparten), mens transformblokken
(Del 6, `(verifiser)`) og tilleggsmodulene (Del 8, nye/uverifiserte) holdes
bevisst moderate til vekten er bekreftet.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel Del 1–7; 2 for tilleggsdelen Del 8 — 30 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang i minutter. **Avvik dokumentert:** Del 0 (eksamenskart) og
Del 9 (eksamenstrening) har ingen egne prøver; Del 8 (tilleggsmodulene) er nytt/
uverifisert stoff uten arkivbelegg og får **2** prøver i stedet for 4 (vekt i
TMA4121 ukjent — `(verifiser)`).

**Del 1 — Kompleks funksjonsteori (analytisitet/CR/harmonisk konjugert)**
1. Prøve 1.A (30 min): Komplekse tall/funksjoner + elementærfunksjoner + kompleks likning (sjanger A-støtte/K).
2. Prøve 1.B (35 min): Analytisitet og Cauchy–Riemann, inkl. isolert-CR-felle (sjanger A, delsteg vi).
3. Prøve 1.C (35 min): Harmonisk konjugert — gitt $u$ finn $v$ og motsatt (sjanger B).
4. Prøve 1.D (40 min): Full analytisitet-/CR-oppgave på eksamensnivå (sjanger A+B).

**Del 2 — Kompleks integrasjon**
1. Prøve 2.A (30 min): Konturintegraler ved parametrisering, ikke-analytisk integrand (sjanger C).
2. Prøve 2.B (35 min): Cauchys integralteorem + veiuavhengighet (sjanger C).
3. Prøve 2.C (35 min): Cauchys integralformel + formelen for deriverte (sjanger C).
4. Prøve 2.D (40 min): Blandet — velg og navngi metode (sjanger C, eksamensnivå).

**Del 3 — Taylor- og Laurent-rekker**
1. Prøve 3.A (30 min): Konvergensradius via nærmeste singularitet + geometrisk rekke (sjanger D).
2. Prøve 3.B (35 min): Taylor-rekke via substitusjon/leddvis derivasjon (sjanger D).
3. Prøve 3.C (40 min): Laurent i flere annuli **med konvergensområde** (sjanger D, delsteg v).
4. Prøve 3.D (40 min): Full Laurent-oppgave + punkt-test på eksamensnivå (sjanger D).

**Del 4 — Residyer og reelle integraler**
1. Prøve 4.A (35 min): Singularitetsklassifisering + residy (enkel/dobbeltpol, delsteg iv) (sjanger E).
2. Prøve 4.B (40 min): Residysetningen — lukket kurve, flere poler (sjanger E).
3. Prøve 4.C (40 min): Reelt uegentlig integral via halvsirkel + ML (sjanger F, delsteg iii).
4. Prøve 4.D (40 min): Keyhole-/trig-integral på eksamensnivå (sjanger E/F, toppsjikt).

**Del 5 — Fourier-rekker**
1. Prøve 5.A (35 min): Reell rekke med symmetriutnyttelse + delvis integrasjon (sjanger G).
2. Prøve 5.B (35 min): Halvintervall-utvidelse, skisse, midling (konvergenssetningen) + M-test (sjanger G).
3. Prøve 5.C (30 min): Kompleks Fourier-rekke og broen til $a_n,b_n$ (sjanger G).
4. Prøve 5.D (40 min): Full Fourier-oppgave med tallrekkesum på eksamensnivå (sjanger G).

**Del 6 — Fourier- og Laplace-transform *(verifiser vekt)***
1. Prøve 6.A (35 min): Laplace ODE/IVP — utled parene (sjanger H, kode E).
2. Prøve 6.B (35 min): Invers Laplace — delbrøk **og** kvadratkomplettering (sjanger H).
3. Prøve 6.C (35 min): Konvolusjon + Heaviside/Dirac med andreforskyvning (sjanger H).
4. Prøve 6.D (40 min): Fourier-transform — utregning + invers via residy (sjanger I, eksamensnivå).

**Del 7 — Partielle differensiallikninger og Sturm–Liouville**
1. Prøve 7.A (45 min): Separasjon — alle tre $k$-tilfellene + egenverdier (sjanger J, delsteg i).
2. Prøve 7.B (40 min): Superposisjon + Fourier-matching + Neumann ($n=0$) + ikke-homogen (sjanger J, delsteg ii).
3. Prøve 7.C (40 min): Bølge/d'Alembert + Laplace-rektangel (sjanger J).
4. Prøve 7.D (40 min): Transform-metoden for PDE på $\mathbb{R}$ + Sturm–Liouville (sjanger I/J, eksamensnivå).

**Del 8 — TMA4121-tillegg *(verifiser mot pensum)***
1. Prøve 8.A (40 min): Flervariabel kalkulus — gradient/retningsderivert + multippelintegral (sjanger K, tillegg).
2. Prøve 8.B (40 min): Lineær algebra — egenverdier/diagonalisering + ODE-system (sjanger K, tillegg).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Mal den speiler | Miks (oppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 9.2) | Kompleks-analyse-tung kjerne, 7 like-vektede oppg. | Analytisitet/CR + harmonisk konj. (A/B) + kompleks integrasjon (C/E) + Laurent m/annulus (D) + halvsirkel+ML (F) + Fourier-rekke (G) + PDE-separasjon (J) + Laplace-konvolusjon (H) |
| Øvingseksamen 2 (kap. 9.3) | PDE-/transformtung, 8 oppg. | Harmonisk konj. (B) + dobbeltpol-residy (E) + keyhole/trig (E/F) + Fourier-transform (I) + transform-PDE (I/J) + Neumann-separasjon (J) + Laplace integro-diff. (H) + Sturm–Liouville (J) |
| Øvingseksamen 3 (kap. 9.4) | Bred reform-mal m/tillegg, 7 oppg. | Isolert-CR (A) + Laurent+punkt-test (D) + halvsirkel+ML (F) + bølge/Laplace-rektangel (J) + kompleks Fourier + M-test (G) + flervariabel (K) + lineær algebra (K) |

Til sammen dekker de tre settene samtlige sjangre A–K minst én gang, og alle seks
delstegene forekommer minst én gang på tvers av settene.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — kildens form (4 t, 6–8 like-vektede oppgaver, ingen
   flervalg, «alle svar begrunnes») og TMA4121-endringene (**kode E — ingen
   hjelpemidler**, Inspera; `(verifiser)` mot første reelle sett) (fra kap. 0.1).
2. **Kontinuitetskartet og prioriteringen** — temafrekvens-tabellen omgjort til
   tre lesenivåer: **perfekt** (kompleks analyse Del 1–4: analytisitet/CR,
   integrasjon, Laurent, residyer; PDE-separasjon Del 7), **kunne** (Fourier-rekker
   Del 5, transform Del 6 — *sistnevnte med `(verifiser)`-forbehold*), **kjenne/
   verifiser** (Sturm–Liouville, kompleks likning, keyhole; **tilleggsområdene**
   flervariabel + lineær algebra Del 8, som er nye og uverifiserte).
3. **Kode E-strategien** — hva som **må reproduseres fra hukommelsen** vs. **utledes**
   (fra kap. 9.1), siden den utdelte tabellen er borte; utledningsskissene for
   standardparene.
4. **Sjangerguiden** — de 11 oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (1.5, 2.4, 3.4, 4.6, 5.4, 7.6) i kortform.
5. **Føringsstandarden og de seks delstegene** — «alt begrunnes», bær teoremnavn,
   vis flere metoder, tegn kurven/marker singulariteter, oppgi eksakt svar/
   konvergensområde; de seks delstegene (tre $k$-tilfeller, $n=0$ ved Neumann,
   ML-argument, dobbeltpol-residy, konvergensområde per Laurent, hel-omegn-
   analytisitet) som toppsjikt-skille.
6. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → perfekt-kjernen 2 → 3 → 4 → 7, deretter Fourier 5, transform 6
   (`(verifiser)`), tilleggene 8 (`(verifiser)`), prøver underveis, øvingseksamenene
   de tre siste ukene under tidspress (240 min, kode E).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tma4121` med alle 41
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`. `sectionNames` fra §2-tabellen (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer sjanger-katalogen A–K, frekvenstallene,
   kontinuitetskartet, føringsstandarden, kode E-prinsippet og de seks delstegene.
3. **Kompleks-analyse-kjernen i avhengighetsrekkefølge**: Del 1 (analytisitet;
   krever komplekst fundament 1.1/1.2) → Del 2 (integrasjon; krever 1.3) → Del 3
   (Taylor/Laurent; krever 1.2) → Del 4 (residyer; krever 3.3 + 2.3).
4. **Fourier + transform + PDE**: Del 5 (Fourier-rekker; krever 1.1) → Del 6
   (transform; krever 1.1/5.3) → Del 7 (PDE; krever 5.1, 6.4 for 7.4).
5. **Tilleggsmodulene**: Del 8 (krever 1.1) — merket `(verifiser)`, kryssref
   `tma4101`/`tma4110` (lenk kun hvis kapitlet finnes).
6. **Del 9** (kode E-verksted + øvingseksamenene til slutt — de gjenbruker alt);
   prøvene (§4) legges i respektive delers siste kapittel eller som egne
   exercise-seksjoner etter plattformens mønster.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle uttrykk i `$...$`/`$$...$$`; `\\` i JSON; ingen unicode-brøker;
  konsistent notasjon ($z=x+iy$, $f=u+iv$, $u_x=v_y$, $u_y=-v_x$, $\operatorname{Res}$,
  annulus $r<|z-z_0|<R$, $\mathcal{L}$, $F(s)$, $\hat f(\omega)$, $a_n/b_n/c_n$,
  $u=F(x)G(t)$, separasjonskonstant $k$).
- [ ] **Kode E-markering**: hvert transform-/formeltungt kapittel skiller eksplisitt
  «må reproduseres fra hukommelsen» fra «må utledes/kunnes aktivt» (grep etter begge).
- [ ] **`(verifiser)`-merking konsekvent**: hele Del 6 (transform), Del 8 (tillegg),
  Sturm–Liouville-vekt (7.5) og reform-/formatdetaljene (kode E, Inspera) merket
  `(verifiser)`; grep `-i verifiser` (fang sammensatte varianter).
- [ ] **De seks delstegene dekket med egen `warning`**: (i) tre $k$-tilfeller (7.1/7.6),
  (ii) $n=0$ ved Neumann (7.2/7.6), (iii) ML-argument for buen (4.4/4.6), (iv)
  dobbeltpol-/orden-$n$-residy (4.2/4.6), (v) konvergensområde per Laurent (3.3/3.4),
  (vi) analytisitet krever hel omegn (1.3/1.5).
- [ ] **Teorem-/metodenavn båret eksplisitt**: Cauchy–Riemann, Cauchys integralteorem/
  -formel, Laurents teorem, residysetningen, ML-ulikheten, Weierstrass' M-test,
  konvergenssetningen, konvolusjons-/andreforskyvningsteoremet, superposisjonsprinsippet.
- [ ] **Flere metoder vist** der sjangeren har dem (delbrøk vs. kvadratkomplettering;
  grensedefinisjon vs. CR for $f'$; residysetningen vs. Cauchys integralformel;
  endelig sum vs. uendelig rekke i separasjon).
- [ ] **Malene med**: residy-mal (klassifiser→residy→sum) 4.2/4.3; ML-argument-mal
  4.4; separasjon-mal (ansats→tre $k$→egenverdier→superposisjon→matching) 7.1/7.6;
  «reproduser tabellen»-drill 6.5/9.1.
- [ ] **Tilleggsmodulene merket**: Del 8 har eksplisitt «(TMA4121-tillegg, verifiser
  mot pensum)» og kryssreferer `tma4101`/`tma4110` (lenk kun til eksisterende kapitler).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip`, Forkunnskaper +
  Symbol-/formelliste-`collapsible`, Typiske feil-`warning`, 2–4 eksempler (siste på
  eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 613 og flashcard-sum ≥ 630** per kvotetabellen (§3).
- [ ] **Prøver**: 4 per temadel 1–7 + 2 for Del 8 (30 stk) + 3 øvingseksamener (kode E,
  6–8 like-vektede oppg.) som sammen dekker sjangrene A–K og de seks delstegene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, funksjoner og kontekst;
  ingen formuleringer fra reelle sett eller løsningsforslag (skjelettets
  mønstereksempler er selv omskrivninger og varieres videre, kopieres ikke inn ordrett).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.

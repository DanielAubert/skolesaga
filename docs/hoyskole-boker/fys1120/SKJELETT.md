# Bokskjelett: FYS1120 Elektromagnetisme — eksamensrettet lærebok (UiO)

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er angitt her, destillert fra
> `EKSAMENSANALYSE.md` (34 oppgavesett + 45 løsnings-/sensorfiler 2009–2025;
> alle `-grading`-veiledninger 2016–2025 lest ordrett; slutteksamener 2016–2025
> i detalj). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i dette skjelettet er omskrevne — de kan varieres videre, men
> aldri kopieres ordrett inn som oppgaver. Formlene er standard fysikknotasjon og
> ikke opphavsrettslig beskyttet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `fys1120` |
| Tittel | **FYS1120 Elektromagnetisme — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (kvantitativt fag med faste oppgavemaler + eget numerisk spor) |
| Antall kapitler | **32** (1 eksamenskart + 25 tema + 6 eksamenstrening) |
| Estimert totaltid | **2 810 min ≈ 47 timer** |
| Quiz totalt | **509** (krav ≥500) |
| Flashcards totalt | **508** (krav ≥500) |

**Pitch (ett avsnitt):** FYS1120-eksamen er usedvanlig forutsigbar. Et moderne
sett er nesten alltid fem langsvarsoppgaver etter samme mal: **(1)** E-felt fra
ladninger (Coulomb + superposisjon), **(2)** Gauss' lov / kondensator /
dielektrikum, **(3)** en transient RC/RL-krets, **(4)** magnetfelt fra strøm
(Ampère eller Biot–Savart) koblet til gjensidig induktans, og **(5)** en
**numerisk Python-oppgave**. Fire søyler bærer nesten hvert eneste sett
(elektrostatikk, potensial, Gauss, transient krets — alle ~90 %), magnetostatikk
er den femte (~82 %), og siden 2018 er Python med i **100 %** av settene. Denne
boka er kalibrert mot nettopp det: full metodedrill på søylene, egen numerikk-del
som et fullverdig kapittelspor (ikke en fotnote), og konsekvent trening i det
sensor faktisk belønner — **nevne loven ved navn før bruk**, **begrunne symmetrien
eksplisitt** (2 av 5 poeng ved Gauss/Ampère), holde **vektor og skalar** fra
hverandre, og sette opp **R-vektoren `R = r − r'`** hver gang. AC-kretser med
kompleks impedans og ladd-partikkel-oppgaver, som dominerte 2009–2014, er så godt
som borte fra moderne slutteksamen og dekkes bare som kompakt beredskap;
EM-bølger, Poynting og full Maxwell-dynamikk er kjenne-stoff.

**Kritisk rammebetingelse (gjelder HELE boka):** Eksamen deler ut et **rikt
formelark** (3 sider: Maxwell på integral- og differensialform, materialrelasjoner,
grensebetingelser, kretselementer, vektoridentiteter, `∇`/`∇·`/`∇×`/`∇²` i alle
tre koordinatsystemer, divergensteoremet og Stokes' teorem, konstanter) og
tillater Rottman + Angell/Øgrim & Lian + kalkulator. Boka skal derfor ALDRI
fremstille formler og konstanter som puggestoff. Skillet er: **«må kunne brukes
aktivt»** (velges, kombineres, symmetriargumenteres og *utledes* under tidspress —
kjerneverktøyene i kapitlenes innholdskontrakter) vs. **«hentes fra arket/tabellen»**
(konstantverdier som $\varepsilon_0 = 8{,}854\cdot10^{-12}$, $\mu_0 = 4\pi\cdot10^{-7}$,
materialdata, ferdige vektoridentiteter, sjeldne formler). Hvert delkapittels
Symbol- og formelliste markerer hva som står på formelarket. Boka trener
**bruk og utledning**, ikke pugg.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
- **R-vektoren:** feltet fra en kilde skrives alltid med $\mathbf{R} = \mathbf{r} - \mathbf{r}'$
  (feltpunkt $\mathbf{r}$ minus kildepunkt $\mathbf{r}'$), $R = |\mathbf{R}|$,
  $\hat{\mathbf{R}} = \mathbf{R}/R$. Denne oppstillingen er selvstendig
  poenggivende og skal vises eksplisitt i hver Coulomb-/Biot–Savart-utledning.
- **Vektor vs. skalar:** feltstyrke $\mathbf{E}$, $\mathbf{B}$, $\mathbf{D}$,
  $\mathbf{H}$ er vektorer (fete symboler / vektorpil); potensial $V$, ladning
  $Q$, fluks $\Phi$, strøm $I$ er skalarer. Å regne felt der det spørres om
  potensial (eller omvendt) er den dyrest straffede enkeltfeilen (−3). Skriv
  aldri en vektor under en brøkstrek.
- **Symbolapparat:** $\varepsilon = \varepsilon_r\varepsilon_0$ (permittivitet),
  $\mu = \mu_0(1+\chi_m)$ (permeabilitet), $\sigma$ (konduktivitet — ikke
  flateladning i samme sammenheng; flateladning skrives $\rho_s$), $\tau$
  (tidskonstant), $\phi$ (asimutvinkel / $\hat{\boldsymbol{\phi}}$-retning).
  Ladningstettheter: $\rho_l$ (linje), $\rho_s$ (flate), $\rho$ (volum).
  Symbollisten i HVERT delkapittel definerer hvilke symboler som gjelder der.
- **Enheter og siffer:** alle tallsvar med SI-enhet, rimelig antall gjeldende
  siffer (2–3) og riktig tierpotens.

**Bevisst nedprioritert / utelatt (begrunnes i Del 0):**
- **AC-kretser med kompleks impedans (RLC):** tungt 2009–2014, nå nesten borte
  fra slutteksamen (lever bare som ett teorisvar). Dekkes **kompakt som
  beredskap** i kap. 9.2 — ikke satsingsområde.
- **Ladd partikkel i felt (syklotron, massespektrometer):** utgått etter ~2012.
  Kompakt beredskap i kap. 9.2.
- **EM-bølger og Poyntings vektor:** marginale i arkivet (bølger én gang,
  Poynting aldri som egen oppgave). **Kjenne-stoff**, kompakt i kap. 9.1.
- **Full Maxwell-dynamikk / retarderte potensialer:** mest **navngiving** og
  integral↔differensial-overgang via divergensteoremet/Stokes. Kjenne, kap. 9.1.
- **Relativitet:** ikke testet — utelatt helt.

**Forhold til søsterbøkene:** FYS1120 bygger videre på elektromagnetismen i
[fysikk 2](/fysikk2/fysikk2-3-1) (Coulomb, felt, potensial, magnetisme —
built og lenket der det er naturlig) og forutsetter flervariabel-vektorregning.
Forkunnskaper i **skalar- og kryssprodukt** dekkes i R2 og lenkes.
Søsteremnet **FYS1001 Innføring i fysikk** er foreløpig på skjelett-stadiet
(ikke bygget); der FYS1001-kapitler er relevante som forkunnskap, refereres de i
**klartekst** (uten lenke) til de er bygget. Det samme gjelder Python-emnet
**IN1900** (i kø) — grunnleggende NumPy/matplotlib forutsettes og forklares i
Del 8, med klartekst-referanse til IN1900.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: elektrostatikk → potensial →
ledere/felter → kretser → magnetostatikk → induksjon → numerikk); frekvensen
styrer *omfanget*: «må beherskes perfekt»-temaer får teorikapitler + eget
drillkapittel, «bør kjenne til» får ett kompakt kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer 5-oppgavers-malen og sjangerkatalogen A–N. |
| 1 | Elektrostatikk: ladning, Coulomb og felt | 3 | Coulomb/E-felt **~90 %**, alltid oppgave 1 → nivå 1 «perfekt» → 2 teori + drill. R-vektor + symmetrinulling drilles til automatikk. |
| 2 | Gauss' lov | 3 | **~90 %**; symmetriargumentet er selvstendig poenggivende (2/5) → nivå 1 → 2 teori + drill (alle symmetrier, alle områder, E og D). |
| 3 | Elektrisk potensial | 3 | **~90 %**; skalar superposisjon og felt→potensial via linjeintegral → nivå 1 → 2 teori + drill. Vektor/skalar-fella bor her. |
| 4 | Ledere, kondensatorer og dielektrika | 3 | Kondensator **~76 %** (kunne), dielektrika **~47 %** og økende (kunne). Feltenergi (kjenne) foldes inn → 2 teori + drill. |
| 5 | Strøm og transiente kretser | 3 | Transient krets **~88 %** (nivå 1, egen oppgave), Ohm/resistans ~53 % (kunne) → «KVL nevnt ved navn → diff.likning» drilles → teori + drill. |
| 6 | Magnetostatikk: magnetfelt fra strøm | 4 | Ampère+Biot–Savart **~82 %** (nivå 1, femte søyle) → 2 teori (Ampère; Biot–Savart+dipol) + magnetiske materialer (kjenne, ~29 %) + drill. |
| 7 | Induksjon og induktans | 3 | Faraday/Lenz **~71 %** (kunne), selv-/gjensidig induktans **~53 %** (kunne) → 2 teori + drill. Dipol→gjensidig induktans-kjeden fullføres her. |
| 8 | Numerisk Python | 3 | **100 % fra 2018** (nivå 1). Den viktigste forskjellen fra klassisk EM. Eget fullverdig spor: Coulomb-sum → Biot–Savart/felt-funksjoner+analytisk grense → Laplace-løser + kodemodifikasjons-drill. |
| 9 | Eksamenstrening | 6 | Teori-/lovnavn-drill (sjanger N) + kjenne/beredskap (Maxwell/bølger; AC/ladd partikkel) + midtveis-MCQ-simulering + 3 komplette øvingseksamener etter 5-oppgavers-malen. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Elektrostatikk: ladning, Coulomb og felt |
| 2 | Gauss' lov |
| 3 | Elektrisk potensial |
| 4 | Ledere, kondensatorer og dielektrika |
| 5 | Strøm og transiente kretser |
| 6 | Magnetostatikk: magnetfelt fra strøm |
| 7 | Induksjon og induktans |
| 8 | Numerisk elektromagnetisme (Python) |
| 9 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Eget numerisk kapittelspor (Del 8, 3 kapitler).** DNA-en behandler numerikk
   som et mulig element; her er det en egen del på nivå 1, fordi Python er testet
   i 100 % av settene siden 2018 og er den enkeltferdigheten som tydeligst skiller
   FYS1120 fra et klassisk EM-pensum. Merk kontrasten til søsterboka FYS1001, der
   numerikk er lovet i emnebeskrivelsen men aldri testet (og derfor utelatt der).
2. **Fem av seks drillkapitler ligger inne i temadelene sine** (1.3, 2.3, 3.3,
   4.3, 5.3, 6.4, 7.3, 8.3), ikke samlet i siste del, fordi sjangrene er
   temaspesifikke gjengangere som må drilles rett etter teorien. Del 9 beholder
   den *tverrgående* sjangeren (kvalitative/teori/lovnavn — sjanger N) og
   øvingseksamenene.
3. **Egen teori-/lovnavn-drill (kap. 9.1)** er et tillegg utover DNA-ens
   sjangerkapittel-begrep — begrunnet i at «nevn loven ved navn» og «vis
   integral↔differensial» er dokumenterte, selvstendig poenggivende krav som
   sensor honorerer på tvers av alle oppgaver.
4. **Midtveis-MCQ-simulering (kap. 9.3)** speiler at midtveiseksamen (25 % av
   karakteren) er ren flervalg. **Quizbanken i Del 1–5 er direkte
   midtveistrening** (se under) — 9.3 samler den til et generalprøve-format.

**Midtveiseksamen (25 % av karakteren, ren flervalg):** dekker **kun første
halvdel** — elektrostatikk, Coulomb/superposisjon, R-vektor, Gauss' lov,
elektrisk potensial, dielektrika/bundet ladning, kapasitans, strøm/resistans og
enkle kretser (**Del 1–5**). **Aldri** magnetostatikk, induksjon eller Maxwell
(andre halvdel, testes bare på slutteksamen). Quizbanken i Del 1–5 er kalibrert
som midtveistrening; kap. 9.3 er generalprøven.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**A** E-felt fra ladninger (Coulomb+superposisjon), **B** Gauss' lov,
**C** elektrisk potensial, **D** kondensator/kapasitans, **E** dielektrika/D-felt/
bundet ladning, **F** strøm/resistans (Ohm), **G** transient RC/RL-krets,
**H** magnetfelt fra strøm (Ampère/Biot–Savart), **I** magnetiske materialer/B vs H,
**J** Faraday/Lenz/indusert emf, **K** selv- og gjensidig induktans, **L** magnetisk
dipol, **M** numerisk Python, **N** kvalitative/teori-/lovnavn-oppgaver.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Forkunnskaper-blokk med
kryssbok-lenker og `collapsible` **Symbol- og formelliste** rett etter (SÆRLIG
viktig i EM: ALLE symboler og formler i delkapitlet forklares, per delkapittel —
aldri arv fra tidligere kapitler — med markering av hva som står på formelarket).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes FYS1120

- **id:** `fys1120-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, 5-oppgavers-malen, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2009–2025. Skal gjengi: (i) **formen:** 4 timers skriftlig slutteksamen med formelark + Rottman + Angell/Øgrim & Lian + kalkulator; **slutteksamen teller 75 %, midtsemestereksamen 25 %**; A–F. Moderne sett = **fem langsvarsoppgaver**, hver deloppgave **0–5 poeng** (5 = feilfri), alle likt tellende. Midtveis = **ren flervalg (~12 spørsmål)**, dekker kun første halvdel. (ii) **5-oppgavers-malen** (2024/2025 nesten eksakt): O1 ladninger/Coulomb, O2 Gauss/kondensator/dielektrikum, O3 transient RC/RL-krets, O4 magnetfelt (Ampère/Biot–Savart) + gjensidig induktans, O5 numerisk Python. (iii) **Temafrekvens-tabellen:** elektrostatikk ~90 %, potensial ~90 %, Gauss ~90 %, transient krets ~88 %, magnetfelt fra strøm ~82 %, kondensator ~76 %, induksjon ~71 %, numerisk Python ~53 % (100 % fra 2018), induktans ~53 %, strøm/resistans ~53 %, dielektrika ~47 %, magnetiske materialer ~29 %, feltenergi ~29 %, AC/impedans ~29 % (utgående), magnetisk dipol ~18 %, Maxwell kvalitativt ~18 %, ladd partikkel ~12 % (utgått), EM-bølger/Poynting ~6 %, relativitet 0 %. (iv) **Utviklingen:** fra klassisk EM (2009–2014, med tunge RLC- og syklotronoppgaver) til numerisk-forankret EM (Python fast fra 2018); anvendt innpakning (nervecelle som sylinderkondensator, cellemembran som RC-stige, koaksialkabel). (v) **Bevisst nedprioritert stoff med begrunnelse:** AC/kompleks impedans og ladd partikkel (utgående — beredskap), EM-bølger/Poynting og full Maxwell (kjenne — navngiving), relativitet (aldri). (vi) **Sensorens metaregler:** nevn loven ved navn før bruk; symmetriargumentet er selvstendig poenggivende (2/5 ved Gauss/Ampère); vektor/skalar-disiplin (−3 for felt/potensial-forveksling, −2 for vektor under brøkstrek); R-vektor eksplisitt; følgefeil straffes ikke ved vist mellomregning; flere gyldige metoder godtas; enheter og gjeldende siffer; **0 poeng for uendret eksempel-Python-kode**. (vii) **Karakternivåene** (bestått/midt/topp). (viii) **Formelark-strategien:** hva som må kunne *brukes/utledes* vs. *hentes*.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med frekvens per sjanger og hvilken av de fem oppgavene den typisk er. Prognosen for neste sett: fem oppgaver etter malen, hver deloppgave 0–5 p, ~25–40 % med forklaringskrav. Leseplan: **Del 1–5 er midtveispensum** (25 %) OG grunnmuren i slutteksamen; Del 6–8 er andre halvdel; Del 8 (Python) er nivå 1 og må ikke utsettes til slutten. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for fem oppgaver à ~5 deloppgaver — hvilke gjør du først, og hvorfor er Python-oppgaven ofte lettest å høste poeng på med en forberedt kodemal?».
- **Typiske feil:** Metafeilene: pugge konstanter som står på arket i stedet for å trene metode/utledning; hoppe over Python fordi det «bare er programmering» (det er 1/5 av settet, 100 % siden 2018); bruke tid på AC/impedans og syklotron (utgående); skrive svar uten lovnavn og symmetriargument (taper de «gratis» poengene).
- **Quiz: 12 · Flashcards: 12** (form, vekting, frekvenser, metaregler, sjangerkatalog)

---

### Del 1 — Elektrostatikk: ladning, Coulomb og felt *(prioritet: PERFEKT)*

#### Kapittel 1.1: Coulombs lov, det elektriske feltet og superposisjon

- **id:** `fys1120-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Feltet fra punktladninger med korrekt R-vektor og komponentvis superposisjon — settets faste oppgave 1.
- **Eksamensbelegg:** Sjanger A i **~90 % av settene, nesten alltid oppgave 1**. Signaturoppsett: felt fra to/flere punktladninger, R-vektor, superposisjon (2025-midtveis: felt fra to ladninger). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Vektorer i tre dimensjoner](/r2/r2-5-1) og [Vektorkoordinater og regning](/r2/r2-5-2) (komponentregning); [Skalarproduktet](/r2/r2-5-3). Fysikk 2-fundament: [Elektrisk ladning og Coulombs lov](/fysikk2/fysikk2-3-1) og [Elektrisk felt](/fysikk2/fysikk2-3-2). *(FYS1001 kap. «Elektrostatikk: Coulomb-kraft, felt og kraftbalanse» gir et enklere innsteg — refereres i klartekst; boka er ikke bygget ennå.)*
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Coulomb-kraft $\mathbf{F} = \dfrac{Q_1Q_2}{4\pi\varepsilon_0}\dfrac{\hat{\mathbf{R}}}{R^2}$ og felt $\mathbf{E} = \dfrac{Q}{4\pi\varepsilon_0}\dfrac{\hat{\mathbf{R}}}{R^2}$ med **eksplisitt $\mathbf{R} = \mathbf{r} - \mathbf{r}'$** (feltpunkt minus kildepunkt), $R = |\mathbf{R}|$, $\hat{\mathbf{R}} = \mathbf{R}/R$ — R-oppsettet skrives ut hver gang (selvstendig poenggivende); **superposisjonsprinsippet nevnes ved navn** og utføres komponentvis ($E_x$, $E_y$, $E_z$ hver for seg); feltlinjebilde og retning (fra + mot −); kraft på prøveladning $\mathbf{F} = q\mathbf{E}$; størrelsesorden elektrisk vs. gravitasjon (kvalitativt). **Utledning som kreves aktivt:** oppstilling av $\mathbf{R}$ og superposisjonssummen for 2–3 ladninger fra geometrien. **Figurkrav:** koordinatsystem med kildepunkter $\mathbf{r}'_i$, feltpunkt $\mathbf{r}$, R-vektorer og resulterende feltpil inntegnet.
- **Oppgavesjangre:** A (+ N-innslag). Mønstereksempel: «To punktladninger $+Q$ og $-2Q$ ligger i henholdsvis $(0,0)$ og $(d,0)$. Sett opp R-vektorene og finn det elektriske feltet (vektor) i punktet $(0,d)$. Nevn superposisjonsprinsippet, og angi eksplisitt at svaret er en vektor.»
- **Typiske feil (analysen §5.1–2):** Feil potens ($Q/4\pi\varepsilon_0 R$ i stedet for $R^2$); vektor under brøkstreken (−2); glemt $\varepsilon_0$; manglende/feil R-vektor eller feil fortegn på $\mathbf{R}$; behandle feltet som skalar (manglende vektormarkering, −2); ikke nevne superposisjon.
- **Quiz: 25 · Flashcards: 28**

#### Kapittel 1.2: Kontinuerlige ladningsfordelinger og symmetrinulling

- **id:** `fys1120-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-1-1`
- **kapitteltype:** teori
- **description:** Felt fra linje, ring og halvsirkel ved integrasjon — og symmetriargumentet som nuller en komponent.
- **Eksamensbelegg:** Sjanger A, den tyngre varianten: halvsirkel/bue, endelig linjeladning, ring på aksen (2024 la på en uendelig sum $\sum 1/i^2 = \pi^2/6$ fra Rottman). Symmetrinulling («$E_y = 0$ fordi bidrag fra $\pm y$ kansellerer») er dokumentert poenggivende. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) (integrasjon av $dE$); [Parameterframstilling av kurver](/r2/r2-6-1) (bue-/ringparametrisering).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: ladningselement $dq = \rho_l\,dl$ (linje), $\rho_s\,dA$ (flate), $\rho\,dv$ (volum); finn riktig tetthet, f.eks. $\rho_l = Q/L$; feltbidrag $d\mathbf{E} = \dfrac{dq}{4\pi\varepsilon_0}\dfrac{\hat{\mathbf{R}}}{R^2}$; integrér **komponentvis** ($dE_x$), og **bruk symmetri til å nulle en komponent — men begrunn hvorfor** (retningsargument fra parvis kansellering). Oppgi eksplisitt om bare én komponent finnes (skriv $E_x$). Standardresultater som skal kunne utledes: ring på aksen $E_z = \dfrac{Q z}{4\pi\varepsilon_0 (a^2+z^2)^{3/2}}$; halvsirkel i sentrum; endelig rett linje. **Utledning som kreves aktivt:** hele kjeden $dq \to d\mathbf{E} \to$ symmetrinulling $\to$ integral. **Figurkrav:** kildekurve med $dq$, $\mathbf{R}$ fra $dq$ til feltpunkt, og de to komponentene $dE_x$/$dE_y$ med kansellering markert.
- **Oppgavesjangre:** A (+ N). Mønstereksempel: «En halvsirkelbue med radius $a$ har jevnt fordelt ladning $Q$. Finn det elektriske feltet i sentrum. Begrunn med symmetri hvilken komponent som blir null før du integrerer, og oppgi svaret som en vektor med retning.»
- **Typiske feil (analysen §5):** Feil $\rho$ (dele på feil lengde/areal); glemme symmetriargumentet eller *påstå* det uten begrunnelse; integrere over areal der buelengde skal brukes; regne potensial i stedet for felt (−3); slurve med grensene i integralet.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.3: Drill: E-felt fra ladninger (sjanger A)

- **id:** `fys1120-1-3` · **number:** 1.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets oppgave 1: fra R-vektor til fullført A-besvarelse med superposisjon, symmetri og vektordisiplin.
- **Eksamensbelegg:** Sjanger A samlet (~90 %, oppgave 1). Varianter i arkivet: punktladninger i kvadrat/trekant, endelig linje, ring på aksen, halvsirkel, uendelig sum av diskrete ladninger. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn geometrien, sett kildepunkter $\mathbf{r}'_i$ og feltpunkt $\mathbf{r}$; 2) skriv $\mathbf{R}_i = \mathbf{r} - \mathbf{r}'_i$ eksplisitt; 3) diskret → superposisjonssum; kontinuerlig → $dq$, riktig $\rho$; 4) **symmetriargument** for hvilke komponenter som nulles (begrunn!); 5) integrér/summér gjenværende komponent; 6) skriv svaret som vektor med enhet; 7) nevn superposisjonsprinsippet uoppfordret. Gjennomregnet eksamenscase med sensor-margnotater (hvor poengene sitter: R-vektor, symmetribegrunnelse, vektormarkering, potens $R^2$). 10–15 oppgaver på eksamensnivå som roterer sjangeren, minst to med kontinuerlig fordeling og én med diskret sum.
- **Oppgavesjangre:** A (+ N). Mønstereksempel (deloppgavekjede): «Fire like ladninger $Q$ sitter i hjørnene av et kvadrat med side $2a$. (a) Sett opp R-vektorene til sentrum og forklar med symmetri hvorfor feltet der er null. (b) Fjern én ladning og finn feltet (vektor) i sentrum. (c) En femte ladning $-q$ plasseres i sentrum — finn kraften på den.»
- **Typiske feil:** Hele §5-repertoaret for sjanger A samlet: manglende/feil R-vektor, vektor under brøkstrek, symmetri påstått uten argument, potensial-forveksling, glemt superposisjonsreferanse, manglende enhet.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A felt fra punktladninger + superposisjon med R-vektor · 1.B kontinuerlig fordeling med symmetrinulling · 1.C blandet sjanger A på eksamensnivå · 1.D midtveis-format: rask flervalgs- og kortsvarsserie på elektrostatikk)

---

### Del 2 — Gauss' lov *(prioritet: PERFEKT)*

#### Kapittel 2.1: Gauss' lov og symmetriargumentet

- **id:** `fys1120-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-1-1`
- **kapitteltype:** teori
- **description:** Fluks, Gauss' lov og det eksplisitte symmetriargumentet som gir 2 av 5 poeng — kule, sylinder og plan.
- **Eksamensbelegg:** Sjanger B i **~90 %** av settene. **Symmetriargumentet er selvstendig poenggivende: typisk 2 av 5 poeng** gis for symmetribetraktningene alene; manglende begrunnelse trekker selv når svaret er riktig. Klassiske symmetrier: kule, uendelig linje/sylinder, plan («pillbox»). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2; [Skalarproduktet](/r2/r2-5-3) ($\mathbf{E}\cdot d\mathbf{S}$); [Bestemt integral som grenseverdi](/r2/r2-2-4). Fysikk 2-innsteg: [Elektrisk felt](/fysikk2/fysikk2-3-2).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: elektrisk fluks $\Phi_E = \oint \mathbf{E}\cdot d\mathbf{S}$; **Gauss' lov nevnes ved navn:** $\oint \mathbf{E}\cdot d\mathbf{S} = \dfrac{Q_{\text{inn}}}{\varepsilon_0}$; **symmetriargumentet som eget læringspunkt** — rotasjonssymmetri ⇒ bare radiell komponent; translasjonssymmetri (uendelig lang) ⇒ ingen $z$-avhengighet; hvorfor $\oint$ over side-/endeflater forsvinner. Standardfelter som skal kunne utledes med Gauss: kule/punktladning $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$; uendelig linje $E = \dfrac{\rho_l}{2\pi\varepsilon_0 r}$; uendelig plan $E = \dfrac{\rho_s}{2\varepsilon_0}$. Valg av Gauss-flate tilpasset symmetrien (må være **lukket**). Godtatte alternativer nevnes (differensialform $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$, Poisson $\nabla^2 V = -\rho/\varepsilon_0$) — velg den enkleste. **Utledning som kreves aktivt:** hele symmetri→flatevalg→$\oint$→$E$-kjeden. **Figurkrav:** Gauss-flate tegnet rundt ladningen med normalvektorer og feltretning.
- **Oppgavesjangre:** B (+ N). Mønstereksempel: «En uendelig lang, rett linjeladning har jevn ladning per lengde $\rho_l$. Finn det elektriske feltet i avstand $r$. Begrunn eksplisitt, ledd for ledd, hvorfor feltet er rent radielt og uavhengig av $z$ og $\phi$ — og navngi loven du bruker.»
- **Typiske feil (analysen §5.4):** Manglende eller påstått symmetriargument (mister 2 av 5 poeng selv med riktig svar); Gauss-flate som ikke er lukket; velge feil flate for symmetrien; glemme $\varepsilon_0$; ikke navngi loven.
- **Quiz: 25 · Flashcards: 26**

#### Kapittel 2.2: Gauss i alle områder: ledere, massive fordelinger og hulrom

- **id:** `fys1120-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-2-1`
- **kapitteltype:** teori
- **description:** Feltet innenfor/mellom/utenfor, ledere med $E=0$, massiv kule og sylinder — og $D$-feltet ved frie ladninger.
- **Eksamensbelegg:** Sjanger B, flerområde-varianten: massiv kuleladning, konsentriske kuleledere (2025-midtveis), sylinderskall, ledere i ytre felt. Å håndtere **alle områder** er dokumentert poenggivende; kun feltet utenfor gir −3. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Potenser](/1t/1t-1-2) (potensforhold $(r/a)^3$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: håndtere **alle områder** (innenfor/mellom/utenfor) i én oppgave; **$E = 0$ inne i ledere og i tomme hulrom** (begrunnes); indusert overflateladning på ledere; innesluttet ladning ved jevn fordeling — **volum, ikke areal**: massiv kule $Q_{\text{inn}} = Q(r/a)^3$, massiv sylinder $Q_{\text{inn}} = Q(r/a)^2$; $D$-feltet ved frie ladninger $\oint \mathbf{D}\cdot d\mathbf{S} = Q_{\text{fri}}$, $\mathbf{D} = \varepsilon\mathbf{E}$ (forbindes til Del 4). Ekvivalens Gauss integral ↔ differensial ↔ Poisson/Laplace (nevnes). **Utledning som kreves aktivt:** feltet i hvert område for en massiv/skallformet fordeling. **Figurkrav:** tverrsnitt med de ulike områdene og feltprofilen $E(r)$ skissert (stiger lineært inne i massiv kule, faller som $1/r^2$ utenfor).
- **Oppgavesjangre:** B (+ N). Mønstereksempel: «En massiv, ikke-ledende kule med radius $a$ har jevn romladningstetthet $\rho$. Finn $\mathbf{E}(r)$ i alle tre områder ($r<a$, $r=a$, $r>a$), og forklar hvorfor du bruker innesluttet *volum* og ikke overflateareal for $Q_{\text{inn}}$.»
- **Typiske feil (analysen §5.5–6):** Areal der man skal ha volum for $Q_{\text{inn}}$; regne bare feltet utenfor eller anta punktladning i midten (−3); glemme et område ($E=0$ i hulrom/leder); bytte $E$ og $D$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.3: Drill: Gauss-oppgaven (sjanger B)

- **id:** `fys1120-2-3` · **number:** 2.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-2-2`
- **kapitteltype:** drill
- **description:** Symmetridrill: velg riktig flate, argumentér symmetrien, dekk alle områder — for kule, sylinder og plan.
- **Eksamensbelegg:** Sjanger B samlet (~90 %). Varianter: punkt/kule, uendelig linje/sylinder, plan, konsentriske ledere, massiv romladning, skall. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser symmetrien (sfærisk/sylindrisk/plan); 2) **skriv symmetriargumentet ut** (hvilken komponent, hvilke variabler feltet ikke avhenger av) — dette er 2/5 poeng; 3) velg lukket Gauss-flate; 4) sett opp $\oint\mathbf{E}\cdot d\mathbf{S} = Q_{\text{inn}}/\varepsilon_0$ (eller $\mathbf{D}$/$Q_{\text{fri}}$); 5) finn $Q_{\text{inn}}$ med riktig volum/areal; 6) løs for $E$ i **hvert** område; 7) navngi loven. Gjennomregnet eksamenscase med sensor-margnotater om symmetripoengene. 10–15 oppgaver på eksamensnivå, alle symmetrier representert, minst to flerområde.
- **Oppgavesjangre:** B (+ N). Mønstereksempel: «Et tykt, ledende sylinderskall (indre radius $a$, ytre $b$) omslutter en tynn, ladet tråd med ladning $\rho_l$ per lengde. Finn $\mathbf{E}(r)$ i alle områder, forklar hvor de induserte ladningene sitter, og begrunn symmetrivalget.»
- **Typiske feil:** Som 2.1–2.2 samlet: symmetri påstått uten argument, ikke-lukket flate, areal/volum-forveksling, kun ett område, glemme induserte ladninger.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A kule/punkt med symmetriargument · 2.B linje/sylinder/plan · 2.C flerområde: massiv fordeling + ledere · 2.D midtveis-format Gauss på eksamensnivå)

---

### Del 3 — Elektrisk potensial *(prioritet: PERFEKT)*

#### Kapittel 3.1: Elektrisk potensial fra ladninger — skalar superposisjon

- **id:** `fys1120-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `fys1120-1-1`
- **kapitteltype:** teori
- **description:** Potensialet som skalar sum — uten fortegn på avstanden, uten vektorer — og den kvalitative «kan V bli null?»-oppgaven.
- **Eksamensbelegg:** Sjanger C i **~90 %** av settene. Signatur: potensial fra flere punktladninger (2025-midtveis), kvalitativ variant («er $V=0$ et sted mellom to positive ladninger?»). **Vektor/skalar-fella er den dyrest straffede feilen (−3).** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Elektrisk potensial og spenning](/fysikk2/fysikk2-3-3) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: potensial fra punktladning $V = \dfrac{Q}{4\pi\varepsilon_0 R}$; **skalar superposisjon** $V = \sum_i \dfrac{Q_i}{4\pi\varepsilon_0 R_i}$ — **ingen fortegn på $R_i$** (avstanden er alltid positiv), fortegnet ligger i $Q_i$; potensialet er en **skalar** (ingen vektorkomponenter); referansenivå $V\to 0$ i uendelig for lokaliserte fordelinger; potensiell energi $U = qV$ og arbeid $W = q\,\Delta V$. **Kvalitativ argumentasjon som eget læringspunkt:** at summen av positive bidrag ikke kan bli null (fysisk begrunnelse, ikke bare «fordi begge er positive»). **Utledning som kreves aktivt:** oppstilling av skalarsummen fra geometrien. Symbolfri figur der mulig — men marker at $V$ er skalar. **Figurkrav:** ekvipotensialflater/-linjer rundt en eller to ladninger.
- **Oppgavesjangre:** C (+ N). Mønstereksempel: «To ladninger $+Q$ og $+3Q$ ligger med avstand $d$. Finn potensialet i midtpunktet, og avgjør — med fysisk begrunnelse — om det finnes et punkt på linjen mellom dem der potensialet er null.»
- **Typiske feil (analysen §5, sjanger C):** Regne vektor der det spørres om skalarpotensial (−3); gi $R_i$ fortegn (−3); glemme/feilplassere nullpunktet; svare på den kvalitative uten fysisk begrunnelse (kun 1 poeng).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Fra felt til potensial og tilbake — linjeintegral og gradient

- **id:** `fys1120-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-3-1`, `fys1120-2-1`
- **kapitteltype:** teori
- **description:** Potensialdifferanse som linjeintegral av feltet, $\mathbf{E} = -\nabla V$, og potensialet i alle områder rundt ledere.
- **Eksamensbelegg:** Sjanger C, den tyngre varianten: felt→potensial via $-\int\mathbf{E}\cdot d\mathbf{l}$ med valgt nullpunkt (konsentriske kuleledere i 2025-midtveis), konstant potensial der $E=0$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2, 3.1; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) (linjeintegralet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $V(\mathbf{r}) - V(\text{ref}) = -\displaystyle\int_{\text{ref}}^{\mathbf{r}} \mathbf{E}\cdot d\mathbf{l}$ med **eksplisitt valgt nullpunkt** og riktige grenser; $\mathbf{E} = -\nabla V$ (den andre veien); **konstant potensial der $\mathbf{E}=0$** (inne i ledere/hulrom); potensial i alle områder rundt en kuleladning/kondensator ved å integrere feltet stykkevis; potensialforskjell over en kondensator som forberedelse til Del 4. Poissons/Laplace $\nabla^2 V = -\rho/\varepsilon$ (nevnes som alternativ). **Utledning som kreves aktivt:** $V(r)$ i hvert område ved integrasjon av $E(r)$ fra Del 2. **Figurkrav:** feltprofil $E(r)$ og tilhørende potensialprofil $V(r)$ over samme akse (flat der $E=0$).
- **Oppgavesjangre:** C (+ N). Mønstereksempel: «To konsentriske kuleledere har radier $a$ og $b$ ($a<b$) og ladninger $+Q$ og $-Q$. Bruk feltet fra Gauss til å finne potensialet i alle områder med $V=0$ i uendelig, og forklar hvorfor potensialet er konstant inne i den indre lederen.»
- **Typiske feil:** Feil/uteglemt nullpunkt; fortegnsfeil i $-\int\mathbf{E}\cdot d\mathbf{l}$; integrere over feil grenser; glemme at potensialet er konstant (ikke null) inne i en leder; regne felt i stedet for potensial (−3).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Drill: potensial og potensialdifferanse (sjanger C)

- **id:** `fys1120-3-3` · **number:** 3.3 · **estimatedMinutes:** 85 · **prerequisites:** `fys1120-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill med vektor/skalar-disiplin i sentrum: skalar superposisjon, linjeintegral, kvalitativ argumentasjon.
- **Eksamensbelegg:** Sjanger C samlet (~90 %). Varianter: potensial fra flere ladninger, felt→potensial i alle områder, kvalitativ null-punkt-argumentasjon, energibetraktninger. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) avgjør: gitt ladninger → skalar superposisjon (ingen fortegn på $R_i$); gitt felt → $-\int\mathbf{E}\cdot d\mathbf{l}$; 2) velg og skriv nullpunkt; 3) sett opp summen/integralet med riktige grenser; 4) marker at $V$ er skalar; 5) tolk (energi $qV$, konstant i leder); 6) kvalitativ hale: fysisk begrunnelse. Gjennomregnet eksamenscase med sensor-margnotater (vektor/skalar-poenget, nullpunktet). 10–14 oppgaver på eksamensnivå, minst to felt→potensial og én ren kvalitativ.
- **Oppgavesjangre:** C (+ N). Mønstereksempel: «(a) Finn potensialet i sentrum av en jevnt ladet ring med ladning $Q$ og radius $a$. (b) Sammenlign med feltet i samme punkt fra kap. 1.2 — hvorfor er potensialet ulikt null der feltet er null?»
- **Typiske feil:** Hele sjanger C-repertoaret: vektor/skalar-forveksling (−3), fortegn på $R_i$, nullpunkt, kvalitativ uten begrunnelse.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A skalar superposisjon fra ladninger · 3.B felt→potensial med linjeintegral og nullpunkt · 3.C kvalitativ + energi · 3.D midtveis-format potensial på eksamensnivå)

---

### Del 4 — Ledere, kondensatorer og dielektrika *(kondensator: KUNNE; dielektrika: KUNNE)*

#### Kapittel 4.1: Kondensatorer, kapasitans og feltenergi

- **id:** `fys1120-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-3-2`
- **kapitteltype:** teori
- **description:** Kapasitans fra ladningsfordeling og felt — plate, koaks, kule — pluss mellomledere og feltenergi.
- **Eksamensbelegg:** Sjanger D i **~76 %** av settene. Signatur: plate-/koaks-/kulekondensator, tre-plate-kondensator med mellomleder (2020, 2025), kapasitanseffekt-kommentar. Feltenergi ($\tfrac12 CV^2$, energitetthet) er kjenne-stoff, foldes inn. Prioritet: **kunne** (feltenergi: **kjenne**).
- **Forkunnskaper/kryssbok:** kap. 2.2, 3.2; [Elektrisk potensial og spenning](/fysikk2/fysikk2-3-3).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bestem ladningsfordelingen fysisk (**$E=0$ inne i ledere** ⇒ indusert overflateladning; en nøytral mellomleder får $\pm Q$ på sidene); finn $E$ med Gauss, integrér til $\Delta V$, $C = Q/\Delta V$; standardkapasitanser som skal kunne utledes: plate $C = \dfrac{\varepsilon A}{d}$, koaks/sylinder $C = \dfrac{2\pi\varepsilon L}{\ln(b/a)}$, kule $C = \dfrac{4\pi\varepsilon}{1/a - 1/b}$; **kommenter kapasitanseffekten:** en mellomleder reduserer effektiv platedistanse ($d\to d-h$) → øker $C$; serie/parallell av kondensatorer fra fysikken; **feltenergi (kjenne, markert):** $W = \tfrac12 CV^2 = \tfrac{Q^2}{2C}$ og energitetthet $u = \tfrac12 \mathbf{D}\cdot\mathbf{E} = \tfrac12\varepsilon E^2$; ladningsbevaring ved brå geometriendring (plater presses sammen → $C$ endres, $Q$ bevart) — peker mot kap. 5.2. **Utledning som kreves aktivt:** hele kjeden ladningsfordeling→$E$→$\Delta V$→$C$ for én geometri. **Figurkrav:** ladningsfordeling og feltlinjer i platekondensator (jevnt felt mellom platene) og med innskutt mellomleder.
- **Oppgavesjangre:** D (+ N). Mønstereksempel: «En platekondensator med plateareal $A$ og avstand $d$ får en tynn, nøytral metallplate med tykkelse $h$ skjøvet inn parallelt midt imellom. Finn den nye kapasitansen, og forklar fysisk hvorfor den øker.»
- **Typiske feil (analysen §5, sjanger D):** Ikke nevne at feltet er null inne i lederne; glemme å plassere ladninger på mellomlederens overflater; ikke kommentere kapasitanseffekten; feil nullpunkt/grenser i $\Delta V$-integralet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: Dielektrika, D-felt og bundet ladning

- **id:** `fys1120-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-4-1`
- **kapitteltype:** teori
- **description:** D-feltet i materie, kontinuitet av $D$-normal mens $E$ hopper, polarisasjon og bundet ladning.
- **Eksamensbelegg:** Sjanger E i **~47 % og økende**. Sentralt sensorpoeng: **normalkomponenten av $D$ er kontinuerlig** over en grenseflate uten frie flateladninger, mens **$E$ hopper**; polarisasjon størst der $E$ er størst. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 2.1, 4.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bruk **$D$-feltet** i dielektrika, $\oint\mathbf{D}\cdot d\mathbf{S} = Q_{\text{fri}}$, $\mathbf{D} = \varepsilon\mathbf{E}$, $\varepsilon = \varepsilon_r\varepsilon_0$; **grensebetingelsene som eget læringspunkt:** $D$-normal kontinuerlig (uten frie flateladninger), $E$-normal hopper — begrunnet i bundne ladninger; polarisasjon $\mathbf{P} = (\varepsilon - \varepsilon_0)\mathbf{E} = \varepsilon_0\chi_e\mathbf{E}$; $\mathbf{D} = \varepsilon_0\mathbf{E} + \mathbf{P}$; bundet overflateladning $\rho_{s,b} = \mathbf{P}\cdot\hat{\mathbf{n}}$ og volumladning $\rho_b = -\nabla\cdot\mathbf{P}$; hvor polarisasjonen er størst (der $E$ er størst) — **presist, med utregning**. Effekt av dielektrikum i kondensator ($C$ øker med $\varepsilon_r$). **Utledning som kreves aktivt:** feltet i og utenfor et dielektrikum via $D$, og hvor bundne ladninger sitter. **Figurkrav:** grenseflate med $\mathbf{D}$- og $\mathbf{E}$-vektorer på begge sider (D-normal lik, E-normal ulik) og bundne ladninger markert.
- **Oppgavesjangre:** E (+ N). Mønstereksempel: «En ladet metallkule er omgitt av et kuleformet dielektrisk skall med $\varepsilon_r$. Finn $\mathbf{D}$ og $\mathbf{E}$ innenfor, i og utenfor skallet, angi hvor de bundne ladningene sitter, og forklar hvorfor det er $D$-normal — ikke $E$-normal — som er kontinuerlig ved skallets flater.»
- **Typiske feil (analysen §5.9):** Bytte om $D$- og $E$-kontinuitet (si at $E$ er kontinuerlig og $D$ ikke) (−2); integrere $E$ over grensen uten kommentar; oppgi «polarisasjonen er størst der» uten presis angivelse/utregning (kun 2 poeng).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.3: Drill: kondensator- og dielektrikumoppgaven (sjanger D + E)

- **id:** `fys1120-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** `fys1120-4-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets oppgave 2-hale: kapasitans fra felt, mellomledere, dielektrika og grensebetingelser.
- **Eksamensbelegg:** Sjanger D (~76 %) + E (~47 %) samlet — utgjør ofte andre halvdel av oppgave 2. Varianter: tre-plate, koaks med dielektrikum, delvis fylt kondensator, nervecelle som sylinderkondensator. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) fastslå ladningsfordelingen ($E=0$ i ledere, indusert/bundet ladning); 2) $D$/$E$ med Gauss (frie vs. totale ladninger); 3) integrér til $\Delta V$; 4) $C = Q/\Delta V$; 5) kommentér kapasitanseffekt / grensebetingelser; 6) evt. feltenergi. Gjennomregnet eksamenscase med sensor-margnotater. 8–12 oppgaver på eksamensnivå, minst tre med dielektrikum og én anvendt innpakning (biomembran/kabel).
- **Oppgavesjangre:** D, E (+ N). Mønstereksempel: «En koaksialkabel (indre radius $a$, ytre $b$) er fylt med et dielektrikum $\varepsilon_r$. Finn kapasitansen per lengde, og forklar hvorfor et dielektrikum tåler høyere spenning før gjennomslag enn luft.»
- **Typiske feil:** Som 4.1–4.2 samlet: glemme mellomlederens ladninger, D/E-forveksling, ukommentert kapasitanseffekt, feil grenser i $\Delta V$.
- **Quiz: 10 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A kapasitans fra felt: plate/koaks/kule · 4.B mellomledere og kapasitanseffekt · 4.C dielektrika og grensebetingelser · 4.D kombinert kondensator+dielektrikum på eksamensnivå)

---

### Del 5 — Strøm og transiente kretser *(transient krets: PERFEKT; strøm/resistans: KUNNE)*

#### Kapittel 5.1: Strøm, strømtetthet og resistans (Ohm)

- **id:** `fys1120-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `fys1120-3-2`
- **kapitteltype:** teori
- **description:** Fra mikroskopisk $\mathbf{J} = \sigma\mathbf{E}$ til makroskopisk $R$ — med riktig tverrsnitt og retning, også radielt.
- **Eksamensbelegg:** Sjanger F i **~53 %** av settene. Signatur: sylindrisk motstand langs aksen, radiell strøm i sylinderskall (2025-midtveis), skalering av kuberesistans. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 3.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) (radiell integrasjon). *(FYS1001 kap. «Elektriske kretser: Ohm, Kirchhoff og effektfella» gir enklere kretsbakgrunn — klartekst; ikke bygget.)*
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: strømtetthet $\mathbf{J} = I/A$ med **riktig tverrsnitt og retning** (langs aksen for vanlig motstand, radielt for et sylinderskall som leder utover); $\mathbf{J} = \sigma\mathbf{E}$; $\Delta V = \int\mathbf{E}\cdot d\mathbf{l}$; resistans $R = \Delta V/I = \dfrac{L}{\sigma A}$; **radiell geometri utledes:** $R = \dfrac{\ln(b/a)}{2\pi\sigma L}$; ladningsbevaring / kontinuitetslikning $\nabla\cdot\mathbf{J} = -\partial\rho/\partial t$ (stasjonært $\nabla\cdot\mathbf{J}=0$, nevnes); serie/parallell fra fysikken; effekt $P = VI = RI^2$. **Utledning som kreves aktivt:** $R$ for radiell strøm i sylinderskall fra $\mathbf{J}\to\mathbf{E}\to\Delta V$. **Figurkrav:** strømretning og tverrsnitt for aksiell vs. radiell geometri.
- **Oppgavesjangre:** F (+ N). Mønstereksempel: «Et sylindrisk skall (indre radius $a$, ytre $b$, lengde $L$, konduktivitet $\sigma$) leder strøm radielt utover. Finn resistansen mellom indre og ytre flate, og forklar hvorfor tverrsnittet strømmen passerer, øker med radien.»
- **Typiske feil (analysen §5, sjanger F):** Feil areal (indre flate i stedet for tverrsnitt); strøm i feil retning; la spenningen bli stående i $R$-uttrykket; blande $\sigma$ (konduktivitet) og flateladning.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.2: Transiente RC/RL-kretser: Kirchhoff → differensiallikning

- **id:** `fys1120-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys1120-5-1`
- **kapitteltype:** teori
- **description:** «Nevn KVL ved navn» → førsteordens diff.likning → RC/RL-løsning, med $t=0^+$/$t=\infty$-grenser og ladningsbevaring.
- **Eksamensbelegg:** Sjanger G i **~88 %** av settene, nesten alltid **egen oppgave (O3)**. **Sensor trekker for manglende KVL-referanse selv når regningen er riktig.** Signatur: RL-oppladning, RC-utladning, plater presses sammen → $C$ dobles/$V$ halveres (ladningsbevaring, 2023), cellemembran som RC-stige. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1 (kondensator), 5.1; [Eksponentialfunksjoner](/1t/1t-3-8) og [Eksponential- og logaritmeligninger](/r1/r1-1-3) (løsningen $e^{-t/\tau}$); [Likningssett](/1t/1t-4-1) (flermaske-Kirchhoff).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Kirchhoffs spenningslov (KVL) og strømlov (KCL) — nevnes eksplisitt ved navn** før bruk; kretselementer $V_R = RI$, $I = C\,dV/dt$, $V_L = L\,dI/dt$; **stasjonæranalyse:** etter lang tid $dI/dt = 0$ (spole = kortslutning, $V_L=0$) og $I_C = 0$ (kondensator fullt oppladet = brudd); **$t=0^+$:** bruk bevaring (kondensatorspenning/-ladning og spolestrøm er kontinuerlige); **transient:** KVL → **førsteordens differensiallikning** → løs: RL-oppladning $I(t) = \dfrac{V_0}{R}\left(1 - e^{-t/\tau}\right)$, $\tau = L/R$; RC-utladning $I(t) = I_0 e^{-t/\tau}$, $\tau = RC$; nøkkelgrep: **ladningen er bevart under en brå endring** (plater presses sammen → $C$ endres, $V$ endres tilsvarende). **Utledning som kreves aktivt:** KVL → diff.likning → løsning for én RL- og én RC-krets, steg for steg. **Figurkrav:** kretsskjema med valgt strømretning og maskepil; $I(t)$- eller $V(t)$-graf med $\tau$ og asymptote markert.
- **Oppgavesjangre:** G (+ N). Mønstereksempel: «En spole $L$ og motstand $R$ kobles i serie til et batteri $V_0$ ved $t=0$. (a) Nevn hvilken lov du bruker, sett opp differensiallikningen for strømmen, og løs den. (b) Begrunn hvorfor $I(0)=0$. (c) Hva blir strømmen etter lang tid, og hvorfor?»
- **Typiske feil (analysen §5.7, sjanger G):** Feil fortegn i diff.likningen (ufysisk — men ikke trukket om studenten selv kommenterer feilen); manglende KVL-referanse; ikke innse at $V_0$/batteriet er konstant ved derivasjon; inkludere batteriet i en sløyfe der det ikke er med (åpen bryter); ikke argumentere for $I(0)=0$ i RL.
- **Quiz: 25 · Flashcards: 26**

#### Kapittel 5.3: Drill: transient-krets-oppgaven (sjanger G)

- **id:** `fys1120-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-5-2`
- **kapitteltype:** drill
- **description:** Settets oppgave 3 drillet til automatikk: grensebetingelser → KVL → diff.likning → løsning → tolkning.
- **Eksamensbelegg:** Sjanger G (~88 %, egen oppgave). Varianter: RL/RC opp- og utladning, kondensator med brå geometriendring, cellemembran-RC, flermaske med bryter som åpnes/lukkes. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn kretsen for hver fase (bryter av/på); 2) **nevn KVL/KCL ved navn**; 3) grensebetingelser: $t=0^+$ (bevaring av $Q_C$/$I_L$), $t=\infty$ (spole kortslutning, kondensator brudd); 4) KVL → førsteordens diff.likning; 5) løs med riktig $\tau$; 6) sjekk fortegn og grenser (kommenter hvis noe ser ufysisk ut); 7) tolk / skisser $I(t)$. Gjennomregnet eksamenscase med sensor-margnotater (lovnavnet, fortegnet, grensene). 10–15 oppgaver på eksamensnivå, minst én med brå geometriendring og én anvendt (biomembran).
- **Oppgavesjangre:** G (+ N). Mønstereksempel: «En oppladet platekondensator ($C$, spenning $V_0$) kobles ved $t=0$ over en motstand $R$. Rett etter, ved $t=t_1$, presses platene til halv avstand mens kretsen fortsatt er koblet. Beskriv $V(t)$ i begge faser og begrunn hva som er bevart ved sammenpressingen.»
- **Typiske feil:** Hele sjanger G-repertoaret: fortegn i diff.likningen, manglende KVL-navn, glemt $I(0)=0$, feil $\tau$, ikke skille $t=0^+$ fra $t=\infty$.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A strøm/resistans med riktig areal og retning · 5.B RL-krets: KVL→diff.likning→løsning · 5.C RC-krets med ladningsbevaring · 5.D midtveis-format: strøm+enkle kretser)

---

### Del 6 — Magnetostatikk: magnetfelt fra strøm *(Ampère/Biot–Savart: PERFEKT; materialer: KJENNE)*

#### Kapittel 6.1: Ampères lov og symmetriargumentet

- **id:** `fys1120-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-2-1`
- **kapitteltype:** teori
- **description:** Magnetfeltet ved høy symmetri — rett leder, koaks, sylinderskall, solenoide — med symmetriargument som gir 2 av 5 poeng.
- **Eksamensbelegg:** Sjanger H (Ampère-veien) i **~82 %** av settene, den femte søylen. **Poengfordeling: typisk 2 poeng for symmetri, 3 for lovbruk.** Signatur: rett leder, koaks, sylinderskall (alle områder), solenoide med kjerne. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1 (samme symmetrilogikk som Gauss); [Skalarproduktet](/r2/r2-5-3). Fysikk 2-fundament: [Magnetiske felt](/fysikk2/fysikk2-4-1) og [Magnetfelt fra spoler og solenoider](/fysikk2/fysikk2-4-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Ampères lov nevnes ved navn:** $\oint\mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{inn}}$; **symmetriargumentet ledd for ledd** — sylindersymmetri ⇒ $\mathbf{B} = B_\phi(r)\hat{\boldsymbol{\phi}}$: ingen $z$-/$\phi$-avhengighet, ingen $z$-komponent (strømmen går i $z$), ingen $r$-komponent (fordi $\nabla\cdot\mathbf{B}=0$); valg av Ampère-sløyfe; **alle områder** ($B=0$ inne i et tomt sylinderskall; skalering med tverrsnittsforhold ved jevn fordeling); standardfelter som skal kunne utledes: rett leder $B = \dfrac{\mu_0 I}{2\pi r}$, solenoide $B = \mu N I/l$ (med kjerne: $\mu = \mu_0(1+\chi_m)$), koaks (alle områder). **Utledning som kreves aktivt:** symmetri→sløyfe→$\oint$→$B$ for koaks/sylinder i alle områder. **Figurkrav:** tverrsnitt med Ampère-sløyfe, feltretning ($\hat{\boldsymbol{\phi}}$) og strømretning; $B(r)$-profil.
- **Oppgavesjangre:** H (+ N). Mønstereksempel: «En koaksialkabel fører strøm $I$ i indre leder (radius $a$) og $-I$ jevnt fordelt i ytre skall (mellom $b$ og $c$). Finn $\mathbf{B}(r)$ i alle fire områder. Begrunn eksplisitt, ledd for ledd, hvorfor feltet er rent asimutalt, og navngi loven.»
- **Typiske feil (analysen §5.4–5, sjanger H):** Manglende/påstått symmetribegrunnelse (mister 2/5); areal i stedet for buelengde i $\oint$; feil fortegn; glemme et område; ikke navngi loven.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.2: Biot–Savart og magnetisk dipol

- **id:** `fys1120-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys1120-6-1`
- **kapitteltype:** teori
- **description:** Feltet ved endelig geometri — R-vektor, kryssprodukt, integrasjon over buelengde — og strømsløyfen som magnetisk dipol.
- **Eksamensbelegg:** Sjanger H (Biot–Savart-veien) + sjanger L (dipol, ~18 %). Signatur: strømsløyfe på aksen, endelig linjestykke, superposisjon av fire linjer, dipolfelt ($m = IS$) koblet videre til gjensidig induktans (2023, 2024-Jupyter). Prioritet: **perfekt** (dipol: **kjenne/kunne**).
- **Forkunnskaper/kryssbok:** kap. 6.1; [Kryssproduktet](/r2/r2-5-4) (sentralt: $d\mathbf{l}\times\mathbf{R}$); [Parameterframstilling av kurver](/r2/r2-6-1); [Magnetisk kraft på strømførende ledere](/fysikk2/fysikk2-4-3).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Biot–Savart nevnes ved navn:** $d\mathbf{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\mathbf{l}\times\hat{\mathbf{R}}}{R^2}$, med **eksplisitt R-vektor** og kryssprodukt (ofte overlever bare én komponent ved symmetri); **integrér over buelengde** (f.eks. $2\pi a$ for en sløyfe — ikke arealet); standardresultat som skal kunne utledes: strømsløyfe på aksen $B_z = \dfrac{\mu_0 I a^2}{2(a^2+z^2)^{3/2}}$; endelig rett linje, med grensesjekk (endelig → uendelig gir $\mu_0 I/2\pi r$); superposisjon av flere linjer (to/fire → summér). **Magnetisk dipol:** for store $z$ gir sløyfen $B_z \approx \dfrac{\mu_0}{4\pi}\dfrac{2m}{z^3}$ med $m = IS = I\pi a^2$; dipolfeltet $\mathbf{B} = \dfrac{\mu_0}{4\pi}\dfrac{3\hat{\mathbf{r}}(\hat{\mathbf{r}}\cdot\mathbf{m}) - \mathbf{m}}{r^3}$ (bruk store-$z$/fjernfelt-tilnærming); i $xy$-planet er $\hat{\mathbf{r}}\cdot\mathbf{m}=0$. **Utledning som kreves aktivt:** $B_z$ på aksen fra Biot–Savart, og avlesning av $m$ ved sammenligning med dipolformelen. **Figurkrav:** sløyfe med $d\mathbf{l}$, $\mathbf{R}$ og $d\mathbf{B}$-retning (høyrehåndsregel); dipolfeltlinjer.
- **Oppgavesjangre:** H, L (+ N). Mønstereksempel: «En sirkulær strømsløyfe (radius $a$, strøm $I$) ligger i $xy$-planet. (a) Finn $B_z$ på aksen fra Biot–Savart — sett opp R-vektoren og ta kryssproduktet. (b) Vis at feltet langt unna svarer til en dipol, og les av $m$. (c) Hvorfor må du integrere over buelengden $2\pi a$ og ikke over arealet?»
- **Typiske feil (analysen §5.2,5,5.L):** Vektor under brøkstrek / feil R-vektor; areal i stedet for buelengde; feil fortegn i kryssproduktet; ikke gjøre store-$z$-tilnærming før dipolsammenligning; prøve sammenligningen i $z=0$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.3: Magnetiske materialer: B vs. H, magnetisering og bundet strøm

- **id:** `fys1120-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys1120-6-1`
- **kapitteltype:** teori
- **description:** Skillet mellom B og H, bundne strømmer, grensebetingelser — og permanentmagnet-fella som gir 0 poeng.
- **Eksamensbelegg:** Sjanger I i **~29 %** (topp 2017–2019). Signatur: identifisere om et feltbilde er $B$ eller $H$, bundet overflatestrøm, grensebetingelser. **Kritisk trekkfelle: aldri innføre en permeabilitet $\mu$ for en permanentmagnet.** Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (kjenne-nivå): $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$; bundet overflatestrøm $\mathbf{J}_{b,s} = \mathbf{M}\times\hat{\mathbf{n}}$, volumstrøm $\mathbf{J}_b = \nabla\times\mathbf{M}$; **grensebetingelser (fra formelarket):** normalkomponent av $\mathbf{B}$ kontinuerlig, tangentialkomponent av $\mathbf{H}$ kontinuerlig (ved $J_{s,\text{fri}}=0$) — feltlinjer «knekker»; **identifisere B vs. H:** $\mathbf{B}$-linjer er **lukkede** («biter seg i halen»), mens $\oint\mathbf{H}\cdot d\mathbf{l}=0$ uten frie strømmer utelukker at et lukket linjebilde er $\mathbf{H}$; lineære media $\mathbf{M} = \chi_m\mathbf{H}$, $\mathbf{B} = \mu\mathbf{H}$, $\mu = \mu_0(1+\chi_m)$ — **men aldri for en permanentmagnet** (ikke lineært medium). **Figurkrav:** feltlinjebilde av en stavmagnet med $\mathbf{B}$- og $\mathbf{H}$-linjer (ulik retning inne i magneten).
- **Oppgavesjangre:** I (+ N). Mønstereksempel: «En figur viser et lukket sett feltlinjer rundt og gjennom en stavmagnet. Avgjør om linjene viser $\mathbf{B}$ eller $\mathbf{H}$, og begrunn med en lov. Forklar dessuten hvorfor det er galt å regne feltet inne i magneten med en permeabilitet $\mu$.»
- **Typiske feil (analysen §5.8):** Blande $B$ og $H$; **innføre $\mu$ for en permanentmagnet (0 poeng)**; feil retning på bundet overflatestrøm; anta at $B$- og $H$-linjer sammenfaller inne i materialet.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 6.4: Drill: magnetfelt-oppgaven (Ampère + Biot–Savart)

- **id:** `fys1120-6-4` · **number:** 6.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-6-3`
- **kapitteltype:** drill
- **description:** Settets oppgave 4 drillet: velg riktig vei (Ampère ved symmetri, Biot–Savart ved endelig geometri), symmetriargument, buelengde.
- **Eksamensbelegg:** Sjanger H samlet (~82 %). **Ampère og Biot–Savart er likestilte veier** — velg den enkleste. Varianter: rett leder, koaks/sylinder alle områder, solenoide, sløyfe på aksen, fire linjer, dipol→gjensidig induktans. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) vurder symmetrien — **høy symmetri → Ampère**, endelig/lav → **Biot–Savart**; 2) Ampère-veien: skriv symmetriargumentet ut (2/5 poeng), velg sløyfe, $\oint\mathbf{B}\cdot d\mathbf{l} = \mu_0 I_{\text{inn}}$, alle områder; 3) Biot–Savart-veien: R-vektor, kryssprodukt, integrér over **buelengde**, grensesjekk; 4) navngi loven; 5) evt. dipol-avlesning $m=IS$. Gjennomregnet eksamenscase med sensor-margnotater (symmetripoeng, buelengde, R-vektor). 10–15 oppgaver på eksamensnivå, begge veier representert, minst én superposisjon av linjer og én sløyfe/dipol.
- **Oppgavesjangre:** H, L (+ N). Mønstereksempel: «(a) Finn magnetfeltet i sentrum av en kvadratisk strømsløyfe med side $2a$ ved å superponere fire endelige linjestykker (Biot–Savart). (b) Sammenlign med feltet fra en sirkulær sløyfe med samme areal — hvilken gir størst felt i sentrum?»
- **Typiske feil:** Hele sjanger H/L-repertoaret: symmetri påstått uten argument, areal/buelengde, R-vektor/kryssprodukt-feil, ikke velge den enkleste veien, dipol-tilnærming glemt.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A Ampère med symmetriargument, alle områder · 6.B Biot–Savart: sløyfe/linje med R-vektor og buelengde · 6.C magnetiske materialer og B/H-identifikasjon · 6.D kombinert magnetfelt på eksamensnivå + dipol)

---

### Del 7 — Induksjon og induktans *(prioritet: KUNNE)*

#### Kapittel 7.1: Faradays lov, Lenz og indusert emf

- **id:** `fys1120-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-6-1`
- **kapitteltype:** teori
- **description:** Fluks som integral, $\text{emf} = -d\Phi/dt$, Lenz-retning med fysisk argument, og bevegelig leder med kraftlikevekt.
- **Eksamensbelegg:** Sjanger J i **~71 %** av settene. Signatur: kvadratsløyfe ved rett leder (varierende $B$ over flaten — integrér!), bevegelig leder med terminalhastighet, avslått strøm → indusert respons (2011/2013). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) (fluks når $B$ varierer); [Magnetisk kraft på ladninger](/fysikk2/fysikk2-4-2).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: fluks $\Phi = \displaystyle\int\mathbf{B}\cdot d\mathbf{S}$ — **pass på at $B$ kan variere over flaten, da må du integrere, ikke gange $B\cdot A$** (f.eks. kvadratsløyfe ved rett leder: $\Phi = \dfrac{\mu_0 I a\ln 2}{2\pi}$); **Faradays lov nevnes ved navn:** $\text{emf} = -\dfrac{d\Phi}{dt}$, indusert strøm $I = \text{emf}/R$; **Lenz' lov med eksplisitt fysisk argument** (indusert strøm motvirker flukendringen — minustegnet); bevegelig leder $\text{emf} = BLv$, kraft $F = ILB$; ved terminalhastighet **sett opp kraftlikevekt**; inhomogent felt $\Phi = \int B(x)\,dS$. **Utledning som kreves aktivt:** fluks ved varierende $B$ og emf ved derivasjon; terminalhastighet fra kraftlikevekt. **Figurkrav:** sløyfe i felt med flukretning, indusert strømretning (Lenz) og krefter markert.
- **Oppgavesjangre:** J (+ N). Mønstereksempel: «En kvadratisk sløyfe (side $a$, resistans $R$) ligger med den nærmeste siden i avstand $a$ fra en lang, rett leder som fører strøm $I(t)$. (a) Finn fluksen gjennom sløyfen — husk at feltet varierer over flaten. (b) Hvis $I$ slås av lineært på tiden $T$, finn indusert strøm og dens retning med Lenz' lov.»
- **Typiske feil (analysen §5, sjanger J):** Gange $B\cdot A$ når $B$ varierer over flaten (−1–2); feil retning / manglende Lenz-argument; glemme kraftlikevekten ved terminalhastighet; ikke navngi Faradays lov.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.2: Selv- og gjensidig induktans

- **id:** `fys1120-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1120-7-1`, `fys1120-6-2`
- **kapitteltype:** teori
- **description:** $L = N\Phi/I$ med N-faktoren, gjensidig $L_{12}=L_{21}$-symmetrien, og feltenergien $\tfrac12 LI^2$.
- **Eksamensbelegg:** Sjanger K i **~53 %** av settene, nesten alltid koblet til magnetfelt-oppgaven. **Symmetrien $L_{12}=L_{21}$ brukes til å regne den letteste veien (2024).** Signatur: solenoide-selvinduktans, gjensidig induktans via dipoltilnærming eller integrert fluks. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.2 (dipolfelt), 7.1; [Bestemt integral som grenseverdi](/r2/r2-2-4) (integrert fluks når $B$ varierer).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: selvinduktans $L = \dfrac{N\Phi}{I}$ — **husk N-faktoren** for flerviklingsspole (solenoide $L = \dfrac{\mu\pi a^2 N^2}{l}$); **strømmen $I$ skal kansellere ut** av sluttuttrykket (svaret avhenger ikke av $I$); gjensidig induktans $L_{12} = \dfrac{\Phi_2}{I_1}$, og **bruk symmetrien $L_{12} = L_{21}$** til å velge den enkleste beregningsveien; gjensidig induktans via dipoltilnærming for fjern krets, eller integrert fluks når $B$ varierer over kretsen ($\int \dfrac{\mu_0 I}{2\pi r} h\,dr = \dfrac{\mu_0 I h}{2\pi}\ln(\cdots)$); **feltenergi** $W = \tfrac12 LI^2$ (skal stemme med $\int \tfrac12\mu H^2\,dv$); (beredskap, nevnes) AC-ring $|\hat I| = |\hat e|/\sqrt{R^2 + \omega^2 L^2}$, neglisjér $L$ når $(\omega L/R)^2 \ll 1$. **Utledning som kreves aktivt:** $L$ for solenoide og gjensidig induktans for et enkelt par, med $I$-kansellering vist. **Figurkrav:** to koblede kretser med fluksbanen fra krets 1 gjennom krets 2.
- **Oppgavesjangre:** K (+ N). Mønstereksempel: «En lang rett leder ligger i planet til en rektangulær sløyfe ($h\times w$, nærmeste side i avstand $d$). Finn den gjensidige induktansen. Utnytt $L_{12}=L_{21}$ til å velge hvilken strøm du lar gå, og vis at strømmen kansellerer i svaret.»
- **Typiske feil (analysen §5, sjanger K):** Glemme N-faktoren; la $I$ bli stående i sluttuttrykket for $L$ (−1/−2); svar som inneholder $B$ eller en posisjonsvariabel $x$ (−2); ikke kommentere/utnytte $L_{12}=L_{21}$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.3: Drill: induksjon og induktans (sjanger J + K + L)

- **id:** `fys1120-7-3` · **number:** 7.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-7-2`
- **kapitteltype:** drill
- **description:** Settets oppgave 4-hale: fra magnetfelt til fluks, emf, Lenz-retning og gjensidig induktans — dipol-kjeden inkludert.
- **Eksamensbelegg:** Sjanger J (~71 %) + K (~53 %) + L (~18 %) samlet. Nesten hvert magnetfelt-sett kobles videre til induksjon/gjensidig induktans. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) finn $\mathbf{B}$ (fra Del 6); 2) fluks $\Phi = \int\mathbf{B}\cdot d\mathbf{S}$ (integrér hvis $B$ varierer); 3) induksjon: $\text{emf}=-d\Phi/dt$, Lenz-retning med argument; induktans: $L=N\Phi/I$, sjekk at $I$ kansellerer; 4) gjensidig: $L_{12}=L_{21}$, velg enkleste vei / dipoltilnærming; 5) evt. energi $\tfrac12 LI^2$; 6) navngi lovene. Gjennomregnet eksamenscase med sensor-margnotater (N-faktor, $I$-kansellering, Lenz-argument). 10–15 oppgaver på eksamensnivå, minst én dipol→gjensidig induktans-kjede og én bevegelig leder.
- **Oppgavesjangre:** J, K, L (+ N). Mønstereksempel: «En liten strømsløyfe (dipolmoment $m$) ligger i $xy$-planet, i avstand $r$ fra en stor sløyfe i samme plan. (a) Bruk dipolfeltet til å finne fluksen gjennom den store sløyfen. (b) Finn den gjensidige induktansen. (c) Forklar med $L_{12}=L_{21}$ hvorfor dette er den enkleste regneveien.»
- **Typiske feil:** Hele sjanger J/K/L-repertoaret: $B\cdot A$ ved varierende felt, manglende Lenz-argument, glemt N-faktor, $I$ blir stående, dipol-tilnærming glemt.
- **Quiz: 10 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A Faraday/Lenz med varierende fluks · 7.B bevegelig leder og kraftlikevekt · 7.C selv- og gjensidig induktans med $L_{12}=L_{21}$ · 7.D kombinert induksjon+induktans på eksamensnivå)

---

### Del 8 — Numerisk elektromagnetisme (Python) *(prioritet: PERFEKT — eget spor)*

> **Kodekontrakt (gjelder hele Del 8):** all kode er Python 3 med `numpy` (import
> `np`), `matplotlib.pyplot` (`plt`) og `scipy.constants` (for `epsilon_0`, `mu_0`).
> Konstanter **hentes** (`from scipy.constants import epsilon_0, mu_0`), pugges
> aldri. Koden skal være **kjørbar og gjenbrukbar** (funksjoner, ikke løs skript),
> og alltid **sammenlignes mot en analytisk grense**. Sensor gir **0 poeng for å
> levere det utdelte eksempelprogrammet uendret** — boka trener derfor
> *modifikasjon* av kode, ikke gjengivelse. Plott skal ha **akser med enheter
> eller normaliserte akser** (`z/a`). Kodeblokker legges som `example`/`exercise`
> med kode i ```` ```python ```` -gjerder; hver kodeoppgave har en forventet
> utskrift/plottbeskrivelse i løsningen. *(Grunnleggende NumPy/matplotlib
> forutsettes fra IN1900 Python-programmering — refereres i klartekst; ikke
> bygget.)*

#### Kapittel 8.1: Numerisk EM I: Coulomb-superposisjon i for-løkke

- **id:** `fys1120-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `fys1120-1-2`
- **kapitteltype:** teori (numerisk)
- **description:** Diskretiser kilden, superponér Coulomb-bidrag i en for-løkke, og skriv en gjenbrukbar feltfunksjon — sammenlignet med analytisk grense.
- **Eksamensbelegg:** Sjanger M, kjernen: Coulomb-superposisjon i for-løkke er den vanligste numerikk-deloppgaven (2018–2025). Diskretisert linje/ring/plan; sammenligning mot uendelig plan/linje nær kilden og punktladning langt unna. Prioritet: **perfekt** (100 % fra 2018).
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2 (Coulomb, superposisjon, R-vektor); [Vektorkoordinater og regning](/r2/r2-5-2). *(NumPy-arrayer, `np.linalg.norm`, for-løkker: IN1900 — klartekst.)*
- **Innholdskontrakt / kodekontrakt:** MÅ KUNNE SKRIVE OG MODIFISERE: diskretiser en kontinuerlig kilde i $N$ punktladninger $Q_i = Q/N$ med **posisjoner skalert med $a$**; akkumulér feltet i en for-løkke: `E += Qi/(4*np.pi*epsilon_0) * R/np.linalg.norm(R)**3` der `R = r - ri` (feltpunkt minus kildepunkt — **samme R-vektor som analytisk**); pakk det inn i en **gjenbrukbar funksjon** `Efralinje(r, ...)` / `Efraplan(r, ...)`; for et plan: **to** nøstede for-løkker ($N_x\times N_y$); bruk `scipy.constants`. **Sammenligning mot analytisk grense (poenggivende):** plott $E(z)$ langs en akse mot $z/a$ og legg på (i) uendelig plan/linje-grensen nær kilden, (ii) punktladning-grensen langt unna; kommentér fysisk at feltet følger en **potenslov, ikke eksponentiell** henfall. **Kodekontrakt-sjekkliste:** `1/(4πε₀)`-faktor med; riktig potens ($R^3$ i vektorform, tilsvarer $\hat{\mathbf R}/R^2$); `Qi = Q/N`; `ri` skalert med `a`; to for-løkker for plan; `dq` korrekt; akser med enheter. **Figurkrav (beskrevet i ord):** plott med normalisert akse $z/a$, numerisk kurve + to analytiske grensekurver, forklarende tekst.
- **Oppgavesjangre:** M. Mønstereksempel: «Skriv en funksjon `Efralinje(r, Q, L, N)` som beregner E-feltet fra en jevnt ladet rett linje ved å dele den i $N$ punktladninger. Plott feltkomponenten vinkelrett på linjen som funksjon av avstand, og sammenlign med det analytiske uttrykket $E=\rho_l/(2\pi\varepsilon_0 r)$ for en uendelig linje nær linjen. Endre koden slik at den i stedet regner feltet fra en halvsirkel.»
- **Typiske feil (analysen §5.11, sjanger M):** Bruke eksempelkoden uendret (0 poeng); én ladning i stedet for en sum (1–2 poeng); glemt $1/(4\pi\varepsilon_0)$; feil R-vektor / feil potens; `ri` ikke skalert med $a$; kun én for-løkke der planet krever to; manglende akseenheter; kalle et potenslov-henfall «eksponentielt».
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.2: Numerisk EM II: Biot–Savart-sum, felt over gitter og analytisk grense

- **id:** `fys1120-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** `fys1120-8-1`, `fys1120-6-2`
- **kapitteltype:** teori (numerisk)
- **description:** Magnetfelt numerisk med `np.cross`, funksjonsdesign for sløyfe og solenoide, og feltvisualisering på et gitter.
- **Eksamensbelegg:** Sjanger M, magnetisk variant: Biot–Savart-sum for sirkel (`Bcircle`) og solenoide (`Bsolenoide`), ringladning-dipol (2023, 2024-Jupyter). Sammenligning mot analytisk aksefelt. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2 (Ampère, Biot–Savart, dipol); [Kryssproduktet](/r2/r2-5-4). *(`np.cross`, `np.meshgrid`, `plt.quiver`/`streamplot`: IN1900 — klartekst.)*
- **Innholdskontrakt / kodekontrakt:** MÅ KUNNE SKRIVE OG MODIFISERE: diskretiser en strømsløyfe i $N$ segmenter, akkumulér Biot–Savart-bidrag i for-løkke: `dB = mu_0/(4*np.pi) * I*np.cross(dl, R)/np.linalg.norm(R)**3`, `R = r - ri`; gjenbrukbare funksjoner `Bcircle(r, I, a, N)` og `Bsolenoide(...)` (solenoide = stabling av ringer); **feltvisualisering** på et gitter med `np.meshgrid` + `plt.streamplot`/`quiver`; **sammenligning mot analytisk grense (poenggivende):** aksefeltet $B_z = \mu_0 I a^2/[2(a^2+z^2)^{3/2}]$ og dipol-asymptoten langt unna, plottet mot $z/a$. **Kodekontrakt-sjekkliste:** `mu_0/(4π)`-faktor; `np.cross` for $d\mathbf l\times\mathbf R$; riktig $R^3$; segmentvektorer `dl` konsistente med sløyferetningen; normaliserte akser; analytisk sammenligningskurve. **Figurkrav (beskrevet i ord):** streamplot av sløyfefeltet i et snitt, og $B_z(z)$ numerisk vs. analytisk mot $z/a$.
- **Oppgavesjangre:** M. Mønstereksempel: «Skriv `Bcircle(r, I, a, N)` som beregner B-feltet fra en sirkulær strømsløyfe ved Biot–Savart-summasjon. Plott $B_z$ langs aksen mot $z/a$ og sammenlign med det analytiske uttrykket. Modifiser deretter funksjonen til å stable 20 slike ringer til en solenoide, og vis at feltet inne nærmer seg $\mu_0 N I/l$.»
- **Typiske feil:** Eksempelkode uendret; feil kryssprodukt-retning; glemt $\mu_0/(4\pi)$; feil $R$-potens; manglende analytisk sammenligning; ubenevnte akser; forveksle antall segmenter (romlig oppløsning) med antall ringer (fysisk geometri).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.3: Drill: Python-eksamensoppgaven — kodemodifikasjon og Laplace-løser

- **id:** `fys1120-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1120-8-2`
- **kapitteltype:** drill (numerisk)
- **description:** Settets oppgave 5 drillet: les og modifiser utdelt kode, og løs Laplace/Poisson på et gitter med grensebetingelser.
- **Eksamensbelegg:** Sjanger M samlet (100 % fra 2018, egen oppgave/Jupyter-del). **Kjernen i drillingen: modifisere utdelt eksempelkode** (0 poeng for uendret kode) — endre kilde, geometri, oppløsning, akser. Laplace-løser på gitter med grensebetingelser (2020-hjemmeeksamen). Prioritet: **perfekt**.
- **Innholdskontrakt / kodekontrakt:** Løsningsoppskrift (algoritme): 1) **les den utdelte koden og identifiser hva som må endres** (kilde, R-vektor, antall ledd, oppløsning, akser) — aldri lever den uendret; 2) diskretiser riktig ($Q_i=Q/N$, `ri` skalert med `a`, to løkker for plan); 3) sett `scipy.constants`; 4) sammenlign mot analytisk grense + asymptote; 5) plott med normaliserte akser og enheter; 6) kommentér fysikken (potenslov). **Laplace/Poisson-løser:** iterativ Jacobi/Gauss–Seidel på et 2D-gitter, $V_{i,j} \leftarrow \tfrac14(V_{i+1,j}+V_{i-1,j}+V_{i,j+1}+V_{i,j-1})$, med **grensebetingelser** (faste $V$ på ledere) og iterasjon til konvergens; feltet som $\mathbf E = -\nabla V$ med `np.gradient`. Gjennomregnet eksamenscase med sensor-margnotater (poeng for sum vs. én ladning, for analytisk sammenligning, for akseenheter). 8–12 kodeoppgaver på eksamensnivå, minst tre som starter fra en gitt kodebit som skal *modifiseres*, og én Laplace-løser.
- **Oppgavesjangre:** M. Mønstereksempel: «Du får utdelt et program som beregner potensialet fra én punktladning. (a) Modifiser det til å superponere en ring av $N$ ladninger og plott ekvipotensiallinjer. (b) Skriv en Laplace-løser for potensialet mellom to konsentriske kvadratiske ledere med gitt spenning, og finn feltet med `np.gradient`. (c) Sammenlign den numeriske kapasitansen med den analytiske for en koaks-tilnærming.»
- **Typiske feil:** Levere utdelt kode uendret (0 poeng); én ladning i stedet for sum; manglende grensebetingelser i Laplace-løseren; ingen konvergenssjekk; ingen analytisk sammenligning; plott uten akseenheter; forveksle $V$ og $\mathbf E$ i utskriften.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 8:** 4 prøver (8.A Coulomb-superposisjon i for-løkke + analytisk grense · 8.B Biot–Savart-sum og feltvisualisering · 8.C kodemodifikasjon: endre kilde/geometri fra utdelt kode · 8.D Laplace/Poisson-løser på gitter med grensebetingelser)

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Drill: teori, lovnavn og Maxwell (sjanger N)

- **id:** `fys1120-9-1` · **number:** 9.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–8
- **kapitteltype:** drill
- **description:** Den korte, presise teori-/forklaringsoppgaven: navngi loven, vis integral↔differensial, og de kvalitative gjengangerne — pluss EM-bølger/Poynting kompakt.
- **Eksamensbelegg:** Sjanger N i **minst én deloppgave per sett**; hele midtveis er kvalitativ/kort MCQ. Gjengangere: navngi en Maxwell-lov og vis integral↔differensial via divergensteoremet/Stokes (2017); Hall-effekt og transformator (2013); hvorfor $D$ er kontinuerlig men $E$ ikke; hvorfor et lukket feltlinjebilde må være $B$; hvorfor gjensidig induktans øker når en sløyfe skyves inntil en leder; maksimal effektoverføring $R_1=R_2$ (2017). EM-bølger/Poynting (~6 %) og full Maxwell er **kjenne** — dekkes kompakt her. Prioritet: **perfekt** (billige, sikre poeng).
- **Innholdskontrakt:** Svarmalen etableres først: 1) navngi loven/mekanismen (fagbegrep); 2) knytt den til situasjonen; 3) konkluder presist — kort, ingen gardering. **Maxwells likninger** (fra formelarket, skal kunne navngis og forklares): $\nabla\cdot\mathbf{D}=\rho_f$ (Gauss), $\nabla\cdot\mathbf{B}=0$, $\nabla\times\mathbf{E}=-\partial\mathbf{B}/\partial t$ (Faraday), $\nabla\times\mathbf{H}=\mathbf{J}_f+\partial\mathbf{D}/\partial t$ (Ampère–Maxwell); **integral↔differensial-overgangen** vises via divergensteoremet (for divergens-lovene) og Stokes' teorem (for curl-lovene) — dette er en dokumentert oppgavetype. **EM-bølger/Poynting (kjenne, markert):** bølgelikningen følger av Maxwell i vakuum, $c = 1/\sqrt{\mu_0\varepsilon_0}$; Poyntings vektor $\mathbf{S} = \mathbf{E}\times\mathbf{H}$ som energiflukstetthet — kun konseptuelt. Gjengangerbank med modellsvar (minst 20 stk) på tvers av boka: $D$/$E$-kontinuitet, $B$/$H$-identifikasjon, permanentmagnet-fella, KVL-navngiving, symmetriargumentets rolle, $L_{12}=L_{21}$, hvorfor magnetisk kraft ikke gjør arbeid, hvorfor numerisk felt følger potenslov. Hver med henvisning til teorikapitlet sitt.
- **Oppgavesjangre:** N. Mønstereksempel: «Skriv opp Maxwell-loven $\nabla\cdot\mathbf{D}=\rho_f$, navngi den, og vis i tre linjer hvordan den følger av integralformen $\oint\mathbf{D}\cdot d\mathbf{S}=Q_{\text{fri}}$ ved hjelp av divergensteoremet.»
- **Typiske feil (analysen §5, sjanger N):** Svada uten fagbegrep/lovnavn; helgardering (to motstridende svar); essay der to–tre setninger er svaret; riktig fenomen men feil lov; ikke kunne navngi Maxwell-loven.
- **Quiz: 18 · Flashcards: 28**

#### Kapittel 9.2: Beredskap: AC-kretser (kompleks impedans) og ladd partikkel i felt

- **id:** `fys1120-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** Del 5, Del 6
- **kapitteltype:** teori (kompakt beredskap)
- **description:** Det utgående stoffet dekket kompakt: kompleks impedans, drevet RLC — og ladd partikkel i E/B-felt, med nullarbeids-poenget.
- **Eksamensbelegg:** **AC-kretser/kompleks impedans (~29 %, utgående)** dominerte 2009–2014, nå nesten borte fra slutteksamen (lever som ett teorisvar, f.eks. AC-ring 2017). **Ladd partikkel (~12 %, utgått)** etter ~2012 (syklotron 2010, massespektrometer 2012). Begge dekkes **kompakt som beredskap** — ikke satsingsområde, men mulige comebacks. Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 5.2 (kretser), 6.2 (magnetfelt); [Magnetisk kraft på ladninger](/fysikk2/fysikk2-4-2). *(FYS1001 kap. «Ladd partikkel i elektrisk og magnetisk felt» gir enklere innsteg — klartekst; ikke bygget.)*
- **Innholdskontrakt:** MÅ KJENNE (fra formelarket, bruksnivå): **kompleks impedans** $\hat Z_R = R$, $\hat Z_C = 1/(i\omega C)$, $\hat Z_L = i\omega L$; serie/parallell som for resistans; drevet RLC $|\hat I| = |\hat e|/|\hat Z|$; resonans $\omega_0 = 1/\sqrt{LC}$; når $L$ kan neglisjeres ($(\omega L/R)^2\ll 1$); maksimal effektoverføring $R_1=R_2$. **Ladd partikkel:** akselerasjon over spenning $qU = \tfrac12 mv^2$; $\mathbf{F} = q\mathbf{E} + q\mathbf{v}\times\mathbf{B}$; **nullarbeids-poenget:** magnetisk kraft står alltid ⊥ på $\mathbf{v}$ ⇒ gjør ikke arbeid ⇒ fart konstant, bare retning endres; sirkelbane $r = mv/(qB)$; massespektrometer/syklotron kvalitativt. **Figurkrav:** fasordiagram (impedans) og baneskisse (partikkel i $B$-felt inn/ut av planet).
- **Oppgavesjangre:** (beredskap) — 4–6 oppgaver, ikke drill: 2–3 impedans, 2–3 ladd partikkel. Mønstereksempel: «En vekselspenning $\hat e$ med vinkelfrekvens $\omega$ driver en serie av $R$ og $L$. Finn amplituden til strømmen, og angi når spolen kan neglisjeres.»
- **Typiske feil:** Bruke kompleks impedans på et likestrøms-transient-problem (feil verktøy); tro at magnetisk kraft endrer farten; feil retning i $\mathbf{v}\times\mathbf{B}$ for negativ ladning; glemme at dette er kjenne-stoff og bruke for mye tid på det.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 9.3: Midtveis-MCQ-simulering (elektrostatikk → kretser)

- **id:** `fys1120-9-3` · **number:** 9.3 · **estimatedMinutes:** 180 · **prerequisites:** Del 1–5
- **kapitteltype:** øvingseksamen (flervalg)
- **description:** Generalprøve for midtsemestereksamen (25 %): ren flervalg over første halvdel, i midtveisformatet 12 spørsmål på 3 timer.
- **Eksamensbelegg/miks:** Speiler midtveisformatet (2022/2024/2025: 12–13 rene flervalgsspørsmål, 3 timer). **Dekker kun første halvdel — Del 1–5**, aldri magnetostatikk/induksjon/Maxwell. Sammensetning etter 2025-midtveis: felt fra to ladninger (K1), R-vektor (K1), total ladning på linjeladning (K1), potensial fra ladninger og fra konsentriske kuleledere (K3), fluks gjennom en åpen halvkule (K2), bundet overflateladning i dielektrisk plate (K4), kondensator av tre ledere (K4), motstandsnettverk (K5), sylindrisk motstand (K5), avlesning ladningstetthet → E-felt (K2), skalering av kuberesistans (K5). **Alle spørsmål nyskrevne**, med ett riktig alternativ. **Kobling til quizbanken:** denne prøven er kondensatet av Del 1–5-quizene — teksten skal eksplisitt peke studenten til quizbanken som løpende midtveistrening. Løsningsforslag som `collapsible` per spørsmål med kort begrunnelse for riktig alternativ OG hvorfor de vanligste distraktorene er gale (gjettekorrigering nevnes). `tip`-notat om tidsbudsjett (~15 min/spørsmål) og at midtveis teller 25 %.
- **Oppgavesjangre:** Flervalg (sjanger A–F/N). Ett riktig alternativ; distraktorene bygd på de typiske feilene (vektor/skalar, areal/volum, symmetri glemt).
- **Quiz: 15 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 1: 5-oppgavers-malen

- **id:** `fys1120-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** `fys1120-9-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers slutteksamen etter standardmalen: fem langsvarsoppgaver inkl. Python-oppgaven.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (2024/2025-form): **fem langsvarsoppgaver, hver med 4–5 deloppgaver à 0–5 poeng, alle likt tellende**: **O1** ladninger/Coulomb + superposisjon (sjanger A), **O2** Gauss + kondensator/dielektrikum (B/D/E), **O3** transient RC/RL-krets med KVL→diff.likning (G), **O4** magnetfelt (Ampère/Biot–Savart) koblet til gjensidig induktans (H/K/L), **O5** numerisk Python (Coulomb-/Biot–Savart-superposisjon sammenlignet med analytisk grense) (M). ~25–40 % av deloppgavene krever forklaring/begrunnelse. Alle oppgaver nyskrevne, minst én i anvendt innpakning (biomembran/koaks/nervecelle). Løsningsforslag som A-besvarelse i `collapsible` per oppgave — med **lovnavn, symmetriargument, R-vektor, vektor/skalar-disiplin, enheter og figurer** der sensor forventer det, og kjørbar Python i O5. `tip`-notat om poeng per deloppgave og tidsbudsjett (~48 min/oppgave).
- **Oppgavesjangre:** A, B/D/E, G, H/K/L, M (+ N spredt utover). Full 5-oppgavers-mal.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.5: Øvingseksamen 2: 5-oppgavers-malen (anvendt innpakning)

- **id:** `fys1120-9-5` · **number:** 9.5 · **estimatedMinutes:** 240 · **prerequisites:** `fys1120-9-4`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i samme mal, men gjennomgående kledd i anvendte modeller — samme fysikk, ny innpakning.
- **Eksamensbelegg/miks:** Samme 5-oppgavers-mal som 9.4, men med den moderne **anvendte innpakningen** (nervecelle/cellemembran/koaksialkabel/magnetisk felle): **O1** ladningsfordeling i en modell-cellevegg (A), **O2** nervecelle som sylinderkondensator med dielektrikum (B/D/E), **O3** cellemembran som RC-krets, transient respons (G), **O4** koaksialkabel/solenoide-felt + gjensidig induktans mot nabokrets (H/K), **O5** numerisk Python: modifiser utdelt kode til ny geometri + Laplace-løser (M). ≥30 % kvalitative deloppgaver — den anvendte innpakningen inviterer til «forklar»-spørsmål (og til «vurder om modellen holder»). Løsningsforslag som A-besvarelse med vektings-`tip`; eget notat om at den anvendte innpakningen er kosmetikk — identifiser standardsjangeren bak hver deloppgave.
- **Oppgavesjangre:** A, B/D/E, G, H/K, M (+ N). Full 5-oppgavers-mal, anvendt.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.6: Øvingseksamen 3: 5-oppgavers-malen (med teori/Maxwell-innslag)

- **id:** `fys1120-9-6` · **number:** 9.6 · **estimatedMinutes:** 240 · **prerequisites:** `fys1120-9-5`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett som i tillegg til de fem søylene tester de kvalitative gjengangerne og Maxwell-navngivingen tyngre.
- **Eksamensbelegg/miks:** Samme 5-oppgavers-mal, men med **tyngre sjanger N-innslag** (speiler sett der teori/lovnavn og Maxwell er godt representert, f.eks. 2017): **O1** kontinuerlig ladningsfordeling med symmetrinulling (A), **O2** Gauss for massiv fordeling i alle områder + potensial (B/C), **O3** transient RL-krets med bryter som åpnes/lukkes (G), **O4** magnetiske materialer/B–H-identifikasjon + Ampère (I/H), **O5** numerisk Biot–Savart med analytisk sammenligning (M); **pluss en tverrgående teori-deloppgave i hver oppgave** (navngi Maxwell-lov + integral↔differensial; $D$/$E$-kontinuitet; hvorfor magnetisk kraft ikke gjør arbeid; $L_{12}=L_{21}$). Dekker sammen med 9.4–9.5 samtlige sjangre A–N minst én gang. Løsningsforslag som A-besvarelse med vektings-`tip` og kortsvar-disiplin på N-delene (2–4 setninger, aldri essay).
- **Oppgavesjangre:** A, B/C, G, I/H, M, N. Full 5-oppgavers-mal + N-tyngde.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 9:** dekkes av midtveis-MCQ-simuleringen (9.3) og de 3 øvingseksamenene (9.4–9.6) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 12 |
| 1 | 1.1–1.3 | 25+22+12 = **59** | 28+24+8 = **60** |
| 2 | 2.1–2.3 | 25+22+12 = **59** | 26+24+8 = **58** |
| 3 | 3.1–3.3 | 22+22+12 = **56** | 24+24+8 = **56** |
| 4 | 4.1–4.3 | 18+16+10 = **44** | 22+20+8 = **50** |
| 5 | 5.1–5.3 | 16+25+12 = **53** | 20+26+8 = **54** |
| 6 | 6.1–6.4 | 22+22+14+12 = **70** | 24+24+18+8 = **74** |
| 7 | 7.1–7.3 | 20+18+10 = **48** | 22+22+8 = **52** |
| 8 | 8.1–8.3 | 18+18+12 = **48** | 20+20+10 = **50** |
| 9 | 9.1–9.6 | 18+12+15+5+5+5 = **60** | 28+14+0+0+0+0 = **42** |
| **Sum** | **32 kap.** | **509 ≥ 500 ✓** | **508 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvensen: de fire elektrostatikk-/potensial-/Gauss-søylene
(Del 1–3, alle ~90 %) bærer 174 av 509 quiz, og med kretser (Del 5) utgjør
**Del 1–5 til sammen 271 quiz — det er midtveispensumet (25 %)**, kalibrert som
løpende midtveistrening (jf. kap. 9.3). Magnetostatikk (Del 6) er den femte
søylen. Flashcards er symbol-/formel- og lovnavn-tunge (EMs symbolapparat +
sensorens metaregler + Maxwell-navngiving).

### Prøver per del (4 per temadel 1–8, 32 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre med løsningsforslag
skrevet som A-besvarelse (lovnavn, symmetriargument, R-vektor, vektor/skalar-
disiplin, enheter, figurer) og poengfordeling à 0–5 poeng per deloppgave. Omfang
i minutter. Prøvekapittel-id: `fys1120-<del>-prove`, chapterNumber `<del>.P`.

**Del 1 — Elektrostatikk:** 1.A felt fra punktladninger + superposisjon (30 min) ·
1.B kontinuerlig fordeling m/symmetrinulling (40) · 1.C blandet sjanger A på
eksamensnivå (40) · 1.D midtveis-format: flervalg/kortsvar elektrostatikk (35).

**Del 2 — Gauss' lov:** 2.A kule/punkt m/symmetriargument (30) · 2.B linje/sylinder/
plan (35) · 2.C flerområde: massiv fordeling + ledere (40) · 2.D midtveis-format
Gauss på eksamensnivå (40).

**Del 3 — Potensial:** 3.A skalar superposisjon (30) · 3.B felt→potensial m/nullpunkt
(40) · 3.C kvalitativ + energi (30) · 3.D midtveis-format potensial (40).

**Del 4 — Ledere/kondensator/dielektrika:** 4.A kapasitans fra felt (35) ·
4.B mellomledere og kapasitanseffekt (35) · 4.C dielektrika og grensebetingelser
(35) · 4.D kombinert kondensator+dielektrikum (40).

**Del 5 — Strøm og kretser:** 5.A strøm/resistans m/riktig areal og retning (30) ·
5.B RL-krets KVL→diff.likning (40) · 5.C RC-krets m/ladningsbevaring (40) ·
5.D midtveis-format strøm+enkle kretser (35).

**Del 6 — Magnetostatikk:** 6.A Ampère m/symmetriargument, alle områder (35) ·
6.B Biot–Savart m/R-vektor og buelengde (40) · 6.C magnetiske materialer og
B/H-identifikasjon (30) · 6.D kombinert magnetfelt + dipol (45).

**Del 7 — Induksjon/induktans:** 7.A Faraday/Lenz m/varierende fluks (35) ·
7.B bevegelig leder og kraftlikevekt (35) · 7.C selv-/gjensidig induktans
m/$L_{12}=L_{21}$ (40) · 7.D kombinert induksjon+induktans (45).

**Del 8 — Numerisk Python:** 8.A Coulomb-superposisjon i for-løkke + analytisk
grense (40) · 8.B Biot–Savart-sum og feltvisualisering (40) · 8.C kodemodifikasjon
fra utdelt kode (35) · 8.D Laplace/Poisson-løser på gitter (45).

**Midtveis-generalprøve:** kap. 9.3 (180 min, ren flervalg) + prøvene 1.D + 2.D +
3.D + 5.D tas samlet som simulering av midtsemestereksamen (25 % av karakteren;
dekker kun Del 1–5). Dette angis eksplisitt i Del 0 og i prøvekapitlenes ingress.

### Øvingseksamener (3 komplette 4-timers sett — kap. 9.4–9.6)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (9.4) | Standard 5-oppgaver (2024/2025) | O1 ladninger, O2 Gauss/kondensator, O3 transient krets, O4 magnetfelt+induktans, O5 Python; ~25–40 % forklaring |
| Øvingseksamen 2 (9.5) | Anvendt innpakning | Samme mal i biomembran/koaks/nervecelle-drakt; O5 = kodemodifikasjon + Laplace; ≥30 % kvalitativt |
| Øvingseksamen 3 (9.6) | Teori/Maxwell-tung (2017-type) | Samme mal + tverrgående sjanger N (Maxwell-navngiving, D/E-kontinuitet, L₁₂=L₂₁) i hver oppgave |

Til sammen dekker de tre settene + midtveis-MCQ-simuleringen (9.3) samtlige
sjangre A–N minst én gang, og hver av dem har en fullverdig **Python-oppgave (O5)**.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t slutteksamen 75 %, fem langsvarsoppgaver,
   0–5 p per deloppgave), midtveisordningen (25 %, ren flervalg, Del 1–5),
   hjelpemidlene (formelark + Rottman + Angell/Øgrim & Lian) og prognosen
   (5-oppgavers-malen) fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (elektrostatikk-kjernen m/R-vektor, Gauss m/symmetridrill, potensial
   m/vektor–skalar-disiplin, transient krets m/KVL→diff.likning, magnetfelt
   Ampère/Biot–Savart, **numerisk Python**), *kunne* (kondensator, dielektrika,
   induksjon, selv-/gjensidig induktans, strøm/resistans), *kjenne* (magnetiske
   materialer, magnetisk dipol, Maxwell kvalitativt, feltenergi, AC/impedans og
   ladd partikkel som beredskap, EM-bølger/Poynting).
3. **5-oppgavers-malen** — hvordan settet er bygd (O1 ladninger, O2 Gauss/
   kondensator, O3 krets, O4 magnetfelt/induktans, O5 Python), og løsnings-
   oppskriftene fra drillkapitlene (1.3, 2.3, 3.3, 4.3, 5.3, 6.4, 7.3, 8.3, 9.1)
   i kortform.
4. **Sensorreglene** — metareglene: **nevn loven ved navn**; **symmetriargumentet
   er 2 av 5 poeng** ved Gauss/Ampère; **vektor/skalar-disiplin** (−3 for felt/
   potensial-forveksling, −2 for vektor under brøkstrek); **R-vektor eksplisitt**;
   følgefeil straffes ikke ved vist mellomregning; flere metoder godtas (velg den
   enkleste); enheter og gjeldende siffer; **0 poeng for uendret Python-eksempel**
   — pluss karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: felt/potensial-forveksling → 3.1;
   vektor under brøkstrek / feil R-vektor → 1.1; symmetri uten argument → 2.1/6.1;
   areal vs. volum/buelengde → 2.2/6.2; manglende KVL-navn → 5.2; fortegn i
   diff.likning → 5.2; D/E-kontinuitet ombyttet → 4.2; µ for permanentmagnet →
   6.3; N-faktor / I blir stående i L → 7.2; uendret eksempel-Python → 8.3.
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **hentes fra formelark/tabell** (konstantverdier,
   materialdata, vektoridentiteter); treningsråd: løs alltid oppgaver MED
   formelarket ved siden av, slik eksamen er — boka trener *bruk og utledning*,
   ikke pugg.
7. **Python-beredskapen** — den forberedte kodemalen studenten bør ha automatisert
   (diskretisering, for-løkke-superposisjon, `scipy.constants`, analytisk
   sammenligning, plott med normaliserte akser) og hvordan man *modifiserer* den
   raskt (0 poeng for uendret kode); sjekklisten fra Del 8 i kortform.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 → 5 (midtveispensum; midtveis-generalprøven 9.3 + 1.D +
   2.D + 3.D + 5.D før midtveis) → 6 → 7 → 8 (Python parallelt fra uke 1, ikke
   utsatt) → 9; teori-/lovnavn-drillen 9.1 spres utover hele løpet; de tre
   øvingseksamenene (9.4–9.6) de siste ukene under tidspress (240 min).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `fys1120` med alle 32
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen (obligatorisk
   — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under Universitetet i Oslo, navn
   «FYS1120 Elektromagnetisme».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, 5-oppgavers-malen og
   frekvenstallene som resten av boka refererer til.
3. **Del 1 → 2 → 3** (elektrostatikk-avhengighetskjeden: felt → Gauss → potensial).
4. **Del 4 → Del 5** (ledere/kondensator bygger på Gauss+potensial; kretser bygger
   på kondensator) — fullfører midtveispensumet (Del 1–5).
5. **Del 6 → Del 7** (magnetostatikk før induksjon/induktans; 7.2 bruker 6.2s
   dipolfelt — bygg 6.2 før 7.2).
6. **Del 8 (Python)** kan bygges parallelt med Del 6–7 av egen agent, men 8.1
   krever 1.2 og 8.2 krever 6.2 — flagg avhengigheten. Egen agent med
   kodekontrakt-fokus.
7. **Del 9 til slutt** — teori-/lovnavn-drillen (9.1), beredskap (9.2),
   midtveis-MCQ (9.3) og øvingseksamenene (9.4–9.6) gjenbruker hele boka; bygges
   av én agent som leser HELE skjelettet. Python-oppgaven O5 i hver øvingseksamen
   må ha kjørbar kode.
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   (`fys1120-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
   fastsettes i BYGGEKONTRAKT.md (fase 3).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\mathbf{E}$, $\mathbf{B}$, $\mathbf{D}$, $\mathbf{H}$,
      $\mathbf{R}=\mathbf{r}-\mathbf{r}'$, $\varepsilon_0$, $\mu_0$, $\rho_l$,
      $\rho_s$, $\tau$, $\Phi$, $\hat{\boldsymbol{\phi}}$).
- [ ] **Notasjonskonsistens (tekstsøk over alle fys1120-filer):** R-vektoren
      $\mathbf{R}=\mathbf{r}-\mathbf{r}'$ satt opp eksplisitt i alle Coulomb-/
      Biot–Savart-utledninger; vektor (felt) aldri under brøkstrek; skalar
      (potensial $V$, fluks $\Phi$, ladning $Q$) aldri gitt vektorpil;
      $\varepsilon = \varepsilon_r\varepsilon_0$ og $\mu = \mu_0(1+\chi_m)$
      konsistent; **forbudt som satsingsstoff** (kun i Del 0-avgrensningen og
      kap. 9.1/9.2 som eksplisitt kjenne/beredskap): AC/kompleks impedans som
      hovedoppgave, ladd-partikkel som hovedoppgave, EM-bølger/Poynting-utledninger,
      relativitet.
- [ ] **Lovnavn-disiplin:** hver Gauss-/Ampère-/Faraday-/Kirchhoff-bruk **navngir
      loven** før den brukes; hver Gauss-/Ampère-utledning har et **eksplisitt
      utskrevet symmetriargument** (2 av 5 poeng).
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen
      konstantverdier presenteres som puggestoff.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet
      på hvert tallsvar og 2–3 gjeldende siffer — boka *modellerer* sensorkravet.
- [ ] **Python-kodekontrakt (Del 8 + O5 i øvingseksamenene):** all kode kjørbar,
      gjenbrukbar (funksjoner), bruker `scipy.constants`, har analytisk
      sammenligning og normaliserte/enhetsmerkede akser; minst tre oppgaver som
      *modifiserer* utdelt kode; ingen oppgave belønner uendret eksempelkode.
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (KUN til
      kapitler som finnes — de lenkede fysikk2-/r2-/r1-/1t-kapitlene i §3 er
      verifisert mot metadataene 7. juli 2026; **fys1001 og IN1900 er IKKE bygget
      og skal kun refereres i klartekst, aldri lenkes**), `collapsible` Symbol- og
      formelliste, 2–4 eksempler (siste på eksamensnivå, med figur der sensor
      forventer figur), Typiske feil-`warning`, 6–12 øvinger med `solution` +
      `hints` (stigende; minst én kvalitativ N-oppgave i hvert teorikapittel),
      repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
      sensor-kommentert gjennomregnet case + 8–15 oppgaver på eksamensnivå.
- [ ] **Kvalitativ-kvoten:** på tvers av boka skal ~25–40 % av øvingene i
      teorikapitlene være kvalitative «forklar/begrunn/navngi loven»-oppgaver med
      modellsvar i 2–4 setninger (speiler eksamens miks).
- [ ] **Quiz-sum ≥ 509 og flashcard-sum ≥ 508** per kvotetabellen i §4
      (kontrollsummér per del). Del 1–5-quizene fungerer som midtveisbank.
- [ ] **Prøver:** 4 per temadel 1–8 (32 stk) + midtveis-MCQ-simulering (9.3) +
      3 øvingseksamener (9.4–9.6) som sammen dekker sjangrene A–N; hver
      øvingseksamen har en Python-oppgave (O5).
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

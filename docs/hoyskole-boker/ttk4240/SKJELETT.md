# Bokskjelett: TTK4240 Industriell elektroteknikk — eksamensrettet lærebok (NTNU)

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
> `EKSAMENSANALYSE.md` (5 komplette sett med detaljerte sensorløsninger,
> Dec 2015 · Kont 2016 · Dec 2016 · Dec 2017 · Kont 2017 — alle lest ordrett).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i dette skjelettet er omskrevne (nye tallverdier, nye kretser,
> ny kontekst) — de kan varieres videre, men aldri kopieres ordrett inn som
> oppgaver. Formlene er standard elektroteknikk-notasjon og ikke opphavsrettslig
> beskyttet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ttk4240` |
| Tittel | **TTK4240 Industriell elektroteknikk — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU (Institutt for teknisk kybernetikk) |
| Arketype | Regnefag (kvantitativt fag med faste oppgavemaler + eget skissespor) |
| Antall kapitler | **33** (2 eksamenskart/håndverk + 27 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 730 min ≈ 45,5 timer** |
| Quiz totalt | **518** (krav ≥500) |
| Flashcards totalt | **514** (krav ≥500) |

**Pitch (ett avsnitt):** TTK4240-eksamen er usedvanlig forutsigbar. Et sett er
alltid **fire hovedoppgaver à ~25 %**, hver bygget som en stigende sekvens (a–d/e):
et kort kvalitativt delspørsmål, så en utledning («show that…»), så numerisk
beregning og/eller en **skisse** (kretsdiagram, bølgeform, moment-turtallskurve).
Tre søyler bærer **hvert eneste sett** og utgjør ~2/3 av poengene: **(1) AC
stasjonæranalyse** — fasorer, impedans, aktiv/reaktiv/tilsynelatende effekt,
kapasitiv vs. induktiv (5/5); **(2) elektriske maskiner** — DC-maskin, asynkron
moment-turtall/slip, synkron/nettilkobling (5/5); **(3) kraftelektronikk** —
buck/boost duty-cycle, diode-likeretter, inverter, bølgeform-skisser (5/5). Den
fjerde oppgaven roterer mellom **Laplace/transientrespons** (4/5), **trefase**
(3/5), **elektromagnetisme/magnetisk krets** (3/5) og op-amp/filter/Thevenin.
Boka er kalibrert mot nettopp dette: full metodedrill på de tre søylene, et eget
**skissespor** (fordi skisser gir reelle poeng — «en omformer tegnet som boks gir
0 poeng»), og konsekvent trening i det sensor faktisk belønner: **vis metoden**
(følgefeil straffes aldri), riktig **RMS/peak-disiplin**, riktig **√3/√2** i
trefase, riktig **fortegn på strømvinkelen**, **poler×2**, **ingen j i
tidsdomenesvar**, og riktig **dot convention**. Vindturbin/PV/MPPT er den
gjennomgående anvendelseskonteksten, slik settene bruker den.

**Kritisk rammebetingelse (gjelder HELE boka) — formelarket deles ut:** Eksamen
deler ut et **formelark** (APPENDIX: FORMULAS) med Laplace-par, kretselementer
($X_L=j\omega L$, $X_C=1/(j\omega C)$), fasor-/effektrelasjoner ($S=\mathbf{V}\mathbf{I}^*=P+jQ$),
elektromagnetisme ($NI=\mathcal{R}\phi$, $\mathcal{R}=l/(\mu A)$, $L=N^2/\mathcal{R}$),
trefase ($V_{LL}=\sqrt3\,V_{ph}$, $S=\sqrt3\,V_{LL}I_L$), maskinformler
($f_{el}=(p/2)f_{mek}$, $E_A=K\Phi\omega$, $T=K\Phi I_a$, $\omega_{mek}=(1-s)\omega_s$),
kraftelektronikk (buck $D=V_{out}/V_{in}$, boost $1/(1-D)$, invertermodulasjon) og
mekanikk ($P=T\omega$, $v=r\omega$, $T_{mot}-T_{last}=J\,d\omega/dt$). Boka skal
derfor ALDRI fremstille formler som puggestoff. Skillet er: **«må kunne brukes
aktivt»** (velges, kombineres og *utledes* under tidspress — kjerneverktøyene i
kapitlenes innholdskontrakter) vs. **«hentes fra formelarket»** (ferdige
Laplace-par, standardformler, konstanter som $\mu_0=4\pi\cdot10^{-7}$). Hvert
delkapittels **Symbol- og formelliste** markerer hva som står på formelarket.
Boka trener **anvendelse, gjenkjenning og utledning**, ikke pugg.

**Kritisk språkregel (gjelder HELE boka):** Emnet undervises på **engelsk**, og
nyere sett har engelsk oppgavetekst; eldre sett finnes delvis på norsk. Boka
skrives på **norsk bokmål**, men er **tospråklig-bevisst på fagtermer**: engelsk
fagterm i parentes ved første forekomst i hvert delkapittel (f.eks. fasor
(*phasor*), tomgangsturtall (*no-load speed*), tastforhold/duty-cycle,
prikk-konvensjon (*dot convention*), likeretter (*rectifier*), vekselretter/
inverter, buck/boost). Studenten skal kjenne igjen begrepet på engelsk eksamen.

**Kritiske notasjons- og disiplinregler (eksamenssettenes konvensjon — gjelder HELE boka):**
- **RMS er standard.** Fasorer og effekt regnes med **RMS-verdier** som utgangspunkt.
  Brukes toppverdier (*peak*) i $S=\mathbf{V}\mathbf{I}^*$, **MÅ** man dele på 2
  ($S=\tfrac12\mathbf{V}_{peak}\mathbf{I}_{peak}^*$). $I_{peak}=\sqrt2\,I_{RMS}$.
  Å blande peak inn i en RMS-effektformel uten faktor ½ gir poengtrekk.
- **Fortegn på strømvinkelen:** induktiv last ⇒ strøm **etter** spenning ⇒
  **negativ** strømvinkel og **$Q>0$**; kapasitiv last ⇒ strøm **forut** ⇒
  positiv strømvinkel og **$Q<0$**. Å bruke «+» på induktiv last er en av de
  vanligste feilene.
- **$\omega=2\pi f$** alltid når frekvens er i Hz — skriv $2\pi\cdot50$, ikke bare $\omega$.
- **Poler vs. polpar (faktor 2):** $f_{el}=(p/2)\,f_{mek}$; $\omega_s=2\cdot(2\pi f)/p$.
  Å glemme ×2 gir poengtrekk.
- **√3/√2 i trefase:** $V_{LL}=\sqrt3\,V_{ph}$ (RMS). Feil bruk av $\sqrt3$ =
  «severe mistake»; å trekke $S-P$ direkte i stedet for $Q=\sqrt{S^2-P^2}$ =
  «very severe mistake».
- **Grader vs. radianer:** tidsdomeneuttrykk $x(t)=X\cos(\omega t+\theta)$ har
  argumentet i **radianer**; bland aldri grader inn i et rad/s-argument.
- **Ingen $j$ i tidsdomenet:** når man går fra fasor tilbake til $x(t)$, skal den
  komplekse enheten $j$ **aldri** bli stående i et $\cos(\cdot)$-uttrykk («does
  not make sense to have a complex number in a time-domain expression»).
- **Dot convention (*dot convention*):** prikken bestemmes av **fluksretning/
  viklingsretning**, IKKE av definert strøm-/spenningsretning. Fortegnet på
  $M$-leddet i gjensidig induktans følger prikkene. Dette er den vanskeligste
  enkeltferdigheten — behandles eksplisitt i kap. 4.2.
- **Enheter og siffer:** alle tallsvar med SI-enhet, 2–3 gjeldende siffer, riktig
  tierpotens.

**Skissespor (gjelder HELE boka — skisser gir reelle poeng):** Sensor gir
selvstendige poeng for **kretsdiagram** (med komponenter, ikke «boks»),
**bølgeformer** (med riktig form — f.eks. at spolespenningen MÅ gå negativ i
off-perioden) og **moment-turtallskurver** (med markerte punkter: synkronturtall,
$s=0/s=1$, startmoment, driftspunkt). «Students that only present the DC/DC-
converter as a box will not get any points.» Hvert relevant kapittel har derfor
et eksplisitt **Skissekrav**, og kap. 0.2 samler skissehåndverket som eget spor.

**Sensorlinje (gjelder HELE boka):**
- **Følgefeil straffes ALDRI.** Metode > sluttall — «følgefeil is never punished».
  Deloppgavene er ofte **frikoblet** («If you did not solve b), use $C=1$ mF …»).
- **MEN riktig svar av feil grunn kan gi 0.** Ved valg (f.eks. motorvalg): «If
  machine B was chosen for incorrect reason, this could potentially give 0 points.»
  Resonnementet må stemme, ikke bare konklusjonen.
- **Avlesning fra figur tolereres romslig** (±0,1 MW o.l.) så lenge resonnementet
  er riktig — men bruk det avleste tallet konsekvent videre.

**Bevisst nedprioritert / lav dybde (begrunnes i Del 0):**
- **Reguleringssløyfer / digital motorstyring / kontrollerdesign** står i
  læringsutbyttet (labdel), men opptrer **ikke** som eksamensoppgave i noe av de
  fem settene. Dekkes **kun konseptuelt** i Del 10 — *(verifiser mot ferske sett;
  se §7-forbeholdet i analysen)*. Ikke satsingsområde.
- **Tung 2.-ordens RLC-transient med demping** forekommer, men sjeldnere enn
  1.-ordens — kompakt beredskap i kap. 8.2.
- **Op-amp/aktivt filter, passivt filter/resonans, Thevenin/maks effekt,
  transformator** er nivå-3 «kjenne»-stoff (2/5 hver) — kompakte kapitler, ikke
  drill.

**Forhold til søsterbøkene:** TTK4240 bygger på matematisk og fysisk fundament
som dekkes i NTNUs realfagsbøker. Der forkunnskapskapitler finnes i systemet,
lenkes de i Forkunnskaper-blokkene (komplekse tall og differensiallikninger:
[TMA4110](/bok/tma4110/tma4110-1-1)-familien; Laplace: [TMA4135](/bok/tma4135/tma4135-1-1);
elektromagnetisk grunnlag i [fysikk 2](/bok/fysikk2/fysikk2-3-1)). **Lenk kun til
kapitler som faktisk finnes** — verifiser mot metadataene før lenking; ellers
referer forkunnskapen i klartekst.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): DC-grunnlag → AC/fasor →
trefase → magnetisme → transformator → maskiner → kraftelektronikk → Laplace/
transient → nivå-3-støtte → regulering (lav) → eksamenstrening. Frekvensen styrer
*omfanget*: de tre 5/5-søylene (AC-effekt, maskiner, kraftelektronikk) får flest
kapitler + eget drillkapittel; nivå-3-temaene får ett kompakt kapittel hver.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | Prioriteringsverktøyet + formelarket (0.1) og skisse-/«vis metoden»-/fallgruve-håndverket (0.2). Kjerne i studieguiden. |
| 1 | DC-kretsgrunnlag: Kirchhoff, node/mask, Thevenin | 2 | Grunnlag for alt annet. Thevenin/Norton (2/5, kunne) bor her; brukes igjen i AC (2.3). |
| 2 | AC stasjonæranalyse: fasorer, impedans og effekt | 4 | **5/5, ~22 %** — settets ryggrad. Nivå 1 «perfekt»: 3 teori + drill. Peak/RMS- og fortegns-disiplinen bor her. |
| 3 | Trefasesystemer | 2 | **3/5, ~8 %** (kunne). √3/√2-fallgruven («severe mistake»). Teori + drill/kompensering. |
| 4 | Magnetisk krets og elektromagnetisme | 2 | **3/5, ~7 %** (kunne). Reluktans + gjensidig induktans/dot convention (topp-diskriminator). |
| 5 | Transformatorer | 1 | **2/5, ~3 %** (kjenne). Ideell trafo, omsetningsforhold, impedanstransformasjon $R/N^2$. |
| 6 | Elektriske maskiner: DC, asynkron, synkron | 5 | **5/5, ~22 %** — nivå 1 «perfekt». DC + asynkron + synkron/vind + transient + drill. Moment-turtallskurver. |
| 7 | Kraftelektronikk: omformer, likeretter, inverter | 5 | **5/5, ~20 %** — nivå 1 «perfekt». Buck/boost + ON/OFF-ODE/bølgeform + likeretter + inverter + drill. |
| 8 | Laplace, overføringsfunksjon og transientrespons | 3 | **4/5, ~12 %** (kunne). $H(s)$ fra krets, sprangrespons via delbrøk, steady-state via $s=j\omega$ + drill. |
| 9 | Op-amp, filtre og resonans | 2 | **2/5 hver** (kjenne). Ideell op-amp/aktivt filter + passivt filter/LC-resonans. Avgjør topp. |
| 10 | Reguleringssløyfer (konseptuelt) | 1 | **0/5 i arkivet** — i læringsutbyttet, ikke testet. Kun konseptuelt. *(verifiser)* |
| 11 | Eksamenstrening | 4 | Tverrgående sjanger-/kvalitativ-/skisse-drill (11.1) + 3 komplette øvingseksamener (4 oppgaver à 25 %, frikoblede deler, formelark). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | DC-kretsgrunnlag |
| 2 | AC stasjonæranalyse: fasorer, impedans og effekt |
| 3 | Trefasesystemer |
| 4 | Magnetisk krets og elektromagnetisme |
| 5 | Transformatorer |
| 6 | Elektriske maskiner |
| 7 | Kraftelektronikk |
| 8 | Laplace, overføringsfunksjon og transientrespons |
| 9 | Op-amp, filtre og resonans |
| 10 | Reguleringssløyfer |
| 11 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har to kapitler** (0.1 eksamenskart+formelark, 0.2 håndverk). DNA-en
   har ett Del 0-kapittel; her legges et eget **håndverkskapittel** til fordi
   TTK4240 har to selvstendig poenggivende metaferdigheter som ikke er
   tema-spesifikke: **skisse** (kretsdiagram/bølgeform/moment-turtall gir reelle
   poeng; «boks» gir 0) og **«vis metoden»/følgefeil-disiplin** (frikoblede
   deloppgaver). Disse forankres én gang og refereres av alle kapitler.
2. **Eget skissespor** (Skissekrav-blokk i alle relevante kapitler + kap. 0.2).
   Motivert av sensorens eksplisitte skissepoeng; ikke i DNA-en som eget spor.
3. **Fire av fem drillkapitler ligger inne i temadelene** (2.4, 6.5, 7.5, 8.3) +
   kompensering-/repetisjonsdrill i 3.2 — ikke samlet i siste del, fordi
   sjangrene er tema-spesifikke gjengangere som må drilles rett etter teorien.
   Del 11 beholder den **tverrgående** sjangeren (kvalitativ/skisse/blandet) og
   øvingseksamenene.
4. **Del 10 (regulering) er tatt med til tross for 0/5 i arkivet** — fordi det
   står i emnets læringsutbytte og analysen §7 flagger at det *kan* løftes inn
   framover. Holdes bevisst på **konseptuell** dybde og merkes *(verifiser)*.
5. **Tre øvingseksamener** (DNA tillater 2–4), hver med **fire oppgaver à 25 %**
   og frikoblede deler, speiler eksamensformen eksakt.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–M) refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**A** AC-effekt fra tidsforløp/fasor (P/Q/S, kapasitiv/induktiv),
**B** DC-maskin, **C** asynkronmaskin (moment-turtall/slip), **D** synkron/vind/
nettilkobling, **E** DC-DC-omformer, **F** likeretter/inverter, **G** Laplace/
overføringsfunksjon/transient, **H** trefase, **I** elektromagnetisme/magnetisk
krets, **J** op-amp/aktivt filter, **K** Thevenin/maks effektoverføring,
**L** passivt filter/resonans, **M** transformator. **S** = skisse (tverrgående:
kretsdiagram/bølgeform/moment-turtall). Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Eksamensvinkel-`tip`,
Forkunnskaper-blokk med kryssbok-lenker og `collapsible` **Symbol- og
formelliste** rett etter (ALLE symboler/formler i delkapitlet forklares, per
delkapittel — aldri arv fra tidligere kapitler — med markering av hva som står på
formelarket), Skissekrav der sensor forventer skisse, `warning` **Typiske feil**,
og «vis metoden/følgefeil»-note.

---

### Del 0 — Eksamenskart og håndverk

#### Kapittel 0.1: Eksamenskartet: slik testes TTK4240 (og formelarket)

- **id:** `ttk4240-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, 4-oppgavers-malen, temafrekvensene, formelarket og sensorens metaregler som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (Dec 2015–Kont 2017). Skal gjengi: (i) **formen:** 4 timers skriftlig skoleeksamen, 100 % av karakteren, A–F; **fire hovedoppgaver à ~25 %**, hver med 3–5 frikoblede deloppgaver (a–d/e); **ingen flervalg**; **formelark deles ut**; kalkulator forutsatt. (ii) **Oppgavens indre form:** stigende sekvens — kort kvalitativt → utledning («show that…») → numerisk beregning og/eller **skisse**. (iii) **Temafrekvens-tabellen:** AC-fasoranalyse/effekt 5/5 (~22 %), elektriske maskiner 5/5 (~22 %), kraftelektronikk 5/5 (~20 %), Laplace/transient 4/5 (~12 %), trefase 3/5 (~8 %), elektromagnetisme/magnetisk krets 3/5 (~7 %), op-amp/aktivt filter 2/5 (~5 %), Thevenin/maks effekt 2/5 (~4 %), transformator 2/5 (~3 %), passivt filter/resonans 2/5. (iv) **Sjangerkatalogen A–M** (+ S skisse) som studentens sjekkliste. (v) **Formelarket gjengitt** (se §6) med markering **må-kunne-brukes-aktivt** vs. **hentes fra arket**. (vi) **Sensorens metaregler:** følgefeil straffes ALDRI (frikoblede deler); metode > sluttall; MEN riktig svar av feil grunn kan gi 0; figuravlesning tolereres romslig; skisser gir reelle poeng, «boks» = 0. (vii) **Fornybar rød tråd:** vindturbin/PV/MPPT som gjennomgående innramming. (viii) **Karakternivåene** (bestått E–D / middels C–B / topp A).
- **Innholdskontrakt:** 4-oppgavers-malen presenteres: O1–O4 dekker typisk AC-effekt, én maskinoppgave, én kraftelektronikk-oppgave, og en fjerde som roterer (Laplace/trefase/elektromagnetisme/op-amp). Prognosen for neste sett (vår 2027). Leseplan: de tre 5/5-søylene (Del 2, 6, 7) er ryggraden og må ikke utsettes; Del 8/3/4 avgjør B mot C; Del 9/5 avgjør topp. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for fire oppgaver à ~25 %; hvilken oppgave høster du poeng på først, og hvorfor lønner det seg å skrive utledningen selv om du er usikker på sluttallet?».
- **Typiske feil:** Metafeilene: pugge formler som står på arket i stedet for å trene bruk/utledning; nedprioritere skisser («bare en tegning») når de gir reelle poeng; hoppe over en deloppgave fordi den forrige gikk galt (den er ofte frikoblet); skrive konklusjon uten resonnement (riktig svar av feil grunn kan gi 0).
- **Quiz: 14 · Flashcards: 14** (form, vekting, frekvenser, sjangerkatalog, formelark-strategi, metaregler)

#### Kapittel 0.2: Håndverket: skisser, «vis metoden» og de faste fallgruvene

- **id:** `ttk4240-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `ttk4240-0-1`
- **kapitteltype:** eksamenskart
- **description:** Det tverrgående håndverket — hvordan tegne poenggivende skisser, hvordan vise metoden så følgefeil ikke straffes, og en katalog over de faste fallgruvene.
- **Eksamensbelegg:** Metakapittel — destillert fra sensorløsningenes gjennomgående kommentarer. Etablerer **skissesporet** (S) og **fallgruvekatalogen** som resten av boka refererer.
- **Innholdskontrakt:** (1) **Skissehåndverk (S):** hvordan tegne et *kretsdiagram* med komponenter (kilder, R/L/C, brytere, dioder — aldri «boks»); en *bølgeform* med riktig form (spolespenning MÅ gå negativ i off-perioden; gjennomsnitt = areal under kurven; markér nivåer og periodetid); en *moment-turtallskurve* med markerte punkter (synkronturtall $\omega_s$, $s=0$, $s=1$/start, driftspunkt, skjæring med lastkurve). (2) **«Vis metoden»-disiplin:** skriv definisjoner/likninger før innsetting; ta med mellomsteg; oppgi eksplisitt hvilken avlest verdi du bruker videre; utnytt at deloppgaver er frikoblet («If you did not solve b), use…»). (3) **Fallgruvekatalogen** (hver blir en `warning`-referanse i temakapitlene): peak vs. RMS (÷2 i $S=\mathbf{V}\mathbf{I}^*$), fortegn på strømvinkel (induktiv → negativ), $\omega=2\pi f$, poler×2, √3/√2 i trefase, grader vs. radianer, ingen $j$ i tidsdomenet, dot convention (fluksretning), kondensator-kompensering (splitt real/imaginær), effekt til klemmer ≠ akseleffekt, frekvensomformer (ikke gir) for variabel hastighet, «boks» = 0 poeng.
- **Skissekrav:** Kapitlet ER skissehåndverket — vis mønsterskisser av alle tre skissetypene med sensor-margnotater om hvor poengene sitter.
- **Oppgavesjangre:** S + kvalitativ. Mønstereksempel: «Tegn spolestrøm og spolespenning for én periode i en buck-omformer i kontinuerlig ledning, og markér hvorfor spenningen skifter fortegn.»
- **Typiske feil:** Tegne omformer/krets som boks (0 poeng); bølgeform der spolespenningen ikke går negativ; moment-turtallskurve uten markerte punkter; hoppe over mellomregning slik at følgefeil ikke kan spores og krediteres.
- **Quiz: 12 · Flashcards: 16** (skissekrav, fallgruvekatalogen, følgefeil-disiplin)

---

### Del 1 — DC-kretsgrunnlag *(prioritet: grunnlag · Thevenin: KUNNE)*

#### Kapittel 1.1: Kirchhoff, node- og maskeanalyse, ekvivalenter

- **id:** `ttk4240-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttk4240-0-2`
- **kapitteltype:** teori
- **description:** KCL/KVL, node- og maskeanalyse og serie/parallell-reduksjon — verktøyene alt annet bygger på.
- **Eksamensbelegg:** Grunnlag, ikke egen oppgave, men brukt i **alle** kretsoppgaver (AC, transient, kraftelektronikk). Kirchhoffs lover nevnes ved navn i A-besvarelser. Prioritet: **grunnlag**.
- **Forkunnskaper/kryssbok:** kap. 0.2. Grunnleggende kretsforståelse fra [fysikk 2](/bok/fysikk2/fysikk2-3-4) *(lenk kun hvis kapitlet finnes; ellers klartekst)*.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Ohms lov $V=RI$; **Kirchhoffs strømlov (KCL)** $\sum i=0$ i node og **spenningslov (KVL)** $\sum v=0$ i maske — nevnes ved navn; serie $R_s=\sum R_i$, parallell $1/R_p=\sum 1/R_i$; spennings- og strømdeler; nodeanalyse (sett opp likningssett) og maskeanalyse; effekt $P=VI=I^2R=V^2/R$. **Utledning som kreves aktivt:** sette opp KCL/KVL-likningssett fra et gitt kretsdiagram. **Skissekrav:** annotert kretsdiagram med definerte strøm-/spenningsretninger.
- **Oppgavesjangre:** (grunnlag, brukes i A/E/G). Mønstereksempel: «Finn strømmen gjennom $R_3$ i en bro-krets med tre masker ved node- eller maskeanalyse; nevn hvilken lov du bruker i hvert steg.»
- **Typiske feil:** Fortegnsfeil i KVL-omløp; feil ved serie/parallell-blanding; regne effekt med feil verdi (klemme vs. intern); ikke navngi loven.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.2: Thevenin- og Norton-ekvivalenter

- **id:** `ttk4240-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttk4240-1-1`
- **kapitteltype:** teori
- **description:** Reduser en vilkårlig krets til én kilde og én impedans sett fra lasten — grunnlaget for maks effektoverføring (2.3).
- **Eksamensbelegg:** Sjanger K i **2/5** (Kont 2016, Kont 2017). $V_{th}$, $R_{th}/Z_{th}$ sett fra last. Peker mot AC-varianten med kompleks $Z_{th}$ i 2.3. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Thevenin-spenning** $V_{th}$ = åpen-klemmespenning; **Thevenin-motstand** $R_{th}$ = motstand sett fra klemmene med uavhengige kilder deaktivert (spenningskilder kortsluttet, strømkilder brutt); **Norton** $I_N=V_{th}/R_{th}$, $R_N=R_{th}$; ekvivalensen Thevenin↔Norton. **Utledning som kreves aktivt:** finn $V_{th}$ og $R_{th}$ for en gitt krets steg for steg. **Skissekrav:** original krets → redusert ekvivalent (kilde + serieimpedans + last).
- **Oppgavesjangre:** K. Mønstereksempel: «Finn Thevenin-ekvivalenten sett fra klemmene A–B i en krets med to spenningskilder og tre motstander, og tegn den reduserte kretsen.»
- **Typiske feil:** Glemme å deaktivere kildene når $R_{th}$ beregnes; ta med lasten i ekvivalenten; forveksle åpen-klemme og kortslutning; fortegnsfeil.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 1:** 4 prøver (1.A KCL/KVL og node-/maskeanalyse · 1.B serie/parallell + spennings-/strømdeler · 1.C Thevenin/Norton fra last med skisse · 1.D blandet DC-grunnlag på oppvarmingsnivå)

---

### Del 2 — AC stasjonæranalyse: fasorer, impedans og effekt *(prioritet: PERFEKT — 5/5)*

#### Kapittel 2.1: Fasorer, impedans og tidsforløp ↔ fasor

- **id:** `ttk4240-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-1-1`
- **kapitteltype:** teori
- **description:** Fra $x(t)=X\cos(\omega t+\theta)$ til fasor og impedans — og trygt tilbake til tidsdomenet uten $j$.
- **Eksamensbelegg:** Sjanger A i **alle fem sett** (nesten alltid oppgave 1). Kjernen: les faseforskjell fra bølgeform ($\Delta t/T\cdot360°$), skriv $v(t),i(t)$, transformer til fasorer, finn $Z_{eq}=\mathbf{V}/\mathbf{I}$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; komplekse tall (polar↔rektangulær, $e^{j\theta}$, arctan, konjugat) fra [TMA4110](/bok/tma4110/tma4110-1-1) *(lenk kun hvis kapitlet finnes)*.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: fasortransform $X\cos(\omega t+\theta)\leftrightarrow X\angle\theta = Xe^{j\theta}$ (RMS som standard); impedanser $Z_R=R$, $Z_L=j\omega L$, $Z_C=1/(j\omega C)=-j/(\omega C)$; impedanser i serie/parallell som komplekse tall; $Z=|Z|\angle\varphi$, $\varphi>0$ induktiv, $\varphi<0$ kapasitiv; **tilbaketransform til $x(t)$ uten $j$** (riktig amplitude, riktig fortegn på vinkel, radianer); faseforskjell avlest fra bølgeform. **Utledning som kreves aktivt:** hele kjeden bølgeform → $v(t),i(t)$ → fasor → $Z_{eq}$ → tilbake til $i(t)$. **Skissekrav (S):** fasordiagram (spennings- og strømfasor med vinkelen mellom) og/eller bølgeform med avlest $\Delta t$.
- **Oppgavesjangre:** A (+ kvalitativ). Mønstereksempel: «Spenningen over en last er $v(t)=170\cos(2\pi\cdot50\,t)$ V og strømmen $i(t)=8\cos(2\pi\cdot50\,t-25°)$ A. Skriv fasorene (RMS), finn $Z_{eq}$, avgjør kapasitiv/induktiv, og skriv $i(t)$ tilbake i tidsdomenet.»
- **Typiske feil:** La $j$ bli stående i tidsdomenesvaret (stort trekk); bruke $\omega$ der $2\pi f$ skulle stått; blande grader inn i rad/s-argument; feil fortegn på impedansvinkel; blande peak og RMS.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Kompleks effekt P, Q, S og kapasitiv/induktiv last

- **id:** `ttk4240-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-2-1`
- **kapitteltype:** teori
- **description:** Aktiv, reaktiv og tilsynelatende effekt fra fasorer — med den harde peak/RMS- og fortegns-disiplinen.
- **Eksamensbelegg:** Sjanger A, effektkjernen, i **alle fem sett**. $S=\mathbf{V}\mathbf{I}^*=P+jQ$; avgjør kapasitiv ($Q<0$, strøm forut) eller induktiv ($Q>0$, strøm etter). De **to hyppigst korrigerte feilene i hele faget** bor her (peak/RMS og fortegn). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **kompleks effekt** $S=\mathbf{V}\mathbf{I}^*=P+jQ$ (RMS-fasorer) — **med peak-verdier: $S=\tfrac12\mathbf{V}_{peak}\mathbf{I}_{peak}^*$**; **aktiv effekt** $P=|I_{RMS}|^2R=|V_{RMS}||I_{RMS}|\cos\varphi$ [W]; **reaktiv effekt** $Q=|V||I|\sin\varphi$ [VAr]; **tilsynelatende effekt** $|S|=|V||I|=\sqrt{P^2+Q^2}$ [VA]; effektfaktor $\cos\varphi$; **fortegnsregelen:** induktiv last ⇒ strøm etter ⇒ $\varphi>0$ ⇒ $Q>0$; kapasitiv ⇒ $Q<0$. **Utledning som kreves aktivt:** utled $P,Q,S$ fra $v(t),i(t)$/fasorer og tolk fortegnet på $Q$ fysisk. **Skissebruk:** effekttrekant ($P$, $Q$, $S$).
- **Oppgavesjangre:** A. Mønstereksempel: «En last trekker $I_{RMS}=6$ A ved $V_{RMS}=230$ V med effektfaktor 0,85 induktiv. Finn $P$, $Q$, $|S|$ og skriv den komplekse effekten $S=P+jQ$; angi fortegnet på $Q$ og begrunn det fysisk.»
- **Typiske feil:** Bruke peak i $S=\mathbf{V}\mathbf{I}^*$ uten faktor ½ (trekk); «+» på $Q$ for induktiv strøm når vinkelen skulle vært negativ i strømfasoren; forveksle W/VAr/VA; regne $\cos\varphi$ fra feil vinkel.
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 2.3: Maks effektoverføring med kompleks $Z_{th}^*$

- **id:** `ttk4240-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `ttk4240-2-2`, `ttk4240-1-2`
- **kapitteltype:** teori
- **description:** Konjugert tilpasning $Z_L=Z_{th}^*$ for maksimal aktiv effekt til lasten — Thevenin i AC-drakt.
- **Eksamensbelegg:** Sjanger K i **2/5** (Kont 2016, Kont 2017-1d). $Z_{th}$, $V_{th}$ sett fra last; $Z_L=Z_{th}^*$; $P_{max}$ med RMS. Nivå 3, men bygger direkte på 2.2 → plasseres her. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.2, 2.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kompleks Thevenin-ekvivalent $V_{th}$, $Z_{th}$ sett fra AC-last; **konjugert tilpasning** $Z_L=Z_{th}^*$ (samme resistans, motsatt reaktans) for maks **aktiv** effekt; $P_{max}=|V_{th,RMS}|^2/(4\,\mathrm{Re}\{Z_{th}\})$. **Utledning som kreves aktivt:** vis at $P_L$ maksimeres når $X_L=-X_{th}$ og $R_L=R_{th}$. **Skissekrav:** redusert AC-ekvivalent med last.
- **Oppgavesjangre:** K. Mønstereksempel: «En kilde har Thevenin-ekvivalent $V_{th}=100\angle0°$ V (RMS) og $Z_{th}=(4+j3)\,\Omega$. Hvilken last $Z_L$ gir maksimal aktiv effekt, og hvor stor blir den?»
- **Typiske feil:** Bruke $Z_L=Z_{th}$ (ikke konjugert); maksimere tilsynelatende i stedet for aktiv effekt; peak/RMS-feil i $P_{max}$; glemme faktor 4.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.4: Drill: AC-effektoppgaven (sjanger A + K)

- **id:** `ttk4240-2-4` · **number:** 2.4 · **estimatedMinutes:** 90 · **prerequisites:** `ttk4240-2-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets AC-oppgave: bølgeform → fasor → $S=\mathbf{V}\mathbf{I}^*$ → kapasitiv/induktiv → tilbake til tidsdomenet, med RMS/peak- og fortegns-disiplin.
- **Eksamensbelegg:** Sjanger A samlet (5/5) + K (2/5). Varianter: effekt fra tidsforløp, $Z_{eq}$ fra fasorer, kompensering-oppspill, maks effektoverføring. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) les/skriv $v(t),i(t)$ (avlest faseforskjell $\Delta t/T\cdot360°$); 2) fasorer i **RMS** (ellers husk ½); 3) $Z_{eq}=\mathbf{V}/\mathbf{I}$, tolk kapasitiv/induktiv fra fortegn på $\varphi$; 4) $S=\mathbf{V}\mathbf{I}^*=P+jQ$, tolk $Q$; 5) om nødvendig tilbake til $i(t)$ — **ingen $j$, radianer**; 6) enheter (W/VAr/VA). Gjennomregnet eksamenscase med sensor-margnotater (hvor poengene sitter: RMS/peak, fortegn på $Q$, ingen $j$). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** A (+ K). Mønstereksempel (deloppgavekjede): «(a) Fra oppgitte $v(t),i(t)$: finn $S=P+jQ$ og avgjør kapasitiv/induktiv. (b) Finn $Z_{eq}$. (c) *Hvis du ikke løste b), bruk $Z_{eq}=(10-j6)\,\Omega$:* hvilken serie-kondensator gjør lasten reint resistiv?»
- **Typiske feil:** Hele §5-repertoaret for sjanger A: peak/RMS uten ½, fortegn på strømvinkel/$Q$, $j$ i tidsdomenet, $\omega$ vs $2\pi f$, grader i rad-argument.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A effekt fra tidsforløp med kapasitiv/induktiv · 2.B $Z_{eq}$ og fasortransform frem/tilbake · 2.C maks effektoverføring med kompleks $Z_{th}^*$ · 2.D blandet AC-effekt på eksamensnivå)

---

### Del 3 — Trefasesystemer *(prioritet: KUNNE — 3/5)*

#### Kapittel 3.1: Trefase: per-fase-ekvivalent og √3-relasjonene

- **id:** `ttk4240-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttk4240-2-2`
- **kapitteltype:** teori
- **description:** Linje- vs. fasestørrelser, per-fase-ekvivalent og de √3-relasjonene som avgjør en «severe mistake».
- **Eksamensbelegg:** Sjanger H i **3/5** (Kont 2016, Dec 2016, Dec 2017). $V_{LL}=\sqrt3\,V_{ph}$, per-fase-ekvivalent, total effekt ×3, fordeler med trefase (kvalitativt). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 2.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: balansert trefase; **linjespenning** $V_{LL}=\sqrt3\,V_{ph}$ (RMS) og fasesekvens; stjerne (Y) vs. trekant (Δ); **per-fase-ekvivalent** (regn på én fase, gang effekt med 3); **total effekt** $S=\sqrt3\,V_{LL}I_L=3\,V_{ph}I_{ph}$, $P=\sqrt3\,V_{LL}I_L\cos\varphi$, $Q=\sqrt3\,V_{LL}I_L\sin\varphi$, $S=\sqrt{P^2+Q^2}$; fordeler med trefase (konstant momentanEffekt, mindre ledermateriale — kvalitativt). **Utledning som kreves aktivt:** utled $V_{LL}=\sqrt3\,V_{ph}$ fra fasordiagrammet. **Skissekrav (S):** fasordiagram for de tre fasespenningene + linjespenning.
- **Oppgavesjangre:** H (+ kvalitativ). Mønstereksempel: «En balansert Y-koblet last har fasespenning $V_{ph}=230$ V og trekker $I_L=12$ A ved $\cos\varphi=0{,}9$ induktiv. Finn $V_{LL}$, total $P$, $Q$ og $S$.»
- **Typiske feil:** Feil bruk av $\sqrt3$ («severe mistake»); blande linje- og fasestørrelser; gange effekt feil (×3 vs ×√3); ikke ta med $\cos\varphi$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.2: Effektbalanse, reaktiv kompensering og drill (sjanger H)

- **id:** `ttk4240-3-2` · **number:** 3.2 · **estimatedMinutes:** 75 · **prerequisites:** `ttk4240-3-1`
- **kapitteltype:** drill
- **description:** Effektbalanse gjennom kjeden, kondensator-kompensering for $Q=0$, og drill på trefaseoppgaven — med √3/√2-disiplin.
- **Eksamensbelegg:** Sjanger H samlet (3/5). Kondensator-kompensering ($Q=0$), motor-/batteristrøm fra effektbalanse og $\cos\varphi$, reaktiv effekt til nett fra inverter $Q=\sqrt{S^2-P^2}$. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) balansert last → per-fase-ekvivalent; 2) √3-relasjoner (RMS); 3) effektbalanse gjennom kjeden (kilde → last, tapfri); 4) kompensering: **splitt total-$Z$ i real/imaginærdel og null imaginærdelen** (ikke $\omega L=1/(\omega C)$ med mindre L og C er i parallell); 5) $Q_{max}=\sqrt{S^2-P^2}$ (ALDRI $S-P$). Gjennomregnet eksamenscase med sensor-margnotater (√3-feil, $Q=\sqrt{S^2-P^2}$). 10–12 oppgaver på eksamensnivå.
- **Oppgavesjangre:** H. Mønstereksempel: «En trefasemotor trekker 15 kW ved $\cos\varphi=0{,}8$ induktiv fra et 400 V-nett (linjespenning). (a) Finn linjestrøm og reaktiv effekt. (b) Dimensjonér delta-koblede kondensatorer som løfter effektfaktoren til 0,95.»
- **Typiske feil:** √3/√2-feil («severe»); $Q=S-P$ i stedet for $\sqrt{S^2-P^2}$ («very severe»); kompensering med $\omega L=1/(\omega C)$ når komponentene ikke er i parallell; blande linje-/fasestrøm i Δ.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (3.A √3-relasjoner og per-fase-ekvivalent · 3.B total $P/Q/S$ i balansert last · 3.C reaktiv kompensering til gitt $\cos\varphi$ · 3.D effektbalanse gjennom kjeden på eksamensnivå)

---

### Del 4 — Magnetisk krets og elektromagnetisme *(prioritet: KUNNE — 3/5)*

#### Kapittel 4.1: Reluktansnettverk, luftspalte og induktans

- **id:** `ttk4240-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-1-1`
- **kapitteltype:** teori
- **description:** Den magnetiske kretsen som analog til den elektriske — reluktans i serie/parallell, luftspalte-dominans, flukstetthet og induktans.
- **Eksamensbelegg:** Sjanger I i **3/5** (Kont 2016, Dec 2017, Kont 2017). Reluktans, luftspalte, $B=\phi/A$, strøm fra $NI=\mathcal{R}\phi$, $L=N^2/\mathcal{R}$. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.1 (elektrisk↔magnetisk analogi); magnetisk grunnlag fra [fysikk 2](/bok/fysikk2/fysikk2-4-1) *(lenk kun hvis kapitlet finnes)*.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **magnetomotorisk spenning** $\mathcal{F}=NI$; **reluktans** $\mathcal{R}=l/(\mu A)$, $\mu=\mu_r\mu_0$; **Hopkinsons lov** $NI=\mathcal{R}\phi$ (analog til $V=RI$); reluktans i **serie** $\mathcal{R}_{serie}=\sum\mathcal{R}_i$ og **parallell** $1/\mathcal{R}_{par}=\sum 1/\mathcal{R}_i$; **luftspalte** dominerer ofte total-$\mathcal{R}$ (lav $\mu$); flukstetthet $B=\phi/A$; **induktans** $L=N^2/\mathcal{R}=\lambda/i$, $\lambda=N\phi$; Faraday $e=N\,d\phi/dt$. **Utledning som kreves aktivt:** sett opp reluktansnettverket fra kjernegeometrien og finn $\phi$, $B$, $L$. **Skissekrav (S):** magnetisk kretsdiagram (kjerne, vikling, luftspalte) og dets reluktans-ekvivalent.
- **Oppgavesjangre:** I. Mønstereksempel: «En jernkjerne med middelveilengde $l=0{,}4$ m, tverrsnitt $A=4\,\mathrm{cm}^2$ og $\mu_r=2000$ har en luftspalte på 1 mm og $N=250$ vindinger. Finn total reluktans, strømmen som gir $B=1{,}0$ T, og induktansen.»
- **Typiske feil:** Glemme luftspaltens dominans; feil $\mu=\mu_r\mu_0$; blande serie/parallell-reluktans; feil areal for $B$; glemme $N^2$ i $L$.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Gjensidig induktans og dot convention (sjanger I)

- **id:** `ttk4240-4-2` · **number:** 4.2 · **estimatedMinutes:** 70 · **prerequisites:** `ttk4240-4-1`
- **kapitteltype:** teori
- **description:** Gjensidig induktans via superposisjon og prikk-konvensjonen som avgjør fortegnet — fagets vanskeligste enkeltferdighet.
- **Eksamensbelegg:** Sjanger I, topp-diskriminatoren, i Dec 2017-2 (og jernkjerne/trafo i Kont 2017). **Dot convention er en av de vanskeligste deloppgavene; mange svarte feil** — prikken bestemmes av fluksretning, ikke definert strøm-/spenningsretning. Prioritet: **kunne** (avgjør topp).
- **Forkunnskaper/kryssbok:** kap. 4.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **gjensidig induktans** $M=N_1\phi_1/i_2$ via superposisjon; koblede spoler $v_1=L_1\,di_1/dt \pm M\,di_2/dt$, $v_2=\pm M\,di_1/dt+L_2\,di_2/dt$; **dot convention:** strøm inn i prikket ende i begge spoler ⇒ **addererende** fluks ⇒ **+M**; ellers **−M**; **prikken settes fra viklingsretning/fluksretning, ALDRI fra definert strøm-/spenningsretning**; koblingskoeffisient $k=M/\sqrt{L_1L_2}$, $0\le k\le1$; effektiv induktans for serie-hjelp/serie-motvirk $L=L_1+L_2\pm2M$. **Utledning som kreves aktivt:** bestem prikkene fra en gitt viklingsretning og skriv koblingslikningene med riktig fortegn. **Skissekrav (S):** koblede spoler med prikker og fluksretninger inntegnet.
- **Oppgavesjangre:** I. Mønstereksempel: «To spoler er viklet på samme kjerne slik at strøm inn i toppklemmen på begge gir fluks i samme retning. Sett prikkene, skriv koblingslikningene $v_1,v_2$ med riktig fortegn på $M$, og finn effektiv induktans når spolene kobles i serie-hjelp.»
- **Typiske feil:** Sette prikken fra strøm-/spenningsretning i stedet for fluksretning (den dokumenterte fella); feil fortegn på $M$-leddet; glemme $2M$ i serie; $k>1$.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (4.A reluktansnettverk med luftspalte · 4.B $B$, strøm og induktans fra kjernegeometri · 4.C gjensidig induktans med dot convention · 4.D blandet magnetisk krets på eksamensnivå)

---

### Del 5 — Transformatorer *(prioritet: KJENNE — 2/5)*

#### Kapittel 5.1: Ideell transformator og impedanstransformasjon

- **id:** `ttk4240-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ttk4240-4-1`, `ttk4240-2-1`
- **kapitteltype:** teori
- **description:** Omsetningsforhold, spenning/strøm-transformasjon og impedanstransformasjon $R/N^2$ — kompakt kjenne-kapittel.
- **Eksamensbelegg:** Sjanger M i **2/5** (Kont 2016 magnetkrets, Kont 2017 jernkjerne/trafo). Ideell trafo m/omsetningsforhold, impedanstransformasjon, effekt i last. Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 4.1 (magnetisk kobling), 2.1 (impedans).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **omsetningsforhold** $a=N_1/N_2$; **ideell trafo** $V_1/V_2=N_1/N_2=a$, $I_1/I_2=N_2/N_1=1/a$; effektbevaring $V_1I_1=V_2I_2$ (tapfri); **impedanstransformasjon** $Z_1=a^2 Z_2$ (en last $Z_2$ på sekundær ses som $a^2Z_2$ fra primær — «$R/N^2$»-relasjonen); anvendelse: tilpasning og spennings-/strømnivå. Nevn kort at reell trafo har vikling­motstand, lekkasjereaktans og magnetiseringsstrøm (kjenne). **Utledning som kreves aktivt:** vis $Z_1=a^2Z_2$ fra spennings-/strømforholdene. **Skissekrav (S):** trafo med primær/sekundær-vindingstall og last.
- **Oppgavesjangre:** M. Mønstereksempel: «En ideell trafo har $N_1:N_2=10:1$ og en last $Z_2=(3+j4)\,\Omega$ på sekundærsiden. Finn impedansen sett fra primærsiden og primærstrømmen ved 230 V primærspenning.»
- **Typiske feil:** $a$ i stedet for $a^2$ i impedanstransformasjon; snu omsetningsforholdet (opp/ned); blande primær-/sekundærstørrelser; glemme effektbevaring.
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 5:** 4 prøver (5.A omsetningsforhold spenning/strøm · 5.B impedanstransformasjon $a^2Z_2$ · 5.C effekt i last gjennom trafo · 5.D trafo koblet til AC-krets på eksamensnivå)

---

### Del 6 — Elektriske maskiner *(prioritet: PERFEKT — 5/5)*

#### Kapittel 6.1: DC-maskinen: emk, moment, klemmespenning og turtall

- **id:** `ttk4240-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `ttk4240-2-2`
- **kapitteltype:** teori
- **description:** DC-maskinens kjernerelasjoner $E_A=K\Phi\omega$ og $T=K\Phi I_a$, klemmespenning og turtall — med magnetiseringskurve og metning.
- **Eksamensbelegg:** Sjanger B i **alle sett med maskinoppgave** (Dec 2015-4, Dec 2017-1, Kont 2017-2). $E_A=K\Phi\omega$, $T=K\Phi I_a$, $V_T=E_A+R_aI_a$, turtall fra proporsjonalitet, magnetiseringskurve/metning (kvalitativt), shunt/separat magnetisering. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2 (effekt), 1.1 (krets); mekanikk $P=T\omega$, $\omega$ i rad/s.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **indusert emk** $E_A=K\Phi\omega$ ($\omega$ i rad/s); **utviklet moment** $T=K\Phi I_a$; **klemmespenning** $V_T=E_A+R_aI_a$ (motor) / $V_T=E_A-R_aI_a$ (generator); **ankerstrøm** $I_a=P_{shaft}/E_A$ (omtrentlig; se fella under); **turtall** fra $E_{A1}/E_{A2}=n_1/n_2$ ved konstant fluks; magnetiseringskurve og **metning** (kvalitativt: $\Phi$ flater ut ved høy $I_f$); shunt/separat magnetisering (feltkrets $R_f$, $L_f$); $\omega=2\pi n/60$ når $n$ er i rpm. **Utledning som kreves aktivt:** kombiner $E_A$-, $T$- og $V_T$-relasjonene for å finne turtall/strøm. **Skissekrav (S):** maskinskjema med anker, feltkrets ($R_f$, $L_f$) og $R_a$; magnetiseringskurve.
- **Oppgavesjangre:** B. Mønstereksempel: «En separatmagnetisert DC-motor har $R_a=0{,}5\,\Omega$, $V_T=240$ V og trekker $I_a=20$ A ved $n=1200$ rpm. Finn $E_A$, konstanten $K\Phi$, det utviklede momentet og turtallet hvis lasten øker $I_a$ til 30 A ved samme fluks.»
- **Typiske feil:** $\omega$ i rpm i stedet for rad/s; anta $P_{terminal}=E_AI_a$ (klemme-effekt ≠ akseleffekt — glem ikke $R_aI_a^2$-tap); feil fortegn $V_T=E_A\pm R_aI_a$ (motor/generator); overse metning.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.2: Asynkronmaskinen: moment-turtallskurve, slip og poler

- **id:** `ttk4240-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `ttk4240-6-1`, `ttk4240-3-1`
- **kapitteltype:** teori
- **description:** Induksjonsmotorens moment-turtallskurve med markerte punkter, slip, poler og motorvalg mot lastkurve.
- **Eksamensbelegg:** Sjanger C i Dec 2015-3, Dec 2016-2. Moment-turtallskurve (synkronturtall, $s=0/s=1$, startmoment, driftsområde), ingen moment ved synkronturtall, motorvalg (startmoment > lastmoment), poler fra $\omega_s$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1, 3.1 (trefase forsyner asynkronmotoren).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **synkronturtall** $\omega_s=2\cdot(2\pi f)/p=4\pi f/p$ (rad/s), $n_s=120f/p$ (rpm); **slip** $s=(\omega_s-\omega_{mek})/\omega_s$, $\omega_{mek}=(1-s)\omega_s$; $s=1$ ved start, $s=0$ ved synkronturtall (**ingen moment der**); **moment-turtallskurven** med startmoment, kippmoment (maks) og stabilt driftsområde; **driftspunkt** = skjæring maskinkurve ∩ lastkurve; **motorvalg:** startmoment > lastmoment ved $s=1$. **Utledning som kreves aktivt:** finn driftspunkt grafisk og antall poler fra oppgitt $\omega_s$ og $f$. **Skissekrav (S):** moment-turtallskurve med $\omega_s$, $s=0/s=1$, startmoment og lastkurve-skjæring markert.
- **Oppgavesjangre:** C. Mønstereksempel: «En 4-pols asynkronmotor forsynes fra 50 Hz. (a) Finn synkronturtallet. (b) Ved 1440 rpm — hva er slippen? (c) Skisser moment-turtallskurven og markér startmoment og driftspunkt mot en konstant lastmoment-kurve. (d) Begrunn hvilken av to motorer som kan starte lasten.»
- **Typiske feil:** Poler vs. polpar (glemme faktor 2 i $\omega_s$); moment ≠ 0 ved synkronturtall; velge motor av feil grunn (kan gi 0 poeng); moment-turtallskurve uten markerte punkter (skisse-poeng tapt).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 6.3: Synkronmaskin, nettilkobling og vindturbin (MPPT)

- **id:** `ttk4240-6-3` · **number:** 6.3 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-6-2`
- **kapitteltype:** teori
- **description:** Synkrongenerator, poler fra fast nettfrekvens, vindturbin-virkningsgrad og MPPT — den fornybare røde tråden.
- **Eksamensbelegg:** Sjanger D i Dec 2015-3, Dec 2016-2, Dec 2017-3. Poler fra nettfrekvens og mek. turtall, MPPT-forklaring, virkningsgrad = produsert/tilgjengelig ($P_{wind}=k v^3$), maks reaktiv effekt fra inverter $Q=\sqrt{S^2-P^2}$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.2, 3.1 (trefasenett).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **$f_{el}=(p/2)f_{mek}$** — poler fra fast nettfrekvens og mek. turtall (faktor 2!); **synkrongenerator** låst til nettfrekvens; **vindeffekt** $P_{wind}=k v^3$ (kube av vindhastighet); **virkningsgrad** $\eta=P_{produsert}/P_{tilgjengelig}$; **MPPT (*maximum power point tracking*):** varier turtall/duty-cycle for å ligge på maks effektpunkt når vinden endres — begrunn hvorfor en frekvensomformer (likeretter+inverter), ikke gir, trengs for variabelt turtall; **maks reaktiv effekt fra inverter** $Q_{max}=\sqrt{S^2-P^2}$ ved gitt tilsynelatende grense $S$. **Utledning som kreves aktivt:** finn polantall fra $f_{mek}$ og nett-$f$; regn $\eta$ og $Q_{max}$. **Skissekrav (S):** kjede vindturbin → generator → likeretter → inverter → nett.
- **Oppgavesjangre:** D. Mønstereksempel: «En vindturbin driver en synkrongenerator som skal levere til et 50 Hz-nett ved mekanisk turtall 375 rpm. (a) Hvor mange poler? (b) Ved $P_{wind}=2{,}0$ MW tilgjengelig og $\eta=0{,}45$: hvor mye leveres? (c) Om inverteren tåler $S=1{,}0$ MVA og leverer 0,9 MW aktivt, hvor mye reaktiv effekt kan den gi nettet?»
- **Typiske feil:** Glemme faktor 2 (poler vs polpar); gir i stedet for frekvensomformer for variabelt turtall (få poeng); $Q=S-P$ i stedet for $\sqrt{S^2-P^2}$; blande produsert/tilgjengelig i $\eta$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.4: Transient turtall: linearisering av moment-turtallskurven

- **id:** `ttk4240-6-4` · **number:** 6.4 · **estimatedMinutes:** 55 · **prerequisites:** `ttk4240-6-2`
- **kapitteltype:** teori
- **description:** Fra moment-turtallskurve til 1.-ordens ODE for turtallet ved en lastendring — bindeleddet til Laplace (Del 8).
- **Eksamensbelegg:** Sjanger C/G-hybrid i Dec 2016-2 (skiheis-transient). Lineariser moment-turtallskurven rundt driftspunktet → 1.-ordens ODE for $\omega(t)$ ved lastendring; tidskonstant. Prioritet: **perfekt** (bindeledd til Del 8).
- **Forkunnskaper/kryssbok:** kap. 6.2; Newtons rotasjonslov $T_{mot}-T_{last}=J\,d\omega/dt$; 1.-ordens ODE fra [TMA4110](/bok/tma4110/tma4110-1-1) *(lenk kun hvis kapitlet finnes)*.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: rotasjonslikningen $J\,d\omega/dt=T_{mot}(\omega)-T_{last}$; **linearisér** maskin- og lastmoment rundt driftspunktet ($T_{mot}\approx T_0-b(\omega-\omega_0)$) → **1.-ordens ODE** $J\,d\omega/dt=-b\,\Delta\omega+\Delta T$; løsning $\omega(t)=\omega_\infty+(\omega_0-\omega_\infty)e^{-t/\tau}$, **tidskonstant** $\tau=J/b$; nytt driftspunkt etter lastendring. **Utledning som kreves aktivt:** hele kjeden fra kurve → linearisering → ODE → $\omega(t)$. **Skissekrav (S):** $\omega(t)$-forløp (eksponentiell overgang mellom to driftspunkt) med $\tau$ markert.
- **Oppgavesjangre:** C/G. Mønstereksempel: «En asynkronmotor med treghetsmoment $J=5\,\mathrm{kg\,m^2}$ driver en heis. Lasten øker brått. Lineariser moment-turtallskurven rundt driftspunktet, sett opp differensiallikningen for $\omega(t)$, finn tidskonstanten og skisser turtallsforløpet.»
- **Typiske feil:** Feil fortegn i lineariseringen (ustabilt); glemme treghetsmomentet $J$; blande tidskonstant og sluttverdi; ikke identifisere nytt driftspunkt.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 6.5: Drill: maskinoppgaven (sjanger B/C/D)

- **id:** `ttk4240-6-5` · **number:** 6.5 · **estimatedMinutes:** 95 · **prerequisites:** `ttk4240-6-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets maskinoppgave — DC, asynkron og synkron/vind samlet, med moment-turtall-skisse og poler×2-disiplin.
- **Eksamensbelegg:** Sjanger B/C/D samlet (5/5). Varianter: DC-motor turtall/moment, asynkron moment-turtall + motorvalg + transient, synkron/vind poler + $\eta$ + $Q$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser maskintype; 2) DC → $E_A=K\Phi\omega$, $T=K\Phi I_a$, $V_T=E_A\pm R_aI_a$ ($\omega$ i rad/s); 3) asynkron → $\omega_s$ (**poler×2**), slip, moment-turtall-skisse, driftspunkt/motorvalg med begrunnelse; 4) synkron/vind → $f_{el}=(p/2)f_{mek}$, $\eta$, $Q=\sqrt{S^2-P^2}$; 5) transient → linearisér → ODE → $\omega(t)$. Gjennomregnet eksamenscase med sensor-margnotater (poler×2, motorvalg-begrunnelse, skisse-poeng, klemme≠akseleffekt). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** B/C/D (+ S). Mønstereksempel (deloppgavekjede): «En vindturbin driver en 6-pols synkrongenerator mot 50 Hz-nett. (a) Finn mekanisk turtall. (b) Skisser en asynkronmotors moment-turtallskurve og markér driftspunktet mot lasten. (c) *Bruk $s=0{,}03$ hvis du ikke fant driftspunktet* — finn mekanisk turtall. (d) Begrunn hvorfor variabelt turtall krever frekvensomformer, ikke gir.»
- **Typiske feil:** Hele §5-repertoaret for maskiner: poler×2, motorvalg av feil grunn (0 poeng), $\omega$ i rpm i rad/s-formel, moment-turtall uten markerte punkter, gir vs. frekvensomformer.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A DC-maskin: emk, moment, turtall, klemmespenning · 6.B asynkron moment-turtallskurve + slip + motorvalg m/skisse · 6.C synkron/vind: poler, $\eta$, $Q$ m/MPPT · 6.D transient turtall via linearisering + blandet maskin på eksamensnivå)

---

### Del 7 — Kraftelektronikk *(prioritet: PERFEKT — 5/5)*

#### Kapittel 7.1: DC-DC-omformer: buck/boost og duty-cycle

- **id:** `ttk4240-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-1-1`
- **kapitteltype:** teori
- **description:** Buck og boost, gjennomsnittsspenning som areal under bølgeformen, og duty-cycle-relasjonene — med kretsdiagram, aldri boks.
- **Eksamensbelegg:** Sjanger E i Dec 2015-4, Dec 2016-4 (PV/MPPT), Kont 2017-2. No-load-turtall via $V_a=k V_{dc}$, gjennomsnittsspenning som areal, buck $D=V_{out}/V_{in}$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; kap. 0.2 (skissehåndverk).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **tastforhold/duty-cycle** $D=t_{on}/T$; **gjennomsnittsspenning** som areal under bølgeformen over én periode; **buck** $V_{out}=D\,V_{in}$; **boost** $V_{out}=V_{in}/(1-D)$; anvendelse mot DC-motor ($V_a=D\,V_{dc}$ → tomgangsturtall); PV/MPPT-kobling (juster $D$ for maks effekt). Nevn bryterens rolle (transistor + diode). **Utledning som kreves aktivt:** utled $V_{out}=D V_{in}$ fra gjennomsnitt/volt-sekund-balanse. **Skissekrav (S):** **kretsdiagram med bryter, diode, spole og last** (ALDRI «boks») + utgangsspenningens bølgeform.
- **Oppgavesjangre:** E. Mønstereksempel: «En buck-omformer mates fra 48 V og skal gi 18 V ut. (a) Finn nødvendig duty-cycle. (b) Tegn kretsdiagrammet med bryter, diode og spole. (c) Hvis den mater en DC-motor med $k=0{,}1$ V·s/rad, finn tomgangsturtallet.»
- **Typiske feil:** Tegne omformeren som «boks» (0 poeng på skisse); bytte buck/boost-formel; feil $D$-definisjon; glemme at gjennomsnitt = areal, ikke topp.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.2: Induktansdimensjonering og ON/OFF-tilstander (bølgeform + ODE)

- **id:** `ttk4240-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `ttk4240-7-1`
- **kapitteltype:** teori
- **description:** ON- og OFF-tilstandene med hvert sitt kretsdiagram og hver sin diff.likning for $i_L$, spolestrøm/-spenning over én periode og ripple-dimensjonering av spolen.
- **Eksamensbelegg:** Sjanger E, den tunge varianten: ON/OFF-tilstander med egne kretsdiagram og ODE for $i_a/i_L$, dimensjonér induktans fra tillatt ripple $\Delta I_L$, tegn spolespenning/-strøm over én periode. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1; $v_L=L\,di_L/dt$ (kap. 2.1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **ON-tilstand** (bryter lukket) og **OFF-tilstand** (bryter åpen, diode leder) — hver med **eget kretsdiagram** og **egen diff.likning** $L\,di_L/dt=v_L$; **spolestrøm** stiger lineært i ON, faller i OFF (kontinuerlig ledning); **spolespenning MÅ gå negativ i OFF** (volt-sekund-balanse: $\langle v_L\rangle=0$); **ripple** $\Delta I_L=\dfrac{V_{in}-V_{out}}{L}\,t_{on}$ → **dimensjonér** $L$ fra tillatt $\Delta I_L$. **Utledning som kreves aktivt:** sett opp ODE i hver tilstand og finn $\Delta I_L$. **Skissekrav (S):** ON- og OFF-kretsdiagram + $i_L(t)$ (trekant) og $v_L(t)$ (går negativ) over én periode.
- **Oppgavesjangre:** E. Mønstereksempel: «For buck-omformeren i 7.1: (a) tegn kretsen i ON- og OFF-tilstand, (b) sett opp diff.likningen for spolestrømmen i hver tilstand, (c) skisser $i_L$ og $v_L$ over én periode, (d) dimensjonér $L$ slik at strømrippelen er under 0,5 A ved 20 kHz.»
- **Typiske feil:** Bølgeform der spolespenningen ikke går negativ i OFF (skisse-poeng tapt); bare én tilstand tegnet; feil fortegn i ODE; ripple-formel med feil tid ($t_{on}$ vs $T$).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 7.3: Diode-likeretter med trekantspenning

- **id:** `ttk4240-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `ttk4240-2-2`
- **kapitteltype:** teori
- **description:** Diode-likeretter, $v_{dc}=|v_{ac}|$, RMS av en trekantbølge og gjennomsnittseffekt fra DC- eller AC-siden.
- **Eksamensbelegg:** Sjanger F (likeretter-delen) i Kont 2017-4. $v_{dc}=|v_{ac}|$, $i_{ac}=I_{dc}\,\mathrm{sgn}(v_{ac})$, gjennomsnittseffekt fra DC/AC-siden, **RMS av trekant $=V_p/\sqrt3$**. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2 (effekt), 0.2 (bølgeform-skisse).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **ideell diode** (leder én vei); **fullbro-likeretter** $v_{dc}=|v_{ac}|$; strøm-refleksjon $i_{ac}=I_{dc}\,\mathrm{sgn}(v_{ac})$; **gjennomsnitt og RMS av bølgeformer** — spesielt **RMS av en trekantbølge $=V_p/\sqrt3$**; effektbalanse (gjennomsnittseffekt lik fra AC- og DC-siden, tapfri). **Utledning som kreves aktivt:** regn gjennomsnitt/RMS ved integrasjon av bølgeformen; effekt fra begge sider. **Skissekrav (S):** likeretter-kretsdiagram + inn-/utgangsbølgeform (likerettet).
- **Oppgavesjangre:** F. Mønstereksempel: «En trekantformet vekselspenning med toppverdi 60 V likerettes i en fullbro. (a) Skisser $v_{dc}(t)$. (b) Finn RMS-verdien av trekanten. (c) Finn gjennomsnittseffekten levert til en resistiv last på 10 Ω.»
- **Typiske feil:** Bruke $V_p/\sqrt2$ (sinus-RMS) på en trekant; glemme absoluttverdi ved fullbro; effekt fra feil side; ideell-diode-antakelser uteglemt.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.4: Inverter til nett og modulasjonsindeks

- **id:** `ttk4240-7-4` · **number:** 7.4 · **estimatedMinutes:** 60 · **prerequisites:** `ttk4240-7-3`, `ttk4240-3-1`
- **kapitteltype:** teori
- **description:** Vekselretter (inverter) fra DC til enfase/trefase-nett, modulasjonsindeks og reaktiv effekt til nettet.
- **Eksamensbelegg:** Sjanger F (inverter-delen) i Kont 2016-3, Dec 2016-2, Dec 2017-3. Inverter til trefasenett, $m=\sqrt2 V_{ac}/V_{dc}$ (enfase), trefase $m=2\sqrt2 V_{LL}/(\sqrt3 V_{dc})$, reaktiv effekt til nett. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.3, 3.1 (trefasenett), 6.3 (vind-kjede).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **inverter/vekselretter** DC→AC; **modulasjonsindeks** enfase $m=\sqrt2\,V_{ac}/V_{dc}$, trefase $m=2\sqrt2\,V_{LL}/(\sqrt3\,V_{dc})$ (fra formelarket); minste $V_{dc}$ for ønsket $V_{ac}$ ($m\le1$ lineært område); levere aktiv og reaktiv effekt til nett ($Q_{max}=\sqrt{S^2-P^2}$); frekvensomformer = likeretter + DC-mellomledd + inverter (for variabelt turtall). **Utledning som kreves aktivt:** finn nødvendig $V_{dc}$ fra ønsket nettspenning og $m$. **Skissekrav (S):** inverter-blokk i kjeden DC-mellomledd → inverter → trefasenett (med komponenter, ikke boks).
- **Oppgavesjangre:** F. Mønstereksempel: «En inverter skal levere til et 400 V trefasenett (linjespenning). (a) Finn minste DC-mellomleddspenning i lineært område. (b) Ved $S=500$ kVA og $P=450$ kW: hvor mye reaktiv effekt kan leveres? (c) Forklar hvorfor en vindturbin med variabelt turtall trenger frekvensomformer.»
- **Typiske feil:** Feil modulasjonsformel (enfase vs trefase, √3-plassering); $m>1$ uten kommentar (overmodulasjon); $Q=S-P$; gir/omformer-forvekslingen.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.5: Drill: kraftelektronikkoppgaven (sjanger E/F)

- **id:** `ttk4240-7-5` · **number:** 7.5 · **estimatedMinutes:** 95 · **prerequisites:** `ttk4240-7-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets kraftelektronikk-oppgave — buck/boost, ON/OFF-bølgeform, likeretter og inverter samlet, med skissedisiplin i sentrum.
- **Eksamensbelegg:** Sjanger E/F samlet (5/5). Varianter: buck duty-cycle + ripple + bølgeform, DC-motor via omformer, diode-likeretter med trekant, inverter til nett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser omformertype (buck/boost/likeretter/inverter); 2) DC-DC → $D$, gjennomsnitt som areal, ON/OFF-ODE, ripple → $L$; 3) tegn **kretsdiagram med komponenter** (ikke boks) + bølgeform (spolespenning negativ i OFF); 4) likeretter → $|v_{ac}|$, RMS av trekant $=V_p/\sqrt3$, effektbalanse; 5) inverter → modulasjonsindeks, $V_{dc}$, $Q$. Gjennomregnet eksamenscase med sensor-margnotater (skisse-poeng, negativ off-spenning, RMS-trekant, boks=0). 12–15 oppgaver på eksamensnivå.
- **Oppgavesjangre:** E/F (+ S). Mønstereksempel (deloppgavekjede): «En PV-panel mater via en buck-omformer en DC-last. (a) Finn $D$ for gitt inn/ut-spenning. (b) Tegn ON- og OFF-kretsen. (c) *Bruk $\Delta I_L=0{,}8$ A hvis du ikke løste b)* — dimensjonér $L$. (d) Skisser $i_L$ og $v_L$ over én periode.»
- **Typiske feil:** Hele §5-repertoaret for kraftelektronikk: boks i stedet for kretsdiagram (0 poeng), spolespenning som ikke går negativ, $V_p/\sqrt2$ på trekant, buck/boost-forveksling, gir vs. frekvensomformer.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A buck/boost duty-cycle + kretsdiagram · 7.B ON/OFF-tilstander, bølgeform og ripple-dimensjonering · 7.C diode-likeretter med trekantspenning og RMS · 7.D inverter/modulasjon + blandet kraftelektronikk på eksamensnivå)

---

### Del 8 — Laplace, overføringsfunksjon og transientrespons *(prioritet: KUNNE — 4/5)*

#### Kapittel 8.1: Laplace og overføringsfunksjon fra krets

- **id:** `ttk4240-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `ttk4240-2-1`
- **kapitteltype:** teori
- **description:** Fra krets til overføringsfunksjon $H(s)$ via impedans i $s$-planet — grunnlaget for spranganalyse.
- **Eksamensbelegg:** Sjanger G i **4/5** (Dec 2015-2, Dec 2015-4d, Dec 2016-2c, Kont 2017-2d, Dec 2017-4). Utled $H(s)=V(s)/I(s)$ fra krets. Prioritet: **kunne** (avgjør B mot C).
- **Forkunnskaper/kryssbok:** kap. 2.1; Laplace-transform fra [TMA4135](/bok/tma4135/tma4135-1-1) *(lenk kun hvis kapitlet finnes)*.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: impedans i $s$-planet $Z_R=R$, $Z_L=sL$, $Z_C=1/(sC)$; **overføringsfunksjon** $H(s)=\dfrac{\text{ut}(s)}{\text{inn}(s)}$ satt opp med spennings-/strømdeler i $s$; poler og nullpunkter (fysisk tolkning: poler = tidskonstanter); Laplace-par fra formelarket ($u(t)\leftrightarrow1/s$, $e^{-at}\leftrightarrow1/(s+a)$, $\sin/\cos$, s-shift). **Utledning som kreves aktivt:** utled $H(s)$ for en RC/RLC-krets fra kretsen. **Skissebruk:** pol-nullpunkt-diagram (kvalitativt).
- **Oppgavesjangre:** G. Mønstereksempel: «Utled overføringsfunksjonen $H(s)=V_{ut}(s)/V_{inn}(s)$ for en serie-RC-krets der utgangen tas over kondensatoren, og identifiser polen og tidskonstanten.»
- **Typiske feil:** Feil impedans i $s$ ($sL$ vs $1/(sC)$); glemme initialbetingelser der de trengs; forveksle $H(s)$-teller/nevner; ikke tolke polen fysisk.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: Sprangrespons via delbrøk og steady-state via $s=j\omega$

- **id:** `ttk4240-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** `ttk4240-8-1`
- **kapitteltype:** teori
- **description:** Invers Laplace med delbrøkoppspalting for sprangrespons, og gjenbruk av $H(s)$ ved $s=j\omega$ for stasjonær respons — pluss 2.-ordens RLC-beredskap.
- **Eksamensbelegg:** Sjanger G, kjernen: sprangrespons via invers Laplace + delbrøk, steady-state ved $s=j\omega$ (fasor), 1.-ordens ODE for turtall/strøm med initialbetingelse. 2.-ordens RLC forekommer sjeldnere (beredskap). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 8.1, 6.4 (1.-ordens ODE).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **sprangrespons** $Y(s)=H(s)\cdot\dfrac1s$ → **delbrøkoppspalting** → invers Laplace → $y(t)$; **1.-ordens** form $y(t)=y_\infty+(y_0-y_\infty)e^{-t/\tau}$, $\tau$ fra polen; **steady-state via $s=j\omega$**: den stasjonære responsen på $\cos(\omega t)$ er $|H(j\omega)|\cos(\omega t+\angle H(j\omega))$ (fasor-koblingen tilbake til Del 2); **2.-ordens RLC** (beredskap): dempet/udempet, egenfrekvens $\omega_0=1/\sqrt{LC}$, dempningsforhold. **Utledning som kreves aktivt:** full sprangrespons for 1.-ordens krets via delbrøk; stasjonær respons via $s=j\omega$. **Skissekrav (S):** $y(t)$-forløp (eksponentiell/oscillerende) med $\tau$ eller $\omega_0$ markert.
- **Oppgavesjangre:** G. Mønstereksempel: «For $H(s)$ fra 8.1: (a) finn sprangresponsen $v_{ut}(t)$ ved delbrøk og invers Laplace. (b) Finn den stasjonære responsen når inngangen er $10\cos(100t)$ V ved å sette $s=j\omega$. (c) Skisser forløpet.»
- **Typiske feil:** Feil delbrøkkoeffisienter; glemme initialbetingelse; blande transient og stasjonær del; la $j$ bli stående etter $s=j\omega$-tilbaketransform (ingen $j$ i tidsdomenet); rad vs grad i fasevinkel.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.3: Drill: transient- og overføringsfunksjonsoppgaven (sjanger G)

- **id:** `ttk4240-8-3` · **number:** 8.3 · **estimatedMinutes:** 85 · **prerequisites:** `ttk4240-8-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: fra krets til $H(s)$ til sprangrespons og stasjonær respons, med delbrøk- og «ingen j»-disiplin.
- **Eksamensbelegg:** Sjanger G samlet (4/5). Varianter: $H(s)$ fra RC/RLC, sprangrespons via delbrøk, steady-state via $s=j\omega$, 1.-ordens ODE for turtall/strøm. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) sett opp $H(s)$ med impedans i $s$; 2) sprangrespons $Y(s)=H(s)/s$ → delbrøk → invers Laplace; 3) skriv 1.-ordens svar med $\tau$; 4) stasjonær respons via $s=j\omega$ (fasor, **ingen j i sluttsvar, radianer**); 5) tolk/skisser. Gjennomregnet eksamenscase med sensor-margnotater (delbrøk, initialbetingelse, ingen j). 10–14 oppgaver på eksamensnivå.
- **Oppgavesjangre:** G. Mønstereksempel (deloppgavekjede): «(a) Utled $H(s)$ for en RL-krets. (b) Finn strømmens sprangrespons ved en spenningssprang. (c) *Bruk $\tau=2$ ms hvis du ikke fant polen* — hvor lang tid til 95 % av sluttverdi? (d) Finn stasjonær strøm ved 50 Hz sinus.»
- **Typiske feil:** Hele sjanger G-repertoaret: delbrøkfeil, glemt initialbetingelse, j i tidsdomenet, rad vs grad, blande transient/stasjonær.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A $H(s)$ fra krets med poltolkning · 8.B sprangrespons via delbrøk og invers Laplace · 8.C stasjonær respons via $s=j\omega$ · 8.D 1.-ordens ODE for turtall/strøm + blandet transient på eksamensnivå)

---

### Del 9 — Op-amp, filtre og resonans *(prioritet: KJENNE — 2/5)*

#### Kapittel 9.1: Ideell operasjonsforsterker og aktivt filter

- **id:** `ttk4240-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `ttk4240-2-1`
- **kapitteltype:** teori
- **description:** Ideell op-amp, virtuell jord, integrator og aktivt høypassfilter — kompakt kjenne-kapittel som avgjør topp.
- **Eksamensbelegg:** Sjanger J i **2/5** (Kont 2016-2, Dec 2016-3). Ideell op-amp, virtuell jord ($v_+=v_-$), utled $v_{ut}$ (integrator/summasjon), aktivt høypass (knekkfrekvens $\omega_c$, båndpassforsterkning, metning/$V_{cc}$). Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 1.1, 2.1 (impedans).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **ideell op-amp** (uendelig forsterkning/inngangsimpedans, null inngangsstrøm); **virtuell jord** $v_+=v_-$; utled $v_{ut}$ for **inverterende forsterker** $v_{ut}=-\dfrac{R_2}{R_1}v_{inn}$, **integrator** $v_{ut}=-\dfrac1{RC}\int v_{inn}\,dt$ (og $V_{ut}(s)=-\dfrac1{RCs}V_{inn}(s)$), **summasjon**; **aktivt høypassfilter** (impedanser $Z_1,Z_2$): **knekkfrekvens** $\omega_c=1/(R_1C)$, **båndpassforsterkning** $R_2/R_1$; **metning**: minste $V_{cc}$ for lineær drift $=$ maks forsterkning × inngangsamplitude. **Utledning som kreves aktivt:** utled $v_{ut}$ via virtuell jord for én konfigurasjon. **Skissekrav (S):** op-amp-kretsdiagram + frekvensrespons (Bode-skisse, knekkfrekvens markert).
- **Oppgavesjangre:** J. Mønstereksempel: «Et aktivt høypassfilter har $R_1=10\,\mathrm{k}\Omega$ i serie med $C=100$ nF på inngangen og $R_2=100\,\mathrm{k}\Omega$ i tilbakekoblingen. Finn knekkfrekvensen og forsterkningen i båndpass, og angi minste $V_{cc}$ for 0,2 V inngangsamplitude.»
- **Typiske feil:** Glemme virtuell jord; feil fortegn (inverterende); knekkfrekvens fra feil $RC$; regne $V_{cc}$ fra feil forsterkning; blande høy-/lavpass.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 9.2: Passivt filter, frekvensrespons og LC-resonans

- **id:** `ttk4240-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `ttk4240-2-1`
- **kapitteltype:** teori
- **description:** Klassifiser passive filtre fra oppførsel ved lav/høy frekvens, LC-resonans og valg av komponent som minimerer/maksimerer amplitude.
- **Eksamensbelegg:** Sjanger L i **2/5** (Dec 2016-3, Kont 2017-1). Filtertype-gjenkjenning (lav/høy/bånd/båndstopp) fra oppførsel ved $\omega\to0$/$\omega\to\infty$, LC-resonans $\omega_0=1/\sqrt{LC}$, velg C som minimerer/maksimerer amplitude ved gitt frekvens. Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 2.1 (impedans/frekvensavhengighet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **filterklassifisering** ved grenser: $\omega\to0$ ($Z_C\to\infty$, $Z_L\to0$) og $\omega\to\infty$ (omvendt) → avgjør lav-/høy-/bånd-/båndstopp; **LC-resonans** $\omega_0=1/\sqrt{LC}$ (serieres.: min impedans; parallellres.: maks impedans); **velg komponent** (f.eks. C) som minimerer/maksimerer amplitude ved gitt frekvens (sett imaginærdel eller total-Z til ekstremal); knekkfrekvens $\omega_c=1/(RC)$ / $R/L$. **Utledning som kreves aktivt:** klassifiser et gitt filter ledd for ledd fra grenseoppførsel og finn $\omega_0$. **Skissekrav (S):** amplituderespons $|H(j\omega)|$ (Bode-skisse) med filtertype og resonans markert.
- **Oppgavesjangre:** L. Mønstereksempel: «En serie-LC står mellom inngang og en resistiv last. (a) Klassifiser filteret fra oppførselen ved lav og høy frekvens. (b) Ved hvilken frekvens er utgangsamplituden størst? (c) Velg C som legger resonansen på 1 kHz for gitt L.»
- **Typiske feil:** Feil filtertype fra grenseoppførsel; blande serie-/parallellresonans (min vs maks impedans); feil $\omega_0$; sette $\omega L=1/(\omega C)$ uten å sjekke koblingen.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (9.A ideell op-amp: virtuell jord, integrator/inverterende · 9.B aktivt filter: knekkfrekvens, forsterkning, metning · 9.C passivt filter-klassifisering fra grenseoppførsel · 9.D LC-resonans og komponentvalg på eksamensnivå)

---

### Del 10 — Reguleringssløyfer (konseptuelt) *(prioritet: KJENNE — 0/5 i arkivet, verifiser)*

#### Kapittel 10.1: Reguleringssløyfa konseptuelt: tilbakekobling og motorstyring

- **id:** `ttk4240-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `ttk4240-8-2`, `ttk4240-6-1`
- **kapitteltype:** teori
- **description:** Reguleringssløyfa i ord — tilbakekobling, referanse, avvik og pådrag i motorstyring — konseptuelt beredskapskapittel (fraværende i arkivet).
- **Eksamensbelegg:** **0/5 i arkivet.** Reguleringsdelen står i emnets læringsutbytte (labdel), men opptrer IKKE som skriftlig eksamensoppgave i noe av de fem settene. Bygges **konseptuelt, lav dybde**. *(verifiser mot ferske sett — analysen §7 flagger at delen kan løftes inn i skriftlig eksamen framover.)* Prioritet: **kjenne**.
- **Forkunnskaper/kryssbok:** kap. 8.2 (overføringsfunksjon/transientrespons), 6.1 (motor som prosess).
- **Innholdskontrakt:** BØR KJENNE TIL (konseptuelt): **tilbakekoblingssløyfe** — referanse $r$, avvik $e=r-y$, regulator, pådrag $u$, prosess (motor), måling $y$; hensikten (stabilitet, følge referanse, undertrykke forstyrrelser); **åpen vs. lukket sløyfe**; **P-regulator** kvalitativt (pådrag proporsjonalt med avvik) og hvorfor stasjonært avvik kan oppstå; kobling til motorstyring (turtallsregulering via omformerens duty-cycle/frekvens); overføringsfunksjon for lukket sløyfe $\dfrac{y}{r}=\dfrac{L(s)}{1+L(s)}$ (nevnes, ikke drilles). Ingen tung stabilitetsanalyse/kontrollerdesign. **Skissekrav (S):** blokkskjema av reguleringssløyfa (referanse → regulator → prosess → måling → tilbakekobling).
- **Oppgavesjangre:** kvalitativ (+ konseptuell G). Mønstereksempel: «Tegn blokkskjemaet for turtallsregulering av en DC-motor med tilbakekobling, og forklar i ord hva referanse, avvik og pådrag er, og hvorfor lukket sløyfe kan undertrykke lastforstyrrelser bedre enn åpen.»
- **Typiske feil:** Forveksle åpen/lukket sløyfe; blande referanse og måling; tegne blokkskjema uten tilbakekobling; overinvestere i stoff som ikke er testet (dette kapitlet er lav-dybde med vilje).
- **Quiz: 10 · Flashcards: 12**

**Prøve-kvote Del 10:** 4 prøver (10.A begreper: referanse/avvik/pådrag · 10.B åpen vs. lukket sløyfe · 10.C blokkskjema for motorstyring m/skisse · 10.D konseptuell tilbakekobling koblet til overføringsfunksjon) — alle på **konseptuelt** nivå; markeres *(verifiser)*.

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Sjangerkatalogen, skissesporet og 4-oppgavers-malen

- **id:** `ttk4240-11-1` · **number:** 11.1 · **estimatedMinutes:** 90 · **prerequisites:** `ttk4240-10-1`
- **kapitteltype:** drill
- **description:** Tverrgående drill på det som går igjen i alle oppgaver: de korte kvalitative delspørsmålene, skissene og «vis metoden»-disiplinen — pluss hvordan settet er bygd.
- **Eksamensbelegg:** Tverrgående — de kvalitative delspørsmålene (~20–25 % av poengene) og skissekravene (S) opptrer i **alle** oppgaver, uansett tema. Samler sjangerkatalogen A–M og skissesporet. Prioritet: **perfekt** (metaferdighet).
- **Innholdskontrakt:** Løsningsoppskrift for 4-oppgavers-malen: tidsbudsjett (4 t / 4 oppgaver), les hele oppgaven først (frikoblede deler), start med det du kan høste. Katalog over **kvalitative gjengangere** med modellsvar i 2–4 setninger (fordeler med trefase; kapasitiv vs. induktiv; hvorfor frekvensomformer ikke gir; hva slags filter; hvorfor ingen moment ved synkronturtall; hvorfor spolespenningen går negativ). **Skissekatalog** (S): de tre skissetypene (kretsdiagram / bølgeform / moment-turtall) med sjekkliste for markeringer som gir poeng. **Fallgruve-repetisjon** (0.2-katalogen). 12–15 blandede korte oppgaver (kvalitativ + skisse) på tvers av temaene.
- **Oppgavesjangre:** alle (kvalitativ + S). Mønstereksempel: «Nevn to fordeler med trefase framfor enfase (2–4 setninger), og skisser fasordiagrammet som viser $V_{LL}=\sqrt3 V_{ph}$.»
- **Typiske feil:** Essay i stedet for presist kortsvar (2–4 setninger); skisse uten poenggivende markeringer; hoppe over frikoblede deler; skrive konklusjon uten resonnement (0 poeng-fella).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 11.2: Øvingseksamen 1 — standard 4-oppgavers-sett

- **id:** `ttk4240-11-2` · **number:** 11.2 · **estimatedMinutes:** 240 · **prerequisites:** `ttk4240-11-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i standardmalen: AC-effekt, maskin, kraftelektronikk og en Laplace/transient-oppgave — frikoblede deler, formelark.
- **Eksamensbelegg/miks:** Standard 4-oppgavers-mal (à 25 %, frikoblede deler): **O1** AC-effekt fra tidsforløp/fasor, $P/Q/S$, kapasitiv/induktiv (A); **O2** DC- eller asynkronmaskin med moment-turtall-skisse (B/C + S); **O3** buck-omformer med ON/OFF-bølgeform og ripple (E + S); **O4** $H(s)$ + sprangrespons + steady-state via $s=j\omega$ (G). ~20–25 % korte kvalitative delspørsmål. Løsningsforslag som A-besvarelse med vektings-`tip` per deloppgave (0–25 %) og eksplisitt følgefeil-scaffolding. Typiske feil-note per oppgave.
- **Oppgavesjangre:** A, B/C, E, G (+ S, kvalitativ). Full standardmal.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 2 — fornybar innramming (vind/PV/MPPT)

- **id:** `ttk4240-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `ttk4240-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett kledd i den fornybare røde tråden — samme kjerne, virkelighetsnær innpakning rundt vindturbin, PV og nettilkobling.
- **Eksamensbelegg/miks:** Samme 4-oppgavers-mal, **fornybar innramming**: **O1** trefase-nettilkobling: $\sqrt3$-relasjoner, effektbalanse, reaktiv kompensering (H); **O2** synkron-/asynkrongenerator på vindturbin: poler ($f_{el}=(p/2)f_{mek}$), $\eta$, moment-turtall (C/D + S); **O3** PV-buck med MPPT + inverter til nett: duty-cycle, $Q_{max}=\sqrt{S^2-P^2}$, bølgeform (E/F + S); **O4** magnetisk krets / gjensidig induktans med dot convention i en generatorkontekst (I + S). ≥25 % kvalitative delspørsmål (MPPT, gir vs. frekvensomformer, dot convention-begrunnelse). Løsningsforslag som A-besvarelse med vektings-`tip`; note om at innrammingen er kosmetikk — identifiser standardsjangeren bak hver deloppgave.
- **Oppgavesjangre:** H, C/D, E/F, I (+ S, kvalitativ). Full mal, fornybar drakt.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 3 — nivå-3-tungt sett (op-amp/filter/Thevenin)

- **id:** `ttk4240-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `ttk4240-11-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett som i tillegg til de tre søylene tester nivå-3-stoffet tyngre — for den som sikter mot A.
- **Eksamensbelegg/miks:** Samme 4-oppgavers-mal, men med **tyngre nivå-3-innslag**: **O1** Thevenin/maks effektoverføring med kompleks $Z_{th}^*$ + AC-effekt (A/K); **O2** op-amp aktivt filter: virtuell jord, knekkfrekvens, metning + passivt filter-klassifisering (J/L + S); **O3** kraftelektronikk: diode-likeretter med trekantspenning (RMS $=V_p/\sqrt3$) + inverter (F + S); **O4** DC-maskin via DC-DC-omformer med transient turtall (B/E/G + S). Dekker sammen med 11.2–11.3 samtlige sjangre A–M minst én gang. Løsningsforslag som A-besvarelse med vektings-`tip` og kortsvar-disiplin på de kvalitative delene (2–4 setninger).
- **Oppgavesjangre:** A/K, J/L, F, B/E/G (+ S). Full mal + nivå-3-tyngde.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 11:** dekkes av de 3 øvingseksamenene (11.2–11.4) og den tverrgående drillen (11.1) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+12 = **26** | 14+16 = **30** |
| 1 | 1.1–1.2 | 16+14 = **30** | 16+14 = **30** |
| 2 | 2.1–2.4 | 22+26+14+14 = **76** | 24+26+14+8 = **72** |
| 3 | 3.1–3.2 | 18+16 = **34** | 20+16 = **36** |
| 4 | 4.1–4.2 | 20+20 = **40** | 24+22 = **46** |
| 5 | 5.1 | **12** | **14** |
| 6 | 6.1–6.5 | 22+22+18+12+16 = **90** | 24+24+22+12+8 = **90** |
| 7 | 7.1–7.5 | 20+22+16+16+16 = **90** | 22+22+16+16+8 = **84** |
| 8 | 8.1–8.3 | 18+18+12 = **48** | 22+20+8 = **50** |
| 9 | 9.1–9.2 | 14+14 = **28** | 16+16 = **32** |
| 10 | 10.1 | **10** | **12** |
| 11 | 11.1–11.4 | 16+6+6+6 = **34** | 18+0+0+0 = **18** |
| **Sum** | **33 kap.** | **518 ≥ 500 ✓** | **514 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvensen: de tre 5/5-søylene (Del 2 AC-effekt, Del 6
maskiner, Del 7 kraftelektronikk) bærer **256 av 518 quiz (~49 %)** og **246 av
514 flashcards (~48 %)** — omtrent halve boka, i tråd med at de utgjør ~2/3 av
eksamenspoengene og alltid opptrer. Nivå-2 (Del 3/4/8) får solid, men mindre
tetthet; nivå-3 (Del 5/9) og den ikke-testede reguleringsdelen (Del 10) får
kompakte kvoter. Flashcards er bevisst formel-/symbol- og **fallgruve-tunge**
(hele fallgruvekatalogen fra kap. 0.2 + hvert temas typiske feil som egne kort +
formelark-relasjonene), fordi faget har et stort, presist apparat av relasjoner,
enheter og fortegnsregler som må sitte automatisk selv om formlene deles ut.

### Prøver per del (4 per temadel 1–10, 40 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre (frikoblede deler à
~25 %) med løsningsforslag skrevet som A-besvarelse (metode vist, riktige enheter,
RMS/peak- og fortegns-disiplin, √3/√2, poler×2, ingen $j$ i tidsdomenet, dot
convention, poenggivende skisser) og delpoeng-`tip`. Prøvekapittel-id:
`ttk4240-<del>-prove`, chapterNumber `<del>.P`. Del 0 (metakart) og Del 11
(øvingseksamenene ER prøvene) har ingen separate delprøver. Prøvetitlene står i
hver dels **Prøve-kvote**-linje over.

### Øvingseksamener (3 komplette 4-timers sett — kap. 11.2–11.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (11.2) | Standard 4-oppgavers-sett | O1 AC-effekt (A), O2 maskin+moment-turtall (B/C+S), O3 buck+bølgeform (E+S), O4 Laplace/transient (G); ~20–25 % kvalitativt |
| Øvingseksamen 2 (11.3) | Fornybar innramming | O1 trefase-nett (H), O2 vind-generator poler/η (C/D+S), O3 PV-buck+MPPT+inverter (E/F+S), O4 magnetkrets/dot convention (I+S); ≥25 % kvalitativt |
| Øvingseksamen 3 (11.4) | Nivå-3-tungt (for A) | O1 Thevenin/maks effekt (A/K), O2 op-amp+passivt filter (J/L+S), O3 likeretter+inverter (F+S), O4 DC-maskin via omformer+transient (B/E/G+S) |

Til sammen dekker de tre settene + den tverrgående drillen (11.1) samtlige
sjangre **A–M** minst én gang, alle har **fire oppgaver à 25 %** med **frikoblede
deler** og forutsetter **formelarket**, og minst én oppgave i hvert sett krever en
poenggivende **skisse** (S) og minst én «show that…»-utledning.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, 100 %, fire oppgaver à 25 %,
   frikoblede deler, ingen flervalg, **formelark deles ut**, kalkulator),
   oppgavens indre form (kvalitativt → utledning → beregning/skisse) fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (AC-fasoranalyse/effekt, elektriske maskiner, kraftelektronikk —
   ~2/3 av poengene, alltid), *kunne* (Laplace/transient, trefase, elektromagnetisme/
   magnetisk krets), *kjenne* (op-amp/filter, Thevenin/maks effekt, transformator,
   passivt filter/resonans; regulering = konseptuell beredskap).
3. **4-oppgavers-malen og løsningsoppskriftene** — hvordan settet er bygd (O1 AC,
   O2 maskin, O3 kraftelektronikk, O4 rotasjon) og løsningsoppskriftene fra
   drillkapitlene (2.4, 3.2, 6.5, 7.5, 8.3, 11.1) i kortform.
4. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **hentes fra formelarket**; treningsråd: løs alltid
   oppgaver MED formelarket ved siden av (last det ned fra kap. 0.1) — boka trener
   *bruk, gjenkjenning og utledning*, ikke pugg.
5. **Skissesporet** — de tre poenggivende skissetypene (kretsdiagram / bølgeform /
   moment-turtall) med sjekkliste for hva som må markeres (kap. 0.2 + 11.1);
   huskeregelen: en omformer tegnet som «boks» gir 0 poeng.
6. **Sensorreglene** — metareglene: **vis metoden** (følgefeil straffes aldri;
   deloppgaver er frikoblet); **men riktig svar av feil grunn kan gi 0**;
   figuravlesning tolereres romslig (bruk tallet konsekvent videre); karakterskillene
   (bestått/middels/topp) fra kap. 0.1.
7. **Fallgruvekatalogen** — de faste feilene samlet, hver med henvisning til
   kapitlet som forebygger den: peak/RMS uten ½ → 2.2; fortegn på strømvinkel/$Q$
   → 2.2; √3/√2 og $Q=\sqrt{S^2-P^2}$ → 3.1/3.2; $\omega=2\pi f$ → 2.1; poler×2 →
   6.2/6.3; grader vs. radianer og **ingen j i tidsdomenet** → 2.1/8.2; **dot
   convention** (fluksretning) → 4.2; kondensator-kompensering (splitt real/imag) →
   3.2; klemme- vs. akseleffekt → 6.1; gir vs. frekvensomformer → 6.3/7.4; «boks»
   = 0 → 0.2/7.1.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → **2 (AC-søyle)** → 3 → 4 → 5 → **6 (maskin-søyle)** → **7
   (kraftelektronikk-søyle)** → 8 → 9 → 10 (konseptuelt, kort) → 11; de tre
   søylene (Del 2/6/7) prioriteres først og drilles hardest; de tre
   øvingseksamenene (11.2–11.4) de siste ukene under tidspress (240 min, med
   formelark).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `ttk4240` med alle 33
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen (obligatorisk
   — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under NTNU, navn
   «TTK4240 Industriell elektroteknikk».
2. **Del 0** (0.1 + 0.2) — etablerer sjangernavnene A–M, 4-oppgavers-malen,
   formelarket, skissesporet og fallgruvekatalogen som resten av boka refererer.
3. **Del 1** (DC-grunnlag) — brukes av alt annet.
4. **Del 2 (AC-søyle)** — nivå 1; 2.3 krever 1.2, 2.4 er drill etter 2.1–2.3.
5. **Del 3 → 4 → 5** (trefase bygger på 2.2; magnetisk krets før trafo; 5.1 krever
   4.1 + 2.1).
6. **Del 6 (maskin-søyle)** — 6.2 krever 3.1 (trefaseforsyning) + 6.1; 6.4 krever
   6.2; 6.5 er drill etter 6.1–6.4. Egen agent (stor del).
7. **Del 7 (kraftelektronikk-søyle)** — 7.3 krever 2.2, 7.4 krever 3.1 + 7.3;
   7.5 er drill. Egen agent (stor del).
8. **Del 8** (Laplace) — 8.1 krever 2.1, 8.2 krever 6.4 (1.-ordens ODE).
9. **Del 9** (op-amp/filter) og **Del 10** (regulering, konseptuelt, lav dybde —
   markér *(verifiser)*).
10. **Del 11 til slutt** — tverrgående drill (11.1) og de tre øvingseksamenene
    (11.2–11.4) gjenbruker hele boka; bygges av én agent som leser HELE skjelettet.
    Hver øvingseksamen har fire oppgaver à 25 %, frikoblede deler, formelark,
    minst én skisse og én «show that…».
11. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
    kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per temadel 1–10
    (`ttk4240-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
    fastsettes i BYGGEKONTRAKT.md (fase 3).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\mathbf{V}$, $\mathbf{I}$, $Z$, $S=P+jQ$, $\omega$,
      $\varphi$, $\mathcal{R}$, $\phi$, $\Phi$, $s$-plan, $\tau$, $D$, $m$, $\eta$).
- [ ] **Notasjons- og disiplinkonsistens (tekstsøk over alle ttk4240-filer):**
      RMS som standard (peak ⇒ ½ i $S$); induktiv ⇒ negativ strømvinkel ⇒ $Q>0$;
      $\omega=2\pi f$ skrevet ut; $f_{el}=(p/2)f_{mek}$ (poler×2); $V_{LL}=\sqrt3 V_{ph}$
      og $Q=\sqrt{S^2-P^2}$ (aldri $S-P$); **ingen $j$ i tidsdomenesvar**; radianer i
      $\cos(\cdot)$-argument; **dot convention fra fluksretning**; **forbudt som
      satsingsstoff** (kun i Del 10 som eksplisitt konseptuelt/beredskap): tung
      kontrollerdesign / stabilitetsanalyse / digital motorstyring.
- [ ] **Skissedisiplin:** hvert kraftelektronikk-, maskin- og kretskapittel har en
      **Skissekrav**-blokk; omformere/kretser tegnes som **kretsdiagram med
      komponenter**, ALDRI «boks»; bølgeformer viser spolespenning som **går
      negativ** i off-perioden; moment-turtallskurver har **markerte punkter**
      ($\omega_s$, $s=0/s=1$, startmoment, driftspunkt).
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen formler
      presenteres som puggestoff; formelarket gjengitt i kap. 0.1.
- [ ] **«Vis metoden»/følgefeil:** eksemplene og løsningsforslagene skriver
      definisjoner/likninger før innsetting og tar med mellomsteg; minst noen
      oppgaver har eksplisitt frikoblet scaffolding («If you did not solve b),
      use…»); løsningene viser at metode > sluttall.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag har SI-enhet på hvert
      tallsvar (W/VAr/VA, V, A, Ω, rad/s, Wb, H) og 2–3 gjeldende siffer.
- [ ] **Tospråklighet:** engelsk fagterm i parentes ved første forekomst i hvert
      delkapittel (phasor, no-load speed, duty-cycle, dot convention, rectifier,
      inverter, buck/boost, MPPT osv.).
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (**KUN til
      kapitler som finnes** — verifiser tma4110/tma4135/fysikk2-lenkene mot
      metadataene; referer i klartekst hvis de ikke er bygget), `collapsible`
      Symbol- og formelliste, Motivasjon, definisjoner/teoremer i emnets notasjon,
      utledning med intuisjon, 2–4 eksempler (siste på eksamensnivå, med skisse der
      sensor forventer skisse), Typiske feil-`warning`, 6–12 øvinger med `solution`
      + `hints` (stigende; minst én kvalitativ i hvert teorikapittel),
      repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
      sensor-kommentert gjennomregnet case + 12–15 oppgaver på eksamensnivå.
- [ ] **Kvalitativ-kvoten:** på tvers av boka skal ~20–25 % av øvingene i
      teorikapitlene være korte kvalitative «forklar/begrunn/skisser»-oppgaver med
      modellsvar i 2–4 setninger (speiler eksamens miks; aldri essay).
- [ ] **Quiz-sum ≥ 518 og flashcard-sum ≥ 514** per kvotetabellen i §4
      (kontrollsummér per del). Fallgruvekatalogen (0.2) og hvert temas typiske
      feil skal være representert som egne flashcards/quiz.
- [ ] **Prøver:** 4 per temadel 1–10 (40 stk, `ttk4240-<del>-prove`) + 3
      øvingseksamener (11.2–11.4) som sammen dekker sjangrene A–M; hver
      øvingseksamen har fire oppgaver à 25 %, frikoblede deler, formelark og
      minst én skisse (S).
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tallverdier, egne kretser,
      egne kontekster og formuleringer; ingen tekst fra reelle sett/løsningsforslag;
      skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
      ikke kopieres ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

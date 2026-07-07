# Bokskjelett: FYS2140 Kvantefysikk — eksamensrettet lærebok (UiO)

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> «sensorkrav» og typiske feil per kapittel er angitt her, destillert fra
> `EKSAMENSANALYSE.md` (15 komplette oppgavesett 2015–2024; de 11 settene
> 2017–2024 lest deloppgave for deloppgave, 2015–2016 gjennomgått grundig).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i dette skjelettet er omskrevne — de kan varieres videre, men
> aldri kopieres ordrett inn som oppgaver. Formlene er standard kvantemekanikk-
> notasjon og ikke opphavsrettslig beskyttet tekst.
>
> **KRITISK KILDEFORBEHOLD (gjelder HELE boka):** Arkivet inneholder **ingen
> løsningsforslag og ingen sensorveiledninger** — kun oppgavesettene. Alt om
> «sensorkrav», forventet metode og poenglogikk er derfor **utledet fra
> oppgaveteksten selv** (verbvalg, hint, oppgitte formler, de få synlige
> poengvektene i V2017/H2017/V2015/H2015) og fra pensumboka Griffiths, *ikke* fra
> offisiell fasit. Der en bestemt metode eller poengvekt er hevdet, skal den i
> kapittelteksten presenteres som **velbegrunnet slutning**, ikke som fasit —
> Eksamensvinkel-blokkene formuleres derfor med forbehold («mønsteret i settene
> tyder på …», «erfaringsmessig belønnes …») og markeres `(verifiser)` der en
> konkret poengpåstand gjøres. Dette er den viktigste stilforskjellen fra
> ECON1310/JUS1111/FYS1120, som hadde ordrette sensorveiledninger.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `fys2140` |
| Tittel | **FYS2140 Kvantefysikk — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (rent analytisk kvantitativt fag med faste «vis at»-oppgavemaler — **INGEN numerikk/Python**) |
| Antall kapitler | **32** (1 eksamenskart + 27 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 970 min ≈ 49,5 timer** |
| Quiz totalt | **582** (krav ≥500) |
| Flashcards totalt | **658** (krav ≥500 — bevisst høy tetthet, se §4) |

**Pitch (ett avsnitt):** FYS2140-eksamen er fra og med ~2018 påfallende
forutsigbar. Et moderne sett er tre store, sammensatte oppgaver (eventuelt 5–6
kortere) etter samme mal: **(1)** eksperimentell kvantefysikk (de Broglie/Bragg,
Compton *eller* fotoelektrisk) — åpningsoppgaven; **(2)** hydrogenatomet med
angulærmoment, en superposisjon som normeres og tidsutvikles, energi-/$L_z$-måling,
gjerne med et perturbasjonsledd (Zeeman/relativistisk/LS) på toppen; **(3)** fler-
elektron/spinn: de fire spinn-egenfunksjonene, Pauli-symmetri, utvekslingskraft og
orbitaloppfylling for et navngitt grunnstoff. Under det hele ligger **den
universelle ferdigheten**: å regne forventningsverdier og standardavvik for en
gitt $\psi$ (~93 % av settene). Denne boka er kalibrert mot nettopp det: full
metodedrill på de fem søylene, egen stor del for forventningsverdi-/usikkerhets-
apparatet, ett integrert drillkapittel for «pakken» (hydrogen + angulærmoment +
superposisjon i samme oppgave, der flest poeng sitter), og et eget kapittel for
«det harde sluttstykket» (perturbasjon) som skiller toppkarakterene. Boka trener
det verbfordelingen i settene faktisk krever: **«Vis at …»** (mellomregningen ER
svaret), **«Beregn/Finn …»** og **«Begrunn/Forklar med egne ord»** (selvstendig
poenggivende). Harmonisk oscillator er moderat vektet (~40 %), potensialbarriere/
tunnelering lav (~20 %) og diatomisk molekyl / Stern–Gerlach lavest (~13 %) —
disse dekkes solid, men ikke som satsingsområde.

**Kritisk rammebetingelse (gjelder HELE boka):** Eksamen er en **4-timers
skriftlig skoleeksamen, penn og papir**, karakterskala A–F. Hjelpemidler: Rottman
*Matematisk formelsamling*, Øgrim/Lian og Angell/Lian *Fysiske størrelser og
enheter*, godkjent kalkulator, og **ett eget A4-notatark** (begge sider). Nyere
sett (særlig V2022/V2023) deler i tillegg ut en **konstant- og formelside**
(integraltabell, gaussiske/trigonometriske integraler, delvis integrasjon,
Hermite-polynomer $H_0$–$H_5$ ved HO-oppgaver, konstanter som $hc = 1240$ eV·nm,
$E_0 = 13{,}6$ eV, Bohr-radius $a_0 \approx 0{,}053$ nm). Boka skal derfor ALDRI
fremstille standardintegraler, Hermite-polynomer eller konstantverdier som
puggestoff. Skillet er: **«må kunne brukes aktivt»** (bølgefunksjoner, operatorer,
egenverdier, kvantetallregler, standarduttrykk — velges, kombineres,
symmetriargumenteres og *utledes* under tidspress, og bør stå på studentens eget
A4-ark) vs. **«hentes fra arket/tabellen»** (standardintegraler, Hermite-
polynomer, konstanter, sfærisk-harmoniske og operatorer i sfæriske koordinater
som oppgis når de trengs). Hvert delkapittels Symbol- og formelliste markerer hva
som antas oppgitt. Boka trener **bruk og utledning**, ikke pugg av tabeller.

**INGEN numerikk/Python-spor (bevisst — motsatt FYS1120):** I motsetning til
søsteremnet FYS1120, der numerisk Python er obligatorisk i 100 % av settene fra
2018, er FYS2140 **ren analytisk penn-og-papir-fysikk**. Numerikk nevnes kun i
**ett** sett (pandemi-hjemmeeksamen V2020) og da som en invitasjon, ikke et krav.
Boka har derfor **ikke** noe Python-/numerikk-kapittel; ressursene går i stedet
til å drille håndregning av integraler, egenverdier, koeffisient-matching og
forventningsverdier under tidspress. Dette er den viktigste strukturforskjellen
fra FYS1120-skjelettet.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes/Griffiths' notasjon):**
- **Operator vs. egenverdi vs. vektor holdes strengt fra hverandre.** Operatorer
  får hatt: $\hat{x}$, $\hat{p} = -i\hbar\,d/dx$, $\hat{H}$, $\hat{L}^2$, $\hat{L}_z$,
  $\hat{S}^2$, $\hat{S}_z$, $\hat{a}_\pm$. Egenverdier er tall/uttrykk uten hatt
  ($\hbar^2 l(l+1)$, $\hbar m_l$, $E_n$). Å skrive en operator der egenverdien menes
  (eller omvendt) er en gjennomgående, dyr feil. Angulærmoment $\hat{\mathbf{L}}$,
  $\hat{\mathbf{S}}$, $\hat{\mathbf{J}}$ er vektoroperatorer (fete symboler).
- **$\hbar$ (h-bar), ikke $h$, i alle dynamiske uttrykk;** $h$ brukes kun i
  eksperiment-formlene ($\lambda = h/p$, $E = h\nu$, $hc = 1240$ eV·nm).
- **Kvantetall:** $n = 1,2,\dots$ (hoved), $l = 0,\dots,n-1$ (bane), $m_l = -l,\dots,+l$
  (magnetisk), $s = \tfrac12$, $m_s = \pm\tfrac12$ (spinn), $S$/$m_S$ (total spinn),
  $j$/$m_j$ (total). Bruk alltid disse bokstavene; bland aldri $l$ (bokstav-ell) og
  tallet 1 i teksten.
- **Bølgefunksjon:** $\Psi(\mathbf{r},t)$ (tidsavhengig, stor psi), $\psi(\mathbf{r})$
  (romlig/stasjonær, liten psi); hydrogen $\psi_{nlm} = R_{nl}(r)\,Y_l^m(\theta,\phi)$;
  spinndel $\chi$. Sannsynlighetstetthet $|\Psi|^2$, normering $\int|\Psi|^2\,d^3r = 1$.
- **Forventningsverdi og standardavvik:** $\langle \hat{O}\rangle = \int \psi^*\hat{O}\psi\,dx$;
  $\sigma_O = \sqrt{\langle \hat{O}^2\rangle - \langle \hat{O}\rangle^2}$;
  kommutator $[\hat{A},\hat{B}] = \hat{A}\hat{B}-\hat{B}\hat{A}$, med $[\hat{x},\hat{p}] = i\hbar$.
- **Enheter:** alle tallsvar med enhet (nm, eV, keV); regn helst i eV og eV/c med
  $hc = 1240$ eV·nm for å unngå SI-feil. Numeriske svar må faktisk regnes ferdig ut.

**Komplekse tall (viktig forkunnskaps-hull):** Kvantefysikk hviler på komplekse
eksponentialer ($e^{-iE_nt/\hbar}$, $Y_1^{\pm1}\propto e^{\pm i\phi}$,
$\sin\phi = (e^{i\phi}-e^{-i\phi})/2i$). **R2 (LK20) inneholder ikke komplekse
tall** — det er ikke i pensum for norsk VGS. Boka må derfor **selv introdusere**
Eulers formel $e^{i\phi} = \cos\phi + i\sin\phi$, kompleks konjugering og modulus
$|z|^2 = z^*z$ tidlig (i kap. 2.1, med en egen `collapsible` «Komplekse tall du
trenger»), og kan ikke lenke til et R2-kapittel for dette. Der trigonometriske
omskrivinger trengs, lenkes [Trigonometriske formler](/bok/r2/r2-4-6) i R2.

**Bevisst nedprioritert / utelatt (begrunnes i Del 0):**
- **Potensialbarriere/tunnelering (full $T$/$R$-algebra):** lavfrekvent (~20 %).
  Dekkes kvalitativt (klassisk vs. kvantemekanisk + skisse av $\psi$) + **ett**
  kvantitativt eksempel i kap. 4.3 — ikke satsingsområde.
- **Diatomisk molekyl** (~13 %) og **Stern–Gerlach** (~13 %): dekkes **kompakt**
  (molekyl som anvendelse av redusert masse + HO-vibrasjon + stiv rotor, kap. 4.4;
  SG som spinn-motivasjon inne i kap. 6.3), ikke som egne store temaer.
- **Numerisk Python / computational essay:** fraværende som eksamensform —
  **utelatt helt** (se over).

**Forhold til søsterbøkene:** FYS2140 bygger på den moderne fysikken i
[fysikk 2](/bok/fysikk2/fysikk2-7-1) (fotoelektrisk effekt, bølge–partikkel-
dualitet, de Broglie, Heisenberg, Bohrs atommodell — bygget og lenket der det er
naturlig i Del 1) og på matematikken i **R2** (integrasjon, delvis integrasjon,
rekker, trigonometri, vektorer — lenket per delkapittel). Forkunnskaper i
**relativistisk energi** ($E^2 = E_0^2 + (pc)^2$) dekkes i
[Relativistisk energi og masse](/bok/fysikk2/fysikk2-6-4) og lenkes. Søsteremnene
**FYS1001** og **FYS1120** er foreløpig på skjelett-stadiet (ikke bygget); der de
er relevante som forkunnskap, refereres de i **klartekst** (uten lenke) til de er
bygget. Partielle deriverte og operatorer på flere variabler forutsettes forklart
i-boks (Del 3/5), med klartekst-referanse til videregående derivasjon.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): eksperimentell bakgrunn →
bølgefunksjon/Schrödinger → operator-/forventningsverdiapparatet → 1D-potensialer →
hydrogen (3D) → angulærmoment/spinn → superposisjon/tidsutvikling/måling →
identiske partikler/Pauli/Hund → perturbasjon → eksamenstrening. Frekvensen styrer
*omfanget*: «må beherskes perfekt»-temaer får 2–3 teorikapitler + eget
drillkapittel, «bør kjenne til» får ett kompakt kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer 3-oppgavers-malen, sjangerkatalogen A–M og «vis at»-disiplinen. |
| 1 | Eksperimentell kvantefysikk og den gamle kvanteteorien | 3 | Åpningsoppgaven, **~73 %** samlet → nivå 1 «perfekt» → 2 teori + drill. Relativistisk vs. ikke-relativistisk impuls drilles til automatikk. |
| 2 | Bølgefunksjonen og Schrödingerligningen | 2 | Schrödinger-grunnlaget **~47 %** (kunne) → 2 teori. Statistisk tolkning + separasjon TASL→TUSL er fundamentet resten hviler på; komplekse tall introduseres her. |
| 3 | Operatorer, forventningsverdier og usikkerhet | 3 | **Den universelle ferdigheten (~93 %)** + Heisenberg/kommutatorer (~47 %) → nivå 1 «perfekt», bokas største metodedel → 2 teori + stort drillkapittel. |
| 4 | Endimensjonale potensialer | 4 | Uendelig brønn ~33 % (kunne), harmonisk oscillator ~40 % (kunne), barriere/tunnelering ~20 % (kjenne), diatomisk molekyl ~13 % (kjenne). Solid, men ikke satsing. |
| 5 | Hydrogenatomet | 3 | **~73 %** (nivå 1, «pakkens» kjerne) → 2 teori + drill. Kvantetall/degenerasjon, radialdel, koeffisient-matching for $a$/$E_1$, fotonoverganger. |
| 6 | Angulærmoment og spinn | 3 | $\hat{L}^2$/$\hat{L}_z$ **~67 %** (nivå 1) + spinngrunnlag → 2 teori + spinn/SG. $L_z$-måling via utvikling i $Y_l^m$; spinn forbereder Del 8. |
| 7 | Superposisjon, tidsutvikling og måling | 3 | **~73 %** (nivå 1) → 2 teori + **integrert drill for «pakken»** (hydrogen + angulærmoment + superposisjon i samme oppgave — der flest poeng sitter). |
| 8 | Identiske partikler, Pauli og fler-elektronatomer | 4 | **~73 %, 100 % i 2021–24** (nivå 1, i sterk vekst) → 3 teori + drill. De fire spinn-egenfunksjonene, Pauli-symmetri, utvekslingskraft, Hund. |
| 9 | Perturbasjon-tillegg (det harde sluttstykket) | 2 | **~33 %** (kunne, men skiller topp) → 2 teori. Relativistisk korreksjon; LS-kobling/finstruktur og Zeeman. |
| 10 | Eksamenstrening | 4 | Kvalitativ/begrepsdrill (sjanger M) + 3 komplette 4-timers øvingseksamener etter 3-oppgavers-malen. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Eksperimentell kvantefysikk og den gamle kvanteteorien |
| 2 | Bølgefunksjonen og Schrödingerligningen |
| 3 | Operatorer, forventningsverdier og usikkerhet |
| 4 | Endimensjonale potensialer |
| 5 | Hydrogenatomet |
| 6 | Angulærmoment og spinn |
| 7 | Superposisjon, tidsutvikling og måling |
| 8 | Identiske partikler, Pauli og fler-elektronatomer |
| 9 | Perturbasjon-tillegg |
| 10 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Intet numerikk-/Python-spor.** DNA-en (og søsterboka FYS1120) har et eget
   numerisk kapittelspor; her er det **fjernet fullstendig**, fordi FYS2140 er ren
   analytisk fysikk uten numerikk-tradisjon (kun antydet i pandemi-hjemmeeksamen
   V2020). Dette er en bevisst kontrast til FYS1120.
2. **Egen stor «operator-/forventningsverdi»-del (Del 3, 3 kapitler).** Den
   universelle ferdigheten (forventningsverdier og $\sigma$ for en gitt $\psi$)
   inngår i ~93 % av settene og løftes derfor til bokas største metodedel med eget
   stort drillkapittel — utover det DNA-en normalt gir et enkelt-tema.
3. **Ett integrert drillkapittel for «pakken» (kap. 7.3).** Hydrogen +
   angulærmoment + superposisjon opptrer ofte i *samme* oppgave; drillen trener
   dem **sammen** (ikke bare hver for seg i sine deler), fordi det er denne
   kombinerte ferdigheten som gir flest poeng. Et lite avvik fra DNA-ens
   «ett drillkapittel per tema».
4. **Fire drillkapitler ligger inne i temadelene** (1.3, 3.3, 5.3, 8.4) rett etter
   teorien, pluss det integrerte pakke-drillet (7.3), fordi sjangrene er
   temaspesifikke gjengangere. Del 10 beholder den *tverrgående* kvalitative
   sjangeren (begreps-/«forklar»-oppgaver, sjanger M) + øvingseksamenene.
5. **Alle Eksamensvinkel-blokker formuleres med forbehold** («mønsteret tyder på»,
   `(verifiser)` ved konkrete poengpåstander), fordi arkivet mangler
   sensorveiledninger — motsatt FYS1120/JUS1111 der veiledningene var ordrette.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–M) refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**A** materiens bølgenatur (de Broglie/Bragg/Davisson–Germer), **B** Compton-
spredning, **C** fotoelektrisk effekt, **D** forventningsverdier og standardavvik
for en gitt $\psi$, **E** hydrogenatomet, **F** angulærmoment $\hat{L}^2$/$\hat{L}_z$,
**G** superposisjon/tidsutvikling/måling, **H** fler-elektron/spinn/symmetri,
**I** 1D-systemer (uendelig brønn/boks/sirkel), **J** harmonisk oscillator,
**K** potensialbarriere/tunnelering/spredning, **L** perturbasjon-tillegg
(relativistisk/LS/Zeeman), **M** grunnleggende KM og kvalitative begreper.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Eksamensvinkel-`tip`,
Forkunnskaper-blokk med kryssbok-lenker og `collapsible` **Symbol- og formelliste**
rett etter (SÆRLIG viktig i kvantefysikk: ALLE operatorer, symboler og formler i
delkapitlet forklares, per delkapittel — aldri arv fra tidligere kapittel — med
markering av hva som antas oppgitt på formelsida vs. hva som må kunne brukes/utledes).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes FYS2140

- **id:** `fys2140-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, 3-oppgavers-malen, temafrekvensene, «vis at»-disiplinen, kildeforbeholdet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2024. Skal gjengi: (i) **formen:** 4-timers skriftlig skoleeksamen, penn og papir, A–F; Rottman + Øgrim/Lian + Angell/Lian + kalkulator + **eget A4-notatark**, nyere sett med utdelt konstant-/integralside (Hermite $H_0$–$H_5$ ved HO). (ii) **Utviklingen:** fra kreative, forskningsnære sett (2015–2016: positronium, Wallis' formel for $\pi$, LIGO-graviton, koherente tilstander) til **standardisert form fra ~2018** (tre søyler: eksperiment → grunnleggende KM/1D-system → hydrogen/spinn); vår = hovedeksamen (mest sammensatt), høst = kortere kontinuasjon. (iii) **3-oppgavers-malen:** O1 eksperimentell kvantefysikk (de Broglie/Compton/fotoelektrisk), O2 hydrogen + angulærmoment + superposisjon + tidsutvikling + evt. perturbasjon, O3 fler-elektron/spinn — ev. 5–6 kortere oppgaver. (iv) **Temafrekvens-tabellen:** forventningsverdier/$\sigma$ ~93 %, hydrogen ~73 %, superposisjon/tidsutvikling ~73 %, fler-elektron/spinn ~73 % (100 % 2021–24), eksperimentell ~73 %, angulærmoment ~67 %, Schrödinger-grunnlag ~47 %, Heisenberg/kommutator ~47 %, harmonisk oscillator ~40 %, perturbasjon ~33 %, uendelig brønn ~33 %, degenerasjon ~33 %, barriere/tunnelering ~20 %, diatomisk molekyl ~13 %, Stern–Gerlach ~13 %. (v) **Bevisst nedprioritert stoff med begrunnelse:** barriere/tunnelering (kjenne — kvalitativt + ett kvantitativt), diatomisk molekyl og SG (kjenne — kompakt), numerikk/Python (utelatt). (vi) **«Sensorens» metaregler (utledet — merk forbehold):** «Vis at» dominerer, mellomregningen ER svaret; «Begrunn med egne ord» er selvstendig poenggivende (3–5 p i settene med synlige poeng); symmetri/paritet FØR integrasjon; sannsynlighet = $|c_n|^2$ (projeksjon, ikke gjett); tidsuavhengighet begrunnes med kommutator; relativistisk vs. ikke-relativistisk impuls; enheter på alle tallsvar; bruk de oppgitte hjelpemidlene aktivt. (vii) **Karakternivåene** (bestått/midt/topp) fra analysen §4. (viii) **Notatark-strategien:** hva som må kunne *brukes/utledes* vs. *hentes* fra ark/tabell.
- **Innholdskontrakt:** Oppgavetype-katalogen A–M presenteres som studentens sjekkliste med frekvens per sjanger og hvilken av de tre oppgavene den typisk er. Prognosen for neste sett: tre store oppgaver (evt. 5–6 kortere) etter malen, tung på «Vis at …» og «Begrunn med egne ord». Leseplan: Del 3 (forventningsverdier) er den universelle ferdigheten og må sitte tidlig; Del 5–7 er «pakken» som gir flest poeng; Del 8 (fler-elektron) er i sterk vekst. **Eksplisitt kildeforbehold:** alt om sensorkrav er utledet, ikke fra fasit — tren metoden, men vær forberedt på variasjon. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for tre store oppgaver — hvilken tar du først, og hvorfor er forventningsverdi-/normeringsdelene ofte de sikreste poengene?».
- **Typiske feil:** Metafeilene: pugge standardintegraler/Hermite-polynomer som står på arket i stedet for å trene metode; hoppe over forventningsverdi-drillen (Del 3) fordi den «virker enkel» (den er 1/3 av hvert sett); bruke mye tid på barriere-algebra og HO-detaljer (lavere/moderat frekvens) på bekostning av hydrogen/spinn; skrive sluttsvar uten mellomregning på en «Vis at»-oppgave (mellomregningen ER svaret).
- **Quiz: 14 · Flashcards: 16** (form, 3-oppgavers-malen, frekvenser, metaregler, sjangerkatalog A–M, kildeforbehold)

---

### Del 1 — Eksperimentell kvantefysikk og den gamle kvanteteorien *(prioritet: PERFEKT)*

#### Kapittel 1.1: Materiens bølgenatur — de Broglie, Bragg og Davisson–Germer

- **id:** `fys2140-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** de Broglie-bølgelengden, den relativistiske impulsfellen, og Bragg-betingelsen som knytter observert bølgelengde til gitteravstand — settets faste åpningsoppgave.
- **Eksamensbelegg:** Sjanger A i ~40 % av settene, **åpningsoppgave når den er med**. Signatur: regn $\lambda$ for termiske nøytroner/elektroner, og den *relativistiske* varianten der impulsen må hentes fra energirelasjonen. Bragg-diffraksjon knyttet til krystallgitter. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [de Broglies hypotese](/bok/fysikk2/fysikk2-7-3) og [Bølge–partikkel-dualitet](/bok/fysikk2/fysikk2-7-2) (fysikk 2-fundament); [Relativistisk energi og masse](/bok/fysikk2/fysikk2-6-4) (for $E^2 = E_0^2 + (pc)^2$). *(FYS1001 gir et enklere innsteg til bølgenatur — refereres i klartekst; ikke bygget.)*
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: de Broglie $\lambda = h/p$ (gjelder alltid); **kritisk skille** — ikke-relativistisk ($v \ll c$): $p = \sqrt{2mK}$, $\lambda = h/\sqrt{2mK}$; **relativistisk:** $pc = \sqrt{E^2 - E_0^2}$ (der $E = K + E_0$), $\lambda = hc/\sqrt{E^2-E_0^2}$ — **aldri** $p=\sqrt{2mK}$ for raske partikler; regn i eV/eV·c med $hc = 1240$ eV·nm; hvilehvileenergier $m_ec^2 = 0{,}511$ MeV, $m_pc^2 = 938$ MeV. Bragg: **utled** $2d\sin\theta = n\lambda$ fra konstruktiv interferens (veiforskjell $2d\sin\theta$ = helt antall bølgelengder), og sammenlign observert $\lambda$ med de Broglie-$\lambda$. **Utledning som kreves aktivt:** (i) Bragg-betingelsen fra veiforskjell; (ii) valg av riktig impulsuttrykk fra en gitt kinetisk energi. **Figurkrav:** krystallplan med innfallende/reflektert stråle og veiforskjellen $2d\sin\theta$ markert.
- **Oppgavesjangre:** A (+ M-innslag). Mønstereksempel: «Elektroner akselereres gjennom en spenning slik at de får kinetisk energi $K$. (a) Avgjør om de er relativistiske, og finn de Broglie-bølgelengden med riktig impulsuttrykk. (b) De sendes mot en krystall med planavstand $d$; ved hvilken vinkel ser du første-ordens Bragg-refleks? Begrunn Bragg-betingelsen med et veiforskjell-argument.»
- **Typiske feil (analysen §5):** Bruke $p=\sqrt{2mK}$ på relativistiske partikler (skal være $pc=\sqrt{E^2-E_0^2}$); blande $h$ og $\hbar$; regne i SI og få tierpotens-feil i stedet for eV/nm; glemme faktoren 2 eller $\sin\theta$ i Bragg; oppgi svar uten enhet / ikke regne ferdig tallet.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 1.2: Fotonets partikkelnatur — Compton-spredning og fotoelektrisk effekt

- **id:** `fys2140-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-1-1`
- **kapitteltype:** teori
- **description:** De to eksperimentene som viste at lys er kvantisert: Compton-forskyvningen med de to detektortoppene, og fotoelektrisk effekt med $K_\text{max} = h\nu - w_0$.
- **Eksamensbelegg:** Compton sjanger B (~27 %), fotoelektrisk sjanger C (~33 % — vanligst av eksperimenttypene); går ofte sammen med de Broglie i åpningsoppgaven. V2023 hadde en ren kvalitativ fotoelektrisk-variant. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Fotoelektrisk effekt og fotoner](/bok/fysikk2/fysikk2-7-1) (fysikk 2-fundament); [Bohrs atommodell](/bok/fysikk2/fysikk2-7-5) (fotonenergi).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: foton $E = hc/\lambda = h\nu$, $p = h/\lambda$; **Compton** $\lambda' - \lambda = \frac{h}{m_ec}(1-\cos\theta)$, Compton-bølgelengden $h/m_ec = 2{,}43$ pm; forklar de **to detektortoppene** — den uforskjøvne ($\lambda_0$, spredning mot tungt bundet elektron/hele atomet, nesten $\theta$-uavhengig) og den forskjøvne ($\lambda'$, mot tilnærmet fritt elektron); de tre forutsetningene (energibevaring, impulsbevaring, foton som partikkel). **Fotoelektrisk:** $K_\text{max} = h\nu - w_0$, terskelfrekvens $\nu_0 = w_0/h$; fra $K_\text{max}$-mot-$\nu$-graf: stigningstall $= h$, skjæring gir $w_0$; to avlesningsmetoder (direkte stigningstall, eller to punkter $h = \Delta K/\Delta\nu$); de tre resultatene bølgeteorien ikke forklarer (terskelfrekvens, momentan utløsning, $K_\text{max}$ uavhengig av intensitet) og Einsteins fotonhypotese (1905). **Utledning som kreves aktivt:** Compton-formelen antydes fra energi-/impulsbevaring (kan oppgis delvis); tolkningen av de to toppene skrives ut. **Figurkrav:** impulsvektorene i $\gamma + e \to \gamma' + e'$; $K_\text{max}$-mot-$\nu$-graf med stigningstall $h$ og skjæring $-w_0$.
- **Oppgavesjangre:** B, C (+ M). Mønstereksempel: «Røntgenfotoner med bølgelengde $\lambda$ spres mot en grafittprøve. (a) Finn bølgelengden til fotonet som spres $90^\circ$. (b) Detektoren viser to topper — forklar med egne ord hvorfor, og hvorfor den ene knapt flytter seg når $\theta$ endres.»
- **Typiske feil (analysen §5):** Bruke $E = h/\lambda$ i stedet for $E = hc/\lambda$; glemme $(1-\cos\theta)$ eller sette feil fortegn; forklare bare den ene Compton-toppen; i fotoelektrisk: forveksle $w_0$ og $K_\text{max}$, eller lese av feil størrelse som stigningstall; svare på den kvalitative uten fagbegrep (foton, kvantisering).
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 1.3: Drill: åpningsoppgaven (sjanger A/B/C)

- **id:** `fys2140-1-3` · **number:** 1.3 · **estimatedMinutes:** 80 · **prerequisites:** `fys2140-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets oppgave 1: velg riktig impulsuttrykk, regn i eV/nm, forklar toppene og les av grafen — fullført A/B/C-besvarelse under tidspress.
- **Eksamensbelegg:** Sjangrene A/B/C samlet (~73 % åpningsoppgave). Varianter: termiske nøytroner, relativistiske elektroner, Bragg mot ulike gitre, Compton ved ulike vinkler, Millikan-graf med to avlesninger, ren kvalitativ fotoelektrisk. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser om partikkelen er relativistisk (sammenlign $K$ med $E_0$); 2) velg impulsuttrykk ($\sqrt{2mK}$ eller $\sqrt{E^2-E_0^2}/c$); 3) regn i eV/eV·c med $hc=1240$ eV·nm; 4) for foton: $E=hc/\lambda$, $p=h/\lambda$; 5) Compton: $\lambda'-\lambda$-formel + tolk toppene; 6) fotoelektrisk: $K_\text{max}=h\nu-w_0$, avles graf; 7) enhet på hvert tallsvar. Gjennomregnet eksamenscase med margnotater (hvor poengene sitter: relativistisk-valget, veiforskjell-argumentet, topp-forklaringen). 10–14 oppgaver på eksamensnivå som roterer A/B/C, minst én relativistisk, én Compton med topp-tolkning, én graf-avlesning.
- **Oppgavesjangre:** A, B, C (+ M). Mønstereksempel (deloppgavekjede): «(a) Er et proton med $K = 50$ MeV relativistisk? Finn de Broglie-$\lambda$. (b) Et foton med samme bølgelengde spres $60^\circ$ mot et fritt elektron — finn bølgelengdeforskyvningen. (c) Forklar med egne ord forskjellen på hvordan proton og foton bærer impuls.»
- **Typiske feil:** Hele §5-repertoaret for A/B/C samlet: feil impulsuttrykk, $h$/$hc$-forveksling, manglende topp-forklaring, enhetsfeil, uferdig tallsvar.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A de Broglie/Bragg med relativistisk vs. ikke-relativistisk impuls · 1.B Compton med topp-tolkning · 1.C fotoelektrisk med grafavlesning + kvalitativ · 1.D blandet åpningsoppgave på eksamensnivå)

---

### Del 2 — Bølgefunksjonen og Schrödingerligningen *(prioritet: KUNNE)*

#### Kapittel 2.1: Bølgefunksjonen, |Ψ|² og den statistiske tolkningen

- **id:** `fys2140-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `fys2140-1-2`
- **kapitteltype:** teori
- **description:** Hva $\Psi$ er, hvordan $|\Psi|^2$ tolkes som sannsynlighetstetthet, kravene til en fysisk bølgefunksjon — og de komplekse tallene kvantefysikken hviler på.
- **Eksamensbelegg:** Grunnlagsdel (sjanger M): tolkning og krav til $|\Psi|^2$ er en gjenganger blant de kvalitative deloppgavene (V2021). Normering er inngangen til den universelle ferdigheten (Del 3). Prioritet: **kunne** (men fundamentet for nivå 1-delene).
- **Forkunnskaper/kryssbok:** kap. 1.2; [Bestemt integral som grenseverdi](/bok/r2/r2-2-4) og [Analysens fundamentalsetning](/bok/r2/r2-2-5) (arealtolkning, integrasjon); [Trigonometriske formler](/bok/r2/r2-4-6). **NB:** komplekse tall er ikke i R2 og introduseres her.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **statistisk (Born-) tolkning** — $|\Psi(x,t)|^2\,dx$ = sannsynligheten for å finne partikkelen mellom $x$ og $x+dx$; **normering** $\int_{-\infty}^{\infty}|\Psi|^2\,dx = 1$; krav til en fysisk $\psi$: normerbar (kvadratisk integrerbar), kontinuerlig, med kontinuerlig $\psi'$ (unntatt ved uendelige potensialsprang), entydig; sannsynlighet i et intervall $P(a<x<b) = \int_a^b|\Psi|^2\,dx$. **Komplekse tall du trenger** (egen `collapsible`): Eulers formel $e^{i\phi} = \cos\phi + i\sin\phi$; kompleks konjugering $z^* $; modulus $|z|^2 = z^*z$ (alltid reell, ikke-negativ); at $|e^{i\phi}|^2 = 1$ (rene fasefaktorer endrer ikke $|\Psi|^2$) — dette siste er nøkkelen til tidsutvikling i Del 7. **Utledning som kreves aktivt:** bestemme en normeringskonstant $A$ for en enkel gitt $\psi$ (peker mot Del 3). **Figurkrav:** en $|\psi|^2$-profil med arealet under kurven = 1 markert.
- **Oppgavesjangre:** M (+ D-innslag). Mønstereksempel: «Forklar med egne ord hva $|\Psi(x,t)|^2$ betyr fysisk, og hvilke tre krav en gyldig bølgefunksjon må oppfylle. Vis at en ren fasefaktor $e^{-iEt/\hbar}$ ikke endrer sannsynlighetstettheten.»
- **Typiske feil (analysen §5):** Kalle $\Psi$ selv (ikke $|\Psi|^2$) en sannsynlighet; glemme normeringen før man regner videre; tro at fasefaktoren endrer $|\Psi|^2$; slurve med kompleks konjugering ($z^2$ i stedet for $z^*z$).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Schrödingerligningen — TASL, separasjon, TUSL og stasjonære tilstander

- **id:** `fys2140-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-2-1`
- **kapitteltype:** teori
- **description:** Den tidsavhengige og tidsuavhengige Schrödingerligningen, separasjon av variabler, stasjonære tilstander og planbølge/bølgepakke.
- **Eksamensbelegg:** Sjanger G-grunnlag / M (~47 %). «Vis at $\Psi = \psi\,e^{-iEt/\hbar}$ løser TASL når $\psi$ oppfyller TUSL» er en dokumentert «vis at»-deloppgave; egenfunksjoner/stasjonære tilstander og fase-/gruppehastighet er kvalitative gjengangere. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Repetisjon av derivasjon](/bok/r2/r2-2-1) og [Derivasjon av trigonometriske funksjoner](/bok/r2/r2-4-9). Partielle deriverte introduseres i-boks (klartekst).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **TASL** $i\hbar\,\partial\Psi/\partial t = \hat{H}\Psi$ med $\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V$; **separasjon** $\Psi(\mathbf{r},t) = \psi(\mathbf{r})\,\varphi(t)$ → $\varphi(t) = e^{-iEt/\hbar}$ og **TUSL** $\hat{H}\psi = E\psi$ (egenverdiligning for energi); **stasjonær tilstand:** $|\Psi|^2$ tidsuavhengig fordi fasefaktoren har $|e^{-iEt/\hbar}|=1$; **planbølge** $e^{i(kx-\omega t)}$ med $p = \hbar k$, $E = \hbar\omega$; **bølgepakke** som superposisjon av planbølger, fasehastighet $v_f = \omega/k$ vs. gruppehastighet $v_g = d\omega/dk$ (partikkelhastigheten). **Utledning som kreves aktivt:** hele separasjonen TASL → $\varphi(t)$ + TUSL, steg for steg; **vis at** en stasjonær tilstand gir tidsuavhengig $|\Psi|^2$. Resultater som bare *brukes* (uten full utledning): dispersjonsrelasjonen for en fri partikkel. **Figurkrav:** en bølgepakke med innhyllingskurve (gruppe) og indre svingninger (fase).
- **Oppgavesjangre:** G/M. Mønstereksempel: «Start fra den tidsavhengige Schrödingerligningen og vis, ved separasjon av variabler, at $\Psi(x,t) = \psi(x)\,e^{-iEt/\hbar}$ løser den dersom $\psi$ oppfyller $\hat{H}\psi = E\psi$. Forklar hvorfor slike tilstander kalles stasjonære.»
- **Typiske feil (analysen §5):** Hoppe over separasjonsstegene (mellomregningen ER svaret); feil fortegn/faktor i fasefaktoren; forveksle fase- og gruppehastighet; påstå at $|\Psi|^2$ er tidsuavhengig for en superposisjon (gjelder bare rene stasjonære tilstander — peker mot Del 7).
- **Quiz: 22 · Flashcards: 26**

**Prøve-kvote Del 2:** 4 prøver (2.A tolkning og krav til $|\Psi|^2$ + normering · 2.B separasjon TASL→TUSL, «vis at» · 2.C stasjonære tilstander, planbølge og bølgepakke, fase/gruppehastighet · 2.D blandet grunnlag + komplekse tall på eksamensnivå)

---

### Del 3 — Operatorer, forventningsverdier og usikkerhet *(prioritet: PERFEKT — den universelle ferdigheten)*

#### Kapittel 3.1: Operatorer og forventningsverdier

- **id:** `fys2140-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-2-2`
- **kapitteltype:** teori
- **description:** Hvordan en klassisk størrelse blir en operator, og hvordan forventningsverdien $\langle\hat{O}\rangle = \int\psi^*\hat{O}\psi\,dx$ regnes — kjernen i ~93 % av settene.
- **Eksamensbelegg:** Sjanger D (~93 % — universell). «Hvordan blir en klassisk størrelse $Q(x,p)$ en operator» er en kvalitativ gjenganger (M); selve forventningsverdi-regningen inngår i praksis i hvert sett. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2; [Variabelskifte (substitusjon)](/bok/r2/r2-3-1) og [Bestemt integral som grenseverdi](/bok/r2/r2-2-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: operatorene $\hat{x} = x$, $\hat{p} = -i\hbar\,d/dx$, $\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)$; **kvantisering:** en klassisk størrelse $Q(x,p)$ blir operator ved $x\to\hat{x}$, $p\to\hat{p}$ (f.eks. kinetisk energi $\frac{p^2}{2m}\to -\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$); **forventningsverdi** $\langle\hat{O}\rangle = \int_{-\infty}^{\infty}\psi^*\hat{O}\psi\,dx$ (operatoren virker på $\psi$ til høyre — rekkefølge betyr noe for $\hat{p}$); for en normert $\psi$; **symmetriargument:** $|\psi|^2$ jevn (even) $\Rightarrow \langle x\rangle = 0$ (integranden $x|\psi|^2$ er odde); reell $\psi \Rightarrow \langle p\rangle = 0$. **Utledning som kreves aktivt:** oppsett av $\langle x\rangle$ og $\langle p\rangle$ fra en gitt $\psi$ med symmetriargument FØR integrasjon. **Figurkrav:** en symmetrisk $|\psi|^2$ der odde integrand $x|\psi|^2$ vises å integrere til null.
- **Oppgavesjangre:** D (+ M). Mønstereksempel: «En partikkel har bølgefunksjon $\psi(x) = N e^{-a^2x^2/2}$. (a) Forklar med et symmetriargument hvorfor $\langle x\rangle = 0$ og $\langle p\rangle = 0$ uten å regne integralene. (b) Sett opp uttrykket for $\langle p\rangle$ og vis eksplisitt at det forsvinner.»
- **Typiske feil (analysen §5):** La $\hat{p}$ virke feil vei / droppe $i$-faktoren; regne $\langle x\rangle$ ved integrasjon når symmetri gir 0 gratis; glemme normeringskonstanten; behandle $\hat{p}$ som om det kommuterer med $x$.
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 3.2: Standardavvik, kommutatorer og Heisenbergs uskarphetsrelasjon

- **id:** `fys2140-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-3-1`
- **kapitteltype:** teori
- **description:** $\sigma_O = \sqrt{\langle O^2\rangle - \langle O\rangle^2}$, kommutatoren $[\hat{x},\hat{p}] = i\hbar$, og den generelle uskarphetsrelasjonen som gir Heisenberg $\sigma_x\sigma_p \geq \hbar/2$.
- **Eksamensbelegg:** Sjanger D + Heisenberg/kommutator (~47 % eksplisitt, økende — 4 av 5 sett 2021–24). $\langle p^2\rangle$ etterspørres på to måter (direkte og via delvis integrasjon, eksplisitt anbefalt via hint i V2021). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Delvis integrasjon](/bok/r2/r2-3-2) (for $\langle p^2\rangle$-metode B); [Heisenbergs usikkerhetsrelasjon](/bok/fysikk2/fysikk2-7-4) (fysikk 2-innsteg).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **standardavvik** $\sigma_O = \sqrt{\langle\hat{O}^2\rangle - \langle\hat{O}\rangle^2}$; $\langle x^2\rangle = \int x^2|\psi|^2\,dx$; **$\langle p^2\rangle$ to veier** — (A) direkte $\int\psi^*(-\hbar^2\psi'')\,dx$; (B) via delvis integrasjon $\langle p^2\rangle = \hbar^2\int|\psi'|^2\,dx$ (ofte enklere, gir positivt tegn åpenbart); **kommutator** $[\hat{A},\hat{B}] = \hat{A}\hat{B}-\hat{B}\hat{A}$, kanonisk $[\hat{x},\hat{p}] = i\hbar$ (vis ved å la $[\hat{x},\hat{p}]f$ virke på en testfunksjon $f$); **generell uskarphet** $\sigma_A^2\sigma_B^2 \geq \left(\frac{1}{2i}\langle[\hat{A},\hat{B}]\rangle\right)^2$ → **Heisenberg** $\sigma_x\sigma_p \geq \hbar/2$; gaussisk $\psi$ gir likhet ($=\hbar/2$), andre former ligger over. Bruk integraltabellen (gaussiske integraler) fra formelsida. **Utledning som kreves aktivt:** (i) $[\hat{x},\hat{p}] = i\hbar$ via testfunksjon; (ii) $\langle p^2\rangle$ via delvis integrasjon; (iii) Heisenberg-sjekk for en konkret $\psi$. **Figurkrav:** $\sigma_x$ og $\sigma_p$ illustrert som bredder i posisjons- og impulsrom.
- **Oppgavesjangre:** D (+ M). Mønstereksempel: «For $\psi(x) = N e^{-a^2x^2/2}$: (a) finn normeringen $N$; (b) beregn $\langle x^2\rangle$ og $\langle p^2\rangle$ (bruk gjerne delvis integrasjon på $\langle p^2\rangle$); (c) finn $\sigma_x$ og $\sigma_p$ og vis at $\sigma_x\sigma_p = \hbar/2$, altså at gaussfunksjonen er en minimum-usikkerhets-tilstand.»
- **Typiske feil (analysen §5):** Vise $[\hat{x},\hat{p}]$ uten testfunksjon (og «miste» leddet der $\hat{p}$ deriverer $x$); regne $\langle p^2\rangle$ og få negativt tegn (feil delvis integrasjon); glemme å trekke fra $\langle O\rangle^2$; ikke bruke integraltabellen og kaste bort tid på å utlede gaussintegraler; feilkonkludere at et polynom gir likhet i Heisenberg (bare gauss gjør det).
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 3.3: Drill: forventningsverdier og standardavvik for en gitt ψ (sjanger D)

- **id:** `fys2140-3-3` · **number:** 3.3 · **estimatedMinutes:** 95 · **prerequisites:** `fys2140-3-2`
- **kapitteltype:** drill
- **description:** Den universelle ferdigheten drillet til automatikk: normér, symmetri-argumenter bort de nulle, regn $\langle x^2\rangle$/$\langle p^2\rangle$, sjekk Heisenberg — for polynom, gauss og eksponentiell ψ.
- **Eksamensbelegg:** Sjanger D samlet (~93 %, den enkeltferdigheten som gir flest sikre poeng). Varianter i arkivet: polynomisk $C(a^2-x^2)$, gaussisk $Ae^{-a^2x^2/2}$, eksponentiell $Ne^{-a|x|}$, deltabrønn-grunntilstand (V2021). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) **normér** ($\int|\psi|^2\,dx = 1$, finn konstanten); 2) **symmetriargument FØR integrasjon** — $|\psi|^2$ jevn $\Rightarrow \langle x\rangle = 0$; reell $\psi \Rightarrow \langle p\rangle = 0$; 3) $\langle x^2\rangle = \int x^2|\psi|^2\,dx$ (integraltabell); 4) $\langle p^2\rangle$ — velg direkte eller delvis integrasjon; 5) $\sigma_x = \sqrt{\langle x^2\rangle}$, $\sigma_p = \sqrt{\langle p^2\rangle}$ (siden $\langle x\rangle = \langle p\rangle = 0$); 6) Heisenberg-sjekk $\sigma_x\sigma_p \geq \hbar/2$; 7) enhet på hvert tallsvar. Gjennomregnet eksamenscase med margnotater (hvor poengene sitter: symmetriargumentet, delvis integrasjon, Heisenberg-sammenligningen). 12–16 oppgaver på eksamensnivå som roterer de tre ψ-formene, minst én gauss (likhet), én polynom (over), én med delvis integrasjon påkrevd.
- **Oppgavesjangre:** D. Mønstereksempel (deloppgavekjede): «En partikkel i intervallet $[-a,a]$ har $\psi(x) = C(a^2 - x^2)$, null utenfor. (a) Finn $C$. (b) Begrunn med symmetri at $\langle x\rangle = \langle p\rangle = 0$. (c) Regn $\langle x^2\rangle$, $\langle p^2\rangle$, $\sigma_x$, $\sigma_p$ og sjekk Heisenberg — ligger produktet over eller på $\hbar/2$?»
- **Typiske feil:** Hele sjanger D-repertoaret samlet: glemt normering, integrert der symmetri gir 0, fortegnsfeil i $\langle p^2\rangle$, ikke brukt integraltabellen, manglende enhet, feil Heisenberg-konklusjon.
- **Quiz: 14 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (3.A operatorer, kvantisering og forventningsverdi med symmetriargument · 3.B $\langle p^2\rangle$ via delvis integrasjon + kommutator $[\hat{x},\hat{p}]$ · 3.C full σ + Heisenberg for gauss og polynom · 3.D blandet forventningsverdi-oppgave på eksamensnivå)

---

### Del 4 — Endimensjonale potensialer *(brønn/oscillator: KUNNE · barriere/molekyl: KJENNE)*

#### Kapittel 4.1: Uendelig brønn, partikkel i boks og partikkel på sirkel

- **id:** `fys2140-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-3-1`
- **kapitteltype:** teori
- **description:** Den kvantiserte energien i en boks fra randbetingelser, egenfunksjonene og paritet — og periodisk randbetingelse på en sirkel.
- **Eksamensbelegg:** Sjanger I (~33 %). Signatur: utled $E_n$ fra TUSL + randbetingelser; superposisjon i brønnen som normeres og projiseres; partikkel på sirkel (V2017) med periodisk randbetingelse og degenerasjon. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 2.2, 3.1; [Sinuslikninger](/bok/r2/r2-4-3) og [Derivasjon av trigonometriske funksjoner](/bok/r2/r2-4-9); [Bestemt integral som grenseverdi](/bok/r2/r2-2-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **utled** TUSL på formen $\psi'' = -k^2\psi$ med $k = \sqrt{2mE}/\hbar$; generell løsning $A\sin(kx) + B\cos(kx)$; randbetingelser $\psi(0)=\psi(a)=0 \Rightarrow k_n = n\pi/a$, $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$, $\psi_n = \sqrt{2/a}\sin(n\pi x/a)$; **paritet:** brønn sentrert om origo gir vekslende jevne (cos) og odde (sin) egenfunksjoner — **pass på breddedefinisjonen** ($a$ vs. $2a$, $[0,a]$ vs. $[-a,a]$); **superposisjon i brønnen:** normér, **projiser** $c_n = \int\psi_n^*\psi\,dx$, $P(E_n) = |c_n|^2$ (paritetssjekk: bare egenfunksjoner med samme paritet som $\psi$ overlapper). **Partikkel på sirkel:** periodisk randbetingelse $\psi(0) = \psi(L)$, egenfunksjoner $e^{in\phi}$, egenverdier for $\hat{p}$, degenerasjon ($\pm n$ samme energi). **Utledning som kreves aktivt:** hele kjeden TUSL → $\psi''=-k^2\psi$ → randbetingelser → $E_n$; projeksjon $c_n$ for en gitt superposisjon. **Figurkrav:** de tre laveste $\psi_n$ og $|\psi_n|^2$ i brønnen med noder.
- **Oppgavesjangre:** I (+ M). Mønstereksempel: «En partikkel i en uendelig brønn $[0,a]$ er i tilstanden $\psi(x) = C\,x(a-x)$. (a) Normér. (b) Skriv den som en superposisjon av egenfunksjonene og finn $c_n = \int\psi_n\psi\,dx$. (c) Hva er sannsynligheten for å måle grunntilstandsenergien? Bruk paritet til å utelukke noen ledd før du regner.»
- **Typiske feil (analysen §5):** Feil breddedefinisjon ($a$ vs. $2a$) → feil $k_n$, $E_n$ og paritet; **hoppe over projeksjonen** ved energimåling og gjette sannsynligheter; ignorere paritet (regne integraler som er null); glemme normering.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 4.2: Harmonisk oscillator — Hermite-polynomer og stige-/senkeoperatorer

- **id:** `fys2140-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-4-1`
- **kapitteltype:** teori
- **description:** Den kvantiserte oscillatoren via to veier — Hermite-differensialligningen og stigeoperator-algebraen — pluss 2D-separasjon og halv-oscillator.
- **Eksamensbelegg:** Sjanger J (~40 %, moderat). Varianter: bestem $K = 2n+1$ ved innsetting i Hermite-ligningen; senkeoperator $\hat{a}_-\psi_0$; 2D HO med degenerasjon og $\hat{L}_z$-egentilstander (V2015); koherente tilstander (H2015); halv-/avkuttet oscillator med bare odde $\psi_n$ (V2023). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 4.1, 3.1; [Derivasjon av trigonometriske funksjoner](/bok/r2/r2-4-9); [Delvis integrasjon](/bok/r2/r2-3-2). Hermite-polynomene $H_0$–$H_5$ antas oppgitt på formelsida.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: energispektrum $E_n = (n+\tfrac12)\hbar\omega$; egenfunksjoner $\psi_n \propto H_n(\xi)\,e^{-\xi^2/2}$, $\xi = \sqrt{m\omega/\hbar}\,x$; **Hermite-differensialligningen** $\frac{d^2H}{d\xi^2} - 2\xi\frac{dH}{d\xi} + (K-1)H = 0$ — bestem $K = 2n+1$ ($\Leftrightarrow E_n = (n+\tfrac12)\hbar\omega$) ved å sette inn oppgitt $H_n$ og lese av; **stige-/senkeoperatorer** $\hat{a}_\pm = \frac{1}{\sqrt{2\hbar m\omega}}(\mp i\hat{p} + m\omega\hat{x})$, med $\hat{a}_+\psi_n = \sqrt{n+1}\,\psi_{n+1}$, $\hat{a}_-\psi_n = \sqrt{n}\,\psi_{n-1}$, $\hat{a}_-\psi_0 = 0$, $[\hat{a}_-,\hat{a}_+] = 1$; regn $\hat{a}_-\psi_0$ to veier (sett inn $\hat{p} = -i\hbar\,d/dx$, eller bruk $\hat{a}_-\psi_0 = 0$). **2D-separasjon:** $\psi(x,y) = \psi_x\psi_y$, $E = \hbar\omega(n_x+n_y+1)$, degenerasjon; $\hat{L}_z$-egentilstander $\psi_\pm = (\psi_{10}\pm i\psi_{01})/\sqrt2$. **Halv-oscillator** ($V=\infty$ for $x<0$): bare odde $\psi_n$ overlever ($\psi(0)=0$) → $E = (n+\tfrac12)\hbar\omega$, $n = 1,3,5,\dots$. **Utledning som kreves aktivt:** $K = 2n+1$ ved innsetting; $\hat{a}_-\psi_0$; begrunnelsen for halv-oscillatorens spektrum. **Figurkrav:** parabolsk potensial med de laveste energinivåene og $\psi_n$.
- **Oppgavesjangre:** J (+ M). Mønstereksempel: «Grunntilstanden til en harmonisk oscillator er $\psi_0 = A e^{-m\omega x^2/2\hbar}$. (a) Vis at senkeoperatoren gir $\hat{a}_-\psi_0 = 0$. (b) Regn $\hat{a}_+\psi_0$ og identifiser resultatet. (c) Sett $\psi_0$ inn i Hermite-ligningen og les av energien.»
- **Typiske feil (analysen §5):** Feil fortegn i $\hat{a}_\pm$; glemme normeringsfaktoren $\sqrt{n+1}$/$\sqrt{n}$; regne halv-oscillatoren som en full oscillator (ta med jevne $\psi_n$); ikke bruke de oppgitte Hermite-polynomene; feil $\xi$-substitusjon.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.3: Potensialsteg, barriere og tunnelering *(prioritet: KJENNE)*

- **id:** `fys2140-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys2140-4-1`
- **kapitteltype:** teori (kompakt — kjenne)
- **description:** Klassisk vs. kvantemekanisk oppførsel ved et steg/en barriere, skissen av ψ, og ett kvantitativt transmisjons-eksempel.
- **Eksamensbelegg:** Sjanger K (~20 %, lavfrekvent). Mest **kvalitativt** (klassisk vs. kvantemekanisk + skisse av $\psi$); ett kvantitativt $T$/$R$-eksempel; deltabrønn (V2021, gitt grunntilstand → $\langle V\rangle$, $\langle K\rangle$, $\sigma$). Prioritet: **kjenne** — dekkes solid, men ikke som satsingsområde.
- **Forkunnskaper/kryssbok:** kap. 2.2, 4.1; [Trigonometriske formler](/bok/r2/r2-4-6).
- **Innholdskontrakt:** MÅ KJENNE (bruksnivå): **kvalitativt** — $E > V_0$: klassisk passerer alltid; kvantemekanisk delvis refleksjon, lengre $\lambda$ og lavere amplitude over barrieren. $E < V_0$: klassisk full refleksjon; kvantemekanisk eksponentielt avtagende $\psi$ inne i barrieren + endelig transmisjon (**tunnelering**). **Kvantitativt** (ett eksempel): planbølger i hvert område, match $\psi$ og $\psi'$ ved grensene, finn amplitudeforhold, transmisjon $T = \frac{k_\text{ut}}{k_\text{inn}}|F/A|^2$ og refleksjon $R$; sjekk $T + R = 1$; for barriere forenkle til uttrykk med $\sin^2(k_1L)$. **Deltabrønn** $V = -\alpha\delta(x)$: gitt grunntilstand, regn $\langle V\rangle$, $\langle K\rangle$, $\sigma_x$, $\sigma_p$ (kobler til Del 3). **Utledning som kreves aktivt:** kun skissen av $\psi$ med riktig $\lambda$-/amplitudeendring; det kvantitative kan settes opp uten full algebra. **Figurkrav (sentralt):** $\psi$ tegnet gjennom alle områder — riktig endring i bølgelengde (over steg) og eksponentiell demping (i barriere).
- **Oppgavesjangre:** K (+ M). Mønstereksempel: «En partikkel med energi $E < V_0$ møter en rektangulær barriere med bredde $L$. (a) Skisser $\psi$ gjennom de tre områdene og forklar hva som skjer klassisk vs. kvantemekanisk. (b) Sett opp planbølgene og grensebetingelsene du ville brukt for å finne transmisjonen (du trenger ikke løse ferdig).»
- **Typiske feil:** Tegne feil $\lambda$-/amplitudeendring i skissen; tro at $E<V_0$ gir null transmisjon; glemme $T+R=1$; bruke for mye tid på full $T$/$R$-algebra (dette er kjenne-stoff).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.4: Diatomisk molekyl — redusert masse, rotasjon og vibrasjon *(prioritet: KJENNE)*

- **id:** `fys2140-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `fys2140-4-2`
- **kapitteltype:** teori (kompakt — kjenne)
- **description:** To-legeme-problemet redusert til én partikkel, stiv rotor og vibrasjon som harmonisk oscillator — en kompakt anvendelse.
- **Eksamensbelegg:** Sjanger J-anvendelse (~13 %, lavfrekvent). Redusert masse, rotasjons- og vibrasjonsenergier, dissosiasjon/potensialkurve. Prioritet: **kjenne** — kompakt anvendelse av HO (4.2) + angulærmoment-egenverdien (5.1/6.1).
- **Forkunnskaper/kryssbok:** kap. 4.2; angulærmoment-egenverdien $\hbar^2 l(l+1)$ (fullt behandlet i kap. 6.1 — brukes her i ferdig form).
- **Innholdskontrakt:** MÅ KJENNE (bruksnivå): **redusert masse** $\mu = \frac{m_1 m_2}{m_1+m_2}$ (to-legeme → ett-legeme); **treghetsmoment** $I = \mu R^2$; **stiv rotor** (rotasjon) $E_l = \frac{\hbar^2 l(l+1)}{2\mu R^2}$, $l = 0,1,2,\dots$; **vibrasjon** som harmonisk oscillator $E_\text{vib} = (n+\tfrac12)\hbar\omega$, $\omega = \sqrt{k/\mu}$; kombinert rotasjons-vibrasjonsspektrum; potensialkurve (Morse-lignende) med bindingsavstand $R_0$ og dissosiasjonsenergi. **Utledning som kreves aktivt:** kun oppsett av $\mu$ og innsetting i rotasjons-/vibrasjonsformlene; egenverdiene brukes ferdig. **Figurkrav:** potensialkurve $V(R)$ med minimum ved $R_0$ og vibrasjonsnivåer, samt en rotasjonsstige.
- **Oppgavesjangre:** J (+ M). Mønstereksempel: «Et HCl-molekyl har bindingsavstand $R_0$ og fjærkonstant $k$. (a) Finn den reduserte massen. (b) Regn energien til den laveste rotasjonsovergangen og den laveste vibrasjonsovergangen, og sammenlign størrelsesordenen.»
- **Typiske feil:** Bruke total masse i stedet for redusert masse; forveksle rotasjons- og vibrasjonskvantetall; glemme $l(l+1)$-strukturen i rotasjonen; feil $\omega = \sqrt{k/\mu}$ (bruke $m$).
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 4:** 4 prøver (4.A uendelig brønn: utled $E_n$, superposisjon og projeksjon med paritet · 4.B harmonisk oscillator: Hermite-ligning + stige-/senkeoperator · 4.C barriere/tunnelering kvalitativt + skisse (kjenne) · 4.D diatomisk molekyl: redusert masse, rotasjon og vibrasjon (kjenne))

---

### Del 5 — Hydrogenatomet *(prioritet: PERFEKT)*

#### Kapittel 5.1: Schrödinger i 3D — kvantetall og degenerasjon

- **id:** `fys2140-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-2-2`
- **kapitteltype:** teori
- **description:** Separasjon av 3D-Schrödinger i sfæriske koordinater, de tre kvantetallene $(n,l,m_l)$ med sine regler, energinivåene og degenerasjonen $d = n^2$.
- **Eksamensbelegg:** Sjanger E (~73 %) + degenerasjon (~33 %). Kvantetallreglene og $d = n^2$ vises ofte eksplisitt; energinivå $E_n = -E_0/n^2$ og fotonoverganger. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2, 3.1; [Bohrs atommodell](/bok/fysikk2/fysikk2-7-5) (energinivåene $-13{,}6/n^2$ eV). $\nabla^2$ i sfæriske koordinater antas oppgitt.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bølgefunksjonen $\psi_{nlm}(r,\theta,\phi) = R_{nl}(r)\,Y_l^m(\theta,\phi)$ (separasjon radial × vinkel); **kvantetallregler** $n = 1,2,\dots$; $l = 0,1,\dots,n-1$; $m_l = -l,\dots,+l$; **energinivå** $E_n = -E_0/n^2$, $E_0 = 13{,}6$ eV (avhenger bare av $n$); **degenerasjon** $d = \sum_{l=0}^{n-1}(2l+1) = n^2$ (uten spinn, $2n^2$ med spinn) — **vis summeringen** eksplisitt; sammenhengen med angulærmoment ($\hat{L}^2\to\hbar^2 l(l+1)$, $\hat{L}_z\to\hbar m_l$ — introduseres her, drilles i Del 6). **Utledning som kreves aktivt:** degenerasjonssummen $d = n^2$; telling av tilstander for gitt $n$. **Figurkrav:** energinivåskjema for hydrogen med $n = 1,2,3$ og $l$-underskall markert.
- **Oppgavesjangre:** E (+ M). Mønstereksempel: «(a) List opp alle tillatte $(n,l,m_l)$ for $n = 3$ og vis at antallet er $9 = n^2$. (b) Hvorfor avhenger energien bare av $n$ og ikke av $l$ eller $m_l$ i hydrogen? (c) Hva blir degenerasjonen dersom vi tar med spinn?»
- **Typiske feil (analysen §5):** Bryte $|m_l| \leq l$ eller $l \leq n-1$; telle degenerasjonen feil (glemme $2l+1$); tro at energien avhenger av $l$; forveksle $n$ og $l$.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 5.2: Radialdelen — normering, koeffisient-matching og fotonoverganger

- **id:** `fys2140-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `fys2140-5-1`
- **kapitteltype:** teori
- **description:** Normering av radialdelen, bestemmelse av $a$ og $E_1$ ved koeffisient-matching i den radielle ligningen, $\langle r\rangle$/$\sigma_r$ og fotonoverganger $\lambda = hc/E_\gamma$.
- **Eksamensbelegg:** Sjanger E, den tunge varianten (~73 %). To grep: normeringsintegralet, og koeffisient-matching (sett $\psi_{100}$/$u_{10}$ inn i den radielle/modulerte TUSL og les av $a$/$E_1$). Fotonoverganger via $E_\gamma = E_0(1/n_f^2 - 1/n_i^2)$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1, 3.1; [Delvis integrasjon](/bok/r2/r2-3-2) og [Variabelskifte (substitusjon)](/bok/r2/r2-3-1). Integralet $\int_0^\infty x^n e^{-x/a}\,dx = n!\,a^{n+1}$ antas oppgitt.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **normering** $\int_0^\infty |R_{nl}|^2 r^2\,dr = 1$ (eller $\int_0^\infty|u|^2\,dr = 1$ med $u = rR$), via $\int_0^\infty x^n e^{-x/a}\,dx = n!\,a^{n+1}$; **koeffisient-matching:** sett en gitt $\psi_{100} = A e^{-r/a}$ (eller $u_{10}$) inn i den radielle/modulerte TUSL, krev at ligningen holder for **alle** $r$, og les av $a$ (Bohr-radius) og $E_1$ ved å matche koeffisientene til like potenser av $r$; **forventningsverdier** $\langle r\rangle = \int_0^\infty r\,|R|^2 r^2\,dr$, $\langle r^2\rangle$, $\sigma_r$, evt. $\langle\theta\rangle$, $\langle\phi\rangle$ (oppgi i nm); **fotonoverganger** $E_\gamma = E_0\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$, $\lambda = hc/E_\gamma$ (Lyman/Balmer/Paschen kvalitativt). **Utledning som kreves aktivt:** (i) normeringskonstanten via integraltabellen; (ii) koeffisient-matching for $a$ og $E_1$; (iii) $\langle r\rangle$. **Figurkrav:** radial sannsynlighetstetthet $|u|^2 = r^2|R|^2$ for grunntilstanden med maksimum ved $a_0$.
- **Oppgavesjangre:** E (+ M). Mønstereksempel: «Grunntilstanden til hydrogen er $\psi_{100} = A e^{-r/a}$. (a) Bestem $A$ ved normering. (b) Sett $\psi_{100}$ inn i den radielle Schrödingerligningen (oppgitt), krev at den holder for alle $r$, og les av $a$ og energien $E_1$. (c) Finn $\langle r\rangle$ og oppgi i nm.»
- **Typiske feil (analysen §5):** Glemme $r^2$-faktoren i normeringsintegralet (volumelement); ikke bruke integraltabellen; ved koeffisient-matching ikke kreve at ligningen holder for alle $r$ (bare ett punkt); glemme å regne ut det numeriske svaret i nm; feil i $E_\gamma$-fortegn ($n_f$ vs. $n_i$).
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 5.3: Drill: hydrogen-oppgaven (sjanger E)

- **id:** `fys2140-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys2140-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hydrogen: kvantetall og degenerasjon, normering av radialdel, koeffisient-matching for $a$/$E_1$, $\langle r\rangle$ og fotonoverganger — settets oppgave 2-kjerne.
- **Eksamensbelegg:** Sjanger E samlet (~73 %). Varianter: gitt $\psi_{nlm}$ → egenverdier og normering; bestem $a$/$E_1$; $\langle r\rangle$/$\sigma_r$; fotonovergang → $\lambda$; positronium-varianten (V2016) med annen redusert masse. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) les av $(n,l,m_l)$ og skriv egenverdier ($E_n$, $\hbar^2 l(l+1)$, $\hbar m_l$); 2) tell degenerasjon om spurt; 3) normér radialdelen ($r^2$-volumelement + integraltabell); 4) ved «bestem $a$/$E_1$»: koeffisient-matching, hold for alle $r$; 5) forventningsverdier med volumelement; 6) fotonovergang $E_\gamma$ → $\lambda = hc/E_\gamma$; 7) enhet (nm/eV). Gjennomregnet eksamenscase med margnotater (volumelement-fella, koeffisient-matching, enhet). 12–15 oppgaver på eksamensnivå som roterer sjangeren, minst én koeffisient-matching, én $\langle r\rangle$, én fotonovergang.
- **Oppgavesjangre:** E (+ M). Mønstereksempel (deloppgavekjede): «En hydrogenlignende tilstand er gitt ved $u_{10}(r) = B\,r\,e^{-r/a}$. (a) Normér. (b) Sett inn i den radielle ligningen og bestem $a$ og $E_1$. (c) Atomet henfaller fra $n=3$ til $n=1$ — finn bølgelengden til fotonet i nm.»
- **Typiske feil:** Hele sjanger E-repertoaret: manglende $r^2$, ikke brukt integraltabell, koeffisient-matching bare i ett punkt, feil fotonfortegn, manglende enhet, brutte kvantetallregler.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A kvantetall, degenerasjon $d=n^2$ og energinivåer · 5.B normering av radialdel + koeffisient-matching for $a$/$E_1$ · 5.C $\langle r\rangle$/$\sigma_r$ + fotonoverganger med bølgelengde · 5.D blandet hydrogen-oppgave på eksamensnivå)

---

### Del 6 — Angulærmoment og spinn *(prioritet: PERFEKT for $\hat{L}^2$/$\hat{L}_z$)*

#### Kapittel 6.1: Baneangulærmoment — $\hat{L}^2$, $\hat{L}_z$ og egenverdiene

- **id:** `fys2140-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-5-1`
- **kapitteltype:** teori
- **description:** Egenverdiene $\hbar^2 l(l+1)$ og $\hbar m_l$ for de sfærisk-harmoniske, begrensningen $|m_l|\leq l$ og forventningsverdier i egenbasis.
- **Eksamensbelegg:** Sjanger F (~67 %), nesten alltid koblet til hydrogen/superposisjon. Egenverdiene for en ren $\psi_{nlm}$; vis $(\hbar m_l)^2 \leq \hbar^2 l(l+1)$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Skalarproduktet](/bok/r2/r2-5-3) (vektoroppbygning av $\hat{\mathbf{L}}$). De sfærisk-harmoniske $Y_l^m$ og $\hat{L}^2$/$\hat{L}_z$ i sfæriske koordinater antas oppgitt.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $\hat{L}^2 Y_l^m = \hbar^2 l(l+1)\,Y_l^m$, $\hat{L}_z Y_l^m = \hbar m_l\,Y_l^m$; $\hat{L}_z = -i\hbar\,\partial/\partial\phi$; egenverdi-innsetting (la operatoren virke og les av); begrensningen $-l \leq m_l \leq l$ og hvorfor $(\hbar m_l)^2 \leq \hbar^2 l(l+1)$ (z-komponenten kan ikke overstige total-lengden); vinkelen mellom $\mathbf{L}$ og z-aksen $\cos\theta = m_l/\sqrt{l(l+1)}$; **forventningsverdi i egenbasis** $\langle\hat{O}\rangle = \sum_i|c_i|^2 o_i$ (vektet snitt av egenverdiene — raskest når tilstanden er gitt i egenbasis). **Utledning som kreves aktivt:** egenverdi-innsetting for en gitt $Y_l^m$; ulikheten $(\hbar m_l)^2 \leq \hbar^2 l(l+1)$. **Figurkrav:** vektormodell — $\mathbf{L}$ på en kjegle rundt z-aksen med tillatte $m_l$-projeksjoner.
- **Oppgavesjangre:** F (+ M). Mønstereksempel: «En elektron er i tilstanden $\psi_{21m}$. (a) Hvilke verdier kan $m_l$ ha? (b) For hver av dem, finn egenverdiene til $\hat{L}^2$ og $\hat{L}_z$. (c) Vis at $L_z^2 \leq L^2$ for alle tillatte $m_l$.»
- **Typiske feil (analysen §5):** Feil egenverdier ($\hbar l^2$ i stedet for $\hbar^2 l(l+1)$; $\hbar m_l^2$ i stedet for $\hbar m_l$); bryte $|m_l|\leq l$; forveksle operator og egenverdi; tro at $L_z$ kan være lik $L$.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 6.2: $L_z$-måling — utvikling i sfærisk-harmoniske og superposisjon

- **id:** `fys2140-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-6-1`
- **kapitteltype:** teori
- **description:** Å utvikle en gitt vinkelfunksjon i $Y_l^m$, normere en superposisjon over $(l,m_l)$ og lese av måleutfall med $P(m_l\hbar) = |c|^2$.
- **Eksamensbelegg:** Sjanger F, målevarianten (~67 %). Utvikle en gitt vinkelfunksjon i $Y_l^m$ (oppgitte $Y_1^{\pm1}$, $\sin\phi = (e^{i\phi}-e^{-i\phi})/2i$); normér superposisjon; $P(m_l\hbar) = |\text{koeffisient}|^2$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1, 2.1 (komplekse eksponentialer); [Trigonometriske formler](/bok/r2/r2-4-6). Sfærisk-harmoniske $Y_0^0$, $Y_1^0$, $Y_1^{\pm1}$ antas oppgitt.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **utvikle** en gitt vinkelfunksjon (f.eks. $\propto \sin\theta\sin\phi$) i egenbasis av $Y_l^m$ ved å skrive trig-uttrykk med komplekse eksponentialer ($\sin\phi = (e^{i\phi}-e^{-i\phi})/2i$) og identifisere koeffisientene $c_{l,m}$ foran hver $Y_l^m$; **normér** superposisjonen med $\sum|c_{l,m}|^2 = 1$; **måleutfall for $L_z$:** mulige verdier $m_l\hbar$, hver med $P(m_l\hbar) = |c_{l,m}|^2$; forventningsverdi $\langle L_z\rangle = \sum|c|^2 m_l\hbar$ og $\langle L^2\rangle = \sum|c|^2\hbar^2 l(l+1)$. **Utledning som kreves aktivt:** hele kjeden vinkelfunksjon → komplekse eksponentialer → $Y_l^m$-koeffisienter → normering → sannsynligheter. **Figurkrav:** stolpediagram over $P(m_l\hbar)$ for måleutfallene.
- **Oppgavesjangre:** F (+ G/M). Mønstereksempel: «En partikkel har vinkeldel $f(\theta,\phi) = N\sin\theta\cos\phi$. (a) Skriv $\cos\phi$ med komplekse eksponentialer og uttrykk $f$ som en superposisjon av $Y_1^{+1}$ og $Y_1^{-1}$. (b) Normér. (c) Hvilke verdier kan en $L_z$-måling gi, og med hvilke sannsynligheter?»
- **Typiske feil (analysen §5):** Gjette sannsynligheter i stedet for å projisere ($|c|^2$); glemme normeringen av superposisjonen; feil i overgangen trig ↔ komplekse eksponentialer; blande $Y_1^{+1}$ og $Y_1^{-1}$-fortegn.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.3: Spinn — $\hat{S}^2$, $\hat{S}_z$ og Stern–Gerlach *(spinn: perfekt-forberedende · SG: kjenne)*

- **id:** `fys2140-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys2140-6-1`
- **kapitteltype:** teori
- **description:** Egenspinnet som en indre egenskap uten romlig analog, $s=\tfrac12$-algebraen, og Stern–Gerlach-eksperimentet som avslørte den.
- **Eksamensbelegg:** Spinngrunnlag (forbereder Del 8, ~73 %) + Stern–Gerlach (~13 %, kjenne). $\hat{S}^2\to\hbar^2 s(s+1)$, $\hat{S}_z\to\hbar m_s$, $s=\tfrac12$; sekvensielle SG-apparater (tell elektroner). Prioritet: **kunne/perfekt-forberedende** (SG: **kjenne**).
- **Forkunnskaper/kryssbok:** kap. 6.1; [Magnetisk kraft på ladede partikler](/bok/fysikk2/fysikk2-4-2) (avbøyning i inhomogent felt).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **spinn** som indre angulærmoment uten romlig bølgefunksjon; $\hat{S}^2\chi = \hbar^2 s(s+1)\chi$, $\hat{S}_z\chi = \hbar m_s\chi$, med $s = \tfrac12$, $m_s = \pm\tfrac12$; spinorbasis $\chi_+ = |\!\uparrow\rangle$, $\chi_- = |\!\downarrow\rangle$; total angulærmoment-vektoroppbygning $\hat{\mathbf{J}} = \hat{\mathbf{L}} + \hat{\mathbf{S}}$ (introduseres, brukes i Del 9); fermion/boson-skillet (halvtallig vs. heltallig spinn — peker mot Del 8). **Stern–Gerlach (kjenne):** et inhomogent magnetfelt splitter en stråle i **to** (ikke et kontinuum) → viste spinnkvantiseringen; **sekvensielle apparater** — tell hvor stor andel som passerer gjennom orienteringer A→B→C (måling langs én akse «nullstiller» forrige akse). **Utledning som kreves aktivt:** egenverdi-innsetting for $\hat{S}^2$/$\hat{S}_z$; opptelling gjennom sekvensielle SG-apparater. **Figurkrav:** SG-oppsett med stråle splittet i to; sekvensielt A/B/C-apparat.
- **Oppgavesjangre:** H-forberedende (+ M). Mønstereksempel: «(a) Hvilke egenverdier har $\hat{S}^2$ og $\hat{S}_z$ for et elektron? (b) I et Stern–Gerlach-apparat langs z-aksen splittes en stråle i to — hva forteller det oss? (c) De med spinn opp sendes videre gjennom et apparat langs x-aksen; hvor stor andel har spinn opp langs x?»
- **Typiske feil:** Forveksle $s$ (fast $=\tfrac12$) med $m_s$; tro at spinn har en romlig bølgefunksjon; tro at SG gir et kontinuum av avbøyninger; feil i sekvensiell opptelling (glemme at måling langs ny akse gir 50/50).
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 6:** 4 prøver (6.A $\hat{L}^2$/$\hat{L}_z$-egenverdier for ren $\psi_{nlm}$ + $|m_l|\leq l$ · 6.B $L_z$-måling: utvikling i $Y_l^m$ + sannsynligheter · 6.C spinn $\hat{S}^2$/$\hat{S}_z$ + Stern–Gerlach (kjenne) · 6.D blandet angulærmoment på eksamensnivå)

---

### Del 7 — Superposisjon, tidsutvikling og måling *(prioritet: PERFEKT)*

#### Kapittel 7.1: Superposisjon og tidsutvikling

- **id:** `fys2140-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-2-2`
- **kapitteltype:** teori
- **description:** Hvordan en superposisjon av stasjonære tilstander utvikles i tid med én fasefaktor $e^{-iE_nt/\hbar}$ per ledd, og hvorfor normeringen bevares.
- **Eksamensbelegg:** Sjanger G (~73 %). Hver egentilstand får sin fasefaktor; $\Psi(t) = \sum c_n\psi_n e^{-iE_nt/\hbar}$; normering bevares. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2, 2.1 (fasefaktorer, $|e^{i\phi}|=1$); [Uendelige rekker og konvergens](/bok/r2/r2-1-5) (superposisjonssummer).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **superposisjon** $\Psi(x,0) = \sum_n c_n\psi_n(x)$ med stasjonære $\psi_n$ (energiegenfunksjoner); **tidsutvikling** — hver egentilstand får sin egen fasefaktor: $\Psi(x,t) = \sum_n c_n\psi_n(x)\,e^{-iE_nt/\hbar}$ (**ikke** én felles fasefaktor når energiene er ulike); **normering bevares** i tid ($\sum|c_n|^2 = 1$ for alle $t$, siden $|e^{-iE_nt/\hbar}|=1$); sannsynlighetstettheten $|\Psi(x,t)|^2$ **oscillerer** med krysstermer $\cos((E_m-E_n)t/\hbar)$ (i motsetning til en ren stasjonær tilstand). **Utledning som kreves aktivt:** oppsett av $\Psi(x,t)$ fra $\Psi(x,0)$; **vis at** normeringen er tidsuavhengig; framheving av oscillasjonsfrekvensen $(E_m-E_n)/\hbar$. **Figurkrav:** $|\Psi(x,t)|^2$ for en to-tilstands-superposisjon ved to tidspunkter (vandrende profil).
- **Oppgavesjangre:** G (+ M). Mønstereksempel: «En partikkel i en boks er i $\Psi(x,0) = \frac{1}{\sqrt2}(\psi_1 + \psi_2)$. (a) Skriv $\Psi(x,t)$ med riktige fasefaktorer. (b) Vis at normeringen er bevart for alle $t$. (c) Med hvilken frekvens oscillerer $|\Psi(x,t)|^2$?»
- **Typiske feil (analysen §5):** Bruke **én** felles fasefaktor for hele superposisjonen (skal være per ledd); glemme fasefaktoren helt; tro at $|\Psi|^2$ er tidsuavhengig også for superposisjoner; feil fortegn i eksponenten.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 7.2: Målingspostulatet — $P(E_n)=|c_n|^2$ og kommutator-begrunnet tidsuavhengighet

- **id:** `fys2140-7-2` · **number:** 7.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-7-1`
- **kapitteltype:** teori
- **description:** Hva en energimåling gir ($P(E_n)=|c_n|^2$, $\langle E\rangle$, $\sigma_E$), og den avgjørende ferdigheten: begrunne hvilke forventningsverdier som er tidsuavhengige via kommutator med $\hat{H}$.
- **Eksamensbelegg:** Sjanger G, kjernen (~73 %). Måleutfall = én $E_n$ med $P=|c_n|^2$; $\langle E\rangle$ tidsuavhengig; «hvilke $\langle\hat{O}\rangle$ er tidsuavhengige?» begrunnes med kommutator (dokumentert «begrunn svaret»-krav); Ehrenfest for $\langle v(t)\rangle$ (H2018). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1, 3.2 (kommutatorer); kap. 6.1 ($[\hat{H},\hat{L}]=0$-argumentet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **energimåling** — utfallet er én av egenverdiene $E_n$, med $P(E_n) = |c_n|^2$; etter måling «kollapser» tilstanden til $\psi_n$; $\langle E\rangle = \sum_n|c_n|^2 E_n$ og $\sigma_E = \sqrt{\langle E^2\rangle - \langle E\rangle^2}$; **$\langle E\rangle$ er tidsuavhengig** (energiegenverdiene og $|c_n|^2$ endres ikke); **tidsuavhengighet begrunnet med kommutator** — $\langle\hat{O}\rangle$ er tidsuavhengig $\Leftrightarrow [\hat{H},\hat{O}] = 0$ (størrelser som kommuterer med $\hat{H}$: energi selv, $\hat{L}^2$ og $\hat{L}_z$ når $[\hat{H},\hat{\mathbf{L}}]=0$); størrelser som **ikke** kommuterer (f.eks. $\hat{x}$) kan oscillere med $(E_m-E_n)/\hbar$; **Ehrenfests teorem** $\frac{d\langle x\rangle}{dt} = \frac{\langle p\rangle}{m}$, $\frac{d\langle p\rangle}{dt} = -\langle dV/dx\rangle$ (klassisk grense). **Utledning som kreves aktivt:** (i) $\langle E\rangle = \sum|c_n|^2 E_n$; (ii) kommutator-begrunnelse for hvorfor en gitt $\langle\hat{O}\rangle$ er (u)avhengig av tid — **begrunn, ikke bare påstå**. **Figurkrav:** stolpediagram over $P(E_n)$ for en superposisjon.
- **Oppgavesjangre:** G (+ M). Mønstereksempel: «En tilstand er $\Psi(x,0) = \frac{1}{\sqrt3}\psi_1 + \sqrt{\frac23}\psi_2$ (energiegenfunksjoner). (a) Hvilke energier kan måles, og med hvilke sannsynligheter? (b) Finn $\langle E\rangle$ og $\sigma_E$. (c) Er $\langle E\rangle$ tidsuavhengig? Er $\langle x\rangle$? Begrunn hvert svar med et kommutator-argument.»
- **Typiske feil (analysen §5):** Hoppe over projeksjonen og gjette $P(E_n)$; **påstå tidsuavhengighet uten kommutator-argument**; tro at $\langle x\rangle$ alltid er konstant; glemme å normere før $|c_n|^2$; regne $\langle E\rangle$ med feil vekter.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 7.3: Drill: «pakken» — hydrogen + angulærmoment + superposisjon i én oppgave

- **id:** `fys2140-7-3` · **number:** 7.3 · **estimatedMinutes:** 100 · **prerequisites:** `fys2140-7-2`
- **kapitteltype:** drill (integrert)
- **description:** Det integrerte drillet på settets tyngste oppgave: en superposisjon av $\psi_{nlm}$ som normeres, får egenverdier for $\hat{H}$/$\hat{L}^2$/$\hat{L}_z$, utvikles i tid, og der energi eller $L_z$ måles — der flest poeng sitter.
- **Eksamensbelegg:** Sjangrene E + F + G kombinert — «pakken» opptrer i *samme* oppgave i praksis hvert år (oppgave 2/3). Å beherske hele kjeden normering → egenverdier → tidsutvikling → måling er den enkeltferdigheten som gir flest poeng. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) les av $(n,l,m_l)$ for hvert ledd og skriv egenverdiene ($E_n$, $\hbar^2 l(l+1)$, $\hbar m_l$); 2) **normér** superposisjonen ($\sum|c_i|^2 = 1$); 3) skriv $\Psi(t)$ med **én fasefaktor per ledd** ($e^{-iE_nt/\hbar}$); 4) **måling:** $P(\text{egenverdi}) = |c_i|^2$ — for energi bruk $E_n$, for $L_z$ bruk $m_l\hbar$; 5) forventningsverdier $\langle\hat{O}\rangle = \sum|c_i|^2 o_i$; 6) **tidsuavhengighet:** begrunn med kommutator hvilke $\langle\hat{O}\rangle$ som er konstante; 7) enhet på tallsvar. Gjennomregnet eksamenscase med margnotater (normering, fasefaktor per ledd, projeksjon, kommutator-begrunnelse). 10–14 oppgaver på eksamensnivå som kombinerer hydrogen/angulærmoment/superposisjon, minst én med både energi- og $L_z$-måling, én med kommutator-begrunnet tidsuavhengighet.
- **Oppgavesjangre:** E+F+G. Mønstereksempel (deloppgavekjede): «En elektron i hydrogen er ved $t=0$ i $\Psi = A(2\psi_{100} + \psi_{210} - \psi_{21{-1}})$. (a) Normér ($A$). (b) Skriv $\Psi(t)$. (c) En energimåling utføres — mulige utfall og sannsynligheter? (d) En $L_z$-måling — mulige utfall og sannsynligheter? (e) Er $\langle\hat{L}^2\rangle$ tidsuavhengig? Begrunn med kommutator.»
- **Typiske feil:** Hele sjanger E/F/G-repertoaret samlet: manglende normering, felles fasefaktor, gjettede sannsynligheter, manglende kommutator-begrunnelse, blande $\hat{H}$- og $\hat{L}_z$-egenverdier ved måling.
- **Quiz: 14 · Flashcards: 12**

**Prøve-kvote Del 7:** 4 prøver (7.A superposisjon og tidsutvikling med fasefaktor per ledd + bevart normering · 7.B energimåling $P(E_n)=|c_n|^2$, $\langle E\rangle$, $\sigma_E$ · 7.C kommutator-begrunnet tidsuavhengighet + Ehrenfest · 7.D «pakken»: hydrogen+angulærmoment+superposisjon+måling på eksamensnivå)

---

### Del 8 — Identiske partikler, Pauli og fler-elektronatomer *(prioritet: PERFEKT — 100 % i 2021–24)*

#### Kapittel 8.1: Identiske partikler, symmetri og Pauli-prinsippet

- **id:** `fys2140-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-6-3`
- **kapitteltype:** teori
- **description:** Fermioner vs. bosoner, kravet om (anti)symmetri under partikkelbytte, og hvordan hele Ψ = rom × spinn må være antisymmetrisk for elektroner.
- **Eksamensbelegg:** Sjanger H (~73 %, 100 % 2021–24). Pauli-symmetrien: hele $\Psi$ antisymmetrisk under $1\leftrightarrow2$; symmetrisk spinn ⇒ antisymmetrisk rom. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.3 (spinn, fermion/boson); kap. 5.1 (orbitaler).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **identiske partikler** kan ikke merkes; **bytteoperatoren** $\hat{P}_{12}$ med egenverdier $\pm1$; **fermioner** (halvtallig spinn, f.eks. elektroner) → total $\Psi$ **antisymmetrisk** under $1\leftrightarrow2$; **bosoner** (heltallig spinn) → symmetrisk; **Pauli-eksklusjon** som følge; faktorisering $\Psi = \psi_\text{rom}(\mathbf{r}_1,\mathbf{r}_2)\cdot\chi_\text{spinn}(1,2)$ — for elektroner: **symmetrisk rom ⇒ antisymmetrisk spinn**, og omvendt (hele produktet antisymmetrisk); symmetriske/antisymmetriske romkombinasjoner $\psi_\pm = \frac{1}{\sqrt2}[\psi_a(1)\psi_b(2) \pm \psi_b(1)\psi_a(2)]$. **Utledning som kreves aktivt:** **vis** antisymmetrien til en gitt $\Psi$ eksplisitt ved å bytte $1\leftrightarrow2$; koble spinn-symmetri til rom-symmetri. **Figurkrav:** to-partikkel romfunksjon symmetrisk vs. antisymmetrisk (noden langs $x_1=x_2$).
- **Oppgavesjangre:** H (+ M). Mønstereksempel: «To elektroner er i orbitalene $\psi_a$ og $\psi_b$. (a) Skriv den symmetriske og den antisymmetriske romkombinasjonen. (b) Hvilken spinntilstand må hver av dem kombineres med for at hele $\Psi$ skal være tillatt for elektroner? (c) Vis eksplisitt at ditt totale $\Psi$ er antisymmetrisk under partikkelbytte.»
- **Typiske feil (analysen §5):** Glemme at **hele** $\Psi$ (ikke bare rom eller bare spinn) må være antisymmetrisk; koble symmetrisk rom med symmetrisk spinn; ikke vise antisymmetrien eksplisitt (bare påstå den); forveksle fermion/boson-regelen.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 8.2: To-elektron spinn — triplett, singlett og utvekslingskraften

- **id:** `fys2140-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-8-1`
- **kapitteltype:** teori
- **description:** De fire spinn-egenfunksjonene (triplett $S=1$ + singlett $S=0$), deres $\hat{S}^2$/$\hat{S}_z$-egenverdier, og utvekslingskraften som statistisk symmetrieffekt.
- **Eksamensbelegg:** Sjanger H, kjernen (~73 %, 100 % 2021–24). De fire tilstandene; vis $\hat{S}^2 = 0$ for singletten (H2017); utvekslingskraft som symmetrifølge. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.1, 6.3.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **de fire spinntilstandene** — **triplett** (symmetrisk, $S=1$, $m_S = +1,0,-1$): $\uparrow\uparrow$, $\frac{1}{\sqrt2}(\uparrow\downarrow+\downarrow\uparrow)$, $\downarrow\downarrow$; **singlett** (antisymmetrisk, $S=0$): $\frac{1}{\sqrt2}(\uparrow\downarrow-\downarrow\uparrow)$; egenverdier $\hat{S}^2\to\hbar^2 S(S+1)$, $\hat{S}_z\to\hbar m_S$ (total spinn $\hat{\mathbf{S}} = \hat{\mathbf{S}}_1 + \hat{\mathbf{S}}_2$); **vis $\hat{S}^2 = 0$ for singletten**; **utvekslingskraft** — *ikke* en ekte kraft, men statistisk følge av symmetrikravet: symmetrisk romdel ⇒ elektronene «nærmere» ($\langle(x_1-x_2)^2\rangle$ mindre), antisymmetrisk romdel ⇒ lenger fra hverandre (node ved $x_1=x_2$); konsekvens for Coulomb-energien. **Utledning som kreves aktivt:** koble triplett/singlett til rom-symmetrien (via Pauli fra 8.1); vis $\hat{S}^2$-egenverdien for singletten; argumenter for $\langle(x_1-x_2)^2\rangle$-forskjellen. **Figurkrav:** de fire spinntilstandene i et $S$/$m_S$-skjema.
- **Oppgavesjangre:** H (+ M). Mønstereksempel: «(a) Skriv opp de fire spinn-egenfunksjonene for to elektroner og angi $S$ og $m_S$ for hver. (b) Vis at singletten har $\hat{S}^2 = 0$. (c) Forklar med egne ord hvorfor utvekslingskraften ikke er en ekte kraft, og hvordan den påvirker avstanden mellom elektronene.»
- **Typiske feil (analysen §5):** Blande singlett og triplett / feil fortegn i $(\uparrow\downarrow\mp\downarrow\uparrow)$; kalle utvekslingskraften en ekte kraft; feil normering ($1/\sqrt2$); forveksle $m_S = 0$-tripletten med singletten.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 8.3: Atomstruktur — orbitaloppfylling og Hunds regel

- **id:** `fys2140-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-8-2`
- **kapitteltype:** teori
- **description:** Hvordan elektroner fyller orbitaler (1s, 2s, 2p …) under Pauli, og hvorfor Hunds regel gir parallelle spinn i en delvis fylt underskall — for et navngitt grunnstoff.
- **Eksamensbelegg:** Sjanger H, anvendelsen (~73 %). Orbitaloppfylling og elektronkonfigurasjon; Hunds regel forklart via utvekslingskraft; tegn nivåskjema og fyll inn elektroner for et navngitt $Z$ (karbon/nitrogen/oksygen). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.2, 5.1 (kvantetall/orbitaler).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **orbitaler** merket $(n,l)$ (1s, 2s, 2p, 3s …), hver med $2(2l+1)$ plasser (Pauli, spinn inkludert); **oppfyllingsrekkefølge** (Aufbau, grovt: $1s\,2s\,2p\,3s\,3p\dots$); **elektronkonfigurasjon** for et navngitt grunnstoff; **Hunds regel** — i et delvis fylt underskall fylles orbitalene først med **parallelle spinn** (maksimal $S$, triplett), fordi symmetrisk spinn ⇒ antisymmetrisk rom ⇒ elektronene lenger fra hverandre ⇒ lavere Coulomb-frastøtning ⇒ lavest energi (direkte konsekvens av utvekslingskraften fra 8.2); grunntilstandens $S$, $L$, $J$ (termsymbol kort, hvis relevant). **Utledning som kreves aktivt:** begrunnelsen for Hunds regel via utvekslingskraft (ikke bare påstå regelen); oppfylling for et konkret atom. **Figurkrav:** nivåskjema med orbitalbokser og elektroner (piler) fylt inn for f.eks. karbon (2p²) — parallelle spinn i to ulike p-orbitaler.
- **Oppgavesjangre:** H (+ M). Mønstereksempel: «Karbon har $Z=6$. (a) Skriv elektronkonfigurasjonen. (b) Tegn nivåskjemaet og fyll inn elektronene i grunntilstanden. (c) Bruk Hunds regel og forklar — via utvekslingskraften — hvorfor de to 2p-elektronene har parallelle spinn.»
- **Typiske feil (analysen §5):** Feil oppfyllingsrekkefølge; overfylle en orbital (bryte Pauli); pare spinn i stedet for parallelle (bryte Hund); forklare Hund uten å koble til utvekslingskraft/symmetri (kun påstand).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 8.4: Drill: fler-elektron/spinn-oppgaven (sjanger H)

- **id:** `fys2140-8-4` · **number:** 8.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys2140-8-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på settets oppgave 3: fire spinn-egenfunksjoner, Pauli-symmetri, utvekslingskraft og orbitaloppfylling for et navngitt atom, som fullført besvarelse.
- **Eksamensbelegg:** Sjanger H samlet (~73 %, 100 % 2021–24). Varianter: skriv de fire spinntilstandene og egenverdier; vis antisymmetri; forklar utvekslingskraft; fyll orbitaler + Hund for navngitt $Z$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) skriv de fire spinn-egenfunksjonene med $S$/$m_S$ og $\hat{S}^2$/$\hat{S}_z$-egenverdier; 2) koble spinn-symmetri til rom-symmetri (Pauli — hele $\Psi$ antisymmetrisk); 3) **vis antisymmetrien eksplisitt**; 4) forklar utvekslingskraft som symmetrifølge (ikke ekte kraft); 5) for et navngitt atom: elektronkonfigurasjon, nivåskjema, Hund (parallelle spinn begrunnet); 6) presise fagbegrep (fermion, singlett/triplett, utvekslingskraft, Pauli, Hund). Gjennomregnet eksamenscase med margnotater (symmetri-koblingen, $\hat{S}^2=0$ for singlett, Hund-begrunnelsen). 10–14 oppgaver på eksamensnivå som roterer sjangeren, minst én med $\hat{S}^2$-utregning, én full atomoppfylling.
- **Oppgavesjangre:** H (+ M). Mønstereksempel (deloppgavekjede): «To elektroner i et atom. (a) Skriv de fire spinntilstandene med $S$, $m_S$ og $\hat{S}^2$-egenverdi. (b) For nitrogen ($Z=7$): skriv konfigurasjonen, fyll nivåskjemaet, og bruk Hund. (c) Forklar med utvekslingskraften hvorfor grunntilstanden har maksimal total spinn.»
- **Typiske feil:** Hele sjanger H-repertoaret: symmetri-koblingen feil, ekte-kraft-fella, Pauli/Hund-brudd, singlett/triplett-forveksling, Hund uten symmetribegrunnelse.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 8:** 4 prøver (8.A identiske partikler + Pauli-symmetri, vis antisymmetri · 8.B fire spinn-egenfunksjoner (triplett/singlett) + $\hat{S}^2$ · 8.C utvekslingskraft + orbitaloppfylling + Hund for navngitt atom · 8.D blandet fler-elektron-oppgave på eksamensnivå)

---

### Del 9 — Perturbasjon-tillegg (det harde sluttstykket) *(prioritet: KUNNE — skiller topp)*

#### Kapittel 9.1: Relativistisk korreksjon til kinetisk energi

- **id:** `fys2140-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys2140-5-2`, `fys2140-3-2`
- **kapitteltype:** teori
- **description:** Første relativistiske korreksjon $-\hat{p}^4/8m^3c^2$ fra rekkeutvikling, dens forventningsverdi i grunntilstanden, og hvorfor effekten vokser sterkt med $Z$.
- **Eksamensbelegg:** Sjanger L (~33 %, «hardt sluttstykke»). V2021: rekkeutvikle $\sqrt{1+x}$, $K \approx K_0 - p^4/8m^3c^2$; regn $\langle K'\rangle$ for grunntilstanden; skaler til tungt atom (gull, $Z=79$). Prioritet: **kunne** (skiller toppkarakterene).
- **Forkunnskaper/kryssbok:** kap. 5.2, 3.2; [Uendelige rekker og konvergens](/bok/r2/r2-1-5) (rekkeutvikling); [Relativistisk energi og masse](/bok/fysikk2/fysikk2-6-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: start fra relativistisk kinetisk energi $K = \sqrt{(pc)^2 + (mc^2)^2} - mc^2$; **rekkeutvikle** $\sqrt{1+x} \approx 1 + \tfrac12 x - \tfrac18 x^2 + \dots$ → $K \approx \frac{p^2}{2m} - \frac{p^4}{8m^3c^2} + \dots$; **korreksjonsleddet** $\hat{H}' = -\frac{\hat{p}^4}{8m^3c^2}$; **førsteordens energiskift** $\langle\hat{H}'\rangle = -\frac{1}{8m^3c^2}\langle\hat{p}^4\rangle$, regnet for grunntilstanden via $\langle(\hat{p}^2 u)^*(\hat{p}^2 u)\rangle$ (Hermitisk triks: $\langle\hat{p}^4\rangle = \langle\hat{p}^2\psi|\hat{p}^2\psi\rangle$); **$Z$-skalering** — korreksjonen vokser som en høy potens av $Z$, så den er stor for tunge atomer (gull) og neglisjerbar for hydrogen. **Utledning som kreves aktivt:** rekkeutviklingen til korreksjonsleddet; oppsett av $\langle\hat{p}^4\rangle$; kommentar om $Z$-avhengigheten. **Figurkrav:** energinivå før/etter korreksjonen (liten nedforskyvning).
- **Oppgavesjangre:** L (+ M). Mønstereksempel: «(a) Rekkeutvikle den relativistiske kinetiske energien og vis at første korreksjon er $-\hat{p}^4/8m^3c^2$. (b) Sett opp forventningsverdien $\langle\hat{H}'\rangle$ for hydrogens grunntilstand ved å bruke $\langle\hat{p}^4\rangle = \langle\hat{p}^2\psi|\hat{p}^2\psi\rangle$. (c) Forklar kvalitativt hvorfor effekten er mye større i et gullatom enn i hydrogen.»
- **Typiske feil (analysen §5):** Feil ledd i rekkeutviklingen ($-\tfrac18 x^2$-koeffisienten); regne $\langle\hat{p}^4\rangle$ uten det Hermitiske trikset (tungt); glemme $Z$-skaleringen; behandle korreksjonen som stor for hydrogen.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 9.2: Spinn-bane-kobling (LS), finstruktur og Zeeman-effekten

- **id:** `fys2140-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys2140-9-1`, `fys2140-6-3`
- **kapitteltype:** teori
- **description:** Spinn-bane-koblingen $\hat{H}_{LS} = C\,\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$ med finstruktursplitting, og Zeeman-leddet i et ytre magnetfelt.
- **Eksamensbelegg:** Sjanger L (~33 %). V2018: LS-kobling, $\hat{\mathbf{J}} = \hat{\mathbf{L}} + \hat{\mathbf{S}}$, splitting av $n=2,l=1$ i $j=\tfrac12,\tfrac32$; finn $C$ fra oppgitt $\Delta\lambda$. V2020/V2024: Zeeman $\hat{H} = \hat{H}_0 + \frac{e}{2m_e}B\hat{L}_z$, tidsutvikling med to frekvenser. Prioritet: **kunne** (skiller topp).
- **Forkunnskaper/kryssbok:** kap. 9.1, 6.3, 7.2; [Skalarproduktet](/bok/r2/r2-5-3) ($\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **spinn-bane** $\hat{H}_{LS} = C\,\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$; total angulærmoment $\hat{\mathbf{J}} = \hat{\mathbf{L}} + \hat{\mathbf{S}}$ → $\hat{\mathbf{L}}\cdot\hat{\mathbf{S}} = \tfrac12(\hat{J}^2 - \hat{L}^2 - \hat{S}^2)$ med egenverdi $\tfrac12\hbar^2[j(j+1) - l(l+1) - s(s+1)]$; **finstruktur** — $n=2,l=1$ splittes i $j=\tfrac12$ og $j=\tfrac32$; finn koblingskonstanten $C$ fra oppgitt splitting $\Delta\lambda$ via $\Delta E = hc\,\Delta\lambda/\lambda^2$. **Zeeman** — $\hat{H} = \hat{H}_0 + \frac{e}{2m_e}B\hat{L}_z$; **vis at $\psi_{nlm}$ fortsatt er egentilstand** (siden $[\hat{H}_0,\hat{L}_z]=0$) med ny egenverdi $E_{nlm} = E_n + \frac{e\hbar}{2m_e}B\,m_l$; en superposisjon utvikles i tid med **to karakteristiske frekvenser** (fra de to skiftede energiene). **Utledning som kreves aktivt:** $\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$-egenverdien via $\hat{J}^2$; at $\psi_{nlm}$ er Zeeman-egentilstand; de to tidsfrekvensene. **Figurkrav:** energinivå før/etter LS-splitting ($j=\tfrac12,\tfrac32$) og Zeeman-splitting (jevn $m_l$-avstand).
- **Oppgavesjangre:** L (+ G/M). Mønstereksempel: «Et hydrogenatom i $n=2$, $l=1$ utsettes for et ytre magnetfelt $B$ langs z. (a) Vis at $\psi_{21m}$ fortsatt er en energiegentilstand med Zeeman-leddet, og finn den nye energien. (b) Ved $t=0$ er atomet i en superposisjon av $m_l=+1$ og $m_l=-1$; skriv $\Psi(t)$ og angi de to karakteristiske frekvensene.»
- **Typiske feil (analysen §5):** Feil egenverdi for $\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$ (glemme $\tfrac12$ eller $\hbar^2$); feil $j$-verdier ($|l-s|\dots l+s$); tro at Zeeman-leddet ødelegger egentilstanden (det gjør det ikke når $[\hat{H}_0,\hat{L}_z]=0$); bruke én felles tidsfrekvens.
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 9:** 4 prøver (9.A relativistisk korreksjon: rekkeutvikling + $\langle\hat{p}^4\rangle$ · 9.B LS-kobling: $\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$-egenverdi + finstruktur · 9.C Zeeman: egentilstand + tidsutvikling med to frekvenser · 9.D blandet perturbasjon på eksamensnivå (hardt sluttstykke))

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Kvalitativ og begrepsdrill (sjanger M)

- **id:** `fys2140-10-1` · **number:** 10.1 · **estimatedMinutes:** 70 · **prerequisites:** Del 1–9
- **kapitteltype:** teori (tverrgående sjangerdrill)
- **description:** «Begrunn/Forklar med egne ord»-oppgavene samlet — de selvstendig poenggivende kvalitative deloppgavene som går igjen i nesten hvert sett.
- **Eksamensbelegg:** Sjanger M i **minst én deloppgave per sett**; i settene med synlige poeng (V2017, H2017) er kvalitative deloppgaver verdt **3–5 poeng** — like mye som en regneoppgave. Prioritet: **perfekt** (billige, sikre poeng — men krever presist fagbegrep).
- **Forkunnskaper/kryssbok:** hele boka (gjenbruker Del 1–9).
- **Innholdskontrakt:** Svarmalen etableres først: 1) navngi fenomenet/begrepet med **presist fagbegrep**; 2) knytt det til situasjonen; 3) konkluder kort — ingen gardering, ingen essay (2–4 setninger). **Gjengangerbank med modellsvar (minst 25 stk)** på tvers av boka, hver med henvisning til kapitlet sitt: hva $|\Psi|^2$ betyr og kravene til $\psi$ (2.1); egenfunksjon/stasjonær tilstand (2.2); hvordan en klassisk størrelse blir operator (3.1); hvorfor $\langle x\rangle = 0$ ved symmetri (3.1); hvorfor to Compton-topper (1.2); de tre resultatene bølgeteorien ikke forklarer (1.2); relativistisk vs. ikke-relativistisk impuls (1.1); degenerasjon-begrepet (5.1); superposisjon vs. egentilstand og hva en måling gir for hver (7.1–7.2); hvorfor en forventningsverdi er tidsuavhengig — kommutator (7.2); fermion vs. boson (8.1); hvorfor utvekslingskraften ikke er en ekte kraft (8.2); hvorfor triplett gir lavest energi — Hund (8.3); tunnelering klassisk vs. kvantemekanisk (4.3); fase- vs. gruppehastighet (2.2). **Utledning som kreves aktivt:** ingen — men hvert modellsvar skal demonstrere presist fagbegrep og korrekt kausalitet.
- **Oppgavesjangre:** M. Mønstereksempel: «Forklar med egne ord forskjellen på en superposisjon og en energiegentilstand, og hva en energimåling gir for hver av dem. Bruk presist fagbegrep.»
- **Typiske feil (analysen §5):** Svada uten fagbegrep; helgardering (to motstridende svar); essay der to–tre setninger er svaret; riktig fenomen men feil begrep; påstå uten å begrunne kausaliteten (f.eks. Hund uten utvekslingskraft).
- **Quiz: 18 · Flashcards: 30**

#### Kapittel 10.2: Øvingseksamen 1 — den standardiserte 3-oppgavers-malen

- **id:** `fys2140-10-2` · **number:** 10.2 · **estimatedMinutes:** 240 · **prerequisites:** `fys2140-10-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers skoleeksamen etter det moderne standardmønsteret: tre store, sammensatte oppgaver.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (2018→, V24/H24-form): **tre store langsvarsoppgaver**, hver med 4–7 deloppgaver: **O1** eksperimentell kvantefysikk (de Broglie/Bragg *eller* Compton *eller* fotoelektrisk) — med en forventningsverdi-/uskarphetsdel på slutten (sjanger A/B/C + D); **O2** hydrogen med angulærmoment, en superposisjon som normeres og tidsutvikles, energi-/$L_z$-måling (sjanger E+F+G — «pakken»); **O3** fler-elektron/spinn: de fire spinn-egenfunksjonene, Pauli-symmetri, utvekslingskraft, orbitaloppfylling for et navngitt atom (sjanger H). Et 1D-system (brønn eller HO) inngår i minst én oppgave. Tung på «Vis at …» og «Begrunn med egne ord» (~30–40 % forklaringskrav). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave — med **full mellomregning** (mellomregningen ER svaret), symmetri-/paritetsargument, projeksjon $|c_n|^2$, kommutator-begrunnelse, enheter og figurer der forventet. `tip`-notat om tidsbudsjett (~80 min/oppgave) og at forventningsverdi-/normeringsdelene ofte er de sikreste poengene.
- **Oppgavesjangre:** A/B/C+D, E+F+G, H (+ M spredt utover). Full 3-oppgavers-mal.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2 — 5–6 kortere oppgaver + perturbasjonstopp

- **id:** `fys2140-10-3` · **number:** 10.3 · **estimatedMinutes:** 240 · **prerequisites:** `fys2140-10-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i den kortere varianten (V22/V23-form) med bredere temaspenn og et perturbasjonsledd som topp.
- **Eksamensbelegg/miks:** Speiler settene med **5–6 kortere oppgaver** (V22/V23-form), bredere temadekning: **O1** de Broglie/Compton (A/B); **O2** forventningsverdier og $\sigma$ for en gitt $\psi$ + Heisenberg (D); **O3** 1D-system — uendelig brønn eller harmonisk oscillator med superposisjon/projeksjon (I/J); **O4** hydrogen: kvantetall, normering, koeffisient-matching (E); **O5** angulærmoment + $L_z$-måling via $Y_l^m$ (F); **O6** perturbasjonstopp — relativistisk korreksjon *eller* Zeeman (L). Dekker sammen med 10.2 og 10.4 samtlige sjangre A–M. Halv-oscillator/paritet-felle inkluderes i O3. Løsningsforslag som A-besvarelse i `collapsible` per oppgave med vektings-`tip`; eget notat om at kortere oppgaver betyr mindre samsvar mellom deloppgavene — mist ikke oversikten. `tip`-notat om tidsbudsjett (~40 min/oppgave).
- **Oppgavesjangre:** A/B, D, I/J, E, F, L (+ M). 5–6-oppgavers-varianten.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3 — «det kreative settet» (2015–2016-mønster)

- **id:** `fys2140-10-4` · **number:** 10.4 · **estimatedMinutes:** 240 · **prerequisites:** `fys2140-10-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i den eldre, ambisiøse stilen: kjent fysikk pakket inn i en forskningsnær ramme som går dypt på ett tema.
- **Eksamensbelegg/miks:** Speiler de eldre, **kreative/forskningsnære settene** (2015–2016) som viser hvor dypt sensor kan gå på et enkelt tema: **O1** hydrogen omskrevet til **positronium** (annen redusert masse → skalerte energinivåer og Bohr-radius) med normering og fotonovergang (E, med µ-vri); **O2** **2D harmonisk oscillator** med degenerasjon og $\hat{L}_z$-egentilstander $\psi_\pm = (\psi_{10}\pm i\psi_{01})/\sqrt2$ (J, dyp variant); **O3** en **koherent tilstand** som egentilstand til senkeoperatoren $\hat{a}_-$, med forventningsverdier (J/D, dyp variant). Innpakningen er forskningsnær (positronium, koherente tilstander), men fysikken er pensum — poenget er å vise at samme verktøy (redusert masse, stigeoperatorer, forventningsverdier) bærer selv de «uvanlige» oppgavene. Løsningsforslag som A-besvarelse med vektings-`tip` og et eget notat: **identifiser standardsjangeren bak den kreative innpakningen** før du regner. `tip`-notat om at slike sett belønner ro og systematikk.
- **Oppgavesjangre:** E (µ-vri), J (2D + koherent), D (+ M). Kreativ/dyp variant.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 10:** dekkes av kvalitativdrillen (10.1) og de 3 øvingseksamenene (10.2–10.4) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 16 |
| 1 | 1.1–1.3 | 24+24+12 = **60** | 28+28+10 = **66** |
| 2 | 2.1–2.2 | 20+22 = **42** | 24+26 = **50** |
| 3 | 3.1–3.3 | 24+24+14 = **62** | 30+30+12 = **72** |
| 4 | 4.1–4.4 | 22+22+16+12 = **72** | 24+26+18+14 = **82** |
| 5 | 5.1–5.3 | 22+24+12 = **58** | 28+28+10 = **66** |
| 6 | 6.1–6.3 | 22+20+20 = **62** | 28+24+24 = **76** |
| 7 | 7.1–7.3 | 22+24+14 = **60** | 26+28+12 = **66** |
| 8 | 8.1–8.4 | 22+22+22+12 = **78** | 26+26+26+10 = **88** |
| 9 | 9.1–9.2 | 18+20 = **38** | 22+24 = **46** |
| 10 | 10.1–10.4 | 18+6+6+6 = **36** | 30+0+0+0 = **30** |
| **Sum** | **32 kap.** | **582 ≥ 500 ✓** | **658 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (658, godt over gulvet).** Kvantefysikk er et
formel- og operatortungt fag der operatorer, kommutatorer, kvantetallregler og
standarduttrykk er «flashcard-gull»: hver operator ($\hat{x}$, $\hat{p}$, $\hat{H}$,
$\hat{L}^2$, $\hat{L}_z$, $\hat{S}^2$, $\hat{S}_z$, $\hat{a}_\pm$), hver kommutator,
hvert kvantetall og hver egenverdi ($\hbar^2 l(l+1)$, $\hbar m_l$, $E_n = -E_0/n^2$)
er et naturlig kort. Fordelingen speiler frekvensen: de fem nivå-1-søylene
(Del 1 eksperiment, Del 3 forventningsverdier, Del 5 hydrogen, Del 6 angulærmoment,
Del 7 superposisjon, Del 8 fler-elektron) bærer **380 av 582 quiz** og **434 av 658
flashcards**. Del 4 (1D-potensialer) er stor på antall kapitler men lavere per
kapittel fordi to av fire er kjenne-stoff (4.3 barriere, 4.4 molekyl). Del 9
(perturbasjon) er liten (kunne-nivå), men flashcard-tett fordi
$\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$-egenverdien og Zeeman-/relativistisk-formlene
er kompakte kort.

### Prøver per del (4 per temadel 1–9, 36 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre med løsningsforslag
skrevet som A-besvarelse (**full mellomregning** — mellomregningen ER svaret;
symmetri-/paritetsargument; projeksjon $|c_n|^2$; kommutator-begrunnelse; enheter;
figurer) og delpoeng-notat. Omfang i minutter. Prøvekapittel-id:
`fys2140-<del>-prove`, chapterNumber `<del>.P`. (Del 0 og Del 10 har ingen
separate delprøver — Del 10s øvingseksamener dekker den tverrgående treningen.)

**Del 1 — Eksperimentell:** 1.A de Broglie/Bragg m/relativistisk vs. ikke-rel. impuls (30 min) · 1.B Compton m/topp-tolkning (30) · 1.C fotoelektrisk m/grafavlesning + kvalitativ (30) · 1.D blandet åpningsoppgave (40).

**Del 2 — Bølgefunksjon/Schrödinger:** 2.A tolkning og krav til $|\Psi|^2$ + normering (30) · 2.B separasjon TASL→TUSL «vis at» (35) · 2.C stasjonære tilstander, planbølge/bølgepakke, fase/gruppehastighet (30) · 2.D blandet grunnlag + komplekse tall (35).

**Del 3 — Operatorer/forventningsverdier:** 3.A operatorer, kvantisering, forventningsverdi m/symmetri (30) · 3.B $\langle p^2\rangle$ via delvis integrasjon + $[\hat{x},\hat{p}]$ (35) · 3.C full σ + Heisenberg for gauss og polynom (40) · 3.D blandet forventningsverdi-oppgave (40).

**Del 4 — 1D-potensialer:** 4.A uendelig brønn: $E_n$, superposisjon, projeksjon m/paritet (40) · 4.B harmonisk oscillator: Hermite-ligning + stigeoperator (40) · 4.C barriere/tunnelering kvalitativt + skisse (kjenne) (30) · 4.D diatomisk molekyl: redusert masse, rotasjon, vibrasjon (kjenne) (30).

**Del 5 — Hydrogen:** 5.A kvantetall, degenerasjon $d=n^2$, energinivåer (30) · 5.B normering av radialdel + koeffisient-matching for $a$/$E_1$ (40) · 5.C $\langle r\rangle$/$\sigma_r$ + fotonoverganger m/bølgelengde (40) · 5.D blandet hydrogen-oppgave (40).

**Del 6 — Angulærmoment/spinn:** 6.A $\hat{L}^2$/$\hat{L}_z$-egenverdier + $|m_l|\leq l$ (30) · 6.B $L_z$-måling: utvikling i $Y_l^m$ + sannsynligheter (40) · 6.C spinn $\hat{S}^2$/$\hat{S}_z$ + Stern–Gerlach (kjenne) (30) · 6.D blandet angulærmoment (40).

**Del 7 — Superposisjon/tidsutvikling/måling:** 7.A superposisjon og tidsutvikling m/fasefaktor per ledd (35) · 7.B energimåling $P(E_n)=|c_n|^2$, $\langle E\rangle$, $\sigma_E$ (35) · 7.C kommutator-begrunnet tidsuavhengighet + Ehrenfest (35) · 7.D «pakken»: hydrogen+angulærmoment+superposisjon+måling (45).

**Del 8 — Fler-elektron/spinn:** 8.A identiske partikler + Pauli-symmetri, vis antisymmetri (35) · 8.B fire spinn-egenfunksjoner (triplett/singlett) + $\hat{S}^2$ (35) · 8.C utvekslingskraft + orbitaloppfylling + Hund for navngitt atom (40) · 8.D blandet fler-elektron-oppgave (40).

**Del 9 — Perturbasjon:** 9.A relativistisk korreksjon: rekkeutvikling + $\langle\hat{p}^4\rangle$ (40) · 9.B LS-kobling: $\hat{\mathbf{L}}\cdot\hat{\mathbf{S}}$-egenverdi + finstruktur (40) · 9.C Zeeman: egentilstand + tidsutvikling m/to frekvenser (40) · 9.D blandet perturbasjon (hardt sluttstykke) (45).

### Øvingseksamener (3 komplette 4-timers sett — kap. 10.2–10.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (10.2) | Standard 3-oppgaver (2018→, V24/H24) | O1 eksperiment+forventningsverdi, O2 hydrogen+angulærmoment+superposisjon («pakken»), O3 fler-elektron/spinn; ~30–40 % forklaring |
| Øvingseksamen 2 (10.3) | 5–6 kortere oppgaver (V22/V23) | Bredere spenn: de Broglie/Compton, forventningsverdi+Heisenberg, 1D-system, hydrogen, $L_z$-måling, perturbasjonstopp |
| Øvingseksamen 3 (10.4) | Kreativt/dypt sett (2015–2016) | Positronium (µ-vri), 2D HO m/$\hat{L}_z$-egentilstander, koherent tilstand som $\hat{a}_-$-egentilstand — kjent fysikk, forskningsnær innpakning |

Til sammen dekker de tre settene + kvalitativdrillen (10.1) samtlige sjangre A–M
minst én gang, med tyngdepunkt på de fem nivå-1-søylene.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig skoleeksamen, penn/papir,
   A–F), 3-oppgavers-malen (evt. 5–6 kortere), hjelpemidlene (Rottman +
   Øgrim/Lian + Angell/Lian + eget A4-notatark + evt. utdelt konstant-/integralside
   med Hermite $H_0$–$H_5$) og prognosen fra kap. 0.1. **Kildeforbeholdet fremhevet:
   sensorkravene er utledet, ikke fra fasit.**
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt*
   (forventningsverdier/σ, hydrogen, superposisjon/tidsutvikling/måling,
   fler-elektron/spinn, eksperimentell, angulærmoment), *kunne* (Schrödinger-
   grunnlag, Heisenberg/kommutator, harmonisk oscillator, uendelig brønn,
   perturbasjon), *kjenne* (barriere/tunnelering, diatomisk molekyl, Stern–Gerlach).
3. **3-oppgavers-malen** — hvordan settet er bygd (O1 eksperiment, O2 «pakken»
   hydrogen+angulærmoment+superposisjon, O3 fler-elektron/spinn), og
   løsningsoppskriftene fra drillkapitlene (1.3, 3.3, 5.3, 7.3, 8.4) i kortform.
4. **«Sensorreglene» (utledet — merk forbehold)** — metareglene: **«Vis at»
   dominerer, mellomregningen ER svaret**; **«Begrunn med egne ord» er selvstendig
   poenggivende** (3–5 p); **symmetri/paritet FØR integrasjon**; **sannsynlighet =
   $|c_n|^2$** (projeksjon, ikke gjett); **tidsuavhengighet begrunnes med
   kommutator**; **relativistisk vs. ikke-relativistisk impuls**; enheter på alle
   tallsvar; bruk de oppgitte hjelpemidlene — pluss karakterskille-listen
   (bestått/midt/topp) fra analysen §4.
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: $p=\sqrt{2mK}$ på relativistiske
   partikler → 1.1; hoppe over projeksjonen → 4.1/6.2/7.2; ignorere paritet →
   3.1/4.1; tidsuavhengighet uten kommutator → 7.2; feil breddedefinisjon i
   brønnen → 4.1; singlett/triplett-forveksling → 8.2; utvekslingskraft kalt ekte
   kraft → 8.2; glemme normeringen → 3.3; droppe enheter → gjennomgående; feil
   $\hat{L}^2$/$\hat{L}_z$-egenverdier → 6.1; felles fasefaktor for superposisjon
   → 7.1; ikke bruke integraltabell/Hermite → 3.2/4.2.
6. **Formelsida og notatarket i praksis** — kjerneverktøyene per tema med
   markering **må kunne brukes/utledes aktivt** (bølgefunksjoner, operatorer,
   egenverdier, kvantetallregler, standarduttrykk — hør hjemme på eget A4-ark) vs.
   **hentes fra ark/tabell** (standardintegraler, Hermite-polynomer, konstanter,
   sfærisk-harmoniske, $\nabla^2$ i sfæriske koordinater); treningsråd: løs alltid
   oppgaver MED de tillatte hjelpemidlene ved siden av, slik eksamen er — boka
   trener *bruk og utledning*, ikke pugg av tabeller.
7. **«Pakken» i dybden** — den kombinerte hydrogen+angulærmoment+superposisjon-
   ferdigheten (kap. 7.3) i kortform: den enkeltferdigheten som gir flest poeng,
   med sjekkliste (normér → egenverdier → $\Psi(t)$ med fasefaktor per ledd →
   projeksjon → kommutator-begrunnet tidsuavhengighet).
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 (forventningsverdier tidlig — den universelle ferdigheten) →
   4 → 5 → 6 → 7 («pakken») → 8 (fler-elektron, i sterk vekst) → 9 (perturbasjon,
   det harde sluttstykket) → 10; kvalitativdrillen (10.1) spres utover hele løpet;
   de tre øvingseksamenene (10.2–10.4) de siste ukene under tidspress (240 min,
   penn og papir, med de tillatte hjelpemidlene).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `fys2140` med alle 32
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen (obligatorisk
   — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under Universitetet i Oslo, navn
   «FYS2140 Kvantefysikk».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–M, 3-oppgavers-malen,
   frekvenstallene og kildeforbeholdet som resten av boka refererer til.
3. **Del 1 → 2 → 3** (den analytiske avhengighetskjeden: eksperiment →
   bølgefunksjon/Schrödinger → operator-/forventningsverdiapparatet). Del 3 er
   bokas metodefundament og må sitte før 1D-potensialene og hydrogen.
4. **Del 4** (1D-potensialer — bygger på 2.2 + 3.1; 4.4 bruker angulærmoment-
   egenverdien fra 5.1/6.1 i ferdig form — flagg avhengigheten).
5. **Del 5 → 6 → 7** («pakke»-kjeden: hydrogen → angulærmoment/spinn →
   superposisjon/tidsutvikling/måling). Kap. 7.3 (integrert pakke-drill) krever
   5, 6 og 7.1–7.2 — bygg det til slutt i kjeden. Kap. 6.1 introduserer
   angulærmoment-egenverdien som 5.1 også refererer — bygg 5.1 og 6.1 konsistent
   (samme notasjon).
6. **Del 8** (fler-elektron — bygger på spinn 6.3). Kan bygges parallelt med
   Del 9 av egen agent, men les 6.2–6.3s kontrakter.
7. **Del 9** (perturbasjon — bygger på 5.2, 3.2, 6.3, 7.2). «Hardt sluttstykke»,
   krever hele «pakken» + spinn.
8. **Del 10 til slutt** — kvalitativdrillen (10.1), de tre øvingseksamenene
   (10.2–10.4) gjenbruker hele boka; bygges av én agent som leser HELE skjelettet.
   Hver øvingseksamen har full mellomregning i løsningsforslaget.
9. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   (`fys2140-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
   fastsettes i BYGGEKONTRAKT.md (fase 3).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\hat{p}=-i\hbar\,d/dx$, $\hat{H}$, $\hat{L}^2$,
      $\hat{L}_z$, $\hat{S}^2$, $\hat{S}_z$, $\hat{a}_\pm$, $\psi_{nlm}$, $Y_l^m$,
      $\hbar$, $\sigma_x$, $c_n$).
- [ ] **Notasjonskonsistens (tekstsøk over alle fys2140-filer):** operator (hatt)
      aldri forvekslet med egenverdi (uten hatt); $\hbar$ (ikke $h$) i alle
      dynamiske uttrykk; kvantetall $n,l,m_l,s,m_s,S,m_S,j$ konsekvent; egenverdiene
      $\hbar^2 l(l+1)$ og $\hbar m_l$ korrekt overalt; **forbudt som satsingsstoff**
      (kun i Del 0-avgrensningen og som eksplisitt kjenne/beredskap i 4.3/4.4/6.3):
      full barriere-$T$/$R$-algebra som hovedoppgave, diatomisk molekyl som stort
      tema, Stern–Gerlach som eget stort tema, **ethvert numerisk/Python-spor**.
- [ ] **«Vis at»-disiplin:** hver «vis at»-utledning (separasjon TASL→TUSL,
      koeffisient-matching for $a$/$E_1$, $\langle p^2\rangle$ via delvis
      integrasjon, $[\hat{x},\hat{p}]=i\hbar$ via testfunksjon, $K=2n+1$ i
      Hermite-ligningen, degenerasjon $d=n^2$) vises **steg for steg** —
      mellomregningen ER svaret, aldri bare sluttresultatet.
- [ ] **Projeksjon og symmetri:** hver energi-/$L_z$-måling bruker $P=|c_n|^2$ ved
      **projeksjon** (aldri gjett); hver forventningsverdi/overlappintegral har et
      **eksplisitt symmetri-/paritetsargument FØR integrasjon**; hver
      tidsuavhengighets-påstand er **kommutator-begrunnet** ($[\hat{H},\hat{O}]$).
- [ ] **Kildeforbehold:** alle Eksamensvinkel-blokker formuleres med forbehold
      («mønsteret tyder på», «erfaringsmessig»); konkrete poengpåstander
      markeres `(verifiser)`; ingen påstand presenteres som offisiell sensorfasit.
- [ ] **Formelsida-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «antas oppgitt (formelside/tabell)» vs. «må kunne brukes/utledes aktivt»;
      ingen standardintegraler, Hermite-polynomer eller konstantverdier presenteres
      som puggestoff.
- [ ] **Komplekse tall:** Euler/konjugering/modulus introdusert i-boks (kap. 2.1),
      IKKE lenket til R2 (finnes ikke der); brukt konsistent i tidsutvikling (7.1)
      og $L_z$-måling (6.2).
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet på
      hvert tallsvar (nm, eV, keV) og ferdig utregnet numerisk verdi — boka
      *modellerer* sensorkravet; regn helst i eV/nm med $hc=1240$ eV·nm.
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt + forbehold fra dette skjelettet), Forkunnskaper med kryssbok-lenker
      (KUN til kapitler som finnes — de lenkede fysikk2-/r2-kapitlene i §3 er
      verifisert mot metadataene 7. juli 2026; **fys1001 og fys1120 er IKKE bygget
      og skal kun refereres i klartekst, aldri lenkes**), `collapsible` Symbol- og
      formelliste, 2–4 eksempler (siste på eksamensnivå, med figur der forventet),
      Typiske feil-`warning`, 6–12 øvinger med `solution` + `hints` (stigende;
      minst én kvalitativ M-oppgave i hvert teorikapittel), repetisjons-`collapsible`;
      drillkapitler har løsningsoppskrift + margkommentert gjennomregnet case +
      10–16 oppgaver på eksamensnivå.
- [ ] **Kvalitativ-kvoten:** på tvers av boka skal ~30–40 % av øvingene i
      teorikapitlene være kvalitative «forklar/begrunn med egne ord»-oppgaver med
      modellsvar i 2–4 setninger (speiler eksamens miks — like poenggivende som
      regning).
- [ ] **Quiz-sum ≥ 582 og flashcard-sum ≥ 658** per kvotetabellen i §4
      (kontrollsummér per del). Operatorer/kommutatorer/kvantetall/egenverdier er
      flashcard-tyngden.
- [ ] **Prøver:** 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (10.2–10.4) som
      sammen dekker sjangrene A–M; øvingseksamenene speiler de tre eksamensformene
      (standardisert 3-oppgaver, 5–6 kortere, kreativt/dypt sett).
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett (arkivet har uansett ingen
      løsningsforslag); skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

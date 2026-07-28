# Bokskjelett: SØK2005 / SOK2005 Finansmarkeder — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (≈24 lesbare oppgavesett H2010–H2025, 6 sensorveiledninger
> og 5 fullstendige løsningsforslag V2015–H2023, alle bildeskanninger av
> håndskrevne fasiter lest via OCR + manuell lesning). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger med nyskrevne tall og fiktive selskaper/kontekster; forfatteren
> skal variere dem videre, aldri kopiere inn ordrett (jf. opphavsretts-punktet i
> README og analysens §8). Pensumlitteratur (Bodie/Kane/Marcus *Investments*,
> Hull *Options, Futures and Other Derivatives*, evt. Copeland/Weston) refereres
> per begrep/modell, aldri siteres i lengde — **den eksakte pensumutgaven er
> ikke fastslått i analysen og merkes *(verifiser)* der pensumankere skrives inn.**

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok2005` |
| Tittel | **SØK2005 Finansmarkeder** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt anvendt finansfag med fast fire-oppgavemal, én per aktivaklasse) |
| Antall kapitler | **30** (1 eksamenskart + 3 fundament + 7 portefølje/CAPM + 6 obligasjon/renter + 7 derivater + 3 aksjeverdi + 3 eksamenstrening) |
| Estimert totaltid | **≈ 2 340 min ≈ 39 timer** |
| Quiz totalt | **604** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** SØK2005-eksamen har vært påfallende stabil under Snorre
Lindset: **fire oppgaver som teller likt (25 % hver), én per aktivaklasse** —
oppgave 1 = risiko/portefølje/CAPM, oppgave 2 = obligasjoner og renter, oppgave 3
= derivater (binomisk opsjonsprising), oppgave 4 = aksjeverdsetting. Denne boka er
bygget som nettopp **fire søyler** som hviler på ett felles **fundamentkapittel**
(nåverdi/neddiskontering, forventning/varians/kovarians, og — bokas
gjennomgangsidé — **ingen-arbitrasje og risikonøytral prising**). Den driller de
ferdighetene som avgjør karakteren: porteføljevarians og minimum-varians-andel,
optimal allokering fra kvadratisk (mean-variance) nytte, CAPM med beta/SML/CML/
alfa og «godt kjøp»-vurderingen, obligasjonsprising fra full yieldkurve, yield to
maturity, current yield, **durasjon + modifisert durasjon + priseffekt**
(kronspørsmålet), forward-renter fra terminstrukturen, **binomisk
opsjonsprising** med risikonøytral sannsynlighet (europeisk *og* amerikansk put,
eksotiske/lookback og state prices — signaturmetoden), put-call-paritet,
opsjonsstrategier/payoff, forward-arbitrasje, og aksjeverdsetting med Gordon,
$g = b\cdot\text{ROE}$ og PVGO matet med CAPM-avkastningskravet. SØK2005 er et
**regnefag der nesten hver deloppgave krever en utregning + en kort verbal
tolkning**; den binomiske modellen og obligasjonsregningen får mest plass fordi
de er de to sikreste eksamensblokkene (~85 %/~90 %).

**Kritisk språkregel (gjelder HELE boka):** De nyere settene (V2022–H2025) er
**kun på engelsk**, mens eldre sett (2010–2020) er på bokmål/nynorsk. Boka skrives
på **norsk bokmål**, men **hver sentral fagterm oppgis med engelsk ekvivalent i
parentes ved første forekomst** og gjentas i formelarkene: avkastning (*return*),
forventet avkastning (*expected return*), salgsopsjon (*put*), kjøpsopsjon
(*call*), durasjon (*duration*), yield to maturity, forward-rente (*forward
rate*), risikonøytral sannsynlighet (*risk-neutral probability*), state price,
verdipapirmarkedslinjen (*SML*), kapitalmarkedslinjen (*CML*). Studenten skal
kunne lese en engelsk eksamen og svare på begge språk.

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivets notasjon brukes
nøyaktig, ikke lærebok-alternativer:

- **Avkastning/risiko:** forventet avkastning $E[r_i]$, standardavvik $\sigma_i$,
  varians $\sigma_i^2$, kovarians $\sigma_{i,j}$ (= $\text{Cov}(r_i,r_j)$),
  korrelasjon $\rho_{i,j}$, risikofri rente $r_f$, markedsporteføljen $M$.
- **Portefølje:** andeler $a$, $w$, $y$ i risikabelt aktivum/portefølje;
  porteføljeavkastning $E[r_p]$, porteføljerisiko $\sigma_p$; Sharpe-rate
  $S = (E[r]-r_f)/\sigma$. Minimum-varians-andel skrives $a^*$; optimal
  risikoandel fra kvadratisk nytte $w^*$.
- **CAPM:** beta $\beta_i = \sigma_{i,M}/\sigma_M^2 = \rho_{i,M}\,\sigma_i/\sigma_M$;
  alfa $\alpha_i$; **SML** (verdipapirmarkedslinjen, i $(\beta, E[r])$-planet);
  **CML** (kapitalmarkedslinjen, i $(\sigma, E[r])$-planet).
- **Obligasjon:** pris $P_0$, kupong $C$, pålydende/hovedstol $F$, yield to
  maturity $y$, current yield, durasjon $D$, modifisert durasjon $D^*$, holding
  period return $\text{HPR}$; spotrenter $r_{0,t}$, forward-renter $f_{i,j}$.
- **Derivater:** aksjepris $S_0$/$S_t$, opp-/ned-faktor $u$/$d$, innløsningskurs
  $X$, call $C_0$, put $P_0$, amerikansk put $P_0^A$, risikonøytral sannsynlighet
  $p^*$, forwardpris $F$, state price $\pi$.
- **Aksjeverdi:** dividende $D$, fortjeneste per aksje $E$, avkastningskrav $k$,
  vekstrate $g$, egenkapitalrentabilitet ROE, plowback/tilbakeholdt andel $b$,
  PVGO.
- **Nytte:** kvadratisk (mean-variance) nytte $U = E[r] - \tfrac12 A\sigma^2$ med
  risikoaversjon $A$.

**Kritisk metoderegel (gjelder HELE boka):** Sensor honorerer korrekt regning,
men understreker fem faste jernregler som gjennomsyrer boka: **(a) utregning
skal vises** — «vis at»-oppgaver skal føres hele veien til det oppgitte svaret,
ikke postuleres; **(b) alle tall tolkes verbalt** — durasjon, beta, alfa, current
yield og PVGO betyr ingenting uten den økonomiske forklaringen (hvorfor current
yield ligger mellom kupongrate og yield ved overkurs, hvorfor et aktivum over SML
er et godt kjøp, hva PVGO forteller om selskapet); **(c) figur der det er
naturlig** — SML/CML, payoff-diagrammer og binomiske trær tegnes med navngitte
akser, kurver og punkter; **(d) ingen-arbitrasje og risikonøytral prising er de
bærende prinsippene** — derivater prises **preferansefritt via $p^*$**, aldri via
fysiske/subjektive sannsynligheter; strukturerte produkter og forwards prises ved
replikering/arbitrasje; **(e) enheter og desimaler** — flere sett spesifiserer
desimalantall (to for priser, tre for durasjon); presisjon teller.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): fundamentet i bunn, deretter
de fire søylene i den rekkefølgen eksamensoppgavene står (portefølje/CAPM →
obligasjon → derivater → aksje), til slutt eksamenstreningen. Frekvensen styrer
*omfanget* — alle fire søylene er nivå-1 «må beherskes perfekt», men obligasjon
(~90 %) og derivater (~85 %) er de sikreste enkeltblokkene og får hver sitt
fulle sett med teori + drillkapittel; aksjeverdsetting (~65 %) får noe mindre.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn firedelt mal, fire aktivaklasser, sjangerkatalog A–M, hjelpemiddel-/språkregler. |
| 1 | Fundament: nåverdi, sannsynlighet og risikonøytral prising | 3 | Neddiskontering ~95 %, forventning/varians/kovarians ~85 %, risikonøytral $p^*$ ~80 % — forutsatt aktivt i hver søyle. Eget fundament, ikke vedlegg: risikonøytral prising er bokas samlende idé. |
| 2 | Risiko, portefølje og CAPM | 7 | Oppgave 1 i ~80 % (portefølje) + CAPM ~75 %. Porteføljevarians/optimal andel + CAPM/SML/alfa → nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 3 | Obligasjoner og renter | 6 | Oppgave 2 nesten hvert år (~90 %) — den sikreste enkeltblokken. Prising + yield + durasjon + terminstruktur → nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 4 | Derivater | 7 | Oppgave 3 nesten hvert år (~85 %). Binomisk opsjonsprising er signaturmetoden; put-call, strategier, forward-arbitrasje, eksotiske/state prices → nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 5 | Aksjeverdsetting | 3 | Oppgave 4 (~65 %). Dividendemodell/Gordon/PVGO matet med CAPM-krav → nivå 1 «perfekt», men lavere frekvens → 2 teorikapitler + drillkapittel. |
| 6 | Eksamenstrening | 3 | 3 komplette øvingseksamener som speiler malene (2 × 25/25/25/25 + 1 × 30/30/40 treoppgavevariant); sjangerdrillen ligger i søylenes egne drillkapitler. |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de fire
   drillkapitlene (2.7 porteføljeoppgaven, 3.6 obligasjonsoppgaven, 4.7
   derivatoppgaven, 5.3 aksjeoppgaven) inne i sine egne søyler, fordi hele
   eksamen ER disse fire sjangrene og hver må drilles umiddelbart etter teorien.
   Del 6 beholder de tre komplette øvingseksamenene.
2. DNA-en har «Del 1..N temadeler» generisk. Her er strukturen bevisst
   **firedelt symmetrisk** (én søyle per aktivaklasse) på et felles
   fundament — dette speiler den firedelte eksamensmalen direkte og er bokas
   viktigste designgrep (jf. analysens §7).
3. Del 1 (fundamentet) er strengt tatt forkunnskap (nåverdi + statistikk fra
   SOK1002/SOK1004), men får egen del fordi (i) **risikonøytral prising** er en
   selvstendig, ikke-trivielt idé sensor forventer at man behersker aktivt, og
   (ii) forkunnskapsbroene til SOK1002/SOK1004 samles her (kryssbok-lenker).

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–M) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysens
§3): **A** porteføljevarians/minimum-varians-andel, **B** kapitalallokering med
kvadratisk nytte, **C** CAPM/beta/SML, **D** aksjeplukker-analyse (alfa vs. rå
avkastning), **E** obligasjonsprising/yield/current yield, **F** durasjon +
modifisert durasjon + priseffekt, **G** rentekurve/forventningshypotese/forward-
renter, **H** binomisk opsjonsprising, **I** put-call-paritet, **J**
opsjonsstrategier/payoff, **K** forward/futures og arbitrasje, **L**
aksjeverdsetting (Gordon/PVGO), **M** valg under usikkerhet/kredittrisiko/de fire
grunnene. Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne**
(nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK2005

- **id:** `sok2005-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste firedelte malen (fire aktivaklasser), temafrekvensene, sjangerkatalogen A–M, språk-/hjelpemiddelregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle ~24 sett + 6 sensorveiledninger + 5 løsningsforslag. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen i Inspera, karakter A–F, 7,5 studiepoeng; besvarelsen føres i stor grad på håndtegnede ark (utregninger + figurer) med opplasting, 15–30 min ekstra tid; **hjelpemidler varierer**: kode C (kalkulator + matematisk formelsamling Sydsæter/Strøm/Berck) på de eldre settene og igjen V2025, kode A (alle hjelpemidler) under korona, kode H (kun kalkulator) på nyere sett; normalfordelingstabell vedlegges ved Black–Scholes; (ii) **den faste malen**: fire likeveide oppgaver (25 % hver), én per aktivaklasse — oppgave 1 portefølje/CAPM/risiko, oppgave 2 obligasjon/renter, oppgave 3 derivater, oppgave 4 aksjeverdsetting; **avviksvarianter**: treoppgavevarianter 30/30/40 eller 33⅓ (H2025, V2020, H2018), to-oppgavevarianter i de eldste settene (V/H2012), 50/30/20 med portefølje tungt (V/H2010); vektingen er nesten alltid **veiledende** («only indicative»); (iii) **temafrekvens-tabellene** (fra §2A/§2B): obligasjonsprising/yield/durasjon ~90 %, binomisk opsjonsprising/put-call/payoff ~85 %, porteføljeteori ~80 %, CAPM/SML/beta ~75 %, aksjeverdsetting Gordon/PVGO ~65 %, rentekurve/forward ~40 %, valg under usikkerhet/kvadratisk nytte ~40 %, forward/arbitrasje ~25 %, kredittrisiko/CDS ~15 %, strukturerte produkter ~10 %, de fire grunnene til finansmarkeder ~10 %; regne-/metodeelementer: neddiskontering ~95 %, forventning/varians/kovarians ~85 %, risikonøytral $p^*$ ~80 %, optimering (finn $a^*$/$w^*$) ~60 %, put-call-paritet ~40 %, systematisk vs. usystematisk risiko ~40 %; (iv) at oppgavene alltid pakkes i **aktualitet** (en avisobligasjon, et strukturert bankprodukt, «Gordon Growth» som fiktiv direktør) men at modellen alltid er den samme, ofte med et innebygd **«vis at»-krav**; (v) **sensorens metaregler** (fra §4): utregning skal vises; regning skal tolkes verbalt; figur der naturlig; ingen-arbitrasje/risikonøytral prising bærer; egne forutsetninger presiseres; desimaler teller; (vi) **karakterskillene**: bunn (E–D) = riktig grunnformel (CAPM-likning, obligasjonsprisformel, binomisk $p^*$), riktig neddiskontering, riktig hovedtall; midt (C) = komplett flerstegsregning (durasjon *og* modifisert durasjon *og* priseffekt, full binomisk call+put, beta fra kovarians + SML, Gordon med $g=b\cdot\text{ROE}$); topp (A/B) = **amerikansk vs. europeisk put** (tidlig utøvelse), **eksotiske/lookback og state prices**, **PVGO** som differansen $P - E_1/k$, **arbitrasjekonstruksjon** ved feilprising, **dekomponering av total risiko** i systematisk/usystematisk del, og at **aksjeplukker-rangeringen avhenger av CAPM-referansen** — med konsekvent verbal tolkning.
- **Innholdskontrakt:** Oppgavetype-katalogen A–M presenteres som studentens sjekkliste med typisk plassering: oppgave 1 bygges av A/B → C (+ D som vri); oppgave 2 av E → F (+ G); oppgave 3 av H → I → J/K; oppgave 4 av C → L. **Prognose for neste eksamen** (fra §7): overveldende sannsynlig fire likeveide oppgaver på engelsk — portefølje/CAPM (varians eller kvadratisk-nytte-allokering, evt. CAPM-«mulighetstest», med beta/SML/alfa); obligasjon (prising fra yieldkurve/flat rente, yield/current yield, durasjon + modifisert durasjon + priseffekt, ofte HPR/forward); derivater (binomisk europeisk + amerikansk put, evt. eksotisk/state prices, evt. forward-arbitrasje eller opsjonsstrategi-payoff); aksje (CAPM-krav → dividendemodell/Gordon → PVGO). Avslutt med **avgrensningen** (hva som IKKE bygges tungt: full Black–Scholes-utledning, institusjonell bank/regulering — det er SØK2010; ren mikroteori uten finansanvendelse) og **leseplanen**: Del 1 er fundament man må ha klart; Del 2–5 er «må perfekt» og utgjør hele eksamen (obligasjon + binomisk mest sikre); Del 6 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt firedelt 25/25/25/25-mal og 240 min — sett opp tidsbudsjett per aktivaklasse» og «hvilke to enkeltblokker er de sikreste, og i hvilke kapitler drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte utregninger eller utolkede tall; pugge SØK2010-stoff (Basel/bank run/finanskrise) som ikke er i SØK2005-pensum; tro at Black–Scholes er hovedsporet (det er binomisk som er det); bruke fysiske sannsynligheter i opsjonsprising.
- **Quiz: 14 · Flashcards: 12** (eksamensform, firedelt mal, frekvenser, sjangerkatalog A–M, metaregler, avgrensning, norsk↔engelsk termpar)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Fundament: nåverdi, sannsynlighet og risikonøytral prising *(prioritet: forkunnskap — må sitte)*

> **Forkunnskapsbro:** Del 1 samler forkunnskapene fra **SOK1002** (nåverdi/
> intertemporalt valg, valg under usikkerhet) og **SOK1004** (forventning/
> varians/kovarians for lineærkombinasjoner). Der disse bøkene finnes i systemet
> lenkes det dit i Forkunnskaper-blokkene med markdown-lenker; ellers forklares
> det kompakt her. Formelsamlingen (Sydsæter/Strøm/Berck) dekker geometriske
> rekker og forventnings-/variansregler — det studenten selv må gjøre er *å
> sette opp* neddiskonteringen og *å tolke* variansuttrykket for en portefølje.

#### Kapittel 1.1: Nåverdi, neddiskontering og geometriske rekker

- **id:** `sok2005-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Bunnplaten i hele faget: nåverdi av en kontantstrøm, annuitet og evigvarende betaling — verktøyet som brukes i obligasjon, aksje og opsjon.
- **Eksamensbelegg:** Ikke et eget eksamenstema, men **forutsatt i ~95 % av deloppgavene**: obligasjonsprisen, aksjeverdien og opsjonsverdien er alle neddiskonterte kontantstrømmer. Fasitene neddiskonterer uten kommentar. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Nåverdi av ett beløp $\text{NV} = X_t/(1+r)^t$; nåverdi av en kontantstrøm $\text{NV} = \sum_{t} X_t/(1+r)^t$; **annuitetsformelen** (endelig geometrisk rekke) og **evigvarende betaling** $X/r$ (bruk i evigvarende obligasjon og Gordon-modellen); vekstevig $X_1/(k-g)$ (foregriper Gordon). Skille effektiv årlig rente vs. periodisk rente ved underårige kupongterminer. Diskret vs. kontinuerlig neddiskontering ($e^{-rt}$) — nevnes fordi Black–Scholes-paritetsversjonen bruker den (kap. 4.4), men diskret er hovedsporet. Merk hva formelsamlingen dekker (rekkeformlene) vs. hva studenten selv setter opp (den konkrete kontantstrømmen og valg av diskonteringsrente).
- **Oppgavesjangre:** Byggekloss for E/L/H. Mønstereksempel: «En kontantstrøm betaler 50 hvert år i 4 år og deretter 1000 i år 4. Finn nåverdien ved flat rente 4 %, og skriv den delen som en annuitet pluss en neddiskontert hovedstol.»
- **Typiske feil:** Glemme at første kupong kommer om ett år (diskonter fra $t=1$); bruke feil rekke (annuitet vs. evigvarende); blande periodisk og årlig rente; regne evigvarende med feil startår.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 1.2: Forventning, varians, kovarians og lineærkombinasjoner

- **id:** `sok2005-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Sannsynlighetsverktøyet porteføljeteorien hviler på: forventning, varians, standardavvik, kovarians/korrelasjon og regnereglene for en lineærkombinasjon av to avkastninger.
- **Eksamensbelegg:** Forutsatt i ~85 % av settene — porteføljevariansen (kap. 2.1) og beta (kap. 2.4) er **direkte anvendelser** av $\text{Var}(aX+(1-a)Y)$ og $\text{Cov}$. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Forventning $E[r]$, varians $\sigma^2 = E[(r-E[r])^2]$, standardavvik $\sigma$; **kovarians** $\sigma_{i,j} = E[(r_i-E[r_i])(r_j-E[r_j])]$ og **korrelasjon** $\rho_{i,j} = \sigma_{i,j}/(\sigma_i\sigma_j) \in [-1,1]$. **Regneregler for lineærkombinasjon** (kjernen): $E[aX+bY]=aE[X]+bE[Y]$; $\text{Var}(aX+bY) = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\,\sigma_{X,Y}$ — dette *er* to-aktiva-porteføljevariansen. Varians-kovarians-matrisen for flere aktiva (H2024 bruker en 3×3-matrise). Understrek koblingen: lav/negativ korrelasjon gir lavere porteføljevarians (diversifisering — utdypes i 2.1). Merk hva formelsamlingen dekker (reglene) vs. hva studenten tolker (hva kovarians/korrelasjon betyr økonomisk).
- **Oppgavesjangre:** Byggekloss for A/C. Mønstereksempel: «To aktiva har $\sigma_1=0{,}2$, $\sigma_2=0{,}3$, $\rho_{1,2}=-0{,}4$. Finn kovariansen og variansen til en portefølje med lik vekt, og forklar hvorfor porteføljevariansen er lavere enn et vektet snitt av de to variansene.»
- **Typiske feil:** Forveksle kovarians og korrelasjon ($\sigma_{i,j}=\rho\sigma_i\sigma_j$); glemme kryssleddet $2ab\sigma_{X,Y}$ i variansen; addere standardavvik i stedet for varianser; feil fortegn på et negativt kovariansledd.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Ingen-arbitrasje og risikonøytral prising

- **id:** `sok2005-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Bokas samlende idé: hvorfor et aktivum kan prises som neddiskontert forventet kontantstrøm under *risikonøytrale* (ikke fysiske) sannsynligheter — grunnlaget for binomisk opsjonsprising, state prices og forward-arbitrasje.
- **Eksamensbelegg:** Ikke en isolert oppgave, men **motoren i ~80 % av derivatoppgavene** og det eksplisitte sensorprinsippet (§4.5): derivater prises preferansefritt. Prioritet: **forkunnskap** (må sitte) — og en av bokas viktigste konseptuelle byggesteiner.
- **Innholdskontrakt:** **Ingen-arbitrasje-prinsippet**: to porteføljer med identiske fremtidige kontantstrømmer må ha samme pris i dag, ellers finnes en arbitrasje (risikofri gevinst uten innsats). **Replikering**: et derivat prises som kostnaden av porteføljen (aksje + risikofri plassering) som gjenskaper dets payoff. **Risikonøytral sannsynlighet** $p^*$: i en binomisk verden gir replikering samme pris som «forventet payoff under $p^*$, neddiskontert med $r_f$», der $p^* = \frac{(1+r_f)-d}{u-d}$ — vis at $p^*$ *ikke* er den fysiske sannsynligheten, og at den prises inn slik at aksjen selv gir $r_f$ i forventning under $p^*$. **State prices** $\pi_u,\pi_d$: prisen på et krav som betaler 1 i én tilstand og 0 ellers; $\pi_u+\pi_d = 1/(1+r_f)$, og enhver payoff prises som $\pi_u C_u + \pi_d C_d$ (kobling til $p^*$: $\pi_u = p^*/(1+r_f)$). Understrek at **preferanser og fysiske sannsynligheter faller ut** — dette er sensorpoenget og den vanligste toppfeilen (bruke fysiske sannsynligheter). Legg grunnlaget for hele Del 4.
- **Oppgavesjangre:** Byggekloss for H/I/K. Mønstereksempel: «Aksjen går fra 100 til enten 120 eller 90 om ett år; $r_f=5\%$. Finn den risikonøytrale sannsynligheten, vis at aksjen gir 5 % i forventet avkastning under den, og forklar hvorfor opsjonsprisen ikke avhenger av hvor sannsynlig oppgangen *egentlig* er.»
- **Typiske feil:** Bruke fysiske sannsynligheter der $p^*$ kreves (§5.3 — mest alvorlige metodefeil); tro at $p^*$ er en «riktig» prognose; regne $p^*$ med feil fortegn i telleren; glemme at state prices summerer til $1/(1+r_f)$, ikke 1.
- **Quiz: 24 · Flashcards: 22**

**Prøve-kvote Del 1:** 4 prøver (`sok2005-1-prove`): 1.A nåverdi/annuitet/evigvarende (byggekloss for obligasjon og Gordon); 1.B forventning/varians/kovarians for lineærkombinasjon med korrelasjonstolkning; 1.C risikonøytral $p^*$ og state prices — utled og tolk; 1.D blandet fundamentprøve (nåverdi + varians + $p^*$) på oppvarmingsnivå.

---

### Del 2 — Risiko, portefølje og CAPM *(prioritet: PERFEKT — oppgave 1)*

#### Kapittel 2.1: Porteføljevarians og minimum-varians-andel

- **id:** `sok2005-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-1-2`
- **Kapitteltype:** teori
- **description:** To-aktiva-porteføljens forventning og varians, minimum-varians-andelen $a^*$, og hvordan korrelasjonen styrer diversifiseringsgevinsten.
- **Eksamensbelegg:** ~80 % frekvens (sjanger A) — porteføljeoppgaven starter nesten alltid her. Minimum-varians-andelen og korrelasjonseffekten er faste. Prioritet: **perfekt**.
- **Innholdskontrakt:** Porteføljeavkastning $E[r_p] = aE[r_1]+(1-a)E[r_2]$; **porteføljevarians** $\sigma_p^2 = a^2\sigma_1^2 + (1-a)^2\sigma_2^2 + 2a(1-a)\sigma_{1,2}$ (med $\sigma_{1,2}=\rho\sigma_1\sigma_2$). **Minimum-varians-andel:** deriver $\sigma_p^2$ mhp. $a$, sett lik null → $a^* = \frac{\sigma_2^2-\sigma_{1,2}}{\sigma_1^2+\sigma_2^2-2\sigma_{1,2}}$ (utled fullstendig — dette er «kunne utlede»-stoff). **Korrelasjonens rolle:** $\rho=1$ (ingen diversifisering, $\sigma_p$ lineær), $\rho=-1$ (risiko kan elimineres helt), $\rho<1$ (konveks front, diversifiseringsgevinst) — vis når $a^*$ havner utenfor $[0,1]$ (hjørne: alt i ett aktivum). Tegn mulighetsområdet i $(\sigma,E[r])$-planet (foregriper CML i 2.6). Flere aktiva via varians-kovarians-matrise (H2024) nevnes.
- **Oppgavesjangre:** A. Mønstereksempel: «Aksje 1 har $E[r]=8\%$, $\sigma_1=15\%$; aksje 2 $E[r]=12\%$, $\sigma_2=25\%$; $\rho=0{,}2$. Finn andelen $a^*$ i aksje 1 som minimerer porteføljevariansen, og angi hvilken korrelasjon som gjør at investoren legger hele formuen i aksje 1.»
- **Typiske feil:** Glemme kryssleddet i variansen; derivere feil ved $a^*$; ikke sjekke om $a^*\in[0,1]$ (hjørneløsning); addere standardavvik i stedet for varianser; ikke tolke diversifiseringsgevinsten verbalt.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 2.2: Valg under usikkerhet: kvadratisk nytte og risikoaversjon

- **id:** `sok2005-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-2-1`
- **Kapitteltype:** teori
- **description:** Mean-variance-nytten $U = E[r]-\tfrac12 A\sigma^2$, den optimale risikoandelen $w^*$ i en risikofri+risikabel kombinasjon, og sikkerhetsekvivalenten.
- **Eksamensbelegg:** ~40 % frekvens (sjanger B) — men høyt belønnet og gjenganger i porteføljeoppgaven (V2013, V2017, V2024, H2023). «Maksimal risikoaversjon som fortsatt gir risikabelt valg» (V2017) er en fast vri. Prioritet: **perfekt** (nivå 1-innhold, moderat frekvens).
- **Innholdskontrakt:** Kvadratisk (mean-variance) nyttefunksjon $U = E[r]-\tfrac12 A\sigma^2$, $A$ = risikoaversjon. Kombinasjon av risikofritt aktivum og en risikabel portefølje: $E[r_p]=r_f+w(\mu-r_f)$, $\sigma_p=w\sigma$; sett inn, deriver mhp. $w$, sett lik null → **optimal risikoandel** $w^* = \frac{\mu-r_f}{A\sigma^2}$ (utled fullstendig). Regn maksimal nytte og tolk: høyere $A$ → lavere $w^*$; kobling til **Sharpe-raten** $S=(\mu-r_f)/\sigma$ (maksimal nytte $= r_f + S^2/(2A)$). **Sikkerhetsekvivalent** = den sikre avkastningen som gir samme nytte som den risikable ($\text{CE}=E[r]-\tfrac12 A\sigma^2$). Variant: finn **maksimal $A$** som fortsatt gir $w^*\ge$ en gitt andel / gjør risikabelt aktivum foretrukket. Nevn SOC ($U$ konkav i $w$).
- **Oppgavesjangre:** B. Mønstereksempel: «Med $U = E[r]-\tfrac54\sigma^2$ og en markedsportefølje med Sharpe-rate 0,3, finn den optimale andelen $w^*$ i markedsporteføljen og vis at maksimal nytte blir 0,082.»
- **Typiske feil:** Feil fortegn/faktor i $\tfrac12 A$; glemme å sette inn $\sigma_p=w\sigma$ før derivasjon; forveksle sikkerhetsekvivalent og forventet avkastning; ikke tolke $w^*$ verbalt (hvordan $A$ og Sharpe-rate påvirker den).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: Kapitalmarkedslinjen (CML) og Sharpe-raten

- **id:** `sok2005-2-3` · **number:** 2.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok2005-2-2`
- **Kapitteltype:** teori
- **description:** Den effisiente kombinasjonen av risikofritt aktivum og markedsporteføljen — kapitalmarkedslinjen i $(\sigma,E[r])$-planet — og Sharpe-raten som helning.
- **Eksamensbelegg:** ~40 % (inngår i portefølje-/CAPM-blokken); CML/CAPM-skillet er fast sensor-poeng (§5.8: forveksle SML og CML). Prioritet: **perfekt** (fundament for CAPM).
- **Innholdskontrakt:** Tangeringsporteføljen og separasjonsteoremet (alle holder samme risikable portefølje = markedsporteføljen $M$, kombinert med $r_f$). **CML:** $E[r_p]=r_f+\frac{E[r_M]-r_f}{\sigma_M}\sigma_p$ — helning = **Sharpe-raten** til markedet; gjelder **kun effisiente porteføljer** (i $(\sigma,E[r])$-planet). Kontrast til SML (kap. 2.5), som gjelder **alle** aktiva i $(\beta,E[r])$-planet: et enkeltaktivum ligger *under* CML (usystematisk risiko lønnes ikke) men *på* SML. Tegn CML med $r_f$ som skjæringspunkt og $M$ som tangeringspunkt.
- **Oppgavesjangre:** B/C-fundament. Mønstereksempel: «Markedet har $E[r_M]=10\%$, $\sigma_M=18\%$, $r_f=3\%$. Skriv opp kapitalmarkedslinjen, finn forventet avkastning til en effisient portefølje med $\sigma_p=12\%$, og forklar hvorfor en enkeltaksje med samme $\sigma$ vil ligge under linjen.»
- **Typiske feil:** Plotte enkeltaktiva mot $\sigma$ på CML (de skal på SML mot $\beta$); forveksle CML og SML (§5.8); tro at CML priser usystematisk risiko; feil helning (skal være Sharpe-raten).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.4: Systematisk vs. usystematisk risiko og beta

- **id:** `sok2005-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-2-3`, `sok2005-1-2`
- **Kapitteltype:** teori
- **description:** Dekomponering av total risiko i systematisk (markeds-) og usystematisk (diversifiserbar) del, og beta som mål på systematisk risiko.
- **Eksamensbelegg:** ~40 % (sjanger C-fundament); dekomponeringen er fast begrepspar og A/B-markør (§4). Beta fra kovarians er en av de vanligste regnefeilene (§5.6). Prioritet: **perfekt**.
- **Innholdskontrakt:** Total risiko $\sigma_i^2$ = **systematisk** ($\beta_i^2\sigma_M^2$) + **usystematisk** (residual, $\sigma_{\varepsilon_i}^2$); usystematisk risiko **diversifiseres bort** i en veldiversifisert portefølje, så **kun systematisk risiko prises**. **Beta** $\beta_i = \frac{\sigma_{i,M}}{\sigma_M^2} = \rho_{i,M}\frac{\sigma_i}{\sigma_M}$ — utled begge former; tolk: $\beta=1$ (svinger som markedet), $\beta>1$ (aggressiv), $\beta<1$ (defensiv), $\beta<0$ (motsyklisk). Porteføljebeta = vektet snitt av betaer. Understrek at et aktivums *totale* $\sigma$ ikke prises — bare $\beta$ (kobling til §5.7). Legg grunnlaget for SML (2.5).
- **Oppgavesjangre:** C. Mønstereksempel: «Aksje X har $\sigma_X=30\%$ og korrelasjon 0,6 med markedet ($\sigma_M=20\%$). Finn beta, dekomponer den totale variansen i systematisk og usystematisk del, og forklar hvorfor bare den systematiske delen prises i CAPM.»
- **Typiske feil:** Regne $\beta=\rho\sigma_i/\sigma_M$ feil vei eller bruke $\sigma_M$ i stedet for $\sigma_M^2$ i kovariansformen; forveksle kovarians og korrelasjon (§5.6); anta at totalt $\sigma$ prises (§5.7); ikke skille systematisk fra usystematisk (§5.7).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.5: CAPM, verdipapirmarkedslinjen (SML) og alfa

- **id:** `sok2005-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-2-4`
- **Kapitteltype:** teori
- **description:** Kapitalverdimodellen $E[r_i]=r_f+\beta_i(E[r_M]-r_f)$, verdipapirmarkedslinjen, alfa som feilprising og «godt kjøp»-vurderingen.
- **Eksamensbelegg:** ~75 % frekvens (sjanger C) — CAPM er den samlende teorien og går igjen i både oppgave 1 og oppgave 4 (leverer avkastningskravet $k$). «Godt kjøp?»-vurderingen og SML-figuren er faste. Prioritet: **perfekt**.
- **Innholdskontrakt:** **CAPM-likningen** $E[r_i]=r_f+\beta_i(E[r_M]-r_f)$ — likevektsavkastningen som kompenserer for systematisk risiko; markedets risikopremie $E[r_M]-r_f$. **SML:** CAPM-likningen tegnet i $(\beta,E[r])$-planet (skjæring $r_f$ ved $\beta=0$, gjennom $(1,E[r_M])$); **alle** aktiva ligger på SML i likevekt. **Alfa** $\alpha_i = E[r_i]^{\text{faktisk/forventet}} - [r_f+\beta_i(E[r_M]-r_f)]$: aktivum **over** SML har positiv alfa (underpriset, godt kjøp), under SML negativ alfa (overpriset). **Likevektsbetingelser:** finn $r_f$ og $E[r_M]$ fra to aktiva på SML (V2025-«mulighetstest»: er en gitt situasjon forenlig med CAPM?). Understrek at CAPM leverer avkastningskravet $k$ til aksjeverdsettingen (Del 5).
- **Oppgavesjangre:** C. Mønstereksempel: «Markedets forventede avkastning er 11 %, $r_f=4\%$. Aksje A har $E[r]=12\%$, $\beta=1$; aksje B har $E[r]=13\%$, $\beta=1{,}5$. Finn alfaen til hver ifølge CAPM, plott dem mot SML, og avgjør hvilken som er det beste kjøpet.»
- **Typiske feil:** Forveksle SML og CML (§5.8 — plotte mot $\sigma$ i stedet for $\beta$); regne alfa mot feil referanse; feil fortegn på alfa/«godt kjøp»; glemme å tolke resultatet verbalt; ikke se at et CAPM-inkonsistent oppsett er nettopp det oppgaven ber om.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.6: Aksjeplukker-analyse: alfa vs. rå avkastning

- **id:** `sok2005-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `sok2005-2-5`
- **Kapitteltype:** teori
- **description:** Hvorfor rå gjennomsnittsavkastning er meningsløs uten risikojustering, og hvordan alfa avgjør hvem som er den beste forvalteren — og at rangeringen kan snu med CAPM-referansen.
- **Eksamensbelegg:** Fast «vri» på CAPM-oppgaven (sjanger D), gjenganger i flere sett. Toppsjikt-markør: at rangeringen avhenger av $r_f$/$r_M$. Prioritet: **kunne** (nivå 2, høyt belønnet).
- **Innholdskontrakt:** To forvaltere med ulik snittavkastning og ulik beta: rå avkastning sier ingenting uten justering for systematisk risiko. Regn **alfa** $\alpha_i = \bar r_i - [r_f+\beta_i(\bar r_M-r_f)]$ for begge; den med høyest alfa er den beste «aksjeplukkeren». Vis eksplisitt at **rangeringen kan snu** når man endrer $r_f$ og $\bar r_M$ (den samme forvalteren kan vinne under ett sett antakelser og tape under et annet) — dette er poenget sensor belønner. Koble til Sharpe-raten som alternativ risikojustering (total risiko i stedet for beta).
- **Oppgavesjangre:** D. Mønstereksempel: «Forvalter Nord hadde snittavkastning 15 % ($\beta=1{,}6$), forvalter Sør 20 % ($\beta=1$). Med $r_f=5\%$ og markedsavkastning 15 %, hvem plukket best? Hva blir svaret om $r_f=2\%$ og markedsavkastning 10 %?»
- **Typiske feil:** Rangere på rå avkastning uten betajustering (§5.10); regne alfa feil vei; tro at rangeringen er robust mot CAPM-referansen; forveksle beta- og total-risiko-justering.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 2.7: Drill: porteføljeoppgaven (oppgave 1)

- **id:** `sok2005-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `sok2005-2-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1: fra gitt avkastning/risiko/korrelasjon til fullført A-besvarelse med portefølje, allokering, CAPM, SML og alfa.
- **Eksamensbelegg:** Dekker sjangrene A, B, C, D samlet — hele oppgave 1 (~25 % av settet). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) les av dataene (forventninger, $\sigma$, $\rho$/kovarians, evt. risikoaversjon $A$); 2) porteføljevarians + minimum-varians-andel $a^*$ eller optimal risikoandel $w^*$ fra kvadratisk nytte; 3) CAPM: beta fra kovarians, dekomponer risiko, sett opp SML, regn alfa; 4) «godt kjøp?»/aksjeplukker-vurdering + verbal konklusjon; 5) figur (CML og/eller SML med navngitte akser og punkter). **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling: mekanismen bak $a^*$/$w^*$, riktig beta, verbal tolkning av alfa). **10–14 oppgaver** på eksamensnivå som roterer datastruktur (to aktiva / risikofritt + risikabelt / tre aktiva med matrise / CAPM-mulighetstest) × leveranse (min-varians / optimal allokering / beta+SML+alfa / aksjeplukker), alle med `solution` + `hints`, nyskrevne tall kalibrert til pene svar.
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel (full kjede): «(a) Finn minimum-varians-porteføljen av to aktiva. (b) Med $U=E[r]-\tfrac12 A\sigma^2$ og et risikofritt aktivum, finn optimal andel i den risikable porteføljen. (c) Regn beta og alfa for et tredje aktivum og plott det mot SML. (d) Er det et godt kjøp? Begrunn.»
- **Typiske feil:** Hele porteføljerepertoaret fra §5: glemt kryssledd, hjørneløsning oversett, feil beta (§5.6), SML/CML-forveksling (§5.8), totalt $\sigma$ priset (§5.7), utolkede tall (§5.1), rangering på rå avkastning (§5.10).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (`sok2005-2-prove`): 2.A porteføljevarians + minimum-varians-andel + korrelasjonseffekt (sjanger A); 2.B kapitalallokering med kvadratisk nytte + Sharpe/CML (sjanger B); 2.C CAPM: beta fra kovarians + SML + alfa + «godt kjøp» (sjanger C); 2.D full porteføljeoppgave på eksamensnivå inkl. aksjeplukker-analyse (sjanger A+B+C+D).

---

### Del 3 — Obligasjoner og renter *(prioritet: PERFEKT — oppgave 2, sikreste blokk ~90 %)*

> **Arbeidsdeling mot SØK2010 Banking:** obligasjonssøylen (neddiskontering, yield
> to maturity, pris–rente-sammenheng, forward-renter) deles med SØK2010, men
> SØK2005 dreier mot **verdsetting** (durasjon, HPR, kredittrisiko-prising),
> SØK2010 mot bank/regulering/stabilitet. Der SØK2010-boka finnes i systemet kan
> Forkunnskaper-blokken kryssreferere; ellers er søylen selvbærende her.

#### Kapittel 3.1: Obligasjonsprising, yield to maturity og current yield

- **id:** `sok2005-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-1-1`
- **Kapitteltype:** teori
- **description:** Obligasjonsprisen som neddiskontert kupong- og hovedstolstrøm, yield to maturity, current yield og over-/underkurs.
- **Eksamensbelegg:** ~90 % frekvens (sjanger E) — obligasjonsoppgaven starter alltid her. Prising fra full yieldkurve (hver kontantstrøm med sin egen spotrente) er en fast finesse og en toppfeil (§5.2). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Pris** $P_0 = \sum_{t=1}^{T} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^T}$ — ved flat rente kan annuitetsformelen brukes; ved en **full yieldkurve** diskonteres hver kontantstrøm med sin egen spotrente $r_{0,t}$. **Yield to maturity** $y$ = den ene renten som gir observert pris (løses/verifiseres, ofte via «vis at $y=\dots$»). **Current yield** = årlig kupong/pris. **Over-/underkurs:** $P_0>F$ (premie) når kupongrate $>y$; $P_0<F$ (rabatt) når kupongrate $<y$; forklar hvorfor current yield ligger **mellom** kupongrate og yield ved premie/rabatt. Evigvarende obligasjon $P_0=C/y$. Zero-kupong-obligasjon og bootstrapping av spotrenter (foregriper 3.4).
- **Oppgavesjangre:** E. Mønstereksempel: «En femårig obligasjon betaler årlig kupong 40 og har pålydende 1000. Gitt zero-kupong-yieldkurven, finn prisen, avgjør om den handles til over- eller underkurs, og kontroller at yield to maturity er 3,782 %.»
- **Typiske feil:** Bruke én flat yield der oppgaven gir en full yieldkurve (§5.2); glemme at første kupong kommer om ett år; blande current yield, yield og kupongrate og ikke kunne rangere dem ved over-/underkurs (§5.5); regne evigvarende med feil startår.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.2: Durasjon og modifisert durasjon

- **id:** `sok2005-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-3-1`
- **Kapitteltype:** teori
- **description:** Durasjon som vektet gjennomsnittlig løpetid, modifisert durasjon, og priseffekten av en renteendring — kronspørsmålet i obligasjonsoppgaven.
- **Eksamensbelegg:** **Nesten alltid spurt** (sjanger F) — durasjon er kronspørsmålet (§7 nivå 1). Både beregning og bruk (priseffekt). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Durasjon** $D = \frac{\sum_t t\cdot \text{NV}(\text{kontantstrøm}_t)}{P_0}$ (Macaulay — vektet gjennomsnittlig tid til kontantstrømmene); **modifisert durasjon** $D^* = D/(1+y)$. **Priseffekt:** $\Delta P \approx -D^*\cdot P_0\cdot \Delta y$ — prisen faller når renten stiger (fortegn er en fast feil, §5.11). Forklar **hvorfor lengre løpetid / lavere kupong → høyere durasjon** (mer vekt lengre ut i tid); nullkupong har durasjon = løpetid. Nevn konveksitet kort (annenordens korreksjon, «bør kjenne til») uten full utbygging. Understrek verbal tolkning av durasjonstallet (rentefølsomhet).
- **Oppgavesjangre:** F. Mønstereksempel: «Beregn durasjonen (tre desimaler) til obligasjonen fra forrige oppgave, finn den modifiserte durasjonen, og anslå prisendringen i kroner dersom yielden øker med 0,2 prosentpoeng.»
- **Typiske feil:** Glemme fortegnet i priseffekten (§5.11); bruke $D$ i stedet for $D^*$ i priseffekten; vekte med kontantstrøm i stedet for *nåverdien* av kontantstrømmen; ikke tolke durasjonen som rentefølsomhet; feil desimalpresisjon.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.3: Holding period return (HPR) og realisert avkastning

- **id:** `sok2005-3-3` · **number:** 3.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok2005-3-1`
- **Kapitteltype:** teori
- **description:** Avkastningen på en obligasjon holdt over én periode når renten endrer seg — kupong pluss kursgevinst/-tap.
- **Eksamensbelegg:** ~40 % (inngår i obligasjonsoppgaven, sjanger E/F-vri; V2016, V2019, V2025). Prioritet: **kunne** (nivå 2, gjenganger).
- **Innholdskontrakt:** **HPR** over ett år $= \frac{C + (P_1-P_0)}{P_0}$ — løpende avkastning (current yield) pluss kursgevinst. Vis at HPR $\ne$ yield når renten endrer seg mellom kjøp og salg (reinvesteringsrisiko + kursrisiko). Kobling til durasjon: kursendringen $P_1-P_0$ anslås med $-D^*P_0\Delta y$; ved en holdeperiode lik durasjonen utligner reinvesterings- og kursrisiko hverandre (immuniseringsintuisjon — «bør kjenne til»). Skille forventet HPR (under en renteprognose) fra yield to maturity.
- **Oppgavesjangre:** E/F. Mønstereksempel: «Du kjøper obligasjonen til yield 4 %. Etter ett år har yielden falt til 3,5 %. Finn holding period return, og forklar hvorfor den avviker fra 4 %.»
- **Typiske feil:** Sette HPR = yield uansett (glemme kursgevinsten); feil fortegn på kursendringen ved renteendring; glemme kupongen; blande ettårs-HPR med årlig yield over hele løpetiden.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 3.4: Rentekurven, forventningshypotesen og forward-renter

- **id:** `sok2005-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-3-1`
- **Kapitteltype:** teori
- **description:** Terminstrukturen: spotrenter, forward-renter utledet fra dem, forventningshypotesen og likviditetspreferanse — og syntetisk konstruksjon av en obligasjon fra nullkupongobligasjoner.
- **Eksamensbelegg:** ~40 % frekvens (sjanger G; H2012 verbal, V2019/V2024 forward-renter + syntetisk obligasjon). Prioritet: **kunne** (nivå 2, roterer inn som halv oppgave).
- **Innholdskontrakt:** **Spotrente** $r_{0,t}$ (rente på nullkupong til tid $t$); **forward-rente** $f_{i,j}$ utledet ved ingen-arbitrasje: $(1+r_{0,2})^2 = (1+r_{0,1})(1+f_{1,2})$ (generelt $(1+r_{0,j})^j = (1+r_{0,i})^i(1+f_{i,j})^{j-i}$). **Forventningshypotesen:** lange renter = geometrisk snitt av forventede korte renter; **likviditetspreferanse:** forward-rente = forventet fremtidig kort rente + likviditetspremie (forklarer normalt stigende kurve). **Syntetisk obligasjon:** bygg en kupongobligasjon som en portefølje av nullkupongobligasjoner; bruk forward-rentene til å konstruere yieldkurven eller avtale en fremtidig låne-/plasseringsrente i dag. Betoning: forward-renten er en **arbitrasjefri** konstruksjon (kobling til Del 1.3), ikke en prognose i seg selv.
- **Oppgavesjangre:** G. Mønstereksempel: «Gitt forward-rentene $f_{0,1},f_{1,2},f_{2,3},f_{3,4}$, vis at yieldkurven blir $r_{0,1}=5\%$, $r_{0,2}=5{,}5\%$, $r_{0,3}=6\%$, $r_{0,4}=6{,}5\%$, og konstruer en fireårig kupongobligasjon syntetisk fra nullkupongobligasjoner.»
- **Typiske feil:** Aritmetisk i stedet for geometrisk snitt av renter; feil eksponent i forward-formelen; forveksle spot- og forward-rente; tro forward-renten er en ren prognose (glemme likviditetspremien / arbitrasjeforankringen).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.5: Kredittrisiko, misligholdssannsynlighet og CDS

- **id:** `sok2005-3-5` · **number:** 3.5 · **estimatedMinutes:** 45 · **prerequisites:** `sok2005-3-1`, `sok2005-1-2`
- **Kapitteltype:** teori
- **description:** Prising av en obligasjon med misligholdssannsynlighet ved forventet kontantstrøm, og verdsetting av en CDS som forsikrer bort kredittrisikoen.
- **Eksamensbelegg:** ~15 % frekvens (sjanger M; V2018, H2018-CDS, H2023). Toppsjikt/nivå 3-innhold, men konkret regnbart. Prioritet: **kjenne** (nivå 3, roterer inn).
- **Innholdskontrakt:** Obligasjon med **misligholdssannsynlighet** $q$: pris = neddiskontert **forventet** kontantstrøm ($P_0 = \frac{(1-q)F + q\cdot\text{recovery}}{1+r} + \dots$); kredittrisikopremien = differansen mellom yielden på den risikable og den risikofrie obligasjonen. **CDS** (credit default swap): en forsikring som betaler tapet ved mislighold; den arbitrasjefrie **premien** gjør obligasjon + CDS risikofri (premie ≈ forventet tap, neddiskontert). Skille risikonøytral vs. fysisk misligholdssannsynlighet kort (kobling til Del 1.3). Verbal drøfting: hvorfor risikable obligasjoner må gi høyere yield.
- **Oppgavesjangre:** M. Mønstereksempel: «En ettårig obligasjon (pålydende 1000) betaler full hovedstol med 90 % sannsynlighet og bare 600 med 10 % sannsynlighet. Med $r_f=3\%$, finn prisen når kredittrisikoen prises inn, og beregn premien på en CDS som gjør posisjonen risikofri.»
- **Typiske feil:** Bruke lovet i stedet for forventet kontantstrøm; glemme recovery-verdien ved mislighold; regne CDS-premien uten neddiskontering; blande risikonøytral og fysisk misligholdssannsynlighet.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.6: Drill: obligasjonsoppgaven (oppgave 2)

- **id:** `sok2005-3-6` · **number:** 3.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok2005-3-5`, `sok2005-3-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 2: fra en gitt yieldkurve/rente til fullført A-besvarelse med pris, yield, durasjon, priseffekt og evt. forward/HPR/kredittrisiko.
- **Eksamensbelegg:** Dekker sjangrene E, F, G, M samlet — hele oppgave 2 (~25 %, sikreste blokk). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser rentestruktur (flat yield vs. full yieldkurve) og diskonter riktig; 2) pris + yield + current yield + over-/underkurs med tolkning; 3) durasjon → modifisert durasjon → priseffekt ved oppgitt $\Delta y$ (med fortegn og tolkning); 4) evt. HPR over ett år, forward-rente/syntetisk obligasjon, eller kredittrisiko-/CDS-tillegg; 5) verbal tolkning av alle tall (hvorfor durasjonen er som den er, hvorfor current yield ligger mellom kupongrate og yield). **Gjennomregnet eksamenscase med sensor-margnotater**. **12–15 oppgaver** på eksamensnivå som roterer rentestruktur (flat / yieldkurve / forward-gitt) × leveranse (pris+yield / durasjon+priseffekt / HPR / forward+syntetisk / kredittrisiko), alle med `solution` + `hints`, nyskrevne tall kalibrert til pene svar (tre desimaler på durasjon).
- **Oppgavesjangre:** E, F, G, M. Mønstereksempel (full kjede): «(a) Prisen på en kupongobligasjon fra en gitt yieldkurve; over- eller underkurs? (b) Yield to maturity og current yield, med tolkning. (c) Durasjon (tre desimaler), modifisert durasjon og prisendring ved $\Delta y=+0{,}25$ pp. (d) Holding period return dersom yielden faller 0,5 pp etter ett år.»
- **Typiske feil:** Hele obligasjonsrepertoaret fra §5: flat yield på en yieldkurve (§5.2), current/yield/kupong-forveksling (§5.5), glemt durasjonsfortegn (§5.11), utolkede tall (§5.1), lovet i stedet for forventet kontantstrøm ved kredittrisiko.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (`sok2005-3-prove`): 3.A obligasjonsprising + yield + current yield + over-/underkurs (sjanger E); 3.B durasjon + modifisert durasjon + priseffekt (sjanger F, kronspørsmålet); 3.C rentekurve + forward-renter + syntetisk obligasjon (sjanger G); 3.D full obligasjonsoppgave på eksamensnivå inkl. HPR og kredittrisiko/CDS (sjanger E+F+G+M).

---

### Del 4 — Derivater *(prioritet: PERFEKT — oppgave 3, ~85 %; binomisk er signaturmetoden)*

#### Kapittel 4.1: Opsjoner: begreper, payoff og indre verdi

- **id:** `sok2005-4-1` · **number:** 4.1 · **estimatedMinutes:** 40 · **prerequisites:** `sok2005-1-3`
- **Kapitteltype:** teori
- **description:** Kjøpsopsjon (call) og salgsopsjon (put), payoff ved forfall, indre verdi og tidsverdi — begrepsfundamentet for derivatoppgaven.
- **Eksamensbelegg:** Fundament for ~85 % av settene (sjanger H/J-inngang). Prioritet: **perfekt** (definisjoner må sitte).
- **Innholdskontrakt:** **Kjøpsopsjon (call):** rett (ikke plikt) til å kjøpe til innløsningskurs $X$; payoff ved forfall $\max(S_T-X,0)$. **Salgsopsjon (put):** rett til å selge; payoff $\max(X-S_T,0)$. **Europeisk** (kun ved forfall) vs. **amerikansk** (når som helst før forfall). Lang vs. kort posisjon (utsteder/skriver). **Indre verdi** ($\max(S-X,0)$ for call) vs. **tidsverdi** (opsjonspremien minus indre verdi). Tegn payoff-diagram for lang/kort call og put med knekkpunkt ved $X$. Understrek at payoff-diagram er ved **forfall** (ikke premie-inkludert med mindre profitt spørres). Legg grunnlaget for binomisk prising (4.2).
- **Oppgavesjangre:** H/J-fundament. Mønstereksempel: «Tegn payoff ved forfall for en lang kjøpsopsjon og en lang salgsopsjon med innløsningskurs $X=100$, og forklar hva indre verdi og tidsverdi er for en opsjon der aksjen står i 110.»
- **Typiske feil:** Forveksle call- og put-payoff; glemme $\max(\cdot,0)$ (negativ payoff finnes ikke for eier); blande payoff (forfall) og profitt (fratrukket premie); forveksle europeisk og amerikansk.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Binomisk opsjonsprising: én periode

- **id:** `sok2005-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-4-1`, `sok2005-1-3`
- **Kapitteltype:** teori
- **description:** Ett-periode-binomisk tre: risikonøytral sannsynlighet $p^*$, verdsetting som neddiskontert forventet payoff, og den ekvivalente replikeringsporteføljen.
- **Eksamensbelegg:** Kjernen i ~85 % av derivatoppgavene (sjanger H) — signaturmetoden. Prioritet: **perfekt**.
- **Innholdskontrakt:** Aksjen går fra $S_0$ til $uS_0$ eller $dS_0$. **Risikonøytral sannsynlighet** $p^* = \frac{(1+r_f)-d}{u-d}$ (fra Del 1.3). **Verdsetting:** $C_0 = \frac{p^*C_u + (1-p^*)C_d}{1+r_f}$ (call og put likt, med sine payoffs). **Replikeringsporteføljen** (den andre veien): finn antall aksjer $\Delta = \frac{C_u-C_d}{(u-d)S_0}$ og risikofritt lån slik at porteføljen gjenskaper opsjonens payoff; vis at prisen blir den samme — dette *er* hvorfor $p^*$ virker. Understrek at prisen er **preferansefri** (fysiske sannsynligheter og risikoaversjon faller ut). Sjekk at $d<1+r_f<u$ (ellers arbitrasje).
- **Oppgavesjangre:** H. Mønstereksempel: «$S_0=100$, $u=1{,}2$, $d=0{,}9$, $r_f=2\%$ per periode. Finn verdien av en europeisk kjøps- og salgsopsjon med $X=100$, både via risikonøytral prising og via replikeringsporteføljen, og vis at de gir samme svar.»
- **Typiske feil:** Bruke fysiske sannsynligheter i stedet for $p^*$ (§5.3); regne $p^*$ feil (fortegn/rekkefølge i telleren); glemme å neddiskontere; feil payoff (call/put-forveksling); ikke sjekke arbitrasjebetingelsen $d<1+r_f<u$.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Binomisk opsjonsprising: to perioder og amerikansk put

- **id:** `sok2005-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok2005-4-2`
- **Kapitteltype:** teori
- **description:** To-periode-treet løst bakover, og amerikansk put med tidlig utøvelse — toppkarakter-differensiatoren i derivatoppgaven.
- **Eksamensbelegg:** ~50 % av derivatoppgavene (sjanger H, avansert); amerikansk vs. europeisk put er eksplisitt A/B-markør (§4). Prioritet: **perfekt**.
- **Innholdskontrakt:** **To-periode-tre:** bygg $S_0\to\{uS_0,dS_0\}\to\{u^2S_0,udS_0,d^2S_0\}$; verdsett **bakover** node for node med $p^*$ (samme $p^*$ i hver node ved konstant $u,d,r_f$). **Amerikansk put:** i hver node, sammenlign **hold-verdien** (neddiskontert forventet fremtidsverdi) med **umiddelbar utøvelse** $\max(X-S,0)$ og ta det største; forklar at forskjellen mot europeisk put skyldes **verdien av tidlig utøvelse** (kun put — amerikansk call på ikke-utbyttebetalende aksje = europeisk). Vis et komplett eksempel der amerikansk put $>$ europeisk put. State-pris-tolkning nevnes (kobling til 4.6).
- **Oppgavesjangre:** H. Mønstereksempel: «Med $S_0=100$, $u=1{,}25$, $d=0{,}8$, $r_f=3\%$, to perioder, $X=100$: finn den europeiske putverdien og den amerikanske putverdien, og forklar forskjellen.»
- **Typiske feil:** Behandle amerikansk put som europeisk og dermed underprise den (§5.4); glemme å sjekke tidlig utøvelse i *hver* node; regne $p^*$ på nytt feil per node; feil bakoverinduksjon (diskontere hele veien i ett steg).
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 4.4: Put-call-paritet og Black–Scholes (kort)

- **id:** `sok2005-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-4-2`
- **Kapitteltype:** teori
- **description:** Put-call-pariteten som arbitrasjesammenheng mellom kjøps- og salgsopsjon, og en kort presentasjon av Black–Scholes med normalfordelingstabell.
- **Eksamensbelegg:** Put-call-paritet ~40 % (sjanger I); Black–Scholes marginal (ett eldre sett, H2016) — dekkes kort, ikke som hovedspor (§6 «skal IKKE bygges tungt»). Prioritet: put-call **perfekt**, Black–Scholes **kjenne**.
- **Innholdskontrakt:** **Put-call-paritet** (diskret): $C_0 + \frac{X}{(1+r_f)^T} = P_0 + S_0$ — utled ved ingen-arbitrasje (to porteføljer med samme payoff: call + neddiskontert $X$ vs. put + aksje). Bruk pariteten til å prise den ene opsjonen fra den andre og til å sjekke konsistens; koble til **protective put** (aksje + put = call + risikofri plassering). Kontinuerlig versjon $C_0 = S_0 - Xe^{-r_fT} + P_0$. **Black–Scholes (kort):** presenter formelen $C_0 = S_0 N(d_1) - Xe^{-r_fT}N(d_2)$ med $d_1,d_2$; vis **tabellbruk** for $N(\cdot)$ og at pariteten gir put-en; presiser at binomisk (4.2–4.3) er hovedmetoden og Black–Scholes bare skal kunne brukes med oppgitt tabell.
- **Oppgavesjangre:** I. Mønstereksempel: «Vis hvordan en aksje pluss en salgsopsjon kan gjenskapes med en kjøpsopsjon og en risikofri plassering, hvilken prissammenheng dette gir, og bruk pariteten til å finne putprisen når callprisen er kjent.»
- **Typiske feil:** Feil fortegn/plassering av $X/(1+r_f)^T$ i pariteten; blande diskret og kontinuerlig versjon; forsøke full Black–Scholes-utledning (unødvendig — bruk tabell); avlese $N(d)$ feil i tabellen.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.5: Opsjonsstrategier og payoff-diagrammer

- **id:** `sok2005-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-4-4`
- **Kapitteltype:** teori
- **description:** Sammensatte posisjoner — protective put, covered call, straddle, bull spread, collar — deres payoff-diagrammer og ingen-arbitrasje-verdsetting.
- **Eksamensbelegg:** ~30–40 % (sjanger J; V2014, H2018, H2023 opsjonsstrategier). Krever tydelige payoff-diagrammer (§5.13). Prioritet: **kunne** (nivå 2, gjenganger).
- **Innholdskontrakt:** Tegn **payoff ved forfall** for sammensatte posisjoner: **protective put** (aksje + lang put), **covered call / dekket kjøpsopsjon** (aksje + kort call), **straddle** (lang call + lang put, satsing på volatilitet), **bull spread** (lang call lav $X$ + kort call høy $X$), **collar** (aksje + lang put + kort call), samt short aksje + calls. For hver: angi for hvilke sluttpriser strategien gir positiv payoff, knekkpunkter (ved $X$-verdiene), og startkostnaden via ingen-arbitrasje (sum av opsjonspremiene). Forklar **spekulantens motiv** (tro på oppgang/nedgang/økt volatilitet) — verbal del sensor belønner.
- **Oppgavesjangre:** J. Mønstereksempel: «Illustrer forfall-payoff for (a) aksje + lang put med $X=100$, (b) en straddle med $X=100$, (c) short aksje + to lange calls med $X=100$. For hvilke sluttpriser gir (c) positiv payoff?»
- **Typiske feil:** Uklare diagrammer — knekkpunkter, fortegn og aksenavn må være entydige (§5.13); glemme startkostnaden (premiene) når profitt spørres; feil sammensetning (bytte lang/kort); ikke forklare spekulantens motiv.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.6: Forward/futures, arbitrasje, strukturerte produkter og state prices

- **id:** `sok2005-4-6` · **number:** 4.6 · **estimatedMinutes:** 55 · **prerequisites:** `sok2005-4-3`, `sok2005-1-3`
- **Kapitteltype:** teori
- **description:** Arbitrasjefri forwardpris og gjennomføring av arbitrasje, valuta-forward via renteparitet, kapitalgaranterte produkter, og state prices / state-contingent claims.
- **Eksamensbelegg:** Forward/arbitrasje ~25 % (sjanger K; H2024, V2010 valuta-forward); strukturerte produkter ~10 % (V2020); state prices i vekst i nyeste sett (H2025). Prioritet: forward/arbitrasje **kunne**, state prices **kjenne** (men stigende).
- **Innholdskontrakt:** **Arbitrasjefri forwardpris** $F = S_0(1+r_f)^T$ — utled ved ingen-arbitrasje (cost-of-carry). Ved feilprising: beskriv **arbitrasjen** (kjøp/short spot, motsatt forward, lån/plasser risikofritt) og antall kontrakter for gitt risikofri gevinst. **Valuta-forward** via dekket renteparitet $F = S_0\frac{1+r_{\text{hjemme}}}{1+r_{\text{ute}}}$. **Strukturert produkt** (kapitalgaranti) = nullkupongobligasjon (sikrer hovedstolen) + kjøpsopsjon (oppsiden) — prises ved replikering. **State prices** $\pi_u,\pi_d$ (fra Del 1.3): pris ethvert state-contingent claim som $\sum \pi_s\cdot\text{payoff}_s$; utled $r_f$ fra state prices ($\sum\pi_s = 1/(1+r_f)$); **eksotiske/lookback**-opsjoner (payoff avhenger av stien — spor maks/min langs treet). Understrek at alt her hviler på ingen-arbitrasje/risikonøytralitet.
- **Oppgavesjangre:** K + H (eksotisk/state). Mønstereksempel: «$S_0=100$, $r_f=5\%$, markedets ettårs-forwardpris er 104. Finn den arbitrasjefrie forwardprisen, beskriv arbitrasjen og antall kontrakter for en risikofri gevinst i dag. Prise deretter et kapitalgarantert produkt som en nullkupongobligasjon pluss en kjøpsopsjon.»
- **Typiske feil:** Feil arbitrasjeretning (kjøpe der man skal shorte, §5.12); glemme å spesifisere antall kontrakter; feil renteparitet-brøk (bytte hjemme/ute); glemme at state prices summerer til $1/(1+r_f)$; behandle en lookback som en vanlig europeisk opsjon.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.7: Drill: derivatoppgaven (oppgave 3)

- **id:** `sok2005-4-7` · **number:** 4.7 · **estimatedMinutes:** 95 · **prerequisites:** `sok2005-4-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 3: fra gitt aksjeprosess/marked til fullført A-besvarelse med binomisk prising, put-call, payoff-strategi eller forward-arbitrasje.
- **Eksamensbelegg:** Dekker sjangrene H, I, J, K samlet — hele oppgave 3 (~25 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) tegn treet ($S_0$, $u$, $d$, antall perioder) og sjekk $d<1+r_f<u$; 2) regn $p^*$; 3) verdsett bakover (europeisk *og* amerikansk der aktuelt — sjekk tidlig utøvelse per node); 4) kontroller med put-call-paritet; 5) evt. payoff-diagram for en strategi, eller forward-arbitrasje med kontraktsantall, eller state-pris/eksotisk verdsetting; 6) verbal tolkning (hvorfor prisen er preferansefri, hvorfor amerikansk put er dyrere). **Gjennomregnet eksamenscase med sensor-margnotater** (særlig: $p^*$ i stedet for fysisk sannsynlighet, tidlig utøvelse, arbitrasjeretning). **12–15 oppgaver** på eksamensnivå som roterer type (ett-/to-periode binomisk / amerikansk put / put-call-konsistens / payoff-strategi / forward-arbitrasje / state prices / lookback), alle med `solution` + `hints`, nyskrevne tall.
- **Oppgavesjangre:** H, I, J, K. Mønstereksempel (full kjede): «(a) To-periode binomisk: europeisk call og put med gitt $u,d,r_f,X$. (b) Amerikansk put i samme tre — forklar differansen. (c) Kontroller med put-call-paritet. (d) Tegn payoff for en straddle med samme $X$ og angi break-even-prisene.»
- **Typiske feil:** Hele derivatrepertoaret fra §5: fysiske sannsynligheter (§5.3), oversett tidlig utøvelse (§5.4), feil arbitrasjeretning (§5.12), uklare payoff-diagrammer (§5.13), utolkede tall (§5.1).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (`sok2005-4-prove`): 4.A binomisk ett-periode + replikering + risikonøytral prising (sjanger H); 4.B to-periode binomisk + amerikansk put med tidlig utøvelse (sjanger H avansert); 4.C put-call-paritet + opsjonsstrategier/payoff (sjanger I+J); 4.D full derivatoppgave på eksamensnivå inkl. forward-arbitrasje og state prices/eksotisk (sjanger H+I+J+K).

---

### Del 5 — Aksjeverdsetting *(prioritet: PERFEKT — oppgave 4, ~65 %)*

#### Kapittel 5.1: Dividendediskontering og Gordons vekstmodell

- **id:** `sok2005-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-1-1`, `sok2005-2-5`
- **Kapitteltype:** teori
- **description:** Aksjens fundamentalverdi som neddiskontert dividendestrøm, Gordons vekstmodell $P=D_1/(k-g)$ og vekstraten $g=b\cdot\text{ROE}$, med avkastningskravet $k$ fra CAPM.
- **Eksamensbelegg:** ~65 % frekvens (sjanger L) — kjernen i oppgave 4. Kobling til CAPM (avkastningskravet $k$) er fast. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Dividendediskonteringsmodellen:** $P_0 = \sum_{t=1}^\infty \frac{D_t}{(1+k)^t}$. **Gordons vekstmodell** (konstant vekst): $P_0 = \frac{D_1}{k-g}$ (krever $k>g$); utled fra den geometriske rekken (Del 1.1). **Vekstraten** $g = b\cdot\text{ROE}$, der $b$ = plowback/tilbakeholdt andel (=1 − utdelingsgrad) og ROE = egenkapitalrentabilitet; dividende $D_1 = (1-b)E_1$. **Avkastningskravet** $k$ hentes fra **CAPM** (kap. 2.5): $k = r_f + \beta(E[r_M]-r_f)$ — understrek denne koblingen (den binder Del 2 og Del 5 sammen). Vis hvordan høyere risikopremie → høyere $k$ → lavere aksjekurs (verbal drøfting, sensor-poeng). Nevn multi-fase-modeller (høy vekst så stabil) kort.
- **Oppgavesjangre:** L. Mønstereksempel: «Et selskap forventes å betale dividende $D_1=8$ neste år, med konstant vekst $g=4\%$. Beta er 1,2, $r_f=3\%$, $E[r_M]=9\%$. Finn avkastningskravet fra CAPM og aksjens fundamentalverdi.»
- **Typiske feil:** Bruke $D_0$ i stedet for $D_1$ i telleren; bruke Gordon når $g\ge k$ (modellen bryter sammen); feil $g=b\cdot\text{ROE}$ (bytte $b$ og utdelingsgrad); ikke hente $k$ fra CAPM (bruke en vilkårlig rente); glemme verbal tolkning.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 5.2: PVGO: verdien av vekstmuligheter

- **id:** `sok2005-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok2005-5-1`
- **Kapitteltype:** teori
- **description:** Present value of growth opportunities — aksjeverdien delt i verdien uten vekst og verdien av fremtidige reinvesteringer, med ROE/plowback-tolkningen.
- **Eksamensbelegg:** ~50 % av aksjeoppgavene (sjanger L, avansert; V2016, V2019, V2024 PVGO). PVGO som $P-E_1/k$ er eksplisitt A/B-markør og en fast toppfeil (§5.9). Prioritet: **perfekt**.
- **Innholdskontrakt:** **No-growth-verdien:** hvis selskapet deler ut alt ($b=0$), er $P_{\text{ng}} = E_1/k$ (evigvarende fortjeneste). **PVGO** $= P_0 - E_1/k$ = verdien av å reinvestere i stedet for å dele ut alt. Vis at PVGO $>0$ **bare når** ROE $>k$ (reinvestering skaper verdi kun når avkastningen på reinvestert kapital overstiger avkastningskravet); ROE $=k$ → PVGO $=0$ (vekst uten verdiskaping); ROE $<k$ → PVGO $<0$ (vekst ødelegger verdi). Tolk hva PVGO forteller om selskapet (hvor mye av kursen som er «vekstforventning»). Koble til Gordon: $P_0 = \frac{(1-b)E_1}{k-b\cdot\text{ROE}}$, og PVGO faller ut av differansen.
- **Oppgavesjangre:** L. Mønstereksempel: «Et selskap forventer fortjeneste $E_1=100$ neste år, holder tilbake 30 % ($b=0{,}3$), og har ROE 18 %. Avkastningskravet fra CAPM er 10 %. Finn aksjeverdien, no-growth-verdien og PVGO, og forklar hva PVGO forteller om selskapets vekstmuligheter.»
- **Typiske feil:** Sette PVGO $= P_0$ i stedet for $P_0 - E_1/k$ (§5.9); bruke feil (ikke-CAPM) avkastningskrav; tro at all vekst er verdiskapende (glemme ROE-vs-$k$-vilkåret); regne $E_1/k$ med feil fortjenestemål.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.3: Drill: aksjeoppgaven (oppgave 4)

- **id:** `sok2005-5-3` · **number:** 5.3 · **estimatedMinutes:** 75 · **prerequisites:** `sok2005-5-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 4: fra selskapsdata + CAPM-input til fullført A-besvarelse med avkastningskrav, Gordon-verdi og PVGO.
- **Eksamensbelegg:** Dekker sjanger L (+ C som input) samlet — hele oppgave 4 (~25 % når den kommer). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) finn avkastningskravet $k$ fra CAPM (beta, $r_f$, markedspremie); 2) finn $g=b\cdot\text{ROE}$ og $D_1=(1-b)E_1$; 3) Gordon-verdi $P_0=D_1/(k-g)$ (sjekk $k>g$); 4) no-growth-verdi $E_1/k$ og **PVGO** $=P_0-E_1/k$; 5) tolk: er veksten verdiskapende (ROE vs. $k$)? hvor mye av kursen er vekstforventning? **Gjennomregnet eksamenscase med sensor-margnotater** (særlig: CAPM-koblingen, PVGO-differansen, ROE-vs-$k$-tolkningen). **10–12 oppgaver** på eksamensnivå som roterer input (gitt beta / beta fra $\sigma,\rho$ / gitt $k$) × leveranse (Gordon-verdi / PVGO / ROE-vurdering / multi-fase), alle med `solution` + `hints`, nyskrevne tall.
- **Oppgavesjangre:** L (+ C). Mønstereksempel (full kjede): «(a) Finn beta fra $\sigma$ og korrelasjon med markedet, og avkastningskravet fra CAPM. (b) Med ROE, plowback og forventet fortjeneste, finn $g$, $D_1$ og Gordon-verdien. (c) Finn PVGO og avgjør om selskapets vekst skaper verdi.»
- **Typiske feil:** $D_0$ i stedet for $D_1$; feil PVGO (§5.9); ikke-CAPM avkastningskrav; Gordon med $g\ge k$; utolkede tall (§5.1).
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (`sok2005-5-prove`): 5.A dividendediskontering + Gordon + $g=b\cdot\text{ROE}$ (sjanger L); 5.B avkastningskrav fra CAPM matet inn i Gordon (sjanger C+L); 5.C PVGO + ROE-vs-$k$-vurdering (sjanger L avansert); 5.D full aksjeoppgave på eksamensnivå (beta → CAPM → Gordon → PVGO, sjanger C+L).

---

### Del 6 — Eksamenstrening

> Sjangerkapitlene ligger som drillkapitler i søylene (2.7, 3.6, 4.7, 5.3).
> Del 6 er de tre **komplette øvingseksamenene** som setter alle fire søylene
> sammen under tidspress, skrevet slik sensor vil se dem (A-besvarelse med
> figurbeskrivelser i ord + regning + verbal tolkning i `collapsible` per oppgave,
> og `tip`-notat om delpoeng/vekting). Bygges av én agent som leser HELE skjelettet.

#### Kapittel 6.1: Øvingseksamen 1 — standard firedelt (25/25/25/25)

- **id:** `sok2005-6-1` · **number:** 6.1 · **estimatedMinutes:** 120 · **prerequisites:** `sok2005-5-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers eksamen etter den dominerende malen: fire likeveide oppgaver, én per aktivaklasse.
- **Eksamensbelegg:** Speiler standardmalen (Lindset-settene ~2015→): oppg. 1 portefølje/CAPM (25 %), oppg. 2 obligasjon/durasjon (25 %), oppg. 3 binomisk opsjon inkl. amerikansk put (25 %), oppg. 4 aksje med CAPM→Gordon→PVGO (25 %). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** Fire nyskrevne oppgaver kalibrert til eksamensnivå og -tid, som til sammen dekker sjangrene A–L; hver med fullstendig A-løsning (figurer i ord, regning, verbal tolkning) i `collapsible` og delpoeng-`tip`. Aktualitetsinnpakning (fiktive selskaper/kontekster) men standard modeller.
- **Oppgavesjangre:** A/C · E/F · H/I · L. Mønstereksempel: se de fire drillkapitlene.
- **Typiske feil:** Tidsbudsjett (60 min per oppgave); alle §5-feilene samlet; ikke tolke tall verbalt under tidspress.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 6.2: Øvingseksamen 2 — firedelt med forward/rentekurve og strukturert produkt

- **id:** `sok2005-6-2` · **number:** 6.2 · **estimatedMinutes:** 120 · **prerequisites:** `sok2005-6-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett firedelt eksamen som vektlegger nivå-2-temaene som roterer inn: forward-renter, opsjonsstrategier, forward-arbitrasje og kredittrisiko.
- **Eksamensbelegg:** Speiler settene der de roterende temaene dominerer (V2019/V2020/V2024/H2024): oppg. 1 portefølje/kvadratisk nytte (25 %), oppg. 2 obligasjon + forward-renter + HPR (25 %), oppg. 3 binomisk + opsjonsstrategi + forward-arbitrasje (25 %), oppg. 4 aksje + PVGO evt. med kredittrisiko/strukturert produkt (25 %). Prioritet: **perfekt** (bredde).
- **Innholdskontrakt:** Fire nyskrevne oppgaver som samlet dekker sjangrene B, G, J, K, M i tillegg til kjernesjangrene; full A-løsning + delpoeng per oppgave.
- **Oppgavesjangre:** B · E/F/G · H/J/K · L/M. Mønstereksempel: se drillkapitlene 2.7, 3.6, 4.6/4.7, 5.3.
- **Typiske feil:** Forward-formel-eksponent; arbitrasjeretning (§5.12); payoff-diagram-uklarhet (§5.13); lovet vs. forventet kontantstrøm.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 6.3: Øvingseksamen 3 — treoppgavevariant (30/30/40) med state prices

- **id:** `sok2005-6-3` · **number:** 6.3 · **estimatedMinutes:** 120 · **prerequisites:** `sok2005-6-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett tre-oppgave-eksamen etter den nyeste malen (H2025-typen), med tung state-pris/to-periode-binomisk-oppgave.
- **Eksamensbelegg:** Speiler treoppgavevarianten (H2025: CAPM+SML+prosjekt 30 % / obligasjon+durasjon 30 % / to-periode-binomisk+state prices 40 %). Prioritet: **perfekt** (nyeste format + toppsjikt).
- **Innholdskontrakt:** Tre nyskrevne oppgaver med 30/30/40-vekting; derivatoppgaven (40 %) vektlegger state prices, eksotisk/lookback og utledning av $r_f$ fra state prices (toppsjikt-innhold). Full A-løsning + delpoeng, og et `tip`-notat om at vektingen er veiledende og at egne forutsetninger honoreres.
- **Oppgavesjangre:** C · E/F · H (state prices). Mønstereksempel: se drillkapitlene 2.7, 3.6, 4.7.
- **Typiske feil:** State prices summerer til $1/(1+r_f)$ (ikke 1); tidlig utøvelse i to-periode-treet (§5.4); fysiske sannsynligheter (§5.3); ikke utnytte at vektingen er veiledende.
- **Quiz: 12 · Flashcards: 6**

**Prøve-kvote Del 6:** ingen egne temaprøver (de tre kapitlene ER komplette øvingseksamener). De 20 temaprøvene ligger i Del 1–5.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5, 20 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok2005-<del>-prove`, chapterNumber `<del>.P`), for Del 1–5.

**Del 1 — Fundament**
1. Prøve 1.A (30 min): Nåverdi — annuitet og evigvarende betaling, kontantstrøm-neddiskontering.
2. Prøve 1.B (35 min): Forventning/varians/kovarians for en lineærkombinasjon, med korrelasjonstolkning.
3. Prøve 1.C (35 min): Risikonøytral sannsynlighet $p^*$ og state prices — utled og tolk.
4. Prøve 1.D (30 min): Blandet fundamentprøve (nåverdi + varians + $p^*$).

**Del 2 — Risiko, portefølje og CAPM**
1. Prøve 2.A (35 min): Porteføljevarians + minimum-varians-andel + korrelasjonseffekt (sjanger A).
2. Prøve 2.B (35 min): Kapitalallokering med kvadratisk nytte + Sharpe/CML (sjanger B).
3. Prøve 2.C (40 min): CAPM — beta fra kovarians + SML + alfa + «godt kjøp» (sjanger C).
4. Prøve 2.D (55 min): Full porteføljeoppgave inkl. aksjeplukker-analyse (sjanger A+B+C+D).

**Del 3 — Obligasjoner og renter**
1. Prøve 3.A (35 min): Obligasjonsprising + yield + current yield + over-/underkurs (sjanger E).
2. Prøve 3.B (35 min): Durasjon + modifisert durasjon + priseffekt (sjanger F, kronspørsmålet).
3. Prøve 3.C (40 min): Rentekurve + forward-renter + syntetisk obligasjon (sjanger G).
4. Prøve 3.D (55 min): Full obligasjonsoppgave inkl. HPR og kredittrisiko/CDS (sjanger E+F+G+M).

**Del 4 — Derivater**
1. Prøve 4.A (35 min): Binomisk ett-periode + replikering + risikonøytral prising (sjanger H).
2. Prøve 4.B (40 min): To-periode binomisk + amerikansk put med tidlig utøvelse (sjanger H avansert).
3. Prøve 4.C (40 min): Put-call-paritet + opsjonsstrategier/payoff (sjanger I+J).
4. Prøve 4.D (55 min): Full derivatoppgave inkl. forward-arbitrasje og state prices/eksotisk (sjanger H+I+J+K).

**Del 5 — Aksjeverdsetting**
1. Prøve 5.A (30 min): Dividendediskontering + Gordon + $g=b\cdot\text{ROE}$ (sjanger L).
2. Prøve 5.B (35 min): Avkastningskrav fra CAPM matet inn i Gordon (sjanger C+L).
3. Prøve 5.C (35 min): PVGO + ROE-vs-$k$-vurdering (sjanger L avansert).
4. Prøve 5.D (50 min): Full aksjeoppgave (beta → CAPM → Gordon → PVGO, sjanger C+L).

### Øvingseksamener (3 komplette sett — kap. 6.1–6.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (6.1) | Standard 25/25/25/25 (dominerende) | Portefølje/CAPM · obligasjon/durasjon · binomisk (inkl. amerikansk put) · aksje (CAPM→Gordon→PVGO) |
| Øvingseksamen 2 (6.2) | Roterende nivå-2-tema (V2019/V2024/H2024) | Kvadratisk nytte · obligasjon+forward+HPR · binomisk+strategi+forward-arbitrasje · aksje+PVGO/kredittrisiko |
| Øvingseksamen 3 (6.3) | Treoppgavevariant 30/30/40 (H2025) | CAPM+SML+prosjekt · obligasjon+durasjon · to-periode-binomisk+state prices |

Til sammen dekker de tre settene sjangrene A–M minst én gang; den firedelte malen
trenes i to sett, og treoppgavevarianten (30/30/40) i det tredje.

---

## 5. Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 12 | 0 |
| 1 | 1.1–1.3 | 20+22+24 = **66** | 16+20+22 = **58** | 4 |
| 2 | 2.1–2.7 | 24+22+18+22+24+18+16 = **144** | 20+20+16+22+22+14+8 = **122** | 4 |
| 3 | 3.1–3.6 | 24+24+18+20+18+16 = **120** | 20+20+14+18+16+8 = **96** | 4 |
| 4 | 4.1–4.7 | 18+24+24+20+20+22+16 = **144** | 18+22+20+18+18+20+8 = **124** | 4 |
| 5 | 5.1–5.3 | 24+22+18 = **64** | 22+20+8 = **50** | 4 |
| 6 | 6.1–6.3 | 12+12+12 = **36** | 6+6+6 = **18** | 0 (3 øvingseksamener) |
| **Sum** | **30 kap.** | **588** | **480** | **20 + 3 ØE** |

> **Korreksjon — gulvsjekk:** delsummene over gir quiz **588** og flashcards
> **480**. Flashcards ligger UNDER 500-gulvet og løftes: fundamentet og de fire
> søylene er begrepsrike (risikonøytral prising, durasjon/modifisert durasjon,
> systematisk/usystematisk risiko, SML/CML, put-call-paritet, PVGO, state prices,
> norsk↔engelsk termpar), så flashcard-kvoten heves med +16 i Del 2 (2.1→24,
> 2.4→26, 2.5→26), +16 i Del 3 (3.1→24, 3.2→24, 3.4→22), +16 i Del 4 (4.2→26,
> 4.3→24, 4.6→24) og +12 i Del 5 (5.1→26, 5.2→24). **Justerte totaler:**

| Del | Quiz | Flashcards |
|---|---|---|
| 0 | 14 | 12 |
| 1 | 66 | 58 |
| 2 | 144 | **138** (24+20+16+26+26+14+12) |
| 3 | 120 | **112** (24+24+14+22+16+12) |
| 4 | 144 | **140** (18+26+24+18+18+24+12) |
| 5 | 64 | **62** (26+24+12) |
| 6 | 36 | 18 |
| **Sum** | **588 ≥ 500 ✓** | **540 ≥ 500 ✓** |

> **De per-kapittel-kvotene i §3 er de opprinnelige (gulv); tallene i denne
> justerte tabellen er de AUTORITATIVE minimumskvotene forfatteren skal treffe:
> quiz ≥ 588, flashcards ≥ 540.** Forfatteren fordeler de +60 ekstra flashcardsene
> på de begrepsrike kapitlene angitt over (eller tettere der innholdet bærer det),
> og kan overskyte, aldri underskride. Kvotene speiler den firedelte
> eksamensmalen: de fire søylene (Del 2–5) står for 472 av 588 quiz og 452 av 540
> flashcards — nøyaktig de ~100 % av eksamenspoengene de bærer. Obligasjon (Del 3)
> og derivater (Del 4) er de tyngste fordi de er de sikreste enkeltblokkene
> (~90 %/~85 %). Boka er et **regnefag med solid begrepsrepertoar**: quiz ligger
> komfortabelt over gulvet (drilltunge søyler), og flashcards er løftet over gulvet
> fordi definisjonene faktisk må sitte.

**Prøver totalt:** 20 temaprøver (4 per Del 1–5) + 3 komplette øvingseksamener.
Hver temadel har ≥4 prøver (CLAUDE.md-minstekravet).

---

## 6. Arbeidsdeling mot beslektede bøker

SØK2005 står i et nettverk av beslektede NTNU/BI-emner. Denne tabellen styrer hva
SØK2005 bygger ut vs. hva den forutsetter/kryssrefererer. **Ingen bygget bok i
systemet dekker SØK2005s materiale** — nærmeste slektninger (SOK1002, SØK1011,
FIN 3521) er alle på skjelett-stadiet, og de bygde høyskolebøkene (ECON1310 makro,
JUS1111) er tematisk urelaterte. SØK2005 bygges derfor selvstendig, med
forkunnskapslenker der søsterbøkene finnes i systemet.

| Tema | Bygger ut i SØK2005 | Forutsettes / kryssrefereres |
|---|---|---|
| Nåverdi, intertemporalt valg, valg under usikkerhet (forventet nytte) | Kompakt i Del 1 (fundament) | **SOK1002** (NTNU) — forkunnskapsbro; lenk dit hvis boka finnes i systemet |
| Forventning/varians/kovarians for lineærkombinasjoner | Kompakt i Del 1.2 | **SOK1004 Statistikk for økonomer** (NTNU) — direkte grunnlag for porteføljevarians; lenk dit hvis den finnes |
| Renteregning, obligasjonsprising, yield, forward-renter, pris–rente | **JA** — Del 3 (full, dreid mot verdsetting: durasjon, HPR, kredittrisiko) | **SØK2010 Banking** (NTNU) — deler renteregnings-/obligasjonssøylen, men dreier mot bank/regulering/stabilitet; smalt overlapp, kryssrefereres ikke faglig (annen vinkling) |
| Beslutning under risiko (forventet nytte, risikoaversjon, sikkerhetsekvivalent) | **JA** — Del 2.2 (instrumentelt, til porteføljevalg) | **SOK2012 Atferdsøkonomi** (NTNU) — deler temaet, men problematiserer det (prospektteori); SØK2005 bruker det instrumentelt |
| Porteføljeteori, CAPM, binomisk opsjonsprising, aksjeverdsetting/PVGO | **JA** — Del 2, 4, 5 (bokas kjerne) | Ingen bygget/skjelettert bok dekker dette på SØK2005-nivå — **ingen direkte tvilling** i porteføljen |
| Corporate finance (MM, kapitalstruktur, M&A, utbyttepolitikk) | **NEI** — utenfor SØK2005 (investeringssiden, ikke bedriftsfinansiering) | **FIN 3521** (BI, skjelett) og **ECON2500** (UiO, skjelett) — beslektet finansformat, men annet fagfokus (bedriftens finansiering, ikke aktivaprising) |
| Full Black–Scholes-utledning; institusjonell bank/regulering (Basel, bankkriser); ren mikroteori | **NEI** — bevisst utelatt (§6 i analysen: marginalt/annet emne) | Black–Scholes dekkes kort (formel + tabell + paritet) i 4.4; bank/regulering hører til SØK2010 |

**Konklusjon arbeidsdeling:** SØK2005 er porteføljens **første rene
aktivaprisings-/finansmarkedsbok** (portefølje + CAPM + derivater + aksjeverdi).
Den forutsetter SOK1002/SOK1004-fundament (lenk der de finnes), deler en smal
renteregningssøyle med SØK2010 (uten faglig kryssref pga. ulik vinkling), og
skiller seg klart fra corporate-finance-bøkene (FIN 3521 / ECON2500) som handler
om bedriftens finansiering, ikke om prising av finansaktiva. Bygges selvstendig.

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok2005` med alle 30
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK2005 Finansmarkeder».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–M, frekvenstallene, firedelt
   mal og avgrensningen som resten refererer til.
3. **Del 1** (fundamentet) — nåverdi/statistikk/risikonøytral prising som alle
   søylene bruker (særlig $p^*$ til Del 4).
4. **De fire søylene i eksamensrekkefølge**: Del 2 (portefølje/CAPM) → Del 3
   (obligasjon) → Del 4 (derivater) → Del 5 (aksje). Én byggeagent per hel del
   (jf. fase 4-batching); Del 4 er 7 kapitler og kan splittes, men gi da hele
   delens kontrakter til begge agenter og flagg for konsistenssjekk (notasjon
   $p^*$, risikonøytral prising, bakoverinduksjon). Drillkapitlet (2.7/3.6/4.7/
   5.3) bygges av samme agent som delen.
5. **Del 6 til slutt** (3 øvingseksamener gjenbruker alt); bygges av én agent som
   leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok2005-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\sigma`, `\\beta`); ingen unicode; konsistent $E[r_i]$,
      $\sigma_{i,j}$, $\rho$, $r_f$, $\beta_i$, $p^*$, $S_0$, $u$/$d$, $X$, $D^*$,
      $\pi$, $k$, $g$, ROE, PVGO.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok2005-filer — **påkrevd**:
      $E[r_i]$, $\sigma_{i,j}$ (kovarians), $\rho_{i,j}$, $r_f$, $\beta_i =
      \sigma_{i,M}/\sigma_M^2$, $p^*$, $D$/$D^*$, SML/CML, $P_0=D_1/(k-g)$, PVGO
      $=P-E_1/k$; **norsk↔engelsk termpar** ved første forekomst; **forbudt/
      uønsket**: full Black–Scholes som hovedmetode, SØK2010-stoff (grep «Basel»,
      «bank run», «innskuddsgaranti», «finanskrise» → null treff utenfor evt.
      kort kontekstnevning), ren mikroteori (grep «monopol», «Nash»,
      «markedslikevekt» → null treff).
- [ ] **Risikonøytral prising gjennomgående**: hver derivatprising bruker $p^*$
      (ikke fysiske sannsynligheter); grep at både «risikonøytral»/«$p^*$» og
      «replikering»/«ingen-arbitrasje» forekommer i 1.3, 4.2, 4.3, 4.6, drill 4.7.
- [ ] **Figur + tolkning + regning**: hvert eksempel/løsningsforslag med figur har
      figurbeskrivelse i ord (akser, kurver, punkter, knekkpunkter/avstander
      navngitt — SML/CML, payoff-diagram, binomisk tre) OG verbal tolkning; alle
      tall (durasjon, beta, alfa, current yield, PVGO) er verbalt tolket; SOC/
      arbitrasjebetingelse ($d<1+r_f<u$) nevnt der relevant.
- [ ] **Kronspørsmål og toppmarkører til stede**: durasjon+modifisert durasjon+
      priseffekt (3.2, 3.6, prøve 3.B); amerikansk vs. europeisk put (4.3, 4.7,
      prøve 4.B); PVGO $=P-E_1/k$ (5.2, 5.3, prøve 5.C); dekomponering
      systematisk/usystematisk risiko (2.4); aksjeplukker-rangering avhenger av
      CAPM-referanse (2.6).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      herfra), Forkunnskaper-`text` med kryssbok-lenker (SOK1002/SOK1004 der de
      finnes) + Symbol- og formelliste-`collapsible` (per delkapittel — ALLE
      symboler), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution`+`hints`, repetisjons-`collapsible`;
      drillkapitlene (2.7/3.6/4.7/5.3) har løsningsoppskrift + sensor-kommentert
      case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 588 og flashcard-sum ≥ 540** per den justerte kvotetabellen i
      §5 (den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–M minst én gang, og både 25/25/25/25- og
      30/30/40-malen.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne selskaper/
      kontekster, egne formuleringer; ingen formuleringer/tall fra reelle sett
      eller sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger
      og skal varieres videre); pensum (Bodie/Kane/Marcus; Hull) refereres, aldri
      siteres i lengde — **pensumutgave merkes `(verifiser)`**.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng); institusjonssiden (NTNU) og bokforsiden
      (seksjonstitlene fra §2) sjekkes.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md` (som selv bygger på et arkiv av
> bildeskannede, håndskrevne fasiter lest via OCR — sensorkravene i §4 er delvis
> *utledet* av oppgavekonstruksjon, ikke ordrett sensortekst). Standardresultatene
> ($a^* = (\sigma_2^2-\sigma_{1,2})/(\sigma_1^2+\sigma_2^2-2\sigma_{1,2})$,
> $w^*=(\mu-r_f)/(A\sigma^2)$, $\beta=\sigma_{i,M}/\sigma_M^2$, $p^*=((1+r_f)-d)/
> (u-d)$, $P_0=D_1/(k-g)$, PVGO $=P_0-E_1/k$, $F=S_0(1+r_f)^T$) er faglige fakta
> uten verkshøyde. **Pensumutgaven** (Bodie/Kane/Marcus *Investments*, Hull
> *Options, Futures and Other Derivatives*, evt. Copeland/Weston) er *(verifiser)*
> — den eksakte utgaven og kapittelnummereringen er ikke entydig fastslått i
> analysen og bør sjekkes mot gjeldende NTNU-emnebeskrivelse før pensumankere
> skrives inn. **Studiepoengreduksjon/overlapp** mot beslektede finans-/bankemner
> er antydet i emnebeskrivelsen, men ikke fastslått i arkivet — *(verifiser)* mot
> NTNUs emnekatalog.

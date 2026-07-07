# Eksamensanalyse: MAT121 Lineær algebra (UiB)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på UiBs eksamensarkiv for MAT121 (2004–2021) og forgjengerkoden M102/MAT102 (1997–2003), til sammen ~110 filer: oppgavesett, håndskrevne løsningsforslag og pensumlister. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teoremnavn og standardnotasjon er fagfelles og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det. Søsteranalysene for kalkulusemnene MAT111 (UiB) og MAT1110 (UiO) ligger i `../mat111-uib/` og `../mat1110/`; MAT1110s lineær-algebra-del brukes til å plassere MAT121 i landskapet.

> **Hovedfunn (les dette først):** MAT121 er et **rent, komplett innføringsemne i lineær algebra** bygget tett på læreboken David C. Lay, *Linear Algebra and Its Applications* (notasjonen `Nul A`, `Col A`, `Row A`, `[x]_B`, `P_{C←B}`, `Span{…}` er Lays gjennomgående). I motsetning til de fleste emner varierer MAT121-eksamenen **lite i tema**: hvert sett er bredt og treffer nesten hele pensum samtidig, så de fleste kjernetemaene har en gjenganger-score på **80–100 %**. Det som faktisk endrer seg over tid er **eksamensformatet**, ikke temaene:
> - **2003–2015:** papireksamen, 4–5 store oppgaver med mange begrunnede deloppgaver.
> - **2016–2018:** digital Inspera-eksamen, 6 strukturerte oppgaver (35–38 p) + én **frivillig bevisoppgave** (ekstrapoeng) + 10 p fra obliger.
> - **2019–2021:** omlegging til **flervalgseksamen** (20 flervalgsoppgaver à 4 p) + **2 bevisoppgaver med filopplasting** (10 p hver). 2020–2021 var koronahjemme-eksamener.
> - **Gjeldende (emnebeskrivelse 2026):** tilbake til **5-timers skriftlig skoleeksamen**, kalkulator tillatt. Boken bør derfor trene det **strukturerte, fullt begrunnede skriftlige formatet** som primærmål, og bruke flervalgs-repertoaret (2019–2021) som ekstra drill.
>
> Den viktigste rammeforskjellen mot søsteremnet MAT111: **MAT121 er ikke åpen bok** — bare kalkulator er tillatt. Metoder, definisjoner og de sentrale teoremene må sitte utenat.

---

## 1. Eksamensform og utvikling

MAT121 (10 studiepoeng, tilbys om våren, forkunnskap MAT111/MAT101) vurderes i dag med **én avsluttende skriftlig skoleeksamen på 5 timer** (kl. 09–14), karakterskala A–F. Tillatt hjelpemiddel er **kalkulator i samsvar med fakultetets regler** — ingen lærebok, intet formelark. Det preger oppgavedesignet: metodene skal kunne utføres for hånd, tallene er «pene» (heltallige eller enkle brøker), og fasiten forventer full føring med begrunnelse.

Emnet har en lang forhistorie. Kodene i arkivet er **eksoppg-V97/H98** (eldst), **M102/MAT102** (1999–2003) og **MAT121** (fra 2004). Innholdet — grunnkurs i lineær algebra — er i praksis det samme gjennom hele perioden; kun kode, lærebokutgave og format har skiftet.

### Formathistorikk

| Periode | Format | Struktur | Kommentar |
|---|---|---|---|
| 1997–2003 | Papir (M102/MAT102) | Oppgavesett med fasit | Forgjenger; samme fagprofil |
| 2004–2005 | Papir, **deleksamen + eksamen** | Midtsemesterprøve fantes | Ordningen med deleksamen forsvant etter 2005 |
| 2006–2015 | Papir, 5 t (09–14) | **4–5 hovedoppgaver**, hver med mange begrunnede deloppgaver (a, b, c …) | «Alle svar må begrunnes» |
| 2016–2018 | **Digital (Inspera)** | **6 oppgaver** (35–38 p = 100 %) + **frivillig bevisoppgave 7** (ekstrapoeng) + 10 p fra obliger | Stabil 6-oppgavers mal; svarbokser + vedlegg for mellomregning |
| 2019 | Digital **flervalg** (norsk + engelsk versjon) | ~20 flervalgsoppgaver, «velg riktig svar» | Formatbruddet; to sett dette året (v + v2) |
| 2020–2021 | **Korona-hjemmeeksamen**, digital | **20 flervalgsoppgaver à 4 p** (= 80 p) + **2 bevisoppgaver med filopplasting** (10 p hver) | 5 t + 30 min til opplasting; egenerklæring om selvstendighet |
| 2026 (gjeldende) | **5-timers skriftlig skoleeksamen** | Skriftlig langsvar, kalkulator | Emnebeskrivelsen bekrefter retur til klassisk skoleeksamen |

**Konstanter på tvers av alle formatene:**
- **Fast instruks:** «Alle svar skal begrunnes. Det må være med så mye mellomregning at fremgangsmåten fremgår tydelig av besvarelsen.» Ubegrunnet svar gir ikke full uttelling — føringen er det som måles (unntatt i flervalgsdelen 2019–2021, der bare svaret teller og «utregninger ved filopplasting blir ikke vurdert»).
- **Bred dekning hvert år:** ett sett treffer typisk (1) lineære likningssystemer + fundamentale underrom, (2) determinant/basis/koordinater, (3) egenverdier + diagonalisering, (4) ortogonalitet/minste kvadrater, og (5) en teori-/bevisoppgave.
- **Deloppgavene er kjedet:** samme matrise/underrom gjenbrukes gjennom flere deloppgaver (f.eks. koeffisientmatrisen fra oppgave 1 brukes til `Nul A`, `Col A` og `det A` i oppgave 2 — H/V2018). Å se koblingen sparer tid og premieres.
- **Pene tall:** siden bare kalkulator er tillatt, er egenverdiene små heltall og radreduksjonen går opp — feilregning straffer seg selv fordi svarene «ikke blir pene».

### Regimeobservasjon: format, ikke tema

Det viktigste strukturfunnet er at **temaene er stabile mens formatet svinger**. Flervalgsregimet 2019–2021 testet nøyaktig de samme begrepene som de strukturerte settene 2016–2018 — bare uten krav til føring, og med noen typiske flervalgs-varianter (velg riktig egenvektor-sett, riktig diagonalisering, riktig definitthetsklasse). De to **bevisoppgavene** overlevde formatbruddet: i 2021 var det `rank(AB) ≤ rank(A)` / `rank(AB) ≤ rank(B)` og Fredholm-alternativet (`Ax = b` løsbar ⇔ `b ⟂` alle løsninger av `Aᵀx = 0`).

> **Konsekvens for boken:** Fordi gjeldende emnebeskrivelse (2026) sier 5-timers skriftlig skoleeksamen, kalibreres boken mot det **strukturerte, fullt begrunnede formatet 2006–2018** (Lay-metodene med føring). Flervalgssettene 2019–2021 brukes som ekstra hurtigdrill og til å fange «konseptuelle» spørsmål (definitthet, dimensjonsbokføring, egenskaper ved `det`).

### Lærerrotasjon (forklarer stilnyanser, ikke temaskifte)
Arkivet viser minst tre emneansvarlige: **Irina Markina** (bl.a. 2013–2014, 2019, 2021), **Antonella Zanna Munthe-Kaas** (2015–2018, ofte med anvendte innkledninger — legemiddeldoser, temperaturdata, fotballpoeng), og **Roman Kozlov** (medforfatter 2015). Zanna-settene har flere «virkelige» minste kvadrater-kontekster og navngitte bevisoppgaver (Gauss-Legendre, companion-matriser); Markina-settene er noe mer klassisk-abstrakte (Cramer, Cayley-Hamilton, ortogonalkomplement). Kjernepensumet er identisk.

---

## 2. Temafrekvens-tabell

Fordi hvert MAT121-sett dekker nesten hele pensum, er de fleste kjernetemaene til stede **nesten hvert år**. Cellene angir grovt hvor stor andel av de undersøkte settene i perioden som testet temaet som egen (del)oppgave. Grunnlag: ~18 sett med sikkert temainventar (2007–2021), med tettest lesing 2013–2018 og de tre flervalgssettene 2019–2021. Perioder: **2007–2012** (papir, eldre), **2013–2018** (papir → strukturert Inspera), **2019–2021** (flervalg).

| Tema | 2007–12 | 2013–18 | 2019–21 | **Gjenganger-score** |
|---|---|---|---|---|
| Lineære likningssystemer: Gauss/radreduksjon, RREF, generell løsning | høy | høy | høy | **~100 %** |
| Eksistens/entydighet med parameter (ingen / uendelig / én løsning) | høy | høy | høy | **~90 %** |
| Fundamentale underrom: `Nul A`, `Col A`, `Row A`, rang, dimensjon, nullitet | høy | høy | høy | **~95 %** |
| Egenverdier + egenvektorer + karakteristisk polynom | høy | høy | høy | **~100 %** |
| Diagonalisering `A = PDP⁻¹`, similære matriser | høy | høy | høy | **~95 %** |
| Basis, koordinater `[x]_B`, basisskiftematrise `P_{C←B}` | høy | høy | middels | **~90 %** |
| Lineær (u)avhengighet, span, verifisér underrom | høy | høy | middels | **~90 %** |
| Lineære avbildninger: standardmatrise, én-til-én/på, komposisjon, rotasjon | høy | høy | middels | **~85 %** |
| Determinant: beregning + regneregler (`det(AB)`, `det(Aᵀ)`, `det(A⁻¹)`, kofaktor) | middels | høy | høy | **~85 %** |
| Ortogonalitet: ortogonalkomplement, projeksjon, ortogonal dekomposisjon | middels | høy | middels | **~75 %** |
| Symmetriske matriser: ortogonal diagonalisering, spektralteorem | middels | høy | middels | **~70 %** |
| Kvadratiske former `Q(x)=xᵀAx`: klassifisering, prinsipalakser (evt. kjeglesnitt) | middels | høy | middels | **~70 %** |
| Gram-Schmidt / ortonormal basis | middels | høy | lav | **~65 %** |
| Minste kvadrater: normallikninger, datatilpasning `y = a + bx` | middels | høy | middels | **~65 %** (fast fra 2015) |
| Matriseinvers: `[A|I]`, adjungert, Cramers regel | middels | middels | middels | **~55 %** |
| Teori-/bevisoppgave (se katalog §3) | middels | høy | høy | **~75 %** (som egen, ofte frivillig, oppgave) |
| Indreproduktrom / vektede eller polynom-indreprodukt | lav | middels | lav | **~35 %** |
| Polynomrom `P_n` som vektorrom (koordinater, uavhengighet) | lav | middels | middels | **~30 %** |
| Matrisepotens/grense `Aⁿ`, Cayley-Hamilton, Jordan-form | lav | lav | lav | **~25 %** |

**Viktigste funn:**

1. **Kjerneryggraden er «alltid der».** Likningssystemer/Gauss, fundamentale underrom, egenverdier og diagonalisering forekommer i praktisk talt hvert eneste sett — ofte flettet inn i én stor flerdeloppgave som starter med en matrise og går via RREF → `Nul/Col` → determinant → egenverdier → diagonalisering. Dette er så stabilt at boken må gjøre denne kjeden til automatikk.

2. **Determinant er både beregning og regneregler.** Eldre sett ba om ren utregning (kofaktor/radreduksjon); flervalgsregimet 2019–2021 testet regnereglene abstrakt (`det(4(AB)ᵀA⁻¹C)` gitt `det A, det B, det C`; determinant av matrise med lineært avhengige kolonner; `det` som arealskalering under en avbildning). Boken må dekke begge.

3. **Minste kvadrater ble fast inventar fra 2015**, men fantes allerede 2010/2012. Zanna-settene kler det i data (legemiddeldose vs. effekt, sommertemperatur, Branns poengsum, sinus/cosinus-modell) og krever normallikningene `AᵀAx̂ = Aᵀb` + en prediksjon utenfor datasettet. Dette er en garantert poengkilde.

4. **Kvadratiske former har to ansikter.** Eldre sett (2007) rammet det som **kjeglesnitt** (`3x₁² − 4x₁x₂ = 1`, finn ortonormal basis uten kryssledd, tegn). Nyere sett (2015–2021) rammer det som **`Q(x)=xᵀAx` → symmetrisk `A` → ortogonal diagonalisering → klassifisér definitthet → standardform uten kryssledd**. Begge hviler på spektralteoremet for symmetriske matriser.

5. **Bevisoppgaven er en fast, men lavvektet, tradisjon.** Den er ofte frivillig (2016–2018) eller vekter 20 % (2020–2021). Temaene er gjengangere: Cauchy-Schwarz/trekantulikheten, Cramers regel (heltallsløsninger), Cayley-Hamilton, Jordan-form/generalisert egenvektor, companion-matriser, skjev-symmetriske matriser, refleksjonsmatriser, Gauss-Legendre-polynomer, rangulikheter og Fredholm-alternativet. Boken bør ha et eget «bevis- og teorikapittel» som driller disse.

6. **Indreproduktrom og polynomrom er den abstrakte overbygningen.** Vektede indreprodukt (`⟨x,y⟩ = xᵀAy` med symmetrisk positiv definit `A`, 2013/2014/2018) og Gram-Schmidt på polynomer i `P₂` (2012/2018) tester at studenten forstår at hele apparatet (ortogonalitet, projeksjon, Gram-Schmidt) generaliserer fra `ℝⁿ` til vilkårlige indreproduktrom. Lav frekvens, men karakterskiller.

---

## 3. Oppgavetype-katalog

Sjangrene som bærer MAT121-eksamen, med fasitens forventede metode. Fasitene i arkivet er **håndskrevne løsninger** (skannet), så metodekravene under er utledet fra oppgavetekstene + Lays etablerte standardmetode; der en sjanger nesten alltid løses på én bestemt måte i undervisningstradisjonen, er det angitt.

### A. Lineært likningssystem med parameter — eksistens og entydighet
- **Krav:** Skriv den utvidede matrisen `[A | b]`, radreduser til trappeform med **merkede radoperasjoner**, og analyser pivot-mønsteret som funksjon av parameteren(e) `a, b` (evt. `k`): **ingen løsning** (pivot i høyre kolonne / `0 = ikke-null`), **uendelig mange** (fri variabel / rad blir `0 = 0`), **én løsning** (pivot i hver variabelkolonne). Oppgi deretter den **generelle løsningen** på parameterform (`x = partikulær + Σ xᵢ · (fri retning)`) i tilfellet med uendelig mange løsninger.
- **Frekvens:** ~90 %; nesten alltid oppgave 1.
- **Omskrevet eksempel:** «For hvilke verdier av `a` og `b` har systemet ingen, uendelig mange, eller nøyaktig én løsning? Finn den generelle løsningen for de `a` som gir uendelig mange.»

### B. Fundamentale underrom: `Nul A`, `Col A`, `Row A`, rang og dimensjon
- **Krav:** Fra RREF: **basis for `Nul A`** = de spesielle løsningene (én per fri variabel); **basis for `Col A`** = de opprinnelige pivotsøylene (ikke de reduserte); **rang** = antall pivoter; dimensjonsteoremet `rang + dim Nul = antall søyler`. Vanlige tillegg: for hvilke parameterverdier har `Col A` dimensjon 3 / er `Nul A` ikke-triviell; er en gitt vektor i `Col A` (løsbarhet av `Ax = b`).
- **Frekvens:** ~95 %.
- **Omskrevet eksempel:** «Finn en basis for `Nul A` og for `Col A`, og oppgi rangen. For hvilke `a` har `Col A` dimensjon 3?»

### C. Determinant — beregning og regneregler
- **Krav:** Beregning ved kofaktorutvikling langs rad/søyle med nuller, eller ved radreduksjon (hold styr på fortegnsbytter og faktorer). Regnereglene skal kunne brukes abstrakt: `det(AB)=det A·det B`, `det(Aᵀ)=det A`, `det(A⁻¹)=1/det A`, `det(kA)=kⁿ det A`, og at lineært avhengige søyler ⇒ `det = 0`. Geometrisk tolkning: `|det A|` = arealskalering (2×2) / volumskalering (3×3) under `x ↦ Ax`.
- **Frekvens:** ~85 %.
- **Omskrevet eksempel:** «La `A, B, C` være 3×3 med `det A = 2`, `det B = π`, `det C = 1`. Finn `det(4(AB)ᵀA⁻¹C)`.»

### D. Basis, koordinater og basisskifte
- **Krav:** Vis at et sett er en basis (lineær uavhengighet + spenner / kvadratisk matrise med `det ≠ 0`). Finn **koordinater** `[x]_B` ved å løse `B[x]_B = x`. Sett opp **basisskiftematrisen** `P_{C←B}` (søylene er `B`-vektorenes `C`-koordinater), og bruk `[x]_C = P_{C←B}[x]_B`. Kjenne relasjonen `P_{B←C} = (P_{C←B})⁻¹`.
- **Frekvens:** ~90 %.
- **Omskrevet eksempel:** «Gitt basene `B` og `C` med `b₁ = c₁+c₂+c₃`, `b₂ = −c₃`, `b₃ = c₂+c₃`: finn `P_{C←B}` og regn ut `[v]_C`.»

### E. Egenverdier, egenvektorer og diagonalisering
- **Krav:** Løs `det(A − λI) = 0` for egenverdiene; finn egenvektorer fra `(A − λI)v = 0` (basis for hvert egenrom). **Diagonaliserbar** ⇔ sum av geometriske multiplisiteter = `n` ⇔ full sett lineært uavhengige egenvektorer; da `A = PDP⁻¹` med egenvektorer som søyler i `P` og egenverdier i `D` (i samme rekkefølge). Kjenne koblingen algebraisk vs. geometrisk multiplisitet, og at **manglende diagonaliserbarhet** skjer når geometrisk < algebraisk multiplisitet. Similære matriser deler karakteristisk polynom, egenverdier, `det` og spor.
- **Frekvens:** ~100 % (egenverdier); ~95 % (diagonalisering).
- **Omskrevet eksempel:** «Finn alle egenverdier og egenvektorer, avgjør om `A` er diagonaliserbar, og oppgi i så fall `P` og `D`.»

### F. Symmetriske matriser, ortogonal diagonalisering og spektralteorem
- **Krav:** Symmetrisk `A = Aᵀ` ⇒ **reelle egenverdier** og **ortogonalt diagonaliserbar** `A = QDQᵀ` med `Q` ortogonal (ortonormale egenvektorer; normalisér, og bruk Gram-Schmidt innen et egenrom med multiplisitet). **Spektral dekomposisjon** `A = Σ λᵢ uᵢuᵢᵀ`. Argumentér *uten regning* for ortogonal diagonaliserbarhet når `A` er symmetrisk, og for at en ikke-symmetrisk matrise ikke er det.
- **Frekvens:** ~70 %.
- **Omskrevet eksempel:** «Forklar hvorfor `A` er ortogonalt diagonaliserbar uten å regne, og oppgi en ortogonal diagonalisering.»

### G. Kvadratiske former: klassifisering og prinsipalakser
- **Krav:** Skriv `Q(x) = xᵀAx` med **symmetrisk** `A` (diagonalledd `aᵢᵢ`, kryssledd deles: `aᵢⱼ = aⱼᵢ = ½·koeffisient`). Ortogonal diagonalisering gir **prinsipalaksene** (egenvektorene) og variabelskiftet `x = Qy` som fjerner kryssleddene → `Q = Σ λᵢyᵢ²`. **Klassifisér** via egenverditegn: alle `>0` positiv definit, alle `≥0` positiv semidefinit, blandede fortegn indefinit, osv. Eldre variant: kjeglesnitt `axₐ² + bx₁x₂ + cx₂² = k` → identifisér type og tegn i nytt system.
- **Frekvens:** ~70 %.
- **Omskrevet eksempel:** «Finn symmetrisk `A` med `Q(x)=xᵀAx`, klassifisér formen og reduser til standardform uten kryssledd.»

### H. Ortogonalitet: projeksjon, ortogonalkomplement, ortogonal dekomposisjon
- **Krav:** Ortogonal projeksjon av `y` på et underrom `W = Span{u₁,…}`: bruk **ortogonal** basis og `proj_W y = Σ (⟨y,uᵢ⟩/⟨uᵢ,uᵢ⟩) uᵢ` (Gram-Schmidt først om basisen ikke er ortogonal). **Ortogonal dekomposisjon** `y = ŷ + z` med `ŷ = proj_W y ∈ W`, `z ⟂ W`. **Ortogonalkomplement** `W⊥`: løs `Aᵀx = 0` der `A`s søyler spenner `W`. Kjerne til ortogonal projeksjon er `W⊥`.
- **Frekvens:** ~75 %.
- **Omskrevet eksempel:** «Regn ut `y = ŷ + r` der `ŷ = proj_W(v)` og `r ⟂ W`; finn en basis for `W⊥`.»

### I. Gram-Schmidt og ortonormal basis
- **Krav:** Standard Gram-Schmidt: `v₁ = x₁`; `vₖ = xₖ − Σ_{j<k} (⟨xₖ,vⱼ⟩/⟨vⱼ,vⱼ⟩) vⱼ`; normalisér til slutt for ortonormal basis. Gjelder også med **vektet indreprodukt** `⟨x,y⟩ = xᵀAy` (samme algoritme, nytt indreprodukt) og i **polynomrom** (`⟨p,q⟩ = Σ p(tᵢ)q(tᵢ)` eller integral).
- **Frekvens:** ~65 %.

### J. Minste kvadrater og datatilpasning
- **Krav:** Sett opp designmatrisen `A` og observasjonsvektoren `b`; **normallikningene** `AᵀAx̂ = Aᵀb`; løs for parametrene (`a, b` i `y = a + bx`, eller `a, b, c` i modeller med flere ledd, f.eks. `y = a + b sin(π t/2) + c cos(π t/2)`). Begrunn eksistens/entydighet av minste kvadraters løsning via lineær uavhengighet av søylene (kolonnene i `A`). **Bruk modellen** til en prediksjon utenfor datasettet, eller løs for `x*` som gir ønsket `y`.
- **Frekvens:** ~65 % (fast fra 2015).
- **Omskrevet eksempel:** «Finn linjen `y = a + bx` som best tilpasser de fire punktene, og bruk den til å estimere `y(5)`.»

### K. Lineære avbildninger: standardmatrise, injektiv/surjektiv, komposisjon, geometri
- **Krav:** **Standardmatrise** `[T] = [T(e₁) … T(eₙ)]`. **Én-til-én** ⇔ søylene lineært uavhengige ⇔ `Nul[T]={0}`; **på** ⇔ søylene spenner kodomenet ⇔ pivot i hver rad. **Komposisjon** `S∘T` ↔ matriseprodukt `[S][T]`. **Geometriske avbildninger**: rotasjonsmatrise `[[cosθ,−sinθ],[sinθ,cosθ]]`, refleksjon over linje, ortogonal projeksjon på plan/linje (finn kjerne og bilde). Matrise for `T` relativt til en basis `[T]_B`.
- **Frekvens:** ~85 %.
- **Omskrevet eksempel:** «Oppgi standardmatrisen til `T`, avgjør om den er på og/eller én-til-én, og finn `[T]_B`.»

### L. Matriseinvers
- **Krav:** Invers ved radreduksjon `[A|I] → [I|A⁻¹]`, ved `A⁻¹ = (1/det A)·adj A` (2×2/3×3), eller løsning av systemer via `A⁻¹`. **Cramers regel** `xᵢ = det Aᵢ / det A` (også som verktøy i bevis: heltallige data + `det A = 1` ⇒ heltallig løsning). Inverterbarhetsteoremet (ekvivalente betingelser: `det ≠ 0`, radekvivalent med `I`, kolonner er basis, `Nul = {0}`, alle egenverdier `≠ 0`).
- **Frekvens:** ~55 %.

### M. Teori- og bevisoppgaver (ofte egen, tidvis frivillig, oppgave)
- **Krav:** Korte, navngitte bevis. Dokumenterte varianter i arkivet:
  - **Cauchy-Schwarz / trekantulikheten** `‖a+b‖ ≤ ‖a‖+‖b‖` (2013).
  - **Cramers regel** for heltallsløsning når `det C = 1` og data er heltall (2013).
  - **Cayley-Hamilton** for diagonaliserbare matriser; `q(A)=Xq(Λ)X⁻¹`; potensformler `A²ᵏ=(−1)ᵏI` (2015).
  - **Jordan-form / generalisert egenvektor** når geometrisk multiplisitet < algebraisk (2016).
  - **Companion-matrise**: karakteristisk polynom via induksjon; egenverdier = polynomrøtter (H2018).
  - **Skjev-symmetriske matriser** (`Sᵀ=−S`): `xᵀSx = 0`, spor `= 0`, `det = 0` (odde `n`); kryssprodukt som lineær avbildning (V2017).
  - **Refleksjonsmatriser** `Q_v = −I + 2vvᵀ/(vᵀv)`: symmetrisk og ortogonal; egenverdier ±1 (V2017).
  - **Gauss-Legendre ortogonale polynomer** via vektet indreprodukt i `P₂` (V2018).
  - **Rangulikheter** `rank(AB) ≤ rank(A)` og `≤ rank(B)` (2021).
  - **Fredholm-alternativet**: `Ax = b` løsbar ⇔ `b ⟂` alle løsninger av `Aᵀx = 0` (2021).
- **Frekvens:** ~75 % (som egen oppgave).

### N. Indreproduktrom og polynomrom (den abstrakte overbygningen)
- **Krav:** Behandle `P_n` (polynomer av grad ≤ n) som vektorrom: koordinater i standardbasis `{1, t, t², …}`, lineær uavhengighet, dimensjon. Definér ikke-standard **indreprodukt** (vektet `⟨x,y⟩=xᵀAy` med symmetrisk positiv definit `A`, eller evalueringsbasert `⟨p,q⟩=Σp(tᵢ)q(tᵢ)`) og bruk hele ortogonalitetsapparatet (ortogonalitetssjekk, Gram-Schmidt, projeksjon) i det nye rommet.
- **Frekvens:** ~35 %.

---

## 4. Sensorens krav

Fasitene er håndskrevne, så det finnes **ingen skrevne «merknad»-avsnitt** som i MAT111-arkivet. Sensorkravene under er derfor utledet fra de stående oppgaveinstruksene, poengfordelingen og den etablerte Lay-metodikken.

### Faste metaregler
1. **Begrunn alle svar; vis nok mellomregning** til at fremgangsmåten er tydelig — ordrett instruks i alle skriftlige sett. Riktig sluttsvar uten føring gir ikke full uttelling. (Unntak: flervalgsdelen 2019–2021, der bare avkrysningen teller.)
2. **Merkede radoperasjoner:** radreduksjon skal føres med eksplisitte operasjoner (`II − 2I`, radbytter bokført), slik at hvert steg kan følges.
3. **Riktig basis-avlesning:** basis for `Col A` = **de opprinnelige** pivotsøylene, ikke de reduserte; basis for `Nul A` = de spesielle løsningene, én per fri variabel; koordinater oppgis i **riktig basis-rekkefølge**.
4. **Eksakte svar:** siden bare kalkulator er tillatt og tallene er pene, forventes eksakte verdier (heltall, brøk, `√2`, `π/3`), ikke desimaltilnærming.
5. **Definitheter og teoremer navngis:** spektralteoremet (symmetrisk ⇒ ortogonalt diagonaliserbar), inverterbarhetsteoremet, dimensjonsteoremet (`rang + nullitet`), ekstremal-/multiplisitetsbetingelsen for diagonaliserbarhet. Fasiten forventer at studenten peker på teoremet som bærer argumentet.
6. **Delpunktgjenbruk er designet inn:** samme matrise/underrom går igjen gjennom en oppgave (koeffisientmatrisen fra oppgave 1 gjenbrukes i `Nul/Col/det`). Å gjenkjenne koblingen sparer tid.
7. **Ortogonalitet krever ortogonal basis før projeksjon:** projeksjonsformelen gjelder bare for **ortogonale** basisvektorer; Gram-Schmidt må kjøres først hvis basisen ikke er ortogonal — en klassisk kilde til feil.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på mekanikken: radreduksjon til RREF, avlesning av `Nul/Col`-basis, `det(A−λI)=0` for små matriser, standard minste kvadrater med normallikningene, oppsett av standardmatrise.
- **Midtsjiktet** behersker i tillegg: full parameteranalyse av eksistens/entydighet, korrekt diagonalisering `A=PDP⁻¹` med riktig `P`/`D`-samsvar, basisskifte `P_{C←B}` med riktig retning, Gram-Schmidt + projeksjon, klassifisering av kvadratisk form via egenverditegn.
- **Toppsjiktet** kjennetegnes av: (i) **ortogonal diagonalisering** av symmetriske matriser med multiplisitet (Gram-Schmidt innen egenrom); (ii) korrekt håndtering av **ikke-diagonaliserbare** matriser (geometrisk < algebraisk multiplisitet, Jordan-form); (iii) **bevisoppgaven** ført med navngitte teoremer og forutsetningssjekk; (iv) apparatet anvendt i **abstrakte indreproduktrom / polynomrom**; (v) å se og bruke **delpunkt-koblingene** i en oppgave.

---

## 5. Typiske feil

Utledet fra oppgavedesignet og de tilbakevendende fallgruvene i Lay-tradisjonen.

1. **Feil `Col A`-basis:** studenten oppgir de **reduserte** pivotsøylene i stedet for de opprinnelige. Basis for kolonnerommet skal hentes fra `A`, ikke fra RREF.
2. **Projeksjon uten ortogonal basis:** projeksjonsformelen brukes på en ikke-ortogonal basis uten å kjøre Gram-Schmidt først → feil `ŷ`.
3. **`P` og `D` i feil rekkefølge:** egenvektorene i `P` og egenverdiene i `D` matcher ikke søyle for søyle → `A ≠ PDP⁻¹`.
4. **Diagonaliserbarhet forvekslet med inverterbarhet:** en matrise kan være diagonaliserbar uten å være inverterbar (egenverdi 0) og omvendt; det avgjørende er om summen av geometriske multiplisiteter er `n`.
5. **Kvadratisk form med feil symmetrisering:** kryssleddskoeffisienten legges hel inn i `aᵢⱼ` i stedet for å deles på 2, så `A` blir feil (og ikke symmetrisk).
6. **Feil retning på basisskiftematrisen:** `P_{C←B}` forveksles med `P_{B←C}` (invers); søylene fylles med feil koordinatsett.
7. **Parameteranalyse ufullstendig:** ett av de tre tilfellene (ingen / uendelig / én løsning) glemmes, eller grensetilfellet der en parameter gjør en pivot til 0 overses.
8. **Normallikninger satt opp feil:** `AᵀA` eller `Aᵀb` regnes galt, eller designmatrisen mangler konstantkolonnen (`1`-kolonnen for konstantleddet `a`).
9. **Egenvektor ikke normalisert** der ortonormal basis / ortogonal diagonalisering kreves; `Q` blir da ikke ortogonal.
10. **Determinant-regnereglene brukt galt:** glemmer at `det(kA)=kⁿ det A` (ikke `k·det A`), eller at `det(Aᵀ)=det A`.
11. **Desimaltilnærming** der eksakt verdi forventes.
12. **Ubegrunnet flervalgs-tenkning i skriftlig format:** å hoppe rett til svar uten føring — koster poeng i det skriftlige regimet selv om det gikk greit i 2019–2021-flervalgene.

---

## 6. Teorem- og notasjonsapparat

### Ingen utdelt formelsamling
MAT121 er **ikke** åpen bok og har **ikke** noe utdelt formelark (kun kalkulator). Alt apparatet under må sitte utenat og kunne anvendes.

### Må beherskes aktivt (kunne anvende og navngi)
- **Likningssystemer:** Gauss–Jordan (trappeform / redusert trappeform); pivot-analyse av eksistens/entydighet; generell løsning på parameterform.
- **Matrisealgebra:** produkt, transponert, invers; `[A|I]→[I|A⁻¹]`; **inverterbarhetsteoremet** (ekvivalente betingelser).
- **Fundamentale underrom:** `Nul A`, `Col A`, `Row A`; rang; **dimensjonsteoremet** `rang A + dim Nul A = antall søyler`; sammenheng rang/pivoter.
- **Determinant:** kofaktorutvikling; radreduksjon; `det(AB)=det A det B`, `det(Aᵀ)=det A`, `det(A⁻¹)=1/det A`, `det(kA)=kⁿ det A`; **Cramers regel**; geometrisk tolkning (areal/volum).
- **Vektorrom:** underrom, span, lineær (u)avhengighet, basis, dimensjon, koordinater `[x]_B`; **basisskifte** `[x]_C = P_{C←B}[x]_B`, `P_{B←C}=(P_{C←B})⁻¹`.
- **Lineære avbildninger:** standardmatrise; kjerne/bilde; **én-til-én ⇔ `Nul={0}`**, **på ⇔ pivot i hver rad**; komposisjon = matriseprodukt; matrise relativt til basis `[T]_B`; rotasjon/refleksjon/projeksjon.
- **Egenverdier:** karakteristisk polynom `det(A−λI)=0`; egenrom `(A−λI)v=0`; algebraisk vs. geometrisk multiplisitet; **diagonalisering** `A=PDP⁻¹`, `Aⁿ=PDⁿP⁻¹`; similære matriser.
- **Ortogonalitet:** indreprodukt, norm, ortogonalitet; **ortogonalkomplement** `W⊥` via `Aᵀx=0`; **ortogonal projeksjon** og dekomposisjonsteoremet `y=ŷ+z`; **Gram-Schmidt**; ortogonale/ortonormale matriser (`QᵀQ=I`).
- **Symmetriske matriser:** **spektralteoremet** (reelle egenverdier, ortogonal diagonalisering `A=QDQᵀ`); spektral dekomposisjon `A=Σλᵢuᵢuᵢᵀ`.
- **Kvadratiske former:** `Q(x)=xᵀAx`; hovedaksesetningen (`x=Qy` fjerner kryssledd); **klassifisering** av definitthet via egenverditegn; kjeglesnitt.
- **Minste kvadrater:** **normallikningene** `AᵀAx̂=Aᵀb`; eksistens/entydighet via uavhengige søyler; modelltilpasning og prediksjon.
- **Indreproduktrom:** generalisering av alt over til `P_n` og vektede indreprodukt.

### Bevis som kreves aktivt
Bevisoppgaven forekommer i ~75 % av settene (ofte frivillig / vektet 20 %). Studenten forventes å kunne gjennomføre korte bevis av typen: rangulikheter, Fredholm-alternativet, Cayley-Hamilton (diagonaliserbart tilfelle), Jordan-form-eksistens, egenskaper ved skjev-symmetriske og refleksjonsmatriser, Cauchy-Schwarz/trekantulikheten, Cramers regel, og konstruksjon av ortogonale polynomer (Gauss-Legendre). Boken bør ha et dedikert teori-/beviskapittel som driller disse med navngitte teoremer og forutsetningssjekk.

### Notasjonskonvensjoner boken bør speile (Lay)
`Nul A`, `Col A`, `Row A`; `rank A`; `[x]_B` (koordinatvektor); `P_{C←B}` (basisskiftematrise); `Span{v₁,…}`; `proj_W y`; `W⊥`; `A=PDP⁻¹` / `A=QDQᵀ`; `Q(x)=xᵀAx`; normallikninger `AᵀAx̂=Aᵀb`; egenverdibetingelse `det(A−λI)=0`; merkede radoperasjoner over `∼`; eksakte svar.

---

## 7. Prognose og prioritering

> Fordi gjeldende emnebeskrivelse (2026) angir 5-timers **skriftlig skoleeksamen** med kalkulator, vektes det **strukturerte, fullt begrunnede formatet 2006–2018** tyngst. Flervalgssettene 2019–2021 brukes til ekstra hurtigdrill og til å fange konseptuelle spørsmål. Fordi MAT121 er et komplett innføringsemne der hvert sett dekker nesten hele pensum, er prioriteringen mindre et spørsmål om «hvilke temaer» og mer om **beherskelsesdybde**.

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~100 % frekvens)
1. **Likningssystemer + fundamentale underrom** (Gauss/RREF → generell løsning → `Nul/Col/Row`, rang, dimensjon, parameteranalyse). Den faste oppgave 1-kjeden.
2. **Egenverdier, egenvektorer og diagonalisering** `A=PDP⁻¹` (inkl. multiplisitet, ikke-diagonaliserbarhet, similære matriser).
3. **Determinant** — beregning **og** regneregler (abstrakt og geometrisk).
4. **Basis, koordinater og basisskifte** `P_{C←B}` med riktig retning.
5. **Lineære avbildninger:** standardmatrise, én-til-én/på, komposisjon, geometriske avbildninger.

### Nivå 2 — må kunne (bredde + karakterskiller, ~65–75 %)
6. **Symmetriske matriser + ortogonal diagonalisering + spektralteorem.**
7. **Kvadratiske former:** `Q=xᵀAx`, klassifisering av definitthet, prinsipalakser/standardform (og kjeglesnitt-varianten).
8. **Ortogonalitet:** projeksjon, ortogonalkomplement, ortogonal dekomposisjon, Gram-Schmidt/ortonormal basis.
9. **Minste kvadrater:** normallikninger + datatilpasning + prediksjon.
10. **Matriseinvers** (`[A|I]`, adjungert, Cramer) og inverterbarhetsteoremet.

### Nivå 3 — bør dekkes (lavere frekvens / karakterskiller på toppen)
11. **Teori-/beviskapittel:** rangulikheter, Fredholm-alternativet, Cayley-Hamilton, Jordan-form, skjev-symmetriske/refleksjonsmatriser, Cauchy-Schwarz, Cramers regel, Gauss-Legendre.
12. **Indreproduktrom og polynomrom `P_n`:** vektede indreprodukt, Gram-Schmidt på polynomer — den abstrakte overbygningen.
13. **Matrisepotens/grense `Aⁿ`** (Markov-lignende, Cayley-Hamilton-potensformler).
14. **Flervalgs-hurtigdrill** (2019–2021-repertoaret): definitthet på øyemål, dimensjonsbokføring fra parameterløsning, `det`-egenskaper, rotasjons-/refleksjonsavbildninger, spektral dekomposisjon, adjungert.

### Konkret prognose for neste ordinære skriftlige eksamen
Basert på den strukturerte malen 2006–2018 (mest sannsynlig scenario ved retur til skoleeksamen): **5 timer, kalkulator, ~5–6 hovedoppgaver med begrunnede deloppgaver + evt. en frivillig/vektet bevisoppgave**:
- **Oppgave 1:** lineært system med parameter (eksistens/entydighet) + `Nul A`, `Col A`, rang, generell løsning.
- **Oppgave 2:** basis/koordinater/basisskifte `P_{C←B}` (evt. med determinant og transformasjonsmatrise `[T]_B`).
- **Oppgave 3:** egenverdier/egenvektorer + diagonalisering; for symmetrisk `A` også ortogonal diagonalisering + kvadratisk form (klassifisering + standardform).
- **Oppgave 4:** minste kvadrater med data (normallikninger + prediksjon), eller ortogonal projeksjon/dekomposisjon + Gram-Schmidt.
- **Oppgave 5–6:** lineær avbildning (standardmatrise, injektiv/surjektiv, geometrisk) og/eller ortogonalkomplement.
- **Bevisoppgave (frivillig/vektet):** ett av temaene i §3M — rangulikhet, Fredholm, Cayley-Hamilton, Jordan-form, refleksjons-/skjev-symmetriske matriser, eller ortogonale polynomer.

**Usikkerhetsmoment:** Formatet har svingt kraftig (papir → Inspera → flervalg → tilbake til skoleeksamen). Boken bør trene **begge produksjonsmåter**: full skriftlig føring (primær) og rask flervalgs-gjenkjenning (sekundær). Verifiser mot første sett etter formatretur (eksamen planlagt 22.09.2026 iflg. emnesiden), og sjekk hvilken lærebokutgave (Lay) som er gjeldende pensum.

### Plassering i emnelandskapet
| | MAT121 (UiB) | MAT1110 lin.alg.-del (UiO) |
|---|---|---|
| Omfang | **Komplett** lineær algebra (Lay), eget emne | Lineær algebra som del av kalkulusemne |
| Hjelpemiddel | **Kun kalkulator** (ikke åpen bok) | Formelsamling + kalkulator |
| Tyngdepunkt | Gauss, underrom, egenverdier, ortogonalitet, minste kvadrater, kvadratiske former, bevis | Radreduksjon/basis/egenverdier som ett av flere tema |
| Forkunnskap | MAT111/MAT101 | MAT1100 |

MAT121 er UiBs **dedikerte lineær-algebra-emne** og går vesentlig dypere i abstrakt vektorromsteori (indreproduktrom, polynomrom, spektralteorem, Jordan-form) enn lineær-algebra-delen av et kalkulusemne. Boken bør forutsette MAT111-verktøykassen (regning, komplekse tall) og bygge et komplett, selvstendig lineær-algebra-løp på Lays struktur.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiB/MAT121/`.

**Oppgavesett lest grundig (tekstlag, siste ~6 år av det lesbare):** `MAT121_2018_v_eksamen.pdf`, `MAT121_2018_h_eksamen.pdf`, `MAT121_2017_v_eksamen.pdf`, `MAT121_2017_h_eksamen.pdf`, `MAT121_2016_v_eksamen.pdf` (+ `2016_h` via fasit), `MAT121_2015_v_eksamen.pdf`, `MAT121_2014_h_eksamen.pdf`, `MAT121_2013_v_eksamen.pdf`, `MAT121_2013_h_eksamen.pdf`.

**Nyeste sett OCR-lest via bilde (flervalgsregimet, bildebaserte PDF-er):** `MAT121_2021_v_eksamen.pdf` (fullstendig: 20 flervalgsoppgaver + 2 bevisoppgaver), `MAT121_2019_v_eksamen.pdf` (flervalg, engelsk). Kartlagt for format og temaregistrering.

**Eldre sett lest for temaregistrering (tekstlag):** `MAT121_2007_v_eksamen.pdf`, `MAT121_2009_v_eksamen.pdf`, `MAT121_2010_v_eksamen.pdf`, `MAT121_2012_v_eksamen.pdf`.

**Løsningsforslag:** Fasitene i arkivet (`*_fasit_eksamen.pdf`, 2004–2018) er i all hovedsak **skannede håndskrevne løsninger** — oppgavetekstene er lesbare, men de håndskrevne utregningene lar seg ikke tekstkonvertere. Metodekravene i §3–§6 er derfor utledet fra oppgavetekstene + den etablerte Lay-metodikken, ikke fra skrevne sensormerknader (som ikke finnes i dette arkivet, i motsetning til MAT111).

**Fagbeskrivelse:** omskrevet sammendrag av UiBs emnebeskrivelse, verifisert aktiv 2026 (scratchpad: `fagbeskrivelse-mat121-uib.md`). Eksamen planlagt 22.09.2026.

**Forbilde/mal:** `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (lineær-algebra-innhold, 8-delers mal) og `docs/hoyskole-boker/mat111-uib/EKSAMENSANALYSE.md` (UiB-format, søsteremne).

**Merknader om kildene:**
- **Format-forbehold:** Arkivet spenner fire formatregimer (papir 2003–2015, Inspera-strukturert 2016–2018, flervalg 2019–2021, retur til skoleeksamen 2026). Temaene er stabile på tvers, men poeng-/oppgavestrukturen er det ikke — kalibrer boken mot det skriftlige formatet og reverifiser mot første sett etter 2026-reformen.
- **Bildebaserte PDF-er:** oppgavesettene 2019 (v, h, v2), 2020 (h, v) og 2021 (v), samt mange enkeltstående oppgavefiler i eldre år, mangler tekstlag; de nyeste er lest via bilde-OCR, resten via de tekstbærende fasit-/søsterfilene.
- **Lærebok:** Notasjonen (`Nul A`, `Col A`, `[x]_B`, `P_{C←B}`) identifiserer David C. Lay, *Linear Algebra and Its Applications*, som pensumbok — boken bør speile Lays begrepsapparat og metodeføring.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.

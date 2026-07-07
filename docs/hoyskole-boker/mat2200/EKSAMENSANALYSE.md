# Eksamensanalyse: MAT2200 Grupper, ringer og kropper (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok i abstrakt algebra. Bygger på UiOs eksamensarkiv for MAT2200 (deleksamener V2004–V2005 + ordinære eksamener V2004–V2023), til sammen ~43 filer: oppgavesett (norsk bokmål/nynorsk + engelsk parallellversjoner) og offisielle løsningsforslag/sensorveiledninger. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teoremnavn og standardnotasjon (`Z_n`, `S_n`, `A_n`, `G(K/Q)`, `[K:Q]`, `⟨f⟩`) er fagfelles og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det. Søsteranalysen for det innledende algebraemnet ligger ikke i arkivet; nærmeste naboer er de rene matteanalysene (`../mat1110/`, `../mat121-uib/`) som brukes som malforbilde, ikke som faglig referanse.

> **Hovedfunn (les dette først):** MAT2200 er et **bevistungt, komplett innføringsemne i abstrakt algebra** — gruppeteori, ringteori og kroppsteori helt fram til Galois-teori — bygget tett på **Fraleigh, *A First Course in Abstract Algebra*** (fasitene siterer Fraleigh eksplisitt: «Example 50.9 in Fraleigh», og hele begreps- og notasjonsapparatet er Fraleighs). To trekk dominerer og styrer hele bokdesignet:
> 1. **Formatet er ekstremt stabilt.** 4 timer, **ingen hjelpemidler** (unntak: korona-hjemmeeksamen V2020/V2022 med «all aids»), karakter A–F, undervisning og eksamenstekst på **engelsk**. Hvert sett har **4 oppgaver med (om lag) lik vekt** (noen år 5), hver delt i deloppgaver a, b, c, d. Oppgavene fordeler seg nesten alltid over **hele pensumbredden**: gruppeteori → permutasjons-/ringteori → ringer/kropper/endelige kropper → kroppsutvidelser/Galois-teori. Ett sett treffer altså praktisk talt hele pensum samtidig, så de fleste kjernetemaene har gjenganger-score **70–100 %**.
> 2. **Alt skal bevises.** Anslagsvis **85–90 % av poengene** krever et begrunnet argument, ikke bare et tall. Fasiten fører et kort, presist bevis for hvert delsvar, ofte med en «Alternatively:»-variant som viser nabometoden. Et riktig sluttsvar uten begrunnelse gir nesten ingen uttelling. Dette er den avgjørende forskjellen fra kalkulusemnene: boken må lære studenten å **skrive bevis**, ikke bare å regne.
>
> Fordi hvert sett dekker hele bredden, er prioriteringen mindre «hvilke temaer» og mer **hvilke bevisteknikker og standardargumenter** som må sitte automatisk. Fire argumentmaskiner bærer eksamen: (i) **strukturteoremet for endelig genererte abelske grupper**, (ii) **Sylow-teoremene + telleargumenter**, (iii) **kvotient-kriteriet for prim/maksimal-idealer og irredusibilitet → kropp**, og (iv) **tårnformelen + Galois-korrespondansen** for utvidelsesgrader og Galois-grupper.

---

## 1. Eksamensform og utvikling

MAT2200 (10 studiepoeng, går hver vår, undervisningsspråk engelsk) vurderes med **én avsluttende skriftlig skoleeksamen på 4 timer**, karakterskala A–F. Normalt er **ingen hjelpemidler** tillatt («Permitted aids: none» i V2016, V2019 m.fl.) — apparatet må sitte utenat. To obligatoriske innleveringer må være godkjent for å gå opp. Eksamensteksten (og fasiten) er på engelsk; besvarelsen kan skrives på engelsk eller norsk.

Emnet har en lang, uvanlig stabil historie. Arkivet spenner V2004–V2023, med en **midtsemesterprøve (deleksamen)** i 2004–2005 som senere forsvant. Oppgaveprofil, struktur og vanskegrad er nær identiske gjennom hele perioden; det som endrer seg er marginalt (antall oppgaver 4 vs. 5, eksplisitte poeng eller ikke, hjelpemiddelregime i koronaårene).

### Formathistorikk

| Periode | Format | Struktur | Kommentar |
|---|---|---|---|
| 2004–2005 | Papir + **deleksamen** (midtveis) | Midtsemesterprøve i gruppeteori (permutasjonsvirkning, normalisator, matrisegrupper) | Deleksamen-ordningen forsvant etter 2005 |
| 2006–2019 | Papir, **4 timer**, ingen hjelpemidler | **4 oppgaver med lik vekt**, hver med deloppgaver a–d | Klassisk mal; «All problems have equal weight», «Justification must be provided» |
| V2020 | **Korona-hjemmeeksamen** | **5 oppgaver**, «all aids», levering skannet/LaTeX | Ekstra Galois-oppgave; ellers samme profil |
| V2021 | Digital (korona) | 4 oppgaver | Tilbake til 4-oppgavers mal |
| V2022 | **Korona-hjemmeeksamen** | 4 oppgaver, **eksplisitte poeng** (5/10/10 per deloppgave), Zoom-innsjekk, «all aids» | Sensor kunne kommentere underveis (dokumentert i fasit til P2.3) |
| V2023 (og senere) | Retur til skoleeksamen, 4 t, ingen hjelpemidler | 4 oppgaver | Antatt gjeldende normalform |

**Konstanter på tvers av alle årene:**
- **Fast instruks:** «Justification must be provided for all solutions.» Ubegrunnet svar gir nær null uttelling — **bevisføringen er det som måles**.
- **Bred dekning hvert år:** ett sett treffer typisk (1) grupper (aksiomer/klassifikasjon/Sylow), (2) permutasjons- eller ringteori, (3) ringer/idealer eller endelige kropper, (4) kroppsutvidelser/Galois-teori. Se §2.
- **«Pene» tall og små strukturer:** siden det ikke er hjelpemidler, arbeides det i `Z_n` for lite `n` (Z_2, Z_3, Z_5, Z_6, Z_{10}, Z_{12}), i `S_4`/`A_4`/`S_5`/`S_6`, og med grupper av liten, faktoriserbar orden (12, 18, 20, 27, 99, 105, 200, 1225, 2018). Splittkropper er `Q(√2,√5)`, `Q(∛2,i√3)`, `Q(2^{1/p},ζ_p)`.
- **«Alternatively:»-mønsteret:** fasiten viser gjennomgående to veier til samme svar (undergruppetest vs. fulle aksiomer; kjerne vs. direkte ideal; kvotient-kriterium vs. direkte prim/maksimal). Boken bør speile denne dobbeltheten.

### Regimeobservasjon: profil, ikke tema
Det viktigste strukturfunnet er at **både temaene og oppgavetypene er bemerkelsesverdig stabile**. En oppgave fra 2007 (splittkropp til `x⁵−2`, Galois-gruppe av orden 20, Sylow-argument for normal delgruppe) kunne stått på 2022-eksamen nær ordrett. Korona-hjemmeeksamenene (V2020/V2022) med «all aids» endret ikke oppgavetypene — de la bare til en femte oppgave og eksplisitte poeng. **Konsekvens for boken:** kalibrer mot den klassiske 4-oppgavers skoleeksamenen (2006–2019, 2023) som primærmål; hjelpemiddelfriheten betyr at definisjoner, teoremformuleringer og standardbevis må kunne reproduseres utenat.

### Emneansvarlig-rotasjon (forklarer stilnyanser, ikke temaskifte)
Fasitene bærer spor av flere forelesere over årene (bl.a. håndskrevne norske løsninger i eldre sett, LaTeX-satte engelske i nyere). Noen år lener seg mot **abstrakt gruppeteori** (kommutatorer, automorfigrupper, uendelige gruppe-moteksempler — V2006, V2011, V2013), andre mot **konkret regning i endelige kropper** (Frobenius, primitive polynomer, `F_{16}` — V2021, V2022). Kjernepensumet er identisk; boken bør dekke begge stilene.

---

## 2. Temafrekvens-tabell

Fordi hvert MAT2200-sett dekker nesten hele pensum, er de fleste kjernetemaene til stede nesten hvert år. Cellene angir grovt hvor stor andel av settene i perioden som testet temaet som egen (del)oppgave. Grunnlag: ~18 sett med sikkert temainventar (V2006–V2023), med tettest lesing av fasit V2016–V2023. Perioder: **2006–2012** (klassisk papir), **2013–2018**, **2019–2023**.

| Tema | 2006–12 | 2013–18 | 2019–23 | **Gjenganger-score** |
|---|---|---|---|---|
| **Sylow-teoremene** (antall Sylow-`p`, `≡1 mod p`, deler indeks → normal) | høy | høy | høy | **~85 %** |
| **Kroppsutvidelser + tårnformelen** `[K:k]=[K:E][E:k]`, grad = grad(minpol) | høy | høy | høy | **~95 %** |
| **Splittkropp + Galois-gruppe** (siste oppgave, `\|G\|=[K:Q]`, korrespondanse) | høy | høy | høy | **~90 %** |
| Klassifikasjon av endelige abelske grupper (orden `N` → produkt `Z_{p^e}`) | høy | høy | høy | **~80 %** |
| **Idealer: prim/maksimal via kvotient-kriterium** (`R/I` int.omr./kropp) | høy | høy | høy | **~75 %** |
| Vise gruppe/undergruppe (aksiomer eller undergruppetest); matrisegrupper | høy | middels | høy | **~70 %** |
| Permutasjons-/symmetriske grupper: syklenotasjon, paritet, `A_n`, orden = mfm | middels | høy | høy | **~65 %** |
| Endelige kropper `k[x]/⟨f⟩`: irredusibilitet → kropp, antall = `p^n`, Frobenius | middels | middels | høy | **~65 %** |
| Homomorfier / isomorfiteoremet / kjerne = ideal-snarvei | høy | middels | høy | **~65 %** |
| Direkte produkt: `H∩K={e}` + normale → `G≅H×K` (ofte via Sylow) | høy | middels | middels | **~60 %** |
| Polynomer: irredusibilitet, **Eisenstein**, faktorisering over `Z_p`/`Q` | høy | høy | middels | **~60 %** |
| Orden av element (mfm i produkt), kvotientgruppe opp til isomorfi | middels | middels | høy | **~50 %** |
| Nulldelere / integritetsområde (`Z_n`, `gcd`-kriterium) | lav | middels | middels | **~40 %** |
| Sykliske grupper: undergrupper (`d\|n`), generatorer, `φ(d)`-telling | middels | middels | middels | **~40 %** |
| Normale undergrupper / kvotientgruppe (direkte, ikke via ideal) | middels | middels | middels | **~40 %** |
| Gruppevirkning: bane/stabilisator, orbit–stabilisator, fikspunkt-argument | middels | middels | middels | **~40 %** |
| Cyklotomiske utvidelser `Q(ζ_n)`, `σ²`=kompleks konjugasjon, `ζ+ζ⁻¹` | lav | middels | middels | **~35 %** |
| Polynomdivisjon i `k[x]` → ideal = hele ringen | lav | lav | middels | **~25 %** |
| Nilpotente elementer danner ideal (binomialteorem) | lav | lav | lav | **~15 %** |
| Automorfigrupper `Aut(G)`, `Inn(G)`; kommutatorer `[x,y]` | middels | lav | lav | **~15 %** |
| Konstruksjon med passer og linjal (pensum, men sjelden i oppgavesett) | lav | lav | lav | **~5 %** |

**Viktigste funn:**

1. **Galois-oppgaven er nesten garantert siste oppgave.** I praktisk talt hvert sett er den fjerde (eller femte) oppgaven en full Galois-analyse: finn splittkroppen til en konkret `f(x)`, regn `[K:Q]` via tårnformelen, bestem Galois-gruppen via `|G(K/Q)| = [K:Q]` og korrespondansen, og identifisér gruppen (`S_3`, `S_5`, `D_4`, Klein-firergruppen `V`, syklisk, «`ax+b`-gruppen»). Dette er den mest forutsigbare oppgaven på hele eksamenen — og den vanskeligste å improvisere. Boken må drille den til automatikk.

2. **Sylow + telleargument er den mest gjennomgripende gruppeteknikken.** Fra V2007 til V2022 dukker det samme argumentet opp: faktoriser `|G|`, sett opp `N_p ≡ 1 (mod p)` og `N_p | indeks`, ekskludér mulighetene, konkludér at Sylow-`p`-undergruppen er entydig → normal → (ofte) `G` abelsk/syklisk. Kombineres fast med **coprime-produkt-argumentet** (`H∩K={e}`, begge normale, coprime orden → `G≅H×K`). Ordener som er testet: 21, 63, 99, 105, 200, 999, 1225, 2018, `p²(p+2)`, `5·7·17`.

3. **Kvotient-kriteriet er ringteoriens ryggrad.** Fasiten foretrekker gjennomgående: `I` prim ⇔ `R/I` integritetsområde; `I` maksimal ⇔ `R/I` kropp; og for polynomer `k[x]/⟨f⟩` kropp ⇔ `f` irredusibel ⇔ (grad ≤ 3) ingen nullpunkt i `k`. Idealer vises ofte elegant som **kjerne til en ringhomomorfi** (`I = ker φ`), som samtidig gir `R/I ≅ φ[R]` gratis. Dette ene mønsteret dekker halvparten av alle ring-deloppgavene.

4. **Strukturteoremet for endelige abelske grupper er ren rutine — men må være feilfri.** «List alle abelske grupper av orden `N` opp til isomorfi» kommer i ~80 % av settene (orden 8, 12, 18, 20, 27, 63, 81, 99, 999). Metoden er mekanisk (faktoriser i primpotenser på alle måter), men fasiten krever at man **nevner entydighet opp til omrokkering** og ofte kobler til orden-av-element-argument for å identifisere en kvotientgruppe.

5. **Endelige kropper har fått økende vekt.** Nyere sett (V2019–V2023) går dypere i `F_{p^n}`: Frobenius-automorfien `σ(a)=aᵖ` med «freshman's dream» `(a+b)ᵖ=aᵖ+bᵖ`, primitive polynomer, entydighet av `F_{p^n}` opp til isomorfi, og splitting av irredusible polynomer via `θ, θ², θ⁴, …`. Fermat (`αᵖ=α` for alle `α∈Z_p`) brukes til nullpunkter for `xᵖ−x`.

6. **Permutasjonsgrupper er et fast verktøysett, sjelden et helt tema alene.** Syklenotasjon, paritet (3-sykel = even, 4-sykel = odd), orden = mfm av syklelengder, konjugasjonsformelen `ρ(a₁…aₙ)ρ⁻¹=(ρ(a₁)…ρ(aₙ))`, og at `A_n` ikke er abelsk, dukker opp som deloppgaver og som byggeklosser i Galois-oppgaven (Galois-gruppa er en undergruppe av `S_n` på røttene).

---

## 3. Oppgavetype-katalog

Sjangrene som bærer MAT2200-eksamen, med fasitens forventede metode. I motsetning til de håndskrevne matte-fasitene er MAT2200-løsningene i stor grad **skrevne, fullstendige bevis** — metodekravene under er lest direkte ut av dem.

### A. «Vis at (mengden) er en gruppe / undergruppe»
- **Krav:** Sjekk gruppeaksiomene i fast rekkefølge (lukkethet → assosiativitet → nøytralt element → invers), kompakt på én linje hver. **Foretrukket snarvei:** gjenkjenn mengden som en undergruppe av en kjent gruppe (f.eks. `S={2ⁿ}` som den sykliske undergruppa av `(Q*,·)` generert av 2), da holder undergruppetesten. Matrisegrupper (`(a b; 0 c)` over `Z_3`, øvre triangulære, Heisenberg `H` over `Z_3`) vises ved lukkethet + eksplisitt invers; assosiativitet arves fra `M_n(R)`. For «ikke en gruppe»: pek på aksiomet som svikter (`Z_{≥0}` mangler additive inverser).
- **Frekvens:** ~70 %. Ofte oppgave 1a.
- **Omskrevet eksempel:** «Vis at mengden av matriser `(a b; 0 1)` med `a∈Z_6*, b∈Z_6` er en gruppe under matrisemultiplikasjon. Er den abelsk? Hva er ordenen?»

### B. Klassifiser endelige abelske grupper av gitt orden
- **Krav:** Strukturteoremet for endelig genererte abelske grupper: faktoriser ordenen i primpotenser på **alle** måter, skriv hver som produkt `Z_{p^e} × …`, list alle ikke-isomorfe muligheter, og **nevn eksplisitt entydighet opp til omrokkering**. Ofte fulgt av: finn ordenen til et element (= mfm av ordenene i faktorene), eller identifisér en kvotientgruppe ved å lete etter et element av gitt orden.
- **Frekvens:** ~80 %.
- **Omskrevet eksempel:** «List alle abelske grupper av orden 20 opp til isomorfi.» → `Z_4 × Z_5` og `Z_2 × Z_2 × Z_5`.

### C. Orden av element og kvotientgruppe opp til isomorfi
- **Krav:** Orden av `(a,b)` i et produkt = **minste felles multiplum** av ordenene. For kvotient `G/H`: regn `|G|/|H|`, konstater abelsk (kvotient av abelsk), og avgjør isomorfitypen ved å finne konkrete elementordener (finnes et element av orden 4 → ikke `Z_2×Z_2×Z_2`; ingen av orden 8 → ikke `Z_8` → altså `Z_2×Z_4`). Skriv gjerne ut kosettene / elementene i `H` når tellingen krever det.
- **Frekvens:** ~50 %.
- **Omskrevet eksempel:** «Finn ordenen til `(4,2)∈Z_{12}×Z_8`, og bestem `G/⟨(4,2)⟩` opp til isomorfi.» → orden 12; kvotienten `Z_2×Z_4`.

### D. Permutasjons- og symmetriske grupper
- **Krav:** Fast verktøykasse: skriv sammensetninger i **disjunkt syklenotasjon**; **orden = mfm av syklelengder**; paritet via antall transposisjoner (`(a₁…aₙ)=(a₁aₙ)…(a₁a₂)`, 3-sykel even, 4-sykel odd). For «`A_n` ikke abelsk»: regn `σ₂σ₃ ≠ σ₃σ₂` for to konkrete elementer. Konjugasjon: `ρ(a₁…aₙ)ρ⁻¹=(ρ(a₁)…ρ(aₙ))`. Transitiv virkning: konstruer `σ=σ_jσ_i⁻¹` som sender `i→j`.
- **Frekvens:** ~65 %.
- **Omskrevet eksempel:** «Skriv `στ` i disjunkt syklenotasjon og finn ordenen» / «Vis at en sykel av odde lengde `2k+1` har `σ²` også en `(2k+1)`-sykel.»

### E. Gruppevirkning, baner, stabilisatorer, fikspunkt
- **Krav:** **Orbit–stabilisator-formelen** `|O_x| = [G:G_x] = |G|/|G_x|` (f.eks. tell antall `n`-sykler = `(n−1)!` som én bane under konjugasjon). **`p`-gruppe-fikspunktargument:** `|G|=pⁿ`, `p∤|X|`, partisjonér `X` i baner av størrelse `p^k`; hvis alle `>1` ville `p||X|` — motsigelse → fikspunkt finnes. Normalisator `N(H)` som stabilisator under konjugasjon.
- **Frekvens:** ~40 %.
- **Omskrevet eksempel:** «`|G|=pⁿ` virker på `X` med `p∤|X|`. Vis at virkningen har et fikspunkt.»

### F. Sylow-teoremene og strukturkonklusjoner
- **Krav:** Faktoriser `|G|` i primpotenser; Sylow-`p`-undergruppens orden er den fulle `p`-potensen. **Kjernemønster:** `N_p ≡ 1 (mod p)` **og** `N_p |` indeks; ekskludér muligheter til `N_p=1` → Sylow-`p` entydig → **normal** (konjugat av Sylow er Sylow). Ofte kombinert med telleargument (summér elementer av hver orden → motsigelse hvis for mange), og med coprime-produkt (`H∩K={e}` + begge normale + coprime → `G≅H×K`, abelsk hvis begge er `p`- eller `p²`-grupper).
- **Frekvens:** ~85 % (som hoved- eller delargument).
- **Omskrevet eksempel:** «`|G|=1225=5²·7²`. Vis at Sylow-undergruppene er entydige og normale, og at `G` er abelsk.»

### G. Nulldelere, integritetsområder og enheter
- **Krav:** Nulldelerne i `Z_n` er nettopp `d` med `gcd(d,n)≠1`; vis gjerne både konkret produkt `a·b=0` og gcd-kriteriet. «Ikke integritetsområde» = pek på ett konkret par ikke-null-elementer med produkt 0 (`3·4=0` i `Z_{12}`). Enheter i `Z_n` = `gcd(d,n)=1`.
- **Frekvens:** ~40 %.
- **Omskrevet eksempel:** «Bestem nulldelerne i `Z_{10}`.» / «Vis at `Z_{12}` ikke er et integritetsområde.»

### H. Idealer, prim- og maksimalidealer
- **Krav:** Vis ideal enten **direkte** (additiv undergruppe + absorpsjon `rI⊆I`) **eller — fasitens snarvei — som kjerne til en ringhomomorfi** (`I=ker π`, som gir `R/I≅π[R]` gratis). For prim/maksimal foretrekkes **kvotient-kriteriet**: `I` prim ⇔ `R/I` integritetsområde; `I` maksimal ⇔ `R/I` kropp. (F.eks. `π:Z×Z→Z`, `R/I≅Z` int.omr. men ikke kropp → prim, ikke maksimal.) For «`nZ` ikke prim når `n` sammensatt»: skriv `n=ab`, `a,b∉nZ`. Maksimalidealer i `Z` er `pZ`; i `Z_{pⁿ}` er `⟨p⟩` det entydige maksimalidealet.
- **Frekvens:** ~75 %.
- **Omskrevet eksempel:** «Vis at `I={(a,0)}⊂Z×Z` er et primideal, men ikke maksimalt.»

### I. Polynomringer, irredusibilitet og faktorisering
- **Krav:** Irredusibilitet over `Q`/`Z`: **Eisenstein** (fast favoritt: `xⁿ−2`, `x⁵−2`, `x³±5`, `x⁵+4x³+2`), eller for grad ≤ 3: ingen nullpunkt ⇒ irredusibel (evaluér i alle elementer av `Z_p`). Grad 4 uten nullpunkt: prøv faktorisering `(x²+ax+b)(x²+cx+d)` og før til motsigelse. Over `Z_p`: kvadratisk irredusibel ⇔ ingen rot (sjekk diskriminant/kvadratrest). **Polynomdivisjon → ideal:** hvis `I⊆k[x]` inneholder `f` og `g`, produsér rest av lavere grad (euklidsk algoritme) til en enhet (konstant `≠0`) → `I=k[x]`.
- **Frekvens:** ~60 %.
- **Omskrevet eksempel:** «Vis at et ideal `I⊆Q[x]` som inneholder `x³−x²+x` og `x²−1` er hele `Q[x]`.»

### J. Endelige kropper og enkle kroppsutvidelser
- **Krav:** `k[x]/⟨f⟩` er en kropp ⇔ `f` irredusibel; antall elementer = `|k|^{deg f} = pⁿ`. **Grad = grad av minimalpolynom:** `[F:k]=deg(irr(α,k))`, med **basis `1, α, α², …, α^{n−1}`**. Regn potenser av `α` ved å redusere modulo `f(α)=0` (f.eks. `α³=−(2α+1)` i `Z_3`). **Frobenius** `σ(a)=aᵖ` med freshman's dream. Entydighet: `F_{pⁿ}` er entydig opp til isomorfi gitt størrelsen. Konjugerte elementer (samme minimalpolynom) → når to enkle utvidelser er isomorfe men en konkret `α↦β`-avbildning likevel ikke er en kroppsisomorfi (ulike minimalpolynom).
- **Frekvens:** ~65 %.
- **Omskrevet eksempel:** «Vis at `Z_3[x]/⟨x²+1⟩` er en kropp og finn antall elementer.» → 9. / «Skriv `σ_3(α)` og `σ_3²(α)` i basisen `{1,α,α²}`.»

### K. Kroppsutvidelser, tårnformelen og minimalpolynom
- **Krav:** **Tårnformelen `[K:k]=[K:E][E:k]`** brukes overalt — til å regne grader og til å konkludere likhet av kropper (hvis `[Q(α):Q]=p` prim og `β∉Q`, tvinger tårnet `Q(β)=Q(α)`). Finn `[Q(α):Q]=deg(irr(α,Q))`. Sett opp mellomtrinn `Q ⊂ Q(√2) ⊂ Q(√2,√5)`, vis at hvert trinn har grad 2 (via at neste generator ikke ligger i forrige kropp). Multiplikativ: `[Q(2^{1/p},ζ_p):Q]=p(p−1)`.
- **Frekvens:** ~95 % (som selvstendig krav eller inne i Galois-oppgaven).
- **Omskrevet eksempel:** «`α` er nullpunkt for et irredusibelt femtegradspolynom. Regn `[Q(α):Q]` og gi en basis. Vis at `Q(β)=Q(α)` for `β∈Q(α)\Q`.»

### L. Splittkropper og Galois-teori (nesten alltid siste oppgave)
- **Krav:** Fast oppskrift: (1) finn **splittkroppen** `K` til `f` (adjunger alle røtter, ofte `Q(∛a, ζ_n)` eller `Q(√a,√b)`); (2) regn `[K:Q]` via tårnformelen (faktoriser `f`, ta grad av hvert irredusibelt faktor); (3) bestem **Galois-gruppen** via `|G(K/Q)|=[K:Q]` og at `G` er isomorf med en undergruppe av `S_n` (permutasjoner av røttene) — gradtellingen avgjør hvilken (`S_3`, `S_5`, `D_4`, Klein `V`, syklisk `Z_4`, «`ax+b`-gruppen»). (4) **Mellomkropper via Galois-korrespondansen:** finn undergruppe `H` med riktig orden, sett `K'=E^H`, bruk `[E:K']=|H|`, `[K':Q]=|G|/|H|` (f.eks. `S_5` har undergruppe av orden 5 → mellomkropp av grad `120/5=24`). **Fikskropper:** for `Q(ζ_n)`, `σ²`=kompleks konjugasjon; identifisér fikskroppen via `ζ+ζ⁻¹=2cos(2π/n)` og gradargument. **Normalitet:** `G(K/L)` normal i `G(K/Q)` ⇔ `L` normal utvidelse av `Q`.
- **Frekvens:** ~90 %.
- **Omskrevet eksempel:** «`K` er splittkroppen til `x³−2` over `Q`. Finn `[K:Q]` og `G(K/Q)`.» → grad 6, `G≅S_3`.

### M. Homomorfier, isomorfiteoremet og direkte produkt
- **Krav:** Verifisér homomorfi-egenskapen direkte; **kjerne = normal undergruppe / ideal**; **isomorfiteoremet** `G/ker φ ≅ im φ`. Direkte produkt: `H,K` normale, `H∩K={e}` → avbildningen `f(x,y)=xy` er en injektiv (og ved ordenstelling surjektiv) isomorfi `H×K→G`. Automorfigrupper (`Aut(G)`, `Inn(G)` undergruppe), kommutatorer `[x,y]=xyx⁻¹y⁻¹`.
- **Frekvens:** ~65 % (som teknikk, ofte innbakt i F/H/L).
- **Omskrevet eksempel:** «`H, K` normale med `H∩K={e}`. Vis at det finnes en injektiv homomorfi `H×K→G`.»

### N. Spesialsjangre (lav frekvens, karakterskiller på toppen)
- **Nilpotente elementer** danner et ideal i en kommutativ ring (`(a+b)^{n+m}=0` via binomialteorem); nilpotent matrise → `det=0` (V2016).
- **Uendelige gruppe-moteksempler:** `G=∪gHg⁻¹` for endelig-indeks-undergruppe krever uendelig `G` (V2006).
- **Cyklisk-karakterisering:** en endelig gruppe der hver divisor `d` av `|G|` har høyst én undergruppe av orden `d`, er syklisk (`Σφ(d)=n`-telling, V2021).
- **Konstruksjon med passer og linjal:** i pensum, men nesten fraværende i oppgavesettene — lav prioritet.

---

## 4. Sensorens krav (bevisstringens)

MAT2200 er et **bevisemne**, og fasitene er skrevne bevis. Sensorkravene under er lest direkte ut av løsningsforslagene og de stående instruksene.

### Faste metaregler
1. **Alt skal begrunnes.** «Justification must be provided for all solutions» står på hvert sett. Et riktig tall uten argument gir nesten null. I V2022 (poengsatt) ble «most points given for the justification», ikke for svaret.
2. **Bevis føres kort og fullstendig.** Fasitens idealsvar er én til noen få linjer per delpunkt, men **hvert logisk steg står**: forutsetning navngis, teoremet som bærer argumentet navngis (Sylow, Lagrange, Eisenstein, strukturteoremet, isomorfiteoremet, hovedsetningen i Galois-teori), og konklusjonen trekkes eksplisitt.
3. **Oppgi alltid tallverdier eksplisitt:** gruppeorden, `[K:Q]`, antall elementer `pⁿ`, konkret basis `{1,α,…,α^{n−1}}`, Sylow-tallene `N_p`.
4. **Ekvivalenskjeder skal stå fullt ut:** «`k[x]/⟨f⟩` kropp ⇔ `⟨f⟩` maksimal ⇔ `f` irredusibel ⇔ (grad ≤ 3) ingen rot i `k`» — alle leddene forventes, ikke bare konklusjonen.
5. **Irredusibilitet må bevises, ikke antas.** For grad ≤ 3 må argumentet «ingen rot ⇒ irredusibel *fordi* enhver faktorisering ville gi en lineær faktor og dermed en rot» stå eksplisitt. For grad ≥ 4 kreves Eisenstein eller eksplisitt faktoriseringsforsøk.
6. **«Alternatively:»-bevissthet premieres.** Fasiten viser ofte to veier; en student som ser at et ideal er en kjerne (i stedet for å verifisere absorpsjon direkte), eller at en mengde er en syklisk undergruppe (i stedet for fulle aksiomer), signaliserer modenhet.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på mekanikken: aksiomsjekk, faktorisering + strukturteorem, orden = mfm, evaluering av `f` i alle `Z_p`-elementer, oppsett av tårnet, `|G|=[K:Q]`.
- **Midtsjiktet** behersker i tillegg: fullt Sylow-argument med eksklusjon av alle `N_p`-muligheter, kvotient-kriteriet for prim/maksimal, minimalpolynom + basis for en enkel utvidelse, korrekt splittkropp med grad via tårnformelen.
- **Toppsjiktet** kjennetegnes av: (i) **Galois-korrespondansen anvendt begge veier** (undergruppe ↔ mellomkropp, normalitet ↔ normal utvidelse); (ii) **fikskropp-bestemmelse** med gradargument (`Q(ζ+ζ⁻¹)`); (iii) coprime-produkt-dekomposisjon `G≅H×K` med full injektivitets-/surjektivitetsføring; (iv) konjugat-/Frobenius-argumenter i endelige kropper; (v) å se «Alternatively»-snarveiene (kjerne-ideal, syklisk undergruppe).

---

## 5. Typiske feil

Utledet fra fasitenes advarsler og de tilbakevendende fallgruvene i emnet.

1. **Hevde at en mengde er gruppe uten å sjekke inverser/lukkethet** — særlig for matrisegrupper og delmengder av `Z`. `Z_{≥0}` er den klassiske fella (mangler additive inverser).
2. **Regne orden i produktgruppe som produkt i stedet for mfm.** Orden av `(a,b)` = `mfm(|a|,|b|)`, ikke `|a|·|b|`.
3. **Glemme å begrunne irredusibilitet.** «Grad 3 uten rot ⇒ irredusibel» må sies med begrunnelse; å bare påstå det trekker.
4. **Blande sammen prim og maksimal.** `R/I` integritetsområde (prim) vs. kropp (maksimal). Klassisk: `I` i `Z×Z` er prim men ikke maksimal fordi `R/I≅Z` er int.omr. men ikke kropp.
5. **Påstå Galois-gruppa uten å regne graden først.** `|G(K/Q)|=[K:Q]` må etableres før man identifiserer gruppen; å gjette «`S_3`» uten gradregning gir ikke uttelling.
6. **Hoppe over tårnformelen** når man bestemmer utvidelsesgrader, eller anta `[Q(α,β):Q]=[Q(α):Q]·[Q(β):Q]` uten å sjekke at trinnet faktisk har full grad.
7. **Ufullstendig Sylow-eksklusjon.** Å finne `N_p≡1 (mod p)` men glemme delelighetsbetingelsen `N_p |` indeks (eller motsatt), eller ikke ekskludere alle mulighetene før man konkluderer «normal».
8. **Ikke nevne entydighet** i strukturteoremet, eller telle samme abelske gruppe to ganger (f.eks. glemme at `Z_4×Z_5≅Z_{20}` men `Z_2×Z_2×Z_5` er en annen).
9. **Freshman's dream misbrukt.** `(a+b)ᵖ=aᵖ+bᵖ` gjelder bare i karakteristikk `p` — feilaktig bruk i `Q` eller `Z`.
10. **Forveksle konjugerte elementer:** anta at en avbildning `α↦β` som fikserer grunnkroppen alltid er en kroppsisomorfi; den er det bare hvis `α` og `β` har samme minimalpolynom.
11. **Ubegrunnet homomorfi/isomorfi.** Konkludere `G≅H×K` uten å vise både at avbildningen er homomorfi, injektiv (`ker={e}` via `H∩K={e}`) og surjektiv (ordenstelling).
12. **Regne i feil ring/kropp:** glemme å redusere polynom-potenser modulo `f(α)=0`, eller ikke bruke at koeffisientene lever i `Z_p` (så `2+1=0` i `Z_3`).

---

## 6. Teorem- og definisjonsapparat

MAT2200 er **ikke** åpen bok (unntatt koronaårene). Alt apparatet under må sitte utenat og kunne **formuleres, bevises og anvendes**.

### Må beherskes aktivt — gruppeteori
- **Gruppeaksiomer**, undergruppetest, orden av element/gruppe; **Lagranges teorem** (`|H| divides |G|`, `[G:H]=|G|/|H|`).
- **Sykliske grupper:** undergrupper svarer bijektivt til divisorer `d|n`; `φ(d)` generatorer; kvotient av syklisk er syklisk.
- **Strukturteoremet for endelig genererte abelske grupper** (`G≅∏Z_{p^e}`, entydig opp til omrokkering).
- **Permutasjonsgrupper:** `S_n`, `A_n`, syklenotasjon, paritet/fortegn `ε`, orden = mfm av syklelengder, konjugasjonsformel; `A_n` ikke abelsk for `n≥3`.
- **Normale undergrupper, kvotientgrupper**, homomorfier, **isomorfiteoremet** `G/ker φ ≅ im φ`.
- **Gruppevirkning:** bane, stabilisator, **orbit–stabilisator** `|O_x|=[G:G_x]`, klasseligning, `p`-gruppe-fikspunkt; (Burnside i pensum).
- **Cauchys teorem** (`p | |G|` ⇒ element av orden `p`).
- **Sylow-teoremene I–III** (eksistens, konjugasjon, `N_p≡1 mod p` og `N_p|` indeks) — bærebjelke.
- **Direkte produkt:** `H,K` normale, `H∩K={e}`, `HK=G` ⇒ `G≅H×K`.

### Må beherskes aktivt — ringteori
- Ring, kommutativ ring med enhet, **integritetsområde**, kropp, enheter, **nulldelere** (`Z_n`: `gcd`-kriterium).
- **Idealer**, prinsipalideal `⟨a⟩`, kvotientring `R/I`; **kjerne til ringhomomorfi er ideal**; isomorfiteoremet for ringer.
- **Prim- og maksimalidealer** via kvotient-kriteriet: prim ⇔ `R/I` int.omr., maksimal ⇔ `R/I` kropp. Maksimalidealer i `Z` er `pZ`.
- **Polynomringer `k[x]`:** grad, divisjonsalgoritme/euklidsk algoritme, `k[x]` er PID, irredusibilitet, **Eisensteins kriterium**, entydig faktorisering.
- Nilpotente elementer (danner ideal).

### Må beherskes aktivt — kroppsteori og Galois
- **Kroppsutvidelser:** grad `[K:k]`, endelig/algebraisk utvidelse, **minimalpolynom `irr(α,k)`**, `[k(α):k]=deg(irr(α,k))`, basis `{1,α,…,α^{n−1}}`.
- **Tårnformelen** `[K:k]=[K:E][E:k]` — brukes overalt.
- **Endelige kropper:** `F_{pⁿ}` entydig opp til isomorfi; `k[x]/⟨f⟩` kropp ⇔ `f` irredusibel; **Frobenius** `σ(a)=aᵖ`, freshman's dream; **Fermat** `αᵖ=α`; primitive elementer/polynomer.
- **Splittkropp**, separabilitet, normal utvidelse; `Q` perfekt (alt separabelt).
- **Galois-teori:** Galois-gruppe `G(K/k)`, `|G(K/Q)|=[K:Q]` (Galois-utvidelse), **hovedsetningen / Galois-korrespondansen** (bijektiv, ordensvendende korrespondanse undergrupper ↔ mellomkropper; normale undergrupper ↔ normale utvidelser), fikskropp `E^H`.
- **Cyklotomiske utvidelser** `Q(ζ_n)`, `[Q(ζ_p):Q]=p−1`, `ζ+ζ⁻¹=2cos(2π/n)`.
- (Konstruksjon med passer og linjal — pensum, lav eksamensvekt.)

### Bevis og standardargumenter som kreves aktivt
Studenten må kunne føre, ikke bare gjengi: **Sylow-eksklusjonsargument** (→ normal Sylow), **coprime-produkt-dekomposisjon** (`G≅H×K`), **kvotient-kriteriet** for prim/maksimal, **irredusibilitet** (Eisenstein + grad ≤ 3-argument), **tårnformel-beregning** av `[K:Q]`, **splittkropp + Galois-gruppe-identifikasjon**, **fikskropp-bestemmelse** med gradargument, og **`p`-gruppe-fikspunkt** via klasseligning. Boken bør ha et dedikert «bevisverksted» som driller disse åtte maskinene med navngitte teoremer og forutsetningssjekk.

### Notasjonskonvensjoner boken bør speile (Fraleigh)
`Z_n`, `Z_n*`, `U(F)`; `S_n`, `A_n`, `D_n` (diedral); syklenotasjon `(a₁…aₙ)`; `⟨a⟩` (generert undergruppe/prinsipalideal); `H ⊴ G` (normal); `[G:H]` (indeks); `G/H`; `H×K`; `R/I`; `k[x]/⟨f⟩`; `irr(α,k)` (minimalpolynom); `[K:k]` (grad); `G(K/Q)` eller `Gal(K/Q)`; `E^H` (fikskropp); `ζ_n` (primitiv `n`-te enhetsrot); `F_{pⁿ}`; Frobenius `σ_p`. Eksakte svar, engelsk fagterminologi parallelt med norsk.

---

## 7. Prognose og prioritering

> Fordi formatet er stabilt (4 timer, ingen hjelpemidler, 4 oppgaver med lik vekt, engelsk, bevistungt), og hvert sett dekker hele bredden, handler prioriteringen om **beherskelsesdybde i de fire argumentmaskinene**, ikke om temavalg. Boken kalibreres mot den klassiske skoleeksamenen 2006–2019/2023.

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~80–95 % frekvens)
1. **Kroppsutvidelser + tårnformelen + minimalpolynom** — `[K:k]`, `irr(α,k)`, basis. Grunnlaget for halve eksamenen.
2. **Splittkropp + Galois-gruppe + korrespondanse** — den nesten garanterte siste oppgaven. Full oppskrift til automatikk.
3. **Sylow-teoremene + eksklusjonsargument + coprime-produkt** — den gjennomgripende gruppeteknikken.
4. **Strukturteoremet for endelige abelske grupper** — mekanisk, men må være feilfri og med entydighet.
5. **Idealer: prim/maksimal via kvotient-kriteriet + kjerne-snarvei** — ringteoriens ryggrad.

### Nivå 2 — må kunne (bredde + karakterskiller, ~50–70 %)
6. **Endelige kropper `k[x]/⟨f⟩`:** irredusibilitet → kropp, antall `pⁿ`, Frobenius, potensregning modulo `f`.
7. **Vise gruppe/undergruppe** (aksiomer + undergruppetest); matrisegrupper.
8. **Permutasjonsgrupper:** syklenotasjon, paritet, orden = mfm, `A_n` ikke abelsk, konjugasjon.
9. **Homomorfier / isomorfiteoremet / direkte produkt** (`G≅H×K`).
10. **Polynomirredusibilitet:** Eisenstein, grad ≤ 3-argument, faktorisering over `Z_p`.

### Nivå 3 — bør dekkes (lavere frekvens / topp-poeng)
11. **Gruppevirkning:** orbit–stabilisator, `p`-gruppe-fikspunkt, normalisator.
12. **Orden av element (mfm) + kvotientgruppe opp til isomorfi.**
13. **Nulldelere / integritetsområde** (`Z_n`, gcd-kriterium).
14. **Cyklotomiske utvidelser** `Q(ζ_n)`, fikskropp via `ζ+ζ⁻¹`.
15. **Sykliske grupper** (undergrupper, `φ(d)`-telling), **polynomdivisjon → ideal = hele ringen**.
16. **Spesialsjangre:** nilpotente elementer, automorfigrupper/kommutatorer, uendelige gruppe-moteksempler, cyklisk-karakterisering. **Konstruksjon med passer/linjal** (pensum, men lav eksamensvekt — dekk kort).

### Konkret prognose for neste ordinære eksamen
Basert på den svært stabile malen: **4 timer, ingen hjelpemidler, 4 oppgaver med lik vekt (deloppgaver a–d), engelsk**:
- **Oppgave 1 (gruppeteori):** «vis at (mengde) er en gruppe» + list abelske grupper av gitt orden + et element-orden-/kvotient- eller Sylow-spørsmål.
- **Oppgave 2 (permutasjons-/ringteori):** symmetrisk gruppe (syklenotasjon, paritet, `A_n`) **eller** ring (nulldelere, integritetsområde, ideal via kjerne).
- **Oppgave 3 (ringer/endelige kropper):** prim/maksimalideal via kvotient-kriteriet, **eller** `Z_p[x]/⟨f⟩` som endelig kropp (irredusibilitet, antall elementer, basis, Frobenius).
- **Oppgave 4 (Galois-teori):** splittkropp til en konkret `f(x)`, `[K:Q]` via tårnformelen, Galois-gruppe (`S_3`/`D_4`/Klein/syklisk/`S_5`), og en mellomkropp/fikskropp via korrespondansen.

**Usikkerhetsmoment:** Antall oppgaver kan bli 5 (som V2020), og et hjemmeeksamensregime kan gjeninnføres ved behov (som V2020/V2022, «all aids»). Boken bør uansett trene den **hjelpemiddelfrie, fullt beviste** produksjonsmåten som primærmål, siden det er normalformen. Reverifiser mot første sett etter analysedato og sjekk gjeldende Fraleigh-utgave som pensum.

### Plassering i emnelandskapet
MAT2200 er UiOs **dedikerte abstrakt-algebra-emne** på bachelornivå. Det bygger på et innledende «tall og gruppeteori»-emne (grunnleggende gruppeteori, modulær aritmetikk) og fører helt fram til Galois-teori — vesentlig dypere enn det algebrainnholdet man møter i lineær-algebra- eller diskret-matematikk-emner. Til forskjell fra kalkulus-/lineæralgebra-emnene (der metoderegning bærer eksamen) er MAT2200 **bevisdrevet**: boken må forutsette gruppeteori-basisen, men bygge et komplett, selvstendig algebraløp på Fraleighs struktur der **bevisføring er hovedferdigheten som trenes**.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MAT2200/` (`eksamen/` + `fasit/`).

**Løsningsforslag lest grundig (primærkilde til metode- og bevisstandard):** `MAT2200-V2023-fasit.pdf`, `V2022-fasit`, `V2021-fasit`, `V2020-fasit`, `V2019-fasit`, `V2018-fasit`, `V2016-fasit`, `V2015-fasit`, `V2014-fasit`, `V2013-fasit`, `V2012-fasit`, `V2011-fasit`, `V2010-fasit`, `V2008-fasit`, `V2007-fasit`, `V2006-fasit`, samt deleksamen-fasit `V2004`/`V2005`.

**Oppgavesett lest for temaregistrering (også de uten fasit):** `MAT2200-V2017-eng.pdf` og `V2009-eng.pdf` (ingen fasit i arkivet), samt de engelske/norske parallellversjonene V2004–V2021.

**Merknader om kildene:**
- **Fasitkvalitet:** I motsetning til de håndskrevne matte-fasitene er MAT2200-løsningene i stor grad **skrevne, fullstendige bevis** (LaTeX eller ren tekst i nyere år). Metode- og stringens-kravene i §3–§6 er derfor lest **direkte** ut av fasitene, ikke bare utledet.
- **Tekstlag:** Alle PDF-er utenom `V2011` (bildebasert oppgavesett, tomt tekstlag — dekket via V2011-fasit) og deleksamen-oppgavesettene 2004/2005 (bildebaserte, dekket via deres fasit) hadde brukbart tekstlag via `pdftotext -layout`.
- **Header-anomali:** Fasiten til V2023 bærer i toppen feilteksten «Final exam MAT2410, autumn 2022» — dette er en åpenbar mal-/kopifeil; innholdet og oppgavene er MAT2200 vår 2023 (verifisert mot oppgaveprofilen).
- **Språk:** Eksamen og fasit er på engelsk (undervisningsspråket). Denne analysen er på norsk bokmål; fagtermer er oversatt, men engelsk standardnotasjon beholdes der den er innarbeidet.
- **Lærebok:** Fasitenes eksplisitte referanser («Example 50.9 in Fraleigh», hele begrepsapparatet `irr(α,k)`, `[K:k]`, Sylow-nummerering) identifiserer **John B. Fraleigh, *A First Course in Abstract Algebra*** som pensumbok. Boken bør speile Fraleighs kapittelstruktur (grupper → ringer → kropper → Galois) og bevisstil.
- **Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse, verifisert aktiv 2026 (scratchpad: `fagbeskrivelse-mat2200.md`).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.
- **Forbilde/mal:** `docs/hoyskole-boker/mat121-uib/EKSAMENSANALYSE.md` (8-delers mal med bevisdel) og `docs/hoyskole-boker/econ1310/`-strukturen.

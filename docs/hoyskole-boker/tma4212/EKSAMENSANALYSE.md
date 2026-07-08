# Eksamensanalyse: TMA4212 Numerisk løsning av differensiallikninger med differansemetoder (NTNU)

> **Grunnlag for en eksamensrettet lærebok.** Bygger på arkivet `~/Desktop/Eksamner/NTNU/TMA4212/` (26 filer, 2013–2025). **13 distinkte eksamenssett** er kartlagt oppgave for oppgave: V2013, Aug2013 (kont), V2014, Aug2014 (kont), V2015, V2016, V2017, V2018, V2019, V2022, V2023, V2024 og V2025. **Offisielle løsningsforslag er lest grundig** for V2013, Aug2013, V2014, Aug2014, V2015, V2016, V2017, V2018 (i `eksamen.pdf`), V2022, V2023, V2024 og V2025 — dvs. tilnærmet alle sett har fasit. Kun V2019-fasiten (`e2019_sol.pdf`) er bildebasert og lot seg ikke tekst-utvinne; V2019-oppgaveteksten er derimot lest i sin helhet. De fem–seks siste settene (V2019, V2022, V2023, V2024, V2025) og alle fasitene er lest særlig nøye; eldre sett er skummet mot fasit. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, metode- og teoremnavn (von Neumann, Lax, CFL, Lax–Milgram, Céa osv.) er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **⚠️ STATUS — les dette først:** TMA4212 er **NEDLAGT.** NTNUs emneside oppgir at «det tilbys ikke lenger undervisning i emnet». Studiepoengreduksjonstabellen kobler emnet mot **TMA4216** (6 sp reduksjon fra høsten 2026), som er den sannsynlige etterfølgeren — men TMA4216 er nytt fra H2026 og har **ennå intet eget eksamensarkiv**. Denne analysen er derfor bygget på det eksisterende, avsluttede TMA4212-arkivet, og etterfølger-profilen kan avvike (se del 1 og del 7). Analysen er likevel solid som grunnlag: 13 sett over 12 år med nesten fullstendig fasit-dekning gir et robust, kvantitativt bilde av differansemetode-tradisjonen ved NTNU.

> **Hovedfunn (kjernen boka skal bæres av):** TMA4212 er langt mer et **teori- og bevisemne** enn et regne-emne. Fem søyler bærer så godt som hvert sett: **(1) elementmetoden / svak formulering** (Galerkin, Lax–Milgram, stivhetsmatrise, entydighet) — **den mest stabile enkeltsjangeren, i alle 13 sett**; **(2) von Neumann-stabilitetsanalyse** (sett inn `ξⁿe^{iβx}`, finn `|ξ|`); **(3) konsistens / lokal avkuttingsfeil via Taylor** (vis orden `O(h²+k)` osv.); **(4) konvergens** via Lax' ekvivalensteorem *eller* diskret maksimumsprinsipp *eller* Céas lemma; **(5) hyperbolsk transport — karakteristikk-metode + oppvindsskjema + CFL-betingelse.** I tillegg går tre faste bi-temaer igjen: **elliptisk Poisson/Laplace med 5-punktstjerne** (dominerende 2013–2015), **numerisk lineær algebra** (Jacobi-iterasjon / konjugerte gradienter — egen oppgave i mange sett), og **egenverdier av differansematrisen**. Oppgavene er **prosentvektet fra ~2022** (10–30 % per oppgave); eldre sett er merket med læringsutbytte-tagger (L1–L7) i stedet for prosent. **Delen av pensum som testes gjennom prosjekt/mappe (L3, L6, delvis L4/L5) — programmering og numerisk eksperimentering — ligger utenfor skriftlig eksamen**, så det skriftlige settet vekter teori-/bevislaget tyngre enn en typisk numerikk-eksamen.

---

## 1. Eksamensform og utvikling

### Vurderingsordning
Samlet karakter (bokstav A–F) settes som **skriftlig skoleeksamen (70 %) + mappe/prosjektvurdering (30 %)**. Skriftlig eksamen er 4 timer. Mappekomponenten er obligatorisk prosjektarbeid gjennom semesteret.

**Mappen bærer den beregningstunge delen av pensum.** Fra og med 2018 er de sju læringsutbyttene L1–L7 eksplisitt tagget per oppgave, og settene oppgir at **L3 og L6 (og delvis L4/L5) testes gjennom prosjektarbeidet, ikke på skriftlig eksamen.** L3/L6 er nettopp de praktiske ferdighetene — implementering i kode, kjøring av numeriske eksperimenter, ordens-/konvergensverifikasjon fra egne data. Konsekvensen for en eksamensrettet bok er avgjørende: **det skriftlige settet er dominert av teori, utledning og bevis** (konsistens, stabilitet, konvergens, elementmetode-teori), mens den «typiske numerikk-oppgaven» (skriv skjemaet, kjør noen skritt, mål orden) er skjøvet over i mappen. Boka må derfor ha en **egen mappedel/prosjektdel** ved siden av den skriftlige eksamenstreningen.

### Nedlagt status og etterfølger-usikkerhet (viktig forbehold)
Emnet er **avviklet**; ingen undervisning tilbys lenger. NTNU angir **TMA4216** som studiepoengoverlappende etterfølger (6 sp reduksjon fra H2026). TMA4216 har foreløpig **ikke noe eget eksamensarkiv**, så etterfølger-profilen kan ikke verifiseres empirisk. To scenarier bør holdes åpne:
- **Kontinuitet:** TMA4216 arver differansemetode-kjernen (stabilitet/konsistens/konvergens, elementmetode-innføring, elliptisk/parabolsk/hyperbolsk). Da overføres denne analysen nesten direkte.
- **Profil-skifte:** en 6 sp-etterfølger kan være smalere/bredere, kan flytte vekt mellom differansemetoder og elementmetoder, eller endre hjelpemiddel-/eksamensform. **Verifiser mot første reelle TMA4216-sett** før boka låses.

### Hjelpemidler (hjelpemiddelkode C — men se merknad)
Til forskjell fra de fleste NTNU-realfag har TMA4212 **ikke et eget utdelt formelark**. I stedet er hjelpemiddelkode **C** brukt med **rikelig skriftlig materiale tillatt**: godkjent enkel kalkulator, pluss (varierende per år) Strikwerda *Finite Difference Schemes and PDEs*, Süli & Mayers, det offisielle kursnotatet (~98 s., differanser av Brynjulf Owren) og et notat om elementmetoder (Charles Curry, ~28 s.), fotokopier om 2D-elementmetode, og Rottmann. **Gamle eksamensoppgaver med løsning er ikke tillatt.** 2016-settet var magrere (kun Rottmann). Siden lærebøkene i praksis er tilgjengelige på eksamen, tester settet **anvendelse, utledning og bevisføring — ikke pugging av formler**. Boka bør trene studenten på å *bruke* teoremapparatet (Lax, Lax–Milgram, von Neumann) sikkert, ikke pugge det.

### Oppgavestruktur og utvikling

| Periode | Trekk |
|---|---|
| **2013–2015** | 4–5 oppgaver, ingen prosentvekting. Bred sjangermiks med tydelig vekt på **5-punkts Poisson/Laplace** (egen oppgave hvert år) og **konjugerte gradienter** som lineærløser. To nesten identiske «dispersive» oppgaver `u_t + u_{xxx}=0` (V2013 + Aug2013). Fasitene siterer Strikwerda-kapitler. |
| **2016–2018** | 3–4 oppgaver, læringsutbytte-tagger (L1–L7) innføres 2018. **5-punkts-Poisson forsvinner** som ren differanse-oppgave; elliptisk PDE dukker i stedet opp som **elementmetode** (V2016: kvadratiske basisfunksjoner). **Numerisk lineær algebra skifter fra CG til Jacobi-iterasjon** — egen dedikert oppgave i 2016, 2017 og 2018. **Hyperbolsk transport (karakteristikk + oppvind + CFL)** blir fast innslag. |
| **2022–2025** | **Prosentvekting per oppgave innføres** (typisk 10–30 %). 4–5 oppgaver. Tyngdepunktet forskyves mot **teoritunge bevis**: **diskret maksimumsprinsipp** (V2024), **maks-norm-/L∞-stabilitet** (V2024, V2025), **Lax–Milgram-verifikasjon av kontinuitet/koersivitet** (V2025, V2024), **avkuttingsfeil + full feilskranke `C₁h+C₂k`** (V2023). Wendroff-skjema for transport (V2024), θ-vektet varmeskjema for von Neumann (V2018, V2025). Karakteristikk + CFL fortsatt fast. |

### Konstanter på tvers av alle år
- **Elementmetode/svak formulering i hvert eneste sett** (som regel Oppgave 1) — den mest forutsigbare sjangeren i hele arkivet.
- **Alle svar skal begrunnes** (fast instruks: *«All answers must be properly argued for»*). Dette er et bevis-/utledningsemne; bar fasit gir ikke uttelling.
- **Ingen flervalgsdel.** Prosjekt/mappe tar den praktiske programmeringen.
- Hvert sett dekker minst to av de tre PDE-klassene (parabolsk/elliptisk/hyperbolsk) pluss et randverdiproblem for ODE (via elementmetode) og ofte et lineær-algebra-innslag.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i epoken der temaet forekommer som minst én (del)oppgave. Basert på **13 velkarakteriserte sett** fordelt på tre epoker: **A** (2013–2015, 5 sett: V2013, Aug2013, V2014, Aug2014, V2015), **B** (2016–2018, 3 sett: V2016, V2017, V2018), **C** (2019–2025, 5 sett: V2019, V2022, V2023, V2024, V2025). Sortert etter gjenganger-score.

| Tema | A (5) | B (3) | C (5) | **Gjenganger-score** |
|---|---|---|---|---|
| **Elementmetode / svak formulering / Galerkin** (stivhetsmatrise, entydighet via Lax–Milgram/SPD) | 5 | 3 | 4 | **12/13 ≈ 92 %** |
| **Von Neumann-stabilitetsanalyse** (sett inn `ξⁿe^{iβx}`, finn `|ξ|`) | 4 | 2 | 3 | **9/13 ≈ 69 %** |
| **Konsistens / lokal avkuttingsfeil via Taylor** (finn ledende ledd + orden) | 3 | 3 | 3 | **9/13 ≈ 69 %** |
| **Hyperbolsk transport: karakteristikk-metode + oppvind + CFL** | 2 | 3 | 4 | **9/13 ≈ 69 %** |
| **Konvergens** (Lax' ekvivalensteorem / diskret maks.prinsipp / Céas lemma) | 4 | 2 | 2 | **8/13 ≈ 62 %** |
| **Numerisk lineær algebra: Jacobi/Gauss–Seidel-iterasjon** (konvergens via spektralradius) | 1 | 3 | 1 | **5/13 ≈ 38 %** |
| **Elliptisk Poisson/Laplace med 5-punktstjerne** (systemoppsett på gitter) | 4 | 0 | 1 | **5/13 ≈ 38 %** |
| **Egenverdier av differansematrisen** (SPD-argument, egenverdifeil, `‖A⁻¹‖`) | 2 | 1 | 1 | **4/13 ≈ 31 %** |
| **Diskret maksimumsprinsipp** (bevis + bruk til feilskranke) | 2 | 0 | 1 | **3/13 ≈ 23 %** |
| **Maks-norm-/L∞-stabilitet** (skranke `max|U|≤C·max|f|`) | 0 | 0 | 2 | **2/13 ≈ 15 %** (kun 2024→) |
| **Backward Euler / implisitt parabolsk skjema** (varmelikning) | 3 | 0 | 1 | **4/13 ≈ 31 %** |
| **Crank–Nicolson / θ-metode** (trapesskjema i tid) | 1 | 1 | 1 | **3/13 ≈ 23 %** |
| **Neumann-rand-diskretisering** (spøkelses-/falsk node, skrå rand, polar) | 1 | 0 | 1 | **2/13 ≈ 15 %** |
| **Konjugerte gradienter** (som lineærløser + iterasjonsestimat) | 2 | 0 | 0 | **2/13 ≈ 15 %** (kun eldre) |
| **Sirkulant/skjevsymmetrisk matriseanalyse** (periodiske randbetingelser) | 1 | 0 | 0 | **1/13 ≈ 8 %** |
| **Prosjekt/mappe (L3/L6): implementering + ordensverifikasjon fra data** | — | — | — | **utenfor skriftlig — testes i mappe** |

**Viktigste funn:**
1. **Elementmetoden/svak formulering (92 %) er den absolutt tryggeste søylen** — praktisk talt garantert, nesten alltid Oppgave 1. Den innebærer: multipliser med testfunksjon, delvis integrasjon, sett opp `a(u,v)=F(v)`, bygg stivhetsmatrise `A` med lineære (av og til kvadratiske) nodale basisfunksjoner, og **argumenter for entydighet** — enten via SPD (symmetrisk positiv definitt) eller eksplisitt via **Lax–Milgram** (Hilbert-rom, begrenset lineær `F`, koersiv/kontinuerlig bilineærform). Dette laget er distinkt for TMA4212 og lite dekket ellers.
2. **Teoritrioen von Neumann + Taylor-avkuttingsfeil + konvergens (hver ~62–69 %)** utgjør ryggraden i differanse-analysen. De opptrer ofte samlet i én oppgave: sett opp skjema → finn avkuttingsfeil via Taylor (konsistens) → von Neumann-stabilitet → konkludér konvergens (Lax). Dette er «konsistens + stabilitet ⇒ konvergens»-tanken i praksis.
3. **Hyperbolsk transport (69 %) er en fast blokk**: finn karakteristikkene (løs `dx/dt=b(x)`), avgjør hvilken rand som er innstrømning (hvor Dirichlet-betingelse må settes), velg riktig oppvindsskjema etter fortegnet på `b`, og finn CFL-betingelsen. Sterkt stigende i nyere sett.
4. **5-punkts-Poisson (38 %) er «historisk tung, nå avtakende»**: dominerte 2013–2015 (egen oppgave hvert år, ofte med krumme render / variabel steglengde), men er nesten helt erstattet av elementmetode-behandling av elliptiske problemer fra 2016.
5. **Numerisk lineær algebra (Jacobi/CG, samlet ~46 %)** har en tydelig forskyvning: **konjugerte gradienter** i de tidlige settene (2013–2014, koblet til 5-punkts-Poisson), **Jacobi-iterasjonens konvergens via spektralradius** som egen oppgave 2016–2018. Behersk begge.
6. **Nyere teoritunge sjangre (diskret maksimumsprinsipp, maks-norm-stabilitet, full `C₁h+C₂k`-feilskranke)** er konsentrert i 2023–2025 og bør dekkes som primærmål for det profil-arkivet en etterfølger måtte arve.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med fasitens foretrukne metode (verifisert mot de offisielle løsningsforslagene).

### A. Elementmetode / svak formulering for randverdiproblem (ODE)
- **Krav:** Multipliser likningen `−(a u')' + c u = f` med en **testfunksjon `v`**, integrer over intervallet, og bruk **delvis integrasjon** for å flytte én derivasjon over på `v`. Håndter randleddet `[a u' v]` eksplisitt via randbetingelsene (Neumann/Robin gir bidrag til `F(v)`; Dirichlet håndteres i testrommet ved `v=0` på den randen). Angi **funksjonsrommet `V`** (typisk `H¹` med passende randkrav), **bilineærformen `a(u,v)`** og **funksjonalen `F(v)`**. Erstatt `V` med endelig-dimensjonalt `V_h = span{φ_0,…,φ_{M−1}}` av **lineære nodale basisfunksjoner (hattfunksjoner)**, og skriv Galerkin-systemet `Aû=b` med `a_{ij}=a(φ_j,φ_i)`, `b_i=F(φ_i)`. **Argumenter for entydighet:** enten vis at `A` er **symmetrisk positiv definitt** (og tridiagonal/diagonaldominant), eller påberop **Lax–Milgram** (V er Hilbert-rom, `F` begrenset lineær, `a` bilineær, kontinuerlig og koersiv).
- **Fasitens metode:** For konkrete deloppgaver regnes `a_{ij}` og `b_i` ut som integraler av hattfunksjoner (V2025 O2c, V2015 O4, Aug2014 O1). Ikke-uniformt gitter og variabel koeffisient `a(x)` forekommer. Kontinuitet/koersivitet vises av og til fullstendig (V2024 O4, V2025 O2a). Konvergens kan avsluttes med **Céas lemma + interpolasjonsestimat** i `H¹`-norm (V2017 O1).
- **Frekvens:** 12/13 ≈ 92 %, nesten alltid Oppgave 1.
- **Omskrevet eksempel:** «For `−u'' + u = f` på `(0,1)` med `u'(0)=α`, `u(1)=0`: sett opp den svake formuleringen, avgjør ved hjelp av Lax–Milgram om problemet har entydig løsning, og finn de to første radene i stivhetsmatrisa `A` og de to første elementene i `b` når `f(x)=x`, `α=1`.» (V2025 O2)

### B. Von Neumann-stabilitetsanalyse
- **Krav:** Anta en Fourier-modus `U_m^n = ξⁿ e^{iβx_m}` (eller `ξⁿ e^{iβmh}`) og sett inn i differanseskjemaet. Bruk **Eulers formel** og identiteten `e^{iβh} − 2 + e^{−iβh} = 2cos(βh) − 2 = −4sin²(βh/2)` for å samle uttrykket i `sin²`. Løs for **forsterkningsfaktoren `ξ(β)`** og krev `|ξ| ≤ 1` for alle `β`. Konkludér: **ubetinget stabil** (holder for alle `r`) eller **betinget stabil** (gir en CFL-type betingelse på `r=k/h²` eller `p=ak/h`).
- **Fasitens metode:** For det θ-vektede/høyereordens varmeskjemaet i V2025 O1 gir analysen `ξ = [(1−⅓sin²) − 2r sin²]/[(1−⅓sin²) + 2r sin²]`, og siden teller/nevner-strukturen gir `|ξ|≤1` for alle `r>0`, er skjemaet **ubetinget stabilt**. For eksplisitt varmeskjema gir samme analyse den klassiske `r ≤ ½`. For system-PDE brukes en forsterknings**matrise** `G` med spektralradius-krav `ρ(G)≤1` (V2015 O1). Periodiske render ⇒ **sirkulant matrise**, hvor egenverdiene er kjente (Aug2013 O2).
- **Frekvens:** 9/13 ≈ 69 %.
- **Omskrevet eksempel:** «Utfør en von Neumann-stabilitetsanalyse av det gitte, høyereordens implisitt-eksplisitte skjemaet for varmelikningen `u_t=u_{xx}`, og avgjør om det er ubetinget stabilt.» (V2025 O1)

### C. Konsistens og lokal avkuttingsfeil via Taylor
- **Krav:** Sett den **eksakte løsningen** inn i differanseoperatoren og **Taylor-utvikle** alle gitterverdier om et felles punkt `(x_m,t_n)`. La leddene som svarer til den kontinuerlige PDE-en falle bort; **det gjenstående leddet er avkuttingsfeilen `τ`**. Identifiser det ledende leddet og **ordenen** (`O(h²)`, `O(h²+k)`, `O(h+k)`, `O(h²+k²)` osv.). For skjemaer med ledd på ulike tidsnivåer må man Taylor-utvikle nøye om ett referansepunkt (fasit-hint i V2023: «de fleste ledd er ved `t_{n-1}`»).
- **Fasitens metode:** V2024 O2b Taylor-utvikler et Wendroff-skjema, viser at det approksimerer transportlikningen `u_t + (π/2)u_x = 0`, og at `τ = O(h²+k²)` når man bruker sammenhengene `u_{tt}=−(π/2)u_{xt}` og `u_{xx}=−(2/π)u_{xt}` fra selve PDE-en for å kansellere ledende ledd. V2023 O1b setter opp `τ = Lu − L_h u` og samler alle Taylor-restene med restpunkt `ξ,η`.
- **Frekvens:** 9/13 ≈ 69 %.
- **Omskrevet eksempel:** «Bruk Taylor-utvikling til å (i) avgjøre hvilken transportlikning Wendroff-skjemaet faktisk approksimerer, og (ii) vise at den lokale avkuttingsfeilen er `O(h²+k²)` på løsningen av denne likningen.» (V2024 O2b)

### D. Konvergens (Lax' ekvivalensteorem / feilrekursjon)
- **Krav:** Den klassiske veien er **Lax' ekvivalensteorem**: for et konsistent skjema er stabilitet ekvivalent med konvergens. Vis konsistens (del C) + stabilitet (del B eller via maksimumsprinsipp), og konkludér konvergens. Alternativt gjøres en **direkte feilrekursjon**: definer feilen `e_m^n = u_m^n − U_m^n`, vis at `L_h e_m^n = −τ_m^n` med `e=0` på den nåbare randen, og bruk en stabilitetsulikhet (mot høyresida, eller diskret maksimumsprinsipp) til å skranke `max|e|` ved `max|τ|`. Da faller feilskranken ut, ofte på formen `C₁h + C₂k`.
- **Fasitens metode:** V2023 O1d gir en full feilskranke `max|e| ≤ C₁h + C₂k` med eksplisitte `C₁ ≤ (2/15)‖u_{xx}‖`, `C₂` uttrykt i deriverte av `u`. V2015 O3 beviser konvergens for implisitt varmeskjema for **alle `r`** uten Lax, via direkte feilrekursjon. V2014/kont2014 bruker Lax(–Richtmyer) direkte.
- **Frekvens:** 8/13 ≈ 62 %.

### E. Hyperbolsk transport: karakteristikk-metode + oppvind + CFL
- **Krav:** For `u_t + b(x)u_x = f`: (1) **Finn karakteristikkene** ved å løse ODE-en `dx/dt = b(x)`, `x(t*)=x*`, og skissér dem. (2) **Avgjør innstrømningsranden** — der karakteristikkene går inn i domenet — for der (og bare der) skal Dirichlet-betingelsen settes; fortegnet på `b(0)` og `b(1)` bestemmer om venstre/høyre rand trenger betingelse. (3) **Løs eksplisitt** langs karakteristikkene (løsningen er konstant langs dem når kilden er null). (4) **Velg riktig oppvindsskjema** etter fortegnet på `b` (bruk differansen i den retningen informasjonen kommer fra). (5) **Finn CFL-betingelsen** — det numeriske avhengighetsdomenet må inneholde det fysiske, typisk `|b|k/h ≤ 1` (evt. `k/h ≤ 1/max|b|`).
- **Fasitens metode:** V2025 O3 løser `u_t + (x−2)u_x = 0`, viser karakteristikken `x(t)=e^{(t−t*)}(x*−2)+2`, at informasjonen beveger seg mot venstre (så Dirichlet må settes på `x=1`), velger fram-oppvinds-skjemaet fordi det bakre er ubetinget ustabilt, og finner `k/h ≤ ½`. V2024 O2a lister systematisk innstrømningsranden for fire ulike `b(x)`. V2018 O1 gjør det samme for `u_t = t u_x`.
- **Frekvens:** 9/13 ≈ 69 %.
- **Omskrevet eksempel:** «For `u_t + (x−2)u_x = 0` på `(0,1)`: vis karakteristikken gjennom `(x*,t*)`, avgjør hvilken rand som trenger en Dirichlet-betingelse, løs eksplisitt med karakteristikk-metoden, velg mellom det fram- og bakoverrettede oppvindsskjemaet, og finn kravet på `k/h` for at CFL-betingelsen skal holde for alle `t`.» (V2025 O3)

### F. Elliptisk Poisson/Laplace med 5-punktstjerne
- **Krav:** Diskretiser `Δu = u_{xx}+u_{yy} = f` med den sentrale **5-punktsformelen** `(U_{i+1,j}+U_{i−1,j}+U_{i,j+1}+U_{i,j−1}−4U_{i,j})/h²`. Sett opp gitter, **nummerér nodene radvis**, skill indre noder fra randnoder, og bygg det (blokk-tridiagonale) lineære systemet `AU=b`. Ved **krumme render** brukes variabel steglengde / «fortykking av randen» (fattening) med interpolasjon til fiktive randverdier. Argumenter for at `−A` er **SPD** (via kjente egenverdier eller Gershgorin) slik at systemet er entydig løsbart og CG kan brukes.
- **Fasitens metode:** V2023 O2 nummererer et 4×4-gitter, identifiserer de fire indre nodene, «fortykker» randen inne i en sirkel, og skriver systemmatrisa rad for rad. V2013 O2 skriver `A` for Laplace på enhetskvadratet og bruker de kjente egenverdiene til å vise SPD + CG-iterasjonsestimat. Aug2014 O2 gjør Taylor-avkuttingsfeil både i det indre (`O(h²)`) og nær krum rand (faller til første orden).
- **Frekvens:** 5/13 ≈ 38 % (4/5 i epoke A, deretter avtakende).

### G. Numerisk lineær algebra: Jacobi-iterasjon (og konjugerte gradienter)
- **Krav (Jacobi):** Splitt `A = D − R` (`D` = diagonalen). Iterasjonen er `x^{k+1} = D⁻¹(Rx^k + b)`, en fikspunktiterasjon. **Konvergens ⇔ spektralradius `ρ(D⁻¹R) < 1`.** Regn ut egenverdiene til iterasjonsmatrisa (ofte tridiagonal, med kjent egenverdiformel) og finn parameterområdet der `ρ<1`. Merk at SPD **ikke** garanterer Jacobi-konvergens (klassisk moteksempel). **Krav (CG):** vis at `A` er SPD, bruk den utleverte konvergensskranken (avhengig av kondisjonstall/egenverdier) til å estimere antall iterasjoner for gitt toleranse.
- **Fasitens metode:** V2022 O1 viser SPD-betingelse på en `tridiag(b,a,c)`-matrise og at Jacobi konvergerer siden `ρ(B)=|b|/√2 < 1`. V2016 O3 konstruerer en SPD-matrise der Jacobi *divergerer*. V2024 O3 kobler Jacobi-konvergens til et randverdiproblem og bruker `ρ ≤ 1/(1+1/(2M²))` til en kontraksjonsskranke over `k` skritt.
- **Frekvens:** Jacobi 5/13 ≈ 38 % (dedikert oppgave 2016–2018 + 2022/2024); CG 2/13 (kun eldre).
- **Omskrevet eksempel:** «Vis at det `k`-te Jacobi-skrittet for det gitte randverdiproblem-systemet oppfyller `‖U−U^{(k)}‖_∞ ≤ (1/(1+1/(2M²)))^k · ‖U−U^{(0)}‖_∞`.» (V2024 O3)

### H. Egenverdier av differansematrisen
- **Krav:** Bruk de **kjente egenverdiene** til den tridiagonale differansematrisa (`tridiag(−1,2,−1)` har egenverdier `4sin²(jπ/(2M))`, tilhørende sinus-egenvektorer) til å (a) vise at systemmatrisa er SPD, (b) skranke `‖A⁻¹‖₂` ved den minste egenverdien for en konvergensbevis, eller (c) analysere hvor godt et **diskret egenverdiproblem** `−y''=λy` approksimerer det kontinuerlige, med egenverdifeil `|λ−μ| = O(h²)`.
- **Fasitens metode:** V2017 O2 utleder de diskrete egenvektorene, sammenligner diskret `μ` mot kontinuerlig `λ` og skranker feilen `|λ−μ| ≤ m⁴π⁴h²/12`. V2014 O5 skranker `‖A⁻¹‖₂` via minste egenverdi for 2-norm-konvergens.
- **Frekvens:** 4/13 ≈ 31 %.

### I. Diskret maksimumsprinsipp og maks-norm-stabilitet
- **Krav (DMP):** Vis at differanseoperatoren `−L_h` har **positive koeffisienter** (diagonalen dominerer med rett fortegn: `α_{m,m} > Σ_{k≠m} α_{m,k}`, alle utenom-diagonale `≥ 0`). Bevis så at hvis `−L_h U_m ≤ 0` i det indre, antar `U` sitt maksimum på randen. Bruk et **motsigelsesargument** i en antatt indre maksimalnode. **Bruk DMP** til å utlede en **maks-norm-stabilitetsskranke** `max|U_m| ≤ C·max|f(x_m)|` ved hjelp av en **supersolusjon/komparasjonsfunksjon** (f.eks. `φ_m = ½` med `−L_h φ = 1`).
- **Fasitens metode:** V2024 O1 beviser DMP i alle detaljer for en selvadjungert 2. ordens diskretisering, og bruker `V_m = U_m − ‖f‖_∞ φ_m` til å få `max|U_m| ≤ ½‖f‖_∞`. V2025 O5a beviser samme type L∞-skranke direkte for et backward-Euler-varmeskjema med reaksjonsledd. Aug2014 O2 bruker en komparasjonsfunksjon `u−U+Cy²` til førsteordens konvergens.
- **Frekvens:** DMP 3/13; maks-norm-stabilitet 2/13 (stigende, 2024→).

### J. Neumann-randdiskretisering (spøkelses-/falsk node)
- **Krav:** Approksimér en Neumann-betingelse `∂u/∂n = ∇u·n = g` på en rand (mulig **skrå** rand) til gitt orden. For en akse-parallell rand: introduser en **fiktiv (falsk) node** utenfor domenet og eliminér den via den sentrale differansen slik at differanseskjemaet fortsatt gjelder i randnoden. For skrå render: kombiner en sentraldifferanse langs én retning med en bakoverdifferanse i den andre, og finn koeffisientene slik at avkuttingsfeilen får ønsket form (bestem konstanten `C` i det ledende leddet).
- **Fasitens metode:** V2025 O4 finner koeffisienter `α_T,α_P,α_R,α_Q` for normalderiverten på en skrå rand (`n = (1,2)/√5`) ved å kombinere en sentral- og en bakoverdifferanse, og bestemmer at `τ_Q = (√5·2/8)·h∂_y²u_Q + O(h²)`. V2015 O2 kombinerer 5-punkts-Poisson med Neumann på diagonalranden + polar omskriving.
- **Frekvens:** 2/13 ≈ 15 %.

### K. Implisitt parabolsk skjema: backward Euler / Crank–Nicolson / θ-metode
- **Krav:** For varmelikningen (evt. med reaksjonsledd `−u`, `u_t = u_{xx} − u`): sett opp **backward Euler** (implisitt i tid, sentral i rom) og skriv det tridiagonale systemet `A_h U^{n+1} = U^n + F^n`. **Crank–Nicolson/θ-metoden** trapesvekter romleddet mellom `t_n` og `t_{n+1}`. Analysér stabilitet (implisitte skjemaer er typisk ubetinget stabile) og orden (`O(k)` for backward Euler, `O(k²)` for CN i tid). For ikke-homogene randbetingelser bygges randverdiene inn i `F` og startvektoren `G`.
- **Fasitens metode:** V2022 O2a bygger `A_h`, `F^n`, `G` for et backward-Euler-skjema for `u_t − u_{xx} + xu_x = 1` med ikke-homogene render; O2b viser at det eksplisitte motstykket er monotont under CFL `k ≤ ½h²`. Aug2013 O2b analyserer CN via sirkulant/skjevsymmetrisk struktur (`‖B‖₂=1`, alltid stabil).
- **Frekvens:** backward Euler 4/13; CN/θ 3/13.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alle svar** — fast instruks *«All answers must be properly argued for»*. Dette er et bevis-/utledningsemne; et korrekt sluttsvar uten resonnement gir ikke full uttelling.
2. **Teorem- og metodenavn skal bæres eksplisitt:** «Lax–Milgram», «Lax' ekvivalensteorem», «von Neumann-analyse», «CFL-betingelsen», «diskret maksimumsprinsipp», «Céas lemma», «karakteristikk-metoden», «Gershgorins teorem». Fasitene navngir dem konsekvent.
3. **Fullstendige bevis, ikke skisser:** Der oppgaven sier «vis i alle detaljer» (V2024 O1b) forventes hele motsigelsesargumentet i DMP, ikke bare påstanden om positive koeffisienter. Ved Lax–Milgram skal alle fire vilkårene sjekkes (Hilbert-rom, lineær + begrenset `F`, bilineær + kontinuerlig + koersiv `a`).
4. **Von Neumann-standard:** sett inn `ξⁿe^{iβx}`, bruk `sin²`-identiteten, gi eksplisitt `ξ(β)`, og konkludér **ubetinget vs. betinget** stabilitet med den nøyaktige CFL-konstanten.
5. **Karakteristikk/CFL-standard:** avgjør innstrømningsrand fra fortegnet på `b`, plassér Dirichlet-betingelsen riktig, velg oppvindsretning etter informasjonsflyten, og oppgi CFL-konstanten eksakt.
6. **Prosentvekting (2022→):** hver oppgave har en oppgitt vekt (10–30 %); deloppgaver innenfor deles. Eldre sett bruker læringsutbytte-tagger (L1–L7) i stedet.
7. **Riktig avkuttingsfeil krever riktig referansepunkt:** Taylor-utvikling om feil punkt (blande `t_n` og `t_{n−1}`) er en typisk kilde til feil orden; fasiten er nøye med restpunktene `ξ,η`.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske grepene: sette opp den svake formuleringen, bygge stivhetsmatrisa, sette inn Fourier-modusen i von Neumann, sette opp differanseskjemaet, finne karakteristikkene.
- **Midtsjiktet** behersker i tillegg: korrekt Taylor-avkuttingsfeil med rett orden, `sin²`-forenklingen i von Neumann med korrekt CFL-konstant, SPD-/entydighetsargumentet for stivhetsmatrisa, riktig innstrømningsrand + oppvindsvalg.
- **Toppsjiktet** kjennetegnes av: (i) **fullstendig Lax–Milgram** (alle fire vilkår, koersivitet vist), (ii) **hele det diskrete maksimumsprinsippet** med motsigelsesargument + komparasjonsfunksjon, (iii) **full feilskranke `C₁h+C₂k`** med eksplisitte konstanter i normer av deriverte, (iv) korrekt **egenverdianalyse** av differansematrisa (SPD via kjente egenverdier, `‖A⁻¹‖`-skranke), (v) korrekt **Neumann-/skrårand-diskretisering** med bestemt ledende feilkonstant, (vi) korrekt **Jacobi-konvergens via spektralradius** (og bevisstheten om at SPD ikke er tilstrekkelig).

---

## 5. Typiske feil (fra fasitpraksis eller innebygd i oppgavene)

1. **Ufullstendig Lax–Milgram:** å hoppe over koersiviteten eller ikke vise at `F` er begrenset — bare å påstå entydighet uten å sjekke alle vilkårene.
2. **Glemt randledd i svak formulering:** ved delvis integrasjon forsvinner `[a u' v]`-leddet feilaktig, eller Neumann-/Robin-bidraget til `F(v)` glemmes; feil valg av testrom (feil `v(a)=0`-krav).
3. **Feil referansepunkt i Taylor-utvikling:** blande tidsnivåer `t_n`/`t_{n−1}` gir gal orden på avkuttingsfeilen.
4. **Von Neumann uten `sin²`-forenkling:** å stoppe før `e^{iβh}−2+e^{−iβh}` skrives om til `−4sin²(βh/2)`, eller feil konklusjon om (u)betinget stabilitet.
5. **Feil innstrømningsrand:** å sette Dirichlet-betingelsen på feil rand for transportlikningen (galt fortegnsresonnement på `b`), eller velge oppvindsskjema mot informasjonsflyten (det ubetinget ustabile skjemaet).
6. **Feil CFL-konstant:** feil `r=k/h²` vs. `p=ak/h`, eller å bruke feil (minst restriktive) punkt når `b` varierer i rommet.
7. **SPD forveksles med Jacobi-konvergens:** å anta at symmetrisk positiv definitt matrise gir konvergent Jacobi-iterasjon (fasiten har et eksplisitt moteksempel).
8. **Ufullstendig maksimumsprinsipp:** å vise positive koeffisienter, men hoppe over motsigelsesargumentet, eller glemme komparasjonsfunksjonen når DMP skal gi en stabilitetsskranke.
9. **Krum/skrå rand behandlet som akse-parallell:** å bruke standard 5-punktstjerne uten variabel steglengde nær krum rand (avkuttingsfeilen faller da til første orden ubemerket).
10. **Feil egenverdiformel:** feil egenverdier for `tridiag(−1,2,−1)`, eller feil skranke på `‖A⁻¹‖` i konvergensbeviset.
11. **Tidsfelle:** elementmetode-oppgaven og den store bevis-/feilskranke-oppgaven er tunge; disse er ofte høyest vektet (25–30 % fra 2022), så feil tidsbudsjett straffer hardt.

---

## 6. Teorem-, notasjons- og formelapparat

### Hjelpemidler — merk fraværet av utdelt formelark
I motsetning til beslektede NTNU-emner (tma4135/tma4120) deler TMA4212 **ikke ut et eget formelark**. I stedet er hjelpemiddelkode **C** brukt med **lærebøker og kursnotater tillatt** (varierende per år): Strikwerda, Süli & Mayers, Owren-notatet om differanser (~98 s.), Curry-notatet om elementmetoder (~28 s.), 2D-FEM-kopier og Rottmann. Gamle eksamensløsninger er **ikke** tillatt. Praktisk konsekvens for boka: siden teksten er tilgjengelig, tester eksamen **anvendelse og bevisføring**, ikke pugging — men studenten må kunne **finne og anvende** teoremapparatet raskt og sikkert. Boka bør inneholde et kompakt referanseoppslag (egenverdier av standardmatriser, `sin²`-identiteten, karakteristikk-ODE, CFL-former) og trene på hurtig, korrekt bruk.

### Må beherskes aktivt (kunne anvende og navngi)
- **Differanseanalyse-triaden:** *konsistens* (avkuttingsfeil via Taylor + orden), *stabilitet* (von Neumann `ξⁿe^{iβx}`, `−4sin²`-identiteten, forsterkningsmatrise for system, sirkulant for periodisk rand), *konvergens* (**Lax' ekvivalensteorem**, direkte feilrekursjon, **diskret maksimumsprinsipp**, maks-norm-/L∞-stabilitet).
- **Elementmetode:** svak/variasjonsformulering, delvis integrasjon + randledd, testrom `H¹` med randkrav, lineære (og kvadratiske) nodale basisfunksjoner, stivhetsmatrise + lastvektor, **Lax–Milgram** (Hilbert-rom, begrenset lineær `F`, koersiv/kontinuerlig `a`), SPD/tridiagonalitet, **Céas lemma** + interpolasjonsestimat.
- **PDE-klassene:** *parabolsk* (varmelikning; eksplisitt Euler `r≤½`, backward Euler, Crank–Nicolson/θ-metode), *elliptisk* (Poisson/Laplace; 5-punktstjerne, variabel steglengde/fortykket rand nær krum grense, Neumann-diskretisering med falsk node), *hyperbolsk* (transport/adveksjon; karakteristikk-metode, innstrømningsrand, oppvindsskjema, **CFL-betingelse**; Wendroff-skjema).
- **Numerisk lineær algebra:** Jacobi/Gauss–Seidel + **spektralradius** for konvergens, konjugerte gradienter + kondisjonstall-/egenverdiestimat, **egenverdier av differansematrisen** (`4sin²`-familien), SPD via egenverdier/Gershgorin.

### Notasjonskonvensjoner boka bør speile
`U_m^n ≈ u(x_m,t_n)`; `r = k/h²`, `p = ak/h`; forsterkningsfaktor `ξ`, bølgetall `β`; separasjon `δ_x²`/`δ_x`/`∇_h`/`Δ_h`/`∆_k` for differanseoperatorer; avkuttingsfeil `τ`; `L` kontinuerlig, `L_h` diskret operator; svak form `a(u,v)=F(v)`, testrom `V`, hattfunksjoner `φ_i`; stivhetsmatrise `A`, lastvektor `b`; `H¹`, `L²`, `‖·‖_∞`; CFL-konstanter oppgitt eksakt.

---

## 7. Prognose og prioritering

> TMA4212 er et bevis- og teoritungt differansemetode-emne med svært stabil sjangertradisjon. Prognosen vekter de faste teorisøylene tyngst. **Alt er farget av at emnet er nedlagt** — et framtidig TMA4216-sett kan avvike (se forbeholdet i del 1). Prioriteringen under gjelder direkte for TMA4212-arkivet og er et robust utgangspunkt for etterfølgeren dersom differansemetode-kjernen videreføres.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Elementmetode / svak formulering** — 92 %. Delvis integrasjon + randledd, testrom, stivhetsmatrise, **Lax–Milgram/entydighet** i alle detaljer, Céas lemma.
2. **Von Neumann-stabilitetsanalyse** — 69 %. `ξⁿe^{iβx}`, `−4sin²`-identiteten, ubetinget vs. betinget + eksakt CFL-konstant.
3. **Konsistens / avkuttingsfeil via Taylor** — 69 %. Riktig referansepunkt, ledende ledd, orden.
4. **Hyperbolsk transport: karakteristikk + oppvind + CFL** — 69 %. Innstrømningsrand, oppvindsvalg, CFL-konstant, eksplisitt karakteristikk-løsning.
5. **Konvergens** — 62 %. Lax' ekvivalensteorem, direkte feilrekursjon, full `C₁h+C₂k`-skranke.

### Nivå 2 — må kunne (bredde + karakterskiller)
6. **Numerisk lineær algebra: Jacobi-iterasjon** — 38 %. Spektralradius, SPD ≠ konvergens, kontraksjonsskranke over `k` skritt. (+ konjugerte gradienter som beredskap.)
7. **Elliptisk Poisson/Laplace med 5-punktstjerne** — 38 %. Systemoppsett, nummerering, variabel steglengde/fortykket rand. (Historisk tung, avtakende — men grunnleggende.)
8. **Egenverdier av differansematrisen** — 31 %. `4sin²`-familien, SPD, `‖A⁻¹‖`-skranke, egenverdifeil.
9. **Implisitt parabolsk (backward Euler / Crank–Nicolson / θ-metode)** — samlet ~46 %. Tridiagonalt system, ubetinget stabilitet.
10. **Diskret maksimumsprinsipp + maks-norm-stabilitet** — 3/13 + 2/13, **stigende i 2023–2025**. Fullt bevis + komparasjonsfunksjon.

### Nivå 3 — bør dekkes (lav frekvens / beredskap)
11. **Neumann-/skrårand-diskretisering** (falsk node, polar) — 15 %.
12. **Sirkulant/skjevsymmetrisk matriseanalyse** for periodiske render — 8 %.
13. **Prosjekt/mappe-ferdighetene (L3/L6):** implementering, kjøring, **ordens-/konvergensverifikasjon fra egne data.** Testes i mappen, ikke skriftlig — men **30 % av karakteren**, så boka trenger en egen prosjektdel med kodemaler og ordensmåling.

### Konkret prognose for et typisk sett
Basert på den stabile malen: **4–5 prosentvektede oppgaver over 4 timer**, kode C (lærebøker/notater tillatt), ingen flervalg, med:
- **O1:** elementmetode / svak formulering av et randverdiproblem for ODE (stivhetsmatrise + entydighet via Lax–Milgram/SPD) — den nesten sikre oppgaven, ofte høyt vektet.
- **O2:** parabolsk varmelikning — von Neumann-stabilitet og/eller avkuttingsfeil via Taylor, evt. med et implisitt (backward Euler / Crank–Nicolson / θ) skjema.
- **O3:** hyperbolsk transport — karakteristikk-metode, innstrømningsrand, oppvind + CFL.
- **O4:** en teoritung del — diskret maksimumsprinsipp / maks-norm-stabilitet / full feilskranke, eller Neumann-randdiskretisering.
- **O5:** numerisk lineær algebra (Jacobi-konvergens via spektralradius) eller egenverdier av differansematrisa; alternativt et elliptisk 5-punkts-Poisson-innslag.

**Usikkerhetsmomenter:** (1) **Nedlagt emne + TMA4216-etterfølger uten arkiv** — hele profilen kan skifte; verifiser mot første TMA4216-sett. (2) De teoritunge nye sjangrene (DMP, maks-norm-stabilitet, full feilskranke) er konsentrert i 2023–2025 — de kan bli tyngre eller lettere vektet. (3) 5-punkts-Poisson kan komme tilbake eller forbli erstattet av elementmetode. (4) Sjekk hvilke hjelpemidler/lærebøker etterfølgeren tillater.

### Arbeidsdeling mot beslektede emner
**TMA4212 er det *avanserte* differansemetode-emnet.** Innføringsnivået av FDM for PDE — eksplisitt varmelikning, Crank–Nicolson, enkel avkuttingsfeil — er **allerede dekket i tma4135** (Matematikk 4D, som har en egen «differansemetode for PDE/RVP»-sjanger på 85 %) og **berøres i tma4320** (vitenskapelige beregninger). Det distinkte TMA4212-laget er **stabilitets- og konvergensteorien** (von Neumann, Lax' ekvivalensteorem, CFL, egenverdianalyse, diskret maksimumsprinsipp) og **elliptiske/hyperbolske skjemaer + elementmetode-teori i dybde** (Lax–Milgram, Céas lemma, svak formulering). Det er også betydelig overlapp mot **tma4125** (nedlagt Matematikk 4N), som deler differanse-basisen.

> **I én setning:** En egen TMA4212-bok bør bygge *på* tma4135-basisen (elementær FDM for varme/Crank–Nicolson) og konsentrere seg om det distinkte teorilaget — von Neumann-/Lax-/CFL-stabilitets- og konvergensanalyse, elliptiske/hyperbolske skjemaer i dybde, og elementmetodens svake formulering + Lax–Milgram — mens den kryssrefererer den delte differanse-basisen med tma4135/tma4125 og den vitenskapelige-beregninger-praksisen med tma4320.

**Anbefalt arketype:** samme metode-/sjanger-drevne eksamenstreningsbok som tma4135 («teori → arbeidet eksempel → metodemal → graderte øvingsoppgaver», organisert etter sjangrene i del 3), men med to tilpasninger: (a) **et eget bevis-/teorispor** siden dette emnet vekter teoremer og fullstendige bevis (Lax–Milgram, DMP, Lax-ekvivalens) langt tyngre enn et vanlig numerikk-emne, og (b) **en egen prosjekt-/mappedel** for L3/L6-ferdighetene (implementering + ordensverifikasjon) som utgjør 30 % av karakteren men ikke er på skriftlig eksamen.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/TMA4212/` (26 PDF-er, 2013–2025).

**Løsningsforslag lest grundig (offisielle fasiter, oppgave for oppgave):**
- `tma4212_v25_lf.pdf` (V2025 — von Neumann, elementmetode + Lax–Milgram, karakteristikk + CFL, skrå Neumann-rand, maks-norm-stabilitet)
- `tma4212v2024_solns.pdf` (V2024 — selvadjungert diskretisering + diskret maksimumsprinsipp + L∞-stabilitet, transport-innstrømning, Wendroff-avkuttingsfeil, Jacobi-kontraksjon, Lax–Milgram-koersivitet)
- `tma4212v2023_solns.pdf` (V2023 — oppvind + CFL, avkuttingsfeil + full feilskranke `C₁h+C₂k`, fortykket-rand-Poisson)
- `tma4212v2022_solnsv2.pdf` (V2022 — SPD + Jacobi-konvergens, backward Euler-system, monotont eksplisitt skjema + CFL)
- `lf2017.pdf` (V2017 — Galerkin på ikke-uniformt gitter + Céas lemma, egenverdiproblem, Jacobi)
- `lf2016_en.pdf` (V2016 — kvadratisk elementmetode-Poisson, oppvind + von Neumann, Jacobi divergens-moteksempel)
- `lf2015_en.pdf` (V2015 — system-von-Neumann, Neumann-Poisson + polar, implisitt konvergens uten Lax, elementmetode)
- `lfe2014.pdf` / `kontlf2014.pdf` (V2014 + Aug2014 — svak form for tre randtyper, krum-rand-Poisson + DMP, karakteristikk + CFL, Lax-stabilitet)
- `lf2013_eng.pdf` / `keaug2013_englf.pdf` (V2013 + Aug2013 — elementmetode + SPD, 5-punkts-Laplace + CG, dispersiv PDE + von Neumann + Crank–Nicolson + sirkulant)
- `eksamen.pdf` (= V2018 med full løsning — karakteristikk/CFL, avkuttingsfeil + von Neumann, elementmetode-variasjonsform, Jacobi)

**Oppgavesett lest grundig:** `tma4212_v25.pdf`, `tma4212v2024.pdf`, `tma4212v2023.pdf`, `tma4212V2022.pdf`, `e2019_en.pdf`, `e2018_en.pdf`, `e2017_en.pdf`, `e2016_en.pdf`, `e2015_en.pdf`, `e2014_en.pdf`, `e2013_eng.pdf`, `keaug2013_eng.pdf`, `kont2014_en.pdf`.

**Merknader om kildene:**
- **Nesten fullstendig fasit-dekning:** 12 av 13 sett har lesbar, offisiell fasit. Kun **V2019-fasiten (`e2019_sol.pdf`) er bildebasert** (ingen tekst kunne utvinnes, ingen tung OCR utført) — men V2019-oppgaveteksten (`e2019_en.pdf`) er lest i sin helhet, så settet inngår kvalitativt i frekvenstabellen.
- **`eksamen.pdf` er V2018 med løsning** — telles ikke som eget år (samme oppgaver som `e2018_en.pdf`).
- **Nedlagt emne:** analysen bygger på det avsluttede TMA4212-arkivet. Etterfølgeren **TMA4216** har foreløpig intet arkiv; profilen kan avvike og er merket som forbehold gjennomgående.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Fagbeskrivelse og status:** omskrevet sammendrag av NTNUs emnebeskrivelse `https://www.ntnu.no/studier/emner/TMA4212` (hentet i arbeidet): navn, 7,5 sp, 70 %/30 %-vurdering, nedlagt status, TMA4216-etterfølger (6 sp reduksjon fra H2026), og pensuminnhold (konsistens/orden/stabilitet/konvergens, iterative lineærløsere + prekondisjonering, elementmetode-grunnlag, elliptisk/parabolsk/hyperbolsk).

**Forbilder:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal, nært beslektet numerikk/PDE-emne) og `docs/hoyskole-boker/tma4121/EKSAMENSANALYSE.md` (arbeidsdeling-seksjon + nedlagt/etterfølger-forbehold som mønster).

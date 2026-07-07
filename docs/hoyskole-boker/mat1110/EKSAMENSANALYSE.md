# Eksamensanalyse: MAT1110 Kalkulus og lineær algebra (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på **20 ordinære avsluttende eksamener** (2004–2025; arkivet mangler 2020 og 2023), **2 ekstra V2025-sett** (kontinuasjonseksamen 12. august 2025 og prøveeksamen mai 2025) og **3 fullstendige offisielle løsningsforslag** (V2025 ordinær, konte og prøve — de eneste fasitene i arkivet). Den utdelte formelsamlingen er lest i sin helhet (V2022-utgaven). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** MAT1110-eksamen gjennomgikk et **regimeskifte i 2025**. Gjennom 2004–2024 var **egenverdier/Markov-matriser** og **potensrekker** de to faste ryggradene (hver i ~70–85 % av settene), og **ingen** sett testet Gauss' divergensteorem eller Stokes' teorem. Alle tre V2025-settene **droppet egenverdier og potensrekker fullstendig** og innførte i stedet en tung **vektoranalyse-blokk** (fluksflateintegral + Gauss' divergensteorem, og Stokes på konte-settet), med **basis/invers matrise + omvendt/implisitt funksjonsteorem** som åpning. En eksamensrettet bok må dekke **begge regimer** og trene mot det nye som primærmål, men beholde det gamle som fullt beredskap.

---

## 1. Eksamensform og utvikling

MAT1110 vurderes med **to prøver**, akkurat som forgjengeren MAT1100:

| | Midtsemestereksamen (1/3) | Avsluttende eksamen (2/3) |
|---|---|---|
| Form | Skriftlig, **ingen hjelpemidler** | Skriftlig langsvar |
| Hjelpemidler | Kun utdelt formelsamling | **Godkjent kalkulator + utdelt formelsamling** |
| Pensumvindu | Første halvdel (lineær algebra + start flervariabel) | Hele pensum, tyngde i flervariabel + vektoranalyse |
| Innleveringer | To obligatoriske innleveringer må være godkjent for å gå opp | (samme) |

> **Arkiv-forbehold:** Arkivet inneholder **kun avsluttende eksamener** (slutteksamener). Det finnes **ingen midtsemestereksamener** i mappen, så all kvantitativ analyse under gjelder den avsluttende eksamenen. Midtsemesterets form/temafordeling er ikke dokumentert her og bør hentes inn separat før boken kalibrerer midtveisdelen.

### Formathistorikk, avsluttende eksamen

| Periode | Struktur | Kommentar |
|---|---|---|
| 2004–2010 | 4–7 hovedoppgaver, ofte tredelte (a/b/c), **3 timer** | 2006/2005/2004/2011 hadde bare 4 hovedoppgaver med tunge deloppgaver |
| 2011 | Overgang til **4 timer**; 4 hovedoppgaver | 2011 var svært lineær-algebra-tung (matrise-kvadratrot) |
| 2012–2017 | Fast **6-oppgavers**-mal, **10 poeng per deloppgave** | 9–11 deloppgaver totalt |
| 2018, 2019, 2024 | **«10 deloppgaver à 6 poeng»** (5–6 hovedoppgaver) | Eksplisitt likevekt |
| 2021 | Poeng per hovedoppgave (70 p totalt), 5 hovedoppgaver | Teoritungt sett (rekke-teori, kontraksjon, Newton-iterasjon) |
| 2022, 2025 | **«10 deloppgaver à 10 poeng»** | V2025 ordinær/konte/prøve alle med denne malen |

**Konstanter på tvers av alle år:**
- **10 deloppgaver som teller likt** er den stabile normen (6 p eller 10 p per deloppgave — vekten varierer, likevektsprinsippet ikke). Tidsbudsjett ~24 min per deloppgave på 4-timerssettet.
- Fast instruks i alle sett: **«Du må begrunne alle svar, og vise nok mellomregninger til at man lett kan følge argumentene.»** Ren fasit uten utledning gir ikke full uttelling.
- Deloppgavene er **kjedet**: fasiten gjenbruker eksplisitt tidligere delsvar (V2025-konte O1b bruker inversen fra O1a; O6c bruker trippelintegralet fra O6b og fluksen fra O6a). Å se koblingen er en del av det som måles.
- Hvert sett treffer bredt: typisk (1) lineær algebra, (2) flervariabel optimering (Hesse og/eller Lagrange), (3) rekker **eller** vektoranalyse, (4) multiple integraler.

### Regimeskiftet 2025 (det viktigste strukturfunnet)

Kontrasten mellom de tre V2025-settene og de ti foregående årene er skarp og systematisk:

| Tema | 2004–2024 (17 sett) | V2025 (3 sett: ord/konte/prøve) |
|---|---|---|
| Egenverdier / Markov / lim Aⁿv | ryggrad (~70 %) | **0 av 3** |
| Potensrekker (konvergens + sum) | ryggrad (~85 %) | **0 av 3** |
| Fluks-flateintegral (∫ F·n dS) | sjelden (~15 %) | **3 av 3** |
| Gauss' divergensteorem (3D) | **aldri** | **3 av 3** |
| Stokes' teorem | **aldri** | **1 av 3** (konte) |
| Omvendt/implisitt funksjonsteorem som åpner | sjelden | **3 av 3** |
| Stasjonære + Hesse, Lagrange, multiple integraler, Green | fast | fast (beholdt) |

Skiftet er så konsekvent over tre uavhengige sett (ordinær, konte og prøve, alle V2025) at det etter alt å dømme skyldes ny emneansvarlig/pensumvekting fra og med 2025, ikke tilfeldig variasjon. **Prognosen (del 7) vekter derfor V2025-regimet tyngst**, men beholder det gamle regimet som fullt beredskap fordi det bare finnes ett år med det nye.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer. Basert på 20 ordinære avsluttende sett (2004–2025, uten 2020/2023). V2025-kolonnen teller bare det ene **ordinære** 2025-settet; konte og prøve omtales separat fordi de tilhører samme regime og forsterker signalet.

| Tema | 2004–11 (8 sett) | 2012–19 (7) | 2021–25 (5) | **Gjenganger-score** |
|---|---|---|---|---|
| Multiple integraler: dobbelt-/trippelintegral (volum/areal) | 8 | 7 | 4 | **19/20 = 95 %** |
| Potensrekker: konvergensområde/-radius + sum | 6 | 7 | 4 | **17/20 = 85 %** |
| Lineær algebra kap. 1: radreduksjon / basis / nullrom / inverterbarhet | 6 | 5 | 3 | **14/20 = 70 %** |
| Egenverdier/egenvektorer | 4 | 6 | 4 | **14/20 = 70 %** (men 0/3 i V2025-regimet) |
| Diagonalisering / Aⁿ / lim Aⁿv (Markov/potens) | 4 | 5 | 3 | **12/20 = 60 %** (0/3 i V2025-regimet) |
| Stasjonære punkter + Hesse-klassifisering | 3 | 6 | 3 | **12/20 = 60 %** |
| Lagrange / betinget optimering | 3 | 5 | 4 | **12/20 = 60 %** (stigende; 3/3 i V2025) |
| Linjeintegral / Greens teorem | 5 | 4 | 3 | **12/20 = 60 %** |
| Trippelintegral i sylinder-/kulekoordinater (volum) | 4 | 3 | 3 | **10/20 = 50 %** |
| Omvendt/implisitt funksjonsteorem + Jacobi | 3 | 1 | 2 | **6/20 = 30 %** (stigende; 3/3 i V2025) |
| Tallrekker (ikke-potens): konvergenstester | 1 | 2 | 2 | **5/20 = 25 %** |
| Flateintegral (skalar ∫f dS eller fluks ∫F·n dS) | 1 | 1 | 2 | **4/20 = 20 %** (3/3 i V2025-regimet) |
| Variabelskifte / Jacobideterminant i multiple integraler | 2 | 1 | 0 | **3/20 = 15 %** |
| Kontraksjon / fikspunkt / Newtons metode i flere variable | 1 | 1 | 1 | **3/20 = 15 %** |
| Nivåkurver / grenser / kontinuitet i flere variable | 1 | 2 | 0 | **3/20 = 15 %** (kun ≤2014) |
| Kjerneregel / funksjonell avhengighet via Jacobi | 2 | 0 | 0 | **2/20 = 10 %** (kun eldre) |
| Buelengde / parametrisering av kurve som egen oppgave | 2 | 0 | 0 | **2/20 = 10 %** (kun 2004–05) |
| Minste kvadrater | 0 | 1 | 0 | **1/20 = 5 %** (2017) |
| **Gauss' divergensteorem (3D fluks)** | 0 | 0 | 1 | **1/20 = 5 %** (men 3/3 i V2025-regimet — se under) |
| **Stokes' teorem** | 0 | 0 | 0 | **0/20 ordinært** (1/3 i V2025-regimet: konte) |
| **Taylor i flere variable** | 0 | 0 | 0 | **0/20 = 0 %** |
| **Differensiallikninger / -systemer** | 0 | 0 | 0 | **0/20 = 0 %** |

> **Les tabellen med regimeskiftet i mente:** Rådtallene undervurderer Gauss/Stokes/fluks (fordi de eksploderte først i 2025) og overvurderer egenverdier/potensrekker (fordi de er borte i det nyeste regimet). Se den separate V2025-kolonnen i del 1 og prognosen i del 7.

**Viktigste funn:**
1. **Multiple integraler og potensrekker var de to mest stabile temaene** gjennom hele arkivet fram til 2024 — praktisk talt garantert hvert år. Potensrekker forsvant helt i V2025, men er så tungt forankret i 17 tidligere sett og i formelsamlingen at boken må dekke dem grundig.
2. **Egenverdier + lim Aⁿv (Markov)** var den faste åpningsoppgaven 2019/2022/2024 og en gjenganger tilbake til 2007 — men **null forekomster i alle tre V2025-settene**. Dette er den tydeligste enkeltmarkøren på regimeskiftet.
3. **Vektoranalyse-trioen Green–Gauss–Stokes** var før 2025 representert **kun ved Green i planet**. V2025 innførte full 3D-vektoranalyse: fluks gjennom flate, divergensteoremet for å finne fluks gjennom en krum delflate, og Stokes for et linjeintegral. Dette er det nye tyngdepunktet.
4. **Emnebeskrivelsen nevner Taylor i flere variable og differensiallikninger — begge har 0 forekomster i 22 sett.** Numeriske metoder opptrer bare som kontraksjon/Newton-iterasjon (2018, 2021). Boken må dekke Taylor og difflikninger fordi de står i emnebeskrivelsen, men eksamenstreningen kalibreres mot de dokumenterte sjangrene.
5. **Optimering og omvendt/implisitt funksjonsteorem er stigende** (Lagrange 3/3 og funksjonsteoremene 3/3 i V2025), i tråd med det nye regimets vekt på flervariabel analyse.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med fasitens foretrukne metode (metode verifisert mot de tre V2025-fasitene der temaet forekommer der; for temaer som bare finnes i eldre sett uten fasit er metoden den faglig etablerte standarden, merket ⚠️).

### A. Basis / inverterbarhet / invers matrise (radreduksjon)
- **Krav:** Skriv vektorene som **søyler** og radreduser. Fasitens faste grep: reduser til trappeform med **eksplisitt merkede radoperasjoner** over hvert `∼`-tegn (f.eks. `II−2I, III+I`), konkluder «radekvivalent med `Iₙ` ⇒ søylene danner basis / matrisen er inverterbar». For **invers matrise**: radreduser den utvidede `[A | Iₙ]` til `[Iₙ | A⁻¹]` og les av de tre siste søylene (V2025 konte O1a, prøve O1a). Varianter fra arkivet: redusert trappeform + plukk lineært uavhengige søyler + utvid til basis for ℝⁿ (2019 O3), løsbarhet av `Ax=b` avhengig av parameter (2005, 2006, 2011, 2013), basis for nullrom/søylerom (2004, 2006, 2010).
- **Frekvens:** 14/20; nesten alltid O1 i det nye regimet.
- **Omskrevet eksempel:** «Avgjør om de tre gitte vektorene i ℝ³ danner en basis.»

### B. Egenverdier, egenvektorer og lim Aⁿv (Markov/potens)
- **Krav:** Løs `det(A − λI) = 0` (formelsamlingen gir `det(λI − A) = 0`), finn egenvektorer fra `(A − λI)v = 0`. For `lim Aⁿv`: **skriv `v` som lineærkombinasjon av egenvektorene**, da er `Aⁿv = Σ cᵢ λᵢⁿ vᵢ`; ledd med `|λ|<1` dør ut, `λ=1` gir stasjonær komponent (stokastisk/Markov-matrise), `|λ|>1` divergerer. To gyldige veier: (a) egenvektordekomponering (ryddigst, brukt i 2022/2024), (b) diagonalisering `A = PDP⁻¹ ⇒ Aⁿ = PDⁿP⁻¹`. Anvendte innkledninger i arkivet: befolkning/bestand (2007, 2008), tilhengerutleie (2009), generell Markov (2016, 2019, 2022, 2024).
- **Frekvens:** egenverdier 14/20, lim Aⁿv 12/20 — **men 0/3 i V2025**. ⚠️ ingen offisiell fasit i arkivet for disse.
- **Omskrevet eksempel:** «Finn egenverdiene og egenvektorene til den gitte 2×2-matrisen, skriv startvektoren som en lineærkombinasjon av egenvektorene, og bestem grensen av `Aⁿx₀`.»

### C. Diagonalisering med anvendelse (matrise-kvadratrot, spektralbasis)
- **Krav:** ⚠️ `A = PDP⁻¹`; anvend på `A^(1/2)` ved å ta kvadratrot av `D` (2011, 2017: finn alle `X` med `X² = A`), eller ortogonal egenvektorbasis for symmetriske matriser / spektralteorem med multiplisitet (2015 O5). Symmetrisk ⇒ reelle egenverdier og ortogonal diagonalisering.
- **Frekvens:** 3/20 (2011, 2015, 2017). Kun eldre regime.

### D. Omvendt / implisitt funksjonsteorem via Jacobi-matrise
- **Krav:** Regn Jacobi-matrisen `F′`, evaluér i punktet, og **koble inverterbarheten til en foregående deloppgave** (fasiten gjenbruker eksplisitt at matrisen alt er vist inverterbar — V2025 konte O1b bruker inversen fra O1a). Omvendt funksjon: `G′(F(a)) = F′(a)⁻¹`. Implisitt `g` av `f(x, g(x)) = 0`: sjekk først `f(a,b)=0`, deretter `∂f/∂y(a,b) ≠ 0`, så `g′ = −(∂f/∂x)/(∂f/∂y)` (V2025 ordinær O2; 2024 O5 for `∂g/∂x, ∂g/∂y`; 2011, 2012). Formelsamlingen gir begge formlene.
- **Frekvens:** 6/20, stigende (3/3 i V2025). Offisiell fasit finnes (V2025).
- **Omskrevet eksempel:** «Vis at det finnes en funksjon `g(x)` med `g(1)=0` og `f(x, g(x))=0` nær `x=1`, og finn `g′(1)`.»

### E. Stasjonære punkter + Hesse-klassifisering
- **Krav:** Løs `∇f = 0` — fasiten **reduserer likningssystemet substitusjonsvis til én variabel** (typisk `x = x⁴ ⇒ x = 0, 1`, eller `y = −y² ⇒ y = 0, −1`). Klassifiser med Hesse-determinanten `D = f_xx·f_yy − f_xy²` (formelsamlingens annenderiverttest): `D<0` sadelpunkt; `D>0` og `f_xx>0` lokalt min; `D>0` og `f_xx<0` lokalt maks. Fasiten setter **alltid opp Hesse-matrisen eksplisitt** før konklusjon (alle tre V2025-sett).
- **Frekvens:** 12/20. Offisiell fasit finnes (V2025 ×3).
- **Omskrevet eksempel:** «Finn de stasjonære punktene til `f(x,y) = x³ − 3xy + y³` og klassifiser dem.»

### F. Lagrange / betinget optimering
- **Krav:** Sett `∇f = λ∇g`. Fasitens faste disiplin: **sjekk først om `∇g = 0` er mulig** på bibetingelsen (enten er `∇g=0`-punktet en ekstra kandidat som oppfyller bibetingelsen — V2025 ordinær O4 — eller det utelukkes fordi det ikke ligger på flaten — V2025 konte O3/prøve O3). Del i tilfeller (`λ = …` vs. variabel `= 0`), finn **alle** kandidatpunkter, **evaluér `f` i hver** og les av min/maks. Når eksistens skal begrunnes: bruk **ekstremalverdisetningen** på en lukket og begrenset (kompakt) mengde (V2025 ordinær O4 konstruerer eksplisitt `K = {f ≤ 2, g = 0}` og viser den er ikke-tom, lukket og begrenset; 2018 O2 og 2019 O5 på område avgrenset av ellipse). **Fasiten påpeker når begrunnelse ikke forventes** — les oppgaveteksten. 2024 O6 ga eksplisitt hint: eliminér `λ` først og spesialbehandl `x=0`/`y=0`.
- **Frekvens:** 12/20, stigende (3/3 i V2025). Offisiell fasit finnes (V2025 ×3).
- **Omskrevet eksempel:** «Finn minimumsverdien til `f(x,y,z) = (x−1)² + y² + (z−3)²` under bibetingelsen `2x² + y² = 2z²`.»

### G. Dobbeltintegral over område avgrenset av kurver
- **Krav:** Finn skjæringspunktene ved å løse kurvene mot hverandre, beskriv området som `{a ≤ x ≤ b, u(x) ≤ y ≤ v(x)}`, integrer innerst i `y`. Fasiten regner rutinemessig indre integral først og forenkler (V2025 ordinær O5a gir `32/3`). To gyldige rekkefølger (`dy dx` vs. `dx dy`) — velg den som unngår oppdeling. Polarkoordinater når området er sirkulært (2024 O3a, `1/(1+x²+y²)` over halvskive). Volum mellom to flater/paraboloider som dobbeltintegral er en klassiker (2005, 2006, 2007, 2009, 2012, 2015, 2019).
- **Frekvens:** dobbeltintegral 19/20 (nesten alltid). Offisiell fasit finnes.
- **Omskrevet eksempel:** «La `A` være området i første kvadrant over `xy=5` og under `x+y=6`. Regn ut `∬_A y dx dy`.»

### H. Uegentlig dobbelt-/trippelintegral — konvergens
- **Krav:** Definér en voksende følge kompakter `Kₙ = {|x|,|y| ≤ n}` (eller `K_R` med radius `R`), regn `∬_{A∩Kₙ}` og ta grensen `n→∞`. Divergens hvis grensen er `∞` (V2025 prøve O4: `½ ln n → ∞`). Samme teknikk for uendelig rom-område med grense (2018 O1b: `lim_{R→∞} I_{K_R}` i kulekoordinater).
- **Frekvens:** ~3/20 (2018, V2025 prøve), men gjennomgående sjanger. Offisiell fasit finnes (V2025 prøve).

### I. Trippelintegral i sylinder-/kulekoordinater (volum)
- **Krav:** Velg koordinatsystem etter symmetri: **sylinder** for kjegle/paraboloide/sylinder (`dV = r dz dr dθ`), **kule** for kuleskall (`dV = ρ² sin φ dρ dφ dθ`). Fasiten beskriver **alltid området med eksplisitte ulikheter** for `r, θ, z` (eller `ρ, φ, θ`) før oppsett, og **faktoriserer integralet** i produkt av enkeltintegraler når integranden tillater det (V2025 ordinær O6b faktoriserer `r`-del og `θ`-del; konte O5). Volum = `∭ 1 dV`. **Løs skjæringen først** (V2025 konte O5: `√(r²+1) = √(9−r²) ⇒ r=2`; 2019 to paraboloider; 2004/2008/2011 kjegle møter kule).
- **Frekvens:** 10/20. Offisiell fasit finnes (V2025 ×2).

### J. Linjeintegral med Greens teorem
- **Krav:** For lukket kurve i planet: `∮_C P dx + Q dy = ∬_A (∂Q/∂x − ∂P/∂y) dA`. Fasiten identifiserer `P, Q`, regner integranden, og **reduserer ofte til et allerede kjent integral** (V2025 ordinær O5b gir `∬(−3y) = −32` ved gjenbruk fra O5a). Areal via Green: `A = ∮_C x dy = −∮_C y dx` (2015, 2017, 2004). Direkte parametrisering av `C` er gyldig alternativ, men Green er den forventede veien når kurven er lukket. Konservativt felt: hvis `∂P/∂y = ∂Q/∂x` er integralet langs lukket kurve `= 0` (2006, 2021).
- **Frekvens:** 12/20. Offisiell fasit finnes (V2025 ordinær).
- **Omskrevet eksempel:** «La `C` være randkurven til `A` orientert mot klokka. Regn ut `∮_C (x⁴+y²) dx − xy dy`.»

### K. Flateintegral: skalar `∫ f dS` og fluks `∫ F·n dS`
- **Krav:** Parametriser flaten `ϕ(u,v)`, regn det **fundamentale vektorproduktet** `ϕ_u × ϕ_v`, og bruk `dS = |ϕ_u × ϕ_v| du dv` (skalar) eller `F·n dS = F·(ϕ_u × ϕ_v) du dv` (fluks — **sjekk at vektorproduktet peker samme vei som oppgitt `n`**, ellers bytt fortegn). ⚠️→✅ Fasiten viser **to gyldige metoder** for fluks gjennom en plan flate (V2025 ordinær O6a): **(1)** geometrisk (`n = k ⇒ F·n = 1 ⇒ integralet = arealet = 4π`), **(2)** full parametrisering. Bruk den geometriske snarveien når flaten er en plan disk med konstant integrand. Skalar-varianten dekker flateareal (V2025 prøve O5: `y²` over sylinderflate; 2024 O3b: areal av `z = 9−x²−y²`; 2005 O4b).
- **Frekvens:** 4/20 ordinært, men **3/3 i V2025-regimet**. Offisiell fasit finnes (V2025 ×3).

### L. Gauss' divergensteorem (3D) — NY signaturoppgave fra 2025
- **Krav:** `∭_V div F dV = ∯_{∂V} F·n dS`. Brukes til å finne **fluks gjennom en krum delflate `T₁`** ved å regne volumintegralet av `div F` og trekke fra fluksen gjennom den plane delen `T₂`: `∫_{T₁} F·n dS = ∭_V div F dV − ∫_{T₂} F·n dS` (V2025 ordinær O6c: `3·(8π/5) − 4π = 4π/5`; konte og prøve O6c tilsvarende). Kontroller at alle `n` peker **ut av** `V`.
- **Frekvens:** 1/20 ordinært, men **3/3 i V2025-regimet**. Offisiell fasit finnes (V2025 ×3). **Aldri før 2025.**

### M. Stokes' teorem — NY (kun konte 2025 så langt)
- **Krav:** `∮_C F·dr = ∬_T curl F·n dS`. Fasiten regner `curl F`, **gjenkjenner at det er lik et allerede utregnet vektorfelt** (V2025 konte O6: `curl F = G`, og `G·n`-integralet er alt regnet i O6b), og bruker at bidraget fra resten av randkurven forsvinner fordi `F = 0` på de øvrige linjestykkene. Kontroller orienteringen (høyrehåndsregel `n ↔ C`).
- **Frekvens:** 0/20 ordinært, 1/3 i V2025-regimet. Offisiell fasit finnes (V2025 konte).

### N. Potensrekker: konvergensområde og sum
- **Krav:** ⚠️ Konvergensradius via **forholdstesten** (`lim |aₙ₊₁/aₙ|`) eller rottesten; **sjekk deretter endepunktene separat** (glemte endepunkt er klassisk poengtap). Sum: manipuler mot **geometrisk rekke** eller en kjent Taylor-rekke fra formelsamlingen (`eˣ`, `ln(1−x)`, `arctan x`, `1/(1−x)`), og **deriver/integrer leddvis** (2022 O3c bruker summen av `Σ xⁿ/(n+1)` til å vise `Σ 1/((n+1)2ⁿ) = 2 ln 2`; 2016, 2019 O4, 2010 O3, 2006 O3b). To veier til summen: (a) gjenkjenn direkte mot en formelsamlingsrekke, (b) sett opp en hjelpefunksjon og deriver/integrer leddvis.
- **Frekvens:** 17/20 — **men 0/3 i V2025**. Ingen offisiell fasit i arkivet.
- **Omskrevet eksempel:** «Finn konvergensområdet til `Σ xⁿ/(n+1)`, og finn et lukket uttrykk for summen.»

### O. Tallrekker: konvergenstester (ikke-potens)
- **Krav:** ⚠️ Forholds-/rot-/sammenlignings-/integraltest; alternerende rekker (Leibniz); betinget vs. absolutt konvergens (2021 O1a–b som teori). Anvendelse mot forventningsverdier (`Σ n pⁿ`, 2006 O3c).
- **Frekvens:** 5/20.

### P. Kontraksjon / fikspunkt / Newtons metode i flere variable
- **Krav:** ⚠️ Vis kontraksjon ved at operatornormen / største egenverdi i tallverdi er `< 1` (2018 O4c: `F(x)=Ax` er kontraksjon fordi begge `|λ|<1`). Fikspunkt-iterasjon `zₙ₊₁ = F(zₙ)` konvergerer mot det entydige fikspunktet (2021 O3d). Newton for system: iterér `xₙ₊₁ = xₙ − F′(xₙ)⁻¹F(xₙ)` (formel utdelt). To gyldige normvalg for kontraksjonsbeviset: spektralradius eller en indusert matrisenorm.
- **Frekvens:** 3/20 (2018, 2021). Ingen offisiell fasit i arkivet.

### Q. Variabelskifte / Jacobideterminant i multiple integraler
- **Krav:** ⚠️ `∬_D f dx dy = ∬_S f · |∂(x,y)/∂(u,v)| du dv`. Typisk ellipse-/ellipsoidekoordinater der Jacobideterminanten regnes eksplisitt (2005, 2010, 2013). Formelsamlingen gir polar-, sylinder- og kulekoordinatenes Jacobideterminanter.
- **Frekvens:** 3/20 (eldre regime).

### R. Øvrige eldre sjangre (lav frekvens)
- ⚠️ **Nivåkurver / grenser / kontinuitet i flere variable** (2010, 2013, 2014): kontinuitet i origo testet langs `y = ax`; kjeglesnitt-identifikasjon av snittkurver. **Buelengde av romkurve** (2004, 2005): `L = ∫ |r′(t)| dt`. **Kjerneregel / funksjonell avhengighet via Jacobi** (2009, 2013). **Minste kvadrater** som globalt minimum av `|Ax−b|²` (2017). **Lineær algebra-teoribevis** (2006: snitt av underrom; 2007/2008: stokastiske matriser, følgekonvergens `Axₙ→0`).

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de tre V2025-fasitene)
1. **Begrunn alle svar; vis nok mellomregninger.** Ordrett instruks i alle sett. Ubegrunnet svar gir ikke full uttelling selv om det er riktig.
2. **Teoremer skal navngis** når de bærer argumentet: implisitt/omvendt funksjonsteorem, ekstremalverdisetningen (for eksistens av min/maks på kompakt mengde), Greens teorem, divergensteoremet, Stokes' teorem, annenderiverttesten. Fasiten skriver «Ifølge omvendt funksjonsteorem …», «ifølge ekstremalverdisetningen …» eksplisitt.
3. **Føringsstandard:** radoperasjoner **merkes over `∼`-tegnet** (`II−2I`); integrasjonsgrenser skrives eksplisitt som ulikheter for området **før** oppsett; substitusjon bokføres (`u = r²`, nye grenser); svar oppgis som **eksakt verdi** (`32/3`, `8π/5`, `4π/5`, `−π²/4`), aldri desimaltilnærming.
4. **Delpunktgjenbruk er designet inn:** fasiten kobler eksplisitt tilbake (konte O1b bruker `A⁻¹` fra O1a; O6c bruker O6a+O6b). Å gjenkjenne koblingen premieres.
5. **Begrunn eksistens kun når det kreves — men da riktig.** Fasiten bemerker uttrykkelig når begrunnelse **ikke** forventes («Slik oppgaven er formulert, forventes det ikke at man skal begrunne …», V2025 ordinær O4 / konte O3). Når den kreves: ekstremalverdisetningen med mengden vist **ikke-tom, lukket og begrenset**.
6. **Orientering og fortegn i vektoranalyse:** fasiten sjekker **hver gang** at `ϕ_u × ϕ_v` peker samme vei som oppgitt `n` (og bytter fortegn ellers), og at randkurvens orientering matcher normalen (høyrehåndsregel).
7. **Alternative løsninger honoreres:** fasiten viser eksplisitt **to fullverdige metoder** for plan-fluks (geometrisk snarvei vs. full parametrisering, V2025 ordinær O6a). Egenvektordekomponering og diagonalisering er begge godtatt for `lim Aⁿv`.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: radreduksjon til trappeform, `∇f = 0` + Hesse-oppsett, standard dobbeltintegral med riktige grenser, oppsett av trippelintegral i riktige koordinater.
- **Midtsjiktet** behersker i tillegg: Lagrange med korrekt tilfelledeling og evaluering av alle kandidater, konvergensområde for potensrekke **med endepunktsjekk**, `lim Aⁿv` via egenvektordekomponering, Green på lukket kurve.
- **Toppsjiktet** kjennetegnes av: (i) korrekt bruk av **funksjonsteoremene** (sjekk `f(a,b)=0` og `∂f/∂y ≠ 0` før implisitt derivasjon; koble Jacobi-inverterbarhet til foregående deloppgave); (ii) **eksistensbegrunnelse** med ekstremalverdisetningen på en eksplisitt konstruert kompakt mengde; (iii) **fortegns-/orienteringskontroll** i fluks- og Stokes-oppgaver; (iv) å se og bruke delpunkt-koblingene (bruke O6a+O6b i O6c via divergensteoremet); (v) sum av potensrekke ved leddvis derivasjon/integrasjon med korrekt konvergensbegrunnelse.

---

## 5. Typiske feil (bygget inn i oppgavene eller synlige i fasitpraksis)

1. **Glemt endepunktsjekk** i konvergensområdet for potensrekker — klassisk poengtap (temaet er i 17/20 sett).
2. **Feil fortegn i fluks:** `ϕ_u × ϕ_v` peker motsatt av oppgitt `n` — fasiten sjekker retningen eksplisitt hver gang; å hoppe over sjekken gir fortegnsfeil i hele O6-kjeden.
3. **Hoppet over `∇g = 0`-tilfellet i Lagrange:** enten glemmes kandidatpunktet der `∇g=0` (V2025 ordinær O4 hadde origo som gyldig ekstra kandidat), eller man unnlater tilfelledelingen (`λ = …` vs. variabel `= 0`) — begge gir feil min/maks.
4. **Feil integrasjonsgrenser når flater møtes:** kjegle mot kule/plan — fasiten løser skjæringen (`√(r²+1) = √(9−r²) ⇒ r=2`) **før** oppsett; å gjette grensene gir feil volum.
5. **Manglende eksistensbegrunnelse — eller feil sådan:** ekstremalverdisetningen krever at mengden er **lukket og begrenset**; å påstå min/maks uten kompakthet, eller å begrunne når det ikke kreves og bruke tiden feil.
6. **Radoperasjoner uten merking / feil avlesning:** ved invers matrise leses feil søyler av `[Iₙ | A⁻¹]`; radbytter bokføres ikke.
7. **`lim Aⁿv` uten egenvektordekomponering:** å prøve å regne `Aⁿ` direkte i stedet for å splitte `v` i egenvektorbasis; å glemme at `|λ|=1`-komponenten overlever mens `|λ|<1` dør.
8. **Divergensteoremet: feil normalretning på delflatene:** `n` må peke ut av `V` på **både** `T₁` og `T₂`; fortegnsfeil på `T₂` forplanter seg til `T₁`-svaret.
9. **Implisitt derivasjon uten forutsetningssjekk:** hopper over `f(a,b)=0` eller `∂f/∂y(a,b) ≠ 0` før `g′`-formelen brukes.
10. **Kontraksjon «vist» uten normargument:** å hevde kontraksjon uten å knytte det til `|λ| < 1` / operatornorm `< 1`.
11. **Desimaltilnærming i stedet for eksakt svar** der eksakt verdi forventes.
12. **Tidsfelle:** vektoranalyse-kjeden (O6a–c) og potensrekke-summering er tunge; å bruke for lang tid tidlig stjeler fra de dyre sluttoppgavene.

---

## 6. Teorem- og notasjonsapparat

### Utdelt formelsamling (må kunne brukes, ikke pugges)
Formelsamlingen (V2022) inneholder: Taylor-rekken og Taylors formel med restledd; geometriske og binomiske rekker; standard Taylor-rekker (`eˣ, sin, cos, ln(1−x), arctan`); gradient; kjerneregelen (matrise- og komponentform); linearisering `T_aF(x) = F′(a)(x−a) + F(a)`; normalvektor og tangentplan; **Newtons metode** `xₙ₊₁ = xₙ − (F′(xₙ))⁻¹F(xₙ)`; **annenderiverttesten** (`D = AC − B²`); **Lagranges multiplikatormetode**; derivasjon av omvendt og implisitt funksjon; hastighet/fart/akselerasjon/**buelengde**; linjeintegral av skalar- og vektorfelt; integral av gradient; nødvendig betingelse for konservativt felt; **variabelskifte** med Jacobideterminant; polar-/sylinder-/**kulekoordinater** med Jacobideterminanter; flateintegral (generelt og for `z = g(x,y)`); **Greens teorem**; kjeglesnitt; vektorprodukt og determinanter; `det(AB) = det(A)det(B)`, `det(A⁻¹) = 1/det(A)`; definisjon av lineæravbildning og affinavbildning; matrisen til en lineæravbildning; **egenvektor/egenverdi** og betingelsen `det(λIₙ − A) = 0`.

> **Merk:** Formelsamlingen gir Green, men **ikke** Gauss' divergensteorem eller Stokes' teorem eksplisitt (i V2022-utgaven). Studenten må kunne disse **utenat** — desto viktigere etter regimeskiftet. Sjekk om nyere formelsamling er utvidet.

### Må beherskes aktivt (kunne anvende og navngi)
- **Lineær algebra:** Gauss–Jordan-eliminasjon (trappeform / redusert trappeform); basis, lineær uavhengighet, søylerom, nullrom, rang; inverterbarhet ⇔ radekvivalent med `Iₙ` ⇔ `det ≠ 0`; invers via `[A|I] → [I|A⁻¹]`; egenverdier/egenvektorer; **diagonalisering** `A = PDP⁻¹` og `Aⁿ = PDⁿP⁻¹`; stokastiske/Markov-matriser og langtidsgrense; lineæravbildninger og deres matrise.
- **Flervariabel differensiering:** partiellderiverte; gradient; Jacobi-matrise `F′`; kjerneregel på matriseform; linearisering/tangentplan; **omvendt funksjonsteorem** (`G′ = (F′)⁻¹`) og **implisitt funksjonsteorem** (`g′ = −(∂f/∂x)/(∂f/∂y)`); annenderiverttesten (Hesse); **Lagrange** med `∇g=0`-sjekk og tilfelledeling; **ekstremalverdisetningen** på kompakt mengde.
- **Multiple integraler:** dobbelt- og trippelintegral; iterert integrasjon med områdebeskrivelse; polar-, sylinder- og kulekoordinater med riktig volumelement; variabelskifte med Jacobideterminant; uegentlige integraler via voksende kompakter.
- **Vektoranalyse:** parametrisering av kurver og flater; det fundamentale vektorproduktet `ϕ_u × ϕ_v`; linjeintegral av skalar- og vektorfelt; **Greens teorem**; skalar flateintegral og **fluks** `∫ F·n dS`; **Gauss' divergensteorem**; **Stokes' teorem**; `curl` og `div`; orientering/høyrehåndsregel; konservative felt.
- **Rekker:** forholds-/rot-/sammenlignings-/integraltest; alternerende rekker; potensrekkers konvergensradius og **endepunktanalyse**; summering ved geometrisk/kjent Taylor-rekke og leddvis derivasjon/integrasjon.
- **Numerikk/følger:** kontraksjonsprinsippet (`|λ| < 1` / norm `< 1`), fikspunktiterasjon, Newtons metode i flere variable.

### Bevis som kreves aktivt
Arkivet krever sjelden lange abstrakte bevis, men følgende «vis at …»-oppgaver forekommer og forventes gjennomført med navngitte teoremer og forutsetningssjekk:
- Vis at en implisitt/omvendt funksjon **eksisterer** (funksjonsteoremet + Jacobi-inverterbarhet). Fast i V2025.
- Vis at `f` har globalt min/maks under en bibetingelse (**ekstremalverdisetningen** på kompakt mengde). V2025, 2018, 2019.
- Vis at en avbildning er en **kontraksjon** (norm/egenverdi `< 1`). 2018, 2021.
- Vis en rekkeidentitet (sum av potensrekke → tallrekkesum). 2018, 2022.
- Vis basis/underroms-egenskaper eller egenskaper ved stokastiske matriser (`radstokastisk ⇒ egenvektor 1, |λ|≤1`). 2006, 2007, 2008 — eldre regime.
- Variabelskifte-formelen for dobbeltintegral (2013). Eldre regime.

### Må dekkes fordi emnebeskrivelsen krever det, men uten arkivbelegg
- **Taylor i flere variable** — 0 forekomster; Taylors formel med restledd står i formelsamlingen (én variabel).
- **Differensiallikninger / -systemer** — 0 forekomster i 22 sett.
Dekk begge med standardmetoder og merk kapitlene som «ikke arkivbelagt»; sjekk framtidige sett.

### Notasjonskonvensjoner boken bør speile
`∇f` gradient; `F′` Jacobi-matrise; Hesse `D = AC − B²`; radoperasjoner merket over `∼`; `dV = r dz dr dθ` (sylinder) / `ρ² sin φ dρ dφ dθ` (kule); `ϕ_u × ϕ_v` fundamentalt vektorprodukt; fluks `∫ F·n dS`; `curl F`, `div F`; egenverdibetingelse `det(λI − A) = 0`; eksakte svar understreket.

---

## 7. Prognose og prioritering

> Prognosen vekter **V2025-regimet (3 sett)** tyngst for neste ordinære eksamen (V2026), fordi tre uavhengige sett fra samme år viser et konsistent, bevisst temavalg. Men fordi det bare finnes ett år med det nye regimet, holdes det gamle regimets ryggrad (egenverdier, potensrekker) som **fullt beredskap**.

### Nivå 1 — må beherskes perfekt (bærer den nye eksamenen)
1. **Basis / inverterbarhet / invers matrise ved radreduksjon** — 70 % totalt, åpner alle V2025-sett. Merkede radoperasjoner, `[A|I] → [I|A⁻¹]`.
2. **Omvendt / implisitt funksjonsteorem via Jacobi** — 3/3 i V2025; koble til foregående inverterbarhet, sjekk forutsetninger.
3. **Stasjonære punkter + Hesse-klassifisering** — 60 %, fast i alle regimer; eksplisitt Hesse-matrise.
4. **Lagrange / betinget optimering** — 3/3 i V2025; `∇g=0`-sjekk, tilfelledeling, evaluer alle kandidater, ekstremalverdisetningen ved eksistens.
5. **Dobbeltintegral over område avgrenset av kurver** — 95 %; skjæringspunkter, korrekt grenser, polar ved sirkelsymmetri.
6. **Trippelintegral i sylinder-/kulekoordinater** — 50 %; løs skjæringen først, faktoriser integralet.
7. **Fluks-flateintegral + Gauss' divergensteorem** — 3/3 i V2025; fundamentalt vektorprodukt, fortegns-/orienteringskontroll, `T₁ = ∭ div F − T₂`. **Dette er det nye tyngdepunktet.**
8. **Linjeintegral med Greens teorem** — 60 %, fast i alle regimer.

### Nivå 2 — må kunne (bredde i poengfangsten + karakterskiller)
9. **Potensrekker: konvergensområde (med endepunktsjekk) + sum** — 85 % historisk, men 0/3 i V2025. Fortsatt høyt prioritert som beredskap; tung karakterskiller.
10. **Egenverdier + lim Aⁿv (Markov)** — 70 % historisk, 0/3 i V2025. Egenvektordekomponering; hold varm.
11. **Stokes' teorem** — ny (konte 2025); `curl F`, gjenkjenn alt utregnet felt, randbidrag som forsvinner.
12. **Uegentlig dobbelt-/trippelintegral (konvergens)** — voksende kompakter, `lim`.
13. **Skalar flateintegral / flateareal** — parametrisering + `|ϕ_u × ϕ_v|`.
14. **Diagonalisering med anvendelse** (matrise-kvadratrot, spektralbasis) og **kontraksjon/Newton** — lav frekvens, men dukker opp i teoritunge sett (2011, 2017, 2021).

### Nivå 3 — bør dekkes (lav arkivfrekvens / pensumkrav)
15. **Variabelskifte med Jacobideterminant** i multiple integraler (eldre sjanger).
16. **Nivåkurver / flervariable grenser / kontinuitet, buelengde, kjerneregel, minste kvadrater** — eldre regime; gir robusthet.
17. **Lineær algebra-teoribevis** (underrom, stokastiske matriser) — eldre regime.
18. **Taylor i flere variable og differensiallikninger** — 0 arkivforekomster, men i emnebeskrivelsen: dekk med standardmetoder, merk som ikke-arkivbelagt, sjekk nye sett.

### Konkret prognose for neste ordinære eksamen (V2026)
Basert på V2025-malen (mest sannsynlig scenario): **10 likt vektede deloppgaver over 4 timer**, ~6 hovedoppgaver, med:
- **O1:** basis/invers matrise (radreduksjon) + omvendt/implisitt funksjonsteorem via Jacobi.
- **O2–O3:** stasjonære punkter + Hesse; Lagrange betinget optimering (med eksistensbegrunnelse på kompakt mengde).
- **O4–O5:** dobbeltintegral over kurveavgrenset område (evt. uegentlig med konvergens); trippelintegral i sylinder-/kulekoordinater eller Greens teorem.
- **O6:** vektoranalyse-kjeden — parametrisert flate, fluks gjennom plan delflate, `div F` + trippelintegral, og fluks gjennom krum delflate via divergensteoremet (evt. Stokes-innslag).

**Beredskaps-scenario (dersom eldre regime gjenoppstår):** åpning med egenverdier + `lim Aⁿv`, én potensrekke-oppgave (konvergensområde + sum), og linjeintegral kun via Green i planet. Boken må trene begge løp. **Usikkerhetsmoment:** regimeskiftet hviler på ett år (tre sett); verifiser mot V2026-settet så snart det foreligger, og sjekk om formelsamlingen er utvidet med Gauss/Stokes.

### Progresjon fra MAT1100 (forgjengeren)
MAT1110 er andre kalkulusemne og bygger direkte på MAT1100:

| Bro-tema | I MAT1100 | Videreført/utvidet i MAT1110 |
|---|---|---|
| Gradient / retningsderivert | Introdusert, 100 % av settene (åpningsoppgave) | Forutsettes kjent; inngår i tangentplan, Lagrange, funksjonsteoremer |
| Jacobi-matrise / deriverbarhet i ℝ² | Så vidt introdusert (4/21) | Sentralt: omvendt/implisitt funksjonsteorem, kjerneregel |
| Matrisepotens / overgangsmatriser | Overgangsmatriser (57 %), determinant/inverterbarhet | Modnet til **egenverdier + diagonalisering + lim Aⁿv** (Markov) |
| Lineær algebra | Determinant, volum, invers 2×2, matrisepotens | Utvidet til **Gauss-eliminasjon, basis/nullrom/rang, egenverdier, lineæravbildninger** |
| Potensrekker | **0 forekomster** (men i emnebeskrivelsen) | **Migrert hit — 85 % av settene** |
| Integrasjon | Enkeltvariabel (teknikker, uegentlige, omdreiningsvolum) | **Multiple integraler** (dobbelt/trippel), variabelskifte, koordinatsystemer |
| Flervariable grenser / nivåkurver / mengdetopologi | Levde i 2003–2011, **borte etter 2012** («antatt pensumflytting til oppfølgeremnet») | **Bekreftet flyttet hit** — nivåkurver/kontinuitet i ℝ² i 2010–2014 |

Kort sagt: **MAT1100 = enkeltvariabel kalkulus + intro lineær algebra og flervariabel; MAT1110 = full flervariabel kalkulus (partiellderivasjon, optimering, multiple integraler, vektoranalyse) + full lineær algebra (eliminasjon, egenverdier, lineæravbildninger).** Boken bør forutsette MAT1100-verktøykassen (gradient, Jacobi-intro, determinant, matrisepotens) og bygge videre uten å repetere den, men eksplisitt bygge bro på de fire første radene over. Potensrekker er det tydeligste temaet som «egentlig» hører hjemme i MAT1100s emnebeskrivelse, men testes i MAT1110 — behandle det som et fullverdig MAT1110-kapittel.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MAT1110/`.

**Offisielle løsningsforslag lest grundig (3):**
- `losningsforslag/MAT1110_v25_eksamen_losning.pdf` (ordinær 30. mai 2025, full fasit)
- `losningsforslag/MAT1110_v25_konte_losning.pdf` (kontinuasjon 12. august 2025, full fasit)
- `losningsforslag/MAT1110_v25_proeveeksamen_losning.pdf` (prøveeksamen mai 2025, full fasit)

**Eksamensoppgaver lest grundig (5):** `eksamen/MAT1110_2025.pdf`, `2024.pdf`, `2022.pdf`, `2019.pdf`, `2018_norsk.pdf` (+ `2018_eng.pdf`, `2015_engelsk.pdf` finnes som språkvarianter). Utdelt **formelsamling** lest i sin helhet (vedlagt 2022-settet).

**Eksamensoppgaver kartlagt oppgave-for-oppgave for temaregistrering (15):** `eksamen/MAT1110_2004.pdf` … `MAT1110_2017.pdf` samt `2021.pdf` (temainventar per deloppgave, jf. del 2).

**Prøveeksamen (oppgavesett):** `eksamen/MAT1110_v25_proeveeksamen.pdf`.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad: `fagbeskrivelse-mat1110.md`).

**Forbilde:** `docs/hoyskole-boker/mat1100/EKSAMENSANALYSE.md` (forgjengeren; brukt til progresjonskartlegging) og `docs/hoyskole-boker/econ1310/EKSAMENSANALYSE.md` (8-delers strukturmal).

**Merknader om kildene:**
- **Hull i arkivet:** Ingen ordinære sett for **2020** og **2023**. **Ingen midtsemestereksamener** i arkivet (all analyse gjelder avsluttende eksamen). Offisiell fasit finnes **kun** for de tre V2025-settene; metodekrav for eldre sett (egenverdier, potensrekker, kontraksjon, variabelskifte) er utledet fra oppgavetekstene + den faglig etablerte standarden og er merket ⚠️ der de ikke er sensor-verifisert.
- **Regimeforbehold:** Det dokumenterte regimeskiftet (vektoranalyse inn, egenverdier/potensrekker ut) hviler på ett årskull (V2025, tre sett). Konklusjonene i del 1, 2 og 7 må reverifiseres mot første framtidige ordinære sett.
- **Språkvarianter:** 2015 og 2018 finnes i både norsk og engelsk utgave (identisk innhold).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.

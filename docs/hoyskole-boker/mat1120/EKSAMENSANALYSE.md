# Eksamensanalyse: MAT1120 Lineær algebra (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs eksamensarkiv for MAT1120 med **sju fullstendig gjennomgåtte sett med offisielle løsningsforslag** (H2018, H2019, H2020, H2021, H2022, H2022-utsatt/januar 2023 og H2024) samt de tilhørende oppgavesettene. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teoremnavn og standardnotasjon er fagfelles og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det. Søsteranalysene ligger i `../mat121-uib/` (UiBs dedikerte lineær-algebra-emne) og `../mat1110/` (UiOs kalkulus-2 med lineær-algebra-innslag); begge brukes til å plassere MAT1120 i landskapet.

> **Hovedfunn (les dette først):** MAT1120 er UiOs **dedikerte, teoritunge andrekurs i lineær algebra**, oppfølgeren til MAT1110, bygget tett på **David C. Lay, *Linear Algebra and Its Applications*** (notasjonen `Nul A`, `Col A`, `Row A`, `[x]_B`, `P_{C←B}`, `Span{…}`, `proj_W`, samt eksplisitte fasithenvisninger til «Teorem 6/7 i Seksjon 7.3», «Example 2, 6.7» og «Notat 1/2» røper Lay + emnets tilleggsnotater). Emnet er **usedvanlig stabilt i form og innhold**:
> - **Fast poeng- og oppgavestruktur i hele perioden:** eksamen har **10 deloppgaver som teller likt (10 poeng hver)**, gruppert i **4–5 hovedoppgaver** med bokstavdeler. Skriftlig skoleeksamen, **4 timer**, karakter A–F. To obligatoriske innleveringer må være godkjent.
> - **«Ingen hjelpemidler» — men alltid et vedlegg.** Hvert sett har et **vedlegg** som gjør den rå regnejobben: enten en **Matlab-utskrift** (`rref`, `poly`, `eig`) eller (fra 2024) et ark med **ferdige reduserte trappeformer**. Studenten skal *lese* pivoter/RREF/karakteristisk polynom fra vedlegget, ikke radredusere store matriser for hånd. Det flytter belastningen fra regning til **argumentasjon og begrepsbruk**.
> - **Bredden er nesten identisk fra år til år.** Fire søyler er praktisk talt garantert hvert eneste sett: (1) `Col A`/`Nul A`/basis fra RREF, (2) egenverdier/diagonalisering, (3) **et abstrakt vektorrom** (polynomrom `Pₙ` eller funksjonsrom) med koordinater/matriserepresentasjon, og (4) ortogonalitet/minste kvadrater — ofte i et **ikke-standard indreprodukt** (vektet, integral eller evaluering). Symmetriske matriser/spektralteorem og kvadratiske former dekker resten.
>
> Den viktigste forskjellen mot søsteremnet MAT121 (UiB): MAT1120 er **mer abstrakt og bevisorientert**. Der MAT121 tester determinant-regneregler, matriseinvers-mekanikk og parameteranalyse av likningssystemer som egne temaer, forutsetter MAT1120 alt dette som kjent fra MAT1100/MAT1110 og bruker tiden på **abstrakte vektorrom, indreproduktrom, spektralteori, SVD og diff.likningsanvendelser**. Et abstrakt vektorroms-problem forekommer i **100 %** av MAT1120-settene mot ~30 % i MAT121.

---

## 1. Eksamensform og utvikling

MAT1120 (10 studiepoeng, undervises hver høst, forkunnskap MAT1110) vurderes med **én avsluttende skriftlig skoleeksamen på 4 timer**, karakterskala A–F. Eksamen teller 100 %; **to obligatoriske innleveringer** må være godkjent for at man skal få gå opp. Tillatte hjelpemidler er formelt **ingen**, men hvert oppgavesett kommer med et **vedlegg** (se under) som studenten aktivt skal bruke.

Standardinstruksen er trykt på hvert sett og er nesten ordrett lik fra år til år: eksamen består av **10 deloppgaver som teller likt (10 poeng hver)**, *alle svar må begrunnes*, og det må vises *nok mellomregning til at argumentene lett kan følges*. De ti deloppgavene er organisert i **4–5 nummererte hovedoppgaver** med bokstavdeler (1a, 1b, 2a …). Rene tallsvar uten utledning gir lite eller ingen uttelling.

### Vedlegget — det definerende trekket

MAT1120 er ikke åpen bok, men **det store regnearbeidet er tatt bort ved et vedlegg**:

| Periode | Vedleggstype | Hva studenten skal lese ut |
|---|---|---|
| H2018–H2022-u | **Matlab-utskrift** bakerst i settet | `rref(A)` (reduserte trappeformer), `poly(A)` (karakteristisk polynom), `eig`/`[V D]=eig` (egenverdier + ortonormale egenvektorer) |
| H2024 → | **«Redusert trappeform av matriser»** — eget vedleggsark | Ferdige RREF-er av oppgavens matriser (samme funksjon som Matlab-`rref`, uten Matlab-innpakningen) |

Konsekvensen for både student og lærebok: **radreduksjon og karakteristisk polynom for store/stygge matriser skal ikke gjøres for hånd** — man siterer vedlegget («Fra vedlegget/Matlab-utskriften ser vi at RREF er …») og bruker resultatet. Fasitene gjør nettopp dette gjennomgående. Det som testes er **hva pivotmønsteret betyr** (basis, rang, avhengighetsrelasjoner) og **hvordan resultatet brukes videre**, ikke selve radoperasjonene.

### Formathistorikk og avvik

| År | Dato / tid | Merknad |
|---|---|---|
| H2018 | 6. des, 14:30–18:30 | Matlab-vedlegg. Klassisk skoleeksamen. |
| H2019 | 4. des, 09:00–13:00 | Matlab-vedlegg; SVD bekreftet som eksamenstema (O4b). |
| H2020 | 4. des, 15:00–19:00 | **Hjemmeeksamen** («Se første siden i Inspera» for hjelpemidler) — pandemi-avvik, ikke normalen. |
| H2021 | 8. des, 09:00–13:00 | «Se Inspera» for hjelpemidler; Matlab-vedlegg. |
| H2022 | 29. nov, 09:00–13:00 | Ingen hjelpemidler; Matlab-vedlegg. |
| H2022-utsatt | 18. jan 2023, 09:00–13:00 | Kontinuasjon; ingen hjelpemidler; Matlab-vedlegg. |
| H2024 | 11. des, 09:00–13:00 | Ingen hjelpemidler; **nytt vedleggsformat** (ferdige RREF-ark i stedet for Matlab). |

**Konstanter på tvers av alle settene:**
- **10 deloppgaver à 10 p, fast.** Ingen flervalg, ingen frivillige ekstrapoeng-oppgaver — alt er skriftlig langsvar med begrunnelseskrav.
- **Bred, jevn dekning.** Ett sett treffer nesten alltid: (1) `Col/Nul`/basis, (2) egenverdier/diagonalisering, (3) abstrakt vektorrom + matriserepresentasjon, (4) ortogonalitet/minste kvadrater/indreprodukt, og som regel (5) symmetriske matriser + kvadratisk form, pluss et innslag av SVD, diff.likninger, dynamiske systemer eller et kort bevis.
- **Pene tall.** Egenverdiene er små heltall, RREF-ene går opp — vedlegget garanterer at regningen «blir pen».
- **Delpunktene er kjedet.** Samme matrise/underrom gjenbrukes gjennom en hel hovedoppgave (H2024 O1: samme `A`/`C` brukes til basis → minste kvadrater → projeksjon; H2019 O1: samme `W` gjennom fire deler med to ulike indreprodukt). Å se koblingen sparer tid og er belønnet.

### Regimeobservasjon: stabilitet, ikke svingning

I motsetning til MAT121 (som har svingt mellom papir, Inspera-strukturert, flervalg og tilbake) har MAT1120 **beholdt samme skriftlige langsvarsformat med fast poengstruktur og vedlegg gjennom hele arkivet**. Det gjør prognosen usedvanlig treffsikker: neste ordinære eksamen vil med svært høy sannsynlighet være 10 deloppgaver à 10 p over 4 timer, med et RREF-/Matlab-vedlegg og de fire faste søylene. Boken kan kalibreres presist mot dette.

---

## 2. Temafrekvens-tabell

Grunnlag: de sju settene 2018–2024 med sikkert temainventar (fasit lest i sin helhet). «Andel» = hvor stor andel av de sju settene som testet temaet som egen deloppgave. Fordi hvert sett dekker hele bredden, ligger kjernetemaene høyt.

| Tema | Sett med temaet | **Andel** | Nivå |
|---|---|---|---|
| `Col A`/`Nul A`/basis/rang lest fra RREF (vedlegg) | 2018,19,20,21,22,22u,24 | **7/7 ≈ 100 %** | Kjerne |
| Egenverdier, egenvektorer, diagonaliserbarhet `A=PDP⁻¹` | 2018,19,20,21,22,22u,24 | **7/7 ≈ 100 %** | Kjerne |
| **Abstrakt vektorrom** (`Pₙ` / funksjonsrom) + koordinater | 2018,19,20,21,22,22u,24 | **7/7 ≈ 100 %** | Kjerne |
| Gram–Schmidt / ortogonal (ortonormal) basis | 2018,19,20,21,22,22u,24 | **7/7 ≈ 100 %** | Kjerne |
| Ortogonal projeksjon `proj_W` / minste kvadrater | 2018,19,20,21,22,22u,24 | **7/7 ≈ 100 %** | Kjerne |
| Matriserepresentasjon `[T]_B` av lineær avbildning | 2018,19,21,22u,24 (+ implisitt 20) | **~85 %** | Kjerne |
| Basisskifte / overgangsmatrise `P_{C←B}` | 2018,19,20,24 | **~60 %** | Kjerne |
| Ikke-standard indreprodukt (vektet / integral / evaluering) | 2018,19,20,22,24 | **~70 %** | Karakterskiller |
| Kvadratiske former: `Q=xᵀAx`, posdef, Rayleigh-maks, kjeglesnitt | 2018,20,21,22,24 | **~70 %** | Karakterskiller |
| Symmetriske matriser / spektralteorem / ortogonal diag. `A=PDPᵀ` | 2019,21,24 (+20 posdef) | **~55 %** | Karakterskiller |
| `Aᵏ` via `PDᵏP⁻¹` eller polynom i `A` | 2018,21,22 | **~40 %** | Bredde |
| Kort teori-/bevisoppgave | 2018(isomorfi),20,22u,24 | **~50 %** | Karakterskiller |
| Diff.likningssystem `x′=Ax` (egenverdianvendelse) | 2018,19 (+21 via `[T]_B`) | **~35 %** | Bredde |
| SVD / singulærverdidekomposisjon, `max‖Bx‖` | 2019,22u | **~30 %** | Bredde |
| `W⊥` / avstand til underrom / ortogonal dekomposisjon | 2018,20,22u,24 | **~55 %** | Karakterskiller |
| Diskret dynamisk system `xₖ₊₁=Axₖ` (langtid/normbevaring) | 2020 | **~15 %** | Bredde |
| Householder-/refleksjonsmatrise `I−2vvᵀ` | 2024 | **~15 %** | Bredde |
| Row A / radrom + koordinater `[v]_B` | 2022 | **~15 %** | Bredde |

**Viktigste funn:**

1. **Fem tema er praktisk talt garantert (≈100 %).** `Col/Nul`-basis fra RREF, egenverdier/diagonalisering, et abstrakt vektorrom, Gram–Schmidt og ortogonal projeksjon/minste kvadrater dukker opp i **hvert eneste sett**. Boken må gjøre disse til ryggmargsrefleks.

2. **Det abstrakte vektorrommet er MAT1120s signaturoppgave.** Hvert sett har én hovedoppgave i et *ikke*-`ℝⁿ`-rom: polynomrom `P₂`/`P₃` (2020, 2022, 2022-u, 2024) eller funksjonsrom (`Span{1, eˣcos x, eˣsin x}` i 2019, `Span{sin t, cos t}` i 2021, abstrakt `V` med basis i 2018). Typiske grep: vis underrom via de tre aksiomene; vis basis (lineær uavhengighet + dimensjon); finn matrisen `[T]_B` til en **derivasjons-/differensialoperator**; oversett `ker`/`Nul[T]_B` tilbake til funksjoner. Dette er den skarpeste forskjellen mot MAT121.

3. **Ortogonalitetsapparatet testes ofte i et fremmed indreprodukt.** ~70 % av settene bytter ut standardprikkproduktet med et **vektet** (`⟨x,y⟩=2x₁y₁+2x₂y₂+x₃y₃`, 2018/2019), **integral**-basert (`⟨p,q⟩=∫₋₂⁰ p q dt`, 2024) eller **evaluerings**-basert (`⟨p,q⟩=Σp(tᵢ)q(tᵢ)`, 2020/2022) indreprodukt. *Alle* skalarprodukt i oppgaven skal da regnes med den definisjonen — en klassisk felle.

4. **Minste kvadrater har to belønnede veier.** Enten **normallikningene** `CᵀCx̂=Cᵀb` (2019, 2020, 2022, 2024) eller **projeksjonssnarveien**: hvis `b=p+z` med `p∈W`, `z∈W⊥`, er `p=proj_W b` og enhver minste kvadraters løsning løser det konsistente `Ax=p` (elegant i 2018, gjenbrukt i 2024). Ved rangdefekt er løsningen **affin** (partikulær + `Nul A`).

5. **Symmetriske matriser samler tre tema i én oppgave.** En symmetrisk `A` gir (i) ortogonal diagonalisering `A=PDPᵀ` via spektralteoremet, som mater rett inn i (ii) **kvadratisk form** `Q=xᵀAx` (klassifisering/positiv definitthet/Rayleigh-maks `max{Q:‖x‖=1}=λ_max`) og (iii) **kjeglesnitt** (variabelskifte `x=Py` fjerner kryssleddet → ellipse/hyperbel, 2024). Denne kjeden er et fast karakterskille.

6. **Det som IKKE testes** (motsatt av MAT121): ren determinant-utregning og determinant-regneregler som eget tema, matriseinvers-mekanikk (`[A|I]`), Cramers regel, og eksistens/entydighet-parameteranalyse av likningssystemer. Alt dette forutsettes kjent fra MAT1100/MAT1110. Determinant brukes bare som verktøy (invertibel? `det≠0`; `det=Πλᵢ`).

---

## 3. Oppgavetype-katalog

Sjangrene som bærer MAT1120-eksamen, med fasitens foretrukne metode (utledet fra de sju offisielle løsningsforslagene).

### A. Kolonnerom / nullrom / basis / rang fra RREF (fast oppgave 1)
- **Krav:** Les RREF fra vedlegget. **Basis for `Col A`** = de opprinnelige **pivotkolonnene i `A`** (ikke de reduserte). Skriv ikke-pivotkolonnene som **lineærkombinasjoner** via avhengighetsrelasjonene som leses direkte av RREF (samme relasjoner i `A` som i `R`). **Basis for `Nul A`** = spesielle løsninger, én per fri variabel; `dim Nul A` = antall ikke-pivotkolonner; `rang` = antall pivoter. Variant: konstruer en matrise `B` med `AB=O` og gitt rang ved å plassere `Nul A`-vektorer som kolonner (2020).
- **Frekvens:** ~100 %, nesten alltid oppgave 1.
- **Omskrevet eksempel:** «Finn en basis for `Col A` bestående av kolonner i `A`, og skriv de øvrige kolonnene som lineærkombinasjoner av basisvektorene. Hva er `dim Nul A`?»

### B. Ortogonal basis (Gram–Schmidt) og ortogonal projeksjon
- **Krav:** Gram–Schmidt: `v₁=a₁`, `vₖ=aₖ−Σ_{i<k}(⟨aₖ,vᵢ⟩/⟨vᵢ,vᵢ⟩)vᵢ`. Skaler gjerne opp til heltallige vektorer underveis (fasiten gjør det). Projeksjon **etter** ortogonal basis: `proj_W y=Σ(⟨y,vᵢ⟩/⟨vᵢ,vᵢ⟩)vᵢ`. Avstand til `W`: `d=‖y−ŷ‖`. Basis for `W⊥`: `{y−ŷ}` (utnytt `dim W⊥ = dim(rom) − dim W`).
- **Frekvens:** ~100 % (Gram–Schmidt og/eller projeksjon).
- **Omskrevet eksempel:** «Finn en ortogonal basis for `Col A`, og bruk den til å projisere `b` ned i `Col A`. Finn avstanden fra `b` til `Col A`.»

### C. Minste kvadrater
- **Krav:** **Normallikningene** `CᵀCx̂=Cᵀb` (les den lille RREF-en fra vedlegget for å løse dem), eller **projeksjonssnarveien** `p=proj_W b ⇒ løs Cx=p`. Ved rangdefekt: løsningen er **affin** = partikulær + `Nul C`. Kobling: `proj_W b = Cx̂`.
- **Frekvens:** ~100 % (ofte samme oppgave som A/B).
- **Omskrevet eksempel:** «Finn en minste kvadraters løsning av `Cx=b`, og bruk den til å bestemme `proj_W b`.»

### D. Egenverdier, egenvektorer og diagonaliserbarhet
- **Krav:** Verifisér oppgitt egenvektor ved rett innsetting `Av=λv` (ikke via karakteristisk polynom når vektoren er gitt). Karakteristisk polynom hentes fra vedlegget (`poly`) når det trengs. **Diagonaliserbar ⇔ geometrisk multiplisitet = algebraisk multiplisitet** for hver egenverdi (egenvektorene utspenner hele rommet). Snarveier fasiten belønner: symmetrisk ⇒ diagonaliserbar (spektralteoremet); `n` **distinkte** egenverdier ⇒ diagonaliserbar (2021 O4, 2022-u O2a); triangulær ⇒ egenverdier på diagonalen (2019 O4a, 2024 O2). For **ikke**-diagonaliserbar: vis at et egenrom har for lav dimensjon (2019 O4a; 2024 O2 for `B`; 2022-u O2b for `α=0`).
- **Frekvens:** ~100 %.
- **Omskrevet eksempel:** «Avgjør om `A` og `B` er diagonaliserbare (du trenger ikke finne diagonaliseringen). Begrunn.»

### E. `Aᵏ` og polynom i `A`
- **Krav:** `Aᵏ` har egenverdier `λᵏ` med samme egenvektorer; regn `Aᵏ=PDᵏP⁻¹` (2018, 2022). For `B=q(A)` (polynom i `A`): hvis `Av=λv` er `Bv=q(λ)v`, så `B` deler egenvektorer med `A` og har egenverdier `q(λ)`; diagonaliseringen `B=PC P⁻¹` bruker **samme** `P` (2021 O5).
- **Frekvens:** ~40 %.
- **Omskrevet eksempel:** «Vis at enhver egenvektor for `A` også er egenvektor for `B=2I+A−A²`. Er `B` invertibel? Finn en diagonalisering av `B`.»

### F. Symmetriske matriser og spektralteorem
- **Krav:** Symmetrisk `A=Aᵀ` ⇒ **ortogonalt diagonaliserbar** `A=PDPᵀ` med **ortonormale** egenvektorer. Egenrom til ulike egenverdier er automatisk ortogonale; **normalisér**, og kjør Gram–Schmidt *innen* et egenrom med multiplisitet (2019 O2a, 2021 O2b). Dette er standardsvaret på «finn ortogonal `P` og diagonal `D` med `PᵀAP=D`».
- **Frekvens:** ~55 %.
- **Omskrevet eksempel:** «Begrunn at `A` er ortogonalt diagonaliserbar. Finn en ortogonal `P` og en diagonal `D` med `A=PDPᵀ`.»

### G. Kvadratiske former: definitthet, Rayleigh-maks, kjeglesnitt
- **Krav:** Skriv `Q(x)=xᵀAx` med **symmetrisk** `A` (kryssledd deles: `aᵢⱼ=½·koeffisient`). **Positiv definit ⇔ alle egenverdier `>0`** (2018 O3, 2020 O4a). **Rayleigh:** `max{Q(x):‖x‖=1}=λ_max`, oppnådd i egenvektoren til `λ_max` (Teorem 6, §7.3); begrenset til et underrom `v⊥x₀` gir nest største egenverdi (Teorem 7, §7.3) (2022 O3). Ulikheter som `Q(x)≤λ_max‖x‖²` bevises via spektral dekomposisjon eller `x=Py` (2021 O2c). **Kjeglesnitt:** variabelskifte `x=Py` (`P` ortogonal) eliminerer kryssleddet → les av ellipse/hyperbel/parabel (2024 O4b).
- **Frekvens:** ~70 %.
- **Omskrevet eksempel:** «Avgjør ved variabelskifte som fjerner kryssleddet om kurven `x₁²+2√3 x₁x₂−x₂²=2` er ellipse, hyperbel eller parabel, og skisser den.»

### H. Abstrakt vektorrom: polynomrom og funksjonsrom (signaturoppgaven)
- **Krav:** Behandle `Pₙ` (polynomer grad ≤ n) og funksjonsrom (`Span{1,eˣcos x,eˣsin x}`, `Span{sin t,cos t}`) som vektorrom. Vis **underrom** via de tre betingelsene (`0∈W`; lukket under `+` og `·`) — f.eks. `W={p∈P₃:p(−1)=0}` (2024 O3a). Vis **basis** (lineær uavhengighet + dimensjonsargument). Regn i **koordinatvektorer** `[v]_B`. Finn **overgangs-/basisskiftematrisen** `M` med `M[p]_C=[p]_B` ved å uttrykke `C`-vektorene i `B` (2019, 2024). Finn matrisen til en **derivasjons-/differensialoperator** `T(f)=f′` (2019, 2022-u) eller `Sf=f″−2f′+2f` (2019 O3c, som `[S]_B=[T]_B²−2[T]_B+2I`), og oversett `ker T`/`Nul[T]_B` tilbake til funksjoner.
- **Frekvens:** ~100 % (én hovedoppgave hvert sett).
- **Omskrevet eksempel:** «Vis at `W={p∈P₃:p(−1)=0}` er et underrom og at `B` er en basis. Finn overgangsmatrisen fra `C` til `B`. Med indreproduktet `⟨p,q⟩=∫₋₂⁰ p q dt`, finn en ortonormal basis for `W`.»

### I. Lineære avbildninger, matriserepresentasjon og basisskifte
- **Krav:** `[T]_B=[[T(b₁)]_B ⋯ [T(bₙ)]_B]`. Basisskifte: `[T]_C=P_{C←B}[T]_B P_{B←C}`, der `P_{B←C}` har `C`-vektorenes `B`-koordinater som kolonner og `P_{C←B}=(P_{B←C})⁻¹` (finnes via `[M|I]→[I|M⁻¹]`). `T` er **isomorfi ⇔ `[T]_B` invertibel** (2018 O4b). En likning `T(f)=g` har entydig løsning ⇔ `[T]_B` invertibel (2021 O3b).
- **Frekvens:** ~85 % (`[T]_B`); ~60 % (`P_{C←B}`).
- **Omskrevet eksempel:** «Finn `[T]_B` og `[T]_C`. Er `T` en isomorfi?»

### J. Diff.likningssystem `x′=Ax` og diskret dynamikk `xₖ₊₁=Axₖ`
- **Krav:** *Kontinuerlig:* generell løsning `x(t)=Σcᵢvᵢe^{λᵢt}` (krever egenvektorbasis); bestem `cᵢ` fra `Pc=x(0)` (2018 O2c, 2019 O2b). *Diskret:* dekomponér `x₀` i egenvektorbasis, `xₖ=Σcᵢλᵢᵏvᵢ`; bruk fortegn/tallverdi på `λᵢᵏ` til langtidsargument eller normbevaring (2020 O2b: `|λ|=1` gir konstant norm).
- **Frekvens:** ~35 % (kontinuerlig) + ~15 % (diskret).

### K. Singulærverdidekomposisjon (SVD)
- **Krav:** Regn `BᵀB`; hent egenverdier + ortonormale egenvektorer (fra vedlegg) → `V=[v₁ … vₙ]`; singulærverdier `σᵢ=√λᵢ` (synkende) på diagonalen i `Σ`; `uᵢ=(1/σᵢ)Bvᵢ` for `σᵢ>0`, utvid til ortonormal basis → `U`; `B=UΣVᵀ`. `max{‖Bx‖:‖x‖=1}=σ₁`, oppnådd i `v₁` (egenvektor til største egenverdi av `BᵀB`) (2019 O4b, 2022-u O3).
- **Frekvens:** ~30 %.
- **Omskrevet eksempel:** «Finn en ortogonal diagonalisering av `AᵀA`, oppgi singulærverdiene til `A` og en SVD `A=UΣVᵀ`.»

### L. Kort teori-/bevisoppgave
- **Krav:** Stramme, navngitte bevis. Dokumenterte varianter: `B` positiv definit ⇒ invertibel og `B⁻¹` positiv definit (via spektraldekomposisjon `B=PDPᵀ`, 2020 O4c); en ortogonal matrise er normbevarende (brukt i 2020 O4b); **Householder-refleksjon** `R=I−2vvᵀ` er ortogonal (`RᵀR=I`) og er geometrisk en speiling om hyperplanet `v⊥` (2024 O5); `T(f)=f′+f″` er lineær (2021 O3a); en matrise med sammenfallende egenverdier og for lavt egenrom er ikke diagonaliserbar (2022-u O2b). Sensor forventer at man siterer riktig teorem/definisjon og sjekker forutsetningene.
- **Frekvens:** ~50 %.

---

## 4. Sensorens krav

Utledet fra de sju offisielle løsningsforslagene og den trykte standardinstruksen.

### Faste metaregler
1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett: «du må begrunne alle svar, og du må vise nok mellomregninger til at man lett kan følge argumentene dine.» Riktig sluttsvar uten føring gir ikke full uttelling.
2. **Bruk vedlegget — ikke radreduser store matriser for hånd.** Fasiten skriver konsekvent «Fra vedlegget/Matlab-utskriften ser vi at RREF/karakteristisk polynom er …». Å radredusere en 4×5-matrise manuelt er bortkastet tid og en unødvendig feilkilde.
3. **Riktig basis-avlesning.** Basis for `Col A` = de **opprinnelige** pivotkolonnene i `A`, ikke de reduserte; avhengighetsrelasjoner leses av RREF; `Nul A`-basis = spesielle løsninger.
4. **Ortogonal basis før projeksjon.** Projeksjonsformelen gjelder bare for ortogonale basisvektorer — Gram–Schmidt må kjøres først. Og: i et **ikke-standard indreprodukt** skal *alle* skalarprodukt regnes med den oppgitte definisjonen.
5. **Diagonaliserbarhet skal begrunnes med multiplisitet.** Det holder ikke å påstå — sensor vil se enten (a) `n` distinkte egenverdier, (b) symmetrisk (spektralteoremet), eller (c) at hvert egenroms dimensjon = algebraisk multiplisitet. For ikke-diagonaliserbar: vis eksplisitt at et egenrom er for lite.
6. **`P` og `D` skal matche søyle for søyle**, og for ortogonal diagonalisering skal `P` ha **ortonormale** kolonner (`PᵀP=I`, ikke bare uavhengige egenvektorer).
7. **Riktig retning på basisskiftematrisen** (`P_{C←B}` vs. `P_{B←C}`), og riktig teoremhenvisning (fasiten peker på «Teorem 6/7, §7.3», «Notat 1/2» osv.).
8. **Delpunktgjenbruk er designet inn** — å se at samme matrise/underrom går igjen sparer tid og er belønnet.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på mekanikken: lese `Col/Nul`-basis fra RREF, verifisere en oppgitt egenvektor, sette opp normallikningene, kjøre Gram–Schmidt i standardprikkprodukt.
- **Midtsjiktet** behersker i tillegg: korrekt diagonalisering med `P`/`D`-samsvar, ortogonal diagonalisering av symmetriske matriser (normalisering + Gram–Schmidt innen egenrom), klassifisering av kvadratiske former, minste kvadrater ved rangdefekt (affin løsning), `[T]_B` for en derivasjonsoperator.
- **Toppsjiktet** kjennetegnes av: (i) sikker håndtering av **abstrakte vektorrom** (underroms- og basisbevis i `Pₙ`/funksjonsrom, `[T]_B`/`ker T` oversatt til funksjoner); (ii) **ikke-standard indreprodukt** brukt konsekvent (integral/vektet/evaluering, ortonormalisering med riktig norm); (iii) **SVD** komplett; (iv) **Rayleigh/kjeglesnitt** via spektraldekomposisjon; (v) korte **bevis** ført stramt med forutsetningssjekk (posdef ⇒ inverterbar, Householder ortogonal, isomorfi-kriterium).

---

## 5. Typiske feil

Utledet fra oppgavedesignet og de tilbakevendende fallgruvene i fasitene.

1. **Standard prikkprodukt der oppgaven har oppgitt et vektet/integral-/evaluerings-indreprodukt** — den vanligste MAT1120-fellen. Alle `⟨·,·⟩` i oppgaven skal regnes med den oppgitte definisjonen, også normen ved normalisering.
2. **Feil `Col A`-basis:** oppgir de *reduserte* pivotkolonnene i stedet for de opprinnelige kolonnene i `A`.
3. **Diagonaliserbarhet påstått uten multiplisitetssjekk** — glemmer å vise at geometrisk = algebraisk multiplisitet (eller å utnytte «symmetrisk»/«distinkte egenverdier»).
4. **Projeksjon uten ortogonal basis** — bruker projeksjonsformelen på en ikke-ortogonal basis uten å kjøre Gram–Schmidt først.
5. **Minste kvadraters løsning behandlet som entydig ved rangdefekt** — glemmer at den er **affin** (partikulær + `Nul C`) når `C` ikke har full kolonnerang.
6. **Ikke-normaliserte egenvektorer i `P`** der ortogonal diagonalisering kreves → `P` blir ikke ortogonal; eller glemt Gram–Schmidt innen et egenrom med multiplisitet.
7. **Radreduserer store matriser for hånd** i stedet for å lese vedlegget — tidssluk og feilkilde.
8. **Kvadratisk form med feil symmetrisering:** legger hele kryssleddskoeffisienten i `aᵢⱼ` i stedet for å dele på 2, så `A` blir feil/usymmetrisk.
9. **Feil retning på basisskiftematrisen** (`P_{C←B}` forvekslet med inversen `P_{B←C}`).
10. **Abstrakt vektorrom underbehandlet:** hopper over ett av underroms-aksiomene, eller glemmer dimensjonsargumentet i basisbeviset.
11. **`[T]_B`-kolonner i feil rom:** regner `T(bⱼ)` men glemmer å uttrykke resultatet i `B`-koordinater før det settes inn som kolonne.
12. **Ubegrunnet svar** — å oppgi et tallsvar (særlig på «avgjør om …»-oppgaver) uten det forlangte argumentet.

---

## 6. Teorem- og notasjonsapparat

### Hjelpemidler: bare vedlegget
MAT1120 er ikke åpen bok og har **intet formelark** — alt apparatet under må sitte utenat. Det eneste utdelte er vedlegget (RREF / Matlab-utskrift / karakteristisk polynom / egenverdier), som gjør den rå regningen, ikke teorien.

### Må beherskes aktivt (kunne anvende og navngi)
- **Fundamentale underrom:** `Nul A`, `Col A`, `Row A`; rang; dimensjonsteoremet `rang A + dim Nul A = antall søyler`; basis-avlesning fra RREF; avhengighetsrelasjoner.
- **Vektorrom (abstrakt):** underrom (tre betingelser), span, lineær (u)avhengighet, basis, dimensjon, koordinater `[x]_B`; **basisskifte** `[x]_C=P_{C←B}[x]_B`, `P_{B←C}=(P_{C←B})⁻¹`; polynomrom `Pₙ` og funksjonsrom.
- **Lineære avbildninger:** matriserepresentasjon `[T]_B`; `[T]_C=P_{C←B}[T]_B P_{B←C}`; kjerne/bilde; **isomorfi ⇔ `[T]_B` invertibel**; derivasjons-/differensialoperatorer.
- **Egenverdier:** `det(A−λI)=0`; egenrom `(A−λI)v=0`; algebraisk vs. geometrisk multiplisitet; **diagonalisering** `A=PDP⁻¹`, `Aᵏ=PDᵏP⁻¹`; polynom i `A` (`q(A)` har egenverdier `q(λ)`); kriteriet «distinkte egenverdier ⇒ diagonaliserbar».
- **Indreproduktrom:** indreprodukt (standard, **vektet**, **integral**, **evaluering**), norm, ortogonalitet; **Gram–Schmidt**; **ortogonal projeksjon** `proj_W` og dekomposisjonsteoremet `y=ŷ+z`; `W⊥`; avstand `‖y−ŷ‖`; ortogonale matriser (`PᵀP=I`, normbevarende).
- **Minste kvadrater:** **normallikningene** `CᵀCx̂=Cᵀb`; projeksjonssnarveien `proj_W b=Cx̂`; affin løsning ved rangdefekt; datatilpasning.
- **Symmetriske matriser:** **spektralteoremet** (reelle egenverdier, ortogonal diagonalisering `A=PDPᵀ`, ortogonale egenrom); spektral dekomposisjon.
- **Kvadratiske former:** `Q(x)=xᵀAx` med symmetrisk `A`; klassifisering av definitthet via egenverditegn; **Rayleigh** `max/min{Q:‖x‖=1}=λ_max/λ_min` (Teorem 6/7, §7.3); hovedaksesetningen / kjeglesnitt (`x=Py` fjerner kryssledd).
- **SVD:** `A=UΣVᵀ`; `V` fra egenvektorer til `AᵀA`, `σᵢ=√λᵢ`, `uᵢ=(1/σᵢ)Avᵢ`; `max‖Ax‖=σ₁`.
- **Anvendelser av egenverdier:** `x′=Ax` (`x=Σcᵢvᵢe^{λᵢt}`); diskret `xₖ=Σcᵢλᵢᵏvᵢ`.

### Bevis som kreves aktivt
~50 % av settene har en kort bevisdel. Studenten bør kunne føre: positiv definit ⇒ invertibel og `B⁻¹` positiv definit; ortogonal matrise er normbevarende; Householder/refleksjon `I−2vvᵀ` er ortogonal + geometrisk tolkning; en avbildning er lineær; ikke-diagonaliserbarhet via for lavt egenrom; isomorfi-kriteriet.

### Notasjonskonvensjoner boken bør speile (Lay + emnets notater)
`Nul A`, `Col A`, `Row A`, `rank A`; `[x]_B`; `P_{C←B}`; `Span{…}`; `proj_W y`; `W⊥`; `A=PDP⁻¹` / `A=PDPᵀ`; `Q(x)=xᵀAx`; normallikninger `CᵀCx̂=Cᵀb`; `A=UΣVᵀ`; `det(A−λI)=0`. Henvisninger i fasiten er til Lays kapitler (§6 indreproduktrom, §7 symmetriske matriser/kvadratiske former/SVD) og emnets «Notat 1/2» — boken bør speile Lays begrepsapparat og bruke vedleggslesing (RREF/`poly`/`eig`) som fast metode.

---

## 7. Prognose og prioritering

> Fordi formatet har vært **stabilt** gjennom hele arkivet (10 deloppgaver à 10 p, 4 timer, RREF-/Matlab-vedlegg, ingen andre hjelpemidler), er prognosen usedvanlig sikker. Boken kalibreres mot det fullt begrunnede skriftlige langsvarformatet med aktiv vedleggslesing.

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~100 % frekvens)
1. **`Col A`/`Nul A`/basis/rang fra RREF** — les vedlegget, avlest pivot-/avhengighetsstruktur. Den faste oppgave 1-kjeden.
2. **Egenverdier, egenvektorer, diagonaliserbarhet** `A=PDP⁻¹` (multiplisitetskriteriet + snarveiene symmetrisk/distinkt/triangulær).
3. **Abstrakt vektorrom** (`Pₙ`/funksjonsrom): underroms- og basisbevis, koordinater, `[T]_B` for derivasjons-/differensialoperator, `ker T`. MAT1120s signaturoppgave.
4. **Ortogonalitet:** Gram–Schmidt + ortogonal projeksjon + minste kvadrater — inkludert **ikke-standard indreprodukt** (vektet/integral/evaluering).

### Nivå 2 — må kunne (bredde + karakterskiller, ~55–70 %)
5. **Symmetriske matriser + spektralteorem** (`A=PDPᵀ`, ortonormale egenvektorer).
6. **Kvadratiske former:** definitthet, **Rayleigh-maks** (Teorem 6/7 §7.3), kjeglesnitt via variabelskifte.
7. **Lineære avbildninger + basisskifte** `[T]_C=P_{C←B}[T]_B P_{B←C}`, isomorfi-kriteriet.
8. **`W⊥`, ortogonal dekomposisjon, avstand til underrom.**

### Nivå 3 — bør dekkes (lavere frekvens / topp-poeng)
9. **SVD** (`A=UΣVᵀ`, `max‖Ax‖=σ₁`).
10. **Diff.likningssystem `x′=Ax`** og **diskret dynamikk `xₖ₊₁=Axₖ`** (normbevaring/langtid).
11. **`Aᵏ` og polynom i `A`** (`q(A)`, samme `P`).
12. **Kort teori-/beviskapittel:** posdef ⇒ inverterbar/`B⁻¹` posdef, Householder/refleksjon, normbevaring, ikke-diagonaliserbarhet, isomorfi.

### Konkret prognose for neste ordinære eksamen
Basert på den svært stabile malen: **4 timer, 10 deloppgaver à 10 p, RREF-/Matlab-vedlegg, ingen andre hjelpemidler, 4–5 hovedoppgaver:**
- **Oppgave 1:** `Col A`/`Nul A`-basis fra RREF (+ lineærkombinasjoner) → ortogonal basis (Gram–Schmidt) → ortogonal projeksjon / minste kvadrater. Ofte kjedet på samme matrise.
- **Oppgave 2:** egenverdier/diagonaliserbarhet (begrunn med multiplisitet); evt. symmetrisk → ortogonal diagonalisering.
- **Oppgave 3:** abstrakt vektorrom (`Pₙ`/funksjonsrom): underrom/basis + `[T]_B`/overgangsmatrise, ofte med et **ikke-standard indreprodukt** og Gram–Schmidt.
- **Oppgave 4:** symmetrisk `A` → kvadratisk form (klassifisering / Rayleigh-maks / kjeglesnitt), eller SVD.
- **Oppgave 5 (eller innbakt del):** kort bevis / geometrisk tolkning (refleksjon, positiv definitthet, normbevaring) eller en anvendelse (`x′=Ax` / `xₖ₊₁=Axₖ`).

**Usikkerhetsmoment:** liten. Hovedvariabelen er *hvilket* abstrakt rom (polynom vs. funksjon) og *hvilket* indreprodukt (integral/vektet/evaluering) som velges, og om SVD eller diff.likning fyller «anvendelsesplassen». Verifiser vedleggsformatet på nyeste sett (H2024 gikk fra Matlab-utskrift til rene RREF-ark) og sjekk gjeldende Lay-utgave.

### Plassering i emnelandskapet
| | MAT1120 (UiO) | MAT121 (UiB) | MAT1110 lin.alg.-del (UiO) |
|---|---|---|---|
| Rolle | **Dedikert 2. kurs**, teoritungt | Dedikert innføringskurs | Lin.alg. som del av kalkulus 2 |
| Forkunnskap | **MAT1110** | MAT111/MAT101 | MAT1100 |
| Hjelpemiddel | Ingen, men **RREF-/Matlab-vedlegg** | Kun kalkulator | Formelsamling + kalkulator |
| Abstrakt vektorrom (`Pₙ`/funksjon) | **~100 %** hvert sett | ~30 % | Sjelden |
| Ikke-standard indreprodukt | **~70 %** | ~35 % | Sjelden |
| SVD | **~30 %** (bekreftet) | ~0 % | Nei |
| `x′=Ax` / dynamiske systemer | **~35 % + 15 %** | Nei | Delvis |
| Determinant/invers/Cramer som eget tema | **Nei** (forutsatt) | Ja (~55–85 %) | Ja (grunnleggende) |
| Format | **Stabilt** 10×10 p, 4 t | Svingende (papir→flervalg→skoleeks.) | Skriftlig |

**Konsekvens:** MAT1120 og MAT121 dekker samme *pensumkjerne* (Lay), men MAT1120 er **mer abstrakt, mer bevisorientert og forutsetter mer**: determinant, matriseinvers, Cramer og likningssystem-parameteranalyse er skjøvet ned til MAT1100/MAT1110, og den frigjorte tiden går til abstrakte vektorrom, indreproduktrom, spektralteori, SVD og differensiallikningsanvendelser. Boken bør forutsette MAT1110-verktøykassen (radreduksjon, komplekse tall, grunnleggende egenverdier), gjøre **vedleggslesing** til fast metode i stedet for manuell radreduksjon, og legge tyngdepunktet på det abstrakte og teoretiske laget som skiller MAT1120 fra et førstekurs.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/MAT1120/`.

**Løsningsforslag lest i sin helhet (offisielle UiO-fasiter, grunnlag for hele analysen):**
`losningsforslag/MAT1120-H2018-losning.pdf`, `…-H2019-losning.pdf`, `…-H2020-losning.pdf`, `…-H2021-losning.pdf`, `…-H2022-losning.pdf`, `…-H2022-utsatt-losning.pdf` (kontinuasjon, avholdt 18.01.2023), `…-H2024-losning.pdf`. Hvert forslag inneholder også den fullstendige oppgaveteksten og vedlegget.

**Oppgavesett (uten fasit, redundante med løsningsforslagene):**
`eksamen/MAT1120-H2018.pdf`, `…-H2019.pdf`, `…-H2020.pdf`, `…-H2021.pdf`, `…-H2024.pdf`.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse, verifisert aktiv 2026 (scratchpad `fagbeskrivelse-mat1120.md`; kilde: <https://www.uio.no/studier/emner/matnat/math/MAT1120/>).

**Forbilde/mal:** `docs/hoyskole-boker/mat121-uib/EKSAMENSANALYSE.md` (samme pensumkjerne, UiB) og `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (forkunnskapsemnet), begge fulgt på 8-delers struktur.

**Merknader om kildene:**
- **Vedleggsforbehold:** Alle sett har et vedlegg (Matlab-utskrift 2018–2022-u; rene RREF-ark fra 2024). Fasitmetodikken forutsetter at vedlegget brukes; boken bør trene vedleggslesing, ikke manuell radreduksjon av store matriser.
- **Pandemi-avvik:** H2020 var hjemmeeksamen (endrede hjelpemiddelregler); H2021 hadde også Inspera-baserte hjelpemiddelinstrukser. Innhold og struktur var uendret.
- **Lærebok:** Notasjon og fasithenvisninger («Teorem 6/7, §7.3», «Example 2, 6.7», «Notat 1/2») identifiserer **David C. Lay, *Linear Algebra and Its Applications*** som pensumbok — boken bør speile Lays begrepsapparat og metodeføring, supplert med emnets egne notater.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, standardnotasjon og teoremnavn er fagfelles og ikke opphavsrettslig beskyttet.
</content>
</invoke>

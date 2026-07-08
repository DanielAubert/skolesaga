# Eksamensanalyse: TMA4145 Lineære metoder (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **~44 filer / 16 velkarakteriserte eksamenssett** fra arkivet (H2003–S2014). For hvert sett er selve oppgaveteksten lest oppgave-for-oppgave; de offisielle løsningsforslagene (`…lf.pdf`) er lest grundig der de finnes (H2003–H2013 samt kont. S2009 og S2010). De siste årenes sett (H2008–H2013, S2011–S2014) er gjennomgått særlig grundig; de eldste (H2003–H2007) er kartlagt tema- og metodemessig via oppgave- og løsningsfilene. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsformuleringer. Matematiske uttrykk, teoremnavn og metodenavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4145 er et **teoretisk, bevisorientert** emne i abstrakt lineær algebra med sterkt innslag av innledende funksjonalanalyse — helt annen sjanger enn kokebok-lineæralgebra à la TMA4110. Fire søyler er praktisk talt garantert på hvert sett: **(1) metriske rom + Banachs fikspunktteorem / kontraksjon** (ofte anvendt på Picard-iterasjon, Newtons metode eller integraloperatorer), **(2) beste approksimasjon / korteste avstand til et underrom** i et indreproduktrom (Gram–Schmidt + projeksjon **eller** minste kvadraters normallikninger — fasiten viser ofte begge), **(3) spektralteori** (egenverdier, diagonalisering, spektralteoremet, Jordan-form og matriseeksponential `exp(tA)` for `ẋ=Ax`), og **(4) indreprodukt-/Hilbert-rom-teori** (Cauchy–Schwarz, ortonormale følger, Bessel/Parseval, Riesz' representasjonsteorem, selvadjungerte/unitære/normale operatorer). Nesten hvert sett åpner med en **Oppgave 1 av ren teori** — enten «gi definisjonen av fire av følgende begreper» (Stacey-årene 2008–2011) eller en **sann/usann-oversikt på 10 utsagn** (Ehrnström-årene 2012–2013). **Alle svar skal begrunnes rigorøst** (unntatt Oppgave 1); dette er et emne der *bevisføring* premieres, ikke tallregning. Hjelpemiddelkode er **D** (kun godkjent enkel kalkulator, **ingen** formelsamling, notatark eller Rottmann) — studenten må altså **kunne teoremene og definisjonene utenat**. Viktigste utvikling: læreverket skiftet underveis (tidlig **Young, «Introduction to Hilbert Space»** med tung vekt på SVD/pseudoinvers og Fourier-beste-approksimasjon → senere mer Jordan-form/`exp(tA)`/completion-stoff), og sensorstilen skiftet fra Staceys «rudimentary/acceptable/good/excellent»-terskler til Ehrnströms poeng- og prosentskala.

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer**, bokstavkarakter A–F. Hjelpemiddelkode **D**: «ingen skrevne eller håndskrevne hjelpemidler; kun godkjent kalkulator (Citizen SR-270X eller HP30S)». Det finnes **intet vedlagt formelark** og **ingen tillatt formelsamling** — i motsetning til f.eks. TMA4135 (kode C med formelark). Det betyr at definisjoner, teoremformuleringer og standardbevis må sitte i hodet. Fast instruks på hvert sett: **alle svar skal begrunnes presist og rigorøst, med antakelser skrevet ned og argumenter rettferdiggjort** (unntatt oversikts-/definisjonsoppgaven).

Emnet er engelskspråklig i praksis; oppgavesettene finnes i engelsk hovedutgave, med bokmåls- (`bm`), nynorsk- (`nn`) og eldre norsk (`no`) parallellutgaver enkelte år.

### Formathistorikk

| Periode | Faglærer/stil | Oppgave 1 | Struktur | Karaktersetting |
|---|---|---|---|---|
| 2003–2007 | Idar Hansen / Christian Skau (Young-boka) | (varierende — noen sett åpner rett på teori/regning) | **4–7 oppgaver**, flerdelte; SVD/pseudoinvers og Fourier-beste-approksimasjon fremtredende | Ingen eksplisitt poengvekting trykt; jevn vekting underforstått |
| 2008–2011 | **Andrew Stacey** | **«Gi definisjonen av / formulér fire av følgende»** (rene teoribegreper) | **5 oppgaver**; hver oppgave flerdelt med **poeng per delpunkt** (Oppg. 1 ofte 8 poeng) | Poengbasert; H2011-instruks bruker guarantee-terskler |
| 2012 | **Mats Ehrnström** | **10-punkts sann/usann-oversikt** (ingen bevis kreves) | **6 oppgaver**; hver hel oppgave = 10 poeng; delpunkt teller likt, unntatt at siste delpunkt i utvalgte oppgaver gir 1 poeng ekstra | «Alle svar skal begrunnes grundig (unntatt Oppg. 1)» |
| 2013 (H + kont S) | Mats Ehrnström | 10-punkts sann/usann-oversikt | H2013: **11 «questions»** (Oppg. 1 teller som én); S2013: 6 oppgaver, hver 10 poeng | **Eksplisitt terskelskala** (se under) |

### Staceys og Ehrnströms karakterlogikk (viktig strukturfunn)
- **H2013-instruksen** (Ehrnström) gjør terskelsystemet eksplisitt: hver løsning vurderes som **rudimentary / acceptable / good / excellent**. Garantigrenser: **fem akseptable → E; sju akseptable (minst én god) → D; sju akseptable (minst fem gode) → C; ni gode (minst to utmerkede) → B; ni gode (minst sju utmerkede) → A.** Ut over garantigrensene settes karakteren på helhetlig grunnlag. Dette forteller boken at **det lønner seg å levere mange delvis korrekte, godt begrunnede besvarelser** framfor å perfeksjonere få — bredde slår dybde ved terskelovergangene.
- **S2013/H2012** (poengmodell): «hver korrekt løst oppgave gir 10 poeng; delpunkt teller likt innen en oppgave, unntatt at siste delpunkt i enkelte oppgaver gir ett poeng ekstra». Det siste delpunktet i en oppgave er ofte det vanskeligste/mest teoretiske («er `g∈C([0,1])`?», «finn completion av rommet»), og premieres deretter.

### Konstanter på tvers av alle år
- **4–7 oppgaver, 4 timer, kode D, ingen hjelpemidler utover kalkulator.** Ingen flervalgsdel i klassisk forstand; sann/usann-oversikten (2012→) er nærmeste ekvivalent, men uten avkryssingsskjema.
- **Oppgave 1 er nesten alltid ren teori** (definisjoner eller sann/usann). Den er «gratispoeng» for den som har pugget definisjonene — og en effektiv terskelsikring i Staceys/Ehrnströms system.
- **Bevis- og begrunnelseskrav er gjennomgående.** Emnet tester forståelse av *hvorfor*, ikke *hvor raskt*.
- **Fasitene viser ofte flere gyldige metoder** eksplisitt (Gram–Schmidt-projeksjon vs. minste kvadraters normallikninger; SVD vs. direkte egenverdiregning), og alle honoreres.

### Overlapp mot TMA4110 (grunnleggende lineær algebra)
TMA4145 deler *vokabular* med TMA4110 (egenverdier, diagonalisering, ortogonalitet, QR, minste kvadrater), men oppgavene ligger et abstraksjonsnivå over: her skal man **verifisere at noe er en metrikk / et indreprodukt**, **bevise fullstendighet**, **konstruere completion av et normert rom**, **regne operatornorm på et funksjonsrom**, og **føre `ε`-argumenter** i uendeligdimensjonale følgerom (`ℓ^p`, `L^2`, `C([0,1])`). Boken bør **ikke** dublere elementær radreduksjon; den skal ta radreduksjon/QR/minste kvadrater som *kjent verktøy* og fokusere på den abstrakte teorien og bevisføringen som er TMA4145s egenart.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **16 velkarakteriserte sett**: Periode A (2003–2007, 5 sett: H2003, H2004, H2005, H2006, H2007 — Young-boka, Hansen/Skau), Periode B (2008–2011, 6 sett: H2008, H2009, H2010, H2011, kont. S2009, kont. S2010, kont. S2011 — Stacey), Periode C (2012–2014, 4 sett: H2012, H2013, kont. S2013, kont. S2014 — Ehrnström m.fl.). (Periode B teller 7 sett; kolonneoverskriften angir antall.)

| Tema | A (5) | B (7) | C (4) | **Gjenganger-score** |
|---|---|---|---|---|
| **Teori-Oppgave 1** (definisjoner / sann-usann-oversikt) | 3 | 7 | 4 | **14/16 = 88 %** (de-facto 100 % fra 2008) |
| **Beste approksimasjon / korteste avstand til underrom** (projeksjon el. minste kvadrater) | 5 | 7 | 4 | **16/16 = 100 %** |
| **Indreprodukt-/Hilbert-rom-teori** (Cauchy–Schwarz, ortonormale følger, Bessel/Parseval, Riesz, Gram–Schmidt) | 5 | 7 | 4 | **16/16 = 100 %** |
| **Metriske rom** (verifiser metrikk, kule åpen/lukket, fullstendighet, konvergens) | 4 | 6 | 3 | **13/16 = 81 %** |
| **Kontraksjon / Banachs fikspunktteorem** (inkl. Picard, Newton, iterasjonsestimat) | 5 | 5 | 1 | **11/16 = 69 %** |
| **Egenverdier / diagonalisering / spektralteorem** | 3 | 3 | 4 | **10/16 = 62 %** |
| **Bundne lineære operatorer / operatornorm / adjungert** (selvadjungert, normal, unitær) | 3 | 4 | 3 | **10/16 = 62 %** |
| **Lineære avbildninger, kjerne/bilde, isomorfi, koordinater** | 2 | 4 | 3 | **9/16 = 56 %** |
| **SVD / QR / pseudoinvers / minste kvadrater-maskineri** | 4 | 3 | 2 | **9/16 = 56 %** |
| **Følgerom `ℓ^p`, `c₀`, `ℓ₀` / fullstendighet av normerte rom / absolutt konvergens** | 2 | 3 | 2 | **7/16 = 44 %** |
| **Jordan-normalform** | 2 | 0 | 3 | **5/16 = 31 %** |
| **Matriseeksponential `exp(tA)` og `ẋ=Ax`** | 3 | 0 | 3 | **6/16 = 38 %** |
| **Funksjonsrom `C([0,1])`: kontinuitet av funksjonaler, `‖·‖∞` vs. `‖·‖₂`, tetthet** | 1 | 6 | 2 | **9/16 = 56 %** |
| **Riesz' representasjonsteorem** (representant i `L²`, «er representanten kontinuerlig?») | 1 | 3 | 0 | **4/16 = 25 %** |
| **Lipschitz-kontinuitet / kontinuitet via metrikk** | 1 | 2 | 2 | **5/16 = 31 %** |
| **Completion av normert rom / isometrisk isomorfi** | 1 | 0 | 2 | **3/16 = 19 %** |
| **LU-faktorisering + fire fundamentale underrom** | 1 | 2 | 1 | **4/16 = 25 %** |
| **Picard-iterasjon / eksistens-entydighet for ODE** | 1 | 0 | 0 | **1/16 = 6 %** (men beslektet med kontraksjon overalt) |
| **Kvasi-metrikk / ikke-symmetrisk «metrikk»** (konstruksjonsoppgave) | 0 | 2 | 0 | **2/16 = 13 %** |

**Viktigste funn:**
1. **De to teoretiske søylene — indreprodukt/Hilbert-teori og beste approksimasjon — er garantert (100 %).** Hvert eneste sett har minst én oppgave om ortogonal projeksjon / korteste avstand til et underrom, løst med Gram–Schmidt + projeksjonsformelen eller minste kvadraters normallikninger. Behersk begge løypene perfekt.
2. **Metriske rom + kontraksjon/Banach FPT er nesten like sikkert** (81 % / 69 %), men **kontraksjonssjangeren har falt kraftig i Ehrnström-perioden** (5/5 i Periode A, 5/7 i B, men bare 1/4 i C) til fordel for mer spektralteori/Jordan/`exp(tA)`. En kommende sensor kan hente den tilbake — hold den som primærmål, men vekt spektralteori tyngre for nyeste stil.
3. **Spektralteori i vid forstand (egenverdier + diagonalisering + spektralteorem + Jordan + `exp(tA)`)** er den store *beregnings*søylen og dominerer Ehrnström-årene (4/4). Jordan-form + `exp(tA)` for `ẋ=Ax` er nærmest en Ehrnström-signatur (H2012, H2013, S2013).
4. **Operatorteori på funksjonsrom** (operatornorm, selvadjungert/unitær/normal, Riesz-representasjon på `C([0,1])`/`L²`) er en fast, karakterskillende sjanger — teoritung og premierer presist bevisarbeid.
5. **SVD/pseudoinvers var en Young-boks-signatur (Periode A: 4/5)** og har avtatt, mens **completion / isometrisk isomorfi og sann/usann-oversikten er Ehrnström-nyvinninger**. Læreverk- og sensorskiftet forklarer mesteparten av variasjonen — boken må dekke *begge* tradisjonene.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene der de finnes).

### A. Teori-Oppgave 1: definisjoner eller sann/usann-oversikt
- **Krav (definisjonsvariant, Stacey):** Gi presise definisjoner av **fire** oppgitte begreper — typisk: metrisk rom, Cauchy-følge, konvergent følge, kontinuerlig avbildning, kjerne/bilde, indreprodukt (reelt/komplekst), norm, Hilbert-rom, adjungert, nabolag, basis, dimensjon, normal operator, eller formuler et teorem (Banach FPT, spektralteoremet, Cauchy–Schwarz, Riesz, rangteoremet, QR/LU-egenskaper).
- **Krav (sann/usann-variant, Ehrnström):** 10 utsagn, «angi sann/usann, intet bevis». Faste feller: «`Pₙ(ℝ)≅ℝⁿ`» (usann — det er `ℝⁿ⁺¹`), «`ℂⁿ` er dualen til `ℝⁿ`» (usann — dualen er `ℝⁿ`), «alle Banach-rom er uendeligdimensjonale» (usann), «`ℓ^p` er alle Hilbert-rom» (usann — bare `ℓ²`), «Cauchy–Schwarz gjelder i ethvert Banach-rom» (usann — krever indreprodukt), «alle konvergente følger er Cauchy» (sann), «en lineær avbildning mellom normerte rom er begrenset hviss den er kontinuerlig» (sann).
- **Frekvens:** 14/16, de-facto obligatorisk fra 2008. Lavterskel, høy uttelling for den som har pugget.

### B. Beste approksimasjon / korteste avstand til et underrom
- **Krav:** Finn `inf_{y∈M} ‖x₀−y‖` og avgjør om et minimumspunkt `y₀∈M` finnes/er entydig; hvis ja, finn det. To standardløyper, begge honorert i fasitene: **(1)** Gram–Schmidt på en basis for `M` → ortonormal basis `{e_k}` → projeksjon `y₀=Σ⟨x₀,e_k⟩e_k`, avstand via Pythagoras `d²=‖x₀‖²−Σ|⟨x₀,e_k⟩|²`; **(2)** minste kvadraters normallikninger `AᵀA x = Aᵀ b`. **Eksistens/entydighet** begrunnes med **projeksjonsteoremet / minimal-avstand-teoremet** (lukket, konveks, ikke-tom `M` i et Hilbert-rom garanterer entydig nærmeste punkt). Fasiten trekker eksplisitt fram **motpunkter der minimumspunkt ikke finnes** (ikke-lukket `M`, eller `M=c₀⊂ℓ^∞` der infimum ikke oppnås entydig).
- **Frekvens:** 16/16.
- **Omskrevet eksempel:** «I `L²(0,1)` med `M=span{1,t}`, finn korteste avstand fra `x₀(t)=t²` og punktet i `M` som realiserer den.» (H2012-varianten)

### C. Indreprodukt-/Hilbert-rom-teori (Cauchy–Schwarz, ortonormalitet, Bessel/Parseval, Riesz)
- **Krav:** Verifiser at en oppgitt bilineær/hermitesk form er et **indreprodukt** (positivitet, symmetri/konjugatsymmetri, linearitet); vis at `‖·‖∞` **ikke** kommer fra et indreprodukt (parallellogramloven feiler). Bevis at en ortonormal følge er lineært uavhengig; vis Fourier-utviklingen `x=Σ⟨x,e_j⟩e_j` for en fullstendig ortonormal følge (Bessel → rest ortogonal til alt → null ved fullstendighet). Bruk **Riesz' representasjonsteorem** til å vise at en gitt begrenset funksjonal er `x↦⟨x,z⟩`. Cauchy–Schwarz for å gi en optimal konstant `c` i en integralulikhet, med likhet ved lineær avhengighet.
- **Frekvens:** 16/16.

### D. Gram–Schmidt / QR-faktorisering
- **Krav:** Ortonormalisér kolonnene i en matrise (eller en polynombasis `{1,t,t²}` under et gitt indreprodukt), skriv opp `QR`-faktoriseringen. Rigorøs **induktiv definisjon** av `{e_j}` og bevis for at følgen er ortonormal og utspenner samme (lukkede) span (S2013 O6b).
- **Frekvens:** del av C-blokken; QR eksplisitt i ~9/16.

### E. Metriske rom: verifiser metrikk, kuler, fullstendighet
- **Krav:** Verifiser de fire metrikkaksiomene for en oppgitt `d` (f.eks. `d(x,y)=|arctan x−arctan y|/π`, `d=ln(1+|x−y|)`, eller en «radiell» metrikk på `ℝ²`). Vis at en åpen enhetskule kan være **lukket** (og hele rommet), og at rommet er **ufullstendig** ved å konstruere en Cauchy-følge uten grense (f.eks. `xₙ=n` under arctan-metrikken). Konvergent ⟹ Cauchy (standard `ε`-argument). Kontinuitet av identitetsavbildningen mellom to metrikker på samme mengde (én retning kontinuerlig, den andre ikke).
- **Frekvens:** 13/16.
- **Omskrevet eksempel:** «Vis at `d(x,y)=|arctan x−arctan y|/π` er en metrikk på `ℝ`; vis at den åpne enhetskula om 0 også er lukket og at `(ℝ,d)` ikke er fullstendig.» (H2013 O3)

### F. Kontraksjon / Banachs fikspunktteorem
- **Krav:** Vis at `T` er en **kontraksjon** (`d(Tx,Ty)≤α d(x,y)`, `α<1`) på et fullstendig, ikke-tomt rom → entydig fikspunkt (Banach FPT). Anvendelser: **Picard-integraloperator** `(Tx)(t)=x₀+∫₀ᵗ f(s,x(s))ds` for ODE-eksistens; **Newtons metode** `g(x)=x−f/f′` vist som kontraksjon via MVT + betingelsen `|f f''|≤α|f'|²`; **`cos:[0,1]→[0,1]`** via trig-identitet + `|sin θ|≤|θ|`; skiftoperatorer på `ℓ^∞` der `T` ikke er kontraksjon men `T²` er det. **A-priori-estimatet** `d(xₙ,x*)≤αⁿ/(1−α)·d(x₀,x₁)` brukes til å regne ut nødvendig antall iterasjoner for gitt nøyaktighet (rund **opp**). Delspørsmål ber ofte om å iterere for hånd og gjenkjenne en lukket form (`eᵗ−1`, `1−e^{−t²/2}`, `Σ t^{2k}/(2^k k!)`).
- **Frekvens:** 11/16; alle fem sett i Periode A.
- **Omskrevet eksempel:** «Vis at `T(x)=x³` er en kontraksjon på `[0,½]`, finn kontraksjonskonstanten, og bestem antall iterasjoner for `0,01`-nøyaktighet fra `x₀=½` (garantert vs. faktisk).» (S2011 O2)

### G. Egenverdier, diagonalisering og spektralteoremet
- **Krav:** Finn egenverdier/egenvektorer (også **parametrisk**, f.eks. trekantmatrise med parametere `a,b`); avgjør når `ℝⁿ` har en basis / **ortonormal** basis av egenvektorer. Nøkkelargument: **spektralteoremet** — en reell matrise har ortonormal egenbasis **hviss** den er symmetrisk; ikke-symmetrisk ⟹ ingen ortonormal egenbasis (H2011, S2011). Rekonstruér en symmetrisk matrise fra egendata via `A=QDQᵀ` (H2013 O4a). For unitære/normale operatorer: `|λ|=1`, egenrom for ulike egenverdier er ortogonale.
- **Frekvens:** 10/16; 4/4 i Periode C.

### H. Jordan-normalform + matriseeksponential for `ẋ=Ax`
- **Krav:** Finn Jordan-formen `A=TJT⁻¹` når en egenverdi har algebraisk > geometrisk multiplisitet: bestem geometrisk multiplisitet, bygg **Jordan-kjeder** via generaliserte egenvektorer `(A−λI)v_{k}=v_{k−1}`. Bruk `exp(tJ)=e^{λt}(I+tN+…)` og `exp(tA)=T exp(tJ) T⁻¹` til å løse initialverdiproblemet `ẋ=Ax, x(0)=x₀`. (I H2013 O2 brukes identiteten `A²=I` til å summere `exp(tA)=cosh(t)I+sinh(t)A` direkte.)
- **Frekvens:** Jordan 5/16, `exp(tA)` 6/16; ofte samme oppgave. Ehrnström-signatur (H2012 O3, H2013, S2013 O3).

### I. Bundne lineære operatorer: operatornorm, adjungert, selvadjungert/normal/unitær
- **Krav:** Regn ut **operatornormen** `‖T‖=sup_{‖x‖=1}‖Tx‖` og finn et element som oppnår den (skift på `ℓ¹`, integralfunksjonaler på `L²`, Fourier-transform-operator). Vis **selvadjungerthet** `⟨Tf,g⟩=⟨f,Tg⟩` for konkrete operatorer på `C([0,1])` (multiplikasjon `f↦tf`, refleksjon `f↦f(1−t)`), og bruk `R²=I`-strukturen til egenrom-dekomponering `f=f₊+f₋`. Egenskaper ved **normale**/**unitære** operatorer (`‖A*x‖=‖Ax‖`, `|λ|=1`, ortogonale egenrom). **Adjungert av deriveringsoperatoren** på `Poly₁` under et punktverdi-indreprodukt.
- **Frekvens:** 10/16.

### J. Funksjonaler på `C([0,1])`, `‖·‖∞` vs. `‖·‖₂`, kontinuitet og Riesz
- **Krav:** Vis at en integralfunksjonal `α(f)=∫f` (eller evaluering `e_t(f)=f(t)`) er **kontinuerlig** ved å skrive den som et indreprodukt og bruke Cauchy–Schwarz (⟹ Lipschitz), eller bruke `‖·‖∞`-grensen. Konkludér med **Riesz** at det finnes `g∈L²` som representerer funksjonalen, og avgjør om `g∈C([0,1])` (typisk **nei** — representanten er en indikatorfunksjon). Vis at `f_n(t)=tⁿ` konvergerer i `‖·‖₂` men ikke i `‖·‖∞` (illustrerer at normene gir ulike topologier / at `(C,‖·‖₂)` er ufullstendig).
- **Frekvens:** 9/16; Stacey-favoritt (6/7 i Periode B).

### K. Følgerom `ℓ^p`, `c₀`, `ℓ₀`, fullstendighet og absolutt konvergens
- **Krav:** Vis at `c₀` er tillukningen av `ℓ₀` i `ℓ^∞`; at `(ℓ₀,‖·‖)` **ikke** er Banach uansett norm; at et normert rom er fullstendig **hviss** enhver absolutt konvergent rekke konvergerer (begge veier, med delfølge-triks `‖s_{n+1}−s_n‖<2^{−m}`). Konstruér en Cauchy-følge i `P(ℝ)` (polynomer med maks-koeffisient-norm) som ikke konvergerer, og identifisér **completion** som `c₀` via isometrisk isomorfi `P(ℝ)≅ℓ₀`.
- **Frekvens:** 7/16.

### L. Lineære systemer, kjerne/bilde, minimum-norm og minste kvadrater (matrisenivå)
- **Krav:** Løs `Ax=b`; finn `ker A`; finn **minimum-norm-løsningen** `y` (ortogonal til `ker A`); finn `z` slik at `Az` er nærmest `c` (minste kvadrater via normallikninger). Fire fundamentale underrom fra en gitt `LU`-/`QR`-faktorisering; rang og nullitet; medlemskap i bildet.
- **Frekvens:** 9/16 (overlapper L med B).

### M. SVD / pseudoinvers (Young-boks-signatur, avtakende)
- **Krav:** Finn **singulærverdidekomposisjonen** via egendekomposisjon av `AᵀA`; bygg `U` ved å utvide med nullrom-vektorer; bruk **pseudoinversen** `A⁺=VΣ⁺Uᵀ` til minste kvadraters/minimum-norm-løsning. Kobling `AᵀA=RᵀR` fra QR (H2009).
- **Frekvens:** 9/16 samlet, men konsentrert i Periode A (4/5); avtakende etter læreverkskiftet.

### N. Konstruksjonsoppgaver: kvasi-metrikk, uvanlige metrikker/normer
- **Krav:** Gitt en funksjon `g` som **ikke** er symmetrisk: vis at de øvrige metrikkaksiomene holder, definer «`g`-konvergens» og karakterisér de `g`-konvergente følgene. Avgjør om en gitt metrikk kommer fra en norm (translasjonsinvarians + homogenitet).
- **Frekvens:** 2/16 (Stacey).

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alt rigorøst; skriv ned antakelser.** Ordrett instruks på hvert sett (unntatt Oppg. 1). Ubegrunnet svar gir ikke uttelling — dette er et bevisemne.
2. **Teorem-/begrepsnavn skal bæres eksplisitt:** «Banachs fikspunktteorem», «spektralteoremet», «Cauchy–Schwarz», «Riesz' representasjonsteorem», «rangteoremet», «projeksjonsteoremet/minimal-avstand-teoremet», «parallellogramloven». Fasiten skriver dem ut.
3. **Definisjoner må sitte utenat** (kode D — ingen hjelpemidler). Oppgave 1 tester nettopp dette, og senere oppgaver forutsetter at man kan gjengi definisjonen man skal bruke (H2013 O2a: «gi definisjonen sammen med svaret» for invertibel/selvadjungert/nilpotent/unitær).
4. **Eksistens *og* entydighet skal behandles separat** i approksimasjonsoppgaver: er `M` lukket/konveks/ikke-tom? oppnås infimum? er minimumspunktet entydig? Fasiten trekker fram motpunkter der det feiler.
5. **Flere metoder honoreres eksplisitt:** Gram–Schmidt-projeksjon vs. minste kvadraters normallikninger; SVD vs. direkte egenverdiregning; fasitene viser jevnlig begge.
6. **Terskel-/poenglogikk (se del 1):** i Ehrnström/Stacey-systemet lønner **bredde** seg — mange akseptable, godt begrunnede delbesvarelser flytter deg over garantigrensene. Det siste delpunktet i en oppgave (ofte det teoretisk tyngste) gir ekstra uttelling.

### Hva som skiller karakternivåene (rudimentary → excellent)
- **Bestått/akseptabelt-sjiktet** henter poeng på de mekaniske delene: sett opp Gram–Schmidt og projiser, regn egenverdier fra karakteristisk polynom, verifiser metrikkaksiomene, sett opp normallikningene, gjengi en definisjon korrekt.
- **Godt-sjiktet** behersker i tillegg: **begge** approksimasjonsløypene og korrekt eksistens/entydighet-argument; **alle** aksiomene i en indreprodukt-/metrikk-verifikasjon uten hull; korrekt **Jordan-kjede** med generaliserte egenvektorer; a-priori-iterasjonsestimatet med korrekt avrunding oppover; Cauchy–Schwarz-argument for kontinuitet av en funksjonal.
- **Utmerket-sjiktet** kjennetegnes av: (i) rigorøse `ε`-/delfølge-argumenter i uendeligdimensjonale følgerom (fullstendighet, tetthet, `c₀`=tillukning av `ℓ₀`); (ii) korrekt bruk av **spektralteoremets hviss-form** (ortonormal egenbasis ⟺ symmetrisk/normal); (iii) **Riesz-representasjon** med korrekt konklusjon om at representanten *ikke* ligger i `C([0,1])`; (iv) **completion**-konstruksjon via isometrisk isomorfi; (v) å se og bruke koblinger mellom delpunkter; (vi) korrekt behandling av **motpunkter** (metrikk som ikke kommer fra norm; minimumspunkt som ikke finnes; kontraksjon som feiler men hvis iterat lykkes).

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Kontraksjon uten fullstendighet/ikke-tomhet:** å påvise `α<1` uten å nevne at rommet er fullstendig og ikke-tomt (Banach FPT krever begge). Motsatt: å hevde fikspunkt uten å vise `α<1`.
2. **Beste approksimasjon uten eksistens/entydighet-drøfting:** å regne ut «nærmeste punkt» uten å begrunne at `M` er lukket/konveks (og dermed at punktet finnes og er entydig) — eller å overse at det *ikke* finnes (ikke-lukket `M`, `c₀⊂ℓ^∞`).
3. **Ufullstendig aksiomsjekk:** å hoppe over positivitet/ikke-degenerasjon i indreprodukt- eller metrikkverifikasjon, eller å anta symmetri der `g` faktisk er en kvasi-metrikk.
4. **Spektralteoremet feilbrukt:** å tro at enhver diagonaliserbar matrise har *ortonormal* egenbasis (kun symmetriske/normale gjør det); å glemme generaliserte egenvektorer ved defekt egenverdi (Jordan).
5. **Parallellogram-testen glemt:** å ikke sjekke om en norm kommer fra et indreprodukt via parallellogramloven (`‖·‖∞` gjør det ikke).
6. **Riesz-representant antatt kontinuerlig:** å konkludere at representanten `g` ligger i `C([0,1])` når den egentlig er en indikator i `L²`.
7. **Operatornorm anslått, ikke oppnådd:** å gi en øvre skranke for `‖T‖` uten å utvise et element som realiserer den (fasiten krever både `‖Tx‖≤c‖x‖` og et likhetseksempel).
8. **A-priori-iterasjonsestimatet:** feil eksponent (`αⁿ` vs. `αⁿ/(1−α)`), eller å runde antall iterasjoner **ned** i stedet for opp.
9. **Fullstendighet forvekslet med lukkethet:** å påstå at et normert rom er Banach uten å vise at Cauchy-følger konvergerer *i rommet* (feil f.eks. for `ℓ₀`, `P(ℝ)`, `(C,‖·‖₂)`).
10. **Sann/usann-feller (2012→):** `Pₙ(ℝ)≅ℝⁿ` (nei, `ℝⁿ⁺¹`), «dualen til `ℝⁿ` er `ℂⁿ`» (nei), «Cauchy–Schwarz i ethvert Banach-rom» (nei), «alle `ℓ^p` er Hilbert-rom» (nei).
11. **Tidsfelle:** de tunge, flerdelte oppgavene (SVD/pseudoinvers, Jordan+`exp(tA)`, completion-bevis) spiser tid; i terskelsystemet lønner det seg å sikre mange akseptable delsvar før man perfeksjonerer ett.

---

## 6. Teorem-, notasjons- og formelapparat

### Ingen hjelpemidler (kode D) — alt må kunne utenat
I motsetning til de fleste andre TMA-emner deles **intet formelark** ut, og **ingen formelsamling** er tillatt. Boken må derfor bygge et **kompakt «huskeapparat»** studenten kan pugge: definisjoner, teoremformuleringer og standardbevis-skjeletter. Nedenfor er kjernen.

### Må beherskes aktivt (kunne anvende, navngi og bevise)
- **Metriske rom:** metrikkaksiomer; åpen/lukket mengde og kule; konvergent/Cauchy-følge; fullstendighet; kontinuitet (`ε–δ` og følgekarakterisering); tetthet; **Banachs fikspunktteorem** med a-priori-estimat `d(xₙ,x*)≤αⁿ/(1−α)d(x₀,x₁)`.
- **Normerte rom / Banach-rom:** normaksiomer; ekvivalens begrenset ⟺ kontinuerlig for lineære avbildninger; **operatornorm** `‖T‖=sup_{‖x‖=1}‖Tx‖`; fullstendighet; absolutt-konvergens-kriteriet for fullstendighet; `ℓ^p`, `c₀`, `ℓ₀`, `L^p`, `C([0,1])` med `‖·‖∞` og `‖·‖₂`; **completion** og isometrisk isomorfi.
- **Indreprodukt-/Hilbert-rom:** indreproduktaksiomer (reelt/komplekst, konjugatsymmetri); **Cauchy–Schwarz**; parallellogramloven (norm-fra-indreprodukt-test); ortogonalitet, Pythagoras; **Gram–Schmidt** (induktivt); ortogonal projeksjon og **projeksjons-/minimal-avstand-teoremet**; **Bessel-ulikheten**, **Parseval**, Fourier-utvikling i ortonormal basis; **Riesz' representasjonsteorem**.
- **Lineære avbildninger/operatorer:** kjerne/bilde, rang, **rangteoremet**; matriserepresentasjon og koordinatskifte; **adjungert** `T*` (`⟨Tx,y⟩=⟨x,T*y⟩`); **selvadjungert / normal / unitær** og deres egenskaper (`|λ|=1`, ortogonale egenrom, `‖A*x‖=‖Ax‖`); **matriseeksponential** `exp(tA)`.
- **Spektralteori:** egenverdi/egenvektor, karakteristisk polynom, algebraisk vs. geometrisk multiplisitet; diagonalisering; **spektralteoremet** (symmetrisk/normal ⟹ ortonormal egenbasis, hviss-form); **Jordan-normalform** med generaliserte egenvektorer/Jordan-kjeder; **SVD** og **pseudoinvers** `A⁺=VΣ⁺Uᵀ`; **QR** og **LU/PA=LU**; fire fundamentale underrom; **minste kvadrater** via `AᵀAx=Aᵀb`.
- **Anvendelser:** `ẋ=Ax` løst via `exp(tA)` (Jordan); **Picard-iterasjon** / eksistens-entydighet for ODE via Banach FPT; **Newtons metode** som kontraksjon.

### Notasjonskonvensjoner boken bør speile
`(M,d)` metrisk rom; `‖·‖`, `‖·‖∞`, `‖·‖₂`, `‖·‖_p` normer; `⟨·,·⟩` indreprodukt; `B_r(x)` kule; `T*` adjungert; `‖T‖` operatornorm; `A=TJT⁻¹` Jordan; `exp(tA)`; `A=UΣVᵀ` SVD, `A⁺` pseudoinvers; `A=QR`, `PA=LU`; `ℓ^p, c₀, ℓ₀, L^p((a,b)), C([a,b],𝕂)`; `Poly_k / Pₙ`; `ker/im (ran)`; `dist(x,M)`. Skalarkropp `𝕂∈{ℝ,ℂ}`; `N={1,2,3,…}`.

---

## 7. Prognose og prioritering

> TMA4145 er stabilt i *tematisk kjerne* men mer variabelt i *vekting* enn f.eks. TMA4135, fordi faglærer og læreverk har skiftet. De to teorisøylene (indreprodukt/Hilbert + beste approksimasjon) og metriske rom er tilnærmet garantert; spektralteori/Jordan/`exp(tA)` dominerer nyeste stil, mens kontraksjon og SVD/pseudoinvers svinger med sensor. Prognosen vekter kjernen tyngst og holder de sensoravhengige sjangrene som obligatorisk beredskap.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Beste approksimasjon / korteste avstand til underrom** — 100 %. Gram–Schmidt-projeksjon **og** minste kvadrater; eksistens/entydighet via projeksjonsteoremet; motpunkter.
2. **Indreprodukt-/Hilbert-rom-teori** — 100 %. Cauchy–Schwarz, ortonormalitet, Bessel/Parseval, Fourier-utvikling, Riesz, parallellogram-testen.
3. **Metriske rom** — 81 %. Aksiomverifikasjon, åpen/lukket kule, fullstendighet/ufullstendighet, konvergent⟹Cauchy, kontinuitet.
4. **Kontraksjon / Banachs fikspunktteorem** — 69 %. Kontraksjonsbevis, a-priori-estimat + iterasjonstelling, Picard/Newton/integraloperator-anvendelser. (Fallende, men fortsatt kjerne.)
5. **Egenverdier / diagonalisering / spektralteorem** — 62 %, og **4/4 i nyeste periode**.
6. **Jordan-normalform + `exp(tA)` for `ẋ=Ax`** — samlet ~50 % og **Ehrnström-signatur**; dekk grundig som primærmål for kommende sett.
7. **Teori-Oppgave 1** (definisjoner + sann/usann-oversikt) — de-facto 100 % fra 2008. Puggbar; høy uttelling.

### Nivå 2 — må kunne (bredde + karakterskiller)
8. **Bundne operatorer: operatornorm, adjungert, selvadjungert/normal/unitær** — 62 %.
9. **Lineære avbildninger, kjerne/bilde, isomorfi, koordinater, minste kvadrater** — 56 %.
10. **Funksjonaler på `C([0,1])`, `‖·‖∞` vs. `‖·‖₂`, Riesz-representant** — 56 % (Stacey-tungt).
11. **SVD / QR / pseudoinvers** — 56 %, men avtakende (Young-boks-arv). Dekk QR/minste kvadrater sikkert; SVD/pseudoinvers som solid beredskap.
12. **Følgerom `ℓ^p`/`c₀`/`ℓ₀`, fullstendighet, absolutt konvergens** — 44 %.

### Nivå 3 — bør dekkes (lav frekvens / beredskap / teoribredde)
13. **Completion / isometrisk isomorfi** — 19 %, men Ehrnström-nytt; kort, presis dekning.
14. **LU/PA=LU + fire fundamentale underrom** — 25 %.
15. **Kvasi-metrikk / uvanlige metrikk-norm-konstruksjoner** — 13 %, Stacey-spesialitet.
16. **Lipschitz-kontinuitet, tetthet/Weierstrass-approksimasjon** — sporadiske kortsvar.

### Konkret prognose for neste sett
Basert på malen: **5–6 oppgaver over 4 timer, kode D (ingen hjelpemidler), ingen flervalgsdel**, med:
- **O1:** teori — definisjonssett eller 10-punkts sann/usann-oversikt.
- **O2–O3:** en spektralteori-/matriseoppgave (egenverdier/diagonalisering, ofte **Jordan-form + `exp(tA)` for `ẋ=Ax`**) og en approksimasjons-/indreprodukt-oppgave (Gram–Schmidt/projeksjon eller minste kvadrater, med eksistens/entydighet).
- **O4:** metriske rom eller kontraksjon/Banach FPT (verifiser metrikk + fullstendighet, eller kontraksjon + iterasjonsestimat).
- **O5–O6:** operator-/Hilbert-teori (operatornorm, selvadjungert/unitær, Riesz-representasjon) og/eller et følgerom-/fullstendighet-/completion-bevis.

**Usikkerhetsmoment:** vektingen mellom **kontraksjon** (fallende) og **Jordan/`exp(tA)`** (stigende) avhenger av faglærer. SVD/pseudoinvers kan komme tilbake om en Young-orientert sensor overtar. Arkivet stopper i 2014 — verifiser mot nyere sett om de blir tilgjengelige, og sjekk om hjelpemiddelkoden fortsatt er D (ingen formelark).

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4145/` (~44 PDF-er; engelske hovedutgaver `…en`, med `bm`/`nn`/`no`-parallellutgaver enkelte år, og løsningsforslag `…lf`).

**Løsningsforslag lest grundig (offisielle fasiter):**
- `tma4145eksh13lf.pdf`, `tma4145eksh12lf.pdf` (H2013, H2012 — Ehrnström: Jordan/`exp(tA)`, unitære operatorer, completion, sann/usann)
- `tma4145eksh11lf.pdf`, `tma4145eksh10lf.pdf`, `tma4145eksh09lf.pdf`, `tma4145eksh08lf.pdf` (H2008–H2011 — Stacey: kontraksjon, Riesz, funksjonaler, QR/SVD)
- `tma4145ekss09lf.pdf`, `tma4145ekss10lf.pdf` (kont. S2009, S2010 — Stacey)
- `tma4145eksh07lf.pdf`, `tma4145eksh06lf.pdf`, `tma4145eksh05lf.pdf`, `tma4145eksh04lf.pdf`, `tma4145eksh03lf.pdf` (H2003–H2007 — Young-boka: SVD/pseudoinvers, Fourier-beste-approksimasjon, Picard)

**Oppgavesett lest grundig (16 sett kartlagt oppgave-for-oppgave):** `…eksh03en` … `…eksh13en` (alle høstsett 2003–2013) og kontinuasjonssettene `…ekss09en`, `…ekss10en`, `…ekss11en`, `…ekss13en`, `…ekss14en`.

**Merknader om kildene:**
- **Ingen skann-hull:** alle 44 PDF-ene ga ren, lesbar tekst ved `pdftotext` — ingen rene skann eller uleselige filer. (Flervektor-oppstillinger i S2011 måtte leses i `-layout`-modus, men innholdet var fullt tilgjengelig.)
- **Manglende løsningsforslag:** kontinuasjonssettene **S2011, S2013 og S2014 mangler `…lf`-fil** (kun oppgavesett finnes). For disse er metodeanalysen basert på oppgaveteksten + mønsteret fra parallelle sett med fasit; oppgavetemaene er likevel entydig identifisert.
- **Parallellutgaver:** `…bm`/`…nn`/`…no`-filene (H2007–S2013) er bokmåls-/nynorsk-/eldre-norsk-oversettelser av de samme oppgavene og gir ingen nytt matematisk innhold utover den engelske hovedutgaven.
- **Faglærer- og læreverkskifte:** Periode A (Hansen/Skau, ~Young «Introduction to Hilbert Space») vektet SVD/pseudoinvers og Fourier-beste-approksimasjon; Periode B (Stacey) vektet kontraksjon/Banach FPT, funksjonaler på `C([0,1])` og følgerom; Periode C (Ehrnström) innførte sann/usann-oversikten og vektet Jordan-form/`exp(tA)`/completion. En eksamensrettet bok må dekke alle tre tradisjonene.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.

**Forbilder:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal) og NTNU-realfagstradisjonen i `docs/hoyskole-boker/tma4110/` (grunnleggende lineær algebra — TMA4145 ligger et abstraksjonsnivå over og skal ikke dublere elementær radreduksjon).

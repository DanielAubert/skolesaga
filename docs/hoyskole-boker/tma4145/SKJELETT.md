# Bokskjelett: TMA4145 Lineære metoder (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter teorien/
> eksempelet de trener, aldri all teori øverst med oppgavene samlet nederst. Ingen
> oppgave får kreve stoff som ikke er dekket tidligere i kapitlet eller i eksplisitt
> refererte forkunnskaper (flytt teoribiten tidligere ved behov). Autoritativ kilde:
> README «Leserkrav» + `DNA-regnefag.md`. Unntak: øvingseksamen-/prøve-/
> modellbesvarelseskapitler følger sin egen arketype (komplett sett først, løsninger
> i collapsibles). Kvotene og innholdskontraktene her er uendret — løkka styrer
> REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står destillert i dette skjelettet, fra
> `EKSAMENSANALYSE.md` (NTNU-arkivet H2003–S2014: **16 velkarakteriserte sett**;
> løsningsforslag lest grundig H2003–H2013 + kont. S2009/S2010). Alle oppgaver,
> talleksempler og moteksempler i boka skal være NYSKREVNE (se §6). Teoremnavn,
> definisjoner, standardnotasjon (metrikk-/norm-/indreproduktaksiomer, Banach FPT,
> spektralteoremet, Cauchy–Schwarz, Riesz) er ikke opphavsrettslig beskyttet og
> brukes fritt.
>
> **Matematisk presisjon er kritisk.** Dette er et **bevisorientert** emne: nesten
> hvert svar skal begrunnes rigorøst (unntatt teori-Oppgave 1). Påstander forfatteren
> er usikker på — særlig entydighet, fullstendighet, «hviss»-retninger og fortegns-/
> ulikhetsgrenser — parametersjekkes eller merkes `(verifiser)` for fagfellesjekk i
> fase 6 (jf. DNA-regnefag «Matematisk sannhetskontroll»). LaTeX for all matematikk
> (`$...$` / `$$...$$`).
>
> **Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemiddelkode **D** — kun
> godkjent enkel kalkulator, **ingen** formelsamling, notatark, Rottmann eller
> vedlagt formelark. Definisjoner, teoremformuleringer og standardbevis-skjeletter
> må sitte **utenat**. Boka bygger derfor et kompakt «huskeapparat» (definisjons-/
> teorem-/bevismal-kort) som gjennomgående flashcard-kilde. Teori-Oppgave 1 (§ Del 10)
> tester nettopp dette.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4145` |
| Tittel | **TMA4145 Lineære metoder (NTNU) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4145 Lineære metoder». |
| Arketype | **Regnefag — bevis-/teori-variant** (`DNA-regnefag.md`). Se §2 «Arketypetilpasning»: makrostruktur + drillkapitler + øvingseksamener beholdes, men fasiten er ofte et **bevis / rigorøst argument** (ε-argument, aksiomverifikasjon, eksistens/entydighet) framfor et entydig tallsvar. Nærmeste forbilder: `mat2400` (UiO reell analyse — metriske rom, Banach FPT, Hilbert-/operatorapparat på bevisnivå) og `mat1120` (UiO lineær algebra — egenverdier, Gram–Schmidt, minste kvadrater, spektralteorem, SVD). TMA4145 forener BEGGE på et abstraksjonsnivå over: fra endeligdimensjonal matriseregning til uendeligdimensjonale følge-/funksjonsrom med bevisføring. |
| Antall kapitler | **36** (Del 0: 2 · temadeler 1–9: 29 · Del 10 eksamenstrening: 5) |
| Estimert totaltid | **~2 010 min ≈ 33,5 timer** (per kapittel under) |
| Quiz totalt | **574** (krav ≥500) |
| Flashcards totalt | **612** (bevisemne uten hjelpemidler → høy definisjons-/teoremtetthet; krav ≥500) |

**Pitch (ett avsnitt):** TMA4145 er et **teoretisk, bevisorientert** emne i abstrakt
lineær algebra med sterkt innslag av innledende funksjonalanalyse — en helt annen
sjanger enn kokebok-lineæralgebra à la TMA4110. 4 timers skriftlig skoleeksamen,
**kode D** (kun enkel kalkulator, ingen formelsamling eller notatark). Fire søyler er
praktisk talt garantert på hvert sett: **(1) metriske rom + Banachs fikspunktteorem /
kontraksjon** (ofte anvendt på Picard-iterasjon, Newtons metode eller
integraloperatorer), **(2) beste approksimasjon / korteste avstand til et underrom**
i et indreproduktrom (Gram–Schmidt + projeksjon **eller** minste kvadraters
normallikninger), **(3) spektralteori** (egenverdier, diagonalisering,
spektralteoremet, Jordan-form og matriseeksponential `exp(tA)` for `ẋ=Ax`), og **(4)
indreprodukt-/Hilbert-rom-teori** (Cauchy–Schwarz, ortonormale følger, Bessel/
Parseval, Riesz' representasjonsteorem, selvadjungerte/unitære/normale operatorer).
Nesten hvert sett åpner med en **Oppgave 1 av ren teori** — «gi definisjonen av fire
begreper» (Stacey 2008–2011) eller en **10-punkts sann/usann-oversikt** (Ehrnström
2012→). **Alle andre svar skal begrunnes rigorøst.** Boka er bygd baklengs fra det
sensor faktisk premierer: **rigorøs bevisføring**, korrekt behandling av **eksistens
OG entydighet**, fullstendige **aksiomsjekker**, og korrekt bruk av teoremenes
**«hviss»-former** — ikke rå tallregning.

**Kritisk notasjonsregel (emnets faste apparat):** `(M,d)` metrisk rom; `‖·‖`,
`‖·‖∞`, `‖·‖₂`, `‖·‖_p` normer; `⟨·,·⟩` indreprodukt (reelt/komplekst med
konjugatsymmetri); `B_r(x)` kule; `T*` adjungert; `‖T‖=sup_{‖x‖=1}‖Tx‖` operatornorm;
`A=TJT⁻¹` Jordan; `exp(tA)` matriseeksponential; `A=UΣVᵀ` SVD, `A⁺=VΣ⁺Uᵀ`
pseudoinvers; `A=QR`, `PA=LU`; følgerom `ℓ^p, c₀, ℓ₀`, funksjonsrom
`L^p((a,b)), C([a,b],𝕂)`; polynomrom `Poly_k / Pₙ`; `ker/im (ran)`; `dist(x,M)`.
Skalarkropp `𝕂∈{ℝ,ℂ}`; `ℕ={1,2,3,…}`. All matematikk i LaTeX.

**Bevisst nedprioritert (begrunnes i Del 0):** elementær radreduksjon, RREF-lesning
og ren matrise-QR/LU-mekanikk **dubleres ikke** — TMA4145 tar dette som *kjent
verktøy* (fra TMA4110/matte 1–3) og bruker regnetiden på den abstrakte teorien.
LU/PA=LU + fire fundamentale underrom (25 %) og kvasi-metrikk-konstruksjoner (13 %,
Stacey-spesialitet) får kort, presis dekning, ikke egne deler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): metriske rom og
kontraksjon (kun avstandsbegrep) før normerte rom; normerte/Banach-rom før
indreproduktrom; indreprodukt/Hilbert før beste approksimasjon og operatorteori;
endeligdimensjonal spektralteori før Jordan/`exp(tA)` og SVD. Teori-Oppgave 1 og
eksamenstrening samles til slutt i Del 10 (men definisjons-/teoremkortene bygges
gjennomgående). Frekvensen styrer *omfanget*, ikke rekkefølgen: de fire garanterte
søylene (metriske rom, kontraksjon, indreprodukt/Hilbert, beste approksimasjon) og
den store beregningssøylen (spektralteori/Jordan/`exp(tA)`) får hver sin del med
teori- **og** drillkapittel og høyest kvote; lavfrekvent stoff (SVD/pseudoinvers,
LU) får kompakt dekning.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og bevishåndverk | 2 | perfekt (meta) | Formen (bevisemne, kode D uten hjelpemidler, 5–6 oppgaver, «begrunn alt rigorøst»), teori-Oppgave 1, temafrekvensene, sensorkravene, kildeforbeholdet og bevis-/notasjonshåndverket må etableres FØR fagstoffet. Bevishåndverket (kap. 0.2) er kritisk fordi «begrunn rigorøst» er sensors gjennomgående krav og fordi definisjoner må kunne utenat (kode D). |
| 1 | Metriske rom | 4 | perfekt (81 %) | Metrikk-aksiomer, åpen/lukket kule, konvergent/Cauchy, fullstendighet/ufullstendighet, kontinuitet — fundamentet for kontraksjon (Del 2) og for følge-/funksjonsromsteorien senere. Sjanger E/N. |
| 2 | Kontraksjon og Banachs fikspunktteorem | 3 | perfekt (69 %) | Kontraksjonsbevis, a-priori-estimat + iterasjonstelling, Picard-/Newton-/integraloperator-anvendelser. Fallende i Ehrnström-perioden, men fortsatt kjerne. Sjanger F. |
| 3 | Normerte rom, Banach-rom og operatornorm | 4 | kunne (44–56 %) | Norm-aksiomer, begrenset ⟺ kontinuerlig, operatornorm, fullstendighet, absolutt-konvergens-kriteriet, `ℓ^p`/`c₀`/`ℓ₀`, completion/isometrisk isomorfi. Bygger bro fra metrikk til indreprodukt. Sjanger I (delvis), K. |
| 4 | Indreprodukt- og Hilbert-rom | 4 | perfekt (100 %) | Indreproduktaksiomer, Cauchy–Schwarz, parallellogramloven, ortonormalitet, Gram–Schmidt/QR, Bessel/Parseval, Fourier-utvikling. Den ene teorisøylen som er på HVERT sett. Sjanger C, D. |
| 5 | Beste approksimasjon og minste kvadrater | 3 | perfekt (100 %) | Ortogonal projeksjon + projeksjons-/minimal-avstand-teoremet, minste kvadraters normallikninger, eksistens/entydighet, moteksempler (ikke-lukket `M`, `c₀⊂ℓ^∞`). Den andre 100 %-søylen. Sjanger B, L. |
| 6 | Bundne operatorer, adjungert og funksjonaler | 4 | kunne (56–62 %) | Adjungert, selvadjungert/normal/unitær og egenskapene deres; funksjonaler på `C([0,1])`, `‖·‖∞` vs. `‖·‖₂`, Riesz-representant («er den kontinuerlig?»). Karakterskillende teorisjanger. Sjanger I, J. |
| 7 | Egenverdier, diagonalisering og spektralteoremet | 3 | perfekt (62 %, 4/4 nyest) | Egenverdier/egenvektorer (også parametrisk), diagonalisering, spektralteoremet (symmetrisk/normal ⟹ ortonormal egenbasis, hviss-form). Den store beregningssøylen; dominerer nyeste stil. Sjanger G. |
| 8 | Jordan-normalform og matriseeksponential | 2 | perfekt (Ehrnström-signatur) | Jordan-kjeder via generaliserte egenvektorer, `exp(tJ)`/`exp(tA)`, løsning av `ẋ=Ax`. Nærmest en Ehrnström-signatur (H2012/H2013/S2013). Sjanger H. |
| 9 | SVD, pseudoinvers og QR/LU-maskineri | 2 | kjenne (56 %, avtakende) | SVD via `AᵀA`, pseudoinvers `A⁺`, kobling `AᵀA=RᵀR`, LU/fire fundamentale underrom. Young-boks-arv (Periode A-tung), avtar etter læreverkskiftet — solid beredskap, ikke bærebjelke. Sjanger M, L. |
| 10 | Teori-Oppgave 1 og eksamenstrening | 5 | perfekt (meta) | Teori-Oppgave 1 (definisjonssett + 10-punkts sann/usann med de faste fellene), sjangerspill (løsningsoppskrifter A–N), og **3 komplette øvingseksamener** (5–6 oppgaver, kode D, full modellbesvarelse med rigorøse begrunnelser). Sjanger A. |

Rasjonale: de fire garanterte søylene og spektral-/Jordan-blokken får hver sin del
med drillkapittel og høyest kvote; bevishåndverket (begrunnelses-/aksiom-/ε-mal) er
gjennomgående fordi det premieres i seg selv på tvers av temaene; SVD/pseudoinvers og
LU får kompakt dekning fordi de er avtakende ved NTNU. **Nesten hele bredden testes
hvert sett** — prioriteringen styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og bevishåndverk |
| 1 | Metriske rom |
| 2 | Kontraksjon og Banachs fikspunktteorem |
| 3 | Normerte rom, Banach-rom og operatornorm |
| 4 | Indreprodukt- og Hilbert-rom |
| 5 | Beste approksimasjon og minste kvadrater |
| 6 | Bundne operatorer, adjungert og funksjonaler |
| 7 | Egenverdier, diagonalisering og spektralteoremet |
| 8 | Jordan-normalform og matriseeksponential |
| 9 | SVD, pseudoinvers og QR/LU-maskineri |
| 10 | Teori-Oppgave 1 og eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Teori-Oppgave 1 (gi definisjon av fire begreper / formuler et teorem — ELLER
10-punkts sann/usann-oversikt uten bevis; puggbar, høy uttelling) · **B** Beste
approksimasjon / korteste avstand til underrom (Gram–Schmidt-projeksjon ELLER minste
kvadraters normallikninger; eksistens/entydighet via projeksjonsteoremet; moteksempler)
· **C** Indreprodukt-/Hilbert-teori (verifiser indreprodukt; Cauchy–Schwarz;
parallellogram-testen; ortonormalitet; Bessel/Parseval; Fourier-utvikling; Riesz) ·
**D** Gram–Schmidt / QR-faktorisering (ortonormaliser basis/polynombasis; induktiv
konstruksjon + bevis for ortonormalitet) · **E** Metriske rom (verifiser metrikk;
åpen/lukket kule; fullstendighet/ufullstendighet; konvergent⟹Cauchy; kontinuitet) ·
**F** Kontraksjon / Banachs fikspunktteorem (kontraksjonsbevis `α<1` + fullstendighet;
a-priori-estimat + iterasjonstelling; Picard/Newton/integraloperator) · **G**
Egenverdier/diagonalisering/spektralteorem (finn egendata, også parametrisk; ortonormal
egenbasis ⟺ symmetrisk/normal) · **H** Jordan-form + `exp(tA)` (Jordan-kjeder;
`exp(tA)` for `ẋ=Ax`) · **I** Bundne operatorer (operatornorm oppnådd; adjungert;
selvadjungert/normal/unitær og egenskaper) · **J** Funksjonaler på `C([0,1])`, `‖·‖∞`
vs. `‖·‖₂`, kontinuitet via Cauchy–Schwarz, Riesz-representant (og «er representanten
i `C([0,1])`?») · **K** Følgerom `ℓ^p`/`c₀`/`ℓ₀`, fullstendighet, absolutt konvergens,
completion · **L** Lineære systemer, kjerne/bilde, minimum-norm og minste kvadrater på
matrisenivå · **M** SVD / pseudoinvers (`A⁺=VΣ⁺Uᵀ` via `AᵀA`) · **N**
Konstruksjonsoppgaver: kvasi-metrikk / uvanlige metrikker/normer (Stacey).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Begrunn alt rigorøst; skriv ned antakelser.** Ordrett instruks på hvert sett
   (unntatt Oppg. 1). Ubegrunnet svar gir ikke uttelling — dette er et bevisemne.
2. **Teorem-/begrepsnavn skal bæres eksplisitt:** «Banachs fikspunktteorem»,
   «spektralteoremet», «Cauchy–Schwarz», «Riesz' representasjonsteorem»,
   «projeksjons-/minimal-avstand-teoremet», «parallellogramloven», «rangteoremet».
   Fasiten skriver dem ut.
3. **Definisjoner må sitte utenat** (kode D). Oppgave 1 tester dette; senere oppgaver
   forutsetter at man kan gjengi definisjonen man skal bruke.
4. **Eksistens *og* entydighet behandles separat** i approksimasjonsoppgaver: er `M`
   lukket/konveks/ikke-tom? oppnås infimum? er minimumspunktet entydig? Fasiten
   trekker fram moteksempler der det feiler.
5. **Flere metoder honoreres eksplisitt:** Gram–Schmidt-projeksjon vs. minste
   kvadraters normallikninger; SVD vs. direkte egenverdiregning — fasiten viser
   jevnlig begge.
6. **Terskel-/poenglogikk:** i Ehrnström/Stacey-systemet lønner **bredde** seg —
   mange akseptable, godt begrunnede delbesvarelser flytter deg over garantigrensene
   (H2013: fem akseptable → E; sju akseptable m/ minst én god → D; osv.). Det siste
   delpunktet i en oppgave (ofte teoretisk tyngst) gir ekstra uttelling.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** **Kontraksjon uten fullstendighet/ikke-tomhet** — påvise `α<1` uten å nevne at
rommet er fullstendig og ikke-tomt (Banach FPT krever begge); eller hevde fikspunkt
uten `α<1`. · **#2** **Beste approksimasjon uten eksistens/entydighet-drøfting** —
regne «nærmeste punkt» uten å begrunne at `M` er lukket/konveks, eller overse at det
*ikke* finnes (ikke-lukket `M`, `c₀⊂ℓ^∞`). · **#3** **Ufullstendig aksiomsjekk** —
hoppe over positivitet/ikke-degenerasjon i indreprodukt-/metrikkverifikasjon, eller
anta symmetri der `g` er en kvasi-metrikk. · **#4** **Spektralteoremet feilbrukt** —
tro at enhver diagonaliserbar matrise har *ortonormal* egenbasis (kun symmetriske/
normale gjør det); glemme generaliserte egenvektorer ved defekt egenverdi. · **#5**
**Parallellogram-testen glemt** — ikke sjekke om en norm kommer fra et indreprodukt
(`‖·‖∞` gjør det ikke). · **#6** **Riesz-representant antatt kontinuerlig** —
konkludere at representanten `g∈C([0,1])` når den egentlig er en indikator i `L²`. ·
**#7** **Operatornorm anslått, ikke oppnådd** — gi en øvre skranke for `‖T‖` uten å
utvise et element som realiserer den (kreves både `‖Tx‖≤c‖x‖` og et likhetseksempel).
· **#8** **A-priori-estimatet** — feil eksponent (`αⁿ` vs. `αⁿ/(1−α)`), eller runde
antall iterasjoner **ned** i stedet for opp. · **#9** **Fullstendighet forvekslet med
lukkethet** — påstå at et normert rom er Banach uten å vise at Cauchy-følger
konvergerer *i rommet* (feiler for `ℓ₀`, `P(ℝ)`, `(C,‖·‖₂)`). · **#10** **Sann/usann-
feller** — `Pₙ(ℝ)≅ℝⁿ` (nei, `ℝⁿ⁺¹`), «dualen til `ℝⁿ` er `ℂⁿ`» (nei),
«Cauchy–Schwarz i ethvert Banach-rom» (nei), «alle `ℓ^p` er Hilbert-rom» (nei, bare
`ℓ²`).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i bevis-/teori-variant — ikke rendyrket tallregnende.** DNA-regnefag
   forutsetter regne-/utledningsoppgaver med entydige tallsvar. TMA4145 har en del
   ren regning (egenverdier, Gram–Schmidt, `exp(tA)`, normallikninger), men flertallet
   av deloppgavene er **bevis/rigorøse argumenter** (aksiomverifikasjon, ε-/delfølge-
   argumenter, eksistens/entydighet, «hviss»-retninger). Fra DNA-regnefag beholdes:
   makrostrukturen (Del 0 eksamenskart → temadeler etter avhengighet → eksamenstrening),
   øvingseksamenene, **drillkapittel for hver bærebjelke-sjanger**, og frekvensstyrt
   kapittelvekting. Den viktigste tilpasningen er at mange fasiter er *bevis* med
   eksplisitt teoremnavning og aksiomsjekk framfor et tallutledet sluttsvar — men
   drill-logikken er identisk. **Bevishåndverket (kap. 0.2)** formaliserer de faste
   bevismalene (metrikk-/norm-/indreproduktverifikasjon; kontraksjon; eksistens/
   entydighet; ε-argument) slik at leseren kan gjenkjenne og fylle malen på eksamen.
2. **«Symbol- og formelliste» → «Definisjons-, teorem- og bevismalliste».** README-
   kravet om en `collapsible` rett etter Forkunnskaper beholdes, men fylles for et
   bevisemne uten hjelpemidler: hvert delkapittel får en `collapsible` som samler
   **definisjonene, teoremformuleringene og bevismalene** kapitlet krever utenat
   (kode D — ingen formelsamling). Fordi ingenting deles ut, markeres alt som «må
   sitte».
3. **Flashcards tungt vektet (612).** Fordi eksamen er uten hjelpemidler og teori-
   Oppgave 1 tester definisjoner/utsagn direkte, er faget svært flashcard-egnet:
   **definisjon↔begrep**-kort (metrisk rom, Cauchy-følge, indreprodukt, Hilbert-rom,
   selvadjungert, normal, unitær, kontraksjon, operatornorm), **teorem↔hypotese/
   konklusjon**-kort (Banach FPT, spektralteoremet, Cauchy–Schwarz, Riesz,
   projeksjonsteoremet, parallellogramloven), **sann/usann-felle**-kort (de faste
   fellene i #10), og **bevismal-steg**-kort (aksiomrekkefølge; kontraksjon → Banach;
   Bessel → rest ortogonal → null). **Quiz-profilen** driller nabobegrep-distraktorer
   (kontinuerlig/uniformt kontinuerlig, Cauchy/konvergent, lukket/fullstendig,
   symmetrisk/normal/selvadjungert, indreprodukt/norm, `ℓ²`/`ℓ^p`, algebraisk/
   geometrisk multiplisitet, 1,2-/1,4 finnes ikke her — men kinetisk analogen er
   projeksjon vs. minste kvadrater).
4. **Drillkapitler for bærebjelke-sjangrene (i tråd med DNA-regnefag).** Metriske rom
   (1.4), normerte rom/følgerom (3.4), Gram–Schmidt/indreprodukt (4.4), best
   approksimasjon/minste kvadrater (5.3), operatorer/Riesz (6.4), spektralteori (7.3)
   og Jordan/`exp(tA)` (8.2) får hvert sitt **drillkapittel** rett etter teorien, fordi
   disse er de mest resirkulerte og mekaniserbare sjangrene.
5. **Ingen oppdiktede teoremer eller falske ubetingede påstander.** Fortegns-,
   entydighets- og «hviss»-påstander (særlig spektralteoremets retninger og «finnes
   nærmeste punkt») verifiseres/kvalifiseres FØR de skrives; en «Vis at …»-oppgave der
   påstanden ikke holder ubetinget er FORBUDT (verre enn en manglende oppgave — jf.
   DNA-regnefag). Usikre detaljer merkes `(verifiser)`.

**Avvik fra prompt-ordningen (dokumentert):** Analysen §7 vekter kontraksjon og
Jordan/`exp(tA)` som sensoravhengige (kontraksjon fallende, Jordan stigende). Boka
holder BEGGE som fulle deler (Del 2 og Del 8) fordi vektingen kan svinge med
faglærer, jf. usikkerhetsmomentet i analysen §7. SVD/pseudoinvers (Young-boks-arv,
avtakende) legges i Del 9 som beredskap, ikke egen søyle. Elementær radreduksjon/RREF
dubleres bevisst ikke (kryssbok-lenke til [mat1120](/mat1120/mat1120-1-1) og
TMA4110 for den som trenger oppfrisking).

### Kapittel-DNA A — teori-/beviskapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–N) temaet inngår i, og
   hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner
   IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker
   (README-leserkrav), etterfulgt av `collapsible` **Definisjons-, teorem- og
   bevismalliste** (alt kapitlet krever utenat — ingen formelsamling på eksamen).
   I tunge sene kapitler VISES de 2–3 nøkkeldefinisjonene/-teoremene ferdig oppfrisket
   («Sist du var her»), ikke bare lenke.
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvilket spørsmål verktøyet/
   teoremet besvarer, gjerne med et hverdagsanker FØR formalismen (jf. README).
4. `definition` **Definisjonskontrakt** — kjernebegrepene i emnets notasjon.
   **Toppnivå med `title` — dette er flashcard-kilden.** Åpner med forklaringen i ORD;
   formelen/aksiomene kommer etter (aldri en ligning som første linje).
5. `theorem` **Teoremkontrakt** — de sentrale teoremene med hypotese og konklusjon
   presist (Banach FPT, spektralteoremet, Cauchy–Schwarz, Riesz, projeksjonsteoremet).
   Utledninger/bevis som eksamen krever *aktivt* vises steg for steg med en
   «Intuisjon:»-linje etter hvert steg; resultater som bare skal *brukes* presenteres
   uten fullt bevis (merk skillet).
6. `text` **Bevis-/løsningsprosedyre** — algoritmisk «slik fører du beviset» som
   nummererte trinn (ett trinn = ett sensor-moment), f.eks. metrikkverifikasjon:
   (1) ikke-negativitet + null-iff, (2) symmetri, (3) trekantulikhet; eller best
   approksimasjon: (1) er `M` lukket/konveks/ikke-tom, (2) ortonormaliser, (3)
   projiser, (4) avstand via Pythagoras, (5) entydighet.
7. `warning` **Typiske feil** — feilkodene (#1–#10) som gjelder temaet; inkl.
   eksplisitt «riktig svar uten begrunnelse = ingen/sterkt redusert uttelling»
   (sensorkrav 1).
8. `example` × 2–4 **Modellbevis/-svar** — første enkelt, siste på **eksamensnivå** og
   modellert på en reell sjanger (A–N). Løsningen skrives slik en toppbesvarelse ser
   ut: teoremnavn båret eksplisitt, alle aksiomer/steg med, eksistens OG entydighet
   der relevant.
9. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne tall/rom). Alle med
   `solution` + `hints` (første hint = hjemmelen/teoremet/første grep, aldri
   konklusjonen). Hver oppgave merket med sjangerkode og hva sensor premierer.
10. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter (definisjoner, teoremer,
    aksiomer) fra kapitlet og forutgående kapitler det bygger på.

### Kapittel-DNA B — drillkapittel (1.4/3.4/4.4/5.3/6.4/7.3/8.2)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Definisjons-/teorem-/bevismalliste**
   (sjangerens apparat i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte for sjangeren (nummererte
   trinn), avsluttet med begrunnelses-/teoremnavnings-malen.
4. `example` **Gjennomført eksamenscase** med sensor-margnotater om hva som gir
   uttelling ved hvert steg (aksiomsjekk / eksistens-entydighet / teoremnavn).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstreningskapitlene (Del 10) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–N) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per H2003–S2014-arkivet».
> **Definisjonskontrakt** = begreper som SKAL med (flashcard-kilden).
> **Teoremkontrakt** = teoremene kapitlet krever aktivt, med hypotese/konklusjon.
> **Kvote** = quiz/flashcards. Kryssbok-lenkene peker på eksisterende `mat1120`-/
> `mat2400`-kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og bevishåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4145
**id:** `tma4145-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig, **kode D uten formelsamling/
  notatark**, 5–6 oppgaver, «begrunn alt rigorøst»), teori-Oppgave 1, de fire
  garanterte søylene + spektral-/Jordan-blokken, temafrekvensene, sensorkravene og
  kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet H2003–S2014). Skal formidle: (a)
  **formen** — 4 t skriftlig skoleeksamen, kode D (kun enkel kalkulator, INGEN
  formelsamling/notatark/Rottmann), 5–6 oppgaver, alle svar begrunnes rigorøst
  (unntatt Oppg. 1), ingen klassisk flervalgsdel; (b) **de fire 100/81/69 %-søylene**
  + beregningssøylen: indreprodukt/Hilbert (100 %), beste approksimasjon (100 %),
  metriske rom (81 %), kontraksjon/Banach FPT (69 %), spektralteori inkl. Jordan/
  `exp(tA)` (62 %, men 4/4 nyest); (c) **temafrekvens-tabellen** (16 sett) — se §2/
  analysen §2; (d) **sensorkravene** (§2); (e) **kildeforbeholdet** — arkivet stopper
  i 2014; kont. S2011/S2013/S2014 mangler løsningsforslag; faglærer- og læreverk-
  skifte gir vektingsvariasjon (Young→Stacey→Ehrnström); (f) **notasjons-/
  begrepsapparatet** (henvis til 0.2). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–N som studentens sjekkliste med frekvens
  per sjanger; prognosen for neste sett (nesten sikkert: teori-Oppgave 1; én
  spektralteori-/matriseoppgave (ofte Jordan + `exp(tA)`); én approksimasjons-/
  indreproduktoppgave (Gram–Schmidt/projeksjon eller minste kvadrater); én metriske-
  rom-/kontraksjonsoppgave; én operator-/Hilbert-oppgave (operatornorm, selvadjungert/
  unitær, Riesz)). **Karakter-realisme:** C er en god og vanlig karakter; terskel-
  logikken (bredde slår dybde) forklares (sensorkrav 6). Ingen forkunnskapsblokk
  (metakapittel).
- **Typiske feil:** Metafeilene: svare uten begrunnelse (sensorkrav 1); tro at man kan
  slå opp definisjoner (kode D — de må sitte); vente formelark (finnes ikke); tro at
  arkivfrekvensene er ferske (arkivet stopper 2014; verifiser mot nyere sett).
- **Del 0-pakke:** «Slik leser du denne boka»-boks (sjangerkodene A–N + at feil har et
  samlet register i 10.2 + at tunge symboler forklares der de brukes); «Lite tid?»-boks
  (3–5-dagers hurtigrute + gjøre-vs-lese-tider ×1,5 for håndskrift); kildenote for
  frekvens-empirien (H2003–S2014, 16 sett, forbehold om nyere sett); deltidsrute
  (10–12 uker à ~8 t); «lese mye, skrive lite»-boks + minst én øvingseksamen for hånd
  på tid. Formel-minimum-siden (her: **definisjons-/teorem-minimum**) er samlet i 0.2.
- **Kvote:** 12 quiz / 14 flashcards (formfakta, søylene, temafrekvens, sensorkravene,
  sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Bevishåndverket og huskeapparatet
**id:** `tma4145-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-0-1`

- **Kapitteltype:** håndverkskapittel (meta — bevismaler + definisjons-/teorem-minimum).
- **Description:** De to ferdighetene som gir poeng på hver oppgave: å **føre et
  rigorøst bevis** (aksiomsjekk, ε-argument, eksistens/entydighet, teoremnavning) og å
  **kunne definisjons-/teorem-minimumet utenat** (kode D). Kapitlet etablerer
  bevismalene og notasjonen resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–3 på tvers av alle sjangre A–N).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; oppfrisking av mengdelære/følger fra
  matte 1–3. `collapsible` **Definisjons-, teorem- og bevismalliste:** de faste
  bevismalene (se under) + notasjonstabellen fra §1.
- **Definisjonskontrakt (flashcard-kilde):** **bevistyper** — direkte, kontrapositivt,
  ved motsigelse, ved konstruksjon av moteksempel; **ε-argumentets grammatikk**
  («la `ε>0`; velg `N` slik at …»); **«hviss»-bevis** krever begge retninger;
  **eksistens vs. entydighet** som to separate plikter. **Definisjons-/teorem-minimum
  (boka som helhet skal pugges):** metrikk-aksiomene, norm-aksiomene, indreprodukt-
  aksiomene, Cauchy-følge, fullstendighet, kontraksjon, operatornorm, egenverdi,
  selvadjungert/normal/unitær; Banach FPT, spektralteoremet, Cauchy–Schwarz,
  parallellogramloven, Bessel/Parseval, Riesz, projeksjons-/minimal-avstand-teoremet.
  Denne siden ER regnefagets «samlede oppslagskort» (printbar tabell).
- **Teoremkontrakt / bevismaler (normativ — brukes uendret i alle kapitler):**
  **(M1) aksiomverifikasjon** (metrikk/norm/indreprodukt): sjekk hvert aksiom i fast
  rekkefølge, ikke hopp over positivitet/ikke-degenerasjon (#3). **(M2)
  kontraksjon → fikspunkt:** vis rommet fullstendig + ikke-tomt, vis `d(Tx,Ty)≤αd(x,y)`
  med `α<1`, sitér Banach FPT (#1). **(M3) beste approksimasjon:** `M` lukket/konveks/
  ikke-tom → projeksjonsteoremet gir entydig nærmeste punkt; ellers moteksempel (#2).
  **(M4) fullstendighet:** ta vilkårlig Cauchy-følge, konstruer kandidatgrense, vis at
  den ligger *i rommet* og at følgen konvergerer til den (#9). **(M5) ortonormal
  egenbasis ⟺ symmetrisk/normal** (spektralteoremets hviss-form, #4).
- **Bevis-/løsningsprosedyre:** (1) identifiser sjangeren (A–N) og hvilken bevismal
  (M1–M5) som gjelder; (2) skriv ned antakelsene; (3) før malen steg for steg med
  teoremnavn; (4) sjekk eksistens OG entydighet separat der relevant; (5) navngi
  teoremet i konklusjonen.
- **Typiske feil:** #1 (kontraksjon uten fullstendighet), #3 (ufullstendig aksiomsjekk),
  #9 (fullstendighet forvekslet med lukkethet); i tillegg: bruke et teorem uten å
  sjekke hypotesene, og «bevise» en «hviss» bare én vei.
- **Modellbevis:** «Vis at `d(x,y)=|x−y|/(1+|x−y|)` er en metrikk på `ℝ`» (M1, alle tre
  aksiomer, med `f(t)=t/(1+t)` voksende for trekantulikheten); «Formuler Banachs
  fikspunktteorem presist med alle hypoteser og konklusjon» (definisjons-/teoremkort).
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 10).

### Del 1 — Metriske rom *(prioritet: PERFEKT — 81 %)*

#### Kapittel 1.1: Metrikk-aksiomene og verifikasjon
**id:** `tma4145-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-0-2`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** De fire metrikk-aksiomene og hvordan man **verifiserer** at en
  oppgitt `d` er en metrikk — inkludert de vanlige eksamensmetrikkene (`|arctan x−
  arctan y|/π`, `ln(1+|x−y|)`, `|x−y|/(1+|x−y|)`, diskret metrikk, radiell metrikk på
  `ℝ²`).
- **Eksamensbelegg:** Sjanger E (13/16, 81 %). «Vis at `d` er en metrikk» åpner de
  fleste metriske-rom-oppgavene. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Metriske rom og metrikk-aksiomene](/mat2400/mat2400-1-1)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:** metrikk-
  aksiomene + bevismal M1.
- **Definisjonskontrakt (flashcard-kilde):** **metrikk** `d:M×M→[0,∞)` med (i)
  `d(x,y)=0 ⟺ x=y`, (ii) symmetri `d(x,y)=d(y,x)`, (iii) trekantulikhet
  `d(x,z)≤d(x,y)+d(y,z)`; **metrisk rom** `(M,d)`; **pseudometrikk/kvasi-metrikk** som
  avvikstilfeller (kvasi: symmetri feiler — sjanger N).
- **Teoremkontrakt:** trekantulikheten for sammensatte metrikker via en voksende,
  konkav `f` (f.eks. `f(t)=t/(1+t)`, `f=ln(1+t)`, `f=arctan`) med
  `f(a+b)≤f(a)+f(b)` — vis subadditivitet som eget lemma.
- **Bevis-/løsningsprosedyre:** M1 — (1) `d≥0` og null-iff, (2) symmetri, (3)
  trekantulikhet (bruk subadditivitets-lemmaet der `d=f∘|·−·|`).
- **Typiske feil:** #3 (hoppe over null-iff eller positivitet); anta symmetri der `g`
  er en kvasi-metrikk; bruke trekantulikheten uten å bevise subadditiviteten til `f`.
- **Modellbevis:** «Vis at `d(x,y)=|arctan x−arctan y|/π` er en metrikk på `ℝ`»;
  «Avgjør om `g(x,y)=(x−y)²` er en metrikk» (nei — trekantulikheten feiler; gi
  moteksempel).
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 1.2: Kuler, åpne/lukkede mengder og konvergens
**id:** `tma4145-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-1-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Åpen/lukket kule og mengde, konvergent følge, Cauchy-følge og
  koblingen konvergent ⟹ Cauchy — pluss de kontraintuitive eksemplene (åpen enhetskule
  som også er lukket / hele rommet under en avgrenset metrikk).
- **Eksamensbelegg:** Sjanger E (13/16). «Vis at den åpne enhetskula om 0 også er
  lukket» (H2013 O3-typen). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Topologi i metriske rom](/mat2400/mat2400-1-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **åpen kule** `B_r(x)={y:d(x,y)<r}`;
  **åpen/lukket mengde**; **konvergent følge** (`d(xₙ,x)→0`); **Cauchy-følge**
  (`d(xₙ,xₘ)→0` når `n,m→∞`); **rand/opphopningspunkt/tillukning** (kort).
- **Teoremkontrakt:** **konvergent ⟹ Cauchy** (standard ε-argument via
  trekantulikheten); en mengde er lukket ⟺ komplementet er åpent ⟺ den inneholder alle
  sine grenseverdier.
- **Typiske feil:** anta at åpen kule aldri er lukket (feil under avgrensede metrikker);
  bruke `d(xₙ,xₘ)→0` uten uniformitet i `n,m`; blande rand og indre.
- **Modellbevis:** «Vis at `(ℝ, arctan-metrikk)` har enhetskula `B_1(0)=ℝ`, som er både
  åpen og lukket»; «Vis at enhver konvergent følge i et metrisk rom er Cauchy».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 1.3: Fullstendighet og kontinuitet
**id:** `tma4145-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-1-2`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Fullstendige og ufullstendige metriske rom (konstruer Cauchy-følge
  uten grense), Lipschitz-/kontinuitet via metrikk, og kontinuitet av
  identitetsavbildningen mellom to metrikker (én vei kontinuerlig, den andre ikke).
- **Eksamensbelegg:** Sjanger E + Lipschitz (13/16 + 5/16). «Vis at `(ℝ,d)` ikke er
  fullstendig» (arctan-metrikken; `xₙ=n` er Cauchy uten grense). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Kompletthet og Cauchy-følger](/mat2400/mat2400-1-3)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:** bevismal M4.
- **Definisjonskontrakt (flashcard-kilde):** **fullstendig rom** (enhver Cauchy-følge
  konvergerer *i rommet*); **kontinuerlig avbildning** (ε–δ og følgekarakterisering);
  **Lipschitz** (`d(fx,fy)≤L d(x,y)`); **isometri**; **tetthet** (kort).
- **Teoremkontrakt:** M4-malen for å avgjøre fullstendighet; Lipschitz ⟹ (uniformt)
  kontinuerlig; følgekarakteriseringen av kontinuitet.
- **Typiske feil:** #9 (fullstendighet forvekslet med lukkethet); glemme å vise at
  kandidatgrensen ligger *i rommet*; anta at kontinuitet er symmetrisk mellom to
  metrikker på samme mengde.
- **Modellbevis:** «Vis at `(ℝ, arctan-metrikk)` er ufullstendig ved å gi en Cauchy-
  følge uten grense»; «Vis at `f(x)=cos x` er Lipschitz på `ℝ` med konstant 1».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 1.4: Drill — metrikk, kuler, fullstendighet
**id:** `tma4145-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-1-3`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill på Del 1: verifiser metrikk, avgjør åpen/lukket,
  konstruer Cauchy-følge uten grense, avgjør fullstendighet — alle med rigorøs
  begrunnelse.
- **Eksamensbelegg:** Sjanger E/N (13/16). Gjengangermetrikkene (arctan, `ln(1+|·|)`,
  diskret, radiell) som drillmål. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.3. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (Del 1 i kortform).
- **Løsningsoppskrift:** (1) hvilken sjanger (metrikk-verifikasjon / kule / fullstendighet
  / kontinuitet); (2) velg bevismal M1/M4; (3) før steg for steg; (4) for
  «ufullstendig»: pek ut den eksplisitte Cauchy-følgen uten grense.
- **Typiske feil:** #3, #9; glemme moteksempel-kravet.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A metrikk-verifikasjon · 1.B kuler + åpen/lukket ·
1.C fullstendighet + kontinuitet · 1.D samlet metriske-rom-prøve på eksamensnivå).

### Del 2 — Kontraksjon og Banachs fikspunktteorem *(prioritet: PERFEKT — 69 %)*

#### Kapittel 2.1: Kontraksjoner og Banachs fikspunktteorem
**id:** `tma4145-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-1-3`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Kontraksjon, Banachs fikspunktteorem med bevisskisse, a-priori-
  estimatet `d(xₙ,x*)≤αⁿ/(1−α)·d(x₀,x₁)` og iterasjonstelling (rund opp).
- **Eksamensbelegg:** Sjanger F (11/16, 69 %; 5/5 i Periode A, fallende i Ehrnström).
  «Vis at `T` er en kontraksjon → entydig fikspunkt; bestem antall iterasjoner for gitt
  nøyaktighet.» Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.3; [Kontraksjoner og Banachs fikspunktteorem](/mat2400/mat2400-5-1)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:** bevismal M2.
- **Definisjonskontrakt (flashcard-kilde):** **kontraksjon** `d(Tx,Ty)≤α d(x,y)` med
  fast `α∈[0,1)`; **fikspunkt** `Tx*=x*`; skillet mellom kontraksjon og «`d(Tx,Ty)<
  d(x,y)`» (sistnevnte gir ikke fikspunkt uten kompakthet).
- **Teoremkontrakt:** **Banachs fikspunktteorem** — fullstendig, ikke-tomt `M` + `T`
  kontraksjon ⟹ entydig fikspunkt, og `xₙ₊₁=Txₙ` konvergerer til det; **a-priori-
  estimatet** utledes fra den geometriske rekka. Bevisskisse: `{xₙ}` er Cauchy fordi
  `d(xₙ,xₙ₊₁)≤αⁿ d(x₀,x₁)`.
- **Bevis-/løsningsprosedyre:** M2 — (1) `M` fullstendig + ikke-tomt, (2) `α<1`, (3)
  siter Banach FPT for eksistens+entydighet, (4) iterasjonstelling: løs `αⁿ/(1−α)·
  d(x₀,x₁)≤ε` for `n`, rund **opp**.
- **Typiske feil:** #1 (glemme fullstendighet/ikke-tomhet); #8 (feil eksponent eller
  runde ned); forveksle `α<1` med `d(Tx,Ty)<d(x,y)`.
- **Modellbevis:** «Vis at `T(x)=x/2+1` er en kontraksjon på `ℝ`, finn fikspunktet og
  antall iterasjoner for `10⁻³`-nøyaktighet fra `x₀=0`» (numerisk parametersjekk av
  estimatet — DNA-regnefag sannhetskontroll).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.2: Anvendelser — Picard, Newton og integraloperatorer
**id:** `tma4145-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-2-1`

- **Kapitteltype:** beviskapittel (perfekt/kunne).
- **Description:** Banach FPT anvendt: Picard-integraloperatoren for ODE-eksistens,
  Newtons metode som kontraksjon (MVT + `|f f''|≤α|f'|²`), `cos:[0,1]→[0,1]` via
  `|sin θ|≤|θ|`, og skiftoperatorer der `T` ikke er kontraksjon men `T²` er det.
- **Eksamensbelegg:** Sjanger F + Picard (11/16 + 1/16, men beslektet overalt).
  Prioritet: perfekt (kjerneanvendelsen).
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Definisjons-/teorem-/
  bevismalliste:** Picard-operatoren `(Tx)(t)=x₀+∫₀ᵗ f(s,x(s))ds`; MVT-koblingen for
  Newton.
- **Definisjonskontrakt (flashcard-kilde):** **Picard-iterasjon**; **Newton-
  iterasjonen** `g(x)=x−f(x)/f'(x)`; betingelsen som gjør Newton til kontraksjon;
  **`T²`-triks** (hvis `T` ikke er kontraksjon, kan `T²` være det → felles fikspunkt).
- **Teoremkontrakt:** eksistens/entydighet for `x'=f(t,x)` via Banach FPT på et lukket
  intervall der Picard-operatoren kontraherer (Lipschitz i `x`).
- **Typiske feil:** #1; glemme å begrunne at Picard-operatoren avbilder rommet inn i
  seg selv; bruke Newton uten å sjekke kontraksjonsbetingelsen.
- **Modellbevis:** «Vis at integraloperatoren `(Tx)(t)=1+∫₀ᵗ x(s)ds` har et entydig
  fikspunkt i `C([0,½])` og gjenkjenn `eᵗ`»; «Vis at `cos` har et entydig fikspunkt i
  `[0,1]`».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.3: Drill — kontraksjon og iterasjonsestimat
**id:** `tma4145-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-2-2`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill: vis kontraksjon, finn fikspunkt, tell iterasjoner
  (garantert vs. faktisk), gjenkjenn lukket form fra iterasjon.
- **Eksamensbelegg:** Sjanger F (11/16). Gjengangercase (`x³` på `[0,½]`, `cos`,
  integraloperator) som drillmål. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (M2 + a-priori-estimat).
- **Løsningsoppskrift:** (1) fullstendig + ikke-tomt, (2) `α<1` (finn den beste `α`),
  (3) siter Banach FPT, (4) iterasjonstelling rund opp, (5) evt. lukket form.
- **Typiske feil:** #1, #8.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A kontraksjonsbevis + a-priori-estimat · 2.B
Picard/ODE-eksistens · 2.C Newton + `T²`-triks · 2.D samlet Banach-FPT-prøve på
eksamensnivå).

### Del 3 — Normerte rom, Banach-rom og operatornorm *(prioritet: KUNNE — 44–56 %)*

#### Kapittel 3.1: Normerte rom og Banach-rom
**id:** `tma4145-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4145-1-3`

- **Kapitteltype:** beviskapittel (kunne).
- **Description:** Norm-aksiomer, norm gir metrikk, Banach-rom (fullstendig normert),
  og absolutt-konvergens-kriteriet for fullstendighet.
- **Eksamensbelegg:** Sjanger K + del av C (44–56 %). Prioritet: kunne (grunnlag for
  indreprodukt i Del 4).
- **Forkunnskaper/kryssbok:** kap. 1.3; [Normerte rom og norm-aksiomene](/mat2400/mat2400-4-1)
  `(verifiser lenke)`, [Normerte rom](/mat1120/mat1120-4-1) `(verifiser lenke)`.
  `collapsible` **Definisjons-/teorem-/bevismalliste:** norm-aksiomer + bevismal M1/M4.
- **Definisjonskontrakt (flashcard-kilde):** **norm** (positivitet + null-iff,
  homogenitet `‖αx‖=|α|‖x‖`, trekantulikhet); **Banach-rom**; **absolutt konvergent
  rekke**; koblingen norm ↔ metrikk `d(x,y)=‖x−y‖` (translasjonsinvariant + homogen).
- **Teoremkontrakt:** et normert rom er fullstendig **hviss** enhver absolutt
  konvergent rekke konvergerer (begge veier, med delfølge-triks `‖s_{n+1}−s_n‖<2⁻ᵐ`);
  ikke enhver metrikk kommer fra en norm (translasjonsinvarians-testen).
- **Typiske feil:** #9 (fullstendighet ≠ lukkethet); glemme homogeniteten; anta at
  enhver metrikk kommer fra en norm.
- **Modellbevis:** «Vis at `‖·‖₁` på `ℝⁿ` er en norm»; «Avgjør om `d(x,y)=|arctan x−
  arctan y|` kommer fra en norm på `ℝ`» (nei — ikke homogen).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 3.2: Bundne lineære operatorer og operatornorm
**id:** `tma4145-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-3-1`

- **Kapitteltype:** beviskapittel (kunne → perfekt for operatornorm).
- **Description:** Begrenset ⟺ kontinuerlig for lineære avbildninger, operatornormen
  `‖T‖=sup_{‖x‖=1}‖Tx‖`, og hvordan man **oppnår** normen (gir både øvre skranke og et
  likhetseksempel).
- **Eksamensbelegg:** Sjanger I (del av 62 %). «Regn ut `‖T‖` og finn et element som
  oppnår den.» Prioritet: kunne (kjernen kommer igjen i Del 6). Sensorkrav #7.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Begrensede lineære operatorer og operatornorm](/mat2400/mat2400-4-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **begrenset operator** (`‖Tx‖≤C‖x‖`);
  **operatornorm** som minste slik `C`; ekvivalensen **begrenset ⟺ kontinuerlig** for
  lineære avbildninger; **lineær funksjonal** (spesialtilfelle `T:X→𝕂`).
- **Teoremkontrakt:** begrenset ⟺ kontinuerlig (bevis begge veier); `‖T‖` er en norm på
  operatorrommet.
- **Typiske feil:** #7 (anslå `‖T‖` uten å utvise element som oppnår den); tro at
  «begrenset» betyr «begrenset bilde».
- **Modellbevis:** «Regn ut operatornormen til høyreskiftet på `ℓ¹` og vis at den
  oppnås»; «Vis at en lineær avbildning mellom normerte rom er kontinuerlig hviss den
  er begrenset».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 3.3: Følgerom `ℓ^p`, `c₀`, `ℓ₀` og completion
**id:** `tma4145-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-3-1`

- **Kapitteltype:** beviskapittel (kunne).
- **Description:** Følgerommene `ℓ^p`, `c₀`, `ℓ₀`, hvorfor `ℓ₀` ikke er Banach, `c₀`
  som tillukning av `ℓ₀` i `ℓ^∞`, og completion / isometrisk isomorfi (`P(ℝ)≅ℓ₀`,
  completion `≅c₀`).
- **Eksamensbelegg:** Sjanger K (7/16, 44 %) + completion (3/16, 19 %, Ehrnström-nytt).
  Prioritet: kunne. Sensorkrav #9.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Definisjons-/teorem-/
  bevismalliste:** `ℓ^p`-/`c₀`-/`ℓ₀`-definisjonene + completion-konstruksjonen.
- **Definisjonskontrakt (flashcard-kilde):** **`ℓ^p`** (`Σ|xₖ|^p<∞`), **`ℓ^∞`**
  (begrensede følger), **`c₀`** (følger mot 0), **`ℓ₀`** (til slutt-null følger);
  **completion** (minste fullstendige rom som inneholder rommet tett, entydig opp til
  isometrisk isomorfi); **isometrisk isomorfi**.
- **Teoremkontrakt:** `c₀` er tillukningen av `ℓ₀` i `ℓ^∞`; `(ℓ₀,‖·‖∞)` er ikke Banach
  (gi Cauchy-følge uten grense i `ℓ₀`); et normert rom er fullstendig hviss enhver
  absolutt konvergent rekke konvergerer (fra 3.1).
- **Typiske feil:** #9; forveksle `c₀` og `ℓ₀`; glemme å vise tetthet i completion.
- **Modellbevis:** «Vis at `ℓ₀` ikke er fullstendig under `‖·‖∞`, og identifiser
  completion som `c₀`»; «Vis at `Pₙ(ℝ)≅ℝⁿ⁺¹`» (felle #10).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 3.4: Drill — norm, operatornorm og følgerom
**id:** `tma4145-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-3-3`

- **Kapitteltype:** drillkapittel (kunne) — DNA B.
- **Description:** Blandet drill: verifiser norm, regn operatornorm (oppnådd),
  fullstendighet av følgerom, completion.
- **Eksamensbelegg:** Sjanger I/K (44–56 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.3. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (Del 3 i kortform).
- **Løsningsoppskrift:** (1) sjanger (norm / operatornorm / fullstendighet /
  completion); (2) bevismal; (3) for operatornorm: øvre skranke **og** likhetseksempel
  (#7); (4) for Banach: vis grensen ligger i rommet (#9).
- **Typiske feil:** #7, #9, #10.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A norm-verifikasjon + norm-fra-metrikk · 3.B
operatornorm oppnådd · 3.C følgerom + fullstendighet · 3.D completion + samlet prøve).

### Del 4 — Indreprodukt- og Hilbert-rom *(prioritet: PERFEKT — 100 %)*

#### Kapittel 4.1: Indreprodukt, Cauchy–Schwarz og parallellogramloven
**id:** `tma4145-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-3-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Indreproduktaksiomene (reelt/komplekst med konjugatsymmetri),
  Cauchy–Schwarz-ulikheten med likhetsbetingelse, norm-fra-indreprodukt og
  parallellogram-testen (`‖·‖∞` kommer IKKE fra et indreprodukt).
- **Eksamensbelegg:** Sjanger C (16/16, 100 %). «Verifiser indreprodukt / vis at
  `‖·‖∞` ikke kommer fra et indreprodukt / bruk Cauchy–Schwarz for optimal konstant.»
  Prioritet: perfekt. Sensorkrav #5.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Indreproduktrom og Hilbertrom](/mat2400/mat2400-4-4)
  `(verifiser lenke)`, [Indreprodukt](/mat1120/mat1120-4-1) `(verifiser lenke)`.
  `collapsible` **Definisjons-/teorem-/bevismalliste:** indreproduktaksiomer +
  parallellogramloven.
- **Definisjonskontrakt (flashcard-kilde):** **indreprodukt** `⟨·,·⟩` — linearitet i
  første argument, konjugatsymmetri `⟨x,y⟩=\overline{⟨y,x⟩}`, positiv definitthet
  `⟨x,x⟩>0` for `x≠0`; **indre norm** `‖x‖=√⟨x,x⟩`; **Hilbert-rom** (fullstendig
  indreproduktrom); **parallellogramloven** `‖x+y‖²+‖x−y‖²=2‖x‖²+2‖y‖²`.
- **Teoremkontrakt:** **Cauchy–Schwarz** `|⟨x,y⟩|≤‖x‖‖y‖` med likhet ⟺ lineær
  avhengighet (bevis); norm kommer fra et indreprodukt **hviss** parallellogramloven
  holder (polarisering); `‖·‖∞`/`‖·‖₁` feiler testen.
- **Typiske feil:** #3 (ufullstendig aksiomsjekk), #5 (glemme parallellogram-testen);
  glemme konjugatet i komplekst tilfelle.
- **Modellbevis:** «Vis at `⟨f,g⟩=∫₀¹ f g dt` er et indreprodukt på `C([0,1])`»; «Vis
  at `‖·‖∞` på `C([0,1])` ikke kommer fra et indreprodukt» (moteksempel til
  parallellogramloven).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 4.2: Ortonormalitet, Bessel, Parseval og Fourier-utvikling
**id:** `tma4145-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-4-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Ortogonalitet og Pythagoras, ortonormale følger (lineært
  uavhengige), Bessel-ulikheten, Parseval-likheten og Fourier-utvikling i en
  fullstendig ortonormal følge (`x=Σ⟨x,eⱼ⟩eⱼ`).
- **Eksamensbelegg:** Sjanger C (16/16). «Vis Fourier-utvikling / Bessel / Parseval.»
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Definisjons-/teorem-/
  bevismalliste:** Bessel/Parseval + fullstendighetsargumentet.
- **Definisjonskontrakt (flashcard-kilde):** **ortogonal/ortonormal følge**;
  **Pythagoras** `‖x+y‖²=‖x‖²+‖y‖²` for ortogonale; **fullstendig ortonormal følge
  (ONB)**; **Fourier-koeffisient** `⟨x,eⱼ⟩`.
- **Teoremkontrakt:** en ortonormal følge er lineært uavhengig; **Bessel** `Σ|⟨x,eⱼ⟩|²
  ≤‖x‖²`; **Parseval** (likhet ⟺ fullstendig ONB); Fourier-utviklingen via «rest
  ortogonal til alt ⟹ null ved fullstendighet».
- **Typiske feil:** #3; bruke Parseval uten fullstendighet; glemme at Bessel gjelder
  også for uendelige følger.
- **Modellbevis:** «Vis Bessel-ulikheten for en ortonormal følge»; «Vis at
  `{eⁱⁿᵗ/√(2π)}` gir Fourier-utvikling i `L²(0,2π)` for en fullstendig ONB».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 4.3: Gram–Schmidt og QR-faktorisering
**id:** `tma4145-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4145-4-2`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Gram–Schmidt-prosessen (induktiv), bevis for at følgen er
  ortonormal og utspenner samme rom, og QR-faktoriseringen — både på `ℝⁿ` og på en
  polynombasis `{1,t,t²}` under et gitt integral-indreprodukt.
- **Eksamensbelegg:** Sjanger D (~9/16, del av 100 %-blokken). Prioritet: perfekt
  (verktøyet for beste approksimasjon i Del 5).
- **Forkunnskaper/kryssbok:** kap. 4.2; [Ortogonale mengder og Gram–Schmidt](/mat1120/mat1120-4-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:**
  Gram–Schmidt-formelen + QR.
- **Definisjonskontrakt (flashcard-kilde):** **Gram–Schmidt** (`vₖ` minus projeksjoner
  på tidligere `eⱼ`, normaliser); **QR-faktorisering** `A=QR` (`Q` ortonormale
  kolonner, `R` øvre triangulær); Legendre-polynomer som Gram–Schmidt på `{1,t,t²,…}`.
- **Teoremkontrakt:** induktivt bevis for at Gram–Schmidt-følgen er ortonormal og har
  samme (lukkede) span; koblingen `AᵀA=RᵀR`.
- **Typiske feil:** regnefeil i projeksjonene; glemme normaliseringen; forveksle
  rekkefølgen i `R`.
- **Modellbevis:** «Ortonormaliser `{1,t}` i `L²(0,1)` og skriv QR for tilhørende
  matrise»; «Vis induktivt at Gram–Schmidt gir en ortonormal basis».
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 4.4: Drill — indreprodukt, Cauchy–Schwarz, Gram–Schmidt
**id:** `tma4145-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-4-3`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill: verifiser indreprodukt, parallellogram-testen,
  Cauchy–Schwarz for optimal konstant, ortonormaliser, Bessel/Parseval.
- **Eksamensbelegg:** Sjanger C/D (100 %). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (Del 4 i kortform).
- **Løsningsoppskrift:** (1) sjanger (verifikasjon / CS / ortonormalisering / Fourier);
  (2) bevismal / regnemal; (3) for CS: bær ulikhet + likhetsbetingelse; (4) for
  parallellogram: konkret moteksempel der en norm feiler.
- **Typiske feil:** #3, #5.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A indreprodukt-verifikasjon + parallellogram · 4.B
Cauchy–Schwarz + optimal konstant · 4.C Bessel/Parseval/Fourier · 4.D Gram–Schmidt/QR
+ samlet prøve).

### Del 5 — Beste approksimasjon og minste kvadrater *(prioritet: PERFEKT — 100 %)*

#### Kapittel 5.1: Ortogonal projeksjon og beste approksimasjon
**id:** `tma4145-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-4-3`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Ortogonal projeksjon på et underrom, projeksjons-/minimal-avstand-
  teoremet, avstand via Pythagoras (`d²=‖x₀‖²−Σ|⟨x₀,eₖ⟩|²`), og eksistens/entydighet —
  inkludert moteksemplene der nærmeste punkt ikke finnes.
- **Eksamensbelegg:** Sjanger B (16/16, 100 %). «Finn korteste avstand fra `x₀` til
  `M=span{…}` og punktet som realiserer den.» Prioritet: perfekt. Sensorkrav #4.
- **Forkunnskaper/kryssbok:** kap. 4.3; [Ortogonal projeksjon, W⊥ og avstand](/mat1120/mat1120-5-1)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:** bevismal M3.
- **Definisjonskontrakt (flashcard-kilde):** **ortogonalt komplement** `M⊥`;
  **ortogonal projeksjon** `P_M x=Σ⟨x,eₖ⟩eₖ` (ONB for `M`); **konveks/lukket mengde**
  (hypotesene for entydig nærmeste punkt).
- **Teoremkontrakt:** **projeksjons-/minimal-avstand-teoremet** — lukket, konveks,
  ikke-tom `M` i et Hilbert-rom garanterer entydig nærmeste punkt `y₀`; `x₀−y₀⊥M`;
  avstanden via Pythagoras. Moteksempler: ikke-lukket `M`, eller `M=c₀⊂ℓ^∞` der
  infimum ikke oppnås.
- **Typiske feil:** #2 (regne nærmeste punkt uten eksistens/entydighet-drøfting);
  glemme ortonormaliseringen før projeksjon; overse at punktet ikke finnes.
- **Modellbevis:** «Finn i `L²(0,1)` korteste avstand fra `x₀(t)=t²` til `M=span{1,t}`
  og punktet som realiserer den»; «Gi et eksempel der nærmeste punkt ikke finnes».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.2: Minste kvadrater og normallikningene
**id:** `tma4145-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-5-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Minste kvadraters løsning via normallikningene `AᵀA x=Aᵀ b`, når
  den er entydig, koblingen til projeksjon, og minimum-norm-løsningen (ortogonal til
  `ker A`).
- **Eksamensbelegg:** Sjanger B/L (100 % / 56 %). Den andre løypa til beste
  approksimasjon (sensor honorerer begge, #5). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Minste kvadrater: normallikninger](/mat1120/mat1120-5-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:**
  normallikningene + minimum-norm.
- **Definisjonskontrakt (flashcard-kilde):** **minste kvadraters løsning** (minimerer
  `‖Ax−b‖²`); **normallikningene** `AᵀA x=Aᵀ b`; **minimum-norm-løsning** (den i
  `(ker A)⊥`); entydighet ⟺ `A` har lineært uavhengige kolonner.
- **Teoremkontrakt:** minste kvadraters løsning eksisterer alltid; den er entydig ⟺
  `AᵀA` er invertibel; ekvivalensen normallikninger ⟺ projeksjon av `b` på `Col A`.
- **Typiske feil:** #2; bruke normallikningene uten å sjekke rang for entydighet;
  blande minste kvadrater og minimum-norm.
- **Modellbevis:** «Finn minste kvadraters rette linje gjennom tre punkter via
  normallikningene, og verifiser med projeksjon»; «Finn minimum-norm-løsningen av et
  underbestemt system».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.3: Drill — beste approksimasjon og minste kvadrater
**id:** `tma4145-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-5-2`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill: begge løypene (Gram–Schmidt-projeksjon vs.
  normallikninger), eksistens/entydighet, moteksempler.
- **Eksamensbelegg:** Sjanger B/L (100 %). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2 (+ 4.3). `collapsible` **Definisjons-/
  teorem-/bevismalliste** (M3 + normallikninger).
- **Løsningsoppskrift:** (1) er `M` lukket/konveks/ikke-tom (#2); (2) velg løype
  (ortonormaliser+projiser ELLER normallikninger); (3) avstand via Pythagoras; (4)
  entydighet; (5) evt. moteksempel.
- **Typiske feil:** #2, #4-analogen (entydighet).
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A projeksjon + korteste avstand · 5.B
normallikninger + minimum-norm · 5.C eksistens/entydighet + moteksempler · 5.D samlet
approksimasjonsprøve på eksamensnivå).

### Del 6 — Bundne operatorer, adjungert og funksjonaler *(prioritet: KUNNE — 56–62 %)*

#### Kapittel 6.1: Adjungert, selvadjungert, normal og unitær
**id:** `tma4145-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-4-1`

- **Kapitteltype:** beviskapittel (kunne).
- **Description:** Adjungert operator `T*` (`⟨Tx,y⟩=⟨x,T*y⟩`), selvadjungert/normal/
  unitær og egenskapene deres (`|λ|=1` for unitær, ortogonale egenrom, `‖A*x‖=‖Ax‖`
  for normal).
- **Eksamensbelegg:** Sjanger I (10/16, 62 %). «Vis selvadjungerthet for en konkret
  operator; egenskaper ved normale/unitære.» Prioritet: kunne. Sensorkrav #4 (spektral-
  kobling).
- **Forkunnskaper/kryssbok:** kap. 4.1; [Begrensede lineære operatorer](/mat2400/mat2400-4-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **adjungert** `T*` via
  `⟨Tx,y⟩=⟨x,T*y⟩`; **selvadjungert** `T=T*`; **normal** `TT*=T*T`; **unitær**
  `T*T=TT*=I`; egenskapene (`|λ|=1` unitær; egenverdier reelle for selvadjungert;
  ortogonale egenrom for ulike egenverdier).
- **Teoremkontrakt:** selvadjungert ⟹ reelle egenverdier; unitær ⟹ `|λ|=1` og
  normbevaring; normal ⟹ `‖A*x‖=‖Ax‖`.
- **Typiske feil:** blande selvadjungert/normal/unitær; glemme konjugatet i komplekst
  indreprodukt; anta reelle egenverdier uten selvadjungerthet.
- **Modellbevis:** «Vis at multiplikasjonsoperatoren `f↦tf` er selvadjungert på
  `L²(0,1)`»; «Vis at egenverdiene til en unitær operator har `|λ|=1`».
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 6.2: Funksjonaler på `C([0,1])`, `‖·‖∞` vs. `‖·‖₂` og Riesz
**id:** `tma4145-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-6-1`

- **Kapitteltype:** beviskapittel (kunne).
- **Description:** Kontinuitet av integral-/evalueringsfunksjonaler via Cauchy–Schwarz,
  Riesz' representasjonsteorem (representant i `L²`), spørsmålet «er representanten i
  `C([0,1])`?» (typisk nei — indikator), og at `‖·‖∞` og `‖·‖₂` gir ulike topologier
  (`tⁿ→0` i `‖·‖₂` men ikke `‖·‖∞`).
- **Eksamensbelegg:** Sjanger J (9/16, 56 %; Stacey-tungt 6/7) + Riesz (4/16).
  Prioritet: kunne. Sensorkrav #6 (Riesz-representant ikke kontinuerlig).
- **Forkunnskaper/kryssbok:** kap. 6.1 (+ 4.1). `collapsible` **Definisjons-/teorem-/
  bevismalliste:** Riesz + `‖·‖∞`/`‖·‖₂`-koblingen.
- **Definisjonskontrakt (flashcard-kilde):** **lineær funksjonal** og kontinuitet;
  **`‖·‖∞`** vs. **`‖·‖₂`** på `C([0,1])`; **Riesz' representant** `z` slik at
  `α(x)=⟨x,z⟩`; at `(C([0,1]),‖·‖₂)` er ufullstendig.
- **Teoremkontrakt:** **Riesz' representasjonsteorem** — enhver begrenset lineær
  funksjonal på et Hilbert-rom er `x↦⟨x,z⟩` for entydig `z`; en integralfunksjonal er
  kontinuerlig via Cauchy–Schwarz; representanten trenger ikke ligge i `C([0,1])` (#6).
- **Typiske feil:** #6 (anta representant kontinuerlig); tro at `‖·‖∞` og `‖·‖₂` gir
  samme konvergens; bruke Riesz uten å sjekke at funksjonalen er begrenset.
- **Modellbevis:** «Vis at `α(f)=∫₀^{1/2} f dt` er en kontinuerlig funksjonal på
  `L²(0,1)` og finn Riesz-representanten; avgjør om den ligger i `C([0,1])`» (nei —
  indikator); «Vis at `fₙ(t)=tⁿ→0` i `‖·‖₂` men ikke `‖·‖∞`».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 6.3: Operatornorm på funksjonsrom og egenrom-dekomponering
**id:** `tma4145-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4145-6-2`

- **Kapitteltype:** beviskapittel (kunne).
- **Description:** Operatornorm på funksjonsrom (integral-/skiftoperatorer, oppnådd
  norm), refleksjonsoperatoren `f↦f(1−t)` med `R²=I` og egenrom-dekomponering
  `f=f₊+f₋`, og adjungert av deriveringsoperatoren under et punktverdi-indreprodukt.
- **Eksamensbelegg:** Sjanger I/J (56–62 %). Prioritet: kunne. Sensorkrav #7.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2 (+ 3.2). `collapsible` **Definisjons-/
  teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **operatornorm på funksjonsrom**;
  **involusjon** `R²=I` → egenverdier `±1` → `f=f₊+f₋` (symmetrisk/antisymmetrisk del);
  **adjungert av derivasjon** under gitt indreprodukt.
- **Teoremkontrakt:** en involusjon dekomponerer rommet i egenrommene for `±1`
  (`f₊=(f+Rf)/2`, `f₋=(f−Rf)/2`); operatornorm oppnås på et konkret element.
- **Typiske feil:** #7; glemme dekomponeringsformlene; feil adjungert-utregning.
- **Modellbevis:** «Vis at `Rf(t)=f(1−t)` er selvadjungert med `R²=I` på `L²(0,1)` og
  dekomponer `f`»; «Regn operatornormen til en integraloperator og vis at den oppnås».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.4: Drill — operatorer, adjungert og Riesz
**id:** `tma4145-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-6-3`

- **Kapitteltype:** drillkapittel (kunne) — DNA B.
- **Description:** Blandet drill: selvadjungert/normal/unitær, operatornorm oppnådd,
  Riesz-representant og «er den kontinuerlig?».
- **Eksamensbelegg:** Sjanger I/J (56–62 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.3. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (Del 6 i kortform).
- **Løsningsoppskrift:** (1) sjanger (adjungert / operatornorm / Riesz); (2) for
  operatornorm: øvre skranke + likhetseksempel (#7); (3) for Riesz: begrenset →
  representant → sjekk om i `C([0,1])` (#6).
- **Typiske feil:** #6, #7.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A adjungert + selvadjungert/normal/unitær · 6.B
funksjonaler + Riesz-representant · 6.C operatornorm + involusjon · 6.D samlet
operatorprøve på eksamensnivå).

### Del 7 — Egenverdier, diagonalisering og spektralteoremet *(prioritet: PERFEKT — 62 %, 4/4 nyest)*

#### Kapittel 7.1: Egenverdier, egenvektorer og diagonalisering
**id:** `tma4145-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-4-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Egenverdier/egenvektorer (også parametrisk, f.eks. trekantmatrise
  med parametere), karakteristisk polynom, algebraisk vs. geometrisk multiplisitet og
  diagonaliserbarhet.
- **Eksamensbelegg:** Sjanger G (10/16, 62 %; 4/4 nyest). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** matte 1–3 (radreduksjon); [Egenverdier, egenvektorer og egenrom](/mat1120/mat1120-3-1)
  `(verifiser lenke)`, [Diagonalisering A=PDP⁻¹](/mat1120/mat1120-3-2) `(verifiser lenke)`.
  `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **egenverdi/egenvektor** (`Av=λv`, `v≠0`);
  **karakteristisk polynom** `det(A−λI)`; **algebraisk** vs. **geometrisk
  multiplisitet**; **diagonaliserbar** ⟺ sum av geometriske multiplisiteter `=n`.
- **Teoremkontrakt:** `A` diagonaliserbar ⟺ nok lineært uavhengige egenvektorer;
  parametrisk egenverdiregning (trekantmatrise: egenverdier på diagonalen).
- **Typiske feil:** #4 (blande algebraisk/geometrisk multiplisitet); regnefeil i
  karakteristisk polynom; anta diagonaliserbarhet uten multiplisitetssjekk.
- **Modellbevis:** «Finn egenverdier og egenvektorer til en 3×3 med parameter `a`, og
  avgjør for hvilke `a` den er diagonaliserbar»; «Vis at egenvektorer for ulike
  egenverdier er lineært uavhengige».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 7.2: Spektralteoremet og ortonormal egenbasis
**id:** `tma4145-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-7-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Spektralteoremet — en reell matrise har ortonormal egenbasis
  **hviss** den er symmetrisk (`A=QDQᵀ`); den komplekse/normale versjonen; og
  rekonstruksjon av en symmetrisk matrise fra egendata.
- **Eksamensbelegg:** Sjanger G (10/16; 4/4 nyest). «Avgjør når `ℝⁿ` har ortonormal
  egenbasis; rekonstruer `A` fra egendata.» Prioritet: perfekt. Sensorkrav #4.
- **Forkunnskaper/kryssbok:** kap. 7.1 (+ 4.3); [Symmetriske matriser og spektralteoremet](/mat1120/mat1120-6-1)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:** bevismal M5.
- **Definisjonskontrakt (flashcard-kilde):** **ortogonal/unitær diagonalisering**
  `A=QDQᵀ` (`Q` ortogonal); **spektraldekomponering**; koblingen til selvadjungert/
  normal (fra 6.1).
- **Teoremkontrakt:** **spektralteoremet** — reell `A` har ortonormal egenbasis
  **hviss** `A` symmetrisk (M5); kompleks: normal ⟺ unitært diagonaliserbar; symmetrisk
  ⟹ reelle egenverdier + ortogonale egenrom.
- **Typiske feil:** #4 (tro at enhver diagonaliserbar matrise har ortonormal egenbasis
  — kun symmetriske/normale); glemme «hviss»-retningen.
- **Modellbevis:** «Rekonstruer en symmetrisk 2×2 fra gitte ortonormale egenvektorer og
  egenverdier via `A=QDQᵀ`»; «Vis at en ikke-symmetrisk matrise med reelle egenverdier
  ikke trenger ortonormal egenbasis» (moteksempel).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 7.3: Drill — egenverdier, diagonalisering og spektralteorem
**id:** `tma4145-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-7-2`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill: egenverdier (parametrisk), diagonaliserbarhet,
  ortonormal egenbasis-avgjørelse (hviss-form), rekonstruksjon fra egendata.
- **Eksamensbelegg:** Sjanger G (62 %, 4/4 nyest). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 7.1–7.2. `collapsible` **Definisjons-/teorem-/
  bevismalliste** (M5 + multiplisitetskriteriet).
- **Løsningsoppskrift:** (1) karakteristisk polynom + egenverdier; (2) egenrom +
  geometrisk multiplisitet; (3) diagonaliserbar? (4) symmetrisk/normal → ortonormal
  egenbasis (M5); (5) evt. `A=QDQᵀ`.
- **Typiske feil:** #4.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A egenverdier + parametrisk · 7.B diagonaliserbarhet
+ multiplisitet · 7.C spektralteoremet hviss-form + `A=QDQᵀ` · 7.D samlet
spektralprøve på eksamensnivå).

### Del 8 — Jordan-normalform og matriseeksponential *(prioritet: PERFEKT — Ehrnström-signatur)*

#### Kapittel 8.1: Jordan-normalform og `exp(tA)` for `ẋ=Ax`
**id:** `tma4145-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4145-7-1`

- **Kapitteltype:** beviskapittel (perfekt).
- **Description:** Jordan-normalform `A=TJT⁻¹` når algebraisk > geometrisk
  multiplisitet (Jordan-kjeder via generaliserte egenvektorer), matriseeksponentialen
  `exp(tJ)=e^{λt}(I+tN+…)` og `exp(tA)=T exp(tJ) T⁻¹`, og løsning av `ẋ=Ax, x(0)=x₀`.
- **Eksamensbelegg:** Sjanger H (Jordan 5/16, `exp(tA)` 6/16; Ehrnström-signatur
  H2012/H2013/S2013). Prioritet: perfekt. **«Sist du var her»:** vis egenverdi-/
  egenvektor-kjernereglene ferdig oppfrisket (fra 7.1) da tidsavstanden er stor.
- **Forkunnskaper/kryssbok:** kap. 7.1; [Differensiallikningssystem x′=Ax](/mat1120/mat1120-7-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste:**
  Jordan-kjede-oppskriften + `exp(tJ)`.
- **Definisjonskontrakt (flashcard-kilde):** **generalisert egenvektor**
  `(A−λI)ᵏv=0`; **Jordan-kjede** `(A−λI)vₖ=v_{k−1}`; **Jordan-blokk** `J`; **nilpotent
  del** `N`; **matriseeksponential** `exp(tA)=Σ (tA)ⁿ/n!`.
- **Teoremkontrakt:** `exp(tJ)` for én Jordan-blokk `=e^{λt}(I+tN+…+tᵏ⁻¹Nᵏ⁻¹/(k−1)!)`;
  `exp(tA)=T exp(tJ) T⁻¹`; løsningen av `ẋ=Ax` er `x(t)=exp(tA)x₀`. Spesialtriks: hvis
  `A²=I` da `exp(tA)=cosh(t)I+sinh(t)A` (H2013-typen).
- **Typiske feil:** #4 (glemme generaliserte egenvektorer ved defekt egenverdi); feil
  nilpotent-utvikling i `exp(tJ)`; glemme `T⁻¹` i tilbaketransformasjonen.
- **Modellbevis:** «Finn Jordan-formen til en 3×3 med defekt egenverdi og løs
  `ẋ=Ax, x(0)=x₀` via `exp(tA)`»; «Bruk `A²=I` til å summere `exp(tA)` direkte».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 8.2: Drill — Jordan-kjeder og `exp(tA)`
**id:** `tma4145-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4145-8-1`

- **Kapitteltype:** drillkapittel (perfekt) — DNA B.
- **Description:** Blandet drill: bygg Jordan-kjeder, regn `exp(tJ)`, transformer til
  `exp(tA)`, løs `ẋ=Ax`.
- **Eksamensbelegg:** Sjanger H (Ehrnström-signatur). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 8.1 (+ 7.1). `collapsible` **Definisjons-/teorem-/
  bevismalliste** (Jordan-kjede + `exp(tJ)`).
- **Løsningsoppskrift:** (1) egenverdier + algebraisk/geometrisk multiplisitet; (2)
  Jordan-kjeder via generaliserte egenvektorer; (3) `exp(tJ)` blokkvis; (4)
  `exp(tA)=T exp(tJ)T⁻¹`; (5) `x(t)=exp(tA)x₀`.
- **Typiske feil:** #4.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A egenverdier + generaliserte egenvektorer · 8.B
Jordan-form `A=TJT⁻¹` · 8.C `exp(tA)` + `ẋ=Ax` · 8.D samlet Jordan/`exp(tA)`-prøve på
eksamensnivå).

### Del 9 — SVD, pseudoinvers og QR/LU-maskineri *(prioritet: KJENNE — 56 %, avtakende)*

#### Kapittel 9.1: SVD og pseudoinvers
**id:** `tma4145-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-7-1`

- **Kapitteltype:** beviskapittel (kjenne).
- **Description:** Singulærverdidekomposisjon `A=UΣVᵀ` via egendekomposisjon av `AᵀA`,
  utvidelse av `U` med nullrom-vektorer, og pseudoinversen `A⁺=VΣ⁺Uᵀ` for minste
  kvadraters/minimum-norm-løsning.
- **Eksamensbelegg:** Sjanger M (9/16 samlet, konsentrert i Periode A 4/5, avtakende
  etter læreverkskiftet). Prioritet: kjenne (solid beredskap; en Young-orientert
  sensor kan hente den tilbake — analysen §7).
- **Forkunnskaper/kryssbok:** kap. 7.1 (+ 4.3, 5.2); [Singulærverdidekomposisjon](/mat1120/mat1120-7-1)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **singulærverdi** (`√` av egenverdi til
  `AᵀA`); **SVD** `A=UΣVᵀ`; **pseudoinvers** `A⁺=VΣ⁺Uᵀ`; koblingen `AᵀA=RᵀR` fra QR.
- **Teoremkontrakt:** SVD eksisterer for enhver matrise; `A⁺b` gir minimum-norm minste
  kvadraters løsning; `V` fra egenvektorer til `AᵀA`, `U` fra `Avⱼ/σⱼ` + nullrom.
- **Typiske feil:** feil rekkefølge på singulærverdiene; glemme nullrom-utvidelsen av
  `U`; forveksle `Σ⁺` med `Σ⁻¹` for ikke-kvadratisk `A`.
- **Modellbevis:** «Finn SVD av en 2×2 via `AᵀA` og bruk pseudoinversen til å løse et
  overbestemt system»; «Vis at `A⁺b` er minimum-norm minste kvadraters løsning».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 9.2: QR/LU, fire fundamentale underrom og drill
**id:** `tma4145-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4145-9-1`

- **Kapitteltype:** beviskapittel/drill (kjenne) — DNA B-preget.
- **Description:** QR og LU/PA=LU som *kjent verktøy*, de fire fundamentale
  underrommene (`Col A`, `Nul A`, `Row A`, `Nul Aᵀ`) og rang/nullitet, med drill på
  SVD/pseudoinvers/kjerne-bilde.
- **Eksamensbelegg:** Sjanger L/M (LU 4/16, 25 %; fire underrom del av L 56 %).
  Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 9.1 (+ 5.2); [Col A, Nul A, rang og dimensjonsteoremet](/mat1120/mat1120-1-2)
  `(verifiser lenke)`. `collapsible` **Definisjons-/teorem-/bevismalliste.**
- **Definisjonskontrakt (flashcard-kilde):** **QR** `A=QR`; **LU/PA=LU**; **fire
  fundamentale underrom** + ortogonalitetsrelasjonene (`Row A⊥Nul A`,
  `Col A⊥Nul Aᵀ`); **rangteoremet** (`rang+nullitet=n`).
- **Teoremkontrakt:** dimensjonsrelasjonene mellom de fire underrommene; kobling
  QR ↔ minste kvadrater (`AᵀA=RᵀR`).
- **Løsningsoppskrift (drill):** (1) sjanger (SVD / pseudoinvers / fire underrom /
  kjerne-bilde); (2) bruk kjent faktorisering; (3) verifiser dimensjonsrelasjonene.
- **Typiske feil:** blande `Row A` og `Col A`; feil ortogonalitetspar.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A SVD via `AᵀA` · 9.B pseudoinvers + minste
kvadrater · 9.C fire fundamentale underrom + rang · 9.D samlet SVD/underrom-prøve).

### Del 10 — Teori-Oppgave 1 og eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Teori-Oppgave 1 — definisjoner og sann/usann
**id:** `tma4145-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-8-1`

- **Kapitteltype:** teori-/pugge-kapittel (perfekt).
- **Description:** Den obligatoriske åpningsoppgaven: presise definisjoner av
  kjernebegreper (Stacey-varianten) og 10-punkts sann/usann-oversikt (Ehrnström-
  varianten) med de faste fellene. «Gratispoeng» for den som har pugget.
- **Eksamensbelegg:** Sjanger A (14/16, de-facto 100 % fra 2008). Puggbar, høy
  uttelling. Prioritet: perfekt. Sensorkrav #3.
- **Forkunnskaper/kryssbok:** samler definisjons-/teorem-minimumet fra hele boka
  (særlig 0.2). `collapsible` **Definisjons-/teorem-/bevismalliste:** hele
  pugge-minimumet + de faste sann/usann-fellene (#10).
- **Definisjonskontrakt (flashcard-kilde — stor):** presise definisjoner av alle
  kjernebegreper (metrisk rom, Cauchy-følge, konvergent følge, kontinuerlig
  avbildning, kjerne/bilde, indreprodukt, norm, Hilbert-rom, adjungert, basis,
  dimensjon, normal/selvadjungert/unitær operator, kontraksjon, operatornorm) +
  teoremformuleringer (Banach FPT, spektralteoremet, Cauchy–Schwarz, Riesz,
  rangteoremet, projeksjonsteoremet).
- **Teoremkontrakt:** de faste sann/usann-fellene (#10): `Pₙ(ℝ)≅ℝⁿ⁺¹` (ikke `ℝⁿ`);
  dualen til `ℝⁿ` er `ℝⁿ` (ikke `ℂⁿ`); ikke alle Banach-rom er uendeligdimensjonale;
  kun `ℓ²` blant `ℓ^p` er Hilbert; Cauchy–Schwarz krever indreprodukt (ikke ethvert
  Banach-rom); alle konvergente følger er Cauchy (sann); lineær avbildning mellom
  normerte rom begrenset ⟺ kontinuerlig (sann).
- **Typiske feil:** #10; upresise definisjoner (mangler et aksiom); begrunne sann/
  usann der det ikke kreves (tidssløsing) eller la være å begrunne der det kreves.
- **Selvdiagnose:** avkryssbar sjekkliste etter kapitlet (kan du gjengi alle
  definisjonene ordrett? treffer du alle 10 fellene?).
- **Modellsvar:** «Gi presise definisjoner av: kontraksjon, Hilbert-rom, adjungert
  operator, operatornorm»; «10-punkts sann/usann med de faste fellene».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 10.2: Sjangerspill — løsningsoppskriftene A–N
**id:** `tma4145-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4145-10-1`

- **Kapitteltype:** sjangeroversikt/drill (perfekt/meta).
- **Description:** Sjangerkatalogen A–N med løsningsoppskriftene i kortform, samlet
  feilregister (#1–#10), og tidsbudsjett for en 4-timers eksamen — det ene
  oppslagskortet.
- **Eksamensbelegg:** Metakapittel (hele arkivet). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Sjanger- og feilregister:**
  A–N → én-linjes oppskrift → bevismal (M1–M5) → tidsbudsjett → vanligste feil (#N).
- **Innholdskontrakt:** for hver sjanger A–N: hva den ber om, hvilken bevismal/regnemal
  som gjelder, hvilken feil (#N) som lurer, og tidsanslag. Samlet feilregister #1–#10
  (hver med kapittelet som forebygger den).
- **Typiske feil:** metafeilen — å ikke gjenkjenne sjangeren og dermed velge feil mal.
- **Kald bank:** 8–10 oppgaver med uvante vinklinger/kombinasjoner UTEN hint (fasit =
  momentliste), tydelig merket, plassert her.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 10.3: Øvingseksamen 1 — kjerneprofil
**id:** `tma4145-10-3` · **number:** 10.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4145-10-2`

- **Kapitteltype:** øvingseksamen (perfekt/meta).
- **Description:** Komplett nyskrevet sett i arkivmalen (5–6 oppgaver, 4 t, kode D),
  kjerneprofil: teori-Oppgave 1 + beste approksimasjon + metriske rom/kontraksjon +
  indreprodukt/Hilbert + spektralteori. Full modellbesvarelse med rigorøse
  begrunnelser og teoremnavning.
- **Eksamensbelegg:** Speiler temafordelingen (analysen §2). Prioritet: perfekt (meta).
- **Innholdskontrakt:** 5–6 oppgaver med poeng per delpunkt; modellbesvarelse i eget
  `collapsible` per oppgave (A-nivå, teoremnavn båret, eksistens/entydighet separat),
  `tip`-notat om delpoeng og terskellogikk; pausepunkt-markører mellom oppgavene.
  Kildeforbehold (arkivet stopper 2014). Selvdiagnose-sjekkliste per oppgave.
- **Typiske feil:** #1–#10 samlet i fasit-oppfølgingen.
- **Kvote:** 10 quiz / 6 flashcards.

#### Kapittel 10.4: Øvingseksamen 2 — Ehrnström-profil (Jordan/`exp(tA)`/completion)
**id:** `tma4145-10-4` · **number:** 10.4 · **estimatedMinutes:** 60 · **prerequisites:** `tma4145-10-3`

- **Kapitteltype:** øvingseksamen (perfekt/meta).
- **Description:** Komplett nyskrevet sett i Ehrnström-stil: 10-punkts sann/usann +
  Jordan-form/`exp(tA)` + indreprodukt/beste approksimasjon + operator-/Riesz-teori +
  completion/følgerom. Full modellbesvarelse.
- **Eksamensbelegg:** Speiler nyeste periode (C, 2012–2014). Prioritet: perfekt (meta).
- **Innholdskontrakt:** som 10.3, men vektet mot Jordan/`exp(tA)`, sann/usann og
  completion (Ehrnström-signaturene); poeng per delpunkt, siste delpunkt tyngst.
  Kildeforbehold + selvdiagnose.
- **Typiske feil:** #4, #6, #9, #10.
- **Kvote:** 10 quiz / 6 flashcards.

#### Kapittel 10.5: Øvingseksamen 3 — Stacey/Young-profil (kontraksjon/SVD/funksjonaler)
**id:** `tma4145-10-5` · **number:** 10.5 · **estimatedMinutes:** 60 · **prerequisites:** `tma4145-10-4`

- **Kapitteltype:** øvingseksamen (perfekt/meta).
- **Description:** Komplett nyskrevet sett i Stacey/Young-stil: definisjonssett +
  kontraksjon/Banach FPT + funksjonaler på `C([0,1])`/Riesz + SVD/pseudoinvers +
  metriske rom. Full modellbesvarelse.
- **Eksamensbelegg:** Speiler Periode A–B (2003–2011). Prioritet: perfekt (meta).
- **Innholdskontrakt:** som 10.3, men vektet mot kontraksjon/iterasjonsestimat,
  funksjonaler/Riesz og SVD (de fallende, men sensoravhengige sjangrene — beredskap).
  Kildeforbehold + selvdiagnose.
- **Typiske feil:** #1, #6, #7, #8.
- **Kvote:** 10 quiz / 6 flashcards.

**Prøve-kvote Del 10:** ingen egen prøve (de tre øvingseksamenene 10.3–10.5 dekker
helheten).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 32 | 0 (dekkes av øvingseksamenene) |
| 1 | 4 | 68 | 78 | 4 |
| 2 | 3 | 50 | 52 | 4 |
| 3 | 4 | 66 | 72 | 4 |
| 4 | 4 | 68 | 80 | 4 |
| 5 | 3 | 52 | 54 | 4 |
| 6 | 4 | 66 | 72 | 4 |
| 7 | 3 | 50 | 54 | 4 |
| 8 | 2 | 34 | 34 | 4 |
| 9 | 2 | 32 | 32 | 4 |
| 10 | 5 | 62 | 52 | 0 (= 3 øvingseksamener) |
| **Sum** | **36** | **574 ✓ (≥500)** | **612 ✓ (≥500)** | **36 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 12+14 = **26** / 14+18 = **32**
- Del 1: 18+18+16+16 = **68** / 22+22+18+16 = **78**
- Del 2: 18+16+16 = **50** / 20+18+14 = **52**
- Del 3: 16+16+18+16 = **66** / 20+18+20+14 = **72**
- Del 4: 18+18+16+16 = **68** / 24+22+20+14 = **80**
- Del 5: 18+18+16 = **52** / 20+20+14 = **54**
- Del 6: 16+18+16+16 = **66** / 20+20+18+14 = **72**
- Del 7: 18+16+16 = **50** / 22+18+14 = **54**
- Del 8: 18+16 = **34** / 20+14 = **34**
- Del 9: 16+16 = **32** / 18+14 = **32**
- Del 10: 16+16+10+10+10 = **62** / 18+16+6+6+6 = **52**
- **Totalt: 574 quiz / 612 flashcards.**

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og natur: de fire garanterte søylene + spektral-/
Jordan-blokken (Del 1 metriske rom, Del 2 kontraksjon, Del 4 indreprodukt/Hilbert,
Del 5 beste approksimasjon, Del 7 spektralteori, Del 8 Jordan/`exp(tA)`) bærer 322 av
574 quiz og 350 av 612 flashcards.

**Flashcard-profilen (612) ligger godt over gulvet (500)** fordi eksamen er **helt
uten hjelpemidler (kode D)** og teori-Oppgave 1 tester definisjoner/utsagn direkte —
alt må sitte. Hvert delkapittels **Definisjons-, teorem- og bevismalliste** er en
naturlig flashcard-kilde. Korttyper: **definisjon↔begrep** (metrisk rom, Cauchy-følge,
indreprodukt, Hilbert-rom, selvadjungert/normal/unitær, kontraksjon, operatornorm),
**teorem↔hypotese/konklusjon** (Banach FPT, spektralteoremet, Cauchy–Schwarz, Riesz,
projeksjonsteoremet, parallellogramloven, Bessel/Parseval), **sann/usann-felle**
(de faste fellene #10), og **bevismal-steg** (M1–M5: aksiomrekkefølge; kontraksjon →
Banach; beste approksimasjon → projeksjonsteorem; Cauchy → grense i rommet; ortonormal
egenbasis ⟺ symmetrisk/normal). **Quiz-profilen** driller nabobegrep-distraktorer
(kontinuerlig/uniformt kontinuerlig, Cauchy/konvergent, lukket/fullstendig, symmetrisk/
normal/selvadjungert, indreprodukt/norm, `ℓ²`/`ℓ^p`, algebraisk/geometrisk
multiplisitet, projeksjon/minste kvadrater, Gram–Schmidt-projeksjon/normallikninger).

### Prøver (4 per temadel, 36 totalt)

Fire prøver per temadel (Del 1–9). Hver prøve speiler eksamensmalen i miniatyr: en
blanding av bevis-/regneoppgaver (verifiser metrikk/indreprodukt, kontraksjon, beste
approksimasjon, spektralteori — med **rigorøs modellbesvarelse**, teoremnavning og
eksistens/entydighet der relevant). Omfang 25–45 min, «kan trygt deles over flere
kvelder — én prøve per økt». Alle oppgaver NYSKREVNE. Flervalg i prøve-collapsibles
har **stokkede fasit-bokstaver** (aldri «alle a»). Prøvekapittel-id
`tma4145-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 10 har
ingen egen prøve (Del 10s tre øvingseksamener dekker helheten). Prøvetitlene er
spesifisert per del i §3 (Prøve-kvote-linjene).

### Komplette øvingseksamener (3 — kapitlene 10.3–10.5)

Tre nyskrevne sett i arkivmalen (5–6 oppgaver, 4 t, **kode D**, poeng per delpunkt,
alle svar begrunnet rigorøst), med ulik men typisk profil (kjerne / Ehrnström /
Stacey–Young), full modellbesvarelse (teoremnavn båret, aksiomsjekk komplett,
eksistens/entydighet separat) og Sensorblikket per oppgave. **Kildeforbehold i alle
tre:** arkivet stopper 2014; kont. S2011/S2013/S2014 mangler løsningsforslag;
byggefasen bør verifisere mot nyere sett om de blir tilgjengelige, og at
hjelpemiddelkoden fortsatt er D. Til sammen dekker de tre settene sjangrene A–N minst
én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t skriftlig, **kode D uten formelsamling**,
   5–6 oppgaver, «begrunn alt rigorøst», teori-Oppgave 1 som gratispoeng),
   kildeforbeholdet (arkivet stopper 2014; faglærer-/læreverkskifte) og karakter-
   realismen (C er god og vanlig; bredde slår dybde ved terskler) (fra kap. 0.1).
2. **Bevishåndverket** — de faste bevismalene (M1 aksiomverifikasjon, M2 kontraksjon →
   Banach, M3 beste approksimasjon → projeksjonsteorem, M4 fullstendighet, M5
   ortonormal egenbasis ⟺ symmetrisk/normal) og definisjons-/teorem-minimumet som må
   pugges (kode D). **Riktig svar uten begrunnelse gir ingen uttelling** (fra kap. 0.2).
3. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: *perfekt*
   (indreprodukt/Hilbert 100 %, beste approksimasjon 100 %, metriske rom 81 %,
   kontraksjon/Banach 69 %, spektralteori/Jordan/`exp(tA)` 62 %/nyest), *kunne*
   (normerte rom/operatornorm, adjungert/selvadjungert/normal/unitær, funksjonaler/
   Riesz, følgerom/completion), *kjenne* (SVD/pseudoinvers, LU/fire underrom, kvasi-
   metrikk).
4. **Sjangerguiden** — oppgavetypene A–N med løsningsoppskriftene i kortform (fra
   kap. 10.2): teori-Oppgave 1-puggkort; best-approksimasjon-beslutningstreet
   (projeksjon vs. normallikninger + eksistens/entydighet); metrikk-verifikasjon;
   kontraksjon + iterasjonsestimat; spektralteoremets hviss-form; Jordan-kjede →
   `exp(tA)`; Riesz-representant-sjekken.
5. **Huskeapparatet** — hele definisjons-/teorem-minimumet (fra 0.2/10.1), siden alt
   må sitte og ingenting deles ut på eksamen; ordnet som begrep ↔ definisjon og
   teorem ↔ hypotese/konklusjon.
6. **Sensorreglene** — de seks sensorkravene (§2) + karakterskille-listen (akseptabelt:
   mekaniske deler — Gram–Schmidt, egenverdier, aksiomsjekk, definisjoner; godt: begge
   approksimasjonsløypene + korrekt eksistens/entydighet, alle aksiomer, korrekt
   Jordan-kjede, a-priori-estimat; utmerket: rigorøse ε-/delfølge-argumenter,
   spektralteoremets hviss-form, Riesz-representant ikke i `C([0,1])`, completion,
   korrekt behandling av moteksempler). Terskellogikken (bredde slår dybde).
7. **Feilkatalogen** — de ti typiske feilene (#1–#10) samlet, hver med henvisning til
   kapitlet som forebygger den (#1 kontraksjon/fullstendighet → 2.1; #2 eksistens/
   entydighet → 5.1; #3 aksiomsjekk → 1.1/4.1; #4 spektralteorem/Jordan → 7.2/8.1;
   #5 parallellogram → 4.1; #6 Riesz-representant → 6.2; #7 operatornorm oppnådd →
   3.2/6.3; #8 a-priori-estimat → 2.1; #9 fullstendighet vs. lukkethet → 1.3/3.3; #10
   sann/usann-feller → 10.1).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 →
   1 (metriske rom) → 2 (kontraksjon) → 3 (normerte rom) → 4 (indreprodukt/Hilbert) →
   5 (beste approksimasjon) → 6 (operatorer/Riesz) → 7 (spektralteori) → 8 (Jordan/
   `exp(tA)`) → 9 (SVD, kort) → 10 (teori-Oppgave 1 + øvingseksamener); teori-Oppgave 1-
   pugging (10.1) spres utover løpet; øvingseksamenene de tre siste ukene under
   tidspress (240 min, kode D), minst én skrevet for hånd.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `tma4145` (mønster
   `COURSE_BI_OKONOMI`, skrives til `textbook-courses-hoyskole.ts`): id `tma4145`,
   title «TMA4145 Lineære metoder (NTNU) — eksamensrettet», `level: 'Høyskole'`, alle
   36 kapitler med id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites fra dette skjelettet, `sectionNames` fra §2-tabellen (obligatorisk —
   ellers viser bokforsiden «Seksjon N»). Registrer emnet i `institusjoner.ts` under
   NTNU med visningsnavn «TMA4145 Lineære metoder».
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–N, bevismalene M1–M5,
   definisjons-/teorem-minimumet, frekvenstallene og kildeforbeholdet som resten av
   boka refererer til. **Bygg 0.2 grundig — hele boka bruker bevismalene derfra.**
3. **Del 1 → Del 2 → Del 3** (avhengighetskjeden: metriske rom → kontraksjon → normerte
   rom/operatornorm/følgerom).
4. **Del 4** (indreprodukt/Hilbert, bygger på normerte rom fra 3.1) → **Del 5** (beste
   approksimasjon, bygger på Gram–Schmidt fra 4.3) → **Del 6** (operatorer/adjungert/
   Riesz, bygger på indreprodukt fra 4.1) → **Del 7** (spektralteori, bygger på
   selvadjungert/normal fra 6.1) → **Del 8** (Jordan/`exp(tA)`, bygger på egenverdier
   fra 7.1) → **Del 9** (SVD, bygger på egenverdier 7.1 + minste kvadrater 5.2, kort).
5. **Del 10 til slutt** — teori-Oppgave 1 (samler hele pugge-minimumet), sjangerspill
   (leser hele boka) + tre øvingseksamener; bygges av én agent som leser hele skjelettet.
6. **Prøver** (`tma4145-<del>-prove`, chapterNumber `<del>.P`) etter at delens kapitler
   finnes; prøvetitlene er gitt per del i §3 (Del 1–9; Del 0 og Del 10 har ingen egen
   prøve).
7. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-staging registreres etter hvert som kapitlene ferdigstilles — endelig blokk-/
   staging-skjema fastsettes i BYGGEKONTRAKT.md (fase 3). Kvotene fra kvotesammendraget
   (§4) er fasit.

Per teori-/beviskapittel gjelder **kapittel-DNA A** (§2): tip Eksamensvinkel → text
Forkunnskaper + collapsible Definisjons-/teorem-/bevismalliste → text Motivasjon →
definition Definisjonskontrakt (flashcard-kilden — toppnivå med title!) → theorem
Teoremkontrakt → text Bevis-/løsningsprosedyre → warning Typiske feil → example ×2–4 →
exercise ×6–12 → collapsible Repetisjon. Drillkapitlene (1.4/3.4/4.4/5.3/6.4/7.3/8.2)
følger **kapittel-DNA B**. Eksamensvinkel- og Typiske feil-blokkene fylles med belegget
og feilkodene fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/tma4145-*.json` parser med
      `json.load` (generer via `json.dump` — LaTeX-`\\`-fellen). `npm run build` grønn
      — vis output.
- [ ] **Metadata-konsistens:** alle 36 kapittel-id-er har eksisterende content-fil;
      `number` er del-basert; `sectionNames` satt; emnet registrert i `institusjoner.ts`
      under NTNU; `hoyskole-disclaimer.tsx` treffer emnet (rent regnefag — ingen jus-/
      helse-heuristikk nødvendig).
- [ ] **Kvote:** ≥574 quiz og ≥612 flashcards totalt (aldri under kapittelminimum).
- [ ] **Matematisk sannhetskontroll:** alle «hviss»-retninger, entydighets- og
      «finnes nærmeste punkt»-påstander verifisert/kvalifisert; usikre detaljer merket
      `(verifiser)`; ingen «Vis at …»-oppgave der påstanden ikke holder ubetinget
      (jf. DNA-regnefag).
- [ ] **Læringsløkke:** hvert delkapittels `content[]` veksler Teori → Eksempel →
      Oppgave inline; ingen oppgave krever usett teori/teknikk.
- [ ] **Kildeforbehold:** Del 0 + øvingseksamenene sier eksplisitt at arkivet stopper
      2014, at kont. S2011/S2013/S2014 mangler løsningsforslag, og at byggefasen bør
      verifisere mot nyere sett + at koden fortsatt er D.

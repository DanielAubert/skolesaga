# Bokskjelett: DAPE1300 Diskret matematikk (OsloMet) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + `DNA-regnefag.md`.
> Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin egen
> arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (OsloMet-arkivet 2003–2015: **23 tekstbaserte eksamenssett**
> lest, + 31 kompendiumavsnitt og 3 obliger skummet for pensumstruktur). Alle
> oppgaver, tallcaser og modellbesvarelser i boka skal være NYSKREVNE (se §6).
> Definisjoner, standardnotasjon og klassiske resultater (grad-kant-setningen,
> Eulers setning, divisjonsalgoritmen, binomialteoremet, karakteristisk polynom
> osv.) er allmenn faglig kunnskap og brukes fritt.
>
> **Matematisk presisjon er kritisk.** Fortegns-, entydighets- og «alltid»-
> påstander parametersjekkes numerisk (python3) i modellens fulle parameterrom
> FØR de skrives (se `DNA-regnefag.md` «Matematisk sannhetskontroll»). Usikre
> faktapåstander merkes `(verifiser)` for fagfellesjekk i fase 6.
>
> **Emnestatus (verifisert mot OsloMet 2026-07-11 — men `(verifiser)` beholdes
> fordi status kan endres):** DAPE1300 «Diskret matematikk» (10 studiepoeng,
> Fakultet for teknologi, kunst og design) er et **aktivt emne**. Det er faglig
> ekvivalent (10 sp full overlapp) med **ITPE1300, FO019A og FO019I**, og
> **DATS2300 «Algoritmer og datastrukturer» bygger på DAPE1300**. Emnet har hatt
> samme faglærer (Ulf Uttersrud) gjennom hele arkivperioden, med en påfallende
> stabil temakatalog og et fast formelvedlegg. Pensum følger Rosens *Discrete
> Mathematics and Its Applications*, supplert med Uttersruds egne notater om
> tallsystemer, to-komplement og differensligninger.
>
> **Tidsramme-forbehold (ufravikelig — settes i Del 0):** De historiske settene
> (FO019A → DAPE1300, 2005–2015) var **5 timer med 10 likt vektede oppgaver**,
> mens **gjeldende emneplan angir 3 timer**. Arkivet er derfor en utmerket
> oppgavebank, men **ikke** lenger en tidsriktig simulering: en moderne eksamen
> antas å bruke et **utvalg** av de samme sjangrene. Boka trener hele bredden
> (den er stabil) OG øver tempo/prioritering. Alle frekvenser er merket «per
> 2003–2015-arkivet».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `oslomet-diskretmatte` |
| Tittel | **DAPE1300 Diskret matematikk (OsloMet) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | OsloMet. Visningsnavn i `institusjoner.ts`: «DAPE1300 Diskret matematikk». (NB: OsloMet-institusjonen må legges til i `institusjoner.ts` ved wiring — sjekk at den finnes; jf. søsteremnet `oslomet-mat1000`.) |
| Arketype | **Regnefag — utregnings-/prosedyre-variant** (`DNA-regnefag.md`). Se §2 «Arketypetilpasning»: OsloMet er prosedyre-/regnetungt med **flat vekting** og «alt skal begrunnes»-norm; fasiten er utregnet med synlig mellomregning + begrunnelse, ikke flervalg. Søsterbøker: `hio-diskretmatte` (HiØ, nærmeste tvilling — utregningsvariant), `ma0301` (NTNU, bevistyngre — deler kjernen, men ikke profilen), `oslomet-mat1000` (OsloMet ingeniørmatte — institusjonssøster). |
| Antall kapitler | **26** (Del 0: 2 · temadeler 1–12: 21 · eksamenstrening Del 13: 3) |
| Estimert totaltid | **~1 350 min ≈ 22,5 timer** (per kapittel under) |
| Quiz totalt | **524** (REELL per-kapittel-sum; krav ≥500 — se kvotesammendrag §5) |
| Flashcards totalt | **512** (REELL per-kapittel-sum; krav ≥500 — se §5) |

**Pitch (ett avsnitt):** DAPE1300-eksamen er blant de mest forutsigbare settene i
hele høyskolearkivet. Skriftlig skoleeksamen (historisk 5 t / 10 likt vektede
oppgaver, gjeldende emneplan 3 t), **kun kalkulator** (ikke symbolsk fra H14) +
et **fast formelvedlegg** som følger med. Det er **ren frisvar** — ingen
flervalg: sensor belønner *vist mellomregning og begrunnelse*, ikke bare
fasitsvar («Alle svar skal begrunnes! … Kun et svar uten noen begrunnelse er
normalt verdiløst»). Settet har en fast mal med **flat vekting** (bredde slår
dybde) og nesten identisk temarekkefølge hvert år. **Seks–sju pilarer er i
praksis garantert (100 %):** differensligninger (signaturoppgaven), grafteori/
Euler-veier, relasjoner, mengdelære/Venn, matriser og tallsystemer/to-komplement;
tett fulgt av funksjoner (96 %), tallteori (91 %), kombinatorikk (91 %) og
utsagnslogikk (87 %). Boka er bygd baklengs fra det sensor faktisk premierer:
**full mellomregning, korrekt formelvalg fra vedlegget, og eksplisitt begrunnelse
i hvert steg**. Signaturoppgaven — 2. ordens lineær homogen differensligning via
karakteristisk polynom — får eget teori- og drillkapittel, fordi den er både den
sterkeste gjengangeren og den mest mekaniserbare.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** Hjelpemidler = **kalkulator
(ikke trådløs; fra H14 ikke symbolsk)** + forhåndsgodkjent ordbok, PLUSS et
**fast formelvedlegg** som følger eksamen. Studenten trenger derfor **ikke pugge**
formler for rekker, binomialkoeffisienter, differensligninger, inklusjon-
eksklusjon, kongruens osv. Poengene ligger i **å vite hvilken formel som gjelder
og bruke den korrekt med full mellomregning**, ikke i pugging. Boka skal trykke
det samme formelvedlegget (Del 0, kap. 0.2) og trene raskt oppslag — særlig
differensligning-oppskriften og inklusjon-eksklusjon. (Merk: 2003–2008 var åpen
bok; fra 2009 kun kalkulator + vedlegg. Boka kalibreres mot det strammeste
regimet.)

**Kritisk sensor-regel (gjelder HELE boka) — «alt skal begrunnes»:** Den stående
instruksen på hvert sett: et bart tall uten mellomregning gir i praksis null,
også på de tilsynelatende «mekaniske» oppgavene (tallkonvertering, matriseprodukt,
differensligning-ledd). Ved metoder (Euklids algoritme, karakteristisk polynom,
relasjonsegenskaper) forventes hele kjeden vist. Hvert kapittel har derfor en
egen `warning` om at riktig svar uten begrunnelse taper poeng.

**Bevisst nedprioritert (begrunnes i Del 0):** **Predikatlogikk/kvantorer** er
notat-tungt (obligene, avsnitt 1.4–1.5) men eksamens-lett (13 % som egen oppgave)
→ ett kompakt delkapittel. **Boolsk algebra (aksiomatisk forenkling à la MA0301)**
er praktisk talt fraværende i arkivet — opptrer kun som **boolsk matriseprodukt**
$M_R \odot M_R$ i relasjons-/matriseoppgavene → dekkes der, ikke som egen del.
**Planaritet, Eulers formel $|V|-|E|+|R|=2$, $K_5/K_{3,3}$, spenntre, Hamilton-
sykler og grafalgoritmer (Dijkstra/Prim/Kruskal) forekommer IKKE** i noe sett →
skal IKKE bygges (dette skiller OsloMet fra MA0301). **Automater/formelle språk**
(MA0301) og **komplekse røtter i differensligninger** (HiØ/ITF10705) skal IKKE
med — OsloMet-differensligningene holder seg til **reelle røtter og dobbeltrot**.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), IKKE frekvens:
grunnleggende objekter (logikk, mengder, matriser, tallsystemer) før metodene som
bruker dem (tallteori, kombinatorikk, differensligninger); relasjoner og grafteori
til slutt fordi de trekker på matriser, mengder og funksjoner. Frekvensen styrer
*omfanget*, ikke rekkefølgen: de seks 100 %-pilarene og differensligningenes
signaturstatus gir egne drillkapitler og høyest kvote; lavfrekvent stoff
(predikatlogikk, induksjon som «eller på annen måte») får kompakt behandling.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og verktøykasse | 2 | perfekt (meta) | Formen (frisvar, flat vekting, «alt skal begrunnes», 5t→3t-forbeholdet), formelvedlegget, temafrekvensene, sensorkravene og sjangerkatalogen A–L må etableres FØR fagstoffet. Vedlegget (kap. 0.2) er unikt viktig fordi formlene er utlevert — ferdigheten er raskt oppslag + korrekt bruk. |
| 1 | Utsagns- og predikatlogikk | 2 | kunne (87 % / 13 %) | Fast oppgave 1: sannhetstabell (tautologi/ekvivalens), oversette dagligtale til operatorer, konstruere utsagn. Predikatlogikk/kvantorer kompakt (eksamens-lett, notat-tungt). |
| 2 | Mengdelære og inklusjon-eksklusjon | 2 | perfekt (100 %) | Fast oppgave 2. Venn-skravering begge veier, forenkling med mengdeidentiteter, og **inklusjon-eksklusjon** som anvendt telleoppgave (formelen står i vedlegget). |
| 3 | Matriser og boolsk matriseprodukt | 2 | perfekt (100 %) | Fast oppgave. Dimensjon, definert produkt, $AB/BA/A^T$, symmetri; **boolsk (logisk) matriseprodukt** $M_R\odot M_R$ (broen til relasjoner). Ren boolsk-algebra-forenkling utelates (fraværende i arkivet). |
| 4 | Tallsystemer og to-komplement | 2 | perfekt (100 %) | Fast oppgave 4/5. Konvertering desimal↔binær↔oktal↔heks begge veier; **8-bits to-komplement med fortegnsbit** (Uttersruds eget notat). |
| 5 | Tallteori | 2 | kunne (91 %) | Ofte flettet inn i D/F. Primtallsfaktorisering; **gcd via Euklids algoritme** (full mellomregning); lcm og $ab=\gcd\cdot\mathrm{lcm}$; div/mod; **kongruens mod m** anvendt på **kontrollsiffer** (ISBN-13). |
| 6 | Funksjoner | 1 | kunne (96 %) | Nesten fast. En-til-en/på med begrunnelse eller moteksempel, verdimengde, urbildemengder — på konkrete heltalls-/endelige funksjoner. |
| 7 | Rekker og summer | 1 | kjenne (74 %) | Egen deloppgave eller flettet inn. Aritmetisk vs. geometrisk; sumformlene fra vedlegget; bestem antall ledd $n$ først. Forutsetning for differensligning-verifikasjon. |
| 8 | Kombinatorikk | 2 | kunne (91 %) | Ofte to oppgaver. Permutasjoner med gjentakelse, betingede tellinger («ved siden av», «minst/nøyaktig»), binomialkoeffisienter/Pascal, sifferteljing, pigeonhole. |
| 9 | Differensligninger | 2 | **perfekt (100 %) — signatur** | Fagets signaturoppgave, i **hvert** sett. Fast tredelt prosedyre for $a_n=c_1a_{n-1}+c_2a_{n-2}$ via karakteristisk polynom (to reelle røtter + dobbeltrot), + drillkapittel. **Reelle røtter/dobbeltrot — INGEN komplekse røtter** (skiller fra HiØ). |
| 10 | Matematisk induksjon | 1 | kjenne (61 %) | «Vis ved induksjon *eller på annen måte*» — én av flere likeverdige teknikker (ikke fagets tyngdepunkt som ved NTNU). Lær det rent, men vis fluktruten. |
| 11 | Relasjoner | 2 | perfekt (100 %) | Fast oppgave 9. Fire egenskaper hver for seg; relasjonsgraf ↔ matrise; boolsk matriseprodukt (veier); ekvivalens vs. partiell ordning; maksimale/minimale elementer, + drillkapittel. |
| 12 | Grafteori og Euler-veier | 2 | perfekt (100 %) | Fast oppgave 10. Modeller broer/dører som graf; grad-kant-setningen; Eulers kriterium (lukket/åpen); resonner om å legge til/fjerne kanter, + drillkapittel. **Ingen planaritet/algoritmer.** |
| 13 | Eksamenstrening | 3 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–L + kald bank) + **2 komplette øvingseksamener** (utvalg av sjangre, dimensjonert for 3-timers form, med A-fasit + full mellomregning). |

Rasjonale: de seks 100 %-pilarene (mengder, matriser, tallsystemer,
differensligninger, relasjoner, grafteori) og signaturoppgaven får hver sin del
med drillkapittel og høyest kvote; predikatlogikk, induksjon og rekker får
kompakt behandling fordi de er lavfrekvente eller «eller på annen måte». **Nesten
hele bredden testes hvert (5-timers) sett** — prioriteringen styrer dybde og
drillmengde, ikke *om* et tema er med. For dagens 3-timers form øver
eksamenstreningsdelen eksplisitt utvalg og tempo.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og verktøykasse |
| 1 | Utsagns- og predikatlogikk |
| 2 | Mengdelære og inklusjon-eksklusjon |
| 3 | Matriser og boolsk matriseprodukt |
| 4 | Tallsystemer og to-komplement |
| 5 | Tallteori |
| 6 | Funksjoner |
| 7 | Rekker og summer |
| 8 | Kombinatorikk |
| 9 | Differensligninger |
| 10 | Matematisk induksjon |
| 11 | Relasjoner |
| 12 | Grafteori og Euler-veier |
| 13 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Utsagnslogikk (sannhetstabell → tautologi/selvmotsigelse/ekvivalens; oversette
dagligtale til $\neg,\land,\lor,\oplus,\rightarrow$; konstruere utsagn fra
sannhetskolonne) · **B** Mengdelære/Venn (skravere formel / lese av diagram;
forenkle med mengdeidentiteter; inklusjon-eksklusjon som telleoppgave) · **C**
Matriser (dimensjon, definert produkt, $AB/BA/A^T$, symmetri; boolsk matriseprodukt;
permutasjonsmatrise) · **D** Tallsystemer og to-komplement (konverter desimal/binær/
oktal/heks begge veier; 8-bits to-komplement, tolk bitmønster, binær addisjon) ·
**E** Tallteori (primtallsfaktorisering; gcd via Euklids algoritme; lcm; div/mod;
kongruens mod m; kontrollsiffer) · **F** Rekker og summer (aritmetisk/geometrisk
sum; bestem antall ledd) · **G** Kombinatorikk (permutasjon med gjentakelse;
betinget telling «ved siden av»/«minst»/«nøyaktig»; binomialkoeffisient/Pascal;
sifferteljing; pigeonhole) · **H** Differensligninger (tredelt: regn $a_2,a_3$;
lukket formel via karakteristisk polynom, to reelle røtter vs. dobbeltrot; verifiser;
regn senere ledd) · **I** Funksjoner (verdimengde; en-til-en/på med begrunnelse
eller moteksempel; urbildemengde) · **J** Relasjoner (relasjonsgraf ↔ matrise; fire
egenskaper hver for seg; boolsk matriseprodukt; ekvivalens vs. partiell ordning;
maksimale/minimale elementer) · **K** Grafteori/Euler (modeller broer/dører som graf;
grad + grad-kant-setningen; Eulers kriterium lukket/åpen; legg til/fjern kant) ·
**L** Predikatlogikk/kvantorer (oversett alle/ingen/finnes til $\forall/\exists$;
avgjør sannhet av kvantifiserte tallteoretiske utsagn; neger). *(Peripher: induksjon
— «vis ved induksjon eller på annen måte».)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Alt skal begrunnes.** «Kun et svar uten noen begrunnelse er normalt verdiløst.»
   Et bart tall uten mellomregning gir i praksis null — også på mekaniske oppgaver
   (tallkonvertering, matriseprodukt, differensligning-ledd). Egen `warning` i hvert
   kapittel.
2. **Vis mellomregningen eksplisitt der metoden er poenget.** Euklids algoritme →
   hele divisjonskjeden; differensligning → karakteristisk polynom, røttene,
   ligningssystemet for $\alpha,\beta$ OG en verifikasjon ved innsetting (oppgaven
   ber ofte eksplisitt om det).
3. **Sjekk de fire relasjonsegenskapene hver for seg** (refleksiv, symmetrisk,
   antisymmetrisk, transitiv), hver med egen begrunnelse — det holder ikke å
   konkludere «det er en ekvivalensrelasjon».
4. **Ett moteksempel er nok — og forventes** ved «avgjør om … er like/ekvivalente».
   Ved mengdespørsmål aksepteres Venn-diagram som bevis for (u)likhet.
5. **Redegjør for forutsetninger ved uklarhet** (stående forsideklausul). Toppsvar
   gjør nettopp dette.
6. **Karakternivåer (utledet):** Bestått (E) = de mekaniske standardoppgavene med
   synlig mellomregning. Midtsjikt (C/D) = betinget kombinatorikk, inklusjon-
   eksklusjon, full relasjonsanalyse, funksjonsbevis med moteksempel. Toppsjikt
   (A/B) = de resonnementstunge underpunktene (generelt kontrollsiffer-bevis,
   induksjon, «ikke to like ved siden av», endring av Euler-egenskap, presis
   kvantorbruk) — hvert steg begrunnet med navngitt lov/egenskap.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Ubegrunnet svar (tall uten mellomregning) — vanligste tapskilden. · **#2**
«Bare hvis»/nødvendig-tilstrekkelig: «$p$ bare hvis $q$» $=p\rightarrow q$; «$p$
nødvendig for $q$» $=q\rightarrow p$. · **#3** Feil rot-tilfelle i differensligning:
bruke $\alpha r_1^n+\beta r_2^n$ ved **dobbeltrot** (skal være
$\alpha r_0^n+\beta n r_0^n$); glemme å bestemme $\alpha,\beta$ / hoppe over
verifikasjon. · **#4** To-komplement: glemme fortegnsbiten, feil område
($2^8=256$, asymmetrisk $-128\dots127$), feil binær addisjon med mente. · **#5**
Blande ekvivalensrelasjon (symmetrisk) og partiell ordning (antisymmetrisk); ikke
sjekke alle tre. · **#6** Permutasjon med gjentatte elementer uten å dele
($\tfrac{n!}{n_1!n_2!\cdots}$) → dobbelttelling. · **#7** «Ved siden av»-telling
direkte i stedet for komplement/mellomrom-metoden. · **#8** Euler-paritet: tro at
åpen vei alltid finnes; regelen er *nøyaktig* to oddetallspunkter (åpen) eller
*null* (lukket); ≥4 → ingen; legg til/fjern én kant endrer pariteten til **to**
punkter. · **#9** Umulig gradfølge (gradsummen må være partall — grad-kant-
setningen). · **#10** Matriseprodukt-dimensjoner (regne $AB$ når kolonnetall i $A$
≠ radtall i $B$; forveksle $AB/BA$). · **#11** Aritmetisk vs. geometrisk rekke
(feil sumformel, glemme «+1» i $n=\tfrac{b-a}{d}+1$). · **#12** Inklusjon-
eksklusjon med feil fortegn (glemme parvise snitt / trippelsnittet).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i utregnings-/prosedyre-variant med flat vekting.** Fra DNA-regnefag
   beholdes: makrostrukturen (Del 0 eksamenskart → temadeler etter avhengighet →
   eksamenstrening), øvingseksamenene, **drillkapittel for hver pilar-sjanger**, og
   frekvensstyrt kapittelvekting. Den viktigste tilpasningen er den **flate
   vektingen** — bredde slår dybde, så alle 100 %-pilarene får solid dekning uten at
   én dominerer poengmessig (ulikt MA0301 der induksjon dominerer).
2. **«Symbol- og formelliste» → forankres i det utleverte formelvedlegget.**
   README-kravet om en `collapsible` symbol-/formelliste per delkapittel oppfylles,
   men skal eksplisitt markere hvilke formler som **finnes i vedlegget** (og altså
   ikke må pugges) versus hva som må sitte i hodet (metode/oppslagsrutine). Vedlegget
   trykkes i sin helhet i kap. 0.2.
3. **«Alt skal begrunnes» → egen warning i hvert kapittel** (sensorkrav 1). Fordi et
   bart tall gir null, driller boka *å skrive mellomregning* like mye som å regne
   riktig — også på de mekaniske oppgavene.
4. **Drillkapitler for signatur og pilarer.** Differensligninger (9.2), relasjoner
   (11.2) og grafteori/Euler (12.2) får eget **drillkapittel** rett etter teorien,
   fordi de er de mest resirkulerte og mekaniserbare sjangrene. (Mengder, matriser og
   tallsystemer får sin drill inne i sitt andre teorikapittel — se §3.)
5. **Utelatelser respekteres strengt (skiller OsloMet fra søskenemnene).** INGEN
   planaritet/Eulers formel/$K_5$/spenntre/Hamilton/grafalgoritmer (MA0301-stoff);
   INGEN automater/formelle språk (MA0301); INGEN komplekse røtter i
   differensligninger (HiØ/ITF10705); INGEN aksiomatisk boolsk-algebra-forenkling
   (kun boolsk matriseprodukt). Å importere disse ville teste noe DAPE1300 ikke gjør.
6. **3-timers-forbeholdet gjennomsyrer eksamenstreningsdelen.** Øvingseksamenene i
   Del 13 er dimensjonert som et **utvalg** av pilarene for 3 timer (ikke ti
   oppgaver), og Del 0 lærer eksplisitt tempo/prioritering. De historiske 10-oppgave-
   settene brukes som oppgavebank, ikke som tidssimulering.
7. **Matematisk sannhetskontroll (DNA-regnefag).** Alle fortegns-/entydighets-/
   «alltid»-påstander (f.eks. dobbeltrot-kriteriet, to-komplement-området,
   Euler-paritet, umulig gradfølge) parametersjekkes numerisk før de skrives.
   Usikre påstander merkes `(verifiser)`.

### Kapittel-DNA A — teori-/utregningskapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), bygget som læringsløkker:

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–L) temaet inngår i,
   hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg — forfatteren finner
   IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker
   (README-leserkrav). I tunge/sene kapitler VISES de 2–3 nøkkelformlene ferdig
   oppfrisket («Sist du var her»). `collapsible` **Symbol- og formelliste** SIST i
   delkapitlet (åpningsnotis «Oppslagsverk — alt her forklares underveis») som
   markerer hva som står i det utleverte vedlegget.
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hva temaet tester, når det
   opptrer i settet.
4. `definition`/`theorem` — begreper og resultater i emnets notasjon (fra
   eksamenssettene/vedlegget). Definition-blokker åpner med forklaringen i ORD;
   formelen etter. **Toppnivå med `title` — flashcard-kilden.**
5. `text` **Metode/oppskrift** — algoritmisk «slik regner/begrunner du» som
   nummererte trinn (ett trinn = ett sensor-moment), med «Intuisjon:»-linje der
   metoden krever aktiv utledning.
6. `example` × 2–4 — første enkelt, siste på **eksamensnivå** og modellert på en
   reell sjanger (A–L). Løsning skrevet slik en toppbesvarelse ser ut: **full
   mellomregning + eksplisitt begrunnelse** i hvert steg.
7. `warning` **Typiske feil** — feilkodene (#1–#12) for temaet; inkl. eksplisitt
   «riktig svar uten begrunnelse taper poeng» (sensorkrav 1, #1).
8. `exercise` × 6–12 — stigende: 2–3 innøving (lett), 2–4 standard (middels), 2–4
   eksamensklone (vanskelig, samme sjanger/vekt, nyskrevne tall/kontekst). Alle med
   `solution` (full mellomregning) + `hints` (første hint = formel/første grep, aldri
   konklusjonen). Merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter fra kapitlet og
   forutgående kapitler det bygger på.

**Læringsløkke (UFRAVIKELIG):** blokkene 4–8 er IKKE tre samlede bolker. De veksler
i løkker gjennom delkapitlet: metode/formel → gjennomregnet eksempel på nettopp den
metoden → øvingsoppgave(r) på samme metode (inline i `content[]`), så neste metode.
`tip` og `warning` plasseres der de er mest relevante. Den store stigende
oppgavepuljen kan samles til slutt som eksamensdrill, men grunnstoffet gjennomarbeides
løkke for løkke først.

**Full oppgavedekning (UFRAVIKELIG):** en oppgave får bare bruke metoder/formler vist
tidligere i SAMME kapittel (t.o.m. eksempelet rett foran) eller i eksplisitt referert
forkunnskap. Sjekk dette ved bygging.

### Kapittel-DNA B — drillkapittel (9.2/11.2/12.2)

1. `tip` **Eksamensvinkel** — hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` **Symbol- og formelliste** (sjangerens
   formler i kortform, med vedleggsmarkering).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte (nummererte trinn),
   avsluttet med begrunnelsesmalen.
4. `example` **Gjennomregnet eksamenscase** med sensor-margnotater om hva som gir
   uttelling ved hvert steg (full mellomregning).
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`.

Eksamenstreningskapitlene (Del 13) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–L) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2003–2015-
> arkivet». **Innholdskontrakt** = definisjoner/teoremer/metoder som SKAL med
> (flashcard-kilden). **Kvote** = quiz/flashcards. Kryssbok-lenkene peker på
> eksisterende R1-/R2-/matte-kapitler `(verifiser lenke)` der usikker.

### Del 0 — Eksamenskart og verktøykasse *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes DAPE1300
**id:** `oslomet-diskretmatte-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (ren frisvar, flat vekting, «alt skal begrunnes»,
  historisk 5 t / 10 oppgaver → gjeldende 3 t), de seks–sju pilarene, temafrekvensene,
  sensorkravene, sjangerkatalogen A–L og 5t→3t-forbeholdet — verktøyet som styrer hele
  boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2003–2015). Skal formidle: (a) **formen**
  — skriftlig skoleeksamen, A–F, ren frisvar (ingen flervalg), flat vekting (bredde slår
  dybde), fast temarekkefølge; historisk 5 t / 10 likt vektede oppgaver, **gjeldende
  emneplan 3 t → utvalg av sjangrene**; hjelpemidler = kalkulator + fast formelvedlegg;
  (b) **pilarene** (av 23 sett): differensligninger 100 % (signatur), grafteori/Euler 100 %,
  relasjoner 100 %, mengder/Venn 100 %, matriser 100 %, tallsystemer/to-komplement 100 %,
  funksjoner 96 %, tallteori 91 %, kombinatorikk 91 %, utsagnslogikk 87 %, rekker 74 %,
  induksjon 61 %, predikatlogikk 13 %; (c) **temafrekvenstabellen** (§2/analysen §2);
  (d) **sensorkravene** (§2, «alt skal begrunnes»); (e) **5t→3t-forbeholdet** og
  emnehistorikken (FO018A→FO019A→DAPE1300; ekvivalent ITPE1300/FO019A/FO019I). Prioritet:
  perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–L som studentens sjekkliste med frekvens per
  sjanger; **prognosen for 3-timers-settet** (svært sannsynlig: én differensligning, én
  Euler-graf, én relasjon (graf/matrise + ekvivalens/ordning), én mengde/Venn (gjerne med
  inklusjon-eksklusjon), én tallsystem/to-komplement, én kombinatorikk, pluss utvalg av
  logikk/funksjoner/tallteori/matriser). **Del 0-pakken (README «Leserkrav»):** «Slik
  leser du denne boka»-boks (`tip`, forklarer karakterskala A–F, sjangerkodene A–L, at
  feil har et samlet register #1–#12, og rammer tunge symboler «du trenger ikke forstå
  disse ennå»); **«Lite tid?»-boks** (hurtigrute 3–5 dager: differensligning + Euler +
  relasjon + mengde/inkl-ekskl + tallsystem + matriser først; timeanslag fra summerte
  `estimatedMinutes`; NB tidsanslag = LESEtid, håndregning ≈ ×1,5); **kildenote** (analysen
  bygger på 23 tekstbaserte sett 2003–2015 + skummede kompendiumavsnitt/obliger, forbehold
  om at nye sett kan endre bildet); **sjangeroversiktskort på ÉN side** (sjanger → én linjes
  oppskrift → tidsbudsjett → vanligste feil); **deltidsrute** (10–12 uker à ~8 t, generalprøver
  fordelt); **«lese mye, skrive lite»-boks** + råd om å skrive minst én øvingseksamen for
  hånd på tid. **Karakter-realisme:** C er en god og vanlig karakter tidlig i studiet.
  Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  3-timers form — sett opp tidsbudsjett og rekkefølge for et utvalg pilarer» og «avgjør
  av en oppgavetekst hvilken sjanger (A–L) den tilhører».
- **Typiske feil:** Metafeilene: droppe begrunnelsen (#1); tro at arkivfrekvensene er en
  garanti for dagens 3-timers sett (les forbeholdet); ignorere at formlene er utlevert
  (les vedlegget i 0.2 i stedet for å pugge).
- **Kvote:** 12 quiz / 8 flashcards (formfakta, pilarene, temafrekvens, sensorkravene,
  sjangerkodene, 5t→3t-forbeholdet, emnehistorikken).

#### Kapittel 0.2: Verktøykassen — formelvedlegget, notasjon og regnehåndverk
**id:** `oslomet-diskretmatte-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-diskretmatte-0-1`

- **Kapitteltype:** håndverkskapittel (meta — utlevert vedlegg + begrunnelsesspråk).
- **Description:** Det **utleverte formelvedlegget** i sin helhet (studenten får det på
  eksamen → ferdigheten er raskt oppslag + korrekt bruk, ikke pugging), emnets faste
  notasjon, og «alt skal begrunnes»-håndverket som gir poeng på hver oppgave.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–5 på tvers av alle sjangre A–L; vedlegget
  følger hvert sett). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; grunnleggende tallregning fra R1
  `(verifiser lenke)`. `collapsible` **Formelvedlegget (normativt):** trykk hele vedlegget
  — logikk (operatorsymboler, distributive lover, De Morgan, $p\rightarrow q\equiv\neg p\lor q$,
  kvantornegering); mengder (distributive, De Morgan, inklusjon-eksklusjon for to og tre
  mengder); funksjoner (en-til-en, på); matriser (transponert); tallteori (divisjonsalgoritmen
  div/mod, gcd/lcm, $ab=\gcd\cdot\mathrm{lcm}$, kongruens mod m, tverrsum ≡ mod 9); rekker
  (aritmetisk/geometrisk sum + antall-ledd-formel); kombinatorikk (binomialkoeffisienter +
  identiteter, binomialteoremet, de fire utvalgstypene, pigeonhole); differensligninger (hele
  oppskriften med karakteristisk polynom + begge rot-tilfeller); relasjoner (definisjoner av
  fire egenskaper, partisjon, ekvivalens/-klasser, partiell ordning m/ maks/min); grafteori
  (grad, grad-kant-setningen, åpen/lukket Euler-vei, Eulers setning).
- **Innholdskontrakt (flashcard-kilde):** **Notasjonssett:** logiske operatorer
  $\neg,\land,\lor,\oplus,\rightarrow,\leftrightarrow$; mengdesymboler
  $\cup,\cap,\setminus,\overline{A},\subseteq,\in,|A|,\mathcal{P}(A)$; $\forall,\exists$;
  kongruens $a\equiv b\pmod m$; div/mod; $\gcd,\mathrm{lcm}$; relasjonsmatrise $M_R$ og
  boolsk produkt $\odot$; grad $\deg(v)$. **Begrunnelsesmalen:** «X gjelder fordi [navngitt
  lov/egenskap/formel fra vedlegget], og mellomregningen er […]». **Kjerneprinsipp:** vedlegget
  fjerner pugging — poenget er å velge riktig formel og vise full mellomregning. Marker hvilke
  få ting som IKKE står i vedlegget og må sitte (f.eks. Euklids algoritme som prosedyre,
  to-komplement-oppskriften).
- **Metode/oppskrift:** (1) les oppgaven, identifiser sjanger (A–L); (2) slå opp riktig formel
  i vedlegget; (3) sett inn og vis HVER mellomregningslinje; (4) skriv begrunnelsen med malen;
  (5) verifiser der metoden ber om det (differensligning, kontrollsiffer).
- **Typiske feil:** #1 (svar uten begrunnelse); tro at man må pugge det som står i vedlegget;
  velge feil formel (aritmetisk vs. geometrisk #11, feil inkl-ekskl-fortegn #12).
- **Modellsvar:** «Vis hvordan du finner rett sumformel i vedlegget for $7+12+17+\dots+127$ og
  regner den ut med full mellomregning»; «Skriv utsagnet ‘$p$ bare hvis $q$’ med rett operator
  og begrunn valget mot #2».
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 13).

### Del 1 — Utsagns- og predikatlogikk *(prioritet: KUNNE — 87 % / 13 %)*

#### Kapittel 1.1: Utsagnslogikk — sannhetstabeller, tautologi og ekvivalens
**id:** `oslomet-diskretmatte-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** Sannhetsverditabeller for sammensatte utsagn (avgjøre tautologi,
  selvmotsigelse, logisk ekvivalens), oversette dagligtale til operatorer, og konstruere et
  utsagn som passer en gitt sannhetskolonne — den faste oppgave 1.
- **Eksamensbelegg:** Sjanger A (20/23, 87 %), fast oppgave 1. Tre varianter: (i) oversette
  «hvis…så», «bare hvis», «verken…eller», «nødvendig/tilstrekkelig» til
  $\neg,\land,\lor,\oplus,\rightarrow$; (ii) sannhetstabell → tautologi/selvmotsigelse/
  ekvivalens; (iii) konstruere utsagn fra sannhetskolonne. Prioritet: kunne. Sjangre: A.
- **Forkunnskaper/kryssbok:** kap. 0.2; logiske operatorer fra R1 `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** operatorer + De Morgan + $p\rightarrow q\equiv
  \neg p\lor q$ (marker: i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** sannhetsverditabeller for
  $\neg,\land,\lor,\oplus,\rightarrow,\leftrightarrow$; **tautologi** (alltid sann),
  **selvmotsigelse** (alltid usann), **logisk ekvivalens** ($\equiv$, identiske
  sannhetskolonner); oversettingsregler: «$p$ bare hvis $q$» $=p\rightarrow q$, «$p$
  nødvendig for $q$» $=q\rightarrow p$, «$p$ tilstrekkelig for $q$» $=p\rightarrow q$,
  «verken $p$ eller $q$» $=\neg p\land\neg q$; De Morgan; kontrapositiv
  $p\rightarrow q\equiv\neg q\rightarrow\neg p$.
- **Metode/oppskrift:** (1) tildel kolonner for hvert atomært utsagn ($2^n$ rader); (2) bygg
  opp de sammensatte kolonnene trinnvis; (3) les av tautologi/ekvivalens; (4) ved oversetting:
  identifiser bindeordet, velg operator, begrunn mot #2.
- **Typiske feil:** #2 («bare hvis»/nødvendig-tilstrekkelig snus feil); forveksle $\lor$ og
  $\oplus$; #1 (avgjøre uten å vise tabellen).
- **Modellsvar:** «Avgjør ved sannhetstabell om $(p\rightarrow q)\land(q\rightarrow p)$ er
  ekvivalent med $p\leftrightarrow q$» (sjanger A); «Oversett ‘Du består bare hvis du leverer
  obligen’ og begrunn retningen».
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.2: Predikatlogikk og kvantorer (kompakt)
**id:** `oslomet-diskretmatte-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `oslomet-diskretmatte-1-1`

- **Kapitteltype:** teorikapittel (kjenne — notat-tungt, eksamens-lett).
- **Description:** Oversette «alle/ingen/det finnes» til $\forall,\exists$ over en
  utsagnsfunksjon, avgjøre sannhet av kvantifiserte tallteoretiske utsagn, og negere
  kvantifiserte utsagn — kompakt, fordi dette sjelden er egen eksamensoppgave, men står i
  pensum/obligene.
- **Eksamensbelegg:** Sjanger L (3/23 eksplisitt, 13 %), oftest et lite underpunkt i
  logikkoppgaven. Tungt i obligene og avsnitt 1.4–1.5. Prioritet: kjenne (nedprioritert,
  eksplisitt begrunnet). Sjangre: L.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:** $\forall,
  \exists$, utsagnsfunksjon $P(x)$/$P(x,y)$, kvantornegering (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **allkvantor** $\forall x\,P(x)$ («for alle»),
  **eksistenskvantor** $\exists x\,P(x)$ («det finnes»); **negeringsregler**
  $\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)$ og $\neg\exists x\,P(x)\equiv\forall x\,
  \neg P(x)$; rekkefølge i nøstede kvantorer ($\forall m\exists n$ vs. $\exists n\forall m$ —
  betydningen endres); oversette «ingen» $=\forall x\,\neg P(x)$.
- **Metode/oppskrift:** (1) identifiser domenet og utsagnsfunksjonen; (2) velg $\forall/\exists$
  etter «alle/ingen/finnes»; (3) for sannhet: test/motbevis over domenet; (4) for negering:
  bytt kvantor og neger kjernen.
- **Typiske feil:** bytte rekkefølge på nøstede kvantorer; negere feil (glemme å bytte
  kvantor); blande «ingen» og «ikke alle».
- **Modellsvar:** «Skriv ‘det finnes et heltall som er større enn alle primtall mindre enn
  10’ med kvantorer, avgjør sannhet, og neger utsagnet» (sjanger L).
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A sannhetstabell (tautologi/ekvivalens) · 1.B oversetting
dagligtale → operatorer (bare hvis / nødvendig-tilstrekkelig) · 1.C konstruere utsagn fra
sannhetskolonne · 1.D kvantorer: oversetting + negering + sannhet).

### Del 2 — Mengdelære og inklusjon-eksklusjon *(prioritet: PERFEKT — 100 %)*

#### Kapittel 2.1: Mengdeoperasjoner, Venn-diagram og forenkling
**id:** `oslomet-diskretmatte-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-1-1`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** Mengdeoperasjonene, å skravere en gitt mengdeformel i Venn-diagram (og lese
  av en formel fra et skravert diagram), og å forenkle sammensatte mengdeuttrykk med
  mengdeidentiteter — den faste oppgave 2.
- **Eksamensbelegg:** Sjanger B (23/23, 100 %), fast oppgave 2. (i) skravere formel / lese av
  diagram (to–tre mengder); (ii) forenkle med De Morgan, distributiv m.m.; symmetrisk differens
  $\oplus$ i nyere sett. Prioritet: perfekt. Sjangre: B.
- **Forkunnskaper/kryssbok:** kap. 1.1 (logikk speiler mengdeoperasjonene). `collapsible`
  **Symbol- og formelliste:** $\cup,\cap,\setminus,\overline{A},\oplus,\subseteq,|A|,
  \mathcal{P}(A)$; distributive lover og De Morgan for mengder (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **union/snitt/differens/komplement/symmetrisk
  differens**; **potensmengde** $\mathcal{P}(A)$ ($2^{|A|}$ elementer); **mengdeidentiteter**
  (kommutativ, assosiativ, distributiv, De Morgan $\overline{A\cup B}=\overline A\cap
  \overline B$, absorpsjon, idempotens); Venn-diagram som bevisverktøy (og for (u)likhet);
  parallellen logikk↔mengder ($\land\leftrightarrow\cap$, $\lor\leftrightarrow\cup$).
- **Metode/oppskrift:** (1) for skravering: bygg opp uttrykket område for område; (2) for
  avlesning: identifiser hvilke områder som er skravert og skriv formelen; (3) for forenkling:
  bruk identitetene ett steg om gangen, navngi loven i hvert steg (sensorkrav).
- **Typiske feil:** feil komplement-område i Venn; forenkle uten å navngi loven (#1); blande
  $\setminus$ og $\oplus$.
- **Modellsvar:** «Skraver $\overline{A\cup B}\cap C$ i et tremengders Venn-diagram og forenkle
  $(A\cap B)\cup(A\cap\overline B)$» (sjanger B).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 2.2: Inklusjon-eksklusjon som telleoppgave
**id:** `oslomet-diskretmatte-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-diskretmatte-2-1`

- **Kapitteltype:** teori-/utregningskapittel + innebygd drill (perfekt).
- **Description:** Kardinalitetsformlene for union av to og tre mengder (fra vedlegget), brukt
  som **anvendt telleoppgave** — den klassiske «i en gruppe på N studenter tar x emne 1, y emne
  2 …»-oppgaven.
- **Eksamensbelegg:** Sjanger B (del av 100 %-oppgaven, inklusjon-eksklusjon-varianten). Prioritet:
  perfekt. Sjangre: B.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:** $|A\cup B|=
  |A|+|B|-|A\cap B|$ og $|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|$
  (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** inklusjon-eksklusjon for to og tre mengder;
  komplement-telling $|\overline A|=|U|-|A|$; å oversette en tekstoppgave til mengder;
  «nøyaktig én/minst to»-telling ved å kombinere snittene.
- **Metode/oppskrift:** (1) definer mengdene og universet; (2) noter oppgitte kardinaliteter og
  snitt; (3) sett inn i formelen med rett fortegn; (4) svar på det som spørres («ingen av
  emnene» = $|U|-|A\cup B\cup C|$).
- **Typiske feil:** #12 (glemme parvise snitt / trippelsnittet); regne «minst to» som ett snitt;
  #1 (svar uten oppsett).
- **Modellsvar:** «Av 120 studenter tar 70 diskret matematikk, 50 programmering, 35 begge —
  hvor mange tar ingen av delene?» (nyskrevne tall; sjanger B, inkl-ekskl).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A Venn-skravering begge veier · 2.B mengdeforenkling med
navngitte lover · 2.C inklusjon-eksklusjon to mengder · 2.D inklusjon-eksklusjon tre mengder
på eksamensnivå).

### Del 3 — Matriser og boolsk matriseprodukt *(prioritet: PERFEKT — 100 %)*

#### Kapittel 3.1: Matriseregning — dimensjon, produkt, transponert
**id:** `oslomet-diskretmatte-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** Matrisedimensjon, når et produkt er definert (og dimensjonen til det),
  utregning av $AB$, $BA$, $A+A$, $A^T$, og å avgjøre symmetri — den faste matriseoppgaven.
- **Eksamensbelegg:** Sjanger C (23/23, 100 %), fast oppgave. Dimensjon; definerte produkter;
  $AB\ne BA$; transponert; symmetri; permutasjonsmatrise. Prioritet: perfekt. Sjangre: C.
- **Forkunnskaper/kryssbok:** kap. 0.2; matriseregning fra R2 `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** dimensjon $m\times n$, produktregel
  «kolonner i $A$ = rader i $B$», transponert (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **dimensjon** $m\times n$; **produkt definert** hviss
  kolonnetall($A$) = radtall($B$), resultat $m_A\times n_B$; **matriseprodukt** (radvektor ·
  kolonnevektor); $AB\ne BA$ generelt (#10); **transponert** $A^T$ ($(A^T)_{ij}=A_{ji}$);
  **symmetrisk** hviss $A=A^T$; **identitetsmatrise** $I$; **permutasjonsmatrise** (én 1 per
  rad/kolonne).
- **Metode/oppskrift:** (1) skriv dimensjonene; (2) sjekk om produktet er definert og noter
  resultatdimensjonen FØR utregning; (3) regn ut element for element med synlig radxkolonne-
  utregning; (4) for symmetri: sammenlign med $A^T$.
- **Typiske feil:** #10 (regne $AB$ når dimensjonene ikke matcher; forveksle $AB/BA$); glemme å
  angi dimensjon; #1 (skrive produktet uten radxkolonne-mellomregning).
- **Modellsvar:** «Gitt $A$ ($2\times3$) og $B$ ($3\times2$): avgjør hvilke av $AB,BA,A^T B$ som
  er definert med dimensjon, og regn ut det/de definerte» (sjanger C).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 3.2: Boolsk matriseprodukt og relasjonsmatriser
**id:** `oslomet-diskretmatte-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-diskretmatte-3-1`

- **Kapitteltype:** teori-/utregningskapittel (perfekt — bro til relasjoner).
- **Description:** Det **boolske (logiske) matriseproduktet** $M_R\odot M_R$ — der boolsk
  algebra faktisk opptrer i arkivet (ikke som aksiomatisk forenkling). Etablerer verktøyet som
  Del 11 (relasjoner) bruker for veier av lengde 2/3.
- **Eksamensbelegg:** Sjanger C/J (del av 100 %-matrise-/relasjonsoppgavene). Boolsk
  matriseprodukt er OsloMets «forkledde boolske algebra» (analysen funn 5). Prioritet: perfekt.
  Sjangre: C, J.
- **Forkunnskaper/kryssbok:** kap. 3.1; kap. 1.1 (∧/∨ speiler ⊙). `collapsible`
  **Symbol- og formelliste:** $M_R$, boolsk produkt $\odot$ (∧ i stedet for ·, ∨ i stedet for +).
- **Innholdskontrakt (flashcard-kilde):** **boolsk matrise** (0/1-elementer); **boolsk produkt**
  $M\odot N$: element $(i,j)=\bigvee_k (M_{ik}\land N_{kj})$; tolkning: $(M_R\odot M_R)_{ij}=1$
  hviss det finnes en vei av lengde 2 fra $i$ til $j$; iterasjon gir veier av lengde $k$; forskjell
  fra vanlig matriseprodukt (∧/∨ i stedet for ·/+).
- **Metode/oppskrift:** (1) skriv $M_R$ fra relasjonen; (2) for hvert element: gå gjennom
  mellomleddet $k$, sett 1 hvis noen $M_{ik}\land M_{kj}=1$; (3) tolk resultatet som veier.
- **Typiske feil:** bruke vanlig aritmetikk i stedet for ∧/∨; glemme at 1+1=1 (boolsk); feil
  tolkning av veilengde.
- **Modellsvar:** «Gitt relasjonsmatrisen $M_R$ for en relasjon på $\{1,2,3\}$, regn $M_R\odot M_R$
  og angi hvilke par som er forbundet med en vei av lengde 2» (sjanger J).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A dimensjon + definert produkt + resultatdimensjon · 3.B
$AB/BA/A^T$-utregning + symmetri · 3.C boolsk matriseprodukt · 3.D samlet matriseprøve på
eksamensnivå).

### Del 4 — Tallsystemer og to-komplement *(prioritet: PERFEKT — 100 %)*

#### Kapittel 4.1: Tallsystemer — binær, oktal, heksadesimal
**id:** `oslomet-diskretmatte-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** Konvertering mellom desimal, binær, oktal og heksadesimal begge veier, med
  full mellomregning — den faste oppgave 4/5.
- **Eksamensbelegg:** Sjanger D (23/23, 100 %). Konverter alle veier; oktal/heks som
  «komprimert binær». Prioritet: perfekt. Sjangre: D.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol- og formelliste:** posisjonsverdier
  ($2^k$, $8^k$, $16^k$), heks-sifrene A–F (ikke i vedlegget — må sitte).
- **Innholdskontrakt (flashcard-kilde):** **posisjonssystem** og basis; desimal→binær ved
  gjentatt divisjon med 2 (les rest baklengs); binær→desimal ved posisjonsvekter; binær↔oktal
  (grupper 3 bit), binær↔heks (grupper 4 bit); heks-sifrene $A=10,\dots,F=15$; addisjon i binær
  med mente.
- **Metode/oppskrift:** (1) velg konverteringsretning; (2) desimal→base: gjentatt divisjon, noter
  restene; (3) base→desimal: multipliser hvert siffer med posisjonsvekten; (4) binær↔oktal/heks:
  grupper bit; vis hvert steg.
- **Typiske feil:** lese restene i feil rekkefølge; feil gruppering (3 vs. 4 bit); #1 (svar uten
  divisjonskjeden).
- **Modellsvar:** «Konverter $\text{45}_{10}$ til binær, oktal og heksadesimal, og tilbake — vis
  all mellomregning» (sjanger D).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 4.2: To-komplement og binæraritmetikk
**id:** `oslomet-diskretmatte-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-4-1`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** 8-bits to-komplement med fortegnsbit — representere negative tall, tolke et
  gitt bitmønster, utføre binær addisjon, og finne største/minste representerbare tall.
  (Uttersruds eget notat `to-komplement.pdf`.)
- **Eksamensbelegg:** Sjanger D (fast bolk i tallsystem-oppgaven, 100 %). Prioritet: perfekt.
  Sjangre: D.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:** fortegnsbit,
  to-komplement-oppskrift (inverter alle bit + 1), område $-2^{n-1}\dots 2^{n-1}-1$ (ikke i
  vedlegget — må sitte).
- **Innholdskontrakt (flashcard-kilde):** **fortegnsbit** (mest signifikante bit: 0=positiv,
  1=negativ); **to-komplement** av et tall: inverter alle bit og legg til 1; 8-bits område
  $-128\dots127$ (asymmetrisk, $2^8=256$ verdier); tolke et bitmønster (fortegnsbit → inverter
  tilbake); binær addisjon med mente; overflow-tegn.
- **Metode/oppskrift:** (1) for negativt tall: skriv positivt i binær, inverter, +1; (2) for
  tolkning: sjekk fortegnsbiten, hvis 1 → ta to-komplement tilbake og sett minus; (3) addisjon:
  legg sammen bit for bit med mente; (4) sjekk om resultatet er i området.
- **Typiske feil:** #4 (glemme fortegnsbiten; feil område — symmetrisk i stedet for $-128\dots127$;
  feil mente); glemme «+1»-steget i to-komplement.
- **Modellsvar:** «Representer $-37$ i 8-bits to-komplement, tolk bitmønsteret $\text{11010011}$,
  og regn ut summen av de to i binær» (sjanger D). *(Parametersjekk området numerisk før tall
  påstås ubetinget.)*
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A konvertering desimal↔binær · 4.B binær↔oktal↔heks · 4.C
to-komplement representasjon + tolkning · 4.D binær addisjon + område på eksamensnivå).

### Del 5 — Tallteori *(prioritet: KUNNE — 91 %)*

#### Kapittel 5.1: Primtall, gcd/lcm og Euklids algoritme
**id:** `oslomet-diskretmatte-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** Primtallsfaktorisering, gcd via primtallsfaktorisering *og* via Euklids
  algoritme (med hele divisjonskjeden), lcm, og sammenhengen $ab=\gcd(a,b)\cdot\mathrm{lcm}(a,b)$.
- **Eksamensbelegg:** Sjanger E (21/23, 91 %), ofte flettet inn i tallsystem-/rekkeoppgaven.
  Euklids algoritme med full mellomregning premieres. Prioritet: kunne. Sjangre: E.
- **Forkunnskaper/kryssbok:** kap. 4.1 (div/mod). `collapsible` **Symbol- og formelliste:**
  $\gcd,\mathrm{lcm}$, $ab=\gcd\cdot\mathrm{lcm}$, divisjonsalgoritmen (i vedlegget); Euklids
  algoritme som prosedyre (må sitte).
- **Innholdskontrakt (flashcard-kilde):** **primtall** og **aritmetikkens fundamentalteorem**
  (entydig faktorisering); **div/mod** ($a=qb+r$, $0\le r<b$); **gcd** via minste felles
  primfaktorpotenser; **Euklids algoritme** (gjentatt $\gcd(a,b)=\gcd(b,a\bmod b)$); **lcm** via
  største felles primfaktorpotenser; $ab=\gcd\cdot\mathrm{lcm}$.
- **Metode/oppskrift:** (1) faktoriser i primtall; (2) gcd = felles faktorer med minste
  eksponent; (3) Euklid: sett opp divisjonskjeden $\gcd(a,b)=\gcd(b,r)$ til rest 0, vis hvert
  steg; (4) lcm via $ab/\gcd$.
- **Typiske feil:** #1 (oppgi gcd uten divisjonskjeden); stoppe Euklid for tidlig; forveksle gcd
  og lcm.
- **Modellsvar:** «Finn $\gcd(252,198)$ både ved primtallsfaktorisering og ved Euklids algoritme
  (vis kjeden), og bruk resultatet til å finne lcm» (sjanger E).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 5.2: Kongruens og kontrollsiffer
**id:** `oslomet-diskretmatte-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-diskretmatte-5-1`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** Kongruens modulo $m$ med regneregler, anvendt på **kontrollsiffer** (ISBN-13,
  medlemsnummer) — inkludert å vise generelt at ett feilskrevet siffer avsløres. Tverrsum ≡ tall
  (mod 9).
- **Eksamensbelegg:** Sjanger E (del av 91 %-tallteori). Kontrollsiffer-beviset er A-stoff.
  Prioritet: kunne. Sjangre: E.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:** $a\equiv b
  \pmod m$, kongruensregneregler, tverrsum ≡ mod 9 (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **kongruens** $a\equiv b\pmod m$ ($m\mid a-b$);
  regneregler (addisjon/multiplikasjon bevares mod $m$); **kontrollsiffer** (vektet sum mod $m$,
  ISBN-13 med vekter 1,3,1,3,…); tverrsum-regelen mod 9; hvordan ett endret siffer endrer
  kontrollsummen (avslørt hviss ikke $\equiv 0$).
- **Metode/oppskrift:** (1) skriv den vektede summen; (2) reduser mod $m$; (3) for
  kontrollsiffer: løs for siffer som gir sum $\equiv 0$; (4) for avsløringsbevis: vis at et
  enkelt sifferbytte endrer summen mod $m$.
- **Typiske feil:** feil vekter i ISBN; regnefeil i mod-reduksjon; #1 (kontrollsiffer uten å
  vise den vektede summen).
- **Modellsvar:** «Beregn kontrollsifferet for et ISBN-13-lignende nummer og vis at bytte av det
  tredje sifferet gir feil kontrollsum» (nyskrevne siffer; sjanger E).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A primtallsfaktorisering + gcd/lcm · 5.B Euklids algoritme
(full kjede) · 5.C kongruens-regning mod m · 5.D kontrollsiffer + avsløringsbevis på
eksamensnivå).

### Del 6 — Funksjoner *(prioritet: KUNNE — 96 %)*

#### Kapittel 6.1: Funksjoner — verdimengde, en-til-en og på
**id:** `oslomet-diskretmatte-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-2-1`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** For konkrete funksjoner på endelige/heltallsmengder: finne verdimengde,
  avgjøre en-til-en (injektiv) og på (surjektiv) med begrunnelse eller moteksempel, og finne
  urbildemengder — den nesten faste funksjonsoppgaven.
- **Eksamensbelegg:** Sjanger I (22/23, 96 %), ofte oppgave 3/8. Konkrete funksjoner (siffersum,
  $a\bmod 3+a\bmod 5$), ikke abstrakte komposisjonsbevis. Prioritet: kunne. Sjangre: I.
- **Forkunnskaper/kryssbok:** kap. 2.1 (mengder); kap. 5.2 (mod-funksjoner). `collapsible`
  **Symbol- og formelliste:** definisjonsmengde/verdimengde/kodomene, en-til-en, på, urbilde
  $f^{-1}(\{k\})$ (en-til-en/på i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **definisjonsmengde/kodomene/verdimengde**;
  **en-til-en (injektiv)** ($f(a)=f(b)\Rightarrow a=b$); **på (surjektiv)** (verdimengde =
  kodomene); **bijektiv** (begge); **urbildemengde** $\{a\mid f(a)=k\}$; moteksempel som bevis
  for «ikke en-til-en»/«ikke på».
- **Metode/oppskrift:** (1) regn ut $f$ på hele definisjonsmengden (ved endelig mengde); (2)
  verdimengde = de faktiske verdiene; (3) en-til-en: let etter to ulike $a$ med samme verdi
  (moteksempel) eller argumenter generelt; (4) på: sjekk om kodomenet dekkes.
- **Typiske feil:** blande verdimengde og kodomene; konkludere «på» uten å sjekke hele
  kodomenet; #1 (påstå en-til-en uten begrunnelse/moteksempel).
- **Modellsvar:** «La $f:\{0,\dots,14\}\to\mathbb{Z}$ være $f(a)=(a\bmod 3)+(a\bmod 5)$: finn
  verdimengden, avgjør om $f$ er en-til-en og på, og gi urbildet av verdien 3» (nyskrevne tall;
  sjanger I).
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A verdimengde på endelig mengde · 6.B en-til-en med
begrunnelse/moteksempel · 6.C på + urbildemengde · 6.D samlet funksjonsprøve på eksamensnivå).

### Del 7 — Rekker og summer *(prioritet: KJENNE — 74 %)*

#### Kapittel 7.1: Aritmetiske og geometriske rekker
**id:** `oslomet-diskretmatte-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (kjenne).
- **Description:** Kjenne igjen aritmetisk vs. geometrisk rekke, bruke sumformlene fra vedlegget,
  og bestemme antall ledd $n$ først. Forutsetning for verifikasjon i differensligning-kapitlet.
- **Eksamensbelegg:** Sjanger F (17/23, 74 %), egen deloppgave eller flettet inn i tallteori/
  differensligning. Prioritet: kjenne. Sjangre: F.
- **Forkunnskaper/kryssbok:** kap. 0.2; rekker fra R2 `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** aritmetisk sum, geometrisk sum, antall-ledd-formel $n=\tfrac{b-a}{d}+1$
  (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **aritmetisk rekke** (konstant differanse $d$; sum
  $S_n=\tfrac{n}{2}(a_1+a_n)$); **geometrisk rekke** (konstant forhold $r$; sum $S_n=a_1
  \tfrac{r^n-1}{r-1}$, $r\ne1$); **antall ledd** $n=\tfrac{a_n-a_1}{d}+1$ (aritmetisk); kjenne
  igjen type fra differansen/forholdet; $r=-2$-tilfellet (alternerende).
- **Metode/oppskrift:** (1) avgjør type (konstant differanse → aritmetisk; konstant forhold →
  geometrisk); (2) finn $n$ (husk «+1»); (3) sett inn i rett sumformel fra vedlegget; (4) regn
  ut.
- **Typiske feil:** #11 (feil sumformel; glemme «+1» i $n$); regne $r$ feil ved alternerende
  fortegn.
- **Modellsvar:** «Finn summen $7+12+17+\dots+127$ (aritmetisk) og $1-2+4-8+\dots+1024$
  (geometrisk, $r=-2$) — bestem antall ledd først» (sjanger F).
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A aritmetisk sum (finn $n$) · 7.B geometrisk sum · 7.C
alternerende geometrisk ($r<0$) · 7.D gjenkjenn type + regn på eksamensnivå).

### Del 8 — Kombinatorikk *(prioritet: KUNNE — 91 %)*

#### Kapittel 8.1: Permutasjoner, kombinasjoner og binomialkoeffisienter
**id:** `oslomet-diskretmatte-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-0-2`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** De fire utvalgstypene (ordnet/uordnet × med/uten tilbakelegging),
  permutasjoner med gjentatte elementer, binomialkoeffisienter og Pascals trekant (radsum
  $=2^n$).
- **Eksamensbelegg:** Sjanger G (21/23, 91 %), ofte to oppgaver i samme sett. Permutasjon med
  gjentakelse («KULTURUKE»), binomialkoeffisienter. Prioritet: kunne. Sjangre: G.
- **Forkunnskaper/kryssbok:** kap. 0.2; sannsynlighet/kombinatorikk fra R1/S1 `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $n!$, $P(n,k)$, $\binom{n}{k}$, de fire
  utvalgstypene, binomialteoremet (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **de fire utvalgstypene** (ordnet m/tilbakelegging
  $n^k$; ordnet u/tilbakelegging $P(n,k)=\tfrac{n!}{(n-k)!}$; uordnet u/tilbakelegging
  $\binom{n}{k}$; uordnet m/tilbakelegging $\binom{n+k-1}{k}$); **permutasjon med gjentatte
  elementer** $\tfrac{n!}{n_1!n_2!\cdots}$; **binomialkoeffisient** og **binomialteoremet**;
  **Pascals trekant** (radsum $2^n$, symmetri $\binom{n}{k}=\binom{n}{n-k}$).
- **Metode/oppskrift:** (1) avgjør om rekkefølge teller og om tilbakelegging; (2) velg rett
  formel; (3) ved gjentatte like elementer: del på $n_i!$ (#6); (4) regn ut.
- **Typiske feil:** #6 (glemme å dele på like elementer → dobbelttelling); blande $P(n,k)$ og
  $\binom{n}{k}$; feil utvalgstype.
- **Modellsvar:** «Hvor mange forskjellige måter kan bokstavene i SUPPEPOSE stokkes om?»
  (permutasjon med gjentakelse; nyskrevet ord; sjanger G).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 8.2: Betingede tellinger, sifferteljing og pigeonhole
**id:** `oslomet-diskretmatte-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-8-1`

- **Kapitteltype:** teori-/utregningskapittel (kunne).
- **Description:** Betingede tellinger («A først eller C sist», «A nøyaktig to ganger», «ingen
  to 1-ere ved siden av hverandre» via komplement/mellomrom-metoden), sifferteljing, og
  pigeonhole-prinsippet — det resonnementstunge kombinatorikk-stoffet (A-stoff).
- **Eksamensbelegg:** Sjanger G (del av 91 %-kombinatorikk). «Ved siden av»-telling og
  pigeonhole er A-stoff. Prioritet: kunne. Sjangre: G.
- **Forkunnskaper/kryssbok:** kap. 8.1. `collapsible` **Symbol- og formelliste:** komplement-
  telling, mellomrom-metoden, pigeonhole (pigeonhole i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **komplement-telling** (totalt − uønsket); **«ved siden
  av»-telling** via mellomrom-metoden (plasser først de andre, sett de restriktive i mellomrommene);
  **betingelser** («minst», «nøyaktig», «minst én av»); **sifferteljing** («hvor mange ganger
  brukes sifferet 3 blant firesifrede tall»); **pigeonhole-prinsippet** ($n+1$ objekter i $n$
  bokser → minst to i samme).
- **Metode/oppskrift:** (1) avgjør om direkte eller komplement er enklest; (2) for «ved siden
  av»: bruk mellomrom-metoden (#7); (3) for «minst/nøyaktig»: del i tilfeller eller bruk
  komplement; (4) pigeonhole: identifiser bokser og objekter.
- **Typiske feil:** #7 (telle «ved siden av» direkte i stedet for komplement/mellomrom); dobbelt-
  telle ved «minst én»; feil bokser i pigeonhole.
- **Modellsvar:** «Hvor mange bitsekvenser av lengde 8 har ingen to 1-ere ved siden av hverandre?»
  (mellomrom-metoden; sjanger G, A-stoff).
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A permutasjon med gjentakelse · 8.B utvalgstype-valg +
binomialkoeffisient · 8.C betinget telling «ved siden av»/«nøyaktig» · 8.D sifferteljing +
pigeonhole på eksamensnivå).

### Del 9 — Differensligninger *(prioritet: PERFEKT — 100 %, SIGNATUR)*

#### Kapittel 9.1: 2. ordens lineær homogen differensligning
**id:** `oslomet-diskretmatte-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-diskretmatte-7-1`

- **Kapitteltype:** teori-/utregningskapittel (perfekt — signatur).
- **Description:** Den faste tredelte prosedyren for $a_n=c_1a_{n-1}+c_2a_{n-2}$: regne ut
  $a_2,a_3$ direkte; finne lukket formel via det karakteristiske polynomet (to reelle røtter
  vs. dobbeltrot); bestemme $\alpha,\beta$ fra startbetingelsene; **verifisere** ved innsetting;
  regne ut et senere ledd. Fagets signaturoppgave.
- **Eksamensbelegg:** Sjanger H (23/23, 100 %), den mest signaturbærende oppgaven. Fast oppgave
  7/8. **Kun reelle røtter og dobbeltrot — INGEN komplekse røtter** (skiller fra HiØ). Prioritet:
  perfekt. Sjangre: H.
- **Forkunnskaper/kryssbok:** kap. 7.1 (rekker, for verifikasjon); andregradsligning fra R1
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** karakteristisk polynom
  $r^2=c_1r+c_2$, generell løsning begge tilfeller (hele oppskriften i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **differensligning** (rekursjon $a_n=c_1a_{n-1}+
  c_2a_{n-2}$); **karakteristisk polynom** $r^2-c_1r-c_2=0$; **to reelle røtter** $r_1\ne r_2$
  → $a_n=\alpha r_1^n+\beta r_2^n$; **dobbeltrot** $r_0$ → $a_n=\alpha r_0^n+\beta n r_0^n$
  (#3); bestemme $\alpha,\beta$ fra to startbetingelser (lineært system); **verifikasjon** ved
  innsetting. *(Parametersjekk numerisk at dobbeltrot-formen faktisk løser rekursjonen før den
  påstås — DNA-regnefag sannhetskontroll.)*
- **Metode/oppskrift:** (1) regn $a_2,a_3$ direkte fra rekursjonen; (2) sett opp karakteristisk
  polynom, finn røttene; (3) velg rett løsningsform (to røtter / dobbeltrot); (4) løs
  ligningssystemet for $\alpha,\beta$ fra startbetingelsene; (5) verifiser ved å sette formelen
  inn i rekursjonen; (6) regn ut det etterspurte senere leddet.
- **Typiske feil:** #3 (bruke to-rot-formen ved dobbeltrot; glemme $\alpha,\beta$ / hoppe over
  verifikasjon); regnefeil i røttene; #1 (oppgi ledd uten mellomregning).
- **Modellsvar:** «La $a_n=5a_{n-1}-6a_{n-2}$, $a_0=1$, $a_1=4$: regn $a_2,a_3$; finn lukket
  formel via karakteristisk polynom; verifiser; regn $a_8$» (to reelle røtter; nyskrevne tall;
  sjanger H).
- **Kvote:** 22 quiz / 20 flashcards.

#### Kapittel 9.2: Differensligning-drill
**id:** `oslomet-diskretmatte-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-diskretmatte-9-1`

- **Kapitteltype:** drillkapittel (DNA B) (perfekt — signatur).
- **Description:** Ren mengdetrening på signaturoppgaven, med varianter: to reelle røtter,
  dobbeltrot, negative røtter, «vis at et tall alltid går opp i $a_n$» (induksjon flettet inn).
- **Eksamensbelegg:** Sjanger H (varianter fra 23/23-arkivet). Prioritet: perfekt. Sjangre: H.
- **Forkunnskaper/kryssbok:** kap. 9.1; kap. 10.1 (induksjon, for «går alltid opp»-varianten).
  `collapsible` **Symbol- og formelliste:** oppskriften i kortform (begge rot-tilfeller).
- **Løsningsoppskrift:** (1) $a_2,a_3$; (2) karakteristisk polynom → røtter; (3) løsningsform
  etter rot-tilfelle; (4) $\alpha,\beta$; (5) verifiser; (6) senere ledd. Avslutt med
  begrunnelsesmalen.
- **Gjennomregnet eksamenscase:** dobbeltrot-variant med sensor-margnotater (hvor #3-fellen
  ligger).
- **Typiske feil:** #3 (dobbeltrot-formen); glemme verifikasjon; regnefeil i systemet for
  $\alpha,\beta$.
- **Kvote:** 18 quiz / 12 flashcards (drillkapittel → færre nye flashcards).

**Prøve-kvote Del 9:** 4 prøver (9.A to reelle røtter (full prosedyre + verifikasjon) · 9.B
dobbeltrot · 9.C negative røtter / alternerende · 9.D «vis at $k$ alltid går opp i $a_n$» på
eksamensnivå).

### Del 10 — Matematisk induksjon *(prioritet: KJENNE — 61 %)*

#### Kapittel 10.1: Matematisk induksjon (og «eller på annen måte»)
**id:** `oslomet-diskretmatte-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-7-1`

- **Kapitteltype:** teorikapittel (kjenne).
- **Description:** Bevis ved matematisk induksjon (basistrinn, hypotese, induksjonstrinn) for
  sumformler og delelighetspåstander — med den eksplisitte innrammingen at oppgaven ofte sier
  «vis ved induksjon *eller på annen måte*», så alternative bevis (direkte delelighet) godtas.
- **Eksamensbelegg:** Sjanger «induksjon» (14/23, 61 %), ofte «eller på annen måte». Ikke fagets
  tyngdepunkt (ulikt MA0301). Lær det rent, men vis fluktruten. Prioritet: kjenne. Sjangre:
  (induksjon), overlapper H (differensligning-«går alltid opp»).
- **Forkunnskaper/kryssbok:** kap. 7.1 (sumformler); kap. 5.1 (delelighet).
  `collapsible` **Symbol- og formelliste:** induksjonsprinsippet (basistrinn P(1), hypotese
  P(k), steg P(k)→P(k+1)).
- **Innholdskontrakt (flashcard-kilde):** **induksjonsprinsippet**: (1) **basistrinn** vis
  $P(n_0)$; (2) **induksjonshypotese** anta $P(k)$; (3) **induksjonssteg** vis $P(k)\Rightarrow
  P(k+1)$; **anvendelse** på sumformler og delelighet; **alternativ**: direkte delelighets-
  argument (faktorisering, mod-regning) der oppgaven tillater «annen måte».
- **Metode/oppskrift:** (1) formuler $P(n)$ presist; (2) sjekk basistrinnet; (3) skriv
  hypotesen; (4) bruk hypotesen i steget og manipuler til $P(k+1)$; (5) konkluder. For «annen
  måte»: vurder direkte delelighet.
- **Typiske feil:** hoppe over basistrinnet; ikke bruke hypotesen i steget; uklar
  $P(k)\to P(k+1)$-overgang.
- **Modellsvar:** «Vis ved induksjon (eller på annen måte) at $3\mid n^3-n$ for alle $n\ge1$»
  (nyskrevet påstand; vis begge ruter).
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A basistrinn + hypotese-oppsett · 10.B sumformel ved
induksjon · 10.C delelighet ved induksjon · 10.D delelighet «på annen måte» (direkte) på
eksamensnivå).

### Del 11 — Relasjoner *(prioritet: PERFEKT — 100 %)*

#### Kapittel 11.1: Relasjoner — egenskaper, ekvivalens og ordning
**id:** `oslomet-diskretmatte-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-diskretmatte-3-2`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** Gitt en relasjon (par, relasjonsgraf eller relasjonsmatrise): tegne grafen
  $G_R$, sette opp matrisen $M_R$, avgjøre refleksiv/symmetrisk/antisymmetrisk/transitiv hver
  for seg med begrunnelse, og klassifisere som ekvivalensrelasjon eller partiell ordning —
  den faste oppgave 9.
- **Eksamensbelegg:** Sjanger J (23/23, 100 %), fast oppgave 9. Fire egenskaper hver for seg;
  ekvivalens vs. ordning; maksimale/minimale elementer. Prioritet: perfekt. Sjangre: J.
- **Forkunnskaper/kryssbok:** kap. 3.2 (boolsk matriseprodukt / $M_R$); kap. 2.1 (mengder).
  `collapsible` **Symbol- og formelliste:** de fire egenskapene, ekvivalensklasse, partisjon,
  partiell ordning m/ maks/min (alt i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **relasjonsgraf** $G_R$ og **relasjonsmatrise** $M_R$;
  **refleksiv** ($aRa$ for alle), **symmetrisk** ($aRb\Rightarrow bRa$), **antisymmetrisk**
  ($aRb\land bRa\Rightarrow a=b$), **transitiv** ($aRb\land bRc\Rightarrow aRc$) — hver med egen
  test; **ekvivalensrelasjon** (refleksiv + symmetrisk + transitiv) → **ekvivalensklasser**/
  **partisjon**; **partiell ordning** (refleksiv + antisymmetrisk + transitiv) →
  **maksimale/minimale elementer** (f.eks. «går opp i»-ordningen); hvilke par som må legges til
  for hver egenskap.
- **Metode/oppskrift:** (1) sett opp $M_R$/tegn $G_R$; (2) test hver av de fire egenskapene for
  seg med begrunnelse (sensorkrav 3); (3) klassifiser (ekvivalens/ordning); (4) for ordning:
  finn maks/min; (5) angi par som mangler for en gitt egenskap.
- **Typiske feil:** #5 (blande ekvivalens (symmetrisk) og ordning (antisymmetrisk); ikke sjekke
  alle tre); konkludere «ekvivalensrelasjon» uten å sjekke hver egenskap (#1); glemme
  refleksivitet på diagonalen i $M_R$.
- **Modellsvar:** «La $R$ på $\{1,2,3,4\}$ være ‘går opp i’: sett opp $M_R$, avgjør de fire
  egenskapene hver for seg, klassifiser relasjonen, og finn maksimale/minimale elementer»
  (sjanger J).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 11.2: Relasjons-drill
**id:** `oslomet-diskretmatte-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-diskretmatte-11-1`

- **Kapitteltype:** drillkapittel (DNA B) (perfekt).
- **Description:** Mengdetrening på relasjonsanalysen med varianter: relasjon gitt som par / graf
  / matrise, boolsk matriseprodukt for veier av lengde 2/3, ekvivalensklasser, ordningsdiagram.
- **Eksamensbelegg:** Sjanger J (varianter fra 23/23-arkivet). Prioritet: perfekt. Sjangre: J.
- **Forkunnskaper/kryssbok:** kap. 11.1; kap. 3.2. `collapsible` **Symbol- og formelliste:** de
  fire egenskapene + $M_R\odot M_R$ i kortform.
- **Løsningsoppskrift:** (1) representasjon (par/graf/matrise); (2) fire egenskaper hver for
  seg; (3) $M_R\odot M_R$ for veier; (4) klassifiser + maks/min. Avslutt med begrunnelsesmalen.
- **Gjennomregnet eksamenscase:** partiell ordning med Hasse-lignende resonnement + boolsk
  matriseprodukt, med sensor-margnotater (#5-fellen).
- **Typiske feil:** #5; feil boolsk produkt (bruke aritmetikk); glemme å begrunne hver egenskap.
- **Kvote:** 16 quiz / 12 flashcards (drillkapittel).

**Prøve-kvote Del 11:** 4 prøver (11.A fire egenskaper + begrunnelse fra graf · 11.B fra matrise
+ manglende par · 11.C ekvivalensklasser · 11.D partiell ordning + maks/min + boolsk produkt på
eksamensnivå).

### Del 12 — Grafteori og Euler-veier *(prioritet: PERFEKT — 100 %)*

#### Kapittel 12.1: Grafer, grad og Euler-veier
**id:** `oslomet-diskretmatte-12-1` · **number:** 12.1 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-diskretmatte-11-1`

- **Kapitteltype:** teori-/utregningskapittel (perfekt).
- **Description:** Modellere en praktisk situasjon (broer over en elv à la Königsberg, dører
  mellom rom) som en urettet graf, sette opp graden til hvert punkt, bruke grad-kant-setningen
  og Eulers setning for å avgjøre lukket/åpen Euler-vei, og resonnere om å legge til/fjerne en
  kant — den faste oppgave 10. **Ingen planaritet/algoritmer.**
- **Eksamensbelegg:** Sjanger K (23/23, 100 %), fast oppgave 10, alltid pakket som broer/dører.
  Grad-kant-setningen + Euler-veier; INGEN planaritet, Eulers formel, $K_5$, spenntre, Hamilton
  eller grafalgoritmer (analysen funn 4). Prioritet: perfekt. Sjangre: K.
- **Forkunnskaper/kryssbok:** kap. 11.1 (graf-representasjon). `collapsible`
  **Symbol- og formelliste:** grad $\deg(v)$, grad-kant-setningen, åpen/lukket Euler-vei,
  Eulers setning (i vedlegget).
- **Innholdskontrakt (flashcard-kilde):** **urettet graf** (punkter/kanter), **grad** $\deg(v)$;
  **grad-kant-setningen** $\sum_v\deg(v)=2|E|$ (gradsummen er partall — #9); **oddetallspunkt/
  partallspunkt**; **lukket Euler-vei** (finnes hviss alle grader partall og grafen sammenhengende);
  **åpen Euler-vei** (finnes hviss nøyaktig to oddetallspunkter); ≥4 oddetallspunkter → ingen
  Euler-vei (#8); å legge til/fjerne én kant endrer pariteten til **to** punkter.
- **Metode/oppskrift:** (1) tegn/modeller grafen (rom/områder = punkter, dører/broer = kanter);
  (2) skriv graden til hvert punkt; (3) tell oddetallspunktene; (4) bruk Eulers kriterium
  (0 → lukket, 2 → åpen, ellers ingen); (5) angi en konkret vei; (6) for endring: se hvordan
  kanten flytter pariteten til to punkter.
- **Typiske feil:** #8 (tro at åpen vei alltid finnes; feil paritetsregel); #9 (umulig gradfølge
  med odde gradsum); glemme sammenhengskravet; #1 (konkludere uten å vise gradene).
- **Modellsvar:** «Et hus har fem rom forbundet med dører (gitt plan): modeller som graf, finn
  gradene, avgjør om det finnes en åpen eller lukket Euler-vei, og hvordan svaret endres om én
  dør mures igjen» (nyskrevet plan; sjanger K). *(Parametersjekk paritetsregelen før konklusjon
  påstås ubetinget.)*
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 12.2: Grafteori-drill — Euler-veier og pariteter
**id:** `oslomet-diskretmatte-12-2` · **number:** 12.2 · **estimatedMinutes:** 45 · **prerequisites:** `oslomet-diskretmatte-12-1`

- **Kapitteltype:** drillkapittel (DNA B) (perfekt).
- **Description:** Mengdetrening på Euler-oppgaven med varianter: broer, dører, «legg til/fjern
  kant», umulig gradfølge, angi konkret vei.
- **Eksamensbelegg:** Sjanger K (varianter fra 23/23-arkivet). Prioritet: perfekt. Sjangre: K.
- **Forkunnskaper/kryssbok:** kap. 12.1. `collapsible` **Symbol- og formelliste:** grad-kant-
  setningen + Eulers kriterium i kortform.
- **Løsningsoppskrift:** (1) modeller; (2) grader; (3) tell oddetallspunkter; (4) Eulers
  kriterium; (5) konkret vei; (6) endringsanalyse. Avslutt med begrunnelsesmalen.
- **Gjennomregnet eksamenscase:** bro-oppgave med «hvordan endres svaret om en bro legges til»,
  med sensor-margnotater (#8-fellen).
- **Typiske feil:** #8 (paritet); #9 (umulig gradfølge); glemme sammenheng.
- **Kvote:** 16 quiz / 12 flashcards (drillkapittel).

**Prøve-kvote Del 12:** 4 prøver (12.A grad + grad-kant-setning + umulig gradfølge · 12.B
lukket Euler-vei (alle partall) · 12.C åpen Euler-vei (to oddetall) + konkret vei · 12.D
legg til/fjern kant-analyse på eksamensnivå).

### Del 13 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 13.1: Sjangerspill, løsningsoppskrifter A–L og kald bank
**id:** `oslomet-diskretmatte-13-1` · **number:** 13.1 · **estimatedMinutes:** 55 · **prerequisites:** `oslomet-diskretmatte-12-2`

- **Kapitteltype:** eksamenstrening (sjangeroversikt + kald bank).
- **Description:** Samlet én-linjes løsningsoppskrift for hver sjanger A–L (sjanger → oppskrift →
  tidsbudsjett → vanligste feil), pluss en **kald bank** med 8–10 oppgaver med uvante vinklinger
  UTEN hint (kun momentliste-fasit) — for å strekke toppleseren og trene 3-timers prioritering.
- **Eksamensbelegg:** Metakapittel (alle sjangre A–L). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler (1–12). `collapsible` **Samlet oppslagskort:**
  sjangertabell A–L (sjanger → oppskrift → tidsbudsjett → typisk feil #) — bokas printbare
  oversikt (README «Samlet oppslagskort»).
- **Innholdskontrakt:** løsningsoppskriftene fra hvert temakapittel destillert til én linje;
  **tidsprioritering for 3-timers form** (hvilke pilarer først); **kald bank** (blandede,
  uvante kombinasjoner: differensligning + induksjon; relasjon som også er graf; tallsystem +
  kongruens) — merket «kald: ingen hint, momentliste-fasit».
- **Oppgavesjangre:** kald bank × 8–10 (alle sjangre, uvante vinklinger), + 4–6 «hvilken sjanger
  er dette?»-radaroppgaver.
- **Typiske feil:** velge feil sjanger under tidspress; glemme begrunnelse under stress (#1);
  bruke for lang tid på én oppgave (flat vekting → hopp videre).
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 13.2: Øvingseksamen 1 (3-timers utvalg, med A-fasit)
**id:** `oslomet-diskretmatte-13-2` · **number:** 13.2 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-diskretmatte-13-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Komplett nyskrevet øvingssett dimensjonert for dagens 3-timers form (utvalg av
  pilarene: differensligning, Euler-graf, relasjon, mengde/inkl-ekskl, tallsystem/to-komplement,
  kombinatorikk), med A-fasit skrevet med full mellomregning + begrunnelse slik sensor vil se
  den. Flat vekting. Selvdiagnose-sjekkliste (☐) etter fasiten.
- **Eksamensbelegg:** Speiler temafordelingen (§2), et «typisk» 3-timers utvalg. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. `collapsible` per oppgave med A-fasit +
  `tip`-notat om delvekting.
- **Innholdskontrakt:** 6–7 oppgaver (ett utvalg av sjangrene), flat vekting, «alt skal
  begrunnes»; fasit med full mellomregning; selvdiagnose-sjekkliste; markert «kan trygt deles —
  én oppgave per økt».
- **Typiske feil:** samlefeilene #1–#12 fra hver sjanger, oppsummert i fasit-kommentarene.
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 13.3: Øvingseksamen 2 (bredt utvalg, med A-fasit)
**id:** `oslomet-diskretmatte-13-3` · **number:** 13.3 · **estimatedMinutes:** 60 · **prerequisites:** `oslomet-diskretmatte-13-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Andre komplette nyskrevne sett med et bredere/annet utvalg av sjangrene (bl.a.
  funksjoner, tallteori, matriser, logikk), for å trene bredden i den flate vektingen. A-fasit +
  selvdiagnose.
- **Eksamensbelegg:** Speiler temafordelingen (§2), komplementært utvalg til 13.2. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. `collapsible` per oppgave med A-fasit +
  `tip`-notat om delvekting.
- **Innholdskontrakt:** 6–7 oppgaver (annet utvalg enn 13.2), flat vekting; fasit med full
  mellomregning; selvdiagnose-sjekkliste; markert «én oppgave per økt».
- **Typiske feil:** samlefeilene #1–#12, oppsummert i fasit-kommentarene.
- **Kvote:** 8 quiz / 8 flashcards.

**Prøve-kvote Del 13:** de 2 øvingseksamenene ER prøvene (komplette sett med fasit); Del 0/13
dekkes av disse. Sjangerspillet (13.1) leverer i tillegg den kalde banken.

---

## 4. Prøve-plan (temaprøver)

Hver temadel (1–12) har **4 temaprøver** (kortere sett innen delens sjanger, med fasit på
eksamensnivå), jf. listene «Prøve-kvote Del N» over. Del 0 dekkes av øvingseksamenene; Del 13
leverer de 2 komplette øvingseksamenene (som ER prøvene der) + kald bank.

- **Temaprøver totalt:** 4 × 12 temadeler = **48** (≥4 per temadel ✓)
- **Øvingseksamener:** **2** komplette sett (Del 13), dimensjonert for 3-timers form.

Hver øvingseksamen deklareres som «1 sett à ~60 min lesetid (håndregning ≈ ×1,5) — kan trygt
deles over flere økter». Alle flervalg i statiske prøve-collapsibles har **stokkede
fasit-bokstaver** (README-krav); riktig/galt-lister varierer fasiten (aldri «alle riktig»).

---

## 5. Kvotesammendrag (summeringskontroll — kontrollregnet per kapittel)

### Quiz per kapittel

| Kap | Quiz | | Kap | Quiz |
|---|---|---|---|---|
| 0.1 | 12 | | 8.1 | 20 |
| 0.2 | 12 | | 8.2 | 18 |
| 1.1 | 18 | | 9.1 | 22 |
| 1.2 | 14 | | 9.2 | 18 |
| 2.1 | 18 | | 10.1 | 18 |
| 2.2 | 16 | | 11.1 | 20 |
| 3.1 | 20 | | 11.2 | 16 |
| 3.2 | 16 | | 12.1 | 20 |
| 4.1 | 18 | | 12.2 | 16 |
| 4.2 | 18 | | 13.1 | 16 |
| 5.1 | 20 | | 13.2 | 8 |
| 5.2 | 16 | | 13.3 | 8 |
| 6.1 | 20 | | | |
| 7.1 | 18 | | | |

**Delsummer (kontrollregnet):**
- Del 0: 12+12 = **24**
- Del 1: 18+14 = **32**
- Del 2: 18+16 = **34**
- Del 3: 20+16 = **36**
- Del 4: 18+18 = **36**
- Del 5: 20+16 = **36**
- Del 6: **20**
- Del 7: **18**
- Del 8: 20+18 = **38**
- Del 9: 22+18 = **40**
- Del 10: **18**
- Del 11: 20+16 = **36**
- Del 12: 20+16 = **36**
- Del 13: 16+8+8 = **32**

**Quiz totalt (rå):** 24+32+34+36+36+36+20+18+38+40+18+36+36+32 = **436**

*(kontroll: 24+32=56; +34=90; +36=126; +36=162; +36=198; +20=218; +18=236; +38=274;
+40=314; +18=332; +36=368; +36=404; +32=436)* — **436**.

> Rå-summen gir **436 quiz**, som er **64 under** gulvet (≥500). Justering (dokumentert —
> forfatteren bruker de justerte «etter»-tallene): de seks 100 %-pilarene og de høyfrekvente
> kapitlene løftes med **+88 quiz** (trygg margin over gulvet), fordelt slik at hvert løftet
> kapittel fortsatt er balansert:

| Kapittel | Quiz før | Quiz etter | Δ |
|---|---|---|---|
| 1.1 (utsagnslogikk) | 18 | 22 | +4 |
| 2.1 (mengder/Venn) | 18 | 24 | +6 |
| 2.2 (inkl-ekskl) | 16 | 22 | +6 |
| 3.1 (matriser) | 20 | 26 | +6 |
| 3.2 (boolsk produkt) | 16 | 22 | +6 |
| 4.1 (tallsystemer) | 18 | 24 | +6 |
| 4.2 (to-komplement) | 18 | 24 | +6 |
| 5.1 (Euklid/gcd) | 20 | 26 | +6 |
| 6.1 (funksjoner) | 20 | 26 | +6 |
| 8.1 (kombinatorikk) | 20 | 26 | +6 |
| 8.2 (betinget telling) | 18 | 24 | +6 |
| 9.1 (differensligning) | 22 | 28 | +6 |
| 9.2 (diff-drill) | 18 | 24 | +6 |
| 11.1 (relasjoner) | 20 | 26 | +6 |
| 12.1 (grafteori) | 20 | 26 | +6 |

**Kontroll av Δ-kolonnen:** 4 + 6×14 = 4 + 84 = **88**.
**Justert quiz totalt:** 436 + 88 = **524**.

### Flashcards per kapittel

| Kap | FC | | Kap | FC |
|---|---|---|---|---|
| 0.1 | 8 | | 8.1 | 18 |
| 0.2 | 14 | | 8.2 | 16 |
| 1.1 | 18 | | 9.1 | 20 |
| 1.2 | 12 | | 9.2 | 12 |
| 2.1 | 18 | | 10.1 | 16 |
| 2.2 | 16 | | 11.1 | 20 |
| 3.1 | 18 | | 11.2 | 12 |
| 3.2 | 16 | | 12.1 | 20 |
| 4.1 | 18 | | 12.2 | 12 |
| 4.2 | 18 | | 13.1 | 10 |
| 5.1 | 18 | | 13.2 | 8 |
| 5.2 | 16 | | 13.3 | 8 |
| 6.1 | 18 | | | |
| 7.1 | 16 | | | |

**Delsummer (kontrollregnet):**
- Del 0: 8+14 = **22**
- Del 1: 18+12 = **30**
- Del 2: 18+16 = **34**
- Del 3: 18+16 = **34**
- Del 4: 18+18 = **36**
- Del 5: 18+16 = **34**
- Del 6: **18**
- Del 7: **16**
- Del 8: 18+16 = **34**
- Del 9: 20+12 = **32**
- Del 10: **16**
- Del 11: 20+12 = **32**
- Del 12: 20+12 = **32**
- Del 13: 10+8+8 = **26**

**Flashcards totalt (rå):** 22+30+34+34+36+34+18+16+34+32+16+32+32+26 = **396**

*(kontroll: 22+30=52; +34=86; +34=120; +36=156; +34=190; +18=208; +16=224; +34=258;
+32=290; +16=306; +32=338; +32=370; +26=396)* — **396**.

> Rå-summen gir **396 flashcards**, **104 under** gulvet (≥500). Justering (dokumentert —
> forfatteren bruker de justerte «etter»-tallene): de definisjonstunge pilarene og
> høyfrekvente kapitlene løftes med **+116 flashcards** til trygg margin over gulvet:

| Kapittel | FC før | FC etter | Δ |
|---|---|---|---|
| 1.1 (utsagnslogikk) | 18 | 26 | +8 |
| 2.1 (mengder/Venn) | 18 | 26 | +8 |
| 2.2 (inkl-ekskl) | 16 | 24 | +8 |
| 3.1 (matriser) | 18 | 26 | +8 |
| 3.2 (boolsk produkt) | 16 | 24 | +8 |
| 4.1 (tallsystemer) | 18 | 26 | +8 |
| 4.2 (to-komplement) | 18 | 26 | +8 |
| 5.1 (Euklid/gcd) | 18 | 26 | +8 |
| 6.1 (funksjoner) | 18 | 26 | +8 |
| 8.1 (kombinatorikk) | 18 | 26 | +8 |
| 9.1 (differensligning) | 20 | 28 | +8 |
| 11.1 (relasjoner) | 20 | 28 | +8 |
| 12.1 (grafteori) | 20 | 28 | +8 |
| 5.2 (kongruens) | 16 | 20 | +4 |
| 8.2 (betinget telling) | 16 | 20 | +4 |
| 10.1 (induksjon) | 16 | 20 | +4 |

**Kontroll av Δ-kolonnen:** 8×13 + 4×3 = 104 + 12 = **116**.
**Justert flashcards totalt:** 396 + 116 = **512**.

### Gate-tall (REELL per-kapittel-sum etter justering)

- **Quiz totalt: 524** (≥500 ✓) — rå 436 + justering 88.
- **Flashcards totalt: 512** (≥500 ✓) — rå 396 + justering 116.
- **Kapitler: 26** (≥15 ✓)
- **Temaprøver: 48** (4 per temadel × 12) + **2 øvingseksamener** (≥4 per temadel ✓)

> **Merk for byggeagenten:** de JUSTERTE per-kapittel-tallene (kolonnen «etter») er de
> bindende kvotene. Ved bygging brukes «etter»-verdien for hvert løftet kapittel; øvrige
> kapitler beholder tabellverdien over.

---

## 6. Opphavsrett og kildeforbehold

- Eksamensoppgaver og løsningsnotater fra arkivet brukes som **grunnlag** (mønstre,
  temavekting, vurderingskriterier), **aldri ordrett**. Alle oppgaver, tallcaser og
  modellbesvarelser er nyskrevne i samme sjanger — endre tall, kontekst og formuleringer
  (SUPPEPOSE → nyskrevet ord; broplan → nyskrevet plan; differensligning-koeffisienter → nye).
- Definisjoner, standardnotasjon og klassiske resultater (grad-kant-setningen, Eulers setning,
  divisjonsalgoritmen, karakteristisk polynom, binomialteoremet, inklusjon-eksklusjon) er
  allmenn faglig kunnskap og brukes fritt.
- **Kildeforbehold (Del 0):** analysen bygger på **23 tekstbaserte eksamenssett (2003–2015)** +
  skummede kompendiumavsnitt og obliger. Fasitfilene er skannede (uten tekstlag), så
  sensorlogikken er **utledet** av oppgaveformuleringene («alle svar skal begrunnes»),
  formelvedlegget og de tekstbaserte løsningsnotatene — merket `(verifiser)` der sluttet
  indirekte. Frekvensene er «per 2003–2015-arkivet»; **5t→3t-endringen** betyr at dagens sett
  bruker et utvalg — nye sett kan endre bildet.
- **Emnestatus** `(verifiser)`: DAPE1300 aktivt (10 sp), ekvivalent ITPE1300/FO019A/FO019I,
  DATS2300 bygger på det. Verifisert mot OsloMet 2026-07-11.

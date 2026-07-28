# Bokskjelett: ITD15020 Kalkulus (Høgskolen i Østfold, ingeniørmatematikk) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-regnefag.md`). Unntak: øvingseksamen-/prøve-/modell­besvarelses­kapitler
> følger sin egen arketype (komplett sett først, løsninger i collapsibles).
> Kvotene og innholdskontraktene i dette skjelettet er uendret — løkka styrer
> REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (HiØ-arkivet for ITD15020: **12 lesbare eksamenssett des 2020 – mai 2026** +
> **6 sensorveiledninger 2022–2025**, alle lest grundig; det utdelte formelheftet,
> 12 ukentlige øvingssett H2024 og forgjengerarkivet ITD15013/Ingeniørmatematikk 2
> skummet for pensum- og kildekritikk). Arketype: **DNA-regnefag** (`DNA-regnefag.md`)
> — kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke
> her. Format-forbilder (v3): `../kj1020/SKJELETT.md` og søsteremnet
> `../hio-diskretmatte/SKJELETT.md` (samme institusjon, samme faglærer Christian F.
> Heide, samme hjelpemiddel- og vurderingsregime). Tema-overlapp med ingeniørmatte:
> `../oslomet-mat1000/SKJELETT.md` (OsloMet Matematikk 1000 — deler DE-, integrasjons-
> og derivasjonskjernen, se §2 «Søster-avgrensning»).
>
> **Emnestatus (verifisert 11. juli 2026 mot HiØs emneside for høst 2025):**
> ITD15020 er **AKTIVT** — emneside publisert for høst 2025
> (`hiof.no/studier/emner/iio/itk/2025/host/itd15020.html`): 10 studiepoeng,
> individuell skriftlig skoleeksamen 4 timer, karakterskala A–F, faglærer
> Christian Fredrik Heide. Obligatorisk i bachelor i ingeniørfag – data og i
> informatikk (design og utvikling av IT-systemer). Kravene stemmer eksakt med
> analysen. Emnet undervises i høst med ordinær eksamen i november/desember og
> «ny og utsatt» (kontinuasjon) i februar samt utsatt våreksamen i mai/juni.
>
> **Viktigste kalibrering:** ITD15020 er et **utregnings-/metodefag, IKKE et
> bevisfag** — anvendt ingeniørmatematikk der eksamen tester **bruk av
> standardmetoder**, ikke bevis (ε-δ, MVT-konstruksjon: 0/12). Fire søyler bærer
> praktisk talt hvert sett: **1.- og 2.-ordens differensiallikninger** (den tyngste
> blokken, 100 % + 100 %), **integrasjonsteknikk** (100 %), **derivasjon med
> implisitt derivasjon og tangentlinje** (83 %) og **grenseverdier med l'Hôpital**
> (75 %). Et satellitt-repertoar roterer rundt disse: vektorer i R³ (42 %),
> partiellderiverte (50 %), Taylorpolynom av grad 2 (42 %) og omdreiningsvolum
> (42 %). Et **formelhefte deles ut** (pluss to A4-ark egne notater og utdelt
> kalkulator) — eksamen tester derfor **gjenkjenning og korrekt anvendelse**, ikke
> pugging. To pensum-temaer er *sovende* på eksamen (dekkes, men markeres lavt):
> **komplekse tall** (0/12, kun som DE-røtter) og **numeriske metoder** (Newton 1/12,
> numerisk integrasjon 0/12). Lineær algebra og Laplace hører til forgjengeren
> ITD15013 og skal **ikke** tas inn (flyttet til eget HiØ-emne ITD27021).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `hio-ingmatte` (internt alias; emnekode ITD15020) |
| Tittel | **ITD15020 Kalkulus (Høgskolen i Østfold) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Høgskolen i Østfold. Visningsnavn i `institusjoner.ts`: «ITD15020 Kalkulus». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — utregnings-/metodevariant (jevn 10-poengsvekting per oppgave/delspørsmål, minimal bevistyngde). |
| Antall kapitler | **30** (Del 0: 2 · temadeler 1–11: 25 · eksamenstrening Del 12: 3) |
| Estimert totaltid | **~1 720 min ≈ 29 timer** (per kapittel under) |
| Quiz totalt | **506** (REELL per-kapittel-sum; krav ≥500 — se kvotesammendrag §5) |
| Flashcards totalt | **500** (REELL per-kapittel-sum; krav ≥500 — se §5) |

**Pitch (ett avsnitt):** ITD15020 er blant de mest forutsigbare emnene i
høyskolearkivet: **én faglærer** (Christian F. Heide) har satt hvert eneste sett fra
desember 2020 til mai 2026, og innholdsmenyen er slående stabil. 4 timers skriftlig
skoleeksamen, **8–10 jevnt vektede oppgaver** (tidligere hel-oppgave-vekting à 10 p,
fra 2025 vekting per *delspørsmål* à 10 p). Hjelpemidler: **to A4-ark egne notater
(fire sider) + utdelt formelhefte + utdelt kalkulator** — men kalkulator er
*forbudt* for l'Hôpital-oppgavene, der metoden skal vises. Faget belønner **synlig
mellomregning med korrekt metodevalg**, ikke bare svaret: fra 2025 er kravet
skjerpet til at «et svar uten utregning eller begrunnelse som hovedregel ikke
godkjennes». Fire søyler er nær garantert hvert sett — og de to tyngste er
differensiallikningene: **2.-ordens DE med konstante koeffisienter** (100 %),
**1.-ordens DE** (100 %), **integrasjonsteknikk** (100 %) og **implisitt derivasjon
+ tangentlinje** (83 %), med **l'Hôpital** (75 %) tett bak. Boka er bygd baklengs
fra det sensor faktisk premierer: riktig metodevalg og fullført utregning på de
mekaniske temaene, **«+ C» på ubestemte integraler** (eksplisitt poenggivende),
korrekt partikulæransatz med resonanshåndtering i 2.-ordens DE, og riktig aksemetode
i omdreiningsvolum. Prioriteringen styrer *omfanget*, ikke *om* et tema er med —
nesten hele bredden testes hvert sett.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Utregningsfag, ikke bevisfag.** Nesten hver deloppgave ber om et konkret
   *utregnet svar* med vist framgangsmåte («løs differensiallikningen», «regn ut
   integralet», «finn tangentlinjen», «bruk l'Hôpital»). Bevis i streng forstand
   forekommer ikke (0/12). Alle eksempler og løsningsforslag skrives som fullt vist
   mellomregning — men uten unødig bevisformalisme.
2. **Alle svar skal begrunnes — også der oppgaven ikke sier det.** Instruksen «husk
   å vise utregninger» står på hvert sett, skjerpet fra 2025 til «et svar uten
   utregning eller begrunnelse vil som hovedregel ikke godkjennes som et riktig
   svar». Et bart tall gir lite; med forklaring får man delpoeng ved feil. Egen
   `warning` om dette i de sentrale kapitlene.
3. **«+ C» er poenggivende — glem den aldri.** Sensorveiledningene trekker
   **inntil 1 poeng** for manglende integrasjonskonstant på ubestemte integraler.
   Alle ubestemte-integral-fasiter i boka skriver «+ C» eksplisitt, og en egen
   `warning` (feilkode #1) minner om det i integrasjonskapitlene.
4. **Poengene er jevnt fordelt.** «Ved sensuren teller hver oppgave like mye» (fra
   2025: hvert *delspørsmål* likt). Der en oppgave har a/b deles poengene ofte likt
   («inntil 5 p på hvert delspørsmål»). Bredde slår dybde — bestått (E) ligger på
   39 %, C-båndet er bredt (60–77 %). DE-oppgaver poengsettes trinnvis: delvis
   uttelling for korrekt $y_h$ selv om $y_p$ er feil.
5. **Metodefrihet der det er naturlig.** Sensorveiledningene godtar alternative,
   korrekt gjennomførte veier (f.eks. substitusjon vs. delvis integrasjon), men
   honorerer effektiv metode. Boka sier dette der det gjelder.
6. **Notasjon (emnets faste apparat):** Derivasjon $f'(x)$, $f''(x)$, $\frac{dy}{dx}$;
   partiellderiverte $f_x$, $f_y$, $f_{xx}$, $f_{xy}$; differensiallikninger med
   $y'$, $y''$ og initialkrav $y(0)$, $y'(0)$; grenser $\lim_{x\to a}$ med markering
   av ubestemt form $[0/0]$, $[\infty/\infty]$; Taylor $P_2(x)$ om $a=0$; vektorer på
   både $a\mathbf{i}+b\mathbf{j}+c\mathbf{k}$- og $[a,b,c]$-form, skalarprodukt
   $\mathbf{u}\cdot\mathbf{v}$, kryssprodukt $\mathbf{u}\times\mathbf{v}$; vinkler
   oppgis i **både grader og radianer**; karakteristisk likning
   $\lambda^2+b\lambda+c=0$ med de tre rot-tilfellene. **Eksakte** (ikke desimale)
   svar der oppgaven ber om det. All matematikk i LaTeX (`$...$`).
7. **Formelheftet er utdelt — tren BRUK, ikke pugg.** Det utdelte heftet inneholder
   (1) en tabell over eksakte trigonometriske verdier for standardvinklene
   ($0, \pi/6, \pi/4, \pi/3, \pi/2$) og (2) Heides oppsummeringsark «Løsning av
   differensialligninger» (karakteristisk likning med alle tre rot-tilfeller,
   ubestemte koeffisienter med resonans-påminnelse, separabel metode, integrerende
   faktor). De to A4-arkene lar flittige studenter ha delbrøk-maler, integraltabell,
   Taylor-formelen og vektorformlene tilgjengelig. Boka legger vekt på **å velge
   riktig metode og gjennomføre den feilfritt**, ikke på memorering, og har en
   **notatark-mal** (to A4-ark) som konkret bilag i Del 0. Flashcards drilles på
   *forståelse og valg* (hvilken teknikk/hvilket rot-tilfelle), ikke ren gjengivelse
   av utdelte tabeller.
8. **Ærlighet om format og arkiv.** (a) **Én faglærer, ferskt arkiv** (Heide,
   des 2020 – mai 2026) → uvanlig høy prognosetillit; men frekvensene formidles
   alltid med kildenote og forbehold om at nye sett kan endre bildet. (b) **Sovende
   pensum-temaer** (komplekse tall 0/12, numerisk integrasjon 0/12, Newton 1/12,
   rekke 1/12) dekkes fordi de *står* i pensum og *kan* aktiveres, men merkes
   eksplisitt som lavfrekvente. (c) **Forgjenger-avgrensning:** lineær algebra
   (matriser/determinant/egenverdier) og Laplace-transform hørte til ITD15013 /
   Ingeniørmatematikk 2 og ligger nå i eget HiØ-emne — de skal **ikke** inn i boka.

### 1.6 Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Forklares i klarspråk ved første bruk i Del 0; aldri kald i `competenceGoals`.

**A** 2.-ordens DE, konstante koeffisienter (homogen + inhomogen med ubestemte
koeffisienter; tre rot-tilfeller; resonans) · **B** 1.-ordens DE (separabel eller
lineær m/ integrerende faktor, ofte initialverdiproblem/IVP) · **C** Integrasjons­teknikk
(ledd-for-ledd, substitusjon, delvis, delbrøk, trig) · **D** Implisitt derivasjon +
tangentlinje · **E** Grenseverdi med l'Hôpital (metoden vist, ikke kalkulator) ·
**F** Areal under/mellom grafer (bestemt integral) · **G** Partiellderiverte av
$f(x,y)$ (1. og 2. orden; lineær approksimasjon; kritisk punkt) · **H** Taylorpolynom
av grad 2 om $x=0$ · **I** Vektorer i R³ (vinkel i grader+radianer + kryssprodukt) ·
**J** Omdreiningsvolum (riktig aksemetode; y-aksen som hovedtilfelle) · **K**
Logaritmisk derivasjon ($f(x)^{g(x)}$) · **L** Funksjonstransformasjon (translasjon
av graf) · **M** Småsjangre: trigonometrisk likning, grafgjenkjenning ($f/f'/f''$),
kurvedrøfting (invers/definisjonsmengde/asymptoter/symmetri) · **N** Lavfrekvent
pensum: Newtons metode, uendelig geometrisk rekke, uegentlig integral, optimering,
anvendt DE-modellering, komplekse tall.

### 1.7 Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Fast prosentbasert karakterskala** (identisk i alle sensorveiledninger):
   **F** 0–38 %, **E** 39–49 %, **D** 50–59 %, **C** 60–77 %, **B** 78–89 %,
   **A** 90–100 %. Bredt C-bånd; bestått (E) ved 39 %. Sensor kan justere ut fra
   settets vanskelighetsgrad, men prosentscoren er utgangspunktet.
2. **Begrunnelse er obligatorisk** (skjerpet fra 2025 — bar fasit gir i praksis
   null, også ved riktig tall).
3. **Integrasjonskonstant er poenggivende** — inntil 1 poeng trekkes for manglende
   «+ C».
4. **DE-oppgaver poengsettes trinnvis** — f.eks. inntil 5 p for $y_h$ + inntil 5 p
   for hele den inhomogene løsningen; delvis uttelling for korrekt $y_h$ selv om
   $y_p$ er feil.
5. **l'Hôpital-metoden må vises** — et kalkulatorsvar uten utregning gir ikke
   uttelling der oppgaven forbyr kalkulator.
6. **Effektiv metode honoreres, men alternative korrekte veier godtas.**

### 1.8 Feilkoder (fra analysen §5 — brukes i «Typiske feil»-blokkene)

Glosses ved FØRSTE bruk i HVERT kapittel (README-krav — «(#1 — glemt + C)»).

**#1** Manglende integrasjonskonstant «+ C» på ubestemte integraler (eksplisitt
poengtrekk). · **#2** Glemte substitusjonsgrenser (variabelbytte i bestemt integral
uten å oppdatere grensene, eller glemt indre derivert). · **#3** 2.-ordens DE: feil
partikulæransatz — glemmer resonans/oppgradering når høyresiden løser den homogene
likningen; feil form ved dobbeltrot eller komplekst rotpar. · **#4** Feil aksemetode
for omdreiningsvolum (skiveformel om y-aksen eller skallformel om x-aksen); tegner
ikke området først. · **#5** l'Hôpital brukt feil — deriverer brøken som kvotient i
stedet for teller og nevner hver for seg, eller stopper før den ubestemte formen er
borte. · **#6** Delbrøk-oppsett feil — feil ansatz for gjentatt faktor $(x-a)^2$
(må ha både $A/(x-a)$ og $B/(x-a)^2$) eller for $(x^2+1)$-nevner (må ha
$(Bx+C)/(x^2+1)$). · **#7** Implisitt derivasjon: glemt produkt-/kjerneregel på
blandede ledd, eller innsetter punktet før derivasjon. · **#8** Vektor: svarer bare
i grader når både grader og radianer kreves; fortegns-/komponentfeil i
kryssprodukt­determinanten. · **#9** Partiellderivert: forveksler $f_{xy}$ eller
glemmer en av 2.-ordens-derivertene. · **#10** Taylor: regnefeil i $f''(0)$ eller
glemt $\tfrac{1}{2!}$-faktoren på annengradsleddet. · **#11** 1.-ordens lineær DE:
feil integrerende faktor — glemmer å bringe likningen på standardform (koeffisient 1
foran $y'$) før $e^{\int p\,dx}$ regnes ut. · **#12** Ubegrunnet svar (spesielt
farlig fra 2025).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), ikke frekvens:
funksjoner/grenser før derivasjon; derivasjon før integrasjon; integrasjonsteknikk
før anvendt integrasjon (areal/volum) og før differensiallikninger (som *er*
integrasjon i praksis); 1.-ordens DE før 2.-ordens; vektorer og partiellderiverte som
selvstendige satellitt-deler; Taylor etter derivasjon; kurvedrøfting og lavfrekvent
pensum til slutt; eksamenstrening binder alt sammen. **Frekvensen styrer omfanget:**
de fire søylene (1.-/2.-ordens DE, integrasjon, derivasjon/tangent) og l'Hôpital får
hver sin del med teori- **og** drillkapittel og høyest kvote; satellittene (vektorer,
partiellderiverte, Taylor, volum) får ett solid kapittel hver; lavfrekvent stoff
(småsjangre, komplekse tall, numerikk) samles i kompakte kapitler.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og verktøykasse | 2 | perfekt (meta) | Formen (4 t, 8–10 jevnt vektede oppgaver, delspørsmålsvekting fra 2025, utdelt formelhefte+kalkulator), de fire søylene, temafrekvensene, sensorkravene, «+ C»-regelen og kildeforbeholdet må etableres FØR fagstoffet. Notatark-mal og formel-minimum-side. |
| 1 | Funksjoner, grenser og l'Hôpital | 3 | grunnlag + PERFEKT (l'Hôpital 75 %) | Definisjons-/verdimengde, standardgrenser og **l'Hôpital** (sjanger E, 9/12) med drillkapittel. Grunnlaget for derivasjon og Taylor. |
| 2 | Derivasjon: implisitt, logaritmisk og tangentlinje | 3 | PERFEKT (D 83 %) | Derivasjonsregler, **implisitt derivasjon + tangentlinje** (den mest stabile mellomstore sjangeren) og **logaritmisk derivasjon** (K, 25 %), med drillkapittel. |
| 3 | Integrasjonsteknikk | 3 | PERFEKT (C 100 %) | **Ledd-for-ledd, substitusjon, delvis, delbrøk** — 2–4 integraler per sett, med drillkapittel. «+ C» og grensebytte drilles til refleks. |
| 4 | Anvendt integrasjon: areal og omdreiningsvolum | 2 | KUNNE (F 50 %, J 42 %) | Areal under/mellom grafer og **omdreiningsvolum** (riktig aksemetode, y-aksen som hovedtilfelle). Pakker integralet inn i figur. |
| 5 | Differensiallikninger, 1. orden | 3 | PERFEKT (B 100 %) | **Separabel** og **lineær m/ integrerende faktor**, ofte IVP — minst én per sett — med drillkapittel. En av de to DE-ryggradene. |
| 6 | Differensiallikninger, 2. orden | 3 | PERFEKT (A 100 %) | **Homogen (tre rot-tilfeller)** + **inhomogen med ubestemte koeffisienter og resonans**, ofte a) homogen + b) inhomogen med samme venstreside — med drillkapittel. Fagets tyngste blokk. |
| 7 | Vektorer i R³ | 1 | KUNNE (I 42 %) | **Vinkel** (skalarprodukt → grader+radianer) + **kryssprodukt** (determinant-oppsett). Fast oppskrift, forutsigbar. |
| 8 | Flervariabel: partiellderiverte | 2 | KUNNE (G 50 %) | **Alle 1.- og 2.-ordens partiellderiverte** av $f(x,y)$; **lineær approksimasjon** og **kritisk punkt** som varianter. |
| 9 | Taylorpolynom | 1 | KUNNE (H 42 %) | **Taylorpolynom av grad 2 om $x=0$** — alltid grad 2, alltid om origo i arkivet. |
| 10 | Kurvedrøfting og småsjangre | 2 | KJENNE (L/M, 17–25 %) | **Funksjonstransformasjon** (25 %), **trigonometrisk likning** (17 %), **grafgjenkjenning $f/f'/f''$** (17 %), **kurvedrøfting** (invers/definisjonsmengde/asymptoter/symmetri, 17 %). |
| 11 | Lavfrekvent pensum (dekk, vektlegg lavt) | 2 | KJENNE (N, 0–8 %) | **Newtons metode** (8 %), **uendelig geometrisk rekke** (8 %), **uegentlig integral** (8 %), **optimering** (8 %), **anvendt DE-modellering** (8 %), og **komplekse tall** (0/12 men i pensum — dekkes kort med forbehold; komplekse røtter trengs uansett i 2.-ordens DE). |
| 12 | Eksamenstrening | 3 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–N) + kald bank + **2 komplette øvingseksamener** med A-fasit, som speiler temafordelingen §2. |

Rasjonale: de fire 83–100 %-søylene (1.-/2.-ordens DE, integrasjon, derivasjon/
tangent) og l'Hôpital får hver sin del med drillkapittel og høyest kvote; satellittene
får ett solid kapittel hver; lavfrekvent stoff får kompakte kapitler med eksplisitt
forbehold. **Nesten hele bredden testes hvert sett** — prioriteringen styrer dybde og
drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og verktøykasse |
| 1 | Funksjoner, grenser og l'Hôpital |
| 2 | Derivasjon: implisitt, logaritmisk og tangentlinje |
| 3 | Integrasjonsteknikk |
| 4 | Anvendt integrasjon: areal og omdreiningsvolum |
| 5 | Differensiallikninger, 1. orden |
| 6 | Differensiallikninger, 2. orden |
| 7 | Vektorer i R³ |
| 8 | Flervariabel: partiellderiverte |
| 9 | Taylorpolynom |
| 10 | Kurvedrøfting og småsjangre |
| 11 | Lavfrekvent pensum |
| 12 | Eksamenstrening |

### Søster-avgrensning (mot oslomet-mat1000)

ITD15020 og OsloMet Matematikk 1000 deler en stor **kalkulus-/DE-kjerne** som kan
gjenbrukes tungt: 1.-ordens DE (separabel + integrerende faktor), 2.-ordens DE
(konstante koeffisienter, alle tre rot-tilfeller, ubestemte koeffisienter),
integrasjonsteknikk (substitusjon/delvis/delbrøk/trig), derivasjon/implisitt/tangent,
grenser/l'Hôpital, Taylorpolynom og omdreiningsvolum (y-aksen som hovedtilfelle).
**Unikt for HiØ (bygg egne kapitler):** vektorer i R³ (vinkel + kryssprodukt) og
partiellderiverte av $f(x,y)$ som faste egne oppgaver. **IKKE ta inn fra OsloMet-boka:**
lineær algebra (matriser/determinant/egenverdier), komplekse tall som *eksamenstema*
(0/12 ved HiØ — kun kort pensumdekning i Del 11), og MATLAB/numeriske metoder som
eksamenssjanger (Newton bare 1/12, numerisk integrasjon 0/12). HiØ gir dessuten DE-ene
stort sett ferdig oppstilt (anvendt DE-modellering bare 1/12), mens OsloMet ofte krever
utledning fra tekst — boka vektlegger derfor *løsning* av gitte DE-er.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (telte belegg fra analysen §2) +
> sjangerkoder (A–N) + prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta).
> **Innholdskontrakt** = definisjoner/teoremer/metoder som SKAL med (med emnets
> notasjon), utledninger som kreves aktivt vs. kun bruk. **Kvote** = quiz/flashcards.
> Kryssbok-lenkene peker på eksisterende matte-kapitler (R1/R2/1T) `(verifiser lenke)`
> der usikker. Matematiske «alltid/entydig/fortegn»-påstander parametersjekkes numerisk
> FØR de skrives ubetinget (DNA-regnefag «Matematisk sannhetskontroll»); usikre
> faktapåstander merkes `(verifiser)`.

### Del 0 — Eksamenskart og verktøykasse *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes ITD15020
**id:** `hio-ingmatte-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig skoleeksamen, 8–10 jevnt vektede
  oppgaver, delspørsmålsvekting fra 2025, utdelt formelhefte + to A4-ark + utdelt
  kalkulator, l'Hôpital-kalkulatorforbudet), de fire søylene + satellittene,
  temafrekvensene, sensorkravene, karakterskalaen, «+ C»-regelen og kildeforbeholdet
  — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet des 2020 – mai 2026). Skal formidle:
  (a) **formen** — 4 t skriftlig, 8–10 oppgaver, hel-oppgave-vekting à 10 p t.o.m.
  2024 og *delspørsmåls*-vekting à 10 p fra 2025, ALT skal begrunnes med utregning;
  (b) **de fire søylene** — 2.-ordens DE (100 %), 1.-ordens DE (100 %),
  integrasjonsteknikk (100 %), implisitt derivasjon + tangent (83 %) — og l'Hôpital
  (75 %); (c) **temafrekvenstabellen** (av 12 sett) — se §2/analysen §2; (d)
  **sensorkravene** (§1.7) inkl. karakterskalaen (F 0–38, E 39–49, D 50–59, C 60–77,
  B 78–89, A 90–100 %) og «+ C»-trekket; (e) **kildeforbeholdet** — 12 lesbare sett +
  6 sensorveiledninger, én faglærer (Heide), ferskt arkiv → høy prognosetillit, men
  nye sett kan endre bildet; (f) **sovende pensum-temaer** (komplekse tall 0/12,
  numerisk integrasjon 0/12, Newton 1/12, rekke 1/12); (g) **forgjenger-avgrensningen**
  (ITD15013/Ingeniørmatematikk 2 hadde lineær algebra + Laplace + komplekse tall —
  ikke i dagens Kalkulus, flyttet til ITD27021). Prioritet: perfekt (meta).
- **Innholdskontrakt:** «Slik leser du denne boka»-boks (type `text`/`tip`, IKKE
  `definition`) som forklarer karakterskalaen (hva C-/A-nivå betyr; C er en god og
  vanlig karakter, særlig tidlig i studiet), sjangerkodene A–N i klarspråk, og at
  typiske feil har et samlet register (#1–#12); den skal ramme inn tunge symboler
  («du trenger ikke forstå $\lambda^2+b\lambda+c=0$ ennå — det forklares i Del 6»).
  **Del 0-pakken** (README): «Lite tid?»-boks (3–5-dagers hurtigrute med
  kapittelrekkefølge + timeanslag, gjøre- vs. lesetid ×1,5), kildenote for
  frekvens-empirien (12 sett des 2020 – mai 2026 + 6 sensorveiledninger),
  prosedyre-/sjangeroversiktskort på ÉN side (sjanger → én-linjes oppskrift →
  tidsbudsjett → vanligste feil), deltidsrute (10–12 uker à ~8 t/uke med
  øvingseksamener fordelt), «lese mye, skrive lite»-boks (+ minst én øvingseksamen for
  hånd på tid). Prognosen for neste sett: nesten sikkert minst én 1.-ordens DE, minst
  én 2.-ordens DE (typisk a) homogen + b) inhomogen), 2–4 integraler, én implisitt
  derivasjon + tangent, én l'Hôpital; meget sannsynlig ett vektorinnslag, én
  partiellderivert, ett Taylorpolynom grad 2, ett omdreiningsvolum om y-aksen. Ingen
  forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  4-timers mal med ~9 oppgaver — sett opp tidsbudsjett og rekkefølge» og «avgjør av en
  oppgavetekst om den forbyr kalkulator (l'Hôpital) eller ikke».
- **Typiske feil:** Metafeilene: droppe begrunnelsen/mellomregningen (sensorkrav 2,
  #12); glemme «+ C» (#1); tro at kalkulator er tillatt på l'Hôpital; vente lineær
  algebra eller Laplace (hører ikke til dagens emne).
- **Kvote:** 12 quiz / 8 flashcards (formfakta, de fire søylene, temafrekvens,
  sensorkrav, karakterskala, sjangerkodene, «+ C»-regelen, kildeforbeholdet).

#### Kapittel 0.2: Verktøykassen — formelhefte, notatark og regnehåndverk
**id:** `hio-ingmatte-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-0-1`

- **Kapitteltype:** verktøy-/håndverkskapittel (meta).
- **Description:** Hva det utdelte formelheftet inneholder og forutsetter, hvordan man
  bygger et godt notatark (to A4-ark) som eksplisitt strategi, og de regnehåndverks-
  vanene som gir poeng på hver oppgave («+ C», grensebytte ved substitusjon,
  eksakte svar, vinkler i grader OG radianer).
- **Eksamensbelegg:** Gjennomgående (sensorkrav 2, 3, 5 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; forutsetter R1/R2-derivasjon og
  integrasjon-grunnlag: [Derivasjon](/r1/r1-3-1) `(verifiser lenke)`,
  [Integrasjon](/r2/r2-4-1) `(verifiser lenke)`. `collapsible` **Symbol- og
  formelliste:** hva formelheftet gir (trig-verdier for standardvinkler; DE-
  oppsummeringsarket) vs. hva du selv må ta med på notatarket (delbrøk-maler,
  integraltabell, Taylor-formel, vektorformler).
- **Innholdskontrakt (flashcard-kilde):** **formelheftets innhold** — (1) eksakt
  trig-verditabell for $0, \pi/6, \pi/4, \pi/3, \pi/2$; (2) Heides DE-ark
  (karakteristisk likning + tre rot-tilfeller, ubestemte koeffisienter m/ resonans,
  separabel, integrerende faktor). **Notatark-mal (bilag):** forslag til hva som bør
  stå på de to A4-arkene — standardintegraler, delbrøk-ansatzer for
  $(x-a)(x-b)$/$(x-a)^2$/$(x^2+1)$, delvis-integrasjon-mal ($xe^x$, $x\sin x$),
  Taylor-formelen $P_2(x)=f(0)+f'(0)x+\tfrac{f''(0)}{2}x^2$, vektorformlene
  ($\cos\theta=\tfrac{\mathbf{u}\cdot\mathbf{v}}{|\mathbf{u}||\mathbf{v}|}$,
  kryssprodukt-determinant), omdreiningsvolum-formlene ($V=2\pi\int x f(x)\,dx$ om
  y-aksen, $V=\pi\int f(x)^2\,dx$ om x-aksen). **Regnehåndverksvaner:** alltid «+ C»
  på ubestemte integraler (#1); oppdater grensene ved substitusjon i bestemt integral
  (#2); oppgi vinkler i BÅDE grader og radianer (#8); gi eksakte svar der det bes om
  det; vis alltid mellomregning (#12).
- **Innholdskontrakt (må vises):** det faste oppsettet for en DE-løsning (identifiser
  type → velg metode fra formelarket → gjennomfør → sett inn initialkrav) og for et
  integral (velg teknikk → gjennomfør → «+ C» / oppdater grenser) — som studentens
  faste sjekkrutine.
- **Typiske feil:** #1 (glemt + C), #2 (glemte substitusjonsgrenser), #8 (kun grader),
  #12 (ubegrunnet svar); i tillegg: å tro at formelheftet gir *alle* integraler
  (integraltabellen må du selv ta med på notatarket).
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Funksjoner, grenser og l'Hôpital *(prioritet: GRUNNLAG + PERFEKT for l'Hôpital)*

#### Kapittel 1.1: Funksjoner, definisjons- og verdimengde
**id:** `hio-ingmatte-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-0-2`

- **Kapitteltype:** grunnlagskapittel.
- **Description:** Funksjonsbegrepet, definisjons- og verdimengde, sammensatte og
  inverse funksjoner, standardfunksjonene (polynom, rasjonale, eksponential, logaritme,
  trig) og deres grafer — fundamentet for grenser, derivasjon og kurvedrøfting.
- **Eksamensbelegg:** Ikke egen søyle, men forutsetning for l'Hôpital (Del 1),
  kurvedrøfting (M, 17 %) og invers funksjon (17 %). Inngår indirekte i D, E, M.
  Prioritet: grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Funksjoner](/1t/1t-4-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $D_f$ (definisjonsmengde), $V_f$
  (verdimengde), $f\circ g$ (sammensetning), $f^{-1}$ (invers).
- **Innholdskontrakt (flashcard-kilde):** definisjonsmengde (hvor uttrykket er
  definert: nevner $\neq 0$, argument til $\ln > 0$, argument til rot $\geq 0$);
  verdimengde; sammensetning og invers ($f^{-1}$ finnes hviss $f$ er injektiv på
  intervallet `(verifiser)`); standardfunksjonenes grafer og grunnegenskaper
  (monotoni, asymptoter). **Grad-/radiankonvensjon** for trig etableres her.
- **Innholdskontrakt (må vises):** finn $D_f$ og $V_f$ for et sammensatt uttrykk;
  finn invers ved å løse $y=f(x)$ for $x$.
- **Typiske feil:** glemme nevner-/logaritme-/rot-restriksjoner i $D_f$; bytte om
  $D_f$ og $V_f$; regne invers uten å sjekke injektivitet på intervallet.
- **Modellsvar:** «Finn definisjons- og verdimengde til $f(x)=\ln(4-x^2)$, og avgjør
  på hvilket intervall $f$ har en invers.»
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 1.2: Grenseverdier og l'Hôpitals regel
**id:** `hio-ingmatte-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `hio-ingmatte-1-1`

- **Kapitteltype:** konstruksjons-/metodekapittel (PERFEKT).
- **Description:** Grensebegrepet, standardgrenser, ubestemte former, og **l'Hôpitals
  regel** — den eksplisitt påbudte metoden (kalkulator forbudt): marker den ubestemte
  formen, deriver teller og nevner hver for seg, gjenta ved behov.
- **Eksamensbelegg:** Sjanger E (9/12, 75 %): «bruk l'Hôpital, ikke kalkulator».
  Fast E1-tungt innslag; mangler kun i juni25/des25/mai26. Metoden må vises (#5).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1; forutsetter derivasjonsregler — de repeteres
  kompakt her (kjerneregel, produkt/kvotient) siden derivasjon formelt kommer i Del 2,
  men de trivielle reglene trengs for l'Hôpital nå («Sist du var her»: vis
  $\tfrac{d}{dx}\sin x=\cos x$, $\tfrac{d}{dx}e^x=e^x$, $\tfrac{d}{dx}\ln x=1/x$
  ferdig oppfrisket). `collapsible` **Symbol- og formelliste:** $\lim_{x\to a}$,
  ubestemte former $[0/0]$, $[\infty/\infty]$, $[0\cdot\infty]$, standardgrenser.
- **Innholdskontrakt (flashcard-kilde):** grensebegrepet (venstre-/høyregrense,
  ensidig); **standardgrenser** ($\lim_{x\to 0}\tfrac{\sin x}{x}=1$,
  $\lim_{x\to\infty}(1+\tfrac1x)^x=e$); **ubestemte former** som utløser l'Hôpital
  ($[0/0]$, $[\infty/\infty]$) og de som må **omskrives** først ($[0\cdot\infty]$
  → brøk); **l'Hôpitals regel:** hvis $\lim\tfrac{f}{g}$ er $[0/0]$ eller
  $[\infty/\infty]$, er $\lim\tfrac{f}{g}=\lim\tfrac{f'}{g'}$ (deriver teller og
  nevner **hver for seg**, ikke som kvotient — #5), gjenta til formen er borte.
- **Innholdskontrakt (må vises):** hele l'Hôpital-prosedyren steg for steg med
  «Intuisjon:»-linje etter hvert steg; markering av den ubestemte formen FØR
  derivasjon; omskriving av $[0\cdot\infty]$ til $[0/0]$.
- **Typiske feil:** #5 (deriverer brøken som kvotient; stopper før formen er borte);
  bruker l'Hôpital uten å sjekke at formen faktisk er ubestemt; bruker kalkulator der
  metoden kreves (#12/sensorkrav 5).
- **Modellsvar:** «Bruk l'Hôpital:
  $\lim_{x\to 0}\dfrac{1-\cos x}{\ln(1+x^2)}$» (to runder → resultat $\tfrac12$;
  vis mellomregning, ikke kalkulator).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.3: Grense-drill (l'Hôpital og standardgrenser)
**id:** `hio-ingmatte-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-1-2`

- **Kapitteltype:** drillkapittel (DNA-regnefag drill-DNA).
- **Description:** Ren drill på l'Hôpital-sjangeren: gjenkjenn den ubestemte formen,
  velg om omskriving trengs, gjennomfør, vis alle steg.
- **Eksamensbelegg:** Sjanger E (75 %). Gjengangervarianter: $[0/0]$-brøker med trig/
  eksponential/logaritme; $[\infty/\infty]$; $[0\cdot\infty]$ omskrevet.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:**
  l'Hôpital-oppskriften i kortform + standardgrensene.
- **Innholdskontrakt (må vises):** løsningsoppskriften (1) skriv formen og bekreft at
  den er ubestemt; (2) omskriv om nødvendig; (3) deriver teller og nevner hver for
  seg; (4) evaluer, gjenta ved behov; (5) konkluder — med sensor-margnotat om at
  metoden er poenget.
- **Typiske feil:** #5; å bruke kalkulator (forbudt); glemme å gjenta l'Hôpital når
  formen fortsatt er ubestemt.
- **Kvote:** 16 quiz / 14 flashcards (8–15 drilloppgaver på eksamensnivå, alle med
  `hints` (første hint = «hvilken ubestemt form?») + `solution`).

**Prøve-kvote Del 1:** 4 prøver (1.A definisjons-/verdimengde + invers · 1.B
standardgrenser + gjenkjenn ubestemt form · 1.C l'Hôpital (én og to runder, m/
omskriving) · 1.D samlet grense-/funksjonsprøve på eksamensnivå).

### Del 2 — Derivasjon: implisitt, logaritmisk og tangentlinje *(prioritet: PERFEKT — D 83 %)*

#### Kapittel 2.1: Derivasjonsregler og eksplisitt derivasjon
**id:** `hio-ingmatte-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-1-2`

- **Kapitteltype:** metodekapittel (grunnlag → perfekt for tangent).
- **Description:** Hele derivasjonsapparatet — potens-, produkt-, kvotient- og
  kjerneregel, derivasjon av standardfunksjonene — og tangentlinjen til en eksplisitt
  gitt kurve, som forberedelse til implisitt derivasjon.
- **Eksamensbelegg:** Grunnlag for D (implisitt + tangent, 83 %), K (logaritmisk
  derivasjon, 25 %), E (l'Hôpital), H (Taylor). Inngår i D, E, H, K. Prioritet:
  grunnlag → perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Derivasjon](/r1/r1-3-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** $f'(x)$, $\tfrac{dy}{dx}$, kjerneregel
  $\tfrac{d}{dx}f(g(x))=f'(g(x))g'(x)$, produkt-/kvotientregel.
- **Innholdskontrakt (flashcard-kilde):** **derivasjonsregler** (potens, sum, produkt
  $(uv)'=u'v+uv'$, kvotient, kjerne); **standardderiverte** ($\sin,\cos,\tan,e^x,a^x,
  \ln x,\log_a x$, potenser og røtter); **tangentlinjen** $y-y_0=f'(x_0)(x-x_0)$.
- **Innholdskontrakt (må vises):** derivasjon av sammensatte uttrykk med kjerneregel;
  oppsett av tangentlinje i et punkt på en eksplisitt kurve.
- **Typiske feil:** glemt kjerneregel på sammensatte ledd; forveksle produkt- og
  kvotientregel; regnefeil i innsetting av $x_0$.
- **Modellsvar:** «Finn tangentlinjen til $f(x)=x^2 e^{-x}$ i punktet der $x=1$.»
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 2.2: Implisitt derivasjon og tangentlinje
**id:** `hio-ingmatte-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** Implisitt derivasjon av en kurve gitt på formen $F(x,y)=0$, og
  tangentlinjen i et oppgitt punkt — den mest stabile «mellomstore» sjangeren, nesten
  årviss.
- **Eksamensbelegg:** Sjanger D (10/12, 83 %): «punktet $(a,b)$ ligger på kurven — finn
  tangenten». Billige, høyfrekvente poeng. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  implisitt $\tfrac{d}{dx}$ på ledd med $y$ gir $\cdot\,y'$ (kjerneregel);
  tangentlikningen.
- **Innholdskontrakt (flashcard-kilde):** **implisitt derivasjon** (deriver begge
  sider mhp. $x$; hvert $y$-ledd gir en $y'$-faktor via kjerneregel; blandede ledd
  $x\cdot y$ krever produktregel); løs ut $y'$; **tangentlinjen** $y-y_0=y'(x-x_0)$
  med $y'$ evaluert i punktet.
- **Innholdskontrakt (må vises):** hele prosedyren steg for steg: (1) vis eventuelt at
  punktet ligger på kurven; (2) deriver implisitt; (3) løs ut $y'$; (4) sett inn
  punktet; (5) skriv tangentlikningen. «Intuisjon:»-linje etter hvert steg.
- **Typiske feil:** #7 (glemt produkt-/kjerneregel på blandede ledd; setter inn punktet
  FØR derivasjon); glemme $y'$-faktoren på $y$-ledd; regnefeil ved utløsing av $y'$.
- **Modellsvar:** «Kurven er gitt ved $(y+2)e^{-x}+x^2y^3=x^2+3$. Vis at $(0,1)$
  ligger på kurven, og finn tangentlinjen der.»
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.3: Logaritmisk derivasjon og derivasjons-drill
**id:** `hio-ingmatte-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-2-2`

- **Kapitteltype:** metodekapittel + drill (KUNNE/perfekt-drill).
- **Description:** **Logaritmisk derivasjon** for uttrykk på formen $f(x)=g(x)^{h(x)}$
  (ta $\ln$ på begge sider, deriver implisitt, løs ut $f'$), pluss samlet drill på
  eksplisitt/implisitt derivasjon og tangentlinjer.
- **Eksamensbelegg:** Sjanger K (3/12, 25 %): «finn $f'$ for $f(x)=(4x+1)^{\sin x}$ med
  logaritmisk derivasjon», ofte som deloppgave b). Drill dekker D (83 %). Prioritet:
  kunne (K) / perfekt-drill (D).
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Symbol- og formelliste:**
  $\ln f = h\ln g$; logaritmereglene; implisitt derivasjon av $\ln f$ gir $f'/f$.
- **Innholdskontrakt (flashcard-kilde):** **logaritmisk derivasjon** (når basen OG
  eksponenten inneholder $x$: $\ln f=h(x)\ln g(x)$, deriver implisitt →
  $\tfrac{f'}{f}=\ldots$, gang opp med $f$); grunnen til at vanlig potens-/
  eksponentialregel ikke holder her.
- **Innholdskontrakt (må vises):** logaritmisk-derivasjon-prosedyren; drill-oppskriften
  for D (implisitt + tangent).
- **Typiske feil:** bruke potensregelen $\tfrac{d}{dx}x^n=nx^{n-1}$ på $g^h$ når $h$
  ikke er konstant; glemme å gange tilbake med $f$; #7 på implisitt-drillen.
- **Modellsvar:** «Finn $f'(x)$ for $f(x)=(4x+1)^{\sin x}$ med logaritmisk derivasjon.»
- **Kvote:** 16 quiz / 14 flashcards (drilldel: 8–12 oppgaver på eksamensnivå med
  `hints` + `solution`).

**Prøve-kvote Del 2:** 4 prøver (2.A derivasjonsregler + kjerneregel · 2.B implisitt
derivasjon + tangentlinje · 2.C logaritmisk derivasjon · 2.D samlet derivasjonsprøve
på eksamensnivå).

### Del 3 — Integrasjonsteknikk *(prioritet: PERFEKT — C 100 %)*

#### Kapittel 3.1: Ledd-for-ledd og substitusjon
**id:** `hio-ingmatte-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** De to grunnleggende teknikkene — **ledd-for-ledd** (polynom,
  $1/x\to\ln$, $1/x^2$, trig, $e^{ax}$) og **substitusjon** (variabelbytte, oppdater
  grenser ved bestemt integral, indre derivert) — med konsekvent «+ C».
- **Eksamensbelegg:** Sjanger C (12/12, 100 %): 2–4 integraler per sett. «+ C» er
  poenggivende (#1); grensebytte ved substitusjon (#2). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Integrasjon](/r2/r2-4-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** ubestemt vs. bestemt integral, «+ C»,
  standardintegraler, substitusjon $u=g(x)$, $du=g'(x)\,dx$.
- **Innholdskontrakt (flashcard-kilde):** **standardintegraler** ($\int x^n\,dx$,
  $\int \tfrac1x\,dx=\ln|x|$, $\int e^{ax}\,dx$, $\int\sin/\cos/\ldots$);
  **substitusjon** (velg $u$, regn $du$, bytt ALLE $x$ ut, oppdater grensene ved
  bestemt integral, integrer i $u$, evt. bytt tilbake); **+ C** obligatorisk på
  ubestemte.
- **Innholdskontrakt (må vises):** ledd-for-ledd på en polynom+trig+eksp-sum;
  substitusjon med grensebytte, steg for steg med «Intuisjon:»-linje.
- **Typiske feil:** #1 (glemt + C); #2 (glemte substitusjonsgrenser / glemt indre
  derivert); velge en $u$ som ikke forenkler.
- **Modellsvar:** «Regn ut $\int_0^1 x\,e^{x^2}\,dx$ (substitusjon $u=x^2$, oppdater
  grensene).»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.2: Delvis integrasjon og delbrøkoppspalting
**id:** `hio-ingmatte-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `hio-ingmatte-3-1`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** **Delvis integrasjon** ($\int u\,dv=uv-\int v\,du$; klassikere
  $xe^x$, $x\sin x$, $\ln x$) og **delbrøkoppspalting** (nevnere $(x-a)(x-b)$,
  $(x-a)^2$, $(x^2+1)$) — de to tyngre integrasjonsteknikkene.
- **Eksamensbelegg:** Sjanger C (del av 100 %): minst ett integral per sett krever
  substitusjon/delvis/delbrøk. Delbrøk over $(x-a)^2$ og $(x^2+1)$ går igjen.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  delvis-integrasjon-formelen, valg av $u$/$dv$ (LIATE-heuristikk `(verifiser)`),
  delbrøk-ansatzene.
- **Innholdskontrakt (flashcard-kilde):** **delvis integrasjon**
  $\int u\,dv=uv-\int v\,du$ (dokumentér $u$/$dv$-valg; $u=\ln x$ eller polynom, $dv$
  det som er lett å integrere); **delbrøk-ansatzer** — $\tfrac{1}{(x-a)(x-b)}=
  \tfrac{A}{x-a}+\tfrac{B}{x-b}$; gjentatt faktor $\tfrac{1}{(x-a)^2}=
  \tfrac{A}{x-a}+\tfrac{B}{(x-a)^2}$ (#6 — begge ledd må med); irredusibel
  annengrad $\tfrac{Bx+C}{x^2+1}$ (#6 — teller må være førstegrads); finn koeffisienter
  ved innsetting eller sammenligning.
- **Innholdskontrakt (må vises):** delvis integrasjon på $\int x\sin x\,dx$;
  delbrøkoppspalting av $\int\tfrac{x+1}{(x-2)^2}\,dx$ steg for steg med «Intuisjon:».
- **Typiske feil:** #6 (feil delbrøk-ansatz for $(x-a)^2$ eller $(x^2+1)$); feil
  $u$/$dv$-valg som gjør integralet verre; #1 (glemt + C).
- **Modellsvar:** «Regn ut $\int\dfrac{x+1}{(x-2)^2}\,dx$ ved delbrøkoppspalting.»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.3: Integrasjons-drill (alle teknikker)
**id:** `hio-ingmatte-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-3-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Blandet drill der studenten først må **velge teknikk** (ledd-for-ledd
  / substitusjon / delvis / delbrøk / trig) og deretter gjennomføre — med «+ C» og
  grensebytte som refleks.
- **Eksamensbelegg:** Sjanger C (100 %, 2–4 per sett). Gjengangere: delbrøk over
  $(x-a)^2$, substitusjon i eksponential-/trig-integraler, delvis på $xe^x$/$x\sin x$.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og formelliste:**
  teknikkvalg-beslutningstre (hva ser du i integranden → hvilken teknikk).
- **Innholdskontrakt (må vises):** beslutningsoppskriften for teknikkvalg;
  sensor-margnotat om at «+ C» og grensebytte gir/koster poeng.
- **Typiske feil:** #1, #2, #6; å velge tyngste teknikk når en enklere holder.
- **Kvote:** 18 quiz / 14 flashcards (10–15 blandede integraler på eksamensnivå med
  `hints` (første hint = «hvilken teknikk?») + `solution`).

**Prøve-kvote Del 3:** 4 prøver (3.A ledd-for-ledd + substitusjon (m/ grensebytte) ·
3.B delvis integrasjon · 3.C delbrøkoppspalting (alle nevnertyper) · 3.D blandet
integrasjonsprøve på eksamensnivå, «+ C» tellende).

### Del 4 — Anvendt integrasjon: areal og omdreiningsvolum *(prioritet: KUNNE — F 50 %, J 42 %)*

#### Kapittel 4.1: Areal under og mellom grafer
**id:** `hio-ingmatte-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-3-2`

- **Kapitteltype:** anvendelseskapittel (KUNNE).
- **Description:** Areal som bestemt integral: under én graf, og **mellom to grafer**
  (differansen), ofte gitt med figur og et skravert område. Krever korrekt oppsett av
  integralet og valg av integrasjonsteknikk.
- **Eksamensbelegg:** Sjanger F (6/12, 50 %): ofte med figur; noen ganger areal mellom
  kurve og linje. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og formelliste:**
  areal $A=\int_a^b f(x)\,dx$; areal mellom grafer
  $A=\int_a^b (f(x)-g(x))\,dx$ (øvre minus nedre); skjæringspunkter som grenser.
- **Innholdskontrakt (flashcard-kilde):** areal under graf (bestemt integral over
  $[a,b]$; ta absoluttverdi/del opp der grafen krysser x-aksen `(verifiser)`); **areal
  mellom to grafer** = $\int(\text{øvre}-\text{nedre})\,dx$ mellom skjæringspunktene;
  finn grensene ved å løse $f(x)=g(x)$.
- **Innholdskontrakt (må vises):** (1) skisser/les området; (2) finn grensene
  (skjæringspunkter); (3) sett opp integralet (differansen om nødvendig); (4) løs med
  riktig teknikk — med «Intuisjon:»-linje. **Krav om figurbeskrivelse** i modellsvaret
  (sensor forventer at området identifiseres).
- **Typiske feil:** bytte om øvre/nedre funksjon; glemme å finne skjæringspunkter;
  overse at grafen krysser x-aksen (areal vs. fortegnet integral); regnefeil i
  integrasjonsteknikken.
- **Modellsvar:** «Grafen til $f(x)=-3x^4+4x^3$ er tegnet. Finn det eksakte arealet av
  området mellom grafen og x-aksen der $f(x)\geq 0$.»
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 4.2: Omdreiningsvolum
**id:** `hio-ingmatte-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-4-1`

- **Kapitteltype:** anvendelseskapittel (KUNNE).
- **Description:** Volum av omdreiningslegeme — **skiver/skall etter akse**. Om y-aksen
  (hovedtilfellet): sylinderskall $V=2\pi\int x f(x)\,dx$. Om x-aksen: skiver
  $V=\pi\int f(x)^2\,dx$. Ofte kledd som en fysisk gjenstand (vase, beholder).
- **Eksamensbelegg:** Sjanger J (5/12, 42 %): y-aksen dominerer (vase, snurrebass,
  beholder); én om x-aksen. Riktig aksemetode er avgjørende (#4). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:**
  $V=2\pi\int_a^b x f(x)\,dx$ (skall, om y-aksen); $V=\pi\int_a^b f(x)^2\,dx$ (skiver,
  om x-aksen). Formlene står på notatarket, men *metodevalget* er studentens.
- **Innholdskontrakt (flashcard-kilde):** **aksevalg-regelen** — roterer man området
  om **y-aksen** brukes sylinderskall $V=2\pi\int x f(x)\,dx$; om **x-aksen** brukes
  skiver $V=\pi\int f(x)^2\,dx$ (#4 — bytt ALDRI om). Tegn området før oppsett.
  *(Merk: for rotasjon om y-aksen kan også skivemetode i $y$ brukes hvis $x=g(y)$;
  boka bruker skallmetoden som standard slik arkivet gjør — `(verifiser)`.)*
- **Innholdskontrakt (må vises):** (1) tegn området; (2) identifiser aksen; (3) velg
  skall/skive-formel; (4) sett opp og løs integralet (ofte delvis integrasjon på
  $x\cdot f(x)$) — med «Intuisjon:»-linje og fysisk innramming.
- **Typiske feil:** #4 (skiveformel om y-aksen eller skallformel om x-aksen); tegner
  ikke området; feil grenser; regnefeil i den påfølgende delvis-integrasjonen.
- **Modellsvar:** «Området under $f(x)=xe^x$ på $[0,2]$ roteres om y-aksen. Finn
  volumet (sylinderskall; delvis integrasjon).»
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A areal under graf · 4.B areal mellom to grafer
(m/ skjæringspunkter) · 4.C omdreiningsvolum om y-aksen (skall) · 4.D omdreiningsvolum
om x-aksen (skiver) + samlet anvendt-integrasjonsprøve på eksamensnivå).

### Del 5 — Differensiallikninger, 1. orden *(prioritet: PERFEKT — B 100 %)*

#### Kapittel 5.1: Separable differensiallikninger og IVP
**id:** `hio-ingmatte-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-3-2`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** **Separable** 1.-ordens DE-er: skill variablene, integrer begge
  sider, løs for $y$, og sett inn initialkravet (initialverdiproblem, IVP) for å
  bestemme konstanten.
- **Eksamensbelegg:** Sjanger B (del av 12/12, 100 %): minst én 1.-ordens DE per sett;
  separabel og integrerende faktor omtrent like ofte. Ofte IVP med $y(0)$ eller $y(1)$.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.2; kap. 0.2 (formelheftets DE-ark).
  `collapsible` **Symbol- og formelliste:** $y'=\tfrac{dy}{dx}$; separabel form
  $\tfrac{dy}{dx}=g(x)h(y)$; IVP; integrasjonskonstant bestemt av initialkravet.
- **Innholdskontrakt (flashcard-kilde):** **separabel DE** (kan skrives
  $\tfrac{dy}{dx}=g(x)h(y)$); metoden: skill ($\tfrac{dy}{h(y)}=g(x)\,dx$), integrer
  begge sider (én «+ C» holder), løs for $y$; **IVP** — sett inn $y(x_0)=y_0$ for å
  finne konstanten, TIL SLUTT.
- **Innholdskontrakt (må vises):** hele separabel-prosedyren steg for steg med
  «Intuisjon:»-linje; innsetting av initialkrav.
- **Typiske feil:** integrere uten å skille variablene helt; glemme «+ C» før
  innsetting av initialkravet; regnefeil ved utløsing av $y$.
- **Modellsvar:** «Løs initialverdiproblemet $2y'=\dfrac{y}{x+4}$, $y(0)=10$, for
  $x\geq 0$.»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 5.2: Lineære 1.-ordens DE med integrerende faktor
**id:** `hio-ingmatte-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-5-1`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** **Lineære** 1.-ordens DE-er $y'+p(x)y=r(x)$: bring på standardform
  (koeffisient 1 foran $y'$), finn **integrerende faktor** $e^{\int p\,dx}$, skriv
  venstresiden som derivert av et produkt, integrer.
- **Eksamensbelegg:** Sjanger B (del av 100 %). Integrerende faktor krever standardform
  først (#11). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:**
  standardform $y'+p(x)y=r(x)$; integrerende faktor $\mu=e^{\int p\,dx}$;
  $(\mu y)'=\mu r$.
- **Innholdskontrakt (flashcard-kilde):** **lineær 1.-ordens DE** (formen
  $y'+p(x)y=r(x)$); **integrerende faktor** $\mu(x)=e^{\int p(x)\,dx}$; metoden: (1)
  standardform (del på koeffisienten foran $y'$ — #11), (2) regn $\mu$, (3) gang
  gjennom → venstresiden blir $(\mu y)'$, (4) integrer begge sider, (5) løs for $y$,
  (6) IVP til slutt.
- **Innholdskontrakt (må vises):** hele prosedyren steg for steg med «Intuisjon:»;
  eksplisitt standardform-steget først.
- **Typiske feil:** #11 (glemmer standardform → feil $p$ → feil $\mu$); glemme å gange
  HELE likningen med $\mu$; regnefeil i $\int p\,dx$.
- **Modellsvar:** «Løs $xy'+2y=x^3$, $y(1)=0$, for $x>0$ (bring på standardform først,
  finn integrerende faktor).»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 5.3: 1.-ordens DE-drill (velg type)
**id:** `hio-ingmatte-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-5-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Blandet drill der studenten først **gjenkjenner typen** (separabel
  vs. lineær) og deretter velger riktig metode og gjennomfører, med og uten IVP.
- **Eksamensbelegg:** Sjanger B (100 %). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2. `collapsible` **Symbol- og formelliste:**
  gjenkjenningstre (separabel: kan faktoriseres $g(x)h(y)$? lineær: på formen
  $y'+p y=r$?).
- **Innholdskontrakt (må vises):** gjenkjennings- og løsningsoppskrift med
  sensor-margnotat om trinnvis poenggivning (delvis uttelling underveis).
- **Typiske feil:** feil typegjenkjenning → feil metode; #11; glemme initialkravet.
- **Kvote:** 18 quiz / 14 flashcards (10–15 blandede 1.-ordens DE-er på eksamensnivå
  med `hints` (første hint = «separabel eller lineær?») + `solution`).

**Prøve-kvote Del 5:** 4 prøver (5.A separabel (m/ IVP) · 5.B lineær med integrerende
faktor · 5.C typegjenkjenning + løsning · 5.D samlet 1.-ordens-DE-prøve på
eksamensnivå).

### Del 6 — Differensiallikninger, 2. orden *(prioritet: PERFEKT — A 100 %, fagets tyngste blokk)*

#### Kapittel 6.1: Homogen 2.-ordens DE — de tre rot-tilfellene
**id:** `hio-ingmatte-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-ingmatte-5-2`

- **Kapitteltype:** metodekapittel (PERFEKT).
- **Description:** Homogen 2.-ordens DE med konstante koeffisienter
  $y''+by'+cy=0$: sett opp den **karakteristiske likningen** og skill de tre
  rot-tilfellene — to reelle røtter, dobbeltrot, komplekst rotpar.
- **Eksamensbelegg:** Sjanger A (del av 12/12, 100 %). Alle tre rot-tilfellene
  forekommer. Ofte a) homogen (dette kapitlet) + b) inhomogen (6.2) med samme
  venstreside. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.2; kap. 0.2 (formelheftets DE-ark). `collapsible`
  **Symbol- og formelliste:** karakteristisk likning $\lambda^2+b\lambda+c=0$;
  diskriminant; de tre løsningsformene.
- **Innholdskontrakt (flashcard-kilde):** **karakteristisk likning**
  $\lambda^2+b\lambda+c=0$ (fra $y''+by'+cy=0$); **tre rot-tilfeller** —
  (i) to reelle røtter $\lambda_1\neq\lambda_2$: $y=C_1e^{\lambda_1 x}+C_2e^{\lambda_2 x}$;
  (ii) dobbeltrot $\lambda$: $y=(C_1+C_2x)e^{\lambda x}$;
  (iii) komplekst par $\lambda=\alpha\pm\beta i$:
  $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$. Formene står på formelarket —
  studenten må velge riktig tilfelle og sette inn.
- **Innholdskontrakt (må vises):** hele prosedyren: (1) skriv karakteristisk likning;
  (2) løs den (regn diskriminant); (3) velg riktig løsningsform; (4) bestem $C_1,C_2$
  ved eventuelle initialkrav. «Intuisjon:»-linje etter hvert steg. **Parametersjekk
  (DNA):** bekreft numerisk at diskriminantfortegnet styrer tilfellet entydig FØR
  «alltid»-formuleringer skrives.
- **Typiske feil:** velge feil rot-tilfelle (særlig dobbeltrot vs. komplekst par);
  glemme $x$-faktoren ved dobbeltrot; feil $\alpha/\beta$ fra komplekse røtter.
- **Modellsvar:** «Løs $y''+6y'+25y=0$» (komplekst par → $e^{-3x}(C_1\cos 4x+C_2\sin 4x)$).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 6.2: Inhomogen 2.-ordens DE — ubestemte koeffisienter og resonans
**id:** `hio-ingmatte-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `hio-ingmatte-6-1`

- **Kapitteltype:** metodekapittel (PERFEKT — fagets tyngste enkeltkapittel).
- **Description:** Inhomogen 2.-ordens DE $y''+by'+cy=f(x)$: finn $y_h$ (fra 6.1),
  gjett $y_p$ med **ubestemte koeffisienter** (samme form som høyresiden — polynom /
  eksponential / sinus-cosinus), **oppgrader ansatzen ved resonans**, balanser ledd
  for ledd, og la $y=y_h+y_p$. Bestem konstantene ved initialkrav til slutt.
- **Eksamensbelegg:** Sjanger A (del av 100 %). Ofte b) inhomogen med samme venstreside
  som a). Delvis uttelling for korrekt $y_h$ selv om $y_p$ er feil (sensorkrav 4).
  Resonans/oppgradering er det vanligste feilpunktet (#3). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1. «Sist du var her»: vis de tre $y_h$-formene
  ferdig oppfrisket. `collapsible` **Symbol- og formelliste:** $y=y_h+y_p$;
  ansatz-tabell (høyreside → prøveløsning); resonans-oppgradering (gang med $x$ / $x^2$).
- **Innholdskontrakt (flashcard-kilde):** **ubestemte koeffisienter** — ansatz for
  $y_p$ etter høyresiden: polynom grad $n$ → generelt polynom grad $n$; $e^{kx}$ →
  $Ae^{kx}$; $\sin/\cos(kx)$ → $A\cos kx+B\sin kx$; **resonansregelen** — hvis
  ansatzen allerede løser den homogene likningen, gang den med $x$ (eller $x^2$ ved
  dobbeltrot) — #3; sett $y_p$ inn, samle ledd, løs for koeffisientene; **total løsning**
  $y=y_h+y_p$, konstanter fra initialkrav TIL SLUTT.
- **Innholdskontrakt (må vises):** hele prosedyren steg for steg med «Intuisjon:»;
  eksplisitt **resonanssjekk** (er ansatzen en $y_h$-løsning?) før innsetting.
- **Typiske feil:** #3 (glemmer resonans-oppgradering når høyresiden løser den
  homogene; feil form ved dobbeltrot/komplekst par); balansere ledd feil; bestemme
  $C_1,C_2$ fra initialkrav FØR $y_p$ er lagt til.
- **Modellsvar:** «Løs $y''+6y'+25y=25x^2-13x+21$ (samme venstreside som 6.1;
  polynomansatz grad 2, ingen resonans).» Plusseksempel med resonans:
  «$y''-y=e^{x}$ (resonans → $y_p=Axe^{x}$).»
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 6.3: 2.-ordens DE-drill
**id:** `hio-ingmatte-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `hio-ingmatte-6-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Blandet drill: gjenkjenn rot-tilfellet, sett opp $y_h$; for inhomogen
  velg riktig ansatz og sjekk resonans; kombiner til full løsning med IVP.
- **Eksamensbelegg:** Sjanger A (100 %). Gjengangermønster: a) homogen + b) inhomogen
  med samme venstreside. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2. `collapsible` **Symbol- og formelliste:**
  rot-tilfelle-tre + ansatz-tabell + resonanssjekk i kortform.
- **Innholdskontrakt (må vises):** samlet løsningsoppskrift for a)+b)-mønsteret med
  sensor-margnotat om trinnvis poenggivning (5 p $y_h$ + 5 p inhomogen).
- **Typiske feil:** #3; feil rot-tilfelle; glemme å legge $y_h$ til $y_p$.
- **Kvote:** 18 quiz / 14 flashcards (10–15 varianter på eksamensnivå, inkl.
  a)+b)-par, alle med `hints` + `solution`).

**Prøve-kvote Del 6:** 4 prøver (6.A homogen (alle tre rot-tilfeller) · 6.B inhomogen
uten resonans (polynom/eksp/trig-høyreside) · 6.C inhomogen MED resonans · 6.D samlet
2.-ordens-DE-prøve (a) homogen + b) inhomogen) på eksamensnivå).

### Del 7 — Vektorer i R³ *(prioritet: KUNNE — I 42 %)*

#### Kapittel 7.1: Vektorer i R³ — vinkel og kryssprodukt
**id:** `hio-ingmatte-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-0-2`

- **Kapitteltype:** metodekapittel (KUNNE).
- **Description:** Vektorer i rommet på $a\mathbf{i}+b\mathbf{j}+c\mathbf{k}$- og
  $[a,b,c]$-form: **vinkelen** mellom to vektorer via skalarproduktet (oppgi i grader
  OG radianer), og **kryssproduktet** $\mathbf{u}\times\mathbf{v}$ via
  determinant-oppsett.
- **Eksamensbelegg:** Sjanger I (5/12, 42 %): fast oppskrift skalarprodukt→vinkel
  (grader+radianer), så $\mathbf{u}\times\mathbf{v}$. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Vektorer](/r1/r1-5-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** skalarprodukt
  $\mathbf{u}\cdot\mathbf{v}=u_1v_1+u_2v_2+u_3v_3$; lengde
  $|\mathbf{u}|=\sqrt{u_1^2+u_2^2+u_3^2}$; vinkel
  $\cos\theta=\tfrac{\mathbf{u}\cdot\mathbf{v}}{|\mathbf{u}||\mathbf{v}|}$;
  kryssprodukt-determinant.
- **Innholdskontrakt (flashcard-kilde):** **skalarprodukt** (komponentvis sum);
  **vinkelformelen** $\cos\theta=\tfrac{\mathbf{u}\cdot\mathbf{v}}{|\mathbf{u}||\mathbf{v}|}$
  → $\theta$ i **grader og radianer** (#8); **kryssprodukt** som determinant
  $\mathbf{u}\times\mathbf{v}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\
  u_1&u_2&u_3\\ v_1&v_2&v_3\end{vmatrix}$; egenskaper (ortogonalt på begge, $|\mathbf{u}
  \times\mathbf{v}|=|\mathbf{u}||\mathbf{v}|\sin\theta$ `(verifiser om testet)`).
- **Innholdskontrakt (må vises):** (1) skalarprodukt og lengder; (2) $\cos\theta$ →
  $\theta$ i grader OG radianer; (3) kryssprodukt via determinant, komponent for
  komponent — med «Intuisjon:»-linje.
- **Typiske feil:** #8 (svarer bare i grader; fortegns-/komponentfeil i
  kryssprodukt­determinanten); regnefeil i lengdene; glemme kvadratrot i $|\mathbf{u}|$.
- **Modellsvar:** «Gitt $\mathbf{u}=-3\mathbf{i}+\mathbf{j}+2\mathbf{k}$,
  $\mathbf{v}=\mathbf{i}-\mathbf{j}-2\mathbf{k}$. a) Finn vinkelen mellom dem (grader
  og radianer). b) Finn $\mathbf{u}\times\mathbf{v}$.»
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A skalarprodukt + lengder · 7.B vinkel (grader OG
radianer) · 7.C kryssprodukt (determinant) · 7.D samlet vektorprøve (a) vinkel +
b) kryssprodukt) på eksamensnivå).

### Del 8 — Flervariabel: partiellderiverte *(prioritet: KUNNE — G 50 %)*

#### Kapittel 8.1: Partiellderiverte av 1. og 2. orden
**id:** `hio-ingmatte-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** metodekapittel (KUNNE).
- **Description:** Partiellderiverte av $f(x,y)$: alle 1.-ordens ($f_x$, $f_y$) og alle
  2.-ordens ($f_{xx}$, $f_{yy}$, $f_{xy}$), der man deriverer mhp. én variabel og
  holder den andre konstant.
- **Eksamensbelegg:** Sjanger G (6/12, 50 %): «finn alle partiellderiverte av 1. og 2.
  orden». Fast innslag i 10-oppgave-æraen. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (derivasjonsregler). `collapsible` **Symbol- og
  formelliste:** $f_x=\tfrac{\partial f}{\partial x}$, $f_y$, $f_{xx}$, $f_{yy}$,
  $f_{xy}=\tfrac{\partial}{\partial y}(f_x)$; symmetri $f_{xy}=f_{yx}$ for pene
  funksjoner `(verifiser)`.
- **Innholdskontrakt (flashcard-kilde):** **partiellderivert** (deriver mhp. én
  variabel, hold resten konstant — $\partial$-notasjonen introduseres eksplisitt her);
  **1.-ordens** $f_x$, $f_y$; **2.-ordens** $f_{xx}$, $f_{yy}$, og de **blandede**
  $f_{xy}=\tfrac{\partial}{\partial y}(f_x)$; symmetrien $f_{xy}=f_{yx}$ (Clairaut,
  for kontinuerlige andrederiverte — `(verifiser)`).
- **Innholdskontrakt (må vises):** systematisk oppsett: regn $f_x$, $f_y$ først,
  deriver hver videre → alle fire (fem) 2.-ordens; sjekk $f_{xy}=f_{yx}$ som
  kontroll — med «Intuisjon:»-linje.
- **Typiske feil:** #9 (forveksler $f_{xy}$; glemmer en av 2.-ordens-derivertene);
  glemme å holde den andre variabelen konstant; kjerneregel-feil på ledd som $e^{3xy}$.
- **Modellsvar:** «Finn alle partiellderiverte av 1. og 2. orden til
  $f(x,y)=x\sin y+x^3y^5+e^{3xy}$.»
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 8.2: Lineær approksimasjon og kritiske punkter
**id:** `hio-ingmatte-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-8-1`

- **Kapitteltype:** metodekapittel + drill (KUNNE).
- **Description:** To varianter under partiellderiverte: **lineær approksimasjon** av
  $f(x,y)$ i et punkt (tangentplan), og **kritisk punkt** ($f_x=f_y=0$) med enkel
  karakterisering — pluss samlet partiellderivert-drill.
- **Eksamensbelegg:** Sjanger G-varianter: lineær approksimasjon (1/12, 8 %) og kritisk
  punkt som deloppgave under partiellderiverte. Prioritet: kunne (lav-frekvente
  varianter).
- **Forkunnskaper/kryssbok:** kap. 8.1. `collapsible` **Symbol- og formelliste:**
  lineær approksimasjon $L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$; kritisk punkt
  $f_x=f_y=0$; andrederivert-test (diskriminant $D=f_{xx}f_{yy}-f_{xy}^2$)
  `(verifiser om testet ved HiØ)`.
- **Innholdskontrakt (flashcard-kilde):** **lineær approksimasjon** (tangentplan)
  $L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$; **kritisk punkt** ($f_x=f_y=0$
  samtidig); enkel karakterisering via $D=f_{xx}f_{yy}-f_{xy}^2$ (D>0 og $f_{xx}>0$ →
  min; D>0 og $f_{xx}<0$ → maks; D<0 → sadel) — merket `(verifiser om HiØ tester
  karakterisering)`.
- **Innholdskontrakt (må vises):** lineær-approksimasjon-oppsett i et punkt;
  finn kritisk punkt ved å løse $f_x=f_y=0$ — med «Intuisjon:».
- **Typiske feil:** #9; sette inn feil punkt i $L$; løse likningssystemet $f_x=f_y=0$
  feil.
- **Modellsvar:** «Finn den lineære approksimasjonen til
  $f(x,y)=\sqrt{x^2+y^2}$ i punktet $(3,4)$.»
- **Kvote:** 16 quiz / 14 flashcards (drilldel: 8–12 partiellderivert-oppgaver med
  `hints` + `solution`).

**Prøve-kvote Del 8:** 4 prøver (8.A alle 1.-ordens partiellderiverte · 8.B alle
2.-ordens (inkl. blandede) · 8.C lineær approksimasjon / kritisk punkt · 8.D samlet
partiellderivert-prøve på eksamensnivå).

### Del 9 — Taylorpolynom *(prioritet: KUNNE — H 42 %)*

#### Kapittel 9.1: Taylorpolynom av grad 2 om x = 0
**id:** `hio-ingmatte-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** metodekapittel (KUNNE).
- **Description:** **Taylorpolynom av grad 2 om $x=0$** (Maclaurin):
  $P_2(x)=f(0)+f'(0)x+\tfrac{f''(0)}{2}x^2$ — krever to derivasjoner og innsetting.
  Alltid grad 2, alltid om origo i arkivet.
- **Eksamensbelegg:** Sjanger H (5/12, 42 %): alltid grad 2, alltid om $a=0$; aldri
  uendelige rekker. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1 (derivasjon). `collapsible` **Symbol- og
  formelliste:** $P_2(x)=f(0)+f'(0)x+\tfrac{f''(0)}{2!}x^2$; faktoriell $2!=2$.
- **Innholdskontrakt (flashcard-kilde):** **Taylorpolynom grad 2 om $a=0$**
  $P_2(x)=f(0)+f'(0)x+\tfrac{f''(0)}{2}x^2$; hva hvert ledd betyr (verdi, stigning,
  krumning i 0); $\tfrac{1}{2!}$-faktoren på annengradsleddet (#10). Formelen står på
  notatarket — regnearbeidet ($f'$, $f''$, innsetting) er studentens.
- **Innholdskontrakt (må vises):** (1) regn $f'$ og $f''$; (2) evaluer $f(0),f'(0),
  f''(0)$; (3) sett inn i formelen — med «Intuisjon:»-linje.
- **Typiske feil:** #10 (regnefeil i $f''(0)$; glemt $\tfrac{1}{2!}$-faktoren);
  evaluere derivertene i feil punkt; kjerneregel-feil i $f''$.
- **Modellsvar:** «Finn Taylorpolynomet av grad 2 om $x=0$ for
  $f(x)=\dfrac{1}{\sqrt{x^2+4}}$.»
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A $f'$/$f''$ + evaluering i 0 · 9.B $P_2$ for
polynom-/rot-uttrykk · 9.C $P_2$ for trig-/eksponential-uttrykk · 9.D samlet
Taylor-prøve på eksamensnivå).

### Del 10 — Kurvedrøfting og småsjangre *(prioritet: KJENNE — L/M, 17–25 %)*

#### Kapittel 10.1: Funksjonstransformasjon og trigonometrisk likning
**id:** `hio-ingmatte-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** småsjanger-kapittel (KJENNE).
- **Description:** To små, forutsigbare sjangre: **funksjonstransformasjon**
  (translasjon av graf — «flytt $f$ to enheter høyre og tre ned») og
  **trigonometrisk likning** (løs for $x$ i $[0,2\pi\rangle$, ofte andregrad i
  $\cos x$).
- **Eksamensbelegg:** Sjanger L (3/12, 25 %) og M-trig (2/12, 17 %). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Trigonometri](/r2/r2-2-1) `(verifiser lenke)`.
  `collapsible` **Symbol- og formelliste:** translasjon $f(x\mp a)$ (høyre/venstre),
  $f(x)\pm b$ (opp/ned); trig-grunnverdier fra formelheftet.
- **Innholdskontrakt (flashcard-kilde):** **funksjonstransformasjon** — høyre/venstre
  $=f(x\mp a)$ (høyre = $x-a$), opp/ned $=f(x)\pm b$; **trigonometrisk likning** —
  substituer $u=\cos x$ (eller $\sin x$), løs andregradslikningen, finn ALLE $x$ i
  $[0,2\pi\rangle$ (bruk enhetssirkel/formelheftets standardvinkler).
- **Innholdskontrakt (må vises):** transformasjonsoppsett (skriv $g$ eksplisitt);
  trig-likning steg for steg med alle løsninger i intervallet — «Intuisjon:».
- **Typiske feil:** feil fortegn i translasjon (høyre = $x-a$, ikke $x+a$); miste
  løsninger i trig-likning (glemme at $\cos$ gir to vinkler per verdi i $[0,2\pi\rangle$).
- **Modellsvar:** «$f(x)=-x^3$. Lag $g(x)$ som er $f$ flyttet 3 enheter høyre og 2 opp.»
  og «Løs $2\cos^2 x+\cos x-2=\cos x-1$ for $x\in[0,2\pi\rangle$.»
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 10.2: Grafgjenkjenning og kurvedrøfting
**id:** `hio-ingmatte-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-2-1`

- **Kapitteltype:** småsjanger-kapittel (KJENNE).
- **Description:** **Grafgjenkjenning** (hvilken kurve er $f$, $f'$, $f''$? — begrunn
  ut fra monotoni/fortegn) og **kurvedrøfting** (invers funksjon, definisjons-/
  verdimengde, asymptoter, symmetri).
- **Eksamensbelegg:** Sjanger M-graf (2/12, 17 %) og M-kurvedrøfting (2/12, 17 %).
  Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.1 (funksjoner), kap. 2.1 (derivasjon).
  `collapsible` **Symbol- og formelliste:** sammenheng $f'>0$ ↔ voksende, $f''>0$ ↔
  konveks; asymptote (vertikal: nevner=0; horisontal: grense i $\pm\infty$); symmetri
  (partall/oddetall).
- **Innholdskontrakt (flashcard-kilde):** **graf ↔ derivert** ($f$ voksende der $f'>0$;
  $f$ konveks der $f''>0$; toppunkt der $f'=0$ og skifter fortegn); **asymptoter**
  (vertikal ved nevner=0; horisontal via grense); **symmetri** (partallsfunksjon
  $f(-x)=f(x)$, oddetallsfunksjon $f(-x)=-f(x)$); **invers** (speiling om $y=x$).
- **Innholdskontrakt (må vises):** begrunn hvilken graf som er $f/f'/f''$ ut fra
  fortegn/monotoni; full kurvedrøfting av en rasjonal funksjon (D_f, asymptoter,
  symmetri) — «Intuisjon:».
- **Typiske feil:** bytte om $f'$ og $f''$; overse en asymptote; feil symmetriklasse;
  begrunne grafvalget uten å referere til fortegn/monotoni (sensorkrav 2).
- **Modellsvar:** «Tre grafer er tegnet. Avgjør hvilken som er $f$, $f'$ og $f''$, og
  begrunn ut fra monotoni og fortegn.»
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A funksjonstransformasjon · 10.B trigonometrisk
likning · 10.C grafgjenkjenning $f/f'/f''$ · 10.D kurvedrøfting (invers/asymptoter/
symmetri) på eksamensnivå).

### Del 11 — Lavfrekvent pensum *(prioritet: KJENNE — N, 0–8 %; dekk, vektlegg lavt)*

#### Kapittel 11.1: Newtons metode, rekker, uegentlig integral, optimering og DE-modellering
**id:** `hio-ingmatte-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-ingmatte-5-1`

- **Kapitteltype:** oversiktskapittel for lavfrekvent pensum (KJENNE).
- **Description:** De sjeldne, men mulige eksamenstemaene som *står* i pensum og på
  øvingene: **Newtons metode** (manuell iterasjon), **uendelig geometrisk rekke**
  (konvergens + sum), **uegentlig integral**, **optimering** (maks/min) og **anvendt
  DE-modellering** (utled DE fra tekst, tolk). Alle merkes eksplisitt som lavfrekvente.
- **Eksamensbelegg:** Sjanger N: Newton (1/12, 8 %, kun feb24), geometrisk rekke (1/12,
  8 %, kun feb23), uegentlig integral (1/12, 8 %), optimering (1/12, 8 %), anvendt
  DE-modellering (1/12, 8 %, radioaktiv nedbrytning juni21). Prioritet: kjenne (dekk,
  men markér lav sannsynlighet — de *kan* komme, står i pensum/øvingene).
- **Forkunnskaper/kryssbok:** kap. 2.1 (derivasjon), 3.2 (integrasjon), 5.1 (separabel
  DE). `collapsible` **Symbol- og formelliste:** Newton
  $x_{n+1}=x_n-\tfrac{f(x_n)}{f'(x_n)}$; geometrisk sum $\sum ar^n=\tfrac{a}{1-r}$ for
  $|r|<1$; uegentlig integral $\int_a^\infty f=\lim_{b\to\infty}\int_a^b f$.
- **Innholdskontrakt (flashcard-kilde):** **Newtons metode** (iterasjonsformelen,
  oppgitt antall runder fra startverdi); **geometrisk rekke** (konvergerer hviss
  $|r|<1$, sum $\tfrac{a}{1-r}$); **uegentlig integral** (grense når en grense er
  $\pm\infty$ eller integranden divergerer; konvergerer/divergerer); **optimering**
  ($f'=0$, sjekk ende-/randpunkter); **anvendt DE-modellering** (sett opp DE fra tekst,
  f.eks. radioaktiv nedbrytning $y'=-ky$ → løs → halveringstid). **Sannhetskontroll
  (DNA):** konvergensbetingelsen $|r|<1$ og optimum-vilkårene parametersjekkes før de
  påstås ubetinget.
- **Innholdskontrakt (må vises):** Newton-iterasjon 2–3 runder; geometrisk sum;
  ett uegentlig integral; radioaktiv-nedbrytning-modell (utled, løs, halveringstid)
  — hver kort, «Intuisjon:».
- **Typiske feil:** Newton — feil fortegn i formelen; rekke — bruke sumformelen når
  $|r|\geq 1$; uegentlig integral — glemme grenseovergangen; DE-modellering — feil
  fortegn på $k$.
- **Modellsvar:** «En mengde brytes ned med $y'=-ky$, $y(0)=y_0$, og halveres på 8 år.
  Finn $k$ og hvor mye som er igjen etter 20 år.»
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 11.2: Komplekse tall (sovende eksamenstema — dekkes med forbehold)
**id:** `hio-ingmatte-11-2` · **number:** 11.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-ingmatte-6-1`

- **Kapitteltype:** pensumdekning med forbehold (KJENNE).
- **Description:** Komplekse tall på kartesisk ($a+bi$), polar og eksponentialform, med
  grunnregning — **0/12 som eget eksamenstema**, men i pensum og på øving 1, OG
  komplekse røtter trengs uansett i 2.-ordens DE (Del 6). Dekkes kompakt med eksplisitt
  forbehold.
- **Eksamensbelegg:** Sjanger N-komplekse: **0/12 som egen oppgave** — «komplekse
  løsninger» opptrer bare som DE-røtter i 6.1. Står i pensum + øving 1. Prioritet:
  kjenne (dekk kort, MARKÉR at det er sovende på eksamen — jf. §1.8-ærlighet).
- **Forkunnskaper/kryssbok:** kap. 6.1 (komplekse røtter i karakteristisk likning).
  `collapsible` **Symbol- og formelliste:** $z=a+bi$, $i^2=-1$, konjugat $\bar z$,
  modulus $|z|=\sqrt{a^2+b^2}$, argument $\varphi$, polar $r(\cos\varphi+i\sin\varphi)$,
  eksponentialform $re^{i\varphi}$.
- **Innholdskontrakt (flashcard-kilde):** **kartesisk form** $z=a+bi$ med de fire
  regneartene (spesielt divisjon via konjugat); **modulus og argument**
  $|z|=\sqrt{a^2+b^2}$, $\varphi=\arctan(b/a)$ med riktig kvadrant; **polar-/
  eksponentialform** $z=re^{i\varphi}$; **Eulers formel** $e^{i\varphi}=\cos\varphi+
  i\sin\varphi$; koblingen til DE-røtter (komplekst par $\alpha\pm\beta i$ →
  $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$). Kapitlet åpner med den ærlige
  rammen: «Dette er 0/12 som egen oppgave — les det for pensumbredde og for DE-røtter,
  ikke som en høyfrekvent eksamenssjanger.»
- **Innholdskontrakt (må vises):** divisjon via konjugat; kartesisk → eksponentialform
  (med kvadrantsjekk); koblingen tilbake til 6.1.
- **Typiske feil:** feil kvadrant for argumentet; feil fortegn i konjugatet; tro at
  komplekse tall er høyfrekvent (les forbeholdet).
- **Modellsvar:** «Skriv $z=\dfrac{2+i}{1-i}$ på kartesisk form, og deretter på
  eksponentialform.»
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A Newton + geometrisk rekke · 11.B uegentlig
integral + optimering · 11.C anvendt DE-modellering (halveringstid) · 11.D komplekse
tall (regning + eksponentialform) — alle merket som lavfrekvent beredskap).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspill og løsningsoppskrifter A–N + kald bank
**id:** `hio-ingmatte-12-1` · **number:** 12.1 · **estimatedMinutes:** 65 · **prerequisites:** `hio-ingmatte-0-1`

- **Kapitteltype:** sjanger-/drillsamling + kald bank.
- **Description:** Samlet oppslag over alle sjangre A–N med én-linjes løsningsoppskrift,
  tidsbudsjett og vanligste feil, pluss en **kald bank** på 8–10 oppgaver med uvante
  vinklinger/kombinasjoner UTEN hint (fasit = momentliste), tydelig merket som kald.
- **Eksamensbelegg:** Metakapittel (hele arkivet). Speiler prognosen §7: nesten sikkert
  minst én 1.-ordens DE, minst én 2.-ordens DE (a) homogen + b) inhomogen), 2–4
  integraler, én implisitt derivasjon + tangent, én l'Hôpital; meget sannsynlig ett
  vektorinnslag, én partiellderivert, ett Taylorpolynom grad 2, ett omdreiningsvolum om
  y-aksen; sannsynlig: logaritmisk derivasjon, funksjonstransformasjon, trig likning
  eller grafgjenkjenning. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. `collapsible` **Sjangerkort A–N** (ren
  tabell: sjanger → oppskrift → tidsbudsjett → feilkode).
- **Innholdskontrakt:** sjangerkortene; kald bank (uten hint, momentliste-fasit,
  merket «kald»); difficulty-spredning (noen «(krevende)»).
- **Oppgavesjangre:** alle A–N, blandet.
- **Typiske feil:** hele registeret #1–#12.
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 12.2: Øvingseksamen 1 (10-oppgavers-mal, med A-fasit)
**id:** `hio-ingmatte-12-2` · **number:** 12.2 · **estimatedMinutes:** 80 · **prerequisites:** `hio-ingmatte-12-1`

- **Kapitteltype:** øvingseksamen (komplett sett).
- **Description:** Nyskrevet komplett sett i **10-oppgavers-malen à 10 p (100 p)**
  (2020–2023-æraen), jevn vekting, speiler temafordelingen §2: én 1.-ordens DE, én
  2.-ordens DE, 2–3 integraler, én implisitt derivasjon + tangent, én l'Hôpital, ett
  vektorinnslag, én partiellderivert, ett Taylorpolynom, ett omdreiningsvolum.
  Løsningsforslag i `collapsible` per oppgave, skrevet som A-besvarelse med
  delpoeng-notat.
- **Eksamensbelegg:** Speiler en «typisk» eksamen (analysen §7), ikke en uvanlig.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. Deklareres som «10 oppgaver à ~24 min —
  kan trygt deles over flere økter, én oppgave-blokk per økt».
- **Innholdskontrakt:** komplett sett + A-fasit; **selvdiagnose-sjekkliste** (☐) etter
  fasiten; tidsbudsjett (4 t = 240 min; forklar gjøre- vs. lesetid). l'Hôpital-oppgaven
  merkes eksplisitt «uten kalkulator».
- **Oppgavesjangre:** A–N-miks (typisk sett).
- **Typiske feil:** registeret #1–#12 (påpekt i fasit der relevant).
- **Kvote:** 8 quiz / 8 flashcards.

#### Kapittel 12.3: Øvingseksamen 2 (8-oppgavers-mal m/ delspørsmålsvekting, med A-fasit)
**id:** `hio-ingmatte-12-3` · **number:** 12.3 · **estimatedMinutes:** 80 · **prerequisites:** `hio-ingmatte-12-2`

- **Kapitteltype:** øvingseksamen (komplett sett, nyere variant).
- **Description:** Nyskrevet komplett sett i **8–9-oppgavers-malen med
  delspørsmålsvekting** (2025-æraen, ~12 delspørsmål à 10 p), der flere sammensatte
  a/b/c-oppgaver forekommer og begrunnelseskravet er eksplisitt skjerpet. Løsnings­forslag
  i `collapsible` per oppgave som A-besvarelse med delpoeng-notat.
- **Eksamensbelegg:** Speiler 2025-malen (analysen §1). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** alle temadeler. Deklareres som «9 oppgaver / ~12
  delspørsmål à ~19 min — kan deles over flere økter».
- **Innholdskontrakt:** komplett sett + A-fasit; **selvdiagnose-sjekkliste** (☐);
  tidsbudsjett. Minst én «bestått-på-marginen» (E-terskel nedenfra, ~39 %)-kommentar
  (karakter-realisme). Begrunnelseskravet «svar uten utregning godkjennes ikke»
  markeres eksplisitt.
- **Oppgavesjangre:** A–N-miks (2025-mal med delspørsmål).
- **Typiske feil:** registeret #1–#12.
- **Kvote:** 8 quiz / 8 flashcards.

**Prøve-kvote Del 12:** de 2 øvingseksamenene ER prøvene (komplette sett med fasit);
kald bank i 12.1 er den ekstra beredskapstesten.

---

## 4. Prøver (temaprøver + øvingseksamener)

Hver temadel (1–11) har **4 prøver** (temaprøver på stigende nivå, endende på
eksamensnivå), jf. listene «Prøve-kvote Del N» over. Del 0 dekkes av øvingseksamenene;
Del 12 inneholder de 2 komplette øvingseksamenene + kald bank.

**Sum temaprøver:** 11 temadeler × 4 = **44 temaprøver** + **2 øvingseksamener** = 46
prøver totalt. Kravet «≥4 prøver per temadel» er oppfylt for alle 11 temadeler.

Prøvekapitlene deklareres som «4 prøver à ~X min — kan trygt deles over flere kvelder,
én prøve per økt». Flervalg i statiske prøve-collapsibles skal ha **stokkede
fasit-bokstaver** (aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer
fasiten. Distraktorer straffer aldri grundig lesing (ligger en distraktor nær sannheten,
forklarer fasit-kommentaren hvorfor den ikke holder). Hver prøvefasit avsluttes med en
kompakt avkryssbar **selvdiagnose-sjekkliste** (☐). Deloppgaver merkes a), b), c) på
egen linje med fet merking (`**a)**`).

---

## 5. Kvotesammendrag med summeringskontroll

> Kontrollregnet per kapittel FØR totalen (README/DNA-krav). Summene under er den
> REELLE per-kapittel-summen, og gate-tallet er nettopp denne summen.

### Quiz per kapittel

| Kap | Quiz | | Kap | Quiz |
|---|---|---|---|---|
| 0.1 | 12 | | 5.3 | 18 |
| 0.2 | 12 | | 6.1 | 20 |
| 1.1 | 16 | | 6.2 | 22 |
| 1.2 | 20 | | 6.3 | 18 |
| 1.3 | 16 | | 7.1 | 18 |
| 2.1 | 18 | | 8.1 | 18 |
| 2.2 | 18 | | 8.2 | 16 |
| 2.3 | 16 | | 9.1 | 18 |
| 3.1 | 20 | | 10.1 | 16 |
| 3.2 | 20 | | 10.2 | 16 |
| 3.3 | 18 | | 11.1 | 14 |
| 4.1 | 18 | | 11.2 | 14 |
| 4.2 | 18 | | 12.1 | 20 |
| 5.1 | 20 | | 12.2 | 8 |
| 5.2 | 20 | | 12.3 | 8 |

**Delsummer (kontrollregnet):**
- Del 0: 12+12 = **24**
- Del 1: 16+20+16 = **52**
- Del 2: 18+18+16 = **52**
- Del 3: 20+20+18 = **58**
- Del 4: 18+18 = **36**
- Del 5: 20+20+18 = **58**
- Del 6: 20+22+18 = **60**
- Del 7: **18**
- Del 8: 18+16 = **34**
- Del 9: **18**
- Del 10: 16+16 = **32**
- Del 11: 14+14 = **28**
- Del 12: 20+8+8 = **36**

**Quiz totalt:** 24+52+52+58+36+58+60+18+34+18+32+28+36 = **506**

### Flashcards per kapittel

| Kap | FC | | Kap | FC |
|---|---|---|---|---|
| 0.1 | 8 | | 5.3 | 14 |
| 0.2 | 14 | | 6.1 | 22 |
| 1.1 | 16 | | 6.2 | 24 |
| 1.2 | 22 | | 6.3 | 14 |
| 1.3 | 14 | | 7.1 | 18 |
| 2.1 | 18 | | 8.1 | 22 |
| 2.2 | 20 | | 8.2 | 14 |
| 2.3 | 14 | | 9.1 | 18 |
| 3.1 | 22 | | 10.1 | 16 |
| 3.2 | 22 | | 10.2 | 16 |
| 3.3 | 14 | | 11.1 | 14 |
| 4.1 | 18 | | 11.2 | 14 |
| 4.2 | 16 | | 12.1 | 16 |
| 5.1 | 22 | | 12.2 | 8 |
| 5.2 | 22 | | 12.3 | 8 |

**Delsummer (kontrollregnet):**
- Del 0: 8+14 = **22**
- Del 1: 16+22+14 = **52**
- Del 2: 18+20+14 = **52**
- Del 3: 22+22+14 = **58**
- Del 4: 18+16 = **34**
- Del 5: 22+22+14 = **58**
- Del 6: 22+24+14 = **60**
- Del 7: **18**
- Del 8: 22+14 = **36**
- Del 9: **18**
- Del 10: 16+16 = **32**
- Del 11: 14+14 = **28**
- Del 12: 16+8+8 = **32**

**Flashcards totalt:** 22+52+52+58+34+58+60+18+36+18+32+28+32 = **500**

### Gate-tall (REELL per-kapittel-sum)

- **Quiz totalt: 506** (≥500 ✓)
- **Flashcards totalt: 500** (≥500 ✓)
- **Kapitler: 30** (≥15 ✓)
- **Temaprøver: 44** (4 per temadel × 11) + **2 øvingseksamener** (≥4 per temadel ✓)

> Merk: identitetstabellen i §1 og gate-tallene her er de SAMME reelle
> per-kapittel-summene (506 quiz / 500 flashcards). Forfatter-agenten må ALDRI gå
> under disse gulvene; å bygge noen ekstra kort/spørsmål utover gulvet er greit, men
> summen skal aldri påstås høyere enn det som faktisk bygges.

---

## 6. Opphavsrett og nyskriving

Alle oppgaver, talleksempler og modellbesvarelser i boka skal være **nyskrevne** i
samme sjanger som arkivets — endre funksjoner, tall, koeffisienter, punkter og
kontekst. Eksamensoppgaver og sensorveiledninger brukes som **grunnlag** (mønstre,
temavekting, vurderingskriterier), aldri ordrett. Matematiske uttrykk, metodenavn,
standardformler (formelheftet) og notasjon er allmenn fagnotasjon og ikke
opphavsrettslig beskyttet. Pensumlitteratur (Thomas' Calculus — kapittelnummereringen
i arkivet peker dit) refereres, aldri siteres i lengde. `competenceGoals` er Skolesagas
egne, eksamensforankrede formuleringer (destillert fra analysen), ikke kopier av HiØs
offisielle læringsutbytte.

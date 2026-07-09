# Bokskjelett: MA1301 Tallteori (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (NTNUs MA1301/MA6301-arkiv 2003–2025, 82 filer, hvorav
> **15 løsningsforslag 2014–2025 er lest i detalj** og eldre skummet).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../ma0301/SKJELETT.md` (samme NTNU-matte, samme «alt
> begrunnes»-frisvarsfag med egen bevisferdighets-del) og `../tma4110/SKJELETT.md`
> (samme institusjonsfamilie, samme regne+bevis-hybrid).
> **Viktigste kalibrering:** MA1301 er et **regne- OG bevisfag** der eksamen er
> **helt begrunnelsesbasert langsvar** — det finnes ingen fasitsvar uten vist
> metode/mellomregning. Fem søyler bærer hvert eneste sett: **Euklids algoritme**
> (100 %), **Euler/ϕ** (93 %), **kinesisk restteorem** (80 %), **Wilson** (73 %)
> og **RSA** (67 %). En student som behersker disse fem mekanisk henter ~5 av 10
> delpunkt uansett årgang. Boka gir dem tyngdepunktet, med rikelig regnetrening
> og en obligatorisk bevisbolk (induksjon 53 %, delelighet/primtall ~53 %).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1301` |
| Tittel | **MA1301 Tallteori** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Kodetilhørighet | Delt oppgavesett med **MA6301** (videreutdanningsvariant) — samme pensum og eksamensform |
| Arketype | Regnefag (variant: **regne-/bevisfag** — begrunnelsesbasert langsvar, alt begrunnes, egen bevisferdighets-del) |
| Antall kapitler | **32** (1 eksamenskart + 24 tema/drill + 3 spesialtema + 4 eksamenstrening) + 28 prøvekapitler |
| Estimert totaltid | **~2 465 min ≈ 41 timer** (tema/drill/trening; prøvekapitlene kommer i tillegg) |
| Quiz totalt | **523** (krav ≥500) |
| Flashcards totalt | **548** (krav ≥500; sikt 540–560 for et definisjons-/teoremrikt regne+bevisfag uten formelark) |

**Pitch (ett avsnitt):** MA1301 er NTNUs tallteori-emne (7,5 sp, R2 fra VGS som
opptakskrav), vurdert med **én skriftlig skoleeksamen på 4 timer** som teller
100 %, karakter A–F. Formatet er usedvanlig stabilt: **7–9 hovedoppgaver med
delpunkter**, i nyere år eksplisitt organisert som **«10 delpunkt som alle teller
likt»**, med hjelpemiddelkode **D** (bestemt, enkel kalkulator — ingen bok, ingen
formelsamling, ingen tabeller; alt regnes for hånd). Den gjennomgående
sensorinstruksen er «**Alle svar må begrunnes**» — et riktig sluttall uten metode
teller lite. Settet har en fast dramaturgi (tydelig fra ~2014): det åpner nesten
alltid med (1) en **lineær diofantisk likning / lineær kongruens via Euklids
algoritme** og (2) et **kinesisk restteorem-system**, går videre til (3) **RSA /
dekryptering** og (4) **Fermat/Euler/Wilson-restberegninger med fakultet**,
deretter (5) **kvadratiske rester / Legendre / resiprositet** og (6–8) **orden /
primitive røtter / tallteoretiske funksjoner / bevisoppgaver**. Kombinasjonen
**regneferdighet** (Euklid frem og tilbake, modulær potensopphøyning) **+ bevis**
(induksjon, motsigelse, delelighet) går igjen i hvert eneste sett. Ryggraden boka
driller er de fem søylene (Euklid 100 %, Euler/ϕ 93 %, CRT 80 %, Wilson 73 %,
RSA 67 %) pluss karakterskillerne kvadratisk resiprositet (67 %), orden/primitive
røtter (60 %) og den obligatoriske bevisoppgaven.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Alt begrunnes; vis rikelig mellomregning.** Ordrett metaregel på hvert sett
   («Alle svar må begrunnes»), skjerpet på hjelpemiddel-eksamenene (2020/2025,
   kode A): *«i og med at alle hjelpemidler er tillatt, er det viktig at svarene er
   godt begrunnet»*. Et riktig sluttall uten metode teller lite. Hvert
   løsningsforslag skrives som **A-besvarelse**: mellomregning ledd for ledd,
   navngitt teorem der argumentet bæres, verbal konklusjonssetning, sluttsvar
   markert. Dette skal prege ALLE eksempler og løsningsforslag i boka.

2. **Teoremer skal navngis når de bærer argumentet.** Sensor vil se at studenten
   kjenner navnet på resultatet: **Euklids algoritme**, **Bézout**, **det kinesiske
   restteoremet**, **Fermats lille teorem**, **Eulers teorem**, **Wilsons teorem**,
   **aritmetikkens fundamentalteorem**, **Euklids lemma**, **den kvadratiske
   resiprositetsloven**, **Eulers kriterium**. Fasitene skriver rutinemessig «ved
   Wilsons teorem», «fra Eulers teorem», «ved det kinesiske restteoremet» — et
   argument uten teoremnavn er en byggefeil.

3. **Føringsstandard for Euklid:** algoritmen føres linje for linje **frem**
   (divisjonene) og **baklengs** som eksplisitt substitusjonskjede til man har
   $\gcd(a,b)=ax+by$ (Bézout). Dette forventes fullt utskrevet, ikke bare
   sluttresultatet. Boka fører ALLE Euklid-eksempler slik.

4. **Løsbarhet før løsning; hele løsningsmengden.** Ved diofantiske likninger og
   kongruenser sjekkes og **kommenteres** løsbarhet ($d\mid c$) og antall
   inkongruente løsninger **før** man løser. Diofantiske likninger og kongruenser
   med flere løsninger skal ha **full parametrisering** ($x=x_0+(b/d)t$) eller alle
   $d$ restklasser; «minste positive» svares eksplisitt når det spørres.

5. **Effektiv potensopphøyning skal vises.** Ved store eksponenter modulo $n$ føres
   **kvadrer-og-multipliser** / eksponentreduksjon via $\phi$ — aldri «kalkulatoren
   gir …». Fasit dokumenterer mellomstegene (binærutvikling av eksponenten). Boka
   fører alle $a^N\bmod n$-utregninger slik.

6. **Alternative løsninger honoreres — lær minst to veier på kjernesjangrene.**
   Løsningsforslagene presenterer ofte to (eller tre) likeverdige metoder eksplisitt
   merket fullgode: **CRT-formel vs. suksessiv innsetting**; **induksjon vs. direkte
   argument**; **multiplikativitet vs. Euklids lemma**. Boka skal lære minst to veier
   på de fem kjernesjangrene og si eksplisitt at begge gir full uttelling.

7. **Case-analyse skal være uttømmende.** Modulo-argumenter (f.eks. $p\equiv 0/1/2
   \pmod 3$) må dekke ALLE rester; parametriseringer (pytagoreiske tripler:
   $s>t$, $\gcd(s,t)=1$, ulik paritet) må sjekke ALLE betingelser. En case-analyse
   som hopper over en rest er en byggefeil.

8. **Bevisstruktur teller for seg selv.** I induksjon kreves **eksplisitt (1)
   basissteg + (2) induksjonshypotese + (3) induksjonssteg** hver gang — fasiten
   markerer alltid stedet der hypotesen brukes. I delelighets-/primtallsbevis
   forventes at man **arbeider fra definisjonen** og navngir teoremet (Euklids lemma,
   aritmetikkens fundamentalteorem). Hvert sett har minst én ren bevisoppgave —
   bevis er obligatorisk, ikke valgfritt.

9. **Standard tallteori-notasjon er bokstandard:** $\gcd(a,b)$, $a\mid b$,
   $a\equiv b\pmod m$; $\phi(n)$ (Eulers ϕ), $\tau(n)$ (antall divisorer),
   $\sigma(n)$ (divisorsum); Legendre-symbol skrevet både $\left(\frac{a}{p}\right)$
   og som brøk; $\operatorname{ord}_n(a)$ (orden). Euklid ført som divisjonskjede +
   baklengs substitusjonskjede. Fasitspråk: «parvis relativt primiske»,
   «inkongruente løsninger modulo $m$», «minste positive tall som tilfredsstiller …»,
   «det følger av [teorem] at …». Kalkulatoren brukes til aritmetikk, aldri til å
   omgå metodene.

10. **Ærlighet om format og arkiv.** (a) Formatet er **usedvanlig stabilt** (7–9
    hovedoppgaver / «10 likt vektede delpunkt», 4 t, «alt begrunnes», fast
    dramaturgi) gjennom hele arkivet — prognosen er sikker. (b) **Hjelpemidler
    skiftet i pandemiårene** (2020/2025-kont kode A: alle hjelpemidler) — men
    normalåret er **kode D** (enkel kalkulator, intet formelark), og boka kalibreres
    mot kode D: hele apparatet må sitte utenat. (c) **Spesialtemaene roterer**:
    kjedebrøk/Pell/irrasjonalitet var faste 2007–2009, forsvant, og kjedebrøk
    gjenoppsto 2016 — de er lavfrekvente i kjernekorpuset (Del 7), men dekkes fordi
    emnebeskrivelsen holder dem åpne. (d) Der en metode ikke er dekket av skreven
    fasit, merkes den «⚠️ metode = faglig standard». Usikre referanser markeres
    *(verifiser)*.

### 1.6 Hjelpemiddel-kalibrering (skal gjengis i Del 0)

- **Kode D (normalåret):** bestemt, enkel kalkulator; **ingen bok, ingen
  formelsamling, ingen tabeller**. Alt regnes for hånd — Euklids algoritme,
  potenser modulo $n$, faktorisering. Kalkulatoren brukes til aritmetikk, ikke til
  å omgå metodene. **Alle teoremformler, ϕ-formelen, Euklid-prosedyren, kvadrer-og-
  multipliser, Legendre-regnereglene, resiprositetsloven og supplementsreglene må
  sitte utenat.** Egen «utenat»-note i hvert kapittel og en samlet utenat-bank i
  kap. 8.1.
- **Kode A (pandemi-/enkelte kont-sett, unntak):** alle hjelpemidler tillatt — men
  da er begrunnelseskravet **skjerpet** («viktig at svarene er godt begrunnet»).
  Boka trener mot det strengere kode D-kravet; kan du det uten hjelpemidler, klarer
  du det også med.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): **delelighet, Euklids
algoritme og Bézout** er fundamentet (grunnlaget for diofant, kongruens og
RSA-invers); **kongruensregning + de fire store teoremene** (Fermat, Euler/ϕ,
Wilson, CRT) er verktøykassen for restberegninger; **RSA** bygger direkte på Euler
og modulær potensopphøyning; **kvadratiske rester** (Legendre, resiprositet) er
den store karakterskilleren i settets andre halvdel; **orden, primitive røtter og
tallteoretiske funksjoner** er den «øvre» halvdelen som skiller C fra A; **bevis**
(induksjon, delelighet, primtall) er obligatorisk i hvert sett; **spesialtemaene**
(kjedebrøk, Pell, pytagoreiske tripler) roterer og dekkes kompakt; eksamens­
treningen er sist. **Frekvensen styrer omfanget**, ikke rekkefølgen: de fem søylene
(nivå 1, 67–100 %) får teori + eget drillkapittel; nivå 3-temaer (spesialtemaene)
får ett kompakt kapittel merket «bør kjenne til». Seksjonstitler (blir
`sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Presenterer den faste dramaturgien, «10 likt vektede delpunkt», kode D, de fem søylene og bevis-kravet. |
| 1 | Delelighet, Euklids algoritme og diofantiske likninger | 5 | Euklid 100 % + diofant 67 % + lineær kongruens ~67 % → **perfekt** → fundamentet får teori + drill; åpner nesten alltid settet. |
| 2 | Kongruenser og de fire store teoremene | 6 | Euler/ϕ 93 % + CRT 80 % + Wilson 73 % + Fermat 53 % → **perfekt** → verktøykassen for restberegning, tyngdepunkt + drill. |
| 3 | RSA og offentlig-nøkkel-kryptografi | 2 | RSA 67 % → **perfekt** → egen oppgave i de fleste år; teori + drill (nøkkelgenerering + effektiv potensopphøyning). |
| 4 | Kvadratiske rester og resiprositet | 3 | Legendre/resiprositet 67 % → **perfekt/kunne** → den tydelige karakterskilleren i andre halvdel; teori + drill. |
| 5 | Orden, primitive røtter og tallteoretiske funksjoner | 4 | Orden/primitive røtter 60 % + τ/σ 47 % → **kunne** → skiller C fra A; teori + drill. |
| 6 | Bevis: induksjon, delelighet og primtall | 5 | Induksjon 53 % + delelighets-/primtallsbevis ~53 % → **perfekt/kunne** → minst én bevisoppgave i hvert sett → egen bevisferdighets-del + drill. |
| 7 | Spesialtemaer: kjedebrøk, Pell og pytagoreiske tripler | 3 | Kjedebrøk ~13 %, pytagoreiske tripler 20 %, Pell/irrasjonalitet spesialtema → **kjenne** → roterende spesialstoff, kompakt, med tydelig arkivfrekvens-merking. |
| 8 | Eksamenstrening | 4 | Føringsstandard/utenat-bank + 3 komplette øvingseksamener (7–9 oppgaver / 10 likt vektede delpunkt, kode D). |

**Avvik fra DNA-malen (dokumentert):**

1. **32 tema-/treningskapitler — innenfor DNA-taket (20–35), i øvre sjikt.**
   Begrunnet i PRODUKSJONSLOYPE-lærdommen «≥500 er et gulv»: MA1301 er et
   **definisjons-, teorem- og bevisteknikkrikt regne+bevisfag** med fem ubetingede
   søyler som hver krever full dekning med drill, pluss en obligatorisk bevisbolk og
   roterende spesialstoff. Flashcard-tettheten er bevisst høy (548) fordi kode D
   krever at hele apparatet pugges uten formelark.

2. **Del 1 og Del 2 er tyngdepunktet (5 + 6 kapitler).** Dette er de to fundamentene:
   Euklid/diofant (Del 1) åpner settet, og de fire teoremene + CRT (Del 2) bærer
   restberegningene som finnes i praktisk talt hvert sett. Begge får teori + eget
   drillkapittel. Ved bygging kan Del 2 splittes på to agenter, men **begge må lese
   HELE delens kontrakter**, og delen flagges for konsistenssjekk.

3. **De fire store teoremene får hvert sitt fokuskapittel (Del 2).** Fermat, Euler/ϕ,
   Wilson og CRT er hver en egen ferdighet med egen typisk-feil-profil (Euler krever
   $\gcd=1$-sjekk; Wilson krever fortegnstriks på fakultetet; CRT krever parvis
   primiskhet). De samles i restberegning-drillen (2.6), som er signaturoppgaven
   «finn resten når du deler [uttrykk med fakultet] på [modulus]».

4. **Egen bevisferdighets-del (Del 6).** Hvert sett har minst én ren bevisoppgave, og
   **bevisstrukturen i seg selv gir uttelling**. Del 6 etablerer bevisteknikkene
   (induksjon, motsigelse, case-analyse, Euklids lemma), driller de fire
   induksjonsundertypene og de fem delelighets-/primtallsarketypene, og har eget
   bevis-drillkapittel. Bevistemaene forankres også i sine fagkapitler (aᵖ≡a i Del 2,
   ordenslemma i Del 5).

5. **Spesialtemaene (Del 7) er nivå 3, «bør kjenne til».** Kjedebrøk (~13 %),
   pytagoreiske tripler (20 %) og Pell/irrasjonalitet (spesialtema) roterer i arkivet.
   De dekkes for beredskap/karakterdifferensiering, med Eksamensvinkel-blokker som
   sier tydelig at de er lavere prioritert og angir arkivfrekvensen — men de er med
   fordi emnebeskrivelsen holder dem åpne og kjedebrøk gjenoppsto 2016.

6. **Alternative løsningsveier er bygd inn (stilregel 6).** Fordi fasitene
   konsekvent honorerer likeverdige metoder, lærer kjernekapitlene minst to veier
   (CRT-formel + suksessiv innsetting; multiplikativitet + Euklids lemma; induksjon
   + direkte). Dette er et bevisst avvik fra en «én-metode»-drill.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–K) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** lineær
diofantisk likning ($ax+by=c$, full løsningsmengde), **B** lineær kongruens
($ax\equiv b\bmod m$), **C** kinesisk restteorem (system av kongruenser), **D**
RSA / dekryptering, **E** restberegning med Fermat/Euler + Wilson
(fakultetsoppgaven), **F** kvadratiske rester / Legendre-symbol / resiprositet,
**G** orden modulo $n$ og primitive røtter, **H** tallteoretiske funksjoner
($\tau,\sigma,\phi$, multiplikativitet), **I** delelighet og primtallsteori
(bevisoppgaver), **J** induksjon, **K** spesialtema (kjedebrøk, Pell, pytagoreiske
tripler, irrasjonalitet). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

**Kryssbok-forkunnskaper (verifiserte, bygde VGS-kapitler):** tallmønstre, bevis og
induksjon er dekket på VGS-nivå og er de sterkeste ankrene — **R2**:
[Induksjonsbevis](/bok/r2/r2-1-6), [Følger og tallmønstre](/bok/r2/r2-1-1),
[Rekker og summasjon](/bok/r2/r2-1-4); **R1**: [Induksjon](/bok/r1/r1-9-2),
[Direkte bevis og moteksempler](/bok/r1/r1-9-1),
[Kontrapositiv og kontradiksjon](/bok/r1/r1-9-3),
[Polynomer og polynomdivisjon](/bok/r1/r1-1-1),
[Bevis i algebra](/bok/r1/r1-1-5); **1T**:
[Matematisk argumentasjon](/bok/1t/1t-6-1), [Lese og forstå bevis](/bok/1t/1t-6-2),
[Mengdelære](/bok/1t/1t-1-7). Kongruensregning, Euklids algoritme, de fire
teoremene, RSA, Legendre-symbol, orden/primitive røtter og de tallteoretiske
funksjonene bygges fra grunnen i boka (ingen VGS-forgjenger). Lenk kun til disse
verifiserte id-ene.

---

### Del 0 — Eksamenskartet

#### Kapittel 0.1: Eksamenskartet: fem søyler, fast dramaturgi, alt begrunnes

- **id:** `ma1301-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MA1301: den begrunnelsesbaserte 4-timers eksamenen med «10 likt vektede delpunkt», den faste dramaturgien (Euklid/diofant → CRT → RSA → Fermat/Euler/Wilson → kvadratiske rester → orden/funksjoner/bevis), de fem søylene, kode D uten formelark, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (82 filer, 2003–2025; 15 løsningsforslag 2014–2025 lest i detalj). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakter A–F, teller 100 %, hjelpemiddelkode **D** (enkel kalkulator, ingen bok/formelsamling/tabeller), **7–9 hovedoppgaver med delpunkter**, i nyere år «**10 delpunkt som alle teller likt**», helt begrunnelsesbasert langsvar («alle svar må begrunnes»); (ii) **den faste dramaturgien** (tydelig fra 2014): settet åpner med (1) lineær diofantisk likning / lineær kongruens via Euklid og (2) CRT-system, går videre til (3) RSA/dekryptering og (4) Fermat/Euler/Wilson-restberegning med fakultet, deretter (5) kvadratiske rester / Legendre / resiprositet og (6–8) orden / primitive røtter / tallteoretiske funksjoner / bevis; (iii) **de fem søylene** (nesten garantert hvert sett): Euklids algoritme (100 %), Euler/ϕ (93 %), CRT (80 %), Wilson (73 %), RSA (67 %); (iv) **temafrekvens-tabellen** (Euklid 100 %, Euler/ϕ 93 %, CRT 80 %, Wilson 73 %, RSA 67 %, diofant 67 %, Legendre/resiprositet 67 %, orden/primitive røtter 60 %, Fermat 53 %, induksjon 53 %, delelighets-/primtallsbevis ~53 %, τ/σ 47 %, pytagoreiske tripler 20 %, Fibonacci/rekursjon 20 %, kjedebrøk ~13 %, Pell/irrasjonalitet spesialtema); (v) **karakterskillene** (bestått ≈ mekanikken: Euklid frem+baklengs, ϕ via faktorisering, ett CRT-system, dekryptere RSA med gitt $d$; midtsjikt ≈ + full diofant-løsningsmengde, Euler-eksponentreduksjon med $\gcd$-sjekk, Wilson-fakultetstriks, finn $d$ i RSA selv; toppsjikt ≈ kvadratisk resiprositet sikkert, orden/primitive røtter med telling, minst én ren bevisoppgave stramt ført med navngitt teorem); (vi) **kode D-kravet**: intet formelark — ϕ-formelen, Euklid, kvadrer-og-multipliser, resiprositetsloven og supplementsreglene pugges.
- **Innholdskontrakt:** Sjangerkatalogen A–K presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære eksamen** (4 t, ~10 likt vektede delpunkt, kode D): **O1** lineær diofantisk likning via Euklid (svært sannsynlig med parameter i koeffisientene); **O2** restberegning som kombinerer Euler/Fermat (eksponentreduksjon) + Wilson (rest av $k\cdot n!\bmod p$), 2–3 delpunkt; **O3** kinesisk restteorem-system; **O4/O5** RSA (finn $d$ + dekrypter) og/eller kvadratisk kongruens via Legendre + resiprositet; **O6** orden / primitive røtter eller tallteoretisk funksjon (minste $n$ med gitt $\tau$); **O7/O8** minst én ren bevisoppgave (induksjon eller delelighet/primtall), gjerne todelt (del a beviser et lemma brukt i del b); **usikkerhetsmoment** ett roterende spesialtema (kjedebrøk/pytagoreiske tripler/Pell). **Lesestrategi**: Del 1 og 2 er fundamentet og tyngdepunktet (bruk mest tid), Del 3–4 er de høyfrekvente enkeltoppgavene, Del 5 skiller C fra A, Del 6 er den obligatoriske bevisbolken, Del 7 er beredskap, Del 8 løfter føring og utenat-beredskapen. *(Verifiser mot nyeste tilgjengelige sett etter 2025 før endelig kalibrering.)*
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en utenat-plan for det kode D krever (ϕ-formelen, Euklid frem+baklengs, kvadrer-og-multipliser, resiprositetsloven, supplementsregelen for $(2/p)$)»; «hvilke fem søyler er nesten garantert — og hvordan fordeler du 4 timer på ~10 delpunkt (~24 min per delpunkt)?»; «hvert sett har minst én ren bevisoppgave — hvilke bevistyper går igjen (induksjon, delelighet, primtall), og hva kjennetegner et fullt uttellende bevis?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de fem søylene; undervurdere Euklid (100 % — bærer diofant, kongruens OG RSA-invers); regne med kalkulator-refleks som ikke finnes under kode D; hoppe over bevis-treningen (minst én bevisoppgave hvert sett); oppgi et sluttall uten metode (teller lite); glemme «hele løsningsmengden» / «minste positive».
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog A–K, den faste dramaturgien, kode D, de fem søylene, sensorreglene, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Delelighet, Euklids algoritme og diofantiske likninger *(prioritet: PERFEKT — fundamentet, Euklid 100 %, diofant 67 %, lineær kongruens ~67 %)*

#### Kapittel 1.1: Delelighet, primtall og aritmetikkens fundamentalteorem

- **id:** `ma1301-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Grunnbegrepene faget hviler på: delelighet a|b, primtall, entydig primtallsfaktorisering (aritmetikkens fundamentalteorem), Euklids lemma og gcd/lcm via faktorisering — arbeidshestene i alt som kommer.
- **Forkunnskaper (kryssbok):** Ingen i boka. [Polynomer og polynomdivisjon](/bok/r1/r1-1-1) (divisjon med rest som analogi), [Mengdelære](/bok/1t/1t-1-7). Selve talldelbarheten bygges fra grunnen her.
- **Eksamensbelegg:** Grunnlag for sjanger A/B/C/I. Fasitens grep: faktoriser i primtall, bruk aritmetikkens fundamentalteorem og Euklids lemma i delelighetsargumenter. Prioritet: **perfekt** (fundamentet under alt).
- **Innholdskontrakt:** **Delelighet** $a\mid b$ (det finnes $t$ med $b=at$) og regnereglene ($a\mid b, a\mid c\Rightarrow a\mid(bx+cy)$); **divisjonsalgoritmen** $a=qb+r$, $0\le r<b$; **primtall** og sammensatte tall; **aritmetikkens fundamentalteorem** (entydig primtallsfaktorisering); **Euklids lemma** ($p\mid ab\Rightarrow p\mid a$ eller $p\mid b$); **gcd og lcm** via primtallsfaktorisering og relasjonen $\gcd(a,b)\cdot\operatorname{lcm}(a,b)=ab$; **relativt primiske** tall; at det finnes uendelig mange primtall (Euklids klassiske bevis, som forvarsel til Del 6). Alt til aktiv bruk (Euklids lemma og fundamentalteoremet er bevisverktøy i Del 6).
- **Oppgavesjangre:** I-forberedelse. Mønstereksempel: «Faktoriser $360$ i primtall, og bruk faktoriseringen til å finne $\gcd(360,84)$ og $\operatorname{lcm}(360,84)$.»
- **Typiske feil:** Blande $a\mid b$ (a deler b) og $b\mid a$; anta at ethvert tall har entydig faktorisering uten å navngi fundamentalteoremet; bruke $p\mid ab\Rightarrow p\mid a$ **og** $p\mid b$ (galt — «eller»); regnefeil i gcd/lcm via faktorisering.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 1.2: Euklids algoritme frem og baklengs (Bézout)

- **id:** `ma1301-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-1-1`
- **kapitteltype:** teori
- **description:** Fagets aller viktigste teknikk: Euklids algoritme som divisjonskjede for å finne gcd, og den baklengs substitusjonskjeden som skriver gcd = ax+by (Bézout) — føringen sensor krever fullt utskrevet, og motoren bak diofant, invers og RSA.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (divisjonsalgoritmen, gcd).
- **Eksamensbelegg:** Sjanger A/B/D-motor, **100 %** — Euklid brukes i praktisk talt hvert delpunkt om diofant, lineær kongruens og RSA-invers, og åpner nesten alltid settet. Fasitens grep: før divisjonene linje for linje **frem**, deretter **baklengs** som eksplisitt substitusjonskjede til $\gcd=ax+by$. Prioritet: **perfekt** (den enkeltteknikken som bærer mest av eksamen).
- **Forkunnskaper/Symbol- og formelliste:** $\gcd(a,b)$, Bézout-koeffisienter $x,y$, divisjonskjeden $r_{k-1}=q_{k+1}r_k+r_{k+1}$.
- **Eksamensbelegg (utdypet):** «Føringsstandard for Euklid» (sensorregel §1.5.3): frem OG baklengs forventes fullt utskrevet — gcd alene uten Bézout-koeffisientene gir trekk.
- **Innholdskontrakt:** **Euklids algoritme** som gjentatt divisjon med rest (divisjonskjede til rest 0; siste ikke-null rest = gcd); **baklengs substitusjon** — start fra nest siste linje, substituer oppover til $\gcd(a,b)=ax+by$; **Bézout-identiteten** ($\gcd(a,b)$ er den minste positive lineærkombinasjonen $ax+by$); parameter-i-koeffisient-varianten (vis $\gcd=1$ ved å presentere $1$ som eksplisitt lineærkombinasjon av f.eks. $5a-3$ og $2a-1$); den utvidede Euklids algoritme (tabellform) som alternativ føring. Alt til aktiv bruk; kode D — regnes for hånd.
- **Oppgavesjangre:** A-motor. Mønstereksempel: «Bruk Euklids algoritme til å finne $\gcd(582,402)$, og skriv gcd på formen $582x+402y$ ved baklengs substitusjon.»
- **Typiske feil:** **Euklid baklengs slurves** (feil i substitusjonskjeden), eller man oppgir bare gcd uten Bézout-koeffisientene — da faller resten av diofant-/invers-oppgaven; regnefeil i divisjonene; stopper baklengs-kjeden for tidlig.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.3: Lineære diofantiske likninger (ax + by = c)

- **id:** `ma1301-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-1-2`
- **kapitteltype:** teori
- **description:** Den klassiske oppgave 1: løs ax+by=c i heltall — sjekk løsbarhet (gcd|c), finn én løsning via Bézout, skaler opp, og skriv HELE løsningsmengden med t-parameter, slik sensor krever.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (Euklid + Bézout).
- **Eksamensbelegg:** Sjanger A, **~67 %**, nesten alltid oppgave 1. Fasitens grep: $d=\gcd(a,b)$, sjekk $d\mid c$, finn Bézout, skaler med $c/d$, skriv $x=x_0+(b/d)t$, $y=y_0-(a/d)t$. Prioritet: **perfekt** (billige poeng med kjent oppskrift).
- **Innholdskontrakt:** **Løsbarhetskriteriet** $d\mid c$ (der $d=\gcd(a,b)$; ellers ingen løsning — kommenteres først); **partikulærløsning** via Bézout skalert med $c/d$; **hele løsningsmengden** $x=x_0+(b/d)t$, $y=y_0-(a/d)t$, $t\in\mathbb Z$; **parameter-i-koeffisient-varianten** (vis $\gcd=1$ via lineærkombinasjon); løsninger i et gitt intervall (finn hvilke $t$-verdier som treffer); «minste positive»-varianten. Alt til aktiv bruk; hele løsningsmengden ALLTID.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn samtlige heltallsløsninger av $582x+402y=6$, og angi den generelle løsningen.»
- **Typiske feil:** **Glemmer å skalere opp** (finner $\gcd=ax_0+by_0$ men glemmer å gange med $c/d$); **bare én løsning oppgitt** (unnlater t-parametriseringen); glemmer å sjekke $d\mid c$ først; feil fortegn på retningsvektoren; glemmer «minste positive» når det spørres.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.4: Lineære kongruenser (ax ≡ b mod m)

- **id:** `ma1301-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-1-3`
- **kapitteltype:** teori
- **description:** Kongruensspråket og lineær kongruens ax≡b (mod m): løsbarhet (gcd|b), antall inkongruente løsninger, forkorting, og modulær invers via Euklid — broen mellom diofant, CRT og RSA.
- **Forkunnskaper (kryssbok):** Kap. 1.2–1.3.
- **Eksamensbelegg:** Sjanger B, inngår i **~67 %** (ofte del av diofant-/RSA-/CRT-oppgaver). Fasitens grep: $d=\gcd(a,m)$; løsbar $\Leftrightarrow d\mid b$, gir $d$ inkongruente løsninger mod $m$; forkort med $d$ (deler også modulusen); finn invers via Euklid baklengs. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kongruens** $a\equiv b\pmod m$ og regnereglene (addisjon, multiplikasjon, potens; forkorting krever $\gcd$-betingelse); **restklasser** modulo $m$; **lineær kongruens** $ax\equiv b\pmod m$: løsbarhet $d\mid b$ (der $d=\gcd(a,m)$), **antall inkongruente løsninger = $d$**; **forkorting** av kongruensen med $d$ (deler $a$, $b$ OG $m$); **modulær invers** $a^{-1}$ når $\gcd(a,m)=1$, funnet via Euklid baklengs; liste alle $d$ løsninger som $x_0+k(m/d)$. Alt til aktiv bruk; kommenter løsbarhet og antall før løsning.
- **Oppgavesjangre:** B. Mønstereksempel: «Løs $164x\equiv 64\pmod{200}$, og oppgi alle inkongruente løsninger.»
- **Typiske feil:** Glemmer å oppgi **alle $d$ inkongruente løsninger**; forkorter kongruensen uten å dele modulusen; **forkorter med et tall som ikke er relativt primisk til modulusen**; regner invers feil (Euklid baklengs-slurv); glemmer å sjekke $d\mid b$.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.5: Drill: Euklid, diofant og lineær kongruens

- **id:** `ma1301-1-5` · **number:** 1.5 · **estimatedMinutes:** 85 · **prerequisites:** `ma1301-1-4`
- **kapitteltype:** drill
- **description:** Hele oppgave-1-repertoaret drillet til automatikk: Euklid frem+baklengs uten regnefeil, full diofant-løsningsmengde, parameter-i-koeffisient, og lineær kongruens med alle inkongruente løsninger — teknikken som må sitte før alt annet.
- **Eksamensbelegg:** Dekker sjanger A + B samlet (Euklid 100 %, diofant/kongruens ~67 %). Variantkatalogen: Euklid + Bézout, diofant med full løsningsmengde, parameter-i-koeffisient, løsninger i intervall, lineær kongruens med forkorting, modulær invers. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritme): (1) Euklid frem til gcd; (2) baklengs til Bézout; (3) sjekk løsbarhet ($d\mid c$ / $d\mid b$); (4) skaler til partikulærløsning; (5) skriv hele løsningsmengden / alle $d$ restklasser; (6) svar «minste positive» eksplisitt om spurt. **Gjennomregnet «oppgave 1-case»** med sensor-margnotater om føringspoengene (vis Euklid begge veier, kommenter løsbarhet, oppgi hele mengden). **10–15 oppgaver på eksamensnivå**: minst tre Euklid+Bézout, tre diofant (én parameter-i-koeffisient, én intervall), tre lineær kongruens, to modulær invers, ett «minste positive». Fører også den utvidede Euklids algoritme som alternativ.
- **Oppgavesjangre:** A/B, alle varianter. Mønstereksempel: «(a) Finn $\gcd(1001,357)$ og skriv den som lineærkombinasjon. (b) Løs $357x\equiv 21\pmod{1001}$, alle inkongruente løsninger. (c) Angi den minste positive.»
- **Typiske feil:** Regnefeil under tidspress; ufullstendig løsningsmengde/inkongruente løsninger; Euklid baklengs-slurv; glemt løsbarhetssjekk; glemt «minste positive».
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Kongruenser og de fire store teoremene *(prioritet: PERFEKT — restberegningenes verktøykasse: Euler/ϕ 93 %, CRT 80 %, Wilson 73 %, Fermat 53 %; delen kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 2.1: Eulers ϕ-funksjon og Eulers teorem

- **id:** `ma1301-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-1-4`
- **kapitteltype:** teori
- **description:** ϕ(n) via faktorisering (ϕ(pᵏ)=pᵏ−pᵏ⁻¹ og multiplikativitet), Eulers teorem aᵠ⁽ⁿ⁾≡1 med gcd-betingelsen, og eksponentreduksjon for å regne aᴺ mod n — den hyppigste restberegningsteknikken i faget.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (kongruens, modulær invers), 1.1 (faktorisering).
- **Eksamensbelegg:** Sjanger E, **~93 % — den hyppigste enkeltmekanismen**. Fasitens grep: faktoriser modulusen, regn $\phi(n)$, **sjekk $\gcd(a,n)=1$**, reduser eksponenten mod $\phi(n)$, regn resten med kvadrer-og-multipliser. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Eulers ϕ-funksjon**: definisjon (antall $\le n$ relativt primiske til $n$), **$\phi(p^k)=p^k-p^{k-1}$**, **multiplikativitet** $\phi(mn)=\phi(m)\phi(n)$ for $\gcd(m,n)=1$, generell formel $\phi(n)=n\prod_{p\mid n}(1-1/p)$; **Eulers teorem** $a^{\phi(n)}\equiv 1\pmod n$ **når $\gcd(a,n)=1$**; **eksponentreduksjon** (reduser eksponent mod $\phi(n)$); håndtering av tilfellet $\gcd(a,n)\ne 1$ (kan IKKE bruke Euler — argumenter via CRT-splitting eller direkte); **effektiv modulær potensopphøyning** (kvadrer-og-multipliser, binærutvikling av eksponenten). Alt til aktiv bruk; $\gcd$-sjekken er obligatorisk.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn resten når $7^{402}$ deles på $100$.» (ϕ(100)=40, gcd(7,100)=1, reduser 402 mod 40.)
- **Typiske feil:** **Bruker Euler når $\gcd(a,n)\ne 1$** (dokumentert felle — eksplisitt advart i fasit); **feil ϕ ved primtallspotenser** (regner $\phi(p^k)=p^k-1$ i stedet for $p^k-p^{k-1}$); glemmer multiplikativiteten ved sammensatte moduler; hopper over kvadrer-og-multipliser («kalkulatoren gir …»).
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.2: Fermats lille teorem

- **id:** `ma1301-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `ma1301-2-1`
- **kapitteltype:** teori
- **description:** Fermats lille teorem aᵖ⁻¹≡1 (mod p) som eget verktøy i restberegninger og som byggekloss i bevis — spesialtilfellet av Euler for primtallsmodulus, med den flytende grensen mot Euler tydeliggjort.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (Euler — Fermat er spesialtilfellet).
- **Eksamensbelegg:** Sjanger E/I, **~53 %** som selvstendig verktøy og som bevisbyggekloss (aᵖ≡a). Fasitens grep: for primtallsmodulus $p$, reduser eksponenten mod $p-1$. Prioritet: **kunne**, men grensen mot Euler må sitte.
- **Innholdskontrakt:** **Fermats lille teorem** $a^{p-1}\equiv 1\pmod p$ når $p\nmid a$, og formen $a^p\equiv a\pmod p$ for ALLE $a$; forholdet til Euler ($\phi(p)=p-1$); eksponentreduksjon mod $p-1$ for primtallsmodulus; bruk som byggekloss i bevis (aᵖ≡a via Fermat eller induksjon — bro til Del 6); et kort bevis av Fermat (via Euler eller via $p\mid\binom{p}{k}$). Alt til aktiv bruk.
- **Oppgavesjangre:** E/I. Mønstereksempel: «Bruk Fermats lille teorem til å finne resten når $3^{100}$ deles på $7$.»
- **Typiske feil:** Bruker $a^{p-1}\equiv 1$ når $p\mid a$ (da gjelder $a^p\equiv a$, ikke $a^{p-1}\equiv 1$); reduserer eksponenten mod $p$ i stedet for $p-1$; blander Fermat (primtallsmodulus) og Euler (generell modulus).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.3: Wilsons teorem og fakultets-triksene

- **id:** `ma1301-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-2-1`
- **kapitteltype:** teori
- **description:** Wilsons teorem (p−1)!≡−1 (mod p) og signaturtrikset: rest av k·(n!) mod p ved å skrive de manglende faktorene p−1, p−2, … som −1, −2, … og forkorte — nesten alltid koblet til fakultetsoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.4 (invers modulo p).
- **Eksamensbelegg:** Sjanger E, **~73 %**, nesten alltid koblet til rest av $k\cdot n!\bmod p$. Fasitens grep: bruk $(p-1)!\equiv -1$, skriv de manglende faktorene som negative rester, forkort. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Wilsons teorem** $(p-1)!\equiv -1\pmod p$ for primtall $p$ (og at det IKKE gjelder for sammensatte); intuisjonen (invers-parring, bare $1$ og $p-1$ er egne inverser); **fakultets-trikset** for rest av $k\cdot m!\bmod p$: skriv $(p-1)!\equiv -1$, uttrykk de manglende faktorene $p-1,p-2,\dots$ som $-1,-2,\dots\bmod p$, forkort; kombinasjon med invers (del på et tall = gang med inversen). Alt til aktiv bruk; fortegnene er kritiske.
- **Oppgavesjangre:** E. Mønstereksempel: «La $p=101$. Finn resten når $5\cdot 98!$ deles på $101$.» (Bruk Wilson: $100!\equiv -1$, skriv $99\cdot 100\equiv(-2)(-1)$, forkort.)
- **Typiske feil:** **Wilson-triks feilfortegn** (skriver $p-1,p-2,\dots$ som $+1,+2$ i stedet for $-1,-2$); forkorter med et tall som ikke er relativt primisk til $p$; bruker Wilson for sammensatt modulus; regnefeil i invers-parringen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.4: Det kinesiske restteoremet (CRT)

- **id:** `ma1301-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-1-4`
- **kapitteltype:** teori
- **description:** System av lineære kongruenser løst med CRT: sjekk parvis primiskhet, forenkle hver kongruens, og løs med enten CRT-formelen (Nₖ = M/mₖ) ELLER suksessiv innsetting — begge fullgode, pluss ikke-primisk-modul-ryddingen.
- **Forkunnskaper (kryssbok):** Kap. 1.4 (lineær kongruens, invers).
- **Eksamensbelegg:** Sjanger C, **~80 %**, vanligvis oppgave 2 eller 3. Fasitens grep: sjekk parvis primiskhet (påpekes eksplisitt), forenkle hver kongruens, løs med CRT-formel eller suksessiv innsetting. Prioritet: **perfekt** (lær begge metoder — stilregel 6).
- **Innholdskontrakt:** **Det kinesiske restteoremet**: for parvis relativt primiske moduler $m_1,\dots,m_k$ har systemet $x\equiv b_i\pmod{m_i}$ en entydig løsning mod $M=\prod m_i$; **CRT-formelen** $N_k=M/m_k$, løs $N_kx_k\equiv 1\pmod{m_k}$, sett $x\equiv\sum b_kN_kx_k\pmod M$; **suksessiv innsetting** (alternativ, fullgod — stilregel 6); **forenkling først** (forkort, reduser koeffisient mod modulus); **ikke-primisk-modul-varianten**: bruk «$a\equiv b\pmod{mn}\Leftrightarrow a\equiv b\pmod m$ og $\pmod n$» til å splitte/rydde; **uløselig-varianten** (utled motsigelse modulo en felles faktor); «minste positive». Begge hovedmetoder føres komplett.
- **Oppgavesjangre:** C. Mønstereksempel: «Finn det minste positive heltallet $x$ med $x\equiv 0\pmod 9$, $x\equiv 2\pmod 4$ og $x\equiv 1\pmod 5$.»
- **Typiske feil:** **CRT uten å sjekke parvis primiskhet** (anvender standardformelen når modulusene har felles faktorer); glemmer å forenkle først; regnefeil i $N_kx_k\equiv 1$-inversene; glemmer «minste positive»; blander sammen $b_k$-ene i formelen.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.5: Restberegning: eksponentreduksjon møter Wilson (fakultetsoppgaven)

- **id:** `ma1301-2-5` · **number:** 2.5 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-2-3`
- **kapitteltype:** teori
- **description:** Signaturoppgaven som kombinerer de fire teoremene: «finn resten når [stort uttrykk, ofte med fakultet] deles på [modulus]» — faktoriser modulus → ϕ → Euler-reduksjon av eksponent → Wilson-triks på fakultetet, med gcd-tilfellene håndtert.
- **Forkunnskaper (kryssbok):** Kap. 2.1–2.4 (Euler, Fermat, Wilson, CRT).
- **Eksamensbelegg:** Sjanger E, **i praktisk talt hvert sett fra 2014** (Euler-varianten 93 %, Wilson-varianten 73 %, svært ofte i samme oppgave, 2–3 delpunkt). Fasitens grep: to sammenvevde teknikker (eksponentreduksjon + Wilson-triks), $\gcd\ne 1$-tilfellet håndteres separat (ofte via CRT-splitting). Prioritet: **perfekt** (den mest belagte restberegningen).
- **Innholdskontrakt:** **Den samlede restberegningsalgoritmen**: (1) faktoriser modulus; (2) for sammensatt modulus, splitt via CRT om nyttig; (3) sjekk $\gcd(a,n)$; (4) reduser eksponent mod $\phi(n)$ (Euler) eller mod $p-1$ (Fermat); (5) for fakultet i uttrykket, bruk Wilson-trikset; (6) sett sammen (CRT om splittet). **$\gcd(a,n)\ne 1$-tilfellet**: kan ikke bruke Euler direkte — splitt modulus i primtallspotenser (CRT), eller argumenter direkte. Gjennomgående navngitte teoremer. Alt til aktiv bruk.
- **Oppgavesjangre:** E (sammensatt). Mønstereksempel: «Finn resten når $3\cdot 12!+7^{250}$ deles på $13$.» (Wilson på $12!\equiv -1$; Fermat på $7^{250}$ med $250\bmod 12$.)
- **Typiske feil:** Bruker Euler uten $\gcd$-sjekk; feil ϕ; Wilson-fortegnsfeil; glemmer å splitte sammensatt modulus når $\gcd\ne 1$; setter feil sammen etter CRT-splitting; hopper over kvadrer-og-multipliser.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.6: Drill: restberegning med de fire teoremene og CRT

- **id:** `ma1301-2-6` · **number:** 2.6 · **estimatedMinutes:** 85 · **prerequisites:** `ma1301-2-5`
- **kapitteltype:** drill
- **description:** Hele restberegning- og CRT-repertoaret drillet: aᴺ mod n via Euler/Fermat, rest av k·n! mod p via Wilson, CRT-system via begge metoder, og den sammensatte fakultetsoppgaven — verktøykassen som gir flest delpunkt i hvert sett.
- **Eksamensbelegg:** Dekker sjanger C + E samlet (Euler 93 %, CRT 80 %, Wilson 73 %, Fermat 53 %). Variantkatalogen: eksponentreduksjon med/uten $\gcd=1$, Wilson-fakultetstriks, CRT via formel og via suksessiv innsetting, ikke-primisk-modul-rydding, sammensatt fakultetsoppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift** per sjanger (Euler-reduksjon; Wilson-triks; CRT to veier; sammensatt) samlet som algoritmekort. **Gjennomregnet eksamenscase** (sammensatt fakultetsoppgave) med sensor-margnotater (navngi teoremet, vis $\gcd$-sjekk, dokumenter kvadrer-og-multipliser). **12–15 oppgaver på eksamensnivå**: minst tre $a^N\bmod n$ (én med $\gcd\ne 1$), tre Wilson-fakultet, tre CRT (én via hver metode, én ikke-primisk), tre sammensatte. Fører alternativ metode der fasit gjør det.
- **Oppgavesjangre:** C/E, alle varianter. Mønstereksempel: «(a) Finn resten når $2^{1000}$ deles på $77$ (CRT-splitting). (b) Finn resten når $6\cdot 15!$ deles på $17$.»
- **Typiske feil:** $\gcd$-sjekk glemt; Wilson-fortegn; CRT uten parvis primiskhet; feil ϕ; regnefeil under tidspress i kvadrer-og-multipliser.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — RSA og offentlig-nøkkel-kryptografi *(prioritet: PERFEKT — RSA 67 %, egen oppgave i de fleste år)*

#### Kapittel 3.1: RSA: nøkkelgenerering, kryptering og dekryptering

- **id:** `ma1301-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-2-1`
- **kapitteltype:** teori
- **description:** RSA-algoritmen fra ende til ende: n=pq, ϕ(n)=(p−1)(q−1), finn d fra e·d≡1 mod ϕ(n) via Euklid, krypter/dekrypter med effektiv potensopphøyning — og korrekthetsbeviset (Mᵉ)ᵈ≡M via Euler/Fermat.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (Euler), 1.4 (modulær invers), 1.2 (Euklid baklengs).
- **Eksamensbelegg:** Sjanger D, **~67 %**, nesten alltid egen oppgave. Fasitens grep: $\phi(n)=(p-1)(q-1)$, finn $d$ via $ed\equiv 1\pmod{\phi(n)}$ (Euklid), dekrypter $m\equiv c^d\pmod n$ med kvadrer-og-multipliser. Prioritet: **perfekt**.
- **Innholdskontrakt:** **RSA-oppsettet**: $n=pq$ ($p,q$ primtall), $\phi(n)=(p-1)(q-1)$, offentlig nøkkel $(n,e)$ med $\gcd(e,\phi(n))=1$, privat $d$ løst fra $ed\equiv 1\pmod{\phi(n)}$ (Euklid baklengs); **kryptering** $c\equiv m^e\pmod n$; **dekryptering** $m\equiv c^d\pmod n$ med **effektiv modulær potensopphøyning** (binærutvikling av eksponenten, kvadrer-og-multipliser — fasit dokumenterer mellomstegene); **korrekthetsbeviset** $(m^e)^d\equiv m\pmod n$ (via Euler/Fermat og $ed\equiv 1$); bygg et helt nøkkelpar fra oppgitte $p,q,e$. Alt til aktiv bruk; potensopphøyningen føres.
- **Oppgavesjangre:** D. Mønstereksempel: «I et RSA-system er den offentlige nøkkelen $(n,e)=(253,13)$. Finn dekrypteringseksponenten $d$ og dekrypter meldingen $c=4$.»
- **Typiske feil:** Regner $\phi(n)$ feil (bruker $n$ i stedet for $(p-1)(q-1)$, eller feil ved primtallspotens); finner $d$ feil (Euklid baklengs-slurv); hopper over kvadrer-og-multipliser; blander $e$ og $d$; glemmer å navngi Euler/Fermat i korrekthetsargumentet.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.2: Drill: RSA fra nøkkelpar til dekryptering

- **id:** `ma1301-3-2` · **number:** 3.2 · **estimatedMinutes:** 70 · **prerequisites:** `ma1301-3-1`
- **kapitteltype:** drill
- **description:** Hele RSA-oppgaven drillet: bygg nøkkelpar fra p, q, e, finn d via Euklid, krypter og dekrypter med kvadrer-og-multipliser, og før korrekthetsbeviset — de tre variantene fasitene bruker.
- **Eksamensbelegg:** Dekker sjanger D samlet (~67 %). Variantkatalogen: dekrypter med gitt $d$, finn $d$ selv og dekrypter, bygg helt nøkkelpar, forklar/bevis $(m^e)^d\equiv m$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: (1) $\phi(n)=(p-1)(q-1)$; (2) $\gcd(e,\phi(n))=1$-sjekk; (3) $d$ via Euklid baklengs; (4) potens via kvadrer-og-multipliser. **Gjennomregnet eksamenscase** med sensor-margnotater (vis Euklid for $d$, dokumenter potenstrinnene). **10–12 oppgaver på eksamensnivå**: minst tre finn-$d$-og-dekrypter, to bygg nøkkelpar, to krypter, to dekrypter med kvadrer-og-multipliser, ett korrekthetsbevis. Fører potensopphøyningen fullt.
- **Oppgavesjangre:** D, alle varianter. Mønstereksempel: «Med $p=11$, $q=23$, $e=7$: (a) bygg RSA-nøkkelparet. (b) Krypter $m=6$. (c) Bevis at dekrypteringen gjenoppretter $m$.»
- **Typiske feil:** ϕ-feil; $d$-feil; potensfeil (glemt kvadrer-og-multipliser); ikke navngi Euler/Fermat i beviset.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Kvadratiske rester og resiprositet *(prioritet: PERFEKT/KUNNE — Legendre/resiprositet 67 %, den tydelige karakterskilleren i settets andre halvdel)*

#### Kapittel 4.1: Kvadratiske rester, Legendre-symbolet og Eulers kriterium

- **id:** `ma1301-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-2-2`
- **kapitteltype:** teori
- **description:** Når har x²≡a (mod p) løsning? Legendre-symbolet (a/p), dets fullstendige multiplikativitet og periodisitet, og Eulers kriterium (a/p)≡a^((p−1)/2) — verktøyene før resiprositetsloven.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (Fermat), 1.4 (kongruens).
- **Eksamensbelegg:** Sjanger F-grunnlag, **~67 %** (samlet). Fasitens grep: bruk multiplikativitet og periodisitet til å redusere $(a/p)$, evt. Eulers kriterium. Prioritet: **perfekt** (karakterskiller).
- **Innholdskontrakt:** **Kvadratisk rest** modulo $p$ (finnes $x$ med $x^2\equiv a$); **Legendre-symbolet** $\left(\frac{a}{p}\right)\in\{1,-1,0\}$; **fullstendig multiplikativitet** $\left(\frac{ab}{p}\right)=\left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$; **periodisitet** ($\left(\frac{a}{p}\right)$ avhenger bare av $a\bmod p$ — reduser først); **Eulers kriterium** $\left(\frac{a}{p}\right)\equiv a^{(p-1)/2}\pmod p$; **antall kvadratiske rester** ($(p-1)/2$ stk); konklusjon «to løsninger» ($+1$) eller «ingen løsning» ($-1$); summen $\sum_{a=1}^{p-1}\left(\frac{a}{p}\right)=0$. Alt til aktiv bruk; reduser $a\bmod p$ FØR beregning.
- **Oppgavesjangre:** F. Mønstereksempel: «Bruk Eulers kriterium til å avgjøre om $x^2\equiv 7\pmod{11}$ har løsning.»
- **Typiske feil:** Reduserer ikke $a\bmod p$ først (bryter periodisiteten); forveksler multiplikativitet med additivitet; feil eksponent $(p-1)/2$ i Eulers kriterium; konkluderer «én løsning» i stedet for «to».
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.2: Kvadratisk resiprositet og supplementsreglene

- **id:** `ma1301-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-4-1`
- **kapitteltype:** teori
- **description:** Den kvadratiske resiprositetsloven (p/q)(q/p)=(−1)^… og supplementsreglene for (−1/p) og (2/p) — regnereglene som må automatiseres for å avgjøre løsbarhet effektivt, med hele reduksjonsmaskineriet.
- **Forkunnskaper (kryssbok):** Kap. 4.1 (Legendre, multiplikativitet).
- **Eksamensbelegg:** Sjanger F, **~67 %** — kjernen i Legendre-oppgaven. Fasitens grep: bruk multiplikativitet til å splitte, supplementsreglene for $-1$ og $2$, resiprositetsloven for å snu odde primtall, periodisitet mellom hvert steg. Prioritet: **perfekt** (der karakteren sitter i andre halvdel).
- **Innholdskontrakt:** **Kvadratisk resiprositetslov** $\left(\frac{p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}$ for ulike odde primtall; **supplementsregel 1** $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ($=1$ hvis $p\equiv 1\pmod 4$); **supplementsregel 2** $\left(\frac{2}{p}\right)=(-1)^{(p^2-1)/8}$ ($=1$ hvis $p\equiv\pm 1\pmod 8$); **reduksjonsalgoritmen**: faktoriser $a$, splitt symbolet (multiplikativitet), håndter $-1$ og $2$ med supplementsreglene, snu odde primtall med resiprositet, reduser mod hvert steg (periodisitet), gjenta til alt er $\pm 1$; kobling til primitiv rot (primitive røtter er aldri kvadratiske rester — bro til Del 5). Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «Avgjør om kongruensen $x^2\equiv 45\pmod{59}$ har løsning.»
- **Typiske feil:** **Glemmer fortegnsfaktoren** $(-1)^{\frac{p-1}{2}\frac{q-1}{2}}$ i resiprositetsloven; **forveksler supplementsregelen for $(2/p)$**; **reduserer ikke $a\bmod p$ først** (periodisitet); regnefeil i pariteten $\pmod 4$ / $\pmod 8$; glemmer å faktorisere $a$ før splitting.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.3: Drill: Legendre-symbol og resiprositet

- **id:** `ma1301-4-3` · **number:** 4.3 · **estimatedMinutes:** 75 · **prerequisites:** `ma1301-4-2`
- **kapitteltype:** drill
- **description:** Hele Legendre-repertoaret drillet til automatikk: reduser (a/p) via multiplikativitet, supplementsregler og resiprositetsloven til et sikkert svar «to løsninger» eller «ingen løsning» — regnereglene som må sitte utenat under kode D.
- **Eksamensbelegg:** Dekker sjanger F samlet (~67 %). Variantkatalogen: avgjør løsbarhet av $x^2\equiv a\pmod p$, sammensatt $a$, supplementsregel-tilfeller, Eulers kriterium som alternativ, summér Legendre-symboler. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift** (reduksjonsalgoritmen fra 4.2 som algoritmekort). **Gjennomregnet eksamenscase** med sensor-margnotater (navngi resiprositetsloven, vis paritetssjekkene). **10–15 oppgaver på eksamensnivå**: minst fire løsbarhet med resiprositet, tre med $2$/$-1$-supplement, to sammensatt $a$, to Eulers kriterium, ett «summér symbolene». Fører Eulers kriterium som alternativ vei der relevant.
- **Oppgavesjangre:** F, alle varianter. Mønstereksempel: «Avgjør ved kvadratisk resiprositet om $x^2\equiv 30\pmod{53}$ har løsning, og oppgi antall løsninger.»
- **Typiske feil:** Fortegnsfaktor glemt; supplementsregel forvekslet; ikke redusert mod $p$; paritetsfeil.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Orden, primitive røtter og tallteoretiske funksjoner *(prioritet: KUNNE — orden/primitive røtter 60 %, τ/σ 47 %; den «øvre» halvdelen som skiller C fra A)*

#### Kapittel 5.1: Orden modulo n og «orden deler ϕ(n)»

- **id:** `ma1301-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-2-1`
- **kapitteltype:** teori
- **description:** Ordenen til a mod n (minste k med aᵏ≡1), det sentrale lemmaet «orden deler ϕ(n)» (ofte selv en bevisdel), og metoden for å finne orden ved å teste divisorene av ϕ(n).
- **Forkunnskaper (kryssbok):** Kap. 2.1 (Euler, ϕ).
- **Eksamensbelegg:** Sjanger G-grunnlag, **~60 %**. Fasitens grep: $\operatorname{ord}_n(a)$ deler $\phi(n)$; test divisorene av $\phi(n)$, minste med $a^d\equiv 1$ er ordenen. Prioritet: **kunne** (karakterskiller C→A).
- **Innholdskontrakt:** **Orden** $\operatorname{ord}_n(a)$ = minste $k\ge 1$ med $a^k\equiv 1\pmod n$ (krever $\gcd(a,n)=1$); **hovedlemmaet** $a^t\equiv 1\Leftrightarrow \operatorname{ord}_n(a)\mid t$, spesielt **$\operatorname{ord}_n(a)\mid\phi(n)$** (ofte selv en bevisdel — føres); **metoden**: finn $\phi(n)$, list divisorene, test $a^d$ for hver divisor stigende, minste med $\equiv 1$ er ordenen; ordenen til potenser ($\operatorname{ord}(a^k)=\operatorname{ord}(a)/\gcd(k,\operatorname{ord}(a))$). Alt til aktiv bruk; ordenen skal verifiseres som MINSTE.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn ordenen til $2$ modulo $17$.»
- **Typiske feil:** **Orden ikke verifisert som minste** (viser $a^d\equiv 1$ for én $d$ uten å utelukke ekte divisorer); tester ikke bare divisorer av $\phi(n)$; glemmer $\gcd(a,n)=1$-kravet; regnefeil i potensene.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Primitive røtter: eksistens, verifikasjon og telling

- **id:** `ma1301-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-5-1`
- **kapitteltype:** teori
- **description:** Primitiv rot = element av orden ϕ(n): eksistens (2, 4, pᵏ, 2pᵏ), verifikasjon ved å sjekke aᵈ≢1 for alle ekte divisorer av ϕ(n), generering av alle primitive røtter, og telling av elementer av gitt orden.
- **Forkunnskaper (kryssbok):** Kap. 5.1 (orden), 4.1 (kvadratiske rester — kobling).
- **Eksamensbelegg:** Sjanger G, **~60 %**. Fasitens grep: verifiser primitiv rot ved å sjekke $a^{\phi(n)/q}\not\equiv 1$ for hver primdivisor $q$ av $\phi(n)$; generer alle som $r^k$ med $\gcd(k,\phi(n))=1$. Prioritet: **kunne** (karakterskiller C→A).
- **Innholdskontrakt:** **Primitiv rot** = element med $\operatorname{ord}_n(a)=\phi(n)$; **eksistens** for $n=2,4,p^k,2p^k$ (og IKKE ellers); **verifikasjonstesten** ($a$ primitiv rot $\Leftrightarrow a^{\phi(n)/q}\not\equiv 1$ for hver primdivisor $q$ av $\phi(n)$ — slipper å teste alle divisorer); **generering**: hvis $r$ er primitiv rot, er alle primitive røtter $r^k$ med $\gcd(k,\phi(n))=1$, og det finnes **$\phi(\phi(n))$** stk; **telling av elementer av gitt orden $d$**: $\phi(d)$ stk når en primitiv rot finnes (og $d\mid\phi(n)$); primitive røtter er aldri kvadratiske rester. Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Vis at $8$ er en primitiv rot modulo $29$, og finn de to elementene mellom $1$ og $28$ som har orden $4$.»
- **Typiske feil:** **Konkluderer «primitiv rot» uten å teste alle (prim)divisorer av $\phi(n)$**; feil eksistensbetingelse (tror alle $n$ har primitiv rot); regner $\phi(\phi(n))$ feil; teller elementer av gitt orden feil.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Tallteoretiske funksjoner: τ, σ og multiplikativitet

- **id:** `ma1301-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-1-1`
- **kapitteltype:** teori
- **description:** Antall divisorer τ(n)=∏(kᵢ+1) og divisorsummen σ(n) via primtallsfaktorisering og multiplikativitet, pluss optimeringsoppgaven «finn minste n med gitt τ(n)» — fordel eksponentene på de minste primtallene.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (faktorisering).
- **Eksamensbelegg:** Sjanger H, **~47 %**. Fasitens grep: bruk multiplikativitet på faktoriseringen; for minste-$n$-varianten, faktoriser målverdien og fordel eksponentene på $2,3,5,\dots$. Prioritet: **kunne**.
- **Innholdskontrakt:** **$\tau(n)$** = antall positive divisorer $=\prod(k_i+1)$ for $n=\prod p_i^{k_i}$; **$\sigma(n)$** = divisorsum $=\prod\frac{p_i^{k_i+1}-1}{p_i-1}$; **multiplikativitet** ($\tau,\sigma,\phi$ er multiplikative: $f(mn)=f(m)f(n)$ for $\gcd(m,n)=1$); **optimeringsvarianten** «finn minste $n$ med $\tau(n)=$ gitt verdi» (faktoriser målverdien, fordel eksponentene $k_i$ synkende på de minste primtallene); **identiteter** ($\sigma(n)/n=\sum_{d\mid n}1/d$; $\tau(n)$ odde $\Leftrightarrow n$ er kvadrattall); paritet $\tau(n)\equiv\sigma(n)\pmod 2$ for oddetall $n$. Alt til aktiv bruk.
- **Oppgavesjangre:** H. Mønstereksempel: «Finn det minste positive heltallet $n$ med nøyaktig $16$ positive divisorer.»
- **Typiske feil:** Regner $\tau(n)=\prod k_i$ i stedet for $\prod(k_i+1)$; glemmer multiplikativiteten (bruker den for ikke-primiske faktorer); for minste-$n$: fordeler eksponentene på feil primtall (store først); feil $\sigma$-formel.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.4: Drill: orden, primitive røtter og tallteoretiske funksjoner

- **id:** `ma1301-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `ma1301-5-3`
- **kapitteltype:** drill
- **description:** Den «øvre halvdelens» repertoar drillet: finn og verifiser orden, verifiser og generer primitive røtter, tell elementer av gitt orden, og regn τ/σ + minste-n-med-gitt-τ — sjangrene som skiller C fra A.
- **Eksamensbelegg:** Dekker sjanger G + H samlet (orden/primitive røtter 60 %, τ/σ 47 %). Variantkatalogen: finn orden, verifiser primitiv rot, tell elementer av gitt orden, generer alle primitive røtter, τ/σ via faktorisering, minste $n$ med gitt $\tau$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift** per sjanger (orden via divisortest; primitiv rot via primdivisortesten; τ/σ via multiplikativitet; minste $n$ via eksponentfordeling) som algoritmekort. **Gjennomregnet eksamenscase** med sensor-margnotater (verifiser orden som minste; test alle primdivisorer). **10–15 oppgaver på eksamensnivå**: tre orden, tre primitiv rot (én telling), tre τ/σ, to minste-$n$, ett generer-alle-primitive-røtter.
- **Oppgavesjangre:** G/H, alle varianter. Mønstereksempel: «(a) Finn ordenen til $3$ mod $31$. (b) Er $3$ en primitiv rot mod $31$? (c) Finn minste $n$ med $\tau(n)=12$.»
- **Typiske feil:** Orden ikke verifisert som minste; primitiv rot uten alle primdivisorer testet; $\tau=\prod k_i$; feil primtallsfordeling for minste $n$.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Bevis: induksjon, delelighet og primtall *(prioritet: PERFEKT/KUNNE — induksjon 53 %, delelighets-/primtallsbevis ~53 %; minst én ren bevisoppgave i HVERT sett)*

#### Kapittel 6.1: Bevisteknikker: direkte, kontrapositivt, ved motsigelse og case-analyse

- **id:** `ma1301-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1301-1-1`
- **kapitteltype:** teori
- **description:** Den generelle bevisverktøykassen for tallteori — direkte, kontrapositivt, ved motsigelse, og uttømmende case-analyse modulo m — som bæres inn i alle delelighets- og primtallsbevisene.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (delelighet, Euklids lemma). [Direkte bevis og moteksempler](/bok/r1/r1-9-1), [Kontrapositiv og kontradiksjon](/bok/r1/r1-9-3), [Bevis i algebra](/bok/r1/r1-1-5).
- **Eksamensbelegg:** Underliggende ferdighet i sjanger I/J — **bevisstruktur teller for seg selv** (sensorregel §1.5.8). Case-analyse modulo $m$ er standard i primtallsbevis (p mod 3-typen); motsigelse i «uendelig mange primtall»-argumenter. Prioritet: **perfekt** (metaferdigheten bak alle bevis).
- **Innholdskontrakt:** **Direkte bevis** (anta hypotesen, utled konklusjonen fra definisjonen av delelighet); **kontrapositivt bevis** ($p\Rightarrow q$ via $\neg q\Rightarrow\neg p$); **bevis ved motsigelse** (anta $\neg$konklusjon, utled umulighet — malen for «uendelig mange primtall»); **uttømmende case-analyse modulo $m$** (dekk ALLE rester $0,1,\dots,m-1$ — stilregel 7); skillet «⇒» vs. «⇔»; å arbeide **fra definisjonen** ($a\mid b$ betyr $b=at$) og navngi teoremet (Euklids lemma, aritmetikkens fundamentalteorem). Anvendt på enkle delelighetsutsagn som oppvarming. Merk: avhengighetsnav for resten av delen.
- **Oppgavesjangre:** I-forberedelse. Mønstereksempel: «Vis ved case-analyse modulo $3$ at $n^3\equiv n\pmod 3$ for alle heltall $n$.»
- **Typiske feil:** **Ufullstendig case-analyse** (dekker ikke alle rester — dokumentert felle); bevise en allpåstand med ett eksempel; vise bare én vei i en «hvis og bare hvis»; ikke arbeide fra definisjonen; ikke navngi Euklids lemma / fundamentalteoremet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.2: Matematisk induksjon: strukturen og de fire undertypene

- **id:** `ma1301-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-6-1`
- **kapitteltype:** teori
- **description:** Induksjonsprinsippet og den obligatoriske tredelte strukturen (basissteg, hypotese, steg — fasiten markerer hvor hypotesen brukes) anvendt på fagets fire undertyper: summeformler, delelighet, ulikheter og aᵖ≡a.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (bevisstruktur). [Induksjonsbevis](/bok/r2/r2-1-6), [Følger og tallmønstre](/bok/r2/r2-1-1), [Rekker og summasjon](/bok/r2/r2-1-4), [Induksjon](/bok/r1/r1-9-2).
- **Eksamensbelegg:** Sjanger J, **~53 %**, den vanligste bevisformen. Fasiten viser HELE strukturen hver gang og markerer stedet der hypotesen brukes. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Induksjonsprinsippet**: for å vise $P(n)$ for $n\ge n_0$, vis **(1) basissteget** $P(n_0)$ eksplisitt, **(2) induksjonshypotesen** (anta $P(k)$), **(3) induksjonssteget** (utled $P(k+1)$ med hypotesen); den obligatoriske føringsmalen (gjentas i drill); riktig $n_0$ (ikke alltid 1); **de fire undertypene** ført komplett: **summeformler** ($\sum k^2=\frac{n(n+1)(2n+1)}6$), **delelighet** ($3\mid n^3-n$-typen, skriv $f(k+1)$ via $f(k)$ + åpenbart delelig ledd), **ulikheter** (finn riktig $n_0$, bruk tidligere ulikhet i steget), **kongruensmønstre / $a^p\equiv a\pmod p$**; **sterk induksjon** (flere ledd i hypotesen — bro til Fibonacci i Del 7). Alt til aktiv bruk; alle tre stegene hver gang.
- **Oppgavesjangre:** J. Mønstereksempel: «Vis ved induksjon at $1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}6$ for alle $n\ge 1$. Skriv basissteg, hypotese og steg eksplisitt.»
- **Typiske feil:** **Glemme eller forkludre basissteget** (ufullstendig bevis selv med riktig steg — egen warning); ikke skrive hypotesen eksplisitt; **ikke bruke hypotesen i steget** (da er det ikke induksjon); sirkelbevis (anta det man skal vise); feil $n_0$ i ulikheter.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.3: Delelighets- og primtallsbevis: arketypene

- **id:** `ma1301-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-6-1`
- **kapitteltype:** teori
- **description:** De fem faste bevisarketypene: relativt primiske ⇒ mn|k, 2ⁿ−1 sammensatt når n er sammensatt, p|C(p,k), uendelig mange primtall av en type, og primtall-tvillingtypen (p, p+8, p+16) via case-analyse modulo 3.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (case-analyse, motsigelse), 1.1 (Euklids lemma, fundamentalteorem).
- **Eksamensbelegg:** Sjanger I, **~53 %** — minst én bevisoppgave i hvert sett, gjerne todelt (del a beviser et lemma brukt i del b). Fasitens grep: velg riktig arketype-argument, arbeid fra definisjonen, navngi teoremet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **De fem arketypene** ført komplett: (i) **$\gcd(m,n)=1$ og $m\mid k$, $n\mid k$ $\Rightarrow mn\mid k$** (via fundamentalteorem, Bézout ELLER Euklids lemma — alle tre godtas, stilregel 6); (ii) **$2^n-1$ sammensatt hvis $n$ sammensatt** (faktoriser med geometrisk sum $x^d-1\mid x^n-1$); (iii) **$p\mid\binom{p}{k}$ for $1\le k\le p-1$** (fra $k!(p-k)!\binom pk=p!$ og Euklids lemma), ofte byggekloss til $a^p\equiv a$; (iv) **uendelig mange primtall $\equiv 2\pmod 3$** (Euklid-stil motsigelse); (v) **primtall-typen** (eneste $p$ der $p+8,p+16$ også er primtall er $p=3$ — case-analyse modulo 3). Todelte oppgaver (lemma i a, anvend i b). Alt til aktiv bruk; navngi teoremet.
- **Oppgavesjangre:** I. Mønstereksempel: «Vis at det eneste primtallet $p$ der både $p+8$ og $p+16$ også er primtall, er $p=3$.»
- **Typiske feil:** Ufullstendig case-analyse (glemmer en rest); ikke navngi Euklids lemma / fundamentalteoremet; **relativt primiske-argumentet uten alle tre komponentene**; geometrisk sum-faktoriseringen feil; motsigelsesbeviset avslutter ikke med en klar umulighet.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 6.4: Drill: induksjon og delelighets-/primtallsbevis

- **id:** `ma1301-6-4` · **number:** 6.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma1301-6-3`
- **kapitteltype:** drill
- **description:** Hele bevisrepertoaret drillet med full struktur: induksjon (alle fire undertyper + sterk), de fem delelighets-/primtallsarketypene, og todelte lemma-så-anvend-oppgaver — der bevisstrukturen i seg selv gir uttelling.
- **Eksamensbelegg:** Dekker sjanger I + J samlet (induksjon 53 %, delelighet/primtall ~53 %). Variantkatalogen: sumformel, delelighet, ulikhet, aᵖ≡a, sterk induksjon, de fem primtalls-/delelighetsarketypene, todelt oppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift**: induksjonsmalen (tre steg) + arketype-valg for delelighet/primtall som algoritmekort. **Gjennomregnet eksamenscase** (todelt: lemma i a, anvend i b) med sensor-margnotater (basissteg skrevet? hypotese brukt? teorem navngitt? alle rester dekket?). **12–15 oppgaver på eksamensnivå**: minst fire induksjon (én per undertype), én sterk induksjon, fem delelighets-/primtallsarketyper, to todelte. Fører alternativ metode der fasit gjør det.
- **Oppgavesjangre:** I/J, alle varianter. Mønstereksempel: «(a) Vis at $p\mid\binom pk$ for $1\le k\le p-1$. (b) Bruk (a) til å vise ved induksjon at $a^p\equiv a\pmod p$ for alle $a\ge 1$.»
- **Typiske feil:** Glemt basissteg; hypotesen ikke brukt; ufullstendig case-analyse; teorem ikke navngitt; sirkelbevis.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Spesialtemaer: kjedebrøk, Pell og pytagoreiske tripler *(prioritet: KJENNE — roterende spesialstoff; kjedebrøk ~13 %, pytagoreiske tripler 20 %, Pell/irrasjonalitet spesialtema)*

#### Kapittel 7.1: Kjedebrøk, konvergenter og Pells likning *(bør kjenne til)*

- **id:** `ma1301-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1301-1-2`
- **kapitteltype:** teori
- **description:** Utvikling av √D som periodisk kjedebrøk, beregning av konvergenter pₙ/qₙ med rekursjonsskjemaet, og Pells likning x²−Dy²=1 løst via konvergentene — fast tema 2007–2009, gjenoppsto 2016.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (Euklids algoritme — kjedebrøk er dens «kvotient-avlesning»).
- **Eksamensbelegg:** Sjanger K, **~13 % (kjedebrøk) + Pell spesialtema**. **Ærlig eksamensvinkel:** fast 2007–2009 (kjedebrøk + Pell), forsvant, ett innslag 2016. Dekkes for beredskap fordi emnebeskrivelsen holder det åpent og mønsteret kan gjenta seg *(verifiser mot nyeste sett)*. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Kjedebrøk** $[a_0;a_1,a_2,\dots]$ ved gjentatt uttrekk av heltallsdel og invertering; **utvikling av $\sqrt D$** som periodisk kjedebrøk; **konvergenter** $p_n/q_n$ med rekursjonsskjemaet ($p_n=a_np_{n-1}+p_{n-2}$, $q_n=a_nq_{n-1}+q_{n-2}$; tabell over $a_n,p_n,q_n$); **Pells likning** $x^2-Dy^2=1$: første ikke-trivielle løsning leses av fra konvergentene, flere genereres via $(x_1+y_1\sqrt D)^n$. Merket som lav arkivfrekvens; koblingen til Euklids algoritme fremheves.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn kjedebrøkutviklingen til $\sqrt{72}$ og beregn konvergenten $C_3$.»
- **Typiske feil:** Feil i heltallsdel-uttrekket; feil rekursjonsskjema for konvergentene; regnefeil i tabellen; leser feil konvergent for Pell-løsningen.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 7.2: Pytagoreiske tripler: primitiv parametrisering *(bør kjenne til)*

- **id:** `ma1301-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `ma1301-1-1`
- **kapitteltype:** teori
- **description:** Primitive pytagoreiske tripler via parametriseringen x=2st, y=s²−t², z=s²+t² med betingelsene s>t, gcd(s,t)=1, ulik paritet — og de klassiske oppgavene «3 deler x eller y» og «finn tripler med gitt katet».
- **Forkunnskaper (kryssbok):** Kap. 1.1 (delelighet, relativt primiske).
- **Eksamensbelegg:** Sjanger K, **~20 %** (2015h, 2017h + eldre). Fasitens grep: bruk parametriseringen med ALLE tre betingelsene; for delelighetspåstander, case-analyse på $s,t$. Prioritet: **kjenne** (periodisk).
- **Innholdskontrakt:** **Pytagoreiske tripler** ($x^2+y^2=z^2$); **primitiv trippel** ($\gcd(x,y,z)=1$); **parametriseringen** $x=2st$, $y=s^2-t^2$, $z=s^2+t^2$ med **$s>t$, $\gcd(s,t)=1$, ulik paritet** (alle tre kreves — stilregel 7); klassiske resultater: **$3\mid xy$**, **$4\mid xy$**, **$5\mid xyz$** (case-analyse på parametrene); «finn alle primitive tripler med gitt katet»; skillet primitiv vs. avledet trippel (skaler med $k$). Merket som periodisk.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn alle primitive pytagoreiske tripler der den ene kateten er $20$, og vis at $3$ deler produktet av katetene.»
- **Typiske feil:** **Parametrisering ufullstendig** (glemmer $s>t$, $\gcd(s,t)=1$ eller ulik paritet → ikke-primitive/dupliserte tripler); blander primitiv og avledet trippel; ufullstendig case-analyse i delelighetspåstanden.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 7.3: Irrasjonalitet og rasjonale approksimasjoner *(bør kjenne til)*

- **id:** `ma1301-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `ma1301-6-1`
- **kapitteltype:** teori
- **description:** Motsigelsesbevis for irrasjonalitet (√2, ∛7) via delelighet og uendelig nedstigning, og rasjonale approksimasjoner via konvergenter — eldre stoff (2007), dekket med standardmetoder og merket lav arkivfrekvens.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (motsigelse), 1.1 (delelighet, aritmetikkens fundamentalteorem). [Kontrapositiv og kontradiksjon](/bok/r1/r1-9-3).
- **Eksamensbelegg:** Sjanger K, **spesialtema** (2007 i arkivet; nevnt i emnebeskrivelsen). **Ærlig eksamensvinkel:** lav arkivfrekvens — dekkes med standardmetoder for fullstendighet og beredskap *(verifiser mot nyeste sett)*. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Irrasjonalitetsbevis ved motsigelse**: anta $\sqrt D=a/b$ i laveste ledd, utled at $D\mid a$ og $D\mid b$ (eller paritetsmotsigelse), kontradiksjon; generalisering til $\sqrt[k]{m}$ via aritmetikkens fundamentalteorem (eksponent-argument); **uendelig nedstigning** som variant; **rasjonale approksimasjoner** via kjedebrøk-konvergenter (kobling til 7.1 — konvergentene er de beste approksimasjonene). Merket lav frekvens; standardmetoder.
- **Oppgavesjangre:** K/I. Mønstereksempel: «Vis at $\sqrt{3}$ er irrasjonal ved et motsigelsesbevis.»
- **Typiske feil:** Antar «laveste ledd» uten å bruke det til motsigelse; delelighetssteget ufullstendig; generaliserer feil til $\sqrt[k]{m}$; blander motsigelse og kontrapositiv.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Bevis- og føringsstandarden + utenat-banken

- **id:** `ma1301-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–7
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene operasjonalisert: alt begrunnes, teoremer navngis, Euklid frem+baklengs, løsbarhet før løsning, hele løsningsmengden, effektiv potensopphøyning vises, minst to veier på kjernesjangrene — samlet med den teorem- og formelbanken du må kunne utenat under kode D.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de stående oppgaveinstruksene og sensorkravene (arkivet 2014–2025, analysens §4): (i) «alle svar må begrunnes» — ordrett på hvert sett; (ii) **teoremer navngis** når de bærer argumentet; (iii) **Euklid frem+baklengs fullt utskrevet**; (iv) **løsbarhet før løsning**, kommenteres; (v) **hele løsningsmengden / alle inkongruente løsninger / minste positive**; (vi) **effektiv potensopphøyning vises** (kvadrer-og-multipliser); (vii) **alternative metoder honoreres** (lær minst to veier); (viii) **uttømmende case-analyse**; (ix) kode D uten formelark → alt utenat. Prioritet: **perfekt** (regelen bærer karakteren).
- **Innholdskontrakt:** **«Begrunnelsestrappen» per sjanger A–K**: hva som er tilstrekkelig begrunnelse (én tabell — f.eks. diofant: Euklid begge veier + løsbarhet + hele mengden; restberegning: navngi teorem + $\gcd$-sjekk + kvadrer-og-multipliser; Legendre: navngi resiprositetsloven + paritetssjekk; bevis: alle tre induksjonssteg / alle rester i case-analyse); **teorem- og formelbanken** (alt som må kunnes utenat under kode D: Euklid+Bézout, ϕ-formelen $\phi(p^k)=p^k-p^{k-1}$ + multiplikativitet, Fermat, Euler, Wilson, CRT-formelen, Legendre-multiplikativitet + Eulers kriterium + resiprositetsloven + begge supplementsregler, ordenslemmaet, primitiv-rot-eksistens, $\tau/\sigma$-formlene, pytagoreisk parametrisering, kjedebrøk-rekursjonen); **sjekklisten før innlevering** (Euklid baklengs skrevet? løsbarhet kommentert? hele mengden/minste positive? $\gcd$-sjekk før Euler? Wilson-fortegn? resiprositet-fortegnsfaktor? alle rester dekket? basissteg skrevet? teorem navngitt?); **to kontrastpar «samme matematikk, ulik føring»** (gcd uten Bézout vs. med; induksjon uten basissteg vs. med). ⚠️ Der metoden ikke er skrevet i fasit: «⚠️ metode = faglig standard».
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under finner riktig $d$ i RSA, men ville tapt uttelling. Pek på de to manglene (Euklid baklengs ikke skrevet ut, Euler ikke navngitt i korrekthetsargumentet) og skriv om til full uttelling.»
- **Typiske feil:** Hele feilkatalogens føringsdel: gcd uten Bézout, Euler uten $\gcd$-sjekk, Wilson-fortegn, resiprositet-fortegnsfaktor, ufullstendig løsningsmengde, glemt basissteg, ufullstendig case-analyse, sluttall uten metode, potens uten kvadrer-og-multipliser.
- **Quiz: 16 · Flashcards: 30** (teorem- og formelbank + bevismaler + føringsregler — flashcard-gull for et regne+bevisfag uten formelark)

#### Kapittel 8.2: Øvingseksamen 1: de fem søylene (bred kjerne)

- **id:** `ma1301-8-2` · **number:** 8.2 · **estimatedMinutes:** 240 · **prerequisites:** `ma1301-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter 2018–2025-malen: 7–8 hovedoppgaver / 10 likt vektede delpunkt som treffer de fem søylene — Euklid/diofant, Euler/Wilson-restberegning, CRT, RSA, Legendre — pluss en bevisoppgave, alt fullt begrunnet under kode D.
- **Eksamensbelegg/miks:** Speiler den ferske malen (**7–9 hovedoppgaver / 10 likt vektede delpunkt, 4 timer, kode D, «alle svar må begrunnes»**), kalibrert på prognosen i analysens §7 og den faste dramaturgien: **O1** (sjanger A) lineær diofantisk likning via Euklid (parameter i koeffisientene) → **O2** (E) restberegning Euler/Fermat + Wilson-fakultet, 2 delpunkt → **O3** (C) kinesisk restteorem-system → **O4** (D) RSA finn $d$ + dekrypter → **O5** (F) kvadratisk kongruens via Legendre + resiprositet → **O6** (G/H) orden/primitiv rot eller minste $n$ med gitt $\tau$ → **O7** (I/J) ren bevisoppgave (induksjon eller delelighet). Alle nyskrevne. Løsningsforslag i `collapsible` per deloppgave som A-besvarelse etter 8.1-standarden (Euklid begge veier, navngitte teoremer, kvadrer-og-multipliser vist), med `tip`-notat om tidsbudsjett (~24 min/delpunkt) og hvor føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: karakterskillerne og den sammensatte fakultetsoppgaven

- **id:** `ma1301-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `ma1301-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Sett to som treffer sjangrene sett 1 ikke gjorde og vektlegger karakterskillerne: sammensatt fakultetsoppgave (Euler+Wilson+CRT-splitting), full Legendre-resiprositet, primitiv rot med telling, todelt bevis, og τ-optimering — differensieringen som skiller A fra C.
- **Eksamensbelegg/miks:** Samme mal (7–9 begrunnede oppgaver / 10 likt vektede delpunkt, 4 t, kode D), med restsjangrene og de tunge variantene (sammen dekker 8.2 + 8.3 alle A–K unntatt spesialtema): **O1** (A/B) lineær kongruens med forkorting + modulær invers → **O2** (E, tung) sammensatt restberegning med $\gcd\ne 1$ og CRT-splitting → **O3** (C) CRT via suksessiv innsetting (ikke-primisk-rydding) → **O4** (D) bygg helt RSA-nøkkelpar + korrekthetsbevis → **O5** (F) full Legendre-resiprositet med $2$/$-1$-supplement → **O6** (G) primitiv rot: verifiser + tell elementer av gitt orden → **O7** (H) minste $n$ med gitt $\tau$ → **O8** (I/J, todelt) lemma i a, anvend ved induksjon i b. Induksjons-/bevisoppgaven og resiprositeten vektes som topp-differensierende. Alle nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: bredt sett med roterende spesialtema

- **id:** `ma1301-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `ma1301-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Et bredt sett som dessuten inkluderer det roterende spesialtemaet (kjedebrøk eller pytagoreiske tripler) — beredskap for at et av spesialtemaene fra Del 7 dukker opp, slik kjedebrøk gjorde i 2016.
- **Eksamensbelegg/miks:** **Ærlig eksamensvinkel:** speiler et sett med ett spesialtema-innslag (som 2015–2017), beredskap for at spesialtemaene gjenoppstår *(verifiser mot nyeste sett)*. Bredt over A–K: **O1** (A) diofant → **O2** (E) restberegning Euler + Wilson → **O3** (C) CRT → **O4** (D) RSA dekryptering → **O5** (F) Legendre → **O6** (I) delelighets-/primtallsbevis (2ⁿ−1 sammensatt eller uendelig mange primtall) → **O7** (J) induksjon (sumformel eller ulikhet med riktig $n_0$) → **O8** (K, spesialtema) **kjedebrøk-konvergent ELLER primitiv pytagoreisk trippel**. Alle nyskrevne; løsningsforslag som A-besvarelse med `tip`-notat om at spesialtema-oppgaven er lavfrekvent (verifiser mot nyeste sett) men pensum, og at hvert delpunkt teller likt.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

Per-kapittel-kvotene i §3-overskriftene er fasit; kontrollsummen av dem:

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.5 | 20+20+20+20+16 = **96** | 26+24+22+22+10 = **104** |
| 2 | 2.1–2.6 | 20+18+20+20+20+16 = **114** | 26+20+22+24+22+10 = **124** |
| 3 | 3.1–3.2 | 20+16 = **36** | 24+8 = **32** |
| 4 | 4.1–4.3 | 20+18+16 = **54** | 24+22+8 = **54** |
| 5 | 5.1–5.4 | 20+18+18+14 = **70** | 22+20+20+8 = **70** |
| 6 | 6.1–6.4 | 18+20+18+14 = **70** | 22+22+22+8 = **74** |
| 7 | 7.1–7.3 | 14+14+14 = **42** | 18+16+14 = **48** |
| 8 | 8.1–8.4 | 16+5+5+5 = **31** | 30+0+0+0 = **30** |
| **Sum (kapitler)** | **32 kap.** | **523 ≥ 500 ✓** | **548 ≥ 500 ✓** |

Kontrollsum: quiz $10+96+114+36+54+70+70+42+31 = \mathbf{523}$; flashcards
$12+104+124+32+54+70+74+48+30 = \mathbf{548}$. **Begge ligger over ≥500-gulvet med
margin, uten å regne inn prøvekapitlenes ~84 quiz** (28 prøver × ~3 spørsmål, §4) —
de kommer i tillegg. **Kvotene er minimum per kapittel; forfatteren kan overskyte,
aldri underskride.** Den bindende totalen er **523 quiz / 548 flashcards**.

**Flashcard-tettheten er bevisst høy (548, ikke ~510):** MA1301 er et definisjons-,
teorem- og bevisteknikkrikt fag **uten utdelt formelark** (kode D) — alle teoremer
(Euklid, Bézout, Fermat, Euler, Wilson, CRT, resiprositetsloven, ordenslemmaet),
formler ($\phi(p^k)$, $\tau$/$\sigma$, supplementsreglene, pytagoreisk
parametrisering) og **metodemaler** (Euklid frem+baklengs, kvadrer-og-multipliser,
induksjonens tre steg, Wilson-trikset) er selve puggematerialet. De teori- og
bevistunge delene (Del 1 fundament, Del 2 de fire teoremene, Del 4 resiprositet,
Del 6 bevis + kap. 8.1 formelbank) bærer tettheten; drillkapitlene holdes lave (8)
fordi deres verdi er oppgaver, ikke kort; øvingseksamenene 0. Quiz-fordelingen
speiler eksamensvektene: **Del 1 (fundament, 96) og Del 2 (de fire teoremene, 114)
bærer 210 av 523 quiz**; karakterskillerne Del 4/5/6 (54+70+70 = 194); spesialtema
Del 7 (42); eksamenstrening Del 8 (31).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter bevis- og føringsstandarden (8.1): full begrunnelse, Euklid begge veier,
navngitte teoremer, hele løsningsmengden, effektiv potensopphøyning vist, komplett
bevisstruktur, poengfordeling. Legges som prøvekapitler (`ma1301-<del>-prove`,
chapterNumber `<del>.P`) etter plattformens mønster. Hver prøve ~3 quizspørsmål
knyttet til metoden (medregnet i prøve-quiz-linjen, ikke i kapittelkvotene).

**Del 1 — Delelighet, Euklids algoritme og diofantiske likninger**
1. Prøve 1.A (35 min): Euklid frem+baklengs + Bézout + gcd/lcm via faktorisering (kap. 1.1–1.2, sjanger A).
2. Prøve 1.B (35 min): Lineær diofantisk likning — full løsningsmengde + parameter-i-koeffisient (kap. 1.3, sjanger A).
3. Prøve 1.C (35 min): Lineær kongruens — alle inkongruente løsninger + modulær invers (kap. 1.4, sjanger B).
4. Prøve 1.D (40 min): Simulering — Euklid + diofant + kongruens + «minste positive» kjedet (kap. 1.1–1.5, sjanger A + B).

**Del 2 — Kongruenser og de fire store teoremene**
1. Prøve 2.A (35 min): Euler/ϕ-restberegning med eksponentreduksjon + $\gcd$-sjekk + Fermat (kap. 2.1–2.2, sjanger E).
2. Prøve 2.B (40 min): Wilson-fakultetstriks — rest av $k\cdot n!\bmod p$ (kap. 2.3, sjanger E).
3. Prøve 2.C (40 min): CRT-system — begge metoder + ikke-primisk-rydding (kap. 2.4, sjanger C).
4. Prøve 2.D (45 min): Sammensatt fakultetsoppgave — Euler + Wilson + CRT-splitting (kap. 2.5–2.6, sjanger E + C).

**Del 3 — RSA og offentlig-nøkkel-kryptografi**
1. Prøve 3.A (35 min): Dekryptering med gitt $d$ + kvadrer-og-multipliser (kap. 3.1, sjanger D).
2. Prøve 3.B (40 min): Finn $d$ via Euklid + dekrypter (kap. 3.1, sjanger D).
3. Prøve 3.C (40 min): Bygg helt nøkkelpar fra $p,q,e$ + krypter (kap. 3.1–3.2, sjanger D).
4. Prøve 3.D (40 min): Simulering — nøkkelpar + dekryptering + korrekthetsbevis $(m^e)^d\equiv m$ (kap. 3.1–3.2, sjanger D).

**Del 4 — Kvadratiske rester og resiprositet**
1. Prøve 4.A (35 min): Legendre-symbol via Eulers kriterium + multiplikativitet (kap. 4.1, sjanger F).
2. Prøve 4.B (40 min): Resiprositetsloven + supplementsregler for $2$/$-1$ (kap. 4.2, sjanger F).
3. Prøve 4.C (40 min): Løsbarhet av $x^2\equiv a\pmod p$ med sammensatt $a$ (kap. 4.2–4.3, sjanger F).
4. Prøve 4.D (40 min): Simulering — full reduksjon av $(a/p)$ + antall løsninger + «summér symbolene» (kap. 4.1–4.3, sjanger F).

**Del 5 — Orden, primitive røtter og tallteoretiske funksjoner**
1. Prøve 5.A (35 min): Orden modulo $n$ + «orden deler ϕ(n)» (kap. 5.1, sjanger G).
2. Prøve 5.B (40 min): Primitiv rot — verifiser + tell elementer av gitt orden (kap. 5.2, sjanger G).
3. Prøve 5.C (35 min): $\tau/\sigma$ via multiplikativitet + minste $n$ med gitt $\tau$ (kap. 5.3, sjanger H).
4. Prøve 5.D (40 min): Simulering — orden + primitiv rot + $\tau$-optimering kjedet (kap. 5.1–5.4, sjanger G + H).

**Del 6 — Bevis: induksjon, delelighet og primtall**
1. Prøve 6.A (35 min): Bevisteknikker + case-analyse modulo $m$ (kap. 6.1, sjanger I).
2. Prøve 6.B (40 min): Induksjon — sumformel + delelighet med komplett struktur (kap. 6.2, sjanger J).
3. Prøve 6.C (40 min): Delelighets-/primtallsarketype — $2^n-1$ sammensatt eller uendelig mange primtall (kap. 6.3, sjanger I).
4. Prøve 6.D (45 min): Todelt bevis — lemma i a, anvend ved induksjon i b ($p\mid\binom pk\Rightarrow a^p\equiv a$) (kap. 6.1–6.4, sjanger I + J).

**Del 7 — Spesialtemaer: kjedebrøk, Pell og pytagoreiske tripler**
1. Prøve 7.A (35 min): Kjedebrøkutvikling av $\sqrt D$ + konvergenter (kap. 7.1, sjanger K).
2. Prøve 7.B (40 min): Pells likning via konvergentene (kap. 7.1, sjanger K).
3. Prøve 7.C (35 min): Primitiv pytagoreisk trippel + delelighetspåstand (kap. 7.2, sjanger K).
4. Prøve 7.D (35 min): Irrasjonalitetsbevis ved motsigelse + rasjonal approksimasjon (kap. 7.3, sjanger K + I).

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | 2018–2025-mal, 10 likt vektede delpunkt (primær) | De fem søylene: A(O1) + E(O2) + C(O3) + D(O4) + F(O5) + G/H(O6) + I/J(O7) |
| Øvingseksamen 2 (kap. 8.3) | Samme mal, karakterskillere + sammensatt fakultet | B(O1) + E/sammensatt(O2) + C(O3) + D/nøkkelpar(O4) + F/resiprositet(O5) + G/telling(O6) + H(O7) + I/J todelt(O8) |
| Øvingseksamen 3 (kap. 8.4) | Bredt sett med roterende spesialtema | A(O1)+E(O2)+C(O3)+D(O4)+F(O5)+I(O6)+J(O7)+K spesialtema(O8) |

Til sammen dekker de tre settene samtlige sjangre A–K minst én gang, med de fem
søylene i hvert sett og bevisoppgaven som gjennomgående element; sett 3 legger til
det roterende spesialtemaet (K) som beredskap.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Fem søyler, fast dramaturgi, alt begrunnes** — eksamensformen (4-timers
   begrunnelsesbasert langsvar, kode D uten formelark, «10 likt vektede delpunkt»),
   den faste dramaturgien, de fem søylene (Euklid/Euler/CRT/Wilson/RSA) og hovedfunnet:
   temaene er stabile, og fem søyler henter ~5 av 10 delpunkt uansett årgang
   (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 1 fundament + Del 2 de fire teoremene — bruk mest tid; Del 3 RSA; Del 4
   resiprositet; Del 6 bevis), kunne (Del 5 orden/primitive røtter/funksjoner),
   kjenne (Del 7 spesialtemaer) — med notatet om at Euklid (100 %) bærer diofant,
   kongruens OG RSA-invers.
3. **Sjangerguiden** — A–K med løsningsoppskriftene fra drillkapitlene (1.5, 2.6,
   3.2, 4.3, 5.4, 6.4) i kortform.
4. **Sensorreglene** — «alle svar må begrunnes», teoremer navngis, Euklid frem+baklengs,
   løsbarhet før løsning, hele løsningsmengden/minste positive, effektiv
   potensopphøyning vises, minst to veier honoreres, uttømmende case-analyse,
   bevisstruktur teller (fra kap. 8.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (Euklid baklengs-slurv,
   glemt oppskalering, bare én løsning, Euler uten $\gcd$-sjekk, feil ϕ ved
   primtallspotens, CRT uten parvis primiskhet, resiprositet-fortegnsfaktor,
   supplementsregel forvekslet, orden ikke verifisert som minste, primitiv rot uten
   alle primdivisorer, Wilson-fortegn, ufullstendig case-analyse / manglende
   induksjonshypotese, pytagoreisk parametrisering ufullstendig), hver med
   henvisning til kapitlet som forebygger den.
6. **Teorem- og formelliste i standardnotasjon** — apparatet fra innholdskontraktene
   (Euklid+Bézout, ϕ + Euler + Fermat + Wilson + CRT, RSA, Legendre + Eulers kriterium
   + resiprositet + supplementsregler, orden + primitive røtter, $\tau/\sigma$,
   pytagoreisk parametrisering, kjedebrøk-rekursjon) — med markering *utlede/kunne
   aktivt* (bevisene: aᵖ≡a, ordenslemmaet, RSA-korrekthet, uendelig mange primtall)
   vs. *kun bruke*, og en påminnelse om at **alt må kunnes utenat** (kode D, intet
   formelark).
7. **Studieløp** — semesterplan: Del 0 → **Del 1 (fundament — Euklid til automatikk)**
   → **Del 2 (de fire teoremene — restberegning til automatikk)** → Del 3 (RSA) →
   Del 4 (resiprositet — karakterskiller) → Del 5 (orden/funksjoner) → Del 6 (bevis
   — minst én per sett) → Del 7 (spesialtemaer, beredskap) → temaprøvene →
   bevis-/føringsstandarden (8.1) → de tre øvingseksamenene under tidspress (4 timer,
   kun enkel kalkulator). Format-notat: tren primært 10-delpunkt-malen (8.2–8.3), men
   gå gjennom spesialtema-settet (8.4) fordi et roterende spesialtema kan dukke opp
   — verifiser mot nyeste sett.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ma1301` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («2.3», ALDRI
   lineær «12») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser i
   innholdet bruker samme del-baserte form («kap. 2.3»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–K og frekvenstallene som resten
   refererer til.
3. **Fundamentet i avhengighetsrekkefølge**: Del 1 (delelighet/Euklid/diofant/kongruens
   — grunnlaget for ALT) → Del 2 (de fire teoremene + CRT; bygger på 1.4 kongruens).
4. **Tyngdepunktet**: Del 1 og Del 2 er bokas største og viktigste — hold hver del
   samlet hos én agent (Del 2 = 6 kap. kan splittes på to, men begge leser HELE delen),
   flagg for konsistenssjekk. Euklid-føringen (frem+baklengs) og kvadrer-og-multipliser-
   malen skal være identisk formulert på tvers av 1.2/1.5 og 2.1/2.5/2.6/3.1.
5. **De høyfrekvente enkeltoppgavene + karakterskillerne**: Del 3 (RSA; krever 2.1
   Euler + 1.2 Euklid) → Del 4 (kvadratiske rester; krever 2.2 Fermat) → Del 5 (orden/
   primitive røtter/funksjoner; krever 2.1 ϕ) → Del 6 (bevis; 6.1 avhengighetsnav,
   krever 1.1 Euklids lemma).
6. **Del 7** (spesialtemaer; 7.1 krever 1.2 Euklid, 7.3 krever 6.1 motsigelse) og
   **Del 8** til slutt (føringsstandard + de tre øvingseksamenene gjenbruker alt og
   må dekke A–K + de fem søylene i hvert sett). Temaprøvene (§4) legges som
   prøvekapitler (`ma1301-<del>-prove`, chapterNumber `<del>.P`), én per temadel 1–7
   (28 stk).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. **Del 2 (6 kap., de fire teoremene)**
og **Del 1 (5 kap., fundamentet)** er de største — hold hver del samlet hos én
agent, flagg dem for konsistenssjekk (Euklid-føringen i Del 1, kvadrer-og-multipliser
og teoremnavngivningen på tvers av Del 2/3). Øvingseksamenene (8.2–8.4) bygges av én
agent som leser HELE skjelettet (de gjenbruker alle sjangre A–K).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + tallteori-notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent notasjon: $\gcd(a,b)$, $a\mid b$, $a\equiv b\pmod m$;
      $\phi(n)$, $\tau(n)$, $\sigma(n)$; $\left(\frac{a}{p}\right)$;
      $\operatorname{ord}_n(a)$; Euklid som divisjonskjede + baklengs; $\binom nk$.
- [ ] **Føringsstandard i ALLE løsningsforslag**: alle svar begrunnes; teoremet
      navngis der det bæres (Euklids algoritme, Bézout, CRT, Fermat, Euler, Wilson,
      resiprositetsloven, Euklids lemma); Euklid ført frem OG baklengs; løsbarhet
      kommentert før løsning; hele løsningsmengden / alle inkongruente løsninger /
      minste positive oppgitt; effektiv potensopphøyning (kvadrer-og-multipliser)
      vist med mellomsteg; $\gcd$-sjekk før Euler; uttømmende case-analyse. Ubegrunnet
      sluttall er en byggefeil.
- [ ] **Bevisstruktur i ALLE induksjonsbevis**: eksplisitt (1) basissteg + (2)
      induksjonshypotese + (3) induksjonssteg; sterk induksjon der rekursjonen krever
      flere ledd (Fibonacci); riktig $n_0$ (ikke alltid 1). Et induksjonsbevis uten
      basissteg er en byggefeil — den mest belagte sensorregelen.
- [ ] **Alternative løsningsveier** på kjernesjangrene (stilregel 6): CRT-formel +
      suksessiv innsetting; multiplikativitet + Euklids lemma; induksjon + direkte —
      begge merket likeverdige.
- [ ] **Format- og prioritetsærlighet**: kap. 0.1 og 8.4 sier eksplisitt at MA1301
      er et begrunnelsesbasert langsvarsfag, at kode D er normalåret (kode A i
      pandemi-/kont-unntak), at de fem søylene bærer ~5 av 10 delpunkt, og at
      spesialtemaene (Del 7) er lavfrekvente/roterende (verifiser mot nyeste sett).
      Uskrevne metoder merkes «⚠️ metode = faglig standard». Usikre referanser
      *(verifiser)*.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til de
      verifiserte VGS-id-ene i §3: R2 r2-1-6/r2-1-1/r2-1-4, R1 r1-9-1/r1-9-2/r1-9-3/
      r1-1-1/r1-1-5, 1T 1t-1-7/1t-6-1/1t-6-2), `collapsible` Symbol- og formelliste
      per delkapittel, Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
      6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler
      (1.5/2.6/3.2/4.3/5.4/6.4) har løsningsoppskrift + sensor-kommentert case +
      10–15 oppgaver; øvingseksamenene fører komplette A-besvarelser.
- [ ] **Quiz-sum ≥ 523 og flashcard-sum ≥ 548** per kvotetabellen i §3
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (8.2–8.4) som sammen
      dekker A–K og har de fem søylene i hvert sett.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, moduler, nøkler, grafer og
      kontekster; ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn); pensum refereres, aldri siteres i lengde.
- [ ] **Navigasjon**: `ma1301` inn i `src/app/bok/trinn/hoyere/institusjoner.ts` under
      **Norges teknisk-naturvitenskapelige universitet (NTNU)** (ny institusjon —
      opprett den om den ikke finnes), navn = «MA1301 Tallteori».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve) + quiz- og flashcard-rute
      (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

# Bokskjelett: MA1103 Flerdimensjonal analyse (NTNU) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA1103-arkiv: 18 distinkte slutteksamenssett 2004–2014, 33 PDF-er inkl.
> 14 løsningsforslag; de tre grundigste maskinlesbare fasitene V2006/V2009/V2010
> bærer sensorkrav-delen). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Format-forbilder: `../tma4110/SKJELETT.md` (samme
> NTNU-regnefag-mal) og `../ma0301/SKJELETT.md` (samme prøve-/kvoteformat).
>
> **HVA DENNE BOKA DEKKER:** MA1103 er NTNUs kurs i **flervariabel- og
> vektoranalyse** — funksjoner av flere reelle variable + klassisk vektoranalyse.
> Vektoranalysen (fluks, konservative felt, curl/div, de tre integralsatsene) er
> emnets ryggrad og berører **hvert eneste sett** i arkivet; den får mest plass.
> Optimering (fri + betinget) og signatur-teorioppgaven (kontinuitet/deriverbarhet
> i punkt) er de to andre bærebjelkene.
>
> **KILDEFORBEHOLD (skal gjengis i Del 0):** Arkivet **stopper i 2014**;
> frekvensene beskriver 2004–2014-praksisen. Dagens vurdering er **todelt: skriftlig
> eksamen 70 % + prosjekt 30 %** *(verifiser mot fersk emnebeskrivelse)* —
> **prosjektdelen er helt udekket av arkivet**. Boka kalibreres mot den dokumenterte
> skriftlige eksamenen, men inkluderer større, prosjektforberedende
> anvendelsesoppgaver. Usikre detaljer merkes `(verifiser)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1103` |
| Tittel | **Flerdimensjonal analyse (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Emnekode | **MA1103** Flerdimensjonal analyse (eng. *Multivariable Analysis*), 7,5 sp, aktivt (undervises vår) |
| Arketype | Regnefag (regne-, utlednings- og verifikasjons-/bevisorientert; vektoranalyse-tungt) |
| Antall kapitler | **32** (1 eksamenskart + 26 tema/drill + 5 trening/bevis/øvingseksamen) + 24 prøvekapitler |
| Estimert totaltid | **~2 350 min ≈ 39 timer** |
| Quiz totalt | **508** minimum (krav ≥500; sikt 600+ — se §6) |
| Flashcards totalt | **510** minimum (krav ≥500; sikt 600+ — formelrikt vektoranalysefag der teoremformuleringer, koordinatelementer og de tre integralsatsene må sitte; se §6) |

**Pitch (ett avsnitt):** Dette er den eksamensrettede boka for NTNUs MA1103 —
**flervariabel- og vektoranalyse** kalibrert mot 18 skriftlige slutteksamener
2004–2014. Formatet er stabilt: en **4-timers skriftlig skoleeksamen med 5–10
oppgaver som teller likt**, enkel kalkulator + **vedlagt formelark**, ingen
flervalg, karakter A–F, der **alle svar skal begrunnes** (fra ca. 2012 skjerpet
til «så mye mellomregning at fremgangsmåten fremgår tydelig»). Bredden er nesten
identisk fra år til år: **vektoranalysen dominerer** og berører hvert sett — en
**fluks-/flateintegraloppgave** (~78 %, ofte settets tyngste, regnet både direkte
og kontrollert med et teorem), en **konservativt-felt/potensial/arbeid**-oppgave
(~56 %), og minst ett av **de tre integralsatsene** (divergensteoremet 39 %, Green
33 %, Stokes 22 % — minst én i nesten hvert sett). Ved siden av står de to andre
bærebjelkene: **optimering**, både fri (kritiske punkt + Hessian, ~72 %) og betinget
(Lagrange/substitusjon, ~67 %), og **signatur-teorioppgaven** om
kontinuitet/partiellderivert/deriverbarhet i ett punkt (~72 %), pluss
**volum/masse i sylinder-/kulekoordinater** (~67 %) og NTNU-signaturen
**retningsderivert med bevegelse langs kurve** (fart × D_û f). Notasjonen er
standard: $\nabla f$ (gradient), $\nabla\cdot\mathbf F$ (divergens),
$\nabla\times\mathbf F$ (curl/virvling), $\hat{\mathbf N}$ (enhetsnormal),
$dS$ (flateelement), $dV=r\,dz\,dr\,d\theta$ (sylinder) og
$dV=\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi$ (kule). Sensorregelen som preger
alt: **begrunn alle svar; kommenter forkortede nullfaktorer; bruk definisjonen der
den kreves; sjekk et teorems forutsetninger før du bruker det**.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Begrunn alle svar; vis nok mellomregning til at fremgangsmåten framgår
   tydelig.** Ordrett NTNU-standardinstruks (skjerpet ca. 2012). Riktig sluttsvar
   uten synlig vei gir lite uttelling. Hvert løsningsforslag skrives som
   **A-besvarelse**: mellomregning ledd for ledd, navngitt teorem der argumentet
   bæres (divergensteoremet, Stokes, Green, annenderiverttesten, Lagrange), verbal
   konklusjonssetning, sluttsvar markert.

2. **Forkorting av faktorer må kommenteres (den hyppigste sensorfeilen, V2010).**
   Når du forkorter bort $x$, $y$ eller et felles ledd i en Lagrange-likning, skal
   du **eksplisitt sjekke og kommentere tilfellet der leddet er null** — ellers
   mister du løsninger. At to gjenværende punkter gir samme funksjonsverdi «bør få
   en varselklokke til å ringe». Denne regelen gjentas identisk i alle
   optimeringskapitler (Del 3).

3. **Definisjonene skal brukes der de kreves.** Partiellderiverte og deriverbarhet
   i et skjøtepunkt/origo vises fra **grensedefinisjonen**
   $f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h}$, ikke ved innsetting i en
   derivertformel. Deriverbarhet sjekkes via lineariseringsrestleddet
   $\frac{f(\mathbf a+\mathbf h)-f(\mathbf a)-\nabla f\cdot\mathbf h}{|\mathbf h|}\to0$.

4. **Annenderiverttesten og $\Delta=0$.** Klassifiser kritiske punkt med
   diskriminanten $\Delta=f_{xx}f_{yy}-f_{xy}^2$ og fortegnet på $f_{xx}$. **Når
   $\Delta=0$ gir testen INGEN konklusjon** — da må punktet undersøkes langs
   utvalgte veier, og det er *ikke nok* å peke på fjerne punkter med høyere/lavere
   verdi; man må vise oppførsel *vilkårlig nær* punktet.

5. **Sjekk et teorems forutsetninger FØR du bruker det.** Green/Stokes/
   divergensteoremet krever glatt felt, definert i hele området, riktig orientering
   — kommenter dette eksplisitt. **Divergensteoremet gjelder IKKE når feltet har en
   singularitet inne i området** (f.eks. $1/(x^2+y^2+z^2)$-ledd i origo); man kan få
   rett svar «tilfeldigvis», men det kan ikke begrunnes uten å studere
   singularitetsbidraget (eksplisitt sensorpoeng, V2009).

6. **Orientering og normalretning teller.** Fluks «ut av» området
   ($\hat{\mathbf N}$ peker utover), kurve «mot klokka», fortegn i
   divergens-/Stokes-anvendelser skal være riktig — og oppgaven ber ofte eksplisitt
   om at du *spesifiserer* hvilken vei du regner.

7. **Begrensethet skal uttales i skvis-/polarargumenter.** «$|\cos\theta|\le1$»-typen
   skal skrives, ikke underforstås (V2009-kommentar). Det samme gjelder at
   eksponentialfunksjonen er kontinuerlig når en konklusjon trekkes fra eksponenten.

8. **Standardnotasjon (bokstandard):** vektorer i hakeparentes $[x,y,z]$ eller med
   $\hat{\mathbf i},\hat{\mathbf j},\hat{\mathbf k}$ (begge brukes i arkivet);
   $\hat{\mathbf N}$ enhetsnormal, $\hat{\mathbf T}$ enhetstangent;
   $\nabla f$ gradient, $\nabla\cdot\mathbf F=\operatorname{div}\mathbf F$ divergens,
   $\nabla\times\mathbf F=\operatorname{curl}\mathbf F$ virvling; flateelement $dS$;
   Jacobi $\frac{\partial(x,y)}{\partial(u,v)}$; volumelementer
   $r\,dz\,dr\,d\theta$ (sylinder), $\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi$
   (kule). Retningsderivert $D_{\hat{\mathbf u}}f=\nabla f\cdot\hat{\mathbf u}$ med
   $\hat{\mathbf u}$ **normalisert**.

9. **Formelark-realisme.** Formelark følger alltid oppgavesettet med
   koordinatformlene og de tre integralsatsene. Studenten trenger *ikke* pugge selve
   formlene, men må kunne **velge og anvende dem raskt**. Boka gjengir et
   tilsvarende formelark (i Del 0 og som collapsible-referanse) og trener *bruk*, med
   fokus på hvilket teorem/koordinatvalg som passer hvilken oppgave. (Flashcard-banken
   dekker likevel formlene, for lesere som vil trene uten arket.)

10. **Ærlighet om arkiv og kilder.** (a) Formatet er stabilt (4 t, likt vektede
    oppgaver, «begrunn alt») gjennom hele arkivet — den skriftlige prognosen er
    sikker. (b) **Arkivet stopper i 2014**; temavekting kan ha forskjøvet seg etter
    2015 — merk `(verifiser)`. (c) **Prosjektdelen (30 %)** er helt udekket; format,
    omfang og temavalg må sjekkes mot fersk emnebeskrivelse — boka forbereder den
    med sammensatte anvendelsesoppgaver, men kan ikke kalibrere den. (d)
    Retningsderivert-frekvensen (~56 %) er trolig undertelt pga. OCR-tap av
    $\nabla$-symbolet; reell frekvens antatt høyere.

### 1.6 Kildeforbehold og vurderingskalibrering (skal gjengis i Del 0)

- **Vurdering i dag:** todelt — **skriftlig eksamen 70 % + prosjekt 30 %**
  *(verifiser)*. Arkivet dokumenterer kun den skriftlige delen (historisk 100 % av
  karakteren, 4-timers skoleeksamen). Boka kalibreres mot den skriftlige eksamenen.
- **Prosjektforberedelse (bevisst tillegg):** Del 7 inneholder større,
  prosjektlignende **anvendelsesoppgaver** — modellering med vektorfelt, fluks/arbeid
  i fysisk kontekst, optimering av en realistisk målfunksjon — sjangre som allerede
  finnes i arkivets tekstoppgaver (båt over havbunn, varmluftballong, postpakke-volum).
  Dette dekker prosjektdelens *ferdigheter* uten å påstå å speile dens format.
- **Hjelpemidler:** enkel kalkulator (HP30S/Citizen SR-270X) + **vedlagt formelark**
  med koordinatformler og de tre integralsatsene. Boka trener *bruk* av formelarket,
  ikke pugging av det (§1.5 punkt 9).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): funksjoner av flere variable
(grenser/kontinuitet/deriverbarhet) er inngangen; differensialregningen
(gradient/retningsderivert/tangentplan/kjerneregel) bygger på den; optimering (fri +
betinget) er den første bærebjelken; multiple integraler er integrasjonsmaskineriet;
vektorfelt (div/curl/konservative felt/linje-/flateintegral) er emnets kjerne; de tre
integralsatsene er kronen som knytter alt sammen; eksamenstreningen er sist.
**Frekvensen styrer omfanget**, ikke rekkefølgen: ~67–78 %-temaer får teori + eget
drillkapittel; ~22–39 %-temaer får ett–to kompakte kapitler; fallende sjangre
(buelengde, nivåkurve-skisse) får korte seksjoner merket «bør kjenne til».
Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og formelarket | 1 | Prioriteringsverktøyet + kildeforbehold + prosjekt-note; kjerne i studieguiden. |
| 1 | Funksjoner av flere variable: grenser, kontinuitet, deriverbarhet | 4 | Signatur-teorioppgaven (kontinuitet/deriverbarhet i punkt) ~72 % + grenser ~28 % → perfekt → teori + drill. |
| 2 | Gradient, retningsderivert, tangentplan og kjerneregel | 4 | Gradient/retningsderivert ~56 %+ (NTNU-signatur langs kurve), tangentplan ~28 %, kjerneregel-/PDE-verifikasjon ~22 % (voksende) → kunne/perfekt. |
| 3 | Optimering: fri og betinget | 3 | Kritiske punkt + Hessian ~72 % + betinget/Lagrange ~67 % (mest sensorstraffede) → perfekt → teori + drill. |
| 4 | Multiple integraler og koordinatskifter | 4 | Volum/masse i sylinder-/kulekoordinater ~67 % + dobbeltintegral/Jacobi/byttet rekkefølge ~39 % → perfekt/kunne → teori + drill. |
| 5 | Vektorfelt: divergens, curl, konservative felt og integraler | 6 | Emnets kjerne: fluks/flateintegral ~78 % + konservativt felt ~56 % + curl/div ~39 % + linjeintegral ~44 % → perfekt → teori + drill (største del). |
| 6 | De tre integralsatsene: Green, Stokes og divergensteoremet | 4 | Divergensteorem 39 % + Green 33 % + Stokes 22 % (minst én i nesten hvert sett) → perfekt → teori + drill + valg-mellom-dem. |
| 7 | Eksamenstrening, bevis og prosjektforberedelse | 6 | Føring/utenat + bevis-/verifikasjonsdrill (voksende sjanger) + prosjektforberedende case + 3 komplette øvingseksamener. |

**Avvik fra DNA-malen (dokumentert):**

1. **32 kapitler — i øvre halvdel av DNA-taket (20–35).** Emnet dekker to store
   fagfelt (flervariabel-differensial/-integral OG klassisk vektoranalyse), og
   vektoranalysen alene sveiper 5–6 selvstendig testede sjangre (fluks, konservative
   felt, curl/div, linjeintegral, de tre teoremene). Bredden kan ikke kuttes.

2. **Vektoranalysen får to hoveddeler (Del 5 felt/integraler + Del 6 de tre
   satsene), til sammen 10 kapitler.** Dette er emnets identitet (§2-funn 1:
   vektoranalyse berører hvert sett). Del 5 kan splittes på to byggeagenter, men
   **begge må lese HELE delens kontrakter**, og delen flagges for konsistenssjekk.

3. **Signatur-teorioppgaven (kontinuitet/deriverbarhet i punkt) får eget
   drillkapittel (1.4)** til tross for at det ikke er den «tyngste» oppgaven. Grunn:
   ~72 % frekvens OG at det er emnets tydeligste **karakterskiller** (definisjonsbruk
   skiller topp fra midt) — den fortjener egen drill.

4. **Optimeringsdelen (Del 3) har ett felles drillkapittel (3.3) for fri OG betinget**
   fordi de to sjangrene ofte kombineres i én oppgave (global optimering på lukket
   område = indre kritiske punkt + randens ekstremalverdier). Nullfaktor-warningen
   (§1.5 punkt 2) gjentas identisk i 3.1–3.3.

5. **Drillkapitlene ligger i temadelene** (1.4, 3.3, 4.4, 5.6, 6.4), ikke samlet i
   siste del — sjangrene drilles rett etter teorien. Del 7 beholder føringsstandarden,
   en egen **bevis-/verifikasjonsdrill** (7.2), prosjektforberedende case (7.3) og de
   tre komplette øvingseksamenene (7.4–7.6).

6. **Egen bevis-/verifikasjonsdrill (kap. 7.2).** Fra ca. 2012 vokser
   «vis at …»-oppgavene (curl $\nabla f=0$ for $C^2$, harmonisitet under substitusjon,
   Hölder ⇒ kontinuitet). Denne sjangeren får eget drillkapittel fordi den er
   karakterskillende og krever presis $C^1/C^2$-argumentasjon.

7. **Fallende sjangre nedprioriteres, ikke utelates:** buelengde av romkurve (~11 %)
   og rene nivåkurve-/nivåflateskisser (~11 %) dekkes i korte seksjoner (i kap. 2.4
   og 4.1) merket «bør kjenne til»; vektorpotensial (finn $\mathbf F$ med
   $\mathbf G=\nabla\times\mathbf F$) og Hölder/Lipschitz ⇒ kontinuitet legges i
   bevis-drillen (7.2) som toppsjikt-stoff.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–J) refererer til
oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i bokas Del 0: **A**
fluks/flateintegral (direkte + via teorem), **B** kritiske punkt + Hessian (fri
optimering), **C** betinget optimering (Lagrange/substitusjon), **D** konservativt
felt + potensial + arbeid, **E** gradient/retningsderivert (ofte langs kurve),
**F** volum/masse i sylinder-/kulekoordinater, **G** Green/Stokes/divergensteoremet
(formuler + verifiser + anvend), **H** kontinuitet/partiellderivert/deriverbarhet i
punkt (signatur-teorioppgaven), **I** grenseverdi i flere variable, **J**
parametrisering/tangentplan/kjerneregel-verifikasjon (harmonisk/PDE).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør:** ubygde NTNU-forkunnskapsemner (Grunnkurs analyse 1, Lineær
algebra og geometri) skrives som klartekst med *(NTNU-forkunnskapsemne, ikke bygget
ennå; aktiver `/bok/<kode>/<id>`-lenke når den finnes)*. Bygde VGS-bøker (R1, R2, S2)
lenkes normalt, kun til kapitler som finnes: R2 dekker vektorer/skalarprodukt, S2
dekker derivasjon/integrasjon/differensiallikninger, R1 dekker
funksjonsdrøfting/derivasjon.

---

### Del 0 — Eksamenskartet, føringsstandarden og formelarket

#### Kapittel 0.1: Eksamenskartet: 4-timers skoleeksamen, de faste sjangrene og vektoranalysens dominans

- **id:** `ma1103-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes dette emnet: den stabile 4-timers skriftlige skoleeksamenen med 5–10 likt vektede oppgaver, formelarket, de faste sjangrene (fluks, optimering, konservative felt, de tre integralsatsene, signatur-teorioppgaven), sensorreglene, kildeforbeholdet (arkiv stopper 2014) og den nye prosjektdelen (30 %).
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (18 sett, 2004–2014, med 14 løsningsforslag). Skal gjengi: (i) **vurderingsformen**: historisk én **4-timers skriftlig skoleeksamen**, karakter A–F, **5–10 oppgaver som teller likt**, ingen flervalg, enkel kalkulator + **vedlagt formelark**, fullt begrunnet langsvar; dagens todelte ordning **skriftlig 70 % + prosjekt 30 %** *(verifiser)*; (ii) **de faste sjangrene** (hvert sett treffer de fleste): fluks/flateintegral (~78 %), kritiske punkt + Hessian (~72 %), kontinuitet/deriverbarhet i punkt (~72 %), volum i sylinder-/kulekoordinater (~67 %), betinget optimering (~67 %), konservativt felt/potensial (~56 %), gradient/retningsderivert (~56 %+), linjeintegral (~44 %); (iii) **temafrekvens-tabellen** (fra §2, dokumentert: fluks/flateintegral 78 %, kritiske punkt+Hessian 72 %, kontinuitet/deriverbarhet i punkt 72 %, volum trippelintegral 67 %, betinget optimering 67 %, konservativt felt 56 %, gradient/retningsderivert 56 %+, linjeintegral 44 %, divergensteorem 39 %, curl-beregning 39 %, dobbeltintegral/Jacobi 39 %, Green 33 %, parametrisering av kurve 33 %, grenseverdi 28 %, tangentplan 28 %, Stokes 22 %, harmonisk/PDE-verifikasjon 22 %, buelengde 11 %, nivåkurve/-flate 11 %); (iv) **de tre integralsatsene roterer** (divergensteorem 7/18, Green 6/18, Stokes 4/18) men **minst én er alltid med** — boka trener alle tre OG valget mellom dem; (v) **kildeforbeholdet** (§1.6 — arkiv stopper 2014; prosjektdelen udekket; verifiser vekting mot nyere sett); (vi) **karakterskillene** (bestått ≈ mekanikken: $\nabla f$/retningsderivert, trippelintegral-oppsett i sylinderkoordinater, curl/div-beregning, «vis at $\mathbf F$ er konservativt og finn $\varphi$»; midtsjikt ≈ + fluks direkte OG via teorem med riktig orientering, betinget optimering med nullfaktor-/endepunktdisiplin, kontinuitetsdelen av signaturoppgaven; toppsjikt ≈ deriverbarhet fra definisjonen, teoremenes forutsetninger inkl. singularitetsfellen, rene verifikasjons-/bevisoppgaver med $C^2$-argument, full global ekstremaldrøfting).
- **Innholdskontrakt:** Sjangerkatalogen A–J presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste skriftlige eksamen** (4 t, 7–10 likt vektede oppgaver, formelark): **O1** fluksoppgave (direkte + kontroll med divergensteorem eller Stokes); **O2** fri optimering (kritiske punkt + Hessian, ofte globalt maks/min); **O3** betinget optimering (Lagrange/substitusjon på sirkel/flate/kurve); **O4** konservativt-felt/potensial/arbeid; **O5** volum/masse-integral i sylinder-/kulekoordinater; **O6** signatur-teorioppgaven (kontinuitet/deriverbarhet i punkt, evt. definisjonsbevis); **O7** ett innslag fra {gradient/retningsderivert langs kurve, grenseverdi, tangentplan/parametrisering, curl $\nabla f=0$-verifikasjon, harmonisk funksjon}; **O8 (ofte)** ren «formuler/verifiser teoremet». **Lesestrategi**: Del 1 er inngangen (signatur-teorioppgaven), Del 3 er optimeringsbærebjelken, **Del 5 og 6 er vektoranalyse-tyngdepunktet (bruk mest tid)**, Del 7 løfter føring/bevis/prosjekt.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «hvilke fem–seks sjangre er nesten garantert, og hvordan fordeler du 4 timer på 7–10 oppgaver?»; «de tre integralsatsene roterer — hvordan velger du mellom Green, Stokes og divergensteoremet i en gitt oppgave?»; «lag en lesestrategi der vektoranalysen (Del 5–6) får mest tid»; «hva må du kunne uten formelark, og hva står på arket?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere vektoranalysen; undervurdere fluks (~78 %) og de tre satsene; glemme at diagonaliserbarhet — nei, her: at $\Delta=0$ ikke konkluderer og at teoremforutsetninger må sjekkes; hoppe over bevis-/verifikasjonstreningen (voksende sjanger); regne uten å begrunne (instruksen krever synlig mellomregning).
- **Quiz: 12 · Flashcards: 14** (frekvenser, sjangerkatalog A–J, sensorregler, kildeforbehold, formelark-innhold, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Funksjoner av flere variable: grenser, kontinuitet, deriverbarhet *(prioritet: PERFEKT — signatur-teorioppgaven ~72 %)*

#### Kapittel 1.1: Funksjoner av flere variable, grenser og grenseverdi mot origo

- **id:** `ma1103-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Inngangen til faget: funksjoner $f(x,y)$ og $f(x,y,z)$, nivåkurver/-flater, og grenseverdi mot et punkt — polarmetoden for å vise at grensen eksisterer, og veimetoden for å vise at den ikke gjør det (det klassiske $x^2y/(x^4+y^2)$-eksemplet).
- **Forkunnskaper (kryssbok):** Grenseverdi og funksjonsbegrep i én variabel fra [Grenseverdier og kontinuitet](/bok/r1/r1-3-1) *(verifiser lenke)*; funksjoner av én variabel fra R1/S2. Grunnkurs analyse 1 *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger I (~28 %, ofte innledningsoppgave), grunnlag for sjanger H. Fasitens grep: polarkoordinater der $r\to0$ og resten er begrenset (uttal begrensethet), eller to veier med ulik verdi. Prioritet: **kunne** (grunnlag for perfekt-kapitlet 1.2).
- **Innholdskontrakt:** **Funksjon av flere variable** $f:\mathbb R^n\to\mathbb R$; **definisjonsmengde**; **nivåkurve/nivåflate** (kort, «bør kjenne til» — ~11 %); **grenseverdi** $\lim_{(x,y)\to(a,b)}f$; **polarmetoden** ($x=r\cos\theta$, $y=r\sin\theta$, $r\to0$; uttal at trig-faktorer er begrenset); **veimetoden for ikke-eksistens** (to veier $y=0$, $y=x$, $y=x^2$ med ulik verdi); det klassiske skillet $x^2y/(x^4+y^2)$ (grense 0 langs rette linjer, $\ne0$ langs $y=x^2$); **skviselemmaet** i flere variable. Alt til aktiv bruk.
- **Oppgavesjangre:** I. Mønstereksempel: «Avgjør om grensen $\lim_{(x,y)\to(0,0)}\dfrac{4x^2y}{x^4+y^2}$ eksisterer.»
- **Typiske feil:** Konkluderer «grensen finnes» fra noen få rette linjer (må sjekke kurver som $y=x^2$); glemmer å uttale begrensethet av $\cos/\sin$ i polarargumentet; blander polarmetoden (viser eksistens) og veimetoden (viser ikke-eksistens); regnefeil i polarsubstitusjonen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Kontinuitet, partiellderiverte og deriverbarhet i ett punkt (signatur-teorioppgaven)

- **id:** `ma1103-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `ma1103-1-1`
- **kapitteltype:** teori
- **description:** Emnets tydeligste karakterskiller: en stykkevis definert funksjon med egen forskrift i origo. Kontinuitet (polar/skvis eller to-veier-avkreftelse), partiellderiverte fra grensedefinisjonen, deriverbarhet via lineariseringsrestleddet, og satsen «deriverbar ⇒ kontinuerlig».
- **Forkunnskaper (kryssbok):** Kap. 1.1. Derivasjon i én variabel fra [Derivasjon](/bok/r1/r1-4-1) *(verifiser lenke)*.
- **Eksamensbelegg:** Sjanger H, **~72 %** — emnets tydeligste teori-/karakterskiller. Fasitens grep: (a) kontinuitet via polar/skvis eller ulik verdi langs to veier; (b) partiellderiverte **fra grensedefinisjonen** i origo; (c) deriverbarhet via restleddet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kontinuitet i et punkt** (grense = funksjonsverdi); **partiellderiverte** $f_x,f_y$ generelt OG **fra grensedefinisjonen** i skjøtepunkt $f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-f(0,0)}{h}$ (§1.5 punkt 3 — ikke derivertformel); **deriverbarhet (differensierbarhet)** via lineariseringen $f(\mathbf a+\mathbf h)\approx f(\mathbf a)+\nabla f\cdot\mathbf h$ og restleddet $\frac{f(\mathbf a+\mathbf h)-f(\mathbf a)-\nabla f\cdot\mathbf h}{|\mathbf h|}\to0$; **satsen «deriverbar ⇒ kontinuerlig»** (utledes aktivt — var eget bevis H2009); **satsen «kontinuerlige partiellderiverte ⇒ deriverbar»** (brukes); variant: finn konstanter $A,B$ slik at partiellderiverte får gitte verdier, og avgjør kontinuitet. Skillet «utled aktivt» (deriverbar ⇒ kontinuerlig) vs. «kun bruk» (kontinuerlige partiellderiverte ⇒ deriverbar).
- **Oppgavesjangre:** H. Mønstereksempel: «La $f(x,y)=\dfrac{x^2y}{x^2+y^2}+|x|$ for $(x,y)\ne(0,0)$ og $f(0,0)=0$. Avgjør om $f$ er kontinuerlig i origo, og om de partiellderiverte eksisterer der.»
- **Typiske feil:** «Viser» partiellderiverte/deriverbarhet med derivertformel i stedet for grensedefinisjonen (§1.5 punkt 3, dokumentert felle); forveksler «partiellderiverte eksisterer» med «deriverbar» (deriverbarhet er sterkere); glemmer å sjekke at grensen i restleddet går mot 0 uavhengig av retning; slurver med at eksponentialfunksjonen er kontinuerlig.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.3: Grenser og deriverbarhet — utdyping og verifikasjonssjangeren

- **id:** `ma1103-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma1103-1-2`
- **kapitteltype:** teori
- **description:** Utdyping av signaturoppgaven mot toppsjiktet: ε-argumentasjon (Hölder/Lipschitz ⇒ kontinuitet), sammenhengen mellom de tre begrepene (kontinuitet, partiellderiverbarhet, deriverbarhet) og moteksemplene som skiller dem.
- **Forkunnskaper (kryssbok):** Kap. 1.2, 1.1.
- **Eksamensbelegg:** Sjanger H/I, toppsjikt-varianter (Hölder/Lipschitz ⇒ kontinuitet, V2014, ~sjelden men karakterskillende). Fasitens grep: generell ε-argumentasjon; moteksempler som skiller begrepene. Prioritet: **kunne** (toppsjikt-forberedelse).
- **Innholdskontrakt:** **Begrepshierarkiet**: deriverbar ⇒ (kontinuerlig OG partiellderiverbar), men ikke omvendt; **moteksempler** (partiellderiverte finnes uten kontinuitet; kontinuerlig uten deriverbar); **Hölder-/Lipschitz-betingelse** $|f(\mathbf x)-f(\mathbf y)|\le C|\mathbf x-\mathbf y|^\alpha$ ⇒ kontinuitet (generell ε-δ, «bør kjenne til»/toppsjikt); presis bruk av **begrensethet** i skvis (§1.5 punkt 7). Skillet: ε-argumentet «kunne føre», moteksemplene «kunne bruke».
- **Oppgavesjangre:** H. Mønstereksempel: «Anta $|f(\mathbf x)-f(\mathbf y)|\le C|\mathbf x-\mathbf y|^{1/2}$ for alle $\mathbf x,\mathbf y$. Vis at $f$ er kontinuerlig.»
- **Typiske feil:** Blander de tre begrepene (påstår deriverbar ut fra at partiellderiverte finnes); glemmer δ-valget i ε-argumentet; bruker et moteksempel som ikke faktisk skiller begrepene; underforstår begrensethet.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.4: Drill: kontinuitet, partiellderivert og deriverbarhet i punkt

- **id:** `ma1103-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma1103-1-3`
- **kapitteltype:** drill
- **description:** Signatur-teorioppgaven drillet til automatikk: kontinuitet via polar/skvis/to-veier, partiellderiverte fra grensedefinisjonen, deriverbarhet via restleddet — karakterskilleren som skiller topp fra midt.
- **Eksamensbelegg:** Dekker sjanger H samlet (~72 %) + I (~28 %). Variantkatalogen: kontinuitet ja/nei, partiellderiverte fra definisjonen, deriverbarhet ja/nei, finn-konstanter-varianten, grenseverdi eksisterer/ikke. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) sjekk kontinuitet — prøv to veier først (billig avkreftelse), ellers polar/skvis med uttalt begrensethet; (2) partiellderiverte i origo **fra grensedefinisjonen**; (3) deriverbarhet — regn restleddet og sjekk grense mot 0 retningsuavhengig; (4) konklusjon i klartekst. Gjennomregnet «signaturcase» med sensor-margnotater (bruk definisjonen! uttal begrensethet! skill de tre begrepene!). 10–14 oppgaver på eksamensnivå: minst tre kontinuitet, tre partiellderivert-fra-definisjon, tre deriverbarhet, to grenseverdi, to finn-konstanter.
- **Oppgavesjangre:** H, I, alle varianter. Mønstereksempel: «(a) Er $f$ kontinuerlig i origo? (b) Finn $f_x(0,0)$ og $f_y(0,0)$ fra definisjonen. (c) Er $f$ deriverbar i origo?»
- **Typiske feil:** Derivertformel i stedet for grensedefinisjon; glemt begrensethet; forveksler partiellderiverbar og deriverbar; regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Gradient, retningsderivert, tangentplan og kjerneregel *(prioritet: KUNNE/PERFEKT — gradient/retningsderivert ~56 %+, NTNU-signatur langs kurve)*

#### Kapittel 2.1: Gradient og retningsderivert

- **id:** `ma1103-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-1-2`
- **kapitteltype:** teori
- **description:** Gradienten ∇f: komponentvis beregning, geometrisk tolkning (peker mot raskest vekst, står normalt på nivåkurve/-flate, rate |∇f|), og retningsderiverten D_û f = ∇f · û med û normalisert.
- **Forkunnskaper (kryssbok):** Kap. 1.2. Partiellderiverte fra kap. 1.2; vektorer og skalarprodukt fra [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Eksamensbelegg:** Sjanger E, **~56 %+** (OCR-undertelt, reelt høyere). Fasitens grep: $\nabla f$ komponentvis, evaluer i punktet; retning for raskest vekst er $\nabla f$ med rate $|\nabla f|$; $D_{\hat{\mathbf u}}f=\nabla f\cdot\hat{\mathbf u}$ der $\hat{\mathbf u}$ **normaliseres**. Prioritet: **perfekt** (kombinert med 2.2).
- **Innholdskontrakt:** **Gradient** $\nabla f=[f_x,f_y,f_z]$; **geometrisk tolkning** (raskest vekst i retning $\nabla f$, rate $|\nabla f|$; $\nabla f\perp$ nivåkurve/-flate); **retningsderivert** $D_{\hat{\mathbf u}}f=\nabla f\cdot\hat{\mathbf u}$ (**normaliser** $\hat{\mathbf u}=\mathbf v/|\mathbf v|$); retning for raskest avtakelse ($-\nabla f$); ingen endring på tvers av $\nabla f$ (tangent til nivåkurve). Alt til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «For $f(x,y,z)=xy^2+z$, finn $\nabla f$ i $(1,2,-1)$, retningen for raskest vekst der og den maksimale vekstraten. Finn så $D_{\hat{\mathbf u}}f$ i retning $\mathbf v=[2,-1,2]$.»
- **Typiske feil:** **Glemmer å normalisere** $\hat{\mathbf u}$ (den hyppigste E-feilen); forveksler retning ($\nabla f$) og rate ($|\nabla f|$); regnefeil i partiellderiverte; feil fortegn for raskest avtakelse.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.2: Retningsderivert med bevegelse langs kurve (NTNU-signatur)

- **id:** `ma1103-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-2-1`
- **kapitteltype:** teori
- **description:** NTNU-signaturen: et objekt (maur, flue) beveger seg langs en skjæringskurve mellom to flater med gitt fart — finn tangentvektoren, ta prikkproduktet med ∇f (endring per lengdeenhet), og gang med farten (endring per tidsenhet).
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.2.
- **Eksamensbelegg:** Sjanger E (NTNU-signaturvariant, sterk i 2009–2011). Fasitens grep: parametriser kurven, deriver → tangentvektor, normaliser; $\nabla f\cdot\hat{\mathbf T}$ = temperaturendring per lengdeenhet; **gang med farten** for endring per tidsenhet. Prioritet: **perfekt** (karakteristisk NTNU-oppgave).
- **Innholdskontrakt:** **Tangentvektor til kurve** $\mathbf r'(t)$; **enhetstangent** $\hat{\mathbf T}=\mathbf r'/|\mathbf r'|$; **kjeden gradient × tangent**: endring i $f$ per lengdeenhet $=\nabla f\cdot\hat{\mathbf T}$; **endring per tidsenhet** $=\frac{d}{dt}f(\mathbf r(t))=\nabla f\cdot\mathbf r'(t)=(\text{fart})\cdot(\nabla f\cdot\hat{\mathbf T})$; parametrisering av **skjæringskurve** mellom to flater (velg $x$ som parameter, uttrykk $y,z$). Advarsel (§1.5): man kan IKKE bare se på eksponenten i $e^{g(x,y)}$ — det gir riktig retning men gale størrelser (V2010). Alt til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Temperaturen er $T(x,y,z)=e^{-(x^2+3y^2+z^2)}$. En partikkel følger skjæringskurven mellom $z=x^2$ og $x+y+z=1$ med fart $0{,}5$ idet den passerer $(1,-1,1)$. Finn temperaturendringen per sekund i det øyeblikket.»
- **Typiske feil:** **«Bare se på eksponenten»** (gir retning, ikke størrelse — V2010); glemmer å gange med farten (finner endring per lengde, ikke per tid); normaliserer ikke tangentvektoren når farten skal med separat; feil parametrisering av skjæringskurven; regnefeil i $\mathbf r'(t)$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.3: Tangentplan, kjerneregel og PDE-/harmonisk-verifikasjon

- **id:** `ma1103-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-2-2`
- **kapitteltype:** teori
- **description:** Tangentplan til en graf z = f(x,y) og til en nivåflate F(x,y,z)=c (normal = ∇F), kjerneregelen for flere variable, og den voksende verifikasjonssjangeren: vis at en funksjon løser varmelikningen / er harmonisk / bevarer harmonisitet under substitusjon.
- **Forkunnskaper (kryssbok):** Kap. 2.1, 1.2.
- **Eksamensbelegg:** Sjanger J — tangentplan ~28 %, harmonisk/PDE-verifikasjon ~22 % (voksende mot 2012–2013). Fasitens grep: tangentplan via gradient/normal; kjerneregelen ryddig med eksplisitt bruk av $C^2$. Prioritet: **kunne** (voksende sjanger).
- **Innholdskontrakt:** **Tangentplan til graf** $z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$; **tangentplan til nivåflate** $F(x,y,z)=c$ (normal $=\nabla F$, planet $\nabla F\cdot(\mathbf x-\mathbf a)=0$); **kjerneregelen for flere variable** (trestruktur, $\frac{\partial}{\partial u}f(x(u,v),y(u,v))=f_x x_u+f_y y_u$); **verifikasjon**: vis at $u(x,t)$ løser varmelikningen $u_t=k u_{xx}$, at $g$ er harmonisk ($g_{xx}+g_{yy}=0$), at harmonisitet bevares under en substitusjon — med **eksplisitt uttalelse av hvor $C^2$-antakelsen brukes** (sensorpoeng). Skillet: kjerneregelen «utled/anvend aktivt», tangentplanformlene «kunne bruke».
- **Oppgavesjangre:** J. Mønstereksempel: «Vis at hvis $g$ er harmonisk ($g_{xx}+g_{yy}=0$), så er $f(x,y)=g(x^2-y^2,2xy)$ også harmonisk. Si tydelig hvor du bruker at $g$ er $C^2$.»
- **Typiske feil:** Bruker gradienten til grafen i stedet for til nivåflaten (feil normal); slurver med kjerneregelens ledd (glemmer et ledd); nevner ikke hvor $C^2$ brukes (sensortrekk); regnefeil i annenderiverte via kjerneregelen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.4: Parametrisering av kurve, tangentvektor og buelengde

- **id:** `ma1103-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `ma1103-2-2`
- **kapitteltype:** teori
- **description:** Parametrisering av romkurver og skjæringskurver, tangentvektor og fart, planet normalt på kurven, og buelengde av en parametrisert romkurve (fallende arkivsjanger — «bør kjenne til», men grunnlag for linjeintegral).
- **Forkunnskaper (kryssbok):** Kap. 2.2, 2.1. Vektorfunksjoner/parameterframstilling fra [Parameterframstilling](/bok/r2/r2-5-3) *(verifiser lenke)*.
- **Eksamensbelegg:** Sjanger J — parametrisering/tangent ~33 %, buelengde ~11 % (fallende). Fasitens grep: parametriser (ofte $x$ som parameter), deriver → tangent; buelengde $\int|\mathbf r'(t)|\,dt$. Prioritet: **kunne** (parametrisering) / **kjenne** (buelengde); grunnlag for Del 5 (linjeintegral).
- **Innholdskontrakt:** **Parametrisering** $\mathbf r(t)=[x(t),y(t),z(t)]$; **tangentvektor** $\mathbf r'(t)$, **fart** $|\mathbf r'(t)|$; **skjæringskurve** mellom to flater; **planet normalt på kurven** i et punkt; **buelengde** $L=\int_a^b|\mathbf r'(t)|\,dt$ (kort, «bør kjenne til» — fallende ~11 %). Alt til aktiv bruk; buelengde markert lavprioritet.
- **Oppgavesjangre:** J. Mønstereksempel: «Parametriser skjæringskurven mellom $z=x^2+y^2$ og $y=x$, finn tangentvektoren i $(1,1,2)$ og likningen for planet som står normalt på kurven der.»
- **Typiske feil:** Feil parametrisering av skjæringskurven; glemmer normalisering når fart 1 kreves; setter opp buelengdeintegralet uten $|\mathbf r'|$ (glemmer roten); regnefeil.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Optimering: fri og betinget *(prioritet: PERFEKT — kritiske punkt+Hessian ~72 %, betinget/Lagrange ~67 %, mest sensorstraffet)*

#### Kapittel 3.1: Kritiske punkt og annenderiverttesten (fri optimering)

- **id:** `ma1103-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1103-2-1`
- **kapitteltype:** teori
- **description:** Fri optimering: sett ∇f = 0 og løs systemet fullstendig, klassifiser med annenderiverttesten (diskriminant Δ = f_xx·f_yy − f_xy²), og håndter det snublende tilfellet Δ = 0 der testen ikke konkluderer.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Kritiske punkt/annenderiverttest i én variabel fra [Funksjonsdrøfting](/bok/r1/r1-5-1) *(verifiser lenke)*.
- **Eksamensbelegg:** Sjanger B, **~72 %**. Fasitens grep: løs $\nabla f=0$ **fullstendig** (vis at ingen løsninger er oversett), klassifiser med $\Delta$; ved $\Delta=0$ undersøk oppførsel vilkårlig nær. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kritisk punkt** ($\nabla f=\mathbf 0$); **fullstendig løsning** av likningssystemet (sensor krever at ingen løsning oversees); **Hessianmatrise** $H=\begin{bmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{bmatrix}$; **annenderiverttesten** (diskriminant $\Delta=f_{xx}f_{yy}-f_{xy}^2$: $\Delta>0,f_{xx}>0$ lokalt min; $\Delta>0,f_{xx}<0$ lokalt maks; $\Delta<0$ sadelpunkt); **$\Delta=0$**: testen konkluderer IKKE — undersøk langs veier, vis oppførsel *vilkårlig nær* (ikke fjerne punkter, §1.5 punkt 4); global maks/min-drøfting (indre kritiske punkt + oppførsel i det uendelige). Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Finn og klassifiser alle kritiske punkt for $f(x,y)=x^4+3x^2y-y^3$ som lokalt maksimum, lokalt minimum eller sadelpunkt, og avgjør om $f$ har et globalt maksimum.»
- **Typiske feil:** **Ufullstendig løsning av $\nabla f=0$** (finner noen, viser ikke at det ikke finnes flere — V2009); **$\Delta=0$ behandlet som avgjort** av testen; «sadelpunkt» begrunnet med fjerne punkter i stedet for oppførsel vilkårlig nær; fortegnsfeil i $\Delta$; glemmer global drøfting når den spørres.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.2: Betinget optimering — Lagrange og substitusjon

- **id:** `ma1103-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `ma1103-3-1`
- **kapitteltype:** teori
- **description:** Optimer f under en bibetingelse g = konstant, via Lagrange (∇f = λ∇g) eller substitusjon — den mest sensorstraffede sjangeren, der forkortede nullfaktorer og usjekket endepunkt koster poeng. Global optimering på lukket område: indre kritiske punkt mot randens ekstremalverdier.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 2.1.
- **Eksamensbelegg:** Sjanger C, **~67 %** (Lagrange eksplisitt navngitt sjelden, men metoden kreves; studenten må gjenkjenne «største verdi på sirkelen/flaten» = betinget optimering). Fasitens grep: to veier — Lagrange (kommenter nullfaktorer!) eller substitusjon (sjekk endepunkt!). Prioritet: **perfekt** (mest sensorstraffet).
- **Innholdskontrakt:** **Lagranges multiplikatormetode** $\nabla f=\lambda\nabla g$ sammen med $g=c$; **nullfaktordisiplin** (§1.5 punkt 2 — når du forkorter $x$/$y$, sjekk og kommenter tilfellet der leddet er null; V2010-sensorpoeng); **substitusjon/parametrisering** av bibetingelsen til én variabel (da MÅ endepunktene sjekkes); **global optimering på lukket, begrenset område** (disk/kule): sammenlign indre kritiske punkt med randens ekstremalverdier; å gjenkjenne betinget optimering («på sirkelen/flaten/kurven»). Alt til aktiv bruk.
- **Oppgavesjangre:** C. Mønstereksempel: «Bruk Lagranges multiplikatormetode til å finne største og minste verdi av $f(x,y)=x^2+xy+y^2$ på enhetssirkelen $x^2+y^2=1$, og angi deretter globalt maksimum og minimum av $f$ på hele enhetsdisken.»
- **Typiske feil:** **Forkorter $x$/$y$ uten å sjekke null** (den hyppigste sensorfeilen, V2010 — mister ekstremalpunkter, får selvmotsigende konklusjon); **glemmer å sjekke endepunkt** i substitusjonsmetoden; sammenligner ikke indre punkt med rand ved global optimering; deler på en faktor som kan være 0; gjenkjenner ikke at oppgaven ER betinget optimering.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.3: Drill: fri og betinget optimering

- **id:** `ma1103-3-3` · **number:** 3.3 · **estimatedMinutes:** 85 · **prerequisites:** `ma1103-3-2`
- **kapitteltype:** drill
- **description:** Optimeringsrepertoaret drillet til automatikk: kritiske punkt + Hessian (inkl. Δ = 0), Lagrange med nullfaktordisiplin, substitusjon med endepunktsjekk, og global optimering på lukket område — de to mest sensorstraffede sjangrene samlet.
- **Eksamensbelegg:** Dekker sjanger B (~72 %) + C (~67 %). Variantkatalogen: klassifiser kritiske punkt, $\Delta=0$-case, Lagrange på sirkel/ellipse/kule, substitusjon på kurve, global maks/min på disk. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift fri (algoritme): (1) $\nabla f=0$, løs FULLSTENDIG; (2) Hessian + $\Delta$; (3) klassifiser, håndter $\Delta=0$ særskilt; (4) global drøfting. Løsningsoppskrift betinget: (1) identifiser bibetingelse $g=c$; (2) Lagrange $\nabla f=\lambda\nabla g$ ELLER substitusjon; (3) **kommenter nullfaktorer / sjekk endepunkt**; (4) på lukket område: indre punkt vs. rand; (5) konkluder største/minste. Gjennomregnet «optimeringscase» med sensor-margnotater (den forkortede nullfaktoren! endepunktet! $\Delta=0$!). 12–15 oppgaver på eksamensnivå: fire fri (én med $\Delta=0$), fire Lagrange, tre substitusjon, tre global på lukket område.
- **Oppgavesjangre:** B, C, alle varianter. Mønstereksempel: «Finn største og minste verdi av $f(x,y)=x^2+2y^2-x$ på disken $x^2+y^2\le4$.»
- **Typiske feil:** Forkortet nullfaktor ukommentert; usjekket endepunkt; $\Delta=0$ som avgjort; ufullstendig $\nabla f=0$; glemt rand-vs-indre ved global optimering.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Multiple integraler og koordinatskifter *(prioritet: PERFEKT/KUNNE — volum/masse sylinder-/kulekoordinater ~67 %, dobbeltintegral/Jacobi ~39 %)*

#### Kapittel 4.1: Dobbeltintegral, integrasjonsområde og byttet rekkefølge

- **id:** `ma1103-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-1-1`
- **kapitteltype:** teori
- **description:** Dobbeltintegral over et plant område, oppsett av grenser fra en skisse, Fubini og byttet integrasjonsrekkefølge — pluss en kort note om nivåkurve-skisse (fallende arkivsjanger).
- **Forkunnskaper (kryssbok):** Kap. 1.1. Integrasjon i én variabel fra [Integralregning](/bok/s2/s2-3-1) *(verifiser lenke)*.
- **Eksamensbelegg:** Sjanger (del av F og dobbeltintegral ~39 %). Fasitens grep: skisser området, sett grensene, bytt rekkefølge når den ene veien er lettere. Prioritet: **kunne** (grunnlag for trippelintegral).
- **Innholdskontrakt:** **Dobbeltintegral** $\iint_D f\,dA$; **integrasjonsområde** (type I/II, skisse → grenser); **Fubini** (itererte integraler); **byttet integrasjonsrekkefølge** (tegn området, bytt $dx\,dy\leftrightarrow dy\,dx$, nye grenser); areal/gjennomsnitt via dobbeltintegral; kort **nivåkurve-skisse** («bør kjenne til» ~11 %). Alt til aktiv bruk.
- **Oppgavesjangre:** F-forberedende. Mønstereksempel: «Bytt integrasjonsrekkefølge i $\int_0^1\int_{\sqrt y}^1 e^{x^3}\,dx\,dy$ og regn ut integralet.»
- **Typiske feil:** Feil grenser når to kurver avgrenser området; bytter rekkefølge uten å tegne området på nytt; glemmer at grensene endres ved bytte; regnefeil i det indre integralet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.2: Variabelskifte og Jacobi-determinant (polar og generelt)

- **id:** `ma1103-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-4-1`
- **kapitteltype:** teori
- **description:** Variabelskifte i dobbeltintegral med Jacobi-determinant: polarkoordinater og generelle substitusjoner (skalering/skjæring). Den dokumenterte fellen: gjennomfør variabelskiftet i integranden, ikke bare i grensene.
- **Forkunnskaper (kryssbok):** Kap. 4.1.
- **Eksamensbelegg:** Sjanger (dobbeltintegral/variabelskifte ~39 %). Fasitens grep: velg substitusjon, regn **Jacobi-determinanten** $\left|\frac{\partial(x,y)}{\partial(u,v)}\right|$, transformer BÅDE integrand og grenser. Prioritet: **kunne**.
- **Innholdskontrakt:** **Variabelskifte** $\iint_D f\,dx\,dy=\iint_{D'}f(x(u,v),y(u,v))\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv$; **Jacobi-determinant** (definisjon, beregning); **polarkoordinater** $x=r\cos\theta$, $y=r\sin\theta$, $dA=r\,dr\,d\theta$; **generelle substitusjoner** (lineære skift/skalering for ellipse/parallellogram). Advarsel: **gjennomfør substitusjonen i integranden, ikke bare i grensene** (V2006-merknad, §5 punkt 11). Alt til aktiv bruk.
- **Oppgavesjangre:** F-relatert. Mønstereksempel: «Regn ut $\iint_D e^{-(x^2+y^2)}\,dA$ der $D$ er ringen $1\le x^2+y^2\le4$ ved å bytte til polarkoordinater.»
- **Typiske feil:** **Glemmer Jacobi-faktoren** ($r$ i polar); transformerer bare grensene, ikke integranden (V2006); feil grenser i nye koordinater; regnefeil i determinanten.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Trippelintegral, sylinder- og kulekoordinater, volum og masse

- **id:** `ma1103-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `ma1103-4-2`
- **kapitteltype:** teori
- **description:** Trippelintegral for volum og masse: skisser romområdet, finn skjæringen mellom avgrensende flater, og velg sylinderkoordinater (dV = r dz dr dθ) eller kulekoordinater (dV = ρ² sin φ dρ dθ dφ) med riktige grenser.
- **Forkunnskaper (kryssbok):** Kap. 4.2, 4.1.
- **Eksamensbelegg:** Sjanger F, **~67 %**. Fasitens grep: skisser romområdet, finn skjæringsplanet, velg koordinatsystem etter symmetri, sett grensene. Masse: tetthet proporsjonal med kvadratet av avstanden → $\rho^2$-ledd. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Trippelintegral** $\iiint_R f\,dV$; **sylinderkoordinater** ($x=r\cos\theta$, $y=r\sin\theta$, $z=z$; $dV=r\,dz\,dr\,d\theta$); **kulekoordinater** ($x=\rho\sin\varphi\cos\theta$, osv.; $dV=\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi$); **volum** $V=\iiint_R dV$; **masse** $m=\iiint_R\delta\,dV$ (tetthet $\delta$, ofte $\propto$ avstand² $=\rho^2$); **tyngdepunkt** (kjennskap); skjæring mellom avgrensende flater («flatene skjærer i planet $z=\dots$»); utlede kjente formler (keglevolum $V=\frac13Ah$) via trippelintegral. Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «Finn massen til den øvre halvkulen med radius $a$ når tettheten i et punkt er proporsjonal med kvadratet av avstanden til sentrum.»
- **Typiske feil:** **Glemmer Jacobi-/volumfaktoren** ($r$ i sylinder, $\rho^2\sin\varphi$ i kule — dokumentert felle); feil grenser når to flater skjærer hverandre; velger tungvint koordinatsystem; blander $\varphi$ (fra $z$-aksen) og $\theta$ (i $xy$-planet).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 4.4: Drill: multiple integraler og koordinatskifter

- **id:** `ma1103-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma1103-4-3`
- **kapitteltype:** drill
- **description:** Integrasjonsmaskineriet drillet: dobbeltintegral med byttet rekkefølge og Jacobi, trippelintegral for volum og masse i sylinder- og kulekoordinater — med de riktige elementene og grensene.
- **Eksamensbelegg:** Dekker sjanger F (~67 %) + dobbeltintegral/Jacobi (~39 %). Variantkatalogen: byttet rekkefølge, polar dobbeltintegral, sylinder-volum, kule-masse, utled formel via trippelintegral. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) skisser (plan/rom-)området; (2) finn skjæringene mellom avgrensende kurver/flater; (3) velg koordinater etter symmetri; (4) skriv riktig element ($dA=r\,dr\,d\theta$ / $dV=r\,dz\,dr\,d\theta$ / $dV=\rho^2\sin\varphi\,\dots$); (5) sett grensene og integrer; (6) kontroller enheten/rimeligheten. Gjennomregnet «volumcase» med sensor-margnotater (volumfaktoren! grensene fra skjæringen!). 12–15 oppgaver: tre dobbeltintegral (én byttet rekkefølge, én polar), fire sylinder-volum, fire kule-masse, to formelutledning.
- **Oppgavesjangre:** F, alle varianter. Mønstereksempel: «Finn volumet av området mellom paraboloiden $z=x^2+y^2$ og planet $z=4$ i sylinderkoordinater.»
- **Typiske feil:** Glemt volumfaktor; feil grenser fra skjæringen; feil koordinatvalg; blander $\varphi$/$\theta$; regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Vektorfelt: divergens, curl, konservative felt og integraler *(prioritet: PERFEKT — fluks/flateintegral ~78 %, konservativt felt ~56 %, linjeintegral ~44 %, curl/div ~39 %; emnets kjerne og største del; kan splittes på to byggeagenter som begge leser HELE delen)*

#### Kapittel 5.1: Vektorfelt, divergens og curl

- **id:** `ma1103-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-2-1`
- **kapitteltype:** teori
- **description:** Vektorfelt F, divergens ∇·F (kildetetthet) og curl ∇×F (virvling), med de sentrale identitetene curl ∇f = 0 og div curl F = 0 — og bevisene deres for C²-felt (voksende verifikasjonssjanger).
- **Forkunnskaper (kryssbok):** Kap. 2.1. Vektorer og kryssprodukt fra [Vektorprodukt](/bok/r2/r2-5-4) *(verifiser lenke)*.
- **Eksamensbelegg:** Sjanger (curl-beregning ~39 %, div i divergensteoremet ~39 %). Fasitens grep: $\nabla\cdot\mathbf F$ og $\nabla\times\mathbf F$ komponentvis; bevis curl $\nabla f=0$ via likhet av blandede annenderiverte ($C^2$). Prioritet: **perfekt** (fundament for hele delen).
- **Innholdskontrakt:** **Vektorfelt** $\mathbf F=[P,Q,R]$; **divergens** $\nabla\cdot\mathbf F=P_x+Q_y+R_z$ (kildetetthet); **curl/virvling** $\nabla\times\mathbf F$ (determinantformel med $\hat{\mathbf i},\hat{\mathbf j},\hat{\mathbf k}$); **identitetene** curl $\nabla f=\mathbf 0$ (for $C^2$-$f$) og div curl $\mathbf F=0$ (for $C^2$-$\mathbf F$) med **bevis** via likhet av blandede annenderiverte (si hvor $C^2$ brukes); **vektorpotensial** (finn $\mathbf F$ med $\mathbf G=\nabla\times\mathbf F$, «bør kjenne til» — H2006, legges i 7.2). Skillet: identitetene «utled aktivt» (bevis-sjanger), curl/div-beregning «anvend». Alt til aktiv bruk.
- **Oppgavesjangre:** curl/div, N (bevis). Mønstereksempel: «For $\mathbf F=[xz,\,y^2,\,-xy]$, regn ut $\nabla\cdot\mathbf F$ og $\nabla\times\mathbf F$. Vis deretter at $\nabla\times(\nabla f)=\mathbf 0$ for enhver $C^2$-funksjon $f$.»
- **Typiske feil:** Fortegnsfeil i curl-determinanten; forveksler div (skalar) og curl (vektor); glemmer å si hvor $C^2$ brukes i identitetsbeviset; regnefeil i partiellderiverte.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.2: Konservative felt, potensialfunksjon og veiuavhengighet

- **id:** `ma1103-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1103-5-1`
- **kapitteltype:** teori
- **description:** Konservative felt: sjekk curl F = 0 (nødvendig; tilstrekkelig på enkelt sammenhengende område), konstruer potensialfunksjonen φ ved suksessiv integrasjon, og bruk veiuavhengighet — arbeid = φ(slutt) − φ(start), og ∮ = 0 langs lukket kurve.
- **Forkunnskaper (kryssbok):** Kap. 5.1.
- **Eksamensbelegg:** Sjanger D, **~56 %**. Fasitens grep: (a) curl $\mathbf F=0$ (nevn: tilstrekkelig på enkelt sammenhengende område), (b) konstruer $\varphi$ ved suksessiv integrasjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Konservativt felt** ($\mathbf F=\nabla\varphi$); **curl-test** ($\nabla\times\mathbf F=\mathbf 0$ nødvendig; **tilstrekkelig på enkelt sammenhengende område** — nevn dette); **konstruksjon av potensial** $\varphi$ ved suksessiv integrasjon (integrer $F_1$ mhp. $x$, deriver mhp. $y$ for å bestemme integrasjonskonstanten $g(y)$, osv.); **veiuavhengighet** (arbeid $=\varphi(\text{slutt})-\varphi(\text{start})$; $\oint=0$ langs lukket kurve); variant: bestem ukjent $h(x)$ i en komponent slik at feltet blir konservativt. Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «Vis at $\mathbf G(x,y,z)=(ye^{xy}+2,\,xe^{xy}+z^2,\,2yz+1)$ er konservativt ved å finne en potensialfunksjon $\varphi$, og bestem arbeidet $\mathbf G$ utfører langs en vilkårlig glatt kurve fra origo til $(0,1,2)$.»
- **Typiske feil:** Sjekker curl men konstruerer ikke $\varphi$; glemmer at curl = 0 kun er tilstrekkelig på **enkelt sammenhengende** område; feil i den suksessive integrasjonen (glemmer at «konstanten» er en funksjon av de andre variablene); regner arbeidet med feil endepunkt.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.3: Linje-/kurveintegral og arbeid

- **id:** `ma1103-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-5-2`
- **kapitteltype:** teori
- **description:** Linjeintegral av et vektorfelt (arbeid) og av en skalarfunksjon: parametriser kurven, sett opp ∫ F · dr, og velg smart vei — via potensial (konservativt felt) eller Green (Del 6) når det forenkler.
- **Forkunnskaper (kryssbok):** Kap. 5.2, 2.4.
- **Eksamensbelegg:** Sjanger (linjeintegral/arbeid ~44 %), ofte løst via konservativt felt eller Green. Fasitens grep: parametriser, $\int\mathbf F\cdot d\mathbf r=\int\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt$; sjekk om feltet er konservativt (da via potensial). Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** **Linjeintegral av vektorfelt** (arbeid) $\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt$; **linjeintegral av skalarfunksjon** $\int_C f\,ds=\int f(\mathbf r(t))|\mathbf r'(t)|\,dt$; **orientering** (fortegn ved retningsbytte); valg av metode (direkte / via potensial hvis konservativt / via Green hvis lukket, Del 6); det klassiske $\oint\frac{-y\,dx+x\,dy}{x^2+y^2}$ ($=2\pi$ rundt origo — bro til Green på hullete område, 6.1). Alt til aktiv bruk.
- **Oppgavesjangre:** D-relatert. Mønstereksempel: «Regn ut arbeidet $\int_C\mathbf F\cdot d\mathbf r$ der $\mathbf F=[y,\,x+z,\,y]$ og $C$ er linjestykket fra $(0,0,0)$ til $(1,2,3)$, både direkte og ved å finne et potensial.»
- **Typiske feil:** Blander vektorfelt-linjeintegral ($\mathbf F\cdot d\mathbf r$) og skalar-linjeintegral ($f\,ds$, med $|\mathbf r'|$); feil orientering/fortegn; regner direkte når feltet er konservativt (unødvendig tungt); glemmer $|\mathbf r'|$ i skalar-integralet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.4: Flateintegral og fluks — parametrisering og flateelement

- **id:** `ma1103-5-4` · **number:** 5.4 · **estimatedMinutes:** 65 · **prerequisites:** `ma1103-5-1`
- **kapitteltype:** teori
- **description:** Fluks/flateintegral: del overflaten i naturlige biter, velg parametrisering og korrekt orientert normalvektor N̂, sett opp flateelementet dS (grafformel eller kulekoordinat), og utfør prikkproduktet før koordinatbytte — emnets tyngste og hyppigste sjanger.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 4.3, 2.4.
- **Eksamensbelegg:** Sjanger A, **~78 %** — kjernesjangeren, oftest settets tyngste. Fasitens grep: del flaten, velg parametrisering + orientert $\hat{\mathbf N}$ (ut av området), sett opp $dS$, prikkprodukt før koordinatbytte. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Flateintegral/fluks** $\iint_S\mathbf F\cdot\hat{\mathbf N}\,dS$; **orientert normalvektor** $\hat{\mathbf N}$ (ut av området); **flateelement** — grafflate $dS=\sqrt{g_x^2+g_y^2+1}\,dx\,dy$, kuleflate $dS=\rho^2\sin\varphi\,d\theta\,d\varphi$, generell parametrisering $dS=|\mathbf r_u\times\mathbf r_v|\,du\,dv$; **fluks via parametrisering** $\iint_D\mathbf F\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv$; **del overflaten i biter** (grafflate + kuleflate + plan) og summer; prikkprodukt **før** koordinatbytte. Alt til aktiv bruk; kontroll-mot-teorem kommer i 5.5/Del 6.
- **Oppgavesjangre:** A (direkte del). Mønstereksempel: «Regn ut fluksen av $\mathbf F=[x,\,y,\,2z]$ direkte gjennom kjegleflaten $z=\sqrt{x^2+y^2}$, $0\le z\le2$, med utadrettet normal.»
- **Typiske feil:** **Feil eller uspesifisert orientering** ($\hat{\mathbf N}$ inn i stedet for ut); glemmer flateelementet $dS$ eller regner det feil (glemmer roten i grafformelen); prikkprodukt etter koordinatbytte (feil rekkefølge); deler ikke opp en sammensatt flate.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.5: Drill: fluks og flateintegral, direkte og via teorem

- **id:** `ma1103-5-5` · **number:** 5.5 · **estimatedMinutes:** 85 · **prerequisites:** `ma1103-5-4`
- **kapitteltype:** drill
- **description:** Emnets tyngste sjanger drillet: fluks regnet direkte som flateintegral OG kontrollert med divergensteoremet (lukket flate) eller Stokes (curl gjennom flate = randintegral) — å beherske begge veier og se at de gir samme svar er selve poenget.
- **Forkunnskaper (kryssbok):** Kap. 5.4, 5.1. Divergensteorem/Stokes forhåndsvarsles her og utdypes i Del 6 (6.2, 6.3).
- **Eksamensbelegg:** Dekker sjanger A samlet (~78 %, settets tyngste). Variantkatalogen: fluks direkte gjennom sammensatt flate; fluks via divergensteorem (lukket flate); fluks via Stokes (curl gjennom flate); direkte-vs-kontroll som gir samme svar; singularitetsfellen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) er flaten lukket? → vurder divergensteoremet; (2) er integranden en curl / er randen enklere? → vurder Stokes; (3) direkte: del flaten, orienter $\hat{\mathbf N}$, sett opp $dS$, prikkprodukt, integrer; (4) **sjekk teoremets forutsetninger** (glatt felt, definert i hele området, ingen singularitet — §1.5 punkt 5); (5) kontroller at direkte og teorem gir samme svar. Gjennomregnet «flukscase» med sensor-margnotater (orienteringen! singularitetsfellen! kontroll-mot-kontroll!). 12–15 oppgaver: fire direkte, fire divergensteorem, tre Stokes, to direkte-og-kontroll, to singularitetsfelle.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «La $R$ være området mellom $z=x^2+y^2$ og $z=4$, og $S$ hele overflaten med utadrettet normal. Regn fluksen av $\mathbf F=(x,y,2z)$ gjennom $S$ både direkte og med divergensteoremet, og kontroller at svarene stemmer.»
- **Typiske feil:** Feil orientering; glemt $dS$; bruker divergensteoremet ukritisk ved singularitet (§1.5 punkt 5, V2009); regner direkte når teorem er langt raskere (eller motsatt); kontrollerer ikke at de to veiene gir samme svar.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 5.6: Sammensatte vektorfelt-oppgaver og prosjektforberedende modellering

- **id:** `ma1103-5-6` · **number:** 5.6 · **estimatedMinutes:** 60 · **prerequisites:** `ma1103-5-5`
- **kapitteltype:** drill
- **description:** Vektoranalysen i fysisk kontekst: sammensatte oppgaver som kjeder felt, fluks, arbeid og optimering i én modelleringscase — forberedelse mot den nye prosjektdelen (30 %) og de klassiske tekstoppgavene i arkivet.
- **Forkunnskaper (kryssbok):** Kap. 5.5, 5.3, 5.2, 3.2.
- **Eksamensbelegg:** Prosjektforberedende (dagens 30 %-del, §1.6 — *(verifiser)*), forankret i arkivets tekstoppgaver (båt over havbunn, varmluftballong). Fasitens grep: oversett en fysisk situasjon til vektorfelt/fluks/arbeid, kombiner med optimering. Prioritet: **kunne** (prosjektforberedelse).
- **Innholdskontrakt:** **Modellering med vektorfelt** (strømning, kraftfelt, temperatur); fluks som gjennomstrømning; arbeid som energi; kombinasjon fluks + optimering i én case; **enhets- og rimelighetskontroll** (fysisk tolkning). Ingen ny teori — syntese av 5.1–5.5 + Del 3. Markeres tydelig som prosjektforberedende, ikke garantert eksamensformat.
- **Oppgavesjangre:** A/D/C-syntese. Mønstereksempel: «Et fluid strømmer med hastighetsfelt $\mathbf v=[x,\,y,\,-2z]$. Finn nettostrømmen (fluksen) ut av enhetskula, og bestem punktet på kula der utstrømningstettheten er størst.»
- **Typiske feil:** Setter opp modellen feil (feil felt fra teksten); glemmer fysisk tolkning/enhet; kombinerer sjangrene feil (bruker fluks der arbeid kreves); mister oversikten i en flerdelt case.
- **Quiz: 14 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — De tre integralsatsene: Green, Stokes og divergensteoremet *(prioritet: PERFEKT — divergensteorem ~39 %, Green ~33 %, Stokes ~22 %; minst én i nesten hvert sett; boka trener alle tre OG valget mellom dem)*

#### Kapittel 6.1: Greens teorem

- **id:** `ma1103-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-5-3`
- **kapitteltype:** teori
- **description:** Greens teorem: formuler med forutsetninger, verifiser ved å regne begge sider, og anvend for å forvandle et vanskelig kurveintegral til et dobbeltintegral (curl-integrand) — inkludert det klassiske ∮(−y dx + x dy)/(x²+y²)-integralet på et hullete område.
- **Forkunnskaper (kryssbok):** Kap. 5.3, 4.1.
- **Eksamensbelegg:** Sjanger G, **~33 %**. Fasitens grep: (i) formuler korrekt med forutsetninger (spørres direkte); (ii) verifiser begge sider; (iii) anvend (kurveintegral → dobbeltintegral). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Greens teorem** $\oint_{\partial D}(P\,dx+Q\,dy)=\iint_D(Q_x-P_y)\,dA$; **forutsetninger** (glatt felt, positivt orientert rand mot klokka, regulært område); **formulering** (spørres direkte — «Hva sier Greens teorem?»); **verifikasjon** (regn begge sider for et konkret felt/område); **anvendelse** (vanskelig $\oint$ → lettere $\iint$; areal via $\frac12\oint(x\,dy-y\,dx)$); **hullete område**: $\oint\frac{-y\,dx+x\,dy}{x^2+y^2}$ ($=2\pi$ rundt origo, $=0$ ellers) — singularitet + Green på område med hull (V2011, H2007). Skillet: teoremformulering + anvendelse «aktivt», full verifikasjon «kunne». Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Bruk Greens teorem til å regne ut $\oint_C(y^2\,dx+3xy\,dy)$ der $C$ er randen av halvsirkelskiven $x^2+y^2\le1$, $y\ge0$, orientert mot klokka.»
- **Typiske feil:** Feil orientering (rand skal være mot klokka / positivt orientert); bruker Green på hullete område uten å håndtere singulariteten; feil fortegn i $Q_x-P_y$; formulerer teoremet uten forutsetningene.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.2: Divergensteoremet (Gauss)

- **id:** `ma1103-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-5-4`
- **kapitteltype:** teori
- **description:** Divergensteoremet: formuler med forutsetninger, verifiser, og anvend for å gjøre en lukket-flate-fluks om til et trippelintegral ∭ div F dV — pluss singularitetsfellen der teoremet IKKE gjelder.
- **Forkunnskaper (kryssbok):** Kap. 5.4, 5.1, 4.3.
- **Eksamensbelegg:** Sjanger G, **~39 %** (hyppigst av de tre). Fasitens grep: formuler; anvend $\iint_S\mathbf F\cdot\hat{\mathbf N}\,dS=\iiint_R\nabla\cdot\mathbf F\,dV$; sjekk at feltet er definert i hele $R$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Divergensteoremet** $\iint_S\mathbf F\cdot\hat{\mathbf N}\,dS=\iiint_R\nabla\cdot\mathbf F\,dV$ (lukket flate $S=\partial R$, utadrettet normal); **forutsetninger** (glatt felt definert i HELE $R$, lukket regulær flate); **formulering** (spørres direkte); **verifikasjon** (begge sider); **anvendelse** (lukket-flate-fluks → trippelintegral, ofte langt lettere); **singularitetsfellen** (gjelder IKKE når $\mathbf F$ har singularitet i $R$, f.eks. $1/(x^2+y^2+z^2)$-ledd i origo — §1.5 punkt 5, V2009). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Formuler divergensteoremet, og bruk det til å regne fluksen av $\mathbf F=[x^3,\,y^3,\,z^3]$ ut av enhetskula.»
- **Typiske feil:** **Bruker teoremet ved singularitet i området** uten å sjekke (V2009); feil normalretning (må være utadrettet); anvender på en ikke-lukket flate; regnefeil i $\nabla\cdot\mathbf F$; formulerer uten forutsetningene.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.3: Stokes' teorem

- **id:** `ma1103-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-5-4`
- **kapitteltype:** teori
- **description:** Stokes' teorem: formuler med forutsetninger, verifiser, og anvend for å gjøre et randintegral ∮ om til fluksen av curl F gjennom en flate — velg gjerne en enklere flate med samme rand.
- **Forkunnskaper (kryssbok):** Kap. 5.4, 5.3, 5.1.
- **Eksamensbelegg:** Sjanger G, **~22 %**. Fasitens grep: $\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\hat{\mathbf N}\,dS$; velg enkel flate med samme rand; pass på konsistent orientering (høyrehåndsregel). Prioritet: **perfekt** (fullfører de tre satsene).
- **Innholdskontrakt:** **Stokes' teorem** $\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\hat{\mathbf N}\,dS$; **forutsetninger** (glatt felt, orientert flate med orientert rand, høyrehåndsregel mellom $\hat{\mathbf N}$ og randretning); **formulering** (spørres direkte); **verifikasjon** (randintegral vs. curl-fluks); **anvendelse** (bytt til enklere flate med samme rand; randintegral → curl-fluks eller omvendt). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Formuler Stokes' teorem. Verifiser det for øvre enhetshalvkule $z=\sqrt{1-x^2-y^2}$ og $\mathbf F=[x,\,y,\,z]$ ved å regne både randintegralet og fluksen av $\nabla\times\mathbf F$.»
- **Typiske feil:** **Inkonsistent orientering** mellom flate og rand (høyrehåndsregel); velger unødvendig komplisert flate; regnefeil i curl; formulerer uten forutsetningene; glemmer at randen er den orienterte kurven.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: Drill: velg og anvend riktig integralsats

- **id:** `ma1103-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma1103-6-3`
- **kapitteltype:** drill
- **description:** De tre satsene drillet SAMMEN — for kunsten er å velge riktig: Green (plan rand ↔ dobbeltintegral), Stokes (romlig rand ↔ curl-fluks), divergensteoremet (lukket flate ↔ trippelintegral). Formuler, verifiser, anvend, og sjekk forutsetningene hver gang.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 6.2, 6.3, 5.5.
- **Eksamensbelegg:** Dekker sjanger G samlet (divergensteorem 39 % + Green 33 % + Stokes 22 %; minst én i nesten hvert sett). Variantkatalogen: formuler et teorem, verifiser, anvend hver av de tre, velg riktig sats, singularitetsfelle, hullete område. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (valgtre): (1) lukket flate + fluks → **divergensteoremet**; (2) plan lukket kurve + kurveintegral → **Green**; (3) romlig kurve som rand av flate + curl → **Stokes**; (4) alltid: **formuler forutsetningene og sjekk at de holder** (glatt, definert i hele området, riktig orientering — §1.5 punkt 5); (5) singularitet i området → teoremet gjelder ikke direkte (del ut singulariteten). Gjennomregnet «velg-sats-case» med sensor-margnotater (hvorfor dette teoremet? forutsetningene! orienteringen!). 12–15 oppgaver: tre «formuler + verifiser», tre Green, tre divergensteorem, tre Stokes, to «velg riktig sats», ett singularitet/hullete.
- **Oppgavesjangre:** G, alle varianter. Mønstereksempel: «(a) Formuler Stokes' teorem. (b) Regn $\oint_C\mathbf F\cdot d\mathbf r$ for en gitt romkurve $C$ ved å velge en passende flate. (c) Kunne du løst (b) med Green i stedet? Begrunn.»
- **Typiske feil:** Velger feil sats (bruker Green på romlig kurve, Stokes på lukket flate); glemmer å formulere/sjekke forutsetningene; feil orientering; ignorerer singularitet; regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Eksamenstrening, bevis og prosjektforberedelse *(føringsstandard + bevis-/verifikasjonsdrill + prosjektcase + 3 komplette øvingseksamener)*

#### Kapittel 7.1: Føringsstandarden, formelarket og utenat-banken

- **id:** `ma1103-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1103-0-1`
- **kapitteltype:** teori
- **description:** Slik en A-besvarelse ser ut: begrunn alle svar med synlig mellomregning, navngi teoremet som bærer argumentet, spesifiser orientering, kommenter forkortede nullfaktorer, sjekk teoremforutsetninger — pluss et samlet formelark og en utenat-bank.
- **Forkunnskaper (kryssbok):** Kap. 0.1 og hele boka (metakapittel).
- **Eksamensbelegg:** Bygger på sensorkravene (§4 i analysen, særlig V2006/V2009/V2010). Skal gjengi: begrunnelseskravet, nullfaktor-regelen, definisjonsbruk, $\Delta=0$-håndtering, teoremforutsetninger, orientering, begrensethet i skvis, at alternative korrekte løsninger honoreres. Prioritet: **perfekt** (føring avgjør delpoeng overalt).
- **Innholdskontrakt:** **Føringsstandarden** (de ni sensorreglene fra §1.5 samlet, hver med kort A-eksempel); **formelarket** (koordinatelementene $dA=r\,dr\,d\theta$, $dV=r\,dz\,dr\,d\theta$, $dV=\rho^2\sin\varphi\,d\rho\,d\theta\,d\varphi$; de tre integralsatsene; grafflate-$dS$; retningsderivert; Hessian-diskriminant) som collapsible-referanse; **utenat-bank** (det som IKKE står på arket: definisjonene av kontinuitet/deriverbarhet, curl/div-formlene, Lagrange-oppsettet, potensialkonstruksjonen); **karakterskille-listen** (bestått/midt/topp fra 0.1). Ingen nye regneteknikker; syntese.
- **Oppgavesjangre:** Ingen nye; 3–4 «forbedre denne besvarelsen»-oppgaver: en svak løsning med manglende begrunnelse/orientering/nullfaktor-kommentar som studenten skal rette opp til A-nivå.
- **Typiske feil:** Meta: riktig svar uten føring; glemt orientering; ukommentert nullfaktor; teorem brukt uten forutsetningssjekk; manglende begrensethet i skvis.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.2: Bevis- og verifikasjonsdrill (voksende sjanger)

- **id:** `ma1103-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `ma1103-5-1`
- **kapitteltype:** drill
- **description:** «Vis at …»-oppgavene som vokser mot slutten av arkivet, drillet: curl ∇f = 0 og div curl F = 0 for C²-felt, harmonisitet bevart under substitusjon, deriverbar ⇒ kontinuerlig, Hölder ⇒ kontinuitet, vektorpotensial — med presis C¹/C²-argumentasjon.
- **Forkunnskaper (kryssbok):** Kap. 5.1, 2.3, 1.2, 1.3.
- **Eksamensbelegg:** Sjanger N/J/H (verifikasjons-/bevisoppgaver, ~22 % harmonisk/PDE + curl-identiteter, voksende fra 2012; karakterskillende toppsjikt). Fasitens grep: før beviset komplett med forutsetningssjekk, navngitt teorem, **eksplisitt hvor $C^2$ brukes**. Prioritet: **kunne/perfekt** (toppsjikt-skiller).
- **Innholdskontrakt:** Bevismal (algoritme): (1) skriv forutsetningene ($C^1$/$C^2$, definert på …); (2) navngi teoremet/identiteten; (3) før argumentet ledd for ledd; (4) si **eksplisitt hvor $C^2$ (likhet av blandede annenderiverte) brukes**; (5) konkluder. Bevistemaene forankret i sine kapitler: curl $\nabla f=0$ (5.1), div curl $\mathbf F=0$ (5.1), harmonisitet under substitusjon (2.3), deriverbar ⇒ kontinuerlig (1.2), Hölder/Lipschitz ⇒ kontinuitet (1.3), vektorpotensial (5.1). Gjennomregnet «beviscase» med sensor-margnotater (hvor brukes $C^2$? navngi teoremet!). 10–14 bevis-/verifikasjonsoppgaver.
- **Oppgavesjangre:** N, J, H. Mønstereksempel: «Vis at $\nabla\times(\nabla f)=\mathbf 0$ for enhver $C^2$-funksjon $f$, og si tydelig hvor du bruker at $f$ er $C^2$.»
- **Typiske feil:** Nevner ikke hvor $C^2$ brukes (sensortrekk); hopper over forutsetningssjekk; «beviser» ved eksempel i stedet for generelt; navngir ikke identiteten/teoremet; blander deriverbarhet og partiellderiverbarhet.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 7.3: Prosjektforberedende storoppgaver

- **id:** `ma1103-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1103-5-6`
- **kapitteltype:** drill
- **description:** Store, sammensatte modelleringsoppgaver som forbereder prosjektdelen (30 %): modellering med vektorfelt, fluks/arbeid i fysisk kontekst, optimering av en realistisk målfunksjon — kjedet som en liten case med flere delspørsmål.
- **Forkunnskaper (kryssbok):** Kap. 5.6, 3.2, hele Del 5–6.
- **Eksamensbelegg:** Prosjektforberedende (dagens 30 %-del, §1.6 — *(verifiser)*), forankret i arkivets tekstoppgaver. Fasitens grep: bygg en hel case (flere delspørsmål), kombiner sjangre, tolk fysisk. Prioritet: **kunne** (prosjektforberedelse).
- **Innholdskontrakt:** **Sammensatte case** (3–5 delspørsmål) som kjeder: parametrisering → gradient/retningsderivert → optimering → fluks/arbeid → teorem-kontroll; fysisk tolkning og enhetskontroll gjennomgående. Ingen ny teori — syntese av hele boka. Tydelig merket som prosjektforberedende, ikke garantert skriftlig eksamensformat *(verifiser prosjektformat)*.
- **Oppgavesjangre:** A/B/C/D/E/F-syntese. Mønstereksempel: «En varmluftballong beskrives av … (a) parametriser overflaten; (b) finn punktet med størst oppdriftstetthet; (c) regn nettofluksen av varmestrømmen ut av ballongen; (d) kontroller (c) med divergensteoremet.»
- **Typiske feil:** Modellerer situasjonen feil; mister oversikten i en flerdelt case; glemmer fysisk tolkning/enhet; bruker feil sjanger på et delspørsmål; svak kobling mellom delspørsmålene.
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 7.4: Øvingseksamen 1 (2009–2011-mal, anvendte kontekster)

- **id:** `ma1103-7-4` · **number:** 7.4 · **estimatedMinutes:** 90 · **prerequisites:** `ma1103-7-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler 2009–2011-malen (~6 oppgaver, anvendte kontekster som maur/flue langs kurve): fluks, fri optimering, betinget optimering, konservativt felt, volum og signatur-teorioppgaven, med A-løsningsforslag.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler en «typisk» 2009–2011-eksamen (§2-fordelingen). Miks: O1 fluks (A, tyngst) + O2 fri optimering (B) + O3 betinget (C) + O4 konservativt felt (D) + O5 volum i sylinderkoordinater (F) + O6 kontinuitet/deriverbarhet (H) + retningsderivert langs kurve (E). Prioritet: perfekt (samlet trening).
- **Innholdskontrakt:** 6–7 nyskrevne, likt vektede oppgaver over 4 timer (skalert), enkel kalkulator + formelark. Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse, med `tip`-notat om delpoeng/vekting og tidsbudsjett. Dekker de faste sjangrene minst én gang; retningsderivert-langs-kurve som NTNU-signatur.
- **Oppgavesjangre:** A, B, C, D, E, F, H. Mønster: en «maur langs skjæringskurve»-oppgave + en fluks-med-kontroll + en Lagrange på sirkel.
- **Typiske feil:** Tidsstyring (fluksoppgaven tar for lang tid); glemmer føringspoengene under press; hopper over kontroll-mot-teorem.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 2 (2012–2014-mal, flere korte oppgaver + teori)

- **id:** `ma1103-7-5` · **number:** 7.5 · **estimatedMinutes:** 90 · **prerequisites:** `ma1103-7-4`
- **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler 2012–2014-malen (8–10 korte, poengeffektive oppgaver med innslag av rene teori-/verifikasjonsoppgaver): fluks via teorem, Stokes-formulering, curl ∇f = 0-bevis, harmonisk funksjon, betinget optimering og grenseverdi.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler en «typisk» 2012–2014-eksamen (flere korte oppgaver, teori-innslag voksende). Miks: O1 fluks via divergensteorem (A/G) + O2 Stokes-formulering + verifikasjon (G) + O3 curl $\nabla f=0$-bevis (N) + O4 harmonisk funksjon (J) + O5 betinget optimering (C) + O6 grenseverdi (I) + O7 Green (G) + O8 kritiske punkt (B). Prioritet: perfekt.
- **Innholdskontrakt:** 8–10 nyskrevne, likt vektede korte oppgaver over 4 timer, med minst to rene teori-/verifikasjonsoppgaver («formuler teoremet», «vis at …»). Løsningsforslag i eget `collapsible` per oppgave som A-besvarelse, med delpoeng-notat. Dekker de tre satsene og bevis-sjangeren.
- **Oppgavesjangre:** A, B, C, G, I, J, N. Mønster: to «formuler/verifiser teorem» + ett kort bevis + korte regneoppgaver.
- **Typiske feil:** Undervurderer teori-/bevisoppgavene; formulerer teoremer uten forutsetninger; nevner ikke hvor $C^2$ brukes; tidsstyring på mange korte oppgaver.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 7.6: Øvingseksamen 3 (2004–2006-mal, få store kjedede oppgaver)

- **id:** `ma1103-7-6` · **number:** 7.6 · **estimatedMinutes:** 90 · **prerequisites:** `ma1103-7-5`
- **kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler 2004–2006-malen (5 store, flerdelte oppgaver som bygger en hel case): ett romområde drøftet med både volum, fluks og divergensteorem; én funksjon drøftet fullt ut — beredskap for det «kjedede» designet.
- **Forkunnskaper (kryssbok):** Hele boka.
- **Eksamensbelegg:** Speiler den eldre «kjedede» malen (5 store flerdelte oppgaver). Miks: én stor case per pilar — (I) romområde med volum + fluks + divergensteorem-kontroll (F/A/G), (II) funksjon fullt drøftet: kritiske punkt + global + retningsderivert (B/E), (III) konservativt felt + arbeid + Green (D/G), (IV) signatur-teorioppgave utvidet (H), (V) betinget optimering + parametrisering (C/J). Beredskap for kjedet format. Prioritet: kunne.
- **Innholdskontrakt:** 5 store, flerdelte oppgaver (a/b/c/d) over 4 timer, der hver bygger en hel case (samme objekt drøftet på flere måter). Løsningsforslag i eget `collapsible` per oppgave som A-besvarelse, med delpoeng-notat per delspørsmål. Trener dybde-per-oppgave og kontroll-mot-kontroll.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, J (kjedet). Mønster: én oppgave som regner samme fluks direkte OG med divergensteorem OG tolker resultatet.
- **Typiske feil:** Mister rød tråd i en flerdelt case; regner en deloppgave på nytt der forrige resultat kunne brukes; tidsstyring på få tunge oppgaver.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne temaprøver — øvingseksamenene (7.4–7.6) er delens prøver.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag
etter føringsstandarden (7.1): full begrunnelse, navngitte teoremer, spesifisert
orientering, kommenterte nullfaktorer, sjekkede forutsetninger, poengfordeling.
Legges som prøvekapitler (`ma1103-<del>-prove`, chapterNumber `<del>.P`) etter
plattformens mønster.

**Del 1 — Funksjoner av flere variable: grenser, kontinuitet, deriverbarhet**
1. Prøve 1.A (35 min): Grenseverdi — polar vs. veier, eksisterer/eksisterer ikke (kap. 1.1, sjanger I).
2. Prøve 1.B (40 min): Kontinuitet + partiellderiverte fra definisjonen i origo (kap. 1.2, sjanger H).
3. Prøve 1.C (45 min): Deriverbarhet via restleddet + «deriverbar ⇒ kontinuerlig» (kap. 1.2–1.3, sjanger H).
4. Prøve 1.D (45 min): Signatursimulering — kontinuitet + partiellderivert-fra-def + deriverbarhet kjedet (kap. 1.1–1.4, sjanger H + I).

**Del 2 — Gradient, retningsderivert, tangentplan og kjerneregel**
1. Prøve 2.A (35 min): Gradient + retningsderivert (normaliser!) + raskest vekst (kap. 2.1, sjanger E).
2. Prøve 2.B (40 min): Retningsderivert langs skjæringskurve med fart (NTNU-signatur) (kap. 2.2, sjanger E).
3. Prøve 2.C (40 min): Tangentplan til graf/nivåflate + kjerneregel (kap. 2.3, sjanger J).
4. Prøve 2.D (40 min): Harmonisk-verifikasjon under substitusjon + parametrisering (kap. 2.3–2.4, sjanger J).

**Del 3 — Optimering: fri og betinget**
1. Prøve 3.A (40 min): Kritiske punkt + Hessian, inkl. ett $\Delta=0$-tilfelle (kap. 3.1, sjanger B).
2. Prøve 3.B (40 min): Lagrange på sirkel/ellipse med nullfaktordisiplin (kap. 3.2, sjanger C).
3. Prøve 3.C (40 min): Substitusjon med endepunktsjekk + global på lukket disk (kap. 3.2–3.3, sjanger C + B).
4. Prøve 3.D (45 min): Optimeringssimulering — fri + betinget + global kjedet (kap. 3.1–3.3, sjanger B + C).

**Del 4 — Multiple integraler og koordinatskifter**
1. Prøve 4.A (35 min): Dobbeltintegral med byttet integrasjonsrekkefølge (kap. 4.1, sjanger F-relatert).
2. Prøve 4.B (40 min): Variabelskifte med Jacobi / polar dobbeltintegral (kap. 4.2, sjanger F-relatert).
3. Prøve 4.C (45 min): Trippelintegral volum i sylinderkoordinater fra skjæring (kap. 4.3, sjanger F).
4. Prøve 4.D (45 min): Kule-masse med tetthet $\propto\rho^2$ + formelutledning kjedet (kap. 4.3–4.4, sjanger F).

**Del 5 — Vektorfelt: divergens, curl, konservative felt og integraler**
1. Prøve 5.A (35 min): Curl/div-beregning + curl $\nabla f=0$-identitet (kap. 5.1, sjanger curl/div + N).
2. Prøve 5.B (40 min): Konservativt felt — finn $\varphi$ + arbeid (kap. 5.2, sjanger D).
3. Prøve 5.C (45 min): Fluks direkte gjennom sammensatt flate med orientering (kap. 5.4, sjanger A).
4. Prøve 5.D (50 min): Fluks direkte OG via divergensteorem/Stokes — kontroll-mot-kontroll (kap. 5.5, sjanger A + G).

**Del 6 — De tre integralsatsene: Green, Stokes og divergensteoremet**
1. Prøve 6.A (35 min): Greens teorem — formuler + anvend (kurveintegral → dobbeltintegral) (kap. 6.1, sjanger G).
2. Prøve 6.B (40 min): Divergensteoremet — anvend + singularitetsfelle (kap. 6.2, sjanger G).
3. Prøve 6.C (40 min): Stokes — formuler + verifiser på halvkule (kap. 6.3, sjanger G).
4. Prøve 6.D (45 min): Velg-riktig-sats — tre deloppgaver, ett av hvert teorem, med begrunnet valg (kap. 6.4, sjanger G).

### Øvingseksamener (3 komplette sett — se kap. 7.4–7.6)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.4) | 2009–2011-mal, ~6 oppgaver, anvendte kontekster (primær) | A(O1, tyngst) + B(O2) + C(O3) + D(O4) + F(O5) + H(O6) + E (retningsderivert langs kurve) |
| Øvingseksamen 2 (kap. 7.5) | 2012–2014-mal, 8–10 korte oppgaver + teoriinnslag | A/G(O1) + G(O2 Stokes) + N(O3 bevis) + J(O4 harmonisk) + C(O5) + I(O6) + G(O7 Green) + B(O8) |
| Øvingseksamen 3 (kap. 7.6) | 2004–2006-mal, 5 store kjedede oppgaver (beredskap) | 5 store case over A/B/C/D/E/F/G/H/J, hver bygd som en hel drøfting med kontroll-mot-kontroll |

Til sammen dekker de tre settene samtlige sjangre A–J minst én gang, og trener
**alle tre formatregimer** (7.4 anvendt/primær, 7.5 korte+teori, 7.6 kjedet/beredskap),
med **fluks/flateintegral og de tre integralsatsene som gjennomgående tyngdepunkt**.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Vektoranalysen dominerer, alt begrunnes** — eksamensformen (4-timers
   skoleeksamen, enkel kalkulator + formelark, historisk 100 %, i dag skriftlig 70 %
   + prosjekt 30 % *(verifiser)*), de faste sjangrene og hovedfunnet: vektoranalyse
   berører hvert sett; fluks er hyppigst og tyngst (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 5–6 vektoranalyse — bruk mest tid; Del 3 optimering; kap. 1.2 signatur-
   teorioppgaven; kap. 4.3 volum), kunne (Del 2 gradient/tangent, Del 4.1–4.2
   integraler, linjeintegral), kjenne (buelengde, nivåkurve-skisse, vektorpotensial,
   Hölder ⇒ kontinuitet) — med notatet om at fluks + de tre satsene alene kan avgjøre
   en bokstavkarakter.
3. **Sjangerguiden** — A–J med løsningsoppskriftene fra drillkapitlene (1.4, 3.3,
   4.4, 5.5, 6.4, 7.2) i kortform, inkl. valgtreet for de tre integralsatsene.
4. **Sensorreglene** — «alt begrunnes; vis rikelig mellomregning», kommenter
   nullfaktorer (V2010), bruk definisjonen (partiellderivert/deriverbarhet i punkt),
   $\Delta=0$ konkluderer ikke, sjekk teoremforutsetninger (singularitetsfellen,
   V2009), spesifiser orientering, uttal begrensethet i skvis, alternative løsninger
   honoreres (fra kap. 7.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (forkortet nullfaktor
   uten null-sjekk, «bare se på eksponenten» i retningsderivert, derivertformel i
   stedet for definisjon, divergensteoremet ved singularitet, feil/uspesifisert
   orientering, glemt endepunkt i substitusjon, $\Delta=0$ som avgjort, glemte
   Jacobi-/volumfaktorer, manglende begrunnelse på «opplagte» steg, ufullstendig
   $\nabla f=0$-løsning, variabelskifte kun i grensene), hver med henvisning til
   kapitlet som forebygger den.
6. **Definisjons-, teorem- og formelliste** — apparatet fra innholdskontraktene
   (gradient/retningsderivert, annenderiverttesten + $\Delta$, deriverbarhet fra
   definisjonen, Lagrange, koordinatelementene, div/curl + identitetene, konservativt
   felt + potensial, fluks/flateelement, Green/Stokes/divergensteoremet med
   forutsetninger) — med markering *utlede/kunne aktivt* (deriverbar ⇒ kontinuerlig,
   curl $\nabla f=0$, teoremformuleringene, potensialkonstruksjonen) vs. *kun bruke*
   (kontinuerlige partiellderiverte ⇒ deriverbar, koordinatformlene fra arket), og en
   note om hva som står på formelarket vs. hva som må sitte utenat.
7. **Studieløp** — semesterplan: Del 0 → Del 1 (grenser/kontinuitet/deriverbarhet —
   inngangen) → Del 2 (gradient/retningsderivert) → **Del 3 (optimering — pilar,
   drill nullfaktordisiplin)** → Del 4 (integraler + koordinater) → **Del 5–6
   (vektoranalyse — bruk mest tid; fluks + de tre satsene til automatikk)** →
   temaprøvene → føringsstandarden (7.1) → bevisdrill (7.2) → prosjektcase (7.3) →
   de tre øvingseksamenene under tidspress. Format-notat: tren primært den anvendte
   malen (7.4) og den korte+teori-malen (7.5), men gå gjennom den kjedede malen (7.6)
   som beredskap — og **verifiser prosjektdelens format mot fersk emnebeskrivelse**.

---

## 6. Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 14 |
| 1 | 1.1–1.4 | 20+22+16+16 = **74** | 20+26+16+10 = **72** |
| 2 | 2.1–2.4 | 18+18+16+14 = **66** | 22+20+18+14 = **74** |
| 3 | 3.1–3.3 | 20+20+16 = **56** | 24+24+10 = **58** |
| 4 | 4.1–4.4 | 16+16+20+16 = **68** | 18+18+24+10 = **70** |
| 5 | 5.1–5.6 | 18+18+16+20+16+14 = **102** | 22+22+18+24+12+12 = **110** |
| 6 | 6.1–6.4 | 18+18+16+16 = **68** | 20+20+18+12 = **70** |
| 7 | 7.1–7.6 | 16+16+12+6+6+6 = **62** | 18+14+10+0+0+0 = **42** |
| **Sum** | **32 kap.** | **508 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene i tabellen er **minimum per kapittel** (gulv 508/510, trygt over ≥500-kravet);
forfatteren kan overskyte, aldri underskride. **Siktemål 600+/600+:** forfatteren
oppfordres til å overskyte kapittelkvotene med i snitt ~3–4 quiz og ~4 flashcards per
tema-/drillkapittel, slik at boka lander godt over gulvet uten å endre fordelingen.
Flashcard-tettheten holdes over 500 fordi MA1103 er
et formel- og teoremrikt fag: koordinatelementene, de tre integralsatsene med
forutsetninger, curl/div-identitetene, Lagrange-oppsettet og deriverbarhetsdefinisjonen
er selve puggematerialet (selv om formelarket letter noe av det). Quiz-fordelingen
speiler eksamensvektene: **Del 5–6 (vektoranalyse — tyngdepunktet, 102+68 = 170 quiz)
bærer mest**, fulgt av Del 1 (signatur-teori, 74), Del 3 (optimering, 56) og Del 4
(integraler, 68); drillkapitlene holdes lavere på flashcards (10–12) fordi deres verdi
er oppgaver, ikke kort; øvingseksamenene 0 flashcards.

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `ma1103` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames` fra §2-tabellen
   (del-nummer → seksjonstittel). **`number` SKAL være del-basert** («5.4», ALDRI
   lineær «24») — bokforsiden grupperer på `number.split('.')[0]`. Prosareferanser i
   innholdet bruker samme del-baserte form («kap. 5.4»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J og frekvenstallene som resten
   refererer til.
3. **Grunnlagsdeler i avhengighetsrekkefølge**: Del 1 (grenser/kontinuitet/deriverbarhet)
   → Del 2 (gradient/retningsderivert/tangentplan) → Del 3 (optimering) → Del 4
   (integraler).
4. **Tyngdepunktet**: Del 5 (vektorfelt, 6 kap.) er bokas største og viktigste — kan
   splittes på to agenter (f.eks. 5.1–5.3 + 5.4–5.6), men **begge må lese HELE delens
   kontrakter**, og delen flagges for konsistenssjekk (notasjon $\hat{\mathbf N}$/$dS$,
   orienteringskonvensjon, singularitetsfellen). Del 6 (de tre satsene, 4 kap.) bygger
   på Del 5.
5. **Eksamenstrening**: Del 7 bygges av én agent som leser HELE skjelettet (7.1
   føring, 7.2 bevis, 7.3 prosjekt, 7.4–7.6 øvingseksamener) — øvingseksamenene skal
   speile §4-miksen og §2-fordelingen.
6. **Prøvekapitler** (`ma1103-<del>-prove`, chapterNumber `<del>.P`), én per temadel
   1–6 (Del 7 bruker øvingseksamenene som prøver), bygges av samme agent som delen.
7. **Kvotene fra §6 er fasit** — ikke overstyr i prompt; sikt mot måltallene (604/628).

### Verifikasjon

- json.load alle filer; kvotesum mot §6; døde kryssbok-lenker (kun lenk til kapitler
  som finnes — R1/R2/S2 verifiseres, ubygde NTNU-forkunnskapsemner er klartekst).
- Faktasjekk mot innholdskontraktene; etterregn alle talleksempler (fluks, volum,
  Lagrange, curl/div).
- Konsistens på tvers av agentgrenser i Del 5 (notasjon, orientering, singularitetsfelle).
- `(verifiser)`-markeringer: prosjektdelens format/omfang, dagens vekting (arkiv 2014),
  kryssbok-lenker til VGS-kapitler.
- `npx tsc --noEmit` + `npm run build` + prod-server/curl på institusjonsside,
  bokforside, ≥3 kapitler (teori/drill/prøve), quiz- og flashcard-rute.

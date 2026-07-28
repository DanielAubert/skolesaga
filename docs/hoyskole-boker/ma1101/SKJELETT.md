# Bokskjelett: MA1101 Grunnkurs i analyse 1 (NTNU) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (NTNUs MA1101-arkiv 2003–2023: 18 løsningsforslag lest grundig, ~15 eldre
> skummet). Arketype: **DNA-regnefag** (`DNA-regnefag.md`), variant **teori-/
> bevisfag** — kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og
> gjentas ikke i sin helhet her. Format-forbilder: `../tma4110/SKJELETT.md` og
> `../ma0301/SKJELETT.md` (samme NTNU-matte-familie, samme «begrunn-alt»-profil og
> egen bevisferdighets-del).
>
> **KRITISK — HVA DENNE BOKA DEKKER (les før alt annet):** MA1101 er NTNUs
> **én-variabel analysegrunnkurs** (reelle tall, grenser, kontinuitet, derivasjon,
> integrasjon, difflikninger, følger/rekker, samt **matematisk stringens og
> bevisteknikk**). Den overlapper TEMATISK med UiO MAT1100 og TMA4100-tradisjonen,
> men bygges på MA1101s **egne arkiv og bevis-/teoriprofil** — IKKE MAT1100s.
> Avgjørende avgrensninger fra analysen §6: **INGEN komplekse tall, INGEN lineær
> algebra/matriser, INGEN flervariabel-gradient** (null forekomster i arkivet).
> Til gjengjeld er **ε-δ-teori, uniform kontinuitet, sup/inf-argumenter,
> difflikninger og rekker mer fremtredende** her enn i nabofagene. Frekvensene
> under er hentet fra analysens §2 (dokumentert på et sammenhengende 2012–2023-
> tekstlag) og er dermed eksamensverifiserte.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma1101` |
| Tittel | **MA1101 Grunnkurs i analyse 1** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Arketype | Regnefag (variant: **teori-/bevisfag** — «motiver alle beregninger/bevis», egen bevis-/definisjons-del; kombinasjonen av tung regnedrill OG stringent analyse er MA1101s signatur) |
| Antall kapitler | **36** (1 eksamenskart + 29 tema/drill + 6 eksamenstrening/teori/bevis) + 28 prøvekapitler |
| Estimert totaltid | **~2 060 min ≈ 34 timer** |
| Quiz totalt | **510** (krav ≥500) |
| Flashcards totalt | **622** (krav ≥500; sikt 600–650 for et definisjons-, teorem- og bevisteknikkrikt analysefag med vedlagt formelark men tungt teoriapparat) |

**Pitch (ett avsnitt):** MA1101 er NTNUs grunnkurs i **matematisk analyse i én
variabel** (kalkulus + begynnende stringens), bygget på R2. Eksamen er en
**4-timers skriftlig skoleeksamen** med **8–10 likt vektede punkter** (kalkulator
kode D + vedlagt formelark; nyere ordning har todelt vurdering skoleeksamen 70 % +
prosjekt 30 % *(verifiser)*). Det som skiller MA1101 fra en ren regneeksamen er den
**obligatoriske teori- og bevisprofilen**: hvert nyere sett åpner med en
**Sann/Usann-teoriblokk** og inneholder minst ett bevis- eller definisjonspunkt
(ε-δ, sekant-/middelverdisetning med hjelpefunksjon, uniform kontinuitet, sup/inf,
eller den berømte **signaturoppgaven** kontinuitet/deriverbarhet i punkt med
oscillasjonsfellen). Ryggraden studenten driller er de to bærende regnetemaene:
**integrasjonsteknikk** (100 % — delbrøk, substitusjon, delvis, fullført kvadrat)
og **førsteordens differensiallikninger** (94 % — separabel + integrerende faktor,
initialverdiproblem), pluss **funksjonsdrøfting med skisse** (89 %) og
**grenser/L'Hôpital** (72 %). Sensorregelen som preger alt: **motiver hvert svar,
navngi teoremet som bærer argumentet** (skjæringssetningen, sekantsetningen,
fundamentalteoremet, sammenligningstesten, skviseteoremet, L'Hôpital med
[0/0]-markering), og **vis deriverbarhet i punkt fra differansekvotienten** — ikke
fra derivertformelen. Boken vektlegger den **nyere malen** (2018–2023) tyngre enn
arkivsnittet: Sann/Usann-blokk, Taylor med feilestimat, rekker, sup/inf og uniform
kontinuitet er alle stigende og skal ha solid plass.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Motiver alle beregninger og bevis; vis rikelig mellomregning.** Ordrett
   standardinstruks på hvert sett («Motiver dine beregninger/beviser»). Riktig
   sluttsvar uten begrunnelse gir liten uttelling (fasit 2008–2009 sier det
   eksplisitt, særlig i optimering og eksistensoppgaver). Hvert løsningsforslag
   skrives som **A-besvarelse**: hvert steg vist, hvert teorem navngitt, verbal
   konklusjonssetning, sluttsvar markert. Unntak: Sann/Usann-blokken krever ikke
   begrunnelse i besvarelsen (men studenten må ha teorien i fingrene).

2. **Teoremer skal navngis når de bærer argumentet.** Sensor trekker for forveksling
   (fasit 2008: skjæringssetningen ↔ sekantsetningen ↔ Rolle). Faste navn:
   **skjæringssetningen** (= mellomverdisetningen), **sekant-/middelverdisetningen**,
   **ekstremalverdisetningen**, **fundamentalteoremet** + kjerneregelen (Leibniz),
   **sammenligningstesten**, **skviseteoremet**, **L'Hôpital** (med eksplisitt
   [0/0]- eller [∞/∞]-markering før hver bruk).

3. **Deriverbarhet i punkt vises FRA differansekvotienten.** $f'(a)=\lim_{h\to0}
   \frac{f(a+h)-f(a)}{h}$ — å derivere uttrykket og ta grensen er IKKE gyldig bevis
   der definisjonen etterspørres. Grense-av-derivert-kriteriet godtas KUN når
   grensen faktisk finnes OG kontinuitet er etablert. **Oscillasjonsfellen** ($f$ kan
   være deriverbar i 0 selv om $\lim f'(x)$ ikke finnes) er en gjenganger og en klar
   karakterskiller — den skal ha eget fokus (kap. 3.4).

4. **Føringsstandard for regnesjangrene:** substitusjoner **bokføres** ($u$, $du$,
   nye grenser); delvis integrasjon dokumenterer $u/v'$-valget; **fortegnsskjema
   tegnes** for monotoni/konveksitet; uegentlige integraler føres med **eksplisitt
   grense** (lim$_{R\to\infty}$ — «sett inn ∞» godtas ikke); drøfting avsluttes med
   **skisse** når det bes om; separabel/lineær difflikning oppgir **initialbetingelsen
   satt inn** og glemmer ikke konstantløsningene der man delte på null.

5. **Analysenotasjon er bokstandard:** grense $\lim_{x\to a}f(x)=L$, ensidige
   grenser $\lim_{x\to a^\pm}$; kontinuitet i $a$: $\lim_{x\to a}f(x)=f(a)$; ε-δ:
   $\forall\varepsilon>0\ \exists\delta>0:\ |x-a|<\delta\Rightarrow|f(x)-f(a)|<
   \varepsilon$; derivert $f'(x)$, $\frac{dy}{dx}$; ubestemt/bestemt integral
   $\int f\,dx$, $\int_a^b f\,dx$; integrerende faktor $\mu=e^{\int p\,dx}$;
   fundamentalteoremet $\frac{d}{dx}\int_a^{g(x)}h(t)\,dt=h(g(x))\,g'(x)$;
   uegentlig integral $\int_a^\infty f=\lim_{R\to\infty}\int_a^R f$; Riemann-sum
   $\frac1n\sum_{k=1}^n f(k/n)\to\int_0^1 f$; følge $(a_n)$, $\lim_{n\to\infty}a_n$;
   rekke $\sum_{n=1}^\infty a_n$; sup/inf som minste øvre / største nedre skranke;
   Taylor-/McLaurin med **Lagrange-restledd** $R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}
   x^{n+1}$; $p$-integral $\int_1^\infty x^{-p}$ (konvergerer ⇔ $p>1$).

6. **Eksakte svar** (heltall, brøk, $\sqrt3$, $\frac\pi4$, $\ln2$, $e^{2}-1$), aldri
   desimaltilnærming — unntatt der en numerisk tilnærming er selve svaret
   (Taylor-feilestimat, Newton-steg). Et urent mellomsvar signaliserer regnefeil.

7. **Alternative løsninger honoreres konsekvent** (fasitene skriver ofte begge
   veier): skive vs. skall, separabel vs. integrerende faktor, L'Hôpital vs. Taylor,
   substitusjon vs. delbrøk, ε-δ vs. følgekarakterisering. Der boka viser én metode,
   nevner den den likestilte alternative.

8. **Bevis-/teoriblokken er obligatorisk og er MA1101s tydeligste karakterskiller.**
   Sann/Usann-åpning (fra 2018), ε-δ, uniform kontinuitet, sup/inf, sekant-med-
   hjelpefunksjon og skjæringssetning-med-entydighet utgjør minst 2–3 punkter i
   hvert nyere sett. Boka har egen bevis-/teori-del (Del 8) OG forankrer bevistemaene
   i sine fagkapitler. Bevis føres komplett: **forutsetningssjekk** (særlig
   kontinuitet før skjæringssetningen), navngitt teorem, skille «⇒»/«⇔», og — ved
   «bevis eller avkreft» — **ett moteksempel** avkrefter fullstendig.

9. **Eksistens OG entydighet begrunnes separat.** «Nøyaktig N løsninger» krever både
   eksistens (skjæringssetning + kontinuitet uttalt) OG antallsbegrensning (monotoni,
   $f'$ fast fortegn). Fasit 2008/2009 påpeker at mange bare viser den ene halvdelen.
   Optimering krever **globalitetsargument** (annenderiverttest / fortegnsskjema),
   ikke bare $f'=0$.

10. **Aktiveringsmarkør for ubygde NTNU-forkunnskapsemner.** MA1101 bygger på **R2**
    (og R1/S2) fra VGS — de er bygde bøker og lenkes normalt, kun til kapitler som
    finnes. Forkunnskaper dekket i R2: derivasjon, integrasjon, difflikninger,
    følger/rekker, trigonometri. Ingen NTNU-forkunnskapsemne foran MA1101 (det er et
    førstesemesteremne); der en referanse peker på et ubygd emne skrives den som
    **klartekst** med *(NTNU-forkunnskapsemne, ikke bygget ennå; aktiver lenke når
    den finnes)*.

11. **Ærlighet om format og arkiv.** (a) Formatet skiftet rundt **2018–2020**:
    relaterte rater og omdreiningsvolum (dominerte 2008–2015) er nesten borte; inn
    kommer Sann/Usann-blokk, Taylor+feilestimat, rekker, sup/inf, uniform kontinuitet
    — boka kalibreres mot den **ferske malen**. (b) **Vurderingsordningen endret seg**
    til todelt (skoleeksamen 70 % + prosjekt 30 %) i nyere år — **prosjektdelen er
    IKKE arkivbelagt**; dens sjangre er ukjente og merkes *(verifiser)*. (c)
    **Numeriske metoder** (Newton, trapes/Simpson, halvering) står i pensum men er
    bare **indirekte** belagt i oppgavene (via feilestimat og rot-innkapsling) —
    dekkes fordi de er pensum, merket «svakt eksamensbelegg». (d)
    **Annenordens difflikning + differensligning** stod på formelarket t.o.m. ~2015
    men er borte fra nyere oppgaver — dekkes lett, merket «eldre profil». (e) Der en
    metode er faglig standard snarere enn ordrett dokumentert, merkes den «⚠️ metode
    = faglig standard».

### 1.6 Hjelpemiddel- og formelark-kalibrering (skal gjengis i Del 0)

- **Hjelpemidler:** Kalkulator **kode D** (bestemt, enkel — ingen CAS) + **vedlagt
  formelark** (eksponential-/logaritme-/trig-/arcus-derivasjon og -identiteter,
  eksakte trig-verdier, og i eldre år annenordens differensligning). Enkelte
  korona-sett (2020–2021) hadde kode B (alle hjelpemidler), kompensert med teori-/
  eksistens-/«finn et eksempel»-oppgaver. Boka trener mot **kode D**: standardderiverte
  og -identiteter kan slås opp, men **hele teori-, teknikk- og bevisapparatet må
  sitte** (ingen CAS gjør regnearbeidet for deg).
- **Formelark-note per kapittel:** der et resultat står på formelarket, merkes det
  «(formelark)» slik at studenten vet hva som kan slås opp vs. hva som må kunnes.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): reelle tall/sup/inf/følger er
grunnlaget og kompletthetsspråket; grenser + kontinuitet + ε-δ er analysens motor;
derivasjon og dens anvendelser (drøfting, signaturoppgaven, MVT) bygger på grenser;
integrasjon (teknikk + fundamentalteorem) er det store regnetyngdepunktet; de
anvendte integralene (uegentlige, volum, Riemann-sum) bygger på teknikken;
differensiallikningene bygger på integrasjon; følger/rekker/Taylor er den nyere
teoriblokken (bygger på grenser og integrasjon); eksamenstreningen + bevis-delen er
sist. **Frekvensen styrer omfanget**, ikke rekkefølgen: 89–100 %-temaer får teori +
eget drillkapittel; nyere/stigende temaer (Taylor, rekker, sup/inf, uniform
kontinuitet) får solid plass til tross for lavere arkivsnitt; fallende temaer
(volum, relaterte rater, 2. ordens ODE) får ett kompakt kapittel. Seksjonstitler
(blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, føringsstandarden og formelarket | 1 | Prioriteringsverktøyet + formelark-kalibrering + teori-vs-regne-balansen; kjerne i studieguiden. |
| 1 | Reelle tall, sup/inf og følger | 4 | sup/inf 22 % (nytt fra 2021, stigende) + følger 39 % (voksende) → kunne/nivå 2, men kompletthetsspråket under alt; ε-argument for sup er toppsjikt-stoff. |
| 2 | Grenser, kontinuitet og ε-δ | 4 | Grenser/L'Hôpital 72 % + ε-δ 33 % + uniform kontinuitet 17 % (nytt, stigende) → perfekt (grenser) + teori-tyngdepunkt (ε-δ/uniform). |
| 3 | Derivasjon og dens anvendelser | 6 | Funksjonsdrøfting 89 % + signaturoppgaven 72 % + MVT/sekant 56 % + invers-derivert/implisitt 44 % + optimering 39 % → perfekt → bokas regne-tyngdepunkt nr. 1 + drill. |
| 4 | Integrasjon: teknikk og fundamentalteoremet | 5 | Integrasjonsteknikk **100 %** + fundamentalteorem 50 % → perfekt → bokas regne-tyngdepunkt nr. 2 + eget drillkapittel. |
| 5 | Anvendte integraler | 3 | Uegentlige integraler 67 % (stigende) + Riemann-sum 56 % + volum/buelengde 44 % (fallende) → kunne; uegentlige får mest, volum kompakt. |
| 6 | Differensiallikninger | 3 | 1. ordens ODE **94 %** (minst én hver eksamen) → perfekt → separabel + integrerende faktor + drill; 2. ordens (eldre profil, 22 %) kompakt. |
| 7 | Følger, rekker og Taylor | 3 | Taylor+feilestimat 39 % (5/7 siste sett) + rekker 22 % (fra 2020) → den nyere blokken; stigende → solid plass tross lavt snitt. |
| 8 | Eksamenstrening, teori og bevis | 6 | Sann/Usann-drill + bevisføringsstandard + ε-δ/uniform/sup-inf-bevisdrill + 3 komplette øvingseksamener (den ferske malen). |

**Avvik fra DNA-malen (dokumentert):**

1. **35 tema-/treningskapitler — innenfor DNA-taket (20–35), i øvre sjikt.**
   Begrunnet i at MA1101 dekker **hele én-variabel-kalkulusen PLUSS et selvstendig
   stringens-/bevisapparat** som er en egen karakterskiller. Flashcard-tettheten er
   bevisst høy (622) fordi analysefaget er definisjons-, teorem- og bevisteknikkrikt:
   alle setningsnavn, ε-δ-/sup-inf-definisjoner, integrasjonsteknikk-oppskriftene,
   standardgrensene og bevismalene er selve puggematerialet (formelarket dekker bare
   deriverte/identiteter, ikke teoriapparatet).

2. **Egen bevis-/teori-del (Del 8) I TILLEGG til at bevistemaene forankres i sine
   fagkapitler.** Fordi teori-/bevisinnslaget er **obligatorisk i hvert nyere sett**
   (Sann/Usann-blokk + minst ett bevispunkt), er bevisferdigheten en selvstendig
   ferdighet med eget drillbehov — parallelt med ma0301 og tma4110s bevis-drill.
   Sann/Usann-beredskapen (hele teoripensumet + moteksempler) får eget kapittel (8.2).

3. **Signaturoppgaven får eget kapittel (3.4).** Kontinuitet/deriverbarhet i punkt
   for oscillasjonsfamilien $x^k\sin(1/x^m)$ (72 %, gjennom hele perioden) med
   definisjonsbevis, skvis og **oscillasjonsfellen** er den tydeligste
   karakterskilleren blant regnesjangrene — den får eget fokus, ikke bare et avsnitt.

4. **Integrasjonsteknikk (100 %) og 1. ordens ODE (94 %) er de to regne-søylene**
   og får hver teori + eget drillkapittel (4.5 og 6.3). Dette er hvor «bestått»
   hentes; ingen student kan stå uten disse.

5. **Nyere temaer prioriteres over arkivsnittet.** Taylor+feilestimat (5/7 siste
   sett), rekker (fra 2020), sup/inf (fra 2021) og uniform kontinuitet (fra 2018) får
   solid plass til tross for lave langtidssnitt, fordi de er sterkt stigende og
   preger den ferske malen boka kalibreres mot (§1.5 punkt 11a).

6. **Fallende/eldre temaer holdes kompakte.** Omdreiningsvolum/buelengde (44 %,
   fallende) → ett kapittel (5.3); relaterte rater (33 %, forsvunnet etter 2016) →
   avsnitt i optimeringskapitlet (3.6); 2. ordens ODE + differensligning (eldre
   profil, borte fra oppgaver etter ~2015) → ett kompakt kapittel (6.4 *(bør kjenne
   til)*); numeriske metoder → integrert i Taylor-/skjæringssetning-kapitlene, merket
   «svakt eksamensbelegg».

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–P) refererer til
oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i bokas Del 0: **A** 1. ordens
difflikning/IVP, **B** integrasjonsteknikk (delbrøk/substitusjon/delvis/fullført
kvadrat), **C** funksjonsdrøfting med skisse, **D** deriverbarhet/kontinuitet i
punkt (signaturoppgaven), **E** grenseverdier/L'Hôpital, **F** uegentlige integraler
(sammenligning), **G** Riemann-sum som integral, **H** eksistens-/teoribevis
(skjæringssetning + MVT/sekant), **I** Sann/Usann-teoriblokk, **J** Taylor/McLaurin
med feilestimat, **K** fundamentalteoremet + kjerneregel, **L** implisitt derivasjon
og tangent, **M** derivert av invers funksjon, **N** omdreiningsvolum/buelengde,
**O** følger/rekker/sup/inf, **P** ε-δ- og uniform-kontinuitet-bevis. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør (jf. §1.5 punkt 10):** VGS-forkunnskapsbøker (R2, R1, S2) lenkes
normalt, kun til kapitler som finnes; ubygde NTNU-emner skrives som klartekst med
markøren.

---

### Del 0 — Eksamenskartet, føringsstandarden og formelarket

#### Kapittel 0.1: Eksamenskartet: 8–10 likt vektede punkter, teori-vs-regne-balansen og formelarket

- **id:** `ma1101-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes dette emnet: den stabile 4-timers skoleeksamenen med 8–10 likt vektede punkter, de faste søylene (integrasjonsteknikk, difflikning, drøfting, grenser, signaturoppgaven, Sann/Usann-teoriblokk), sensorreglene, formelark-kalibreringen og teori-vs-regne-balansen som er MA1101s signatur og styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (18 sett grundig lest 2008–2023 + ~15 eldre skummet). Skal gjengi: (i) **vurderingsformen**: 4-timers skriftlig skoleeksamen, 8–10 likt vektede punkter (~25–30 min hver), kalkulator kode D + formelark; nyere todelt ordning skoleeksamen 70 % + **prosjekt 30 %** *(verifiser — prosjektdelen er ikke arkivbelagt)*; (ii) **de faste søylene med frekvens**: integrasjonsteknikk 100 %, 1. ordens difflikning 94 %, funksjonsdrøfting 89 %, deriverbarhet/kontinuitet i punkt 72 %, grenser/L'Hôpital 72 %, uegentlige integraler 67 % (stigende), Riemann-sum 56 %, skjæringssetning 56 %, MVT/sekant 56 %, fundamentalteorem 50 %, invers-derivert 44 %, implisitt/tangent 44 %, volum/buelengde 44 % (fallende), Taylor+feilestimat 39 % (5/7 siste), følger 39 %, optimering 39 %, ε-δ 33 %, relaterte rater 33 % (forsvunnet), rekker 22 % (fra 2020), sup/inf 22 % (fra 2021), 2. ordens ODE 22 % (eldre), uniform kontinuitet 17 % (fra 2018), induksjon 11 %; (iii) **teori-vs-regne-balansen**: hvert nyere sett har minst 2–3 teori-/bevispunkter (Sann/Usann + ett bevis) — dette er den viktigste karakterskilleren og skiller MA1101 fra en ren regneeksamen; (iv) **temaskiftet ~2018–2020**: relaterte rater/volum ut, Sann/Usann + Taylor+feilestimat + rekker + sup/inf + uniform kontinuitet inn; (v) **formelark-kalibreringen** (§1.6 — hva kan slås opp vs. hva må kunnes); (vi) **sensorreglene** (motiver alt, navngi teoremer, deriverbarhet fra differansekvotienten, eksistens+entydighet separat, globalitetsargument i optimering); (vii) **karakterskillene** (bestått ≈ mekanikken: standard integrasjonsteknikk med bokført substitusjon, separabel/lineær ODE med IVP, ekstrema på lukket intervall, L'Hôpital, tangent; midt ≈ + navngitt sammenligningsintegral, skråasymptote+skisse, Riemann-sum, Taylorpolynom, kontinuitetsdelen av signaturoppgaven, invers-derivert; topp ≈ definisjonsbruk i deriverbarhet + oscillasjonsfellen, fullførte bevis med hjelpefunksjon, presis Sann/Usann med moteksempler, sup/inf med ε, uniform kontinuitet bekreftet OG motbevist, «finn eksempel»-oppgaver med verifikasjon, feilestimat med restledd).
- **Innholdskontrakt:** Sjangerkatalogen A–P presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære skoleeksamen** (4 t, 8–10 likt vektede punkter, kode D + formelark): **O1** Sann/Usann-teoriblokk (5–10 utsagn); **O2** én 1. ordens difflikning (IVP, ofte separabel) med eksistensintervall; **O3** «beregn disse integralene» med 2–3 teknikker inkl. minst ett uegentlig med sammenligning; **O4** funksjonsdrøfting med asymptoter og skisse; **O5** Taylor/McLaurin med feilestimat (gjerne på integralfunksjon); **O6** signaturoppgaven (kontinuitet/deriverbarhet i punkt fra oscillasjonsfamilien); **O7** ett teori-/bevispunkt fra {sekant+hjelpefunksjon, ε-δ, uniform kontinuitet, sup/inf, følge/rekke}. **Lesestrategi**: Del 2 (grenser) og Del 3 (derivasjon) er inngangen; **Del 3 og Del 4 er regne-tyngdepunktet**; Del 6 (difflikning) er nesten garantert; Del 7 (Taylor/rekker) og Del 8 (teori/bevis) løfter fra midt til topp.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en 4-timers-plan for 8–10 likt vektede punkter — hvilke søyler er nesten garantert?»; «hva kan du slå opp på formelarket, og hva MÅ sitte utenat?»; «hvorfor er teori-/bevisdelen karakterskilleren, og hvilke bevistyper går igjen?»; «hvilke temaer er stigende i de ferske settene, og hvordan bør det styre lesingen?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de faste søylene; undervurdere teori-/bevisdelen (den viktigste karakterskilleren); tro at MA1101 er ren regneeksamen; blande dette emnet med MAT1100-pensum (komplekse tall / lineær algebra / flervariabel — ikke her); glemme at deriverbarhet skal vises fra differansekvotienten; lese arkivsnittet i stedet for den ferske malen (undervurdere Taylor/rekker/sup-inf/uniform).
- **Quiz: 12 · Flashcards: 16** (frekvenser, sjangerkatalog A–P, sensorregler, formelark-kalibrering, teori-vs-regne-balanse, notasjonskart)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Reelle tall, sup/inf og følger *(prioritet: KUNNE — sup/inf ~22 % (nytt fra 2021), følger ~39 % (voksende); kompletthetsspråket under all analyse)*

#### Kapittel 1.1: Reelle tall, ulikheter og absoluttverdi

- **id:** `ma1101-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Grunnlaget: de reelle tallenes egenskaper, ulikheter og absoluttverdi som verktøy — spesielt trekantulikheten og |x−a|<δ-oversettelsen som all ε-δ-teori hviler på.
- **Forkunnskaper (kryssbok):** Ulikheter og tallregning fra VGS; [Funksjoner](/r2/r2-1-1) fra R2 modner funksjonsspråket.
- **Eksamensbelegg:** Fundament for sjanger P (ε-δ) og O (sup/inf); ikke egen oppgave, men absoluttverdi-manipulasjon er inngangen til hvert ε-δ-bevis. Prioritet: **kunne** (bærer teoriblokken).
- **Innholdskontrakt:** **Reelle tall** og tallinja; **ordningsaksiomene** (regneregler for ulikheter, fortegn ved multiplikasjon med negativt tall); **absoluttverdi** $|x|$ og egenskapene $|xy|=|x||y|$, **trekantulikheten** $|x+y|\le|x|+|y|$ og den omvendte $\big||x|-|y|\big|\le|x-y|$; **intervaller** (åpne/lukkede/uendelige); oversettelsen $|x-a|<\delta\Leftrightarrow a-\delta<x<a+\delta$ (grunnlaget for ε-δ); løsning av ulikheter med absoluttverdi og brøk (fortegnsskjema). Alt til aktiv bruk.
- **Oppgavesjangre:** Innøving mot P. Mønstereksempel: «Løs ulikheten $|2x-1|<|x+3|$, og skriv løsningsmengden som et intervall.»
- **Typiske feil:** Glemmer å snu ulikhetstegnet ved multiplikasjon med negativt tall; feil ved kvadrering av ulikheter med fortegn; slurv i trekantulikheten (bruker den «feil vei»); deler på et uttrykk som kan være null i brøkulikheter.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.2: Sup og inf, øvre/nedre skranke og kompletthet

- **id:** `ma1101-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-1-1`
- **kapitteltype:** teori
- **description:** Supremum og infimum som minste øvre / største nedre skranke, kompletthetsaksiomet, og eksamensvarianten fra 2021+: finn og BEGRUNN sup for en mengde med et ε-argument, pluss regnereglene for sup(A+B) og inf(A−B).
- **Forkunnskaper (kryssbok):** Kap. 1.1.
- **Eksamensbelegg:** Sjanger O (sup/inf), **~22 %** — helt nytt fra 2021, stigende. Fasitens grep: vis at tallet er en øvre skranke OG at ingen mindre skranke finnes (ε-argument). Prioritet: **kunne**, men ε-sup-argumentet er toppsjikt-stoff.
- **Innholdskontrakt:** **Øvre/nedre skranke**, **begrenset mengde**; **supremum** (minste øvre skranke) og **infimum** (største nedre skranke) med den todelte karakteriseringen ($s=\sup A$ ⇔ $s$ er øvre skranke OG for alle $\varepsilon>0$ finnes $a\in A$ med $a>s-\varepsilon$); **kompletthetsaksiomet** (enhver ikke-tom oppad begrenset mengde har sup i $\mathbb R$); forskjellen sup/maks (sup trenger ikke ligge i mengden); **regneregler** $\sup(A+B)=\sup A+\sup B$, $\inf(-A)=-\sup A$; typiske mengder å finne sup for ($\{x:x^2<3\}$ gir $\sup=\sqrt3$, ikke 3). Alt til aktiv bruk (ε-argument for sup er fast i nye sett).
- **Oppgavesjangre:** O. Mønstereksempel: «La $A=\{x\in\mathbb Q:x^2<3\}$. Finn $\sup A$ og begrunn med et $\varepsilon$-argument at ingen mindre øvre skranke finnes.»
- **Typiske feil:** **sup satt til tallet i mengdedefinisjonen** i stedet for kvadratrota (dokumentert felle: $\{x^2<3\}$ gir sup $=\sqrt3$, ikke 3); forveksler sup og maks; feil fortegn/rekkefølge i $\sup(A+B)$/$\inf(A-B)$; viser bare øvre skranke uten ε-halvdelen.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 1.3: Følger: grenser, begrensethet og monotonitet

- **id:** `ma1101-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-1-2`
- **kapitteltype:** teori
- **description:** Tallfølger og deres grenser, «begrenset + monoton ⇒ konvergent» (kompletthetens arbeidsform), og konstruksjonsoppgaven fra de ferske settene: lag en følge med gitt oppførsel (begrenset men divergent, eller gitt asymptotikk).
- **Forkunnskaper (kryssbok):** Kap. 1.2; [Følger og rekker](/r2/r2-3-1) fra R2 gir det konkrete følgebegrepet.
- **Eksamensbelegg:** Sjanger O (følger), **~39 %**, voksende. Fasitens grep: bruk «monoton + begrenset ⇒ konvergent», eller konstruer et eksempel med verifikasjon. Prioritet: **kunne**.
- **Innholdskontrakt:** **Følge** $(a_n)$, **grense** $\lim_{n\to\infty}a_n=L$ (ε-N-definisjon, kjennskap); **begrenset** følge; **monoton** (voksende/avtakende) følge; **monotonisetningen** «begrenset + monoton ⇒ konvergent» (kompletthetsaksiomets arbeidsform — bevisidé); standardgrenser for følger ($r^n\to0$ for $|r|<1$, $n^{1/n}\to1$, $(1+a/n)^n\to e^a$); **konstruksjonsoppgaven**: begrenset men divergent ($(-1)^n$), eller to følger med gitt asymptotisk oppførsel, alltid **med verifikasjon** av kravene. Skviseteoremet for følger (bro til kap. 2.1). Alt til aktiv bruk.
- **Oppgavesjangre:** O. Mønstereksempel: «Gi et eksempel på en begrenset følge som ikke konvergerer, og en avtakende følge begrenset nedad — og forklar hvorfor den siste konvergerer.»
- **Typiske feil:** Tror enhver begrenset følge konvergerer (glemmer $(-1)^n$); bruker monotonisetningen uten å sjekke BEGGE forutsetninger; regnefeil i standardgrensene; gir eksempel uten verifikasjon (toppsjikt krever verifikasjon).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.4: Drill: sup/inf og følgekonstruksjon med verifikasjon

- **id:** `ma1101-1-4` · **number:** 1.4 · **estimatedMinutes:** 65 · **prerequisites:** `ma1101-1-3`
- **kapitteltype:** drill
- **description:** Den nye teoriblokken drillet: ε-argument for sup, sup/inf-regneregler uten fortegnsfeil, og «finn et eksempel»-følgeoppgaver ført med full verifikasjon — nettopp der toppsjiktet skilles fra midten.
- **Eksamensbelegg:** Dekker sjanger O samlet (sup/inf 22 %, følger 39 %). Variantkatalogen: finn+begrunn sup, sup/inf-regneregler, monoton+begrenset-argument, konstruer følge med gitt egenskap + verifiser. Prioritet: **kunne** (men toppsjikt-differensierende).
- **Innholdskontrakt:** Løsningsoppskrift for sup: (1) gjett kandidaten; (2) vis at den er øvre skranke; (3) ε-argument for at ingen mindre skranke finnes. Løsningsoppskrift for følgekonstruksjon: (1) les kravene; (2) gi eksplisitt følge; (3) **verifiser hvert krav**. Gjennomregnet case med sensor-margnotater (ε-halvdelen er poenget; verifikasjonen honoreres). 10–12 oppgaver: fire sup/inf (inkl. regneregler), fire følgekonstruksjon med verifikasjon, to monotonisetning.
- **Oppgavesjangre:** O, alle varianter. Mønstereksempel: «(a) Finn $\inf\{1/n:n\in\mathbb N\}$ og begrunn. (b) Konstruer en følge $(a_n)$ med $\sup=2$, $\inf=0$, som ikke konvergerer.»
- **Typiske feil:** ε-halvdelen droppes; fortegnsfeil i regnereglene; eksempel uten verifikasjon; forveksler sup og maks under tidspress.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Grenser, kontinuitet og ε-δ *(prioritet: PERFEKT — grenser/L'Hôpital ~72 %; teori-tyngdepunkt: ε-δ ~33 %, uniform kontinuitet ~17 % (nytt, stigende))*

#### Kapittel 2.1: Grenser og skviseteoremet

- **id:** `ma1101-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-1-3`
- **kapitteltype:** teori
- **description:** Grensebegrepet regneteknisk: grenselovene, ensidige grenser, standardgrensen sin x/x → 1, og skviseteoremet — arbeidshesten i alt fra oscillasjonsoppgaver til Riemann-summer.
- **Forkunnskaper (kryssbok):** Kap. 1.1, 1.3; [Grenseverdier](/r2/r2-2-1) fra R2 gir det intuitive grensebegrepet.
- **Eksamensbelegg:** Grunnlag for sjanger E, D, G. Fasitens grep: navngi **skviseteoremet** og uttal begrensetheten ($|\sin|\le1$). Prioritet: **perfekt** (skvis brukes i signaturoppgaven).
- **Innholdskontrakt:** **Grense** $\lim_{x\to a}f(x)=L$ (intuitivt + ensidig $\lim_{x\to a^\pm}$); **grenselovene** (sum/produkt/kvotient); grenser i $\pm\infty$; **standardgrenser**: $\lim_{x\to0}\frac{\sin x}{x}=1$, $\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$, **veksthierarki** ($\ln x\ll x^p\ll e^x$), $(1+a/x)^x\to e^a$ (via logaritme); **skviseteoremet** (klem $f$ mellom $g\le f\le h$ med felles grense); konjugattriks for rot-uttrykk. Alt til aktiv bruk (formelark dekker ikke standardgrensene — pugges).
- **Oppgavesjangre:** E, forberedelse D. Mønstereksempel: «Vis med skviseteoremet at $\lim_{x\to0}x^2\sin(1/x)=0$.»
- **Typiske feil:** Bruker grenselovene på $0\cdot\infty$-form uten å omforme; glemmer å uttale $|\sin|\le1$ i skvis; feil ved konjugattriks; forveksler $\lim\frac{\sin x}{x}$ (→1 i 0) med oppførsel i $\infty$.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.2: L'Hôpital og de ubestemte formene

- **id:** `ma1101-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-2-1`
- **kapitteltype:** teori
- **description:** Alle ubestemte former (0/0, ∞/∞, 1^∞, ∞−∞, 0·∞) løst med føringsstandarden sensor krever: marker [0/0] før hver L'Hôpital-anvendelse, ta logaritmen for 1^∞, fellesnevner for ∞−∞.
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Derivasjon](/r2/r2-2-3) fra R2 (L'Hôpital bruker deriverte).
- **Eksamensbelegg:** Sjanger E, **~72 %** som egen oppgave; teknikken inngår i mange flere (ofte koblet med fundamentalteoremet, grense av $\int_0^x$). Fasitens grep: **[0/0]-markering før hver bruk** (sensor trekker uten). Prioritet: **perfekt**.
- **Innholdskontrakt:** **L'Hôpitals regel** for $[0/0]$ og $[\infty/\infty]$ (forutsetningene: begge → 0 eller ±∞, deriverbarhet, $g'\ne0$); **omforming til standardform**: $0\cdot\infty$ → brøk; $\infty-\infty$ → fellesnevner; $1^\infty$, $0^0$, $\infty^0$ → **ta logaritmen** $L=e^{\lim\ln(\cdot)}$; **[0/0]-/[∞/∞]-markering** før hver anvendelse; kombinasjon med standardgrensene og veksthierarkiet; alternativet **Taylor** (bro til kap. 7.3, honoreres likestilt). Alt til aktiv bruk.
- **Oppgavesjangre:** E. Mønstereksempel: «Beregn $\lim_{x\to\infty}\left(1+\frac3x\right)^x$ og $\lim_{x\to0^+}x\ln x$.»
- **Typiske feil:** Bruker L'Hôpital uten [0/0]-sjekk (på form som ikke er ubestemt); glemmer å ta logaritmen for $1^\infty$; deriverer teller/nevner som produkt (kvotientregel-forveksling); stopper for tidlig (fortsatt ubestemt).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.3: Kontinuitet, skjæringssetningen og ekstremalverdisetningen

- **id:** `ma1101-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-2-1`
- **kapitteltype:** teori
- **description:** Kontinuitet i punkt og på intervall, og de to store eksistenssetningene: skjæringssetningen (antall løsninger/nullpunkt) og ekstremalverdisetningen — med sensorkravet om at kontinuitet ALLTID uttales.
- **Forkunnskaper (kryssbok):** Kap. 2.1.
- **Eksamensbelegg:** Sjanger H (skjæringssetning **~56 %**), grunnlag for D og teori-utsagn i I. Fasitens grep: si **eksplisitt at f er kontinuerlig**, vis fortegnsskifte, navngi setningen; entydighet via monotoni. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kontinuitet i punkt** ($\lim_{x\to a}f=f(a)$) og på intervall; regneregler (sum/produkt/komposisjon av kontinuerlige); **skjæringssetningen** (mellomverdisetningen): $f$ kontinuerlig på $[a,b]$, $f(a)<0<f(b)$ ⇒ nullpunkt finnes — **kontinuitet må uttales**; **ekstremalverdisetningen**: $f$ kontinuerlig på lukket begrenset intervall ⇒ har globalt maks OG min; **eksistens + entydighet**: monotoni ($f'$ fast fortegn) begrenser antall løsninger; rot-lokalisering til intervall av gitt lengde (bro til numerisk halvering). Alt til aktiv bruk (navngi setningene).
- **Oppgavesjangre:** H. Mønstereksempel: «Vis at $2x-\sin x-1=0$ har nøyaktig én løsning, og lokaliser den til et intervall av lengde $\tfrac12$.»
- **Typiske feil:** **Skjæringssetning uten å uttale kontinuitet** (dokumentert felle); viser eksistens men ikke entydighet (mangler monotoni-argument); forveksler skjæringssetningen med sekantsetningen/Rolle; tror ekstremalverdisetningen gjelder på åpent/ubegrenset intervall.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.4: ε-δ-bevis og uniform kontinuitet

- **id:** `ma1101-2-4` · **number:** 2.4 · **estimatedMinutes:** 65 · **prerequisites:** `ma1101-2-3`
- **kapitteltype:** teori
- **description:** Den stringente kjernen: ε-δ-definisjonen av grense og kontinuitet med δ=min(1,ε/K)-mønsteret, og uniform kontinuitet (kompakt ⇒ uniform; f′ begrenset ⇒ uniform; motbevis når f′ ubegrenset) — nyere teoriblokk og klar karakterskiller.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (absoluttverdi/trekantulikhet), 2.3.
- **Eksamensbelegg:** Sjanger P (ε-δ **~33 %**, uniform kontinuitet **~17 %**) — begge nyere (uniform fra 2018). Fasitens grep: skriv definisjonen først, faktoriser $|f(x)-f(a)|$, avgrens én faktor, velg $\delta=\min(1,\varepsilon/K)$. Prioritet: **perfekt** (teori-karakterskiller).
- **Innholdskontrakt:** **ε-δ-definisjon** av grense og kontinuitet; **det kvantitative mønsteret**: (1) skriv $|f(x)-f(a)|$, (2) faktoriser, (3) avgrens den «farlige» faktoren på et kontrollintervall (f.eks. $|x-a|<1$), (4) velg $\delta=\min(1,\varepsilon/K)$; **uniform kontinuitet** (samme δ virker overalt): på **kompakt** (lukket begrenset) intervall følger uniform kontinuitet av kontinuitet (teorem); $|f'|\le M$ ⇒ uniform ($\delta=\varepsilon/M$ via MVT); **motbevis** når $f'$ er ubegrenset (f.eks. $e^{x^2}$-type: finn punktpar med fast avstand men voksende $|f|$-differanse). Alt til aktiv bruk (definisjonen skrives ut hver gang).
- **Oppgavesjangre:** P. Mønstereksempel: «Vis med et $\varepsilon$-$\delta$-argument at $f(x)=x^2$ er kontinuerlig i $x=2$» og «Vis at $f(x)=x^2$ ikke er uniformt kontinuerlig på $\mathbb R$.»
- **Typiske feil:** Skriver ikke definisjonen først; avgrenser feil faktor / glemmer kontrollintervallet; velger δ som avhenger av $x$ (da er det bare punktvis, ikke uniform); tror kontinuitet ⇒ uniform på ubegrenset intervall; blander «uniform» og «punktvis».
- **Quiz: 14 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Derivasjon og dens anvendelser *(prioritet: PERFEKT — drøfting ~89 %, signaturoppgaven ~72 %, MVT/sekant ~56 %; regne-tyngdepunkt nr. 1)*

#### Kapittel 3.1: Derivasjon: definisjon, regler og implisitt derivasjon

- **id:** `ma1101-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-2-1`
- **kapitteltype:** teori
- **description:** Den deriverte fra differansekvotienten (definisjonen sensor krever), derivasjonsreglene, kjerneregelen, og implisitt derivasjon med tangentlikning — pluss «deriverbar ⇒ kontinuerlig» (ikke omvendt).
- **Forkunnskaper (kryssbok):** Kap. 2.1; [Derivasjon](/r2/r2-2-3) og [Kjerneregelen](/r2/r2-2-4) fra R2.
- **Eksamensbelegg:** Sjanger L (implisitt/tangent **~44 %**), fundament for C, D, M. Fasitens grep: definisjonen $f'(a)=\lim\frac{f(a+h)-f(a)}{h}$; implisitt derivasjon med kjerneregel på $y=y(x)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Deriverbarhetsdefinisjonen** (differansekvotienten) — presenteres som *den gyldige* metoden når definisjonen etterspørres; **derivasjonsregler** (sum/produkt/kvotient/kjerne); standardderiverte (på formelark, men pugges); **deriverbar ⇒ kontinuerlig** (og at det motsatte er galt, $|x|$-moteksempel); **implisitt derivasjon** (deriver relasjonen mhp. $x$, kjerneregel på $y$, løs for $y'$); **tangentlikning** $y-y_0=f'(x_0)(x-x_0)$ (sjekk at punktet ligger på kurven); høyere deriverte. Alt til aktiv bruk.
- **Oppgavesjangre:** L. Mønstereksempel: «Finn tangenten til kurven $x^3y^2-x^2y^3=4$ i punktet $(2,1)$.»
- **Typiske feil:** Deriverer $y$ som konstant (glemmer kjerneregelfaktoren $y'$); regnefeil i implisitt derivasjon; tror kontinuerlig ⇒ deriverbar; setter inn punktet før derivasjon; feil tangentformel.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Middelverdisetningen og bevis med hjelpefunksjon

- **id:** `ma1101-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-3-1`
- **kapitteltype:** teori
- **description:** Sekant-/middelverdisetningen anvendt aktivt: konstruer en hjelpefunksjon for ulikhetsbevis (ln(1+x) ≤ x, Bernoulli) og «det finnes c med f′(c)=g′(c)» — med forutsetningene sjekket eksplisitt.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 2.3.
- **Eksamensbelegg:** Sjanger H (MVT/sekant **~56 %**). Fasitens grep: konstruer $h=f-g$, sjekk forutsetningene, navngi sekantsetningen. Prioritet: **perfekt** (teori-karakterskiller).
- **Innholdskontrakt:** **Middelverdisetningen (sekantsetningen)**: $f$ kontinuerlig på $[a,b]$, deriverbar på $(a,b)$ ⇒ finnes $c$ med $f'(c)=\frac{f(b)-f(a)}{b-a}$; **Rolles setning** (spesialtilfelle); konsekvenser: **$f'\equiv0\Rightarrow f$ konstant**, «samme derivert ⇒ skiller seg med konstant», monotoni fra fortegn på $f'$; **hjelpefunksjonsmetoden** for ulikheter: for å vise $u(x)\le v(x)$, sett $h=v-u$, vis $h(x_0)\ge0$ og $h'\ge0$; klassikere $\ln(1+x)\le x$, **Bernoulli** $(1+x)^r\ge1+rx$; **fellen** (fasit 2009): sekantsetningen brukt separat på $f$ og $g$ gir IKKE samme $c$. Alt til aktiv bruk (navngi setningen, sjekk forutsetninger).
- **Oppgavesjangre:** H. Mønstereksempel: «Bruk middelverdisetningen til å vise at $\ln(1+x)\le x$ for alle $x>-1$.»
- **Typiske feil:** **Sekantsetningen brukt separat på to funksjoner** (gir ikke felles $c$ — dokumentert felle); glemmer å sjekke forutsetningene (kontinuitet + deriverbarhet); feil hjelpefunksjon; forveksler MVT med skjæringssetningen.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 3.3: Funksjonsdrøfting med skisse

- **id:** `ma1101-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1101-3-1`
- **kapitteltype:** teori
- **description:** Full funksjonsanalyse: definisjonsmengde, fortegnsskjema for f′, ekstrema (også randpunkter på lukket intervall), konveksitet via f″, ALLE asymptotetyper inkludert skråasymptote, og avsluttende skisse — den 89 %-årvisse drøftingsoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 2.2 (grenser for asymptoter).
- **Eksamensbelegg:** Sjanger C, **~89 %**. Fasitens grep: tegnet **fortegnsskjema** forventes; skråasymptote via $m=\lim f(x)/x$, så $f(x)-mx$; skisse til slutt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Definisjonsmengde** og nullpunkter; **$f'$ med fortegnsskjema** (tegnet fortegnslinje); **lokale/globale ekstrema** (på lukket intervall: sjekk ALLTID randpunktene); **konveksitet/vendepunkter** via $f''$; **asymptoter komplett**: vertikale (nevner-nullpunkt), horisontale (grense i $\pm\infty$), **skråasymptote** ($m=\lim_{x\to\pm\infty}f(x)/x$, deretter $b=\lim(f(x)-mx)$, eller polynomdivisjon); avsluttende **skisse**. Alt til aktiv bruk. Merk: **vendepunkt ⇎ $f''=0$** (Sann/Usann-felle, bro til 8.2).
- **Oppgavesjangre:** C. Mønstereksempel: «La $f(x)=\frac{x^2-5x+6}{x-1}$. Finn definisjonsmengde, ekstrema, asymptoter (inkl. skrå) og skisser grafen.»
- **Typiske feil:** Glemmer randpunktene på lukket intervall; finner ikke skråasymptoten (stopper ved horisontal); tegner ikke fortegnsskjema; tror $f''=0$ ⇒ vendepunkt; glemmer vertikal asymptote fra nevner-nullpunkt.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.4: Signaturoppgaven: kontinuitet og deriverbarhet i punkt

- **id:** `ma1101-3-4` · **number:** 3.4 · **estimatedMinutes:** 70 · **prerequisites:** `ma1101-3-2`
- **kapitteltype:** teori
- **description:** MA1101s berømte signaturoppgave: for oscillasjonsfamilien x^k·sin(1/x^m), vis kontinuitet med skvis, deriverbarhet FRA differansekvotienten, og — karakterskilleren — oscillasjonsfellen: f kan være deriverbar i 0 selv om lim f′(x) ikke finnes.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (skvis), 3.1 (differansekvotient), 3.2.
- **Eksamensbelegg:** Sjanger D, **~72 %**, gjennom hele perioden. Fasitens grep: kontinuitet via skvis ($|\sin|\le1$); deriverbarhet via $\lim\frac{f(h)-f(0)}{h}$; oscillasjonsfellen eksplisitt. Prioritet: **perfekt** — **tydeligste karakterskiller blant regnesjangrene**.
- **Innholdskontrakt:** Stykkevis definert funksjon, typisk $x^k\sin(1/x^m)$ eller $x^k\sin(c/x)$; **kontinuitet i 0**: $\lim_{x\to0}f=f(0)$ via **skviseargument** (uttal $|\sin|\le1$); **deriverbarhet i 0**: bruk **grensedefinisjonen** $f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}$ — IKKE innsetting i derivertformel; **oscillasjonsfellen**: $f$ kan være deriverbar i 0 SELV OM $\lim_{x\to0}f'(x)$ ikke finnes (da er $f'$ bare diskontinuerlig) — dette er gjengangeren og karakterskilleren; **parametervariant**: for hvilke $a$ er $x|x|^a$ kontinuerlig/deriverbar i 0; **motsatt teorem** (2016): finnes $\lim f'(x)$ og $f$ kontinuerlig ⇒ $f$ deriverbar med $f'(0)=$ grensen (bevis med MVT/L'Hôpital). Alt til aktiv bruk.
- **Oppgavesjangre:** D. Mønstereksempel: «La $f(x)=x^2\sin(2/x)$ for $x\ne0$ og $f(0)=0$. Vis at $f$ er deriverbar i 0, og at $\lim_{x\to0}f'(x)$ ikke eksisterer.»
- **Typiske feil:** **Deriverbarhet «bevist» med derivertformel** i stedet for differansekvotienten (dokumentert felle); konkluderer «ikke deriverbar» fordi $\lim f'$ ikke finnes (oscillasjonsfellen — feil retning); glemmer å uttale $|\sin|\le1$ i skvis; regner $f'(0)$ ved innsetting.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.5: Derivert av invers funksjon

- **id:** `ma1101-3-5` · **number:** 3.5 · **estimatedMinutes:** 45 · **prerequisites:** `ma1101-3-3`
- **kapitteltype:** teori
- **description:** Inversfunksjonssetningen i punkt: vis at f er strengt monoton (invers finnes), og beregn (f⁻¹)′(b)=1/f′(a) der f(a)=b — den todelte «vis at inversen finnes + regn»-oppgaven.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 3.3 (monotoni).
- **Eksamensbelegg:** Sjanger M, **~44 %**. Fasitens grep: $f'$ har fast fortegn ⇒ strengt monoton ⇒ invers; $(f^{-1})'(b)=1/f'(a)$ med $a$ funnet ved inspeksjon. Prioritet: **kunne**.
- **Innholdskontrakt:** **Strengt monoton ⇒ invers finnes** (via $f'$ fast fortegn); **derivert av invers** $(f^{-1})'(b)=\frac1{f'(a)}$ der $f(a)=b$; finn $a$ ved inspeksjon (løs $f(a)=b$); todelt oppgavestruktur (eksistens-halvdel + regne-halvdel); kobling til arcus-funksjonene ($\arcsin'$, $\arctan'$). Alt til aktiv bruk.
- **Oppgavesjangre:** M. Mønstereksempel: «Vis at $f(x)=2x+\sin x$ har en invers $g$, og beregn $g'(2\pi)$.»
- **Typiske feil:** Hopper over eksistens-halvdelen (viser bare regnedelen); finner feil $a$; inverterer $f'(a)$ feil; glemmer å vise strengt (ikke bare svakt) monoton.
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 3.6: Optimering og relaterte rater

- **id:** `ma1101-3-6` · **number:** 3.6 · **estimatedMinutes:** 50 · **prerequisites:** `ma1101-3-3`
- **kapitteltype:** teori
- **description:** Anvendt derivasjon: optimering av geometrisk figur med globalitetsargument (ikke bare f′=0), og relaterte rater (figur → tidsderiver med kjerneregel) — sistnevnte fallende, men R2-forankret og mulig gjenkomst.
- **Forkunnskaper (kryssbok):** Kap. 3.3, 3.1 (kjerneregel).
- **Eksamensbelegg:** Sjanger «optimering» **~39 %**, relaterte rater **~33 %** (forsvunnet etter ~2016, dekkes for beredskap). Fasitens grep: optimering krever **globalitetsargument** (annenderiverttest / fortegnsskjema), ikke bare $f'=0$. Prioritet: **kunne** (optimering) / **kjenne** (relaterte rater).
- **Innholdskontrakt:** **Optimering** under bibetingelse: (1) modeller målfunksjonen, (2) reduser til én variabel via bibetingelsen, (3) $f'=0$, (4) **globalitetsargument** (annenderiverttest eller fortegnsskjema — obligatorisk), (5) tolk svaret; **relaterte rater**: sett opp geometrisk sammenheng, **tidsderiver med kjerneregel**, sett inn kjente rater (stige/drage/båt/tank-Torricelli). Merk relaterte rater som «fallende — dekkes for beredskap». Alt til aktiv bruk.
- **Oppgavesjangre:** Optimering + relaterte rater. Mønstereksempel: «En sylinderformet boks skal ha volum $1\,\text{L}$. Finn dimensjonene som minimerer overflaten, og begrunn at det er et globalt minimum.»
- **Typiske feil:** **Optimering uten globalitetsargument** ($f'=0$ uten annenderiverttest — dokumentert felle); rett svar uten begrunnelse; relaterte rater uten å tidsderivere (glemt kjerneregel); feiltolker fortegnet i konklusjonen.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Integrasjon: teknikk og fundamentalteoremet *(prioritet: PERFEKT — integrasjonsteknikk 100 %, fundamentalteorem ~50 %; regne-tyngdepunkt nr. 2)*

#### Kapittel 4.1: Det bestemte integralet og fundamentalteoremet

- **id:** `ma1101-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-2-3`
- **kapitteltype:** teori
- **description:** Integralet fra Riemann-summer, fundamentalteoremet i begge former, og — det som faktisk testes — d/dx ∫ med variable grenser der kjerneregelfaktoren g′(x) er poenget.
- **Forkunnskaper (kryssbok):** Kap. 2.3, 3.1; [Integrasjon](/r2/r2-4-1) fra R2.
- **Eksamensbelegg:** Sjanger K (**~50 %**), grunnlag for all integrasjon. Fasitens grep: $\frac{d}{dx}\int_a^{g(x)}h=h(g(x))g'(x)$ — **kjerneregelfaktoren er poenget**; variable grenser i begge ender ⇒ differanse. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Bestemt integral** som grense av Riemann-summer (definisjon, kjennskap); **fundamentalteoremet del 1**: $F(x)=\int_a^x f$ er deriverbar med $F'=f$ ($f$ kontinuerlig); **del 2**: $\int_a^b f=F(b)-F(a)$; **fundamentalteoremet + kjerneregel (Leibniz)**: $\frac{d}{dx}\int_a^{g(x)}h(t)\,dt=h(g(x))g'(x)$; **variable grenser i begge ender**: $\frac{d}{dx}\int_{u(x)}^{v(x)}h=h(v)v'-h(u)u'$; integralfunksjonens kontinuitet/deriverbarhet i 0 (bro til D og J). Alt til aktiv bruk.
- **Oppgavesjangre:** K. Mønstereksempel: «Finn $\frac{d}{dx}\int_{x^2}^{1}e^{-t^2}\,dt$.»
- **Typiske feil:** **Glemt kjerneregelfaktoren $g'(x)$** (dokumentert felle); feil fortegn ved variabel nedre grense; forveksler $\int_a^x$ (funksjon av $x$) med $\int_a^b$ (tall); bruker fundamentalteoremet uten kontinuitet.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.2: Substitusjon og delvis integrasjon

- **id:** `ma1101-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1101-4-1`
- **kapitteltype:** teori
- **description:** De to arbeidsteknikkene med føringsstandarden sensor krever: substitusjon (bokfør u, du, nye grenser), inkludert trig- og sinh-substitusjon, og delvis integrasjon (dokumenter u/v′-valget), inkludert «ensomme» ln/arcsin/arctan.
- **Forkunnskaper (kryssbok):** Kap. 4.1; [Integrasjonsteknikk](/r2/r2-4-2) fra R2.
- **Eksamensbelegg:** Sjanger B (del av 100 %). Fasitens grep: **bokfør $u$, $du$, nye grenser** ved substitusjon; **dokumenter $u/v'$-valget** ved delvis. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Substitusjon**: bokfør $u$, $du$, **nye grenser** ved bestemt integral; klassikere $u=x^2$, $u=\ln x$, $u=\arctan x$, $u=\sin x$; **trig-substitusjon** $x=a\sin u$ / $x=a\tan u$ / $x=a\sinh u$ for $\sqrt{a^2\mp x^2}$-uttrykk; **delvis integrasjon** $\int uv'=uv-\int u'v$ (dokumenter valget, LIATE-heuristikk); «ensomme» funksjoner ($\int\ln x$, $\int\arcsin x$, $\int\arctan x$ med $v'=1$); **to runder** ($\int x^2\cos x$); sirkulær delvis ($\int e^x\sin x$). Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Beregn $\int_0^{1}x\arctan x\,dx$ (delvis) og $\int\frac{dx}{\sqrt{4-x^2}}$ (trig-substitusjon).»
- **Typiske feil:** Glemmer å bytte grensene ved substitusjon (eller å bytte tilbake); feil $du$; velger $u/v'$ ugunstig (integralet blir verre); glemmer å legge til $+C$ i ubestemt integral; feil ved sirkulær delvis (løser ikke ut integralet).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.3: Delbrøkoppspalting og rasjonale integraler

- **id:** `ma1101-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma1101-4-2`
- **kapitteltype:** teori
- **description:** Rasjonale funksjoner integrert: polynomdivisjon når tellergrad ≥ nevnergrad, delbrøkoppspalting (også med Bx+C-teller over irreduserbar kvadratisk faktor og gjentatt lineær faktor), og fullføring av kvadratet til arctan-form.
- **Forkunnskaper (kryssbok):** Kap. 4.2; [Polynomdivisjon](/r1/r1-1-1) fra R1.
- **Eksamensbelegg:** Sjanger B (del av 100 %). Fasitens grep: **polynomdivisjon først** når tellergrad ≥ nevnergrad; **Bx+C-teller** over irreduserbar kvadratisk; kombinasjonsformen splittes i ln-del + arctan-del. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Polynomdivisjon** (når $\deg$ teller $\ge\deg$ nevner); **delbrøkoppspalting**: enkle lineære faktorer, **gjentatt lineær faktor** ($\frac{A}{x-1}+\frac{B}{(x-1)^2}$), **irreduserbar kvadratisk faktor** ($\frac{Bx+C}{x^2+px+q}$, IKKE bare konstant teller); bestem koeffisientene (innsetting eller koeffisientsammenligning); **kombinasjonsformen** $\frac{ax+b}{x^2+px+q}$ splittes i ln-del + **arctan-del**; **fullføre kvadratet** $x^2+px+q=(x+p/2)^2+k$ → arctan-form. Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Beregn $\int\frac{2x^2}{(x^2+4)(x+2)}\,dx$.»
- **Typiske feil:** **Konstant teller over irreduserbar kvadratisk** (skal være $Bx+C$ — dokumentert felle); **glemt polynomdivisjon** når tellergrad ≥ nevnergrad; feil koeffisienter; glemmer arctan-delen av kombinasjonsformen.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.4: Sentrale funksjoner: eksponential, logaritme og trigonometri

- **id:** `ma1101-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `ma1101-4-1`
- **kapitteltype:** teori
- **description:** Pensumets sentrale funksjoner samlet: eksponential/logaritme og trigonometriske/arcus-funksjoner med deres deriverte, integraler og identiteter — apparatet på formelarket, presentert til aktiv bruk i teknikk- og drøftingsoppgavene.
- **Forkunnskaper (kryssbok):** Kap. 3.1, 4.2; [Eksponential- og logaritmefunksjoner](/r2/r2-1-1) og [Trigonometri](/r2/r2-6-1) fra R2.
- **Eksamensbelegg:** Ikke egen oppgave, men **verktøykassen** i B/C/E/A. Fasitens grep: kjenn deriverte/integraler av $e^x$, $\ln x$, trig, arcus; bruk trig-identiteter i integraler. Prioritet: **kunne** (formelark-forankret, men må brukes flytende).
- **Innholdskontrakt:** **Eksponential/logaritme**: $\frac{d}{dx}e^x=e^x$, $\frac{d}{dx}\ln x=1/x$, $a^x=e^{x\ln a}$, logaritmelover; **trigonometri**: deriverte/integraler av $\sin,\cos,\tan$, identitetene $\sin^2+\cos^2=1$, dobbel-/halvvinkel (for $\int\sin^2$, $\int\cos^2$); **arcus-funksjoner**: $\arcsin,\arccos,\arctan$ med deriverte $\frac{1}{\sqrt{1-x^2}}$, $\frac{1}{1+x^2}$ (kobling til delbrøk-arctan); **hyperbolske** ($\sinh,\cosh$, kjennskap, for trig-substitusjon). Merk «(formelark)» der resultatet står der. Alt til aktiv bruk.
- **Oppgavesjangre:** Verktøy for B/C/E. Mønstereksempel: «Beregn $\int\cos^2x\,dx$ ved halvvinkelidentiteten.»
- **Typiske feil:** Feil derivert av $a^x$ (glemmer $\ln a$); forveksler $\arctan'$ og $\arcsin'$; feil ved $\int\sin^2$ (bruker ikke halvvinkel); logaritmelov-feil.
- **Quiz: 14 · Flashcards: 20**

#### Kapittel 4.5: Drill: integrasjonsteknikk (delbrøk, substitusjon, delvis, fullført kvadrat)

- **id:** `ma1101-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `ma1101-4-3`
- **kapitteltype:** drill
- **description:** Hele integrasjonsrepertoaret drillet til automatikk: gjenkjenn teknikk fra integrandens form, før hver løsning med bokstandard, og kombiner teknikker — den 100 %-årvisse «beregn disse integralene»-oppgaven.
- **Eksamensbelegg:** Dekker sjanger B samlet (**100 %**, 2–3 delpunkter per sett). Variantkatalogen: substitusjon (inkl. trig/sinh), delvis (inkl. ensom/to runder/sirkulær), delbrøk (inkl. Bx+C og gjentatt), fullført kvadrat → arctan, kombinasjoner. Prioritet: **perfekt** (her hentes «bestått»).
- **Innholdskontrakt:** **Gjenkjenningstabell**: hvilken form → hvilken teknikk (rasjonalt → delbrøk/polynomdivisjon; $\sqrt{a^2-x^2}$ → trig-substitusjon; produkt med ln/arcus → delvis; sammensatt indre → substitusjon; kvadratisk nevner uten reelle røtter → fullført kvadrat). Løsningsoppskrift: (1) klassifiser integranden; (2) velg teknikk; (3) før med bokstandard (bokfør substitusjon, dokumenter delvis-valg); (4) kontroller ved derivasjon. Gjennomregnet «beregn disse»-case med sensor-margnotater. 14–16 oppgaver på eksamensnivå fordelt på alle teknikkene + minst tre kombinasjoner.
- **Oppgavesjangre:** B, alle varianter. Mønstereksempel: «Beregn: (a) $\int\frac{x}{\sqrt{9-x^2}}\,dx$, (b) $\int x^2 e^{-x}\,dx$, (c) $\int\frac{3x+1}{x^2+2x+5}\,dx$.»
- **Typiske feil:** Velger feil teknikk (tidstap); regnefeil under tidspress; glemmer grensebytte/$+C$; blander teknikkene halvveis.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Anvendte integraler *(prioritet: KUNNE — uegentlige ~67 % (stigende), Riemann-sum ~56 %, volum/buelengde ~44 % (fallende))*

#### Kapittel 5.1: Uegentlige integraler og sammenligningstesten

- **id:** `ma1101-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma1101-4-2`
- **kapitteltype:** teori
- **description:** Uegentlige integraler ført med eksplisitt grense, p-integralenes konvergensstatus, og sammenligningstesten: klem integranden mot et kjent p-integral og NAVNGI sammenligningsobjektet — den 67 %-stigende konvergensoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 4.2, 2.1 (grenser).
- **Eksamensbelegg:** Sjanger F, **~67 %** (6/7 siste sett — stigende). Fasitens grep: **eksplisitt lim** (aldri «sett inn ∞»); **navngi sammenligningsobjektet**; $\int_1^\infty x^{-p}$ konvergerer ⇔ $p>1$. Prioritet: **kunne** (men stigende, prioriteres).
- **Innholdskontrakt:** **Uegentlig integral** (uendelig grense ELLER integrand-singularitet): $\int_a^\infty f=\lim_{R\to\infty}\int_a^R f$; **p-integralene**: $\int_1^\infty x^{-p}$ konvergerer ⇔ $p>1$; speilvendt i 0 ($\int_0^1 x^{-p}$ konvergerer ⇔ $p<1$); **sammenligningstesten**: $0\le f\le g$, $\int g$ konvergerer ⇒ $\int f$ konvergerer (og motsatt for divergens) — **navngi $g$**; **parametervariant** (for hvilke $\lambda$ konvergerer et gitt integral — del i endepunkt-singularitet OG hale); absolutt vs. betinget (kjennskap). Alt til aktiv bruk.
- **Oppgavesjangre:** F. Mønstereksempel: «Avgjør om $\int_1^\infty\frac{x\cos^2x}{x^3+1}\,dx$ konvergerer. Bruk sammenligningstesten og navngi sammenligningsobjektet.»
- **Typiske feil:** **«Sett inn uendelig» i stedet for lim** (dokumentert felle); **konvergenspåstand uten navngitt sammenligningsobjekt**; feil $p$-terskel; glemmer at $\int_0^1 x^{-p}$ har motsatt kriterium; sammenligner uten å sikre samme fortegn.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.2: Riemann-sum som integral

- **id:** `ma1101-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `ma1101-4-1`
- **kapitteltype:** teori
- **description:** Gjenkjenn en grense av typen (1/n)·Σ f(k/n) som en Riemann-sum, identifiser integranden og intervallet, og beregn integralet — går igjen både som egen oppgave og som Sann/Usann-utsagn.
- **Forkunnskaper (kryssbok):** Kap. 4.1.
- **Eksamensbelegg:** Sjanger G, **~56 %**. Fasitens grep: gjenkjenn $\frac1n\sum f(k/n)$, identifiser $f$ og intervall, beregn $\int$. Prioritet: **kunne**.
- **Innholdskontrakt:** **Riemann-sum** $\frac{b-a}{n}\sum_{k=1}^n f\!\big(a+k\tfrac{b-a}{n}\big)\to\int_a^b f$; **gjenkjenningsmønsteret**: $\frac1n\sum_{k=1}^n f(k/n)\to\int_0^1 f$; varianter med $2n+k$ (→ intervall $[1,2]$-type via omskriving), $\frac{n}{n^2+k^2}$; identifiser $f$ og intervallet fra summens form; beregn integralet. Motsatt vei (Sann/Usann-utsagn: er en gitt grense lik et integral?). Alt til aktiv bruk.
- **Oppgavesjangre:** G. Mønstereksempel: «Finn $\lim_{n\to\infty}\sum_{k=1}^n\frac{1}{2n+k}$ ved å gjenkjenne den som en Riemann-sum.»
- **Typiske feil:** Feil identifisering av $f$ eller intervallet; glemmer $\frac1n$-faktoren (bredden); feil grenser; regnefeil i det resulterende integralet.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 5.3: Omdreiningsvolum og buelengde

- **id:** `ma1101-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `ma1101-4-2`
- **kapitteltype:** teori
- **description:** Volum ved skive- og skallmetode (velg etter akse), buelengde og omdreiningsflate — dominerte 2008–2015, nå fallende, men fortsatt gyldig; sensorfellen er feil metode for aksen.
- **Forkunnskaper (kryssbok):** Kap. 4.2.
- **Eksamensbelegg:** Sjanger N, **~44 %** (fallende — dekkes kompakt). Fasitens grep: **velg metode etter akse** (om x → skiver, om y → skall); tegn området før oppsettet. Prioritet: **kunne** (fallende).
- **Innholdskontrakt:** **Skivemetoden** (om $x$-aksen): $V=\pi\int f^2\,dx$; **sylinderskallmetoden** (om $y$-aksen): $V=2\pi\int x\,f(x)\,dx$ (eller skiver med $x=f^{-1}(y)$); **buelengde** $\ell=\int\sqrt{1+(f')^2}\,dx$; **omdreiningsflate** $S=2\pi\int r\,ds$; kobling til fysikk (tanktapping/Torricelli, $dh/dt$ via kjerneregel). Presenter **valg-etter-akse** som kjerneregelen. Alt til aktiv bruk; tegn alltid området.
- **Oppgavesjangre:** N. Mønstereksempel: «Området under $y=\sqrt x\sin x$ for $0\le x\le\pi$ dreies om $x$-aksen. Finn volumet.»
- **Typiske feil:** **Feil metode for rotasjonsaksen** (skive om y / skall om x — dokumentert felle); tegner ikke området før oppsettet; glemmer $\pi$/$2\pi$; feil radius i skallmetoden.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Differensiallikninger *(prioritet: PERFEKT — 1. ordens ODE ~94 %, minst én hver eksamen)*

#### Kapittel 6.1: Separable differensiallikninger og initialverdiproblem

- **id:** `ma1101-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-4-2`
- **kapitteltype:** teori
- **description:** Separable difflikninger: skill variablene, integrer begge sider, sett inn initialbetingelsen — og den nyere varianten: oppgi det største intervallet om startpunktet der løsningen er definert.
- **Forkunnskaper (kryssbok):** Kap. 4.2; [Differensiallikninger](/r2/r2-7-1) fra R2.
- **Eksamensbelegg:** Sjanger A (del av **94 %**). Fasitens grep: skill variablene, integrer, sett inn IVP, løs for $y$; oppgi eksistensintervall. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Separabel** $y'=f(x)g(y)$: skill $\frac{dy}{g(y)}=f(x)\,dx$, integrer begge sider, løs for $y$, sett inn **initialbetingelsen**; **konstantløsningene** $y\equiv c$ der $g(c)=0$ (der man delte på null — ikke glem dem); **eksistensintervall**: finn det største åpne intervallet om startpunktet der uttrykket (f.eks. $\tan$) er definert; **klassifisering** (orden, lineær?, homogen?). Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Løs $y'=x(1+y^2)$ med $y(0)=1$, og oppgi det største åpne intervallet om 0 der løsningen er definert.»
- **Typiske feil:** **Glemmer konstantløsningene** der man delte på null (dokumentert felle); **uteglemt initialbetingelse**; feil eksistensintervall (glemmer hvor $\tan$ e.l. er udefinert); integrerer bare den ene siden.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.2: Lineære 1. ordens likninger og integrerende faktor

- **id:** `ma1101-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-6-1`
- **kapitteltype:** teori
- **description:** Lineære førsteordens likninger y′+p(x)y=q(x): finn integrerende faktor e^∫p, skriv venstresiden som en derivert av produkt, integrer — pluss modelloppgaver (avkjøling, blanding) satt opp og løst.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 4.2.
- **Eksamensbelegg:** Sjanger A (del av **94 %**). Fasitens grep: $\mu=e^{\int p\,dx}$, skriv $(\mu y)'=\mu q$, integrer; godtar separabel-metode der begge går. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineær 1. ordens** $y'+p(x)y=q(x)$; **integrerende faktor** $\mu=e^{\int p\,dx}$; skriv venstresiden som $(\mu y)'$, integrer: $y=\frac1\mu\int\mu q\,dx$; **initialverdiproblem**; **modelloppgaver**: Newtons avkjøling ($T'=k(T-T_0)$), blanding/tank (konsentrasjon), fritt fall med luftmotstand; når velge integrerende faktor vs. separabel (begge honoreres). Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Løs $y'+\frac2x y=\frac{\cos x}{x^2}$ for $x>0$ med $y(\pi)=0$.»
- **Typiske feil:** **Feil integrerende faktor** (feil $\int p$, glemt fortegn); glemmer å multiplisere HELE likningen med $\mu$; **uteglemt initialbetingelse**; feil oppsett av modell (fortegn i avkjøling/blanding).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.3: Drill: førsteordens difflikninger med IVP og eksistensintervall

- **id:** `ma1101-6-3` · **number:** 6.3 · **estimatedMinutes:** 80 · **prerequisites:** `ma1101-6-2`
- **kapitteltype:** drill
- **description:** Hele 1.-ordens-repertoaret drillet: gjenkjenn separabel vs. lineær, løs med riktig metode og initialbetingelse, oppgi eksistensintervall — den nesten garanterte difflikning-oppgaven (94 %).
- **Eksamensbelegg:** Dekker sjanger A samlet (**94 %**, minst én hver eksamen). Variantkatalogen: separabel + IVP + eksistensintervall, lineær via integrerende faktor + IVP, modell (avkjøling/blanding), klassifisering. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Gjenkjenningsalgoritme**: (1) er den separabel? (2) hvis ikke, er den lineær $y'+py=q$? (3) velg metode; (4) sett inn IVP; (5) ved separasjon: sjekk konstantløsninger; (6) oppgi eksistensintervall. Gjennomregnet case med sensor-margnotater (initialbetingelse satt inn, konstantløsninger nevnt, intervall oppgitt). 12–14 oppgaver: fire separable (med eksistensintervall), fire lineære, to modeller, to klassifisering.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «(a) Løs $y'=\frac{y}{x}+x$ med $y(1)=2$. (b) Oppgi det største intervallet der løsningen er definert.»
- **Typiske feil:** Feil metodevalg; glemt konstantløsning/initialbetingelse; feil eksistensintervall; regnefeil under tidspress.
- **Quiz: 14 · Flashcards: 8**

#### Kapittel 6.4: Annenordens lineære likninger *(bør kjenne til — eldre profil)*

- **id:** `ma1101-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `ma1101-6-2`
- **kapitteltype:** teori
- **description:** Annenordens lineære likninger med konstante koeffisienter (karakteristisk likning, tre tilfeller) og differensligninger — stod på formelarket t.o.m. ~2015, borte fra nyere oppgaver; dekkes lett for beredskap og pensumdekning.
- **Forkunnskaper (kryssbok):** Kap. 6.2.
- **Eksamensbelegg:** «2. ordens ODE + differensligning» **~22 %** (eldre profil, borte fra oppgaver etter ~2015). Fasitens grep: karakteristisk likning $r^2+pr+q=0$, tre tilfeller; homogen + partikulær. Prioritet: **kjenne** (eldre profil, lav prioritet).
- **Innholdskontrakt:** **Annenordens homogen** $y''+py'+qy=0$: **karakteristisk likning** $r^2+pr+q=0$, tre tilfeller (reelle ulike røtter, dobbel rot, kompleks-konjugerte → $e^{\alpha x}(\cos\beta x,\sin\beta x)$); **inhomogen** via ubestemte koeffisienter (kjennskap); generell løsning = homogen + partikulær; **differensligning** $x_{n+2}+bx_{n+1}+cx_n=0$ (karakteristisk likning, kjennskap — stod på eldre formelark). Merk hele kapitlet «eldre profil — lav prioritet». Til bruk/kjennskap.
- **Oppgavesjangre:** Klassisk 2.-ordens (beredskap). Mønstereksempel: «Løs $y''-3y'+2y=0$ med $y(0)=1$, $y'(0)=0$.»
- **Typiske feil:** Feil tilfelle av karakteristisk likning; feil form ved kompleks-konjugerte røtter; blander homogen/partikulær; feil ved dobbel rot ($xe^{rx}$-leddet).
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Følger, rekker og Taylor *(prioritet: KUNNE — Taylor+feilestimat ~39 % (5/7 siste sett), rekker ~22 % (fra 2020); den nyere blokken, stigende)*

#### Kapittel 7.1: Rekker: geometrisk, teleskoperende og konvergens

- **id:** `ma1101-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-1-3`
- **kapitteltype:** teori
- **description:** Rekker fra grunnen: geometrisk sum, teleskopering via delbrøk, eksponentialrekken, og det sentrale teori-utsagnet «lim aₙ=0 er nødvendig, ikke tilstrekkelig» (harmonisk moteksempel) — ny blokk fra 2020.
- **Forkunnskaper (kryssbok):** Kap. 1.3, 4.3 (delbrøk for teleskopering); [Følger og rekker](/r2/r2-3-1) fra R2.
- **Eksamensbelegg:** Sjanger O (rekker), **~22 %** (fra 2020, fast siden). Fasitens grep: geometrisk $\sum r^k=\frac1{1-r}$; teleskoper via delbrøk; harmonisk divergerer. Prioritet: **kunne** (stigende).
- **Innholdskontrakt:** **Rekke** $\sum_{n=1}^\infty a_n$ og delsummer; **geometrisk rekke** $\sum_{n=0}^\infty r^n=\frac1{1-r}$ for $|r|<1$; **teleskoperende rekke** via delbrøk ($\sum\frac1{n(n+1)}$); **eksponentialrekken** $\sum\frac{x^n}{n!}=e^x$ (så $\sum\frac{2^n}{n!}=e^2-1$-type); **nødvendig betingelse** $\lim a_n=0$ (og at det IKKE er tilstrekkelig — **harmonisk rekke** $\sum\frac1n$ divergerer); kjennskap til sammenligning/integraltest. Alt til aktiv bruk.
- **Oppgavesjangre:** O. Mønstereksempel: «Beregn $\sum_{n=2}^\infty\frac1{n^2-1}$ ved teleskopering (delbrøk), og avgjør om $\sum\frac1n$ konvergerer.»
- **Typiske feil:** **«$\lim a_n=0\Rightarrow\sum a_n$ konvergerer»** (harmonisk moteksempel — dokumentert felle); feil $r$-intervall i geometrisk; feil delbrøk i teleskopering; glemmer å ta grensen av delsummen.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.2: Taylor- og McLaurinpolynom med restledd og feilestimat

- **id:** `ma1101-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma1101-3-1`
- **kapitteltype:** teori
- **description:** Taylor-/McLaurinpolynom (direkte eller via kjente rekker), Lagrange-restleddet, og feilestimat-varianten: begrens |f^(n+1)| på intervallet og vis at feilen er under en gitt toleranse — sterkt stigende (5/7 siste sett).
- **Forkunnskaper (kryssbok):** Kap. 3.1, 7.1 (kjente rekker).
- **Eksamensbelegg:** Sjanger J, **~39 %** (5/7 siste sett — sterkt stigende). Fasitens grep: regn deriverte i utviklingspunktet ELLER komponer kjent rekke; **restledd** $\frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}$, begrens $|f^{(n+1)}|$, vis feil < toleranse. Prioritet: **kunne** (stigende — prioriteres).
- **Innholdskontrakt:** **Taylorpolynom** $P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k$ (McLaurin når $a=0$); **kjente McLaurinrekker** ($e^x$, $\sin x$, $\cos x$, $\frac1{1-x}$, $\ln(1+x)$) — komponer/integrer for nye; **Lagrange-restledd** $R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$; **feilestimat**: begrens $|f^{(n+1)}(c)|\le M$ på intervallet, vis $|R_n|<$ toleranse; ofte anvendt på **integralfunksjon** $F(x)=\int_0^x g(t)\,dt$; kobling til L'Hôpital-alternativet (kap. 2.2). Alt til aktiv bruk (numerisk tilnærming er selve svaret her).
- **Oppgavesjangre:** J. Mønstereksempel: «La $f(x)=\int_0^x\sqrt{1+t^2}\,dt$. Finn Taylorpolynomet av grad 3 om 0, og gi en tilnærming til $f(0{,}1)$ med feil under $0{,}001$.»
- **Typiske feil:** Feil deriverte i utviklingspunktet; glemmer restleddet ved feilestimat; **begrenser $|f^{(n+1)}|$ feil** (feil intervall eller for løs skranke); forveksler McLaurin ($a=0$) med generell Taylor; regnefeil i fakultetene.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.3: Numeriske metoder *(bør kjenne til — svakt eksamensbelegg)*

- **id:** `ma1101-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `ma1101-7-2`
- **kapitteltype:** teori
- **description:** Pensumets numeriske metoder — Newtons metode, trapes/Simpson for integrasjon, halveringsmetoden for likninger — dekket fordi de står i pensum; eksamensbelegget er indirekte (via feilestimat og rot-lokalisering).
- **Forkunnskaper (kryssbok):** Kap. 3.1 (Newton), 4.1 (trapes/Simpson), 2.3 (halvering/skjæringssetning).
- **Eksamensbelegg:** Pensumnevnt, **svakt/indirekte arkivbelagt** (via Taylor-feilestimat og skjæringssetning-lokalisering). Fasitens grep: standardmetodene; merk indirekte belegg. Prioritet: **kjenne** (pensumdekning).
- **Innholdskontrakt:** **Newtons metode** $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$ (rot-tilnærming, konvergensbetingelse kjennskap); **halveringsmetoden** (bisection — forankret i skjæringssetningen, rot-innkapsling til gitt lengde); **trapes- og Simpsons regel** for numerisk integrasjon (formler + feilorden, kjennskap); kobling til feilestimat (kap. 7.2). Merk hele kapitlet «svakt eksamensbelegg — pensumdekning». Til bruk/kjennskap.
- **Oppgavesjangre:** Numerisk (beredskap). Mønstereksempel: «Bruk to steg av Newtons metode med $x_0=1$ til å tilnærme roten av $x^3+x-3=0$.»
- **Typiske feil:** Feil Newton-formel (fortegn); glemmer $f'(x_n)$ i nevneren; feil intervall i halvering; feil trapes-/Simpson-formel.
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4).

---

### Del 8 — Eksamenstrening, teori og bevis

#### Kapittel 8.1: Bevis- og føringsstandarden: slik skriver du en fullt begrunnet MA1101-besvarelse

- **id:** `ma1101-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-2-4`
- **kapitteltype:** teori (føringsbank)
- **description:** Føringsstandarden samlet: motiver alt, navngi teoremet som bærer argumentet, vis deriverbarhet fra differansekvotienten, før uegentlige integraler med eksplisitt lim, begrunn eksistens OG entydighet separat — og bevismalene for ε-δ, sekant-med-hjelpefunksjon og skjæringssetning.
- **Forkunnskaper (kryssbok):** Kap. 2.3, 2.4, 3.2 (bevistemaene).
- **Eksamensbelegg:** Metakapittel — destillerer sensorreglene (§4 i analysen) og bevismalene. Prioritet: **perfekt** (føringen gir/tar poeng i hvert punkt).
- **Innholdskontrakt:** **Sensorreglene** samlet: motiver alt; navngi teoremer (skjæringssetning/sekant/ekstremalverdi/fundamentalteorem/sammenligning/skvis/L'Hôpital); deriverbarhet fra differansekvotienten; substitusjon bokføres; fortegnsskjema tegnes; uegentlige med eksplisitt lim; eksistens + entydighet separat; optimering med globalitetsargument. **Bevismalene**: (a) ε-δ ($\delta=\min(1,\varepsilon/K)$); (b) sekant-med-hjelpefunksjon ($h=f-g$, sjekk forutsetninger); (c) skjæringssetning (kontinuitet uttalt + fortegnsskifte + monotoni for entydighet); (d) «bevis eller avkreft» med ett moteksempel; (e) «finn et eksempel» med verifikasjon. **Karakterskillene** (bestått/midt/topp fra §4). Til aktiv bruk.
- **Oppgavesjangre:** 4–6 føringsoppgaver: «skriv om en mangelfull løsning til A-standard»; «hvilket teorem bærer dette argumentet, og hvordan navngis det?».
- **Typiske feil:** Bart svar uten motivasjon; teorem ikke navngitt; deriverbarhet fra formel; «sett inn ∞»; eksistens uten entydighet; optimering uten globalitet.
- **Quiz: 12 · Flashcards: 26** (sensorregler, teoremnavn, bevismaler, karakterskiller)

#### Kapittel 8.2: Sann/Usann-teoriblokken: definisjons- og moteksempelberedskap

- **id:** `ma1101-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma1101-8-1`
- **kapitteltype:** drill (teori)
- **description:** Den faste eksamensåpningen (fra 2018) drillet: 5–10 Sann/Usann-utsagn om definisjoner, standardgrenser, fundamentalteorem, kontinuitet vs. begrensethet, sup/inf, uniform kontinuitet, vendepunkt- og rekke-feller — med moteksempel-beredskap for hver.
- **Forkunnskaper (kryssbok):** Hele boka (Del 1–7 leverer utsagnene).
- **Eksamensbelegg:** Sjanger I, **5/7 siste sett** (2018–2023). Fasitens grep: svar Sann/Usann (av og til «kan ikke avgjøres»), ingen begrunnelse kreves — men teorien må sitte. Prioritet: **perfekt** (fast åpning, karakterskiller).
- **Innholdskontrakt:** **Utsagnskatalog** med fasit + moteksempel: deriverbar ⇔ differansekvotienten eksisterer; grensene fra begge sider like ⇏ kontinuerlig (glemmer $f(a)$); $\lim a_n=0\Rightarrow\sum a_n$ konvergerer (**usann**, harmonisk); begrenset ⇒ har maks (**usann**, $\arctan$); $f''(x_0)=0\Rightarrow$ vendepunkt (**usann**); kontinuerlig på $(a,b)$ ⇒ begrenset (**usann**); ekstremalverdisetningen krever LUKKET intervall; $\sup(A+B)=\sup A+\sup B$; Riemann-sum-konvergens; $|x|$ ikke deriverbar i 0. **Moteksempel-banken** (den viktigste ferdigheten): $\arctan$ (begrenset uten maks), harmonisk (leddene → 0, divergerer), $|x|$ (kontinuerlig ikke deriverbar), $x^2\sin(1/x)$ (deriverbar, $f'$ diskontinuerlig). Til aktiv bruk.
- **Oppgavesjangre:** I. Mønstereksempel: «Sann eller usann (med moteksempel der usann): (a) Enhver begrenset funksjon $f:\mathbb R\to\mathbb R$ har et globalt maksimum. (b) Hvis $\lim_{n\to\infty}a_n=0$, konvergerer $\sum a_n$.»
- **Typiske feil:** Mangler moteksempelet (kan svaret men ikke hvorfor); faller for standardfellene (begrenset ⇒ maks; $\lim a_n=0$ ⇒ konvergens; $f''=0$ ⇒ vendepunkt); glemmer «lukket intervall»-forutsetningen; gjetter uten teorigrunnlag.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 8.3: Øvingseksamen 1: den ferske malen (Sann/Usann + regne + bevis)

- **id:** `ma1101-8-3` · **number:** 8.3 · **estimatedMinutes:** 75 · **prerequisites:** `ma1101-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers-sett i 2018–2023-malen: Sann/Usann-åpning + 1. ordens difflikning + «beregn disse integralene» (inkl. uegentlig) + funksjonsdrøfting + Taylor med feilestimat + signaturoppgaven + ett bevispunkt. Løsningsforslag som A-besvarelse.
- **Eksamensbelegg:** Speiler prognosen O1–O7 (§ analyse 7). Prioritet: eksamenssimulering.
- **Innholdskontrakt:** 8–10 likt vektede punkter: **I** Sann/Usann (5–8 utsagn) → **A** separabel difflikning + eksistensintervall → **B** «beregn disse» (delbrøk + substitusjon + delvis) → **F** ett uegentlig med sammenligning → **C** drøfting med skråasymptote + skisse → **J** Taylor grad 3 + feilestimat på integralfunksjon → **D** signaturoppgaven → **H** ett bevispunkt (sekant-med-hjelpefunksjon). Løsningsforslag i eget collapsible per punkt, A-besvarelse, med tip om delpoeng/vekting.
- **Oppgavesjangre:** I, A, B, F, C, J, D, H (den typiske ferske eksamenen).
- **Typiske feil:** (samlet fra kapitlene) — føringssvikt, glemt eksistensintervall, «sett inn ∞», manglende skisse, deriverbarhet fra formel, bevis uten forutsetningssjekk.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2: teoritung variant (ε-δ, uniform, sup/inf, rekker)

- **id:** `ma1101-8-4` · **number:** 8.4 · **estimatedMinutes:** 75 · **prerequisites:** `ma1101-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett vektet mot den nyere teoriblokken: Sann/Usann + sup/inf-oppgave + ε-δ eller uniform kontinuitet + rekke (teleskoperende) + Riemann-sum + integrasjonsteknikk + difflikning — for studenten som vil sikre toppsjiktet.
- **Eksamensbelegg:** Speiler de stigende teoritemaene (2020–2023). Prioritet: eksamenssimulering (topp).
- **Innholdskontrakt:** 8–10 punkter: **I** Sann/Usann → **O** sup/inf med ε-argument → **P** ε-δ ELLER uniform kontinuitet (bekreft + motbevis) → **O** rekke (teleskoperende + konvergensutsagn) → **G** Riemann-sum → **B** integrasjonsteknikk (delbrøk med $Bx+C$) → **A** lineær difflikning via integrerende faktor → **K** fundamentalteorem med variable grenser. Løsningsforslag som A-besvarelse, tip om vekting.
- **Oppgavesjangre:** I, O, P, G, B, A, K (teoritung fersk variant).
- **Typiske feil:** ε-halvdelen droppet i sup; δ avhenger av $x$ i «uniform»; harmonisk-fellen i rekke; glemt kjerneregelfaktor i fundamentalteorem.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3: klassisk regnetung variant (2008–2015-profil)

- **id:** `ma1101-8-5` · **number:** 8.5 · **estimatedMinutes:** 75 · **prerequisites:** `ma1101-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i den eldre, regnetunge profilen (2008–2015): difflikning + integrasjonsteknikk + drøfting + omdreiningsvolum + relaterte rater/optimering + invers-derivert + L'Hôpital — beredskap for et sett som vekter regning over teori.
- **Eksamensbelegg:** Speiler den eldre malen (relaterte rater/volum sto sentralt før 2016). Prioritet: eksamenssimulering (beredskap/bredde).
- **Innholdskontrakt:** 8–10 punkter: **A** difflikning (separabel + lineær) → **B** integrasjonsteknikk (2–3 teknikker) → **C** funksjonsdrøfting med skisse → **N** omdreiningsvolum (skive vs. skall) → **optimering/relaterte rater** med globalitetsargument → **M** invers-derivert → **E** L'Hôpital (flere former) → **K** fundamentalteorem. Løsningsforslag som A-besvarelse, tip om vekting. Note: «eldre profil — dekker bredden, men den ferske malen (8.3–8.4) er primær».
- **Oppgavesjangre:** A, B, C, N, optimering, M, E, K (klassisk regnetung).
- **Typiske feil:** Feil rotasjonsakse-metode; optimering uten globalitet; relaterte rater uten tidsderivasjon; L'Hôpital uten [0/0]-markering.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.6: Bevis-drill: ε-δ, uniform kontinuitet, sup/inf og hjelpefunksjon

- **id:** `ma1101-8-6` · **number:** 8.6 · **estimatedMinutes:** 75 · **prerequisites:** `ma1101-8-1`
- **kapitteltype:** drill (bevis)
- **description:** Bevis-sjangeren drillet samlet: ε-δ-mal, uniform kontinuitet (bekreft OG motbevis), ε-argument for sup, sekant-med-hjelpefunksjon for ulikheter, og skjæringssetning med entydighet — den selvstendige bevisferdigheten som skiller toppsjiktet.
- **Eksamensbelegg:** Dekker sjanger H + P + O-bevis samlet (teoripunktet i hvert nyere sett). Variantkatalogen: ε-δ, uniform (begge retninger), sup med ε, hjelpefunksjon-ulikhet, skjæringssetning+entydighet. Prioritet: **perfekt** (bevisferdighet = karakterskiller).
- **Innholdskontrakt:** **Løsningsoppskrift per bevistype**: ε-δ (skriv def., faktoriser, avgrens, $\delta=\min(1,\varepsilon/K)$); uniform (kompakt-teorem / $f'$ begrenset / motbevis via ubegrenset $f'$); sup (kandidat → øvre skranke → ε-argument); hjelpefunksjon (konstruer $h=f-g$, sjekk forutsetninger, MVT); skjæringssetning (kontinuitet uttalt + fortegnsskifte + monotoni). Gjennomregnet case per type med sensor-margnotater (forutsetningssjekk gir uttelling). 10–12 bevisoppgaver på eksamensnivå fordelt på typene.
- **Oppgavesjangre:** H, P, O (bevis). Mønstereksempel: «(a) Vis med ε-δ at $\sqrt x$ er kontinuerlig i 0. (b) Vis at $e^{x^2}$ ikke er uniformt kontinuerlig på $\mathbb R$.»
- **Typiske feil:** Definisjonen ikke skrevet ut; δ avhenger av $x$ i uniform; ε-halvdelen droppet i sup; hjelpefunksjon feil; skjæringssetning uten kontinuitet.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — de tre øvingseksamenene (8.3–8.5) og bevis-drillen (8.6) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 16 |
| 1 | 1.1–1.4 | 18+16+16+14 = **64** | 22+22+20+8 = **72** |
| 2 | 2.1–2.4 | 18+16+16+14 = **64** | 22+20+22+22 = **86** |
| 3 | 3.1–3.6 | 16+16+18+16+14+14 = **94** | 22+20+24+22+18+16 = **122** |
| 4 | 4.1–4.5 | 16+18+16+14+14 = **78** | 22+24+22+20+8 = **96** |
| 5 | 5.1–5.3 | 16+14+14 = **44** | 22+16+16 = **54** |
| 6 | 6.1–6.4 | 18+16+14+12 = **60** | 24+22+8+14 = **68** |
| 7 | 7.1–7.3 | 16+16+12 = **44** | 22+22+14 = **58** |
| 8 | 8.1–8.6 | 12+18+5+5+5+5 = **50** | 26+24+0+0+0+0 = **50** |
| **Sum** | **36 kap.** | **510 ≥ 500 ✓** | **622 (mål 600–650) ✓** |

> Merk: kapittelkvotene over er GULV per kapittel og summerer til **510 quiz** og **622
> flashcards** — begge klarer kravet ≥500 med god margin. Forfatteren kan **overskyte,
> aldri underskride**; quiz ligger nærmere gulvet (510) fordi analysefagets verdi ligger
> i FÅ, TUNGE sjangre drillet dypt (integrasjonsteknikk, difflikning, signaturoppgaven,
> bevis) snarere enn brede faktabatterier — flashcard-tettheten (622) bærer det
> definisjons- og teoremrike apparatet.

Kvotene er minimum per kapittel. **Flashcard-tettheten er bevisst høy (622, ikke ~510):**
MA1101 er et **definisjons-, teorem- og bevisteknikkrikt analysefag** der formelarket
kun dekker deriverte/identiteter — hele **teoriapparatet** må pugges: alle setningsnavn
(skjæringssetningen, sekantsetningen, ekstremalverdisetningen, fundamentalteoremet,
sammenligningstesten, skviseteoremet), **definisjonene** (ε-δ, sup/inf, uniform
kontinuitet, deriverbarhet fra differansekvotienten, konvergens), **integrasjonsteknikk-
oppskriftene**, **standardgrensene** og **moteksempel-banken** (Sann/Usann). De teori-
og bevistunge delene (Del 2 grenser/ε-δ, Del 3 derivasjon inkl. signaturoppgaven, Del 8
føringsbank + Sann/Usann) bærer tettheten; drillkapitlene (1.4, 4.5, 6.3) og
øvingseksamenene holdes lave (8/0) fordi deres verdi er oppgaver, ikke kort.
Quiz-fordelingen speiler eksamensvektene: **Del 3 (derivasjon — 94 quiz) og Del 4
(integrasjon — 78) bærer regne-tyngdepunktet (172 av 510)**; teoriblokken (Del 2 + 8 =
64+50 = 114) bærer stringens-profilen; de nyere temaene (Del 1 + 7 = 64+44 = 108) er
solid dekket til tross for lave arkivsnitt.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag etter
bevis- og føringsstandarden (8.1): full motivasjon, navngitte teoremer, eksplisitt lim
på uegentlige integraler, bokført substitusjon, eksistens + entydighet separat, ett
moteksempel ved avkreftelse, poengfordeling. Legges som prøvekapitler
(`ma1101-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.

**Del 1 — Reelle tall, sup/inf og følger**
1. Prøve 1.A (35 min): Ulikheter + absoluttverdi + trekantulikhet (kap. 1.1, sjanger P-forberedelse).
2. Prøve 1.B (40 min): Sup/inf — finn + begrunn med ε-argument + regneregler (kap. 1.2, sjanger O).
3. Prøve 1.C (40 min): Følger — monoton+begrenset + konstruksjon med verifikasjon (kap. 1.3, sjanger O).
4. Prøve 1.D (40 min): Grunnlags-simulering — sup/inf + følgekonstruksjon kjedet (kap. 1.1–1.4, sjanger O).

**Del 2 — Grenser, kontinuitet og ε-δ**
1. Prøve 2.A (35 min): Grenser + skviseteoremet + standardgrenser (kap. 2.1, sjanger E).
2. Prøve 2.B (40 min): L'Hôpital — alle ubestemte former med [0/0]-markering (kap. 2.2, sjanger E).
3. Prøve 2.C (40 min): Skjæringssetningen + entydighet via monotoni + ekstremalverdi (kap. 2.3, sjanger H).
4. Prøve 2.D (45 min): ε-δ-bevis + uniform kontinuitet (bekreft OG motbevis) (kap. 2.4, sjanger P).

**Del 3 — Derivasjon og dens anvendelser**
1. Prøve 3.A (40 min): Implisitt derivasjon + tangent + deriverbar⇒kontinuerlig (kap. 3.1, sjanger L).
2. Prøve 3.B (40 min): Middelverdisetning med hjelpefunksjon — ulikhetsbevis (kap. 3.2, sjanger H).
3. Prøve 3.C (45 min): Funksjonsdrøfting med skråasymptote + skisse (kap. 3.3, sjanger C).
4. Prøve 3.D (45 min): Signaturoppgaven — kontinuitet+deriverbarhet i punkt + oscillasjonsfellen (kap. 3.4, sjanger D).

**Del 4 — Integrasjon: teknikk og fundamentalteoremet**
1. Prøve 4.A (35 min): Fundamentalteorem + kjerneregel med variable grenser (kap. 4.1, sjanger K).
2. Prøve 4.B (40 min): Substitusjon + delvis integrasjon (inkl. trig/ensom) (kap. 4.2, sjanger B).
3. Prøve 4.C (40 min): Delbrøk (Bx+C + gjentatt) + fullført kvadrat → arctan (kap. 4.3, sjanger B).
4. Prøve 4.D (45 min): «Beregn disse integralene» — 3 teknikker kjedet (kap. 4.2–4.5, sjanger B).

**Del 5 — Anvendte integraler**
1. Prøve 5.A (40 min): Uegentlig integral + sammenligningstest med navngitt objekt (kap. 5.1, sjanger F).
2. Prøve 5.B (35 min): Riemann-sum gjenkjent som integral (kap. 5.2, sjanger G).
3. Prøve 5.C (40 min): Omdreiningsvolum — skive vs. skall + buelengde (kap. 5.3, sjanger N).
4. Prøve 5.D (40 min): Anvendt-integral-simulering — uegentlig + Riemann-sum + volum kjedet (kap. 5.1–5.3, sjanger F + G + N).

**Del 6 — Differensiallikninger**
1. Prøve 6.A (35 min): Separabel ODE + IVP + konstantløsninger + eksistensintervall (kap. 6.1, sjanger A).
2. Prøve 6.B (40 min): Lineær 1. ordens via integrerende faktor + IVP + modell (kap. 6.2, sjanger A).
3. Prøve 6.C (40 min): ODE-tverrsnitt — separabel OG lineær + klassifisering (kap. 6.1–6.3, sjanger A).
4. Prøve 6.D (35 min): Annenordens homogen (tre tilfeller) + IVP (kap. 6.4, sjanger — eldre profil).

**Del 7 — Følger, rekker og Taylor**
1. Prøve 7.A (40 min): Rekker — geometrisk + teleskoperende + konvergensutsagn (kap. 7.1, sjanger O).
2. Prøve 7.B (45 min): Taylorpolynom + Lagrange-restledd + feilestimat (kap. 7.2, sjanger J).
3. Prøve 7.C (35 min): Numeriske metoder — Newton + halvering + trapes (kap. 7.3, sjanger — pensumdekning).
4. Prøve 7.D (45 min): Taylor-simulering — Taylor på integralfunksjon + feilestimat + rekke kjedet (kap. 7.1–7.2, sjanger J + O).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 8.3) | 2018–2023 fersk mal (primær) | I(O1) + A(O2) + B+F(O3) + C(O4) + J(O5) + D(O6) + H(O7) |
| Øvingseksamen 2 (kap. 8.4) | Teoritung fersk variant (2020–2023) | I(O1) + O/sup-inf(O2) + P(O3) + O/rekke(O4) + G(O5) + B + A + K |
| Øvingseksamen 3 (kap. 8.5) | Klassisk regnetung (2008–2015, beredskap) | A + B + C + N + optimering/relaterte rater + M + E + K |

Til sammen dekker de tre settene samtlige sjangre A–P minst én gang, og trener **begge
formatregimer** (8.3–8.4 fersk mal med teori-/bevisvekt — primær; 8.5 klassisk
regnetung — beredskap/bredde), med teori-/bevisdelen som gjennomgående karakterskiller.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Eksamenskartet og teori-vs-regne-balansen** — eksamensformen (4-timers
   skoleeksamen, 8–10 likt vektede punkter, kode D + formelark, nyere todelt ordning
   *(verifiser)*), de faste søylene (integrasjonsteknikk 100 %, difflikning 94 %,
   drøfting 89 %, grenser 72 %, signaturoppgaven 72 %) og hovedfunnet: teori-/bevisdelen
   (Sann/Usann + minst ett bevis) er den viktigste karakterskilleren (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer: perfekt
   (Del 3 derivasjon inkl. signaturoppgaven; Del 4 integrasjon; Del 6 difflikning; Del 2
   grenser/ε-δ; Del 8 bevis), kunne (Del 1 sup/inf/følger, Del 5 anvendte integraler,
   Del 7 rekker/Taylor), kjenne (Del 6.4 2. ordens ODE, Del 7.3 numeriske metoder,
   relaterte rater) — med notatet om at teori-/bevisberedskapen alene kan avgjøre en
   bokstavkarakter, og at den ferske malen (2018–2023) vektes over arkivsnittet.
3. **Sjangerguiden** — A–P med løsningsoppskriftene fra drillkapitlene (4.5, 6.3, 8.6)
   og signaturoppgaven (3.4) i kortform.
4. **Sensor- og bevisstandarden** — «motiver alt; navngi teoremet», deriverbarhet fra
   differansekvotienten, uegentlige med eksplisitt lim, bokført substitusjon, eksistens +
   entydighet separat, globalitetsargument i optimering, ett moteksempel ved «bevis eller
   avkreft», bevismalene (ε-δ, uniform, sup med ε, hjelpefunksjon, skjæringssetning) (fra
   kap. 8.1) + karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet (deriverbarhet fra
   formel + oscillasjonsfellen, eksistens uten entydighet, skjæringssetning uten
   kontinuitet, forveksling av setninger, delbrøk-oppsett feil, feil rotasjonsakse,
   konvergens uten navngitt sammenligning, glemt kjerneregelfaktor, optimering uten
   globalitet, feil integrerende faktor / uteglemt initialbetingelse / glemt
   konstantløsning, Sann/Usann-fellene, sup/inf-slurv, relaterte rater uten
   tidsderivasjon), hver med henvisning til kapitlet som forebygger den.
6. **Definisjons- og teoremliste i analysenotasjon** — apparatet fra
   innholdskontraktene (grense/kontinuitet/ε-δ/uniform, sup/inf/kompletthet,
   skjæringssetningen + ekstremalverdisetningen + middelverdisetningen,
   fundamentalteoremet + kjerneregel, sammenligningstesten + p-integralene,
   skviseteoremet + standardgrensene, deriverbarhet fra differansekvotienten,
   integrasjonsteknikkene, Taylor + Lagrange-restledd, geometrisk/teleskoperende rekke)
   — med markering *utlede/kunne aktivt* (bevisene + utledningene) vs. *kun bruke*
   (formelark-resultatene), og en påminnelse om hva formelarket dekker vs. hva som må
   sitte utenat.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge
Én byggeagent per hel del (jf. PRODUKSJONSLOYPE fase 4). Prøvekapitlet til en del bygges
av samme agent som delen. Del 3 (6 kap.) og Del 4 (5 kap.) er de tyngste — kan splittes
på to agenter hver, men begge må lese HELE delens kontrakter, og delen flagges for
konsistenssjekk. Del 8 (eksamenstrening/bevis) bygges av én agent som leser HELE
skjelettet (øvingseksamenene sveiper alle sjangre A–P). Prøvekapitler: `ma1101-<del>-prove`,
chapterNumber `<del>.P`, én per temadel 1–7 (28 prøver, 4 per del).

### Sjekkliste før «ferdig»
- json.load alle kapittel- og prøvefiler; kvotesum mot Summeringskontrollen (≥510 quiz,
  ≥622 flashcards — gulv 500/500 er klarert).
- Flashcards kommer KUN fra toppnivå `definition`-blokker med `title` — tell før/etter.
- `options[0]` = riktig svar i quiz-staging.
- Forbudt-termer-grep: **komplekse tall, matrise, egenverdi, gradient, partiell
  derivert, flervariabel** skal IKKE forekomme som eksamensrelevant stoff (analysens §6:
  null forekomster i MA1101-arkivet — kun MAT1100). Ett unntak: kompleks-konjugerte
  røtter i karakteristisk likning (kap. 6.4) er tillatt som eldre-profil-nevnelse.
- Kryssbok-lenker peker kun på eksisterende kapitler (R2/R1/S2 er bygde); ubygde
  NTNU-emner skrives som klartekst med aktiveringsmarkør.
- `npx tsc --noEmit` + `npm run build`; prod-server + curl på institusjonsside,
  bokforside, minst 3 kapitler (teori/drill/prøve), quiz- og flashcard-rute.
- Navigasjon: legg MA1101 inn i `src/app/trinn/hoyere/institusjoner.ts` under NTNU,
  navn «MA1101 Grunnkurs i analyse 1». `sectionNames` fra §2-tabellen (obligatorisk).

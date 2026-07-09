# Bokskjelett: MAT2400 Reell analyse (UiO) — eksamensrettet lærebok

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
> (UiOs MAT2400-arkiv 2004–2022: 20 ordinære sett, 3 konte, 9 sensorfasiter, samt
> MAT1300-forløperepoken 2004–2009). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — men kalibrert som **rent bevisemne** (se §1.4).
> Format-forbilde: `../mat121-uib/SKJELETT.md` (teori/bevisfag med egen bevis-del,
> v3), tilpasset MAT2400s bevis-DNA. Pensumbok: **Tom Lindstrøm, _Spaces: An
> Introduction to Real Analysis_** (AMS, 2017) — hans apparat og notasjon er
> bokstandard.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `mat2400` |
| Tittel | **MAT2400 Reell analyse (UiO)** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag, kalibrert som **rent bevisemne** (bevishåndverk, ikke regneteknikk) |
| Antall kapitler | **33** (2 eksamenskart/bevishåndverk + 27 tema/bevis + 4 eksamenstrening) |
| Estimert totaltid | **~2 130 min ≈ 36 timer** |
| Quiz totalt | **509** (krav ≥500) |
| Flashcards totalt | **636** (krav ≥500; sikt 600–700 for et definisjons-/teorem-/bevismalrikt bevisfag) |

**Pitch (ett avsnitt):** MAT2400 er UiOs innføring i reell analyse — metriske og
normerte rom, kompletthet, kompakthet, differensiasjon i normerte rom og
Fourier-analyse — bygget tett på **Tom Lindstrøms _Spaces_**. Til forskjell fra
et regnekurs som MAT1100 er dette et **rent bevisemne**: eksamen er ~10 likt
vektede 10-poengs deloppgaver, og ~90 %+ av dem er «vis at / bevis at», ~12 %
«finn et moteksempel» og ~12 % «beregn med full begrunnelse». Det finnes knapt en
eneste oppgave der man bare regner et tall uten å bevise noe. Derfor bygges denne
boka rundt **bevishåndverk**, ikke regneteknikk: de faste bevismalene som sensor
forventer fulgt til punkt og prikke. Ryggraden er **normerte rom og operatornorm**
(67 % av settene), **Fourier-analyse** (58 %, stigende), **metriske rom /
topologi / kompletthet / kompakthet** (58 %, kursets grunnmur), **Fréchet-/
retningsderivert + invers-/implisitt funksjonsteorem** (50 %, men den tydeligste
**stigende signaturen** — i alle fem siste ordinære sett og alle tre konte) og
**uniform kontinuitet** (50 %). Den enkeltferdigheten som skiller karakterene mest
er **Fréchet-firetrinnet** (retningsderivert → linearitet → begrensethet →
restledd $\sigma(r)/\lVert r\rVert\to 0$) — å hoppe over ett ledd er den dyreste
enkeltfeilen. Sensorregelen som preger alt: **«Alle svar må begrunnes» / «show
enough details so that it is easy to follow your arguments.»**

### 1.4 Kritiske stil-, notasjons- og bevisregler (gjelder HELE boka)

1. **Rent bevisemne — bevishåndverk foran regneteknikk.** Hvert løsningsforslag
   skrives som **A-besvarelse**: aksiomlister $(i)$–$(iii)$, navngitte teoremer der
   argumentet bæres, eksplisitt forutsetningssjekk, ryddig $\varepsilon$–$\delta$
   med riktig kvantorrekkefølge, verbal konklusjonssetning. Et riktig sluttsvar
   uten bevisføring gir ikke uttelling — det er trekantulikheten,
   begrensetheten og restleddsestimatet som gir poeng, ikke positivitet/symmetri.

2. **De faste bevismalene forventes fulgt til punkt og prikke.** Sensor leter
   etter den kjente strukturen. Malene er bokstandard og gjentas i drillkapitlene:
   - **Metrikk** $(i)$ $d(x,y)\ge 0$ med likhet $\Leftrightarrow x=y$, $(ii)$
     symmetri $d(x,y)=d(y,x)$, $(iii)$ trekantulikhet $d(x,z)\le d(x,y)+d(y,z)$.
   - **Norm** $(i)$ $\lVert u\rVert\ge 0$ med likhet $\Leftrightarrow u=0$, $(ii)$
     homogenitet $\lVert\alpha u\rVert=\lvert\alpha\rvert\lVert u\rVert$, $(iii)$
     trekantulikhet $\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert$.
   - **Fréchet-firetrinnet** $(i)$ gjett kandidaten $A$ via retningsderiverten
     $F'(x;r)=\lim_{t\to 0}\tfrac{F(x+tr)-F(x)}{t}$; $(ii)$ vis at $A$ er **lineær**;
     $(iii)$ vis at $A$ er **begrenset** $\lVert A(r)\rVert\le C\lVert r\rVert$;
     $(iv)$ vis at restleddet $\sigma(r)=F(x+r)-F(x)-A(r)$ oppfyller
     $\lVert\sigma(r)\rVert/\lVert r\rVert\to 0$. **Alle fire ledd kreves.**
   - **Operatornorm** vis linearitet + begrensethet $\lVert L f\rVert\le C\lVert f\rVert$
     (gir $\lVert L\rVert\le C$); for eksakt $\lVert L\rVert=C$ vises begge
     ulikheter, der den nedre krever en **konkret nesten-optimal testfunksjon**.
   - **Arzelà–Ascoli** kompakt i $C(K)$ $\Leftrightarrow$ lukket + begrenset +
     **ekvikontinuerlig**.
   - **Kontraksjon/Banach** $d(T(x),T(y))\le k\,d(x,y)$ med $k<1$ **pluss**
     kompletthet av rommet.

3. **Forutsetningene sjekkes eksplisitt før et teorem påberopes.** Banach krever
   kompletthet; Arzelà–Ascoli krever ekvikontinuitet; ekstremverdisetningen krever
   kompakthet + kontinuitet; ledd-for-ledd derivasjon/integrasjon krever uniform
   konvergens av den **deriverte/integrerte** rekka. Å hoppe over
   forutsetningssjekken (typisk kompletthet før Banach, ekvikontinuitet før
   Ascoli) er en dyr feil — merkes i egne `warning`-blokker.

4. **Navngi teoremet.** Fasitspråket: «by the Extreme Value Theorem», «by Banach's
   Fixed Point Theorem», «by the Inverse Function Theorem», «by Weierstrass'
   M-test», «by Bessel's inequality», «by the Riemann–Lebesgue lemma». Å referere
   til det påberopte resultatet med navn er del av standarden.

5. **Moteksempler krever full verifikasjon.** Å oppgi «$X=(0,1]$» er ikke nok — man
   må **vise** at eksempelet faktisk bryter (eller oppfyller) den aktuelle
   egenskapen (f.eks. konstruere en konkret Cauchy-følge uten grense i rommet).

6. **«Alternatively»-kulturen.** Nesten hver oppgave i fasitene har et eksplisitt
   «Alternatively:». Boka lærer **begge veier og når hver egner seg** — kompakthet
   via minimerende følge ELLER ekstremverdisetning; Fréchet direkte fra
   definisjonen ELLER via produkt-/kjerneregel; Fourier-entydighet via Fejér ELLER
   via $L^2$.

7. **Lindstrøms notasjon er bokstandard:** $d$ for metrikk, $\lVert\cdot\rVert$ for
   norm, $\lVert\cdot\rVert_\infty$/$d_\infty$ for sup-norm, $\lVert\cdot\rVert_1$
   for $L^1$/$\ell^1$, $\langle\cdot,\cdot\rangle$ for indreprodukt; $\bar A$ for
   tillukning, $\partial A$ for rand, $B(a;r)$ for åpen kule; $F'(x;r)$ for
   retningsderivert, $F'(x)$ eller $A$ for Fréchet-derivert, $A(r)$ for virkning,
   $\sigma(r)$ for restleddet; $a_n,b_n$ reelle og $\alpha_n=\langle u,e_n\rangle$
   komplekse Fourier-/koordinatkoeffisienter, $e_n(x)=e^{inx}$ for kompleks basis;
   funksjonsrom $C[a,b]$, $C_b$, $C_c$/$C_K$, $\ell^1$, $\ell^p$.

8. **«Trivielt får være kort, men det MÅ stå der.»** Fasit 2015 skriver «This is
   easy» om metrikk-verifikasjonen — sensor vet hva som er rutine, men aksiomene
   må listes. Bruk `(i)`–`(iii)` og gjør de trivielle leddene korte, det
   ikke-trivielle grundig.

9. **Ærlighet om arkiv og pensumforskyvning.** (a) **Målteori-kollapsen**:
   Lebesgue/målteori var tungt eksamenstestet 2011–2015 og deretter **fullstendig
   fraværende i alle ni sett 2016–2022**, men står fortsatt i emnebeskrivelsen
   (2026). Boka **dekker målteori for pensum** (Del 7), men eksamensvekten legges
   på metriske/normerte rom, differensiasjon og Fourier — Del 7 merkes eksplisitt
   «ikke arkivbelagt etter 2015». (b) **Arkivet stopper i 2022** (ingen 2019, ingen
   2023+). Byggefasen skal **verifisere kalibreringen mot første tilgjengelige sett
   fra 2023 og senere** — særlig om målteori er reelt gjeninnført. (c) Fasit
   mangler for enkelte år; metodekrav utledet fra oppgavetekster + kontinuiteten i
   fasitpraksis 2015–2022 merkes «⚠️ metode = faglig standard».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): metriske rom er grunnmuren
alt hviler på; følger/uniform konvergens og kontinuitet bygger direkte på
metrikken; normerte rom legger algebraisk struktur oppå metrikken; Banach og
Fréchet krever kompletthet + normerte rom; Fourier krever indreprodukt/Hilbert;
målteori er en egen søyle (beredskap); eksamenstreningen er sist. **Frekvensen
styrer omfanget**, ikke rekkefølgen: nivå 1-temaer (perfekt) får teori + eget
drillkapittel; nivå 3 (kjenne) får ett kompakt kapittel. Seksjonstitler (blir
`sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet og bevishåndverket | 2 | Prioriteringsverktøy + malbibliotek. Rent bevisemne → et eget håndverkskapittel etablerer sjangrene og de faste malene som hele boka driller. |
| 1 | Metriske rom, topologi, kompletthet og kompakthet | 5 | Grunnmuren ~58 % (bredt ~10/12) + kompletthet 42 % + kompakthet ~5/12 → **perfekt** → teori + drill. |
| 2 | Følger, funksjonsfølger og uniform konvergens | 4 | Uniform vs. punktvis 42 % + M-test → **kunne** → teori + drill; potensrekker (17 %) som kjenne-kapittel. |
| 3 | Kontinuitet, uniform kontinuitet og kompakthet i funksjonsrom | 3 | Uniform kontinuitet 50 % + Arzelà–Ascoli ~5/12 (stigende i konte) → **kunne/perfekt** → teori + drill; Weierstrass-approksimasjon (17 %) som signaturbevis. |
| 4 | Normerte rom, operatornorm og Hilbertrom | 5 | **Ryggraden** 67 % + Hilbert 25 % → **perfekt** → teori + drill. |
| 5 | Banachs fikspunktteorem og differensiasjon i normerte rom | 5 | **Den stigende signaturen** — Fréchet/invers 50 % (alle 5 siste + alle konte) + Banach 25 % → **perfekt** → teori + **eget Fréchet-drillkapittel**. |
| 6 | Fourier-analyse | 3 | ~58 % og **stigende** (6 av 7 siste) → **perfekt** → teori + drill. |
| 7 | Målteori og Lebesgue-integrasjon (beredskap) | 2 | Tungt 2011–2015, **null 2016–2022**, men i emnebeskrivelsen → **kjenne** → 2 kompakte kapitler, ærlig merket. |
| 8 | Eksamenstrening | 4 | Bevismal-/føringsstandard + 3 komplette øvingseksamener (10 bevis-deloppgaver hver). |

**Avvik fra DNA-malen (dokumentert):**

1. **Rent bevisemne — hele boka er «bevis-del».** DNA-regnefag antar entydige
   fasitsvar og regnedrill. MAT2400 har ~90 %+ bevisandel, så DNA-ens
   «regnekapittel» erstattes gjennomgående av **bevishåndverk**: definisjoner og
   teoremer med full bevismal, drillkapitler der oppgavene er bevis (ikke
   tallregning), og et eget håndverkskapittel (0.2). Dette speiler MAT121s egen
   bevis-del, men her gjelder det **alle** deler.

2. **Eget bevishåndverk-kapittel i Del 0 (kap. 0.2).** Fordi bevisferdigheten er
   selve faget, får de tverrgående malene (aksiomlister, teoremnavning,
   forutsetningssjekk, moteksempel-verifikasjon, $\varepsilon$–$\delta$-disiplin,
   «Alternatively») et dedikert kapittel før temaene starter — analogt med MAT121s
   føringsstandard (9.1), men plassert tidlig fordi det trengs fra kapittel 1.1.

3. **Fréchet-firetrinnet får eget drillkapittel (5.3).** Den tydeligste
   karakterskilleren og den dyreste enkeltfeilen (hoppe over
   begrensethet/restledd). Drilles isolert til automatikk, i alle de dokumenterte
   kontekstene ($\int f^3$, $f(0)f(1)$, $\lVert x\rVert^2$ i indreproduktrom,
   polynomavbildning $\mathbb R^2\to\mathbb R^2$).

4. **Målteori nedprioritert til beredskap (Del 7, 2 kap., «kjenne»).** Til tross
   for at det står i emnebeskrivelsen, er det arkivær ærlighet å merke det som
   ikke-testet etter 2015 og legge eksamensvekten på de temaene som eier de siste
   ni settene. Del 7s Eksamensvinkel sier dette eksplisitt og ber byggefasen sjekke
   2023+.

5. **Drillkapitlene ligger i temadelene sine** (1.5, 2.4, 3.3, 4.5, 5.3, 5.5, 6.3)
   i stedet for samlet i siste del — dette er bevissjangrene som må drilles rett
   etter teorien. Del 8 beholder bevismal-standarden og de tre øvingseksamenene.

6. **33 kapitler + høy flashcard-tetthet (636).** Innenfor DNA-taket (20–35), men
   flashcard-summen ligger i det høye sjiktet (mål 600–700) fordi et bevisfag er
   **definisjons-, teorem- og bevismalrikt**: aksiomlister, teoremnavn og de faste
   malene er selve puggematerialet (jf. PRODUKSJONSLOYPE «≥500 er et gulv»).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** verifiser
metrikk/norm (alle aksiomer), **B** Fréchet-/retningsderivert (firetrinnsmalen),
**C** invers-/implisitt funksjonsteorem (Jacobi inverterbar → lokal løsbarhet),
**D** operatornorm / begrensede lineære operatorer (testfunksjon), **E**
Fourier-rekke: beregning + rekkesum (paritet, delvis integrasjon, Dini i et punkt),
**F** Fourier/funksjonalanalyse-konvergens (uniform under $\sum\lvert\alpha_n\rvert<\infty$,
entydighet, Riemann–Lebesgue, konvolusjon), **G** kompletthet/Cauchy (komplett
eller konkret moteksempelfølge), **H** kompakthet (Heine–Borel, ekstremverdisetning,
Arzelà–Ascoli), **I** kontraksjon + Banachs fikspunktteorem (+ Picard-ODE), **J**
uniform vs. punktvis konvergens (M-test, «uniform grense av kontinuerlige»), **K**
Hilbertrom/indreprodukt (Cauchy–Schwarz, Bessel, ortonormal basis, Riesz), **L**
metrisk topologi (tillukning/rand/opphopning via følger), **M** moteksempel-
konstruksjon med full verifikasjon (tverrgående sjanger), **N** uniform
kontinuitet (definisjon, negasjon, Lipschitz, kontinuerlig på kompakt), **O**
målteori/Lebesgue (beredskap, ikke arkivbelagt etter 2015).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Aktiveringsmarkør for forkunnskaper.** Forgjengeremnene **MAT1100 Kalkulus** og
**MAT1110 Kalkulus og lineær algebra** (UiO) er skjelett, ikke bygget. Referanser
til dem skrives som klartekst med markøren *(MAT1100/MAT1110 — forgjengerbok, ikke
bygget ennå; aktiver `/bok/mat1100/<id>`- / `/bok/mat1110/<id>`-lenke når den
finnes)*. Disse er **primær-ankeret**: reell analyse bygger på kalkulus (grenser,
sup/inf, kompletthet av $\mathbb R$, Riemann-integral, reelle følger/rekker) og på
lineær algebra (vektorrom, lineære avbildninger, Jacobimatrise, determinant).
Referanser til **bygde** bøker lenkes normalt — kun til kapitler som finnes: **R2**
dekker følger, rekker, integrasjon og bevisføring fra VGS; **R1**/**1T** dekker
vektorer, funksjoner og elementær argumentasjon. Byggefasen verifiserer at hver
lenke peker på et kapittel som eksisterer (jf. PRODUKSJONSLOYPE fase 6).

---

### Del 0 — Eksamenskartet og bevishåndverket

#### Kapittel 0.1: Eksamenskartet: et rent bevisemne på ti likt vektede punkter

- **id:** `mat2400-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MAT2400: én 4-timers skriftlig skoleeksamen, ~10 likt vektede 10-poengs bevis-deloppgaver, ~90 %+ «vis at». Temaryggraden, den stigende Fréchet-signaturen, målteori-kollapsen, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen** (teller 100 %), **~10–11 likt vektede 10-poengs deloppgaver, sum 100**, **ingen hjelpemidler** (2020/2021 var digitale hjemmeeksamener, men oppgavene forble rene bevisoppgaver), to godkjente obligatoriske innleveringer kreves for adgang, karakterskala A–F, ofte et lite **faktaark** bakerst (norm-/Fourier-aksiomer, retningsderivert-definisjon, M-test, geometrisk rekke); (ii) **at oppgavene er selvstendige og likt vektede** (~22–24 min per 10-poengsblokk), at **kjeding oppmuntres** (resultater fra punkter man ikke har løst kan brukes videre), og at settet typisk tester 4–6 tema; (iii) **at dette er et rent bevisemne**: ~75 % «vis at / bevis at», ~12 % «finn et moteksempel» (med full verifikasjon), ~12 % «beregn med full begrunnelse» (Fourier-koeffisient, Jacobi, konvergensradius innbakt i bevisoppgave), ~1 % «definer»; (iv) **temafrekvens-tabellen** (normerte rom/operatornorm 67 %, Fourier 58 % stigende, metriske rom/topologi 58 % (~10/12 bredt), uniform kontinuitet 50 %, Fréchet/invers 50 % stigende, kompletthet 42 %, målteori 42 % men 0/9 etter 2015, uniform konvergens 42 %, kontraksjon/Banach 25 %, Hilbertrom 25 %, Arzelà–Ascoli 25 % stigende i konte, Weierstrass-approksimasjon 17 %, potensrekker 17 %, $\ell^p$-rom 33 % stigende); (v) **karakterskillene** (bestått ≈ mekanikken: verifisere aksiomer, sette opp retningsderiverten, regne Jacobi/Fourier-koeffisient, punktvis grense; midtsjikt ≈ fullføre de faste malene korrekt: alle fire Fréchet-ledd, operatornorm med testfunksjon, kompletthet via lukket underrom, uniform konvergens med riktig M-test-skranke; toppsjikt ≈ presis håndtering av **når** et teorem gjelder, korrekt Gateaux/Fréchet-skille, selvstendige moteksempler med full verifikasjon, se koblingen a)→b), ryddig $\varepsilon$-argumentasjon).
- **Innholdskontrakt:** Sjangerkatalogen A–O presenteres som studentens sjekkliste med frekvens per sjanger; prognosen for neste ordinære eksamen (~10 deloppgaver): **én Fréchet-/retningsderivert-oppgave** (nesten sikker, ofte koblet til invers-/implisitt i b)-punktet); **én Fourier-oppgave** (beregn rekka + evt. summér tallrekke / konvergensegenskap); **én norm-/metrikk-verifikasjon** på et konkret funksjons-/følgerom; **én kompletthet- eller kompakthetsoppgave**, ofte med «gi et moteksempel»; **én operatornorm-** ELLER **Hilbertrom-oppgave** (Bessel/Riesz); muligens **én kontraksjon/fikspunkt-** eller **uniform konvergens**-oppgave; **minst én deloppgave** ber om et eksempel/moteksempel med full verifikasjon. Ærlighetsforbeholdet: målteori-kollapsen (dekket i Del 7 for pensum, lav eksamensvekt, merket «ikke arkivbelagt etter 2015»); arkivet stopper 2022 → verifiser mot 2023+-sett. Leseplan: Del 1 er grunnmuren, Del 4–5 er tyngdepunktet (ryggrad + stigende signatur), Del 6 er nesten årlig, Del 8 løfter under tidspress.
- **Oppgavesjangre:** Ingen bevisoppgaver; 3–4 refleksjonsoppgaver av typen «en Fréchet-oppgave har a) regn retningsderiverten og b) vis Fréchet-deriverbarhet — hvordan planlegger du de fire malleddene på 22 minutter?» og «lag en pugge-plan for de teoremene du må kunne navngi utenat (Banach, Ascoli, ekstremverdi, M-test, Bessel, Riemann–Lebesgue)».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere ryggraden (normerte rom + Fréchet + Fourier); tro at MAT2400 kan «regnes» som MAT1100 (her må alt bevises); undervurdere Fréchet-firetrinnet fordi retningsderiverten «ser ferdig ut»; pugge målteori tungt på bekostning av de temaene som faktisk testes.
- **Quiz: 10 · Flashcards: 14** (frekvenser, sjangerkatalog A–O, eksamensform, sensorregler, notasjonskart)

#### Kapittel 0.2: Bevishåndverket: de faste malene, teoremnavning og moteksempler

- **id:** `mat2400-0-2` · **number:** 0.2 · **estimatedMinutes:** 70 · **prerequisites:** `mat2400-0-1`
- **kapitteltype:** drill (bevishåndverk)
- **description:** Selve håndverket faget testes på, samlet på ett sted: aksiomlister (i)–(iii), Fréchet-firetrinnet, operatornorm-mønsteret, forutsetningssjekk før teoremer, moteksempel med full verifikasjon, ε–δ-disiplin og «Alternatively»-kulturen — malbiblioteket alle senere kapitler refererer til.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksisen 2015–2022: (i) «Alt skal begrunnes, men trivielt får være kort» — aksiomer må listes, men (i)–(ii) gjøres korte, det ikke-trivielle (trekantulikhet, begrensethet, restledd) grundig; (ii) **de faste malene forventes fulgt** (metrikk/norm-aksiomene, Fréchet-firetrinnet, operatornorm to veier, Arzelà–Ascoli tre krav, Banach kontraksjon+kompletthet); (iii) **forutsetningssjekk før teorem** (Banach uten kompletthet / Ascoli uten ekvikontinuitet straffes); (iv) **navngi teoremet**; (v) **moteksempel krever verifikasjon**; (vi) **«Alternatively»** — begge løsningsveier premieres. Prioritet: **perfekt** (håndverket bærer hver karakter).
- **Innholdskontrakt:** **Bevissjangrene** «vis at» / «moteksempel» / «beregn med begrunnelse» / «definer», hver med hva som gir uttelling. **Malbiblioteket** som referanse (uten fullt bevis her — det kommer i temakapitlene): metrikk-/norm-aksiomlisten (i)–(iii), Fréchet-firetrinnet (retningsderivert → linearitet → begrensethet → $\sigma(r)/\lVert r\rVert\to 0$), operatornorm-mønsteret (øvre skranke + nedre via testfunksjon), kompletthetsmalen (lukket underrom av komplett rom / konkret Cauchy-moteksempel), kompakthetsmalen (følgekompakthet; Heine–Borel i $\mathbb R^n$; Arzelà–Ascoli i $C(K)$), kontraksjonsmalen (Lipschitz-konstant $<1$ + kompletthet). **Forutsetnings-sjekklisten** (hvilket teorem krever hva). **Moteksempel-oppskriften**: konstruer → verifiser at kravet brytes/oppfylles → konkluder (typiske: $(0,1]$ ikke komplett; enhetskula i uendeligdimensjon ikke kompakt; punktvis grense som bryter en egenskap uniform grense bevarer). **ε–δ-disiplinen**: riktig kvantorrekkefølge, uniformitet (ett $N/\delta$ for hele mengden), negasjon av definisjoner. **Teoremnavn-banken** (alle navngitte resultater studenten må kunne påberope). 8–12 korte bevishåndverk-oppgaver: identifiser malen for en gitt oppgavetekst, pek på det manglende leddet i et ufullstendig bevis, skriv negasjonen av en definisjon, avgjør hvilken forutsetning som mangler.
- **Oppgavesjangre:** Meta (A–O). Mønstereksempel: «Følgende ‘bevis’ for at $F$ er Fréchet-deriverbar stopper etter at retningsderiverten er regnet. Hvilke to malledd mangler, og hvorfor holder ikke argumentet uten dem?» og «Skriv negasjonen av ‘$f$ er uniformt kontinuerlig på $M$’ med korrekt kvantorrekkefølge.»
- **Typiske feil:** Hele bevisfeil-katalogen i miniatyr: hoppe over malledd (begrensethet/ekvikontinuitet), påberope teorem uten forutsetningssjekk, oppgi moteksempel uten verifikasjon, bytte kvantorrekkefølge, la $\delta$ avhenge av $x$ der uniformitet kreves, glemme å navngi teoremet.
- **Quiz: 16 · Flashcards: 30** (bevismaler, teoremnavn-bank, forutsetnings-sjekkliste, sjangerkatalog — flashcard-gull for et bevisfag)

**Prøve-kvote Del 0:** ingen (metakapitler).

---

### Del 1 — Metriske rom, topologi, kompletthet og kompakthet *(prioritet: PERFEKT — grunnmuren, ~58 %, bredt ~10/12)*

#### Kapittel 1.1: Metriske rom og metrikk-aksiomene

- **id:** `mat2400-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-0-2`
- **kapitteltype:** teori
- **description:** Metrikk-aksiomene (i)–(iii) og verifikasjonshåndverket — det nest mest gjentatte enkeltbeviset i arkivet — på konkrete rom: max-metrikk, sum-metrikk, indusert metrikk d(f,g)=‖f−g‖, ℓ¹/ℓᵖ og diskret metrikk.
- **Forkunnskaper (kryssbok):** Kap. 0.2 (aksiomlisten). Grenser og reelle følger fra kalkulus *(MAT1100 — forgjengerbok, ikke bygget ennå; aktiver `/bok/mat1100/<id>`-lenke når den finnes)*. [Følger og grenseverdi](/bok/r2/r2-1-1) (VGS-følgebegrepet — verifiser lenke i byggefasen).
- **Eksamensbelegg:** Sjanger A/L, **~8/12 som verifikasjonssjanger**, ofte en tidlig deloppgave. Fasitens faste grep: sjekk **alle tre** aksiomene eksplisitt, gjør (i)–(ii) kort og fokuser på **trekantulikheten** (den eneste ikke-trivielle). Konkrete rom fra arkivet: sup-norm-metrikk på $C[a,b]$, $d=\max\{d_1,d_2\}$, $d_1+d_2$, $\ell^1$/$\ell^p$, $\sum\lvert f(m)\rvert$ på endelig-støtte-følger. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Metrikk-definisjonen** og aksiomene $(i)$ $d(x,y)\ge 0$, $=0\Leftrightarrow x=y$, $(ii)$ $d(x,y)=d(y,x)$, $(iii)$ $d(x,z)\le d(x,y)+d(y,z)$; **åpne/lukkede kuler** $B(a;r)$; **indusert metrikk** fra en norm $d(x,y)=\lVert x-y\rVert$; konkrete metrikker (euklidsk, diskret, max/sum av metrikker, $\ell^p$, sup-metrikk på funksjoner); underrom-metrikk; **produktmetrikk**. Utledning som kreves aktivt: **verifiser trekantulikheten** for en gitt (evt. sammensatt) metrikk. Bruk av Minkowski/Cauchy–Schwarz til $\ell^p$-trekantulikheten nevnes (fullt bevis i 4.1/4.4).
- **Oppgavesjangre:** A. Mønstereksempel: «La $d_1,d_2$ være metrikker på $X$. Vis at $d(x,y)=\max\{d_1(x,y),d_2(x,y)\}$ er en metrikk på $X$.» (varier: $d_1+d_2$, $\tfrac{d}{1+d}$, $\sum 2^{-n}\tfrac{d_n}{1+d_n}$).
- **Typiske feil:** Hoppe over trekantulikheten (den eneste som gir poeng) eller definitthets-retningen ($d(x,y)=0\Rightarrow x=y$); anta symmetri uten å nevne den; glemme å sjekke at en «kandidat-metrikk» faktisk er endelig/ikke-negativ; blande metrikk og norm.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 1.2: Topologi i metriske rom: åpen/lukket, tillukning, rand og opphopning

- **id:** `mat2400-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-1`
- **kapitteltype:** teori
- **description:** Metrisk topologi via følger: åpne/lukkede mengder, indre/rand/tillukning, opphopningspunkt, og følgekarakteriseringen x∈Ā ⇔ ∃ følge fra A mot x — pluss kontinuitet i metriske rom (grunnlaget for ekstremverdisetningen i 1.4).
- **Forkunnskaper (kryssbok):** Kap. 1.1. Grenser og kontinuitet fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger L, **~58 % (bredt tolket ~10/12 med kompletthet/kompakthet)**. Fasitens grep: karakteriser tillukning/opphopning **via følger** (elegant og eksamensvennlig); vis åpen/lukket ved komplement eller ved kule-argument. Kontinuitet: $\varepsilon$–$\delta$, følgekarakterisering ($x_n\to x\Rightarrow f(x_n)\to f(x)$) og åpen-mengde-karakterisering. Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** **Åpen mengde** (hvert punkt har en kule inni), **lukket mengde** (komplementet åpent / lukket under grenser); **indre** $A^\circ$, **rand** $\partial A$, **tillukning** $\bar A$; **følgekarakteriseringen** $x\in\bar A\Leftrightarrow\exists\,(a_n)\subseteq A,\ a_n\to x$; **opphopningspunkt** ($\exists$ følge av *forskjellige* punkter fra $A$ mot $x$) og isolert punkt; egenskaper ($\overline{A\cup B}=\bar A\cup\bar B$; vilkårlig union av åpne er åpen, endelig snitt av åpne er åpen); tetthet ($\bar A=X$); **kontinuitet i metriske rom**: $\varepsilon$–$\delta$-definisjon, **følgekarakterisering**, og «$f$ kontinuerlig $\Leftrightarrow f^{-1}(\text{åpen})$ åpen». Utledning aktivt: tillukning via følger, at en gitt mengde er åpen/lukket. Kort merknad om **sammenhengende rom** (connectedness) — per emnebeskrivelsen, lav arkivfrekvens («bør kjenne til»).
- **Oppgavesjangre:** L (+ M-forberedelse). Mønstereksempel: «Vis at $\bar A$ er den minste lukkede mengden som inneholder $A$, og at $x\in\bar A$ hvis og bare hvis det finnes en følge i $A$ som konvergerer mot $x$.»
- **Typiske feil:** Forveksle rand og tillukning; bruke $\le$ vs. $<$ galt i kule-definisjonen; tro at endelig snitt kan byttes med vilkårlig snitt for åpne mengder; blande opphopningspunkt (forskjellige punkter) og «punkt i tillukningen»; kontinuitet «bevist» punktvis der uniformitet trengs (bro til 3.1).
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 1.3: Kompletthet og Cauchy-følger

- **id:** `mat2400-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-2`
- **kapitteltype:** teori
- **description:** Cauchy-følger og kompletthet: vis at et rom er komplett (Cauchy ⇒ konvergent) eller konstruer en konkret Cauchy-følge uten grense — med de faste teknikkene (lukket underrom av komplett rom, isometri bevarer kompletthet) og den klassiske fellen kompletthet ≠ lukkethet.
- **Forkunnskaper (kryssbok):** Kap. 1.1–1.2. Kompletthet av $\mathbb R$ (sup-aksiomet) fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger G, **5/12** som eget bevistema. Fasitens grep: for **komplett** — vis Cauchy ⇒ konvergent, ofte via at rommet er et **lukket underrom av et kjent komplett rom** eller via **punktvis grense + uniform kontroll**; for **ikke komplett** — oppgi en **konkret Cauchy-følge** hvis grense faller utenfor rommet, og verifiser. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Cauchy-følge** ($\forall\varepsilon\,\exists N:\,m,n\ge N\Rightarrow d(x_m,x_n)<\varepsilon$); konvergent ⇒ Cauchy (alltid), Cauchy ⇒ konvergent (kun i komplette rom); **komplett rom / Banachrom**; **$\mathbb R^n$ og $C[a,b]$ (sup-norm) er komplette**; **lukket underrom av komplett rom er komplett**; **isometri bevarer kompletthet**; **kompletthet ≠ lukkethet** (et rom er «lukket i seg selv» men kan mangle grenser); klassiske moteksempler: endelig-støtte-følger $c_{00}$ og $C_c(\mathbb R)$/$C_K(\mathbb R)$ er **ikke** komplette i sup-/$\ell^1$-normen, $(0,1]$ er ikke komplett; fullstendiggjøring (completion) nevnes (kjenne). Utledning aktivt: begge retninger (komplett + moteksempel).
- **Oppgavesjangre:** G + M. Mønstereksempel: «Vis at rommet av følger med endelig støtte, med sup-normen, ikke er komplett, ved å konstruere en Cauchy-følge hvis grense ikke har endelig støtte.»
- **Typiske feil:** **Kompletthet forvekslet med lukkethet**; påstå kompletthet uten å vise at grensen ligger *i rommet*; oppgi en Cauchy-følge uten å verifisere at grensen faller utenfor; bruke at en delfølge konvergerer uten å koble til hele følgen; glemme at $C[a,b]$ er komplett i sup-norm men **ikke** i $L^1$-norm.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.4: Kompakthet: følgekompakthet, Heine–Borel og ekstremverdisetningen

- **id:** `mat2400-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-3`
- **kapitteltype:** teori
- **description:** Kompakthet via følgekompakthet og åpne overdekninger, Heine–Borel (kompakt ⇔ lukket+begrenset i ℝⁿ) og arbeidshesten i eksistensbevis: ekstremverdisetningen (kontinuerlig på kompakt oppnår min/maks) — med advarselen om at «lukket+begrenset ⇒ kompakt» kun gjelder i endelig dimensjon.
- **Forkunnskaper (kryssbok):** Kap. 1.2–1.3. Bolzano–Weierstrass for reelle følger *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger H, **~5/12** (tungt i konte). Fasitens grep: i $\mathbb R^n$ bruk **Heine–Borel**; generelt bruk **følgekompakthet** (hver følge har konvergent delfølge med grense i mengden); **ekstremverdisetningen** brukes konstant i eksistensbevis (nærmeste punkt, $\operatorname{dist}(x,E)$ oppnås). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Følgekompakthet** (hver følge har en delfølge som konvergerer i mengden); **åpen-overdekning-definisjonen** (hver åpen overdekning har endelig deloverdekning) og at de to er ekvivalente i metriske rom; **Heine–Borel** ($K\subseteq\mathbb R^n$ kompakt $\Leftrightarrow$ lukket + begrenset); **kompakt ⇒ lukket + begrenset** (alltid), men **omvendt kun i $\mathbb R^n$** (dokumentert felle — bro til 3.2/4.3); **kontinuerlig bilde av kompakt er kompakt**; **ekstremverdisetningen** (kontinuerlig reell funksjon på kompakt oppnår min og maks) og standardanvendelser (nærmeste punkt i en lukket mengde, avstand $\operatorname{dist}(x,E)$ oppnås, totalt begrenset). Utledning aktivt: ekstremverdisetningen via følgekompakthet; eksistensbevis med minimerende følge (og **Alternatively** via ekstremverdisetningen direkte).
- **Oppgavesjangre:** H + M. Mønstereksempel: «La $K$ være en kompakt delmengde av et metrisk rom og $x_0$ et punkt. Vis at det finnes et punkt i $K$ nærmest $x_0$, dvs. at $\operatorname{dist}(x_0,K)$ oppnås.»
- **Typiske feil:** **«Lukket + begrenset ⇒ kompakt» i uendelig dimensjon** (gjelder kun $\mathbb R^n$ — enhetskula i et funksjonsrom er lukket+begrenset men ikke kompakt); påberope ekstremverdisetningen uten å sjekke kompakthet + kontinuitet; forveksle følgekompakthet og overdekningskompakthet uten å nevne ekvivalensen; glemme at grensen for delfølgen må ligge *i* mengden.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.5: Drill: metrikk-verifikasjon, kompletthet og kompakthet-moteksempler

- **id:** `mat2400-1-5` · **number:** 1.5 · **estimatedMinutes:** 85 · **prerequisites:** `mat2400-1-4`
- **kapitteltype:** drill
- **description:** Grunnmurens tre sjangre drillet til automatikk: verifiser en (sammensatt) metrikk med alle aksiomer, avgjør kompletthet med konkret Cauchy-moteksempel, og bruk ekstremverdisetning/Heine–Borel i eksistensbevis — med moteksempel-verifikasjon hele veien.
- **Eksamensbelegg:** Dekker sjanger A + G + H + L + M samlet (~58 %, grunnmuren). Variantkatalogen: metrikk-verifikasjon (max/sum/$\ell^p$/$\tfrac{d}{1+d}$), tillukning/rand via følger, komplett/ikke-komplett med moteksempelfølge, kompakt eksistensargument (nærmeste punkt/dist), «lukket+begrenset men ikke kompakt» i uendelig dimensjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift per sjanger: (A) list (i)–(iii), gjør trekantulikheten grundig; (G) komplett → Cauchy⇒konvergent via lukket underrom/uniform kontroll; ikke komplett → konstruer Cauchy-følge + vis grense utenfor; (H) eksistens → minimerende følge ELLER ekstremverdisetning, sjekk kompakthet + kontinuitet; (M) moteksempel → konstruer + verifiser + konkluder. Gjennomregnet «grunnmur-case» (et konkret funksjons-/følgerom der man i tur verifiserer metrikken, avgjør kompletthet og gir et «lukket+begrenset men ikke kompakt»-moteksempel) med sensor-margnotater om hvor poengene sitter (trekantulikheten, grensen utenfor rommet, ekvikontinuitets-mangelen). 10–14 bevisoppgaver på eksamensnivå: minst én metrikk-verifikasjon, én kompletthet med moteksempel, én kompakt eksistens, én topologi-via-følger.
- **Oppgavesjangre:** A + G + H + L + M. Mønstereksempel: «(a) Vis at $d(x,y)=\sum_n 2^{-n}\tfrac{\lvert x_n-y_n\rvert}{1+\lvert x_n-y_n\rvert}$ er en metrikk. (b) Er rommet komplett? (c) Gi en lukket, begrenset mengde som ikke er kompakt.»
- **Typiske feil:** Hele grunnmur-fellekatalogen under tidspress: trekantulikhet hoppet over, kompletthet forvekslet med lukkethet, moteksempel uten verifikasjon, «lukket+begrenset ⇒ kompakt» i uendelig dimensjon, ekstremverdisetning uten kompakthetssjekk.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Følger, funksjonsfølger og uniform konvergens *(prioritet: KUNNE — uniform vs. punktvis 42 %)*

#### Kapittel 2.1: Punktvis og uniform konvergens av funksjonsfølger

- **id:** `mat2400-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-3`
- **kapitteltype:** teori
- **description:** Skillet punktvis vs. uniform konvergens og våpenet som avgjør de fleste oppgaver: uniform grense av kontinuerlige er kontinuerlig — så en diskontinuerlig punktvis grense utelukker uniform konvergens.
- **Forkunnskaper (kryssbok):** Kap. 1.2–1.3 (kontinuitet, kompletthet). Rekker og grenser fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*. [Rekker](/bok/r2/r2-2-1) (VGS-rekkebegrepet — verifiser lenke).
- **Eksamensbelegg:** Sjanger J, **42 %** (2011, 2013, 2014 + tungt i 2004–2009). Fasitens grep: finn **punktvis grense** $f(x)=\lim f_n(x)$; avgjør uniform konvergens ved $\sup_x\lvert f_n(x)-f(x)\rvert\to 0$, eller **utelukk** den fordi den punktvise grensen er diskontinuerlig. Prioritet: **kunne** (nivå 2 punkt 8).
- **Innholdskontrakt:** **Punktvis konvergens** ($f_n(x)\to f(x)$ for hver $x$) vs. **uniform konvergens** ($\sup_x\lvert f_n(x)-f(x)\rvert\to 0$, ett $N$ for alle $x$); **uniform grense av kontinuerlige er kontinuerlig** (hovedverktøyet, navngis); uniform konvergens ⇒ punktvis (ikke omvendt); at $\sup$-normen $\lVert f_n-f\rVert_\infty\to 0$ **er** uniform konvergens (bro til 4.1); ledd-for-ledd grenseombytting $\lim\int f_n=\int\lim f_n$ under uniform konvergens (bro til 2.2). Klassiske følger fra arkivet: $\arctan(x^{2n})$, $nxe^{-nx^2}$, $n^2x^2e^{-nx}$, $\cos^n x$ — analyser punktvis grense + uniformitet. Utledning aktivt: punktvis grense + uniformitetsavgjørelse med $\sup$-estimat.
- **Oppgavesjangre:** J + M. Mønstereksempel: «La $f_n(x)=\arctan(x^{2n})$ på $\mathbb R$. Finn den punktvise grensen og avgjør om konvergensen er uniform. Begrunn ved hjelp av kontinuitet.»
- **Typiske feil:** **Uniform konvergens «bevist» punktvis**; motsatt: ikke utnytte at en diskontinuerlig punktvis grense utelukker uniform konvergens; regne $\sup_x\lvert f_n-f\rvert$ feil (glemme å finne maksimum ved derivasjon); tro at punktvis grense av kontinuerlige alltid er kontinuerlig.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: Weierstrass' M-test og ledd-for-ledd integrasjon/derivasjon

- **id:** `mat2400-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2400-2-1`
- **kapitteltype:** teori
- **description:** Weierstrass' M-test for uniform konvergens av rekker, og reglene for ledd-for-ledd integrasjon og derivasjon — med den kritiske forutsetningen at det er den integrerte/deriverte rekka som må konvergere uniformt.
- **Forkunnskaper (kryssbok):** Kap. 2.1. Konvergenskriterier for rekker fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger J/F, del av de 42 % + inn i Fourier (Del 6). Fasitens grep: **M-test** — finn $M_n\ge\sup_x\lvert u_n(x)\rvert$ med $\sum M_n<\infty$; for **ledd-for-ledd derivasjon** velg et delintervall der den *deriverte* rekka konvergerer uniformt (2016-1b velger $[a,\infty)$). Prioritet: **kunne**.
- **Innholdskontrakt:** **Weierstrass' M-test** (navngis): $\sup_x\lvert u_n(x)\rvert\le M_n$ og $\sum M_n<\infty$ ⇒ $\sum u_n$ konvergerer uniformt (og absolutt); **ledd-for-ledd integrasjon** under uniform konvergens ($\int\sum u_n=\sum\int u_n$); **ledd-for-ledd derivasjon** — krever at **den deriverte rekka** $\sum u_n'$ konvergerer uniformt (ikke bare $\sum u_n$), pluss konvergens i ett punkt; **Cauchy-kriteriet for uniform konvergens**. Utledning aktivt: M-test-argument med eksplisitt $M_n$; valg av delintervall for uniform kontroll av den deriverte rekka.
- **Oppgavesjangre:** J/F. Mønstereksempel: «Vis at $\sum_{n\ge 1}\tfrac{\cos(nx)}{n^2}$ konvergerer uniformt på $\mathbb R$, og at $\sum_{n\ge 1}\tfrac{-\sin(nx)}{n}$ konvergerer uniformt på ethvert lukket delintervall som ikke inneholder et multiplum av $2\pi$.»
- **Typiske feil:** **Ledd-for-ledd derivasjon uten uniform konvergens av den deriverte rekka**; glemme å velge delintervall der M-testen gir kontroll; bruke M-test med $M_n$ som ikke summerer; forveksle absolutt og uniform konvergens.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.3: Potensrekker: konvergensradius, analytisitet og ledd-for-ledd derivasjon

- **id:** `mat2400-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `mat2400-2-2`
- **kapitteltype:** teori
- **description:** Potensrekker som kontrollert eksempel på uniform konvergens: konvergensradius via rot-/forholdstest, uniform konvergens på lukkede delintervaller, og ledd-for-ledd derivasjon innenfor konvergensintervallet.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (M-test). Potensrekker fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger J, **~2/12 (17 %, lav)**. Fasitens grep: $R=1/\limsup\lvert a_n\rvert^{1/n}$; uniform konvergens på $[-r,r]$ for $r<R$ (M-test); deriver/integrer ledd for ledd innenfor $R$. Prioritet: **kjenne** (nivå 3 punkt 15).
- **Innholdskontrakt:** **Konvergensradius** $R=1/\limsup_n\lvert a_n\rvert^{1/n}$ (Cauchy–Hadamard) og forholdstesten som spesialtilfelle; absolutt konvergens for $\lvert x\rvert<R$, divergens for $\lvert x\rvert>R$, randen egen analyse; **uniform konvergens på $[-r,r]$, $r<R$** (via M-test) og dermed kontinuitet av sumfunksjonen; **ledd-for-ledd derivasjon/integrasjon** bevarer $R$ og gjelder på $(-R,R)$; analytisitet (kjennskap). Utledning aktivt: konvergensradius + uniform konvergens på kompakt delintervall.
- **Oppgavesjangre:** J. Mønstereksempel: «Bestem konvergensradien til $\sum_n \tfrac{x^n}{n\,2^n}$, vis at rekka konvergerer uniformt på $[-1,1]$, og finn den deriverte rekka og dens konvergensradius.»
- **Typiske feil:** Blande $\limsup$ og $\lim$ i rotformelen; hevde uniform konvergens på hele $(-R,R)$ (kun på lukkede delintervaller $[-r,r]$, $r<R$); glemme randanalysen; tro at ledd-for-ledd derivasjon endrer konvergensradien.
- **Quiz: 12 · Flashcards: 18**

#### Kapittel 2.4: Drill: avgjør uniform konvergens

- **id:** `mat2400-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `mat2400-2-3`
- **kapitteltype:** drill
- **description:** Konvergenssjangeren drillet: finn punktvis grense, avgjør uniformitet med sup-estimat eller kontinuitetsargument, kjør M-test med eksplisitt skranke, og pass på forutsetningen ved ledd-for-ledd derivasjon.
- **Eksamensbelegg:** Dekker sjanger J (~42 %) samlet. Variantkatalogen: punktvis grense + uniformitet ($\arctan(x^{2n})$-typen), M-test med eksplisitt $M_n$, ledd-for-ledd derivasjon med delintervall, «diskontinuerlig grense utelukker uniform», potensrekke-radius + uniform på kompakt. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) finn punktvis grense $f(x)=\lim f_n(x)$ (fast $x$); (2) for uniform: regn $\sup_x\lvert f_n(x)-f(x)\rvert$ (finn maks ved derivasjon) og sjekk $\to 0$, ELLER utelukk via diskontinuerlig grense; (3) for rekker: finn $M_n=\sup_x\lvert u_n(x)\rvert$, sjekk $\sum M_n<\infty$; (4) for derivasjon: sjekk uniform konvergens av $\sum u_n'$ på riktig delintervall; (5) navngi verktøyet (M-test / «uniform grense av kontinuerlige»). Gjennomregnet case (en funksjonsfølge med diskontinuerlig punktvis grense der uniformitet utelukkes, + en rekke der M-testen gir uniform konvergens) med sensor-margnotater. 10–14 oppgaver på eksamensnivå.
- **Oppgavesjangre:** J. Mønstereksempel: «(a) La $f_n(x)=nxe^{-nx^2}$ på $[0,1]$. Finn punktvis grense og avgjør uniformitet. (b) Konvergerer $\int_0^1 f_n$ mot $\int_0^1\lim f_n$? Forklar.»
- **Typiske feil:** Hele konvergens-fellekatalogen under tidspress: sup-maks regnet feil, uniform «vist» punktvis, ledd-for-ledd derivasjon uten forutsetning, grenseombytting $\lim\int=\int\lim$ uten uniform konvergens.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Kontinuitet, uniform kontinuitet og kompakthet i funksjonsrom *(prioritet: KUNNE/PERFEKT — uniform kontinuitet 50 %, Arzelà–Ascoli stigende i konte)*

#### Kapittel 3.1: Kontinuitet og uniform kontinuitet

- **id:** `mat2400-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-4`
- **kapitteltype:** teori
- **description:** Kontinuitetsmodiene: kontinuerlig, uniformt kontinuerlig og Lipschitz — med definisjon, negasjon (følgekarakterisering) og de to nøkkelresultatene: kontinuerlig på kompakt ⇒ uniformt kontinuerlig, og Lipschitz ⇒ uniformt kontinuerlig.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (kontinuitet), 1.4 (kompakthet). Grenser fra kalkulus *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger N, **50 % (6/12), stabil**. Fasitens grep: uniform kontinuitet krever **ett $\delta$ for hele mengden** ($\delta=\delta(\varepsilon)$, ikke $\delta(\varepsilon,x)$); vis uniform via Lipschitz ELLER via kontinuerlig-på-kompakt; **motbevis** uniform kontinuitet via to følger $x_n,y_n$ med $d(x_n,y_n)\to 0$ men $\lvert f(x_n)-f(y_n)\rvert\not\to 0$. Prioritet: **perfekt/kunne** (nivå 2 punkt 9).
- **Innholdskontrakt:** **Kontinuitet** (punktvis $\varepsilon$–$\delta$, $\delta$ kan avhenge av punktet); **uniform kontinuitet** ($\forall\varepsilon\,\exists\delta\,\forall x,y:\,d(x,y)<\delta\Rightarrow d(f(x),f(y))<\varepsilon$ — **ett $\delta$ for alle**); **negasjonen** (følgekarakterisering: $\exists\varepsilon_0,\ x_n,y_n$ med $d(x_n,y_n)\to 0$, $d(f(x_n),f(y_n))\ge\varepsilon_0$); **Lipschitz-kontinuitet** ($d(f(x),f(y))\le K\,d(x,y)$) ⇒ uniformt kontinuerlig; **kontinuerlig på kompakt ⇒ uniformt kontinuerlig** (navngis, bevises via følgekompakthet); eksempler ($x^2$ ikke uniformt kontinuerlig på $\mathbb R$, $\sqrt x$ uniformt kontinuerlig men ikke Lipschitz på $[0,\infty)$). Utledning aktivt: uniform kontinuitet fra Lipschitz/kompakt; **motbevis** via følgepar.
- **Oppgavesjangre:** N + M. Mønstereksempel: «Vis at $f(x)=x^2$ ikke er uniformt kontinuerlig på $\mathbb R$, men er uniformt kontinuerlig på ethvert lukket, begrenset intervall.»
- **Typiske feil:** **$\delta$ som avhenger av $x$ der uniformitet kreves**; motbevis uten eksplisitt følgepar; bruke «kontinuerlig på kompakt» uten å sjekke kompakthet; forveksle Lipschitz og uniform kontinuitet (Lipschitz ⇒ uniform, ikke omvendt); kvantorrekkefølge byttet.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 3.2: Ekvikontinuitet, Arzelà–Ascoli og Weierstrass' approksimasjonsteorem

- **id:** `mat2400-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-3-1`
- **kapitteltype:** teori
- **description:** Kompakthet i funksjonsrom: ekvikontinuitet som det tredje kravet i Arzelà–Ascoli (kompakt i C(K) ⇔ lukket + begrenset + ekvikontinuerlig), poenget med hvorfor enhetskula ikke er kompakt i uendelig dimensjon, og Weierstrass' approksimasjonsteorem som signaturbevis.
- **Forkunnskaper (kryssbok):** Kap. 3.1 (uniform kontinuitet), 1.4 (kompakthet), 2.1 (uniform konvergens).
- **Eksamensbelegg:** Sjanger H, **~3/12 (25 %), stigende i konte**; Weierstrass-approksimasjon 17 % (signaturbevis). Fasitens grep: **Arzelà–Ascoli** — sjekk **alle tre** kravene, med ekvikontinuitet som det avgjørende; **enhetskula i uendelig dimensjon** er lukket+begrenset men ikke kompakt (moteksempel via en følge uten uniformt konvergent delfølge). Prioritet: **kunne** (Arzelà–Ascoli), **kjenne** (Weierstrass-approksimasjon).
- **Innholdskontrakt:** **Ekvikontinuitet** (ett $\delta$ som virker for **alle** funksjoner i familien samtidig); **Arzelà–Ascoli** (navngis): en delmengde av $C(K)$ ($K$ kompakt) har kompakt tillukning $\Leftrightarrow$ **punktvis begrenset + ekvikontinuerlig**; kompakt $\Leftrightarrow$ lukket + begrenset + ekvikontinuerlig; **enhetskula i et uendeligdimensjonalt normert rom er ikke kompakt** (bro til 4.3, dokumentert felle); **totalt begrenset** og forbindelsen til kompletthet+kompakthet; **Weierstrass' approksimasjonsteorem** (navngis): polynomer er tette i $C[a,b]$ — signaturbeviset («en kontinuerlig funksjon som er $0$ på alle polynomer er $0$»), skisse via Bernstein-polynomer/konvolusjon (markér hva som skisseres). Utledning aktivt: Arzelà–Ascoli-anvendelse (sjekk de tre kravene på en konkret familie); moteksempel med ikke-kompakt enhetskule.
- **Oppgavesjangre:** H + M. Mønstereksempel: «La $\mathcal F=\{f\in C[0,1]:\ \lvert f(x)\rvert\le 1,\ \lvert f(x)-f(y)\rvert\le\lvert x-y\rvert\}$. Vis at $\mathcal F$ har kompakt tillukning i $C[0,1]$ ved Arzelà–Ascoli.»
- **Typiske feil:** **Arzelà–Ascoli uten ekvikontinuitet** (den dyreste — de to andre kravene er «lette»); forveksle punktvis kontinuitet for hver $f$ med ekvikontinuitet (uniform over familien); påstå enhetskula kompakt i uendelig dimensjon; bruke Weierstrass-approksimasjon uten å nevne at $[a,b]$ må være kompakt.
- **Quiz: 16 · Flashcards: 26**

#### Kapittel 3.3: Drill: uniform kontinuitet og kompakthet i funksjonsrom

- **id:** `mat2400-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `mat2400-3-2`
- **kapitteltype:** drill
- **description:** Kontinuitetssjangrene drillet: bevis/motbevis uniform kontinuitet med følgepar, verifiser Arzelà–Ascolis tre krav på en gitt familie, og konstruer «lukket+begrenset men ikke kompakt»-moteksempler.
- **Eksamensbelegg:** Dekker sjanger N (~50 %) + H (Arzelà–Ascoli, stigende i konte). Variantkatalogen: uniform kontinuitet via Lipschitz/kompakt, motbevis via følgepar, Arzelà–Ascoli-verifikasjon, enhetskule-moteksempel, Weierstrass-approksimasjon (signaturbevis). Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: (N) uniform kontinuitet → Lipschitz-konstant ELLER kontinuerlig-på-kompakt; motbevis → konstruer $x_n,y_n$ med $d(x_n,y_n)\to 0$, $\lvert f(x_n)-f(y_n)\rvert\ge\varepsilon_0$; (H) Arzelà–Ascoli → sjekk (a) begrenset, (b) ekvikontinuerlig (det avgjørende), (c) lukket; moteksempel → følge i enhetskula uten uniformt konvergent delfølge. Gjennomregnet case (en familie der Arzelà–Ascoli avgjøres + en uniform-kontinuitet-motbevis) med sensor-margnotater om at ekvikontinuiteten/følgeparet er der poengene sitter. 10–14 bevisoppgaver på eksamensnivå.
- **Oppgavesjangre:** N + H + M. Mønstereksempel: «(a) Er $f(x)=\sin(x^2)$ uniformt kontinuerlig på $\mathbb R$? Bevis eller motbevis. (b) Vis at enhetskula i $C[0,1]$ (sup-norm) ikke er kompakt.»
- **Typiske feil:** Hele kontinuitets-fellekatalogen under tidspress: $\delta(x)$ i stedet for $\delta(\varepsilon)$, motbevis uten følgepar, Arzelà–Ascoli uten ekvikontinuitetssjekk, enhetskule antatt kompakt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Normerte rom, operatornorm og Hilbertrom *(prioritet: PERFEKT — ryggraden, 67 %)*

#### Kapittel 4.1: Normerte rom og norm-aksiomene

- **id:** `mat2400-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-3`
- **kapitteltype:** teori
- **description:** Norm-aksiomene (i)–(iii) og verifikasjonshåndverket — det mest gjentatte enkeltbeviset i hele arkivet — på ℓᵖ, sup-norm, L¹ og operatorindusert norm ‖x‖_A=‖Ax‖, med den induserte metrikken d(x,y)=‖x−y‖ som bro til Del 1.
- **Forkunnskaper (kryssbok):** Kap. 1.1 (metrikk), 1.3 (kompletthet). Vektorrom og lineær algebra *(MAT1110 — forgjengerbok, ikke bygget ennå; aktiver `/bok/mat1110/<id>`-lenke når den finnes)*. [Vektorer i planet](/bok/r1/r1-6-1) (VGS-vektorregning — verifiser lenke).
- **Eksamensbelegg:** Sjanger A, **8/12 (67 %) — det mest gjentatte enkeltbeviset**. Fasitens grep: sjekk **alle tre** norm-aksiomene, gjør (i)–(ii) kort og fokuser på **trekantulikheten** (Minkowski for $\ell^p$; delvis integrasjon/Cauchy–Schwarz for $L^2$). Konkrete rom fra arkivet: sup-norm på $C[a,b]$, $\ell^1$/$\ell^p$-normer, $\lVert x\rVert_A=\lVert Ax\rVert$, $\sum\lvert f(m)\rvert$ på endelig-støtte-følger. Prioritet: **perfekt** (nivå 1 punkt 2).
- **Innholdskontrakt:** **Norm-definisjonen** og aksiomene $(i)$ $\lVert u\rVert\ge 0$, $=0\Leftrightarrow u=0$ (definitthet), $(ii)$ $\lVert\alpha u\rVert=\lvert\alpha\rvert\lVert u\rVert$ (homogenitet), $(iii)$ $\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert$ (trekantulikhet); **norm induserer metrikk** $d(x,y)=\lVert x-y\rVert$; konkrete normer ($\lVert\cdot\rVert_\infty$ sup, $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_p$, $\lVert\cdot\rVert_A=\lVert Ax\rVert$ når $A$ injektiv); **Hölder** og **Minkowski** som verktøy for $\ell^p$-trekantulikheten (Minkowski bevises/skisseres); funksjonsrom $C[a,b]$, $C_b$, $C_c/C_K$, $\ell^1$, $\ell^p$ og deres normer; **Banachrom** (komplett normert rom); at $C[a,b]$ er Banach i sup-norm men ikke i $L^1$-norm (bro til 1.3). Utledning aktivt: **verifiser en norm** (spesielt trekantulikheten via Minkowski/Cauchy–Schwarz); vis at $\lVert\cdot\rVert_A$ er norm.
- **Oppgavesjangre:** A. Mønstereksempel: «La $A$ være en injektiv lineær operator på $\mathbb R^n$. Vis at $\lVert x\rVert_A=\lVert Ax\rVert$ definerer en norm på $\mathbb R^n$.» (varier: $\lVert f\rVert=\sum_m\lvert f(m)\rvert$ på endelig støtte, $\ell^p$-norm.)
- **Typiske feil:** **Ufullstendig verifikasjon** — hoppe over trekantulikheten (den eneste ikke-trivielle) eller definitthets-retningen ($\lVert u\rVert=0\Rightarrow u=0$, som krever injektivitet i $\lVert\cdot\rVert_A$); glemme å bruke Minkowski for $\ell^p$; blande norm og metrikk; anta homogenitet uten å nevne den.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 4.2: Begrensede lineære operatorer og operatornorm

- **id:** `mat2400-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-4-1`
- **kapitteltype:** teori
- **description:** Begrensede lineære operatorer og operatornormen ‖L‖=sup_{‖f‖≤1}‖Lf‖: vis linearitet + begrensethet for øvre skranke, og bruk en konkret nesten-optimal testfunksjon for den nedre — pluss varianten «vis at en invers operator er ubegrenset».
- **Forkunnskaper (kryssbok):** Kap. 4.1 (norm). Lineære avbildninger *(MAT1110 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger D, **~5/12**. Fasitens grep: **begrensethet** $\lVert Lf\rVert\le C\lVert f\rVert$ gir $\lVert L\rVert\le C$; for **eksakt** $\lVert L\rVert=C$ vis begge ulikheter, der den nedre krever en **konkret testfunksjon** med $\lVert f\rVert=1$ (fasit 2010: lineær hattefunksjon). Variant: **ubegrenset invers** via en følge $\lVert g_n\rVert$ fast men $\lVert L^{-1}g_n\rVert\to\infty$. Prioritet: **kunne** (nivå 2 punkt 7), operatornormen som argumentbærer **perfekt**.
- **Innholdskontrakt:** **Begrenset lineær operator** ($L$ lineær + $\exists C:\,\lVert Lf\rVert\le C\lVert f\rVert$); **kontinuerlig $\Leftrightarrow$ begrenset** for lineære operatorer; **operatornorm** $\lVert L\rVert=\sup_{\lVert f\rVert\le 1}\lVert Lf\rVert=\sup_{f\ne 0}\tfrac{\lVert Lf\rVert}{\lVert f\rVert}$, og grunnulikheten $\lVert Lf\rVert\le\lVert L\rVert\,\lVert f\rVert$; **beregning av $\lVert L\rVert$** to veier (øvre skranke fra estimat + nedre fra testfunksjon); rommet $B(X,Y)$ av begrensede operatorer er normert (Banach når $Y$ Banach); **ubegrenset operator** (typisk derivasjonsoperatoren, eller en ubegrenset invers). Utledning aktivt: linearitet + begrensethet; eksakt operatornorm med testfunksjon; ubegrensethet via følge.
- **Oppgavesjangre:** D. Mønstereksempel: «La $L:C[0,1]\to\mathbb R$ være $L(f)=\int_0^1 t\,f(t)\,dt$. Vis at $L$ er en begrenset lineær funksjonal og finn $\lVert L\rVert$ eksakt.»
- **Typiske feil:** **Operatornorm kun én vei** (vise $\lVert L\rVert\le C$ men glemme den nedre skranken med testfunksjon, eller motsatt); testfunksjon uten $\lVert f\rVert=1$; blande begrensethet av operatoren med begrensethet av funksjonen; anta at alle lineære operatorer er begrenset (falskt i uendelig dimensjon).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 4.3: Normekvivalens og endeligdimensjonale rom

- **id:** `mat2400-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `mat2400-4-2`
- **kapitteltype:** teori
- **description:** Normekvivalens (c‖x‖ ≤ ‖x‖′ ≤ C‖x‖) og hvordan den styrer konvergens og kontinuitet — pluss det store skillet: alle normer er ekvivalente i endelig dimensjon, ingen slik garanti i uendelig dimensjon.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.2. Kap. 1.4 (kompakthet, Heine–Borel).
- **Eksamensbelegg:** Sjanger A/D-tilstøtende, nivå 2 punkt 13. Fasitens grep: to normer er ekvivalente ⇔ de gir **samme konvergente følger / samme kontinuerlige funksjoner / samme åpne mengder**; i endelig dimensjon er alle normer ekvivalente (bevises via kompakthet av enhetssfæren + ekstremverdisetning). Prioritet: **kunne**.
- **Innholdskontrakt:** **Normekvivalens** $c\lVert x\rVert\le\lVert x\rVert'\le C\lVert x\rVert$; ekvivalente normer gir samme topologi (samme konvergens, kontinuitet, åpne/lukkede mengder, kompletthet); **alle normer på $\mathbb R^n$ (endelig dimensjon) er ekvivalente** (navngis; bevis via enhetssfæren kompakt + kontinuerlig norm oppnår min/maks — ekstremverdisetning); **i uendelig dimensjon er normer ikke nødvendigvis ekvivalente** (sup-norm vs. $L^1$-norm på $C[a,b]$ gir ulik konvergens — moteksempel, bro til 1.3); konsekvens: kompletthet/kontinuitet kan avhenge av normvalget i uendelig dimensjon. Utledning aktivt: at ekvivalente normer gir samme konvergens; endeligdimensjonsbeviset (skisse med kompakthet).
- **Oppgavesjangre:** A/M. Mønstereksempel: «Vis at sup-normen og $L^1$-normen på $C[0,1]$ ikke er ekvivalente, ved å gi en følge som konvergerer i den ene men ikke den andre.»
- **Typiske feil:** Anta at alle normer er ekvivalente også i uendelig dimensjon; vise bare én av ulikhetene $c\lVert x\rVert\le\lVert x\rVert'\le C\lVert x\rVert$; forveksle «samme åpne mengder» med «lik norm»; glemme at endeligdimensjonsargumentet hviler på kompakthet av enhetssfæren.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.4: Indreproduktrom og Hilbertrom

- **id:** `mat2400-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-4-1`
- **kapitteltype:** teori
- **description:** Indreprodukt, Cauchy–Schwarz, ortonormale baser, Bessels ulikhet og Riesz-representasjonsteoremet — Hilbertrom-apparatet som ligger under Fourier-analysen i Del 6.
- **Forkunnskaper (kryssbok):** Kap. 4.1 (norm), 1.3 (kompletthet). [Skalarprodukt](/bok/r1/r1-6-3) (VGS-prikkprodukt — verifiser lenke).
- **Eksamensbelegg:** Sjanger K, **~3/12 (25 %)** (+ 2018-konte). Fasitens grep: **Cauchy–Schwarz** $\lvert\langle u,v\rangle\rvert\le\lVert u\rVert\lVert v\rVert$; ortonormal basis $\{e_n\}$; **Bessels ulikhet** $\sum\lvert\langle u,e_n\rangle\rvert^2\le\lVert u\rVert^2$; Fourier-koeffisienter $\alpha_n=\langle u,e_n\rangle$; **Riesz-representasjon** (kontinuerlig funksjonal $A(x)=\langle x,y\rangle$). Prioritet: **kunne** (nivå 2 punkt 11).
- **Innholdskontrakt:** **Indreprodukt** (aksiomer: lineær/konjugert-lineær, hermitisk symmetri, positiv definitt) og indusert norm $\lVert u\rVert=\sqrt{\langle u,u\rangle}$; **Cauchy–Schwarz** (navngis, bevis via $\lVert u-tv\rVert^2\ge 0$) og trekantulikheten som konsekvens; **ortogonalitet**, Pytagoras, parallellogramloven; **ortonormalt sett/basis** $\{e_n\}$, koeffisienter $\alpha_n=\langle u,e_n\rangle$; **Bessels ulikhet** $\sum\lvert\alpha_n\rvert^2\le\lVert u\rVert^2$ og **Parsevals identitet** (likhet for basis); **ortogonal projeksjon** på lukket underrom (nærmeste punkt); **Hilbertrom** (komplett indreproduktrom); **Riesz-representasjonsteoremet** (navngis: hver kontinuerlig funksjonal er $A(x)=\langle x,y\rangle$); kontinuitet av indreproduktet under grenser. Utledning aktivt: Cauchy–Schwarz; Bessel; Riesz-anvendelse.
- **Oppgavesjangre:** K. Mønstereksempel: «La $\{e_n\}$ være et ortonormalt sett i et indreproduktrom. Vis Bessels ulikhet $\sum_n\lvert\langle u,e_n\rangle\rvert^2\le\lVert u\rVert^2$, og bruk den til å vise at $\langle u,e_n\rangle\to 0$.»
- **Typiske feil:** Cauchy–Schwarz uten $t$-optimering/likhetstilfellet; blande ortonormalt sett og basis (Bessel vs. Parseval); glemme kompletthet i definisjonen av Hilbertrom; Riesz anvendt uten å sjekke kontinuitet av funksjonalen; feil i konjugering for komplekse indreprodukt.
- **Quiz: 18 · Flashcards: 28**

#### Kapittel 4.5: Drill: norm-verifikasjon og operatornorm

- **id:** `mat2400-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `mat2400-4-4`
- **kapitteltype:** drill
- **description:** Ryggradens sjangre drillet til automatikk: verifiser en norm med alle aksiomer (trekantulikhet via Minkowski/Cauchy–Schwarz), regn en eksakt operatornorm med testfunksjon begge veier, og bruk Bessel/Riesz i Hilbertrom.
- **Eksamensbelegg:** Dekker sjanger A (~67 %) + D + K samlet — ryggraden. Variantkatalogen: norm-verifikasjon ($\ell^p$/sup/$\lVert\cdot\rVert_A$), eksakt operatornorm med testfunksjon, ubegrenset invers, Bessel/Fourier-koeffisienter, Riesz-representasjon, normekvivalens. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (A) list (i)–(iii), trekantulikheten via Minkowski/Cauchy–Schwarz; (D) operatornorm → øvre skranke fra estimat + nedre fra testfunksjon $\lVert f\rVert=1$, navngi; ubegrenset → følge $\lVert g_n\rVert$ fast, $\lVert L^{-1}g_n\rVert\to\infty$; (K) Bessel/Riesz → sjekk ortonormalitet/kontinuitet. Gjennomregnet case (verifiser en norm på et funksjonsrom, regn operatornormen til en integraloperator eksakt begge veier) med sensor-margnotater om at trekantulikheten og den nedre testfunksjonen er der poengene sitter. 10–14 bevisoppgaver på eksamensnivå: minst én norm-verifikasjon, én eksakt operatornorm, én Hilbertrom (Bessel/Riesz).
- **Oppgavesjangre:** A + D + K. Mønstereksempel: «(a) Vis at $\lVert f\rVert=\big(\int_0^1\lvert f\rvert^2\big)^{1/2}$ er en norm på $C[0,1]$. (b) La $L(f)=\int_0^1 f$. Finn $\lVert L\rVert$ mht. denne normen.»
- **Typiske feil:** Hele ryggrad-fellekatalogen under tidspress: trekantulikhet hoppet over, operatornorm kun én vei, testfunksjon uten $\lVert f\rVert=1$, Bessel forvekslet med Parseval, normekvivalens antatt i uendelig dimensjon.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Banachs fikspunktteorem og differensiasjon i normerte rom *(prioritet: PERFEKT — den stigende signaturen; Fréchet/invers i alle 5 siste + alle konte)*

#### Kapittel 5.1: Kontraksjoner og Banachs fikspunktteorem

- **id:** `mat2400-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-1-3`
- **kapitteltype:** teori
- **description:** Banachs fikspunktteorem: kontraksjon (Lipschitz-konstant k<1) på et komplett rom har entydig fikspunkt — med den kritiske forutsetningssjekken (kompletthet) og den klassiske anvendelsen Picard-eksistens for ODE.
- **Forkunnskaper (kryssbok):** Kap. 1.3 (kompletthet), 4.2 (operatorer). Differensiallikninger *(MAT1100 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger I, **3/12 (25 %), klassiker** (2015, 2018, 2021 + 2006–2008). Fasitens grep: vis $d(T(x),T(y))\le k\,d(x,y)$ med $k<1$, **sjekk at rommet er komplett**, konkludér entydig fikspunkt; Picard: skriv ODE-en som integralligning $\Rightarrow$ fikspunkt for en integraloperator som er kontraksjon på et lite intervall. 2021-1 straffet **manglende kompletthet**. Prioritet: **kunne** (nivå 2 punkt 10), forutsetningssjekken **perfekt**.
- **Innholdskontrakt:** **Kontraksjon** ($\exists k<1:\,d(T(x),T(y))\le k\,d(x,y)$); **Banachs fikspunktteorem** (navngis): kontraksjon på **ikke-tomt komplett** metrisk rom har **entydig** fikspunkt, og iterasjonen $x_{n+1}=T(x_n)$ konvergerer mot det (med feilestimat $d(x_n,x^*)\le\tfrac{k^n}{1-k}d(x_1,x_0)$); **forutsetningssjekken**: kompletthet er nødvendig ($(0,1]$ med $T(x)=x/2$ har ingen fikspunkt — moteksempel); **Picard–Lindelöf**: ODE $y'=f(t,y)$ omskrevet til integralligning, integraloperatoren er kontraksjon på $C[t_0-h,t_0+h]$ for liten $h$ når $f$ er Lipschitz i $y$ ⇒ entydig lokal løsning. Utledning aktivt: fikspunktteoremet (eksistens via Cauchy-følge, entydighet); kontraksjonsestimatet for en integraloperator (Lipschitz-integrand glatter).
- **Oppgavesjangre:** I + M. Mønstereksempel: «La $T(f)(x)=1+\int_0^x f(t)\,dt$ på $C[0,\tfrac12]$ med sup-norm. Vis at $T$ er en kontraksjon, og at ODE-en $y'=y,\ y(0)=1$ har en entydig løsning på intervallet.»
- **Typiske feil:** **Banach uten kompletthetssjekk** (2021-fellen); kontraksjonskonstant $k\le 1$ i stedet for $k<1$; glemme at rommet må være ikke-tomt/lukket; velge for stort intervall så integraloperatoren ikke er kontraksjon; moteksempel $(0,1]$ oppgitt uten å vise fravær av fikspunkt.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 5.2: Retningsderivert og Fréchet-derivert: firetrinnsmalen

- **id:** `mat2400-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `mat2400-4-2`
- **kapitteltype:** teori
- **description:** Den tydeligste karakterskilleren i faget: Fréchet-deriverbarhet via firetrinnsmalen (retningsderivert → linearitet → begrensethet → restledd σ(r)/‖r‖→0), Gateaux/Fréchet-skillet, og hvorfor retningsderivert alene ikke er nok.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.2 (norm, begrensede operatorer), 4.4 (indreprodukt). Derivasjon og Jacobimatrise *(MAT1110 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger B, **6/12 ordinære + alle 3 konte — den stigende signaturen**, i **hvert av de fem siste ordinære settene**. Fasitens **faste firetrinnsmal** går igjen nesten ordrett år etter år. Kontekster fra arkivet: $F(f)=\int f^3$, $F(x)=x(0)x(1)$, $F(f)=\int e^{-s}x(s)^2$, $F(f)(t)=2f^2-e^{f-t^2}$, $F(a)=(\sin a_i)$ på $\ell^p$, $F(x)=\lVert x\rVert^2$ i indreproduktrom, $F:\mathbb R^2\to\mathbb R^2$ polynomavbildning. Prioritet: **perfekt** (nivå 1 punkt 1).
- **Innholdskontrakt:** **Retningsderivert (Gateaux)** $F'(x;r)=\lim_{t\to 0}\tfrac{F(x+tr)-F(x)}{t}$; **Fréchet-derivert** $F'(x)=A$ (begrenset lineær operator) definert ved $F(x+r)=F(x)+A(r)+\sigma(r)$ med $\lVert\sigma(r)\rVert/\lVert r\rVert\to 0$; **firetrinnsmalen** (bokstandard): $(i)$ gjett $A$ via retningsderiverten; $(ii)$ vis $A$ lineær; $(iii)$ vis $A$ begrenset $\lVert A(r)\rVert\le C\lVert r\rVert$; $(iv)$ vis $\lVert\sigma(r)\rVert/\lVert r\rVert\to 0$ (typisk $\sigma(r)=O(\lVert r\rVert^2)$); **forholdet Gateaux ↔ Fréchet**: Fréchet ⇒ alle retningsderiverte finnes og $F'(x;r)=A(r)$, men **ikke omvendt** (retningsderivert kan finnes uten Fréchet — jf. 2016 der ensidige grenser spriker); **produkt-/kjerneregel** for deriverte (Alternatively-veien); $F'(a)=0$ i indre ekstremalpunkt (kritisk punkt). Utledning aktivt: **hele firetrinnsmalen** på konkrete $F$.
- **Oppgavesjangre:** B. Mønstereksempel: «La $F:C[0,1]\to\mathbb R$ være $F(f)=\int_0^1 f(t)^3\,dt$. Vis at $F$ er Fréchet-deriverbar og finn $F'(f)$, ved å følge alle fire trinn.»
- **Typiske feil:** **Manglende ledd i beviset** — oftest begrensethetssteget $(iii)$ eller restleddsestimatet $(iv)$; **stoppe ved retningsderiverten** og kalle den «den deriverte»; **Gateaux forvekslet med Fréchet** (tro at eksistens av alle retningsderiverte gir Fréchet-deriverbarhet — falskt); ikke vise at $\sigma(r)$ går mot null **fortere** enn $\lVert r\rVert$; glemme å vise linearitet.
- **Quiz: 18 · Flashcards: 30**

#### Kapittel 5.3: Drill: Fréchet-firetrinnet

- **id:** `mat2400-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `mat2400-5-2`
- **kapitteltype:** drill
- **description:** Den dyreste enkeltferdigheten drillet isolert: firetrinnsmalen kjørt til automatikk i alle de dokumenterte kontekstene — funksjonaler, operatorer, ℓᵖ-avbildninger, indreproduktrom og polynomavbildninger ℝ²→ℝ² — med begrensetheten og restleddet alltid vist.
- **Eksamensbelegg:** Dekker sjanger B (~50 %, stigende signatur) samlet — den nesten sikre eksamensoppgaven. Variantkatalogen (arkivet): $F(f)=\int f^3$, $F(x)=x(0)x(1)$, $F(f)=\int e^{-s}x(s)^2$, $F(f)(t)=2f^2-e^{f-t^2}$, $F(a)=(\sin a_i)$ på $\ell^p$, $F(x)=\lVert x\rVert^2$, $F:\mathbb R^2\to\mathbb R^2$ polynom. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (firetrinnsalgoritmen): (1) regn retningsderiverten $F'(x;r)$ og les av kandidaten $A(r)$; (2) vis $A$ lineær i $r$; (3) vis $A$ begrenset ($\lVert A(r)\rVert\le C\lVert r\rVert$ — **aldri hopp over**); (4) skriv restleddet $\sigma(r)=F(x+r)-F(x)-A(r)$ eksplisitt og vis $\lVert\sigma(r)\rVert/\lVert r\rVert\to 0$; (5) konkluder $F'(x)=A$. Gjennomregnet eksamenscase (én funksjonal + én operator, begge fulle fire trinn) med sensor-margnotater om at trinn (iii) og (iv) er der karakteren avgjøres, og en `warning` om Gateaux/Fréchet-fellen. 12–16 oppgaver, alle på eksamensnivå, som spenner over hele variantkatalogen; minst én der retningsderiverten finnes men $F$ **ikke** er Fréchet-deriverbar (motbevis).
- **Oppgavesjangre:** B. Mønstereksempel: «La $F(x)=\lVert x\rVert^2$ i et indreproduktrom $H$. Vis at $F$ er Fréchet-deriverbar med $F'(x)(r)=2\langle x,r\rangle$, og verifiser alle fire trinn.»
- **Typiske feil:** Hele Fréchet-fellekatalogen under tidspress: hoppe over begrensethet/restledd, stoppe ved retningsderiverten, Gateaux forvekslet med Fréchet, restledd ikke vist $O(\lVert r\rVert^2)$, linearitet utelatt.
- **Quiz: 16 · Flashcards: 10**

#### Kapittel 5.4: Invers- og implisitt funksjonsteorem

- **id:** `mat2400-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `mat2400-5-2`
- **kapitteltype:** teori
- **description:** Invers- og implisitt funksjonsteorem: regn Jacobi/derivert, vis at den er inverterbar i punktet, og konkludér med lokal bijeksjon/løsbarhet via teoremet — b)-punktet som Fréchet-oppgaven ofte kobles til.
- **Forkunnskaper (kryssbok):** Kap. 5.2 (Fréchet-derivert), 5.1 (Banach — beviset hviler på fikspunkt). Jacobimatrise og determinant *(MAT1110 — ikke bygget; aktiver lenke når den finnes)*.
- **Eksamensbelegg:** Sjanger C, **~5/12** (2005, 2006, 2007, 2010, 2020-implisitt, 2021, 2021-konte). Fasitens grep: regn **Jacobimatrisen/derivert**, vis **inverterbar i punktet** ($\det\ne 0$ / bijektiv derivert), konkludér med teoremet at det finnes åpne omegner $U,V$ med lokal bijeksjon/løsbarhet, og regn $(F^{-1})'=(F'(a))^{-1}$ eller partiellderivert via Cramer. **Navngi teoremet.** Prioritet: **perfekt** (nivå 1 punkt 4).
- **Innholdskontrakt:** **Invers funksjonsteorem** (navngis): $F$ $C^1$ og $F'(a)$ inverterbar ⇒ $F$ er lokal diffeomorfisme nær $a$ (åpne $U\ni a$, $V\ni F(a)$, bijeksjon), med $(F^{-1})'(F(a))=(F'(a))^{-1}$; **implisitt funksjonsteorem** (navngis): $G(x,y)=0$ med $\partial_y G$ inverterbar i et løsningspunkt ⇒ lokalt $y=y(x)$ glatt, med $y'(x)=-(\partial_y G)^{-1}\partial_x G$; sammenhengen med Banach (bevisidé: fikspunkt); **Jacobimatrise** og inverterbarhet ($\det\ne 0$); kritisk punkt ($F'(a)=0$). Utledning aktivt: sjekk inverterbarhet + påberop teoremet + regn den lokale deriverte (Cramer for ett ledd).
- **Oppgavesjangre:** C. Mønstereksempel: «Systemet $\{x^2+y^2+z^2=3,\ x+y+z=1\}$ har løsningen $(1,1,-1)$. Vis at det finnes et åpent intervall om $z=-1$ og glatte funksjoner $X(z),Y(z)$ slik at $(X(z),Y(z),z)$ løser systemet, og finn $X'(-1)$.»
- **Typiske feil:** **Teorem påberopt uten å sjekke inverterbar Jacobi/derivert i punktet**; glemme å navngi teoremet; feil retning i Cramer/partiellderivert-formelen; hevde global bijeksjon (teoremet er **lokalt**); regne Jacobi feil.
- **Quiz: 16 · Flashcards: 26**

#### Kapittel 5.5: Drill: kontraksjon og invers/implisitt funksjonsteorem

- **id:** `mat2400-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `mat2400-5-4`
- **kapitteltype:** drill
- **description:** Fikspunkt- og teoremanvendelses-sjangrene drillet: kontraksjon med kompletthetssjekk + Picard-ODE, og invers/implisitt funksjonsteorem med Jacobi-inverterbarhet + navngitt konklusjon + lokal derivert.
- **Eksamensbelegg:** Dekker sjanger I (~25 %) + C (~5/12) samlet — ofte b)-punktet til en Fréchet-oppgave. Variantkatalogen: kontraksjon + kompletthet + entydig fikspunkt, Picard-integraloperator, invers funksjonsteorem (lokal diffeomorfisme + $(F^{-1})'$), implisitt funksjonsteorem (løs lokalt + derivert via Cramer). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (I) vis kontraksjon $k<1$ → **sjekk kompletthet** → entydig fikspunkt (navngi Banach); Picard → integralligning + kontraksjon på lite intervall; (C) regn Jacobi → vis inverterbar i punktet → **navngi** invers/implisitt funksjonsteorem → regn lokal derivert (Cramer for ett ledd). Gjennomregnet case (én kontraksjon/Picard + én implisitt funksjonsteorem) med sensor-margnotater om at kompletthetssjekken og Jacobi-inverterbarheten er forutsetningene som gir poeng. 10–14 bevisoppgaver på eksamensnivå.
- **Oppgavesjangre:** I + C. Mønstereksempel: «(a) Vis at $F(x,y)=(x+y^3,\ y+x^3)$ har inverterbar Jacobi i $(0,0)$ og er en lokal diffeomorfisme der. (b) Finn $(F^{-1})'(0,0)$.»
- **Typiske feil:** Kompletthetssjekk hoppet over (Banach); teorem påberopt uten Jacobi-inverterbarhet; teoremet ikke navngitt; global i stedet for lokal konklusjon; Cramer-retning feil.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Fourier-analyse *(prioritet: PERFEKT — ~58 % og stigende, 6 av 7 siste sett)*

#### Kapittel 6.1: Fourier-koeffisienter: beregning, paritet og rekkesum

- **id:** `mat2400-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `mat2400-4-4`
- **kapitteltype:** teori
- **description:** Beregning av reelle (aₙ,bₙ) og komplekse (αₙ) Fourier-koeffisienter: bruk paritet til å halvere arbeidet, delvis integrasjon for koeffisientene, og sett inn et punkt der f er pen (Dinis test) for å summere en tallrekke.
- **Forkunnskaper (kryssbok):** Kap. 4.4 (indreprodukt, ortonormal basis). [Integrasjon ved delbrøk og substitusjon](/bok/r2/r2-4-1) (delvis integrasjon — verifiser lenke).
- **Eksamensbelegg:** Sjanger E, **2012, 2015, 2018-konte, 2020, 2022, 2022-konte** (del av de 58 %). Fasitens grep: bruk **paritet** (odde ⇒ bare sinusledd, like ⇒ bare cosinus) for å halvere; regn koeffisientene med **delvis integrasjon**; sett inn et punkt der $f$ er kontinuerlig/deriverbar (**Dinis test** gir konvergens til $f(x)$) for å summere en tallrekke. Prioritet: **perfekt** (nivå 1 punkt 3).
- **Innholdskontrakt:** **Fourier-koeffisienter** reelle $a_n=\tfrac1\pi\int_{-\pi}^\pi f\cos nx$, $b_n=\tfrac1\pi\int_{-\pi}^\pi f\sin nx$, og komplekse $\alpha_n=\tfrac1{2\pi}\int_{-\pi}^\pi f(x)e^{-inx}dx=\langle f,e_n\rangle$ med $e_n(x)=e^{inx}$; **paritetsforenkling** (odde/like funksjoner); **delvis integrasjon** for koeffisientene; **Dinis test** (navngis): hvis $f$ er deriverbar (eller oppfyller en Dini-betingelse) i $x$, konvergerer Fourier-rekka til $f(x)$; i et **sprang** konvergerer den til gjennomsnittet $\tfrac12(f(x^+)+f(x^-))$; **rekkesummering**: sett inn et konkret punkt for å finne en tallrekke ($\tfrac\pi4=1-\tfrac13+\tfrac15-\cdots$, $\sum\tfrac1{n^2}=\tfrac{\pi^2}{6}$ via Parseval). Klassiske funksjoner: trinnfunksjon, $\lvert x\rvert$, $x$, $x^2$, $\tfrac{\sin x}{x}$. Utledning aktivt: beregn koeffisientene med paritet + delvis integrasjon; summér en tallrekke via et punkt.
- **Oppgavesjangre:** E. Mønstereksempel: «Vis at Fourier-rekka til trinnfunksjonen er $\tfrac12+\tfrac2\pi\sum_{n\ge 0}\tfrac{(-1)^n}{2n+1}\cos((2n+1)x)$, og bruk den til å finne $1-\tfrac13+\tfrac15-\tfrac17+\cdots$.»
- **Typiske feil:** **Paritet ikke utnyttet** (dobbeltarbeid); feil i delvis integrasjon; **summere en tallrekke i et punkt der $f$ er diskontinuerlig** (da gir Dini gjennomsnittet av ensidige grenser, ikke $f(x)$); glemme $\tfrac1{2\pi}$/$\tfrac1\pi$-faktoren; blande reelle og komplekse koeffisienter.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.2: Konvergens av Fourier-rekker: uniform, L², entydighet og konvolusjon

- **id:** `mat2400-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `mat2400-6-1`
- **kapitteltype:** teori
- **description:** Konvergensteorien: uniform konvergens under ∑|αₙ|<∞ (M-test), L²/Fejér-konvergens, Bessel/Parseval, entydighet (like koeffisienter ⇒ like funksjoner), Riemann–Lebesgue-lemmaet og konvolusjonsteoremet cₙ=aₙbₙ.
- **Forkunnskaper (kryssbok):** Kap. 6.1 (koeffisienter), 2.2 (M-test), 4.4 (Bessel/Parseval).
- **Eksamensbelegg:** Sjanger F, **2016, 2017, 2020, 2021**. Fasitens grep: **uniform konvergens** av Fourier-rekka når $\sum\lvert\alpha_n\rvert<\infty$ (M-test-argument); **entydighet** (like koeffisienter ⇒ $f=g$) via Fejér/Cesàro eller $L^2$; **konvolusjon** $c_n=a_nb_n$; **ingen enhet** for konvolusjon via Riemann–Lebesgue. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Uniform konvergens** av Fourier-rekka når $\sum\lvert\alpha_n\rvert<\infty$ (Weierstrass' M-test på $\lvert\alpha_ne^{inx}\rvert=\lvert\alpha_n\rvert$); **$L^2$-konvergens** og **Parsevals identitet** $\sum\lvert\alpha_n\rvert^2=\lVert f\rVert_2^2$; **Fejér–Cesàro** (aritmetiske middel av delsummene konvergerer uniformt for kontinuerlig $f$) og **entydighet** (like Fourier-koeffisienter ⇒ like funksjoner); **Bessels ulikhet** og **Riemann–Lebesgue-lemmaet** (navngis: $\alpha_n\to 0$); **konvolusjon** $(f*g)$ og teoremet $c_n(f*g)=2\pi\,a_n(f)\,b_n(g)$ (koeffisienter multipliseres); ingen konvolusjonsenhet (via Riemann–Lebesgue). Utledning aktivt: uniform konvergens via M-test; entydighet via $L^2$/Fejér; Riemann–Lebesgue-anvendelse.
- **Oppgavesjangre:** F. Mønstereksempel: «La $f$ ha Fourier-koeffisienter med $\sum\lvert\alpha_n\rvert<\infty$. Vis at Fourier-rekka konvergerer uniformt mot en kontinuerlig funksjon, og at denne er $f$ (entydighet).»
- **Typiske feil:** Uniform konvergens hevdet uten $\sum\lvert\alpha_n\rvert<\infty$; **entydighet uten å navngi Fejér/$L^2$**; blande $\sum\lvert\alpha_n\rvert$ (uniform) og $\sum\lvert\alpha_n\rvert^2$ (Parseval/$L^2$); konvolusjonskoeffisient-formel feil; Riemann–Lebesgue brukt uten integrerbarhet.
- **Quiz: 18 · Flashcards: 28**

#### Kapittel 6.3: Drill: Fourier-beregning, rekkesum og konvergenstype

- **id:** `mat2400-6-3` · **number:** 6.3 · **estimatedMinutes:** 85 · **prerequisites:** `mat2400-6-2`
- **kapitteltype:** drill
- **description:** Fourier-sjangrene drillet: beregn rekka til en konkret funksjon med paritet + delvis integrasjon, summér en tallrekke via et pent punkt eller Parseval, og avgjør konvergenstypen (punktvis via Dini, uniform via ∑|αₙ|<∞).
- **Eksamensbelegg:** Dekker sjanger E + F (~58 %, stigende) samlet — nesten årlig. Variantkatalogen: beregn koeffisienter ($\lvert x\rvert$, $x$, $x^2$, trinnfunksjon, $\tfrac{\sin x}{x}$), summér tallrekke (via punkt eller Parseval), avgjør konvergenstype (Dini/uniform), konvolusjon, entydighet. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (E) sjekk paritet → regn kun de nødvendige koeffisientene med delvis integrasjon → skriv rekka → for tallrekke: velg punkt der $f$ er pen (Dini) eller bruk Parseval; (F) for konvergenstype: sjekk $\sum\lvert\alpha_n\rvert<\infty$ (uniform, M-test) eller Dini (punktvis); navngi verktøyet. Gjennomregnet case (beregn Fourier-rekka til $x^2$, summér $\sum 1/n^2$ via et punkt og via Parseval — **Alternatively**) med sensor-margnotater om paritet, faktor og Dini-forutsetningen. 10–14 oppgaver på eksamensnivå: minst én beregning+rekkesum, én konvergenstype, én konvolusjon/entydighet.
- **Oppgavesjangre:** E + F. Mønstereksempel: «(a) Finn Fourier-rekka til $f(x)=x^2$ på $[-\pi,\pi]$. (b) Bruk et punkt til å finne $\sum_{n\ge 1}\tfrac1{n^2}$. (c) Konvergerer rekka uniformt? Begrunn.»
- **Typiske feil:** Hele Fourier-fellekatalogen under tidspress: paritet oversett, delvis integrasjon feil, tallrekke summert i diskontinuitetspunkt, uniform hevdet uten $\sum\lvert\alpha_n\rvert<\infty$, Parseval vs. $\sum\lvert\alpha_n\rvert$ forvekslet.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Målteori og Lebesgue-integrasjon (beredskap) *(prioritet: KJENNE — tungt 2011–2015, NULL 2016–2022; dekkes for pensum)*

> **Ærlig eksamensvinkel for hele Del 7:** Målteori var tungt eksamenstestet
> 2011–2015 (entydighet av integralet fra fire aksiomer, σ-algebra ved induksjon,
> begrenset/dominert konvergensteorem, L¹-approksimasjon, målbarhet av
> sammensetninger) og deretter **fullstendig fraværende i alle ni sett 2016–2022**.
> Emnebeskrivelsen (2026) lister det fortsatt som sentralt. Disse to kapitlene
> **dekker målteori for pensum og robusthet**, men er bevisst kompakte og lavt
> vektet — merk «ikke arkivbelagt etter 2015» i Eksamensvinkelen. **Byggefasen skal
> sjekke om målteori er reelt gjeninnført i sett fra 2023 og senere; hvis ja, må
> denne delen utvides til perfekt-nivå med eget drillkapittel.**

#### Kapittel 7.1: σ-algebraer, målbarhet og Lebesgue-mål

- **id:** `mat2400-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `mat2400-1-2`
- **kapitteltype:** teori (beredskap)
- **description:** Grunnbegrepene i målteori: σ-algebra, mål, målbare funksjoner og konstruksjonen av Lebesgue-målet — dekket for pensum, med ærlig merknad om at temaet ikke er eksamenstestet etter 2015.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (åpne/lukkede mengder), 2.1 (grenser av funksjoner).
- **Eksamensbelegg:** Sjanger O. **Tungt 2011–2015, deretter 0/9.** Dokumenterte 2011–2015-varianter: σ-algebra generert av mengder (induksjon), målbarhet av sammensetninger, mengder av mål null. Prioritet: **kjenne**. ⚠️ ikke arkivbelagt etter 2015.
- **Innholdskontrakt:** **σ-algebra** (lukket under komplement og tellbar union, inneholder $\emptyset$) og generert σ-algebra; **Borel-mengder**; **mål** (tellbar additivitet, $\mu(\emptyset)=0$) og ytre mål; **konstruksjon av Lebesgue-målet** (skisse: ytre mål + Carathéodory-målbarhet); **målbare funksjoner** (urbilde av åpen mengde målbart) og at grenser/sup/inf av målbare er målbare; **mengder av mål null** og «nesten overalt» (n.o.); målbarhet av sammensetninger. Utledning aktivt (på beredskapsnivå): σ-algebra-egenskaper; målbarhet av en grensefunksjon. Markér hva som kun skisseres (Lebesgue-konstruksjonen).
- **Oppgavesjangre:** O. Mønstereksempel: «Vis at hvis $\{A_n\}$ er en tellbar familie av målbare mengder, så er $\bigcup_n A_n$ og $\bigcap_n A_n$ målbare, og at en grense av målbare funksjoner er målbar.»
- **Typiske feil:** Forveksle σ-algebra (tellbar union) med algebra (endelig union); glemme komplement-lukkethet; tro at «målbar» = «kontinuerlig»; blande mål null og tom mengde.
- **Quiz: 14 · Flashcards: 24**

#### Kapittel 7.2: Lebesgue-integralet og konvergensteoremene

- **id:** `mat2400-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `mat2400-7-1`
- **kapitteltype:** teori (beredskap)
- **description:** Lebesgue-integralet bygget via enkle funksjoner, og de tre konvergensteoremene (monoton, Fatou, dominert) som er målteoriens kraftverktøy — pluss L¹-approksimasjon, dekket for pensum med samme ærlige forbehold.
- **Forkunnskaper (kryssbok):** Kap. 7.1 (målbarhet), 2.2 (ledd-for-ledd integrasjon — sammenlikning med Riemann).
- **Eksamensbelegg:** Sjanger O. **Tungt 2011–2015, deretter 0/9.** Dokumenterte varianter: entydighet av integralet fra fire aksiomer, begrenset/dominert konvergensteorem, L¹-approksimasjon med enkle/kontinuerlige funksjoner. Prioritet: **kjenne**. ⚠️ ikke arkivbelagt etter 2015.
- **Innholdskontrakt:** **Integral av enkle funksjoner** → ikke-negative målbare (monoton grense) → generelle via $f^+,f^-$; **$L^1$-rommet** og $L^1$-normen; **monoton konvergensteorem** (navngis); **Fatous lemma** (navngis); **dominert konvergensteorem** (navngis: $\lvert f_n\rvert\le g\in L^1$, $f_n\to f$ n.o. ⇒ $\int f_n\to\int f$); sammenlikning med Riemann-integralet (Lebesgue er mer generelt, tillater grenseombytting under svakere forutsetninger); **$L^1$-approksimasjon** med enkle/kontinuerlige funksjoner ($C_c$ tett i $L^1$); entydighet av integralet fra aksiomer (skisse). Utledning aktivt (beredskapsnivå): anvend dominert/monoton konvergens på et grenseombytting-eksempel. Markér skisser.
- **Oppgavesjangre:** O. Mønstereksempel: «La $f_n\to f$ n.o. med $\lvert f_n\rvert\le g\in L^1$. Vis ved dominert konvergens at $\int f_n\to\int f$, og gi et eksempel som viser at dominansforutsetningen er nødvendig.»
- **Typiske feil:** Bruke dominert konvergens **uten** en integrerbar dominant $g$; forveksle Fatou (ulikhet) med dominert konvergens (likhet); tro at Lebesgue- og Riemann-integralet alltid faller sammen; glemme «nesten overalt»-presiseringen.
- **Quiz: 14 · Flashcards: 24**

**Prøve-kvote Del 7:** 4 prøver (spesifisert i §4) — men merket som beredskap; hvis 2023+-sett viser at målteori er ute, kan Del 7-prøvene nedskaleres til 2 (dokumentér valget).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Bevismal-standarden: slik skriver du en A-besvarelse i MAT2400

- **id:** `mat2400-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–6
- **kapitteltype:** teori (metodekapittel)
- **description:** Sensorreglene og de faste bevismalene operasjonalisert på ett sted: aksiomlister, Fréchet-firetrinnet, operatornorm to veier, forutsetningssjekk, teoremnavning, moteksempel-verifikasjon og ε–δ-disiplin — med teoremnavn-banken du må kunne påberope utenat.
- **Eksamensbelegg:** Metaregel-kapittel bygget på fasitpraksisen 2015–2022: (i) «Alle svar må begrunnes / show enough details» — trivielt kort, det ikke-trivielle grundig; (ii) **de faste malene** (metrikk/norm (i)–(iii), Fréchet-firetrinnet, operatornorm øvre+nedre, Arzelà–Ascoli tre krav, Banach kontraksjon+kompletthet); (iii) **forutsetningssjekk før teorem** (Banach/Ascoli/ekstremverdi); (iv) **navngi teoremet**; (v) **moteksempel krever verifikasjon**; (vi) **«Alternatively»** — begge veier premieres; (vii) **kjeding** (bruk a) i b) selv om a) ikke er løst). Prioritet: **perfekt** (malen bærer karakteren).
- **Innholdskontrakt:** «Begrunnelsestrappen» per sjanger A–O: hva som er tilstrekkelig for hver (én tabell — hvor er poengene: trekantulikhet, begrensethet, restledd, ekvikontinuitet, testfunksjon, kompletthetssjekk); **teoremnavn-banken** (alle navngitte resultater studenten må kunne påberope: Banach, invers/implisitt funksjonsteorem, ekstremverdisetning, Heine–Borel, Bolzano–Weierstrass, Arzelà–Ascoli, Weierstrass' M-test og approksimasjonsteorem, Dini, Cauchy–Schwarz, Bessel, Parseval, Riesz-representasjon, Riemann–Lebesgue, dominert/monoton konvergens); **forutsetnings-sjekklisten** (hvilket teorem krever hva); **sjekklisten før innlevering** (aksiomer listet? Fréchet alle fire ledd? operatornorm begge veier? kompletthet sjekket før Banach? ekvikontinuitet før Ascoli? moteksempel verifisert? teorem navngitt? kvantorrekkefølge riktig? koblingen a)→b) utnyttet?); to kontrastpar «samme matematikk, ulik føring» (ett Fréchet-eksempel med/uten begrensethetssteget; ett moteksempel med/uten verifikasjon); strategien for kjedede deloppgaver.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under regner riktig retningsderivert, men ville tapt mest av uttellingen. Pek på de to manglende malleddene (begrensethet + restledd) og skriv om til full uttelling med alle fire trinn.»
- **Typiske feil:** Hele bevisføringens feilkatalog: manglende malledd (begrensethet/ekvikontinuitet/restledd), teorem uten forutsetningssjekk, moteksempel uten verifikasjon, teorem ikke navngitt, kvantorrekkefølge byttet, koblingen a)→b) ikke sett, trivielt utbrodert mens det ikke-trivielle hoppes over.
- **Quiz: 16 · Flashcards: 32** (teoremnavn-bank + bevismaler + forutsetnings-sjekkliste — flashcard-gull for et bevisfag uten formelark)

#### Kapittel 8.2: Øvingseksamen 1: ryggraden (norm, metrikk, Fréchet, Fourier)

- **id:** `mat2400-8-2` · **number:** 8.2 · **estimatedMinutes:** 240 · **prerequisites:** `mat2400-8-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter dagens mal — ~10 likt vektede 10-poengs bevis-deloppgaver — kalibrert på prognosen: norm-/metrikk-verifikasjon, Fréchet-firetrinnet koblet til invers funksjonsteorem, Fourier-beregning + rekkesum, kompletthet med moteksempel og en operatornorm.
- **Eksamensbelegg/miks:** Speiler dagens mal (**~10–11 likt vektede 10-poengs deloppgaver, 4 timer, ingen hjelpemidler, alt begrunnet**), kalibrert på prognosen i analysens §7: **O1** verifiser en norm/metrikk på et konkret rom (sjanger A) → **O2** Fréchet-firetrinnet på en funksjonal, b) koblet til invers/implisitt funksjonsteorem (sjanger B + C) → **O3** Fourier-rekke: beregn koeffisientene til en konkret funksjon + summér en tallrekke (sjanger E) → **O4** kompletthet: vis komplett eller gi et moteksempel med verifikasjon (sjanger G + M) → **O5** operatornorm eksakt med testfunksjon (sjanger D) → **O6** uniform vs. punktvis konvergens (sjanger J). Deloppgavene kjedes der det er naturlig (O2b bruker O2a). Alle oppgaver **nyskrevne** med egne funksjoner/tall. Løsningsforslag i `collapsible` per deloppgave som **A-besvarelse** etter 8.1-standarden (aksiomlister, alle fire Fréchet-ledd, testfunksjon, navngitte teoremer), med `tip`-notat om tidsbudsjett (~22 min/blokk) og hvor bevis-/føringspoengene sitter.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2: differensiasjon, Hilbert og kompakthet

- **id:** `mat2400-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `mat2400-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett nummer to som treffer sjangrene sett 1 ikke gjorde — implisitt funksjonsteorem, Hilbertrom (Bessel/Riesz), kontraksjon + Picard, uniform kontinuitet og Fourier-konvergens — så de to settene sammen dekker A–N.
- **Eksamensbelegg/miks:** Samme mal (~10 begrunnede 10-poengs deloppgaver, 4 timer), med **restsjangrene** (sammen dekker 8.2 + 8.3 alle A–N): **O1** metrikk/topologi: tillukning/rand via følger + en åpen/lukket-argument (sjanger L) → **O2** Fréchet på en operator + implisitt funksjonsteorem (sjanger B + C) → **O3** Hilbertrom: Bessels ulikhet + Riesz-representasjon (sjanger K) → **O4** kontraksjon + Banach + Picard-ODE, med kompletthetssjekk (sjanger I) → **O5** uniform kontinuitet: bevis/motbevis med følgepar (sjanger N) → **O6** Fourier-konvergens: uniform under $\sum\lvert\alpha_n\rvert<\infty$ + entydighet (sjanger F). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med vektings-/tidstips per deloppgave, og `tip`-notat om forutsetningssjekkene (kompletthet før Banach, ekvikontinuitet, kontinuitet av funksjonalen før Riesz).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3: konte-profil (Arzelà–Ascoli, Weierstrass, ℓᵖ)

- **id:** `mat2400-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `mat2400-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett med kontinuasjonsprofilen: tyngre på kompakthet i funksjonsrom (Arzelà–Ascoli), Weierstrass' approksimasjonsteorem, ℓᵖ-rom og differensiasjon — de sjangrene konte-settene 2018/2021/2022 vektet tungt — pluss en obligatorisk moteksempel-oppgave.
- **Eksamensbelegg/miks:** Speiler **kontinuasjonsprofilen** (Arzelà–Ascoli, Weierstrass-approksimasjon og differensiasjon var tunge i alle tre konte): **O1** Fréchet på en $\ell^p$-avbildning ($F(a)=(\sin a_i)$-typen) (sjanger B) → **O2** Arzelà–Ascoli: vis kompakt tillukning av en familie, sjekk alle tre krav (sjanger H) → **O3** Weierstrass' approksimasjonsteorem: signaturbeviset («$F$ kontinuerlig som er $0$ på alle polynomer er $0$») (sjanger H/M) → **O4** norm-verifikasjon på et $\ell^p$-/følgerom + operatornorm (sjanger A + D) → **O5** moteksempel: «enhetskula i uendelig dimensjon er ikke kompakt» med full verifikasjon (sjanger M) → **O6** Fourier-beregning + konvergenstype (sjanger E + F). Alle oppgaver nyskrevne; løsningsforslag som A-besvarelse med `tip`-notat om at konte-settene vekter kompakthet-i-funksjonsrom og moteksempler tyngre, og at ekvikontinuiteten er der O2 avgjøres. `warning` om at arkivet stopper 2022 — verifiser profilen mot 2023+.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver — øvingseksamenene (8.2–8.4) er delens prøver.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 10+16 = **26** | 14+30 = **44** |
| 1 | 1.1–1.5 | 20+20+18+18+16 = **92** | 26+28+26+26+8 = **114** |
| 2 | 2.1–2.4 | 18+16+12+16 = **62** | 24+22+18+8 = **72** |
| 3 | 3.1–3.3 | 18+16+16 = **50** | 26+26+8 = **60** |
| 4 | 4.1–4.5 | 20+18+16+18+16 = **88** | 26+26+20+28+8 = **108** |
| 5 | 5.1–5.5 | 16+18+16+16+14 = **80** | 24+30+10+26+8 = **98** |
| 6 | 6.1–6.3 | 18+18+16 = **52** | 24+28+8 = **60** |
| 7 | 7.1–7.2 | 14+14 = **28** | 24+24 = **48** |
| 8 | 8.1–8.4 | 16+5+5+5 = **31** | 32+0+0+0 = **32** |
| **Sum** | **33 kap.** | **509 ≥ 500 ✓** | **636 (mål 600–700) ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst høy (636, ikke ~510):** MAT2400 er et **rent
bevisemne** der definisjoner, teoremnavn og de faste bevismalene er selve
puggematerialet — apparatet må sitte utenat (kun et lite faktaark på eksamen).
De teori- og bevishåndverkstunge kapitlene bærer tettheten (0.2 bevishåndverk 30,
5.2 Fréchet 30, 8.1 bevismal-standard 32, samt grunnmur/ryggrad i Del 1 og 4);
drillkapitlene holdes lave på flashcards (8–10) fordi deres verdi er
bevisoppgaver, ikke kort. Quiz-fordelingen speiler eksamensvektene: **Del 1
(grunnmur), Del 4 (ryggrad) og Del 5 (stigende signatur) bærer 260 av 509 quiz**;
Del 7 (målteori, beredskap) holdes lav (28) i tråd med at det ikke er arkivbelagt
etter 2015; øvingseksamenene bidrar 15 (5 hver).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Alle prøver består av **nyskrevne bevisoppgaver** i arkivets sjangre, med
løsningsforslag som A-besvarelse etter bevismal-standarden (8.1), poengfordeling
og full begrunnelse. Legges som prøvekapitler (`mat2400-<del>-prove`,
chapterNumber `<del>.P`) etter plattformens mønster.

**Del 1 — Metriske rom, topologi, kompletthet og kompakthet**
1. Prøve 1.A (35 min): Metrikk-verifikasjon — alle aksiomer, sammensatt metrikk (kap. 1.1, sjanger A).
2. Prøve 1.B (35 min): Topologi — tillukning/rand/opphopning via følger, åpen/lukket (kap. 1.2, sjanger L).
3. Prøve 1.C (40 min): Kompletthet — komplett eller konkret Cauchy-moteksempel (kap. 1.3, sjanger G + M).
4. Prøve 1.D (40 min): Kompakthet-simulering — Heine–Borel + ekstremverdisetning + «lukket+begrenset ikke kompakt» (kap. 1.4–1.5, sjanger H + M).

**Del 2 — Følger, funksjonsfølger og uniform konvergens**
1. Prøve 2.A (35 min): Punktvis vs. uniform — sup-estimat + kontinuitetsargument (kap. 2.1, sjanger J).
2. Prøve 2.B (35 min): M-test + ledd-for-ledd integrasjon (kap. 2.2, sjanger J).
3. Prøve 2.C (35 min): Ledd-for-ledd derivasjon med delintervall + potensrekke-radius (kap. 2.2–2.3, sjanger J).
4. Prøve 2.D (40 min): Konvergens-simulering — punktvis grense + uniformitet + grenseombytting kjedet (kap. 2.1–2.4, sjanger J).

**Del 3 — Kontinuitet, uniform kontinuitet og kompakthet i funksjonsrom**
1. Prøve 3.A (35 min): Uniform kontinuitet — Lipschitz/kompakt + motbevis med følgepar (kap. 3.1, sjanger N).
2. Prøve 3.B (40 min): Arzelà–Ascoli — verifiser alle tre krav på en familie (kap. 3.2, sjanger H).
3. Prøve 3.C (35 min): Enhetskule ikke kompakt + Weierstrass-approksimasjon (kap. 3.2, sjanger H + M).
4. Prøve 3.D (40 min): Kontinuitet-simulering — uniform kontinuitet + kompakthet i funksjonsrom kjedet (kap. 3.1–3.3, sjanger N + H).

**Del 4 — Normerte rom, operatornorm og Hilbertrom**
1. Prøve 4.A (35 min): Norm-verifikasjon — alle aksiomer, Minkowski for trekantulikheten (kap. 4.1, sjanger A).
2. Prøve 4.B (40 min): Operatornorm eksakt — testfunksjon begge veier + ubegrenset invers (kap. 4.2, sjanger D).
3. Prøve 4.C (35 min): Normekvivalens + Hilbertrom (Cauchy–Schwarz, Bessel) (kap. 4.3–4.4, sjanger K).
4. Prøve 4.D (40 min): Ryggrad-simulering — norm + operatornorm + Riesz kjedet (kap. 4.1–4.5, sjanger A + D + K).

**Del 5 — Banachs fikspunktteorem og differensiasjon i normerte rom**
1. Prøve 5.A (35 min): Kontraksjon + Banach + kompletthetssjekk + Picard (kap. 5.1, sjanger I).
2. Prøve 5.B (45 min): Fréchet-firetrinnet — funksjonal, alle fire ledd (kap. 5.2–5.3, sjanger B).
3. Prøve 5.C (40 min): Invers/implisitt funksjonsteorem — Jacobi inverterbar + navngitt konklusjon + lokal derivert (kap. 5.4, sjanger C).
4. Prøve 5.D (45 min): Signatur-simulering — Fréchet a) + invers/implisitt b) kjedet på samme avbildning (kap. 5.2–5.5, sjanger B + C).

**Del 6 — Fourier-analyse**
1. Prøve 6.A (40 min): Fourier-beregning — paritet + delvis integrasjon + rekkesum via et punkt (kap. 6.1, sjanger E).
2. Prøve 6.B (40 min): Konvergens — uniform under $\sum\lvert\alpha_n\rvert<\infty$ + entydighet (kap. 6.2, sjanger F).
3. Prøve 6.C (35 min): Parseval-rekkesum + Riemann–Lebesgue + konvolusjon (kap. 6.2, sjanger F).
4. Prøve 6.D (45 min): Fourier-simulering — beregn rekka + summér tallrekke + avgjør konvergenstype kjedet (kap. 6.1–6.3, sjanger E + F).

**Del 7 — Målteori og Lebesgue-integrasjon (beredskap)**
1. Prøve 7.A (35 min): σ-algebra + målbarhet av grenser/sammensetninger (kap. 7.1, sjanger O).
2. Prøve 7.B (35 min): Lebesgue-integral + dominert konvergensteorem med nødvendighet av dominant (kap. 7.2, sjanger O).
3. Prøve 7.C (35 min): Monoton/Fatou + L¹-approksimasjon (kap. 7.2, sjanger O).
4. Prøve 7.D (35 min): Målteori-tverrsnitt — σ-algebra + konvergensteorem kjedet (kap. 7.1–7.2, sjanger O).
   *(Merk: hvis 2023+-sett bekrefter at målteori er ute av eksamen, kan Del 7 nedskaleres til 2 prøver — dokumentér valget i byggekontrakten.)*

### Øvingseksamener (3 komplette sett — se kap. 8.2–8.4)

| Sett | Profil den speiler | Miks (10 bevis-deloppgaver) |
|---|---|---|
| Øvingseksamen 1 (kap. 8.2) | Ordinær ryggrad-eksamen 2016–2022 | A(O1) + B+C(O2) + E(O3) + G+M(O4) + D(O5) + J(O6) |
| Øvingseksamen 2 (kap. 8.3) | Ordinær, restsjangre + Hilbert | L(O1) + B+C(O2) + K(O3) + I(O4) + N(O5) + F(O6) |
| Øvingseksamen 3 (kap. 8.4) | Kontinuasjonsprofil 2018/2021/2022 | B(O1) + H(O2) + H/M(O3) + A+D(O4) + M(O5) + E+F(O6) |

Til sammen dekker de tre settene samtlige sjangre A–N minst én gang (målteori O er
beredskap og ligger i temaprøvene, ikke i øvingseksamenene, i tråd med
arkivkalibreringen), og trener **både «vis at»-, moteksempel- og beregn-med-
begrunnelse-sjangrene**. Hver deloppgave er 10 poeng, alt begrunnet, ~22 min/blokk.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Et rent bevisemne på ti likt vektede punkter** — vurderingsformen (4-timers
   skriftlig skoleeksamen, ~10 likt vektede 10-poengs deloppgaver, ingen
   hjelpemidler ut over et lite faktaark), oppgavefordelingen (~75 % «vis at»,
   ~12 % moteksempel, ~12 % beregn-med-begrunnelse) og hovedfunnet: dette kan ikke
   «regnes» som MAT1100 — hele faget er bevishåndverk (fra kap. 0.1).
2. **Prioriteringskartet** — frekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (Del 4 normerte rom/operatornorm 67 %, Del 5 Fréchet/invers 50 %
   stigende, Del 6 Fourier 58 % stigende, Del 1 metriske rom/kompletthet/kompakthet
   58 %), **kunne** (Del 2 uniform konvergens, Del 3 uniform kontinuitet/Arzelà–
   Ascoli, Del 4.4 Hilbert, Del 5.1 Banach), **kjenne** (Del 2.3 potensrekker, Del
   3.2 Weierstrass-approksimasjon, **Del 7 målteori — ikke arkivbelagt etter 2015**)
   — med notatet om at Fréchet-firetrinnet er den enkeltferdigheten som skiller
   karakterene mest.
3. **Bevismal-biblioteket** — de faste malene fra kap. 0.2 og drillkapitlene i
   kortform: metrikk/norm-aksiomene (i)–(iii), Fréchet-firetrinnet, operatornorm to
   veier, kompletthetsmalen, Arzelà–Ascolis tre krav, kontraksjon+kompletthet,
   Fourier-beregning med paritet, moteksempel-oppskriften.
4. **Sensorreglene** — «alle svar begrunnes», de faste malene fulgt til punkt og
   prikke, **forutsetningssjekk før teorem** (kompletthet før Banach,
   ekvikontinuitet før Ascoli, kompakthet før ekstremverdi, uniform konvergens før
   ledd-for-ledd), **navngi teoremet**, **moteksempel krever verifikasjon**,
   **«Alternatively»** (begge veier), kjeding a)→b) (fra kap. 8.1) +
   karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de 12 typiske feilene fra analysen samlet (manglende
   Fréchet-ledd, Gateaux forvekslet med Fréchet, teorem uten forutsetningssjekk,
   «lukket+begrenset ⇒ kompakt» i uendelig dimensjon, ledd-for-ledd uten uniform
   konvergens, uniform «bevist» punktvis, ufullstendige norm-/metrikk-aksiomer,
   operatornorm én vei, kompletthet forvekslet med lukkethet, Fourier-paritet ikke
   utnyttet / rekkesum i diskontinuitetspunkt, moteksempel uten verifikasjon,
   ε–δ-slurv), hver med henvisning til kapitlet som forebygger den.
6. **Teorem-, definisjons- og notasjonsliste i Lindstrøms notasjon** — apparatet fra
   innholdskontraktene, med markering *utlede/bevise aktivt* vs. *kun bruke*: metrikk/
   norm-aksiomene, topologi via følger, kompletthet + kompakthet (Heine–Borel,
   ekstremverdi, Arzelà–Ascoli), M-test + uniform konvergens, uniform kontinuitet,
   operatornorm + normekvivalens, indreprodukt/Hilbert (Cauchy–Schwarz, Bessel,
   Parseval, Riesz), Banach + Fréchet-firetrinnet + invers/implisitt funksjonsteorem,
   Fourier (koeffisienter, Dini, uniform under $\sum\lvert\alpha_n\rvert<\infty$,
   Fejér, Riemann–Lebesgue, konvolusjon), målteori (beredskap: σ-algebra,
   dominert/monoton konvergens) — med **teoremnavn-banken** (alt må kunne påberopes
   utenat) og en påminnelse om at bare et lite faktaark deles ut.
7. **Studieløp** — semesterplan: Del 0 (etabler bevishåndverket) → Del 1
   (grunnmuren, drill til automatikk) → Del 2–3 (konvergens + kontinuitet) →
   **Del 4 (ryggraden — bruk mye tid)** → **Del 5 (den stigende signaturen — Fréchet
   til automatikk i eget drillkapittel)** → Del 6 (Fourier, nesten årlig) → Del 7
   (målteori kort — beredskap, ikke tyngdepunkt) → temaprøvene → bevismal-standarden
   (8.1) → de tre øvingseksamenene under tidspress (4 timer, ingen hjelpemidler).
   Ærlighetsnotat: målteori nedprioriteres bevisst; **verifiser kalibreringen mot
   første sett fra 2023 og senere** før eksamen.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `mat2400` med alle 33
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `textbook-courses-matte.ts`, + `sectionNames`
   fra §2-tabellen (del-nummer → seksjonstittel). **`number` SKAL være del-basert**
   («5.2», ALDRI lineær «22») — bokforsiden grupperer på `number.split('.')[0]`.
   Prosareferanser i innholdet bruker samme del-baserte form («kap. 5.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–O, frekvenstallene og
   bevismal-biblioteket som resten refererer til.
3. **Grunnmuren**: Del 1 (metriske rom er grunnlaget alt hviler på; 1.4 kompakthet
   krever 1.3 kompletthet).
4. **Konvergens og kontinuitet**: Del 2 (uniform konvergens; krever 1.3) → Del 3
   (uniform kontinuitet + Arzelà–Ascoli; 3.2 krever 1.4 + 2.1).
5. **Ryggraden**: Del 4 (normerte rom/operatornorm/Hilbert; 4.1 krever 1.3, 4.4
   krever 4.1).
6. **Den stigende signaturen**: Del 5 (Banach krever 1.3; Fréchet 5.2 krever 4.2;
   invers/implisitt 5.4 krever 5.2 + 5.1).
7. **Fourier**: Del 6 (krever 4.4 Hilbert + 2.2 M-test).
8. **Beredskap**: Del 7 (målteori; krever 1.2 + 2.1) — merk «ikke arkivbelagt etter
   2015» i hver Eksamensvinkel.
9. **Del 8** til slutt (bevismal-standard + de tre øvingseksamenene gjenbruker alt
   og må dekke A–N + begge produksjonsmåter). Temaprøvene (§4) legges som
   prøvekapitler (`mat2400-<del>-prove`, chapterNumber `<del>.P`), én per temadel
   1–7 (28 stk).
10. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
    kapitlene ferdigstilles.

**Batching (fase 4):** én agent per hel del. Del 1, 4 og 5 (5 kap. hver) og Del 8
(4 kap., hvorav 3 øvingseksamener) er de største — hold hver del samlet hos én
agent, flagg dem for konsistenssjekk. Del 5 (Fréchet/invers) bygges av en agent som
også leser 4.1–4.2 og 5.1 (Banach bærer invers-beviset). Del 6 (Fourier) bygges av
en agent som også leser 4.4 (Hilbert) og 2.2 (M-test). Øvingseksamenene (8.2–8.4)
bygges av én agent som leser HELE skjelettet (de gjenbruker alle sjangre).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, ikke håndskriving — LaTeX krever `\\` i JSON-strenger;
      `npm run build` grønn (combine-chapters fanger ugyldig JSON i registry).
- [ ] **LaTeX + Lindstrøms notasjon**: all matematikk i `$...$`/`$$...$$`; ingen
      unicode-brøker; konsistent notasjon: $d$, $\lVert\cdot\rVert$,
      $\lVert\cdot\rVert_\infty$, $\lVert\cdot\rVert_1$, $\langle\cdot,\cdot\rangle$,
      $\bar A$, $\partial A$, $B(a;r)$, $F'(x;r)$, $F'(x)$/$A$, $\sigma(r)$,
      $\alpha_n=\langle u,e_n\rangle$, $e_n(x)=e^{inx}$, $\ell^p$, $C[a,b]$.
- [ ] **Bevismal-konsistens (grep over alle mat2400-filer)**: metrikk/norm-aksiomene
      listet (i)–(iii); Fréchet-bevis har **alle fire ledd** (retningsderivert,
      linearitet, begrensethet, restledd); operatornorm vist **begge veier** der
      eksakt norm kreves; kompletthet sjekket **før** Banach påberopes;
      ekvikontinuitet sjekket **før** Arzelà–Ascoli; teoremer **navngitt**;
      moteksempler **verifisert**.
- [ ] **A-besvarelse i ALLE løsningsforslag**: aksiomlister; fire Fréchet-ledd;
      testfunksjon med $\lVert f\rVert=1$; forutsetningssjekk før hvert teorem;
      navngitt teorem der argumentet bæres; riktig kvantorrekkefølge i ε–δ; verbal
      konklusjonssetning. **Et fasitsvar uten bevisføring er en byggefeil.**
- [ ] **Arkiv-ærlighet**: Del 7 (målteori) og hver Eksamensvinkel der merker
      «ikke arkivbelagt etter 2015»; kap. 0.1, Del 7-intro og kap. 8.4 sier
      eksplisitt at arkivet stopper 2022 og at kalibreringen skal **verifiseres mot
      første sett fra 2023 og senere** (særlig om målteori er gjeninnført). Metode
      uten skreven fasit merkes «⚠️ metode = faglig standard».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — R1/R2 lenket og verifisert; **MAT1100/MAT1110 som
      klartekst med aktiveringsmarkør**), `collapsible` Symbol- og formelliste per
      delkapittel (alle symboler forklart — $d$, $\lVert\cdot\rVert$,
      $\langle\cdot,\cdot\rangle$, $\sigma(r)$, $\alpha_n$ osv.), Typiske
      feil-`warning` (med forutsetningssjekk-advarslene), 2–4 eksempler (siste på
      eksamensnivå), 6–12 bevisøvinger med `solution` + `hints`, repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case +
      10–16 bevisoppgaver; øvingseksamenene fører komplette A-besvarelser per
      deloppgave.
- [ ] **Quiz-sum ≥ 509 og flashcard-sum ≥ 636** per kvotetabellen i §3
      (kontrollsummér). Flashcards KUN fra toppnivå `definition`-blokker med `title`
      (definisjoner, teoremer med navn, bevismaler — puggematerialet).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (8.2–8.4) som
      sammen dekker A–N; hver øvingseksamen har ~10 likt vektede 10-poengs
      bevis-deloppgaver.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne funksjoner, tall og
      kontekster; ingen formuleringer fra reelle sett eller fasiter (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn); Lindstrøm refereres (apparat/notasjon), aldri siteres i lengde.
- [ ] **Navigasjon**: `mat2400` inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
      under **Universitetet i Oslo (UiO)**, navn = «MAT2400 Reell analyse».
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside, bokforside og
      minst 3 kapittel-/narrativ-ruter (teori/drill/prøve — f.eks. 4.1, 5.3, 6.3) +
      quiz- og flashcard-rute (200 + innholdssjekk), jf. `getChapterMeta`-lærdommen.

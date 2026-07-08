# Eksamensanalyse: TTT4120 Digital signalbehandling (NTNU)

> Grunnlag for en eksamensrettet lærebok. Alt innhold er omskrevet fra
> kildene (opphavsrett) — ingen oppgavetekst er gjengitt ordrett.
> Fagterminologi holdes på engelsk der pensum bruker det (kurset undervises og
> eksamineres på engelsk).

**Status (verifisert 2026-07-08 mot NTNUs emneside):** AKTIVT emne. Undervises
høst 2026 (studieår 2026/2027), 7,5 studiepoeng, 3. årstrinn, campus Trondheim.
Ordinær eksamen oppgitt til 2. desember 2026, utsatt eksamen sommer 2027.
Undervisning og eksamen på **engelsk**.

**Eksamensform:** Skriftlig skoleeksamen, **4 timer**. Hjelpemiddelkode **D**
(enkel kalkulator tillatt; ingen trykte eller håndskrevne hjelpemidler).
Et kort **formelark deles ut** som vedlegg (se del 6). Bokstavkarakterer.
Obligatoriske øvinger for adgang.

---

## 0. Evidensgrunnlag og ærlighet om styrken

Arkivet er **lite**: fire distinkte eksamenssett fra 2015–2017, hvorav bare
**ett har fullstendig løsningsforslag**.

| Sett | Type | Oppgaver lesbare? | Løsning lesbar? | Foreleser |
|------|------|-------------------|-----------------|-----------|
| Des 2015 (9. des) | Ordinær | Ja | **Ja — fullt fasitsvar** | Magne H. Johnsen |
| Des 2016 (12. des) | Ordinær | Ja | Nei (skannet bilde, tom tekst) | Stefan Werner |
| Aug 2017 (12. aug) | Utsatt/kont. | Ja | Ingen løsningsfil | Stefan Werner |
| Des 2017 (12. des) | Ordinær | Ja | Nei (skannet bilde, tom tekst) | Stefan Werner |

**Konsekvenser for evidensstyrken:**
- **Sterk** evidens for *strukturen*: alle fire settene følger et identisk
  4-oppgavers skjelett (se del 1). Dette er en av de mest maldrevne
  eksamenene i porteføljen — mønsteret er tilnærmet invariant 2015→2017.
- **Sterk** evidens for *sensorkrav og løsningsstandard*: 2015-fasiten er
  detaljert og kommenterer eksplisitt hva som kreves vs. ikke kreves.
- **Svakere** evidens for *nyeste vri*: arkivet stopper i 2017. Dagens
  foreleser og pensumvekting kan ha driftet. To løsningsforslag (2016, des
  2017) er skannede bilder og lot seg ikke tekstutvinne — vurderingene av
  disse settenes fasit er derfor utledet fra oppgavetekst + 2015-fasitens
  metodikk, ikke fra deres egne fasitsvar. Slike slutninger er merket
  **(utledet)**.
- Frekvenstall under er basert på n=4 sett. Behandle dem som robuste for
  *hovedtemaer* (som opptrer 4/4) og som *indikative* for undertemaer.

Pensum er efter alt å dømme **Proakis & Manolakis, _Digital Signal
Processing_** (standardboka for dette kurset) — notasjon, formelark og
oppgavetyper stemmer med den. Verifiser mot gjeldende emneside før bokskriving.

---

## 1. Eksamensform og utvikling

### Det invariante 4-oppgavers skjelettet

Alle fire settene har nøyaktig fire oppgaver med samme tema og nesten samme
vekting. Dette er **fasiten for bokstrukturen**:

| Oppg. | Tittel (som i settene) | Typisk vekt | Kjerne |
|-------|------------------------|-------------|--------|
| **1** | Basics of filter theory and design | 18–20 p | Differanselikning ↔ H(z), FIR/IIR, pol-nullpunkt, ROC, stabilitet, minimum/lineær fase, kaskade/parallellform, invers z-transform → h[n], inverst filter |
| **2** | Filter structures and implementations | 18–20 p | DF-II / kaskade / parallell-strukturer, fixed-point avrundingsstøy (variansregning), skalering/overflow, S/N-sammenlikning |
| **3** | Parametric modeling (+ Wiener filtering) | 14–18 p | Hvit støy gjennom filter → AR/MA/ARMA + orden, γ_XX[l] og Γ_XX(f), lineær prediksjon (Normal-/Yule–Walker-likninger), prediksjonsfeileffekt σ_f², whitening-filter, Wiener-filterprinsipp |
| **4** | Sampling, rate-conversion and DFT/FFT | 14–18 p | Samplingsteorem/Nyquist/aliasing, skisse av spektra, desimering/interpolasjon/rate-konvertering (I/D), DFT-størrelser, radix-2 FFT-lengde, (overlap-add, vindu/lekkasje) |

Totalt ~72–83 poeng fordelt på 4 oppgaver med 3–5 deloppgaver hver
(deloppgavevekt oppgitt i parentes ved oppgavestart).

### Utvikling 2015 → 2017

- **Foreleserbytte** (Johnsen → Werner) endret *stilen*, ikke *strukturen*.
  Werner-settene (2016, 2017) er noe mer «vis at …»-skaffoldede (svaret er
  oppgitt, studenten skal utlede det); Johnsen-settet (2015) har mer åpne
  «finn/forklar»-formuleringer.
- **Hjelpemiddel:** 2015 oppgir «D – **No calculators** allowed»; 2016/2017
  oppgir «D – Basic **calculator allowed**». Dagens emneside bekrefter enkel
  kalkulator. Tallene i oppgavene er uansett håndregnbare brøker
  (⅓, ½, ¼ …) — kalkulator er ikke avgjørende.
- **Del 4-vekting flyttet seg:** 2015 la stor vekt på DFT/FFT-teori
  (overlap-add, radix-2, vindu/lekkasje). 2016/2017 dreide del 4 mot
  **multirate / rate-konvertering** (I/D-brøkkonvertering, spekterskisser) og
  nedtonet ren FFT-teori. En bok bør dekke **begge** grenene av del 4.
- **Wiener-filter:** eksplisitt i 2015 og des-2017, nedtonet til whitening-
  filter i 2016/aug-2017. Dekk begge.

### Sjanger

Ingen flervalg. Eksamen er **regnetung med utledninger**, ispedd korte
konseptuelle forklaringer og mange **skisser** (pol-nullpunktdiagram,
spektra, filterstrukturer/blokkskjema). Se del 3 for balansen.

---

## 2. Temafrekvens-tabell (n = 4 sett, 2015–2017)

Score = antall sett der temaet inngår i minst én deloppgave. «Gjenganger» =
opptrer i ≥¾ av settene.

| # | Tema | Score | Gjenganger | Hvor |
|---|------|-------|-----------|------|
| 1 | Pol-nullpunkt, ROC, stabilitet, minimum-/lineær fase | **4/4** | ★★★ | Oppg 1 |
| 2 | Kaskadeform H₁·H₂ (faktorisering av poler) | **4/4** | ★★★ | Oppg 1 |
| 3 | Parallellform H₃+H₄ (delbrøk / residyregning) | **4/4** | ★★★ | Oppg 1 |
| 4 | Invers z-transform → impulsrespons h[n] | **4/4** | ★★★ | Oppg 1 |
| 5 | Differanselikning ↔ systemfunksjon H(z) | **4/4** | ★★★ | Oppg 1 |
| 6 | FIR vs. IIR-klassifisering / filtertype (LP/HP/BP/AP) | 3/4 | ★★★ | Oppg 1 |
| 7 | Filterstrukturer DF-II / kaskade / parallell (tegne) | **4/4** | ★★★ | Oppg 2 |
| 8 | Fixed-point avrundingsstøy: σ_z² = σ_e²·r_hh[0] = σ_e²·Σh²[k] | **4/4** | ★★★ | Oppg 2 |
| 9 | Sammenlikne strukturer på støy / velge beste | 3/4 | ★★★ | Oppg 2 |
| 10 | Skalering mot overflow (Σ\|h[n]\|) + S/N-tap | 2/4 | ★★ | Oppg 2 (fullt i 2015) |
| 11 | AR/MA/ARMA-klassifisering + modellorden | **4/4** | ★★★ | Oppg 3 |
| 12 | γ_XX[l] og Γ_XX(f) fra hvit støy gjennom H(z) | **4/4** | ★★★ | Oppg 3 |
| 13 | Lineær prediksjon: beste AR(1)/AR(2) via Normal-likninger | **4/4** | ★★★ | Oppg 3 |
| 14 | Prediksjonsfeileffekt σ_f² (Yule–Walker, n=0) | **4/4** | ★★★ | Oppg 3 |
| 15 | Whitening-filter H₂ (invers av formende filter) | 2/4 | ★★ | Oppg 3 (2016, aug-17) |
| 16 | Wiener-filterprinsipp (blokkskjema + MSE) | 2/4 | ★★ | Oppg 3 (2015, des-17) |
| 17 | Samplingsteorem / Nyquist / aliasing | **4/4** | ★★★ | Oppg 4 |
| 18 | Skisse av spektrum X(f) til samplet signal (periodisk) | **4/4** | ★★★ | Oppg 4 |
| 19 | Multirate: desimering / interpolasjon / rate-konvertering I/D | **4/4** | ★★★ | Oppg 4 |
| 20 | DFT-størrelser (lineær konv.: N ≥ M+L−1) + radix-2-lengde | 2/4 | ★★ | Oppg 4 (2015, des-17) |
| 21 | Overlap-add frekvensdomene-filtrering | 1/4 | ★ | Oppg 4 (2015) |
| 22 | Vindu / spektral lekkasje / oppløsning-avveining | 1/4 | ★ | Oppg 4 (2015) |
| 23 | Radix-2 FFT-prinsipp (butterflies, kompleksitet) | 1/4 | ★ | Oppg 4 (2015) |
| 24 | Definisjoner: stabilitet/kausalitet/tidsinvarians | 1/4 | ★ | Oppg 1 (des-17) |
| 25 | Allpass-filter (\|H(f)\|²=1) / inverst filter H_I(z) | 2/4 | ★★ | Oppg 1 (des-17, aug-17) |
| 26 | WSS/ergodisitet/korttidsstasjonaritet (definisjoner) | 2/4 | ★★ | Oppg 3 (2015, def.) |

**Tolkning:** Temaene 1–5, 7–8, 11–14, 17–19 er **hele ryggraden** (4/4). En
student som mestrer disse fjorten mønstrene har dekket ~80 % av poengsummen i
et hvilket som helst av settene. Temaene 15, 16, 20, 25 er høyverdig
beredskap (2/4). Temaene 21–24 er «engangs»-innslag (typisk Johnsen-2015)
som bør dekkes for bredde, men ikke drilles like hardt.

---

## 3. Oppgavesjangre: regne vs. forklare

Grov poengfordeling på tvers av de fire settene (skjønnsmessig, basert på
deloppgaveformuleringer):

| Sjanger | Andel | Kjennetegn |
|---------|-------|-----------|
| **Utledning / «vis at»** | ~40 % | Svaret er oppgitt (impulsrespons, γ_XX, spekter). Studenten må komme dit med gyldige steg. Poeng gis for *veien*, ikke fasiten. |
| **Ren regning** | ~30 % | Delbrøk/residy, variansregning Σh²[k], løse Normal-likninger for a₁,a₂, σ_f², DFT-lengder, skaleringsfaktor. |
| **Skisse** | ~15 % | Pol-nullpunktdiagram + ROC, filterstruktur (DF-II/kaskade/parallell) med støykilder, spektra (samplet/desimert/rate-konvertert), Wiener/rate-konv.-blokkskjema. |
| **Konseptuell forklaring / definisjon** | ~15 % | Definer AR/MA/ARMA, stabilitet/kausalitet/tidsinvarians, forklar Wiener-prinsipp, overlap-add, radix-2, aliasing, lekkasje-avveining. |

**Netto:** ~70 % regning/utledning, ~30 % forklaring/skisse. **Ingen
flervalg.** Dette er en klassisk regnetung realfagseksamen — nær
fys1120/tfy4115-familien i form, men *enda mer maldrevet*: de samme fire
oppgavefamiliene går igjen sett etter sett med bare tallbytte.

**Viktig didaktisk poeng:** fordi svaret ofte er *oppgitt* («show that h[n] =
…»), er dette en eksamen der man kan **selvsjekke** underveis. Boka bør
utnytte dette: hver fullførte utledning ender på et rent, oppgitt resultat.

---

## 4. Sensorkrav (fra 2015-fasiten — den eneste lesbare)

Fasiten fra des-2015 (Johnsen) er eksplisitt om standarden og gir uvanlig god
innsikt i sensorpraksis:

1. **Begrunnelse kreves for alle klassifiseringspåstander.** «State the reason
   for your answers.» Å svare «ja, stabilt» uten å vise at *polene ligger
   innenfor enhetssirkelen* gir ikke full uttelling. Samme for minimum fase
   (poler **og** nullpunkt innenfor), kausalitet (ROC utenfor ytterste pol).
2. **Alle steg må vises i «vis at»-oppgaver.** Fasiten fører delbrøk-
   oppspaltning, residyregning og indeksdeling (par/odde n) eksplisitt.
3. **Pragmatisk om valgfri rigor.** Fasiten sier direkte at støykilder i
   strukturtegningene «is not default required from the students», og at et
   ekstra avrundingsstøyledd etter skalering «most previous exam solutions
   have ignored … both kind of answers should be accepted». Sensor belønner
   korrekt hovedresonnement, ikke pedantisk fullstendighet.
4. **Flere gyldige veier godtas.** Fasiten noterer alternative
   utregningsmåter (f.eks. r_hh[0] «alternatively … by squaring and summing»)
   som likeverdige.
5. **Kombinatorisk/telle-resonnement premieres.** F.eks. «hvor mange
   kaskadestrukturer kan du velge blant?» → fasiten resonnerer seg fram til
   *ti* alternativer. Studenten må argumentere, ikke bare pugge ett svar.
6. **Deloppgavevekting styrer innsatsen.** Vekt (3+5+4+4+6 osv.) er oppgitt
   ved hver oppgave; tunge deloppgaver er de med mest regning.

**(utledet, 2016/des-2017):** Werner-settene gir ofte svaret på forhånd og
ber om utledning — her ligger poengene enda tydeligere i *metoden*. Skisse-
kvalitet (riktig plassering av poler/nullpunkt, riktig periodisitet og
skalering i spektra) teller selvstendig.

### Hva som skiller karakternivåene (utledet)

- **Bestå:** setter opp H(z)/differanselikning riktig, faktoriserer, gjør
  delbrøk, klassifiserer FIR/IIR og AR/MA/ARMA, kjenner samplingsteoremet.
- **Middels → god:** fører avrundingsstøy-varians for minst én struktur
  korrekt, løser Normal-likningene for AR(2), skisserer rate-konvertering
  riktig, begrunner stabilitet/fase med polkriterier.
- **Toppkarakter:** behersker skalering/overflow + S/N-sammenlikning på tvers
  av strukturer, ser at H₁ er allpass og utnytter det, håndterer par/odde-
  indeksdeling i Σ\|h[n]\|, velger korrekt radix-2-lengde ut fra lineær-
  konvolusjons-kravet, og forklarer whitening/Wiener presist.

---

## 5. Typiske feil (fra 2015-fasitens advarsler + utledet)

Fasiten kommenterer flere fallgruver direkte; resten er utledet av
oppgavenes struktur:

1. **Nullpunkt på enhetssirkelen ≠ minimum fase.** 2015-fasiten fremhever at
   H₁ har nullpunkt *på* enhetssirkelen (z=1) og derfor **ikke** har minimum
   fase, selv om polen er innenfor. Klassisk feil: å blande sammen stabilitet
   (poler innenfor) med minimum fase (poler **og** nullpunkt innenfor).
2. **Feil telling av avrundingsstøykilder** per struktur (DF-II har færre
   multiplikatorer enn parallell; hver bidrar σ_e²·Σh_i²).
3. **Feil delfilter i støyregningen.** Variansen skal integreres/summeres over
   impulsresponsen **fra støyinjeksjonspunktet til utgangen**, ikke fra
   inngangen. Lett å bruke h[n] i stedet for h_i[n].
4. **Skalering: sjekke feil sum-node.** Alle summasjonsnoder må vurderes;
   skaleringsfaktoren bestemmes av den *største* Σ\|h\| blant nodene, ikke
   utgangsnoden per automatikk.
5. **Fortegn/indeksfeil i par/odde-splitting.** For alternerende responser
   som (−½)ⁿ krever Σ\|h[n]\| deling i n=2m og n=2m+1 — en hyppig regnefeil.
6. **Delbrøk-/residyfeil:** fortegn på A og B, glemme z⁻¹-ledd i teller.
7. **ROC-forvirring** for kausalt vs. antikausalt/inverst filter (inverst
   filter bytter poler og nullpunkt → ny ROC og ny stabilitetsvurdering).
8. **Aliasing-resonnement:** feil Nyquist-grense ved desimering; glemme at
   nedsampling med D krever lavpassfilter først for å unngå aliasing.
9. **DFT-lengde:** glemme at lineær konvolusjon krever N ≥ M+L−1 før man
   runder opp til nærmeste toerpotens for radix-2.
10. **Yule–Walker/Normal-likninger:** forveksle de to (Normal for n=1…p gir
    koeffisientene; autokorrelasjonslikningen ved n=0 gir σ_f²), og glemme
    fortegnskonvensjonen a₀=1.

---

## 6. Formel-, transform- og notasjonsapparat

### Utdelt formelark (⚠️ TILGJENGELIG PÅ EKSAMEN)

Et to-siders formelark følger hvert sett. Det inneholder:

- **A. Geometriske summer:** Σαⁿ, Σ(n+1)αⁿ, endelige og uendelige varianter.
- **B. Lineær konvolusjon:** y=h∗x; Y(z)=H(z)X(z); Y(f)=H(f)X(f);
  Y(k)=H(k)X(k).
- **C. Transformer:** z-transform, DTFT, DFT, IDFT (definisjonene).
- **D. Samplingsteoremet:** X(f)=F_s·Σ X([f−k]F_s).
- **E. Autokorrelasjon, energispekter, Parseval:** r_hh[l], S_hh(z)=H(z)H(z⁻¹)
  ⇒ S_hh(f)=\|H(f)\|², E_h=r_hh[0]=Σh²[n]=∫\|H(f)\|²df.
- **F. Multirate:** desimering, interpolasjon, rate-konvertering (I/D).
- **G. Effekttetthetsspekter / Wiener–Khintchin:** Γ_XX(f)=DTFT{γ_XX[l]}.
- **H. Yule–Walker og Normal-likninger** (med a₀=1).
- **I. Tabell over vanlige z-transformpar.**

**Konsekvens for boka:** disse trenger studenten *ikke pugge* — men må kunne
**anvende raskt og riktig**. Boka bør trene *bruk* (hvilken formel når,
korrekt indeksering) mer enn utledning av selve formlene. Merk at den utdelte
z-transformpar-tabellen ikke lot seg tekstutvinne (bilde) — reproduser en
tilsvarende standardtabell (Proakis) og verifiser mot gjeldende ark.

### Må beherskes aktivt (ikke på arket / krever ferdighet)

- Faktorisering av 2. ordens H(z) til kaskade (finne poler p₁,p₂).
- Delbrøk-/residyoppspaltning til parallellform, med impulsrespons.
- Pol-nullpunkt-analyse: ROC, stabilitet, minimum/lineær fase, allpass.
- Konvertering differanselikning ↔ H(z) ↔ impulsrespons begge veier.
- Avrundingsstøy-varians per struktur (bruk r_hh[0]/Σh²) + skalering.
- Oppsett og løsning av Normal-likningene for AR(1)/AR(2), + σ_f².
- Skissere spektra ved sampling, desimering, interpolasjon, rate-konv.
- Bestemme DFT-/radix-2-lengder ut fra lineær-konvolusjons-krav.

### Notasjon boka bør speile (som i settene)

x[n], h[n], y[n]; H(z), H(f); ROC; γ_XX[l] (autokorrelasjon, stokastisk),
r_hh[l] (autokorrelasjon, deterministisk energi); Γ_XX(f) (effekttetthet);
σ_e² (avrundingsstøy), σ_f² (prediksjonsfeileffekt), σ_W² (hvit-støy-effekt);
normalisert frekvens f=F·T_x; DF-II; AR(p)/MA(q)/ARMA(p,q). Bruk **engelsk
fagterminologi** (pole-zero, minimum phase, whitening filter, upsampling,
decimation) parallelt med norsk, siden eksamen er på engelsk.

---

## 7. Prognose og prioritering

### Nivå 1 — trygg kjerne (4/4 i arkivet, bygg boka her)

Disse **vil** komme, i en eller annen tallinnpakning:

1. **Oppg 1-familien:** differanselikning/H(z) → poler → kaskade + parallell
   (delbrøk) → impulsrespons → ROC/stabilitet/fase-klassifisering.
2. **Oppg 2-familien:** tegn DF-II/kaskade/parallell → avrundingsstøy-varians
   σ_z²=σ_e²Σh² per struktur → sammenlikn.
3. **Oppg 3-familien:** hvit støy gjennom H → AR/MA/ARMA + orden → γ_XX/Γ_XX →
   beste AR(1)/AR(2) via Normal-likninger → σ_f².
4. **Oppg 4-familien:** samplingsteorem/aliasing → skisse spektra → multirate
   (desimering/interpolasjon/rate-konvertering I/D).

Hver av disse fortjener et eget kapittel med **fullt gjennomregnede
mønstereksempler** som gjenbruker de samme brøkfiltrene (½, ⅓, ¼-familien)
som settene faktisk bruker.

### Nivå 2 — dekk grundig, høyverdig beredskap (2/4)

- Skalering mot overflow + S/N-sammenlikning på tvers av strukturer (fullt
  utviklet bare i 2015, men høy poengverdi og krevende).
- Whitening-filter og Wiener-filterprinsipp (MSE, blokkskjema).
- Allpass-filter og inverst filter H_I(z) (ROC-bytte).
- DFT-størrelser og radix-2-lengdevalg (lineær konvolusjon N ≥ M+L−1).

### Nivå 3 — bredde (1/4, typisk Johnsen-2015)

- Overlap-add frekvensdomene-filtrering (+ multiplikasjonstelling vs. tid).
- Vindu / spektral lekkasje / oppløsning-avveining (rektangulært vs. tapered).
- Radix-2 FFT-prinsipp (butterflies, N²→(N/2)log₂N).
- Formelle definisjoner (stabilitet/kausalitet/tidsinvarians;
  WSS/ergodisitet/korttidsstasjonaritet).

Disse er lav-frekvente, men billige å dekke og gir trygghet mot «det ene
konseptspørsmålet». Ikke drill dem like hardt som nivå 1.

### Konkret settprognose

Et fremtidig TTT4120-sett vil med svært høy sannsynlighet ha **fire
oppgaver** som speiler tabellen i del 1, ~18/18/16/16 poeng, med:
- Oppg 1: et 1.–2. ordens IIR-filter gitt som differanselikning eller H(z),
  med kaskade + parallell + impulsrespons + pol-nullpunkt/fase-analyse.
- Oppg 2: fixed-point-implementasjon av *samme* filter, støyvarians for 2–3
  strukturer + sammenlikning (og muligens skalering).
- Oppg 3: *samme* filter som formende filter for hvit støy → AR-modellering +
  prediksjon + (whitening eller Wiener).
- Oppg 4: samplingsteorem + multirate-skisser, evt. med DFT/FFT-lengder.

Merk **gjenbruket av ett filter gjennom oppg 1→2→3** (tydelig i 2015/des-17):
boka bør etterlikne dette — ett gjennomgående eksempelfilter som analyseres,
implementeres og brukes til modellering på rad.

---

## 8. Anbefalt arketype

**Regnetung problemløsnings-arketype (fys1120/tfy4115-familien), men i en
ekstra sterk «fire faste oppgavefamilier»-drillvariant.**

Begrunnelse: eksamen er blant de mest maldrevne i porteføljen. I stedet for
å organisere boka rent tematisk, bør den organiseres rundt de **fire
tilbakevendende oppgavefamiliene**, med teori vevd inn der den trengs for å
løse familien. Konkret:

- **Teoridel (kompakt):** diskret-tids-signaler/-systemer, LTI/konvolusjon,
  z-transform/ROC, DTFT, poler/nullpunkt/stabilitet/fase — bygget som
  *verktøykasse* for oppgavefamiliene, ikke som mål i seg selv.
- **Fire familiekapitler** (= de fire eksamensoppgavene), hvert med:
  (a) minimalteorien familien krever, (b) 3–5 fullt gjennomregnede
  mønstereksempler med *oppgitt sluttresultat* (selvsjekkbart, slik settene
  gjør det), (c) et sett med eksamensnære øvingsoppgaver med full løsning.
- **Ett gjennomgående eksempelfilter** som følger leseren fra pol-nullpunkt
  (fam. 1) → implementasjon/støy (fam. 2) → stokastisk modellering (fam. 3),
  slik de reelle settene gjør.
- **«Formelark-bevisst» drill:** siden arket deles ut, tren *anvendelse og
  rask oppslags-riktig bruk* framfor memorering.
- **Skisse-trening som egen ferdighet:** pol-nullpunktdiagram, spektra og
  filterstrukturer bør ha egne, graderte tegneoppgaver.

Dette gir en bok som er direkte eksamensrettet mot den observerte malen, med
tydelig progresjon og høy grad av selvsjekk — passende for et lite, men svært
konsistent arkiv.

---

## Kildeliste

- Eksamensarkiv (NTNU TTT4120), lest i sin helhet:
  - Ordinær eksamen des. 2015 — oppgaver **+ fullstendig løsningsforslag**
    (Magne H. Johnsen).
  - Ordinær eksamen des. 2016 — oppgaver (løsning kun som skannet bilde,
    ikke tekstutvinnbar).
  - Utsatt eksamen aug. 2017 — oppgaver (ingen løsningsfil).
  - Ordinær eksamen des. 2017 — oppgaver (løsning kun som skannet bilde,
    ikke tekstutvinnbar).
- NTNUs emneside TTT4120 (status/eksamensform verifisert 2026-07-08).
- Fagbeskrivelse: `fagbeskrivelser-samlet 2.md` (TTT4120-seksjonen).
- Antatt pensum: Proakis & Manolakis, _Digital Signal Processing_ (verifiser).
- Forbilder for format: `tma4121/EKSAMENSANALYSE.md` (transform-/regnefag) og
  fys1120/tfy4115-analysene (regnetung fysikk).

> **Evidensforbehold:** Bare ett av fire løsningsforslag var lesbart. Alle
> vurderinger av sensorpraksis hviler tungt på 2015-fasiten; slutninger om
> 2016/2017-fasit er merket **(utledet)**. Arkivet stopper i 2017 — verifiser
> dagens vekting (særlig DFT/FFT vs. multirate i oppg 4, og Wiener/whitening i
> oppg 3) mot nyere sett hvis de blir tilgjengelige.

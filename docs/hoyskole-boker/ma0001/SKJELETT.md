# Bokskjelett: MA0001 Brukerkurs i matematikk A (NTNU) — eksamensrettet lærebok

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
> (NTNUs MA0001-arkiv, 63 PDF-er 2007–2025 fra Trondheim + Gjøvik; ~19 løsningsforslag
> lest grundig, de siste ~8 årenes oppgavesett grundig, eldre skummet).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her.
> Format-forbilder: `../tma4110/SKJELETT.md` (samme institusjonsfamilie, DNA-regnefag,
> del-basert nummerering, kvotesammendrag) og `../ma0301/SKJELETT.md` (NTNU-grunnkurs,
> «alt begrunnes»-føring).
>
> **Viktigste kalibrering:** MA0001 er et **regnekurs** — et service-/brukerkurs i
> én-variabel kalkulus for ingeniør-/naturvitenskapsstudenter, med **høy praktisk
> regnevekt og lav bevisvekt**. Boka kalibreres mot den **nyeste malen** (des-2024→,
> under Eirik Spets): **~11 likt vektede oppgaver over 4 timer, hjelpemiddelkode D
> (enkel kalkulator) + utdelt 5-siders formelsamling**. Fem søyler bærer eksamen:
> **derivasjon** (~100 %), **grenser + L'Hôpital** (~95 %), **integrasjon** (~95 %),
> **Newtons metode** (~80 %) og **Taylorpolynom/lineær tilnærming** (~80 %) — pluss to
> **helt nye pensumtilskudd** som opptrer i alle tre nyeste settene: **geometriske
> rekker** og **Taylorrekker** (0 % før des-2024, 3/3 sett etter). Boka dekker
> **INGEN** lineær algebra, komplekse tall, flervariabel, differensiallikninger eller
> induksjon (analysens §6 — ikke i arkivet).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `ma0001` |
| Tittel | **MA0001 Brukerkurs i matematikk A** |
| Level | `'Høyskole'` |
| Institusjon | Norges teknisk-naturvitenskapelige universitet (NTNU) |
| Arketype | Regnefag (regne-/prosedyre-/modelltungt; lav bevisvekt; formelsamling utdelt) |
| Antall kapitler | **31** (1 eksamenskart + 26 tema/drill + 4 øvingseksamener) + 28 prøvekapitler |
| Estimert totaltid | **~1 830 min ≈ 31 timer** |
| Quiz totalt | **577** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** MA0001 er NTNUs **brukerkurs i kalkulus** — matematikk som
**verktøy** for ingeniør- og naturvitenskapsstudenter, ikke som bevisfag. Eksamen er
en **4-timers skriftlig skoleeksamen** med **~11 likt vektede oppgaver**, karakter
A–F, **hjelpemiddelkode D** (enkel kalkulator) og en **utdelt 5-siders formelsamling**.
Det gir en klar profil: **studenten skal hente formler og anvende dem korrekt, ikke
pugge dem** — boka trener oppsett, regneteknikk og modellering. Fem søyler treffes
praktisk talt hvert sett: (1) **derivasjon** med regelvalg (produkt/brøk/kjerne,
logaritmisk, inverse trig, derivert i punkt) — ~100 %, alltid åpning; (2) **grenser +
L'Hôpital** med formidentifikasjon — ~95 %; (3) **integrasjon** (standard, substitusjon,
delvis/I-metode) — ~95 %; (4) **Newtons metode** («finn skjæringspunkt», iterer, riktige
desimaler) — ~80 %; (5) **Taylorpolynom / lineær tilnærming** (grad 1–3, anvendt) —
~80 %. Rundt disse ligger **eksponentiell modellering** (avkjøling/vekst/henfall,
halveringstid), **areal og omdreiningsvolum**, **implisitt derivasjon + tangent**,
**kontinuitet/deriverbarhet i punkt** (differansekvotient), **optimering med figur**,
**numerisk integrasjon med feilestimat**, **skjæringssetningen** (kursets eneste faste
«bevis»), og det ferske pensumtilskuddet: **geometriske rekker**, **Taylorrekker** og
**harmoniske svingninger**. Sensorregelen som preger alt: **alle svar på skriftlige
oppgaver skal begrunnes** med nok mellomregning til at framgangsmåten er tydelig; **hent
formelen fra formelarket og vis oppsettet**; **identifiser ubestemt form før L'Hôpital**;
**gi svar med benevning, riktig antall desimaler og konklusjonssetning**.

### 1.5 Kritiske stil- og notasjonsregler (gjelder HELE boka)

1. **Alle svar på skriftlige oppgaver begrunnes; vis nok mellomregning til at
   framgangsmåten er tydelig.** Ordrett NTNU-standardinstruks på hvert sett. Riktig
   sluttsvar uten føring gir ikke full uttelling. Hvert løsningsforslag skrives som
   **A-besvarelse**: mellomregning ledd for ledd, oppsett vist (hvilken regel/formel),
   verbal konklusjonssetning, sluttsvar markert **med benevning** (kroner, meter, år,
   mg) og **riktig antall desimaler** når oppgaven ber om det. På **flervalg**
   (Inspera-delpunkter i 2025-malen) kreves derimot **ingen** begrunnelse, og vedlagt
   utregning vurderes ikke.

2. **Formelsamlingen er utdelt (5 sider) — hent formelen og anvend den.** Kravet er
   **anvendelse, ikke memorering**: lineær tilnærming, derivert av invers, Newtons
   formel, trapesfeil-formelen, Taylorformelen og gjennomsnittsverdi ligger på arket.
   Hvert kapittel som bruker en slik formel skal (a) **gjengi formelen slik den står på
   arket** (studenten skal kjenne den igjen), (b) vise **korrekt oppsett** (hva som
   settes inn hvor), og ha en egen **«Fra formelarket»-note**. Boka trener *henting +
   anvendelse*, ikke pugging. (Dette er motsatt av kode E-fag som tma4110.)

3. **Identifiser den ubestemte formen FØR L'Hôpital.** Fasitene skriver formen
   (`[0/0]`, `[∞/∞]`) før hver anvendelse. L'Hôpital gjelder **kun** på $0/0$ og
   $\infty/\infty$; $0\cdot\infty$ omskrives til brøk og $\infty-\infty$ til fellesnevner
   **først**. «Sett inn $\infty$» godtas ikke i uegentlige integraler — grensen føres med
   **lim-notasjon**.

4. **Skjæringssetningen skal navngis** (Intermediate Value Theorem) med forutsetningene
   (kontinuitet + fortegnsskifte) når den brukes til eksistens. Definer $f=$ venstre$-$høyre,
   vis kontinuitet, finn to punkter med motsatt fortegn, navngi setningen, konkluder.
   Dette er kursets **eneste faste «bevis»** — føres alltid komplett.

5. **Deriverbarhet i punkt kreves vist med differansekvotienten**
   $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ når det etterspørres — **ikke** ved å derivere
   uttrykket og sette inn. Venstre- og høyregrense av kvotienten regnes **hver for seg**;
   klassisk resultat er at en funksjon kan være kontinuerlig men ikke deriverbar (knekk).

6. **Notasjonskonvensjoner (speiler eksamenssettene):** $T_1$/$T_n$ for lineær
   tilnærming / Taylorpolynom; $f^{-1}$ for invers; $y'$ og $\frac{dy}{dx}$ brukes om
   hverandre (begge godtatt); $\bar f=\frac{1}{b-a}\int_a^b f$ for gjennomsnittsverdi;
   $M$ for $|f''|$-skranke i feilestimat; $\lambda$ for vekst-/henfallsrate; $k$ for
   rekke-kvotient. Standardgrenser og formler skrives slik de står på formelarket.

7. **Eksakte svar der oppgaven tillater det, oppgitt antall desimaler ellers.** Skriv
   $\sqrt3$, $\frac{\pi}{4}$, $\ln 2$ når det er eksakt; når oppgaven ber om «tre
   desimaler» (typisk Newton) avrundes korrekt til slutt (ikke underveis). **Feil antall
   desimaler og manglende benevning trekker** i det nye regimet.

8. **Modelleringsoppgaver føres rad for rad med presisert antagelse.** Sett opp modellen
   (hvilken formel, hvilke to datapunkter), bestem parametrene, svar på det spurte, gi
   **konklusjonssetning med benevning**. Nye instrukser oppfordrer til å **skrive ned
   rimelige antagelser** ved tolkning/avgrensing.

9. **Alternative løsninger honoreres.** Derivert av invers via formel *eller* via eksplisitt
   invers; Newton *eller* fikspunktiterasjon; delvis integrasjon er lovlig selv der det
   «ikke er pensum». Der et metodevalg er faglig standard snarere enn ordrett dokumentert,
   merkes det «⚠️ metode = faglig standard».

10. **Ærlighet om format og arkiv.** (a) **Formatet har skiftet flere ganger** og henger
    på faglærer: rene langsvarssett (2007–2020) → «6 flervalg + 6 skriftlige»-mal
    (2022–2024) → dagens «~11 likt vektede oppgaver» (des-2024→). Boka kalibreres mot den
    **nyeste** malen, men beholder flervalgs-repertoaret (funksjonsforståelse) fra 2022–24.
    (b) **Pensumtilskudd helt nylig:** geometriske rekker + Taylorrekker (0 % før des-2024,
    3/3 sett etter) og harmoniske svingninger (ny egen oppgave 2023→) — behandles som
    **nivå 1 for kommende eksamener** *(verifiser mot siste sett og gjeldende faglærer)*.
    (c) **Ikke i arkivet** (analysens §6): lineær algebra, komplekse tall, flervariabel,
    differensiallikninger, induksjon, ε-δ-bevis — boka dekker dem IKKE *(verifiser mot
    gjeldende emnebeskrivelse før endelig avgrensing)*.

### 1.6 Hjelpemiddel-kalibrering og kodeforbehold (skal gjengis i Del 0)

- **Hjelpemiddel-kalibrering (kode D + formelsamling):** MA0001 trenes mot **hjelpemiddel-
  kode D — enkel kalkulator** pluss en **utdelt 5-siders formelsamling**. Konsekvens:
  boka trener **oppsett og anvendelse**, ikke pugging av formler. Hvert formeltunge kapittel
  har en «Fra formelarket»-note som gjengir formelen slik studenten møter den. Flashcards
  brukes derfor til **definisjoner, prosedyre-oppskrifter og formidentifikasjon** (når og
  hvordan en formel brukes), ikke ren formel-pugging — derfor er flashcard-tettheten
  moderat (560, nær gulvet) sammenlignet med kode E-fag.
- **Kodeforbehold:** Emnet går **både høst og sommer/kontinuasjon**, og formatet henger på
  faglærer. Den nyeste malen (des-2024→, ~11 likt vektede oppgaver, kode D + formelark) er
  den beste prediktoren, men et lærerskifte kan endre vektingen. **Studenten skal sjekke
  gjeldende emneside og siste tilgjengelige sett** før endelig kalibrering — særlig for om
  rekker/Taylorrekker/harmoniske svingninger befestes som faste sjangre. Bruk `(verifiser)`
  der noe er usikkert.
- **Ikke dekket her (bevisst avgrensning):** lineær algebra, komplekse tall, flervariabel
  kalkulus, differensiallikninger, induksjon — tilhører andre NTNU-emner (TMA-serien) og
  belegges ikke av MA0001-arkivet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): funksjonsgrunnlaget (definisjons-/
verdimengde, invers, kontinuitet) er språket; grenser er inngangen til derivasjon;
derivasjon (regelvalg + implisitt + anvendelser) er den første store søylen; integrasjon
er den andre; numeriske metoder (Newton, trapes) og tilnærming (Taylor) bygger på begge;
rekker (geometrisk + Taylor) er den ferske bolken; eksamenstreningen er sist. **Frekvensen
styrer omfanget**, ikke rekkefølgen: ~80–100 %-søylene får teori + eget drillkapittel;
~40–65 %-temaer får ett–to kompakte kapitler; ~10–20 %-temaer får kort behandling merket
«bør kjenne til». Seksjonstitler (blir `sectionNames` i metadata):

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskartet, formelarket og føringen | 1 | Prioriteringsverktøyet + kode D/formelark + føringskrav; kjerne i studieguiden. |
| 1 | Funksjoner, grenser og kontinuitet | 4 | Funksjonsforståelse (flervalg ~55 %) + grenser/L'Hôpital ~95 % + kontinuitet/deriverbarhet ~65 % → grunnlag + én perfekt-søyle (grenser) → teori + drill. |
| 2 | Derivasjon og dens anvendelser | 6 | Derivasjon ~100 % (bærebjelke) + implisitt+tangent ~50 % + optimering ~55 % + relaterte rater ~40 % → PERFEKT → teori + drill + anvendelser. |
| 3 | Integrasjon | 5 | Integrasjon ~95 % + areal/volum ~65/50 % + uegentlige ~35 % + fundamentalteorem ~35 % → PERFEKT → teori + drill + anvendelser. |
| 4 | Numeriske metoder og tilnærming | 4 | Newton ~80 % + Taylor/lineær tilnærming ~80 % + trapes med feilestimat ~40 % → PERFEKT (Newton, Taylor) → teori + drill. |
| 5 | Rekker og svingninger | 3 | Geometriske rekker + Taylorrekker (NY, 3/3 nyeste sett) + harmoniske svingninger (NY 2023→) → nivå 1 for kommende eksamener → full dekning. |
| 6 | Anvendt modellering | 2 | Eksponentiell modellering ~65 % (avkjøling/vekst/henfall) + samlet modellerings-drill → nivå 2, men fast tekstoppgave. |
| 7 | Eksamenstrening | 4 | Føringsstandard + funksjonsforståelse-flervalgsdrill + 4 komplette øvingseksamener (~11 likt vektede oppgaver, kode D + formelark). |

**Avvik fra DNA-malen (dokumentert):**

1. **31 kapitler — innenfor DNA-taket (20–35), i nedre-midtre sjikt.** MA0001 er et
   **rent regnefag med få begreper** og utdelt formelsamling: bredden er reell (5 søyler +
   ny rekke-bolk), men hvert tema er prosedyredrevet, ikke definisjonstungt. Kvotene ligger
   derfor nær gulvet (577 quiz / 560 flashcards) — i tråd med PRODUKSJONSLOYPE-lærdommen om
   at «rene regnefag med få begreper kan ligge nær 500», mens kode D + formelark senker
   flashcard-behovet ytterligere (formlene pugges ikke).

2. **Fire drillkapitler i temadelene** (1.4, 2.6, 3.5, 4.4) i stedet for i siste del:
   de fire søylene (grenser, derivasjon, integrasjon, Newton/Taylor) drilles rett etter
   teorien. Del 7 beholder føringsstandarden, en egen **funksjonsforståelse-/flervalgsdrill**
   (7.2) og de fire komplette øvingseksamenene.

3. **Fire øvingseksamener (7.3–7.6), ikke tre.** Fordi formatet har skiftet flere ganger,
   trenes to sett mot den **nyeste malen** (~11 likt vektede oppgaver, kode D + formelark),
   ett mot **2022–24-malen** (6 flervalg + 6 skriftlige — funksjonsforståelse-flervalg
   beholdes), og ett **rendyrket ferskt** sett med rekker/Taylorrekker/harmoniske
   svingninger. Til sammen dekker de sjangrene A–Q.

4. **Rekker + svingninger får en egen del (Del 5) tross lav historisk frekvens.** Geometriske
   rekker og Taylorrekker har **0 % før des-2024** men **3/3 nyeste sett**, og harmoniske
   svingninger er ny egen oppgave (2023→). Analysen (§7) sier eksplisitt at disse skal
   behandles som **nivå 1 for kommende eksamener under gjeldende faglærer** — de får derfor
   full teori + oppgaver, ikke kompakt kjenne-behandling. Markert `(verifiser)` fordi
   befestingen henger på faglærer.

5. **Funksjonsforståelse (def./verdimengde, injektiv/surjektiv, invers) ligger i Del 1
   (grunnlag) + egen flervalgsdrill i Del 7.** Den dominerte flervalgsblokken 2022–24 (~55 %)
   og er delvis videreført som Inspera-flervalg i 2025. Den er faglig grunnleggende (bygger
   opp mot alt annet) og plasseres derfor tidlig, men drilles separat fordi flervalgs-
   sjangeren (rask gjenkjenning uten begrunnelse) er en egen ferdighet.

6. **Ingen komplekse tall / lineær algebra / ODE / induksjon** (stilregel 10c). Til forskjell
   fra bevistunge grunnkurs (MAT1100, TMA4110) er MA0001 strengt én-variabel kalkulus. Boka
   dekker dem IKKE.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–Q) refererer til
oppgavetype-katalogen i analysen §3, gjengitt i bokas Del 0: **A** derivasjon med regelvalg
(produkt/brøk/kjerne, logaritmisk, derivert i punkt), **B** grenseverdier + L'Hôpital
(alle ubestemte former), **C** integrasjon (standard/substitusjon/delvis/I-metode), **D**
Newtons metode (finn skjæringspunkt, iterer, startpunkt-drøfting), **E** Taylorpolynom /
lineær tilnærming (grad 1–3, anvendt), **F** kontinuitet + deriverbarhet i punkt
(skjøteparameter, differansekvotient), **G** eksponentiell modellering (vekst/henfall,
halveringstid, avkjøling), **H** areal + omdreiningsvolum (skiver), **I** implisitt
derivasjon + tangent, **J** optimering med figur / geometrisk modellering, **K** numerisk
integrasjon med feilestimat (trapes/midtpunkt, finn $n$), **L** relaterte rater, **M**
skjæringssetningen (eksistensbevis), **N** geometriske rekker (endelig/uendelig sum), **O**
Taylorrekker (utled fra kjent rekke), **P** harmoniske svingninger (avlesning + fasomskriving),
**Q** funksjonsforståelse (flervalg: def./verdimengde, injektiv/surjektiv/invers, ekstremalpunkt).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

**Kryssbok-forkunnskaper (verifiserte, bygde VGS-kapitler):** MA0001 har forkunnskapskrav
R1/2MX, og VGS-kalkulus er de sterkeste ankrene — **R1**:
[Derivasjon](/r1/r1-4-1), [Grenseverdier](/r1/r1-3-1),
[Funksjoner og definisjonsmengde](/r1/r1-2-1) *(verifiser eksakte R1-id-er mot bygd
R1-bok før lenking — lenk kun til kapitler som finnes)*; **R2**:
[Integrasjon](/r2/r2-3-1), [Rekker og summasjon](/r2/r2-1-4),
[Trigonometri](/r2/r2-2-1) *(verifiser id-er)*; **S2**:
[Derivasjon og integrasjon](/s2/s2-3-1) *(verifiser id-er)*. **Aktiveringsmarkør:**
der en VGS-id ikke lar seg verifisere, skrives forkunnskapen som **klartekst** med markøren
*(VGS-forkunnskap; aktiver `/<kode>/<id>`-lenke når riktig kapittel er bekreftet)*.
Lenk ALDRI til en id du ikke har bekreftet finnes.

---

### Del 0 — Eksamenskartet, formelarket og føringen

#### Kapittel 0.1: Eksamenskartet: ~11 likt vektede oppgaver, kode D + formelark og de fem søylene

- **id:** `ma0001-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Slik testes MA0001: den nyeste malen med ~11 likt vektede oppgaver over 4 timer, hjelpemiddelkode D (enkel kalkulator) + utdelt 5-siders formelsamling, de fem søylene (derivasjon, grenser+L'Hôpital, integrasjon, Newton, Taylor), det ferske pensumtilskuddet (rekker/Taylorrekker/svingninger), føringskravene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (63 PDF-er, 2007–2025). Skal gjengi: (i) **vurderingsformen**: én avsluttende **4-timers skriftlig skoleeksamen**, karakter A–F, **~11 likt vektede oppgaver** (nyeste mal des-2024→), hjelpemiddelkode **D** (enkel kalkulator) + **utdelt 5-siders formelsamling**, skriftlige oppgaver med full begrunnelse, noen delpunkter som flervalg i Inspera; (ii) **de fem søylene** (nesten garantert hvert sett): derivasjon ~100 %, grenser+L'Hôpital ~95 %, integrasjon ~95 %, Newton ~80 %, Taylor/lineær tilnærming ~80 %; (iii) **temafrekvens-tabellen** (fra analysens §2: derivasjon ~100 %, grenser+L'Hôpital ~95 %, integral ~95 %, Newton ~80 %, Taylor ~80 %, kontinuitet/skjøte ~65 %, eksponentiell modellering ~65 %, areal ~65 %, optimering ~55 %, funksjonsforståelse ~55 %, volum ~50 %, implisitt+tangent ~50 %, trig/svingning ~50 %, skjæringssetningen ~45 %, numerisk integrasjon ~40 %, relaterte rater ~40 %, deriverbarhet i punkt ~30 % ↑, uegentlige integraler ~35 %, **geometriske rekker NY 3/3 nyeste**, **Taylorrekker NY 3/3 nyeste**, **harmoniske svingninger NY 2/3 nyeste**); (iv) **det ferske pensumtilskuddet**: rekker + Taylorrekker + svingninger — 0 % før des-2024, opptrer nå i alle nyeste sett, behandles som nivå 1 for kommende eksamener *(verifiser)*; (v) **kode D + formelark-regimet**: formlene hentes fra arket, kravet er anvendelse og oppsett — ikke pugging; (vi) **føringsstandarden**: alle skriftlige svar begrunnes, form identifiseres før L'Hôpital, skjæringssetningen navngis, deriverbarhet vises med differansekvotient, svar med benevning + riktige desimaler + konklusjon; (vii) **formatutviklingen**: rene langsvarssett (2007–2020) → 6 flervalg + 6 skriftlige (2022–24) → ~11 likt vektede (des-2024→), boka kalibreres mot den nyeste; (viii) **karakterskillene** (bestått ≈ mekanikken: derivasjon med riktig regel, standardintegral, én L'Hôpital-grense, Newton-iterasjon med oppgitt formel, eksponentialmodell-oppsett; midt ≈ kjedet derivasjon, delvis integrasjon/I-metode, Taylor grad 3 med korrekte deriverte, kontinuitetsskjøting, areal mellom kurver, feilestimat-ulikhet for $n$; topp ≈ deriverbarhet med differansekvotient + knekk-forståelse, Newton-startpunkt drøftet, ny Taylorrekke utledet, presis modellering med benevning/konklusjon, uegentlig integral med lim).
- **Innholdskontrakt:** Sjangerkatalogen A–Q presenteres som studentens sjekkliste med frekvens per sjanger; **prognose for neste ordinære eksamen** (4 t, ~11 likt vektede oppgaver, kode D + formelark): **O1–O2** derivasjon (én i punkt) → **O3** implisitt derivasjon + tangent → **O4–O5** grenser (én mot ∞, én L'Hôpital) → **O6–O7** integraler (ett standard, ett delvis/substitusjon) → **O8** eksponentialmodell (avkjøling/vekst/henfall + halveringstid) → **O9** areal og/eller volum med skisse → **O10** Newton («finn skjæringspunkt», 3 desimaler) → **O11** én geometrisk rekke + én Taylorrekke → evt. optimering/relaterte rater med figur, harmonisk svingning eller trapes med feilestimat. **Lesestrategi**: Del 1 er grunnlaget (grenser er allerede en søyle), Del 2 og 3 er de to store søylene (derivasjon + integrasjon — bruk mest tid), Del 4 er numerikk + Taylor, Del 5 er det ferske pensumtilskuddet (ikke hopp over — det er nesten garantert nå), Del 6 er modellering, Del 7 løfter føring og gir øvingseksamener.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «lag en 4-timers plan for ~11 likt vektede oppgaver — hvilke fem søyler er nesten garantert, og hvor mye tid gir du hver?»; «formelsamlingen er utdelt — hvilke formler MÅ du kunne *hente og sette opp* (lineær tilnærming, Newton, trapesfeil, Taylor), og hva betyr det at kravet er anvendelse, ikke pugging?»; «rekker og Taylorrekker er nye — hvorfor bør du prioritere dem selv om de har lav historisk frekvens?».
- **Typiske feil:** Metafeilene: lese pensum lineært uten å prioritere de fem søylene; undervurdere det ferske pensumtilskuddet (rekker/Taylorrekker — nesten garantert nå); tro at formelark betyr at man slipper å kunne oppsettet; glemme å begrunne skriftlige svar; slurve med benevning/desimaler/konklusjon (trekker i det nye regimet); bruke L'Hôpital uten å sjekke formen.
- **Quiz: 10 · Flashcards: 12** (frekvenser, sjangerkatalog A–Q, kode D/formelark-regimet, føringsreglene, de fem søylene, det ferske pensumtilskuddet)

**Prøve-kvote Del 0:** ingen (metakapittel).

---

### Del 1 — Funksjoner, grenser og kontinuitet *(prioritet: MIKS — grenser+L'Hôpital PERFEKT ~95 %; funksjonsforståelse ~55 %; kontinuitet/deriverbarhet ~65 %)*

#### Kapittel 1.1: Funksjoner: definisjonsmengde, verdimengde og invers

- **id:** `ma0001-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Funksjonsgrunnlaget flervalgsblokken tester: største definisjonsmengde og verdimengde, injektiv/surjektiv/bijektiv, og invers funksjon funnet algebraisk — med de vanligste distraktorene (√ krever ≥0, ln krever >0).
- **Forkunnskaper (kryssbok):** Ingen i boka. [Funksjoner og definisjonsmengde](/r1/r1-2-1) fra R1 *(verifiser id)* — begrepet definisjonsmengde og invers fra VGS.
- **Eksamensbelegg:** Sjanger Q, **~55 %** (dominerte flervalgsblokken 2022–24, delvis videreført i 2025). Fasitens grep: for definisjonsmengde krev at √-argument $\ge0$ og ln-argument $>0$; for invers bytt $x\leftrightarrow y$ og løs. Prioritet: **kunne** (grunnlag for alt annet + flervalgspoeng).
- **Innholdskontrakt:** **Funksjon**, definisjonsmengde $D_f$, verdimengde $V_f$; **største definisjonsmengde** (krav fra √, ln, brøk, sammensetning som $\sqrt{\ln(x^3)}$); **injektiv** (én-til-én), **surjektiv**, **bijektiv**; **invers funksjon** $f^{-1}$ funnet algebraisk (bytt $x\leftrightarrow y$, løs); at $f$ har invers ⇔ $f$ er injektiv (på sitt område); graf-speiling om $y=x$; sammensetning $g\circ f$. Alt til aktiv bruk; flervalgsdistraktorene forklares.
- **Oppgavesjangre:** Q. Mønstereksempel: «Finn den største definisjonsmengden til $f(x)=\sqrt{\ln(x^3)}$, og avgjør om $f$ er injektiv på denne mengden.»
- **Typiske feil:** Glemme at √ krever ikke-negativt argument, ln positivt; glemme at absoluttverdi endrer verdimengden; forveksle injektiv (én-til-én) og surjektiv (dekker verdiområdet); bytte $x$ og $y$ feil i inversutregningen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.2: Grenseverdier og standardgrenser

- **id:** `ma0001-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-1-1`
- **kapitteltype:** teori
- **description:** Grensebegrepet, ensidige grenser, grenser mot uendelig via «del på høyeste potens», standardgrensene (sin x/x → 1, veksthierarkiet ln ≪ potens ≪ eksp) — grunnlaget før L'Hôpital.
- **Forkunnskaper (kryssbok):** Kap. 1.1. [Grenseverdier](/r1/r1-3-1) fra R1 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger B-grunnlag, **~95 %** (grenser samlet). Fasitens grep: for rasjonale grenser mot ∞, del på høyeste potens i nevner; bruk standardgrenser direkte. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Grenseverdi** $\lim_{x\to a}f(x)$; **ensidige grenser** (venstre/høyre) og at grensen finnes ⇔ de er like; **grenser mot $\pm\infty$** («del på høyeste potens» for rasjonale uttrykk); **standardgrenser** fra formelarket: $\lim_{x\to0}\frac{\sin x}{x}=1$, $\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$, **veksthierarkiet** ($\ln x\ll x^p\ll e^x$ når $x\to\infty$); grenser som gir $\pm\infty$ (vertikal asymptote) og horisontale asymptoter. «Fra formelarket»-note for standardgrensene. Alt til aktiv bruk.
- **Oppgavesjangre:** B. Mønstereksempel: «Regn ut $\lim_{x\to\infty}\frac{3x^2-2x+1}{5x^2+x}$ og $\lim_{x\to0}\frac{\sin(3x)}{x}$.»
- **Typiske feil:** Sette inn $\infty$ uten å dele på høyeste potens; blande standardgrensen $\frac{\sin x}{x}\to1$ (kun $x\to0$); glemme at ensidige grenser må være like; feil veksthierarki-rangering.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 1.3: Kontinuitet, deriverbarhet i punkt og skjæringssetningen

- **id:** `ma0001-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-1-2`
- **kapitteltype:** teori
- **description:** Kontinuitet i punkt og skjøteparameter (finn a/k så stykkevis funksjon henger sammen), deriverbarhet vist med differansekvotienten (ikke ved derivertformel), knekk-tilfellet, og skjæringssetningen som eksistensbevis — kursets eneste faste «bevis».
- **Forkunnskaper (kryssbok):** Kap. 1.2 (grenser).
- **Eksamensbelegg:** Sjanger F (~65 % kontinuitet, ~30 % deriverbarhet ↑) og sjanger M (skjæringssetningen ~45 %). Fasitens grep: for skjøt sett venstre- = høyregrense = funksjonsverdi; for deriverbarhet bruk differansekvotienten begge veier; for eksistens navngi skjæringssetningen. Prioritet: **kunne** (kontinuitet), **kjenne→kunne** (deriverbarhet, voksende), **kunne** (skjæringssetningen).
- **Innholdskontrakt:** **Kontinuitet i punkt** ($\lim_{x\to a}f(x)=f(a)$, begge ensidige grenser lik funksjonsverdien); **skjøteparameter** (stykkevis funksjon, finn $a$/$k$ som gir kontinuitet i skjøtepunktet); **deriverbarhet i punkt** via **differansekvotienten** $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ med venstre-/høyregrense hver for seg (sensorregel 5) — **ikke** ved å derivere uttrykket; **knekk-tilfellet** (kontinuerlig men ikke deriverbar); **skjæringssetningen** (Intermediate Value Theorem): $f$ kontinuerlig på $[a,b]$, $f(a)$ og $f(b)$ motsatt fortegn ⇒ minst én rot i $(a,b)$ — navngis alltid (regel 4). Aktiv føring; skjæringssetningen føres komplett.
- **Oppgavesjangre:** F/M. Mønstereksempel (F): «La $f(x)=5x-2$ for $x<1$ og $f(x)=x^2+2x+a$ for $x\ge1$. Finn $a$ så $f$ er kontinuerlig i $x=1$. Er $f$ deriverbar der?» Mønstereksempel (M): «Vis at $x^7+3x^4-x^2-2=0$ har minst én løsning i $(0,1)$.»
- **Typiske feil:** Sjekke kontinuitet bare fra én side; «bevise» deriverbarhet med derivertformel i stedet for differansekvotient; konkludere feil om knekk-punkt; bruke skjæringssetningen uten å navngi den eller uten å sjekke kontinuitet + fortegnsskifte.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.4: Drill: grenser og L'Hôpital

- **id:** `ma0001-1-4` · **number:** 1.4 · **estimatedMinutes:** 85 · **prerequisites:** `ma0001-1-3`
- **kapitteltype:** drill
- **description:** Hele grenserepertoaret drillet til automatikk: alle ubestemte former (0/0, ∞/∞, 0·∞, ∞−∞), formidentifikasjon FØR L'Hôpital, gjentatt L'Hôpital, og standardgrenser brukt direkte.
- **Forkunnskaper (kryssbok):** Kap. 1.2–1.3. **L'Hôpitals regel** introduseres her (formelarket): på $[0/0]$ eller $[\infty/\infty]$ er $\lim\frac{f}{g}=\lim\frac{f'}{g'}$.
- **Eksamensbelegg:** Dekker sjanger B samlet (~95 %), én av de fem søylene. Variantkatalogen: endelig grense ($0/0$), grense mot ∞ ($\infty/\infty$), $0\cdot\infty$ (omskriv til brøk), $\infty-\infty$ (fellesnevner), gjentatt L'Hôpital, standardgrense direkte. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): (1) sett inn og **identifiser formen** (skriv $[0/0]$ eller $[\infty/\infty]$); (2) hvis $0\cdot\infty$ eller $\infty-\infty$: **omskriv til brøk/fellesnevner først**; (3) anvend L'Hôpital (deriver teller og nevner hver for seg); (4) gjenta ved behov, sjekk formen hver gang; (5) bruk heller standardgrense/veksthierarki når det er raskere. Gjennomregnet «grense-case» med sensor-margnotater (form skrevet før hver anvendelse). **Fra formelarket**-note for L'Hôpital. 12–15 oppgaver på eksamensnivå: to $0/0$, to $\infty/\infty$, to $0\cdot\infty$, ett $\infty-\infty$, to standardgrenser, to «hvorfor gjelder ikke L'Hôpital her».
- **Oppgavesjangre:** B, alle varianter. Mønstereksempel: «Regn ut (a) $\lim_{x\to0}\frac{1-\cos(2x)}{x^2}$, (b) $\lim_{x\to\infty}\frac{\ln x}{\sqrt x}$, (c) $\lim_{x\to0^+}x\ln x$.»
- **Typiske feil:** Bruke L'Hôpital på et uttrykk som ikke er $0/0$ eller $\infty/\infty$ (dokumentert moteksempel-felle); glemme å omskrive $0\cdot\infty$/$\infty-\infty$ først; derivere brøken med brøkregelen i stedet for teller og nevner hver for seg; ikke sjekke formen på nytt før gjentatt bruk.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (spesifisert i §4).

---

### Del 2 — Derivasjon og dens anvendelser *(prioritet: PERFEKT — derivasjon ~100 %, bærebjelke; implisitt+tangent ~50 %, optimering ~55 %, relaterte rater ~40 %)*

#### Kapittel 2.1: Derivasjonsregler og regelvalg

- **id:** `ma0001-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-1-2`
- **kapitteltype:** teori
- **description:** Bærebjelken: produkt-, brøk- og kjerneregel med riktig regelvalg, kjeding av flere regler, deriverte av eˣ/aˣ/ln x/trig/inverse trig, og derivert i ett punkt — alltid eksamenens åpningsoppgave.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (grenser — derivasjon er grensen av differansekvotienten). [Derivasjon](/r1/r1-4-1) fra R1 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger A, **~100 %** — alltid åpningsoppgave, 2–3 delpunkter. Fasitens grep: velg riktig regel, før den, kjed kjerneregel der nødvendig; for «derivert i punkt» regn generelt og sett inn til slutt. Prioritet: **perfekt** (den viktigste enkeltferdigheten i faget).
- **Innholdskontrakt:** **Derivasjonsreglene**: produkt $(uv)'=u'v+uv'$, brøk $\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$, **kjerne** $(f(g(x)))'=f'(g(x))g'(x)$; **kjeding** (flere regler i ett uttrykk, f.eks. $\ln(\cos(x^3))$); **standardderiverte** fra formelarket: $e^x$, $a^x=e^{x\ln a}$, $\ln x$, $\sin/\cos/\tan$, **inverse trig** ($\arctan'=\frac{1}{1+x^2}$, $\arcsin'=\frac{1}{\sqrt{1-x^2}}$); **logaritmisk derivasjon** (ved $u^v$ og lange produkter); **derivert i ett punkt** (regn generelt, sett inn $f'(0)$, $f'(\pi/4)$). «Fra formelarket»-note for standardderivertene. Alt til aktiv bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Finn $g'(x)$ når $g(x)=\ln(\cos(x^3))$, og regn ut $g'(0)$.»
- **Typiske feil:** Brøkregel der bare en konstant står i nevner (kjerneregel holder); **glemme kjerneregel-faktoren** i sammensatte uttrykk; feil derivert av $a^x$ (glemme $\ln a$); sette inn punktet før man har derivert generelt; feil i inverse trig-deriverte.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Implisitt derivasjon og tangentlikning

- **id:** `ma0001-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** teori
- **description:** Implisitt derivasjon av en likning F(x,y)=konst, løs for y′, sett inn punktet for stigningstallet, og skriv tangentlikningen — ofte todelt: vis at punktet ligger på kurven, finn så tangenten.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (kjerneregel — $y$ er en funksjon av $x$).
- **Eksamensbelegg:** Sjanger I, **~50 %** (nesten årlig i nye sett). Fasitens grep: deriver hvert ledd mhp. $x$ (husk $\frac{d}{dx}y=y'$ via kjerneregel), samle $y'$-ledd, løs, sett inn punktet. Prioritet: **kunne**.
- **Innholdskontrakt:** **Implisitt derivasjon** av $F(x,y)=$ konst (deriver begge sider mhp. $x$, behandle $y=y(x)$ med kjerneregel: $\frac{d}{dx}[y^2]=2yy'$); **løs for $y'$** (samle $y'$-ledd); **stigningstall** $y'(x_0,y_0)$ ved innsetting; **tangentlikning** $y-y_0=y'(x_0)(x-x_0)$; todelt oppgave (a) vis at punktet oppfyller likningen, (b) finn tangenten; kurver: ellipser, hyperbler, blandede transcendente likninger. Aktiv føring.
- **Oppgavesjangre:** I. Mønstereksempel: «Kurven $x^2+\tfrac14 y^2=2$ går gjennom $(-1,2)$. Vis dette, og finn tangentlikningen i punktet.»
- **Typiske feil:** Glemme kjerneregel-faktoren $y'$ når man deriverer et $y$-ledd; ikke samle $y'$-leddene før man løser; sette inn punktet før man har løst for $y'$; feil tangent-form.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: Funksjonsdrøfting: monotoni, ekstrema og skisse

- **id:** `ma0001-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** teori
- **description:** Første- og andrederiverttest: finn kritiske punkter (f′=0), avgjør maks/min (andrederiverttest eller fortegnslinje), monotoni og vendepunkter, og skisser grafen — grunnlaget for optimering og for flervalgs-ekstremalpunkt.
- **Forkunnskaper (kryssbok):** Kap. 2.1.
- **Eksamensbelegg:** Sjanger A/Q-anvendelse, **~40 %** (funksjonsdrøfting) og ekstremalpunkt i flervalg (Q). Fasitens grep: $f'=0$ gir kandidater, andrederiverttest ($f''>0$ min, $f''<0$ maks) klassifiserer. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kritiske punkter** ($f'(x)=0$ eller udefinert); **monotoni** (fortegn til $f'$); **førstederiverttest** (fortegnsskifte) og **andrederiverttest** ($f''(x_0)>0\Rightarrow$ min, $<0\Rightarrow$ maks); **vendepunkter** ($f''=0$ med fortegnsskifte, konveks/konkav); **grafskisse** (kritiske punkter, asymptoter, fortegn); globale vs. lokale ekstrema på intervall (også endepunkter). Aktiv bruk; brukes videre i optimering (2.5).
- **Oppgavesjangre:** A/Q. Mønstereksempel: «Finn og klassifiser ekstremalpunktene til $f(x)=x^3-3x^2+2$, og angi hvor $f$ er voksende.»
- **Typiske feil:** Glemme å teste endepunkter for globale ekstrema; bruke andrederiverttest når $f''=0$ (inkonklusiv — trengs fortegnslinje); forveksle konveks og konkav; oppgi kritisk punkt uten å klassifisere.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.4: Optimering med figur / geometrisk modellering

- **id:** `ma0001-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-3`
- **kapitteltype:** teori
- **description:** Sett opp målfunksjonen fra en bibetingelse (omkrets, volum, kostnad), reduser til én variabel, deriver, finn ekstremum og begrunn at det er et minimum/maksimum — den klassiske anvendte optimeringsoppgaven med figur.
- **Forkunnskaper (kryssbok):** Kap. 2.3 (ekstrema). [Derivasjon](/r1/r1-4-1) *(verifiser id)*.
- **Eksamensbelegg:** Sjanger J, **~55 %**. Fasitens grep: skriv målfunksjon fra bibetingelsen, reduser til én variabel, deriver, løs $f'=0$, begrunn min/maks, gi svar med benevning. Prioritet: **kunne**.
- **Innholdskontrakt:** **Optimeringsoppskrift**: (1) tegn/les figuren, navngi variabler; (2) skriv **målfunksjonen** (areal/volum/kostnad); (3) bruk **bibetingelsen** til å redusere til én variabel; (4) deriver og løs $f'=0$; (5) **begrunn** at det er min/maks (andrederiverttest eller fortegn/endepunkter); (6) svar med benevning + konklusjon. Kontekster: største rektangelareal ved gitt omkrets, minste overflate på boks ved gitt volum, billigste trasé. Aktiv føring; rad-for-rad-oppsett belønnes.
- **Oppgavesjangre:** J. Mønstereksempel: «En lukket boks med kvadratisk grunnflate skal ha volum 12 m³. Vis at overflaten er $O(x)=2x^2+\tfrac{48}{x}$, og finn den minste mulige overflaten.»
- **Typiske feil:** Ikke redusere til én variabel før derivasjon; glemme å begrunne at ekstremumet er et minimum/maksimum; feil bibetingelse; glemme benevning/konklusjon; ikke sjekke endepunkter/definisjonsområde.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.5: Relaterte rater

- **id:** `ma0001-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `ma0001-2-2`
- **kapitteltype:** teori
- **description:** Modeller sammenhengen (Pytagoras, sirkel-/kuleformel), deriver implisitt mhp. tiden t, sett inn øyeblikkets tall og tolk fortegnet — stige som glir, ekspanderende ballong, to skip på kollisjonskurs.
- **Forkunnskaper (kryssbok):** Kap. 2.2 (implisitt derivasjon mhp. en variabel).
- **Eksamensbelegg:** Sjanger L, **~40 %** (anvendt implisitt derivasjon). Fasitens grep: skriv relasjonen mellom størrelsene, deriver mhp. $t$, sett inn øyeblikkets verdier, løs for den ukjente raten. Prioritet: **kunne**.
- **Innholdskontrakt:** **Relaterte-rater-oppskrift**: (1) modeller relasjonen (Pytagoras $x^2+y^2=z^2$, sirkel $A=\pi r^2$, kule $V=\tfrac43\pi r^3$); (2) **deriver implisitt mhp. $t$** (hver størrelse er en funksjon av tid); (3) sett inn øyeblikkets tall og kjente rater; (4) løs for den ukjente raten, **tolk fortegnet** (øker/minker). Kontekster: stige som glir ned en vegg, ekspanderende sirkel/ballong, to objekter i bevegelse. Aktiv føring.
- **Oppgavesjangre:** L. Mønstereksempel: «To skip forlater samme punkt samtidig; A seiler østover 8 km/t, B nordover 6 km/t. Hvor raskt øker avstanden mellom dem etter én time?»
- **Typiske feil:** Sette inn tallverdier FØR man deriverer (fastlåser variabler); glemme kjerneregel ($\frac{d}{dt}r^2=2r\frac{dr}{dt}$); feil relasjon/figur; ikke tolke fortegnet; glemme benevning.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 2.6: Drill: derivasjon med regelvalg

- **id:** `ma0001-2-6` · **number:** 2.6 · **estimatedMinutes:** 85 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** drill
- **description:** Åpningsoppgaven drillet til automatikk: riktig regelvalg, kjeding av flere regler, logaritmisk derivasjon og derivert i punkt — den ferdigheten som må sitte perfekt fordi den kommer først hvert eneste sett.
- **Forkunnskaper (kryssbok):** Kap. 2.1.
- **Eksamensbelegg:** Dekker sjanger A samlet (~100 %). Variantkatalogen: produkt+kjerne, brøk+kjerne, dobbel kjerne ($\ln(\sin(x^2))$), $x^3\arctan x$ (produkt + inverse trig), logaritmisk derivasjon ($u^v$), derivert i punkt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: (1) identifiser ytterste operasjon → velg regel; (2) kjed kjerneregel innover; (3) ved $u^v$ eller langt produkt: **logaritmisk derivasjon**; (4) for «i punkt»: regn generelt, sett inn til slutt; (5) forenkl. Gjennomregnet «åpningsoppgave-case» med sensor-margnotater (regelvalg begrunnet, kjerneregel-faktor vist). 12–15 oppgaver på eksamensnivå: tre kjedede, to logaritmiske, tre derivert-i-punkt, resten blandet.
- **Oppgavesjangre:** A, alle varianter. Mønstereksempel: «Deriver (a) $f(x)=x^3\arctan x$, (b) $g(x)=\ln(\sin(x^2))$, (c) $h(x)=x^{\sin x}$ (logaritmisk).»
- **Typiske feil:** Feil regelvalg; glemt kjerneregel-faktor; logaritmisk derivasjon uten å derivere venstresiden riktig ($\frac{h'}{h}$); regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (spesifisert i §4).

---

### Del 3 — Integrasjon *(prioritet: PERFEKT — integrasjon ~95 %; areal ~65 %, volum ~50 %, uegentlige ~35 %, fundamentalteorem ~35 %)*

#### Kapittel 3.1: Ubestemt integral: standardteknikk og substitusjon

- **id:** `ma0001-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** teori
- **description:** Standardantideriverte fra formelarket, lineæritet, og enkel substitusjon (u = kjerne, bytt dx) — den andre store søylen, alltid 2 delpunkter på eksamen.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (derivasjon — integrasjon er omvendt). [Integrasjon](/r2/r2-3-1) fra R2 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger C-grunnlag, **~95 %**. Fasitens grep: kjenn igjen standardform fra arket; ved substitusjon velg $u=$ indre funksjon, regn $du$, bytt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ubestemt integral** $\int f\,dx=F+C$; **lineæritet**; **standardantideriverte** fra formelarket ($\int x^n$, $\int e^x$, $\int\frac1x$, $\int\sin/\cos$, $\int\frac{1}{1+x^2}=\arctan x$); **enkel substitusjon** ($u=g(x)$, $du=g'(x)dx$, integrer i $u$, sett tilbake); gjenkjenning av «indre derivert-faktor»; absoluttverdi-integral splittes etter fortegn. «Fra formelarket»-note for standardantiderivertene. Aktiv føring.
- **Oppgavesjangre:** C. Mønstereksempel: «Regn ut $\int \frac{2x}{x^2+1}\,dx$ og $\int (3x-1)^5\,dx$ ved substitusjon.»
- **Typiske feil:** Glemme $+C$; feil $du$ (glemme indre derivert); ikke bytte tilbake til $x$; integrere $\frac1x$ som $\ln x$ uten absoluttverdi der det trengs.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Delvis integrasjon og I-metoden

- **id:** `ma0001-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-3-1`
- **kapitteltype:** teori
- **description:** Delvis integrasjon (∫u dv = uv − ∫v du) med riktig valg av u og dv, og I-metoden der delvis integrasjon gjentas til integralet dukker opp igjen (∫eˣ sin x) — en klassisk karakterskiller.
- **Forkunnskaper (kryssbok):** Kap. 3.1.
- **Eksamensbelegg:** Sjanger C, **~95 %** (delvis integrasjon er ofte det ene av de to integralene). Fasitens grep: velg $u$ som forenkles ved derivasjon (LIATE-heuristikk); for $\int e^x\sin x$ gjenta og løs for integralet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Delvis integrasjon** $\int u\,dv=uv-\int v\,du$ (formel på arket); **valg av $u$/$dv$** (LIATE-heuristikk: log, invers trig, algebra, trig, eksp); typiske produkter ($x\cos(3x)$, $xe^x$, $x\ln x$, $\arctan x$); **I-metoden** (delvis integrasjon gjentas til det opprinnelige integralet $I$ dukker opp igjen, løs algebraisk for $I$ — f.eks. $\int e^t\sin t\,dt$). «Fra formelarket»-note. Aktiv føring; alternativ-honorering (regel 9).
- **Oppgavesjangre:** C. Mønstereksempel: «Regn ut $\int x\cos(2x)\,dx$ (delvis) og $\int e^t\sin t\,dt$ (I-metoden).»
- **Typiske feil:** Feil valg av $u$/$dv$ (integralet blir verre); fortegnsfeil i $-\int v\,du$; ved I-metoden glemme å samle $I$-leddene og løse; ikke fullføre gjentakelsen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: Bestemt integral og fundamentalteoremet

- **id:** `ma0001-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-3-2`
- **kapitteltype:** teori
- **description:** Bestemt integral med grensebytte ved substitusjon, analysens fundamentalteorem, og å derivere et integral med variabel grense (fundamentalteorem + kjerneregel) — pluss gjennomsnittsverdi.
- **Forkunnskaper (kryssbok):** Kap. 3.1–3.2, 2.1 (kjerneregel).
- **Eksamensbelegg:** Sjanger C, **~95 %**, og fundamentalteoremet (~35 %, deriver et integral). Fasitens grep: ved substitusjon i bestemt integral, **bytt grensene til $u$-verdier**; deriver $\int_a^{g(x)}f\,dt$ som $f(g(x))g'(x)$. Prioritet: **perfekt** (bestemt integral), **kunne** (fundamentalteorem).
- **Innholdskontrakt:** **Bestemt integral** $\int_a^b f=F(b)-F(a)$; **grensebytte ved substitusjon** (bytt $a,b$ til $u(a),u(b)$ — sensorregel, dokumentert felle); **analysens fundamentalteorem** (del 1: $\frac{d}{dx}\int_a^x f(t)\,dt=f(x)$; del 2: $\int_a^b f=F(b)-F(a)$); **deriver et integral med variabel grense** ($\frac{d}{dx}\int_a^{g(x)}f\,dt=f(g(x))g'(x)$ — fundamentalteorem + kjerneregel); **gjennomsnittsverdi** $\bar f=\frac{1}{b-a}\int_a^b f$ (formel på arket). «Fra formelarket»-note. Aktiv føring.
- **Oppgavesjangre:** C. Mønstereksempel: «Regn ut $\int_0^2 xe^{x^2}\,dx$ (substitusjon med grensebytte), og finn $\frac{d}{dx}\int_0^{x^2}\sin t\,dt$.»
- **Typiske feil:** **Glemme å bytte substitusjonsgrensene** til $u$-verdier (dokumentert felle); fortegnsfeil $F(b)-F(a)$; glemme kjerneregel-faktoren $g'(x)$ når man deriverer et integral med variabel grense; regne gjennomsnittsverdi uten $\frac{1}{b-a}$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.4: Anvendelser: areal, omdreiningsvolum og uegentlige integraler

- **id:** `ma0001-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-3-3`
- **kapitteltype:** teori
- **description:** Areal mellom kurver (finn skjæring, integrer øvre − nedre), omdreiningsvolum om x-aksen med skiveformelen V = π∫f², og uegentlige integraler ført med lim-notasjon — de tre integralanvendelsene.
- **Forkunnskaper (kryssbok):** Kap. 3.3 (bestemt integral).
- **Eksamensbelegg:** Sjanger H (~65 % areal, ~50 % volum) + uegentlige integraler (~35 %). Fasitens grep: for areal finn skjæringspunkter, integrer (øvre − nedre); for volum $\pi\int f^2$; for uegentlig, før grensen med lim. Prioritet: **kunne** (areal/volum), **kjenne→kunne** (uegentlige).
- **Innholdskontrakt:** **Areal mellom kurver** (finn skjæringspunkter, integrer $\int(\text{øvre}-\text{nedre})$, skissér området); **areal under graf** ($\int|f|$, splitt etter fortegn); **omdreiningsvolum om x-aksen** = **skiveformelen** $V=\pi\int_a^b f(x)^2\,dx$ (formel på arket; kun skivemetoden, ikke skall); **uegentlige integraler** (uendelig grense eller singularitet: skriv $\lim_{t\to\infty}\int_a^t$, avgjør konvergens/divergens — «sett inn $\infty$» godtas ikke, sensorregel 3). «Fra formelarket»-note for volumformelen. Aktiv føring; skisse forventes.
- **Oppgavesjangre:** H. Mønstereksempel: «(a) Finn arealet mellom $y=\tfrac12 x^2$ og $y=\tfrac13 x^3$. (b) Området under $y=e^{-x}$ for $x\ge0$ dreies om x-aksen — finn volumet ($\pi\int f^2$), ført med lim.»
- **Typiske feil:** Feil rekkefølge (nedre − øvre) i areal; glemme $\pi$ eller kvadrere feil i skiveformelen; ikke finne skjæringspunktene før integrasjon; «sette inn $\infty$» i uegentlig integral i stedet for lim-notasjon.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.5: Drill: integrasjon (standard, substitusjon, delvis)

- **id:** `ma0001-3-5` · **number:** 3.5 · **estimatedMinutes:** 85 · **prerequisites:** `ma0001-3-3`
- **kapitteltype:** drill
- **description:** Hele integralrepertoaret drillet til automatikk: standardform, substitusjon med grensebytte, delvis integrasjon og I-metoden — den andre store søylen som alltid gir to delpunkter.
- **Forkunnskaper (kryssbok):** Kap. 3.1–3.3.
- **Eksamensbelegg:** Dekker sjanger C samlet (~95 %). Variantkatalogen: standardform, substitusjon (ubestemt + bestemt med grensebytte), delvis integrasjon, I-metoden, absoluttverdi-splitting. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (metodevalg): (1) standardform? → slå opp; (2) indre derivert synlig? → **substitusjon** (bytt grenser ved bestemt); (3) produkt av ulike funksjonstyper? → **delvis integrasjon** (LIATE); (4) $e^x\sin/\cos$? → **I-metoden**; (5) absoluttverdi? → splitt etter fortegn. Gjennomregnet «integral-case» med sensor-margnotater (metodevalg begrunnet, grensebytte vist). 12–15 oppgaver på eksamensnivå: tre substitusjon (én bestemt med grensebytte), tre delvis, ett I-metode, resten standard.
- **Oppgavesjangre:** C, alle varianter. Mønstereksempel: «Regn ut (a) $\int_1^2 \frac{\ln x}{x}\,dx$, (b) $\int x^2 e^x\,dx$, (c) $\int_0^\pi |\cos x|\,dx$.»
- **Typiske feil:** Glemt grensebytte; feil metodevalg; fortegnsfeil i delvis integrasjon; ikke splitte absoluttverdi; regnefeil under tidspress.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (spesifisert i §4).

---

### Del 4 — Numeriske metoder og tilnærming *(prioritet: PERFEKT — Newton ~80 %, Taylor/lineær tilnærming ~80 %; numerisk integrasjon ~40 %)*

#### Kapittel 4.1: Newtons metode

- **id:** `ma0001-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-1`, `ma0001-1-3`
- **kapitteltype:** teori
- **description:** Newton-iterasjonen xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) fra formelarket: skriv om «finn skjæringspunkt» eller «løs cos x = x» til nullpunkt, iterer oppgitt antall steg, rund til oppgitt desimaler, og drøft valg av startpunkt.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (derivasjon), 1.3 (skjæringssetningen — eksistens før iterasjon).
- **Eksamensbelegg:** Sjanger D, **~80 %** (svært dominant i nye sett). Fasitens grep: definer $f=$ venstre$-$høyre, bruk formelen, iterer, rund til slutt. Halvparten kan være å begrunne eksistens med skjæringssetningen først. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Newtons formel** $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$ (fra formelarket); **omskriving til nullpunkt** («$\cos x=x$» eller «to grafer skjærer hverandre» → «finn nullpunkt til $f=$ venstre$-$høyre»); **iterasjon** (regn oppgitt antall steg, ofte 3, rund til oppgitt desimaler **til slutt**); **valg av startpunkt** (dårlig $x_0$ ⇒ divergens/feil rot — drøftes i nye sett); **metodesammenligning** (kjennskap: fikspunktiterasjon, Steffensens metode — nevnes, ikke drilles tungt); ofte kombinert med skjæringssetningen (vis at roten finnes først). «Fra formelarket»-note. Aktiv føring; alternativ-honorering (Newton eller fikspunkt).
- **Oppgavesjangre:** D. Mønstereksempel: «Grafene til $f(x)=\ln x$ og $g(x)=3-x^2$ skjærer hverandre i ett punkt. Bruk Newtons metode med $x_0=1{,}5$ og finn x-verdien, avrundet til tre desimaler.»
- **Typiske feil:** Ikke skrive om til nullpunkt (iterere på feil funksjon); dårlig startpunkt (divergens/feil rot) uten å oppdage det; runde underveis i stedet for til slutt; feil antall desimaler; glemme å begrunne eksistens der det etterspørres.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Lineær tilnærming og Taylorpolynom

- **id:** `ma0001-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** teori
- **description:** Lineær tilnærming T₁(x)=f(a)+f′(a)(x−a) og Taylorpolynom grad 2–3 fra formelarket: regn de nødvendige deriverte, sett inn a, og bruk polynomet til å estimere en funksjonsverdi eller et integral (integrer ledd for ledd).
- **Forkunnskaper (kryssbok):** Kap. 2.1 (høyere deriverte). Derivert av invers (kap. 4.3) brukes i én variant.
- **Eksamensbelegg:** Sjanger E, **~80 %**. Fasitens grep: regn $f(a),f'(a),f''(a),\dots$, sett inn i Taylorformelen fra arket; anvend til estimering. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Lineær tilnærming** $T_1(x)=f(a)+f'(a)(x-a)$; **Taylorpolynom** grad $n$ om $a$: $T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k$ (formel på arket); **prosedyre** (regn deriverte, sett inn $a$, bygg polynomet); **anvendt bruk** (estimer funksjonsverdi, eller **estimer et integral** ved å integrere polynomet ledd for ledd — f.eks. $\int_0^1\frac{\sin t}{t}dt$ via Taylor for $\sin t$); restleddsforståelse (kjennskap: feilen styres av neste ledd). «Fra formelarket»-note. Aktiv føring.
- **Oppgavesjangre:** E. Mønstereksempel: «Finn Taylorpolynomet av grad 3 til $f(t)=\sin t$ om $t=0$, og bruk det til å tilnærme $\int_0^1\frac{\sin t}{t}\,dt$.»
- **Typiske feil:** Glemme $k!$-nevneren i Taylorleddene; feil høyere deriverte; regne om feil punkt $a$; ikke integrere polynomet ledd for ledd i integral-varianten; blande $T_1$ (lineær) og full Taylor.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Derivert av invers og numerisk integrasjon med feilestimat

- **id:** `ma0001-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-3-3`, `ma0001-1-1`
- **kapitteltype:** teori
- **description:** To formelark-verktøy: derivert av invers funksjon (f⁻¹)′(y)=1/f′(f⁻¹(y)) brukt bl.a. i Taylor om et inverspunkt, og trapes-/midtpunktsmetoden med feilformelen — finn minste n så feilen < ε, regn så T(n).
- **Forkunnskaper (kryssbok):** Kap. 3.3 (bestemt integral), 1.1 (invers funksjon), 4.2 (Taylor).
- **Eksamensbelegg:** Sjanger K, **~40 %** (numerisk integrasjon med feilestimat) + derivert av invers (~40 %, ofte som del av Taylor). Fasitens grep: for feilestimat løs ulikheten for $n$ og **rund opp**; for derivert av invers bruk formelen fra arket. Prioritet: **kunne** (begge fast drillbare sjangre).
- **Innholdskontrakt:** **Derivert av invers funksjon** $(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}$ (formel på arket; alternativt via eksplisitt invers — begge honoreres); **trapesmetoden** $T(n)=\frac{\Delta x}{2}(f(x_0)+2f(x_1)+\dots+f(x_n))$ og **midtpunktsregelen**; **feilformelen** $|I-T(n)|\le\frac{(b-a)^3 M}{12n^2}$ med $|f''|\le M$; **todelt sjanger**: (i) finn minste heltall $n$ så feilen $<\varepsilon$ (løs ulikheten, **rund opp**), (ii) regn $T(n)$. «Fra formelarket»-note. Aktiv føring.
- **Oppgavesjangre:** K/E. Mønstereksempel: «Gitt $|f''(x)|\le2$ på $[0,1]$, finn minste $n$ så trapesmetoden gir feil under 0,01, og regn deretter $T(n)$ for $\int_0^1 e^{-t^2}\,dt$.»
- **Typiske feil:** **Løse feilulikheten feil vei** for $n$, eller **runde $n$ ned** i stedet for opp (må være heltall $\ge$ grensen); feil i trapesvektene ($2$ på indre punkter, $1$ på endene); feil $M$; glemme $f'(f^{-1}(y))$-oppsettet i derivert av invers.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.4: Drill: Newton og Taylor

- **id:** `ma0001-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `ma0001-4-2`
- **kapitteltype:** drill
- **description:** De to numeriske søylene drillet sammen: Newton-iterasjon (finn skjæringspunkt, riktige desimaler, startpunkt-drøfting) og Taylorpolynom (grad 1–3, anvendt til verdi eller integral) — begge nesten garantert.
- **Forkunnskaper (kryssbok):** Kap. 4.1–4.2.
- **Eksamensbelegg:** Dekker sjanger D + E samlet (~80 % hver). Variantkatalogen: Newton på skjæringspunkt, Newton med startpunkt-drøfting, Taylor grad 1 (lineær tilnærming), Taylor grad 3, Taylor anvendt til integral. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrifter for begge sjangre (fra 4.1 og 4.2), gjennomregnede eksamens-caser med sensor-margnotater (Newton: eksistens først, iterer, rund til slutt; Taylor: deriverte, $k!$, anvend). 12–15 oppgaver på eksamensnivå: tre Newton (én med startpunkt-drøfting, én kombinert med skjæringssetningen), tre Taylor (én lineær, én grad 3, én anvendt til integral), resten blandet.
- **Oppgavesjangre:** D/E. Mønstereksempel: «(a) Bruk Newton med $x_0=1$ til å finne roten av $x^3-x-1=0$ (3 desimaler). (b) Finn Taylorpolynomet grad 2 til $e^x$ om 0 og bruk det til å tilnærme $\int_0^{0{,}5}e^x\,dx$.»
- **Typiske feil:** Newton på feil funksjon (ikke omskrevet til nullpunkt); runding underveis; Taylor uten $k!$; feil deriverte; ikke anvende polynomet som bedt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (spesifisert i §4).

---

### Del 5 — Rekker og svingninger *(prioritet: NIVÅ 1 for kommende eksamener — geometriske rekker + Taylorrekker NY 3/3 nyeste sett; harmoniske svingninger NY 2/3; (verifiser))*

#### Kapittel 5.1: Geometriske rekker

- **id:** `ma0001-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-1-2`
- **kapitteltype:** teori
- **description:** Geometrisk rekke med kvotient k: endelig sum sₙ = a₁(1−kⁿ)/(1−k) og uendelig sum s = a₁/(1−k) når |k|<1 (formler på arket) — nytt pensum fra des-2024, i alle tre nyeste settene.
- **Forkunnskaper (kryssbok):** Kap. 1.2 (grenser — uendelig sum er en grense). [Rekker og summasjon](/r2/r2-1-4) fra R2 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger N, **NY — 3/3 nyeste sett** (0 % før des-2024). Behandles som **nivå 1 for kommende eksamener** *(verifiser mot siste sett)*. Fasitens grep: identifiser $a_1$ og $k$, velg endelig eller uendelig formel, sjekk $|k|<1$ for uendelig. Prioritet: **perfekt** (nytt).
- **Innholdskontrakt:** **Geometrisk rekke** (konstant kvotient $k=\frac{a_{n+1}}{a_n}$); **endelig sum** $s_n=a_1\frac{1-k^n}{1-k}$ ($k\ne1$); **uendelig sum** $s=\frac{a_1}{1-k}$ **når $|k|<1$** (konvergenskrav — divergerer ellers); identifisering av $a_1$ og $k$ fra kontekst (avtagende ressursuttak $-8\%$/år → $k=0{,}92$; rekke med oppgitt annet-ledd og $k$). «Fra formelarket»-note. Aktiv føring; konvergenskravet $|k|<1$ understrekes.
- **Oppgavesjangre:** N. Mønstereksempel: «Første året tas det ut 200 000 tonn grus, og uttaket reduseres 8 % hvert år. Hvor mye tas ut de 25 første årene, og hvor mye totalt om driften fortsetter uendelig?»
- **Typiske feil:** **Bruke uendelig-sum-formelen når $|k|\ge1$** (divergerer); forveksle første ledd $a_1$ og annet ledd; feil $k$ (bruke $8\%$ i stedet for $0{,}92$); glemme $-1$ i eksponenten / feil $n$ i endelig sum; glemme benevning.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Taylorrekker

- **id:** `ma0001-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `ma0001-4-2`, `ma0001-5-1`
- **kapitteltype:** teori
- **description:** Gitt en kjent Taylorrekke (eˣ, 1/(1−x), sin, cos), utled rekken til en beslektet funksjon ved substitusjon (x→−x, x→x²) eller kombinasjon (cosh x), og bruk polynomet av gitt orden til å tilnærme — nytt pensum fra des-2024.
- **Forkunnskaper (kryssbok):** Kap. 4.2 (Taylorpolynom), 5.1 (rekker).
- **Eksamensbelegg:** Sjanger O, **NY — 3/3 nyeste sett** (0 % før des-2024). **Nivå 1 for kommende eksamener** *(verifiser)*. Fasitens grep: start fra oppgitt kjent rekke, substituer/kombiner, skriv nye ledd. Prioritet: **perfekt** (nytt; toppsjikt-ferdighet i §7).
- **Innholdskontrakt:** **Kjente Taylorrekker** (fra arket/oppgitt): $e^x=\sum\frac{x^n}{n!}$, $\frac{1}{1-x}=\sum x^n$ ($|x|<1$), $\sin x$, $\cos x$; **utledning ved substitusjon** ($x\to-x$ gir $e^{-x}$; $x\to x^2$ gir $\frac{1}{1+x^2}$ fra $\frac{1}{1-x}$ med $x\to-x^2$); **kombinasjon** ($\cosh x=\frac{e^x+e^{-x}}{2}$ ledd for ledd); **tilnærming** med polynom av gitt orden; konvergensområde (kjennskap). Aktiv føring; vis substitusjonen eksplisitt.
- **Oppgavesjangre:** O. Mønstereksempel: «Gitt at $\frac{1}{1-x}=1+x+x^2+\dots$, finn Taylorrekken til $\frac{1}{1+x^2}$ og bruk polynomet av orden 4 til å tilnærme funksjonen i $x=\tfrac12$.»
- **Typiske feil:** Feil substitusjon (fortegn ved $x\to-x$, potens ved $x\to x^2$); glemme $\frac1{n!}$ i eksp-rekka; feil kombinasjonskoeffisienter; bruke feil orden; ikke sjekke konvergensområdet.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Trigonometri og harmoniske svingninger

- **id:** `ma0001-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-1`
- **kapitteltype:** teori
- **description:** Trig-identiteter fra arket, og harmoniske svingninger: les av middelverdi/amplitude/periode/akrofase fra en graf, og skriv om a cos(ωt)+b sin(ωt) til fasformen C·cos(ω(t−t₀)) med C=√(a²+b²) — ny egen oppgave 2023→.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (derivasjon av trig). [Trigonometri](/r2/r2-2-1) fra R2 *(verifiser id)*.
- **Eksamensbelegg:** Sjanger P, **NY egen oppgave 2023→, 2/3 nyeste sett** + trig-identiteter generelt (~50 %). **Nivå 1 for kommende eksamener** *(verifiser)*. Fasitens grep: $C=\sqrt{a^2+b^2}$, finn $t_0$ fra fasevinkelen. Prioritet: **kunne→perfekt** (nytt).
- **Innholdskontrakt:** **Trig-identiteter** fra arket (Pythagoras $\sin^2+\cos^2=1$, dobbel vinkel, sum-til-produkt — til bruk, ikke pugg); **harmonisk svingning**: middelverdi $C_0$, **amplitude** $C$, **periode** $T=\frac{2\pi}{\omega}$, **akrofase** $t_0$; **avlesning fra graf**; **fasomskriving** $a\cos(\omega t)+b\sin(\omega t)=C\cos(\omega(t-t_0))$ med $C=\sqrt{a^2+b^2}$ og $t_0$ fra $\tan(\omega t_0)=b/a$ (riktig kvadrant); arctan/arcsin (kjennskap). «Fra formelarket»-note for identitetene. Aktiv føring; kvadrant-sjekk for $t_0$.
- **Oppgavesjangre:** P. Mønstereksempel: «Skriv om $f(t)=\cos(2t)+\sqrt3\sin(2t)$ på formen $C\cos(\omega(t-t_0))$, og oppgi amplitude og periode.»
- **Typiske feil:** Feil $C$ (glemme kvadratrot eller kvadrere feil); feil kvadrant for $t_0$; forveksle periode og frekvens; feil $\omega$; avlese amplitude/middelverdi feil fra grafen.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (spesifisert i §4).

---

### Del 6 — Anvendt modellering *(prioritet: KUNNE — eksponentiell modellering ~65 %, fast tekstoppgave)*

#### Kapittel 6.1: Eksponentiell vekst, henfall og Newtons avkjølingslov

- **id:** `ma0001-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-2-1`, `ma0001-3-1`
- **kapitteltype:** teori
- **description:** Modellen y(t)=C·e^(±λt): bestem C og λ fra to målepunkter (løs for λ med logaritme), regn halveringstid T=ln2/λ eller dobling, endringsrate y′(t), og Newtons avkjølingslov T(t)=C+K·e^(−λt) — den faste tekstoppgaven.
- **Forkunnskaper (kryssbok):** Kap. 2.1 (derivasjon av eksp), 1.2 (grenser). Logaritmer fra R1/R2 *(VGS-forkunnskap; aktiver lenke når bekreftet)*.
- **Eksamensbelegg:** Sjanger G, **~65 %**. Fasitens grep: $C$ = startverdi, løs for $\lambda$ med to datapunkter og logaritme; halveringstid $\ln2/\lambda$. Prioritet: **kunne** (fast, drillbar tekstoppgave).
- **Innholdskontrakt:** **Eksponentialmodell** $y(t)=C\,e^{\pm\lambda t}$; **bestemme parametre** ($C$ ofte startverdi $y(0)$; løs for $\lambda$ fra et andre datapunkt med logaritme); **halveringstid** $T_{1/2}=\frac{\ln2}{\lambda}$ og **doblingstid** $\frac{\ln2}{\lambda}$; **endringsrate** $y'(t)$; **Newtons avkjølingslov** $T(t)=T_{\text{omgivelse}}+K\,e^{-\lambda t}$ (bestem $K,\lambda$, finn når temperaturen når en gitt verdi); kontekster: konsentrasjon/reaksjonskonstant, medisin i blod, avkjøling, kontobeløp, populasjon. Aktiv føring; konklusjon med benevning.
- **Oppgavesjangre:** G. Mønstereksempel: «Et legeme på 60 °C settes i et rom på 20 °C og følger $T(t)=20+K\,e^{-\lambda t}$. Etter 8 min er temperaturen 45 °C. Bestem $K$ og $\lambda$, og finn når legemet når 30 °C.»
- **Typiske feil:** Blande $e^{-\lambda t}$ og $e^{\lambda t}$; løse for $\lambda$ uten logaritme; feil halveringstid; glemme at $C$ er startverdi kun ved $t=0$; ved avkjøling glemme omgivelsestemperaturen $T_{\text{omg}}$; glemme benevning/konklusjon.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.2: Drill: modellering (eksponential, kinematikk og blandede tekstoppgaver)

- **id:** `ma0001-6-2` · **number:** 6.2 · **estimatedMinutes:** 75 · **prerequisites:** `ma0001-6-1`
- **kapitteltype:** drill
- **description:** Tekstoppgave-repertoaret drillet: eksponentiell vekst/henfall/avkjøling, kinematikk (fart/akselerasjon/bremselengde via integral), og oppsett fra tekst til modell — med benevning og konklusjon slik det nye regimet krever.
- **Forkunnskaper (kryssbok):** Kap. 6.1, 3.3 (integral for kinematikk).
- **Eksamensbelegg:** Dekker sjanger G samlet (~65 %) + kinematikk (~10 %, dukket opp 2025). Variantkatalogen: vekst, henfall/halveringstid, avkjøling, kinematikk via integral, blandet modellering. Prioritet: **kunne**.
- **Innholdskontrakt:** Modellerings-oppskrift: (1) les teksten, **presiser antagelser** og navngi variabler med benevning; (2) velg modell (eksponential/kinematikk); (3) bruk datapunkter til å bestemme parametrene; (4) svar på det spurte; (5) **konklusjonssetning med benevning og riktige desimaler**. **Kinematikk**: fart = $\int$ akselerasjon, posisjon = $\int$ fart; bremselengde. Gjennomregnet «tekstoppgave-case» med sensor-margnotater (antagelse skrevet, benevning, konklusjon). 10–12 oppgaver på eksamensnivå: tre eksponential (vekst/henfall/avkjøling), to kinematikk, resten blandet.
- **Oppgavesjangre:** G/L-anvendelse. Mønstereksempel: «En bil bremser med konstant retardation fra 25 m/s. Farten er $v(t)=25-5t$. Finn bremselengden (integrer farten til bilen står).»
- **Typiske feil:** Feil modellvalg; glemme å presisere antagelser; regnefeil i logaritmen; glemme benevning/konklusjon; ved kinematikk feil integrasjonsgrense (stopp når $v=0$).
- **Quiz: 15 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (spesifisert i §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Føringsstandarden: begrunnelse, formelark og de fem sensorkravene

- **id:** `ma0001-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `ma0001-0-1`
- **kapitteltype:** teori (føring)
- **description:** Slik skriver du en A-besvarelse i MA0001: begrunn alt, hent og vis formeloppsettet, identifiser ubestemt form før L'Hôpital, navngi skjæringssetningen, vis deriverbarhet med differansekvotient, og svar med benevning + riktige desimaler + konklusjon.
- **Forkunnskaper (kryssbok):** Hele boka (oppsummerende).
- **Eksamensbelegg:** Metakapittel — destillerer sensorreglene (analysens §4) til en føringssjekkliste. Prioritet: **perfekt** (føring er en selvstendig karakterskiller i det nye regimet).
- **Innholdskontrakt:** **Føringssjekklisten**: (1) alle skriftlige svar begrunnes, nok mellomregning til at framgangsmåten er tydelig (flervalg: ingen begrunnelse); (2) **hent formelen fra arket og vis oppsettet** (lineær tilnærming, Newton, trapesfeil, Taylor, gjennomsnittsverdi, derivert av invers); (3) **identifiser ubestemt form** ($[0/0]$) før L'Hôpital; (4) **navngi skjæringssetningen** med forutsetninger; (5) **deriverbarhet med differansekvotient**; (6) **benevning + riktig antall desimaler + konklusjonssetning**; (7) presiser antagelser i modellering. Hva som skiller bestått/midt/topp (analysens §4). Denne sjekklisten gjenbrukes i alle øvingseksamen-løsninger.
- **Oppgavesjangre:** 2–3 «rett føringen»-oppgaver: gitt en besvarelse med manglende begrunnelse/benevning/formidentifikasjon — pek på hva sensor trekker for og skriv om til A-besvarelse.
- **Typiske feil:** Riktig svar uten føring; formel brukt uten oppsett; L'Hôpital uten formidentifikasjon; skjæringssetningen ubenevnt; deriverbarhet med derivertformel; manglende benevning/desimaler/konklusjon.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 7.2: Drill: funksjonsforståelse (flervalg)

- **id:** `ma0001-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `ma0001-1-1`
- **kapitteltype:** drill
- **description:** Flervalgsblokken drillet: rask avgjørelse uten begrunnelse — største def./verdimengde, injektiv/surjektiv/kontinuerlig/invers, ekstremalpunkt via andrederiverttest, enkel grense og enkelt areal — med de vanligste distraktorene.
- **Forkunnskaper (kryssbok):** Kap. 1.1, 1.2, 2.3, 3.4 (grunnlaget for hvert flervalgsspørsmål).
- **Eksamensbelegg:** Sjanger Q, **~55 %** (6 spørsmål/sett i 2022–24, delvis videreført som Inspera-flervalg 2025). Fasitens grep: rask gjenkjenning, ingen begrunnelse; vedlagt utregning vurderes ikke. Prioritet: **kunne** (billige, garanterte poeng + presisjonstest).
- **Innholdskontrakt:** **Flervalgsoppskrift** (rask gjenkjenning uten begrunnelse): største def./verdimengde (√≥0, ln>0, absoluttverdi); injektiv/surjektiv/kontinuerlig/har invers; finn invers algebraisk; ekstremalpunkt via $f'=0$ + andrederiverttest; enkel grense; enkelt areal. **Distraktorkatalogen** (analysens §5): verdimengde-slurv, injektiv/surjektiv/kontinuerlig forvekslet, volum uten $\pi$. Gjennomgått eksempelblokk med hvorfor hver distraktor er feil. 15–20 flervalgsspørsmål (options[0] = riktig), begge flervalgsvarianter («nøyaktig ett» og «minst ett»).
- **Oppgavesjangre:** Q. Mønstereksempel: «Hvilken er den største definisjonsmengden til $f(x)=\sqrt{\ln(x^3)}$? A) $x\ge1$ B) $x>0$ C) $x\ge0$ D) $x>1$.»
- **Typiske feil:** Se distraktorkatalogen; bruke tid på begrunnelse (gir ingen ekstrapoeng); slurve med verdimengde/def.mengde-krav; forveksle egenskapene.
- **Quiz: 18 · Flashcards: 10**

#### Kapittel 7.3: Øvingseksamen 1: ~11 likt vektede oppgaver — typisk ferskt sett

- **id:** `ma0001-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `ma0001-7-1`
- **kapitteltype:** øvingseksamen (skriftlig, kode D + formelark)
- **description:** Komplett 4-timers sett med ~11 likt vektede oppgaver, kalibrert på den nyeste malen (des-2024→): derivasjon, implisitt+tangent, grenser, integraler, eksponentialmodell, areal/volum, Newton, geometrisk rekke, Taylorrekke.
- **Eksamensbelegg/miks:** Speiler den nyeste malen (**4 t, ~11 likt vektede oppgaver, kode D + 5-siders formelark, skriftlige begrunnet, noen Inspera-flervalg**), kalibrert på prognosen i §7: **O1–O2** derivasjon (én i punkt, sjanger A) → **O3** implisitt derivasjon + tangent (sjanger I) → **O4** grense mot ∞ (sjanger B) → **O5** L'Hôpital (sjanger B) → **O6** standardintegral/substitusjon (sjanger C) → **O7** delvis integrasjon (sjanger C) → **O8** eksponentialmodell/avkjøling (sjanger G) → **O9** areal eller volum med skisse (sjanger H) → **O10** Newton, 3 desimaler (sjanger D) → **O11** geometrisk rekke + Taylorrekke (sjanger N + O). ~11 likt vektede oppgaver. Alle nyskrevne med pene tall. Løsningsforslag i `collapsible` per oppgave som A-besvarelse etter 7.1-standarden, med `tip`-notat om tidsbudsjett (~22 min/oppgave) og hvor begrunnelses-/benevningspoengene sitter.
- **Typiske feil:** Se 7.1 (føringsfellekatalogen) og de temaspesifikke feilene per sjanger.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 2: ~11 likt vektede oppgaver — bred kjerne med numerikk

- **id:** `ma0001-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `ma0001-7-3`
- **kapitteltype:** øvingseksamen (skriftlig, kode D + formelark)
- **description:** Sett to som vrir mot numerikk og tilnærming: Taylorpolynom anvendt til integral, trapes med feilestimat, optimering med figur, kontinuitet/deriverbarhet med differansekvotient, uegentlig integral — så settene sammen dekker A–Q.
- **Eksamensbelegg/miks:** Samme nyeste mal (4 t, ~11 likt vektede, kode D + formelark), med restsjangrene: **O1–O2** derivasjon + logaritmisk (sjanger A) → **O3** kontinuitet/skjøte + deriverbarhet med differansekvotient (sjanger F) → **O4** grense (L'Hôpital gjentatt, sjanger B) → **O5** integral med I-metoden (sjanger C) → **O6** uegentlig integral med lim (sjanger C/H) → **O7** Taylorpolynom grad 3 anvendt til integral (sjanger E) → **O8** trapes med feilestimat, finn $n$ (sjanger K) → **O9** optimering med figur (sjanger J) → **O10** Newton med startpunkt-drøfting (sjanger D) → **O11** harmonisk svingning, fasomskriving (sjanger P). ~11 likt vektede oppgaver. Alle nyskrevne; A-besvarelse-løsninger med vektings-/tidstips per oppgave.
- **Typiske feil:** Se 7.1 og temaspesifikke feil; særlig deriverbarhet med derivertformel (O3), «sett inn ∞» i uegentlig (O6), $n$ rundet ned (O8).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 3: 6 flervalg + 6 skriftlige — 2022–24-malen

- **id:** `ma0001-7-5` · **number:** 7.5 · **estimatedMinutes:** 240 · **prerequisites:** `ma0001-7-4`
- **kapitteltype:** øvingseksamen (skriftlig + flervalg, kode D)
- **description:** Ett sett i den forrige stabile malen (6 flervalg à 30 poeng + 6 skriftlige à 70 poeng): flervalgsblokken tester funksjonsforståelse (def./verdimengde, injektiv/invers, ekstremalpunkt), de skriftlige de fem søylene — beholdt fordi flervalgs-repertoaret fortsatt er relevant.
- **Eksamensbelegg/miks:** Speiler **2022–24-malen** (6 flervalg 30 p + 6 skriftlige 70 p, kode D): **flervalg (F1–F6, sjanger Q)** — største def./verdimengde, injektiv/surjektiv/invers, kontinuitet, ekstremalpunkt via andrederiverttest, enkel grense, enkelt areal (ingen begrunnelse); **skriftlige (S1–S6)** — S1 derivasjon (A), S2 grense/L'Hôpital (B), S3 integral standard+substitusjon (C), S4 Newton (D), S5 eksponentialmodell (G), S6 areal/volum (H). Flervalg: options[0] = riktig, begge regelvarianter. Løsningsforslag: flervalg med kort «hvorfor», skriftlige som A-besvarelse med tips.
- **Typiske feil:** Se 7.1 og distraktorkatalogen (7.2); bruke tid på begrunnelse i flervalgsdelen.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.6: Øvingseksamen 4: ~11 oppgaver — det ferske pensumtilskuddet i fokus

- **id:** `ma0001-7-6` · **number:** 7.6 · **estimatedMinutes:** 240 · **prerequisites:** `ma0001-7-5`
- **kapitteltype:** øvingseksamen (skriftlig, kode D + formelark)
- **description:** Fjerde sett kalibrert på de nyeste og vanskeligste variantene: geometrisk rekke (uendelig sum), Taylorrekke (utled ny fra kjent), harmonisk svingning, relaterte rater, samt de fem søylene på toppnivå — det ferske pensumtilskuddet i sentrum.
- **Eksamensbelegg/miks:** Nyeste mal (4 t, ~11 likt vektede, kode D + formelark), kalibrert på de ferskeste/vanskeligste dokumenterte variantene: **O1** derivasjon i punkt + logaritmisk (sjanger A) → **O2** implisitt derivasjon + tangent på transcendent kurve (sjanger I) → **O3** L'Hôpital ($0\cdot\infty$ omskrevet, sjanger B) → **O4** delvis integrasjon/I-metoden (sjanger C) → **O5** omdreiningsvolum med skisse (sjanger H) → **O6** eksponentiell henfall + halveringstid (sjanger G) → **O7** Newton med skjæringssetningen først (sjanger D + M) → **O8** geometrisk rekke, uendelig sum med $|k|<1$-sjekk (sjanger N) → **O9** Taylorrekke utledet ved substitusjon (sjanger O) → **O10** harmonisk svingning, fasomskriving (sjanger P) → **O11** relaterte rater med figur (sjanger L). ~11 likt vektede oppgaver. `warning`-notat i løsningen: O8 krever $|k|<1$-sjekk for uendelig sum; O9 vis substitusjonen eksplisitt. A-besvarelse-løsninger med tids-/vektingstips.
- **Typiske feil:** Se 7.1 og temaspesifikke feil; særlig uendelig-sum uten $|k|<1$-sjekk (O8), feil substitusjon i Taylorrekke (O9), feil kvadrant for $t_0$ (O10).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne temaprøver — de fire øvingseksamenene (7.3–7.6) er delens prøver.

---

## Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.4 | 20+20+20+16 = **76** | 22+22+24+8 = **76** |
| 2 | 2.1–2.6 | 22+18+16+18+16+16 = **106** | 24+18+16+16+12+8 = **94** |
| 3 | 3.1–3.5 | 20+18+18+18+16 = **90** | 22+18+18+16+8 = **82** |
| 4 | 4.1–4.4 | 20+20+16+16 = **72** | 20+20+16+8 = **64** |
| 5 | 5.1–5.3 | 20+18+16 = **54** | 22+20+16 = **58** |
| 6 | 6.1–6.2 | 20+15 = **35** | 18+12 = **30** |
| 7 | 7.1–7.6 | 12+18+5+5+5+5 = **50** | 14+10+0+0+0+0 = **24** |
| **Sum** | **31 kap.** | **493 → se korreksjon** | **440 → se korreksjon** |

> **Regnesjekk (korreksjon):** Del-summene over gir Quiz $10+76+106+90+72+54+35+50 = 493$ og
> Flashcards $12+76+94+82+64+58+30+24 = 440$. Dette er **under gulvet på 500**. Kvotene
> nedenfor er derfor **oppjustert per kapittel** slik at summen passerer 500 med margin.
> **Den oppjusterte tabellen under er den AUTORITATIVE fasiten** — de per-kapittel-kvotene i
> §3 skal leses med disse påslagene (påslag fordelt på teori-/drillkapitlene i hver del, ikke
> på øvingseksamenene som holder 5 quiz / 0 flashcards).

### AUTORITATIV kvotetabell (oppjustert — denne gjelder)

| Del | Kapitler | Quiz (autoritativ) | Flashcards (autoritativ) |
|---|---|---|---|
| 0 | 0.1 | 10 | 14 |
| 1 | 1.1–1.4 | 22+22+22+18 = **84** | 26+26+28+10 = **90** |
| 2 | 2.1–2.6 | 24+20+18+20+18+18 = **118** | 28+22+18+20+16+10 = **114** |
| 3 | 3.1–3.5 | 22+20+20+20+18 = **100** | 26+22+22+20+10 = **100** |
| 4 | 4.1–4.4 | 22+22+18+18 = **80** | 24+24+18+10 = **76** |
| 5 | 5.1–5.3 | 22+20+18 = **60** | 26+24+20 = **70** |
| 6 | 6.1–6.2 | 22+17 = **39** | 22+16 = **38** |
| 7 | 7.1–7.6 | 14+20+5+5+5+5 = **54** | 18+14+0+0+0+0 = **32** |
| **Sum** | **31 kap.** | **545 ≥ 500 ✓** | **534 ≥ 500 ✓** |

**Autoritative per-kapittel-kvoter (bruk DISSE ved bygging — de overstyrer §3-tallene):**

- **0.1** quiz 10 / fc 14
- **1.1** quiz 22 / fc 26 · **1.2** quiz 22 / fc 26 · **1.3** quiz 22 / fc 28 · **1.4** (drill) quiz 18 / fc 10
- **2.1** quiz 24 / fc 28 · **2.2** quiz 20 / fc 22 · **2.3** quiz 18 / fc 18 · **2.4** quiz 20 / fc 20 · **2.5** quiz 18 / fc 16 · **2.6** (drill) quiz 18 / fc 10
- **3.1** quiz 22 / fc 26 · **3.2** quiz 20 / fc 22 · **3.3** quiz 20 / fc 22 · **3.4** quiz 20 / fc 20 · **3.5** (drill) quiz 18 / fc 10
- **4.1** quiz 22 / fc 24 · **4.2** quiz 22 / fc 24 · **4.3** quiz 18 / fc 18 · **4.4** (drill) quiz 18 / fc 10
- **5.1** quiz 22 / fc 26 · **5.2** quiz 20 / fc 24 · **5.3** quiz 18 / fc 20
- **6.1** quiz 22 / fc 22 · **6.2** (drill) quiz 17 / fc 16
- **7.1** quiz 14 / fc 18 · **7.2** (drill) quiz 20 / fc 14 · **7.3–7.6** (øvingseksamen) quiz 5 / fc 0 hver

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcard-tettheten er bevisst moderat (534, nær gulvet):** MA0001 er et **rent regnefag
med få begreper** og en **utdelt formelsamling** — formlene pugges ikke, så flashcards brukes
til **definisjoner, prosedyre-oppskrifter og formidentifikasjon** (når/hvordan en formel
brukes), ikke ren formel-pugging. De fem søylene (derivasjon Del 2, integrasjon Del 3,
grenser Del 1, Newton/Taylor Del 4) bærer flest kort fordi de har flest prosedyre-varianter;
det ferske pensumtilskuddet (Del 5) har høy tetthet per kapittel fordi sjangrene er nye og
mønsteret må sitte. Quiz-fordelingen speiler eksamensvektene: **de tre store søylene (Del 2
derivasjon, Del 3 integrasjon, Del 1 grenser+funksjon) bærer 302 av 545 quiz**; numerikk +
rekker (Del 4+5) 140; meta/modellering/trening (Del 0+6+7) 103. Drillkapitlene holdes lave på
flashcards (10) fordi verdien er oppgaver; øvingseksamenene har 0 flashcards og 5 quiz hver.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Alle prøver består av nyskrevne oppgaver i arkivets sjangre, med løsningsforslag etter
føringsstandarden (7.1), poengfordeling og svar med benevning/desimaler. Alt skriftlig med
full begrunnelse (flervalgs-varianter kun der 2022–24-malen tilsier det). Legges som
prøvekapitler (`ma0001-<del>-prove`, chapterNumber `<del>.P`) etter plattformens mønster.
Kalibrert mot kode D + utdelt formelsamling.

**Del 1 — Funksjoner, grenser og kontinuitet**
1. Prøve 1.A (35 min): Definisjonsmengde/verdimengde + injektiv/invers (kap. 1.1, sjanger Q).
2. Prøve 1.B (40 min): Grenser mot ∞ + standardgrenser (kap. 1.2, sjanger B).
3. Prøve 1.C (40 min): Kontinuitet/skjøteparameter + deriverbarhet med differansekvotient + skjæringssetningen (kap. 1.3, sjanger F + M).
4. Prøve 1.D (45 min): L'Hôpital-tverrsnitt — alle fire ubestemte former kjedet (kap. 1.4, sjanger B).

**Del 2 — Derivasjon og dens anvendelser**
1. Prøve 2.A (35 min): Derivasjon med regelvalg + kjeding + derivert i punkt (kap. 2.1, sjanger A).
2. Prøve 2.B (40 min): Implisitt derivasjon + tangentlikning (kap. 2.2, sjanger I).
3. Prøve 2.C (45 min): Optimering med figur + funksjonsdrøfting (kap. 2.3–2.4, sjanger J).
4. Prøve 2.D (40 min): Relaterte rater + derivasjons-simulering (kap. 2.5–2.6, sjanger L + A).

**Del 3 — Integrasjon**
1. Prøve 3.A (35 min): Standardintegral + substitusjon (ubestemt + bestemt med grensebytte) (kap. 3.1, 3.3, sjanger C).
2. Prøve 3.B (40 min): Delvis integrasjon + I-metoden (kap. 3.2, sjanger C).
3. Prøve 3.C (45 min): Areal mellom kurver + omdreiningsvolum med skisse (kap. 3.4, sjanger H).
4. Prøve 3.D (40 min): Fundamentalteorem (deriver integral) + uegentlig integral med lim (kap. 3.3–3.4, sjanger C).

**Del 4 — Numeriske metoder og tilnærming**
1. Prøve 4.A (40 min): Newton — finn skjæringspunkt, 3 desimaler, startpunkt-drøfting (kap. 4.1, sjanger D).
2. Prøve 4.B (40 min): Taylorpolynom grad 1–3 + anvendt til verdi/integral (kap. 4.2, sjanger E).
3. Prøve 4.C (40 min): Trapes med feilestimat (finn $n$) + derivert av invers (kap. 4.3, sjanger K + E).
4. Prøve 4.D (45 min): Numerikk-simulering — Newton + Taylor kjedet (kap. 4.4, sjanger D + E).

**Del 5 — Rekker og svingninger**
1. Prøve 5.A (35 min): Geometrisk rekke — endelig + uendelig sum med $|k|<1$-sjekk (kap. 5.1, sjanger N).
2. Prøve 5.B (40 min): Taylorrekke — utled ny fra kjent ved substitusjon/kombinasjon (kap. 5.2, sjanger O).
3. Prøve 5.C (40 min): Harmonisk svingning — avlesning + fasomskriving $C\cos(\omega(t-t_0))$ (kap. 5.3, sjanger P).
4. Prøve 5.D (40 min): Rekke-/svingnings-tverrsnitt — geometrisk rekke + Taylorrekke + svingning kjedet (kap. 5.1–5.3, sjanger N + O + P).

**Del 6 — Anvendt modellering**
1. Prøve 6.A (35 min): Eksponentiell vekst/henfall + halveringstid (kap. 6.1, sjanger G).
2. Prøve 6.B (40 min): Newtons avkjølingslov — bestem parametre, finn tidspunkt (kap. 6.1, sjanger G).
3. Prøve 6.C (35 min): Kinematikk — fart/posisjon/bremselengde via integral (kap. 6.2, sjanger G/L).
4. Prøve 6.D (40 min): Modellerings-simulering — blandet tekstoppgave med benevning og konklusjon (kap. 6.1–6.2, sjanger G).

### Øvingseksamener (4 komplette sett — se kap. 7.3–7.6)

| Sett | Form den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.3) | Typisk ferskt sett (des-2024→) | A(O1–2) + I(O3) + B(O4–5) + C(O6–7) + G(O8) + H(O9) + D(O10) + N/O(O11) |
| Øvingseksamen 2 (kap. 7.4) | Bred kjerne med numerikk | A(O1–2) + F(O3) + B(O4) + C(O5–6) + E(O7) + K(O8) + J(O9) + D(O10) + P(O11) |
| Øvingseksamen 3 (kap. 7.5) | 2022–24-malen | Q(F1–6, flervalg) + A/B/C/D/G/H(S1–6, skriftlige) |
| Øvingseksamen 4 (kap. 7.6) | Ferskt pensumtilskudd i fokus | A(O1) + I(O2) + B(O3) + C(O4) + H(O5) + G(O6) + D/M(O7) + N(O8) + O(O9) + P(O10) + L(O11) |

Til sammen dekker de fire settene samtlige sjangre A–Q minst én gang, begge malene (nyeste
~11-oppgave og 2022–24 flervalg+skriftlig), det ferske pensumtilskuddet (geometrisk rekke,
Taylorrekke, harmonisk svingning), og de fem søylene på toppnivå. Alle er kalibrert mot
**kode D + utdelt 5-siders formelsamling** (svar med benevning + riktige desimaler +
konklusjon).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Det nyeste formatet og kode D + formelark** — vurderingsformen (4-timers skriftlig
   skoleeksamen, ~11 likt vektede oppgaver, karakter A–F, hjelpemiddelkode D + utdelt
   5-siders formelsamling), hva det betyr at kravet er *anvendelse, ikke pugging*, og
   føringsstandarden (begrunn alt, form før L'Hôpital, skjæringssetningen navngis,
   differansekvotient, benevning/desimaler/konklusjon).
2. **De fem søylene** — derivasjon (~100 %), grenser+L'Hôpital (~95 %), integrasjon (~95 %),
   Newton (~80 %), Taylor (~80 %): dette henter mesteparten av poengene.
3. **Det ferske pensumtilskuddet** — geometriske rekker, Taylorrekker, harmoniske svingninger
   (nye 2023/2024→, nesten garantert nå; *verifiser*).
4. **Nivå 2-breddene** — kontinuitet/deriverbarhet, areal/volum, implisitt+tangent, optimering,
   numerisk integrasjon med feilestimat, eksponentiell modellering, funksjonsforståelse
   (flervalg).
5. **Nivå 3 / bør kjenne til** — relaterte rater, uegentlige integraler, fundamentalteoremet
   (deriver et integral), kinematikk.
6. **Leseplan:** Del 0 → Del 1 (grunnlag + grenser) → Del 2 (derivasjon, mest tid) → Del 3
   (integrasjon, mest tid) → Del 4 (Newton + Taylor) → Del 5 (rekker/svingninger — ikke hopp
   over) → Del 6 (modellering) → Del 7 (føring + funksjonsforståelse-flervalg + de fire
   øvingseksamenene under tidspress, 4 timer, kode D + formelark).

---

## 6. Byggenotater (til orkestrator og forfatter-agenter)

- **Batching: én agent per hel del.** Del 2 (6 kap.) og Del 3 (5 kap.) er de største; kan
  splittes på to agenter hver, men **begge må lese HELE delens kontrakter** og delen flagges
  for konsistenssjekk. Prøvekapitlet til en del bygges av samme agent som delen.
  Øvingseksamenene (7.3–7.6) bygges av én agent som leser HELE skjelettet.
- **Kvotene fra den AUTORITATIVE kvotetabellen (§ Summeringskontroll) er fasit** — bruk de
  oppjusterte per-kapittel-kvotene, ikke §3-tallene der de avviker.
- **Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`** — legg
  definisjoner/oppskrifter som slike blokker (ikke i collapsible). «Fra formelarket»-notene
  kan være `tip`-blokker, men de tellende definisjonene skal være toppnivå `definition`.
- **`options[0]` = riktig svar i quiz-staging** (runtime stokker). Flervalgsøvingseksamen
  (7.5) og funksjonsforståelse-drillen (7.2) bruker samme konvensjon.
- **LaTeX i JSON: generer via `json.dump`** (unngå råskrevet `\\`-feil).
- **Kryssbok-lenker:** verifiser hver VGS-id (R1/R2/S2) mot bygd bok FØR lenking; der id ikke
  bekreftes, bruk klartekst-markøren *(VGS-forkunnskap; aktiver lenke når bekreftet)*. Lenk
  aldri til en id du ikke har sett finnes.
- **Navigasjon:** registrer emnet i `src/app/trinn/hoyere/institusjoner.ts` under NTNU
  med navn «MA0001 Brukerkurs i matematikk A».
- **Sluttsjekk (fase 7):** json.load alle filer, kvotesum ≥ 500/500, tsc + build, prod-server
  + curl på institusjonsside/bokforside/3 kapitler/quiz+flashcard-rute.

---

## 7. Byggekontrakt-sjekkliste (fase 3-input)

- [ ] **Kapitler:** 31 (1 eksamenskart + 26 tema/drill + 4 øvingseksamener).
- [ ] **Quiz:** 545 ≥ 500 (autoritativ tabell).
- [ ] **Flashcards:** 534 ≥ 500 (autoritativ tabell).
- [ ] **Prøver:** 4 per temadel 1–6 (24 stk) + 4 øvingseksamener (7.3–7.6) som sammen dekker
      sjangrene A–Q.
- [ ] **Stilregler §1.5** ordrett i byggekontrakten (begrunn alt, formelark-anvendelse, form
      før L'Hôpital, skjæringssetningen navngis, differansekvotient, benevning/desimaler).
- [ ] **Kode D + formelark-kalibrering §1.6** gjengitt i Del 0.
- [ ] **Leserkrav** (forkunnskaper-blokk med verifiserte kryssbok-lenker, Symbol- og
      formelliste per delkapittel, kun eksamensrelevant, engasjerende språk, sjangerforankrede
      oppgaver) inn i byggekontrakten FØR byggebølgen.

# Bokskjelett: FYS1100 Mekanikk og modellering — eksamensrettet lærebok (UiO)

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er angitt her, destillert fra
> `EKSAMENSANALYSE.md` (7 avsluttende skoleeksamener 2022–2025 med
> løsningsforslag/sensorveiledning + 1 prøveeksamen + 10 midtveiseksamener; alle
> sensorveiledninger lest ordrett; alle sju avsluttende settene gjennomgått
> oppgave-for-oppgave). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Alle mønstereksempler i dette skjelettet er omskrevne —
> de kan varieres videre, men aldri kopieres ordrett inn som oppgaver. Formlene er
> standard fysikknotasjon og ikke opphavsrettslig beskyttet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `fys1100` |
| Tittel | **FYS1100 Mekanikk og modellering — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (kvantitativt fag med faste oppgavemaler + eget numerisk Python-spor) |
| Antall kapitler | **33** (1 eksamenskart + 28 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 665 min ≈ 44 timer** (33 innholdskapitler; prøvekapitler kommer i tillegg) |
| Quiz totalt | **559** (krav ≥500) |
| Flashcards totalt | **578** (krav ≥500) |

**Pitch (ett avsnitt):** FYS1100-eksamen er usedvanlig forutsigbar. Et moderne
sett er fire–sju flertrinnsoppgaver (a–e) etter samme grunnmønster: **(1)** en
Newton-/energi-/bevaringsoppgave med **frilegemediagram** og grensetilfeller,
**(2)** en **rotasjons-/stiv-legeme-oppgave**, **(3)** en **differensiallignings-
oppgave** som utledes, løses analytisk og **avsluttes med en Python-/Euler–Cromer-
deloppgave**, **(4)** en **spesiell-relativitet-oppgave** (nesten alltid siste),
pluss 1–2 oppgaver trukket fra {skrått kast, sirkelbevegelse, Fermi-estimering,
gravitasjon}. Fire søyler bærer hvert eneste sett (2022–2025, alle **100 %**):
**numerisk Python (Euler–Cromer)**, **Newton + frilegemediagram + kraftmodeller**,
**arbeid/energi/bevegelsesmengde med bevaringsargumenter**, og **rotasjon/stive
legemer**. Denne boka er kalibrert mot nettopp det: full metodedrill på søylene,
et eget numerisk Python-spor som et fullverdig kapittelspor (ikke en fotnote), og
konsekvent trening i det sensor faktisk belønner — **alt skal begrunnes**,
frilegemediagram som selvstendig poenggivende ferdighet, **begrunne hvorfor en
bevaringslov gjelder**, og skrive en korrekt **Euler–Cromer-løkke med `abs(v)*v`
i drag-leddet — og begrunne metodevalget**. Spesiell relativitet (86 %) og
differensiallikninger (86 %) er nesten-sikkert stoff; sirkelbevegelse (71 %),
svingninger (71 %), skrått kast (~50 %), Fermi (57 %) og Taylor (57 %) er solide
nivå 2-temaer. Gravitasjon (~35 %, økende) er kjenne-stoff. **Lagrange-formalismen
utelates** (0/7 tross emnebeskrivelsen) — kun kort kjenne-omtale i Del 0.

**Kritisk rammebetingelse (gjelder HELE boka):** Eksamen deler ut et **fagspesifikt
formelark** (bakerst i settet, identisk 2023–2025) og tillater **Rottmann
«Matematisk formelsamling»** + godkjent kalkulator. Boka skal derfor ALDRI
fremstille formler og konstanter som puggestoff. Skillet er: **«må kunne brukes
aktivt»** (velges, kombineres, utledes under tidspress — kjerneverktøyene i
kapitlenes innholdskontrakter) vs. **«hentes fra arket/Rottmann»** (standard­
formler for konstant $a$/$\alpha$, Taylor-restledd, oppskrift for karakteristisk
likning, treghetsmoment-tabeller, Lorentz-transformasjon). Hvert delkapittels
Symbol- og formelliste markerer eksplisitt hva som **står på formelarket**. Boka
trener **bruk og utledning**, ikke pugg. Gjennomgangskravet står i hodet på hvert
sett: **«Husk at alle svar må begrunnes!»**

**Kritisk metaregel (gjelder HELE boka — sensorveiledningene 2022–2025, påfallende
stabile):**
- **Alt skal begrunnes.** Bare riktig svar uten begrunnelse gir liten/ingen
  uttelling; å bare skrive opp relevante formler uten å bruke dem gir **null**.
  Dette er den hyppigst påpekte enkeltfeilen — hvert løsningsforslag i boka skal
  *modellere* begrunnelsen, ikke bare svaret.
- **Inntil 5 poeng per deloppgave, alle deloppgaver teller likt.** Det gis poeng
  for en god løsningsidé selv om den ikke fullføres — **bredde lønner seg**.
- **Følgefeil straffes ikke** når mellomregningen er vist så feilen er sporbar.
- **Flere gyldige metoder godtas** og vises ofte side om side i fasiten (fart via
  $v = gt\sin\theta$ *eller* $s = \tfrac12 g\sin\theta\, t^2$; «kommer lengst opp
  med/uten friksjon» begrunnes *både* med energi *og* N2L). Løsningene i boka bør
  speile dette der sensor forventer det.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
- **Vektor vs. skalar:** kraft $\mathbf{F}$, fart $\mathbf{v}$, akselerasjon
  $\mathbf{a}$, posisjon $\mathbf{r}$, bevegelsesmengde $\mathbf{p}$, kraftmoment
  $\boldsymbol{\tau}$, spinn $\mathbf{L}$, vinkelfart $\boldsymbol{\omega}$ er
  vektorer (fete symboler / vektorpil). Masse $m$, energi $E$/$K$/$U$, arbeid $W$,
  tid $t$, treghetsmoment $I$, temperatur er skalarer. **Manglende retning på en
  vektorstørrelse (hastighet, moment) koster −2p** og skal aldri forekomme i et
  løsningsforslag.
- **Frilegemediagram er selvstendig poenggivende:** hvert FBD navngir og forklarer
  alle krefter og symboler (**−2p for udefinerte symboler / uforklarte krefter**),
  har riktig retning, riktig angrepspunkt (−1p ved klart feil) og rimelig lengde
  på vektorene ($N$ vs. tyngdekomponenten). **Ikke tegn inn fiktive
  «sentripetalkrefter»** (−1p).
- **Indeks- og kodedisiplin (Python):** i en integrasjonsløkke skrives alltid
  `v[i]`, aldri `v` (**−2p**); drag skrives `-D*abs(v)*v`, aldri `-D*v**2`
  (**−1p**); i 2D tas *begge* komponenter med (maks 2p ellers).
- **Egentid/egenlengde (relativitet):** identifiser hvilket system som måler
  egentid/egenlengde; **bytte om $l$ og $l_0$ koster −2p**; bevegelsesligninger
  uten Lorentz-faktor gir 0p.
- **Enheter og siffer:** alle tallsvar med SI-enhet og et fornuftig antall
  gjeldende siffer (2–3); svar med ett siffer mer/mindre enn fasit godtas,
  avrundingsforskjeller i mellomregning trekkes normalt ikke (enkelte deloppgaver
  trekker −1p for kun ett gjeldende siffer eller feil enhet).

**Bevisst nedprioritert / utelatt (begrunnes i Del 0):**
- **Lagrange-formalisme:** nevnt i emnebeskrivelsens læringsutbytte, men **aldri
  testet (0/7)** — all mekanikk i settene er newtonsk (kraft/moment-basert).
  Får **kun én kort kjenne-omtale i kap. 0.1** (hva det er, at det finnes, og at
  det ikke prioriteres) — **aldri egne oppgaver eller drill**.
- **Runge–Kutta og høyere ordens metoder:** pensum nevner dem, men **Euler–Cromer**
  er metoden sensor forventer og premierer. RK omtales som beredskap i kap. 8.3,
  ikke som satsingsområde.
- Kvantefysikk, termodynamikk og bølgelære er ikke del av FYS1100s mekanikk-kjerne
  og dekkes ikke.

**Forhold til søsterbøkene (kryssbok-lenker — KUN til kapitler som finnes):**
FYS1100 forutsetter matematikk fra R1/R2 og bygger videre på mekanikken i
Fysikk 2. Verifiserte lenkemål (per 7. juli 2026):
- **Vektorregning:** [Vektorer i tre dimensjoner](/bok/r2/r2-5-1),
  [Vektorkoordinater og regning](/bok/r2/r2-5-2),
  [Skalarproduktet](/bok/r2/r2-5-3), [Kryssproduktet](/bok/r2/r2-5-4)
  (kraftmoment $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$); grunnlag i
  [Vektorer i planet](/bok/r1/r1-6-1) og [Vektorregning](/bok/r1/r1-6-2).
- **Derivasjon/kinematikk:** [Derivasjon av vektorfunksjoner](/bok/r2/r2-6-2),
  [Hastighet og akselerasjon](/bok/r2/r2-6-3),
  [Parameterframstilling av kurver](/bok/r2/r2-6-1);
  [Derivasjonens definisjon](/bok/r1/r1-3-3),
  [Kjerneregelen](/bok/r1/r1-4-3),
  [Derivasjon av trigonometriske funksjoner](/bok/r1/r1-7-5).
- **Integrasjon:** [Bestemt integral som grenseverdi](/bok/r2/r2-2-4),
  [Analysens fundamentalsetning](/bok/r2/r2-2-5),
  [Variabelskifte (substitusjon)](/bok/r2/r2-3-1),
  [Numerisk integrasjon](/bok/r2/r2-3-4),
  [Programmering av integrasjon](/bok/r2/r2-3-5).
- **Rekker (Taylor):** [Rekker og summasjon](/bok/r2/r2-1-4),
  [Uendelige rekker og konvergens](/bok/r2/r2-1-5).
- **Trigonometri:** [Trigonometriske funksjoner og enhetssirkelen](/bok/r1/r1-7-1),
  [Trigonometriske identiteter](/bok/r1/r1-7-4).
- **Fysikk 2-mekanikk:** [Vektorer og komponenter](/bok/fysikk2/fysikk2-1-1),
  [Bevegelse i to dimensjoner](/bok/fysikk2/fysikk2-1-2),
  [Kastering – horisontal og skrå](/bok/fysikk2/fysikk2-1-3),
  [Sirkelbevegelse og sentripetalkraft](/bok/fysikk2/fysikk2-1-4),
  [Numerisk modellering av bevegelse](/bok/fysikk2/fysikk2-1-5),
  [Newtons gravitasjonslov](/bok/fysikk2/fysikk2-2-1),
  [Unnslippningsfart og satellittbaner](/bok/fysikk2/fysikk2-2-4),
  [Spesiell relativitetsteori – postulater](/bok/fysikk2/fysikk2-6-1),
  [Tidsdilatasjon](/bok/fysikk2/fysikk2-6-2),
  [Lengdekontraksjon](/bok/fysikk2/fysikk2-6-3),
  [Relativistisk energi og masse](/bok/fysikk2/fysikk2-6-4).
- **Python-grunnlag:** grunnleggende NumPy/lister/`for`-løkker forutsettes og
  repeteres i Del 8; der emnet **IN1900** (i kø, ikke bygget) er naturlig
  forkunnskap, refereres det i **klartekst uten lenke**. Klassisk mekanikk fra
  **Fysikk 1** (VGS, ikke bygget i systemet) refereres også i klartekst der
  relevant — aldri som lenke.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): matematiske verktøy →
kinematikk → Newton/FBD → sirkelbevegelse → energi/bevegelsesmengde → rotasjon →
differensiallikninger/svingninger → numerisk Python → gravitasjon → relativitet →
eksamenstrening. Frekvensen styrer *omfanget*: «må beherskes perfekt»-temaer får
flere teorikapitler + eget drillkapittel; «bør kjenne til» får ett kompakt
kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer 4–7-oppgavers-malen og sjangerkatalogen A–K. |
| 1 | Modelleringsverktøy: dimensjonsanalyse, Taylor og Fermi | 3 | Verktøysjangre: dimensjonsanalyse (nyere MCQ-sjanger), Taylor **57 %**, Fermi **57 %** med egen retteregel → nivå 2, ett kapittel hver. Fermi har «eget kapittel»-krav. |
| 2 | Kinematikk og skrått kast | 2 | Skrått kast/2D **~50 %** (kunne); kinematikk-grafer er midtveis-favoritt → 1 teori + 1 sjanger A-kapittel med drill foldet inn. |
| 3 | Newtons lover, frilegemediagram og kraftmodeller | 4 | N2L+FBD **100 %** (perfekt, ryggrad); FBD selvstendig poenggivende → 3 teori + drill. |
| 4 | Sirkelbevegelse og sentripetalkraft | 2 | **71 %** (kunne); loop-fortegn, dosert sving, spiral → 2 teori (drill foldet inn i 4.2). |
| 5 | Arbeid, energi og bevegelsesmengde | 3 | Energi **100 %**, bevegelsesmengde/støt **71 %** (perfekt); metodefelle (energibevaring i uelastisk støt = 0p) → 2 teori + drill. |
| 6 | Rotasjon og stive legemer | 4 | **100 %**, tyngre enn vanlig fysikkløp (perfekt) → egen stor del: 3 teori + drill. |
| 7 | Differensiallikninger og svingninger | 4 | ODE **86 %**, SHM **71 %** (perfekt); metodefelle («integrere ODE som om $y$ konstant» = 0p) → 3 teori + drill. |
| 8 | Numerisk modellering med Python | 3 | **100 %** (perfekt). Emnets signatur og den viktigste forskjellen fra klassisk mekanikk. Eget fullverdig spor med kodekontrakter. |
| 9 | Gravitasjon og sentralkraftbevegelse | 1 | **~35 %, økende** (kjenne). Sirkelbane, unnslipningsfart, komet-/satellitt-ODE, dimensjonsanalyse → ett kompakt kapittel. |
| 10 | Spesiell relativitet | 2 | **86 %** (kunne, nesten alltid siste oppgave) → 1 regnekapittel + 1 paradoks/samtidighet-kapittel med romtidsdiagram. |
| 11 | Eksamenstrening | 4 | Kvalitativ/«kritiser feil løsning»-drill (sjanger J) + midtveis-MCQ-simulering + 2 komplette avsluttende øvingseksamener med Python-ledd. |

**Seksjonstitler (blir `sectionNames` i metadata — «Kapittel N: <tittel>» på bokforsiden):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Modelleringsverktøy: dimensjonsanalyse, Taylor og Fermi |
| 2 | Kinematikk og skrått kast |
| 3 | Newtons lover, frilegemediagram og kraftmodeller |
| 4 | Sirkelbevegelse og sentripetalkraft |
| 5 | Arbeid, energi og bevegelsesmengde |
| 6 | Rotasjon og stive legemer |
| 7 | Differensiallikninger og svingninger |
| 8 | Numerisk modellering med Python |
| 9 | Gravitasjon og sentralkraftbevegelse |
| 10 | Spesiell relativitet |
| 11 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Eget numerisk kapittelspor (Del 8, 3 kapitler).** DNA-en behandler numerikk
   som et mulig element; her er det en egen del på nivå 1, fordi Python/Euler–Cromer
   er testet i **100 %** av settene og er enkeltferdigheten som tydeligst skiller
   FYS1100 fra et klassisk mekanikkløp. Numerikk drilles også *som siste ledd* i
   ODE-kapitlene (7.2–7.3), men det samlede kode-håndverket (kodekontrakter,
   metodebegrunnelse, feilvurdering, kodemodifikasjon) bor i Del 8. Merk kontrasten
   til søsteremnet FYS1001, der numerikk er lovet men aldri testet.
2. **Eget Fermi-kapittel (kap. 1.3)** med egen retteregel. DNA-en ville folde en
   57 %-sjanger inn, men Fermi har en *kvalitativt annerledes* vurdering
   (størrelsesorden og resonnement premieres, ikke presisjon) og fortjener egen
   metodikk-behandling. Lagt i «modelleringsverktøy»-delen sammen med
   dimensjonsanalyse (beslektet: tierpotenser og benevning).
3. **Fire av fire drillkapitler ligger inne i temadelene sine** (3.4, 5.3, 6.4,
   7.4), ikke samlet i siste del, fordi sjangrene C/D/F/G er temaspesifikke
   gjengangere som må drilles rett etter teorien. Del 11 beholder den *tverrgående*
   sjangeren (kvalitative «forklar/kritiser»-oppgaver — sjanger J) og
   øvingseksamenene.
4. **Egen «kritiser en feilaktig løsning»-drill (kap. 11.1)** er et tillegg utover
   DNA-ens sjangerkapittel — begrunnet i at nyere sett eksplisitt ber kandidaten
   *kritisere* en gal løsning (ChatGPT-oppgaven: masse ≠ treghetsmoment; spinn er
   bevart) og at kvalitative «forklar med både energi OG N2L»-oppgaver er
   dokumentert poenggivende på tvers av settene.
5. **Midtveis-MCQ-simulering (kap. 11.2)** speiler at midtveiseksamen (~20–25 % av
   karakteren — verifiser mot gjeldende emneside) er ren flervalg over første
   halvdel. **Quizbanken i Del 1–7 er direkte midtveistrening** (se under); 11.2
   samler den til et generalprøve-format.

**Midtveiseksamen (~20–25 % av karakteren — `(verifiser)` mot emnesiden; ren
flervalg, ~20 spørsmål, 3 timer):** dekker **kun første halvdel** — kinematikk
(grafer, posisjon/fart/akselerasjon), Newtons lover, friksjon, frilegemeanalyse,
sirkelbevegelse/sentripetalkraft, arbeid/energi, bevegelsesmengde, gravitasjon/
unnslipningsfart, **og de matematiske verktøyene** (1./2. ordens diff.likninger,
Taylor, dimensjonsanalyse, treghetsmoment-rangering). Spenner altså over **Del 1–7
+ 9** (rene regne-/konseptbiter), men **aldri** de tyngre analytiske ODE-løsningene,
den håndskrevne Python-koden eller spesiell relativitet (de testes bare på
avsluttende). Quizbanken i Del 1–7 er kalibrert som midtveistrening; kap. 11.2 er
generalprøven.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–K) refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**A** skrått kast / 2D-kinematikk, **B** Fermi-/estimeringsproblem,
**C** Newton på skråplan / koblede klosser med friksjon (FBD),
**D** bevaringslover (bevegelsesmengde + mekanisk energi + støt),
**E** sirkelbevegelse og sentripetalkraft, **F** rotasjon av stivt legeme,
**G** svingninger / harmonisk oscillator / differensiallikninger,
**H** numerisk integrasjon og Python-kode, **I** spesiell relativitet,
**J** kvalitative/konseptuelle «forklar/begrunn/kritiser»-oppgaver,
**K** gravitasjon og sentralkraftbevegelse. Verktøysjangrene **dimensjonsanalyse**
og **Taylor-utvikling** dukker opp både frittstående (MCQ) og som ledd i A–K.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert **Eksamensvinkel**-`tip`,
**Forkunnskaper**-blokk med kryssbok-lenker og `collapsible` **Symbol- og
formelliste** rett etter (SÆRLIG viktig i fysikk: ALLE symboler og formler i
delkapitlet forklares, per delkapittel — aldri arv fra tidligere kapitler — med
markering av hva som **står på formelarket** vs. hva som må kunne brukes/utledes),
**Motivasjon**, definisjoner/teoremer i eksamensnotasjon, **Utledning med
intuisjon**, 2–4 eksempler (siste på eksamensnivå, med **figur-/FBD-beskrivelse**
der sensor forventer figur), **Typiske feil**-`warning`, 6–12 øvinger med
`solution` + `hints` (stigende; minst én kvalitativ J-oppgave per teorikapittel),
og **Repetisjonsoppgaver**-`collapsible`. Drillkapitler har løsningsoppskrift +
sensor-kommentert gjennomregnet case + 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes FYS1100

- **id:** `fys1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, oppgavemalen, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2022–2025. Skal gjengi: (i) **formen:** todelt vurdering — **midtveiseksamen** (digital flervalg, 3 t, ~20 % av karakteren — `(verifiser)` mot emnesiden) + **avsluttende skriftlig skoleeksamen** (4 t, penn og papir, Python skrives for hånd); hjelpemidler = **Rottmann + fagspesifikt formelark + kalkulator**; karakterskala A–F; gjennomgangskravet **«alle svar må begrunnes»** i hodet på hvert sett; inntil **5 poeng per deloppgave, alle deloppgaver teller likt**. (ii) **Oppgavemalen:** moderne sett = **4–7 flertrinnsoppgaver (a–e)**; typisk innhold = én Newton/energi/bevaring-oppgave med FBD, én rotasjonsoppgave, én ODE-oppgave som utledes+løses+avsluttes med Python, én SR-oppgave (oftest siste), pluss 1–2 fra {skrått kast, sirkel, Fermi, gravitasjon}. (iii) **Temafrekvens-tabellen** (antall av 7 sett): numerisk Python **100 %**, Newton+FBD **100 %**, arbeid/energi **100 %**, rotasjon/stive legemer **100 %**, spesiell relativitet **86 %**, differensiallikninger **86 %**, luftmotstand/drag **86 %**, svingninger/SHM **71 %**, bevegelsesmengde/støt **71 %**, sirkelbevegelse **71 %**, Fermi **57 %**, Taylor **57 %**, skrått kast **~50 %**, gravitasjon **~35 %**, referansesystemer/Galilei **~20 %**, Lagrange **0 %**. (iv) **Utviklingstrekk:** fra mange små uavhengige oppgaver (H2022) til færre, dypere flertrinnsoppgaver (H2024/H2025); anvendt/lekende innpakning (Münchhausen, Dagobah, Daytona, jojo, ChatGPT-feiloppgave, relativistisk stige i låve) — fysikken bak er standard, bare innpakningen varierer. (v) **Bevisst nedprioritert stoff med begrunnelse:** **Lagrange-formalisme** (nevnt i emnebeskrivelsen, aldri testet — kort kjenne-omtale her, ingen oppgaver); Runge–Kutta (beredskap, Euler–Cromer premieres). (vi) **Sensorens metaregler:** alt begrunnes (0/lite for svar uten begrunnelse); FBD selvstendig poenggivende (−2p udefinerte symboler); begrunn hvorfor en bevaringslov gjelder; **riktig metode teller** (0p for energibevaring i uelastisk støt, 0p for å integrere en ODE som om $y$ er konstant, 0p for SR-formler uten samtidighetsdrøfting); følgefeil straffes ikke; flere metoder godtas; enheter og gjeldende siffer. (vii) **Karakternivåene** (bestått/midt/topp — destillert fra fasitkommentarene). (viii) **Formelark-strategien:** hva som må kunne *brukes/utledes* vs. *slås opp*.
- **Innholdskontrakt:** Oppgavetype-katalogen A–K presenteres som studentens sjekkliste med frekvens per sjanger og hvilken av oppgavene den typisk er. Prognosen for neste sett gjengis fra analysen §7. Leseplan: **Del 1–7 + 9 er midtveispensum** (~20–25 %) OG grunnmuren i avsluttende; Del 8 (Python) er nivå 1 og må ikke utsettes til slutten (bygg kodemalen fra uke 1); Del 10 (SR) er nesten alltid siste oppgave. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for fem flertrinnsoppgaver — hvilke deloppgaver høster du billigst poeng på, og hvorfor er den innledende FBD-en og en forberedt Euler–Cromer-mal ofte de tryggeste poengene?».
- **Typiske feil:** Metafeilene: pugge formler som står på arket i stedet for å trene metode/utledning; hoppe over Python fordi det «bare er programmering» (det er en fast deloppgave, 100 %); bruke tid på Lagrange (aldri testet); skrive tallsvar uten resonnement (den dyreste enkeltfeilen); glemme å begrunne hvorfor en bevaringslov gjelder.
- **Quiz: 12 · Flashcards: 12** (form, vekting, frekvenser, metaregler, sjangerkatalog)

---

### Del 1 — Modelleringsverktøy: dimensjonsanalyse, Taylor og Fermi *(prioritet: KUNNE)*

#### Kapittel 1.1: Dimensjonsanalyse, benevning og størrelsesorden

- **id:** `fys1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Å utlede formens skjelett fra enheter alene, sjekke uttrykk med benevningskontroll, og tenke i tierpotenser.
- **Eksamensbelegg:** Nyere MCQ- og deloppgavesjanger; på midtveis som flervalg, på avsluttende som verktøy (H2025: utlede $v \sim \sqrt{GM/r_0}$ ved dimensjonsanalyse). Benevningskontroll er en gjennomgående «gratis» kvalitetssjekk sensor forventer. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** ingen tunge; [Potenser og logaritmer](/bok/r1/r1-1-2) (tierpotens-regning). Bruker SI-grunnenheter (m, kg, s).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: SI-grunnstørrelser lengde $[L]$, masse $[M]$, tid $[T]$; utlede *formen* på et uttrykk ved å kreve dimensjonsbalanse (f.eks. pendelperiode $T \sim \sqrt{L/g}$, sirkelfart $v \sim \sqrt{GM/r}$); **benevningskontroll** som sluttsjekk på ethvert svar (venstre og høyre side må ha samme enhet); tierpotens-/størrelsesorden-tenkning som forberedelse til Fermi (kap. 1.3). Begrensning: dimensjonsanalyse gir ikke dimensjonsløse faktorer ($2\pi$, $\tfrac12$) — dette skal sies eksplisitt. **Utledning som kreves aktivt:** sett opp $[X] = [M]^a[L]^b[T]^c$, løs for eksponentene. **Figurkrav:** ingen (symbolfattig kapittel — men Symbol- og formelliste kreves likevel for $[L],[M],[T]$-notasjonen).
- **Oppgavesjangre:** Dimensjonsanalyse (+ J). Mønstereksempel: «En kule med radius $r$ faller i en væske og når terminalfart. Anta at terminalfarten avhenger av $r$, tyngdeakselerasjonen $g$ og en materialkonstant med enhet $\mathrm{s}^{-1}$. Bruk dimensjonsanalyse til å bestemme hvordan terminalfarten skalerer med disse, og forklar hvorfor metoden ikke kan gi den tallmessige forfaktoren.»
- **Typiske feil:** Tro at dimensjonsanalyse gir eksakt svar (glemme dimensjonsløse faktorer); blande enheter (bruke gram og kg om hverandre); ikke sjekke benevning på sluttsvaret; forveksle dimensjon med tallverdi.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.2: Taylor-utvikling og linearisering

- **id:** `fys1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-1-1`
- **kapitteltype:** teori
- **description:** Rekkeutvikling om et punkt, `sin θ ≈ θ` for små vinkler, og relativistisk `E` for små farter — verktøyet bak lineariseringen i svingnings- og SR-oppgaver.
- **Eksamensbelegg:** Sjanger-verktøy i **57 %** av settene: linearisere $\sin\theta \approx \theta$ (pendel, kap. 7.2), rekkeutvikle relativistisk energi for lav fart (H2022), linearisere en ikke-lineær kraft om likevekt (kap. 7.2). På midtveis som flervalg (finn 1. eller 2. ordens ledd). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** [Derivasjonens definisjon](/bok/r1/r1-3-3), [Derivasjonsregler](/bok/r1/r1-4-1), [Derivasjon av trigonometriske funksjoner](/bok/r1/r1-7-5); [Rekker og summasjon](/bok/r2/r2-1-4), [Uendelige rekker og konvergens](/bok/r2/r2-1-5).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Taylor-polynom om $x=a$: $f(x) \approx f(a) + f'(a)(x-a) + \tfrac12 f''(a)(x-a)^2 + \dots$ (formelarket/Rottmann gir generell form med restledd — **markeres «står på arket»**); standardutviklinger som skal kunne brukes raskt: $\sin\theta \approx \theta - \theta^3/6$, $\cos\theta \approx 1 - \theta^2/2$, $(1+x)^n \approx 1 + nx$, $e^x \approx 1 + x + x^2/2$; **linearisering** = beholde 1. ordens ledd; **små-svingnings-linearisering** = utvikle en kraft/potensial om en likevekt og beholde det lineære leddet (peker mot kap. 7.2). Relativistisk anvendelse: $\gamma = (1-\beta^2)^{-1/2} \approx 1 + \tfrac12\beta^2$ ⇒ $E = \gamma mc^2 \approx mc^2 + \tfrac12 mv^2$ (klassisk kinetisk energi gjenfinnes). **Utledning som kreves aktivt:** utvikle et gitt uttrykk til ønsket orden ved å regne deriverte i punktet. **Figurkrav:** graf av $\sin\theta$ mot linja $\theta$ som viser hvor tilnærmingen holder.
- **Oppgavesjangre:** Taylor/linearisering (+ G, I, J). Mønstereksempel: «Vis ved Taylor-utvikling at den relativistiske kinetiske energien $K = (\gamma-1)mc^2$ går over i det klassiske uttrykket $\tfrac12 mv^2$ når $v \ll c$, og finn det neste (fjerdeordens) korreksjonsleddet.»
- **Typiske feil:** Utvikle om feil punkt; blande grader og radianer i $\sin\theta \approx \theta$ (tilnærmingen krever radianer); ta med feil antall ledd; glemme at $\sin\theta \approx \theta$ bare gjelder små $\theta$; regnefeil i de deriverte.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.3: Fermi-estimering og størrelsesorden

- **id:** `fys1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `fys1100-1-1`
- **kapitteltype:** teori (egen sjanger med egen retteregel)
- **description:** Overslagsregning i tierpotenser — enkel geometrisk modell, tydelig tankegang, rimelighetsvurdering. Sensor premierer resonnementet, ikke presisjonen.
- **Eksamensbelegg:** Fast sjanger i **57 %** av settene (Mount Fuji i lastebil-lass, Jorda komprimert til en fyrstikkeske, Drake-ligningen, energien i å bøye seg ned). **Egen retteregel:** god uttelling for resonnement og størrelsesorden, ikke for presisjonen — men tankegangen må være **tydelig forklart** (typisk 2p tall + 3p forklaring). Prioritet: **kunne** (billige poeng for den som driller tankegangen).
- **Forkunnskaper/kryssbok:** kap. 1.1 (tierpotenser, benevning). Enkel geometri (volum av kule/kjegle/sylinder).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Fermi-oppskriften** — (1) forklar tankegangen og hvert steg **eksplisitt**; (2) velg en enkel geometrisk modell (kule, kjegle, boks); (3) regn i **tierpotenser** (størrelsesorden, ikke mange siffer); (4) **konkludér med en rimelighetsvurdering** (er svaret rimelig? hva er usikkerheten?). Klassiske modeller: kjeglevolum $V = \tfrac13\pi r^2 h$ (fjell), tetthetssammenligning $\rho = m/V$ (Jorda vs. nøytronstjerne), min/maks-spenn over mange tierpotenser (Drake), $mgh$ for energibudsjett. **Retteregel-poenget skrives ut i teksten:** en velbegrunnet estimering to tierpotenser unna «riktig» får mer uttelling enn et presist tall uten forklaring. **Figurkrav:** skisse av den geometriske modellen med anslåtte mål påført.
- **Oppgavesjangre:** B (+ J). Mønstereksempel: «Anslå hvor mange tennisballer som får plass i et vanlig klasserom. Velg en geometrisk modell, vis hvert anslag i tierpotenser, og avslutt med en vurdering av hvor sikkert svaret ditt er.»
- **Typiske feil:** Hoppe rett til et tall uten å vise tankegangen (mister forklaringspoengene selv med rimelig svar); velge en unødvendig komplisert modell; regne med falsk presisjon (mange siffer på et grovt anslag); glemme rimelighetsvurderingen; enhetsrot i tierpotens-regningen.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 1:** 4 prøver (1.A dimensjonsanalyse: utlede form + benevningskontroll, 20 min · 1.B Taylor/linearisering inkl. relativistisk $E$, 30 min · 1.C Fermi-estimering med full oppskrift og retteregel-refleksjon, 30 min · 1.D midtveis-format: flervalg/kortsvar på alle tre verktøyene, 25 min)

---

### Del 2 — Kinematikk og skrått kast *(prioritet: KUNNE)*

#### Kapittel 2.1: Kinematikk: posisjon, fart og akselerasjon

- **id:** `fys1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Sammenhengen posisjon–fart–akselerasjon som derivasjon/integrasjon, bevegelsesgrafer, og standardformlene for konstant akselerasjon.
- **Eksamensbelegg:** Grunnlaget under all mekanikk; **midtveis-favoritt** som graftolkning («hvilken situasjon er umulig for rettlinjet bevegelse?», posisjon/fart/akselerasjon-grafer) og som konseptrangering. På avsluttende inngår kinematikk i nesten hver oppgave. Prioritet: **kunne** (men grafspørsmål er hyppige midtveis-poeng).
- **Forkunnskaper/kryssbok:** [Derivasjon av vektorfunksjoner](/bok/r2/r2-6-2), [Hastighet og akselerasjon](/bok/r2/r2-6-3); [Bestemt integral som grenseverdi](/bok/r2/r2-2-4), [Analysens fundamentalsetning](/bok/r2/r2-2-5); Fysikk 2-innsteg: [Vektorer og komponenter](/bok/fysikk2/fysikk2-1-1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $\mathbf{v} = d\mathbf{r}/dt$, $\mathbf{a} = d\mathbf{v}/dt = d^2\mathbf{r}/dt^2$ (og omvendt ved integrasjon — **arealet under $v(t)$ er forflytning**); tolke og skissere bevegelsesgrafer (fortegn på fart/akselerasjon, når står legemet stille, når snur det); standardformler for **konstant $a$** (fra formelarket, markeres): $v = v_0 + at$, $r = r_0 + v_0 t + \tfrac12 at^2$, $v^2 - v_0^2 = 2a(r-r_0)$ — og **når de IKKE gjelder** (variabel akselerasjon ⇒ integrasjon eller numerikk, peker mot Del 7–8); baneakselerasjon $\mathbf{a} = \dot v\,\hat{\mathbf{u}}_T + (v^2/\rho)\hat{\mathbf{u}}_N$ (tangential + normal — nevnes, står på arket, brukes i Del 4). **Utledning som kreves aktivt:** utlede konstant-$a$-formlene fra integrasjon av $a$ = konstant. **Figurkrav:** koblet sett av $x(t)$-, $v(t)$- og $a(t)$-grafer for samme bevegelse.
- **Oppgavesjangre:** A-forløper (+ J-graftolkning). Mønstereksempel: «Farten til en bil er gitt ved grafen $v(t)$ [beskrevet]. (a) Når er akselerasjonen størst? (b) Hvor langt kjører bilen i de første 10 sekundene? (c) Forklar hvorfor bevegelsen ikke kan beskrives med formelen $s=\tfrac12 at^2$ på hele intervallet.»
- **Typiske feil:** Bruke konstant-$a$-formlene der akselerasjonen varierer; forveksle stigningstall (akselerasjon) med areal (forflytning) i graftolkning; glemme fortegn/retning; blande fart og akselerasjon konseptuelt («fart null ⇒ akselerasjon null»).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Skrått kast og 2D-kinematikk (sjanger A)

- **id:** `fys1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 75 · **prerequisites:** `fys1100-2-1`
- **kapitteltype:** teori + drill (foldet, nivå 2)
- **description:** Dekomponér i uavhengige `x`- og `y`-bevegelser, bruk symmetri om toppunktet, finn `g`, `v₀` og `θ` — settets faste kast-oppgave.
- **Eksamensbelegg:** Sjanger A i **~50 %** av settene (Dagobah, pakkelevering, golf; + spiral/konstant-$\alpha$ i H2024). Poeng splittes ofte i «fart» (flest) og «vinkel». Prioritet: **kunne** — men når den kommer, er den en trygg poenghøster hvis metoden sitter.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Bevegelse i to dimensjoner](/bok/fysikk2/fysikk2-1-2) og [Kastering – horisontal og skrå](/bok/fysikk2/fysikk2-1-3) (Fysikk 2-fundament); [Trigonometriske funksjoner og enhetssirkelen](/bok/r1/r1-7-1) (komponentoppdeling).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **dekomponér i $x$ og $y$ som uavhengige bevegelser** — uten luftmotstand er $v_x$ konstant og $v_y$ styrt av $g$; **symmetri om toppunktet** ($v_y=0$ i toppen; $v_y$ like stor og motsatt ved symmetriske tider); finn $g$ fra $\Delta v_y/\Delta t$, deretter $v_0 = \sqrt{v_{0x}^2 + v_{0y}^2}$ og $\theta = \arctan(v_{0y}/v_{0x})$; standardresultater som skal kunne utledes: flytid $t_1 = (2v_0/g)\sin\theta$, rekkevidde $x_1 = (v_0^2/g)\sin 2\theta$; **angi alltid retning** på hastigheter (−2p ellers). Kobling framover: **med** luftmotstand er bevegelsen ikke lenger analytisk ⇒ numerikk (kap. 8.2). **Utledning som kreves aktivt:** flytid og rekkevidde fra komponentbevegelsene. **Figurkrav:** banekurve med hastighetsvektoren dekomponert i $v_x$/$v_y$ ved utskyting, topp og nedslag.
- **Oppgavesjangre:** A (+ J). Mønstereksempel: «En drone slipper en pakke i horisontal flukt i høyde $h$ med fart $v_0$. Finn hvor langt fra utslippspunktet pakken lander, farten idet den treffer bakken (med retning), og forklar hvorfor den horisontale farten er uendret hele veien ned.»
- **Typiske feil (analysen §3.A):** Finne bare én hastighetskomponent (−2p); ikke angi retning (−2p); la en følgefeil gi $v_x \neq 0$ uten å kommentere det (−1p); blande $\sin$ og $\cos$ i dekomponeringen; bruke konstant-$a$-formler på $x$-retningen (der $a_x=0$).
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (2.A graftolkning + konstant-$a$-regning, 30 min · 2.B skrått kast: finn $g$/$v_0$/$\theta$ fra data, 35 min · 2.C blandet 2D-kinematikk på eksamensnivå med retningskrav, 40 min · 2.D midtveis-format: kinematikk-flervalg inkl. «umulig bevegelse»-rangering, 30 min)

---

### Del 3 — Newtons lover, frilegemediagram og kraftmodeller *(prioritet: PERFEKT)*

#### Kapittel 3.1: Newtons tre lover og frilegemediagram

- **id:** `fys1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-2-1`
- **kapitteltype:** teori
- **description:** Newtons lover i vektorform og frilegemediagrammet som en selvstendig, poenggivende ferdighet — navngi hver kraft, riktig retning, riktig angrepspunkt.
- **Eksamensbelegg:** N2L brukt i **100 %** av settene; **frilegemediagram eksplisitt etterspurt i 6/7**. FBD er ifølge sensor en *selvstendig ferdighet* med egen poenggiving (−2p for udefinerte symboler). Prioritet: **perfekt** — grunnmuren under Del 3–6.
- **Forkunnskaper/kryssbok:** kap. 2.1; [Vektorer og komponenter](/bok/fysikk2/fysikk2-1-1), [Vektorregning](/bok/r1/r1-6-2). Klassisk mekanikk fra Fysikk 1 (VGS, ikke bygget) refereres i klartekst.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: N1 (treghet), **N2 $\sum\mathbf{F} = m\mathbf{a} = d\mathbf{p}/dt$** (fra formelarket, markeres), N3 (kraft–motkraft, ulike legemer); **frilegemediagrammet steg for steg** — (1) isoler ETT legeme, (2) tegn *alle* krefter som virker PÅ det (tyngde, normalkraft, friksjon, snordrag, kontaktkraft) med **navngitte symboler**, (3) riktig retning og angrepspunkt, (4) velg koordinatsystem, (5) skriv N2 komponentvis; **indre vs. ytre krefter** (Münchhausen kan ikke løfte seg selv i egne hår — N3, indre krefter kansellerer); rimelig lengde på vektorene. **Utledning som kreves aktivt:** oppsett av komponentlikningene fra et FBD. **Figurkrav (sentralt):** minst to fullstendige, navngitte frilegemediagram (kloss på horisontalt underlag med og uten trekkraft) — dette er kapitlets kjerneferdighet og eksemplene skal *modellere* sensorstandarden.
- **Oppgavesjangre:** C-forløper (+ J). Mønstereksempel: «En kloss henger i to snorer med ulik vinkel mot taket. Tegn et fullstendig frilegemediagram med alle krefter navngitt, og finn snordragene. Forklar hvorfor tyngden ikke skal tegnes to ganger selv om klossen henger i to snorer.»
- **Typiske feil (analysen §5.8):** Udefinerte symboler / uforklarte krefter (−2p); tegne inn krefter som ikke virker på legemet (f.eks. kraften legemet utøver på noe annet — N3-forveksling); glemme en kontaktkraft; fiktiv «sentripetalkraft» eller «bevegelseskraft» tegnet inn (−1p); feil angrepspunkt.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 3.2: Kraftmodeller og dekomponering på skråplan

- **id:** `fys1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-3-1`
- **kapitteltype:** teori
- **description:** Tyngde, normalkraft, friksjon, snordrag og fjærkraft som konkrete modeller — og dekomponeringen av tyngden på et skråplan.
- **Eksamensbelegg:** Skråplan-dekomponering inngår i sjanger C og E i de fleste sett (H2023 kloss på kile, V2024 Daytona, V2025 golf/fjær, H2025 kloss+kule). $N = mg\cos\theta$, $f = \mu N$ er standardverktøy. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Trigonometriske funksjoner og enhetssirkelen](/bok/r1/r1-7-1) (dekomponering med $\sin/\cos$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (kraftmodellene, fra formelarket der markert): tyngde $\mathbf{G} = m\mathbf{g}$; **dekomponering på skråplan** $mg\sin\theta$ (langs planet) og $mg\cos\theta$ (normalt) — **utled hvilken vinkel som havner hvor** (ikke pugg); normalkraft $N = mg\cos\theta$ (på skråplan, når ingen andre normale krefter); **friksjon:** statisk $|\mathbf{f}_s| \le \mu_s N$, dynamisk $|\mathbf{f}_d| = \mu_d N$ (friksjon motvirker *relativ* bevegelse — retningen må drøftes); fjærkraft $\mathbf{F} = -k(x-x_0)$ (Hookes lov, står på arket); snordrag (masseløs, strekk-kraft langs snora, lik i begge ender over en masseløs trinse); grensetilfellet $\mu = 0 \Rightarrow a = g\sin\theta$. **Utledning som kreves aktivt:** dekomponeringen av tyngden og betingelsen $\mu_s \ge \tan\theta$ for at en kloss ligger i ro på skråplan. **Figurkrav:** skråplan-FBD med tyngden dekomponert i $mg\sin\theta$ og $mg\cos\theta$, normalkraft og friksjon inntegnet.
- **Oppgavesjangre:** C (+ J). Mønstereksempel: «En kloss ligger på et skråplan med helningsvinkel $\theta$. (a) Tegn frilegemediagram og finn det minste statiske friksjonstallet som holder klossen i ro. (b) Vis at svaret er uavhengig av massen, og forklar fysisk hvorfor.»
- **Typiske feil:** Bytte om $\sin$ og $\cos$ i dekomponeringen; sette $N = mg$ på skråplan (glemme $\cos\theta$); behandle statisk friksjon som en fast verdi $\mu_s N$ i stedet for en øvre grense; feil friksjonsretning; anta $N$ urimelig stor/liten vs. tyngdekomponenten (−1p).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Koblede klosser og grensetilfelle-verifisering

- **id:** `fys1100-3-3` · **number:** 3.3 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-3-2`
- **kapitteltype:** teori
- **description:** To eller flere klosser koblet med snor og friksjon — N2L komponentvis for hver, løs for `a` og snordrag `T`, og verifiser uttrykket med grensetilfeller.
- **Eksamensbelegg:** Sjanger C, flerlegeme-varianten (H2024 to klosser). **Grensetilfelle-verifisering er ofte en egen, poenggivende deloppgave** ($\mu_1=\mu_2 \Rightarrow T=0$; $\mu=0 \Rightarrow a=g\sin\theta$; $\theta=90° \Rightarrow$ fritt fall; $m_2=0 \Rightarrow T=0$). Prioritet: **perfekt** (toppsjiktet verifiserer uoppfordret).
- **Forkunnskaper/kryssbok:** kap. 3.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: FBD for HVERT legeme separat; N2 komponentvis for hver kloss; **felles akselerasjon** for legemer koblet med uttøyelig snor; eliminér og løs for $a$ og $T$; **grensetilfelle-verifisering som metode** — sett inn ekstremverdier og sjekk at uttrykket gir fysisk fornuftig svar (dette er en selvstendig ferdighet, drilles her); utvidelser: «for hvilke $(\mu_1,\mu_2)$ blir klossene liggende?» ($a\le 0$-betingelse), «hvorfor bryter formelen sammen når $\mu_2\to\infty$?» (glidningsantakelsen svikter). **Utledning som kreves aktivt:** hele kjeden FBD → komponentlikninger → $a$ og $T$ for et to-kloss-system. **Figurkrav:** system-skisse med to FBD-er side om side og snordraget markert likt i begge ender.
- **Oppgavesjangre:** C (+ J). Mønstereksempel: «To klosser med masse $m_1$ og $m_2$ er koblet med en masseløs snor over en trinse: $m_1$ på et skråplan (friksjonstall $\mu$), $m_2$ hengende fritt. Finn akselerasjonen og snordraget, og verifiser uttrykket i grensen $\mu=0$ og $m_2=0$.»
- **Typiske feil:** Ett felles FBD for hele systemet der kreftene skal splittes; ulikt snordrag i de to endene (masseløs snor ⇒ likt); glemme friksjon på én av klossene; ikke verifisere med grensetilfeller (taper de «gratis» toppoengene); feil fortegn i koblingen mellom akselerasjonene.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: Drill: Newton og frilegemediagram (sjanger C)

- **id:** `fys1100-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1100-3-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på Newton-oppgaven: fra fullstendig FBD til `a`/`T` med grensetilfelle-verifisering, på eksamensnivå.
- **Eksamensbelegg:** Sjanger C samlet (100 % N2L, FBD i 6/7). Varianter i arkivet: kloss på kile, to koblede klosser, kloss+kule på skråplan, FBD som forspill til Daytona/golf. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) isoler hvert legeme, tegn fullstendig navngitt FBD; 2) velg koordinatsystem (ofte langs/normalt planet); 3) dekomponér tyngden; 4) skriv N2 komponentvis per legeme; 5) koble via snor/kontakt (felles $a$, likt $T$); 6) løs for $a$ og $T$; 7) **verifiser med minst ett grensetilfelle**; 8) angi enhet og retning. Gjennomregnet eksamenscase med sensor-margnotater (hvor poengene sitter: FBD-symboler, dekomponering, grensetilfelle). 10–15 oppgaver på eksamensnivå, minst tre flerlegeme og minst to med eksplisitt grensetilfelle-deloppgave.
- **Oppgavesjangre:** C (+ J). Mønstereksempel (deloppgavekjede): «En kile med masse $M$ står på et friksjonsfritt gulv; en kloss $m$ ligger på kilens skråside. (a) Tegn FBD for begge. (b) Hvis kilen holdes fast, finn klossens akselerasjon. (c) Forklar kvalitativt hva som endrer seg hvis kilen får gli fritt.»
- **Typiske feil:** Hele §5-repertoaret for sjanger C samlet: udefinerte FBD-symboler, feil dekomponering, ulikt snordrag, manglende grensetilfelle, glemt retning/enhet.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A frilegemediagram + N2 for enkeltlegeme, 30 min · 3.B skråplan med friksjon + dekomponering, 35 min · 3.C koblede klosser med grensetilfelle-verifisering, 40 min · 3.D midtveis-format: FBD- og kraftrangering-flervalg, 30 min)

---

### Del 4 — Sirkelbevegelse og sentripetalkraft *(prioritet: KUNNE)*

#### Kapittel 4.1: Sentripetalkraft, loop og vertikal sirkel

- **id:** `fys1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-3-2`
- **kapitteltype:** teori
- **description:** Kreftene inn mot sentrum gir `ΣF = mv²/r` — riktig fortegnsoppsett i topp og bunn av en loop, og kontakttap ved `N = 0`.
- **Eksamensbelegg:** Sjanger E i **71 %** av settene (loop, vertikal sirkel V2023; ofte koblet til energibevaring). Fortegnsoppsettet topp/bunn og $N=0$-betingelsen er faste poeng. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2; [Sirkelbevegelse og sentripetalkraft](/bok/fysikk2/fysikk2-1-4) (Fysikk 2-fundament); baneakselerasjon fra kap. 2.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: sentripetalakselerasjon $a_r = v^2/r = \omega^2 r$ (retning inn mot sentrum); **$\sum F_{\text{radiell}} = mv^2/r$** som N2 i radiell retning — **sentripetalkraft er ikke en egen kraft, men resultanten** av de virkelige kreftene (drilles: ikke tegn den inn i FBD, −1p); fortegnsoppsett i vertikal sirkel: bunn $N - mg = mv^2/R$, topp $mg + N = mv^2/R$; **kontakttap ved $N=0$** ⇒ minste toppfart $v_{\text{topp}} > \sqrt{Rg}$; kobling til energibevaring (fart i topp fra fart i bunn via $mgh$). **Utledning som kreves aktivt:** minstefart-betingelsen $v_{\text{topp}} = \sqrt{Rg}$ fra $N=0$, og $h > \tfrac52 R$ for at en kule skal fullføre en loop fra hvile. **Figurkrav:** FBD i topp og bunn av loopen med tyngde og normalkraft, og sentripetalretningen markert.
- **Oppgavesjangre:** E (+ D, J). Mønstereksempel: «En liten kule sendes gjennom en vertikal loop med radius $R$. (a) Sett opp N2 radielt i toppen og finn minste fart for at kula holder kontakt. (b) Bruk energibevaring til å finne minste starthøyde uten friksjon, og forklar hvorfor betingelsen er en ulikhet, ikke en likhet.»
- **Typiske feil (analysen §5.12):** Tegne inn en fiktiv sentripetalkraft i FBD (−1p); feil fortegn topp/bunn; sette $v=\sqrt{gR}$ (likhet) uten å forklare at grensen er $N=0$ (−1p); glemme tyngdens bidrag i topp/bunn-oppsettet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.2: Dosert sving, spiralbane og drill (sjanger E)

- **id:** `fys1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 75 · **prerequisites:** `fys1100-4-1`
- **kapitteltype:** teori + drill (foldet, nivå 2)
- **description:** Dosert sving med friksjon (Daytona) — drøft friksjonsretningen — og spiralbanen der bare `v cos θ` inngår i `v²/R`.
- **Eksamensbelegg:** Sjanger E, de tyngre variantene: dosert sving (V2024 Daytona), spiralvei (H2024). For full uttelling på Daytona må det forklares *hvordan* friksjonen bidrar til sentripetalakselerasjonen. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 4.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **dosert sving** — dekomponér normalkraft og friksjon i en skrå banekurve; **drøft friksjonsretningen** (ned langs helningen ved høy fart, opp ved lav fart) og vilkåret $|f| \le \mu_s N$; finn maks/min-fart for at bilen holder svingen; **spiralbane** — bare hastighetskomponenten **vinkelrett på spiralaksen** ($v\cos\theta$) inngår i $v^2/R$; koble til baneakselerasjonens normalkomponent (kap. 2.1). Drill-del: løsningsoppskrift for sjanger E samlet (identifiser radiell retning → sett opp $\sum F_r = mv^2/r$ → dekomponér virkelige krefter → drøft friksjon/kontakt → løs) + gjennomregnet Daytona-case med sensor-margnotater + 8–12 oppgaver på eksamensnivå. **Figurkrav:** tverrsnitt av dosert sving med $N$, $f$ og tyngden dekomponert i radiell/vertikal retning.
- **Oppgavesjangre:** E (+ J). Mønstereksempel: «En bil kjører i en dosert sving med helning $\alpha$ og radius $R$. (a) Finn farten der ingen friksjon trengs. (b) Finn maksfarten når friksjonstallet er $\mu_s$, og forklar hvilken vei friksjonen peker ved denne farten.»
- **Typiske feil (analysen §3.E):** Ikke drøfte friksjonsretningen (mister toppoengene på Daytona); bruke hele farten i stedet for $v\cos\theta$ i spiral; feil dekomponering av normalkraften i dosert sving; behandle friksjon som fast $\mu_s N$ i stedet for en grense.
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 4:** 4 prøver (4.A loop/vertikal sirkel med $N=0$-betingelse, 30 min · 4.B dosert sving med friksjonsdrøfting, 35 min · 4.C sirkel + energibevaring kombinert, 40 min · 4.D midtveis-format: sentripetalkraft-flervalg og fjærvekt/heis-avlesning, 30 min)

---

### Del 5 — Arbeid, energi og bevegelsesmengde *(prioritet: PERFEKT)*

#### Kapittel 5.1: Arbeid, energi og energibevaring

- **id:** `fys1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-3-2`
- **kapitteltype:** teori
- **description:** Arbeid som integral av kraft, kinetisk og potensiell energi, energibevaring med begrunnelse, og friksjonsarbeid som lekkasje.
- **Eksamensbelegg:** Sjanger D (energi-delen) i **100 %** av settene — bærebjelke, ofte kombinert med støt eller rotasjon. **Bevaring må begrunnes** («bare konservative krefter gjør arbeid»). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 3.2; [Bestemt integral som grenseverdi](/bok/r2/r2-2-4), [Analysens fundamentalsetning](/bok/r2/r2-2-5) (arbeidsintegralet); [Skalarproduktet](/bok/r2/r2-5-3) ($\mathbf{F}\cdot d\mathbf{r}$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): arbeid $W = \int\mathbf{F}\cdot d\mathbf{r} = \int\mathbf{F}\cdot\mathbf{v}\,dt = K_B - K_A$ (arbeids–energi-teoremet); kinetisk energi $K = \tfrac12 mv^2$; potensiell energi tyngde $U = mgy$, fjær $U = \tfrac12 k(x-x_0)^2$; **effekt** $P = \mathbf{F}\cdot\mathbf{v}$; konservativ kraft $\mathbf{F} = -dU/dx$ (1D); **energibevaring** $K + U = \text{konstant}$ **når bare konservative krefter gjør arbeid** — begrunnelsen skrives ut hver gang; **friksjonsarbeid som lekkasje** $W_f = -\mu N s$ (mekanisk energi tapt til varme); kobling til sirkel (kap. 4) og rotasjon (kap. 6, der $\tfrac12 I\omega^2$ legges til). **Utledning som kreves aktivt:** utlede sluttfart via energibevaring, og vise at friksjon reduserer den. **Figurkrav:** energibalanse-skisse (start/slutt) med $K$, $U$ og eventuelt friksjonstap.
- **Oppgavesjangre:** D (+ J). Mønstereksempel: «En kloss slippes fra hvile på et skråplan med friksjon og glir en strekning $s$. (a) Finn farten nederst med energiregnskap. (b) Begrunn *både* med energi og med Newtons 2. lov hvorfor klossen kommer kortere med friksjon enn uten.»
- **Typiske feil (analysen §5.7):** Bruke energibevaring uten å begrunne hvorfor den gjelder (−1p); glemme friksjonsleddet i energiregnskapet; blande arbeid (skalar) og kraft (vektor); feil fortegn på potensiell energi; feil referansenivå for $U$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.2: Bevegelsesmengde, impuls og støt

- **id:** `fys1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-5-1`
- **kapitteltype:** teori
- **description:** Impulsbevaring gjennom støt (begrunn «ingen ytre krefter»), elastisk vs. uelastisk, ballistisk pendel og relativt energitap — med metodefellen som gir 0p.
- **Eksamensbelegg:** Sjanger D (bevegelsesmengde-delen) i **71 %** (fjær skyter klosser, kule i kloss/stav, ballistisk pendel). **Metodefelle:** energibevaring i et uelastisk støt gir **0p** — her er det bevegelsesmengde, ikke mekanisk energi, som er bevart. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): bevegelsesmengde $\mathbf{p} = m\mathbf{v}$; impuls $\mathbf{J} = \int\mathbf{F}\,dt = \Delta\mathbf{p}$; **impulsbevaring** når netto ytre kraft er null (i en gitt retning) — **begrunnelsen «ingen ytre krefter i denne retningen» skrives ut**; **skille elastisk (energi OG driv bevart) fra uelastisk (bare driv bevart)**; standardoppsett: fjær skyter to klosser ($v_A = -(m_B/m_A)v_B$, lagret fjærenergi $U_0 = \tfrac12 m_A v_A^2 + \tfrac12 m_B v_B^2$); uelastisk støt (kule i kloss/stav, ballistisk pendel) — impulsbevaring gjennom støtet, deretter energibevaring *etter* støtet for svinghøyde; **relativt energitap** $K_{\text{etter}}/K_{\text{før}}$; massesenter $\mathbf{R}_{cm} = \tfrac1M\sum m_i\mathbf{r}_i$. **Utledning som kreves aktivt:** ballistisk-pendel-kjeden (impuls → felles fart → energi → høyde). **Figurkrav:** før/etter-skisse av støtet med hastighetsvektorer og system-avgrensning.
- **Oppgavesjangre:** D (+ J). Mønstereksempel: «En kule med masse $m$ og fart $v_0$ skytes horisontalt inn i en klosskloss med masse $M$ som henger i en snor, og blir sittende fast. (a) Finn den felles farten rett etter støtet, og begrunn hvorfor mekanisk energi ikke er bevart her. (b) Finn hvor høyt klossen svinger.»
- **Typiske feil (analysen §5.2, §5.14):** **Energibevaring i et uelastisk støt (0p)** — den mest kjente metodefellen; bruke bevaring uten begrunnelse (−1p); glemme at et delsystem (kloss 1) også får fart (maks 2p); manglende retning på bevegelsesmengden (−2p); blande relativt og absolutt energitap.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 5.3: Drill: bevaringslover (sjanger D)

- **id:** `fys1100-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1100-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på bevaringsoppgaven: velg riktig bevaringslov, begrunn hvorfor den gjelder, kjed impuls og energi i riktig rekkefølge.
- **Eksamensbelegg:** Sjanger D samlet (energi 100 %, driv/støt 71 %). Varianter: fjær-utskyting, loop, ballistisk pendel, kule i stav (kobler mot rotasjon, kap. 6), meteoroide i satellitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) del prosessen i faser (før støt / gjennom støt / etter støt); 2) for HVER fase, avgjør hvilken bevaringslov som gjelder og **begrunn hvorfor** (driv: ingen ytre kraft i retningen; energi: bare konservative krefter); 3) uelastisk ⇒ driv gjennom støtet, energi først *etter*; 4) sett opp likningene, løs i rekkefølge; 5) regn relativt energitap der spurt; 6) enhet og retning. Gjennomregnet eksamenscase (fjær skyter to klosser, eller ballistisk pendel) med sensor-margnotater om metodevalget og begrunnelsen. 10–15 oppgaver på eksamensnivå, minst tre uelastiske og minst én ren energi-loop.
- **Oppgavesjangre:** D (+ J). Mønstereksempel (deloppgavekjede): «En sammentrykt fjær mellom to klosser $m_A$ og $m_B$ slippes. (a) Finn forholdet mellom fartene rett etter. (b) Hvis den lagrede fjærenergien var $U_0$, finn fartene. (c) Hvor stor andel av $U_0$ havner i den letteste klossen?»
- **Typiske feil:** Hele sjanger D-repertoaret samlet: energibevaring i uelastisk støt (0p), bevaring uten begrunnelse, glemt delsystem-fart, feil fase-inndeling, manglende retning.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A arbeid/energi med friksjonstap og dobbel begrunnelse, 35 min · 5.B impuls og uelastisk støt med bevaringsbegrunnelse, 35 min · 5.C ballistisk pendel / fjær-utskyting kjedet, 40 min · 5.D midtveis-format: energi/driv-flervalg inkl. bremselengde, 30 min)

---

### Del 6 — Rotasjon og stive legemer *(prioritet: PERFEKT — egen stor del)*

#### Kapittel 6.1: Dreiemoment, treghetsmoment og rotasjons-N2L

- **id:** `fys1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `fys1100-3-1`
- **kapitteltype:** teori
- **description:** Kraftmoment `τ = r × F`, treghetsmoment `I`, rotasjonens Newtons 2. lov `τ = Iα`, og parallellakseteoremet.
- **Eksamensbelegg:** Sjanger F i **100 %** av settene — rotasjon står mye sterkere enn i et vanlig fysikk 1/2-løp. $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$, $\tau=I\alpha$, treghetsmoment-rangering (H2022) er kjernestoff. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 3.1; [Kryssproduktet](/bok/r2/r2-5-4) (kraftmoment); [Vektorer i tre dimensjoner](/bok/r2/r2-5-1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): **kraftmoment $\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$** (kraft gjennom aksen gir null moment — sentralt); treghetsmoment $I = \sum m_i\rho_i^2 = \int\rho^2\,dm$ (Rottmann/formelark gir tabell for stav, sylinder, kule, ring — **slås opp, ikke pugges**); **rotasjonens N2L $\tau_{\text{net}} = I\alpha$** ⇒ $\alpha = \tau/I$; **parallellakseteoremet** $I = I_{cm} + Md^2$ (ved sammensatte legemer / akse utenfor massesenter); rotasjonsenergi $K_{\text{rot}} = \tfrac12 I\omega^2$; analogien translasjon ↔ rotasjon ($m\leftrightarrow I$, $F\leftrightarrow\tau$, $v\leftrightarrow\omega$, $a\leftrightarrow\alpha$); **treghetsmoment-rangering** (samme masse, ulik fordeling ⇒ ulik $I$ — konseptuell midtveis-favoritt). **Utledning som kreves aktivt:** $\alpha$ for en fallende stav i hengsel via $\tau=I\alpha$ om hengselaksen. **Figurkrav:** stav/skive med kraft, momentarm $\mathbf{r}$ og rotasjonsakse markert; illustrasjon av parallellakse.
- **Oppgavesjangre:** F (+ J). Mønstereksempel: «En homogen stav med masse $M$ og lengde $L$ er hengslet i den ene enden og slippes fra horisontal stilling. (a) Finn vinkelakselerasjonen i det den slippes. (b) Forklar hvorfor tyngden kan behandles som om den angriper i massesenteret når du regner kraftmomentet.»
- **Typiske feil (analysen §5.15):** Regne kraftmoment om massesenteret og la tyngden bidra (tyngden angriper i massesenteret ⇒ null moment, −2p); bruke $I$ om feil akse (glemme parallellakse); forveksle $\alpha$ (vinkelakselerasjon) og $a$ (baneakselerasjon); glemme at kraft gjennom aksen gir null moment.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 6.2: Rulling og kombinert translasjon + rotasjon

- **id:** `fys1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `fys1100-6-1`, `fys1100-5-1`
- **kapitteltype:** teori
- **description:** Rullebetingelsen `v = ωR`, kombinert translasjon og rotasjon for sylinder/kule/jojo, og energibevaring for sluttfart.
- **Eksamensbelegg:** Sjanger F, den tyngste varianten (V2024 sylinder på skråplan, H2023 jojo, H2024/H2025 rullende kule). Rullebetingelse + energibevaring for sluttfart er faste grep. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1, 5.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **rullebetingelsen $v = \omega R$** (ren rulling uten gliding), derivert $a = \alpha R$; kombinér N2 for translasjon ($\sum F = ma$) med N2 for rotasjon ($\tau = I\alpha$) om massesenteret, og friksjonen som kobler dem; **energibevaring for sluttfart** $\tfrac12 I\omega^2 + \tfrac12 mv^2 = mgh$ (både rotasjons- og translasjonsenergi); jojo (snordrag gir moment); sylinder som **både ruller og glir** (når $f > \mu_s N$ svikter ren rulling); rullende vs. glidende objekt («kommer lengst opp *med* friksjon» — friksjon konverterer translasjon til rotasjon uten energitap ved ren rulling). **Utledning som kreves aktivt:** akselerasjonen til en rullende sylinder ned et skråplan, både med N2L-kobling og med energi. **Figurkrav:** FBD for rullende legeme på skråplan med tyngde, normalkraft og friksjon, og rullebetingelsen markert.
- **Oppgavesjangre:** F (+ D, J). Mønstereksempel: «En homogen sylinder ($I = \tfrac12 MR^2$) ruller uten å gli ned et skråplan med helning $\theta$. (a) Finn massesenterets akselerasjon med både energimetode og kraft/moment-metode. (b) Finn minste friksjonstall for at rullingen forblir ren.»
- **Typiske feil:** Glemme rotasjonsenergien i energiregnskapet (bare $\tfrac12 mv^2$); bruke $v=\omega R$ når legemet glir; feil $I$; ikke koble friksjonen mellom translasjon og rotasjon; regne moment om feil akse.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.3: Spinn, spinnbevaring og «kritiser løsningen»

- **id:** `fys1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-6-2`
- **kapitteltype:** teori
- **description:** Spinn `L = r × p`, spinnbevaring når netto ytre moment er null, kule skutt inn i stav, og den kvalitative «finn feilen i løsningen»-oppgaven.
- **Eksamensbelegg:** Sjanger F + J: spinnbevaring (kunstløper, roterende stol H2023), kule inn i stav (V2025 kule+stav, kobler driv/spinn/energi), og **«kritiser en feilaktig løsning»** (H2023 ChatGPT-oppgaven: masse ≠ treghetsmoment; spinn er bevart). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.2, 5.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): spinn $\mathbf{L} = \mathbf{r}\times\mathbf{p}$, for stivt legeme $L_z = I_z\omega_z$; **spinnsats $\boldsymbol{\tau} = d\mathbf{L}/dt$**; **spinnbevaring** når netto ytre kraftmoment er null — begrunnelsen skrives ut («ingen ytre moment fordi …»); $I_1\omega_1 = I_2\omega_2$ (kunstløper trekker inn armene ⇒ $I$ synker, $\omega$ øker); **kule skutt inn i stav** (uelastisk): spinnbevaring om hengselaksen gjennom støtet (IKKE bevegelsesmengde alene, fordi hengselen gir en ytre kraft men *ikke* et ytre moment om aksen), deretter energi etter; **kvalitativ «kritiser løsningen»-metode:** identifiser den gale antakelsen, si hvilket prinsipp som faktisk gjelder, korriger. **Utledning som kreves aktivt:** vinkelfarten til en stav etter at en kule setter seg fast, via spinnbevaring om hengselen. **Figurkrav:** før/etter-skisse av kule-i-stav med spinnretning og hengselaksen.
- **Oppgavesjangre:** F, J. Mønstereksempel: «En løsning påstår at når en kule med masse $m$ og fart $v$ treffer enden av en fritt opphengt stav og setter seg fast, er *bevegelsesmengden* bevart gjennom støtet. Forklar hvorfor dette er feil, angi hvilken størrelse som faktisk er bevart, og skisser riktig fremgangsmåte.»
- **Typiske feil (analysen §5.15, §3.J):** Bruke bevegelsesmengdebevaring der spinn skal brukes (hengselen gir ytre kraft); la tyngden bidra til moment om massesenteret; spinnbevaring uten begrunnelse; svada/helgardering i «kritiser»-oppgaven (må peke på den konkrete feilen med fagbegrep).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.4: Drill: rotasjonsoppgaven (sjanger F)

- **id:** `fys1100-6-4` · **number:** 6.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1100-6-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på stiv-legeme-oppgaven: FBD → moment → `τ = Iα` eller energi/spinnbevaring, for stav, sylinder, jojo, kule.
- **Eksamensbelegg:** Sjanger F samlet (100 %). Varianter: fallende stav i hengsel, jojo, sylinder på skråplan (rulle + skli), rullende kule opp bakke, kule skutt inn i stav, treghetsmoment-rangering. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) FBD, velg rotasjonsakse (kraft gjennom aksen ⇒ null moment); 2) avgjør metode — dynamikk ($\tau=I\alpha$ + evt. rullebetingelse) eller bevaring (energi for sluttfart, spinn ved uelastisk/sentralt); 3) finn riktig $I$ (parallellakse ved behov); 4) koble translasjon og rotasjon der begge finnes; 5) løs; 6) enhet og retning. Gjennomregnet eksamenscase (sylinder på skråplan ELLER kule i stav) med sensor-margnotater — **sensor er mild på fortegnsfeil, men krever riktig oppsett** (nevn dette). 10–15 oppgaver på eksamensnivå, minst én rulling, én spinnbevaring, én treghetsmoment-rangering.
- **Oppgavesjangre:** F (+ D, J). Mønstereksempel (deloppgavekjede): «En jojo (modellér som sylinder med $I = \tfrac12 mR^2$) faller mens snora rulles av. (a) Tegn FBD. (b) Finn massesenterets akselerasjon med $\tau=I\alpha$ og rullebetingelsen. (c) Sammenlign med fritt fall og forklar forskjellen.»
- **Typiske feil:** Hele sjanger F-repertoaret samlet: tyngdemoment om massesenteret (−2p), feil $I$/akse, glemt rotasjonsenergi, driv der spinn skulle brukes, manglende retning.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A dreiemoment + $\tau=I\alpha$ for hengslet stav, 35 min · 6.B rulling: sylinder/kule på skråplan med energi og dynamikk, 40 min · 6.C spinnbevaring + kule-i-stav, 40 min · 6.D midtveis-format: treghetsmoment-rangering og momentflervalg, 30 min)

---

### Del 7 — Differensiallikninger og svingninger *(prioritet: PERFEKT / 86 %)*

#### Kapittel 7.1: Differensiallikninger fra Newtons 2. lov

- **id:** `fys1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-3-2`
- **kapitteltype:** teori
- **description:** Hvordan `m d²y/dt² = ΣF` blir en differensialligning, hvilke typer som forekommer, og hvorfor «å integrere som om `y` er konstant» er meningsløst.
- **Eksamensbelegg:** ODE-utledning inngår i **86 %** av settene, nesten alltid som forspill til den analytiske løsningen og Python-halen. **Metodefelle:** «å integrere en diff.ligning som om $y$ er konstant» gir **0p** (viser manglende forståelse av hva en ODE er). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1, 3.1; [Derivasjon av vektorfunksjoner](/bok/r2/r2-6-2), [Variabelskifte (substitusjon)](/bok/r2/r2-3-1). (R2 dekker ikke differensiallikninger — typologien introduseres her.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **sett opp ODE-en fra N2** ($m\,d^2y/dt^2 = \sum F$) — akselerasjonen er 2. deriverte av posisjon; **klassifiser** ODE-en: 1. ordens vs. 2. ordens, lineær vs. ikke-lineær, homogen vs. inhomogen; hva en løsning ER (en *funksjon* $y(t)$, ikke et tall); rollen til **initialbetingelser** ($y(0)$, $v(0)$) for å bestemme konstantene; hvorfor analytisk løsning bare finnes i spesielle tilfeller (lineær; separabel) og at resten krever numerikk (peker mot Del 8). **Metodefellen forklares eksplisitt:** man kan ikke «integrere opp» en likning der høyresiden avhenger av den ukjente funksjonen som om den var konstant. **Utledning som kreves aktivt:** oppstilling av ODE-en for tre systemer (fritt fall, fjær, fjær + drag). **Figurkrav:** ingen tung figur, men en tabell type → løsningsstrategi.
- **Oppgavesjangre:** G-forløper (+ H, J). Mønstereksempel: «En kloss henger i en fjær og påvirkes i tillegg av en dempende kraft $-bv$. (a) Sett opp differensialligningen for utslaget $y(t)$ fra Newtons 2. lov. (b) Klassifiser ligningen (orden, lineær/ikke-lineær, homogen/inhomogen) og forklar hvorfor du ikke kan finne $y(t)$ ved å bare integrere begge sider.»
- **Typiske feil (analysen §5.3):** «Integrere» ODE-en som om $y$/$v$ er konstant (0p); forveksle en ODE med en vanlig likning; feil orden; glemme at det trengs like mange initialbetingelser som ordenen; blande $t$-derivasjon og $x$-derivasjon.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 7.2: Harmonisk oscillator: andreordens homogen ODE

- **id:** `fys1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `fys1100-7-1`, `fys1100-1-2`
- **kapitteltype:** teori
- **description:** Fjær og pendel som SHM — substitusjon `u = y − y_L`, karakteristisk likning, initialbetingelser, og linearisering av ikke-lineær kraft og pendel via Taylor.
- **Eksamensbelegg:** Sjanger G (SHM) i **71 %** (V2023 pendel, V2024/V2025 fjær, H2024 ikke-lineær fjær). Sensor fordeler poeng: karakteristisk likning (2p) + generell løsning (1p) + korrekt bruk av initialbetingelser (2p). Siden svaret ofte er oppgitt, kreves **sporbar utledning**. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1, 1.2 (Taylor); [Derivasjon av trigonometriske funksjoner](/bok/r1/r1-7-5).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **lineær fjær** $m\,d^2y/dt^2 = -k(y-y_L)$ ⇒ substituer $u = y - y_L$ ⇒ $d^2u/dt^2 = -(k/m)u$ ⇒ **karakteristisk likning** $\lambda^2 + \omega_0^2 = 0$ (formelarket/Rottmann gir oppskriften for reelle/like/komplekse røtter — **markeres «står på arket»**); generell løsning $u(t) = A\cos\omega_0 t + B\sin\omega_0 t$ med $\omega_0 = \sqrt{k/m}$; **bruk initialbetingelser** til å bestemme $A,B$; **ikke-lineær kraft** ($F = -kx - cx^2$): finn potensial $U = -\int F\,dx$, finn likevekt $F=0$, **lineariser om likevekt** ($x = x_0 + \xi$, $\xi$ liten, Taylor) ⇒ frekvens for små svingninger $\omega = \sqrt{(k+2cx_0)/m}$; **pendel:** Taylor-utvikle $\sin\theta \approx \theta$ ⇒ SHM med $\omega = \sqrt{g/L}$. **Utledning som kreves aktivt:** hele kjeden N2 → ODE → karakteristisk likning → løsning → initialbetingelser for fjær; og lineariseringen for pendel/ikke-lineær kraft. **Figurkrav:** $y(t)$-graf for SHM med amplitude og periode markert; potensialkurve $U(x)$ med likevekt for den ikke-lineære kraften.
- **Oppgavesjangre:** G (+ Taylor, J). Mønstereksempel: «En kule på en fjær har likevekt i $y_L$ og fjærkonstant $k$. (a) Utled bevegelsesligningen og løs den analytisk med initialbetingelsene $y(0)=y_0$, $v(0)=0$. (b) En liten kvadratisk korreksjon $-cx^2$ legges til kraften — finn frekvensen for små svingninger om den nye likevekten.»
- **Typiske feil (analysen §5.3, §3.G):** Bare integrere ligningen (0p); glemme substitusjonen $u=y-y_L$ (feil likevekt); ikke bruke initialbetingelser (ubestemte konstanter); linearisere om feil punkt; blande grader/radianer i $\sin\theta\approx\theta$; feil $\omega_0$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 7.3: Luftmotstand og førsteordens separabel ODE

- **id:** `fys1100-7-3` · **number:** 7.3 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-7-1`
- **kapitteltype:** teori
- **description:** Drag-modeller, terminalfart, og den separable førsteordens ligningen `v(t) = v_T(1 − e^{−gt/v_T})` — med det som kobler rett videre til Python-sporet.
- **Eksamensbelegg:** Luftmotstand/drag i **86 %** av settene, **nesten alltid koblet til numerikk-deloppgaven** (Del 8). 1. ordens separabel (H2023 fallende fjær med $-k_v v$) løses analytisk når mulig. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1; [Variabelskifte (substitusjon)](/bok/r2/r2-3-1), [Integrasjon av 1/x og eksponentialfunksjoner](/bok/r2/r2-2-3).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **drag-modeller** (fra formelarket, markeres) — lineær $F_D = -k_v v$, kvadratisk $F_D = -D|v|v$ (**absoluttverdien avgjørende for riktig fortegn uansett retning** — knyttes til kodedisiplinen i Del 8); **terminalfart** $v_T$ fra $\sum F = 0$ (f.eks. $v_T = mg/k_v$ lineært, $v_T = \sqrt{mg/D}$ kvadratisk); **1. ordens separabel:** $m\,dv/dt = mg - k_v v$ ⇒ separer variabler ⇒ integrer ⇒ $v(t) = v_T(1 - e^{-gt/v_T})$; tolk grensen $t\to\infty$ ($v\to v_T$) og $t\to 0$ (fritt fall); når drag er kvadratisk eller banen 2D, finnes **ingen enkel analytisk løsning** ⇒ numerikk (Del 8). **Utledning som kreves aktivt:** hele den separable løsningen for lineær drag, og terminalfart for begge modeller. **Figurkrav:** $v(t)$-kurve som stiger mot $v_T$-asymptoten.
- **Oppgavesjangre:** G (+ H, J). Mønstereksempel: «Et lodd faller i en væske med lineær luftmotstand $-k_v v$. (a) Sett opp og løs bevegelsesligningen analytisk med $v(0)=0$. (b) Finn terminalfarten og forklar fysisk hva som skjer når den er nådd. (c) Hvorfor må du gå over til numerikk hvis motstanden i stedet er $-D|v|v$?»
- **Typiske feil (analysen §5.4):** Glemme absoluttverdi i kvadratisk drag ($v^2$ i stedet for $|v|v$, feil fortegn når legemet snur); feil fortegn i separasjonen; glemme integrasjonskonstanten / initialbetingelsen; tro at kvadratisk 1D-drag har like enkel lukket løsning som lineær; feil terminalfart.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.4: Drill: utled og løs en differensialligning (sjanger G)

- **id:** `fys1100-7-4` · **number:** 7.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1100-7-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på ODE-oppgaven: fra N2L til analytisk løsning med initialbetingelser — den kjeden som alltid ender i en Python-deloppgave.
- **Eksamensbelegg:** Sjanger G samlet (86 %). Varianter: pendel, lineær fjær, ikke-lineær fjær, 1. ordens drag, ren ODE (H2022). Alltid koblet til Del 8. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) FBD → N2 → skriv ODE-en; 2) klassifiser (orden, type); 3) 2. ordens homogen ⇒ substituer til likevekt, karakteristisk likning, generell løsning; 1. ordens separabel ⇒ separer og integrer; ikke-lineær ⇒ lineariser om likevekt (Taylor); 4) **bruk initialbetingelsene** til å bestemme konstantene; 5) tolk grensetilfeller; 6) **påpek at neste steg ville vært en Euler–Cromer-løkke** (bro til kap. 8.1). Gjennomregnet eksamenscase (fjær eller drag) med sensor-margnotater om poengfordelingen (karakteristisk likning 2p / løsning 1p / initialbetingelser 2p). 10–15 oppgaver på eksamensnivå, minst tre 2.-ordens og to 1.-ordens.
- **Oppgavesjangre:** G (+ H-bro, J). Mønstereksempel (deloppgavekjede): «(a) Utled bevegelsesligningen for en pendel med lengde $L$. (b) Lineariser for små utslag og løs analytisk. (c) Skriv med ord hvordan du ville løst den *fulle* (ikke-lineære) ligningen numerisk.»
- **Typiske feil:** Hele sjanger G-repertoaret samlet: integrere som om $y$ konstant (0p), manglende initialbetingelser, feil linearisering, glemt absoluttverdi i drag, feil karakteristisk likning.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A sette opp + klassifisere ODE fra N2L, 30 min · 7.B harmonisk oscillator: karakteristisk likning + initialbetingelser, 40 min · 7.C 1. ordens drag: separabel løsning + terminalfart, 35 min · 7.D midtveis-format: ODE- og Taylor-flervalg, 30 min)

---

### Del 8 — Numerisk modellering med Python *(prioritet: PERFEKT — eget spor)*

> **Kodekontrakt (gjelder HELE Del 8 og O5 i øvingseksamenene):** all kode er
> Python-lignende pseudokode som **skrives for hånd** på eksamen (ikke et helt
> program — **initialbetingelser + integrasjonsløkke**). Alle programmeringsspråk
> godtas; **syntaksfeil straffes ikke**. Poeng gis for riktige initialbetingelser
> (1p), riktig akselerasjon (3p) og riktig løkke (1p). Kravene som SKAL
> modelleres i hver kodeblokk: (i) **`numpy`-arrays** forhåndsallokert med lengde
> $N$; (ii) **indeksdisiplin** — alltid `v[i]`, aldri `v` (−2p); (iii)
> **Euler–Cromer**: oppdater fart FØR posisjon og bruk den OPPDATERTE farten;
> (iv) drag alltid `-D*abs(v)*v` (−1p for `v**2`); (v) i 2D **begge komponenter**
> (maks 2p ellers); (vi) **begrunn metodevalget** i tekst. Hver kodeblokk i boka
> vises som `example`/`collapsible` med kjørbar referanseversjon + den håndskrevne
> «eksamensversjonen» ved siden av.

#### Kapittel 8.1: Fra ODE til kode: Euler–Cromer-løkka

- **id:** `fys1100-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `fys1100-7-1`
- **kapitteltype:** teori (Python, med kodekontrakt)
- **description:** Diskretiser tiden, skriv akselerasjonen fra ODE-en, oppdater fart så posisjon — og begrunn hvorfor Euler–Cromer er sensorens foretrukne metode.
- **Eksamensbelegg:** Sjanger H i **100 %** av settene, nesten alltid som **siste deloppgave i en ODE-oppgave**: «skisser en kode / integrasjonsløkke». **Euler–Cromer er sensorens klart foretrukne metode og skal kunne begrunnes.** Prioritet: **perfekt** (den viktigste ferdigheten som skiller FYS1100).
- **Forkunnskaper/kryssbok:** kap. 7.1; [Numerisk integrasjon](/bok/r2/r2-3-4), [Programmering av integrasjon](/bok/r2/r2-3-5), [Numerisk modellering av bevegelse](/bok/fysikk2/fysikk2-1-5). Python-grunnlag (lister, `for`-løkker, NumPy) repeteres kort; IN1900 refereres i klartekst (ikke bygget).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **diskretisering** — velg $N$ punkter, steglengde $dt$, forhåndsallokér arrays `t`, `x`/`theta`, `v`/`omega`; sett **initialbetingelser** i indeks 0; skriv **akselerasjonen fra ODE-en** inne i løkka; **Euler–Cromer-løkka** (kodekontrakt):
  ```
  for i in range(N-1):
      a = ...            # fra ODE-en, bruk x[i]/theta[i] og v[i]/omega[i]
      v[i+1] = v[i] + a*dt        # oppdater fart FØRST
      x[i+1] = x[i] + v[i+1]*dt   # bruk OPPDATERT fart
  ```
  **Begrunn metodevalget:** Euler–Cromer er (tilnærmet) energibevarende — «tar av og til for mye, av og til for lite», så feilen akkumuleres langt saktere enn i Forward Euler; kontrasten til Forward Euler (bruker gammel fart i posisjonsoppdateringen) forklares. **Utledning som kreves aktivt:** oversette en gitt ODE (fjær, pendel) til akselerasjonslinja + løkka, med riktige initialbetingelser. **Figurkrav:** skjematisk «tidslinje» av oppdateringsrekkefølgen; sammenligning Euler–Cromer vs. Forward Euler for en oscillator (amplitude stabil vs. voksende).
- **Oppgavesjangre:** H. Mønstereksempel: «Du har utledet bevegelsesligningen for en fjærpendel. Skisser en Python-kode som løser den numerisk: angi initialbetingelser og skriv en Euler–Cromer-løkke. Begrunn i to setninger hvorfor du velger Euler–Cromer framfor Forward Euler.»
- **Typiske feil (analysen §5.5, §3.H):** Skrive `v` uten indeks i løkka (−2p); bruke gammel fart i posisjonsoppdateringen (blir Forward Euler — mister det energibevarende poenget); glemme initialbetingelsene; ikke begrunne metodevalget; feil akselerasjonsuttrykk.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.2: Drag og 2D-baner numerisk

- **id:** `fys1100-8-2` · **number:** 8.2 · **estimatedMinutes:** 70 · **prerequisites:** `fys1100-8-1`, `fys1100-7-3`
- **kapitteltype:** teori (Python, med kodekontrakt)
- **description:** Luftmotstand med `abs(v)*v`, og komponentvis integrasjon i `x` og `y` for kast med drag, komet og satellitt.
- **Eksamensbelegg:** Sjanger H, den vanligste anvendelsen: drag koblet til numerikk (86 %), 2D-baner (kast med drag, komet H2024, satellitt H2025). **Sensor er svært detaljert:** −1p for manglende absoluttverdi, −2p for `v` uten indeks, maks 2p om ikke både $x$- og $y$-retning tas med. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.1, 7.3, 2.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **drag i koden** `F_drag = -D*abs(v)*v` (absoluttverdien gir riktig fortegn når legemet snur — knytt til kap. 7.3); **komponentvis 2D** — egne arrays `x`, `y`, `vx`, `vy`; farten $v = \sqrt{v_x^2 + v_y^2}$; drag-komponentene $F_{D,x} = -D v\,v_x$, $F_{D,y} = -D v\,v_y$ (retningen langs $-\mathbf{v}$); akselerasjon komponentvis inne i løkka; Euler–Cromer på hver komponent. Anvendelser: **kast med drag** (tyngde + drag), **komet/satellitt** (gravitasjon $\mathbf{a} = -GM\,\mathbf{r}/|\mathbf{r}|^3$ komponentvis, kap. 9). **Utledning som kreves aktivt:** sette opp akselerasjonslinjene for et 2D-kast med drag. **Figurkrav:** kode-skjema med de fire arrayene + banekurve (med drag vs. uten) skissert.
- **Oppgavesjangre:** H. Mønstereksempel: «Skisser en Python-kode som beregner banen til en ball kastet med startfart $\mathbf{v}_0$ under påvirkning av tyngde og luftmotstand $-D|\mathbf{v}|\mathbf{v}$. Ta med begge romlige komponenter, bruk Euler–Cromer, og pass på fortegnet i drag-leddet.»
- **Typiske feil (analysen §5.4–6):** `v**2` i stedet for `abs(v)*v` (−1p); bare én romlig komponent i en 2D-kode (maks 2p); `v` uten indeks (−2p); feil akselerasjonskomponent; bruke skalar fart der vektorretning trengs i drag-leddet.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.3: Feilvurdering, kodemodifikasjon og trapesmetode

- **id:** `fys1100-8-3` · **number:** 8.3 · **estimatedMinutes:** 65 · **prerequisites:** `fys1100-8-2`
- **kapitteltype:** teori (Python, med kodekontrakt)
- **description:** Kjenne igjen at Forward Euler «lekker energi», rette det, utvide koden med et nytt kraftledd, og integrere måledata med trapesmetoden.
- **Eksamensbelegg:** Sjanger H, de nyere undertypene: **feilvurdering av numerisk metode** (H2024 kometbane — Forward Euler gir spiral utover i stedet for lukket ellipse; rett ved Euler–Cromer / mindre $dt$); **kodemodifikasjon** (utvide med solvind $F_s = s/r^2$ radielt utover — og huske at massen $m$ må med når kraften ikke er masseuavhengig); **trapesmetode på datafil** (H2022, arbeid $W = \int F\,dx$ fra ujevne data). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.2; [Numerisk integrasjon](/bok/r2/r2-3-4) (trapesmetoden); kap. 5.1 (arbeidsintegralet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **feildiagnose** — Forward Euler «lekker energi» (amplitude/bane vokser urealistisk: oscillator sprer seg ut, planetbane spiraler utover); **rettemetoder:** bytt til Euler–Cromer, reduser $dt$, eller bruk høyere ordens metode (Runge–Kutta nevnes som beredskap, ikke satsingsområde); **kodemodifikasjon:** legg til et nytt kraftledd i akselerasjonslinja (f.eks. solvind $F_s = s/r^2$ radielt utover) — **og huske massen** når den nye kraften ikke er masseuavhengig ($a = F/m$); **trapesmetode på måledata** med ujevne intervaller: `W += (F[i+1]+F[i])*(x[i+1]-x[i])/2`; kvalitetssjekk av numerisk svar (benevning, størrelsesorden, grensetilfeller). **Utledning som kreves aktivt:** forklare *hvorfor* Forward Euler lekker energi og hvordan Euler–Cromer retter det. **Figurkrav:** to baner (Forward Euler spiral vs. Euler–Cromer lukket ellipse); trapes-skjema over ujevne datapunkter.
- **Oppgavesjangre:** H (+ J). Mønstereksempel: «En student modellerer en planet rundt sola med Forward Euler og får en bane som sakte spiraler utover. (a) Forklar hva som er galt fysisk. (b) Angi to måter å rette det på. (c) Sola begynner å sende ut en radiell solvind $F_s = s/r^2$ — vis hvordan du endrer akselerasjonslinja, og forklar hvorfor massen nå må stå i uttrykket.»
- **Typiske feil (analysen §3.H-undertyper):** Ikke gjenkjenne energilekkasjen som en *metodefeil* (tror det er fysikk); glemme massen når et masseavhengig kraftledd legges til; feil trapesformel ved ujevne intervaller; endre for lite i en kodemodifikasjon (0p for uendret eksempelkode); ikke kvalitetssjekke svaret.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 8:** 4 prøver (8.A Euler–Cromer-løkke fra en gitt ODE + metodebegrunnelse, 30 min · 8.B 2D-kast med drag, komponentvis kode, 35 min · 8.C feilvurdering + kodemodifikasjon med nytt kraftledd, 35 min · 8.D trapesmetode på datafil + kvalitetssjekk, 30 min)

---

### Del 9 — Gravitasjon og sentralkraftbevegelse *(prioritet: KJENNE — økende)*

#### Kapittel 9.1: Gravitasjon, sirkelbaner og unnslipningsfart

- **id:** `fys1100-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-4-1`, `fys1100-5-1`
- **kapitteltype:** teori (kompakt kjenne-kapittel)
- **description:** `F = GMm/r²` som sentripetalkraft, unnslipningsfart fra energibevaring, dimensjonsanalyse for banefart, og komet-/satellitt-ODE på komponentform.
- **Eksamensbelegg:** Sjanger K i **~35 %**, men **klart økende** (H2024 kometbane, H2025 satellittbane med dimensjonsanalyse, prøve: unnslipningsfart). Bevaringsargumentene må begrunnes (spinn «fordi kraften er radiell», energi «fordi bare tyngden gjør arbeid»). Prioritet: **kjenne** (kompakt, men reelt — og kobler flere søyler).
- **Forkunnskaper/kryssbok:** kap. 4.1, 5.1; [Newtons gravitasjonslov](/bok/fysikk2/fysikk2-2-1), [Unnslippningsfart og satellittbaner](/bok/fysikk2/fysikk2-2-4); dimensjonsanalyse fra kap. 1.1; komponentvis ODE fra kap. 8.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): gravitasjonskraft $\mathbf{F} = -\dfrac{GMm}{r^2}\hat{\mathbf{r}}$, potensiell energi $U = -\dfrac{GMm}{r}$; **sirkelbane:** gravitasjon som sentripetalkraft ⇒ $v = \sqrt{GM/r}$; **dimensjonsanalyse** for å utlede $v \sim \sqrt{GM/r_0}$ (kobler kap. 1.1); **unnslipningsfart** $v_u = \sqrt{2GM/R}$ fra energibevaring ($\tfrac12 mv^2 = GMm/R$); **sentralkraftbevegelse:** bevaring av mekanisk energi og spinn (aphel/perihel via $mv_1 r_1 = mv_2 r_2$); **komet-/satellitt-ODE på komponentform** $d^2x/dt^2 = -GM\,x/(x^2+y^2)^{3/2}$ (og tilsvarende $y$) — løses numerisk (kobler kap. 8.2). **Utledning som kreves aktivt:** $v=\sqrt{GM/r}$ og $v_u=\sqrt{2GM/R}$, samt oppsett av komponent-ODE-en. **Figurkrav:** ellipsebane med aphel/perihel og fartsvektorer; sirkelbane med gravitasjon inn mot sentrum.
- **Oppgavesjangre:** K (+ H, J). Mønstereksempel: «En satellitt går i sirkelbane i høyde $h$ over en planet med masse $M$ og radius $R$. (a) Finn banefarten. (b) Bruk dimensjonsanalyse til å bekrefte hvordan farten skalerer med $GM$ og baneradien. (c) Skriv med ord hvordan du ville satt opp en numerisk løsning hvis banen i stedet var elliptisk.»
- **Typiske feil:** Glemme fortegnet/formen på $U = -GMm/r$ (potensiell energi negativ); bruke bevaring uten begrunnelse; blande unnslipningsfart og banefart (faktor $\sqrt2$); feil potens i komponent-ODE-en ($r^3$ i nevneren); ikke koble spinnbevaring til at kraften er radiell.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 9:** 4 prøver, lettere omfang (kjenne-stoff) (9.A banefart + unnslipningsfart fra bevaring, 25 min · 9.B dimensjonsanalyse for banefart, 20 min · 9.C aphel/perihel med energi- og spinnbevaring, 30 min · 9.D midtveis-format: gravitasjon/unnslipningsfart-flervalg, 25 min)

---

### Del 10 — Spesiell relativitet *(prioritet: KUNNE / 86 %)*

#### Kapittel 10.1: Tidsdilatasjon, lengdekontraksjon og hastighetsaddisjon

- **id:** `fys1100-10-1` · **number:** 10.1 · **estimatedMinutes:** 70 · **prerequisites:** `fys1100-2-1`
- **kapitteltype:** teori
- **description:** Regneoppgaven i SR — `γ`, `Δt = γΔt₀`, `l = l₀/γ`, hastighetsaddisjon — med disiplin på egentid/egenlengde og romtidsdiagram.
- **Eksamensbelegg:** Sjanger I (regnevarianten) i **86 %** av settene, nesten alltid siste oppgave. Nyere oppgaver kombinerer tidsdilatasjon med strekning ($d = v\gamma\tau$) og løser for $v$, og krever **romtidsdiagram** (H2025). Prioritet: **kunne** (avgjør B mot C).
- **Forkunnskaper/kryssbok:** kap. 2.1; [Spesiell relativitetsteori – postulater](/bok/fysikk2/fysikk2-6-1), [Tidsdilatasjon](/bok/fysikk2/fysikk2-6-2), [Lengdekontraksjon](/bok/fysikk2/fysikk2-6-3); Taylor fra kap. 1.2 (rekkeutvikling av $E$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (fra formelarket, markeres): Lorentz-faktor $\gamma = 1/\sqrt{1-v^2/c^2}$; **tidsdilatasjon** $\Delta t = \gamma\Delta t_0$ (egentid $\Delta t_0$ måles der de to hendelsene skjer på **samme sted**); **lengdekontraksjon** $l = l_0/\gamma$ (egenlengde $l_0$ måles i legemets hvilesystem); **hastighetsaddisjon** $v' = (v-u)/(1-uv/c^2)$; kombinasjoner ($d = v\gamma\tau$, løs for $v$); **relativistisk energi** $E = \gamma mc^2$, hvileenergi $mc^2$, og Taylor-grensen $\to \tfrac12 mv^2$ (kap. 1.2); **romtidsdiagram** (verdenslinjer, samtidighetslinjer — tegneferdighet). **Utledning som kreves aktivt:** identifisere egentid/egenlengde i et konkret oppsett og løse for ukjent fart/tid/lengde. **Figurkrav:** romtidsdiagram med to verdenslinjer og en samtidighetslinje.
- **Oppgavesjangre:** I (+ Taylor). Mønstereksempel: «Et romskip flyr forbi en stasjon med fart $v = 0{,}8c$. (a) En prosess tar $\tau$ målt om bord — hvor lenge varer den sett fra stasjonen? Angi hvilket system som måler egentid. (b) Skipet er $l_0$ langt i sitt hvilesystem — hvor langt er det sett fra stasjonen? (c) Tegn et romtidsdiagram som viser situasjonen.»
- **Typiske feil (analysen §5.10):** Bytte om egentid/egenlengde eller $l$ og $l_0$ (−2p); bruke bevegelsesligninger uten Lorentz-faktor (0p); feil retning i hastighetsaddisjonen; bruke $\gamma$ på feil størrelse; radianer/grader-uavhengig, men fortegn i romtidsdiagram feil.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 10.2: Relativitetsparadokser og samtidighet

- **id:** `fys1100-10-2` · **number:** 10.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1100-10-1`
- **kapitteltype:** teori
- **description:** Konseptvarianten i SR — stige-i-låve, tvillingene, to romskip som skyter på hverandre — der samtidighetens relativitet løser paradokset.
- **Eksamensbelegg:** Sjanger I (paradoksvarianten): stige-i-låve, tvillinger, to romskip som skyter på hverandre (H2022 + Taylor av $E$). **Poenget er relativitet av samtidighet** — det er dét som løser paradokset. **Ingen poeng for bare å skrive opp SR-formler** uten å drøfte den konkrete situasjonen. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 10.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **relativitet av samtidighet** — to hendelser som er samtidige i ett system er det ikke i et annet i bevegelse; dette er nøkkelen til paradoksene; **stige-i-låve** (stigen passer i låven i låvens system pga. lengdekontraksjon, men ikke i stigens system — begge har rett fordi «samtidig» betyr ulikt); **tvillingparadokset** (den reisende akselererer/snur ⇒ bytter inertialsystem ⇒ asymmetri); **to romskip** som avfyrer mot hverandre (rekkefølge av hendelser er systemavhengig); **drøftingsmetoden:** identifiser hendelsene, spør «samtidige i hvilket system?», bruk samtidighetens relativitet til å oppløse motsetningen — **ikke bare regn**. **Utledning som kreves aktivt:** kvalitativ, men presis argumentasjon; kan støttes av romtidsdiagram. **Figurkrav:** romtidsdiagram for stige-i-låve som viser at «begge ender inne samtidig» er systemavhengig.
- **Oppgavesjangre:** I, J. Mønstereksempel: «En stige med egenlengde $l_0$ løper inn i en låve som er kortere enn $l_0$ i hvile. I bakkens system passer stigen akkurat inn mellom lukkede dører et øyeblikk; i stigens system gjør den det aldri. Forklar hvorfor begge beskrivelsene er riktige, og hva som er kjernen i oppløsningen.»
- **Typiske feil (analysen §5.11):** Skrive opp SR-formler uten å diskutere samtidighet (ingen poeng); behandle et paradoks som om det er en selvmotsigelse (mangler poenget); glemme at akselerasjon/systembytte bryter symmetrien i tvillingparadokset; svada uten å nevne *samtidighet* eksplisitt.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 10:** 4 prøver (10.A tidsdilatasjon + lengdekontraksjon med egentid-disiplin, 30 min · 10.B hastighetsaddisjon + kombinert $d=v\gamma\tau$, 35 min · 10.C paradoks-drøfting med samtidighet + romtidsdiagram, 30 min · 10.D relativistisk energi + Taylor-grense, 30 min)

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Kvalitative «forklar/begrunn/kritiser»-oppgaver (sjanger J)

- **id:** `fys1100-11-1` · **number:** 11.1 · **estimatedMinutes:** 70 · **prerequisites:** Del 1–10
- **kapitteltype:** drill (tverrgående sjanger J)
- **description:** Den tverrgående forklaringssjangeren: treff riktig mekanisme med riktig fagbegrep, begrunn med både energi og N2L, og kritiser en feilaktig løsning.
- **Eksamensbelegg:** Sjanger J i **minst én deloppgave per sett**; hele midtveis er kvalitativ/kort-kvantitativ MCQ. Gjengangere: indre vs. ytre krefter (Münchhausen), spinnbevaring når vekter slippes, hvorfor en kile presses mot veggen, snordrag topp vs. bunn av vertikal sirkel, **kritikk av en feilaktig ChatGPT-løsning** (masse ≠ treghetsmoment; spinn er bevart), rullende vs. glidende ball opp en bakke (kommer lengst *med* friksjon). Flere oppgaver ber eksplisitt om å begrunne **både** med energi **og** N2L. Prioritet: **perfekt** (billige, sikre poeng).
- **Innholdskontrakt:** Svarmalen etableres først: 1) navngi mekanismen/prinsippet (fagbegrep); 2) knytt den til situasjonen; 3) konkludér presist i 2–4 setninger — **ingen svada, ingen helgardering**. **«Begrunn med både energi OG N2L»-teknikken** drilles (fasiten viser da begge). **«Kritiser løsningen»-teknikken:** identifiser den gale antakelsen, si hvilket prinsipp som faktisk gjelder, korriger. Gjengangerbank med modellsvar (minst 20 stk) på tvers av boka: indre/ytre krefter, spinnbevaring, energibevaringens gyldighet, uelastisk støt-fella, hvorfor drag trenger absoluttverdi, hvorfor Euler–Cromer bevarer energi, samtidighetens rolle i SR, sentripetalkraft er ikke en egen kraft, hvorfor rullende ball kommer lengst. Hver med henvisning til teorikapitlet sitt. **Figurkrav:** der en mekanisme er lettere å forklare med figur (kile mot vegg, snordrag topp/bunn).
- **Oppgavesjangre:** J. Mønstereksempel: «En løsning hevder at når en roterende person på en friksjonsfri stol slipper to håndvekter rett ut til siden, øker rotasjonsfarten fordi personen «mister vekt». Forklar hva som faktisk er galt, angi hvilken størrelse som er bevart, og hva som skjer med rotasjonsfarten.»
- **Typiske feil (analysen §3.J, §5.1):** Svada uten fagbegrep; helgardering (to motstridende svar); essay der to–tre setninger er svaret; riktig fenomen men feil prinsipp; i «kritiser»-oppgaver: ikke peke på den *konkrete* feilen; glemme å begrunne med både energi og N2L når det bes om det.
- **Quiz: 18 · Flashcards: 28**

#### Kapittel 11.2: Midtveis-MCQ-simulering (kinematikk → gravitasjon)

- **id:** `fys1100-11-2` · **number:** 11.2 · **estimatedMinutes:** 180 · **prerequisites:** Del 1–7, Del 9
- **kapitteltype:** øvingseksamen (flervalg)
- **description:** Generalprøve for midtveiseksamen: ren flervalg over første halvdel i midtveisformatet, ~20 spørsmål på 3 timer.
- **Eksamensbelegg/miks:** Speiler midtveisformatet (digital Inspera, ~20 rene flervalgsspørsmål, 3 timer, kalkulator + Rottmann). **Dekker kun første halvdel — Del 1–7 + 9**, aldri de tunge analytiske ODE-løsningene, håndskrevet Python eller spesiell relativitet. Sammensetning (blander konseptrangeringer og korte utregninger): kinematikk-graftolkning og «umulig bevegelse» (K2), heis/fjærvekt-avlesning (K3), kraftpil-diagrammer (K3), bremselengde fra energibevaring (K5), friksjonstall på skråplan $\mu \ge \tan\theta$ (K3), loop-fart $v > \sqrt{5gR}$ (K4), roterende fjær-kule $k = m\omega^2/(1-R_0/R)$ (K4), treghetsmoment-rangering (K6), unnslipningsfart (K9), pluss **matematiske verktøy som flervalg**: 1./2. ordens ODE-gjenkjenning (K7), Taylor-ledd (K1), dimensjonsanalyse (K1). **Alle spørsmål nyskrevne**, ett riktig alternativ. **Kobling til quizbanken:** denne prøven er kondensatet av Del 1–7/9-quizene — teksten peker eksplisitt studenten til quizbanken som løpende midtveistrening. Løsningsforslag som `collapsible` per spørsmål: kort begrunnelse for riktig alternativ OG hvorfor de vanligste distraktorene er gale. `tip`-notat om tidsbudsjett (~9 min/spørsmål) og at midtveis teller ~20–25 % (`verifiser`).
- **Oppgavesjangre:** Flervalg (sjanger A–G/J/K). Ett riktig alternativ; distraktorene bygd på de typiske feilene (fiktiv sentripetalkraft, energibevaring i uelastisk støt, integrere ODE som konstant, $\sin$/$\cos$-bytte).
- **Quiz: 15 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 1: flertrinnsoppgaver med Python-ledd

- **id:** `fys1100-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `fys1100-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers avsluttende skoleeksamen: fem flertrinnsoppgaver (a–e) etter standardmalen, inkludert en ODE-oppgave som ender i en Python-deloppgave.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (2024/2025-form): **fem flertrinnsoppgaver, hver med 4–5 deloppgaver à 0–5 poeng, alle likt tellende**: **O1** Newton/energi/bevaring med **frilegemediagram** og grensetilfeller (sjanger C/D), **O2** rotasjon/stivt legeme (rulling eller spinnbevaring) (F), **O3** en differensiallignings-oppgave som **utledes, løses analytisk, og avsluttes med en Euler–Cromer-deloppgave** (G+H), **O4** spesiell relativitet (regning eller paradoks, oftest siste) (I), **O5** en av {skrått kast med drag, sirkelbevegelse, Fermi, gravitasjon} (A/E/B/K). ~25–40 % av deloppgavene krever forklaring/begrunnelse; minst én i anvendt/lekende innpakning. Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave — med **FBD, bevaringsbegrunnelse, retning/enhet, grensetilfelle-verifisering** og kjørbar Euler–Cromer-kode i O3. `tip`-notat om poeng per deloppgave og tidsbudsjett (~48 min/oppgave).
- **Oppgavesjangre:** C/D, F, G+H, I, A/E/B/K. Full flertrinnsmal med Python-ledd.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 2: flertrinnsoppgaver med Python-ledd (anvendt innpakning)

- **id:** `fys1100-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `fys1100-11-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i samme mal, gjennomgående kledd i anvendt/lekende innpakning — samme fysikk, ny drakt — med Fermi-oppgave og «kritiser løsningen»-innslag.
- **Eksamensbelegg/miks:** Samme flertrinnsmal som 11.3, men med den moderne **anvendte/lekende innpakningen** (jojo, dosert racersving, planet Dagobah, relativistisk stige i låve, ChatGPT-feiloppgave): **O1** kloss+kule på skråplan med FBD og grensetilfeller (C/D), **O2** jojo eller rullende sylinder + en «kritiser den feilaktige løsningen»-deloppgave (F+J), **O3** ikke-lineær fjær: utled ODE, lineariser om likevekt, løs, og skisser Euler–Cromer med drag (G+H), **O4** relativistisk stige-i-låve med samtidighetsdrøfting + romtidsdiagram (I+J), **O5** Fermi-estimering ELLER kometbane med kodemodifikasjon (B/K+H). ≥30 % kvalitative deloppgaver (den anvendte innpakningen inviterer til «forklar»- og «kritiser»-spørsmål). Løsningsforslag som A-besvarelse med vektings-`tip`; eget notat om at innpakningen er kosmetikk — identifiser standardsjangeren bak hver deloppgave. Sammen med 11.3 + 11.2 dekker settene samtlige sjangre A–K minst én gang, og begge avsluttende har en Python-deloppgave.
- **Oppgavesjangre:** C/D, F+J, G+H, I+J, B/K+H. Full flertrinnsmal, anvendt.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 11:** dekkes av midtveis-MCQ-simuleringen (11.2) og de 2 avsluttende øvingseksamenene (11.3–11.4) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 12 |
| 1 | 1.1–1.3 | 16+16+14 = **46** | 16+18+14 = **48** |
| 2 | 2.1–2.2 | 20+20 = **40** | 22+22 = **44** |
| 3 | 3.1–3.4 | 22+22+20+12 = **76** | 26+24+22+8 = **80** |
| 4 | 4.1–4.2 | 20+18 = **38** | 22+20 = **42** |
| 5 | 5.1–5.3 | 22+22+12 = **56** | 24+24+8 = **56** |
| 6 | 6.1–6.4 | 22+20+18+12 = **72** | 26+22+20+8 = **76** |
| 7 | 7.1–7.4 | 18+22+20+12 = **72** | 20+24+22+8 = **74** |
| 8 | 8.1–8.3 | 18+18+16 = **52** | 22+20+18 = **60** |
| 9 | 9.1 | **16** | **18** |
| 10 | 10.1–10.2 | 20+16 = **36** | 22+18 = **40** |
| 11 | 11.1–11.4 | 18+15+5+5 = **43** | 28+0+0+0 = **28** |
| **Sum** | **33 kap.** | **559 ≥ 500 ✓** | **578 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvensen: de fire 100 %-søylene (Newton/FBD Del 3, energi/
bevegelsesmengde Del 5, rotasjon Del 6, Python Del 8) bærer **256 av 559 quiz**.
**Del 1–7 + 9 utgjør 400 quiz — det er midtveispensumet** (~20–25 %), kalibrert
som løpende midtveistrening (jf. kap. 11.2). Flashcards er symbol-/formel- og
metaregel-tunge (mekanikkens vektor/skalar-apparat + FBD-symboler + sensorens
begrunnelseskrav + kodedisiplin).

### Prøver per del (4 per temadel 1–10, 40 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre med løsningsforslag
skrevet som A-besvarelse (FBD, bevaringsbegrunnelse, retning/enhet, grensetilfelle-
verifisering, kjørbar Euler–Cromer der relevant) og poengfordeling à 0–5 poeng per
deloppgave. Omfang i minutter angitt per prøve i §3. Prøvekapittel-id:
`fys1100-<del>-prove`, chapterNumber `<del>.P`.

- **Del 1 (Modelleringsverktøy):** 1.A dimensjonsanalyse · 1.B Taylor/linearisering · 1.C Fermi · 1.D midtveis-format alle tre verktøy.
- **Del 2 (Kinematikk/kast):** 2.A graf + konstant-$a$ · 2.B skrått kast finn $g$/$v_0$/$\theta$ · 2.C blandet 2D m/retningskrav · 2.D midtveis-format kinematikk.
- **Del 3 (Newton/FBD):** 3.A FBD + N2 enkeltlegeme · 3.B skråplan m/friksjon · 3.C koblede klosser m/grensetilfelle · 3.D midtveis-format FBD-flervalg.
- **Del 4 (Sirkel):** 4.A loop m/$N=0$ · 4.B dosert sving m/friksjonsdrøfting · 4.C sirkel+energi · 4.D midtveis-format sentripetal.
- **Del 5 (Energi/driv):** 5.A arbeid/energi m/dobbel begrunnelse · 5.B uelastisk støt m/begrunnelse · 5.C ballistisk pendel/fjær kjedet · 5.D midtveis-format energi/driv.
- **Del 6 (Rotasjon):** 6.A $\tau=I\alpha$ hengslet stav · 6.B rulling m/energi og dynamikk · 6.C spinnbevaring + kule-i-stav · 6.D midtveis-format treghetsmoment-rangering.
- **Del 7 (ODE/svingninger):** 7.A sette opp+klassifisere ODE · 7.B harmonisk oscillator m/initialbetingelser · 7.C 1. ordens drag separabel · 7.D midtveis-format ODE/Taylor.
- **Del 8 (Python):** 8.A Euler–Cromer + metodebegrunnelse · 8.B 2D-kast m/drag komponentvis · 8.C feilvurdering + kodemodifikasjon · 8.D trapesmetode på datafil.
- **Del 9 (Gravitasjon, lettere omfang):** 9.A banefart+unnslipningsfart · 9.B dimensjonsanalyse for banefart · 9.C aphel/perihel m/bevaring · 9.D midtveis-format gravitasjon.
- **Del 10 (Relativitet):** 10.A tidsdilatasjon/lengdekontraksjon m/egentid-disiplin · 10.B hastighetsaddisjon+$d=v\gamma\tau$ · 10.C paradoks m/samtidighet+romtidsdiagram · 10.D relativistisk energi+Taylor.

**Midtveis-generalprøve:** kap. 11.2 (180 min, ren flervalg) + prøvene 1.D + 2.D +
3.D + 4.D + 5.D + 6.D + 7.D + 9.D tas samlet som simulering av midtveiseksamen
(~20–25 % av karakteren; dekker Del 1–7 + 9, aldri tung ODE-løsning/Python/SR).
Angis eksplisitt i Del 0 og i prøvekapitlenes ingress.

### Øvingseksamener (2 komplette 4-timers avsluttende sett — kap. 11.3–11.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (11.3) | Standard flertrinns (2024/2025) | O1 Newton/energi+FBD, O2 rotasjon, O3 ODE→analytisk→Euler–Cromer, O4 SR, O5 kast/sirkel/Fermi/gravitasjon; ~25–40 % forklaring |
| Øvingseksamen 2 (11.4) | Anvendt/lekende innpakning | Samme mal i jojo/Daytona/Dagobah/stige-i-låve-drakt; O2 + «kritiser løsningen», O5 = Fermi eller kometbane m/kodemodifikasjon; ≥30 % kvalitativt |

Til sammen dekker de to settene + midtveis-MCQ-simuleringen (11.2) samtlige
sjangre A–K minst én gang, og hvert avsluttende sett har en **ODE-oppgave som
ender i en håndskrevet Euler–Cromer-deloppgave (O3/O5)**.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den todelte vurderingen (midtveis flervalg ~20–25 %
   `verifiser` + avsluttende 4 t skoleeksamen), fire–sju flertrinnsoppgaver, 0–5 p
   per deloppgave alle likt tellende, hjelpemidlene (Rottmann + fagspesifikt
   formelark + kalkulator), gjennomgangskravet «alle svar må begrunnes», og
   prognosen (grunnmalen O1–O5) fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (numerisk Python/Euler–Cromer, Newton+FBD+kraftmodeller, arbeid/
   energi/bevegelsesmengde m/bevaringsbegrunnelse, rotasjon/stive legemer,
   differensiallikninger), *kunne* (spesiell relativitet, sirkelbevegelse,
   svingninger/SHM, skrått kast, Fermi, Taylor), *kjenne* (gravitasjon/sentralkraft,
   referansesystemer/Galilei, treghetsmoment-rangering; **Lagrange kun navngitt**).
3. **Grunnmalen O1–O5** — hvordan settet er bygd (O1 Newton/energi+FBD, O2 rotasjon,
   O3 ODE→analytisk→Python, O4 SR, O5 kast/sirkel/Fermi/gravitasjon), og
   løsningsoppskriftene fra drillkapitlene (3.4, 5.3, 6.4, 7.4, 4.2, 11.1) i
   kortform.
4. **Sensorreglene** — metareglene: **alt begrunnes** (0/lite for svar uten
   begrunnelse; 0 for formler uten bruk); **FBD selvstendig poenggivende** (−2p
   udefinerte symboler, −1p fiktiv sentripetalkraft); **begrunn hvorfor en
   bevaringslov gjelder**; **riktig metode teller** (0p energibevaring i uelastisk
   støt, 0p integrere ODE som konstant, 0p SR-formler uten samtidighetsdrøfting);
   **kodedisiplin** (`v[i]` −2p, `abs(v)*v` −1p, 2D-begge-komponenter maks 2p);
   følgefeil straffes ikke; flere metoder godtas; retning/enhet/gjeldende siffer —
   pluss karakterskille-listen (bestått/midt/topp).
5. **Feilkatalogen** — de typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: tallsvar uten resonnement → 0.1/alle;
   energibevaring i uelastisk støt → 5.2; integrere ODE som konstant → 7.1;
   manglende absoluttverdi i drag → 7.3/8.2; `v` uten indeks → 8.1; bare én 2D-
   komponent i kode → 8.2; bevaringslov uten begrunnelse → 5.1–5.2; udefinerte
   FBD-symboler → 3.1; manglende retning → 2.2/3.1/6.1; tyngdemoment om
   massesenteret → 6.1; bytte $l$/$l_0$ → 10.1; SR-formler uten samtidighet → 10.2;
   $\sin$/$\cos$-bytte og radianer/grader → 2.2/1.2.
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **slås opp** (konstant-$a$-formler, karakteristisk-
   likning-oppskrift, treghetsmoment-tabell, Lorentz-transformasjon, Taylor-restledd);
   treningsråd: løs alltid oppgaver MED formelarket + Rottmann ved siden av, slik
   eksamen er — boka trener *bruk og utledning*, ikke pugg.
7. **Python-beredskapen** — den forberedte kodemalen studenten bør ha automatisert
   (diskretisering, forhåndsallokerte `numpy`-arrays, initialbetingelser,
   Euler–Cromer-løkke, `abs(v)*v`-drag, komponentvis 2D, metodebegrunnelse) og
   hvordan man *modifiserer* den raskt (nytt kraftledd, huske massen) — sjekklisten
   fra Del 8 i kortform. **Python er 1/5 av settet og 100 % — ikke utsett den.**
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 9 (midtveispensum; midtveis-generalprøven
   11.2 + 1.D–7.D + 9.D før midtveis) → 8 (Python parallelt fra uke 1, ikke utsatt)
   → 10; den kvalitative J-drillen 11.1 spres utover hele løpet; de to
   øvingseksamenene (11.3–11.4) de siste ukene under tidspress (240 min).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `fys1100` med alle 33
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen (obligatorisk
   — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under Universitetet i Oslo, navn
   «FYS1100 Mekanikk og modellering».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–K, grunnmalen O1–O5 og
   frekvenstallene som resten av boka refererer til (inkl. Lagrange-avgrensningen).
3. **Del 1 → 2 → 3** (verktøy → kinematikk → Newton/FBD): grunnmuren; 3.1 (FBD) er
   forutsetning for alt i Del 3–6.
4. **Del 4 → 5 → 6** (sirkel → energi/driv → rotasjon): 6.2 krever 5.1 (energi),
   6.3 krever 5.2 (driv) — bygg energi/driv før rotasjon.
5. **Del 7 (ODE/svingninger)** — 7.2 krever 1.2 (Taylor); fullfører midtveispensumet
   sammen med Del 9.
6. **Del 8 (Python)** kan bygges parallelt med Del 6–7 av egen agent med
   **kodekontrakt-fokus**, men 8.1 krever 7.1, 8.2 krever 7.3+2.2 — flagg
   avhengigheten. All kode kjørbar; håndskrevet «eksamensversjon» ved siden av.
7. **Del 9 (gravitasjon)** — krever 4.1 + 5.1; kobler dimensjonsanalyse (1.1) og
   komponent-ODE (8.2).
8. **Del 10 (SR)** — relativt selvstendig; 10.1 bruker Taylor (1.2).
9. **Del 11 til slutt** — J-drillen (11.1), midtveis-MCQ (11.2) og de to
   øvingseksamenene (11.3–11.4) gjenbruker hele boka; bygges av én agent som leser
   HELE skjelettet. ODE-oppgaven O3/O5 i hver øvingseksamen må ha kjørbar
   Euler–Cromer-kode.
10. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
    kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
    (`fys1100-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
    fastsettes i BYGGEKONTRAKT.md (fase 3).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\mathbf{F}$, $\mathbf{v}$, $\mathbf{a}$, $\mathbf{p}$,
      $\boldsymbol{\tau}$, $\mathbf{L}$, $\boldsymbol{\omega}$, $I$, $\gamma$, $\mu$).
- [ ] **Notasjonskonsistens (tekstsøk over alle fys1100-filer):** vektorstørrelser
      (kraft, fart, akselerasjon, moment, spinn) alltid med vektormarkering og
      **retning oppgitt**; skalarer (masse, energi, arbeid, treghetsmoment) aldri
      gitt vektorpil; **forbudt som satsingsstoff** (kun i Del 0-avgrensningen og
      kap. 8.3 som eksplisitt beredskap): Lagrange-formalisme, Runge–Kutta som
      hovedmetode.
- [ ] **Begrunnelsesdisiplin:** hvert løsningsforslag *modellerer* begrunnelsen
      (aldri bare svaret); hver bruk av en bevaringslov skriver ut **hvorfor** den
      gjelder; hvert FBD navngir alle krefter/symboler.
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen formler/
      konstanter presenteres som puggestoff.
- [ ] **FBD-disiplin:** teorikapitlene i Del 3–6 har minst ett fullstendig,
      navngitt frilegemediagram i eksemplene; ingen fiktiv «sentripetalkraft»
      tegnes inn (unntatt som eksplisitt motekssempel i «typiske feil»).
- [ ] **Python-kodekontrakt (Del 8 + O3/O5 i øvingseksamenene):** all kode kjørbar
      og modellerer eksamensversjonen; forhåndsallokerte `numpy`-arrays,
      indeksdisiplin (`v[i]`), Euler–Cromer (fart før posisjon, oppdatert fart),
      `abs(v)*v` i drag, begge 2D-komponenter, **metodevalget begrunnet**; minst én
      oppgave som *modifiserer* koden (nytt kraftledd) og én med trapesmetode på
      data; ingen oppgave belønner uendret eksempelkode.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet på
      hvert tallsvar og 2–3 gjeldende siffer — boka *modellerer* sensorkravet.
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (KUN til
      kapitler som finnes — de lenkede r1-/r2-/fysikk2-kapitlene i §1/§3 er
      verifisert mot metadataene 7. juli 2026; **IN1900 og Fysikk 1 er IKKE bygget
      i systemet og skal kun refereres i klartekst, aldri lenkes**), `collapsible`
      Symbol- og formelliste, Motivasjon, 2–4 eksempler (siste på eksamensnivå,
      med figur/FBD der sensor forventer det), Typiske feil-`warning`, 6–12 øvinger
      med `solution` + `hints` (stigende; minst én kvalitativ J-oppgave per
      teorikapittel), repetisjons-`collapsible`; drillkapitler har løsningsoppskrift
      + sensor-kommentert gjennomregnet case + 8–15 oppgaver på eksamensnivå.
- [ ] **Kvalitativ-kvoten:** på tvers av boka skal ~25–40 % av øvingene i
      teorikapitlene være kvalitative «forklar/begrunn/kritiser»-oppgaver med
      modellsvar i 2–4 setninger (speiler eksamens miks).
- [ ] **Quiz-sum ≥ 559 og flashcard-sum ≥ 578** per kvotetabellen i §4
      (kontrollsummér per del). Del 1–7 + 9-quizene fungerer som midtveisbank.
- [ ] **Prøver:** 4 per temadel 1–10 (40 stk) + midtveis-MCQ-simulering (11.2) +
      2 avsluttende øvingseksamener (11.3–11.4) som sammen dekker sjangrene A–K;
      hvert avsluttende sett har en ODE-oppgave som ender i en Euler–Cromer-deloppgave.
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

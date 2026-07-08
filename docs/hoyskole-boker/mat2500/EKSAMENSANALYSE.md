# Eksamensanalyse: MAT2500 Geometri (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok i geometri. Bygger på UiOs eksamensarkiv for MAT2500 — de seks ordinære skoleeksamenene **H2015, H2016, H2017, H2018, H2019 og H2020** (til sammen 6 oppgavesett, 25 hovedoppgaver med deloppgaver a–e). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster. Matematiske uttrykk, teoremnavn og standardnotasjon (`E²`, `E³`, `RP²`/`P²`, homogene koordinater `(x₀:x₁:x₂)`, `s_ℓ`, `ρ`, `t_a`, Ceva, Menelaos) er fagfelles og ikke opphavsrettslig beskyttet.
>
> **Viktig forbehold om evidensstyrke:** Arkivet er **lite** (6 sett) og inneholder **ingen løsningsforslag eller sensorveiledninger** — kun oppgavetekstene. Frekvenstallene er derfor beregnet på 6 datapunkter og må leses som **retningsgivende, ikke statistisk robuste**. Kravene til sensur (§4) er **utledet av oppgaveformuleringene** («Vis at», «Begrunn svaret», «Forklar hvorfor», «Tegn figur») og av fagets natur, ikke lest ut av fasit slik som i MAT2200-analysen. Alt som er usikkert er merket. Forbilde/mal: `../mat2200/EKSAMENSANALYSE.md` (samme UiO-nivå, bevisorientert) og `../mat1120/`.

> **Hovedfunn (les dette først):** MAT2500 er et **bredt, klassisk geometriemne** som i hvert sett spenner fra euklidske isometrier via klassisk plangeometri og kjeglesnitt til projektiv geometri — bygget på lineær algebra og analytisk geometri som verktøy. To trekk styrer bokdesignet:
> 1. **Formatet er stabilt, men ikke ensartet i sjanger.** 4 timers skriftlig skoleeksamen, **ingen hjelpemidler** (unntak: korona-hjemmeeksamen H2020, «alle hjelpemidler»), karakter A–F, **på norsk bokmål**, med én obligatorisk **prosjektoppgave** som må være godkjent. Hvert sett har **4 (noen år 3 eller 5) oppgaver med deloppgaver a–e**, og «alle deloppgaver teller like mye» er normalen. Til forskjell fra det rent bevistunge MAT2200 er MAT2500 en **blanding av regning, bevis, figurtegning og konstruksjon**: mange deloppgaver ber om et konkret uttrykk (en sirkellikning, et skjæringspunkt, et geometrisk sted), andre om et argument («Vis at … har et felles punkt»), atter andre om en tegning eller en passer-og-linjal-konstruksjon.
> 2. **To temaer er praktisk talt garantert hvert år: isometrier i planet og projektiv koordinatgeometri.** Hvert eneste sett åpner med en isometri-oppgave (sett sammen to–tre speilinger, klassifiser resultatet som rotasjon/translasjon/glidespeiling, finn fikspunkt og vinkel, og beskriv symmetrigruppen til en figur), og hvert eneste sett har en projektiv oppgave med homogene koordinater (skjæringspunkt av to linjer, linje gjennom to punkter, kjeglesnitt). Disse to **regnemaskinene** bærer ~halve eksamenen og må drilles til automatikk. Resten — kjeglesnitt, Ceva/Menelaos-klassisk geometri, og romlige symmetrigrupper/polyedre — roterer.
>
> Et tydelig **regimeskifte** ligger i arkivet: settene **2015–2017** vektlegger klassisk plangeometri (sirkler, tangenter, konkurrens) og analytiske kjeglesnitt med geometriske steder (locus); settene **2018–2020** dreier mot **polyedre/romlige rotasjonsgrupper** og **projektiv dualitet (kryssforhold, harmonisk konjugasjon, pol/polar)**. Isometri-åpningen og den projektive koordinatregningen er konstante gjennom hele perioden. Boken bør dekke begge «epokene».

---

## 1. Eksamensform og utvikling

MAT2500 (10 studiepoeng, undervises **hver høst**, undervisningsspråk norsk) vurderes med **én avsluttende skriftlig skoleeksamen på 4 timer**, karakterskala A–F. Normalt er **ingen hjelpemidler** tillatt («Tillatte hjelpemidler: Ingen» på H2015–H2019). Én **obligatorisk prosjektoppgave** i geometrisk fordypning må være godkjent for å gå opp til eksamen — dette er en egenart ved emnet (skriftlig fremstilling av et geometrisk tema) som ikke testes på selve eksamenen, men som forklarer at emnet også vektlegger å *skrive* geometri. Eksamensteksten er på norsk; besvarelsen kan skrives på norsk, svensk, dansk eller engelsk.

Status er **aktiv** (verifisert mot UiOs emneside 2026: undervist til og med minst H2026). Undervisningen er 4 forelesningstimer + 2 gruppetimer i uken.

### Formathistorikk

| År | Format | Struktur | Kommentar |
|---|---|---|---|
| H2015 | Papir, 4 t, ingen hjelpemidler | **4 oppgaver**, deloppgaver med **eksplisitte poeng** (1–2 pt per delpunkt, sum 20) | Klassisk mal; poengsatt |
| H2016 | Papir, 4 t, ingen hjelpemidler | **4 oppgaver**, «alle deloppgaver teller like mye» | — |
| H2017 | Papir, 4 t, ingen hjelpemidler | **4 oppgaver** (opptil a–d), «alle deloppgaver teller like mye» | Mest isometri-tung (O1 har fire deler) |
| H2018 | Papir, 4 t, ingen hjelpemidler | **3 oppgaver** (færre, men dypere; opptil a–e) | Første polyeder-oppgave i E³ |
| H2019 | Papir, 4 t, ingen hjelpemidler | **5 oppgaver** (kortere hver) | Ceva+Menelaos+harmonisk; Euler-polyeder |
| H2020 | **Korona-hjemmeeksamen**, 4 t, **«alle hjelpemidler»** | **4 oppgaver** | Kryssforhold + konstruksjon; ellers samme profil |

**Konstanter på tvers av årene:**
- **Isometri-åpningen.** Hvert sett har en oppgave (nesten alltid Oppgave 1) om sammensetning av speilinger i `E²`, klassifikasjon av resultatet, og symmetrier av en figur. Se §2.
- **Projektiv koordinatgeometri.** Hvert sett har en oppgave i homogene koordinater `(x₀:x₁:x₂)`: skjæringspunkt av linjer, linje gjennom to punkter, kjeglesnitt.
- **Figurkrav.** «Tegn figur», «Tegn G og beskriv alle symmetriene», «lag en skisse» går igjen — å produsere en korrekt, forklarende figur er en eksplisitt målt ferdighet, ikke pynt.
- **«Pene» tall og små konfigurasjoner.** Siden det (normalt) ikke er hjelpemidler, brukes enkle linjer (`x=1`, `y=x`, `y=−x`, `x+y=0`), enkle kjeglesnitt (`y²=8x`, `x²+y²=R²`), og små heltallskoordinater i det projektive planet.
- **Blandet sjanger.** Samme sett veksler mellom «regn ut» (skjæringspunkt, sirkellikning, koordinater til C og D), «vis/begrunn» (konkurrens, tangens, harmonisk konjugasjon) og «tegn/konstruer». Dette skiller MAT2500 fra rene bevisemner.

### Regimeobservasjon: to epoker i arkivet
Det tydeligste strukturfunnet er et **innholdsskifte rundt 2018**:
- **2015–2017:** Tyngdepunkt på **klassisk plangeometri** (tre sirkler som tangerer, felles tangenter, `S₁T/S₂T = r₁/r₂`, konkurrens av `AD, BE, CF`, innskrevet sirkel) og **analytiske kjeglesnitt med geometriske steder** (parabel + korde + sirkel, locus for midtpunkt, parabeltangent).
- **2018–2020:** Tyngdepunkt på **polyedre og romlige symmetrigrupper i `E³`** (dobbel pyramide, når er den regulær, rotasjonsgruppe isomorf med en plan symmetrigruppe, Eulers formel) og **projektiv dualitet** (kryssforhold, harmonisk konjugasjon, pol/polar, degenererte kjeglesnitt).

Konstantene (isometri + projektiv koordinatregning) binder de to epokene sammen. **Konsekvens for boken:** dekk begge epokene fullt — det er ingen garanti for hvilken profil neste sett følger, men de to garanterte maskinene må uansett sitte.

### Emneansvarlig-rotasjon (forklarer stilnyanser)
Variasjonen i antall oppgaver (3–5) og i tema-tyngdepunkt tyder på flere forelesere/oppgavesettere over perioden. Kjernepensumet — euklidsk/klassisk/kjeglesnitt/projektiv/romlig geometri — er stabilt; det er *vektingen* mellom klassisk plangeometri og projektiv dualitet/polyeder som skifter. Boken bør ikke satse på én profil.

---

## 2. Temafrekvens-tabell

Grunnlag: 6 sett (H2015–H2020), 25 hovedoppgaver. Cellene angir i hvor mange av de 6 settene temaet opptrer som egen (del)oppgave. **NB: 6 datapunkter — prosenttallene er grove.** Epoker: **2015–2017** (klassisk/analytisk) og **2018–2020** (romlig/projektiv-dual).

| Tema | 2015–17 | 2018–20 | Sett (av 6) | **Gjenganger-score** |
|---|---|---|---|---|
| **Isometrier i `E²`** (speilinger sammensatt → rotasjon/translasjon/glidespeiling; fikspunkt + vinkel; symmetrigruppe av figur) | 3/3 | 3/3 | **6/6** | **~100 %** |
| **Projektiv koordinatgeometri** (homogene koord.; skjæring av linjer; linje gjennom to punkter) | 3/3 | 3/3 | **6/6** | **~100 %** |
| **Kjeglesnitt** (samlet: analytisk locus + projektiv klassifikasjon degenerert/ellipse/hyperbel + tangent) | 3/3 | 2/3 | **5–6/6** | **~90 %** |
| — *Kjeglesnitt i projektivt plan* (degenerert, ellipse/hyperbel, tangent via `(x₀:x₁:x₂)`) | 3/3 | 2/3 | 5/6 | **~80 %** |
| — *Kjeglesnitt analytisk + geometrisk sted (locus)* (parabel/sirkel, midtpunktbane, tangent) | 3/3 | 0/3 | 3/6 | **~50 %** (kun tidlig epoke) |
| **Klassisk plangeometri** (Ceva/Menelaos, konkurrens av `AD,BE,CF`, sirkler & felles tangenter, innskrevet sirkel) | 3/3 | 1/3 | **4/6** | **~65 %** |
| **Polyedre & romlige symmetrigrupper** (`E³`, regulære/Platonske legemer, rotasjonsgruppe, Eulers formel `V−E+F=2`) | 0/3 | 3/3 | **3/6** | **~50 %** (kun sen epoke) |
| **Harmonisk konjugasjon / kryssforhold / pol–polar** (projektiv dualitet) | 0/3 | 2/3 | **2/6** | **~35 %** (kun sen epoke) |
| **Konstruksjon med linjal** (finn punkt ved å trekke linjer og markere skjæring) | 0/3 | 1/3 | **1/6** | **~15 %** |
| **Tangentproblemer** (tangent fra ytre punkt / tangentbetingelse for linje mot kjeglesnitt) | 2/3 | 1/3 | 3/6 | **~50 %** (innbakt) |

**Viktigste funn:**

1. **Isometri-oppgaven er den mest forutsigbare oppgaven på hele eksamenen.** Alle 6 settene har den, nesten alltid som Oppgave 1. Mønsteret er nesten identisk hvert år: gitt to eller tre speilingslinjer (`ℓ, ℓ', ℓ''`), vis at en sammensetning `s_ℓ ∘ s_{ℓ'}` er en rotasjon (finn fikspunkt = skjæringspunkt av linjene, og vinkel = dobbelt vinkelen mellom linjene), eventuelt legg til en translasjon og vis at resultatet blir en ny rotasjon eller en glidespeiling, og **tegn en figur som er symmetrisk under isometrien** og beskriv hele symmetrigruppen. Dette er en ren regnemaskin som må drilles til refleks.

2. **Projektiv koordinatregning er den andre garanterte maskinen.** Alle 6 settene har homogene koordinater. Grunnferdighetene er mekaniske: skjæringspunkt av to linjer `= ` kryssprodukt av koeffisientvektorene; linje gjennom to punkter `= ` kryssprodukt av punktvektorene; og innsetting i et kjeglesnitt `Σ a_{ij} x_i x_j = 0` for å telle skjæringspunkter, finne tangensbetingelse, eller avgjøre om kurven er degenerert. Denne dualiteten linje↔punkt via kryssprodukt bør være et eget kapittel med drill.

3. **Kjeglesnitt er allestedsnærværende, men skifter innpakning.** I 2015–2017 kommer de analytisk: en parabel eller sirkel, en varierende korde/parameter, og et **geometrisk sted (locus)** for et midtpunkt eller skjæringspunkt — pluss tangentbetingelser. I 2018–2020 kommer de projektivt: en kjeglesnittfamilie `Q_a` eller `C_t`, klassifiser som ellipse/hyperbel avhengig av parameter, finn den **degenererte** verdien (kjeglesnittet blir en union av to linjer), og bruk linja i det uendelige (`x₂=0`) til å skille ellipse fra hyperbel. Boken må dekke begge språk og koblingen mellom dem.

4. **Klassisk plangeometri (Ceva/Menelaos + sirkelkonfigurasjoner) bærer den tidlige epoken.** Det gjennomgående argumentet er **konkurrens** — at tre linjer `AD, BE, CF` møtes i ett punkt — bevist via Cevas setning (produkt av tre delforhold = 1) eller via en tangentlengde-/radiusrelasjon (`S₁T/S₂T = r₁/r₂`). Menelaos (produkt = −1 for kolineære punkter) og harmonisk konjugasjon `(AB,CD)=−1` kommer inn i 2019. Dette apparatet må sitte, men er ikke garantert hvert år.

5. **Polyedre og romlige rotasjonsgrupper er den sene epokens signatur.** Fra 2018 dukker `E³`-geometri opp: en dobbeltpyramide eller konveks innhylling, betingelsen for at den er et **regulært (Platonsk) legeme** (kongruente likesidede trekanter møtes likt i hvert hjørne), beskrivelse av **rotasjonsgruppen** (og at den er isomorf med symmetrigruppen til en plan mangekant), og **Eulers polyederformel** `V − E + F = 2` til å telle sideflater. Krever romlig forståelse + gruppeteori-språk.

6. **Projektiv dualitet (kryssforhold/harmonisk/pol–polar) er topp-poeng-stoff i sen epoke.** Harmonisk konjugerte punktpar `(A,B),(C,D)` med kryssforhold −1, pol og polar med hensyn på en sirkel (og gjensidighetsprinsippet: `P` på polaren til `Q` ⇔ `Q` på polaren til `P`), og konstruksjon av det harmoniske konjugatet med kun linjal. Lav frekvens, men høy skille-verdi.

---

## 3. Oppgavetype-katalog

Sjangrene som bærer MAT2500-eksamen, med forventet metode. **Metodekravene er utledet av oppgaveformuleringene** (ingen fasit i arkivet), forankret i standard geometripensum.

### A. Isometrier i planet: sammensetning og klassifikasjon
- **Krav:** Skriv hver speiling `s_ℓ` (eventuelt som affin avbildning). **Nøkkelfakta:** sammensetning av to speilinger om linjer som **skjærer** hverandre = rotasjon om skjæringspunktet med vinkel = **dobbelt** vinkelen mellom linjene; om **parallelle** linjer = translasjon (`2×` avstanden). Finn fikspunkt (løs `ρ(P)=P`, eller identifiser som linjeskjæring) og rotasjonsvinkel. For tre speilinger / speiling∘rotasjon: klassifiser som speiling eller **glidespeiling** (finn speilingslinje + translasjonsvektor). Legg til translasjon `t_a` og vis at `t_a∘ρ` fortsatt er en rotasjon (translasjon flytter bare sentrum).
- **Frekvens:** ~100 %. Nesten alltid Oppgave 1.
- **Omskrevet eksempel:** «Vis at `s_ℓ ∘ s_{ℓ'}` er en rotasjon; finn fikspunkt og vinkel. La `t` være translasjon med `(2,0)`; vis at `t∘s_ℓ∘s_{ℓ'}` er en rotasjon om origo.»

### B. Symmetrigrupper av plane figurer
- **Krav:** Gitt en figur `G` (ofte konstruert som `F ∪ σ(F)` for en isometri `σ`), **tegn den** og **beskriv alle symmetriene** — dvs. alle isometrier som avbilder `G` på seg selv. Angi symmetrigruppen (typisk en dieder- eller syklisk gruppe `D_n`/`C_n`), eller finn en mangekant med foreskrevet symmetri. Krever at man ser rotasjons- og speilingssymmetrier og teller dem korrekt.
- **Frekvens:** ~65 % (innbakt i isometri-oppgaven i de fleste sett).
- **Omskrevet eksempel:** «La `G = F ∪ s_{ℓ'}(F)`. Tegn `G` og beskriv alle symmetriene. La `H = G ∪ ρ'(G)`; tegn `H` og beskriv symmetriene.»

### C. Projektiv koordinatgeometri: linjer og punkter
- **Krav:** Homogene koordinater `(x₀:x₁:x₂)`. **Skjæringspunkt av to linjer** `a·x=0`, `b·x=0` = `a × b` (kryssprodukt). **Linje gjennom to punkter** `P, Q` = `P × Q`. Bekreft insidens ved innsetting. Forstå dualiteten linje↔punkt. Håndter linja i det uendelige (`x₂=0` eller `x₀=0` avhengig av innleiring av `R²`).
- **Frekvens:** ~100 %.
- **Omskrevet eksempel:** «Finn skjæringspunktet `P` mellom to gitte projektive linjer, og deretter likningen til linja gjennom `P` og et gitt punkt `Q`.»

### D. Kjeglesnitt i det projektive planet: klassifikasjon og degenerasjon
- **Krav:** Gitt en kjeglesnittfamilie `Q_a`/`C_t` = `Σ a_{ij}x_i x_j = 0`. **Klassifiser affint** (etter innleiring `R²↪P²`): ellipse, hyperbel eller parabel — avgjør via snitt med **linja i det uendelige** (ingen reelle uendelige punkter = ellipse, to = hyperbel, ett dobbelt = parabel), eller via fortegn på ledende kvadratisk form. Finn parameterverdien der kjeglesnittet er **degenerert** (union av to linjer — determinant av den symmetriske matrisen = 0) og beskriv de to linjene. Tell skjæringspunkter mellom kjeglesnitt og en gitt linje ved innsetting → andregradslikning (diskriminant).
- **Frekvens:** ~80 %.
- **Omskrevet eksempel:** «For hvilke verdier av `a` er snittet av `Q_a` med `R²` en ellipse, hhv. en hyperbel? For hvilken `a` er `Q_a` degenerert, og hvilke to linjer består den da av?»

### E. Analytiske kjeglesnitt og geometriske steder (locus)
- **Krav:** Gitt en kjeglesnitt (parabel `y²=8x`, sirkel `x²+y²=R²`) og et **varierende** element (korde med stigningstall `k`, radius `R`, punkt `S` på kurven). Finn likningen til sirkelen/korden, og bestem det **geometriske stedet (locus)** for et avledet punkt (midtpunkt, skjæringspunkt) når parameteren varierer — eliminér parameteren. Finn tangenter og tangeringspunkter; undersøk grensepunkter når parameter → 0 eller ∞.
- **Frekvens:** ~50 % (tung i 2015–2017, fraværende i 2018–2020).
- **Omskrevet eksempel:** «En korde gjennom `(2,0)` med stigningstall `k` er diameter i en sirkel. Finn sirkelens likning, vis at `x=−2` tangerer den, og finn locus for kordens midtpunkt når `k` varierer.»

### F. Klassisk plangeometri: konkurrens (Ceva) og kollinearitet (Menelaos)
- **Krav:** **Cevas setning:** cevianene `AD, BE, CF` i en trekant er **konkurrente** ⇔ `(BD/DC)(CE/EA)(AF/FB) = 1`. **Menelaos' setning:** tre punkter på (forlengelsene av) sidene er **kolineære** ⇔ tilsvarende produkt `= −1` (med fortegn). Bruk til å bevise at tre linjer møtes i ett punkt, eller at tre punkter ligger på én linje. Ofte kombinert med sirkel-/tangentkonfigurasjoner der delforholdene kommer fra tangentlengder eller radier (`S₁T/S₂T = r₁/r₂`).
- **Frekvens:** ~65 %.
- **Omskrevet eksempel:** «Den innskrevne sirkelen tangerer sidene i `D, E, F`. Vis at `AD, BE, CF` har et felles punkt.» / «Bruk Cevas og Menelaos' setninger på trekant `DKL` til å vise at punktparene er harmonisk konjugerte.»

### G. Sirkler, tangenter og potens
- **Krav:** Felles tangenter til to sirkler skjærer sentrallinja i et punkt som deler den i forholdet mellom radiene (`S₁T/S₂T = r₁/r₂`, likedannede trekanter). Tangent fra ytre punkt (to tangenter, like tangentlengder). Tangentbetingelse: linje tangerer kjeglesnitt ⇔ innsatt andregradslikning har diskriminant 0. Skjæring sirkel–parabel/sirkel–sirkel ved eliminasjon.
- **Frekvens:** ~50 %.
- **Omskrevet eksempel:** «To sirkler med `r₁+r₂ < S₁S₂` har felles tangenter som skjærer sentrallinja i `T`. Vis at `S₁T/S₂T = r₁/r₂`.» / «Finn tangentene til `x²+y²=1` gjennom `(2,0)`.»

### H. Polyedre, regulære legemer og romlige rotasjonsgrupper
- **Krav:** I `E³`: gitt en konstruksjon (dobbeltpyramide, konveks innhylling), finn parameteren som gjør sideflatene til **kongruente likesidede trekanter**, og avgjør om resultatet er et **regulært (Platonsk) legeme** (samme antall flater i hvert hjørne). Beskriv **rotasjonsgruppen** (alle rotasjoner av `E³` som bevarer legemet) — orden og struktur, ofte isomorf med symmetrigruppen (`D_n`) til grunnflaten. **Eulers formel** `V − E + F = 2` til å telle sideflater, kombinert med at hver flate er en tre-/firkant og hver kant deles av to flater.
- **Frekvens:** ~50 % (kun 2018–2020).
- **Omskrevet eksempel:** «For hvilken `n` finnes `a` slik at den doble pyramiden er et regulært polyeder? Beskriv rotasjonsgruppen for `n=3`.» / «Et konvekst polyeder har 12 hjørner og 24 kanter; hvor mange sideflater, og hvor mange trekanter/firkanter?»

### I. Kryssforhold, harmonisk konjugasjon og pol–polar
- **Krav:** **Kryssforhold** `(A,B;C,D)` av fire kolineære punkter; **harmonisk** når det er −1. Regn ut det harmoniske konjugatet `D` til `C` mhp. `(A,B)`, også når ett punkt er i det uendelige. **Konstruksjon:** finn `D` med kun linjal (komplett firkant). **Pol og polar** mhp. en sirkel: gjensidighetsprinsippet (`P` på polaren til `Q` ⇔ `Q` på polaren til `P`), og dualitet (tre linjer gjennom ett punkt ⇒ deres poler er kolineære).
- **Frekvens:** ~35 % (kun 2019–2020), høy skille-verdi.
- **Omskrevet eksempel:** «Finn `D` slik at `(A,B)` og `(C,D)` er harmonisk konjugerte, og konstruer `D` med linjal.» / «Vis at hvis tre linjer møtes i ett punkt, er polene deres kolineære.»

### J. Figurtegning og skisse (tverrgående krav)
- **Krav:** Nesten hver oppgave ber om en **figur**: tegn parabelen og sirkelen for en gitt parameter, tegn den symmetriske figuren `G`, skisser kjeglesnittet, tegn området i `(a,b)`-planet der en linje skjærer et kjeglesnitt. Figuren skal være **korrekt og forklarende**, ikke bare illustrativ.
- **Frekvens:** ~100 % (som delkrav).

---

## 4. Sensorens krav (utledet, ikke fra fasit)

> **Metodisk forbehold:** Arkivet har **ingen løsningsforslag eller sensorveiledninger**. Punktene under er lest ut av **oppgaveformuleringene** og av hva faget krever, ikke fra en fasit. De bør reverifiseres mot en sensorveiledning hvis en slik skaffes.

### Utledede krav
1. **Todelt vurdering: riktig svar OG begrunnelse.** Formuleringene veksler bevisst mellom «Finn …» (konkret svar forventes: en likning, et koordinatsett, en vinkel) og «Vis at …/Begrunn/Forklar hvorfor …» (argument forventes). En regnedel uten svar og en «vis at»-del uten argument gir begge lite. Boken må trene begge modi.
2. **Klassifikasjon skal navngis presist.** «Vis at sammensetningen er en rotasjon» krever at man både **identifiserer typen** (rotasjon, ikke bare «en isometri») **og oppgir de definerende dataene** (fikspunkt/sentrum + vinkel; for glidespeiling: linje + vektor; for translasjon: vektor).
3. **Figur er en del av svaret.** Der det står «Tegn figur» / «Tegn G og beskriv symmetriene», teller figuren. En løsning uten figur er ufullstendig når oppgaven ber om den.
4. **Teoremene skal navngis og brukes korrekt.** Ceva, Menelaos, Eulers formel, kryssforhold-definisjonen — når oppgaven eksplisitt sier «Bruk Cevas setning …», forventes riktig oppsett av delforholdene med **fortegn** (Menelaos = −1, Ceva = +1) og korrekt konklusjon.
5. **Parametertilfeller skal skilles fullstendig.** «For hvilke verdier av `a` …» krever at **alle** tilfeller dekkes (ellipse/hyperbel/parabel/degenerert), ikke bare det generiske, og at grensetilfellet (degenerasjon, `k→0`/`k→∞`) behandles eksplisitt.
6. **Eksakte uttrykk.** Koordinater, likninger og vinkler oppgis eksakt (brøk, `√`, `π`), ikke som desimaltilnærminger — særlig relevant fordi eksamen normalt er hjelpemiddelfri.

### Hva som trolig skiller karakternivåene (hypotese)
- **Bestått-sjiktet:** mekanikken — sammensett to speilinger og finn rotasjon, kryssprodukt for projektiv skjæring/linje, sett opp og løs en sirkellikning, sett inn i et kjeglesnitt.
- **Midtsjiktet:** full klassifikasjon med alle data (glidespeiling med linje+vektor; ellipse/hyperbel/degenerert-skille via linja i det uendelige; korrekt Ceva/Menelaos-oppsett; symmetrigruppe korrekt beskrevet).
- **Toppsjiktet:** locus-eliminasjon med grensetilfeller; romlig rotasjonsgruppe identifisert opp til isomorfi; harmonisk konjugasjon/pol–polar med både regning og linjal-konstruksjon; og de deloppgavene som ber om et **generelt** bevis (pol-gjensidighet, konkurrens for vilkårlig konfigurasjon) framfor et konkret tall.

---

## 5. Typiske feil (utledet)

Utledet av oppgavestrukturen og fagets kjente fallgruver (ikke fra fasit — behandles som hypoteser).

1. **Feil rotasjonsvinkel ved speilingssammensetning.** Vinkelen er **dobbelt** vinkelen mellom speilingslinjene, ikke vinkelen selv; og rekkefølgen `s_ℓ∘s_{ℓ'}` vs. `s_{ℓ'}∘s_ℓ` gir motsatt orientering (H2019 tester nettopp dette: er `s₁∘s₂` og `s₂∘s₁` like?).
2. **Forveksle rotasjon og translasjon.** To speilinger om **skjærende** linjer = rotasjon; om **parallelle** linjer = translasjon. Å bomme på hvilken konfigurasjon man har.
3. **Ufullstendig klassifikasjon.** Å si «det er en rotasjon» uten å oppgi sentrum og vinkel, eller «en glidespeiling» uten linje og vektor.
4. **Kryssprodukt-feil i projektiv geometri.** Regnefeil eller fortegnsfeil når skjæringspunkt/forbindelseslinje beregnes som kryssprodukt; glemme å normalisere/tolke `(x₀:x₁:x₂)` opp til skalering.
5. **Feil kjeglesnitt-klassifikasjon.** Blande ellipse og hyperbel; ikke bruke linja i det uendelige (`x₂=0`) korrekt for å telle uendelige punkter; overse at et parametervalg gir **degenerasjon**.
6. **Ceva/Menelaos med feil fortegn.** Bruke `+1` der Menelaos krever `−1`, eller sette opp delforholdene i feil syklisk rekkefølge.
7. **Locus uten parametereliminering.** La `k` eller `R` bli stående i «svaret» på det geometriske stedet; glemme grensepunktene når parameteren går mot 0 eller ∞.
8. **Glemme figur / tegne feil figur.** Der oppgaven ber om figur, hoppe over den eller tegne en som ikke stemmer med konfigurasjonen.
9. **Eulers formel feil anvendt.** Feil telling av `V, E, F`, eller glemme at hver kant deles av to flater / hvert triangel har 3 kanter når man løser for antall trekant- vs. firkantflater.
10. **Regulært polyeder-kriteriet.** Anta at kongruente likesidede sideflater er *nok* til at et legeme er regulært; glemme at også hjørnene må være like (samme antall flater møtes i hvert hjørne) — H2018 tester eksplisitt hvorfor et slikt legeme *ikke* er regulært.

---

## 6. Teorem- og notasjonsapparat

MAT2500 er **ikke** åpen bok (unntatt korona-H2020). Apparatet under må kunne **formuleres, brukes og delvis bevises** uten hjelpemidler.

### Euklidsk geometri og isometrier
- **Isometrier i `E²`:** translasjon `t_a`, rotasjon `ρ` (sentrum + vinkel), speiling `s_ℓ`, glidespeiling. **Speilingssammensetning:** to speilinger = rotasjon (skjærende linjer, vinkel `2θ`) eller translasjon (parallelle linjer); enhver plan isometri er sammensetning av høyst tre speilinger.
- **Symmetrigrupper i planet:** dieder-`D_n` og syklisk `C_n`; symmetriene til regulære mangekanter; friser/mønstre (i pensum).
- **Isometrier i `E³`:** rotasjoner om akse; **rotasjonsgruppene** til de regulære (Platonske) legemene; kongruens.

### Klassisk plangeometri
- **Cevas setning** (konkurrens av cevianer, produkt av delforhold = 1) og **Menelaos' setning** (kollinearitet, produkt = −1).
- Trekantgeometri: innskrevet/omskrevet sirkel, tangentlengder, sentrallinje og felles tangenter til to sirkler (`S₁T/S₂T = r₁/r₂`).
- **Harmonisk konjugasjon** `(A,B;C,D) = −1`; **kryssforhold** som projektiv invariant.

### Kjeglesnitt
- Analytisk: parabel (`y²=4px`), ellipse, hyperbel, sirkel; tangent, korde, diameter; **geometrisk sted (locus)** ved parametereliminering.
- Projektivt: kjeglesnitt som `Σ a_{ij} x_i x_j = 0` med symmetrisk matrise; **degenerasjon** (det = 0 → union av linjer); klassifikasjon via snitt med linja i det uendelige; tangent og pol/polar.

### Projektiv geometri
- Det projektive planet `RP²`/`P²`, homogene koordinater `(x₀:x₁:x₂)`; innleiring av `R²` (`(x,y)↦(x:y:1)` e.l.) og **linja i det uendelige**.
- **Dualitet linje↔punkt via kryssprodukt:** skjæringspunkt = `a×b`, forbindelseslinje = `P×Q`.
- **Pol og polar** mhp. et kjeglesnitt/sirkel; gjensidighetsprinsippet; kollinearitet av poler ↔ konkurrens av linjer.

### Romgeometri og lineær algebra som verktøy
- Konvekse polyedre, regulære (Platonske) legemer og deres klassifikasjon; **Eulers polyederformel `V − E + F = 2`**.
- Lineær algebra brukt til å utlede geometriske teoremer i det projektive planet (matriser for kjeglesnitt og projektiviteter).

### Notasjonskonvensjoner boken bør speile
`E²`, `E³` (euklidsk plan/rom); `RP²`/`P²` (projektivt plan); `(x₀:x₁:x₂)` (homogene koord.); `s_ℓ` (speiling om `ℓ`); `ρ`, `ρ_θ` (rotasjon); `t_a`, `t_~a` (translasjon); `∘` (sammensetning); `△ABC` (trekant); cevianer `AD, BE, CF`; `(A,B;C,D)` (kryssforhold); `V−E+F` (Euler); `D_n`, `C_n` (symmetrigrupper). Norsk fagterminologi, eksakte svar.

---

## 7. Prognose og prioritering

> Formatet er stabilt (4 t skoleeksamen, normalt ingen hjelpemidler, norsk, obligatorisk prosjektoppgave, 3–5 oppgaver med a–e og lik vekting), men **temaprofilen roterer** mellom en klassisk/analytisk epoke (2015–17) og en romlig/projektiv-dual epoke (2018–20). To maskiner er garantert; resten prioriteres etter frekvens og skille-verdi. **NB: prioriteringen bygger på kun 6 sett uten fasit — reverifiser mot nyere sett og en sensorveiledning.**

### Nivå 1 — må beherskes perfekt (garantert / ~90–100 %)
1. **Isometrier i `E²`: speilingssammensetning → klassifikasjon.** Rotasjon/translasjon/glidespeiling med alle data (sentrum, vinkel, linje, vektor). Den garanterte Oppgave 1.
2. **Projektiv koordinatgeometri.** Kryssprodukt for skjæring og forbindelseslinje; insidens; linja i det uendelige. Den andre garanterte maskinen.
3. **Kjeglesnitt — begge språk.** Analytisk (locus, tangent, korde) og projektivt (klassifikasjon ellipse/hyperbel, degenerasjon, tangentbetingelse). Til sammen ~90 % dekning.

### Nivå 2 — må kunne (~50–65 %, epokeavhengig)
4. **Symmetrigrupper av plane figurer** (`D_n`/`C_n`; tegn figur og beskriv alle symmetrier).
5. **Klassisk plangeometri: Ceva/Menelaos + sirkel/tangentkonfigurasjoner** (konkurrens, kollinearitet, `S₁T/S₂T = r₁/r₂`).
6. **Polyedre og romlige rotasjonsgrupper** (regulære legemer, rotasjonsgruppe ≅ plan symmetri, Eulers formel).

### Nivå 3 — bør dekkes (lavere frekvens / topp-poeng)
7. **Harmonisk konjugasjon, kryssforhold, pol–polar** (projektiv dualitet; skille-stoff).
8. **Geometriske steder (locus)** med parametereliminering og grensetilfeller.
9. **Konstruksjon med linjal** (harmonisk konjugat via komplett firkant).
10. **Figurtegning som eksplisitt ferdighet** (tverrgående — bør trenes i hvert kapittel).

### Konkret prognose for neste ordinære eksamen
Basert på den stabile rammen (4 t, normalt ingen hjelpemidler, 4 oppgaver med a–e):
- **Oppgave 1 (isometrier):** sett sammen to–tre speilinger, klassifiser (rotasjon/translasjon/glidespeiling) med fikspunkt/vinkel/linje/vektor, og tegn + beskriv symmetrigruppen til en figur. **Nesten sikker.**
- **Oppgave 2 (projektiv koordinatgeometri):** skjæringspunkt av linjer + linje gjennom to punkter, ofte utvidet til et kjeglesnitt (klassifikasjon/degenerasjon/tangent). **Nesten sikker.**
- **Oppgave 3 (roterende slot A):** enten **klassisk plangeometri** (Ceva/Menelaos/konkurrens, sirkler & tangenter) *eller* **analytisk kjeglesnitt med locus**.
- **Oppgave 4 (roterende slot B):** enten **polyeder/romlig rotasjonsgruppe** (regulært legeme, Euler) *eller* **projektiv dualitet** (kryssforhold, harmonisk konjugasjon, pol–polar, med linjal-konstruksjon).

**Usikkerhetsmomenter:** (a) antall oppgaver varierer 3–5; (b) hjelpemiddelregimet kan endres (H2020 var «alle hjelpemidler» pga. korona); (c) med bare 6 sett og ingen fasit er epoke-skiftet en observasjon på tynt grunnlag — nyere sett kan ha konsolidert eller skiftet igjen. Boken bør uansett trene den **hjelpemiddelfrie, eksakte** produksjonsmåten og dekke *begge* epokene.

### Anbefalt arketype
**DNA-regnefag** (kvantitativt fag), med en **blandingsprofil «regne + bevise + tegne/konstruere»** — ikke den rene bevismalen som MAT2200. Konkret bør boken bygges som **teori → gjennomgått eksempel → oppgave**, med tunge, fullt gjennomregnede eksempler på de gjentakende **regnemaskinene**: (i) speilingssammensetning og isometri-klassifikasjon, (ii) projektiv kryssprodukt-regning, (iii) kjeglesnitt analytisk↔projektivt inkl. locus og degenerasjon, (iv) Ceva/Menelaos-konkurrens, (v) polyeder/rotasjonsgruppe + Euler, (vi) kryssforhold/harmonisk/pol–polar. Hvert kapittel må trene **figurtegning** eksplisitt, og et eget «konstruksjonsverksted» (passer/linjal) bør dekke den lavfrekvente, men mulige konstruksjonsoppgaven. Fordi hvert sett er tematisk bredt, bør boken favorisere **mange små, drillbare oppgaver per maskin** framfor få store.

### Plassering i emnelandskapet
MAT2500 er UiOs **bachelor-geometriemne** som binder sammen euklidsk, klassisk, analytisk og projektiv geometri, med lineær algebra (MAT1120) og kalkulus (MAT1100/1110) som forkunnskaper. Til forskjell fra det bevistunge MAT2200 (der ~85–90 % av poengene er begrunnelse) er MAT2500 mer **verktøy- og regneorientert med bevisinnslag** — nærmere kalkulus-/lineæralgebra-emnenes profil, men med geometrisk figur- og konstruksjonsarbeid i tillegg. Prosjektoppgaven (obligatorisk) legger en skriftlig fremstillingskomponent oppå eksamen.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/UiO/MAT2500/`.

**Oppgavesett lest grundig (primær- og eneste kilde — ingen løsningsforslag i arkivet):**
- `MAT2500_2015.pdf` — H2015, 4 oppgaver, poengsatt (isometri; klassisk plangeometri m/sirkler+konkurrens; parabel+locus; projektiv+kjeglesnitt).
- `MAT2500_2016.pdf` — H2016, 4 oppgaver (klassisk plangeometri; speilingsgruppe; sirkel+parabel+locus; projektiv linje+tangent).
- `MAT2500_2017.pdf` — H2017, 4 oppgaver (isometri m/symmetrigrupper; innskrevet sirkel+konkurrens; projektiv+parameterområde; sirkel-locus+tangenter).
- `MAT2500_2018.pdf` — H2018, 3 oppgaver (isometri+glidespeiling; polyeder i `E³`+rotasjonsgruppe; projektivt kjeglesnitt `Q_a`+degenerasjon).
- `MAT2500_2019.pdf` — H2019, 5 oppgaver (isometri; projektiv koord.; Ceva+Menelaos+harmonisk; pol/polar; Euler-polyeder).
- `MAT2500_2020.pdf` — H2020, korona «alle hjelpemidler», 4 oppgaver (isometri; dobbeltpyramide+rotasjonsgruppe; projektivt kjeglesnitt `C_t`; kryssforhold+konstruksjon).

**Merknader om kildene:**
- **Evidensstyrke:** Kun **6 oppgavesett** og **ingen løsningsforslag/sensorveiledninger**. Frekvenser er beregnet på 6 datapunkter (grove); metode- og sensurkrav (§4–§5) er **utledet av oppgaveformuleringene og fagets natur**, ikke lest ut av fasit. Alt bør reverifiseres mot nyere sett og en sensorveiledning når slikt skaffes.
- **Tekstlag:** Alle 6 PDF-ene hadde brukbart tekstlag via `pdftotext -layout`; enkelte spesialtegn (`√`, `∘`, `≠`) og figurer gjengis ufullstendig i råteksten, men oppgaveinnholdet er entydig lest.
- **Språk:** Eksamen er på norsk bokmål. Denne analysen er på norsk bokmål.
- **Pensum/lærebok:** UiOs emneside oppgir ikke en enkelt standard lærebok i det hentede utdraget; emnet er tradisjonelt basert på forelesningsnotater/kompendium. **Ikke verifisert hvilken konkret bok/notat som brukes** — bør avklares før bokskriving. Kjernetemaene (euklidsk/klassisk/kjeglesnitt/projektiv/romlig geometri, Ceva/Menelaos, Platonske legemer) er lest ut av emnebeskrivelsen og bekreftet av oppgavesettene.
- **Opphavsrett:** Alle beskrivelser av oppgaver og metoder er parafrasert med egne ord. Ingen oppgavetekster er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.
- **Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse, verifisert **aktiv 2026** (scratchpad: `fagbeskrivelse-mat2500.md`; UiO-emneside bekreftet undervist t.o.m. minst H2026, høstsemester, ingen hjelpemidler, obligatorisk prosjektoppgave, A–F).
- **Forbilde/mal:** `docs/hoyskole-boker/mat2200/EKSAMENSANALYSE.md` (8-delers mal, UiO bevisorientert) og `docs/hoyskole-boker/mat1120/`. Arketype: `DNA-regnefag.md`.

# Bokskjelett: SØK1001 Matematikk for økonomer — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (≈24 lesbare oppgavesett H2008–H2025, sensorveiledninger
> H2025 (fullstendig), V2025, H2024, V2018 via OCR). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre (egne tall, egne
> funksjoner), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1001` |
| Tittel | **SØK1001 Matematikk for økonomer** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi / NTNU Handelshøyskolen) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (rent kalkulus-/algebrafag for økonomer med fem faste oppgavesøyler) |
| Antall kapitler | **25** (1 eksamenskart + 4 algebra/derivasjon + 4 funksjonsdrøfting + 5 rekker/finans + 3 flervariabel + 4 betinget/implisitt/integrasjon + 4 eksamenstrening) |
| Estimert totaltid | **1 930 min ≈ 32 timer** |
| Quiz totalt | **554** (krav ≥500) |
| Flashcards totalt | **514** (krav ≥500) |

**Pitch (ett avsnitt):** SØK1001 er **verktøyfaget** som leverer regneteknikken
til den påfølgende mikro- og makroøkonomien: det er ikke økonomisk teori, men
kalkulus, algebra, følger/rekker, finansmatematikk og optimering, pakket inn i
økonomiske situasjoner (kostnadsfunksjoner, sparing, lån, nyttemaksimering).
Eksamen har fem faste søyler i hele perioden 2008–2025: (i) **derivasjonspakken**
(4–6 funksjoner som skal deriveres — nesten hvert sett, det billigste og sikreste
poenggulvet), (ii) **endimensjonal funksjonsdrøfting** (stasjonærpunkt →
topp/bunn → vendepunkt → konveks/konkav → globale ekstrempunkt → skisse), (iii)
**følger/rekker + finansmatematikk** (geometrisk rekke, sparing/oppsparings-
annuitet, annuitetslån, serielån, nåverdi — fagets signatur og det som skiller
det fra UiOs ECON1100), (iv) **flervariabel-kalkulus** (partielle deriverte + fri
optimering med `AC−B²`-klassifisering), og (v) **betinget og implisitt** (Lagrange
+ implisitt derivasjon + elementær integrasjon). Denne boka er bygget som nettopp
disse fem søylene, med **Cobb-Douglas** som gjennomgående funksjonsform i
optimeringsdelene og eksplisitte broer framover til SOK1002 der teknikken senere
anvendes på økonomisk teori. Faget er et **hjelpemiddelfag** (matematisk
formelsamling + kalkulator tillatt), så boka trener *bruk* av formelsamlingen og
*metode*, ikke pugging — det er fremgangsmåten sensor belønner.

**Kritisk avgrensningsregel (gjelder HELE boka):** SØK1001 er et **rent
matematikkemne** — det skal IKKE gå inn i økonomisk teori. Nyttefunksjoner,
kostnadsfunksjoner og sparing brukes bare som *innpakning* for regneteknikken.
Boka skal derfor **ikke bygge ut**: konsumentteori (indifferenskurver, MSB,
substitusjons-/inntektseffekt), produsentteori (isokvanter, TSB, tilbudskurver),
markedsteori (monopol, Cournot, markedslikevekt, eksternaliteter) eller den
verbale økonomiske drøftingen — det er SOK1002s og SØK1011s domene (se §7). Der
matematikken **peker framover** mot en økonomisk anvendelse (Lagrange →
nyttemaks, Cobb-Douglas → produktfunksjon, elastisitet → priselastisitet), nevnes
koblingen kort som en «bro til SOK1002»-merknad, uten å utlede den økonomiske
teorien. Motsatt skal boka **heller ikke** låne ECON1100s karakteristiske
«sant/usant, begrunn»-sjanger — den finnes ikke i SØK1001-arkivet (§0 i analysen).

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Derivasjon:** $f'(x)$, $f''(x)$; partielle $f'_x, f'_y, f''_{xx}, f''_{xy},
  f''_{yy}$ (og $\partial/\partial x$-notasjon likestilt, innført én gang).
- **Klassifisering i to variable:** $A = f''_{xx}$, $B = f''_{xy}$, $C = f''_{yy}$,
  kriterium **$AC - B^2$** (NTNU-konvensjon — svarer til Hesse-determinanten $D$
  i ECON1100, men skriv $AC-B^2$): $AC-B^2 > 0, A>0$ → min; $A<0$ → maks;
  $AC-B^2 < 0$ → **sadelpunkt**.
- **Elastisitet:** $\text{El}_x\, f = \dfrac{x}{f}\cdot f'(x)$.
- **Lagrange:** $F(x,y) = f(x,y) - \lambda\big(g(x,y) - c\big)$, multiplikator
  $\lambda$; $x^*, y^*$ for optimale verdier; **FOB** = førsteordensbetingelser.
- **Finans:** $K_0$ startbeløp, $K_t = K_0(1+r)^t$ sluttverdi, $r$ rente pr.
  termin, $n$ antall terminer, $D$ fast innbetaling/terminbeløp; **annuitetslån**
  (fast terminbeløp) vs. **serielån** (fast avdrag, fallende terminbeløp);
  nåverdi av betalingsstrøm.
- **Geometrisk rekke:** kvotient $k$, konvergensvilkår $|k|<1$, sum
  $S = a/(1-k)$.
- **Cobb-Douglas** er signaturfunksjonen i optimeringsdelene: $f(x,y) =
  A\,x^a y^b$ (og produkter/kvotienter/kjerner bygget på potenser, $e^x$, $\ln x$).

**Kritisk metoderegel (gjelder HELE boka):** Faget er et **mellomregnings-
format** (H2025-malen + 2008–2020), IKKE flervalgs-mellomperioden (Inspera
2022–2024). Boka kalibreres mot mellomregnings-formatet. Fem faste sensorkrav
gjelder overalt (fra analysen §4): **(a) mellomregning skal vises** — endelig
svar alene er ikke tilstrekkelig; hvert skritt føres (oppsett → derivert/FOB →
eliminering → innsetting → svar); **(b) riktig metode og oppsett bærer
poengene** — for Lagrange forventes hele oppskriften, for drøfting hele kjeden;
**(c) fortegnsskjema kreves** i drøftingen (aldri bare påstå «voksende»);
klassifisering skal begrunnes med riktig kriterium (2.derivert i én variabel;
$AC-B^2$ i to); **(d) tolkning der oppgaven ber om det** — grensekostnad,
elastisitet og komparativ statikk oversettes til ord; **(e) konvergensvilkår og
definisjonsområde skal med** (geometrisk rekke: oppgi $|k|<1$; rasjonale
funksjoner: uteluk nullpunkt i nevner). Svar **poengtert** — vekting er oppgitt
pr. oppgave, og delspørsmålene teller likt, så jevn innsats lønner seg.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): grunnverktøyet (algebra +
derivasjon) i bunn, deretter de fire temasøylene ordnet etter avhengighet, til
slutt eksamenstreningen. Frekvensen styrer *omfanget* — de fire ~85–100 %-
gjengangersøylene (derivasjon, drøfting, finans, Lagrange) får hver sin fulle del
med drillkapittel; lavfrekvente temaer (integrasjon, elastisitet, grenseverdi)
får kompakt plass, sortert etter viktighet innad i delen.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn de fem søylene, mellomregnings-formatet og avgrenser mot ECON1100 (sant/usant) og SOK1002 (økonomisk teori). |
| 1 | Algebra og derivasjon | 4 | Derivasjonspakken har ~100 % frekvens (billigste poenggulv); algebra/likninger ~65 %, forenkling ~45 %, rett linje/def.mengde/asymptoter ~15–35 %. Nivå 1 «perfekt» → 3 teorikapitler + drillkapittel. |
| 2 | Funksjonsdrøfting i én variabel | 4 | Funksjonsdrøfting ~90 % (fagets signatur i én variabel), globale ekstrempunkt ~55 %, tangent ~35 %, elastisitet ~20 %, grenseverdi/L'Hôpital ~15 %. Nivå 1 «perfekt» → 3 teorikapitler + drillkapittel. |
| 3 | Følger, rekker og finansmatematikk | 5 | Finansmatematikk samlet ~90 % (fagets signatur, tydeligste skille mot ECON1100); geometrisk rekke ~35 %. Egen, grundig del — nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 4 | Funksjoner av flere variable | 3 | Partielle deriverte ~55 % + fri 2-variabel optimering med $AC-B^2$ ~55 %; def.mengde i to variable ~20 %. Nivå 2 «kunne» → 2 teorikapitler + drillkapittel. |
| 5 | Betinget og implisitt: Lagrange, implisitt derivasjon og integrasjon | 4 | Lagrange ~85 % (tyngste storoppgave), implisitt derivasjon ~55 %, integrasjon ~25 %. Nivå 1 «perfekt» (Lagrange) + nivå 2–3 → 3 teorikapitler + drillkapittel. |
| 6 | Eksamenstrening | 4 | Sjangerdrill (sjangrene A–J samlet) + 3 komplette øvingseksamener som speiler H2025-malen (5–6 mellomregnings-oppgaver, vekting pr. oppgave). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de fem
   drillkapitlene (1.4, 2.4, 3.5, 4.3, 5.4) inne i sine egne søyler, fordi hver
   søyle ER en fast eksamensoppgave og må drilles umiddelbart etter teorien.
   Del 6 beholder én samlet sjangerdrill + de tre øvingseksamenene.
2. DNA-en har «Del 1..N temadeler» generisk. Her er strukturen bevisst bygget som
   de **fem faste eksamenssøylene** (analysens §7) — dette speiler eksamens-
   strukturen direkte og er bokas viktigste designgrep.
3. Del 1 (algebra + derivasjon) er dels forkunnskap, dels selveste
   derivasjonspakken (~100 %-oppgave 1/2). Den får derfor full del + drillkapittel,
   ikke bare et vedlegg — derivasjonsferdigheten er den enkeltferdigheten flest
   poeng henger på.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–J) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** derivasjonspakke, **B** algebra/forenkle/faktoriser/løs likninger, **C**
endimensjonal funksjonsdrøfting, **D** finansmatematikk (sparing/lån/nåverdi),
**E** geometrisk rekke og konvergens, **F** partielle deriverte + fri 2-variabel
optimering, **G** Lagranges metode, **H** implisitt derivasjon, **I**
integrasjon, **J** elastisitet og grenseverdi. Prioritetsklasser: **perfekt**
(nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK1001

- **id:** `sok1001-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fem faste søylene, temafrekvensene, sjangerkatalogen A–J og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle ≈24 lesbare sett + sensorveiledningene. Skal gjengi: (i) **formen**: skriftlig skoleeksamen **4 timer**, karakter A–F, 7,5 studiepoeng, digital (Inspera) fra ca. 2020; hjelpemidler = **matematisk formelsamling (Sydsæter, Strøm & Berck) + godkjent enkel kalkulator** (kode C / kode B–D fra 2025 — nomenklaturskifte, ikke reell endring); fra 2025 felles eksamen med MET1001; oppgavetekst på bokmål/nynorsk (eldre også engelsk). (ii) **de to formatregimene**: klassisk 5-oppgavers format (2008–2020, tilbake fra 2025, mellomregning + vekting pr. oppgave) og Inspera-flervalg (2022–2024, samme faglige innhold spredt tynnere) — **boka kalibreres mot mellomregnings-formatet** (H2025-malen). (iii) **temafrekvens-tabellene** (fem spor, fra analysen §2A–§2E): derivasjonspakke ~100 %, funksjonsdrøfting ~90 %, finansmatematikk samlet ~90 %, Lagrange ~85 %, løse likninger ~65 %, globale ekstrempunkt ~55 %, partielle deriverte ~55 %, fri 2-var optimering ~55 %, implisitt derivasjon ~55 %, oppsparingsannuitet ~55 %, annuitetslån ~50 %, forenkle/faktorisere ~45 %, nåverdi ~45 %, sluttverdi/renteregning ~40 %, serielån ~35 %, geometrisk rekke ~35 %, def./verdimengde ~35 %, tangentlikning ~35 %, rett linje ~30 %, integrasjon ~25 %, elastisitet ~20 %, eksponentiell vekst/depresiering ~20 %, def.mengde i to variable ~20 %, grenseverdi/L'Hôpital ~15 %, asymptoter ~15 %. (iv) at oppgavene alltid pakkes i **økonomisk innpakning** (kostnadsfunksjoner, sparing, lån, nyttemaksimering) men at det underliggende er ren matematikk, oftest bygget på **Cobb-Douglas** i optimeringsdelene. (v) **sensorens metaregler** (analysen §4): mellomregning skal vises; riktig metode/oppsett bærer poengene; fortegnsskjema kreves i drøfting; tolkning der oppgaven ber om det; konvergensvilkår og definisjonsområde med; klassifisering navngis presist. (vi) **karakterskillene** (analysen §4): bunn = korrekt derivasjon av standardfunksjonene, riktig Lagrange-/drøftingsoppsett, riktig bruk av finansformlene på enkle tilfeller; midt = komplett Lagrange (eliminert $\lambda$, funnet $x^*,y^*$), korrekt $AC-B^2$-klassifisering, riktig annuitet vs. serielån og forskudds-/etterskuddsvis, geometrisk rekke med konvergensvilkår; topp = globale vs. lokale ekstrempunkt korrekt begrunnet, asymptoter/enhetskostnad, elastisitet med parameterbestemmelse, grenseverdi med L'Hôpital, komparativ statikk i Lagrange, gjennomført økonomisk tolkning.
- **Innholdskontrakt:** Oppgavetype-katalogen A–J presenteres som studentens sjekkliste med typisk plassering: derivasjonspakken (A) er oppgave 1/2; algebra (B) er åpningsoppgave; drøfting (C), finans (D) og Lagrange (G) er de tre tyngste storoppgavene; flervariabel (F) eller implisitt (H) roterer inn; en «blandet» oppgave dekker likning/grenseverdi/elastisitet/integral/geometrisk rekke (B/J/I/E). **Prognose for neste eksamen** (kalibrert mot H2025-malen): 5–6 mellomregnings-oppgaver, vekting pr. oppgave — én derivasjonspakke, én funksjonsdrøfting, én finansoppgave, én Lagrange-oppgave, én flervariabel- *eller* implisitt-oppgave, og én «blandet» oppgave. Avslutt med **avgrensningen**: hva som IKKE er pensum (SOK1002s økonomiske teori — Lagrange brukes her som *ren teknikk*, ikke nyttemaks; og ECON1100s sant/usant-sjanger), og **leseplanen**: Del 1 er verktøy man må ha flytende; Del 2, 3 og 5 er «må perfekt» storoppgaver; Del 4 er «kunne»; Del 6 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 5 oppgaver og 240 minutter — sett opp tidsbudsjett for de fem søylene» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: gi endelig svar uten mellomregning (sensor krever fremgangsmåten); tro at Lagrange her handler om økonomisk teori (det er ren teknikk); bruke tid på ECON1100-sant/usant-tenkning som ikke finnes i faget; ikke lese vektingen (den styrer tidsbruken).
- **Quiz: 14 · Flashcards: 12** (eksamensform, de fem søylene, frekvenser, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Algebra og derivasjon *(prioritet: PERFEKT — derivasjonspakken, oppgave 1/2)*

> **Formelsamling-skille:** Sydsæter/Strøm/Berck inneholder derivasjonsreglene og
> standardderiverte — det som står der, trenger studenten ikke pugge, men **må
> kunne bruke raskt og feilfritt**. Hvert kapittel i Del 1 skal merke: «dette
> står i formelsamlingen (slå opp)» vs. «dette må du kunne sette opp selv».
> Selve *anvendelsen* (deriver en konkret sammensatt funksjon, løs en konkret
> likning) er aldri i formelsamlingen og er det eksamen faktisk tester.

#### Kapittel 1.1: Algebra, potens- og logaritmeregler, forenkling og faktorisering

- **id:** `sok1001-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Potens- og logaritmeregler, forenkling av rasjonale og logaritmiske uttrykk, og faktorisering — grunnalgebraen resten av faget hviler på og som er åpningsoppgave i mange sett.
- **Eksamensbelegg:** Forenkle/faktorisere ~45 % (åpningsoppgave H2022, H2023, H2024); potens- og logaritmeregler forutsettes i *hver* derivasjons-, finans- og optimeringsoppgave. Prioritet: **perfekt** (fundament, billige poeng tidlig i settet).
- **Innholdskontrakt:** **Potensregler** $x^a x^b = x^{a+b}$, $x^a/x^b = x^{a-b}$, $(x^a)^b = x^{ab}$, $x^{-a} = 1/x^a$, $x^{1/n} = \sqrt[n]{x}$ (formelsamling — slå opp, men må sitte). **Logaritmeregler** $\ln(ab) = \ln a + \ln b$, $\ln(a/b) = \ln a - \ln b$, $\ln(a^b) = b\ln a$, $\ln e^x = x$, $e^{\ln x} = x$ — vis f.eks. $\ln(e^4/e^2) = 2$. **Forenkling** av rasjonale uttrykk ($(x^2+2x+1)/(x+1) = x+1$) og logaritmiske uttrykk. **Faktorisering**: felles faktor, andregradsuttrykk ($ax^2+bx+c = a(x-x_1)(x-x_2)$), konjugatsetningen. Merk skillet formelsamling (reglene) vs. selvstendig (å gjennomføre forenklingen på et konkret uttrykk).
- **Oppgavesjangre:** B. Mønstereksempel: «Forenkle $\dfrac{x^5}{x^3}\cdot\ln\!\big(\dfrac{e^4}{e^2}\big)$ og faktoriser $x^2 + 2x + 1$.»
- **Typiske feil:** Blande potens- og logaritmeregler; feil fortegn ved forkorting; «forkorte» ledd som ikke er faktorer i hele telleren/nevneren; glemme at $\ln$ bare er definert for positive argumenter.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Løse likninger: eksponential-, logaritme-, rasjonale og andregradslikninger

- **id:** `sok1001-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-1-1`
- **Kapitteltype:** teori
- **description:** Å løse de likningstypene eksamen faktisk trekker: eksponential- ($2^x=8$, $3e^{4x^4-4}=3$), logaritme- ($\ln(x+2)=7$), rasjonale og andregradslikninger (ABC-formelen).
- **Eksamensbelegg:** Løse likninger ~65 % ($2^x$, $e^{rt}=2$, $\ln(x+2)=7$, rasjonale, ABC); ofte del av den «blandede» oppgaven og av finans (løse for antall terminer). Prioritet: **perfekt** (høyfrekvent, sikre poeng).
- **Innholdskontrakt:** **Eksponentiallikninger**: ta logaritmen på begge sider, $a^x = b \Rightarrow x = \ln b/\ln a$; spesialtilfelle $e^{f(x)} = 1 \Rightarrow f(x)=0$. **Logaritmelikninger**: $\ln u = k \Rightarrow u = e^k$; sjekk definisjonsområde. **Rasjonale likninger**: gang opp fellesnevner, sjekk at nevner $\ne 0$. **Andregradslikninger**: ABC-formelen $x = \dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$ (formelsamling), diskriminant-tolkning. Koble til finans: $K_0(1+r)^t = K \Rightarrow t = \ln(K/K_0)/\ln(1+r)$ (foregriper Del 3).
- **Oppgavesjangre:** B (+ byggekloss for D). Mønstereksempel: «Løs $3e^{4x^4-4}=3$ med hensyn på $x$.» → $e^{4x^4-4}=1 \Rightarrow 4x^4-4=0 \Rightarrow x=\pm 1$.
- **Typiske feil:** Glemme å ta logaritmen (eller ta feil base); miste røtter (f.eks. bare $x=1$ når $x=\pm 1$); glemme å sjekke definisjonsområde i logaritme-/rasjonale likninger; regnefeil i ABC-formelen.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Derivasjon — hele regelrepertoaret

- **id:** `sok1001-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok1001-1-1`
- **Kapitteltype:** teori
- **description:** Hele derivasjonsapparatet eksamen tester: potens-/sum-/differansregel, produktregel, kvotientregel, kjerneregelen, samt derivasjon av $e^{kx}$, $\ln x$, $a^x$, røtter og negative eksponenter.
- **Eksamensbelegg:** Derivasjonspakken har ~100 % frekvens (egen oppgave nesten hvert sett, 4–6 funksjoner) — det billigste og sikreste poenggulvet i faget. Prioritet: **perfekt** (den enkeltferdigheten flest poeng henger på).
- **Innholdskontrakt:** **Grunnregler** (formelsamling): $\frac{d}{dx}x^n = nx^{n-1}$, sum-/differansregel, konstantfaktor. **Produktregel** $(uv)' = u'v + uv'$; **kvotientregel** $(u/v)' = (u'v - uv')/v^2$; **kjerneregelen** $\frac{d}{dx}g(u(x)) = g'(u)\cdot u'(x)$. **Standardderiverte**: $(e^{kx})' = ke^{kx}$, $(\ln x)' = 1/x$, $(\ln u)' = u'/u$, $(a^x)' = a^x\ln a$, $(\sqrt{x})' = 1/(2\sqrt{x})$. Repertoaret vises på det som faktisk testes: $x^3\ln x$ (produkt), $(x^2+7)/\ln x$ (kvotient), $e^{(2x+7)^3}$ og $(x-\ln x + 1)^6$ og $\ln(x\sqrt{x+1})$ (kjerne). Understrek kjerneregelen som den vanligste feilkilden. Merk formelsamling (reglene) vs. selvstendig (å velge riktig regel og gjennomføre på en sammensatt funksjon).
- **Oppgavesjangre:** A. Mønstereksempel: «Deriver: (a) $f(x)=\tfrac12 x^2 - 8x + \tfrac73$, (b) $f(x)=e^x\ln x$, (c) $f(x)=e^{2x^2}$, (d) $f(x)=\dfrac{x^2+7}{\ln x}$, (e) $f(x)=\ln(7x^2)$, (f) $f(x)=\ln(x\sqrt{x+1})$.»
- **Typiske feil:** Glemme kjerneregelen på sammensatte funksjoner ($e^{(2x+7)^3}$, $\ln(x\sqrt{x+1})$); feil i produkt-/kvotientregelen (bytte om ledd, feil fortegn i teller); derivere $a^x$ som om det var $x^a$; slurve med $\ln$-derivasjon (glemme indre derivert $u'/u$).
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 1.4: Drill: derivasjonspakken

- **id:** `sok1001-1-4` · **number:** 1.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok1001-1-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på derivasjonspakken: 4–6 funksjoner per sett som skal deriveres raskt og feilfritt, samt de vanligste algebra-/likningsoppgavene som åpner et sett.
- **Eksamensbelegg:** Dekker sjangrene A og B samlet — derivasjonspakken (~100 %) og åpningsalgebraen (~45–65 %). Prioritet: **perfekt** (mekaniser reglene → sikrer 15–30 % av settet).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme)** for A: 1) identifiser strukturen (potens/produkt/kvotient/kjerne/sammensetning); 2) velg regel; 3) beregn indre og ytre derivert der kjerneregelen brukes; 4) forenkle svaret. For B: 1) hva slags likning (eksponential/logaritme/rasjonal/andregrad); 2) isoler/logaritmer/gang opp; 3) løs; 4) sjekk definisjonsområde og alle røtter. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig kjerneregelen og at alle røtter tas med). **12–18 oppgaver** på eksamensnivå som roterer funksjonstype (potens, produkt, kvotient, kjerne, $e^x$, $\ln$, $a^x$, rot, sammensatt) og likningstype, alle med `solution` + `hints`, kalibrert til pene svar.
- **Oppgavesjangre:** A, B. Mønstereksempel (full pakke): «(a) Deriver $f(x)=(x - \ln x + 1)^6$. (b) Deriver $g(x)=\dfrac{x^3}{e^{2x}}$. (c) Løs $\ln(x+2)=7$. (d) Løs $2^x = 8$.»
- **Typiske feil:** Hele derivasjons-/algebrarepertoaret fra §5: glemt kjerneregel, feil produkt-/kvotientregel, tapte røtter, glemt definisjonsområde — samt å gi svaret uten mellomregning (sensor krever føring).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A derivasjonspakke — 5–6 funksjoner potens/produkt/kvotient/kjerne/$e^x$/$\ln$, sjanger A; 1.B likninger — eksponential/logaritme/rasjonal/andregrad, sjanger B; 1.C forenkling/faktorisering + potens-/logaritmeregler, sjanger B; 1.D blandet algebra + derivasjon på eksamensnivå, sjanger A+B).

---

### Del 2 — Funksjonsdrøfting i én variabel *(prioritet: PERFEKT — signaturoppgave i én variabel)*

#### Kapittel 2.1: Funksjonsdrøfting: stasjonærpunkt, topp/bunn og vendepunkt

- **id:** `sok1001-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1001-1-3`
- **Kapitteltype:** teori
- **description:** Den faste drøftingskjeden: $f'(x)=0$ → stasjonærpunkt → fortegnsskjema/andrederiverttest → topp/bunn → $f''(x)=0$ med fortegnsskifte → vendepunkt → konveks/konkav-intervaller.
- **Eksamensbelegg:** Funksjonsdrøfting har ~90 % frekvens — fagets signaturoppgave i én variabel, ofte polynom av 3.–4. grad. Fortegnsskjema kreves eksplisitt av sensor. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Stasjonærpunkt**: $f'(x)=0$. **Klassifisering**: (i) **fortegnsskjema** for $f'$ (fortegnsskifte $+\to-$ = topp, $-\to+$ = bunn), eller (ii) **andrederiverttest** ($f''<0$ topp, $f''>0$ bunn). **Vendepunkt**: $f''(x)=0$ **og** fortegnsskifte i $f''$ (understrek: $f''=0$ alene er ikke nok). **Konveks/konkav**: $f''>0$ konveks (venderett opp), $f''<0$ konkav. Vis hele kjeden på et 3.- eller 4.-gradspolynom med fortegnsskjema. Merk at fortegnsskjemaet er sensorkravet — påstander uten fortegnsanalyse gir ikke full uttelling.
- **Oppgavesjangre:** C. Mønstereksempel: «Gitt $f(x)=\tfrac12 x^4 - x^2$. Finn stasjonærpunktene, avgjør topp/bunn med fortegnsskjema, og finn vendepunktene og konveks/konkav-intervallene.»
- **Typiske feil:** Ikke sette opp fortegnsskjema (bare påstå topp/bunn); forveksle vendepunkt med «$f''=0$» (krever fortegnsskifte); blande topp- og bunnpunkt; regnefeil i $f'$ eller $f''$.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.2: Globale ekstrempunkt, tangentlikning og skisse

- **id:** `sok1001-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-2-1`
- **Kapitteltype:** teori
- **description:** Fra lokale til globale ekstrempunkt (sammenlikne funksjonsverdier), tangentlikningen med akseskjæringer, og en skisse konsistent med drøftingsfunnene.
- **Eksamensbelegg:** Globale vs. lokale ekstrempunkt ~55 % (to globale min forekommer, H2025 2a), tangentlikning ~35 % (H2025 2c, V2023), skisse ofte etterspurt. Prioritet: **perfekt** (toppsjikt-differensiator: globale ekstrempunkt korrekt begrunnet).
- **Innholdskontrakt:** **Globale ekstrempunkt**: sammenlikn funksjonsverdiene i alle kandidatpunkter (stasjonærpunkt + evt. endepunkter/grenseoppførsel); det kan være **flere globale minimum** (f.eks. $x=\pm 1$ med samme $f$-verdi). **Tangentlikning** i $x_0$: $y = f'(x_0)(x-x_0) + f(x_0)$; finn skjæring med aksene. **Skisse**: konsistent med stasjonærpunkt, vendepunkt, konveksitet og evt. asymptoter/grenseoppførsel — navngi ekstrempunkter og vendepunkter på skissen. Understrek at sensor belønner at man *sammenlikner funksjonsverdier* for å avgjøre globalt, ikke bare stopper ved lokalt.
- **Oppgavesjangre:** C. Mønstereksempel: «For $f(x)=\tfrac12 x^4 - x^2$: (a) avgjør de globale ekstrempunktene ved å sammenlikne funksjonsverdiene, (b) finn tangentens akseskjæringer i $x=2$, (c) skisser grafen.»
- **Typiske feil:** Stoppe ved lokale ekstrempunkt når oppgaven ber om globale (glemme å sammenlikne funksjonsverdier); glemme at det kan være flere globale minimum; feil i tangentformelen; skisse som ikke er konsistent med drøftingen.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.3: Elastisitet, grenseverdier og asymptoter

- **id:** `sok1001-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-2-1`
- **Kapitteltype:** teori
- **description:** Momentan elastisitet $\text{El}_x f = (x/f)f'(x)$ med parameterbestemmelse, grenseverdier via L'Hôpital, og asymptoter til enhetskostnad — nivå 2–3-temaene som differensierer karakteren.
- **Eksamensbelegg:** Elastisitet ~20 % (H2025 6c: finn $a$ så $\text{El}_x f = 1$), grenseverdi/L'Hôpital ~15 % (H2025 6b), asymptoter ~15 % (enhetskostnad, skråasymptote). Prioritet: **kunne/kjenne** (nivå 2–3, karakterdifferensiering — plasseres etter det viktigere drøftingsstoffet, jf. leserkrav).
- **Innholdskontrakt:** **Elastisitet** $\text{El}_x f = \dfrac{x}{f}\cdot f'(x)$ — «prosentvis endring i $f$ per prosents endring i $x$»; beregne, tolke, og **bestemme en parameter** slik at elastisiteten får en gitt verdi. **Grenseverdier**: standardgrenser og **L'Hôpitals regel** ($0/0$- og $\infty/\infty$-form: $\lim f/g = \lim f'/g'$). **Asymptoter**: vertikal (nevner $\to 0$), horisontal og **skråasymptote** (f.eks. enhetskostnad $A(x)=\tfrac14 x + 30 + 5000/x$ → skråasymptote $y=\tfrac14 x + 30$, vertikal $x=0$). Obligatorisk **verbal tolkning** av elastisitetstall.
- **Oppgavesjangre:** J. Mønstereksempel: «$f(x)=ax^4 - x^2 + x$. Bestem $a$ slik at den momentane elastisiteten er 1 når $x=\tfrac12$.» → $a=4$.
- **Typiske feil:** Glemme å gange med $x/f$ i elastisiteten; regne elastisitet i feil punkt; oppgi tallet uten verbal tolkning; bruke L'Hôpital på uttrykk som ikke er $0/0$ eller $\infty/\infty$; bytte om vertikal og skråasymptote.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.4: Drill: funksjonsdrøftingsoppgaven

- **id:** `sok1001-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok1001-2-3`, `sok1001-2-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele drøftingsoppgaven: fra en gitt funksjon til fullført A-besvarelse med stasjonærpunkt, vendepunkt, konveksitet, globale ekstrempunkt, tangent og skisse.
- **Eksamensbelegg:** Dekker sjanger C (+ J) samlet — funksjonsdrøftingen som utgjør en av de tyngste storoppgavene (~90 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) $f'(x)$ → stasjonærpunkt; 2) fortegnsskjema → topp/bunn; 3) $f''(x)$, $f''=0$ + fortegnsskifte → vendepunkt; 4) $f''$-fortegn → konveks/konkav; 5) sammenlikn funksjonsverdier → globale ekstrempunkt; 6) evt. tangent i et punkt + akseskjæringer; 7) skisse konsistent med alt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig fortegnsskjemaet, vendepunkt-fortegnsskiftet og den globale sammenlikningen). **10–15 oppgaver** på eksamensnivå som roterer funksjonsform (3.- og 4.-gradspolynom, rasjonal, funksjon med $\ln$/$e^x$) × leveranse (full drøfting / globale / tangent / elastisitet), alle med `solution` + `hints`.
- **Oppgavesjangre:** C, J. Mønstereksempel (full kjede): «Gitt $f(x)=x^3 - 3x^2 + 2$. (a) Finn stasjonærpunkt med fortegnsskjema. (b) Finn vendepunkt og konveks/konkav-intervaller. (c) Avgjør globale ekstrempunkt på $[-1,3]$. (d) Skisser grafen.»
- **Typiske feil:** Hele drøftingsrepertoaret fra §5: manglende fortegnsskjema, vendepunkt-forveksling, stoppe ved lokale ekstrempunkt, inkonsistent skisse — samt svar uten mellomregning.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A drøftingskjede — stasjonærpunkt/fortegnsskjema/topp-bunn/vendepunkt/konveksitet, sjanger C; 2.B globale ekstrempunkt + tangentlikning + skisse, sjanger C; 2.C elastisitet med parameterbestemmelse + grenseverdi/L'Hôpital + asymptoter, sjanger J; 2.D full drøftingsoppgave på eksamensnivå, sjanger C+J).

---

### Del 3 — Følger, rekker og finansmatematikk *(prioritet: PERFEKT — fagets signatur, tydeligste skille mot ECON1100)*

> **Formelsamling-skille:** Sydsæter/Strøm/Berck inneholder finansformlene
> (sluttverdi, oppsparingsannuitet, annuitetslån, nåverdi, geometrisk sum). Boka
> skal derfor trene **å velge riktig formel** og **å skille forskudds-/
> etterskuddsvis, annuitet vs. serielån** — ikke å pugge formlene. Merk i hvert
> kapittel hva som slås opp vs. hva studenten selv må sette opp og tolke.

#### Kapittel 3.1: Renteregning og sluttverdi

- **id:** `sok1001-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1001-1-2`
- **Kapitteltype:** teori
- **description:** Grunnleggende renteregning: sluttverdi $K_t = K_0(1+r)^t$, å løse for antall terminer, og eksponentiell vekst/depresiering (halveringstid).
- **Eksamensbelegg:** Sluttverdi/renteregning ~40 % (H2025 3b: finn antall år), eksponentiell vekst/depresiering ~20 % (maskinverdi $-2{,}5$ %/år). Grunnlaget for hele finanssøylen. Prioritet: **perfekt** (fundament for D).
- **Innholdskontrakt:** **Sluttverdi** $K_t = K_0(1+r)^t$ ($K_0$ startbeløp, $r$ rente pr. termin, $t$ antall terminer). **Løse for $t$**: $t = \dfrac{\ln(K_t/K_0)}{\ln(1+r)}$ (kobler til logaritmelikninger, kap. 1.2). **Eksponentiell vekst/depresiering** $P(t)=P_0 a^t$: vekst ($a>1$), depresiering ($a<1$, f.eks. $a=0{,}975$ ved $-2{,}5$ %/år), **halveringstid** ($a^t = \tfrac12$). Skill nominell/effektiv rente kort (formelsamling). Merk formelsamling (formlene) vs. selvstendig (velge riktig og løse for ukjent).
- **Oppgavesjangre:** D. Mønstereksempel: «100 000 kr settes i banken til 4 % årlig rente. Hvor mange år må beløpet stå for å vokse til 210 680 kr?» → $1{,}04^t = 2{,}1068 \Rightarrow t \approx 19$ år.
- **Typiske feil:** Feil antall terminer; bruke feil rente pr. termin (år vs. måned); regnefeil ved å løse for $t$ (glemme logaritmen); blande vekst- og depresieringsfaktor.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Geometriske følger og rekker

- **id:** `sok1001-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-3-1`, `sok1001-1-2`
- **Kapitteltype:** teori
- **description:** Geometrisk følge og rekke: kvotient $k$, endelig sum, konvergensvilkår $|k|<1$ og sum av uendelig rekke $S=a/(1-k)$ — og koblingen sparing = geometrisk rekke.
- **Eksamensbelegg:** Geometrisk rekke ~35 % (H2025 3a; sparing vist *som* geometrisk rekke, H2019). Konvergensvilkåret kreves eksplisitt av sensor. Prioritet: **kunne/perfekt** (fundament for oppsparingsannuitet).
- **Innholdskontrakt:** **Geometrisk følge** $a, ak, ak^2, \ldots$; **kvotient** $k = a_{n+1}/a_n$. **Endelig sum** $S_n = a\dfrac{k^n - 1}{k-1}$ ($k\ne 1$; formelsamling). **Konvergensvilkår** $|k|<1$ → **uendelig sum** $S = \dfrac{a}{1-k}$. Understrek at $S=a/(1-k)$ **ikke** kan brukes uten å sjekke $|k|<1$. Vis at oppsparing er en geometrisk rekke (foregriper kap. 3.3). Løs også en oppgave der summen er lik et gitt uttrykk i $x$ (bestem $x$).
- **Oppgavesjangre:** E. Mønstereksempel: «Rekken $x + 2x^2 + 4x^3 + 8x^4 + \cdots$ ($x>0$). (i) Finn kvotienten og konvergensintervallet. (ii) Bestem $x$ slik at summen er $2x$.» → $k=2x$, konvergerer for $0<x<\tfrac12$; sum lik $2x$ gir $x=\tfrac14$.
- **Typiske feil:** Glemme konvergensvilkåret $|k|<1$ (bruke $a/(1-k)$ ukritisk); feil kvotient; blande endelig og uendelig sum; feil førsteledd $a$ i sumformelen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Sparing og oppsparingsannuitet

- **id:** `sok1001-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-3-2`
- **Kapitteltype:** teori
- **description:** Fast periodisk sparing (oppsparingsannuitet): sluttverdien av en serie like innskudd, med skillet forskudds-/etterskuddsvis, utledet som en geometrisk rekke.
- **Eksamensbelegg:** Sparing/oppsparingsannuitet ~55 % (fast innskudd, sluttverdi; H2025 3c, H2019, V2022). Prioritet: **perfekt** (den hyppigste finanssjangeren).
- **Innholdskontrakt:** **Oppsparingsannuitet**: $n$ like innskudd $D$ med rente $r$ pr. termin gir sluttverdi som en geometrisk rekke; standarduttrykk (etterskuddsvis) $K = D\cdot\dfrac{(1+r)^n - 1}{r}$, forskuddsvis multipliseres med $(1+r)$ (formelsamling). Vis **utledningen som geometrisk rekke** (hvert innskudd forrentes ulikt antall terminer) — sensor honorerer å se koblingen. Skill **forskudds-** (innskudd i starten av terminen) og **etterskuddsvis** (i slutten), og «hva står på kontoen ett år etter siste innskudd?». Merk formelsamling (formelen) vs. selvstendig (utledningen + forskudds-/etterskuddsvalget).
- **Oppgavesjangre:** D (+ E-kobling). Mønstereksempel: «8000 kr settes inn 20 ganger, første gang i dag, 4 % rente. Hva står på kontoen ett år etter siste innskudd?» → oppsparingsannuitet $\approx 247\,754$.
- **Typiske feil:** Forveksle forskudds- og etterskuddsvis (feil antall forrentninger); bruke sluttverdiformel for enkeltbeløp der annuitet kreves; feil antall terminer; glemme ekstra $(1+r)$ ved «ett år etter siste innskudd».
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.4: Lån (annuitetslån og serielån) og nåverdi

- **id:** `sok1001-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok1001-3-3`
- **Kapitteltype:** teori
- **description:** De to låneformene — annuitetslån (fast terminbeløp) og serielån (fast avdrag, fallende terminbeløp) — samt nåverdi av enkeltbeløp og betalingsstrøm.
- **Eksamensbelegg:** Annuitetslån ~50 % (H2024, H2020, V2023), serielån ~35 % (H2023, H2019, V2022), nåverdi ~45 % (V2020, V2022, V2023). Prioritet: **perfekt** (tett med sensorfeller: annuitet vs. serielån).
- **Innholdskontrakt:** **Nåverdi**: enkeltbeløp $\text{NV} = K_t/(1+r)^t$; betalingsstrøm = sum av neddiskonterte beløp; nåverdi av annuitet $= D\cdot\dfrac{1-(1+r)^{-n}}{r}$ (formelsamling). **Annuitetslån**: fast **terminbeløp** $D$ funnet ved at lånet = nåverdi av terminbeløpene; splitt terminbeløp i **rente** ($r\cdot$restgjeld) og **avdrag** (resten); vis første og siste termin. **Serielån**: fast **avdrag** ($=$ lån$/n$), fallende terminbeløp (avdrag + rente på synkende restgjeld); finn første/siste terminbeløp og total rente. Understrek forskjellen: annuitet = fast terminbeløp / stigende avdrag; serielån = fast avdrag / fallende terminbeløp.
- **Oppgavesjangre:** D. Mønstereksempler: «Et studielån på 250 000 kr, 0,5 % månedlig rente, nedbetales som annuitetslån over 10 år. Finn månedlig terminbeløp og splitt første og siste betaling i rente og avdrag.» · «Serielån på 2 000 000 kr, 5 % årlig rente, 20 år. Finn rente + avdrag første og siste år, og total betaling.»
- **Typiske feil:** Blande annuitetslån (fast terminbeløp) og serielån (fast avdrag); bruke sluttverdiformel der nåverdi kreves (og omvendt); feil restgjeld ved rente/avdrag-splitt; feil rente pr. termin (år vs. måned); forskudds- vs. etterskuddsvis.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 3.5: Drill: finansoppgaven

- **id:** `sok1001-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok1001-3-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele finansoppgaven: fra en gitt spare-/lånesituasjon til fullført A-besvarelse med riktig formelvalg, forskudds-/etterskuddsvalg og annuitet/serielån-skille.
- **Eksamensbelegg:** Dekker sjangrene D og E samlet — finansmatematikken som er egen storoppgave i ~90 % av settene og fagets tydeligste signatur. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) hva slags problem (sluttverdi / oppsparingsannuitet / annuitetslån / serielån / nåverdi)? 2) forskudds- eller etterskuddsvis? 3) velg riktig formel fra formelsamlingen og identifiser $K_0/D$, $r$, $n$; 4) løs (evt. for $t$ eller $r$); 5) ved lån: splitt i rente/avdrag der det spørres; 6) tolk svaret økonomisk der oppgaven ber om det. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig formelvalget og annuitet/serielån-skillet). **12–16 oppgaver** på eksamensnivå som roterer problemtype (sluttverdi / oppsparing / annuitetslån / serielån / nåverdi av strøm) × variant (finn beløp / finn $t$ / splitt rente-avdrag), alle med `solution` + `hints`, kalibrert til pene svar.
- **Oppgavesjangre:** D, E. Mønstereksempel (full kjede): «(a) Vis at sluttverdien av 15 like årlige innskudd på 10 000 kr til 3 % kan skrives som en geometrisk rekke, og regn den ut. (b) Et lån på 500 000 kr nedbetales som annuitetslån over 5 år, 6 % årlig rente — finn terminbeløpet og splitt første termin i rente og avdrag.»
- **Typiske feil:** Hele finansrepertoaret fra §5: annuitet/serielån-forveksling, forskudds-/etterskuddsfeil, sluttverdi der nåverdi kreves, glemt konvergensvilkår ved rekke, feil antall terminer — samt svar uten mellomregning.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A renteregning + sluttverdi + løse for $t$ + eksponentiell vekst/depresiering, sjanger D; 3.B geometrisk rekke — kvotient/konvergens/sum, og sparing som rekke, sjanger E+D; 3.C oppsparingsannuitet + nåverdi, forskudds-/etterskuddsvis, sjanger D; 3.D full finansoppgave inkl. annuitetslån/serielån med rente-avdrag-splitt, sjanger D+E).

---

### Del 4 — Funksjoner av flere variable *(prioritet: KUNNE — flervariabel-oppgaven)*

#### Kapittel 4.1: Partielle deriverte og definisjonsmengde i to variable

- **id:** `sok1001-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-1-3`
- **Kapitteltype:** teori
- **description:** Partiell derivasjon av 1. og 2. orden (inkl. kryssderivert), og definisjonsmengde for funksjoner av to variable (grafisk).
- **Eksamensbelegg:** Partielle deriverte ~55 % (ofte del av derivasjonspakke eller egen oppgave), def.mengde i to variable ~20 % (H2019: $1/(x-y+3)$). Prioritet: **kunne** (nivå 2, men fast).
- **Innholdskontrakt:** **Partiell derivasjon**: $f'_x = \partial f/\partial x$ (hold $y$ fast), $f'_y$; **2. orden** $f''_{xx}, f''_{yy}$ og **kryssderivert** $f''_{xy} = f''_{yx}$ (Youngs teorem). Vis på Cobb-Douglas og polynom i to variable. **Definisjonsmengde i to variable**: krav fra rot ($\ge 0$), brøk (nevner $\ne 0$), $\ln$ (argument $>0$) — illustrer i $xy$-planet. Notasjonen $A=f''_{xx}$, $B=f''_{xy}$, $C=f''_{yy}$ innføres her (brukes i kap. 4.2). Merk at partiell derivasjon bare er «vanlig» derivasjon med de andre variablene som konstanter.
- **Oppgavesjangre:** F-fundament. Mønstereksempel: «Gitt $f(x,y)=x^2 y + \tfrac34 y^2 - \tfrac32 xy + 5$. Finn alle 1. og 2. ordens partielle deriverte, og bekreft at $f''_{xy}=f''_{yx}$.»
- **Typiske feil:** Behandle den «andre» variabelen som variabel ved partiell derivasjon; slurve med kryssderiverten; feil definisjonsmengde (glemme ett av kravene); blande $f''_{xx}$ og $f''_{xy}$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Fri optimering i to variable og klassifisering med $AC-B^2$

- **id:** `sok1001-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1001-4-1`
- **Kapitteltype:** teori
- **description:** Stasjonærpunkt for funksjoner av to variable ($f'_x=f'_y=0$) og klassifisering med andreordensdeterminanten $AC-B^2$ (min/maks/sadelpunkt).
- **Eksamensbelegg:** Fri 2-variabel optimering + klassifisering ~55 % (stasjonærpunkt → sadel/min/maks). $AC-B^2$-kriteriet er NTNU-konvensjonen sensor bruker. Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt:** **Stasjonærpunkt**: løs $f'_x=0$ og $f'_y=0$ simultant (kan gi flere punkter). **Klassifisering** med $A=f''_{xx}$, $B=f''_{xy}$, $C=f''_{yy}$: **$AC-B^2>0, A>0$** → lokalt min; **$AC-B^2>0, A<0$** → lokalt maks; **$AC-B^2<0$** → **sadelpunkt**; $AC-B^2=0$ → ubestemt (trenger mer). Bruk **fortegnstabell for $AC-B^2$** i hvert kandidatpunkt. Vis på et polynom med tre stasjonærpunkter (ett ekstremum + to sadler). Understrek at klassifiseringen skal navngis presist og begrunnes med kriteriet.
- **Oppgavesjangre:** F. Mønstereksempel: «Gitt $f(x,y)=x^2 y + \tfrac34 y^2 - \tfrac32 xy + 5$. (a) Finn stasjonærpunktene. (b) Klassifiser dem med $AC-B^2$.» → tre stasjonærpunkt; ett lokalt min, to sadelpunkt.
- **Typiske feil:** Regnefeil i $AC-B^2$; trekke feil konklusjon om fortegnet (sadel vs. ekstremum); glemme $A$-fortegnet for å skille min/maks; miste et stasjonærpunkt; ikke navngi klassifiseringen.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.3: Drill: flervariabel-oppgaven

- **id:** `sok1001-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok1001-4-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på flervariabel-oppgaven: fra en gitt funksjon av to variable til fullført A-besvarelse med partielle deriverte, stasjonærpunkt og $AC-B^2$-klassifisering.
- **Eksamensbelegg:** Dekker sjanger F samlet — flervariabel-oppgaven (~55 %), som roterer inn som egen storoppgave. Prioritet: **kunne** (nivå 2, drilles til sikkerhet).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) finn alle 1. ordens partielle deriverte; 2) løs $f'_x=f'_y=0$ → alle stasjonærpunkt; 3) finn $A, B, C$; 4) regn $AC-B^2$ i hvert punkt (fortegnstabell); 5) klassifiser (min/maks/sadel) og navngi; 6) evt. tolk. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig å finne *alle* stasjonærpunkt og korrekt $AC-B^2$-fortegn). **8–12 oppgaver** på eksamensnivå som roterer funksjonsform (polynom i to variable, Cobb-Douglas-lignende) × antall stasjonærpunkt, alle med `solution` + `hints`.
- **Oppgavesjangre:** F. Mønstereksempel (full kjede): «Gitt $f(x,y)=x^3 + y^3 - 3xy$. (a) Finn de partielle deriverte. (b) Finn stasjonærpunktene. (c) Klassifiser dem med $AC-B^2$.»
- **Typiske feil:** Hele flervariabel-repertoaret fra §5: partiell-derivasjonsfeil, tapt stasjonærpunkt, $AC-B^2$-regnefeil, feil sadel/ekstremum-konklusjon — samt svar uten mellomregning.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A partielle deriverte 1./2. orden + kryssderivert + def.mengde i to variable, sjanger F-fundament; 4.B stasjonærpunkt + $AC-B^2$-klassifisering, sjanger F; 4.C flervariabel-funksjon med flere stasjonærpunkt (sadel + ekstremum), sjanger F; 4.D full flervariabel-oppgave på eksamensnivå, sjanger F).

---

### Del 5 — Betinget og implisitt: Lagrange, implisitt derivasjon og integrasjon *(prioritet: PERFEKT — Lagrange er den tyngste storoppgaven)*

#### Kapittel 5.1: Lagranges metode (betinget optimering)

- **id:** `sok1001-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `sok1001-4-1`, `sok1001-1-3`
- **Kapitteltype:** teori
- **description:** Betinget optimering med Lagranges metode: oppsett av Lagrangefunksjonen, førsteordensbetingelser, eliminering av $\lambda$ og løsning — både maksimering (nytte) og minimering (kostnad), ofte med Cobb-Douglas.
- **Eksamensbelegg:** Lagrange ~85 % (fast egen oppgave, den tyngste storoppgaven): maksimering ~55 % (Cobb-Douglas-nytte under budsjett), minimering ~35 % (kostnad under produksjonskrav). Prioritet: **perfekt**.
- **Innholdskontrakt:** Problem: optimer $f(x,y)$ gitt $g(x,y)=c$. **Oppsett**: $F(x,y)=f(x,y)-\lambda\big(g(x,y)-c\big)$. **FOB**: $F'_x=0$, $F'_y=0$, $F'_\lambda=0$ (= bibetingelsen). **Eliminér $\lambda$**: del den ene FOB på den andre → tangeringsbetingelse $f'_x/f'_y = g'_x/g'_y$; sett inn i bibetingelsen; løs for $x^*, y^*$ (og evt. $\lambda^*$). Andreordensbetingelsene kan antas oppfylt der oppgaven sier det. **Bro til SOK1002** (kort merknad, ingen økonomisk utledning): dette apparatet brukes senere på nyttemaksimering under budsjett — men her er det ren teknikk. Vis både et maksimerings- (Cobb-Douglas $x^{1/4}y^{1/3}$ under $3x+y=14$) og et minimeringsoppsett ($\sqrt K + 20L$ under $K+L=30$). Merk formelsamling (oppskriften) vs. selvstendig (oppsett + eliminering + tolkning av $\lambda$).
- **Oppgavesjangre:** G. Mønstereksempler: «Maksimer $f(x,y)=12x^{1/4}y^{1/3}$ gitt $3x+y=14$ med Lagranges metode.» · «Minimer $\sqrt K + 20L$ under $K+L=30$ — sett opp Lagrangefunksjonen og finn tilpasningen.»
- **Typiske feil:** Ikke eliminere $\lambda$ ryddig; kaste bort røtter uten begrunnelse; glemme å sette resultatet inn i bibetingelsen; feil FOB (glemme kjerneregel på Cobb-Douglas); forveksle maksimering og minimering.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 5.2: Implisitt derivasjon og tangenter til nivåkurver

- **id:** `sok1001-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1001-4-1`
- **Kapitteltype:** teori
- **description:** Implisitt derivasjon av en kurve $F(x,y)=c$: finne $y'$, samt punkter med horisontal og vertikal tangent.
- **Eksamensbelegg:** Implisitt derivasjon ~55 % (fast egen oppgave; V2025, V2022, H2019, H2014), med horisontal/vertikal tangent. Prioritet: **perfekt** (fast og enkel å score på).
- **Innholdskontrakt:** For $F(x,y)=c$: **implisitt derivasjon** ved å derivere begge sider mhp. $x$ og huske at $y=y(x)$ (kjerneregel på $y$-ledd), eller formelen $y' = -F'_x/F'_y$. **Horisontal tangent**: $y'=0$ (teller $=0$, dvs. $F'_x=0$). **Vertikal tangent**: $y'$ udefinert (nevner $=0$, dvs. $F'_y=0$). Ofte kombinert med skjæring med aksene. Vis på en andregradskurve. Understrek at $y$ er en funksjon av $x$ — det er den vanligste fellen.
- **Oppgavesjangre:** H. Mønstereksempel: «$2x^2 + xy + y^2 = 14$ definerer $y$ implisitt. (a) Finn $y'$. (b) Finn punkt med horisontal tangent. (c) Finn punkt med vertikal tangent.»
- **Typiske feil:** Glemme at $y=y(x)$ (kjerneregel på $y$-ledd); bytte om horisontal (teller $=0$) og vertikal (nevner $=0$) tangent; regnefeil i $F'_x$/$F'_y$; glemme å sette tilbake i kurven for å finne punktene.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.3: Integrasjon: antiderivert, kostnadsfunksjon og bestemt integral

- **id:** `sok1001-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1001-1-3`
- **Kapitteltype:** teori
- **description:** Ubestemt integral (antiderivert) med integrasjonskonstant bestemt av faste kostnader, og bestemt integral/areal — typisk kostnadsfunksjon fra grensekostnad.
- **Eksamensbelegg:** Integrasjon ~25 % (H2025 1b: $\int K'(x)dx$; V2023), ubestemt + bestemt. Prioritet: **kjenne/kunne** (nivå 3, økende — plasseres etter Lagrange og implisitt, jf. leserkrav).
- **Innholdskontrakt:** **Ubestemt integral** (antiderivert): $\int x^n dx = \dfrac{x^{n+1}}{n+1}+C$ ($n\ne -1$), $\int \tfrac1x dx = \ln|x|+C$, $\int e^{kx}dx = \tfrac1k e^{kx}+C$ (formelsamling). **Integrasjonskonstant fra faste kostnader**: kostnadsfunksjon fra grensekostnad, $K(x)=\int K'(x)dx$, der $K(0)=F$ (faste kostnader) bestemmer $C$. **Bestemt integral** $\int_a^b f(x)dx = [G(x)]_a^b$ (areal). Koble til enhetskostnad $A(x)=K(x)/x$ og asymptoter (kap. 2.3). Merk formelsamling (integrasjonsreglene) vs. selvstendig (bestemme $C$ fra faste kostnader).
- **Oppgavesjangre:** I. Mønstereksempel: «Grensekostnaden er $K'(x)=\tfrac12 x + 30$, og faste kostnader er 5000. Finn kostnadsfunksjonen $K(x)$.» → $K(x)=\tfrac14 x^2 + 30x + 5000$.
- **Typiske feil:** Glemme integrasjonskonstanten; ikke bruke faste kostnader til å bestemme $C$ ($K(0)=F \Rightarrow C=F$); feil ved bestemt integral (bytte om grenser, glemme fortegn); feil antiderivert av $1/x$ eller $e^{kx}$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: Drill: Lagrange-, implisitt- og integrasjonsoppgaven

- **id:** `sok1001-5-4` · **number:** 5.4 · **estimatedMinutes:** 80 · **prerequisites:** `sok1001-5-3`, `sok1001-5-1`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på betinget/implisitt-søylen: fullførte A-besvarelser på Lagrange (maks og min), implisitt derivasjon med tangenter, og integrasjon fra grensekostnad.
- **Eksamensbelegg:** Dekker sjangrene G, H, I samlet — Lagrange (~85 %, tyngste storoppgave), implisitt derivasjon (~55 %) og integrasjon (~25 %). Prioritet: **perfekt** (Lagrange) / **kunne** (implisitt, integrasjon).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** (G) 1) Lagrangefunksjon, 2) FOB, 3) eliminér $\lambda$ → tangeringsbetingelse, 4) sett i bibetingelse, 5) løs $x^*,y^*$; (H) 1) implisitt derivér, 2) $y'$, 3) horisontal (teller $=0$) og vertikal (nevner $=0$) tangent, 4) sett tilbake i kurven; (I) 1) integrer, 2) bestem $C$ fra faste kostnader / grenser. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig $\lambda$-elimineringen og horisontal/vertikal-skillet). **10–15 oppgaver** på eksamensnivå som roterer sjanger (Lagrange maks / Lagrange min / implisitt / integrasjon) × funksjonsform, alle med `solution` + `hints`.
- **Oppgavesjangre:** G, H, I. Mønstereksempel (full kjede): «(a) Maksimer $f(x,y)=x^{1/2}y^{1/2}$ gitt $2x+8y=40$ med Lagrange. (b) $x^2 + xy + y^2 = 7$ — finn $y'$ og punktene med horisontal tangent. (c) Grensekostnad $K'(x)=3x^2+10$, faste kostnader 200 — finn $K(x)$.»
- **Typiske feil:** Hele betinget/implisitt-repertoaret fra §5: rotete $\lambda$-eliminering, glemt bibetingelse, $y=y(x)$-fella, horisontal/vertikal-forveksling, glemt integrasjonskonstant — samt svar uten mellomregning.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A Lagrange maksimering (Cobb-Douglas under budsjett) med full FOB og $\lambda$-eliminering, sjanger G; 5.B Lagrange minimering (kostnad under krav) + tolkning, sjanger G; 5.C implisitt derivasjon med horisontal/vertikal tangent, sjanger H; 5.D integrasjon (kostnadsfunksjon fra grensekostnad) + blandet Lagrange/implisitt på eksamensnivå, sjanger I+G+H).

---

### Del 6 — Eksamenstrening *(ren trening; gjenbruker alle fem søyler)*

#### Kapittel 6.1: Sjangerdrill: de fem søylene under tidspress

- **id:** `sok1001-6-1` · **number:** 6.1 · **estimatedMinutes:** 90 · **prerequisites:** `sok1001-5-4`, `sok1001-3-5`
- **Kapitteltype:** drill (samlet sjangerdrill)
- **description:** Samlet drill på tvers av de fem søylene: korte oppgaver i hver sjanger A–J under tidspress, som forberedelse til de fullstendige øvingseksamenene.
- **Eksamensbelegg:** Speiler hele sjangerkatalogen A–J samlet, kalibrert til H2025-malen (5–6 oppgaver). Prioritet: **perfekt** (integrerer alle søyler).
- **Innholdskontrakt:** For hver sjanger A–J: 2–4 korte oppgaver på eksamensnivå med `solution` + `hints`, gruppert slik at studenten kan drille én søyle av gangen eller kjøre en blandet «hurtigrunde». Kort **tidsbudsjett-tabell**: hvor mange minutter hver sjanger typisk bør ta gitt vektingen. Understrek sensorens metaregler tverrgående (mellomregning, fortegnsskjema, konvergensvilkår, tolkning, presis klassifisering). Ingen ny teori — ren anvendelse.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I, J (alle). Mønstereksempel: en «hurtigrunde» med én oppgave fra hver søyle (deriver / drøft / spar / partiell-optimer / Lagrange), tidsstyrt.
- **Typiske feil:** Tverrgående feilkatalog fra §5 (alle 11 punktene), med henvisning til søylen/kapitlet som forebygger hver.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 6.2: Øvingseksamen 1 (klassisk 5-oppgavers mal)

- **id:** `sok1001-6-2` · **number:** 6.2 · **estimatedMinutes:** 120 · **prerequisites:** `sok1001-6-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler den klassiske 5-oppgavers malen (2008–2020): derivasjonspakke, funksjonsdrøfting, finans, implisitt/flervariabel, Lagrange.
- **Eksamensbelegg:** Speiler malen 5 oppgaver, vekting oppgitt pr. oppgave, 4 timer. Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** 5 nyskrevne oppgaver med vekting (f.eks. 27/20/18/20/15 etter H2019-profilen): (1) derivasjonspakke A, (2) finansoppgave D, (3) implisitt derivasjon H, (4) funksjonsdrøfting C, (5) Lagrange G. **Løsningsforslag i eget `collapsible` per oppgave**, skrevet som A-besvarelse (mellomregning + fortegnsskjema + tolkning), med `tip`-notat om delpoeng/vekting. Speiler temafordelingen i §2 (en «typisk» eksamen, ikke en uvanlig).
- **Oppgavesjangre:** A, C, D, G, H. Mønstereksempel: hele settet med vekting og løsningsforslag.
- **Typiske feil:** Tidsstyring (vekting → minutter); hoppe over mellomregning under press; glemme fortegnsskjema/konvergensvilkår i stress.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.3: Øvingseksamen 2 (H2025-malen, 6 oppgaver)

- **id:** `sok1001-6-3` · **number:** 6.3 · **estimatedMinutes:** 120 · **prerequisites:** `sok1001-6-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen som speiler H2025-malen (6 oppgaver 15/20/20/15/15/15): grensekost→integral/asymptote, drøfting, rekke+finans, partielle+klassifiser, Lagrange, likning/grenseverdi/elastisitet.
- **Eksamensbelegg:** Speiler H2025-profilen direkte (6 oppgaver, felles med MET1001). Prioritet: **perfekt** (nyeste mal).
- **Innholdskontrakt:** 6 nyskrevne oppgaver med vekting 15/20/20/15/15/15: (1) grensekostnad → integral + enhetskostnad + asymptote (I+J), (2) funksjonsdrøfting med globale ekstrempunkt + tangent (C), (3) geometrisk rekke + oppsparingsannuitet/sluttverdi (E+D), (4) partielle deriverte + $AC-B^2$-klassifisering (F), (5) Lagrange (G), (6) blandet: likning + grenseverdi (L'Hôpital) + elastisitet med parameterbestemmelse (B+J). **Løsningsforslag i eget `collapsible` per oppgave** som A-besvarelse med `tip`-notat om vekting.
- **Oppgavesjangre:** B, C, D, E, F, G, I, J. Mønstereksempel: hele settet med vekting og løsningsforslag.
- **Typiske feil:** Som 6.2, samt å undervurdere «blandet» oppgave 6 (flere små deler, ulike sjangre).
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.4: Øvingseksamen 3 (finans- og Lagrange-tung variant)

- **id:** `sok1001-6-4` · **number:** 6.4 · **estimatedMinutes:** 120 · **prerequisites:** `sok1001-6-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett øvingseksamen med tyngdepunkt på fagets signatursøyler (finans + Lagrange), for å sikre at de tyngste storoppgavene sitter under press.
- **Eksamensbelegg:** Speiler et sett der finans og Lagrange er ekstra tunge (jf. at begge er ~85–90 %-gjengangere). Prioritet: **perfekt**.
- **Innholdskontrakt:** 5–6 nyskrevne oppgaver med vekting: (1) derivasjonspakke + algebra (A+B), (2) funksjonsdrøfting (C), (3) finans tung — oppsparingsannuitet + serielån med rente/avdrag-splitt (D), (4) Lagrange minimering (kostnad under krav) (G), (5) implisitt derivasjon eller flervariabel-klassifisering (H eller F). **Løsningsforslag i eget `collapsible` per oppgave** som A-besvarelse med `tip`-notat om vekting. Til sammen dekker de tre øvingseksamenene (6.2–6.4) sjangrene A–J minst én gang, og både den klassiske 5-oppgavers malen og H2025-malen (6 oppgaver).
- **Oppgavesjangre:** A, B, C, D, F/H, G. Mønstereksempel: hele settet med vekting og løsningsforslag.
- **Typiske feil:** Som 6.2–6.3, særlig annuitet/serielån-skillet og $\lambda$-elimineringen under tidspress.
- **Quiz: 10 · Flashcards: 0**

**Prøve-kvote Del 6:** ingen egne temaprøver (delen ER treningsdelen — 1 samlet sjangerdrill + 3 øvingseksamener som fungerer som helhetsprøver).

---

## 3b. Kvotesammendrag (AUTORITATIV)

Tabellen er **fasit** for alle senere faser: kvotene per kapittel summerer til
tallene her, og summene ligger over gulvet på ≥500 quiz og ≥500 flashcards.

| Del | Kapitler | Quiz (sum per kapittel) | Flashcards (sum per kapittel) | Temaprøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 = **14** | 12 = **12** | 0 (metadel) |
| 1 | 1.1–1.4 | 22+22+26+18 = **88** | 24+20+24+10 = **78** | 4 |
| 2 | 2.1–2.4 | 24+20+18+16 = **78** | 22+18+18+8 = **66** | 4 |
| 3 | 3.1–3.5 | 20+20+22+24+18 = **104** | 20+20+22+24+10 = **96** | 4 |
| 4 | 4.1–4.3 | 20+22+16 = **58** | 20+20+8 = **48** | 4 |
| 5 | 5.1–5.4 | 26+22+18+18 = **84** | 24+20+18+10 = **72** | 4 |
| 6 | 6.1–6.4 | 16+10+10+10 = **46** | 12+0+0+0 = **12** | 0 (3 øvingseksamener + sjangerdrill) |
| **Sum** | **25 kap.** | **472** | **384** | **20 temaprøver + 3 ØE** |

> **Korreksjon — kvotene skaleres opp til gulvet.** Rådataene over gir 472 quiz /
> 384 fc, som ligger **under** ≥500-gulvet. For at hvert kapittel skal bidra dit
> summen krever (jf. produksjonsløypens «≥500 er et gulv»-lærdom), **løftes** de
> per-kapittel-kvotene som følger, og de justerte tallene er de autoritative:

| Del | Kapitler | Quiz (justert, autoritativ) | Flashcards (justert, autoritativ) |
|---|---|---|---|
| 0 | 0.1 | **16** | **14** |
| 1 | 1.1–1.4 | 26+26+30+20 = **102** | 30+26+30+14 = **100** |
| 2 | 2.1–2.4 | 28+24+22+18 = **92** | 28+24+24+12 = **88** |
| 3 | 3.1–3.5 | 24+24+26+28+20 = **122** | 28+26+28+30+14 = **126** |
| 4 | 4.1–4.3 | 24+26+18 = **68** | 26+26+12 = **64** |
| 5 | 5.1–5.4 | 30+26+22+20 = **98** | 30+26+24+14 = **94** |
| 6 | 6.1–6.4 | 20+12+12+12 = **56** | 22+2+2+2 = **28** |
| **Sum** | **25 kap.** | **554 ≥ 500 ✓** | **514 ≥ 500 ✓** |

> **Autoritativ regel:** de **justerte** tallene (nederste tabell) er fasit —
> quiz-sum **554**, flashcard-sum **514**. Per-kapittel-kvotene i §3 er
> minimumsanslag; der de avviker fra den justerte tabellen, **gjelder den
> justerte tabellen**. Forfatteren kan overskyte, aldri underskride.
> Fordelingen speiler de fem søylene: derivasjon (Del 1), finans (Del 3) og
> Lagrange/betinget (Del 5) er de tyngste (~85–100 %-gjengangere) og bærer flest
> quiz/fc; flervariabel (Del 4) og øvingsdelen (Del 6) ligger lavere.
> Flashcards er løftet litt over quiz i finanssøylen fordi definisjonene og
> formel-skillene der faktisk må sitte (annuitet vs. serielån, forskudds-/
> etterskuddsvis, konvergensvilkår, $AC-B^2$-kriteriet, Lagrange-oppskriften).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5, 20 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med mellomregning + fortegnsskjema/FOB + verbal tolkning) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok1001-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

**Del 1 — Algebra og derivasjon**
1. Prøve 1.A (35 min): Derivasjonspakke — 5–6 funksjoner (potens/produkt/kvotient/kjerne/$e^x$/$\ln$) (sjanger A).
2. Prøve 1.B (30 min): Løse likninger — eksponential/logaritme/rasjonal/andregrad (sjanger B).
3. Prøve 1.C (25 min): Forenkling/faktorisering + potens-/logaritmeregler (sjanger B).
4. Prøve 1.D (35 min): Blandet algebra + derivasjon på eksamensnivå (sjanger A+B).

**Del 2 — Funksjonsdrøfting**
1. Prøve 2.A (35 min): Drøftingskjede — stasjonærpunkt/fortegnsskjema/topp-bunn/vendepunkt/konveksitet (sjanger C).
2. Prøve 2.B (30 min): Globale ekstrempunkt + tangentlikning + skisse (sjanger C).
3. Prøve 2.C (30 min): Elastisitet med parameterbestemmelse + grenseverdi/L'Hôpital + asymptoter (sjanger J).
4. Prøve 2.D (45 min): Full drøftingsoppgave på eksamensnivå (sjanger C+J).

**Del 3 — Følger, rekker og finansmatematikk**
1. Prøve 3.A (30 min): Renteregning + sluttverdi + løse for $t$ + eksponentiell vekst/depresiering (sjanger D).
2. Prøve 3.B (35 min): Geometrisk rekke — kvotient/konvergens/sum + sparing som rekke (sjanger E+D).
3. Prøve 3.C (35 min): Oppsparingsannuitet + nåverdi, forskudds-/etterskuddsvis (sjanger D).
4. Prøve 3.D (50 min): Full finansoppgave inkl. annuitetslån/serielån med rente-avdrag-splitt (sjanger D+E).

**Del 4 — Funksjoner av flere variable**
1. Prøve 4.A (30 min): Partielle deriverte 1./2. orden + kryssderivert + def.mengde i to variable (sjanger F-fundament).
2. Prøve 4.B (35 min): Stasjonærpunkt + $AC-B^2$-klassifisering (sjanger F).
3. Prøve 4.C (35 min): Flervariabel-funksjon med flere stasjonærpunkt (sadel + ekstremum) (sjanger F).
4. Prøve 4.D (45 min): Full flervariabel-oppgave på eksamensnivå (sjanger F).

**Del 5 — Betinget og implisitt**
1. Prøve 5.A (40 min): Lagrange maksimering (Cobb-Douglas under budsjett), full FOB + $\lambda$-eliminering (sjanger G).
2. Prøve 5.B (35 min): Lagrange minimering (kostnad under krav) + tolkning (sjanger G).
3. Prøve 5.C (35 min): Implisitt derivasjon med horisontal/vertikal tangent (sjanger H).
4. Prøve 5.D (50 min): Integrasjon (kostnadsfunksjon fra grensekostnad) + blandet Lagrange/implisitt (sjanger I+G+H).

### Øvingseksamener (3 komplette sett — se kap. 6.2–6.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 6.2) | Klassisk 5-oppgavers mal (2008–2020) | Derivasjonspakke (A) + finans (D) + implisitt (H) + drøfting (C) + Lagrange (G), vekting f.eks. 27/20/18/20/15 |
| Øvingseksamen 2 (kap. 6.3) | H2025-malen (6 oppgaver, felles med MET1001) | Integral/asymptote (I+J) + drøfting (C) + rekke+finans (E+D) + partielle+klassifiser (F) + Lagrange (G) + blandet likning/grenseverdi/elastisitet (B+J), vekting 15/20/20/15/15/15 |
| Øvingseksamen 3 (kap. 6.4) | Finans- og Lagrange-tung variant | Derivasjon+algebra (A+B) + drøfting (C) + finans tung (D) + Lagrange min (G) + implisitt/flervariabel (H/F) |

Til sammen dekker de tre settene sjangrene A–J minst én gang; alle fem søyler
trenes, og både den klassiske 5-oppgavers malen og H2025-malen (6 oppgaver) er
representert.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, formelsamling Sydsæter/Strøm/Berck +
   kalkulator; fra 2025 felles med MET1001), de fem faste søylene, mellomregnings-
   formatet, og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellene omgjort til tre lesenivåer:
   perfekt (derivasjonspakke, funksjonsdrøfting, finansmatematikk, Lagrange —
   Del 1, 2, 3 og 5.1/5.2), kunne (flervariabel-optimering med $AC-B^2$,
   likninger, geometrisk rekke), kjenne (integrasjon, elastisitet, grenseverdi/
   L'Hôpital, asymptoter, eksponentiell vekst).
3. **Sjangerguiden** — oppgavetypene A–J med løsningsoppskriftene fra
   drillkapitlene (1.4, 2.4, 3.5, 4.3, 5.4) i kortform: derivasjonsalgoritmen,
   drøftingskjeden, finans-formelvalget (sluttverdi/oppsparing/annuitetslån/
   serielån/nåverdi + forskudds/etterskudd), $AC-B^2$-klassifiseringen,
   Lagrange-oppskriften, implisitt horisontal/vertikal-regelen, antiderivert med
   integrasjonskonstant.
4. **Sensorreglene** — metareglene (mellomregning skal vises; riktig metode/
   oppsett bærer poengene; fortegnsskjema i drøfting; tolkning der oppgaven ber om
   det; konvergensvilkår/definisjonsområde med; presis klassifisering) +
   toppsjikt-listen (globale ekstrempunkt begrunnet, asymptoter/enhetskostnad,
   elastisitet med parameterbestemmelse, grenseverdi med L'Hôpital, komparativ
   statikk i Lagrange) fra kap. 0.1.
5. **Feilkatalogen** — de 11 typiske feilene fra analysens §5 samlet (glemt
   kjerneregel; glemt integrasjonskonstant; manglende fortegnsskjema; vendepunkt-
   forveksling; stoppe ved lokale ekstrempunkt; annuitet/serielån + forskudds-/
   etterskuddsforveksling; glemt konvergensvilkår; feil $AC-B^2$; implisitt
   $y=y(x)$-fella + horisontal/vertikal-forveksling; rotete $\lambda$-eliminering;
   utolkede tall), hver med henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: derivasjonsregler (potens/produkt/
   kvotient/kjerne, $e^{kx}$, $\ln$, $a^x$); drøfting ($f'=0$, fortegnsskjema,
   $f''$, vendepunkt, $AC-B^2$); elastisitet $\text{El}_x f = (x/f)f'(x)$; finans
   ($K_t=K_0(1+r)^t$, oppsparingsannuitet, annuitetslån, serielån, nåverdi,
   geometrisk sum $a/(1-k)$ med $|k|<1$); Lagrange $F=f-\lambda(g-c)$; implisitt
   $y'=-F'_x/F'_y$; integrasjon (antiderivert + integrasjonskonstant). Marker hva
   som skal *utledes/tolkes* (drøftingskjeden, $\lambda$-elimineringen,
   forskudds/etterskudd-valget, elastisitetstolkningen) vs. hva som bare slås opp
   i formelsamlingen (derivasjons-/integrasjons-/finansformlene).
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (derivasjon — må sitte flytende) → Del 2 (drøfting) → Del 3 (finans) → Del 4
   (flervariabel) → Del 5 (Lagrange/implisitt/integrasjon), prøver underveis,
   øvingseksamenene de siste ukene under tidspress (240 min, vekting pr. oppgave).
   Terp derivasjonsdrillen (1.4) og de andre drillkapitlene.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1001` med alle 25
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK1001 Matematikk for økonomer».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J, frekvenstallene og
   avgrensningen (rent matematikkfag, ikke økonomisk teori) som resten refererer til.
3. **Del 1** (algebra + derivasjon) — derivasjonsapparatet resten bruker.
4. **De fire temasøylene i avhengighetsrekkefølge**: Del 2 (drøfting) → Del 3
   (finans) → Del 4 (flervariabel) → Del 5 (Lagrange/implisitt/integrasjon). Én
   byggeagent per hel del (jf. fase 4-batching). Drillkapitlet (1.4/2.4/3.5/4.3/
   5.4) bygges av samme agent som delen.
5. **Del 6 til slutt** (sjangerdrill + øvingseksamener gjenbruker alt); bygges av
   én agent som leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1001-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\lambda`, `\\ln`, `\\sqrt`); ingen unicode-brøker; konsistent
      $f'(x), f''(x)$, $f'_x, f''_{xy}$, $AC-B^2$, $\lambda$, $K_0, r, n, D$,
      $\text{El}_x f$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok1001-filer — **påkrevd**:
      $AC-B^2$ (ikke «Hesse-determinant $D$» som primærterm), $f'_x$/$f''_{xy}$,
      $\text{El}_x f$, $F=f-\lambda(g-c)$, annuitetslån/serielån-skillet;
      **forbudt/uønsket**: økonomisk-teori-vokabular som primærinnhold — grep
      etter «indifferenskurve», «substitusjonseffekt», «marginalnytte»,
      «isokvant», «monopol», «Cournot», «markedslikevekt», «sant eller usant»
      skal gi **null treff** utenfor de korte «bro til SOK1002»-merknadene og
      avgrensningen i kap. 0.1.
- [ ] **Mellomregning + fortegnsskjema**: hvert drøftingseksempel har fortegnsskjema
      for $f'$ (og $f''$); hver Lagrange-oppgave viser full FOB + $\lambda$-
      eliminering; ingen «bare svar»-løsninger.
- [ ] **Finans-skillene**: annuitetslån vs. serielån og forskudds-/etterskuddsvis
      er eksplisitt skilt i kap. 3.3, 3.4, 3.5, prøve 3.C/3.D og øvingseksamenene;
      konvergensvilkåret $|k|<1$ er med hver gang $a/(1-k)$ brukes.
- [ ] **Klassifisering**: $AC-B^2$-fortegnstabell i kap. 4.2/4.3; horisontal
      (teller $=0$) vs. vertikal (nevner $=0$) tangent i kap. 5.2/5.4;
      integrasjonskonstant fra faste kostnader i kap. 5.3.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-`text` + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
      med `solution` + `hints`, repetisjons-`collapsible`; drillkapitlene (1.4,
      2.4, 3.5, 4.3, 5.4) har løsningsoppskrift + sensor-kommentert case + 10–18
      oppgaver.
- [ ] **Quiz-sum ≥ 554 og flashcard-sum ≥ 514** per den justerte kvotetabellen
      i §3b (kontrollsummér — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–J minst én gang, og både den klassiske
      5-oppgavers malen og H2025-malen (6 oppgaver).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne funksjoner, egne
      kontekster; ingen formuleringer fra reelle sett eller sensorveiledninger
      (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
      ikke kopieres ordrett inn); kalibreringsverdiene fra reelle fasiter (f.eks.
      $K(x)=\tfrac14 x^2+30x+5000$, $t\approx 19$) brukes kun til å velge
      vanskelighetsgrad, aldri som oppgavetall; formelsamlingen (Sydsæter, Strøm &
      Berck) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot bygde/planlagte NTNU-samfunnsøkonomibøker

SØK1001 er det **rene matematiske fundamentet** for de tre andre NTNU-
samfunnsøkonomibøkene. Det er null faglig overlapp på *innhold* — SØK1001 lærer
*teknikken*, de andre *anvender* den på økonomisk teori. Boka skal derfor peke
framover (broer), aldri gjenta økonomisk teori.

| Bok | Status | Forhold til SØK1001 | Arbeidsdeling |
|---|---|---|---|
| **SOK1002 Mikroøkonomi** | skjelett (ikke bygget) | Direkte «avtaker» av SØK1001-matten. SØK1001s Lagrange → nyttemaks/kostnadsmin i SOK1002; Cobb-Douglas → nytte-/produktfunksjoner; partiell derivasjon → marginalnytte/-produkt; implisitt derivasjon → indifferenskurver/isokvanter; elastisitet → pris-/inntektselastisiteter. | SØK1001 lærer **hvordan** man setter opp/løser Lagrange og deriverer Cobb-Douglas (ren teknikk). SOK1002 **anvender** apparatet på økonomisk teori. SØK1001 nevner koblingen som korte «bro til SOK1002»-merknader (særlig ved Lagrange, kap. 5.1, og Cobb-Douglas), men går ALDRI inn i konsument-/produsentteori. Kryssbok-lenker til SOK1002-kapitler legges **først når SOK1002 er bygget** (til da: prosa-forward, ikke hard lenke — README: lenk kun til kapitler som finnes). |
| **SØK1011 Markeder og markedssvikt** | skjelett K2 (komplement SOK1002) | Bruker samme grunn-matte (derivasjon, enkel optimering) implisitt, men SØK1011 er markeds-/spillteorifag (Cournot, monopol, eksternaliteter). | SØK1001 leverer regneteknikken (derivasjon, FOB-manipulasjon) SØK1011 forutsetter; SØK1001 bygger IKKE ut noe markeds-/spillteoristoff. Ingen innholdsoverlapp; ingen hard lenke nødvendig (SØK1011 kan evt. lenke *til* SØK1001 for matterepetisjon når begge er bygget). |
| **SØK 3500 Samfunnsøkonomi II (BI)** | skjelett | Videregående samfunnsøkonomi (BI), ikke NTNU; annet nivå. | Ingen overlapp — SØK1001 er innføringsmatte, SØK3500 er videregående teori ved en annen institusjon. |
| **ECON1100 Matematikk I for økonomer (UiO)** | skjelett | UiOs direkte motstykke — deler kalkulus-/derivasjons-/optimeringskjernen nesten fullstendig. | **Kjernekapitler kan deles konseptuelt** (derivasjon, drøfting, partiell derivasjon, Lagrange, implisitt derivasjon), men SØK1001 MÅ ha finansmatematikk-søylen (Del 3) som ECON1100 mangler helt, og skal IKKE låne ECON1100s «sant/usant, begrunn»-sjanger. Egne bøker (ulik institusjon/format); ingen delt fil. |

**Konklusjon:** SØK1001 er en **selvstendig, komplett** matte-for-økonomer-bok
uten innholdsoverlapp med de bygde/planlagte økonomibøkene. Dens unike bidrag i
NTNU-porteføljen er **finansmatematikk-søylen** (Del 3) og det rene
regneapparatet som SOK1002/SØK1011 senere anvender. Hard kryssbok-lenking
utsettes til avtakerbøkene er bygget; inntil da er broene ren prosa.

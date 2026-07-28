# Bokskjelett: BØK 3423 Finans — eksamensrettet lærebok

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
> (6 komplette sett: 3 individuelle skoleeksamener V2022/H2023/V2024 og 3
> gruppecase V2024 «VROOM» / V2025 «BioCycle» / H2025 «MOWI ASA», pluss det
> utdelte formelarket og de fire rentetabellene). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Nærmeste forbilder: `econ2500`
> (regnetung corporate finance) og `met2910-bi` (BI-format: «vis utregning» +
> formelark-håndverk). Kalibrer faglig utelukkende mot BØK 3423-analysen —
> econ2500/met2910-bi er **format**-forbilder, ikke faglige forbilder.
>
> **Alle mønstereksempler i skjelettet har nyskrevne tallverdier og egne,
> fiktive selskapsnavn.** Forfatteren varierer dem videre — aldri kopiere inn
> tall/kontekst fra reelle sett. Fordi arkivet mangler sensorveiledninger, er
> alle sensorkrav utledet av oppgavetekstenes instruksjoner; usikre detaljer
> merkes `(verifiser)` i den ferdige boka.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `bok3423-bi` |
| Tittel | **BØK 3423 Finans** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (bachelor i økonomi og administrasjon; 7,5 ECTS) |
| Arketype | Regnefag (tallregnende corporate finance med todelt vurdering: Excel-DCF-case + skoleeksamen med regning og flervalg) |
| Antall kapitler | **38** (3 eksamenskart/håndverk + 30 tema/drill + 5 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 35 timer** (uten prøver) |
| Quiz totalt | **598** (krav ≥500) |
| Flashcards totalt | **552** (krav ≥500) |

**Pitch (ett avsnitt):** BØK 3423 vurderes fra 2024 **todelt**: en
**gruppeinnlevering (40 %)** — ett stort Excel-basert verdsettings-/DCF-oppdrag
rundt ett selskap (fiktivt eller børsnotert) — og en **individuell skriftlig
skoleeksamen (60 %, 3 timer)** med regneoppgaver og flervalg. Eldre sett
(t.o.m. H2023) var 100 % individuell; boka dekker begge, men kalibreres mot
dagens todeling. **Fem temaer bærer nesten hele faget** (minst 5 av 6 sett):
(1) **kontantstrøm-konstruksjon fra resultatbudsjett** til EK/TK-strøm
(saldoavskrivning, skatteskjold, arbeidskapital, sunk cost, ringvirkninger,
restverdi) — den tyngste og hyppigste; (2) **netto nåverdi (NPV)** (100 %);
(3) **CAPM/beta/verdipapirlinjen**; (4) **internrente (IRR) + NPV-vs-IRR**; og
(5) **WACC med EK-metode vs. TK-metode**. Rundt disse — med tidsverdiregning
som fundament — bygges boka, med **DCF-verdsettingscaset «Fjordvind Kraft AS»
som gjennomgående tråd** fra tidsverdi til ferdig anbefaling. To BI-særtrekk
dresseres i hvert kapittel: **«vis all utregning»** (kun svar eller
kalkulatortaster gir 0 uttelling — metode og formeloppsett bærer poengene) og
**formelarket som bare dekker porteføljeteori** — alt annet (nåverdi, annuitet,
CAPM, WACC, Gordon, obligasjon) **må pugges**, og hver formel merkes deretter.
Opsjoner/derivater — som emnebeskrivelsen nevner, men arkivet aldri har testet —
er bevisst utelatt; **ESG/bærekraft/grunnrenteskatt** dekkes kort som fast
drøftingsspor i casene.

**Kritisk regel #1 — «Vis all utregning» (gjelder HELE boka).** På hvert
skoleeksamenssett står varianter av: *«Det gis ikke uttelling for å oppgi
kalkulatortaster brukt for å finne svar»* og *«korrekt utregning må vises for å
oppnå full uttelling»*. Konsekvens: (i) hvert løsningsforslag skrives som en
A-besvarelse der formelen settes opp **eksplisitt før innsetting**, med ett steg
per linje; (ii) kalkulatorens finansfunksjoner nevnes KUN som kontroll, aldri
som løsning; (iii) det gis **delvis uttelling for riktig formeloppsett selv uten
korrekt tallsvar** (eksplisitt H2023), og **følgefeil straffes lite** når
metoden er riktig; (iv) hver regneoppgave skal ende i en **konklusjon**
(lønnsomt/ikke, kjøp/hold/selg, anbefaling). Dette skal gjennomsyre hvordan
alle løsningsforslag skrives.

**Kritisk regel #2 — Formelarket dekker KUN porteføljeteori (gjelder HELE
boka).** Det utleverte arket har **ni formler**: forventet porteføljeavkastning
(to former), porteføljevarians (fire former), standardavvik, kovarians↔
korrelasjon, og **beta = Kov(rᵢ,rₘ)/Var(rₘ)**. Alt annet må pugges. Hvert
delkapittels **Symbol- og formelliste** merker hver formel enten
**«(på formelarket)»** eller **«(må pugges — IKKE på arket)»**. Må pugges:
nåverdi/sluttverdi/annuitet/evig strøm, effektiv rente, nominell↔reell, NPV,
IRR, PI, **CAPM**, **Gordon**, **WACC og EK-/TK-metoden**, obligasjonsprising,
og hele kontantstrøm-oppsettet. Dette er bokas viktigste strukturinnsikt:
porteføljematematikken kan læres «lett» (slå opp på arket), mens diskonterings-
og kapitalkostnadsformlene må sitte utenat.

**Kritisk regel #3 — Rentetabeller utdeles (gjelder Del 1 særlig).** Fire
tabeller deles ut: **sluttverdifaktor** $(1+r)^T$, **diskonteringsfaktor**
$1/(1+r)^T$, **nåverdi-annuitetsfaktor**, og **annuitetsfaktor (ytelse)**. Boka
lærer studenten å **lese og bruke tabellene** ved siden av formlene — men
formlene er primære (tabellene finnes bare for enkelte rente-/periodekombinasjoner).

**Kritisk regel #4 — Flervalg er en egen eksamenssjanger (gjelder skoleeksamen).**
To av tre skoleeksamener har flervalgsbolker. **Straffscoring varierer:** H2023
gir **+1 riktig / −1 feil / 0 ubesvart** (med eksplisitt «velger å ikke svare»);
V2024 gir **0 for feil eller ubesvart** (ingen straff). Boka trener flervalg som
egen sjanger (sjanger J) med **strategien tilpasset straffscoringen**: ved −1 er
det rasjonelt å stå over spørsmål man ikke kan eliminere alternativer på; uten
straff skal alt besvares.

**Kritisk regel #5 — Excel-DCF-caset (gruppeinnlevering, gjelder Del 10 særlig).**
Caset leveres som Excel-fil **pluss** et forklarende dokument (Word/PDF/PPT).
*«En Excel-fil uten formler/beregninger, kun tallsvar, vil ikke godkjennes»* —
**cellereferanser og funksjoner kreves**, og tall i Excel og dokument **må
samsvare**. Stramme ordgrenser (150–350 ord per delspørsmål). **KI-erklæring
kreves** (kilder og bruk av kunstig intelligens oppgis, H2025). Boka viser
Excel-orientert oppsett av kontantstrømtabeller (kontantstrøm-oppstillingsmalen).

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk norsk finans-/regnskaps-
terminologi konsekvent (Berk & DeMarzo-tradisjonen tilpasset norsk skatt):

| Symbol | Betydning |
|---|---|
| $C_t$, $I$, $r$, $g$, $n$/$T$ | kontantstrøm i år $t$, investeringsutlegg, avkastningskrav/diskonteringsrente, vekstrate, antall perioder/levetid |
| NPV, IRR, PI | netto nåverdi, internrente, nåverdiindeks (profitability index) |
| KS$_{EK}$, KS$_{TK}$ | kontantstrøm til egenkapitalen, kontantstrøm til totalkapitalen |
| $s$ | skattesats (22 % i eksemplene); skatteskjold = avskrivning $\cdot s$ |
| AK, $\Delta$AK | arbeidskapital, endring i arbeidskapital |
| $r_E$, $r_D$, WACC | egenkapitalkostnad, gjeldskostnad (lånerente), vektet gjennomsnittlig kapitalkostnad |
| $E$, $D$, $V$ | markedsverdi egenkapital, markedsverdi gjeld, $V = E + D$ |
| $E(r)$, Var, SD, Kov, Korr | forventet avkastning, varians, standardavvik, kovarians, korrelasjon |
| $r_f$, $r_M$, $\beta$, $\beta_D$ | risikofri rente, markedsavkastning, beta, gjeldsbeta |
| $r_{nom}$, $r_{eff}$, $r_{real}$, $i$, $m$ | nominell rente, effektiv rente, realrente, inflasjon, antall rentetilskrivinger per år |
| DIV$_0$, DIV$_1$, $P_0$ | sist utbetalt utbytte, neste utbytte, aksjepris i dag |

Skriv rentestørrelser i prosent i teksten (9 %) og desimal i formlene (0,09).
**ALDRI opsjons-/derivatformler** (Black-Scholes, put-call-paritet) — 0
forekomster i arkivet; nevnes med én setning i Del 0 slik at studenten vet at
fraværet er trygt. Full Modigliani-Miller-formalisme dekkes bare implisitt via
EK-/TK-ekvivalensen (kap. 8.2). Multippel-verdsetting (EV/EBITDA, P/E) er
sterkt nedtonet (langt lettere enn i ECON2500) — DCF/Gordon er hovedsporet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke
frekvens); frekvensen styrer *omfanget*. `sectionNames` = den beskrivende
tittelen per del (vises som «Kapittel N: …» på bokforsiden). **`number` er
del-basert («2.3»), aldri lineær** — bokforsiden grupperer på
`number.split('.')[0]`. Prosareferanser i innholdet bruker samme form («kap. 2.3»).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, «vis utregning» og DCF-casehåndverket | 3 | — | Prioriteringsverktøy + føringshåndverk (fagets sterkeste sensorsignal) + formelark-oversikt (pugges vs. arket) + Excel-DCF-casets håndverk. Kjerne i studieguiden. |
| 1 | Tidsverdi av penger *(må pugges)* | 5 | **PERFEKT** (fundament) | Tidsverdi/renteregning 83 %; fundament for NPV, WACC, Gordon, obligasjon. Effektiv rente + nominell/reell er egne feller. Teori + drill. |
| 2 | Kontantstrøm-konstruksjon fra resultatbudsjett | 5 | **PERFEKT** (STØRST) | 83–100 %, alltid oppgave 1, 15–50 % vekt — fagets tyngste enkelttema. Saldoavskrivning/skatteskjold, arbeidskapital, sunk cost/ringvirkning/restverdi, EK vs. TK. Teori + drill. |
| 3 | Netto nåverdi og kapitalbudsjettering | 3 | **PERFEKT** | NPV 100 %. Beslutningsregel + nåverdiindeks/prosjektvalg + drill. |
| 4 | Internrente og NPV vs. IRR | 3 | **PERFEKT** | IRR + NPV-vs-IRR 83 %. Fast teori-/regnespørsmål. Teori + drill. |
| 5 | Risiko: avkastning, varians og kovarians *(formelark)* | 3 | KUNNE | Porteføljematematikken (formelark). Forventning/varians/SD/kovarians + systematisk vs. usystematisk risiko. |
| 6 | Porteføljeteori og diversifisering *(formelark)* | 2 | KUNNE | Effisient front, markedsportefølje, MVP, diversifisering (33–50 %, opptil 35 % vekt når det kommer). |
| 7 | CAPM, beta og verdipapirlinjen | 3 | **PERFEKT** | 83–100 %. Beta (formelark) → CAPM (pugges!) → SML/over-underprising. Ofte flervalg. Teori + drill. |
| 8 | WACC og kapitalkostnad: EK-metode vs. TK-metode | 3 | **PERFEKT** | 83 %, 30 % vekt i case. WACC med markedsverdivekter + ekvivalensbetingelsen (konstant gjeldsandel). Teori + drill. |
| 9 | Aksje- og obligasjonsprising + verdsettingsdrøfting | 3 | KUNNE / KJENNE | Gordon (67 %, pugges) + obligasjonsprising (33 %, WACC-komponent) + ESG/grunnrenteskatt-drøfting (case, 50 %). |
| 10 | Eksamenstrening | 5 | — | Strategi/formelark-oversikt + DCF-case-mal (gjennomgående tråd) + 3 komplette skoleeksamener (regning + flervalg, 3 t, rentetabeller). |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som
studentens sjekkliste):
`A` kontantstrøm-konstruksjon fra resultatbudsjett → KS$_{EK}$/KS$_{TK}$ ·
`B` netto nåverdi (NPV) og lønnsomhetskonklusjon ·
`C` internrente (IRR) + NPV-vs-IRR ·
`D` tidsverdi/renteregning (annuitet, sparekonto, effektiv rente, nominell/reell) ·
`E` CAPM, beta og verdipapirlinjen (SML) ·
`F` WACC + EK-metode vs. TK-metode ·
`G` Gordons vekstmodell / aksjeverdsetting ·
`H` porteføljeteori og risiko: varians/kovarians/diversifisering (formelark) ·
`I` ESG/bærekraft/grunnrenteskatt-drøfting (case) ·
`J` flervalg (multiple choice, straffscoring) ·
`K` obligasjonsprising (kupong, pålydende, effektiv rente).

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har tre kapitler, ikke ett.** DNA legger opp til ett eksamenskart.
   BØK 3423 får i tillegg kap. 0.2 (**«vis utregning»-håndverk + formelark-
   oversikt** — fagets sterkeste enkeltsignal og pugges-vs-arket-skillet som
   resten refererer til) og kap. 0.3 (**Excel-DCF-casehåndverket** — den ene
   vurderingskomponenten på 40 % er et Excel-case, som krever eget håndverk:
   kontantstrøm-oppstillingsmal, cellereferanser, Excel↔dokument-samsvar,
   ordgrenser, KI-erklæring). Å etablere føringsstandard, formelark-skille og
   case-mal tidlig gjør resten billigere.
2. **Del 2 (kontantstrøm-konstruksjon) er bokas STØRSTE del og ligger tidlig,
   ikke der «verdsettelse» vanligvis ligger.** Grunnen er ren frekvens: dette er
   fagets tyngste og hyppigste tema (oppgave 1 i nesten hvert skoleeksamenssett,
   opptil 50 % vekt) og der flest poeng tapes (sunk cost, arbeidskapital,
   EK/TK-forveksling). Den får 5 kapitler inkl. eget drillkapittel, plassert
   rett etter tidsverdi-fundamentet fordi NPV/IRR (Del 3–4) diskonterer nettopp
   disse kontantstrømmene. Dette skiller BØK 3423 skarpt fra ECON2500, der
   multippel-verdsetting bærer verdsettingsdelen.
3. **Drillkapitlene ligger inne i temadelene sine** (2.5, 3.3, 4.3, 7.3, 8.3),
   ikke samlet i siste del — dette er 83–100 %-gjengangersjangre som må
   automatiseres rett etter teorien. Del 10 beholder strategi/formelark-
   oversikten, **DCF-case-malen** (kryssgående — trekker på Del 1–9) og de tre
   øvingseksamenene.
4. **Egen del for porteføljeteori (Del 6) til tross for lav–moderat frekvens
   (33–50 %)**, fordi den kan komme med opptil 35 % vekt (H2023 oppgave 4) og
   fordi formelarket støtter den — den er «billig» å beherske og gir stor
   uttelling når den kommer. Holdt slank (2 kapitler).
5. **Opsjoner/derivater har egen linje i fraværsbildet, ikke eget kapittel**
   (0 forekomster) — nevnes med én setning i Del 0. **Multippel-verdsetting og
   full MM-formalisme er nedtonet** (analysens §6): MM dekkes implisitt i kap.
   8.2, multipler nevnes kort i kap. 9.1 uten eget kapittel.

Kryssbok-lenker peker på **bi-okonomi** (Matematikk for økonomer — verifisert
bygget: `bi-okonomi-4-1` Renter og renteberegning, `-4-2` Nåverdi og
fremtidsverdi, `-4-3` Annuiteter, `-4-5` Investeringsanalyse; `-2-2`/`-2-3`
andregrads-/likningssett). Lenkeform: `[tittel](/bi-okonomi/bi-okonomi-4-2)`.
**Lenk kun til disse verifiserte id-ene.**

**Den gjennomgående DCF-tråden — «Fjordvind Kraft AS».** Et fiktivt norsk
selskap innen havvind/fornybar energi introduseres i Del 1 og går igjen som
løpende eksempel: dets prosjektkontantstrømmer bygges i Del 2, diskonteres i
Del 3–4, dets beta/CAPM-krav estimeres i Del 5–7, dets WACC beregnes i Del 8,
dets aksje prises med Gordon i Del 9, og hele verdsettingen samles i
DCF-case-malen (kap. 10.2). Forfatteren skal gjenbruke dette selskapet (med nye,
konsistente tall per kapittel) slik at studenten ser en komplett verdsetting
vokse fram — akkurat slik gruppecaset krever.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Symbol- og formelliste-blokk (per
delkapittel, med «(på formelarket)» / «(må pugges)»-merking) og de øvrige
obligatoriske kapittel-DNA-blokkene spesifiseres i BYGGEKONTRAKT — her angis
innholdet de skal dekke.

---

### Del 0 — Eksamenskart, «vis utregning» og DCF-casehåndverket

#### Kapittel 0.1: Eksamenskartet — slik testes BØK 3423

- **id:** `bok3423-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Den todelte vurderingsformen (40 % Excel-case + 60 % skoleeksamen), de fem søylene, temafrekvensene, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 6 sett + formelark + rentetabeller. Skal gjengi: (i) **formen**: todelt fra 2024 — gruppeinnlevering BØK 34232 (40 %, Excel + dokument, grupper 1–4, verdsettings-/DCF-case rundt ett selskap) + individuell skriftlig skoleeksamen BØK 34233 (60 %, regning + flervalg, 3 t, formelark + kalkulator + rentetabeller); historikk kort (t.o.m. H2023 var 100 % individuell, BØK 34231). (ii) **temafrekvens-tabellen** (av 6 sett): kontantstrøm-konstruksjon 83–100 %, NPV 100 %, CAPM/beta/SML 83–100 %, IRR + NPV-vs-IRR 83 %, WACC/EK-TK 83 %, tidsverdi/effektiv rente 83 %, systematisk/usystematisk risiko 67–83 %, Gordon 67 %, ESG-drøfting 50 % (kun case), nominell/reell 50 %, porteføljeteori 33–50 %, obligasjon 33 %, PI 17 %, opsjoner 0 %. (iii) **den faste dramaturgien** — skoleeksamen: O1 kontantstrøm fra resultatbudsjett → EK/TK, O2 tidsverdi + aksjeverdsetting (Gordon), O3 CAPM/beta/SML (ofte flervalg), O4 kort teori; case: O1 WACC (alle komponenter) → O2 relevante kontantstrømmer → O3 NPV/IRR-anbefaling → O4–5 ESG/teori-drøfting. (iv) **sensorens metaregler** (se kap. 0.2). (v) **fraværsbildet** — én setning: opsjoner/derivater, full MM-formalisme og tung multippel-verdsetting forekommer aldri/sjelden; studenten kan trygt nedprioritere dem. (vi) karakterskillene (E/C-D/A-B).
- **Forkunnskaper:** ingen. Ingen symboler av betydning (metakapittel) — kort formelliste kan utelates.
- **Innholdskontrakt:** Sjangerkatalogen A–K presenteres som studentens sjekkliste med typisk plassering og vekt. Karakterskillene (utledet, merk `(verifiser)`): **bestått (E)** = riktig kontantstrømoppsett på hovedpostene, korrekt NPV-fortegn + konklusjon, riktig CAPM-innsetting; **midtsjikt (C/D)** = korrekt arbeidskapital og skatteskjold, konsistent EK-/TK-metode, riktig beta og WACC-vekting, ryddig Excel; **toppsjikt (A/B)** = ser sunk cost og ringvirkninger uten å bli minnet på det, begrunner EK-/TK-ekvivalens via konstant gjeldsandel, håndterer to-fase-Gordon og halvårsforskyvning, drøfter ESG/regulering med reell WACC-effekt og alternative perspektiver. Avslutt med **leseplan**: Del 1–4, 7, 8 = «må perfekt»; Del 5, 6, 9 = «må kunne/kjenne»; Del 10 = sluttrening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at oppgave 1 teller 40 % og du har 180 minutter — sett opp et tidsbudsjett» og «hvorfor gir et riktig NPV-tall uten oppsatt formel likevel 0 poeng?».
- **Typiske feil:** Metafeilene: bruke like mye tid på en 10 %-oppgave som på en 40 %-oppgave; hoppe over konklusjonen i regneoppgaver; tro at kalkulatorsvaret alene gir uttelling; forsømme flervalgs-straffscoringsstrategien.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 0.2: «Vis all utregning» — føringshåndverk og formelarket (pugges vs. arket)

- **id:** `bok3423-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-0-1` · **kapitteltype:** teori (metaregel)
- **description:** Fagets to ufravikelige regler operasjonalisert: hvordan skrive ut utregningen slik sensor krever, og nøyaktig hva som står på det utdelte formelarket vs. hva som må pugges.
- **Eksamensbelegg:** Metaregel-kapittel bygget på setningen som står på hvert skoleeksamenssett («korrekt utregning må vises»; «ingen uttelling for kalkulatortaster») og på det ni-formlers formelarket. Fagets sterkeste enkeltsignal + den viktigste strukturinnsikten. Prioritet: **PERFEKT** (bærer karakteren i alle sjangre).
- **Forkunnskaper:** ingen. **Symbol- og formelliste (collapsible):** oversikt over ALLE formlene i boka, hver merket **«(på formelarket)»** (de ni porteføljeformlene + beta) eller **«(må pugges)»** (nåverdi/annuitet/evig strøm, effektiv rente, nominell↔reell, NPV, IRR, PI, CAPM, WACC, EK-/TK-metode, Gordon, obligasjonsprising, kontantstrøm-oppsett).
- **Innholdskontrakt:** **(A) Føringsstandarden**: hvert løsningsforslag skrives som A-besvarelse — sett opp formelen eksplisitt FØR innsetting, ett steg per linje, marker sluttsvaret med **enhet** (kr/mill./%) og en **konklusjon**; kalkulatorens finansfunksjoner nevnes bare som kontroll. **Delvis uttelling** for riktig formeloppsett uten tallsvar; **følgefeil straffes lite** når metoden er riktig. To kontrastpar «samme matematikk, ulik føring» (én lav-uttellings og én full-scorings versjon, med margnotater). **(B) Formelark-oversikten** (theorem-blokk): de ni porteføljeformlene skrevet ut (forventet porteføljeavkastning to former, porteføljevarians fire former, standardavvik, kovarians↔korrelasjon, beta) — **disse trenger man IKKE pugge, men må kunne velge og bruke raskt**. **(C) Pugge-listen** (theorem-blokk): alt annet, gruppert etter del, med den eksplisitte beskjeden om at CAPM, NPV, annuitet, Gordon og WACC IKKE er på arket. **(D) Rentetabellene**: hva de fire tabellene er (sluttverdifaktor, diskonteringsfaktor, nåverdi-annuitetsfaktor, annuitetsfaktor) og hvordan de leses — men formlene er primære. **(E) Flervalgsstrategi** knyttet til straffscoring (−1 vs. 0). **(F) Konklusjonskravet**: hver regneoppgave ender i lønnsomt/ikke, kjøp/hold/selg, anbefaling.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under gir riktig terminbeløp, men ville tapt alle poengene. Pek på de to føringsmanglene (formel ikke satt opp; kun kalkulatorsvar oppgitt) og skriv den om til full uttelling.»
- **Typiske feil:** Oppgi svar uten utregning (gir 0); vise til kalkulatortaster i stedet for formel; anta at CAPM/NPV/annuitetsformelen står på arket (den gjør ikke det — pugg!); glemme enhet og konklusjon.
- **Quiz: 14 · Flashcards: 26** (føringsregler, formelark-innhold, pugge-listen, rentetabeller — flashcard-gull)

#### Kapittel 0.3: Excel-DCF-caset — håndverket i gruppeinnleveringen

- **id:** `bok3423-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `bok3423-bi-0-2` · **kapitteltype:** teori (håndverk)
- **description:** Hvordan gruppeinnleveringen (40 %) faktisk bygges: Excel-oppsettet med formler og cellereferanser, kontantstrøm-oppstillingsmalen, samsvar mellom Excel og dokument, ordgrenser og KI-erklæring.
- **Eksamensbelegg:** Bygget på de tre casene (VROOM, BioCycle, MOWI). Caset er ett sammenhengende verdsettingsoppdrag: WACC → relevante kontantstrømmer → NPV/IRR-anbefaling → ESG/teori-drøfting. Prioritet: **PERFEKT** (40 % av karakteren) — men håndverk, ikke ny finansteori.
- **Forkunnskaper:** Bygger på kap. 0.2. **Symbol- og formelliste:** den generiske **kontantstrøm-oppstillingsmalen** (resultatbudsjett → KS$_{EK}$/KS$_{TK}$) presenteres her som mal (fylles med teori i Del 2).
- **Innholdskontrakt:** **(A) Casearkitekturen**: fast oppgave-rekke (O1 WACC med alle komponenter fra utleverte markedsdata → O2 relevante kontantstrømmer EK/TK etter skatt → O3 NPV/IRR-konklusjon og anbefaling → O4–5 ESG/teori). **(B) Excel-kravet**: filen må inneholde **formler og cellereferanser** (ren tallfil underkjennes); tall i Excel og dokument **må samsvare**; bygg tabellene slik at endring i én forutsetning (rente, vekst) forplanter seg. **(C) Kontantstrøm-oppstillingsmalen** (theorem-/mal-blokk, gjenbrukes i hele Del 2): rader = inntekter − driftskostnader − saldoavskrivning = EBIT; − skatt; + avskrivning (tilbake); − Δ arbeidskapital; − investering; (± lån/avdrag/renter etter skatt for KS$_{EK}$); = kontantstrøm per år. **(D) Dokumentkravene**: skill oppgaveopplysninger fra egne forutsetninger; respekter ordgrensene (150–350 ord); oppgi kilder og **KI-erklæring**. **(E) Konsulentrollen**: anbefaling kreves, alternative perspektiver premieres.
- **Oppgavesjangre:** Håndverk (forbereder A, F, B, C, I). Mønstereksempel: «Sett opp skallet til en DCF-Excel for Fjordvind Kraft AS: hvilke faner/rader trenger du for å gå fra resultatbudsjett til KS$_{TK}$ og videre til NPV, og hvilke celler må være formler (ikke tall)?»
- **Typiske feil:** Excel uten formler (kun inntastede tall) — underkjennes; sprikende tall mellom Excel og dokument; blande oppgaveforutsetninger og egne antakelser; sprenge ordgrensen; glemme KI-erklæringen.
- **Quiz: 12 · Flashcards: 16**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Tidsverdi av penger *(prioritet: PERFEKT — fundament, må pugges)*

#### Kapittel 1.1: Nåverdi, sluttverdi og evig strøm

- **id:** `bok3423-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-0-2` · **kapitteltype:** teori
- **description:** Å flytte kroner i tid: sluttverdi og nåverdi av enkeltbeløp og flerperiodiske strømmer, og nåverdien av en evig strøm — grunnlaget for all diskontering i faget.
- **Eksamensbelegg:** Fundament under NPV (100 %), WACC og Gordon. Flerperiodisk nåverdi og evig strøm $C/r$ forekommer direkte (uendelig levetid i VROOM/case). Formlene **må pugges** (ikke på arket). Prioritet: **PERFEKT** (fundament).
- **Forkunnskaper:** Bygger på [Renter og renteberegning](/bi-okonomi/bi-okonomi-4-1) og [Nåverdi og fremtidsverdi](/bi-okonomi/bi-okonomi-4-2) i Matematikk for økonomer. **Symbol- og formelliste:** $C_t$, $r$, $t$, $n$, nåverdi, sluttverdi — alle **(må pugges)**; diskonteringsfaktor $1/(1+r)^t$ finnes også som **rentetabell**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG SETTES OPP: sluttverdi $C(1+r)^t$; nåverdi av enkeltbeløp $\dfrac{C_t}{(1+r)^t}$; flerperiodisk nåverdi $\sum_{t=1}^{n}\dfrac{C_t}{(1+r)^t}$; **evig strøm** $\text{NV}=\dfrac{C}{r}$ (og intuisjon: hvorfor uendelig mange ledd gir en endelig sum). Diskonteringsfaktor kan slås opp i rentetabell. **Regnekjede (nyskrevet, «Fjordvind Kraft AS»):** et delprosjekt gir 30, 45 og 70 mill. kr i år 1–3, avkastningskrav 9 %. $\text{NV}=30/1{,}09+45/1{,}09^2+70/1{,}09^3=27{,}5+37{,}9+54{,}0=119{,}4$ mill. kr. Evig-eksempel: en tomteleie på 4 mill. kr per år i det uendelige, krav 8 %: $\text{NV}=4/0{,}08=50$ mill. kr.
- **Oppgavesjangre:** D. Mønstereksempel: «Fjordvind Kraft mottar 20, 35 og 50 mill. kr i årene 1–3. Avkastningskravet er 10 %. Sett opp formelen eksplisitt og regn ut nåverdien i mill. kr.»
- **Typiske feil:** Diskontere med feil eksponent (glemme at år 3 diskonteres med $(1+r)^3$); bruke $C/r$ på en endelig strøm; oppgi svar uten enhet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.2: Annuiteter, annuitetsfaktor og rentetabellene

- **id:** `bok3423-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-1-1` · **kapitteltype:** teori
- **description:** Nåverdien av en endelig, konstant strøm (annuitet), serie- og annuitetslån, og hvordan man bruker nåverdi-annuitetsfaktoren og annuitetsfaktoren fra rentetabellene.
- **Eksamensbelegg:** Annuitet/sparekonto i tidsverdi-sjangeren (83 %). Serielån/annuitetslån er innbakt i kontantstrømoppgavene (renter + avdrag i KS$_{EK}$, Del 2). Formlene **må pugges** (men annuitetsfaktorene finnes i tabell). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1 og [Annuiteter](/bi-okonomi/bi-okonomi-4-3). **Symbol- og formelliste:** $C$, $r$, $n$, annuitetsfaktor, restgjeld — **(må pugges)**; nåverdi-annuitetsfaktor og annuitetsfaktor finnes som **rentetabell**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: nåverdien av en annuitet $\text{NV}=\dfrac{C}{r}\left(1-\dfrac{1}{(1+r)^n}\right)$ (utledet som differansen mellom to evige strømmer); terminbeløp (annuitetslån) $C=\dfrac{K_0 \cdot r}{1-(1+r)^{-n}}$; **serielån vs. annuitetslån** (serielån: like avdrag, fallende renter → fallende termin; annuitetslån: lik termin, stigende avdrag); renter i én termin $=$ restgjeld $\cdot r$, avdrag $=$ termin $-$ renter. Lesning av nåverdi-annuitetsfaktoren i rentetabell. **Regnekjede (nyskrevet):** en maskin gir 12 mill. kr i besparelse årlig i 8 år, krav 7 %: $\text{NV}=(12/0{,}07)(1-1{,}07^{-8})=171{,}43\cdot(1-0{,}5820)=171{,}43\cdot0{,}4180=71{,}7$ mill. kr.
- **Oppgavesjangre:** D. Mønstereksempel: «Et lån på 5 mill. kr skal betales som annuitetslån over 5 år med 6 % rente. Regn ut det årlige terminbeløpet, og vis rente og avdrag i første termin.»
- **Typiske feil:** Bruke feil $n$; forveksle serie- og annuitetslån; regne renter av opprinnelig lån hvert år i stedet for av restgjeld; regnefeil i $(1+r)^{-n}$-leddet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.3: Effektiv vs. nominell rente og rentesammensetning

- **id:** `bok3423-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-1-2` · **kapitteltype:** teori
- **description:** Når renten tilskrives flere ganger i året: forskjellen på nominell og effektiv rente, og hvorfor effektiv rente må brukes ved underårlig rentesammensetning.
- **Eksamensbelegg:** Effektiv rente testes direkte (H2023: halvårlig) og som WACC-komponent i case (serielån annenhver måned, annuitetslån kvartalsvis). Delvis uttelling for riktig formel eksplisitt her (H2023). Formelen **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.2. **Symbol- og formelliste:** $r_{nom}$, $r_{eff}$, $m$ (antall tilskrivinger per år) — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: effektiv rente $r_{eff}=\left(1+\dfrac{r_{nom}}{m}\right)^m-1$; periodrente $=r_{nom}/m$; sammenhengen mellom oppgitt nominell årsrente og faktisk avkastning. Hvorfor effektiv rente må brukes ved diskontering av strømmer med underårlig frekvens. **Regnekjede (nyskrevet):** 8 % nominell årsrente med **kvartalsvis** tilskriving: $r_{eff}=(1+0{,}08/4)^4-1=(1{,}02)^4-1=0{,}0824=8{,}24\,\%$. Halvårlig: $(1+0{,}08/2)^2-1=8{,}16\,\%$.
- **Oppgavesjangre:** D. Mønstereksempel: «En bank oppgir 9 % nominell rente med månedlig rentetilskriving. Regn ut den effektive årsrenten, og forklar hvorfor den er høyere enn 9 %.»
- **Typiske feil:** Bruke nominell rente der effektiv kreves (halvårlig/kvartalsvis/månedlig); bruke $m$ feil; dele på $m$ men glemme opphøyd i $m$.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.4: Nominell vs. reell kontantstrøm og sparekonto

- **id:** `bok3423-bi-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-1-3` · **kapitteltype:** teori
- **description:** Inflasjonsjustering: sammenhengen mellom nominell rente, realrente og inflasjon, konsistensregelen (diskontér nominelt med nominelt, reelt med reelt), og sparekonto med innskudd/uttak underveis.
- **Eksamensbelegg:** Nominell/reell 50 % (V2024, VROOM); sparekonto med innskudd/uttak (H2023). Konsistensregelen er en fast felle. Formelen **må pugges**. Prioritet: **PERFEKT/KUNNE**.
- **Forkunnskaper:** Bygger på kap. 1.3. **Symbol- og formelliste:** $r_{nom}$, $r_{real}$, $i$ (inflasjon) — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: Fisher-relasjonen $(1+r_{nom})=(1+r_{real})(1+i)$, tilnærmet $r_{real}\approx r_{nom}-i$. **Konsistensregelen:** en nominell kontantstrøm diskonteres med nominell rente; en reell kontantstrøm med realrente — aldri blandes. Sparekonto: saldo bygges/tappes år for år med rentetilskriving; maksimalt uttaksbeløp gitt ønsket sluttsaldo. **Regnekjede (nyskrevet):** nominell rente 7 %, inflasjon 2,5 %: $r_{real}=1{,}07/1{,}025-1=0{,}0439=4{,}39\,\%$. En reell strøm på 10 mill./år i 3 år diskonteres med 4,39 %, ikke 7 %.
- **Oppgavesjangre:** D. Mønstereksempel: «Et prosjekt gir 8 mill. kr per år i faste (reelle) priser i 4 år. Nominell rente er 8 %, inflasjon 3 %. Regn ut realrenten og nåverdien av den reelle strømmen.»
- **Typiske feil:** Diskontere en reell strøm med nominell rente (eller omvendt) — bryter konsistensregelen; bruke $r_{nom}-i$ som eksakt i stedet for tilnærmet; regnefeil i saldo-oppbyggingen på sparekonto.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.5: Drill — tidsverdi og renteregning

- **id:** `bok3423-bi-1-5` · **number:** 1.5 · **estimatedMinutes:** 75 · **prerequisites:** `bok3423-bi-1-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele tidsverdi-repertoaret: velg riktig formel til hver strømtype, sett den opp eksplisitt, regn og konkludér.
- **Eksamensbelegg:** Dekker sjanger D (83 %). Sensorregelen «formeloppsett gir delvis uttelling» og «vis utregning» drilles eksplisitt. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1–1.4. **Symbol- og formelliste:** hele tidsverdi-apparatet, alt **(må pugges)** unntatt tabellfaktorene.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) klassifiser strømmen (enkeltbeløp / evig / annuitet / voksende / underårlig / nominell vs. reell); 2) velg riktig formel og sett den opp; 3) sett inn tall; 4) svar med enhet; 5) konkludér. **Gjennomregnet eksamens-oppgave** (sammensatt a–e) med sensor-margnotater om hvor delpoengene sitter (formeloppsett, innsetting, enhet). 12–15 nyskrevne oppgaver som roterer hele katalogen: annuitet, sparekonto, effektiv rente (halvårlig/kvartalsvis), nominell vs. reell, evig strøm, terminbeløp. Alle med `solution` + `hints`.
- **Oppgavesjangre:** D. Mønstereksempel (full deloppgave-kjede): «(a) Regn effektiv rente av 8 % nominell med kvartalsvis tilskriving. (b) Regn nåverdien av 10 mill./år i 6 år med den effektive renten. (c) Realrenten om inflasjonen er 2 % — og nåverdien av samme strøm hvis den er oppgitt reelt.»
- **Typiske feil:** Hele §1-repertoaret samlet: nominell der effektiv kreves, reell diskontert med nominell, feil $n$, manglende enhet/konklusjon.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A nåverdi/sluttverdi/evig strøm, D; 1.B annuitet + serie-/annuitetslån, D; 1.C effektiv rente + nominell/reell, D; 1.D blandet tidsverdi på eksamensnivå med konklusjon, D).

---

### Del 2 — Kontantstrøm-konstruksjon fra resultatbudsjett *(prioritet: PERFEKT — bokas STØRSTE del)*

#### Kapittel 2.1: Fra resultatbudsjett til kontantstrøm — saldoavskrivning og skatteskjold

- **id:** `bok3423-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `bok3423-bi-1-1` · **kapitteltype:** teori
- **description:** Kjernehåndverket: gå fra et oppsatt resultatbudsjett (inntekter − kostnader − avskrivning − renter = resultat) til fri kontantstrøm, og forstå avskrivningen som en ikke-kontant post som likevel gir et skatteskjold.
- **Eksamensbelegg:** Sjanger A — oppgave 1 i nesten hvert skoleeksamenssett (83–100 %), 15–50 % vekt, og oppgave 2 i case (25 %). Fagets tyngste enkelttema. Oppsettet **må pugges** (ikke på arket). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1. **Symbol- og formelliste:** EBIT, saldoavskrivning, sats, $s$ (skattesats), skatteskjold $=$ avskrivning $\cdot s$ — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **kontantstrøm-oppstillingsmalen** (fra kap. 0.3) fylt med teori. Steg: inntekter − driftskostnader − **saldoavskrivning** = EBIT; skatt $=$ EBIT $\cdot s$ (22 %); kontantstrøm $=$ EBIT $-$ skatt $+$ **avskrivning tilbake** $-$ investeringer. **Poenget:** avskrivning er ikke en utbetaling — den legges tilbake — men den reduserer skatten, så den gir et **skatteskjold** $=$ avskrivning $\cdot s$. **Saldoavskrivning** (sats 20–30 %): avskrivningsgrunnlaget faller hvert år (degressivt); restsaldo ved slutt. **Regnekjede (nyskrevet, Fjordvind Kraft):** en turbin koster 4 000 (30 % saldo). År 1 avskrivning $=0{,}30\cdot4000=1200$; skatteskjold $=1200\cdot0{,}22=264$. År 2 grunnlag $=4000-1200=2800$, avskrivning $=840$; osv. Inntekt 2 500, driftskostnad 900, år 1: EBIT $=2500-900-1200=400$; skatt $=88$; kontantstrøm $=400-88+1200=1512$.
- **Oppgavesjangre:** A. Mønstereksempel: «Fjordvind Kraft kjøper en maskin til 3 000 (25 % saldoavskrivning). Inntekter 2 000, driftskostnader 700, skattesats 22 %. Sett opp kontantstrømmen for år 1 og 2, og vis skatteskjoldet fra avskrivningen.»
- **Typiske feil:** Behandle avskrivning som en kontantutbetaling i stedet for kun å bruke skatteskjoldet; bruke lineær avskrivning der saldo (degressiv) kreves; glemme å legge avskrivningen tilbake; feil skattegrunnlag.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.2: Arbeidskapital — binding og reversering

- **id:** `bok3423-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-2-1` · **kapitteltype:** teori
- **description:** Hvordan endringer i arbeidskapital binder og frigjør kontanter — den fella som oftest kaster bort poeng i oppgave 1.
- **Eksamensbelegg:** Fast innbakt felle i sjanger A (V2024, V2025, VROOM). Arbeidskapital $=$ 10–40 % av **neste års** inntekter; oppbygging binder, sluttår frigjør. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1. **Symbol- og formelliste:** AK (arbeidskapital), $\Delta$AK (endring) — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: arbeidskapital $=$ andel (f.eks. 15 %) $\cdot$ **neste års** inntekter (bindes ved *inngangen* til året); **en økning i AK er en negativ kontantstrøm** (binder kapital), en reduksjon er positiv; **hele AK reverseres (frigjøres) i siste år**. Timing er kritisk: AK i år $t$ styres av inntekten i år $t+1$. **Regnekjede (nyskrevet):** AK $=15\,\%$ av neste års inntekt; inntekter 2 000, 3 000, 3 000 (siste år). År 0: AK $=0{,}15\cdot2000=300$ (bindes, $-300$). År 1: AK $=0{,}15\cdot3000=450$, $\Delta$AK $=+150$ ($-150$). År 2: AK $=0{,}15\cdot3000=450$, $\Delta$AK $=0$. Sluttår: hele AK $=450$ frigjøres ($+450$).
- **Oppgavesjangre:** A. Mønstereksempel: «Et prosjekt binder arbeidskapital på 20 % av neste års inntekter. Inntektene er 1 500, 2 500 og 2 500 i årene 1–3. Sett opp arbeidskapital-bindingen år for år, inkludert reversering i siste år.»
- **Typiske feil:** Glemme å binde arbeidskapital ved oppbygging; glemme å reversere ved slutt; feil år (bruke inneværende års inntekt i stedet for neste års); behandle nivået i stedet for endringen som kontantstrøm.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: Sunk cost, ringvirkninger og restverdi

- **id:** `bok3423-bi-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-2-2` · **kapitteltype:** teori
- **description:** Hvilke poster som skal og ikke skal med i en beslutningsrelevant kontantstrøm: allerede betalte kostnader (ut), ringvirkninger på annet salg (inn), og restverdi ved prosjektslutt.
- **Eksamensbelegg:** Sunk cost er en klassisk A/B-differensierende felle (V2024, V2025, VROOM); ringvirkning/kannibalisering og restverdi like fast. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1. **Symbol- og formelliste:** sunk cost, ringvirkning/kannibalisering, restverdi/skrapverdi, gevinst-/tapsskatt — **(må pugges, begreper)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **sunk cost** — en allerede fullført/betalt kostnad (f.eks. en gjennomført markedsundersøkelse) er *ikke* beslutningsrelevant og skal **ikke** med; men en *fremtidig* utbetaling som forfaller i prosjektperioden **skal** med (les nøye — timingfellen). **Ringvirkning/kannibalisering:** et nytt produkt som reduserer salget av et eksisterende — differansen (tapt dekningsbidrag) er en relevant negativ kontantstrøm. **Restverdi/skrapverdi** ved slutt: salgsbeløp pluss/minus skatt på gevinst/tap mot skattemessig restsaldo. **Regnekjede (nyskrevet):** en markedsundersøkelse på 100 er allerede betalt → holdes utenfor. Nytt produkt spiser 200/år av et eksisterende produkts kontantstrøm → $-200$/år. Restverdi 500 ved slutt, skattemessig restsaldo 300 → gevinst 200, skatt $0{,}22\cdot200=44$, netto restverdi $500-44=456$.
- **Oppgavesjangre:** A. Mønstereksempel: «En bedrift har allerede brukt 150 på en utredning. Det nye produktet reduserer salget av et eksisterende produkt med 300 per år og har en skrapverdi på 400 (restsaldo 250) i siste år. Hvilke av disse skal med i kontantstrømmen, og med hvilket fortegn?»
- **Typiske feil:** Ta med sunk cost (allerede betalt utredning); motsatt: utelate en *fremtidig* utbetaling som tilfeldigvis gjelder en undersøkelse; glemme ringvirkningen; glemme skatt på restverdi-gevinst.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.4: EK-metode vs. TK-metode — to kontantstrømmer

- **id:** `bok3423-bi-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `bok3423-bi-2-3` · **kapitteltype:** teori
- **description:** De to måtene å sette opp kontantstrømmen på: til totalkapitalen (uten finansposter, diskonteres med WACC) og til egenkapitalen (med renter etter skatt og avdrag, diskonteres med $r_E$).
- **Eksamensbelegg:** Sjanger A/F — EK vs. TK er fast (V2024, VROOM, V2022) og bindeledd mot Del 8. Diskonteringskoblingen (KS$_{TK}$↔WACC, KS$_{EK}$↔$r_E$) må sitte. Oppsettet **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 2.1–2.3 og kap. 1.2 (lån). **Symbol- og formelliste:** KS$_{TK}$, KS$_{EK}$, renter etter skatt $=$ renter $\cdot(1-s)$, avdrag, nye låneopptak — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: **KS$_{TK}$ (totalkapital)** holder alle finansposter *utenfor* — ingen renter, ingen avdrag, ingen låneopptak — fordi finansieringen fanges opp via WACC ved diskontering. **KS$_{EK}$ (egenkapital)** starter fra KS$_{TK}$ og trekker **renter etter skatt** ($=$ renter $\cdot(1-s)$, siden renteutgiften gir skattefradrag) og **avdrag**, og legger til **nye låneopptak**. **Diskonteringsregelen:** KS$_{TK}$ diskonteres med WACC; KS$_{EK}$ med $r_E$ — aldri byttet om (bro til kap. 8.2). **Regnekjede (nyskrevet):** KS$_{TK}$ år 1 $=1512$. Lån 2 000 til 5 % rente, serielån med avdrag 400/år: renter $=100$, etter skatt $=100\cdot0{,}78=78$; KS$_{EK}=1512-78-400=1034$ (pluss evt. nytt låneopptak).
- **Oppgavesjangre:** A/F. Mønstereksempel: «Gitt en kontantstrøm til totalkapitalen på 1 200 i år 1 og et serielån på 3 000 (6 % rente, avdrag 600/år, skatt 22 %). Regn ut kontantstrømmen til egenkapitalen, og forklar hvorfor renter *etter skatt* brukes.»
- **Typiske feil:** Ta med renter/avdrag i KS$_{TK}$ (skal ut); diskontere KS$_{EK}$ med WACC (skal være $r_E$); bruke renter *før* skatt i KS$_{EK}$; glemme nye låneopptak.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.5: Drill — kontantstrøm-konstruksjon (full oppgave 1)

- **id:** `bok3423-bi-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `bok3423-bi-2-4` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1: fra et komplett resultatbudsjett med alle feller til ferdig KS$_{EK}$/KS$_{TK}$ år for år, i Excel-orientert oppsett.
- **Eksamensbelegg:** Dekker sjanger A (83–100 %, alltid oppgave 1, opptil 50 %). Alle fem fellene (avskrivning/skatteskjold, arbeidskapital, sunk cost, ringvirkning, restverdi) samlet + EK/TK-valg. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på hele Del 2. **Symbol- og formelliste:** hele kontantstrøm-apparatet, **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) sett opp resultatbudsjettet rad for rad (kontantstrøm-oppstillingsmalen); 2) skill ut sunk cost (ut) og fremtidige relevante utbetalinger (inn); 3) saldoavskrivning + skatteskjold år for år; 4) arbeidskapital-binding/reversering (neste års inntekt); 5) ringvirkning; 6) restverdi med skatt; 7) velg KS$_{TK}$ eller KS$_{EK}$ (finansposter?). **Gjennomregnet eksamenscase** (Fjordvind Kraft, 3–4 år) med sensor-margnotater om hvor delpoengene sitter og hvilke feller som skiller A fra C. 10–15 nyskrevne oppgaver med roterende fellekombinasjoner, alle med `solution` + `hints`. Vis Excel-oppsettet (celler/formler).
- **Oppgavesjangre:** A. Mønstereksempel (full oppgave): «Et 3-årsprosjekt krever en maskin til 4 000 (30 % saldo), arbeidskapital 10 % av neste års inntekter, en allerede betalt utredning på 120 (hold utenfor), og en skrapverdi på 300. Sett opp kontantstrømmen til egenkapitalen for hvert år.»
- **Typiske feil:** Hele §5-repertoaret for oppgave 1: sunk cost inne, glemt arbeidskapital-reversering, avskrivning som kontant, EK/TK-forveksling, glemt skatt på restverdi.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A saldoavskrivning + skatteskjold, A; 2.B arbeidskapital-binding/reversering, A; 2.C sunk cost + ringvirkning + restverdi, A; 2.D full oppgave-1-kjede med EK/TK på eksamensnivå, A).

---

### Del 3 — Netto nåverdi og kapitalbudsjettering *(prioritet: PERFEKT — 100 %)*

#### Kapittel 3.1: Netto nåverdi (NPV) som beslutningsregel

- **id:** `bok3423-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-2-5` · **kapitteltype:** teori
- **description:** NPV-regelen: diskontér kontantstrømmen med riktig avkastningskrav, invester når NPV > 0, og avslutt alltid med en lønnsomhetskonklusjon.
- **Eksamensbelegg:** NPV i **samtlige sett** (100 %), 10–35 % skoleeksamen / 15 % case (oppgave 3). Formelen **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 1.1 og hele Del 2 og [Investeringsanalyse](/bi-okonomi/bi-okonomi-4-5). **Symbol- og formelliste:** NPV, $I$, $C_t$, $r$, $n$ — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG BEGRUNNES: $\text{NPV}=-I+\sum_{t=1}^{n}\dfrac{C_t}{(1+r)^t}$; beslutningsregelen (NPV > 0 ⇒ gjennomfør; < 0 ⇒ forkast). NPV måler verdiskaping i dagens kroner. **Riktig $r$:** KS$_{TK}$ diskonteres med WACC, KS$_{EK}$ med $r_E$ (bro til Del 8). Ved uendelig levetid: $-I+C/r$. **Konklusjonskravet:** hver NPV-oppgave ender i en lønnsomhetskonklusjon. Hvorfor kontantstrøm — ikke regnskapsresultat — diskonteres (fast teorispørsmål). **Regnekjede (nyskrevet, Fjordvind Kraft):** utlegg 1 500, KS$_{TK}$ 600, 700, 800 i år 1–3, WACC 11 %: $\text{NPV}=-1500+600/1{,}11+700/1{,}11^2+800/1{,}11^3=-1500+540{,}5+568{,}1+584{,}9=193{,}5$ mill. kr $>0$ ⇒ lønnsomt.
- **Oppgavesjangre:** B. Mønstereksempel: «Fjordvind Kraft vurderer et anlegg som koster 1 000 mill. og gir kontantstrømmer til totalkapitalen på 350, 400 og 500 mill. i år 1–3. WACC er 10 %. Regn ut NPV og konkludér.»
- **Typiske feil:** Diskontere investeringsutlegget (det er allerede i dag); bruke $r_E$ på KS$_{TK}$ (skal være WACC); glemme lønnsomhetskonklusjonen; diskontere regnskapsresultat i stedet for kontantstrøm.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.2: Nåverdiindeks og valg mellom prosjekter

- **id:** `bok3423-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-3-1` · **kapitteltype:** teori
- **description:** Nåverdiindeks (PI) som lønnsomhet per investert krone, valg mellom gjensidig utelukkende prosjekter (høyest NPV), og kapitalrasjonering.
- **Eksamensbelegg:** PI 17 % (V2024 flervalg); gjensidig utelukkende og prosjektvalg jevnlig. Formelen **må pugges**. Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 3.1. **Symbol- og formelliste:** PI (nåverdiindeks), gjensidig utelukkende, kapitalrasjonering — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: nåverdiindeks $\text{PI}=\dfrac{\text{nåverdi av innbetalinger}}{\text{investering}}$; PI > 1 ⟺ NPV > 0. **Prosjektvalg:** ved gjensidig utelukkende prosjekter velges **høyest NPV** (ikke høyest PI eller IRR); PI er nyttig ved **kapitalrasjonering** (begrenset budsjett — rangér etter PI). **Regnekjede (nyskrevet):** investering 800, nåverdi av innbetalinger 1 000: $\text{PI}=1000/800=1{,}25>1$ ⇒ lønnsomt. To gjensidig utelukkende: A (NPV 120), B (NPV 90) → velg A selv om B har høyere PI.
- **Oppgavesjangre:** B/J. Mønstereksempel: «To prosjekter: A koster 500 med nåverdi 650; B koster 300 med nåverdi 420. (a) Regn PI for begge. (b) Hvis de er gjensidig utelukkende og du ikke har budsjettbegrensning, hvilket velger du?»
- **Typiske feil:** Rangere gjensidig utelukkende prosjekter etter PI/IRR i stedet for NPV; bruke PI når det ikke er kapitalrasjonering; blande innbetalinger og nettostrøm i telleren.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 3.3: Drill — NPV og kapitalbudsjettering

- **id:** `bok3423-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `bok3423-bi-3-2` · **kapitteltype:** drill
- **description:** Sjangerdrill fra ferdig kontantstrøm til NPV-konklusjon, med riktig diskonteringsrente (WACC vs. $r_E$) og prosjektvalg.
- **Eksamensbelegg:** Dekker sjanger B (100 %) + koblingen til Del 2. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på Del 2–3. **Symbol- og formelliste:** NPV, PI, WACC, $r_E$ — **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) identifiser om strømmen er KS$_{TK}$ (→ WACC) eller KS$_{EK}$ (→ $r_E$); 2) sett opp NPV-formelen; 3) diskontér ledd for ledd (eller evig/annuitet); 4) svar med enhet; 5) konkludér; 6) ved valg: høyest NPV. **Gjennomregnet eksamenscase** med sensor-margnotater. 10–15 nyskrevne oppgaver: NPV av endelig strøm, uendelig levetid, EK- og TK-varianter, PI, gjensidig utelukkende. Alle med `solution` + `hints`.
- **Oppgavesjangre:** B. Mønstereksempel (full kjede): «(a) En KS$_{TK}$ er 400/år i 5 år, WACC 9 %, utlegg 1 300 — regn NPV. (b) Regn PI. (c) Et alternativt prosjekt har NPV 200 og koster 1 000 — hvilket velger du ved gjensidig utelukkende?»
- **Typiske feil:** Feil diskonteringsrente (WACC vs. $r_E$); manglende konklusjon; PI-rangering av gjensidig utelukkende prosjekter.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A NPV av endelig strøm med konklusjon, B; 3.B NPV ved uendelig levetid + riktig $r$, B; 3.C PI og prosjektvalg, B; 3.D full NPV-kjede fra kontantstrøm på eksamensnivå, A+B).

---

### Del 4 — Internrente og NPV vs. IRR *(prioritet: PERFEKT — 83 %)*

#### Kapittel 4.1: Internrenten (IRR)

- **id:** `bok3423-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-3-1` · **kapitteltype:** teori
- **description:** Internrenten som renta der NPV = 0 — hvordan den regnes analytisk for enkle strømmer og ved prøving/interpolasjon ellers.
- **Eksamensbelegg:** IRR i sjanger C hvert skoleeksamenssett (83 %). Analytisk IRR for evig strøm og enperiode. Definisjonen **må pugges**. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 3.1 og [Andregradslikninger](/bi-okonomi/bi-okonomi-2-2). **Symbol- og formelliste:** IRR, NPV, $C$, $I$ — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG UTLEDES: IRR $=$ renta som gir $\text{NPV}=0$. **Evig strøm:** $-I+\dfrac{C}{\text{IRR}}=0\Rightarrow\text{IRR}=\dfrac{C}{I}$. **Enperiode:** $\text{IRR}=\dfrac{C_1}{I}-1$. Flerperiodisk: finnes ved prøving/interpolasjon (og kalkulator — men vis oppsettet). **NPV-profilen:** NPV som fallende funksjon av $r$; IRR er skjæringen med null-aksen (figur i A-besvarelse). **Regnekjede (nyskrevet):** utlegg 900, evig strøm 135: $\text{IRR}=135/900=15\,\%$. Enperiode: utlegg 500, innbetaling 560 om ett år: $\text{IRR}=560/500-1=12\,\%$.
- **Oppgavesjangre:** C. Mønstereksempel: «Et prosjekt koster 1 200 mill. og gir 180 mill. i evig årlig kontantstrøm. Regn ut internrenten, og forklar hva den betyr.»
- **Typiske feil:** Bruke $C/I$ på en endelig strøm (gjelder bare evig strøm); forveksle IRR og avkastningskrav; glemme at IRR er en renteforutsetning, ikke en kroneverdi.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.2: NPV vs. IRR — rangering, konflikter og reinvestering

- **id:** `bok3423-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-4-1` · **kapitteltype:** teori
- **description:** Koblingen NPV > 0 ⟺ IRR > avkastningskrav, når de to metodene rangerer ulikt, og IRR-metodens svakheter (skala, timing, multiple internrenter).
- **Eksamensbelegg:** NPV-vs-IRR er fast teori-/regnespørsmål (83 %; H2023, V2022). A/B-differensiator: navngi *hvilken* svakhet som gjelder. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 4.1. **Symbol- og formelliste:** IRR, NPV, kryssingsrente, gjensidig utelukkende — **(må pugges, begreper)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: **kjernekoblingen** — for et normalprosjekt gir NPV > 0 med et gitt krav ⟺ IRR > kravet, så lønnsomhet kan avgjøres fra NPV-fortegnet *uten* å regne IRR. Ved **gjensidig utelukkende** prosjekter velges høyest NPV, ikke høyest IRR. **IRR-metodens svakheter:** (1) ulik **skala** (høy IRR, lav NPV i kroner); (2) ulik **timing** (IRR antar reinvestering til IRR-satsen → kryssende NPV-profiler); (3) **multiple internrenter** ved fortegnsskift i kontantstrømmen. **Regnekjede (nyskrevet):** Prosjekt Liten (IRR 28 %, NPV 40) vs. Prosjekt Stor (IRR 16 %, NPV 110), samme krav og levetid → velg Stor (høyest NPV); IRR villeder pga. **ulik skala**.
- **Oppgavesjangre:** C. Mønstereksempel: «To gjensidig utelukkende prosjekter har samme kostnad, men A betaler mest tidlig og B mest sent. Forklar hvorfor IRR-metoden kan gi feil rangering, og hvilken av de tre svakhetene som gjelder her.»
- **Typiske feil:** Snu koblingen (påstå NPV < 0 når IRR > krav); rangere gjensidig utelukkende etter IRR; ikke navngi hvilken svakhet som gjelder; glemme at multiple IRR bare oppstår ved fortegnsskift.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.3: Drill — IRR og investeringsvalg

- **id:** `bok3423-bi-4-3` · **number:** 4.3 · **estimatedMinutes:** 70 · **prerequisites:** `bok3423-bi-4-2` · **kapitteltype:** drill
- **description:** Sjangerdrill på IRR-beregning og NPV-vs-IRR-vurdering, med konklusjon og navngitt IRR-svakhet.
- **Eksamensbelegg:** Dekker sjanger C (83 %). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på Del 4. **Symbol- og formelliste:** IRR, NPV — **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) klassifiser strømmen (evig → $C/I$; enperiode → $C_1/I-1$; ellers prøving); 2) sett opp; 3) sammenlign IRR med krav for konklusjon; 4) ved valg: høyest NPV, navngi IRR-svakheten. **Gjennomregnet eksamenscase** med sensor-margnotater. 10–15 nyskrevne oppgaver: IRR $=C/I$, enperiode-IRR, IRR↔NPV-slutning, gjensidig utelukkende med skala/timing, multiple IRR. Alle med `solution` + `hints`.
- **Oppgavesjangre:** C. Mønstereksempel (full kjede): «(a) Prosjektet koster 800, evig strøm 120 — regn IRR. (b) Kravet er 12 % — lønnsomt? Begrunn uten å regne NPV. (c) Et mindre prosjekt har IRR 25 % men NPV 30 — hvilket velges, og hvorfor svikter IRR-rangeringen?»
- **Typiske feil:** $C/I$ på endelig strøm; snudd IRR↔NPV-slutning; uspesifisert IRR-svakhet; manglende konklusjon.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A IRR for evig/enperiode-strøm, C; 4.B IRR↔NPV-koblingen, konklusjon uten NPV-regning, C; 4.C gjensidig utelukkende + navngi svakheten, C; 4.D full IRR/NPV-vs-IRR-oppgave på eksamensnivå, C).

---

### Del 5 — Risiko: avkastning, varians og kovarians *(prioritet: KUNNE — formelark)*

#### Kapittel 5.1: Forventet avkastning, varians og standardavvik

- **id:** `bok3423-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Forventet avkastning og risiko (varians/standardavvik) fra en sannsynlighetsfordeling over tilstander — porteføljematematikkens grunnbegreper, som står på formelarket.
- **Eksamensbelegg:** Fundament under porteføljeteori (Del 6) og beta (Del 7). Forekommer i risikooppgaver (H2023, BioCycle O5, V2022 O1). Formlene **står på formelarket** — poenget er rask, korrekt bruk. Prioritet: **KUNNE**.
- **Forkunnskaper:** Grunnleggende sannsynlighet. **Symbol- og formelliste:** $E(r)$, Var, SD, $\Pr(s)$ — forventning og varians **(på formelarket)**; $SD=\sqrt{\text{Var}}$ **(på formelarket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES (slås opp på arket): forventet avkastning $E(r)=\sum \Pr(s)\, r(s)$; varians $\text{Var}(r)=\sum \Pr(s)[r(s)-E(r)]^2$; standardavvik $SD=\sqrt{\text{Var}}$. Tolkning: SD = volatilitet = spredning i avkastning. Historisk gjennomsnitt og standardavvik fra markedsdata (som i casene). **Regnekjede (nyskrevet):** tre tilstander (0,3 / 0,4 / 0,3) med avkastning 20 % / 8 % / −6 %: $E(r)=0{,}3\cdot20+0{,}4\cdot8+0{,}3\cdot(-6)=6+3{,}2-1{,}8=7{,}4\,\%$; $\text{Var}=0{,}3(20-7{,}4)^2+0{,}4(8-7{,}4)^2+0{,}3(-6-7{,}4)^2=47{,}6+0{,}14+53{,}9=101{,}6$; $SD=\sqrt{101{,}6}=10{,}1\,\%$.
- **Oppgavesjangre:** H. Mønstereksempel: «En aksje gir 25 %, 10 % eller −5 % med sannsynlighet 0,25, 0,5 og 0,25. Regn ut forventet avkastning og standardavvik (bruk formelarket).»
- **Typiske feil:** Bruke uveide gjennomsnitt der sannsynlighetsveide kreves; glemme å kvadrere avvikene i variansen; forveksle varians og standardavvik (glemme rota).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Kovarians og korrelasjon

- **id:** `bok3423-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-5-1` · **kapitteltype:** teori
- **description:** Hvordan to aksjers avkastning samvarierer — kovarians og korrelasjon — byggeklossene i porteføljevarians og beta, begge på formelarket.
- **Eksamensbelegg:** Kovarians↔korrelasjon står på formelarket og er direkte innsatsfaktor i porteføljevarians (Del 6) og beta (Del 7). Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 5.1. **Symbol- og formelliste:** Kov, Korr, SD — kovarians og Kov $=$ Korr$\cdot SD_a\cdot SD_b$ **(på formelarket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES (arket): kovarians $\text{Kov}(r_a,r_b)=\sum \Pr(s)[r_a(s)-E(r_a)][r_b(s)-E(r_b)]$; sammenhengen $\text{Kov}=\text{Korr}\cdot SD_a\cdot SD_b$, så $\text{Korr}=\dfrac{\text{Kov}}{SD_a\,SD_b}\in[-1,1]$. Tolkning: positiv kovarians = beveger seg sammen; korrelasjon normaliserer til $[-1,1]$. **Regnekjede (nyskrevet):** Korr $=0{,}6$, $SD_a=30\,\%$, $SD_b=20\,\%$: $\text{Kov}=0{,}6\cdot0{,}30\cdot0{,}20=0{,}036$.
- **Oppgavesjangre:** H. Mønstereksempel: «To aksjer har standardavvik 28 % og 18 % og korrelasjon 0,5. Regn ut kovariansen (bruk formelarket), og forklar hva fortegnet betyr.»
- **Typiske feil:** Glemme å normalisere (rapportere kovarians som om det var korrelasjon); feil fortegn i avvikene; blande $SD$ (desimal vs. prosent) i Kov $=$ Korr$\cdot SD_a\cdot SD_b$.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.3: Systematisk vs. usystematisk risiko

- **id:** `bok3423-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-5-2` · **kapitteltype:** teori
- **description:** Hvorfor bare den systematiske (markeds-)risikoen prises, mens den usystematiske (selskapsspesifikke) kan diversifiseres bort — og hva gjeldsbeta = 0 betyr.
- **Eksamensbelegg:** Systematisk/usystematisk risiko 67–83 % (V2022 O1h; flervalg). Fast konseptuelt spørsmål og A/B-differensiator (volatilitet ≠ beta). Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 5.1. **Symbol- og formelliste:** systematisk/usystematisk risiko, diversifiserbar risiko, $\beta_D$ (gjeldsbeta) — **(begreper, forstås kvalitativt)**.
- **Innholdskontrakt:** MÅ FORSTÅS OG BRUKES: total risiko $=$ systematisk (markeds-) risiko $+$ usystematisk (selskapsspesifikk) risiko. **Bare systematisk risiko prises** (gir avkastningskrav via beta) — usystematisk risiko kan diversifiseres bort og kompenseres ikke. Andel usystematisk av total; hvorfor høy total volatilitet *ikke* gir høyt avkastningskrav (kun beta teller). **Gjeldsbeta:** et tilnærmet risikofritt lån har $\beta_D=0$; risikabelt lån har $\beta_D>0$. **Regnekjede (nyskrevet):** en aksje har total varians 400; markedsrelatert (systematisk) del 250 → usystematisk $=150$, dvs. 37,5 % kan diversifiseres bort.
- **Oppgavesjangre:** H/J. Mønstereksempel: «Aksje A har høyere standardavvik enn aksje B, men lavere beta. Hvilken har høyest avkastningskrav ifølge CAPM, og hvorfor er ikke standardavviket avgjørende?»
- **Typiske feil:** Anta at høy total risiko (volatilitet) gir høyt avkastningskrav; blande total risiko og systematisk risiko; tro at diversifisering fjerner systematisk risiko.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (5.A forventet avkastning + SD fra fordeling, H; 5.B kovarians og korrelasjon, H; 5.C systematisk vs. usystematisk risiko, H/J-verbal; 5.D blandet risikooppgave med volatilitet-vs-beta-drøfting, H).

---

### Del 6 — Porteføljeteori og diversifisering *(prioritet: KUNNE — formelark)*

#### Kapittel 6.1: Porteføljeavkastning og porteføljevarians

- **id:** `bok3423-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-5-2` · **kapitteltype:** teori
- **description:** Forventet avkastning og varians for en portefølje av to (eller flere) aktiva — de mest formelark-tunge beregningene i faget.
- **Eksamensbelegg:** Porteføljevarians/-avkastning fra formelarket (H2023 O4, BioCycle O5), opptil 35 % vekt. Alle formlene **står på formelarket**. Prioritet: **KUNNE** (høy uttelling når det kommer).
- **Forkunnskaper:** Bygger på kap. 5.1–5.2. **Symbol- og formelliste:** $w_i$ (vekter), $E(r_p)$, $\text{Var}(r_p)$, Kov — **alle former på formelarket**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES (arket): forventet porteføljeavkastning $E(r_p)=\sum w_i E(r_i)$; **to-aktiva-varians** $\text{Var}(r_p)=w_a^2\text{Var}(r_a)+w_b^2\text{Var}(r_b)+2w_a w_b\text{Kov}(r_a,r_b)$; generell form $\sum_i\sum_j w_i w_j \text{Kov}(r_i,r_j)$. Vektene summerer til 1. **Regnekjede (nyskrevet):** $w_a=0{,}6$, $w_b=0{,}4$, $E(r_a)=12\,\%$, $E(r_b)=6\,\%$: $E(r_p)=0{,}6\cdot12+0{,}4\cdot6=9{,}6\,\%$. Med $\text{Var}(r_a)=0{,}09$, $\text{Var}(r_b)=0{,}04$, Kov $=0{,}012$: $\text{Var}(r_p)=0{,}36\cdot0{,}09+0{,}16\cdot0{,}04+2\cdot0{,}6\cdot0{,}4\cdot0{,}012=0{,}0324+0{,}0064+0{,}00576=0{,}0446$; $SD_p=21{,}1\,\%$.
- **Oppgavesjangre:** H. Mønstereksempel: «En portefølje har 70 % i aksje A ($SD=25\,\%$) og 30 % i aksje B ($SD=15\,\%$), korrelasjon 0,4. Regn ut porteføljens standardavvik (bruk formelarket).»
- **Typiske feil:** Glemme kovariansleddet ($2w_a w_b\text{Kov}$); bruke SD i stedet for varians i vekt-kvadratene; vekter som ikke summerer til 1; ta rota for tidlig.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.2: Diversifisering, effisient front, MVP og markedsporteføljen

- **id:** `bok3423-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-6-1` · **kapitteltype:** teori
- **description:** Hvordan diversifisering reduserer risiko, hva den effisiente fronten, minimumsvariansporteføljen (MVP) og markedsporteføljen er — det kvalitative bildet sensor ber om å få tegnet og forklart.
- **Eksamensbelegg:** Effisient front/markedsportefølje/MVP (H2023 O4a–d), verbal/figur. Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 6.1 og 5.3. **Symbol- og formelliste:** effisient front, MVP, markedsportefølje, kapitalmarkedslinjen — **(begreper, forstås kvalitativt)**.
- **Innholdskontrakt:** MÅ FORSTÅS OG TEGNES (figur beskrives i ord): **diversifisering** — korrelasjon < 1 gir lavere porteføljerisiko enn vektet gjennomsnitt av enkeltrisikoene; **effisient front** = porteføljene med høyest forventet avkastning for gitt risiko; **minimumsvariansporteføljen (MVP)** = punktet lengst til venstre; **markedsporteføljen** = tangeringspunktet mellom effisient front og linjen fra risikofri rente, bærer kun systematisk risiko. Hvorfor markedsporteføljen er «optimal» og hvorfor alle rasjonelle investorer holder en kombinasjon av den og risikofri plassering. Bro til CAPM (Del 7). **Regnekjede/figur (nyskrevet):** to aksjer med korrelasjon 0,2 gir en front som bøyer seg til venstre; MVP-vektene finnes ved å minimere $\text{Var}(r_p)$.
- **Oppgavesjangre:** H. Mønstereksempel: «Tegn og forklar den effisiente fronten for to risikable aksjer med lav korrelasjon. Marker MVP og markedsporteføljen, og forklar hvorfor diversifisering reduserer risikoen.»
- **Typiske feil:** Tro at diversifisering fjerner *all* risiko (systematisk gjenstår); plassere MVP feil; blande effisient front og kapitalmarkedslinjen; glemme at markedsporteføljen kun bærer systematisk risiko.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 6:** 4 prøver (6.A porteføljeavkastning + to-aktiva-varians, H; 6.B diversifiseringseffekt ved ulik korrelasjon, H; 6.C effisient front/MVP/markedsportefølje verbalt + figur, H; 6.D blandet porteføljeoppgave på eksamensnivå, H).

---

### Del 7 — CAPM, beta og verdipapirlinjen *(prioritet: PERFEKT — 83–100 %)*

#### Kapittel 7.1: Beta — fra kovarians og fra korrelasjon

- **id:** `bok3423-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `bok3423-bi-5-2` · **kapitteltype:** teori
- **description:** Beta som mål på systematisk risiko: beregnet fra kovarians med markedet (på formelarket) eller fra korrelasjon og standardavvik.
- **Eksamensbelegg:** Beta i sjanger E hvert år (V2022 O1c: fra korrelasjon; case: beta fra markedsdata). **Beta-formelen står på formelarket** — men veien via korrelasjon må kunne. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 5.2 (kovarians/korrelasjon). **Symbol- og formelliste:** $\beta$, Kov, Var, Korr, SD — $\beta=\text{Kov}(r_i,r_M)/\text{Var}(r_M)$ **(på formelarket)**; $\beta=\text{Korr}(i,M)\cdot SD_i/SD_M$ **(må pugges — utledet form)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: $\beta=\dfrac{\text{Kov}(r_i,r_M)}{\text{Var}(r_M)}$ (arket); via korrelasjon $\beta=\dfrac{\text{Korr}(i,M)\cdot SD_i}{SD_M}$ (utledes fra Kov $=$ Korr$\cdot SD_i\cdot SD_M$). Tolkning: $\beta=1$ svinger som markedet; $\beta>1$ mer, $\beta<1$ mindre; $\beta=0$ markedsuavhengig. Markedets beta er per definisjon 1. **Regnekjede (nyskrevet):** Korr$(i,M)=0{,}7$, $SD_i=35\,\%$, $SD_M=20\,\%$: $\beta=0{,}7\cdot0{,}35/0{,}20=1{,}225$. Alternativt fra Kov $=0{,}049$, Var$(r_M)=0{,}04$: $\beta=0{,}049/0{,}04=1{,}225$.
- **Oppgavesjangre:** E. Mønstereksempel: «En aksje har korrelasjon 0,6 med markedet, standardavvik 30 %, mens markedets standardavvik er 18 %. Regn ut betaen på begge måter (kovarians og korrelasjon).»
- **Typiske feil:** Bruke $SD_i^2$ i nevneren i stedet for Var$(r_M)$; snu brøken ($SD_M/SD_i$); glemme at Kov $=$ Korr$\cdot SD_i\cdot SD_M$ når man går via korrelasjon.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: CAPM og verdipapirlinjen (SML)

- **id:** `bok3423-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-7-1` · **kapitteltype:** teori
- **description:** Kapitalverdimodellen (CAPM) som gir avkastningskravet fra beta, og verdipapirlinjen (SML) med tolkning av over- og underprising — formelen som IKKE står på arket og MÅ pugges.
- **Eksamensbelegg:** CAPM/SML 83–100 %, ofte flervalg. **CAPM-formelen er IKKE på formelarket — må pugges (kritisk).** Over-/underprising på SML fast (V2022 O3g, V2024 O3e, H2023). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 7.1 og 5.3. **Symbol- og formelliste:** $r_f$, $r_M$, $\beta$, $E(r_i)$, markedsrisikopremie $(r_M-r_f)$ — CAPM og SML **(må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG BEGRUNNES: **CAPM** $E(r_i)=r_f+\beta_i\,(E(r_M)-r_f)$; markedsrisikopremien $=E(r_M)-r_f$. **Verdipapirlinjen (SML):** grafisk sammenheng mellom beta og avkastningskrav; en aksje **over** linjen (høyere forventet avkastning enn CAPM-kravet) er **underpriset** (kjøp), **under** linjen **overpriset** (selg); markedskreftene presser prisen mot linjen. Effekt av økt markedsrisikopremie (brattere SML). Timingfelle: pass på om oppgaven gir markedsrisikopremien $(r_M-r_f)$ direkte eller $r_M$ separat. **Regnekjede (nyskrevet):** $r_f=3\,\%$, $E(r_M)=9\,\%$, $\beta=1{,}2$: $E(r)=3+1{,}2\cdot(9-3)=3+7{,}2=10{,}2\,\%$. En aksje med forventet avkastning 12 % ligger *over* SML → underpriset.
- **Oppgavesjangre:** E/J. Mønstereksempel: «Risikofri rente er 2,5 %, forventet markedsavkastning 8,5 %, aksjens beta 1,3. (a) Regn CAPM-kravet. (b) Analytikere venter 13 % avkastning — er aksjen over eller under verdipapirlinjen, og bør den kjøpes?»
- **Typiske feil:** Sette $r_M$ i stedet for $(r_M-r_f)$ i premie-leddet; kalle en aksje over SML overpriset (den er *underpriset*); anta at CAPM-formelen står på arket (den gjør ikke det); glemme å multiplisere premien med beta.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.3: Drill — CAPM, beta og flervalg

- **id:** `bok3423-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 75 · **prerequisites:** `bok3423-bi-7-2` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele CAPM-kjeden (beta → krav → over/underprising) inkludert flervalgsvarianten med straffscoring.
- **Eksamensbelegg:** Dekker sjanger E (83–100 %) og flervalg (J). CAPM kommer ofte pakket som flervalg (H2023 med −1-straff). Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på Del 5 og 7. **Symbol- og formelliste:** $\beta$, CAPM, SML — beta **(arket)**, CAPM/SML **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) finn beta (kovarians/korrelasjon); 2) sett opp CAPM eksplisitt; 3) sett inn $r_f$, premie, beta; 4) sammenlign forventet avkastning med kravet → over/underpriset; 5) konkludér kjøp/selg. **Gjennomregnet eksamenscase** med sensor-margnotater. **Flervalgsblokk** (8–10 spørsmål) med straffscoringsstrategi (−1 vs. 0) demonstrert. 10–15 nyskrevne oppgaver: beta begge veier, CAPM forlengs/baklengs (løs for beta eller $r_f$), SML-tolkning, gjeldsbeta = 0. Alle med `solution` + `hints`.
- **Oppgavesjangre:** E/J. Mønstereksempel (full kjede): «(a) Aksjens korrelasjon med markedet er 0,55, $SD_i=32\,\%$, $SD_M=16\,\%$ — regn beta. (b) $r_f=3\,\%$, premie 5 % — regn CAPM-kravet. (c) Forventet avkastning er 9 % — over eller under SML?»
- **Typiske feil:** Beta-formel snudd; $r_M$ i stedet for premie; feil retning på SML-tolkning; ignorere straffscoring i flervalg (gjette vilt ved −1).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A beta begge veier, E; 7.B CAPM forlengs + SML-tolkning, E; 7.C CAPM baklengs (løs for beta/$r_f$) + gjeldsbeta, E; 7.D flervalgsblokk med straffscoring på eksamensnivå, J).

---

### Del 8 — WACC og kapitalkostnad: EK-metode vs. TK-metode *(prioritet: PERFEKT — 83 %)*

#### Kapittel 8.1: WACC med markedsverdivekter

- **id:** `bok3423-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-7-2` · **kapitteltype:** teori
- **description:** Vektet gjennomsnittlig kapitalkostnad: hvordan man vekter egenkapital- og gjeldskostnad med markedsverdier og justerer gjeldskostnaden for skatt.
- **Eksamensbelegg:** WACC 83 %, 30 % vekt i case (oppgave 1: alle komponenter fra markedsdata). **Formelen er IKKE på arket — må pugges.** Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 7.2 (CAPM gir $r_E$) og kap. 1.3 (effektiv rente gir $r_D$). **Symbol- og formelliste:** $r_E$, $r_D$, $E$, $D$, $V$, $s$, WACC — **(må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: $\text{WACC}=r_E\cdot\dfrac{E}{V}+r_D(1-s)\cdot\dfrac{D}{V}$ der $V=E+D$ og vektene er **markedsverdibaserte** (ikke bokførte). $r_E$ fra CAPM; $r_D$ = effektiv rente (yield) på gjelden, skattejustert med $(1-s)$ fordi renteutgiften gir skattefradrag. I casene beregnes *alle* komponenter: effektive renter på hvert lån, markedsverdier av gjeld og egenkapital, samt beta/$r_f$/risikopremie for $r_E$. **Regnekjede (nyskrevet, Fjordvind Kraft):** $E=6\,000$, $D=4\,000$, $V=10\,000$; $r_E=10{,}2\,\%$ (fra CAPM), $r_D=5\,\%$, $s=22\,\%$: $\text{WACC}=0{,}102\cdot0{,}6+0{,}05\cdot0{,}78\cdot0{,}4=0{,}0612+0{,}0156=0{,}0768=7{,}68\,\%$.
- **Oppgavesjangre:** F. Mønstereksempel: «Fjordvind Kraft har egenkapital med markedsverdi 5 000 og gjeld 3 000. Egenkapitalkostnaden er 11 %, lånerenten 6 %, skattesats 22 %. Regn ut WACC.»
- **Typiske feil:** Bruke bokførte i stedet for markedsverdibaserte vekter; glemme skattejusteringen $(1-s)$ på gjeldskostnaden; skattejustere egenkapitalkostnaden (feil — kun gjeld); feil $V$.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.2: EK-metode vs. TK-metode og ekvivalensbetingelsen

- **id:** `bok3423-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `bok3423-bi-8-1` · **kapitteltype:** teori
- **description:** De to verdsettingsmetodene — diskontér KS$_{EK}$ med $r_E$ eller KS$_{TK}$ med WACC — og betingelsen som gjør at de gir samme svar: konstant gjeldsandel.
- **Eksamensbelegg:** EK-/TK-ekvivalens er fast teorispørsmål (V2024 O1a/d, VROOM O4c, V2022 O1g) og A/B-differensiator. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på kap. 8.1 og 2.4 (de to kontantstrømmene). **Symbol- og formelliste:** EK-metode, TK-metode, gjeldsandel $D/V$, $r_E$, WACC, $r_D$ — **(må pugges — begreper + relasjon)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: **TK-metoden** — diskontér KS$_{TK}$ med WACC → totalkapitalverdi; trekk fra gjeld → egenkapitalverdi. **EK-metoden** — diskontér KS$_{EK}$ direkte med $r_E$ → egenkapitalverdi. **Ekvivalensbetingelsen:** de to metodene gir **samme egenkapitalverdi hvis og bare hvis den markedsverdibaserte gjeldsandelen $D/V$ holdes konstant** gjennom prosjektet. **Rangeringen** $r_E>\text{WACC}>r_D$ fordi egenkapital bærer mest risiko. Kort om implisitt MM (uten friksjon endrer ikke kapitalstruktur totalverdien). **Regnekjede (nyskrevet):** samme prosjekt gir egenkapitalverdi 2 500 med begge metoder når $D/V=40\,\%$ holdes konstant; endres gjeldsandelen underveis, spriker de.
- **Oppgavesjangre:** F. Mønstereksempel: «Forklar når EK-metoden og TK-metoden gir samme egenkapitalverdi, og hvorfor $r_E>\text{WACC}>r_D$. Hva skjer med ekvivalensen hvis gjeldsandelen endrer seg over prosjektets levetid?»
- **Typiske feil:** Diskontere KS$_{EK}$ med WACC eller KS$_{TK}$ med $r_E$; hevde ekvivalens uten konstant-gjeldsandel-betingelsen; snu rangeringen ($r_D>r_E$); glemme å trekke fra gjeld i TK-metoden.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 8.3: Drill — WACC og EK/TK-metode

- **id:** `bok3423-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 75 · **prerequisites:** `bok3423-bi-8-2` · **kapitteltype:** drill
- **description:** Sjangerdrill på hele kapitalkostnadskjeden: effektive renter → markedsverdivekter → $r_E$ fra CAPM → WACC → verdsetting med begge metoder.
- **Eksamensbelegg:** Dekker sjanger F (83 %, 30 % i case). Bindeledd mot DCF-caset. Prioritet: **PERFEKT**.
- **Forkunnskaper:** Bygger på Del 7–8 og 1.3. **Symbol- og formelliste:** WACC, $r_E$, $r_D$, $D/V$ — **(må pugges)**.
- **Innholdskontrakt:** **Løsningsoppskrift**: 1) effektiv rente på hvert lån ($r_D$); 2) markedsverdier av $E$ og $D$ → vekter; 3) $r_E$ fra CAPM; 4) WACC; 5) verdsett med TK-metode (og evt. EK-metode som kontroll); 6) sjekk ekvivalens (konstant $D/V$?). **Gjennomregnet eksamenscase** (Fjordvind Kraft WACC, alle komponenter) med sensor-margnotater. 10–15 nyskrevne oppgaver: WACC forlengs/baklengs (løs for $r_E$ eller $D/V$), effekt av statsgaranti/tilskudd på WACC, EK-vs-TK-ekvivalens. Alle med `solution` + `hints`.
- **Oppgavesjangre:** F. Mønstereksempel (full kjede): «(a) Et lån har 3 % kupong halvårlig og handles til 98 % av pålydende — finn effektiv rente. (b) $E=7\,000$, $D=3\,000$, $r_E=12\,\%$, $s=22\,\%$ — regn WACC. (c) Diskontér en KS$_{TK}$ på 900/år i 5 år og finn egenkapitalverdien.»
- **Typiske feil:** Bokførte vekter; glemt skattejustering; feil kontantstrøm-til-metode-kobling; hevdet ekvivalens uten å sjekke gjeldsandelen.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A WACC med markedsverdivekter + skattejustering, F; 8.B EK- vs. TK-metode og ekvivalensbetingelsen, F; 8.C WACC baklengs + statsgaranti-effekt, F; 8.D full kapitalkostnad-/verdsettingskjede på eksamensnivå, F).

---

### Del 9 — Aksje- og obligasjonsprising + verdsettingsdrøfting *(prioritet: KUNNE / KJENNE)*

#### Kapittel 9.1: Gordons vekstmodell og aksjeverdsetting

- **id:** `bok3423-bi-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `bok3423-bi-1-1`, `bok3423-bi-7-2` · **kapitteltype:** teori
- **description:** Aksjeprising med Gordons vekstmodell — timingfellen (DIV$_1$ = DIV$_0(1+g)$), to-fase-varianten og halvårsforskyvning — formelen som IKKE står på arket og MÅ pugges.
- **Eksamensbelegg:** Gordon 67 %, ofte i case (V2024 O2e–f, VROOM/BioCycle). Timing og to-fase er faste feller. **Formelen er IKKE på arket — må pugges.** Prioritet: **KUNNE**.
- **Forkunnskaper:** Bygger på kap. 1.1 (voksende evig strøm) og 7.2 ($r_E$ fra CAPM). **Symbol- og formelliste:** $P_0$, DIV$_0$, DIV$_1$, $r_E$, $g$ — **(må pugges — IKKE på arket)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: $P_0=\dfrac{\text{DIV}_1}{r_E-g}$ der $\text{DIV}_1=\text{DIV}_0(1+g)$ og $r_E>g$. **Timingfellen:** et *nettopp utbetalt* utbytte er DIV$_0$ og teller **ikke** i telleren — bruk DIV$_0(1+g)$. **To vekstfaser:** høy vekst i $n$ år (diskontér ledd for ledd), deretter lav evig vekst (Gordon-ledd fra år $n$, diskontert tilbake). **Halvårsforskyvning:** hvordan prisen endres om første utbytte kommer om et halvt år. $r_E$ hentes fra CAPM. **Regnekjede (nyskrevet, Fjordvind Kraft):** nettopp betalt utbytte 4 kr, vekst 3 %, $r_E=10\,\%$: $\text{DIV}_1=4\cdot1{,}03=4{,}12$; $P_0=4{,}12/(0{,}10-0{,}03)=4{,}12/0{,}07=58{,}9$ kr.
- **Oppgavesjangre:** G. Mønstereksempel: «Et selskap betalte nettopp 5 kr i utbytte, som ventes å vokse 4 % årlig for alltid. Egenkapitalkostnaden er 11 %. Regn ut aksjeprisen med Gordons modell.»
- **Typiske feil:** Bruke DIV$_0$ i telleren i stedet for DIV$_1=$ DIV$_0(1+g)$; bruke modellen når $g\ge r_E$ (meningsløst svar); behandle to-fase-vekst som én fase; glemme å diskontere fase 2-leddet tilbake.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 9.2: Obligasjonsprising — kupong, pålydende og effektiv rente

- **id:** `bok3423-bi-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-1-2` · **kapitteltype:** teori
- **description:** Obligasjonen som en annuitet av kuponger pluss pålydende ved forfall, og den effektive avkastningen (yield) som blir gjeldskostnaden i WACC.
- **Eksamensbelegg:** Obligasjon 33 %, sjelden som egen oppgave, men sentral som **WACC-komponent** (VROOM: 3 % kupong halvårlig, markedspris 119,80 %). **Må pugges.** Prioritet: **KJENNE** (fundament for $r_D$).
- **Forkunnskaper:** Bygger på kap. 1.2 (annuitet) og 1.3 (effektiv rente). **Symbol- og formelliste:** kupong, pålydende $F$, kurs, effektiv rente/yield $y$, $n$ — **(må pugges)**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: obligasjonens verdi $P=\sum_{t=1}^{n}\dfrac{\text{kupong}}{(1+y)^t}+\dfrac{F}{(1+y)^n}$; effektiv rente $y$ = den renten som setter markedskursen lik denne nåverdien (obligasjonens IRR). **Kupongrente kan avvike fra markedsrente:** kurs over pari når kupong > markedsrente, under pari når kupong < markedsrente. Ved underårlige kuponger brukes periodrente (kobling til kap. 1.3). Effektiv yield inn i WACC som $r_D$. **Regnekjede (nyskrevet):** en obligasjon betaler 5 kr kupong årlig i 4 år, pålydende 100, markedsrente 4 %: $P=5\cdot\text{annuitetsfaktor}(4\%,4)+100/1{,}04^4=5\cdot3{,}630+85{,}48=18{,}15+85{,}48=103{,}6$ (over pari, siden kupong > markedsrente).
- **Oppgavesjangre:** K. Mønstereksempel: «En obligasjon betaler 6 kr kupong årlig i 5 år og 100 kr ved forfall. Markedsrenten er 5 %. Regn ut kursen, og forklar hvorfor den ligger over pålydende.»
- **Typiske feil:** Blande kupongrente og effektiv rente; glemme pålydende i siste periode; tro at høyere yield gir høyere kurs (invers sammenheng); bruke nominell i stedet for periodrente ved halvårlige kuponger.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 9.3: ESG, bærekraft, grunnrenteskatt og regulering

- **id:** `bok3423-bi-9-3` · **number:** 9.3 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-8-2` · **kapitteltype:** teori (drøfting)
- **description:** Verdsettingsdrøftingen i casene: hvordan miljørisiko, grunnrenteskatt, statlige tilskudd og garantier påvirker risiko, avkastning og WACC — ren tekst, ingen regning.
- **Eksamensbelegg:** ESG/bærekraft/regulering 50 % — **kun i case** (BioCycle O4, MOWI). Alternative perspektiver premieres. Prioritet: **KJENNE** (case-drøfting).
- **Forkunnskaper:** Bygger på kap. 8.1–8.2 (WACC). **Symbol- og formelliste:** ESG, grunnrenteskatt, statsgaranti/-tilskudd, miljørisiko — **(begreper, forstås kvalitativt)**.
- **Innholdskontrakt:** MÅ KUNNE DRØFTES (strukturert for/mot, ingen fasit): **miljørisiko** som en kilde til (delvis systematisk, delvis usystematisk) risiko; **grunnrenteskatt** (havbruk/vannkraft) reduserer prosjektets kontantstrøm etter skatt; **statlige tilskudd/garantier** senker gjeldskostnaden ($r_D$) og dermed WACC, men kan endre risikofordelingen; hvorfor ESG-hensyn kan påvirke både forventet kontantstrøm og avkastningskrav. Konsulentrollen: gi anbefaling, veie alternative perspektiver, koble til reell effekt på risiko/WACC. **Ingen regning** — men koble kvalitativt til WACC-komponentene.
- **Oppgavesjangre:** I. Mønstereksempel: «Et fornybarprosjekt får en statsgaranti på lånet. Drøft hvordan garantien påvirker gjeldskostnaden, WACC og prosjektets verdi, og pek på minst ett motargument.»
- **Typiske feil:** Ren synsing uten kobling til risiko/WACC; ensidig drøfting (glemme motargument); regne der oppgaven ber om drøfting; sprenge ordgrensen.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (9.A Gordon forlengs + timing (DIV$_1$), G; 9.B to-fase-Gordon + halvårsforskyvning, G; 9.C obligasjonsprising og effektiv yield, K; 9.D ESG/grunnrenteskatt/statsgaranti-drøfting med WACC-kobling, I).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Strategi, formelark-oversikt og sjangerguide

- **id:** `bok3423-bi-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `bok3423-bi-0-1` · **kapitteltype:** eksamensstrategi
- **description:** Sluttoppsummering: tidsbudsjett for begge vurderingsdelene, en samlet formeloversikt (pugges vs. arket), sjangerguidens løsningsoppskrifter i kortform, og flervalgsstrategien.
- **Eksamensbelegg:** Metakapittel — bygger på hele boka. Prioritet: — (studieguidekjerne).
- **Forkunnskaper:** Bygger på alle deler. **Symbol- og formelliste:** samlet formeloversikt for hele faget, hver merket **(på formelarket)** / **(må pugges)**.
- **Innholdskontrakt:** **(A) Formelark-oversikten** — alle formlene fra innholdskontraktene på én tabell, tydelig delt i «står på arket» (de ni porteføljeformlene + beta) og «må pugges» (resten). **(B) Sjangerguiden** — løsningsoppskriftene fra drillkapitlene (2.5, 3.3, 4.3, 7.3, 8.3) i kortform, sjanger A–K. **(C) Tidsbudsjett** — for skoleeksamen (3 t, vektstyrt: oppgave 1 kontantstrøm først) og for gruppecaset (Excel-oppsett før tekst). **(D) Sensorreglene** + karakterskillene samlet. **(E) Flervalgsstrategi** ved −1 vs. 0 straff. **(F) Feilkatalogen** — de tolv typiske feilene med henvisning til forebyggende kapittel.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Skoleeksamen har oppgave 1 (kontantstrøm, 40 %), oppgave 2 (tidsverdi + Gordon, 30 %), oppgave 3 (CAPM-flervalg, 20 %), oppgave 4 (teori, 10 %) på 180 minutter — sett opp et tidsbudsjett.»
- **Typiske feil:** Feil tidsprioritering; pugge feil formler (tro at porteføljeformlene må pugges og glemme CAPM/WACC/Gordon); gjette vilt i flervalg ved −1-straff.
- **Quiz: 12 · Flashcards: 20**

#### Kapittel 10.2: DCF-case-mal — komplett verdsetting av Fjordvind Kraft AS

- **id:** `bok3423-bi-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `bok3423-bi-8-3` · **kapitteltype:** øvingscase
- **description:** Den gjennomgående tråden samlet: en komplett Excel-orientert gruppeinnlevering rundt Fjordvind Kraft AS — fra WACC via kontantstrømmer til NPV/IRR-anbefaling og ESG-drøfting, skrevet slik en A-besvarelse ser ut.
- **Eksamensbelegg:** Speiler gruppeinnleveringen (BØK 34232, 40 %): fast arkitektur O1 WACC → O2 kontantstrømmer → O3 NPV/IRR-anbefaling → O4–5 ESG/teori. Prioritet: — (kryssgående sluttrening).
- **Forkunnskaper:** Bygger på hele boka (Del 1–9). **Symbol- og formelliste:** hele apparatet — hele DCF-kjeden.
- **Innholdskontrakt:** En komplett, gjennomregnet case-mal med nyskrevne, konsistente tall for Fjordvind Kraft AS: **O1 WACC** (effektive renter på hvert lån, markedsverdivekter, $r_E$ fra CAPM med estimert beta/$r_f$/risikopremie); **O2 relevante kontantstrømmer** (KS$_{TK}$ og KS$_{EK}$ etter skatt, med saldoavskrivning/skatteskjold, arbeidskapital, sunk cost, restverdi, nominell/reell nyanse); **O3 NPV og IRR** med anbefaling; **O4 ESG/grunnrenteskatt-drøfting**; **O5 kort teori** (EK-/TK-ekvivalens, gjeldsbeta). Vist som **Excel-oppsett** (faner, rader, formler/cellereferanser) PLUSS forklarende dokumenttekst innenfor ordgrensene, med **KI-erklæring**. Sensor-margnotater om hvor uttellingen sitter og hva som skiller A fra C. Presenteres som `collapsible`-løsningsforslag per oppgave.
- **Oppgavesjangre:** A + F + B + C + I (hele casesjangeren). Mønstereksempel: hele Fjordvind-caset.
- **Typiske feil:** Excel uten formler; sprikende tall Excel/dokument; blande EK/TK; glemme KI-erklæring; sprenge ordgrensene; svak/manglende anbefaling.
- **Quiz: 8 · Flashcards: 6**

#### Kapittel 10.3: Øvingseksamen 1 — individuell skoleeksamen (regning + flervalg)

- **id:** `bok3423-bi-10-3` · **number:** 10.3 · **estimatedMinutes:** 120 · **prerequisites:** `bok3423-bi-10-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen etter dagens mal (BØK 34233, 60 %): oppgave 1 kontantstrøm, oppgave 2 tidsverdi + Gordon, oppgave 3 CAPM-flervalg, oppgave 4 kort teori — 3 timer, rentetabeller + formelark.
- **Eksamensbelegg:** Speiler den nye skoleeksamenen (V2024). Miks: O1 kontantstrøm fra resultatbudsjett (40 %) + O2 tidsverdi/effektiv rente + Gordon to-fase (30 %) + O3 CAPM/beta/SML som flervalg med straffscoring (20 %) + O4 teori NPV-vs-IRR/EK-TK-ekvivalens (10 %). Prioritet: — (sluttrening).
- **Forkunnskaper:** Bygger på Del 1–9. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett sett med nyskrevne oppgaver som speiler temafordelingen (analysens §2), oppgitt prosentvekt, `collapsible`-løsningsforslag per oppgave skrevet som A-besvarelse med `tip`-notat om delpoeng/vekting. Flervalgsblokken markerer straffscoringsregelen. Formeloppsett vist eksplisitt overalt.
- **Oppgavesjangre:** A, D, G, E, J, C. Mønstereksempel: hele settet.
- **Typiske feil:** Tidssprekk på oppgave 1; kalkulatorsvar uten utregning; flervalg-gjetting ved straff; manglende konklusjoner.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 2 — individuell skoleeksamen (eldre helhetsmal)

- **id:** `bok3423-bi-10-4` · **number:** 10.4 · **estimatedMinutes:** 120 · **prerequisites:** `bok3423-bi-10-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen etter den eldre 100 %-malen (BØK 34231): tyngre og bredere, med sparekonto/effektiv rente, porteføljeteori (effisient front) og flervalg med −1-straff — 3 timer.
- **Eksamensbelegg:** Speiler H2023/V2022. Miks: O1 kontantstrøm (25 %) + O2 tidsverdi (sparekonto + effektiv rente halvårlig, 25 %) + O3 CAPM/SML (20 %) + O4 porteføljeteori (effisient front/markedsportefølje/MVP, 20 %) + flervalg med −1-straff (10 %). Prioritet: — (sluttrening).
- **Forkunnskaper:** Bygger på Del 1–9. **Symbol- og formelliste:** hele apparatet (inkl. formelark-porteføljedelen).
- **Innholdskontrakt:** Komplett nyskrevet sett som dekker den eldre, bredere profilen (porteføljeteori tyngre vektet), oppgitt vekt, `collapsible`-løsningsforslag som A-besvarelse med `tip`-delpoengnotat. Flervalg med eksplisitt −1-straffscoring og «velger å ikke svare»-alternativ.
- **Oppgavesjangre:** A, D, E, H, J. Mønstereksempel: hele settet.
- **Typiske feil:** Nominell der effektiv rente kreves; porteføljevarians uten kovariansledd; feil SML-tolkning; gjette vilt ved −1-straff.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.5: Øvingseksamen 3 — flervalgstung skoleeksamen

- **id:** `bok3423-bi-10-5` · **number:** 10.5 · **estimatedMinutes:** 120 · **prerequisites:** `bok3423-bi-10-4` · **kapitteltype:** øvingseksamen
- **description:** Komplett skoleeksamen med tung flervalgsvekting og WACC/EK-TK-fokus — trener flervalg som eksamenssjanger med begge straffscoringsregimer.
- **Eksamensbelegg:** Speiler flervalgsprofilen (H2023/V2024) og WACC/EK-TK-vekten. Miks: O1 kontantstrøm EK/TK (30 %) + O2 WACC (alle komponenter, 25 %) + O3 stor flervalgsblokk konseptuell (25 %) + O4 IRR/NPV-vs-IRR + PI (20 %). Prioritet: — (sluttrening; flervalg er egen eksamenssjanger — sikt høyt).
- **Forkunnskaper:** Bygger på Del 1–9. **Symbol- og formelliste:** hele apparatet.
- **Innholdskontrakt:** Komplett nyskrevet sett med en stor konseptuell flervalgsblokk (behandling av avskrivning/utbytte/renter/avdrag i EK- vs. TK-kontantstrøm; gjeldsbeta = 0; PI; når IRR er nyttig) med begge straffscoringsregimer demonstrert, pluss WACC- og kontantstrømregning. `collapsible`-løsningsforslag med delpoengnotat. Flervalgsstrategien forklart per straffregime.
- **Oppgavesjangre:** A, F, C, J, B. Mønstereksempel: hele settet.
- **Typiske feil:** Konseptuelle flervalg-feller (EK/TK-behandling av poster); WACC med bokførte vekter; IRR-svakhet uspesifisert; feil flervalgsstrategi for straffregimet.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 10:** ingen (eksamenstreningsdel — inneholder selv de komplette settene).

---

## 4. Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 14+14+12 = **40** | 14+26+16 = **56** |
| 1 | 1.1–1.5 | 18+18+18+16+14 = **84** | 18+18+16+16+8 = **76** |
| 2 | 2.1–2.5 | 20+18+18+20+18 = **94** | 20+18+18+20+10 = **86** |
| 3 | 3.1–3.3 | 20+16+16 = **52** | 18+14+8 = **40** |
| 4 | 4.1–4.3 | 18+18+16 = **52** | 16+16+8 = **40** |
| 5 | 5.1–5.3 | 18+16+16 = **50** | 18+16+16 = **50** |
| 6 | 6.1–6.2 | 18+16 = **34** | 16+18 = **34** |
| 7 | 7.1–7.3 | 18+20+16 = **54** | 18+20+8 = **46** |
| 8 | 8.1–8.3 | 18+20+16 = **54** | 18+22+8 = **48** |
| 9 | 9.1–9.3 | 18+14+14 = **46** | 18+16+16 = **50** |
| 10 | 10.1–10.5 | 12+8+6+6+6 = **38** | 20+6+0+0+0 = **26** |
| **Sum** | **38 kap.** | **598 ≥ 500 ✓** | **552 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tettheten er skalert til fagets omfang og natur (jf. PRODUKSJONSLOYPE «≥500 er
et gulv»):** boka har 38 kapitler (over DNA-vinduet), og faget har en tung
begreps-/regelside (må-pugges-formlene, EK-/TK-metoden, porteføljeteori,
ESG-drøfting) som gir høy flashcard-tetthet i de begrepsrike kapitlene (0.2 med
26, 8.2 med 22). **Quiz-summen er løftet til 598 fordi flervalg selv er en
eksamenssjanger** (sjanger J) — quiz er den direkte treningsformen for
flervalgsdelen, og analysen ber eksplisitt om å «sikte høyt». Fordelingen
speiler frekvens: de seks perfekt-delene (1, 2, 3, 4, 7, 8) bærer 390 av 598
quiz, med **Del 2 (kontantstrøm) som den tyngste enkeltdelen (94 quiz)** fordi
den er fagets største og hyppigste tema. Regnetunge drillkapitler har lav
flashcard-kvote (8–10) siden ferdigheten sitter i oppgaver, ikke i kort;
øvingseksamenene (10.3–10.5) har kun quiz.

---

## 5. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag,
formeloppsett vist eksplisitt, enhet i svaret og konklusjon. Bygges som
`bok3423-bi-<del>-prove` (chapterNumber `<del>.P`). Omfang i minutter. De fire
prøvene per del er spesifisert i «**Prøve-kvote Del N**»-linjene under hver del i
§3 (sjangre og innhold angitt der). Del 0 og Del 10 har ingen prøver (metadel /
eksamenstreningsdel som selv rommer de komplette settene).

### Øvingseksamener (3 komplette skoleeksamener — kap. 10.3–10.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 10.3) | Ny skoleeksamen (V2024, BØK 34233) | Kontantstrøm 40 % + tidsverdi/Gordon 30 % + CAPM-flervalg 20 % + teori 10 % |
| Øvingseksamen 2 (kap. 10.4) | Eldre helhetsmal (H2023/V2022, BØK 34231) | Kontantstrøm 25 % + tidsverdi (sparekonto/effektiv rente) 25 % + CAPM/SML 20 % + porteføljeteori 20 % + flervalg (−1) 10 % |
| Øvingseksamen 3 (kap. 10.5) | Flervalgstung / WACC-fokus | Kontantstrøm EK/TK 30 % + WACC 25 % + stor flervalgsblokk 25 % + IRR/NPV-vs-IRR/PI 20 % |

I tillegg speiler **DCF-case-malen (kap. 10.2)** gruppeinnleveringen (BØK 34232,
40 %). Til sammen dekker de tre skoleeksamenene + caset samtlige sentrale sjangre
A–K minst én gang; flervalg (J) trenes i alle tre settene og i CAPM-drillen (7.3).

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kap. 10.1 + kapitlenes
Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — den todelte formen (40 % Excel-case + 60 %
   skoleeksamen, 3 t, formelark + rentetabeller + kalkulator), historikken
   (100 % individuell t.o.m. H2023), den faste dramaturgien og prognosen (fra
   kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   **perfekt** (Del 1 tidsverdi, Del 2 kontantstrøm, Del 3 NPV, Del 4 IRR, Del 7
   CAPM, Del 8 WACC/EK-TK), **kunne** (Del 5 risiko, Del 6 portefølje, Del 9.1
   Gordon), **kjenne** (Del 9.2 obligasjon, Del 9.3 ESG, PI, opsjoner = utelatt).
3. **Sjangerguiden** — de elleve oppgavetypene A–K med løsningsoppskriftene fra
   drillkapitlene (2.5, 3.3, 4.3, 7.3, 8.3) i kortform (fra kap. 10.1).
4. **Formelark-oversikten** — alle formlene på én oversikt, tydelig delt i
   **«står på arket»** (de ni porteføljeformlene + beta) og **«må pugges»**
   (nåverdi/annuitet/effektiv rente/nominell-reell, NPV, IRR, PI, CAPM, WACC,
   EK-/TK-metoden, Gordon, obligasjonsprising, kontantstrøm-oppsett) — fra kap.
   0.2 og 10.1.
5. **Sensorreglene** — «vis all utregning» (kun svar/kalkulatortaster = 0),
   delvis uttelling for riktig formel, følgefeil straffes lite, konklusjon
   kreves, flervalgs-straffscoring, Excel med formler + Excel↔dokument-samsvar +
   KI-erklæring — pluss karakterskillene (E/C-D/A-B), alt merket `(verifiser)`.
6. **Feilkatalogen** — de tolv typiske feilene (fra analysen §5), hver med
   henvisning til forebyggende kapittel: (1) sunk cost inne (2.3), (2) glemt
   arbeidskapital-reversering (2.2), (3) avskrivning som kontantstrøm (2.1),
   (4) EK/TK-forveksling (2.4/8.2), (5) bokførte WACC-vekter (8.1), (6) nominell
   der effektiv rente kreves (1.3), (7) reell strøm med nominell rente (1.4),
   (8) DIV$_0$ i Gordon-telleren (9.1), (9) volatilitet vs. beta (5.3/7.1),
   (10) feil SML-tolkning (7.2), (11) kalkulatorsvar uten formeloppsett (0.2),
   (12) Excel uten formler (0.3).
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → Del 1 → Del 2 (STØRST) → Del 3 → Del 4 → Del 5 → Del 7 → Del 8 →
   Del 6 → Del 9; prøvene underveis, DCF-case-malen + de tre skoleeksamenene de
   siste ukene under tidspress (vektstyrt tidsbudsjett).

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `bok3423-bi` med alle 38
   kapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`. `sectionNames`
   = del-nummer → seksjonstitlene i §2-tabellen.
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangernavnene A–K, formelark-vs-pugges-
   skillet og kontantstrøm-oppstillingsmalen + DCF-casehåndverket som resten
   refererer til.
3. **Perfekt-delene i avhengighetsrekkefølge**: Del 1 (tidsverdi) → Del 2
   (kontantstrøm — **bokas største del, én agent for hele delen**) → Del 3 (NPV)
   → Del 4 (IRR). Deretter Del 5 → Del 6 → Del 7 (CAPM) → Del 8 (WACC/EK-TK).
4. Del 9 → Del 10 (DCF-case-mal + øvingseksamenene til slutt — de gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§5) bygges som `bok3423-bi-<del>-prove`-
   kapitler etter hver temadel 1–9.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
  konsistente subskript ($r_E$, $r_D$, $r_f$, $r_M$, $\beta$, DIV$_1$, KS$_{EK}$,
  KS$_{TK}$).
- [ ] **Formelark-vs-pugges konsekvent**: hver Symbol- og formelliste merker hver
  formel **(på formelarket)** eller **(må pugges)**; kun de ni porteføljeformlene
  + beta er på arket — CAPM, NPV, annuitet, WACC, Gordon, obligasjon er merket
  «må pugges» overalt de forekommer.
- [ ] **Notasjonskonsistens**: tekstsøk over alle bok3423-bi-filer — forbudte
  termer: «Black-Scholes», «put-call», «opsjon» (unntatt Del 0-avgrensningens
  ene «ikke pensum»-setning); ingen tung MM-formalisme utover kap. 8.2s
  ekvivalens; multipler (EV/EBITDA, P/E) kun kort nevnt, aldri egen oppgave.
- [ ] **Tallregning overalt**: hver regneoppgave har eksplisitt formeloppsett →
  innsatte tall → svar med **enhet** (kr/mill./%) → **konklusjon**.
  Løsningsforslag demonstrerer delvis uttelling for formeloppsett og at
  følgefeil straffes lite.
- [ ] **Fellene drillet**: sunk cost, arbeidskapital-reversering, avskrivning-som-
  kontant, EK/TK-forveksling, bokførte WACC-vekter, effektiv-vs-nominell,
  reell-vs-nominell, DIV$_0$-timing, volatilitet-vs-beta, SML-retning har hver
  minst én advarsel + én eksamensklone-oppgave.
- [ ] **Kontantstrøm-oppstillingsmalen** gjenbrukt konsistent i hele Del 2 og i
  DCF-case-malen (kap. 10.2), med Excel-orientert oppsett (celler/formler).
- [ ] **Flervalg trent som sjanger**: quizene dekker konseptuelle flervalgs-
  varianter (EK/TK-behandling, gjeldsbeta, PI, IRR-nytte); straffscoring
  (−1 vs. 0) forklart i kap. 0.2/10.1 og i øvingseksamenene.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  herfra), Typiske feil-`warning`, Forkunnskaper-`text` + Symbol- og
  formelliste-`collapsible`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
  med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 598 og flashcard-sum ≥ 552** per kvotetabellen (§4).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + DCF-case-mal + 3 øvingseksamener
  (regning + flervalg, 3 t, rentetabeller) som sammen dekker sjangrene A–K.
- [ ] **Kryssbok-lenker**: alle `/bi-okonomi/...`-lenker peker på eksisterende
  kapitler (`bi-okonomi-4-1`, `-4-2`, `-4-3`, `-4-5`, `-2-2`, `-2-3` er verifisert).
- [ ] **DCF-tråden**: Fjordvind Kraft AS gjenbrukt konsistent (nye, konsistente
  tall) fra Del 1 til DCF-case-malen (kap. 10.2).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne selskapsnavn (Fjordvind
  Kraft AS m.fl.), egne tall, egne scenarioer; **ikke VROOM, BioCycle, MOWI**;
  ingen formuleringer fra reelle sett; pensumlitteratur (Berk & DeMarzo)
  refereres, aldri siteres i lengde. Sensorkrav uten fasitbelegg merkes
  `(verifiser)`.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
</content>
</invoke>

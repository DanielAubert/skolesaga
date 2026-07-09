# Bokskjelett: PSYC2104 Kvantitativ metode A (UiO) — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (17 komplette oppgavesett V2017–V2026, hvorav 14 med
> sensorveiledning, alle skrevet av samme kjerneteam i kvantitativ metode A på
> profesjonsstudiet i psykologi, UiO). Alle oppgaver, output-tabeller, path-/
> medieringstabeller, vignetter, tall og modellbesvarelser i boka skal være NYSKREVNE
> (se §6). UiOs eksamensoppgaver, output og veiledninger brukes som **grunnlag**
> (mønstre, temavekting, vurderingskriterier), **aldri ordrett** — de dokumenterte
> gjenbrukte scenarioene (antall barn→mening→positiv affekt; BIAQ→sosial
> selvbevissthet) må nyskrives særlig grundig. Pensumlitteratur (teststatistikk/
> psykometri-boka; regresjons-/faktoranalysestoffet; forelesningene) refereres —
> aldri siteres i lengde.
>
> **Faglig presisjon er kritisk.** Statistiske/psykometriske formler, terskler og
> pensum-kapittelnumre forfatteren er usikker på merkes `(verifiser)` for
> fagfellesjekk i fase 6.

---

## 1. Bokens identitet

- **Kurs-id:** `psyc2104`
- **Tittel:** *PSYC2104 Kvantitativ metode A (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon (navigasjon):** Universitetet i Oslo. Visningsnavn i
  `institusjoner.ts`: «PSYC2104 Kvantitativ metode A».
- **Arketype:** **REGNE-/TOLKNINGSTUNG HYBRID med psykometrisk begrepskjerne** —
  primærmalen er **DNA-regnefag** (Del 0 eksamenskart → temadeler ordnet etter
  faglig avhengighet → drillkapitler for perfekt-temaer → øvingseksamener), fordi
  den dominerende oppgaven (~50 %) er å **lese ferdig regresjons-/medieringsoutput
  og tolke den i prosa**, med syklisk egen regning (Z/T/SEM/a×b). Men faget har en
  tung **begrepskjerne fra DNA-drøfting** — psykometriske redegjørelser
  (reliabilitet, validitet, standardskårer, faktoranalyse) der sensor belønner
  presis definisjon + eksempel + avveining, ikke bare tall. Derfor er regnefag-malen
  supplert med et lånt lag: (a) en **output-simulator** per output-kapittel
  (nyskrevet regresjons-/medierings-/path-/faktoranalysetabell med tolkning på
  **bestått (C)- og A-nivå**), og (b) en **begreps-/redegjørelsesmodul** per
  psykometrikapittel (presis definisjon → eksempel → avveining/differensiator, med
  minimal- og ideal-modellsvar). Hybrid-valget er dokumentert i §2
  «Arketypetilpasning».
- **Kapittelantall:** 28 (Del 0: 2 · temadeler 1–9: 20 · eksamenstrening Del 10: 6)
- **Estimert totaltid:** ~1 490 minutter (~25 timer) fordelt per kapittel under
- **Quiz totalt:** 518 (krav ≥500) · **Flashcards totalt:** 530 (krav ≥500) — se
  autoritativt Kvotesammendrag (§4)

**Pitch:** PSYC2104-eksamen har én jernfast logikk: **3 timers skriftlig
skoleeksamen i Inspera, ingen hjelpemidler** (enkel kalkulator forutsettes når det
skal regnes), og — avgjørende ulikt PSY1010/PSYC1201 — **«Alle oppgavene skal
besvares»**: ingenting kan velges bort, og *alle tre* hovedoppgaver må være
tilfredsstillende for å bestå (en manglende oppgave 3 gir «ikke bestått» uansett de
to andre). Fra ca. 2022 er formatet fast tredelt: **Oppgave 1 (25 %)** og **Oppgave
2 (25 %)** er korte psykometriske begreps-/regneoppgaver (reliabilitet, validitet,
standardskårer, SEM), og **Oppgave 3 (50 %)** er den store output-tolkningsoppgaven —
multippel regresjon med en dikotom «gruppe»-prediktor + kontrollvariabler, utvidet
til en **medieringsmodell**. Denne oppgave 3 har stått i *hvert eneste sett*
2017–2026 og er den enkelt-viktigste ferdigheten på hele eksamen: tolke b (dikotom
= gruppeforskjell), konstantledd, standardiserte koeffisienter, R², «endrer b seg
ved kontroll?», medieringsstiene a/b/c/c′, indirekte effekt a×b, hel/delvis
mediering, bootstrapping av a×b, og det obligatoriske **kausalitetsforbeholdet** som
alltid avslutter. Boka er bygd baklengs fra dette: hvert kjernetema leveres som
(1) prosa-forklaring i emnets notasjon, (2) en output-simulator med bestått/A-
tolkning, og (3) en drill (regne a×b/Z/T/SEM, eller «redegjør + eksempel + avveining»).
**Den store regresjons-/medieringsoppgaven** er ryggraden; **reliabilitet** og
**målingsvaliditet** er de to faste kortoppgavene.

---

## 2. Makrostruktur

Følger DNA-regnefag-malen (Del 0 eksamenskart → temadeler ordnet etter faglig
avhengighet, IKKE frekvens → drillkapitler for perfekt-temaer → øvingseksamener).
Rekkefølgen på temadelene følger analysens anbefalte bokdesign (§7): psykometri­
kjernen først (klassisk testteori/reliabilitet → validitet → standardskårer/SEM),
deretter det multivariate (multippel regresjon + forutsetninger → mediering →
moderering/kausalitet), og til slutt den nedprioriterte faktoranalysen + lavfrekvent
«bør kjenne til»-stoff. Frekvensen styrer *omfanget*, ikke rekkefølgen: den
50 %-tunge regresjons-/medieringsoppgaven (Del 4 + Del 6) får flest kapitler + drill.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og regne-/output-håndverk | 2 | perfekt (meta) | «Alle oppgaver skal besvares», bestått-mekanikken (alle tre må bestå), output-lesing (jamovi/SPSS) og C→A-logikken må etableres FØR fagstoffet. |
| 1 | Klassisk testteori og reliabilitet | 3 | **perfekt** | Fast kortoppgave (reliabilitet 10/17, Cronbachs α i dybden 7/17). X = T + e; de fire formene; α-tolkning inkl. «α = .95 problematisk?». |
| 2 | Målingsvaliditet | 2 | **perfekt** | Fast kortoppgave (validitet 9/17). Innhold/kriterie/begrep, konvergent/diskriminant, reliabel ≠ valid, hensiktsavhengighet. |
| 3 | Standardskårer og standardfeil for måling (SEM) | 2 | **perfekt** | Syklisk regneoppgave (standardskårer 7/17, SEM 4/17). Z/T/prosentil/stanine; SEM-formel, KI for sann skåre, SEM_diff. |
| 4 | Multippel regresjon og statistisk kontroll | 3 | **perfekt** | **Bokas ryggrad (regresjon 16/17, kjernen i oppgave 3, ~50 %).** Tolke dikotom b/konstant/R², forventet skåre per gruppe, «endrer b seg ved kontroll?», standardiserte β. |
| 5 | Regresjonsforutsetninger og kurvilinearitet | 2 | **kunne** | Forutsetninger 5/17 (stigende); kurvilineær effekt (kvadratledd/ΔR²) ny fast deloppgave (V2025, H2025). |
| 6 | Mediering | 3 | **perfekt** | **Bokas andre ryggrad (mediering 14/17, bootstrapping 9/17).** Stiene a/b/c/c′, a×b, hel/delvis, andel mediering, Baron & Kenny, bootstrapping/Process. Boka EIER dette (jf. arbeidsdeling mot PSY2014). |
| 7 | Moderering og kausalitet i ikke-eksperimentell forskning | 2 | **kunne/perfekt** | Moderering 3/17 (skille mot mediering = A-stoff); kausalitetsforbeholdet 10/17 (obligatorisk finale). |
| 8 | Dimensjonalitet og eksplorerende faktoranalyse | 2 | **kunne** | Faktoranalyse 4/17 (bærende 2017–2019, deretter utfaset). Dekk solid nok til å tolke output, ikke V2019-veiledningens matematiske dybde. |
| 9 | Bør kjenne til — baserate, restriction of range, formative modeller | 1 | **kjenne** | Baserate/seleksjonsrate (V2020), restriction of range (V2021), refleksiv/formativ (H2017), rekoding av reverserte ledd (V2023) — én gang hver; kompakt. |
| 10 | Eksamenstrening | 6 | perfekt (meta) | 2 drillkapitler (regnekjerne + feilvaksine) + 3 modellbesvarelser (bestått/A, DNA-krav ≥3) + 1 komplett øvingseksamen i «besvar alle»-tredelt format. |

Rasjonale: perfekt-temaene (reliabilitet, validitet, standardskårer/SEM, multippel
regresjon/kontroll, mediering, kausalitetsforbeholdet) får flest kapitler, egen
output-simulator/regnedrill og differensiert C/A-modellsvar; kunne-temaene
(forutsetninger/kurvilinearitet, moderering, faktoranalyse) får solid, men kompakt
dekning; lavfrekvent stoff (baserate, restriction of range, formative modeller,
rekoding, Spearman-Brown-utledning, Horns parallellanalyse-simulering) dekkes
kompakt og merkes «bør kjenne til». **Ingenting i pensumkjernen utelates** — men
fordi alle oppgaver må besvares, styrer prioriteringen *dybde og drillmengde*, ikke
hva som er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og regne-/output-håndverk |
| 1 | Klassisk testteori og reliabilitet |
| 2 | Målingsvaliditet |
| 3 | Standardskårer og standardfeil for måling |
| 4 | Multippel regresjon og statistisk kontroll |
| 5 | Regresjonsforutsetninger og kurvilinearitet |
| 6 | Mediering |
| 7 | Moderering og kausalitet |
| 8 | Dimensjonalitet og faktoranalyse |
| 9 | Bør kjenne til — perifere temaer |
| 10 | Eksamenstrening |

### Oppgavesjangre (fra analysen §3 — brukes i «Oppgavesjangre» under)

**M** «Den store regresjons-/medieringsoppgaven» (~50 %, oppg. 3) — tolke output fra
nøstede modeller med dikotom hovedprediktor: b (dikotom = gruppeforskjell), konstant
(forventet Y for referansegruppen), forventet Y per gruppe, R², standardiserte β,
«hvorfor endret b seg ved kontroll?», ev. kurvilinearitet, deretter medieringsstiene
a/b/c/c′, indirekte effekt a×b, hel/delvis/andel mediering, bootstrapping, og
kausalitetsforbeholdet. · **R** «Reliabilitetsoppgaven» (kort, oppg. 1) — redegjør
for de fire reliabilitetsformene fra X = T + e; tolk α-verdi; «α = .95 — bra eller
problematisk?»; «ville du fjernet ledd som øker α?». · **V** «Validitetsoppgaven»
(kort, oppg. 2) — redegjør for innholds-/kriterie-/begrepsvaliditet; reliabel ≠
valid; hensiktsavhengighet. · **S** «Standardskåre-/SEM-oppgaven» (kort regning) —
regn Z/T fra M/SD/X, tolk mot normalfordeling/prosentil; SEM = σ√(1−rₓₓ), KI for
sann skåre, SEM_diff. · **F** «Faktoranalyseoppgaven» (2017–2019, nå fordypning) —
tolke EFA-output: antall faktorer (Kaiser/Cattell/Horn), rotasjon, ladning,
kommunalitet, enkel struktur. **De fleste faktiske oppgaver er flerdelte** (M
kombinerer 6–9 delledd) — boka bygger derfor hvert kjernetema så det kan besvares
på alle deltrinn, med regning vist.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** ΔR² som medieringskriterium — den eneste feilen med eksplisitt minuspoeng
(H2018/H2019); mediering vurderes fra stiene/indirekte effekt, ikke fra økning i
forklart varians. · **F2** kausal overtolkning av mediering — konkludere at X
*forårsaker* Y fordi a×b er signifikant, uten forbeholdet om at ikke-eksperimentelle
data bare gir *støtte*. · **F3** feiltolke konstantleddet — ikke se at konstanten er
forventet Y for referansegruppen (kodet 0), og ved flere prediktorer når *alle* er
0. · **F4** feiltolke dikotom koeffisient — behandle b for en 0/1-variabel som «per
enhet»-effekt i stedet for gruppeforskjellen; tolke standardisert β for dikotom
prediktor som meningsfull. · **F5** overse hvorfor b endres med kontroll — ikke
koble til korrelerte prediktorer / konfundering / statistisk kontroll / isolering av
unik effekt. · **F6** høy α tolket ukritisk — hylle α = .95 uten å se faren for for
smal måling og svekket innholds-/begrepsvaliditet. · **F7** reliabel = valid-
forvekslingen — ikke se at høy reliabilitet er nødvendig, men ikke tilstrekkelig,
for validitet. · **F8** feil reliabilitetsmetode for ustabilt trekk — anbefale
test–retest for et trekk som forventes å endre seg (da fanger lav test–retest ekte
endring, ikke lav reliabilitet). · **F9** blande mediering (mekanisme/mellomliggende)
og moderering (betingelse/interaksjon). · **F10** ikke vise regneframgang (Z/T/SEM/
a×b) — usynlig utregning kan ikke reddes. · **F11** faktoranalyse: Kaisers kriterium
tatt bokstavelig — konkludere med «riktig» antall faktorer fra egenverdi > 1 uten å
se at det gir *maksimalt* antall (parallellanalyse/scree er strengere) og uten
teoretisk vurdering. · **F12** tolke uroterte i stedet for roterte ladninger. ·
**F13** ignorere kryssladninger / påstå enkel struktur uten dekning. · **F14** svare
på validitet når det spørres om reliabilitet (og omvendt). · **F15** hoppe over
kausalitets-/forbeholdsleddet som avslutter medieringsoppgaven (ofte lavthengende
poeng). · **F16** blande de fire reliabilitetsformene / feil formel for split-half
(glemme Spearman-Brown-korreksjon). · **F17** forveksle konvergent og diskriminant
validitet, eller samtidig og prediktiv kriterievaliditet.

### Sensorkrav og kredittlogikk (fra analysen §4 — etableres i Del 0.2, refereres i hvert kapittel)

1. **Alle oppgaver obligatoriske; alle tre hovedoppgaver må bestå.** Ingen
   kompensasjon mellom oppgaver — en manglende oppgave 3 (regresjon/mediering) gir
   «ikke bestått» uansett oppgave 1 og 2. Regresjons-/medieringsoppgaven må drilles
   til refleks.
2. **Forståelse trumfer fullstendighet.** Veiledningene beskriver «hva en ideell
   besvarelse bør inneholde»; man kan bestå uten alt. «Ikke bestått» gis ved
   alvorlige faglige feil eller mangelfull dekning.
3. **Eksempler trekker opp** — eksplisitt oppmuntret i validitets-, reliabilitets-
   og standardskåreoppgavene. Bokas C/A-skille speiler dette.
4. **Regneoppgaver: vis fremgangsmåten** (F10). Enkle regnefeil og fortegnsrot
   tilgis så lenge logikken er korrekt (V2019).

### A/B-markører (bonus i veiledningene — «Toppsvar-løftet» per kapittel bygger på disse)

- Forklare *hvorfor* en regresjonskoeffisient endres ved kontroll (statistisk
  kontroll / isolering av unik effekt / konfundering).
- Beregne **andel mediering** (a×b / c) og formulere den indirekte effekten i ord.
- Påpeke at **bootstrapping** signifikanstester den indirekte effekten (fordel framfor
  Baron & Kenny), og at KI som ikke krysser null = signifikant a×b.
- Se at **høy Cronbachs α kan svekke innholds-/begrepsvaliditet** (for smal/for like
  ledd).
- Knytte valg av reliabilitetsmetode til om trekket er **stabilt over tid**
  (test–retest for stabile trekk).
- Påpeke at **standardiserte koeffisienter er lite meningsfulle for dikotome
  prediktorer**.
- Problematisere den foreslåtte **kausalmodellen** (alternative forklaringer,
  retningsproblem, utelatte variabler).
- Nevne at **faktorladning = standardisert regresjonskoeffisient**, og at Kaisers
  kriterium gir *maksimalt* antall faktorer (parallellanalyse er strengere).
- Foreslå og tegne mediator-/moderatormodell.

### Eksplisitt trekk / minuspoeng (fra analysen §4/§5)

- **ΔR² som kriterium for mediering** (F1) — eksplisitt minuspoeng (H2018/H2019).
- Bevist kausalitet fra en medieringsanalyse (F2).
- Ikke vise utregning i regneoppgaver (F10).
- Blande mediering og moderering (F9).
- Behandle høy α ukritisk som utelukkende bra (F6).

### Arketypetilpasning (dokumenterte valg og avvik)

1. **Regnefag med output-lese-lag OG begrepskjerne, ikke rent regnefag.** PSYC2104
   er en psykometrisk begrepsbok med innebygd output-lesing. DNA-regnefags
   makrostruktur beholdes (Del 0-kart, temadeler etter avhengighet, drillkapitler,
   øvingseksamen), men supplert med (a) en **output-simulator** per output-kapittel
   (Del 4/6/8) med bestått/A-tolkning, og (b) en lånt **begreps-/redegjørelses­modul**
   fra DNA-drøfting per psykometrikapittel (Del 1/2): presis definisjon → eksempel →
   avveining/differensiator, med minimal- og ideal-modellsvar (sensorens eget «ideal
   answer» vs. «minimal answer»-skille).
2. **Output er ferdig gitt (2022→); egen regning der oppgitt.** Der 2019/2020 ba
   kandidaten kjøre analyser selv eller regne SEM for hånd, gis output nå ferdig;
   oppgaven er å *lese og forklare*. Boka trener output-lesing (jamovi-stil:
   Estimate/SE/t/p/Stand. Estimate; egne «Mediation Estimates»- og «Path Estimates»-
   tabeller med a×b, direkte, total, % mediering) MEN beholder den syklisk gjentatte
   egne regningen (Z/T/SEM/SEM_diff/KI/a×b/andel mediering).
3. **To output-dialekter.** Output vandret fra SPSS (2017–2021) til jamovi-stil
   (H2024→). Boka trener *begge*, med vekt på jamovi-stilen (egne Mediation/Path
   Estimates-tabeller). Alle tabeller er nyskrevne — UiOs tall gjenbrukes aldri.
4. **Differensierte modellsvar (C vs. A) erstatter DNA-regnefags rene A-løsning.**
   Fordi sensor eksplisitt skiller grunntolkning (C) fra kontroll-logikk/andel
   mediering/kausalitetsforbehold/standardisert-koeffisient-nyanse (A), gis hver
   kjerneoppgave en **bestått-versjon** og en **A-versjon** med sensorkommentar i
   veiledningenes momentspråk.
5. **Symbol- og formelliste er obligatorisk.** Faget er notasjonstungt; hvert
   delkapittel med symboler/formler får en `collapsible` **«Symbol- og formelliste»**
   (rett etter Forkunnskaper) som forklarer ALLE symboler brukt i delkapitlet
   (X=T+e, rₓₓ, α, SEM, Z, T, b, β, R², ΔR², a/b/c/c′, a×b, LLCI/ULCI osv.) — per
   delkapittel, ikke arvet.
6. **Feilvaksine.** De 17 feilene i §5 drilles — særlig ΔR²-som-medieringskriterium
   (F1), kausal overtolkning (F2), konstant-/dikotom-tolkning (F3/F4), høy-α-fellen
   (F6), reliabel≠valid (F7), og mediering-vs-moderering (F9).

### Avgrensning mot andre byggede/skjelett-psykologiemner (unngå dublering — analysen §7)

PSYC2104 er profesjonsstudiets **kvantitativ metode A** og bygger videre på UiOs
innføringsmetodefag **PSY1010** (skjelett bygget). Boka **eier psykometrikjernen**
(klassisk testteori, reliabilitet, validitet, standardskårer, SEM, faktoranalyse) og
**mediering/moderering i dybden** (a×b, c/c′, Baron & Kenny, bootstrapping/Process).
GLM-verktøykassen (regresjon/ANOVA/kji-kvadrat som ren utregning) eies av **PSY2014**
(skjelett bygget) — PSYC2104 låner regresjonsoutput-lesing men holder seg til den
psykometriske/medierende vinkelen.

| PSY1010 (forutsettes kjent — repeteres kort) | PSYC2104 (bokas tyngde) | PSY2014 (hører dit — GLM-verktøy) |
|---|---|---|
| Enkel korrelasjon; r; korrelasjon ≠ kausalitet; H0/H1, p, Type I/II, power; deskriptiv statistikk; design | **Klassisk testteori (X=T+e); reliabilitet (fire former, α i dybden, α↔validitet); målingsvaliditet (konvergent/diskriminant, MTMM, baserate); standardskårer (Z/T/stanine) + SEM/KI; multippel regresjon m/ statistisk kontroll (tolkning); mediering i dybden (a×b, c/c′, hel/delvis, andel, Baron & Kenny, bootstrapping/Process); moderering; kausalitetsforbeholdet; EFA (Kaiser/Cattell/Horn, rotasjon, ladning, kommunalitet)** | Regresjon/ANOVA/kji-kvadrat som ren utregning; SST=SSb+SSw; F-tabellutfylling; dummykoding; VIF/residualdiagnostikk som verktøy; GLM-broen ANOVA↔regresjon |

**Kort:** PSY1010-boka lærer *hva* korrelasjon og hypotesetesting er. **PSY2014-boka
eier den generelle lineære modellen** som utregningsverktøy. **PSYC2104-boka eier
det psykometriske stoffet** (hvordan man konstruerer og evaluerer måleinstrumenter)
og den tunge medierings-/modereringspipelinen (Baron & Kenny, bootstrapping/Process,
indirekte effekt). Der fagene overlapper på regresjonsoutput holder PSYC2104 seg til
psykometri-/medieringsvinkelen og henviser GLM-verktøyet (ANOVA-ekvivalens,
tabellutfylling, VIF-mekanikk) til PSY2014. Del 0 åpner med en kort «du kan dette fra
PSY1010»-bro (lenk til PSY1010- og PSY2014-kapitler når de finnes ved byggetid —
ellers utelates lenken). Ingen overlapp av betydning med PSY1000 (generell) eller
PSYC1201 (sosial).

### Pensumankere (fra analysen §6 — brukes i innholdskontraktene)

| Kilde | Rolle | Det veiledningene henter derfra (verifiser — utgaveavhengig) |
|---|---|---|
| **Lærebok i teststatistikk / psykometri (klassisk testteori)** | Reliabilitet, validitet, standardskårer, SEM, baserate/seleksjonsrate | X = T + e; de fire reliabilitetsformene; Spearman-Brown; validitetstypologien (innhold/kriterie/begrep, konvergent/diskriminant, MTMM); SEM-formlene; baserate/seleksjonsrate og sanne/falske positive |
| **Lærebok/forelesning i regresjon og faktoranalyse** | Multippel regresjon, mediering, moderering, EFA | Tolkning av b/β/R²; statistisk kontroll; Baron & Kenny fire trinn; Hayes/Preacher & Hayes Process-makro og bootstrapping; Sobels test; EFA (Kaiser/Cattell/Horn, rotasjon, ladning, kommunalitet, enkel struktur, faktor(baserte) skårer) |
| **Forelesningene (Canvas)** | Selvstendig kilde | Split-half + Spearman-Brown-utledning; parallellanalyse-simulering; skille mediering/moderering; forbehold om at målefeil i mediator krever SEM-modell (utenfor pensum) |

### Statistisk notasjon boka må normalisere (inn i Symbol- og formellistene)

| Notasjon | Betydning |
|---|---|
| X = T + e | observert = sann skåre + målefeil (klassisk testteori) |
| rₓₓ (rxx′, ρxx′) | reliabilitetskoeffisient |
| α (Cronbachs alfa) | intern konsistens-reliabilitet |
| SEM = σ√(1 − rₓₓ) | standardfeil for måling |
| SEM_diff = σ√(2 − rₓₓ − rₓₓ) | standardfeil for differanse mellom to personer |
| Z = (X − M)/SD ; T = 50 + 10·Z | standardskåre-transformasjoner |
| b, β (Stand. Estimate) | ustandardisert / standardisert regresjonskoeffisient |
| R², ΔR² | forklart varians; endring i forklart varians |
| a, b, c, c′ ; a×b | medieringsstier og indirekte effekt (a×b = c − c′) |
| LLCI/ULCI, BootLLCI/BootULCI | nedre/øvre konfidensgrense (bootstrap) |
| p, «<.001» | signifikanssannsynlighet mot α = 0,05 |
| egenverdi, ladning (λ), kommunalitet (h²) | faktoranalyse |

Regneferdighetene som faktisk er krevd (snille tall, formel oppgitt eller forventet):
Z- og T-skåre fra M, SD og X; forventet Y for gruppe fra konstant + b; SEM fra σ og
rₓₓ; KI for sann skåre (X ± 1,96·SEM); SEM_diff og «reell forskjell?»-test; indirekte
effekt a×b og andel mediering a×b/c; avlesning av regresjons-, medierings-, path- og
faktoranalysetabeller.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = sett-forekomster + antall av 17 +
> oppgavesjangre (M/R/V/S/F) + prioritetsklasse (perfekt/kunne/kjenne, fra §7).
> **Innholdskontrakt** = definisjoner/formler som SKAL med (med notasjon),
> utledninger som kreves aktivt vs. kun bruk, og hvilken output-simulator/
> begrepsmodul kapitlet skal ha. **Oppgavesjangre** = mønstrene kapitlet driller
> (med nyskrevet mønstereksempel). **Typiske feil** = feilkodene (F1–F17). **Kvote**
> = quiz/flashcards.

Hvert temakapittel følger DNA-regnefags teorikapittel-DNA (output-kapitler) eller
DNA-drøftings temakapittel-DNA (psykometri-begrepskapitler), konkretisert:
`tip` Eksamensvinkel → `text` Forkunnskaper + `collapsible` Symbol- og formelliste →
`text` Motivasjon/temaet i faget → `definition`/`theorem` begreper i emnets notasjon
→ `text` utledning/mekanisme med intuisjon → `example` **output-simulator ELLER
redegjørelses-modul** med bestått/A-modellsvar → `warning` typiske feil → `exercise`
× 6–12 (stigende, ender på eksamensnivå, med `solution` + `hints`) → `collapsible`
repetisjonsoppgaver / pensumkart.

### Del 0 — Eksamenskart og regne-/output-håndverk

#### Kapittel 0.1: Slik testes PSYC2104 — «alle oppgaver skal besvares» og de tre oppgavene
**id:** `psyc2104-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** meta/eksamenskart.
- **Description:** Eksamensformen, den faste tredelingen (oppgave 1 og 2 à 25 % =
  korte psykometrioppgaver; oppgave 3 = 50 % output-tolkning), bestått-mekanikken
  (alle tre må bestå — ingen kompensasjon), og temafrekvensen — studentens
  prioriteringsverktøy.
- **Eksamensbelegg:** Metakapittel (hele arkivet V2017–V2026, 17 sett). Skal formidle:
  (a) **formen** — 3 t skriftlig skoleeksamen i Inspera, ingen hjelpemidler (enkel
  kalkulator forutsettes ved regning), sensur etter tre uker, karakter A–F; (b) **den
  faste tredelingen** (25/25/50 fra ca. 2022) og at ALT er obligatorisk (kontrast til
  PSY1010/PSYC1201s «velg 3 av 4»), inkl. bestått-mekanikken (manglende oppgave 3 =
  ikke bestått); (c) **temafrekvens-tabellen** — multippel regresjon 16/17, mediering
  14/17, kausalitetsforbeholdet 10/17, reliabilitet 10/17, validitet 9/17,
  «endrer b seg ved kontroll?» 9/17, bootstrapping 9/17, standardiserte β 8/17,
  standardskårer 7/17, Cronbachs α i dybden 7/17, forutsetninger 5/17 (stigende),
  faktoranalyse 4/17 (utfaset), SEM 4/17, moderering 3/17; (d) **gjenbruket** — samme
  oppgaveforløp fra sett til sett (scenarioene gjenbrukes nesten ordrett), så å
  drille gamle mønstre er den mest treffsikre forberedelsen. Sjangre: meta.
  Prioritet: perfekt.
- **Innholdskontrakt:** eksamensform-fakta; den faste tredelingen + bestått-
  mekanikken; «alle oppgaver skal besvares»; temafrekvens-tabellen; pensumankrene;
  oversikten M/R/V/S/F (peker til 0.2); regnekjernen som kommer syklisk igjen (peker
  til 10.1). Ingen output-simulator (kart) — men en «slik er et typisk sett bygd
  opp»-gjennomgang av ett nyskrevet tredelt eksempelsett med vekting per oppgave.
- **Oppgavesjangre:** ingen (kartkapittel) — leseferdighet: gjenkjenne hvilken av de
  tre oppgavetypene man står i.
- **Typiske feil:** misforståelsen at man kan velge bort en oppgave; undervurdere
  oppgave 3-vekten og bestått-mekanikken (alle tre må bestå).
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 0.2: Output- og regnehåndverket — les tabellen, vis regningen, løft fra C til A
**id:** `psyc2104-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `psyc2104-0-1`

- **Kapitteltype:** meta/håndverk.
- **Description:** Hvordan man leser regresjons-/medierings-/path-output (jamovi- og
  SPSS-dialekt), viser utregning (Z/T/SEM/a×b), og hva som skiller bestått (C) fra
  topp (A) ifølge sensorlogikken. Etablerer output-simulatoren, begrepsmodulen og
  C/A-modellsvaret som bokas gjennomgående maler.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile V2017–2026
  (samme kjerneteam). Sjangre: meta. Prioritet: perfekt. Skal operasjonalisere: (a)
  **de to output-dialektene** — jamovi (Estimate/SE/t/p/Stand. Estimate; egne
  «Mediation Estimates»- og «Path Estimates»-tabeller med a×b, direkte, total,
  % mediering) og SPSS, side ved side på samme nyskrevne data; (b) **«vis
  fremgangsmåten»** (F10) — regneoppgaver krever synlig utregning; (c) **definér-og-
  bruk** — kort definisjon anvendt på output honoreres; (d) **eksempelpremien** —
  eksempler trekker opp i redegjørelsesoppgavene; (e) **nivåbildet**: A/B tolker hele
  output presist + kontroll-logikk + andel mediering + kausalitetsforbehold +
  standardisert-koeffisient-nyanse; C = grunntolkning + korrekt regning, men mangler
  kontroll-logikken/andel mediering/de fine skillene; D/E = upresist, feiltolker
  konstant/dikotom; F = oppgave 3 reelt ubesvart.
- **Innholdskontrakt:** output-leseskjema (hvor står b, SE, t, p, β, R², a, b, c, c′,
  a×b, BootLLCI/ULCI); regnekjernen (Z, T, SEM, KI, SEM_diff, a×b, andel mediering)
  presentert som «dette er billige, faste poeng»; C/A-modellsvar-malen; `collapsible`
  **Symbol- og formelliste** for hele notasjonstabellen (§2).
- **Output-simulator:** ett nyskrevet lite regresjons-/medieringsoutput lest i
  jamovi- og SPSS-dialekt parallelt, med bestått- og A-tolkning side ved side.
- **Oppgavesjangre:** meta — «les denne output-linjen», «hva mangler i C-svaret for å
  bli A?».
- **Typiske feil:** F10 (usynlig regning), F1 (ΔR² som medieringskriterium), samt en
  oversikt over alle F1–F17 (drilles i temakapitlene og 10.2).
- **Kvote:** 16 quiz / 16 flashcards.

### Del 1 — Klassisk testteori og reliabilitet

#### Kapittel 1.1: Klassisk testteori — X = T + e og hva reliabilitet er
**id:** `psyc2104-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** tema (begrepsmodul).
- **Description:** Fundamentet for hele psykometrikjernen: observert skåre = sann
  skåre + målefeil (X = T + e), reliabilitet som andel sann varians i observert
  varians, og hvorfor målefeil er uunngåelig.
- **Eksamensbelegg:** Grunnlag for reliabilitet (10/17) og SEM (4/17). Sjangre: R/S.
  Prioritet: **perfekt** (fundament).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **X = T + e** (observert =
  sann skåre + tilfeldig målefeil e); **reliabilitet = andel sann varians**
  (σ²_T/σ²_X); **parallelle målinger** (samme T, uavhengige e); målefeil som
  tilfeldig (systematisk feil hører til validitet); reliabilitetskoeffisienten rₓₓ
  (0–1). *Bruk* av modellen; ingen tung utledning. `collapsible` Symbol- og
  formelliste: X, T, e, σ²_T, σ²_X, rₓₓ.
- **Begrepsmodul:** presis definisjon av reliabilitet fra X = T + e → hverdagseksempel
  (samme person testet to ganger gir litt ulike skårer) → avveining (høy reliabilitet
  = lite tilfeldig støy, men sier ingenting om hva som måles → bro til validitet
  Del 2). Bestått (definerer X=T+e) vs. A (kobler reliabilitet til varianskomponentene
  og skiller tilfeldig fra systematisk feil).
- **Oppgavesjangre:** R (grunnlag): «forklar reliabilitet ut fra klassisk testteori».
- **Typiske feil:** F7 (reliabel = valid-forløper); blande tilfeldig og systematisk
  målefeil.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 1.2: De fire reliabilitetsformene — test–retest, parallell, split-half, Cronbachs α
**id:** `psyc2104-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-1-1`

- **Kapitteltype:** tema (begrepsmodul).
- **Description:** De fire hovedformene for å estimere reliabilitet, hver med
  styrker/svakheter, og — A-markøren — hvorfor valg av metode avhenger av om trekket
  er stabilt over tid.
- **Eksamensbelegg:** Fast kortoppgave (reliabilitet 10/17). Sjangre: R. Prioritet:
  **perfekt** (§7 pkt. 3).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **test–retest** (samme test
  to ganger; stabilitet over tid; best for stabile trekk — F8: fanger ekte endring
  som lav reliabilitet for ustabile trekk); **alternativ/parallell form** (to
  ekvivalente versjoner); **split-half** (del testen i to; korreler halvdelene; må
  **Spearman-Brown-korrigeres** fordi halvering senker reliabiliteten, F16); **intern
  konsistens / Cronbachs α** (gjennomsnittlig split-half over alle mulige delinger);
  **interrater** (nevnes); styrker/svakheter per form. `collapsible` Symbol- og
  formelliste: rₓₓ, r_halv, Spearman-Brown-formelen, α.
- **Begrepsmodul:** de fire formene definert → eksempel (velg riktig form for et
  stabilt trekk som IQ vs. et foranderlig trekk som humør) → avveining (test–retest
  for stabile trekk; α praktisk fordi kun én testing kreves). Bestått (nevner de fire)
  vs. A (kobler metodevalg til trekkets stabilitet + Spearman-Brown-poenget).
- **Oppgavesjangre:** R: «gjør rede for ulike måter å estimere reliabilitet, med
  styrker og svakheter»; «hvilken form ville du valgt for [trekk], og hvorfor?».
- **Typiske feil:** F8 (test–retest for ustabilt trekk); F16 (glemme Spearman-Brown
  ved split-half); F14 (svare validitet på reliabilitetsspørsmål).
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 1.3: Cronbachs α i dybden — hva α avhenger av, item-analyse og «høy α ≠ god skala»
**id:** `psyc2104-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-1-2`

- **Kapitteltype:** tema (begrepsmodul + differensiator).
- **Description:** Det klassiske differensieringsleddet: hva α avhenger av (antall
  ledd + interkorrelasjoner), item-analyse («α if item deleted», item-total-
  korrelasjon), og den viktige innsikten at svært høy α kan bety for smal måling og
  svekket innholds-/begrepsvaliditet.
- **Eksamensbelegg:** Cronbachs α i dybden (7/17), særlig «α = .95 — bra eller
  problematisk?» og α-tolkning/tiltak. Sjangre: R. Prioritet: **perfekt** (§7 pkt. 3).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **α avhenger av** (i) antall
  ledd og (ii) leddenes interkorrelasjoner; **tolkning av α-verdi** (≥ 0,70
  tilfredsstillende for forskning; 0,45/0,68 for lav → mye målefeil); **item-analyse**
  («α if item deleted», item-total-korrelasjon); **tiltak** (fjerne/reformulere svake
  ledd, legge til relevante ledd — veid mot innholdsdekning); **«α = .95 —
  problematisk?»** (høy α = høy reliabilitet, men med få ledd kan svært høy α bety at
  leddene er *for like* og måler et *for smalt* aspekt → svekket innholds-/
  begrepsvaliditet, F6); **«ville du fjernet et ledd som øker α?»** (nei automatisk —
  liten α-økning veies mot innholdsvaliditet; negativt-/null-korrelert ledd kan tyde
  på flerdimensjonalitet → faktoranalyse). `collapsible` Symbol- og formelliste: α,
  item-total-korrelasjon, «α if item deleted».
- **Begrepsmodul:** α-avhengighetene → eksempel (α = .95 på en 40-ledds skala vs. på
  en 4-ledds skala) → avveining (reliabilitet vs. bredde). Bestått (tolker α-verdi
  korrekt) vs. A (ser at høy α kan svekke validitet + veier ledd-fjerning mot
  innholdsdekning).
- **Oppgavesjangre:** R: «tolk α = 0,45 og foreslå tiltak»; «α = .95 — bra eller
  problematisk?»; «ville du fjernet leddet som øker α?».
- **Typiske feil:** F6 (høy α ukritisk hyllet); fjerne ledd blindt for å øke α; F14.
- **Kvote:** 22 quiz / 26 flashcards.

### Del 2 — Målingsvaliditet

#### Kapittel 2.1: Former for målingsvaliditet — innhold, kriterie og begrep
**id:** `psyc2104-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-1-1`

- **Kapitteltype:** tema (begrepsmodul).
- **Description:** De tre hovedformene for målingsvaliditet med undertyper, og
  A-markøren: hvilken form som er viktigst avhenger av testens hensikt.
- **Eksamensbelegg:** Fast kortoppgave (validitet 9/17). Sjangre: V. Prioritet:
  **perfekt** (§7 pkt. 4).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **innholdsvaliditet**
  (ekspertvurdering av relevans + representativitet; **face validity** som svakere
  variant); **kriterievaliditet** (**samtidig/concurrent** vs. **prediktiv**; målt som
  **validitetskoeffisient** = korrelasjon med kriterium, F17); **begreps-/
  konstruktvaliditet** (**konvergent** = høy korrelasjon med beslektede mål;
  **diskriminant** = lav korrelasjon med urelaterte mål, F17; **multitrait-
  multimethod**; faktoranalyse for intern struktur — bro til Del 8); **hensikts-
  avhengighet** (A-markør: hvilken form som er viktigst avhenger av om testen skal
  måle et begrep vs. ta beslutninger/selektere). `collapsible` Symbol- og formelliste:
  validitetskoeffisient, konvergent/diskriminant, MTMM.
- **Begrepsmodul:** de tre formene definert → eksempel (en depresjonsskala: innhold =
  dekker den DSM-symptomene? kriterie = korrelerer den med klinisk diagnose? begrep =
  korrelerer den høyt med angst [konvergent] og lavt med IQ [diskriminant]?) →
  avveining (hensiktsavhengighet). Bestått (nevner de tre formene) vs. A (kobler
  valg av validitetsform til testens hensikt + presise konvergent/diskriminant-
  eksempler).
- **Oppgavesjangre:** V: «gjør rede for former for målingsvaliditet»; «hvilken form er
  viktigst for en seleksjonstest?».
- **Typiske feil:** F17 (konvergent/diskriminant eller samtidig/prediktiv forvekslet);
  F14 (svare reliabilitet på validitetsspørsmål).
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 2.2: Reliabel ≠ valid — samspillet mellom reliabilitet og validitet
**id:** `psyc2104-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `psyc2104-2-1`

- **Kapitteltype:** tema (begrepsmodul + differensiator).
- **Description:** Det faste differensieringsleddet: reliabilitet er en nødvendig,
  men ikke tilstrekkelig betingelse for validitet, og hvordan man tolker en test med
  høy reliabilitet men svak validitet (eller omvendt).
- **Eksamensbelegg:** «Reliabel ≠ valid»-poenget (inngår i validitets-/reliabilitets-
  oppgavene, differensierer). Sjangre: R/V. Prioritet: **perfekt** (§7 pkt. 4).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **reliabilitet som
  nødvendig, ikke tilstrekkelig betingelse** for validitet (en test kan ikke være
  valid uten å være reliabel, men reliabel ≠ valid, F7); **høy reliabilitet + svak
  konvergent validitet** → testen måler kanskje noe annet; **høy begrepsvaliditet +
  lav kriterievaliditet** → måler begrepet presist men predikerer utfall dårlig →
  lite nyttig i praksis; blindbøssa-metaforen (presist, men på feil mål).
  `collapsible` Symbol- og formelliste: rₓₓ, validitetskoeffisient, nødvendig/
  tilstrekkelig betingelse.
- **Begrepsmodul:** samspillet definert → eksempel (en badevekt som konsekvent viser
  3 kg for mye: reliabel, ikke valid) → avveining (kan en test være valid uten å være
  reliabel? nei). Bestått (sier reliabel ≠ valid) vs. A (forklarer nødvendig-men-
  ikke-tilstrekkelig + tolker begge asymmetriske tilfeller).
- **Oppgavesjangre:** V: «kan en test være valid uten å være reliabel?»; «høy
  reliabilitet, men svak korrelasjon med etablerte mål — hva sier det?».
- **Typiske feil:** F7 (reliabel = valid); F14 (blande de to kvalitetsbegrepene).
- **Kvote:** 18 quiz / 20 flashcards.

### Del 3 — Standardskårer og standardfeil for måling (SEM)

#### Kapittel 3.1: Standardskårer — Z, T, IQ, stanine/sten og prosentiler
**id:** `psyc2104-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** tema (regne- + begrepsmodul).
- **Description:** Hvorfor råskårer er vanskelige å tolke, og hvordan man
  transformerer dem til standardskårer (Z, T, IQ, stanine, sten) og tolker mot
  normalfordelingen — samt hva man gjør ved ikke-normalfordelte skårer.
- **Eksamensbelegg:** Fast regne-/redegjørelsesoppgave (standardskårer 7/17). Sjangre:
  S. Prioritet: **perfekt** (§7 pkt. 5).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **råskåre/sumskåre** og
  hvorfor de er vanskelige (avhenger av skala); **Z-skåre** Z = (X − M)/SD (M = 0,
  SD = 1); **T-skåre** T = 50 + 10·Z (M = 50, SD = 10); **IQ-skåre** (M = 100,
  SD = 15); **stanine** (M = 5, SD = 2) og **sten** (M = 5,5, SD = 2); **percentiler**;
  **normalfordelingen** som grunnlag (68/95/99,7; Z = 2 ≈ 97,5-percentilen); **formål**
  (sammenlignbarhet på tvers av personer/tester/delskalaer); **ved ikke-normalitet**
  bruk prosentiler eller stanine (fordelingsfrie relative posisjoner) i stedet for
  Z/T. Regning med snille tall (F10). `collapsible` Symbol- og formelliste: X, M, SD,
  Z, T, percentil, stanine, sten.
- **Output-/regne-simulator:** nyskrevet: «M = 18, SD = 3, X = 24 — regn Z og T, og
  tolk avviket mot normalfordelingen»; «skårene er ikke normalfordelte — hvilken
  alternativ posisjonsmåte?». Bestått (regner Z/T riktig) vs. A (tolker mot
  percentil + velger fordelingsfritt mål ved ikke-normalitet + viser regning).
- **Oppgavesjangre:** S: «regn om X til Z- og T-skåre og vurder avviket»; «hvorfor er
  standardskårer nyttige?».
- **Typiske feil:** F10 (ikke vise regning); forveksle Z og T; bruke Z/T ved ikke-
  normalfordelte skårer.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 3.2: Standardfeil for måling (SEM) — KI for sann skåre og SEM for differanse
**id:** `psyc2104-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-3-1`

- **Kapitteltype:** tema (regnemodul).
- **Description:** Hvordan reliabilitet oversettes til presisjon på individnivå:
  standardfeilen for måling, konfidensintervall for sann skåre, og standardfeilen for
  differansen mellom to personer («er forskjellen reell?»).
- **Eksamensbelegg:** Fast regneoppgave 2020–2022 (SEM 4/17). Sjangre: S. Prioritet:
  **perfekt/kunne** (§7 pkt. 5).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **SEM = σ√(1 − rₓₓ)**
  (bygger på X = T + e fra 1.1); **avhengighet** (vokser med SD, krymper med
  reliabilitet; rₓₓ = 1 → SEM = 0); **KI for sann skåre** X ± 1,96·SEM (95 %);
  **SEM_diff = σ√(2 − rₓₓ − rₓₓ)** for differanse mellom to personer; **«reell
  forskjell?»**-test (forskjellen er reell på 95 %-nivå hvis den overstiger
  1,96·SEM_diff). Regning med snille tall (F10). `collapsible` Symbol- og formelliste:
  SEM, σ, rₓₓ, KI, SEM_diff, 1,96.
- **Output-/regne-simulator:** nyskrevet: «σ = 15, rₓₓ = 0,84 — regn SEM og lag et
  95 %-KI for en person som skårer 110»; «to personer skårer 108 og 116 — er
  forskjellen reell?». Bestått (regner SEM/KI) vs. A (tolker KI-bredden + SEM_diff-
  differansetest + kobler til rₓₓ).
- **Oppgavesjangre:** S: «regn SEM og KI for sann skåre»; «er differansen mellom to
  personer reell (SEM_diff)?».
- **Typiske feil:** F10 (usynlig regning); glemme Spearman-Brown vs. SEM (ulike
  formler); bruke SEM i stedet for SEM_diff for differanse.
- **Kvote:** 20 quiz / 20 flashcards.

### Del 4 — Multippel regresjon og statistisk kontroll

#### Kapittel 4.1: Multippel regresjon — tolke output med en dikotom hovedprediktor
**id:** `psyc2104-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** tema (output-kapittel).
- **Description:** Bokas ryggrad starter: hvordan man leser output fra en modell med
  en dikotom «gruppe»-prediktor (0/1) + kontinuerlige prediktorer — b for en dikotom
  = gruppeforskjellen, konstantledd = forventet Y for referansegruppen, forventet Y
  per gruppe, og R² som forklart varians.
- **Eksamensbelegg:** Den suverene gjengangeren — kjernen i den 50 %-tunge oppgave 3
  (regresjon 16/17). Sjangre: M. Prioritet: **perfekt** (§7 pkt. 1).
- **Innholdskontrakt:** regresjons-boka (verifiser): **multippel regresjon**
  Ŷ = b₀ + b₁X₁ + … + bₚXₚ; **dikotom (0/1-kodet) prediktor** — b = gjennomsnitts­
  forskjellen mellom gruppene (F4); **konstantledd** = forventet Y for
  referansegruppen (kodet 0), og ved flere prediktorer når *alle* er 0 (F3);
  **forventet Y per gruppe** (referanse = konstant; gruppe 1 = konstant + b —
  regning); **kontinuerlig prediktor** (enhet-for-enhet); **R² som andel forklart
  varians** (med realistisk forbehold — «100 % ville betydd identiske skårer,
  urealistisk»); **signifikans** (p mot 0,05, «<.001»). *Bruk* av formlene.
  `collapsible` Symbol- og formelliste: Ŷ, b₀, b, X, dummy 0/1, R², p.
- **Output-simulator:** nyskrevet regresjonsoutput (jamovi-stil) med én dikotom + én
  kontinuerlig prediktor — tolk hver koeffisient, konstantleddet, R², og regn
  forventet Y for hver gruppe. Bestått (grunntolkning + regning) vs. A (presist
  konstantledd + dikotom = gruppeforskjell + R²-forbeholdet).
- **Oppgavesjangre:** M: «tolk koeffisienten i modell 1 og oppgi forventet skåre for
  hver gruppe»; «hva betyr R² her?».
- **Typiske feil:** F3 (konstantledd); F4 (dikotom b som «per enhet»); F10 (ikke vise
  regning).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.2: Statistisk kontroll og konfundering — hvorfor b endres når kontrollvariabler legges til
**id:** `psyc2104-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `psyc2104-4-1`

- **Kapitteltype:** tema (output-kapittel).
- **Description:** Det sentrale A/B-skillet i regresjonsoppgaven: hvorfor en
  gruppeforskjell (b) endres når kontrollvariabler (alder/kjønn/helse) legges til —
  korrelerte prediktorer, statistisk kontroll, isolering av den unike effekten, og
  konfundering.
- **Eksamensbelegg:** «Endrer b seg ved kontroll?» / konfundering (9/17). Sjangre: M.
  Prioritet: **perfekt** (§7 pkt. 1 — kjerne-A/B-skillet).
- **Innholdskontrakt:** regresjons-boka (verifiser): **statistisk kontroll /
  justering** (holde andre prediktorer konstant); **unik vs. delt varians**;
  **hvorfor b endres** (prediktorene er korrelerte → kontroll isolerer den unike
  effekten av gruppevariabelen; gruppene sammenlignes «som om de hadde samme alder»);
  **konfundering** (hvis b krymper mye var den opprinnelige forskjellen delvis
  konfundert — spuriøs); tallfesting av kontroll-logikken (A-markør); (kort «bør
  kjenne til») suppressor (b vokser/skifter fortegn — henvis PSY2014 for dybden).
  `collapsible` Symbol- og formelliste: b (modell 1 vs. modell 2), kontrollvariabel,
  konfunder.
- **Output-simulator:** to nøstede nyskrevne modeller (modell 1 bivariat →
  modell 2 med to kontrollvariabler) der gruppe-b krymper — forklar hvorfor og
  tallfest kontroll-logikken. Bestått (nevner statistisk kontroll) vs. A (forklarer
  isolering av unik effekt + definerer konfundering + tallfester).
- **Oppgavesjangre:** M: «modellen utvides med kontrollvariabler — hvorfor endres
  gruppeforskjellen?».
- **Typiske feil:** F5 (ikke koble til korrelerte prediktorer/konfundering); F2
  (kausal overtolkning).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 4.3: Standardiserte (beta-)koeffisienter og modell 2-beskrivelsen
**id:** `psyc2104-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-4-2`

- **Kapitteltype:** tema (output-kapittel).
- **Description:** Hvordan man beskriver en full modell (retning, styrke, signifikans
  per koeffisient) og bruker standardiserte β til å sammenligne prediktorers relative
  styrke — med den viktige begrensningen at standardiserte β er lite meningsfulle for
  dikotome prediktorer.
- **Eksamensbelegg:** Standardiserte β (8/17); «beskriv modell 2» (fast delledd i
  output-oppgaven). Sjangre: M. Prioritet: **perfekt** (§7 pkt. 6).
- **Innholdskontrakt:** regresjons-boka (verifiser): **standardisert (beta-)
  koeffisient** β (SD-endring i Y per SD-endring i X); **sammenligne relativ styrke**
  på tvers av ulike skalaer; **begrensning for dikotome prediktorer** (ett SD er ikke
  en meningsfull enhet for en 0/1-variabel, F4 — A-markør); **beskrive modell 2**
  (tolk hver koeffisient — enhet-for-enhet for kontinuerlige, gruppeforskjell for
  dikotome — kommenter signifikans og R²); **standardisert β = r ved én prediktor**
  (kort). `collapsible` Symbol- og formelliste: β, b, SD, R².
- **Output-simulator:** nyskrevet modell 2-output — beskriv retning/styrke/signifikans
  per koeffisient og bruk standardiserte β til å rangere de kontinuerlige
  prediktorene. Bestått (leser β) vs. A (rangerer korrekt + advarer mot β for dikotom
  prediktor).
- **Oppgavesjangre:** M: «beskriv resultatene i modell 2 (retning, styrke,
  signifikans)»; «hva viser standardiserte koeffisienter, og er de nyttige her?».
- **Typiske feil:** F4 (standardisert β for dikotom prediktor tolket som meningsfull);
  rangere med ustandardiserte koeffisienter på ulike skalaer.
- **Kvote:** 20 quiz / 20 flashcards.

### Del 5 — Regresjonsforutsetninger og kurvilinearitet

#### Kapittel 5.1: Forutsetninger for regresjon og residualdiagnostikk
**id:** `psyc2104-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-4-1`

- **Kapitteltype:** tema.
- **Description:** Hvilke forutsetninger man ville sjekket før man stoler på en
  regresjonsmodell — linearitet, normalfordelte residualer, innflytelsesrike
  uteliggere, multikollinearitet — og hvordan man ser dem.
- **Eksamensbelegg:** «Hvilke forutsetninger ville du sjekket?» (5/17, stigende).
  Sjangre: M. Prioritet: **kunne** (§7 pkt. 7).
- **Innholdskontrakt:** regresjons-boka / forelesningene (verifiser): **linearitet**;
  **normalfordelte residualer** (histogram/QQ-plot); **innflytelsesrike uteliggere**;
  **multikollinearitet** (høyt korrelerte prediktorer; **toleranse/VIF**; ofte allerede
  avklart via prediktorenes interkorrelasjon); homoskedastisitet (kort). Dybden på
  VIF-mekanikk og innflytelsesstatistikk henvises til PSY2014. `collapsible` Symbol-
  og formelliste: residual, VIF, toleranse.
- **Output-simulator:** en nyskrevet (verbalt beskrevet) residualfigur + en
  korrelasjonstabell — hvilken forutsetning ser problematisk ut? Bestått (lister
  forutsetningene) vs. A (kobler figuren til rett forutsetning + fiks).
- **Oppgavesjangre:** M: «hvilke forutsetninger ville du sjekket før du stoler på
  modellen?».
- **Typiske feil:** overse multikollinearitet; forveksle heteroskedastisitet og
  ikke-linearitet.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 5.2: Kurvilineær sammenheng — kvadratledd og ΔR²
**id:** `psyc2104-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-5-1`

- **Kapitteltype:** tema (ny fast deloppgave).
- **Description:** Den nye faste deloppgaven (V2025, H2025): hva menes med en
  kurvilineær sammenheng, og hvordan man tester den — kvadratledd (X²) og signifikant
  ΔR²/signifikant kvadratkoeffisient.
- **Eksamensbelegg:** Kurvilineær effekt (V2024, V2025, H2025, H2024 — stigende).
  Sjangre: M. Prioritet: **kunne/perfekt** (§7 pkt. 7 — stigende).
- **Innholdskontrakt:** regresjons-boka (verifiser): **kurvilineær (ikke-lineær)
  sammenheng** (f.eks. avtakende effekt av inntekt på tilfredshet); **kvadratledd**
  (inkluder X² i modellen); **test** — signifikant X²-koeffisient ELLER signifikant
  **ΔR²** støtter kurvilinearitet; **spredningsdiagram av residualer** (kvadratisk
  struktur = ikke-linearitet); tolke fortegn på X² (konkav/konveks) kort. Dybden på
  modellsammenlikning (AIC/nested-F) henvises til PSY2014. `collapsible` Symbol- og
  formelliste: X², b (kvadratledd), ΔR².
- **Output-simulator:** nyskrevet output med et signifikant X²-ledd + en beskrevet
  residualfigur — er sammenhengen kurvilineær, og hvordan ser du det? Bestått (ser X²
  signifikant) vs. A (kobler til ΔR² + residualstruktur).
- **Oppgavesjangre:** M: «er sammenhengen mellom X og Y kurvilineær? Hva menes, og
  hvordan testes det?».
- **Typiske feil:** ikke bruke ΔR²/kvadratkoeffisient som test; forveksle kurvilineær
  med interaksjon.
- **Kvote:** 18 quiz / 18 flashcards.

### Del 6 — Mediering

#### Kapittel 6.1: Mediering — mediatorbegrepet, stiene a/b/c/c′ og indirekte effekt
**id:** `psyc2104-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `psyc2104-4-2`

- **Kapitteltype:** tema (output-kapittel).
- **Description:** Bokas andre ryggrad: hva en mediator er (X→M→Y), hvordan man tolker
  medierings-/path-stiene a (X→M), b (M→Y|X), c (total X→Y), c′ (direkte X→Y|M), og
  hvordan den indirekte effekten a×b = c − c′ regnes og formuleres i ord.
- **Eksamensbelegg:** Nesten alltid siste og tyngste ledd i oppgave 3 (mediering
  14/17). Sjangre: M. Prioritet: **perfekt** (§7 pkt. 2 — boka EIER dette).
- **Innholdskontrakt:** regresjons-boka (verifiser): **mediator/mellomliggende
  variabel** i kausalkjeden X→M→Y; **stiene** a (X→M), b (M→Y kontrollert for X),
  c (total X→Y), c′ (direkte X→Y kontrollert for M); **indirekte effekt a×b = c − c′**;
  **lese path-/medieringstabell** (jamovi «Path Estimates»/«Mediation Estimates» med
  a×b, direkte, total, % mediering — bro fra 0.2); regning av a×b med snille tall
  (F10). *IKKE ΔR² som medieringskriterium* (F1 — eksplisitt minuspoeng). `collapsible`
  Symbol- og formelliste: X, M, Y, a, b, c, c′, a×b.
- **Output-simulator:** nyskrevet path-/medieringstabell — les a, b, c, c′, regn a×b
  og bekreft a×b = c − c′, formuler den indirekte effekten i ord. Bestått (leser
  stiene + regner a×b) vs. A (bekrefter a×b = c − c′ + formulerer mekanismen presist).
- **Oppgavesjangre:** M: «beskriv medieringsstiene og regn den indirekte effekten».
- **Typiske feil:** F1 (ΔR² som medieringskriterium — minuspoeng); F10 (ikke regne
  a×b); blande c og c′.
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 6.2: Hel vs. delvis mediering, andel mediering og Baron & Kenny
**id:** `psyc2104-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-6-1`

- **Kapitteltype:** tema (output-kapittel + differensiator).
- **Description:** Hvordan man avgjør om medieringen er hel eller delvis, beregner
  andel mediering (a×b / c) — en klar A-markør — og gjennomfører Baron & Kennys
  firetrinns fremgangsmåte.
- **Eksamensbelegg:** «Hel eller delvis mediering?» + Baron & Kenny (fast i
  medieringsoppgaven). Sjangre: M. Prioritet: **perfekt** (§7 pkt. 2).
- **Innholdskontrakt:** regresjons-boka (verifiser): **hel vs. delvis mediering**
  (delvis hvis c′ fortsatt ≠ 0 men redusert; tilnærmet full hvis c′ blir liten/ikke-
  signifikant); **andel mediering = a×b / c** (A-markør — regn og formuler i ord);
  **Baron & Kenny fire trinn** (1) X→Y (c) signifikant, (2) X→M (a) signifikant,
  (3) M→Y|X (b) signifikant, (4) c′ redusert vs. c; **kritikk av Baron & Kenny**
  (krever ikke lenger at c er signifikant; bro til bootstrapping i 6.3). `collapsible`
  Symbol- og formelliste: c, c′, a×b, andel mediering, Baron & Kenny-trinn.
- **Output-simulator:** nyskrevne nøstede modeller (modell med og uten mediator) —
  avgjør hel/delvis, regn andel mediering, og gå gjennom de fire trinnene. Bestått
  (avgjør hel/delvis) vs. A (regner andel mediering + gjennomfører fire trinn +
  bruker IKKE ΔR²).
- **Oppgavesjangre:** M: «er effekten helt eller delvis mediert?»; «beregn andel
  mediering»; «gjennomfør Baron & Kennys fire trinn».
- **Typiske feil:** F1 (ΔR² som kriterium); ikke regne andel mediering; hoppe over
  fjerde trinn.
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 6.3: Å teste den indirekte effekten — bootstrapping, Process og Sobels test
**id:** `psyc2104-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-6-2`

- **Kapitteltype:** tema (output-kapittel + differensiator).
- **Description:** Hvordan den indirekte effekten a×b faktisk signifikanstestes:
  bootstrapping (Hayes/Preacher & Hayes Process-makro) gir et konfidensintervall for
  a×b — signifikant hvis KI ikke krysser null — og hvorfor dette er en fordel framfor
  Baron & Kenny.
- **Eksamensbelegg:** «Hvordan er den indirekte effekten testet / hva er fordelen?»
  (bootstrapping 9/17). Sjangre: M. Prioritet: **perfekt** (§7 pkt. 9 — A-stoff).
- **Innholdskontrakt:** regresjons-boka / forelesningene (verifiser): **bootstrapping**
  (gjentatt trekning med tilbakelegging; percentil-KI for a×b; f.eks. 5000 utvalg);
  **Hayes/Preacher & Hayes Process-makro**; **signifikant hvis KI (BootLLCI/BootULCI)
  ikke krysser null** (A-markør); **fordel framfor Baron & Kenny** (a×b faktisk
  signifikanstestes, ikke bare en kjede av separate tester); **Sobels test** (eldre
  alternativ, forutsetter normalfordelt a×b); (kort «bør kjenne til») målefeil i
  mediator krever SEM-modell (utenfor pensum). `collapsible` Symbol- og formelliste:
  a×b, BootLLCI, BootULCI, bootstrap-utvalg, Sobels test.
- **Output-simulator:** nyskrevet bootstrap-output for a×b (BootLLCI/BootULCI) — er
  den indirekte effekten signifikant? Bestått (leser at KI ikke krysser null) vs. A
  (forklarer bootstrap-fordelen framfor Baron & Kenny + Sobels test som alternativ).
- **Oppgavesjangre:** M: «hvordan er den indirekte effekten testet, og hva er
  fordelen framfor Baron & Kenny?».
- **Typiske feil:** tro at et KI som krysser null = signifikant; ikke se bootstrap-
  fordelen; forveksle Sobels test og bootstrapping.
- **Kvote:** 20 quiz / 20 flashcards.

### Del 7 — Moderering og kausalitet i ikke-eksperimentell forskning

#### Kapittel 7.1: Moderering/interaksjon — og det skarpe skillet mot mediering
**id:** `psyc2104-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-6-1`

- **Kapitteltype:** tema (output-kapittel + differensiator).
- **Description:** Moderering via interaksjonsledd: at effekten av X på Y er *betinget*
  av en tredje variabel (moderatoren), hvordan interaksjonskoeffisientens fortegn
  tolkes (buffer vs. forsterkning), og det eksplisitte A-skillet mellom moderering
  (betingelse) og mediering (mekanisme).
- **Eksamensbelegg:** Moderering/interaksjon (3/17, introdusert 2021); skille mot
  mediering = A-stoff. Sjangre: M. Prioritet: **kunne/perfekt** (§7 pkt. 8).
- **Innholdskontrakt:** regresjons-boka (verifiser): **moderator**;
  **interaksjonsledd** (X × moderator i regresjon); **betinget/enkel effekt** (effekten
  av X avhenger av moderatorens nivå); **tolke fortegn** (negativt interaksjonsledd +
  positiv hovedeffekt → svakere effekt i én gruppe = **buffer**; positivt =
  **forsterkning**); **signifikans** via interaksjonskoeffisientens p ELLER ΔR² (samme
  p); **skille mediering ↔ moderering** (mekanisme/mellomliggende vs. betingelse/
  interaksjon, F9 — eksplisitt A-stoff). `collapsible` Symbol- og formelliste:
  interaksjonsledd, moderator, betinget effekt, buffer.
- **Output-simulator:** nyskrevet output med et signifikant interaksjonsledd — tolk
  den betingede effekten (buffer eller forsterkning?). Bestått (tolker fortegn) vs. A
  (skiller moderering skarpt fra mediering).
- **Oppgavesjangre:** M: «tolk interaksjonskoeffisienten — er dette en buffer- eller
  forsterkningseffekt?»; «hva er forskjellen på mediering og moderering?».
- **Typiske feil:** F9 (blande mediering og moderering); tolke hovedeffekten som
  ubetinget når et interaksjonsledd er med.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 7.2: Kausalitet i ikke-eksperimentell forskning — det obligatoriske forbeholdet
**id:** `psyc2104-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `psyc2104-6-2`

- **Kapitteltype:** tema (differensiator/finale).
- **Description:** Den obligatoriske finalen i medieringsoppgaven: betyr en signifikant
  mediatoreffekt at kausalitet er bevist? Svaret er alltid nei — og hvorfor
  premieres.
- **Eksamensbelegg:** Kausalitetsforbeholdet (10/17 — obligatorisk finale). Sjangre:
  M. Prioritet: **perfekt** (§7 pkt. 2 — lavthengende, men fast poeng).
- **Innholdskontrakt:** forelesningene / regresjons-boka (verifiser): **samvariasjon
  ≠ kausalitet**; **retningsproblem** (X→Y eller Y→X?); **tredjevariabel/konfundering/
  spuriøsitet**; **alternative kausalmodeller** (foreslå og tegne en); **statistisk
  kontroll som ufullstendig surrogat for randomisering**; **mediering/moderering som
  *foreslåtte* kausalmodeller, ikke bevis** (ikke-eksperimentelle data gir bare
  *støtte* for hypotesen, F2/F15). `collapsible` Symbol- og formelliste: n/a (henviser
  til stiene i 6.1).
- **Begrepsmodul:** forbeholdet definert → eksempel (a×b signifikant i en
  observasjonsstudie: foreslå en alternativ kausalmodell som gir samme mønster) →
  avveining (hva ville styrket kausalslutningen? eksperiment/randomisering). Bestått
  (sier «nei, ikke bevist») vs. A (foreslår konkret alternativ kausalmodell +
  problematiserer retning/utelatte variabler).
- **Oppgavesjangre:** M: «betyr mediatoreffekten at kausalitet er bevist? Foreslå en
  alternativ forklaring».
- **Typiske feil:** F2 (kausal overtolkning); F15 (hoppe over forbeholdet).
- **Kvote:** 18 quiz / 18 flashcards.

### Del 8 — Dimensjonalitet og eksplorerende faktoranalyse

#### Kapittel 8.1: Eksplorerende faktoranalyse — antall faktorer, ladning og kommunalitet
**id:** `psyc2104-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-1-3`

- **Kapitteltype:** tema (output-kapittel, fordypning).
- **Description:** Hvordan man tolker en EFA-output: antall faktorer (Kaiser/egenverdi
  > 1, scree/Cattell, parallellanalyse/Horn), faktorladning (= standardisert
  regresjonskoeffisient), og kommunalitet (forklart varians i en variabel).
- **Eksamensbelegg:** Faktoranalyse (4/17 — bærende 2017–2019, deretter utfaset; dekk
  solid nok til å tolke output). Sjangre: F. Prioritet: **kunne** (§7 pkt. 10).
- **Innholdskontrakt:** faktoranalyse-boka (verifiser): **latent variabel/faktor** og
  **observert indikator**; **egenverdi**; **antall faktorer** — Kaiser/egenverdi > 1
  (gir *maksimalt* antall, F11), Cattells scree-plot, Horns parallellanalyse (strengere
  — sammenlign mot egenverdier fra strukturløse tilfeldige data); **faktorladning (λ)**
  = standardisert regresjonskoeffisient (= korrelasjon når faktorene er ukorrelerte,
  A-markør); **kommunalitet (h²)** = sum av kvadrerte ladninger = forklart varians i
  variabelen; **datareduksjon**. Spearman-Brown-utledning og parallellanalyse-
  simulering nevnes kort, ikke dybde. `collapsible` Symbol- og formelliste: faktor,
  egenverdi, ladning λ, kommunalitet h².
- **Output-simulator:** nyskrevet EFA-output (egenverdier + ladningsmatrise) — hvor
  mange faktorer (Kaiser vs. parallellanalyse)? Les ladninger og kommunaliteter.
  Bestått (bruker Kaiser) vs. A (ser at Kaiser gir maks antall + parallellanalyse
  strengere + ladning = std. regresjonskoeffisient).
- **Oppgavesjangre:** F: «hvor mange faktorer, og hvordan avgjør du det?»; «tolk
  ladninger og kommunalitet».
- **Typiske feil:** F11 (Kaiser tatt bokstavelig); forveksle egenverdi og ladning.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 8.2: Rotasjon, enkel struktur og faktorskårer
**id:** `psyc2104-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-8-1`

- **Kapitteltype:** tema (output-kapittel, fordypning).
- **Description:** Hvorfor man roterer en faktorløsning (enkel/parsimonisk struktur),
  skillet ortogonal (varimax) vs. oblik rotasjon, hvordan man håndterer kryssladninger,
  og forskjellen på faktorbaserte skårer og faktorskårer.
- **Eksamensbelegg:** Del av faktoranalyseoppgaven 2017–2019. Sjangre: F. Prioritet:
  **kunne** (§7 pkt. 10).
- **Innholdskontrakt:** faktoranalyse-boka (verifiser): **rotasjon** — **ortogonal/
  varimax** (ukorrelerte faktorer; gjenkjennes ved at kvadrerte ladninger summerer til
  kommunaliteten) vs. **oblik** (tillatt korrelasjon → mønster- vs. strukturmatrise);
  **enkel/parsimonisk struktur** (hver variabel lader høyt på kun én faktor,
  ~0,32-grense); **kryssladninger/komplekst ledd** (problematiske, F13); **tolke
  roterte, ikke uroterte ladninger** (F12); **faktorbaserte skårer** (lik vekting,
  sumskåre) vs. **faktorskårer** (ladningsvektet); teoretisk navngiving av faktorer
  premieres. `collapsible` Symbol- og formelliste: varimax, oblik, mønster-/
  strukturmatrise, kryssladning, faktorskåre.
- **Output-simulator:** nyskrevet rotert ladningsmatrise med én kryssladning — er det
  enkel struktur? Navngi faktorene. Bestått (leser rotert matrise) vs. A (identifiserer
  kryssladning + tolker roterte, ikke uroterte + navngir teoretisk).
- **Oppgavesjangre:** F: «tolk den roterte løsningen — er det enkel struktur, og hva
  representerer faktorene?».
- **Typiske feil:** F12 (tolke uroterte ladninger); F13 (påstå enkel struktur tross
  kryssladninger).
- **Kvote:** 18 quiz / 18 flashcards.

### Del 9 — Bør kjenne til (perifere temaer)

#### Kapittel 9.1: Baserate, restriction of range og formative målemodeller
**id:** `psyc2104-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `psyc2104-2-2`

- **Kapitteltype:** tema (bør kjenne til — samlekapittel).
- **Description:** De lavfrekvente temaene som hver har kommet én gang: baserate/
  seleksjonsrate og sanne/falske positive (V2020), restriction of range og mangelfullt
  kriterium (V2021), refleksive vs. formative målemodeller (H2017), og rekoding av
  reverserte ledd (V2023).
- **Eksamensbelegg:** Baserate (V2020, 1/17), restriction of range (V2021, 1/17),
  formativ/refleksiv (H2017, 1/17), rekoding (V2023, 1/17). Sjangre: R/V. Prioritet:
  **kjenne** (§7 pkt. 11 — kompakt dekning).
- **Innholdskontrakt:** teststatistikk-boka (verifiser): **baserate/seleksjonsrate**,
  **sanne/falske positive/negative**, **hit-/miss-rate**, testens nytteverdi i
  beslutninger; **restriction of range** (innsnevret spredning senker
  validitetskoeffisienten), **mangelfullt kriteriemål**, baserate-effekter på
  validitet; **refleksive vs. formative målemodeller** (indikatorer forårsaket av vs.
  forårsaker begrepet; er reliabilitet meningsfull for formative indikatorer?);
  **rekoding av reverserte ledd** før reliabilitetsanalyse. Hvert tema kort.
  `collapsible` Symbol- og formelliste: baserate, seleksjonsrate, sann/falsk positiv,
  restriction of range.
- **Begrepsmodul:** hvert deltema definert kort med ett eksempel. Bestått (kjenner
  begrepet) vs. A (bruker det korrekt på en case).
- **Oppgavesjangre:** R/V: «hva er baserate, og hvorfor påvirker den en tests
  nytteverdi?»; «hvorfor må reverserte ledd rekodes før α beregnes?».
- **Typiske feil:** blande refleksiv/formativ; glemme rekoding før reliabilitets-
  analyse.
- **Kvote:** 18 quiz / 20 flashcards.

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Regnekjerne-drill — Z/T, SEM, KI, SEM_diff, a×b og andel mediering
**id:** `psyc2104-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** drill (regnekjerne).
- **Description:** Den syklisk gjentatte regnekjernen samlet ett sted: Z/T-skårer, SEM,
  KI for sann skåre, SEM_diff, indirekte effekt a×b og andel mediering a×b/c — alt med
  snille tall og vist fremgangsmåte.
- **Eksamensbelegg:** Alle sett (den billige, faste regnedelen). Sjangre: S/M (regne-
  ledd). Prioritet: **perfekt** (drill).
- **Innholdskontrakt:** **Løsningsoppskrifter** for hver regnesjanger (Z = (X−M)/SD;
  T = 50 + 10·Z; SEM = σ√(1−rₓₓ); KI = X ± 1,96·SEM; SEM_diff = σ√(2−rₓₓ−rₓₓ);
  a×b og a×b = c − c′; andel mediering = a×b/c) med gjennomregnede eksempler +
  margnotater om delpoeng (F10). `collapsible` Symbol- og formelliste: hele
  regnekjernen (§2).
- **Output-simulator:** ikke aktuelt — ren regnedrill (8–15 varianter på eksamensnivå).
- **Oppgavesjangre:** S/M: alle regnesjangrene, hver i flere varianter.
- **Typiske feil:** F10 (usynlig regning); bruke SEM i stedet for SEM_diff; feil rekkefølge
  i T = 50 + 10·Z.
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 10.2: Feilvaksine — de 17 typiske feilene
**id:** `psyc2104-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** drill (feilvaksine).
- **Description:** Systematisk gjennomgang av F1–F17 med «finn feilen»-oppgaver:
  kandidatsvar/tolkninger som begår hver feil, og hvordan de rettes til full pott.
- **Eksamensbelegg:** Destillert fra alle sensorveiledningene. Sjangre: meta.
  Prioritet: **perfekt** (feilvaksine).
- **Innholdskontrakt:** F1–F17 (fra §2) med diagnostiske eksempler og fikser — særlig
  F1 (ΔR²-som-medieringskriterium, minuspoeng), F2 (kausal overtolkning), F3/F4
  (konstant/dikotom), F6 (høy-α-fellen), F7 (reliabel≠valid), F9 (mediering/
  moderering), F15 (hoppe over kausalitetsforbeholdet). `collapsible` Symbol- og
  formelliste: n/a (henviser til kapitlene).
- **Output-simulator:** for hver feil: vis feil tolkning → diagnostiser feilkode → vis
  rettet tolkning.
- **Oppgavesjangre:** meta — «hvilken feil begår kandidaten, og hva er rett?».
- **Typiske feil:** alle F1–F17 (målet er å vaksinere).
- **Kvote:** 16 quiz / 14 flashcards.

#### Kapittel 10.3: Modellbesvarelse — den store regresjons-/medieringsoppgaven (bestått vs. A)
**id:** `psyc2104-10-3` · **number:** 10.3 · **estimatedMinutes:** 60 · **prerequisites:** `psyc2104-6-3`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Én nyskrevet, komplett oppgave 3 (dikotom gruppe → kontroll/
  konfundering → standardiserte β → ev. kurvilinearitet → mediering a/b/c/c′ →
  bootstrapping → kausalitetsforbehold), besvart i **bestått-versjon** (grunntolkning
  + korrekt regning) og **A-versjon** (kontroll-logikk, andel mediering, bootstrap-
  fordel, kausalitetsforbehold, standardisert-β-nyanse), med sensorkommentar i
  momentspråk.
- **Eksamensbelegg:** Modellerer den 50 %-tunge oppgave 3 (Del 4–7). Sjangre: M.
  Prioritet: **perfekt** (DNA-krav ≥3 modellbesvarelser).
- **Innholdskontrakt:** repeterer Del 4–7; **bestått** = tolker dikotom b/konstant/R²,
  regner forventet Y og a×b, avgjør hel/delvis mediering, sier «kausalitet ikke
  bevist»; **A** = forklarer kontroll-logikken + regner andel mediering + forklarer
  bootstrap-fordelen + foreslår alternativ kausalmodell + advarer mot standardisert β
  for dikotom prediktor.
- **Output-simulator:** full nyskrevet regresjons- + path-/medieringsoutput + full
  tekst i begge versjoner med margnotater («her: identifiserer konfundering → A»,
  «her: regner andel mediering → A», «her: kausalitetsforbeholdet → poeng»).
- **Oppgavesjangre:** M (helhet).
- **Typiske feil:** F1, F2, F3, F4, F5, F15 (vises i bestått-versjonens svakheter).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 10.4: Modellbesvarelse — reliabilitets- og validitetsoppgavene (bestått vs. A)
**id:** `psyc2104-10-4` · **number:** 10.4 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-2-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** To nyskrevne korte oppgaver (oppgave 1 og 2): en reliabilitetsoppgave
  (fire former + α-tolkning + «α = .95?») og en validitetsoppgave (tre former +
  reliabel ≠ valid), i bestått- og A-versjon med sensorkommentar.
- **Eksamensbelegg:** Modellerer de 25 %-tunge oppgave 1 og 2 (Del 1–2). Sjangre: R/V.
  Prioritet: **perfekt**.
- **Innholdskontrakt:** repeterer Del 1–2; **bestått** = definerer reliabilitets-/
  validitetsformene korrekt, tolker α; **A** = kobler metodevalg til trekkets
  stabilitet + ser høy-α-fellen + kobler valg av validitetsform til hensikt + presise
  konvergent/diskriminant-eksempler + reliabel≠valid som nødvendig-ikke-tilstrekkelig.
- **Output-simulator:** en nyskrevet α-tabell («α if item deleted») + full tekst begge
  versjoner med margnotater («her: ser høy-α-fellen → A», «her: kobler til hensikt →
  A»).
- **Oppgavesjangre:** R/V (helhet).
- **Typiske feil:** F6, F7, F8, F14, F16, F17 (vises i bestått-versjonens svakheter).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 10.5: Modellbesvarelse — standardskåre-/SEM-oppgaven + faktoranalyse (bestått vs. A)
**id:** `psyc2104-10-5` · **number:** 10.5 · **estimatedMinutes:** 50 · **prerequisites:** `psyc2104-8-2`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Én nyskrevet standardskåre-/SEM-oppgave (Z/T-regning + SEM/KI) og en
  kortere faktoranalyseoppgave (antall faktorer + rotasjon + ladninger), i bestått- og
  A-versjon.
- **Eksamensbelegg:** Modellerer standardskåre-/SEM-oppgaven (Del 3) + den utfasede,
  men pensumaktuelle faktoranalysen (Del 8). Sjangre: S/F. Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** repeterer Del 3 + Del 8; **bestått** = regner Z/T/SEM/KI riktig,
  bruker Kaiser, leser ladninger; **A** = tolker mot percentil/velger fordelingsfritt
  mål ved ikke-normalitet + tolker SEM_diff + ser at Kaiser gir maks antall +
  parallellanalyse strengere + ladning = std. regresjonskoeffisient.
- **Output-simulator:** en nyskrevet EFA-output (egenverdier + rotert ladningsmatrise)
  + Z/T/SEM-regning + full tekst begge versjoner med margnotater («her: viser regning
  → poeng», «her: parallellanalyse-poenget → A»).
- **Oppgavesjangre:** S, F (helhet).
- **Typiske feil:** F10, F11, F12, F13 (vises i bestått-versjonens svakheter).
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 10.6: Øvingseksamen — komplett tredelt «besvar alle»-sett med fasit
**id:** `psyc2104-10-6` · **number:** 10.6 · **estimatedMinutes:** 90 · **prerequisites:** `psyc2104-0-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Ett nyskrevet, komplett eksamenssett i reelt tredelt format
  (oppgave 1 reliabilitet 25 % + oppgave 2 validitet/standardskåre 25 % + oppgave 3
  regresjon/mediering 50 %, alle obligatoriske), med full output, delpoengfasit og
  bestått/A-momentlister.
- **Eksamensbelegg:** Speiler settstrukturen i hele arkivet 2022→. Sjangre: M/R/V/S
  (helhet). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** tre oppgaver med reell vekting (25/25/50); nyskrevet jamovi-
  stil output (regresjon + path-/medieringstabell); løsningsforslag per oppgave som
  A-besvarelse med delpoeng/vekting-notat; understrek bestått-mekanikken (alle tre
  må bestå); tidsstyring (oppgave 3 tar mest).
- **Output-simulator:** hele settets output er nyskrevet (jamovi-dialekt).
- **Oppgavesjangre:** M/R/V/S (fullt sett).
- **Typiske feil:** feil tidsstyring (oppgave 3 undervurdert); tro at et sterkt svar på
  oppgave 1/2 veier opp for manglende oppgave 3; alle temafeil i miniatyr.
- **Kvote:** 12 quiz / 12 flashcards.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 32 | 30 | 0 (dekkes av øvingseksamen) |
| 1 | 3 | 64 | 76 | 4 |
| 2 | 2 | 40 | 46 | 4 |
| 3 | 2 | 42 | 44 | 4 |
| 4 | 3 | 64 | 64 | 4 |
| 5 | 2 | 36 | 36 | 4 |
| 6 | 3 | 64 | 64 | 4 |
| 7 | 2 | 36 | 36 | 4 |
| 8 | 2 | 38 | 38 | 4 |
| 9 | 1 | 18 | 20 | 4 |
| 10 | 6 | 84 | 76 | 0 (= øvingseksamen 10.6) |
| **Sum** | **28** | **518 ✓ (≥500)** | **530 ✓ (≥500)** | **36** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 16+16=32 / 14+16=30
- Del 1: 20+22+22=64 / 24+26+26=76
- Del 2: 22+18=40 / 26+20=46
- Del 3: 22+20=42 / 24+20=44
- Del 4: 22+22+20=64 / 22+22+20=64
- Del 5: 18+18=36 / 18+18=36
- Del 6: 22+22+20=64 / 22+22+20=64
- Del 7: 18+18=36 / 18+18=36
- Del 8: 20+18=38 / 20+18=38
- Del 9: 18=18 / 20=20
- Del 10: 16+16+14+14+12+12=84 / 14+14+12+12+12+12=76
- **Totalt: 518 quiz / 530 flashcards.**

**Kvoteprofil (begrunnelse):** PSYC2104 er en **psykometrisk begrepsbok med
innebygd output-lesing** — tyngden ligger både på å *lese output og vise regning*
(regresjon/mediering, Z/T/SEM) OG på å *definere psykometriske begreper presist med
eksempel og avveining* (reliabilitet, validitet, standardskårer, faktoranalyse).
Flashcards er derfor satt litt over quiz (530 vs. 518): den begrepsrike
psykometrikjernen (Del 1–2, Del 8) egner seg for begrepspar-driller, mens output-/
regnedelene (Del 4–7, Del 3) er mer quiz-tunge. Kjernedelene (1 reliabilitet, 4
multippel regresjon/kontroll, 6 mediering) har høyest tetthet fordi de bærer eksamen;
kunne-delene (5 forutsetninger/kurvilinearitet, 7 moderering, 8 faktoranalyse) og
kjenne-delen (9) er lettere. **Flashcard-profil:** begrepspar-driller på de skillene
sensor tester (reliabilitet vs. validitet · konvergent vs. diskriminant · samtidig
vs. prediktiv · test–retest vs. α · mediering vs. moderering · a vs. b vs. c vs. c′ ·
hel vs. delvis mediering · Z vs. T · b vs. β · ortogonal vs. oblik rotasjon · Kaiser
vs. parallellanalyse) + formel⇄bruk-kort (X=T+e, SEM=σ√(1−rₓₓ), Z=(X−M)/SD,
T=50+10·Z, a×b=c−c′, andel mediering=a×b/c) + output-avlesningskort (hvor står b/SE/
t/p/β/R²/a/b/c/c′/BootLLCI i jamovi og SPSS). **Quiz-profil:** flervalg med
nabobegrep-distraktorer (reliabilitet/validitet, konvergent/diskriminant, mediering/
moderering, c/c′, konfundering/suppressor) + «hva sier denne output-cellen?» + «hvilken
feil begår kandidaten?» (F1/F2/F6/F7/F9/F15-vaksine) + regne-flervalg (Z/T, SEM,
a×b, andel mediering).

---

## 5. Prøver

Fire prøver per temadel (Del 1–9 = 36 prøver). Hver prøve speiler eksamensformatet i
miniatyr: en blanding av begreps-/redegjørelsesspørsmål (flervalg + kort redegjørelse,
med fasit), et regne-/output-ledd (med vist fremgangsmåte) og — der relevant — et
tolkningsledd (bestått/A-momentliste-fasit). Omfang 25–40 min. Alle oppgaver, output-
tabeller, path-/medieringstabeller og tall NYSKREVNE. Prøvekapittel-id
`psyc2104-<del>-prove`, chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 10
har ingen egen prøve (øvingseksamen 10.6 dekker helheten).

**Prøve-kvote Del 1:** 4 prøver: (1) *Klassisk testteori* — X = T + e + reliabilitet
som andel sann varians. (2) *De fire formene* — test–retest/parallell/split-half/α +
metodevalg etter stabilitet (F8/F16). (3) *Cronbachs α* — tolk α + «α = .95
problematisk?» + item-analyse (F6). (4) *Blandet Del 1*.

**Prøve-kvote Del 2:** 4 prøver: (1) *Validitetsformer* — innhold/kriterie/begrep +
hensiktsavhengighet (F17). (2) *Konvergent/diskriminant* — begrepsvaliditet + MTMM
(F17). (3) *Reliabel ≠ valid* — nødvendig-ikke-tilstrekkelig (F7/F14). (4) *Blandet
Del 2*.

**Prøve-kvote Del 3:** 4 prøver: (1) *Standardskårer* — regn Z/T + tolk mot
normalfordeling (F10). (2) *Ikke-normalitet* — prosentil/stanine. (3) *SEM* — regn
SEM + KI for sann skåre + SEM_diff (F10). (4) *Blandet Del 3*.

**Prøve-kvote Del 4:** 4 prøver: (1) *Output-tolkning* — dikotom b/konstant/R² +
forventet Y per gruppe (F3/F4). (2) *Konfundering* — «hvorfor endret b seg ved
kontroll?» (F5). (3) *Standardiserte β* — rangere prediktorer + begrensning for
dikotom (F4). (4) *Blandet Del 4*.

**Prøve-kvote Del 5:** 4 prøver: (1) *Forutsetninger* — linearitet/residualer/VIF.
(2) *Kurvilinearitet* — kvadratledd + ΔR². (3) *Diagnostikk* — les residualfigur.
(4) *Blandet Del 5*.

**Prøve-kvote Del 6:** 4 prøver: (1) *Stiene* — a/b/c/c′ + regn a×b = c − c′ (F1/F10).
(2) *Hel/delvis + andel* — Baron & Kenny + andel mediering (F1). (3) *Bootstrapping* —
KI for a×b + fordel framfor Baron & Kenny. (4) *Blandet Del 6*.

**Prøve-kvote Del 7:** 4 prøver: (1) *Moderering* — interaksjonsledd + buffer/
forsterkning. (2) *Mediering vs. moderering* — begrepsskille (F9). (3) *Kausalitet* —
kausalitetsforbeholdet + alternativ modell (F2/F15). (4) *Blandet Del 7*.

**Prøve-kvote Del 8:** 4 prøver: (1) *Antall faktorer* — Kaiser vs. parallellanalyse
(F11). (2) *Ladning/kommunalitet* — ladning = std. regresjonskoeffisient. (3)
*Rotasjon/enkel struktur* — ortogonal/oblik + kryssladninger (F12/F13). (4) *Blandet
Del 8*.

**Prøve-kvote Del 9:** 4 prøver: (1) *Baserate* — seleksjonsrate + sanne/falske
positive. (2) *Restriction of range* — validitetskoeffisientens fall. (3) *Formativ/
refleksiv + rekoding* — målemodeller + reverserte ledd. (4) *Blandet Del 9*.

---

## 6. Opphavsrett og nyskriving

- Eksamensoppgaver, output-tabeller, path-/medieringstabeller og sensorveiledninger
  er brukt som **grunnlag** (mønstre, temavekting, vurderingskriterier), **aldri
  ordrett**. Alle oppgaver, output, tabelltall, vignetter og modellbesvarelser i boka
  er NYSKREVNE i samme sjanger — endre tall, scenarioer, variabelnavn og
  formuleringer. Den dokumenterte oppgave-/scenariogjenbruken i arkivet (antall
  barn→mening→positiv affekt fra V2017 til V2023; BIAQ→sosial selvbevissthet fra H2017
  til V2022) betyr at boka *må* nyskrive særlig grundig på ryggrad-temaene (multippel
  regresjon/kontroll, mediering) for ikke å reprodusere et gjenbrukt sett.
- Pensumlitteratur (teststatistikk/psykometri-boka; regresjons-/faktoranalysestoffet;
  forelesningene) refereres (forfatter/verk/begrep), aldri siteres i lengde.
- Utgaveavhengige kapittelnumre, terskler og usikre attribusjoner merkes `(verifiser)`
  for fase 6.

---

## 7. Byggerekkefølge og wiring-merknad

- **Byggerekkefølge (fase 4):** én agent per hel del. Del 4 (multippel regresjon/
  kontroll) og Del 6 (mediering) er de to ryggradene — bygg dem tidlig og la
  modellbesvarelsene (10.3/10.4/10.5) og øvingseksamenen (10.6) leses mot dem.
  Del 10-agenten leser HELE skjelettet.
- **Prerequisites er DEL-baserte, aldri lineære** — hvert kapittel peker på det/de
  kapitlene det faktisk bygger på (typisk forrige i delen, `psyc2104-0-2` for
  del-åpnere, eller en konkret tidligere avhengighet: 4.1→0.2, 6.1→4.2 [mediering
  bygger på statistisk kontroll], 7.1→6.1, 8.1→1.3 [faktoranalyse bygger på α/
  dimensjonalitet]).
- **Kryssbok-lenker:** Del 0/4 skal lenke til PSY1010-kapitler (bro fra
  innføringsfaget) og PSY2014-kapitler (GLM-verktøykassen — regresjonsmekanikk, VIF,
  ANOVA-ekvivalens) KUN når de finnes i systemet ved byggetid — ellers utelates
  lenken. Der PSYC2104 låner regresjonsoutput henviser den GLM-utregningsdybden
  (dummykoding-mekanikk, VIF, suppressor i dybden) til PSY2014.
- **Arbeidsdeling mot PSY2014 (kritisk):** PSY2014 EIER GLM som utregningsverktøy
  (regresjon/ANOVA/kji-kvadrat, tabellutfylling, dummykoding-mekanikk, VIF/residual-
  diagnostikk, GLM-broen). PSYC2104 EIER psykometrikjernen (X=T+e, reliabilitet,
  validitet, standardskårer, SEM, faktoranalyse) OG mediering/moderering i dybden
  (a/b/c/c′, a×b, hel/delvis, andel mediering, Baron & Kenny, bootstrapping/Process,
  Sobels test, kausalitetsforbeholdet). Ved overlapp på regresjonsoutput holder
  PSYC2104 seg til psykometri-/medieringsvinkelen; forutsetnings-/VIF-mekanikk
  (kap. 5.1) og suppressor (kap. 4.2) henviser til PSY2014 for dybden.
- **Output-dialekter:** jamovi-stil (egne Mediation/Path Estimates-tabeller) er
  hovedvekten; SPSS-stil trenes i 0.2 og der naturlig. Alle output-tabeller er
  nyskrevne — UiOs tall gjenbrukes aldri.

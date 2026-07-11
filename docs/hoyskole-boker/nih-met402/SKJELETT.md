# Bokskjelett: MET402 Kvantitativ metode (NIH, master) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-filer (DNA-drofting.md primær + DNA-regnefag.md for tolkningsoppskrift/
> drill). Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett oppgave/sett først, besvarelser i collapsibles).
> Kvotene og innholdskontraktene i dette skjelettet er uendret — løkka styrer
> REKKEFØLGEN.


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIHs MET402-arkiv 2023/24–2025/26: **seks komplette
> eksamenssett med tilhørende sensorveiledning** — tre ordinære H2023/H2024/H2025 +
> tre utsatte/konte V2024/V2025/V2026; til sammen 12 dokumenter, alle med full
> fasit/vurderingskriterier; alle sensorveiledninger lest oppgave for oppgave).
> Alle problemstillinger, hypoteser, case, SPSS-utskriftsverdier og modell-
> besvarelser i boka skal være NYSKREVNE (se §6). Statistiske begreper, SPSS-
> tabellnavn, standard effektstørrelse-grenser (η² 0,01/0,06/0,14; Cohens r) og
> alminnelig metodeterminologi er ikke opphavsrettslig beskyttet og brukes fritt;
> sensorveiledningenes og oppgavesettenes tekst gjengis ALDRI ordrett.
>
> **Sentral fagprofil — LES DENNE FØR DU BYGGER.** Til tross for temaordene
> «korrelasjon, ANOVA, regresjon, multivariat analyse» er dette **IKKE et regne-
> emne** à la matematisk statistikk. Det er et **samfunnsvitenskapelig forsknings-
> metode-emne for idrettsforskere** der studenten skal (1) **planlegge en kvantitativ
> studie** i eget idrettsfaglig felt fra ende til annen, og (2) **lese og fortolke
> ferdig SPSS-utskrift med ord**. Kandidaten regner ALDRI en test for hånd, utleder
> ALDRI en formel, og har INGEN hjelpemidler fordi det ikke er noe å slå opp —
> poengene ligger i **begrepsforståelse, metodevalg og verbal tolkning**. Boka må
> skrives deretter: null håndregning, null formelutledning, null bevis. Der en
> «formel» nevnes (Ficks/Pearsons r/R²) er den kun konseptuell forankring, aldri
> et regnestykke leseren skal utføre.
>
> **Status:** Emnet er **AKTIVT** ved NIH (verifisert mot NIHs emneside 2026-07-11:
> «MET402 Kvantitativ metode», **10 studiepoeng**, tilbudt H2025; obligatorisk emne
> i Master i idrett og samfunnsvitenskap). **Eksamensform:** skriftlig, individuell
> skoleeksamen i WISEflow, **4 timer, ingen hjelpemidler**, gradert karakter **A–F**;
> to godkjente gruppeinnleveringer kreves som arbeidskrav for å gå opp. Oppgavesettet
> gis på bokmål og nynorsk; fasitene er på bokmål. **Emneansvarlig:** samme
> oppgavekonstruktør gjennom hele perioden → sterk stilkontinuitet gjør gjenganger-
> mønstrene pålitelige. Pensum: **Field, *Discovering Statistics Using IBM SPSS
> Statistics*** (kap. 1–18) og **Ringdal, *Enhet og mangfold*** (utvalgte kapitler).
> `(verifiser)` behold status- og pensummerknad ved bygging hvis lang tid har gått.
>
> **Krysslenke:** `nih-met200` (Forskningsmetode) bygges parallelt av en annen agent
> og deler stort begrepsfundament med MET402 — design, utvalg/populasjon, reliabilitet/
> validitet, kvantitativ metode og forskningsetikk. MET200 er bredere (også kvalitativ
> metode og vitenskapsteori) og har mappevurdering, mens MET402 er det rene
> *kvantitative* master-emnet med skoleeksamen og tyngre SPSS-tolkning. **Skjelett for
> nih-met200 finnes ENNÅ ikke ved skriving av dette dokumentet**, så MET402-boka omtaler
> nih-met200 som **søsteremne i prosa uten kapittellenker** (README: lenk kun til
> kapitler som finnes). Design-/utvalgs-/validitetskapitlene her er skrevet så de kan
> gjenbrukes/krysslenkes senere; MET402 legger på det statistiske tolkningslaget.
> Fysiologi-/anatomi-klyngen (nih-thp100/thp202 m.fl.) og idrettspsykologi-klyngen
> (nih-ti100/ti300) overlapper IKKE metodisk og krysslenkes IKKE — men idretts-
> faglige case-eksempler (motivasjon, trivsel, fysisk form, sosial støtte, karakter i
> kroppsøving) hentes fra samme idrettsfaglige verden som klyngen.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-met402` |
| Tittel | **MET402 Kvantitativ metode (NIH, master) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «MET402 Kvantitativ metode». |
| Arketype | **Drøfting/masternivå (`DNA-drofting.md`) + SPSS-tolknings-drill (`DNA-regnefag.md`).** Se §2 «Arketypetilpasning»: essay-/drøftingshåndverket bærer studiedesign-søylen; regnefagets drill-/oppskrift-/øvingseksamen-logikk bærer SPSS-tolkningssøylen — men uten et eneste regnestykke (fasiten er *verbal tolkning* av ferdig utskrift, ikke tallutledning). Ingen fasit i tradisjonell forstand — sensor vurderer metodisk sammenheng, begrepspresisjon og tolkning. |
| Antall kapitler | **31** nummererte (Del 0: 2 · temadeler Del 1–11: 25 · eksamenstrening Del 12: 4) + **44 temaprøve-kapitler** (`-prove`, 4 per temadel Del 1–11) |
| Estimert totaltid | **~1 780 min ≈ 29,7 timer** (per kapittel under) |
| Quiz totalt | **560** (krav ≥500 — se Kvotesammendrag) |
| Flashcards totalt | **562** (krav ≥500 — se Kvotesammendrag) |

**Pitch (ett avsnitt):** MET402 er NIHs rene **kvantitative masteremne i forsknings-
metode** — men eksamen er ikke et regnestykke. På fire timer uten hjelpemidler skal
kandidaten gjøre to ting som går igjen i **hvert eneste sett**: (1) **skrive en
sammenhengende kvantitativ studieplan** i eget idrettsfaglige felt (problemstilling →
to testbare hypoteser med retning → variabler med målenivå → begrunnet design →
utvalgsstrategi → datahåndtering → kritisk refleksjon om reliabilitet/validitet/
generalisering), og (2) **lese og tolke ferdig SPSS-utskrift med ord** for alle fem
analysene som roterer: **regresjon, ANOVA, korrelasjon, t-test og krysstabell/
kjikvadrat**. Fra og med H2024 er settet stabilt **fire likeverdige oppgaver à 25 %**
(typisk 2 essay + 2 utskrift). Boka er bygd baklengs fra det sensor faktisk premierer:
**rød tråd** (design må passe problemstilling, analyse må passe målenivå), **effekt-
størrelse i tillegg til signifikans** (η² 0,01/0,06/0,14 og hva den betyr *praktisk*),
**«korrelasjon ≠ kausalitet»** som fast forbehold, og **konklusjon i kontekst** —
aldri bare «forkast H0». En kandidat som mestrer studiedesign-essayet og den faste
tolkningsoppskriften har grunnlag for høy karakter uansett hvilken konkret analyse
settet velger.

**Kritisk plattformbetingelse (gjelder HELE boka) — SPSS-utskrift i tekstnotasjon.**
Plattformen viser ikke ekte SPSS-skjermbilder, og boka skal uansett være nyskrevet
(opphavsrett). Alle utskrifter gjengis derfor som **nyskrevne, realistisk formaterte
tabeller** (markdown-tabeller i `text`/`example`-blokker) med **idrettsfaglige, fiktive
tall**, som etterligner de ekte SPSS-tabellene i layout (kolonnenavn som *Mean*, *Std.
Deviation*, *Sig. (2-tailed)*, *F*, *R Square*, *B*, *Levene's Test*, *Pearson
Correlation*, *Chi-Square*). Boka lærer leseren å **kjenne igjen kolonnene og lese av
riktig celle** — det er selve ferdigheten. Engelske SPSS-tabellnavn beholdes (de er
engelske i programmet), med norsk forklaring ved første forekomst. Faste tolknings-
grenser (η², Cohens r, signifikansstjerner) presenteres som oppslag, aldri regnet.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** **Ingen hjelpemidler.** Alt
besvares fra hukommelsen; det finnes intet formelark fordi eksamen ikke krever
håndregning. Boka må derfor bygge **automatiserte hoderutiner** (den faste
tolkningsoppskriften, effektstørrelse-grensene, tolkningskjeden per utskrift) og
**pugg-klart begrepsapparat** — ikke oppslagskunnskap. Dette styrer flashcard-
tettheten: modell↔forutsetning, tabellcelle↔betydning, effektgrense↔praktisk mening
må sitte utenat.

**Bevisst nedprioritert (begrunnes i Del 0):** **Faktoranalyse** står i emne-
beskrivelsen men er ikke testet på seks sett → dekkes lett/konseptuelt (dimensjonering,
latente variabler) i Del 2, ikke som egen tung del. **SPSS-syntaks/kommandoer** brukes
i undervisningen men aldri på eksamen → boka trener kun *tolkning* av ferdig utskrift,
aldri hvordan man klikker/koder. **Håndregning, sannsynlighetsregning, formelutledning,
bevis, tabelloppslag** forekommer ALDRI → bygges ikke på i det hele tatt.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet: forskningsprosessen og problemstilling/hypoteser
først (fundamentet i studiedesign-essayet), så variabler/målenivå (bestemmer alt senere
analysevalg), så design/kausalitet og utvalg (essayets tunge midtdel), så datahåndtering.
Deretter bygges SPSS-tolkningen: **først den felles tolkningsoppskriften + deskriptiv
statistikk** (grunnlaget alle fem analysene bruker), så de fem analysene ordnet fra
enklest til mest sammensatt (korrelasjon → t-test → ANOVA → regresjon → krysstabell/
kjikvadrat), og til slutt de tre lavfrekvente vinklingene samlet. Frekvensen styrer
*omfanget*, ikke rekkefølgen: de to bærebjelkene (studiedesign-essayet og SPSS-tolkning)
får flest kapitler, egne drillkapitler og høyest kvote; nye/lavfrekvente vinklinger
(krysstabell, utvalgsstørrelse, feilkilder) får ett kompakt kapittel hver.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og skrive-/tolkningshåndverk | 2 | perfekt (meta) | Formen (4 t, ingen hjelpemidler, 4 × 25 %-regimet fra H2024, 2 essay + 2 utskrift), de to bærebjelkene, temafrekvensene, sensorkravene, kildeforbeholdet og selve tolkningsoppskriften må etableres FØR fagstoffet. |
| 1 | Forskningsprosessen, problemstilling og hypoteser | 3 | perfekt (83 %) | Problemstilling + testbare hypoteser (5/6) er selve inngangen til studiedesign-essayet, og feilkilder gjennom prosessen (ny i H2025) forankres her. |
| 2 | Variabler, målenivå og latente skalaer | 3 | perfekt (83 %) | Variabelbeskrivelse (5/6) med målenivå er «gjennomgående nøkkel» hos sensor og bestemmer hvilken analyse som er lov senere. Cronbachs alfa/latente variabler er A-markør. |
| 3 | Forskningsdesign og kausalitet | 3 | perfekt (83 %) + kunne | Design (5/6) er essayets tunge midtdel; kausalitet (eksplisitt 1/6, implisitt overalt) binder essay og tolkning sammen («korrelasjon ≠ årsak»). |
| 4 | Utvalg, populasjon og representativitet | 3 | perfekt (83 %) | Utvalg (5/6): sannsynlighetsutvalgets fire typer, feilkilder, vekting (ny H2025) og frafall (MCAR/MAR/MNAR). Bærebjelke i essayet. |
| 5 | Datahåndtering og screening | 2 | kunne (50 %) | Missing/uteliggere/normalitet/reversering/subskala-bygging (3/6) — essayets siste steg og forutsetning for pålitelig analyse. |
| 6 | Å lese SPSS-utskrift: oppskriften og deskriptiv statistikk | 2 | perfekt (grunnlag for alle fem) | Den faste tolkningskjeden og deskriptiv statistikk (N, min/maks, gjennomsnitt, SD; kjenne igjen kontinuerlig variabel) er felles inngang til alle fem tolkningsoppgavene. |
| 7 | Korrelasjon (Pearsons r) | 1 | kunne (50 %) | Korrelasjonsmatrise (3/6): styrke/retning/signifikans + fast «ikke kausalitet»-forbehold. |
| 8 | t-test med Levene | 1 | kunne (50 %) | t-test (3/6, alle utsatt-sett): uavhengig vs. parvis, Levene → riktig rad. Fast konte-innslag. |
| 9 | ANOVA og effektstørrelse | 2 | perfekt-nær (50 % + signaturkrav) | ANOVA (3/6, også repeterte målinger) + **eta²-tolkning** (signaturkrav) — F/Sig. + η² 0,01/0,06/0,14 og praktisk betydning. Får eget effektstørrelse-fokus. |
| 10 | Multippel regresjon | 2 | perfekt-nær (2 av 3 ordinære) | Regresjon (2/6, men 2/3 ordinære → nesten sikker på H2026 ordinær): R²-dybde (forklart varians, adjusted R², nullmodell), koeffisienter, prediksjon. Får teori + drillkapittel. |
| 11 | Krysstabell/kjikvadrat, utvalgsstørrelse og feilkilder | 3 | kjenne (nye/lavfrekvente vinklinger) | Krysstabell/kjikvadrat (1/6, ny H2025), utvalgsstørrelse (2/6, fast konte-klassiker), feilkilder gjennom prosessen (1/6, ny H2025). Ett kompakt kapittel hver — differensierer mot A og fanger nye vinklinger. |
| 12 | Eksamenstrening | 4 | perfekt (meta) | Sjangerdrill (studiedesign-essayet + SPSS-tolkningsoppskriften), modellbesvarelser på flere karakternivåer, og komplette øvingseksamener i 4 × 25 %-regimet. |

Rasjonale: de to bærebjelkene får tyngden — **studiedesign-søylen** (Del 1–5, essay-
tung) og **SPSS-tolkningssøylen** (Del 6–10, med felles oppskrift + en analyse per
kapittel + regresjons-drill); **effektstørrelse** får eget fokus i Del 9 fordi det er
sensors signaturkrav; de tre nye vinklingene samles i Del 11 med lav kvote fordi de er
lavfrekvente men sannsynlige gjengangere. Nesten hele bredden kan dukke opp hvert sett,
så prioriteringen styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Forskningsprosessen, problemstilling og hypoteser |
| 2 | Variabler, målenivå og latente skalaer |
| 3 | Forskningsdesign og kausalitet |
| 4 | Utvalg, populasjon og representativitet |
| 5 | Datahåndtering og screening |
| 6 | Å lese SPSS-utskrift: oppskrift og deskriptiv statistikk |
| 7 | Korrelasjon |
| 8 | t-test med Levene |
| 9 | ANOVA og effektstørrelse |
| 10 | Multippel regresjon |
| 11 | Krysstabell, utvalgsstørrelse og feilkilder |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Sjangerkodene skrives ALLTID fullt ut i klarspråk ved FØRSTE bruk i hvert kapittel
(README-krav) — de er ikke offisielle NIH-koder, men Skolesagas etiketter for
oppgavetypene analysen fant. Del 0-orienteringsboksen samler dem på ett sted.

**STU** Studiedesign-essayet (bygg en komplett, sammenhengende kvantitativ studieplan
i eget felt: problemstilling → hypoteser → variabler → design → datainnsamling/utvalg →
datahåndtering → kritisk refleksjon) · **PRH** Problemstilling og hypoteser isolert
(presis problemstilling + to testbare hypoteser med variabler og retning) · **VAR**
Beskriv variablene dine (målenivå, indikatorer, subskalaer, Likert, Cronbachs alfa) ·
**DES** Design og kausalitet (kausalitetsbetingelser + velg/begrunn design med kjennetegn/
styrker/svakheter) · **UTV** Utvalg, populasjon og representativitet (sannsynlighets-
utvalgets typer, feilkilder, vekting, frafall) · **DAT** Datahåndtering og screening
(missing/uteliggere/normalitet/reversering/subskala-bygging + hvorfor) · **KOR** Tolk
korrelasjonsmatrise (SPSS) · **ANO** Tolk ANOVA-utskrift (SPSS) · **REG** Tolk
regresjonsutskrift (SPSS) · **TTE** Tolk t-test-utskrift med Levene (SPSS) · **KJI** Tolk
krysstabell/kjikvadrat (SPSS) · **STØ** Utvalgsstørrelse (hvor mange respondenter +
type I/II) · **FEI** Feilkilder i forskningsprosessen (seks steg + konsekvenser).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Sammenheng er alt (rød tråd).** Problemstilling → hypoteser → variabler → design →
   analyse skal danne én sammenhengende linje. Fasitene vurderer gjentatte ganger «om X
   henger sammen med Y» (om variablene passer problemstillingen, om analysevalget passer
   målenivået). Kompleksitet og indre sammenheng premieres eksplisitt.
2. **Egne, faglig relevante eksempler kreves — men innholdet er fritt.** Kandidaten
   finner selv på problemstilling/hypoteser/variabler fra idrettsfaget sitt. Sensor
   vurderer ikke om eksemplet er «riktig», bare om det er metodisk holdbart.
3. **Målenivå er en gjennomgående nøkkel.** Nesten hver analyse-oppgave krever at
   kandidaten begrunner riktig datanivå (kontinuerlig avhengig variabel for t-test/ANOVA/
   regresjon; kategoriske variabler for krysstabell).
4. **Effektstørrelse i tillegg til signifikans.** Å konkludere kun med «signifikant» er
   ikke nok der utskriften gir effektmål — fasiten krever tolkning av η²/r-styrken og hva
   den betyr *praktisk*. En signifikant F med lav η² betyr liten praktisk forskjell.
5. **Korrelasjon/tverrsnitt = ingen kausalitet.** Dette forbeholdet skal med hver gang,
   spesielt når data er samlet på ett tidspunkt.
6. **Konkluder i kontekst.** Hver tolkning avsluttes med hva funnet betyr for den konkrete
   fagproblemstillingen, ikke bare «forkast H0».
7. **Helhetsvurdering.** Karakteren settes på et vektet gjennomsnitt av alle oppgavene,
   ikke oppgave for oppgave isolert — kandidaten må levere på tvers av essay OG tolkning.
8. **Toppkandidaten går bak overflaten** (A-markører): R² som forklart varians/nullmodell
   (ikke «fem prosent bedre»), adjusted R², frafallstyper MCAR/MAR/MNAR, latente variabler
   + Cronbachs alfa, disproporsjonal stratifisering, cellefrekvens-forutsetningen i
   kjikvadrat, konkrete illustrerende eksempler på abstrakte begreper.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

Feilkodene glosses ved FØRSTE bruk i HVERT kapittel (README — deltidslesere glemmer dem).

**#1** Uklar/uoperasjonaliserbar problemstilling eller vage hypoteser (uten tydelige
variabler og retning → kan ikke testes). · **#2** Manglende rød tråd (design som ikke
passer problemstillingen; analysevalg som ikke passer variablenes målenivå). · **#3**
Kausal tolkning av korrelasjon/tverrsnitt (påstå årsak fra samvariasjon uten
eksperimentelt/longitudinelt design). · **#4** Stoppe ved signifikans (uten å tolke
effektstørrelse η²/r og praktisk betydning). · **#5** Feil rad i t-testen (overse Levenes
test → lese «Equal variances assumed» når variansene er ulike, eller motsatt). · **#6**
Glemme forutsetninger (ikke sjekke kontinuerlig avhengig variabel for t-test/ANOVA/
regresjon; ikke sjekke kategoriske data + cellefrekvens for kjikvadrat). · **#7** Overse
seleksjon og frafall (behandle et skjevt/frivillig utvalg som representativt; ikke skille
systematisk fra tilfeldig frafall). · **#8** Tynn variabelbeskrivelse (mangler målenivå,
indikatorer/subskalaer, svarkategorier, intern-konsistens-testing). · **#9** Overfladisk
R² («modellen forklarer fem prosent» uten forklart varians/adjusted R²/nullmodell). ·
**#10** Ren gjengivelse uten tolkning (lese av tall uten å si hva de *betyr* i kontekst;
alt skal ende i konklusjon på fagproblemstillingen). · **#11** Utelate reliabilitet/
validitet/generalisering (den kritiske refleksjonen er et fast, selvstendig vurderings-
punkt, ikke pynt).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Hybrid drøfting + regnefags-drill, men UTEN regning.** Primærarketypen er
   `DNA-drofting.md` (essay/metodefag, ingen fasit, sensor vurderer begrepspresisjon og
   sammenhengende drøfting). Studiedesign-søylen (Del 1–5) og Del 11/12s essaydeler følger
   drøftings-DNA: begrep med **pensumforankring** (Ringdal for norsk metodeterminologi,
   Field for SPSS-tolkning), posisjoner/spenninger (f.eks. tverrsnitt vs. longitudinelt),
   anvendelseseksempler skrevet som en god besvarelse, og modellbesvarelser på flere
   karakternivåer. SPSS-tolkningssøylen (Del 6–10) låner **regnefagets** oppskrift-/drill-/
   øvingseksamen-logikk (fast tolkningsoppskrift → gjennomtolket eksempel → drill), fordi
   utskriftstolkning er en **mekaniserbar ferdighet med gjentatt mønster** — MEN fasiten er
   **verbal tolkning av ferdig utskrift**, ikke tallutledning med entydig sluttsvar.
   Nærmeste forbilder i klyngen: `nih-ti100`/`nih-ma460` (drøfting/masternivå, D-M-M-K-
   langsvar) for essaydelene; regnefags-DNAs drillkapittel-mal for SPSS-drillene.
2. **Ingen figurkrav / ingen SVG-diagrammer.** DNA-regnefags figurkrav gjelder fag der
   eksamen krever grafisk analyse (tegne/skifte kurver). MET402 har **null grafisk
   konstruksjon** — SPSS-utskriftene gjengis som **markdown-tabeller** (nyskrevne, fiktive
   idrettstall), ikke som SVG. Boka trener å *lese tabellen*, ikke å tegne et diagram.
3. **«Symbol- og formelliste» → «Tabell- og begrepsliste».** README-kravet om en
   `collapsible` rett etter Forkunnskaper omtolkes for et tolkningsfag: hvert delkapittel
   med SPSS-tolkning får en `collapsible` **«Tabell- og begrepsliste»** som samler **SPSS-
   kolonnenavnene** (engelsk term ↔ norsk betydning ↔ hvor i tabellen), de faste
   **tolkningsgrensene** (signifikansstjerner, η²- og r-grensene) og analysens
   **forutsetning** (målenivå). I rene begrepskapitler (Del 1–5) blir dette en
   `collapsible` **«Begrepsliste»** (jf. drøftings-DNA blokk 8, pensumkart). Fordi eksamen
   er uten hjelpemidler, markeres alt som «må sitte».
4. **Flashcards tolknings- og begrepsrike (562).** Faget er uten oppslagsverk og premierer
   presise begreper og korrekt tolkningsrutine → svært flashcard-egnet:
   **begrep↔definisjon↔pensumforankring**-kort (målenivå, sannsynlighetsutvalg, kausalitets-
   betingelser), **analyse↔forutsetning**-kort (t-test/ANOVA/regresjon krever kontinuerlig
   avhengig variabel; kjikvadrat krever kategoriske + høy cellefrekvens), **tabellcelle↔
   betydning**-kort (*R Square* = forklart varians; *Sig. (2-tailed)* < 0,05 = signifikant;
   *Levene sig.* < 0,05 → «Equal variances not assumed»-raden), og **effektgrense↔praktisk
   mening**-kort (η² 0,01/0,06/0,14; Cohens r liten/medium/stor). **Quiz-profilen** driller
   nabobegrep-distraktorer (korrelasjon/kausalitet, uavhengig/parvis t-test, tverrsnitt/
   longitudinelt, sannsynlighets-/ikke-sannsynlighetsutvalg, MCAR/MAR/MNAR, R²/adjusted R²,
   signifikans/effektstørrelse) + «hvilken analyse passer denne problemstillingen?»- og
   «hva mangler i denne tolkningen?»-lesetrening.
5. **Drillkapitler for de to bærebjelke-sjangrene.** Studiedesign-essayet (12.1) og
   SPSS-tolkningsoppskriften (12.2) får hvert sitt drillkapittel i eksamenstreningen,
   pluss et eget regresjons-drillkapittel (10.2), fordi disse er de mest resirkulerte og
   mekaniserbare sjangrene. Den felles tolkningsoppskriften i 6.1 fungerer som mal alle
   SPSS-kapitlene refererer.
6. **Idrettsfaglige case som gjennomgående innramming.** Alle problemstillinger, variabler
   og utskrifter rammes inn i samfunnsvitenskapelig idrettsforskning (motivasjon, trivsel,
   sosial støtte, fysisk form, karakter i kroppsøving, holdninger til idrettens samfunns-
   ansvar) slik NIH selv gjør — men **selve oppgavene og tallene er nyskrevne** (§6).
7. **Ingen oppdiktede kilder eller tall.** Faktapåstander om pensumdetaljer, utgave-/
   kapittelnumre og effektgrenser forfatteren er usikker på merkes `(verifiser)` for
   fagfellesjekk. Alle SPSS-tall er eksplisitt fiktive illustrasjoner. INGEN oppdiktede
   pensumreferanser (kun Field og Ringdal + alminnelig metodeterminologi).

**Avvik fra prompt-ordningen (dokumentert):** Prompt/analyse behandler de fem analysene
som likestilte «lese-utskrift»-ferdigheter. Boka ordner dem etter *sammensatthet* (Del
6 felles oppskrift → 7 korrelasjon → 8 t-test → 9 ANOVA → 10 regresjon → 11 krysstabell),
ikke etter frekvens, fordi tolkningsoppskriften er felles og bygger seg opp fra
deskriptiv statistikk. Regresjon og ANOVA får to kapitler hver (teori + fokus/drill) til
tross for lavere rå frekvens enn utvalg/variabler, fordi de er tyngst å tolke og
regresjon er nesten sikker på ordinær. Krysstabell, utvalgsstørrelse og feilkilder er
samlet i Del 11 fordi hver er lavfrekvent (1/6–2/6), men alle tre er ferske/faste
vinklinger som bør dekkes.

### Kapittel-DNA A — begreps-/essaykapittel (Del 1–5, drøftings-DNA)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), i **læringsløkker per begrep**:

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (STU/PRH/VAR/DES/UTV/DAT)
   temaet inngår i, hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg —
   forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README),
   etterfulgt av `collapsible` **Begrepsliste** (begrep ↔ definisjon ↔ pensumforankring).
3. `text` **Temaet i fagets landskap** — kort: hvilket metodisk problem det løser, hvor
   det står i studiedesign-essayet. Maks 2–3 avsnitt.
4. `definition` **Kjernebegreper** — hvert begrep presist definert OG forankret (Ringdal/
   Field der pensum bruker det slik). **Toppnivå med `title` — flashcard-kilden.**
5. `text` **Posisjoner og spenninger** — der metoden rommer avveininger (tverrsnitt vs.
   longitudinelt; representativitet vs. gjennomførbarhet) — råstoff for drøfting.
6. `example` × 1–3 **Anvendelse** — temaet brukt på en konkret idrettsfaglig case, skrevet
   slik en god besvarelse ville gjort det, med eksplisitt pensum-/metodeforankring.
7. `warning` **Typiske feil** — feilkodene (#1–#11) som gjelder temaet.
8. `exercise` × 4–8 — stigende: 1–2 begreps-/kontrollspørsmål (lett innsteg, ren
   gjengivelse med egne ord), 1–2 kortdrøftinger (løsning = disposisjon/momentliste),
   1–2 eksamenslike essay-/anvendelsesoppgaver (løsning = momentliste + binær
   selvrettingsrubrikk, ikke fullt essay). Alle med `hints` (unntatt merket kald bank).
   Plassert INLINE i løkkene, ikke samlet nederst.
9. `collapsible` **Pensumkart for kapitlet** — forfatter/verk → hvilke begreper de «eier»
   (flashcard-råstoff; åpne med begrepsbank-notisen fra README).

### Kapittel-DNA B — SPSS-tolkningskapittel (Del 6–10, regnefags-drill uten regning)

1. `tip` **Eksamensvinkel** — frekvens/vekt, sjanger (KOR/TTE/ANO/REG/KJI), hva sensor ser.
2. `text` **Forkunnskaper** + `collapsible` **Tabell- og begrepsliste** (SPSS-kolonnenavn
   engelsk↔norsk↔plassering; tolkningsgrenser; forutsetning om målenivå).
3. `text` **Hva analysen svarer på + forutsetning** — hvilket forskningsspørsmål den egner
   seg for, og hvilket målenivå den krever (sensorkrav 3). Rammes i en idrettscase.
4. `definition` **Kjernebegreper/tabellceller** — hva hver nøkkelverdi er (*R Square*,
   *F*, *Sig.*, *B*, *Pearson r*, *Levene*, *Chi-Square*), i ORD først. **Flashcard-kilde.**
5. `text` **Den faste tolkningsoppskriften anvendt** (fra 6.1): egnet spørsmål →
   forutsetning/målenivå → beskriv nøkkeltallene → signifikans → effektstørrelse/styrke →
   konklusjon i kontekst. Trinn for trinn.
6. `example` × 2–4 **Gjennomtolket utskrift** — nyskrevet markdown-SPSS-tabell med fiktive
   idrettstall; første enkel, siste på EKSAMENSNIVÅ. Tolkningen skrives slik en A-
   besvarelse ser ut (les av celle → si hva den betyr → konkluder i kontekst).
7. `warning` **Typiske feil** — feilkodene for analysen (f.eks. #4, #5, #6, #10).
8. `exercise` × 5–10 — stigende: les-av-verdier (lett) → full tolkning av én tabell
   (middels) → full tolkning + konklusjon i kontekst på eksamensnivå (vanskelig), alle med
   nyskrevne tabeller/tall, `solution` (verbal tolkning) + `hints`. Plassert INLINE.
9. `collapsible` **Repetisjon** — 4–6 korte kontrollpunkter (forutsetning, tabellceller,
   grenser) fra kapitlet og forutgående SPSS-kapitler.

Eksamenstreningskapitlene (Del 12) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2023–2026-arkivet (6 sett)».
> **Begrepskontrakt / Tabellkontrakt** = begreper/tabellceller som SKAL med (flashcard-
> kilden). **Drøftingsakser** = spenninger kapitlet ruster til å drøfte. **Kvote** =
> quiz/flashcards. Kryssbok-lenker til nih-met200 UTELATES (boka finnes ikke ennå) —
> omtales i prosa.

### Del 0 — Eksamenskart og skrive-/tolkningshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes MET402
**id:** `nih-met402-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skoleeksamen, ingen hjelpemidler, A–F, WISEflow,
  bokmål/nynorsk, to arbeidskrav), regimeskiftet til fire likeverdige oppgaver à 25 %
  (H2024→), de to bærebjelkene (studiedesign-essay + SPSS-tolkning), sjangerkodene,
  temafrekvensene, sensorkravene og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2023–2026, 6 sett). Skal formidle: (a)
  **formen** — 4 t skriftlig skoleeksamen, ingen hjelpemidler, A–F, to godkjente
  gruppeinnleveringer for å gå opp; (b) **regimeskiftet** — H2023 hadde 3 oppgaver med
  skjev vekting (70/10/20 eller 70/20/10, én dominerende essay), fra H2024 fire likeverdige
  oppgaver à 25 % (typisk 2 essay + 2 utskrift), stabilt over fire sett → sikreste prognose
  for H2026; (c) **de to bærebjelkene** — studiedesign-essayet (STU, 5/6) og SPSS-
  utskriftstolkning (alle fem analysene roterer); (d) **temafrekvenstabellen** (§2/analysen
  §2); (e) **sensorkravene** (§2, rød tråd + effektstørrelse + «korrelasjon ≠ kausalitet»);
  (f) **kildeforbeholdet** — 6 sett over 3 år, samme oppgavekonstruktør (høy stilkontinuitet),
  men lavfrekvente temaer kan bli mer sentrale, nye sett kan endre bildet. Prioritet: perfekt.
- **Innholdskontrakt:** Sjangerkatalogen (STU/PRH/VAR/DES/UTV/DAT/KOR/ANO/REG/TTE/KJI/STØ/
  FEI) som studentens sjekkliste med frekvens per sjanger; **prognosen for neste sett**
  (H2026 ordinær: 4 × 25 %, forvent én essay om forskningsprosess/design/utvalg + én
  begreps-/essayoppgave (variabler/kausalitet/utvalgsstørrelse) + to SPSS-tolkninger, med
  **regresjon nesten sikker på ordinær** og den andre trukket blant ANOVA/korrelasjon/
  t-test/krysstabell; effektstørrelse og «korrelasjon ≠ kausalitet» de mest sannsynlige
  tilleggskravene). **Del 0-pakken** (README): «Slik leser du denne boka»-boks
  (`text`/`tip`, ALDRI `definition`) med karakter-/vurderingsskalaen (C er en god og vanlig
  karakter — README karakter-realisme; ordet «perfekt» unngås i prioritering) + sjanger-
  kodelisten skrevet fullt ut + at feil har et samlet register; «Lite tid?»-boks (3–5-dagers
  hurtigrute: Del 0 → 1 → 6 → regresjon/ANOVA → studiedesign-drill; ukeplaner av summerte
  estimatedMinutes; LESEtider, ×1,5 for håndskrift); deltidsrute (10–12 uker à ~8 t/uke med
  øvingseksamener fordelt på flere søndager, aldri stablet); kildenote for frekvens-/sensor-
  empirien (6 sett 2023–2026 + forbehold); prosedyre-/sjangeroversiktskort på ÉN side
  (sjanger → én linjes oppskrift → tidsbudsjett → vanligste feil); «lese mye, skrive lite»-
  boks (les oppgaven → formuler svaret mentalt i én setning → les fasiten som sensor; skriv
  minst ÉN øvingseksamen for hånd på tid — fire timer håndskrift er en fysisk ferdighet).
  Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers
  eksamen med fire likeverdige oppgaver (2 essay + 2 utskrift) — sett opp tidsbudsjett og
  rekkefølge» og «avgjør av en oppgavetekst om den ber om et studiedesign-essay (STU) eller
  en SPSS-tolkning (KOR/ANO/REG/TTE/KJI)».
- **Typiske feil:** Metafeilene: å gamble på ett format (må dekke begge bærebjelkene); å tro
  at «i ditt fagfelt»-friheten er en unnskyldning for løs prat (helhet/kompleksitet teller,
  #1/#2); å vente en fasit (helhetsvurdering, ingen fasit); å tro at emnet krever håndregning
  (det gjør det aldri).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, regimeskiftet, de to bærebjelkene, temafrekvens,
  sensorkravene, sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Skrive- og tolkningshåndverket
**id:** `nih-met402-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-0-1`

- **Kapitteltype:** håndverkskapittel (meta — essay-/tolkningsspråk).
- **Description:** De to ferdighetene som gir uttelling på hver eneste oppgave: å skrive en
  **sammenhengende studieplan** (rød tråd fra problemstilling til refleksjon) og å anvende
  den **faste SPSS-tolkningsoppskriften** (egnet spørsmål → målenivå → nøkkeltall →
  signifikans → effektstørrelse → konklusjon i kontekst). Kapitlet etablerer begge malene og
  de binære selvrettingsrubrikkene resten av boka bruker.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 3, 4, 6 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. `collapsible` **Håndverksliste:** studiedesign-
  kjeden (7 ledd); den faste tolkningskjeden (6 ledd); drøftingsverbene (veie, begrunne, se
  sammenheng).
- **Begrepskontrakt (flashcard-kilde):** **studiedesign-kjeden** (problemstilling → to
  testbare hypoteser med retning → variabler m/målenivå → begrunnet design → datainnsamling/
  utvalg → datahåndtering → kritisk refleksjon); **rød tråd** (A-markør) vs. C-fellene
  (elementer ramset opp uten sammenheng, #2); **den faste tolkningskjeden for utskrift**
  (egnet forskningsspørsmål → forutsetning om målenivå → beskriv nøkkeltallene → vurder
  signifikans → vurder effektstørrelse/styrke → konkluder i kontekst); **«i ditt fagfelt»-
  disiplinen** (case skreddersys til metoden, #1); **den binære selvrettingsrubrikken for
  STU** (☐ presis problemstilling? ☐ to testbare hypoteser med variabler OG retning? ☐
  målenivå angitt per variabel? ☐ design begrunnet og passer problemstillingen? ☐
  utvalgsstrategi med type + antall? ☐ datahåndtering nevnt? ☐ reliabilitet/validitet/
  generalisering drøftet?) og **for tolkning** (☐ forutsetning/målenivå sjekket? ☐
  nøkkeltall lest av riktig? ☐ signifikans vurdert? ☐ effektstørrelse tolket der den gis? ☐
  «korrelasjon ≠ kausalitet» der relevant? ☐ konklusjon i kontekst?).
- **Tegne-/løsningsprosedyre:** for STU: (1) formuler problemstilling; (2) utled to hypoteser
  med variabler og retning; (3) angi målenivå per variabel; (4) velg og begrunn design; (5)
  velg utvalgsstrategi med type + antall; (6) beskriv datahåndtering; (7) drøft reliabilitet/
  validitet/generalisering; (8) sjekk mot rubrikken. For tolkning: bruk den faste kjeden.
- **Drøftingsakser:** rød tråd vs. oppramsing; skarp konklusjon vs. balansert forbehold (jf.
  README A-konklusjonsvariasjon — forbehold er verktøy, ikke obligatorisk garnityr).
- **Typiske feil:** #1, #2, #10; i tillegg telegramstil framfor flytende norsk (README).
- **Case-forslag:** en enkel problemstilling om sammenhengen mellom treningsglede og fysisk
  form brukt til å demonstrere alle sju leddene i studiedesign-kjeden (peker fram mot Del 1–5).
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 0:** 0 prøver (dekkes av modellbesvarelsene og øvingseksamenene i Del 12).

### Del 1 — Forskningsprosessen, problemstilling og hypoteser *(prioritet: PERFEKT — 5/6 sett, inngangen til essayet)*

#### Kapittel 1.1: Den kvantitative forskningsprosessen i seks steg
**id:** `nih-met402-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-0-2`

- **Kapitteltype:** begrepskapittel (grunnlag → perfekt).
- **Description:** Rammeverket for hele studiedesign-essayet: de seks stegene (idé →
  problemstilling → design → datainnsamling → dataanalyse → rapportering) og hvordan hvert
  steg forutsetter det forrige. Forbereder problemstilling/hypoteser (1.2–1.3) og feilkilde-
  oppgaven (11.3).
- **Eksamensbelegg:** Forutsetning for alle studiedesign-essay (STU, 5/6) og for feilkilde-
  oppgaven (FEI, ny H2025). Prioritet: grunnlag for topptemaet.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Begrepsliste:** de seks stegene,
  operasjonalisering, den «røde tråden». *Søsteremnet nih-met200 (Forskningsmetode) dekker
  samme prosess bredere — omtales i prosa uten lenke.*
- **Begrepskontrakt (flashcard-kilde):** **de seks stegene** (idé → problemstilling → design
  → datainnsamling → dataanalyse → rapportering); **operasjonalisering** (fra abstrakt begrep
  til målbar indikator); **rød tråd/indre sammenheng** (hvert steg må passe det forrige);
  **teori-empiri-koblingen** (deduktiv, hypotesetestende logikk). Forankres i Ringdal.
- **Drøftingsakser:** hvor i prosessen kvaliteten avgjøres; deduktiv (hypotesetestende) vs.
  eksplorerende tilnærming.
- **Case-forslag:** en idé om at sosial støtte henger sammen med frafall i ungdomsidrett,
  fulgt gjennom alle seks stegene.
- **Typiske feil:** #1 (uklar/uoperasjonaliserbar problemstilling), #2 (manglende rød tråd).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.2: Problemstilling — presis og forskbar
**id:** `nih-met402-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-1-1`

- **Kapitteltype:** begreps-/essaykapittel (perfekt).
- **Description:** Å formulere en presis, faglig begrunnet og forskbar problemstilling om en
  sammenheng mellom fenomener i eget idrettsfelt — inngangsporten til hele essayet.
- **Eksamensbelegg:** Sjanger PRH (problemstilling + hypoteser, 5/6) og fast første ledd i
  STU. Vag/uoperasjonaliserbar problemstilling gir lav uttelling. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Begrepsliste:** problemstilling,
  avgrensning, faglig begrunnelse (relevans/ny kunnskap), sammenhengsspørsmål vs.
  beskrivende spørsmål.
- **Begrepskontrakt (flashcard-kilde):** **problemstilling** (presist forskningsspørsmål om
  en sammenheng); **faglig begrunnelse** (interesse/relevans/ny kunnskap — *uten* litteratur-
  krav på eksamen); **forskbarhet/operasjonaliserbarhet** (kan omsettes til målbare
  variabler); skillet **sammenhengs-** vs. **beskrivende** problemstilling. Forankres i Ringdal.
- **Drøftingsakser:** bred vs. avgrenset problemstilling; beskrive vs. forklare en sammenheng.
- **Case-forslag:** «Henger opplevd trenerstøtte sammen med indre motivasjon hos junior-
  utøvere?» — vist som presis vs. en vag variant.
- **Typiske feil:** #1 (uklar/uoperasjonaliserbar), #2 (problemstilling som ikke peker mot en
  testbar sammenheng).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 1.3: Testbare hypoteser med variabler og retning
**id:** `nih-met402-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-1-2`

- **Kapitteltype:** begreps-/essaykapittel (perfekt).
- **Description:** Å utlede to **testbare** hypoteser der variablene og den **antatte retningen**
  på sammenhengen kommer tydelig fram, og skillet mellom nullhypotese (H0) og alternativ-
  hypotese (H1) som all senere signifikanstesting hviler på.
- **Eksamensbelegg:** Sjanger PRH (5/6) og fast andre ledd i STU. Vage hypoteser uten
  variabler/retning gir lav uttelling. H0/H1-skillet er forutsetning for all utskriftstolkning
  (Del 6–11). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Begrepsliste:** hypotese, testbarhet,
  retning, H0/H1, én-/tosidig forventning.
- **Begrepskontrakt (flashcard-kilde):** **testbar hypotese** (angir variabler + forventet
  retning på sammenhengen); **nullhypotese H0** (ingen sammenheng/forskjell) vs. **alternativ-
  hypotese H1** (den forventede sammenhengen); **retning** (positiv/negativ sammenheng);
  koblingen hypotese → variabler → analysevalg (rød tråd). Forankres i Ringdal/Field.
- **Drøftingsakser:** retningsbestemt vs. åpen hypotese; hva en signifikanstest faktisk
  «tester» (forkaster H0, beviser ikke H1).
- **Case-forslag:** to hypoteser til problemstillingen fra 1.2 — «H1a: høyere trenerstøtte
  henger sammen med høyere indre motivasjon»; med retning eksplisitt markert.
- **Typiske feil:** #1 (vage hypoteser uten variabler/retning), #2 (hypoteser som ikke følger
  av problemstillingen).
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (id `nih-met402-1-prove`, chapterNumber `1.P`): (1)
*Forskningsprosessen* — FEI-grunnlag, de seks stegene med rekkefølge; (2) *Problemstilling* —
PRH, presis vs. vag (finn fellen, varierte fasiter); (3) *Hypoteser* — PRH, utled to testbare
hypoteser med retning fra en gitt problemstilling; (4) *Samlet* — problemstilling + hypoteser
på eksamensnivå (STU-inngang). «4 prøver à ~25–35 min — kan trygt deles, én prøve per økt.»

### Del 2 — Variabler, målenivå og latente skalaer *(prioritet: PERFEKT — 5/6 sett, gjennomgående nøkkel)*

#### Kapittel 2.1: Målenivå — nominal, ordinal, intervall og forhold
**id:** `nih-met402-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-1-3`

- **Kapitteltype:** begrepskapittel (perfekt — bestemmer alt senere analysevalg).
- **Description:** De fire målenivåene og hvorfor de er sensors «gjennomgående nøkkel»:
  målenivået avgjør hvilken analyse som er lov (kontinuerlig for t-test/ANOVA/regresjon;
  kategorisk for kjikvadrat). Fundamentet for hele analyse-delen (Del 6–11).
- **Eksamensbelegg:** Sjanger VAR (5/6) og forutsetning i HVER analyseoppgave (sensorkrav 3,
  #6). Prioritet: perfekt (grunnlag for både essay og tolkning).
- **Forkunnskaper/kryssbok:** kap. 1.3. `collapsible` **Begrepsliste:** de fire nivåene med
  ett idrettseksempel hver + hvilken analyse hvert nivå tillater.
- **Begrepskontrakt (flashcard-kilde):** **nominal** (kategorier uten rangering — idrettsgren,
  kjønn), **ordinal** (rangert uten lik avstand — plassering, Likert strengt tatt), **intervall**
  (lik avstand, vilkårlig null), **forhold/ratio** (ekte nullpunkt — VO₂maks, antall treninger);
  skillet **kategorisk** vs. **kontinuerlig**; hvorfor Likert i praksis behandles som
  kontinuerlig når subskalaer summeres (`(verifiser)` — begrunn kort). Forankres i Ringdal.
- **Drøftingsakser:** ordinal-som-kontinuerlig-debatten (Likert-summeskår); hva som går tapt
  ved å redusere målenivå.
- **Case-forslag:** klassifiser målenivået til fem variabler i en idrettsstudie (kjønn, gren,
  motivasjonsskår, antall treninger/uke, opplevd form 1–7).
- **Typiske feil:** #6 (feil analyse for målenivået), #8 (målenivå ikke angitt).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 2.2: Indikatorer, latente variabler og Likert-skalaer
**id:** `nih-met402-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-2-1`

- **Kapitteltype:** begreps-/essaykapittel (perfekt).
- **Description:** Å bygge en variabel av flere indikatorer: latente variabler, subskalaer,
  Likert-svarkategorier (1–5, 1–7) og hvordan et abstrakt begrep (motivasjon, trivsel) måles
  gjennom flere spørsmål — kjernen i en god variabelbeskrivelse.
- **Eksamensbelegg:** Sjanger VAR (5/6). A-markør: skille enkeltindikator fra latent variabel,
  nevne subskala-bygging. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Begrepsliste:** indikator, latent
  variabel, subskala, Likert-skala, reversering (peker mot 5.1).
- **Begrepskontrakt (flashcard-kilde):** **enkeltindikator** (én måling — alder) vs. **latent
  variabel** (måles indirekte via flere items — indre motivasjon); **subskala** (delskala
  bygget av items som hører sammen); **Likert-skala** (ordnede svarkategorier, typisk 1–5/1–7);
  **reversering** av negativt formulerte items (forklares fullt i 5.1). Forankres i Field/Ringdal.
- **Drøftingsakser:** én god indikator vs. mange svake; validerte skalaer vs. egenkonstruerte.
- **Case-forslag:** beskriv hvordan «opplevd trenerstøtte» måles med 6 Likert-items som danner
  én subskala.
- **Typiske feil:** #8 (tynn variabelbeskrivelse — mangler indikatorer/subskalaer/svarkategorier).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 2.3: Intern konsistens og Cronbachs alfa
**id:** `nih-met402-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-2-2`

- **Kapitteltype:** begrepskapittel (kunne → A-markør).
- **Description:** Hvordan man sjekker at items i en subskala måler det samme: Cronbachs alfa
  som mål på intern konsistens, hva verdien betyr og en vanlig anbefalt terskel. A-markøren i
  variabelbeskrivelsen.
- **Eksamensbelegg:** Del av VAR (nevnt eksplisitt i H2026-utsatt-fasit som A-markør for
  latente variabler); Cronbachs alfa isolert 1/6. Prioritet: kunne (differensierer mot A).
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Begrepsliste:** intern konsistens,
  Cronbachs alfa, reliabilitet (peker mot 3.3), anbefalt cut-off.
- **Begrepskontrakt (flashcard-kilde):** **intern konsistens** (i hvilken grad items i en
  skala samvarierer); **Cronbachs alfa** (mål 0–1 på intern konsistens, bygger på korrelasjon
  mellom items); **anbefalt terskel** (typisk α ≥ 0,70 — `(verifiser)`); koblingen alfa →
  reliabilitet. Forankres i Field.
- **Drøftingsakser:** høy alfa vs. for mange like items (redundans); alfa som *nødvendig men
  ikke tilstrekkelig* for validitet.
- **Case-forslag:** en trenerstøtte-subskala med α = 0,84 tolket, og hva man gjør ved α = 0,55.
- **Typiske feil:** #8 (utelate intern-konsistens-testing for latente variabler), #11
  (forveksle reliabilitet med validitet).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 2:** 4 prøver (id `nih-met402-2-prove`, chapterNumber `2.P`): (1) *Målenivå*
— VAR, klassifiser + koble til lovlig analyse (varierte fasiter); (2) *Latente variabler* —
VAR, indikator vs. subskala + Likert; (3) *Cronbachs alfa* — tolk α-verdier og terskel; (4)
*Samlet variabelbeskrivelse* — VAR på eksamensnivå (målenivå + indikatorer + intern konsistens).
«4 prøver à ~25–35 min — én per økt.»

### Del 3 — Forskningsdesign og kausalitet *(prioritet: PERFEKT — 5/6 design; kausalitet binder essay og tolkning)*

#### Kapittel 3.1: Design — tverrsnitt, longitudinelt/panel, eksperiment, kvasi
**id:** `nih-met402-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-2-1`

- **Kapitteltype:** begreps-/essaykapittel (perfekt).
- **Description:** De fire hoveddesignene med **kjennetegn + styrker + svakheter** hver, og
  hvordan man velger og begrunner design ut fra problemstillingen — essayets tunge midtdel.
- **Eksamensbelegg:** Sjanger DES (5/6). Sensor krever kjennetegn/styrker/svakheter for det
  valgte designet, og at designet passer problemstillingen (#2). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2, 2.1. `collapsible` **Begrepsliste:** de fire designene
  + indre/ytre validitet + manipulerbar vs. ikke-manipulerbar variabel. *Design deles med
  søsteremnet nih-met200 — omtales i prosa uten lenke.*
- **Begrepskontrakt (flashcard-kilde):** **tverrsnitt** (ett tidspunkt, representativt utvalg,
  kan bruke ikke-manipulerbare variabler, men korrelasjon ≠ årsak); **longitudinelt/panel**
  (samme enheter over tid; svakhet: frafall og instrumenteffekt); **ekte eksperiment**
  (randomisert eksperiment-/kontrollgruppe, sterk indre validitet, men kunstig og bare
  manipulerbare variabler); **kvasieksperiment** (ikke-randomisert); **indre** vs. **ytre
  validitet**. Forankres i Ringdal/Field.
- **Drøftingsakser:** indre validitet (eksperiment) vs. ytre validitet/realisme (tverrsnitt);
  gjennomførbarhet vs. årsaksstyrke; hvorfor bare manipulerbare variabler kan være årsaker.
- **Case-forslag:** velg design for å studere om et motivasjonsprogram øker treningsglede —
  eksperiment vs. tverrsnitt, med styrker/svakheter.
- **Typiske feil:** #2 (design som ikke passer problemstillingen — tverrsnitt der longitudinelt
  trengs), #3 (kausal tolkning av tverrsnitt).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 3.2: Kausalitet — betingelser og «korrelasjon ≠ årsak»
**id:** `nih-met402-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-3-1`

- **Kapitteltype:** begrepskapittel (kunne → gjennomgangstema).
- **Description:** De tre/fire kausalitetsbetingelsene og det gjennomgående forbeholdet
  «korrelasjon beviser ikke årsak» som binder studiedesign-essayet til all utskriftstolkning.
- **Eksamensbelegg:** Kausalitet eksplisitt egen tung oppgave 1/6 (H2024 ordinær), men
  implisitt forbehold i ALLE korrelasjons-/tverrsnittsvar (sensorkrav 5, #3). Prioritet: kunne
  (men gjennomgående).
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Begrepsliste:** de tre betingelsene +
  teoretisk forankring + tredjevariabel/konfundering.
- **Begrepskontrakt (flashcard-kilde):** **kausalitetsbetingelsene** — (1) samvariasjon, (2)
  tidsrekkefølge/asymmetri (årsak før virkning), (3) kontroll for tredjevariabler/isolasjon —
  pluss (4) **teoretisk forankring** som fjerde krav i samfunnsvitenskap; **tredjevariabel/
  konfundering**; **«korrelasjon ≠ kausalitet»** (særlig ved tverrsnitt på ett tidspunkt).
  Forankres i Ringdal.
- **Drøftingsakser:** når er en observert sammenheng «god nok» for kausalpåstand; spuriøse
  sammenhenger (bakenforliggende variabel).
- **Case-forslag:** en positiv korrelasjon mellom antall treninger og skoleprestasjon — drøft
  hvorfor dette ikke beviser årsak (mulig tredjevariabel: familiebakgrunn).
- **Typiske feil:** #3 (kausal tolkning av korrelasjon/tverrsnitt) — den hyppigste tolknings-
  fellen, glosses her.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.3: Reliabilitet, validitet og generalisering
**id:** `nih-met402-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-3-2`

- **Kapitteltype:** begreps-/essaykapittel (perfekt — fast vurderingspunkt).
- **Description:** De tre kvalitetsdimensjonene som den kritiske refleksjonen i essayet hviler
  på, og hvorfor sensor behandler denne refleksjonen som et selvstendig vurderingspunkt, ikke
  pynt.
- **Eksamensbelegg:** Reliabilitet/validitet/generalisering som eksplisitt vurderingspunkt
  4/6, og fast sluttledd i STU. Prioritet: perfekt. Sjangre: STU, DES, UTV.
- **Forkunnskaper/kryssbok:** kap. 2.3, 3.1, 3.2. `collapsible` **Begrepsliste:** reliabilitet,
  validitetstyper, generalisering/overføringsverdi, indre/ytre validitet. *Deles med søster-
  emnet nih-met200 — omtales i prosa uten lenke.*
- **Begrepskontrakt (flashcard-kilde):** **reliabilitet** (målingens pålitelighet/konsistens —
  kobles til Cronbachs alfa fra 2.3); **validitet** (måler vi det vi tror — begreps-, indre,
  ytre validitet); **generalisering/overføringsverdi** (til hvilken populasjon funnet gjelder);
  skillet reliabilitet ≠ validitet (pålitelig men ugyldig måling). Forankres i Ringdal/Field.
- **Drøftingsakser:** indre vs. ytre validitet-avveiningen; hvorfor høy reliabilitet ikke
  garanterer validitet; hva som truer generaliserbarhet (seleksjon/frafall — peker mot Del 4).
- **Case-forslag:** kritisk refleksjon over en tverrsnittstudie av trenerstøtte — hva truer
  reliabilitet, validitet og overføringsverdi.
- **Typiske feil:** #11 (utelate den kritiske refleksjonen), #7 (behandle skjevt utvalg som
  representativt).
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 3:** 4 prøver (id `nih-met402-3-prove`, chapterNumber `3.P`): (1) *Design* —
DES, velg + begrunn design med kjennetegn/styrker/svakheter; (2) *Kausalitet* — DES, de
tre/fire betingelsene + «korrelasjon ≠ årsak» (vippe-case: er årsak forsvarlig her?); (3)
*Reliabilitet/validitet* — begrepsavklaring + kritisk refleksjon; (4) *Samlet design-essay* —
DES + refleksjon på eksamensnivå. «4 prøver à ~30–40 min — én per økt.»

### Del 4 — Utvalg, populasjon og representativitet *(prioritet: PERFEKT — 5/6 sett, bærebjelke i essayet)*

#### Kapittel 4.1: Populasjon, utvalg og sannsynlighetsutvalgets fire typer
**id:** `nih-met402-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-3-1`

- **Kapitteltype:** begreps-/essaykapittel (perfekt).
- **Description:** Populasjon vs. utvalg, generalisering, og sannsynlighetsutvalgets fire typer
  (enkel tilfeldig, systematisk, stratifisert, klynge) satt opp mot ikke-sannsynlighetsutvalg —
  utvalgsdelen av essayet.
- **Eksamensbelegg:** Sjanger UTV (5/6). Sensor krever type + underkategori + fremgangsmåte.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.3. `collapsible` **Begrepsliste:** populasjon, utvalg,
  de fire sannsynlighetsutvalgene, ikke-sannsynlighetsutvalg. *Deles med nih-met200 — prosa.*
- **Begrepskontrakt (flashcard-kilde):** **populasjon** (mengden man vil generalisere til);
  **sannsynlighetsutvalg** — **enkel tilfeldig** (alle lik sjanse), **systematisk** (hver n-te),
  **stratifisert** (proporsjonal/disproporsjonal — del populasjonen i lag først), **klynge/
  cluster** (velg grupper, ikke individer); **ikke-sannsynlighetsutvalg** (bekvemmelighet,
  strategisk, snøball) og hvorfor det svekker generalisering. Forankres i Ringdal.
- **Drøftingsakser:** når trengs stratifisering (skjeve grupper); proporsjonal vs.
  disproporsjonal (A-markør); representativitet vs. gjennomførbarhet.
- **Case-forslag:** velg utvalgsstrategi for å studere norske håndballspillere på ulike nivåer
  — stratifisert etter divisjon, begrunnet.
- **Typiske feil:** #7 (overse seleksjon; behandle bekvemmelighetsutvalg som representativt).
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 4.2: Feilkilder, representativitet og vekting
**id:** `nih-met402-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-4-1`

- **Kapitteltype:** begrepskapittel (perfekt → kunne; vekting ny H2025).
- **Description:** Hvordan man vurderer utvalgskvalitet via representativitet og fire feilkilder
  (dekning, utvalg, frafall, justering/vekting), og hva det vil si å **vekte** et utvalg for å
  korrigere for skjevhet.
- **Eksamensbelegg:** Del av UTV (5/6); **vekting** eksplisitt egen vinkling ny H2025 (1/6).
  Prioritet: perfekt for representativitet, kunne/kjenne for vekting.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Begrepsliste:** representativitet, de
  fire feilkildene, vekting.
- **Begrepskontrakt (flashcard-kilde):** **representativitet** (utvalget speiler populasjonen);
  **dekningsfeil**, **utvalgsfeil**, **frafallsfeil**, **justerings-/vektingsfeil**; **vekting**
  (gi over-/underrepresenterte grupper justert vekt for å korrigere skjevhet). Forankres i Ringdal.
- **Drøftingsakser:** når vekting hjelper vs. når det maskerer et dårlig utvalg; hvilke
  feilkilder som er farligst for generalisering.
- **Case-forslag:** et nettbasert idrettssurvey der unge menn er overrepresentert — forklar
  vekting med et konkret regneeksempel-i-ord (ingen håndregning kreves av leseren).
- **Typiske feil:** #7 (overse seleksjon/frafall), #2 (utvalg som ikke passer populasjonen).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 4.3: Frafall — MCAR, MAR og MNAR
**id:** `nih-met402-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-4-2`

- **Kapitteltype:** begrepskapittel (kunne → A-markør).
- **Description:** De tre frafallstypene og hvorfor systematisk (ikke-tilfeldig) frafall truer
  generaliserbarhet mens tilfeldig frafall er mindre farlig — en A-markør sensor belønner
  uoppfordret.
- **Eksamensbelegg:** Del av UTV og utvalgsstørrelse (STØ); MCAR/MAR/MNAR nevnt som A-markør
  i fasitene. Prioritet: kunne (differensierer mot A).
- **Forkunnskaper/kryssbok:** kap. 4.2. `collapsible` **Begrepsliste:** frafall, MCAR, MAR,
  MNAR, systematisk vs. tilfeldig frafall.
- **Begrepskontrakt (flashcard-kilde):** **MCAR** (Missing Completely At Random — frafall
  uavhengig av alt); **MAR** (Missing At Random — frafall forklart av andre målte variabler);
  **MNAR** (Missing Not At Random — frafall henger sammen med den manglende verdien selv);
  hvorfor **systematisk** frafall (MNAR) truer generaliserbarhet mest. Forankres i Field.
- **Drøftingsakser:** når er frafall «bare støy» vs. en trussel mot funnene; hva man kan gjøre
  (peker mot missing-håndtering i 5.1).
- **Case-forslag:** en longitudinell studie der de minst motiverte utøverne slutter å svare —
  klassifiser frafallstypen og drøft konsekvensen.
- **Typiske feil:** #7 (ikke skille systematisk fra tilfeldig frafall).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (id `nih-met402-4-prove`, chapterNumber `4.P`): (1)
*Sannsynlighetsutvalg* — UTV, de fire typene + eksempler (varierte fasiter); (2)
*Representativitet/vekting* — UTV, feilkilder + hva vekting gjør; (3) *Frafall* — MCAR/MAR/MNAR
+ konsekvens; (4) *Samlet utvalgsessay* — UTV på eksamensnivå (type + antall + kvalitet).
«4 prøver à ~25–35 min — én per økt.»

### Del 5 — Datahåndtering og screening *(prioritet: KUNNE — 3/6 sett, essayets siste steg)*

#### Kapittel 5.1: Fra rådata til analyseklart datasett
**id:** `nih-met402-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-4-3`

- **Kapitteltype:** begreps-/prosesskapittel (kunne).
- **Description:** De sentrale stegene fra innsamlede data til analyseklart datasett: merge,
  data screening, missing data, uteliggere, normalitetssjekk, reversering av negative items og
  subskala-konstruksjon — med *hvorfor* hvert steg hever kvaliteten.
- **Eksamensbelegg:** Sjanger DAT (3/6). Sensor krever at hvert steg begrunnes (hvorfor det
  forbedrer reliabilitet/validitet). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 2.2, 2.3, 4.3. `collapsible` **Begrepsliste:** merge,
  screening, missing, uteliggere, normalfordeling, reversering, subskala.
- **Begrepskontrakt (flashcard-kilde):** **merge** (sammenslåing av datasett); **data
  screening** (deskriptiv oversikt + grafisk visualisering); **missing data** (identifisering
  og behandling — kobles til MCAR/MAR/MNAR); **uteliggere** (ekstremverdier); **normalfordeling**
  (forutsetning for parametriske tester); **reversering** av negativt formulerte items;
  **subskala-konstruksjon** + intern-konsistens-testing. Forankres i Field.
- **Drøftingsakser:** slette vs. imputere missing; når en uteligger er feil vs. ekte variasjon.
- **Case-forslag:** en trivselsundersøkelse der to items er negativt formulert og 8 % mangler —
  beskriv screening-stegene og begrunn hvert.
- **Typiske feil:** #10 (ramse opp steg uten å begrunne hvorfor), #8 (glemme reversering/
  subskala-bygging).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 5.2: Deskriptiv oversikt, normalitet og forutsetningssjekk
**id:** `nih-met402-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-5-1`

- **Kapitteltype:** begrepskapittel (kunne — bro til Del 6).
- **Description:** Hvordan man skaffer seg deskriptiv oversikt (sentraltendens, spredning) og
  sjekker forutsetninger (normalitet, varianslikhet) FØR analyse — broen mellom datahåndtering
  og SPSS-tolkning.
- **Eksamensbelegg:** Del av DAT (3/6) og forutsetning for alle analysene (Del 6–11). Prioritet:
  kunne (grunnlag for tolkning).
- **Forkunnskaper/kryssbok:** kap. 5.1, 2.1. `collapsible` **Begrepsliste:** sentraltendens
  (gjennomsnitt/median/modus), spredning (SD/varians/spennvidde), normalfordeling, skjevhet.
- **Begrepskontrakt (flashcard-kilde):** **sentraltendens** (gjennomsnitt, median, modus — og
  hvilket målenivå hver krever); **spredning** (standardavvik, varians, min/maks); **normal-
  fordeling** (hvorfor den er en forutsetning for parametriske tester); **varianslikhet**
  (peker mot Levene i Del 8). Forankres i Field.
- **Drøftingsakser:** gjennomsnitt vs. median ved skjeve data; hva man gjør ved brutt normalitet.
- **Case-forslag:** en deskriptiv tabell (nyskrevet) for VO₂maks i to grupper — les av N,
  gjennomsnitt, SD, og vurder om variabelen er kontinuerlig.
- **Typiske feil:** #6 (ikke sjekke forutsetninger før analyse).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver (id `nih-met402-5-prove`, chapterNumber `5.P`): (1)
*Screening-stegene* — DAT, rekkefølge + begrunnelse (finn fellen); (2) *Missing/uteliggere* —
DAT, behandling + kobling til MCAR/MAR/MNAR; (3) *Deskriptiv/normalitet* — les av + vurder
forutsetning; (4) *Samlet datahåndtering* — DAT på eksamensnivå. «4 prøver à ~20–30 min — én
per økt.»

### Del 6 — Å lese SPSS-utskrift: oppskrift og deskriptiv statistikk *(prioritet: PERFEKT — grunnlag for alle fem analysene)*

#### Kapittel 6.1: Den faste tolkningsoppskriften for SPSS-utskrift
**id:** `nih-met402-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-5-2`

- **Kapitteltype:** oppskriftskapittel (perfekt — mal for hele Del 6–11).
- **Description:** Den seksleddede tolkningskjeden som gjelder for ALLE fem analysene: egnet
  forskningsspørsmål → forutsetning om målenivå → beskriv nøkkeltallene → vurder signifikans →
  vurder effektstørrelse/styrke → konkluder i kontekst. Malen resten av SPSS-kapitlene bruker.
- **Eksamensbelegg:** Gjennomgående i alle utskriftsoppgaver (KOR/TTE/ANO/REG/KJI). Prioritet:
  perfekt (meta for tolkningssøylen).
- **Forkunnskaper/kryssbok:** kap. 2.1, 5.2, 1.3 (H0/H1). `collapsible` **Tabell- og
  begrepsliste:** signifikansnivå og *Sig. (2-tailed)*, signifikansstjerner (* 0,05 / ** 0,01),
  p-verdi, effektstørrelse vs. signifikans.
- **Tabellkontrakt (flashcard-kilde):** **den faste tolkningskjeden** (6 ledd, pugges); **p-verdi/
  Sig. (2-tailed)** (sannsynligheten for funnet hvis H0 er sann; < 0,05 → forkast H0);
  **signifikansstjerner** (* signifikant på 0,05-nivå, ** på 0,01-nivå); **statistisk
  signifikans ≠ praktisk betydning** (sensorkrav 4); **type I-feil** (forkaste sann H0) vs.
  **type II-feil** (beholde falsk H0). Forankres i Field.
- **Tolkningsprosedyre:** de seks trinnene som algoritme, med påminnelse om at hver tolkning
  ender i konklusjon på fagproblemstillingen (#10).
- **Typiske feil:** #4 (stoppe ved signifikans), #10 (lese av tall uten tolkning), #6 (hoppe
  over forutsetningssjekken).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 6.2: Deskriptiv utskrift — kjenn igjen kontinuerlig variabel
**id:** `nih-met402-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-met402-6-1`

- **Kapitteltype:** SPSS-tolkningskapittel (perfekt — inngang til hver analyse).
- **Description:** Å lese den deskriptive tabellen (N, min/maks, gjennomsnitt, SD) og bruke den
  til å avgjøre at variablene er kontinuerlige — det faste første steget i hver utskriftsoppgave.
- **Eksamensbelegg:** Fast innledning til KOR/TTE/ANO/REG (les N + at variablene er kontinuerlige
  fordi det er min/maks/gjennomsnitt/SD). Prioritet: perfekt (grunnlag).
- **Forkunnskaper/kryssbok:** kap. 6.1, 5.2. `collapsible` **Tabell- og begrepsliste:** SPSS
  *Descriptives*-kolonnene (N, Minimum, Maximum, Mean, Std. Deviation) engelsk↔norsk↔plassering.
- **Tabellkontrakt (flashcard-kilde):** **N** (antall gyldige observasjoner), **Minimum/
  Maximum**, **Mean** (gjennomsnitt), **Std. Deviation** (standardavvik); regelen «har variabelen
  meningsfullt gjennomsnitt og SD → behandles som kontinuerlig»; hvordan missing vises (gyldig N
  < totalt N). Forankres i Field.
- **Tolkningsprosedyre:** les N → les Mean/SD → konkluder om variabelen er kontinuerlig →
  koble til hvilke analyser som da er lov (bro til 2.1/6.1).
- **Typiske feil:** #6 (ikke sjekke at variabelen er kontinuerlig før t-test/ANOVA/regresjon),
  #10 (lese av uten å si hva N/Mean betyr).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 6:** 4 prøver (id `nih-met402-6-prove`, chapterNumber `6.P`): (1)
*Tolkningsoppskriften* — anvend de seks trinnene på en enkel utskrift; (2) *Signifikans* —
p-verdi/stjerner + type I/II; (3) *Deskriptiv utskrift* — les av N/Mean/SD + avgjør kontinuerlig
(varierte fasiter); (4) *Samlet inngang* — deskriptiv + forutsetning på eksamensnivå. «4 prøver
à ~20–30 min — én per økt.»

### Del 7 — Korrelasjon *(prioritet: KUNNE — 3/6 sett)*

#### Kapittel 7.1: Tolk korrelasjonsmatrise (Pearsons r)
**id:** `nih-met402-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-6-2`

- **Kapitteltype:** SPSS-tolkningskapittel (kunne → perfekt håndverk).
- **Description:** Å lese en korrelasjonsmatrise: hva Pearsons r er (styrke og retning på lineær
  sammenheng), lese av retning, signifikans og styrke, gi konkrete eksempler fra matrisen, og
  ALLTID legge til «korrelasjon ≠ kausalitet».
- **Eksamensbelegg:** Sjanger KOR (3/6). Fast forbehold om ikke-kausalitet (sensorkrav 5, #3).
  Prioritet: kunne (men fast håndverk).
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2, 3.2 (kausalitet). `collapsible` **Tabell- og
  begrepsliste:** *Pearson Correlation*, *Sig. (2-tailed)*, *N*, signifikansstjerner, Cohens
  r-grenser.
- **Tabellkontrakt (flashcard-kilde):** **Pearsons r** (mål på styrke OG retning på lineær
  sammenheng mellom to kontinuerlige variabler, −1 til +1); **retning** (positiv/negativ fortegn);
  **signifikans** (*Sig. (2-tailed)*; * på 0,05, ** på 0,01); **styrke** via Cohens grenser
  (r ≈ 0,1 liten / 0,3 medium / 0,5 stor — `(verifiser)`); **Spearmans rho** (for ordinaldata,
  nevnes kort). Forankres i Field.
- **Tolkningsprosedyre:** anvend den faste kjeden — egnet spørsmål (samvariasjon mellom to
  kontinuerlige) → forutsetning (kontinuerlige variabler) → beskriv r (retning + størrelse) →
  signifikans → styrke (Cohen) → konkluder i kontekst + «ikke kausalitet».
- **Typiske feil:** #3 (kausal tolkning), #4 (nevne signifikans men ikke styrke), #10 (lese av r
  uten å si hva sammenhengen betyr).
- **Kvote:** 26 quiz / 26 flashcards.

**Prøve-kvote Del 7:** 4 prøver (id `nih-met402-7-prove`, chapterNumber `7.P`): (1) *Les
matrisen* — KOR, retning + signifikans fra en nyskrevet matrise; (2) *Styrke* — KOR, tolk
r-størrelse mot Cohen; (3) *Ikke-kausalitet* — KOR, hvorfor tverrsnittskorrelasjon ikke viser
årsak; (4) *Full korrelasjonstolkning* — KOR på eksamensnivå med konklusjon i kontekst. «4
prøver à ~20–30 min — én per økt.»

### Del 8 — t-test med Levene *(prioritet: KUNNE — 3/6 sett, alle utsatt)*

#### Kapittel 8.1: Tolk t-test-utskrift med Levenes test
**id:** `nih-met402-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-6-2`

- **Kapitteltype:** SPSS-tolkningskapittel (kunne → fast konte-håndverk).
- **Description:** Å tolke en t-test-utskrift: skille uavhengig fra parvis t-test, lese **Levenes
  test** først for å velge riktig rad, og deretter tolke t-verdi, frihetsgrader, Sig. (2-tailed),
  gjennomsnittsforskjell og standardfeil.
- **Eksamensbelegg:** Sjanger TTE (3/6, alle utsatt-sett → fast konte-innslag). Levene-logikken
  er signaturkravet (#5). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2, 5.2 (varianslikhet). `collapsible` **Tabell- og
  begrepsliste:** *Independent/Paired Samples t-test*, *Levene's Test for Equality of Variances*,
  *t*, *df*, *Sig. (2-tailed)*, *Mean Difference*, *Std. Error Difference*.
- **Tabellkontrakt (flashcard-kilde):** **t-test** (forskjell i gjennomsnitt mellom TO grupper på
  en kontinuerlig variabel); **uavhengig** (independent samples — to ulike grupper) vs. **parvis**
  (paired samples — to målinger av samme gruppe); **Levenes test** (tester varianslikhet: er
  *Sig.* < 0,05 → variansene ULIKE → bruk raden «Equal variances not assumed»; ellers «Equal
  variances assumed»); **t**, **df**, **Sig. (2-tailed)**, **Mean Difference**, **Std. Error**.
  Forankres i Field.
- **Tolkningsprosedyre:** egnet spørsmål (to gruppers gjennomsnitt) → forutsetning (kontinuerlig
  avhengig) → LES LEVENE, velg rad → les t/df/Sig. → tolk gjennomsnittsforskjell → konkluder i
  kontekst (evt. koble til effektstørrelse).
- **Typiske feil:** #5 (feil rad — overse Levene), #6 (glemme kontinuerlig-forutsetningen), #10
  (lese t uten konklusjon).
- **Kvote:** 26 quiz / 26 flashcards.

**Prøve-kvote Del 8:** 4 prøver (id `nih-met402-8-prove`, chapterNumber `8.P`): (1) *Uavhengig vs.
parvis* — TTE, velg riktig test for designet; (2) *Levene-raden* — TTE, velg riktig rad fra en
nyskrevet utskrift (varierte fasiter, ikke «alltid samme rad»); (3) *Full t-test-tolkning* — TTE
med konklusjon; (4) *t-test + effektstørrelse* — TTE koblet til praktisk betydning på
eksamensnivå. «4 prøver à ~20–30 min — én per økt.»

### Del 9 — ANOVA og effektstørrelse *(prioritet: PERFEKT-nær — 3/6 sett + signaturkrav)*

#### Kapittel 9.1: Tolk ANOVA-utskrift (enveis og repeterte målinger)
**id:** `nih-met402-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-6-2`

- **Kapitteltype:** SPSS-tolkningskapittel (kunne → perfekt-nær).
- **Description:** Å tolke en ANOVA-utskrift: at ANOVA tester forskjeller i gjennomsnitt mellom
  **tre eller flere** grupper (eller tidspunkt ved repeterte målinger), lese Descriptives og
  ANOVA-tabellen (F-verdi og Sig.), og konkludere om nullhypotesen om like gjennomsnitt forkastes.
- **Eksamensbelegg:** Sjanger ANO (3/6, også repeterte målinger). Forutsetning: kontinuerlig
  avhengig variabel. Prioritet: perfekt-nær.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2, 1.3 (H0). `collapsible` **Tabell- og begrepsliste:**
  *Descriptives*, *ANOVA*-tabellen (*Sum of Squares*, *df*, *Mean Square*, *F*, *Sig.*),
  Between/Within Groups, repeterte målinger.
- **Tabellkontrakt (flashcard-kilde):** **ANOVA** (forskjell i gjennomsnitt mellom ≥3 grupper);
  **nullhypotese** (alle gruppegjennomsnitt like); **F-verdi** og **Sig.** (p < 0,05 → forkast
  H0); **Between/Within Groups** *Sum of Squares*, *df*, *Mean Square* (konseptuelt — ingen
  regning); **repeterte målinger** (samme enheter over tidspunkt); at ANOVA sier at *noen*
  grupper skiller seg, ikke hvilke (post hoc nevnes kort). Forankres i Field.
- **Tolkningsprosedyre:** egnet spørsmål (≥3 gruppers gjennomsnitt) → forutsetning (kontinuerlig
  avhengig) → Descriptives (N/Mean/SD per gruppe) → F og Sig. → konkluder (effektstørrelse i 9.2).
- **Typiske feil:** #6 (glemme kontinuerlig-forutsetningen), #4 (stoppe ved F/Sig. uten η² — bro
  til 9.2), #10.
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 9.2: Effektstørrelse — eta² og praktisk betydning
**id:** `nih-met402-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-9-1`

- **Kapitteltype:** SPSS-tolkningskapittel (perfekt — signaturkrav).
- **Description:** Sensors signaturkrav: å tolke effektstørrelse (eta², η²) mot grensene
  0,01/0,06/0,14 og oversette til praktisk betydning — og forstå at en signifikant F med lav η²
  betyr liten praktisk forskjell. Samme logikk for r (Cohen) i korrelasjon.
- **Eksamensbelegg:** Effektstørrelse-tolkning 3/6 og eksplisitt signaturkrav i alle ANOVA-fasiter
  (sensorkrav 4). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1, 7.1 (Cohens r), 6.1. `collapsible` **Tabell- og
  begrepsliste:** eta² (η²), epsilon²/omega² (nevnes), grensene 0,01/0,06/0,14, statistisk vs.
  praktisk signifikans.
- **Tabellkontrakt (flashcard-kilde):** **eta² (η²)** (andel forklart varians i ANOVA);
  **grensene** η² = 0,01 (liten) / 0,06 (medium) / 0,14 (stor); **epsilon²/omega²** (alternative
  effektmål, nevnes); **statistisk signifikans ≠ praktisk betydning** (signifikant F + lav η² =
  liten praktisk forskjell); Cohens r-grenser for korrelasjon som parallell. Forankres i Field.
- **Tolkningsprosedyre:** les η² fra effekt-tabellen → plasser mot grensene → oversett til
  praktisk mening → konkluder i kontekst («signifikant forskjell mellom SØS-gruppene i fysisk
  form, med stor effektstørrelse»).
- **Typiske feil:** #4 (stoppe ved signifikans, glemme η²), #10 (rapportere η² uten praktisk
  tolkning).
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 9:** 4 prøver (id `nih-met402-9-prove`, chapterNumber `9.P`): (1) *ANOVA-
tabellen* — ANO, les F/Sig. + konkluder om H0; (2) *Repeterte målinger* — ANO over tidspunkt;
(3) *Effektstørrelse* — ANO, tolk η² mot grensene + praktisk betydning (varierte fasiter); (4)
*Full ANOVA-tolkning* — ANO med signifikans + effektstørrelse + konklusjon i kontekst på
eksamensnivå. «4 prøver à ~20–30 min — én per økt.»

### Del 10 — Multippel regresjon *(prioritet: PERFEKT-nær — 2/6 totalt, men 2 av 3 ordinære → nesten sikker H2026)*

#### Kapittel 10.1: Tolk regresjonsutskrift — R², ANOVA-del og koeffisienter
**id:** `nih-met402-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-met402-9-1`

- **Kapitteltype:** SPSS-tolkningskapittel (perfekt-nær).
- **Description:** Å tolke en multippel regresjonsutskrift: **Model Summary** (R Square som
  forklart varians, adjusted R², R), **ANOVA-delen** (F-testen mot nullmodellen), og
  **Coefficients** (unstandardisert B, t, Sig. per prediktor) — hvilke prediktorer som er
  signifikante og hva modellen betyr.
- **Eksamensbelegg:** Sjanger REG (2/6 totalt, men 2 av 3 ordinære → nesten sikker på ordinær).
  R²-dybde er A-markør (sensorkrav 8, #9). Prioritet: perfekt-nær.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2, 9.1 (F-test), 7.1. `collapsible` **Tabell- og
  begrepsliste:** *Model Summary* (*R*, *R Square*, *Adjusted R Square*), *ANOVA* (*F*, *Sig.*),
  *Coefficients* (*B*, *Std. Error*, *Beta*, *t*, *Sig.*).
- **Tabellkontrakt (flashcard-kilde):** **R Square** (andel forklart varians i avhengig variabel,
  0–1 — IKKE «fem prosent bedre», men forklart varians via nullmodell-sammenligning);
  **adjusted R²** (justert for antall prediktorer); **R** (multippel korrelasjon); **F-testen**
  (om modellen er signifikant bedre enn nullmodellen — konseptuelt sum-of-squares, ingen regning);
  **unstandardisert B** (endring i avhengig variabel per enhets endring i uavhengig); **t** og
  **Sig.** per koeffisient; **standardisert Beta** (nevnes); at man kan sette opp
  regresjonslikningen og predikere en verdi (A-markør). Forankres i Field.
- **Tolkningsprosedyre:** egnet spørsmål (flere prediktorers effekt på én kontinuerlig utfall) →
  forutsetning (kontinuerlig avhengig) → R²/adjusted R² (forklart varians) → F (modellen
  signifikant?) → Coefficients (hvilke B signifikante, retning) → konkluder i kontekst.
- **Typiske feil:** #9 (overfladisk R²), #4 (ikke skille signifikante fra ikke-signifikante
  prediktorer), #10 (lese B uten tolkning).
- **Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 10.2: Regresjonsdrill — likning, prediksjon og A-markørene
**id:** `nih-met402-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-10-1`

- **Kapitteltype:** drillkapittel (perfekt-nær; regnefags-drill-DNA, verbal fasit).
- **Description:** Drill på de resirkulerte regresjonsgrepene som skiller A fra C: sette opp
  regresjonslikningen fra Coefficients-tabellen, predikere en verdi i ord, gå bak R² (nullmodell/
  adjusted), og nevne interaksjons-/samspilleffekter — alt på eksamensnivå.
- **Eksamensbelegg:** REG (2 av 3 ordinære). A-markørene: regresjonslikning + prediksjon + R²-
  dybde (sensorkrav 8). Interaksjonseffekter nivå 3. Prioritet: perfekt-nær.
- **Forkunnskaper/kryssbok:** kap. 10.1. `collapsible` **Tabell- og begrepsliste:**
  regresjonslikning (i ord), prediksjon, adjusted R², interaksjons-/produktledd.
- **Tabellkontrakt (flashcard-kilde):** **regresjonslikningen** (utfall = konstant + B₁·prediktor₁
  + B₂·prediktor₂ …, satt opp fra Coefficients — ingen håndregning, kun oppsett/tolkning);
  **prediksjon** (sett inn verdier → forventet utfall, forklart i ord); **interaksjons-/
  samspilleffekt** (en prediktors effekt er betinget av en annen; lages som produktledd);
  hvorfor adjusted R² < R² når man legger til svake prediktorer. Forankres i Field.
- **Løsningsoppskrift:** (1) les R²/adjusted; (2) skriv likningen fra B-ene; (3) tolk hver
  signifikant B i kontekst; (4) predikér en verdi; (5) konkluder («ingen kjønnsforskjell i
  fysisk form, men treningsglede og utdanning gir signifikant økt fysisk form»-typen).
- **Typiske feil:** #9 (overfladisk R²), #10 (likning uten tolkning), #4 (overse ikke-
  signifikante prediktorer).
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 10:** 4 prøver (id `nih-met402-10-prove`, chapterNumber `10.P`): (1) *Model
Summary* — REG, tolk R²/adjusted (gå bak «fem prosent»); (2) *Coefficients* — REG, hvilke
prediktorer er signifikante + retning (varierte fasiter); (3) *Likning + prediksjon* — REG, sett
opp likningen og predikér; (4) *Full regresjonstolkning* — REG på eksamensnivå med konklusjon i
kontekst. «4 prøver à ~25–35 min — én per økt.»

### Del 11 — Krysstabell, utvalgsstørrelse og feilkilder *(prioritet: KJENNE — nye/lavfrekvente, men sannsynlige vinklinger)*

#### Kapittel 11.1: Tolk krysstabell og kjikvadrat
**id:** `nih-met402-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-6-2`

- **Kapitteltype:** SPSS-tolkningskapittel (kjenne — ny H2025).
- **Description:** Å tolke en krysstabell med kjikvadrattest: at den egner seg for sammenheng
  mellom to **kategoriske** variabler, sjekke forutsetningen om minimum forventet cellefrekvens,
  og lese kjikvadratverdi og signifikans i lys av en egenformulert problemstilling (H0 og H1).
- **Eksamensbelegg:** Sjanger KJI (1/6, ny H2025). Cellefrekvens-forutsetningen er A-markør
  (sensorkrav 8, #6). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.2, 2.1 (kategorisk), 1.3 (H0/H1). `collapsible`
  **Tabell- og begrepsliste:** *Crosstabulation*, *Chi-Square Tests*, *Pearson Chi-Square*,
  *Asymp. Sig.*, forventet cellefrekvens.
- **Tabellkontrakt (flashcard-kilde):** **krysstabell** (fordeling av to kategoriske variabler);
  **kjikvadrat (kji², χ²)** (test for sammenheng mellom kategoriske variabler); **forutsetning**
  om **minimum forventet cellefrekvens** (brytes den → svekket tolkning); **N og missing**;
  kjikvadratverdi og **Asymp. Sig.** (< 0,05 → sammenheng). Forankres i Field.
- **Tolkningsprosedyre:** egnet spørsmål (to kategoriske) → forutsetning (kategoriske +
  cellefrekvens) → les N/missing → χ² og Sig. → beskriv fordelingen → konkluder i kontekst med
  H0/H1.
- **Typiske feil:** #6 (bruke kjikvadrat på kontinuerlige data / overse cellefrekvens), #10.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 11.2: Utvalgsstørrelse — hvor mange respondenter og type I/II
**id:** `nih-met402-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-4-2`

- **Kapitteltype:** begreps-/essaykapittel (kjenne — fast konte-klassiker).
- **Description:** Hva som bestemmer hvor mange respondenter en studie trenger — totalpopulasjon,
  design, seleksjon, ønsket representativitet, frafall og **type I-/type II-feil (styrke)** — og
  konsekvensene av valgene for studiens kvalitet.
- **Eksamensbelegg:** Sjanger STØ (2/6, fast konte-klassiker med nær identisk ordlyd to år på
  rad). Type I/II tilbakevendende (3/6). Prioritet: kjenne (fast konte).
- **Forkunnskaper/kryssbok:** kap. 4.2, 4.3, 6.1 (type I/II). `collapsible` **Begrepsliste:**
  utvalgsstørrelse, styrke, type I-feil, type II-feil, frafall.
- **Begrepskontrakt (flashcard-kilde):** faktorene bak **utvalgsstørrelse** (totalpopulasjon,
  design, seleksjon, ønsket presisjon/representativitet, forventet frafall, styrke); **type
  I-feil** (forkaste sann H0 — «falsk positiv»); **type II-feil** (beholde falsk H0 — «falsk
  negativ»); **styrke** (sjansen for å oppdage en reell effekt; øker med utvalgsstørrelse).
  Forankres i Field/Ringdal.
- **Drøftingsakser:** presisjon vs. ressurser; hvor stort er «stort nok»; hvorfor lite utvalg gir
  lav styrke (type II-risiko).
- **Case-forslag:** en spørreundersøkelse blant norske langrennsjunior — drøft hvor mange som må
  kontaktes gitt forventet 30 % frafall og ønsket styrke.
- **Typiske feil:** #7 (ignorere frafall i utvalgsberegningen), #4 (koble ikke styrke til type
  II).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 11.3: Feilkilder gjennom hele forskningsprosessen
**id:** `nih-met402-11-3` · **number:** 11.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-met402-1-1`

- **Kapitteltype:** begreps-/essaykapittel (kjenne — ny H2025).
- **Description:** Å knytte konkrete feilkilder til hvert av de seks stegene i forskningsprosessen
  og drøfte konsekvensene for om funnene kan stoles på og for ytre validitet/generaliserbarhet.
- **Eksamensbelegg:** Sjanger FEI (1/6, ny H2025, sannsynlig gjenganger). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.1 (de seks stegene), 3.3, 4.2. `collapsible` **Begrepsliste:**
  de seks stegene med typiske feilkilder + konsekvens.
- **Begrepskontrakt (flashcard-kilde):** **feilkilder per steg** — uklar/uoperasjonaliserbar
  problemstilling (steg 2); design som ikke passer spørsmålet, f.eks. tverrsnitt der longitudinelt
  trengs (steg 3); seleksjon/frafall/svake måleinstrumenter/modning (steg 4); screening-feil, feil
  analysevalg, type I/II, feiltolkning (steg 5); over-/feiltolkning i rapportering (steg 6);
  **konsekvens** for troverdighet og ytre validitet. Forankres i Ringdal.
- **Drøftingsakser:** hvilke feilkilder som er alvorligst; hvordan feil forplanter seg nedover
  prosessen (feil steg 2 ødelegger alt etterpå).
- **Case-forslag:** en publisert idrettsstudie med skjevt utvalg og tverrsnittsdesign brukt til å
  spore feilkilder gjennom alle seks stegene.
- **Typiske feil:** #2 (koble ikke feilkilden til riktig steg), #10 (ramse opp feil uten
  konsekvens).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 11:** 4 prøver (id `nih-met402-11-prove`, chapterNumber `11.P`): (1)
*Krysstabell* — KJI, forutsetning + tolkning + H0/H1; (2) *Utvalgsstørrelse* — STØ, faktorene +
type I/II; (3) *Feilkilder* — FEI, koble feil til steg + konsekvens (finn fellen); (4) *Samlet
bredde* — blandet KJI/STØ/FEI på eksamensnivå. «4 prøver à ~20–30 min — én per økt.»

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangeren STU — studiedesign-essayet fra ende til annen
**id:** `nih-met402-12-1` · **number:** 12.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-5-2`

- **Kapitteltype:** sjangerdrillkapittel (drøftings-DNA).
- **Description:** Full drill på bærebjelke nr. 1: å skrive et sammenhengende studiedesign-essay
  med rød tråd gjennom alle sju leddene, på tid, med den binære selvrettingsrubrikken.
- **Eksamensbelegg:** Sjanger STU (5/6). Kompleksitet + indre sammenheng premieres (sensorkrav 1,
  7). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 og hele Del 1–5. `collapsible` **Håndverksliste:** de sju
  leddene + selvrettingsrubrikken (fra 0.2).
- **Oppskrift:** trinn-for-trinn disponering av STU med tidsbudsjett for 4-timers-eksamenen (hvor
  mange minutter per ledd i en 25 %-oppgave); den binære selvrettingsrubrikken referert i hver
  prøvefasit.
- **Innhold:** gjennomskrevet A-eksempel med margkommentarer om hva som gir uttelling hvor (rød
  tråd, målenivå, effekt av å begrunne design); deretter 3–5 nyskrevne STU-oppgaver med
  momentliste-fasit + rubrikk.
- **Typiske feil:** #1, #2, #11 (svak rød tråd; utelate refleksjonen).
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 12.2: Sjangeren SPSS-tolkning — den faste kjeden på alle fem analysene
**id:** `nih-met402-12-2` · **number:** 12.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-met402-10-1`

- **Kapitteltype:** sjangerdrillkapittel (regnefags-drill-DNA, verbal fasit).
- **Description:** Full drill på bærebjelke nr. 2: å anvende den faste tolkningskjeden på alle
  fem utskriftstypene (korrelasjon, t-test, ANOVA, regresjon, krysstabell), med vekt på
  effektstørrelse og «korrelasjon ≠ kausalitet».
- **Eksamensbelegg:** KOR/TTE/ANO/REG/KJI. Fast tolkningsoppskrift (sensorkrav 3–6). Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1 og hele Del 6–11. `collapsible` **Tabell- og begrepsliste:**
  én oppsummeringstabell «analyse → forutsetning → nøkkelceller → effektmål» for alle fem
  (bokas samlede oppslagskort for tolkningssøylen).
- **Oppskrift:** den faste kjeden (6 ledd) anvendt uniformt; en beslutningsguide «hvilken analyse
  passer denne problemstillingen/dette målenivået?».
- **Innhold:** fem korte gjennomtolkede utskrifter (én per analyse, nyskrevne tabeller) med
  margnotater; deretter 4–6 nyskrevne tolkningsoppgaver med verbal fasit + rubrikk.
- **Typiske feil:** #4, #5, #6, #10 samlet.
- **Kvote:** 14 quiz / 12 flashcards.

#### Kapittel 12.3: Modellbesvarelser — studiedesign-essay (A / B / C, ærlig merket)
**id:** `nih-met402-12-3` · **number:** 12.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-met402-12-1`

- **Kapitteltype:** modellbesvarelseskapittel (drøftings-DNA).
- **Description:** Én nyskrevet STU-oppgave besvart på tre karakternivåer, ærlig merket, med
  margnotater om hva som skiller nivåene — og en autentisk B-/midtnivå-besvarelse (README).
- **Eksamensbelegg:** STU. Karakter-realisme (README): C er god og vanlig; «Gapet til A» som
  oppgraderingsmeny. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 12.1. `collapsible` per besvarelse.
- **Innhold:** nyskrevet STU-oppgave; `collapsible` **A-besvarelse** (full tekst, margnotater
  «her: rød tråd», «her: effektstørrelse/refleksjon som løfter til A», med pausepunkt-markører);
  `collapsible` **autentisk B-/midtnivå** (ekte studentspråk, litt rotete men god, notater om hva
  som er BRA NOK og de 2–3 grepene mot A); `collapsible` **kommentert C** (korrekt men flat —
  elementer ramset opp uten sammenheng, tynn refleksjon; VÆR en ekte C); `tip` **Sensorblikket**
  (momentliste + vektlegging). Minst én besvarelse konkluderer skarpt og er likevel toppnivå
  (README A-konklusjonsvariasjon). Meta-fasit forbudt (skriv drøftelsen faktisk ut).
- **Typiske feil:** metafeilene fra STU samlet (#1, #2, #11).
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 12.4: Øvingseksamener — komplette 4 × 25 %-sett
**id:** `nih-met402-12-4` · **number:** 12.4 · **estimatedMinutes:** 60 · **prerequisites:** `nih-met402-12-2`

- **Kapitteltype:** øvingseksamenskapittel.
- **Description:** To komplette nyskrevne øvingseksamener i H2024–H2025-regimet (fire likeverdige
  oppgaver à 25 %, typisk 2 essay + 2 SPSS-tolkning), med løsningsforslag skrevet slik sensor vil
  se dem, pluss en kald bank uten hint.
- **Eksamensbelegg:** Speiler temafordelingen i §2 (én studiedesign/utvalg-essay + én begreps-/
  kausalitetsessay + regresjon nesten sikker + én av ANOVA/korrelasjon/t-test/krysstabell).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 12.1–12.3. `collapsible` per oppgave med løsningsforslag.
- **Innhold:** to øvingssett à fire oppgaver med vekting og varighet (4 t); løsningsforslag i
  `collapsible` per oppgave (A-nivå, `tip`-notat om delpoeng/vekting); **kald bank** (8–10
  oppgaver med uvante vinklinger/kombinasjoner, UTEN hint, kun momentliste-fasit — README).
  Deklareres «kan trygt deles — fordel de to settene på flere kvelder, aldri stablet i siste uke».
- **Typiske feil:** helhets-/tidsstyringsfeil (bruke for lang tid på essayet, skusle bort
  tolknings-25-prosentene); alle #-kodene samlet i fasitkommentarene.
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 12:** 4 prøver (id `nih-met402-12-prove`, chapterNumber `12.P`): (1)
*STU-generalprøve* — full studiedesign-essay på tid; (2) *SPSS-generalprøve* — fem tolkninger
med den faste kjeden; (3) *Blandet generalprøve* — 4 × 25 %-sett; (4) *Kald bank* (uten hint,
momentliste-fasit — README). «4 prøver à ~45–60 min — fordel på flere kvelder, aldri stablet i
siste uke.»

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 22 | 24 | 0 (dekkes av modellbesvarelser/øvingseksamener i Del 12) |
| 1 | 3 | 58 | 58 | 4 |
| 2 | 3 | 60 | 64 | 4 |
| 3 | 3 | 62 | 62 | 4 |
| 4 | 3 | 60 | 62 | 4 |
| 5 | 2 | 40 | 40 | 4 |
| 6 | 2 | 36 | 38 | 4 |
| 7 | 1 | 26 | 26 | 4 |
| 8 | 1 | 26 | 26 | 4 |
| 9 | 2 | 48 | 48 | 4 |
| 10 | 2 | 52 | 52 | 4 |
| 11 | 3 | 54 | 54 | 4 |
| 12 | 4 | 52 | 48 | 4 |
| **Sum** | **31** | **596 ✓ (≥500)** | **602 ✓ (≥500)** | **44** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 10+12 = **22** / 10+14 = **24**
- Del 1: 18+20+20 = **58** / 18+20+20 = **58**
- Del 2: 22+20+18 = **60** / 24+22+18 = **64**
- Del 3: 22+20+20 = **62** / 22+20+20 = **62**
- Del 4: 22+20+18 = **60** / 24+20+18 = **62**
- Del 5: 22+18 = **40** / 22+18 = **40**
- Del 6: 20+16 = **36** / 22+16 = **38**
- Del 7: **26** / **26**
- Del 8: **26** / **26**
- Del 9: 26+22 = **48** / 26+22 = **48**
- Del 10: 28+24 = **52** / 28+24 = **52**
- Del 11: 18+18+18 = **54** / 18+18+18 = **54**
- Del 12: 14+14+12+12 = **52** / 12+12+12+12 = **48**
- **Totalt: 596 quiz / 602 flashcards.** (begge over ≥500-gulvet)

**Kvotebegrunnelse (jf. audit-lærdommen: ≥500 er GULV, ikke mål).** MET402 er et begreps- og
tolkningsrikt masteremne uten hjelpemidler, så både quiz og flashcards trekkes opp av at presise
begreper, analyse-forutsetninger, tabellceller og effektgrenser MÅ sitte utenat. (1) **Quiz** —
nabobegrep-distraktorer over hele apparatet (korrelasjon/kausalitet, uavhengig/parvis t-test,
tverrsnitt/longitudinelt, sannsynlighets-/ikke-sannsynlighetsutvalg, MCAR/MAR/MNAR, R²/adjusted
R², signifikans/effektstørrelse, nominal/ordinal/intervall/forhold) + «hvilken analyse passer
denne problemstillingen/dette målenivået?»- og «hva mangler i denne tolkningen?»-lesetrening,
~18–28/temakapittel. (2) **Flashcards** — begrep↔definisjon↔pensumforankring-kort, analyse↔
forutsetning-kort, tabellcelle↔betydning-kort og effektgrense↔praktisk-mening-kort til pugg
utenat, med marginalt høyere tetthet enn quiz i de tabellrike SPSS-kapitlene og variabel-/utvalgs-
kapitlene. De 23 fagkapitlene (Del 1–11) bærer tettheten, så summene ligger godt over gulvet
(596/602) uten kunstig oppfylling; meta-, sjanger- og modellbesvarelseskapitlene (Del 0 + Del 12)
har bevisst lavere kvote (de trener sjanger og sammenheng, ikke fakta). Prøvene ligger på fire per
temadel (Del 1–11 = 40 prøver) + fire eksamenstreningsprøver i Del 12 (**44 prøver totalt**); Del
0 dekkes av Del 12s modellbesvarelser/øvingseksamener.

**Flashcard-profil:** definisjons-, forankrings- og tabellcelle-kort til pugg utenat — de fire
målenivåene ↔ lovlig analyse, sannsynlighetsutvalgets fire typer, kausalitetsbetingelsene,
MCAR/MAR/MNAR, Cronbachs alfa + terskel, den faste tolkningskjeden (6 ledd), Pearsons r + Cohens
grenser, Levene → riktig rad, F/Sig. i ANOVA, η² 0,01/0,06/0,14, R Square/adjusted R²/B i
regresjon, kjikvadrat + cellefrekvens, type I/II + styrke, de seks prosesstegene + feilkilder, og
«feil-vaksine»-kort (kausal tolkning av korrelasjon = feil; signifikans uten effektstørrelse =
ufullstendig; feil Levene-rad = feil konklusjon; ramse opp uten konklusjon i kontekst = C).
**Quiz-profil:** MC med nabobegrep-distraktorer + «hvilken analyse/design biter på denne
problemstillingen?» + «hva mangler i denne tolkningen for A?»-lesetrening; distraktorer straffer
aldri grundig lesing (README) — nær-sanne distraktorer får forklart fasit-kommentar; statiske
flervalg i prøve-collapsibles har stokkede fasit-bokstaver.

---

## 4. Prøver

Prøvene ligger som egne prøve-kapitler per temadel (chapterNumber `N.P`), fire per temadel (Del
1–11) + fire eksamenstreningsprøver (Del 12) = **44 prøver**. Hver prøve deklareres «kan trygt
deles — én prøve per økt», med tidsanslag. Flervalg i statiske prøve-collapsibles har **stokkede
fasit-bokstaver** (README — aldri «alle a»); riktig/galt- og «finn fellen»-lister varierer fasiten.
Fasitene er momentlister/sjekklister (ikke fritekst-modellbesvarelse — de bor i Del 12), med binær
selvrettingsrubrikk der drøfting/tolkning trenes. Hver prøvefasit avsluttes med en kompakt
avkryssbar selvdiagnose (☐) (README: «står forutsetningen i svaret ditt? tolket du effektstørrelse?
konkluderte du i kontekst?»).

**Prøve-kvote Del 1:** 4 prøver (`nih-met402-1-prove`): (1) *Forskningsprosessen* — de seks
stegene; (2) *Problemstilling* — PRH presis vs. vag; (3) *Hypoteser* — PRH med retning; (4)
*Samlet* — problemstilling + hypoteser på eksamensnivå.

**Prøve-kvote Del 2:** 4 prøver (`nih-met402-2-prove`): (1) *Målenivå* — VAR + lovlig analyse; (2)
*Latente variabler* — indikator/subskala/Likert; (3) *Cronbachs alfa* — tolk α; (4) *Samlet
variabelbeskrivelse* — VAR på eksamensnivå.

**Prøve-kvote Del 3:** 4 prøver (`nih-met402-3-prove`): (1) *Design* — DES kjennetegn/styrker/
svakheter; (2) *Kausalitet* — betingelser + «korrelasjon ≠ årsak» (vippe-case); (3) *Reliabilitet/
validitet* — begrep + refleksjon; (4) *Samlet design-essay* — DES på eksamensnivå.

**Prøve-kvote Del 4:** 4 prøver (`nih-met402-4-prove`): (1) *Sannsynlighetsutvalg* — UTV fire
typer; (2) *Representativitet/vekting* — feilkilder + vekting; (3) *Frafall* — MCAR/MAR/MNAR; (4)
*Samlet utvalgsessay* — UTV på eksamensnivå.

**Prøve-kvote Del 5:** 4 prøver (`nih-met402-5-prove`): (1) *Screening-stegene* — DAT rekkefølge +
begrunnelse; (2) *Missing/uteliggere* — DAT behandling; (3) *Deskriptiv/normalitet* — les av +
forutsetning; (4) *Samlet datahåndtering* — DAT på eksamensnivå.

**Prøve-kvote Del 6:** 4 prøver (`nih-met402-6-prove`): (1) *Tolkningsoppskriften* — de seks
trinnene; (2) *Signifikans* — p/stjerner + type I/II; (3) *Deskriptiv utskrift* — N/Mean/SD +
kontinuerlig; (4) *Samlet inngang* — deskriptiv + forutsetning.

**Prøve-kvote Del 7:** 4 prøver (`nih-met402-7-prove`): (1) *Les matrisen* — KOR retning +
signifikans; (2) *Styrke* — KOR mot Cohen; (3) *Ikke-kausalitet* — KOR; (4) *Full
korrelasjonstolkning* — KOR på eksamensnivå.

**Prøve-kvote Del 8:** 4 prøver (`nih-met402-8-prove`): (1) *Uavhengig vs. parvis* — TTE; (2)
*Levene-raden* — TTE velg rad; (3) *Full t-test-tolkning* — TTE; (4) *t-test + effektstørrelse* —
TTE på eksamensnivå.

**Prøve-kvote Del 9:** 4 prøver (`nih-met402-9-prove`): (1) *ANOVA-tabellen* — ANO F/Sig.; (2)
*Repeterte målinger* — ANO over tid; (3) *Effektstørrelse* — ANO η² mot grensene; (4) *Full
ANOVA-tolkning* — ANO på eksamensnivå.

**Prøve-kvote Del 10:** 4 prøver (`nih-met402-10-prove`): (1) *Model Summary* — REG R²/adjusted;
(2) *Coefficients* — REG signifikante prediktorer; (3) *Likning + prediksjon* — REG; (4) *Full
regresjonstolkning* — REG på eksamensnivå.

**Prøve-kvote Del 11:** 4 prøver (`nih-met402-11-prove`): (1) *Krysstabell* — KJI forutsetning +
tolkning; (2) *Utvalgsstørrelse* — STØ + type I/II; (3) *Feilkilder* — FEI koble til steg; (4)
*Samlet bredde* — blandet KJI/STØ/FEI.

**Prøve-kvote Del 12:** 4 prøver (`nih-met402-12-prove`): (1) *STU-generalprøve*; (2)
*SPSS-generalprøve*; (3) *Blandet generalprøve* 4 × 25 %; (4) *Kald bank* (uten hint).

**Sum prøver: 44** (4 per temadel Del 1–11 = 40, + 4 i Del 12).

---

## 5. Kildeforbehold og verifiseringsliste (fase 6)

- **Emnestatus AKTIV** verifisert mot NIHs emneside (2026-07-11: MET402 Kvantitativ metode, 10
  sp, master, tilbudt H2025, obligatorisk i Master i idrett og samfunnsvitenskap; 4 t skoleeksamen
  uten hjelpemidler, A–F). Status kan endres — behold `(verifiser)` ved bygging hvis lang tid har
  gått.
- **Pensum** (Field, *Discovering Statistics Using IBM SPSS Statistics*, kap. 1–18; Ringdal,
  *Enhet og mangfold*, utvalgte kap.) er utledet av emneplan vedlagt sensorveiledningene —
  konkrete utgave-/kapittelnumre er `(verifiser)` mot gjeldende pensumliste. Alle
  pensumforankringer (hvilken forfatter «eier» hvilket begrep) kvalitetssikres mot primærkilden;
  INGEN oppdiktede referanser.
- **Effektstørrelse- og styrkegrenser** (η² 0,01/0,06/0,14; Cohens r ≈ 0,1/0,3/0,5; Cronbachs α ≥
  0,70) er alminnelige konvensjoner, men presenteres som konvensjoner `(verifiser mot pensum)` —
  de kan avvike i Fields utgave.
- **Alle SPSS-tall og -tabeller er eksplisitt FIKTIVE** nyskrevne illustrasjoner i idrettskontekst
  — aldri gjengivelse av ekte utskrifter fra arkivet. Tabellayout etterligner SPSS' kolonnenavn
  (alminnelig programvarefunksjonalitet, ikke opphavsrettslig beskyttet tekst).
- **nih-met200-krysslenke:** legg til markdown-lenke til met200s design-/utvalgs-/validitets-
  kapitler KUN hvis nih-met200-boka finnes ved bygging; ellers behold prosaomtale (boka bygges
  parallelt av en annen agent).
- **Ordinær-/konte-syklusen** (ordinær november, konte februar) og regimeskiftet H2024 (3 → 4
  oppgaver) er dokumentert i alle seks sett; prognosen for H2026 hviler på det nyeste regimet.

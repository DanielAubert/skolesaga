# Bokskjelett: SPM245 Økonomi (Norges idrettshøgskole, NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE i `content[]` rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet nederst.
> Én løkke per metode/formel: formel (`definition`/`theorem` + evt. `text`-utledning) →
> gjennomregnet eksempel på nettopp den metoden (`example`) → øvingsoppgave(r) på samme
> metode (`exercise`). Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten tidligere ved
> behov). Autoritativ kilde: README «Leserkrav» + `DNA-regnefag.md`. Unntak:
> øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin egen arketype (komplett
> sett først, løsninger i collapsibles). Kvotene og innholdskontraktene i dette
> skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIH SPM245-arkivet: **15 filer over tre studieår** 2023/24,
> 2024/25, 2025/26 — oppgavesett **og** sensorveiledninger for ordinær skoleeksamen,
> hjemmeeksamen og utsatt/konte, begge format). Alle oppgaver, tallgrunnlag, case og
> «modellbesvarelser» i boka skal være NYSKREVNE (se §6) — analysen inneholder ingen
> ordrette gjengivelser, og boka skal heller ikke. Pensumlitteratur (Hoff & Helbæk,
> «Bedriftens økonomi») refereres (forfatter/verk/begrep), aldri siteres i lengde.
> Sensorveiledningene i SPM-serien er **usedvanlig rike** (fullstendige løsningsfasiter
> med utregninger, kontoføring og riktige flervalgssvar) — de brukes aktivt i
> «Eksamensbelegg» og «Sensorkrav». **Kildeforbehold:** veiledningene er rene
> løsningsfasiter UTEN A–F-nivåprosa; karakterlogikken (§ sensorkrav) er derfor
> *utledet* av oppgavevekting og standard bedriftsøkonomi-praksis og merkes
> `(verifiser)` der den er sluttet indirekte.

> **Statusverifisering (nih.no, 2026-07-11):** SPM245 Økonomi er **AKTIVT** ved NIH,
> **10 studiepoeng** (bekreftet mot emnesiden — analysens antatte 7,5 sp er dermed
> korrigert til 10 sp). Studieprogram: **Bachelor i Sport Management**. Vurdering
> bekreftet: **(1) individuell hjemmeeksamen** vurdert *bestått / ikke bestått* og
> **(2) individuell skriftlig skoleeksamen, 4 timer**, vurdert med **bokstavkarakter
> A–F**; hjelpemiddel på skoleeksamen = **kalkulator (deles ut i eksamenslokalet)**.
> NIH bruker ikke-gjettbare slug-URL-er; emnesiden ble funnet via søk og bekreftet
> fersk (sist oppdatert 2026-07-11). Byggefase-forbehold: semesterspesifikke
> vurderingsdetaljer kan variere — verifiser mot gjeldende emneside før boka meldes
> helt ferdig.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-spm245` |
| Tittel | **SPM245 Økonomi (NIH) — eksamensrettet lærebok** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «SPM245 Økonomi». |
| Arketype | **Regnefag (`DNA-regnefag.md`) — bedriftsøkonomisk prosedyre-/regnedrill.** Faget er grunnleggende bedriftsøkonomi/regnskap: entydige regne- og kontoføringsoppgaver med fasit, resirkulert med nye tall år etter år → boka bygges som målrettet drill mot nettopp disse mønstrene, med drillkapittel for hver av de fire bærende søylene. Se §2 «Arketypetilpasning» for de to dokumenterte avvikene (én hjemmeeksamen-modul med ikke-regnetekniske ferdigheter, og et lag med rene teori-deloppgaver). |
| Antall kapitler | **28** (Del 0: 2 · temadeler 1–10: 22 · eksamenstrening Del 11: 4) |
| Estimert totaltid | **~1 620 min ≈ 27 timer** (per kapittel under) |
| Quiz totalt | **502** (krav ≥500) |
| Flashcards totalt | **520** (krav ≥500) |

**Pitch (ett avsnitt):** SPM245-eksamen er blant de mest forutsigbare regnefagene i
arkivet. Faget er **grunnleggende bedriftsøkonomi** — idrettskonteksten er kulisse
(«idrettsklubben» er bare et bedriftsnavn i lønns- og likviditetsoppgaver; det testes
ingen idretts-*spesifikk* økonomi). To parallelle format samme studieår: en **4-timers
lukket skoleeksamen** (kun kalkulator, karakter A–F) og en **ukelang åpen hjemmeeksamen**
(KI tillatt med APA-7-deklarasjon, bestått/ikke bestått). Det tekniske innholdet er
identisk; hjemmeeksamen legger bare til to ikke-regnetekniske ferdigheter (avisartikkel-
tolkning mot pensum + korrekt KI-/APA-deklarasjon). **Fire søyler bærer faget** og dekker
60–75 % av vektingen i hvert sett: **(1) CVP/dekningsbidrag** (i praktisk talt hvert sett,
ofte med kandidatnummer-styrte tallalternativer), **(2) tilleggskalkulasjon/selvkost-
metoden**, **(3) lønns- og regnskapsføring med full kontoføring** (den sikreste
enkeltoppgaven — kommer *alltid*), og **(4) regnskapsanalyse med nøkkeltall** (rentabilitet,
likviditet, soliditet). Rundt disse ligger mikroøkonomi (markedsformer + monopolistens
tilpasning), finansmatematikk (annuitetslån, nåverdi), likviditetsbudsjett/balanselikning,
produktvalg, selskapsformer og avskrivning. Boka er bygd baklengs fra det sensor faktisk
premierer: **riktig formeloppsett → mekanisk korrekt regning → sporbar oppstilling
(kontoføring med kontonummer, nedbetalingsplan, femlinjers likviditetsbudsjett) → eksplisitt
konklusjonssetning** («Ja, endringen lønner seg — resultatet øker med …» / «Nei, bedriften
er verken likvid eller solid, siden likviditetsgrad I = 0,69 < 2»). En egen
feilvaksine-tråd driller de tolv fellene sensorfasitene avslører (særlig «glemt
arbeidsgiveravgift *av* feriepenger», «likviditetsgrad I vs. II», «avskrivning i
likviditetsbudsjettet» og «mangler konklusjon»).

**Kalibreringsregler (ufravikelige):**
1. **Konklusjonssetning er obligatorisk** etter hver beregning/vurdering. Å regne
   riktig uten å svare ja/nei på «lønner det seg?» er et dokumentert poengtap (§5, F5).
2. **Sporbar oppstilling demper enkeltfeil.** Kontoføring med kontonummer,
   nedbetalingsplaner og femlinjers likviditetsbudsjett vises alltid slik fasitene gjør
   — delvis uttelling gis der utregningen er synlig.
3. **Metoden, ikke fasitsvaret.** Kandidatnummer-alternativene gjør pugging av tallsvar
   umulig; boka driller *prosedyren* på varierende tallsett (nyskrevne tall i hver oppgave).
4. **Mva. = 25 %** der relevant; **arbeidsgiveravgift 14,1 %**, **feriepenger 12 %** — og
   **arbeidsgiveravgift *av* feriepenger** er det leddet som oftest glemmes.
5. **Idrettsinnpakning uten idretts-teori.** Bruk idrettslag/-klubber som gjennomgangs-
   «bedrifter» (slik eksamen selv gjør), aldri idretts-spesifikk økonomi som ikke testes.
6. **Kildeforbehold på karakterlogikk.** Veiledningene mangler A–F-prosa; nivåbeskrivelser
   (§ sensorkrav) er utledet av vekting og fagpraksis og merkes `(verifiser)`.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): kostnadsbegreper før CVP;
CVP før produktvalg; kontoføringsgrunnlaget før lønnsføring; balanse/resultat før
regnskapsanalyse. Frekvensen styrer *omfanget*, ikke rekkefølgen: de fire bærende søylene
(CVP, selvkost, lønnsføring, regnskapsanalyse) får hver sin del med **teori- OG
drillkapittel** og høyest kvote; lavfrekvent/roterende stoff (elastisitet, avskrivning,
kostnadsoptimum-tabeller) samles kompakt.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og regnehåndverk | 2 | perfekt (meta) | Formen (to parallelle format, 4-timers skoleeksamen med kun kalkulator vs. ukelang hjemmeeksamen med KI/APA, kandidatnummer-alternativer, karakter A–F vs. bestått), de fire søylene, temafrekvensene, sensorkravene og det gjennomgående oppstillings-/konklusjonshåndverket må etableres FØR fagstoffet. |
| 1 | Kostnadsbegreper og kostnadsteori | 2 | grunnlag/kunne (⭐⭐) | Kostnadsinndelinger (faste/variable, direkte/indirekte, betalbare/kalkulatoriske) + grensekostnad/-inntekt og kostnads-/vinningsoptimum via DEK-tabell — fundamentet for CVP, kalkulasjon og produktvalg. |
| 2 | Dekningsbidrag og CVP-analyse | 3 | **perfekt (⭐⭐⭐, 7–8/8)** | Den bærende søylen. DB/dekningsgrad/nullpunkt + sikkerhets-/risikomargin, scenario-ledd («lønner endringen seg?») med eksplisitt konklusjon, + drillkapittel (kandidatnummer-varianter). |
| 3 | Tilleggskalkulasjon og selvkostmetoden | 3 | **perfekt (⭐⭐⭐, 6/8)** | Tilleggssatser per avdeling → selvkost → pris eks. mva.; bidragsmetode/divisjonskalkyle som alternativer; minimumskost; + drillkapittel. |
| 4 | Lønns- og regnskapsføring | 3 | **perfekt (⭐⭐⭐, 8/8)** | Den sikreste enkeltoppgaven (i *alle* sett). Lønnsbilag med full kontoføring + lønnskostnad vs. utbetalt + terminfrister; bilagskontering med mva./kontantrabatt (hjemme); + drillkapittel. |
| 5 | Regnskapsanalyse med nøkkeltall | 3 | **perfekt (⭐⭐⭐, 5/8)** | Rentabilitet (TKR/EKR), likviditetsgrad I/II, soliditet, arbeidskapital — med kommentar, kravnivåer og TKR–EKR–gearing-sammenhengen; + drillkapittel. |
| 6 | Produktvalg og beslutninger | 1 | kunne (⭐⭐, 4/8) | DB per knapphetsenhet ved flaskehals; positiv DB ved ledig kapasitet; aksepter/avvis spesialordre. Bygger direkte på Del 2. |
| 7 | Mikroøkonomi: markedsformer og pris | 2 | kunne (⭐⭐⭐/⭐⭐, 5/8 + 3/8) | Markedsformer + monopolistens tilpasning (frihåndstegning, med SVG-figur); priselastisitet, krysselastisitet, prisdifferensiering. De tyngste rene teori-deloppgavene. |
| 8 | Finansmatematikk, likviditetsbudsjett og balanse | 2 | kunne (⭐⭐, 4/8 + 3/8 + 4/8) | Annuitetslån (nedbetalingsplan) + nåverdi via rentetabell; femlinjers likviditetsbudsjett (avskrivning holdes utenfor); balanselikningen (løs ut ukjent post). |
| 9 | Selskapsformer og avskrivning | 1 | kunne (⭐⭐, 5/8 + 3/8) | Enkeltpersonforetak/ANS/DA/AS (risiko + skatt som beslutningskriterium; styringsnivåer i AS >200 ansatte); avskrivningsmetoder (lineær, saldo, årssiffer, variabel). Rene teori-/regne-deloppgaver. |
| 10 | Hjemmeeksamen-modulen | 2 | kunne/kjenne (kun hjemme) | Flervalgstest i regnskapsteori (bank) + avisartikkel-sjangeren (beskriv → plasser i pensum → konkluder) og KI-/APA-7-deklarasjon. Lavvekt hver for seg, men sikre poeng — og lette å miste på formfeil. |
| 11 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter for de 12 oppgavetypene) + **3 komplette øvingseksamener** (skoleeksamen-mal med kandidatnummer-alternativ + hjemmeeksamen-mal), med fasit skrevet slik sensor vil se den. |

Rasjonale: de fire søylene i Del 2–5 får hver sin del med drillkapittel og høyest kvote
fordi de opptrer i praktisk talt hvert sett og bærer 60–75 % av vektingen; oppstillings-/
konklusjonshåndverket får en gjennomgående tråd fordi det premieres i seg selv på tvers av
temaene; mikroøkonomi og finansmatematikk får kompakte teori-/regnekapitler fordi de er
hyppige, men lavere vektet. **Nesten hele bredden testes hvert sett** — prioriteringen
styrer dybde og drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og regnehåndverk |
| 1 | Kostnadsbegreper og kostnadsteori |
| 2 | Dekningsbidrag og CVP-analyse |
| 3 | Tilleggskalkulasjon og selvkostmetoden |
| 4 | Lønns- og regnskapsføring |
| 5 | Regnskapsanalyse med nøkkeltall |
| 6 | Produktvalg og beslutninger |
| 7 | Mikroøkonomi: markedsformer og pris |
| 8 | Finansmatematikk, likviditetsbudsjett og balanse |
| 9 | Selskapsformer og avskrivning |
| 10 | Hjemmeeksamen-modulen |
| 11 | Eksamenstrening |

### Oppgavesjangre (fra analysen §3 — brukes i «Eksamensbelegg» under)

Sjanger-kortnavn (forklares ved første bruk i Del 0 og gjentas per kapittel):

**S1** CVP/dekningsbidrag-analyse (DB, dekningsgrad, nullpunkt/dekningspunkt i kr og
enheter, sikkerhets-/risikomargin, resultat; scenario-ledd med konklusjon) ·
**S2** Tilleggskalkulasjon/selvkostmetoden (tilleggssatser per avdeling → selvkost → pris;
bidrag/divisjon som alternativer; minimumskost) ·
**S3** Lønns- og regnskapsføring (lønnsbilag med kontoføring; lønnskostnad vs. utbetalt;
terminfrister; bilagskontering med mva./kontantrabatt) ·
**S4** Regnskapsanalyse med nøkkeltall (TKR, EKR, likviditetsgrad I/II, soliditet,
arbeidskapital — med kommentar) ·
**S5** Mikroøkonomi — markedsformer og tilpasning (kjennetegn + monopolistens tilpasning
i enhetsdiagram) ·
**S6** Priselastisitet og prisdifferensiering (forhold som påvirker elastisitet;
krysselastisitet; tre forutsetninger for prisdiskriminering) ·
**S7** Finansmatematikk (annuitetslån med nedbetalingsplan; nåverdi via rentetabell) ·
**S8** Likviditetsbudsjett og balanselikning (femlinjers oppsett; løs ut ukjent post) ·
**S9** Kostnadsteori og optimum-tabeller (grensekostnad/-inntekt; kostnads-/vinningsoptimum
via DEK-tabell) ·
**S10** Flervalgstest i regnskapsteori (10 spørsmål, kun hjemme) ·
**S11** Avisartikkel-oppgave (kildekritikk mot pensum, kun hjemme) ·
**S12** Produktvalg (DB per knapphetsenhet; ledig kapasitet; spesialordre).
*(Formkrav kun hjemme: KI-/APA-7-deklarasjon; kronologisk svarrekkefølge.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** veiledningene er rene løsningsfasiter UTEN A–F-prosa. Kriteriene
> under er utledet av (i) den detaljerte prosentvektingen på hver deloppgave og (ii)
> standard vurderingspraksis i grunnleggende bedriftsøkonomi. Behandle som kvalifisert
> hypotese — merket `(verifiser)`.

1. **Riktig metode + riktig svar dominerer.** Dette er et prosedyre-/regnefag; riktig
   formeloppsett og mekanisk korrekt regning er selve karaktergrunnlaget.
2. **Sporbar oppstilling demper enkeltfeil `(verifiser)`.** Kontoføring med kontonummer,
   nedbetalingsplaner og oppstillinger gir delvis uttelling der utregningen vises — selv
   om et tall skulle bli feil.
3. **Konklusjon er en selvstendig, forventet komponent** i alle vurderings-/scenario-
   oppgaver («Ja, det lønner seg …» / «Nei, bedriften er verken likvid eller solid …»).
4. **Presise teoridefinisjoner** avgjør de rene teori-deloppgavene (markedsformer,
   selskapsformer, elastisitet, avskrivning; navngi kalkylemetoden korrekt).
5. **Riktig kandidatnummer-alternativ** (skoleeksamen): feil tallkolonne = 0 poeng i hele
   oppgaven.
6. **Formkrav på hjemmeeksamen er lette poeng — og lette å miste:** kronologisk
   svarrekkefølge, mva. = 25 %, KI-/APA-7-deklarasjon med skjermdump, avisartikkel innenfor
   tillatt datovindu og koblet til rett pensumkapittel.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Glemmer **arbeidsgiveravgift *av* feriepenger** (feriepenger × 14,1 %) — det
hyppigst oversette leddet i lønnsføringen. · **#2** Blander **lønnskostnad og utbetalt
lønn** (kostnad = brutto + aga + feriepenger + aga av feriepenger; utbetalt = brutto −
skattetrekk). · **#3** Blander **likviditetsgrad I og II** (glemmer å trekke fra varelager
i grad II) og glemmer kravnivåene (I > 2, II > 1, soliditet > 30 %). · **#4** Regner
**dekningspunkt/nullpunkt feil** — forveksler kr og enheter, eller bruker feil
dekningsgrad. · **#5** **Dropper konklusjonen** i «lønner det seg?»-oppgaver. · **#6** Tar
med **avskrivning i likviditetsbudsjettet** (avskrivning er kostnad, ikke utbetaling). ·
**#7** **Feil fordelingsgrunnlag i tilleggskalkulasjon** — feil base for salg/adm.-satsen
(skal på tilvirkningskost) eller glemmer indirekte kostnader i tilvirkningskosten. · **#8**
**Feil kandidatnummer-alternativ** → 0 poeng i hele oppgaven. · **#9** **Upresise
teoridefinisjoner** — monopolistisk konkurranse forvekslet med monopol/oligopol;
enkeltpersonforetak vs. AS uskarpt; feil kjennetegn på ANS/DA. · **#10** **Mangelfull
frihåndstegning** — glemmer å markere vinningsoptimum, øvre/nedre dekningspunkt,
kostnadsoptimum eller overskuddsrektangelet. · **#11** **Glemmer/feilbehandler mva.** —
bruker ikke 25 %, eller inntektsfører brutto i stedet for å splitte varesalg og utgående
mva. · **#12** **Hjemmeeksamen-formfeil** — manglende KI-/APA-deklarasjon; avisartikkel
utenfor datovindu eller uten pensumkobling; svar ikke i kronologisk rekkefølge.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Ren regnefag-arketype med et teori-/begrepslag.** DNA-regnefag passer direkte:
   oppgavemønstrene resirkuleres med nye tall, og boka bygges som drill. Beholdes fullt ut:
   makrostrukturen (Del 0 eksamenskart → temadeler etter avhengighet → eksamenstrening),
   øvingseksamenene, **drillkapittel for hver bærende søyle**, frekvensstyrt vekting, og
   den matematiske sannhetskontrollen (fortegns-/entydighetspåstander parametersjekkes —
   se «Sannhetskontroll» under). Tilpasningen er at «riktig svar» her ofte er en **oppstilt
   kontoføring / et nøkkeltall med kommentar** framfor ett skalarsvar, og at hver beregning
   avsluttes med en **eksplisitt konklusjonssetning** (sensorkrav 3).
2. **«Symbol- og formelliste» beholdes uendret.** Faget har rikelig med formler (DB,
   dekningsgrad, TKR, EKR, likviditetsgrad, annuitetsfaktor, nåverdi) — hvert delkapittel
   får en `collapsible` **Symbol- og formelliste** SIST i delkapitlet, med åpningsnotisen
   «Oppslagsverk — alt her forklares underveis i kapitlet.»
3. **Kontoplan-liste per kontoførings-kapittel.** I Del 4 (lønns-/regnskapsføring) utvides
   formellista til en **kontoplan-liste** (kontonr. ↔ konto ↔ debet/kredit-rolle: 5000
   lønn, 2600 skattetrekk, 2380/2940 påleggstrekk/avsetninger, 5400 aga, 2770 skyldig aga,
   5180 feriepenger, 2780 skyldig aga av feriepenger, 1950 bankinnskudd skattetrekk) —
   fordi eksamen er uten formelsamling/kontoplan.
4. **Avvik 1 — hjemmeeksamen-modulen (Del 10).** Analysen dokumenterer to
   *ikke-regnetekniske* ferdigheter som bare finnes på hjemmeeksamen: (a) **avisartikkel-
   tolkning mot pensum** (kildekritikk) og (b) **KI-/APA-7-deklarasjon**. Disse er ikke
   regnefag-stoff, men de gir sikre poeng og er lette å miste — derfor en egen, kompakt del
   med sjanger-mal og formkrav-sjekkliste (ikke drøftingskapittel; kort og oppskriftsstyrt).
5. **Avvik 2 — rene teori-deloppgaver (Del 7 og 9).** Markedsformer, selskapsformer,
   elastisitet og avskrivningsmetoder er teori-deloppgaver uten tall. De bygges med
   `definition`-blokker (flashcard-kilde) + en **frihåndstegnings-prosedyre** for
   monopolistens tilpasning (med SVG-figur, jf. Figurkrav), ikke som regneløkker.
6. **To måleenheter i omløp (jf. DNA «Enhets- og konvensjonsvalg»):** dekningsgrad og
   nøkkeltall oppgis dels i **prosent**, dels som **desimalforhold** (likviditetsgrad I =
   OM/KG som forholdstall; dekningsgrad = DB/pris·100 som %). Deklareres ÉN gang i Del 0;
   hvert sted konvensjonen byttes flagges med `warning` («NB: sjekk om oppgaven vil ha
   svar i % eller som forholdstall»).
7. **Ingen oppdiktede satser eller regler.** Aktuelle satser (aga 14,1 %, feriepenger 12 %,
   mva. 25 %) står i analysen og brukes. Er en sats/terminfrist tidsavhengig eller usikker,
   merkes den `(verifiser)` — byggefasen sjekker mot gjeldende regelverk (satser kan endres
   mellom studieår). Sensorpremisser sluttet indirekte merkes `(verifiser)`.

### Matematisk sannhetskontroll (UFRAVIKELIG — jf. DNA-regnefag)

Fortegns-, entydighets- og «alltid mindre/større enn»-påstander parametersjekkes numerisk
(python3) i modellens FULLE parameterrom FØR de skrives ubetinget. Konkrete kontrollpunkter
for dette faget:
- **TKR–EKR-gearing:** påstanden «økt gjeld hever egenkapitalrentabiliteten» er **betinget**
  (gjelder kun når TKR > lånerenten; motsatt effekt når TKR < lånerenten; uendret ved
  likhet). Skriv betingelsen eksplisitt — ikke påstå ubetinget. TKR er upåvirket av
  finansieringsmiks (per definisjon på totalkapital). `(verifiser)` mot lærebokens
  formeldefinisjon (gjennomsnittlig vs. inngående totalkapital).
- **Nullpunkt/dekningspunkt:** DP i enheter = FK/(pris − VEK) er kun definert for pris >
  VEK (positiv DB per enhet); flagg at negativ DB gjør nullpunktet udefinert.
- **Risikomargin** kan bli negativ (bedrift under nullpunktet) — talleksempler begge veier.
- **Fasiter etterregnes numerisk**; alle nøkkeltall-krav (I > 2, II > 1, soliditet > 30 %)
  gjengis som de faktisk står i pensum `(verifiser)` (krav-nivåer er konvensjon, ikke lov).

### Figurkrav (UFRAVIKELIG — jf. DNA-regnefag «Figurkrav»)

Del 7 krever grafisk analyse (monopolistens tilpasning i enhetsdiagram) og SKAL ha statiske
SVG-figurer: **(a)** monopolistens tilpasning med vinningsoptimum, øvre/nedre dekningspunkt,
kostnadsoptimum og overskuddsrektangel markert; **(b)** fullkommen konkurranses tilpasning
(referanse). Gjenbrukes som referansefigur i frihåndstegnings-drillen («slik skal
diagrammet ditt se ut — merk aksene og de fire punktene»). Filer:
`public/images/textbook/nih-spm245/*.svg`; wires som `image`-blokker. Etter skriving: kjør
`npx tsx scripts/upload-media-storage.ts`. Prosabeskrivelsen beholdes som forklaring TIL
figuren, aldri i stedet for den.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (S1–S12) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt telt fra analysens §2/§3
> (8 sett med unikt innhold). **Innholdskontrakt** = definisjoner/formler som SKAL med
> (flashcard-kilden). **Oppgavesjangre** = hvilke S-koder kapitlet driller.
> **Kvote** = quiz/flashcards. Kryssbok-lenker peker på eksisterende/planlagte kapitler
> (`(verifiser lenke)` der usikker — mange NIH-søsken er skjelett, ikke bygget ennå;
> lenk kun til kapitler som finnes ved byggetid).

### Del 0 — Eksamenskart og regnehåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes SPM245
**id:** `nih-spm245-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (studentens prioriteringsverktøy).
- **Description:** Begge eksamensformat (4-timers lukket skoleeksamen med kun kalkulator og
  karakter A–F, vs. ukelang åpen hjemmeeksamen med KI/APA-7 og bestått/ikke bestått),
  kandidatnummer-alternativene, de fire bærende søylene, temafrekvensene, sensorkravene og
  kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet, 3 studieår, begge format). Skal formidle:
  (a) **formen** — to parallelle format samme år; skoleeksamen 4 t (kun kalkulator,
  utdelt), 4–5 nummererte oppgaver med prosentvekt som summerer til 100 %, karakter A–F;
  hjemmeeksamen ~7 dager i WISEflow, KI tillatt med APA-7, vurdert bestått/ikke bestått;
  (b) **de fire søylene** (CVP 7–8/8, selvkost 6/8, lønnsføring 8/8, regnskapsanalyse 5/8)
  + roterende tema; (c) **temafrekvenstabellen** (av 8 sett — fra §2); (d) **sensorkravene**
  (§2); (e) **kildeforbeholdet** — veiledningene er rene fasiter uten A–F-prosa →
  karakterlogikk utledet `(verifiser)`; (f) **kandidatnummer-alternativene** (feil kolonne =
  0 poeng, sensorkrav 5); (g) **10 sp, aktivt emne** (verifisert nih.no 2026-07-11).
  Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, jf. README):** (i) **«Slik leser du denne boka»-boks**
  (`text`/`tip`, ALDRI `definition`): forklarer karakterskalaen A–F og at hjemmeeksamen er
  bestått/ikke bestått, sjangerkodene S1–S12 i klarspråk, og at typiske feil har et samlet
  register (#1–#12); rammer inn tunge symboler leseren møter senere («du trenger ikke
  forstå DG/TKR/annuitetsfaktor ennå — de forklares der de brukes»). (ii) **«Lite tid?»-
  boks** (`tip`): 3–5-dagers hurtigrute (kapittelrekkefølge + timeanslag, prioritér Del
  2–5) + presisering om at tidsanslagene er LESEtid — den som regner oppgavene for hånd bør
  regne ca. ×1,5. (iii) **Kildenote for frekvens-empirien**: bygger på NIHs SPM245-arkiv,
  3 studieår (2023/24–2025/26), 15 filer med oppgavesett + sensorveiledninger, begge format
  — med forbehold om at nye sett kan endre bildet. (iv) **Sjanger-/prosedyrekort på ÉN side**
  (collapsible, ren tabell): S1–S12 → én linjes oppskrift → tidsbudsjett → vanligste feil.
  (v) **Deltidsrute**: 10–12-ukers plan (~8 t/uke) med øvingseksamener fordelt på flere
  økter (Del 11), aldri stablet i siste uke. (vi) **«Lese mye, skrive lite»-boks**: legitim
  leserute + minimumsråd (skriv minst ÉN øvingseksamen på tid — 4 timers håndregning er en
  fysisk ferdighet). (vii) **Karakter-realisme**: C er en god og vanlig karakter tidlig i
  studiet; «Gapet til A» er en oppgraderingsmeny, ikke en mangelliste.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  4-timers skoleeksamen med fem oppgaver og oppgitt prosentvekt — sett opp tidsbudsjett og
  rekkefølge» og «avgjør av en oppgavetekst om den krever full kontoføring/mekanisme eller
  bare et sluttsvar med konklusjon».
- **Typiske feil:** Metafeilene: tro at hjemme- og skoleformatet er byttbare (formkravene
  skiller); glemme konklusjonssetningen (#5); ignorere kandidatnummer-alternativet (#8);
  vente formelsamling/kontoplan (finnes ikke — kun kalkulator).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, søylene, temafrekvens, sensorkravene,
  sjangerkodene S1–S12, feilregisteret #1–#12, kildeforbeholdet).

#### Kapittel 0.2: Regnehåndverket — oppstilling, kontoføring og konklusjon
**id:** `nih-spm245-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-0-1`

- **Kapitteltype:** håndverkskapittel (meta — oppstillings- og konklusjonsspråk).
- **Description:** De tre ferdighetene som gir poeng på hver eneste oppgave: **sporbar
  oppstilling** (kontoføring med kontonummer, tabelloppsett, nedbetalingsplan), **korrekt
  bruk av standardsatser** (mva. 25 %, aga 14,1 %, feriepenger 12 %), og **eksplisitt
  konklusjonssetning**. Etablerer også desimal-vs-prosent-konvensjonen og
  **formel-minimum-siden** boka bygger på.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–3 på tvers av alle sjangre S1–S12).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. Grunnleggende prosentregning og likningsløsning
  forutsettes (VGS-nivå); ingen kryssbok-lenke nødvendig. `collapsible` **Symbol- og
  formelliste:** standardsatsene (mva. 25 %, aga 14,1 %, feriepenger 12 %), desimal↔prosent-
  konverteringen, og debet/kredit-konvensjonen (debet venstre, kredit høyre; balansen skal
  gå opp).
- **Innholdskontrakt (flashcard-kilde):** **debet/kredit-regelen** (eiendeler/kostnader
  øker i debet; gjeld/egenkapital/inntekter øker i kredit); **T-kontoen** og
  bilagsoppstilling; **standardsatsene**; **konklusjonsmalen** («Ja/Nei, [tiltak] [lønner
  seg / gjør ikke bedriften likvid], fordi [nøkkeltall] = [verdi] [</>] [krav/utgangspunkt]»);
  **desimal↔prosent** (dekningsgrad i %, likviditetsgrad som forholdstall). **Formel-minimum-
  siden** (collapsible «Formlene du må kunne utenat»): DB = pris − VEK; dekningsgrad =
  DB/pris·100; DP i kr = FK/DG·100; DP i enheter = FK/DB per enhet; resultat = DB totalt −
  FK; TKR, EKR, likviditetsgrad I/II, soliditet, arbeidskapital; annuitet = lån ·
  annuitetsfaktor — hver med én ordlinje + beskjed om at resten kan slås opp mentalt.
  (Dette er også bokas samlede printbare oppslagskort.)
- **Løsningsprosedyre (normativ, brukes overalt):** (1) skriv opp kjent/ukjent og velg
  formel; (2) sett opp regningen sporbart (tabell/T-konto/plan); (3) regn mekanisk; (4)
  skriv **konklusjonssetningen**; (5) sjekk enhet (kr / enheter / % / forholdstall).
- **Typiske feil:** #5 (dropper konklusjon); #11 (mva. glemt/feil); regne i feil enhet
  (blande kr og enheter, jf. #4); balansen som ikke går opp (debet ≠ kredit).
- **Modellsvar:** «Sett opp et enkelt lønnsbilag skjematisk (bruttolønn, skattetrekk,
  utbetalt) og vis debet/kredit-plasseringen» (forbereder Del 4); «Regn dekningsgrad fra
  pris og VEK, og skriv svaret både som % og som forholdstall — forklar når hvert brukes».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 11).

### Del 1 — Kostnadsbegreper og kostnadsteori *(prioritet: GRUNNLAG / KUNNE ⭐⭐)*

#### Kapittel 1.1: Kostnadsbegreper og kostnadsinndelinger
**id:** `nih-spm245-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-0-2`

- **Kapitteltype:** grunnlagskapittel.
- **Description:** Faste vs. variable kostnader, direkte vs. indirekte, betalbare vs.
  kalkulatoriske; kostnadsforløp (proporsjonale/degressive/progressive) og variabel
  enhetskostnad (VEK) vs. totale faste kostnader (FK) — begrepsapparatet CVP, kalkulasjon og
  produktvalg alle hviler på.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for S1 (CVP), S2 (kalkulasjon), S9
  (kostnadsoptimum) og S12 (produktvalg). Kostnadsteori/begreper 3/8 (⭐⭐). Prioritet:
  grunnlag.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Symbol- og formelliste:** FK, VK,
  VEK, TK = FK + VK; kostnadsforløps-typene.
- **Innholdskontrakt (flashcard-kilde):** **faste kostnader** (uendret ved
  aktivitetsendring i relevant område), **variable kostnader** (endres med volum),
  **direkte** (kan henføres til produkt) vs. **indirekte** (felleskostnad, fordeles),
  **betalbare** (gir utbetaling) vs. **kalkulatoriske** (f.eks. avskrivning, kalkulatorisk
  rente); TK = FK + VK; VEK = VK/mengde; enhetskostnad synker med volum (faste fordeles på
  flere enheter — grunnlag for divisjonskalkyle).
- **Oppgavesjangre:** klassifiseringsoppgaver (sorter kostnader i faste/variable,
  direkte/indirekte) + enkle VEK/FK-utregninger. Bygger opp mot S1/S2.
- **Typiske feil:** blande direkte/indirekte med faste/variable (to uavhengige akser);
  regne avskrivning som betalbar kostnad (kobles til #6 i likviditetsbudsjettet).
- **Modellsvar:** «En idrettsklubb driver kafé; klassifiser åtte oppgitte kostnader langs
  begge akser (fast/variabel og direkte/indirekte) og begrunn hver».
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 1.2: Grensekostnad og kostnads-/vinningsoptimum via DEK-tabell
**id:** `nih-spm245-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-1-1`

- **Kapitteltype:** teori-/regnekapittel (kunne).
- **Description:** Grensekostnad/grenseinntekt (= differansekostnad/-inntekt per enhet,
  ΔTK/Δx), og hvordan man fra en totalkostnadstabell bygger DEK/DEI og leser av
  **kostnadsoptimal** mengde (TEK-minimum) og **vinningsoptimal** mengde/pris (der GI = GK).
- **Eksamensbelegg:** Sjanger S9 (kostnadsteori & optimum-tabeller, 3/8, ⭐⭐). Forutsetning
  for monopolistens tilpasning (S5, Del 7) — samme GI = GK-logikk. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:** TK, TEK =
  TK/x, GK = ΔTK/Δx, GI = ΔTI/Δx, vinningsoptimum (GI = GK), kostnadsoptimum (TEK-minimum).
- **Innholdskontrakt (flashcard-kilde):** **grensekostnad** (tilleggskostnad ved én enhet
  mer), **grenseinntekt** (tilleggsinntekt), **differansekostnad/-inntekt** (endring ved et
  helt sprang), **kostnadsoptimum** (mengden med lavest gjennomsnittskostnad TEK),
  **vinningsoptimum** (mengden som maksimerer fortjeneste, GI = GK); tabellbygging fra TK →
  GK/GI kolonner.
- **Oppgavesjangre:** S9 — fra oppgitt TK-tabell: bygg DEK/DEI, les av kostnads- og
  vinningsoptimal mengde/pris og maksimal fortjeneste.
- **Typiske feil:** forveksle kostnadsoptimum (TEK-min) med vinningsoptimum (GI = GK);
  regne grensekostnad som gjennomsnittskostnad; feil ved Δ (bruke nivå i stedet for endring).
- **Modellsvar:** «Fra en gitt TK-tabell (0–8 enheter): fyll ut GK og GI, finn
  vinningsoptimal mengde og maksimal fortjeneste, og forklar hvorfor det ikke er der
  fortjenesten per enhet er størst».
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (**Prøve 1.A** kostnadsklassifisering · **Prøve 1.B**
VEK/FK/TK-beregninger · **Prøve 1.C** DEK-tabell + kostnads-/vinningsoptimum · **Prøve 1.D**
samlet grunnlagsprøve på eksamensnivå). *Deles trygt over flere økter — én prøve per økt.*

### Del 2 — Dekningsbidrag og CVP-analyse *(prioritet: PERFEKT ⭐⭐⭐ — 7–8/8, bærende søyle)*

#### Kapittel 2.1: Dekningsbidrag, dekningsgrad og nullpunkt
**id:** `nih-spm245-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-1-1`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** CVP-apparatets kjerne: dekningsbidrag per enhet og totalt, dekningsgrad,
  nullpunkt/dekningspunkt i kroner og enheter, og resultat = DB totalt − FK. Den enkelt mest
  testede beregningen i faget.
- **Eksamensbelegg:** Sjanger S1 (7–8/8, ⭐⭐⭐), ofte med kandidatnummer-styrte tallalternativer.
  Typisk høyest vektede enkeltoppgave. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (faste/variable kostnader), kap. 0.2 (oppstilling +
  konklusjon). «Sist du var her»: DB = pris − VEK; FK er faste totalt. `collapsible`
  **Symbol- og formelliste:** DB = pris − VEK; DB totalt = DB · mengde; DG = DB/pris·100;
  DP i kr = FK/DG·100; DP i enheter = FK/DB per enhet; resultat = DB totalt − FK.
- **Innholdskontrakt (flashcard-kilde):** **dekningsbidrag** (det hver solgt enhet bidrar
  med til å dekke faste kostnader og gi overskudd, pris − VEK), **dekningsgrad** (DB som %
  av pris), **nullpunkt/dekningspunkt** (salget der resultatet = 0), i kr og enheter;
  resultat = DB totalt − FK. Deklarer desimal-vs-prosent (DG i %, jf. Del 0).
- **Oppgavesjangre:** S1 — gitt pris, VEK, FK, mengde: regn DB (enhet + totalt), DG, DP (kr +
  enheter), resultat. Bygg progresjonen fra ett produkt til flerprodukt-DG (vektet).
- **Typiske feil:** #4 (kr vs. enheter, feil DG); #5 (mangler konklusjon der oppgaven ber om
  vurdering); regne DG av VEK i stedet for pris.
- **Modellsvar:** «En treningsklubb selger et månedskort til 500 kr med VEK 120 kr og FK
  180 000 kr/mnd. Regn DB, DG, dekningspunkt i kr og antall kort, og resultat ved 600 solgte
  kort — konkluder om driften går i overskudd.»
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 2.2: Sikkerhetsmargin og CVP-scenarioer
**id:** `nih-spm245-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-2-1`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Sikkerhets-/risikomargin (kr, enheter, %) og scenario-leddet som skiller
  A fra C: «senk prisen X %, salget øker Y %, VEK synker Z % — lønner det seg?» → sett opp ny
  kalkyle og **konkluder eksplisitt**.
- **Eksamensbelegg:** Sjanger S1, scenario-varianten (⭐⭐⭐). Sensor forventer sammenlignende
  kalkyle + ja/nei-konklusjon (sensorkrav 3). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. «Sist du var her»: DB = pris − VEK, resultat = DB
  totalt − FK, DP i enheter = FK/DB. `collapsible` **Symbol- og formelliste:**
  sikkerhetsmargin i kr (= nåværende omsetning − DP i kr), i enheter (= solgt mengde − DP i
  enheter), i % (= sikkerhetsmargin kr / omsetning · 100); risikomargin som speilbilde.
- **Innholdskontrakt (flashcard-kilde):** **sikkerhetsmargin** (hvor mye salget kan falle
  før nullpunktet nås, i kr/enheter/%), **risikomargin** (kan bli negativ under nullpunktet
  — jf. sannhetskontroll); scenario-metoden (ny pris/mengde/VEK → ny DB → nytt resultat →
  sammenlign med utgangspunkt → konkluder).
- **Oppgavesjangre:** S1-scenario — «lønner endringen seg?» med to-kalkyle-sammenligning og
  eksplisitt konklusjon; sikkerhetsmargin-beregninger.
- **Typiske feil:** #5 (regner riktig, glemmer ja/nei); besvarer scenario uten
  sammenlignende kalkyle (bare påstand); regner sikkerhetsmargin fra feil utgangspunkt.
- **Modellsvar:** «Klubben vurderer å senke kortprisen 10 %; salget ventes å øke 25 % og VEK
  falle 5 %. Sett opp ny kalkyle mot utgangspunktet fra 2.1 og konkluder om endringen lønner
  seg.» **Signal-boks ETTER oppgaven:** «her lurer et skjult krav om at også
  sikkerhetsmarginen bør kommenteres».
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 2.3: Drill — CVP med kandidatnummer-varianter
**id:** `nih-spm245-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-2-2`

- **Kapitteltype:** drillkapittel (DNA-regnefag drill-DNA).
- **Description:** Ren mengdetrening på hele CVP-sjangeren, med tallsett som imiterer
  kandidatnummer-alternativene (samme oppgave, forskjellige tallkolonner) slik at leseren
  drilles på *metoden*, ikke ett fasitsvar.
- **Eksamensbelegg:** Sjanger S1 i alle varianter (⭐⭐⭐). Kandidatnummer-alternativet er fast
  på skoleeksamen (sensorkrav 5, #8). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2. `collapsible` **Symbol- og formelliste:** hele
  CVP-formelsettet i kortform (fra 2.1–2.2).
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritmisk): (1) les av riktig tallkolonne
  (kandidatnummer — feil kolonne = 0 poeng); (2) DB per enhet; (3) DG; (4) DP kr + enheter;
  (5) sikkerhetsmargin; (6) resultat; (7) ved scenario: ny kalkyle + konklusjon.
- **Oppgavesjangre:** S1 — 8–12 varianter på eksamensnivå, alle med `solution` + `hints`
  (første hint = formelen, aldri svaret). Inkluder minst 2 med scenario-ledd.
- **Typiske feil:** #8 (feil tallkolonne — egen advarsel om at metoden er å låse kolonnen
  FØRST); #4; #5.
- **Modellsvar:** «Gjennomtegnet eksamenscase» med margnotater om hva som gir uttelling ved
  hvert steg (kandidatnummer-kolonne merket eksplisitt).
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 2:** 4 prøver (**Prøve 2.A** DB/DG/nullpunkt · **Prøve 2.B**
sikkerhetsmargin · **Prøve 2.C** CVP-scenario med konklusjon · **Prøve 2.D**
kandidatnummer-variant på full eksamensnivå). *Én prøve per økt.*

### Del 3 — Tilleggskalkulasjon og selvkostmetoden *(prioritet: PERFEKT ⭐⭐⭐ — 6/8)*

#### Kapittel 3.1: Selvkostmetoden — tilleggssatser og selvkost
**id:** `nih-spm245-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-1-1`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Tilleggskalkulasjon etter selvkostmetoden i en industribedrift med fire
  avdelinger (material, tilvirkning I, tilvirkning II, salg/adm.): regn tilleggssatser i
  prosent (indirekte mot direkte per avdeling; salg/adm. mot tilvirkningskost), kalkuler
  selvkost og pris eks. mva. på en ny ordre.
- **Eksamensbelegg:** Sjanger S2 (6/8, ⭐⭐⭐), noen ganger kandidatnummer-styrt. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1 (direkte/indirekte kostnader), kap. 0.2. `collapsible`
  **Symbol- og formelliste:** tilleggssats = indirekte / direkte grunnlag · 100;
  tilvirkningskost = direkte materiale + materialtillegg + direkte lønn + tilvirkningstillegg;
  selvkost = tilvirkningskost + salg/adm.-tillegg (av tilvirkningskost); pris eks. mva. =
  selvkost + fortjenestepåslag.
- **Innholdskontrakt (flashcard-kilde):** **selvkostmetoden** (alle kostnader, også faste
  indirekte, fordeles på produktet), **tilleggssats** (indirekte kostnad som % av et direkte
  grunnlag), avdelingsstrukturen (material, tilvirkning I/II, salg/adm.), **at salg/adm.-
  satsen beregnes på tilvirkningskost** (ikke på direkte materiale), tilvirkningskost →
  selvkost → pris eks. mva.
- **Oppgavesjangre:** S2 — regn de fire tilleggssatsene, kalkuler selvkost + pris på en ny
  ordre. Løkke per avdeling.
- **Typiske feil:** #7 (feil fordelingsgrunnlag — salg/adm. skal på tilvirkningskost; glemme
  indirekte i tilvirkningskosten); regne tillegg av feil base.
- **Modellsvar:** «Gitt avdelingstall for en utstyrsprodusent: regn de fire tilleggssatsene
  og kalkuler pris eks. mva. på en ordre med oppgitt direkte materiale og direkte lønn.»
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 3.2: Bidragsmetode, divisjonskalkyle og minimumskost
**id:** `nih-spm245-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-3-1`

- **Kapitteltype:** teori-/regnekapittel (perfekt).
- **Description:** Selvkost vs. bidrag vs. divisjon som kalkylemetoder — navngi metoden og
  vit hvilke tilleggsopplysninger hver krever; **minimumskost** når en oppgitt andel av de
  indirekte kostnadene er faste.
- **Eksamensbelegg:** Sjanger S2, teori-/metodeleddet (⭐⭐⭐). Sensor forventer at metoden
  navngis korrekt og at alternativer nevnes (sensorkrav 4). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  bidragskalkyle (kun variable kostnader fordeles; faste dekkes av DB); divisjonskalkyle
  (selvkost = totale kostnader / mengde); minimumskost = variabel andel av tilleggene.
- **Innholdskontrakt (flashcard-kilde):** **bidragsmetoden** (bare variable kostnader
  henføres; faste dekkes samlet av dekningsbidraget), **divisjonskalkyle** (for ensartet
  masseproduksjon: totale kostnader delt på antall), **minimumskost** (den laveste prisen
  som dekker de variable kostnadene + variabel andel av tilleggene, brukbar ved ledig
  kapasitet), og når hver metode passer.
- **Oppgavesjangre:** S2 — «navngi metoden brukt over, nevn to alternativer og hva de
  krever»; minimumskost-beregning når en andel av indirekte er faste.
- **Typiske feil:** #9 (upresis metodenavngivning); regne minimumskost med hele
  tilleggssatsen (skal kun være variabel andel); blande bidrag og selvkost.
- **Modellsvar:** «40 % av tilleggene i 3.1 er faste. Regn minimumskost på ordren og forklar
  når klubben kan akseptere en pris under selvkost.»
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 3.3: Drill — tilleggskalkulasjon
**id:** `nih-spm245-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-3-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Mengdetrening på hele selvkost-/tilleggskalkyle-sjangeren, inkl.
  kandidatnummer-varianter og metode-/minimumskost-ledd.
- **Eksamensbelegg:** Sjanger S2 i alle varianter (⭐⭐⭐). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og formelliste:** hele
  kalkyleapparatet i kortform.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) sett opp avdelingsskjemaet; (2) regn hver
  tilleggssats (sjekk fordelingsgrunnlag); (3) bygg tilvirkningskost; (4) legg til salg/adm.
  på tilvirkningskost → selvkost; (5) fortjenestepåslag → pris eks. mva.; (6) evt. minimumskost.
- **Oppgavesjangre:** S2 — 8–12 varianter på eksamensnivå, alle med `solution` + `hints`.
- **Typiske feil:** #7 (fordelingsgrunnlag — egen advarsel); glemme mva.-splitting ved
  sluttpris (#11).
- **Modellsvar:** «Gjennomregnet eksamenscase» med sensor-margnotater.
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 3:** 4 prøver (**Prøve 3.A** tilleggssatser · **Prøve 3.B** selvkost + pris
på ny ordre · **Prøve 3.C** metodevalg + minimumskost · **Prøve 3.D** full kalkyle på
eksamensnivå). *Én prøve per økt.*

### Del 4 — Lønns- og regnskapsføring *(prioritet: PERFEKT ⭐⭐⭐ — 8/8, sikreste enkeltoppgave)*

#### Kapittel 4.1: Lønnsbilaget — full kontoføring
**id:** `nih-spm245-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `nih-spm245-0-2`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Kontering av et lønnsbilag fra bruttolønn til utbetalt lønn, med
  arbeidsgiveravgift (14,1 %), feriepenger (12 %), **arbeidsgiveravgift av feriepenger** og
  innsatt skattetrekk — hver postering med kontonummer. Den oppgaven som kommer i *alle* sett.
- **Eksamensbelegg:** Sjanger S3 (8/8, ⭐⭐⭐) — i hvert eneste sett, begge format, samme
  oppskrift, kun tallene endres. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (debet/kredit, standardsatser). «Sist du var her»:
  debet øker eiendel/kostnad, kredit øker gjeld; aga 14,1 %, feriepenger 12 %. `collapsible`
  **Kontoplan-liste** (jf. §2 avvik 3): 5000 lønn (D), 2600 skattetrekk (K), 1920/1950 bank
  (K), 5400 aga (D), 2770 skyldig aga (K), 5180 feriepenger (D), 2780 skyldig aga av
  feriepenger (K), 2940 skyldige feriepenger (K) — kontonr. `(verifiser)` mot lærebokens
  kontoplan (kontonummer varierer noe mellom oppsett).
- **Innholdskontrakt (flashcard-kilde):** posteringssekvensen (bruttolønn D 5000; skattetrekk
  K 2600; utbetalt via bank K; aga D 5400 / K 2770; feriepenger D 5180 / K 2940; **aga av
  feriepenger** D 5400 / K 2780; skattetrekk innsatt på egen bankkonto); satsene; at aga
  beregnes av bruttolønn **og** av feriepenger.
- **Oppgavesjangre:** S3(a) — kontér et fullstendig lønnsbilag med kontonummer.
- **Typiske feil:** #1 (glemmer aga *av* feriepenger — hovedadvarselen i kapitlet); feil
  fortegn debet/kredit; regne aga av utbetalt i stedet for brutto.
- **Modellsvar:** «En idrettsklubb utbetaler 42 000 kr i bruttolønn til en ansatt,
  skattetrekk 13 000 kr. Kontér hele lønnsbilaget inkl. aga, feriepenger og aga av
  feriepenger, med kontonummer.» *Løkke: én postering av gangen — brutto → trekk → utbetalt
  → aga → feriepenger → aga av feriepenger.*
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 4.2: Lønnskostnad, utbetalt lønn og terminfrister
**id:** `nih-spm245-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-4-1`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Skillet mellom **total lønnskostnad** (brutto + aga + feriepenger + aga av
  feriepenger) og **utbetalt lønn** (brutto − skattetrekk), og terminfristene for mva.,
  arbeidsgiveravgift og skattetrekk.
- **Eksamensbelegg:** Sjanger S3 (⭐⭐⭐) — nesten alltid et deloppgave-ledd etter
  konteringen. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:** lønnskostnad
  = brutto + aga + feriepenger + aga av feriepenger; utbetalt = brutto − skattetrekk;
  terminfrister (mva. og aga/skattetrekk to-månedlig `(verifiser)` mot gjeldende frister).
- **Innholdskontrakt (flashcard-kilde):** **lønnskostnad** (arbeidsgiverens totale kostnad,
  inkl. alle avgifter og feriepenger) vs. **utbetalt lønn** (det den ansatte får på konto);
  terminbegrepet; hvorfor lønnskostnad > utbetalt.
- **Oppgavesjangre:** S3(a) — regn total lønnskostnad og utbetalt lønn fra bilaget i 4.1;
  angi terminfrist for en gitt avgift.
- **Typiske feil:** #2 (blander lønnskostnad og utbetalt — hovedadvarsel); glemme aga av
  feriepenger i kostnaden (#1); regne feriepenger som utbetalt samme måned.
- **Modellsvar:** «Fra bilaget i 4.1: regn total lønnskostnad og utbetalt lønn, og forklar
  differansen post for post.»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 4.3: Drill — lønn og bilagskontering med mva.
**id:** `nih-spm245-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-4-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Mengdetrening på lønnsbilag + den hjemmeeksamen-eksklusive
  bilagskonteringen (inn-/utgående faktura med mva., kontantrabatt-korreksjon, kontant
  varesalg inkl. mva. → splitt i varesalg + utgående mva.).
- **Eksamensbelegg:** Sjanger S3(a) alle sett + S3(b) bilagskontering (kun hjemme).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.2, kap. 0.2 (mva. 25 %). `collapsible`
  **Kontoplan-liste:** lønnskontiene + inngående/utgående mva. (2710/2700 `(verifiser)`),
  varekjøp/varesalg (4300/3000 `(verifiser)`), kundefordringer/leverandørgjeld.
- **Innholdskontrakt:** **Løsningsoppskrift lønn** (fra 4.1); **bilagskontering:** inngående
  faktura (varekjøp D, inngående mva. D, leverandørgjeld K); utgående (kundefordring D,
  varesalg K, utgående mva. K); **kontantrabatt-korreksjon**; kontant varesalg inkl. mva.
  → splitt (salg 80 %, utgående mva. 20 % av bruttobeløpet ved 25 % sats).
- **Oppgavesjangre:** S3(a) 5–6 lønnsvarianter + S3(b) 4–6 bilagskonteringer, alle med
  `solution` + `hints`.
- **Typiske feil:** #1, #2 (lønn); #11 (mva. — inntektsføre brutto i stedet for å splitte).
- **Modellsvar:** «Kontér en kontant kafésalg-dag på 12 500 kr inkl. mva.: splitt i varesalg
  og utgående mva.»
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (**Prøve 4.A** lønnsbilag full kontoføring · **Prøve 4.B**
lønnskostnad vs. utbetalt + terminfrister · **Prøve 4.C** bilagskontering med mva. · **Prøve
4.D** samlet regnskapsføring på eksamensnivå). *Én prøve per økt.*

### Del 5 — Regnskapsanalyse med nøkkeltall *(prioritet: PERFEKT ⭐⭐⭐ — 5/8)*

#### Kapittel 5.1: Rentabilitet — TKR og EKR
**id:** `nih-spm245-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-0-2`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Totalkapitalrentabilitet og egenkapitalrentabilitet fra resultat +
  balanse, med kommentar; og den betingede TKR–EKR–gearing-sammenhengen (økt gjeld hever EKR
  kun når TKR > lånerenten).
- **Eksamensbelegg:** Sjanger S4 (5/8, ⭐⭐⭐). Konseptspørsmålet om TKR vs. EKR ved mer/mindre
  gjeld er gjenganger. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2. For finansmatematisk sammenheng (rente): [Nåverdi og
  rente](/nih-spm245/nih-spm245-8-1). `collapsible` **Symbol- og formelliste:** TKR =
  (driftsresultat + finansinntekt) / gj.snitt totalkapital · 100; EKR (før skatt) =
  (ordinært resultat før skatt) / gj.snitt egenkapital · 100; gj.snitt = (IB + UB)/2.
- **Innholdskontrakt (flashcard-kilde):** **totalkapitalrentabilitet** (avkastning på ALL
  kapital, uavhengig av finansiering), **egenkapitalrentabilitet** (avkastning på eiernes
  kapital), gjennomsnittskapital (IB + UB)/2; **gearing-sammenhengen** (skriv betingelsen
  eksplisitt — jf. sannhetskontroll: EKR > TKR hviss TKR > lånerente, EKR < TKR når TKR <
  lånerente, TKR selv upåvirket av finansieringsmiks).
- **Oppgavesjangre:** S4 — regn TKR og EKR (ofte to år) og kommenter utviklingen; forklar
  effekten av økt gjeld på hvert nøkkeltall.
- **Typiske feil:** bruke UB i stedet for gjennomsnitt; glemme finansinntekt i TKR-telleren;
  påstå ubetinget at gjeld hever EKR (jf. sannhetskontroll — betingelsen må med).
- **Modellsvar:** «Gitt resultat og balanse for to år: regn TKR og EKR begge år, kommenter
  utviklingen, og forklar med tall når økt låneopptak ville løftet EKR.»
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 5.2: Likviditet, soliditet og arbeidskapital
**id:** `nih-spm245-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-5-1`

- **Kapitteltype:** kjernekapittel (perfekt).
- **Description:** Likviditetsgrad I og II, egenkapitalprosent/soliditet og arbeidskapital,
  med kravnivåene (I > 2, II > 1, soliditet > 30 %) og obligatorisk kommentar/konklusjon.
- **Eksamensbelegg:** Sjanger S4 (⭐⭐⭐). Sensor forventer at kravnivåene nevnes og at det
  konkluderes («bedriften er verken likvid eller solid»). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Symbol- og formelliste:**
  likviditetsgrad I = OM/KG (krav > 2); likviditetsgrad II = (OM − varelager)/KG (krav > 1);
  egenkapitalprosent = EK/totalkapital · 100 (krav > 30 %); arbeidskapital = OM − KG. **NB
  `warning`:** disse er forholdstall/prosent — sjekk hva oppgaven vil ha.
- **Innholdskontrakt (flashcard-kilde):** **likviditetsgrad I/II** (evne til å betale
  kortsiktig gjeld; II strengere ved å trekke ut varelager), **soliditet/egenkapitalprosent**
  (evne til å tåle tap), **arbeidskapital** (OM − KG); kravnivåene som konvensjon
  `(verifiser)`.
- **Oppgavesjangre:** S4 — regn alle fire, sammenlign mot krav, konkluder.
- **Typiske feil:** #3 (blander I og II — glemmer å trekke varelager; hovedadvarsel); glemme
  kravnivåene; droppe konklusjonen (#5).
- **Modellsvar:** «Fra balansen i 5.1: regn likviditetsgrad I og II, soliditet og
  arbeidskapital, sammenlign med kravnivåene og konkluder om klubben er likvid og solid.»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 5.3: Drill — regnskapsanalyse
**id:** `nih-spm245-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-5-2`

- **Kapitteltype:** drillkapittel.
- **Description:** Mengdetrening på hele nøkkeltall-sjangeren fra resultat + balanse, med
  kommentar og gearing-spørsmål.
- **Eksamensbelegg:** Sjanger S4 i alle varianter (⭐⭐⭐). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2. `collapsible` **Symbol- og formelliste:** hele
  nøkkeltall-settet i kortform + kravnivåene.
- **Innholdskontrakt:** **Løsningsoppskrift:** (1) hent tall fra resultat + balanse; (2) regn
  rentabilitet (gj.snittskapital); (3) regn likviditet I/II; (4) soliditet + arbeidskapital;
  (5) sammenlign mot krav; (6) konkluder per nøkkeltall.
- **Oppgavesjangre:** S4 — 8–12 varianter på eksamensnivå, alle med `solution` + `hints`.
- **Typiske feil:** #3; #5; feil gjennomsnittskapital.
- **Modellsvar:** «Gjennomregnet eksamenscase» (Næringsmiddel-type) med sensor-margnotater
  om at hvert nøkkeltall skal kommenteres.
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver (**Prøve 5.A** TKR/EKR + gearing · **Prøve 5.B**
likviditet/soliditet/arbeidskapital · **Prøve 5.C** full nøkkeltallsanalyse med kommentar ·
**Prøve 5.D** eksamensnivå med to-års-sammenligning). *Én prøve per økt.*

### Del 6 — Produktvalg og beslutninger *(prioritet: KUNNE ⭐⭐ — 4/8)*

#### Kapittel 6.1: Produktvalg ved ledig kapasitet og knapp faktor
**id:** `nih-spm245-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-2-1`

- **Kapitteltype:** teori-/regnekapittel (kunne).
- **Description:** Beslutningsregler basert på dekningsbidrag: positiv DB ved ledig kapasitet
  (aksepter alt som gir positivt bidrag), DB per knapphetsenhet ved flaskehals (prioriter
  produktet med høyest DB per knapp enhet), og aksepter/avvis spesialordre.
- **Eksamensbelegg:** Sjanger S12 (4/8, ⭐⭐). Bygger direkte på CVP (Del 2). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** [Dekningsbidrag og CVP](/nih-spm245/nih-spm245-2-1). «Sist
  du var her»: DB = pris − VEK. `collapsible` **Symbol- og formelliste:** DB per
  knapphetsenhet = DB per produkt / forbruk av knapp faktor per produkt; beslutningsregel
  ved ledig kapasitet (aksepter hvis DB > 0); spesialordre-regel.
- **Innholdskontrakt (flashcard-kilde):** **ledig kapasitet** (faste kostnader er allerede
  dekket → ethvert positivt DB øker resultatet), **knapp faktor/flaskehals** (rangér etter
  DB per knapphetsenhet, ikke DB per produkt), **spesialordre** (aksepter hvis prisen dekker
  variable kostnader + gir positivt DB, forutsatt ledig kapasitet).
- **Oppgavesjangre:** S12 — «bør klubben ta imot en tilleggsordre til redusert pris?»;
  «hvilket produkt bør prioriteres når maskintiden er knapp?».
- **Typiske feil:** rangere etter DB per produkt i stedet for per knapphetsenhet; avvise
  spesialordre med positivt DB fordi prisen er under selvkost (feil ved ledig kapasitet); #5.
- **Modellsvar:** «To produkter, felles flaskehals (baneleie-timer). Rangér etter DB per
  banetime og anbefal produktmiks; deretter: aksepter en spesialordre til 60 % av normalpris
  når det er ledig kapasitet? Konkluder.»
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (**Prøve 6.A** ledig kapasitet / positiv DB · **Prøve 6.B**
knapp faktor — DB per knapphetsenhet · **Prøve 6.C** spesialordre-beslutning · **Prøve 6.D**
kombinert produktvalg på eksamensnivå). *Én prøve per økt.*

### Del 7 — Mikroøkonomi: markedsformer og pris *(prioritet: KUNNE ⭐⭐⭐/⭐⭐ — 5/8 + 3/8)*

#### Kapittel 7.1: Markedsformer og monopolistens tilpasning
**id:** `nih-spm245-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-1-2`

- **Kapitteltype:** teorikapittel med frihåndstegning (kunne — tung teori-deloppgave).
- **Description:** De fire markedsformene (fullkommen konkurranse, monopolistisk konkurranse,
  oligopol/differensiert oligopol, monopol) med kjennetegn og eksempel, og monopolistens
  tilpasning i enhetsdiagram — marker vinningsoptimum, øvre/nedre dekningspunkt,
  kostnadsoptimum og overskuddsrektangel. Med SVG-figur (jf. Figurkrav).
- **Eksamensbelegg:** Sjanger S5 (5/8, ⭐⭐⭐). Frihåndstegningen er hyppig feilkilde (#10).
  Prioritet: kunne (men høyfrekvent teori).
- **Forkunnskaper/kryssbok:** kap. 1.2 (grensekostnad/-inntekt, vinningsoptimum GI = GK).
  «Sist du var her»: vinningsoptimum er der GI = GK. `collapsible` **Symbol- og formelliste:**
  GI, GK, ETK, vinningsoptimum (GI = GK), dekningspunkter (der pris = ETK), kostnadsoptimum
  (ETK-min), overskuddsrektangel (mengde × (pris − ETK)).
- **Innholdskontrakt (flashcard-kilde):** de fire markedsformene (antall aktører, produkt
  homogent/differensiert, etableringshindre, pris-setter vs. pris-taker) med eksempel;
  **monopolistens tilpasning** (produserer der GI = GK, tar prisen fra etterspørselskurven);
  de fire punktene som skal markeres (vinningsoptimum, øvre/nedre dekningspunkt,
  kostnadsoptimum) + overskuddsrektangelet. **Figur:** SVG av monopolistens tilpasning
  (referanse) + fullkommen konkurranse.
- **Oppgavesjangre:** S5 — «beskriv markedsformene med kjennetegn og eksempel»; «tegn
  monopolistens tilpasning og marker de fire punktene + overskuddsrektangelet».
- **Typiske feil:** #9 (monopolistisk konkurranse forvekslet med monopol/oligopol); #10
  (glemmer å markere ett/flere punkter eller rektangelet).
- **Modellsvar:** «Beskriv monopolistisk konkurranse vs. differensiert oligopol med hvert sitt
  eksempel fra idrettsbransjen, og tegn (beskriv til figuren) monopolistens tilpasning med
  alle fire punktene markert.»
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 7.2: Priselastisitet, krysselastisitet og prisdifferensiering
**id:** `nih-spm245-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-7-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Forhold som påvirker priselastisiteten, krysselastisitet, og de tre
  forutsetningene for prisdifferensiering/prisdiskriminering.
- **Eksamensbelegg:** Sjanger S6 (3/8, ⭐⭐). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol- og formelliste:** priselastisitet
  = (% endring i etterspurt mengde)/(% endring i pris); krysselastisitet (mellom to varer);
  fortegnstolkning (elastisk |E|>1, uelastisk |E|<1).
- **Innholdskontrakt (flashcard-kilde):** **forhold som påvirker elastisitet** (unikt produkt,
  ubetydelig økonomisk belastning, substitutter, komplementære varer, kvalitet/prestisje,
  inntekt), **krysselastisitet** (positiv = substitutter, negativ = komplementer),
  **prisdifferensiering** med de **tre forutsetningene** (kunne skille kjøpergrupper, føre
  selvstendig prispolitikk, ulik elastisitet mellom gruppene).
- **Oppgavesjangre:** S6 — «nevn fire forhold som gjør etterspørselen mer prisuelastisk»;
  «hva er de tre forutsetningene for prisdiskriminering?».
- **Typiske feil:** #9 (upresise definisjoner); forveksle kryss- og priselastisitet; glemme
  én av de tre forutsetningene.
- **Modellsvar:** «En treningskjede vil ta ulik pris av studenter og fulltidsansatte. Er de
  tre forutsetningene for prisdifferensiering oppfylt? Begrunn hver.»
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 7:** 4 prøver (**Prøve 7.A** markedsformenes kjennetegn · **Prøve 7.B**
monopolistens tilpasning + frihåndstegning · **Prøve 7.C** elastisitet + krysselastisitet ·
**Prøve 7.D** prisdifferensiering + samlet mikro-teori). *Én prøve per økt.*

### Del 8 — Finansmatematikk, likviditetsbudsjett og balanse *(prioritet: KUNNE ⭐⭐ — 4/8 + 3/8 + 4/8)*

#### Kapittel 8.1: Annuitetslån og nåverdi
**id:** `nih-spm245-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm245-0-2`

- **Kapitteltype:** regnekapittel (kunne).
- **Description:** Annuitetslån via rentetabell (beregn annuitet, sett opp nedbetalingsplan med
  restlån/renter/avdrag, hent ut f.eks. avdraget år 2) og nåverdi av et framtidig beløp via
  diskonteringsfaktor.
- **Eksamensbelegg:** Sjanger S7 (4/8, ⭐⭐). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2. Grunnleggende renteregning forutsettes.
  `collapsible` **Symbol- og formelliste:** annuitet = lån · annuitetsfaktor(r, n); nåverdi =
  framtidig beløp · diskonteringsfaktor(r, n) = beløp/(1+r)^n; nedbetalingsplan-kolonnene
  (IB restlån, rente = restlån·r, avdrag = annuitet − rente, UB restlån).
- **Innholdskontrakt (flashcard-kilde):** **annuitetslån** (lik terminbeløp; rente-andelen
  synker og avdrag-andelen stiger over tid), **annuitetsfaktor** (fra rentetabell),
  **nedbetalingsplan** (restlån → rente → avdrag → nytt restlån), **nåverdi/diskontering**
  (hva et framtidig beløp er verdt i dag). Bruk av rentetabell forklares (leseren har ikke
  tabellen utenat — kalkulator tillatt).
- **Oppgavesjangre:** S7 — regn annuitet, sett opp de første 2–3 årene av nedbetalingsplanen,
  hent ut avdrag/rente et gitt år; regn nåverdi av et beløp.
- **Typiske feil:** regne avdrag før rente (avdrag = annuitet − rente); bruke feil
  rentetabellfaktor; forveksle nåverdi- og annuitetsfaktor.
- **Modellsvar:** «En klubb tar opp 800 000 kr som annuitetslån over 5 år til 6 %. Regn
  annuitet, sett opp planen for år 1–2, og oppgi avdraget i år 2.»
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 8.2: Likviditetsbudsjett og balanselikningen
**id:** `nih-spm245-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-1-1`

- **Kapitteltype:** regnekapittel (kunne).
- **Description:** Femlinjers likviditetsbudsjett (innbetalinger, utbetalinger,
  innbetalingsoverskudd, likviditetsreserve IB, likviditetsreserve UB) der avskrivning IKKE
  regnes med, og balanselikningen (AM + OM = EK + LG + KG) der en ukjent post løses ut, samt
  koblingen årsresultat ↔ EK-endring + avsatt utbytte.
- **Eksamensbelegg:** Sjanger S8 (likviditetsbudsjett 3/8, balanselikning 4/8, ⭐⭐). Prioritet:
  kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1 (betalbare vs. kalkulatoriske kostnader — avskrivning).
  `collapsible` **Symbol- og formelliste:** likviditetsreserve UB = IB + innbetalinger −
  utbetalinger; balanselikningen AM + OM = EK + LG + KG; EK_UB = EK_IB + årsresultat − utbytte.
- **Innholdskontrakt (flashcard-kilde):** **likviditetsbudsjettets fem linjer**; **at
  avskrivning ikke er en utbetaling** (kalkulatorisk kostnad, holdes utenfor);
  **balanselikningen** (anleggsmidler + omløpsmidler = egenkapital + langsiktig gjeld +
  kortsiktig gjeld); årsresultat–EK-koblingen.
- **Oppgavesjangre:** S8 — sett opp et femlinjers likviditetsbudsjett fra oppgitte inn-/
  utbetalinger; løs ut en ukjent balansepost; koble årsresultat til EK-endring.
- **Typiske feil:** #6 (tar med avskrivning i budsjettet — hovedadvarsel); regne
  innbetalingsoverskudd feil; glemme utbytte i EK-koblingen.
- **Modellsvar:** «Gitt inn-/utbetalinger for tre måneder (inkl. en avskrivningspost som
  distraktor): sett opp likviditetsbudsjettet og forklar hvorfor avskrivningen ikke er med.»
  **Signal-boks ETTER oppgaven:** «avskrivningsposten var fellen — den skal aldri inn i et
  likviditetsbudsjett».
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 8:** 4 prøver (**Prøve 8.A** annuitet + nedbetalingsplan · **Prøve 8.B**
nåverdi/diskontering · **Prøve 8.C** likviditetsbudsjett (avskrivning som felle) · **Prøve
8.D** balanselikning + EK-kobling). *Én prøve per økt.*

### Del 9 — Selskapsformer og avskrivning *(prioritet: KUNNE ⭐⭐ — 5/8 + 3/8)*

#### Kapittel 9.1: Selskapsformer og avskrivningsmetoder
**id:** `nih-spm245-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm245-0-2`

- **Kapitteltype:** teori-/regnekapittel (kunne).
- **Description:** Selskapsformene (enkeltpersonforetak, ANS/DA, AS) med fordeler/ulemper —
  risiko og skatt som beslutningskriterier — og styringsnivåene i et AS med >200 ansatte;
  samt de fire avskrivningsmetodene (lineær, saldo/degressiv, årssiffer, variabel).
- **Eksamensbelegg:** Selskapsformer S (5/8, ⭐⭐⭐), avskrivning (3/8, ⭐⭐). To rene teori-/
  regne-deloppgaver samlet. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2; for avskrivning som kalkulatorisk kostnad: [Kostnads-
  begreper](/nih-spm245/nih-spm245-1-1). `collapsible` **Symbol- og formelliste:**
  lineær avskrivning = (kostpris − restverdi)/levetid; saldoavskrivning = saldo · sats;
  årssiffermetoden (synkende brøk); variabel (per produsert enhet).
- **Innholdskontrakt (flashcard-kilde):** **enkeltpersonforetak** (ubegrenset personlig
  ansvar, beskattes som personinntekt), **ANS/DA** (deltakeransvar — solidarisk/pro rata),
  **AS** (begrenset ansvar, egen juridisk person, selskapsskatt); **styringsnivåer i stort
  AS** (generalforsamling, bedriftsforsamling, styre, adm. direktør); **avskrivningsmetodene**
  (når hver passer). Risiko og skatt som valgkriterier.
- **Oppgavesjangre:** S — «hvilken selskapsform bør gründeren velge, og hvorfor?» (risiko +
  skatt); «regn lineær og saldoavskrivning for et driftsmiddel og sammenlign».
- **Typiske feil:** #9 (uskarpt enkeltpersonforetak vs. AS; feil kjennetegn på ANS/DA);
  blande avskrivningsmetodene; glemme restverdi ved lineær.
- **Modellsvar:** «To personer starter et treningssenter sammen. Drøft kort ANS vs. AS med
  risiko og skatt som kriterier, og konkluder. Deretter: regn lineær vs. saldoavskrivning
  (25 %) for et apparat til 200 000 kr over tre år.»
- **Kvote:** 18 quiz / 22 flashcards.

**Prøve-kvote Del 9:** 4 prøver (**Prøve 9.A** selskapsformer — kjennetegn · **Prøve 9.B**
selskapsvalg med risiko/skatt + styringsnivåer · **Prøve 9.C** avskrivningsmetoder beregnet ·
**Prøve 9.D** samlet teori/regne på eksamensnivå). *Én prøve per økt.*

### Del 10 — Hjemmeeksamen-modulen *(prioritet: KUNNE/KJENNE — kun hjemme)*

#### Kapittel 10.1: Flervalgstest i regnskapsteori
**id:** `nih-spm245-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm245-4-1`

- **Kapitteltype:** flervalgs-/teoribank (kjenne, kun hjemme).
- **Description:** Regnskapsteorien som testes i hjemmeeksamenens 10-spørsmåls flervalgsblokk:
  mva-behandling, periodisering (kostnad = periodisert utgift), kontantrabatt,
  feriepengeperiodisering, balanseplassering (bankinnskudd skattetrekk = omløpsmiddel),
  skatteeffekt av rentekostnad.
- **Eksamensbelegg:** Sjanger S10 (1/8, ny på hjemme 2526 — teller 20 % der). Prioritet:
  kjenne (men høy avkastning når den kommer). `(verifiser)` om den blir fast.
- **Forkunnskaper/kryssbok:** [Bilagskontering med mva.](/nih-spm245/nih-spm245-4-3),
  [Kostnadsbegreper](/nih-spm245/nih-spm245-1-1). `collapsible` **Symbol- og formelliste:**
  periodiseringsprinsippet, mva.-satsen (25 %), balanseskillet OM/AM.
- **Innholdskontrakt (flashcard-kilde):** **periodisering** (kostnad = periodisert utgift;
  inntekt føres ved levering), **mva-effekt** (utgående − inngående = betalbar mva.),
  **kontantrabatt** (korrigerer varekjøp/-salg), **feriepengeperiodisering** (opptjenes ett
  år, utbetales neste), **balanseplassering** (skattetrekkskonto = bundet omløpsmiddel).
- **Oppgavesjangre:** S10 — 10-spørsmåls flervalgstest med ett riktig alternativ, ingen
  begrunnelse. **Stokket fasit** (jf. README — riktig svar varierer posisjon, aldri «alle
  a»). Distraktorer skal ikke straffe grundig lesing (jf. README — nær-sanne distraktorer
  får fasit-kommentar som forklarer hvorfor de ikke holder).
- **Typiske feil:** #11 (mva.); regne feriepenger i feil periode; plassere skattetrekkskonto
  som gjeld i stedet for eiendel.
- **Modellsvar:** en gjennomgått flervalgstest der hvert riktig svar begrunnes i
  fasit-kommentaren (selv om eksamen ikke krever begrunnelse).
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 10.2: Avisartikkelen og KI-/APA-7-deklarasjonen
**id:** `nih-spm245-10-2` · **number:** 10.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-spm245-0-1`

- **Kapitteltype:** sjanger-/formkravskapittel (kunne, kun hjemme).
- **Description:** De to ikke-regnetekniske hjemmeeksamen-ferdighetene: avisartikkel-oppgaven
  (finn en dagsaktuell artikkel innenfor datovinduet, beskriv den, plasser den i pensum kap.
  1–5, konkluder om forfatteren og Hoff/Helbæk er enige) og korrekt KI-/APA-7-deklarasjon
  med skjermdump.
- **Eksamensbelegg:** Sjanger S11 (avisartikkel 3/8, kun hjemme) + KI-/APA-deklarasjon (fast
  formkrav alle hjemme-sett). Lavvekt, men sikre poeng og lette å miste (#12). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.1 (hjemmeeksamen-formen). Ingen symboler/formler →
  ingen formelliste nødvendig.
- **Innholdskontrakt (flashcard-kilde):** **avisartikkel-malen** (1: beskriv artikkelen; 2:
  plasser i pensum — hvilket kapittel/begrep; 3: konkluder — enig/uenig med pensum, begrunn);
  **datovindu- og aviskravet** (angitte aviser, innenfor tillatt periode); **APA-7-
  referanse** til avisartikkel; **KI-deklarasjon** (kort beskrivelse av bruk + skjermdump som
  vedlegg); **kronologisk svarrekkefølge**.
- **Oppgavesjangre:** S11 — «gitt en (fiktiv, nyskrevet) avisoverskrift om en idrettsklubbs
  økonomi: beskriv, plasser i pensum, konkluder»; formkrav-sjekkliste for KI/APA.
- **Typiske feil:** #12 (manglende KI-/APA-deklarasjon; artikkel utenfor datovindu eller uten
  pensumkobling; svar ikke i kronologisk rekkefølge).
- **Modellsvar:** en utfylt avisartikkel-besvarelse (nyskrevet case) + en korrekt
  KI-deklarasjon som mal.
- **Kvote:** 14 quiz / 12 flashcards.

**Prøve-kvote Del 10:** 4 prøver (**Prøve 10.A** flervalg regnskapsteori sett 1 · **Prøve
10.B** flervalg regnskapsteori sett 2 · **Prøve 10.C** avisartikkel-oppgave (nyskrevet case)
· **Prøve 10.D** KI-/APA-deklarasjon + formkrav-sjekk). *Én prøve per økt.*

### Del 11 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 11.1: Sjangerspillet — løsningsoppskrifter S1–S12
**id:** `nih-spm245-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm245-2-1`

- **Kapitteltype:** sjanger-/oppskriftskapittel (meta).
- **Description:** Én kompakt løsningsoppskrift per oppgavesjanger (S1–S12): gjenkjenn
  sjangeren fra oppgaveteksten → algoritmiske trinn → tidsbudsjett → konklusjonskrav →
  vanligste feil. Studentens hurtigreferanse rett før eksamen.
- **Eksamensbelegg:** Metakapittel (alle sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele Del 2–10. `collapsible` **Samlet oppslagskort:** alle
  formler + sjangeroppskrifter på ett sted (bokas printbare oppslag — utfyller formel-
  minimum-siden i 0.2).
- **Innholdskontrakt:** for hver sjanger S1–S12: én linjes gjenkjenning + nummererte trinn +
  hvor konklusjonssetningen kreves + vanligste feilkode.
- **Oppgavesjangre:** «gjenkjenn sjangeren»-oppgaver: gitt en oppgavetekst, avgjør hvilken
  S-kode og hvilken oppskrift som gjelder.
- **Typiske feil:** velge feil oppskrift (f.eks. selvkost der bidrag var riktig); glemme at
  scenario-sjangre (S1) krever sammenlignende kalkyle.
- **Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 11.2: Øvingseksamen 1 — skoleeksamen (4 t, kandidatnummer-variant)
**id:** `nih-spm245-11-2` · **number:** 11.2 · **estimatedMinutes:** 90 · **prerequisites:** `nih-spm245-11-1`

- **Kapitteltype:** øvingseksamen (komplett sett).
- **Description:** Et komplett, nyskrevet skoleeksamens-sett i eksamensmalen: 4–5 nummererte
  oppgaver med oppgitt prosentvekt (sum 100 %), inkl. en kandidatnummer-styrt CVP-/
  kalkyleoppgave, obligatorisk lønnsføring, én regnskapsanalyse og én mikro-teorioppgave med
  frihåndstegning. Løsningsforslag i `collapsible` per oppgave, skrevet som toppbesvarelse
  med `tip`-notat om delpoeng/vekting.
- **Eksamensbelegg:** Speiler temafordelingen i §2 (en «typisk» skoleeksamen). Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Samlet oppslagskort** (referanse).
- **Innholdskontrakt:** 4–5 oppgaver som dekker CVP (kandidatnummer), lønnsføring, kalkyle
  og/eller regnskapsanalyse, og mikro; hver med vekt, løsning og delpoeng-notat.
  Deklareres som «4 t — kan deles over flere økter ved øving; regn ×1,5 tid ved håndskrift».
- **Oppgavesjangre:** S1, S3, S2/S4, S5, S7/S8 (typisk miks).
- **Typiske feil:** samlet feilregister #1–#12 (selvdiagnose-sjekkliste ☐ etter fasiten).
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 11.3: Øvingseksamen 2 — skoleeksamen (utsatt-profil)
**id:** `nih-spm245-11-3` · **number:** 11.3 · **estimatedMinutes:** 90 · **prerequisites:** `nih-spm245-11-1`

- **Kapitteltype:** øvingseksamen (komplett sett).
- **Description:** Et andre komplett skoleeksamens-sett med annen tema-tyngde (regnskapsanalyse
  + stor CVP-blokk med spesialordre + tilleggskalkyle + lønn), for å drille bredden. Fasit som
  toppbesvarelse.
- **Eksamensbelegg:** Speiler en utsatt-/variantprofil fra §2. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka.
- **Innholdskontrakt:** S4 (regnskapsanalyse), S1 + S12 (CVP + spesialordre), S2
  (tilleggskalkyle), S3 (lønn); vekt + løsning + delpoeng-notat per oppgave. Inneholder
  minst én **A-konklusjon med skarp, veid dom** (ikke bare kompromissform — jf. README).
- **Oppgavesjangre:** S4, S1, S12, S2, S3.
- **Typiske feil:** samlet feilregister (selvdiagnose-sjekkliste ☐ etter fasiten).
- **Kvote:** 12 quiz / 10 flashcards.

#### Kapittel 11.4: Øvingseksamen 3 — hjemmeeksamen (uke, KI/APA) + kald bank
**id:** `nih-spm245-11-4` · **number:** 11.4 · **estimatedMinutes:** 90 · **prerequisites:** `nih-spm245-11-1`

- **Kapitteltype:** øvingseksamen (hjemme-profil) + kald bank.
- **Description:** Et komplett hjemmeeksamens-sett i uke-malen: samme regnekjerne + de to
  hjemme-eksklusive sjangrene (arbeidsbokoppgave-type + avisartikkel) + 10-spørsmåls
  flervalgsblokk + KI-/APA-deklarasjon. I tillegg en **kald bank** (8–10 oppgaver med uvante
  vinklinger/kombinasjoner, UTEN hint, fasit = momentliste) tydelig merket, for toppleseren.
- **Eksamensbelegg:** Speiler hjemmeeksamen-profilen fra §2/§3. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka, særlig Del 10.
- **Innholdskontrakt:** regnekjerne (S1/S2/S3/S4) + S12/arbeidsbok-type + S11 (avisartikkel)
  + S10 (flervalg) + KI-/APA-formkrav; løsning som bestått-nivå besvarelse (vurdert
  bestått/ikke bestått) med **minst én «bestått-på-marginen»-besvarelse** som viser terskelen
  nedenfra (jf. README karakter-realisme). **Kald bank:** merket, uten hint, momentliste-fasit.
- **Oppgavesjangre:** S1–S4, S10, S11, S12 + kald bank.
- **Typiske feil:** #12 (hjemme-formfeil) + samlet register; selvdiagnose-sjekkliste ☐.
- **Kvote:** 12 quiz / 10 flashcards.

**Prøve-kvote Del 11:** de tre øvingseksamenene (11.2–11.4) ER de komplette prøvene for denne
delen (skoleeksamen ×2 + hjemmeeksamen ×1), supplert av sjangerspillets gjenkjennings-
oppgaver (11.1). Til sammen ≥4 komplette eksamensprøver på tvers av begge format.

---

## 4. Kvotesammendrag og summeringskontroll

Per-kapittel-kvotene (fra §3), summert og kontrollregnet:

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 (10/10) · 0.2 (14/16) | 24 | 26 |
| 1 | 1.1 (16/20) · 1.2 (16/20) | 32 | 40 |
| 2 | 2.1 (24/24) · 2.2 (22/24) · 2.3 (20/18) | 66 | 66 |
| 3 | 3.1 (22/24) · 3.2 (22/22) · 3.3 (20/18) | 64 | 64 |
| 4 | 4.1 (24/26) · 4.2 (20/22) · 4.3 (20/18) | 64 | 66 |
| 5 | 5.1 (22/24) · 5.2 (20/22) · 5.3 (20/18) | 62 | 64 |
| 6 | 6.1 (16/18) | 16 | 18 |
| 7 | 7.1 (20/24) · 7.2 (18/20) | 38 | 44 |
| 8 | 8.1 (20/22) · 8.2 (18/20) | 38 | 42 |
| 9 | 9.1 (18/22) | 18 | 22 |
| 10 | 10.1 (16/16) · 10.2 (14/12) | 30 | 28 |
| 11 | 11.1 (14/10) · 11.2 (12/10) · 11.3 (12/10) · 11.4 (12/10) | 50 | 40 |
| **Sum** | **28 kapitler** | **502** | **520** |

**Summeringskontroll (kontrollregnet per-kapittel-sum, ikke påstått totaltall):**
Quiz: 24 + 32 + 66 + 64 + 64 + 62 + 16 + 38 + 38 + 18 + 30 + 50 = **502** (krav ≥500 ✓).
Flashcards: 26 + 40 + 66 + 64 + 66 + 64 + 18 + 44 + 42 + 22 + 28 + 40 = **520** (krav ≥500 ✓).

**Prøver:** 10 temadeler à 4 prøver (Del 1–10) = **40 temaprøver** (≥4 per temadel ✓), pluss
Del 11s 3 komplette øvingseksamener (skoleeksamen ×2 + hjemmeeksamen ×1) + sjangerspill. Del
0 dekkes av øvingseksamenene.

**Studieguide:** Del 0 (kap. 0.1–0.2) + sjangerspillet (11.1) + formel-minimum-siden og det
samlede oppslagskortet utgjør den utfyllende, dekkende studieguiden (eksamenskart,
regnehåndverk, alle formler og alle sjangeroppskrifter samlet).

---

## 5. Byggemerknader (til Opus)

- **Alle tall, case og «modellbesvarelser» er NYSKREVNE.** Analysen inneholder ingen
  ordrette gjengivelser; boka skal heller ikke. Endre tall, bedriftsnavn (bruk
  idrettsklubber/-senter som innpakning), personer og formuleringer.
- **Læringsløkke inline** (Teori → Eksempel → Oppgave i `content[]`), jf. kontrakten øverst.
- **Konklusjonssetning obligatorisk** etter hver vurderingsberegning (sensorkrav 3).
- **Full kontoføring med kontonummer** i Del 4 — kontonr. merket `(verifiser)` mot lærebokens
  kontoplan.
- **Satser** (aga 14,1 %, feriepenger 12 %, mva. 25 %) brukes som i analysen; tidsavhengige
  frister/satser merkes `(verifiser)`.
- **Sannhetskontroll** (jf. §2): TKR–EKR-gearing skrives betinget; nullpunkt kun for pris >
  VEK; risikomargin kan bli negativ — parametersjekk før ubetingede påstander.
- **Figurer** (Del 7): SVG av monopolistens tilpasning + fullkommen konkurranse; kjør
  `upload-media-storage.ts` etter skriving.
- **Stokket fasit** i flervalg (Del 10) og alle ensartede fasitlister; hint på alle oppgaver
  unntatt den merkede kalde banken (11.4).
- **Klikkbare kryssreferanser** kun til kapitler som finnes ved byggetid. NIH-søsken
  (met200 for statistisk/finansmatematisk forkunnskap `(verifiser lenke)`) lenkes kun hvis
  bygget; ellers intern lenking i denne boka.
- **Registrering:** `institusjoner.ts` under Norges idrettshøgskole, visningsnavn «SPM245
  Økonomi»; `hoyskole-disclaimer.tsx` treffer allerede (ikke jus/helse); metadata i
  `textbook-courses-hoyskole.ts` med `level: 'Høyskole'`.

# Bokskjelett: HiØ Statistikk og økonomi (ITD20106 / IRM23116) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i kapitlet
> eller i eksplisitt refererte forkunnskaper (flytt teoribiten tidligere ved
> behov). Autoritativ kilde: README «Leserkrav» + `DNA-regnefag.md`. Unntak:
> øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin egen arketype
> (komplett sett først, løsninger i collapsibles). Kvotene og innholdskontraktene
> i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE
> eksamensarkivet — alt eksamensbelegg som trengs står i dette skjelettet,
> destillert fra `EKSAMENSANALYSE.md` (HiØ-arkivet mai 2012 – januar 2016:
> 8 oppgavesett-par; **fem sett lest maskinelt** — mai 2013, mai 2015, januar
> 2016, mai 2016, mai 2017 — de to sistnevnte med **fullstendige
> løsningsforslag**; øvrige er rene skann uten tekstlag, bekrefter samme mal).
> Alle oppgaver, tall, kontekster og casene i boka skal være **NYSKREVNE** (se
> README «Opphavsrett»): endre tall, produkter, bedriftsnavn og formuleringer.
> Formler, fordelinger og standard faguttrykk er ikke opphavsrettslig vernet og
> brukes fritt.
>
> **Matematisk/statistisk presisjon er kritisk (DNA-regnefag §Matematisk
> sannhetskontroll).** Fortegns-, entydighets- og «alltid mindre/større enn»-
> påstander parametersjekkes numerisk (python3) i modellens FULLE parameterrom
> FØR de skrives ubetinget; betingede påstander får betingelsen skrevet ut.
> Fasiter etterregnes. Usikre faktapåstander merkes `(verifiser)` for fase 6.
>
> **Kildeforbehold (ufravikelig — settes i Del 0, gjentas i øvingseksamenene):**
> To fullstendige løsningsforslag foreligger (mai 2016, mai 2017); for mai 2013,
> mai 2015 og januar 2016 er kun oppgaveteksten lesbar; tre sett + de fleste
> separate fasiter er rene skann uten OCR. **Sensorlogikken (§ sensorkrav) er
> derfor utledet** av de to fullstendige fasitene og de faste oppgaveinstruksene
> («vis alle utregninger», «begrunn svarene»), ikke av en rekke separate
> sensorveiledninger. Der noe er sluttet indirekte, merkes det `(verifiser)`.
> **Ingen «sensorveiledning» skal påstås som kilde ut over de to fasitene** — jf.
> minne «Sannferdige påstander».
>
> **EMNESTATUS / etterfølger-profilering (verifisert mot HiØs emnesider
> 2026-07-11 — `(verifiser)` beholdes fordi status kan endres):** Se § 0 under.
> Kort: den KOMBINERTE statistikk-og-økonomi-koden (ITD20106, senere IRM23116)
> er **utfaset**; det kombinerte emnet finnes ikke lenger som ETT aktivt emne.
> Statistikkhalvdelen er videreført i egne, aktive rene-statistikk-emner
> (ITD20218 «Statistikk og statistisk programmering», V2026; IRM23223
> «Statistikk», V2025), mens økonomihalvdelen er skilt ut i egne
> innovasjons-/økonomiemner. Boka bygges derfor som en **etterfølger-profilert,
> ærlig rammet** bok (samme metode som `tma4106`/`sos1004` i porteføljen):
> statistikkhalvdelen kalibreres mot de aktive rene-statistikk-etterfølgerne,
> og økonomihalvdelen bevares fra det historiske ITD20106/IRM23116-arkivet, som
> ingen bygget bok i porteføljen dekker. Kurs-id beholdes teknisk som
> `hio-statistikk-okonomi`.

---

## 0. Emnestatus, byggeverdighet og etterfølger-profilering (LES FØRST)

Dette avsnittet er byggegrunnlaget for at boka i det hele tatt skrives, og skal
destilleres inn i Del 0 (kap. 0.1) som kildenote + forbehold — aldri skjules.

| Trekk | Status (per 2026-07-11, `(verifiser)`) |
|---|---|
| Kombinert emne (statistikk + økonomi) | ITD20106 (data-ingeniør, Halden) → senere IRM23116 «Statistikk og økonomi» (ingeniør, Fredrikstad). **Begge nå historiske** (siste IRM23116-side: H2021–V2022). |
| Statistikk-etterfølger (AKTIV) | **ITD20218 «Statistikk og statistisk programmering»** (V2026, data-ingeniør) og **IRM23223 «Statistikk»** (V2025, maskin-ingeniør) — begge **rene statistikkemner**, uten bedriftsøkonomi; ITD20218 legger til statistisk programmering. |
| Økonomi-etterfølger | Bedriftsøkonomien er skilt ut i egne innovasjons-/økonomiemner (f.eks. «Innovasjon, bærekraft og økonomi»). **Ingen bygget bok i porteføljen dekker denne bedriftsøkonomi-drillen.** |
| Eksamensarkiv | 8 sett-par (mai 2012 – jan 2016); 5 maskinlest; 2 fulle fasiter (mai 2016, mai 2017). Sterkt nok for kvalitetsanalyse. |

**Hvorfor BYGGE og ikke SKIP (til forskjell fra `fys-mek1110`):** SKIP er
forbeholdt nedlagte emner der etterfølgeren **allerede er dekket av en bygget
bok** (fys-mek1110 → fys1100 fantes ferdig). Her er situasjonen en annen:

1. Det kombinerte emnets **signatur — den integrerte 50/50-strukturen med
   bedriftsøkonomi (kalkyle, dekningsbidrag, investeringsanalyse) og spillteori
   (Cournot/Nash)** — har INGEN aktiv etterfølger og er IKKE dekket av noen
   bygget bok. Etterfølgerne har SPLITTET halvdelene og beholdt bare statistikk.
2. Arkivet er sterkt (5 maskinleste sett + 2 fulle fasiter) og analysen fastslår
   at formen er «representativ for hvordan et kombinert statistikk-og-økonomi-
   emne for ingeniørstudenter blir eksaminert» (EKSAMENSANALYSE innledning).
3. Etterfølger-profilerings-presedens (`tma4106`, `tma4111`, `sos1004`): en
   utfaset kode med sterkt arkiv og uten ekvivalent bygget bok bygges — ærlig
   rammet mot dagens form.

**Etterfølger-profileringen (hvordan halvdelene kalibreres):**

- **Statistikkhalvdelen (Del 1–6)** kalibreres mot de AKTIVE rene-statistikk-
   etterfølgerne (ITD20218/IRM23223). Kjernen — sannsynlighet, diskrete
   fordelinger, normalfordeling, KI, hypotesetest, regresjon — er identisk i
   gammelt og nytt emne, og bæres av samme lærebok (Løvås, *Statistikk for
   universiteter og høgskoler*). **Statistisk programmering (Excel/ny statistisk
   programvare) berøres bare som «bør kjenne til»** i Del 0-forbeholdet, fordi
   det er et tillegg i den nye ITD20218-formen som IKKE lå i ITD20106-arkivet —
   boka skal ikke oppdikte programmerings-eksamensbelegg (merk `(verifiser)`).
- **Økonomihalvdelen (Del 7–11)** bevares fra ITD20106/IRM23116-arkivet, der
   den er godt dokumentert (to fulle fasiter). Frekvenser merkes «per
   ITD20106-arkivet 2012–2016». Spillteori (Cournot/Nash) er emnets mest
   uvanlige innslag og beholdes fordi det er sterkt belagt (3/5 sett).

**Byggefase-forbehold (settes i Del 0):** frekvensene gjelder ITD20106-arkivet
(mai 2012 – januar 2016); den aktive statistikk-etterfølgeren kan ha justert
form (f.eks. 3–4 t, ett A4-ark, statistisk programmering). Byggefasen bør
skaffe og verifisere mot ITD20218/IRM23223-sett før boka meldes helt ferdig.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `hio-statistikk-okonomi` (beholdes teknisk; emnet er utfaset, se § 0) |
| Tittel | **HiØ Statistikk og økonomi (ITD20106 / IRM23116) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Høgskolen i Østfold (HiØ). Visningsnavn i `institusjoner.ts`: «ITD20106 / IRM23116 Statistikk og økonomi». |
| Arketype | **Regnefag** (`DNA-regnefag.md`), **to-spors-variant**: statistikkbolk (Del 1–6) + økonomibolk (Del 7–11) er faglig uavhengige og drilles parallelt. Ingen figur-tung grafisk analyse er obligatorisk, men **nåverdiprofil** og **reaksjonslikninger/Nash** krever enkle skisser (SVG anbefalt der analysen peker på graf). |
| Antall kapitler | **30** (Del 0: 2 · statistikkbolk Del 1–6: 14 · økonomibolk Del 7–11: 11 · eksamenstrening Del 12: 3) |
| Estimert totaltid | **~1 720 min ≈ 29 timer** (per kapittel under) |
| Quiz totalt | **502** (krav ≥500) |
| Flashcards totalt | **552** (krav ≥500) |

**Pitch (ett avsnitt):** Dette er **to fag i ett** — nominelt 150 timer
statistikk + 150 timer bedriftsøkonomi — og hvert eksamenssett er delt tilnærmet
**50/50** mellom en statistikkbolk og en økonomibolk som sjelden krysser
hverandre. Konsekvensen for lesestrategi er avgjørende: **ingen kandidat kan
velge bort en halvdel** — vektingen deler settet midt på, så bredde over begge
løp belønnes mer enn dybde i det ene. Statistikkbolken følger et klassisk
innførings-løp: sannsynlighet/kombinatorikk → diskrete fordelinger →
normalfordeling → estimering (KI) → hypotesetest → regresjon, der **hypotesetest
(5/5) og diskrete fordelinger med begrunnet fordelingsvalg (5/5) er tilnærmet
garantert i hvert sett**. Økonomibolken følger et driftsregnskaps-løp:
produktkalkyle → dekningsbidragsanalyse → **investeringsanalyse (nåverdi/
internrente, 4/5)** → optimering/regnskap → **spillteori (Cournot/Nash, 3/5)**.
Hjelpemidlene er **alle trykte/skrevne + kalkulator**, og statistiske tabeller
(standardnormal, t, Poisson) ligger vedlagt — så poengene ligger ikke i å huske
tabellverdier, men i å **velge rett tabell og rett kvantil** og **vise alle
mellomregninger med begrunnelse**. Boka er bygd baklengs fra det de to fulle
fasitene (mai 2016, mai 2017) faktisk premierer: definer notasjon/hendelser
først, begrunn fordelings- og testvalg uoppfordret, og konkluder i klartekst i
oppgavens kontekst.

**Kritisk hjelpemiddel-regel (gjelder HELE boka):** **Alle trykte og skrevne
hjelpemidler + kalkulator.** Statistiske tabeller (standardnormal, t, Poisson)
er VEDLAGT hvert sett. Boka skal derfor **ikke** trene tabellpugg, men
**tabell- og kvantilvalg**: hvilken tabell (standardnormal / t / Poisson) og
hvilket kvantil ($z_{\alpha}$, $t_{\alpha,n-1}$) som gjelder. **Formelsamling er
tillatt** — men boka bygger likevel automatiserte hoderutiner, fordi tempoet
(7–8 hovedoppgaver på 4 timer) ikke gir rom for oppslag i hver deloppgave.
`(verifiser)`: den aktive statistikk-etterfølgeren kan begrense til «Løvås + ett
A4-ark» (IRM23223) — flagges i Del 0.

**Kritisk notasjonsregel (emnets faste apparat — settes i kap. 0.2, brukes
overalt):**
- **$N(\mu, \sigma)$ med STANDARDAVVIK som andre argument.** $N(75, 6)$ betyr
  $\sigma = 6$; $N(250, 12)$ betyr $\sigma = 12$. (Motsatt av kurs som oppgir
  varians — dette skal deklareres eksplisitt i kap. 0.2 og gjentas ved første
  bruk i Del 3, jf. DNA-regnefag §Enhets- og konvensjonsvalg.)
- Den **kumulative standardnormalen** skrives $G(z)$ i fasitene ($= \Phi(z)$).
  Tabellen gir $G(z)$ for $z \ge 0$; halesannsynligheter finnes med symmetri og
  komplement.
- Norske fagtermer gjennomgående (fra fasitene): **forventningsverdi**,
  **standardavvik**, **testobservator**, **forkastningsområde/kritisk verdi**,
  **signifikansnivå**, **frihetsgrader**, **konfidensintervall**; økonomi:
  **dekningsbidrag (DB)**, **dekningsgrad (DG)**, **dekningspunkt/nullpunkt**,
  **sikkerhetsmargin**, **tilleggssats**, **tilvirkningsmerkost**, **selvkost**,
  **kalkulasjonsrente/avkastningskrav**, **nåverdi**, **internrente**,
  **kontantstrøm**. All matematikk i LaTeX (`$...$`).

**Bevisst nedprioritert (begrunnes i Del 0):** **Statistisk programmering**
(ny i ITD20218) — kun nevnt i Del 0-forbeholdet, ikke bygget som eget kapittel
(ikke belagt i ITD20106-arkivet; `(verifiser)`). **To-utvalgs/paret
sammenligning** (1/5), **type I/II-drøfting** (1/5), **simultanfordeling** (1/5),
**normaltilnærming til binomisk** (1/5) — reelle, men lavfrekvente; hver får
plass som seksjon i et større kapittel, ikke egen del.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen), IKKE frekvens:
sannsynlighet før fordelinger; fordelinger og normalfordeling før estimering;
estimering før hypotesetest; kalkyle før dekningsbidrag; grunnkalkyle før
investering; derivasjonsapparatet før optimering og spillteori. **Frekvensen
styrer omfanget:** «må beherskes perfekt»-temaene (diskrete fordelinger,
hypotesetest, investeringsanalyse) får hver sin del med teori- **og**
drillkapittel og høyest kvote; lavfrekvent stoff får kompakte seksjoner. De to
bolkene er faglig uavhengige og kan leses i vilkårlig rekkefølge (sies i Del 0).

| Del | Tittel | Kap. | Bolk | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|---|
| 0 | Eksamenskart og verktøykasse | 2 | meta | perfekt (meta) | Formen (4 t, 50/50, alle hjelpemidler + vedlagte tabeller), notasjonen ($N(\mu,\sigma)$-konvensjonen, $G(z)$), temafrekvensene, sensorkravene, kildeforbeholdet og etterfølger-profileringen (§ 0) må etableres FØR fagstoffet. |
| 1 | Sannsynlighetsregning | 2 | stat | kunne (4/5) | Kombinatorikk, betinget, total sannsynlighet, Bayes, «minst én» via komplement (sjanger A). Fundament for alle fordelinger. |
| 2 | Diskrete fordelinger | 3 | stat | **perfekt (5/5)** | Binomisk / hypergeometrisk (m/endelig-pop-korreksjon) / Poisson (m/rate-skalering) med **begrunnet fordelingsvalg** + drillkapittel. Én av to garanterte statistikk-søyler (sjanger B). |
| 3 | Normalfordeling | 2 | stat | kunne (3/5) | Standardisering, $G(z)$-oppslag, omvendt kvantilproblem (sjanger C) + normaltilnærming/sentralgrenseteorem. Bro til KI og test. |
| 4 | Estimering og konfidensintervall | 2 | stat | kunne (3/5) | KI (Z ved kjent $\sigma$, t ved ukjent) + utvalgsstørrelse-drill (sjanger D). Forutsetning for testkapitlets kritisk-verdi-valg. |
| 5 | Hypotesetesting | 3 | stat | **perfekt (5/5)** | Firetrinnsmalen: Z/T-test, andelstest, p-verdi, type I/II + testdrill (sjanger E, F, I). Tyngste enkeltkomponent i hvert sett. |
| 6 | Regresjon og simultanfordeling | 2 | stat | kjenne (2/5, 1/5) | Enkel lineær regresjon + korrelasjon (sjanger H, m/avansert KI for forventet Y) og simultanfordeling/kovarians (sjanger G). Differensierer mot topp. |
| 7 | Produktkalkyle | 2 | øk | kunne (3/5) | Selvkost- og bidragskalkyle med tilleggssatser + kalkyledrill (sjanger J). Fundament for dekningsbidrag. |
| 8 | Dekningsbidragsanalyse | 2 | øk | kunne (3/5) | DB, DG, dekningspunkt, sikkerhetsmargin, trangfaktor + DB-drill (sjanger K). |
| 9 | Investeringsanalyse | 3 | øk | **perfekt (4/5)** | Kontantstrøm → nåverdi → nåverdiprofil → internrente → tilbakebetaling + drill (sjanger L). Ø`konomibolkens tyngste søyle. |
| 10 | Optimering, regnskap og nøkkeltall | 2 | øk | kunne (2/5) | Profitt-/kostnadsoptimering ved derivasjon (sjanger M) + resultatbudsjett/nøkkeltall/Du Pont (sjanger N). |
| 11 | Spillteori | 2 | øk | kunne (3/5) | Cournot-/duopol-Nash m/reaksjonslikninger + matrisespill/blandede strategier + drill (sjanger O). Emnets mest uvanlige, men faste innslag. |
| 12 | Eksamenstrening | 3 | begge | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–O) + **2 komplette øvingseksamener** (7–8 oppgaver, 50/50, full fasit i A-stil). |

Rasjonale: de tre «må beherskes perfekt»-temaene (diskrete fordelinger,
hypotesetest, investeringsanalyse) får hver sin del med drillkapittel og høyest
kvote; kalkyle+DB (3/5 hver) og spillteori (3/5) får full del uten dobbelt
drillkapittel; lavfrekvent stoff (simultanfordeling, type I/II) legges som
seksjoner. **Hele bredden testes hvert sett** — prioriteringen styrer dybde og
drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og verktøykasse |
| 1 | Sannsynlighetsregning |
| 2 | Diskrete fordelinger |
| 3 | Normalfordeling |
| 4 | Estimering og konfidensintervall |
| 5 | Hypotesetesting |
| 6 | Regresjon og simultanfordeling |
| 7 | Produktkalkyle |
| 8 | Dekningsbidragsanalyse |
| 9 | Investeringsanalyse |
| 10 | Optimering, regnskap og nøkkeltall |
| 11 | Spillteori |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**Statistikk:** **A** Sannsynlighetsregning (kombinatorikk, betinget, total
sannsynlighet, Bayes, «minst én» via komplement) · **B** Diskret fordeling med
begrunnet fordelingsvalg (binomisk/hypergeometrisk/Poisson) · **C**
Normalfordeling og standardisering (inkl. omvendt kvantilproblem) · **D**
Konfidensintervall (Z eller t; utvalgsstørrelse) · **E** Hypotesetest etter fast
oppskrift (Z/T/andel; ensidig/tosidig) · **F** p-verdi (beregning + tolkning) ·
**G** Simultanfordeling (E/Var, kovarians, korrelasjon, uavhengighet) · **H**
Enkel lineær regresjon (korrelasjonskoeffisient + regresjonslinje; avansert KI
for forventet Y) · **I** Type I-/type II-feil i kontekst.
**Økonomi:** **J** Produktkalkyle (selvkost/bidrag, tilleggssatser) · **K**
Dekningsbidragsanalyse (DB/DG/dekningspunkt/sikkerhetsmargin/trangfaktor) · **L**
Investeringsanalyse (kontantstrøm/nåverdi/internrente/nåverdiprofil/
tilbakebetaling) · **M** Kostnads-/inntekts-/profittoptimering (derivasjon) ·
**N** Regnskaps-/budsjettanalyse med nøkkeltall (Du Pont, avskrivning) · **O**
Spillteori (Cournot-/duopol-Nash, reaksjonslikninger; matrisespill, dominerte/
blandede strategier).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** utledet av de to fullstendige løsningsforslagene (mai 2016,
> mai 2017) og de faste oppgaveinstruksene, ikke av en rekke separate
> sensorveiledninger. Premisser sluttet indirekte er merket `(verifiser)`.

1. **Vis alle mellomregninger.** Hvert sett gjentar at framgangsmåte skal fram —
   rent svar uten regnetrinn gir begrenset uttelling. Fasitene skriver hvert
   trinn (definisjon → innsatte tall → resultat).
2. **Begrunn svarene, også uoppfordret.** Forklar valg av fordeling, valg av Z
   vs. T, valg av ensidig vs. tosidig — selv der det ikke spørres eksplisitt.
3. **Definer notasjon og hendelser først.** Navngi hendelser ($F$, $E$) eller
   parametere ($\mu_0$, $p_0$) før regningen — gir uttelling i seg selv.
4. **Konkluder i oppgavens kontekst.** «Forventet vekt er under 250 g»,
   «fylkeslegen har grunn til å reagere» — aldri bare «forkast $H_0$».
5. **Gjør egne, begrunnede forutsetninger ved uklarhet** — men skriv dem ned og
   begrunn dem (særlig i budsjett- og drøfteoppgaver).
6. **Riktig tabell og kvantil er metodesignalet.** Poengene ligger i å velge rett
   tabell (standardnormal / t / Poisson) og rett kvantil, ikke i å huske tall.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** Velge **binomisk der hypergeometrisk kreves** (trekking uten
tilbakelegging fra liten populasjon; sjekk $N > 10n$). · **#2** Bruke **Z der T
kreves** (ukjent $\sigma$, lite utvalg → $t$ med $n-1$ frihetsgrader). · **#3**
**Tosidig test på ensidig spørsmål** («har økt», «er lavere enn», «overskrider»
→ ensidig). · **#4** **Glemme rate-skalering i Poisson** (timerate på et kvarter
uten å gange med $t$). · **#5** **Glemme endelig-populasjonskorreksjonen**
$\frac{N-n}{N-1}$ i hypergeometrisk varians. · **#6** **Slurve med «minst én» /
«mer enn»** (ikke bruke komplement; ikke skille $P(X>k)$ fra $P(X\ge k)$). ·
**#7** **Ta med sunk cost** i investeringsanalysen (allerede påløpt
markedsundersøkelse). · **#8** **Glemme arbeidskapital/omløpsmidler** i
kontantstrømmen (ut i år 0, frigjort i sluttåret). · **#9** **Feil grunnlag for
tilleggssats** (salgs-/adm.-påslag av salgspris i stedet for tilvirkningsmerkost).
· **#10** **Feil trangfaktor-rangering** (DB per enhet i stedet for DB per enhet
*av den knappe faktoren*). · **#11** **Regne Nash uten å derivere mhp. egen
variabel** (behandle motpartens mengde/pris som variabel i egen
førsteordensbetingelse). · **#12** **Regne uten ord** — riktig tall uten
definisjon, begrunnelse og kontekst-konklusjon gir aldri full uttelling.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i to-spors-variant.** DNA-regnefag beholdes uendret
   (Del 0 → temadeler etter avhengighet → eksamenstrening; drillkapittel for
   hver «perfekt»-søyle; øvingseksamener; frekvensstyrt vekting). Den ene
   tilpasningen er at boka har **to faglig uavhengige spor** (statistikk Del 1–6,
   økonomi Del 7–11) — Del 0 sier eksplisitt at de kan leses i vilkårlig
   rekkefølge, og hver øvingseksamen speiler 50/50-malen.
2. **«Symbol- og formelliste» per delkapittel (DNA-krav) — beholdes.** Hvert
   delkapittel med symboler/formler får en `collapsible` **Symbol- og
   formelliste** SIST, med åpningsnotisen «Oppslagsverk — alt her forklares
   underveis i kapitlet.» Statistikk- og økonomidelene har hver sitt
   symbolapparat; listen er per delkapittel (ikke arv).
3. **Tabellvedlegg-realisme.** Fordi standardnormal-, t- og Poisson-tabeller er
   VEDLAGT, skal eksempler og oppgaver **oppgi de tabellverdiene de trenger**
   (f.eks. «$G(1{,}96)=0{,}975$», «$t_{0{,}05;\,7}=1{,}895$») slik at leseren
   trener på VALG og INNSETTING, ikke på tabelloppslag. Deklareres i Del 0.
4. **Figurkrav (DNA-regnefag §Figurkrav) — begrenset, men reell.** To steder
   krever grafisk analyse: **nåverdiprofilen** (NV som funksjon av rente, med
   internrenten der kurven krysser null) i Del 9, og **reaksjonslikningene/
   Nash-punktet** (to reaksjonslinjer som krysser) i Del 11. Disse SKAL ha
   statiske SVG-figurer i `public/images/textbook/hio-statistikk-okonomi/`
   (akser `#6b7280`, norsk tekst, transparent bakgrunn, viewBox ~480×360;
   valider XML; kjør `npx tsx scripts/upload-media-storage.ts` etter). Øvrige
   temaer er ikke figur-avhengige.
5. **Ingen oppdiktede tall eller «sensorveiledninger».** Alle oppgavetall er
   nyskrevne; kun de to fulle fasitene (mai 2016, mai 2017) omtales som
   løsningskilder — aldri «sensorveiledninger» ut over disse (jf. minne
   «Sannferdige påstander»). Usikre påstander merkes `(verifiser)`.

### Kapittel-DNA A — teori-/metodekapittel (flertallet av kapitlene)

Obligatorisk blokk-rekkefølge, i LÆRINGSLØKKER (jf. kontrakten øverst):

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (A–O) temaet inngår
   i, hva sensor ser etter. Fylles fra Eksamensbelegg — forfatteren finner IKKE
   på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker
   (README-leserkrav). I sene/tunge kapitler VISES de 2–3 nøkkelformlene ferdig
   oppfrisket («Sist du var her»).
3. `text` **Motivasjon** — kort (maks 2–3 avsnitt): hvilket spørsmål verktøyet
   besvarer, gjerne rammet i et hverdagsanker (fyllmengde, kaffeposer, bedrift).
4. **Løkke × (metode):** `definition`/`theorem` (begrepet i ORD først, formelen
   etter) → `example` på nettopp den metoden (A-besvarelses-stil: definer →
   innsatte tall → resultat → kontekst-konklusjon) → `exercise` INLINE på samme
   metode. Deretter neste metode, til alt stoffet er dekket.
5. `warning` **Typiske feil** — feilkodene (#1–#12) som gjelder temaet; glosses
   ved første bruk i HVERT kapittel («#2 — Z der T kreves»).
6. `collapsible` **Symbol- og formelliste** (SIST) — alle symboler/formler i
   delkapitlet, oppslagsnotis.
7. `exercise`-pulje (kan samles til slutt som stigende drill): 2–3 innøving
   (lett), 2–4 standard (middels), 2–4 eksamensklone (vanskelig, samme
   sjanger/vekt, nyskrevne tall). Alle med `solution` + `hints` (første hint =
   formelen/første grep, aldri konklusjonen).

### Kapittel-DNA B — drillkapittel (2.3, 5.3, 9.3)

1. `tip` Eksamensvinkel: hvilke varianter av sjangeren som har forekommet.
2. `text` **Forkunnskaper** + `collapsible` Symbol-/formelliste (sjangerens
   apparat i kortform).
3. `text` **Løsningsoppskrift** — algoritmisk fremgangsmåte (nummererte trinn,
   ett trinn = ett sensor-moment), avsluttet med kontekst-konklusjonsmalen.
4. `example` **Gjennomregnet eksamenscase** med sensor-margnotater om hva som gir
   uttelling ved hvert steg.
5. `warning` **Typiske feil** (feilkodene for sjangeren).
6. `exercise` × 8–15 varianter på eksamensnivå, alle med `solution` + `hints`;
   inkl. minst noen merket «(krevende)» og bidrag til den kalde banken (Del 12).

Eksamenstreningskapitlene (Del 12) har egne oppsett — se §3 og §4.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–O) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per ITD20106-
> arkivet 2012–2016». **Innholdskontrakt** = definisjoner/formler som SKAL med
> (flashcard-kilden = toppnivå `definition`-blokker med `title`). **Sjangre** =
> oppgavetypene kapitlet driller. **Kvote** = quiz/flashcards. Kryssbok-lenker
> merkes `(verifiser lenke)` der usikre.

### Del 0 — Eksamenskart og verktøykasse *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes Statistikk og økonomi
**id:** `hio-statistikk-okonomi-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (studentens prioriteringsverktøy).
- **Description:** Eksamensformen (4 t skriftlig, alle hjelpemidler + kalkulator,
  vedlagte tabeller, 7–8 hovedoppgaver ~50/50 statistikk/økonomi), de to
  garanterte statistikk-søylene + investeringsanalyse, temafrekvensene,
  sensorkravene, kildeforbeholdet og etterfølger-profileringen (§ 0) — verktøyet
  som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet). Skal formidle: (a) **formen** —
  4 t, alle hjelpemidler + kalkulator, tabeller VEDLAGT, 7–8 hovedoppgaver /
  18–23 deloppgaver, to vektemodeller (lik vekt per deloppgave vs. prosentvekt
  per hovedoppgave — begge må påregnes), karakter A–F, forkurs (4 av 6 øvinger
  godkjent for adgang); (b) **50/50-signaturen** — statistikk- og økonomibolk
  faglig uavhengige, INGEN halvdel kan velges bort; (c) **de garanterte
  søylene** — hypotesetest (5/5), diskret fordeling m/fordelingsvalg (5/5),
  investeringsanalyse (4/5); (d) **temafrekvenstabellen** (av 5 maskinleste sett;
  §2A/§2B); (e) **sensorkravene** (§2); (f) **kildeforbeholdet** — 2 fulle
  fasiter (mai 2016, mai 2017), 3 sett kun oppgavetekst, 3 rene skann →
  sensorlogikk utledet `(verifiser)`; (g) **etterfølger-profileringen** (§ 0):
  kombinert emne utfaset, statistikk-halvdel aktiv i ITD20218/IRM23223 (rene
  statistikkemner + statistisk programmering), økonomi-halvdel skilt ut;
  frekvenser gjelder ITD20106-arkivet; byggefase bør verifisere mot etterfølger-
  sett `(verifiser)`. Prioritet: perfekt (meta).
- **Innholdskontrakt (Del 0-pakken, README «Leserkrav»):** (a)
  **orienteringsboks** «Slik leser du denne boka» (type `tip`, IKKE
  `definition`): forklarer karakterskalaen (C er god og vanlig karakter — jf.
  Karakter-realisme), sjangerkodene A–O i kompakt liste, feilregisteret #1–#12,
  og rammer inn tunge symboler («du trenger ikke forstå $G(z)$, $t_{\alpha,n-1}$
  eller reaksjonslikninger ennå»); (b) **kildenote** for frekvens-empirien
  (hvilke sett/fasiter, med etterfølger-forbeholdet fra § 0 — ALDRI oppdiktet);
  (c) **«Lite tid?»-boks** (type `tip`): hurtigrute 3–5 dager (prioritér de tre
  perfekt-søylene + kalkyle/DB; lesetid ×1,5 for håndskrift); (d) **deltidsrute**
  10–12 uker (~8 t/uke) med de 2 øvingseksamenene fordelt på ulike økter; (e)
  **prosedyre-/sjangerkort på ÉN side** (sjanger A–O → én linjes oppskrift →
  tidsbudsjett → vanligste feil); (f) **«lese mye, skrive lite»-boks** (les
  oppgave → formuler svar mentalt → les fasit som sensor; skriv minst én
  øvingseksamen for hånd på tid). Prognose for neste sett: «nesten sikkert én
  sannsynlighets-/fordelingsoppgave, én normalfordelings-/KI-oppgave, én full
  hypotesetest med p-verdi, én kalkyle-/DB-oppgave, én investeringsanalyse, og
  enten en optimerings-, regnskaps- eller spillteorioppgave». Ingen
  forkunnskapsblokk (metakapittel).
- **Sjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «gitt 4 t og 7–8
  oppgaver med 50/50-vekt, sett opp tidsbudsjett og rekkefølge»; «avgjør av en
  oppgavetekst hvilken tabell (standardnormal/t/Poisson) som trengs».
- **Typiske feil:** Metafeilene: velge bort en halvdel (settet deler 50/50);
  regne uten ord (#12); tro at ITD20106-frekvensene er ferske (les etterfølger-
  forbeholdet); pugge tabellverdier (de er vedlagt — tren VALG).
- **Kvote:** 12 quiz / 12 flashcards (formfakta, 50/50-signaturen, temafrekvens,
  sensorkravene, sjangerkodene, kildeforbeholdet, etterfølger-profileringen).

#### Kapittel 0.2: Verktøykassen — notasjon, tabellvalg og regneoppsett
**id:** `hio-statistikk-okonomi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-statistikk-okonomi-0-1`

- **Kapitteltype:** verktøykapittel (meta — notasjon + oppsett-standard).
- **Description:** Den felles notasjonen og oppsettstandarden begge bolker bruker:
  $N(\mu,\sigma)$-konvensjonen (standardavvik som andre argument), $G(z)$ for
  kumulativ standardnormal, tabellvalg-regelen (standardnormal/t/Poisson), og den
  faste firetrinns-strukturen for regneoppgaver (definer → sett opp → regn →
  konkluder i kontekst).
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1–4, 6 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; grunnleggende sannsynlighet og derivasjon
  fra videregående — [Sannsynlighet](/s1/s1-4-1) `(verifiser lenke)`,
  [Derivasjon](/r1/r1-3-1) `(verifiser lenke)`. `collapsible` **Symbol- og
  formelliste:** notasjonssymbolene ($\mu$, $\sigma$, $\sigma^2$, $\bar X$, $s$,
  $n$, $\lambda$, $z_\alpha$, $t_{\alpha,n-1}$, $G(z)$; DB, DG, NV, IR).
- **Innholdskontrakt (flashcard-kilde):** **$N(\mu,\sigma)$-konvensjonen** (andre
  argument = standardavvik, IKKE varians — sjekkes ved «$N(250,12) \Rightarrow
  \sigma=12$»); **$G(z)$** (kumulativ standardnormal, tabell gir $z\ge 0$,
  symmetri $G(-z)=1-G(z)$, komplement $P(Z>z)=1-G(z)$); **tabellvalg-regelen**
  (kjent $\sigma$ eller stort $n$ → standardnormal; ukjent $\sigma$, lite $n$ →
  t med $n-1$ frihetsgrader; teller av sjeldne hendelser → Poisson);
  **firetrinns-oppsettet** for regneoppgaver (1: definer parameter/hendelse; 2:
  sett opp formel/testobservator og begrunn valget; 3: sett inn tall og regn; 4:
  konkluder i oppgavens kontekst); **kalkulator-/hjelpemiddel-rammen** (alt
  tillatt, men tempo krever hoderutiner).
- **Løsningsprosedyre:** vis firetrinns-oppsettet på ett minimalt eksempel fra
  hver bolk (statistikk: standardiser og slå opp $G(z)$; økonomi: DB per enhet →
  resultat).
- **Typiske feil:** #12 (regne uten ord); forveksle $N(\mu,\sigma)$ med
  $N(\mu,\sigma^2)$; slå opp $G(z)$ for $z<0$ uten symmetri; velge tabell før
  man har sjekket om $\sigma$ er kjent.
- **Modellsvar:** «Gitt $N(75,6)$: hva er $\mu$ og $\sigma$? Finn $P(X<75)$ uten
  tabell (symmetri)»; «Sett opp firetrinns-skjelettet for en test der $\sigma$ er
  ukjent og $n=8$ — hvilken tabell og hvor mange frihetsgrader?».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Sannsynlighetsregning *(bolk: statistikk · prioritet: KUNNE — 4/5)*

#### Kapittel 1.1: Sannsynlighetsregning — regneregler, betinget, total og Bayes
**id:** `hio-statistikk-okonomi-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-0-2`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** Addisjonssetningen med overlapp, komplement, betinget
  sannsynlighet, uavhengighet, **total sannsynlighet** og **Bayes** for omvendt
  betinging — kjerneverktøyene i sjanger A, og forutsetning for fordelingsvalg.
- **Eksamensbelegg:** Sjanger A (4/5, 80 %). Union med overlapp (avislesing),
  total sannsynlighet $P(A)=\sum P(A\mid B_i)P(B_i)$ og Bayes (defekte motorer;
  fransk turist ved Eiffeltårnet), «bare X»/«verken» via Venn. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Sannsynlighet](/s1/s1-4-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $P(A\cup B)$,
  $P(A\cap B)$, $P(A\mid B)$, komplement $A^c$, $\sum P(A\mid B_i)P(B_i)$.
- **Innholdskontrakt (flashcard-kilde):** **addisjonssetningen**
  $P(A\cup B)=P(A)+P(B)-P(A\cap B)$; **komplement** $P(A^c)=1-P(A)$; **betinget**
  $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$; **uavhengighet** $P(A\cap B)=P(A)P(B)$;
  **total sannsynlighet** $P(A)=\sum_i P(A\mid B_i)P(B_i)$ (partisjon);
  **Bayes** $P(B_j\mid A)=\dfrac{P(A\mid B_j)P(B_j)}{\sum_i P(A\mid B_i)P(B_i)}$;
  **«minst én» via komplement** $P(\text{minst én})=1-P(\text{ingen})$.
- **Løsningsprosedyre:** (1) navngi hendelsene; (2) skriv gitte sannsynligheter;
  (3) velg regel (union/betinget/total/Bayes); (4) regn og konkluder i kontekst.
- **Typiske feil:** #6 (glemme komplement ved «minst én»; blande $P(A\mid B)$ og
  $P(B\mid A)$ — Bayes-fellen); glemme overlappsleddet i union.
- **Modellsvar:** «55 % leser papiravis, 49 % nettavis, 27 % begge. Finn andelen
  som verken leser papir eller nett, og andelen som *bare* leser nett» (union +
  komplement); «Tre fabrikker leverer motorer med ulik defektrate — en motor er
  defekt; finn sannsynligheten for at den kom fra fabrikk B» (Bayes).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.2: Kombinatorikk og sammensatte sannsynlighetsoppgaver
**id:** `hio-statistikk-okonomi-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-statistikk-okonomi-1-1`

- **Kapitteltype:** teori-/metodekapittel (kunne → grunnlag for Del 2).
- **Description:** Kombinatorikk (permutasjoner, kombinasjoner, binomialkoeffisient)
  og hvordan den kobles til sannsynlighet — grunnlaget for binomisk og
  hypergeometrisk fordeling i Del 2.
- **Eksamensbelegg:** Del av sjanger A (4/5); direkte forutsetning for sjanger B
  (5/5). «Velge 3 av 40», antall sitteordninger. Prioritet: kunne (grunnlag for
  perfekt-tema).
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  $n!$, $\binom{n}{k}$, permutasjon $\frac{n!}{(n-r)!}$.
- **Innholdskontrakt (flashcard-kilde):** **fakultet** $n!$; **permutasjon**
  (rekkefølge teller) $\frac{n!}{(n-r)!}$; **kombinasjon/binomialkoeffisient**
  (rekkefølge teller ikke) $\binom{n}{k}=\dfrac{n!}{k!(n-k)!}$; kobling til
  uniform sannsynlighet (gunstige/mulige); når kombinatorikk gir en binomisk vs.
  hypergeometrisk situasjon (med/uten tilbakelegging — bro til 2.2).
- **Løsningsprosedyre:** (1) teller rekkefølge? → permutasjon vs. kombinasjon;
  (2) med/uten tilbakelegging?; (3) sett opp gunstige/mulige; (4) regn.
- **Typiske feil:** blande permutasjon og kombinasjon; glemme at trekking uten
  tilbakelegging peker mot hypergeometrisk (#1, forvarsel til 2.2).
- **Modellsvar:** «På hvor mange måter kan en jury på 3 velges av 40 søkere?»
  ($\binom{40}{3}$); «I en gruppe på 8 skal 5 sitte på rad — hvor mange
  ordninger?» (permutasjon).
- **Kvote:** 18 quiz / 22 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A regneregler + betinget · 1.B total
sannsynlighet + Bayes · 1.C kombinatorikk + «minst én» · 1.D samlet
sannsynlighetsprøve på eksamensnivå). Hver ~25–35 min, nyskrevne tall.

### Del 2 — Diskrete fordelinger *(bolk: statistikk · prioritet: PERFEKT — 5/5)*

#### Kapittel 2.1: Binomisk fordeling
**id:** `hio-statistikk-okonomi-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-1-2`

- **Kapitteltype:** teori-/metodekapittel (perfekt).
- **Description:** Binomisk fordeling (n uavhengige forsøk, konstant p):
  sannsynlighet, forventning, varians, og situasjonsgjenkjenning — den første av
  tre fordelinger i den garanterte sjanger B.
- **Eksamensbelegg:** Sjanger B (5/5, 100 % for diskret fordeling; binomisk
  konkret i mai 2013, mai 2015, mai 2017-6). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.2 (binomialkoeffisient). `collapsible`
  **Symbol- og formelliste:** $X\sim \text{Bin}(n,p)$, $\binom{n}{k}$, $E$, $\text{Var}$.
- **Innholdskontrakt (flashcard-kilde):** **binomisk situasjon** (fast antall $n$
  uavhengige forsøk, to utfall, konstant $p$); **punktsannsynlighet**
  $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$; **forventning** $E(X)=np$; **varians**
  $\text{Var}(X)=np(1-p)$; kumulativ $P(X\le k)$ ved summering; «minst én»/«mer
  enn» via komplement.
- **Løsningsprosedyre:** (1) sjekk binomisk situasjon (uavhengig, konstant p);
  (2) identifiser $n$, $p$, $k$; (3) sett inn; (4) for «minst»/«høyst» — bruk
  komplement/kumulativ; (5) konkluder i kontekst.
- **Typiske feil:** #6 («minst én» uten komplement; $P(X>k)$ vs. $P(X\ge k)$);
  bruke binomisk der trekking er uten tilbakelegging fra liten populasjon (#1 —
  forvarsel til 2.2).
- **Modellsvar:** «En maskin gir 4 % defekte uavhengig. I en eske på 20: finn
  $P(\text{ingen defekte})$ og $P(\text{minst én defekt})$» (komplement).
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 2.2: Hypergeometrisk fordeling og fordelingsvalg
**id:** `hio-statistikk-okonomi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-2-1`

- **Kapitteltype:** teori-/metodekapittel (perfekt — hyppig fordelingsvalg-felle).
- **Description:** Hypergeometrisk fordeling (trekking uten tilbakelegging fra
  endelig populasjon) med **endelig-populasjonskorreksjonen** i variansen, og den
  eksplisitte drøftingen hypergeometrisk vs. binomisk ($N > 10n$) som fasitene
  premierer.
- **Eksamensbelegg:** Sjanger B (5/5; hypergeometrisk konkret i januar 2016-4,
  mai 2016-4, mai 2017-4 — klar gjenganger). Mai 2016-fasiten sier eksplisitt at
  hypergeometrisk er «det korrekte» og drøfter binomisk approksimasjon mot
  $N>10n$. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  $X\sim \text{Hypergeom}(N,M,n)$, $\binom{}{}$, fpc-faktor $\frac{N-n}{N-1}$.
- **Innholdskontrakt (flashcard-kilde):** **hypergeometrisk situasjon** (trekk
  $n$ uten tilbakelegging fra populasjon $N$ med $M$ «suksesser»);
  **punktsannsynlighet** $P(X=x)=\dfrac{\binom{M}{x}\binom{N-M}{n-x}}{\binom{N}{n}}$;
  **forventning** $E(X)=n\cdot\frac{M}{N}=np$ med $p=M/N$; **varians**
  $\text{Var}(X)=np(1-p)\cdot\dfrac{N-n}{N-1}$ (endelig-populasjonskorreksjon —
  faktoren $\frac{N-n}{N-1}\le 1$, så hypergeometrisk varians er ALLTID $\le$
  binomisk varians `(parametersjekket: fpc-faktor ≤ 1 for alle n≥1)`);
  **binomisk approksimasjon** forsvarlig når $N>10n$ (stor populasjon).
- **Løsningsprosedyre:** (1) trekking med eller uten tilbakelegging? → uten +
  liten $N$ ⇒ hypergeometrisk; (2) identifiser $N$, $M$, $n$, $x$; (3) sett inn;
  (4) ved varians: HUSK fpc-faktoren; (5) drøft evt. binomisk approksimasjon mot
  $N>10n$; (6) konkluder.
- **Typiske feil:** #1 (binomisk der hypergeometrisk kreves); #5 (glemme
  fpc-faktoren i variansen).
- **Modellsvar:** «Av 25 dyr er 5 merket. Du fanger 10. Finn $P(\text{nøyaktig 2
  merkede})$ eksakt (hypergeometrisk), og vurder om binomisk tilnærming er
  forsvarlig her» `(fasit: P=0,3854; fpc gjør Var=1,0 mot binomisk 1,6; N=25 <
  10·10=100 ⇒ binomisk IKKE forsvarlig — parametersjekket)`.
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 2.3: Poisson-fordeling og diskret-fordeling-drill
**id:** `hio-statistikk-okonomi-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-2-2`

- **Kapitteltype:** teori- + drillkapittel (perfekt — sjanger B samlet).
- **Description:** Poisson-fordeling (rate $\lambda$ per enhet) med **rate-
  skalering** til riktig tidsintervall, egendefinerte fordelinger fra tabell
  ($E=\sum x\cdot p$, $\text{Var}=E(X^2)-E(X)^2$), og en samlet **fordelingsvalg-
  drill** som tester å velge riktig av binomisk/hypergeometrisk/Poisson.
- **Eksamensbelegg:** Sjanger B (5/5; Poisson konkret i mai 2017-7). Drillen
  dekker hele sjanger B som er 100 % gjenganger. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2. `collapsible` **Symbol- og
  formelliste:** $X\sim \text{Poisson}(\lambda)$, $e^{-\lambda}$, $\lambda\cdot t$,
  $E=\sum x p$.
- **Innholdskontrakt (flashcard-kilde):** **Poisson-situasjon** (teller sjeldne,
  uavhengige hendelser med rate $\lambda$ per enhet); **punktsannsynlighet**
  $P(X=k)=\dfrac{\lambda^k e^{-\lambda}}{k!}$; **$E(X)=\text{Var}(X)=\lambda$**;
  **rate-skalering** $\lambda_{\text{intervall}}=\lambda\cdot t$ (rate/time →
  per kvarter: $\times 0{,}25$); **egendefinert fordeling fra tabell**
  $E(X)=\sum x\cdot p$, $\text{Var}(X)=E(X^2)-E(X)^2=\sum x^2 p-(\sum x p)^2$;
  **fordelingsvalg-beslutningstre** (fast $n$/konstant $p$/uavhengig → binomisk;
  trekk uten tilbakelegging fra liten $N$ → hypergeometrisk; teller/rate → Poisson).
- **Løsningsoppskrift (drill):** (1) hva teller vi, og hvordan trekkes/oppstår
  det? (2) velg fordeling via beslutningstreet og BEGRUNN valget; (3) skaler rate
  ved Poisson; (4) sett inn og regn; (5) konkluder.
- **Typiske feil:** #4 (glemme rate-skalering — timerate på kvarter uten $\times
  t$; f.eks. $\lambda=4{,}4/$time → $1{,}1$ per kvarter `(parametersjekket)`);
  velge feil fordeling (#1); regne $\text{Var}$ som $E(X^2)$ (glemme $-E(X)^2$).
- **Modellsvar:** «Kundene ankommer med rate 4,4 per time. Finn $P(\text{ingen
  kunder i et kvarter})$» (rate-skalering til $\lambda=1{,}1$); «Gitt en oppgitt
  situasjon — avgjør og BEGRUNN hvilken av de tre fordelingene som passer».
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A binomisk · 2.B hypergeometrisk m/fpc og
$N>10n$-drøfting · 2.C Poisson m/rate-skalering + egendefinert fra tabell · 2.D
fordelingsvalg-prøve: velg og begrunn riktig fordeling, eksamensnivå).

### Del 3 — Normalfordeling *(bolk: statistikk · prioritet: KUNNE — 3/5)*

#### Kapittel 3.1: Normalfordeling, standardisering og omvendt kvantilproblem
**id:** `hio-statistikk-okonomi-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-0-2`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** Standardisering $Z=(X-\mu)/\sigma$, $G(z)$-oppslag for
  $P(X<a)$ og $P(a<X<b)$, og det **omvendte problemet** (finn $\mu$ eller grensen
  som gir en ønsket haleandel) — sjanger C, og fundamentet for KI og test.
- **Eksamensbelegg:** Sjanger C (3/5, 60 %). $N(\mu,\sigma)$ med standardavvik
  som andre argument; kvantiloppslag ($z_{0{,}01}=2{,}326$). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2 ($N(\mu,\sigma)$-konvensjonen, $G(z)$).
  **Sist du var her:** $Z=(X-\mu)/\sigma$; $G(z)$ gir $P(Z<z)$ for $z\ge 0$;
  $G(-z)=1-G(z)$. `collapsible` **Symbol- og formelliste:** $Z$, $G(z)$, $\mu$,
  $\sigma$, $z_\alpha$.
- **Innholdskontrakt (flashcard-kilde):** **standardisering**
  $Z=\dfrac{X-\mu}{\sigma}\sim N(0,1)$; **oppslag** $P(X<a)=G\!\left(\frac{a-\mu}
  {\sigma}\right)$; **intervall** $P(a<X<b)=G\!\left(\frac{b-\mu}{\sigma}\right)-
  G\!\left(\frac{a-\mu}{\sigma}\right)$; **symmetri/komplement** $P(X>a)=
  1-G(\cdot)$; **omvendt problem** (gitt haleandel $\alpha$, finn kvantilen
  $z_\alpha$ og løs $\frac{a-\mu}{\sigma}=z_\alpha$ for $\mu$ eller $a$); **sum/
  gjennomsnitt av uavhengige normale er normal** (bro til KI).
- **Løsningsprosedyre:** (1) skriv $N(\mu,\sigma)$ (standardavvik!); (2)
  standardiser; (3) slå opp $G$ (symmetri ved $z<0$); (4) omvendt: velg riktig
  kvantil fra tabell og løs for ukjent; (5) konkluder i kontekst.
- **Typiske feil:** forveksle $\sigma$ og $\sigma^2$ i $N(\mu,\sigma)$ (#12-nær);
  glemme symmetri ved $z<0$; feil hale i omvendt problem.
- **Modellsvar:** «Fyllmengden er $N(250,12)$. Finn andelen poser under 245 g»
  `(fasit: G((245-250)/12)=G(-0,417)=0,3385 — parametersjekket)`; «Bestem hvilken
  $\mu$ som gir høyst 1 % undervektige poser under 245 g» (omvendt, $z_{0{,}01}=
  2{,}326$).
- **Kvote:** 16 quiz / 22 flashcards.

#### Kapittel 3.2: Normaltilnærming til binomisk og sentralgrenseteoremet
**id:** `hio-statistikk-okonomi-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-statistikk-okonomi-3-1`

- **Kapitteltype:** teori-/metodekapittel (kjenne → bro til andelstest).
- **Description:** Sentralgrenseteoremet og normaltilnærming til binomisk når
  $np(1-p)\ge 5$ — grunnlaget for andelstesten i Del 5.
- **Eksamensbelegg:** Lavfrekvent som egen oppgave (1/5), men **direkte
  forutsetning for andelstesten** (5/5-sjangeren E). Prioritet: kjenne (men
  bygger opp mot perfekt-tema). Sjanger C/E.
- **Forkunnskaper/kryssbok:** kap. 2.1 (binomisk), 3.1 (standardisering).
  `collapsible` **Symbol- og formelliste:** $np(1-p)$, $\sqrt{np(1-p)}$, SGT.
- **Innholdskontrakt (flashcard-kilde):** **sentralgrenseteoremet** (sum/snitt av
  mange uavhengige variabler → tilnærmet normal); **normaltilnærming til
  binomisk** gyldig når $np(1-p)\ge 5$ (tommelfingerregel); tilnærming
  $X\approx N(np,\sqrt{np(1-p)})$; kobling til andelen $\hat p=X/n$.
- **Løsningsprosedyre:** (1) sjekk $np(1-p)\ge 5$; (2) sett $\mu=np$,
  $\sigma=\sqrt{np(1-p)}$; (3) standardiser og slå opp.
- **Typiske feil:** bruke tilnærming uten å sjekke $np(1-p)\ge 5$; blande
  standardavviket til $X$ med det til $\hat p$.
- **Modellsvar:** «Av 200 forsøk med $p=0{,}3$: sjekk om normaltilnærming holder,
  og finn tilnærmet $P(X>70)$» (sjekk $np(1-p)=42\ge 5$).
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A standardisering + $G(z)$-oppslag · 3.B
omvendt kvantilproblem · 3.C normaltilnærming + $np(1-p)$-sjekk · 3.D samlet
normalfordelingsprøve på eksamensnivå).

### Del 4 — Estimering og konfidensintervall *(bolk: statistikk · prioritet: KUNNE — 3/5)*

#### Kapittel 4.1: Konfidensintervall — Z og t
**id:** `hio-statistikk-okonomi-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-3-1`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** Konfidensintervall på standardform $\bar X \pm (\text{kritisk
  verdi})\cdot(\text{SE})$, med **metodesignalet**: kjent $\sigma$ → Z-intervall,
  ukjent $\sigma$ → t-intervall med $n-1$ frihetsgrader. Frekventistisk tolkning.
- **Eksamensbelegg:** Sjanger D (3/5, 60 %). Prioritet: kunne. Bygger direkte opp
  under testkapitlets Z/T-valg.
- **Forkunnskaper/kryssbok:** kap. 3.1 (standardisering). **Sist du var her:**
  $\bar X$ er normalfordelt; kjent $\sigma$ → Z, ukjent → t. `collapsible`
  **Symbol- og formelliste:** $\bar X$, $s$, $z_{\alpha/2}$, $t_{\alpha/2,n-1}$,
  SE $=\sigma/\sqrt n$.
- **Innholdskontrakt (flashcard-kilde):** **KI (kjent $\sigma$)** $\bar X \pm
  z_{\alpha/2}\cdot\dfrac{\sigma}{\sqrt n}$; **KI (ukjent $\sigma$)** $\bar X \pm
  t_{\alpha/2,\,n-1}\cdot\dfrac{s}{\sqrt n}$; **metodesignalet** (kjent $\sigma$ →
  Z; ukjent, estimert fra utvalg → t med $n-1$ df); **frekventistisk tolkning**
  (95 % av slike intervaller dekker den sanne $\mu$ — ikke «95 % sannsynlig at
  $\mu$ ligger her»); vanlige kvantiler ($z_{0{,}025}=1{,}96$).
- **Løsningsprosedyre:** (1) kjent eller ukjent $\sigma$? → Z eller t; (2) finn
  kritisk verdi ($z_{\alpha/2}$ eller $t_{\alpha/2,n-1}$) fra vedlagt tabell; (3)
  regn SE; (4) sett sammen intervallet; (5) tolk frekventistisk.
- **Typiske feil:** #2 (Z der t kreves ved ukjent $\sigma$/lite $n$); tolke KI som
  sannsynlighet for parameteren; glemme $/\sqrt n$ i SE.
- **Modellsvar:** «Med kjent $\sigma=5000$ og snitt 105 700 over 8 år, finn et
  95 %-KI for $\mu$» ($105\,700 \pm 1{,}96\cdot 5000/\sqrt 8$).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 4.2: Utvalgsstørrelse og KI-drill
**id:** `hio-statistikk-okonomi-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-statistikk-okonomi-4-1`

- **Kapitteltype:** teori- + drillkapittel (kunne).
- **Description:** Å regne **nødvendig utvalgsstørrelse** for en gitt maksimal
  intervall-lengde, og en samlet KI-drill (Z og t, begge veier).
- **Eksamensbelegg:** Del av sjanger D (3/5); utvalgsstørrelse er en typisk
  deloppgave. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste:**
  $L$ (lengde), $n\ge\left(\frac{2z_{\alpha/2}\sigma}{L}\right)^2$.
- **Innholdskontrakt (flashcard-kilde):** **intervall-lengde** $L=2\cdot
  z_{\alpha/2}\cdot\sigma/\sqrt n$; **utvalgsstørrelse** løs $L\le L_{\max}$ for
  $n$: $n\ge\left(\dfrac{2z_{\alpha/2}\sigma}{L_{\max}}\right)^2$ (rund ALLTID
  OPP); halvering av $L$ krever firedobling av $n$.
- **Løsningsprosedyre:** (1) skriv lengdeuttrykket; (2) sett $\le L_{\max}$; (3)
  løs for $n$; (4) rund opp til nærmeste heltall.
- **Typiske feil:** runde ned i stedet for opp; glemme faktoren 2 i lengden
  (halv lengde = én side); bruke $z$ i stedet for $2z$.
- **Modellsvar:** «Med kjent $\sigma=5000$, hvor mange år trengs for at
  95 %-KI-lengden ikke skal overstige 4000?» `(fasit: n≥(2·1,96·5000/4000)²=24,0
  → 25 — parametersjekket)`.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A Z-intervall (kjent $\sigma$) · 4.B
t-intervall (ukjent $\sigma$, $n-1$ df) + tolkning · 4.C utvalgsstørrelse · 4.D
samlet KI-prøve på eksamensnivå).

### Del 5 — Hypotesetesting *(bolk: statistikk · prioritet: PERFEKT — 5/5)*

#### Kapittel 5.1: Hypotesetest — firetrinnsmalen, Z- og T-test
**id:** `hio-statistikk-okonomi-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-statistikk-okonomi-4-1`

- **Kapitteltype:** teori-/metodekapittel (perfekt).
- **Description:** Firetrinnsmalen fasitene følger slavisk (oppsett $H_0/H_1$ →
  testobservator med begrunnet fordeling → kritisk verdi/forkastningsregel →
  konkluder i kontekst), for én-utvalgs **Z-test** (kjent $\sigma$) og
  **T-test** (ukjent $\sigma$, $n-1$ df). Tyngste enkeltkomponent i hvert sett.
- **Eksamensbelegg:** Sjanger E (5/5, 100 % — alltid tyngst i statistikkbolken).
  T med df=1 (mai 2016-6e), df=2 (mai 2017-3c). Ensidig/tosidig- og Z/T-valget er
  de to metodesignalene. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1 (Z/t-valg, kritisk verdi). **Sist du var
  her:** kjent $\sigma$ → Z; ukjent $\sigma$, lite $n$ → t med $n-1$ df.
  `collapsible` **Symbol- og formelliste:** $H_0$, $H_1$, $\mu_0$, $Z$, $T$,
  $z_\alpha$, $t_{\alpha,n-1}$, forkastningsområde.
- **Innholdskontrakt (flashcard-kilde):** **firetrinnsmalen** (1: sett opp
  $H_0/H_1$; 2: velg testobservator og begrunn fordelingen; 3: kritisk verdi +
  forkastningsregel; 4: regn, sammenlign, konkluder i kontekst); **ensidig ved
  retningsord** («har økt», «er lavere enn», «overskrider» → ensidig alternativ);
  **Z-test** $Z=\dfrac{\bar X-\mu_0}{\sigma/\sqrt n}$ (kjent $\sigma$/stort $n$);
  **T-test** $T=\dfrac{\bar X-\mu_0}{s/\sqrt n}$, df $=n-1$ (ukjent $\sigma$, lite
  utvalg); forkastning når testobservator i forkastningsområdet (venstre/høyre
  hale gitt av $H_1$).
- **Løsningsprosedyre:** de fire trinnene, med eksplisitt begrunnelse av
  ensidig/tosidig OG Z/T (sensorkrav 2).
- **Typiske feil:** #2 (Z der T kreves); #3 (tosidig på ensidig spørsmål); glemme
  kontekst-konklusjonen (#12).
- **Modellsvar:** «Ti kaffeposer veier i snitt 245,1 g med kjent $\sigma=9$. Test
  på 5 %-nivå om forventet vekt er UNDER 250 g; begrunn valg av Z-test og ensidig
  (venstre-hale) alternativ» (Z, ensidig); «Med ukjent $\sigma$ og $n=8$: test om
  snittet overstiger 250 — hvilken fordeling og hvor mange frihetsgrader?» (T,
  df=7, høyre-hale).
- **Kvote:** 20 quiz / 26 flashcards.

#### Kapittel 5.2: Andelstest og p-verdi
**id:** `hio-statistikk-okonomi-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-5-1`

- **Kapitteltype:** teori-/metodekapittel (perfekt).
- **Description:** **Test av andel** via normaltilnærming til binomisk, og
  **p-verdien** (beregning fra testobservatoren + tolkning) — begge faste
  oppfølgere til hovedtesten.
- **Eksamensbelegg:** Sjanger E (andelstest; mai 2017 andelstest m/normaltilnær-
  ming) og sjanger F (p-verdi, 3/5). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.2 (normaltilnærming), 5.1 (firetrinnsmalen).
  `collapsible` **Symbol- og formelliste:** $p_0$, $\hat p$,
  $Z=\frac{X-np_0}{\sqrt{np_0(1-p_0)}}$, p-verdi.
- **Innholdskontrakt (flashcard-kilde):** **andelstest** $Z=\dfrac{X-np_0}
  {\sqrt{np_0(1-p_0)}}$ (gyldig når $np_0(1-p_0)\ge 5$); **p-verdi** = haleareal
  under testobservatorens fordeling (ensidig $P(Z>z_{\text{obs}})$ eller
  $P(Z<z_{\text{obs}})$; tosidig $\times 2$); **tolkning** = sannsynligheten for
  et minst like ekstremt utfall GITT at $H_0$ er sann, «det laveste
  signifikansnivået der vi fortsatt forkaster»; **beslutning** forkast hviss
  $p<\alpha$.
- **Løsningsprosedyre (andel):** (1) $H_0: p=p_0$; (2) sjekk $np_0(1-p_0)\ge 5$;
  (3) regn $Z$; (4) sammenlign/finn p-verdi; (5) konkluder.
  **(p-verdi):** (1) regn testobservator; (2) finn haleareal (komplement når
  tabellen stopper); (3) sammenlign med $\alpha$; (4) tolk i klartekst.
- **Typiske feil:** bruke andelstest uten $np_0(1-p_0)\ge 5$-sjekk; glemme å
  doble p-verdien ved tosidig test; tolke p-verdien som «sannsynligheten for at
  $H_0$ er sann» (feil).
- **Modellsvar:** «Fylkeslegen tester om andelen komplikasjoner overstiger 8 %.
  Av 150 inngrep var 18 komplikasjoner — sett opp andelstesten og finn p-verdien»;
  «Finn p-verdien til Z-testen i 5.1 og forklar hva den sier om hvor sterkt data
  taler mot $H_0$».
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 5.3: Testdrill og type I-/type II-feil
**id:** `hio-statistikk-okonomi-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-5-2`

- **Kapitteltype:** drillkapittel (perfekt — sjanger E/F/I samlet).
- **Description:** En samlet **hypotesetestdrill** (velg Z/T/andel, ensidig/
  tosidig, regn og konkluder) pluss **type I-/type II-feil** definert i kontekst
  — differensieringsstoffet mot topp.
- **Eksamensbelegg:** Sjanger E/F (5/5) samlet; sjanger I (type I/II, 1/5;
  mai 2017-6b) som drøfteseksjon. To-utvalgs/paret sammenligning (1/5) nevnes
  kort. Prioritet: perfekt (test) + kjenne (type I/II).
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2. `collapsible` **Symbol- og
  formelliste:** testobservator-oversikt (Z/T/andel), $\alpha$, $\beta$, type I/II.
- **Innholdskontrakt (flashcard-kilde):** **testvalg-beslutningstre** (én middel-
  verdi, kjent $\sigma$ → Z; ukjent $\sigma$, lite $n$ → T med $n-1$ df; en andel
  → andelstest); **type I-feil** = forkaste $H_0$ når den er sann (sannsynlighet
  $\alpha$); **type II-feil** = beholde $H_0$ når den er usann (sannsynlighet
  $\beta$); **avveiningen** (senket $\alpha$ øker $\beta$; **økt $n$ er den eneste
  måten å redusere begge samtidig**); **paret vs. uparet** (paret når samme
  enhet måles to ganger — mindre variasjon).
- **Løsningsoppskrift (drill):** identifiser situasjon → velg testobservator og
  begrunn → ensidig/tosidig → kritisk verdi → regn → konkluder i kontekst.
- **Typiske feil:** #2, #3; definere type I/II abstrakt i stedet for i kontekst;
  tro at man kan senke både $\alpha$ og $\beta$ uten å øke $n$.
- **Modellsvar:** «Forklar type I- og type II-feil for testen av en kirurgs
  feilrate — hvem rammer hver feil, og hvordan kan hver reduseres?» (kontekst);
  «Gitt et blandet testsett — velg og begrunn riktig test for hver».
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A Z-test (kjent $\sigma$, ensidig/tosidig) ·
5.B T-test ($n-1$ df) + andelstest · 5.C p-verdi (beregning + tolkning) · 5.D
samlet testprøve + type I/II i kontekst, eksamensnivå).

### Del 6 — Regresjon og simultanfordeling *(bolk: statistikk · prioritet: KJENNE — 2/5, 1/5)*

#### Kapittel 6.1: Enkel lineær regresjon og korrelasjon
**id:** `hio-statistikk-okonomi-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-4-1`

- **Kapitteltype:** teori-/metodekapittel (kjenne → differensierer mot A).
- **Description:** Empirisk **korrelasjonskoeffisient**, estimering av
  **regresjonslinjen** (minste kvadraters metode), og den avanserte varianten
  **KI for forventet Y** ved gitt x — motsatt av søsteremner er regresjon HER
  faktisk testet.
- **Eksamensbelegg:** Sjanger H (2/5, 40 %; mai 2016-7, mai 2017-8, med KI for
  forventet Y i mai 2017-8b). Oppgavene gir vanligvis summene ferdig utregnet.
  Prioritet: kjenne (A-differensierende).
- **Forkunnskaper/kryssbok:** kap. 4.1 (KI-form for den avanserte varianten).
  `collapsible` **Symbol- og formelliste:** $r$, $S_{xx}$, $S_{xy}$, $S_{yy}$,
  $\hat\beta_0$, $\hat\beta_1$, $\hat Y$.
- **Innholdskontrakt (flashcard-kilde):** **kvadratsummer** $S_{xx}=\sum(x_i-
  \bar x)^2$, $S_{yy}=\sum(y_i-\bar y)^2$, $S_{xy}=\sum(x_i-\bar x)(y_i-\bar y)$;
  **korrelasjonskoeffisient** $r=\dfrac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ (nær 1 ⇒
  sterk positiv lineær sammenheng; $-1\le r\le 1$); **regresjonslinje** $\hat Y=
  \hat\beta_0+\hat\beta_1 x$ med $\hat\beta_1=\dfrac{S_{xy}}{S_{xx}}$,
  $\hat\beta_0=\bar y-\hat\beta_1\bar x$; **avansert: KI for forventet Y** ved
  gitt $x$ (med oppgitt residual-standardfeil $s$ og SE — brukes, ikke utledes).
- **Løsningsprosedyre:** (1) bruk oppgitte/regn kvadratsummer; (2) $r$ og tolk;
  (3) $\hat\beta_1$ så $\hat\beta_0$; (4) sett opp linjen; (5) avansert: sett inn
  i KI-formelen for forventet Y.
- **Typiske feil:** blande $S_{xx}$ og $S_{xy}$ i $\hat\beta_1$; regne
  $\hat\beta_0$ før $\hat\beta_1$; overtolke $r$ som årsakssammenheng.
- **Modellsvar:** «Med oppgitte kvadratsummer, finn korrelasjonskoeffisienten
  mellom studenttall og pizzasalg og estimer regresjonslinjen»; «(krevende) Finn
  et 95 %-KI for forventet Y ved gitt x med oppgitt $s$».
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.2: Simultanfordeling, kovarians og korrelasjon
**id:** `hio-statistikk-okonomi-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-statistikk-okonomi-2-3`

- **Kapitteltype:** teori-/metodekapittel (kjenne).
- **Description:** Fra en oppgitt simultantabell for $(X,Y)$: marginale
  fordelinger, $E$ og $\text{Var}$, uavhengighetssjekk, **kovarians** og
  **korrelasjon** — et rikt, selvstendig differensieringstema.
- **Eksamensbelegg:** Sjanger G (1/5, 20 %; mai 2016-3). Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.3 (egendefinert fordeling: $E=\sum x p$,
  $\text{Var}=E(X^2)-E(X)^2$). `collapsible` **Symbol- og formelliste:**
  simultan $P(X=x,Y=y)$, marginal, $\text{Cov}$, $\rho$, $\sigma_X$, $\sigma_Y$.
- **Innholdskontrakt (flashcard-kilde):** **marginale fordelinger** (summer over
  den andre variabelen); **$E$ og $\text{Var}$** per variabel; **uavhengighet**
  $P(X=x,Y=y)=P(X=x)P(Y=y)$ for ALLE par; **kovarians** $\text{Cov}(X,Y)=E(XY)-
  E(X)E(Y)$ med $E(XY)=\sum\sum xy\,P(x,y)$; **korrelasjon** $\rho=\dfrac
  {\text{Cov}(X,Y)}{\sigma_X\sigma_Y}$; **poeng:** uavhengige ⇒ $\rho=0$, men
  $\rho=0$ ⇏ uavhengige.
- **Løsningsprosedyre:** (1) marginaler; (2) $E$, $\text{Var}$ per variabel; (3)
  sjekk uavhengighet på alle par; (4) $E(XY)$ → kovarians; (5) korrelasjon.
- **Typiske feil:** konkludere «uavhengige» fra ett par (må gjelde alle); glemme
  $-E(X)E(Y)$ i kovariansen; blande $\text{Cov}$ og $\rho$.
- **Modellsvar:** «Gitt simultanfordelingen for X og Y: finn $E$, $\text{Var}$,
  avgjør om de er uavhengige, og regn korrelasjonen».
- **Kvote:** 14 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A korrelasjonskoeffisient · 6.B regresjonslinje
+ (krevende) KI for forventet Y · 6.C simultanfordeling: $E$/Var/uavhengighet ·
6.D kovarians + korrelasjon, eksamensnivå).

### Del 7 — Produktkalkyle *(bolk: økonomi · prioritet: KUNNE — 3/5)*

#### Kapittel 7.1: Selvkost- og bidragskalkyle med tilleggssatser
**id:** `hio-statistikk-okonomi-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-0-2`

- **Kapitteltype:** teori-/metodekapittel (kunne — økonomibolkens inngang).
- **Description:** Å bygge kalkyle med **tilleggssatser** for indirekte kostnader,
  lagvis, og skille **selvkost** (alle kostnader) fra **bidrag** (kun variable) —
  fundamentet for dekningsbidragsanalyse.
- **Eksamensbelegg:** Sjanger J (3/5, 60 %). Tilleggssatser på riktig grunnlag;
  tilvirkningsmerkost. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 0.2 (firetrinns-oppsett). `collapsible`
  **Symbol- og formelliste:** direkte material (DM), direkte lønn (DL),
  tilleggssats, tilvirkningsmerkost, selvkost, sum variable.
- **Innholdskontrakt (flashcard-kilde):** **selvkost** (alle kostnader, også faste
  indirekte) vs. **bidrag** (kun variable → dekningsbidrag); **tilleggssats** =
  indirekte kostnad som prosentpåslag på et grunnlag (materialpåslag på DM,
  tilvirkningspåslag på DM+DL, salgs-/adm.-påslag på **tilvirkningsmerkost**);
  **kalkyle-oppsett** (DM + DL → tilvirkningskost → + salg/adm → selvkost);
  variable vs. faste indirekte kostnader.
- **Løsningsprosedyre:** (1) list direkte kostnader; (2) legg til indirekte
  lagvis med riktig grunnlag; (3) skill selvkost fra bidrag; (4) regn per enhet.
- **Typiske feil:** #9 (salgs-/adm.-påslag av salgspris i stedet for
  tilvirkningsmerkost); blande selvkost og bidrag; feil grunnlag for tilleggssats.
- **Modellsvar:** «Med tilleggssatser 25 %/60 %/10 % og direkte kostnader
  30 000/40 000, sett opp en bidragskalkyle for bestillingen».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 7.2: Kalkyledrill — selvkost vs. bidrag
**id:** `hio-statistikk-okonomi-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-statistikk-okonomi-7-1`

- **Kapitteltype:** drillkapittel (kunne).
- **Description:** Samlet drill på kalkyleoppsett med tilleggssatser og skillet
  selvkost/bidrag, på eksamensnivå.
- **Eksamensbelegg:** Sjanger J (3/5) samlet. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol- og formelliste:**
  kalkyleoppsettet i kortform.
- **Innholdskontrakt (flashcard-kilde):** kalkyle-sjekkliste (grunnlag per
  tilleggssats), per-enhet-omregning, tilvirkningsmerkost vs. selvkost.
- **Løsningsoppskrift (drill):** (1) grunnlag per sats; (2) lagvis oppbygging;
  (3) selvkost vs. bidrag; (4) per enhet; (5) konkluder.
- **Typiske feil:** #9; regne per parti når oppgaven vil ha per enhet.
- **Modellsvar:** «Sett opp både selvkost- og bidragskalkyle for samme ordre og
  forklar differansen».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A tilleggssatser + grunnlag · 7.B selvkost-
kalkyle · 7.C bidragskalkyle · 7.D samlet kalkyleprøve, eksamensnivå).

### Del 8 — Dekningsbidragsanalyse *(bolk: økonomi · prioritet: KUNNE — 3/5)*

#### Kapittel 8.1: Dekningsbidrag, dekningspunkt og sikkerhetsmargin
**id:** `hio-statistikk-okonomi-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-7-1`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** DB per enhet, totalt DB, resultat, dekningsgrad, **dekningspunkt
  (nullpunkt)** i mengde og omsetning, og **sikkerhetsmargin** — kjernen i
  sjanger K.
- **Eksamensbelegg:** Sjanger K (3/5, 60 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1 (variable enhetskostnader).
  `collapsible` **Symbol- og formelliste:** DB, DG, faste kost FK, dekningspunkt,
  sikkerhetsmargin.
- **Innholdskontrakt (flashcard-kilde):** **DB per enhet** = pris − variable
  enhetskostnader; **totalt DB** = DB per enhet × mengde; **resultat** = totalt
  DB − faste kostnader; **dekningsgrad** $\text{DG}=\text{DB}/\text{pris}$;
  **dekningspunkt (mengde)** = FK$/$DB per enhet; **dekningspunkt (omsetning)** =
  FK$/$DG; **sikkerhetsmargin** = faktisk omsetning − dekningspunkt-omsetning (i
  kr og %).
- **Løsningsprosedyre:** (1) DB per enhet; (2) DG; (3) dekningspunkt (mengde og
  omsetning); (4) sikkerhetsmargin; (5) konkluder om robusthet.
- **Typiske feil:** blande dekningspunkt i mengde og omsetning (FK/DB vs. FK/DG);
  regne DG av kost i stedet for pris; glemme å trekke fra faste kostnader i
  resultatet.
- **Modellsvar:** «For Army-modellen: finn dekningsgrad, dekningspunkt i mengde og
  omsetning, og sikkerhetsmarginen ved salg på 1500 enheter».
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 8.2: DB-drill og trangfaktor-prioritering
**id:** `hio-statistikk-okonomi-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `hio-statistikk-okonomi-8-1`

- **Kapitteltype:** drillkapittel (kunne).
- **Description:** Samlet DB-drill pluss **trangfaktor-prioritering** (rangere
  produkter etter DB per enhet av den knappe faktoren).
- **Eksamensbelegg:** Sjanger K (3/5); trangfaktor (1/5, 20 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 8.1. `collapsible` **Symbol- og formelliste:**
  DB per knapp faktor (per material-krone, per time).
- **Innholdskontrakt (flashcard-kilde):** **knapp faktor (trangfaktor)** = ressurs
  det er for lite av; **prioriteringsregel** = ranger etter **DB per enhet av
  trangfaktoren** (DB / forbruk av knapp faktor), IKKE etter DB per enhet;
  produksjonsplan innenfor kapasitetsgrensen.
- **Løsningsoppskrift (drill):** (1) DB per enhet per produkt; (2) forbruk av
  knapp faktor per produkt; (3) DB per knapp faktor; (4) ranger og fyll opp
  kapasiteten; (5) konkluder plan.
- **Typiske feil:** #10 (rangere etter DB per enhet i stedet for DB per knapp
  faktor); overse kapasitetsgrensen.
- **Modellsvar:** «To modeller konkurrerer om systue-timer (knapp faktor) — ranger
  etter DB per time og sett opp produksjonsplanen».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A DB + DG + resultat · 8.B dekningspunkt
(mengde/omsetning) · 8.C sikkerhetsmargin · 8.D trangfaktor-prioritering,
eksamensnivå).

### Del 9 — Investeringsanalyse *(bolk: økonomi · prioritet: PERFEKT — 4/5)*

#### Kapittel 9.1: Kontantstrøm og nåverdi
**id:** `hio-statistikk-okonomi-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-statistikk-okonomi-0-2`

- **Kapitteltype:** teori-/metodekapittel (perfekt — økonomibolkens tyngste søyle).
- **Description:** Å sette opp **kontantstrømmen** år 0…n (investering, endring i
  arbeidskapital, årlige innbetalingsoverskudd, utrangeringsverdi) og regne
  **nåverdi** for å konkludere om lønnsomhet — med korrekt håndtering av
  arbeidskapital og sunk cost.
- **Eksamensbelegg:** Sjanger L (4/5, 80 % — den best belagte økonomioppgaven).
  Sunk cost holdt utenfor (januar 2016-2). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (regneoppsett); potensregning fra
  videregående. `collapsible` **Symbol- og formelliste:** $CF_t$, $r$, NV,
  $\Delta$OM (arbeidskapital), utrangeringsverdi.
- **Innholdskontrakt (flashcard-kilde):** **kontantstrøm-komponenter** —
  investering (−, år 0), **endring i arbeidskapital/omløpsmidler** (− ved
  oppstart, tilbake i sluttåret), årlige innbetalingsoverskudd fra drift,
  utrangeringsverdi i sluttåret; **nåverdi** $\text{NV}=\sum_{t=0}^{n}
  \dfrac{CF_t}{(1+r)^t}$; **lønnsomhetskriterium** NV $>0$ ⇒ lønnsom;
  **sunk cost** (allerede påløpt, f.eks. markedsundersøkelse) holdes UTENFOR.
- **Løsningsprosedyre:** (1) sett opp kontantstrømmen år for år (HUSK
  arbeidskapital og utrangeringsverdi); (2) hold sunk cost utenfor; (3) diskonter
  hvert år; (4) summer til NV; (5) konkluder om lønnsomhet.
- **Typiske feil:** #7 (ta med sunk cost); #8 (glemme arbeidskapital ut i år 0 /
  tilbake i sluttåret); diskontere år 0.
- **Modellsvar:** «Med kontantstrøm $-175\,000 / 55\,000 / 75\,000 / 105\,000$ og
  10 % kalkulasjonsrente: finn nåverdien og vurder lønnsomheten» (en tidligere
  påløpt markedsundersøkelse skal IKKE med).
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 9.2: Internrente, nåverdiprofil og tilbakebetalingstid
**id:** `hio-statistikk-okonomi-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-9-1`

- **Kapitteltype:** teori-/metodekapittel (perfekt).
- **Description:** **Nåverdiprofilen** (NV som funksjon av renten), **internrenten**
  (renten der NV = 0, avlest/interpolert fra profilen) og **tilbakebetalingstiden**
  (når kumulert kontantstrøm blir positiv). **Krever SVG-figur** (nåverdiprofil).
- **Eksamensbelegg:** Sjanger L (4/5). Nåverdiprofil + internrente er faste
  deloppgaver. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1 (kontantstrøm, NV). **Sist du var her:**
  $\text{NV}=\sum CF_t/(1+r)^t$; NV faller når $r$ stiger. `collapsible`
  **Symbol- og formelliste:** internrente IR, nåverdiprofil, tilbakebetalingstid.
- **Innholdskontrakt (flashcard-kilde):** **nåverdiprofil** = graf av NV mot
  renten $r$ (fallende for en normal investering); **internrente** = renten der
  NV $=0$ (der profilen krysser $x$-aksen; finn ved interpolasjon mellom to
  renter med motsatt fortegns-NV); **beslutningsregel** IR $>$ avkastningskrav ⇒
  lønnsom (samme konklusjon som NV $>0$ for normale kontantstrømmer);
  **tilbakebetalingstid** = året kumulert (u-diskontert eller diskontert)
  kontantstrøm blir $\ge 0$.
- **Løsningsprosedyre:** (1) regn NV ved 2–3 renter; (2) tegn/skissér profilen;
  (3) avles/interpoler internrenten; (4) sammenlign med avkastningskravet; (5)
  regn tilbakebetalingstiden; (6) konkluder.
- **Typiske feil:** avlese internrenten feil (der NV=0, ikke NV=maks); tro at IR
  og NV kan gi motsatt svar for en normal investering; blande diskontert og
  u-diskontert tilbakebetalingstid.
- **Modellsvar:** «Tegn nåverdiprofilen for investeringen i 9.1 og estimer
  internrenten; vurder lønnsomheten mot et avkastningskrav på 10 %».
- **Figur:** `investeringsanalyse-naverdiprofil.svg` (NV på y-akse, rente på
  x-akse, fallende kurve som krysser null ved internrenten, stiplet hjelpelinje).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 9.3: Investeringsanalyse-drill
**id:** `hio-statistikk-okonomi-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `hio-statistikk-okonomi-9-2`

- **Kapitteltype:** drillkapittel (perfekt — sjanger L samlet).
- **Description:** Samlet investeringsdrill: bygg kontantstrøm (med arbeidskapital,
  utrangeringsverdi, sunk cost-felle) → NV → nåverdiprofil → internrente →
  tilbakebetaling, på eksamensnivå.
- **Eksamensbelegg:** Sjanger L (4/5) samlet. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 9.1–9.2. `collapsible` **Symbol- og
  formelliste:** hele investeringsapparatet i kortform.
- **Innholdskontrakt (flashcard-kilde):** løsningssjekkliste (arbeidskapital ut/
  inn, utrangeringsverdi, sunk cost utenfor, NV-fortegn, internrente-avlesning).
- **Løsningsoppskrift (drill):** som 9.1–9.2 samlet, med eksplisitt sunk cost-
  og arbeidskapital-sjekk i hvert case.
- **Typiske feil:** #7, #8; gjenbruk `investeringsanalyse-naverdiprofil.svg` som
  referansefigur («slik skal profilen din se ut»).
- **Modellsvar:** «(krevende) Full investeringsanalyse med arbeidskapital,
  utrangeringsverdi og en tidligere påløpt utredning — finn NV, internrente og
  tilbakebetalingstid, og konkluder».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A kontantstrøm + NV (m/arbeidskapital,
sunk cost) · 9.B nåverdiprofil + internrente · 9.C tilbakebetalingstid · 9.D
full investeringsanalyse, eksamensnivå).

### Del 10 — Optimering, regnskap og nøkkeltall *(bolk: økonomi · prioritet: KUNNE — 2/5)*

#### Kapittel 10.1: Kostnads-, inntekts- og profittoptimering
**id:** `hio-statistikk-okonomi-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-0-2`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** Fra kostnadsfunksjon og pris/etterspørsel: sette opp
  **profittfunksjon**, derivere og løse for **vinningsoptimal mengde**, og finne
  **kostnadsoptimum** via enhetskostnad — sjanger M.
- **Eksamensbelegg:** Sjanger M (2/5, 40 %). Prioritet: kunne. Forutsetter
  derivasjon (deles med spillteori-delen).
- **Forkunnskaper/kryssbok:** kap. 0.2; [Derivasjon](/r1/r1-3-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $K(x)$, $E(x)$,
  $\Pi(x)$, $p(x)$, $\Pi'(x)=0$.
- **Innholdskontrakt (flashcard-kilde):** **profittfunksjon** $\Pi(x)=
  \text{inntekt}-K(x)$; **vinningsoptimum** $\Pi'(x)=0$ (grenseinntekt =
  grensekostnad); **enhetskostnad** $E(x)=K(x)/x$ og **kostnadsoptimum** $E'(x)=0$;
  **fallende etterspørsel** $p(x)=a-x$ ⇒ inntekt $=p(x)\cdot x$ (kvadratisk);
  andreordens-sjekk (maksimum vs. minimum).
- **Løsningsprosedyre:** (1) skriv inntekt (evt. via $p(x)$); (2) sett opp $\Pi(x)$;
  (3) deriver, sett $=0$, løs; (4) sjekk maks/min; (5) for kostnadsoptimum: $E(x)
  =K(x)/x$, $E'=0$; (6) konkluder.
- **Typiske feil:** glemme kjerneregelen/produktregelen ved derivasjon av inntekt;
  forveksle profittoptimum og kostnadsoptimum; ikke sjekke andreordensbetingelse.
- **Modellsvar:** «$K(x)=0{,}1x^2+50x+4000$, pris 100 per enhet. Finn
  profittmaksimerende mengde og kostnadsoptimal mengde» `(fasit: Π'(x)=100-0,2x-50
  =0 → x=250; E(x)=0,1x+50+4000/x, E'=0,1-4000/x²=0 → x=200 — parametersjekket)`.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 10.2: Resultatbudsjett, nøkkeltall og Du Pont
**id:** `hio-statistikk-okonomi-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `hio-statistikk-okonomi-8-1`

- **Kapitteltype:** teori-/metodekapittel (kunne).
- **Description:** Sette opp **resultatbudsjett** med prosentvis endring per post
  og vurdere det, og regne **nøkkeltall** (likviditet, rentabilitet, marginer)
  inkl. **Du Pont** — sjanger N.
- **Eksamensbelegg:** Sjanger N (2/5, 40 %). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 8.1 (resultatbegrepet). `collapsible`
  **Symbol- og formelliste:** arbeidskapital, likviditetsgrad 1, TKR, EKR, Du Pont.
- **Innholdskontrakt (flashcard-kilde):** **resultatbudsjett** (poster justert med
  endringsprosenter: omsetning +5 %, lønn +6 %, rente −10 %); **arbeidskapital** =
  omløpsmidler − kortsiktig gjeld; **likviditetsgrad 1** = omløpsmidler /
  kortsiktig gjeld; **totalkapitalrentabilitet** $\text{TKR}=\dfrac{\text{driftsres.}
  +\text{finansinnt.}}{\text{totalkapital}}$; **egenkapitalrentabilitet** EKR;
  **resultat-/driftsmargin**; **Du Pont** TKR = resultatmargin × kapitalens
  omløpshastighet; **avskrivning** (lineær/degressiv).
- **Løsningsprosedyre:** (1) juster hver post med sin endringsprosent; (2) sett
  opp budsjettert resultat; (3) regn nøkkeltall; (4) bryt TKR opp med Du Pont;
  (5) vurder og foreslå tiltak (begrunnede forutsetninger — sensorkrav 5).
- **Typiske feil:** anvende endringsprosenten på feil grunnlag; blande likviditet
  og rentabilitet; gi tall uten vurdering/tiltak (#12).
- **Modellsvar:** «Sett opp resultatbudsjettet for neste år ut fra de oppgitte
  endringsprosentene, regn TKR med Du Pont, og vurder om budsjettet gir grunn til
  tiltak».
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A profittoptimering · 10.B kostnadsoptimum ·
10.C resultatbudsjett + nøkkeltall · 10.D Du Pont + vurdering, eksamensnivå).

### Del 11 — Spillteori *(bolk: økonomi · prioritet: KUNNE — 3/5)*

#### Kapittel 11.1: Cournot-/duopolmodell og Nash-likevekt
**id:** `hio-statistikk-okonomi-11-1` · **number:** 11.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-statistikk-okonomi-10-1`

- **Kapitteltype:** teori-/metodekapittel (kunne — emnets mest uvanlige innslag).
- **Description:** Sette opp hver bedrifts **fortjenestefunksjon** fra oppgitt
  etterspørsel, derivere mhp. egen variabel for **reaksjonslikningene**, og løse
  systemet for **Nash-likevekten** — sjanger O. **Krever SVG-figur** (kryssende
  reaksjonslinjer).
- **Eksamensbelegg:** Sjanger O (3/5, 60 %; Cournot/duopol i mai 2013, januar
  2016, mai 2015). Prioritet: kunne (men helt fast innslag).
- **Forkunnskaper/kryssbok:** kap. 10.1 (derivasjon, førsteordensbetingelse).
  **Sist du var her:** optimum finnes ved å derivere mhp. egen beslutningsvariabel
  og sette $=0$. `collapsible` **Symbol- og formelliste:** $\Pi_i$, $x_i$, $p_i$,
  reaksjonslikning, Nash-likevekt.
- **Innholdskontrakt (flashcard-kilde):** **fortjenestefunksjon** $\Pi_i=(\text{pris}
  -\text{enhetskost})\cdot x_i$ ut fra oppgitt (invers) etterspørsel;
  **reaksjonslikning** = løsning av $\partial\Pi_i/\partial(\text{egen variabel})
  =0$ (behandle motpartens variabel som gitt); **Nash-likevekt** = løs
  reaksjonslikningene simultant (ingen ensidig gevinst ved avvik); optimal
  fortjeneste per bedrift ved innsetting.
- **Løsningsprosedyre:** (1) sett opp $\Pi_i$ for hver bedrift; (2) deriver mhp.
  EGEN variabel, sett $=0$ → reaksjonslikning; (3) løs systemet simultant; (4)
  sett inn → mengder, priser, fortjenester; (5) konkluder.
- **Typiske feil:** #11 (derivere mhp. motpartens variabel, eller behandle den som
  konstant feil); regnefeil i simultanløsningen; glemme enhetskosten i
  fortjenesten.
- **Modellsvar:** «To bedrifter har etterspørsel $x_1=295-p_1+0{,}5p_2$ og
  $x_2=295-p_2+0{,}5p_1$, enhetskost 5. Sett opp fortjenestefunksjonene, finn
  reaksjonslikningene og Nash-likevekten» `(fasit: p₁=p₂=200, x=195, Π=38 025 per
  bedrift — parametersjekket)`.
- **Figur:** `spillteori-reaksjonslinjer.svg` (to kryssende reaksjonslinjer i
  $(p_1,p_2)$-planet, Nash-punktet markert med stiplede hjelpelinjer).
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 11.2: Matrisespill, dominerte og blandede strategier + spillteori-drill
**id:** `hio-statistikk-okonomi-11-2` · **number:** 11.2 · **estimatedMinutes:** 50 · **prerequisites:** `hio-statistikk-okonomi-11-1`

- **Kapitteltype:** teori- + drillkapittel (kunne → differensierer mot A).
- **Description:** Matrisespill: finne rene **Nash-likevekter**, fjerne
  **dominerte strategier**, og løse med **blandede strategier**
  (indifferensbetingelsen), pluss en samlet spillteori-drill.
- **Eksamensbelegg:** Sjanger O; matrisespill 1/5 (mai 2015-7). Prioritet: kunne
  (matrisespill A-differensierende).
- **Forkunnskaper/kryssbok:** kap. 11.1 (Nash-logikken). `collapsible` **Symbol-
  og formelliste:** utbyttematrise, dominert strategi, blandet strategi,
  indifferensbetingelse.
- **Innholdskontrakt (flashcard-kilde):** **ren Nash-likevekt** = ingen spiller
  tjener på å avvike ensidig (marker best-svar i hver celle); **dominert
  strategi** = alltid dårligere enn en annen uansett motpart (kan fjernes);
  **blandet strategi** = sannsynlighetene som gjør MOTPARTEN indifferent (sett
  forventet utbytte for motpartens to valg likt og løs); nullsumspill-tolkning.
- **Løsningsoppskrift (drill):** (1) sjekk dominerte strategier, reduser; (2)
  finn rene Nash (best-svar-markering); (3) hvis ingen ren: løs blandet via
  indifferens; (4) konkluder.
- **Typiske feil:** overse dominerte strategier før man leter etter blandede;
  #11 (uklar best-svar-logikk); løse indifferens for feil spiller.
- **Modellsvar:** «Finn rene Nash-likevekter i utbyttematrisen; hvis ingen finnes,
  reduser ved dominans og løs med blandede strategier».
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A fortjenestefunksjon + reaksjonslikninger ·
11.B Cournot-Nash-likevekt · 11.C ren Nash + dominans i matrisespill · 11.D
blandede strategier, eksamensnivå).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspillet — løsningsoppskrifter A–O
**id:** `hio-statistikk-okonomi-12-1` · **number:** 12.1 · **estimatedMinutes:** 60 · **prerequisites:** `hio-statistikk-okonomi-11-2`

- **Kapitteltype:** sjanger-/oppskriftskapittel (meta).
- **Description:** Én kompakt løsningsoppskrift per sjanger A–O (identifikasjon →
  metode → vanligste feil → tidsbudsjett), pluss en **kald bank** (8–10 oppgaver
  med uvante vinklinger, UTEN hint, momentliste-fasit).
- **Eksamensbelegg:** Metakapittel (hele arkivet). Skal la kandidaten kjenne igjen
  hvilken sjanger en oppgavetekst er, og hvilken oppskrift som gjelder. Prioritet:
  perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Samlet oppslagskort**
  (regnefagets «formel-minimum-side»): de uunngåelige formlene fra begge bolker
  (fordelinger, KI, testobservatorer, NV, DB, reaksjonslikning) hver med én
  ordlinje — printbar ren tabell (README «Samlet oppslagskort»).
- **Innholdskontrakt:** sjanger-oppskrift A–O (én linje per: kjennetegn → metode
  → typisk felle → minutter); **kald bank** merket eksplisitt (uvante
  kombinasjoner: fordelingsvalg-felle, sunk cost + arbeidskapital sammen, Nash
  med asymmetriske kostnader), momentliste-fasit.
- **Sjangre:** alle A–O i kortform + kald bank.
- **Typiske feil:** hele feilregisteret #1–#12 samlet med ett-linjes botemiddel.
- **Kvote:** 24 quiz / 18 flashcards.

#### Kapittel 12.2: Øvingseksamen 1 (med full løsning)
**id:** `hio-statistikk-okonomi-12-2` · **number:** 12.2 · **estimatedMinutes:** 90 · **prerequisites:** `hio-statistikk-okonomi-12-1`

- **Kapitteltype:** øvingseksamen (komplett sett + fasit).
- **Description:** Et nyskrevet 7-oppgavers sett i arkivmalen, **50/50
  statistikk/økonomi**, med full modellsvar-fasit i A-stil (definer → sett opp →
  regn → konkluder i kontekst) og Sensorblikket per oppgave.
- **Eksamensbelegg:** Speiler en «typisk» eksamen (analysen §7): én
  sannsynlighets-/fordelingsoppgave, én normalfordelings-/KI-oppgave, én full
  hypotesetest med p-verdi, én kalkyle-/DB-oppgave, én investeringsanalyse, én
  optimerings-/regnskapsoppgave, én spillteorioppgave. Prioritet: perfekt (meta).
- **Innhold:** komplett sett med vekting (angi begge modeller kan forekomme) og
  varighet; løsning i `collapsible` per oppgave; **kildeforbehold + etterfølger-
  merknad** gjentas (frekvenser per ITD20106-arkivet; verifiser mot etterfølger).
  Selvdiagnose-sjekkliste (☐) etter fasiten. Alle tall NYSKREVNE.
- **Sjangre:** A/C/E/F på statistikksiden; J-eller-K/L/M-eller-N/O på økonomisiden.
- **Typiske feil:** samlet påminnelse (#1–#12) i Sensorblikket.
- **Kvote:** 8 quiz / 4 flashcards.

#### Kapittel 12.3: Øvingseksamen 2 (med full løsning)
**id:** `hio-statistikk-okonomi-12-3` · **number:** 12.3 · **estimatedMinutes:** 90 · **prerequisites:** `hio-statistikk-okonomi-12-2`

- **Kapitteltype:** øvingseksamen (komplett sett + fasit).
- **Description:** Et andre nyskrevet 8-oppgavers sett med annen, men typisk
  profil (tyngre på diskrete fordelinger + investering; matrisespill i stedet for
  Cournot), full A-fasit og Sensorblikket.
- **Eksamensbelegg:** Komplementær profil til 12.2 slik at de to settene til
  sammen dekker sjangrene A–O minst én gang. Prioritet: perfekt (meta).
- **Innhold:** som 12.2, med hypergeometrisk (m/fpc), Poisson (m/rate-skalering),
  T-test (df fra lite utvalg), simultanfordeling, trangfaktor, full
  investeringsanalyse og matrisespill. Kildeforbehold + etterfølger-merknad
  gjentas. Selvdiagnose-sjekkliste (☐). Alle tall NYSKREVNE.
- **Sjangre:** B/G/E på statistikksiden; K/L/N/O på økonomisiden.
- **Typiske feil:** samlet påminnelse (#1–#12) i Sensorblikket.
- **Kvote:** 8 quiz / 4 flashcards.

**Prøve-kvote Del 12:** ingen egen prøve (Del 12s to øvingseksamener ER
generalprøvene; jf. Del 0-deltidsruten som fordeler dem på ulike økter).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 28 | 0 (dekkes av øvingseksamenene) |
| 1 | 2 | 36 | 42 | 4 |
| 2 | 3 | 58 | 64 | 4 |
| 3 | 2 | 32 | 40 | 4 |
| 4 | 2 | 34 | 40 | 4 |
| 5 | 3 | 58 | 66 | 4 |
| 6 | 2 | 30 | 36 | 4 |
| 7 | 2 | 34 | 38 | 4 |
| 8 | 2 | 34 | 38 | 4 |
| 9 | 3 | 54 | 60 | 4 |
| 10 | 2 | 32 | 38 | 4 |
| 11 | 2 | 34 | 36 | 4 |
| 12 | 3 | 40 | 26 | 0 (= 2 øvingseksamener) |
| **Sum** | **30** | **502 ✓ (≥500)** | **552 ✓ (≥500)** | **44** |

Summeringskontroll per del (quiz / flashcards):
- Del 0: 12+14 = **26** / 12+16 = **28**
- Del 1: 18+18 = **36** / 20+22 = **42**
- Del 2: 20+20+18 = **58** / 24+24+16 = **64**
- Del 3: 16+16 = **32** / 22+18 = **40**
- Del 4: 18+16 = **34** / 24+16 = **40**
- Del 5: 20+20+18 = **58** / 26+24+16 = **66**
- Del 6: 16+14 = **30** / 18+18 = **36**
- Del 7: 18+16 = **34** / 22+16 = **38**
- Del 8: 18+16 = **34** / 22+16 = **38**
- Del 9: 20+18+16 = **54** / 24+20+16 = **60**
- Del 10: 16+16 = **32** / 20+18 = **38**
- Del 11: 18+16 = **34** / 20+16 = **36**
- Del 12: 24+8+8 = **40** / 18+4+4 = **26**
- **Totalt: 502 quiz / 552 flashcards.** (Begge over gulvet 500.)

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: de tre «perfekt»-søylene — diskrete fordelinger
(Del 2), hypotesetest (Del 5) og investeringsanalyse (Del 9) — bærer 170 av 502
quiz og 190 av 552 flashcards.

### Prøver (4 per temadel, 44 totalt)

Fire prøver per temadel (Del 1–11). Hver prøve speiler eksamensmalen i miniatyr,
med **stokket fasit** (riktig svar varierer posisjon — aldri «alle a»; jf. README
«Stokket flervalg»). Omfang 25–45 min per prøve, deklarert som «4 prøver à ~X min
— kan trygt deles over flere kvelder, én prøve per økt». Alle oppgaver NYSKREVNE.
Prøvekapittel-id `hio-statistikk-okonomi-<del>-prove`, chapterNumber `<del>.P`
(jf. BYGGEKONTRAKT). Del 0 og Del 12 har ingen egen prøve (Del 12s to
øvingseksamener dekker helheten). Prøvetitlene er spesifisert per del i §3.

### Komplette øvingseksamener (2 — kapitlene 12.2–12.3)

To nyskrevne sett i arkivmalen (7–8 oppgaver, **~50/50 statistikk/økonomi**,
alle hjelpemidler + kalkulator, vedlagte tabellverdier oppgitt der de trengs),
med full modellsvar-fasit (A-stil: definer → sett opp → regn → konkluder i
kontekst) og Sensorblikket per oppgave. **Kildeforbehold + etterfølger-merknad i
begge:** sensorlogikken er utledet av to fulle fasiter (mai 2016, mai 2017) +
oppgaveinstrukser `(verifiser)`; frekvensene gjelder ITD20106-arkivet 2012–2016;
byggefasen bør verifisere mot ITD20218/IRM23223-sett. Til sammen dekker de to
settene sjangrene A–O minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, alle hjelpemidler + kalkulator,
   vedlagte tabeller, 7–8 oppgaver, ~50/50), to vektemodeller, karakter A–F,
   forkurs-adgangskrav.
2. **50/50-signaturen** — begge bolker må beherskes; ingen halvdel kan velges
   bort.
3. **Statistikk-kjernen** — de to garanterte søylene (hypotesetest,
   diskret-fordeling-valg) + normalfordeling/KI + regresjon.
4. **Økonomi-kjernen** — investeringsanalyse (best belagt) + kalkyle/DB +
   optimering/regnskap + spillteori.
5. **Sensorkravene** — vis mellomregninger, begrunn valg uoppfordret, definer
   notasjon først, konkluder i kontekst.
6. **Feilregisteret #1–#12** + botemidler.
7. **Kildeforbehold og etterfølger-profilering** (§ 0) — hva frekvensene bygger
   på, og at etterfølgerne (ITD20218/IRM23223) har splittet halvdelene.
8. **Formel-minimum-siden** (kap. 12.1 oppslagskort) — det som må sitte.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

1. **Del 0 først** (kap. 0.1 + 0.2) — etablerer notasjon, sjangerkoder,
   feilregister, kildeforbehold og etterfølger-profilering som resten refererer.
2. **Statistikkbolken (Del 1–6)** og **økonomibolken (Del 7–11)** kan bygges
   parallelt (uavhengige spor), maks 2 samtidige agenter. Innen hver bolk følg
   avhengighetsrekkefølgen (prerequisites-feltene).
3. **SVG-figurer:** `investeringsanalyse-naverdiprofil.svg` (Del 9) og
   `spillteori-reaksjonslinjer.svg` (Del 11) — valider XML, kjør
   `npx tsx scripts/upload-media-storage.ts` etter.
4. **Eksamenstrening (Del 12)** sist — trekker på hele boka.
5. **Parametersjekk (DNA-regnefag §Matematisk sannhetskontroll):** alle
   fortegns-/entydighets-/«alltid»-påstander og alle fasittall etterregnes
   numerisk (python3) FØR de skrives. Kjente sjekkpunkter allerede utført:
   hypergeometrisk fpc-faktor $\le 1$; Poisson rate-skalering; Cournot-Nash
   (p=200, Π=38 025); utvalgsstørrelse $n\ge 25$; $N(250,12)$-oppslag; optimering
   (x=250 / x=200). Se `(parametersjekket)`-merkene i §3.
6. **Verifiseringsbølge FØR commit:** build grønn (`npm run build`), prod-server-
   curl (200 + innholdssjekk), og et fagfelle-pass på de statistiske/økonomiske
   fasitene. **Skaff og verifiser mot ITD20218/IRM23223-sett** før boka meldes
   helt ferdig (etterfølger-forbeholdet).
7. Kvotene fra kvotesammendraget (§4) er fasit; forfatteren kan overskyte, aldri
   underskride (≥500 quiz / ≥500 flashcards, ≥4 prøver per temadel).

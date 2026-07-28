# Bokskjelett: FYS1001 Innføring i fysikk — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (49 sett 2003–2024: 36 slutteksamener + 13 midtveis;
> 2017–2024 lest grundig). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Alle mønstereksempler i dette skjelettet er omskrevne — de kan
> varieres videre, men aldri kopieres ordrett inn som oppgaver.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `fys1001` |
| Tittel | **FYS1001 Innføring i fysikk — eksamensrettet (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste oppgavemaler per hovedtema) |
| Antall kapitler | **35** (1 eksamenskart + 27 tema + 7 eksamenstrening) |
| Estimert totaltid | **2 665 min ≈ 44 timer** |
| Quiz totalt | **550** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** FYS1001-eksamen er encyklopedisk men dypt forutsigbar:
4 timer, 5–8 temaoppgaver med ~20–24 deloppgaver à 4 poeng som til sammen
treffer nesten hele fagbredden — hvert år. Mekanikk går igjen i 100 % av
settene, energi i 94 %, termofysikk i 86 %, kjernefysikk i 78 % (den mest
formelfaste malen i arkivet: reaksjonsligning → halveringstid → $E=\Delta mc^2$),
kretser i 75 % og fluidmekanikk i 64 % — mens numeriske metoder aldri er testet
på 21 år og SHM/induksjon er faset ut. Denne boka er kalibrert mot nettopp det:
full metodedrill på kjernetemaene, standardoppskrifter på nivå 2, egen
drillsjanger for de kvalitative «forklar hvorfor»-spørsmålene (25–40 % av
deloppgavene), og konsekvent trening i det sensor faktisk belønner: begrunnelse
i hvert ledd, riktige enheter (−1 poeng per brudd), riktig *metodevalg*
(energibevaring på krum bane, $P=RI^2$ i sammensatte kretser) og figurer tegnet
uoppfordret.

**Kritisk rammebetingelse (gjelder HELE boka):** Eksamen deler ut **formelark**
og tillater Gyldendals *Tabeller og formler i fysikk*. Boka skal derfor ALDRI
fremstille formler og konstanter som puggestoff. Skillet er: **«må kunne brukes
aktivt»** (velges, kombineres, omformes under tidspress — kjerneverktøyene i
kapitlenes innholdskontrakter) vs. **«hentes fra arket/tabellen»** (alle
naturkonstanter, materialdata, kjernemasser, halveringstider, sjeldne formler).
Hvert delkapittels Symbol- og formelliste markerer hvilke formler som står på
formelarket.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
$G = mg$ er **tyngden** (kraften), $\gamma$ er **gravitasjonskonstanten**
(ikke «G»!), $N$ = normalkraft, $R = \mu N$ = friksjonskraft, $B = \rho V g$ =
oppdrift og $B$ = magnetisk flukstetthet (kolliderer aldri i samme oppgave, men
symbollisten i hvert delkapittel skal alltid definere hvilken som gjelder),
$k$ = Coulomb-konstanten, $k_m$ = magnetisk konstant, $E$ = energi *eller*
elektrisk feltstyrke (defineres per delkapittel). Temperatur i **kelvin** i
gasslov og strålingslov. Alle tallsvar med enhet og 2–3 gjeldende siffer.

**Bevisst utelatt (0 kapitler — begrunnes kun i Del 0):** numeriske
metoder/programmering (0 forekomster på 21 år, tross emnebeskrivelsen),
harmoniske svingninger som formalisme ($T=2\pi\sqrt{l/g}$ o.l. — 3 spredte
forekomster, ingen etter 2016), induksjon/transformator (borte fra alle sett
etter 2019), RC-kretser/Wheatstone-bro/galvanometer (borte siden 2007),
relativitet utover $E=\Delta mc^2$ i kjernefysikk-kontekst (aldri testet).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Mekanikk I: bevegelse, krefter og likevekt | 6 | Mekanikk **100 %** — bærer 2–3 oppgaver hvert år → nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. Statikk (44 %) og sirkelbevegelse/gravitasjon (33 % som egen oppgave) hører faglig hjemme her. |
| 2 | Mekanikk II: energi, bevegelsesmengde og støt | 4 | Energi **94 %**, støt 56 %; støt-kjeden er en signatursjanger → 3 teorikapitler + eget drillkapittel. Metodefellen kinematikk-vs.-energi bor her. |
| 3 | Fluidmekanikk | 3 | 64 % på slutteksamen + så godt som alle midtveis; Bernoulli m/gyldighetsvurdering er signatursjanger og nivå 1 → 2 teori + drill. |
| 4 | Termofysikk | 5 | **86 %** (100 % siden 2013) → nivå 1 → 4 teorikapitler + drillkapittel. Strålingsbalanse/varmetransport (36 % + kortsvar) inngår her. |
| 5 | Elektrisitet og magnetisme | 4 | Kretser **75 %** (nivå 1, med effektfella) → teori + drill; elektrostatikk 42 % og ladd partikkel/magnetisme 44 % (nivå 2) → ett kapittel hver. Induksjon utelatt (borte etter 2019). |
| 6 | Bølger, lyd og optikk | 3 | Geometrisk optikk 64 % (nivå 2), bølger/lyd 31 % og stigende i seismikk-drakt, bølgeoptikk 19 % (kjenne — foldet inn i 6.1) → 3 kompakte teorikapitler med standardoppskrifter. |
| 7 | Atom- og kjernefysikk | 4 | Kjernefysikk **78 %** — mest forutsigbare mal i arkivet, nesten alltid siste oppgave → nivå 1 → 2 tunge teorikapitler + drillkapittel; atomfysikk 42 % (nivå 2) → 1 kapittel. |
| 8 | Eksamenstrening | 5 | Kvalitativ-drillen (sjanger Q — 25–40 % av deloppgavene!) + graf-/figurdrill + 3 komplette øvingseksamener (én med rammefortelling à la V2024). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Mekanikk I: bevegelse, krefter og likevekt |
| 2 | Mekanikk II: energi, bevegelsesmengde og støt |
| 3 | Fluidmekanikk |
| 4 | Termofysikk |
| 5 | Elektrisitet og magnetisme |
| 6 | Bølger, lyd og optikk |
| 7 | Atom- og kjernefysikk |
| 8 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger sjangerkapitler i siste del. Her ligger fem av syv
   drillkapitler (1.6, 2.4, 3.3, 4.5, 5.3, 7.4) inne i temadelene sine, fordi
   sjangrene er temaspesifikke gjengangere som må drilles rett etter teorien.
   Del 8 beholder de to *tverrgående* sjangrene (kvalitative forklaringer,
   graf/figur) og øvingseksamenene.
2. 35 kapitler ligger i toppen av DNA-ens 20–35-spenn: FYS1001 tester 6–9
   hovedtemaer i hvert sett (encyklopedisk eksamen), så bredden kan ikke
   komprimeres uten å miste sikre poeng.
3. Egen drillsjanger for kvalitative hverdagsforklaringer (8.1) er et tillegg
   utover DNA-ens sjangerkapittel-begrep — begrunnet i at 25–40 % av
   deloppgavene er kvalitative og sensor eksplisitt honorerer presisjon og
   trekker for svada/helgardering.

**Midtveiseksamen (20 % av karakteren):** dekker kun mekanikk, fluid og
innledende termofysikk (Del 1–4) — aldri elektromagnetisme, optikk eller
kjernefysikk. Prøvene 1.D, 2.D, 3.D og 4.D er dimensjonert slik at de samlet
fungerer som midtveis-generalprøve (se §4).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–Q) refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
A kortsvarsserie, B støt-kjeden, C skråplan/bremsing/Newton 2,
D statikk/momentbalanse, E sirkelbevegelse/loop/satellitt, F Bernoulli/
Torricelli/kontinuitet, G kalorimetri/faseoverganger, H ideell gass/prosesser,
I strålings-/varmebalanse, J kretsanalyse, K Coulomb/kraftbalanse, L ladd
partikkel i felt, M bølger/lyd/seismikk, N geometrisk optikk, O atom-/
kvantefysikk, P kjernefysikk/stråling, Q kvalitative hverdagsforklaringer.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Forkunnskaper-blokk med
kryssbok-lenker og `collapsible` **Symbol- og formelliste** rett etter
(SÆRLIG viktig i fysikk: ALLE symboler og formler i delkapitlet forklares, per
delkapittel — aldri arv fra tidligere kapitler — med markering av hva som står
på formelarket).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes FYS1001

- **id:** `fys1001-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 49 sett. Skal gjengi: (i) formen: 4 timers skriftlig skoleeksamen (80 %) med 5–8 temaoppgaver og ~20–24 deloppgaver à 4 poeng, alle likt tellende, kun hele poeng; midtsemestereksamen (20 %) dekker kun mekanikk/fluid/innledende termo; aldri flervalg på slutteksamen; 60–75 % kvantitative og 25–40 % kvalitative deloppgaver; hjelpemidler: kalkulator + utdelt formelark + Gyldendals tabellverk. (ii) Temafrekvens-tabellen: mekanikk 100 %, energi 94 %, termofysikk 86 %, kjernefysikk 78 %, kretser 75 %, geometrisk optikk 64 %, fluid 64 %, støt 56 %, statikk 44 %, magnetisme 44 %, atomfysikk 42 %, elektrostatikk 42 %, varmestråling 36 %, sirkelbevegelse/gravitasjon 33 %, bølger/lyd 31 %, bølgeoptikk 19 %. (iii) Utviklingen: fra kortsvarsserie (2011–2018) til rene temaoppgaver (2022–), rammefortelling i V2024, gjennomgående hverdags-/natur-/medisinkontekst. (iv) Bevisst utelatt stoff med begrunnelse: numerikk (aldri testet), SHM-formalisme (ingen etter 2016), induksjon/transformator (ingen etter 2019 — transformatorlikningen står uansett på formelarket om den skulle gjenoppstå som kortsvar), RC/Wheatstone (borte siden 2007), relativitet utover $E=\Delta mc^2$. (v) Sensorens metaregler: alt skal begrunnes (rene tallsvar gir nesten null), enheter obligatorisk (−1 p per brudd), egne symboler må innføres, følgefeil straffes ikke når mellomregning vises, ikke helgarder/ikke skriv langt, flere gyldige metoder godtas — men *feil* metode med riktig tall gir null. (vi) Karakternivåene: bestått = standardformler + enheter + billige a-deloppgaver; midtsjikt = flertrinnskjedene med figurer; topp = riktig metodevalg *med begrunnelse*, gyldighetsbetingelser, presise kvalitative svar, graf-/diagramproduksjon uoppfordret. (vii) Formelark-strategien: hva som må kunne *brukes*, hva som *hentes*.
- **Innholdskontrakt:** Oppgavetype-katalogen A–Q presenteres som studentens sjekkliste med frekvens per sjanger. Prognosen: 4-timers sett, muligens med rammefortelling; nesten sikkert én støt-/Newton-oppgave, én termofysikkoppgave, én kjernefysikkoppgave etter standardmalen, pluss 2–4 fra {fluid, optikk, magnetisme/ladd partikkel, kretser, bølger/lyd, atomfysikk, statikk}; 25–40 % kvalitativt. Leseplan: Del 1–4 før midtveis (teller 20 %); Del 1, 2, 3, 4, 5 og 7 er «må perfekt»-tunge; Del 6 «må kunne»; kjenne-stoff er markert i kapitlene. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «20 deloppgaver à 4 poeng på 240 minutter — sett opp tidsbudsjett, og avgjør hvilke deloppgaver du gjør først».
- **Typiske feil:** Metafeilene: pugge konstanter som står på arket i stedet for å trene metodevalg; helgardere; bruke tid på temaer med 0 % frekvens.
- **Quiz: 10 · Flashcards: 10** (frekvenser, poengregler, metaregler)

---

### Del 1 — Mekanikk I: bevegelse, krefter og likevekt *(prioritet: PERFEKT)*

#### Kapittel 1.1: Rettlinjet bevegelse: kinematikk med konstant akselerasjon

- **id:** `fys1001-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Bevegelsesligningene, grafene og den kritiske gyldighetsgrensen: kun konstant akselerasjon.
- **Eksamensbelegg:** Mekanikk-blokken står i **36/36 sett (100 %)**; bremselengde-/kinematikkdeloppgaver i praksis hvert år (sjanger C). Metodefellen «kinematikk på krum bane» er fasitens mest eksplisitte felle (V2023: energibevaring kreves, kinematikk godtas ikke selv med riktig tall). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Grunnleggende likninger](/1t/1t-2-1) og [Potenser med heltallseksponenter](/1t/1t-1-2) (omforming av formler); [Lineære funksjoner](/1t/1t-3-2) (graftolkning).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $v = v_0 + at$, $s = v_0t + \tfrac{1}{2}at^2$, $2as = v^2 - v_0^2$ — alle med eksplisitt gyldighetsflagg **kun konstant $a$**; fritt fall med $g$; gjennomsnittsfart vs. momentanfart; enhetsomregning km/t ↔ m/s. Graftolkning: $v$–$t$-graf (stigning = akselerasjon, areal = strekning), $s$–$t$-graf, avlesning av terminalfart fra $v$–$t$-kurve som flater ut. Gyldighetsgrensen begrunnes og peker frem til energimetoden (kap. 2.2). Bremselengde $s = v_0^2/(2|a|) \propto v_0^2$: dobbel fart → firedobbel lengde — skal kunne besvares *uten ny utregning*. **Figurkrav:** $v$–$t$- og $s$–$t$-grafer tegnes og leses av med markert avlesningspunkt.
- **Oppgavesjangre:** C (+ Q-innslag). Mønstereksempel: «En bil bremser jevnt fra 90 km/t og stopper på 45 m. Finn retardasjonen og bremsetiden — og avgjør uten ny utregning hva stopplengden blir fra 45 km/t.»
- **Typiske feil:** Bruke $2as = v^2 - v_0^2$ der $a$ ikke er konstant; lineær-tenkning i kvadratloven (tro at dobbel fart gir dobbel bremselengde); glemme å regne om km/t til m/s; oppgi svar uten enhet (−1 p).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Newtons lover og frilegemediagrammet

- **id:** `fys1001-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-1-1`
- **kapitteltype:** teori
- **description:** Newtons tre lover, kraftidentifikasjon og figuren sensor alltid vil se: frilegemediagrammet.
- **Eksamensbelegg:** Del av 100 %-blokken; fasitene tegner alltid frilegemediagram selv og oppfordrer eksplisitt til det; manglende figur som var viktig for klarheten koster inntil −1 p. Heis-varianten (tilsynelatende vekt) og trinse-/snorvarianter er gjengangere (sjanger C). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Vektorer i planet](/r1/r1-6-1) (kraftpiler og komponenter); for repetisjon av toppfysikk-perspektivet: [Vektorer og komponenter](/fysikk2/fysikk2-1-1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $\Sigma F = ma$ komponentvis; $G = mg$; normalkraft $N$; snordrag; Newtons 3. lov med riktige kraftpar (aldri $N$ og $G$ på samme legeme som «par»); tilsynelatende vekt i heis $N = m(g \pm a)$ med fortegnsresonnement; luftmotstand og terminalfart kvalitativt ($\Sigma F = 0$ ved terminalfart). Frilegemediagram-rutinen: isoler legemet, tegn ALLE krefter med angrepspunkt og retning, navngi med bokas notasjon ($G$, $N$, $R$, $S$), velg akser, dekomponer. To-legeme-systemer (snor over trinse): felles akselerasjon, indre krefter elimineres eller regnes per legeme. **Figurkrav:** frilegemediagram i hvert eksempel — tegnes FØR regning; kunstnerisk kvalitet likegyldig, retninger og fullstendighet teller.
- **Oppgavesjangre:** C (+ Q). Mønstereksempel: «Du står på badevekt i en heis som setter i gang oppover med 1,5 m/s². Tegn frilegemediagram, finn hva vekta viser, og forklar hvorfor den viser normalkraften — ikke tyngden.»
- **Typiske feil:** Utelate krefter i diagrammet (særlig normalkraft/snordrag); tegne «ma» som egen kraft; bruke Newtons 3. lov på krefter som virker på samme legeme; regne uten figur (koster klarhetspoeng); udefinerte egne symboler (−1 p).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.3: Friksjon, skråplan og bremsing

- **id:** `fys1001-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-1-2`
- **kapitteltype:** teori
- **description:** Sjanger C i full bredde: dekomponering på skråplan, friksjonskraft og bremseoppgavene som går igjen hvert år.
- **Eksamensbelegg:** Sjanger C forekommer i praksis i alle 36 sett i en eller annen form (sykkel med luftmotstand, kloss på skråplan, bremsende bil). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2; [Trigonometri i rettvinklede trekanter](/1t/1t-5-4) ($\sin\theta$/$\cos\theta$ til dekomponering).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $R = \mu N$; på skråplan $N = mg\cos\theta$ og komponent langs planet $mg\sin\theta$; ΣF = ma langs planet; på vannrett underlag $a = -\mu g$ (uavhengig av massen — kvalitativt poeng); kombinasjon med kinematikk fra 1.1 til bremselengde; hvilefriksjon vs. glidefriksjon kvalitativt (maksimal hvilefriksjon; hvorfor ABS-bremser virker); to legemer med snor over trinse der friksjon virker på det ene. Skille drivkraft/friksjon som fremdrift (skosåle mot bakke) fra friksjon som brems. **Figurkrav:** frilegemediagram med dekomponerte komponenter langs/normalt på planet.
- **Oppgavesjangre:** C (+ Q). Mønstereksempel: «En kasse på 12 kg skyves opp et skråplan på 25° med friksjonstall 0,30 og slippes så. Tegn frilegemediagram for begge fasene, avgjør om kassen blir liggende eller sklir ned, og finn i så fall akselerasjonen.»
- **Typiske feil:** Bruke $N = mg$ på skråplan (glemme $\cos\theta$); feil retning på friksjonskraften når bevegelsesretningen snur; blande $\sin$ og $\cos$ i dekomponeringen; glemme at friksjonen kan holde legemet i ro (statisk tilfelle).
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 1.4: Sirkelbevegelse, gravitasjon og satellittbaner

- **id:** `fys1001-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-1-2`
- **kapitteltype:** teori
- **description:** Sentripetalkraft med riktig fortegnsoppsett, loop-oppgaven og satellitten som gravitasjonens standardanvendelse.
- **Eksamensbelegg:** Egen oppgave i 12/36 sett (33 %; loop 2014v, satellitt 2019h og 2024h — «roterer inn igjen»), langt oftere som deloppgave; svingradius med friksjon er midtveis-gjenganger. Prioritet: **kunne** (satellitt: kjenne/kunne).
- **Forkunnskaper/kryssbok:** kap. 1.2–1.3; fordypning i kryssbok: [Sirkelbevegelse og sentripetalkraft](/fysikk2/fysikk2-1-4) og [Unnslippningsfart og satellittbaner](/fysikk2/fysikk2-2-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $a = v^2/r$; $\Sigma F_{\text{radiell}} = mv^2/r$ med fortegnsoppsett: bunn av loop $N - G = mv^2/r$, topp $G + N = mv^2/r$ vurdert mot analysens form $G - N$ avhengig av valgt positiv retning — poenget som SKAL frem: i toppen «mister kontakt når $N = 0$», som gir minstefart $v = \sqrt{gr}$. Gravitasjon: $F = \gamma mM/r^2$ (NB: $\gamma$, ikke «G» — $G$ er tyngden!); gravitasjon som sentripetalkraft gir banefart $v = \sqrt{\gamma M/r}$ (avhenger kun av radien — kvalitativt poeng); omløpstid $T = 2\pi r/v$; geostasjonær bane ($T$ = ett døgn) som standardregning. Dosert sving/flat sving med friksjon som sentripetalkraft. **Figurkrav:** kraftdiagram i topp- og bunnpunkt av loop; radiell retning markert.
- **Oppgavesjangre:** E (+ Q). Mønstereksempel: «En værsatellitt skal ha omløpstid på 24 timer. Vis først at banefarten bare avhenger av baneradien, og finn deretter radien i banen. Hvorfor kan ikke en slik bane ligge over Oslo?»
- **Typiske feil:** Sette $N = 0$ i bunnen av loopen; tegne en egen «sentripetalkraft» i tillegg til de virkelige kreftene; bruke $G$ som symbol for gravitasjonskonstanten (kolliderer med tyngden — bokas notasjon: $\gamma$); glemme at $v = \sqrt{\gamma M/r}$ er uavhengig av satellittens masse.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.5: Statikk og kraftmoment

- **id:** `fys1001-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-1-2`
- **kapitteltype:** teori
- **description:** Likevekt med klokt valgt momentpunkt: stige, kran, vippe og armens biomekanikk.
- **Eksamensbelegg:** 16/36 sett (44 %); egen oppgave bl.a. 2012v (kran), 2020v/2021v (tau og vektstang), 2024h (arm + vekt). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.2; [Trigonometri i rettvinklede trekanter](/1t/1t-5-4) (normalarm og skrå snorer).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $\Sigma F = 0$ komponentvis OG $\Sigma M = 0$; $M = F \cdot d$ med $d$ som **normalarm** (vinkelrett avstand fra momentpunkt til kraftens virkelinje); strategien «velg momentpunkt der ukjente krefter angriper» skal formuleres eksplisitt som regel og begrunnes. Klassiske oppsett som ALLE skal gjennomregnes i eksempler/oppgaver: planke/vippe på støtte, stige mot vegg, heisekran med motvekt, gjenstand i to skrå snorer ($F = mg/(2\sin\alpha)$), underarm med manual (bicepskraften blir mange ganger manualens tyngde — forklar via kort arm); veltegrense: motvirkende momenter settes like. **Figurkrav:** utvidet frilegemediagram med angrepspunkter og normalarmer inntegnet.
- **Oppgavesjangre:** D (+ Q). Mønstereksempel: «En 5,0 m lang planke på 20 kg hviler på to bukker 1,0 m fra hver ende. En person på 75 kg går utover den ene enden. Hvor langt forbi bukken kan hun gå før planken tipper? Velg momentpunkt og begrunn valget.»
- **Typiske feil:** Bruke skrå avstand i stedet for normalarm i $M = F\cdot d$; glemme at kraftbalansen ($\Sigma F = 0$) trengs i tillegg til momentbalansen; velge momentpunkt slik at alle ukjente blir stående; utelate tyngden av selve bjelken/planken.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.6: Drill: mekanikkoppgaven fra a til å

- **id:** `fys1001-1-6` · **number:** 1.6 · **estimatedMinutes:** 90 · **prerequisites:** `fys1001-1-5`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele kraft-blokken: fra frilegemediagram til fullført A-besvarelse med enheter og metodevalg.
- **Eksamensbelegg:** Dekker sjangrene C, D og E samlet — mekanikk bærer 2–3 av settets oppgaver hvert eneste år (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn frilegemediagram; 2) velg akser (langs/normalt på bevegelsen; radiell akse i sirkel); 3) dekomponer; 4) velg lov: $\Sigma F = ma$ (akselerert), $= 0$ (likevekt — husk $\Sigma M = 0$ ved utstrakte legemer), $= mv^2/r$ (sirkel); 5) kinematikk KUN hvis $a$ er konstant — ellers energimetode (flagg og henvis til 2.2); 6) tall til slutt, med enheter og 2–3 gjeldende siffer; 7) rimelighetsvurdering. Gjennomregnet eksamenscase med sensor-margnotater (hvor poengene sitter: figur, dekomponering, lovvalg, enheter). 10–15 oppgaver på eksamensnivå som roterer sjangrene: heis, skråplan opp/ned, sykkel med luftmotstand, trinse, loop, dosert sving, stige, kran, arm — alle i hverdags-/naturkontekst slik settene alltid er kledd.
- **Oppgavesjangre:** C, D, E. Mønstereksempel (full deloppgavekjede): «En akebrett-kjører (samlet masse 60 kg) starter fra ro øverst i en 40 m lang, jevn bakke på 12° med friksjonstall 0,08. (a) Tegn frilegemediagram. (b) Finn akselerasjonen. (c) Finn farten nederst. (d) Nederst flater bakken ut — hvor langt glir hun før hun stopper? (e) Forklar uten regning hva som skjer med svaret i (d) hvis farten nederst hadde vært dobbelt så stor.»
- **Typiske feil:** Hele §5-repertoaret for mekanikk samlet: kinematikk på krum bane, manglende figur, feil dekomponering, $N = mg$ på skråplan, enhetsslurv, tallsvar uten begrunnelse.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 1:** 4 prøver (1.A kinematikk og grafer · 1.B Newton og friksjon · 1.C sirkelbevegelse og statikk · 1.D samlet mekanikkprøve på eksamensnivå)

---

### Del 2 — Mekanikk II: energi, bevegelsesmengde og støt *(prioritet: PERFEKT)*

#### Kapittel 2.1: Arbeid, energi og effekt

- **id:** `fys1001-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-1-3`
- **kapitteltype:** teori
- **description:** Arbeidsbegrepet med fortegnsdisiplin, energiformene og effekt — fundamentet for energimetoden.
- **Eksamensbelegg:** Energi-temaet i 34/36 sett (**94 %**); arbeid/effekt-deloppgaver går igjen både på slutteksamen og midtveis. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.2–1.3; [Trigonometri i rettvinklede trekanter](/1t/1t-5-4) ($\cos\theta$ i arbeidsformelen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $W = Fs\cos\theta$ med fortegn (arbeid negativt når kraften virker mot bevegelsen; tyngdens arbeid er **null** på horisontal strekning — eksplisitt gjenganger-poeng); $E_k = \tfrac{1}{2}mv^2$; $E_p = mgh$ med fritt valg av nullnivå (og at bare *endringer* betyr noe); fjærenergi $\tfrac{1}{2}kx^2$ (bruksnivå); arbeid–energi-setningen $W_{\text{netto}} = \Delta E_k$; effekt $P = W/t = Fv$ (motoreffekt ved konstant fart opp bakke som standardanvendelse); virkningsgrad $\eta$ = nytte/tilført. **Figurkrav:** skisse med kraft- og bevegelsesretning for fortegnsvurdering av arbeid.
- **Oppgavesjangre:** C/B-deler (+ Q). Mønstereksempel: «En elsykkel med rytter (95 kg) holder konstant 18 km/t opp en 6 % stigning. Finn motorens effekt når rullemotstand og luftmotstand til sammen er 22 N, og forklar hvorfor tyngdens arbeid er negativt på vei opp.»
- **Typiske feil:** Fortegnsfeil på arbeid (§5.8 i analysen — friksjonens arbeid satt positivt); regne tyngdens arbeid på horisontal del; blande effekt og energi (W og P); glemme $\cos\theta$ når kraften er skrå.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.2: Energibevaring — og når kinematikken er forbudt

- **id:** `fys1001-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-2-1`
- **kapitteltype:** teori
- **description:** Energibevaring med friksjonslekkasje — og metodevalget som sensor eksplisitt bruker som karakterskille.
- **Eksamensbelegg:** Kjernen i 94 %-temaet. **Metodefellen fremfor noen (analysen §5.1):** konstant-a-kinematikk på krum bane (buet skråplan, pendel) er FEIL metode — fasiten krever energibevaring og sier uttrykkelig at kinematikk ikke godtas selv om tallsvaret blir likt (V2023). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1, 2.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: energibevaring $E_1 = E_2$ uten friksjon; med friksjon som «lekkasje»: $E_1 = E_2 + R\cdot s$; standardresultatet $v = \sqrt{2gh}$ ned friksjonsfri bane/pendel; stopplengde via $R\cdot s = \tfrac{1}{2}mv^2$; pendel (fart i bunnpunktet; hvorfor snordraget ikke gjør arbeid). **Metodevalg-regelen formuleres eksplisitt:** krum bane eller varierende kraft → energimetode; rett bane med konstant $a$ → valgfritt, begge godtas (fasitene viser gjerne begge). Toppsjikt-kravet: kunne *begrunne* metodevalget («akselerasjonen er ikke konstant langs buen, derfor gjelder ikke $2as = v^2 - v_0^2$»). **Figurkrav:** energiregnskap-skisse (før/etter med valgt nullnivå).
- **Oppgavesjangre:** B-trinn (i), C (+ Q). Mønstereksempel: «En kule slippes fra toppen av en buet, friksjonsfri sklie med høyde 3,2 m. (a) Finn farten nederst, og forklar hvorfor bevegelsesligningene for konstant akselerasjon ikke kan brukes her. (b) Nederst ruller kula ut på et gulv med friksjonstall 0,15 — hvor langt triller den?» *(idealisert som glidning i energiregnskapet)*
- **Typiske feil:** Kinematikk på krum bane (fasitens mest eksplisitte felle — gir null selv med riktig tall); glemme friksjonsleddet $R\cdot s$ i regnskapet; sette friksjonsarbeidet med feil fortegn; blande nullnivåer midt i regnestykket.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.3: Bevegelsesmengde og støt

- **id:** `fys1001-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-2-2`
- **kapitteltype:** teori
- **description:** Bevaring av bevegelsesmengde gjennom støtet, elastisk vs. uelastisk, og det relative energitapet.
- **Eksamensbelegg:** Støt i 20/36 sett (56 %); kjerneoppgave i V2020 og V2023, gjenganger på midtveis; «havarikommisjon»-varianten (baklengs fra bremsespor) i V2021. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.2.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $p = mv$; bevaring $\Sigma mv = \Sigma mv'$ **gjennom selve støtet** (og bare der — før/etter støtet gjelder energiregnskap med friksjon); fullstendig uelastisk støt (henger sammen, felles $v'$); elastisk støt (kinetisk energi bevart) vs. uelastisk (ikke bevart) — klassifisering med begrunnelse; relativt energitap $(E_2 - E_1)/E_1$ regnes eksplisitt; kraftstøt kvalitativt (hvorfor kollisjonsputer reduserer kraften: samme $\Delta p$, lengre tid). Retningsdisiplin: fortegn på hastigheter i én dimensjon. **Figurkrav:** før/etter-skisse med fartspiler og fortegnsvalg.
- **Oppgavesjangre:** B-trinn (ii) (+ Q). Mønstereksempel: «En vogn på 2,0 kg med fart 3,0 m/s tar igjen og kobler seg på en vogn på 4,0 kg med fart 0,6 m/s samme vei. Finn felles fart etter koblingen og det relative tapet av kinetisk energi, og forklar hvor energien ble av.»
- **Typiske feil (analysen §5.9):** Anta at kinetisk energi er bevart i uelastisk støt; «bevare» bevegelsesmengden gjennom hele forløpet (også der friksjon virker) i stedet for bare gjennom kollisjonen; fortegnsfeil ved motsatt rettede hastigheter.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.4: Drill: støt-kjeden (energi → bevegelsesmengde → friksjon)

- **id:** `fys1001-2-4` · **number:** 2.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1001-2-3`
- **kapitteltype:** drill
- **description:** Tre-trinns-resepten fasiten forventer i nøyaktig denne rekkefølgen — forlengs og baklengs.
- **Eksamensbelegg:** Sjanger B i 20/36 sett; standardresept: (i) fart før støt fra energibevaring, (ii) $p$-bevaring gjennom støtet, (iii) friksjonsarbeid/stopplengde etterpå. Baklengs-varianten («havarikommisjon»: fra bremsespor til kollisjonsfart) er egen gjenganger. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) del forløpet i faser (før støt / selve støtet / etter støtet); 2) energiregnskap i fasene utenfor støtet ($v = \sqrt{2gh}$, $R\cdot s = \tfrac{1}{2}mv^2$); 3) $p$-bevaring KUN gjennom støtet; 4) relativt energitap hvis spurt; 5) baklengs: samme kjede fra stopplengden og tilbake; 6) enheter + siffer. Gjennomregnet eksamenscase med sensor-margnotater om faseinndelingen (der poengene sitter). 8–15 varianter på eksamensnivå: rampe + kloss, pendelkule som treffer kloss, to biler i kryss (én dimensjon), «havarikommisjon» fra bremsespor, isklump på skråplan ut på flate.
- **Oppgavesjangre:** B (+ C-deler). Mønstereksempel: «En havarigruppe måler 18 m sammenhengende bremsespor etter at to sammenfiltrede biler (1 400 kg og 1 100 kg) gled til stopp med friksjonstall 0,60. Den ene bilen sto stille før smellen. Finn farten til den andre bilen rett før kollisjonen.»
- **Typiske feil:** Blande fase-verktøyene (energi i støtet, $p$ utenfor); hoppe over klassifiseringen elastisk/uelastisk; regne energitap av feil referanse; glemme samlet masse etter sammenkobling.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 2:** 4 prøver (2.A arbeid, energi og effekt · 2.B energibevaring med metodevalg-begrunnelse · 2.C bevegelsesmengde og støt · 2.D full støt-kjede på eksamensnivå)

---

### Del 3 — Fluidmekanikk *(prioritet: PERFEKT — signaturtema for emnet)*

#### Kapittel 3.1: Trykk, hydrostatikk og oppdrift

- **id:** `fys1001-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `fys1001-1-2`
- **kapitteltype:** teori
- **description:** Trykk i væskesøyler og oppdrift — de selvstendige småoppgavene som åpner fluid-oppgaven.
- **Eksamensbelegg:** Fluid i 23/36 slutteksamener (64 %) + så godt som alle midtveis — temaet står mye sterkere her enn i vanlige fysikk 1/2-løp (medisin/naturvitenskap-arven). Hydrostatikk og oppdrift er faste åpnings-deloppgaver. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.2 (kraftbalanse); [Brøkregning](/1t/1t-1-4) (tetthet og forholdstall).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: trykk $p = F/A$; væsketrykk $p = p_0 + \rho gh$ (absolutt vs. overtrykk — presiser hvilket som brukes); tetthet $\rho = m/V$ (verdier hentes fra tabell); oppdrift $B = \rho_{\text{væske}} V g$ (Arkimedes — oppdriften er tyngden av fortrengt væske, begrunnes via trykkforskjell topp/bunn); flyte-/synkevilkår ($\rho$-sammenligning; nedsenket volumandel for flytende legeme); tilsynelatende vekt under vann. Kvalitative gjengangere: svømmeblære, isfjell, trykk i ørene på dypt vann. **Figurkrav:** kraftdiagram for nedsenket legeme ($G$ og $B$).
- **Oppgavesjangre:** F-deler (+ Q). Mønstereksempel: «En dykker er på 22 m dyp i sjøvann. Finn det absolutte trykket der nede, og forklar med Arkimedes' lov hvorfor en fisk kan henge stille i vannet uten å svømme.»
- **Typiske feil:** Glemme atmosfæretrykket $p_0$ når absolutt trykk etterspørres; bruke legemets tetthet i stedet for væskens i $B = \rho Vg$; bruke hele volumet for et flytende (delvis nedsenket) legeme.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.2: Bernoulli, kontinuitet og Torricelli — med gyldighetsvurdering

- **id:** `fys1001-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-3-1`
- **kapitteltype:** teori
- **description:** Hovedverktøyet i fluid-oppgaven: Bernoulli mellom to kloke punkter — og toppkarakter-kravet om å vurdere når ligningen gjelder.
- **Eksamensbelegg:** Sjanger F: 23/36 slutteksamener + nesten alle midtveis; Torricelli-varianten i V2021 og V2024 (magmakammer); **gyldighetsvurderingen er eksplisitt toppnivåkrav** (V2024: begrunne hvorfor lava bryter idealfluid-antakelsene). Poiseuille i kortsvar 2015v/2016v (blodstrøm). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2 (energibevaring — Bernoulli presenteres som energiligning per volum), kap. 3.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kontinuitet $A_1v_1 = A_2v_2$; volumstrøm $q_V = Av$; Bernoulli $p + \rho gh + \tfrac{1}{2}\rho v^2 = \text{konst}$ mellom to **fornuftig valgte punkter** — strategien formuleres som regel: velg punkter der du kjenner flest størrelser, og sett fart ≈ 0 der tverrsnittet er stort (reservoaroverflate, stort kammer); Torricelli $v = \sqrt{2gH}$ som spesialtilfelle (utledes fra Bernoulli — aktiv utledning); **gyldighetsbetingelsene som eget læringspunkt:** inkompressibelt, ikke-viskøst idealfluid i stasjonær strøm — og øvelse i å begrunne brudd (viskøs væske, flerfase, ikke-stasjonær strøm). «Bør kjenne til» (etter kjernestoffet, markert): Poiseuille-innsikten $\Delta p \propto l/r^4$ kvalitativt (blodårer: liten radiusendring gir stor motstandsendring; formelen hentes fra tabell). **Figurkrav:** strømningsskisse med valgte punkter 1 og 2 markert.
- **Oppgavesjangre:** F (+ Q). Mønstereksempel: «Et vanntårn har fri overflate 14 m over en tappekran med tverrsnitt 2,0 cm². Finn utstrømningsfarten og volumstrømmen, gjør eksplisitt rede for antakelsene bak utregningen — og forklar hvorfor svaret ville vært galt for tykk sirup.»
- **Typiske feil (analysen §5.4):** Bruke Bernoulli ukritisk uten å sjekke/nevne betingelsene; velge punkter der ingenting er kjent; glemme å sette $v \approx 0$ ved stor overflate (eller sette det der det ikke gjelder); blande volumstrøm og fart.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Drill: Bernoulli-verktøykassen

- **id:** `fys1001-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `fys1001-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på fluid-oppgaven: punktvalg, Torricelli, kontinuitet og gyldighetsvurdering i alle varianter.
- **Eksamensbelegg:** Sjanger F samlet (23/36 + midtveis). Varianter i arkivet: tank/reservoar med hull, innsnevret rør, hageslange, magma opp gjennom kanal, blodstrøm. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) skisser strømmen og velg punkt 1 og 2 (kjente størrelser!); 2) sett $v \approx 0$ ved stor flate — begrunn; 3) Bernoulli, stryk ledd som er like; 4) kontinuitet hvis to tverrsnitt inngår; 5) volumstrøm hvis spurt; 6) gyldighetsvurdering når konteksten inviterer (alltid ved «vurder/forklar»-hale); 7) enheter. Gjennomregnet eksamenscase med sensor-margnotater. 8–12 oppgaver på eksamensnivå, inkludert minst to med kvalitativ gyldighets-hale og én hydrostatikk/oppdrift-kombinasjon.
- **Oppgavesjangre:** F, Q. Mønstereksempel: «Vann strømmer gjennom et horisontalt rør som snevres fra 4,0 cm² til 1,0 cm² tverrsnitt. Trykkfallet over innsnevringen måles til 8,4 kPa. Finn farten i det trange partiet, og forklar hvorfor trykket er *lavest* der farten er størst.»
- **Typiske feil:** Som 3.2, pluss: bruke Bernoulli over en pumpe/turbin (energi tilføres/tas ut); droppe gyldighetshalen og tape toppnivåpoengene.
- **Quiz: 10 · Flashcards: 5**

**Prøve-kvote Del 3:** 4 prøver (3.A hydrostatikk og oppdrift · 3.B kontinuitet og Bernoulli · 3.C Torricelli med gyldighetsvurdering · 3.D full fluidoppgave på eksamensnivå)

---

### Del 4 — Termofysikk *(prioritet: PERFEKT — 100 % siden 2013)*

#### Kapittel 4.1: Kalorimetri og faseoverganger

- **id:** `fys1001-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen (kan leses uavhengig av Del 1–3)
- **kapitteltype:** teori
- **description:** Varmeregnskap ledd for ledd, latent varme og fasitens favorittfigur: temperatur–tid-kurven med knekk.
- **Eksamensbelegg:** Sjanger G: del av termofysikk-oppgaven i de fleste av de 31/36 settene med termo (86 %); hovedoppgave i 2019v, 2020v (is fra −20 °C til damp), 2024h (smelting av uran). T–t-kurven skal kunne både tegnes og leses av. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Lineære funksjoner](/1t/1t-3-2) (stigningstall i T–t-graf); kap. 2.1 (energi og effekt).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $Q = cm\Delta T$ ledd for ledd; latent varme $Q = lm$ ved smelting/fordamping ($c$- og $l$-verdier hentes fra tabell); energibalanse ved blanding (varme avgitt = varme mottatt — sett opp som ligning med ukjent sluttemperatur); effekt mot oppvarming $P = Q/t$; flertrinns regnskap (oppvarming fast → smelting → oppvarming væske → fordamping). **Figurkrav (fasitens favoritt):** temperatur–tid-kurve ved konstant tilført effekt: stigningstall ∝ $1/(cm)$, flate platåer ved smelte-/kokepunkt (platålengde ∝ $lm$) — skal kunne tegnes OG leses av (stigningstall → $c$; platålengde → $l$), med avlesningspunkter markert på grafen.
- **Oppgavesjangre:** G (+ Q). Mønstereksempel: «En kolbe tilfører 500 W til 0,80 kg av et ukjent stoff. Grafen viser temperatur mot tid med et flatt parti ved 62 °C. Bruk kurven til å bestemme spesifikk varmekapasitet i fast fase og smeltevarmen — vis avlesningene på grafen.»
- **Typiske feil:** Glemme et ledd i flertrinnsregnskapet (typisk smelteleddet); bruke feil $c$ (is vs. vann); sette avgitt = mottatt uten fortegnsdisiplin; lese platået som «ingen energi tilføres» (energien går til faseovergang — kvalitativt gjenganger-poeng).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Ideell gass

- **id:** `fys1001-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-4-1`
- **kapitteltype:** teori
- **description:** Gassloven i begge former, isoterme og isobare prosesser — og kelvin-disiplinen.
- **Eksamensbelegg:** Sjanger H: gassloven i godt over halvparten av moderne sett; konsentrasjonsutledningen $N/V = p/(kT)$ brukt til tetthetsresonnementer i V2023/V2024. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Praktisk bruk av likninger](/1t/1t-2-8) (løse for ukjent i flerbokstavsligning).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $pV = NkT$ **og** $pV = nRT$ — fasitene viser og godtar begge; regelen «velg den enkleste for spørsmålet» formuleres eksplisitt (antall molekyler → $NkT$; mol → $nRT$); konsentrasjon $N/V = p/(kT)$ utledes aktivt og brukes til å begrunne at tettheten avtar med høyden/temperaturen; isoterm $p_1V_1 = p_2V_2$; isobar $\Delta V/V = \Delta T/T$ — **alltid kelvin**; ideell gass-antakelsen kvalitativt (når den svikter: høyt trykk, nær kondensasjon). **Figurkrav:** $p$–$V$-skisse av isoterm og isobar prosess.
- **Oppgavesjangre:** H (+ Q). Mønstereksempel: «En dykkerflaske på 12 L holder 200 bar ved 20 °C. Finn antall gassmolekyler i flasken, og avgjør hva trykket blir når flasken varmes til 45 °C i sola. Hvorfor må temperaturen regnes i kelvin?»
- **Typiske feil (analysen §5.3):** Celsius i gassloven (den dyreste enkeltfeilen i termo); blande $k$ og $R$ (feil konstant til feil mengdemål); glemme at $\Delta V/V = \Delta T/T$ bare gjelder ved konstant trykk.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.3: Termofysikkens 1. lov, varmemaskiner og TS-diagrammet

- **id:** `fys1001-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `fys1001-4-2`
- **kapitteltype:** teori
- **description:** Energiregnskap med fortegnsdisiplin, syklusarbeid — og arealresonnementet i TS-diagrammet som nyere sett dyrker.
- **Eksamensbelegg:** Sjanger H: 1. lov med fortegn er fast innslag; **TS-diagram-oppgaven er nyeste sving** (V2024: $Q = T\Delta S$ som areal under kurven, arbeid per syklus = innesluttet areal, tilnærmet med rektangel + trekant); Carnot i eldre sett (2014v, 2015v); entropiberegning 2010v. Prioritet: **perfekt** (Carnot/entropi utover areal: **kjenne**).
- **Forkunnskaper/kryssbok:** kap. 4.2; [Areal under grafer](/r2/r2-2-6) (arealtolkning — kun intuisjonen, ingen integrasjon kreves).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $\Delta U = Q - W$ med fortegnskonvensjon **som på formelarket** (positiv $Q$ inn i gassen, positiv $W$ utført *av* gassen — konvensjonen fastslås én gang og brukes konsekvent); for en hel syklus $\Delta U = 0$ ⇒ $W = Q_{\text{netto}}$; arbeid som areal i $p$–$V$-diagram (bruksnivå); **TS-diagrammet:** $Q = T\Delta S$ = areal under kurven, arbeid per syklus = arealet innenfor den lukkede kurven — tilnærmes geometrisk (rektangel + trekant); virkningsgrad $\eta$ = nytte/tilført. «Bør kjenne til» (markert): Carnot $\eta = 1 - T_k/T_v$ (står på formelarket) og entropi som størrelse ($\Delta S$-tolkning; ingen $\ln$-beregninger drilles).
- **Oppgavesjangre:** H (+ Q). Mønstereksempel: «En varmemaskin gjennomløper en lukket syklus vist i et TS-diagram (trapesformet). Finn tilført varme fra arealet under øvre kurve, arbeidet per omløp fra det innesluttede arealet, og virkningsgraden — og begrunn hvorfor arbeidet er lik nettovarmen for en hel syklus.»
- **Typiske feil:** Fortegnskaos i $\Delta U = Q - W$ (bytte konvensjon midt i oppgaven); tolke areal under TS-kurve som arbeid (det er varme!); glemme at $\Delta U = 0$ over en syklus; celsius i $Q = T\Delta S$-arealet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Varmetransport og strålingsbalanse

- **id:** `fys1001-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-4-1`
- **kapitteltype:** teori
- **description:** Stefan–Boltzmann som balanseligning, Wiens lov og varmeledning gjennom sjikt — pluss de kvalitative klassikerne.
- **Eksamensbelegg:** Sjanger I: 13/36 som regneoppgave (36 %) + flere som kortsvar; U-verdi/sjikt i 2019h og 2022v; strålingsbalanse i V2017, V2021, V2023; Wien i V2017. Kvalitative gjengangere (snøsmelting rundt trær, klær, metall vs. tre) hører hit. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 4.1; [Potenser med heltallseksponenter](/1t/1t-1-2) ($T^4$-loven).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Stefan–Boltzmann $M = \sigma T^4$; utstrålt effekt $P = \varepsilon\sigma A T^4$ med emissivitet for ikke-svarte flater; netto stråling $P = \varepsilon\sigma A(T^4 - T_{\text{omg}}^4)$; **balansemetoden som hovedgrep:** effekt inn = effekt ut gir likevektstemperatur; Wien $\lambda_{\text{maks}} = a/T$ (plassere strålingstoppen: IR for kropper, synlig for sola); varmeledning $H = \lambda A\Delta T/L$, sjikt i serie og U-verdi for vegg/tank; konveksjon kvalitativt (hvorfor klær og stillestående luft isolerer: hindret konveksjon + redusert stråling). De tre transportmekanismene skal kunne skilles med eksempler. **Figurkrav:** balanseskisse (piler inn/ut) og temperaturprofil gjennom sjikt.
- **Oppgavesjangre:** I, Q. Mønstereksempel: «En utepeis-stein på 350 °C står i −5 °C vinterluft. Finn netto utstrålt effekt per kvadratmeter når emissiviteten er 0,90 — husk kelvin — og forklar hvorfor snøen smelter i en ring rundt en mørk trestamme om våren.»
- **Typiske feil (analysen §5.3, §5.10):** Celsius i $T^4$ (katastrofal pga. fjerdegradsloven); glemme emissiviteten; regne bare utstråling og glemme innstrålingen fra omgivelsene (netto!); lineær-tenkning i $T^4$-loven; blande hvilken mekanisme som forklarer hva i kvalitative svar.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 4.5: Drill: termofysikkoppgaven

- **id:** `fys1001-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `fys1001-4-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele termo-blokken: gass + kalorimetri + TS-areal + strålingsbalanse i eksamensformat.
- **Eksamensbelegg:** Sjangrene G, H og I samlet: termofysikk i 31/36 sett, 100 % siden 2013 — så godt som sikker oppgave i neste sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift per undersjanger: kalorimetri (faseinndelt varmeregnskap → ligning → løs), gassprosess (identifiser hva som holdes konstant → riktig spesialtilfelle → kelvin), TS/syklus (areal under = varme, innesluttet = arbeid, $\eta$), strålingsbalanse (inn = ut → løs for $T$). Gjennomregnet eksamenscase med sensor-margnotater. 10–15 oppgaver på eksamensnivå i settenes kontekster: husisolasjon, varmtvannstank, kaffekopp som kjølner, vulkansk bergart, kokeplate, drivhus/planet-likevektstemperatur — minst tre med T–t- eller TS-grafproduksjon/avlesning og minst tre kvalitative haler.
- **Oppgavesjangre:** G, H, I, Q. Mønstereksempel: «(a) 1,5 kg is på −18 °C varmes til vann på 25 °C — finn samlet varme. (b) Tegn T–t-kurven ved konstant effekt 800 W med tidspunktene for knekkene. (c) Vannet står så i en isolert tank med U-verdi oppgitt — finn varmetapet per time. (d) Forklar hvorfor tanken taper mer varme per grad når det blåser rundt den.»
- **Typiske feil:** Hele termo-repertoaret samlet: kelvin-fellene, glemte faseledd, fortegn i 1. lov, areal-forvekslingen i TS, netto vs. brutto stråling.
- **Quiz: 10 · Flashcards: 5**

**Prøve-kvote Del 4:** 4 prøver (4.A kalorimetri med T–t-graf · 4.B ideell gass · 4.C 1. lov og TS-diagram · 4.D varmetransport og strålingsbalanse)

---

### Del 5 — Elektrisitet og magnetisme *(kretser: PERFEKT; felt: KUNNE)*

#### Kapittel 5.1: Elektrostatikk: Coulomb-kraft, felt og kraftbalanse

- **id:** `fys1001-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-1-2`
- **kapitteltype:** teori
- **description:** Coulombs lov med vektorsuperposisjon og symmetriargument, homogent felt og den klassiske snor-kule-balansen.
- **Eksamensbelegg:** Sjanger K i 15/36 sett (42 %); signaturoppsett: ladninger i kvadrat/trekant med symmetriargument (V2024, V2017), to ladde kuler i snorer (kraftbalanse), elektrisk kraft vs. gravitasjon (svar: elektrisk dominerer med mange tierpotenser). Kondensatorens feltlinjer skal kunne tegnes (V2021). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.2 (kraftbalanse), 1.5 (komponentvis likevekt); fordypning: [Elektrisk ladning og Coulombs lov](/fysikk2/fysikk2-3-1) og [Elektrisk felt](/fysikk2/fysikk2-3-2).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $F = kq_1q_2/r^2$ med **vektorsuperposisjon**: tegn kreftene, bruk symmetri — men *begrunn* hvilke bidrag som kansellerer (retningsargument kreves for uttelling); snor-kule-oppsettet: kraftbalanse gir $\tan\theta = F_e/G$; sammenligning elektrisk kraft vs. gravitasjonskraft mellom elementærpartikler (størrelsesorden-poeng); homogent felt $E = U/d$, kraft $F = qE$, arbeid $W = qU$ → $v = \sqrt{2qU/m}$; kondensator kvalitativt: ladningsfordeling og feltlinjer (tegnes: jevnt felt mellom platene, retning fra + til −). **Figurkrav:** kraftpiler med superposisjon; feltlinjebilde for platekondensator.
- **Oppgavesjangre:** K (+ Q). Mønstereksempel: «Tre like positive ladninger sitter i hjørnene på en likesidet trekant. Finn retningen på kraften på ladningen i toppunktet, begrunn med symmetri hvilke komponenter som opphever hverandre, og beregn kraftens størrelse.»
- **Typiske feil:** Påstå symmetri uten argument (resultatet riktig, uttellingen borte — analysens §5.5-parallell); addere kraftstørrelser uten retning (skalar-summering); glemme kvadratet i $r^2$; blande $E$ (feltstyrke) og $E$ (energi) uten å definere symbolene.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.2: Elektriske kretser: Ohm, Kirchhoff og effektfella

- **id:** `fys1001-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `fys1001-5-1`
- **kapitteltype:** teori
- **description:** Kretsanalyse slik sensor vil se den: serie/parallell, Kirchhoff ved flere masker — og hvorfor $P = RI^2$ er tryggere enn $P = U^2/R$.
- **Eksamensbelegg:** Sjanger J i 27/36 sett (**75 %**). **Klassisk felle sensor fanger (V2021):** $P = U^2/R$ krever spenningen *over den aktuelle motstanden*, ikke kildespenningen — fasiten anbefaler $P = RI^2$. Spenningsdeler/formotstand i V2023 (solcelle → lampe, med $P = \eta MA$ for panelet); Kirchhoff med flere EMK-er i eldre sett; RC/Wheatstone/galvanometer er borte og utelates. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Grunnleggende likninger](/1t/1t-2-1) og [Likningssett](/1t/1t-4-1) (Kirchhoff gir lineære ligningssett).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $U = RI$; serie $R = \Sigma R_i$ (samme strøm), parallell $1/R = \Sigma 1/R_i$ (samme spenning) — med *hvorfor*; effekt $P = UI = RI^2$; **effektregelen formuleres eksplisitt: bruk $P = RI^2$ i sammensatte kretser, og bruk aldri $U^2/R$ uten å vise at $U$ er spenningen over akkurat den motstanden**; energiregnskap: samlet avsatt effekt = levert effekt; Kirchhoffs strømlov (knutepunkt) og spenningslov (maske) — oppsett med valgte strømretninger, negative svar tolkes som motsatt retning; indre motstand og polspenning; spenningsdeler for å dimensjonere formotstand; solcelle-konteksten $P = \eta MA$ (innstrålt effekt × areal × virkningsgrad). **Figurkrav:** kretsskjema med valgte strømretninger og maskepiler.
- **Oppgavesjangre:** J (+ Q). Mønstereksempel: «To motstander på 30 Ω og 60 Ω i parallell er koblet i serie med 20 Ω til et 12 V-batteri. Finn strømmen gjennom hver motstand og effekten i 60 Ω-motstanden — og forklar hvorfor $P = U^2/R$ med 12 V gir galt svar her.»
- **Typiske feil (analysen §5.2):** $P = U^2/R$ med kildespenningen (fasitens navngitte felle); snu serie- og parallellformlene; glemme at parallellmotstanden alltid er mindre enn den minste grenen (rimelighetssjekk); fortegnsrot i maskeligningene.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 5.3: Drill: kretsanalyse

- **id:** `fys1001-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `fys1001-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: fra kretsskjema til fullført A-besvarelse — reduksjon, Kirchhoff, effekt og dimensjonering.
- **Eksamensbelegg:** Sjanger J (27/36). Variantene i arkivet: ren serie/parallell-reduksjon, tre EMK-er og tre motstander algebraisk, formotstand-dimensjonering, effektbudsjett med indre motstand. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn/rydd skjemaet; 2) reduser serie/parallell trinnvis der det går; 3) ellers Kirchhoff: navngi strømmer med retning, knutepunkts- og maskeligninger, løs settet; 4) effekt per komponent med $P = RI^2$; 5) kontroll: levert = avsatt effekt; 6) tolk negative strømmer. Gjennomregnet eksamenscase med sensor-margnotater. 8–15 oppgaver på eksamensnivå, inkludert solcelle/batteri-kontekster, dimensjonering («hvilken formotstand trengs for at lampen skal få 6,0 V?») og minst to kvalitative haler («hva skjer med lysstyrken når én pære skrus ut i parallell vs. serie?»).
- **Oppgavesjangre:** J, Q. Mønstereksempel: «Et solcellepanel på 0,40 m² med virkningsgrad 18 % står i 800 W/m² innstråling og driver en LED-lampe via en formotstand. Finn panelets elektriske effekt, dimensjoner formotstanden når lampen krever 6,0 V og 0,50 A fra en 9,0 V-kilde, og vis at effektregnskapet balanserer.»
- **Typiske feil:** Som 5.2 samlet; i tillegg: gi opp maskeligningene og gjette strukturen — drillen skal automatisere oppsettet.
- **Quiz: 10 · Flashcards: 5**

#### Kapittel 5.4: Ladd partikkel i elektrisk og magnetisk felt

- **id:** `fys1001-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `fys1001-5-1`, `fys1001-1-4`
- **kapitteltype:** teori
- **description:** Akselerasjon over spenning, sirkelbane i magnetfelt — og nullarbeids-poenget fasiten alltid vil ha.
- **Eksamensbelegg:** Sjanger L i 16/36 sett (44 %); magnetisme-oppgaven i 2017h, 2018v/h, 2024v, 2024h (nordlys/magnetosfære-kontekst). **Nøkkelpoenget fasiten alltid honorerer (V2024):** magnetisk kraft ⊥ farten gjør null arbeid ⇒ farten er konstant. Felt fra rett leder + kraft mellom parallelle ledere i 2019v. α- vs. β-avbøyning via $q/m$ i V2023. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 1.4 (sentripetalkraft), 5.1 ($W = qU$); fordypning: [Magnetisk kraft på ladede partikler](/fysikk2/fysikk2-4-2) og [Magnetfelt fra strøm](/fysikk2/fysikk2-4-3).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: akselerasjon over spenning $qU = \tfrac{1}{2}mv^2$; magnetisk kraft $F = qvB$ vinkelrett på farten; **nullarbeids-resonnementet som eget læringspunkt:** kraften står alltid ⊥ på $v$ ⇒ gjør ikke arbeid ⇒ $E_k$ og fart er konstant — bare retningen endres; sirkelbane fra $qvB = mv^2/r$ ⇒ $r = mv/(qB)$; høyrehåndsregelen med riktig fortegn på ladningen (negativ ladning: motsatt retning); felt fra rett leder $B = k_m I/r$ og kraft mellom parallelle ledere (bruksnivå); anvendelser: massespektrometer, nordlys/partikler fanget i jordas magnetfelt, sammenligning av α- og β-avbøyning via $q/m$-forholdet. **Figurkrav:** baneskisse med $v$-, $B$- og $F$-retning markert (kryss/prikk-notasjon for felt inn/ut av planet).
- **Oppgavesjangre:** L (+ Q). Mønstereksempel: «Et elektron akselereres gjennom 2,0 kV og sendes vinkelrett inn i et magnetfelt på 1,5 mT. Finn farten inn i feltet og baneradien — og forklar hvorfor kinetisk energi er den samme etter tre runder i feltet.»
- **Typiske feil (analysen §5.11):** Feil retning fra høyrehåndsregelen for negative ladninger; tro at magnetisk kraft endrer farten (den endrer bare retningen); blande $E$- og $B$-feltets virkning; glemme at radien vokser med massen ($q/m$-logikken for α vs. β).
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 5:** 4 prøver (5.A elektrostatikk med symmetriargument · 5.B kretsregning · 5.C ladd partikkel i felt · 5.D kombinert elektrisitetsprøve på eksamensnivå)

---

### Del 6 — Bølger, lyd og optikk *(prioritet: KUNNE)*

#### Kapittel 6.1: Bølger, lyd og seismikk

- **id:** `fys1001-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen (kan leses uavhengig av Del 1–5)
- **kapitteltype:** teori
- **description:** Bølgefartens nav $v = f\lambda$, to-kilders interferens, desibelregning — og seismikk-innpakningen som er kommet for å bli.
- **Eksamensbelegg:** Sjanger M i 11/36 sett (31 %) og stigende i moderne drakt: to høyttalere i 2017h, 2018h, 2024h; P/S-bølger + Snells lov i fartsform i V2024 (seismikk); stående bølger/harmoniske 2014h; dB-regning som kortsvar. Bølgeoptikk (gitter, 19 % — **kjenne**) foldes inn her som interferens-anvendelse. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** [Eksponentialfunksjoner](/1t/1t-3-8) og [Potenser og logaritmer](/r1/r1-1-2) (log-regning i desibel).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $v = f\lambda$ som nav; longitudinale vs. transversale bølger **med eksempler** (lyd og P-bølger vs. EM-bølger og S-bølger — og at S-bølger ikke går gjennom flytende indre); to-kilders interferens: konstruktiv når ganglengdeforskjellen $\Delta l = n\lambda$, destruktiv ved $(n + \tfrac{1}{2})\lambda$ — regn ut $\Delta l$ og klassifiser; lydnivå $L = 10\log(I/I_0)$ og intensitet $I \propto 1/r^2$; stående bølger kvalitativt (grunntone og overharmoniske $f, 2f, 3f$); seismikk-anvendelsen: P/S-fartforskjell + Snells lov i fartsform $\sin\alpha_2/\sin\alpha_1 = v_2/v_1$ på laggrenser. «Bør kjenne til» (markert): gitter som mange-kilders interferens; kontrasten **gitter (interferens: ganglengdeforskjell = helt antall $\lambda$) vs. regnbue (dispersjon: $n$ avhenger av $\lambda$)** — kvalitativ gjenganger. **Figurkrav:** interferensskisse med ganglengder; strålebrekk over laggrense.
- **Oppgavesjangre:** M, Q. Mønstereksempel: «To høyttalere i et auditorium spiller samme tone på 340 Hz i fase. Du sitter 5,0 m fra den ene og 6,5 m fra den andre. Hva hører du, og hvorfor? Hva endres hvis frekvensen dobles?»
- **Typiske feil (analysen §5.10):** Glemme kvadratet i $I \propto 1/r^2$ (dobbel avstand ≠ halv intensitet); blande konstruktiv/destruktiv betingelse; klassifisere lydbølger som transversale; regne dB lineært.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Brytning, totalrefleksjon og fargespredning

- **id:** `fys1001-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `fys1001-6-1`
- **kapitteltype:** teori
- **description:** Snells lov med alt tilbehør: fart i medium, uendret frekvens, totalrefleksjon — og symmetriargumentet sensor krever utskrevet.
- **Eksamensbelegg:** Del av optikk-temaets 23/36 (64 %); glasskule-/prismeoppgaven i V2023 krever at symmetriargumentet («likebeint trekant gir $\theta_{\text{ut}} = \theta_{\text{inn}}$») faktisk *argumenteres*, ikke påstås; «frekvensen er uendret ved mediegrense» er fast kvalitativt poeng (V2023). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Trigonometri i rettvinklede trekanter](/1t/1t-5-4), [Vinkler og trekanter](/1t/1t-5-1) (geometrien i strålegangen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $n_1\sin\theta_1 = n_2\sin\theta_2$ (vinkler mot normalen!); fart i medium $c = c_0/n$; **frekvensen er uendret** over grenseflater mens bølgelengden endres ($\lambda = v/f$) — begrunnes; totalrefleksjon $\sin\theta_c = n_2/n_1$ (kun fra tett til tynt medium — vilkåret skal begrunnes); anvendelser: optisk fiber, ting som «ser grunnere ut» i vann; prisme/glasskule: geometrisk gjennomgang der symmetriargumentet skrives ut ledd for ledd; dispersjon ($n$ avhenger av $\lambda$) → regnbue/prismefarger. **Figurkrav:** strålegang med normal og vinkler markert; totalrefleksjonsskisse.
- **Oppgavesjangre:** N (+ Q). Mønstereksempel: «En lysstråle treffer en glassplate ($n = 1{,}52$) under 55° mot normalen. Finn brytningsvinkelen og lysfarten i glasset, og forklar hvorfor frekvensen — men ikke bølgelengden — er den samme inne i glasset.»
- **Typiske feil (analysen §5.5):** Påstå symmetri uten argument (glasskula); måle vinkler mot flaten i stedet for normalen; bruke totalrefleksjon fra tynt til tett medium; si at frekvensen endres i mediet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.3: Linser, speil og synet

- **id:** `fys1001-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-6-2`
- **kapitteltype:** teori
- **description:** Linseformelen med fortegnskonvensjon, strålekonstruksjon og øye/brille-konteksten som går igjen.
- **Eksamensbelegg:** Sjanger N: geometrisk optikk i 23/36 sett (64 %); øye/brille/lupe-kontekst gjennomgående (nærpunkt, akkomodasjon, samlet styrke ≈ sum av styrker); strålegangskonstruksjon forventes tegnet; lupe-varianten (objekt innenfor brennvidden, virtuelt bilde) i V2021. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.2; [Brøkregning](/1t/1t-1-4) (linseformelens brøkalgebra).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: linse-/speilformelen $\tfrac{1}{a} + \tfrac{1}{b} = \tfrac{1}{f}$ med fortegnskonvensjon (virtuelt bilde → negativ $b$; spredelinse → negativ $f$); forstørrelse $m = b/a = y'/y$; linsestyrke $D = 1/f$ i dioptrier; **strålekonstruksjon med de tre standardstrålene** (parallellstråle → brennpunkt, brennpunktstråle → parallell, senterstråle rett frem) — tegnes i alle eksempler; reelt vs. virtuelt bilde med fysisk tolkning; øyet: nærpunkt, akkomodasjon, nærsynt/langsynt og brilleglassets fortegn, samlet styrke ≈ sum av styrker (bruksnivå); lupe (objekt innenfor $f$: forstørret, virtuelt, rettvendt). **Figurkrav:** strålekonstruksjon i hvert eksempel — regning OG konstruksjon skal stemme overens.
- **Oppgavesjangre:** N (+ Q). Mønstereksempel: «En samlelinse med brennvidde 6,0 cm holdes 4,0 cm fra et frimerke. Avgjør ved regning og strålekonstruksjon hvor bildet ligger, om det er reelt eller virtuelt, og forstørrelsen — og forklar hvorfor dette er prinsippet bak en lupe.»
- **Typiske feil:** Fortegnsslurv (positiv $b$ for virtuelt bilde); blande $a$ og $b$; konstruksjon som motsier regningen (sensor sammenligner); glemme dioptri-definisjonen ($f$ i meter!).
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (6.A bølger, lyd og interferens · 6.B brytning og totalrefleksjon · 6.C linser med strålekonstruksjon · 6.D kombinert bølge-/optikkprøve på eksamensnivå)

---

### Del 7 — Atom- og kjernefysikk *(kjernefysikk: PERFEKT)*

#### Kapittel 7.1: Fotoner, Bohr-modellen og spektra

- **id:** `fys1001-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-6-1`
- **kapitteltype:** teori
- **description:** Fotonenergi, energinivåer og hvorfor gasser sender ut linjespekter — pluss fotoelektrisk effekt og røntgenrørets minstebølgelengde.
- **Eksamensbelegg:** Sjanger O i 15/36 sett (42 %); nivå-identifikasjon («hvilken overgang gir linjen på 656 nm?») i V2024; linjespekter-begrunnelsen i V2023; fotoelektrisk effekt og røntgen ($\lambda_{\text{min}}$) i 2015h/2019h. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 5.1 ($W = qU$ for røntgenrøret), 6.1 ($v = f\lambda$); fordypning: [Fotoelektrisk effekt og fotoner](/fysikk2/fysikk2-7-1) og [Bohrs atommodell](/fysikk2/fysikk2-7-5).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: fotonenergi $E_f = hf = hc/\lambda$; Bohr-nivåer $E_n = -B/n^2$; overgang $E_f = E_m - E_n$ — matche energidifferanser mot oppgitte nivåer for å identifisere spektrallinjer; ioniseringsenergi $= -E_1$ og tilhørende maksimal bølgelengde $\lambda = hc/W$; **begrunnelsen «diskrete nivåer ⇒ linjespekter (ikke kontinuerlig)»** som eget kvalitativt læringspunkt; emisjon vs. absorpsjon; fotoelektrisk effekt $E_k = hf - W$ (grensefrekvens; hvorfor intensitet ikke hjelper under grensen); røntgen: $\lambda_{\text{min}} = hc/(eU)$, bremsestråling vs. karakteristisk stråling kvalitativt. **Figurkrav:** energinivådiagram med piler for overganger.
- **Oppgavesjangre:** O (+ Q). Mønstereksempel: «Et atom har oppgitte energinivåer −13,6, −3,4, −1,5 og −0,85 eV. Avgjør hvilken overgang som gir en linje på 656 nm, og forklar hvorfor gassen bare sender ut bestemte bølgelengder — ikke et kontinuerlig spekter.»
- **Typiske feil:** Blande fortegn i nivådifferansen (energien ut er $E_m - E_n > 0$); tro at sterkere lys løsriver elektroner under grensefrekvensen; glemme eV ↔ J-omregningen; identifisere linjer ved å gjette i stedet for å regne differanser.
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 7.2: Kjerneprosesser: reaksjonsligninger og A/Z-bevaring

- **id:** `fys1001-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** ingen (kan leses uavhengig)
- **kapitteltype:** teori
- **description:** Reaksjonsligninger som balanseregnskap: identifiser α, β og γ fra endringene i nukleontall og ladningstall.
- **Eksamensbelegg:** Sjanger P-trinn (i): kjernefysikk i 28/36 sett (**78 %**), i moderne sett så godt som alltid nest siste eller siste oppgave; reaksjonsligninger med eksplisitt A/Z-bevaring i V2021, V2023, V2024. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** ingen fagkrav utover kap. 0.1; [Algebra](/1t/1t-1-3) (balansering).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: nuklidenotasjonen $^A_Z\text{X}$; **bevaring av nukleontall $A$ og ladningstall $Z$ skal VISES eksplisitt i hver ligning** (sensorkravet); signaturene: α ($A{-}4$, $Z{-}2$), β⁻ ($A$ uendret, $Z{+}1$, elektron + antinøytrino ut), γ (verken $A$ eller $Z$ endres — eksitert kjerne); identifisere ukjent partikkel/datterkjerne fra endringene; henfallskjeder (flere α og β etter hverandre — summér endringene); fisjon (tung kjerne + nøytron → to fragmenter + nøytroner) og fusjon kvalitativt + ligningsoppsett; hvorfor nøytroner/protoner-forholdet driver β-henfall (kvalitativt, «bør kjenne til»). Kjernemasser og halveringstider **hentes alltid fra vedlegg/tabell**.
- **Oppgavesjangre:** P (+ Q). Mønstereksempel: «Uran-238 henfaller i en kjede via to α-henfall og to β⁻-henfall. Sett opp samlet reaksjonsligning, vis at både nukleontall og ladningstall balanserer, og identifiser sluttkjernen.»
- **Typiske feil:** Balansere bare $A$ og glemme $Z$ (eller omvendt); gi β-partikkelen nukleontall 1; utelate antinøytrinoet uten kommentar; regne α som helium-atom med elektroner i masseregnskapet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 7.3: Halveringstid, aktivitet og kjerneenergi

- **id:** `fys1001-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `fys1001-7-2`
- **kapitteltype:** teori
- **description:** Halveringstid i formel og graf, aktivitet — og energi fra massesvinn med $E = \Delta mc^2$.
- **Eksamensbelegg:** Sjanger P-trinn (ii)+(iii): halveringstid med grafisk avlesning etterspørres ofte (V2023); $E = \Delta mc^2$ med atommasser i u fra vedlegg (fisjon av U-235, radioaktiv oppvarming av jordas indre V2024, C-14-datering); dosimetri (Gy vs. Sv) hyppigst i eldre sett og kortsvar — medisinprofilens arv. Prioritet: **perfekt** (dosimetri: **kjenne**).
- **Forkunnskaper/kryssbok:** kap. 7.2; [Eksponentialfunksjoner](/1t/1t-3-8) og [Eksponential- og logaritmeligninger](/r1/r1-1-3) (løse for $t$ i halveringstidsformelen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $N = N_0 \cdot (\tfrac{1}{2})^{t/t_{1/2}}$ (også for masse og aktivitet); **grafisk avlesning:** finn $t_{1/2}$ der kurven er halvert — avlesning skal *markeres på grafen* (sensorkrav); aktivitet $A = \lambda N$ med $\lambda = \ln 2/t_{1/2}$; løse for tiden $t$ (logaritme eller halveringstelling); C-14-datering som standardanvendelse; **energi fra massesvinn:** $E = \Delta m c^2$ med atommasser i u fra vedlegg (u → kg-faktoren fra tabell), for henfall og fisjon; energi per reaksjon → effekt (radioaktiv oppvarming). «Bør kjenne til» (markert, etter kjernestoffet): dosimetri — absorbert dose $D = E/m$ (Gy) vs. ekvivalent dose $H = w_R D$ (Sv) med strålingsvektfaktor; hvorfor α er farligst innvendig. **Figurkrav:** henfallskurve med markert halveringsavlesning.
- **Oppgavesjangre:** P (+ Q). Mønstereksempel: «En prøve inneholder 4,0 µg av en nuklide med halveringstid 8,0 døgn. Finn massen etter 20 døgn, aktiviteten i dag, og — med kjernemasser fra vedlegget — energien som frigjøres per henfall. Vis på grafen hvordan halveringstiden kan leses av.»
- **Typiske feil (analysen §5.12–13):** Avlese «tiden til null» i stedet for tiden til halvering; blande Gy og Sv (glemme vektfaktoren); glemme u → kg i $E = \Delta mc^2$; bruke $\lambda$ og $t_{1/2}$ om hverandre uten $\ln 2$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.4: Drill: kjernefysikk-malen

- **id:** `fys1001-7-4` · **number:** 7.4 · **estimatedMinutes:** 90 · **prerequisites:** `fys1001-7-3`
- **kapitteltype:** drill
- **description:** Den mest forutsigbare oppgaven i arkivet, drillet til automatikk: reaksjonsligning → halveringstid → $E = \Delta mc^2$.
- **Eksamensbelegg:** Sjanger P: 28/36 sett, nesten alltid settets siste oppgave, i nøyaktig denne tre-trinns-formen — «ren poenghøsting for den som har drillet malen» (analysen §2). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) skriv reaksjonsligningen og VIS A/Z-balansen; 2) identifiser strålingstype fra endringene; 3) halveringstid: formel eller grafisk (marker avlesning); 4) aktivitet hvis spurt; 5) $\Delta m$ fra vedleggets atommasser (venstre minus høyre side), $E = \Delta mc^2$, u → kg; 6) evt. dose-hale (Gy/Sv); 7) enheter og størrelsesorden-rimelighet (MeV-skala per henfall). Gjennomregnet eksamenscase med sensor-margnotater. 8–15 oppgaver på eksamensnivå i settenes kontekster: medisinsk isotop, C-14-datering av funn, radioaktiv oppvarming av planetindre, fisjon i reaktor, radonmåling i kjeller — alle med nyskrevne nuklider/tall og vedleggs-stil masseoppgaver.
- **Oppgavesjangre:** P, Q. Mønstereksempel: «En medisinsk isotop med halveringstid 6,0 timer produseres kl. 06.00 med aktivitet 800 MBq. (a) Sett opp henfallsligningen (β⁻) og vis balansen. (b) Hva er aktiviteten kl. 18.00? (c) Finn frigitt energi per henfall fra massene i vedlegget. (d) Hvorfor angis pasientdosen i sievert og ikke i gray?»
- **Typiske feil:** Hele P-repertoaret samlet: A/Z-slurv, «tid til null»-avlesning, u → kg, Gy/Sv-forveksling.
- **Quiz: 10 · Flashcards: 5**

**Prøve-kvote Del 7:** 4 prøver (7.A fotoner og Bohr-modellen · 7.B reaksjonsligninger · 7.C halveringstid og massesvinn · 7.D full kjernefysikkoppgave etter standardmalen)

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Drill: kvalitative hverdagsforklaringer (sjanger Q)

- **id:** `fys1001-8-1` · **number:** 8.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–7
- **kapitteltype:** drill
- **description:** 25–40 % av deloppgavene er «forklar hvorfor»-spørsmål — dette kapitlet driller den presise 2–4-setningers forklaringen sensor honorerer.
- **Eksamensbelegg:** Sjanger Q utgjør 25–40 % av deloppgavene i ethvert moderne sett (økende, ~20 %+ i V2024 alene). Kravet: 2–4 setninger som treffer **riktig mekanisme med riktig fagbegrep** — ikke essay. Sensor honorerer presisjon og trekker eksplisitt for svada og helgardering (to motstridende svar = trekk). Prioritet: **perfekt** («billige poeng» ifølge analysen §7).
- **Innholdskontrakt:** Svarmalen etableres først: 1) navngi mekanismen (fagbegrep); 2) koble mekanismen til situasjonen; 3) konkluder — maks 4 setninger, ingen gardering. Deretter gjengangerbank med modellsvar, minst 20 stykker på tvers av hele boka, bl.a.: mørk flate absorberer mer og stråler mot omgivelsene (snøring rundt trestammer); metall kjennes kaldere enn tre ved samme temperatur (varmeledningsevne); klær og stillestående luft isolerer (hindret konveksjon + redusert strålingstap); temperaturinversjon; oppdrift/svømmeblære; dobbel fart → firedobbel bremselengde (kvadratloven); hvorfor kollisjonsputer reduserer kraften ($\Delta p$ over lengre tid); hvorfor magnetisk kraft ikke endrer farten (⊥ ⇒ null arbeid); hvorfor en kompassnål ikke rekker å følge 50 Hz vekselfelt (treghet); frekvens uendret over mediegrense; gitter vs. regnbue (interferens vs. dispersjon); linjespekter fra diskrete nivåer; hvorfor lava bryter Bernoulli-antakelsene; hvorfor $P = RI^2$ er tryggere enn $U^2/R$; hvorfor følbar temperatur ikke er det termometeret måler. Hver med henvisning til teorikapitlet sitt.
- **Oppgavesjangre:** Q. Mønstereksempel: «Om våren ligger snøen lenger på lyse jorder enn rundt mørke trestammer. Forklar med strålingsfysikk — i høyst fire setninger — hvorfor.»
- **Typiske feil (analysen §5.6, §5.14):** Svada uten mekanisme (den hyppigst påpekte enkeltfeilen); helgardering; essay der 3 setninger er svaret; riktig fenomen men feil fagbegrep (konveksjon der stråling er mekanismen).
- **Quiz: 20 · Flashcards: 35**

#### Kapittel 8.2: Drill: grafer og figurer — produsere og avlese

- **id:** `fys1001-8-2` · **number:** 8.2 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–7
- **kapitteltype:** drill
- **description:** Tverrgående figurtrening: diagrammene sensor forventer tegnet uoppfordret, og avlesningene som skal markeres på grafen.
- **Eksamensbelegg:** Grafer og figurer inngår **hvert år**: avlesning (halveringstidskurve, temperatur–tid, strøm–tid, terminalfart) og egenproduksjon (frilegemediagram, feltlinjer, strålegang, T–t-kurve med faseknekk, TS-diagram). Manglende figur som var viktig for klarheten: inntil −1 p; avlesning skal vises på grafen. Prioritet: **perfekt** (tverrgående ferdighet).
- **Innholdskontrakt:** To løsningsoppskrifter: *Produksjon* — sjekkliste per figurtype (akser med enheter, kvalitativt riktig form, merkede punkter; kunstnerisk kvalitet er likegyldig, retninger og fullstendighet teller): frilegemediagram, T–t-kurve med knekk, TS-syklus, strålegang gjennom linse, feltlinjer i kondensator, kraftpiler i loop. *Avlesning* — marker avlesningspunktet, skriv av verdiene med enhet, vis regnestykket fra avlesning til svar: halveringstid (tid til halvert verdi!), terminalfart (der kurven flater), stigningstall → varmekapasitet, platålengde → smeltevarme, areal i TS → varme/arbeid. 10–14 oppgaver som kun handler om figurene (produksjon + avlesning), på tvers av alle deler.
- **Oppgavesjangre:** Tverrgående (støtter C, G, H, I, N, P). Mønstereksempel: «Grafen viser aktiviteten til en prøve som funksjon av tid. Marker på grafen hvordan du leser av halveringstiden, og forklar hvorfor tiden til aktiviteten når null IKKE er relevant.»
- **Typiske feil:** «Tid til null»-avlesningen; grafer uten akse-enheter; frilegemediagram i etterkant (etter regningen — poenget er at figuren styrer regningen); TS-areal tolket som arbeid under kurven.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 8.3: Øvingseksamen 1: standard temaoppgave-mal

- **id:** `fys1001-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `fys1001-8-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter 2022–2024-malen: 7 temaoppgaver, 21 deloppgaver à 4 poeng.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (V2022/V2023-form): **7 oppgaver der hver dekker ett hovedtema, 21 deloppgaver à 4 poeng, alle likt tellende**: O1 mekanikk/støt-kjeden (4 delopg.), O2 termofysikk gass + kalorimetri (3), O3 kretser med effektfelle-hale (3), O4 fluid med gyldighetsvurdering (3), O5 geometrisk optikk med konstruksjon (3), O6 ladd partikkel i felt (2), O7 kjernefysikk etter standardmalen (3). ~30 % kvalitative deloppgaver fordelt utover. Alle oppgaver nyskrevne, i hverdags-/naturkontekst. Løsningsforslag som A-besvarelse i `collapsible` per oppgave — med figurer der sensor forventer figur, begrunnelse i hvert ledd, enheter overalt — og `tip`-notat om poeng per deloppgave og tidsbudsjett (~11 min per deloppgave).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2: rammefortelling-varianten

- **id:** `fys1001-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `fys1001-8-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett bundet sammen av én fortelling, etter V2024-mønsteret — samme fysikk, ny innpakning.
- **Eksamensbelegg/miks:** Speiler V2024-innovasjonen (gjennomgående rammefortelling; fysikken bak er standardpensum). Nyskrevet ramme: **«Forskningsstasjonen på Svalbard»** — én sammenhengende historie gjennom 6 oppgaver / ~20 deloppgaver à 4 poeng: snøscooter som bremser på is (mekanikk/friksjon/kinematikk), lasting med kran (statikk/moment), smeltevannselv fra breen (fluid/Bernoulli/kontinuitet), stasjonens varmebudsjett i polarnatten (kalorimetri + strålingsbalanse/U-verdi), nordlyset over stasjonen (ladd partikkel i magnetfelt + spektrallinjer), datering av iskjerner (kjernefysikk-malen). Minst 35 % kvalitative deloppgaver — rammefortellingen inviterer til «forklar»-spørsmål. Løsningsforslag som A-besvarelse med vektings-`tip`; eget notat om strategien: rammefortellingen er kosmetikk — identifiser sjangeren bak hver deloppgave.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3: bred mal med kortsvarsserie

- **id:** `fys1001-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `fys1001-8-4`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i den bredere 2017–2018-varianten: én kortsvarsserie på tvers av alt + fire dypere temaoppgaver.
- **Eksamensbelegg/miks:** Speiler formen med bred blandingsoppgave (bærebjelke 2011–2018, tilbake som variant i V2021 — beredskap): **O1 = 8 uavhengige kortsvar à 4 poeng på tvers av hele pensum (sjanger A)**: småregning (parallellmotstand, halveringstid, Snells lov, gasslov) + hverdagsforklaringer (sjanger Q) — deretter **4 temaoppgaver** (12 deloppgaver à 4 poeng) på temaene øvingseksamen 1–2 traff lettest: atomfysikk (nivådiagram → linjer), statikk (arm/biomekanikk), bølger/lyd (to-kilders interferens + dB), energi/effekt med virkningsgrad. Totalt 20 deloppgaver. Dekker sammen med 8.3–8.4 samtlige sjangre A–Q minst én gang. Løsningsforslag som A-besvarelse med vektings-`tip` og kortsvar-disiplin (2–4 setninger, aldri essay).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** dekkes av de 3 øvingseksamenene (8.3–8.5) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.6 | 20+25+20+15+15+15 = **110** | 20+25+15+15+15+5 = **95** |
| 2 | 2.1–2.4 | 20+25+20+15 = **80** | 20+20+15+5 = **60** |
| 3 | 3.1–3.3 | 15+20+10 = **45** | 15+20+5 = **40** |
| 4 | 4.1–4.5 | 20+15+20+15+10 = **80** | 20+15+20+20+5 = **80** |
| 5 | 5.1–5.4 | 15+25+10+20 = **70** | 15+25+5+20 = **65** |
| 6 | 6.1–6.3 | 20+15+15 = **50** | 20+15+15 = **50** |
| 7 | 7.1–7.4 | 15+15+20+10 = **60** | 20+15+20+5 = **60** |
| 8 | 8.1–8.5 | 20+10+5+5+5 = **45** | 35+10+0+0+0 = **45** |
| **Sum** | **35 kap.** | **550 ≥ 500 ✓** | **505 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvensen: Del 1+2 (mekanikk/energi, 100 %/94 %) bærer 190
av 550 quiz; kjerne- og termofysikk følger. Flashcards er symbol-/formel- og
begrepstunge (fysikkens symbolapparat + kvalitativ-bankens mekanismer).

### Prøver per del (4 per temadel, 28 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre med løsningsforslag
skrevet som A-besvarelse (begrunnelse, enheter, figurer) og poengfordeling à 4
poeng per deloppgave. Omfang i minutter.

**Del 1 — Mekanikk I**
1. Prøve 1.A (30 min): Kinematikk og grafer — bremselengde, $v$–$t$-avlesning, kvadratlov-hale (sjanger C + Q).
2. Prøve 1.B (40 min): Newton og friksjon — heis, skråplan, frilegemediagram-krav i hver oppgave (sjanger C).
3. Prøve 1.C (40 min): Sirkelbevegelse og statikk — loop/satellitt + momentbalanse med punktvalg-begrunnelse (sjanger E + D).
4. Prøve 1.D (45 min): Samlet mekanikkprøve på eksamensnivå — 5 deloppgaver à 4 p inkl. én kvalitativ (sjanger C/D/E/Q).

**Del 2 — Mekanikk II**
1. Prøve 2.A (30 min): Arbeid, energi og effekt — fortegn på arbeid, motoreffekt (sjanger C-deler + Q).
2. Prøve 2.B (35 min): Energibevaring — krum bane med eksplisitt metodevalg-begrunnelse (fasitens felle).
3. Prøve 2.C (35 min): Bevegelsesmengde og støt — klassifisering + relativt energitap (sjanger B-deler).
4. Prøve 2.D (45 min): Full støt-kjede på eksamensnivå, forlengs + havarikommisjon-variant (sjanger B).

**Del 3 — Fluidmekanikk**
1. Prøve 3.A (30 min): Hydrostatikk og oppdrift — trykk på dyp, flytevilkår (sjanger F-deler + Q).
2. Prøve 3.B (35 min): Kontinuitet og Bernoulli — innsnevret rør, punktvalg (sjanger F).
3. Prøve 3.C (35 min): Torricelli med gyldighetsvurdering — tank/reservoar + «hvilke antakelser hviler dette på?» (sjanger F + Q).
4. Prøve 3.D (45 min): Full fluidoppgave på eksamensnivå (midtveis-format), 5 deloppgaver à 4 p.

**Del 4 — Termofysikk**
1. Prøve 4.A (35 min): Kalorimetri — flertrinnsregnskap + T–t-kurveproduksjon og -avlesning (sjanger G).
2. Prøve 4.B (30 min): Ideell gass — begge former, kelvin-disiplin, konsentrasjonsresonnement (sjanger H).
3. Prøve 4.C (40 min): 1. lov og TS-diagram — syklusareal, virkningsgrad (sjanger H).
4. Prøve 4.D (45 min): Varmetransport og strålingsbalanse — U-verdi + likevektstemperatur + kvalitativ hale (sjanger I + Q).

**Del 5 — Elektrisitet og magnetisme**
1. Prøve 5.A (30 min): Elektrostatikk — superposisjon med symmetriargument, snor-kule (sjanger K).
2. Prøve 5.B (40 min): Kretsregning — reduksjon, Kirchhoff, effektfella eksplisitt (sjanger J).
3. Prøve 5.C (35 min): Ladd partikkel — $qU$-akselerasjon, radius, nullarbeids-poenget (sjanger L).
4. Prøve 5.D (45 min): Kombinert elektrisitetsprøve på eksamensnivå — solcellekrets + partikkel i felt + to kvalitative (sjanger J + L + Q).

**Del 6 — Bølger, lyd og optikk**
1. Prøve 6.A (30 min): Bølger og lyd — interferens, dB, P/S-bølger (sjanger M).
2. Prøve 6.B (30 min): Brytning og totalrefleksjon — inkl. symmetriargument-oppgave (sjanger N).
3. Prøve 6.C (35 min): Linser — regning + strålekonstruksjon + øye/brille (sjanger N).
4. Prøve 6.D (45 min): Kombinert bølge-/optikkprøve på eksamensnivå med seismikk-innpakning (sjanger M + N + Q).

**Del 7 — Atom- og kjernefysikk**
1. Prøve 7.A (30 min): Fotoner og Bohr — nivåidentifikasjon + linjespekter-begrunnelse (sjanger O).
2. Prøve 7.B (30 min): Reaksjonsligninger — kjeder, A/Z-bevaring vist eksplisitt (sjanger P).
3. Prøve 7.C (35 min): Halveringstid og massesvinn — graf + formel + $E = \Delta mc^2$ (sjanger P).
4. Prøve 7.D (45 min): Full kjernefysikkoppgave etter standardmalen + dosimetri-kortsvar (sjanger P + Q).

**Midtveis-generalprøve:** prøvene 1.D + 2.D + 3.D + 4.D tas samlet (180 min)
som simulering av midtsemestereksamen (20 % av karakteren; dekker kun
mekanikk/fluid/termo). Dette angis eksplisitt i Del 0 og i prøvekapitlenes
ingress.

### Øvingseksamener (3 komplette 4-timers sett — kap. 8.3–8.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (8.3) | Standard 2022–2024 | 7 temaoppgaver / 21 deloppgaver à 4 p: mekanikk-støt, termo, kretser, fluid, optikk, ladd partikkel, kjerne; ~30 % kvalitativt |
| Øvingseksamen 2 (8.4) | Rammefortelling (V2024) | «Forskningsstasjonen på Svalbard»: 6 oppgaver / ~20 deloppgaver à 4 p gjennom én fortelling; ≥35 % kvalitativt |
| Øvingseksamen 3 (8.5) | Bred mal m/kortsvarsserie (2017–2018/V2021) | 8 kortsvar på tvers + 4 temaoppgaver (atomfysikk, statikk, bølger/lyd, energi); 20 deloppgaver à 4 p |

Til sammen dekker de tre settene samtlige sjangre A–Q minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, ~20–24 deloppgaver à 4 p, alle likt
   tellende), midtveisordningen (20 %), hjelpemidlene og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (mekanikk-kjernen m/metodevalg, energibevaring + støt-kjeden,
   termofysikk m/TS-diagram, kjernefysikk-trioen, kretser m/effektfella,
   Bernoulli-verktøykassen, kvalitativ-sjangeren), *kunne* (optikk, ladd
   partikkel, statikk, strålingsbalanse, atomfysikk, bølger/lyd, elektrostatikk),
   *kjenne* (satellittdetaljer, dosimetri, Carnot/entropi, Poiseuille, gitter).
3. **Sjangerguiden** — oppgavetypene A–Q med løsningsoppskriftene fra
   drillkapitlene (1.6, 2.4, 3.3, 4.5, 5.3, 7.4, 8.1, 8.2) i kortform.
4. **Sensorreglene** — de åtte metareglene (begrunn alt; 4 p per deloppgave,
   alle teller likt; enheter −1 p; innfør egne symboler; følgefeil straffes
   ikke ved vist mellomregning; ikke helgarder/ikke skriv langt; flere metoder
   godtas; riktig metode > riktig tall) + karakterskille-listen.
5. **Feilkatalogen** — de 14 typiske feilene fra analysen samlet, hver med
   henvisning til kapitlet som forebygger den (kinematikk på krum bane → 2.2;
   $U^2/R$-fella → 5.2; kelvin-fellene → 4.2/4.4; Bernoulli ukritisk → 3.2;
   symmetri uten argument → 5.1/6.2; «tid til null» → 7.3/8.2 osv.).
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må
   kunne brukes aktivt** vs. **hentes fra formelark/tabell** (konstanter,
   materialdata, kjernemasser); treningsråd: løs alltid oppgaver MED formelark
   ved siden av, slik eksamen er.
7. **Figur- og grafkravene** — sjekklisten fra 8.2 i kortform (hva som skal
   tegnes uoppfordret, hvordan avlesninger markeres).
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 (midtveispensum, generalprøven 1.D+2.D+3.D+4.D før
   midtveis) → 5 → 7 → 6 → 8; kvalitativ-drillen 8.1 spres utover hele løpet;
   øvingseksamenene de tre siste ukene under tidspress (240 min).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `fys1001` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen
   (obligatorisk — ellers viser bokforsiden «Seksjon N»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–Q og frekvenstallene som
   resten av boka refererer til.
3. **Del 1 → Del 2** (avhengighetskjeden i mekanikk) → **Del 3 → Del 4**
   (fullfører midtveispensum).
4. **Del 5 → Del 7 → Del 6** (Del 7 krever bare 6.1-stoff i 7.1 — skriv 6.1
   før 7.1, eller Del 6 samlet før Del 7; velg det som gir renest agent-batching,
   men flagg valget).
5. **Del 8 til slutt** — drillkapitlene 8.1/8.2 og øvingseksamenene gjenbruker
   hele boka; bygges av én agent som leser HELE skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   etter plattformens mønster (`fys1001-<del>-prove`, chapterNumber `<del>.P`)
   — endelig blokk-skjema fastsettes i BYGGEKONTRAKT.md (fase 3).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generer JSON
      via `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($v_0$, $t_{1/2}$, $\lambda_{\text{maks}}$,
      $\Delta m$, $\varepsilon$, $\gamma$, $\mu$, $\rho$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle fys1001-filer — $\gamma$ for
      gravitasjonskonstanten (ALDRI «G», som er tyngden $mg$); $R = \mu N$ for
      friksjon; $B = \rho Vg$ for oppdrift; kelvin i gasslov/strålingslov;
      forbudt innhold: numeriske metoder/programmering som eksamensstoff,
      SHM-formalisme ($T = 2\pi\sqrt{l/g}$, $\omega = \sqrt{k/m}$),
      induksjonsberegninger, RC-kretser, Wheatstone-bro, relativitet utover
      $E = \Delta mc^2$ (unntatt Del 0-avsnittet som eksplisitt avgrenser).
- [ ] **Formelark-disiplin**: hvert delkapittels Symbol- og formelliste
      markerer «står på formelarket» vs. «må kunne brukes aktivt»; ingen
      konstantverdier presenteres som puggestoff.
- [ ] **Enhets- og sifferdisiplin**: alle løsningsforslag og eksempler har
      enhet på hvert tallsvar og 2–3 gjeldende siffer — boka skal *modellere*
      sensorkravet.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvens/vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker
      (kun til kapitler som finnes — lenkene i §3 er verifisert mot
      metadataene 6. juli 2026), `collapsible` Symbol- og formelliste, 2–4
      eksempler (siste på eksamensnivå, med figur der sensor forventer figur),
      Typiske feil-`warning`, 6–12 øvinger med `solution` + `hints` (stigende;
      minst én kvalitativ Q-oppgave i hvert teorikapittel), repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert
      gjennomregnet case + 8–15 oppgaver på eksamensnivå.
- [ ] **Kvalitativ-kvoten**: på tvers av boka skal ~25–40 % av øvingene i
      teorikapitlene være kvalitative «forklar/begrunn»-oppgaver med
      modellsvar i 2–4 setninger (speiler eksamens miks).
- [ ] **Quiz-sum ≥ 550 og flashcard-sum ≥ 505** per kvotetabellen i §4
      (kontrollsummér per del).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener som sammen
      dekker sjangrene A–Q.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett inn som oppgaver.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + kapittelspesifikk streng), jf. `getChapterMeta`-
      lærdommen. ALDRI meld ferdig uten dette.

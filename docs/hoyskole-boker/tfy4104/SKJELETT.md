# Bokskjelett: TFY4104 Fysikk — eksamensrettet lærebok (NTNU)

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er angitt her, destillert fra
> `EKSAMENSANALYSE.md` (ca. 27 unike eksamenssett 2009–2025; alle løsningsforslag
> 2020–2025 lest fullstendig i dagens 40-spørsmåls MC-form, 2013/2015/2017/2018
> grundig i 50-spørsmåls-æraen, 2009–2012 temaregistrert i den åpne
> utledningsformen med termofysikk). Arketype: **DNA-regnefag** (`DNA-regnefag.md`)
> — kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Alle mønstereksempler i dette skjelettet er omskrevne —
> de kan varieres videre, men aldri kopieres ordrett inn som oppgaver. Formlene er
> standard fysikknotasjon og ikke opphavsrettslig beskyttet.

> **Forhold til søsterboka TFY4125 (viktig for byggeren):** TFY4104 er i dagens
> form **praktisk talt samme eksamensprofil som TFY4125** — 40 flervalg A–F, fast
> todeling mekanikk (spm. 1–20) / elektromagnetisme (spm. 21–40), hjelpemiddelkode
> C. Dette skjelettet gjenbruker derfor TFY4125-skjelettets struktur,
> kapittel-DNA-mønster og kvotelogikk tungt. **TFY4104s egenart** (som styrer
> avvikene) er tre ting: (1) **tyngre på luftmotstand/eksponentielle
> fartsmodeller** — får eget teorikapittel; (2) **tyngre på rullende legemer på
> krumlinjede baner** (krumningsradius fra formelarket) — får eget teorikapittel;
> (3) **ingen fast måle-/statistikk-åpner** (sporadisk, 3/17 sett) — måle-modulen
> er nedtonet til ett kompakt kunne-kapittel. TFY4104 mangler dessuten TFY4125s
> RLC-via-mekanisk-analogi-signatur (LC/RLC er lavfrekvent her); til gjengjeld har
> TFY4104 et fast konseptinnslag i **hysterese/magnetisk metning**. Termofysikk
> ble faset ut ca. et tiår tidligere (borte fra 2013) og ligger som historisk
> beredskap.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tfy4104` |
| Tittel | **TFY4104 Fysikk — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU (Norges teknisk-naturvitenskapelige universitet) |
| Arketype | Regnefag (kvantitativt fag med faste flervalgs-oppgavemaler) |
| Antall kapitler | **37** (2 eksamenskart/måling + 27 tema + 1 historisk appendiks + 7 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 2 900 min innholdskapitler + ≈ 1 170 min prøver ≈ 68 timer** |
| Quiz totalt | **708** (krav ≥500 — bevisst høyt, se §4) |
| Flashcards totalt | **568** (krav ≥500) |

**Pitch (ett avsnitt):** TFY4104-eksamen er i dag en **ren flervalgseksamen med
40 spørsmål (A–F)** med en helt fast todeling: **spørsmål 1–20 er
mekanikk/dynamikk, 21–40 er elektromagnetisme**. Kun det endelige **bokstavsvaret
teller** — det gis ingen uttelling for oppsett eller mellomregning, og ingen
minuspoeng for feil. Svaralternativene ligger **tett** og er ofte konstruert rundt
en typisk feil (glemt rotasjonsledd, forbyttet serie/parallell-kondensator, feil
tidskonstant), så én glemt faktor, ett feil fortegn eller én avrundingsfeil lander
på et nabo-alternativ. Denne boka er derfor kalibrert mot noe annet enn en klassisk
utledningsbok: **den drilles mot en rask, feilfri vei til tallsvaret** (MC-modus),
i tillegg til den symbolske forståelsen (som fortsatt trengs for de eldre
utledningssettene). Ryggraden er temaene som er tilnærmet 100 % i hvert sett:
kinematikk fra en gitt $v(t)$ — **ofte en luftmotstandsmodell**
$v(t)=v_t(1-e^{-t/\tau})$ (derivér for $a$, størst i $t=0$; integrér for strekning),
rullende legeme med energibevaring ($mg\,\Delta y=\tfrac12(1+c)mv^2$) inkludert
**rulling på krum bane** med krumningsradius, Newton på skråplan med friksjon,
treghetsmoment/Steiner/dreieimpuls, svingninger (egenfrekvens, hengslet stang,
dempet amplitude), elektrostatisk superposisjon ($\mathbf{E}$, $V$, dipolmoment,
energi), kondensatorer/dielektrikum/kretser, magnetfelt fra strøm, ladd partikkel
i $B$ ($r=mv/qB$), dreiemoment på strømsløyfe, og induktans/magnetisk energi.

**Kritisk rammebetingelse (gjelder HELE boka) — formelark:** Eksamen har
hjelpemiddelkode **C**: bestemt, enkel kalkulator + **Rottmann matematisk
formelsamling** + **utdelt fysikk-formelark** («Formler i emne TFY4104») +
**tabell over treghetsmomenter for standardlegemer**. Boka skal derfor ALDRI
fremstille formler og konstanter som puggestoff. Skillet er: **«må kunne brukes
aktivt»** (velges, kombineres, deriveres/integreres og settes inn under tidspress
— kjerneverktøyene i kapitlenes innholdskontrakter) vs. **«hentes fra
formelarket»** (konstantverdier som $\varepsilon_0$, $\mu_0$, $G$, $e$, $m_e$;
krumningsradius-formelen; treghetsmomenter for standardlegemer;
kondensator-/solenoide-/induktansuttrykk; Faradays lov). Hvert delkapittels
Symbol- og formelliste markerer hva som står på formelarket. Boka trener **bruk og
rask utregning**, ikke pugg.

**Kritisk kalibreringsregel (gjelder HELE boka) — rask, feilfri vei til tall:**
Fordi kun bokstavsvaret teller og alternativene ligger tett, skal HVERT
teori- og drillkapittel gi to spor for hver kjerne-sjanger:
1. **Symbolsk utledning med intuisjon** (forståelse; nødvendig for de eldre
   utledningssettene 2009–2012 og for å ikke huske feil formel).
2. **«Rask vei til tall» (MC-oppskrift):** den korteste feilfrie regnekjeden fra
   oppgitte tall til bokstavsvaret — hvilken lov, hvilken ene regnelinje, hvilke
   verdier fra formelarket, hvor mange siffer å beholde. Dette er arbeidsformen
   under tidspress og skal stå som et eget, tydelig merket avsnitt/eksempel.
Løsningsforslaget i sensors ånd er **den avgjørende loven + én til få regnelinjer**
(fra 2025-settene: bokstav + én formellinje).

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
- **Vektor vs. skalar:** kraft $\mathbf{F}$, felt $\mathbf{E}$/$\mathbf{B}$,
  fart $\mathbf{v}$, dreieimpuls $\mathbf{L}$, dipolmoment $\mathbf{p}$/$\mathbf{m}$
  er vektorer; energi $K$/$U$, potensial $V$, ladning $Q$, treghetsmoment $I$,
  fart $v=|\mathbf{v}|$ er skalarer. **Fortegn og retning** på vektorkomponenter
  (særlig dreieimpuls $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$
  og feltbidrag) er et yndet flervalgspoeng — behandles eksplisitt.
- **Rotasjonsfaktoren $c$:** rullende legemes kinetiske energi skrives
  $K=\tfrac12(1+c)mv^2$ der $I=cmR^2$; $c=\tfrac25$ (kompakt kule),
  $c=\tfrac12$ (sylinder), $c=\tfrac23$ (kuleskall), $c=1$ (tynn ring/rør). Den
  klassiske konsekvensen — akselerasjonen ned skråplanet
  $a=\dfrac{g\sin\beta}{1+c}$ er **uavhengig av masse og radius** (sylinder:
  $\tfrac23 g\sin\beta$) — er en fast konseptfelle og skal stå eksplisitt.
- **Symbolapparat:** $\omega_0=\sqrt{k/m}$ (egen vinkelfrekvens), $\gamma$
  (dempingskoeffisient, mekanisk $\gamma=b/2m$), $\mu$ (friksjonskoeffisient i
  mekanikk; permeabilitet $\mu=\mu_0\mu_r$ i EM — aldri i samme sammenheng),
  $\varepsilon=\varepsilon_r\varepsilon_0$ (permittivitet), $\tau$ (tidskonstant
  $RC$ eller $L/R$ — **hold RC og L/R skarpt adskilt**), $\lambda$ (linjetetthet:
  masse $\lambda(x)$ i mekanikk, ladning $\lambda=Q/L$ i EM), $\rho$ (krumnings-
  radius i mekanikk; resistivitet i EM). Symbollisten i HVERT delkapittel definerer
  hvilke symboler som gjelder der.
- **Enheter og siffer:** alle tallsvar med SI-enhet, riktig tierpotens og **nok
  gjeldende siffer gjennom hele regnekjeden** (rund først til slutt).
- **Avrundingsdisiplin (eget drillmål):** fordi alternativene ligger tett, er for
  tidlig avrunding en selvstendig feilkilde. Hvert kapittel har en **`warning`**
  om nettopp de avrundings-/faktorfellene som lander på nabo-alternativet i akkurat
  det temaet, og kap. 11.1 samler dette til en egen MC-strategi.

**Bevisst utelatt / nedprioritert (begrunnes i Del 0):**
- **Termofysikk** (ideell gasslov, kretsprosess/virkningsgrad, adiabat,
  varmekapasitet, entropi): fast tredjeblokk **2009–2012**, men **0 reelle treff
  fra 2013→**. Behandles som **kompakt, tydelig merket historisk appendiks**
  (Del 10, prioritet **kjenne**) — kun for kandidater som øver på sett før 2013,
  ALDRI som kjernepensum. (TFY4104 kvittet seg med termofysikk ca. et tiår før
  TFY4125.)
- **Numerikk / Python (Euler):** sporadisk/borte (3/17). **Utelatt helt** (nevnes
  bare som historisk fotnote i Del 0/10).
- **Bølger og interferens, geometrisk/bølgeoptikk (linser, Snells lov, Doppler),
  fluidmekanikk (Bernoulli, oppdrift, viskositet), relativitet,
  atom-/kvante-/kjernefysikk:** **0 treff i hele arkivet** — skal IKKE bygges inn.
  (Emnebeskrivelsens TFY4102-arv nevner «bølgefysikk», men det slår ikke gjennom i
  settene; nevnes eksplisitt i Del 0 så studenten ikke sløser tid.)

**Forhold til søsterbøkene:** TFY4104 bygger på mekanikken og elektromagnetismen i
**Fysikk 2** (VGS) og forutsetter derivasjon/integrasjon fra **R2**. Der
forkunnskaper dekkes av eksisterende kapitler, lenkes de (fysikk2-/r2-lenkene i §3
gjenbrukes fra TFY4125-skjelettet, der de ble verifisert mot metadataene
7. juli 2026 — **skal reverifiseres i byggerekkefølgen**). **Søsteremnet TFY4125**
(NTNU) og **FYS1120 Elektromagnetisme** / **FYS1001 Innføring i fysikk** (UiO)
dekker beslektet stoff; der de er relevante refereres de i **klartekst** (uten
lenke) til de er bygget. TFY4104 og TFY4125 er i dag samme eksamensprofil (mek +
EM, 40 MC) — men de er separate aktive emner med hvert sitt studentpublikum, og
denne boka er selvstendig og komplett.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), IKKE frekvens; frekvensen
styrer *omfanget*. Todelingen mekanikk (Del 1–5) / elektromagnetisme (Del 6–9)
speiler den faste eksamensstrukturen (spm. 1–20 / 21–40). «Må beherskes
perfekt»-temaer får teorikapitler + eget drillkapittel; «bør kjenne til» får ett
kompakt kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og måling | 2 | Prioriteringsverktøyet + en **nedtonet** måle-/usikkerhetsmodul (åpner kun 3/17 sett — kunne). Etablerer MC-formen, todelingen og sjangerkatalogen M1–M13/E1–E16. |
| 1 | Kinematikk og luftmotstand | 3 | Kinematikk fra $v(t)$/graf **100 %** (ryggraden) + luftmotstand/eksponentiell fartsmodell **88 %** (TFY4104-signatur) → perfekt → 2 teori + drill. |
| 2 | Kraft, energi, rulling og krum bane | 4 | Skråplan m/friksjon **95 %**, rullende legeme/energibevaring **100 %**, sirkelbevegelse+normalkraft **70 %**, rulling på krum bane **40 %** (TFY4104-signatur) → perfekt → 3 teori + drill. Rotasjonsledd-fella bor her. |
| 3 | Bevegelsesmengde, støt og baner | 3 | Støt/impuls **95 %** (perfekt), gravitasjon/skrått kast/rakett **20–70 %** (kunne, kompakt) → 2 teori + drill. |
| 4 | Rotasjon: treghetsmoment, dreieimpuls og statikk | 4 | Treghetsmoment/Steiner **70–100 %**, dreieimpuls/støt mot roterbart legeme **95 %**, statikk/velting **80 %** → perfekt → 3 teori + drill. Tyngste dynamikk-kjernen. |
| 5 | Svingninger | 3 | Egenfrekvens/hengslet stang **100 %**, dempet amplitude **100 %** → perfekt → 2 teori + drill. |
| 6 | Elektrostatikk og superposisjon | 3 | Potensial **100 %**, felt fra ladningskonfig **70 %**, dipol/linjeladning **15–25 %** → perfekt → 2 teori + drill. |
| 7 | Kondensatorer, dielektrikum og kretser | 3 | Kondensator **100 %**, serie/parallell **94 %**, dielektrikum **70 %**, resistans/Ohm **76 %**, RC **53 %** → perfekt → 2 teori + drill. |
| 8 | Magnetfelt, ladd partikkel og strømsløyfe | 4 | $B$ fra strøm **100 %**, Lorentz/sirkelbane **25 %**, dreiemoment på sløyfe **65 %**, hysterese **41 %** → perfekt → 3 teori + drill. |
| 9 | Induksjon, induktans og svingekretser | 3 | Induktans/magnetisk energi **88 %** (perfekt), Faraday **53 %**, motional EMS/RL/LC **15–25 %** (kunne) → 2 teori + drill. |
| 10 | Historisk appendiks: termofysikk | 1 | Faset ut fra 2013; **kjenne** — kun for eldre øvingssett. Ett kompakt, tydelig merket kapittel. |
| 11 | Eksamenstrening | 4 | MC-strategi/presisjonsdisiplin + 3 komplette 40-spørsmåls øvingseksamener etter den faste malen (mek 1–20 / EM 21–40). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og måling |
| 1 | Kinematikk og luftmotstand |
| 2 | Kraft, energi, rulling og krum bane |
| 3 | Bevegelsesmengde, støt og baner |
| 4 | Rotasjon: treghetsmoment, dreieimpuls og statikk |
| 5 | Svingninger |
| 6 | Elektrostatikk og superposisjon |
| 7 | Kondensatorer, dielektrikum og kretser |
| 8 | Magnetfelt, ladd partikkel og strømsløyfe |
| 9 | Induksjon, induktans og svingekretser |
| 10 | Historisk appendiks: termofysikk |
| 11 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Todeling som organiserende prinsipp.** Delene er gruppert i to blokker
   (mekanikk 1–5, EM 6–9) som eksplisitt speiler eksamenens faste todeling
   (spm. 1–20 / 21–40). DNA-en ordner bare etter avhengighet; her legges
   todelingen oppå, fordi den er en så sterk, stabil struktur i faget at den er et
   selvstendig lesehjelpemiddel.
2. **Alle 9 drillkapitler ligger inne i temadelene sine** (1.3, 2.4, 3.3, 4.4,
   5.3, 6.3, 7.3, 8.4, 9.3), ikke samlet i siste del, fordi sjangrene er
   temaspesifikke gjengangere som må drilles rett etter teorien — og i et MC-fag er
   sjangerdrillen selve produktet. Del 11 beholder den *tverrgående* MC-strategien
   og øvingseksamenene.
3. **To ekstra teorikapitler for TFY4104s to mekanikk-signaturer.** Luftmotstand/
   eksponentielle fartsmodeller (kap. 1.2) og rullende legemer på krum bane
   (kap. 2.3) får hvert sitt dedikerte teorikapittel — dette er den viktigste
   kalibreringen mot TFY4104 (mot TFY4125, som folder disse tettere sammen).
4. **Egen MC-strategi/presisjonsdisiplin-kapittel (11.1)** er et tillegg utover
   DNA-en, begrunnet i at tette svaralternativer gjør avrunding og faktorfeil til
   selvstendige, gjennomgående feilkilder.
5. **Quizbanken er direkte eksamenstrening.** Fordi eksamen ER flervalg med tette
   distraktorer, bygges quizspørsmålene som numeriske MC-spørsmål med realistisk
   tette avledere (feil-alternativene er de vanlige regnefeilene: glemt
   rotasjonsledd, forbyttet serie/parallell, feil $\tau$, gal feltretning).
   Quiz-kvoten er derfor bevisst satt **høyt** (708, se §4).
6. **Nedtonet måle-modul.** TFY4104 har ingen fast måle-/statistikk-åpner (3/17,
   mot TFY4125s faste spm. 1–2). Måle-kapitlet (0.2) er derfor kompakt og merket
   **kunne**, med lavere kvote enn i TFY4125.
7. **Historisk appendiks (Del 10) + hysterese som eget innslag.** Termofysikk er
   skilt ut som ett tydelig merket kjenne-kapittel; til gjengjeld har TFY4104 et
   fast konseptinnslag i hysterese/magnetisk metning som dekkes i kap. 8.3.

**Eksamensstrukturen (fast — gjentas i Del 0 og styrer øvingseksamenene):**
40 spørsmål A–F, alle teller likt (1 poeng riktig / 0 feil eller blankt), kun
bokstavsvaret teller. **Spm. 1–20:** mekanikk/dynamikk. **Spm. 21–40:**
elektromagnetisme. Konte-/augustsett kan være noe kortere (~35 spm.). Nesten hvert
sett dekker hele bredden i begge halvdeler, med et innslag konseptuelle/
rangeringsspørsmål.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerkodene refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**Mekanikk** — M1 kinematikk fra $v(t)$/graf, M2 Newton på skråplan m/friksjon,
M3 rullende legeme (energibevaring/N2), M4 treghetsmoment/Steiner, M5 dreieimpuls
og støt mot roterbart legeme, M6 bevegelsesmengde/støt/impuls, M7 svingninger
(SHM/hengslet stang/dempet), M8 sirkelbevegelse+normalkraft, M9 rullende legeme på
krum bane, M10 statikk/momentbalanse, M11 gravitasjon/satellittbane, M12 skrått
kast/prosjektil, M13 rakett og arbeid/effekt. **EM** — E1 felt fra
ladningskonfig, E2 elektrisk potensial, E3 elektrisk dipol, E4 ladet stav/
linjeladning, E5 platekondensator/kapasitans, E6 kondensatorer serie/parallell +
Kirchhoff, E7 RC-krets, E8 resistans/resistivitet/Ohm, E9 magnetfelt fra strøm,
E10 Lorentzkraft/sirkelbane, E11 dreiemoment på strømsløyfe, E12 induktans/
magnetisk energi, E13 Faradays lov, E14 motional EMS/stang på skinner, E15 RL- og
LC-kretser, E16 hysterese/magnetisering. **Historisk** — H1 termofysikk.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Eksamensvinkel-`tip`,
Forkunnskaper-blokk med kryssbok-lenker og `collapsible` **Symbol- og formelliste**
rett etter (per delkapittel — ALLE symboler og formler forklares, aldri arv fra
tidligere kapittel — med markering av hva som står på formelarket). Hvert kapittel
har både **symbolsk utledning** og en tydelig merket **«Rask vei til tall»
(MC-oppskrift)**, samt en **avrundings-/faktorfelle-`warning`**.

---

### Del 0 — Eksamenskart og måling

#### Kapittel 0.1: Eksamenskartet: slik testes TFY4104

- **id:** `tfy4104-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (ren flervalg, 40 spm., fast todeling mek/EM), temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2009–2025. Skal gjengi: (i) **formen:** 4 timers skriftlig skoleeksamen (digitalt i Inspera), hjelpemiddelkode C (enkel kalkulator + Rottmann + **utdelt fysikk-formelark** + **treghetsmoment-tabell**), karakter A–F; **ren flervalg med 40 spørsmål A–F**, alle teller likt, **1 poeng riktig / 0 feil eller blankt**, kun bokstavsvaret teller (ingen delpoeng). (ii) **Den faste strukturen:** spm. 1–20 mekanikk, spm. 21–40 elektromagnetisme; nesten hvert sett dekker hele bredden i begge halvdeler; et innslag konseptuelle/rangeringsspørsmål i begge. (iii) **Temafrekvens-tabellen** (fra analysen §2A/§2B): mekanikk-kjernen (kinematikk fra $v(t)$, rulling+treghetsmoment, svingninger) alle **~100 %**, skråplan m/friksjon og støt/dreieimpuls **~95 %**, luftmotstand/terminalfart **88 %**, statikk **80 %**, sirkelbevegelse+normalkraft / Steiner / gravitasjon **~70 %**, rulling på krum bane **40 %**; EM-kjernen (potensial, $B$ fra strøm, kondensator) alle **100 %**, serie/parallell **94 %**, induktans/spole **88 %**, resistans **76 %**, felt fra ladningskonfig / dielektrikum **70 %**, dreiemoment på sløyfe **65 %**, RC / Faraday **53 %**, hysterese **41 %**, gjensidig induktans / linjeladning / Lorentz / motional EMS / RL/LC **15–29 %**. (iv) **Utviklingen (tabell fra §1):** åpen utledning m/termofysikk (2009–2012) → 50-spm MC A–E (2013–2018) → 40-spm MC A–F (2019→); termofysikk og numerikk faset ut fra 2013. (v) **Bevisst utelatt med begrunnelse:** termofysikk (historisk appendiks, kjenne), numerikk/Python (utelatt), og — eksplisitt — bølger/optikk/fluid/relativitet/kjernefysikk (0 treff, aldri pensum i den nåværende formen; ikke sløs tid). (vi) **Sensorens metaregler i MC-æraen:** kun endelig bokstavsvar teller; alle spm. likt; **svaralternativene ligger tett** og er konstruert rundt typiske feil → avrunding/faktor/fortegn avgjør; løsningsforslaget = avgjørende lov + én til få regnelinjer. (vii) **Formelark-strategien:** hva som må kunne *brukes/utledes* vs. *hentes*.
- **Innholdskontrakt:** Oppgavetype-katalogen M1–M13/E1–E16 presenteres som studentens sjekkliste med frekvens per sjanger og hvilken halvdel (1–20 vs. 21–40) den hører til. Prognosen for neste sett: 40 spm. A–F etter malen. **Leseplan:** mekanikk-kjernen (Del 1–2, 4–5) og EM-kjernen (Del 6–9) er «perfekt»-stoffet og bærer 60–70 % av settet; Del 3 og de kompakte kunne-kapitlene sikrer øvre karakter; Del 10 (termofysikk) leses KUN hvis man øver på sett før 2013. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for 40 MC-spørsmål — hvor mange minutter per spørsmål, når hopper du videre til EM-halvdelen, og hvorfor bør du ta de konseptuelle rangeringsspørsmålene raskt?».
- **Typiske feil:** Metafeilene: lese termofysikk/bølger/optikk som om det er pensum (det er det ikke i dagens form); tro at delpoeng eller minuspoeng finnes (verken–eller — bare tallsvaret, aldri straff for gjett); avrunde for tidlig og lande på nabo-alternativet; bruke tid på symbolsk eleganse når bare bokstaven teller.
- **Quiz: 12 · Flashcards: 14** (form, todeling, frekvenser, metaregler, sjangerkatalog, hva som er utelatt)

#### Kapittel 0.2: Måling, usikkerhet og gjeldende siffer *(nedtonet — kunne)*

- **id:** `tfy4104-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** teori (kompakt)
- **description:** Middelverdi, standardavvik/standardfeil og riktig antall gjeldende siffer — et **sporadisk** innslag i TFY4104 (ikke fast åpner), men rask, sikker poenghøsting når det dukker opp.
- **Eksamensbelegg:** Sjanger M12 (måling) i **~3/17** av de nyere settene — i motsetning til TFY4125 er dette IKKE en fast åpner i TFY4104. Signatur: gitt en kort måleserie, finn middelverdi og standardavvik, eller oppgi et svar med riktig antall gjeldende siffer. Prioritet: **kunne** (lavfrekvent, men lett → gratis poeng når det kommer). Kapitlet er bevisst kompakt.
- **Forkunnskaper/kryssbok:** ingen fysikk-forkunnskap; statistikkgrunnlag forutsettes elementært og refereres i klartekst.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: middelverdi $\langle x\rangle=\frac{1}{N}\sum_i x_i$; **empirisk standardavvik** $\delta x=\sqrt{\frac{1}{N-1}\sum_i (x_i-\langle x\rangle)^2}$ (merk $N-1$); standardfeil $\delta\langle x\rangle=\delta x/\sqrt{N}$; **gjeldende siffer** (usikkerheten bestemmer antall siffer i svaret); feilforplantning $\Delta f=\sqrt{\sum_i (\partial f/\partial x_i)^2\Delta x_i^2}$ (på formelarket — gjenkjennes). **Rask vei til tall (MC-oppskrift):** for standardavvik — regn $\langle x\rangle$, summer $(x_i-\langle x\rangle)^2$, del på $N-1$, ta rot; sjekk om oppgaven vil ha $\delta x$ eller $\delta\langle x\rangle$ (faktor $1/\sqrt{N}$ er en klassisk avleder). **Utledning som kreves aktivt:** ingen tung utledning; forklar $N-1$ (frihetsgrader) kort.
- **Oppgavesjangre:** M12. Mønstereksempel: «Seks målinger av fallhøyden ga 1,52, 1,49, 1,55, 1,50, 1,53 og 1,48 m. Finn middelverdien og standardavviket, og oppgi høyden med riktig antall gjeldende siffer.»
- **Typiske feil (analysen §5):** Dele på $N$ i stedet for $N-1$; forveksle standardavvik og standardfeil (glemme/legge til $1/\sqrt{N}$); oppgi for mange gjeldende siffer; avrunde middelverdien for tidlig før kvadratsummen.
- **Quiz: 14 · Flashcards: 12**

---

### Del 1 — Kinematikk og luftmotstand *(prioritet: PERFEKT)*

#### Kapittel 1.1: Kinematikk fra fartsfunksjon — derivér, integrér, velg riktig $a(t)$-graf

- **id:** `tfy4104-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Fra en gitt $v(t)$ eller $\omega(t)$: akselerasjon $a=dv/dt$ (ofte maks i $t=0$), strekning/vinkel ved integrasjon, og gjenkjenning av hvilken $a(t)$-graf som passer.
- **Eksamensbelegg:** Sjanger M1 i **100 %** av settene — ryggraden i mekanikkhalvdelen, ofte flere spørsmål. Signatur: gitt fartsfunksjon (ofte $v=v_0 e^{-t/\tau}$ eller en luftmotstandsmodell), finn $a$ (maks nesten alltid i $t=0$), strekning $s=\int v\,dt$, eller **identifiser hvilken $a(t)$-graf som passer** (konseptuelt: er $v$ ikke lineær, er $a$ ikke konstant). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Repetisjon av derivasjon](/bok/r2/r2-2-1) og [Bestemt integral som grenseverdi](/bok/r2/r2-2-4) (derivér/integrér fartsfunksjonen); [Variabelskifte (substitusjon)](/bok/r2/r2-3-1) (integraler med eksponentialledd); [Bevegelse i to dimensjoner](/bok/fysikk2/fysikk2-1-2) (fysikk 2-fundament for $a=dv/dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $a(t)=\frac{dv}{dt}$, $\alpha(t)=\frac{d\omega}{dt}$; **maks-akselerasjon** ved å derivere og sette $a'(t)=0$ (for eksponentielle modeller ligger maks nesten alltid i $t=0$ — vis hvorfor); strekning $s=\int_0^{t} v\,dt$, vinkel $\varphi=\int_0^{t}\omega\,dt$; **konseptuell kobling** $v$-form → $a$-form (konstant/lineær/eksponentiell), velg riktig graf; når $a$ IKKE er konstant kan man ikke bruke $v=v_0+at$. **Rask vei til tall (MC-oppskrift):** 1) sett inn $t=0$ i $a(t)$ for maks (sjekk fortegn/form); 2) integrér til oppgitt $t$ (eller $t\to\infty$) for total strekning; 3) for graf-spørsmål: match krumning/fortegn på $a(t)$ mot $v(t)$. **Utledning som kreves aktivt:** derivere og integrere den oppgitte modellen; begrunne hvorfor maks er i $t=0$. **Figurkrav:** skisse av $v(t)$ og $a(t)$ over samme tidsakse.
- **Oppgavesjangre:** M1. Mønstereksempel: «En sykkel har fart $v(t)=v_0(1-e^{-t/\tau})$. Finn (a) akselerasjonen ved $t=0$, (b) hvilken av grafene A–F som viser $a(t)$ riktig, og (c) strekningen tilbakelagt i løpet av tiden $t=2\tau$.»
- **Typiske feil (analysen §5.7):** Bruke konstant-akselerasjon-formler når $a$ ikke er konstant; lete etter maks-akselerasjon ved feil $t$; velge feil $a(t)$-graf (lineær $a$ til ikke-lineær $v$); avrunde $s$ for tidlig.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 1.2: Luftmotstand, terminalfart og eksponentielle fartsmodeller *(TFY4104-signatur)*

- **id:** `tfy4104-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-1-1`
- **kapitteltype:** teori
- **description:** Bevegelse med luftmotstand: terminalfart, den eksponentielle innfartsmodellen $v(t)=v_t(1-e^{-t/\tau})$, og hvorfor akselerasjonen er størst i $t=0$ — TFY4104s mekanikk-signatur.
- **Eksamensbelegg:** Sjanger M1 (luftmotstands-variant) i **~88 %** (15/17) — en **egenart** ved TFY4104 mot TFY4125, går ofte igjen som klynger av 2–3 koblede spørsmål. Signatur: fritt fall/akselerasjon med luftmotstand → terminalfart $v_t$; $v(t)=v_t(1-e^{-t/\tau})$; «finn $a$ størst» (svar: $t=0$); tid/strekning til en gitt brøk av $v_t$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Repetisjon av derivasjon](/bok/r2/r2-2-1) (derivér eksponentialen); [Newtons 2. lov](/bok/fysikk2/fysikk2-1-2) (kraftlikning med luftmotstand). (Skråplan/N2 utdypes i kap. 2.1.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kraftlikning $m\dot v=mg-bv$ (lineær motstand) eller $m\dot v=mg-Dv^2$ (kvadratisk); **terminalfart** når $a=0$: $v_t=mg/b$ (lineær) eller $v_t=\sqrt{mg/D}$ (kvadratisk); løsning ved lineær motstand $v(t)=v_t(1-e^{-t/\tau})$ med $\tau=m/b$; **akselerasjon $a(t)=g\,e^{-t/\tau}$ størst i $t=0$** (avtar mens $v$ vokser mot $v_t$); strekning $s=\int v\,dt$; for fallende legeme sluppet fra ro: $v$ øker mot $v_t$ nedenfra. **Rask vei til tall (MC-oppskrift):** 1) terminalfart: sett $a=0$ i kraftlikningen; 2) $a$ størst → $t=0$, $a(0)=g$; 3) tid til $v=\alpha v_t$: $t=-\tau\ln(1-\alpha)$; 4) sjekk om motstanden er lineær ($\propto v$) eller kvadratisk ($\propto v^2$) — det bestemmer $v_t$-formelen. **Utledning som kreves aktivt:** utled $v_t$ fra $a=0$; vis $a(t)=g\,e^{-t/\tau}$ ved derivasjon. **Figurkrav:** $v(t)$ som stiger mot asymptoten $v_t$, med $a(t)$ avtakende under.
- **Oppgavesjangre:** M1 (luftmotstand). Mønstereksempel: «En regndråpe faller med luftmotstand proporsjonal med farten og når en terminalfart $v_t$. (a) Ved hvilket tidspunkt er akselerasjonen størst, og hvor stor er den da? (b) Hvor lang tid tar det før farten er 90 % av $v_t$?»
- **Typiske feil (analysen §5.4, §5.7):** Tro at $a$ er størst når $v$ er størst (motsatt — $a$ er størst i $t=0$); bruke konstant-$g$-fall (fritt fall uten motstand) der luftmotstand endrer alt; blande lineær og kvadratisk motstand i $v_t$; feil fortegn i $t=-\tau\ln(1-\alpha)$.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 1.3: Drill: kinematikk og luftmotstand (sjanger M1)

- **id:** `tfy4104-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill i MC-tempo: fra gitt $v(t)/\omega(t)$ (inkl. luftmotstandsmodell) til tallsvaret på maks-akselerasjon, strekning, terminalfart og riktig $a(t)$-graf — feilfritt og raskt.
- **Eksamensbelegg:** Sjanger M1 samlet (100 %, luftmotstand 88 %). Varianter i arkivet: eksponentiell innfart/utfart, potens$\times$eksponential, luftmotstand lineær/kvadratisk, «finn $a$ størst», graf-gjenkjenning, tid til brøk av $v_t$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) spørres det om akselerasjon (derivér), strekning (integrér) eller retning/graf (form-analyse)?; 2) maks-akselerasjon: derivér, prøv $t=0$ først; 3) luftmotstand: terminalfart fra $a=0$, tidskonstant $\tau=m/b$; 4) tid til brøk: $t=-\tau\ln(1-\alpha)$; 5) graf: match $a$-form mot $v$-form. Gjennomregnet MC-case med margnotat om **at $a$ er størst i $t=0$** og hvor avrundingsfellen ligger. 12–15 oppgaver på eksamensnivå som roterer sjangeren, alle med rent tallsvar (A–F-format der det passer).
- **Oppgavesjangre:** M1. Mønstereksempel: «Et fallskjermhopper-system har $v(t)=v_t(1-e^{-t/\tau})$. (a) Finn akselerasjonen ved $t=0$. (b) Hvor stor er farten ved $t=\tau$? (c) Hvilken graf A–F viser $a(t)$?»
- **Typiske feil:** Hele M1-repertoaret: konstant-$a$-feilen, $a$ størst ved feil $t$, feil $a(t)$-graf, lineær vs. kvadratisk motstand, for tidlig avrunding.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A kinematikk fra $v(t)$: maks-$a$ + strekning · 1.B luftmotstand: terminalfart + tid til brøk av $v_t$ · 1.C graf-gjenkjenning $v\to a$ + eksponentiell modell · 1.D MC-format: 8–10 tette flervalgsspørsmål på kinematikk/luftmotstand)

---

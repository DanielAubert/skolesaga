# Bokskjelett: TFY4104 Fysikk — eksamensrettet lærebok (NTNU)

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
- **Forkunnskaper/kryssbok:** [Repetisjon av derivasjon](/r2/r2-2-1) og [Bestemt integral som grenseverdi](/r2/r2-2-4) (derivér/integrér fartsfunksjonen); [Variabelskifte (substitusjon)](/r2/r2-3-1) (integraler med eksponentialledd); [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2) (fysikk 2-fundament for $a=dv/dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $a(t)=\frac{dv}{dt}$, $\alpha(t)=\frac{d\omega}{dt}$; **maks-akselerasjon** ved å derivere og sette $a'(t)=0$ (for eksponentielle modeller ligger maks nesten alltid i $t=0$ — vis hvorfor); strekning $s=\int_0^{t} v\,dt$, vinkel $\varphi=\int_0^{t}\omega\,dt$; **konseptuell kobling** $v$-form → $a$-form (konstant/lineær/eksponentiell), velg riktig graf; når $a$ IKKE er konstant kan man ikke bruke $v=v_0+at$. **Rask vei til tall (MC-oppskrift):** 1) sett inn $t=0$ i $a(t)$ for maks (sjekk fortegn/form); 2) integrér til oppgitt $t$ (eller $t\to\infty$) for total strekning; 3) for graf-spørsmål: match krumning/fortegn på $a(t)$ mot $v(t)$. **Utledning som kreves aktivt:** derivere og integrere den oppgitte modellen; begrunne hvorfor maks er i $t=0$. **Figurkrav:** skisse av $v(t)$ og $a(t)$ over samme tidsakse.
- **Oppgavesjangre:** M1. Mønstereksempel: «En sykkel har fart $v(t)=v_0(1-e^{-t/\tau})$. Finn (a) akselerasjonen ved $t=0$, (b) hvilken av grafene A–F som viser $a(t)$ riktig, og (c) strekningen tilbakelagt i løpet av tiden $t=2\tau$.»
- **Typiske feil (analysen §5.7):** Bruke konstant-akselerasjon-formler når $a$ ikke er konstant; lete etter maks-akselerasjon ved feil $t$; velge feil $a(t)$-graf (lineær $a$ til ikke-lineær $v$); avrunde $s$ for tidlig.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 1.2: Luftmotstand, terminalfart og eksponentielle fartsmodeller *(TFY4104-signatur)*

- **id:** `tfy4104-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-1-1`
- **kapitteltype:** teori
- **description:** Bevegelse med luftmotstand: terminalfart, den eksponentielle innfartsmodellen $v(t)=v_t(1-e^{-t/\tau})$, og hvorfor akselerasjonen er størst i $t=0$ — TFY4104s mekanikk-signatur.
- **Eksamensbelegg:** Sjanger M1 (luftmotstands-variant) i **~88 %** (15/17) — en **egenart** ved TFY4104 mot TFY4125, går ofte igjen som klynger av 2–3 koblede spørsmål. Signatur: fritt fall/akselerasjon med luftmotstand → terminalfart $v_t$; $v(t)=v_t(1-e^{-t/\tau})$; «finn $a$ størst» (svar: $t=0$); tid/strekning til en gitt brøk av $v_t$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Repetisjon av derivasjon](/r2/r2-2-1) (derivér eksponentialen); [Newtons 2. lov](/fysikk2/fysikk2-1-2) (kraftlikning med luftmotstand). (Skråplan/N2 utdypes i kap. 2.1.)
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

### Del 2 — Kraft, energi, rulling og krum bane *(prioritet: PERFEKT)*

#### Kapittel 2.1: Newtons 2. lov på skråplan med friksjon

- **id:** `tfy4104-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-1-1`
- **kapitteltype:** teori
- **description:** Frilegemediagram på skråplan, dekomponering av tyngden, kinetisk/statisk friksjon, og standardsvaret $a=g(\sin\beta\pm\mu\cos\beta)$ — pluss oppbremsing i bakke via energibevaring.
- **Eksamensbelegg:** Sjanger M2 i **~95 %** (16/17). Signatur: legeme på skråplan opp eller ned med kinetisk friksjon; finn akselerasjon, snuavstand eller nødvendig friksjon; oppbremsing $\mu=v_0^2/2gs$ (horisontalt), $s=v_0^2/[2g(\mu_s\cos\theta-\sin\theta)]$ (bakke). Masse og startfart faller ofte ut. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Vektorer og komponenter](/fysikk2/fysikk2-1-1) (dekomponering); [Skalarproduktet](/r2/r2-5-3) (komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dekomponér tyngden ($mg\sin\beta$ langs, $mg\cos\beta$ normalt); normalkraft $N=mg\cos\beta$; kinetisk friksjon $f=\mu N=\mu mg\cos\beta$ **rettet mot bevegelsen**; N2 langs planet gir $a=g(\sin\beta\pm\mu\cos\beta)$ (vis fortegnsvalget eksplisitt); snuavstand oppover $x=v_0^2/2a$; oppbremsing på horisontalt underlag $\mu=v_0^2/2gs$; betingelse for å gli ($\tan\beta>\mu_s$). **Rask vei til tall (MC-oppskrift):** 1) tegn retning, velg fortegn på friksjonsleddet; 2) $a=g(\sin\beta\pm\mu\cos\beta)$ direkte; 3) snuavstand $v_0^2/2a$. Merk at $m$ ofte forsvinner. **Utledning som kreves aktivt:** hele N2-oppsettet fra frilegemediagram; utled $\mu=v_0^2/2gs$. **Figurkrav:** frilegemediagram med $mg$, $N$, $f$ og dekomponert tyngde.
- **Oppgavesjangre:** M2. Mønstereksempel: «En kloss sendes oppover et skråplan med helning $\beta$ og startfart $v_0$. Friksjonskoeffisienten er $\mu$. Finn akselerasjonen mens klossen går oppover og hvor langt opp den når før den snur.»
- **Typiske feil (analysen §5):** Feil fortegn på friksjonsleddet (retning ift. bevegelse); bruke $\sin$ der $\cos$ skal stå i dekomponeringen; ta med masse i svaret der den faller ut; glemme at friksjon skifter fortegn når legemet snur; sette $N=mg$ på skråplan.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 2.2: Arbeid, energibevaring og rullende legeme ($\tfrac12(1+c)mv^2$)

- **id:** `tfy4104-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-2-1`
- **kapitteltype:** teori
- **description:** Energibevaring for et legeme som ruller uten å gli — med rotasjonsenergien inkludert — pluss akselerasjonen ned skråplanet uavhengig av $M$ og $R$, og arbeid/effekt.
- **Eksamensbelegg:** Sjanger M3 (rullende legeme/energibevaring) i **100 %**; effekt $P=W/t=Fv$ **~60 %** (arbeid/energi/effekt). **Å glemme rotasjonsleddet (bruke $\tfrac12 mv^2$) er den hyppigst innebygde fella i mekanikkdelen.** Den konseptuelle klassikeren: $a=\tfrac{g\sin\beta}{1+c}$ er uavhengig av $M,R$ → alle sylindre kommer samtidig ned. Prioritet: **perfekt** (M3); **kunne** (effekt).
- **Forkunnskaper/kryssbok:** kap. 2.1; [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2). (Treghetsmoment $I=cmR^2$ innføres fullt i kap. 4.1; her brukes resultatene fra formelark-tabellen.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kinetisk energi for rulling $K=\tfrac12 mv^2+\tfrac12 I\omega^2$ med rullebetingelsen $v=\omega R$; med $I=cmR^2$ blir $K=\tfrac12(1+c)mv^2$; energibevaring $mg\,\Delta y=\tfrac12(1+c)mv^2$ (ren rulling); fart i punkt via høydeforskjell; **akselerasjon ned skråplan** $a=\tfrac{g\sin\beta}{1+c}$ fra N2 for translasjon ($mg\sin\beta-f=ma$) + rotasjon ($fR=I\alpha$, $a=\alpha R$) — **uavhengig av $M,R$**; arbeid $W=\int F\,ds$, arbeid–energisetningen $W_\text{tot}=\Delta K$; **effekt** $P=W/t=Fv$ (togeffekt $P=\tfrac12 mv^2/t$). **Rask vei til tall (MC-oppskrift):** for rullende legeme — $v=\sqrt{\frac{2g\,\Delta y}{1+c}}$ direkte; velg $c$ (kule ⅖, sylinder ½, skall ⅔); for akselerasjon $a=\tfrac{g\sin\beta}{1+c}$. **Utledning som kreves aktivt:** utled $\tfrac12(1+c)mv^2$ og $a=\tfrac{g\sin\beta}{1+c}$. **Figurkrav:** høydeprofil med energiregnskap; frilegemediagram for rulling (tyngde, $N$, friksjon $f$).
- **Oppgavesjangre:** M3. Mønstereksempel: «En homogen sylinder ($c=\tfrac12$) slippes fra ro og ruller uten å gli ned et skråplan med helning $\beta$. Finn akselerasjonen, og forklar hvorfor den er uavhengig av sylinderens masse og radius.»
- **Typiske feil (analysen §5.1, §5.2):** **Glemme rotasjonsenergien** ($\tfrac12 mv^2$ → for høyt svar) — hovedfella; **tro at masse/radius påvirker** akselerasjonen (den gjør ikke); bruke feil $c$ (kule vs. sylinder vs. skall); bruke konstant-$a$-kinematikk der energibevaring trengs; feil i $v=\omega R$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Sirkelbevegelse, normalkraft og rullende legeme på krum bane *(TFY4104-signatur)*

- **id:** `tfy4104-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `tfy4104-2-2`
- **kapitteltype:** teori
- **description:** Normalkraft i sirkelbevegelse (loop, topp/bunn), og — TFY4104s andre signatur — et rullende legeme på en krumlinjet bane $y(x)$: fart, tangentiell akselerasjon og normalkraft via krumningsradius fra formelarket.
- **Eksamensbelegg:** Sjanger M8 (sirkelbevegelse+normalkraft) i **~70 %** (12/17), M9 (rulling på krum bane) i **~40 %** — en **egenart** ved TFY4104, går ofte igjen som klynge av 2–3 koblede spørsmål. Signatur: $N-mg=mv^2/r$ (bunn), $N$ størst der $v$ størst; gitt bane $y(x)=y_0 x^2/L^2$, finn fart (energibevaring m/rotasjonsledd), tangentiell akselerasjon ($a_\parallel=\tfrac{g\sin\theta}{1+c}$, $\tan\theta=y'$) og normalkraft via krumningsradius $1/\rho=y''$ (fra formelark). Prioritet: **kunne** (M8/M9, karakteravgjørende i øvre sjikt).
- **Forkunnskaper/kryssbok:** kap. 2.2; [Sirkelbevegelse og sentripetalkraft](/fysikk2/fysikk2-1-4) (fysikk 2-fundament for $v^2/r$); [Repetisjon av derivasjon](/r2/r2-2-1) ($y'$, $y''$); [Parameterframstilling av kurver](/r2/r2-6-1) (bane).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: sentripetalkraft $\sum F_\perp=\frac{mv^2}{r}$; normalkraft i bunn $N-mg=\frac{mv^2}{r}$, i topp $mg-N=\frac{mv^2}{r}$; **$N$ størst der $v$ størst** (energibevaring), minimumsfart i topp av loop ($N=0$: $v^2=gr$); **banevinkel** $\tan\theta=y'=dy/dx$; **krumningsradius** $\rho=\frac{(1+y'^2)^{3/2}}{|y''|}$ (fra formelark), i bunn-/toppunkt ($y'=0$) forenkles til $\rho=1/|y''|$; for rullende legeme på krum bane: fart fra energibevaring $mg\,\Delta y=\tfrac12(1+c)mv^2$, tangentiell akselerasjon $a_\parallel=\tfrac{g\sin\theta}{1+c}$, normalkraft i bunn $N/mg=v^2/(g\rho)+1$. **Rask vei til tall (MC-oppskrift):** 1) fart via energibevaring (husk rotasjonsledd); 2) banevinkel $\theta=\arctan(y')$; 3) $\rho=1/|y''|$ i topp-/bunnpunkt; 4) normalkraft $N=m(v^2/\rho\pm g)$. **Utledning som kreves aktivt:** normalkraftlikningen fra sentripetalakselerasjon; koblingen $\rho=1/|y''|$ i ekstremalpunkt. **Figurkrav:** bane $y(x)$ med tangent (banevinkel $\theta$), krumningssirkel i bunnpunktet, og krefter ($mg$, $N$, $f$).
- **Oppgavesjangre:** M8, M9. Mønstereksempel: «En liten kule ruller uten å gli langs banen $y(x)=y_0 x^2/L^2$ og starter i ro fra $x=L$. I bunnpunktet $x=0$: (a) finn farten, (b) finn krumningsradiusen, og (c) finn normalkraften fra banen på kula.»
- **Typiske feil (analysen §5.2, §5.5):** Sette $N=mg$ på krum bane (feil — $N$ endres av sentripetalleddet); glemme rotasjonsleddet i farten på krum bane; bruke full krumningsformel der $y'=0$ forenkler; feil fortegn i $N=m(v^2/\rho\pm g)$; bruke konstant-$a$ på krum bane.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.4: Drill: skråplan, energibevaring og krum bane (sjanger M2, M3, M8, M9)

- **id:** `tfy4104-2-4` · **number:** 2.4 · **estimatedMinutes:** 90 · **prerequisites:** `tfy4104-2-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill der avgjørelsen «kinematikk eller energibevaring?», «med eller uten rotasjonsledd?» og «hvordan endrer $N$ seg på krum bane?» tas raskt og riktig — mot tallsvar.
- **Eksamensbelegg:** Sjanger M2+M3+M8+M9 samlet. Varianter: kloss på skråplan opp/ned m/friksjon, legeme som ruller ned/opp, loop/normalkraft-rangering, rullende legeme på parabelbane med krumningsradius. Prioritet: **perfekt** (M2/M3) / **kunne** (M8/M9).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) rett skråplan/konstant kraft → N2 og kinematikk; krum/høydebasert → energibevaring; 2) ruller legemet? → ta med rotasjonsledd ($1+c$); 3) friksjon? → fortegn mot bevegelse; 4) normalkraft? → sentripetalledd $mv^2/r$; 5) krum bane → krumningsradius $\rho=1/|y''|$; 6) løs den ene avgjørende likningen. Gjennomregnet MC-case med margnotat om **rotasjonsledd-fella** og **$N\neq mg$-fella på krum bane**. 12–15 oppgaver på eksamensnivå, minst tre med rulling, tre med friksjon, to på krum bane.
- **Oppgavesjangre:** M2, M3, M8, M9. Mønstereksempel: «En kule ruller uten å gli ned innsiden av en sirkulær skål med radius $R$ fra kanten. (a) Finn farten i bunnen (energibevaring med rotasjonsledd). (b) Finn normalkraften fra skåla på kula i bunnpunktet.»
- **Typiske feil:** Hele M2/M3/M8/M9-repertoaret: glemt rotasjonsledd, feil friksjonsfortegn, $N=mg$ på krum bane, feil $c$, konstant-$a$ på krum bane.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A skråplan m/friksjon: akselerasjon + snuavstand · 2.B rullende legeme energibevaring + $a=\tfrac{g\sin\beta}{1+c}$ · 2.C sirkelbevegelse/normalkraft + rulling på krum bane · 2.D MC-format med rotasjonsledd-fella innebygd)

---

### Del 3 — Bevegelsesmengde, støt og baner *(støt: PERFEKT · baner: KUNNE)*

#### Kapittel 3.1: Bevegelsesmengde, impuls og støt

- **id:** `tfy4104-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-2-2`
- **kapitteltype:** teori
- **description:** Impulsbevarelse, elastisk og fullstendig uelastisk støt med energitap, og impuls fra en tidsavhengig kraft $\int F\,dt$ (trekantpuls).
- **Eksamensbelegg:** Sjanger M6 i **~95 %** (16/17, samlet med dreieimpuls-støt), impuls/kraftstøt separat **~60 %**. Signatur: to legemer i støt (elastisk → fartsformel; uelastisk → felles fart + energitap); impuls som areal under $F(t)$ (trekantpuls: $mv_0=\tfrac12 F_0\tau$); $V=F\Delta t/M$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) ($\int F\,dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bevegelsesmengde $\mathbf{p}=m\mathbf{v}$; **impulsbevarelse** $\sum m\mathbf{v}=\sum m\mathbf{v}'$; elastisk støt mot legeme i ro $v_1'=\frac{m-M}{m+M}v_0$, $v_2'=\frac{2m}{m+M}v_0$; **fullstendig uelastisk** → felles fart $v'=\frac{mv_0}{m+M}$ med energitap $\Delta K=\tfrac12\frac{mM}{m+M}v_0^2$ (andel $\frac{M}{m+M}$ av $K_0$); impuls $\mathbf{J}=\Delta\mathbf{p}=\int\mathbf{F}\,dt$ (areal under $F(t)$); **trekantpuls** $J=\tfrac12 F_0\tau$. **Rask vei til tall (MC-oppskrift):** identifiser støttype (elastisk = energi bevart; uelastisk = felles fart), bruk ferdig fartsformel, regn energitap som differanse $K_0-K'$; for kraftstøt: areal under $F(t)$. **Utledning som kreves aktivt:** utled uelastisk energitap fra impuls- + energiregnskap. **Figurkrav:** før-/etter-skisse med fartspiler; $F(t)$-graf med areal.
- **Oppgavesjangre:** M6. Mønstereksempel: «En kule med masse $m$ og fart $v_0$ treffer en stillestående kloss med masse $M$ og blir sittende fast. Finn felles fart etter støtet og hvor stor andel av den kinetiske energien som går tapt.»
- **Typiske feil (analysen §5):** Bruke energibevaring i uelastisk støt (energi er IKKE bevart der); fortegnsfeil på fart i impulsbevarelse; regne energitap-andelen feil vei; feil grenser/areal i $\int F\,dt$.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.2: Gravitasjon, satellittbaner, skrått kast og rakett

- **id:** `tfy4104-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-3-1`
- **kapitteltype:** teori
- **description:** Sirkelbane under gravitasjon ($GMm/r^2=mv^2/r$), omløpstid, skrått kast med dreieimpuls om utgangspunktet, og rakettligningen — kompakt beredskap.
- **Eksamensbelegg:** Sjanger M11 (gravitasjon/satellitt) **~70 %** (12/17), M12 (skrått kast) **~60 %** (10/17), M13 (rakett) **~20 %** (3/17). Signatur: baneradius/omløpstid fra kraftbalanse; $y_\text{max}$ og dreieimpuls $L_b=y_\text{max}\cdot mv_x$ i banens toppunkt; $\Delta v=u\ln(m_0/m)$. Prioritet: **kunne** (gravitasjon/skrått kast sikrer øvre karakter; rakett beredskap).
- **Forkunnskaper/kryssbok:** kap. 3.1; [Newtons gravitasjonslov](/fysikk2/fysikk2-2-1), [Gravitasjonsfelt](/fysikk2/fysikk2-2-2) og [Gravitasjonell potensiell energi](/fysikk2/fysikk2-2-3) (fysikk 2-fundament); [Kastering – horisontal og skrå](/fysikk2/fysikk2-1-3) (prosjektil).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: sirkelbane $\frac{GMm}{r^2}=\frac{mv^2}{r}=m\omega^2 r$, kombinert med $v=\frac{2\pi r}{T}$ → $T=2\pi\sqrt{r^3/GM}$ (baneradius $r=R+h$); $g=\tfrac43\pi r G\rho$ fra tetthet; **skrått kast:** $y_\text{max}=\frac{v_0^2\sin^2\theta}{2g}$, rekkevidde $R=\frac{v_0^2\sin 2\theta}{g}$ (maks ved 45°), **dreieimpuls om utgangspunktet i toppunktet** $L_b=y_\text{max}\cdot mv_x$; **rakettligning** $\Delta v=u\ln(m_0/m)$. **Rask vei til tall (MC-oppskrift):** bane → sett gravitasjon = sentripetalkraft, løs for etterspurt størrelse; geostasjonær → $r=(GMT^2/4\pi^2)^{1/3}$; skrått kast → sett inn i ferdigformel; rakett → logaritmen direkte. **Utledning som kreves aktivt:** utled baneperiode fra kraftbalansen; utled $L_b$ i toppunktet. **Figurkrav:** bane med kraftvektorer; prosjektilbane med toppunkt.
- **Oppgavesjangre:** M11, M12, M13. Mønstereksempel: «En satellitt går i sirkelbane rundt jorda med omløpstid $T$. Finn baneradien, og avgjør om banen ligger over eller under geostasjonær høyde.»
- **Typiske feil:** Blande $v$ og $\omega$ i sentripetalleddet; glemme $v=2\pi r/T$; enhetsslurv (timer vs. sekunder for $T$); feil vinkel i skrått kast; feil retning på utstøtsfart i rakettligningen.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.3: Drill: støt, impuls og baner (sjanger M6, M11–M13)

- **id:** `tfy4104-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4104-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: velg riktig bevaringslov (impuls og/eller energi) og kom raskt til tallsvaret for støt, impuls og baner.
- **Eksamensbelegg:** Sjanger M6 (95 %) + M11–M13 (20–70 %) samlet. Varianter: elastisk/uelastisk støt, ballistisk pendel, impuls fra $F(t)$-graf, satellittbane, skrått kast m/dreieimpuls, rakett. Prioritet: **perfekt** (støt) / **kunne** (baner).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) støt → impuls alltid bevart; energi bevart KUN hvis elastisk; 2) uelastisk → felles fart, energitap som differanse; 3) impuls fra kraft → areal under $F(t)$; 4) bane → gravitasjon = sentripetalkraft; 5) skrått kast → ferdigformel + dreieimpuls i toppunkt. Gjennomregnet MC-case med margnotat om energibevarings-fella (uelastisk) og enhetsfella (bane). 12–15 oppgaver på eksamensnivå, minst fire støt og to bane.
- **Oppgavesjangre:** M6, M11, M12. Mønstereksempel: «En kule ($m$, $v_0$) skytes inn i en kloss ($M$) som henger i en snor og blir sittende fast (ballistisk pendel). (a) Finn felles fart rett etter støtet. (b) Hvor høyt svinger klossen? (c) Hvor stor andel av kulas energi ble borte?»
- **Typiske feil:** Energibevaring i uelastisk fase; fortegn i impuls; enhetsslurv i bane; feil bevaringslov i hvert steg av ballistisk pendel (uelastisk støt, så energibevaring i svinget).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A elastisk/uelastisk støt + energitap · 3.B impuls fra $F(t)$ + ballistisk pendel · 3.C satellittbane + skrått kast + rakett · 3.D MC-format støt/impuls/bane)

---

### Del 4 — Rotasjon: treghetsmoment, dreieimpuls og statikk *(prioritet: PERFEKT)*

#### Kapittel 4.1: Massesenter, treghetsmoment og Steiners sats

- **id:** `tfy4104-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-2-2`
- **kapitteltype:** teori
- **description:** Massesenter for punktmasser og legemer, treghetsmoment ved $\int r^2\,dm$ og $\sum m_i r_i^2$, Steiners sats og sammensatte legemer.
- **Eksamensbelegg:** Sjanger M4 i **~70–100 %** (treghetsmoment/rulling 100 %, Steiner 12/17). Signatur: treghetsmoment av stang/punktmasser, Steiner for akse utenfor CM, sammensatt legeme $I=I_1+I_2$ (f.eks. to staver). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) ($\int r^2\,dm$); [Vektorkoordinater og regning](/r2/r2-5-2) (massesenter-komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: massesenter $x_\text{CM}=\frac{\sum m_i x_i}{\sum m_i}$ (komponentvis); treghetsmoment for punktmasser $I=\sum m_i r_i^2$ (**perpendikulær** avstand til aksen); kontinuerlig $I=\int r^2\,dm$ med $dm=\lambda\,dx$ (stang), $\sigma\,dA$, $\rho\,dV$; standardresultater fra formelark-tabellen: stang om senter $\tfrac{1}{12}ML^2$, om ende $\tfrac13 ML^2$, kompakt kule $\tfrac25 MR^2$, kuleskall $\tfrac23 MR^2$, sylinder $\tfrac12 MR^2$, plate; **Steiners sats** $I=I_\text{CM}+Md^2$; **sammensatt legeme** $I=I_1+I_2$ (superposisjon av bidrag om samme akse). **Rask vei til tall (MC-oppskrift):** 1) punktmasser → $\sum m_i r_i^2$ med riktig perpendikulær avstand; 2) legeme om akse utenfor CM → slå opp $I_\text{CM}$, legg til $Md^2$; 3) sammensatt → summer bidragene om felles akse. **Utledning som kreves aktivt:** $\int r^2\,dm$ for stang med gitt $\lambda(x)$; anvendelse av Steiner. **Figurkrav:** legeme med akse, CM-avstand $d$ og perpendikulære avstander.
- **Oppgavesjangre:** M4. Mønstereksempel: «Tre punktmasser $m$ sitter i hjørnene av en likesidet trekant med side $a$. Finn treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet.»
- **Typiske feil (analysen §5.3):** **Glemme Steiner-leddet** når aksen ikke går gjennom CM; bruke avstand langs aksen i stedet for perpendikulær; feil integrasjonsgrenser i $\int r^2\,dm$; feil standard-$I$ (kule vs. skall vs. sylinder); feil summering av sammensatt legeme.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 4.2: Dreieimpuls og støt mot roterbart legeme

- **id:** `tfy4104-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-4-1`
- **kapitteltype:** teori
- **description:** Dreieimpuls som spinn + bane med korrekte fortegn, N2 for rotasjon ($\tau=I\alpha$), dreieimpulsbevaring, og støt mot en roterbar stang.
- **Eksamensbelegg:** Sjanger M5 i **~95 %** (16/17, støt/dreieimpuls), M5-dreieimpuls separat 9/17, rotasjonsdynamikk $\tau=I\alpha$ ~55 %. **Fortegn/retning på spinn- og banedreieimpuls er et yndet flervalgspoeng.** Signatur: leirklump treffer stang ytterst → $mv_0 L=(mL^2+\tfrac13 ML^2)\omega$; dreieimpulsbevaring $I\omega=$ konst. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1; [Vektorer i tre dimensjoner](/r2/r2-5-1) (kryssprodukt/høyrehåndsregel).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dreieimpuls $\mathbf{L}=I\boldsymbol{\omega}$ (spinn) og $\mathbf{L}_\text{bane}=\mathbf{r}\times m\mathbf{v}$ (bane); **total $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$ med korrekt fortegn** (høyrehåndsregel); N2 for rotasjon $\tau=I\alpha$, $\boldsymbol{\tau}=\mathbf{r}\times\mathbf{F}$; **bevaring av $\mathbf{L}$** når $\tau_\text{ytre}=0$; **støt mot roterbart legeme:** total $L$ om hengslingspunkt bevart — banedreieimpuls før ($mv_0 L$) → spinn etter ($I_\text{tot}\omega$), f.eks. leirklump ytterst på stang $mv_0 L=(mL^2+\tfrac13 ML^2)\omega$. **Rask vei til tall (MC-oppskrift):** 1) sett opp spinn- og banebidrag med fortegn; 2) støt → $L_\text{før}=L_\text{etter}$ om hengselet, løs for $\omega$; 3) $\tau=I\alpha$ for vinkelakselerasjon. **Utledning som kreves aktivt:** dreieimpulsbevaring i støt mot stang; $\tau=I\alpha$ for fallende/svingende stang. **Figurkrav:** legeme med $\boldsymbol{\omega}$, $\mathbf{v}$, $\mathbf{L}_\text{spinn}$, $\mathbf{L}_\text{bane}$ inntegnet.
- **Oppgavesjangre:** M5. Mønstereksempel: «En leirklump med masse $m$ og fart $v_0$ treffer og fester seg ytterst på en homogen stang ($M$, $L$) som kan rotere fritt om den andre enden. Finn vinkelfarten rett etter støtet.»
- **Typiske feil (analysen §5.6):** **Feil fortegn/retning** på spinn vs. bane (høyrehåndsregel); glemme banebidraget $\mathbf{r}\times m\mathbf{v}$; blande banedreieimpuls og spinn i støt mot stang; feil $I$ (glemme Steiner/klumpens $mL^2$); bruke energibevaring i det uelastiske støtet.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Statikk og momentbalanse

- **id:** `tfy4104-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4104-4-1`
- **kapitteltype:** teori
- **description:** Likevekt for utstrakte legemer: $\sum\mathbf{F}=0$ og $\sum\boldsymbol{\tau}=0$ om et klokt valgt punkt — maks last før velting, kran, bjelke, tannhjul.
- **Eksamensbelegg:** Sjanger M10 i **~80 %** (14/17) — **høyere i TFY4104 enn i TFY4125**, derfor eget kapittel. Signatur: momentbalanse om et klokt punkt (fjerner ukjent kraft); maksimal last før en kran velter (moment om fremre kontaktpunkt); kraftfordeling i bjelke/vogn; tannhjulskobling. Prioritet: **kunne** (høyfrekvent — grenser mot perfekt).
- **Forkunnskaper/kryssbok:** kap. 4.1; [Vektorer og komponenter](/fysikk2/fysikk2-1-1) (kraftkomponenter); [Skalarproduktet](/r2/r2-5-3).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: likevektsbetingelsene $\sum\mathbf{F}=0$ og $\sum\boldsymbol{\tau}=0$; moment $\tau=r_\perp F=rF\sin\phi$ (arm × kraft); **velg momentpunkt klokt** (der en ukjent kraft har null arm); **veltebetingelse:** legemet velter når resultanten av tyngden faller utenfor understøttelsen — maks last fra $\sum\tau=0$ om fremre kontaktpunkt; kraftfordeling på støtter. **Rask vei til tall (MC-oppskrift):** 1) tegn alle krefter med angrepspunkt; 2) sett $\sum\tau=0$ om punktet som eliminerer flest ukjente; 3) løs for etterspurt kraft/last. **Utledning som kreves aktivt:** oppsett av momentlikning; veltegrensen. **Figurkrav:** legeme/kran med krefter, armer og valgt momentpunkt.
- **Oppgavesjangre:** M10. Mønstereksempel: «En kran har egenvekt $Mg$ med tyngdepunkt i avstand $d$ bak fremre hjulaksel. Hvor stor last kan den løfte i en arm med utstikk $\ell$ foran akselen før den velter?»
- **Typiske feil:** Velge et upraktisk momentpunkt (unødvendig mange ukjente); feil arm ($r_\perp$ vs. $r$); glemme en kraft i momentbalansen; feil fortegn/retning på momentbidrag.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.4: Drill: treghetsmoment, dreieimpuls og statikk (sjanger M4, M5, M10)

- **id:** `tfy4104-4-4` · **number:** 4.4 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-4-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill med Steiner-refleks, fortegnsdisiplin på dreieimpuls og klokt momentpunkt i statikk — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger M4+M5+M10 samlet. Varianter: punktmasser/stang med $\lambda(x)$, sammensatt legeme, akse utenfor CM, dreieimpuls med fortegn, støt mot stang, velting/momentbalanse. Prioritet: **perfekt** (M4/M5) / **kunne** (M10).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) massesenter først om nødvendig; 2) treghetsmoment: punktmasser → $\sum m_i r_i^2$; legeme → slå opp $I_\text{CM}$; 3) akse utenfor CM → **legg til $Md^2$ (Steiner)**; 4) dreieimpuls → spinn + bane med fortegn; støt → $L_\text{før}=L_\text{etter}$; 5) statikk → $\sum\tau=0$ om klokt punkt. Gjennomregnet MC-case med margnotat om Steiner-fella, fortegnsfella og momentpunkt-valget. 12–15 oppgaver på eksamensnivå, minst tre med Steiner, tre med dreieimpuls, to statikk.
- **Oppgavesjangre:** M4, M5, M10. Mønstereksempel: «En homogen stang ($M$, $L$) svinger om et punkt i den ene enden. (a) Finn treghetsmomentet om denne aksen (Steiner). (b) Finn vinkelakselerasjonen i det øyeblikket stangen er vannrett.»
- **Typiske feil:** Hele M4/M5/M10-repertoaret: glemt Steiner, perpendikulær avstand, feil standard-$I$, fortegn på dreieimpuls, upraktisk momentpunkt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A massesenter + treghetsmoment (punktmasser/stang) · 4.B Steiner + dreieimpuls m/fortegn + støt mot stang · 4.C statikk/velting + momentbalanse · 4.D MC-format rotasjon/statikk)

---

### Del 5 — Svingninger *(prioritet: PERFEKT)*

#### Kapittel 5.1: Harmoniske svingninger, egenfrekvens og hengslet stang

- **id:** `tfy4104-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-4-1`
- **kapitteltype:** teori
- **description:** Den harmoniske svingelikningen, egenfrekvens $\omega_0=\sqrt{k/m}$, fjærstivhet fra frekvens ($k=4\pi^2 f^2\mu$), og den hengslede stangen som harmonisk oscillator.
- **Eksamensbelegg:** Sjanger M7 (egenfrekvens) i **100 %**. Signatur: finn fjærstivhet $k=m\omega_0^2$ eller egenfrekvens $f=\omega_0/2\pi$; **hengslet stang** — sett opp N2 for rotasjon med små vinkler ($\sin\theta\approx\theta$), les av $\omega^2$. Konseptuelt: akselerasjon størst der utsvinget er størst. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1 (hengslet stang bruker $I_A$ med Steiner); [Repetisjon av derivasjon](/r2/r2-2-1) (svingelikningen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: svingelikningen $\ddot{x}+\omega_0^2 x=0$ med løsning $x(t)=A\cos(\omega_0 t+\phi)$; **egenfrekvens** $\omega_0=\sqrt{k/m}$, $f=\frac{\omega_0}{2\pi}$, $T=\frac{2\pi}{\omega_0}$; sammenhenger $k=m\omega_0^2=4\pi^2 f^2\mu$ (effektiv masse $\mu$), $k=4\pi^2 m/T^2$; **seriekoblede fjærer** $\frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2}$ (parallell $k=k_1+k_2$); **hengslet stang / fysisk pendel:** N2 for rotasjon $I_A\ddot{\theta}=-Mgd\sin\theta\approx-Mgd\,\theta$ gir $\omega^2=\frac{Mgd}{I_A}$ (der $I_A$ = treghetsmoment om opphengspunktet, Steiner!), $T=2\pi\sqrt{I_A/Mgd}$; matematisk pendel $T=2\pi\sqrt{L/g}$ som spesialtilfelle. **Rask vei til tall (MC-oppskrift):** 1) $\omega_0=\sqrt{k/m}$ → $f=\omega_0/2\pi$; 2) hengslet stang → finn $I_A$ (Steiner), sett i $T=2\pi\sqrt{I_A/Mgd}$. **Utledning som kreves aktivt:** utled $\omega_0$ fra N2 for masse på fjær; utled hengslet stang fra $\tau=I\alpha$ med små vinkler. **Figurkrav:** masse-fjær-system og hengslet stang med $d$ og opphengsakse.
- **Oppgavesjangre:** M7. Mønstereksempel: «En homogen stang med masse $M$ og lengde $L$ er hengslet i den ene enden og svinger fritt i tyngdefeltet. Finn svingetiden for små utslag.»
- **Typiske feil (analysen §5):** Blande serie/parallell for fjærer; glemme Steiner i $I_A$ for hengslet stang; bruke $\omega_0$ der $f$ etterspørres (faktor $2\pi$); feil $d$ (avstand oppheng–CM); bruke $\sin\theta$ i stedet for tilnærmingen $\theta$ (eller omvendt der det ikke gjelder).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 5.2: Dempede svingninger

- **id:** `tfy4104-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-5-1`
- **kapitteltype:** teori
- **description:** Amplitude som avtar eksponentielt, $A(t)=A_0 e^{-\gamma t}$ med $\gamma=b/2m$, dempet vinkelfrekvens, og bestemmelse av $b$ fra amplitudereduksjon.
- **Eksamensbelegg:** Sjanger M7 (dempet) i **100 %**. Signatur: finn tid/antall perioder til amplituden er redusert til en gitt brøk; bestem $b$ fra en gitt amplitudereduksjon over $N$ perioder; $\gamma=b/2m$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Repetisjon av derivasjon](/r2/r2-2-1) (eksponentiell demping).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dempet svingelikning $m\ddot{x}+b\dot{x}+kx=0$; **amplitude** $A(t)=A_0 e^{-\gamma t}$ med **$\gamma=\frac{b}{2m}$**; dempet vinkelfrekvens $\omega'=\sqrt{\omega_0^2-\gamma^2}$ (svak demping $\omega'\approx\omega_0$); løs $e^{-\gamma t}=$ brøk for tid, eller antall perioder $n=t/T$; **finn $b$** fra amplitudereduksjon over $N$ perioder: $\gamma=\frac{1}{NT}\ln\frac{A_0}{A_N}$; energi $\sim e^{-2\gamma t}$. **Rask vei til tall (MC-oppskrift):** for «tid til amplitude = brøk»: $t=-\frac{1}{\gamma}\ln(\text{brøk})$; for antall perioder: del på $T=2\pi/\omega'$; for $b$: les av amplitudeforhold, $b=2m\gamma$. **Utledning som kreves aktivt:** vis $\gamma=b/2m$ fra ansatsen $x=A_0 e^{-\gamma t}\cos\omega' t$. **Figurkrav:** dempet svingning med eksponentiell innhyllingskurve $A_0 e^{-\gamma t}$.
- **Oppgavesjangre:** M7. Mønstereksempel: «Et dempet masse-fjær-system har masse $m$, fjærstivhet $k$ og dempingskoeffisient $b$. Etter hvor mange hele svingninger er amplituden redusert til halvparten?»
- **Typiske feil (analysen §5):** Bruke $\gamma=b/m$ eller $b/2k$ i stedet for **$\gamma=b/2m$**; forveksle amplitude-demping med energi-demping (energi $\sim e^{-2\gamma t}$); regne $\omega'=\omega_0$ ved sterk demping; feil fortegn i $t=-\frac{1}{\gamma}\ln(\text{brøk})$.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.3: Drill: svingninger (sjanger M7)

- **id:** `tfy4104-5-3` · **number:** 5.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: egenfrekvens, hengslet stang og dempet amplitude raskt mot tallsvar — med $\gamma=b/2m$-disiplin og $2\pi$-årvåkenhet.
- **Eksamensbelegg:** Sjanger M7 samlet (100 %). Varianter: masse på fjær (serie/parallell), hengslet stang med Steiner, dempet amplitude/antall perioder, $b$ fra amplitudereduksjon. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser system (fjær/hengslet stang/dempet); 2) egenfrekvens $\omega_0=\sqrt{k/m}$ eller $\sqrt{Mgd/I_A}$; 3) dempet → $\gamma=b/2m$, $A_0 e^{-\gamma t}$; 4) oversett mellom $\omega$, $f$, $T$ korrekt (faktor $2\pi$). Gjennomregnet MC-case med margnotat om $\gamma=b/2m$-fella og $2\pi$-fella. 12–15 oppgaver på eksamensnivå, minst tre dempet og tre hengslet stang.
- **Oppgavesjangre:** M7. Mønstereksempel: «To fjærer med stivhet $k_1$ og $k_2$ kobles i serie og bærer en masse $m$. (a) Finn egenfrekvensen. (b) Med en dempingskoeffisient $b$ i tillegg — hvor lang tid tar det før amplituden er $1/e$ av startverdien?»
- **Typiske feil:** Hele M7-repertoaret: serie/parallell-fjær, Steiner i hengslet stang, $\gamma=b/2m$, $2\pi$-faktor.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A egenfrekvens + seriefjærer · 5.B hengslet stang m/Steiner · 5.C dempet amplitude + $b$ fra reduksjon · 5.D MC-format svingninger)

---

### Del 6 — Elektrostatikk og superposisjon *(prioritet: PERFEKT)*

#### Kapittel 6.1: Elektrisk felt og potensial ved superposisjon

- **id:** `tfy4104-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Feltet (vektor) og potensialet (skalar) fra punktladninger ved superposisjon — med fortegn, komponenter og symmetri.
- **Eksamensbelegg:** Sjanger E2 (potensial) i **100 %** — åpner nesten alltid EM-halvdelen; E1 (felt fra ladningskonfig) i **~70 %** (12/17). Signatur: felt/potensial fra 2–4 punktladninger; komponentvis felt, skalar potensial med fortegn; $V=2kq/\sqrt{a^2+x^2}$; symmetri kansellerer komponenter. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Elektrisk ladning og Coulombs lov](/fysikk2/fysikk2-3-1), [Elektrisk felt](/fysikk2/fysikk2-3-2) og [Elektrisk potensial og spenning](/fysikk2/fysikk2-3-3) (fysikk 2-fundament); [Vektorkoordinater og regning](/r2/r2-5-2) (komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Coulomb-felt $E=\frac{kq}{r^2}=\frac{q}{4\pi\varepsilon_0 r^2}$ (retning langs forbindelseslinjen, fra + mot −), potensial $V=\frac{kq}{r}$ (**skalar, med fortegn på $q$, ingen fortegn på $r$**); **superposisjon:** felt summeres **vektorielt** (komponentvis $E_x$, $E_y$), potensial summeres **skalart**; utnytt symmetri og cosinus-komponenter; kraft på prøveladning $\mathbf{F}=q\mathbf{E}$; energi til å flytte ladning $=q\,\Delta V$. **Rask vei til tall (MC-oppskrift):** 1) felt: regn hvert bidrag $kq_i/r_i^2$, dekomponer, summer komponentvis; 2) potensial: bare $\sum kq_i/r_i$ med fortegn — mye raskere enn felt. **Utledning som kreves aktivt:** oppstilling av superposisjonssummen fra geometrien. **Figurkrav:** koordinatsystem med ladninger, feltbidrag og resultant.
- **Oppgavesjangre:** E1, E2. Mønstereksempel: «To ladninger $+Q$ og $-Q$ ligger i $(\pm a,0)$. Finn det elektriske feltet (vektor) og potensialet i punktet $(0,a)$.»
- **Typiske feil (analysen §5.8):** Summere felt skalart (glemme vektorkarakter/retning); gi $r$ fortegn i potensialet; feil potens ($1/r$ i felt eller $1/r^2$ i potensial); glemme $\varepsilon_0$ eller faktor $4\pi$; glemme komponent-kansellering ved symmetri.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 6.2: Elektrisk dipol, ladningsenergi og linjeladning

- **id:** `tfy4104-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-6-1`
- **kapitteltype:** teori
- **description:** Elektrisk dipolmoment $\mathbf{p}=\sum q_i\mathbf{x}_i$, potensiell energi til et ladningssystem, og felt/potensial fra en ladet stav ved integrasjon.
- **Eksamensbelegg:** Sjanger E3 (dipol) **~15 %**, ladningsenergi (del av E1) **~70 %**, E4 (ladet stav/linjeladning) **~25 %**. Signatur: dipolmoment av konfigurasjon; total potensiell energi som sum over unike par; feltintegral $E=k\lambda(1/a-1/(L+a))$ for endelig stav. Prioritet: **kunne** (sikrer øvre karakter).
- **Forkunnskaper/kryssbok:** kap. 6.1; [Vektorkoordinater og regning](/r2/r2-5-2); [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) (feltintegralet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **dipolmoment** $\mathbf{p}=\sum_i q_i\mathbf{x}_i$ (vektor; for nøytralt system origo-uavhengig); **potensiell energi** $U=\sum_{i<j}\frac{kQ_iQ_j}{r_{ij}}$ (sum over **unike par**, ikke dobbelt); arbeid for å sette sammen konfigurasjonen $=U$; **linjeladning:** $dq=\lambda\,dx$ ($\lambda=Q/L$), feltbidrag $dE=\frac{k\,dq}{r^2}$, integrér — felt på staveaksens forlengelse $E=k\lambda(\frac1a-\frac{1}{L+a})$; potensial $dV=\frac{k\,dq}{r}$. **Rask vei til tall (MC-oppskrift):** 1) dipolmoment: $\sum q_i\mathbf{x}_i$ komponentvis; 2) energi: list opp alle par ($N(N-1)/2$ ledd); 3) stav: sett opp integralet med riktig $\lambda$ og grenser. **Utledning som kreves aktivt:** vis at $U$ er sum over unike par; feltintegralet for endelig stav. **Figurkrav:** ladningskonfigurasjon med parvise avstander; linjeladning med $dq$ og $r$.
- **Oppgavesjangre:** E3, E4. Mønstereksempel: «En rett stav med lengde $L$ har jevn ladning $Q$. Finn det elektriske feltet i et punkt på staveaksens forlengelse, i avstand $a$ fra nærmeste ende.»
- **Typiske feil:** Telle par dobbelt (bruke $\sum_{i\neq j}$ uten $\tfrac12$); fortegnsfeil i $Q_iQ_j$; behandle dipolmoment som skalar; feil $\lambda$ (dele på feil lengde); feil integrasjonsgrenser.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.3: Drill: elektrostatisk superposisjon (sjanger E1–E4)

- **id:** `tfy4104-6-3` · **number:** 6.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-6-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: felt (vektor) og potensial (skalar) ved superposisjon, dipolmoment, ladningsenergi og linjeladning — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger E1–E4 samlet (E2 100 %, E1 70 %, E3/E4 kunne). Varianter: ladninger i kvadrat/trekant, dipolmoment, parenergi, ladet stav. Prioritet: **perfekt** (E1/E2).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) felt → vektorsum komponentvis; potensial → skalarsum med fortegn; 2) dipolmoment → $\sum q_i\mathbf{x}_i$; 3) energi → sum over unike par; 4) kontinuerlig → riktig $\lambda$, integrér. Gjennomregnet MC-case med margnotat om vektor/skalar-forskjellen og par-tellingen. 12–15 oppgaver på eksamensnivå, minst to potensial, én dipolmoment, én energi.
- **Oppgavesjangre:** E1, E2, E3, E4. Mønstereksempel: «Fire ladninger sitter i hjørnene av et kvadrat med side $a$: $+Q$, $+Q$, $-Q$, $-Q$ (med klokka). Finn (a) feltet i sentrum, (b) potensialet i sentrum, (c) dipolmomentet.»
- **Typiske feil:** Hele E1–E4-repertoaret: felt summert skalart, fortegn på $r$ i potensial, par talt dobbelt, feil $\lambda$.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A felt + potensial fra punktladninger · 6.B dipolmoment + ladningsenergi · 6.C ladet stav/linjeladning · 6.D MC-format elektrostatikk)

---

### Del 7 — Kondensatorer, dielektrikum og kretser *(prioritet: PERFEKT)*

#### Kapittel 7.1: Kondensatorer, dielektrikum og feltenergi

- **id:** `tfy4104-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-6-1`
- **kapitteltype:** teori
- **description:** Platekondensator ($C=\varepsilon_0 A/d$), serie/parallell-kobling, dielektrikum ($C=\varepsilon_r\varepsilon_0 A/d$), sammensatte kondensatorer (tankmåler) og lagret energi.
- **Eksamensbelegg:** Sjanger E5 (platekondensator) i **100 %**, E6 (serie/parallell) i **94 %**, dielektrikum i **~70 %** (12/17). Signatur: kapasitans fra geometri, serie/parallell etter formelark, dielektrikum øker $C$, **tankmåler = parallellkobling** av luft- og væskefylt del, lagret energi. **Kondensatorer legges som motstander i parallell og omvendt — en klassisk felle.** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Kapasitans og kondensatorer](/fysikk2/fysikk2-3-4) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kapasitans $C=Q/V$; platekondensator $C=\frac{\varepsilon_r\varepsilon_0 A}{d}$ (areal fra geometri, $A=\pi r^2$); **serie** $\frac1C=\sum\frac{1}{C_i}$ (lik ladning $Q$), **parallell** $C=\sum C_i$ (lik spenning $V$) — **motsatt av motstander**, vis kontrasten; **dielektrikum:** felt svekket med $1/\varepsilon_r$, $C$ øker med $\varepsilon_r$; **sammensatt kondensator (tankmåler):** parallellkobling av luft- og væskefylt del med variabelt væskenivå; lagret energi $U=\frac{Q^2}{2C}=\tfrac12 CV^2=\tfrac12 QV$; energitetthet $u=\tfrac12\varepsilon_0 E^2$. **Rask vei til tall (MC-oppskrift):** 1) reduser nettverket (serie/parallell) — pass på at formlene er «byttet om» mot motstander; 2) dielektrikum → gang $C$ med $\varepsilon_r$; 3) tankmåler → summer de to parallelle delene; 4) energi → $Q^2/2C$ eller $\tfrac12 CV^2$ (velg formen som matcher det som er bevart). **Utledning som kreves aktivt:** utled platekondensatorens $C$ fra felt og potensialforskjell; utled serie/parallell-reglene. **Figurkrav:** kondensatornettverk; platekondensator med dielektrikum; tankmåler.
- **Oppgavesjangre:** E5, E6. Mønstereksempel: «To kondensatorer $C_1$ og $C_2$ kobles i serie over en spenning $U$. Deretter fylles $C_1$ med et dielektrikum $\varepsilon_r$. Finn den nye samlede kapasitansen og den lagrede energien.»
- **Typiske feil (analysen §5.9, §5.10):** **Blande serie/parallell** for kondensator vs. motstand (formlene er byttet om); glemme at ladningen er lik i serie og spenningen lik i parallell; glemme dielektrikumsfaktoren $\varepsilon_r$ eller plassere den feil; behandle en tankmåler som én enkel kondensator; feil energiformel ved geometriendring.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 7.2: Resistans, Ohms lov og RC-kretsen

- **id:** `tfy4104-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-7-1`
- **kapitteltype:** teori
- **description:** Ohms lov, motstander i serie/parallell, effekt, resistivitet med temperaturkoeffisient, og den transiente RC-kretsen ($\tau=RC$).
- **Eksamensbelegg:** Sjanger E8 (resistans/Ohm/resistivitet) i **~76 %** (13/17), E7 (RC) i **~53 %** (9/17). Signatur: reduser motstandsnettverk, finn strøm/spenning/effekt; $R=\rho l/A$, $R(T)=R_0(1+\alpha\Delta T)$; RC-lading/utlading med $\tau=RC$. Prioritet: **perfekt** (resistans/Ohm) / **kunne** (RC — men høyt nok til kjernedrill).
- **Forkunnskaper/kryssbok:** kap. 7.1; [Repetisjon av derivasjon](/r2/r2-2-1) (RC-eksponentialen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Ohms lov $U=RI$; **motstand serie** $R=\sum R_i$, **parallell** $\frac1R=\sum\frac{1}{R_i}$; effekt $P=UI=I^2 R=\frac{U^2}{R}$ (velg riktig form — $I^2R$ på grenen når strømmen er kjent); **resistivitet** $R=\frac{\rho l}{A}$ (finn lengde/tverrsnitt), **temperaturkoeffisient** $R(T)=R_0(1+\alpha\Delta T)$; **RC-krets:** tidskonstant $\tau=RC$; lading $Q(t)=Q_0(1-e^{-t/RC})$, utlading $Q(t)=Q_0 e^{-t/RC}$; tid til $x$ %: $t=-\tau\ln(1-Q/Q_0)$; spenning over motstand $U_R=U_0 e^{-t/RC}$. **Rask vei til tall (MC-oppskrift):** 1) reduser nettverket til én ekvivalent $R$; 2) effekt: $I^2R$ på riktig gren; 3) RC: sett $t/\tau$ inn i eksponentialen; **sjekk $\tau=RC$, ikke $L/R$**. **Utledning som kreves aktivt:** utled $\tau=RC$ fra Kirchhoffs spenningslov. **Figurkrav:** kretsdiagram; $Q(t)$/$U_R(t)$-kurve.
- **Oppgavesjangre:** E8, E7. Mønstereksempel: «En kondensator $C$ lades opp gjennom en motstand $R$ fra en spenningskilde $U_0$. Finn tidskonstanten og spenningen over motstanden etter tiden $t=2RC$.»
- **Typiske feil (analysen §5.11, §5.14):** Blande serie/parallell (motsatt av kondensator); bruke $U^2/R$ med feil $U$ i sammensatt krets (bruk $I^2R$ på grenen); feil fortegn/form i RC-eksponentialen (lading vs. utlading); **bytte om $\tau=RC$ og $\tau=L/R$**; geometrislurv i $R=\rho l/A$ (areal, lengde) og prefikser (mm, µΩ).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 7.3: Drill: kretser og kondensatorer (sjanger E5–E8)

- **id:** `tfy4104-7-3` · **number:** 7.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-7-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: reduser nettverk, hold serie/parallell adskilt for kondensator vs. motstand, og regn RC-transient raskt.
- **Eksamensbelegg:** Sjanger E5–E8 samlet (E5 100 %, E6 94 %, E8 76 %, E7 53 %). Varianter: kondensatornettverk med dielektrikum/tankmåler, motstandsnettverk med effekt, resistivitet, RC-lading/utlading. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) er komponenten kondensator eller motstand? — velg RIKTIG serie/parallell-formel (de er byttet om); 2) reduser til ekvivalent; 3) effekt → $I^2R$ på grenen; 4) transient → $\tau=RC$, eksponential. Gjennomregnet MC-case med margnotat om serie/parallell-fella, $U^2/R$-fella og $\tau=RC$-vs-$L/R$-fella. 12–15 oppgaver på eksamensnivå, minst tre kondensator, tre motstand, to RC.
- **Oppgavesjangre:** E5, E6, E7, E8. Mønstereksempel: «Tre motstander $R$ kobles: to i parallell, i serie med den tredje, over $U_0$. (a) Finn strømmen fra kilden. (b) Finn effekten avsatt i den tredje motstanden.»
- **Typiske feil:** Hele E5–E8-repertoaret: serie/parallell byttet om, $U^2/R$-fella, dielektrikumsfaktor, RC-fortegn, $\tau$-forveksling.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A kondensatornettverk + dielektrikum/tankmåler + energi · 7.B motstandsnettverk + effekt + resistivitet · 7.C RC-transient · 7.D MC-format kretser)

---

### Del 8 — Magnetfelt, ladd partikkel og strømsløyfe *(prioritet: PERFEKT)*

#### Kapittel 8.1: Magnetfelt fra strøm — leder, sløyfe, solenoide og superposisjon

- **id:** `tfy4104-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-6-1`
- **kapitteltype:** teori
- **description:** Magnetfeltet fra en rett leder, en ringstrøm og en solenoide — og superposisjon av flere ledere med høyrehåndsregelen og komponent-kansellering.
- **Eksamensbelegg:** Sjanger E9 i **100 %** — kjernen i EM-halvdelens magnetisme. Signatur: $B$ fra lang leder ($\mu_0 I/2\pi R$), sløyfe/senter ($\mu_0 I/2R$), solenoide ($\mu_0 nI$); **superposisjon** av flere ledere (retning fra høyrehåndsregelen, f.eks. null i sentrum av en likesidet trekant av ledere). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Magnetfelt fra strøm](/fysikk2/fysikk2-4-3) og [Magnetfelt og magnetiske krefter](/fysikk2/fysikk2-4-1) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **lang, rett leder** $B=\frac{\mu_0 I}{2\pi R}$ (retning: høyrehåndsregel rundt lederen); **ringstrøm i sentrum** $B=\frac{\mu_0 I}{2R}$, på aksen $B=\frac{\mu_0 I R^2}{2(z^2+R^2)^{3/2}}$; **solenoide** $B=\mu_0 nI$ ($n$ = viklinger per lengde); **superposisjon** av flere ledere (vektorsum, komponent-kansellering ved symmetri); kraft per lengde mellom parallelle ledere $\frac{F}{\ell}=\frac{\mu_0 I_1 I_2}{2\pi d}$. **Rask vei til tall (MC-oppskrift):** 1) velg riktig ferdigformel (leder/ring/solenoide); 2) for $N$ viklinger, gang med $N$; 3) flere ledere → tegn feltretning per leder (høyrehåndsregel), summer vektorielt. **Utledning som kreves aktivt:** vis $B=\frac{\mu_0 I}{2R}$ i sentrum av en ring (Biot–Savart-integranden hentes fra formelarket). **Figurkrav:** leder med feltsirkler; ringstrøm med feltakse; flere ledere med feltbidrag.
- **Oppgavesjangre:** E9. Mønstereksempel: «Tre lange, parallelle ledere står i hjørnene av en likesidet trekant og fører samme strøm $I$ i samme retning. Finn det magnetiske feltet i trekantens sentrum.»
- **Typiske feil (analysen §5.12):** **Rote med høyrehåndsregelen** for $B$-retning rundt en leder; glemme komponent-kansellering ved flere ledere; bruke sentrumsformelen på aksen (eller omvendt); glemme $N$-faktoren; feil potens i $(z^2+R^2)^{3/2}$.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 8.2: Ladd partikkel i magnetfelt — Lorentzkraft, baneradius og massespektrometer

- **id:** `tfy4104-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-8-1`
- **kapitteltype:** teori
- **description:** Lorentzkraften $\mathbf{F}=q\mathbf{v}\times\mathbf{B}$, akselerasjon over spenning ($qU=\tfrac12 mv^2$), sirkelbane ($r=mv/qB$) og konseptpoenget at magnetkraften gjør null arbeid.
- **Eksamensbelegg:** Sjanger E10 i **~25 %**. Signatur: partikkel akselereres over spenning, går i sirkelbane i $B$; finn radius (massespektrometer, forhold $r_e/r_p=m_e/m_p$). **Fast konseptpoeng: magnetkraften står ⊥ på farten og gjør null arbeid.** Prioritet: **kunne** (men konseptpoenget er høyfrekvent).
- **Forkunnskaper/kryssbok:** kap. 8.1; [Magnetisk kraft på ladede partikler](/fysikk2/fysikk2-4-2), [Lorentzkraften](/fysikk2/fysikk2-4-5) og [Ladede partikler i elektriske felt](/fysikk2/fysikk2-3-5) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Lorentzkraft $\mathbf{F}=q\mathbf{v}\times\mathbf{B}$; **akselerasjon over spenning** $qU=\tfrac12 mv^2\Rightarrow v=\sqrt{2qU/m}$; sirkelbane $qvB=\frac{mv^2}{r}\Rightarrow r=\frac{mv}{qB}$; omløpstid $T=\frac{2\pi m}{qB}$ (uavhengig av fart); **magnetkraften gjør null arbeid** ($\mathbf{F}\perp\mathbf{v}$) → farten konstant; forhold mellom radier $\propto\sqrt{m}$ ved samme $U$. **Rask vei til tall (MC-oppskrift):** 1) $v=\sqrt{2qU/m}$; 2) sett inn i $r=mv/qB$; kombinert $r=\frac1B\sqrt{2mU/q}$; sjekk om akselerasjon kreves først. **Utledning som kreves aktivt:** utled $r=mv/qB$ fra kraftbalansen. **Figurkrav:** partikkelbane i $B$-felt med kraft- og fartsvektor.
- **Oppgavesjangre:** E10. Mønstereksempel: «Et ion med ladning $q$ og masse $m$ akselereres fra ro gjennom en spenning $U$ og går inn i et magnetfelt $B$ vinkelrett på farten. Finn radiusen i sirkelbanen.»
- **Typiske feil (analysen §5):** **Glemme å akselerere partikkelen først** før $r=mv/qB$; **regne arbeid av magnetkraften** (den er alltid null); bruke $E$-feltets kraft der $B$-kraften gjelder; enhetsslurv i $\sqrt{2qU/m}$.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 8.3: Dreiemoment på strømsløyfe og hysterese

- **id:** `tfy4104-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-8-1`
- **kapitteltype:** teori
- **description:** Dreiemoment på en strømsløyfe i magnetfelt ($\tau=IAB\sin\phi$), magnetisk dipolmoment, og tolkning av hysterese-/magnetiseringskurven (B–H) — konseptuelt.
- **Eksamensbelegg:** Sjanger E11 (dreiemoment på sløyfe) i **~65 %** (11/17), E16 (hysterese/magnetisering) i **~41 %** (7/17) — **et TFY4104-innslag**, ofte konseptuelt. Signatur: dreiemoment/maks-dreiemoment på strømsløyfe; endring i $\tau$ når $B$ endres; tolke B–H-kurve (remanens, koersitivfelt, hvor materialet er magnetisk mettet). Prioritet: **kunne** (dreiemoment) / **kjenne–kunne** (hysterese, konseptuell).
- **Forkunnskaper/kryssbok:** kap. 8.1; [Magnetisk kraft på strømførende leder](/fysikk2/fysikk2-4-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **magnetisk dipolmoment** $\mathbf{m}=NI\mathbf{A}$ (retning normalt på sløyfeplanet, høyrehåndsregel); **dreiemoment** $\boldsymbol{\tau}=\mathbf{m}\times\mathbf{B}$, størrelse $\tau=IAB\sin\phi$ ($\phi$ mellom $\mathbf{m}$ og $\mathbf{B}$), $\tau_\text{max}=NIAB$; kraft på leder $\mathbf{F}=I\boldsymbol{\ell}\times\mathbf{B}$; potensiell energi $U=-\mathbf{m}\cdot\mathbf{B}$; **hysterese (konseptuelt):** B–H-kurve, remanens (gjenværende $B$ ved $H=0$), koersitivfelt (nødvendig $H$ for $B=0$), **metning** (der $B$ ikke lenger øker med $H$); ferromagnetisk vs. paramagnetisk. **Rask vei til tall (MC-oppskrift):** 1) $m=NIA$; 2) $\tau=mB\sin\phi$; 3) hysterese: les av kurven, identifiser metning/remanens. **Utledning som kreves aktivt:** vis $\tau=NIAB$ som maks-dreiemoment på en rektangulær sløyfe. **Figurkrav:** strømsløyfe med $\mathbf{m}$, $\mathbf{B}$ og dreiemoment; B–H-hysteresekurve med remanens/koersitivfelt/metning.
- **Oppgavesjangre:** E11, E16. Mønstereksempel: «En kvadratisk strømsløyfe med side $a$, $N$ viklinger og strøm $I$ står med normalen i vinkel $\phi$ til et homogent felt $B$. Finn dreiemomentet på sløyfa.»
- **Typiske feil:** Glemme $N$ i $m=NIA$; bruke feil vinkel ($\sin$ i dreiemoment, $\cos$ i energi — forveksles); feil areal for ikke-sirkulær sløyfe; feiltolke B–H-kurven (blande remanens og koersitivfelt); tro at $B$ øker ubegrenset med $H$ (metning).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 8.4: Drill: magnetfelt, ladd partikkel og strømsløyfe (sjanger E9–E11, E16)

- **id:** `tfy4104-8-4` · **number:** 8.4 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-8-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill: velg riktig $B$-feltformel, akselerér-så-bøy ($r=mv/qB$), og regn dreiemoment/tolk hysterese raskt.
- **Eksamensbelegg:** Sjanger E9–E11 + E16 samlet (E9 100 %, E11 65 %, E16 41 %, E10 25 %). Varianter: ring-/solenoide-/lederfelt + superposisjon, massespektrometer, dreiemoment på sløyfe, hysteresetolkning. Prioritet: **perfekt** (E9).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) $B$-felt → velg leder/ring/solenoide-formel, gang med $N$, superponer med høyrehåndsregel; 2) ladd partikkel → akselerér først ($qU=\tfrac12 mv^2$), så $r=mv/qB$; husk null-arbeid; 3) sløyfe → $m=NIA$, $\tau=mB\sin\phi$; 4) hysterese → les kurven. Gjennomregnet MC-case med margnotat om høyrehåndsregel-fella og akselerér-først-fella. 12–15 oppgaver på eksamensnivå, minst tre $B$-felt, to partikkelbane, to dreiemoment, én hysterese.
- **Oppgavesjangre:** E9, E10, E11, E16. Mønstereksempel: «Et proton akselereres over spenning $U$ og går inn i feltet $B$ inne i en lang solenoide med $n$ viklinger per lengde og strøm $I$. (a) Finn $B$ i solenoiden. (b) Finn radiusen i protonets bane. (c) Hvor mye arbeid gjør magnetkraften per omløp?»
- **Typiske feil:** Hele E9–E11/E16-repertoaret: høyrehåndsregel, komponent-kansellering, akselerér-først glemt, magnetarbeid ≠ 0-feilen, $N$-faktor, vinkelfeil i dreiemoment, hysteresetolkning.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A $B$ fra leder/ring/solenoide + superposisjon · 8.B ladd partikkel: akselerasjon + $r=mv/qB$ · 8.C dreiemoment på sløyfe + hysterese · 8.D MC-format magnetisme)

---

### Del 9 — Induksjon, induktans og svingekretser *(induktans: PERFEKT · resten: KUNNE)*

#### Kapittel 9.1: Faradays lov, induktans og magnetisk energi

- **id:** `tfy4104-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4104-8-1`
- **kapitteltype:** teori
- **description:** Faradays lov, den roterende sløyfa ($\Phi=B_0 A\cos\omega t$), selvinduktans til en solenoide, magnetisk energitetthet, og gjensidig induktans.
- **Eksamensbelegg:** Sjanger E12 (induktans/magnetisk energi) i **~88 %** (15/17) — **perfekt**; E13 (Faraday/roterende sløyfe) i **~53 %** (9/17); gjensidig induktans **~29 %** (5/17). Signatur: roterende sløyfe gir vekselspenning $V_0=NBA\omega$; solenoide $L=\mu_0 N^2 A/l$; magnetisk energitetthet $u_B=B^2/2\mu_0$, total $U_B=u_B\cdot V$ med $B=\mu_0 nI$; gjensidig induktans $M=\Phi/I$. Prioritet: **perfekt** (induktans/energi) / **kunne** (Faraday).
- **Forkunnskaper/kryssbok:** kap. 8.1; [Magnetisk fluks](/fysikk2/fysikk2-5-1), [Faradays induksjonslov](/fysikk2/fysikk2-5-2) og [Lenz lov](/fysikk2/fysikk2-5-3) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: magnetisk fluks $\Phi_B=\int\mathbf{B}\cdot d\mathbf{A}$; **Faradays lov** $\varepsilon=-N\frac{d\Phi_B}{dt}$; **roterende sløyfe** $\Phi=B_0 A\cos\omega t\Rightarrow\varepsilon=NB_0 A\omega\sin\omega t$ (amplitude $V_0=NB_0 A\omega$); **Lenz' lov** for strømretning; **selvinduktans** $L=\frac{\mu_0 N^2 A}{l}$ (solenoide), $\varepsilon=-L\frac{dI}{dt}$; **magnetisk energitetthet** $u_B=\frac{B^2}{2\mu_0}$, total energi $U_B=u_B\cdot(\text{volum})$ med $B=\mu_0 nI$, eller $U_B=\tfrac12 LI^2$; **gjensidig induktans** $M=\Phi/I$, $\varepsilon_2=-M\frac{dI_1}{dt}$. **Rask vei til tall (MC-oppskrift):** 1) roterende sløyfe → amplitude $NB_0 A\omega$; 2) induktans → $L=\mu_0 N^2 A/l$; 3) magnetisk energi → $B^2/2\mu_0$ × volum, eller $\tfrac12 LI^2$; 4) indusert spenning → $L\,dI/dt$ eller $M\,dI/dt$. **Utledning som kreves aktivt:** utled $\varepsilon(t)$ for roterende sløyfe; utled solenoidens $L$. **Figurkrav:** roterende sløyfe i felt; solenoide; to koblede spoler.
- **Oppgavesjangre:** E12, E13. Mønstereksempel: «En rektangulær sløyfe med $N$ viklinger og areal $A$ roterer med vinkelfart $\omega$ i et homogent felt $B_0$. Finn amplituden til den induserte spenningen, og den magnetiske energien lagret i en solenoide med samme feltverdi.»
- **Typiske feil (analysen §5.13):** Glemme $N$ i amplituden; forveksle $\sin$/$\cos$ (fluks $\cos$, emf $\sin$); fortegnsfeil (Lenz); glemme $N^2$ i selvinduktansen; feil volum i den magnetiske energien.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 9.2: Motional EMS, RL- og LC-kretser

- **id:** `tfy4104-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4104-9-1`
- **kapitteltype:** teori
- **description:** Bevegelses-EMS på en stang på skinner, RL-kretsens tidskonstant ($\tau=L/R$) og energitap, og LC-svingekretsen ($\omega_0=1/\sqrt{LC}$).
- **Eksamensbelegg:** Sjanger E14 (motional EMS) **~25 %**, E15 (RL/LC) **~15–20 %**. Signatur: stang på skinner i $B$-felt gir $\varepsilon=V_0=BlV$, kraft $F_m=IlB$, akselerasjon $a=V_0 lB/mR$ ved $t=0$; RL: $\tau=L/R$, $I(t)=I_0(1-e^{-t/\tau})$, energitap $\int RI^2 dt$; LC: $\omega_0=1/\sqrt{LC}$, $I_0=\omega_0 Q_0$, energi $U=Q_0^2/2C$. Prioritet: **kunne** (lavfrekvent — kompakt beredskap). Merk: TFY4104 har IKKE TFY4125s RLC-via-mekanisk-analogi som signatur; RLC-demping ($\gamma=R/2L$) nevnes kort som beredskap.
- **Forkunnskaper/kryssbok:** kap. 9.1; kap. 5.2 (dempet svingning — analogigrunnlaget for LC/RLC, refereres i klartekst); [Repetisjon av derivasjon](/r2/r2-2-1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **motional EMS** — stang lengde $l$, fart $V$ i felt $B$: $\varepsilon=BlV$; strøm $I=\varepsilon/R$, magnetisk bremsekraft $F_m=IlB=B^2 l^2 V/R$, akselerasjon ved $t=0$: $a=V_0 lB/mR$; **RL-krets:** tidskonstant $\tau=L/R$, $I(t)=I_0(1-e^{-t/\tau})$, energitap $\int RI^2\,dt$; **LC-svingekrets:** $\omega_0=\frac{1}{\sqrt{LC}}$, $T=2\pi\sqrt{LC}$, $I_0=\omega_0 Q_0=\frac{1}{\sqrt{LC}}V_0 C$, energi $U=\frac{Q_0^2}{2C}=\tfrac12 LI_0^2$; **dempet RLC** (beredskap): $\gamma=\frac{R}{2L}$. **Rask vei til tall (MC-oppskrift):** 1) motional EMS → $\varepsilon=BlV$, så $a=V_0 lB/mR$; 2) RL → **$\tau=L/R$** (ikke $RC$!); 3) LC → $\omega_0=1/\sqrt{LC}$; 4) energi → $Q_0^2/2C$. **Utledning som kreves aktivt:** utled akselerasjonen ved $t=0$ for stang på skinner; utled $\omega_0=1/\sqrt{LC}$ fra $L\ddot{q}+q/C=0$. **Figurkrav:** stang på skinner i $B$-felt; RL- og LC-krets med kurver.
- **Oppgavesjangre:** E14, E15. Mønstereksempel: «En leder-stang med lengde $l$ og masse $m$ glir friksjonsfritt på to skinner i et felt $B$, koblet i krets med motstand $R$. Stangen gis startfart $V_0$. Finn akselerasjonen i det øyeblikket bevegelsen starter.»
- **Typiske feil (analysen §5.11):** **Bytte om $\tau=L/R$ og $\tau=RC$** (den innebygde tidskonstant-fella); feil eksponent-fortegn i RL-oppbygging vs. avkling; glemme faktor i den magnetiske bremsekraften ($B^2 l^2/R$); blande LC-energi $Q_0^2/2C$ og $\tfrac12 LI^2$.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 9.3: Drill: induksjon, induktans og svingekretser (sjanger E12–E15)

- **id:** `tfy4104-9-3` · **number:** 9.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4104-9-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: roterende sløyfe/induktans/magnetisk energi, motional EMS og RL/LC — med jerngrep på tidskonstantene ($RC$ vs. $L/R$).
- **Eksamensbelegg:** Sjanger E12–E15 samlet (E12 88 %, E13 53 %, E14/E15 15–25 %). Varianter: roterende sløyfe, selv-/gjensidig induktans, magnetisk energitetthet, stang på skinner, RL-tidskonstant, LC-egenfrekvens/energi. Prioritet: **perfekt** (E12).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) induksjon → Faraday, amplitude $NB_0 A\omega$; 2) induktans → $L=\mu_0 N^2 A/l$, magnetisk energi $B^2/2\mu_0$ × volum; 3) motional EMS → $\varepsilon=BlV$, $a=V_0 lB/mR$; 4) **tidskonstant: RL → $L/R$, RC → $RC$**; 5) LC → $\omega_0=1/\sqrt{LC}$, energi $Q_0^2/2C$. Gjennomregnet MC-case med margnotat om $RC$-vs-$L/R$-fella og $N$-faktoren. 12–15 oppgaver på eksamensnivå, minst tre induktans/energi og to induksjon.
- **Oppgavesjangre:** E12, E13, E14, E15. Mønstereksempel: «En LC-krets svinger fritt med induktans $L$ og kapasitans $C$. (a) Finn perioden. (b) Finn den maksimale strømmen når startladningen er $Q_0$. (c) En motstand $R$ legges i serie — hva blir tidskonstanten hvis kondensatoren fjernes (ren RL)?»
- **Typiske feil:** Hele E12–E15-repertoaret: $RC$ vs. $L/R$, $\sin/\cos$ i induksjon, $N$/$N^2$-faktor, feil volum i magnetisk energi, LC-energiformlene.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (9.A roterende sløyfe + selvinduktans + magnetisk energi · 9.B gjensidig induktans + motional EMS · 9.C RL/LC-kretser + tidskonstant · 9.D MC-format induksjon/induktans)

---

### Del 10 — Historisk appendiks: termofysikk *(prioritet: KJENNE — ikke gjeldende pensum)*

#### Kapittel 10.1: Termofysikk-malen (historisk, for eldre øvingssett før 2013)

- **id:** `tfy4104-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori (kompakt appendiks)
- **description:** Ideell gasslov, 1. hovedsetning, prosesser, Carnot-virkningsgrad og entropi — SAMLET og TYDELIG MERKET som utfaset (kun for kandidater som øver på sett før 2013).
- **Eksamensbelegg:** Sjanger H1. Fast tredjeblokk **2009–2012** i de åpne utledningssettene (typisk Oppgåve 3), **faset helt ut fra 2013** (0 reelle treff i noe MC-sett). Prioritet: **kjenne** — kapitlet åpner med en tydelig ramme: «Dette er IKKE gjeldende pensum i TFY4104. Les kun hvis du øver på eksamenssett fra 2012 eller tidligere.» (TFY4104 kvittet seg med termofysikk ca. et tiår før TFY4125.)
- **Forkunnskaper/kryssbok:** ingen (selvstendig, kompakt); refererer i klartekst til at energibegrepet fra Del 2 gjenbrukes.
- **Innholdskontrakt:** BØR KJENNE TIL (alt hentes fra formelarket — gjenkjenning, ikke drill): ideell gasslov $pV=nRT$ (alltid **kelvin**); 1. hovedsetning $\Delta U=Q-W$, $W=\int p\,dV$; prosesser (isoterm, isobar, isokor, adiabat $pV^\gamma=$ konst, $TV^{\gamma-1}=$ konst); varmekapasiteter $C_V$, $C_P=C_V+R$, $\gamma=C_P/C_V$; **kretsprosess/virkningsgrad** $\eta=W_\text{netto}/Q_\text{inn}$, **Carnot** $\eta=1-\frac{T_k}{T_v}$; **entropiendring** $\Delta S=\int\frac{dQ_\text{rev}}{T}$ (isoterm $\Delta S=nR\ln\frac{V_2}{V_1}$). Kort «rask vei til tall» KUN for de vanligste variantene (Carnot $\eta$, isoterm arbeid). **Merk eksplisitt:** numeriske Euler-metoder er også utfaset og dekkes IKKE — nevnes kun som historisk kuriosum.
- **Oppgavesjangre:** H1 (historisk). Mønstereksempel: «En Carnot-maskin arbeider mellom $T_v$ og $T_k$. Finn virkningsgraden. (Historisk oppgavetype — ikke gjeldende pensum.)»
- **Typiske feil (analysen §5):** Bruke celsius i stedet for **kelvin** i gasslov/adiabat/entropi; feil fortegn i $\Delta U=Q-W$; blande $C_V$ og $C_P$; feil prosess-sammenheng ($pV^\gamma$ vs. $TV^{\gamma-1}$).
- **Quiz: 16 · Flashcards: 16** (tydelig merket «historisk — ikke gjeldende pensum»)

**Prøve-kvote Del 10:** ingen separat prøve (kjenne-stoff, ikke gjeldende pensum). Dekkes ved behov av eldre øvingssett kandidaten selv finner.

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: MC-strategi og presisjonsdisiplin

- **id:** `tfy4104-11-1` · **number:** 11.1 · **estimatedMinutes:** 40 · **prerequisites:** `tfy4104-0-1`
- **kapitteltype:** teori/strategi
- **description:** Hvordan man høster 40 flervalgspoeng raskt og feilfritt: tidsbudsjett, avrundingsdisiplin mot tette alternativer, og de innebygde fellene samlet.
- **Eksamensbelegg:** Metakapittel for hele MC-formen. Bygger på at kun bokstavsvaret teller, at **svaralternativene ligger tett** og er konstruert rundt typiske feil, og at det ikke gis minuspoeng (så blank gjetting er alltid verdt det på slutten). Prioritet: **perfekt** (dette er selve eksamensferdigheten).
- **Forkunnskaper/kryssbok:** hele boka i kortform; refererer til drillkapitlene 1.3–9.3.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (strategiske ferdigheter): **tidsbudsjett** (~6 min per spørsmål på 40 spm. på 4 t, med margin; ta konseptuelle rangeringsspørsmål raskt; hopp videre og merk usikre; **ingen minuspoeng → gjett aldri blankt til slutt**); **avrundingsdisiplin** — behold 3–4 siffer gjennom hele regnekjeden, rund først til slutt, sammenlign med alternativenes avstand; **når alternativene er tette** → regn nøyaktig; **sjekk-før-svar-listen** (enhet, tierpotens, fortegn, faktor); **de innebygde fellene samlet** (fra §5): glemt rotasjonsledd ($\tfrac12(1+c)mv^2$), $a$ størst ved $t=0$ (luftmotstand), glemt Steiner, fortegn på dreieimpuls, $N\neq mg$ på krum bane, forbyttet serie/parallell kondensator vs. motstand, $\tau=RC$ vs. $L/R$, høyrehåndsregel/feltretning, magnetarbeid ≠ 0, akselerér-før-baneradius, glemt $N$/$N^2$ i induktans; **eliminasjonsstrategi** (utelukk urimelige alternativer ved dimensjon/størrelsesorden). **Rask vei til tall** er hele kapitlets tema. Ingen tung utledning.
- **Oppgavesjangre:** Blandet MC-diagnostikk: 8–10 korte spørsmål der fella er innebygd i avlederne, med forklaring på hvilken felle hvert galt alternativ representerer.
- **Typiske feil:** Alle §5-fellene, presentert som «hvilket galt alternativ ville du valgt hvis du gjorde denne feilen».
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 11.2: Øvingseksamen 1 — 40-spørsmålsmalen (standard)

- **id:** `tfy4104-11-2` · **number:** 11.2 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4104-11-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers flervalgseksamen etter standardmalen: 40 spørsmål A–F, spm. 1–20 mekanikk, 21–40 elektromagnetisme.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (2023–2025-form): **40 spørsmål A–F med tette svaralternativer, kun bokstavsvaret teller, ingen minuspoeng**. Fordeling: **spm. 1–20 mekanikk** med **minst ett fra hver av** kinematikk (M1), luftmotstand/terminalfart (M1-variant), skråplan m/friksjon (M2), rullende legeme (M3), treghetsmoment/Steiner (M4), dreieimpuls/støt mot roterbart legeme (M5), bevegelsesmengde/støt (M6), svingninger dempet (M7), sirkelbevegelse+normalkraft (M8), pluss et utvalg fra {rulling på krum bane (M9), statikk (M10), gravitasjon (M11)}; **spm. 21–40 EM** med **minst ett fra hver av** felt/potensial superposisjon (E1/E2), kondensator/dielektrikum (E5/E6), resistans/Ohm (E8), RC (E7), magnetfelt fra strøm (E9), ladd partikkel i $B$ (E10), dreiemoment på sløyfe (E11), induktans/magnetisk energi (E12), Faraday/roterende sløyfe (E13), pluss et utvalg fra {hysterese (E16), motional EMS (E14)}. Alle oppgaver nyskrevne med egne tall. **Løsningsforslag i sensors ånd: avgjørende lov + én til få regnelinjer + bokstavsvar**, i `collapsible` per spørsmål, med markering av hvilken felle hvert galt alternativ representerer. `tip`-notat om tidsbudsjett (~6 min/spm.).
- **Oppgavesjangre:** M1–M8 (+ utvalg M9–M11) i spm. 1–20 + E1–E13 (+ utvalg E14/E16) i spm. 21–40. Full 40-spørsmålsmal med todelingen.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 2 — 40-spørsmålsmalen (tyngre varianter)

- **id:** `tfy4104-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4104-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i samme mal, vektet mot de tyngre variantene av kjerne-sjangrene og en ny tallkontekst gjennomgående.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal som 11.2 (mek 1–20 / EM 21–40), men vektet mot de **tyngre variantene** og TFY4104-signaturene: luftmotstand med kvadratisk modell og «$a$ størst»-graf, rullende legeme på krum bane med krumningsradius, hengslet stang som oscillator, støt mot roterbar stang med dreieimpuls, sammensatt kondensator/tankmåler, superposisjon av flere ledere med komponent-kansellering, gjensidig induktans, hysteresetolkning. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + én regnelinje i `collapsible` per spørsmål, med felle-forklaring på avlederne; `tip`-notat om hvor de innebygde fellene sitter i akkurat dette settet.
- **Oppgavesjangre:** M1–M10 + E1–E14/E16. Full 40-spørsmålsmal (tyngre varianter, TFY4104-signaturene fremhevet).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 3 — 40-spørsmålsmalen (generalprøve)

- **id:** `tfy4104-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4104-11-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett generalprøve som sammen med 11.2–11.3 dekker samtlige sjangre M1–M13/E1–E16 minst én gang — under fullt tidspress.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal, kalibrert som **generalprøve**: dekker de resterende sjangervariantene som ikke ble truffet i 11.2–11.3 (bl.a. arbeid/effekt $P=Fv$ (M13), skrått kast m/dreieimpuls (M12), rakett (M13), gravitasjon/satellitt (M11), elektrisk dipol/ladet stav (E3/E4), RL/LC-kretser (E15), måling/gjeldende siffer (M12)), i tillegg til hele kjernen. Svaralternativene er bevisst **ekstra tette** enkelte steder for å drille presisjonsdisiplin. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + én regnelinje i `collapsible` per spørsmål; `tip`-notat om selvevaluering (hvilke sjangre traff du feil på → tilbake til hvilket drillkapittel). Sammen dekker 11.2–11.4 alle M-/E-sjangrene minst én gang.
- **Oppgavesjangre:** M1–M13 + E1–E16 (full dekning på tvers av de tre settene). Full 40-spørsmålsmal.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 11:** dekkes av de 3 øvingseksamenene (11.2–11.4) + MC-strategien (11.1) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+14 = **26** | 14+12 = **26** |
| 1 | 1.1–1.3 | 26+26+16 = **68** | 22+22+8 = **52** |
| 2 | 2.1–2.4 | 24+26+24+16 = **90** | 20+24+22+8 = **74** |
| 3 | 3.1–3.3 | 24+20+14 = **58** | 20+18+8 = **46** |
| 4 | 4.1–4.4 | 26+24+20+16 = **86** | 24+22+18+8 = **72** |
| 5 | 5.1–5.3 | 24+22+16 = **62** | 22+20+8 = **50** |
| 6 | 6.1–6.3 | 26+20+16 = **62** | 24+18+8 = **50** |
| 7 | 7.1–7.3 | 24+24+16 = **64** | 22+22+8 = **52** |
| 8 | 8.1–8.4 | 24+22+20+16 = **82** | 22+20+18+8 = **68** |
| 9 | 9.1–9.3 | 24+20+16 = **60** | 22+18+8 = **48** |
| 10 | 10.1 | **16** | **16** |
| 11 | 11.1–11.4 | 16+6+6+6 = **34** | 14+0+0+0 = **14** |
| **Sum** | **37 kap.** | **708 ≥ 500 ✓** | **568 ≥ 500 ✓** |

**Hvorfor quiz-kvoten er bevisst høy (708):** TFY4104-eksamen ER flervalg med tette
distraktorer, så **quizbanken er direkte eksamenstrening** — hvert quizspørsmål er
en mini-eksamensoppgave med realistisk tette avledere (de vanlige regnefeilene som
gale alternativer: glemt rotasjonsledd, feil $c$, forbyttet serie/parallell,
$\tau=RC$ vs. $L/R$, gal feltretning). Derfor sikter boka høyt (600–750-sjiktet),
ikke på gulvet 500 — litt høyere enn TFY4125s 686 fordi TFY4104 har ett ekstra
teorikapittel (de to signatur-kapitlene 1.2 og 2.3 + statikk 4.3). Fordelingen
speiler frekvensen: mekanikk-kjernen (Del 1–2, 4–5) bærer 306 quiz, med Del 2
tyngst (90) fordi den rommer begge signaturene (rulling + krum bane); EM-kjernen
(Del 6–9) bærer 268, med Del 8 (magnetisme, $B$ fra strøm 100 %) tyngst (82).
Flashcards (568) er formel-, oppskrift- og felle-orienterte: hvert kort er enten en
kjerneformel (med markering av om den står på formelarket), et steg i en «rask vei
til tall»-oppskrift, eller en typisk felle — dette er et regnefag med moderat
begrepsmengde, men rikt formel- og oppskriftsapparat, så flashcards ligger
komfortabelt over gulvet uten å blåses opp.

### Prøver per del (4 per temadel 1–9, 36 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre. **Prøvekapittel-id:**
`tfy4104-<del>-prove`, chapterNumber `<del>.P`. Del 1–9 har hver ett prøvekapittel
med 4 prøver (36 prøver totalt); minst én prøve per del er i **MC-format** (tette
flervalgsspørsmål, kun bokstavsvar) for å speile eksamen, mens de øvrige kan vise
symbolsk løsning + rask vei til tall. Løsningsforslag i `collapsible` per oppgave,
med markering av felle-alternativene. Del 0, 10 og 11 har ingen separate delprøver
(eksamenskart/måling, historisk kjenne-stoff, og øvingseksamener).

**Del 1 — Kinematikk og luftmotstand:** 1.A kinematikk fra $v(t)$: maks-$a$ + strekning (25 min) · 1.B luftmotstand: terminalfart + tid til brøk av $v_t$ (25) · 1.C graf-gjenkjenning + eksponentiell modell (25) · 1.D MC-format kinematikk/luftmotstand (30).

**Del 2 — Kraft, energi, rulling og krum bane:** 2.A skråplan m/friksjon (25) · 2.B rullende legeme energibevaring + $a=\tfrac{g\sin\beta}{1+c}$ (25) · 2.C sirkelbevegelse/normalkraft + rulling på krum bane (30) · 2.D MC-format med rotasjonsledd-fella (30).

**Del 3 — Bevegelsesmengde, støt og baner:** 3.A elastisk/uelastisk støt + energitap (25) · 3.B impuls + ballistisk pendel (30) · 3.C satellittbane + skrått kast + rakett (25) · 3.D MC-format støt/impuls/bane (30).

**Del 4 — Rotasjon:** 4.A massesenter + treghetsmoment (25) · 4.B Steiner + dreieimpuls m/fortegn + støt mot stang (30) · 4.C statikk/velting + momentbalanse (25) · 4.D MC-format rotasjon/statikk (30).

**Del 5 — Svingninger:** 5.A egenfrekvens + seriefjærer (25) · 5.B hengslet stang m/Steiner (25) · 5.C dempet amplitude + $b$ fra reduksjon (30) · 5.D MC-format svingninger (30).

**Del 6 — Elektrostatikk:** 6.A felt + potensial fra punktladninger (25) · 6.B dipolmoment + ladningsenergi (25) · 6.C ladet stav/linjeladning (30) · 6.D MC-format elektrostatikk (30).

**Del 7 — Kondensatorer og kretser:** 7.A kondensatornettverk + dielektrikum/tankmåler + energi (30) · 7.B motstandsnettverk + effekt + resistivitet (25) · 7.C RC-transient (30) · 7.D MC-format kretser (30).

**Del 8 — Magnetfelt, ladd partikkel og strømsløyfe:** 8.A $B$ fra leder/ring/solenoide + superposisjon (25) · 8.B ladd partikkel: akselerasjon + $r=mv/qB$ (25) · 8.C dreiemoment på sløyfe + hysterese (25) · 8.D MC-format magnetisme (30).

**Del 9 — Induksjon og induktans:** 9.A roterende sløyfe + selvinduktans + magnetisk energi (25) · 9.B gjensidig induktans + motional EMS (30) · 9.C RL/LC-kretser + tidskonstant (30) · 9.D MC-format induksjon/induktans (30).

### Øvingseksamener (3 komplette 4-timers MC-sett — kap. 11.2–11.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (11.2) | Standard 40-spm (2023–2025) | Spm. 1–20 mekanikk-kjerne, 21–40 EM-kjerne; hver 100 %-sjanger minst én gang |
| Øvingseksamen 2 (11.3) | Tyngre varianter | Samme mal, tyngre varianter + TFY4104-signaturene (luftmotstand-graf, rulling på krum bane, hengslet stang, tankmåler, gjensidig induktans, hysterese) |
| Øvingseksamen 3 (11.4) | Generalprøve (full dekning) | Samme mal + de resterende sjangervariantene (effekt, skrått kast, rakett, dipol/stav, RL/LC, måling); ekstra tette alternativer |

Til sammen dekker de tre settene samtlige sjangre M1–M13/E1–E16 minst én gang,
alle med den faste todelingen (spm. 1–20 mekanikk, 21–40 EM) og tette
svaralternativer der kun bokstavsvaret teller.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t ren flervalg, 40 spm. A–F, 1 poeng riktig
   / 0 feil eller blankt, kun bokstavsvaret teller, hjelpemiddelkode C med formelark
   + treghetsmoment-tabell), den faste todelingen (spm. 1–20 mekanikk, 21–40 EM) og
   prognosen fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (kinematikk fra $v(t)$ **inkl. luftmotstand**, rullende legeme/
   energibevaring, skråplan m/friksjon, treghetsmoment/Steiner, dreieimpuls/støt,
   svingninger, felt+potensial superposisjon, kondensator/kretser, magnetfelt fra
   strøm, induktans/magnetisk energi), *kunne* (sirkelbevegelse+normalkraft,
   **rulling på krum bane**, statikk/velting, gravitasjon/skrått kast, dielektrikum,
   RC, resistivitet, dreiemoment på sløyfe, ladd partikkel i $B$, Faraday),
   *kjenne* (rakett, elektrisk dipol/linjeladning, motional EMS, RL/LC, hysterese,
   måling, **termofysikk som historisk beredskap**).
3. **Rask vei til tall** — «MC-oppskriftene» fra drillkapitlene (1.3, 2.4, 3.3,
   4.4, 5.3, 6.3, 7.3, 8.4, 9.3) i kortform: for hver kjerne-sjanger, den korteste
   feilfrie regnekjeden fra tall til bokstavsvar.
4. **Sensorreglene og MC-strategien** — kun bokstavsvaret teller; alle spm. likt;
   ingen minuspoeng (gjett aldri blankt til slutt); **svaralternativene ligger
   tett** → avrundingsdisiplin (behold 3–4 siffer, rund til slutt), tidsbudsjett
   (~6 min/spm.), hopp-og-merk, eliminasjon ved dimensjon/størrelsesorden (kap. 11.1).
5. **Feilkatalogen** — de typiske fellene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: glemt rotasjonsledd ($\tfrac12(1+c)mv^2$)
   → 2.2; $a$ størst ved $t=0$ (luftmotstand) → 1.2; $N\neq mg$ på krum bane → 2.3;
   glemt Steiner → 4.1; fortegn på dreieimpuls → 4.2; serie/parallell kondensator
   vs. motstand → 7.1/7.2; $\tau=RC$ vs. $L/R$ → 7.2/9.2; høyrehåndsregel/feltretning
   → 8.1; magnetarbeid ≠ 0 → 8.2; akselerér-før-baneradius → 8.2; glemt $N$/$N^2$ i
   induktans → 9.1; dele på $N$ vs. $N-1$ → 0.2.
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **hentes fra formelark** (konstanter,
   krumningsradius-formelen, treghetsmoment-tabellen, kondensator-/solenoide-/
   induktansuttrykk, Faradays lov). Treningsråd: løs alltid oppgaver MED formelarket
   ved siden av, slik eksamen er — boka trener *rask, feilfri bruk*, ikke pugg.
7. **Hva du IKKE trenger** — eksplisitt: bølger, optikk, fluid/Bernoulli,
   relativitet, kjernefysikk (0 treff, aldri pensum i den nåværende formen) og
   numeriske Python-metoder (utfaset). Termofysikk (Del 10) kun hvis du øver på sett
   før 2013.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → mekanikk (1 → 2 → 3 → 4 → 5) → EM (6 → 7 → 8 → 9) → MC-strategi (11.1
   spres utover) → de tre øvingseksamenene (11.2–11.4) de siste ukene under fullt
   tidspress (240 min); drillkapitlene brukes som repetisjon rett før eksamen.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `tfy4104` med alle 37
   kapitler + 9 prøvekapitler (id/number/title/description/estimatedMinutes/topics/
   prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-hoyskole.ts` (append); `sectionNames` fra
   §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under NTNU, navn «TFY4104 Fysikk».
2. **Del 0** (0.1 + 0.2) — etablerer sjangernavnene M1–M13/E1–E16, todelingen,
   frekvenstallene og MC-formen som resten av boka refererer til.
3. **Mekanikk-kjeden Del 1 → 2 → 3 → 4 → 5** (faglig avhengighet: kinematikk/
   luftmotstand → kraft/energi/rulling/krum bane → bevegelsesmengde → rotasjon →
   svingninger). 2.3 (krum bane) bygger på 2.2 (rulling); 5.1 (hengslet stang)
   bruker 4.1 (Steiner).
4. **EM-kjeden Del 6 → 7 → 8 → 9** (elektrostatikk → kretser → magnetisme →
   induksjon). 9.2 (LC/RLC) refererer 5.2 (dempet svingning) i klartekst — ingen
   hard avhengighet, men flagg koblingen.
5. **Del 10** (termofysikk) — selvstendig, kompakt, tydelig merket kjenne; kan
   bygges når som helst.
6. **Del 11 til slutt** — MC-strategien (11.1) og de tre øvingseksamenene
   (11.2–11.4) gjenbruker hele boka; bygges av én agent som leser HELE skjelettet.
   Sørg for at 11.2–11.4 til sammen dekker alle sjangre M1–M13/E1–E16.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   (`tfy4104-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema fastsettes
   i BYGGEKONTRAKT.md (fase 3).

### Batching-forslag til byggebølgen (én agent per del, jf. produksjonsløype fase 4)
- Agent A: Del 0 + Del 1 (+ prøve 1)
- Agent B: Del 2 (+ prøve 2) — størst del (4 kap., begge signaturene); les hele delen samlet
- Agent C: Del 3 + Del 4 (+ prøver 3, 4)
- Agent D: Del 5 + Del 6 (+ prøver 5, 6) — leverer 5.2 som 9.2 refererer
- Agent E: Del 7 (+ prøve 7)
- Agent F: Del 8 (+ prøve 8)
- Agent G: Del 9 (+ prøve 9) — les 5.2-kontrakten (LC/RLC-analogien, klartekst)
- Agent H: Del 10 + Del 11 (les HELE skjelettet for øvingseksamenene)

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker; konsistente
      symboler ($\mathbf{F}$, $\mathbf{E}$, $\mathbf{B}$, $\mathbf{L}$, $\mathbf{p}$,
      $\mathbf{m}$, $\omega_0$, $\gamma$, $\varepsilon_0$, $\mu_0$, $I$ (treghets-
      moment/strøm — hold adskilt per kontekst), $\lambda$, $\tau$, $\rho$
      (krumning/resistivitet — hold adskilt), $c$ (rotasjonsfaktor)).
- [ ] **Notasjonskonsistens (tekstsøk over alle tfy4104-filer):** vektor
      (kraft/felt/dreieimpuls) aldri forvekslet med skalar (energi/potensial/
      treghetsmoment); fortegn/retning eksplisitt på dreieimpuls og feltbidrag;
      $\tau=RC$ (aldri $L/R$) i RC og $\tau=L/R$ i RL; $\gamma=b/2m$ i mekanikk;
      rotasjonsledd $\tfrac12(1+c)mv^2$ konsekvent; **forbudt som satsingsstoff**
      (kun i Del 0-avgrensningen og Del 10 som eksplisitt historisk kjenne):
      termofysikk som kjernepensum, numeriske Python-metoder, og — helt utelatt —
      bølger, optikk, fluid/Bernoulli, relativitet, kjernefysikk (0 treff i tekstsøk
      utenfor Del 0-avgrensningen).
- [ ] **Signatur-drill (TFY4104-egenart):** luftmotstand/eksponentielle fartsmodeller
      (kap. 1.2, «$a$ størst i $t=0$») og rulling på krum bane med krumningsradius
      (kap. 2.3) skal ha tydelig ekstra plass — dette er den viktigste kalibreringen
      mot TFY4104. Statikk (4.3) og hysterese (8.3) er også høyere her enn i TFY4125.
- [ ] **Rask vei til tall + avrundingsdisiplin:** HVERT teori-/drillkapittel har et
      tydelig merket «Rask vei til tall (MC-oppskrift)»-avsnitt OG en
      avrundings-/faktorfelle-`warning`; alle talleksempler beholder 3–4 siffer og
      runder til slutt.
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen konstant-
      verdier presenteres som puggestoff.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet på
      hvert tallsvar og riktig antall gjeldende siffer — boka *modellerer* sensor-
      kravet (tette alternativer).
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (KUN til kapitler
      som finnes — de lenkede fysikk2-/r2-kapitlene i §3 gjenbrukes fra
      TFY4125-skjelettet; **reverifiser mot metadataene FØR bygging**; **tfy4125,
      fys1120 og fys1001 skal IKKE lenkes, kun refereres i klartekst**), `collapsible`
      Symbol- og formelliste, 2–4 eksempler (siste på eksamensnivå), Typiske
      feil-`warning`, 6–12 øvinger med `solution` + `hints` (stigende), repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + gjennomregnet MC-case +
      12–15 oppgaver på eksamensnivå.
- [ ] **MC-kalibrering av quiz:** quizspørsmålene er numeriske flervalgsspørsmål med
      realistisk tette avledere (de vanlige regnefeilene som gale alternativer);
      `options[0]` = riktig svar (runtime stokker).
- [ ] **Quiz-sum ≥ 708 og flashcard-sum ≥ 568** per kvotetabellen i §4 (kontroll-
      summér per del). Quiz bevisst høyt (direkte eksamenstrening).
- [ ] **Prøver:** 4 per temadel 1–9 (36 stk, `tfy4104-<del>-prove`) — minst én per
      del i MC-format + 3 øvingseksamener (11.2–11.4) som til sammen dekker sjangrene
      M1–M13/E1–E16; hver øvingseksamen følger 40-spørsmålsmalen med todelingen
      (1–20 mekanikk, 21–40 EM).
- [ ] **Termofysikk-merking:** Del 10 åpner og lukker med tydelig ramme «historisk —
      ikke gjeldende pensum, kun for eldre øvingssett før 2013»; ingen andre kapitler
      behandler termofysikk som kjernepensum.
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

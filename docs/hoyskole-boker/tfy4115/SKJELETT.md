# Bokskjelett: TFY4115 Fysikk — eksamensrettet lærebok (NTNU)

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (ca. 25 unike eksamenssett 2004–2020; alle løsningsforslag 2017–2020 lest
> fullstendig i flervalgsæraen, 2011/2013/2015/2016 grundig, 2004 lest for
> utledningsformen, resten temaregistrert). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke i sin helhet her. Alle mønstereksempler er
> omskrevne — de kan varieres videre, men aldri kopieres ordrett inn som oppgaver.
> Formlene er standard fysikknotasjon og ikke opphavsrettslig beskyttet.

> ⚠️ **ÆRLIGHETSKRAV — kildeforbehold (gjentas i Del 0):** Eksamensarkivet stopper
> i **2020**. Den nyeste normgivende formen vi kan dokumentere er derfor **40
> flervalgsspørsmål A–F (2019–2020) med fast todeling: mekanikk 1–20, termofysikk
> 21–40**. Emnebeskrivelsen (verifisert 2026) angir fremdeles **mekanikk OG
> termofysikk** som pensum, så alt tyder på at termofysikk-halvdelen består. All
> kalibrering (frekvenser, todeling, sjangervekter) bygger på 2004–2020.
> **Byggefasen bør skaffe nyere sett (2021→)** for å bekrefte at formen ikke har
> endret seg — og oppdatere Del 0 og øvingseksamenene deretter.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tfy4115` |
| Tittel | **TFY4115 Fysikk — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU (Norges teknisk-naturvitenskapelige universitet) |
| Arketype | Regnefag (kvantitativt fag med faste flervalgs-oppgavemaler) |
| Antall kapitler | **37** (1 eksamenskart + 16 mekanikk-tema + 15 termofysikk-tema + 1 numerikk + 4 eksamenstrening) + 11 prøvekapitler |
| Estimert totaltid | **≈ 2 500 min innholdskapitler + ≈ 1 380 min prøver/øvingseksamener ≈ 65 timer** |
| Quiz totalt | **710** (krav ≥500 — bevisst høyt, se §4) |
| Flashcards totalt | **564** (krav ≥500) |

**Pitch (ett avsnitt):** TFY4115-eksamen er en **todelt fysikkeksamen der andre
halvdel er TERMOFYSIKK** — dette er den avgjørende forskjellen fra søsteremnet
TFY4125 (som har elektromagnetisme). Dagens form (2017–2020) er et **rent
flervalgssett med ca. 40 spørsmål A–F** og en helt fast todeling: **spørsmål 1–20
er mekanikk, 21–40 er termisk fysikk**. Kun det endelige **bokstavsvaret teller**
(1 poeng for riktig, 0 for feil eller blankt — ingen minuspoeng, ingen delpoeng
for oppsett). Svaralternativene ligger **tett og systematisk** (f.eks. 0,29 / 0,42
/ 0,55 …), og er ofte konstruert rundt en typisk feil, så én glemt faktor, ett
feil fortegn eller én avrundingsfeil lander på et nabo-alternativ. Denne boka er
derfor kalibrert mot **en rask, feilfri vei til tallsvaret** (MC-modus), i tillegg
til den symbolske forståelsen (nødvendig for eldre utledningssett og for å ikke
huske feil formel). Mekanikk-ryggraden: kinematikk fra gitt $v(t)/\omega(t)$,
Newton på skråplan med friksjon, rullende kompakt kule ($K=\tfrac{7}{10}mv^2$),
treghetsmoment/Steiner/dreieimpuls, og dempede svingninger med $Q$-faktor.
Termofysikk-ryggraden: gasslov + frihetsgrader → $C_V/C_P/\gamma$, **kretsprosessen
med virkningsgrad og effektfaktor** (termofysikkens signatursjanger — en klynge
koblede spørsmål), entropi og hovedsetningene som fortegnsanalyse, varmeledning i
sjikt, og — unikt mot TFY4125 — **varmestråling** ($\sigma T^4$, platebalanse,
Wien). Et siste **numerisk iterasjonsspørsmål** (Plancks lov som fikspunkt) lever
fremdeles og har sitt eget lille kapittel.

**Kritisk rammebetingelse (gjelder HELE boka) — formelark:** Eksamen har
hjelpemiddelkode **C**: bestemt/godkjent kalkulator + Rottmann matematisk
formelsamling + **utdelt fysikk-formelark** («Formler i emne TFY4115 Fysikk»,
verifisert fra 2004- og 2017-settene). Boka skal derfor ALDRI fremstille formler
og konstanter som puggestoff. Skillet er: **«må kunne brukes aktivt»** (velges,
kombineres, deriveres/integreres og settes inn under tidspress — kjerneverktøyene
i kapitlenes innholdskontrakter) vs. **«hentes fra formelarket»** (konstantverdier
som $k_B$, $N_A$, $R$, $\sigma$, $G$, Wien-konstant $b$; treghetsmomenter for
standardlegemer; van der Waals-, Clausius–Clapeyron- og entropiformene). Hvert
delkapittels Symbol- og formelliste markerer hva som står på formelarket. Boka
trener **bruk og rask utregning**, ikke pugg.

**Kritisk kalibreringsregel (gjelder HELE boka) — rask, feilfri vei til tall:**
Fordi kun bokstavsvaret teller og alternativene ligger tett, skal HVERT teori- og
drillkapittel gi to spor for hver kjerne-sjanger:
1. **Symbolsk utledning med intuisjon** (forståelse; nødvendig for eldre
   øvingssett og for å ikke huske feil formel).
2. **«Rask vei til tall» (MC-oppskrift):** den korteste feilfrie regnekjeden fra
   oppgitte tall til bokstavsvaret — hvilken lov, hvilken ene regnelinje, hvilke
   verdier fra formelarket, hvor mange siffer å beholde. Dette er arbeidsformen
   under tidspress og skal stå som et eget, tydelig merket avsnitt/eksempel.
Løsningsforslaget i sensors ånd er **den avgjørende loven + få regnelinjer**.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
Boka spenner over to fagfelt med **kolliderende symboler** — hvert delkapittels
Symbol- og formelliste MÅ derfor gjøre klart hvilken betydning som gjelder der:
- **$\gamma$** = dempingskoeffisient i mekanikk ($\gamma=b/2m$) MEN adiabateksponent
  $\gamma=C_P/C_V$ i termofysikk. **Aldri i samme delkapittel uten eksplisitt
  klargjøring.**
- **$p$** = bevegelsesmengde (vektor $\mathbf{p}=m\mathbf{v}$) i mekanikk MEN trykk
  (skalar) i termofysikk.
- **$T$** = periode/svingetid i mekanikk MEN absolutt temperatur (alltid **kelvin**)
  i termofysikk.
- **$R$** = radius eller termisk motstand ELLER den universelle gasskonstanten —
  kontekstbestemt.
- **$S$** = entropi (termo) MEN taustrekk (mekanikk, konisk pendel) — hold adskilt.
- **Vektor vs. skalar:** kraft $\mathbf{F}$, fart $\mathbf{v}$, bevegelsesmengde
  $\mathbf{p}$, dreieimpuls $\mathbf{L}$ er vektorer; energi $K/U$, treghetsmoment
  $I$, temperatur $T$, entropi $S$, trykk $p$ er skalarer. **Fortegn og retning** på
  dreieimpuls ($\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$) og på
  $Q$/$W$ i hovedsetningene er yndede flervalgspoeng — behandles eksplisitt.
- **Enheter og siffer:** alle tallsvar med SI-enhet, riktig tierpotens og **nok
  gjeldende siffer gjennom hele regnekjeden** (rund først til slutt). Termofysikk:
  **alltid kelvin** i gasslov, $TV^{\gamma-1}$, entropi og Clausius–Clapeyron.
- **Avrundingsdisiplin (eget drillmål):** fordi alternativene ligger tett, er for
  tidlig avrunding en selvstendig feilkilde. Hvert kapittel har en **`warning`** om
  akkurat de avrundings-/faktor-/fortegnsfellene som lander på nabo-alternativet i
  temaet, og kap. 12.1 samler dette til en egen MC-strategi.

**Bevisst utelatt / avgrenset (begrunnes i Del 0):**
- **Elektromagnetisme** (felt, potensial, kondensatorer, kretser, magnetfelt,
  induksjon): **0 treff i hele arkivet** — aldri pensum i TFY4115, skal IKKE bygges
  inn. (Dette er den skarpe kontrasten til søsteremnet TFY4125.)
- **Bølger og interferens, geometrisk/bølgeoptikk (linser, Snell), fluidmekanikk
  (Bernoulli, oppdrift, viskositet), relativitet, atom-/kjernefysikk:** **0 treff** —
  aldri pensum, skal IKKE bygges inn. (Kvantefysikk opptrer KUN som støtte i
  termofysikken: energikvantisering ved «innfrysing» av frihetsgrader og Plancks
  strålingslov — ikke som eget tema.)
- **Termofysikk er KJERNEPENSUM, ikke historisk tillegg** (motsatt av TFY4125, der
  termo er faset ut). Halve boka er termofysikk, og den er like sentral som
  mekanikken. Ingen «historisk appendiks»-merking her.

**Forhold til søsterbøkene:** TFY4115 og **TFY4125** deler en nesten identisk
**mekanikk-kjerne** (2018-settet var faktisk et felles TFY4104/TFY4115-sett), men
TFY4115s andre halvdel er termofysikk der TFY4125s er elektromagnetisme. TFY4115
bygger på mekanikken i **Fysikk 2** (VGS) og forutsetter derivasjon/integrasjon fra
**R2**. Der forkunnskaper dekkes av eksisterende kapitler, lenkes de (mekanikk-
fundament i Fysikk 2 kap. 1–2, R2-regneteknikk). Termofysikkens elementære
forkunnskaper (gasslov, temperatur, mol) refereres i **klartekst** til Kjemi 1 /
Fysikk 1-nivå, uten lenke (disse bøkene er ikke verifisert bygget). Søsteremnene
**FYS1001 Innføring i fysikk** og **FYS1120 Elektromagnetisme** (UiO) refereres kun
i klartekst — FYS1120 dekker EM som TFY4115 IKKE har.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), IKKE frekvens; frekvensen
styrer *omfanget*. Todelingen mekanikk (Del 1–5) / termofysikk (Del 6–10) speiler
den faste eksamensstrukturen (spm. 1–20 / 21–40). «Må beherskes perfekt»-temaer får
teorikapitler + eget drillkapittel; «bør kjenne til» får ett kompakt kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og formelark | 1 | Prioriteringsverktøyet: MC-formen, todelingen, sjangerkatalogen M1–M13/T1–T14, formelark-strategien, kildeforbeholdet (2020). |
| 1 | Kinematikk og krum bane | 3 | Kinematikk fra $v(t)/\omega(t)$ **~80 %**, krumning/normalkraft **~60 %** → perfekt (kinematikk) → 2 teori + drill. |
| 2 | Kraft, energi og rulling | 3 | Skråplan m/friksjon **~100 %**, rullende legeme/energibevaring **~100 %** → perfekt → 2 teori + drill. 7/10-fella bor her. |
| 3 | Bevegelsesmengde, støt og baner | 3 | Støt/impuls **~100 %** (perfekt), gravitasjon/rakett/terminalfart **~20–40 %** (kunne, kompakt) → 2 teori + drill. |
| 4 | Rotasjon: treghetsmoment, dreieimpuls og statikk | 4 | Treghetsmoment/Steiner **~100 %**, dreieimpuls **~90 %** (perfekt), statikk **~70 %** (kunne) → 3 teori + drill. Tyngste mekanikk-kjernen. |
| 5 | Svingninger og pendler | 3 | Egenfrekvens/dempet/$Q$/resonans **~90 %**, fysisk/konisk pendel **~50 %** → perfekt → 2 teori + drill. |
| 6 | Gasslover, kinetisk teori og ekvipartisjon | 3 | Gasslov **~100 %**, ekvipartisjon/frihetsgrader→$C_V/C_P/\gamma$ **~90 %**, kinetisk teori **~80 %** → perfekt → 2 teori + drill. |
| 7 | Hovedsetningene, prosesser og entropi | 3 | 1./2. hovedsetning **~100 %**, adiabat **~90 %**, entropi **~100 %** → perfekt → 2 teori + drill. |
| 8 | Kretsprosesser, virkningsgrad og varmepumper | 3 | Kretsprosess+virkningsgrad **~100 %** (signatursjanger), varmepumpe/effektfaktor **~90 %** → perfekt → 2 teori + drill. |
| 9 | Varmetransport og stråling | 3 | Varmeledning i sjikt **~80 %**, varmestråling $\sigma T^4$/platebalanse **~70 %** (unik mot TFY4125) → perfekt → 2 teori + drill. |
| 10 | Faseoverganger og reelle gasser | 3 | van der Waals+kritisk punkt **~50 %**, fasediagram **~60 %**, Clausius–Clapeyron **~40 %**, termisk utvidelse **~30 %** → kunne → 2 teori + drill. |
| 11 | Numerisk iterasjon | 1 | Fikspunkt (Planck)/Euler **~40 %**, ofte siste spørsmål — **lever fremdeles** (motsatt TFY4125). Ett kompakt kapittel. |
| 12 | Eksamenstrening | 4 | MC-strategi/avrundingsdisiplin + 3 komplette 40-spørsmåls øvingseksamener (mekanikk 1–20, termofysikk 21–40). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og formelark |
| 1 | Kinematikk og krum bane |
| 2 | Kraft, energi og rulling |
| 3 | Bevegelsesmengde, støt og baner |
| 4 | Rotasjon: treghetsmoment, dreieimpuls og statikk |
| 5 | Svingninger og pendler |
| 6 | Gasslover, kinetisk teori og ekvipartisjon |
| 7 | Hovedsetningene, prosesser og entropi |
| 8 | Kretsprosesser, virkningsgrad og varmepumper |
| 9 | Varmetransport og stråling |
| 10 | Faseoverganger og reelle gasser |
| 11 | Numerisk iterasjon |
| 12 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Todeling som organiserende prinsipp.** Delene er gruppert i to blokker
   (mekanikk 1–5, termofysikk 6–10) som eksplisitt speiler eksamenens faste
   todeling (spm. 1–20 / 21–40). DNA-en ordner bare etter avhengighet; her legges
   todelingen oppå, fordi den er en så sterk, stabil struktur (2004→2020) at den er
   et selvstendig lesehjelpemiddel.
2. **Alle 10 drillkapitler ligger inne i temadelene sine** (1.3, 2.3, 3.3, 4.4,
   5.3, 6.3, 7.3, 8.3, 9.3, 10.3), ikke samlet i siste del, fordi sjangrene er
   temaspesifikke gjengangere som må drilles rett etter teorien — og i et MC-fag er
   sjangerdrillen selve produktet. Del 12 beholder den *tverrgående* MC-strategien
   og øvingseksamenene.
3. **Egen MC-strategi/avrundingsdisiplin-kapittel (12.1)** utover DNA-en, begrunnet
   i at tette svaralternativer gjør avrunding, faktor og fortegn til selvstendige,
   gjennomgående feilkilder som fortjener systematisk trening.
4. **Quizbanken er direkte eksamenstrening.** Fordi eksamen ER flervalg med tette
   distraktorer, bygges quizspørsmålene som numeriske MC-spørsmål med realistisk
   tette avledere (feil-alternativene er nettopp de vanlige regnefeilene: glemt
   rotasjonsledd, forbyttet $C_V/C_P$, feil $\gamma$, feil fortegn, glemt $T^4$).
   Quiz-kvoten er derfor bevisst satt **høyt** (710, se §4).
5. **Numerisk iterasjon beholdt som eget kapittel (Del 11).** Motsatt av TFY4125,
   der numerikk er faset ut, lever fikspunkt-/Euler-iterasjon fremdeles i TFY4115
   (siste spørsmål 2019–2020) → eget kompakt kapittel + prøve.
6. **Ingen historisk appendiks.** Termofysikk er kjernepensum (halve settet), ikke
   utfaset stoff — hele Del 6–10 behandles på lik linje med mekanikken.

**Eksamensstrukturen (fast — gjentas i Del 0 og styrer øvingseksamenene):**
ca. 40 spørsmål A–F, alle teller likt (1 poeng), kun bokstavsvaret teller, ingen
minuspoeng. **Spm. 1–20:** mekanikk. **Spm. 21–40:** termisk fysikk. Ofte et
numerisk iterasjonsspørsmål til slutt. Nesten hvert sett dekker hele bredden i
begge halvdeler. (Eldre form: 50 spm. A–E med mekanikk 1–25 / termo 26–50, 2013 og
2017–2018; hybrid 2009–2016; ren utledning 2004–2008 — samme fysikk, ulik innpakning.)

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerkodene refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**Mekanikk** — M1 skråplan m/friksjon, M2 arbeid/energi/effekt, M3 rullende legeme/
energibevaring, M4 treghetsmoment/Steiner, M5 dreieimpuls/rulling, M6
bevegelsesmengde/støt, M7 svingninger, M8 pendler, M9 statikk, M10 kinematikk fra
$v(t)/\omega(t)$, M11 krumning/normalkraft, M12 gravitasjon/bane/rakett, M13
presesjon. **Termofysikk** — T1 gasslov/molekyltall, T2 kinetisk teori/$v_\text{rms}$,
T3 ekvipartisjon/frihetsgrader, T4 adiabat, T5 kretsprosess/virkningsgrad, T6
varmepumpe/effektfaktor, T7 entropi, T8 hovedsetningene som fortegnsanalyse, T9
varmeledning, T10 varmestråling, T11 van der Waals/faseovergang, T12
Clausius–Clapeyron, T13 termisk utvidelse, T14 numerisk iterasjon. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Eksamensvinkel-`tip`,
Forkunnskaper-blokk med kryssbok-lenker og `collapsible` **Symbol- og formelliste**
rett etter (per delkapittel — ALLE symboler og formler forklares, aldri arv fra
tidligere kapittel — med markering av hva som står på formelarket, og hvilken
betydning kolliderende symboler ($\gamma$, $p$, $T$, $R$, $S$) har akkurat der).
Hvert kapittel har både **symbolsk utledning** og en tydelig merket **«Rask vei til
tall» (MC-oppskrift)**, samt en **avrundings-/faktorfelle-`warning`**.

---

### Del 0 — Eksamenskart og formelark

#### Kapittel 0.1: Eksamenskartet: slik testes TFY4115

- **id:** `tfy4115-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (ren flervalg, ~40 spm., fast todeling mekanikk/termofysikk), temafrekvensene, sensorens metaregler, formelark-strategien og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2004–2020. Skal gjengi: (i) **formen:** 4 timers skriftlig skoleeksamen, hjelpemiddelkode C (bestemt kalkulator + Rottmann + **utdelt fysikk-formelark**), karakter A–F; **ren flervalg med ca. 40 spørsmål A–F** (2019–2020; 50 spm. A–E i 2013/2017/2018), alle teller likt, **1 poeng riktig / 0 feil eller blankt** (ingen minuspoeng, ingen delpoeng). (ii) **Den faste todelingen:** spm. **1–20 mekanikk**, spm. **21–40 termisk fysikk**. (iii) **Temafrekvens-tabellen** (fra analysen §2): mekanikk-kjernen (Newton/friksjon, energi, rulling, treghetsmoment/Steiner, dreieimpuls, støt) alle **~90–100 %**; svingninger **~90 %**; kinematikk fra $v(t)$ **~80 %**; statikk **~70 %**; krumning/normalkraft **~60 %**; fysisk/konisk pendel **~50 %**; gravitasjon/terminalfart/rulling-overgang **~40 %**; effekt/rakett/presesjon **~20–30 %**. Termofysikk-kjernen (gasslov, kretsprosess+virkningsgrad, entropi, hovedsetninger) alle **~100 %**; ekvipartisjon/frihetsgrader, varmepumpe/effektfaktor, adiabat **~90 %**; kinetisk teori/$v_\text{rms}$, varmeledning **~80 %**; varmestråling **~70 %**; fasediagram **~60 %**; van der Waals **~50 %**; Clausius–Clapeyron, kvante-innfrysing, numerisk iterasjon **~40 %**; termisk utvidelse, strømmende medium **~30 %**; Wien, konveksjon sporadisk. (iv) **Utviklingen (tabell fra §1):** ren utledning (2004–2008) → hybrid flervalg+åpne (2009–2016) → rent flervalg (2017→); mekanikk+termofysikk stabil hele veien; **EM aldri i pensum (0 treff)**. (v) **Bevisst avgrenset med begrunnelse:** EM, bølger, optikk, fluid, relativitet, kjernefysikk (0 treff, aldri pensum — ikke sløs tid). (vi) **Sensorens metaregler i MC-æraen:** kun endelig bokstavsvar teller; alle spm. likt; **svaralternativene ligger tett** og er konstruert rundt typiske feil → avrunding/faktor/fortegn avgjør; løsningsforslaget = avgjørende lov + få regnelinjer. (vii) **Formelark-strategien:** hva som må kunne *brukes/utledes* (kjerneverktøyene) vs. *hentes* (konstanter, treghetsmomenter, van der Waals-/Clausius–Clapeyron-/entropiformene). (viii) **KILDEFORBEHOLD — ærlighet:** arkivet stopper 2020; nyeste dokumenterte form er 40 MC A–F med mekanikk+termofysikk; emnebeskrivelsen (2026) bekrefter fremdeles begge halvdeler; boka bygger på 2004–2020 og bør suppleres med nyere sett når de blir tilgjengelige.
- **Innholdskontrakt:** Oppgavetype-katalogen M1–M13/T1–T14 presenteres som studentens sjekkliste med frekvens per sjanger og hvilken halvdel (1–20 mekanikk vs. 21–40 termo) den hører til. **Måling/usikkerhet (kjenne):** en kort del om middelverdi $\langle x\rangle$, empirisk standardavvik ($N-1$), standardfeil $\delta x/\sqrt{N}$ og gjeldende siffer — sporadisk i TFY4115 (ikke fast åpner som i TFY4125), men greie gratispoeng når det dukker opp; henvises videre til gjeldende siffer-disiplinen i kap. 12.1. **Leseplan:** mekanikk-kjernen (Del 1–2, 4–5) og termofysikk-kjernen (Del 6–9) er «perfekt»-stoffet og bærer 60–70 % av settet; Del 3 og 10 (kunne) sikrer øvre karakter; Del 11 (numerikk) er ett siste sikringspoeng. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for 40 MC-spørsmål — hvor mange minutter per spørsmål, når hopper du videre, og hvorfor er kretsprosess-klyngen (spm. 21–40) verdt å planlegge for?».
- **Typiske feil:** Metafeilene: lese elektromagnetisme/bølger/optikk som om det er pensum (det er det ikke — 0 treff); nedprioritere termofysikk (den er HALVE settet, ikke tillegg); tro at delpoeng finnes (gjør ikke — bare bokstavsvaret); avrunde for tidlig og lande på nabo-alternativet; bruke tid på symbolsk eleganse når bare tallet teller.
- **Quiz: 16 · Flashcards: 18** (form, todeling, frekvenser mekanikk+termo, metaregler, sjangerkatalog M1–M13/T1–T14, formelark, hva som er avgrenset, kildeforbeholdet)

---

### Del 1 — Kinematikk og krum bane *(kinematikk: PERFEKT · krumning: KUNNE)*

#### Kapittel 1.1: Kinematikk fra fartsfunksjon — derivér, integrér, tell runder

- **id:** `tfy4115-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Fra en gitt $v(t)$ eller $\omega(t)$: maks-akselerasjon (ofte i $t=0$), strekning/vinkel ved integrasjon, og antall hele omdreininger.
- **Eksamensbelegg:** Sjanger M10 i **~80 %** av settene. Signatur: eksponentiell fartsmodell $v=v_0(1-e^{-t/\tau})$ eller $v=v_0 e^{-t/\tau}$; deriver for akselerasjon (maks ofte i $t=0$), integrer for strekning/vinkel, tell hele runder. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Repetisjon av derivasjon](/r2/r2-2-1) og [Bestemt integral som grenseverdi](/r2/r2-2-4) (derivér/integrér fartsfunksjonen); [Variabelskifte (substitusjon)](/r2/r2-3-1) (integraler med eksponentialledd); [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2) (fysikk 2-fundament for $a=dv/dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $a(t)=\frac{dv}{dt}$, $\alpha(t)=\frac{d\omega}{dt}$; **maks-akselerasjon** ved å derivere og sette $a'(t)=0$ (for eksponentielle modeller ligger maks nesten alltid i $t=0$ — vis hvorfor); strekning $s=\int_0^{t} v\,dt$, vinkel $\varphi=\int_0^{t}\omega\,dt$; **antall hele omdreininger $=\lfloor\varphi/2\pi\rfloor$** (heltallsdelen); snupunkt der $v=0$. **Rask vei til tall (MC-oppskrift):** 1) sett inn $t=0$ i $a(t)$ for maks (sjekk fortegn/form); 2) sett $t\to\infty$ eller oppgitt $t$ i integralet for total vinkel; 3) del på $2\pi$, ta heltallsdelen. **Utledning som kreves aktivt:** derivere og integrere den oppgitte modellen; begrunne hvorfor maks er i $t=0$. **Figurkrav:** skisse av $v(t)/\omega(t)$ og $a(t)$ over samme tidsakse.
- **Oppgavesjangre:** M10. Mønstereksempel: «Vinkelfarten til et hjul er $\omega(t)=\omega_0\left(\frac{t}{\tau}\right)^2 e^{-t/5\tau}$. Finn (a) vinkelakselerasjonen ved $t=0$, (b) maksimal vinkelfart, og (c) antall hele omdreininger hjulet gjør før det stopper.»
- **Typiske feil (analysen §5):** Bruke konstant-akselerasjon-formler ($v=v_0+at$) når $a$ ikke er konstant; lete etter maks-akselerasjon ved feil $t$; glemme å ta *heltallsdelen* av $\varphi/2\pi$ (oppgi desimaltallet); avrunde $\varphi$ for tidlig så heltallsdelen tipper.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 1.2: Krumning og normalkraft — $1/\rho=|y''|$ i topp- og bunnpunkt

- **id:** `tfy4115-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-1-1`
- **kapitteltype:** teori
- **description:** Krumningsradiusen $\rho=1/|y''|$ i et topp-/bunnpunkt og normalkraften den gir, pluss banevinkelen $\tan\beta=dy/dx$.
- **Eksamensbelegg:** Krumning + normalkraft (M11) i **~60 %**. Signatur: gitt en bane $y(x)$, finn normalkraften $N$ i et topp-/bunnpunkt via krumningsradius og sentripetalakselerasjon. Prioritet: **kunne** (men høyfrekvent nok til å prioriteres).
- **Forkunnskaper/kryssbok:** kap. 1.1; [Repetisjon av derivasjon](/r2/r2-2-1) ($dy/dx$, $y''$); [Sirkelbevegelse og sentripetalkraft](/fysikk2/fysikk2-1-4) (fysikk 2-fundament for $v^2/\rho$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: banevinkel $\tan\beta = \frac{dy}{dx}$ i et gitt punkt; **krumningsradius** $\rho=\frac{(1+y'^2)^{3/2}}{|y''|}$, som i et topp-/bunnpunkt ($y'=0$) forenkles til $\rho=1/|y''|$; normalkraft i **toppunkt**: $mg-N=\frac{mv^2}{\rho}\Rightarrow N=m\left(g-\frac{v^2}{\rho}\right)$; i **bunnpunkt**: $N-mg=\frac{mv^2}{\rho}\Rightarrow N=m\left(g+\frac{v^2}{\rho}\right)$; kombinér med energibevaring for farten. **Rask vei til tall (MC-oppskrift):** 1) $y''$ i topp-/bunnpunkt → $\rho=1/|y''|$; 2) finn $v$ (energibevaring); 3) sett inn i $N=m(g\mp v^2/\rho)$ med riktig fortegn. **Utledning som kreves aktivt:** normalkraftlikningen fra sentripetalakselerasjon. **Figurkrav:** bane med tangent (banevinkel $\beta$) og krumningssirkel i toppunktet.
- **Oppgavesjangre:** M11. Mønstereksempel: «En kule ruller over toppen av en glatt bakke med profil $y(x)=h-ax^2$. Finn normalkraften i toppunktet når farten der er $v$, og avgjør ved hvilken fart kula mister kontakten med underlaget.»
- **Typiske feil:** Bruke full krumningsformel der $y'=0$ forenkler (unødig regnefeil); fortegnsfeil (glemme at $N<mg$ i toppunkt, $N>mg$ i bunnpunkt); regne med konstant akselerasjon på krum bane i stedet for energibevaring.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Drill: kinematikk-kjeden (sjanger M10–M11, MC-tempo)

- **id:** `tfy4115-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4115-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill i MC-tempo: fra gitt $v(t)/\omega(t)$ til tallsvaret på maks-akselerasjon, strekning/vinkel, rundetelling — og normalkraft via krumning.
- **Eksamensbelegg:** Sjanger M10 (80 %) + M11 (60 %) samlet. Varianter: eksponentiell fartsmodell, potens$\times$eksponential vinkelfart, «finn $a(0)$, $\omega_\text{maks}$ og antall runder», normalkraft i topp-/bunnpunkt. Prioritet: **perfekt** (M10).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) spørres det om akselerasjon (derivér), strekning/vinkel (integrér), retning (banevinkel) eller normalkraft (krumning)?; 2) maks-akselerasjon: derivér, prøv $t=0$ først; 3) total vinkel: integrér til $t\to\infty$ eller oppgitt $t$; 4) **rundetelling: $\lfloor\varphi/2\pi\rfloor$**; 5) normalkraft: $\rho=1/|y''|$, $N=m(g\mp v^2/\rho)$. Gjennomregnet MC-case med margnotat om **hvor avrundingsfellen ligger** (heltallsdel tipper ved for få siffer). 12–15 oppgaver på eksamensnivå som roterer sjangeren, alle med rent tallsvar (A–F-format der det passer).
- **Oppgavesjangre:** M10, M11. Mønstereksempel: «En turbin bremses slik at $\omega(t)=\omega_0 e^{-t/\tau}$. (a) Finn vinkelakselerasjonen ved $t=0$. (b) Finn totalt antall omdreininger til den stopper. (c) Hvor mange hele omdreininger er gjort etter $t=2\tau$?»
- **Typiske feil:** Hele M10–M11-repertoaret: konstant-$a$-feilen, feil $t$ for maks, desimaltall i stedet for heltall i rundetelling, fortegn på normalkraft, for tidlig avrunding.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A kinematikk fra $v(t)$: maks-$a$ + strekning · 1.B vinkelfart + rundetelling $\lfloor\varphi/2\pi\rfloor$ · 1.C krumning/normalkraft topp-/bunnpunkt · 1.D MC-format: 8–10 tette flervalgsspørsmål på kinematikk-kjeden)

---

### Del 2 — Kraft, energi og rulling *(prioritet: PERFEKT)*

#### Kapittel 2.1: Newtons 2. lov på skråplan med friksjon

- **id:** `tfy4115-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-1-1`
- **kapitteltype:** teori
- **description:** Frilegemediagram på skråplan, dekomponering av tyngden, kinetisk friksjon mot bevegelsen, og standardsvaret $a=g(\sin\theta\pm\mu\cos\theta)$.
- **Eksamensbelegg:** Sjanger M1 i **~100 %** av settene. Signatur: kloss/legeme på skråplan opp eller ned med kinetisk friksjon; finn akselerasjon eller snuavstand. NB: en ytre kraft med vertikal komponent endrer normalkraften ($f=\mu(mg-F\sin\theta)$). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Vektorer og komponenter](/fysikk2/fysikk2-1-1) (dekomponering).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dekomponér tyngden langs/normalt på planet ($mg\sin\theta$, $mg\cos\theta$); normalkraft $N=mg\cos\theta$ (endres av ytre vertikalkraft); kinetisk friksjon $f=\mu N$ **rettet mot bevegelsen**; N2 langs planet gir $a=g(\sin\theta\pm\mu\cos\theta)$ (**minus** når friksjon bremser i bevegelsesretning oppover, fortegn vis eksplisitt); snuavstand oppover $x=\frac{v_0^2}{2a}$; glidebetingelse $\tan\theta>\mu_s$; statisk friksjon $f\le\mu_s N$. **Rask vei til tall (MC-oppskrift):** 1) tegn retning, velg fortegn på friksjonsleddet; 2) $a=g(\sin\theta\pm\mu\cos\theta)$ direkte; 3) snuavstand $v_0^2/2a$. Merk at $m$ ofte forsvinner. **Utledning som kreves aktivt:** hele N2-oppsettet fra frilegemediagram, inkl. redusert $N$ ved ytre kraft. **Figurkrav:** frilegemediagram med $mg$, $N$, $f$ og dekomponert tyngde.
- **Oppgavesjangre:** M1. Mønstereksempel: «En kloss sendes oppover et skråplan med helning $\theta$ og startfart $v_0$. Friksjonskoeffisienten er $\mu$. Finn akselerasjonen mens klossen går oppover og hvor langt opp den når før den snur.»
- **Typiske feil (analysen §5):** Feil fortegn på friksjonsleddet (retning ift. bevegelse); bruke $\sin$ der $\cos$ skal stå (og omvendt); **sette $N=mg$ når en ytre kraft har vertikal komponent** (N endres → friksjon endres); glemme at friksjon skifter fortegn når legemet snur; ta med masse i svaret der den faller ut.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 2.2: Arbeid, energibevaring og rullende legeme ($K=\tfrac{7}{10}mv^2$)

- **id:** `tfy4115-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-2-1`
- **kapitteltype:** teori
- **description:** Energibevaring for et legeme som ruller uten å gli — med rotasjonsenergien inkludert — pluss arbeid, effekt og terminalfart som kompakt tilleggsstoff.
- **Eksamensbelegg:** Sjanger M3 (rullende legeme/energibevaring) i **~100 %**; arbeid–energi (M2) **~100 %**; effekt $P=Fv$ **~30 %**, terminalfart **~40 %** (kunne, foldes inn). **Å glemme rotasjonsleddet (bruke $\tfrac12 mv^2$) er den hyppigst innebygde fella i mekanikkdelen.** Prioritet: **perfekt** (M2, M3); **kunne** (effekt, terminalfart).
- **Forkunnskaper/kryssbok:** kap. 2.1; [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2). (Treghetsmoment $I=\tfrac25 mR^2$ innføres fullt i kap. 4.1; her brukes resultatet — det er oppgitt/på formelarket.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kinetisk energi for rulling $K=\tfrac12 mv^2+\tfrac12 I\omega^2$ med rullebetingelsen $v=\omega R$; **kompakt kule** $I=\tfrac25 mR^2\Rightarrow K=\tfrac{7}{10}mv^2$; **massiv sylinder** $I=\tfrac12 mR^2\Rightarrow K=\tfrac34 mv^2$; **kuleskall** $I=\tfrac23 mR^2\Rightarrow K=\tfrac56 mv^2$; energibevaring $mg\,\Delta y=\tfrac12(1+c)mv^2$ (ren rulling, ingen slipping; $c=I/mR^2$); fart i vilkårlig punkt via høydeforskjell; snupunkt = samme høyde som start; arbeid $W=\int F\,ds$ = areal under $F(x)$; arbeid–energisetningen $W_\text{tot}=\Delta K$; **effekt** $P=Fv$ (ofte kombinert med luftmotstand $P=bv^3$); **terminalfart** ($\tfrac12\rho A C_d v_t^2=mg\Rightarrow v_t=\sqrt{2mg/\rho A C_d}$, $v_t\propto\sqrt{d}$). **Rask vei til tall (MC-oppskrift):** for rullende legeme — bruk $v=\sqrt{\frac{2g\,\Delta y}{1+c}}$; sjekk om legemet er kule ($c=2/5$), sylinder ($c=1/2$), skall ($c=2/3$) eller punktmasse ($c=0$). **Utledning som kreves aktivt:** utled $\tfrac{7}{10}$-leddet fra $I=\tfrac25 mR^2$ og $v=\omega R$. **Figurkrav:** høydeprofil med start-/sluttpunkt og energiregnskap.
- **Oppgavesjangre:** M3 (+ effekt, terminalfart). Mønstereksempel: «En kompakt kule slippes fra ro og ruller uten å gli ned en bakke med høydeforskjell $h$. Finn farten i bunnen, og ranger sluttfarten mot en massiv sylinder og en punktmasse som starter fra samme høyde.»
- **Typiske feil (analysen §5.1):** **Glemme rotasjonsenergien** (bruke $\tfrac12 mv^2$ → for høy fart) — hovedfella; bruke feil treghetsmoment (kule vs. sylinder vs. skall); bruke kinematikk med konstant $a$ på krum bane i stedet for energibevaring; feil i $v=\omega R$-koblingen.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Drill: skråplan og energibevaring (sjanger M1, M3)

- **id:** `tfy4115-2-3` · **number:** 2.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4115-2-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill der avgjørelsen «kinematikk eller energibevaring?» og «med eller uten rotasjonsledd?» tas raskt og riktig — mot tallsvar.
- **Eksamensbelegg:** Sjanger M1+M3 samlet (~100 %). Varianter: kloss på skråplan opp/ned m/friksjon, kule/sylinder som ruller ned/opp, kombinert skråplan+bue, snuavstand og snupunkt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) konstant kraft (rett skråplan) → N2 og kinematikk; krum/høydebasert → energibevaring; 2) ruller legemet? → ta med rotasjonsledd ($1+c$); 3) friksjon? → fortegn mot bevegelse; 4) sett opp den ene avgjørende likningen; 5) løs for tallsvaret. Gjennomregnet MC-case med margnotat om **rotasjonsledd-fella** og fortegnsfella. 12–15 oppgaver på eksamensnivå, minst tre med rulling (kule/sylinder/skall) og tre med friksjon.
- **Oppgavesjangre:** M1, M3. Mønstereksempel: «En kule ruller uten å gli oppover et skråplan med startfart $v_0$. (a) Hvor høyt når den (energibevaring)? (b) En kloss uten rotasjon sendes opp samme plan med friksjon $\mu$ og samme $v_0$ — hvor langt når den? (c) Hvilken går lengst, og hvorfor?»
- **Typiske feil:** Hele M1/M3-repertoaret samlet: glemt rotasjonsledd, feil friksjonsfortegn, kinematikk på krum bane, feil treghetsmoment.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A skråplan m/friksjon: akselerasjon + snuavstand · 2.B rullende kule/sylinder energibevaring · 2.C kombinert kraft/energi + effekt/terminalfart · 2.D MC-format: tette flervalgsspørsmål med rotasjonsledd-fella innebygd)

---

### Del 3 — Bevegelsesmengde, støt og baner *(støt: PERFEKT · baner: KUNNE)*

#### Kapittel 3.1: Bevegelsesmengde, impuls og støt

- **id:** `tfy4115-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-2-2`
- **kapitteltype:** teori
- **description:** Impulsbevarelse, elastisk og fullstendig uelastisk støt med energitap, og impuls fra en tidsavhengig kraft $\int F\,dt$.
- **Eksamensbelegg:** Sjanger M6 i **~100 %**. Signatur: to legemer i støt (elastisk → fartsformel; uelastisk → felles fart + energitap $\Delta K$); impuls som areal under $F(t)$ (trekantpuls). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) ($\int F\,dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bevegelsesmengde $\mathbf{p}=m\mathbf{v}$ (vektor — merk kollisjon med trykk $p$ i termodelen); **impulsbevarelse** $\sum m\mathbf{v}=\sum m\mathbf{v}'$; elastisk støt (mot legeme i ro) $v_1' = \frac{m-M}{m+M}v_0$, $v_2'=\frac{2m}{M+m}v_0$; **fullstendig uelastisk** → felles fart $v'=\frac{m v_0}{m+M}$ med energitap $\Delta K=\tfrac12\frac{mM}{m+M}v_0^2$ (andel $\frac{M}{m+M}$ av $K_0$); impuls $\mathbf{J}=\Delta\mathbf{p}=\int\mathbf{F}\,dt$ (areal under $F(t)$; trekantpuls $a_\text{maks}=F_\text{maks}/m$). **Rask vei til tall (MC-oppskrift):** identifiser støttype (elastisk = energi bevart; uelastisk = felles fart), bruk ferdig fartsformel, regn energitap som differanse $K_0-K'$. **Utledning som kreves aktivt:** utled uelastisk energitap fra impuls- + energiregnskap. **Figurkrav:** før-/etter-skisse med fartspiler; $F(t)$-graf med areal.
- **Oppgavesjangre:** M6. Mønstereksempel: «En kule med masse $m$ og fart $v_0$ treffer en stillestående kloss med masse $M$ og blir sittende fast. Finn felles fart etter støtet og hvor stor andel av den kinetiske energien som går tapt.»
- **Typiske feil (analysen §5):** Bruke energibevaring i uelastisk støt (energi er IKKE bevart der); fortegnsfeil på fart i impulsbevarelse; regne energitap som andel feil vei; feil grenser/areal i $\int F\,dt$.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.2: Gravitasjon, satellittbaner og rakettligning

- **id:** `tfy4115-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4115-3-1`
- **kapitteltype:** teori
- **description:** Sirkelbane under gravitasjon ($GMm/r^2=m\omega^2 r$), geostasjonær bane og rakettligningen fra impulsbevarelse — kompakt beredskap.
- **Eksamensbelegg:** Sjanger M12: satellittbane **~40 %**, rakett **~20 %**. Prioritet: **kunne** (kompakt, men sikrer poeng når det dukker opp).
- **Forkunnskaper/kryssbok:** kap. 3.1; [Newtons gravitasjonslov](/fysikk2/fysikk2-2-1), [Gravitasjonsfelt](/fysikk2/fysikk2-2-2) og [Gravitasjonell potensiell energi](/fysikk2/fysikk2-2-3) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: sirkelbane $\frac{GMm}{r^2}=\frac{mv^2}{r}=m\omega^2 r$, kombinert med $v=\frac{2\pi r}{T}$; **geostasjonær bane** (finn $r$ av $T=24$ t): $r=\left(\frac{GMT^2}{4\pi^2}\right)^{1/3}$; rakettligning fra impulsbevarelse med utstøtsfart $u$: $m = m_0 e^{-\Delta v/u}$, skyvekraft $F=u|dm/dt|$. **Rask vei til tall (MC-oppskrift):** for bane — sett gravitasjon = sentripetalkraft, løs for etterspurt størrelse; hold enheter (timer vs. sekunder) rene. **Utledning som kreves aktivt:** utled baneperiode/radius fra kraftbalansen; utled rakettligningen fra $\sum p$ bevart. **Figurkrav:** bane med kraftvektorer; raketten med utstøtt masse.
- **Oppgavesjangre:** M12. Mønstereksempel: «En satellitt går i sirkelbane rundt jorda med omløpstid $T$. Finn baneradien, og avgjør om banen er høyere eller lavere enn geostasjonær høyde.»
- **Typiske feil:** Blande $v$ og $\omega$ i sentripetalleddet; glemme $v=2\pi r/T$-koblingen; enhetsslurv (timer vs. sekunder for $T$); feil retning på utstøtsfart i rakettligningen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.3: Drill: støt, impuls og baner (sjanger M6, M12)

- **id:** `tfy4115-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4115-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: velg riktig bevaringslov (impuls og/eller energi) og kom raskt til tallsvaret for støt, impuls og baner.
- **Eksamensbelegg:** Sjanger M6 (~100 %) + M12 (~40 %) samlet. Varianter: elastisk/uelastisk støt, ballistisk pendel, impuls fra $F(t)$-graf, satellittbane, rakett. Prioritet: **perfekt** (støt) / **kunne** (baner).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) støt → impuls alltid bevart; energi bevart KUN hvis elastisk; 2) uelastisk → felles fart, regn energitap som differanse; 3) impuls fra kraft → areal under $F(t)$; 4) bane → gravitasjon = sentripetalkraft. Gjennomregnet MC-case med margnotat om energibevarings-fella (uelastisk) og enhetsfella (bane). 12–15 oppgaver på eksamensnivå, minst fire støt og to bane.
- **Oppgavesjangre:** M6, M12. Mønstereksempel: «En kule ($m$, $v_0$) skytes inn i en kloss ($M$) som henger i en snor og blir sittende fast (ballistisk pendel). (a) Finn felles fart rett etter støtet. (b) Hvor høyt svinger klossen? (c) Hvor stor andel av kulas energi ble borte i støtet?»
- **Typiske feil:** Energibevaring i uelastisk fase; fortegn i impuls; enhetsslurv i bane; feil bevaringslov i hvert steg av ballistisk pendel (uelastisk støt, så energibevaring i svinget).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A elastisk/uelastisk støt + energitap · 3.B impuls fra $F(t)$ + ballistisk pendel · 3.C satellittbane + rakett · 3.D MC-format: tette flervalgsspørsmål støt/impuls/bane)

---

### Del 4 — Rotasjon: treghetsmoment, dreieimpuls og statikk *(rotasjon: PERFEKT · statikk: KUNNE)*

#### Kapittel 4.1: Massesenter, treghetsmoment og Steiners sats

- **id:** `tfy4115-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-2-2`
- **kapitteltype:** teori
- **description:** Massesenter for punktmasser og legemer, treghetsmoment ved $\int r^2\,dm$ og $\sum m_i r_i^2$, og Steiners sats for akse utenfor massesenteret.
- **Eksamensbelegg:** Sjanger M4 i **~100 %**. Signatur: massesenter av punktmasser (trekant/kvadrat), treghetsmoment av stang med $\lambda(x)$, kuleskall eller plate, Steiner for akse utenfor CM (stang om endepunkt, kule om kontaktpunkt, fysisk pendel). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) ($\int r^2\,dm$); [Vektorkoordinater og regning](/r2/r2-5-2) (massesenter-komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: massesenter $x_\text{CM}=\frac{\sum m_i x_i}{\sum m_i}$ (og komponentvis $y_\text{CM}$); treghetsmoment for punktmasser $I=\sum m_i r_i^2$ (**perpendikulær** avstand til aksen!); kontinuerlig $I=\int r^2\,dm$ med $dm=\lambda\,dx$ (stang), $\sigma\,dA$ (plate), $\rho\,dV$; standardresultater (utledes/gjenkjennes): stang om senter $\tfrac{1}{12}ML^2$, om endepunkt $\tfrac13 ML^2$, kompakt kule $\tfrac25 MR^2$, kuleskall $\tfrac23 MR^2$, sylinder $\tfrac12 MR^2$, tynn plate; **Steiners sats** $I=I_\text{CM}+Md^2$ (akse parallell, avstand $d$ fra CM). **Rask vei til tall (MC-oppskrift):** 1) punktmasser → $\sum m_i r_i^2$ med riktig vinkelrett avstand; 2) legeme om akse utenfor CM → slå opp $I_\text{CM}$ (formelark), legg til $Md^2$. **Utledning som kreves aktivt:** $\int r^2\,dm$ for stang med gitt $\lambda(x)$; anvendelse av Steiner. **Figurkrav:** legeme med akse, CM-avstand $d$ og perpendikulære avstander for punktmasser.
- **Oppgavesjangre:** M4. Mønstereksempel: «Tre punktmasser $m$ sitter i hjørnene av en likesidet trekant med side $a$. Finn treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet.»
- **Typiske feil (analysen §5.4, §5.7):** **Glemme Steiner-leddet** når aksen ikke går gjennom CM; bruke avstand langs aksen i stedet for perpendikulær avstand i $\sum m_i r_i^2$; feil integrasjonsgrenser i $\int r^2\,dm$; bruke feil standard-$I$ (kule vs. skall vs. sylinder).
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 4.2: Dreieimpuls, rulling, presesjon og fallende stang

- **id:** `tfy4115-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `tfy4115-4-1`
- **kapitteltype:** teori
- **description:** Total dreieimpuls som spinn + bane med korrekte fortegn, N2 for rotasjon, overgang gliding→ren rulling, den fallende stanga og presesjon som kompakt tillegg.
- **Eksamensbelegg:** Sjanger M5 (dreieimpuls) i **~90 %**, gliding→rulling i **~40 %**, fallende stang (energibevaring + spinnsats) gjenganger i utledningssettene, presesjon (M13) **~20 %**. **Fortegn/retning på spinn- og banedreieimpuls er et yndet flervalgspoeng.** Prioritet: **perfekt** (dreieimpuls) / **kunne** (gliding→rulling) / **kjenne** (presesjon).
- **Forkunnskaper/kryssbok:** kap. 4.1; [Vektorer i tre dimensjoner](/r2/r2-5-1) (kryssprodukt/høyrehåndsregel).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dreieimpuls $\mathbf{L}=I\boldsymbol{\omega}$ (spinn) og $\mathbf{L}_\text{bane}=\mathbf{R}_\text{CM}\times m\mathbf{V}$ (bane); **total $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$ med korrekt fortegn** (høyrehåndsregel — spinn og bane peker ikke alltid samme vei); N2 for rotasjon $\tau=I\alpha$, $\tau=\mathbf{r}\times\mathbf{F}$; spinnsats $\tau=\frac{d\mathbf{L}}{dt}$; bevaring av $\mathbf{L}$ når $\tau_\text{ytre}=0$ (aksekors der lodd trekkes inn: $I\omega=\text{konst}$); **gliding→ren rulling:** N2 translasjon ($ma=-\mu mg$) + N2 rotasjon ($I\alpha=\mu mgR$), sett $v=R\omega$ ved ren rulling (kule: sluttfart $V=\tfrac57 V_0$); **fallende stang** om endepunkt: energibevaring $\omega=\sqrt{3g/L}$ i vannrett stilling, spinnsats $\alpha=\frac{3g}{2L}\cos\phi$; **presesjon** (kjenne): $\Omega=\frac{\tau}{L}=\frac{Mgr}{I_0\omega}$. **Rask vei til tall (MC-oppskrift):** 1) sett opp spinn- og banebidrag med fortegn; 2) gliding→rulling: løs $v(t)=R\omega(t)$ for felles tid/fart; 3) fallende stang: energibevaring for $\omega$, spinnsats for $\alpha$ — **ikke** konstant-$\alpha$-formler. **Utledning som kreves aktivt:** overgang gliding→rulling fra de to N2-likningene; $\omega$ for fallende stang fra energibevaring. **Figurkrav:** legeme med $\boldsymbol{\omega}$, $\mathbf{V}$, $\mathbf{L}_\text{spinn}$, $\mathbf{L}_\text{bane}$ inntegnet med retning.
- **Oppgavesjangre:** M5, M13. Mønstereksempel: «En kule kastes med senterfart $V$ og spinn $\omega$ (motsatt rulleretning) på et horisontalt underlag. Angi retningen på spinn- og banedreieimpulsen om et punkt på bakken, og finn den totale dreieimpulsen.»
- **Typiske feil (analysen §5.2, §5.3):** **Feil fortegn/retning** på spinn vs. bane; glemme banebidraget $\mathbf{R}\times m\mathbf{V}$; feil $I$ i spinnleddet; sette $v=R\omega$ før ren rulling er nådd; **dobbelttelle kinetisk energi** i ren rotasjon (legge $\tfrac12 mv^2$ til $\tfrac12 I\omega^2$ — eksplisitt flagget for fallende stang); bruke konstant-$\alpha$-formel når $\alpha$ varierer.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Statikk og momentbalanse

- **id:** `tfy4115-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-4-1`
- **kapitteltype:** teori
- **description:** Likevekt for stive legemer: $\sum\mathbf{F}=0$ og $\sum\tau=0$ om et klokt valgt punkt — bjelke, stupebrett, plate mot vegg, talje.
- **Eksamensbelegg:** Sjanger M9 i **~70 %**. Signatur: bjelke i hengsel med taustrekk, stupebrett forankret i pillarer, plate holdt mot vegg av snor + friksjon, talje/trinsesystem ($F=\tfrac12 Mg$). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 4.1; [Vektorer og komponenter](/fysikk2/fysikk2-1-1) (kraftkomponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: likevektsbetingelsene $\sum F_x=0$, $\sum F_y=0$, $\sum\tau=0$; **valg av momentpunkt** slik at en ukjent kraft faller ut (legg punktet der en ukjent virker); moment $\tau=Fd$ (kraft $\times$ momentarm) eller $\tau=rF\sin\phi$; strekk i snor/stag, hengselkrefter; talje/trinse reduserer nødvendig kraft med antall bærende tau. **Rask vei til tall (MC-oppskrift):** 1) frilegemediagram med alle krefter; 2) velg momentpunkt der flest ukjente forsvinner; 3) $\sum\tau=0$ gir én ukjent direkte; 4) $\sum F=0$ for resten. **Utledning som kreves aktivt:** oppsett av momentlikningen om valgt punkt. **Figurkrav:** frilegemediagram med kraftvektorer og momentarmer.
- **Oppgavesjangre:** M9. Mønstereksempel: «En homogen bjelke med masse $M$ og lengde $L$ er festet i en vegg med et hengsel og holdes vannrett av en snor som går fra bjelkens ytterende opp til veggen i vinkel $\phi$. Finn strekket i snora og kreftene i hengselet.»
- **Typiske feil:** Feil momentarm (ikke perpendikulær avstand); glemme en kraft i $\sum F=0$; velge et dårlig momentpunkt (unødig mange ukjente); fortegnsfeil på momentretning (med/mot klokka).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.4: Drill: treghetsmoment, dreieimpuls og statikk (sjanger M4, M5, M9)

- **id:** `tfy4115-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `tfy4115-4-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill med Steiner-refleks, fortegnsdisiplin på dreieimpuls og klokt momentpunkt — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger M4–M5 (~90–100 %) + M9 (~70 %) samlet. Varianter: punktmasser i figur, stang med $\lambda(x)$, sammensatt legeme, akse utenfor CM, dreieimpuls med fortegn, gliding→rulling, momentbalanse. Prioritet: **perfekt** (M4/M5).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) massesenter om nødvendig; 2) treghetsmoment: punktmasser → $\sum m_i r_i^2$; legeme → slå opp $I_\text{CM}$; 3) akse utenfor CM → **legg til $Md^2$ (Steiner)**; 4) dreieimpuls → spinn + bane med fortegn; 5) rotasjon → $\tau=I\alpha$; 6) statikk → $\sum\tau=0$ om klokt punkt. Gjennomregnet MC-case med margnotat om Steiner-fella og fortegnsfella. 12–15 oppgaver på eksamensnivå, minst tre med Steiner, tre med dreieimpulsfortegn, to statikk.
- **Oppgavesjangre:** M4, M5, M9. Mønstereksempel: «En homogen stang med masse $M$ og lengde $L$ svinger om et punkt i den ene enden. (a) Finn treghetsmomentet om denne aksen (Steiner). (b) Finn vinkelakselerasjonen i det øyeblikket stangen er vannrett.»
- **Typiske feil:** Hele M4/M5/M9-repertoaret: glemt Steiner, perpendikulær avstand, feil standard-$I$, fortegn på dreieimpuls, dårlig momentpunkt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A massesenter + treghetsmoment (punktmasser/stang) · 4.B Steiner + dreieimpuls m/fortegn + gliding→rulling · 4.C statikk/momentbalanse · 4.D MC-format: tette flervalgsspørsmål rotasjon/statikk)

---

### Del 5 — Svingninger og pendler *(prioritet: PERFEKT)*

#### Kapittel 5.1: Harmoniske svingninger, egenfrekvens, fysisk og konisk pendel

- **id:** `tfy4115-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-4-1`
- **kapitteltype:** teori
- **description:** Den harmoniske svingelikningen, egenfrekvens $\omega_0=\sqrt{k/m}$, seriekoblede fjærer, fysisk pendel $T=2\pi\sqrt{I_A/Mgd}$ og konisk pendel.
- **Eksamensbelegg:** Sjanger M7 (egenfrekvens) i **~90 %**, fysisk pendel (M8) i **~50 %**, konisk pendel/svingkarusell **~50 %**. Signatur: finn fjærstivhet $k=m\omega_0^2$ eller egenfrekvens $f=\omega_0/2\pi$; fysisk pendel med Steiner-treghetsmoment; konisk pendel med kraftbalanse. Prioritet: **perfekt** (egenfrekvens) / **kunne** (pendler).
- **Forkunnskaper/kryssbok:** kap. 4.1 (fysisk pendel bruker $I_A$ med Steiner); [Repetisjon av derivasjon](/r2/r2-2-1) (svingelikningen); [Sirkelbevegelse og sentripetalkraft](/fysikk2/fysikk2-1-4) (konisk pendel).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: svingelikningen $\ddot{x}+\omega_0^2 x=0$ med løsning $x(t)=A\cos(\omega_0 t+\phi)$; **egenfrekvens** $\omega_0=\sqrt{k/m}$, $f=\frac{\omega_0}{2\pi}$, $T=\frac{2\pi}{\omega_0}$ (merk: $T$ = periode her, ikke temperatur); $k=m\omega_0^2$; **seriekoblede fjærer** $\frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2}$ (parallell $k=k_1+k_2$); **fysisk pendel** $T=2\pi\sqrt{\frac{I_A}{Mgd}}$ ($I_A$ om opphengspunktet via Steiner, $d$ = avstand CM–oppheng); matematisk pendel $T=2\pi\sqrt{L/g}$; **konisk pendel** $S\cos\theta=mg$, $S\sin\theta=\frac{mv^2}{R}$, $T=2\pi\sqrt{\frac{R}{g\tan\theta}}$ (her $S$ = taustrekk). **Rask vei til tall (MC-oppskrift):** 1) $\omega_0=\sqrt{k/m}$ → $f=\omega_0/2\pi$; 2) fysisk pendel → finn $I_A$ (Steiner), sett i $T=2\pi\sqrt{I_A/Mgd}$; 3) konisk → del de to kraftlikningene for å eliminere $S$. **Utledning som kreves aktivt:** utled $\omega_0$ fra N2 for masse på fjær; utled fysisk pendel fra $\tau=I\alpha$. **Figurkrav:** masse-fjær-system, fysisk pendel med $d$, og konisk pendel med kraftdekomponering.
- **Oppgavesjangre:** M7, M8. Mønstereksempel: «En homogen skive med masse $M$ og radius $R$ henges opp i et punkt på randen og svinger som en fysisk pendel. Finn svingetiden for små utslag.»
- **Typiske feil (analysen §5):** Blande serie/parallell for fjærer; glemme Steiner i $I_A$ for fysisk pendel; bruke $\omega_0$ der $f$ etterspørres (faktor $2\pi$); feil $d$ (avstand oppheng–CM, ikke opphengsradius); forveksle $S\cos\theta$ og $S\sin\theta$ i konisk pendel.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 5.2: Dempede og drevne svingninger — $Q$-faktor og resonans

- **id:** `tfy4115-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-5-1`
- **kapitteltype:** teori
- **description:** Amplitude som avtar eksponentielt, $A(t)=A_0 e^{-\gamma t}$ med $\gamma=b/2m$, overkritisk demping, kvalitetsfaktor $Q$ og drevet svingning på resonans (seismometer-sjangeren).
- **Eksamensbelegg:** Sjanger M7 (dempet) i **~90 %**, drevet/resonans + seismometer (Å1) gjenganger i utledningssettene. Signatur: finn tid/antall perioder til amplituden er redusert til en gitt brøk; $\gamma=b/2m$; $Q$-faktor; resonansamplitude. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Repetisjon av derivasjon](/r2/r2-2-1) (eksponentiell demping).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dempet svingelikning $m\ddot{x}+b\dot{x}+kx=0$, dvs. $\ddot{x}+2\gamma\dot{x}+\omega_0^2 x=0$; **amplitude** $A(t)=A_0 e^{-\gamma t}$ med **$\gamma=\frac{b}{2m}$**; dempet vinkelfrekvens $\omega'=\sqrt{\omega_0^2-\gamma^2}$ (svak demping $\omega'\approx\omega_0$); energi $E\propto e^{-2\gamma t}$; **overkritisk demping** ($\gamma\gg\omega_0$: $x\approx x_0 e^{-\omega_0^2 t/2\gamma}$, ingen svingning); **kvalitetsfaktor** $Q=\frac{\omega_0}{2\gamma}$; **drevet på resonans:** mekanisk energi/amplitude fra $F_0$, $b$ og $\omega$; **seismometer** (Å1): differensiallikning $\ddot{x}+2\gamma\dot{x}+\omega_0^2 x=-\ddot{h}$, resonanskurve. **Rask vei til tall (MC-oppskrift):** «tid til amplitude = brøk»: $t=-\frac{1}{\gamma}\ln(\text{brøk})$; antall perioder: del på $T=2\pi/\omega'$; energi-demping bruker $2\gamma$. **Utledning som kreves aktivt:** vis $\gamma=b/2m$ fra ansatsen $x=A_0 e^{-\gamma t}\cos\omega' t$; sett opp seismometer-likningen fra N2. **Figurkrav:** dempet svingning med innhyllingskurve $A_0 e^{-\gamma t}$; resonanskurve.
- **Oppgavesjangre:** M7. Mønstereksempel: «Et dempet masse-fjær-system har masse $m$, fjærstivhet $k$ og dempingskoeffisient $b$. Etter hvor mange hele svingninger er amplituden redusert til halvparten? Hva er $Q$-faktoren?»
- **Typiske feil (analysen §5):** Bruke $\gamma=b/m$ eller $b/2k$ i stedet for **$\gamma=b/2m$**; forveksle amplitude-demping ($e^{-\gamma t}$) med energi-demping ($e^{-2\gamma t}$); regne $\omega'=\omega_0$ ved sterk demping; blande $\omega_0$/$f$/$T$ (faktor $2\pi$).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.3: Drill: svingninger og pendler (sjanger M7, M8)

- **id:** `tfy4115-5-3` · **number:** 5.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4115-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: egenfrekvens, fysisk/konisk pendel og dempet amplitude raskt mot tallsvar — med $\gamma=b/2m$-disiplin.
- **Eksamensbelegg:** Sjanger M7 (~90 %) + M8 (~50 %) samlet. Varianter: masse på fjær (serie/parallell), fysisk pendel med Steiner, konisk pendel, dempet amplitude/antall perioder, $Q$-faktor, resonans. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser system (fjær/fysisk pendel/konisk/dempet); 2) egenfrekvens $\omega_0=\sqrt{k/m}$ eller $\sqrt{Mgd/I_A}$; 3) dempet → $\gamma=b/2m$, $A_0 e^{-\gamma t}$, $Q=\omega_0/2\gamma$; 4) oversett mellom $\omega$, $f$, $T$ korrekt ($2\pi$). Gjennomregnet MC-case med margnotat om $\gamma=b/2m$-fella og $2\pi$-fella. 12–15 oppgaver på eksamensnivå, minst tre dempet og tre pendel.
- **Oppgavesjangre:** M7, M8. Mønstereksempel: «To fjærer med stivhet $k_1$ og $k_2$ kobles i serie og bærer en masse $m$. (a) Finn egenfrekvensen. (b) Med en dempingskoeffisient $b$ i tillegg — hvor lang tid tar det før amplituden er $1/e$ av startverdien?»
- **Typiske feil:** Hele M7/M8-repertoaret: serie/parallell-fjær, Steiner i pendel, $\gamma=b/2m$, $2\pi$-faktor, konisk kraftbalanse.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A egenfrekvens + seriefjærer · 5.B fysisk/konisk pendel · 5.C dempet amplitude + antall perioder + $Q$ · 5.D MC-format: tette flervalgsspørsmål svingninger)

---

### Del 6 — Gasslover, kinetisk teori og ekvipartisjon *(prioritet: PERFEKT)*

> **Termofysikk-halvdelen starter her (eksamensspm. 21–40).** Dette er
> KJERNEPENSUM, ikke historisk tillegg — like tungt vektet som mekanikken.
> Fra og med Del 6 betyr $p$ **trykk** (skalar), $T$ **absolutt temperatur**
> (alltid kelvin), $\gamma$ **adiabateksponent** $C_P/C_V$, og $R$ (uten indeks)
> **den universelle gasskonstanten**. Symbol- og formellisten i hvert delkapittel
> gjentar dette.

#### Kapittel 6.1: Ideell gasslov, molekyltall og kinetisk gassteori

- **id:** `tfy4115-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** $pV=nRT$, antall molekyler $N=pV/k_BT$, midlere kinetisk energi $\tfrac32 k_BT$ og $v_\text{rms}=\sqrt{3k_BT/m}$ — termohalvdelens åpning.
- **Eksamensbelegg:** Sjanger T1 (gasslov/molekyltall) i **~100 %**, ofte åpningsspørsmål i termohalvdelen; T2 (kinetisk teori/$v_\text{rms}$) i **~80 %**. Signatur: finn trykk/volum/temperatur/stoffmengde/molekyltall fra gasslov; regn $v_\text{rms}$ eller sammenlign to gasser (tyngre molekyl → lavere $v_\text{rms}$, samme $\langle E_k\rangle$). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** ingen fysikk-forkunnskap i boka; elementær gasslov og molbegrep forutsettes på Kjemi 1 / Fysikk 1-nivå (refereres i klartekst, ikke lenket).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **ideell gasslov** $pV=nRT$ (alltid **kelvin**), $n=pV/RT$; **antall molekyler** $N=nN_A=\frac{pV}{k_BT}$ (med $R=N_A k_B$); **midlere kinetisk energi per molekyl** $\langle E_k\rangle=\tfrac32 k_BT$ (uavhengig av masse); **$v_\text{rms}=\sqrt{\frac{3k_BT}{m}}=\sqrt{\frac{3RT}{M}}$** ($M$ = molar masse); trykk fra kinetisk teori $p=\tfrac13\frac{N}{V}m\langle v^2\rangle$; temperatur $\propto$ midlere kinetisk energi. **Rask vei til tall (MC-oppskrift):** 1) gasslov → løs $pV=nRT$ for den ukjente (kelvin!); 2) molekyltall → $N=pV/k_BT$; 3) $v_\text{rms}$ → $\sqrt{3RT/M}$ (bruk molar masse fra formelark/oppgave). **Utledning som kreves aktivt:** vis $\langle E_k\rangle=\tfrac32 k_BT$ fra $p=\tfrac13(N/V)m\langle v^2\rangle$ og gasslov (kort). **Figurkrav:** ingen tvingende; evt. $pV$-punkt.
- **Oppgavesjangre:** T1, T2. Mønstereksempel: «En beholder på $V$ liter inneholder en ideell gass ved trykk $p$ og temperatur $T$. Finn (a) stoffmengden i mol, (b) antall molekyler, og (c) den rms-farten molekylene har hvis molar masse er $M$.»
- **Typiske feil (analysen §5.11):** **Celsius i stedet for kelvin**; forveksle $R$ (gasskonstant) og $k_B$ (Boltzmann); tro at tyngre molekyl har mer kinetisk energi (nei — samme $\langle E_k\rangle$, lavere $v_\text{rms}$); enhetsslurv liter/m³, gram/kg.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 6.2: Ekvipartisjon, frihetsgrader og varmekapasitet ($C_V$, $C_P$, $\gamma$)

- **id:** `tfy4115-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-6-1`
- **kapitteltype:** teori
- **description:** Ekvipartisjonsprinsippet, telling av kvadratiske frihetsgrader, $C_V=\tfrac{f}{2}R$, $C_P=C_V+R$, $\gamma=C_P/C_V$, og kvante-«innfrysing» av frihetsgrader.
- **Eksamensbelegg:** Sjanger T3 i **~90 %** — et gjennomgående konseptpoeng i termohalvdelen. Signatur: tell frihetsgrader ($f$) for en gass, regn $C_V/C_P/\gamma$, eller gå baklengs fra oppgitt $C_V$; forstå at vibrasjonsmoder «fryser ut» ved lave temperaturer ($C_V(T)$-kurve for H₂ går $\tfrac32\to\tfrac52\to\tfrac72 R$). Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **ekvipartisjon** — hver **kvadratiske** frihetsgrad bidrar $\tfrac12 k_BT$ per molekyl ($\tfrac12 RT$ per mol); telling: translasjon 3, rotasjon 2 (lineært molekyl) eller 3, **vibrasjon 2 per mode** (kinetisk + potensiell); indre energi $U=\tfrac{f}{2}nRT$; **$C_V=\tfrac{f}{2}R$**, **$C_P=C_V+R$** (per mol), **$\gamma=\frac{C_P}{C_V}=\frac{f+2}{f}$**; enatomig $f=3$ ($C_V=\tfrac32 R$, $C_P=\tfrac52 R$, $\gamma=\tfrac53$); toatomig ved romtemp. $f=5$ ($C_V=\tfrac52 R$, $C_P=\tfrac72 R$, $\gamma=\tfrac75$); ved høy temp. vibrasjon aktiveres $f=7$; **kvante-innfrysing** (kjenne intuisjon): moder krever $k_BT\gtrsim$ energigap for å vekkes → $C_V(T)$ trappekurve. **Rask vei til tall (MC-oppskrift):** 1) tell $f$ (3 + rotasjon + evt. vibrasjon); 2) $C_V=\tfrac{f}{2}R$, $C_P=C_V+R$, $\gamma=(f+2)/f$; 3) baklengs: $f=2C_V/R$. **Utledning som kreves aktivt:** utled $C_P=C_V+R$ fra 1. hovedsetning ved isobar prosess. **Figurkrav:** $C_V(T)$-trappekurve for et toatomig molekyl (translasjon → rotasjon → vibrasjon).
- **Oppgavesjangre:** T3. Mønstereksempel: «En gass har målt molar varmekapasitet $C_V=\tfrac52 R$ ved romtemperatur. (a) Hvor mange aktive frihetsgrader har molekylet? (b) Hva er $C_P$ og $\gamma$? (c) Hva skjer med $C_V$ hvis temperaturen heves så vibrasjonsmodene vekkes?»
- **Typiske feil (analysen §5.8, §5.9):** **Forbytte $C_V$ og $C_P$**, eller bruke feil $\gamma$ (enatomig $\tfrac53$ vs. toatomig $\tfrac75$) — velter adiabat-/kretsprosessregningen; **feil telling av frihetsgrader** (glemme at vibrasjon gir 2 ledd per mode, eller at vibrasjon er «frosset ut» ved romtemperatur); regne per molekyl ($k_B$) der per mol ($R$) er spurt.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 6.3: Drill: gasslov, $v_\text{rms}$ og frihetsgrader (sjanger T1–T3)

- **id:** `tfy4115-6-3` · **number:** 6.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4115-6-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: gasslov (kelvin!), molekyltall, $v_\text{rms}$ og telling av frihetsgrader → $C_V/C_P/\gamma$, raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger T1–T3 samlet (T1 ~100 %, T3 ~90 %, T2 ~80 %). Varianter: gasslov-omregning, molekyltall, $v_\text{rms}$-sammenligning, $f\to C_V/C_P/\gamma$ og baklengs. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) gasslov → kelvin, løs for ukjent; 2) molekyltall → $N=pV/k_BT$; 3) $v_\text{rms}$ → $\sqrt{3RT/M}$; 4) frihetsgrader → tell $f$, $C_V=\tfrac{f}{2}R$, $C_P=C_V+R$, $\gamma=(f+2)/f$. Gjennomregnet MC-case med margnotat om kelvin-fella og $C_V/C_P$-forbytting. 12–15 oppgaver på eksamensnivå, minst tre gasslov og tre frihetsgrader.
- **Oppgavesjangre:** T1, T2, T3. Mønstereksempel: «En toatomig ideell gass ($n$ mol) holder temperatur $T$. (a) Finn den indre energien. (b) Finn $v_\text{rms}$. (c) Finn $\gamma$, og forklar hvordan svaret endres hvis vibrasjon aktiveres.»
- **Typiske feil:** Hele T1–T3-repertoaret: celsius/kelvin, $R$ vs. $k_B$, $C_V/C_P$-forbytting, feil frihetsgradstelling.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A gasslov + molekyltall · 6.B kinetisk teori + $v_\text{rms}$ · 6.C frihetsgrader → $C_V/C_P/\gamma$ + kvante-innfrysing · 6.D MC-format: tette flervalgsspørsmål gass/ekvipartisjon)

---

### Del 7 — Hovedsetningene, prosesser og entropi *(prioritet: PERFEKT)*

#### Kapittel 7.1: Første hovedsetning og termodynamiske prosesser

- **id:** `tfy4115-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-6-2`
- **kapitteltype:** teori
- **description:** $\Delta U=Q-W$, arbeid $W=\int p\,dV$, og de fire prosessene (isoterm, isobar, isokor, adiabat $pV^\gamma=\text{konst}$) med riktig $(Q,W,\Delta U)$-relasjon.
- **Eksamensbelegg:** Sjanger T8 (1. hovedsetning/prosesser) i **~100 %**, adiabat (T4) i **~90 %**. Signatur: gitt en prosess, finn $Q$, $W$ eller $\Delta U$; kjenne igjen prosesstype og bruke riktig relasjon; adiabat brattere enn isoterm i $pV$-diagram. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.2 (bruker $C_V$, $C_P$, $\gamma$); [Bestemt integral som grenseverdi](/r2/r2-2-4) ($W=\int p\,dV$); energibegrepet fra kap. 2.2 (klartekst).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **1. hovedsetning** $\Delta U=Q-W$ (fortegnskonvensjon: $W$ = arbeid gassen gjør PÅ omgivelsene); arbeid $W=\int p\,dV$ = areal under prosessen i $pV$-diagram; indre energi $\Delta U=nC_V\Delta T$ (alltid, uansett prosess); **isoterm** ($\Delta U=0$, $Q=W=nRT\ln\frac{V_2}{V_1}$); **isobar** ($W=p\Delta V$, $Q=nC_P\Delta T$); **isokor** ($W=0$, $Q=\Delta U=nC_V\Delta T$); **adiabat** ($Q=0$, $\Delta U=-W$, $pV^\gamma=\text{konst}$, $TV^{\gamma-1}=\text{konst}$, $\frac{T^\gamma}{p^{\gamma-1}}=\text{konst}$); adiabaten er **brattere** enn isotermen. **Rask vei til tall (MC-oppskrift):** 1) identifiser prosesstype; 2) bruk prosessens $(Q,W,\Delta U)$-relasjon direkte; 3) for adiabat: $T_2=T_1(V_1/V_2)^{\gamma-1}$. **Utledning som kreves aktivt:** utled isoterm arbeid $nRT\ln(V_2/V_1)$; vis $TV^{\gamma-1}=\text{konst}$ fra $\Delta U=-W$ langs adiabat. **Figurkrav:** de fire prosessene i samme $pV$-diagram (adiabat vs. isoterm).
- **Oppgavesjangre:** T4, T8. Mønstereksempel: «Én mol ideell toatomig gass komprimeres adiabatisk fra $(p_1,V_1)$ til halve volumet. Finn slutt-trykk og -temperatur, og arbeidet som er gjort på gassen.»
- **Typiske feil (analysen §5.10, §5.11):** **Behandle isokor/isobar/adiabat om hverandre** (bruke feil $(Q,W,\Delta U)$-relasjon: $W=0$ for isokor, $Q=0$ for adiabat, $\Delta U=0$ for isoterm); feil fortegn i $\Delta U=Q-W$; bruke $pV^\gamma$ der $TV^{\gamma-1}$ trengs (eller omvendt); celsius i adiabatrelasjonen.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 7.2: Entropi og andre hovedsetning

- **id:** `tfy4115-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-7-1`
- **kapitteltype:** teori
- **description:** Entropi som tilstandsfunksjon, $\Delta S=\int dQ_\text{rev}/T$, entropiendring for ideell gass, og 2. hovedsetning som fortegnsanalyse (universets entropi øker).
- **Eksamensbelegg:** Sjanger T7 (entropi) i **~100 %**, T8 (hovedsetninger som fortegnsanalyse) i **~100 %**. Signatur: regn $\Delta S$ for en prosess (isoterm, oppvarming, fri ekspansjon, irreversibel varmeoverføring); avgjør hvilke prosesser som er tillatt etter 2. lov; ranger $S$/$T$/$\Delta U$ i hjørnene. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1; [Bestemt integral som grenseverdi](/r2/r2-2-4) ($\int dQ/T$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **entropi er en tilstandsfunksjon** ($\Delta S$ uavhengig av vei — velg en reversibel omvei); $dS=\frac{dQ_\text{rev}}{T}$; **for ideell gass** $\Delta S=nC_V\ln\frac{T_2}{T_1}+nR\ln\frac{V_2}{V_1}$ (og isobar-varianten med $C_P\ln\frac{T_2}{T_1}-nR\ln\frac{p_2}{p_1}$); **isoterm** $\Delta S=nR\ln\frac{V_2}{V_1}$; **fri (Joule-)ekspansjon** $\Delta S=nR\ln\frac{V_2}{V_1}$ (irreversibel, men samme $\Delta S$ som isoterm); oppvarming $\Delta S=nC\ln\frac{T_2}{T_1}$; **2. hovedsetning** $\Delta S_\text{univers}=\Delta S_\text{system}+\Delta S_\text{omgivelser}\ge 0$ ($>0$ irreversibelt, $=0$ reversibelt); varmeoverføring mellom reservoarer: $\Delta S=Q(\frac{1}{T_\text{kald}}-\frac{1}{T_\text{varm}})>0$. **Rask vei til tall (MC-oppskrift):** 1) er prosessen isoterm/isokor/isobar? bruk riktig $\Delta S$-form; 2) fri ekspansjon → behandl som isoterm ($\Delta S=nR\ln(V_2/V_1)$); 3) univers → summer system + omgivelser med fortegn. **Utledning som kreves aktivt:** utled $\Delta S=nC_V\ln\frac{T_2}{T_1}+nR\ln\frac{V_2}{V_1}$ fra $dS=dQ_\text{rev}/T$ og 1. hovedsetning. **Figurkrav:** $T$–$S$-diagram; reversibel omvei for irreversibel prosess.
- **Oppgavesjangre:** T7, T8. Mønstereksempel: «Én mol ideell gass ekspanderer fritt (Joule) til dobbelt volum i en isolert beholder. (a) Hva er $\Delta U$ og $\Delta T$? (b) Finn gassens entropiendring. (c) Finn universets entropiendring, og forklar hvorfor prosessen er irreversibel.»
- **Typiske feil (analysen §5.14):** **Glemme at $S$ er tilstandsfunksjon** (regne omvei når $\Delta S$ bare avhenger av start/slutt, eller nekte å regne fordi prosessen er irreversibel); glemme at universets entropi kan øke selv om gassens $\Delta S=0$ over en syklus; feil fortegn i $\Delta S_\text{omgivelser}$; celsius i $\ln(T_2/T_1)$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 7.3: Drill: prosesser, $\Delta U=Q-W$ og entropi (sjanger T4, T7, T8)

- **id:** `tfy4115-7-3` · **number:** 7.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4115-7-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: kjenn igjen prosesstypen, bruk riktig $(Q,W,\Delta U)$-relasjon, og regn $\Delta S$ som tilstandsfunksjon — raskt og feilfritt.
- **Eksamensbelegg:** Sjanger T4+T7+T8 samlet (alle ~90–100 %). Varianter: prosessidentifikasjon, adiabatregning, isoterm/isobar/isokor $Q/W/\Delta U$, $\Delta S$ for gass/fri ekspansjon/varmeoverføring, «hvilken prosess er umulig». Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser prosess (iso-hva?); 2) bruk prosessens $(Q,W,\Delta U)$-relasjon; 3) adiabat → $TV^{\gamma-1}$; 4) entropi → riktig $\Delta S$-form (tilstandsfunksjon!); 5) 2. lov → summer univers. Gjennomregnet MC-case med margnotat om prosess-forvekslingsfella og entropi-tilstandsfunksjon-fella. 12–15 oppgaver på eksamensnivå, minst tre prosessregning og tre entropi.
- **Oppgavesjangre:** T4, T7, T8. Mønstereksempel: «En ideell gass går isokort fra $T_1$ til $T_2$. (a) Finn $Q$, $W$, $\Delta U$. (b) Finn $\Delta S$. (c) Hvis samme temperaturøkning i stedet skjer isobart — endres $\Delta S$?»
- **Typiske feil:** Hele T4/T7/T8-repertoaret: prosess-forveksling, feil fortegn i $\Delta U=Q-W$, entropi som ikke-tilstandsfunksjon, celsius.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A 1. hovedsetning + prosessidentifikasjon · 7.B adiabatregning · 7.C entropi (gass/fri ekspansjon/varmeoverføring) · 7.D MC-format: tette flervalgsspørsmål hovedsetninger/entropi)

---

### Del 8 — Kretsprosesser, virkningsgrad og varmepumper *(prioritet: PERFEKT — signatursjanger)*

> **Termofysikkens ryggrad.** Nesten hvert sett har en full varmekraft-/kjølesyklus:
> i de åpne settene som egen oppgave, i MC som en **klynge på 3–4 koblede spørsmål**.
> Denne delen fortjener egen drill og bør planlegges for under eksamen (jf. Del 0).

#### Kapittel 8.1: Kretsprosesser og virkningsgrad (Carnot, Otto, Stirling)

- **id:** `tfy4115-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `tfy4115-7-1`
- **kapitteltype:** teori
- **description:** Full syklus: finn $T$ i hjørnene, klassifiser $Q$ og $W$ langs hvert trinn, regn arbeid og virkningsgrad, og sammenlign med Carnot-grensen.
- **Eksamensbelegg:** Sjanger T5 i **~100 %** — signatursjangeren i termohalvdelen. Signatur: gitt en syklus i $pV$-diagram (Carnot, Otto, Stirling, generell firkant), finn hjørnetemperaturer via adiabat-/gasslov-relasjoner, klassifiser $Q$/$W$ per trinn, regn $\eta=W_\text{netto}/Q_\text{inn}$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1 (prosesser + adiabat), kap. 6.2 ($\gamma$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: syklus = lukket sløyfe i $pV$-diagram; **netto arbeid** $W_\text{netto}=\oint p\,dV$ = **omsluttet areal**; **virkningsgrad** $\eta=\frac{W_\text{netto}}{Q_\text{inn}}=1-\frac{Q_\text{ut}}{Q_\text{inn}}$ (varmekraftmaskin); **Carnot** $\eta_\text{Carnot}=1-\frac{T_k}{T_v}$ (øvre grense, kun to isotermer + to adiabater); prosedyre: (1) finn $p,V,T$ i hvert hjørne via gasslov + adiabat-/isokor-/isobar-relasjoner, (2) regn $Q$ og $W$ på hvert trinn med riktig prosessrelasjon (fortegn: $Q>0$ inn, $W>0$ ut), (3) summer, (4) $\eta$; **Otto** (to adiabater + to isokorer): $\eta=1-r^{1-\gamma}$ ($r$ = kompresjonsforhold); **Stirling** (to isotermer + to isokorer, med regenerasjon). **Rask vei til tall (MC-oppskrift):** 1) sett opp hjørnetabell ($p,V,T$); 2) $Q_\text{inn}$ = sum av trinn med $Q>0$; 3) $W_\text{netto}$ = areal eller $Q_\text{inn}-Q_\text{ut}$; 4) $\eta=W_\text{netto}/Q_\text{inn}$; 5) sammenlign med $\eta_\text{Carnot}$. **Utledning som kreves aktivt:** utled $\eta_\text{Carnot}=1-T_k/T_v$; utled Otto $\eta=1-r^{1-\gamma}$. **Figurkrav:** syklus i $pV$-diagram med trinn merket og $Q$/$W$-fortegn per trinn; evt. $T$–$S$-diagram.
- **Oppgavesjangre:** T5. Mønstereksempel: «En varmekraftmaskin kjører en syklus med to isokorer og to adiabater (Otto) med kompresjonsforhold $r$ og toatomig gass. (a) Finn temperaturen i hvert hjørne uttrykt ved $T_1$. (b) Finn virkningsgraden. (c) Hvor stor er Carnot-virkningsgraden mellom samme yttertemperaturer?»
- **Typiske feil (analysen §5.13):** **Forveksle virkningsgrad og effektfaktor** (blande varmekraftmaskin og varmepumpe); feil hjørnetemperatur (feil adiabat-/gasslov-relasjon); regne $Q_\text{inn}$ med feil trinn (ta med trinn der $Q<0$); glemme at $W_\text{netto}$ = omsluttet areal (fortegn på sirkulasjonsretning); bruke feil $\gamma$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 8.2: Varmepumpe og kjøleskap — effektfaktor

- **id:** `tfy4115-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-8-1`
- **kapitteltype:** teori
- **description:** Kretsprosessen baklengs: effektfaktor for oppvarming ($\varepsilon_V$) og kjøling ($\varepsilon_K$), Carnot-grensen, og praktiske reservoar-/kompressoroppsett.
- **Eksamensbelegg:** Sjanger T6 i **~90 %**. Signatur: gitt en varmepumpe/kjøleskap, finn effektfaktor, kompressoreffekt eller varme flyttet; sammenhengen $\varepsilon_V=\varepsilon_K+1$. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: varmepumpe/kjøleskap = varmekraftmaskin baklengs (arbeid inn, varme flyttet fra kald til varm); **effektfaktor oppvarming** $\varepsilon_V=\frac{|Q_H|}{W}$; **kjøling** $\varepsilon_K=\frac{|Q_L|}{W}$; **sammenheng** $\varepsilon_V=\varepsilon_K+1$ (fra $|Q_H|=|Q_L|+W$); **Carnot** $\varepsilon_V=\frac{T_v}{T_v-T_k}$, $\varepsilon_K=\frac{T_k}{T_v-T_k}$; praktisk oppsett $\varepsilon=\frac{c\rho V\Delta T}{P\Delta t}$ (varme til/fra vannreservoar per kompressorarbeid). **Rask vei til tall (MC-oppskrift):** 1) oppvarming eller kjøling? velg $\varepsilon_V$ eller $\varepsilon_K$; 2) Carnot-grense fra temperaturer; 3) $W=|Q|/\varepsilon$ eller $|Q|=\varepsilon W$; 4) sjekk $\varepsilon_V=\varepsilon_K+1$. **Utledning som kreves aktivt:** utled $\varepsilon_V=\varepsilon_K+1$ fra energibalansen; utled Carnot-effektfaktorene. **Figurkrav:** energiflytdiagram (reservoarer, arbeid inn, $Q_H$/$Q_L$).
- **Oppgavesjangre:** T6. Mønstereksempel: «En varmepumpe holder et hus på $T_v$ mens uteluften er $T_k$. (a) Finn den maksimale (Carnot-)effektfaktoren for oppvarming. (b) Hvis pumpen leverer effekt $P_H$ til huset, hvilken elektrisk effekt trenger kompressoren minst?»
- **Typiske feil (analysen §5.13):** **Regne $\varepsilon_V$ når $\varepsilon_K$ var spurt** (eller omvendt — husk $\varepsilon_V=\varepsilon_K+1$); forveksle med virkningsgrad $\eta$ (varmepumpe har $\varepsilon>1$, ikke $<1$); feil temperaturdifferanse i Carnot-grensen (kelvin!); glemme at kompressorarbeid = nevner.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 8.3: Drill: kretsprosessen (sjanger T5–T6)

- **id:** `tfy4115-8-3` · **number:** 8.3 · **estimatedMinutes:** 90 · **prerequisites:** `tfy4115-8-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill mot signatursjangeren: hjørnetabell, $Q$/$W$-klassifisering, virkningsgrad og effektfaktor — som en koblet MC-klynge.
- **Eksamensbelegg:** Sjanger T5 (~100 %) + T6 (~90 %) samlet. Varianter: Carnot, Otto, Stirling, generell firkant-syklus, varmepumpe, kjøleskap. **Bygg minst én oppgave som en klynge av 3–4 koblede delspørsmål (slik MC-settet gjør det).** Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) tegn syklusen, merk prosesstypene; 2) hjørnetabell ($p,V,T$) via gasslov + adiabat/isokor/isobar; 3) $Q$ og $W$ per trinn med fortegn; 4) $W_\text{netto}$ = sum = areal; 5) $\eta=W_\text{netto}/Q_\text{inn}$ (maskin) eller $\varepsilon=|Q|/W$ (pumpe); 6) sammenlign Carnot. Gjennomregnet MC-klynge-case med margnotat om $\eta$/$\varepsilon$-forvekslingen og hjørnetemperatur-fella. 12–15 oppgaver på eksamensnivå, minst fire hele sykluser og to varmepumpe/kjøleskap.
- **Oppgavesjangre:** T5, T6. Mønstereksempel: «En Carnot-maskin arbeider mellom $T_v$ og $T_k$ og tar opp varme $Q_v$ per syklus. (a) Finn virkningsgraden. (b) Finn netto arbeid per syklus. (c) Kjør den baklengs som varmepumpe — hva blir effektfaktoren for oppvarming?»
- **Typiske feil:** Hele T5/T6-repertoaret: $\eta$/$\varepsilon$-forveksling, feil hjørnetemperatur, feil $Q_\text{inn}$-trinn, feil $\gamma$, kelvin.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A Carnot-syklus: hjørner + $\eta$ · 8.B Otto/Stirling-syklus · 8.C varmepumpe/kjøleskap effektfaktor · 8.D MC-format: koblet kretsprosess-klynge, tette alternativer)

---

### Del 9 — Varmetransport og stråling *(prioritet: PERFEKT)*

#### Kapittel 9.1: Varmeledning i sjikt — Fouriers lov og termisk motstand

- **id:** `tfy4115-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-6-1`
- **kapitteltype:** teori
- **description:** Fouriers lov $j=\kappa\Delta T/\ell$, sjikt i serie som termiske motstander, temperaturprofil og varmeovergangskoeffisienter.
- **Eksamensbelegg:** Sjanger T9 i **~80 %**. Signatur: varmestrøm gjennom en sammensatt vegg (gips + isolasjon), temperatur på grenseflater, termiske motstander i serie; ta med varmeovergangskoeffisienter $h_i$, $h_u$ når oppgitt. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1 (temperatur/energi); analogien til seriemotstand er ny her (introduseres i klartekst).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Fouriers lov** $j=\kappa\frac{\Delta T}{\ell}$ (varmefluks, W/m²), effekt $P=jA=\frac{\Delta T}{R_\text{term}}$; **termisk motstand** ett sjikt $R_\text{term}=\frac{\ell}{\kappa A}$; **sjikt i serie** $R_\text{term}=\sum_j\frac{\ell_j}{\kappa_j A}$ (samme varmestrøm $P$ gjennom alle sjikt); **varmeovergang** (film) $R_\text{film}=\frac{1}{hA}$ (legges i serie når $h_i$, $h_u$ er oppgitt); **temperaturprofil** stasjonært: $\Delta T$ over hvert sjikt $\propto R_j$ (brattere fall i dårlig leder); grenseflatetemperatur fra $P=\Delta T_j/R_j$. **Rask vei til tall (MC-oppskrift):** 1) summer termiske motstander i serie (inkl. film); 2) $P=\Delta T_\text{total}/R_\text{term}$; 3) grenseflatetemperatur: $T=T_\text{inn}-P R_\text{delvis}$. **Utledning som kreves aktivt:** vis at motstander legges i serie (samme $P$, $\Delta T$ summeres). **Figurkrav:** sammensatt vegg med sjikt, temperaturprofil (knekt linje) og analog seriemotstand.
- **Oppgavesjangre:** T9. Mønstereksempel: «En yttervegg består av $\ell_1$ gips ($\kappa_1$) og $\ell_2$ mineralull ($\kappa_2$). Innetemperatur $T_i$, utetemperatur $T_u$. (a) Finn varmestrømmen per kvadratmeter. (b) Finn temperaturen i grenseflaten mellom sjiktene.»
- **Typiske feil (analysen §5.15):** **Blande varmeledning ($\kappa$) og varmeovergang ($h$)**, eller summere termiske motstander feil; glemme at samme $P$ går gjennom alle sjikt (ulik $\Delta T$); regne parallell der serie gjelder; enhetsslurv (mm/m, W/mK).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 9.2: Varmestråling — Stefan–Boltzmann, platebalanse og Wien

- **id:** `tfy4115-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4115-9-1`
- **kapitteltype:** teori
- **description:** Stefan–Boltzmann $j=\sigma T^4$, stasjonær strålingsbalanse mellom plater, Wiens forskyvningslov og Plancks lov (som munner ut i numerikk-kapitlet).
- **Eksamensbelegg:** Sjanger T10 i **~70 %** — **unik mot søsteremnet TFY4125**. Signatur: total utstrålt effekt fra et legeme; stasjonær temperatur på en midtplate mellom to reservoarer ($T_2=((T_1^4+T_3^4)/2)^{1/4}$); Wien for bølgelengde ved maksimal utstråling. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 9.1; Plancks lov leder til fikspunktiterasjonen i kap. 11.1 (merk koblingen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **Stefan–Boltzmann** $j=\sigma T^4$ (svart legeme), $j=e\sigma T^4$ (grått, emissivitet $e$); total effekt $P=e\sigma A T^4$; netto stråling mot omgivelser $P_\text{netto}=e\sigma A(T^4-T_\text{omg}^4)$; **stasjonær platebalanse:** en midtplate mellom to reservoarer $T_1$ og $T_3$ i likevekt → inn = ut → $T_2=\left(\frac{T_1^4+T_3^4}{2}\right)^{1/4}$; **Wiens forskyvningslov** $\lambda_\text{max}=\frac{b}{T}$ ($b\approx 2{,}898\cdot 10^{-3}$ m·K); Plancks strålingslov (formen hentes fra formelark; brukes kvalitativt her, numerisk i kap. 11.1). **Rask vei til tall (MC-oppskrift):** 1) effekt → $e\sigma A T^4$ (**kelvin, fjerde potens!**); 2) platebalanse → midle $T^4$, ta fjerderot; 3) Wien → $\lambda_\text{max}=b/T$. **Utledning som kreves aktivt:** utled platebalansen $T_2=((T_1^4+T_3^4)/2)^{1/4}$ fra stasjonær energibalanse. **Figurkrav:** tre parallelle plater med strålingspiler; $\lambda_\text{max}(T)$-forskyvning.
- **Oppgavesjangre:** T10. Mønstereksempel: «En tynn svart plate henger i vakuum mellom to store svarte plater med temperatur $T_1$ og $T_3$. Finn platens stasjonære temperatur, og bølgelengden der den stråler mest.»
- **Typiske feil (analysen §5.12):** **Glemme fjerde potens** ($P\propto T^4$, ikke $T$) og å **midle $T^4$** (ikke $T$) i platebalansen; celsius i stedet for kelvin (katastrofalt i $T^4$); glemme emissivitet $e$ for grå legemer; feil i Wien (blande $\lambda_\text{max}\propto 1/T$).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 9.3: Drill: varmeledning og stråling (sjanger T9–T10)

- **id:** `tfy4115-9-3` · **number:** 9.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4115-9-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: seriekoblede termiske motstander og $\sigma T^4$-balanse raskt mot tallsvar — med fjerde-potens- og motstands-disiplin.
- **Eksamensbelegg:** Sjanger T9 (~80 %) + T10 (~70 %) samlet. Varianter: sammensatt vegg med/uten film, grenseflatetemperatur, utstrålt effekt, platebalanse, Wien. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) ledning → summer $R_\text{term}$ i serie, $P=\Delta T/R_\text{term}$, grenseflate via delvis motstand; 2) stråling → $P=e\sigma A T^4$ (kelvin!), platebalanse → midle $T^4$, fjerderot; 3) Wien → $b/T$. Gjennomregnet MC-case med margnotat om fjerde-potens-fella og serie-motstand-fella. 12–15 oppgaver på eksamensnivå, minst tre ledning og tre stråling.
- **Oppgavesjangre:** T9, T10. Mønstereksempel: «En ovn med overflate $A$ og temperatur $T$ stråler i et rom ved $T_\text{rom}$. (a) Finn netto utstrålt effekt. (b) Ved hvilken bølgelengde stråler den mest? (c) Hvis overflaten i stedet var grå med emissivitet $e$, hvordan endres (a)?»
- **Typiske feil:** Hele T9/T10-repertoaret: $\kappa$ vs. $h$, feil motstandssum, fjerde potens glemt, celsius/kelvin, emissivitet.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (9.A varmeledning sjikt i serie + grenseflatetemperatur · 9.B varmeovergang + sammensatt vegg · 9.C varmestråling: effekt + platebalanse + Wien · 9.D MC-format: tette flervalgsspørsmål varmetransport/stråling)

---

### Del 10 — Faseoverganger og reelle gasser *(prioritet: KUNNE)*

#### Kapittel 10.1: van der Waals, kritisk punkt og fasediagram

- **id:** `tfy4115-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4115-6-1`
- **kapitteltype:** teori
- **description:** van der Waals' tilstandsligning, det kritiske punktet, og fasediagrammet i $p$–$T$ med trippelpunkt og kritisk punkt.
- **Eksamensbelegg:** Sjanger T11: van der Waals + kritisk punkt **~50 %**, fasediagram **~60 %**. Signatur: bruk/tolk van der Waals-ligningen, finn kritisk punkt fra $a$, $b$; les fasediagram (hvor er væske/gass/fast, hva skjer under trippeltrykket). Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.1 (ideell gasslov som grensetilfelle).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (formene hentes fra formelark): **van der Waals** $\left(p+\frac{an^2}{V^2}\right)(V-nb)=nRT$ ($a$ = tiltrekning, $b$ = egenvolum); grenser mot ideell gass når $a,b\to 0$; **kritisk punkt** (vendepunkt med horisontal tangent i $pV$): $V_c=3nb$, $p_c=\frac{a}{27b^2}$, $T_c=\frac{8a}{27Rb}$; **fasediagram i $p$–$T$:** faste/væske/gass-områder, koeksistenslinjer (smelte-, damptrykks-, sublimasjonslinje), **trippelpunkt** (tre faser i likevekt), **kritisk punkt** (enden av væske–gass-linjen — over $T_c$ ingen skarp faseovergang); **ingen væskefase under trippeltrykket** (sublimasjon direkte fast→gass). **Rask vei til tall (MC-oppskrift):** 1) kritisk punkt → sett inn $a$, $b$ i $V_c=3nb$, $p_c=a/27b^2$, $T_c=8a/27Rb$; 2) fasediagram → plasser punktet, les av fase; 3) van der Waals korreksjon → sammenlign med ideell $pV=nRT$. **Utledning som kreves aktivt:** vis $T_c=8a/27Rb$ fra $\partial p/\partial V=\partial^2 p/\partial V^2=0$ (skisser, resultat oppgitt på formelark). **Figurkrav:** $p$–$T$-fasediagram med trippel- og kritisk punkt; van der Waals-isotermer i $pV$.
- **Oppgavesjangre:** T11. Mønstereksempel: «En gass beskrives ved van der Waals-konstantene $a$ og $b$. (a) Finn trykk, volum og temperatur i det kritiske punktet. (b) Marker i et $p$–$T$-diagram hvor trippelpunktet og det kritiske punktet ligger, og forklar hvorfor det ikke finnes flytende fase under trippeltrykket.»
- **Typiske feil:** Blande $a$- og $b$-korreksjonen (trykk vs. volum); feil i kritisk-punkt-formlene; tro at det finnes væske under trippeltrykk; forveksle kritisk punkt og trippelpunkt i fasediagrammet.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 10.2: Clausius–Clapeyron, damptrykk og termisk utvidelse

- **id:** `tfy4115-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4115-10-1`
- **kapitteltype:** teori
- **description:** Damptrykkets temperaturavhengighet (Clausius–Clapeyron), kokepunkt som referanse, og termisk lengde-/volumutvidelse.
- **Eksamensbelegg:** Sjanger T12 (Clausius–Clapeyron) **~40 %**, T13 (termisk utvidelse) **~30 %**, strømmende medium **~30 %**. Signatur: finn damptrykk i ett punkt fra kokepunktet; beregn lengdeendring ved oppvarming (skinnegang, bygg); varmestrøm i strømmende medium. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 10.1 (koeksistenslinje); [Repetisjon av derivasjon](/r2/r2-2-1) (Clausius–Clapeyron er en diff.-ligning).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (formen hentes fra formelark): **Clausius–Clapeyron** $\frac{dp}{dT}=\frac{l_f}{T\Delta V}$, som med konstant fordampningsvarme og ideell damp gir $p(T)=p_0\exp\left[-\frac{l_f}{R}\left(\frac{1}{T}-\frac{1}{T_0}\right)\right]$ (bruk kokepunkt $(T_0,p_0=1\text{ atm})$ som referanse); **termisk utvidelse** $\Delta L=\alpha L\,\Delta T$ (lineær), $\Delta V=\beta V\,\Delta T$ med $\beta\approx 3\alpha$; **varmestrøm i strømmende medium** $P=c\rho\dot{V}\Delta T=c\rho v A\,\Delta T$ (fjernvarme). **Rask vei til tall (MC-oppskrift):** 1) damptrykk → sett inn i eksponentialen med kokepunkt som referanse (kelvin!); 2) utvidelse → $\Delta L=\alpha L\Delta T$; 3) strømmende → $P=c\rho\dot{V}\Delta T$. **Utledning som kreves aktivt:** vis hvordan Clausius–Clapeyron-eksponentialen følger av $\frac{dp}{dT}=\frac{l_f p}{RT^2}$ (integrasjon). **Figurkrav:** damptrykkskurve $p(T)$; skinne som utvider seg.
- **Oppgavesjangre:** T12, T13. Mønstereksempel: «Vann koker ved $100\,^\circ$C ved 1 atm og har fordampningsvarme $l_f$. (a) Anslå damptrykket ved $80\,^\circ$C. (b) En stålskinne på lengde $L$ varmes $\Delta T$ — hvor mye lengre blir den?»
- **Typiske feil (analysen §5.11):** Celsius i Clausius–Clapeyron og gasslov (kelvin!); feil fortegn i eksponenten (damptrykk øker med $T$); blande $\alpha$ (lineær) og $\beta$ (volum); glemme referansepunktet.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 10.3: Drill: van der Waals, fasediagram og Clausius–Clapeyron (sjanger T11–T13)

- **id:** `tfy4115-10-3` · **number:** 10.3 · **estimatedMinutes:** 75 · **prerequisites:** `tfy4115-10-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: kritisk punkt fra $a$/$b$, fasediagram-avlesning, damptrykk fra kokepunkt og termisk utvidelse — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger T11–T13 samlet (fasediagram ~60 %, van der Waals ~50 %, Clausius–Clapeyron ~40 %). Varianter: kritisk punkt, fasediagram-plassering, damptrykk, utvidelse, strømmende medium. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) van der Waals → kritisk punkt fra $a$, $b$; 2) fasediagram → plasser og les fase; 3) damptrykk → Clausius–Clapeyron med referansepunkt (kelvin); 4) utvidelse → $\alpha L\Delta T$. Gjennomregnet MC-case med margnotat om kelvin-fella og $a$/$b$-forvekslingen. 10–14 oppgaver på eksamensnivå, minst to van der Waals/fasediagram og to Clausius–Clapeyron/utvidelse.
- **Oppgavesjangre:** T11, T12, T13. Mønstereksempel: «En gass har van der Waals-konstanter $a$, $b$. (a) Finn den kritiske temperaturen. (b) Ved trippelpunktet $(T_t, p_t)$ — bruk Clausius–Clapeyron til å anslå damptrykket ved en litt høyere temperatur.»
- **Typiske feil:** Hele T11–T13-repertoaret: $a$/$b$-forveksling, kritisk vs. trippel, celsius, fortegn i damptrykk, $\alpha$ vs. $\beta$.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 10:** 4 prøver (10.A van der Waals + kritisk punkt · 10.B fasediagram: trippel-/kritisk punkt + sublimasjon · 10.C Clausius–Clapeyron + termisk utvidelse · 10.D MC-format: tette flervalgsspørsmål faseoverganger)

---

### Del 11 — Numerisk iterasjon *(prioritet: KUNNE — lever fremdeles)*

#### Kapittel 11.1: Fikspunktiterasjon og Euler-diskretisering

- **id:** `tfy4115-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4115-9-2`
- **kapitteltype:** teori
- **description:** Løse en transcendent ligning ved fikspunktiterasjon (Plancks lov → Wien-konstanten) og diskretisere en bevegelse med Eulers metode — ofte settets siste spørsmål.
- **Eksamensbelegg:** Sjanger T14 i **~40 %** — **lever fremdeles i TFY4115** (motsatt av TFY4125, der numerikk er faset ut). Siste spørsmål i både 2019- og 2020-settet er en **fikspunktiterasjon** av Plancks strålingslov ($x_{n+1}=5(1-e^{-x_n})$); eldre sett har Euler-diskretisert forflytning. Prioritet: **kunne** (ett sikringspoeng, ofte til slutt).
- **Forkunnskaper/kryssbok:** kap. 9.2 (Plancks lov / Wien); [Repetisjon av derivasjon](/r2/r2-2-1) (Euler bruker $s'=v$). Ingen programmering forutsettes — iterasjonene gjøres for hånd/med kalkulator.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **fikspunktiterasjon** — skriv ligningen på formen $x=g(x)$, velg startverdi $x_0$, iterer $x_{n+1}=g(x_n)$ til konvergens; **Planck→Wien-eksempelet:** maksimering av Plancks lov gir $x=5(1-e^{-x})$ med rot $x\approx 4{,}965$, som gir Wien-konstanten $b=\frac{hc}{x k_B}$; utfør 2–4 iterasjoner for hånd fra oppgitt $x_0$ og oppgi $x_n$; **Eulers metode** for bevegelse: $s_{n+1}=s_n+v_n\Delta t$, $v_{n+1}=v_n+a_n\Delta t$ (framover-Euler); **feilestimat** ved å sammenligne med eksakt løsning eller ved å halvere $\Delta t$ (feilen $\propto\Delta t$ for Euler). **Rask vei til tall (MC-oppskrift):** 1) fikspunkt → sett $x_0$ inn i $g(x)$, gjenta oppgitt antall ganger, oppgi $x_n$ (behold nok siffer); 2) Euler → tabellér $s$, $v$ over stegene; 3) feil → $\propto\Delta t$. **Utledning som kreves aktivt:** vis hvorfor maksimering av Planck gir $x=5(1-e^{-x})$ (kort); vis Euler-oppdateringen fra $ds=v\,dt$. **Figurkrav:** iterasjonsdiagram ($y=x$ og $y=g(x)$, trappe mot fikspunkt); Euler-steg mot eksakt kurve.
- **Oppgavesjangre:** T14. Mønstereksempel: «Maksimum i Plancks strålingslov gir ligningen $x=5(1-e^{-x})$. Start med $x_0=5$ og utfør tre fikspunktiterasjoner. (a) Hva blir $x_3$? (b) Bruk resultatet til å anslå Wien-konstanten $b=hc/(x k_B)$.»
- **Typiske feil:** Feil antall iterasjoner (av-for-én); avrunde for tidlig mellom iterasjonene (fikspunkt konvergerer sakte); bruke $\Delta t$ for stort i Euler og undervurdere feilen; blande $g(x)$-formen (feil omskriving av ligningen).
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 11:** 4 prøver (11.A fikspunkt: Planck $x=5(1-e^{-x})$, iterer fra $x_0$ · 11.B fikspunkt: annen transcendent ligning · 11.C Euler-diskretisert forflytning + feilestimat · 11.D MC-format: tette flervalgsspørsmål iterasjon)

---

### Del 12 — Eksamenstrening

#### Kapittel 12.1: MC-strategi, rask vei til tall og avrundingsdisiplin

- **id:** `tfy4115-12-1` · **number:** 12.1 · **estimatedMinutes:** 40 · **prerequisites:** `tfy4115-0-1`
- **kapitteltype:** teori/strategi
- **description:** Hvordan man høster 40 flervalgspoeng raskt og feilfritt over begge halvdeler: tidsbudsjett, gjeldende siffer mot tette alternativer, og de innebygde fellene samlet.
- **Eksamensbelegg:** Metakapittel for hele MC-formen. Bygger på at kun bokstavsvaret teller og at **svaralternativene ligger tett** og er konstruert rundt typiske feil, slik at avrunding/faktor/fortegn avgjør. Prioritet: **perfekt** (dette er selve eksamensferdigheten).
- **Forkunnskaper/kryssbok:** hele boka i kortform; refererer til drillkapitlene 1.3–10.3 og 11.1.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (strategiske ferdigheter): **tidsbudsjett** (~6 min per spørsmål på 40 spm. på 4 t, med margin; hopp videre og merk usikre; planlegg for kretsprosess-klyngen i termohalvdelen); **avrundingsdisiplin** — behold 3–4 siffer gjennom hele regnekjeden, rund først til slutt, sammenlign med alternativenes avstand; **gjeldende siffer / måleusikkerhet** (kjenne): middelverdi, empirisk standardavvik ($N-1$), standardfeil $\delta x/\sqrt{N}$; **når alternativene er tette** → regn nøyaktig; når spredt → overslag godtas; **sjekk-før-svar-listen** (enhet, tierpotens, fortegn, faktor, kelvin); **de innebygde fellene samlet** (fra analysen §5): glemt rotasjonsledd (7/10), glemt Steiner, feil dreieimpuls-fortegn, $\gamma=b/2m$, forbyttet $C_V/C_P$, feil $\gamma$ (5/3 vs. 7/5), $\eta$ vs. $\varepsilon$, glemt fjerde potens ($T^4$), celsius i stedet for kelvin, $\kappa$ vs. $h$; **eliminasjonsstrategi** (utelukk urimelige alternativer ved dimensjon/størrelsesorden). **Rask vei til tall** er hele kapitlets tema. Ingen tung utledning.
- **Oppgavesjangre:** Blandet MC-diagnostikk: 8–10 korte spørsmål (blandet mekanikk og termofysikk) der fella er innebygd i avlederne, med forklaring på hvilken felle hvert galt alternativ representerer.
- **Typiske feil:** Alle §5-fellene, presentert som «hvilket galt alternativ ville du valgt hvis du gjorde denne feilen».
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 12.2: Øvingseksamen 1 — 40-spørsmålsmalen (standard)

- **id:** `tfy4115-12-2` · **number:** 12.2 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4115-12-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers flervalgseksamen etter standardmalen: ~40 spørsmål A–F, spm. 1–20 mekanikk, 21–40 termisk fysikk.
- **Eksamensbelegg/miks:** Speiler et typisk sett fra flervalgsæraen (2019–2020-form): **~40 spørsmål A–F med tette svaralternativer, kun bokstavsvaret teller, 1 poeng riktig / 0 feil**. Fordeling: **spm. 1–20 mekanikk** med **minst ett fra hver av** kinematikk (M10), skråplan m/friksjon (M1), rullende legeme (M3), støt/impuls (M6), treghetsmoment/Steiner (M4), dreieimpuls (M5), svingninger dempet (M7), pluss et utvalg fra {krumning/normalkraft, fysisk/konisk pendel, statikk, gravitasjon, terminalfart}; **spm. 21–40 termofysikk** med **minst ett fra hver av** gasslov/molekyltall (T1), frihetsgrader→$C_V/C_P/\gamma$ (T3), adiabat/prosess (T4/T8), entropi (T7), **kretsprosess+virkningsgrad (T5, gjerne som en klynge på 3–4 koblede spm.)**, varmepumpe/effektfaktor (T6), varmeledning (T9), **varmestråling $\sigma T^4$ (T10)**, pluss et utvalg fra {van der Waals, fasediagram, Clausius–Clapeyron, $v_\text{rms}$}, og **et numerisk iterasjonsspørsmål (T14) til slutt**. Alle oppgaver nyskrevne med egne tall. **Løsningsforslag i sensors ånd: avgjørende lov + få regnelinjer + bokstavsvar**, i `collapsible` per spørsmål, med markering av hvilken felle hvert galt alternativ representerer. `tip`-notat om tidsbudsjett (~6 min/spm.).
- **Oppgavesjangre:** M1, M3, M4, M5, M6, M7, M10 (+ utvalg) i spm. 1–20; T1, T3, T4, T5, T6, T7, T8, T9, T10, T14 (+ utvalg) i spm. 21–40. Full 40-spørsmålsmal med fast todeling.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 12.3: Øvingseksamen 2 — 40-spørsmålsmalen (tyngre varianter)

- **id:** `tfy4115-12-3` · **number:** 12.3 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4115-12-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i samme mal, vektet mot de tyngre variantene av kjerne-sjangrene og en ny tallkontekst gjennomgående.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal (1–20 mekanikk, 21–40 termo) som 12.2, men vektet mot de **tyngre variantene**: kinematikk med potens$\times$eksponential-vinkelfart og rundetelling, gliding→ren rulling, fysisk pendel med Steiner, konisk pendel; på termosiden en **full Otto-/Stirling-syklus som koblet klynge**, entropi ved irreversibel varmeoverføring, strålings-platebalanse mellom tre plater, van der Waals kritisk punkt, og fikspunktiterasjon med flere steg. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + få regnelinjer i `collapsible` per spørsmål, med felle-forklaring på avlederne; `tip`-notat om hvor de innebygde fellene sitter i akkurat dette settet.
- **Oppgavesjangre:** M1–M13 (utvalg, tyngre) i spm. 1–20; T1–T14 (utvalg, tyngre) i spm. 21–40. Full 40-spørsmålsmal.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 12.4: Øvingseksamen 3 — 40-spørsmålsmalen (generalprøve)

- **id:** `tfy4115-12-4` · **number:** 12.4 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4115-12-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett generalprøve som sammen med 12.2–12.3 dekker samtlige sjangre M1–M13/T1–T14 minst én gang — under fullt tidspress.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal, kalibrert som **generalprøve**: dekker de resterende sjangervariantene som ikke ble truffet i 12.2–12.3 (bl.a. effekt $P=Fv$, statikk/momentbalanse, terminalfart, satellitt/rakett, presesjon i mekanikken; kinetisk teori/$v_\text{rms}$, termisk utvidelse, strømmende medium, Wien, konveksjon-begrep, Clausius–Clapeyron i termodelen), i tillegg til hele kjernen. Svaralternativene er bevisst **ekstra tette** enkelte steder for å drille avrundingsdisiplin. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + få regnelinjer i `collapsible` per spørsmål; `tip`-notat om selvevaluering (hvilke sjangre traff du feil på → tilbake til hvilket drillkapittel). Sammen dekker 12.2–12.4 alle M-/T-sjangrene minst én gang.
- **Oppgavesjangre:** M1–M13 + T1–T14 (full dekning på tvers av de tre settene). Full 40-spørsmålsmal med fast todeling.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 12:** dekkes av de 3 øvingseksamenene (12.2–12.4) + MC-strategien (12.1) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | **16** | **18** |
| 1 | 1.1–1.3 | 26+22+16 = **64** | 22+20+8 = **50** |
| 2 | 2.1–2.3 | 24+26+16 = **66** | 20+24+8 = **52** |
| 3 | 3.1–3.3 | 24+18+14 = **56** | 20+16+8 = **44** |
| 4 | 4.1–4.4 | 26+24+18+16 = **84** | 24+22+16+8 = **70** |
| 5 | 5.1–5.3 | 24+22+16 = **62** | 22+20+8 = **50** |
| 6 | 6.1–6.3 | 24+26+16 = **66** | 22+24+8 = **54** |
| 7 | 7.1–7.3 | 24+26+16 = **66** | 22+24+8 = **54** |
| 8 | 8.1–8.3 | 26+22+16 = **64** | 24+20+8 = **52** |
| 9 | 9.1–9.3 | 22+24+16 = **62** | 20+22+8 = **50** |
| 10 | 10.1–10.3 | 20+18+14 = **52** | 18+16+8 = **42** |
| 11 | 11.1 | **18** | **14** |
| 12 | 12.1–12.4 | 16+6+6+6 = **34** | 14+0+0+0 = **14** |
| **Sum** | **37 kap.** | **710 ≥ 500 ✓** | **564 ≥ 500 ✓** |

**Kontrollsum mekanikk (Del 1–5):** quiz 64+66+56+84+62 = **332**; flashcards 50+52+44+70+50 = **266**.
**Kontrollsum termofysikk (Del 6–10):** quiz 66+66+64+62+52 = **310**; flashcards 54+54+52+50+42 = **252**.
**Del 0 + 11 + 12:** quiz 16+18+34 = **68**; flashcards 18+14+14 = **46**.
**Total:** quiz 332+310+68 = **710**; flashcards 266+252+46 = **564**.

**Hvorfor quiz-kvoten er bevisst høy (710):** TFY4115-eksamen ER en ren
flervalgseksamen med tette distraktorer, så **quizbanken er direkte
eksamenstrening** — hvert quizspørsmål er en mini-eksamensoppgave med realistisk
tette avledere (de vanlige regnefeilene som gale alternativer: glemt rotasjonsledd,
forbyttet $C_V/C_P$, feil $\gamma$, glemt $T^4$, feil fortegn). Derfor sikter boka
høyt (600–750-sjiktet), ikke på gulvet 500. Fordelingen speiler todelingen og
frekvensen: mekanikk-kjernen (Del 1–5) bærer 332 quiz og termofysikk-kjernen
(Del 6–10) bærer 310 — nesten symmetrisk, som eksamenens spm. 1–20 / 21–40.
Flashcards (564) er formel-, oppskrift- og felle-orienterte: hvert kort er enten en
kjerneformel (med markering av om den står på formelarket), et steg i en «rask vei
til tall»-oppskrift, eller en typisk felle. Fysikk er et regnefag med moderat
begrepsmengde, men rikt formel- og oppskriftsapparat over to fagfelt — derfor
ligger flashcards komfortabelt over gulvet uten å blåses opp.

### Prøver per del (4 per temadel 1–11, 44 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre. **Prøvekapittel-id:**
`tfy4115-<del>-prove`, chapterNumber `<del>.P`. Del 1–11 har hver ett prøvekapittel
med 4 prøver (44 prøver totalt); **minst én prøve per del er i MC-format** (tette
flervalgsspørsmål, kun bokstavsvar) for å speile eksamen, mens de øvrige kan vise
symbolsk løsning + rask vei til tall. Løsningsforslag i `collapsible` per oppgave,
med markering av felle-alternativene. Del 0 og 12 har ingen separate delprøver
(eksamenskart, og øvingseksamenene selv). Prøvekvotene per del står i sin helhet
under hver del i §3; samlet:

- **Del 1** (kinematikk): 1.A · 1.B · 1.C · 1.D (MC)
- **Del 2** (kraft/energi/rulling): 2.A · 2.B · 2.C · 2.D (MC)
- **Del 3** (støt/baner): 3.A · 3.B · 3.C · 3.D (MC)
- **Del 4** (rotasjon/statikk): 4.A · 4.B · 4.C · 4.D (MC)
- **Del 5** (svingninger): 5.A · 5.B · 5.C · 5.D (MC)
- **Del 6** (gass/ekvipartisjon): 6.A · 6.B · 6.C · 6.D (MC)
- **Del 7** (hovedsetninger/entropi): 7.A · 7.B · 7.C · 7.D (MC)
- **Del 8** (kretsprosesser): 8.A · 8.B · 8.C · 8.D (MC, koblet klynge)
- **Del 9** (varmetransport/stråling): 9.A · 9.B · 9.C · 9.D (MC)
- **Del 10** (faseoverganger): 10.A · 10.B · 10.C · 10.D (MC)
- **Del 11** (numerikk): 11.A · 11.B · 11.C · 11.D (MC)

### Øvingseksamener (3 komplette 4-timers MC-sett — kap. 12.2–12.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (12.2) | Standard 40-spm (2019–2020) | Spm. 1–20 mekanikk-kjerne, 21–40 termo-kjerne (m/kretsprosess-klynge + $\sigma T^4$ + numerikk til slutt); hver 100 %-sjanger minst én gang |
| Øvingseksamen 2 (12.3) | Tyngre varianter | Samme mal, tyngre varianter (rundetelling, gliding→rulling, fysisk/konisk pendel, Otto-/Stirling-klynge, platebalanse, van der Waals, fler-stegs fikspunkt) |
| Øvingseksamen 3 (12.4) | Generalprøve (full dekning) | Samme mal + de resterende sjangervariantene (effekt, statikk, terminalfart, rakett, presesjon; $v_\text{rms}$, termisk utvidelse, Clausius–Clapeyron, Wien); ekstra tette alternativer |

Til sammen dekker de tre settene samtlige sjangre M1–M13/T1–T14 minst én gang,
alle med den faste todelingen (spm. 1–20 mekanikk, 21–40 termofysikk) og tette
svaralternativer der kun bokstavsvaret teller.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t ren flervalg, ~40 spm. A–F, kun
   bokstavsvaret teller, 1 poeng riktig / 0 feil, hjelpemiddelkode C med Rottmann +
   fysikk-formelark), den **faste todelingen** (spm. 1–20 mekanikk, 21–40
   termofysikk) og prognosen fra kap. 0.1. **Kildeforbehold:** kalibreringen bygger
   på arkivet 2004–2020; nyere sett bør skaffes for å bekrefte formen.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (skråplan m/friksjon, rullende legeme/energibevaring,
   treghetsmoment/Steiner, dreieimpuls, kinematikk, dempede svingninger; gasslov,
   frihetsgrader→$C_V/C_P/\gamma$, hovedsetninger/entropi, **kretsprosess+
   virkningsgrad/effektfaktor**, varmeledning, **varmestråling $\sigma T^4$**),
   *kunne* (krumning/normalkraft, støt-baner, fysisk/konisk pendel, statikk,
   kinetisk teori/$v_\text{rms}$, van der Waals/fasediagram, Clausius–Clapeyron,
   numerisk iterasjon), *kjenne* (gravitasjon/rakett, presesjon, terminalfart,
   effekt, termisk utvidelse, strømmende medium, Wien, konveksjon, måleusikkerhet).
3. **Rask vei til tall** — «MC-oppskriftene» fra drillkapitlene (1.3, 2.3, 3.3,
   4.4, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.1) i kortform: for hver kjerne-sjanger,
   den korteste feilfrie regnekjeden fra tall til bokstavsvar.
4. **Sensorreglene og MC-strategien** — kun bokstavsvaret teller; alle spm. likt;
   **svaralternativene ligger tett** og er bygget rundt typiske feil →
   avrundingsdisiplin (behold 3–4 siffer, rund til slutt), tidsbudsjett
   (~6 min/spm., planlegg for kretsprosess-klyngen), hopp-og-merk, eliminasjon ved
   dimensjon/størrelsesorden (kap. 12.1).
5. **Feilkatalogen** — de typiske fellene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: glemt rotasjonsledd (7/10) → 2.2;
   glemt Steiner → 4.1; fortegn på dreieimpuls → 4.2; $\gamma=b/2m$ → 5.2; forbyttet
   $C_V/C_P$ / feil $\gamma$ → 6.2; prosess-forveksling → 7.1; entropi som ikke-
   tilstandsfunksjon → 7.2; $\eta$ vs. $\varepsilon$ → 8.2; $\kappa$ vs. $h$ → 9.1;
   glemt fjerde potens ($T^4$) → 9.2; celsius i stedet for kelvin → 6.1/7.1/10.2.
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **hentes fra formelark** (konstanter,
   treghetsmomenter, van der Waals-/Clausius–Clapeyron-/entropiformene, $\sigma$,
   Wien-$b$). Treningsråd: løs alltid oppgaver MED formelarket ved siden av, slik
   eksamen er — boka trener *rask, feilfri bruk*, ikke pugg.
7. **Hva du IKKE trenger** — eksplisitt: **elektromagnetisme** (0 treff — den
   skarpe kontrasten til TFY4125), bølger, optikk, fluid/Bernoulli, relativitet,
   atom-/kjernefysikk (0 treff, aldri pensum). MEN: termofysikk er **kjernepensum**
   (halve settet), ikke tillegg — og numerisk iterasjon lever fremdeles (Del 11).
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → mekanikk (1 → 2 → 3 → 4 → 5) → termofysikk (6 → 7 → 8 → 9 → 10) →
   numerikk (11) → MC-strategi (12.1 spres utover) → de tre øvingseksamenene
   (12.2–12.4) de siste ukene under fullt tidspress (240 min); drillkapitlene
   brukes som repetisjon rett før eksamen.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `tfy4115` med alle 37
   kapitler + 11 prøvekapitler (id/number/title/description/estimatedMinutes/
   topics/prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-hoyskole.ts` (append); `sectionNames` fra
   §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under NTNU, navn «TFY4115 Fysikk».
2. **Del 0** (0.1) — etablerer sjangernavnene M1–M13/T1–T14, todelingen,
   frekvenstallene, formelark-strategien, kildeforbeholdet (2020) og MC-formen som
   resten av boka refererer til.
3. **Mekanikk-kjeden Del 1 → 2 → 3 → 4 → 5** (faglig avhengighet: kinematikk →
   kraft/energi → bevegelsesmengde → rotasjon → svingninger). 4.1 (treghetsmoment/
   Steiner) MÅ bygges før 5.1 (fysisk pendel bruker $I_A$) og før 4.2/4.3.
4. **Termofysikk-kjeden Del 6 → 7 → 8 → 9 → 10** (gasslov/ekvipartisjon →
   hovedsetninger/entropi → kretsprosesser → varmetransport/stråling →
   faseoverganger). 6.2 ($C_V/C_P/\gamma$) MÅ bygges før 7.1 (prosesser) og 8.1
   (kretsprosess). 9.2 (Plancks lov) leder til 11.1.
5. **Del 11** (numerikk) — avhenger av 9.2 (Planck→Wien-fikspunkt); bygges etter Del 9.
6. **Del 12 til slutt** — MC-strategien (12.1) og de tre øvingseksamenene
   (12.2–12.4) gjenbruker HELE boka; bygges av én agent som leser hele skjelettet.
   Sørg for at 12.2–12.4 til sammen dekker alle sjangre M1–M13/T1–T14, med
   todelingen (1–20 mekanikk, 21–40 termo) og et numerisk spørsmål i settene.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   (`tfy4115-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
   fastsettes i BYGGEKONTRAKT.md (fase 3).

### Batching-forslag til byggebølgen (én agent per del, jf. produksjonsløype fase 4)
- Agent A: Del 0 + Del 1 (+ prøve 1)
- Agent B: Del 2 + Del 3 (+ prøver 2, 3)
- Agent C: Del 4 + Del 5 (+ prøver 4, 5) — leverer 4.1 som 5.1 avhenger av
- Agent D: Del 6 + Del 7 (+ prøver 6, 7) — leverer 6.2 som Del 7/8 avhenger av
- Agent E: Del 8 (+ prøve 8) — kretsprosessen (signatursjanger), les 6.2/7.1
- Agent F: Del 9 + Del 11 (+ prøver 9, 11) — 9.2 leder til 11.1
- Agent G: Del 10 (+ prøve 10)
- Agent H: Del 12 (les HELE skjelettet for øvingseksamenene)

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\mathbf{F}$, $\mathbf{v}$, $\mathbf{p}$ (bevegelsesmengde),
      $\mathbf{L}$, $\omega_0$, $I$ (treghetsmoment); $p$ (trykk), $T$ (temperatur),
      $\gamma$ (adiabateksponent), $R$ (gasskonstant), $S$ (entropi), $\sigma$,
      $\kappa$, $\varepsilon$ (effektfaktor)).
- [ ] **Symbolkollisjon-disiplin (tekstsøk over alle tfy4115-filer):** i mekanikk-
      delen (Del 1–5) betyr $p$ bevegelsesmengde, $T$ periode, $\gamma=b/2m$
      demping, $S$ taustrekk; i termodelen (Del 6–11) betyr $p$ trykk, $T$
      temperatur (kelvin), $\gamma=C_P/C_V$, $S$ entropi. Hvert delkapittels
      Symbol- og formelliste MÅ klargjøre betydningen som gjelder der; **aldri
      begge betydninger uklargjort i samme delkapittel.**
- [ ] **Avgrensning (forbudt som satsingsstoff — tekstsøk):** **elektromagnetisme**
      (felt/potensial/kondensator/krets/magnetfelt/induksjon), bølger, optikk,
      fluid/Bernoulli, relativitet, kjernefysikk — 0 treff utenfor Del 0-
      avgrensningen. (Termofysikk er derimot KJERNEPENSUM — ikke merk den som
      historisk/utfaset noe sted.)
- [ ] **Rask vei til tall + avrundingsdisiplin:** HVERT teori-/drillkapittel har et
      tydelig merket «Rask vei til tall (MC-oppskrift)»-avsnitt OG en avrundings-/
      faktorfelle-`warning`; alle talleksempler beholder 3–4 siffer og runder til slutt.
- [ ] **Kelvin-disiplin (termodelen):** ALLE gasslov-, adiabat-, entropi-,
      Clausius–Clapeyron- og strålingsutregninger bruker kelvin; ingen celsius i
      $T^4$, $\ln(T_2/T_1)$ eller $TV^{\gamma-1}$.
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen
      konstantverdier ($k_B$, $R$, $\sigma$, $b$, $G$) presenteres som puggestoff.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet på
      hvert tallsvar og riktig antall gjeldende siffer — boka *modellerer*
      sensorkravet (tette alternativer).
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (KUN til
      kapitler som finnes — **fysikk2-/r2-lenkene i §3 må verifiseres mot
      metadataene før bygging** (samme sett som TFY4125-skjelettet verifiserte
      7. juli 2026); **termofysikkens forkunnskaper (Kjemi 1 / Fysikk 1-nivå) og
      fys1120/fys1001 skal IKKE lenkes, kun refereres i klartekst**), `collapsible`
      Symbol- og formelliste, 2–4 eksempler (siste på eksamensnivå), Typiske feil-
      `warning`, 6–12 øvinger med `solution` + `hints` (stigende), repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + gjennomregnet MC-case +
      12–15 oppgaver på eksamensnivå.
- [ ] **MC-kalibrering av quiz:** quizspørsmålene er numeriske flervalgsspørsmål med
      realistisk tette avledere (de vanlige regnefeilene som gale alternativer);
      `options[0]` = riktig svar (runtime stokker).
- [ ] **Quiz-sum ≥ 710 og flashcard-sum ≥ 564** per kvotetabellen i §4
      (kontrollsummér per del; mekanikk 332/266, termo 310/252). Quiz bevisst høyt
      (direkte eksamenstrening).
- [ ] **Prøver:** 4 per temadel 1–11 (44 stk, `tfy4115-<del>-prove`) — minst én per
      del i MC-format + 3 øvingseksamener (12.2–12.4) som til sammen dekker
      sjangrene M1–M13/T1–T14; hver øvingseksamen følger 40-spørsmålsmalen med
      todelingen (1–20 mekanikk, 21–40 termofysikk) og et numerisk spørsmål.
- [ ] **Todeling og signatursjanger:** eksamensstrukturen (mekanikk 1–20, termo
      21–40) er gjengitt i Del 0 og styrer øvingseksamenene; kretsprosessen (Del 8)
      er bygget med minst én koblet MC-klynge (3–4 delspørsmål); varmestråling
      ($\sigma T^4$, Del 9) er med i minst én øvingseksamen.
- [ ] **Kildeforbehold:** Del 0 sier eksplisitt at kalibreringen bygger på
      2004–2020 og at nyere sett bør skaffes for å bekrefte formen.
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres
      ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.


---

## RETTELSER 30. juli 2026 (byggeleder, verifisert numerisk)

To fortegnsfeil i dette skjelettet er rettet. Begge er reell fysikk, ikke
skrivefeil, og begge ville gitt en umulig konklusjon i boka:

1. **Elastisk støt** sto som $v_1' = \frac{M-m}{M+m}v_0$. Riktig er
   $\frac{m-M}{m+M}$. Med skjelettets form ville en lett kule fortsatt
   FRAMOVER etter å ha truffet en tung i ro. Kontrollert ved å løse
   bevegelsesmengde- og energibevaring symbolsk med sympy: for $m=1$, $M=5$,
   $v_0=10$ gir bevaringslovene $v_1' = -6{,}667$, mens skjelettets form gir
   $+6{,}667$.
2. **Rakettligningen** sto som $m = m_0 e^{(v-v_0)/u}$. Riktig er
   $m = m_0 e^{-\Delta v/u}$, siden $\Delta v = u\ln(m_0/m)$. Med skjelettets
   form ville massen ØKT når farten øker: $m_0 = 1000$ kg, $u = 3000$,
   $\Delta v = 2000$ gir 513 kg riktig, mot 1 948 kg med feilformen.

Del 2+3-agenten oppdaget begge, brukte korrekt form, gjorde fortegnet til et
eksplisitt læringspunkt, og brukte skjelettets feilform som *regnet distraktor*.

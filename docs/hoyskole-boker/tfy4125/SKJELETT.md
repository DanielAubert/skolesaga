# Bokskjelett: TFY4125 Fysikk — eksamensrettet lærebok (NTNU)

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
> `EKSAMENSANALYSE.md` (ca. 30 unike eksamenssett 2004–2025; alle løsningsforslag
> 2022–2025 lest fullstendig i MC-æraen, 2017/2019/2020/2021 grundig, eldre
> temaregistrert). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke i sin helhet her. Alle mønstereksempler i dette skjelettet er omskrevne —
> de kan varieres videre, men aldri kopieres ordrett inn som oppgaver. Formlene er
> standard fysikknotasjon og ikke opphavsrettslig beskyttet.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tfy4125` |
| Tittel | **TFY4125 Fysikk — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon | NTNU (Norges teknisk-naturvitenskapelige universitet) |
| Arketype | Regnefag (kvantitativt fag med faste flervalgs-oppgavemaler) |
| Antall kapitler | **36** (2 eksamenskart/måling + 27 tema + 1 historisk appendiks + 6 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 2 800 min innholdskapitler + ≈ 1 170 min prøver ≈ 66 timer** |
| Quiz totalt | **686** (krav ≥500 — bevisst høyt, se §4) |
| Flashcards totalt | **544** (krav ≥500) |

**Pitch (ett avsnitt):** TFY4125-eksamen er i dag en **ren flervalgseksamen med
ca. 40 spørsmål (A–F)** med en helt fast todeling: **spørsmål 1–20 er
dynamikk/mekanikk, 21–40 er elektromagnetisme**, og de aller første spørsmålene
er alltid **måling/statistikk** (middelverdi, standardavvik, gjeldende siffer).
Kun det endelige **bokstavsvaret teller** — det gis ingen uttelling for oppsett
eller mellomregning. Svaralternativene ligger **tett** (0,11 / 0,21 / 0,31 …), så
én glemt faktor, ett feil fortegn eller én avrundingsfeil lander på feil
alternativ. Denne boka er derfor kalibrert mot noe annet enn en klassisk
utledningsbok: **den drilles mot en rask, feilfri vei til tallsvaret** (MC-modus),
i tillegg til den symbolske forståelsen. Ryggraden er de temaene som er tilnærmet
100 % i hvert sett: kinematikk fra en gitt $v(t)/\omega(t)$ (derivér for
maks-akselerasjon, integrér for strekning/vinkel, tell hele runder som
$\lfloor \varphi/2\pi \rfloor$), rullende kompakt kule med energibevaring
($K=\tfrac{7}{10}mv^2$), Newton på skråplan med friksjon,
treghetsmoment/Steiner/dreieimpuls, dempede svingninger, elektrostatisk
superposisjon ($\mathbf{E}$, $V$, dipolmoment $p$, energi $U$),
kondensatorer/dielektrikum/kretser, ladd partikkel i $B$ ($r=mv/qB$), magnetisk
dipol og — signaturgrepet — **RLC-svingekretsen løst via den mekaniske analogien**
($L\leftrightarrow m$, $1/C\leftrightarrow k$, $R\leftrightarrow b$).

**Kritisk rammebetingelse (gjelder HELE boka) — formelark:** Eksamen har
hjelpemiddelkode **C**: bestemt, enkel kalkulator + trykt/håndskrevet
formelmateriell + **utdelt formelark** (verifisert fra 2017-settet: konstanter,
kinematikk, energi, rotasjon inkl. Steiner, svingningslikning, EM-lover på
integralform, Biot–Savart, Lorentz, samt de historiske termoformlene). Boka skal
derfor ALDRI fremstille formler og konstanter som puggestoff. Skillet er:
**«må kunne brukes aktivt»** (velges, kombineres, deriveres/integreres og settes
inn under tidspress — kjerneverktøyene i kapitlenes innholdskontrakter) vs.
**«hentes fra formelarket»** (konstantverdier som $\varepsilon_0$, $\mu_0$, $G$,
$e$, $m_e$; Biot–Savart-integranden; adiabat-/entropiformlene). Hvert
delkapittels Symbol- og formelliste markerer hva som står på formelarket. Boka
trener **bruk og rask utregning**, ikke pugg.

**Kritisk kalibreringsregel (gjelder HELE boka) — rask, feilfri vei til tall:**
Fordi kun bokstavsvaret teller og alternativene ligger tett, skal HVERT
teori- og drillkapittel gi to spor for hver kjerne-sjanger:
1. **Symbolsk utledning med intuisjon** (forståelse; nødvendig for eldre
   øvingssett og for å ikke huske feil formel).
2. **«Rask vei til tall» (MC-oppskrift):** den korteste feilfrie regnekjeden fra
   oppgitte tall til bokstavsvaret — hvilken lov, hvilken ene regnelinje, hvilke
   verdier fra formelarket, hvor mange siffer å beholde. Dette er arbeidsformen
   under tidspress og skal stå som et eget, tydelig merket avsnitt/eksempel.
Løsningsforslaget i sensors ånd er **den avgjørende loven + én regnelinje**.

**Kritisk notasjonsregel (gjelder HELE boka — eksamenssettenes notasjon):**
- **Vektor vs. skalar:** kraft $\mathbf{F}$, felt $\mathbf{E}$/$\mathbf{B}$,
  fart $\mathbf{v}$, dreieimpuls $\mathbf{L}$, dipolmoment $\mathbf{p}$/$\mathbf{m}$
  er vektorer; energi $K$/$U$, potensial $V$, ladning $Q$, treghetsmoment $I$,
  fart $v=|\mathbf{v}|$ er skalarer. **Fortegn og retning** på vektorkomponenter
  (særlig dreieimpuls $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$
  og feltbidrag) er et yndet flervalgspoeng — behandles eksplisitt.
- **Symbolapparat:** $\omega_0=\sqrt{k/m}$ (egen vinkelfrekvens), $\gamma$
  (dempingskoeffisient — mekanisk $\gamma=b/2m$, elektrisk $\gamma=R/2L$),
  $\mu$ (friksjonskoeffisient i mekanikk; permeabilitet $\mu=\mu_0\mu_r$ i EM —
  aldri i samme sammenheng), $\varepsilon=\varepsilon_r\varepsilon_0$
  (permittivitet), $\tau$ (tidskonstant $RC$ / karakteristisk tid),
  $\lambda$ (linjetetthet — masse $\lambda(x)$ i mekanikk, ladning $\lambda=Q/L$
  i EM). Symbollisten i HVERT delkapittel definerer hvilke symboler som gjelder der.
- **Enheter og siffer:** alle tallsvar med SI-enhet, riktig tierpotens og
  **nok gjeldende siffer gjennom hele regnekjeden** (rund først til slutt) — se
  avrundingsdisiplinen under.
- **Avrundingsdisiplin (eget drillmål):** fordi alternativene ligger tett, er
  for tidlig avrunding en selvstendig feilkilde. Hvert kapittel har en
  **`warning`** om nettopp de avrundings-/faktorfellene som lander på
  nabo-alternativet i akkurat det temaet, og kap. 11.1 samler dette til en egen
  MC-strategi.

**Bevisst utelatt / nedprioritert (begrunnes i Del 0):**
- **Termofysikk** (gasslov, 1. hovedsetning, Carnot, entropi, TS-diagram): fast
  tredjeblokk 2004–2021, men **faset helt ut fra 2022** (0 av 8 nyere sett).
  Behandles som **kompakt, tydelig merket historisk appendiks** (Del 10, prioritet
  **kjenne**) — kun for kandidater som øver på eldre sett, ALDRI som kjernepensum.
- **Numeriske metoder / Python** (Euler-diskretisering): hyppig 2014–2017, borte
  fra 2020. **Utelatt helt** (nevnes bare som historisk fotnote i Del 0/10).
- **Bølger og interferens, geometrisk/bølgeoptikk (linser, Snell), fluidmekanikk
  (Bernoulli, oppdrift, viskositet), relativitet, atom-/kvante-/kjernefysikk:**
  **0 treff i hele arkivet** — aldri pensum i TFY4125, skal IKKE bygges inn.
  (Dette skiller TFY4125 skarpt fra typiske «innføring i fysikk»-emner ved andre
  institusjoner; nevnes eksplisitt i Del 0 så studenten ikke sløser tid.)

**Forhold til søsterbøkene:** TFY4125 bygger på mekanikken og
elektromagnetismen i **Fysikk 2** (VGS) og forutsetter derivasjon/integrasjon fra
**R2**. Der forkunnskaper dekkes av eksisterende kapitler, lenkes de:
mekanikk-fundamentet i [Fysikk 2, kapittel 1–2](/fysikk2/fysikk2-1-2) og
EM-fundamentet i [Fysikk 2, kapittel 3–5](/fysikk2/fysikk2-3-1); regneteknikk
i [R2](/r2/r2-2-1). Søsteremnene **FYS1120 Elektromagnetisme** (UiO, på
skjelett) og **FYS1001 Innføring i fysikk** dekker beslektet stoff; der de er
relevante refereres de i **klartekst** (uten lenke) til de er bygget. TFY4125 og
FYS1120 overlapper i EM-halvdelen, men TFY4125 er MC-drillet mot tallsvar mens
FYS1120 belønner symbolsk utledning — hold notasjonene adskilt.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen), IKKE frekvens; frekvensen
styrer *omfanget*. Todelingen dynamikk (Del 1–5) / elektromagnetisme (Del 6–9)
speiler den faste eksamensstrukturen (spm. 1–20 / 21–40). «Må beherskes
perfekt»-temaer får teorikapitler + eget drillkapittel; «bør kjenne til» får ett
kompakt kapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og måling | 2 | Prioriteringsverktøyet + måle-/usikkerhetsmodulen (åpningsspm. 1–2, ~88 %). Etablerer MC-formen, todelingen og sjangerkatalogen D1–D12/E1–E12. |
| 1 | Kinematikk og krum bane | 3 | Kinematikk fra $v(t)/\omega(t)$ **100 %** (ryggraden), banevinkel **100 %**, krumning/normalkraft **88 %** → perfekt → 2 teori + drill. |
| 2 | Kraft, energi og rulling | 3 | Skråplan m/friksjon **100 %**, rullende kule/energibevaring **100 %** → perfekt → 2 teori + drill. 7/10-fella bor her. |
| 3 | Bevegelsesmengde, støt og baner | 3 | Støt/impuls **88 %** (perfekt), gravitasjon/rakett **38 %** (kunne, kompakt) → 2 teori + drill. |
| 4 | Rotasjon: treghetsmoment og dreieimpuls | 3 | Treghetsmoment/massesenter/Steiner **100 %**, dreieimpuls **100 %** → perfekt → 2 teori + drill. Den tyngste dynamikk-kjernen. |
| 5 | Svingninger | 3 | Egenfrekvens **100 %**, dempet amplitude **100 %**, fysisk pendel **63 %** → perfekt → 2 teori + drill. Analogigrunnlag for RLC (Del 9). |
| 6 | Elektrostatikk og superposisjon | 4 | Coulomb-superposisjon/dipol/energi **100 %** (perfekt), kontinuerlig ladning/plan **50–63 %** (kunne) → 3 teori + drill. |
| 7 | Kondensatorer, dielektrikum og kretser | 3 | Kondensator/dielektrikum **75–100 %**, motstandskretser **100 %**, RC **88 %** → perfekt → 2 teori + drill. |
| 8 | Magnetfelt og ladd partikkel | 4 | Ladd partikkel i $B$ **100 %**, $B$ fra strøm **100 %**, magnetisk dipol **100 %** → perfekt → 3 teori + drill. |
| 9 | Induksjon og RLC-svingekretsen | 3 | RLC via mekanisk analogi **100 %** (signatur), induksjon/induktans **63 %**, vekselstrøm **63 %** → perfekt → 2 teori + drill. |
| 10 | Historisk appendiks: termofysikk | 1 | Faset ut 2022; **kjenne** — kun for eldre øvingssett. Ett kompakt, tydelig merket kapittel. |
| 11 | Eksamenstrening | 6 | MC-strategi/avrundingsdisiplin + 3 komplette 40-spørsmåls øvingseksamener etter den faste malen (+ 2 reserveplasser slått sammen: se under). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og måling |
| 1 | Kinematikk og krum bane |
| 2 | Kraft, energi og rulling |
| 3 | Bevegelsesmengde, støt og baner |
| 4 | Rotasjon: treghetsmoment og dreieimpuls |
| 5 | Svingninger |
| 6 | Elektrostatikk og superposisjon |
| 7 | Kondensatorer, dielektrikum og kretser |
| 8 | Magnetfelt og ladd partikkel |
| 9 | Induksjon og RLC-svingekretsen |
| 10 | Historisk appendiks: termofysikk |
| 11 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Todeling som organiserende prinsipp.** Delene er gruppert i to blokker
   (dynamikk 1–5, EM 6–9) som eksplisitt speiler eksamenens faste todeling
   (spm. 1–20 / 21–40). DNA-en ordner bare etter avhengighet; her legges
   todelingen oppå, fordi den er en så sterk, stabil struktur i faget at den er
   et selvstendig lesehjelpemiddel.
2. **Alle 9 drillkapitler ligger inne i temadelene sine** (1.3, 2.3, 3.3, 4.3,
   5.3, 6.4, 7.3, 8.4, 9.3), ikke samlet i siste del, fordi sjangrene er
   temaspesifikke gjengangere som må drilles rett etter teorien — og i et
   MC-fag er sjangerdrillen selve produktet. Del 11 beholder den *tverrgående*
   MC-strategien (avrundingsdisiplin, tidsbudsjett) og øvingseksamenene.
3. **Egen MC-strategi/avrundingsdisiplin-kapittel (11.1)** er et tillegg utover
   DNA-en, begrunnet i at tette svaralternativer gjør avrunding og faktorfeil til
   selvstendige, gjennomgående feilkilder som fortjener systematisk trening.
4. **Quizbanken er direkte eksamenstrening.** Fordi eksamen ER flervalg med tette
   distraktorer, skal quizspørsmålene bygges som numeriske MC-spørsmål med
   realistisk tette avledere (feil-alternativene er nettopp de vanlige
   regnefeilene: glemt rotasjonsledd, feil fortegn, $R/2C$ i stedet for $R/2L$,
   for tidlig avrunding). Quiz-kvoten er derfor bevisst satt **høyt** (686, se §4)
   — hvert quizspørsmål er en mini-eksamensoppgave.
5. **Historisk appendiks (Del 10) og numerikk-utelatelse.** Termofysikk er skilt
   ut som ett tydelig merket kjenne-kapittel (ikke kjernepensum), og numeriske
   Python-metoder er helt utelatt — begge dokumenterte utfasinger. Kontrast til
   FYS1120, der numerikk er nivå 1; i TFY4125 er det borte.

**Eksamensstrukturen (fast — gjentas i Del 0 og styrer øvingseksamenene):**
ca. 40 spørsmål A–F, alle teller likt (~1 poeng), kun bokstavsvaret teller.
**Spm. 1–2:** måling/statistikk. **Spm. 1–20:** dynamikk. **Spm. 21–40:**
elektromagnetisme. Nesten hvert sett dekker hele bredden i begge halvdeler.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerkodene refererer til
oppgavetype-katalogen i bokas Del 0 (gjengitt der fra analysen §3):
**Dynamikk** — D1 kinematikk fra $v(t)/\omega(t)$, D2 banevinkel, D3 rullende
kule/energibevaring, D4 normalkraft/krumning, D5 skråplan m/friksjon, D6
bevegelsesmengde/støt, D7 massesenter/treghetsmoment/Steiner, D8 dreieimpuls/
rulling, D9 svingninger, D10 gravitasjon/bane/rakett, D11 statikk, D12 måling.
**EM** — E1 elektrostatisk superposisjon (E,V,p,U), E2 kontinuerlig ladning, E3
ladde plan/dielektrikum, E4 kondensatorer, E5 likestrømskretser, E6 RC-krets, E7
ladd partikkel i $B$, E8 magnetfelt fra strøm, E9 magnetisk dipol, E10 induksjon,
E11 vekselstrøm/faser, E12 RLC via mekanisk analogi. **Historisk** — H1
termofysikk. Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

Hvert teorikapittel følger kapittel-DNA-en, inkludert Eksamensvinkel-`tip`,
Forkunnskaper-blokk med kryssbok-lenker og `collapsible` **Symbol- og formelliste**
rett etter (per delkapittel — ALLE symboler og formler forklares, aldri arv fra
tidligere kapittel — med markering av hva som står på formelarket). Hvert
kapittel har både **symbolsk utledning** og en tydelig merket **«Rask vei til
tall» (MC-oppskrift)**, samt en **avrundings-/faktorfelle-`warning`**.

---

### Del 0 — Eksamenskart og måling

#### Kapittel 0.1: Eksamenskartet: slik testes TFY4125

- **id:** `tfy4125-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (ren flervalg, 40 spm., fast todeling), temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2004–2025. Skal gjengi: (i) **formen:** 4 timers skriftlig skoleeksamen, hjelpemiddelkode C (enkel kalkulator + formelmateriell + **utdelt formelark**), karakter A–F; **ren flervalg med ca. 40 spørsmål A–F**, alle teller likt, **kun bokstavsvaret teller** (ingen delpoeng). (ii) **Den faste strukturen:** spm. 1–2 måling/statistikk, spm. 1–20 dynamikk, spm. 21–40 elektromagnetisme. (iii) **Temafrekvens-tabellen** (fra analysen §2A): dynamikk-kjernen (kinematikk fra $v(t)/\omega(t)$, banevinkel, rullende kule m/energibevaring, skråplan m/friksjon, treghetsmoment/Steiner, massesenter, dreieimpuls, svingninger, dempet svingning) alle **100 %**; normalkraft/krumning og støt og måling **~88 %**; gliding→rulling **75 %**, fysisk pendel **63 %**; terminalfart/satellitt/rakett/prosjektil **~38 %**; effekt/statikk/resonans **~25 %**. EM-kjernen (Coulomb-superposisjon, ladningsenergi, dipolmoment, kondensator/dielektrikum, motstandskretser, ladd partikkel i $B$, $B$ fra ring/solenoide, magnetisk dipol, induktans, RLC-analogien) alle **100 %**; RC **88 %**, dielektrikum **75 %**, kontinuerlig ladning/vekselstrømseffekt/induksjon **63 %**, ladde plan **50 %**. (iv) **Utviklingen (tabell fra §1):** hybrid (2004–13) → flervalgstung m/numerikk (2014–17) → åpen utledning (2018–21) → ren MC (2022→); termofysikk og numerikk faset ut fra 2022. (v) **Bevisst utelatt med begrunnelse:** termofysikk (historisk appendiks, kjenne), numerikk/Python (utelatt), og — eksplisitt — bølger/optikk/fluid/relativitet/kjernefysikk (0 treff, aldri pensum; ikke sløs tid). (vi) **Sensorens metaregler i MC-æraen:** kun endelig bokstavsvar teller; alle spm. likt; **svaralternativene ligger tett** → avrunding/faktor/fortegn avgjør; løsningsforslaget = avgjørende lov + én regnelinje. (vii) **Formelark-strategien:** hva som må kunne *brukes/utledes* vs. *hentes*.
- **Innholdskontrakt:** Oppgavetype-katalogen D1–D12/E1–E12 presenteres som studentens sjekkliste med frekvens per sjanger og hvilken halvdel (1–20 vs. 21–40) den hører til. Prognosen for neste sett: 40 spm. A–F etter malen. **Leseplan:** dynamikk-kjernen (Del 1–2, 4–5) og EM-kjernen (Del 6–9) er «perfekt»-stoffet og bærer 60–70 % av settet; Del 3 og de kompakte kunne-kapitlene sikrer øvre karakter; Del 10 (termofysikk) leses KUN hvis man øver på sett før 2022. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Sett opp et 4-timers tidsbudsjett for 40 MC-spørsmål — hvor mange minutter per spørsmål, når hopper du videre, og hvorfor er måle-/statistikkspørsmålene 1–2 de raskeste sikre poengene?».
- **Typiske feil:** Metafeilene: lese termofysikk/bølger/optikk som om det er pensum (det er det ikke); tro at delpoeng finnes (gjør ikke — bare tallsvaret); avrunde for tidlig og lande på nabo-alternativet; bruke tid på symbolsk eleganse når bare tallet teller.
- **Quiz: 12 · Flashcards: 14** (form, todeling, frekvenser, metaregler, sjangerkatalog, hva som er utelatt)

#### Kapittel 0.2: Måling, usikkerhet og gjeldende siffer

- **id:** `tfy4125-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Middelverdi, standardavvik/standardfeil og riktig antall gjeldende siffer — de faste åpningsspørsmålene 1–2.
- **Eksamensbelegg:** Sjanger D12 i **~88 %** av de nyere settene, alltid som **åpningsspørsmål (spm. 1–2)**. Signatur: gitt en kort måleserie, finn middelverdi og standardavvik, eller oppgi et svar med riktig antall gjeldende siffer. Rask, sikker poenghøsting. Prioritet: **kunne** (men høyfrekvent og lett → prioriter som «gratis» poeng).
- **Forkunnskaper/kryssbok:** ingen fysikk-forkunnskap; regneteknikk fra [Repetisjon av derivasjon](/r2/r2-2-1) er ikke nødvendig her. (Statistikkgrunnlag forutsettes elementært; refereres i klartekst.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: middelverdi $\langle x\rangle = \frac{1}{N}\sum_i x_i$; **empirisk standardavvik** $\delta x = \sqrt{\frac{1}{N-1}\sum_i (x_i-\langle x\rangle)^2}$ (merk $N-1$, ikke $N$); standardfeil (standardavvik til middelverdien) $\delta\langle x\rangle = \delta x/\sqrt{N}$; **gjeldende siffer** (usikkerheten bestemmer antall siffer i svaret — rund usikkerheten til 1–2 siffer, tilpass svaret); feilforplantning $\Delta f = \sqrt{\sum_i (\partial f/\partial x_i)^2 \Delta x_i^2}$ (står på formelarket — gjenkjennes, brukes ved behov). **Rask vei til tall (MC-oppskrift):** for standardavvik — regn $\langle x\rangle$, summer $(x_i-\langle x\rangle)^2$, del på $N-1$, ta rot; sjekk om oppgaven vil ha $\delta x$ eller $\delta\langle x\rangle$ (faktor $1/\sqrt{N}$ er en klassisk avleder). **Utledning som kreves aktivt:** ingen tung utledning; forklar hvorfor $N-1$ (frihetsgrader) kort.
- **Oppgavesjangre:** D12. Mønstereksempel: «Fem målinger av en pendelperiode ga 2,01, 1,98, 2,04, 1,99 og 2,03 s. Finn middelverdien og standardavviket, og oppgi periodetiden med riktig antall gjeldende siffer.»
- **Typiske feil (analysen §5):** Dele på $N$ i stedet for $N-1$; forveksle standardavvik $\delta x$ og standardfeil $\delta\langle x\rangle$ (glemme/legge til $1/\sqrt{N}$); oppgi for mange gjeldende siffer i svaret; avrunde middelverdien for tidlig før kvadratsummen.
- **Quiz: 20 · Flashcards: 14**

---

### Del 1 — Kinematikk og krum bane *(prioritet: PERFEKT)*

#### Kapittel 1.1: Kinematikk fra fartsfunksjon — derivér, integrér, tell runder

- **id:** `tfy4125-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Fra en gitt $v(t)$ eller $\omega(t)$: maks-akselerasjon (ofte i $t=0$), strekning/vinkel ved integrasjon, og antall hele omdreininger $\lfloor\varphi/2\pi\rfloor$.
- **Eksamensbelegg:** Sjanger D1 i **100 %** av settene — ryggraden i dynamikkhalvdelen, ofte flere spørsmål. Signatur: eksponentiell fartsmodell $v=v_0(1-e^{-t/\tau})$ eller $v=v_0 e^{-t/\tau}$; deriver for akselerasjon (maks nesten alltid i $t=0$), integrer for strekning/vinkel, tell hele runder. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** [Repetisjon av derivasjon](/r2/r2-2-1) og [Bestemt integral som grenseverdi](/r2/r2-2-4) (derivér/integrér fartsfunksjonen); [Variabelskifte (substitusjon)](/r2/r2-3-1) (integraler med eksponentialledd); [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2) (fysikk 2-fundament for $a=dv/dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $a(t)=\frac{dv}{dt}$, $\alpha(t)=\frac{d\omega}{dt}$; **maks-akselerasjon** ved å derivere og sette $a'(t)=0$ (for eksponentielle modeller ligger maks nesten alltid i $t=0$ — vis hvorfor); strekning $s=\int_0^{t} v\,dt$, vinkel $\varphi=\int_0^{t}\omega\,dt$; **antall hele omdreininger $=\lfloor\varphi/2\pi\rfloor$** (heltallsdelen); bruk oppgitt integral ved polynom$\times$eksponential-integrander (delvis integrasjon nevnes, men resultatet oppgis ofte). **Rask vei til tall (MC-oppskrift):** 1) sett inn $t=0$ i $a(t)$ for maks (sjekk fortegn/form); 2) sett $t\to\infty$ eller oppgitt $t$ i integralet for total vinkel; 3) del på $2\pi$, ta heltallsdelen. **Utledning som kreves aktivt:** derivere og integrere den oppgitte modellen; begrunne hvorfor maks er i $t=0$. **Figurkrav:** skisse av $v(t)$/$\omega(t)$ og $a(t)$ over samme tidsakse.
- **Oppgavesjangre:** D1. Mønstereksempel: «Vinkelfarten til en karusell er $\omega(t)=\omega_0\left(\frac{t}{\tau}\right)^2 e^{-t/5\tau}$. Finn (a) vinkelakselerasjonen ved $t=0$, (b) maksimal vinkelfart, og (c) antall hele omdreininger karusellen gjør før den stopper.»
- **Typiske feil (analysen §5.7):** Bruke konstant-akselerasjon-formler ($v=v_0+at$) når $a$ ikke er konstant; lete etter maks-akselerasjon ved feil $t$; glemme å ta *heltallsdelen* av $\varphi/2\pi$ (oppgi desimaltallet); avrunde $\varphi$ for tidlig så heltallsdelen tipper.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 1.2: Banevinkel og krumning — $\tan\beta=dy/dx$ og normalkraft i toppunkt

- **id:** `tfy4125-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4125-1-1`
- **kapitteltype:** teori
- **description:** Retningen på en bane ($\tan\beta=dy/dx$) og krumningsradiusen $R=1/|y''|$ som gir normalkraften i et toppunkt.
- **Eksamensbelegg:** Banevinkel (D2) i **100 %**, normalkraft med krumning (D4) i **88 %**. Signatur: gitt en bane $y(x)$, finn banevinkelen i et punkt (ofte start); i et toppunkt, finn normalkraften $N$ via krumningsradius. Prioritet: **perfekt** (D2) / **kunne** (D4).
- **Forkunnskaper/kryssbok:** kap. 1.1; [Repetisjon av derivasjon](/r2/r2-2-1) ($dy/dx$, $y''$); [Parameterframstilling av kurver](/r2/r2-6-1) og [Derivasjon av vektorfunksjoner](/r2/r2-6-2) (bane); [Sirkelbevegelse og sentripetalkraft](/fysikk2/fysikk2-1-4) (fysikk 2-fundament for $v^2/R$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: banevinkel $\tan\beta = \frac{dy}{dx}$ i et gitt punkt; **krumningsradius** $R=\frac{(1+y'^2)^{3/2}}{|y''|}$, som i et toppunkt/bunnpunkt ($y'=0$) forenkles til $R=1/|y''|$; normalkraft i toppunkt: $mg-N=\frac{mv^2}{R}\Rightarrow N=m\left(g-\frac{v^2}{R}\right)$ (og $N\approx mg$ når $v^2/R\ll g$). **Rask vei til tall (MC-oppskrift):** 1) $y'$ i punktet → $\beta=\arctan(y')$; 2) $y''$ i toppunkt → $R=1/|y''|$; 3) sett inn i $N=m(g-v^2/R)$. **Utledning som kreves aktivt:** normalkraftlikningen fra sentripetalakselerasjon. **Figurkrav:** bane med tangent (banevinkel $\beta$) og krumningssirkel i toppunktet.
- **Oppgavesjangre:** D2, D4. Mønstereksempel: «En kule følger banen $y(x)=h-ax^2$. Finn banevinkelen ved $x=x_0$, og — i toppunktet, der farten er $v$ — finn normalkraften fra underlaget på kula.»
- **Typiske feil:** Bruke full krumningsformel der $y'=0$ forenkler (unødig regnefeil); fortegnsfeil på $N=m(g-v^2/R)$ (glemme at $N$ kan bli mindre enn $mg$); blande banevinkel (fra $y'$) med noe annet; regne med konstant-akselerasjon på krum bane.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Drill: kinematikk-kjeden (sjanger D1–D2, MC-tempo)

- **id:** `tfy4125-1-3` · **number:** 1.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill i MC-tempo: fra gitt $v(t)/\omega(t)$ til tallsvaret på maks-akselerasjon, strekning/vinkel, rundetelling og banevinkel — feilfritt og raskt.
- **Eksamensbelegg:** Sjanger D1–D2 samlet (100 %). Varianter i arkivet: eksponentiell fartsmodell, potens$\times$eksponential vinkelfart, lineær/kvadratisk bane, kombinert «finn $a(0)$, $\omega_\text{maks}$ og antall runder». Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser om det spørres om akselerasjon (derivér), strekning/vinkel (integrér) eller retning (banevinkel); 2) for maks-akselerasjon: derivér, prøv $t=0$ først; 3) for total vinkel: integrér til $t\to\infty$ eller oppgitt $t$, bruk oppgitt integral; 4) **rundetelling: $\lfloor\varphi/2\pi\rfloor$, ta heltallsdelen**; 5) banevinkel: $\arctan(dy/dx)$. Gjennomregnet MC-case med margnotater om **hvor avrundingsfellen ligger** (heltallsdel tipper ved for få siffer). 12–15 oppgaver på eksamensnivå som roterer sjangeren, alle med et rent tallsvar (A–F-format der det passer).
- **Oppgavesjangre:** D1, D2. Mønstereksempel: «En turbin bremses slik at $\omega(t)=\omega_0 e^{-t/\tau}$. (a) Finn vinkelakselerasjonen ved $t=0$. (b) Finn totalt antall omdreininger til den stopper. (c) Hvor mange hele omdreininger er gjort etter tiden $t=2\tau$?»
- **Typiske feil:** Hele D1–D2-repertoaret: konstant-$a$-feilen, feil $t$ for maks, desimaltall i stedet for heltall i rundetelling, for tidlig avrunding.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A kinematikk fra $v(t)$: maks-$a$ + strekning · 1.B vinkelfart + rundetelling $\lfloor\varphi/2\pi\rfloor$ · 1.C banevinkel + krumning/normalkraft · 1.D MC-format: 8–10 tette flervalgsspørsmål på kinematikk-kjeden)

---

### Del 2 — Kraft, energi og rulling *(prioritet: PERFEKT)*

#### Kapittel 2.1: Newtons 2. lov på skråplan med friksjon

- **id:** `tfy4125-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-1-1`
- **kapitteltype:** teori
- **description:** Frilegemediagram på skråplan, dekomponering av tyngden, kinetisk friksjon mot bevegelsen, og standardsvaret $a=g(\sin\beta\pm\mu\cos\beta)$.
- **Eksamensbelegg:** Sjanger D5 i **100 %** av settene. Signatur: kloss/legeme på skråplan opp eller ned, med kinetisk friksjon; finn akselerasjon eller snuavstand. Masse og startfart faller ofte ut. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Vektorer og komponenter](/fysikk2/fysikk2-1-1) (dekomponering); [Skalarproduktet](/r2/r2-5-3) (komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dekomponér tyngden langs/normalt på planet ($mg\sin\beta$, $mg\cos\beta$); normalkraft $N=mg\cos\beta$; kinetisk friksjon $f=\mu N=\mu mg\cos\beta$ **rettet mot bevegelsen**; Newtons 2. lov langs planet gir $a=g(\sin\beta\pm\mu\cos\beta)$ (**minus** når legemet går opp/friksjon bremser i bevegelsesretning, **pluss/minus** avhengig av retning — vis fortegnsvalget eksplisitt); snuavstand oppover $x=\frac{v_0^2}{2a}$; betingelse for å gli ($\tan\beta>\mu_s$). **Rask vei til tall (MC-oppskrift):** 1) tegn retning, velg fortegn på friksjonsleddet; 2) $a=g(\sin\beta\pm\mu\cos\beta)$ direkte; 3) snuavstand $v_0^2/2a$. Merk at $m$ ofte forsvinner. **Utledning som kreves aktivt:** hele N2-oppsettet fra frilegemediagram. **Figurkrav:** frilegemediagram med $mg$, $N$, $f$ og dekomponert tyngde.
- **Oppgavesjangre:** D5. Mønstereksempel: «En kloss sendes oppover et skråplan med helning $\beta$ og startfart $v_0$. Friksjonskoeffisienten er $\mu$. Finn akselerasjonen mens klossen går oppover og hvor langt opp den når før den snur.»
- **Typiske feil (analysen §5):** Feil fortegn på friksjonsleddet (retning i forhold til bevegelse); bruke $\sin$ der $\cos$ skal stå (og omvendt) i dekomponeringen; ta med masse i svaret der den faller ut (og dermed regne unødvendig); glemme at friksjon skifter fortegn når legemet snur.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 2.2: Arbeid, energibevaring og rullende kule ($K=\tfrac{7}{10}mv^2$)

- **id:** `tfy4125-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-2-1`
- **kapitteltype:** teori
- **description:** Energibevaring for et legeme som ruller uten å gli — med rotasjonsenergien inkludert — pluss effekt og terminalfart som kompakt tilleggsstoff.
- **Eksamensbelegg:** Sjanger D3 (rullende kule/energibevaring) i **100 %**; effekt $P=Fv$ **25 %**, terminalfart **38 %** (kunne, foldes inn). **Å glemme rotasjonsleddet (bruke $\tfrac12 mv^2$) er den hyppigst innebygde fella i dynamikkdelen.** Prioritet: **perfekt** (D3); **kunne** (effekt, terminalfart).
- **Forkunnskaper/kryssbok:** kap. 2.1; [Bevegelse i to dimensjoner](/fysikk2/fysikk2-1-2). (Treghetsmoment $I=\tfrac25 mR^2$ innføres fullt i kap. 4.1; her brukes resultatet — det er oppgitt/på formelarket.)
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kinetisk energi for rulling $K=\tfrac12 mv^2+\tfrac12 I\omega^2$ med rullebetingelsen $v=\omega R$; for **kompakt kule** $I=\tfrac25 mR^2\Rightarrow K=\tfrac{7}{10}mv^2$; energibevaring $mg\,\Delta y=\tfrac{7}{10}mv^2$ (ren rulling, ingen slipping); fart i vilkårlig punkt via høydeforskjell; snupunkt = samme høyde som start; arbeid $W=\int F\,ds$, arbeid–energisetningen $W_\text{tot}=\Delta K$; **effekt** $P=Fv$; **terminalfart** ($\alpha v_t^2=mg\Rightarrow v_t=\sqrt{mg/\alpha}$, forhold via tetthet). **Rask vei til tall (MC-oppskrift):** for rullende kule — bruk $v=\sqrt{\frac{10}{7}g\,\Delta y}$ direkte; sjekk om legemet er kule (7/10), sylinder (3/4) eller punktmasse (1/2). **Utledning som kreves aktivt:** utled $\tfrac{7}{10}$-leddet fra $I=\tfrac25 mR^2$. **Figurkrav:** høydeprofil med start-/sluttpunkt og energiregnskap.
- **Oppgavesjangre:** D3 (+ effekt, terminalfart). Mønstereksempel: «En kompakt kule slippes fra ro og ruller uten å gli ned en bakke med høydeforskjell $h$. Finn farten i bunnen. Sammenlign med farten en punktmasse ville fått, og forklar forskjellen.»
- **Typiske feil (analysen §5.1, §5.7):** **Glemme rotasjonsenergien** (bruke $\tfrac12 mv^2$ → svaret blir for høyt) — hovedfella; bruke feil treghetsmoment (kule vs. sylinder vs. skall); bruke kinematikk med konstant $a$ i stedet for energibevaring på krum bane; feil i $v=\omega R$-koblingen.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: Drill: skråplan og energibevaring (sjanger D3, D5)

- **id:** `tfy4125-2-3` · **number:** 2.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-2-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill der avgjørelsen «kinematikk eller energibevaring?» og «med eller uten rotasjonsledd?» tas raskt og riktig — mot tallsvar.
- **Eksamensbelegg:** Sjanger D3+D5 samlet (100 %). Varianter: kloss på skråplan opp/ned m/friksjon, kule som ruller ned/opp, kombinert skråplan+bue, snuavstand og snupunkt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) er det konstant kraft (rett skråplan) → N2 og kinematikk; eller krum/høydebasert → energibevaring; 2) ruller legemet? → ta med rotasjonsledd ($\tfrac{7}{10}$ for kule); 3) friksjon? → fortegn mot bevegelse; 4) sett opp den ene avgjørende likningen; 5) løs for tallsvaret. Gjennomregnet MC-case med margnotat om **7/10-fella** og fortegnsfella. 12–15 oppgaver på eksamensnivå, minst tre med rulling og tre med friksjon.
- **Oppgavesjangre:** D3, D5. Mønstereksempel: «En kule ruller uten å gli oppover et skråplan med startfart $v_0$. (a) Hvor høyt når den (energibevaring)? (b) En kloss uten rotasjon sendes opp samme plan med friksjon $\mu$ og samme $v_0$ — hvor langt når den? (c) Hvilken går lengst, og hvorfor?»
- **Typiske feil:** Hele D3/D5-repertoaret samlet: glemt rotasjonsledd, feil friksjonsfortegn, kinematikk på krum bane, feil treghetsmoment.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A skråplan m/friksjon: akselerasjon + snuavstand · 2.B rullende kule energibevaring · 2.C kombinert kraft/energi + effekt/terminalfart · 2.D MC-format: tette flervalgsspørsmål med 7/10-fella innebygd)

---

### Del 3 — Bevegelsesmengde, støt og baner *(støt: PERFEKT · baner: KUNNE)*

#### Kapittel 3.1: Bevegelsesmengde, impuls og støt

- **id:** `tfy4125-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4125-2-2`
- **kapitteltype:** teori
- **description:** Impulsbevarelse, elastisk og fullstendig uelastisk støt med energitap, og impuls fra en tidsavhengig kraft $\int F\,dt$.
- **Eksamensbelegg:** Sjanger D6 i **88 %**. Signatur: to legemer i støt (elastisk → fartsformel; uelastisk → felles fart + energitap $\Delta K$); impuls som areal under $F(t)$. Prioritet: **perfekt** (høyfrekvent).
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) ($\int F\,dt$).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: bevegelsesmengde $\mathbf{p}=m\mathbf{v}$; **impulsbevarelse** $\sum m\mathbf{v}=\sum m\mathbf{v}'$; elastisk støt (mot legeme i ro) $v_1'=\frac{M-m}{M+m}v_0$, $v_2'=\frac{2m}{M+m}v_0$; **fullstendig uelastisk** → felles fart $v'=\frac{m v_0}{m+M}$ med energitap $\Delta K = \tfrac12\frac{mM}{m+M}v_0^2$ (andel $\frac{M}{m+M}$ av $K_0$); impuls $\mathbf{J}=\Delta\mathbf{p}=\int \mathbf{F}\,dt$ (areal under $F(t)$). **Rask vei til tall (MC-oppskrift):** identifiser støttype (elastisk = energi bevart; uelastisk = felles fart), bruk ferdig fartsformel, regn energitap som differanse $K_0-K'$. **Utledning som kreves aktivt:** utled uelastisk energitap fra impuls- + energiregnskap. **Figurkrav:** før-/etter-skisse med fartspiler; $F(t)$-graf med areal for impuls.
- **Oppgavesjangre:** D6. Mønstereksempel: «En kule med masse $m$ og fart $v_0$ treffer en stillestående kloss med masse $M$ og blir sittende fast. Finn felles fart etter støtet og hvor stor andel av den kinetiske energien som går tapt.»
- **Typiske feil (analysen §5):** Bruke energibevaring i uelastisk støt (energi er IKKE bevart der); fortegnsfeil på fart i impulsbevarelse; regne energitap som andel feil vei; feil grenser/areal i $\int F\,dt$.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 3.2: Gravitasjon, satellittbaner og rakettligning

- **id:** `tfy4125-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4125-3-1`
- **kapitteltype:** teori
- **description:** Sirkelbane under gravitasjon ($GMm/r^2=m\omega^2 r$), geostasjonær bane og rakettligningen fra impulsbevarelse — kompakt beredskap.
- **Eksamensbelegg:** Sjanger D10: satellittbane **38 %**, rakett **38 %**, prosjektil **38 %** (roterer inn i MC-æraen). Prioritet: **kunne** (kompakt, men sikrer poeng når det dukker opp).
- **Forkunnskaper/kryssbok:** kap. 3.1; [Newtons gravitasjonslov](/fysikk2/fysikk2-2-1), [Gravitasjonsfelt](/fysikk2/fysikk2-2-2) og [Gravitasjonell potensiell energi](/fysikk2/fysikk2-2-3) (fysikk 2-fundament); [Kastering – horisontal og skrå](/fysikk2/fysikk2-1-3) (prosjektil).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: sirkelbane $\frac{GMm}{r^2}=\frac{mv^2}{r}=m\omega^2 r$, kombinert med $v=\frac{2\pi r}{T}$; **geostasjonær bane** (finn $r$ av $T=24$ t) og «samme punkt etter $n$ timer»-varianter; rakettligning $|dm/dt|$ fra impulsbevarelse med utstøtsfart $u$ ($F_\text{thrust}=u|dm/dt|$); prosjektil: rekkevidde $R=\frac{v_0^2\sin 2\theta}{g}$, høyeste punkt. **Rask vei til tall (MC-oppskrift):** for bane — sett gravitasjon = sentripetalkraft, løs for etterspurt størrelse; for geostasjonær — $r=\left(\frac{GMT^2}{4\pi^2}\right)^{1/3}$. **Utledning som kreves aktivt:** utled baneperiode/radius fra kraftbalansen. **Figurkrav:** bane med kraftvektorer; prosjektilbane.
- **Oppgavesjangre:** D10. Mønstereksempel: «En satellitt går i sirkelbane rundt jorda med omløpstid $T$. Finn baneradien, og avgjør om banen er høyere eller lavere enn geostasjonær høyde.»
- **Typiske feil:** Blande $v$ og $\omega$ i sentripetalleddet; glemme $v=2\pi r/T$-koblingen; enhetsslurv (timer vs. sekunder for $T$); feil retning på utstøtsfart i rakettligningen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.3: Drill: støt, impuls og baner (sjanger D6, D10)

- **id:** `tfy4125-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfy4125-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: velg riktig bevaringslov (impuls og/eller energi) og kom raskt til tallsvaret for støt, impuls og baner.
- **Eksamensbelegg:** Sjanger D6 (88 %) + D10 (38 %) samlet. Varianter: elastisk/uelastisk støt, ballistisk pendel, impuls fra $F(t)$-graf, satellittbane, rakett. Prioritet: **perfekt** (støt) / **kunne** (baner).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) støt → impuls alltid bevart; energi bevart KUN hvis elastisk; 2) uelastisk → felles fart, regn energitap som differanse; 3) impuls fra kraft → areal under $F(t)$; 4) bane → gravitasjon = sentripetalkraft. Gjennomregnet MC-case med margnotat om energibevarings-fella (uelastisk) og enhetsfella (bane). 12–15 oppgaver på eksamensnivå, minst fire støt og to bane.
- **Oppgavesjangre:** D6, D10. Mønstereksempel: «En kule ($m$, $v_0$) skytes inn i en kloss ($M$) som henger i en snor og blir sittende fast (ballistisk pendel). (a) Finn felles fart rett etter støtet. (b) Hvor høyt svinger klossen? (c) Hvor stor andel av kulas energi ble borte i støtet?»
- **Typiske feil:** Energibevaring i uelastisk fase; fortegn i impuls; enhetsslurv i bane; feil bevaringslov i hvert steg av ballistisk pendel (uelastisk støt, så energibevaring i svinget).
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A elastisk/uelastisk støt + energitap · 3.B impuls fra $F(t)$ + ballistisk pendel · 3.C satellittbane + rakett · 3.D MC-format: tette flervalgsspørsmål støt/impuls/bane)

---

### Del 4 — Rotasjon: treghetsmoment og dreieimpuls *(prioritet: PERFEKT)*

#### Kapittel 4.1: Massesenter, treghetsmoment og Steiners sats

- **id:** `tfy4125-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-2-2`
- **kapitteltype:** teori
- **description:** Massesenter for punktmasser og legemer, treghetsmoment ved $\int r^2\,dm$ og $\sum m_i r_i^2$, og Steiners sats for akse utenfor massesenteret.
- **Eksamensbelegg:** Sjanger D7 i **100 %**. Signatur: massesenter av punktmasser (trekant), treghetsmoment av stang med $\lambda(x)$ eller punktmasser, Steiner for akse utenfor CM. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 2.2; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) ($\int r^2\,dm$); [Vektorkoordinater og regning](/r2/r2-5-2) (massesenter-komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: massesenter $x_\text{CM}=\frac{\sum m_i x_i}{\sum m_i}$ (og komponentvis $y_\text{CM}$); treghetsmoment for punktmasser $I=\sum m_i r_i^2$ (perpendikulær avstand til aksen!); for kontinuerlig legeme $I=\int r^2\,dm$ med $dm=\lambda\,dx$ (stang), $\sigma\,dA$, $\rho\,dV$; standardresultater som skal kunne utledes/gjenkjennes: stang om senter $\tfrac{1}{12}ML^2$, om endepunkt $\tfrac13 ML^2$, kompakt kule $\tfrac25 MR^2$, kuleskall $\tfrac23 MR^2$, sylinder $\tfrac12 MR^2$; **Steiners sats** $I=I_\text{CM}+Md^2$ (akse parallell, avstand $d$ fra CM). **Rask vei til tall (MC-oppskrift):** 1) punktmasser → $\sum m_i r_i^2$ med riktig vinkelrett avstand; 2) legeme om akse utenfor CM → slå opp $I_\text{CM}$, legg til $Md^2$. **Utledning som kreves aktivt:** $\int r^2\,dm$ for stang med gitt $\lambda(x)$; anvendelse av Steiner. **Figurkrav:** legeme med akse, CM-avstand $d$ og perpendikulære avstander for punktmasser.
- **Oppgavesjangre:** D7. Mønstereksempel: «Tre punktmasser $m$ sitter i hjørnene av en likesidet trekant med side $a$. Finn treghetsmomentet om en akse gjennom ett hjørne, vinkelrett på trekantplanet.»
- **Typiske feil (analysen §5.4–5):** **Glemme Steiner-leddet** når aksen ikke går gjennom CM; bruke avstand langs aksen i stedet for perpendikulær avstand i $\sum m_i r_i^2$; feil integrasjonsgrenser i $\int r^2\,dm$; bruke feil standard-$I$ (kule vs. skall vs. sylinder).
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 4.2: Dreieimpuls, rulling og overgangen gliding → ren rulling

- **id:** `tfy4125-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-4-1`
- **kapitteltype:** teori
- **description:** Total dreieimpuls som spinn + bane med korrekte fortegn, N2 for rotasjon, og overgangen fra gliding til ren rulling.
- **Eksamensbelegg:** Sjanger D8 (dreieimpuls) i **100 %**, gliding→rulling i **75 %**. **Fortegn/retning på spinn- og banedreieimpuls er et yndet flervalgspoeng.** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1; [Vektorer i tre dimensjoner](/r2/r2-5-1) (kryssprodukt/høyrehåndsregel).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dreieimpuls $\mathbf{L}=I\boldsymbol{\omega}$ (spinn) og $\mathbf{L}_\text{bane}=\mathbf{R}_\text{CM}\times m\mathbf{V}$ (bane); **total $\mathbf{L}=\mathbf{L}_\text{spinn}+\mathbf{L}_\text{bane}$ med korrekt fortegn** (høyrehåndsregel — spinn og bane peker ikke alltid samme vei); N2 for rotasjon $\tau=I\alpha$, $\tau=\mathbf{r}\times\mathbf{F}$; bevaring av dreieimpuls når $\tau_\text{ytre}=0$; **overgang gliding→ren rulling:** N2 for translasjon ($ma=-f$) + N2 for rotasjon ($I\alpha=fR$), sett $v(t)=R\omega(t)$ ved ren rulling; treffhøyde $h$ for et støt fra $mV_0=F\tau$ og $\tfrac25 mR V_0 = F\tau(R-h)$ (kombiner). **Rask vei til tall (MC-oppskrift):** 1) sett opp spinn- og banebidrag med fortegn; 2) for gliding→rulling, løs $v(t)=R\omega(t)$ for felles tid/fart. **Utledning som kreves aktivt:** overgang gliding→rulling fra de to N2-likningene. **Figurkrav:** legeme med $\boldsymbol{\omega}$, $\mathbf{V}$, $\mathbf{L}_\text{spinn}$, $\mathbf{L}_\text{bane}$ inntegnet med retning.
- **Oppgavesjangre:** D8. Mønstereksempel: «En kule kastes med senterfart $V$ og spinn $\omega$ (motsatt rulleretning) på et horisontalt underlag. Angi retningen på spinn- og banedreieimpulsen om et punkt på bakken, og finn den totale dreieimpulsen.»
- **Typiske feil (analysen §5.2):** **Feil fortegn/retning** på spinn vs. bane (høyrehåndsregel, negativt spinn); glemme banebidraget $\mathbf{R}\times m\mathbf{V}$; feil $I$ i spinnleddet; sette $v=R\omega$ før ren rulling er nådd.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Drill: treghetsmoment, Steiner og dreieimpuls (sjanger D7–D8)

- **id:** `tfy4125-4-3` · **number:** 4.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-4-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill med Steiner-refleks og fortegnsdisiplin på dreieimpuls — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger D7–D8 samlet (100 %). Varianter: punktmasser i figur, stang med $\lambda(x)$, sammensatt legeme (halvkule + stang), akse utenfor CM, dreieimpuls med fortegn, gliding→rulling. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) massesenter først om nødvendig; 2) treghetsmoment: punktmasser → $\sum m_i r_i^2$; legeme → slå opp $I_\text{CM}$; 3) akse utenfor CM → **legg til $Md^2$ (Steiner)**; 4) dreieimpuls → spinn + bane med fortegn; 5) rotasjon → $\tau=I\alpha$. Gjennomregnet MC-case med margnotat om Steiner-fella og fortegnsfella. 12–15 oppgaver på eksamensnivå, minst tre med Steiner og tre med dreieimpulsfortegn.
- **Oppgavesjangre:** D7, D8. Mønstereksempel: «En homogen stang med masse $M$ og lengde $L$ svinger om et punkt i den ene enden. (a) Finn treghetsmomentet om denne aksen (bruk Steiner). (b) Finn vinkelakselerasjonen i det øyeblikket stangen er vannrett.»
- **Typiske feil:** Hele D7/D8-repertoaret: glemt Steiner, perpendikulær avstand, feil standard-$I$, fortegn på dreieimpuls.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A massesenter + treghetsmoment (punktmasser/stang) · 4.B Steiner + fysisk oppsett · 4.C dreieimpuls m/fortegn + gliding→rulling · 4.D MC-format: tette flervalgsspørsmål rotasjon)

---

### Del 5 — Svingninger *(prioritet: PERFEKT)*

#### Kapittel 5.1: Harmoniske svingninger, egenfrekvens og fysisk pendel

- **id:** `tfy4125-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-4-1`
- **kapitteltype:** teori
- **description:** Den harmoniske svingelikningen, egenfrekvens $\omega_0=\sqrt{k/m}$, seriekoblede fjærer og den fysiske pendelen $T=2\pi\sqrt{I_A/Mgd}$.
- **Eksamensbelegg:** Sjanger D9 (egenfrekvens) i **100 %**, fysisk pendel i **63 %**. Signatur: finn fjærstivhet $k=m\omega_0^2$ eller egenfrekvens $f=\omega_0/2\pi$; fysisk pendel med Steiner-treghetsmoment. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 4.1 (fysisk pendel bruker $I_A$ med Steiner); [Repetisjon av derivasjon](/r2/r2-2-1) (svingelikningen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: svingelikningen $\ddot{x}+\omega_0^2 x=0$ med løsning $x(t)=A\cos(\omega_0 t+\phi)$; **egenfrekvens** $\omega_0=\sqrt{k/m}$, $f=\frac{\omega_0}{2\pi}$, $T=\frac{2\pi}{\omega_0}$; sammenheng $k=m\omega_0^2$; **seriekoblede fjærer** $\frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2}$ (parallell: $k=k_1+k_2$); **fysisk pendel** $T=2\pi\sqrt{\frac{I_A}{Mgd}}$ der $I_A$ er treghetsmomentet om opphengspunktet (Steiner!) og $d$ er avstand CM–oppheng; matematisk pendel som spesialtilfelle $T=2\pi\sqrt{L/g}$. **Rask vei til tall (MC-oppskrift):** 1) $\omega_0=\sqrt{k/m}$ → $f=\omega_0/2\pi$; 2) fysisk pendel → finn $I_A$ (Steiner), sett i $T=2\pi\sqrt{I_A/Mgd}$. **Utledning som kreves aktivt:** utled $\omega_0$ fra N2 for masse på fjær; utled fysisk pendel fra $\tau=I\alpha$. **Figurkrav:** masse-fjær-system og fysisk pendel med $d$ og opphengsakse.
- **Oppgavesjangre:** D9. Mønstereksempel: «En homogen skive med masse $M$ og radius $R$ henges opp i et punkt på randen og svinger som en fysisk pendel. Finn svingetiden for små utslag.»
- **Typiske feil (analysen §5):** Blande serie/parallell for fjærer; glemme Steiner i $I_A$ for fysisk pendel; bruke $\omega_0$ der $f$ etterspørres (faktor $2\pi$); feil $d$ (avstand oppheng–CM, ikke opphengsradius).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 5.2: Dempede og drevne svingninger

- **id:** `tfy4125-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4125-5-1`
- **kapitteltype:** teori
- **description:** Amplitude som avtar eksponentielt, $A(t)=A_0 e^{-\gamma t}$ med $\gamma=b/2m$, og drevet svingning på resonans — grunnlaget for RLC-analogien i Del 9.
- **Eksamensbelegg:** Sjanger D9 (dempet) i **100 %**, drevet resonans i **25 %**. Signatur: finn tid/antall perioder til amplituden er redusert til en gitt brøk; $\gamma=b/2m$. **Dette kapitlet er analogigrunnlaget for RLC-svingekretsen (kap. 9.2) — merk koblingen eksplisitt.** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Repetisjon av derivasjon](/r2/r2-2-1) (eksponentiell demping).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: dempet svingelikning $m\ddot{x}+b\dot{x}+kx=0$; **amplitude** $A(t)=A_0 e^{-\gamma t}$ med **$\gamma=\frac{b}{2m}$**; dempet vinkelfrekvens $\omega_d=\sqrt{\omega_0^2-\gamma^2}$ (svak demping $\omega_d\approx\omega_0$); løs $e^{-\gamma t}=$ brøk for tid, eller antall perioder $n=t/T$; **kvalitetsfaktor** $Q=\frac{\omega_0}{2\gamma}$; drevet på resonans: hastighetsamplitude $v_0=F_0/b$. **Rask vei til tall (MC-oppskrift):** for «tid til amplitude = brøk»: $t=-\frac{1}{\gamma}\ln(\text{brøk})$; for antall perioder: del på $T=2\pi/\omega_d$. **Utledning som kreves aktivt:** vis $\gamma=b/2m$ fra ansatsen $x=A_0 e^{-\gamma t}\cos\omega_d t$. **Figurkrav:** dempet svingning med eksponentiell innhyllingskurve $A_0 e^{-\gamma t}$.
- **Oppgavesjangre:** D9. Mønstereksempel: «Et dempet masse-fjær-system har masse $m$, fjærstivhet $k$ og dempingskoeffisient $b$. Etter hvor mange hele svingninger er amplituden redusert til halvparten?»
- **Typiske feil (analysen §5.9):** Bruke $\gamma=b/m$ eller $b/2k$ i stedet for **$\gamma=b/2m$** (samme feilfamilie som $R/2L$ vs. $R/2C$ i RLC); forveksle amplitude-demping med energi-demping (energi $\sim e^{-2\gamma t}$); regne $\omega_d=\omega_0$ ved sterk demping.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 5.3: Drill: svingninger (sjanger D9)

- **id:** `tfy4125-5-3` · **number:** 5.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: egenfrekvens, fysisk pendel og dempet amplitude raskt mot tallsvar — med $\gamma=b/2m$-disiplin.
- **Eksamensbelegg:** Sjanger D9 samlet (100 %). Varianter: masse på fjær (serie/parallell), fysisk pendel med Steiner, dempet amplitude/antall perioder, drevet resonans. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser system (fjær/pendel/dempet); 2) egenfrekvens $\omega_0=\sqrt{k/m}$ eller $\sqrt{Mgd/I_A}$; 3) dempet → $\gamma=b/2m$, $A_0 e^{-\gamma t}$; 4) oversett mellom $\omega$, $f$, $T$ korrekt (faktor $2\pi$). Gjennomregnet MC-case med margnotat om $\gamma=b/2m$-fella og $2\pi$-fella. 12–15 oppgaver på eksamensnivå, minst tre dempet og tre fysisk pendel.
- **Oppgavesjangre:** D9. Mønstereksempel: «To fjærer med stivhet $k_1$ og $k_2$ kobles i serie og bærer en masse $m$. (a) Finn egenfrekvensen. (b) Med en dempingskoeffisient $b$ i tillegg — hvor lang tid tar det før amplituden er $1/e$ av startverdien?»
- **Typiske feil:** Hele D9-repertoaret: serie/parallell-fjær, Steiner i pendel, $\gamma=b/2m$, $2\pi$-faktor.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A egenfrekvens + seriefjærer · 5.B fysisk pendel m/Steiner · 5.C dempet amplitude + antall perioder · 5.D MC-format: tette flervalgsspørsmål svingninger)

---

### Del 6 — Elektrostatikk og superposisjon *(prioritet: PERFEKT)*

#### Kapittel 6.1: Elektrisk felt og potensial ved superposisjon

- **id:** `tfy4125-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Feltet og potensialet fra punktladninger ved superposisjon — med fortegn, komponenter og symmetri.
- **Eksamensbelegg:** Sjanger E1 i **100 %** av settene, åpner nesten alltid EM-halvdelen. Signatur: felt/potensial fra 2–4 punktladninger; komponentvis felt, skalar potensial med fortegn. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Elektrisk ladning og Coulombs lov](/fysikk2/fysikk2-3-1), [Elektrisk felt](/fysikk2/fysikk2-3-2) og [Elektrisk potensial og spenning](/fysikk2/fysikk2-3-3) (fysikk 2-fundament); [Vektorkoordinater og regning](/r2/r2-5-2) (komponenter).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Coulomb-felt $E=\frac{Q}{4\pi\varepsilon_0 r^2}$ (retning langs forbindelseslinjen, fra + mot −), potensial $V=\frac{Q}{4\pi\varepsilon_0 r}$ (**skalar, med fortegn på $Q$, ingen fortegn på $r$**); **superposisjon:** felt summeres **vektorielt** (komponentvis $E_x$, $E_y$), potensial summeres **skalart**; bruk symmetri og cosinus-komponenter; kraft på prøveladning $\mathbf{F}=q\mathbf{E}$. **Rask vei til tall (MC-oppskrift):** 1) felt: regn hvert bidrag $\frac{Q_i}{4\pi\varepsilon_0 r_i^2}$, dekomponer, summer komponentvis; 2) potensial: bare $\sum \frac{Q_i}{4\pi\varepsilon_0 r_i}$ med fortegn — mye raskere enn felt. **Utledning som kreves aktivt:** oppstilling av superposisjonssummen fra geometrien. **Figurkrav:** koordinatsystem med ladninger, feltbidrag og resultant.
- **Oppgavesjangre:** E1. Mønstereksempel: «To ladninger $+Q$ og $-Q$ ligger i $(\pm a, 0)$. Finn det elektriske feltet (vektor) og potensialet i punktet $(0, a)$.»
- **Typiske feil (analysen §5.2):** Summere felt skalart (glemme vektorkarakter/retning); gi $r$ fortegn i potensialet; feil potens ($1/r$ i felt eller $1/r^2$ i potensial); glemme $\varepsilon_0$ eller faktor $4\pi$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 6.2: Dipolmoment og potensiell energi til et ladningssystem

- **id:** `tfy4125-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4125-6-1`
- **kapitteltype:** teori
- **description:** Elektrisk dipolmoment $\mathbf{p}=\sum q_i\mathbf{x}_i$ og den potensielle energien $U=\sum_{i<j}U_{ij}$ over alle unike ladningspar.
- **Eksamensbelegg:** Sjanger E1 (dipolmoment og energi) i **100 %**. Signatur: dipolmoment av ladningskonfigurasjon; total potensiell energi som sum over unike par. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Vektorkoordinater og regning](/r2/r2-5-2).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **dipolmoment** $\mathbf{p}=\sum_i q_i\mathbf{x}_i$ (vektor; for nøytralt system uavhengig av origo); **potensiell energi** til ladningssystem $U=\sum_{i<j}\frac{Q_i Q_j}{4\pi\varepsilon_0 r_{ij}}$ (sum over **unike par** — tell ikke dobbelt); arbeid for å sette sammen konfigurasjonen $=U$; energi for å flytte en ladning $=q\,\Delta V$. **Rask vei til tall (MC-oppskrift):** 1) dipolmoment: $\sum q_i\mathbf{x}_i$ komponentvis; 2) energi: list opp alle par, ett ledd per par (for $N$ ladninger er det $N(N-1)/2$ par). **Utledning som kreves aktivt:** vis at $U$ er sum over unike par (ikke ordnede par). **Figurkrav:** ladningskonfigurasjon med parvise avstander.
- **Oppgavesjangre:** E1. Mønstereksempel: «Tre ladninger $+Q$, $+Q$ og $-Q$ sitter i hjørnene av en likesidet trekant med side $a$. Finn (a) dipolmomentet og (b) systemets totale potensielle energi.»
- **Typiske feil:** Telle par dobbelt (bruke $\sum_{i\neq j}$ uten $\tfrac12$); fortegnsfeil i $Q_i Q_j$; feil avstand i par; behandle dipolmoment som skalar.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.3: Kontinuerlig ladning og ladde plan

- **id:** `tfy4125-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4125-6-1`
- **kapitteltype:** teori
- **description:** Felt og potensial fra en linjeladning ved integrasjon, og feltet fra uendelige ladde plan ($E=\sigma/2\varepsilon_0$).
- **Eksamensbelegg:** Sjanger E2 (kontinuerlig ladning) i **63 %**, E3 (ladde plan) i **50 %**. Signatur: integrer felt/potensial fra en linjeladning; felt mellom/utenfor ladde plan; potensial ved lineær integrasjon over regioner. Prioritet: **kunne**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Bestemt integral som grenseverdi](/r2/r2-2-4) og [Variabelskifte (substitusjon)](/r2/r2-3-1) (feltintegralet).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: ladningselement $dq=\lambda\,dx$ (linje, $\lambda=Q/L$), $\sigma\,dA$ (flate); feltbidrag $dE=\frac{dq}{4\pi\varepsilon_0 r^2}$, integrer (f.eks. felt i avstand fra endepunkt av en linje: $E=\frac{\lambda}{4\pi\varepsilon_0}\int\frac{dx}{(a-x)^2}$); potensial $dV=\frac{dq}{4\pi\varepsilon_0 r}$; **uendelig ladet plan** $E=\frac{\sigma}{2\varepsilon_0}$ (én flate), $E=\frac{\sigma}{\varepsilon_0}$ (mellom to motsatt ladde plan); potensial ved lineær integrasjon $V=-\int E\,dx$ over regioner. **Rask vei til tall (MC-oppskrift):** for plan — feltet er konstant, $E=\sigma/2\varepsilon_0$ per plan; superponer plan. For linje — bruk oppgitt/tabellintegral. **Utledning som kreves aktivt:** feltintegralet fra en endelig linjeladning. **Figurkrav:** linjeladning med $dq$ og $r$; feltprofil mellom plan.
- **Oppgavesjangre:** E2, E3. Mønstereksempel: «En rett stav med lengde $L$ har jevn ladning $Q$. Finn det elektriske feltet i et punkt på staveaksens forlengelse, i avstand $a$ fra nærmeste ende.»
- **Typiske feil (analysen §5.5):** Feil $\lambda$ (dele på feil lengde); feil integrasjonsgrenser; glemme faktor $\tfrac12$ i planfeltet (eller bruke $\sigma/\varepsilon_0$ for én flate); regne felt der potensial etterspørres.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.4: Drill: elektrostatisk superposisjon (sjanger E1–E3)

- **id:** `tfy4125-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-6-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill: felt (vektor) og potensial (skalar) ved superposisjon, dipolmoment og ladningsenergi — raskt mot tallsvar.
- **Eksamensbelegg:** Sjanger E1–E3 samlet (E1 100 %, E2/E3 kunne). Varianter: ladninger i kvadrat/trekant, dipolmoment, parenergi, linjeladning, ladde plan. Prioritet: **perfekt** (E1).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) felt → vektorsum komponentvis; potensial → skalarsum med fortegn; 2) dipolmoment → $\sum q_i\mathbf{x}_i$; 3) energi → sum over unike par; 4) kontinuerlig → riktig $\lambda/\sigma$, integrer; 5) plan → $\sigma/2\varepsilon_0$ per flate. Gjennomregnet MC-case med margnotat om vektor/skalar-forskjellen og par-tellingen. 12–15 oppgaver på eksamensnivå, minst to potensial, én dipolmoment, én energi.
- **Oppgavesjangre:** E1, E2, E3. Mønstereksempel: «Fire ladninger sitter i hjørnene av et kvadrat med side $a$: $+Q$, $+Q$, $-Q$, $-Q$ (med klokka). Finn (a) feltet i sentrum, (b) potensialet i sentrum, (c) dipolmomentet.»
- **Typiske feil:** Hele E1–E3-repertoaret: felt summert skalart, fortegn på $r$ i potensial, par talt dobbelt, feil $\lambda$, glemt faktor $\tfrac12$ i plan.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A felt + potensial fra punktladninger · 6.B dipolmoment + ladningsenergi · 6.C kontinuerlig ladning + ladde plan · 6.D MC-format: tette flervalgsspørsmål elektrostatikk)

---

### Del 7 — Kondensatorer, dielektrikum og kretser *(prioritet: PERFEKT)*

#### Kapittel 7.1: Kondensatorer, dielektrikum og feltenergi

- **id:** `tfy4125-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-6-1`
- **kapitteltype:** teori
- **description:** Kapasitans, serie/parallell-kobling, dielektrikum ($C=\varepsilon_r\varepsilon_0 A/d$) og lagret energi.
- **Eksamensbelegg:** Sjanger E4 (kondensator) i **100 %**, E3 (dielektrikum) i **75 %**. Signatur: kondensator serie/parallell etter formelark, dielektrikum svekker felt/øker $C$, lagret energi. **Kondensatorer legges som motstander i parallell og omvendt — en klassisk felle.** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1, 6.3; [Kapasitans og kondensatorer](/fysikk2/fysikk2-3-4) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: kapasitans $C=Q/V$; platekondensator $C=\frac{\varepsilon_r\varepsilon_0 A}{d}$; **serie** $\frac{1}{C}=\sum\frac{1}{C_i}$, **parallell** $C=\sum C_i$ (**motsatt av motstander** — vis kontrasten eksplisitt); **dielektrikum:** felt svekket med $1/\varepsilon_r$, indusert flateladning $\sigma_\text{ind}$, kapasitans øker med faktor $\varepsilon_r$; lagret energi $U=\frac{Q^2}{2C}=\tfrac12 CV^2=\tfrac12 QV$; energitetthet $u=\tfrac12\varepsilon_0 E^2$. **Rask vei til tall (MC-oppskrift):** 1) reduser nettverket (serie/parallell) — pass på at formlene er «byttet om» mot motstander; 2) dielektrikum → gang $C$ med $\varepsilon_r$; 3) energi → $Q^2/2C$ (velg formen som matcher det som er kjent, $Q$ eller $V$). **Utledning som kreves aktivt:** utled platekondensatorens $C$ fra felt og potensialforskjell. **Figurkrav:** kondensatornettverk; platekondensator med dielektrikum.
- **Oppgavesjangre:** E4, E3. Mønstereksempel: «To kondensatorer $C_1$ og $C_2$ kobles i serie over en spenning $U$. Deretter fylles $C_1$ med et dielektrikum $\varepsilon_r$. Finn den nye samlede kapasitansen og den lagrede energien.»
- **Typiske feil (analysen §5.3, §5.8):** **Blande serie/parallell** for kondensator vs. motstand (formlene er byttet om); glemme dielektrikumsfaktoren $\varepsilon_r$ eller plassere den feil i $C=\varepsilon_r\varepsilon_0 A/d$; feil energiformel (bruke $V$ når $Q$ er bevart eller omvendt ved geometriendring).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 7.2: Likestrømskretser og RC-kretsen

- **id:** `tfy4125-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-7-1`
- **kapitteltype:** teori
- **description:** Ohms lov, motstander i serie/parallell, effekt, resistivitet og den transiente RC-kretsen ($\tau=RC$).
- **Eksamensbelegg:** Sjanger E5 (motstandskretser) i **100 %**, E6 (RC) i **88 %**. Signatur: reduser motstandsnettverk, finn strøm/spenning/effekt; RC-lading/utlading med tidskonstant. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 7.1; [Repetisjon av derivasjon](/r2/r2-2-1) (RC-eksponentialen).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Ohms lov $U=RI$; **motstand serie** $R=\sum R_i$, **parallell** $\frac{1}{R}=\sum\frac{1}{R_i}$; effekt $P=UI=I^2 R=\frac{U^2}{R}$ (velg riktig form — $I^2R$ når strømmen er kjent, unngå $U^2/R$-fella i sammensatte kretser); resistivitet $R=\frac{\rho L}{A}$ (Drude $\sigma=\frac{ne^2\tau}{m}$ ved behov, kjenne); **RC-krets:** tidskonstant $\tau=RC$; lading $Q(t)=Q_0(1-e^{-t/RC})$, utlading $Q(t)=Q_0 e^{-t/RC}$; spenning over motstand $U_R=U_0 e^{-t/RC}$. **Rask vei til tall (MC-oppskrift):** 1) reduser nettverket til én ekvivalent $R$; 2) effekt: bruk $I^2R$ på riktig gren; 3) RC: sett $t/\tau$ inn i eksponentialen. **Utledning som kreves aktivt:** utled $\tau=RC$ fra Kirchhoffs spenningslov for RC-kretsen. **Figurkrav:** kretsdiagram; $Q(t)$-/$U_R(t)$-kurve.
- **Oppgavesjangre:** E5, E6. Mønstereksempel: «En kondensator $C$ lades opp gjennom en motstand $R$ fra en spenningskilde $U_0$. Finn tidskonstanten og spenningen over motstanden etter tiden $t=2RC$.»
- **Typiske feil (analysen §5.3):** Blande serie/parallell (motsatt av kondensator); bruke $U^2/R$ med feil $U$ i sammensatt krets (bruk $I^2R$ på grenen); feil fortegn/form i RC-eksponentialen (lading vs. utlading); glemme at $U_R$ og $U_C$ oppfører seg motsatt i tid.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 7.3: Drill: kretser og kondensatorer (sjanger E4–E6)

- **id:** `tfy4125-7-3` · **number:** 7.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-7-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: reduser nettverk, hold serie/parallell adskilt for motstand vs. kondensator, og regn RC-transient raskt.
- **Eksamensbelegg:** Sjanger E4–E6 samlet (E4/E5 100 %, E6 88 %). Varianter: kondensatornettverk med dielektrikum, motstandsnettverk med effekt, RC-lading/utlading. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) er komponenten kondensator eller motstand? — velg RIKTIG serie/parallell-formel (de er byttet om); 2) reduser til ekvivalent; 3) effekt → $I^2R$ på grenen; 4) transient → $\tau=RC$, eksponential. Gjennomregnet MC-case med margnotat om serie/parallell-fella og $U^2/R$-fella. 12–15 oppgaver på eksamensnivå, minst tre kondensator, tre motstand, to RC.
- **Oppgavesjangre:** E4, E5, E6. Mønstereksempel: «Tre motstander $R$ kobles: to i parallell, i serie med den tredje, over $U_0$. (a) Finn strømmen fra kilden. (b) Finn effekten avsatt i den tredje motstanden.»
- **Typiske feil:** Hele E4–E6-repertoaret: serie/parallell byttet om, $U^2/R$-fella, dielektrikumsfaktor, RC-fortegn.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A kondensatornettverk + dielektrikum + energi · 7.B motstandsnettverk + effekt · 7.C RC-transient · 7.D MC-format: tette flervalgsspørsmål kretser)

---

### Del 8 — Magnetfelt og ladd partikkel *(prioritet: PERFEKT)*

#### Kapittel 8.1: Ladd partikkel i magnetfelt — akselerasjon og baneradius

- **id:** `tfy4125-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfy4125-6-1`
- **kapitteltype:** teori
- **description:** Akselerasjon over spenning ($qU=\tfrac12 mv^2$), sirkelbane i magnetfelt ($r=mv/qB$), og konseptpoenget at magnetkraften gjør null arbeid.
- **Eksamensbelegg:** Sjanger E7 i **100 %**. Signatur: partikkel akselereres over spenning, går i sirkelbane i $B$; finn radius (massespektrometer/ionebane). **Fast konseptpoeng: magnetkraften står ⊥ på farten og gjør null arbeid ($P=\mathbf{F}\cdot\mathbf{v}=0$).** Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Magnetisk kraft på ladede partikler](/fysikk2/fysikk2-4-2), [Lorentzkraften](/fysikk2/fysikk2-4-5) og [Ladede partikler i elektriske felt](/fysikk2/fysikk2-3-5) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Lorentz-kraft $\mathbf{F}=q\mathbf{v}\times\mathbf{B}$; **akselerasjon over spenning** $qU=\tfrac12 mv^2\Rightarrow v=\sqrt{2qU/m}$; sirkelbane $qvB=\frac{mv^2}{r}\Rightarrow r=\frac{mv}{qB}$; omløpstid $T=\frac{2\pi m}{qB}$ (uavhengig av fart); **magnetkraften gjør null arbeid** (⊥ på farten) → farten er konstant. **Rask vei til tall (MC-oppskrift):** 1) $v=\sqrt{2qU/m}$; 2) sett inn i $r=mv/qB$; eller kombinert $r=\frac{1}{B}\sqrt{2mU/q}$. Sjekk om oppgaven først krever akselerasjon. **Utledning som kreves aktivt:** utled $r=mv/qB$ fra kraftbalansen. **Figurkrav:** partikkelbane i $B$-felt med kraft- og fartsvektor.
- **Oppgavesjangre:** E7. Mønstereksempel: «Et ion med ladning $q$ og masse $m$ akselereres fra ro gjennom en spenning $U$ og går deretter inn i et magnetfelt $B$ vinkelrett på farten. Finn radiusen i sirkelbanen.»
- **Typiske feil (analysen §5.6, §5.11):** **Glemme å akselerere partikkelen først** ($qU=\tfrac12 mv^2$) før $r=mv/qB$; **regne arbeid av magnetkraften** (den er alltid null); bruke $E$-feltets kraft der $B$-kraften gjelder; enhetsslurv i $\sqrt{2qU/m}$.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 8.2: Magnetfelt fra strøm — Biot–Savart, ring og solenoide

- **id:** `tfy4125-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-8-1`
- **kapitteltype:** teori
- **description:** Magnetfeltet fra en ringstrøm, en solenoide og en rett leder — og kraften mellom parallelle ledere.
- **Eksamensbelegg:** Sjanger E8 i **100 %**. Signatur: $B$ på aksen til en ringstrøm, i en solenoide, mellom parallelle ledere. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.1; [Magnetfelt fra strøm](/fysikk2/fysikk2-4-3) og [Magnetfelt og magnetiske krefter](/fysikk2/fysikk2-4-1) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: Biot–Savart $d\mathbf{B}=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf{l}\times\hat{\mathbf{r}}}{r^2}$ (integranden hentes fra formelarket); **standardresultater som skal kunne brukes:** $B$ på aksen til ringstrøm $B=\frac{\mu_0 I R^2}{2(z^2+R^2)^{3/2}}$ (i sentrum $\frac{\mu_0 I}{2R}$); solenoide $B=\mu_0 n I$ ($n$ = viklinger per lengde); rett, lang leder $B=\frac{\mu_0 I}{2\pi x}$; kraft per lengde mellom parallelle ledere $\frac{F}{\ell}=\frac{\mu_0 I_1 I_2}{2\pi x}$. **Rask vei til tall (MC-oppskrift):** velg riktig ferdigformel (ring/solenoide/leder) og sett inn; for $N$ viklinger, gang med $N$. **Utledning som kreves aktivt:** vis $B=\frac{\mu_0 I}{2R}$ i sentrum av en ring fra Biot–Savart. **Figurkrav:** ringstrøm med feltakse; parallelle ledere med kraftretning.
- **Oppgavesjangre:** E8. Mønstereksempel: «En sirkulær strømsløyfe med $N$ viklinger, radius $R$ og strøm $I$ ligger i $xy$-planet. Finn magnetfeltet i sentrum og på aksen i avstand $z$.»
- **Typiske feil:** Glemme $N$-faktoren for flere viklinger; bruke sentrumsformelen på aksen (eller omvendt); feil potens i $(z^2+R^2)^{3/2}$; feil retning (høyrehåndsregel) på $B$.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 8.3: Magnetisk dipol — moment, dreiemoment og energi

- **id:** `tfy4125-8-3` · **number:** 8.3 · **estimatedMinutes:** 50 · **prerequisites:** `tfy4125-8-2`
- **kapitteltype:** teori
- **description:** Magnetisk dipolmoment $\mathbf{m}=NI\mathbf{A}$, dreiemomentet $\boldsymbol{\tau}=\mathbf{m}\times\mathbf{B}$ og den potensielle energien $-\mathbf{m}\cdot\mathbf{B}$.
- **Eksamensbelegg:** Sjanger E9 i **100 %**. Signatur: magnetisk moment av strømsløyfe (ring/sekskant), dreiemoment i felt, energi. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 8.2; [Magnetisk kraft på strømførende leder](/fysikk2/fysikk2-4-4).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **magnetisk dipolmoment** $\mathbf{m}=NI\mathbf{A}$ (retning normalt på sløyfeplanet, høyrehåndsregel; $A$ = arealet, også for sekskant/vilkårlig plan sløyfe); **dreiemoment** $\boldsymbol{\tau}=\mathbf{m}\times\mathbf{B}$ (maks $NIAB$ når $\mathbf{m}\perp\mathbf{B}$); **potensiell energi** $U=-\mathbf{m}\cdot\mathbf{B}$ (min når $\mathbf{m}\parallel\mathbf{B}$); magnetisering $M$ = dipolmoment per volum (kjenne); felt fra magnetisk dipol $\propto 1/r^3$ (kjenne). **Rask vei til tall (MC-oppskrift):** 1) $m=NIA$; 2) dreiemoment $\tau=mB\sin\theta$; 3) energi $U=-mB\cos\theta$. **Utledning som kreves aktivt:** vis $\tau=NIAB$ som maks-dreiemoment på en rektangulær sløyfe. **Figurkrav:** strømsløyfe med $\mathbf{m}$, $\mathbf{B}$ og dreiemomentets retning.
- **Oppgavesjangre:** E9. Mønstereksempel: «En kvadratisk strømsløyfe med side $a$, $N$ viklinger og strøm $I$ står med normalen i vinkel $\theta$ til et homogent felt $B$. Finn dreiemomentet på sløyfa og den potensielle energien.»
- **Typiske feil:** Glemme $N$ i $m=NIA$; bruke feil vinkel ($\sin$ i dreiemoment, $\cos$ i energi — forveksles); fortegn på $U=-\mathbf{m}\cdot\mathbf{B}$; feil areal for ikke-sirkulær sløyfe.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 8.4: Drill: magnetkraft, B-felt og dipol (sjanger E7–E9)

- **id:** `tfy4125-8-4` · **number:** 8.4 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-8-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill: akselerér-så-bøy ($r=mv/qB$), velg riktig $B$-feltformel, og regn dipolmoment/dreiemoment raskt.
- **Eksamensbelegg:** Sjanger E7–E9 samlet (alle 100 %). Varianter: massespektrometer, ring-/solenoidefelt, parallelle ledere, dipolmoment/dreiemoment. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) ladd partikkel → akselerér først ($qU=\tfrac12 mv^2$), så $r=mv/qB$; husk null-arbeid; 2) $B$-felt → velg ring/solenoide/leder-formel, gang med $N$; 3) dipol → $m=NIA$, $\tau=mB\sin\theta$, $U=-mB\cos\theta$. Gjennomregnet MC-case med margnotat om akselerér-først-fella og null-arbeid-poenget. 12–15 oppgaver på eksamensnivå, minst tre partikkelbane, tre $B$-felt, tre dipol.
- **Oppgavesjangre:** E7, E8, E9. Mønstereksempel: «Et proton akselereres over spenning $U$ og går inn i et felt $B$ fra en lang solenoide med $n$ viklinger per lengde og strøm $I$. (a) Finn $B$ inne i solenoiden. (b) Finn radiusen i protonets bane. (c) Hvor mye arbeid gjør magnetkraften per omløp?»
- **Typiske feil:** Hele E7–E9-repertoaret: akselerér-først glemt, magnetarbeid ≠ 0-feilen, $N$-faktor, feltformel-forveksling, vinkelfeil i dipol.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A ladd partikkel: akselerasjon + $r=mv/qB$ · 8.B $B$ fra ring/solenoide/leder · 8.C magnetisk dipol: dreiemoment + energi · 8.D MC-format: tette flervalgsspørsmål magnetisme)

---

### Del 9 — Induksjon og RLC-svingekretsen *(prioritet: PERFEKT)*

#### Kapittel 9.1: Induksjon og induktans

- **id:** `tfy4125-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tfy4125-8-2`
- **kapitteltype:** teori
- **description:** Faradays lov, den roterende sløyfa ($\Phi=B_0 A\cos\omega t$), Lenz' lov, og selv-/gjensidig induktans.
- **Eksamensbelegg:** Sjanger E10 i **63 %**. Signatur: roterende sløyfe gir vekselspenning; selv-/gjensidig induktans til solenoide. Prioritet: **kunne** (men bygger opp mot RLC).
- **Forkunnskaper/kryssbok:** kap. 8.2; [Magnetisk fluks](/fysikk2/fysikk2-5-1), [Faradays induksjonslov](/fysikk2/fysikk2-5-2) og [Lenz lov](/fysikk2/fysikk2-5-3) (fysikk 2-fundament).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: magnetisk fluks $\Phi_B=\int\mathbf{B}\cdot d\mathbf{A}$; **Faradays lov** $\varepsilon=-\frac{d\Phi_B}{dt}$; **roterende sløyfe** $\Phi=B_0 A\cos\omega t\Rightarrow\varepsilon=\omega B_0 A\sin\omega t$ (amplitude $\varepsilon_0=NB_0 A\omega$); **Lenz' lov** for strømretning; **selvinduktans** $L=\frac{\mu N^2 A}{\ell}$ (solenoide), spenning $\varepsilon=-L\frac{dI}{dt}$; **gjensidig induktans** $M=\mu_0 nNA$, $\varepsilon_2=-M\frac{dI_1}{dt}$. **Rask vei til tall (MC-oppskrift):** 1) roterende sløyfe → amplitude $NB_0 A\omega$; 2) induktans → sett inn i $L=\mu N^2 A/\ell$; 3) indusert spenning → $L\,dI/dt$ eller $M\,dI/dt$. **Utledning som kreves aktivt:** utled $\varepsilon(t)$ for roterende sløyfe; utled solenoidens $L$. **Figurkrav:** roterende sløyfe i felt; to koblede spoler (gjensidig induktans).
- **Oppgavesjangre:** E10. Mønstereksempel: «En rektangulær sløyfe med $N$ viklinger og areal $A$ roterer med vinkelfart $\omega$ i et homogent felt $B_0$. Finn amplituden til den induserte spenningen.»
- **Typiske feil:** Glemme $N$ i amplituden; forveksle $\sin$/$\cos$ (fluks $\cos$, emf $\sin$); fortegnsfeil (Lenz); glemme $N^2$ i selvinduktansen.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 9.2: RLC-svingekretsen via den mekaniske analogien (+ vekselstrøm)

- **id:** `tfy4125-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `tfy4125-5-2`, `tfy4125-9-1`
- **kapitteltype:** teori
- **description:** LC/RLC-kretsen løst med analogien $L\leftrightarrow m$, $1/C\leftrightarrow k$, $R\leftrightarrow b$ — pluss vekselstrømseffekt og faseforskjeller.
- **Eksamensbelegg:** Sjanger E12 (RLC via mekanisk analogi) i **100 %** — **signatursjangeren** i EM-halvdelen; E11 (vekselstrøm/faser) i **63 %**. Signatur: egenfrekvens $T=2\pi\sqrt{LC}$, dempet amplitude med $\gamma=R/2L$, resonans, $Q$-faktor — alt lest av fra den mekaniske analogien. Prioritet: **perfekt**.
- **Forkunnskaper/kryssbok:** kap. 5.2 (mekanisk dempet svingning — analogigrunnlaget) og kap. 9.1; [Repetisjon av derivasjon](/r2/r2-2-1).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: **den mekaniske analogien** $L\leftrightarrow m$, $\frac{1}{C}\leftrightarrow k$, $R\leftrightarrow b$, ladning $q\leftrightarrow$ posisjon $x$, strøm $I\leftrightarrow$ fart $v$; **egenfrekvens** $\omega_0=\frac{1}{\sqrt{LC}}$, periode $T=2\pi\sqrt{LC}$; **dempet:** ladnings-/strømamplitude $\sim e^{-\gamma t}$ med **$\gamma=\frac{R}{2L}$** (analogt med $b/2m$ — IKKE $R/2C$); **resonans:** strømamplitude $I_0=\frac{V_0}{R}$; **kvalitetsfaktor** $Q=\frac{\omega_0}{\Delta\omega}=\frac{1}{R}\sqrt{\frac{L}{C}}$; energi $\frac{Q_0^2}{2C}$ (analogt $\tfrac12 kx^2$); **vekselstrømseffekt** $\langle P\rangle=\frac{V_0^2}{2R}$ (bruk $\langle\sin^2\omega t\rangle=\tfrac12$); faseforskjell/amplitude til $V_2-V_1$ via $\sin a-\sin b=2\cos\frac{a+b}{2}\sin\frac{a-b}{2}$. **Rask vei til tall (MC-oppskrift):** oversett kretsen til masse-fjær-demper, bruk den mekaniske formelen du allerede kan, oversett tilbake. Sjekk ALLTID $\gamma=R/2L$. **Utledning som kreves aktivt:** sett opp analogien fra $L\ddot{q}+R\dot{q}+q/C=0$ mot $m\ddot{x}+b\dot{x}+kx=0$. **Figurkrav:** RLC-krets ved siden av masse-fjær-demper med analogitabell.
- **Oppgavesjangre:** E12, E11. Mønstereksempel: «En RLC-krets har induktans $L$, kapasitans $C$ og motstand $R$. (a) Finn egenfrekvensen. (b) Etter hvor mange svingninger er ladningsamplituden redusert til $1/e$? (c) Hva er $Q$-faktoren?»
- **Typiske feil (analysen §5.9):** **$\gamma=R/2C$ i stedet for $R/2L$** (den innebygde analogifella — verst når man husker den mekaniske $b/2m$ feil); forveksle hvilken størrelse som svarer til masse/fjær/demping ($L\leftrightarrow m$, ikke $C\leftrightarrow m$); glemme faktor $\tfrac12$ i $\langle P\rangle=V_0^2/2R$; feil trigidentitet i faseforskjell.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 9.3: Drill: induksjon og RLC-analogien (sjanger E10–E12)

- **id:** `tfy4125-9-3` · **number:** 9.3 · **estimatedMinutes:** 85 · **prerequisites:** `tfy4125-9-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill: roterende sløyfe/induktans, og RLC oversatt til mekanikk — med jerngrep på $\gamma=R/2L$.
- **Eksamensbelegg:** Sjanger E10–E12 samlet (E12 100 %, E10/E11 63 %). Varianter: roterende sløyfe, gjensidig induktans, RLC egenfrekvens/demping/resonans/$Q$, vekselstrømseffekt, faseforskjell. Prioritet: **perfekt** (E12).
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) induksjon → Faraday, amplitude $NB_0 A\omega$; 2) RLC → oversett til masse-fjær-demper, bruk mekanisk formel; **3) sjekk $\gamma=R/2L$**; 4) resonans → $I_0=V_0/R$; 5) $Q=\frac{1}{R}\sqrt{L/C}$; 6) effekt → $V_0^2/2R$. Gjennomregnet MC-case med margnotat om $R/2L$-fella og analogitabellen. 12–15 oppgaver på eksamensnivå, minst fire RLC og to induksjon.
- **Oppgavesjangre:** E10, E11, E12. Mønstereksempel: «En LC-krets svinger fritt. (a) Finn perioden. (b) En motstand $R$ legges i serie — finn dempingskoeffisienten $\gamma$ og forklar analogien til et masse-fjær-demper-system. (c) Hva blir $Q$-faktoren?»
- **Typiske feil:** Hele E10–E12-repertoaret: $R/2L$ vs. $R/2C$, feil analogi-tilordning, $\sin/\cos$ i induksjon, faktor $\tfrac12$ i effekt, $N$-faktor.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (9.A roterende sløyfe + induktans · 9.B RLC egenfrekvens + demping ($\gamma=R/2L$) · 9.C resonans + $Q$-faktor + vekselstrømseffekt · 9.D MC-format: tette flervalgsspørsmål induksjon/RLC)

---

### Del 10 — Historisk appendiks: termofysikk *(prioritet: KJENNE — ikke gjeldende pensum)*

#### Kapittel 10.1: Termofysikk-malen (historisk, for eldre øvingssett)

- **id:** `tfy4125-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **kapitteltype:** teori (kompakt appendiks)
- **description:** Ideell gasslov, 1. hovedsetning, prosesser, Carnot-virkningsgrad og entropi — SAMLET og TYDELIG MERKET som utfaset (kun for kandidater som øver på sett før 2022).
- **Eksamensbelegg:** Sjanger H1. Fast tredjeblokk **2004–2021** (typisk oppgave 3 / spm. 24–30), **faset helt ut fra 2022** (0 av 8 nyere sett). Formlene står fortsatt på formelarket, men eksamineres ikke lenger. Prioritet: **kjenne** — kapitlet åpner med en tydelig ramme: «Dette er IKKE gjeldende pensum. Les kun hvis du øver på eksamenssett fra 2021 eller tidligere.»
- **Forkunnskaper/kryssbok:** ingen (selvstendig, kompakt); refererer i klartekst til at energibegrepet fra Del 2 gjenbrukes.
- **Innholdskontrakt:** BØR KJENNE TIL (alt hentes fra formelarket — dette er gjenkjenning, ikke drill): ideell gasslov $pV=nRT$ (alltid **kelvin**); 1. hovedsetning $\Delta U=Q-W$, $W=\int p\,dV$; prosesser (isoterm, isobar, isokor, adiabat $pV^\gamma=\text{konst}$, $TV^{\gamma-1}=\text{konst}$); varmekapasiteter $C_V$, $C_P=C_V+R$, $\gamma=C_P/C_V$; **Carnot-virkningsgrad** $\eta=1-\frac{T_k}{T_v}$; **entropiendring** $\Delta S=\int\frac{dQ_\text{rev}}{T}=nR\ln\frac{V_2}{V_1}$ (isoterm); varmeledning $H=\frac{\kappa A\Delta T}{L}$ (sjikt i serie); TS-diagram. Kort «rask vei til tall» KUN for de vanligste variantene (Carnot $\eta$, isoterm arbeid/entropi). **Merk eksplisitt:** numeriske Euler-metoder (sjanger H2) er også utfaset og dekkes IKKE — nevnes bare som historisk kuriosum.
- **Oppgavesjangre:** H1 (historisk). Mønstereksempel: «En Carnot-maskin arbeider mellom $T_v$ og $T_k$. Finn virkningsgraden. (Historisk oppgavetype — ikke gjeldende pensum.)»
- **Typiske feil (analysen §5.12):** Bruke celsius i stedet for **kelvin** i gasslov/adiabat/entropi; feil fortegn i $\Delta U=Q-W$; blande $C_V$ og $C_P$; feil prosess-sammenheng ($pV^\gamma$ vs. $TV^{\gamma-1}$).
- **Quiz: 16 · Flashcards: 16** (tydelig merket «historisk — ikke gjeldende pensum»)

**Prøve-kvote Del 10:** ingen separat prøve (kjenne-stoff, ikke gjeldende pensum). Dekkes ved behov av eldre øvingssett kandidaten selv finner.

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: MC-strategi og avrundingsdisiplin

- **id:** `tfy4125-11-1` · **number:** 11.1 · **estimatedMinutes:** 40 · **prerequisites:** `tfy4125-0-1`
- **kapitteltype:** teori/strategi
- **description:** Hvordan man høster 40 flervalgspoeng raskt og feilfritt: tidsbudsjett, avrundingsdisiplin mot tette alternativer, og de innebygde fellene samlet.
- **Eksamensbelegg:** Metakapittel for hele MC-formen. Bygger på at kun bokstavsvaret teller og at **svaralternativene ligger tett** (0,11 / 0,21 / 0,31 …), slik at avrunding/faktor/fortegn avgjør. Prioritet: **perfekt** (dette er selve eksamensferdigheten).
- **Forkunnskaper/kryssbok:** hele boka i kortform; refererer til drillkapitlene 1.3–9.3.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (strategiske ferdigheter): **tidsbudsjett** (~6 min per spørsmål på 40 spm. på 4 t, med margin; hopp videre og merk usikre); **avrundingsdisiplin** — behold 3–4 siffer gjennom hele regnekjeden, rund først til slutt, sammenlign med alternativenes avstand; **når alternativene er tette** → regn nøyaktig; når de er spredt («godt nok med omtrentlig verdi») → overslag godtas; **sjekk-før-svar-listen** (enhet, tierpotens, fortegn, faktor); **de innebygde fellene samlet** (fra §5): glemt rotasjonsledd (7/10), $\gamma=R/2L$ vs. $R/2C$, serie/parallell kondensator vs. motstand, glemt Steiner, magnetarbeid ≠ 0, akselerér-før-baneradius, dele på $N$ vs. $N-1$; **eliminasjonsstrategi** (utelukk urimelige alternativer ved dimensjon/størrelsesorden). **Rask vei til tall** er hele kapitlets tema. Ingen tung utledning.
- **Oppgavesjangre:** Blandet MC-diagnostikk: 8–10 korte spørsmål der fella er innebygd i avlederne, med forklaring på hvilken felle hvert galt alternativ representerer.
- **Typiske feil:** Alle §5-fellene, presentert som «hvilket galt alternativ ville du valgt hvis du gjorde denne feilen».
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 11.2: Øvingseksamen 1 — 40-spørsmålsmalen (standard)

- **id:** `tfy4125-11-2` · **number:** 11.2 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4125-11-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers flervalgseksamen etter standardmalen: ~40 spørsmål A–F, spm. 1–2 måling, 1–20 dynamikk, 21–40 EM.
- **Eksamensbelegg/miks:** Speiler et typisk moderne sett (2023–2025-form): **~40 spørsmål A–F med tette svaralternativer, kun bokstavsvaret teller**. Fordeling: spm. 1–2 måling/statistikk (D12); spm. 3–20 dynamikk-kjernen med **minst ett fra hver av** kinematikk (D1), banevinkel/krumning (D2/D4), skråplan (D5), rullende kule (D3), støt (D6), treghetsmoment/Steiner (D7), dreieimpuls (D8), svingninger dempet (D9), pluss et utvalg fra {gravitasjon, statikk, terminalfart}; spm. 21–40 EM-kjernen med **minst ett fra hver av** superposisjon E/V (E1), dipolmoment/energi (E1), kondensator/dielektrikum (E4/E3), motstandskrets (E5), RC (E6), ladd partikkel i $B$ (E7), $B$ fra ring/solenoide (E8), magnetisk dipol (E9), induksjon (E10), **RLC via mekanisk analogi (E12)**, vekselstrømseffekt (E11). Alle oppgaver nyskrevne med egne tall. **Løsningsforslag i sensors ånd: avgjørende lov + én regnelinje + bokstavsvar**, i `collapsible` per spørsmål, med markering av hvilken felle hvert galt alternativ representerer. `tip`-notat om tidsbudsjett (~6 min/spm.).
- **Oppgavesjangre:** D1–D9, D12 (spm. 1–20) + E1–E12 (spm. 21–40). Full 40-spørsmålsmal.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 2 — 40-spørsmålsmalen

- **id:** `tfy4125-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4125-11-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i samme mal, med de tyngre variantene av kjerne-sjangrene og en ny tallkontekst gjennomgående.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal som 11.2, men vektet mot de **tyngre variantene**: kinematikk med potens$\times$eksponential-vinkelfart og rundetelling, gliding→ren rulling, fysisk pendel med Steiner, kontinuerlig ladning/ladde plan, RLC med $Q$-faktor og resonans, gjensidig induktans. Måle-/statistikkspørsmålene tester standardfeil vs. standardavvik. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + én regnelinje i `collapsible` per spørsmål, med felle-forklaring på avlederne; `tip`-notat om hvor de innebygde fellene sitter i akkurat dette settet.
- **Oppgavesjangre:** D1–D10, D12 + E1–E12. Full 40-spørsmålsmal (tyngre varianter).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 3 — 40-spørsmålsmalen (generalprøve)

- **id:** `tfy4125-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `tfy4125-11-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett generalprøve som sammen med 11.2–11.3 dekker samtlige sjangre D1–D12/E1–E12 minst én gang — under fullt tidspress.
- **Eksamensbelegg/miks:** Samme 40-spørsmålsmal, kalibrert som **generalprøve**: dekker de resterende sjangervariantene som ikke ble truffet i 11.2–11.3 (bl.a. effekt $P=Fv$, statikk/momentbalanse, terminalfart, satellitt/rakett, resistivitet/Drude, faseforskjell-superposisjon, magnetisering), i tillegg til hele kjernen. Svaralternativene er bevisst **ekstra tette** enkelte steder for å drille avrundingsdisiplin. Alle oppgaver nyskrevne. Løsningsforslag som avgjørende lov + én regnelinje i `collapsible` per spørsmål; `tip`-notat om selvevaluering (hvilke sjangre traff du feil på → tilbake til hvilket drillkapittel). Sammen dekker 11.2–11.4 alle D-/E-sjangrene minst én gang.
- **Oppgavesjangre:** D1–D12 + E1–E12 (full dekning på tvers av de tre settene). Full 40-spørsmålsmal.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 11:** dekkes av de 3 øvingseksamenene (11.2–11.4) + MC-strategien (11.1) — ingen separate delprøver.

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

### Quiz og flashcards per kapittel (summeringskontroll)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+20 = **32** | 14+14 = **28** |
| 1 | 1.1–1.3 | 26+22+16 = **64** | 22+20+8 = **50** |
| 2 | 2.1–2.3 | 24+26+16 = **66** | 20+24+8 = **52** |
| 3 | 3.1–3.3 | 24+18+14 = **56** | 20+16+8 = **44** |
| 4 | 4.1–4.3 | 26+24+16 = **66** | 24+22+8 = **54** |
| 5 | 5.1–5.3 | 24+22+16 = **62** | 22+20+8 = **50** |
| 6 | 6.1–6.4 | 26+20+18+16 = **80** | 24+18+16+8 = **66** |
| 7 | 7.1–7.3 | 24+24+16 = **64** | 22+22+8 = **52** |
| 8 | 8.1–8.4 | 24+22+20+16 = **82** | 20+20+18+8 = **66** |
| 9 | 9.1–9.3 | 22+26+16 = **64** | 20+24+8 = **52** |
| 10 | 10.1 | **16** | **16** |
| 11 | 11.1–11.4 | 16+6+6+6 = **34** | 14+0+0+0 = **14** |
| **Sum** | **36 kap.** | **686 ≥ 500 ✓** | **544 ≥ 500 ✓** |

**Hvorfor quiz-kvoten er bevisst høy (686):** TFY4125-eksamen ER flervalg med tette
distraktorer, så **quizbanken er direkte eksamenstrening** — hvert quizspørsmål er
en mini-eksamensoppgave med realistisk tette avledere (de vanlige regnefeilene som
gale alternativer). Derfor sikter boka høyt på quiz (600–750-sjiktet), ikke på
gulvet 500. Fordelingen speiler frekvensen: de tre elektrostatikk-/magnetisme-
tunge EM-delene (Del 6 og 8, alle 100 %-sjangre) bærer 162 quiz, og dynamikk-
kjernen (Del 1–2, 4–5) bærer 258. Flashcards (544) er formel-, oppskrift- og
felle-orienterte: hvert kort er enten en kjerneformel (med markering av om den
står på formelarket), et steg i en «rask vei til tall»-oppskrift, eller en typisk
felle — dette er et regnefag med moderat begrepsmengde, men rikt formel- og
oppskriftsapparat, så flashcards ligger komfortabelt over gulvet uten å blåses opp.

### Prøver per del (4 per temadel 1–9, 36 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre. **Prøvekapittel-id:**
`tfy4125-<del>-prove`, chapterNumber `<del>.P`. Del 1–9 har hver ett prøvekapittel
med 4 prøver (36 prøver totalt); minst én prøve per del er i **MC-format**
(tette flervalgsspørsmål, kun bokstavsvar) for å speile eksamen, mens de øvrige
kan vise symbolsk løsning + rask vei til tall. Løsningsforslag i `collapsible` per
oppgave, med markering av felle-alternativene. Del 0, 10 og 11 har ingen separate
delprøver (eksamenskart/måling, historisk kjenne-stoff, og øvingseksamener).

**Del 1 — Kinematikk og krum bane:** 1.A kinematikk fra $v(t)$: maks-$a$ + strekning (25 min) · 1.B vinkelfart + rundetelling (25) · 1.C banevinkel + krumning/normalkraft (25) · 1.D MC-format: kinematikk-kjeden (30).

**Del 2 — Kraft, energi og rulling:** 2.A skråplan m/friksjon (25) · 2.B rullende kule energibevaring (25) · 2.C kombinert kraft/energi + effekt (30) · 2.D MC-format med 7/10-fella (30).

**Del 3 — Bevegelsesmengde, støt og baner:** 3.A elastisk/uelastisk støt + energitap (25) · 3.B impuls + ballistisk pendel (30) · 3.C satellittbane + rakett (25) · 3.D MC-format støt/impuls/bane (30).

**Del 4 — Rotasjon:** 4.A massesenter + treghetsmoment (25) · 4.B Steiner + fysisk oppsett (25) · 4.C dreieimpuls m/fortegn + gliding→rulling (30) · 4.D MC-format rotasjon (30).

**Del 5 — Svingninger:** 5.A egenfrekvens + seriefjærer (25) · 5.B fysisk pendel m/Steiner (25) · 5.C dempet amplitude + antall perioder (30) · 5.D MC-format svingninger (30).

**Del 6 — Elektrostatikk:** 6.A felt + potensial fra punktladninger (25) · 6.B dipolmoment + ladningsenergi (25) · 6.C kontinuerlig ladning + ladde plan (30) · 6.D MC-format elektrostatikk (30).

**Del 7 — Kondensatorer og kretser:** 7.A kondensatornettverk + dielektrikum + energi (30) · 7.B motstandsnettverk + effekt (25) · 7.C RC-transient (30) · 7.D MC-format kretser (30).

**Del 8 — Magnetfelt og ladd partikkel:** 8.A ladd partikkel: akselerasjon + $r=mv/qB$ (25) · 8.B $B$ fra ring/solenoide/leder (25) · 8.C magnetisk dipol: dreiemoment + energi (25) · 8.D MC-format magnetisme (30).

**Del 9 — Induksjon og RLC:** 9.A roterende sløyfe + induktans (25) · 9.B RLC egenfrekvens + demping $\gamma=R/2L$ (30) · 9.C resonans + $Q$-faktor + vekselstrømseffekt (30) · 9.D MC-format induksjon/RLC (30).

### Øvingseksamener (3 komplette 4-timers MC-sett — kap. 11.2–11.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (11.2) | Standard 40-spm (2023–2025) | Spm. 1–2 måling, 3–20 dynamikk-kjerne, 21–40 EM-kjerne; hver 100 %-sjanger minst én gang |
| Øvingseksamen 2 (11.3) | Tyngre varianter | Samme mal, tyngre varianter (rundetelling, gliding→rulling, fysisk pendel, RLC m/$Q$, gjensidig induktans) |
| Øvingseksamen 3 (11.4) | Generalprøve (full dekning) | Samme mal + de resterende sjangervariantene (effekt, statikk, terminalfart, Drude, faseforskjell, magnetisering); ekstra tette alternativer |

Til sammen dekker de tre settene samtlige sjangre D1–D12/E1–E12 minst én gang,
alle med den faste todelingen (spm. 1–20 dynamikk, 21–40 EM) og tette
svaralternativer der kun bokstavsvaret teller.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t ren flervalg, ~40 spm. A–F, kun
   bokstavsvaret teller, hjelpemiddelkode C med formelark), den faste todelingen
   (spm. 1–2 måling, 1–20 dynamikk, 21–40 EM) og prognosen fra kap. 0.1.
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   *perfekt* (kinematikk-kjeden, rullende kule/energibevaring, skråplan m/friksjon,
   treghetsmoment/Steiner, dreieimpuls, svingninger, Coulomb-superposisjon,
   kondensator/kretser, ladd partikkel i $B$, $B$ fra strøm, magnetisk dipol,
   **RLC via mekanisk analogi**), *kunne* (støt, krumning/normalkraft,
   gliding→rulling, kontinuerlig ladning, RC, induksjon/induktans,
   vekselstrømseffekt, måling), *kjenne* (statikk, terminalfart, resistivitet/
   Drude, magnetisering, faseforskjell, gravitasjon/rakett, **termofysikk som
   historisk beredskap**).
3. **Rask vei til tall** — «MC-oppskriftene» fra drillkapitlene (1.3, 2.3, 3.3,
   4.3, 5.3, 6.4, 7.3, 8.4, 9.3) i kortform: for hver kjerne-sjanger, den
   korteste feilfrie regnekjeden fra tall til bokstavsvar.
4. **Sensorreglene og MC-strategien** — kun bokstavsvaret teller; alle spm. likt;
   **svaralternativene ligger tett** → avrundingsdisiplin (behold 3–4 siffer, rund
   til slutt), tidsbudsjett (~6 min/spm.), hopp-og-merk, eliminasjon ved
   dimensjon/størrelsesorden (kap. 11.1).
5. **Feilkatalogen** — de typiske fellene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den: glemt rotasjonsledd (7/10) → 2.2;
   $\gamma=R/2L$ vs. $R/2C$ → 9.2 (og mekanisk $b/2m$ → 5.2); serie/parallell
   kondensator vs. motstand → 7.1/7.2; glemt Steiner → 4.1; magnetarbeid ≠ 0 →
   8.1; akselerér-før-baneradius → 8.1; dele på $N$ vs. $N-1$ → 0.2; fortegn på
   dreieimpuls → 4.2; kinematikk på krum bane → 2.2.
6. **Formelarket i praksis** — kjerneverktøyene per tema med markering **må kunne
   brukes/utledes aktivt** vs. **hentes fra formelark** (konstanter,
   Biot–Savart-integranden, adiabat-/entropiformlene). Treningsråd: løs alltid
   oppgaver MED formelarket ved siden av, slik eksamen er — boka trener *rask,
   feilfri bruk*, ikke pugg.
7. **Hva du IKKE trenger** — eksplisitt: bølger, optikk, fluid/Bernoulli,
   relativitet, kjernefysikk (0 treff, aldri pensum) og numeriske Python-metoder
   (utfaset). Termofysikk (Del 10) kun hvis du øver på sett før 2022.
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → dynamikk (1 → 2 → 3 → 4 → 5) → EM (6 → 7 → 8 → 9) → MC-strategi (11.1
   spres utover) → de tre øvingseksamenene (11.2–11.4) de siste ukene under fullt
   tidspress (240 min); drillkapitlene brukes som repetisjon rett før eksamen.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `tfy4125` med alle 36
   kapitler + 9 prøvekapitler (id/number/title/description/estimatedMinutes/
   topics/prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-hoyskole.ts` (append); `sectionNames` fra
   §2-tabellen (obligatorisk — ellers viser bokforsiden «Seksjon N»). Legg emnet i
   `src/app/trinn/hoyere/institusjoner.ts` under NTNU, navn «TFY4125 Fysikk».
2. **Del 0** (0.1 + 0.2) — etablerer sjangernavnene D1–D12/E1–E12, todelingen,
   frekvenstallene og MC-formen som resten av boka refererer til.
3. **Dynamikk-kjeden Del 1 → 2 → 3 → 4 → 5** (faglig avhengighet: kinematikk →
   kraft/energi → bevegelsesmengde → rotasjon → svingninger). 5.2 (dempet
   svingning) MÅ bygges før 9.2 (RLC-analogien bruker den).
4. **EM-kjeden Del 6 → 7 → 8 → 9** (elektrostatikk → kretser → magnetisme →
   induksjon/RLC). 9.2 avhenger av BÅDE 5.2 og 9.1 — flagg avhengigheten.
5. **Del 10** (termofysikk) — selvstendig, kompakt, tydelig merket kjenne; kan
   bygges når som helst.
6. **Del 11 til slutt** — MC-strategien (11.1) og de tre øvingseksamenene
   (11.2–11.4) gjenbruker hele boka; bygges av én agent som leser HELE skjelettet.
   Sørg for at 11.2–11.4 til sammen dekker alle sjangre D1–D12/E1–E12.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges som prøvekapitler per del
   (`tfy4125-<del>-prove`, chapterNumber `<del>.P`) — endelig blokk-skjema
   fastsettes i BYGGEKONTRAKT.md (fase 3).

### Batching-forslag til byggebølgen (én agent per del, jf. produksjonsløype fase 4)
- Agent A: Del 0 + Del 1 (+ prøve 1)
- Agent B: Del 2 + Del 3 (+ prøver 2, 3)
- Agent C: Del 4 + Del 5 (+ prøver 4, 5) — leverer 5.2 som 9.2 avhenger av
- Agent D: Del 6 (+ prøve 6)
- Agent E: Del 7 (+ prøve 7)
- Agent F: Del 8 (+ prøve 8)
- Agent G: Del 9 (+ prøve 9) — les 5.2-kontrakten (RLC-analogien)
- Agent H: Del 10 + Del 11 (les HELE skjelettet for øvingseksamenene)

### Sjekkliste før «ferdig»

- [ ] **JSON-validering:** hver kapittelfil parser (`json.load`); generer JSON via
      `json.dump`, aldri råskriving (LaTeX-`\\`-fellen); `npm run build` grønn.
- [ ] **LaTeX:** alle formler i `$...$`/`$$...$$`; ingen unicode-brøker;
      konsistente symboler ($\mathbf{F}$, $\mathbf{E}$, $\mathbf{B}$, $\mathbf{L}$,
      $\mathbf{p}$, $\mathbf{m}$, $\omega_0$, $\gamma$, $\varepsilon_0$, $\mu_0$,
      $I$ (treghetsmoment/strøm — hold adskilt per kontekst), $\lambda$, $\tau$).
- [ ] **Notasjonskonsistens (tekstsøk over alle tfy4125-filer):** vektor
      (kraft/felt/dreieimpuls) aldri forvekslet med skalar (energi/potensial/
      treghetsmoment); fortegn/retning eksplisitt på dreieimpuls og feltbidrag;
      $\gamma=R/2L$ (aldri $R/2C$) i RLC og $\gamma=b/2m$ i mekanikk; **forbudt
      som satsingsstoff** (kun i Del 0-avgrensningen og Del 10 som eksplisitt
      historisk kjenne): termofysikk som kjernepensum, numeriske Python-metoder,
      og — helt utelatt — bølger, optikk, fluid/Bernoulli, relativitet,
      kjernefysikk (0 treff i tekstsøk utenfor Del 0-avgrensningen).
- [ ] **Rask vei til tall + avrundingsdisiplin:** HVERT teori-/drillkapittel har
      et tydelig merket «Rask vei til tall (MC-oppskrift)»-avsnitt OG en
      avrundings-/faktorfelle-`warning`; alle talleksempler beholder 3–4 siffer og
      runder til slutt.
- [ ] **Formelark-disiplin:** hvert delkapittels Symbol- og formelliste markerer
      «står på formelarket» vs. «må kunne brukes/utledes aktivt»; ingen
      konstantverdier presenteres som puggestoff.
- [ ] **Enhets- og sifferdisiplin:** alle løsningsforslag og eksempler har enhet
      på hvert tallsvar og riktig antall gjeldende siffer — boka *modellerer*
      sensorkravet (tette alternativer).
- [ ] **Kapittel-DNA:** hvert teorikapittel har Eksamensvinkel-`tip` (med frekvens/
      vekt fra dette skjelettet), Forkunnskaper med kryssbok-lenker (KUN til
      kapitler som finnes — de lenkede fysikk2-/r2-kapitlene i §3 er verifisert mot
      metadataene 7. juli 2026; **fys1120 og fys1001 er IKKE bygget/skal ikke
      lenkes, kun refereres i klartekst**), `collapsible` Symbol- og formelliste,
      2–4 eksempler (siste på eksamensnivå), Typiske feil-`warning`, 6–12 øvinger
      med `solution` + `hints` (stigende), repetisjons-`collapsible`; drillkapitler
      har løsningsoppskrift + gjennomregnet MC-case + 12–15 oppgaver på
      eksamensnivå.
- [ ] **MC-kalibrering av quiz:** quizspørsmålene er numeriske flervalgsspørsmål
      med realistisk tette avledere (de vanlige regnefeilene som gale alternativer);
      `options[0]` = riktig svar (runtime stokker).
- [ ] **Quiz-sum ≥ 686 og flashcard-sum ≥ 544** per kvotetabellen i §4
      (kontrollsummér per del). Quiz bevisst høyt (direkte eksamenstrening).
- [ ] **Prøver:** 4 per temadel 1–9 (36 stk, `tfy4125-<del>-prove`) — minst én per
      del i MC-format + 3 øvingseksamener (11.2–11.4) som til sammen dekker
      sjangrene D1–D12/E1–E12; hver øvingseksamen følger 40-spørsmålsmalen med
      todelingen (1–20 dynamikk, 21–40 EM) og måle-/statistikkspørsmål i starten.
- [ ] **Termofysikk-merking:** Del 10 åpner og lukker med tydelig ramme «historisk
      — ikke gjeldende pensum, kun for eldre øvingssett»; ingen andre kapitler
      behandler termofysikk som kjernepensum.
- [ ] **Opphavsrett:** ALLE oppgaver nyskrevne — egne tall, kontekster og
      formuleringer; ingen tekst fra reelle sett/løsningsforslag; skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett inn som oppgaver.
- [ ] **Verifiser rendering:** prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen. ALDRI meld
      ferdig uten dette.

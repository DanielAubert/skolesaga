# Eksamensanalyse: TFY4125 Fysikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv for
> TFY4125 (2004–2025): ca. 30 unike eksamenssett, de fleste med tilhørende
> løsningsforslag/sensorveiledning. Arkivet finnes i tre navnekonvensjoner som delvis
> **overlapper (samme eksamen, ulik fil)** — `E_TFY4125_ÅÅMMDD` / `L_…` (2018–2025),
> `E-TFY4125-DDmmmÅÅÅÅ` / `L-…` (2004–2017) og `TFY4125-ÅÅÅÅV/K` / `…-LF` (2015–2024).
> Etter deduplisering dekker arkivet vår- og kontinuasjonseksamener sammenhengende fra
> 2004 til 2025.
>
> **Samplingsstrategi:** Alle løsningsforslag fra 2022–2025 er lest fullstendig (MC-æraen,
> nåværende format). Løsningsforslag 2017, 2019, 2020, 2021 er lest grundig (den
> tradisjonelle/blandede æraen). Eldre sett (2004–2016) er skumlest for temaregistrering,
> og hele arkivet er maskinelt gjennomsøkt for temaforekomst. Åtte eldre skannede
> løsnings-PDF-er (2008–2012) ga ingen tekst ved OCR og er kun temaregistrert via
> tilhørende oppgavesett. **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der
> kildene tillater det.
>
> **Hovedbudskap i én setning:** TFY4125 er i dag en **ren flervalgseksamen (ca. 40
> spørsmål, A–F)** i **dynamikk (spm. 1–20) og elektromagnetisme (spm. 21–40)** — uten
> termofysikk, bølger, optikk, fluidmekanikk, relativitet eller kjernefysikk, som enten
> aldri har vært pensum eller er faset ut.

---

## 1. Eksamensform og utvikling

### Nåværende form (2023–2025 — normgivende)

- **Skriftlig skoleeksamen, 4 timer** (09.00–13.00). Hjelpemiddelkode **C**: bestemt,
  enkel kalkulator + trykt/håndskrevet formelmateriell + **utdelt formelark** (se del 6).
  Bokstavkarakter A–F.
- **Rent flervalg: ca. 40 spørsmål med svaralternativ A–F.** Kun det endelige
  bokstavsvaret teller; ingen uttelling for mellomregning. Løsningsforslaget er derfor
  ekstremt kompakt — **én regnelinje per spørsmål**.
- **Fast todeling av settet:** spørsmål **1–20 er dynamikk/mekanikk**, spørsmål **21–40 er
  elektromagnetisme**. Nesten hvert sett dekker hele bredden i begge halvdeler.
- **Faste åpningsspørsmål om måling/statistikk** (spm. 1–2 i flere sett): middelverdi og
  standardavvik/standardfeil av en måleserie, samt riktig antall gjeldende siffer — arven
  fra laboratoriedelen.
- Svaralternativene ligger **tett** (f.eks. 0.11 / 0.21 / 0.31 …), så en liten regnefeil
  lander typisk på feil alternativ. Sensor har enkelte steder valgt god avstand mellom
  alternativene «slik at vi kommer nært nok med omtrentlig verdi» — men det er unntaket.

### Formatutvikling — viktig å kjenne

| Periode | Form | Struktur | Pensumbredde |
|---|---|---|---|
| 2004–~2013 | **Hybrid.** 4 t, kode C (Rottman + Barnett/Cronin mattetabeller + formelark). Bokmål **og** nynorsk. | Ca. **15 flervalgsspørsmål (A–E, teller 25 %)** + **3 «normale» åpne oppgaver (teller 75 %, 25 % hver)** med deloppgaver a–d | Mekanikk (rotasjon/SHM/statikk) + **termofysikk** (Carnot-syklus) + EM (Ampère/induksjon) |
| 2014–2017 | **Flervalgstungt.** 30 spm., A–E | Ren MC med **numeriske/programmerings­spørsmål** (Python/Euler-diskretisering) innimellom | Mekanikk + EM + **termofysikk** + **numerikk** |
| 2018–2021 | **Åpne oppgaver.** 30 nummererte oppgaver med full utledning | Full symbolsk utledning + tallsvar; sensuren premierer korrekt oppsett | Mekanikk + EM + **termofysikk** (numerikk fader ut etter 2019) |
| 2022 | **Hjemmeeksamen, 6 varianter** (samme oppgave, ulike tallverdier) | 40 spm., symbolsk svar + ett taleksempel per variant | **Mekanikk (1–20) + EM (21–40)** — termofysikk og numerikk **borte** |
| 2023–2025 | **Rent flervalg, 40 spm., A–F** (nåværende standard) | Fast: dynamikk 1–20, EM 21–40; måling/statistikk 1–2 | Kun mekanikk + EM |

**Utviklingstrekk:**

1. **Termofysikk er faset helt ut.** Fra 2004 til 2021 var termodynamikk (varmeledning,
   ideell gasslov, entropi, TS-diagram, Carnot, 2. hovedsetning) en fast tredjeblokk
   (typisk spm. 24–30 / oppgave 3 i de gamle settene). **Fra 2022 av forekommer det ikke i
   det hele tatt** (0 av 8 sett i 2022–2025). Emnet er nå strengt dynamikk + EM, i tråd med
   dagens emnebeskrivelse. En lærebok bør behandle termofysikk som **historisk/valgfritt
   tillegg**, ikke som kjernepensum.
2. **Numeriske metoder / programmering er også faset ut.** Python-/Euler-oppgaver var
   hyppige 2014–2017 og forekom lett i 2019, men er borte fra 2020 og senere. Ikke et
   satsingsområde for eksamensforberedelse.
3. **Formatet har svingt** mellom flervalg (2004-hybrid, 2014–2017, 2023→) og åpen
   utledning (2018–2021), men har nå stabilisert seg på **rent flervalg**. Selve fysikken
   og metodene er stabile på tvers av formatene — det er innpakningen og rettereglene som
   endrer seg.
4. **Måle-/usikkerhetsspørsmål** (middelverdi, standardavvik) er kommet inn som faste
   åpningsspørsmål i MC-æraen — speiler laboratorie- og rapportkomponenten i emnet.

---

## 2. Temafrekvens

### 2A. Kvantitativ frekvens i nåværende MC-format (8 sett: V+K 2022–2025)

Hvert MC-sett har fast struktur, så nesten alle kjernetemaene forekommer i **alle** sett.
Celleverdi = antall av de 8 settene der temaet inngår som minst ett spørsmål.

| Dynamikk (spm. 1–20) | Sett (av 8) | Gjenganger-score |
|---|---|---|
| Kinematikk fra gitt v(t)/ω(t): a=dv/dt (maks ved t=0), s=∫v dt, antall hele runder = ⌊φ/2π⌋ | 8 | **100 %** |
| Banevinkel tan β = dy/dx | 8 | **100 %** |
| Rullende kompakt kule, energibevaring med rotasjonsenergi (K = 7/10·mv²) | 8 | **100 %** |
| Newtons 2. lov på skråplan med friksjon (a = g(sinβ ± μcosβ), snuavstand v₀²/2a) | 8 | **100 %** |
| Treghetsmoment: ∫r²dm (stang λ(x)), punktmasser (trekant), Steiners sats | 8 | **100 %** |
| Massesenter x_CM = Σmᵢxᵢ/Σmᵢ | 8 | **100 %** |
| Dreieimpuls: L = L_spinn + L_bane, fortegn/retning | 8 | **100 %** |
| Svingninger: k = mω₀², egenfrekvens f = ω₀/2π | 8 | **100 %** |
| Dempede svingninger: A(t)=A₀e^(−γt), γ = b/2m | 8 | **100 %** |
| Normalkraft i toppunkt med krumningsradius R = 1/\|y″\| | 7 | **88 %** |
| Bevegelsesmengde/støt: elastisk (v'=(M−m)/(M+m)v), uelastisk energitap ΔK, impuls ∫F dt | 7 | **88 %** |
| Måling/statistikk: middelverdi + standardavvik (åpningsspm.) | 7 | **88 %** |
| Overgang gliding→ren rulling / N2 translasjon+rotasjon, kraft i høyde h | 6 | **75 %** |
| Fysisk pendel T = 2π√(I_A/Mgd) med Steiner | 5 | **63 %** |
| Terminalfart (αvₜ²=mg, forhold via tetthet) | 3 | **38 %** |
| Satellitt/geostasjonær bane (GMm/r² = mω²r) | 3 | **38 %** |
| Rakettligning \|dm/dt\| fra impulsbevarelse | 3 | **38 %** |
| Prosjektilbevegelse (rekkevidde, høyeste punkt) | 3 | **38 %** |
| Effekt P = Fv | 2 | **25 %** |
| Statikk/momentbalanse om valgt punkt | 2 | **25 %** |
| Drevet resonans (hastighetsamplitude, Q-faktor) | 2 | **25 %** |

| Elektromagnetisme (spm. 21–40) | Sett (av 8) | Gjenganger-score |
|---|---|---|
| Punktladninger: superposisjon av felt/potensial (E, V med fortegn og komponenter) | 8 | **100 %** |
| Potensiell energi til ladningssystem: Σ U_ij over unike par | 8 | **100 %** |
| Elektrisk dipolmoment p = Σqᵢxᵢ | 8 | **100 %** |
| Kondensatorer serie/parallell + dielektrikum (C = εᵣε₀A/d) | 8 | **100 %** |
| Motstander serie/parallell, Ohm, effekt P = VI = V²/R | 8 | **100 %** |
| Ladd partikkel i B: r = mv/qB, kombinert med qU = ½mv²-akselerasjon | 8 | **100 %** |
| B fra ring/sløyfe/solenoide (Biot–Savart, μ₀I/2R, μ₀nI) | 8 | **100 %** |
| Magnetisk dipol: m = IA (NIA), dreiemoment τ = mB, potensiell energi | 8 | **100 %** |
| Selv-/gjensidig induktans L = μN²A/ℓ, M | 8 | **100 %** |
| LC/RLC-svingekrets via **mekanisk analogi** (T=2π√(LC), dempet Q(t)~e^(−γt) med γ=R/2L, resonans I=V/R, Q-faktor √(L/C)/R) | 8 | **100 %** |
| RC-krets: τ = RC, Q(t)=Q₀(1−e^(−t/RC)), spenning over R | 7 | **88 %** |
| Dielektrikum: felt svekket med 1/εᵣ, indusert flateladning | 6 | **75 %** |
| Kontinuerlig ladning: integrer felt/potensial (λ = Q/L) | 5 | **63 %** |
| Vekselstrømseffekt ⟨P⟩ = V₀²/2R | 5 | **63 %** |
| Induksjon: roterende sløyfe, Φ=B₀A cos ωt, ε = −dΦ/dt | 5 | **63 %** |
| Uendelige ladde plan E = σ/ε₀, potensial ved lineær integrasjon | 4 | **50 %** |
| Feltretning bestemt av symmetri (velg riktig akse) | 3 | **38 %** |
| Faseforskjell/superposisjon av spenninger (sin a − sin b-identitet) | 3 | **38 %** |
| Resistivitet R = ρL/A / Drude σ = ne²τ/m | 3 | **38 %** |
| Magnetisering M / relativ permeabilitet μᵣ | 2 | **25 %** |

**Viktigste funn (nåværende format):**

- **Dynamikk-kjernen (kinematikk fra v(t)/ω(t), rullende kule med energibevaring, Newton på
  skråplan, treghetsmoment/Steiner, dreieimpuls, svingninger) og EM-kjernen (Coulomb-
  superposisjon, kondensatorer/kretser, ladd partikkel i B, magnetisk dipol, induktans,
  RLC-analogien) er tilnærmet 100 % i hvert sett.** Dette er den harde poenghøstingskjernen.
- **LC/RLC-kretsen løses konsekvent med den mekaniske analogien** (L↔m, 1/C↔k, R↔b). Dette
  er et signaturgrep i faget og et sikkert innslag i EM-halvdelen.
- **Kinematikk-kjeden går igjen med samme mal:** deriver en gitt fartsfunksjon for maks
  akselerasjon (nesten alltid i t=0 for eksponentielle modeller), integrer for strekning
  eller vinkel, og tell hele omdreininger som heltallsdelen av φ/2π.
- **Rulling er alltid av kompakt kule** (I = 2/5·mR², K = 7/10·mv²). Å glemme
  rotasjonsleddet (bruke ½mv²) er den hyppigst «innebygde» fella.

### 2B. Historisk temafrekvens (2004–2021)

Basert på maskinell temasøk over alle arkivfiler + grundig lesing av 2017/2019/2020/2021.
Andelen er antall sett med minst ett spørsmål i temaet.

| Tema | Status 2004–2021 | Kommentar |
|---|---|---|
| Mekanikk-kjernen (kinematikk, Newton, energi, rotasjon, SHM) | Alle sett | Uendret kjerne i alle epoker |
| Elektromagnetisme-kjernen | Alle sett | Uendret kjerne i alle epoker |
| **Termofysikk** (varmeledning, ideell gasslov, entropi, TS-diagram, Carnot, 2. lov) | **~alle sett 2004–2021** | **Faset helt ut fra 2022** |
| **Numeriske metoder / Python** (Euler-diskretisering av N2, arbeidsintegral) | Hyppig 2014–2017, avtagende 2019 | **Borte fra 2020** |
| Statikk/momentbalanse (bjelke, stige, talje/trinsesystem) | Regelmessig | Fortsatt til stede, men lavere frekvens i MC |
| Gravitasjon/satellittbaner | Sporadisk | Roterer inn igjen i MC-æraen |

**Fraværende gjennom hele arkivet (verifisert ved søk over alle filer — 0 treff):**
bølger og interferens, geometrisk/bølgeoptikk (linser, Snell, brytning), fluidmekanikk
(Bernoulli, oppdrift, viskositet), relativitet, atom-/kvantefysikk (foton, spektra),
kjernefysikk/radioaktivitet. **Disse er ikke pensum i TFY4125 og skal ikke bygges inn i
læreboka.** (Merk: dette skiller TFY4125 skarpt fra typiske «innføring i fysikk»-emner ved
andre institusjoner.)

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensorens forventede metode. Formuleringene er
omskrevet; formlene er standard fysikknotasjon.

### Dynamikk (spm. 1–20)

**D1. Kinematikk fra gitt fartsfunksjon.**
Deriver v(t) eller ω(t) for akselerasjon (maks ofte i t=0 ved eksponentielle modeller
v = v₀(1−e^(−t/τ)) eller v = v₀e^(−t/τ)); integrer for strekning s = ∫v dt eller vinkel
φ = ∫ω dt; **antall hele runder = heltallsdelen av φ/2π** (bruk oppgitt integral ved
polynom×eksponential-integrander). *Omskrevet eksempel:* «Vinkelfarten til en karusell er
ω(t)=ω₀(t/τ)²e^(−t/5τ). Finn vinkelakselerasjonen i t=0, maksimal vinkelfart, og antall
hele omdreininger.»

**D2. Banevinkel.** tan β = dy/dx for en gitt bane y(x); ofte i startposisjon.

**D3. Rullende kompakt kule / energibevaring.** mg∆y = (7/10)mv² for kule som ruller uten å
gli (K = ½mv² + ½Iω², I = 2/5·mR², v = ωR). Fart i vilkårlig punkt via høydeforskjell.
Snupunkt = samme høyde som start.

**D4. Normalkraft med baneкrumning.** I et toppunkt: mg − N = mv²/R, der
R = 1/\|y″\| er banens krumningsradius. Ofte er farten så lav at N ≈ mg.

**D5. Newton på skråplan med friksjon.** Dekomponér tyngden; kinetisk friksjon μmg cosβ
**mot bevegelsen**. Standardsvar a = g(sinβ ± μcosβ); masse og startfart faller ofte ut
(påpekes). Snuavstand x = v₀²/(2a).

**D6. Bevegelsesmengde og støt.** Impulsbevarelse Σmv = Σmv′; elastisk støt →
v₁ = v₀(M−m)/(M+m); fullstendig uelastisk → felles fart, energitap ΔK = K₀·m/(m+M) o.l.;
impuls fra tidsavhengig kraft ∆p = ∫F dt (arealet under F(t)).

**D7. Massesenter og treghetsmoment.** x_CM = Σmᵢxᵢ/Σmᵢ; I = Σmᵢrᵢ² (punktmasser i
trekant o.l.) eller I = ∫r² dm (stang med λ(x), kuleskall). **Steiners sats
I = I_CM + Md²** er fast verktøy (halvkule, stang om endepunkt, fysisk pendel).

**D8. Dreieimpuls og rulling.** Total L = L_spinn + L_bane (L_bane = R_CM × mV);
**fortegn/retning på komponentene** (høyrehåndsregel) er et yndet flervalgspoeng.
Overgang gliding→ren rulling: N2 for translasjon + N2 for rotasjon om CM, sett V(t)=rω(t).
Treffhøyde h for et støt: mV₀ = Fτ og (2/5)mrV₀ = Fτ(r−h).

**D9. Svingninger.** ω₀ = √(k/m), f = ω₀/2π; seriekoblede fjærer 1/k = 1/k₁+1/k₂.
Dempet: A(t)=A₀e^(−γt), γ = b/2m (løs e^(−γt) = brøk for tid, eller antall perioder t/T).
Fysisk pendel T = 2π√(I_A/Mgd). Drevet på resonans: hastighetsamplitude v₀ = F₀/b.

**D10. Gravitasjon/baner.** GMm/r² = mv²/r = mω²r; kombinér med v = 2πr/T. Geostasjonær og
«samme punkt over ekvator etter n timer»-varianter. Rakettligning \|dm/dt\| fra
impulsbevarelse med utstøtshastighet u.

**D11. Statikk.** ΣF = 0 og ΣM = 0 om et klokt valgt punkt (bjelke i lager, talje med
trinser der svaret blir mg/n, sylinder i snor mot vegg).

**D12. Måling/usikkerhet (åpningsspm.).** Middelverdi ⟨x⟩ = Σxᵢ/N; standardavvik
δx = √(Σ(xᵢ−⟨x⟩)²/(N−1)); riktig antall gjeldende siffer.

### Elektromagnetisme (spm. 21–40)

**E1. Elektrostatisk superposisjon.** Summér Coulomb-felt/potensial fra punktladninger med
fortegn (E = Q/4πε₀r², V = Q/4πε₀r); bruk symmetri og cosinus-komponenter. Dipolmoment
p = Σqᵢxᵢ. Potensiell energi U = Σ_{i<j} U_ij over alle unike par.

**E2. Kontinuerlig ladning.** λ = Q/L; integrer E eller V (f.eks. E(2L) = (λ/4πε₀)∫dx/(2L−x)²).

**E3. Ladde plan/dielektrikum.** Uendelig plan E = σ/2ε₀ (eller σ/ε₀ mellom to);
potensial ved lineær integrasjon over regioner. Dielektrikum svekker feltet med 1/εᵣ;
indusert flateladning σ_ind.

**E4. Kondensatorer.** Serie/parallell etter formelark; C = εᵣε₀A/d; Q = CV; energi
U = Q²/2C = ½ε₀E²·(volum).

**E5. Likestrømskretser.** Serie/parallell-motstand, U = RI, effekt P = VI = V²/R = RI².
Resistivitet R = ρL/A; Drude σ = ne²τ/m for ladningstetthet.

**E6. RC-krets.** τ = RC; Q(t) = Q₀(1−e^(−t/RC)) (lading) eller Q₀e^(−t/RC) (utlading);
spenning over R, VR = V₀e^(−t/RC).

**E7. Ladd partikkel i magnetfelt.** Akselerasjon over spenning qU = ½mv² gir farten;
deretter qvB = mv²/r → r = mv/qB (massespektrometer/ionebane). **Fast konseptpoeng:
magnetkraften står ⊥ på farten og gjør null arbeid, P = F·v = 0.**

**E8. Magnetfelt fra strøm.** Biot–Savart; B på aksen til en ringstrøm
B = μ₀IR²/2(z²+R²)^(3/2) (i sentrum μ₀I/2R); B = μ₀nI i solenoide; B mellom parallelle
ledere og kraft F/ℓ = μ₀I²/2πx.

**E9. Magnetisk dipol.** m = IA (= NIA for N viklinger; sekskant/ring); dreiemoment
τ = mB (maks NIAB); potensiell energi −m·B; magnetisering M = (dipoler per volum).
Felt fra magnetisk dipol ∝ 1/r³.

**E10. Induksjon.** Faradays lov ε = −dΦ/dt; roterende sløyfe Φ = B₀A cos ωt →
ε = ωB₀A sin ωt; Lenz for strømretning. Gjensidig/selvинduktans M = μ₀nNA,
L = μN²A/ℓ.

**E11. Vekselstrøm og faser.** ⟨P⟩ = ⟨VI⟩ = V₀²/2R (bruk ⟨sin²ωt⟩ = ½). Amplitude til
V₂ − V₁ ved faseforskjell (bruk sin a − sin b = 2 cos((a+b)/2) sin((a−b)/2)).

**E12. LC/RLC-svingekrets via mekanisk analogi (signatursjanger).** L↔m, 1/C↔k, R↔b:
egenfrekvens ω₀ = 1/√(LC), periode T = 2π√(LC); ladnings-/strømamplitude avtar som
e^(−γt) med γ = R/2L; på resonans I₀ = V₀/R; kvalitetsfaktor Q = ω₀/∆ω = √(L/C)/R.
Energi Q₀²/2C.

### Historiske sjangre (2004–2021, ikke i nåværende pensum)

**H1. Termofysikk-oppgaven.** Ideell gasslov pV = nRT; 1. hovedsetning ΔU = Q − W;
isoterm/isobar/isokor/adiabat (TV^(γ−1) = konst); Carnot-virkningsgrad η = 1 − T_k/T_v;
entropiendring ΔS = ∫dQ_rev/T = nR ln(V₂/V₁); varmeledning H = κAΔT/L med sjikt i serie;
TS-diagram. **Kun for historisk kontekst — ikke eksamensrelevant i dag.**

**H2. Numerisk oppgave.** Euler-diskretisering av N2 for pendel med luftmotstand
(θ_{n+1}, ω_{n+1}); arbeidsintegral som sum. **Utfaset.**

---

## 4. Sensorens krav

Rettereglene avhenger sterkt av format.

### Flervalgs-æraen (2022–2025, gjeldende)

1. **Kun det endelige bokstavsvaret teller.** Ingen delpoeng for oppsett eller
   mellomregning. Riktig svar gir poeng, feil gir null (ingen minuspoeng observert i
   nyere sett; eldre hybrid hadde «feil = 0»).
2. **Alle spørsmål teller likt** (typisk 1 poeng hver, ca. 40 totalt).
3. **Presisjon er avgjørende:** svaralternativene ligger tett, så avrundingsfeil,
   glemt faktor eller feil fortegn lander på feil alternativ. Regnekjeden må være rask og
   feilfri.
4. Løsningsforslaget viser **den avgjørende loven + én regnelinje** — det er den
   arbeidsformen kandidaten må beherske under tidspress (ikke lange verbale utledninger).

### Åpen-utlednings-æraen (2018–2021) og hybrid (2004–2017)

- I de åpne oppgavene premierte sensuren **korrekt oppsett og metode** (frilegemediagram,
  riktig lov, symbolsk uttrykk) selv om sluttallet glapp; enheter og gjeldende siffer ble
  vektlagt. Følgefeil ble normalt ikke dobbeltstraffet.
- Løsningsforslagene fremhever gjennomgående **hvilken lov/teorem** som brukes
  (energibevaring, N2, Steiners sats, Faradays lov, impulsbevarelse) — det er dette som gir
  uttelling.

**Konsekvens for læreboka:** Tren begge modi. For eksamen (MC) må studenten kunne komme til
riktig **tallsvar raskt og feilfritt**. For forståelse (og for eldre sett brukt som
øving) må hun kunne sette opp den symbolske utledningen og navngi loven.

---

## 5. Typiske feil (observert i løsningsforslag / bygget inn i alternativene)

1. **Glemme rotasjonsenergien** for rullende legemer — bruke ½mv² i stedet for
   (7/10)mv² for kompakt kule. Den vanligste innebygde fella i dynamikkdelen.
2. **Feil fortegn/retning på dreieimpuls- eller feltkomponenter** (spinn vs. banedreieimpuls
   peker ikke alltid samme vei; høyrehåndsregel for negative ladninger).
3. **Blande serie/parallell** for motstand vs. kondensator (formlene er «byttet om»:
   kondensatorer legges som motstander i parallell og omvendt).
4. **Glemme Steiner-leddet** når treghetsmomentet skal om en akse utenfor massesenteret.
5. **Sette integrasjonsgrenser feil** i ∫r²dm eller i felt/potensial-integraler.
6. **Regne arbeid av magnetkraften** — den er alltid null (kraften står ⊥ på farten).
7. **Bruke konstant-a-kinematikk på krum bane** — der akselerasjonen ikke er konstant, må
   energibevaring brukes; ren kinematikk gir feil.
8. **Glemme dielektrikumsfaktoren 1/εᵣ**, eller bruke feil εᵣ-plassering i C = εᵣε₀A/d.
9. **Feil i den mekaniske analogien** for RLC (forveksle hvilken størrelse som svarer til
   masse/fjær/demping): L↔m, 1/C↔k, R↔b — γ = R/2L, **ikke** R/2C.
10. **Avrundingsfeil** som lander på nabo-alternativet — behold nok siffer gjennom
    hele regnekjeden.
11. **Glemme å akselerere partikkelen først** (qU = ½mv²) før baneradien r = mv/qB regnes.
12. **Kelvin/enhetsslurv** (i de historiske termofysikk-oppgavene: alltid kelvin i
    gasslov, TV^(γ−1) og entropi).

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut **formelark** (kode C). Skillet nedenfor er derfor mellom **hva som må
kunne brukes aktivt** (velges, kombineres, omformes under tidspress) og hva som bare hentes.

### Formelarket inneholder (utdrag, verifisert fra 2017-settet)

- **Konstanter:** g, k_B, N_A, R, ε₀, µ₀, k (Coulomb), e, mₑ, G, σ (Stefan–Boltzmann).
- **Mekanikk:** a = dv/dt = d²r/dt², s = v₀t + ½at², v = v₀ + at, F = ma, p = mv, dp/dt = F,
  W = ∫F·ds, K = ½mv², W_tot = ΔK, F = −∇U, F_f ≤ μsF⊥, α = dω/dt, v = ωr, K_rot = ½Iω²,
  τ = r×F, τ = Iα, I = Σmᵢrᵢ², **Steiner Iᵣ = I₀ + Md²**, L = Iω, J = Δp = ∫F dt,
  F = GmM/r²·r̂.
- **Svingninger:** x″ + ω₀²x = 0, ω₀ = √(k/m), T = 2π/ω, f = 1/T.
- **Termisk fysikk (fortsatt på formelarket, men ikke lenger eksaminert):**
  ΔU = Q − W, pV = nRT, W = ∫p dV, dQ = nC dT, C_V = 3/2 R / 5/2 R, C_P = C_V + R,
  γ = C_P/C_V, pV^γ = konst, TV^(γ−1) = konst, η = W/Q_H, η_Carnot = 1 − T_c/T_h,
  dS = dQ_rev/T.
- **Elektrisitet og magnetisme:** F = kq₁q₂/r²·r̂, E = F/q, ΔV = −∫E·ds, Φ_B = ∫B·dA,
  Gauss ∮E·dA = Q/ε₀, ∮B·dA = 0, Faraday ∮E·dl = −dΦ_B/dt, Ampère–Maxwell
  ∮B·dl = µ₀(I + ε₀dΦ_E/dt), Biot–Savart dB = (µ₀/4π)I dl×r̂/r², Lorentz F = q(E + v×B),
  τ = µ×B, µ = IA, C = Q/V, V = RI, R = ρL/A, gjensidig induktans M, ε₂ = −M dI₁/dt.
- **Feilforplantning:** Δf = √(Σ(∂f/∂xᵢ·Δxᵢ²)) — for måle-/usikkerhetsspørsmålene.

### Må beherskes aktivt (velges og kombineres — dette er kjernen læreboka skal drille)

**Dynamikk:**
- Derivere/integrere fartsfunksjoner (a = dv/dt, s = ∫v dt, φ = ∫ω dt, ⌊φ/2π⌋).
- N2 på skråplan med friksjon: a = g(sinβ ± μcosβ); snuavstand v₀²/2a.
- Energibevaring for rullende kompakt kule: mg∆y = (7/10)mv².
- Krumningsradius R = 1/\|y″\| og N = m(g − v²/R) i toppunkt.
- Impuls-/energibevaring i støt (elastisk, uelastisk, ∆p = ∫F dt).
- Massesenter og treghetsmoment (∫r²dm, punktmasser, **Steiner**); fysisk pendel
  T = 2π√(I_A/Mgd).
- Dreieimpuls L = L_spinn + L_bane med korrekte fortegn; gliding→rulling.
- SHM: ω₀ = √(k/m), f = ω₀/2π; dempet A₀e^(−γt), γ = b/2m; serie-fjærer.
- Gravitasjon/bane: GMm/r² = mω²r, v = 2πr/T; rakett \|dm/dt\|.
- Måling: middelverdi, standardavvik, gjeldende siffer.

**Elektromagnetisme:**
- Coulomb-superposisjon av E og V (fortegn, komponenter, symmetri); dipolmoment p = Σqx;
  U = Σ_{i<j} U_ij.
- Kontinuerlig ladning: integrer felt/potensial (λ = Q/L).
- E = σ/ε₀ for plan; potensial ved lineær integrasjon; dielektrikum 1/εᵣ.
- Kondensatorer serie/parallell, C = εᵣε₀A/d, Q = CV, U = Q²/2C.
- Kretser: Ohm, serie/parallell, P = RI² (unngå U²/R-fellen i sammensatte kretser),
  R = ρL/A; RC med τ = RC.
- Ladd partikkel: qU = ½mv² → r = mv/qB; **magnetkraft gjør null arbeid**.
- B fra ring/solenoide/leder (Biot–Savart); magnetisk dipol m = IA, τ = mB.
- Induksjon: Φ = B₀A cos ωt, ε = −dΦ/dt; L = μN²A/ℓ, gjensidig M.
- Vekselstrøm: ⟨P⟩ = V₀²/2R; faseforskjeller (sin a − sin b).
- **RLC via mekanisk analogi:** ω₀ = 1/√(LC), γ = R/2L, resonans I = V/R, Q = √(L/C)/R.

### Hentes fra formelark (skal gjenkjennes, ikke pugges)

Alle naturkonstanter; Gauss/Ampère/Faraday i integralform; Biot–Savart-integranden;
adiabat- og entropiformlene (kun historisk); feilforplantningsformelen.

### Skal IKKE bygges tungt på

- **Termofysikk** — på formelarket, men ikke eksaminert siden 2021. Ta med som kompakt
  historisk tillegg for kandidater som øver på eldre sett; ikke kjernepensum.
- **Numeriske metoder / Python** — utfaset etter 2019.
- **Bølger, optikk, fluid, relativitet, atom-/kjernefysikk** — aldri i pensum.

---

## 7. Prognose og prioritering

### Prognose for neste eksamen

4 timers skoleeksamen, hjelpemiddelkode C med formelark, **rent flervalg med ca. 40
spørsmål A–F**: spørsmål **1–20 dynamikk**, **21–40 elektromagnetisme**, med **måle-
/statistikkspørsmål helt i starten**. Tett plasserte svaralternativer. Nesten sikkert
innhold i hver halvdel:

- **Dynamikk:** kinematikk fra v(t)/ω(t) (inkl. runde-telling), banevinkel, rullende kule
  med energibevaring, N2 på skråplan med friksjon, treghetsmoment + Steiner, dreieimpuls
  (spinn + bane med fortegn), svingninger (egenfrekvens + dempet amplitude), pluss et
  utvalg fra {støt, fysisk pendel, satellittbane, rakett, statikk, terminalfart}.
- **EM:** Coulomb-superposisjon (E, V, p, U), kondensatorer/dielektrikum,
  motstandskretser, ladd partikkel i B (r = mv/qB + null-arbeid-poenget), B fra
  ring/solenoide, magnetisk dipol (τ = mB), induktans, **RLC-svingekrets via mekanisk
  analogi**, pluss RC-krets og vekselstrømseffekt.

### Nivå 1 — må beherskes perfekt (bærer minst 60–70 % av settet)

1. **Kinematikk-kjeden** (deriver/integrer fartsfunksjon, maks-akselerasjon i t=0,
   runde-telling).
2. **Rullende kule + energibevaring** (7/10-leddet) og **N2 på skråplan med friksjon**.
3. **Treghetsmoment, massesenter og Steiners sats** (inkl. fysisk pendel).
4. **Svingninger** (egenfrekvens, dempet amplitude) og **dreieimpuls med fortegn**.
5. **Elektrostatisk superposisjon** (felt, potensial, dipolmoment, ladningsenergi).
6. **Kretser**: kondensatorer/dielektrikum, motstander serie/parallell, RC.
7. **Ladd partikkel i B** (qU = ½mv² → r = mv/qB, null-arbeid) og **B fra
   ring/solenoide + magnetisk dipol τ = mB**.
8. **RLC-svingekretsen via mekanisk analogi** (ω₀, γ = R/2L, resonans, Q-faktor).

### Nivå 2 — bør sitte (avgjør karakter i øvre sjikt)

9. Støtkjeden (elastisk/uelastisk, impuls fra F(t)). 10. Krumningsradius og normalkraft.
11. Gliding→ren rulling. 12. Satellitt/geostasjonær bane; rakettligning.
13. Kontinuerlig ladning (integraler); uendelige ladde plan. 14. Induksjon (roterende
sløyfe) og induktans; vekselstrømseffekt. 15. Måle-/usikkerhetsregning.

### Nivå 3 — kompakt beredskap

16. Statikk/momentbalanse. 17. Terminalfart, resistivitet/Drude, magnetisering.
18. Faseforskjell-superposisjon. 19. **(Kun for kandidater som øver på eldre sett):**
termofysikk-malen (gasslov, 1. lov, Carnot, entropi, TS-diagram) og numerisk
Euler-diskretisering — historisk, ikke gjeldende pensum.

**Konsekvens for læreboka:** Bygg to hoveddeler — **Dynamikk** og **Elektromagnetisme** —
med tung metodedrill på nivå 1-sjangrene og standardoppskrifter for nivå 2. Legg inn en
kort **måle-/usikkerhetsmodul** (åpningsspørsmålene) og en **kompakt historisk
termofysikk-appendiks** (for eldre øvingssett), tydelig merket som ikke-gjeldende pensum.
Hver drilloppgave bør trene **rask, feilfri vei til tallsvar** (MC-modus), i tillegg til
den symbolske utledningen.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TFY4125/`. Arkivet
har tre delvis overlappende navnekonvensjoner (samme eksamen kan finnes i flere); etter
deduplisering ca. 30 unike sett 2004–2025.

**Lest fullstendig (oppgave + løsningsforslag) — MC-/hjemmeeksamen-æraen:**
- V2022 (`E/L_TFY4125_220527`, hjemmeeksamen-variant), K2022 (`…_220809`)
- V2023 (`…_230523`), K2023 (`…_230809`)
- V2024 (`…_240521`), K2024 (`…_240817`)
- V2025 (`…_250603`), K2025 (`…_250812`)
(8 sett — grunnlaget for den kvantitative frekvenstabellen i del 2A)

**Lest grundig (løsningsforslag) — tradisjonell/blandet æra:**
- V2017 (`TFY4125-2017V-LF` = `L-TFY4125-30mai2017`; flervalg A–E, 30 spm., med termofysikk
  + Python; **formelarket verifisert herfra**)
- V2019 (`L_TFY4125_190516`; åpen utledning, 30 oppg., med termofysikk + numerikk)
- V2020 (`L_TFY4125_200603`; åpen utledning, med termofysikk)
- V2021 (`L_TFY4125_210511`) + K2021 (`…_210811`; åpen utledning, med termofysikk)

**Skumlest / temaregistrert (oppgavesett; eldre løsninger delvis skannet uten OCR):**
- 2004 (`E-TFY4125-13mai2004`; hybrid 15 MC + 3 åpne oppgaver, bokmål + nynorsk — dokumenterer
  det eldste formatet), 2005, 2008, 2009, 2010, 2011, 2012, 2014, 2015, 2016, 2018K, 2019K.
- Åtte skannede løsnings-PDF-er 2008–2012 ga ingen tekst ved OCR; temaregistrert via
  tilhørende oppgavesett og maskinelt søk.

**Maskinell verifisering:** Alle 30 tekstuttrekk ble søkt for tema (termofysikk, numerikk,
måling) og for fraværende emner (bølger, optikk, relativitet, fluid, kjerne) — 0 treff på
sistnevnte bekrefter at disse aldri er pensum.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emneside for TFY4125
(scratchpad: `fagbeskrivelse-tfy4125.md`), inkl. destillert metodegjennomgang av
løsningsforslagene V2019–V2025.

**Merknader om kildene:**
- Arkivet er tilnærmet komplett parvis (eksamen + løsning) fra 2015; enkelte eldre
  løsninger finnes bare som skannede bilder.
- 2022 var hjemmeeksamen med 6 tallvarianter per oppgave (pandemiarv); faglig innhold og
  struktur (mekanikk 1–20, EM 21–40) er som i det etterfølgende MC-formatet, og settet er
  behandlet som normgivende for temaene.
- Frekvensene for 2004–2016 bygger på skumlesing og maskinsøk (±1 sett usikkerhet);
  2017–2025 er basert på fullstendig/grundig gjennomlesing.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller
  veiledningsformuleringer er gjengitt ordrett. Formlene er standard fysikknotasjon og
  ikke opphavsrettslig beskyttet.

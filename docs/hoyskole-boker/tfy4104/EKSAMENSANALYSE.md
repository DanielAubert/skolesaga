# Eksamensanalyse: TFY4104 Fysikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv for
> **TFY4104** (2009–2025): ca. 27 unike eksamenssett, de fleste med tilhørende
> løsningsforslag/sensorveiledning. Arkivet finnes i to navnekonvensjoner som delvis
> **overlapper (samme eksamen, ulik fil)** — `E_TFY4104_ÅÅMMDD` / `L_…` (Inspera-æraen
> 2019–2025) og `E-TFY4104-DDmmmÅÅÅÅ` / `L-…` (2009–2018). Etter deduplisering dekker
> arkivet ordinær- (des.) og kontinuasjons-/konte-eksamener (aug./jan.) sammenhengende
> fra 2009 til 2025.
>
> **Samplingsstrategi:** Løsningsforslagene fra 2020–2025 er lest fullstendig (dagens
> flervalgsform). Løsningsforslag/oppgavesett 2013, 2015, 2017, 2018 er lest grundig (den
> rene 50-spørsmåls MC-æraen), og de eldste settene (2009–2012) er lest for å dokumentere
> den opprinnelige, brede utledningsformen med termofysikk. **Hele arkivet er maskinelt
> gjennomsøkt** for temaforekomst (fil-nivå frekvenstelling over 17 nyere oppgavesett
> 2013–2025, samt over hele arkivet for fraværende emner). Enkelte eldre skannede
> løsnings-PDF-er (2011, 2012) ga ingen tekst ved uttrekk og er kun temaregistrert via
> tilhørende oppgavesett. **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der
> kildene tillater det.
>
> **Hovedbudskap i én setning:** TFY4104 er i dag en **ren flervalgseksamen (40 spørsmål,
> A–F)** delt i to like store halvdeler — **mekanikk/dynamikk (spm. 1–20)** og
> **elektromagnetisme (spm. 21–40)** — uten termofysikk, bølger, optikk, fluidmekanikk
> eller relativitet i den nåværende formen. **Strukturelt er emnet i dag praktisk talt
> identisk med søsteremnet TFY4125**; forskjellen mot TFY4115 er at TFY4104s andre halvdel
> er **elektromagnetisme, ikke termofysikk**.

> ⚠️ **Kildeforbehold:** Arkivet er komplett og aktuelt (siste sett des. 2025). Den
> normgivende formen er derfor godt dokumentert: **40 MC A–F, mekanikk 1–20, EM 21–40,
> 1 poeng riktig / 0 feil eller blankt**, digital eksamen i Inspera. Emnet undervises
> fortsatt (undervisningsstart høst 2026), og emnebeskrivelsen angir dynamikk, bølgefysikk,
> termodynamikk og elektrisitet som pensum-arven fra forgjengeren TFY4102 — men de faktiske
> eksamenssettene fra 2013→ prioriterer **kun mekanikk + elektromagnetisme**. En lærebok
> bør bygge disse to som likeverdige hoveddeler, og behandle termofysikk (samt bølger/
> optikk) som historisk/beredskaps-stoff, ikke som kjernepensum.

---

## 0. TFY4104 vs. TFY4115 vs. TFY4125 — forskjellene i klartekst

Alle tre er 7,5-studiepoengs grunnkurs i fysikk ved NTNU, med **hjelpemiddelkode C**
(Rottmann matematisk formelsamling + utdelt fysikk-formelark + tabell over treghetsmomenter
for standardlegemer + enkel, bestemt kalkulator), 4 timers skriftlig skoleeksamen,
bokstavkarakter A–F. **Mekanikk-kjernen er nesten identisk i alle tre.** 2018-settet var
faktisk et **felles TFY4104/TFY4115-sett** (samme oppgavehefte, ulike svarblokker for de to
kandidatgruppene). Forskjellen ligger i **andre halvdel** og i det historiske forløpet:

| Trekk | **TFY4104** (dette emnet) | **TFY4115** | **TFY4125** |
|---|---|---|---|
| **Andre halvdel av eksamen (i dag)** | **Elektromagnetisme** (spm. 21–40) | **Termisk fysikk** (spm. 21–40) | **Elektromagnetisme** (spm. 21–40) |
| Termofysikk | **Faset ut** (fast innslag t.o.m. 2012, borte fra 2013) | **Kjernepensum, fast halvdel** (gjennom 2020) | Fast tredjeblokk t.o.m. 2021, faset ut fra 2022 |
| Elektromagnetisme | **Kjernepensum, halve settet** (fra 2009 og fortsatt) | **Aldri i pensum** (0 treff i hele arkivet) | Kjernepensum, halve settet |
| Nåværende form | **40 MC A–F, mek 1–20 / EM 21–40** | 40 MC A–F, mek 1–20 / **termo** 21–40 (t.o.m. 2020) | 40 MC A–F, mek 1–20 / EM 21–40 |
| Studieprogram | Petroleumsfag, Industriell design, Tekniske geofag (arv fra TFY4102) | Elektronisk systemdesign, Kybernetikk og robotikk, Nanoteknologi | Industriell design, Datateknologi, Kommunikasjonsteknologi |
| Måling/statistikk-åpner | **Sporadisk** (3/17 sett) | Sporadisk | **Fast åpningsspørsmål** i MC-æraen |
| Numerikk (Python/Euler) | **Sporadisk/borte** (3/17) | Fortsatt i 2019–2020 | Faset ut etter 2019 |
| Nyeste sett i arkivet | **des. 2025** | 2020 | 2025 |

**Praktisk konsekvens:** Den som skriver læreboka til TFY4104 kan **gjenbruke hele
mekanikk-delen og hele EM-delen fra TFY4125-materialet** nesten uendret — de to emnene er i
dag samme eksamensprofil (mek + EM, 40 MC). Termofysikk-delen fra TFY4115 er **ikke**
relevant for dagens TFY4104. Den viktigste egenarten til TFY4104 mot TFY4125 er stilistisk,
ikke pensummessig: TFY4104-settene er noe tyngre på **luftmotstand/eksponentielle
fartsmodeller** og **rullende legemer på krumme baner**, og har sjeldnere en fast
måle-/statistikk-åpner.

---

## 1. Eksamensform og utvikling

### Nåværende form (2019–2025 — normgivende)

- **Skriftlig skoleeksamen, 4 timer** (09.00–13.00), avviklet **digitalt i Inspera**.
  Hjelpemiddelkode **C:** bestemt, enkel kalkulator + Rottmann matematisk formelsamling +
  **utdelt fysikk-formelark** + **tabell over treghetsmomenter for standardlegemer**
  (se del 6). Bokstavkarakter A–F.
- **Rent flervalg: 40 spørsmål med svaralternativ A–F.** (Konte-/augustsett kan være noe
  kortere, ~35 spm.) Kun det endelige bokstavsvaret teller; ingen uttelling for
  mellomregning. **1 poeng for riktig svar, 0 for feil eller blankt** — ingen minuspoeng.
  **Alle spørsmål teller likt.** Bare ett riktig alternativ per spørsmål.
- **Fast todeling av settet:** spørsmål **1–20 er mekanikk/dynamikk**, spørsmål **21–40 er
  elektromagnetisme**. Nesten hvert sett dekker hele bredden i begge halvdeler.
- Løsningsforslaget er **ekstremt kompakt** — typisk den avgjørende loven pluss én til få
  regnelinjer per spørsmål (fra 2025 vises kun bokstavsvar + én formellinje).
- **Svaralternativene ligger tett** og er ofte konstruert rundt en typisk feil (glemt
  rotasjonsledd, feil fortegn, forbyttet serie-/parallellkobling), slik at en liten regnefeil
  lander på et nabo-alternativ.
- **Konseptuelle/rangerings-spørsmål** er et fast innslag i begge halvdeler («hvilken graf
  gir riktig a(t)», «hvilken retning har feltet», «hvilket materiale er magnetisk mettet» —
  bekreftet fra oppgavetitlene, f.eks. «konseptuell» i spm. 4, 9, 10, 13, 18).

### Formatutvikling — viktig å kjenne

| Periode | Form | Struktur | Pensumbredde |
|---|---|---|---|
| **2009–2012** | **Ren utledning.** 4 t, kode C. **Bokmål og nynorsk.** | **3–4 store åpne oppgaver** (Oppgåve 1–4) med deloppgaver a–c som «teller likt», full symbolsk utledning | **Mekanikk + termofysikk + elektromagnetisme** (tre områder) |
| **2013–2018** | **Rent flervalg.** 50 spm., A–E | Fast todeling: mekanikk ca. 1–25, EM ca. 26–50 | **Mekanikk + elektromagnetisme** (termofysikk faset ut) |
| **2018** | Rent flervalg, 50 spm. — **felles TFY4104/TFY4115-sett** | Mekanikk + EM (TFY4104-varianten); TFY4115-kandidatene svarte mekanikk + termo | Mekanikk + EM |
| **2019–2025** | **Rent flervalg.** 40 spm., A–F, digitalt (Inspera) | Fast: mekanikk 1–20, EM 21–40 | Kun mekanikk + elektromagnetisme |

**Utviklingstrekk:**

1. **Termofysikk er faset helt ut — tidligere enn i søsteremnene.** Fra 2009 til 2012 var
   termodynamikk (ideell gasslov, kretsprosess/virkningsgrad, adiabatiske prosesser,
   varmekapasitet) en fast tredjeblokk i de åpne settene. **Fra 2013 forekommer det ikke.**
   Maskinsøk bekrefter: termo-termer (entropi/Carnot/adiabat/gasslov/varmekapasitet) treffer
   **kun** i 2009–2012-settene; i settene fra 2013→ er de eneste «varme/temperatur»-treffene
   EM-relaterte (resistivitetens temperaturkoeffisient for kobber). TFY4104 kvittet seg med
   termofysikk ca. et tiår før TFY4125 (som beholdt en termoblokk til 2021).
2. **Elektromagnetisme har vært kjernepensum gjennom hele arkivet** (2009→ og fortsatt) og
   utgjør fast halve settet i dag. Dette er den avgjørende forskjellen mot TFY4115, der EM
   aldri er pensum.
3. **Formatet har beveget seg fra ren utledning (2009–2012) via 50-spørsmåls MC (2013–2018)
   til dagens 40-spørsmåls MC A–F (2019→).** Fysikken og metodene er stabile på tvers av
   formatene; det er innpakningen og rettereglene som endrer seg. De gamle
   utledningsoppgavene er fortsatt verdifulle som øving fordi de tvinger fram metoden bak
   MC-svarene.
4. **Bølger, optikk, fluidmekanikk og relativitet forekommer ikke** i noe sett (0 treff for
   Doppler, linse/Snells lov, Bernoulli, tidsdilatasjon i hele arkivet). Emnebeskrivelsens
   arv fra TFY4102 nevner «bølgefysikk», men det slår ikke gjennom i eksamenssettene.
5. **Måle-/statistikk-åpner og numerikk (Python/Euler) er sporadiske** (hver 3/17 nyere sett)
   — ikke faste innslag slik måle-åpneren er i TFY4125.

---

## 2. Temafrekvens

Fordi settene har fast halv-halv-struktur, forekommer nesten alle kjernetemaene i **alle**
sett. Tabellene under bygger på fullstendig/grundig lesing av 12 sett (2013, 2015, 2017,
2018, 2019, 2020, 2021, 2022×2, 2023, 2024, 2025×2) supplert med maskinell fil-nivå
frekvenstelling over **17 oppgavesett fra 2013–2025**. «Gjenganger-score» = andelen av de 17
settene der temaet inngår med minst ett spørsmål (der maskinsøket er pålitelig; ellers
kvalitativt anslag fra fullest lest materiale).

### 2A. Mekanikk / dynamikk (første halvdel — spm. 1–20 / 1–25)

| Tema | Gjenganger-score | Typisk grep |
|---|---|---|
| Kinematikk fra gitt v(t)/graf (deriver/integrer, luftmotstandsmodell) | **17/17 (~100 %)** | a=dv/dt; v(t)=(s₀/τ)e^(−t/τ); identifiser riktig a(t)-graf |
| Rulling av kompakt legeme + treghetsmoment (energibevaring/N2) | **17/17 (~100 %)** | mgΔy=½(1+c)mv²; a=⅔g sinβ (sylinder), uavhengig av M,R |
| Svingninger (SHM): egenfrekvens, fjær, hengslet stang, dempet | **17/17 (~100 %)** | ω₀=√(k/m); k=4π²f²µ; dempet x∝e^(−γt), γ=b/2m |
| Newton på skråplan med friksjon (statisk/kinetisk) | **16/17 (~95 %)** | μ=v₀²/2gs; s=v₀²/[2g(μcosθ−sinθ)] i bakke |
| Bevegelsesmengde og støt / dreieimpulsbevaring ved støt | **16/17 (~95 %)** | leirklump treffer stang: mv₀L=(mL²+⅓ML²)ω |
| Statikk / momentbalanse (velting, kran, bjelke, tannhjul) | **14/17 (~80 %)** | Στ=0 om klokt punkt; maks last før velting |
| Luftmotstand / terminalfart / eksponentiell fartsmodell | **15/17 (~88 %)** | v_t; v(t)=v_t(1−e^(−t/τ)); a størst ved t=0 |
| Sirkelbevegelse + normalkraft (loop, topp/bunn, konseptuell) | **12/17 (~70 %)** | N−mg=mv²/r; N størst der v størst |
| Treghetsmoment + **Steiners sats** (stang, sammensatt legeme) | **12/17 (~70 %)** | I=I_CM+Md²; I=I₁+I₂ for sammensatt legeme |
| Gravitasjon / satellittbaner / omløpstid | **12/17 (~70 %)** | GMm/r²=mv²/r; T=2π√(r³/GM); g=ρ·4πrG/3 |
| Skrått kast / prosjektilbevegelse (+ dreieimpuls i banen) | **10/17 (~60 %)** | y_max=v₀²/4g ved 45°; L_b=y_max·mv_x |
| Arbeid, energi og effekt (P=W/t, P=Fv) | **10/17 (~60 %)** | ½mv²=Fs; P=½mv²/t (togeffekt) |
| Impuls / kraftstøt (Δp=∫F dt, trekantpuls) | **10/17 (~60 %)** | mv₀=½F₀τ; V=FΔt/M |
| Dreieimpuls: L=L_spinn+L_bane, bevaring, fortegn | **9/17 (~55 %)** | L=I₀ω=⅖mrv; spinnsats τ=dL/dt |
| Rotasjonsdynamikk τ=Iα (tannhjul, arm, snelle) | ~55 % | mₗ g·r⊥=Iα; større arm → større α |
| Rullende legeme på **krum bane** (fart/tangential-/normalkraft i punkt) | ~40 % | egen TFY4104-signatur; y(x)=y₀x²/L², 1/ρ=y″ |
| Rakettligning | **3/17 (~20 %)** | Δv=u ln(m₀/m) |
| Krumningsradius (fra formelark) | ~15 % | 1/ρ=y″/(1+y′²)^{3/2} |

### 2B. Elektromagnetisme (andre halvdel — spm. 21–40 / 26–50)

| Tema | Gjenganger-score | Typisk grep |
|---|---|---|
| Elektrisk potensial (superposisjon av punktladninger) | **17/17 (~100 %)** | V=Σkqᵢ/rᵢ; V=2kq/√(a²+x²) |
| Magnetfelt fra strøm (leder, sløyfe, sammensetning) | **17/17 (~100 %)** | B=µ₀I/2πR (leder); B=µ₀I/2R (sløyfe); vektorsum |
| Kondensator: platekondensator, C=ε₀A/d | **17/17 (~100 %)** | C=Q/V; V=Qd/ε₀πr² |
| Kondensatorer i serie/parallell | **16/17 (~94 %)** | 1/C=Σ1/Cᵢ (serie); C=ΣCᵢ (parallell) |
| Induktans / spole / solenoide (L=µ₀N²A/l) | **15/17 (~88 %)** | selvinduktans; magnetisk energi U_B=B²/2µ₀·V |
| Elektrisk felt fra ladningskonfigurasjon (superposisjon, retning) | **12/17 (~70 %)** | Coulombs lov; kansellering av komponenter; E=2kqx/r³ |
| Dielektrikum / relativ permittivitet εᵣ (tankmåler o.l.) | **12/17 (~70 %)** | C=εᵣε₀A/d; parallellkoblet luft/væske-kondensator |
| Resistans / resistivitet / Ohms lov / temperaturkoeffisient | **13/17 (~76 %)** | R=ρl/A; R(T)=R₀(1+αΔT) |
| Dreiemoment på strømsløyfe i magnetfelt | **11/17 (~65 %)** | τ=IAB sinφ; τ_max=IAB |
| RC-krets: tidskonstant, opp-/utladning | **9/17 (~53 %)** | τ=RC; Q(t)=Q₀(1−e^(−t/τ)) |
| Faradays induksjonslov / roterende sløyfe / EMS | **9/17 (~53 %)** | ε=N dΦ/dt=NBAω cosωt; V₀=NBAω |
| Hysterese / magnetisering / metning (ferromagnetisme, konseptuell) | **7/17 (~41 %)** | tolke B–H-kurve; remanens/metning |
| Gjensidig induktans M=Φ/I | **5/17 (~29 %)** | M≈µ₀a/11π mellom leder og sløyfe |
| Ladet stav / linjeladning (integrasjon dE=k dQ/r²) | ~25 % | E=kλ(1/a−1/(L+a)); dQ=λdx |
| Lorentzkraft / q**v**×**B** / sirkelbane / massespektrometer | ~25 % | R=mv/qB; forhold rₑ/r_p=mₑ/m_p |
| Motional EMS / stang på skinner i B-felt | ~25 % | F_m=IlB=V₀lB/R; a=V₀lB/mR ved t=0 |
| RL-krets: tidskonstant, energitap | ~20 % | τ=L/R; I(t)=I₀(1−e^(−t/τ)); ∫RI²dt |
| LC-svingekrets | ~15 % | I₀=ω₀Q₀=(1/√LC)V₀C; U=Q₀²/2C |
| Elektrisk dipol / dipolmoment | ~15 % | p=Σqᵢdᵢ; V og E langt ute på aksen |
| Kirchhoffs lover (kretsanalyse) | sporadisk | ΣV=0 rundt sløyfe |

**Viktigste funn:**

- **Mekanikk-kjernen** (kinematikk fra v(t), rulling + treghetsmoment, Newton på skråplan
  med friksjon, svingninger, støt/dreieimpuls, statikk/velting) og **EM-kjernen** (potensial,
  magnetfelt fra strøm, kondensator + serie/parallell, induktans/spole, felt fra
  ladningskonfigurasjon, dreiemoment på sløyfe) treffer i praktisk talt **hvert** sett. Dette
  er den harde poenghøstingskjernen.
- **EM-halvdelen er bred og komplett**: elektrostatikk (felt, potensial, superposisjon,
  dipol, ladningsfordelinger med integrasjon), kapasitans (platekondensator, serie/parallell,
  dielektrikum), likestrømskretser (Ohm, resistivitet, RC), magnetisme (felt fra
  leder/sløyfe/solenoide, Lorentzkraft, dreiemoment på strømsløyfe, hysterese) og induksjon
  (Faraday, motional EMS, selv-/gjensidig induktans, RL, LC, magnetisk energitetthet).
- **TFY4104s mekanikk-signatur** er tyngden på **luftmotstand og eksponentielle
  fartsmodeller** (v(t)∝e^(−t/τ), terminalfart, «finn a størst der …») og **rullende legemer
  på krumlinjede baner** (y(x)=y₀x²/L², beregn fart, tangentiell akselerasjon og normalkraft
  i et gitt punkt via krumningsradius fra formelarket). Disse går igjen som klynger av 2–3
  koblede spørsmål.

### 2C. Fraværende i den nåværende formen (verifisert ved maskinsøk)

**Termofysikk** (entropi, Carnot/kretsprosess, adiabat, ideell gasslov, varmekapasitet,
varmeledning): fast innslag t.o.m. 2012, men **0 reelle treff fra 2013→**. **Bølger og
interferens, geometrisk/bølgeoptikk** (linse, brytning, Snells lov, Doppler),
**fluidmekanikk** (Bernoulli, oppdrift, viskositet), **relativitet** (tidsdilatasjon,
Lorentz-transformasjon) og **kvante-/atom-/kjernefysikk**: **0 treff i hele arkivet**. Disse
skal **ikke** bygges inn som kjernepensum i læreboka. («Bølgefysikk» i emnebeskrivelsens
TFY4102-arv slår ikke gjennom i settene.)

### 2D. Historisk tilleggsstoff (2009–2012 — kun beredskap)

I de eldste åpne settene var **termofysikk** en fast tredjeblokk: ideell gasslov, kretsprosess
og virkningsgrad, adiabatiske prosesser (pV^γ=konst), varmekapasitet/frihetsgrader. Fordi
emnebeskrivelsen fortsatt lister termodynamikk som formell pensumarv, kan en **kort
termofysikk-modul** tas med som beredskap, men den skal tydelig markeres som ikke-normgivende
for dagens eksamen.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensorens forventede metode. Formuleringene er
omskrevet; formlene er standard fysikknotasjon.

### Mekanikk (spm. 1–20 / 1–25)

**M1. Kinematikk fra fartsgraf/fartsfunksjon.** Gitt v(t) (ofte en luftmotstandsmodell
v(t)=(s₀/τ)e^(−t/τ) eller v_t(1−e^(−t/τ))): finn a=dv/dt (maks ofte i t=0), strekning s=∫v dt,
eller **identifiser hvilken a(t)-graf som passer** (konseptuelt: v ikke andregrad ⇒ a ikke
lineær).

**M2. Newton på skråplan med friksjon.** Dekomponér tyngden; N=mg cosθ; kinetisk/statisk
friksjon μN. Standardgrep via energibevaring: μ=v₀²/2gs (horisontalt),
s=v₀²/[2g(μ_s cosθ−sinθ)] (oppbremsing i bakke).

**M3. Rullende legeme med energibevaring / N2.** mgΔy=½(1+c)mv² (c=⅖ kule, ½ sylinder, ⅔
kuleskall). Klassisk konseptoppgave: akselerasjonen ned skråplanet a=⅔g sinβ (sylinder) er
**uavhengig av masse og radius** ⇒ alle kommer samtidig. N2 for translasjon (Mg sinβ−f=Ma) +
rotasjon (fR=Iα, a=αR).

**M4. Treghetsmoment og Steiners sats.** I=∫r²dm (stav om ende ⅓ML²) eller I=Σmᵢrᵢ²;
**I=I_CM+Md²** for akse utenfor massesenteret. Sammensatt legeme: I=I₁+I₂ (f.eks. to staver,
den ene om ende, den andre forskjøvet med Steiner).

**M5. Dreieimpuls og støt mot roterbart legeme.** Total L bevart om hengslingspunkt:
banedreieimpuls (mv₀L) før → spinn (Iω) etter (leirklump fester seg ytterst på stang:
mv₀L=(mL²+⅓ML²)ω). Ren dreieimpulsbevaring Iω=konst når ytre moment mangler.

**M6. Bevegelsesmengde, støt og impuls.** Σmv=Σmv′; elastisk/uelastisk; impuls fra
tidsavhengig kraft Δp=∫F dt (trekantpuls: mv₀=½F₀τ ⇒ F₀=2mv₀/τ); V=FΔt/M.

**M7. Svingninger (SHM).** ω₀=√(k/m), f=ω₀/2π; k=4π²f²µ (effektiv masse µ); k=4π²m/T².
**Hengslet stang som harmonisk oscillator:** sett opp N2 for rotasjon med små vinkler
(sinθ≈θ), les av ω²=3k/m. **Dempet:** x=A₀e^(−γt)cos ωt, γ=b/2m; finn b fra en gitt
amplitudereduksjon over N perioder. Konseptuelt: akselerasjon størst der utsvinget er størst.

**M8. Sirkelbevegelse og normalkraft.** N−mg=mv²/r (bunn), mg−N=mv²/r (topp); N størst der v
størst (energibevaring). Loop-oppgaver og rangering av N i ulike punkter.

**M9. Rullende legeme på krumlinjet bane (TFY4104-signatur).** Bane y(x)=y₀x²/L²: bruk
energibevaring (med rotasjonsledd) for fart i et punkt, dekomponer kreftene for **tangentiell
akselerasjon** (a_∥=⅔g sinθ, tanθ=y′), og bruk **krumningsradius** 1/ρ=y″ (fra formelark) for
**normalkraft** N/mg=v²·y″/g+1 i bunnpunktet.

**M10. Statikk / momentbalanse.** Στ=0 om et klokt valgt punkt: maksimal last før en kran
**velter** (moment om fremre kontaktpunkt), bjelke/vogn, kraftfordeling. ΣF=0 der relevant.

**M11. Gravitasjon og satellittbaner.** GMm/r²=mv²/r=m·4π²r/T² ⇒ T=2π√(r³/GM) (baneradius
r=R+h); g=ρ·4πrG/3 fra tetthet; omløpsfart v=2πr/T.

**M12. Skrått kast / prosjektil.** y_max=v₀²sin²θ/2g; rekkevidde; **dreieimpuls om
utgangspunkt** i banens topp-punkt L_b=y_max·mv_x.

**M13. Rakett og arbeid/effekt.** Δv=u ln(m₀/m); P=W/t=½mv²/t (togeffekt), P=Fv.

### Elektromagnetisme (spm. 21–40 / 26–50)

**E1. Elektrisk felt fra ladningskonfigurasjon (retning + størrelse).** Superposisjon av
Coulomb-bidrag; utnytt symmetri (komponenter kanselleres); E=2kqx/(x²+a²)^{3/2} på
symmetriaksen. Ofte konseptuelt: tegn feltpiler, avgjør resulterende retning.

**E2. Elektrisk potensial.** V=Σkqᵢ/rᵢ (skalar sum); V=2kq/√(a²+x²). Potensialforskjell
mellom to punkter; nullpunktsvalg.

**E3. Elektrisk dipol.** Dipolmoment p=Σqᵢdᵢ; felt og potensial langt ute på aksen.

**E4. Ladet stav / linjeladning.** dE=k dQ/(x+a)², dQ=λdx; integrer over lengden:
E=kλ(1/a−1/(L+a)).

**E5. Platekondensator og kapasitans.** C=ε₀A/d; C=Q/V; areal fra geometri (A=πr²).
**Dielektrikum:** C=εᵣε₀A/d; sammensatte kondensatorer (tankmåler = parallellkobling av
luft- og væskefylt del med variabelt væskenivå).

**E6. Kondensatorer i serie/parallell + Kirchhoff.** 1/C_serie=Σ1/Cᵢ; C_parallell=ΣCᵢ; samme
ladning i serie ⇒ V=Q/C; spenningsfordeling via ΣV=0.

**E7. RC-krets.** τ=RC; opp-/utladning Q(t)=Q₀(1−e^(−t/τ)); løs for tid til x % oppladning
(t=−τ ln(1−Q/Q₀)).

**E8. Resistans, resistivitet, Ohms lov.** R=ρl/A; finn lengde/tverrsnitt; R(T)=R₀(1+αΔT)
(temperaturkoeffisient); spenningsfall over leder.

**E9. Magnetfelt fra strøm.** Lang leder B=µ₀I/2πR; sløyfe/senter B=µ₀I/2R; **superposisjon**
av flere ledere (retning fra høyrehåndsregelen, komponent-kansellering — f.eks. null i
sentrum av likesidet trekant).

**E10. Lorentzkraft og sirkelbevegelse.** F=q**v**×**B**; qvB=mv²/R ⇒ R=mv/qB (massespektro-
meter, forhold mellom radier ∝ masse); syklotronbevegelse.

**E11. Dreiemoment på strømsløyfe.** τ=IAB sinφ; τ_max=IAB; endring i τ når B endres.

**E12. Induktans og magnetisk energi.** Solenoide L=µ₀N²A/l; magnetisk energitetthet
u_B=B²/2µ₀, total energi U_B=u_B·(volum) med B=µ₀nI; **gjensidig induktans** M=Φ/I mellom
leder og nabosløyfe.

**E13. Faradays induksjonslov.** ε=N dΦ/dt; roterende sløyfe ε=NBAω cosωt, amplitude
V₀=NBAω; retning fra Lenz.

**E14. Motional EMS / stang på skinner.** Kraft F_m=IlB=V₀lB/R; N2 gir akselerasjon
a=V₀lB/mR (ved t=0).

**E15. RL- og LC-kretser.** RL: τ=L/R, I(t)=I₀(1−e^(−t/τ)), energitap ∫RI²dt. LC-svingekrets:
ω₀=1/√LC, I₀=ω₀Q₀, energi U=Q₀²/2C; dempet RLC γ=R/2L.

**E16. Hysterese/magnetisering (konseptuell).** Tolke B–H-kurve: remanens, koersitivfelt,
metning; identifiser hvor materialet er magnetisk mettet.

### Åpen-utlednings-sjangre (2009–2012 — samme mekanikk/EM + historisk termo)

**Å1. Treghetsmoment og spinnbevaring (utledning).** Utled I=∫r²dm for stav; sett opp
spinnbevaring I_før ω_før=I_etter ω_etter når lodd monteres.

**Å2. Full kretsprosess (termo, historisk).** Tegn syklus i pV-diagram, bestem γ/frihetsgrader,
regn arbeid pr trinn, virkningsgrad — **kun beredskap**, ikke dagens pensum.

---

## 4. Sensorens krav

Rettereglene avhenger av format.

### Flervalgs-æraen (2013–2025, gjeldende)

1. **1 poeng for riktig, 0 for feil eller blankt.** Ingen minuspoeng, ingen delpoeng for
   oppsett eller mellomregning. Kun det endelige bokstavsvaret teller (digitalt i Inspera;
   ingen håndtegninger sendes til sensur).
2. **Alle spørsmål teller likt.** Bare ett riktig alternativ per spørsmål.
3. **Presisjon er avgjørende:** alternativene ligger tett og er ofte konstruert rundt en
   typisk feil (glemt rotasjonsledd, feil γ/fortegn, forbyttet serie/parallell, forvekslet
   C_V/C_P i eldre sett). Regnekjeden må være rask og feilfri; behold nok siffer til
   avrundingen ikke lander på nabo-alternativet.
4. Løsningsforslaget viser **den avgjørende loven + få regnelinjer** — det er arbeidsformen
   kandidaten må beherske under tidspress. Fra 2025 er fasiten redusert til bokstav +
   én formellinje.
5. Enkelte spørsmål er **rene konsept-/rangeringsspørsmål** (velg riktig graf, feltretning,
   hvilket punkt har størst normalkraft, magnetisk metning) — her belønnes forståelse framfor
   regning.

### Utlednings-æraen (2009–2012)

- I de åpne oppgavene premierer sensuren **korrekt oppsett og metode** (frilegemediagram,
  riktig lov, symbolsk uttrykk, riktig fortegn/retning) selv om sluttallet glapp; **enheter og
  gjeldende siffer vektlegges**, og deloppgavene «teller likt».
- Løsningsforslagene fremhever gjennomgående **hvilken lov/teorem** som brukes (energibevaring,
  N2 for rotasjon/spinnsats, Steiners sats, Faradays lov, Coulombs lov).

**Konsekvens for læreboka:** Tren begge modi. For eksamen (MC) må studenten komme til riktig
**tallsvar raskt og feilfritt**; for forståelse (og for eldre sett som øving) må hun kunne
sette opp den symbolske utledningen, navngi loven, og få fortegn/enheter riktig.

---

## 5. Typiske feil (observert i løsningsforslag / bygget inn i alternativene)

**Mekanikk:**

1. **Glemme rotasjonsenergien** for rullende legemer — bruke ½mv² i stedet for ½(1+c)mv².
   Den vanligste innebygde fella.
2. **Tro at masse/radius påvirker** akselerasjonen ned skråplanet for et rullende legeme (den
   er uavhengig av begge for gitt form) — konseptuell felle.
3. **Glemme Steiner-leddet** når treghetsmomentet skal om en akse utenfor massesenteret, eller
   feil summering I=I₁+I₂ for sammensatt legeme.
4. **Bruke konstant-akselerasjonslikning på ikke-konstant akselerasjon** (α varierer i pendel/
   fallende stang; a varierer på krum bane og ved luftmotstand) — må bruke energibevaring
   eller integrasjon/differensiallikning.
5. **Sette N=mg** når banen er krum eller en ytre kraft har vertikal komponent (N endres →
   friksjon/normalkraft endres).
6. **Feil fortegn/retning** på dreieimpuls eller kraftkomponenter; blande banedreieimpuls og
   spinn i støt mot roterbart legeme.
7. **Regne a fra v(t) feil** ved luftmotstandsmodeller (a maks ved t=0 for e^(−t/τ)-modeller;
   velge feil a(t)-graf).

**Elektromagnetisme:**

8. **Glemme vektorkarakter / superposisjon** — summere feltbidrag skalart i stedet for å
   dekomponere og la komponenter kansellere (feil feltretning).
9. **Forveksle serie- og parallellkobling** av kondensatorer (1/C vs. ΣC), eller glemme at
   ladningen er lik i serie og spenningen lik i parallell.
10. **Glemme dielektrikum-faktoren εᵣ** eller behandle en sammensatt kondensator (tankmåler)
    som én enkel.
11. **Feil i tidskonstant** — bytte om τ=RC og τ=L/R, eller feil eksponent-fortegn i
    opp-/utladning.
12. **Rote med høyrehåndsregelen** for B-feltets retning rundt en leder, eller glemme
    komponent-kansellering ved flere ledere.
13. **Blande Φ, ε og retning** i induksjon (Lenz), eller glemme faktoren N (antall viklinger)
    og ω i V₀=NBAω.
14. **Glemme geometrifaktorer** i R=ρl/A og C=ε₀A/d (areal, lengde, plateavstand), og
    enhets-/prefiksslurv (mm, nF, µΩ).
15. **Avrundingsfeil** som lander på nabo-alternativet — behold nok siffer gjennom hele kjeden.

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut **Rottmann matematisk formelsamling**, et **fysikk-formelark** («Formler i
emne TFY4104») og en **tabell over treghetsmomenter for standardlegemer**. Skillet nedenfor er
mellom **hva som må kunne brukes aktivt** (velges, kombineres, omformes under tidspress) og hva
som bare hentes/gjenkjennes.

### Formelarket inneholder (utdrag, rekonstruert fra oppgaver/fasit)

- **Konstanter:** g, k=1/4πε₀, ε₀, µ₀, G, e, elektron-/protonmasse.
- **Mekanikk:** a=dv/dt, v=v₀+at, v²−v₀²=2as, F=ma, p=mv, W=∫F·ds, K=½mv², F=−dU/dx,
  F_f≤µN, α=dω/dt, v=ωr, K_rot=½Iω², τ=r×F=Iα, L=Iω, J=Δp=∫F dt, F=GmM/r²,
  **krumningsradius 1/ρ=y″/(1+y′²)^{3/2}**, rakettligning Δv=u ln(m₀/m); **Steiner I=I₀+Md²**
  og **tabell over treghetsmomenter** (stang, kule, kuleskall, sylinder, plate) på eget ark.
- **Svingninger:** ẍ+ω₀²x=0, ω₀=√(k/m), T=2π/ω, f=1/T; dempet ẍ+2γẋ+ω₀²x=0,
  x=A₀e^(−γt)cos(ω′t+δ), ω′=√(ω₀²−γ²).
- **Elektromagnetisme (kjernepensum her):** Coulomb F=kq₁q₂/r², E=F/q, V=kq/r,
  platekondensator C=ε₀A/d (+ εᵣ), serie/parallell-regler, Ohms lov V=RI, R=ρl/A,
  effekt P=VI=RI², RC: τ=RC, magnetfelt fra leder B=µ₀I/2πR og sløyfe B=µ₀I/2R, Lorentzkraft
  F=q**v**×**B**, kraft på leder F=I**l**×**B**, dreiemoment på sløyfe τ=IAB sinφ, solenoide
  B=µ₀nI og L=µ₀N²A/l, magnetisk energitetthet u_B=B²/2µ₀, Faraday ε=−N dΦ/dt,
  LC ω₀=1/√LC, energi ½CV² og ½LI².

### Må beherskes aktivt (kjernen læreboka skal drille)

**Mekanikk:** kinematikk fra v(t)/graf (inkl. luftmotstandsmodeller); energibevaring for
rullende legeme (½(1+c)mv²) + N2 for rulling; treghetsmoment + **Steiner** + sammensatt
legeme; dreieimpuls og støt mot roterbart legeme; SHM (egenfrekvens, hengslet stang, dempet
amplitude); sirkelbevegelse + normalkraft; **rullende legeme på krum bane** (fart,
tangentiell akselerasjon, normalkraft via krumningsradius); statikk/velting; gravitasjon/bane;
skrått kast; impuls/kraftstøt.

**Elektromagnetisme:** felt og potensial fra ladningskonfigurasjon (superposisjon,
integrasjon av linjeladning); platekondensator + serie/parallell + dielektrikum; RC-krets;
resistans/resistivitet/Ohm; magnetfelt fra leder/sløyfe/solenoide (+ superposisjon);
Lorentzkraft og sirkelbane; dreiemoment på strømsløyfe; induktans + magnetisk energitetthet +
gjensidig induktans; Faradays lov + motional EMS + roterende sløyfe; RL/LC-kretser;
tolkning av hysteresekurve.

### Hentes fra formelark/tabell (skal gjenkjennes, ikke pugges)

Alle naturkonstanter; treghetsmomenter for standardlegemer; krumningsradius-formelen;
kondensator-, solenoide- og induktansuttrykk; Faradays lov.

### Skal IKKE bygges på (i den nåværende formen)

**Termofysikk** (kun historisk beredskap fra 2009–2012), **bølger, optikk, fluidmekanikk,
relativitet, atom-/kjernefysikk** — forekommer ikke i settene fra 2013→.

---

## 7. Prognose og prioritering

### Prognose for neste eksamen

4 timers digital skoleeksamen (Inspera), hjelpemiddelkode C med formelark + treghetsmoment-
tabell, **rent flervalg (40 spm. A–F, 1 poeng riktig / 0 feil eller blankt)** med **fast
todeling**: **første halvdel mekanikk (1–20)**, **andre halvdel elektromagnetisme (21–40)**,
tett plasserte svaralternativer, og et innslag konseptuelle/rangeringsspørsmål i begge
halvdeler. Nesten sikkert innhold:

- **Mekanikk:** kinematikk fra v(t)/graf (luftmotstandsmodell); energibevaring for rullende
  legeme (½(1+c)mv²) + akselerasjon ned skråplan uavhengig av M,R; treghetsmoment + Steiner
  (+ sammensatt legeme); svingninger (egenfrekvens, hengslet stang, dempet amplitude); Newton
  på skråplan med friksjon; støt/dreieimpuls mot roterbart legeme; statikk/velting; pluss et
  utvalg fra {gravitasjon/bane, skrått kast, sirkelbevegelse+normalkraft, rullende legeme på
  krum bane, impuls/kraftstøt, rakett}.
- **Elektromagnetisme:** potensial og felt fra ladningskonfigurasjon; platekondensator +
  serie/parallell + dielektrikum; magnetfelt fra leder/sløyfe (+ superposisjon); induktans/
  solenoide + magnetisk energi; dreiemoment på strømsløyfe; resistans/resistivitet; pluss et
  utvalg fra {RC-krets, Faraday/roterende sløyfe, motional EMS, Lorentzkraft/massespektrometer,
  gjensidig induktans, RL/LC, hysterese, linjeladning-integrasjon}.

### Nivå 1 — må beherskes perfekt (bærer minst 60–70 % av settet)

1. **Kinematikk fra v(t)/graf** (inkl. luftmotstand/eksponentielle modeller) og **energi-
   bevaring for rullende legeme** (½(1+c)mv²).
2. **Newton på skråplan med friksjon** og **rulling via N2** (a uavhengig av M,R).
3. **Treghetsmoment, Steiners sats og sammensatt legeme.**
4. **Svingninger** (egenfrekvens, hengslet stang, dempet amplitude) og **støt/dreieimpuls**
   mot roterbart legeme.
5. **Elektrisk felt og potensial fra ladningskonfigurasjon** (superposisjon, retning).
6. **Kondensator: platekondensator + serie/parallell + dielektrikum**, og **RC-krets**.
7. **Magnetfelt fra leder/sløyfe/solenoide** (+ superposisjon) og **dreiemoment på strømsløyfe**.
8. **Induktans + magnetisk energitetthet** og **Faradays lov** (roterende sløyfe, motional EMS).

### Nivå 2 — bør sitte (avgjør karakter i øvre sjikt)

9. Statikk/momentbalanse (velting). 10. Gravitasjon/satellittbane; skrått kast + dreieimpuls.
11. Sirkelbevegelse + normalkraft; **rullende legeme på krum bane** (krumningsradius).
12. Resistans/resistivitet/Ohm + temperaturkoeffisient. 13. Lorentzkraft/massespektrometer;
gjensidig induktans. 14. RL/LC-kretser; hysteresekurve. 15. Linjeladning/integrasjon;
elektrisk dipol.

### Nivå 3 — kompakt beredskap

16. Rakettligning; impuls/kraftstøt (trekantpuls). 17. Kirchhoffs lover i sammensatte kretser.
18. Måle-/statistikk-/gjeldende-siffer-spørsmål (sporadisk). 19. Numerikk/Euler (sporadisk).
20. Termofysikk (kun historisk — gasslov, kretsprosess, adiabat) dersom den skulle gjenoppstå.

**Konsekvens for læreboka:** Bygg to likeverdige hoveddeler — **Mekanikk** og
**Elektromagnetisme** — med tung metodedrill på nivå 1-sjangrene og standardoppskrifter for
nivå 2. Gi ekstra plass til TFY4104s to mekanikk-signaturer: **luftmotstand/eksponentielle
fartsmodeller** og **rullende legemer på krumlinjede baner** (med krumningsradius fra
formelarket). EM-delen skal være komplett: elektrostatikk → kapasitans → likestrømskretser →
magnetisme → induksjon, med kondensator- og induktans-kretsene som ryggrad. Hver drilloppgave
bør trene **rask, feilfri vei til tallsvar** (MC-modus) i tillegg til den symbolske utledningen
(for de eldre utledningssettene). **Gjenbruk både mekanikk- og EM-delen fra TFY4125-materialet
nesten uendret** — emnene er i dag samme profil; legg til en kort, tydelig merket historisk
termofysikk-modul kun som beredskap.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TFY4104/`. Arkivet har
to delvis overlappende navnekonvensjoner; etter deduplisering ca. 27 unike sett 2009–2025,
de fleste med tilhørende løsningsforslag.

**Lest fullstendig (løsningsforslag) — flervalgsæraen (normgivende):**
- H2025 (`E/L_TFY4104_251202`; 40 spm. A–F; mekanikk 1–20, EM 21–40) og H2025 konte
  (`…_250812`).
- H2024 (`…_241205`) og H2024 konte (`…_240816`; oppgavetitler kartlagt: mek 1–19, EM 20–35).
- H2023 (`…_231207`), H2022 (`…_221214`), V2022 (`…_220121`).
- H2021 konte (`…_210811`), H2020 (`…_201130`; seksjonsmerket «Mekanikk»/«Elektromagnetisme»).

**Lest grundig (løsningsforslag/oppgavesett) — 50-spørsmåls MC-æra:**
- H2018 konte (`E/L-TFY4104-17aug2018`; **50 flervalg A–E, felles TFY4104/TFY4115-sett**;
  TFY4104-varianten = mekanikk + EM, 0 termo-treff).
- H2017 (`…-16des2017`), H2017 konte (`…-15aug2017`), V2017 (`…-10jan2017`),
  H2016 (`…-28nov2016`), H2016 konte (`…-17aug2016`), H2015 (`…-04des2015`),
  H2014 konte (`…-04aug2014`), H2013 (`…-18des2013`) — alle 50 spm., mekanikk + EM.

**Lest for formatdokumentasjon (oppgave + løsning) — utledningsæraen:**
- H2009 (`…-30nov2009`; åpne oppgaver, **nynorsk** løysingsframlegg, mekanikk + termo + EM),
  H2010 (`…-18des2010`/`…-18aug2010`), 2011 (`…-17des2011`/`…-12aug2011`),
  2012 (`…-14des2012`) — bekrefter den opprinnelige brede formen med **termofysikk-tredjeblokk**.

**Maskinell verifisering (fil-nivå frekvenstelling):**
- **17 oppgavesett 2013–2025** ble søkt for tema. Mekanikk-kjerne (rulling/treghetsmoment,
  svingninger, kinematikk v(t)) og EM-kjerne (potensial, magnetfelt, kondensator): treff i
  ~alle sett. Luftmotstand/terminalfart: 15/17. Statikk: 14/17.
- **Termofysikk:** treff **kun** i 2009–2012-settene; **0 reelle treff fra 2013→** (de
  eneste «varme/temperatur»-forekomstene senere er EM-relaterte, f.eks. resistivitetens
  temperaturkoeffisient). **Bølger/optikk (Doppler, linse, Snells lov), fluidmekanikk
  (Bernoulli), relativitet (tidsdilatasjon):** 0 treff i hele arkivet. («relativ» i settene =
  «relativ permittivitet» εᵣ, altså EM, ikke relativitet — 7/17.)

**Fagbeskrivelse:** utledet fra arkivet og kryssjekket mot seksjonen for TFY4102/TFY4104 i
`~/Desktop/fagbeskrivelser-samlet 2.md`. TFY4104 er den aktive etterfølgeren for TFY4102
(Petroleumsfag, Industriell design, Tekniske geofag), med studiepoengreduksjon mot TFY4102 fra
høst 2017. Emnebeskrivelsens formelle pensumarv (dynamikk, bølgefysikk, termodynamikk,
elektrisitet) er bredere enn det de faktiske settene fra 2013→ tester (kun mekanikk + EM).

**Merknader om kildene:**
- Arkivet er tilnærmet komplett parvis (eksamen + løsning) fra 2013; de nyeste settene
  (2025) har svært komprimerte fasiter (kun bokstav + én formellinje).
- Enkelte skannede eldre løsnings-PDF-er (2011, 2012) ga ingen tekst ved uttrekk og er kun
  temaregistrert via tilhørende oppgavesett.
- **Kildeforbehold:** Frekvenstallene gjelder den nåværende MC-formen (2013–2025). Emnet
  undervises videre (start høst 2026); formen ventes stabil (40 MC A–F, mek + EM).
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller
  veiledningsformuleringer er gjengitt ordrett. Formlene er standard fysikknotasjon og ikke
  opphavsrettslig beskyttet.

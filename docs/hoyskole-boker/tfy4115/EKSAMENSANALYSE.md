# Eksamensanalyse: TFY4115 Fysikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs eksamensarkiv for
> **TFY4115** (2004–2020): ca. 25 unike eksamenssett, de fleste med tilhørende
> løsningsforslag/sensorveiledning. Arkivet finnes i tre navnekonvensjoner som delvis
> **overlapper (samme eksamen, ulik fil)** — `E_TFY4115_ÅÅMMDD` / `L_…` (2019–2020),
> `E-TFY4115-DDmmmÅÅÅÅ` / `L-…` (2004–2016) og enkeltfiler (`Eks17des`, `eksamen_tfy4115_h2018`).
> Etter deduplisering dekker arkivet vår-/høst- og kontinuasjonseksamener fra 2004 til 2020.
>
> **Samplingsstrategi:** Løsningsforslagene fra 2017–2020 er lest fullstendig (dagens
> flervalgsform). Løsningsforslag 2011, 2013, 2015, 2016 er lest grundig (hybrid-/blandet
> æra), og oppgavesettet fra 2004 er lest for å dokumentere den eldste, rene
> utledningsformen. Hele arkivet er maskinelt gjennomsøkt for temaforekomst og for
> fraværende emner. **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der
> kildene tillater det.
>
> **Hovedbudskap i én setning:** TFY4115 er en **todelt fysikkeksamen der andre halvdel er
> TERMOFYSIKK** (ikke elektromagnetisme) — dagens form (2017–2020) er et **flervalgssett
> delt i to like store blokker: mekanikk (spm. 1–20/1–25) og termisk fysikk
> (spm. 21–40/26–50)**. Dette er den avgjørende forskjellen fra søsteremnet TFY4125.

> ⚠️ **Viktig kildeforbehold:** Arkivet stopper i **2020**. Den nyeste normgivende formen vi
> kan dokumentere er derfor **40 flervalgsspørsmål A–F (2019–2020)**. Vi kan ikke bekrefte
> om TFY4115 senere har fulgt TFY4125 over i et rent 40-spørsmåls dynamikk+EM-format, eller
> om emnet fortsatt kjører mekanikk+termofysikk. **Emnebeskrivelsen (verifisert 2026) angir
> fremdeles mekanikk OG termofysikk som pensum**, så alt tyder på at termofysikk-halvdelen
> består. En lærebok bør behandle termofysikk som **kjernepensum**, ikke som historisk
> tillegg (motsatt av hva som gjelder for TFY4125).

---

## 0. TFY4115 vs. TFY4125 — forskjellene i klartekst

Begge er 7,5-studiepoengs grunnkurs i fysikk ved NTNU, med **kode C** (Rottmann + kalkulator
+ utdelt formelark), 4 timer, bokstavkarakter, og en **mekanikk-kjerne som er nesten
identisk** (2018-settet var faktisk et **felles TFY4104/TFY4115-sett**). Men:

| Trekk | **TFY4115** (dette emnet) | **TFY4125** (søsteremnet) |
|---|---|---|
| **Andre halvdel av eksamen** | **Termisk fysikk** (spm. 21–40 / 26–50) | **Elektromagnetisme** (spm. 21–40) |
| Elektromagnetisme | **Aldri i pensum** (0 treff i hele arkivet) | Kjernepensum, halve settet |
| Termofysikk | **Kjernepensum, fast halvdel** (gjennom 2020) | Faset helt ut fra 2022 |
| Studieprogram | MTELSYS (Elektronisk systemdesign), MTTK (Kybernetikk og robotikk), MTNANO (Nanoteknologi) | Industriell design, Datateknologi, Kommunikasjonsteknologi |
| Varmestråling (Stefan–Boltzmann, Wien, Planck) | **Fast innslag** i termohalvdelen | Ikke pensum |
| Numerisk iterasjon (Euler/fikspunkt) | **Fortsatt til stede** i 2019–2020 (siste spm.) | Faset ut etter 2019 |
| Måle-/usikkerhetsspørsmål | **Sporadisk** (ikke fast åpner) | Fast åpningsspørsmål i MC-æraen |
| Nyeste sett i arkivet | 2020 (kan ikke bekrefte 2021→) | 2025 |

**Praktisk konsekvens:** Den som skriver læreboka til TFY4115 kan gjenbruke hele
**mekanikk-delen** fra TFY4125-materialet, men må **bytte ut hele EM-delen med en fullverdig
termofysikk-del**. Termofysikken i TFY4115 er bredere og tyngre enn de gamle
termofysikk-innslagene i TFY4125: den omfatter kinetisk gassteori, frihetsgrader og deres
«innfrysing», van der Waals, Clausius–Clapeyron/faseovergang, varmeledning i sjikt,
varmekraft-/kjølesykluser, entropi **og varmestråling**.

---

## 1. Eksamensform og utvikling

### Nåværende form (2017–2020 — normgivende for arkivet)

- **Skriftlig skoleeksamen, 4 timer** (09.00–13.00). **Hjelpemiddelkode C:** bestemt/godkjent
  kalkulator, Rottmann matematisk formelsamling, **+ utdelt fysikk-formelark** (se del 6).
  Bokstavkarakter A–F.
- **Flervalg med fast todeling:**
  - **Første halvdel = mekanikk** (spm. 1–20 i 2019–2020; spm. 1–25 i 2017–2018).
  - **Andre halvdel = termisk fysikk** (spm. 21–40 i 2019–2020; spm. 26–50 i 2017–2018).
- **Retteregel:** **1 poeng for riktig svar, 0 for feil eller blankt** (ingen minuspoeng).
  Kun det endelige bokstavsvaret teller. Løsningsforslaget er kompakt — den avgjørende loven
  pluss én til få regnelinjer per spørsmål.
- **Svaralternativene ligger tett** og systematisk (f.eks. 0.29 / 0.42 / 0.55 / …), slik at en
  liten regnefeil, en glemt faktor eller feil fortegn lander på et nabo-alternativ.
- Antall alternativer varierer: **A–E** i 2013/2017/2018, **A–F** i 2019/2020.

### Formatutvikling — viktig å kjenne

| Periode | Form | Struktur | Innhold |
|---|---|---|---|
| **2004–~2008** | **Ren utledning.** 4 t, kode C. Bokmål **og** nynorsk. | **4 store oppgaver** (Oppgave 1–4) med deloppgaver a–c som «teller likt» | Mekanikk (rotasjon, SHM/**seismometer**, statikk) + **termo-kretsprosess** + **varmeledning** |
| **~2009–2016** | **Hybrid.** 4 t, kode C. | **Oppgave 1 = flervalg** (8 spm. i 2011, 24 spm. i 2015/2016) **+ 3–4 åpne oppgaver** med full utledning | Mekanikk-blokk + termo-blokk i begge deler |
| **2013** | **Rent flervalg** (unntak fra hybridperioden). 50 spm. A–E | Fast: mekanikk 1–25, termofysikk 26–50 | Mekanikk + termofysikk + litt numerikk |
| **2017–2018** | **Rent flervalg.** 50 spm. A–E | Mekanikk 1–25, termisk fysikk 26–50. **2018 var felles TFY4104/TFY4115** | Full bredde mekanikk + termofysikk |
| **2019–2020** | **Rent flervalg.** 40 spm. A–F (siste dokumenterte standard) | Mekanikk 1–20, termofysikk 21–40 | Full bredde mekanikk + termofysikk |

**Utviklingstrekk:**

1. **Termofysikk er en stabil, halv del gjennom hele arkivet (2004→2020).** I motsetning til
   TFY4125, der termodynamikk ble faset ut, er termofysikken i TFY4115 selve andre halvdel og
   like sentral som mekanikken. Den skal behandles som **kjernepensum**.
2. **Elektromagnetisme forekommer aldri** (0 treff ved maskinsøk over alle filer). Faget er
   strengt **mekanikk + termofysikk**.
3. **Formatet har beveget seg fra ren utledning (2004) via hybrid (2009–2016) til rent
   flervalg (2017→).** Selve fysikken og metodene er stabile på tvers av formatene; det er
   innpakningen og rettereglene som endrer seg. De gamle utledningsoppgavene er fortsatt
   verdifulle som øving fordi de tvinger fram metoden bak MC-svarene.
4. **Numerisk iterasjon / diskretisering lever fremdeles** (i motsetning til TFY4125). Siste
   spørsmål i både 2019- og 2020-settene er en **fikspunktiterasjon** (Plancks strålingslov
   løst ved `xₙ₊₁ = 5(1 − e^(−xₙ)))`), og eldre sett har Euler-diskretisert forflytning.
5. **Måle-/usikkerhetsspørsmål er sporadiske**, ikke en fast åpner slik som i TFY4125.

---

## 2. Temafrekvens

Fordi settene har fast halv-halv-struktur, forekommer nesten alle kjernetemaene i **alle**
sett. Tabellene under er basert på fullstendig/grundig lesing av 10 sett (2011, 2013, 2015,
2016, 2017, 2018-vår, 2018-høst, 2019-vår, 2019-høst, 2020) supplert med maskinsøk over hele
arkivet. «Gjenganger-score» = hvor stor andel av settene temaet inngår i som minst ett
spørsmål/deloppgave.

### 2A. Mekanikk (første halvdel — spm. 1–20 / 1–25)

| Tema | Gjenganger-score | Typisk grep |
|---|---|---|
| Newtons lover + friksjon (statisk/kinetisk), skråplan | **~100 %** | a = g(sin θ ± μ cos θ); N normalt; F ⊥-komponent kan endre N |
| Energibevaring / arbeid–energi | **~100 %** | mgh = ½mv²(+½Iω²); W = ∫F·ds; areal under F(x) |
| Rotasjon: treghetsmoment (∫r²dm, punktmasser) + **Steiners sats** | **~100 %** | I = I_CM + Md²; stang, kule, kuleskall, sylinder, plate |
| Rulling av kompakt legeme med energibevaring | **~100 %** | kule K = 7/10·mv²; sylinder K = ¾mv²; v = ωR |
| Bevegelsesmengde og støt (elastisk/uelastisk), impuls | **~100 %** | Σmv = Σmv′; ΔK; Δp = ∫F dt = areal |
| Dreieimpuls: L = L_spinn + L_bane, bevaring, fortegn | **~90 %** | L = mrv + Iω; spinnsats τ = dL/dt |
| Svingninger (SHM): egenfrekvens, dempet, Q-faktor, resonans | **~90 %** | ω₀=√(k/m); x=A₀e^(−γt)cos ωt; γ=b/2m; Q=ω₀/2γ; overkritisk demping |
| Kinematikk fra gitt v(t)/ω(t): deriver/integrer | **~80 %** | a=dv/dt (maks ofte i t=0); s=∫v dt; φ=∫ω dt |
| Statikk / momentbalanse (bjelke, stupebrett, plate mot vegg) | **~70 %** | ΣF=0, ΣM=0 om klokt valgt punkt |
| Krumningsradius og normalkraft i topp-/bunnpunkt | **~60 %** | 1/ρ=\|y″\|; N − mg = mv²/ρ |
| Fysisk pendel / konisk pendel (svingkarusell) | **~50 %** | T=2π√(I_A/Mgd); S cos θ=mg, S sin θ=mv²/R |
| Gravitasjon / satellittbaner | **~40 %** | GMm/r²=mω²r; v=2πr/T |
| Terminalfart (luftmotstand f∝v²) | **~40 %** | ½ρA C_d v_t² = mg; v_t ∝ √d |
| Overgang gliding → ren rulling; treffhøyde ved støt | **~40 %** | N2 translasjon + N2 rotasjon; V=5V₀/7 e.l. |
| Effekt P = Fv | **~30 %** | ofte kombinert med luftmotstand P=bv³ |
| Rakettligning \|dm/dt\| | **~20 %** | m = m₀ e^((v−v₀)/u) |
| Presesjon (gyroskop/snurrebass/sykkelhjul) | **~20 %** | Ω = τ/L = Mgr/I₀ω |
| Massesenter x_CM = Σmᵢxᵢ/Σmᵢ | sporadisk | punktmassesystem |

### 2B. Termisk fysikk (andre halvdel — spm. 21–40 / 26–50)

| Tema | Gjenganger-score | Typisk grep |
|---|---|---|
| Ideell gasslov + antall molekyler | **~100 %** | pV=nRT; N=pV/k_BT |
| Kretsprosess + virkningsgrad (Carnot/Otto/Stirling/generell) | **~100 %** | η=W/Q_inn; W = omsluttet areal; η_Carnot=1−T_k/T_v |
| Entropi (tilstandsfunksjon, rev./irrev., ΔS-beregning) | **~100 %** | dS=dQ_rev/T; ΔS=nC_V ln(T₂/T₁)+nR ln(V₂/V₁) |
| 1. og 2. hovedsetning (ΔU=Q−W; hvilke prosesser er lovlige) | **~100 %** | fortegnsanalyse av Q, W, ΔU langs syklus |
| Varmepumpe / kjøleskap — effektfaktor ε | **~90 %** | ε_V=Q_H/W, ε_K=Q_L/W; Carnot ε=T/(ΔT) |
| Adiabatiske prosesser | **~90 %** | pV^γ=konst; TV^(γ−1)=konst; adiabat brattere enn isoterm |
| Ekvipartisjon + frihetsgrader (translasjon/rotasjon/vibrasjon) | **~90 %** | U=f·RT/2; C_V=fR/2; C_P=C_V+R; γ=C_P/C_V |
| Kinetisk gassteori: vrms, midlere kinetisk energi | **~80 %** | ⟨E_k⟩=3/2 k_BT; v_rms=√(3k_BT/m) |
| **Varmeledning** (Fouriers lov, sjikt i serie) | **~80 %** | j=κΔT/ℓ; P=ΔT/R, R=Σ ℓ_j/(κ_jA); temperaturprofil |
| **Varmestråling** (Stefan–Boltzmann, likevekt mellom plater) | **~70 %** | j=σT⁴; P=σT⁴A; stasjonær platebalanse T₂=((T₁⁴+T₃⁴)/2)^¼ |
| Fasediagram: trippelpunkt, kritisk punkt, koeksistenslinjer | **~60 %** | p–T-diagram; ingen væske under p_trippel |
| van der Waals tilstandsligning + kritisk punkt | **~50 %** | p=nRT/(V−nb)−an²/V²; T_c=8a/27Rb |
| Clausius–Clapeyron / damptrykk | **~40 %** | p_t=p_k·exp[(l_f/R)(1/T_k − 1/T_t)] |
| «Innfrysing» av frihetsgrader (kvante), C_V(T)-kurve for H₂ | **~40 %** | rotasjon/vibrasjon vekkes ved stigende T (3/2→5/2→7/2)R |
| Termisk utvidelse | **~30 %** | ΔL=αLΔT (skinnegang, bygg) |
| Varmestrøm/effekt i strømmende medium | **~30 %** | P=cρvAΔT (fjernvarme) |
| **Numerisk iterasjon / diskretisering** | **~40 %** | Planck: xₙ₊₁=5(1−e^(−xₙ)); Euler-forflytning |
| Wiens forskyvningslov | sporadisk | λ_max=b/T (b≈2898 µm·K) |
| Konveksjon (begrep) | sporadisk | varmetransport ved strømning |

**Viktigste funn:**

- **Mekanikk-kjernen** (Newton/friksjon, energi, rotasjon+Steiner, rulling, støt, dreieimpuls,
  svingninger) og **termofysikk-kjernen** (gasslov, kretsprosess+virkningsgrad, entropi,
  hovedsetningene, varmepumpe, adiabat, ekvipartisjon, varmeledning, varmestråling) er
  tilnærmet 100 % i hvert sett. Dette er den harde poenghøstingskjernen.
- **Kretsprosessen er termofysikkens signatursjanger** — nesten hvert sett har en full
  varmekraft-/kjølesyklus (i de åpne settene som egen oppgave, i MC som en klynge på 3–4
  koblede spørsmål): finn T i hjørnene via adiabat-/gasslov-relasjoner, klassifiser Q og W
  langs hvert trinn, regn virkningsgrad/effektfaktor, og skisser prosessen i pV- eller
  (S,T)-diagram.
- **Frihetsgrader og C_V er et gjennomgående konseptpoeng**: telle kvadratiske frihetsgrader
  (translasjon 3 + rotasjon + vibrasjon) og koble til C_V=fR/2, samt forstå at
  vibrasjonsmodene «fryser ut» ved lave temperaturer (kvanteeffekt).
- **Varmestråling er unikt for TFY4115** (mot TFY4125): Stefan–Boltzmann j=σT⁴, stråling
  mellom parallelle svarte plater i stasjonær likevekt, Wien og Planck.

### 2C. Fraværende gjennom hele arkivet (verifisert ved maskinsøk — 0 treff)

**Elektromagnetisme** (felt, potensial, kondensatorer, kretser, magnetfelt, induksjon),
**bølger og interferens**, **geometrisk/bølgeoptikk** (linser, brytning, Snell),
**fluidmekanikk** (Bernoulli, oppdrift, viskositet), **relativitet**. Disse er **ikke pensum i
TFY4115 og skal ikke bygges inn i læreboka.** (Kvantefysikk opptrer kun som støtte i
termofysikken: energikvantisering av frihetsgrader og Plancks strålingslov — ikke som eget
atom-/kjernefysikk-tema.)

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensorens forventede metode. Formuleringene er
omskrevet; formlene er standard fysikknotasjon.

### Mekanikk (spm. 1–20 / 1–25)

**M1. Newton på skråplan med friksjon.** Dekomponér tyngden; kinetisk friksjon μmg cos θ
mot bevegelsen. Standardsvar a = g(sin θ ± μ cos θ). NB: en ytre kraft med oppadrettet
komponent reduserer normalkraften og dermed friksjonen (F_f = μ(mg − F sin θ)).

**M2. Arbeid, energi og effekt.** mgh = ½mv²(+½Iω²); W = ∫F·ds = areal under F(x); P = Fv.
Ranger fart/bevegelsesmengde/energi mellom legemer gitt samme kraftstøt eller samme arbeid
(F·t gir lik Δp; F·s gir lik ΔK).

**M3. Rullende legeme med energibevaring.** mgΔy = ½(1+c)mv² med c=2/5 (kompakt kule, K=7/10·mv²),
c=1/2 (massiv sylinder, K=¾mv²), c=2/3 (kuleskall). Fart i vilkårlig punkt via høydeforskjell;
snupunkt = samme høyde som start. Rangering av sluttfart nedover skråplan etter treghetsmoment.

**M4. Treghetsmoment og Steiners sats.** I = Σmᵢrᵢ² (punktmasser i trekant/kvadrat) eller
I = ∫r²dm (stang λ(x), kuleskall, plate); **I = I_CM + Md²** for akse utenfor massesenteret
(stang om endepunkt, kule om kontaktpunkt, fysisk pendel).

**M5. Dreieimpuls og rulling.** Total L = L_spinn + L_bane (L_bane = R×mV); alle bidrag samme
fortegn ved ren rulling. Bevaring ved fravær av ytre moment (aksekors der lodd trekkes inn:
Iω=konst). Overgang gliding→ren rulling: N2 translasjon (a=−μg) + N2 rotasjon (α=5μg/2R for kule),
sett V=rω; sluttfart V=5V₀/7 for kule.

**M6. Bevegelsesmengde og støt.** Impulsbevarelse Σmv=Σmv′; elastisk → v′=(M−m)/(M+m)v₀;
fullstendig uelastisk → felles fart og energitap ΔK; impuls fra tidsavhengig kraft Δp=∫F dt
(trekantpuls: a_max=F_max/m=4v/τ). Andel tapt energi = M/(m+M) ved uelastisk støt.

**M7. Svingninger.** ω₀=√(k/m), f=ω₀/2π, T=2π/ω₀. Seriekoblede/parallellkoblede fjærer.
**Dempet:** x=A₀e^(−γt)cos ωt, γ=b/2m; energi E∝e^(−2γt); **overkritisk demping**
(x≈x₀e^(−kt/b) når γ≫ω₀). **Q-faktor** Q=ω₀/2γ=(1/R-analogt). **Drevet på resonans:**
mekanisk energi E=mF₀²/2b². Fysisk/konisk pendel (se M8).

**M8. Pendler.** Fysisk pendel T=2π√(I_A/Mgd) (Steiner for I_A). Konisk pendel/svingkarusell:
S cos θ=mg og S sin θ=mv²/R, T=2π√(R/g tan θ). Fallende stang: energibevaring
ω=√(3g/L), spinnsats α=3g/2L, sentripetal- og baneakselerasjon i horisontalstilling.

**M9. Statikk.** ΣF=0 og ΣM=0 om et klokt valgt punkt (bjelke i hengsel med taustrekk;
stupebrett forankret i pillarer; plate holdt mot vegg av snor + friksjon; talje/trinsesystem
der F=½Mg).

**M10. Kinematikk fra gitt fartsfunksjon.** Deriver v(t)/ω(t) for akselerasjon (maks ofte i
t=0 for eksponentielle modeller); integrer for strekning/vinkel; snupunkt der v=0.

**M11. Krumning og normalkraft.** I toppunkt: mg−N=mv²/ρ med 1/ρ=\|y″\|; i bunnpunkt:
N−mg=mv²/ρ. Kombiner med energibevaring for farten.

**M12. Gravitasjon/baner og rakett.** GMm/r²=mv²/r=mω²r, v=2πr/T (omløpstid, geostasjonær).
Rakettligning u·\|dm/dt\|=m·dv/dt → m=m₀e^((v−v₀)/u).

**M13. Presesjon.** Gyroskop/snurrebass/sykkelhjul: Ω=τ/L=Mgr/I₀ω (spinnsats τ=dL/dt anvendt
på retningsendring av spinnvektoren).

### Termisk fysikk (spm. 21–40 / 26–50)

**T1. Ideell gasslov og molekyltall.** pV=nRT; N=pV/k_BT; stoffmengde n=pV/RT. Ofte
åpningsspørsmål i termohalvdelen.

**T2. Kinetisk gassteori.** ⟨E_k⟩=3/2·k_BT (uavhengig av masse → tyngre molekyler har lavere
v_rms); v_rms=√(3k_BT/m). Temperatur ∝ midlere kinetisk energi.

**T3. Ekvipartisjon og frihetsgrader.** Hver kvadratiske frihetsgrad bidrar ½k_BT.
U=f·RT/2 pr mol; C_V=fR/2; C_P=C_V+R; γ=C_P/C_V. Tell f (3 translasjon + rotasjon + 2×vibrasjon)
og gå baklengs fra oppgitt C_V. Kvante-«innfrysing»: rotasjons-/vibrasjonsmoder vekkes med
stigende T; C_V(T)-kurve for H₂ går 3/2→5/2→7/2 R.

**T4. Adiabatisk prosess.** pV^γ=konst, TV^(γ−1)=konst; adiabaten er brattere enn isotermen i
pV-diagram; ΔU=−W (Q=0).

**T5. Kretsprosess og virkningsgrad (signatursjanger).** Finn T i hvert hjørne via
adiabat-/isokor-/isobar-/isoterm-relasjoner. Klassifiser Q og W (fortegn) langs hvert trinn.
Virkningsgrad η=W_netto/Q_inn=1−Q_ut/Q_inn; Carnot η=1−T_k/T_v. Otto, Stirling, generelle
firkant-sykluser. W=omsluttet areal i pV-diagram. Sammenlign med Carnot-grensen.

**T6. Varmepumpe / kjøleskap.** Effektfaktor ε_V=\|Q_H/W\| (oppvarming), ε_K=\|Q_L/W\| (kjøling);
sammenheng ε_V=ε_K+1. Carnot: ε_V=T_v/(T_v−T_k). Praktisk oppsett med vannreservoarer og
kompressoreffekt (ε=CΔT/PΔt).

**T7. Entropi.** S er tilstandsfunksjon (ΔS uavhengig av vei). dS=dQ_rev/T;
ΔS=nC_V ln(T₂/T₁)+nR ln(V₂/V₁); isoterm ΔS=nR ln(V₂/V₁). Irreversibel prosess/varmeoverføring:
universets entropi øker; omgivelsene mottar/avgir ved ulik T. Fri ekspansjon: ΔS=nR ln(V₂/V₁).

**T8. Hovedsetningene som fortegnsanalyse.** ΔU=Q−W. Avgjør hvilke prosesser i en figur som er
tillatt etter 2. lov (varmepumpe/kjøleskap/varmekraftmaskin vs. umulige). Rangér ΔU, Q, W, S i
hjørnene.

**T9. Varmeledning (Fouriers lov).** j=κΔT/ℓ; effekt P=jA=ΔT/R med termisk motstand
R=Σ ℓ_j/(κ_jA) (sjikt i serie, f.eks. gips + glava). Stasjonær temperaturprofil: brattere
fall i dårlig leder. Ta med varmeovergangskoeffisienter h_i, h_u når oppgitt.

**T10. Varmestråling.** Stefan–Boltzmann j=σT⁴ (emissivitet e for grå legemer); total effekt
P=σeAT⁴. **Stasjonær platebalanse:** midtplate mellom to reservoarer →
T₂=((T₁⁴+T₃⁴)/2)^¼. Wiens forskyvningslov λ_max=b/T.

**T11. van der Waals og faseovergang.** p=nRT/(V−nb)−an²/V²; kritisk punkt p_c=a/27b²,
V_c=3b, T_c=8a/27Rb. Fasediagram i p–T: trippelpunkt (tre faser i likevekt), kritisk punkt
(enden av væske–gass-linjen), sublimasjon under p_trippel.

**T12. Clausius–Clapeyron / damptrykk.** p_t=p_k·exp[(l_f/R)(1/T_k − 1/T_t)] (konstant
fordampingsvarme, ideell gass). Bruk kokepunkt som referanse for å finne damptrykk i et annet
punkt (f.eks. trippelpunktet).

**T13. Termisk utvidelse.** ΔL=αLΔT (jernbaneskinner, byggverk); ΔV analogt.

**T14. Numerisk iterasjon.** Fikspunktiterasjon av en transcendent ligning (Plancks lov:
xₙ₊₁=5(1−e^(−xₙ)) med gitt startverdi), eller Euler-diskretisert forflytning
s₁=s₀+v₀Δt og feilestimat mot eksakt løsning. Ofte siste spørsmål i settet.

### Åpen-utlednings-sjangre (2004–2016 — samme fysikk, mer utledning)

**Å1. SHM/seismometer.** Sett opp differensiallikningen fra N2 (ẍ+2γẋ+ω₀²x=−ḧ), skriv den
dempede løsningen x=A₀e^(−γt)cos(ω′t+δ) med ω′=√(ω₀²−γ²), bestem A₀ og δ fra startbetingelser,
skissér resonanskurve og regn svingeamplitude fra Q og drivfrekvens.

**Å2. Full kretsprosess.** Tegn syklusen i pV-diagram, bestem γ og frihetsgrader, regn ut
arbeid pr trinn og pr syklus, virkningsgrad, og ΔS for hvert trinn + netto ΔS (=0 for gassen).

**Å3. Varmeledning i hus.** Total varmestrøm I gjennom vegg med varmeledningskoeffisient +
varmeovergangskoeffisienter inne/ute; temperatur på inner- og ytterflate ved stasjonære forhold.

---

## 4. Sensorens krav

Rettereglene avhenger av format.

### Flervalgs-æraen (2013, 2017–2020, gjeldende)

1. **1 poeng for riktig, 0 for feil eller blankt.** Ingen minuspoeng, ingen delpoeng for
   oppsett eller mellomregning. Kun det endelige bokstavsvaret teller.
2. **Alle spørsmål teller likt.**
3. **Presisjon er avgjørende:** alternativene ligger tett og er ofte konstruert rundt en
   typisk feil (glemt rotasjonsledd, feil γ, forbyttet C_V/C_P, feil fortegn). Regnekjeden må
   være rask og feilfri; behold nok siffer.
4. Løsningsforslaget viser **den avgjørende loven + få regnelinjer** — det er arbeidsformen
   kandidaten må beherske under tidspress.
5. Enkelte spørsmål er **rene konsept-/rangeringsspørsmål** (ranger T/S/ΔU i hjørnene, hvilken
   graf/figur er riktig, hvilken prosess er umulig) — her belønnes forståelse framfor regning.

### Utlednings-/hybridæraen (2004–2016)

- I de åpne oppgavene premierer sensuren **korrekt oppsett og metode** (frilegemediagram, riktig
  lov, symbolsk uttrykk, riktig fortegn/retning) selv om sluttallet glapp; **enheter og
  gjeldende siffer vektlegges**, og **fortegn/retning presiseres** (påpekt eksplisitt i flere
  fasitkommentarer).
- Løsningsforslagene fremhever gjennomgående **hvilken lov/teorem** som brukes (energibevaring,
  N2 for rotasjon/spinnsats, Steiners sats, 1./2. hovedsetning, at S er tilstandsfunksjon).
- Sensorkommentarer flagger **klassiske fallgruver** direkte: «all kinetisk energi ligger i
  ½Iω² for ren rotasjon — ikke legg til ½mv² i tillegg», og «konstant-akselerasjonslikning er
  helt galt når α ikke er konstant».

**Konsekvens for læreboka:** Tren begge modi. For eksamen (MC) må studenten komme til riktig
**tallsvar raskt og feilfritt**; for forståelse (og for eldre sett som øving) må hun kunne
sette opp den symbolske utledningen, navngi loven, og få fortegn/enheter riktig.

---

## 5. Typiske feil (observert i løsningsforslag / bygget inn i alternativene)

**Mekanikk:**

1. **Glemme rotasjonsenergien** for rullende legemer — bruke ½mv² i stedet for ½(1+c)mv²
   (7/10·mv² for kule, ¾mv² for sylinder). Den vanligste innebygde fella.
2. **Dobbelttelle kinetisk energi** i ren rotasjon — legge til ½mv² i tillegg til ½Iω² (eksplisitt
   flagget i fasit for fallende stang).
3. **Bruke konstant-akselerasjonslikning på ikke-konstant akselerasjon** (α varierer i pendel/
   fallende stang; a varierer på krum bane) — må bruke energibevaring eller integrasjon.
4. **Glemme Steiner-leddet** når treghetsmomentet skal om en akse utenfor massesenteret.
5. **Feil fortegn/retning** på dreieimpuls, friksjonskraft (gliding vs. rulling) eller
   akselerasjonskomponenter.
6. **Sette normalkraften lik mg** når en ytre kraft har vertikal komponent (N endres → friksjon
   endres).
7. **Feil integrasjonsgrenser** i ∫r²dm.

**Termofysikk:**

8. **Forbytte C_V og C_P**, eller bruke feil γ (enatomig 5/3 vs. toatomig 7/5) — velte hele
   adiabat-/kretsprosessregningen.
9. **Feil telling av frihetsgrader** (glemme at vibrasjon gir 2 kvadratiske ledd pr mode, eller
   at vibrasjon er «frosset ut» ved romtemperatur).
10. **Behandle isokor/isobar/adiabat om hverandre** — bruke feil (Q, W, ΔU)-relasjon for
    prosesstypen (W=0 for isokor; Q=0 for adiabat; ΔU=0 for isoterm ideell gass).
11. **Kelvin/enhetsslurv** — alltid kelvin i gasslov, TV^(γ−1), entropi og Clausius–Clapeyron.
12. **Fjerde potens glemt** i Stefan–Boltzmann (P∝T⁴, ikke T) og i platebalansen (midle T⁴, ikke T).
13. **Forveksle virkningsgrad og effektfaktor**, eller regne ε_V når ε_K var spurt (ε_V=ε_K+1).
14. **Glemme at S er en tilstandsfunksjon** — regne omvei når ΔS bare avhenger av start/slutt;
    eller glemme at universets entropi kan øke selv om gassens ΔS=0 over en syklus.
15. **Blande varmeledning (κ) og varmeovergang (h)**, eller summere termiske motstander feil i
    sjiktvegg.
16. **Avrundingsfeil** som lander på nabo-alternativet — behold nok siffer gjennom hele kjeden.

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut **Rottmann matematisk formelsamling + et fysikk-formelark** («Formler i emne
TFY4115 Fysikk», vedlagt oppgavesettet). Skillet nedenfor er mellom **hva som må kunne brukes
aktivt** (velges, kombineres, omformes under tidspress) og hva som bare hentes.

### Formelarket inneholder (utdrag, rekonstruert fra oppgaver/fasit)

- **Konstanter:** g, k_B, N_A, R, σ (Stefan–Boltzmann), G, Wien-konstant b (≈2898 µm·K).
- **Mekanikk:** a=dv/dt, s=v₀t+½at², v=v₀+at, v²−v₀²=2as, F=ma, p=mv, dp/dt=F, W=∫F·ds,
  K=½mv², W_tot=ΔK, F=−dU/dx, F_f≤μ_sF_⊥, α=dω/dt, v=ωr, K_rot=½Iω², τ=r×F, τ=Iα,
  L=Iω, J=Δp=∫F dt, F=GmM/r², treghetsmomenter for stang/kule/kuleskall/sylinder/plate,
  **Steiner I=I₀+Md²**.
- **Svingninger:** ẍ+ω₀²x=0, ω₀=√(k/m), T=2π/ω, f=1/T; dempet ẍ+2γẋ+ω₀²x=0,
  x=A₀e^(−γt)cos(ω′t+δ), ω′=√(ω₀²−γ²); tvungen x=x₀cos(ωt−δ); fysisk pendel ω₀=√(Mgd/I).
- **Termofysikk (kjernepensum her):** ΔU=Q−W, pV=nRT, W=∫p dV, C_V og C_P (enatomig 3/2R, 5/2R;
  toatomig 5/2R, 7/2R), C_P=C_V+R, γ=C_P/C_V, pV^γ=konst, TV^(γ−1)=konst, η=W/Q_H,
  η_Carnot=1−T_k/T_v, dS=dQ_rev/T, **ΔS=nC_V ln(T₂/T₁)+nR ln(V₂/V₁)** (og isobar-varianten med
  C_P), kinetisk teori ⟨E_k⟩=3/2 k_BT, v_rms=√(3k_BT/m), ekvipartisjon ½k_BT pr frihetsgrad,
  van der Waals (p+an²/V²)(V−nb)=nRT, Clausius–Clapeyron, Fouriers lov j=κΔT/ℓ,
  Stefan–Boltzmann j=σT⁴, Wien λ_max=b/T.

### Må beherskes aktivt (kjernen læreboka skal drille)

**Mekanikk:** N2 på skråplan med friksjon; energibevaring for rullende legeme (½(1+c)mv²);
treghetsmoment + **Steiner** + fysisk pendel; dreieimpuls L=L_spinn+L_bane med fortegn og
gliding→rulling; SHM (egenfrekvens, dempet amplitude, Q, overkritisk demping, resonans); støt
(elastisk/uelastisk, Δp=∫F dt); statikk/momentbalanse; krumningsradius + normalkraft; gravitasjon/
bane; terminalfart; kinematikk fra v(t)/ω(t).

**Termofysikk:** gasslov + molekyltall; kinetisk teori/v_rms; ekvipartisjon + frihetsgrader →
C_V, C_P, γ; adiabat- og kretsprosessregning + virkningsgrad/effektfaktor; entropiberegning
(rev./irrev.); hovedsetningene som fortegnsanalyse; varmeledning i sjikt (termisk motstand i
serie); varmestråling (σT⁴, platebalanse, Wien); van der Waals + kritisk punkt; Clausius–Clapeyron;
termisk utvidelse; fasediagram (trippel-/kritisk punkt).

### Hentes fra formelark (skal gjenkjennes, ikke pugges)

Alle naturkonstanter; treghetsmomenter for standardlegemer; van der Waals- og Clausius–Clapeyron-
formene; entropi-uttrykket for ideell gass; Stefan–Boltzmann og Wien.

### Skal IKKE bygges på

**Elektromagnetisme, bølger, optikk, fluidmekanikk, relativitet, atom-/kjernefysikk** — aldri i
pensum for TFY4115.

---

## 7. Prognose og prioritering

### Prognose for neste eksamen

4 timers skoleeksamen, hjelpemiddelkode C med formelark, **flervalg (siste dokumenterte form: 40
spm. A–F, 1 poeng riktig / 0 feil)** med **fast todeling**: **første halvdel mekanikk**, **andre
halvdel termisk fysikk**, tett plasserte svaralternativer, og gjerne et **numerisk
iterasjonsspørsmål til slutt**. Nesten sikkert innhold i hver halvdel:

- **Mekanikk:** Newton på skråplan med friksjon; energibevaring for rullende legeme (7/10- eller
  ¾-leddet); treghetsmoment + Steiner (+ fysisk pendel); dreieimpuls med fortegn (evt.
  gliding→rulling); svingninger (egenfrekvens, dempet amplitude, Q); støt (elastisk/uelastisk,
  Δp=∫F dt); pluss et utvalg fra {statikk, krumning/normalkraft, satellittbane, terminalfart,
  rakett, presesjon, konisk pendel}.
- **Termofysikk:** gasslov + molekyltall; kretsprosess + virkningsgrad/effektfaktor (Carnot/Otto/
  Stirling); entropi (rev./irrev.); ekvipartisjon + frihetsgrader → C_V/C_P/γ; adiabat; varmepumpe/
  kjøleskap; varmeledning i sjikt; **varmestråling (σT⁴, platebalanse)**; pluss et utvalg fra
  {van der Waals + kritisk punkt, Clausius–Clapeyron, fasediagram, kinetisk teori/v_rms, termisk
  utvidelse, C_V(T)-kurve for H₂}.

### Nivå 1 — må beherskes perfekt (bærer minst 60–70 % av settet)

1. **Newton på skråplan med friksjon** og **energibevaring for rullende legeme** (½(1+c)mv²).
2. **Treghetsmoment, Steiners sats og fysisk pendel.**
3. **Dreieimpuls med fortegn** og **støt** (elastisk/uelastisk, impuls).
4. **Svingninger** (egenfrekvens, dempet amplitude, Q, resonans).
5. **Kretsprosess + virkningsgrad/effektfaktor** (finn T i hjørnene, klassifiser Q/W, η, ε).
6. **Entropiberegning** (tilstandsfunksjon; nC_V lnT + nR lnV; rev./irrev.).
7. **Ekvipartisjon + frihetsgrader** → C_V, C_P, γ, og adiabatregning.
8. **Varmeledning i sjikt** (termisk motstand i serie) og **varmestråling** (σT⁴, platebalanse).

### Nivå 2 — bør sitte (avgjør karakter i øvre sjikt)

9. Kinematikk fra v(t)/ω(t); krumningsradius + normalkraft. 10. Statikk/momentbalanse.
11. Gliding→ren rulling; presesjon. 12. Satellittbane; terminalfart; rakett.
13. van der Waals + kritisk punkt; Clausius–Clapeyron; fasediagram. 14. Kinetisk teori/v_rms;
C_V(T) og «innfrysing» av frihetsgrader. 15. Numerisk iterasjon (Planck/Euler).

### Nivå 3 — kompakt beredskap

16. Konisk pendel; effekt P=Fv. 17. Termisk utvidelse; varmestrøm i strømmende medium; Wien.
18. Måle-/usikkerhetsregning (sporadisk). 19. Konveksjon (begrep).

**Konsekvens for læreboka:** Bygg to likeverdige hoveddeler — **Mekanikk** og **Termisk fysikk**
— med tung metodedrill på nivå 1-sjangrene og standardoppskrifter for nivå 2. Kretsprosessen
fortjener et eget, grundig kapittel (den er termofysikkens ryggrad og går igjen som en klynge
koblede spørsmål). Legg inn en **varmestrålings-modul** (unik mot TFY4125) og en kort **numerisk
modul** (iterasjon/Euler). Hver drilloppgave bør trene **rask, feilfri vei til tallsvar** (MC-modus)
i tillegg til den symbolske utledningen (for de eldre utledningssettene). **Gjenbruk
mekanikk-delen fra TFY4125-materialet, men skriv termofysikk-delen fra grunnen.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TFY4115/`. Arkivet har
tre delvis overlappende navnekonvensjoner (samme eksamen kan finnes i flere filer); etter
deduplisering ca. 25 unike sett 2004–2020.

**Lest fullstendig (løsningsforslag) — flervalgsæraen (normgivende):**
- H2020 kont. (`E/L_TFY4115_200811`; 40 spm. A–F; mekanikk 1–20, termofysikk 21–40)
- H2019 (`…_191216`) og H2019 kont. (`…_190807`; 40 spm. A–F)
- H2018 (`eksamen/losning_tfy4115_h2018`; 50 spm., felles TFY4104/TFY4115) og H2018 kont.
  (`Eks18augTFY4115(Los)`; 50 spm. A–E)
- H2017 (`Eks17des(Los)`; 50 spm. A–E; mekanikk 1–25, termisk fysikk 26–50; **hjelpemiddel/
  formelark bekreftet**)

**Lest grundig (løsningsforslag) — hybrid-/blandet æra:**
- H2016 (`…-13des2016`; hybrid: 24 flervalg + 5 åpne oppgaver)
- H2015 (`…-19des2015`; hybrid: 24 flervalg + 4 åpne oppgaver)
- H2013 (`…-18des2013`; rent flervalg, 50 spm.)
- H2011 (`…-17des2011`; hybrid: 8 flervalg + 4 åpne oppgaver)

**Lest for formatdokumentasjon (oppgavesett) — utledningsæraen:**
- H2004 (`E-TFY4115-03des2004`; 4 åpne oppgaver, deloppgaver «teller likt», bokmål; **hjelpemiddel-
  kode C og formelark-vedlegg bekreftet fra forsiden**)

**Skumlest / temaregistrert (oppgave + løsning):**
- 2005, 2006, 2007, 2008, 2009, 2010, 2012, 2014 (des + aug-varianter) — bekrefter stabil
  mekanikk + termofysikk-struktur og varierende MC/hybrid-andel.

**Maskinell verifisering:** Alle tekstuttrekk ble søkt for tema. **Elektromagnetisme: 0 treff**
i hele arkivet (bekrefter at EM aldri er pensum). Termofysikk: treff i praktisk talt alle sett.
Varmestråling (Stefan–Boltzmann/Wien/Planck): treff i de fleste sett. Bølger, optikk,
fluidmekanikk, relativitet: ingen reelle treff.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emneside for TFY4115 (scratchpad:
`fagbeskrivelse-tfy4115.md`) — angir mekanikk **og** termofysikk som pensum, kode C, 4 t,
for studieprogrammene MTELSYS/MTTK/MTNANO.

**Merknader om kildene:**
- Arkivet er tilnærmet komplett parvis (eksamen + løsning) fra 2011; enkelte eldre
  løsnings-PDF-er er skannet (delvis uten OCR) og er kun temaregistrert.
- Enkelte skannede oppgave-PDF-er (2006, 2008) ga ingen tekst ved uttrekk og er registrert via
  navnekonvensjon og tilhørende løsning.
- **Kildeforbehold (gjentatt):** arkivet stopper i 2020. Frekvenstallene og den «normgivende»
  formen (40 MC A–F) gjelder t.o.m. 2020; formen kan ha endret seg etterpå. Emnebeskrivelsen
  tyder på at mekanikk+termofysikk-strukturen består.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller
  veiledningsformuleringer er gjengitt ordrett. Formlene er standard fysikknotasjon og ikke
  opphavsrettslig beskyttet.

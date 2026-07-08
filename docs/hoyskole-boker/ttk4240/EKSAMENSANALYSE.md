# Eksamensanalyse: TTK4240 Industriell elektroteknikk (NTNU)

> Grunnlag for eksamensrettet lærebok. All oppgavetekst er omskrevet og gjengitt på norsk bokmål;
> engelsk fagterminologi beholdes der pensum og formelarket bruker det (phasor, duty-cycle, buck,
> MPPT, dot convention osv.). Emnet undervises på engelsk, men flere eldre sett (Kont 2016, Dec 2016)
> foreligger delvis på norsk — språket varierer, og læreboka bør derfor være tospråklig-bevisst på termer.

**Emnestatus (verifisert 2026-07-08 via NTNUs emneside):** AKTIVT. TTK4240 undervises ved
Institutt for teknisk kybernetikk (ITK), Trondheim. Neste oppsett vår 2027, ordinær og utsatt
eksamen vår 2027. Emneansvarlig: Maria Marta Molinas Cabrera. 7,5 studiepoeng, nivå II.
Undervisningsspråk: engelsk. Krav om 8 av 12 godkjente øvinger for eksamensadgang.

**Arkivets størrelse:** Lite. Fem komplette sett med løsningsforslag (Dec 2015, Kont 2016, Dec 2016,
Dec 2017, Kont 2017). Alle er tekstbaserte PDF-er (ingen skann/OCR nødvendig), og alle fem har
tilhørende sensorløsning med til dels svært detaljerte grading-kommentarer. Konklusjonene under er
derfor godt underbygd på oppgave- og sensornivå, men bygger på bare fem sett fra en kort periode
(2015–2017). Der jeg ekstrapolerer utover disse settene, er det markert eksplisitt.

---

## 1. Eksamensform og utvikling

### Form (gjeldende regime)
- **Skriftlig skoleeksamen, 4 timer**, teller 100 % av karakteren. Bokstavkarakter A–F.
- **Fire hovedoppgaver**, hver vektet **~25 %**. Hver oppgave har 3–5 deloppgaver (a–d/e).
- **Ingen flervalg.** Alt er regne-, utlednings-, skisse- og kortsvarsoppgaver.
- **Formelark (APPENDIX: FORMULAS) deles ut** og ligger bakerst i hvert sett. Formler skal
  *gjenkjennes og brukes*, ikke pugges. Se del 6 for det faste apparatet.
- **Hjelpemidler:** kalkulator forutsatt (tunge komplekse regninger, e-potenser, arctan). Formelarket
  dekker Laplace-par, maskinformler, trefase, kraftelektronikk-omsetningsforhold og mekanikk.

### Oppgavenes indre oppbygging
Hver hovedoppgave er bygget som en **stigende sekvens**: den starter gjerne med en kort kvalitativ del
("explain why…", "what kind of filter…", "mention one challenge…"), går videre til en **utledning**
("show that…", "derive an expression…") og ender i **numerisk beregning** og/eller **skisse**
(bølgeform, kretsdiagram, moment-turtallskurve). Delspørsmålene er ofte **frikoblet** via
scaffolding: "If you did not solve b), use C = 1 mF in c) and d)". Følgefeil straffes aldri (se del 4).

### Utviklingstrekk (kort periode, vær varsom)
- **Språk:** Dec 2015 og Dec 2017 er på engelsk; Kont 2016 og Dec 2016 finnes i norsk versjon;
  formelarket er dels på nynorsk/norsk i eldre sett. Etter hvert som emnet er engelskundervist,
  peker det mot **engelsk oppgavetekst** framover — læreboka bør speile engelsk terminologi.
- **Fornybar-innramming øker:** vindturbin + MPPT + PV-buck opptrer i 3 av 5 sett (Dec 2015, Dec 2016,
  Dec 2017) som "virkelighetsnær" innpakning rundt maskin- og kraftelektronikk-kjernen. Dette er trolig
  en emneansvarlig-signatur (fornybar energi) og bør vektlegges i læreboka.
- **Selverkjente uklare oppgaver:** Flere sett inneholder deloppgaver sensor selv omtaler som dårlig
  formulert eller trukket fra bedømmelsen (Dec 2017 4b; Kont 2017 3a/3b trukket). Dette signaliserer at
  eksamen av og til er hastig satt — studenten belønnes for å vise metode selv når svaret er tvetydig.

---

## 2. Temafrekvens-tabell

Score = antall av de 5 settene der temaet bærer minst én deloppgave. Vekt-% er grovt anslag av andel
av total poengsum over de fem settene.

| # | Tema | Sett-dekning | Gjenganger-score | Est. vekt | Kommentar |
|---|------|--------------|:---:|:---:|-----------|
| 1 | **AC stasjonæranalyse: fasorer, impedans, P/Q/S** | alle | **5/5** | ~22 % | Selve ryggraden. Finn Z, regn aktiv/reaktiv/tilsynelatende effekt, avgjør kapasitiv/induktiv. |
| 2 | **Elektriske maskiner (DC + asynkron + synkron)** | alle | **5/5** | ~22 % | DC-maskin (Ea=KΦω, T=KΦIa), asynkron moment-turtall/slip, synkrongenerator/poler. |
| 3 | **Kraftelektronikk (DC-DC, likeretter, inverter)** | alle | **5/5** | ~20 % | Buck/boost duty-cycle, diode-likeretter, inverter til nett; bølgeformer og ripple-design. |
| 4 | **Laplace / overføringsfunksjon / transientrespons** | 4/5 | **4/5** | ~12 % | Transferfunksjon fra krets, sprangrespons via Laplace, RC/RLC-ODE og steady-state via fasor. |
| 5 | **Trefasesystemer** | 3/5 (K16, D16, D17) | **3/5** | ~8 % | V_LL=√3·V_ph, S=√3·V_LL·I_L, per-fase-ekvivalent, reaktiv effekt til nett, kompensering. |
| 6 | **Elektromagnetisme / magnetisk krets** | 3/5 (K16, D17, K17) | **3/5** | ~7 % | Reluktans, luftspalter, flukstetthet, induktans L=N²/ℛ, gjensidig induktans + dot convention. |
| 7 | **Operasjonsforsterker / aktive filtre** | 2/5 (K16, D16) | **2/5** | ~5 % | Ideell op-amp, integrator, aktivt høypassfilter (knekkfrekvens, båndpassforsterkning, metning). |
| 8 | **Thevenin/Norton + maks effektoverføring** | 2/5 (K16, K17) | **2/5** | ~4 % | Z_th, V_th, Z_L = Z_th* for maksimal aktiv effekt til last. |
| 9 | **Passive filtre / frekvensrespons / resonans** | 2/5 (D16, K17) | 2/5 | (inngår i 1/7) | Filtertype-gjenkjenning (lav/høy/bånd), LC-resonans, minimér amplitude ved gitt frekvens. |
| 10 | **Transformator** | 2/5 (K16 magnetkrets, K17 jernkjerne) | 2/5 | ~3 % | Ideell trafo m/omsetningsforhold N, impedanstransformasjon R/N², effekt i last. |
| — | **Vindturbin / MPPT (innramming)** | 3/5 | — | — | Ikke eget tema, men gjennomgående kontekst rundt maskin + kraftelektronikk. |

**Hovedbudskap:** Tre temaer (AC-fasoranalyse, elektriske maskiner, kraftelektronikk) opptrer i
**hvert eneste sett** og utgjør til sammen rundt to tredeler av poengene. En kandidat som mestrer
disse tre pluss Laplace/transient og trefase, er trygt over bestått. Elektromagnetisme, op-amp,
Thevenin og trafo avgjør de øvre karakterene.

---

## 3. Oppgavetype-katalog

### A. AC-effekt fra tidsforløp/fasor (P, Q, S, kapasitiv/induktiv)
Typisk: les faseforskjell fra bølgeform (Δt/T·360°), skriv v(t), i(t), transformer til fasorer,
regn S = VI* = P + jQ. Avgjør kapasitiv (Q<0 / strøm forut) eller induktiv (Q>0 / strøm etter).
Finn Z_eq = V/I.
*Sett:* Dec 2015-1, Kont 2016-1, Dec 2016-1, Dec 2017-4, Kont 2017-1.

### B. Elektriske maskiner — DC-maskin
Magnetiseringskurve + metning (kvalitativt), ω i rad/s, utviklet moment T=Pshaft/ω, ankerstrøm
Ia=Pshaft/Ea, klemmespenning VT=Ea+RaIa, turtall fra proporsjonalitet Ea1/Ea2=n1/n2. Shunt/separat
magnetisering (skjemategning med Rf, Lf).
*Sett:* Dec 2015-4, Dec 2017-1, Kont 2017-2.

### C. Elektriske maskiner — asynkron (induksjon)
Moment-turtallskurve: marker synkronturtall ω_s, slip s=0/s=1, driftsområde, startmoment. Ingen
moment ved synkronturtall. Velg motor ut fra startmoment > lastmoment. Antall poler fra
ω_s = 2·(2πf)/p. Transient turtall v(t) ved lastendring (lineariser kurven → 1.-ordens ODE).
*Sett:* Dec 2015-3, Dec 2016-2.

### D. Elektriske maskiner — synkrongenerator / vindturbin / nettilkobling
Poler fra fast nettfrekvens og mek. turtall, MPPT-forklaring, virkningsgrad = produsert/tilgjengelig
(P_wind = k·v³), maks reaktiv effekt fra inverter Q=√(S²−P²).
*Sett:* Dec 2015-3, Dec 2016-2, Dec 2017-3.

### E. Kraftelektronikk — DC-DC omformer
No-load-turtall via Va=k·Vdc, gjennomsnittsspenning som areal under bølgeform, ON/OFF-tilstander med
egne kretsdiagram og differensiallikning for ia, buck: D=Vout/Vin, dimensjoner induktans fra tillatt
ripple ΔIL. Tegn spole-spenning/-strøm over én periode.
*Sett:* Dec 2015-4, Dec 2016-4 (PV/MPPT), Kont 2017-2.

### F. Kraftelektronikk — likeretter / inverter
Diode-likeretter med trekantspenning: vdc=|vac|, iac=Idc·sgn(vac); gjennomsnittseffekt fra
DC- eller AC-siden (RMS av trekant = Vp/√3). Inverter til trefasenett.
*Sett:* Kont 2017-4, Dec 2016-2, Dec 2017-3, Kont 2016-3.

### G. Laplace / transferfunksjon / transientrespons
Utled H(s)=V(s)/I(s) fra krets, finn sprangrespons via invers Laplace + delbrøkoppspalting,
steady-state respons ved å sette s=jω (fasor). 1.-ordens ODE for turtall/strøm med initialbetingelse.
*Sett:* Dec 2015-2, Dec 2015-4d, Dec 2016-2c, Kont 2017-2d, Dec 2017-4.

### H. Trefase
Advantages of three-phase (kvalitativt), V_LL=√3·V_ph (RMS), per-fase-ekvivalent, total effekt
×3 faser, kondensatorkompensering for Q=0, batteri-/motorstrøm fra effektbalanse og cosφ.
*Sett:* Kont 2016-3, Dec 2016-1, Dec 2017-3.

### I. Elektromagnetisme / magnetisk krets
Reluktans ℛ=l/(μA), serie/parallell-reluktans, luftspalte, flukstetthet B=φ/A, strøm fra NI=ℛφ,
induktans L=N²/ℛ. Gjensidig induktans M via superposisjon, dot convention (fluksretning avgjør, IKKE
definert strøm-/spenningsretning), fortegn på M-ledd.
*Sett:* Kont 2016-4, Dec 2017-2, Kont 2017-3 (jernkjerne/trafo).

### J. Operasjonsforsterker / aktivt filter
Ideell op-amp-egenskaper, virtuell jord (v+=v−), utled vout (integrator/summasjon), aktivt høypass
(Z1, Z2), knekkfrekvens ωc=1/(R1C), båndpassforsterkning R2/R1, minste Vcc for lineær drift = maks
forsterkning × inngangsamplitude.
*Sett:* Kont 2016-2, Dec 2016-3.

### K. Thevenin/Norton + maks effektoverføring
Z_th og V_th sett fra last, Z_L=Z_th* for maks aktiv effekt, P_max regnet med RMS.
*Sett:* Kont 2016-1, Kont 2017-1d.

### L. Passivt filter / resonans
Klassifiser filter (band-stop/pass) ut fra oppførsel ved lav/høy frekvens, LC-resonans ω=1/√(LC),
velg C som minimerer/maksimerer amplitude ved gitt frekvens.
*Sett:* Kont 2017-1, Dec 2016-3.

---

## 4. Sensorens krav

Sensorløsningene er usedvanlig eksplisitte om poenggiving. Nøkkelprinsipper:

- **Følgefeil straffes aldri.** Gjentatt eksplisitt i flere sett ("følgefeil is never punished";
  "students that found incorrect ... in 4a can still get full score if their derivation in 4b is
  correct"). Riktig **metode** teller mer enn riktig sluttall.
- **Resonnement må stemme selv om svaret er riktig.** Ved motorvalg: "If machine B was chosen for
  incorrect reason, this could potentially give 0 points." Riktig svar av feil grunn kan gi null.
- **Avlesning fra figur tolereres romslig.** ±0,1 MW / andre turtall gir full score så lenge
  resonnementet er riktig — men bruk det avleste tallet konsekvent videre.
- **Kraft med uklare oppgaver:** flere deloppgaver er omtalt som dårlig formulert eller trukket;
  sensor gir da lav vekt og er "relatively kind with points".
- **Skissekrav er reelle poeng:** kretsdiagram (ikke bare "boks"), bølgeformer med riktig form
  (spole-spenning MÅ gå negativ i off-periode), moment-turtallskurve med markerte punkter. "Students
  that only present the DC/DC-converter as a box will not get any points."

### Hva som skiller karakternivåene
- **Bestått (E–D):** behersker AC-effekt, DC-maskin-basisregning, buck duty-cycle, trefase-grunnrelasjoner.
- **Middels (C–B):** korrekt fasor-/RMS-håndtering, Laplace-sprangrespons med delbrøk, asynkron
  moment-turtall + transient, riktig √3/√2-bruk i trefase.
- **Topp (A):** gjensidig induktans + dot convention riktig begrunnet, maks effektoverføring med
  kompleks Z_th*, op-amp-utledninger, og feilfri enhets-/vinkelhåndtering (rad vs grad, ingen j i
  tidsdomenet).

---

## 5. Typiske feil (eksplisitt korrigert i sensorveiledningene)

1. **Peak vs RMS i effekt.** Bruker man peak-amplituder i fasorene, MÅ man dele på 2 i S=VI*.
   "Students that use peak values ... gets full score IF they divide by two. Otherwise point reduction."
2. **Fortegn på strømmens fasevinkel.** Induktiv last → strøm etter spenning → **negativ** vinkel.
   "Many students will do the mistake and use '+'."
3. **ω vs 2πf.** Når frekvens er oppgitt i Hz, skriv 2π·50, ikke bare ω. Gir poengtrekk.
4. **Poler vs polpar (faktor 2).** f_el=(p/2)·f_mek — å glemme ×2 gir poengtrekk. "Those that forgot
   to multiply with 2 get a small point reduction."
5. **√3/√2 i trefase.** Feil bruk av faktoren = "severe mistake". Å trekke S−P direkte i stedet for
   Q=√(S²−P²) = "very severe mistake".
6. **Grader vs radianer.** Å blande vinkel i grader inn i et rad/s-argument gir trekk. Sluttvinkel i
   tidsdomenet skal være i radianer.
7. **j i tidsdomenesvar.** Å la j (kompleks enhet) bli stående i et cos(...)-uttrykk gir stort trekk —
   "does not make sense to have a complex number in a time-domain expression".
8. **Dot convention fra feil premiss.** Prikken bestemmes av **fluksretning/viklingsretning**, ikke av
   definert strøm-/spenningsretning. En av de vanskeligste deloppgavene; mange svarte feil.
9. **Kondensator-kompensering feil.** Å sette ωL=1/(ωC) når L og C ikke er i parallell er feil; man må
   splitte total-Z i real/imaginærdel og nulle imaginærdelen.
10. **Effekt til klemmer ≠ akseleffekt.** For DC-maskin: P_terminal = Ea·Ia + tap; å anta P=Ea·Ia gir
    lite trekk, men er ikke helt korrekt.
11. **Gir i stedet for frekvensomformer** for variabel hastighet gir få poeng — riktig løsning er
    likeretter+inverter (frekvensomformer).
12. **"Boks" i stedet for kretsskjema** for omformer gir null poeng på skisse.

---

## 6. Formel- og notasjonsapparat

### Deles ut på formelarket (skal gjenkjennes og brukes, ikke pugges)
- **Spole/kondensator:** v_L = L·di/dt, i_C = C·dv/dt, X_L = jωL, X_C = 1/(jωC).
- **Fasor / kompleks effekt:** X·cos(ωt+θ) ↔ X·e^{jθ}; S = V·I* = P + jQ; P = I²_RMS·R; I_peak = √2·I_RMS.
- **Elektromagnetisme:** N·dφ/dt = e; NI = ℛφ; ℛ = l/(μ_r·μ_0·A); φ = BA; L = N²/ℛ; μ_0 = 4π·10⁻⁷.
  Serie: ℛ_serie = ℛ1+ℛ2+…; parallell: 1/ℛ_par = 1/ℛ1+1/ℛ2+…. λ = Nφ; M = N1φ1/i2 (superposisjon).
- **Trefase:** V_LL = √3·V_ph; S = √3·V_LL·I_L = 3·V_ph·I_L; S = √(P²+Q²).
- **Elektriske maskiner:** f_el = (p/2)·f_mek. DC: E_A = KΦω (=K_m·ω), T = KΦ·I_a. Asynkron:
  ω_mek = (1−s)·ω_s.
- **Kraftelektronikk:** Buck D = V_out/V_in; Boost V_out/V_in = 1/(1−D). Inverter enkelfase:
  m = √2·V_ac/V_dc; trefase m = 2√2·V_LL/(√3·V_dc).
- **Mekanikk:** P = Tω; P = Fv; v = rω; E_k = ½mv²; T_mot − T_load = J·dω/dt.
- **Laplace-par:** konstant K↔K·F(s); sprang u(t)↔1/s; e^{−at}↔1/(s+a); s-shift e^{−at}f(t)↔F(s+a);
  sin ωt↔ω/(s²+ω²); cos ωt↔s/(s²+ω²); dempet sin/cos med (s+a).
- **Op-amp (i noen sett):** i_c=C·dv_c/dt; v_c=(1/C)∫i_c dt; V_c(s)=(1/C)·(1/s)·I(s).

### Må beherskes aktivt (kjerneverktøyene)
- **Fasoranalyse fram og tilbake:** tidsforløp → fasor → S=VI* → tolke kapasitiv/induktiv → tilbake til
  i(t) i tidsdomenet (riktig amplitude, riktig fortegn, radianer, ingen j).
- **Delbrøkoppspalting + invers Laplace** for sprangrespons på 1.- og 2.-ordens kretser.
- **Kompleks aritmetikk** (polar↔rektangulær, e^{jθ}, arctan, konjugat) på kalkulator.
- **Reluktansnettverk** (serie/parallell, luftspalte-dominans) og strøm-/fluksdeling.
- **Effektbalanse gjennom kjeden** batteri → inverter → motor → last (tapfri), inkl. cosφ og √3.
- **Moment-turtallslinearisering** rundt driftspunkt → 1.-ordens ODE for transient.

### Skal IKKE overinvesteres (til tross for emnebeskrivelsen)
- **Digital motorstyring / kontrollerdesign** nevnes i læringsutbyttet (labdel), men opptrer **ikke**
  som eksamensoppgave i noe av de fem settene. Bygg lærebok-dybde her lavt; nevn konseptuelt.
- **Tung RLC-transient (2. orden med demping)** forekommer, men sjeldnere enn 1.-ordens; prioriter
  deretter.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer hvert sett)
1. **AC stasjonæranalyse: fasorer, impedans, P/Q/S, kapasitiv/induktiv.** Med RMS/peak-disiplin.
2. **Elektriske maskiner:** DC-maskin (Ea, T, VT, turtall), asynkron moment-turtall/slip/poler,
   synkron/nettilkobling.
3. **Kraftelektronikk:** buck/boost duty-cycle, ON/OFF-ODE for ia, bølgeform-skisser, ripple-dimensjonering,
   diode-likeretter, inverter til nett.

### Nivå 2 — må kunne (avgjør B mot C)
4. **Laplace/transferfunksjon/transientrespons** (sprangrespons + steady-state via s=jω).
5. **Trefase** (√3/√2-disiplin, per-fase-ekvivalent, effektbalanse, kompensering).
6. **Elektromagnetisme/magnetisk krets** (reluktans, luftspalte, induktans; gjensidig induktans krever ekstra).

### Nivå 3 — bør kjenne til (avgjør topp / lavfrekvent)
7. **Operasjonsforsterker / aktivt filter** (virtuell jord, høypass, metning/Vcc).
8. **Thevenin + maks effektoverføring** (Z_L=Z_th*).
9. **Passivt filter/resonans** og **transformator** (impedanstransformasjon R/N²).

### Prognose for neste eksamen (vår 2027 — ekstrapolert fra fem sett)
Forvent fire oppgaver som til sammen dekker **AC-effekt, en maskinoppgave, en kraftelektronikk-oppgave og
en fjerde som roterer** mellom Laplace/transient, trefase, elektromagnetisme eller op-amp. Vindturbin/PV/MPPT
som innramming er sannsynlig i minst én oppgave. Regn med minst én "show that…"-utledning og minst én
bølgeform-/kretsskisse med reelle poeng. Sensorlinjen (følgefeil tilgis, resonnement > sluttall) er stabil.

*Forbehold:* Fem sett fra 2015–2017 er et tynt grunnlag for en aktiv 2027-eksamen. Emneansvarlig og
lærebokgrunnlag kan ha endret seg. Verifiser mot ferske sett dersom de blir tilgjengelige, og vær
særlig oppmerksom på om **kontroll/reguleringsdelen** (nevnt i læringsutbyttet, fraværende i arkivet)
løftes inn i skriftlig eksamen framover.

---

## 8. Anbefalt arketype for læreboka

**Arketype: "Verktøykasse-drillbok med utledningsspor"** — samme grunnform som ingeniør-realfagene
(jf. fys1120), men strammere sentrert rundt de tre kjernetemaene.

- **Struktur:** Bygg boka rundt de tre bærebjelkene (AC-fasoranalyse & effekt · elektriske maskiner ·
  kraftelektronikk), med trefase, Laplace/transient, elektromagnetisme, op-amp og Thevenin som støtte­kapitler.
- **Hvert kapittel:** kort teori → utledet standardeksempel ("show that"-typen, siden eksamen krever
  utledning, ikke bare tallsvar) → gjennomregnet eksamensnær oppgave → drilloppgaver med økende vanskegrad.
- **Formelark-refleks:** siden formelarket deles ut, skal boka trene *anvendelse og gjenkjenning*, ikke
  pugging. Ha formelarket gjengitt og marker hvilke formler som er "utdelt" vs "må-kunne-aktivt".
- **Fallgruve-bokser** knyttet direkte til del 5 (peak/RMS, fortegn på strømvinkel, √3/√2, poler×2,
  rad vs grad, ingen j i tidsdomenet, dot convention).
- **Skisseferdighet** som eget spor: kretsdiagram for ON/OFF-tilstander, bølgeformer (med negativ
  off-spenning), moment-turtallskurver med markerte punkter — dette gir reelle poeng.
- **Fornybar rød tråd:** bruk vindturbin/PV/MPPT som gjennomgående anvendelseskontekst, slik settene gjør.

Minimumskrav per fag (quiz ≥500, flashcards ≥500, ≥4 prøver per tema, dekkende studieguide) gjelder;
temainndelingen i del 2 gir en naturlig fordeling: tyngst innhold på nivå 1-temaene.

---

## Kildeliste

Eksamensarkiv (NTNU TTK4240), lest i sin helhet med løsningsforslag:
- **Dec 2015** — problems + solutions (4 oppg.: AC-effekt · RC-transferfunksjon/Laplace · asynkron+vind ·
  DC-motor m/DC-DC-omformer).
- **Kont 2016** — problems + solution (4 oppg.: Thevenin/maks effekt · op-amp-integrator · trefase
  motordrift · elektromagnetisme/magnetisk krets).
- **Dec 2016** — problems + solution (4 oppg.: trefase+kompensering · skiheis asynkronmotor+transient ·
  op-amp høypassfilter · PV-buck/MPPT).
- **Dec 2017** — problems + solutions (4 oppg.: DC-maskin · magnetisk krets/gjensidig induktans+dot
  convention · vindturbin+trefase-inverter · fasortransform RLC).
- **Kont 2017** — problems + solutions (4 oppg.: RLC-filter/resonans+maks effekt · DC-motor m/DC-DC ·
  jernkjerne/trafo · diode-likeretter m/trekantspenning).

Fagbeskrivelse: NTNUs emneside TTK4240 (omskrevet sammendrag), verifisert 2026-07-08.
Forbildestruktur: `docs/hoyskole-boker/fys1120/EKSAMENSANALYSE.md`.

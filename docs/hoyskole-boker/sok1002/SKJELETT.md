# Bokskjelett: SOK1002 Mikroøkonomi — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (20 oppgavesett V2010–V2024, 9 sensorveiledninger
> H2017–H2022, 2 fullstendige løsningsforslag H2023 + V2024). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Alle mønstereksempler i
> skjelettet er omskrivninger; forfatteren skal variere dem videre (egne tall,
> egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1002` |
| Tittel | **SOK1002 Mikroøkonomi** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (algebra-/kalkulusbasert modellfag med fast, todelt oppgavemal) |
| Antall kapitler | **29** (1 eksamenskart + 3 matteverktøy + 9 konsument + 10 produsent + 2 anvendelser + 4 eksamenstrening) |
| Estimert totaltid | **2 095 min ≈ 35 timer** |
| Quiz totalt | **542** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** SOK1002-eksamen har fulgt samme mal i femten år: to
jevnstore teorioppgaver som teller likt (50/50), der **oppgave 1 alltid er
konsumentteori** (nyttemaksimering) og **oppgave 2 alltid er produsentteori**
(kostnad og tilbud). Enkelte år legges det en kort begrepsoppgave foran, og
vektingen dreies mot 20/40/40. Denne boka er bygget som nettopp det: **to
symmetriske søyler** — en konsumentsøyle og en produsentsøyle — som hviler på et
felles **matematisk verktøykapittel** (derivasjon, Lagrange/tangering,
elastisitet) i bunn, med to anvendelseskapitler (arbeidstilbud, intertemporalt
valg) på toppen. Den driller de fem ferdighetene som avgjør karakteren:
konsumentens nyttemaks med utledning av etterspørselsfunksjoner fra Cobb-Douglas,
bedriftens kostnadsminimering og hele kostnadskurvefamilien MK/TGK/VGK/FGK,
profittmaks og tilbud med **sunk-cost-nyansen** i nedleggingsspørsmålet
(toppkarakter-differensiatoren som spørres nesten hvert år), grafisk *og*
numerisk dekomponering av substitusjons- og inntektseffekt (med Giffen som
spesialtilfelle), og skalautbytte lest av produkt-/kostnadsfunksjonen. SOK1002 er
et **algebra-/kalkulusfag** der matematikken faktisk teller — men Lagrange er
aldri påkrevd, så boka viser **begge veier parallelt** (Lagrange og ren grafisk
tangering), og øver studenten i sensorens jernregel: alle tall skal tolkes
verbalt, og andreordensbetingelser skal sjekkes.

**Kritisk avgrensningsregel (gjelder HELE boka):** SOK1002 er «motstykket» til
UiOs ECON1210, men i praksis nesten motsatt i metode og innhold. **Et grep over
hele SOK1002-arkivet 2010–2024 gir null treff** på monopol, markedsmakt,
markedslikevekt (tilbud = etterspørsel som kryss), stykkskatt/-subsidie med
overveltning, konsument-/produsent-/samfunnsøkonomisk overskudd og dødvektstap,
oligopol/spillteori/Nash, eksterne virkninger, kollektive goder, markedssvikt og
klima-/karbonprising. **Disse temaene skal IKKE bygges ut i boka.** De nevnes kun
i én kort, avgrensende «bør kjenne til»-merknad i Del 0 (kap. 0.1): at
markeds-, monopol-, spill- og velferdsanalyse hører til et senere/annet emne
(f.eks. ECON1210 / SOK1005). Alt annet innhold er konsument- og produsentteori.

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Konsument:** goder $x_1, x_2$, priser $p_1, p_2$, inntekt $m$; nyttefunksjon
  $U(x_1,x_2)$, marginalnytter $U_1 = \partial U/\partial x_1$, $U_2$; **marginal
  substitusjonsbrøk** skrives **MSB** $= U_1/U_2 = |{-}\,\text{helning IK}|$
  (aldri «MRS/MSR» som primærterm — kan nevnes i parentes én gang); budsjettlinje
  $m = p_1 x_1 + p_2 x_2$ med helning $-p_1/p_2$; Lagrange-funksjon $\mathcal{L}$,
  multiplikator $\lambda$. Tangeringsbetingelsen skrives **MSB $= p_1/p_2$**.
- **Produsent:** produktfunksjon $y = f(L,K)$ ($L$ arbeidskraft, $K$ realkapital);
  faktorpriser $w$ (arbeid) og $q$ (kapital); marginalprodukt $\text{MP}_L,
  \text{MP}_K$, gjennomsnittsprodukt $\text{GP}_L, \text{GP}_K$; **teknisk
  substitusjonsbrøk** skrives **TSB** $= \text{MP}_L/\text{MP}_K =
  |{-}\,\text{helning isokvant}|$; tangeringsbetingelsen **TSB $= w/q$**.
- **Kostnad:** kostnadsfunksjon $C(y)$; marginalkostnad **MK** $= C'(y)$; totale/
  variable/faste gjennomsnittskostnader **TGK** $= C/y$, **VGK** $= C_v/y$,
  **FGK** $= F/y$; faste kostnader $F$, delt i **driftsavhengige $F^D$** (spares
  ved nedlegging) og **driftsuavhengige/sunk $F^S$** (påløper uansett);
  dekningsbidrag **DB**.
- **Cobb-Douglas** er signaturfunksjonen på begge sider: $U = x_1^{a}\,
  x_2^{1-a}$ og $y = A\,L^{\alpha} K^{\beta}$. Parametertolkning forventes
  ($a$ = budsjettandel på gode 1; $\alpha+\beta$ = skalautbytte).

**Kritisk metoderegel (gjelder HELE boka):** Sensor honorerer korrekt matematikk,
men understreker gjentatte ganger at **Lagrange ikke er påkrevd** — «det er et
like godt svar å gå rett på figuren». Derfor skal hver optimeringsoppgave i boka
løses **begge veier, side om side**: (i) Lagrange-oppsett med
førsteordensbetingelser (FOC) → tangeringsbetingelse + budsjett/isokost → løsning;
og (ii) ren grafisk tangering (indifferenskurve/budsjettlinje, isokvant/isokost)
der tilpasningen forklares verbalt. Tre faste sensorkrav gjelder overalt:
**(a) figur OG forklaring OG regning** der relevant (figur uten forklaring, eller
regning uten tolkning, er halvt svar); **(b) alle tall tolkes verbalt** —
elastisiteter, parametere ($a$, $\alpha+\beta$), fortegn på deriverte og
skalautbytte oversettes til økonomisk innhold; **(c) andreordensbetingelsen
sjekkes** ved maksimering/minimering ($\pi'' < 0$; min TGK der MK skjærer). Svar
**poengtert** — kort og presist på det det spørres om.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): matteverktøyet i bunn,
deretter de to søylene, så anvendelsene, til slutt eksamenstreningen. Frekvensen
styrer *omfanget* — de to teoriapparatene er ~100 %-gjengangere og får hver sin
fulle del med drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn den todelte malen og avgrenser mot ECON1210-stoffet. |
| 1 | Matematisk verktøykasse | 3 | Derivasjon/Lagrange/elastisitet forutsettes aktivt i hver eneste oppgave (formelsamling tillatt, men metoden må sitte). SOK1002 ligger et klart hakk over ECON1210 matematisk → eget fundament, ikke bare et vedlegg. |
| 2 | Konsumentsøylen: nytte, etterspørsel og prisendringer | 9 | Oppgave 1 = konsumentteori i **hvert** sett (~50 % av eksamen). Nyttemaks + etterspørsel ~100 %, SE/IE ~85 %, elastisiteter ~55 % → nivå 1 «perfekt» → 8 teorikapitler + drillkapittel. |
| 3 | Produsentsøylen: produksjon, kostnad og tilbud | 10 | Oppgave 2 = produsentteori i **hvert** sett (~50 %). Kostnadskurvefamilien + profittmaks ~100 %, skalautbytte ~90 %, nedleggingsbetingelsen ~85 % (kronspørsmålet) → nivå 1 «perfekt» → 9 teorikapitler + drillkapittel. |
| 4 | Anvendelser: arbeidstilbud og intertemporalt valg | 2 | Samme apparat (Cobb-Douglas nyttemaks) i ny innpakning; ~15 % frekvens hver, roterer inn som hele halvdeler når de kommer → nivå 3 «bør kjenne godt» → 2 kompakte kapitler. |
| 5 | Eksamenstrening | 4 | Begrepsdrill (sjanger A, ~12–15 gjengangere) + 3 komplette øvingseksamener som speiler malene (2 × 50/50 + 1 × 20/40/40). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de to
   drillkapitlene (2.9 konsumentoppgaven, 3.10 produsentoppgaven) inne i sine
   egne søyler, fordi hele eksamen ER disse to sjangrene og de må drilles
   umiddelbart etter teorien. Del 5 beholder begrepsdrillen (sjanger A) og de tre
   øvingseksamenene.
2. DNA-en har «Del 1..N temadeler» generisk. Her er strukturen bevisst
   **symmetrisk todelt** (konsumentsøyle vs. produsentsøyle) med et felles
   matteverktøy i bunn — dette speiler den todelte eksamensmalen direkte og er
   bokas viktigste designgrep (jf. analysens §7).
3. Del 1 (matteverktøy) er strengt tatt forkunnskap, ikke et «tema» som testes
   isolert, men får egen del fordi SOK1002 er markert mer matematisk enn
   nabofagene og fordi Lagrange/elastisitet-metoden er en selvstendig
   ferdighet sensor forventer. Prøvene her er metode-/verktøyprøver.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsforklaringer, **B** nyttefunksjon/indifferenskurve/MSB, **C**
nyttemaks + etterspørselsfunksjoner, **D** substitusjons-/inntektseffekt, **E**
elastisiteter, **F** arbeidstilbud, **G** intertemporalt valg, **H**
produktfunksjon/skalautbytte, **I** isokvant/TSB/kostnadsminimering, **J**
kostnadskurvefamilien MK/TGK/VGK/FGK, **K** profittmaks/tilbud/nedlegging, **L**
kort sikt vs. lang sikt. Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SOK1002

- **id:** `sok1002-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste todelte malen (konsument + produsent), temafrekvensene, sjangerkatalogen A–L og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 20 sett + 9 sensorveiledninger + 2 løsningsforslag. Skal gjengi: (i) **formen**: 4 timers skriftlig skoleeksamen (fra ~2016 digital i Inspera; håndtegnede figurer lastes opp, 30 min ekstra), karakter A–F, 7,5 studiepoeng; **hjelpemidler = kode C**: matematisk formelsamling (Sydsæter, Strøm & Berck) + godkjent kalkulator (under korona 2020–2022 var alle hjelpemidler tillatt, men da teller *analysen*, ikke gjengivelse); (ii) **den faste malen i 15 år**: to jevnstore oppgaver 50/50 — oppgave 1 konsumentteori, oppgave 2 produsentteori; treoppgavevarianten (V2011/V2015/V2016/V2024) legger en kort begrepsoppgave foran og dreier vektingen mot 20/40/40; sjeldne avvik (V2021: 40/60); (iii) **temafrekvens-tabellene** (konsument- og produsentspor hver for seg, fra analysen §2A/§2B): konsument — nyttemaks/tangering ~100 %, indifferenskurve/MSB ~100 %, etterspørselsfunksjoner ~90 %, SE/IE + Giffen ~85 %, nyttefunksjonens forutsetninger ~70 %, normale/mindreverdige goder ~65 %, elastisiteter ~55 % (stigende), spesialtilfeller (perfekte substitutter/komplementer) ~40 %, Slutsky/Hicks ~30 %, arbeidstilbud ~15 %, intertemporalt valg ~15 %; produsent — MK/TGK/VGK/FGK ~100 %, profittmaks/tilbud ~100 %, skalautbytte ~90 %, nedlegging/sunk cost ~85 %, produktfunksjon MP/GP ~70 %, isokvant/TSB ~70 %, kostnadsminimering ~65 %, kort/lang sikt ~45 %, faktorpris-effekter ~40 %; (iv) at oppgavene alltid pakkes i **aktualitet** (strømpriser, mat-/vinelastisiteter fra SSB, borgerlønn, sparing) men at modellen alltid er den samme, oftest bygget på **Cobb-Douglas**; (v) **sensorens metaregler**: figur + forklaring + regning er én leveranse; Lagrange er valgfritt (ren grafisk tangering gir full uttelling); alle tall tolkes verbalt; andreordensbetingelser sjekkes; definisjonene må sitte (de forutsettes ikke kjent); svar poengtert; (vi) **karakterskillene** (fra analysen §4): bunn (E–D) = riktig oppsett + tangeringsbetingelse + riktige kurver + hovedkonklusjon; midt (C) = komplett løsning med utregnede etterspørsels-/faktoretterspørselsfunksjoner, korrekt SE/IE-dekomponering, korrekt kostnadskurvefamilie, riktig nedleggingskonklusjon *uten* sunk-cost-finessen; topp (A/B) = **sunk-cost-nyansen**, **eksplisitt numerisk SE/IE via kompensert inntekt** (Slutsky vs. Hicks), ser ubestemte resultater, kobler **skalautbytte til kostnadskrumning**, sjekker SOC, drøfter spesialtilfeller (Giffen, hjørneløsninger).
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk plassering: konsumentoppgaven bygges av B → C → D/E (+ F eller G som innpakning), produsentoppgaven av H/I → J → K (+ L), begrepsoppgaven (når den kommer) av A. **Prognose for neste eksamen**: overveldende sannsynlig to jevnstore hoveddeler (evt. begrepsoppgave foran, 20/40/40) — konsumentoppgave: gitt nyttefunksjon (mest sannsynlig Cobb-Douglas) → etterspørselsfunksjoner (Lagrange eller tangering) → elastisiteter og/eller SE/IE ved en prisendring → tolkning; produsentoppgave: gitt produkt-/kostnadsfunksjon → marginal-/gjennomsnittskostnader + skalautbytte → profittmaks og tilbud → nedleggingsbetingelse med sunk-cost-drøfting. Avslutt med **avgrensningen**: hva som IKKE er pensum (den korte «bør kjenne til»-merknaden om marked/monopol/spill/velferd/klima, med henvisning til at det hører til et annet emne), og **leseplanen**: Del 1 er verktøy man må ha klart; Del 2 og 3 er «må perfekt» og utgjør hele eksamen; Del 4 «bør kjenne»; Del 5 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 50/50-malen og 240 minutter — sett opp tidsbudsjett for konsument- og produsentoppgaven» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; pugge ECON1210-stoff (monopol/marked/velferd) som ikke er i SOK1002-pensum; tro at Lagrange er obligatorisk (det er det ikke — men tilpasningen må forklares uansett metode).
- **Quiz: 12 · Flashcards: 10** (eksamensform, frekvenser, sjangerkatalog, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Matematisk verktøykasse *(prioritet: forkunnskap — må sitte)*

> **Formelsamling-skille:** Sydsæter/Strøm/Berck inneholder derivasjonsregler,
> Lagrange-oppskriften, elastisitetsdefinisjonen og standard­deriverte — det som
> står der, trenger studenten ikke pugge, men **må kunne bruke**. Hvert kapittel
> i Del 1 skal derfor eksplisitt merke: «dette står i formelsamlingen (slå opp)»
> vs. «dette må du kunne sette opp og tolke selv». Selve *anvendelsen* (rett opp
> Lagrange for et konkret nyttemaks-problem, tolke en elastisitet) er aldri i
> formelsamlingen og er det eksamen faktisk tester.

#### Kapittel 1.1: Derivasjon, partiell derivasjon og Cobb-Douglas

- **id:** `sok1002-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (verktøy)
- **description:** Derivasjonsapparatet mikroøkonomien hviler på: potensregelen, partiell og implisitt derivasjon, totaldifferensiering — med Cobb-Douglas som gjennomgangseksempel.
- **Eksamensbelegg:** Ikke et eget eksamenstema, men **forutsatt i hver eneste oppgave**: marginalnytter/marginalprodukter er partielle deriverte, MSB og TSB fås ved implisitt derivasjon/totaldifferensiering av en nivåkurve, MK er den deriverte av $C(y)$. Fasitene regner disse uten kommentar — studenten må kunne det flytende. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Potensregelen $\frac{d}{dx}x^n = n x^{n-1}$ og kjerneregel (formelsamling — slå opp); **partiell derivasjon** $\partial f/\partial x_i$ (de andre variablene holdes fast) — kobles direkte til marginalnytte $U_i$ og marginalprodukt $\text{MP}_i$; deriverte av **Cobb-Douglas** $f = A x_1^{a} x_2^{b}$: $\partial f/\partial x_1 = aA x_1^{a-1}x_2^{b} = a f/x_1$ (det siste, «elastisitets-formen», brukes konstant i faget og skal drilles). **Implisitt derivasjon / totaldifferensiering** av en nivåkurve: langs $U(x_1,x_2)=\bar U$ er $U_1\,dx_1 + U_2\,dx_2 = 0$, så helningen $dx_2/dx_1 = -U_1/U_2$ — dette ER MSB (og analogt TSB for isokvanten). Andrederiverte og fortegn (konkav/konveks) som forberedelse til SOC. Merk hva formelsamlingen dekker (derivasjonsreglene) vs. hva studenten selv må sette opp (den økonomiske tolkningen av hva den deriverte betyr).
- **Oppgavesjangre:** Innøvingsoppgaver (ikke egen eksamenssjanger, men byggekloss for B/C/H/I/J). Mønstereksempel: «Deriver $f(x_1,x_2)=4x_1^{0{,}3}x_2^{0{,}7}$ partielt med hensyn på begge goder, og skriv $\partial f/\partial x_1$ på formen $a\,f/x_1$.»
- **Typiske feil:** Behandle den «andre» variabelen som variabel ved partiell derivasjon; slurve med eksponenten $a-1$; ikke se at helningen på en nivåkurve er forholdet mellom de partielle deriverte (grunnlaget for både MSB og TSB).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.2: Optimering: Lagrange, tangering og andreordensbetingelser

- **id:** `sok1002-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1002-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Optimering med bibetingelse — Lagrange-metoden og den ekvivalente tangeringsbetingelsen — pluss når og hvordan man sjekker andreordensbetingelsen. Motoren i både konsument- og produsentsøylen.
- **Eksamensbelegg:** Selve metoden bak ~100 % av oppgavene: nyttemaks (MSB $= p_1/p_2$) og kostnadsminimering (TSB $= w/q$) er samme Lagrange-problem, og profittmaks er fri optimering ($p = $ MK). Sensor: Lagrange er valgfritt, men den ekvivalente tangeringen må forklares, og **andreordensbetingelsen bør nevnes** ved maksimering/minimering. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** **Fri optimering:** FOC $f'=0$, SOC $f''<0$ (maks) / $f''>0$ (min) — brukes i profittmaks og min TGK. **Optimering med bibetingelse (Lagrange):** for $\max g(x_1,x_2)$ gitt $h(x_1,x_2)=c$, sett $\mathcal{L} = g - \lambda(h-c)$, FOC $\partial\mathcal{L}/\partial x_1 = 0$, $\partial\mathcal{L}/\partial x_2 = 0$, $\partial\mathcal{L}/\partial\lambda = 0$; deling av de to første FOC-ene eliminerer $\lambda$ og gir **tangeringsbetingelsen** $g_1/g_2 = h_1/h_2$ (for nyttemaks: $U_1/U_2 = p_1/p_2$). Tolkning av $\lambda$ = skyggepris (marginalnytte av budsjettet / marginalkostnad av produksjonskravet). **Den grafiske ekvivalenten:** tangering mellom nivåkurve og rett linje gir samme betingelse — vis at Lagrange og tangering er to veier til samme svar. SOC ved bibetingelse nevnes kvalitativt (konvekse preferanser/isokvanter sikrer indre maksimum) — full randet Hesse-matrise er utenfor pensum, men *konklusjonen* (at tangeringspunktet er et maksimum når kurvene har riktig krumning) skal forklares. Merk: Lagrange-oppskriften står i formelsamlingen; det å sette den opp for et konkret problem og tolke $\lambda$ gjør studenten selv.
- **Oppgavesjangre:** Byggekloss for C/I. Mønstereksempel: «Maksimer $g(x_1,x_2)=x_1 x_2$ gitt $2x_1 + 5x_2 = 40$ med Lagrange, og vis at du får samme svar ved å bruke tangeringsbetingelsen direkte.»
- **Typiske feil:** Bruke Lagrange «for sikkerhets skyld» der tangeringsbetingelsen holder — og motsatt, hoppe til svaret uten å forklare tilpasningen; glemme budsjett-/bibetingelsen som tredje likning; hoppe over SOC; feiltolke $\lambda$.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.3: Elastisitet som verktøy

- **id:** `sok1002-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok1002-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Elastisitet som relativ (prosentvis) endring beregnet via deriverte — det generelle verktøyet før de økonomiske elastisitetene i kap. 2.8.
- **Eksamensbelegg:** Elastisitetsberegning er sjanger E (~55 %, stigende); dette kapitlet gir det matematiske grepet, kap. 2.8 gir den økonomiske tolkningen. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** Elastisiteten til $y$ mhp. $x$: $\text{El}_x\,y = \frac{dy}{dx}\cdot\frac{x}{y} = \frac{d\ln y}{d\ln x}$ — «prosentvis endring i $y$ per prosents endring i $x$», dimensjonsløs. Regneregler (formelsamling): elastisiteten til et produkt/kvotient er sum/differanse av elastisitetene; elastisiteten til en potensfunksjon $y = Ax^k$ er konstant lik $k$ (derav de pene lukkede uttrykkene for Cobb-Douglas). Skillet **elastisitet vs. stigningstall** (helning har enhet, elastisitet er relativ og varierer langs en lineær kurve). Forbereder at Cobb-Douglas gir konstante elastisiteter (egenpriselastisitet $-1$ for hver vare når $U = x_1^a x_2^{1-a}$, jf. $x_i^* = a m/p_i$).
- **Oppgavesjangre:** Byggekloss for E. Mønstereksempel: «Etterspørselen er $x(p)=60/p$. Regn ut egenpriselastisiteten og forklar hvorfor den er den samme for alle priser.»
- **Typiske feil:** Forveksle elastisitet og stigningstall; glemme å gange med $x/y$; regne elastisitet i «feil» punkt (skal tas i det aktuelle tilpasningspunktet); oppgi tallet uten den verbale «per prosent»-tolkningen (foregriper §5-feil #1).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (1.A derivasjon + partiell/implisitt derivasjon av Cobb-Douglas; 1.B Lagrange vs. tangering på nyttemaks-/minimeringsoppsett med $\lambda$-tolkning; 1.C andreordensbetingelser i fri og betinget optimering; 1.D elastisitetsberegning via deriverte med verbal tolkning — verktøyprøver som ender på anvendelse).

---

### Del 2 — Konsumentsøylen: nytte, etterspørsel og prisendringer *(prioritet: PERFEKT — oppgave 1)*

#### Kapittel 2.1: Preferanser, nyttefunksjon og forutsetningene

- **id:** `sok1002-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `sok1002-1-1`
- **Kapitteltype:** teori
- **description:** Hva en nyttefunksjon er, de fire forutsetningene om preferanser, og at nytten er ordinal — begrepsfundamentet som gir sikre poeng.
- **Eksamensbelegg:** Nyttefunksjonens forutsetninger er «fast pluss-innhold» i ~70 % av konsumentoppgavene, og fast begrepsgjenganger (sjanger A). At nytten er **ordinal** er eksplisitt sensor-poeng (V2020 e: nyttetap kan ikke rangeres mellom personer). Prioritet: **perfekt** (definisjoner må sitte).
- **Innholdskontrakt:** Nyttefunksjon $U(x_1,x_2)$ som representasjon av preferanser (høyere $U$ = foretrekkes). **De fire forutsetningene:** (i) **komplette** (to godekurver kan alltid rangeres), (ii) **transitive** (konsistent rangering), (iii) **ikke-metning/monotoni** (mer er bedre → $U_1, U_2 > 0$), (iv) **ordinale** (bare rangeringen har mening; en positiv monoton transformasjon $V = \phi(U)$, $\phi' > 0$, representerer samme preferanser — nyttenivåer og nyttetap kan derfor ikke sammenlignes kardinalt eller mellom individer). Marginalnytte $U_i = \partial U/\partial x_i$ som byggekloss (avtakende langs et gode); **konveksitet** i preferanser (blandinger foretrekkes) → indifferenskurver krummet mot origo (bygges ut i 2.2). Presiser skillet ordinal/kardinal fordi det er en gjenganger i «pluss»-poengene.
- **Oppgavesjangre:** A + B-fundament. Mønstereksempel (A): «Forklar hva en nyttefunksjon er, hvilke fire forutsetninger vi vanligvis gjør om konsumentens preferanser, og hva det betyr at nytten er ordinal.»
- **Typiske feil:** Behandle nytten som kardinal / sammenligne nyttenivå mellom personer (feilkatalog §5.8); blande sammen forutsetningene; påstå at en spesifikk funksjonsform (f.eks. Cobb-Douglas) er «den riktige» nytten (den er bare én ordinal representasjon).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 2.2: Indifferenskurve, MSB og spesialtilfeller

- **id:** `sok1002-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-2-1`, `sok1002-1-1`
- **Kapitteltype:** teori
- **description:** Indifferenskurven som nivåkurve, marginal substitusjonsbrøk (MSB) som helningens tallverdi, og spesialtilfellene perfekte substitutter/komplementer.
- **Eksamensbelegg:** Indifferenskurve + MSB har ~100 % frekvens (definisjon + egenskaper); spesialtilfeller (perfekte substitutter/komplementer, faste forhold) ~40 % (V2020, H2020, H2023) og gir hjørneløsninger. Begge er faste begrepsgjengangere (sjanger A). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Indifferenskurve** = nivåkurve for $U$ (kombinasjoner med samme nytte): negativ helning (ikke-metning), krummet mot origo (konvekse preferanser), høyere kurver = høyere nytte, kan ikke krysse. **MSB** $= |{-}\text{helning}| = U_1/U_2$ (utledet ved totaldifferensiering fra kap. 1.1): antall enheter av gode 2 konsumenten vil gi opp for én ekstra enhet av gode 1 og forbli likegyldig; **avtakende MSB** langs kurven (jo mer $x_1$, jo mindre villig til å gi opp $x_2$). **Spesialtilfeller** med figur og MSB-uttrykk: perfekte substitutter $U = a x_1 + b x_2$ (lineær IK, **konstant MSB** $= a/b$ → typisk hjørneløsning); perfekte komplementer / faste forhold $U = \min(a x_1, b x_2)$ (rettvinklet IK, tilpasning i «hjørnet» $a x_1 = b x_2$); Cobb-Douglas som «pent midt imellom» (strengt konveks, indre løsning). Koble MSB direkte til tangeringsbetingelsen i kap. 2.4.
- **Oppgavesjangre:** A + B. Mønstereksempel (B): «Forklar begrepene indifferenskurve og marginal substitusjonsbrøk, hvilke egenskaper vi antar for indifferenskurvene, og hvordan kurvene ser ut for henholdsvis perfekte substitutter og perfekte komplementer.»
- **Typiske feil:** La indifferenskurver krysse; glemme at MSB er *tallverdien* til (den negative) helningen; anta indre løsning der spesialtilfellet gir hjørneløsning (feilkatalog §5.5); forveksle «konstant MSB» (substitutter) med «avtakende MSB» (normaltilfellet).
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.3: Budsjettbetingelsen og budsjettlinjen

- **id:** `sok1002-2-3` · **number:** 2.3 · **estimatedMinutes:** 35 · **prerequisites:** `sok1002-2-2`
- **Kapitteltype:** teori
- **description:** Budsjettmengden, budsjettlinjen $m = p_1x_1 + p_2x_2$ med helning $-p_1/p_2$, og hvordan den flyttes av pris- og inntektsendringer.
- **Eksamensbelegg:** Budsjettlinjen inngår i hver konsumentoppgave (~100 %) — den halvdelen av tilpasningen som ikke er preferanser. Skift/dreiing av linjen er selve mekanismen bak SE/IE (kap. 2.6) og intertemporalt valg (kap. 4.2). Prioritet: **perfekt** (fundament).
- **Innholdskontrakt:** Budsjettbetingelsen $p_1 x_1 + p_2 x_2 \le m$; budsjettlinjen (likhet ved ikke-metning) $x_2 = m/p_2 - (p_1/p_2)x_1$: skjæringspunkter $m/p_1$ og $m/p_2$, **helning $-p_1/p_2$** = relativ pris = markedets bytteforhold. Komparativ statikk grafisk: inntektsøkning → **parallelt utoverskift**; prisøkning på gode 1 → linjen **dreier innover** om skjæringen på $x_2$-aksen (bratteres); proporsjonal endring av alle priser og inntekt → uendret linje (nullte-grads homogenitet — pluss-poeng). Realinntekt som kjøpekraft. Legg grunnlaget for at tangering krever MSB (subjektivt bytteforhold) = $p_1/p_2$ (markedets bytteforhold).
- **Oppgavesjangre:** B-fundament. Mønstereksempel: «Tegn budsjettlinjen når $m = 240$, $p_1 = 8$, $p_2 = 12$, og vis hvordan den flyttes hvis $p_1$ dobles.»
- **Typiske feil:** Feil fortegn/tolkning av helningen; forveksle prisendring (dreiing) med inntektsendring (parallellskift); glemme at bare *relative* priser og realinntekt betyr noe.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.4: Nyttemaksimering: Lagrange og grafisk tangering

- **id:** `sok1002-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok1002-2-3`, `sok1002-1-2`
- **Kapitteltype:** teori
- **description:** Konsumentens tilpasning: tangeringsbetingelsen MSB $= p_1/p_2$ utledet både med Lagrange og grafisk — den ene motoren i oppgave 1.
- **Eksamensbelegg:** ~100 % frekvens — kjernen i konsumentoppgaven. Sensor: begge metoder godtas fullt ut; mekanismen bak betingelsen (*hvorfor* gir MSB $= p_1/p_2$ maks) teller mer enn selve betingelsen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Problemet $\max U(x_1,x_2)$ gitt $m = p_1x_1 + p_2x_2$. **Vei 1 (Lagrange):** $\mathcal{L} = U - \lambda(p_1x_1 + p_2x_2 - m)$; FOC $U_1 = \lambda p_1$, $U_2 = \lambda p_2$, budsjett; deling → **MSB $= U_1/U_2 = p_1/p_2$**; tolkning: marginalnytte per krone lik for begge goder ($U_1/p_1 = U_2/p_2 = \lambda$). **Vei 2 (grafisk):** høyest oppnåelige indifferenskurve tangerer budsjettlinjen; i tangeringspunktet er subjektivt bytteforhold (MSB) = markedets bytteforhold ($p_1/p_2$); forklar *hvorfor* et ikke-tangeringspunkt ikke er optimalt (da lønner det seg å flytte langs budsjettlinjen). Løs et Cobb-Douglas-eksempel begge veier og få identisk svar. **Hjørneløsninger:** ved perfekte substitutter (MSB konstant $\ne p_1/p_2$) → alt på det billigste godet per nyttenhet; sjekk alltid om løsningen er indre eller hjørne. Nevn SOC kvalitativt (konvekse preferanser sikrer maks).
- **Oppgavesjangre:** C. Mønstereksempel: «En konsument har $U = x_1 x_2$, inntekt $m = 300$, priser $p_1 = 15$, $p_2 = 5$. Finn den nyttemaksimerende tilpasningen både med Lagrange og ved grafisk tangering, og forklar hvorfor betingelsen MSB $= p_1/p_2$ gir maksimum.»
- **Typiske feil:** Sette opp betingelsen uten å forklare tilpasningen (uansett metode) (feilkatalog §5.9); anta indre løsning ved spesialtilfeller (§5.5); regnefeil i FOC-delingen; hoppe over budsjettlikningen; ikke sjekke/nevne at det er et maksimum.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 2.5: Etterspørselsfunksjoner fra Cobb-Douglas

- **id:** `sok1002-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok1002-2-4`
- **Kapitteltype:** teori
- **description:** Fra tilpasningen til etterspørselsfunksjonene $x_i^*(p_1,p_2,m)$ — signaturresultatet $x_i^* = a\,m/p_i$ for Cobb-Douglas, med parametertolkning og komparativ statikk.
- **Eksamensbelegg:** ~90 % frekvens — «finn etterspørselen som funksjon av priser og inntekt» er standardleveransen i oppgave 1. Cobb-Douglas gir lukkede uttrykk sensor forventer utledet. Prioritet: **perfekt**.
- **Innholdskontrakt:** Kombiner tangeringsbetingelsen og budsjettet til to likninger, to ukjente → **(Marshalliansk/ubetinget) etterspørselsfunksjon** $x_i^* = D_i(p_1,p_2,m)$. **Standardresultat for $U = x_1^{a}x_2^{1-a}$:** $x_1^* = a\,m/p_1$, $x_2^* = (1-a)\,m/p_2$ — utled det fullstendig og tolk: $a$ = **budsjettandelen** brukt på gode 1 (konstant, uavhengig av priser); etterspørselen etter et gode avhenger bare av egen pris og inntekt (Cobb-Douglas-særtrekk). Komparativ statikk (fortegn): $\partial x_i^*/\partial p_i < 0$ (fallende egenpris­etterspørsel), $\partial x_i^*/\partial m > 0$ (normalt gode), $\partial x_i^*/\partial p_j = 0$ (uavhengige goder her). **Homogenitet av grad null** i $(p_1,p_2,m)$ — bare realstørrelser betyr noe. Skill **betinget vs. ubetinget etterspørsel** (foregriper Slutsky i 2.7). Vis et talleksempel og ett generelt $U(x_1,x_2)$-tilfelle (resonnement på generell form).
- **Oppgavesjangre:** C. Mønstereksempel: «En konsument har $U = x_1^{0{,}4}x_2^{0{,}6}$ og inntekt $m$. Utled etterspørselen etter begge goder som funksjon av $p_1$, $p_2$ og $m$, og tolk parameteren $0{,}4$.»
- **Typiske feil:** Feil budsjettandel (bytte om $a$ og $1-a$); tro at etterspørselen avhenger av den andre prisen når den ikke gjør det (Cobb-Douglas); glemme homogeniteten; forveksle betinget og ubetinget etterspørsel (feilkatalog §5.11).
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 2.6: Substitusjons- og inntektseffekt: grafisk dekomponering og Giffen

- **id:** `sok1002-2-6` · **number:** 2.6 · **estimatedMinutes:** 60 · **prerequisites:** `sok1002-2-5`
- **Kapitteltype:** teori
- **description:** Å dele en prisendrings totaleffekt i substitusjonseffekt og inntektseffekt grafisk — med normale, mindreverdige og Giffen-goder som utfall.
- **Eksamensbelegg:** ~85 % frekvens (sjanger D) — «dekomponer virkningen av en prisendring». Krever **figur + verbal forklaring**. Giffen som spesialtilfelle og fortegnsanalysen på det *andre* godet er toppsjikt-markører. Prioritet: **perfekt**.
- **Innholdskontrakt:** Ved en prisøkning på gode 1: **substitusjonseffekt (SE)** = bevegelse langs *samme* indifferenskurve til ny tangering med den nye (brattere) relativprisen — **alltid mot det som er blitt relativt dyrere** (SE på gode 1 alltid negativ). **Inntektseffekt (IE)** = skiftet fra den kompenserte til den faktiske (lavere) budsjettlinjen — fortegn avhenger av godetype: **normalt gode** (IE negativ, forsterker SE), **mindreverdig gode** (IE positiv, motvirker SE). **Totaleffekt = SE + IE.** **Giffen-gode** = sterkt mindreverdig gode der IE dominerer SE → totaleffekten er *positiv* (etterspørselen stiger når prisen stiger). Effekten på det **andre godet** er ubestemt uten mer info (avhenger av om godene er brutto­substitutter/-komplementer/uavhengige) — pek eksplisitt på dette som en «det kommer an på»-konklusjon. Figurkrav: navngi opprinnelig tilpasning, kompensert tilpasning, ny tilpasning, og de to dekomponerte avstandene på $x_1$-aksen.
- **Oppgavesjangre:** D. Mønstereksempel: «Prisen på gode 1 øker. Dekomponer virkningen på etterspørselen etter gode 1 i en substitusjons- og en inntektseffekt i figur, forklar fortegnet på hver effekt for et normalt og for et mindreverdig gode, og forklar hvordan et Giffen-gode oppstår.»
- **Typiske feil:** Bytte om SE og IE eller sette feil fortegn (feilkatalog §5.6); behandle Giffen som umulig i stedet for som spesialtilfelle (§5.4); påstå bestemt fortegn på det andre godet uten substitutt/komplement-info; uklar figur uten navngitte avstander (§5.10).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.7: Slutsky- og Hicks-kompensasjon: numerisk SE/IE

- **id:** `sok1002-2-7` · **number:** 2.7 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-2-6`
- **Kapitteltype:** teori
- **description:** Å regne SE og IE eksplisitt via en hypotetisk (kompensert) inntekt — og skillet mellom Slutsky-kompensasjon (kjøpekraft) og Hicks-kompensasjon (nyttenivå).
- **Eksamensbelegg:** ~30 % frekvens (V2011, V2012, V2015, V2022-strømkompensasjon) — men **toppkarakter-differensiator**: den numeriske SE/IE-regningen og det å skille de to kompensasjonstypene er eksplisitt A/B-markør. Prioritet: **kunne** (nivå 2, men høyt belønnet).
- **Innholdskontrakt:** **Kompensert etterspørsel** = etterspørsel når konsumenten gis akkurat nok ekstra inntekt til å nøytralisere realvirkningen av prisendringen. To måter: **Slutsky-kompensasjon** = nok inntekt til å ha råd til det *opprinnelige godebundelet* (kjøpekraft holdes fast); **Hicks-kompensasjon** = nok inntekt til å nå det *opprinnelige nyttenivået* (nytte holdes fast). SE = endringen fra opprinnelig til kompensert tilpasning; IE = fra kompensert til faktisk. Regn et fullt talleksempel begge veier (Cobb-Douglas gjør det håndterbart) og vis at fortegnene er som i 2.6. **Slutsky-likningen** som beredskap: $\frac{\partial x_i}{\partial p_i} = \left(\frac{\partial x_i}{\partial p_i}\right)_{\text{komp}} - x_i\,\frac{\partial x_i}{\partial m}$ (total = substitusjon − inntektsledd). Sensor-poeng: **det er analysen av de to kompensasjonsmåtene, ikke navnelappen, som teller** (læreboka bruker selv feil benevnelse et sted) — så forklar innholdet, ikke bare terminologien.
- **Oppgavesjangre:** D (numerisk variant). Mønstereksempel: «Prisen på gode 1 øker fra 10 til 20. Med $U = x_1^{0{,}5}x_2^{0{,}5}$ og $m = 120$, regn ut substitusjons- og inntektseffekten på $x_1$ eksplisitt, og forklar forskjellen mellom en Slutsky- og en Hicks-kompensasjon.»
- **Typiske feil:** Blande kjøpekraft (Slutsky) og nyttenivå (Hicks); regne kompensasjonsbeløpet feil vei (kompensasjon ved prisøkning er *positiv* ekstrainntekt); henge seg opp i navnene i stedet for analysen; ikke koble tilbake til fortegnsmønsteret fra 2.6.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.8: Elastisiteter: egenpris, kryss og inntekt

- **id:** `sok1002-2-8` · **number:** 2.8 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-2-5`, `sok1002-1-3`
- **Kapitteltype:** teori
- **description:** De tre etterspørselselastisitetene beregnet fra etterspørselsfunksjonen og tolket med ord — koblet til normale/mindreverdige goder og nødvendighet/luksus.
- **Eksamensbelegg:** ~55 % frekvens og **stigende** (H2018, V2015, H2022, V2024); ofte koblet til empiriske SSB-estimater (mat/vin/øl) som skal tolkes og «faktasjekkes» mot teori. **Verbal tolkning kreves hver gang.** Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt:** **Egenpriselastisitet** $\varepsilon_{ii} = \frac{\partial x_i}{\partial p_i}\cdot\frac{p_i}{x_i}$ (negativ for vanlige goder; $|\varepsilon|>1$ elastisk, $<1$ uelastisk); **krysspriselastisitet** $\varepsilon_{ij} = \frac{\partial x_i}{\partial p_j}\cdot\frac{p_j}{x_i}$ (positiv = brutto­substitutter, negativ = brutto­komplementer, null = uavhengige); **inntektselastisitet** $E_i = \frac{\partial x_i}{\partial m}\cdot\frac{m}{x_i}$ ($>0$ normalt, $<0$ mindreverdig; $0<E<1$ **nødvendighetsgode**, $E>1$ **luksusgode**). Beregn alle tre fra en Cobb-Douglas etterspørselsfunksjon (gir $\varepsilon_{11}=-1$, $\varepsilon_{12}=0$, $E_1=1$) og fra en generell/oppgitt funksjon. **Obligatorisk verbal tolkning:** «en prisøkning på 1 % gir $|\varepsilon|$ % lavere etterspørsel». Vurder om oppgitte empiriske estimater er forenlige med teori. **Sensor-felle (H2022):** en stor inntektselastisitet «tvinger» ikke en stor egenpris-/krysselastisitet — inntektselastisiteten skalerer inntektseffekten, men SE og IE kan likevel utligne hverandre; de tre elastisitetene er langt på vei uavhengige.
- **Oppgavesjangre:** E. Mønstereksempel: «For matvarer anslås egenpriselastisitet $-0{,}2$, krysspriselastisitet (mot en annen vare) $0{,}05$ og inntektselastisitet $0{,}3$. Forklar hva hvert tall betyr, hva slags gode dette er, og vurder om tallene er forenlige med konsumentteori.»
- **Typiske feil:** Oppgi tallet uten verbal tolkning (feilkatalog §5.1); anta at stor inntektselastisitet krever stor egenpris-/krysselastisitet (§5.7); blande elastisitet og helning; feil fortegnstolkning (mindreverdig vs. luksus); regne elastisiteten i feil punkt.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.9: Drill: konsumentoppgaven

- **id:** `sok1002-2-9` · **number:** 2.9 · **estimatedMinutes:** 90 · **prerequisites:** `sok1002-2-8`, `sok1002-2-7`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1: fra en gitt nyttefunksjon til fullført A-besvarelse med etterspørselsfunksjoner, elastisiteter/SE-IE og verbal tolkning.
- **Eksamensbelegg:** Dekker sjangrene B, C, D, E samlet — hele konsumentoppgaven som utgjør ~50 % (eller 40 %) av hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) les av funksjonsform (Cobb-Douglas / substitutter / komplementer) og velg indre vs. hjørneløsning; 2) sett opp tilpasningen begge veier (Lagrange + tangering), forklar MSB $= p_1/p_2$; 3) løs sammen med budsjettet → etterspørselsfunksjoner $x_i^*(p_1,p_2,m)$, tolk parameteren; 4) på oppgitt prisendring: enten (a) elastisiteter (egenpris/kryss/inntekt) beregnet + **verbalt tolket**, eller (b) SE/IE dekomponert grafisk og evt. numerisk (Slutsky/Hicks); 5) klassifiser godene (normal/mindreverdig, nødvendighet/luksus, Giffen?) og konkluder verbalt; 6) figur med navngitte kurver, tilpasningspunkter og avstander. **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling ved hvert steg — særlig: mekanismen bak tangeringen, den verbale tolkningen, det å se ubestemtheter). **10–15 oppgaver** på eksamensnivå som roterer funksjonsform ($x_1 x_2$, $x_1^{a}x_2^{1-a}$, perfekte substitutter, perfekte komplementer, en generell $U(x_1,x_2)$) × leveranse (etterspørsel / elastisiteter / SE-IE grafisk / SE-IE numerisk), alle med nyskrevne tall kalibrert til pene svar og med `solution` + `hints`.
- **Oppgavesjangre:** B, C, D, E. Mønstereksempel (full kjede): «(a) Utled etterspørselen etter begge goder for $U = x_1^{0{,}5}x_2^{0{,}5}$, $m = 200$. (b) Regn egenpris- og inntektselastisiteten for gode 1 og tolk dem. (c) Prisen på gode 1 dobles — dekomponer virkningen i SE og IE i figur og forklar fortegnene. (d) Er gode 1 normalt, mindreverdig eller Giffen? Begrunn.»
- **Typiske feil:** Hele konsument-repertoaret fra §5: forklaringsløs betingelse (§5.9), indre løsning ved spesialtilfelle (§5.5), utolkede tall (§5.1), SE/IE-forveksling (§5.6), kardinal nyttesammenligning (§5.8), uklare figurer (§5.10).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper konsumentteori — nyttefunksjon/forutsetninger, indifferenskurve/MSB, spesialtilfeller, sjanger A+B; 2.B nyttemaks + etterspørselsfunksjoner Lagrange *og* tangering, sjanger C; 2.C prisendring: elastisiteter med tolkning + SE/IE grafisk dekomponering med Giffen, sjanger D+E; 2.D full konsumentoppgave på eksamensnivå inkl. numerisk Slutsky/Hicks-kompensasjon, sjanger B+C+D+E).

---

### Del 3 — Produsentsøylen: produksjon, kostnad og tilbud *(prioritet: PERFEKT — oppgave 2)*

#### Kapittel 3.1: Produktfunksjon, marginalprodukt og gjennomsnittsprodukt

- **id:** `sok1002-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1002-1-1`
- **Kapitteltype:** teori
- **description:** Produktfunksjonen $y = f(L,K)$, marginalprodukt (avtakende) og gjennomsnittsprodukt — med Cobb-Douglas som standardcase.
- **Eksamensbelegg:** ~70 % frekvens; produktfunksjonens egenskaper er inngangen til produsentoppgaven når den starter på produktsiden (ofte Cobb-Douglas $y = AL^\alpha K^\beta$). Prioritet: **perfekt** (nivå 2 innhold i nivå 1-søyle).
- **Innholdskontrakt:** Produktfunksjon $y = f(L,K)$ (maks output av faktorbundelet). **Marginalprodukt** $\text{MP}_L = \partial y/\partial L$ (positivt, men **avtakende** — avtakende utbytte når én faktor økes med den andre fast); **gjennomsnittsprodukt** $\text{GP}_L = y/L$. For Cobb-Douglas $y = AL^\alpha K^\beta$: $\text{MP}_L = \alpha A L^{\alpha-1}K^\beta = \alpha\,y/L$, $\text{GP}_L = A L^{\alpha-1}K^\beta = y/L$, altså $\text{MP}_L = \alpha\,\text{GP}_L < \text{GP}_L$ når $0<\alpha<1$; begge avtakende i $L$. Forholdet MP–GP (MP under GP ⇒ GP fallende) — parallellen til MK–TGK i kap. 3.6 (samme matematikk). Legg grunnlaget for TSB $= \text{MP}_L/\text{MP}_K$ (kap. 3.2).
- **Oppgavesjangre:** H. Mønstereksempel: «Med $y = 5L^{0{,}4}K^{0{,}5}$, finn $\text{MP}_L$ og $\text{GP}_L$, og forklar hvorfor marginalproduktet er avtakende.»
- **Typiske feil:** Forveksle marginal- og gjennomsnittsprodukt; glemme «alt annet fast» (partiell) ved marginalprodukt; ikke se avtakende utbytte som følge av $\alpha<1$; blande avtakende marginalprodukt (én faktor) med avtakende skalautbytte (alle faktorer — kap. 3.3).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.2: Isokvant og teknisk substitusjonsbrøk (TSB)

- **id:** `sok1002-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-3-1`
- **Kapitteltype:** teori
- **description:** Isokvanten som produksjonens nivåkurve og TSB som helningens tallverdi — produsentsidens motstykke til indifferenskurve/MSB.
- **Eksamensbelegg:** ~70 % frekvens; isokvant + TSB er fast begrepsgjenganger (sjanger A) og inngangen til kostnadsminimering (kap. 3.4). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Isokvant** = kombinasjoner av $(L,K)$ som gir samme produksjon $\bar y$: negativ helning, konveks mot origo, høyere isokvant = høyere produksjon. **TSB** (teknisk substitusjonsbrøk) $= |{-}\text{helning}| = \text{MP}_L/\text{MP}_K$ (utledet ved totaldifferensiering, jf. kap. 1.1): hvor mye kapital som kan spares per ekstra arbeidsenhet med uendret produksjon; **avtakende** langs isokvanten (konveksitet). For Cobb-Douglas: $\text{TSB} = \frac{\alpha}{\beta}\cdot\frac{K}{L}$. Understrek den fullstendige parallellen til konsumentsiden (isokvant ↔ indifferenskurve, TSB ↔ MSB, tangering mot isokost ↔ tangering mot budsjettlinje) — dette er bokas symmetri-grep. Spesialtilfeller kort: perfekte substitutter i produksjon (lineær isokvant), faste faktorforhold (rettvinklet, Leontief).
- **Oppgavesjangre:** A + I-fundament. Mønstereksempel (A): «Forklar hva en isokvant er og hva teknisk substitusjonsbrøk måler, og utled TSB for produktfunksjonen $y = L^{0{,}5}K^{0{,}5}$.»
- **Typiske feil:** Forveksle isokvant (produksjon fast) og isokost (kostnad fast — kap. 3.4); feil retning på TSB (MP-forholdet, ikke omvendt); glemme avtakende TSB.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.3: Skalautbytte og koblingen til kostnadskrumning

- **id:** `sok1002-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok1002-3-1`
- **Kapitteltype:** teori
- **description:** Å lese skalautbytte av produktfunksjonen ($\alpha+\beta$) og av kostnadsfunksjonens krumning — og tolke det økonomisk. En nivå-1-ferdighet.
- **Eksamensbelegg:** ~90 % frekvens (15 av 16 undersøkte sett) — «avgjør skalautbyttet» er nesten obligatorisk. **Feil retning** er en klassisk felle (feilkatalog §5.3). Koblingen skala ↔ kostnadskrumning er toppsjikt-markør. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Skalautbytte** = hva som skjer med produksjonen når *alle* faktorer skaleres med samme faktor $t>1$: $f(tL,tK) = t^s f(L,K)$ gir økende ($s>1$), konstant ($s=1$) eller avtakende ($s<1$) skalautbytte. For Cobb-Douglas $y = AL^\alpha K^\beta$ er $s = \alpha+\beta$ (vis utregningen $f(tL,tK)=t^{\alpha+\beta}f$). **Koblingen til kostnadsfunksjonen** (foregriper 3.5–3.6): konstant skalautbytte ⇒ **lineær** $C(y)$ ⇒ konstant MK og TGK; avtakende skalautbytte ⇒ **konveks** $C(y)$ ⇒ stigende MK; økende skalautbytte ⇒ **konkav** $C(y)$ ⇒ fallende MK. **Advarsel (kjernen i feilen):** konveks kostnad = avtakende skala; det er lett å bytte om retningen. Økonomisk tolkning: skalautbytte sier om det lønner seg å være stor. Skill skalautbytte (alle faktorer) fra avtakende marginalprodukt (én faktor) eksplisitt.
- **Oppgavesjangre:** H. Mønstereksempel: «Avgjør skalautbyttet for $y = 3L^{0{,}6}K^{0{,}6}$, vis utregningen, og forklar hva det innebærer for hvordan bedriftens kostnadsfunksjon ser ut.»
- **Typiske feil:** Feil retning skala↔krumning (feilkatalog §5.3 — konveks C betyr avtakende skala, ikke økende); blande skalautbytte med avtakende marginalprodukt; lese $\alpha+\beta$ feil; ikke tolke resultatet økonomisk (§5.1).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 3.4: Kostnadsminimering: TSB $= w/q$ og betinget faktoretterspørsel

- **id:** `sok1002-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok1002-3-2`, `sok1002-1-2`
- **Kapitteltype:** teori
- **description:** Bedriftens faktorvalg: minimer $wL + qK$ gitt et produksjonskrav — tangering TSB $= w/q$ (Lagrange og grafisk) → betinget faktoretterspørsel.
- **Eksamensbelegg:** ~65 % frekvens; produsentsidens motstykke til nyttemaks, og forutsetningen for kostnadsfunksjonen (kap. 3.5). Lagrange **eller** grafisk godtas likeverdig. Prioritet: **perfekt**.
- **Innholdskontrakt:** Problemet $\min\; wL + qK$ gitt $y = f(L,K)$. **Isokost** = rette linjer $wL + qK = \bar C$ med helning $-w/q$. **Vei 1 (Lagrange):** $\mathcal{L} = wL + qK - \mu(f(L,K)-y)$; FOC → **TSB $= \text{MP}_L/\text{MP}_K = w/q$** (marginalprodukt per krone likt for begge faktorer: $\text{MP}_L/w = \text{MP}_K/q$); tolkning av $\mu$ = marginalkostnad. **Vei 2 (grafisk):** laveste isokost som når isokvanten $y$ tangerer den; forklar *hvorfor* tangering minimerer kostnaden. Løs → **betinget faktoretterspørsel** $L^*(w,q,y)$, $K^*(w,q,y)$ («betinget» = produksjonen holdes fast). Cobb-Douglas-eksempel begge veier. **Komparativ statikk:** egenpris-effekt negativ ($\partial L^*/\partial w < 0$), krysspris-effekt positiv ($\partial L^*/\partial q > 0$) — tolk. Skill **betinget** (produksjon fast, her) fra ubetinget faktoretterspørsel (full profittmaks).
- **Oppgavesjangre:** I. Mønstereksempel: «Bedriften minimerer $wL + qK$ gitt $y = L^{0{,}5}K^{0{,}5}$. Finn den kostnadsminimerende faktorbruken $L^*(w,q,y)$ og $K^*(w,q,y)$ med Lagrange og grafisk, og forklar betingelsen TSB $= w/q$.»
- **Typiske feil:** Forveksle betinget og ubetinget faktoretterspørsel (feilkatalog §5.11); feil helning på isokost; sette opp tangeringen uten å forklare hvorfor den minimerer; feil fortegn i komparativ statikk; bruke Lagrange der tangeringen holder (og motsatt).
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 3.5: Fra faktoretterspørsel til kostnadsfunksjon $C(y)$

- **id:** `sok1002-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-3-4`, `sok1002-3-3`
- **Kapitteltype:** teori
- **description:** Å bygge kostnadsfunksjonen ved å sette betinget faktoretterspørsel inn i kostnaden — og lese skalaegenskapene av krumningen.
- **Eksamensbelegg:** ~100 % frekvens (kostnadsfunksjonen er inngangen til hele profittmaks/tilbud-analysen); ofte gitt direkte, men utledningen fra produktfunksjon er en A-ferdighet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Kostnadsfunksjonen** $C(y) = wL^*(w,q,y) + qK^*(w,q,y)$ — sett betinget faktoretterspørsel inn i faktorkostnaden. For Cobb-Douglas: konstant skalautbytte ($\alpha+\beta=1$) ⇒ $C(y)$ lineær i $y$ (fasit-eksempel: $y = 10L^{1/2}K^{1/2}$ ⇒ $C(y) = \frac{2}{10}(wq)^{1/2}y$, altså proporsjonal); $\alpha+\beta<1$ ⇒ konveks; $\alpha+\beta>1$ ⇒ konkav. Dekomponer $C(y) = C_v(y) + F$ i **variabel** og **fast** kostnad; faste kostnader deles videre i driftsavhengige $F^D$ og driftsuavhengige/sunk $F^S$ (settes i spill i kap. 3.8). Understrek at kostnadsfunksjonens **krumning ← skalautbytte** (kap. 3.3), som igjen bestemmer hele kurvefamilien i 3.6. Vis både utledning fra produktfunksjon og arbeid direkte med en gitt $C(y)$ (begge oppgaveformer forekommer).
- **Oppgavesjangre:** I → J-bro. Mønstereksempel: «Utled kostnadsfunksjonen for $y = 10L^{0{,}5}K^{0{,}5}$ når faktorprisene er $w$ og $q$, og forklar hvorfor den blir lineær i produksjonen.»
- **Typiske feil:** Sette ubetinget (i stedet for betinget) faktoretterspørsel inn; feil kobling krumning↔skala (§5.3); glemme å skille variabel og fast kostnad; tro at $C(y)$ alltid er konveks (avhenger av skalautbyttet).
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 3.6: Kostnadskurvefamilien: MK, TGK, VGK, FGK

- **id:** `sok1002-3-6` · **number:** 3.6 · **estimatedMinutes:** 55 · **prerequisites:** `sok1002-3-5`
- **Kapitteltype:** teori
- **description:** Marginalkostnad og de tre gjennomsnittskostnadene, og hvorfor MK skjærer TGK og VGK i deres minimumspunkter — kjernefiguren i produsentoppgaven.
- **Eksamensbelegg:** ~100 % frekvens; «finn MK, TGK, VGK, FGK og forklar sammenhengen» er standard, og «MK skjærer gjennomsnittskurvene i minimum» er selve standardkravet. Fast begrepsgjenganger (sjanger A). **Figur påkrevd.** Prioritet: **perfekt**.
- **Innholdskontrakt:** Definisjonene fra $C(y) = C_v(y) + F$: **MK** $= C'(y)$; **TGK** $= C/y$; **VGK** $= C_v/y$; **FGK** $= F/y$ (alltid fallende, → 0). Sammenhengene med begrunnelse: **MK skjærer TGK og VGK i deres minimumspunkter** (når MK < gjennomsnitt trekkes snittet ned, når MK > snitt trekkes det opp ⇒ snitt er lavest der MK = snitt — samme «marginal-under-snitt»-logikk som MP/GP i 3.1); TGK $=$ VGK $+$ FGK; TGK ligger over VGK, avstanden (FGK) krymper. Skalaegenskaper fra krumningen på $C(y)$: konveks $C$ ⇒ stigende MK og U-formet TGK; lineær $C$ (konstant skala) ⇒ MK $=$ TGK $=$ VGK konstant (og fallende TGK bare pga. FGK). **Fasit-kalibrerte former** (til vanskelighetskalibrering, ikke gjenbruk av tall): $C = \tfrac12 y^2 + F$ ⇒ MK $= y$, TGK $= \tfrac12 y + F/y$, min TGK ved $y = \sqrt{2F}$; $C = 20 + 4y^{1{,}5}$ ⇒ MK $= 6y^{0{,}5}$, min TGK ved $y \approx 4{,}64$. Full figur med alle fire kurver, minimumspunkter og skjæringer navngitt.
- **Oppgavesjangre:** J. Mønstereksempel: «Med $C(y) = \tfrac12 y^2 + 50$, finn MK, TGK, VGK og FGK, finn produksjonen som minimerer TGK, og forklar i figur hvorfor MK skjærer TGK i minimumspunktet.»
- **Typiske feil:** Ikke begrunne hvorfor MK skjærer i minimum (bare påstå det); regnefeil i min TGK (glem å sette MK = TGK eller derivere TGK); feil krumningskobling (§5.3); uklar/umerket figur (§5.10); forveksle VGK og TGK.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 3.7: Profittmaksimering og tilbud: $p = $ MK

- **id:** `sok1002-3-7` · **number:** 3.7 · **estimatedMinutes:** 55 · **prerequisites:** `sok1002-3-6`
- **Kapitteltype:** teori
- **description:** Bedriftens tilpasning i frikonkurranse: maksimer $\pi = py - C(y)$ → $p = $ MK, med andreordensbetingelse — og tilbudsfunksjonen som MK-kurven.
- **Eksamensbelegg:** ~100 % frekvens; $p = $ MK + andreordensbetingelse er standardleveransen, og «finn tilbudsfunksjonen» er fast. Nedleggingsdelen skilles ut i kap. 3.8. Prioritet: **perfekt**.
- **Innholdskontrakt:** Pristakerbedriften: $\max_y \pi = p\,y - C(y)$; FOC **$p = C'(y) = $ MK** (pris = marginalkostnad); **andreordensbetingelse** $\pi'' = -C''(y) < 0$, dvs. $C''(y) > 0$ (stigende MK) for at det skal være et maksimum — sjekk alltid. **Tilbudsfunksjonen** $y^s(p)$ = løs $p = $ MK for $y$ = den stigende delen av MK-kurven (over relevant gjennomsnittskostnads-minimum, presiseres i 3.8). **Konstant skalautbytte (lineær $C$, konstant MK):** ingen entydig $y$ fra profittmaks — $p < $ MK ⇒ $y = 0$, $p = $ MK ⇒ ubestemt, $p > $ MK ⇒ ubegrenset; produksjonen blir da **etterspørselsbestemt** (toppsjikt-poeng: se ubestemtheten). Regn profitt i optimum og tolk fortegnet. Skill tydelig marginalkostnad (avgjør tilpasningen) fra gjennomsnittskostnad (avgjør om man i det hele tatt bør produsere — kap. 3.8).
- **Oppgavesjangre:** K (del 1). Mønstereksempel: «Bedriften har $C(y) = \tfrac12 y^2 + 40$ og møter pris $p$. Finn tilbudsfunksjonen, sjekk andreordensbetingelsen, og regn ut profitten ved $p = 12$.»
- **Typiske feil:** Hoppe over andreordensbetingelsen (feilkatalog §5.5); bruke gjennomsnitts- der marginalkostnad skal brukes for tilpasningen; ikke se den etterspørselsbestemte produksjonen ved konstant skalautbytte; tolke negativ profitt som «legg ned» uten nedleggingsanalysen (kap. 3.8).
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 3.8: Nedleggingsbetingelsen og sunk-cost-nyansen

- **id:** `sok1002-3-8` · **number:** 3.8 · **estimatedMinutes:** 60 · **prerequisites:** `sok1002-3-7`
- **Kapitteltype:** teori
- **description:** Kronspørsmålet: bør bedriften produsere eller legge ned? Skillet mellom driftsavhengige og sunk faste kostnader avgjør — og er selve toppkarakter-differensiatoren.
- **Eksamensbelegg:** ~85 % frekvens — **spurt så å si hvert år**, og eksplisitt utpekt som toppkarakter-differensiator: å beherske sunk-cost-nyansen skiller A/B fra C. Prioritet: **perfekt** (bokas viktigste enkeltside på produsentsiden).
- **Innholdskontrakt:** Utgangspunkt: bedriften produserer der $p = $ MK **bare hvis** prisen dekker de kostnadene den faktisk kan unngå ved å la være. **To tilfeller:** (i) **alle faste kostnader driftsavhengige ($F = F^D$, spares ved nedlegging):** nedleggingsgrensen er $p < \min$ TGK ⇒ legg ned; tilbud = MK over min TGK. (ii) **noe sunk ($F^S$ driftsuavhengig, påløper uansett):** da lønner det seg å produsere så lenge prisen dekker **VGK $+ F^D/y$** — altså dekker *variable* kostnader pluss den *driftsavhengige* delen av de faste (noe av $F^S$ dekkes uansett, så bedriften vil helst dekke *noe* av det via drift); tilbud = MK over $\min(\text{VGK} + F^D/y)$. **Beslutningsregelen:** produser hvis $\pi_{\text{drift}} = py - C_v - F^D > -0$... presist: sammenlign profitt ved produksjon ($py - C_v - F$) mot profitt ved nedlegging ($-F^S$) — produser når det første er størst, dvs. når $py - C_v - F^D \ge 0$. **Warning-nivå:** produser så lenge *noe* sunk cost dekkes — ikke legg ned bare fordi $p < $ TGK. Fasit-kalibrert case (til vanskelighetsnivå): $C = 20 + 4y^{1{,}5}$ med $F^D = 10$: ved $p = 10$ gir $y = 2{,}78$ profitt $\approx -10{,}7 < -F^D = -10$ ⇒ legg ned; ved $p = 12$ gir $y = 4$ profitt $\approx -4 > -F^S = -10$ ⇒ produser. Full figur: MK, TGK, VGK, VGK $+ F^D/y$, og de to nedleggingsgrensene.
- **Oppgavesjangre:** K (del 2 — kronsjangeren). Mønstereksempel: «Bedriften har $C(y) = 400 + 0{,}5y^2$, der halvparten av de faste kostnadene er sunk. Finn tilbudsfunksjonen og angi ved hvilken pris bedriften bør legge ned.»
- **Typiske feil:** **Glemme sunk-cost-nyansen** — konkludere med nedlegging så snart $p < $ TGK uten å sjekke om noe er driftsuavhengig (feilkatalog §5.2, selve differensiatoren); bruke min TGK som grense når noe er sunk (skal være $\min(\text{VGK}+F^D/y)$); blande $F^D$ og $F^S$; glemme å sammenligne mot $-F^S$ ved nedlegging.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 3.9: Kort sikt vs. lang sikt

- **id:** `sok1002-3-9` · **number:** 3.9 · **estimatedMinutes:** 45 · **prerequisites:** `sok1002-3-8`, `sok1002-3-4`
- **Kapitteltype:** teori
- **description:** Faktortilpasning på kort sikt (fast $K$) mot lang sikt (alle faktorer frie) — den konvekse kortsiktige kostnadsfunksjonen og kortsiktig tilbud.
- **Eksamensbelegg:** ~45 % frekvens (H2021, V2015, H2020, H2017); «finn den kortsiktige tilbudsfunksjonen når $K$ er fast». Prioritet: **kjenne** (nivå 3, men konkret regneferdighet).
- **Innholdskontrakt:** **Lang sikt:** alle faktorer varieres, kostnadsminimering med tangering (kap. 3.4). **Kort sikt:** $K = K_0$ fast, produksjonen justeres kun via $L$ → løs $y = f(L,K_0)$ for $L(y)$, kostnad $C_{ks}(y) = wL(y) + qK_0$; typisk **konveks** (stigende kortsiktig MK pga. avtakende marginalprodukt av $L$ alene). Sammenhengen: kortsiktig kostnad $\ge$ langsiktig kostnad, med likhet ved det produksjonsnivået $\tilde y$ der $K_0$ er optimal kapitalmengde (kurvene tangerer). Utled **kortsiktig tilbudsfunksjon** ($p = $ kortsiktig MK). Kort om hvorfor $q K_0$ her ofte er driftsuavhengig/sunk på kort sikt (kobling til 3.8).
- **Oppgavesjangre:** L. Mønstereksempel: «Realkapitalen er fast lik $K_0$ og $y = L^{0{,}5}K_0^{0{,}5}$. Finn den kortsiktige kostnadsfunksjonen og den kortsiktige tilbudsfunksjonen.»
- **Typiske feil:** Behandle $K$ som variabel på kort sikt; glemme den faste $qK_0$-kostnaden; ikke se at kortsiktig kostnad ligger over langsiktig unntatt i tangeringspunktet; feil om hva som er sunk på kort vs. lang sikt.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 3.10: Drill: produsentoppgaven

- **id:** `sok1002-3-10` · **number:** 3.10 · **estimatedMinutes:** 90 · **prerequisites:** `sok1002-3-8`, `sok1002-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 2: fra en gitt produkt- eller kostnadsfunksjon til fullført A-besvarelse med kostnadskurver, skalautbytte, profittmaks og nedleggingsbetingelse.
- **Eksamensbelegg:** Dekker sjangrene H, I, J, K, L samlet — hele produsentoppgaven (~50 % / 60 %). **Nedleggingsbetingelsen med sunk cost drilles til overmål** (kronspørsmålet). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) er inngangen produkt- eller kostnadsfunksjon? Hvis produkt: finn MP/GP, TSB, **skalautbytte** ($\alpha+\beta$) og tolk; hvis kostnad: hopp til steg 3; 2) (produktside) kostnadsminimer (TSB $= w/q$) → betinget faktoretterspørsel → $C(y)$; 3) kostnadskurvefamilien MK/TGK/VGK/FGK + min TGK, med figur; 4) profittmaks $p = $ MK, sjekk SOC, finn tilbudsfunksjonen; 5) **nedleggingsanalyse**: identifiser $F^D$ vs. $F^S$, finn riktig nedleggingsgrense ($\min$ TGK eller $\min(\text{VGK}+F^D/y)$), konkluder — **med sunk-cost-nyansen**; 6) evt. kort sikt (fast $K$); 7) tolk alle tall og fortegn verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig: mekanismen bak MK-skjæringene, sunk-cost-nyansen, skala↔krumning-koblingen, SOC). **10–15 oppgaver** på eksamensnivå som roterer inngangsform (Cobb-Douglas produktfunksjon / gitt $C(y)$ konveks / lineær $C$ ved konstant skala / generell funksjon) × leveranse (skalautbytte / kostnadskurver / tilbud / nedlegging med og uten sunk cost / kort sikt), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** H, I, J, K, L. Mønstereksempel (full kjede): «(a) For $C(y) = 100 + 2y^2$, finn MK, TGK og VGK og produksjonen som minimerer TGK. (b) Finn tilbudsfunksjonen og sjekk andreordensbetingelsen. (c) 40 av de faste kostnadene er sunk — ved hvilken pris bør bedriften legge ned? (d) Hva ville svaret vært hvis alle faste kostnader var driftsavhengige?»
- **Typiske feil:** Hele produsent-repertoaret fra §5: sunk-cost-glemsel (§5.2), feil skalaretning (§5.3), hoppet SOC (§5.5), betinget/ubetinget-forveksling (§5.11), utolkede tall (§5.1), umerkede figurer (§5.10).
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper produsentteori — MK/gjennomsnittskostnader, isokvant/TSB, driftsavhengige/-uavhengige faste kostnader, betinget faktoretterspørsel, skalautbytte, sjanger A; 3.B produktfunksjon → kostnadsminimering (TSB $= w/q$) → kostnadsfunksjon, Lagrange *og* grafisk, sjanger H+I; 3.C kostnadskurvefamilien + profittmaks/tilbud på eksamensnivå, sjanger J+K; 3.D full produsentoppgave inkl. nedleggingsbetingelse med sunk-cost-drøfting og kort sikt, sjanger H+I+J+K+L).

---

### Del 4 — Anvendelser: arbeidstilbud og intertemporalt valg *(prioritet: KJENNE — roterer inn som hele halvdeler)*

#### Kapittel 4.1: Arbeidstilbud

- **id:** `sok1002-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-2-5`
- **Kapitteltype:** teori (anvendelse)
- **description:** Konsumentteorien brukt på valget mellom konsum og fritid — arbeidstilbud fra Cobb-Douglas, og hva en borgerlønn gjør.
- **Eksamensbelegg:** ~15 % frekvens (V2021 var hele oppgave 2 borgerlønn), men når den kommer bærer den en hel halvdel. Poenget at arbeidstilbudet er lønns-/prisuavhengig ved Cobb-Douglas er sensor-gull. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** Nyttefunksjon over **konsum $X$ og fritid $F$**: $U = X^a F^{1-a}$; **tidsbudsjett** $A + F = T$ (arbeidstid $A$, disponibel tid $T$, f.eks. 18 timer); **budsjett** $PX = wA + m$ (lønn $w$, prisnivå $P$, eventuell arbeidsfri inntekt $m$, f.eks. borgerlønn). Løs (samme nyttemaks-apparat som kap. 2.4) → **arbeidstilbud** $A^*(w,P,a,m)$. **Sentrale resultater:** uten arbeidsfri inntekt ($m=0$) er $A^*$ **uavhengig av lønn og pris** for Cobb-Douglas (substitusjons- og inntektseffekt av en lønnsendring for fritid utligner hverandre) — vis og forklar mekanismen; med arbeidsfri inntekt reduserer $m$ arbeidstilbudet, og det finnes en **kritisk borgerlønn $m^*$** der $A^* = 0$ (personen slutter å jobbe). SE/IE for fritid ved en lønnsendring (fritid er et «gode» hvis pris er $w$). Figur i $(F, X)$-planet.
- **Oppgavesjangre:** F. Mønstereksempel: «Petter har $U = X^{0{,}5}F^{0{,}5}$, 18 disponible timer, prisnivå $P = 1$ og lønn $w$. Finn arbeidstilbudet, forklar hvorfor det er uavhengig av lønnen, og finn hvor høy en borgerlønn må være for at han slutter å jobbe.»
- **Typiske feil:** Glemme tidsbudsjettet som andre bibetingelse; ikke se at Cobb-Douglas gjør $A^*$ lønnsuavhengig uten $m$ (SE = IE for fritid) (§5.7-slektning); regnefeil i den kritiske borgerlønnen; ikke tolke resultatet verbalt (§5.1).
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 4.2: Intertemporalt valg

- **id:** `sok1002-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1002-2-5`
- **Kapitteltype:** teori (anvendelse)
- **description:** Konsumentteorien over to perioder — intertemporal budsjettbetingelse, nåverdi, optimalt konsum og sparing, og hvordan renten virker.
- **Eksamensbelegg:** ~15 % frekvens (H2021, V2016, V2012), roterer inn som konsumentoppgavens innpakning. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** Konsum i to perioder $x_1, x_2$, inntekt $m_1, m_2$, rente $r$. **Intertemporal budsjettbetingelse** (nåverdi av konsum = nåverdi av inntekt): $x_1 + \frac{x_2}{1+r} = m_1 + \frac{m_2}{1+r}$; helning $-(1+r)$ i $(x_1,x_2)$-planet. Nyttefunksjon $U = x_1^\beta x_2^{1-\beta}$ ($\beta$ = tidspreferanse/utålmodighet). Tangeringsbetingelse **MSB $= 1+r$** (generelt $(1+r)p_1/p_2$ ved ulike prisnivåer). Løs → optimalt $x_1^*, x_2^*$ og **sparing** $S = m_1 - x_1^*$ (positiv = sparer/långiver, negativ = låner). **Komparativ statikk:** virkning av $r$ (for en sparer: SE mot mer sparing, IE avhengig — kan gå begge veier) og av $\beta$ (mer utålmodig ⇒ mer konsum i periode 1, mindre sparing). Figur med intertemporal budsjettlinje og indifferenskurver; utgangspunktet (endowment) $(m_1,m_2)$ som linjen dreier om ved renteendring.
- **Oppgavesjangre:** G. Mønstereksempel: «Kari har inntekt 120 i periode 1 og 220 i periode 2, rente 10 %, og $U = x_1^{0{,}5}x_2^{0{,}5}$. Finn optimalt konsum og sparing, og forklar hvordan sparingen påvirkes av en høyere rente.»
- **Typiske feil:** Feil oppsett av nåverdien / diskontere feil vei; glemme at utgangspunktet $(m_1,m_2)$ ligger på budsjettlinjen (linjen dreier om det ved renteendring); anta entydig fortegn på renteeffekten for en sparer (SE og IE kan trekke motsatt); ikke tolke $\beta$ og sparingen verbalt.
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 4:** 4 prøver (4.A arbeidstilbud uten arbeidsfri inntekt — lønnsuavhengigheten forklart, sjanger F; 4.B borgerlønn — kritisk $m^*$ og virkning på arbeidstilbud, sjanger F; 4.C intertemporalt valg — konsum, sparing og renteeffekt, sjanger G; 4.D blandet anvendelsesoppgave på eksamensnivå (halvdels-format), sjanger F+G).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Begrepsdrill: gjengangerbegrepene

- **id:** `sok1002-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1002-2-9`, `sok1002-3-10`
- **Kapitteltype:** drill (begreper)
- **description:** Presise definisjoner + matematiske uttrykk + figur for de ~12–15 begrepene som går igjen i begrepsoppgaven — de sikreste poengene når treoppgavevarianten kommer.
- **Eksamensbelegg:** Sjanger A — begrepsoppgaven forekommer i treoppgavevarianten (V2011/V2015/V2016/H2023/V2024, ~30 % av settene) og teller 10–20 %. Faste gjengangere. Prioritet: **kunne** (sikre poeng når den kommer).
- **Innholdskontrakt:** Kort, presis mal per begrep: **definisjon + matematisk uttrykk + figur/eksempel der naturlig + typisk fallgruve**. Gjengangerbegrepene (fra analysen §3A), blandet konsument/produsent: marginalkostnad, totale/variable/faste gjennomsnittskostnader, nyttefunksjon, indifferenskurve, marginal substitusjonsbrøk (MSB), egenpris-/kryss-/inntektselastisitet, isokvant, isokost, teknisk substitusjonsbrøk (TSB), betinget faktoretterspørsel, **driftsavhengige/-uavhengige (sunk) faste kostnader**, Slutsky-likningen, komplementære/substituerbare goder, skalautbytte, normale/mindreverdige goder, nødvendighets-/luksusgode. Sensor-poeng: **svar poengtert** på akkurat det det spørres om (unødig utenomsnakk gir ikke uttelling). Dette kapitlet er også begrepsbanken flashcards trekkes fra — derfor høy flashcard-kvote.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva som menes med driftsavhengige faste kostnader, og hvorfor skillet mot driftsuavhengige (sunk) kostnader har betydning for bedriftens tilbud.»
- **Typiske feil:** Svare bredt/rundt i stedet for poengtert; gi definisjon uten det matematiske uttrykket (eller omvendt); blande beslektede par (isokvant/isokost, MSB/TSB, betinget/ubetinget, normal/mindreverdig).
- **Quiz: 22 · Flashcards: 66**

#### Kapittel 5.2: Øvingseksamen 1 — konsument + produsent (50/50)

- **id:** `sok1002-5-2` · **number:** 5.2 · **estimatedMinutes:** 240 · **prerequisites:** `sok1002-2-9`, `sok1002-3-10`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett i standardmalen: oppgave 1 konsumentteori (50 %), oppgave 2 produsentteori (50 %), med A-besvarelse.
- **Eksamensbelegg:** Speiler den dominerende malen (2 jevnstore oppgaver 50/50). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Oppgave 1 (konsument, 50 %):** gitt Cobb-Douglas nyttefunksjon → nyttemaks (Lagrange + tangering) → etterspørselsfunksjoner → elastisiteter med tolkning → prisendring dekomponert i SE/IE (figur). **Oppgave 2 (produsent, 50 %):** gitt produkt-/kostnadsfunksjon → skalautbytte → kostnadskurvefamilien → profittmaks og tilbud → nedleggingsbetingelse med sunk-cost-drøfting. Løsningsforslag i eget `collapsible` per deloppgave, skrevet som A-besvarelse (figurbeskrivelse i ord + regning + verbal tolkning), med `tip`-notat om delpoeng/vekting og sensor-margnotater. Nyskrevne tall, pent kalibrert.
- **Oppgavesjangre:** B, C, D, E (oppg. 1) + H, I, J, K (oppg. 2). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring (halvparten på hver oppgave); glemme verbal tolkning under tidspress; hoppe over SOC og sunk-cost-nyansen i oppg. 2.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 5.3: Øvingseksamen 2 — med anvendelse (50/50)

- **id:** `sok1002-5-3` · **number:** 5.3 · **estimatedMinutes:** 240 · **prerequisites:** `sok1002-4-2`, `sok1002-3-10`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett sett der én halvdel er en anvendelse (arbeidstilbud eller intertemporalt valg) — slik anvendelsesår ser ut.
- **Eksamensbelegg:** Speiler settene der en anvendelse bærer en hel halvdel (V2021 arbeidstilbud, H2021 sparing). Prioritet: **perfekt/kjenne** (beredskap for anvendelsesår).
- **Innholdskontrakt:** **Oppgave 1 (konsument-anvendelse, 50 %):** arbeidstilbud (konsum/fritid, tidsbudsjett, borgerlønn med kritisk $m^*$) **eller** intertemporalt valg (to perioder, nåverdi, sparing, renteeffekt) — full nyttemaks med tolkning. **Oppgave 2 (produsent, 50 %):** som øvingseksamen 1, men med vekt på kort sikt vs. lang sikt og faktorpris-endringers virkning på faktoretterspørsel. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting. Nyskrevne tall.
- **Oppgavesjangre:** F/G (oppg. 1) + I, J, K, L (oppg. 2).
- **Typiske feil:** Behandle anvendelsen som «nytt» stoff i stedet for kjent nyttemaks-apparat; glemme lønns-/prisuavhengigheten (arbeidstilbud) eller nåverdi-oppsettet (sparing); slurve med kort sikt (fast $K$) i oppg. 2.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 5.4: Øvingseksamen 3 — begrep + konsument + produsent (20/40/40)

- **id:** `sok1002-5-4` · **number:** 5.4 · **estimatedMinutes:** 240 · **prerequisites:** `sok1002-5-1`, `sok1002-3-10`
- **Kapitteltype:** øvingseksamen
- **description:** Treoppgavevarianten: kort begrepsoppgave (20 %) foran de to teorioppgavene (40 %/40 %) — malen fra V2015/V2024.
- **Eksamensbelegg:** Speiler treoppgavemalen (V2011/V2015/V2016/H2023/V2024) med vekting 20/40/40. Prioritet: **perfekt** (den nest vanligste malen).
- **Innholdskontrakt:** **Oppgave 1 (begreper, 20 %):** 4–6 begreper fra gjengangerlisten (blandet konsument/produsent), poengtert besvart med definisjon + uttrykk + evt. figur. **Oppgave 2 (konsument, 40 %)** og **Oppgave 3 (produsent, 40 %):** som i øvingseksamen 1, men noe kortere gitt vektingen. Løsningsforslag som A-besvarelse med vekting og sensor-notater. Nyskrevne tall og begrepsutvalg.
- **Oppgavesjangre:** A (oppg. 1) + B/C/D/E (oppg. 2) + H/I/J/K (oppg. 3).
- **Typiske feil:** Bruke for mye tid på 20 %-begrepsoppgaven; svare bredt der poengtert kreves; ellers hele §5-repertoaret under tidspress.
- **Quiz: 10 · Flashcards: 0**

**Prøve-kvote Del 5:** ingen egne prøver (delen består av begrepsdrill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 10 | 0 |
| 1 | 1.1–1.3 | 20+22+16 = **58** | 18+22+16 = **56** | 4 |
| 2 | 2.1–2.9 | 18+20+14+26+24+24+18+22+16 = **182** | 26+26+14+22+18+22+16+24+8 = **176** | 4 |
| 3 | 3.1–3.10 | 18+18+18+24+18+26+24+26+14+16 = **202** | 18+20+16+18+14+24+18+24+14+8 = **174** | 4 |
| 4 | 4.1–4.2 | 18+18 = **36** | 14+14 = **28** | 4 |
| 5 | 5.1–5.4 | 22+10+10+10 = **52** | 66+0+0+0 = **66** | 0 (3 øvingseksamener) |
| **Sum** | **29 kap.** | **542 ≥ 500 ✓** | **510 ≥ 500 ✓** | **16 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler den todelte eksamensmalen: de to søylene (Del 2 + Del 3)
står for 384 av 542 quiz og 350 av 510 flashcards — nøyaktig de ~100 % av
eksamenspoengene de bærer. Boka er et **regnefag med solid begrepsrepertoar**:
quiz ligger komfortabelt over gulvet (drilltunge søyler), og flashcards er
løftet over gulvet fordi definisjonene faktisk må sitte (nyttefunksjonens fire
forutsetninger, driftsavhengige/-uavhengige kostnader, betinget vs. ubetinget
faktoretterspørsel, MSB/TSB), med begrepsdrillen (5.1) som samlende
flashcard-bank.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–4, 16 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok1002-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Matematisk verktøykasse** (verktøyprøver som ender på anvendelse)
1. Prøve 1.A (30 min): Derivasjon — partiell og implisitt derivasjon av Cobb-Douglas, helning på nivåkurve.
2. Prøve 1.B (35 min): Optimering — Lagrange vs. tangering på et nyttemaks- og et minimeringsoppsett, med tolkning av $\lambda$.
3. Prøve 1.C (25 min): Andreordensbetingelser i fri og betinget optimering.
4. Prøve 1.D (30 min): Elastisitetsberegning via deriverte, med obligatorisk verbal tolkning.

**Del 2 — Konsumentsøylen**
1. Prøve 2.A (30 min): Begreper — nyttefunksjon/forutsetninger, indifferenskurve/MSB, perfekte substitutter/komplementer (sjanger A+B).
2. Prøve 2.B (40 min): Nyttemaks + etterspørselsfunksjoner fra Cobb-Douglas, Lagrange *og* grafisk tangering (sjanger C).
3. Prøve 2.C (40 min): Prisendring — elastisiteter med tolkning + SE/IE grafisk dekomponering med Giffen (sjanger D+E).
4. Prøve 2.D (60 min): Full konsumentoppgave på eksamensnivå inkl. numerisk Slutsky/Hicks-kompensasjon (sjanger B+C+D+E).

**Del 3 — Produsentsøylen**
1. Prøve 3.A (30 min): Begreper — MK/gjennomsnittskostnader, isokvant/TSB, betinget faktoretterspørsel, driftsavhengige/-uavhengige kostnader, skalautbytte (sjanger A).
2. Prøve 3.B (40 min): Produktfunksjon → kostnadsminimering (TSB $= w/q$) → kostnadsfunksjon, Lagrange *og* grafisk (sjanger H+I).
3. Prøve 3.C (40 min): Kostnadskurvefamilien MK/TGK/VGK/FGK + profittmaks/tilbud på eksamensnivå (sjanger J+K).
4. Prøve 3.D (60 min): Full produsentoppgave inkl. nedleggingsbetingelse med sunk-cost-drøfting og kort sikt (sjanger H+I+J+K+L).

**Del 4 — Anvendelser**
1. Prøve 4.A (35 min): Arbeidstilbud uten arbeidsfri inntekt — lønnsuavhengigheten forklart (sjanger F).
2. Prøve 4.B (35 min): Borgerlønn — kritisk $m^*$ og virkning på arbeidstilbud (sjanger F).
3. Prøve 4.C (40 min): Intertemporalt valg — konsum, sparing og renteeffekt (sjanger G).
4. Prøve 4.D (50 min): Blandet anvendelsesoppgave på eksamensnivå (halvdels-format) (sjanger F+G).

### Øvingseksamener (3 komplette sett — se kap. 5.2–5.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 5.2) | Standard 50/50 (dominerende) | Oppg. 1 konsument 50 % (nyttemaks → etterspørsel → elastisitet → SE/IE) + oppg. 2 produsent 50 % (skala → kostnadskurver → profittmaks → nedlegging m/sunk cost) |
| Øvingseksamen 2 (kap. 5.3) | Anvendelsesår (V2021/H2021) | Oppg. 1 anvendelse 50 % (arbeidstilbud m/borgerlønn *eller* intertemporalt valg) + oppg. 2 produsent 50 % (m/kort sikt og faktorpris-effekter) |
| Øvingseksamen 3 (kap. 5.4) | Treoppgavevarianten 20/40/40 (V2015/V2024) | Oppg. 1 begreper 20 % + oppg. 2 konsument 40 % + oppg. 3 produsent 40 % |

Til sammen dekker de tre settene sjangrene A–L minst én gang; den todelte malen
(konsument + produsent) trenes i alle tre, og både 50/50- og 20/40/40-vektingen
er representert.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, kode C med matematisk formelsamling +
   kalkulator), den faste todelte malen (konsument + produsent, 50/50, evt.
   begrepsoppgave foran → 20/40/40), og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellene omgjort til tre lesenivåer:
   perfekt (Del 2 + Del 3: hele konsumentteorien med SE/IE og elastisiteter, hele
   produsentteorien med kostnadskurvefamilien og sunk-cost-nedlegging, skalautbytte),
   kunne (Slutsky/Hicks-kompensasjon, elastisitetsberegning, begrepsrepertoaret,
   produktfunksjonens egenskaper), kjenne (arbeidstilbud, intertemporalt valg, kort
   sikt vs. lang sikt).
3. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (2.9 konsumentoppgaven, 3.10 produsentoppgaven) og begrepsmalen
   (5.1) i kortform: nyttemaks-algoritmen, kostnadsminimering→kostnadsfunksjon→
   tilbud-algoritmen, nedleggingsbeslutningsregelen, SE/IE-dekomponeringen,
   begrepsmalen (definisjon + uttrykk + figur).
4. **Sensorreglene** — metareglene (figur + forklaring + regning er én leveranse;
   Lagrange er valgfritt — grafisk tangering gir full uttelling; alle tall tolkes
   verbalt; andreordensbetingelser sjekkes; svar poengtert; navnelapper på
   Slutsky/Hicks er underordnet analysen) + toppsjikt-listen (sunk-cost-nyansen,
   numerisk SE/IE via kompensert inntekt, ubestemte resultater, skala↔kostnadskrumning,
   spesialtilfeller Giffen/hjørneløsninger) fra kap. 0.1.
5. **Feilkatalogen** — de 11 typiske feilene samlet (utolkede tall; glemt
   sunk-cost-nyanse; feil skalaretning; Giffen avvist; hoppet andreordensbetingelse/
   hjørneløsning; SE/IE-forveksling; feilslutning om elastisiteter; kardinal
   nyttesammenligning; Lagrange «for sikkerhets skyld»; uklare figurer; betinget vs.
   ubetinget etterspørsel), hver med henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: budsjettlinje $m = p_1x_1 + p_2x_2$
   (helning $-p_1/p_2$); tangering **MSB $= U_1/U_2 = p_1/p_2$**; Cobb-Douglas
   etterspørsel $x_i^* = a\,m/p_i$; elastisiteter $\varepsilon_{ii} =
   \frac{\partial x_i}{\partial p_i}\frac{p_i}{x_i}$, $\varepsilon_{ij}$, $E_i =
   \frac{\partial x_i}{\partial m}\frac{m}{x_i}$; Slutsky-likningen; isokvant/isokost,
   **TSB $= \text{MP}_L/\text{MP}_K = w/q$**; kostnadsfamilien MK $= C'(y)$, TGK $=
   C/y$, VGK $= C_v/y$, FGK $= F/y$; profittmaks $p = $ MK med $C''>0$;
   nedleggingsgrense $\min$ TGK (alt driftsavhengig) vs. $\min(\text{VGK}+F^D/y)$
   (noe sunk); skalautbytte $\alpha+\beta$; arbeidstilbud ($A+F=T$, $PX=wA+m$);
   intertemporalt ($x_1 + x_2/(1+r) = m_1 + m_2/(1+r)$, MSB $= 1+r$). Marker hva som
   skal *utledes/tolkes* (etterspørselsfunksjoner, sunk-cost-grensen, elastisitetene)
   vs. hva som bare slås opp i formelsamlingen (derivasjonsregler, Lagrange-oppskrift).
7. **Figurbiblioteket** — standardfigurene i ord: budsjettlinje + indifferenskurver
   med tangering; SE/IE-dekomponering med kompensert linje og navngitte avstander;
   perfekte substitutter/komplementer; isokvant + isokost med tangering;
   kostnadskurvefamilien (MK gjennom min TGK/VGK); tilbudskurve med de to
   nedleggingsgrensene; arbeidstilbud i $(F,X)$-planet; intertemporal budsjettlinje —
   med merkekravene per figur (akser, kurver, tilpasningspunkter, avstander navngitt).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (verktøyet) → Del 2 (konsumentsøylen) → Del 3 (produsentsøylen) → Del 4
   (anvendelser), prøver underveis, øvingseksamenene de siste ukene under tidspress
   (240 min, halvparten på hver hovedoppgave). Terp begrepsdrillen (5.1) og
   drillkapitlene — undervisningsnærhet (seminaroppgaver) er dokumentert effektivt.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1002` med alle 29
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SOK1002 Mikroøkonomi».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene og
   avgrensningen (hva som IKKE er pensum) som resten refererer til.
3. **Del 1** (matteverktøyet) — Lagrange/tangering/elastisitet som resten bruker.
4. **De to søylene i avhengighetsrekkefølge**: Del 2 (konsument) → Del 3
   (produsent). Én byggeagent per hel del (jf. fase 4-batching); søylene er
   ~9–10 kapitler, så de kan splittes, men gi da hele delens kontrakter til begge
   agenter og flagg for konsistenssjekk (notasjon MSB/TSB, Lagrange+grafisk-
   parallellen). Drillkapitlet (2.9 / 3.10) bygges av samme agent som delen.
5. **Del 4** (anvendelsene) — gjenbruker konsument-apparatet.
6. **Del 5 til slutt** (begrepsdrill + øvingseksamener gjenbruker alt); bygges av
   én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1002-<del>-prove`, chapterNumber `<del>.P`), Del 1–4.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\lambda`, `\\alpha`); ingen unicode-brøker; konsistent
      $x_1,x_2,p_1,p_2,m$, $U_i$, $\lambda$, $y=f(L,K)$, $w,q$, $C(y)$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok1002-filer — **påkrevd**:
      MSB (ikke MRS/MSR som primærterm), TSB, MK/TGK/VGK/FGK, $F^D$/$F^S$,
      $x_1,x_2$, $p_1,p_2$, $y=f(L,K)$, $w$ og $q$; **forbudt/uønsket**:
      «MRS»/«MSR» som hovedterm, «q» som mengdesymbol (mengde er $y$; $q$ er
      kapitalpris), samt hele ECON1210-vokabularet — grep etter «monopol»,
      «Nash», «spillteori», «markedslikevekt», «eksternalitet», «kollektivt gode»,
      «samfunnsøkonomisk overskudd», «dødvektstap», «stykkskatt», «karbonprising»
      skal gi **null treff** utenfor den ene avgrensende merknaden i kap. 0.1.
- [ ] **Lagrange + grafisk parallelt**: hver optimeringsoppgave (nyttemaks,
      kostnadsminimering) vises begge veier; grep-sjekk at både «Lagrange»/
      «$\mathcal{L}$» og «tangering»/«grafisk» forekommer i 2.4, 3.4, drill­kapitlene
      og øvingseksamenene.
- [ ] **Figur + tolkning + regning**: hvert eksempel og løsningsforslag med figur
      har både figurbeskrivelse i ord (akser, kurver, tilpasningspunkter,
      avstander navngitt) og verbal tolkning; alle elastisiteter, parametere
      ($a$, $\alpha+\beta$) og fortegn på deriverte er verbalt tolket; SOC nevnt
      ved profittmaks/min TGK.
- [ ] **Sunk-cost-nyansen**: kap. 3.8, 3.10, prøve 3.D og øvingseksamenene
      inneholder eksplisitt skillet $F^D$/$F^S$ og de to nedleggingsgrensene
      ($\min$ TGK vs. $\min(\text{VGK}+F^D/y)$) — toppkarakter-differensiatoren.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og
      formelliste-`collapsible` (per delkapittel — forklarer ALLE symboler brukt),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
      med `solution` + `hints`, repetisjons-`collapsible`; drillkapitlene (2.9,
      3.10) har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 542 og flashcard-sum ≥ 510** per kvotetabellen (kontrollsummér
      mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–4 (16 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–L minst én gang, og både 50/50- og
      20/40/40-malen.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster
      (bransjer, personer), egne formuleringer; ingen formuleringer fra reelle
      sett eller sensorveiledninger (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      kalibreringsverdiene fra reelle fasiter (f.eks. $C = 20+4y^{1{,}5}$,
      min TGK ved $y\approx 4{,}64$) brukes kun til å velge vanskelighetsgrad,
      aldri som oppgavetall; pensum (Riis & Moen, *Moderne mikroøkonomi*)
      refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

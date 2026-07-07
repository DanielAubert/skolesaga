# Bokskjelett: ECON1220 Velferd og økonomisk politikk — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (8 ordinære sett H2018–H2025, 6 ordinære sensorveiledninger,
> 5 utsatt-sett og 3 utsatt-sensorveiledninger — emnet går **kun høst**).
> Arketype: **DRØFTING/HYBRID** (`DNA-drofting.md` som primærmal), med
> figur-i-ord-sjangeren lånt fra `econ1210/SKJELETT.md` og `econ1410/SKJELETT.md`
> (grafisk/verbal økonomi-drøfting). Arketypevalget er begrunnet i §1.
> Alle mønstereksempler i skjelettet er omskrivninger; forfatteren skal variere
> dem videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ1220` |
| Tittel | **ECON1220 Velferd og økonomisk politikk** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | **Drøfting/hybrid** (drøftingsfag med figuranalyse-i-ord — IKKE regnefag) |
| Antall kapitler | **35** (2 eksamenskart/casehåndverk + 28 tema/beredskap + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 440 min ≈ 40,5 timer** |
| Quiz totalt | **563** (krav ≥500) |
| Flashcards totalt | **593** (krav ≥500) |

**Pitch (ett avsnitt):** ECON1220-eksamen er en 4-timers digital skoleeksamen med
**3–4 case-oppgaver** («du er rådgiver i departementet …») med eksplisitt
prosentvekting, og den roterer rundt en fast kjerne. Én stor oppgave (ofte hele
30–80 %) handler nesten alltid om **asymmetrisk informasjon** i et
fast-beløp-per-bruker-marked (helse, sykehjem, skole, trygd): uheldig utvalg,
fløteskumming og to-trinns regulering. Rundt den roterer tre faste
drøftingsfundamenter — **nytte-kostnadsanalyse** og hva «samfunnsøkonomisk
lønnsomt» betyr og *ikke* betyr, **kollektive valg** (valgsykler, entoppede
preferanser, medianvelger) og **behovsprøving/arbeidstilbud** — pluss én
roterende oppgave om **miljø/kostnadseffektivitet**, **spillteori/normer** eller
**atferdsøkonomi**. Denne boka er kalibrert mot nettopp det. Den bruker **lite
matte og mye figurer**: et presist *verbalt* svar er fullgodt, algebra kreves
aldri, og alle standardfigurene (budsjettlinje med knekk, preferanse-topp-diagram,
marginale rensekostnadskurver, 2×2-spillmatrise) læres som **figur-i-ord**. Boka
driller emnets viktigste enkeltferdighet: å oversette en politisk aktualitet til
korrekt økonomisk analyse *og la selve drøftingen bære svaret*, ikke bare
konklusjonen. Den bygger tyngden rundt forsikrings-/tjenestemarkedet (Del 3),
gir de tre fundamentene egne deler (Del 2, 4, 5, 6) og holder atferd, normer og
institusjoner godt vedlike (Del 7) fordi de dominerer utsatt-eksamen.

### Arketypevalg (dokumentert avvik fra en ren DNA-mal)

Analysen sier eksplisitt: **«lite matte, mye figurer, drøftingen teller ikke bare
konklusjonen».** Det gjør ECON1220 til en **drøftingsbok med figuranalyse** — det
motsatte av forgjengeren ECON1210, som er et algebradrevet regnefag. Derfor:

- **Primærmal: `DNA-drofting.md`.** Kapittel-DNA-et derfra styrer (Eksamensvinkel →
  Temaet i fagets landskap → Kjernebegreper MED pensumforankring → Posisjoner og
  spenninger → Anvendelse på case → Typiske feil → oppgaver med momentliste/
  disposisjon → Pensumkart). Sensor belønner **navngitt pensumforankring** og
  **selvstendig drøfting med begge sider**; det er ryggraden i god uttelling.
- **Lånt element: figur-i-ord-sjangeren fra `econ1210`/`econ1410`.** Flere av
  kjernetemaene (miljø, arbeidstilbud, kollektive valg, spillteori) *er* grafiske,
  men figurene skal beskrives i ord og forklares verbalt, aldri regnes ut
  algebraisk. Der DNA-drofting bare sier «case-anvendelse», legger boka inn
  presise **figurbeskrivelser i ord** (akser, kurver, punkter, knekk, topper,
  arealer navngitt) + den **verbale mekanismen** — nøyaktig som i econ1410.
- **Lånt element: drillkapitler for de fem «må perfekt»-sjangrene.** DNA-drofting
  legger sjangertrening i siste del; her får de tyngste gjengangerne
  (asymmetrisk info, miljø, kollektive valg, NKA) et **drillkapittel inne i sin
  egen temadel** (regnefag-grepet), fordi de er 75–88 %-gjengangere som må
  drilles umiddelbart etter teorien. Del 9 beholder begrepsdrill, modellbesvarelse
  og øvingseksamener.
- **Hybrid, ikke rent essayfag:** i motsetning til SVMET1010/exphil er dette
  anvendt mikroøkonomi. Begrepspresisjonen er fagspesifikk (uheldig utvalg,
  marginal rensekostnad, entoppethet), ikke tolkningsåpen. Modellbesvarelsene
  viser derfor både *begrepsdisiplin* og *drøfting*, ikke ren essayretorikk.

### Kritisk sjangerregel (gjelder HELE boka)

Sensor gjentar nesten ordrett hvert år (H2018, H2019): **kurset bruker «lite matte,
mye figurer», og et presist verbalt svar er fullgodt — algebra er sjelden
nødvendig.** To konsekvenser boka skal innarbeide overalt:

1. **Ingen algebra kreves noe sted.** Ingen derivasjon, ingen optimeringsformler,
   ingen Gini/Lorenz-utregning, ingen Samuelson-betingelse, ingen optimal-skatt-
   formalisme. De eneste tallene som forekommer er **enkle budsjettlinje-koordinater**
   (B, D, Lmax) og **2×2-spillmatriser** (småtall som 100/110/120/90). Alt annet er
   verbalt og geometrisk.
2. **Figur + presis prosa er gullstandarden — men verbalt alene er fullgodt.** En
   figur skal alltid forklares i ord (mekanismen); en ren figur uten mekanikk gir
   halvt svar. Der oppgaven ber om drøfting, honoreres at kandidaten viser **begge
   sider** og lar resonnementet bære svaret. Alle eksempler og løsningsforslag i
   boka som bruker figur, skal derfor inneholde (i) en **figurbeskrivelse i ord**
   (akser, kurver, punkter, knekk/Lmax, topper, arealer, U0/U1 navngitt) og
   (ii) den **verbale mekanismen**.

### Kritisk vektingsregel (gjelder HELE boka)

Hver deloppgave har **eksplisitt prosentvekt**, og vekten styrer forventet omfang:
2,5–5 %-spørsmål besvares **kort og stikkordsmessig**; 15–80 %-spørsmål krever
**full drøfting med figur**. Boka lærer studenten å lese vekten som tidsbudsjett
(4 t = 240 min fordelt etter prosent) — dette er en egen ferdighet som drilles i
kap. 0.1–0.2 og i øvingseksamenene.

### Kritisk differensiator-regel (A/B-markørene sensor bruker)

Bunnkravet (E–D) er å **identifisere fenomenet** riktig (uheldig utvalg, valgsyklus,
effektivitetstap) med en enkel korrekt forklaring. Midtsjiktet (C) har **komplett
struktur** på standardoppgavene. Toppsjiktet (A/B) — det veiledningene markerer med
«det er pluss for …» — kjennetegnes av seks konkrete andreordens-poeng som boka
skal drille eksplisitt (de settes opp som `warning`/`tip`-markører i hvert relevant
kapittel):

1. **Fløteskumming er mulig med bare STATISTISK informasjon** (bosted, gruppe,
   markedsføring, tilbudsutforming) — ikke bare med individuell risikoinfo.
2. **Kvotetak-fellen:** et tilleggsforbud (kull/olje) endrer **ikke** totalutslipp
   under et kvotetak (kvoteprisen faller, andre slipper ut mer).
3. **Gratiskvote-nyansen:** gratis kvoter svekker **ikke** kostnadseffektiviteten
   (alternativkostnaden ved å bruke en kvote er kvoteprisen uansett) — bare
   fordelingen endres.
4. **De tre feilaktige tolkningene** av «samfunnsøkonomisk lønnsom»: ≠ Pareto-
   forbedring, ≠ gratis for staten, ≠ objektivt best for samfunnet.
5. **Ordinal vs. kardinal nytte:** å sammenlikne betalingsvillighet (BV) mellom
   grupper sier **ingenting** om hvem som har størst *nyttetap* (fattige oppgir
   lav BV fordi de har lite penger, ikke fordi godet betyr lite).
6. **«Jobber mer ≠ får det bedre»:** nytten kan falle når behovsprøving fjernes
   (U0 → U1), selv om personen jobber mer. Og ved flertoppethet: **agendasetteren
   kan velge voteringsrekkefølge** for å styre utfallet.

**Sensor skiller fagspesifikk kunnskap fra sunn fornuft.** Den viktigste
karakterdifferensiatoren er at kandidaten viser kunnskap *ut over ECON1210 og
allmenn fornuft*. Boka må derfor levere det fagspesifikke — mekanismen bak, ikke
bare navnet.

### Kritisk notasjons-/begrepsregel (gjelder HELE boka)

Symbolbruken er **minimal og lokal**; figurene bærer analysen. De eneste symbolene:
- **Arbeidstilbud/budsjettlinje:** B = støttebeløp, D = inntektsgrense,
  Lmax = maks arbeidstid uten å miste støtte, L0/L1 = tilpasninger, U0/U1/U2 =
  indifferensnivåer, C = konsum/inntekt. Akser: x = arbeidstid/stillingsprosent,
  y = inntekt/konsum. **⚠️ Fritid er godet → indifferenskurvene er speilvendte,
  preferanseretning opp-venstre.**
- **Miljø:** MAC = marginal rensekostnad (marginal abatement cost), p = avgift/
  kvotepris, K = kvotetak (totalutslipp).
- **Spill:** 2×2-matrise, egen nettogevinst før komma, motpartens etter.
- Norsk bokmål; engelsk fagterm i parentes ved første forekomst (adverse selection,
  cream-skimming, moral hazard). Matematikk i LaTeX (`$...$`) der det trengs
  (nesten aldri).

### Forbudte termer (grep-liste for fase 6-verifisering — skal gi null treff)

Algebraisk optimering/derivasjon som løsningsmetode; **Gini**, **Lorenz-kurve** som
regneverktøy (nevnes på sin høyde som «bør kjenne»-begrep, aldri utregnet);
**Ramsey-/Mirrlees-**optimal beskatning; **Samuelson-betingelsen** som formel;
Cournot/Bertrand. Disse hører ikke hjemme i ECON1220 — omfordeling og skatt drøftes
**kvalitativt**, fellesgoder dekkes på **begrepsnivå**.

### Kryssbok-lenker og forkunnskaper (leserkrav — VIKTIG statushåndtering)

ECON1220 er et **anvendt oppfølgingsemne** som bruker mikroverktøyet fra
**ECON1210 Mikroøkonomi 1**: markedskryss/tilbud-etterspørsel, konsument-
og produsentoverskudd (KO/PO/SO), effektivitetstap, eksternaliteter/Pigou,
markedssvikt-katalogen, spillteori/Nash/fangenes dilemma, konsumentteori/
indifferenskurver, arbeidsmarked og minstelønn.

**⚠️ ECON1210 er per nå IKKE bygget (status «skjelett»).** README krever «lenk kun
til kapitler som finnes». Derfor: forkunnskaps-referanser til ECON1210 skrives
**som KLARTEKST** med kapittel-id oppgitt for senere aktivering — **ikke** som
live markdown-lenke. Format i teksten: *«Dette bygger på markedslikevekten fra
ECON1210 Mikroøkonomi 1 (kap. 1.3, `econ1210-1-3` — aktiveres som lenke når den
boka er publisert).»* Fase 6 gjør klartekst → `[tittel](/bok/econ1210/<id>)` når
ECON1210 er live. Relevante ECON1210-mål med id:

| Forkunnskap | ECON1210-kapittel | id (for aktivering) |
|---|---|---|
| Markedslikevekt, tilbud/etterspørsel | 1.3 | `econ1210-1-3` |
| KO/PO/SO-geometrien | 2.1 | `econ1210-2-1` |
| De tre effektivitetskriteriene | 2.2 | `econ1210-2-2` |
| Stykkskatt/-subsidie, dødvektstap | 3.1–3.2 | `econ1210-3-1`, `econ1210-3-2` |
| Maksimalpris/minstepris/minstelønn | 3.3 | `econ1210-3-3` |
| Eksterne virkninger, Pigou-avgift | 4.1 | `econ1210-4-1` |
| Karbonprising, omsettelige kvoter | 4.2 | `econ1210-4-2` |
| Markedssvikt-katalogen, kollektive goder | 4.3 | `econ1210-4-3` |
| Monopol/markedsmakt | 5.1–5.2 | `econ1210-5-1`, `econ1210-5-2` |
| Arbeidsmarkedet som FK-marked | 6.1 | `econ1210-6-1` |
| Konsumentteori, budsjettlinje, indifferenskurver | 7.1 | `econ1210-7-1` |
| Spillteori, Nash, fangenes dilemma | 7.2 | `econ1210-7-2` |

### Pensumankere (marker `(verifiser)` mot gjeldende pensumliste før publisering)

Læreboken skal referere de samme kildene som fasitene siterer — **forankring gir
poeng**, men referansene er utgave-sensitive og må verifiseres:
- **Finansdepartementet R-109 (2014, senere 2021)** og **DFØ (2023)** — nytte-
  kostnadsanalyse og «samfunnsøkonomisk lønnsomt». `(verifiser)` gjeldende utgave.
- **Stiglitz & Rosengard**, *Economics of the Public Sector* — offentlig økonomi,
  markedssvikt-katalogen, asymmetrisk informasjon. `(verifiser)` utgave/kapitler.
- **Nyborg** (forelesningsnotater om atferdsøkonomi og behovsprøving; **Nyborg
  m.fl. 2016** om sosiale normer/gode-onde sirkler). `(verifiser)`.
- **Ostrom** — fellesressurser, betingelser for vellykket lokal forvaltning.
- **Coase / Williamson** — transaksjonskostnader, hvorfor bedrifter finnes.
- **Dølvik (2013)** — den nordiske modellen. `(verifiser)`.
- **Cappelen & Tungodden (2012)** — insentiver/fordeling. `(verifiser)`.
- Refererte synspunkter tilskrives riktig; **direkte sitater unngås** (opphavsrett).
  Oppdiktede referanser er forbudt — bruk kun kildene over.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (rammeverk før anvendelse); frekvensen styrer
*omfanget* (flest kapitler til «må perfekt»-temaene). `sectionNames` = kolonne 2.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart og casehåndverk | 2 | meta | Prioriterings- og skriveverktøyet; kjerne i studieguiden. 2 kap (DNA-drofting): eksamenskart + casehåndverk (hvordan en case-/drøftingsbesvarelse bygges, vekting som tidsbudsjett, A/C/E-skillet). |
| 1 | Velferdsøkonomiens rammeverk | 3 | kunne (fundament) | Første velferdsteorem 1/8 verbalt + markedssvikt-katalogen 2/8 (+ begrep ofte) + ordinal/kardinal nytte 3/8. Fundamentet resten hviler på → 3 kompakte kapitler. |
| 2 | Eksternaliteter og miljøpolitikk | 4 | **PERFEKT** | Miljø/kostnadseffektivitet 3/8 (+ Montreal H2024) + 2 utsatt; 20–50 % vekt; kvotetak-fellen og gratiskvote-nyansen er A/B-markører → 3 teori + drillkapittel. |
| 3 | Asymmetrisk informasjon: uheldig utvalg og fløteskumming | 5 | **PERFEKT (ryggraden)** | **88 % frekvens (7/8), ofte hele storoppgaven (15–80 %).** Signaturoppgaven. Uheldig utvalg + fløteskumming + to-trinns regulering + moral hazard → 4 teori + storoppgave-drill (bokas største del). |
| 4 | Kollektive valg | 4 | **PERFEKT** | Valgsykler + entoppede preferanser 75 % (6/8) + medianvelger; agendamakt er A/B-markør → 3 teori + drillkapittel. |
| 5 | Nytte-kostnadsanalyse | 3 | **PERFEKT** | «Samfunnsøkonomisk lønnsom»/NKA 75 % (6/8) + 4 utsatt; de tre feilaktige tolkningene testes direkte → 2 teori + drillkapittel. |
| 6 | Omfordeling: behovsprøving og arbeidstilbud | 3 | PERFEKT/KUNNE | Arbeidstilbud/budsjettlinje 38 % + behovsprøvd vs. universell 38 % (+ begrep i flere); minstelønn 1/8 (kjenne) → 2 kjernekapitler + minstelønn kompakt. |
| 7 | Spillteori, sosiale normer og institusjoner | 4 | KUNNE (dominerer utsatt) | Spillteori/gode-onde sirkler 50 % + atferdsøkonomi 25 % direkte (dominerer utsatt) + Ostrom/Coase på utsatt → 4 kapitler (god dekning fordi utsatt vekter dette tungt). |
| 8 | Fellesgoder, sosialforsikring og den nordiske modellen | 2 | KUNNE/KJENNE | Fellesgoder ~0/8 som storoppgave (begrepsnivå!) + nordiske modellen 1/8 + internasjonalt miljøsamarbeid 1/8 → 2 kompakte kjenne-kapitler. |
| 9 | Eksamenstrening | 5 | — | Begrepsdrill + modellbesvarelse (A vs. C) + 3 komplette øvingseksamener med A-besvarelse. |

**Avvik fra DNA-drofting-malen (dokumentert):**
1. **Drillkapitler i temadelene** (kap. 2.4, 3.5, 4.4, 5.3) i stedet for kun i
   siste del — de fire tyngste sjangrene er 75–88 %-gjengangere som må drilles rett
   etter teorien (regnefag-grepet). Del 9 beholder begrepsdrill, modellbesvarelse
   og øvingseksamener.
2. **Figur-i-ord** legges inn overalt der temaet er grafisk (miljø, arbeidstilbud,
   kollektive valg, spill), lånt fra econ1210/econ1410 — DNA-drofting nevner bare
   «case-anvendelse».
3. **Fellesgoder nedprioriteres bevisst** (Del 8, begrepsnivå) tross at det er
   kjernepensum i offentlig økonomi — analysen viser at rene fellesgode-/
   gratispassasjer-oppgaver testes **nesten aldri** som storoppgave i ECON1220.
   Boka speiler emnets faktiske vridning mot informasjonssvikt, kollektive valg
   og atferd.
4. **Modellbesvarelse-kravet (≥3):** dekkes av kap. 9.2 (dedikert A-vs.-C på
   signaturoppgaven) **pluss** de 3 øvingseksamenene (9.3–9.5), som hver har full
   A-besvarelse og en kommentert C-besvarelse på den tyngste oppgaven.

---

## 3. Kapitler

Feltene følger DNA-drofting-ens «Skjelett-krav» (id/nummer/tid/prerequisites,
Eksamensbelegg, Begreps-/innholdskontrakt med pensumforankring, Drøftingsakser/
figurbeskrivelser, Case-forslag, Typiske feil, kvote), supplert med
figur-i-ord-krav der temaet er grafisk. Sjangerbokstavene (A–J) refererer til
oppgavetype-katalogen som gjengis i Del 0 (fra analysen §3): **A** asymmetrisk
informasjon i forsikrings-/tjenestemarked, **B** kollektive valg, **C** NKA/
samfunnsøkonomisk lønnsom, **D** arbeidstilbud/behovsprøving (budsjettlinje),
**E** eksternaliteter/miljø (avgift vs. kvoter vs. regulering), **F** spillteori/
sosiale dilemmaer, **G** atferdsøkonomi/paternalisme, **H** markedssvikt-katalogen
(«bør staten gripe inn»), **I** behovsprøvd vs. universell (verbal drøfting),
**J** roterende/historiske (nordiske modellen, minstelønn, internasjonalt
miljøsamarbeid, offentlig vs. privat, Coase, første velferdsteorem). Prioritets-
klasser: **perfekt** / **kunne** / **kjenne**.

---

### Del 0 — Eksamenskart og casehåndverk

#### Kapittel 0.1: Eksamenskartet: slik testes ECON1220

- **id:** `econ1220-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, case-strukturen, temafrekvensene, sensorreglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 8 ordinære + 5 utsatt sett. Skal gjengi: (i) formen: **4-timers digital skoleeksamen, karakter A–F, kun høst**; format varierer (klassisk skoleeksamen H2018–H2020/H2024–H2025, åpen bok H2021–H2023); (ii) case-strukturen: **3–4 hovedoppgaver med eksplisitt prosentvekting**, hver innpakket som «du er rådgiver i departementet» — vektingshistorikk: 25/35/30/10 (H2018), 30/30/15/25 (H2019), 20/20/30/30 (H2020), 25/40/35 (H2021), 25/75 (H2022), 45/35/20 (H2023), 80/20 (H2024), 20/50/25 (H2025); (iii) temafrekvens-tabellen: **asymmetrisk info 88 %**, NKA/samfunnsøkonomisk lønnsom 75 %, kollektive valg 75 %, behovsprøvd/universell 38 %, arbeidstilbud 38 %, miljø/kostnadseffektivitet 38 %, spillteori/sosiale dilemmaer 50 %, atferdsøkonomi 25 % direkte (dominerer utsatt), ordinal/kardinal 38 %, markedssvikt-katalogen 25 % + begrep ofte, fellesgoder **~0 % som storoppgave**; (iv) «**lite matte, mye figurer**» — verbalt svar fullgodt, ingen algebra; (v) sensorreglene: figur + forklaring er én leveranse; **diskusjonen teller, ikke bare konklusjonen**; presiser egen tolkning ved tvil; fagspesifikk kunnskap ut over ECON1210/sunn fornuft avgjør karakteren; åpen-bok-årene krever **egne ord** (nær kopiering av forelesningsnotater trekker); (vi) A/B-differensiatorene (de seks andreordens-poengene fra §1).
- **Innholdskontrakt:** Oppgavetype-katalogen A–J presenteres som studentens sjekkliste med typisk vekt: A asymmetrisk info (15–80 %, ofte storoppgaven), B kollektive valg (10–20 %), C NKA (5–40 %), D arbeidstilbud (7,5–25 %), E miljø (20–50 %), F spillteori (10–40 %), G atferd (5–25 %), H markedssvikt-katalog (2,5–30 %), I behovsprøvd/universell (2,5–15 %), J roterende (1/8 hver). Prognose for neste sett: én stor **asymmetrisk-info-oppgave** (fast-beløp-per-bruker, to-trinns regulering) — nær sikker; én **kollektive-valg**-oppgave (tre partier/tre alternativer, to voteringsrunder) — svært sannsynlig; én **NKA-begrepsrydding** (sant/galt om «samfunnsøkonomisk lønnsom») — svært sannsynlig; deretter roterer én av miljø/behovsprøving/atferd. Leseplan: Del 2–6 «må perfekt», Del 1 + Del 7 «må kunne», Del 8 «bør kjenne».
- **Oppgavesjangre:** Ingen faglige oppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 20/50/25 og 240 minutter — sett opp tidsbudsjett per deloppgave».
- **Typiske feil:** Metafeilene: skrive algebra der verbalt kreves; bruke like mye tid på en 5 %- og en 50 %-oppgave; svare med konklusjon uten drøfting; kopiere forelesningsnotater ordrett (åpen bok).
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 0.2: Casehåndverket: fra departementsoppdrag til økonomisk analyse

- **id:** `econ1220-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1220-0-1`
- **Kapitteltype:** casehåndverk (essay-/drøftingshåndverk)
- **description:** Hvordan en vektet case-besvarelse bygges: problemforståelse → begrepsavklaring med pensumforankring → strukturert drøfting med begge sider → figur i ord → konklusjon som svarer på spørsmålet.
- **Eksamensbelegg:** Bygger på sensorreglene på tvers av alle veiledninger. Skal lære: (i) **vekt = omfang**: kort stikkord ved lav vekt, full drøfting med figur ved høy; (ii) **oversettelsen**: politisk aktualitet (barnetrygd, privatskoler, sykehjem, klimakutt, minstelønn, borgerlønn) → hvilket standardgrep A–J; (iii) **figur-i-ord-malen**: akser, kurver, punkter, knekk/topper, arealer, U-nivåer navngitt + mekanismen i ord; (iv) **drøftingsstrukturen** som skiller A fra C: begge sider fremstilt ærlig, motargument, kobling på tvers (fordeling + effektivitet + atferd), henvisning til tidligere deloppgave er tillatt; (v) **pensumforankring** (navngi FIN R-109, DFØ, Ostrom, Nyborg der relevant); (vi) hva som skiller **A/C/E** ifølge veiledningene.
- **Innholdskontrakt (håndverket):** Fire trinn demonstrert på et gjennomgående mini-case: 1) **problemforståelse** (hva spør oppgaven om, hvilken vekt); 2) **begrepsavklaring** med forankring (definer det sentrale begrepet presist, navngi kilden); 3) **drøfting** (mekanismen bak, begge sider, koblinger, figur der naturlig); 4) **konklusjon** som faktisk svarer (og som ved «ikke noe fasitsvar»-oppgaver anerkjenner at kvaliteten ligger i argumentasjonen). Egen boks: **«C→A-løftet»** — hva som løfter et korrekt, men flatt svar (gjengivelse uten drøfting, tynn forankring) opp til A (mekanisme, motargument, andreordens-poeng, forankring).
- **Case-forslag:** Ett kort departementsoppdrag om barnetrygd som gjennomgås trinn for trinn; ett om sykehjem på fast beløp per beboer (peker fremover til Del 3).
- **Typiske feil:** Deskriptiv gjengivelse uten drøfting; synsing uten fagbegrep/forankring; figur uten forklaring (eller forklaring uten figur der figur bes om); konklusjon som ikke svarer på spørsmålet; feil tidsbruk i forhold til vekt.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Velferdsøkonomiens rammeverk *(prioritet: KUNNE — fundamentet)*

#### Kapittel 1.1: Første velferdsteorem og Pareto: når markedet er effektivt

- **id:** `econ1220-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-0-2` (+ ECON1210 kap. 1.3/2.1/2.2, klartekst)
- **Kapitteltype:** teori (drøfting)
- **description:** Pareto-effektivitet, første velferdsteorem, og drøftingen av hvor urealistiske forutsetningene for perfekt frikonkurranse er.
- **Eksamensbelegg:** Første velferdsteorem/Pareto-optimalitet 1/8 verbalt (H2019 O1c, «makt») + utsatt H2025; typisk 5–15 %. Fasitene ber om drøfting av **forutsetningenes urealisme** (all sosial kontakt måtte være kontraktfestet; ingen private tanker). Prioritet: **kunne** (fundament — begrepsapparatet resten bruker).
- **Begrepskontrakt (m/pensumforankring):** **Pareto-forbedring** (minst én får det bedre, ingen dårligere), **Pareto-optimalitet** (ingen Pareto-forbedring mulig igjen), **første velferdsteorem** (frikonkurranselikevekten er Pareto-optimal — Stiglitz & Rosengard `(verifiser)`), **potensiell Pareto/Kaldor-Hicks** (vinnerne *kunne* kompensert taperne — brua til NKA i Del 5). Forutsetningene: fullstendige markeder, pristakere, ingen eksternaliteter/informasjonssvikt/markedsmakt — dvs. markedssviktene i kap. 1.2 er nettopp brudd på disse.
- **Drøftingsakser:** (i) Pareto-kriteriet er **svakt** (sier ingenting om fordeling — en ekstremt skjev tilstand kan være Pareto-optimal); (ii) forutsetningenes urealisme (verbal drøfting à la H2019: markedet forutsetter at *alt* prises, også det vi ikke vil ha marked for); (iii) effektivitet ≠ rettferdighet (setter opp omfordelingsdrøftingen i Del 6). Andre velferdsteorem nevnes kort (enhver Pareto-optimal tilstand kan nås med riktig startfordeling + marked) — «bør kjenne».
- **Case-forslag:** «En kollega hevder at siden markedet gir en Pareto-optimal løsning, er statlig inngripen alltid unødvendig. Drøft.»
- **Typiske feil:** Lese Pareto-optimalitet som «rettferdig» eller «best for alle»; tro at første velferdsteorem gjelder uansett (glemme forutsetningene); blande Pareto-forbedring og potensiell Pareto.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Markedssvikt-katalogen og styringssvikt: bør staten gripe inn?

- **id:** `econ1220-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-1-1`
- **Kapitteltype:** teori (drøfting)
- **description:** De fem kanoniske markedssviktene, hvordan man kobler et tiltak til hvilken svikt det retter — og motargumentet styringssvikt.
- **Eksamensbelegg:** Markedssvikt generelt (definisjon + typer) 2/8 (H2019 O1 full, H2021 O2a) + utsatt H2025; opptrer dessuten som begreps-innledning i mange sett; sjanger H, 2,5–30 %. Prioritet: **kunne** (høy avkastning som rammeverk — hele boka henger på katalogen).
- **Begrepskontrakt (m/pensumforankring):** **Markedssvikt** = forhold som gjør at markedslikevekten *ikke* blir Pareto-optimal (definert mot kap. 1.1). De **fem kanoniske** (Stiglitz & Rosengard `(verifiser)`): (1) markedsmakt, (2) fellesgoder, (3) eksternaliteter, (4) asymmetrisk informasjon, (5) manglende/ufullstendige markeder (stordriftsfordeler kan nevnes). Ingen absolutt fasitliste — poenget er forståelsen. **Styringssvikt** (government failure): byråkraters/politikeres egeninteresse, korrupsjon, lobbyisme, reguleringskostnader, informasjonsproblemet.
- **Drøftingsakser (KATALOG-GREPET — dette er kjernen):** For et gitt tiltak, identifiser *hvilken* svikt som begrunner det (tabell: vaksiner → positiv eksternalitet; grunnforskning → fellesgode; CO₂-avgift → negativ eksternalitet; uføre-/ledighetstrygd → asymmetrisk informasjon; forbud mot prissamarbeid → markedsmakt; fiskekvoter → fellesressurs). Deretter motargumentet: **«markedssvikt finnes» ⇏ «staten bør alltid regulere»** — vei reguleringskostnader, styringssvikt og at ikke all svikt (moral hazard) kan fikses av staten heller. Dette er en fast drøftingsakse på tvers av boka.
- **Case-forslag:** «Er utsagnet ‘Når markedssvikt foreligger, bør staten alltid regulere’ riktig? Gjør rede for minst fem typer markedssvikt og begrunn svaret.»
- **Typiske feil:** Hoppe fra «svikt finnes» rett til «staten bør regulere» uten å veie styringssvikt (feilkatalog #12); ramse opp typene uten å kunne koble tiltak → svikt; overse moral hazard-symmetrien (svikt finnes i begge systemer).
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 1.3: Nytte: ordinal vs. kardinal, interpersonlig sammenlikning og velferdsfunksjonen

- **id:** `econ1220-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-1-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvorfor ordinal nytte ikke kan summeres mellom personer — og hvorfor det likevel er nettopp det man gjør når man summerer betalingsvillighet.
- **Eksamensbelegg:** Ordinal vs. kardinal nytte / interpersonlig sammenlikning 3/8 (H2020 O4d, H2021 O3g, H2023 O3) + utsatt H2020 (velferdsfunksjon); 5–15 %. **Toppsjikt-markør (A/B):** at BV-sammenlikning mellom grupper ikke sier noe om nyttetap. Prioritet: **kunne** (kobler tett til NKA i Del 5).
- **Begrepskontrakt (m/pensumforankring):** **Ordinal nytte** (rangerer, kan ikke summeres/sammenliknes mellom personer), **kardinal nytte** (måler nivå/differanser), **interpersonlig (u)sammenliknbarhet**, **samfunnets velferdsfunksjon** (hvordan individnytter aggregeres — utilitaristisk sum vs. Rawlsiansk maksimin, kort), **avtakende grensenytte av penger** (fattige verdsetter en ekstra krone mer). Kobling til Nyborg og til NKA-litteraturen (FIN R-109) `(verifiser)`.
- **Drøftingsakser:** (i) **Kjerneparadokset:** når NKA summerer betalingsvillighet på tvers av personer, forutsetter man i praksis at én krone er like mye verdt for alle — en *kontroversiell normativ* forutsetning; (ii) **BV ≠ nyttetap:** fattige oppgir lav BV fordi de har lite penger, ikke fordi godet betyr lite for dem — så en lavere oppgitt BV hos en gruppe kan skjule et *større* nyttetap; (iii) hvorfor «objektivt best for samfunnet» krever både lik grensenytte av penger *og* et utilitaristisk verdisyn (setter opp de tre feilaktige tolkningene i kap. 5.2).
- **Case-forslag:** «En utredning viser at de rikes samlede betalingsvillighet for et tiltak er høyere enn de fattiges. Kan vi slutte at tiltaket gir de rike størst nytte? Drøft.»
- **Typiske feil:** Summere ordinal nytte som om den var kardinal; tolke BV-sum som nytte; lese lavere BV hos en gruppe som lavere nyttetap (feilkatalog #2).
- **Quiz: 18 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (1.A Pareto/første velferdsteorem + forutsetningsdrøfting, sjanger J; 1.B markedssvikt-katalogen med fem tiltak som skal kobles til svikt, sjanger H; 1.C styringssvikt vs. markedssvikt — «bør staten alltid regulere?», sjanger H; 1.D ordinal/kardinal nytte og BV-vs-nyttetap på eksamensnivå, sjanger C-fundament).

---

### Del 2 — Eksternaliteter og miljøpolitikk *(prioritet: PERFEKT)*

#### Kapittel 2.1: Eksterne virkninger og Pigou-avgiften

- **id:** `econ1220-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-1-2` (+ ECON1210 kap. 4.1, klartekst)
- **Kapitteltype:** teori (figur + drøfting)
- **description:** Negative og positive eksterne virkninger, hvorfor markedet omsetter for mye/for lite, og Pigou-avgiften som fjerner effektivitetstapet.
- **Eksamensbelegg:** Eksterne virkninger som begrep i flere sett; fundamentet for miljøoppgaven (kap. 2.3, 20–50 %). **Sukker- vs. CO₂-avgift-skillet (H2020 O2c):** CO₂-avgift korrigerer en *ekstern* virkning; sukkeravgift handler primært om *interne* virkninger/nåtidsskjevhet (peker til kap. 7.4). Prioritet: **perfekt** (bærer Del 2).
- **Begrepskontrakt (m/pensumforankring):** **Ekstern virkning** = kostnad/gevinst ved produksjon/forbruk som rammer/tilfaller andre enn beslutningstakeren og ikke prises i markedet (eksempler begge veier: utslipp; vaksiner/smittevern, teknologiutvikling). **Samfunnsøkonomisk marginalkostnad** = privat marginalkostnad + marginal skadekostnad. **Pigou-avgift** = marginal skadekostnad (Stiglitz & Rosengard `(verifiser)`). Skillet **ekstern** (rammer andre) vs. **intern** virkning (rammer en selv — hører til atferdsøkonomi/paternalisme).
- **Figurbeskrivelse i ord + drøftingsakser:** Figur: tilbudskurve = privat MK, samfunnsøkonomisk MK = parallell kurve marginal skadekostnad over; markedslikevekt der etterspørsel krysser privat MK (for mye omsatt), optimum der etterspørsel krysser samfunnsøkonomisk MK; dødvektstrekanten av *uregulert* eksternalitet navngis. Pigou-avgift løfter privat MK opp til samfunnsøkonomisk → riktig mengde, tapet **fjernes**. Kontrast (fast drøftingsakse): en avgift i et *velfungerende* marked skaper tap; en avgift mot en *eksternalitet* fjerner tap. Positive eksternaliteter speilvendt → subsidie er riktig.
- **Case-forslag:** «Produksjonen av en vare gir utslipp som påfører samfunnet 25 kr per enhet i skade. Forklar med figur hvorfor markedet produserer for mye, og vis at en avgift på 25 kr gir riktig mengde.»
- **Typiske feil:** Behandle Pigou-avgiften som et velferdstap (glemme at utgangspunktet ikke var effektivt); blande ekstern og intern virkning (CO₂ vs. sukker); glemme at også *positive* eksternaliteter er markedssvikt.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.2: Skattenes tredeling: vridende, korrigerende og lumpsum

- **id:** `econ1220-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1220-2-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvorfor de fleste skatter gir effektivitetstap, hvorfor korrigerende skatter er unntaket, og hva som gjør en skatt lumpsum.
- **Eksamensbelegg:** Begrepstrioen brukes i miljø- og omfordelingsoppgaver (kobler til Del 6 lumpsum-testen); sjanger E/I. Prioritet: **perfekt** (fundament for både miljø og omfordeling).
- **Begrepskontrakt (m/pensumforankring):** **Vridende skatt** (endrer relative priser utilsiktet → effektivitetstap, f.eks. inntektsskatt), **korrigerende skatt** (endrer tilsiktet → effektivitetsgevinst, f.eks. CO₂-avgift = Pigou), **lumpsum** (kan ikke påvirkes av atferd → ingen vridning). **Skattefinansieringens kostnad**: å finansiere overføringer med vridende skatt gir effektivitetstap — argument mot dyre universelle ordninger (kobler til Del 6).
- **Drøftingsakser:** (i) hvorfor lumpsum er teoretisk ideelt, men praktisk vanskelig (må ikke kunne påvirkes → koppskatt-problemet, urettferdig); (ii) **lumpsum-testen** (introduseres her, brukes i kap. 6.2): en overføring er lumpsum bare hvis mottakeren ikke kan påvirke den ved atferd — overgangsstønad er *ikke* lumpsum (avhenger av inntekt, sivilstatus, barn); (iii) universell overføring ≈ lumpsum (ren inntektseffekt), behovsprøving vrir.
- **Case-forslag:** «Sorter tre skatter — inntektsskatt, CO₂-avgift og en fast årlig avgift per innbygger — etter om de er vridende, korrigerende eller lumpsum, og forklar effektivitetsvirkningen av hver.»
- **Typiske feil:** Kalle en CO₂-avgift vridende (den *fjerner* et tap); kalle universell overføring vridende (den er nær lumpsum — det er behovsprøvingen som vrir, feilkatalog #8); tro at en behovsprøvd ytelse er lumpsum.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Avgift vs. kvoter vs. direkte regulering: like marginale rensekostnader

- **id:** `econ1220-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ1220-2-1`, `econ1220-2-2` (+ ECON1210 kap. 4.2, klartekst)
- **Kapitteltype:** teori (figur + drøfting)
- **description:** Kjerneargumentet i miljøoppgaven: lik avgift eller omsettelige kvoter utjevner marginale rensekostnader → billigst samlet kutt. Og de to A/B-fellene: kvotetak-fellen og gratiskvote-nyansen.
- **Eksamensbelegg:** Miljøoppgaven 3/8 (H2020, H2021, H2025) + 2 utsatt; 20–50 % vekt. **Kvotetak-fellen (H2023 O2b, H2025-utsatt e)** og **gratiskvote-nyansen (H2025 O2c)** er faste A/B-markører; svaret kan gis verbalt eller med figur. Prioritet: **perfekt** (bokas nest tyngste enkelttema etter asymmetrisk info).
- **Innholdskontrakt + figur-i-ord:** **Kostnadseffektivitets-argumentet (kjernen):** en **lik avgift** ELLER **omsettelige kvoter** utjevner marginal rensekostnad (MAC) på tvers av bedrifter → målet nås til lavest total kostnad. Regelen: rens hvis MAC < avgift/kvotepris, ellers betal/kjøp kvote → MAC = p for alle. **Direkte regulering** (alle kutter X %) er ineffektiv fordi rensekostnadene varierer. Figur i ord: aggregert MAC-kurve; kvotetak K binder totalutslipp; kvotepris/avgift p der samlet rensing gir utslipp = K. **De tre kriteriene** (NOU/Grønn skattekommisjon `(verifiser)`): måloppnåelse, kostnadseffektivitet, forurenser betaler. **A/B-poeng 1 — kvotetak-fellen:** et *tilleggs*forbud (kull/olje) under et kvotetak endrer **ikke** totalutslipp (kvoteprisen faller, andre slipper ut mer) — under avgift/direkte regulering *kan* et slikt forbud redusere utslipp. **A/B-poeng 2 — gratiskvote-nyansen:** gratis tildeling svekker **ikke** kostnadseffektiviteten (alternativkostnaden ved å bruke en kvote = kvoteprisen uansett), men avgjør **fordelingen** og bryter «forurenser betaler» → forklarer hvorfor industrieier foretrekker kvoter. **Subsidie av grønt alternativ:** vrir relativ pris riktig vei, men øker *total* bruk, staten må plukke vinnere, forurenser betaler ikke.
- **Case-forslag:** «Sammenlign tre virkemidler for å halvere industriens CO₂-utslipp: pålegg om 50 % kutt per bedrift, lik avgift per kg, og gratis omsettelige kvoter. Hvilket er mest kostnadseffektivt, og hvorfor endrer et etterfølgende kullforbud ingenting under kvotesystemet?»
- **Typiske feil:** Miljøoppgaven som moralessay uten kjerneargumentet lik pris → like MAC → billigst kutt (feilkatalog #10-analog); tro at tilleggsforbud reduserer totalutslipp under kvotetak (feilkatalog #4); tro at gratiskvoter ødelegger kostnadseffektiviteten (feilkatalog #6); blande vridende og korrigerende avgift (#5).
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 2.4: Drill: miljøvirkemiddel-oppgaven

- **id:** `econ1220-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ1220-2-3`
- **Kapitteltype:** drill (sjanger E)
- **description:** Sjangerdrill på miljøoppgaven: vurdering av virkemiddelpakker mot de tre kriteriene, i stadig ny innpakning, med kvotetak- og gratiskvote-fellene innebygd.
- **Eksamensbelegg:** Dekker sjanger E (38 % + Montreal-varianten; 20–50 % vekt). Rotasjonen: avgift vs. uomsettelige kvoter vs. omsettelige kvoter; gratis vs. auksjonert tildeling; kullforbud under kvotetak; subsidie til grønt alternativ; sukker- vs. CO₂-avgift (ekstern vs. intern). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) identifiser eksternaliteten og målet; 2) list virkemidlene; 3) vurder hvert mot de tre kriteriene i fast rekkefølge (måloppnåelse → kostnadseffektivitet → forurenser betaler); 4) kjerneargumentet lik pris → like MAC → billigst kutt skal alltid med; 5) nyansene der de er relevante (kvotetak-fellen, gratiskvote-nyansen, grensene for prising: lokal forurensing/akutt farlig → forbud); 6) konkluder kort hvis spurt. Gjennomskrevet eksempel-case med sensor-margnotater (hva gir uttelling ved hvert steg). 8–12 oppgaver i nyskrevne case (skipsfart, oppdrettsavrenning [lokal → prising uegnet], luftfartskvoter med gratistildeling, avgiftsfritak for kraftkrevende industri, subsidiert hydrogen, kommunalt vedfyringsforbud), alle besvarbare verbalt.
- **Oppgavesjangre:** E (+ J-varianten internasjonalt miljøsamarbeid, peker til kap. 8.2). Mønstereksempel: «Regjeringen foreslår gratis utslippskvoter til eksportindustrien og full avgift for alle andre. Vurder forslaget mot de tre kriteriene, og forklar spesielt om gratistildelingen svekker kostnadseffektiviteten.»
- **Typiske feil:** Kvotetak-fellen og gratiskvote-fellen i alle varianter; anvende uniform prising på lokal forurensing; utelate kriteriestrukturen og drøfte løst.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A eksternalitets-begrep + Pigou-figur i ord med intern/ekstern-skillet, sjanger E+H; 2.B skattenes tredeling anvendt på tre skatter, sjanger E+I; 2.C trekriterie-vurdering avgift/kvoter/regulering med kvotetak-fellen, sjanger E; 2.D full miljøoppgave i storoppgave-format med gratiskvote-nyanse og forbud-under-tak, sjanger E+J).

---

### Del 3 — Asymmetrisk informasjon: uheldig utvalg og fløteskumming *(prioritet: PERFEKT — RYGGRADEN)*

#### Kapittel 3.1: Uheldig utvalg og dødsspiralen

- **id:** `econ1220-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-1-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvorfor asymmetrisk informasjon før kontraktinngåelse gir en dødsspiral i private forsikringsmarkeder — og hvorfor universelle ordninger unngår den.
- **Eksamensbelegg:** Del av signaturoppgaven (asymmetrisk info 88 %). Uheldig utvalg testes i H2019, H2020, H2021, H2022, H2023, H2024, H2025 + utsatt. Prioritet: **perfekt** (bokas viktigste enkelttema).
- **Begrepskontrakt (m/pensumforankring):** **Asymmetrisk informasjon** (den ene parten vet mer), **uheldig utvalg / adverse selection** (skjult *type* før avtale), skillet fra **atferdsrisiko / moral hazard** (skjult *handling* etter avtale, kap. 3.4). Stiglitz & Rosengard `(verifiser)`; Akerlof-«lemons» nevnes som klassisk referanse `(verifiser)`.
- **Drøftingsakser + logisk struktur (ingen figur — ren mekanisme):** **Dødsspiralen:** høyrisiko-typene er mest interessert i forsikring → selskapet må sette høy premie → lavrisiko trekker seg → gjennomsnittsrisikoen i puljen stiger → premien må opp igjen → … → tilbudet blir dyrt/dårlig eller forsvinner for noen grupper. **Nøkkelpoeng (fagspesifikt, over sunn fornuft):** dette unngås **automatisk i universelle/skattefinansierte ordninger** fordi *alle* er med — ingen kan velge seg ut. Kobling til fordeling (hvem betaler premie vs. skatt) og til nåtidsskjevhet (nåtidsskjeve utsetter å tegne forsikring — kap. 7.4).
- **Case-forslag:** «Et privat selskap vil tilby helseforsikring i et fritt marked. Forklar hvorfor markedet kan bryte sammen selv om alle i utgangspunktet ønsker forsikring, og hvorfor en obligatorisk offentlig ordning ikke har dette problemet.»
- **Typiske feil:** Blande uheldig utvalg (skjult type, før avtale) og moral hazard (skjult handling, etter avtale); glemme at universelle ordninger fjerner uheldig utvalg; stoppe ved «høyrisiko søker mest» uten å vise hele spiralen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Fløteskumming: også med bare statistisk informasjon

- **id:** `econ1220-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-3-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Fløteskumming i fast-beløp-per-bruker-markeder — og det sentrale A/B-poenget: det kan gjøres uten å kjenne den enkeltes risiko, via statistikk.
- **Eksamensbelegg:** Kjernemomentet i signaturoppgaven (H2020, H2022, H2023, H2025 + utsatt). **A/B-differensiator:** fløteskumming mulig med bare *statistisk* informasjon. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Fast-beløp-per-bruker-oppsettet:** staten/kommunen betaler et fast beløp per bruker/elev/pasient; private aktører produserer og velger fritt kunder; ingen ekstrabetaling tillatt → en kunde er **lønnsom hvis kostnaden < det faste beløpet**, ulønnsom ellers. **Fløteskumming / cream-skimming** = systematisk tiltrekke lønnsomme og unngå ulønnsomme kunder. Nyborg/Stiglitz-forankring `(verifiser)`.
- **Drøftingsakser (A/B-poenget eksplisitt):** **Fløteskumming er mulig selv om individuell risiko er PRIVAT** — via *statistisk* informasjon: velge lokalisering i strøk med lav-kostnadsbrukere, målrettet markedsføring mot lønnsomme grupper, utforme et lite attraktivt tilbud til de dyre gruppene slik at de søker seg vekk. Boka skal drille at kandidaten *ikke* stopper ved «de kjenner ikke den enkeltes risiko, altså umulig» — det er nettopp fellen (feilkatalog #3). Kobling til fordeling: de dyre gruppene (syke, svake elever) blir skadelidende.
- **Case-forslag:** «Alle sykehjem drives privat, men finansieres av kommunen med et fast beløp per beboer. Kan sykehjemmene drive fløteskumming selv om de ikke kjenner den enkelte søkers helse? Forklar hvordan.»
- **Typiske feil:** Påstå at fløteskumming er umulig uten individuell risikoinfo (feilkatalog #3 — selve A/B-fellen); blande fløteskumming (velge kunder) og uheldig utvalg (kundene velger seg selv); glemme koblingen til fordeling.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: To-trinns regulering og obligatorisk forsikring

- **id:** `econ1220-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-3-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Standard-reguleringsgrepet sensor spør om nesten hvert år: fra fritt kundevalg til må-ta-imot/venteliste — hva det løser og hva det ikke løser.
- **Eksamensbelegg:** Den **to-trinns reguleringsstrukturen** går igjen nesten hvert år (H2019 O2b, H2025-utsatt c osv.). Prioritet: **perfekt** (dette er «trinn 2» i storoppgaven, der C-nivået skilles fra A).
- **Begrepskontrakt + drøftingsakser:** **Trinn 1 — fritt kundevalg:** fløteskumming fungerer (kap. 3.2). **Trinn 2 — regulering:** må-ta-imot / venteliste i søkerrekkefølge / kontraktfestet antall plasser → fløteskumming **begrenses kraftig**, men kan **fortsatt skje ved å påvirke hvem som søker** (lokalisering, markedsføring, tilbudsutforming). **Obligatorisk forsikring + forbud mot å nekte kunder:** uheldig utvalg **fjernes** (alle er med), men fløteskumming **består** (kan fortsatt vri seg unna dyre). Sentral A/B-innsikt: de to problemene løses av *ulike* grep — obligatorisk deltakelse fjerner uheldig utvalg, mottaksplikt begrenser fløteskumming, men ingen enkeltregel fjerner begge helt. **Moral hazard-symmetrien** (kap. 3.4) nevnes: atferdsrisiko finnes i *begge* systemer.
- **Case-forslag:** «Endres svaret om sykehjemmene må ta imot søkere i den rekkefølgen de melder seg? Kan de fortsatt fløteskumme? Hva om kommunen i tillegg gjør det obligatorisk å ta imot alle?»
- **Typiske feil:** Tro at mottaksplikt fjerner fløteskumming helt (den kan fortsatt påvirke hvem som søker); tro at obligatorisk forsikring også fjerner fløteskumming (den fjerner uheldig utvalg); ikke skille hvilket grep som løser hvilket problem.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.4: Atferdsrisiko og prinsipal-agent: fastlønn vs. prestasjonslønn

- **id:** `econ1220-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-3-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Skjult handling etter kontraktinngåelse, moral hazard-symmetrien, og prinsipal-agent-avveiingen mellom fastlønn og prestasjonslønn ved målbare vs. ikke-målbare resultater.
- **Eksamensbelegg:** Moral hazard er fast bimoment i forsikringsoppgavene (sensor belønner at det påpekes); prinsipal-agent/offentlig vs. privat produksjon (anbud, fastlønn vs. prestasjonslønn) er utsatt-favoritt (H2022-utsatt). Prioritet: **kunne** (høy avkastning som bimoment i storoppgaven).
- **Begrepskontrakt (m/pensumforankring):** **Atferdsrisiko / moral hazard** = skjult *handling* etter avtale (forsikret tar mindre forholdsregler; leverandør kutter kvalitet). **Prinsipal-agent-problem** (prinsipal kan ikke observere agentens innsats). **Fastlønn** (deler ikke risiko, svakt innsatsinsentiv) vs. **prestasjonslønn** (sterkt insentiv, men vrir mot det *målbare* på bekostning av det ikke-målbare). Stiglitz & Rosengard `(verifiser)`.
- **Drøftingsakser:** (i) **moral hazard-symmetrien:** atferdsrisiko finnes i *både* offentlig og privat system → sjelden et rent argument for det ene (fast A/B-poeng, feilkatalog #11); (ii) **målbarhets-avveiingen:** prestasjonslønn/anbud fungerer bra når resultatet er lett målbart, dårlig når kvalitet er vanskelig å måle (sykehjem: leverandøren kutter det som ikke måles); (iii) kobling til styringssvikt (kap. 1.2) og til offentlig vs. privat produksjon (kap. 8.1).
- **Case-forslag:** «En kommune vurderer å sette sykehjemsdrift ut på anbud med betaling per beboer. Drøft hvordan valget mellom fast betaling og resultatbasert betaling påvirker kvaliteten på det som er vanskelig å måle.»
- **Typiske feil:** Bruke moral hazard som ensidig argument mot privat drift (glemme symmetrien); blande moral hazard (handling) og uheldig utvalg (type); tro at prestasjonslønn alltid er best (ignorere ikke-målbar kvalitet).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.5: Drill: forsikrings- og tjenestemarkedet (signaturoppgaven)

- **id:** `econ1220-3-5` · **number:** 3.5 · **estimatedMinutes:** 85 · **prerequisites:** `econ1220-3-4`
- **Kapitteltype:** drill (sjanger A — storoppgaven)
- **description:** Sjangerdrill på emnets signaturoppgave: fra fast-beløp-per-bruker-oppsett til komplett to-trinns-analyse med fløteskumming, uheldig utvalg, regulering, moral hazard, fordeling og atferd.
- **Eksamensbelegg:** Dekker sjanger A (88 %, ofte hele storoppgaven 15–80 %). Casen roterer bare innpakning: helseforsikring, privatskoler, gratis helse, eneforsørger-forsikring, sykehjem, ledighetstrygd. Prioritet: **perfekt** (bokas viktigste drillkapittel).
- **Innholdskontrakt (løsningsoppskrift — sensors foretrukne struktur):** Algoritme: 1) **oppsett:** fast beløp per bruker → lønnsom hvis kostnad < beløp; 2) **uheldig utvalg:** dødsspiralen + at universelle ordninger unngår den; 3) **fløteskumming:** hvordan, inkl. **med bare statistisk info** (A/B-poenget); 4) **to-trinns regulering:** fritt valg → mottaksplikt/venteliste (begrenser, fjerner ikke) → obligatorisk (fjerner uheldig utvalg, ikke fløteskumming); 5) **moral hazard:** påpek symmetrien; 6) **koblinger:** fordeling (hvem betaler premie vs. skatt; uforsikrede fattige rammes) + nåtidsskjevhet (utsetter å tegne). Gjennomskrevet eksempel-case med sensor-margnotater (bl.a. margnotat ved statistisk-info-poenget: «her skilles A fra C»). 8–12 oppgaver i nyskrevne innpakninger (barnehager på fast tilskudd, tannhelseforsikring, hjemmetjeneste på anbud, arbeidsledighetsforsikring, privat skoletilbud med stykkpris), hver på storoppgave-nivå og besvarbar verbalt.
- **Oppgavesjangre:** A. Mønstereksempel (full deloppgave-kjede): «(a) Forklar hvorfor et fritt marked for denne tjenesten kan bryte sammen. (b) Kan tilbyderne fløteskumme uten å kjenne den enkeltes risiko? (c) Hjelper det å kreve at de tar imot alle som søker? (d) Hva om ordningen gjøres obligatorisk? (e) Hvem vinner og taper på hvert alternativ?»
- **Typiske feil:** Hele Del 3-repertoaret samlet: uheldig utvalg/moral hazard-forveksling, statistisk-info-fellen (#3), tro at regulering fjerner fløteskumming helt, glemme moral hazard-symmetrien (#11), glemme fordelingskoblingen.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A uheldig utvalg + dødsspiral + hvorfor universelle ordninger unngår den, sjanger A; 3.B fløteskumming med statistisk info + to-trinns regulering, sjanger A; 3.C moral hazard-symmetri og prinsipal-agent/anbud, sjanger A+J; 3.D full signaturoppgave i storoppgave-format med alle fem momentene og koblinger, sjanger A).

---

### Del 4 — Kollektive valg *(prioritet: PERFEKT)*

#### Kapittel 4.1: Valgsykler og roterende flertall

- **id:** `econ1220-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1220-1-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Hvorfor flertallsvotering kan gi sykliske utfall der A slår B, B slår C, men C slår A — og hvorfor rekkefølgen da avgjør.
- **Eksamensbelegg:** Kollektive valg 75 % (H2018, H2019, H2021, H2022, H2023, H2024); valgsykler er kjernen; 10–20 %. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Valgsyklus / roterende flertall** (A ⟶ B ⟶ C ⟶ A ved parvis flertallsvotering), **Condorcet-paradokset** `(verifiser)`, **agendasetter** (den som bestemmer voteringsrekkefølgen), **parvis flertallsvotering**. Kobling til Arrows umulighetsteorem nevnes kort (ingen ideell aggregeringsregel) — «bør kjenne».
- **Drøftingsakser:** (i) hvorfor sykelen betyr at **avstemningsrekkefølgen avgjør utfallet**, og at en agendasetter dermed kan styre resultatet; (ii) at dette er et *fagspesifikt* poeng over sunn fornuft — flertallsvotering er ikke nødvendigvis «rettferdig» eller entydig; (iii) setter opp løsningen (entoppede preferanser, kap. 4.2) som betingelsen for at sykler *ikke* oppstår.
- **Case-forslag:** «Tre partier med gitte preferanser skal votere over tre budsjettalternativer. Vis at flertallet kan rotere, og forklar hvorfor den som setter dagsordenen da kan bestemme utfallet.»
- **Typiske feil:** Tro at flertallsvotering alltid gir et entydig svar; overse at rekkefølgen kan avgjøre; blande valgsyklus (utfallsnivå) og entoppethet (preferansestruktur).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Entoppede preferanser og preferanse-topp-diagrammet

- **id:** `econ1220-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-4-1`
- **Kapitteltype:** teori (figur + drøfting)
- **description:** Verktøyet som avgjør om valgsykler kan oppstå: preferanse-topp-diagrammet, og den verifiserende parvise voteringen.
- **Eksamensbelegg:** Entoppede preferanser er sensors foretrukne verktøy (H2021, H2022, H2023 + utsatt H2021 flertoppet-varianten). **A/B-poeng:** ved flertoppethet kan agendasetteren velge rekkefølge for ønsket utfall. Prioritet: **perfekt**.
- **Innholdskontrakt + figur-i-ord:** Figur: **alternativene langs x-aksen** (tips: plasser status quo/mellomalternativet i midten, f.eks. A–C–B), **preferanserang** (best øverst) langs y-aksen, **én kurve per velgergruppe**. **Entoppet** = det finnes **én** x-ordning der ingen kurve har mer enn *én* topp → **ingen valgsykler** → rekkefølgen er irrelevant. Sentralt (fagspesifikt): det holder å finne **én** fungerende ordning for å konkludere entoppet; for å konkludere **flertoppet** må man i prinsippet sjekke *alle* ordninger. **Verifisering:** regn ut parvis flertallsvotering med like store grupper og vis entydig vinner (eller at rekkefølgen faktisk avgjør ved flertoppethet). Dette er den geometriske ferdigheten boka driller — beskriv diagrammet i ord.
- **Case-forslag:** «Uten å vite mandatfordelingen — kan du avgjøre om voteringsrekkefølgen bestemmer utfallet? Tegn preferanse-topp-diagrammet, finn en ordning som gir entoppethet, og kontroller med parvis votering.»
- **Typiske feil:** Glemme at det holder å finne *én* ordning for entoppethet, men at man må sjekke *alle* for flertoppet (feilkatalog #9); hoppe over den verifiserende parvise voteringen; ikke merke aksene i diagrammet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Medianvelgeren, agendamakt og aggregert betalingsvillighet

- **id:** `econ1220-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-4-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Medianvelger-teoremet, hvorfor medianvelgeren ikke nødvendigvis velger det samfunnsøkonomisk beste, og hvordan aggregert BV kan gi et annet utfall.
- **Eksamensbelegg:** Medianvelger (H2019 O4b, H2021 O3d–e); 10–20 %. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring):** **Medianvelger-teoremet** (ved entoppede preferanser avgjøres flertallsvalg av medianvelgeren) `(verifiser)`, **aggregert betalingsvillighet** (summert BV — NKA-kriteriet), skillet fra flertallsavgjørelse.
- **Drøftingsakser:** (i) medianvelgeren stemmer **ikke nødvendigvis** på det samfunnsøkonomisk mest lønnsomme alternativet; (ii) **en rik mindretallsgruppe med sterk BV kan «kjøpe» et NKA-resultat** som flertallet ikke ville valgt — spenningen mellom demokratisk flertall og aggregert BV; (iii) kobling til ordinal/kardinal (kap. 1.3): aggregert BV er ikke det samme som «flest fornøyde velgere».
- **Case-forslag:** «Et flertall vil ha lav bompengesats, men en liten gruppe med høy betalingsvillighet vil ha ny vei. Forklar hvordan flertallsvalg og en nytte-kostnadsanalyse kan gi ulike svar, og hva som da er ‘riktig’.»
- **Typiske feil:** Tro at medianvelgeren velger det NKA-optimale; blande flertallsvotering og aggregert BV; overse at medianvelger-teoremet forutsetter entoppethet.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.4: Drill: kollektive-valg-oppgaven

- **id:** `econ1220-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ1220-4-3`
- **Kapitteltype:** drill (sjanger B)
- **description:** Sjangerdrill på kollektive-valg-oppgaven: fra tre partier/tre alternativer til fullført entoppet-analyse med diagram, parvis votering og agendamakt-drøfting.
- **Eksamensbelegg:** Dekker sjanger B (75 %; 10–20 %). Rotasjonen: entoppet vs. flertoppet, to voteringsrunder, agendasetterens rekkefølgevalg (H2021-utsatt), medianvelger vs. aggregert BV. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme: 1) sett opp preferanse-topp-diagrammet (status quo i midten); 2) let etter én ordning uten flertoppede kurver → entoppet? 3) hvis entoppet: konkluder ingen sykler, rekkefølgen irrelevant, medianvelgeren avgjør; 4) hvis flertoppet: vis at agendasetteren kan velge rekkefølge for ønsket utfall; 5) **verifiser alltid** med parvis flertallsvotering (like store grupper); 6) drøft medianvelger vs. aggregert BV hvis spurt. Gjennomskrevet eksempel-case med sensor-margnotater (margnotat: «her: det holder med én ordning»). 8–12 oppgaver med nyskrevne partier/alternativer og preferanserekker, både entoppede og flertoppede.
- **Oppgavesjangre:** B. Mønstereksempel: «Tre partier skal votere over tre skattenivåer i to runder. (a) Er preferansene entoppede? (b) Kan rekkefølgen avgjøre? (c) Hvis statsministeren setter dagsordenen, hvordan sikrer hun sitt ønskede utfall? (d) Kontroller med parvis votering.»
- **Typiske feil:** Entoppet/flertoppet-forveksling (#9); glemme verifiserende votering; ikke se agendasetterens makt ved flertoppethet.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A valgsykler og roterende flertall med parvis votering, sjanger B; 4.B entoppet-analyse med preferanse-topp-diagram, sjanger B; 4.C medianvelger vs. aggregert BV, sjanger B+C; 4.D full kollektive-valg-oppgave med flertoppethet og agendamakt, sjanger B).

---

### Del 5 — Nytte-kostnadsanalyse *(prioritet: PERFEKT)*

#### Kapittel 5.1: De tre analysetypene, basisalternativet og verdsetting av ikke-markedsgoder

- **id:** `econ1220-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-1-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Nytte-kostnadsanalyse, kostnadseffektivitetsanalyse og kostnads-virkningsanalyse; basisalternativet; og hvordan betalingsvillighet for ikke-markedsgoder måles.
- **Eksamensbelegg:** NKA 75 % (H2018, H2020, H2021, H2022, H2023, H2024) + 4 utsatt; 5–40 %. Forankret i FIN R-109 og DFØ. Prioritet: **perfekt**.
- **Begrepskontrakt (m/pensumforankring — FIN R-109 (2014/2021) og DFØ (2023), `(verifiser)`):** **Nytte-kostnadsanalyse** (alt verdsettes i kroner; samf.øk. lønnsomt = total BV − total kostnad > 0), **kostnadseffektivitetsanalyse** (nyttesiden lik → ranger på laveste kostnad), **kostnads-virkningsanalyse** (kostnader i kroner, nyttesiden beskrives, ikke nødvendigvis verdsatt). **Basis-/nullalternativ** = det som skjer hvis ingenting gjøres. **BV-målemetoder:** direkte (betinget verdsetting / valgeksperimenter, intervjubasert) og indirekte (reisekostnadsmetoden, hedoniske priser).
- **Drøftingsakser:** (i) valg av analysetype er ofte «ikke noe fasitsvar» — sensor vurderer *begrunnelsen* (kan nytten verdsettes i kroner? er nyttesiden lik?); (ii) hvorfor basisalternativet er avgjørende (måler differansen, ikke totalen); (iii) svakhetene ved BV-måling (hypotetisk skjevhet i betinget verdsetting; fordelingsblindhet — kobler til kap. 1.3 og 5.2).
- **Case-forslag:** «Departementet skal vurdere et nytt sykehustilbud der helsegevinsten er vanskelig å prissette. Hvilken analysetype passer, hva er basisalternativet, og hvordan kan man eventuelt verdsette nytten?»
- **Typiske feil:** Blande de tre analysetypene; glemme basisalternativet; tro at all nytte alltid kan/bør verdsettes i kroner.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 5.2: «Samfunnsøkonomisk lønnsom»: de tre feilaktige tolkningene

- **id:** `econ1220-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-5-1`, `econ1220-1-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Begrepsryddingen sensor tester direkte: hva «samfunnsøkonomisk lønnsom» betyr — og de tre tingene det IKKE betyr.
- **Eksamensbelegg:** Testes direkte som sant/galt/«rydd opp i debatten» (H2018 O4, H2020 O4, H2024 d) + utsatt. **A/B-differensiator:** de tre feilaktige tolkningene. Prioritet: **perfekt** (høyest treffsikre poeng i hele emnet).
- **Begrepskontrakt (m/pensumforankring):** **Samfunnsøkonomisk lønnsom** = total BV − total kostnad > 0 (= potensiell Pareto/Kaldor-Hicks — vinnerne *kunne* kompensert taperne). De tre faste feiltolkningene (FIN R-109/DFØ `(verifiser)`):
  1. **≠ Pareto-forbedring.** Pareto ⇒ lønnsom, **aldri omvendt** — gevinsten kan tilfalle noen mens andre taper (ingen faktisk kompensasjon kreves).
  2. **≠ at staten får inntekter som dekker kostnadene.** Gevinsten kan tilfalle private mens staten betaler; lønnsomhet handler om samfunnets samlede BV vs. kostnad, ikke statsbudsjettet.
  3. **≠ objektivt best for hele samfunnet.** Den tolkningen krever en **kontroversiell normativ** forutsetning (lik grensenytte av penger + utilitaristisk verdisyn — kap. 1.3).
- **Drøftingsakser:** ordinal/kardinal-koblingen (hvorfor BV-sum ikke er «nytte for samfunnet»); at «meningsløs»-innvendingen (én tillitsvalgt sier konklusjonen er meningsløs) er **for sterk** — konklusjonen forteller noe (er den samlede kaka større?), bare ikke alt (hvem får den, om det er rettferdig).
- **Case-forslag:** «Departementet konkluderer med at en veiutbygging er samfunnsøkonomisk lønnsom. Én kollega sier konklusjonen er meningsløs, én at prosjektet dermed er til hele samfunnets beste, én at det ikke vil koste staten noe. Rydd opp: hva kan og kan ikke konklusjonen fortelle?»
- **Typiske feil:** De tre feiltolkningene selv (feilkatalog #1); avvise begrepet som helt meningsløst (overkorrigering); tolke BV-sum som nytte (#2).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Drill: rydd-opp-i-debatten-oppgaven

- **id:** `econ1220-5-3` · **number:** 5.3 · **estimatedMinutes:** 75 · **prerequisites:** `econ1220-5-2`
- **Kapitteltype:** drill (sjanger C)
- **description:** Sjangerdrill på NKA-begrepsryddingen: sant/galt-påstander og «flere kolleger tar feil — rydd opp», med de tre feiltolkningene og ordinal/kardinal-poenget.
- **Eksamensbelegg:** Dekker sjanger C (75 %; 5–40 %). Rotasjonen: sant/galt om «samfunnsøkonomisk lønnsom»; valg av analysetype med begrunnelse; ordinal/kardinal og BV-vs-nyttetap; basisalternativet; BV-målemetoder. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** Algoritme for «rydd opp»: 1) definer begrepet presist (BV − kostnad > 0); 2) ta hver påstand for seg, avgjør sant/galt, forklar mekanismen; 3) bruk de tre feiltolkningene som sjekkliste; 4) trekk inn ordinal/kardinal der noen sammenlikner grupper; 5) anerkjenn hva konklusjonen *faktisk* forteller (unngå overkorrigering). Gjennomskrevet eksempel-case med sensor-margnotater. 8–12 oppgaver med nyskrevne påstandssett og analysetype-valg (kollektivtiltak, kulturbygg, naturinngrep, helseprogram).
- **Oppgavesjangre:** C. Mønstereksempel: «Vurder hver påstand som sann eller usann og begrunn: (a) ‘Et samfunnsøkonomisk lønnsomt tiltak gjør ingen dårligere stilt.’ (b) ‘Da tjener staten på det.’ (c) ‘Da er det objektivt best for samfunnet.’ (d) ‘De rikes høyere betalingsvillighet viser at de får mest nytte.’»
- **Typiske feil:** De tre feiltolkningene (#1); tolke BV-sum som nytte (#2); overkorrigere til «meningsløst»; velge analysetype uten begrunnelse.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A tre analysetyper + basisalternativ + BV-måling, sjanger C; 5.B de tre feilaktige tolkningene av «samfunnsøkonomisk lønnsom», sjanger C; 5.C ordinal/kardinal og BV-vs-nyttetap anvendt, sjanger C; 5.D full rydd-opp-oppgave med sant/galt-påstander på eksamensnivå, sjanger C).

---

### Del 6 — Omfordeling: behovsprøving og arbeidstilbud *(prioritet: PERFEKT/KUNNE)*

#### Kapittel 6.1: Budsjettlinja for arbeidstilbud: knekk, fattigdomsfelle og «jobber mer ≠ får det bedre»

- **id:** `econ1220-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-2-2` (+ ECON1210 kap. 7.1/6.1, klartekst)
- **Kapitteltype:** teori (figur + drøfting)
- **description:** Budsjettlinja for arbeid/inntekt med det speilvendte indifferenskartet, hvordan behovsprøving skaper en knekk og fattigdomsfelle, og A/B-poenget «jobber mer betyr ikke får det bedre».
- **Eksamensbelegg:** Arbeidstilbud/budsjettlinje 38 % (H2018, H2022, H2023) + utsatt H2025 (borgerlønn); 7,5–25 %. **A/B-poeng:** «jobber mer ≠ får det bedre» (H2023 O2d). Prioritet: **perfekt**.
- **Innholdskontrakt + figur-i-ord (⚠️ speilvendt indifferenskart):** Figur: **x-akse = arbeidstid/stillingsprosent, y-akse = inntekt/konsum**; helning = lønnssats; **fritid er godet → indifferenskurvene er speilvendte, preferanseretning opp-venstre**. **Universell overføring** = **parallellforskyvning oppover** (ren **inntektseffekt**, ingen vridning). **Behovsprøvd overføring** = **knekk/diskontinuitet** ved inntektsgrensen D; avkortningssatsen (f.eks. 45 øre per krone) virker som **høy marginalskatt** → **fattigdomsfelle**; folk kan «klumpe seg» akkurat ved grensen (Lmax). Tilpasning = tangering; **utfallet er preferanseavhengig** — si det eksplisitt og vis gjerne to tegninger. Notasjon: B = støttebeløp, D = inntektsgrense, Lmax = maks arbeidstid uten å miste støtte, L0/L1 = tilpasninger, U0/U1 = indifferensnivåer, C = inntekt/konsum. **A/B-poeng (H2023 O2d):** at folk «jobber mer» uten støtte betyr **ikke** at de «får det bedre» — nytten faller (U0 → U1), fordi de mister støtte og bare har byttet fritid mot inntekt de helst ville hatt begge deler av.
- **Case-forslag:** «Ole får 40 000 kr i bostøtte hvis inntekten er under 100 000 kr. Tegn budsjettlinja med og uten bostøtte. Vil han jobbe mer om bostøtten fjernes? Vil han få det bedre?»
- **Typiske feil:** Tegne indifferenskurvene «vanlig vei» (glemme at fritid er godet); behandle behovsprøving som fattigdomsfelle for *alle* (bare de som ellers tilpasset seg nær grensen rammes, feilkatalog #7); lese «jobber mer» som «får det bedre»; ikke si at utfallet er preferanseavhengig.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Behovsprøvd vs. universell overføring (verbal drøfting)

- **id:** `econ1220-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-6-1`, `econ1220-2-2`
- **Kapitteltype:** teori (drøfting)
- **description:** Den verbale avveiingen mellom målrettet behovsprøving og robust universalitet — og lumpsum-testen.
- **Eksamensbelegg:** Behovsprøvd vs. universell 38 % (H2018, H2022, H2023) + utsatt H2020/H2025; 2,5–15 %. Prioritet: **kunne** (høy avkastning, ren verbal drøfting).
- **Begrepskontrakt (m/pensumforankring):** **Behovsprøvd overføring** (avkortes mot inntekt/behov), **universell overføring** (til alle uavhengig av inntekt ≈ **lumpsum**), **fattigdomsfelle**, **skattefinansieringskostnad**. Nyborg/Cappelen & Tungodden `(verifiser)`. **Lumpsum-testen** (fra kap. 2.2): en overføring er lumpsum bare hvis den ikke kan påvirkes ved atferd.
- **Drøftingsakser (verbal for/mot — begge sider kreves):** **Behovsprøvd:** mer **målrettet** mot fattigdom + lavere skattefinansieringsbehov (mindre vridningstap), MEN svekker arbeidsinsentiver (fattigdomsfelle, kap. 6.1) og er dyrere å administrere/mer stigmatiserende. **Universell:** nær **lumpsum** (få vridninger, billig å administrere, robust, ingen fattigdomsfelle), MEN dyr «fra alle til alle» → høyt skattenivå → effektivitetstap. **Valget avhenger av målet:** fattigdomsbekjempelse → behovsprøvd; generell støtte til f.eks. barnefamilier → universell mer treffsikker.
- **Case-forslag:** «Pek på sentrale argumenter for og mot behovsprøvde framfor universelle støtteordninger. Hvilke er mest relevante for overgangsstønad til enslige forsørgere?»
- **Typiske feil:** Kalle universell overføring vridende (den er nær lumpsum, feilkatalog #8); behandle behovsprøving som fattigdomsfelle for alle (#7); tro at overgangsstønad er lumpsum (den avhenger av inntekt/sivilstatus/barn); ensidig svar uten begge sider.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 6.3: Minstelønn og arbeidsmarkedet som frikonkurransemarked

- **id:** `econ1220-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ1220-6-1` (+ ECON1210 kap. 3.3/6.1, klartekst)
- **Kapitteltype:** teori (figur + drøfting)
- **description:** Ren ECON1210-gjenbruk: bindende minstelønn over likevekt gir ledighet, og ringvirkningen når flere tar utdanning.
- **Eksamensbelegg:** Minstelønn 1/8 (H2025 O3). Ren FK-markedsanalyse fra ECON1210. Prioritet: **kjenne** (billig beredskap — apparatet er alt kjent fra ECON1210).
- **Innholdskontrakt + figur-i-ord:** To arbeidsmarkeder (uten/med utdanning): tilbud/etterspørsel etter timeverk; **bindende minstelønn over likevekt for lavutdannede → arbeidsledighet** (gap mellom tilbudt og etterspurt mengde, navngis). **Ringvirkning:** flere tar utdanning → tilbud opp i høyutdannet-markedet → lønn ned der. Beskriv figurene i ord (lønn w vertikalt, sysselsetting N horisontalt). Forkunnskap fra ECON1210 markeres klartekst.
- **Case-forslag:** «Det innføres en minstelønn over dagens likevektslønn for ufaglærte. Vis med figur hva som skjer med sysselsettingen, og forklar ringvirkningen på lønna for faglærte.»
- **Typiske feil:** Glemme at minstelønnen må være *bindende* (over likevekt) for å gi ledighet; bytte om tilbud og etterspørsel i arbeidsmarkedet; overse ringvirkningen mellom de to markedene.
- **Quiz: 12 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (6.A budsjettlinje med knekk + fattigdomsfelle + «jobber mer ≠ får det bedre», sjanger D; 6.B behovsprøvd vs. universell verbal drøfting + lumpsum-testen, sjanger I; 6.C minstelønn i to arbeidsmarkeder med ringvirkning, sjanger J; 6.D full arbeidstilbudsoppgave med universell vs. behovsprøvd og preferanseavhengig tilpasning, sjanger D+I).

---

### Del 7 — Spillteori, sosiale normer og institusjoner *(prioritet: KUNNE — dominerer utsatt)*

#### Kapittel 7.1: Fangenes dilemma og koordineringsspill

- **id:** `econ1220-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-1-2` (+ ECON1210 kap. 7.2, klartekst)
- **Kapitteltype:** teori (figur + drøfting)
- **description:** 2×2-spillmatrisen, fangenes dilemma vs. koordineringsspill, og hvordan gjengjelderpreferanser gjør det ene om til det andre.
- **Eksamensbelegg:** Spillteori/sosiale dilemmaer 50 % (H2019, H2020, H2021, H2025) + utsatt; 10–40 %. Anvendt på fiske-allmenning (H2020 O3) og klimakutt (H2021 O2c). Prioritet: **kunne**.
- **Innholdskontrakt + figur-i-ord:** **2×2-spillmatrise:** nettogevinster (egen før komma, motpartens etter); løs ved å sjekke **beste svar** mot hver av motpartens handlinger; vis symmetri. **Fangenes dilemma:** dominant strategi å overutnytte selv om felles avståelse er bedre → én Nash-likevekt som ikke er Pareto-optimal (fiske: enkle tall som 100/110/120/90 forekommer). **Koordineringsspill:** to (eller flere) Nash-likevekter → kan ikke forutsi utfallet uten mer info. **Gjengjelderpreferanser** (straff/sinne/toll): legger man dem til, endres FD til koordineringsspill med to Nash-likevekter (H2020 O3, H2021 O2d). Beskriv matrisen i ord.
- **Case-forslag:** «To familier fisker fra samme innsjø. Sett opp gevinstmatrisen, avgjør hvor mange dager hver vil fiske, og forklar hvordan gjengjelderpreferanser (sinne) gjør dette til et koordineringsspill med to likevekter.»
- **Typiske feil:** Finne bare én Nash-likevekt i et koordineringsspill; lese matrisen feil (rad/kolonne); blande dominant strategi og Nash-likevekt; tro at gjengjelderpreferanser gir et entydig utfall.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: Gode og onde sirkler: korrupsjon, normer og normskifte som politikk

- **id:** `econ1220-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-7-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Selvforsterkende sirkler og flere likevekter, anvendt på korrupsjon og sosiale normer — og hvordan myndighetene kan vippe samfunnet til en ny likevekt.
- **Eksamensbelegg:** Gode/onde sirkler og korrupsjon (H2019, H2025) + utsatt (innendørs røyking H2023-utsatt); normskifte som politikk (H2023-utsatt). Dominerer utsatt. Prioritet: **kunne**.
- **Begrepskontrakt (m/pensumforankring):** **Strategisk komplementaritet / koordineringsspill** (en handling er mer lønnsom jo flere andre som gjør det samme → «løpe i flokk», flere stabile likevekter), **sosiale normer som koordineringslikevekt**, **gode/onde sirkler**. Nyborg m.fl. 2016 `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor korrupsjon/normer har **flere likevekter** (en overkontrollør kan selv bestikkes — H2019 O3b; normer og forventninger avgjør om «varsle» eller «ta imot» er tryggest — H2025 O2d); (ii) **normskifte som politikk:** myndighetene kan vippe samfunnet til en ny koordineringslikevekt ved å endre **forventninger** eller ved sterke, **midlertidige** virkemidler (røykeforbud i fellesarealer) som senere kan oppheves; (iii) statusjag/miljøatferd som samme mekanisme.
- **Case-forslag:** «Innendørs røyking var en gang normen. Forklar hvorfor et midlertidig forbud kan vippe samfunnet varig over til en ny norm, selv etter at forbudet oppheves.»
- **Typiske feil:** Behandle korrupsjon/normer som ett-likevekts-problem; tro at et normskifte krever permanent tvang; overse forventningenes rolle.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.3: Fellesressurser, Ostrom og institusjonell økonomi (Coase/Williamson)

- **id:** `econ1220-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ1220-7-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Allmenningens tragedie, Ostroms betingelser for vellykket lokal forvaltning, og hvorfor produksjon organiseres i bedrifter.
- **Eksamensbelegg:** Ostrom (H2020 O3a) + utsatt; institusjonell økonomi Coase/Williamson (utsatt H2020). Utsatt-favoritter. Prioritet: **kunne** (god dekning fordi utsatt vekter dette).
- **Begrepskontrakt (m/pensumforankring):** **Fellesressurs** (rivaliserende men ikke-ekskluderbar → overforbruk/allmenningens tragedie), **Ostrom-betingelsene** (lokal deltakelse i regelutforming, klare rettigheter, lokale kontroll-/overvåkingsmekanismer — uformell lokal forvaltning *kan* lykkes, men ikke alltid), **transaksjonskostnader** (Coase: hvorfor bedrifter finnes; Williamson), **Coase-teoremet** (ved lave transaksjonskostnader og klare rettigheter kan partene forhandle seg til effektiv løsning uansett hvem som har retten). Ostrom; Coase/Williamson `(verifiser)`.
- **Drøftingsakser:** (i) fellesressurs løses med regulering *eller* eiendomsrett *eller* lokal forvaltning — når passer hva (Ostroms betingelser); (ii) Coase-teoremets begrensning (transaksjonskostnader, mange parter → forhandling bryter sammen → offentlig inngrep); (iii) hvorfor plattformer (Uber/AirBnB) legger tjenestene *utenfor* arbeidsforholdet (transaksjonskostnader) — utsatt-vri.
- **Case-forslag:** «En innsjø overfiskes av flere lokale familier. Drøft om lokal selvforvaltning à la Ostrom kan løse problemet, og hvilke betingelser som må være oppfylt.»
- **Typiske feil:** Blande fellesressurs (rivaliserende) og fellesgode (ikke-rivaliserende, kap. 8.1); tro at Ostrom-forvaltning alltid lykkes; anvende Coase-teoremet der transaksjonskostnadene er høye.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.4: Atferdsøkonomi: nåtidsskjevhet, paternalisme og avgrensningen

- **id:** `econ1220-7-4` · **number:** 7.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-2-1`
- **Kapitteltype:** teori (drøfting)
- **description:** Nåtidsskjevhet ut over vanlig diskontering, «planleggeren vs. krypdyrhjernen», og den sensortestede avgrensningen: når er nåtidsskjevhet hovedhensynet — og når ikke?
- **Eksamensbelegg:** Atferdsøkonomi 25 % direkte (H2018, H2020) + utsatt H2021/H2023/H2025 (**dominerer utsatt**); 5–25 %, opptil hele oppgave 1 på utsatt. **Sensor tester avgrensningen** eksplisitt. Prioritet: **kunne** (høy avkastning på utsatt).
- **Begrepskontrakt (m/pensumforankring):** **Nåtidsskjevhet** = ekstra vekt på øyeblikket ut over vanlig (eksponentiell) diskontering → ubehagelige ting utsettes, fristelser gir etter for. **Planleggeren vs. krypdyrhjernen**, **sofistikert vs. naiv**, **binde-seg-til-masten**, **intern virkning** (skade på en selv — skiller paternalisme fra eksternalitetskorrigering). Nyborg (forelesningsnotater) `(verifiser)`.
- **Drøftingsakser (AVGRENSNINGEN er kjernen):** For hvert politikkforslag skal kandidaten avgjøre om nåtidsskjevhet er **hovedhensynet** eller ikke:
  - sukker-/tobakks-/alkoholavgift → *ja* (intern virkning, hjelpe individet mot egne fristelser);
  - obligatorisk pensjonssparing og forsikring → *ja* (nåtidsskjeve utsetter);
  - **CO₂-avgift → NEI** (ekstern virkning på andre, ikke nåtidsskjevhet);
  - **ledighetstrygd → NEI** (forsikring/fordeling, ikke nåtidsskjevhet);
  - **inntektsskatt → NEI** (fiskal, ikke korrigerende).
  Paternalisme-drøftingen: rettferdiggjør staten å overstyre individets valg? Libertariansk paternalisme (dulting/nudging) vs. forbud.
- **Case-forslag:** «For hvert forslag (økt tobakksavgift, behovsprøvd barnetrygd, CO₂-avgift, frivillig pensjonssparing, ledighetstrygd): er nåtidsskjevhet et relevant og viktig hensyn? Begrunn.»
- **Typiske feil:** Bruke nåtidsskjevhet som hovedbegrunnelse der den ikke passer (CO₂ = eksternalitet, ledighetstrygd = forsikring — feilkatalog #10); blande intern og ekstern virkning; tro at all paternalisme er begrunnet i nåtidsskjevhet.
- **Quiz: 18 · Flashcards: 22**

**Prøve-kvote Del 7:** 4 prøver (7.A spillmatrise fra tekst — fangenes dilemma vs. koordineringsspill med gjengjelderpreferanser, sjanger F; 7.B gode/onde sirkler, korrupsjon og normskifte som politikk, sjanger F; 7.C fellesressurser/Ostrom + Coase/Williamson, sjanger F+J; 7.D atferdsøkonomi med avgrensningen «er nåtidsskjevhet hovedhensynet?», sjanger G).

---

### Del 8 — Fellesgoder, sosialforsikring og den nordiske modellen *(prioritet: KUNNE/KJENNE)*

#### Kapittel 8.1: Fellesgoder, gratispassasjerer og sosialforsikring (begrepsnivå)

- **id:** `econ1220-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1220-1-2` (+ ECON1210 kap. 4.3, klartekst)
- **Kapitteltype:** teori (drøfting)
- **description:** Fellesgoder og gratispassasjerproblemet på begrepsnivå, og sosialforsikring som svar på asymmetrisk informasjon — bevisst holdt kort fordi det nesten aldri er storoppgave.
- **Eksamensbelegg:** Fellesgoder/gratispassasjer testes **nesten aldri** som storoppgave (~0/8 rent) — kun begrep + utsatt H2025 (helse = fellesgode?). **Bevisst nedprioritert** (analysen §7 nivå 3): dekkes på begrepsnivå, ikke som stor del. Prioritet: **kunne** (begrep), IKKE egen stor del.
- **Begrepskontrakt (m/pensumforankring):** **Fellesgode / kollektivt gode** (ikke-rivaliserende ± ikke-ekskluderbart — sensor godtar begge definisjoner: bred CORE-variant = kun ikke-rivaliserende; smal = begge; f.eks. forsvar, fyrlykt, kunnskap), **gratispassasjerproblemet** (markedet underforsyner fordi ingen vil betale for det andre kan nyte gratis), skillet fra **fellesressurs** (rivaliserende, kap. 7.3). **Sosialforsikring** = offentlig forsikring der uheldig utvalg unngås fordi alle er med (kobling til Del 3). Stiglitz & Rosengard `(verifiser)`.
- **Drøftingsakser:** (i) hvorfor markedet underforsyner fellesgoder (gratispassasjer); (ii) er helse et fellesgode? (H2025-utsatt — nei i streng forstand: helsetjenester er rivaliserende og ekskluderbare; men det finnes eksternaliteter og forsikringsargumenter → *derfor* offentlig, ikke fordi det er et fellesgode); (iii) sosialforsikringens begrunnelse ligger i asymmetrisk info + fordeling, ikke i fellesgode-egenskaper. **NB (nivå-markering):** dette kapitlet er kort og merkes «bør kunne på begrepsnivå» — ikke bygg det ut til storoppgave-omfang.
- **Case-forslag:** «En kollega kaller offentlig helsevesen et fellesgode. Er det presist? Hva er den økonomiske begrunnelsen for offentlig helse?»
- **Typiske feil:** Kalle helse/utdanning fellesgoder uten forbehold (de er rivaliserende/ekskluderbare); blande fellesgode og fellesressurs; oppgi bare én definisjon der begge honoreres.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.2: Den nordiske modellen og internasjonalt miljøsamarbeid

- **id:** `econ1220-8-2` · **number:** 8.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1220-7-1`, `econ1220-2-3`
- **Kapitteltype:** teori (drøfting)
- **description:** Den nordiske modellens tre pilarer og samspillet mellom dem; og hvorfor Montrealprotokollen lyktes der klimaavtaler feiler.
- **Eksamensbelegg:** Nordiske modellen 1/8 (H2022 O2g) + utsatt H2020; internasjonalt miljøsamarbeid 1/8 (H2024) + utsatt H2022. Roterende/kjenne-stoff. Prioritet: **kjenne**.
- **Begrepskontrakt (m/pensumforankring):** **Den nordiske modellens tre pilarer** (Dølvik 2013 `(verifiser)`): (1) ansvarlig økonomisk styring/full sysselsetting, (2) organisert arbeidsliv med frontfagsmodell og sammenpresset lønnsstruktur, (3) offentlig velferd/sikkerhetsnett + aktiv arbeidsmarkedspolitikk. **Samspillet:** velferd → kompetanse + risikovilje → omstilling → produktivitet → skatteinntekter → velferd (positiv sirkel — kobling til kap. 7.2). **Internasjonalt miljøsamarbeid:** Montrealprotokollen vs. klimaavtale; hvorfor Montreal lyktes — handelssanksjoner mot ikke-deltakere gjorde avtalen selvforsterkende (endret fangenes dilemma til koordineringsspill, kap. 7.1), færre aktører, lavere kostnader.
- **Drøftingsakser:** (i) hvordan de tre pilarene forsterker hverandre (ikke bare listes opp); (ii) hvorfor internasjonale klimaavtaler er et fangenes dilemma, og hva som skal til for å endre spillet (handelssanksjoner, gjengjelderpreferanser).
- **Case-forslag:** «Forklar hvorfor Montrealprotokollen mot KFK-gasser lyktes, mens globale klimaavtaler sliter, med utgangspunkt i spillteori.»
- **Typiske feil:** Ramse opp de tre pilarene uten samspillet; behandle klimaavtaler som rene koordineringsspill (de er fangenes dilemma før man endrer insentivene); glemme handelssanksjonenes rolle.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 8:** 4 prøver (8.A fellesgode-begrepet med begge definisjoner + gratispassasjer, sjanger H; 8.B er helse et fellesgode? + sosialforsikringens begrunnelse, sjanger H+A; 8.C nordiske modellens tre pilarer og samspill, sjanger J; 8.D internasjonalt miljøsamarbeid som spillteori — Montreal vs. klima, sjanger J+F).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Begrepsdrill: gjengangerne med pensumforankring

- **id:** `econ1220-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–8
- **Kapitteltype:** drill (sjanger — begreper)
- **description:** Presisjonstrening på hele begrepsrepertoaret: presis definisjon + pensumforankring + figur der naturlig + eksempel + pluss-markøren.
- **Eksamensbelegg:** Begreper åpner/inngår i mange sett (lav-vekts deloppgaver, sikre poeng). Sensor honorerer navngitt forankring og «det lille ekstra». Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Malen «presis definisjon + forankring (forfatter/verk) + figur/eksempel + pluss-markør» demonstreres; deretter drillbank som dekker ALLE gjengangerbegrepene med fasitsvar i deloppgave-format og henvisning til teorikapitlet: uheldig utvalg/fløteskumming/moral hazard → 3.1–3.4; samfunnsøkonomisk lønnsom → 5.2; de tre analysetypene → 5.1; markedssvikt-katalogen → 1.2; ordinal/kardinal → 1.3; ekstern virkning/Pigou → 2.1; vridende/korrigerende/lumpsum → 2.2; kostnadseffektivitet/like MAC → 2.3; valgsyklus/entoppet/medianvelger → 4.1–4.3; behovsprøvd vs. universell/lumpsum-test → 6.2; fattigdomsfelle → 6.1; fangenes dilemma/koordineringsspill → 7.1; gode/onde sirkler/normer → 7.2; Ostrom/Coase → 7.3; nåtidsskjevhet/paternalisme → 7.4; fellesgode/gratispassasjer → 8.1; nordiske modellen → 8.2; Pareto/velferdsteorem → 1.1.
- **Oppgavesjangre:** Begreper (alle sjangre). Mønstereksempel: «Gjør kort rede for hva uheldig utvalg er, gi ett eksempel fra et forsikringsmarked, og forklar hvorfor en obligatorisk ordning unngår problemet.»
- **Typiske feil:** Definisjon uten forankring (C-stoff); utelate pluss-markøren; oppgi bare én definisjon av fellesgode; utflytende svar som stjeler tid fra storoppgaven.
- **Quiz: 14 · Flashcards: 45**

#### Kapittel 9.2: Modellbesvarelse: signaturoppgaven om asymmetrisk informasjon (A vs. C)

- **id:** `econ1220-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1220-3-5`
- **Kapitteltype:** modellbesvarelse
- **description:** Én nyskrevet storoppgave om fast-beløp-per-bruker-markedet, besvart på to nivåer, som viser presist hva som skiller A fra C.
- **Eksamensbelegg:** Signaturoppgaven (sjanger A, 88 %). Viser sensorblikket i praksis. Prioritet: **perfekt** (mønster for besvarelsesnivå).
- **Innholdskontrakt (modellbesvarelse-DNA):** 1) **Nyskrevet oppgave** i reell sjanger (f.eks. hjemmetjeneste på fast tilskudd per bruker, to-trinns regulering). 2) `collapsible` **A-besvarelse** — full tekst med margnotater («her: begrep + forankring», «her: statistisk-info-poenget — dette løfter til A», «her: moral hazard-symmetrien», «her: fordelingskoblingen»). 3) `collapsible` **Kommentert C-besvarelse** — korrekt men flat (identifiserer uheldig utvalg og fløteskumming, men stopper ved «de kjenner ikke risikoen», glemmer symmetrien og koblingene), med notater om gapet opp til A. 4) `tip` **Sensorblikket** — momentliste og vektlegging.
- **Oppgavesjangre:** A. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** (vises i C-besvarelsen) statistisk-info-fellen; glemt symmetri; manglende koblinger; ingen forankring.
- **Quiz: 8 · Flashcards: 10**

#### Kapittel 9.3: Øvingseksamen 1: klassisk skoleeksamen (fire oppgaver)

- **id:** `econ1220-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `econ1220-9-1`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett 4-timers sett etter H2018–H2020-malen (fire oppgaver med prosentvekting), med asymmetrisk info i kjernen.
- **Eksamensbelegg/miks:** Speiler et typisk H2019/H2020-sett (fire oppgaver, f.eks. 30/30/15/25). **Oppgave 1 (~30 %) asymmetrisk info:** fast-beløp-per-bruker-marked (nyskrevet case, f.eks. private barnehager på stykktilskudd) — uheldig utvalg, fløteskumming med statistisk info, to-trinns regulering. **Oppgave 2 (~30 %) miljø:** avgift vs. kvoter vs. regulering med kvotetak-fellen. **Oppgave 3 (~15 %) kollektive valg:** tre partier/tre alternativer, entoppet-analyse + parvis votering. **Oppgave 4 (~25 %) NKA:** rydd opp i «samfunnsøkonomisk lønnsom». Alle nyskrevne. Løsningsforslag som **A-besvarelse** i `collapsible` per oppgave (med figurbeskrivelser i ord), **kommentert C-besvarelse på oppgave 1**, `tip`-notat om delpoeng/vekting og tidsbudsjett (72/72/36/60 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 2: åpen-bok-integrert (tung asymmetrisk info)

- **id:** `econ1220-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** `econ1220-9-3`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett etter åpen-bok-malen (H2022: 25/75) med én stor, integrert storoppgave om asymmetrisk informasjon og fordeling.
- **Eksamensbelegg/miks:** Speiler H2022/H2024-profilen (få, store oppgaver). **Oppgave 1 (25 %):** behovsprøving/arbeidstilbud — budsjettlinje med knekk, fattigdomsfelle, «jobber mer ≠ får det bedre», behovsprøvd vs. universell. **Oppgave 2 (75 %) integrert signaturoppgave:** et fast-beløp-per-bruker-marked (nyskrevet, f.eks. eneforsørger-tjeneste eller sykehjem) med mange delspørsmål — hele to-trinns fløteskummings-analysen, obligatorisk forsikring, moral hazard, fordelingseffekter og nåtidsskjevhet. Krever **egne ord** (åpen bok). Løsningsforslag som **A-besvarelse** + **kommentert C-besvarelse på oppgave 2**, med vektings-`tip` og tidsbudsjett (60/180 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.5: Øvingseksamen 3: nyeste mal (tre oppgaver 20/50/25)

- **id:** `econ1220-9-5` · **number:** 9.5 · **estimatedMinutes:** 240 · **prerequisites:** `econ1220-9-4`
- **Kapitteltype:** øvingseksamen (+ modellbesvarelse)
- **description:** Komplett sett etter H2025-malen (tre oppgaver, 20/50/25) med spillteori/normer og atferd i miksen.
- **Eksamensbelegg/miks:** Speiler H2025 (20/50/25). **Oppgave 1 (20 %) spillteori/normer:** fiske-allmenning eller korrupsjon — 2×2-matrise, fangenes dilemma vs. koordineringsspill med gjengjelderpreferanser, gode/onde sirkler. **Oppgave 2 (50 %) storoppgave asymmetrisk info + miljø-hybrid:** fast-beløp-per-bruker-marked med en miljø-/kvotedimensjon (nyskrevet), inkl. gratiskvote-nyanse. **Oppgave 3 (25 %) atferd + NKA:** for en liste politikkforslag — er nåtidsskjevhet hovedhensynet? + kort NKA-begrepsrydding. Løsningsforslag som **A-besvarelse** + **kommentert C-besvarelse på oppgave 2**, med vektings-`tip` og tidsbudsjett (48/120/60 min). Sammen dekker de tre settene sjangrene A, B, C, D, E, F, G, H, I; J dekkes av prøvene 6.C, 7.C og 8.C–8.D.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 9:** ingen egne prøver (delen består av begrepsdrill + modellbesvarelse + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 10+10 = **20** | 10+10 = **20** | 0 |
| 1 | 1.1–1.3 | 18+20+18 = **56** | 20+26+20 = **66** | 4 |
| 2 | 2.1–2.4 | 20+16+24+14 = **74** | 22+18+26+8 = **74** | 4 |
| 3 | 3.1–3.5 | 22+22+20+18+16 = **98** | 24+24+18+18+10 = **94** | 4 |
| 4 | 4.1–4.4 | 18+20+18+14 = **70** | 18+20+18+8 = **64** | 4 |
| 5 | 5.1–5.3 | 22+20+14 = **56** | 26+20+8 = **54** | 4 |
| 6 | 6.1–6.3 | 20+18+12 = **50** | 20+20+12 = **52** | 4 |
| 7 | 7.1–7.4 | 18+18+18+18 = **72** | 18+18+22+22 = **80** | 4 |
| 8 | 8.1–8.2 | 16+14 = **30** | 18+16 = **34** | 4 |
| 9 | 9.1–9.5 | 14+8+5+5+5 = **37** | 45+10+0+0+0 = **55** | 0 (3 øvingseksamener) |
| **Sum** | **35 kap.** | **563 ≥ 500 ✓** | **593 ≥ 500 ✓** | **32 + 3 ØE** |

**Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.**
Fordelingen speiler frekvens og natur: Del 3 (asymmetrisk info, 88 %) er størst
(98 quiz), fulgt av Del 2 (miljø) og Del 4 (kollektive valg). **Om tetthetsnivået
(jf. PRODUKSJONSLOYPE «≥500 er GULV»):** ECON1220 er et **begrepsrikt
drøftingsfag** med tung pensumforankring (uheldig utvalg, fløteskumming, marginal
rensekostnad, entoppethet, medianvelger, nåtidsskjevhet, Ostrom, Coase, de tre
analysetypene, de tre feiltolkningene …), og begrep↔forfatter-koblinger er ideelt
flashcard-råstoff — derfor er flashcards (593) satt **over** quiz (563) og godt
over gulvet, uten å nå det rene puggefagets 700–800 (faget er figurbasert og
drøftende, ikke rent faktatungt). 35 kapitler (> 32) tilsier tilsvarende høyere
sum enn 500-taket, som reflektert.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord og pensumforankring) og poengfordeling.
Omfang i minutter. Prøvekapitler bygges som `econ1220-<del>-prove`, chapterNumber
`<del>.P` (jf. byggekontrakten). Prøvene per del er spesifisert i «Prøve-kvote
Del N»-linjene under hver del over. Kort oppsummert dekker de:

- **Del 1:** Pareto/velferdsteorem, markedssvikt-katalogen, styringssvikt, ordinal/kardinal nytte.
- **Del 2:** Pigou-figur, skattenes tredeling, trekriterie-vurdering, full miljøoppgave (kvotetak- + gratiskvote-nyanse).
- **Del 3:** uheldig utvalg/dødsspiral, fløteskumming + to-trinns regulering, moral hazard/anbud, full signaturoppgave.
- **Del 4:** valgsykler, entoppet-diagram, medianvelger vs. aggregert BV, full oppgave med flertoppethet/agendamakt.
- **Del 5:** tre analysetyper, de tre feiltolkningene, ordinal/kardinal anvendt, full rydd-opp-oppgave.
- **Del 6:** budsjettlinje/fattigdomsfelle, behovsprøvd vs. universell, minstelønn, full arbeidstilbudsoppgave.
- **Del 7:** spillmatrise, gode/onde sirkler/normskifte, Ostrom/Coase, atferd/avgrensning.
- **Del 8:** fellesgode-begrep, helse-som-fellesgode/sosialforsikring, nordiske modellen, internasjonalt miljøsamarbeid.

### Øvingseksamener (3 komplette sett — se kap. 9.3–9.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.3) | Klassisk skoleeksamen H2018–H2020 (4 oppg., ~30/30/15/25) | Asymmetrisk info + miljø + kollektive valg + NKA-rydding |
| Øvingseksamen 2 (kap. 9.4) | Åpen bok H2022 (2 oppg., 25/75) | Behovsprøving/arbeidstilbud + integrert signaturoppgave (asymmetrisk info + fordeling + atferd) |
| Øvingseksamen 3 (kap. 9.5) | Nyeste mal H2025 (3 oppg., 20/50/25) | Spillteori/normer + asymmetrisk-info/miljø-hybrid + atferd/NKA |

Hver øvingseksamen har full A-besvarelse per oppgave **og** en kommentert
C-besvarelse på den tyngste oppgaven + sensorblikk — sammen med kap. 9.2 gir det
**≥3 modellbesvarelser** (DNA-drofting-kravet). Til sammen dekker settene sjangrene
A–I minst én gang; J (roterende/historiske) dekkes av prøvene 6.C, 7.C, 8.C–8.D.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 4-timers digital skoleeksamen, kun høst, 3–4
   case-oppgaver med prosentvekting; «lite matte, mye figurer»; drøftingen teller,
   ikke bare konklusjonen; vektingshistorikken og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens omgjort til tre lesenivåer: **perfekt**
   (Del 2 miljø/kostnadseffektivitet, Del 3 asymmetrisk info [ryggraden], Del 4
   kollektive valg, Del 5 NKA, Del 6 arbeidstilbud/behovsprøving), **kunne**
   (Del 1 rammeverket, Del 7 spill/normer/institusjoner/atferd, behovsprøvd vs.
   universell), **kjenne** (Del 8 fellesgoder/nordiske modellen/internasjonalt
   miljøsamarbeid, minstelønn).
3. **Casehåndverket** — fire-trinns-malen fra kap. 0.2 (problemforståelse →
   begrepsavklaring m/forankring → drøfting m/begge sider → konklusjon) +
   vekt-som-tidsbudsjett + C→A-løftet.
4. **Sjangerguiden** — oppgavetypene A–J med løsningsoppskriftene fra drill-
   kapitlene (2.4, 3.5, 4.4, 5.3) i kortform: signaturoppgavens seks-trinns-mal,
   miljøens trekriterie-algoritme, kollektive valgs entoppet-prosedyre,
   NKA-rydde-malen.
5. **A/B-differensiatorene** — de seks andreordens-poengene fra §1 (statistisk-info-
   fløteskumming, kvotetak-fellen, gratiskvote-nyansen, de tre feiltolkningene,
   ordinal-vs-kardinal/BV-vs-nyttetap, «jobber mer ≠ får det bedre»/agendamakt),
   hver med kapittelhenvisning.
6. **Feilkatalogen** — de 13 typiske feilene fra analysen §5 samlet, hver med
   henvisning til kapitlet som forebygger den.
7. **Figurbiblioteket i ord** — de fire standardfigurene beskrevet i ord med
   merkekrav: budsjettlinje for arbeidstilbud (speilvendt indifferenskart, knekk,
   Lmax, U0/U1); preferanse-topp-diagram (alternativer på x, rang på y, én kurve
   per gruppe); marginale rensekostnader (aggregert MAC, kvotetak K, pris p);
   2×2-spillmatrise (egen gevinst før komma). Pluss Pigou-figuren (privat vs.
   samfunnsøkonomisk MK) fra kap. 2.1.
8. **Pensumkart** — forfatter → verk → begreper de «eier» (FIN R-109/DFØ → NKA;
   Stiglitz & Rosengard → markedssvikt/asymmetrisk info; Nyborg → atferd/normer/
   behovsprøving; Ostrom → fellesressurser; Coase/Williamson → institusjoner;
   Dølvik → nordiske modellen) — flashcard-råstoff, `(verifiser)` mot pensum.
9. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 (rammeverk) → 3 (asymmetrisk info — kjernen først) → 2 → 4 → 5 → 6,
   deretter 7 → 8, prøver underveis, de tre øvingseksamenene de siste ukene under
   tidspress (240 min med vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ1220` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/
   prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-
   tabellen (§2). **NB:** `number` SKAL være del-basert («3.2»), aldri lineær.
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–J, frekvenstallene og
   casehåndverket som resten refererer til.
3. **Rammeverket**: Del 1 (Pareto/markedssvikt/nytte) — fundamentet resten hviler
   på.
4. **Ryggraden tidlig**: Del 3 (asymmetrisk info) bygges rett etter Del 1, fordi
   den bærer 88 % av settene og resten kan referere til den. Deretter Del 2
   (miljø), Del 4 (kollektive valg), Del 5 (NKA), Del 6 (omfordeling).
5. Del 7 (spill/normer/institusjoner/atferd) → Del 8 (fellesgoder/nordiske).
6. Del 9 til slutt (begrepsdrill, modellbesvarelse og øvingseksamener gjenbruker
   alt).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene legges i prøvekapitler per del (`econ1220-<del>-prove`, chapterNumber
   `<del>.P`).

**Batching for byggebølgen (fase 4):** én agent per hel del; Del 3 (5 kap, tung)
kan deles, men gi begge agentene HELE Del 3s kontrakter. Del 9 (øvingseksamener)
bygges av én agent som leser HELE skjelettet.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **Ingen algebra**: tekstsøk — ingen derivasjon/optimeringsformler som
  løsningsmetode; forbudte termer (Gini, Lorenz som regneverktøy, Ramsey,
  Mirrlees, Samuelson-betingelse, Cournot, Bertrand) gir null treff. Enkle
  budsjettlinje-koordinater og 2×2-småtall er de eneste tallene.
- [ ] **Figur + mekanisme**: hvert eksempel/løsningsforslag med figur inneholder
  både figurbeskrivelse i ord (akser, kurver, knekk/Lmax, topper, MAC, K,
  U0/U1, arealer navngitt) og verbal mekanisme; **speilvendt indifferenskart**
  overalt i arbeidstilbud (kap. 6.1, 6.3, prøve 6.A/6.D).
- [ ] **Kapittel-DNA (drøfting)**: hvert teorikapittel har Eksamensvinkel-`tip`
  (med tallene fra dette skjelettet), Temaet-i-landskapet-`text`, Kjernebegreper-
  `definition` MED pensumforankring, Posisjoner/spenninger- eller Drøftingsakser-
  `text`, Anvendelse-`example`, Typiske feil-`warning`, oppgaver (begreps- +
  kortdrøftings- + essayoppgaver med momentliste/disposisjon som løsning),
  Pensumkart-`collapsible`. Drillkapitler (2.4, 3.5, 4.4, 5.3): løsningsoppskrift
  + sensor-kommentert case + 8–12 oppgaver. Modellbesvarelse (9.2) + øvings-
  eksamener (9.3–9.5): A-besvarelse + kommentert C-besvarelse + sensorblikk.
- [ ] **Forkunnskaper/kryssbok**: hvert kapittel har Forkunnskaper-blokk;
  ECON1210-referanser skrevet som **KLARTEKST** med id (ikke live lenke, siden
  ECON1210 ikke er bygget); interne prerequisites peker på eksisterende
  econ1220-kapitler. Symbol-/formelliste-`collapsible` i delkapitler som bruker
  B/D/Lmax/U/MAC/K.
- [ ] **Pensumforankring EKTE**: kun kildene i §1 (FIN R-109, DFØ, Stiglitz &
  Rosengard, Nyborg, Ostrom, Coase/Williamson, Dølvik, Cappelen & Tungodden);
  ingen oppdiktede referanser; `(verifiser)`-markører beholdt til fase 6 sjekker
  utgaver/sidetall.
- [ ] **A/B-differensiatorene**: de seks andreordens-poengene fra §1 er eksplisitt
  markert (`tip`/`warning`) i sine kapitler (statistisk-info-fløteskumming → 3.2;
  kvotetak-fellen + gratiskvote → 2.3; tre feiltolkninger → 5.2; ordinal/kardinal
  → 1.3; «jobber mer ≠ får det bedre» → 6.1; agendamakt → 4.2).
- [ ] **Quiz-sum ≥ 563 og flashcard-sum ≥ 593** per kvotetabellen (§3 er
  autoritativ; kontrollsummér).
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–J minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne case, tall, bransjer og
  formuleringer; ingen formuleringer fra reelle sett/sensorveiledninger
  (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre);
  pensum refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.

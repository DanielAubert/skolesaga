# Bokskjelett: SØK1011 Markeder og markedssvikt — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (≈25 oppgavesett V2012–V2025 inkl. V2023-resit,
> et titalls sensorveiledninger/fasiter V2015–V2025). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har i tillegg et
> tydelig **drøftingselement** (den verbale politikkvurderingen som avslutter
> markedssviktoppgaven i Falch-regimet); for det ene sjangerkapitlet som drilles
> spesifikt (5.2) lånes struktur fra `DNA-drofting.md` (oppskrift → gjennomskrevet
> besvarelse → momentliste-oppgaver), dokumentert der. Alle mønstereksempler i
> skjelettet er omskrivninger; forfatteren skal variere dem videre (egne tall,
> egne kontekster), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1011` |
| Tittel | **SØK1011 Markeder og markedssvikt** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (algebra-/grafisk modellfag) med drøftingselement (verbal politikkvurdering) |
| Antall kapitler | **27** (1 eksamenskart + 3 marked/velferd + 4 markedsmakt + 7 oligopol/spill + 6 markedssvikt + 1 nivå-3-begreper + 5 eksamenstrening) |
| Estimert totaltid | **2 250 min ≈ 37,5 timer** |
| Quiz totalt | **538** (krav ≥500) |
| Flashcards totalt | **524** (krav ≥500) |

**Pitch (ett avsnitt):** SØK1011-eksamen står på **to søyler** som gjentar seg år
etter år: nesten hvert sett har én **markedsmakt-/oligopoloppgave** og én
**markedssvikt-oppgave** (eksternalitet eller fellesgode), og fra 2024 (Falch-
regimet) er malen låst til en tredeling — begreper (20 %) + oligopol (35–40 %) +
markedssvikt (40–45 %) avsluttet med en **verbal politikkvurdering**. Denne boka
er bygget som nettopp de to søylene, med et felles fundament om **markedskryss,
samfunnsøkonomisk overskudd og effektivitet** i bunn. Den driller de fem
ferdighetene som avgjør karakteren: **Cournot** komplett (beste-svar-kurver
utledet fra førsteordensbetingelser, tegnet i (`xₐ`,`x_b`)-planet, Nash-likevekt i
skjæringen, `(D−c)/3`-resultatet), **monopoltilpasning + effektivitetstap** (`MR = MC`,
`(D−c)/2`, dødvektstap analytisk og grafisk), **negativ eksternalitet + Pigou-avgift/kvote**
(markedsløsning vs. samfunnsøkonomisk optimum, effektivitetstap, optimal avgift =
marginal skade), **fellesgode med sum av betalingsvillighet** (vertikal summering,
Samuelson-betingelsen `Σ MB = MC`, N-avhengighet, gratispassasjer) og **spillmatrise +
Nash-likevekt** som det gjennomgående verktøyet (etableringshindre, karteller). SØK1011
ligger metodisk **mellom** SOK1002 (tung algebra/Lagrange) og ECON1210 (nesten ren
geometri): matematikken teller (likevekter løses algebraisk, Lerner-indeksen utledes,
avgifter regnes), men sensor understreker gjentatte ganger at **regning må understøttes
av økonomisk intuisjon og klargjørende figurer** — figuren skal forklares, tallet skal
tolkes, beste-svar-kurvene «må tolkes» og Nash-likevekten «må begrunnes».

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK1011 er det
**kirurgiske komplementet** til NTNUs SOK1002. SOK1002 bygger opp det formelle
konsument- og produsentteoriapparatet (nyttemaks med Lagrange, kostnadsminimering,
tilbudskurve utledet fra kostnadsfunksjonen) — og **utelater bevisst** marked,
monopol/markedsmakt, oligopol/spillteori, eksternaliteter, kollektive goder,
samfunnsøkonomisk overskudd og avgift. **Nøyaktig disse temaene er kjernen i SØK1011.**
Boka skal derfor **ikke bygge ut** konsumentens nyttemaks (indifferenskurve/MSB,
etterspørselsfunksjoner fra Cobb-Douglas, substitusjons-/inntektseffekt, Slutsky/Hicks)
eller produsentens kostnadsminimering (isokvant/TSB, betinget faktoretterspørsel,
hele kostnadskurvefamilien MK/TGK/VGK/FGK, nedleggingsbetingelsen med sunk cost) —
det er SOK1002s domene. SØK1011 **tar tilbudssiden som gitt** (konstant enhetskostnad
`c` eller en enkel kostnadsfunksjon) og analyserer **markedsutfallet**. Der de to
møtes (marginalkostnad, profittmaksimering, en enkel etterspørselsfunksjon), **kryssrefererer**
boka til SOK1002 med markdown-lenker (`[tittel](/bok/sok1002/<chapterId>)`) i stedet
for å gjenta utledningene. Se §7 for den fullstendige arbeidsdelingstabellen.

**Avgrensning nedad mot ECON1210 (UiO):** ECON1210 deler nesten hele temakatalogen,
men er grafisk/verbalt (lite algebra) og har sitt tyngdepunkt i FK-markedet med
**stykkskatt/-subsidie og overveltning med delingsbrøk `c/(b+c)`** — det er ECON1210s
signatur og er **nesten fraværende i SØK1011**. Boka skal derfor IKKE bygge ut
overveltnings-/delingsbrøkanalysen; avgifter i SØK1011 er **Pigou-korrigering av
eksternaliteter**, ikke overveltningsanalyse. (Makroøkonomi, IS-LM og vekstteori er
ikke i emnet.)

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Marked:** invers (samlet) etterspørsel $P = D - X$ (eller $P = a - bX$); samlet
  mengde $X = x_a + x_b$; konstant enhetskostnad $c$ (evt. ulike $c_a, c_b$);
  marginalinntekt $MR$, marginalkostnad $MC$. (Merk for studenten at ECON1210 skriver
  E-/T-kurve der SØK1011 skriver $P = D - X$.)
- **Oligopol:** beste-svar-/reaksjonskurver $x_i(x_j)$; Nash-likevekt; standardresultater
  monopol $x = (D-c)/2$, Cournot per bedrift $x = (D-c)/3$, Stackelberg leder $(D-c)/2$
  og følger $(D-c)/4$; Lerner-indeks $L = (p - MC)/p = 1/|\varepsilon|$.
- **Markedssvikt:** marginal (privat) betalingsvillighet $MB$/$MPB$; marginal privat
  kostnad $MPC$; **marginal samfunnsøkonomisk kostnad** $MSC = MPC + \text{marginal skade}$;
  skadefunksjon $Cs(x)$ eller $E(x)$; Pigou-avgift $t$; kvotepris $q$. Fellesgode:
  samlet betalingsvillighet ved vertikal summering, optimum der $\Sigma MB = MC$
  (Samuelson-betingelsen).
- **Spill:** strategier, utbetalingsmatrise, Nash-likevekt, dominant strategi,
  delspillperfekt likevekt, diskonteringsfaktor $\delta$, tit-for-tat.
- **Velferd:** konsumentoverskudd $KO$, produsentoverskudd $PO$, samfunnsøkonomisk
  overskudd $SO = KO + PO$, effektivitetstap/dødvektstap.

**Kritisk metoderegel (gjelder HELE boka):** Tre faste sensorkrav gjelder overalt:
**(a) regning OG figur OG intuisjon** er én leveranse — ren algebra uten forklaring,
eller en figur uten tekst, er halvt svar (analysens §4.1, §5.8, §5.11); **(b) tolk
resultatene** — beste-svar-kurver skal tolkes, Nash-likevekten begrunnes («ingen
angrer gitt den andres valg»), og tallsvar (elastisitet, effektivitetstap, kvotepris,
optimal avgift) oversettes til økonomisk innhold; **(c) definisjonene må sitte** —
Nash-likevekt, markedssvikt, fellesgode, Bertrand-paradokset, Lerner-indeks defineres
eksplisitt, ikke forutsettes kjent. Svar **poengtert** på de oppgitte funksjonene
(generell teori uten å bruke tallene gir bare delvis uttelling — §5.9). **Mekanismen
bak resultatet teller mer enn selve tallet.**

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): markeds-/velferdsfundamentet i
bunn, deretter de to søylene (markedsmakt/oligopol og markedssvikt), til slutt
eksamenstreningen. Frekvensen styrer *omfanget* — de to søylene er ~100 %-gjengangere
(hvert sett har normalt én oppgave fra hver) og får hver sin fulle del med drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn tredelingen (begreper + oligopol + markedssvikt) og avgrenser mot SOK1002/ECON1210. |
| 1 | Marked, velferd og effektivitet | 3 | Markedskryss, samfunnsøkonomisk overskudd og effektivitet/dødvektstap er fellesspråket begge søyler bruker (effektivitetstap ved monopol, ved eksternalitet, ved fellesgode). Forutsatt aktivt overalt → eget fundament. |
| 2 | Markedsmakt: monopol, Lerner og prisdiskriminering | 4 | Monopoltilpasning ~70 % (utgangspunkt før duopol), Lerner ~40 %, prisdiskriminering ~25 % (voksende). Nivå 1–2 → 3 teorikapitler + drillkapittel. |
| 3 | Oligopol og spillteori | 7 | Cournot ~80 % (kjernemodellen), spillmatrise+Nash ~60 % (gjennomgående verktøy), Bertrand ~65 %, Stackelberg ~40 %, etableringshindre ~40 %, gjentatt spill/kartell ~30 %, innovasjon ~30 %. Den ene ~100 %-søylen → nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 4 | Markedssvikt: eksternaliteter og fellesgoder | 6 | Eksternalitet + korrigering ~65 % + Pigou ~55 % + kvote ~40 % + Coase ~35 %; fellesgode ~55 % + Samuelson ~50 % + fellesgode som spill ~20 %; verbal politikkvurdering fast fra 2024. Den andre ~100 %-søylen → nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 5 | Nivå-3-begreper: innovasjon, arbeidsmarked og nåverdi | 1 | Innovasjon/appropriabilitet, statistisk diskriminering/kompenserende lønnsforskjeller/humankapital, nåverdi — nyere begrepsgjengangere (~20 % hver) som mest opptrer i begrepsoppgaven → nivå 3 «bør kjenne godt» → 1 kompakt kapittel. |
| 6 | Eksamenstrening | 6 | Begrepsdrill (~15 gjengangere), sjangerkapittel for den verbale politikkvurderingen (drøfting), og 3 komplette øvingseksamener som speiler Falch-tredelingen og det klassiske regimet. |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de tre drillkapitlene
   (2.4 markedsmakt, 3.7 oligopol, 4.6 markedssvikt) inne i sine egne søyler, fordi
   søylene ER de to gjennomgående eksamensoppgavene og må drilles umiddelbart etter
   teorien. Del 6 beholder begrepsdrillen (sjanger A), politikkvurderings-sjangerkapitlet
   og de tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK1011 har et **drøftingselement** — den verbale
   politikkvurderingen som avslutter markedssviktoppgaven i Falch-regimet (sjanger N).
   Kapittel 5.2 er derfor bygget etter `DNA-drofting.md`s sjangerkapittel-mal
   (oppskrift → gjennomskrevet besvarelse med margkommentarer → momentliste-oppgaver),
   ikke som et regnedrillkapittel. Politikkvurderingen forankres i den forutgående
   modellanalysen (avgiften internaliserer den eksterne kostnaden), ikke i pensumforfattere.
3. Del 1 (marked/velferd) er strengt tatt fellesverktøy, ikke et «tema» som testes
   isolert som egen oppgave, men får egen del fordi samfunnsøkonomisk overskudd og
   effektivitetstap er *fellesspråket* for begge søyler (dødvektstap ved monopol,
   effektivitetstap ved eksternalitet, tap ved underproduksjon av fellesgode) og fordi
   samfunnsøkonomisk overskudd/residualetterspørsel er faste begrepsgjengangere.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsforklaringer, **B** monopoltilpasning + effektivitetstap, **C** Lerner-
indeksen, **D** Cournot, **E** Bertrand + residualetterspørsel, **F** Stackelberg,
**G** spillmatrise/Nash/gjentatt spill, **H** etableringshindre/troverdig trussel,
**I** prisdiskriminering, **J** negativ eksternalitet + korrigerende virkemiddel,
**K** fellesgode (sum av betalingsvillighet + Samuelson), **L** Coase-forhandling,
**M** innovasjon/eksterne effekter, **N** verbal politikkvurdering. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK1011

- **id:** `sok1011-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste tredelingen (begreper + oligopol + markedssvikt), de to søylene, temafrekvensene, sjangerkatalogen A–N og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈25 sett + et titalls sensorveiledninger/fasiter. Skal gjengi: (i) **formen**: 5 timers skriftlig skoleeksamen (09.00–14.00), digital i Inspera; håndtegnede figurer lastes opp (15–30 min ekstra); karakter A–F, 7,5 studiepoeng; **hjelpemidler = kode C**: matematisk formelsamling (Sydsæter, Strøm & Berck) + godkjent kalkulator (under korona 2020–2021 var alle hjelpemidler tillatt / hjemmeeksamen, men da teller *analysen*, ikke gjengivelse); enkelte år engelsk oppgavetekst (V2019, V2022, V2023). (ii) **De to regimene**: det klassiske (≈2012–2020, 2–4 oppgaver, oftest én oligopoloppgave + én markedssviktoppgave, bygget på generell funksjonsform `P = D − X` med konstant `c`) og **Falch-regimet (2024–2025)**: fast tredeling — **oppgave 1 (20 %) seks korte begreper**, **oppgave 2 (35–40 %) oligopol/markedsmakt/etableringshindre**, **oppgave 3 (40–45 %) markedssvikt** (eksternalitet *eller* fellesgode) avsluttet med **verbal politikkvurdering**; nevn kort V2022/V2023-mellomspillet (engelske, poengbaserte case-sett). (iii) **Temafrekvens-tabellene** (to spor, fra analysen §2A/§2B): markedsmakt — Cournot ~80 %, monopol ~70 %, Bertrand ~65 %, spillmatrise+Nash ~60 %, Lerner ~40 %, Stackelberg ~40 %, etableringshindre ~40 %, gjentatt spill ~30 %, kartell ~30 %, innovasjon ~30 %, prisdiskriminering ~25 %, residualetterspørsel ~25 %; markedssvikt — negativ eksternalitet + optimum + effektivitetstap ~65 %, Pigou-avgift ~55 %, fellesgode-definisjon + sum av betalingsvillighet ~55 %, Samuelson/optimal produksjon ~50 %, effektivitetstap regnet ~50 %, kvotemarked ~40 %, Coase ~35 %, fellesgode som spill ~20 %, arbeidsmarkedsbegreper ~20 %, nåverdi ~20 %. (iv) At oppgavene alltid pakkes i **aktualitet** (importkjøtt-kvoteauksjon, forurensende transport, park/infrastruktur, videostrømming-abonnement, vindpark) men at modellen alltid er den samme, bygget på `P = D − X` med konstant `c`. (v) **Sensorens metaregler**: regning + figur + intuisjon er én leveranse; beste-svar-kurver må tolkes og Nash-likevekten begrunnes; definisjonene må sitte; svar poengtert på de oppgitte funksjonene; selvstendig resonnement premieres der læreboka slutter (Stackelberg, sammensatte spill, «ikke direkte i boka»-oppgaver). (vi) **Karakterskillene** (fra analysen §4): bunn (E–D) = riktig oppsett + korrekt monopol-/Cournot-tilpasning + riktig figur med riktig dødvektstap + hovedkonklusjon; midt (C) = komplett beste-svar-utledning med korrekt Nash-likevekt, korrekt Lerner, korrekt markedsløsning vs. optimum med riktig avgift, korrekt sum-av-betalingsvillighet; topp (A/B) = **delspillperfekt likevekt og troverdighet** i etableringsspill, ser at **innovasjonsinsentivene er for svake** (gevinsten deles med konsumentene), skiller pris- fra mengdekonkurransens virkning på **residualetterspørselens elastisitet**, forstår at **eiendomsretten avgjør fordeling, ikke effektiv mengde** i Coase, ser **gratispassasjer-/koordineringssvikten** i fellesgodespill, og drøfter grensetilfeller.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med typisk plassering: begrepsoppgaven (A) er oppgave 1 i Falch-regimet; oligopoloppgaven bygges av B/C → D/E/F (+ G/H som spill-innpakning); markedssviktoppgaven av J *eller* K (+ L eller M), avsluttet med N. **Prognose for neste eksamen** (fra analysen §7): overveldende sannsynlig Falch-tredeling — oppgave 1 seks begreper (markedssvikt, fellesgode, eksternalitet, residualetterspørsel, prisdiskriminering, Lerner, nåverdi, humankapital er varmest); oppgave 2 oligopol (spillteoretisk etableringshinder *eller* Cournot/Bertrand/Stackelberg-tilpasning); oppgave 3 markedssvikt (eksternalitet i produksjon regnet på lineære funksjoner med Pigou-avgift/kvote og effektivitetstap, *eller* fellesgode med sum av betalingsvillighet), med verbal politikkvurdering til slutt. Avslutt med **avgrensningen**: hva som IKKE er pensum (SOK1002s Lagrange-baserte konsument-/produsentteori — bruk kryssbok-lenker til SOK1002 der forkunnskapen trengs; og ECON1210s overveltnings-delingsbrøk), og **leseplanen**: Del 1 er fellesverktøy man må ha klart; Del 2, 3 og 4 er de tre eksamensoppgavene; Del 5 er «bør kjenne»; Del 6 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt Falch-tredelingen 20/40/40 og 300 minutter — sett opp tidsbudsjett for de tre oppgavene» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på uforklarte figurer eller utolkede tall; forsøke å bygge markedsutfallet fra SOK1002s Lagrange-apparat (unødvendig — tilbudssiden er gitt her); dra inn ECON1210s overveltnings-delingsbrøk der en Pigou-avgift skal beregnes; svare generelt om Cournot uten å bruke den oppgitte etterspørselen.
- **Quiz: 14 · Flashcards: 14** (eksamensform, de to regimene, frekvenser, sjangerkatalog, metaregler, avgrensning mot SOK1002/ECON1210)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Marked, velferd og effektivitet *(prioritet: fellesverktøy — må sitte)*

> **Forkunnskaps-skille mot SOK1002:** marginalkostnad, profittmaksimering og en enkel
> etterspørselsfunksjon er byggeklosser SØK1011 forutsetter. Der studenten trenger å
> repetere hvor de kommer fra (MC som $C'(y)$, pristakerbedriftens $p = $ MC), lenker
> boka til SOK1002 — den utleder dem, SØK1011 bruker dem. SØK1011s eget bidrag er
> **markedsutfallet** (kryss, overskudd, effektivitet), ikke bedriftens interne optimering.

#### Kapittel 1.1: Markedskryss, betalingsvillighet og samfunnsøkonomisk overskudd

- **id:** `sok1011-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Etterspørsel som marginal betalingsvillighet, tilbud som marginalkostnad, markedslikevekten i krysset, og samfunnsøkonomisk overskudd $SO = KO + PO$ som effektivitetsmål — fellesspråket resten av boka bruker.
- **Eksamensbelegg:** Samfunnsøkonomisk overskudd er fast begrepsgjenganger (sjanger A, V2024-fasit) og forutsatt i *hver* velferds-/effektivitetsvurdering (monopol, eksternalitet, fellesgode). Inversetterspørselen $P = D - X$ er signaturformen alle oppgaver bygger på. Prioritet: **fellesverktøy** (må sitte). Kryssrefererer til SOK1002 for hvor tilbudskurven kommer fra.
- **Innholdskontrakt:** **Etterspørselskurven som marginal betalingsvillighet** ($MB$): høyden er hva en konsument maksimalt vil betale for neste enhet; invers etterspørsel $P = D - X$. **Tilbudskurven som marginalkostnad** (tas som gitt her — utledet i SOK1002; lenk dit). **Markedslikevekt** i krysset ($MB = MC$): pris og mengde. **Konsumentoverskudd** $KO$ = areal mellom etterspørselskurven og prisen; **produsentoverskudd** $PO$ = areal mellom prisen og tilbudskurven/MC; **samfunnsøkonomisk overskudd** $SO = KO + PO$ = areal mellom $MB$ og $MC$ opp til likevektsmengden. Regn $KO$, $PO$, $SO$ som trekant-/trapesarealer for lineære kurver. Figurkrav: navngi kurvene, likevektspunktet og de tre arealene. Legg grunnlaget for at ethvert avvik fra $MB = MC$ (monopol, eksternalitet) gir et *effektivitetstap* (kap. 1.2).
- **Oppgavesjangre:** A-fundament + byggekloss for B/J/K. Mønstereksempel (A): «Forklar hva samfunnsøkonomisk overskudd er, og vis i en figur hvordan det deles i konsument- og produsentoverskudd i frikonkurranselikevekten.»
- **Typiske feil:** Forveksle $KO$ og $PO$; regne arealet feil (glemme ½ for trekanter); tro at prisen «er» betalingsvilligheten (den er marginal betalingsvillighet for *siste* enhet); ikke se at frikonkurransekrysset maksimerer $SO$.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 1.2: Effektivitet og effektivitetstap (dødvektstap)

- **id:** `sok1011-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok1011-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Samfunnsøkonomisk effektivitet (mengden der $MB = MC$), og effektivitetstapet (dødvektstap) som oppstår når markedet produserer for mye eller for lite — regnet som en trekant og illustrert.
- **Eksamensbelegg:** Effektivitetstap regnet + illustrert har ~50 % frekvens og er den felles konklusjonen i både monopol- (dødvektstap), eksternalitet- (tap fra overproduksjon) og fellesgode-oppgaver (tap fra underproduksjon). «Uklare figurer» og «blande markedsløsning og optimum» er sentrale sensorfeil (§5.3, §5.11). Prioritet: **fellesverktøy** (må sitte).
- **Innholdskontrakt:** **Effektiv mengde** = der marginal betalingsvillighet møter (den relevante) marginalkostnaden. **Effektivitetstap/dødvektstap** = tapet i samfunnsøkonomisk overskudd når faktisk mengde avviker fra den effektive: **trekanten** mellom $MB$-kurven og den relevante $MC$-kurven, fra faktisk til effektiv mengde. Generell oppskrift: (1) finn effektiv mengde ($MB = MC$), (2) finn faktisk mengde (monopol / uregulert marked), (3) tapet = ½ · (grunnlinje) · (høyde) for lineære kurver. Understrek at samme verktøy brukes i tre kontekster: monopol (mengde for *lav*), negativ eksternalitet (mengde for *høy* når privat $MC$ < samfunnets $MC$), fellesgode (mengde for *lav*, gratispassasjer). Figurkrav: navngi de to mengdene, de to kurvene, og tap-trekanten. Vis både det analytiske uttrykket og et talleksempel.
- **Oppgavesjangre:** Byggekloss for B/J/K. Mønstereksempel: «I et marked er $P = 200 - 4X$ og $MC = 40$. Finn den effektive mengden og regn ut effektivitetstapet dersom bare 20 enheter produseres.»
- **Typiske feil:** Blande markedsløsning og samfunnsøkonomisk optimum (feilkatalog §5.3); glemme ½ i trekantarealet; regne tapet mellom feil kurver; uklar/umerket figur (§5.11); tro at ethvert avvik er «tap for konsumenten» (det er tap i *samlet* overskudd).
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 1.3: Markedsformer og residualetterspørsel

- **id:** `sok1011-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok1011-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Oversikt over markedsformene (frikonkurranse, monopol, oligopol) og begrepet residualetterspørsel — etterspørselen som møter én enkelt bedrift gitt konkurrentenes atferd.
- **Eksamensbelegg:** Residualetterspørsel er fast begrepsgjenganger (sjanger A, ~25 %; V2018, V2024, H2024, V2025) og selve broen til oligopolmodellene. Elastisitetssammenligningen (residualetterspørsel *mer* elastisk ved pris- enn ved mengdekonkurranse) er en A/B-markør (§5.7). Prioritet: **kunne** (fundament for Del 2–3).
- **Innholdskontrakt:** **Markedsformene** kort: frikonkurranse (pristakere, $p = MC$), monopol (én tilbyder, prissetter), oligopol (få bedrifter, strategisk avhengighet). **Residualetterspørsel** = etterspørselen som gjenstår for én bedrift når konkurrentenes tilbud/priser er trukket fra: ved mengdekonkurranse er bedrift As residualetterspørsel $P = D - x_b - x_a$ (konkurrentens mengde $x_b$ skyver kurven innover); ved priskonkurranse med identiske varer er residualetterspørselen mot én bedrift **horisontal** (mister alle kunder ved minste prisøkning). **Elastisitetspoeng (A/B):** residualetterspørselen er *mer* elastisk enn markedsetterspørselen, og *mer* elastisk ved pris- enn ved mengdekonkurranse (fordi konkurrentenes priser er låst ved priskonkurranse, men reagerer ved mengdekonkurranse). Legg grunnlaget for Cournot (kap. 3.2) og Bertrand (kap. 3.3).
- **Oppgavesjangre:** A + E-fundament. Mønstereksempel (A): «Forklar kort hva residualetterspørsel er, og hvorfor den er mer elastisk enn den samlede markedsetterspørselen.»
- **Typiske feil:** Forveksle residual- og markedsetterspørsel; feil elastisitetssammenligning pris vs. mengde (§5.7); tro at residualetterspørselen alltid er horisontal (bare ved priskonkurranse med identiske varer); ikke koble begrepet til den konkrete oligopolmodellen.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — samfunnsøkonomisk overskudd, KO/PO, effektivitetstap, residualetterspørsel, markedsformer, sjanger A; 1.B markedslikevekt + KO/PO/SO regnet på lineære kurver med figur; 1.C effektivitetstap ved en gitt mengdeavvik, trekantregning + figur; 1.D residualetterspørsel og elastisitetssammenligning pris vs. mengde, sjanger A+E-fundament).

---

### Del 2 — Markedsmakt: monopol, Lerner og prisdiskriminering *(prioritet: PERFEKT/KUNNE — oligopoloppgavens inngang)*

#### Kapittel 2.1: Monopoltilpasning og effektivitetstap

- **id:** `sok1011-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-1-2`
- **Kapitteltype:** teori
- **description:** Monopolistens tilpasning $MR = MC$, resultatet $x = (D-c)/2$, og dødvektstapet — analytisk og grafisk. Utgangspunktet for hele markedsmaktdelen og ofte inngangen til duopol.
- **Eksamensbelegg:** ~70 % frekvens; monopol er ofte utgangspunktet før duopol (sammenlign med Cournot/Stackelberg), og dødvektstapet regnes + illustreres (V2017, V2023-resit). Prioritet: **perfekt**.
- **Innholdskontrakt:** Problemet $\max \pi = (P(x) - c)\,x$ med $P = D - x$. Deriver → **marginalinntekt** $MR = D - 2x$ (dobbelt så bratt som etterspørselen), sett $MR = MC = c$ → **monopolmengde $x = (D-c)/2$**, pris $P = (D+c)/2$, profitt $(D-c)^2/4$. **Figur:** etterspørsel, $MR$ (dobbelt så bratt), konstant $MC = c$; monopoltilpasningen der $MR = MC$; **dødvektstapet** = trekanten mellom etterspørselskurven og $MC$ fra monopolmengden til den effektive mengden (der $P = MC$, dvs. $x = D - c$). Utled det analytiske uttrykket for effektivitetstapet ($= \tfrac18 (D-c)^2$). Tolk: monopolet holder mengden nede for å presse prisen opp; tapet er verdien av de enhetene som ikke produseres selv om betalingsvilligheten overstiger kostnaden. Kryssrefererer til SOK1002 for profittmaksimeringsapparatet, men gjør monopol-varianten (fallende etterspørsel, $MR \ne P$) her.
- **Oppgavesjangre:** B. Mønstereksempel: «En monopolist står overfor $P = a - bX$ med konstant enhetskostnad $c$. Finn profittmaksimerende mengde, pris og overskudd, og illustrer det samfunnsøkonomiske effektivitetstapet i en figur.»
- **Typiske feil:** Sette $P = MC$ (frikonkurranse) i stedet for $MR = MC$ (monopol); glemme at $MR$ er dobbelt så bratt som etterspørselen; regne dødvektstapet mellom feil kurver eller feil mengder; tegne uklar figur uten navngitt tap-trekant (§5.11); ikke tolke hvorfor monopolet er ineffektivt.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.2: Lerner-indeksen

- **id:** `sok1011-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok1011-2-1`, `sok1011-1-3`
- **Kapitteltype:** teori
- **description:** Lerner-indeksen $L = (p - MC)/p = 1/|\varepsilon|$ som mål på markedsmakt — utledet fra monopolets førsteordensbetingelse og tolket.
- **Eksamensbelegg:** ~40 % frekvens; fast begreps- og deloppgave (H2019, V2019, V2015, V2024). Utledningen fra FOB kreves aktivt. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** Start fra monopolets FOB, skriv den som $p - C'(x) = -p'(x)\cdot x$; del på $p$ og innfør **etterspørselselastisiteten** $\varepsilon$ → **Lerner-indeksen** $L = (p - MC)/p = 1/|\varepsilon|$. **Tolkning:** $L$ måler den relative prispåslaget over marginalkostnad — avviket er størst når etterspørselen er lite elastisk (uelastisk → høy markedsmakt); under frikonkurranse er $\varepsilon$ uendelig og $L = 0$ (ingen markedsmakt). Ved symmetrisk Cournot-duopol modifiseres uttrykket ($L = 1/(2|\varepsilon|)$ — foregriper kap. 3.2). Kort om elastisitet som verktøy (kryssrefererer til SOK1002 for selve elastisitetsdefinisjonen). Understrek den **verbale tolkningen** av tallet (sensorkrav).
- **Oppgavesjangre:** C. Mønstereksempel: «Utled Lerner-indeksen for et monopol og forklar hva den sier om markedsmakt, og hva den blir under frikonkurranse.»
- **Typiske feil:** Bomme på fortegn/plassering i FOB-manipulasjonen; oppgi $L$ uten den verbale tolkningen (§5.8); glemme at $L = 0$ under frikonkurranse; blande sammen elastisk (lav markedsmakt) og uelastisk (høy) etterspørsel.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: Prisdiskriminering (1., 2. og 3. grad)

- **id:** `sok1011-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-2-1`
- **Kapitteltype:** teori
- **description:** De tre gradene av prisdiskriminering, selvselektering/insentivbetingelse ved 2. grad, og velferdseffektene — et voksende tema fra 2023.
- **Eksamensbelegg:** ~25 % frekvens og **voksende** (V2023 + resit, V2024/H2024 som begrep). Fast begrepsgjenganger. Prioritet: **kjenne/kunne** (nivå 2–3, stigende).
- **Innholdskontrakt:** Definer de tre gradene: **1. grad (perfekt)** — pris = marginal betalingsvillighet for hver enhet → effektiv mengde, men hele overskuddet til selger (ingen $KO$). **2. grad (meny/kvantumsrabatt, selvselektering)** — bedriften tilbyr en meny $(x_i, F_i)$ og lar kundene velge; ved full informasjon settes hver plan så kundetypen er indifferent; når typene ikke kan skilles, må høyprisplanens avgift **senkes** slik at høytype-kunden ikke foretrekker lavtype-planen (**insentiv-/selvselekteringsbetingelse**). **3. grad (segmentert etter gruppe)** — sett $MR = MC$ i hvert delmarked; høyest pris i det minst elastiske. **Velferd:** 1. grad effektiv (men fordelingen skjev), 3. grad tvetydig. Fasit-kalibrert case (til vanskelighetsnivå, ikke gjenbruk): to kundetyper $p = 20 - 4x$ og $p = 20 - 2x$, $MC = 0$ → planene og den senkede avgiften ved selvselektering. Kort figur/tabell.
- **Oppgavesjangre:** I. Mønstereksempel: «Forklar hva 2. grads prisdiskriminering er, og finn de profittmaksimerende abonnementene når bedriften ikke kan skille kundetypene fra hverandre.»
- **Typiske feil:** Blande gradene; glemme selvselekterings-/insentivbetingelsen ved 2. grad (senke feil plan); tro at all prisdiskriminering er velferdstap (1. grad er effektiv); ikke sette $MR = MC$ per delmarked ved 3. grad.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.4: Drill: markedsmaktoppgaven

- **id:** `sok1011-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok1011-2-3`, `sok1011-2-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på monopol-/markedsmaktdelen: fra gitt etterspørsel og enhetskostnad til fullført A-besvarelse med monopoltilpasning, dødvektstap, Lerner-indeks og evt. prisdiskriminering.
- **Eksamensbelegg:** Dekker sjangrene B, C, I samlet — monopol/markedsmakt som utgjør (sammen med oligopol) oppgave 2. Prioritet: **perfekt** (monopoldelen) / **kunne** (Lerner, prisdiskriminering).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp monopolistens profitt med $P = D - x$ og konstant $c$; 2) deriver → $MR = D - 2x$, sett $MR = MC$ → mengde/pris/profitt, tolk; 3) figur med etterspørsel, $MR$, $MC$, tilpasning og **dødvektstap-trekant** (navngitt); 4) regn effektivitetstapet; 5) evt. Lerner-indeks (utledet fra FOB) med tolkning; 6) evt. prisdiskriminering (grad + velferd). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig $MR = MC$-innsikten, den navngitte tap-trekanten, den verbale tolkningen). **8–12 oppgaver** på eksamensnivå som roterer funksjonsform (`P = D − X` generell / talleksempel / ulike `c`) × leveranse (monopoltilpasning / dødvektstap / Lerner / prisdiskriminering), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** B, C, I. Mønstereksempel (full kjede): «(a) En monopolist har $P = 100 - 2X$ og $c = 20$. Finn mengde, pris og profitt. (b) Illustrer og regn ut dødvektstapet. (c) Utled Lerner-indeksen i tilpasningen og tolk den.»
- **Typiske feil:** Hele markedsmakt-repertoaret: $P = MC$ i stedet for $MR = MC$ (§5-slektning), feil dødvektstap-trekant (§5.3/§5.11), utolket Lerner (§5.8), umerkede figurer (§5.11).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper markedsmakt — monopol, marginalinntekt, Lerner-indeks, prisdiskriminering, dødvektstap, sjanger A; 2.B monopoltilpasning + effektivitetstap analytisk og grafisk, sjanger B; 2.C Lerner-indeksen utledet + tolket, og 3. grads prisdiskriminering per delmarked, sjanger C+I; 2.D full markedsmaktoppgave inkl. 2. grads prisdiskriminering med selvselektering, sjanger B+C+I).

---

### Del 3 — Oligopol og spillteori *(prioritet: PERFEKT — oppgave 2, den ene søylen)*

#### Kapittel 3.1: Spillmatrise, Nash-likevekt og dominant strategi

- **id:** `sok1011-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-1-3`
- **Kapitteltype:** teori
- **description:** Spillteoriens grunnverktøy: utbetalingsmatrisen, dominant strategi og Nash-likevekt — det gjennomgående verktøyet i hele oligopoldelen.
- **Eksamensbelegg:** ~60 % frekvens, og verktøyet som går igjen i etableringshindre, karteller og fellesgodespill. Nash-likevekt er en fast begrepsgjenganger (sjanger A) som «må defineres eksplisitt» og «begrunnes». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Utbetalingsmatrise** (2×2): to spillere, hver med to strategier, utbetaling i hver celle. **Dominant strategi** = en strategi som gir høyest utbetaling uansett hva motparten gjør. **Nash-likevekt** = et strategipar der ingen spiller kan tjene på ensidig å avvike (**«ingen angrer gitt den andres valg»** — sensorens formulering, må sitte). Finn Nash-likevekt(er) ved beste-svar-analyse celle for celle; håndter fangens dilemma (dominant strategi gir ineffektiv likevekt). Regn utbetalingene fra en tekstbeskrivelse (strategier: samarbeid/duopol, innovere/ikke, bidra/ikke). **Definisjonskrav:** studenten skal *definere* Nash-likevekt og dominant strategi, ikke bare finne dem. Legg grunnlaget for at Cournot-likevekten (kap. 3.2) er en Nash-likevekt i mengder.
- **Oppgavesjangre:** G. Mønstereksempel: «Sett opp spillmatrisen for to bedrifters valg mellom å produsere kartellmengde og duopolmengde, finn Nash-likevekten, og forklar hva det betyr at et strategipar er en Nash-likevekt.»
- **Typiske feil:** Ikke *definere* Nash-likevekt / bare peke på en celle uten å begrunne at ingen angrer (§5.1); forveksle dominant strategi og Nash-likevekt; overse at det kan finnes flere (eller ingen rene) Nash-likevekter; regnefeil i utbetalingene.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.2: Cournot-konkurranse (mengde)

- **id:** `sok1011-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `sok1011-3-1`, `sok1011-2-1`
- **Kapitteltype:** teori
- **description:** Kjernemodellen: to bedrifter velger mengde, beste-svar-kurvene utledes fra førsteordensbetingelsene, tegnes i (`xₐ`,`x_b`)-planet, og Nash-likevekten $x = (D-c)/3$ ligger i skjæringen.
- **Eksamensbelegg:** ~80 % frekvens — selve motoren i konkurransedelen, spurt de fleste år. Beste-svar-kurvene «må tolkes» og Nash-likevekten «må begrunnes» (sensorkrav). Prioritet: **perfekt** (bokas viktigste enkeltkapittel på oligopolsiden).
- **Innholdskontrakt:** To bedrifter, samlet mengde $X = x_a + x_b$, pris $P = D - X$, lik konstant enhetskostnad $c$. **Steg 1:** bedrift As inntekt $[D - (x_a + x_b)]\,x_a$, deriver mhp. $x_a$ (behandle $x_b$ som gitt) → **marginalinntekt** $D - 2x_a - x_b$. **Steg 2:** sett $MR = c$ → **beste-svar-kurven** $x_a = (D - c - x_b)/2$ (symmetrisk for B); **tolk kurven** (As optimale mengde faller når B produserer mer — strategiske substitutter). **Steg 3:** tegn begge beste-svar-kurvene i $(x_a, x_b)$-diagram; skjæringspunktet er **Nash-likevekten** $x_a = x_b = (D-c)/3$, samlet $X = 2(D-c)/3$, pris $P = (D + 2c)/3$, profitt per bedrift $(D-c)^2/9$. **Steg 4:** **begrunn** at det er en Nash-likevekt (ingen bedrift angrer gitt den andres valg). Sammenlign med monopol ($X$ lavere, pris høyere) og frikonkurranse ($X = D-c$, $p = c$) — Cournot ligger mellom. Kort om asymmetriske kostnader ($c_a \ne c_b$) og N bedrifter ($x_i = (D-c)/(N+1)$). Figurkrav: navngi begge beste-svar-kurver og likevekten.
- **Oppgavesjangre:** D. Mønstereksempel: «To bedrifter med lik konstant marginalkostnad $c$ konkurrerer på mengde i markedet $P = D - X$. Sett opp optimeringsproblemene, utled og tolk beste-svar-kurvene, tegn dem, og finn Nash-likevekten.»
- **Typiske feil:** **Ikke tolke beste-svar-kurvene / ikke begrunne Nash-likevekten** (feilkatalog §5.1, selve sensor-fella); behandle konkurrentens mengde som en valgvariabel ved deriveringen; regnefeil i likningssystemet; glemme figuren i $(x_a, x_b)$-planet; ikke sammenligne med monopol/frikonkurranse.
- **Quiz: 28 · Flashcards: 24**

#### Kapittel 3.3: Bertrand-konkurranse (pris) og Bertrand-paradokset

- **id:** `sok1011-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1011-3-2`
- **Kapitteltype:** teori
- **description:** Priskonkurranse med identiske varer: bedriftene underbyr hverandre til $p = c$ (Bertrand-paradokset), residualetterspørselen er horisontal, og ulike enhetskostnader gir lavkostbedriften markedet.
- **Eksamensbelegg:** ~65 % frekvens; fast som kontrast til Cournot. Bertrand-paradokset er begrepsgjenganger som «må defineres». Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** Med **identiske varer og priskonkurranse** underbyr hver bedrift den andre så lenge prisen er over $c$ → likevekt $p = c$, profitt = 0: **Bertrand-paradokset** — bare *to* bedrifter gir frikonkurranseutfallet. **Residualetterspørselen** mot én bedrift er **horisontal** (setter du prisen minst over konkurrentens, mister du alle kunder; setter du under, tar du hele markedet). **Ulike enhetskostnader:** lavkostbedriften ($c_{lav} < c_{høy}$) tar hele markedet ved å prise like under høykostbedriftens $c$; profitt $\approx (c_{høy} - c_{lav})\cdot x(c_{høy})$. Sammenlign eksplisitt med Cournot: priskonkurranse gir lavere pris/mer effektivitet enn mengdekonkurranse for samme antall bedrifter — koble til residualetterspørselens *høyere* elastisitet ved priskonkurranse (kap. 1.3, A/B-poeng §5.7).
- **Oppgavesjangre:** E. Mønstereksempel: «Forklar hva Bertrand-paradokset er, og hva som skjer i markedet dersom den ene bedriften har lavere enhetskostnad enn den andre.»
- **Typiske feil:** Tro at to bedrifter ikke kan gi frikonkurranseutfall (paradokset); glemme at residualetterspørselen er horisontal ved priskonkurranse; feil elastisitetssammenligning pris vs. mengde (§5.7); ikke definere Bertrand-paradokset eksplisitt.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.4: Stackelberg (leder/følger)

- **id:** `sok1011-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-3-2`
- **Kapitteltype:** teori
- **description:** Sekvensiell mengdekonkurranse løst med baklengs induksjon: lederen $(D-c)/2$, følgeren $(D-c)/4$, samlet mengde større enn i Cournot → lavere pris og høyere konsumentoverskudd.
- **Eksamensbelegg:** ~40 % frekvens; ofte «gått gjennom på forelesning» uten å stå i boka → selvstendig resonnement premieres (§4). KO-sammenligningen med Cournot er A/B-markør. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** Bedrift A (leder) velger mengde **før** bedrift B (følger). Løs ved **baklengs induksjon**: (1) sett opp følgerens beste-svar $x_b = (D - c - x_a)/2$ (fra kap. 3.2); (2) sett den inn i lederens profitt og maksimer mhp. $x_a$ → **leder $x_a = (D-c)/2$**, (3) sett tilbake → **følger $x_b = (D-c)/4$**; samlet $X = 3(D-c)/4$ (større enn Cournots $2(D-c)/3$) → **lavere pris**. **Poeng:** lederen «binder seg» til stor mengde og mykner konkurrenten; **konsumentene tjener** på Stackelberg (høyere $KO$) fremfor Cournot (A/B-poeng). Kort om at førstetrekksfordelen er reell fordi bindingen er troverdig (kobler til delspillperfekthet, kap. 3.6).
- **Oppgavesjangre:** F. Mønstereksempel: «Bedrift A velger mengde før bedrift B. Finn produksjonen i hver bedrift og markedsprisen, og sammenlign konsumentoverskuddet med Cournot-tilfellet.»
- **Typiske feil:** Løse simultant (Cournot) i stedet for baklengs (Stackelberg); glemme å sette følgerens beste-svar inn *før* maksimering; feil KO-sammenligning; ikke tolke førstetrekksfordelen økonomisk.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.5: Gjentatt spill, kartell og tit-for-tat

- **id:** `sok1011-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-3-1`, `sok1011-3-2`
- **Kapitteltype:** teori
- **description:** Hvordan samarbeid (kartell = monopolutfall) kan opprettholdes som likevekt i et gjentatt spill via tit-for-tat, forutsatt en høy nok diskonteringsfaktor.
- **Eksamensbelegg:** Kartell ~30 % (H2018, V2014, V2016) + gjentatt spill/tit-for-tat ~30 %. Toppsjikt-tema (drøfter grensetilfeller). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Kartell** = bedriftene samarbeider om å produsere monopolmengden og dele monopolprofitten; problemet er at kartellet ikke er en Nash-likevekt i ettperiodespillet (hver bedrift frister til å avvike/produsere mer). **Gjentatt spill:** i et uendelig gjentatt spill kan samarbeid opprettholdes som likevekt via **tit-for-tat** (samarbeid til den andre avviker, deretter straff). Betingelsen: den neddiskonterte gevinsten av fortsatt samarbeid ≥ engangsgevinsten ved å avvike pluss det neddiskonterte tapet fra straffefasen → krav om **diskonteringsfaktor $\delta$ stor nok** (typisk $\delta > 0{,}5$ i standardcaset). Regn et konkret 2×2-kartellspill (f.eks. $D = 4$, $c = 1$): duopol- vs. kartellutbetaling, avviksgevinst, og terskelen for $\delta$. Tolk: samarbeid er lettere jo mer bedriftene verdsetter fremtiden.
- **Oppgavesjangre:** G. Mønstereksempel: «Sett opp spillmatrisen for de to bedriftenes valg mellom kartell- og duopolmengde, finn Nash-likevekten i ettperiodespillet, og vurder om samarbeid kan opprettholdes ved uendelig gjentakelse.»
- **Typiske feil:** Tro at kartell er en Nash-likevekt i ettperiodespillet; glemme diskonteringsfaktor-betingelsen; regne avviksgevinsten feil; ikke tolke rollen til $\delta$ (verdsetting av fremtiden).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.6: Etableringshindre, troverdig trussel og innovasjon

- **id:** `sok1011-3-6` · **number:** 3.6 · **estimatedMinutes:** 60 · **prerequisites:** `sok1011-3-5`, `sok1011-3-4`
- **Kapitteltype:** teori
- **description:** Etablering modellert som spilltre løst med baklengs induksjon (delspillperfekt likevekt), hvorfor en priskrigstrussel er utroverdig uten overinvestering, og de eksterne effektene av innovasjon.
- **Eksamensbelegg:** Etableringshindre ~40 % (V2019, H2019, H2024, V2025) + innovasjon ~30 % (H2014, V2018, H2016). Delspillperfekt likevekt + troverdighet + «innovasjonsinsentivene er for svake» er de tydeligste A/B-markørene (§4). Prioritet: **kunne** (nivå 2, men høyt belønnet).
- **Innholdskontrakt:** **Etableringsspill:** modeller som et **spilltre** (nykommer velger etablere/ikke; etablert velger priskrig/ordinær konkurranse); finn den **delspillperfekte likevekten** ved baklengs induksjon. **Kjernepoeng:** en ren trussel om priskrig er *ikke troverdig* dersom aggressiv konkurranse ikke er optimal *etter* at nykommeren har etablert seg — men **overinvestering** som senker den etablertes marginalkostnad (eller binder kapasitet) gjør trusselen troverdig og avskrekker etablering. Andre virkemidler: prisgarantier, merkevarebygging, bindende kundekontrakter. **Innovasjon (eksterne effekter):** prosessinnovasjon senker MC; men under (pris)konkurranse må innovatøren **dele gevinsten med konsumentene** ($KO$ øker via lavere priser) → den innkasserer *ikke* hele den samfunnsøkonomiske gevinsten → **innovasjonsinsentivene er for svake** (appropriabilitetsproblem; begrunner patent). Positive eksternaliteter: lavere priser, kunnskapsspredning. Negativ vinkling: «business stealing» under imperfekt konkurranse. **Definer** delspillperfekt likevekt og troverdig trussel.
- **Oppgavesjangre:** H (+ M). Mønstereksempel: «Bruk et spilltre til å vurdere om et etablert selskap kan hindre en nykommer i å etablere seg, og forklar hvordan en overinvestering kan gjøre en priskrigstrussel troverdig.»
- **Typiske feil:** **Behandle en priskrigstrussel som troverdig** uten å sjekke delspillperfekthet (§5.2, selve fella); løse spilltreet forlengs i stedet for baklengs; glemme at innovasjonsgevinsten deles med konsumentene → feilkonkludere at insentivene er riktige (§5.10); ikke definere delspillperfekt likevekt.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 3.7: Drill: oligopoloppgaven

- **id:** `sok1011-3-7` · **number:** 3.7 · **estimatedMinutes:** 90 · **prerequisites:** `sok1011-3-6`, `sok1011-3-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele oligopoloppgaven: fra gitt etterspørsel og kostnad til fullført A-besvarelse med beste-svar-kurver, Nash-likevekt, sammenligning av konkurranseformer og evt. spilltre/kartell.
- **Eksamensbelegg:** Dekker sjangrene D, E, F, G, H samlet — hele oligopoldelen (~35–40 % av eksamen, ~100 %-gjenganger). **Cournot drilles til overmål** (kjernesjangeren). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser konkurranseform (mengde = Cournot, pris = Bertrand, sekvensiell = Stackelberg, spillmatrise = G, etablering = spilltre); 2) (Cournot) sett opp begge bedrifters profitt, deriver → beste-svar-kurver, **tolk dem**, tegn i $(x_a, x_b)$-planet, finn og **begrunn** Nash-likevekten; (Bertrand) $p = c$-argumentet + ulike kostnader; (Stackelberg) baklengs induksjon; 3) regn mengde/pris/profitt og sammenlign konkurranseformene (mengde og pris ordnet: monopol < Cournot < Stackelberg < Bertrand/frikonkurranse); 4) evt. spillmatrise/kartell (Nash + gjentatt spill med $\delta$) eller spilltre (delspillperfekt likevekt, troverdig trussel); 5) tolk alt verbalt. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig tolkningen av beste-svar-kurvene, begrunnelsen av Nash-likevekten, sammenligningen av konkurranseformer, delspillperfektheten). **10–15 oppgaver** på eksamensnivå som roterer konkurranseform × leveranse (likevekt / sammenligning / spillmatrise / spilltre / kartell), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** D, E, F, G, H. Mønstereksempel (full kjede): «(a) $P = 120 - X$, $c = 30$. Finn Cournot-likevekten med to bedrifter, tegn beste-svar-kurvene og begrunn likevekten. (b) Hva blir mengde og pris ved Stackelberg? (c) Sammenlign konsumentoverskuddet i de to tilfellene. (d) Kan de to bedriftene opprettholde kartellsamarbeid ved gjentatt spill?»
- **Typiske feil:** Hele oligopol-repertoaret fra §5: utolkede beste-svar-kurver / ubegrunnet Nash (§5.1), utroverdig trussel behandlet som troverdig (§5.2), feil elastisitet residualetterspørsel (§5.7), umerkede figurer (§5.11), generell teori uten de oppgitte funksjonene (§5.9).
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper oligopol/spill — Nash-likevekt, dominant strategi, Bertrand-paradokset, residualetterspørsel, delspillperfekt likevekt, sjanger A; 3.B Cournot komplett — beste-svar-kurver, tegning, Nash-likevekt, sammenligning med monopol, sjanger D; 3.C Bertrand + Stackelberg med sammenligning av konkurranseformer, sjanger E+F; 3.D spillmatrise + gjentatt spill/kartell + spilltre med delspillperfekt likevekt, sjanger G+H).

---

### Del 4 — Markedssvikt: eksternaliteter og fellesgoder *(prioritet: PERFEKT — oppgave 3, den andre søylen)*

#### Kapittel 4.1: Negativ eksternalitet: markedsløsning vs. samfunnsøkonomisk optimum

- **id:** `sok1011-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1011-1-2`
- **Kapitteltype:** teori
- **description:** Negativ eksternalitet i produksjon: markedet produserer for mye fordi den private marginalkostnaden ikke inkluderer den eksterne skaden — markedsløsning, samfunnsøkonomisk optimum ($MB = MSC$) og effektivitetstapet.
- **Eksamensbelegg:** ~65 % frekvens — kronsjangeren i markedssviktdelen (den ene søylen sammen med fellesgode). «Blande markedsløsning og optimum» er sensorfeil #3 (§5.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Eksternalitet** = en virkning på tredjepart som ikke prises i markedet (negativ i produksjon: forurensning). **Marginal privat kostnad** $MPC$; **marginal ekstern skade** (fra skadefunksjon $Cs(x)$ eller $E(x)$: marginal skade $= Cs'(x)$); **marginal samfunnsøkonomisk kostnad** $MSC = MPC + \text{marginal skade}$. **Markedsløsning:** der privat marginal betalingsvillighet = privat marginalkostnad ($MPB = MPC$) → mengde $x_m$. **Samfunnsøkonomisk optimum:** der $MB = MSC$ → mengde $x^* < x_m$ (markedet produserer **for mye**). **Effektivitetstap:** trekanten mellom $MSC$ og $MB$ fra $x^*$ til $x_m$ — regn ut og illustrer. Fasit-kalibrerte former (til vanskelighetsnivå): $MB = 200 - 15X$, $MPC = 20 + 5X$, marginal skade $20X$; eller $XE = 100 - 2P$, $XT = 10 + P$, skade 15 per enhet. Figurkrav: navngi $MPB$/$MB$, $MPC$, $MSC$, begge mengder og tap-trekanten.
- **Oppgavesjangre:** J (del 1). Mønstereksempel: «Produksjonen forurenser med en marginal skade som stiger i mengden. Finn markedsløsningen, det samfunnsøkonomiske optimum og effektivitetstapet uten regulering.»
- **Typiske feil:** **Blande markedsløsning og optimum** — sette optimum der $MPB = MPC$ i stedet for $MB = MSC$ (feilkatalog §5.3); glemme å legge marginal skade til $MPC$; regne effektivitetstapet mellom feil kurver; uklar figur uten $MSC$-kurve (§5.11).
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 4.2: Korrigerende virkemidler: Pigou-avgift og kvotemarked

- **id:** `sok1011-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1011-4-1`
- **Kapitteltype:** teori
- **description:** Hvordan en Pigou-avgift ($t$ = marginal skade i optimum) eller et kvotesystem lukker gapet mellom markedsløsning og optimum — og hvorfor «inntekt > skade» ikke betyr at avgiften er for høy.
- **Eksamensbelegg:** Pigou ~55 % + kvotemarked ~40 % (H2013, H2018, V2020, V2023). Sensorfeil #4 (avgift = total skade i stedet for marginal skade) er en klassisk felle (§5.4). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Pigou-avgift:** en stykkavgift $t$ = **marginal skade i det samfunnsøkonomiske optimum** flytter den private tilpasningen ($MPC + t$) slik at markedet produserer optimumsmengden $x^*$. Utled $t$ fra kravet $MPC + t = MSC$ i $x^*$. **Kvote/kvotemarked:** sett total tillatt mengde = $x^*$; **kvoteprisen** blir lik marginal skade i optimum → samme utfall som avgiften (avgift og kvote er «to sider av samme sak» ved sikkerhet). Vurder **avgift vs. kvote** (pris- vs. mengderegulering). **Sensor-poeng / warning:** avgiftsinntekten ($t \cdot x^*$) kan overstige den totale skaden uten at avgiften er «for høy» — avgiften betales på *hele* mengden mens den relevante sammenligningen er på *marginen* (§5.4). Fasit-kalibrert: med $MB = 200 - 15X$, $MPC = 20 + 5X$, marginal skade $20X$ → finn $x^*$ og optimal $t$. Kort om at avgiften internaliserer kostnaden (broen til den verbale politikkvurderingen, kap. 4.5/5.2).
- **Oppgavesjangre:** J (del 2). Mønstereksempel: «Med $XE = 100 - 2P$, $XT = 10 + P$ og en marginal skade på 15 per enhet, finn den avgiften som gir optimal produksjon, og forklar hvorfor en kvote på optimumsmengden gir samme utfall.»
- **Typiske feil:** **Sette avgiften lik total skade** i stedet for marginal skade i optimum (§5.4); tro at «avgiftsinntekt > skade» betyr at avgiften er for høy (§5.4); glemme at kvoteprisen = marginal skade i optimum; regne avgiften i markedsmengden i stedet for i optimum.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.3: Coase-forhandling og eiendomsrett

- **id:** `sok1011-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1011-4-1`
- **Kapitteltype:** teori
- **description:** Når partene kan forhandle: Coase-teoremet — koordinering øker samlet velferd, eiendomsretten bestemmer fordelingen (ikke den effektive mengden), og forhandlingsmengden.
- **Eksamensbelegg:** ~35 % frekvens (V2015, V2018, V2023-resit). At **eiendomsretten avgjør fordeling, ikke effektiv mengde** er en tydelig A/B-markør (§4). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** To aktører der A påfører B en eksternalitet. **Ukoordinert tilpasning:** A maksimerer bare $\pi_a$. **Koordinert tilpasning:** maksimer $\pi_a + \pi_b$ (samlet velferd) → lavere aktivitet. **Coase-teoremet:** ved fravær av transaksjonskostnader og veldefinerte eiendomsretter forhandler partene seg fram til den *effektive* mengden uansett hvem som har retten — **eiendomsretten bestemmer bare fordelingen** (hvem som betaler hvem), ikke den effektive mengden. **Forhandlingsmengde** = mengdeintervallet der begge kan tjene på en avtale (kompensasjon overfører gevinsten). Fasit-kalibrert (til nivå): $\pi_a = x_a - \tfrac12 x_a^2$, skade $\tfrac12 x_a$ → ukoordinert $x_a = 1$, koordinert $x_a = \tfrac12$; koordinering øker velferden, og B kan kompensere A. Kontrast mot Pigou (offentlig virkemiddel vs. privat forhandling); Coase forutsetter få parter / lave transaksjonskostnader.
- **Oppgavesjangre:** L. Mønstereksempel: «Bedrift A forurenser bedrift B. Finn A's produksjon uten og med samarbeid, forklar hvorfor et samarbeid øker den samlede velferden, og hva eiendomsretten har å si.»
- **Typiske feil:** Tro at eiendomsretten endrer den *effektive* mengden (den endrer bare fordelingen); regne den koordinerte tilpasningen fra $\pi_a$ alene; glemme kompensasjonen/forhandlingsmengden; ikke se at Coase forutsetter lave transaksjonskostnader.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.4: Fellesgoder: sum av betalingsvillighet og Samuelson-betingelsen

- **id:** `sok1011-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok1011-1-2`
- **Kapitteltype:** teori
- **description:** Fellesgodets definisjon (ikke-rivaliserende, evt. ikke-ekskluderbart), vertikal summering av betalingsvillighet, optimal produksjon der $\Sigma MB = MC$ (Samuelson), og hvordan optimum vokser med antall individer.
- **Eksamensbelegg:** Fellesgode-definisjon + sum av betalingsvillighet ~55 %, Samuelson/optimal produksjon ~50 % — den andre markedssviktsøylen (H2024 park-case). Vertikal vs. horisontal summering er sensorfeil #5 (§5.5). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fellesgode/kollektivt gode** = **ikke-rivaliserende** (én persons bruk reduserer ikke andres) og ofte **ikke-ekskluderbart**. Fordi *alle* nyter *samme* mengde, finnes samlet betalingsvillighet ved **vertikal summering** av individenes $MB$-kurver (i motsetning til private goder, der etterspørsel summeres horisontalt). **Optimal produksjon** der **$\Sigma MB = MC$ (Samuelson-betingelsen)**. **N-avhengighet:** med $N$ like individer med $MB = a - bX$ hver blir samlet $\Sigma MB = N(a - bX)$ → flere individer ⇒ høyere samlet betalingsvillighet ⇒ mer produseres / mer sannsynlig lønnsomt. Fasit-kalibrert (til nivå): 10 innbyggere med $p = 10 - X$ → samlet $P = 100 - 10X$; kostnad $P = 20 + 10X$ → optimal størrelse i krysset. **Gratispassasjerproblemet** (kap. 4.5). Figurkrav: individuell $MB$, vertikalt summert $\Sigma MB$, $MC$, optimal mengde.
- **Oppgavesjangre:** K. Mønstereksempel: «Ti innbyggere har hver betalingsvillighet $p = 10 - X$ for en park. Finn samlet betalingsvillighet, og bestem den optimale størrelsen når marginalkostnaden er $20 + 10X$.»
- **Typiske feil:** **Summere horisontalt** (som for private goder) i stedet for vertikalt (feilkatalog §5.5); glemme at optimal mengde vokser med $N$; forveksle ikke-rivaliserende og ikke-ekskluderbart; ikke sette $\Sigma MB = MC$.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 4.5: Gratispassasjer, fellesgode som spill og verbal politikkvurdering

- **id:** `sok1011-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1011-4-4`, `sok1011-3-1`
- **Kapitteltype:** teori
- **description:** Hvorfor et uregulert marked underproduserer fellesgoder (gratispassasjer, modellert som et bidragsspill), og den verbale politikkvurderingen som avslutter markedssviktoppgaven i Falch-regimet.
- **Eksamensbelegg:** Fellesgode som spill ~20 % (V2020, H2020); den **verbale politikkvurderingen** (sjanger N) er fast fra 2024 og avslutter markedssviktoppgaven. Gratispassasjer-oversettelse er sensorfeil #6 (§5.6). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Gratispassasjerproblemet:** fordi fellesgodet er ikke-ekskluderbart, vil ingen enkelt aktør frivillig betale for helheten → uregulert marked **underproduserer** (eller produserer ingenting), selv når godet er samfunnsøkonomisk lønnsomt. Modeller som et **bidragsspill** (2×2: bidra/ikke bidra): individuelt er «ikke bidra» ofte dominant → Nash-likevekten er underforsyning, selv om alle ville tjent på at alle bidro (koordineringssvikt; kobling til fangens dilemma, kap. 3.1). Løsning: offentlig finansiering/skatt. **Verbal politikkvurdering (sjanger N):** vurder en påstand/gi en anbefaling *uten ny modell*, forankret i den forutgående analysen. Fast type: en bransje hevder at en avgift/regulering «gir konkurser og tap av arbeidsplasser» → svaret: avgiften **internaliserer den eksterne kostnaden**, så de bedriftene som forsvinner er de som ikke er samfunnsøkonomisk lønnsomme når skaden regnes med; ressursene frigjøres til bedre bruk. Eller: «avgiften er for høy fordi inntekten overstiger skaden» → feil (avgiften betales på hele mengden, skaden gjelder marginen). Dette er drøftingselementet — se sjangerkapittel 5.2.
- **Oppgavesjangre:** K (spill-variant) + N. Mønstereksempel (N): «Transportbransjen hevder at en veiavgift bare gir konkurser og færre jobber. Vurder påstanden med utgangspunkt i eksternalitetsanalysen, og gi din anbefaling til politikerne.»
- **Typiske feil:** **Overse gratispassasjerproblemet** — konkludere at et lønnsomt fellesgode automatisk blir produsert i et uregulert marked (§5.6); i politikkvurderingen svare med løs synsing uten å forankre i modellen (avgiften internaliserer kostnaden); gjøre politikkvurderingen til en ny regneoppgave.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.6: Drill: markedssviktoppgaven

- **id:** `sok1011-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok1011-4-5`, `sok1011-4-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele markedssviktoppgaven: fra gitte lineære funksjoner til fullført A-besvarelse med markedsløsning vs. optimum, effektivitetstap, korrigerende virkemiddel (eksternalitet) eller sum av betalingsvillighet (fellesgode), avsluttet med verbal politikkvurdering.
- **Eksamensbelegg:** Dekker sjangrene J, K, L, N samlet — hele markedssviktoppgaven (~40–45 %, ~100 %-gjenganger). **Eksternalitet + Pigou og fellesgode + Samuelson drilles til overmål** (de to arketypene i rotasjon). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** *eksternalitetsspor:* 1) markedsløsning ($MPB = MPC$); 2) samfunnsøkonomisk optimum ($MB = MSC = MPC + $ marginal skade); 3) effektivitetstap (trekant, regnet + figur); 4) korrigerende virkemiddel (Pigou-avgift = marginal skade i optimum, eller kvote); 5) verbal politikkvurdering (sjanger N). *fellesgodespor:* 1) definer fellesgode; 2) vertikal summering av betalingsvillighet; 3) Samuelson $\Sigma MB = MC$ → optimal mengde; 4) N-avhengighet / gratispassasjer; 5) verbal vurdering (bør godet finansieres offentlig?). *Coase-variant:* ukoordinert vs. koordinert, forhandlingsmengde, eiendomsrett. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig skillet markedsløsning/optimum, den navngitte tap-trekanten, marginal (ikke total) skade i avgiften, vertikal (ikke horisontal) summering, og en politikkvurdering forankret i modellen). **10–15 oppgaver** på eksamensnivå som roterer arketype (eksternalitet med avgift / eksternalitet med kvote / Coase / fellesgode / fellesgodespill) × leveranse, alle med nyskrevne, pent kalibrerte lineære funksjoner og `solution` + `hints`.
- **Oppgavesjangre:** J, K, L, N. Mønstereksempel (full kjede, eksternalitet): «(a) $MB = 300 - 10X$, $MPC = 30 + 5X$, marginal skade $15X$. Finn markedsmengde, samfunnsøkonomisk optimum og effektivitetstap. (b) Finn den avgiften som gir optimum. (c) En bransjeforening protesterer mot avgiften — vurder påstanden og gi en anbefaling.»
- **Typiske feil:** Hele markedssvikt-repertoaret fra §5: blande markedsløsning/optimum (§5.3), avgift = total skade (§5.4), horisontal summering av fellesgode (§5.5), oversett gratispassasjer (§5.6), umerkede figurer (§5.11), politikkvurdering uten modellforankring.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper markedssvikt — markedssvikt, positiv/negativ eksternalitet, fellesgode (ikke-rival/ikke-ekskluderbar), Pigou-avgift, gratispassasjer, Coase-teoremet, sjanger A; 4.B negativ eksternalitet — markedsløsning vs. optimum + effektivitetstap + Pigou-avgift/kvote, sjanger J; 4.C fellesgode — vertikal summering + Samuelson + N-avhengighet + gratispassasjer, sjanger K; 4.D Coase-forhandling + verbal politikkvurdering på eksamensnivå, sjanger L+N).

---

### Del 5 — Nivå-3-begreper: innovasjon, arbeidsmarked og nåverdi *(prioritet: KJENNE — begrepsoppgavens rotasjon)*

#### Kapittel 5.1: Innovasjon, arbeidsmarkedsbegreper og nåverdi

- **id:** `sok1011-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1011-3-6`
- **Kapitteltype:** teori (nivå 3)
- **description:** De nyere begrepsgjengangerne som mest opptrer i begrepsoppgaven: innovasjon/appropriabilitet (utdypet), statistisk diskriminering, kompenserende lønnsforskjeller, humankapital og nåverdi.
- **Eksamensbelegg:** Innovasjon ~30 %, arbeidsmarkedsbegreper ~20 % (H2022, V2024, H2024, V2025 som begrep), nåverdi ~20 % (H2022, V2024/H2024). Mest i begrepsoppgaven (20 %) og som innpakning. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **Innovasjon/appropriabilitet** (utdyper kap. 3.6 kort): prosessinnovasjon (lavere MC) vs. produktinnovasjon; innovatøren fanger ikke hele gevinsten (deles med konsumentene) → for svake insentiver → patent som løsning. **Statistisk diskriminering** = når arbeidsgiver bruker gruppekjennetegn som signal om produktivitet i mangel på individuell informasjon. **Kompenserende lønnsforskjeller** = lønnstillegg for ubehagelige/risikofylte jobbtrekk (markedet «betaler for» dårlige arbeidsforhold). **Humankapital** = kunnskap/ferdigheter som øker produktiviteten; investering (utdanning) har kostnad nå og avkastning senere. **Nåverdi** = neddiskontering av fremtidige beløp: $NV = \sum_t \frac{B_t}{(1+r)^t}$; brukes til å vurdere lønnsomheten av en investering/utdanning (sammenlign nåverdi av avkastning mot kostnad). Regn en enkel nåverdi. Hvert begrep: presis definisjon + eksempel + evt. uttrykk (begrepsoppgave-mal, sjanger A). Kryssrefererer til SOK1002 for det underliggende nyttemaks-apparatet der relevant, men holder seg til begrepsnivå.
- **Oppgavesjangre:** A (+ enkel nåverdiregning). Mønstereksempel: «Forklar kort hva humankapital og kompenserende lønnsforskjeller er, og regn nåverdien av en utdanning som koster 100 nå og gir 60 i hver av de to neste årene ved rente 10 %.»
- **Typiske feil:** Forveksle statistisk diskriminering og kompenserende lønnsforskjeller; diskontere nåverdien feil vei / feil eksponent; svare bredt der begrepsoppgaven krever poengterte svar; glemme at innovasjonsgevinsten deles med konsumentene.
- **Quiz: 20 · Flashcards: 24**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper — innovasjon/appropriabilitet, statistisk diskriminering, kompenserende lønnsforskjeller, humankapital, sjanger A; 5.B nåverdi — enkel neddiskontering og lønnsomhetsvurdering av utdanning/investering; 5.C innovasjon og eksterne effekter — for svake insentiver, patent, kunnskapseksternalitet; 5.D blandet begrepsoppgave i Falch-format (seks korte begreper på tvers av hele boka), sjanger A).

---

### Del 6 — Eksamenstrening

#### Kapittel 6.1: Begrepsdrill: gjengangerbegrepene

- **id:** `sok1011-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1011-2-4`, `sok1011-3-7`, `sok1011-4-6`
- **Kapitteltype:** drill (begreper)
- **description:** Presise definisjoner + matematisk uttrykk/figur for de ~15 begrepene som går igjen i begrepsoppgaven (Falch-regimets oppgave 1, 20 %) — de sikreste poengene.
- **Eksamensbelegg:** Sjanger A — begrepsoppgaven er fast fra 2024 (seks korte begreper per sett, 20 %). Faste gjengangere. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Kort, presis mal per begrep: **definisjon + matematisk uttrykk/figur der naturlig + typisk fallgruve + eksempel** (sensor honorerer eksempler eksplisitt). Gjengangerbegrepene (fra analysen §2C/§3A), blandet på tvers av boka: markedssvikt, fellesgode/kollektivt gode, positiv/negativ eksternalitet, samfunnsøkonomisk overskudd, residualetterspørsel, 2./3. grads prisdiskriminering, Lerner-indeksen, stordriftsfordeler, nåverdi, innovasjon, humankapital, insentiver, statistisk diskriminering, kompenserende lønnsforskjeller, ikke-dupliserbar produksjonsfaktor, Nash-likevekt, Bertrand-paradokset, dominant strategi, gratispassasjer, Pigou-avgift. Sensor-poeng: **svar poengtert** på akkurat det det spørres om, gjerne med eksempel. Dette kapitlet er også begrepsbanken flashcards trekkes fra — derfor høy flashcard-kvote.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva som menes med residualetterspørsel, og i hvilke markeder begrepet er relevant.»
- **Typiske feil:** Svare bredt/rundt i stedet for poengtert; gi definisjon uten uttrykk/figur (eller omvendt); blande beslektede par (Cournot/Bertrand, avgift/kvote, ikke-rival/ikke-ekskluderbar, statistisk diskriminering/kompenserende lønnsforskjeller); glemme eksempelet sensor belønner.
- **Quiz: 24 · Flashcards: 80**

#### Kapittel 6.2: Sjangerkapittel: den verbale politikkvurderingen

- **id:** `sok1011-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1011-4-5`
- **Kapitteltype:** sjangerkapittel (drøfting)
- **description:** Håndverket bak sjanger N — den verbale politikkvurderingen som avslutter markedssviktoppgaven i Falch-regimet: oppskrift, en gjennomskrevet A-besvarelse med margkommentarer, og momentliste-oppgaver.
- **Eksamensbelegg:** Sjanger N — fast fra 2024 (V2024, H2024, V2025), avslutter oppgave 3. Drøftingselementet i et ellers regnetungt fag; skiller karakterer på om modellinnsikten oversettes til en forankret anbefaling (§4, §5). Prioritet: **kunne**. (Bygget etter `DNA-drofting.md`s sjangerkapittel-mal — avvik §2.2.)
- **Innholdskontrakt:** **Oppskrift (trinn-for-trinn):** 1) hva spørres det om — vurder en påstand eller gi en anbefaling; 2) forankre i den forutgående modellanalysen (aldri ny modell) — hva sa markedsløsning vs. optimum / effektivitetstapet / avgiften?; 3) møt motargumentet ærlig (bransjens «konkurser og tap av jobber») og vis hva det overser; 4) konkluder poengtert med en anbefaling. **Faste momentbanker:** (i) «avgiften gir konkurser» → avgiften internaliserer den eksterne kostnaden; bedriftene som forsvinner er de som ikke er samfunnsøkonomisk lønnsomme når skaden regnes med; ressursene frigjøres. (ii) «avgiften er for høy fordi inntekt > skade» → avgiften betales på hele mengden, skaden gjelder marginen; sammenligningen er feil. (iii) «fellesgodet blir jo lønnsomt, så markedet ordner det» → gratispassasjer gjør at det underproduseres uten offentlig finansiering. **Gjennomskrevet A-besvarelse** (i `collapsible`) med margkommentarer om hva som gir uttelling hvor (forankring i modellen, ærlig motargument, poengtert konklusjon). **4–6 momentliste-oppgaver** (løsning = disposisjon/momentliste, ikke fullt essay). Tidsbudsjett: politikkvurderingen er de siste ~10 % av oppgave 3 — svar kort og forankret.
- **Oppgavesjangre:** N. Mønstereksempel: «En næringsorganisasjon hevder at en miljøavgift er ren symbolpolitikk som bare flytter produksjon utenlands. Skriv en momentliste for en forankret vurdering og anbefaling.»
- **Typiske feil:** Løs synsing uten å forankre i modellen (avgiften internaliserer kostnaden); gjøre vurderingen til en ny regneoppgave; svare på noe annet enn det som spørres; ikke møte motargumentet.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 6.3: Øvingseksamen 1 — oligopol + markedssvikt (klassisk regime)

- **id:** `sok1011-6-3` · **number:** 6.3 · **estimatedMinutes:** 300 · **prerequisites:** `sok1011-3-7`, `sok1011-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 5-timers sett i det klassiske regimet: én oligopoloppgave og én markedssviktoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler det klassiske regimets to-søyle-mal (én markedsmakt-/oligopoloppgave + én markedssviktoppgave). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Oppgave 1 (oligopol, ~50 %):** gitt $P = D - X$ og konstant $c$ → monopoltilpasning som referanse → Cournot-duopol (beste-svar-kurver, tegning, Nash-likevekt) → sammenlign med Bertrand og/eller Stackelberg → evt. kartell/gjentatt spill. **Oppgave 2 (markedssvikt, ~50 %):** eksternalitet i produksjon (markedsløsning vs. optimum, effektivitetstap, Pigou-avgift/kvote) *eller* fellesgode (sum av betalingsvillighet, Samuelson, N-avhengighet). Løsningsforslag i eget `collapsible` per deloppgave, skrevet som A-besvarelse (figurbeskrivelse i ord + regning + verbal tolkning), med `tip`-notat om delpoeng/vekting og sensor-margnotater. Nyskrevne, pent kalibrerte tall.
- **Oppgavesjangre:** D/E/F/G (oppg. 1) + J/K/L (oppg. 2). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring; glemme å tolke beste-svar-kurvene / begrunne Nash under tidspress (§5.1); blande markedsløsning/optimum i oppg. 2 (§5.3); umerkede figurer (§5.11).
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.4: Øvingseksamen 2 — Falch-tredelingen (begreper + oligopol + eksternalitet)

- **id:** `sok1011-6-4` · **number:** 6.4 · **estimatedMinutes:** 300 · **prerequisites:** `sok1011-6-1`, `sok1011-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Falch-malen med eksternalitet: seks begreper (20 %) + oligopol/etableringshindre (40 %) + eksternalitet med Pigou-avgift og verbal politikkvurdering (40 %).
- **Eksamensbelegg:** Speiler Falch-regimets gjeldende mal (V2024, H2024, V2025) med vekting 20/40/40 og markedssvikt = eksternalitet. Prioritet: **perfekt** (den mest sannsynlige malen).
- **Innholdskontrakt:** **Oppgave 1 (begreper, 20 %):** seks korte begreper fra gjengangerlisten (markedssvikt, residualetterspørsel, Lerner, prisdiskriminering, nåverdi, humankapital e.l.), poengtert besvart med definisjon + uttrykk/eksempel. **Oppgave 2 (oligopol, 40 %):** spillteoretisk etableringshinder (spilltre, troverdig trussel, overinvestering) *eller* Cournot/Bertrand/Stackelberg-tilpasning med sammenligning. **Oppgave 3 (eksternalitet, 40 %):** transport/forurensning på lineære funksjoner — markedsløsning vs. optimum, effektivitetstap, Pigou-avgift/kvote, avsluttet med **verbal politikkvurdering** (sjanger N). Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting og sensor-notater. Nyskrevne tall.
- **Oppgavesjangre:** A (oppg. 1) + G/H eller D/E/F (oppg. 2) + J/N (oppg. 3).
- **Typiske feil:** Bruke for mye tid på 20 %-begrepsoppgaven; utroverdig trussel behandlet som troverdig (§5.2); avgift = total skade (§5.4); politikkvurdering uten modellforankring; hele §5-repertoaret under tidspress.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.5: Øvingseksamen 3 — Falch-tredelingen (begreper + spillteori + fellesgode)

- **id:** `sok1011-6-5` · **number:** 6.5 · **estimatedMinutes:** 300 · **prerequisites:** `sok1011-6-1`, `sok1011-4-6`
- **Kapitteltype:** øvingseksamen
- **description:** Falch-malen med fellesgode: seks begreper (20 %) + spillteori (35 %) + fellesgode/park (45 %) med verbal vurdering — speiler V2025-varianten.
- **Eksamensbelegg:** Speiler Falch-varianten der markedssvikt = fellesgode (H2024 park) og oppgave 2 er ren spillteori (V2025, vekting 20/35/45). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (begreper, 20 %):** seks begreper (fellesgode, gratispassasjer, Nash-likevekt, Bertrand-paradokset, statistisk diskriminering, Pigou-avgift e.l.). **Oppgave 2 (spillteori, 35 %):** spillmatrise med Nash-likevekt og dominant strategi, evt. gjentatt spill/kartell eller fellesgode-bidragsspill. **Oppgave 3 (fellesgode, 45 %):** park/infrastruktur — vertikal summering av betalingsvillighet, Samuelson-betingelsen, N-avhengighet (utvidelse til flere kommuner), lønnsomhetsvurdering, gratispassasjer, med **verbal anbefaling** (bør godet finansieres offentlig?). Løsningsforslag som A-besvarelse med vekting og sensor-notater. Nyskrevne tall og begrepsutvalg.
- **Oppgavesjangre:** A (oppg. 1) + G (oppg. 2) + K/N (oppg. 3).
- **Typiske feil:** Horisontal summering av fellesgode (§5.5); overse gratispassasjer (§5.6); ikke definere Nash-likevekt/dominant strategi; svare bredt der poengtert kreves; tidsstyring.
- **Quiz: 10 · Flashcards: 0**

**Prøve-kvote Del 6:** ingen egne prøver (delen består av begrepsdrill + politikkvurderings-sjangerkapittel + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 14 | 0 |
| 1 | 1.1–1.3 | 22+22+18 = **62** | 24+18+18 = **60** | 4 |
| 2 | 2.1–2.4 | 26+22+20+18 = **86** | 24+20+22+10 = **76** | 4 |
| 3 | 3.1–3.7 | 24+28+20+20+20+22+18 = **152** | 26+24+18+18+20+22+10 = **138** | 4 |
| 4 | 4.1–4.6 | 26+24+20+26+20+18 = **134** | 24+22+20+24+20+10 = **120** | 4 |
| 5 | 5.1 | 20 | 24 | 4 |
| 6 | 6.1–6.5 | 24+16+10+10+10 = **70** | 80+12+0+0+0 = **92** | 0 (3 øvingseksamener) |
| **Sum** | **27 kap.** | **538** | **524** | **20 + 3 ØE** |

**Kontrollsum:** quiz $14+62+86+152+134+20+70 = \mathbf{538 \ge 500}$ ✓ ·
flashcards $14+60+76+138+120+24+92 = \mathbf{524 \ge 500}$ ✓.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler de to eksamenssøylene: oligopol/spill (Del 3) og markedssvikt
(Del 4) står for 286 av 538 quiz og 258 av 524 flashcards — nøyaktig de ~100 % av
eksamenspoengene de bærer (én oppgave fra hver i praktisk talt hvert sett). Boka er
et **regnefag med solid begrepsrepertoar** (og et lite drøftingselement): quiz ligger
komfortabelt over gulvet (drilltunge søyler), og flashcards er løftet over gulvet
(524, ~24 over gulvet) fordi definisjonene faktisk må sitte og *begrepsoppgaven er en
egen fast 20 %-oppgave fra 2024* — Nash-likevekt, Bertrand-paradokset, fellesgode
(ikke-rival/ikke-ekskluderbar), Pigou-avgift, residualetterspørsel, Lerner-indeks,
gratispassasjer, delspillperfekt likevekt, samfunnsøkonomisk overskudd — med
begrepsdrillen (6.1, 80 flashcards) som samlende begrepsbank.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5, 20 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning/vurdering) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok1011-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Marked, velferd og effektivitet**
1. Prøve 1.A (30 min): Begreper — samfunnsøkonomisk overskudd, KO/PO, effektivitetstap, residualetterspørsel, markedsformer (sjanger A).
2. Prøve 1.B (35 min): Markedslikevekt + KO/PO/SO regnet på lineære kurver med figur.
3. Prøve 1.C (25 min): Effektivitetstap ved en gitt mengdeavvik — trekantregning + figur.
4. Prøve 1.D (30 min): Residualetterspørsel og elastisitetssammenligning pris vs. mengde (sjanger A+E-fundament).

**Del 2 — Markedsmakt**
1. Prøve 2.A (30 min): Begreper — monopol, marginalinntekt, Lerner-indeks, prisdiskriminering, dødvektstap (sjanger A).
2. Prøve 2.B (40 min): Monopoltilpasning + effektivitetstap, analytisk og grafisk (sjanger B).
3. Prøve 2.C (35 min): Lerner-indeksen utledet + tolket, og 3. grads prisdiskriminering per delmarked (sjanger C+I).
4. Prøve 2.D (45 min): Full markedsmaktoppgave inkl. 2. grads prisdiskriminering med selvselektering (sjanger B+C+I).

**Del 3 — Oligopol og spillteori**
1. Prøve 3.A (30 min): Begreper — Nash-likevekt, dominant strategi, Bertrand-paradokset, residualetterspørsel, delspillperfekt likevekt (sjanger A).
2. Prøve 3.B (45 min): Cournot komplett — beste-svar-kurver, tegning, Nash-likevekt, sammenligning med monopol (sjanger D).
3. Prøve 3.C (40 min): Bertrand + Stackelberg med sammenligning av konkurranseformer (sjanger E+F).
4. Prøve 3.D (45 min): Spillmatrise + gjentatt spill/kartell + spilltre med delspillperfekt likevekt (sjanger G+H).

**Del 4 — Markedssvikt**
1. Prøve 4.A (30 min): Begreper — markedssvikt, positiv/negativ eksternalitet, fellesgode (ikke-rival/ikke-ekskluderbar), Pigou-avgift, gratispassasjer, Coase-teoremet (sjanger A).
2. Prøve 4.B (45 min): Negativ eksternalitet — markedsløsning vs. optimum + effektivitetstap + Pigou-avgift/kvote (sjanger J).
3. Prøve 4.C (45 min): Fellesgode — vertikal summering + Samuelson + N-avhengighet + gratispassasjer (sjanger K).
4. Prøve 4.D (40 min): Coase-forhandling + verbal politikkvurdering på eksamensnivå (sjanger L+N).

**Del 5 — Nivå-3-begreper**
1. Prøve 5.A (25 min): Begreper — innovasjon/appropriabilitet, statistisk diskriminering, kompenserende lønnsforskjeller, humankapital (sjanger A).
2. Prøve 5.B (25 min): Nåverdi — enkel neddiskontering og lønnsomhetsvurdering av utdanning/investering.
3. Prøve 5.C (25 min): Innovasjon og eksterne effekter — for svake insentiver, patent, kunnskapseksternalitet.
4. Prøve 5.D (30 min): Blandet begrepsoppgave i Falch-format (seks korte begreper på tvers av hele boka) (sjanger A).

### Øvingseksamener (3 komplette sett, i Del 6)

1. **Øvingseksamen 1** (6.3, 300 min): klassisk regime — oligopol (~50 %) + markedssvikt (~50 %).
2. **Øvingseksamen 2** (6.4, 300 min): Falch-tredeling 20/40/40 — begreper + oligopol/etableringshindre + eksternalitet med Pigou-avgift og politikkvurdering.
3. **Øvingseksamen 3** (6.5, 300 min): Falch-tredeling 20/35/45 — begreper + spillteori + fellesgode/park med verbal anbefaling.

Settene og prøvene dekker samlet sjangrene A–N minst én gang, og både det klassiske
to-søyle-regimet og Falch-tredelingen (både eksternalitet- og fellesgode-varianten).

---

## 5. Studieguide-kjerne (fra Del 0 + samlende ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — de to regimene, tredelingen, temafrekvens-tabellene (to spor),
   sjangerkatalogen A–N og prognosen for neste eksamen (§1, §7 i analysen).
2. **De to søylene i ett blikk** — markedsmakt/oligopol (monopol → Lerner → Cournot →
   Bertrand → Stackelberg → spill/etablering) og markedssvikt (eksternalitet + Pigou/kvote/Coase;
   fellesgode + Samuelson/gratispassasjer), med spillteori som fellesverktøy.
3. **Sensorens metaregler** — regning + figur + intuisjon som én leveranse; tolk
   beste-svar-kurver og tallsvar; begrunn Nash-likevekten; definer begrepene; svar
   poengtert på de oppgitte funksjonene; selvstendig resonnement der boka slutter.
4. **Feilkatalogen** — de 11 typiske feilene (§5 i analysen) samlet, hver med henvisning
   til kapitlet som forebygger den: ubegrunnet Nash / utolkede beste-svar-kurver (3.2);
   utroverdig trussel behandlet som troverdig (3.6); blandet markedsløsning/optimum (4.1);
   avgift = total i stedet for marginal skade (4.2); horisontal fellesgode-summering (4.4);
   oversett gratispassasjer (4.5); feil elastisitet residualetterspørsel (1.3/3.3);
   hoppet intuisjon/figur (overalt); generell teori uten de oppgitte funksjonene (drill);
   glemt at innovasjonsgevinsten deles (3.6); umerkede figurer (1.2).
5. **Formelark i emnets notasjon** — én side: marked $P = D - X$, $SO = KO + PO$;
   monopol $x = (D-c)/2$, $P = (D+c)/2$, dødvektstap $\tfrac18(D-c)^2$; Lerner
   $L = (p-MC)/p = 1/|\varepsilon|$; Cournot $x_i = (D-c)/3$, $P = (D+2c)/3$, profitt
   $(D-c)^2/9$; Stackelberg leder $(D-c)/2$, følger $(D-c)/4$; Bertrand $p = c$;
   gjentatt spill $\delta$-terskel; eksternalitet $MSC = MPC + $ marginal skade,
   Pigou $t = $ marginal skade i optimum; fellesgode $\Sigma MB = MC$ (vertikal summering);
   Coase (koordinert maksimerer $\pi_a + \pi_b$); nåverdi $\sum_t B_t/(1+r)^t$. Marker
   hva som skal *utledes/tolkes* (beste-svar-kurver, Lerner, avgift, effektivitetstap)
   vs. hva som bare slås opp i formelsamlingen (derivasjonsregler, summeformler).
6. **Figurbiblioteket** — standardfigurene i ord: markedskryss med KO/PO/SO; monopol
   med $MR$, $MC$ og dødvektstap-trekant; Cournot beste-svar-kurver i $(x_a, x_b)$-planet
   med Nash-likevekt; spilltre med delspillperfekt likevekt; eksternalitet med $MPC$,
   $MSC$, $MB$, begge mengder og tap-trekant; Pigou-avgift som skift av $MPC$; fellesgode
   med individuell $MB$, vertikalt summert $\Sigma MB$ og $MC$ — med merkekravene per figur
   (akser, kurver, tilpasningspunkter, mengder, trekanter navngitt).
7. **Kryssreferansekart mot SOK1002** (arbeidsdelingen, §7) — hva SØK1011 forutsetter og
   lenker til (MC som $C'(y)$, pristakerens $p = $ MC, elastisitetsdefinisjonen,
   nyttemaks-apparatet) vs. hva SØK1011 selv bygger ut (markedsutfallet, markedsmakt,
   spill, markedssvikt, velferd).
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (fellesverktøyet) → Del 2 (markedsmakt) → Del 3 (oligopol/spill) → Del 4 (markedssvikt)
   → Del 5 (nivå-3-begreper), prøver underveis, begrepsdrillen (6.1) og
   politikkvurderings-sjangeren (6.2) parallelt, øvingseksamenene de siste ukene under
   tidspress (300 min, tredelt 20/40/40).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1011` med alle 27 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK1011 Markeder og markedssvikt».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, frekvenstallene, de to regimene
   og avgrensningen (arbeidsdelingen mot SOK1002/ECON1210) som resten refererer til.
3. **Del 1** (marked/velferd) — samfunnsøkonomisk overskudd, effektivitetstap,
   residualetterspørsel som resten bruker.
4. **De to søylene i avhengighetsrekkefølge**: Del 2 (markedsmakt) → Del 3 (oligopol/spill)
   → Del 4 (markedssvikt). Én byggeagent per hel del (jf. fase 4-batching); Del 3 er 7
   kapitler, så den kan splittes, men gi da hele delens kontrakter til begge agenter og
   flagg for konsistenssjekk (notasjon $P = D - X$, Nash-begrunnelsen, beste-svar-kurvene).
   Drillkapitlet (2.4 / 3.7 / 4.6) bygges av samme agent som delen.
5. **Del 5** (nivå-3-begreper) — kort, gjenbruker innovasjon fra 3.6.
6. **Del 6 til slutt** (begrepsdrill + politikkvurderings-sjanger + 3 øvingseksamener
   gjenbruker alt); bygges av én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene
   (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1011-<del>-prove`, chapterNumber `<del>.P`), Del 1–5.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\varepsilon`, `\\Sigma`, `\\delta`); ingen unicode-brøker; konsistent
      $P = D - X$, $x_a, x_b$, $c$, $MR$, $MC$, $MSC$, $MB$, $L$, $\Sigma MB$, $\delta$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok1011-filer — **påkrevd**:
      $P = D - X$ (ikke E-/T-kurve som primærform), $x_a/x_b$, konstant $c$, $MSC = MPC + $
      marginal skade, Lerner $L = 1/|\varepsilon|$, standardresultatene $(D-c)/2$,
      $(D-c)/3$, $(D-c)/4$; **forbudt/uønsket**: å gjenta SOK1002-apparatet
      (nyttemaks/Lagrange/indifferenskurve/kostnadskurvefamilien/nedleggingsbetingelse
      med sunk cost) — grep etter «Lagrange», «indifferenskurve», «isokvant»,
      «substitusjonseffekt», «Slutsky», «nedleggingsbetingelse», «sunk cost» skal gi
      **null treff** utenom eventuelle kryssbok-lenker/forkunnskaps-merknader til SOK1002;
      likeledes ECON1210s «delingsbrøk»/«overveltning» skal ikke forekomme.
- [ ] **Cournot-kravet**: kap. 3.2, 3.7 og øvingseksamenene inneholder eksplisitt
      beste-svar-kurvene utledet fra FOB, tegnet i $(x_a, x_b)$-planet, Nash-likevekten
      **begrunnet** («ingen angrer»), og $(D-c)/3$-resultatet — grep-sjekk «beste-svar»
      og «Nash».
- [ ] **Markedssvikt-kravet**: kap. 4.1, 4.2, 4.6 og øvingseksamenene skiller eksplisitt
      **markedsløsning ($MPB = MPC$)** fra **optimum ($MB = MSC$)**, har effektivitetstap-
      trekant navngitt, og bruker **marginal** (ikke total) skade i avgiften; fellesgode-
      kapitlene (4.4, 4.6) bruker **vertikal** summering og Samuelson $\Sigma MB = MC$.
- [ ] **Regning + figur + intuisjon**: hvert eksempel og løsningsforslag med figur har
      figurbeskrivelse i ord (akser, kurver, tilpasningspunkter, mengder, trekanter
      navngitt) OG verbal tolkning; alle tallsvar (elastisitet, effektivitetstap,
      kvotepris, avgift) er verbalt tolket; beste-svar-kurver tolket og Nash begrunnet.
- [ ] **Drøftingselementet**: kap. 4.5, 6.2 og øvingseksamenenes markedssviktoppgaver
      inneholder en **verbal politikkvurdering** forankret i modellen (avgiften
      internaliserer kostnaden), ikke løs synsing eller ny modell.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (2.4, 3.7, 4.6) har
      løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver; sjangerkapitlet 6.2
      følger drøftings-malen (oppskrift + gjennomskrevet A-besvarelse + momentliste-oppgaver).
- [ ] **Quiz-sum ≥ 538 og flashcard-sum ≥ 524** per kvotetabellen (kontrollsummér mot
      §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–N minst én gang, og både det klassiske to-søyle-regimet
      og Falch-tredelingen (eksternalitet- og fellesgode-variant).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (bransjer,
      steder, produkter), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); kalibreringsverdiene fra reelle fasiter
      (f.eks. $MB = 200 - 15X$, $MPC = 20 + 5X$; 10 innbyggere med $p = 10 - X$) brukes kun
      til å velge vanskelighetsgrad, aldri som oppgavetall; pensum (mikroøkonomisk lærebok
      i Krugman & Wells' tradisjon, kap. 28.x/29.x) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`; institusjonssiden
      (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot SOK1002 (kirurgisk komplement)

SØK1011 og SOK1002 (begge NTNU, samme institutt) er bevisst komplementære — sammen
utgjør de det fulle mikropensumet, med **smalt overlapp**. Denne tabellen styrer hva
SØK1011 bygger ut vs. hva den forutsetter/kryssrefererer.

| Tema | SOK1002 (bygger ut) | SØK1011 (bygger ut) |
|---|---|---|
| Konsumentteori (nyttemaks, indifferenskurve/MSB, etterspørsel fra Cobb-Douglas, SE/IE, Slutsky/Hicks, elastisiteter) | **JA** — Del 2, full Lagrange/grafisk | **NEI** — forutsettes; lenk til SOK1002 der en etterspørselsfunksjon trengs |
| Produsentteori (produktfunksjon, isokvant/TSB, kostnadsminimering, kostnadskurvefamilien MK/TGK/VGK/FGK, profittmaks $p=$MC, nedlegging med sunk cost) | **JA** — Del 3, full | **NEI** — tar tilbudssiden som gitt (konstant $c$ / enkel $C$); lenk til SOK1002 for MC og $p=$MC |
| Markedskryss, KO/PO/samfunnsøkonomisk overskudd, effektivitet/dødvektstap | **NEI** (utenfor SOK1002 — bekreftet null treff i arkivet) | **JA** — Del 1 (fellesverktøy) |
| Monopol, markedsmakt, Lerner, prisdiskriminering | **NEI** | **JA** — Del 2 |
| Oligopol (Cournot/Bertrand/Stackelberg), spillteori (Nash, dominant strategi, gjentatt spill, delspillperfekt likevekt), etableringshindre | **NEI** | **JA** — Del 3 (den ene søylen) |
| Eksternaliteter, Pigou-avgift, kvotemarked, Coase | **NEI** | **JA** — Del 4 |
| Fellesgoder, sum av betalingsvillighet, Samuelson, gratispassasjer | **NEI** | **JA** — Del 4 (den andre søylen) |
| Innovasjon/appropriabilitet, arbeidsmarkedsbegreper, nåverdi | **NEI** | **JA** — Del 5 (nivå 3) |
| Stykkskatt/-subsidie med overveltnings-delingsbrøk `c/(b+c)` | **NEI** (og heller ikke ECON1210-tungt her) | **NEI** — bevisst utelatt (ECON1210s signatur; nesten fraværende i SØK1011) |

**Møtepunkter (kryssrefereres, ikke gjentas):** marginalkostnad ($C'(y)$),
profittmaksimering, pristakerbedriftens $p = $ MC, en enkel etterspørselsfunksjon og
elastisitetsdefinisjonen forutsettes fra SOK1002 og lenkes dit med markdown-lenker
(`[tittel](/bok/sok1002/<chapterId>)`) i Forkunnskaper-blokkene — SOK1002 utleder dem,
SØK1011 bruker dem på markedsutfallet. Overlappet er *smalt*: begge bruker MC og
profittmaks, men SOK1002 utleder tilbudskurven fra kostnadsfunksjonen, mens SØK1011 tar
den som gitt og analyserer markedsutfallet (marked, markedsmakt, spill, markedssvikt).
Dette speiler NTNU/UiO-arbeidsdelingen i analysens §0.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene ($(D-c)/2$,
> $(D-c)/3$, $(D-c)/4$, $L = 1/|\varepsilon|$, $\Sigma MB = MC$) er faglige fakta uten
> verkshøyde. Pensum-referansen (mikroøkonomisk lærebok i Krugman & Wells' tradisjon,
> kap. 28.x oligopol/residualetterspørsel og kap. 29.x markedsstrategi/etableringshindre)
> er *(verifiser)* — den eksakte lærebokutgaven og kapittelnummereringen er ikke
> entydig fastslått i analysen og bør sjekkes mot gjeldende emnebeskrivelse før
> pensumankere skrives inn i kapitlene. At Stackelberg og enkelte sammensatte spill er
> «gått gjennom på forelesning» uten å stå i boka er dokumentert i analysens §4/§8.

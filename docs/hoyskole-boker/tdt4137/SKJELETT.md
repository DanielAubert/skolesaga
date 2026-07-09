# Bokskjelett: TDT4137 Kognitive systemer (NTNU) — eksamensrettet lærebok

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


> Byggedokument for forfatter-agent (Opus). **Forfatteren leser IKKE
> eksamensarkivet** — alt eksamensbelegg som trengs står her, destillert fra
> `EKSAMENSANALYSE.md` (4 ordinære NTNU-sett med offisielle løsningsforslag,
> H2015–H2018, tre æraer med tre emneansvarlige). Alle oppgaver, tall, grafer,
> fuzzy-sett, nett, Soar-regler, sant/usant-utsagn og vignetter i den ferdige boka
> skal være **NYSKREVNE** (opphavsrett): algoritmenavn og standardnotasjon
> (deltaregel, COG, Bayes, base-level-aktivering) er allmenn faglig notasjon, men
> ingen oppgavetekster, fasiter eller sensorkommentarer gjengis ordrett.
>
> **Dette faget er nettopp lagt om (verifisert NTNU 8. juli 2026).** Arkivet
> stammer fra to *tidligere* emneansvarlige og et *annet* eksamensformat enn
> dagens kurs. Detaljer forfatteren er usikker på — særlig alt som gjelder Mesters
> nye vurderingsform — merkes `(verifiser)` for fagfellesjekk i fase 6.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4137` |
| Tittel | **TDT4137 Kognitive systemer (NTNU)** |
| Institusjon | **NTNU** (finnes i `institusjoner.ts` fra tdt4120/tdt4136 — legg tdt4137 under samme institusjon) |
| Level | `'Høyskole'` |
| Arketype | **Hybrid med konseptuell hovedvekt** — DNA-drøfting som primærmal (begrepsdrevet: paradigmer, arkitekturer, filosofi, historie), med **tre innebygde regnemoduler** (DNA-regnefag-mønster) for de stabile lavterskel-regnetemaene: fuzzy inferens, perseptron/backprop, Bayes |
| Antall kapitler | **39** (2 eksamenskart/håndverk + 32 tema/drill + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 690 min ≈ 45 timer** (inkl. midtprøve-øving + 2 sluttksamen-øvinger) |
| Quiz totalt | **658** (krav ≥500 — sant/usant ER eksamenssjanger, derfor høyt) |
| Flashcards totalt | **676** (sikt 650–800 for begrepsrikt drøftingsfag — se kvotesammendrag §5) |
| Prøver | **32** (4 per temadel 1–8) + **3 øvingsprøver** (kap. 9.3 midtprøve-form, 9.4/9.5 sluttksamen-form) |

**Pitch (én avsnitt):** TDT4137 er *ikke ett stabilt fag over tid* — det er tre
distinkte æraer med tre emneansvarlige, og det er akkurat lagt om igjen. Dette er
den enkeltopplysningen som styrer hele boka. Arkivet (H2015–18) var **én
firetimers skoleeksamen som teller 100 %**; **dagens kurs (Rudolf Mester, 2026)
har delt vurdering: midtprøve 40 % (2 t) + skriftlig skoleeksamen 60 % (3 t)**,
begge hjelpemiddelkode **D (enkel kalkulator)**. Vi har *ingen* sett fra dagens
instruktør — så formen er den største usikkerheten, og boka trener bredden i
stedet for å overtrene på én sjanger. Det som *likevel* er trygt, er
**begrepsapparatet**: fire temaer er 100 %-gjengangere gjennom begge arkiværaer og
står eksplisitt i dagens pensum — **kognitive arkitekturer/paradigmer, fuzzy
logikk, nevrale nett/ML og Soar**. Boka bygges som en **begrepsdreven** lærebok
(paradigmer, arkitekturer, resonneringstyper, filosofi, historie — bygd ut utover
arkivet mot dagens pensum), med **tre innebygde regnemoduler** for de stabile,
lavterskel-regnetemaene (fuzzy inferens ende-til-ende, perseptron/backprop-
oppdatering, Bayes-oppdatering). Overalt driller boka to sjangre som treffer
sensorpreferansen og den sannsynlige midtprøveformen: **sant/usant med kort
begrunnelse** (streng retting, men begrunnelse redder delpoeng) og
**sammenligning/kortsvar** (Aamodt-formen). Studenten som **forstår og kan
sammenligne paradigmer og arkitekturer**, **kjører fuzzy og backprop feilfritt**
og **drøfter filosofien presist**, scorer høyt — uavhengig av om Mester lener seg
mot Thomassens regning eller Aamodts essay.

### Kritiske stilregler (gjelder HELE boka)

**1. Æra-skiftet — «regning ut, konsept inn» (den store fellen):** Skiftet
Thomassen (2015–17, regnetung) → Aamodt (2018, konseptuell) var dramatisk. Fem
temaer **falt bort i 2018 og er IKKE i dagens pensum** — de skal **behandles som
historiske/perifere noter, aldri som egne regnesjangre**:

  - **GOMS / NGOMSL / KLM-utførselstid** (brukermodellering, `T = 0,1·steg +
    ΣKLM`) — tok en hel 20 %-oppgave hvert Thomassen-år, forsvant fullstendig i
    2018. **Maks én HCI-fotnote i kap. 8.2.**
  - **MHP-tidsberegning** (Tp/Tc/Tm, Fitts/Hicks som regnestykke) — ta MHP med
    *konseptuelt* (subsystemer, Fitts/Hicks som prinsipp) i kap. 8.2, **aldri som
    regneoppgave**.
  - **BCI / EEG** (windowing, FFT, mu-bølger, P300) og **ASR / N-gram / Viterbi** —
    Thomassen-spesifikt, ute etter 2017. Maks korte fotnoter. (Behold **Bayes**-
    kjernen fra ASR under sannsynlighetsresonnering, Del 6.)

  En naiv arkivleser ser GOMS/MHP/BCI/ASR som «tunge temaer» fordi de fyller
  Thomassen-settene. **De er utgåtte.** Del 0.1 skal advare eksplisitt, slik at
  studenten ikke kaster bort tid.

**2. Delt vurdering (dagens form) `(verifiser)`:** Boka bygges mot **midtprøve
(40 %, 2 t) + skoleeksamen (60 %, 3 t)**, ikke mot arkivets 4-timers 100 %-form.
Trolig format (analysens prognose, IKKE bekreftet): **midtprøven (2 t)** blir
konseptuell/kortsvar over grunnlags-, paradigme- og resonneringsstoff (Del 1, 2, 6,
7 — svarer til bokas første halvdel); **slutteksamen (3 t)** kombinerer
konseptuelle drøftinger med lette regnemoduler (fuzzy, nevralt nett — Del 3, 4, 5,
8). Alt som gjelder de to prøvenes nøyaktige utforming merkes `(verifiser)` — det
er analysens hovedbegrensning, og skal verifiseres mot Mesters opplegg når det
foreligger.

**3. Sant/usant-med-begrunnelse er en egen eksamenssjanger — «streng retting,
begrunnelse redder»:** Aamodt-settet (2018) hadde **20 sant/usant-utsagn** med
**streng retting: galt svar = 0 poeng**, men en **kort begrunnelse gir delvis
uttelling selv ved feil svar**. Dette er den mest sannsynlige midtprøveformen (2 t,
konseptuell), den er billig å øve på og differensierer godt. Boka driller den
tungt: hvert temakapittel har sant/usant-oppgaver, Del 9.1 er ren
sant/usant-drill, og utsagnene er nettopp konstruert mot de vanlige forvekslingene
(feilkatalogen §3). **Regelen studenten skal ha i ryggmargen: skriv ALLTID en
setnings begrunnelse — den redder delpoeng.**

**4. «Konsistens vurderes, ikke fasitmatch» — mange velg-selv-oppgaver:** For flere
oppgavetyper (konstruere medlemskapsfunksjon, definere egne hedges, tegne
Mamdani-utgangssett, tolke et uklart spørsmål) sier løsningsforslagene eksplisitt
at studenten kan **«velge selv»** — sensor vurderer **konsistensen i det valgte,
ikke om det matcher én fasit** (Aamodt ga 70–80 % til kandidater som mistolket et
uklart spørsmål men svarte konsistent). Hver slik oppgave i boka merkes med
sjanger **KONS**, og løsningsforslaget viser ÉN gyldig besvarelse + en `tip` om at
«flere konsistente svar godtas — poenget er at valget ditt henger sammen».

**5. Regnemodulene er `theorem`-blokker + «vis mellomregningen»:** De tre
regnemodulene (fuzzy, nevralt nett, Bayes) bruker DNA-regnefag-kapittel-DNA-en
lokalt: hver får `theorem`-blokker med **prosedyre/formel i emnets notasjon**, 2–4
`example` (siste på eksamensnivå), og et eget **DRILL-kapittel**. Sensors metaregel:
for fuzzy og backprop teller **trinnene og verdiene**, ikke bare svaret —
løsningsforslagene setter opp fuzzifisering → evaluering → aggregering →
defuzzifisering eksplisitt, og backprop trinn 1–4. Alle regne-`example`/`exercise`
viser full mellomregning.

**6. Ingen fast lærebok — parafrasér, forankre presist:** Pensum er en
artikkelsamling (Mester publiserer listen ved semesterstart — `(verifiser)`).
Vernon (*Artificial Cognitive Systems: A Primer*, MIT Press 2014) er den mest
gjennomgående referansen i arkivet; Kolodner (CBR), Forbus/Gentner (MAC-FAC),
Chong (CLARION), Endsley, DARPA XAI dukker opp i Aamodt-æraen. Bruk disse
begrepene og formene siden oppgavene og fasitene gjør det. **Forankringen skal
være EKTE** (reelle forfattere/verk), aldri oppdiktede referanser; direkte sitater
unngås. Engelsk fagterm gis i parentes ved første forekomst; norsk bokmål ellers.

### Avvik fra DNA-malen (dokumentert)

- **Hybrid, ikke ren drøfting (arketypevalget).** DNA-drøfting er primærmalen fordi
  fagets tyngdepunkt og karaktergivende lag er *begrepspresisjon, sammenligning og
  drøfting* (sensor: «det er drøftingen og sammenligningen som gir topp, ikke
  regnestykket»). Men tre temaer er stabile, lavterskel *regne*-temaer som må kunnes
  mekanisk — de får DNA-regnefags teori/drill-DNA lokalt (Del 4 fuzzy, Del 5
  nevralt, Del 6 Bayes). Hybriden er analysens eksplisitte anbefaling (§7:
  «begrepsdreven lærebok med to–tre innebygde regnemoduler»).
- **«Symbol- og formelliste» → «Begreps-, symbol- og formelliste».** README krever
  en `collapsible` rett etter Forkunnskaper. For et hybridfag samler den ALT
  delkapitlet bruker: (i) sentrale **fagbegreper og forfatterkoblinger** (det
  studenten må ha utenat i akkurat dette kapitlet — flashcard-speil), og (ii) i
  regnemodul-kapitlene ALLE **symboler/formler** (f.eks. `µ` = medlemsgrad, `α` =
  læringsrate, `θ` = terskel, `δ` = feilgradient, `P(H|X)` = posterior). Per
  delkapittel, ikke arv fra tidligere. Unntak kun for helt symbolfrie
  historie-/filosofikapitler (der beholdes bare begrepslisten).
- **`theorem`-blokker brukes for regne-prosedyrer OG stabile nøkkelresultater.** I
  regnemodulene: prosedyrekontrakter (fuzzy 4-trinns inferens; deltaregel;
  backprop-trinn 1–4; Bayes' regel). Ellers: de resultatene som skal sitte i
  ryggmargen (konsistens-egenskaper ved arkitekturer, hypotesenes ordlyd,
  rasjonalitetsprinsippet).
- **Flashcards kalibreres som begrep ↔ forfatter/egenskap-koblinger.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. For dette faget parer
  hvert kort et **navn/begrep** med **presis egenskap + forankring** (f.eks.
  «Physical Symbol System Hypothesis → Newell & Simon; et fysisk symbolsystem har
  *nødvendige og tilstrekkelige* midler for generell intelligent handling»; «Sugeno-
  defuzzifisering → singleton vektet snitt `Σµᵢxᵢ/Σµᵢ`, lett å regne,
  kontrollsystemer»; «Impasse (Soar) → ingen/like operatorpreferanser → substate →
  chunking som læring»). Fordi begge prøver er kode D er dette rent puggematerialet.
  Faget er **begrepsrikt** → høy flashcard-tetthet (676, i 650–800-båndet).
- **Quiz kalibreres som faktakontroll (MC) + sant/usant-trening.** Den reelle
  prøven er blandet frisvar + sant/usant; plattformens quiz er MC. Quiz brukes
  derfor til (a) **entydig faktakontroll** («hvilket paradigme hører Brooks
  subsumption til?», «OR i fuzzy = max eller min?») og (b) **sant/usant-formede
  MC-spørsmål** («Stemmer dette: fuzzy medlemskap er sannsynlighet? Ja/Nei») som
  trener nettopp forvekslingene. Selve **begrunnelses-disiplinen** trenes i
  `exercise`/drill (med `solution` + `hints`). `options[0]` = riktig (runtime
  stokker).
- **Kapittelantall (39) ligger i DNA-drøftings øvre bånd (15–30) + overskudd.**
  Bevisst: faget dekker fem begrepsbolker (filosofi, paradigmer, arkitekturer,
  resonnering, historie) PLUSS tre regnemoduler med egne drill-kapitler.
  Bredden er selve fagprofilen (navnebyttet «Arkitekturer → systemer» signaliserer
  bevisst breddeøkning). Hver del holdes stram; `kjenne`-temaer får kompakte
  kapitler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig oppbygging: eksamenskart + prøvehåndverk → kognisjonens
grunnbegreper og filosofi (fundamentet) → paradigmene (Vernon, klassifiserer alt
som følger) → arkitekturene (paradigmene instansiert) → de tre regnemodulene
(fuzzy, nevralt, Bayes) → analogi/casebasert resonnering → historie og nyere
systemer → eksamenstrening. Frekvens/stabilitet styrer *omfanget*: de fire
100 %-gjengangerne (paradigmer/arkitekturer, fuzzy, nevralt, Soar) får flest
kapitler + drill; nivå 2/3-temaer får kompakte kapitler. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Prioritet | Begrunnelse (stabilitet/pensum → omfang) |
|---|---|---|:--:|---|
| 0 | Eksamenskart og prøvehåndverk | 2 | perfekt (meta) | Delt vurdering, æra-skiftet (utelat GOMS/KLM/MHP-tid/BCI/ASR), temafrekvens, sant/usant-håndverket. Prioriteringsverktøyet + kjerne i studieguiden. |
| 1 | Kognisjon, grunnbegreper og filosofi | 5 | perfekt/kunne | Hypotesene 3/4, Marr/Newell 2/4, **voksende i pensum** (filosofi eksplisitt). De to hypotesene + embodied-kritikk + Marr/Kelso + kunnskapsnivå. Sannsynlig midtprøvestoff. |
| 2 | Kognitive paradigmer (Vernon) | 4 | **perfekt** | 4/4-gjenganger, kjernepensum. Vernons fire aspekter + tre paradigmer (cognitivist/emergent/hybrid) + sammenligning. Klassifiserer alt som følger. |
| 3 | Kognitive arkitekturer | 5 | **perfekt** | Soar 4/4; ACT-R/Icarus/Brooks 3/4; CLARION 1/4↑. Struktur/minne/problemløsning/læring per arkitektur + arkitektursammenligning (A/B-laget). |
| 4 | Fuzzy logikk (regnemodul) | 4 | **perfekt** | 4/4. Full inferens (fuzzifiser→evaluer→aggreger→defuzzifiser), Mamdani vs. Sugeno, hedges. **Komplett regnemodul + drill.** |
| 5 | Nevrale nett og maskinlæring (regnemodul) | 5 | **perfekt** | 4/4. Perseptron + deltaregel + backprop (husk θ), lineær separabilitet, CNN/dyp/autoenkoder konseptuelt. **Komplett regnemodul + drill.** |
| 6 | Sannsynlighetsresonnering (regnemodul) | 3 | **kunne↑** | 2/4 i arkiv, men **eksplisitt i 2026-pensum** («sannsynlighetsbasert resonnering»). Resonneringstyper + Bayes-oppdatering. **Løftet utover arkivet.** |
| 7 | Analogi- og casebasert resonnering | 3 | kunne | Analogi 3/4 (Gentner/MAC-FAC); CBR 1/4↑ (Aamodt). Ikke-deduktiv resonnering. |
| 8 | Historie og nyere kognitive systemer | 3 | kunne/kjenne | Historie **eksplisitt i pensum, tynt i arkiv → bygg ut**. Persepsjon/Endsley, AGI, XAI, bevissthetsfilosofi. Rommer GOMS/MHP/BCI/ASR som historiske noter. |
| 9 | Eksamenstrening | 5 | perfekt (meta) | Sant/usant-drill + sammenligning/kortsvar-drill + **3 øvingsprøver**: midtprøve-form (2 t, konseptuell) + 2 sluttksamen-form (3 t, konsept + regnemoduler). |

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og prøvehåndverk |
| 1 | Kognisjon, grunnbegreper og filosofi |
| 2 | Kognitive paradigmer (Vernon) |
| 3 | Kognitive arkitekturer |
| 4 | Fuzzy logikk |
| 5 | Nevrale nett og maskinlæring |
| 6 | Sannsynlighetsresonnering |
| 7 | Analogi- og casebasert resonnering |
| 8 | Historie og nyere kognitive systemer |
| 9 | Eksamenstrening |

---

## 3. Sjangerkatalog (SU / KS / SAM / DR / RM / KONS)

Kodene refereres i hvert kapittels «Oppgavesjangre» og gjengis for studenten i Del
0.2. Destillert fra EKSAMENSANALYSE §3. Merk hvilke som er **æra-overgripende**
(tryggere) versus **Thomassen-spesifikke** (utgått).

| Kode | Sjanger | Form | Status |
|---|---|---|---|
| **SU** | Sant/usant med kort begrunnelse (streng retting: galt = 0; begrunnelse redder delpoeng) | kort begrunnet | **Æra-overgripende ↑** — Aamodt-form, sannsynlig midtprøveform |
| **KS** | Kortsvar / begrepsredegjørelse («forklar kort», «hva menes med X?») — hovedpoeng først, to-the-point | kort presis | **Æra-overgripende** — i alle sett |
| **SAM** | Sammenligning (arkitekturer/paradigmer langs arkitektur/minne/problemløsning/læring; Marr vs. Kelso; Mamdani vs. Sugeno) | strukturert tabell/tekst | **Æra-overgripende ↑** — det A/B-differensierende laget |
| **DR** | Drøfting («hvorfor», «kritikk», «i hvilken grad») — kunnskapsbunn + selvstendig vurdering | essay/momentliste | **Aamodt-form ↑** — filosofi, embodied-kritikk, XAI/AGI |
| **RM** | Regnemodul: fuzzy inferens ende-til-ende, perseptron/backprop-oppdatering, Bayes — **vis mellomregning** | regnestykke m/trinn | **Æra-overgripende** (fuzzy/nevralt 4/4); tung i Thomassen, lett i Aamodt |
| **KONS** | «Velg selv, konsistens vurderes ikke fasitmatch» (konstruer medlemskap/hedge/utgangssett; tolk uklart spørsmål) | fritt m/konsistenskrav | **Æra-overgripende** — eksplisitt i fasitene |
| *(Hist.)* | GOMS/KLM/MHP-tid, BCI/EEG, ASR/N-gram | — | **UTGÅTT etter 2017** — kun historiske noter (kap. 8.2) |

### Feilkatalog (fra EKSAMENSANALYSE §5 — kilde til sant/usant-utsagn og «Typiske feil»)

Disse forvekslingene er nettopp det sant/usant-utsagnene tester. Refereres som
**FK1–FK15** i kapitlenes «Typiske feil».

- **FK1** Glemme å oppdatere terskelen **θ** i perseptron/backprop (θ = vekt w₀ på input −1).
- **FK2** Blande **Mamdani og Sugeno** defuzzifisering (COG-integrasjon der singleton-vektet-snitt skal brukes, eller motsatt).
- **FK3** Feil logiske operatorer: **OR = max, AND = min, NOT = 1−µ** — forveksles ofte.
- **FK4** Forveksle **Marrs** (løst koblede nivåer, top-down) og **Kelsos** nivåmodell.
- **FK5** Snu **rasjonalitetsprinsippet** (Newell): agenten velger *handling/kunnskap for å nå målet*, ikke «mål for kunnskapen».
- **FK6** **MHP** feil subsystem: de tre er perseptuelt, **kognitivt** og motorisk (ikke «emosjonelt»).
- **FK7** **Fitts lov** feil retning: tid er *omvendt* proporsjonal med målstørrelse (større mål = raskere).
- **FK8** **Nevron-signalvei** feil: dendritter *mottar*, akson *sender*.
- **FK9** **Perseptron/lineær separabilitet** upresist: det er *klassene* som må være lineært separerbare.
- **FK10** **Fuzzy = sannsynlighet**: nei — det er *mulighetsteori* (possibility); medlemskap kan være sant og usant samtidig.
- **FK11** **Icarus**: tro skills og konsepter ligger i samme modul — de er *separate men samvirkende*.
- **FK12** **Brooks subsumption**: tro øverste lag mottar all input — lagene opererer uavhengig; øvre lag *subsumerer* (inhibit/suppress) lavere.
- **FK13** **Systematicity** feil vei: høyere-ordens relasjoner er *viktigere* (foretrekkes) ved mapping.
- **FK14** **AGI** = «overgå mennesket»: hovedmålet er å *tilnærme* menneskelig intelligens, ikke nødvendigvis overgå.
- **FK15** Blande **PSSH og HSH** — eller gjengi hypotesene upresist (mangle «nødvendige *og* tilstrekkelige»).

---

## 4. Kapitler

> Feltforklaring — DNA-ens «Skjelett-krav» tilpasset hybrid: **Eksamensbelegg** =
> år/sett temaet forekom + sjangerkoder + prioritetsklasse (perfekt/kunne/kjenne,
> §7) + æra-note. **Begreps-/innholdskontrakt** = begreper/prosedyrer/teoremer som
> SKAL med (flashcard-/regne-kilden) med forankring/notasjon. **Sammenlignings-
> /drøftingsakser** = det A/B-differensierende laget. **Typiske feil** = FK-kodene.
> **Kvote** = quiz/flashcards.
>
> Temakapittel-DNA (obligatorisk rekkefølge): `tip` Eksamensvinkel → `text`
> Forkunnskaper + `collapsible` Begreps-/symbol-/formelliste → `text` Temaet i
> landskapet → `definition` Kjernebegreper (m/forankring — flashcard-kilde) →
> `text`/`theorem` Posisjoner/prosedyre → `example` ×1–4 (siste på prøvenivå) →
> `warning` Typiske feil (FK) → `exercise` ×4–8 (blandet SU/KS/SAM/DR/RM/KONS,
> stigende) → `collapsible` Pensumkart/repetisjon. Regnemodul-kapitler bruker
> DNA-regnefags teori-DNA; drill-kapitler DNA-regnefags/-drøftings drill-DNA.

---

### Del 0 — Eksamenskart og prøvehåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4137

- **id:** `tdt4137-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Den delte vurderingen (midtprøve 40 % + skoleeksamen 60 %), de tre æraene og æra-skiftet, temafrekvensene, og hva som er UTGÅTT — lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet H2015–H2018 + NTNUs gjeldende emnebeskrivelse (verifisert 8. juli 2026). Skal formidle: (i) **dagens form `(verifiser)`** — midtprøve (**40 %, 2 t**) + skriftlig skoleeksamen (**60 %, 3 t**), begge kode **D** (enkel kalkulator), A–F; obligatoriske øvinger for prøvetilgang; ingen sett fra dagens instruktør (Mester) → største usikkerhet; (ii) **de tre æraene** — Thomassen (2015–17, regnetung), Aamodt (2018, konseptuell, 20 sant/usant), Mester (2026, ukjent), og at navnebyttet «Kognitive **Arkitekturer**» → «Kognitive **systemer**» signaliserer bevisst breddeøkning; (iii) **æra-skiftet «regning ut, konsept inn»** og hva det betyr for lesing; (iv) **temafrekvens-tabellen** (§2 i analysen): paradigmer/arkitekturer 4/4, fuzzy 4/4, nevralt nett/ML 4/4, Soar 4/4, analogi 3/4, hypotesene 3/4, ACT-R/Icarus/Brooks 3/4, Marr/Newell 2/4, Bayes 2/4↑, CBR/CLARION/Endsley/XAI 1/4↑; (v) **UTGÅTT-advarselen** — GOMS/NGOMSL/KLM, MHP-tidsberegning, BCI/EEG, ASR/N-gram var tunge i Thomassen-æraen men **falt bort i 2018 og er ikke i dagens pensum**; studenter som pugger gamle sett kaster bort tid; (vi) **sensors metaregler** (§4): vis mellomregningen (regnemoduler), bredt spekter av korrekte svar godtas (KONS), delvis uttelling er regelen (også sant/usant), korte presise svar belønnes, robust sensur til kandidatens fordel. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen SU/KS/SAM/DR/RM/KONS (§3) som studentens sjekkliste. **Prognosen for dagens prøver `(verifiser)`:** midtprøven (2 t) trolig konseptuell/kortsvar over Del 1/2/6/7 (grunnlag, paradigmer, resonnering); slutteksamen (3 t) konseptuelle drøftinger + lette regnemoduler (fuzzy, nevralt) over Del 3/4/5/8. **Leseplanen:** de fire 100 %-gjengangerne (Del 2 paradigmer, Del 3 Soar/arkitekturer, Del 4 fuzzy, Del 5 nevralt) er ryggraden; nivå 2 (Del 1 filosofi, Del 6 Bayes, Del 7 analogi) avgjør C→A; nivå 3 (Del 8 historie/nyere) merkes «bør kjenne til — differensierer topp og treffer dagens profil».
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Et gammelt sett bruker en hel oppgave på GOMS-utførselstid — bør du øve på det? Begrunn.» og «Hvorfor kan du ikke overtrene på Thomassens regnesjangre?»
- **Typiske feil:** Metafeilene — bruke tid på utgått GOMS/MHP-tid/BCI/ASR; overtrene på Thomassens regning fordi arkivet er regnetungt; anta at arkivets 4-timers 100 %-form gjelder (den gjør ikke — delt vurdering nå); tro man kan slå opp (kode D: bare kalkulator).
- **Kvote:** 16 quiz / 14 flashcards (form, delt vurdering, æraene, temafrekvenser, UTGÅTT-listen, metaregler).

#### Kapittel 0.2: Prøvehåndverket — sant/usant, kortsvar, sammenligning og regnemodul-disiplin

- **id:** `tdt4137-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-0-1` · **kapitteltype:** prøvehåndverk
- **description:** Hvordan de seks sjangrene besvares — særlig sant/usant-med-begrunnelse (streng retting), sammenligning langs faste akser, og «vis mellomregningen» i regnemodulene.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4), stabile på tvers av æraene. Prioritet: perfekt (meta). Skal operasjonalisere: (a) **de seks sjangrene** med typisk formulering og tidsbudsjett `(verifiser)`; (b) **sant/usant-håndverket (SU)** — streng retting (galt = 0), men **skriv alltid en setnings begrunnelse: den redder delpoeng ved feil svar**; utsagnene tester forvekslingene (feilkatalogen FK1–FK15); (c) **kortsvar-håndverket (KS)** — hovedpoenget/definisjonens kjerne først, kort og to-the-point; (d) **sammenligning (SAM)** — sammenlign arkitekturer langs **arkitektur / minne / problemløsning / læring**; paradigmer langs Vernons akser; det er dette som gir topp; (e) **«konsistens ikke fasit» (KONS)** — for velg-selv-oppgaver vurderes at valget ditt henger sammen, ikke om det matcher én fasit; (f) **regnemodul-disiplin (RM)** — vis fuzzifisering→evaluering→aggregering→defuzzifisering / backprop trinn 1–4; delpoeng for trinnene.
- **Innholdskontrakt:** `definition` per sjangerkode (SU/KS/SAM/DR/RM/KONS). `example` **sant/usant gjennomført tre ganger**: (i) riktig svar uten begrunnelse (full pott), (ii) galt svar uten begrunnelse (0), (iii) galt svar MED god begrunnelse (delpoeng) — med margnotat om hvorfor begrunnelsen redder. `example` **sammenligning C→A**: samme «sammenlign to arkitekturer»-oppgave i C-versjon (to atskilte beskrivelser) og A-versjon (én tabell langs de fire aksene med eksplisitt kontrast) — vis at kontrasten er A-laget. Mantraene innføres: «begrunn alltid sant/usant», «hovedpoeng først», «kontrast > to separate beskrivelser», «vis mellomregningen».
- **Oppgavesjangre:** SU, KS, SAM (meta). Mønstereksempel: «Utsagn: *Sugeno-defuzzifisering integrerer arealet under den aggregerte medlemskapskurven.* Sant/usant? Begrunn i én setning.» (usant — det er Mamdani/COG; Sugeno er singleton vektet snitt.)
- **Typiske feil:** Ikke begrunne sant/usant (kaster bort delpoeng-redningen); skrive langt der kort belønnes; gi to separate beskrivelser i stedet for kontrast (SAM); hoppe over mellomregning (RM).
- **Kvote:** 18 quiz / 16 flashcards (de seks sjangrene, streng retting, metaregler, sammenligningsaksene, mantraene).

---

### Del 1 — Kognisjon, grunnbegreper og filosofi *(hypotesene/Marr/Newell: KUNNE↑)*

> Filosofi og grunnbegreper er tynt i arkivet (hypotesene 3/4, Marr/Newell 2/4) men
> **eksplisitt i dagens pensum** («vitenskaps- og bevissthetsfilosofi») og en
> sannsynlig midtprøvebolk. Delen bygges derfor UT utover arkivet. Sjangre: SU
> (forvekslingene FK4/FK5/FK15), KS, DR (embodied-kritikken er A/B-laget).

#### Kapittel 1.1: Hva er et kognitivt system? Kognisjon og det tverrfaglige landskapet

- **id:** `tdt4137-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-0-2` · **kapitteltype:** tema
- **description:** Hva kognisjon og et kognitivt system er, kognitivvitenskapens tverrfaglige røtter, og skillet naturlig vs. kunstig kognitivt system — rammen for hele faget.
- **Eksamensbelegg:** Grunnlagskapittel; kognisjonsbegrepet ligger under alle sett, eksplisitt i dagens læringsinnhold («kognisjonsgrunnlag»). Sjangre: KS, SU. Prioritet: kunne (fundament, billige kortsvarspoeng).
- **Begreps-/innholdskontrakt:** `definition` **kognisjon** (prosessene som skaffer, representerer, transformerer og bruker kunnskap — persepsjon, resonnering, læring, handling); **kognitivt system** (system som utviser kognisjon: persiperer, resonnerer, handler mot mål); **kognitivvitenskap** (tverrfaglig: psykologi, informatikk/KI, nevrovitenskap, lingvistikk, filosofi); **naturlig vs. kunstig** kognitivt system (Vernon); **autonomi** og målrettethet som kjennetegn. Kort `text` om fagets to store spørsmål: forstå naturlig kognisjon vs. bygge kunstig kognisjon.
- **Sammenlignings-/drøftingsakser:** hva skiller et kognitivt system fra et rent reaktivt/algoritmisk system? Hvorfor er kognisjon tverrfaglig?
- **Typiske feil:** FK-nær: forveksle kognisjon (kunnskapsprosessering bredt) med ren «tenkning»; tro kunstig kognitivt system = enhver KI (kreves autonomi/målrettethet).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 1.2: De to hypotesene — Physical Symbol System og Heuristic Search

- **id:** `tdt4137-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-1-1` · **kapitteltype:** tema
- **description:** Newell & Simons to grunnhypoteser for symbolsk KI — fysisk symbolsystem og heuristisk søk — med presis ordlyd, som fundament for det cognitivist-symbolske paradigmet.
- **Eksamensbelegg:** De to hypotesene 3/4 (H2016, H2017, H2018) — æra-overgripende, filosofidelens ankerbegreper. Sjangre: KS, SU (FK15), DR. Prioritet: **kunne** (avgjør C→A i filosofidelen).
- **Begreps-/innholdskontrakt:** `definition` **Physical Symbol System Hypothesis (PSSH)** (Newell & Simon): et fysisk symbolsystem har de **nødvendige og tilstrekkelige** midler for generell intelligent handling — presiser BEGGE ledd. `definition` **fysisk symbolsystem** (symboler, symbolstrukturer/uttrykk, prosesser som skaper/modifiserer dem). `definition` **Heuristic Search Hypothesis (HSH)**: løsninger på problemer representeres som symbolstrukturer, og intelligens utøves ved **søk** — generering og modifisering av symbolstrukturer til en løsning finnes. `theorem`/`text` koblingen: PSSH sier *hva* intelligens krever (symbolmanipulasjon), HSH sier *hvordan* (heuristisk søk). Forankring: Newell & Simon; grunnlaget for cognitivist-paradigmet (Del 2.2) og Soar/GPS.
- **Sammenlignings-/drøftingsakser:** PSSH vs. HSH (hva hver hevder); hvorfor «nødvendige *og* tilstrekkelige» er den kritiske formuleringen; hypotesene som *empiriske* påstander (kan i prinsippet falsifiseres).
- **Typiske feil:** FK15 (blande PSSH og HSH; utelate «nødvendige og tilstrekkelige»); tro hypotesene er bevist (de er empiriske hypoteser); forveksle «symbol» med «tegn på skjerm».
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.3: Embodied og enactive kognisjon — kritikken av symbolhypotesene

- **id:** `tdt4137-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-1-2` · **kapitteltype:** tema
- **description:** Den kroppsliggjorte/enaktive kritikken av symbolsk KI — at intelligens ikke kan skilles fra kropp og miljø — og hvordan den motiverer det emergent-paradigmet.
- **Eksamensbelegg:** Embodied-kritikken (H2018, koblet til hypotesene og Brooks). Sjangre: DR (det tydeligste A/B-laget i filosofidelen), KS, SU. Prioritet: **kunne** (drøftingen gir topp).
- **Begreps-/innholdskontrakt:** `definition` **embodied cognition** (kognisjon formet av kroppen og dens interaksjon med miljøet — ikke ren abstrakt symbolmanipulasjon); **enactive/enaktiv** (kognisjon oppstår gjennom handling i verden; agenten *enakterer* sin verden); **situatedness** (kognisjon er situert i en konkret kontekst); **symbol grounding-problemet** (hvordan får symboler mening?). `text` kritikken av PSSH/HSH: intelligens er *ikke* uavhengig av kropp/miljø; Brooks' «intelligence without representation» (kobling Del 3.4). Forankring: embodied/enactive-retningen; kontrast til Newell & Simon.
- **Sammenlignings-/drøftingsakser:** symbolsk (representasjon, disembodied) vs. embodied (situert, handlingsbasert); hva symbol grounding-problemet utfordrer ved PSSH; i hvilken grad kritikken «vinner».
- **Typiske feil:** framstille embodied som «bare robotikk»; tro kritikken avviser ALL representasjon (nyansert); ikke koble embodied til emergent-paradigmet/Brooks.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 1.4: Marrs tre nivåer — og Kelsos alternativ

- **id:** `tdt4137-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-1-1` · **kapitteltype:** tema
- **description:** Marrs tre analysenivåer for informasjonsbehandlende systemer (beregningsteori → algoritme/representasjon → implementasjon) og Kelsos kontrasterende, integrerte nivåsyn.
- **Eksamensbelegg:** Marr/Kelso 2/4 (H2015, H2018 — H2018 sant/usant #1 tester nettopp forvekslingen). Sjangre: SU (FK4), KS, SAM. Prioritet: **kunne** (voksende i pensum — nivåmodeller/abstraksjon).
- **Begreps-/innholdskontrakt:** `definition` **Marrs tre nivåer**: (1) **beregningsteori/computational** (hvilket problem løses og hvorfor — mål), (2) **representasjon og algoritme** (hvordan representeres inn/ut, hvilken algoritme), (3) **implementasjon** (fysisk realisering). `theorem`/`text` egenskaper: nivåene er **relativt løst koblet** og analyseres **top-down**; hører til **cognitivist-paradigmet**. `definition` **Kelsos syn**: kontekst/embodiment integrert, nivåene *ikke* løst koblet (mer i tråd med emergent/dynamisk-system-syn). Forankring: Marr (visjon); Kelso (dynamiske systemer).
- **Sammenlignings-/drøftingsakser:** Marr (løst koblet, top-down, cognitivist) vs. Kelso (integrert, embodied) — dette ER den vanlige forvekslingen. Hvilket nivå en gitt modell befinner seg på.
- **Typiske feil:** **FK4** — tilskrive «løst koblede nivåer» til Kelso (det er *Marr*); blande nivå 1 (mål) og nivå 2 (algoritme); tro implementasjonsnivået er «viktigst».
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 1.5: Newells kunnskapsnivå og rasjonalitetsprinsippet

- **id:** `tdt4137-1-5` · **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-1-2` · **kapitteltype:** tema
- **description:** Newells kunnskapsnivå som et eget abstraksjonsnivå over programnivået, med kunnskap som medium og rasjonalitetsprinsippet som operasjonsprinsipp.
- **Eksamensbelegg:** Kunnskapsnivå/rasjonalitetsprinsipp 2/4 (H2015, H2018 — H2018 sant/usant #2 tester at prinsippet ikke snus). Sjangre: SU (FK5), KS, DR. Prioritet: **kunne**.
- **Begreps-/innholdskontrakt:** `definition` **kunnskapsnivå (knowledge level)** (Newell): et abstraksjonsnivå *over* symbol-/programnivået der systemet beskrives i termer av **mål, kunnskap og handlinger** — ikke implementasjon. `definition` **rasjonalitetsprinsippet**: en agent med et mål og kunnskap vil **bruke kunnskapen til å velge handlinger som fører mot målet** (retningen: kunnskap+mål → handling). `text` «et system er intelligent i den grad det tilnærmer kunnskapsnivået»; kunnskap som *medium* på dette nivået. Forankring: Newell.
- **Sammenlignings-/drøftingsakser:** kunnskapsnivå vs. symbolnivå (Marr-kobling: hvilket abstraksjonsnivå); rasjonalitetsprinsippet vs. faktisk (begrenset) rasjonalitet.
- **Typiske feil:** **FK5** — snu rasjonalitetsprinsippet («velger mål for kunnskapen»); forveksle kunnskapsnivå med symbol-/programnivå; tro «intelligent» = perfekt kunnskapsnivå (det er en *grense* man tilnærmer).
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 1:** 4 prøver (Kognisjon, grunnbegreper og filosofi)
1. Prøve 1.A (25 min): De to hypotesene — ordlyd, PSSH vs. HSH, «nødvendige og tilstrekkelige» (KS/SU).
2. Prøve 1.B (25 min): Embodied/enactive-kritikken — drøft symbolsk vs. kroppsliggjort (DR).
3. Prøve 1.C (25 min): Marr vs. Kelso — nivåene og forvekslingen (SAM/SU).
4. Prøve 1.D (25 min): Kunnskapsnivå + rasjonalitetsprinsippet — sant/usant-bolk (SU/KS).

---

### Del 2 — Kognitive paradigmer (Vernon) *(PERFEKT — 4/4)*

> Paradigme-taksonomien er en 100 %-gjenganger og kjernepensum. Vernons rammeverk
> klassifiserer ALT som følger (arkitekturene i Del 3, nevrale nett i Del 5).
> Sammenligningen av de tre paradigmene (2.4) er det A/B-differensierende laget.

#### Kapittel 2.1: Vernons rammeverk — fire modelleringsaspekter og paradigme-rommet

- **id:** `tdt4137-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-1-3` · **kapitteltype:** tema
- **description:** Vernons fire aspekter for å beskrive kognitive modeller, og 2D-rommet (abstraksjonsnivå × computational–biologisk inspirasjon) som paradigmene plasseres i.
- **Eksamensbelegg:** Paradigmer/Vernon 4/4 (alle sett). Sjangre: KS, SAM, DR. Prioritet: **perfekt** (rammeverket alt annet henges på).
- **Begreps-/innholdskontrakt:** `definition` **Vernons fire modelleringsaspekter**: (1) **computational vs. bio-inspired**-spekteret (hvor mekanistisk/abstrakt vs. biologisk realistisk modellen er), (2) **abstraksjonsnivå**, (3) **gjensidig avhengighet hjerne–kropp–miljø** (grad av embodiment/situatedness), (4) **ultimate vs. proximate** forklaring (evolusjonær funksjon vs. øyeblikkelig mekanisme). `definition` **paradigme-rommet**: 2D-plott av abstraksjonsnivå × computational–biologisk inspirasjon der de tre paradigmene ligger. Forankring: Vernon *Artificial Cognitive Systems*.
- **Sammenlignings-/drøftingsakser:** de fire aspektene som analyseakser; hvor i 2D-rommet et gitt system havner; ultimate vs. proximate (den lett glemte aksen).
- **Typiske feil:** blande de fire aspektene; forveksle abstraksjonsnivå med biologisk inspirasjon (to ulike akser); glemme ultimate–proximate-skillet.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 2.2: Det cognitivist (symbolske) paradigmet

- **id:** `tdt4137-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-2-1` · **kapitteltype:** tema
- **description:** Det symbolske paradigmet — kognisjon som regelstyrt symbolmanipulasjon på interne representasjoner — bygd på de to hypotesene, med Soar/ACT-R/Icarus som instanser.
- **Eksamensbelegg:** Cognitivist-paradigmet 4/4 (del av paradigmeoppgaven hvert sett). Sjangre: KS, SU, SAM. Prioritet: **perfekt**.
- **Begreps-/innholdskontrakt:** `definition` **cognitivist/symbolsk paradigme**: kognisjon = manipulasjon av eksplisitte symbolske representasjoner etter regler; representasjonalistisk; funksjonalistisk (uavhengig av substrat); bygger på PSSH/HSH. `text` kjennetegn: eksplisitt kunnskap, top-down design, programmeres av designer; svakheter: symbol grounding, brittleness, dårlig persepsjon/robusthet. Instanser: **Soar, ACT-R, Icarus** (peker Del 3). Forankring: Newell & Simon, Vernon.
- **Sammenlignings-/drøftingsakser:** styrker (eksplisitt resonnering, generalitet) vs. svakheter (grounding, robusthet); plassering i Vernon-rommet (høyt abstraksjonsnivå, computational-enden).
- **Typiske feil:** tro cognitivist = «gammeldags/feil»; ikke koble til PSSH/HSH; plassere en ANN-basert arkitektur som cognitivist.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 2.3: Det emergent (konneksjonistiske) paradigmet

- **id:** `tdt4137-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-2-1` · **kapitteltype:** tema
- **description:** Det emergent-paradigmet — kognisjon som selvorganiserende egenskap som *oppstår* fra samspill mellom enkle enheter og miljø — med konneksjonisme (ANN) og Brooks' reaktive robotikk som instanser.
- **Eksamensbelegg:** Emergent-paradigmet 4/4 (nevrale nett + Brooks plasseres her hvert sett). Sjangre: KS, SU, SAM, DR. Prioritet: **perfekt**.
- **Begreps-/innholdskontrakt:** `definition` **emergent paradigme**: kognisjon *emergerer* fra dynamisk samspill mellom mange enkle enheter og miljøet; læring/selvorganisering framfor programmering; ofte embodied. Undertyper: **konneksjonistisk** (nevrale nett — distribuert representasjon, læring fra data; kobling Del 5), **dynamiske systemer** (Kelso), **enactive** (Del 1.3). `definition` **reaktivt/embodied** (Brooks — intelligens uten sentral representasjon; kobling Del 3.4). `text` kjennetegn: bottom-up, robust, grounded; svakheter: vanskelig eksplisitt resonnering, «black box». Forankring: Vernon, Brooks, konneksjonismen.
- **Sammenlignings-/drøftingsakser:** emergent vs. cognitivist (læring vs. programmering, distribuert vs. eksplisitt, grounded vs. grounding-problem); hvorfor nevrale nett hører hit; plassering i Vernon-rommet (bio-inspired-enden).
- **Typiske feil:** tro emergent = «bare nevrale nett» (rommer også dynamiske systemer/Brooks); plassere en symbolsk arkitektur som emergent; tro emergent-systemer ikke kan generalisere.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 2.4: Det hybride paradigmet + paradigmesammenligning (SAM-drill)

- **id:** `tdt4137-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-2-3` · **kapitteltype:** drill (sammenligning)
- **description:** Det hybride paradigmet (kombinerer symbolsk topp og subsymbolsk bunn — CLARION, ACT-R) og en systematisk sammenligning av alle tre paradigmene langs Vernons akser — den karaktergivende sammenligningssjangeren.
- **Eksamensbelegg:** Hybrid-paradigmet + paradigmesammenligning 4/4 (paradigmeoppgaven er alltid en klassifiserings-/sammenligningsoppgave). Sjangre: **SAM** (hovedsjanger), DR, SU. Prioritet: **perfekt** (sammenligning = topp).
- **Begreps-/innholdskontrakt (sammenligningsmal):** `definition` **hybrid paradigme**: kombinerer eksplisitt symbolsk prosessering med subsymbolsk/konneksjonistisk (best of both — eksplisitt resonnering + robust læring/grounding). Instanser: **CLARION** (symbolsk topplag + nevralt/RL-bunnlag), **ACT-R** (symbolske produksjoner + subsymbolsk aktivering). `theorem`/tabell **paradigme-sammenligningsmal** — de tre paradigmene langs: *representasjon* (eksplisitt symbolsk / distribuert subsymbolsk / begge), *kunnskapstilførsel* (programmert / lært / begge), *embodiment* (lav / høy / variabel), *styrker*, *svakheter*, *Vernon-plassering*, *eksempelarkitekturer*. Gjennomkjørt sensor-kommentert sammenligning med margnotater (kontrast = uttelling). 8–12 oppgaver: klassifiser gitte arkitekturer/systemer i paradigme + begrunn; sammenlign to paradigmer langs aksene; drøft «hvorfor hybrid?».
- **Sammenlignings-/drøftingsakser:** hele malen over; hvorfor hybrider oppstod (svare på begge de andres svakheter).
- **Typiske feil:** gi tre separate beskrivelser i stedet for kontrast (SAM-feilen); tro hybrid = «litt av alt uten struktur»; feilklassifisere en instans.
- **Kvote:** 20 quiz / 16 flashcards.

**Prøve-kvote Del 2:** 4 prøver (Kognitive paradigmer)
1. Prøve 2.A (25 min): Vernons fire aspekter + paradigme-rommet (KS).
2. Prøve 2.B (25 min): Cognitivist vs. emergent — kjennetegn og eksempler (SAM/SU).
3. Prøve 2.C (25 min): Hybrid-paradigmet — CLARION/ACT-R, «hvorfor hybrid?» (DR).
4. Prøve 2.D (30 min): Klassifiser gitte systemer i riktig paradigme + begrunn (SAM).

---

### Del 3 — Kognitive arkitekturer *(Soar PERFEKT — 4/4; øvrige 3/4↑)*

> Soar er en 4/4-gjenganger; ACT-R/Icarus/Brooks 3/4; CLARION 1/4↑. Hver arkitektur
> beskrives langs den faste malen (struktur / kunnskap+minne / problemløsning /
> læring), og arkitektursammenligningen (3.5) er A/B-laget. Krev å kunne LESE en
> enkel Soar-regel.

#### Kapittel 3.1: Hva er en kognitiv arkitektur? Rammeverk og The Standard Model

- **id:** `tdt4137-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-2-4` · **kapitteltype:** tema
- **description:** Hva en kognitiv arkitektur er, den faste beskrivelsesmalen (struktur/minne/problemløsning/læring), og «The Standard Model» som fellestrekk-rammeverk.
- **Eksamensbelegg:** Arkitekturbegrepet 4/4 (alle enkeltarkitekturoppgaver forutsetter det). Sjangre: KS, SAM. Prioritet: **perfekt** (malen som strukturerer resten av delen).
- **Begreps-/innholdskontrakt:** `definition` **kognitiv arkitektur**: en fast infrastruktur (faste mekanismer + minnestrukturer) som er konstant på tvers av oppgaver, og som kunnskap lastes inn i — «det som ikke endres». `definition` **beskrivelsesmal** (fire akser): (1) overordnet **struktur**, (2) **kunnskapstyper + minnestrukturer** (prosedural/semantisk/episodisk LTM, WM), (3) **problemløsningsprosess** (input→output), (4) **læringsprosess**. `definition` **The Standard Model** (Laird/Lebiere/Rosenbloom): et fellestrekk-rammeverk som destillerer konsensus på tvers av Soar/ACT-R m.fl. Forankring: Vernon, Standard Model-artikkelen.
- **Sammenlignings-/drøftingsakser:** arkitektur (fast) vs. kunnskap (variabel); hva Standard Model sier er felles.
- **Typiske feil:** forveksle arkitektur (fast infrastruktur) med et enkelt program/kunnskapsbase; tro The Standard Model er en egen arkitektur.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 3.2: Soar — prosesseringssyklus, operatorpreferanser, impasse og chunking

- **id:** `tdt4137-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4137-3-1` · **kapitteltype:** tema
- **description:** Soar i dybden — produksjonssystemet, syklusen elaborering→decision→application, operatorpreferanser, impasse/substate og chunking som læring, samt å lese/skrive en enkel produksjonsregel.
- **Eksamensbelegg:** Soar 4/4 (hvert sett, ofte inkl. kodelesing). Sjangre: KS, SU, SAM, KONS (skrive egen regel). Prioritet: **perfekt** (fagets mest sentrale arkitektur).
- **Begreps-/innholdskontrakt:** `definition` **Soar-struktur**: produksjonsregler i LTM (**prosedural** + **semantisk** + **episodisk**), **working memory (WM)** som tilstand. `theorem`/`text` **prosesseringssyklus**: **elaborering** (regler foreslår/utdyper) → **decision** (velg operator ut fra preferanser) → **application** (anvend operator, endre WM); recognize-act. `definition` **operatorpreferanser**: forslag `(<s> ^operator <o> +)` (acceptable, `+`) vs. valgt operator `(<s> ^operator <o>)`. `definition` **impasse**: oppstår når ingen/like/motstridende preferanser → **substate** opprettes → løses → **chunking** (ny regel læres fra løsningen = Soars læring). `example` enkel produksjonsregel (propose/apply, water-jug-lignende, NYSKREVET) — lese OG skrive. Forankring: Laird, Newell.
- **Sammenlignings-/drøftingsakser:** Soar (ren produksjon, chunking, symbolsk) vs. ACT-R (subsymbolsk aktivering); impasse-drevet læring som Soars signatur.
- **Typiske feil:** blande elaborering (parallell, monoton) og decision (velger); tro `+`-preferanse = valgt operator (det er *acceptable*); forveksle impasse-typer; skrive syntaktisk feil regel (KONS: konsistens vurderes, men syntaks må stemme).
- **Kvote:** 20 quiz / 24 flashcards.

#### Kapittel 3.3: ACT-R — hybrid arkitektur og subsymbolsk aktivering

- **id:** `tdt4137-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-3-2` · **kapitteltype:** tema
- **description:** ACT-R som hybrid arkitektur — produksjonssystem sentralt, subsymbolsk base-level-aktivering av chunks, og kobling til hjerneregioner.
- **Eksamensbelegg:** ACT-R 3/4 (H2015, H2016, H2018). Sjangre: KS, SU, SAM, RM (lett aktiveringsregning). Prioritet: **perfekt** (den kanoniske hybriden).
- **Begreps-/innholdskontrakt:** `definition` **ACT-R (hybrid)**: symbolske **produksjoner** + **subsymbolsk aktivering**; moduler koblet til **hjerneregioner**; sentral prosessor = produksjonssystem. `theorem` **base-level-aktivering** `Bᵢ = ln(Σ tⱼ⁻ᵈ)` (log-odds for at en chunk trengs — nylig/hyppig brukte chunks har høyere aktivering); total aktivering `Aᵢ = Bᵢ + Σⱼ Wⱼ Sⱼᵢ` (kontekst/spreading). `text` chunks (deklarativt minne) + produksjoner (proseduralt); konfliktløsning via **utility**. Forankring: Anderson (ACT-R). *Regningen holdes lett/konseptuell* (Aamodt-nivå), ikke Thomassens tunge numeriske.
- **Sammenlignings-/drøftingsakser:** ACT-R (hybrid, aktivering, hjernekobling) vs. Soar (symbolsk, chunking); base-level-aktiveringens rolle (hvorfor log-odds).
- **Typiske feil:** tro ACT-R er rent symbolsk (det er hybrid); forveksle base-level (bruk over tid) med spreading (kontekst); overkomplisere aktiveringsregningen.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 3.4: Icarus og Brooks' subsumption — beliefs, skills og reaktiv arkitektur

- **id:** `tdt4137-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4137-3-2` · **kapitteltype:** tema
- **description:** To kontrasterende arkitekturer — Icarus (cognitivist: beliefs som tilstand, separate skill-/konseptmoduler, impasse-drevet problemløsning) og Brooks' subsumption (emergent/reaktiv: lagdelt, ingen intern modell, inhibit/suppress).
- **Eksamensbelegg:** Icarus 3/4 (H2015, H2017, H2018 — #8 sant/usant), Brooks 3/4 (H2015, H2017, H2018 — #9/#10). Sjangre: SU (FK11, FK12), KS, SAM. Prioritet: **perfekt** (to faste, ofte i sant/usant).
- **Begreps-/innholdskontrakt:** `definition` **Icarus**: tilstand = mengde **beliefs**; **conceptual inference** nederst (bottom-up), så **skill execution**; **impasse** når ingen anvendbar skill → problemløsning; **skills og konsepter i separate, men samvirkende moduler**. `definition` **Brooks subsumption**: lagdelt reaktiv arkitektur (AFSM-lag); **ingen intern verdensmodell** («the world is its own best model»); høyere lag **subsumerer** lavere via **inhibit** (output undertrykkes en tid) og **suppress** (input erstattes); lagene opererer **uavhengig**. Forankring: Langley (Icarus), Brooks (subsumption/behavior-based robotics). Brooks = instans av emergent-paradigmet (Del 2.3) og embodied-kritikken (Del 1.3).
- **Sammenlignings-/drøftingsakser:** Icarus (cognitivist, beliefs, deliberativ) vs. Brooks (emergent, reaktiv, ingen modell); inhibit vs. suppress; hvorfor Brooks avviser sentral representasjon.
- **Typiske feil:** **FK11** (Icarus: skills/konsepter i samme modul — nei, separate); **FK12** (Brooks: øverste lag mottar all input — nei, lag uavhengige; øvre subsumerer); blande inhibit (output) og suppress (input).
- **Kvote:** 18 quiz / 24 flashcards.

#### Kapittel 3.5: CLARION og arkitektursammenligning (SAM-drill)

- **id:** `tdt4137-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-3-4` · **kapitteltype:** drill (sammenligning)
- **description:** CLARION (firemoduls hybrid med eksplisitt/implisitt kunnskap) og en systematisk sammenligning av alle arkitekturene langs den faste malen — den karaktergivende arkitektursammenligningen.
- **Eksamensbelegg:** CLARION 1/4↑ (H2018); arkitektursammenligning 4/4 (Soar vs. CLARION o.l. er fast toppoppgave). Sjangre: **SAM** (hovedsjanger), DR. Prioritet: **perfekt** (sammenligning = topp; §4: «Soar vs. CLARION langs arkitektur/minne/problemløsning/læring»).
- **Begreps-/innholdskontrakt (sammenligningsmal):** `definition` **CLARION**: fire subsystemer; **symbolsk topplag + nevralt/RL-bunnlag**; skillet **eksplisitt vs. implisitt kunnskap** (dual-representasjon); hybrid. `theorem`/tabell **arkitektur-sammenligningsmal** — Soar / ACT-R / Icarus / Brooks / CLARION langs de fire aksene: *struktur*, *kunnskap+minne*, *problemløsning (input→output)*, *læring*, pluss *paradigme* (Del 2). Gjennomkjørt sensor-kommentert sammenligning (Soar vs. CLARION) med margnotater. 8–12 oppgaver: sammenlign to arkitekturer langs malen; plasser hver i paradigme; «hvilken arkitektur passer for oppgave X, og hvorfor?».
- **Sammenlignings-/drøftingsakser:** hele malen; symbolsk (Soar) vs. hybrid (ACT-R/CLARION) vs. reaktiv (Brooks); eksplisitt vs. implisitt kunnskap.
- **Typiske feil:** separate beskrivelser i stedet for kontrast (SAM-feilen); blande CLARIONs eksplisitt/implisitt-skille; feil paradigmeplassering.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 3:** 4 prøver (Kognitive arkitekturer)
1. Prøve 3.A (30 min): Soar — syklus, preferanser, impasse/chunking + les en regel (KS/SU/KONS).
2. Prøve 3.B (25 min): ACT-R — hybrid, base-level-aktivering (KS/RM).
3. Prøve 3.C (25 min): Icarus + Brooks — sant/usant-bolk (FK11/FK12) (SU).
4. Prøve 3.D (30 min): Sammenlign to arkitekturer langs malen (SAM).

---

### Del 4 — Fuzzy logikk (regnemodul) *(PERFEKT — 4/4)*

> Fuzzy er en 4/4-gjenganger og en av bare to regnetemaer som overlever hele veien
> (fra tung Thomassen-regning til lett Aamodt-medlemskap/hedges). **Komplett
> regnemodul** (DNA-regnefag lokalt): fuzzifiser→evaluer→aggreger→defuzzifiser, med
> eget drillkapittel. Rammes konseptuelt (mulighetsteori ≠ sannsynlighet).

#### Kapittel 4.1: Fuzzy-sett, medlemskap og hedges

- **id:** `tdt4137-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-0-2` · **kapitteltype:** regnemodul (teori)
- **description:** Fuzzy-mengder og medlemsgrad, forskjellen fra klassiske (crisp) mengder og fra sannsynlighet, konstruksjon av medlemskapsfunksjoner, og hedges som eksponentmodifikatorer.
- **Eksamensbelegg:** Fuzzy 4/4; medlemskap/hedges er Aamodt-formen (H2018 tegneoppgave). Sjangre: RM, KONS (konstruer medlemskap/hedge selv), SU (FK10). Prioritet: **perfekt**.
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste: `µ_A(x)` = medlemsgrad av x i sett A (∈ [0,1]). `definition` **fuzzy-sett** (medlemsgrad i [0,1], ikke {0,1}); **medlemskapsfunksjon** (trekant/trapes/gauss — les av `µ` grafisk); **crisp vs. fuzzy**; **mulighetsteori (possibility) ≠ sannsynlighet** (medlemskap kan være både sant og usant samtidig; summerer ikke til 1). `definition` **hedge**: modifikator på et fuzzy-sett via eksponent på `µ` — `very A = µ²`, `extremely A = µ³`, `very very A = µ⁴`, «somewhat/more-or-less» = `µ^{0,5}`. `example` konstruer medlemskapsfunksjon fra data (KONS) + påfør hedge. Forankring: Zadeh (fuzzy sets), Vernon/pensumartikkel.
- **Sammenlignings-/drøftingsakser:** fuzzy vs. sannsynlighet (mulighet vs. statistikk — FK10); hvorfor hedges er eksponentfunksjoner.
- **Typiske feil:** **FK10** (fuzzy = sannsynlighet); tegne medlemskap fra tabell i stedet for å legge på hedge som spurt (§5.15); tro hedge «flytter» kurven i stedet for å endre skarphet.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 4.2: Fuzzifisering og regelevaluering (OR/AND/NOT)

- **id:** `tdt4137-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-4-1` · **kapitteltype:** regnemodul (teori)
- **description:** De to første trinnene i fuzzy inferens — fuzzifiser inputs til medlemsgrader, og evaluer reglene med korrekte fuzzy-operatorer (OR = max, AND = min, NOT = 1−µ).
- **Eksamensbelegg:** Fuzzy inferens 4/4 (regelevaluering er kjernen). Sjangre: RM, SU (FK3). Prioritet: **perfekt**.
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste (µ, max, min). `theorem` **trinn 1 fuzzifisering**: les av `µ` for hver input på hvert relevant fuzzy-sett. `theorem` **trinn 2 regelevaluering**: **OR = max**, **AND = min**, **NOT = 1−µ**; regelens antecedent-verdi overføres til konsekvensen (klipper/skalerer utgangssettet). `example` evaluer et lite regelsett (2 inputs, 3–4 regler) trinn for trinn. Forankring: Mamdani-inferens.
- **Sammenlignings-/drøftingsakser:** min/max-operatorene vs. klassisk boolsk AND/OR; klipping (Mamdani) vs. skalering.
- **Typiske feil:** **FK3** (OR/AND/NOT forvekslet — OR er max, AND er min); glemme NOT = 1−µ; overføre feil verdi til konsekvensen.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 4.3: Aggregering og defuzzifisering — Mamdani (COG) vs. Sugeno

- **id:** `tdt4137-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-4-2` · **kapitteltype:** regnemodul (teori)
- **description:** De to siste trinnene — aggreger de klippede utgangssettene, og defuzzifiser til et crisp tall med Mamdani (senter-av-tyngde) eller Sugeno (singleton vektet snitt).
- **Eksamensbelegg:** Defuzzifisering 4/4 (tung i Thomassen, lett i Aamodt). Sjangre: RM, SU (FK2), SAM (Mamdani vs. Sugeno). Prioritet: **perfekt**.
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste (µ, x, COG). `theorem` **trinn 3 aggregering**: kombiner alle regelutganger (max av de klippede settene). `theorem` **trinn 4a Mamdani/COG**: senter-av-tyngde `x* = Σ µ(x)·x / Σ µ(x)` (fast steglengde langs x-aksen); mer «menneskelig»/regeluttrykkende, tyngre å regne. `theorem` **trinn 4b Sugeno**: singletons, vektet snitt `x* = Σ µᵢ·xᵢ / Σ µᵢ`; lett å regne, egner seg til kontrollsystemer. `example` samme regelutgang defuzzifisert BEGGE veier (kontrast). Forankring: Mamdani, Takagi-Sugeno.
- **Sammenlignings-/drøftingsakser:** **Mamdani vs. Sugeno** (uttrykkskraft vs. beregningsletthet; når velge hva — kontrollsystem → Sugeno); hvorfor COG er tyngre.
- **Typiske feil:** **FK2** (blande Mamdani og Sugeno — COG-integrasjon der singleton-snitt skal brukes eller motsatt); glemme å normalisere (dele på Σµ); regnefeil i steglengden.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 4.4: DRILL — Fuzzy inferens ende-til-ende

- **id:** `tdt4137-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4137-4-3` · **kapitteltype:** drill (regnemodul)
- **description:** Full drill i sjanger RM (fuzzy): kjør en komplett inferens fra to inputs til crisp output — fuzzifiser → evaluer → aggreger → defuzzifiser — med synlig mellomregning, både Mamdani og Sugeno.
- **Eksamensbelegg:** Fuzzy inferens ende-til-ende 4/4. Sjangre: RM (hoved), KONS. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) fuzzifiser hver input (les av `µ`); 2) evaluer hver regel (OR=max, AND=min, NOT=1−µ), overfør til konsekvens; 3) aggreger utgangssettene; 4) defuzzifiser (Mamdani COG med fast steglengde ELLER Sugeno vektet snitt). Fast fellekatalog som SKAL demonstreres: FK2 (Mamdani/Sugeno), FK3 (operatorer), normalisering. Gjennomkjørt sensor-kommentert eksamenscase (nyskrevet, f.eks. temperatur+fuktighet → vifte, eller tips-kalkulator) med margnotat om at **trinnene og verdiene gir uttelling, ikke bare svaret**. 10–14 oppgaver: komplette inferenser (Mamdani og Sugeno), hedge-varianter, konstruer-eget-utgangssett (KONS).
- **Oppgavesjangre:** RM. Mønstereksempel: «Gitt to inputs, tre fuzzy-sett og fire regler: kjør full Mamdani-inferens til crisp output. Vis alle fire trinn. Gjenta med Sugeno og sammenlign.»
- **Typiske feil:** hele fellekatalogen (FK2, FK3, glemme NOT, ikke normalisere, bare svaret uten trinn).
- **Kvote:** 20 quiz / 10 flashcards.

**Prøve-kvote Del 4:** 4 prøver (Fuzzy logikk)
1. Prøve 4.A (25 min): Fuzzy-sett, medlemskap, hedges, mulighet vs. sannsynlighet (RM/SU/KONS).
2. Prøve 4.B (25 min): Fuzzifisering + regelevaluering (OR/AND/NOT) (RM/SU).
3. Prøve 4.C (30 min): Defuzzifisering — Mamdani og Sugeno, sammenlign (RM/SAM).
4. Prøve 4.D (35 min): Full inferens ende-til-ende (RM).

---

### Del 5 — Nevrale nett og maskinlæring (regnemodul) *(PERFEKT — 4/4)*

> Nevrale nett er en 4/4-gjenganger og det andre regnetemaet som overlever hele
> veien (numerisk i Thomassen, konseptuelt i Aamodt). **Komplett regnemodul**
> (perseptron + deltaregel + backprop, husk θ) + eget drillkapittel; dype nett
> (CNN/autoenkoder/rekurrent) konseptuelt. Plasseres i emergent-paradigmet.

#### Kapittel 5.1: Kunstig nevron og perseptron

- **id:** `tdt4137-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-2-3` · **kapitteltype:** regnemodul (teori)
- **description:** Det kunstige nevronet mot det biologiske, perseptronen med step-aktivering, og deltaregelen for én treningsrunde — inkludert terskelen θ som vekt.
- **Eksamensbelegg:** Perseptron/deltaregel 4/4 (regning 3/4). Sjangre: RM, SU (FK1, FK8, FK9). Prioritet: **perfekt**.
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste: `xᵢ` input, `wᵢ` vekt, `θ` terskel, `Y` output, `α` læringsrate, `e` feil, `yd` ønsket. `definition` **biologisk↔kunstig** analogi: input→**dendritt** (mottar), node→**soma**, vekt→**synapse**, output→**akson** (sender). `theorem` **perseptron**: `Y = step(Σ xᵢwᵢ − θ)`; θ modelleres som **vekt w₀ på fast input −1**. `theorem` **deltaregel**: `Δwᵢ = α·xᵢ·eᵢ`, `e = yd − y`; oppdater ALLE vekter **inkludert θ**. `example` kjør én treningsrunde på en logisk port (AND/OR — NYSKREVET), oppdater vektene inkl. θ. Forankring: Rosenblatt (perseptron), Widrow-Hoff (deltaregel).
- **Sammenlignings-/drøftingsakser:** biologisk vs. kunstig nevron (analogi og dens grenser); step vs. andre aktiveringer (peker 5.3).
- **Typiske feil:** **FK1** (glemme å oppdatere θ); **FK8** (nevron-signalvei: dendritt mottar, akson sender); **FK9** (lineær separabilitet — se 5.2).
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 5.2: Lineær separabilitet og flerlagsnett

- **id:** `tdt4137-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-5-1` · **kapitteltype:** regnemodul (teori)
- **description:** Hvorfor en enkelt perseptron bare lærer lineært separerbare klasser (XOR-problemet), og hvorfor det motiverer flerlagsnett og bakoverpropagering.
- **Eksamensbelegg:** Lineær separabilitet 4/4 (H2018 #12 — erkjent dårlig formulert, både T/F godtatt). Sjangre: SU (FK9), KS. Prioritet: **perfekt** (koblingsledd til backprop).
- **Begreps-/innholds-/symbolkontrakt:** `definition` **lineær separabilitet**: to klasser kan skilles med et hyperplan; en perseptron lærer KUN når **klassene** er lineært separerbare. `definition` **XOR-problemet**: ikke lineært separerbart → én perseptron feiler → motiverer **skjult lag** (flerlagsnett/MLP). `text` hvorfor flere lag øker uttrykkskraft; peker mot backprop (5.3). Forankring: Minsky & Papert (*Perceptrons*), XOR.
- **Sammenlignings-/drøftingsakser:** enkeltlag (lineær grense) vs. flerlag (vilkårlig grense); presis formulering (FK9 — det er *klassene* som må være separerbare).
- **Typiske feil:** **FK9** (si «perseptronen er lineært separerbar» — det er klassene/dataene); tro flere lag alltid trengs; tro XOR er uløselig (bare for én perseptron).
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 5.3: Backpropagation

- **id:** `tdt4137-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4137-5-2` · **kapitteltype:** regnemodul (teori)
- **description:** Bakoverpropagering i fire trinn — initialiser, aktiver med sigmoid, oppdater vekter bakover med feilgradienten δ, sjekk konvergens — regnet for én iterasjon på et lite nett.
- **Eksamensbelegg:** Backprop 4/4 (regning 3/4 Thomassen). Sjangre: RM, SU (FK1). Prioritet: **perfekt**.
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste: `δ` feilgradient, `y` aktivering, sigmoid `σ`, `α`, `θ`, `wⱼₖ`. `theorem` **backprop trinn 1–4**: (1) **initialiser** vekter/terskler; (2) **aktiver** framover med **sigmoid** `y = 1/(1+e^{−net})`; (3) **oppdater bakover**: utgangslag `δ = y(1−y)·e` (`e = yd − y`), skjult lag `δⱼ = yⱼ(1−yⱼ)·Σₖ δₖ wⱼₖ`, så `Δw = α·δ·input` (inkl. θ); (4) **sjekk konvergens** (gjenta til feil under terskel). `text` deltaregel = **gradientnedstigning** i feilflaten (kan sette seg fast i lokalt minimum). `example` én komplett iterasjon på et 2-2-1-nett (NYSKREVET tall), oppdater alle vekter inkl. θ. Forankring: Rumelhart/Hinton/Williams (backprop).
- **Sammenlignings-/drøftingsakser:** deltaregel (enkeltlag) vs. backprop (flerlag, kjerneregel); hvorfor sigmoid (deriverbar); lokalt vs. globalt minimum.
- **Typiske feil:** **FK1** (glemme θ i oppdateringen); feil δ-formel for skjult vs. utgangslag; feil retning i propageringen; regnefeil i sigmoid-deriverte `y(1−y)`.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 5.4: Dype nett — CNN, autoenkoder og rekurrente nett

- **id:** `tdt4137-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-5-3` · **kapitteltype:** tema (konseptuell)
- **description:** De moderne nettarkitekturene konseptuelt — dype nett, CNN (lokalt reseptivt felt, ReLU, pooling), autoenkoder og rekurrente nett — og deres plass i emergent-paradigmet.
- **Eksamensbelegg:** Dype nett/CNN 4/4 konseptuelt (voksende i pensum, «moderne KI»). Sjangre: KS, SU, SAM. Prioritet: **perfekt** (konseptuelt).
- **Begreps-/innholdskontrakt:** `definition` **dypt nett** (mange skjulte lag — hierarkiske trekk); **CNN**: **lokalt reseptivt felt** (→ færre parametre/vektdeling), **ReLU** (ikke-linearitet), **pooling** (translasjonsinvarians); **autoenkoder** (input = output, lærer komprimert identitet/representasjon, usupervisert); **rekurrent nett (RNN)** (tilbakekoblinger → sekvens/tidsavhengighet). `text` plassering i **emergent/konneksjonistisk** paradigme (Del 2.3); læring fra data vs. programmering. Forankring: LeCun (CNN), moderne dyp læring.
- **Sammenlignings-/drøftingsakser:** CNN vs. fullt tilkoblet (parameterdeling); autoenkoder vs. klassifikator; hvorfor pooling gir invarians; hvorfor dyp læring hører til emergent.
- **Typiske feil:** tro CNN «ser hele bildet» i hvert nevron (lokalt felt); forveksle autoenkoder (usupervisert, input=output) med klassifikator; tro flere lag alltid = bedre.
- **Kvote:** 18 quiz / 22 flashcards.

#### Kapittel 5.5: DRILL — Perseptron- og backprop-oppdatering

- **id:** `tdt4137-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4137-5-4` · **kapitteltype:** drill (regnemodul)
- **description:** Full drill i sjanger RM (nevralt): kjør deltaregel-oppdatering og én backprop-iterasjon for hånd, med θ oppdatert og synlig mellomregning.
- **Eksamensbelegg:** Perseptron/backprop-oppdatering 4/4 (regning). Sjangre: RM (hoved). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **perseptron**: 1) beregn `net = Σxᵢwᵢ − θ`; 2) `Y = step(net)`; 3) `e = yd − y`; 4) `Δwᵢ = α·xᵢ·eᵢ` for alle vekter **inkl. θ** (input −1); 5) nye vekter. For **backprop**: trinn 1–4 (initialiser → sigmoid framover → δ bakover (utgang så skjult) → oppdater alle vekter inkl. θ). Fast fellekatalog: FK1 (θ), δ-formel utgang vs. skjult, sigmoid-derivert. Gjennomkjørt sensor-kommentert case (2-2-1-nett, NYSKREVET) med margnotat om at **å glemme θ er den vanligste feilen fasiten flagger**. 10–14 oppgaver: perseptron-runder på logiske porter + backprop-iterasjoner på små nett.
- **Oppgavesjangre:** RM. Mønstereksempel: «Kjør én backprop-iterasjon på nettet under (sigmoid, α gitt). Vis net, aktiveringer, δ per node og alle oppdaterte vekter inkludert terskler.»
- **Typiske feil:** hele fellekatalogen (FK1 θ, feil δ-lag, sigmoid-derivert, retning).
- **Kvote:** 20 quiz / 10 flashcards.

**Prøve-kvote Del 5:** 4 prøver (Nevrale nett og maskinlæring)
1. Prøve 5.A (25 min): Kunstig nevron + perseptron + deltaregel, én runde (RM/SU).
2. Prøve 5.B (25 min): Lineær separabilitet + XOR + flerlagsmotivasjon (SU/KS).
3. Prøve 5.C (35 min): Backprop — én iterasjon på lite nett, husk θ (RM).
4. Prøve 5.D (25 min): Dype nett — CNN/autoenkoder/RNN konseptuelt + paradigmeplassering (KS/SAM).

---

### Del 6 — Sannsynlighetsresonnering (regnemodul) *(KUNNE↑ — løftet utover arkivet)*

> Bayes er 2/4 i arkivet (ASR 2015, ett sant/usant 2018) men **eksplisitt i
> 2026-pensum** («deduktiv, ikke-deduktiv og sannsynlighetsbasert resonnering»).
> Delen løftes utover arkivet: resonneringstypene som ramme + en komplett Bayes-
> regnemodul med drill. ASR/N-gram beholdes KUN som historisk note her.

#### Kapittel 6.1: Resonneringstyper — deduktiv, ikke-deduktiv og sannsynlighetsbasert

- **id:** `tdt4137-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-1-1` · **kapitteltype:** tema
- **description:** Rammen for resonnering i kognitive systemer — deduktiv (gyldig/sikker), ikke-deduktiv (induksjon, abduksjon, analogi) og sannsynlighetsbasert — og hvor Bayes og analogi hører hjemme.
- **Eksamensbelegg:** Resonneringstyper **eksplisitt i dagens pensum** (tynt i arkiv). Sjangre: KS, SU, SAM. Prioritet: **kunne↑** (pensum-eksplisitt ramme).
- **Begreps-/innholdskontrakt:** `definition` **deduktiv** (konklusjon følger med nødvendighet av premissene; sannhetsbevarende); **induktiv** (generalisering fra observasjoner; usikker); **abduktiv** (slutning til beste forklaring); **analogisk** (Del 7); **sannsynlighetsbasert** (grader av tro, Bayes — Del 6.2). `text` plassering: deduktiv = sikker men lite ny kunnskap; ikke-deduktiv = usikker men kunnskapsutvidende; hvorfor kognitive systemer trenger begge. Forankring: pensumets resonneringsbolk.
- **Sammenlignings-/drøftingsakser:** deduktiv (sikker) vs. ikke-deduktiv (usikker/utvidende); hvor abduksjon og analogi skiller seg; hvorfor persepsjon er abduktiv/sannsynlig.
- **Typiske feil:** blande induksjon (generalisering) og abduksjon (beste forklaring); tro deduksjon gir «ny» kunnskap; plassere analogi som deduktiv.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 6.2: Bayes' regel — prior, likelihood og posterior

- **id:** `tdt4137-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-6-1` · **kapitteltype:** regnemodul (teori)
- **description:** Bayes' regel som modell for sannsynlighetsbasert resonnering — hvordan en prior oppdateres til en posterior gitt evidens — med begrepene likelihood, prior, posterior og normalisering.
- **Eksamensbelegg:** Bayes 2/4↑ (H2015 via ASR, H2018 sant/usant); pensum-eksplisitt. Sjangre: RM, KS, SU. Prioritet: **kunne↑** (løftet).
- **Begreps-/innholds-/symbolkontrakt:** `collapsible` symbolliste: `P(H)` prior, `P(X|H)` likelihood, `P(H|X)` posterior, `P(X)` evidens/normalisering. `theorem` **Bayes' regel**: `P(H|X) = P(X|H)·P(H) / P(X)`, der `P(X) = Σₕ P(X|H)P(H)`. `definition` **prior** (tro før evidens), **likelihood** (hvor sannsynlig evidensen er gitt hypotesen), **posterior** (oppdatert tro), **normalisering**. `text` sekvensiell oppdatering (posterior blir ny prior). `example` klassisk oppdatering (NYSKREVET: f.eks. medisinsk test eller sensordata) — regn posterior. Forankring: Bayes; sannsynlighetsbasert resonnering.
- **Sammenlignings-/drøftingsakser:** prior vs. likelihood (hva hver bidrar med); hvorfor `P(X)` bare normaliserer; Bayes som ikke-deduktiv resonnering.
- **Typiske feil:** bytte om likelihood `P(X|H)` og posterior `P(H|X)` (base-rate-fellen); glemme normaliseringen `P(X)`; forveksle prior og posterior.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 6.3: DRILL — Bayes-oppdatering (med ASR som historisk note)

- **id:** `tdt4137-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4137-6-2` · **kapitteltype:** drill (regnemodul)
- **description:** Full drill i sjanger RM (Bayes): regn posterior fra prior og likelihood, inkludert sekvensiell oppdatering og base-rate-oppgaver — med en kort historisk note om hvordan Bayes lå til grunn for talegjenkjenning (ASR).
- **Eksamensbelegg:** Bayes-regning (løftet); ASR 1/4 historisk. Sjangre: RM (hoved), SU. Prioritet: **kunne↑**.
- **Innholdskontrakt (løsningsoppskrift):** 1) identifiser prior `P(H)`, likelihood `P(X|H)` for hver hypotese; 2) beregn `P(X) = Σ P(X|H)P(H)`; 3) `P(H|X) = P(X|H)P(H)/P(X)`; 4) ved sekvens: bruk posterior som ny prior. Fast fellekatalog: likelihood↔posterior-bytte, glemme normalisering, base-rate. Gjennomkjørt sensor-kommentert case (NYSKREVET) med margnotat om base-rate-fellen. `collapsible` **historisk note**: ASR som `argmax P(W|X) ≈ argmax P(X|W)·P(W)` (Bayes, `P(X)` konstant) + N-gram + Viterbi — **Thomassen-spesifikt, kun historisk kontekst; Bayes-kjernen lever videre**. 8–12 Bayes-oppgaver (enkel + sekvensiell + base-rate).
- **Oppgavesjangre:** RM. Mønstereksempel: «En sensor gir positivt utslag. Gitt prior og likelihoods: regn posterior. Kom en ny måling: oppdater igjen.»
- **Typiske feil:** likelihood/posterior-bytte; glemme `P(X)`; ignorere base-rate.
- **Kvote:** 18 quiz / 10 flashcards.

**Prøve-kvote Del 6:** 4 prøver (Sannsynlighetsresonnering)
1. Prøve 6.A (25 min): Resonneringstypene — deduktiv/induktiv/abduktiv/sannsynlig (KS/SAM).
2. Prøve 6.B (25 min): Bayes' regel — prior/likelihood/posterior, én oppdatering (RM/KS).
3. Prøve 6.C (30 min): Bayes sekvensiell + base-rate (RM).
4. Prøve 6.D (20 min): Sannsynlighetsresonnering — sant/usant + ASR-note (SU/KS).

---

### Del 7 — Analogi- og casebasert resonnering *(KUNNE — analogi 3/4)*

> Analogi (Gentner/MAC-FAC) er 3/4; CBR 1/4↑ (Aamodt). Begge er ikke-deduktive
> resonneringsmetoder (kobling Del 6.1). Systematicity (FK13) og MAC/FAC-todelingen
> er faste sant/usant-mål.

#### Kapittel 7.1: Gentners structure-mapping og similaritetstyper

- **id:** `tdt4137-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-6-1` · **kapitteltype:** tema
- **description:** Gentners structure-mapping-teori for analogi — kunnskap som objekter, attributter og relasjoner, de fire similaritetstypene, og systematicity-prinsippet.
- **Eksamensbelegg:** Analogi 3/4 (H2016, H2017, H2018). Sjangre: KS, SU (FK13), SAM. Prioritet: **kunne**.
- **Begreps-/innholdskontrakt:** `definition` **structure-mapping** (Gentner): kunnskap som **objekter**, **objektattributter** og **relasjoner** (proposisjonsnett); analogi = mapping av **relasjonsstruktur** (ikke overflateattributter) fra base til mål. `definition` **similaritetstyper** etter overlapp i attributter vs. relasjoner: **literal similarity** (begge), **analogi** (relasjoner, ikke attributter), **abstraksjon** (relasjoner), **anomali** (verken). `definition` **systematicity-prinsippet**: sammenhengende, **høyere-ordens relasjonssystemer foretrekkes** ved mapping (ikke isolerte lavere-ordens relasjoner). Forankring: Gentner.
- **Sammenlignings-/drøftingsakser:** analogi vs. literal similarity (relasjon vs. overflate); hvorfor systematicity foretrekker høyere-ordens relasjoner.
- **Typiske feil:** **FK13** (systematicity feil vei — høyere-ordens relasjoner er *viktigere*); forveksle attributt (egenskap ved objekt) og relasjon (mellom objekter); tro analogi bruker overflatelikhet.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 7.2: MAC/FAC og analogisk gjenfinning

- **id:** `tdt4137-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4137-7-1` · **kapitteltype:** tema
- **description:** MAC/FAC-modellen for å hente og velge analoge baser — den brede, billige MAC-fasen (innholdsvektorer) og den dyre, presise FAC-fasen (structure-mapping engine).
- **Eksamensbelegg:** MAC/FAC 3/4 (del av analogioppgaven). Sjangre: KS, SU, SAM. Prioritet: **kunne**.
- **Begreps-/innholdskontrakt:** `definition` **MAC/FAC** («Many Are Called, Few Are Chosen»): to-trinns gjenfinning. **MAC**: henter mange kandidat-baser billig via **innholdsvektorer** (literal/overflate-similaritet). **FAC**: velger blant kandidatene via **structure-mapping engine (SME)** (relasjonsstruktur). `text` hvorfor to trinn (effektivitet: bredt-og-billig så smalt-og-dyrt). Forankring: Forbus, Gentner (MAC/FAC, SME).
- **Sammenlignings-/drøftingsakser:** MAC (bred, overflate, billig) vs. FAC (smal, struktur, dyr); hvorfor todelingen er effektiv.
- **Typiske feil:** bytte om MAC og FAC; tro MAC bruker structure-mapping (det er FAC); tro FAC henter fra hele minnet (bare MAC-kandidatene).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 7.3: Casebasert resonnering — Creek, MOP og dynamisk minne

- **id:** `tdt4137-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-6-1` · **kapitteltype:** tema
- **description:** Casebasert resonnering (CBR) som ikke-deduktiv metode — gjenbruk av tidligere case via retrieve–reuse–revise–retain — og sentrale minnemodeller (Schanks MOP/dynamiske minne, Creek, Casey).
- **Eksamensbelegg:** CBR 1/4↑ (H2018, Aamodt-spesifikt, treffer «moderne/ikke-deduktiv»). Sjangre: KS, SU, DR. Prioritet: **kunne** (differensierer; dagens profil).
- **Begreps-/innholdskontrakt:** `definition` **casebasert resonnering (CBR)**: løs et nytt problem ved å hente og tilpasse et lignende tidligere **case**; **4R-syklusen** retrieve → reuse → revise → retain (læring = lagre nytt case). `definition` **Schanks dynamiske minne / MOP** (Memory Organization Packets — generaliserte episoder som organiserer og indekserer minner); **Creek** (kunnskapsintensiv CBR — case forankret i en generell domenemodell); **Casey** (medisinsk diagnose-CBR — eksempel). `text` CBR som ikke-deduktiv (analogisk) resonnering; kontrast til regelbasert. Forankring: Kolodner, Schank, Aamodt (Creek).
- **Sammenlignings-/drøftingsakser:** CBR (erfaringsbasert, gjenbruk) vs. regelbasert (fra første prinsipper); kunnskapsintensiv (Creek) vs. kunnskapsfattig CBR; CBR som læring.
- **Typiske feil:** forveksle 4R-stegene; tro CBR ikke lærer (retain er læring); blande MOP (minneorganisering) med et enkelt case.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 7:** 4 prøver (Analogi- og casebasert resonnering)
1. Prøve 7.A (25 min): Structure-mapping + similaritetstyper + systematicity (KS/SU).
2. Prøve 7.B (20 min): MAC/FAC — de to fasene (KS/SU).
3. Prøve 7.C (25 min): CBR — 4R-syklusen + Creek/MOP (KS/DR).
4. Prøve 7.D (25 min): Analogi vs. CBR som ikke-deduktive metoder (SAM).

---

### Del 8 — Historie og nyere kognitive systemer *(KUNNE/KJENNE — bygd ut fra pensum)*

> Historie og «moderne KI» er nesten fraværende i arkivet men **eksplisitt i dagens
> pensum** — bygges UT herfra. Denne delen rommer også de UTGÅTTE Thomassen-temaene
> (GOMS/MHP-tid/BCI/ASR) KUN som historiske/HCI-noter, slik at studenten kjenner
> dem uten å overtrene.

#### Kapittel 8.1: Historisk utvikling — fra Turing til embodied KI

- **id:** `tdt4137-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-2-4` · **kapitteltype:** tema (historie)
- **description:** Den historiske linjen i kognitive teorier og teknologier — Turing, Dartmouth, Newell & Simon, den symbolske gullalderen, den konneksjonistiske gjenkomsten og den embodied vendingen.
- **Eksamensbelegg:** «Historisk utvikling» **eksplisitt i pensum**, tynt i arkiv (via hypotesene/AGI). Sjangre: KS, T5-lignende historieoppgave, DR. Prioritet: **kunne** (pensum-eksplisitt; billige kortsvarspoeng).
- **Begreps-/innholdskontrakt:** `definition`-tidslinje: **Turing** (imitasjonsspill/Turing-testen som operasjonelt intelligensmål); **Dartmouth-konferansen 1956** (fagets fødsel, «artificial intelligence»); **Newell & Simon / GPS** (Logic Theorist, General Problem Solver, PSSH/HSH); **symbolsk gullalder** (regelbaserte systemer, ekspertsystemer); **konneksjonismens gjenkomst** (perseptron → AI-vinter etter Minsky/Papert → backprop-revival → dyp læring); **embodied/enactive vending** (Brooks, situert robotikk); mot **moderne KI** (dyp læring, AGI, XAI). `text` bind til paradigmene: symbolsk → konneksjonistisk → embodied. Forankring: KI-/kognisjonshistorie, Vernon.
- **Sammenlignings-/drøftingsakser:** brudd vs. kontinuitet i paradigmeskiftene; hvorfor AI-vinteren kom; symbolsk vs. konneksjonistisk som pendel.
- **Typiske feil:** forveksle Turing (1950, testen) og Dartmouth (1956, navngivningen); tro konneksjonisme er ny (perseptronen er 1950-tall); framstille skiftene som rene brudd.
- **Kvote:** 16 quiz / 20 flashcards.

#### Kapittel 8.2: Persepsjon, situasjonsforståelse og HCI — med de historiske notene (MHP/GOMS/BCI)

- **id:** `tdt4137-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4137-8-1` · **kapitteltype:** tema
- **description:** Persepsjon i kognitive systemer og Endsleys situasjonsforståelse (tre nivåer), pluss MHP/Fitts/Hicks konseptuelt og de UTGÅTTE Thomassen-temaene (GOMS/KLM-tid, BCI/EEG) som korte historiske noter man skal kjenne men ikke drille.
- **Eksamensbelegg:** Persepsjon **eksplisitt i pensum**; Endsley 1/4↑ (H2018); MHP 3/4 og GOMS 3/4 **historisk (utgått etter 2017)**. Sjangre: KS, SU (FK6, FK7). Prioritet: **kjenne** (persepsjon/Endsley kunne; GOMS/MHP-tid/BCI KUN historisk).
- **Begreps-/innholdskontrakt:** `definition` **persepsjon** (tolkning av sensorisk input; ofte abduktiv — kobling 6.1). `definition` **Endsley situasjonsforståelse** (tre nivåer: 1 persepsjon av elementer → 2 forståelse av situasjonen → 3 projeksjon av framtidig status). `definition` **MHP (konseptuelt)**: perseptuelt / **kognitivt** / motorisk subsystem; **Fitts lov** (bevegelsestid *omvendt* proporsjonal med målstørrelse) og **Hicks lov** (valgtid øker med antall alternativer) som prinsipper. `collapsible` **historiske noter (UTGÅTT — kjenn, ikke drill)**: GOMS/NGOMSL/KLM-brukermodellering og utførselstid `T = 0,1·steg + ΣKLM`; BCI/EEG (windowing, mu-bølger ~10 Hz, P300 ~300 ms) — «disse fylte Thomassen-settene, men falt bort i 2018 og er ikke i dagens pensum». Forankring: Card/Moran/Newell (MHP/GOMS — historisk), Endsley.
- **Sammenlignings-/drøftingsakser:** Endsleys tre nivåer; MHP-subsystemene (uten tidsregning); hvorfor GOMS/BCI er utgått.
- **Typiske feil:** **FK6** (MHP-subsystem: kognitivt, ikke «emosjonelt»); **FK7** (Fitts lov feil retning — større mål = raskere); bruke tid på GOMS/BCI-regning (utgått).
- **Kvote:** 14 quiz / 18 flashcards.

#### Kapittel 8.3: Moderne KI — AGI, forklarbar KI og bevissthetsfilosofi

- **id:** `tdt4137-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4137-1-3` · **kapitteltype:** tema
- **description:** De moderne temaene i dagens pensum — artificial general intelligence (AGI), forklarbar KI (XAI/DARPA) og bevissthetsfilosofi (sterk vs. svak KI, det kinesiske rom) — det differensierende drøftingsstoffet.
- **Eksamensbelegg:** AGI/XAI 1/4↑ (H2018); bevissthetsfilosofi **eksplisitt i pensum**. Sjangre: DR (hovedsjanger — A/B-laget), KS, SU (FK14). Prioritet: **kunne/kjenne** (drøfting differensierer topp; treffer dagens profil).
- **Begreps-/innholdskontrakt:** `definition` **AGI (artificial general intelligence)**: mål om generell menneskelignende intelligens — **å tilnærme** menneskelig intelligens (ikke nødvendigvis overgå); kontrast til smal KI. `definition` **forklarbar KI (XAI)**: model induction / gjennomsiktighet — å gjøre (særlig dype) modellers beslutninger forståelige (DARPA XAI-programmet); motivasjon: tillit, ansvar. `definition` **bevissthetsfilosofi**: **sterk vs. svak KI**; **Searles kinesiske rom** (symbolmanipulasjon ≠ forståelse); the hard problem of consciousness (kort). Forankring: DARPA (XAI), Searle, AGI-litteraturen.
- **Sammenlignings-/drøftingsakser:** AGI vs. smal KI; sterk vs. svak KI; hvorfor XAI vokser med dyp læring; kinesiske rom mot PSSH (kobling Del 1.2/1.3).
- **Typiske feil:** **FK14** (AGI = «overgå mennesket» — nei, tilnærme); tro kinesiske rom argumenterer *for* sterk KI; forveksle XAI (forklarbarhet) med ren nøyaktighet.
- **Kvote:** 16 quiz / 20 flashcards.

**Prøve-kvote Del 8:** 4 prøver (Historie og nyere kognitive systemer)
1. Prøve 8.A (25 min): Historisk linje — Turing/Dartmouth/GPS + symbolsk→konneksjonistisk→embodied (KS/DR).
2. Prøve 8.B (25 min): Persepsjon + Endsley + MHP konseptuelt (KS/SU) — og hva som er UTGÅTT.
3. Prøve 8.C (25 min): AGI + XAI — drøft (DR).
4. Prøve 8.D (25 min): Bevissthetsfilosofi — sterk/svak KI, kinesiske rom (DR/SU).

---

### Del 9 — Eksamenstrening

> To sjangerdrill-kapitler (sant/usant og sammenligning/kortsvar — de mest
> sannsynlige prøveformene) + tre komplette øvingsprøver: én i **midtprøve-form**
> (2 t, konseptuell, Del 1/2/6/7-tyngde) og to i **sluttksamen-form** (3 t, konsept
> + regnemoduler). Alle oppgaver NYSKREVNE. Alt merket `(verifiser)` der formen er
> antatt.

#### Kapittel 9.1: SANT/USANT-drill med begrunnelse — hele feilkatalogen

- **id:** `tdt4137-9-1` · **number:** 9.1 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4137-8-3` · **kapitteltype:** sjangerdrill
- **description:** Full drill i sjanger SU: ~40 nyskrevne sant/usant-utsagn på tvers av pensum, hver med en kort modellbegrunnelse — kalibrert mot hele feilkatalogen FK1–FK15.
- **Eksamensbelegg:** Sant/usant 1/4 eksplisitt (2018, 20 utsagn), men **den mest sannsynlige midtprøveformen** og sensorpreferert. Sjangre: **SU** (hoved). Prioritet: **perfekt** (billig, differensierer).
- **Innholdskontrakt (løsningsoppskrift):** 1) les utsagnet presist (mange feil skyldes dårlig lesing); 2) avgjør sant/usant; 3) **skriv ALLTID en setnings begrunnelse** (redder delpoeng ved feil svar; streng retting = galt uten begrunnelse gir 0). Gjennomkjørt sensor-kommentert eksempel: samme utsagn besvart uten begrunnelse (0 ved feil) vs. med begrunnelse (delpoeng). ~40 utsagn organisert etter FK-katalogen: FK1 (θ), FK2 (Mamdani/Sugeno), FK3 (OR/AND/NOT), FK4 (Marr/Kelso), FK5 (rasjonalitetsprinsipp), FK6 (MHP), FK7 (Fitts), FK8 (nevron-vei), FK9 (lin.sep.), FK10 (fuzzy≠sanns.), FK11 (Icarus), FK12 (Brooks), FK13 (systematicity), FK14 (AGI), FK15 (hypotesene) — hver med kort modellbegrunnelse.
- **Oppgavesjangre:** SU. Mønstereksempel: «Utsagn: *I Soar oppstår en impasse når flere operatorpreferanser peker på samme operator.* Sant/usant? Begrunn.» (usant — impasse oppstår ved *ingen/like/motstridende* preferanser.)
- **Typiske feil:** ikke begrunne (kaster bort delpoeng); gjette uten resonnement; overse at ett galt delledd gjør hele utsagnet usant.
- **Kvote:** 20 quiz / 12 flashcards.

#### Kapittel 9.2: Sammenligning og kortsvar — sjangerdrill

- **id:** `tdt4137-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4137-9-1` · **kapitteltype:** sjangerdrill
- **description:** Full drill i sjangrene SAM og KS: sammenlign arkitekturer/paradigmer langs faste akser og gi presise kortsvar — det A/B-differensierende laget.
- **Eksamensbelegg:** Sammenligning/kortsvar er æra-overgripende og det topp-givende laget (§4). Sjangre: **SAM, KS** (hoved), DR. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **SAM**: bygg ÉN tabell/struktur langs de faste aksene (arkitekturer: struktur/minne/problemløsning/læring/paradigme; paradigmer: Vernon-aksene) — **kontrast, ikke to separate beskrivelser**. For **KS**: hovedpoenget/definisjonens kjerne først, kort og presist. Gjennomkjørt sensor-kommentert case (Soar vs. CLARION; cognitivist vs. emergent) med margnotat om at kontrasten gir topp. 12–16 oppgaver: sammenlign arkitekturer/paradigmer/resonneringstyper/defuzzifiseringsmetoder; kortsvar på tvers av pensum.
- **Oppgavesjangre:** SAM, KS. Mønstereksempel: «Sammenlign Soar og ACT-R langs struktur, minne, problemløsning og læring i én tabell.»
- **Typiske feil:** to separate beskrivelser i stedet for kontrast; skrive langt der kort belønnes; utelate en akse.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 9.3: ØVINGSPRØVE — Midtprøve-form (2 t, konseptuell) `(verifiser)`

- **id:** `tdt4137-9-3` · **number:** 9.3 · **estimatedMinutes:** 130 · **prerequisites:** `tdt4137-9-2` · **kapitteltype:** øvingsprøve
- **description:** Komplett øvings-midtprøve i antatt form — 2 timer, kode D, konseptuell/kortsvar med tyngde på grunnlag, paradigmer og resonnering (Del 1/2/6/7), inkludert en sant/usant-bolk.
- **Eksamensbelegg:** Modellerer den antatte midtprøven (40 %, 2 t) `(verifiser)` — konseptuell, første halvdel av pensum. Sjangre: SU, KS, SAM, DR, lett RM (Bayes). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Nyskrevet sett (~6–8 oppgaver, sum 100) som speiler midtprøvens antatte temafordeling: paradigmer (Vernon-klassifisering, SAM), hypotesene/filosofi (KS/DR), resonneringstyper (KS), én sant/usant-bolk på ~10 utsagn (SU, feilkatalogen), en lett Bayes-oppdatering (RM). Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse, med `tip` om delpoeng/vekting og «begrunn alltid sant/usant». Åpningsnote: **dette er en antatt form — Mesters faktiske midtprøve kan avvike** `(verifiser)`.
- **Oppgavesjangre:** SU, KS, SAM, DR, RM (lett). Mønster: konseptuell bredde over Del 1/2/6/7.
- **Typiske feil:** dårlig tidsstyring på 2 t; ikke begrunne sant/usant; skrive essay der kortsvar kreves.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 9.4: ØVINGSEKSAMEN A — Sluttksamen-form (3 t, konsept + regnemoduler)

- **id:** `tdt4137-9-4` · **number:** 9.4 · **estimatedMinutes:** 190 · **prerequisites:** `tdt4137-9-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett øvings-slutteksamen i antatt form — 3 timer, kode D, konseptuelle drøftinger + lette regnemoduler (fuzzy inferens, backprop) med tyngde på arkitekturer, fuzzy, nevralt og nyere systemer (Del 3/4/5/8).
- **Eksamensbelegg:** Modellerer den antatte slutteksamen (60 %, 3 t) `(verifiser)`. Sjangre: SAM, DR, RM (fuzzy + backprop), KS, SU. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Nyskrevet sett (~7–9 oppgaver, sum 100) som speiler en «typisk» slutteksamen: én arkitektursammenligning (SAM, Soar vs. hybrid), én full fuzzy-inferens (RM, ende-til-ende), én backprop-iterasjon (RM, husk θ), én drøfting (DR, embodied-kritikk eller XAI/AGI), en kortsvarsbolk (KS) og en sant/usant-bolk (SU). Løsningsforslag i eget `collapsible` per oppgave, A-besvarelse, med `tip` om delpoeng («vis mellomregning», «kontrast gir topp»). Åpningsnote `(verifiser)`.
- **Oppgavesjangre:** SAM, DR, RM, KS, SU. Mønster: konsept + regnemoduler over Del 3/4/5/8.
- **Typiske feil:** hoppe over mellomregning i RM (delpoeng tapt); glemme θ i backprop (FK1); separate beskrivelser i SAM.
- **Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 9.5: ØVINGSEKSAMEN B — Sluttksamen-form (3 t, bred variant)

- **id:** `tdt4137-9-5` · **number:** 9.5 · **estimatedMinutes:** 190 · **prerequisites:** `tdt4137-9-4` · **kapitteltype:** øvingseksamen
- **description:** Andre komplette øvings-slutteksamen med en annen temavekting — bredere fordeling som også trekker inn analogi/CBR, Sugeno-defuzzifisering og Bayes — for å trene bredden mot en ukjent instruktørprofil.
- **Eksamensbelegg:** Andre «typiske» slutteksamen `(verifiser)` — bevisst annen vekting for å dekke bredden (siden Mesters profil er ukjent). Sjangre: RM (Sugeno + Bayes), SAM (paradigmer), DR, KS, SU. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Nyskrevet sett (~7–9 oppgaver, sum 100): én paradigmesammenligning/klassifisering (SAM), én Sugeno-inferens (RM), én Bayes-oppdatering (RM), én analogi/CBR-oppgave (KS/DR, Gentner eller 4R), én filosofidrøfting (DR, Marr/Kelso eller hypotesene), en sant/usant-bolk (SU). Løsningsforslag i `collapsible` per oppgave, A-besvarelse, `tip` om delpoeng. Åpningsnote `(verifiser)`. Sammen dekker 9.4 + 9.5 alle de fire 100 %-temaene + regnemodulene + filosofi/resonnering, slik at studenten er rustet uansett hvilken vei Mester lener.
- **Oppgavesjangre:** RM, SAM, DR, KS, SU. Mønster: bred dekning inkl. Del 6/7.
- **Typiske feil:** FK2 (Mamdani/Sugeno) i Sugeno-oppgaven; base-rate i Bayes; systematicity feil vei (FK13) i analogi.
- **Kvote:** 12 quiz / 8 flashcards.

*(Del 9 er eksamenstrening/meta — ingen egen «Prøve-kvote Del 9»; de tre øvingsprøvene 9.3–9.5 ER prøvene, og sjangerdrillene 9.1–9.2 dekker prøveformene.)*

---

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

Faget er et **begrepsrikt drøftingsfag med tre regnemoduler** → høy flashcard-
tetthet (676, i det anbefalte 650–800-båndet for begrepsrike fag) og høy quiz (658),
fordi **sant/usant er en egen eksamenssjanger** som skal drilles bredt. Begge ligger
godt over gulvet på 500. Regnemodul-/drill-kapitler har lav flashcard-kvote (få nye
*begreper*, mye *prosedyre*) og høy quiz; begreps-/filosofi-/arkitekturkapitler har
høy flashcard-kvote.

| Del | Kapitler | Quiz | Flashcards |
|---|:--:|:--:|:--:|
| 0 — Eksamenskart og prøvehåndverk | 2 | 34 | 30 |
| 1 — Kognisjon, grunnbegreper og filosofi | 5 | 86 | 98 |
| 2 — Kognitive paradigmer (Vernon) | 4 | 74 | 82 |
| 3 — Kognitive arkitekturer | 5 | 90 | 108 |
| 4 — Fuzzy logikk (regnemodul) | 4 | 70 | 66 |
| 5 — Nevrale nett og maskinlæring (regnemodul) | 5 | 86 | 86 |
| 6 — Sannsynlighetsresonnering (regnemodul) | 3 | 50 | 44 |
| 7 — Analogi- og casebasert resonnering | 3 | 48 | 58 |
| 8 — Historie og nyere kognitive systemer | 3 | 46 | 58 |
| 9 — Eksamenstrening | 5 | 74 | 46 |
| **SUM** | **39** | **658** | **676** |

**Summeringskontroll:** Quiz 34+86+74+90+70+86+50+48+46+74 = **658** (≥500 ✓).
Flashcards 30+98+82+108+66+86+44+58+58+46 = **676** (≥500 ✓, i 650–800-båndet ✓).
Prøver: 8 temadeler × 4 = **32** temaprøver + **3** øvingsprøver (9.3 midtprøve-form,
9.4/9.5 sluttksamen-form) = 35 prøvesett totalt (≥4 per temadel ✓).

---

## 6. Studieguide (Del 0 er kjernen)

Del 0.1 (eksamenskartet) + 0.2 (prøvehåndverket) fungerer som studieguidens kjerne
og prioriteringsverktøy. Anbefalt leseløype, kalibrert mot delt vurdering:

- **Mot midtprøven (40 %, 2 t, konseptuell `(verifiser)`):** Del 0 → Del 1 (filosofi/
  hypotesene) → Del 2 (paradigmer) → Del 6 (resonneringstyper/Bayes) → Del 7 (analogi/
  CBR). Drill sjanger **SU** (kap. 9.1) og **SAM/KS** (kap. 9.2). Kjør øvings-
  midtprøven 9.3.
- **Mot slutteksamen (60 %, 3 t, konsept + regnemoduler `(verifiser)`):** Del 3
  (arkitekturer, Soar) → Del 4 (fuzzy, kjør drill 4.4) → Del 5 (nevralt, kjør drill
  5.5) → Del 8 (historie/nyere). Kjør øvingseksamenene 9.4 + 9.5.
- **Trygg kjerne uansett instruktørprofil:** de fire 100 %-gjengangerne (paradigmer,
  fuzzy, nevralt, Soar) + de to hypotesene. **Ikke** bruk tid på GOMS/KLM/MHP-tid/BCI/
  ASR-regning (utgått).
- **Faste håndverksgrep:** begrunn ALLTID sant/usant; kontrast (ikke to beskrivelser)
  i sammenligning; vis mellomregning i regnemoduler; hovedpoeng først i kortsvar.

---

## 7. Byggerekkefølge og verifikasjon (for fase 3–7)

**Byggerekkefølge (fase 4, én Opus-agent per del, maks 2 samtidige):**
1. Del 0 + Del 1 (fundament: sjangre, håndverk, filosofi/hypotesene — alle andre deler refererer hit).
2. Del 2 (paradigmer — klassifiserer Del 3/5) og Del 3 (arkitekturer) — les hverandres kontrakter (arkitektur↔paradigme-kobling).
3. Del 4 (fuzzy) og Del 5 (nevralt) — regnemoduler, uavhengige; egne agenter kan kjøre parallelt.
4. Del 6 (Bayes) + Del 7 (analogi/CBR) — resonneringsbolken, les Del 1/6 hverandre.
5. Del 8 (historie/nyere) — refererer Del 1/2/3; bygges etter dem.
6. Del 9 (eksamenstrening) — bygges av ÉN agent som leser HELE skjelettet (øvingsprøvene speiler alle deler).

**Fagspesifikk verifikasjon (fase 6):**
- **`(verifiser)`-sveip (kritisk):** grep `-i verifiser` — alt som gjelder Mesters delte
  vurdering, midt-/slutteksamensform og vekting er markert og MÅ verifiseres mot
  Mesters opplegg/pensumliste når det foreligger (analysens hovedbegrensning).
- **Æra-sjekk:** verifiser at GOMS/NGOMSL/KLM-tid, MHP-tidsberegning, BCI/EEG og
  ASR/N-gram forekommer **kun** som historiske noter (kap. 8.2 / 6.3) — aldri som egne
  regne-`exercise`. Grep etter «GOMS», «KLM», «utførselstid», «windowing», «Viterbi»
  utenfor de historiske collapsible-blokkene = avvik.
- **Regnemodul-etterregning:** etterregn ALLE fuzzy-inferenser (fuzzifiser→evaluer→
  aggreger→defuzzifiser), backprop-iterasjoner (inkl. θ) og Bayes-oppdateringer i
  example/exercise/prøver — verifiser at mellomregningen stemmer og at θ oppdateres.
- **Sant/usant-konsistens:** hvert SU-utsagn i boka har en korrekt fasit + kort
  begrunnelse; sjekk mot feilkatalogen FK1–FK15 at «usanne» utsagn faktisk er usanne.
- **Forankringssjekk:** navngitte forfattere/verk (Newell & Simon, Vernon, Gentner,
  Forbus, Kolodner, Schank, Aamodt/Creek, Chong/CLARION, Endsley, DARPA XAI, Searle,
  Rosenblatt, Mamdani, Sugeno, Zadeh) er reelle og korrekt attribuert — ingen
  oppdiktede referanser.
- **Kvoteinvarians:** definition-telling per kapittel før/etter fase 6 = uendret;
  kvotesummen (658/676) er fasit fra §5.
- **Notasjonskonsistens:** `µ`, `θ`, `α`, `δ`, `P(H|X)`, COG-formelen, Soar-preferanse-
  syntaks (`^operator <o> +`) er identiske på tvers av agentgrenser (Del 3/4/5/6).

**Sentral wiring (fase 5):** `sectionNames` fra §2-tabellen (obligatorisk);
prøvekapitler `tdt4137-<del>-prove`, chapterNumber `<del>.P`, etter hver temadel 1–8;
navigasjon under NTNU i `institusjoner.ts` med visningsnavn «TDT4137 Kognitive
systemer».

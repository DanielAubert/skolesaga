# Bokskjelett: SØK1000 Innføring i samfunnsøkonomi — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (≈29 oppgavesett V2010–V2024, 10 lesbare sensorveiledninger
> V2015–V2024). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Emnet er
> lavmatematisk (grafisk/verbalt) og har et markert **drøftingselement** (den
> verbale mekanismeforklaringen og rådgiver-/anbefalingssjangeren som avslutter
> flere oppgaver); for det ene sjangerkapitlet som drilles spesifikt (7.2) lånes
> struktur fra `DNA-drofting.md` (oppskrift → gjennomskrevet besvarelse →
> momentliste-oppgaver), dokumentert der. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre (egne tall, egne kontekster),
> aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1000` |
| Tittel | **SØK1000 Innføring i samfunnsøkonomi** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (grafisk/verbalt, lavmatematisk modellfag) med markert drøftingselement (mekanismeforklaring + rådgiver-sjanger) |
| Antall kapitler | **34** (1 eksamenskart + 2 grunnverktøy + 8 mikro-marked/velferd + 4 mikro utvidet + 7 makro-Keynes + 4 makro utvidet + 3 handelsteori + 5 eksamenstrening (begrepsdrill + rådgiver-sjanger + 3 øvingseksamener)) |
| Estimert totaltid | **≈ 2 340 min ≈ 39 timer** |
| Quiz totalt | **620** (krav ≥500) |
| Flashcards totalt | **630** (krav ≥500) |

**Pitch (ett avsnitt):** SØK1000 er NTNUs **brede innføringsemne** og det eneste
i denne serien som prøver **både mikro og makro i samme eksamen**. I femten år
har hver eneste eksamen (5 timer, 15 studiepoeng) hatt **minst én mikro-blokk og
minst én makro-blokk** — det er emnets ufravikelige regel. Boka er derfor bygget
som **to jevnstore søyler** som får omtrent like mye plass: (I) en **mikro-søyle**
om frikonkurransemarkedet, samfunnsøkonomisk overskudd (KO/PO/SO), avgift,
eksternalitet, monopol og elastisitet; og (II) en **makro-søyle** om Keynes-
modellen med multiplikator, finanspolitikk, arbeidsledighet og penger — pluss en
**tredje søyle** som er SØK1000s signatur og som ingen av nabo-emnene har:
**handelsteori** (komparative fortrinn, PMK/KMK) og **toll/handelspolitikk**
(velferdstrekantene). Under alt ligger et lite **grunnverktøy** (alternativkostnad,
marginaltenkning, lineære likningssystemer, prosentregning) — det matematiske
nivået er bevisst lavt. Boka driller de fem ferdighetene som avgjør karakteren:
**frikonkurranse + KO/PO/SO** med forutsetningene brukt aktivt til å begrunne
velferdsmaksimering, **avgift** med fordeling via elastisitet og dødvektstap
(fiskal vs. korrigerende), **Keynes-modellen** satt opp, determinert, løst
grafisk *og* analytisk med multiplikatoren forklart som ringvirkninger,
**komparative fortrinn** via alternativkostnad med PMK/KMK, og **toll** med de to
velferdstrekantene b og d. Sensor honorerer **mekanismen bak resultatet** mer enn
tallet selv, og krever nesten alltid **figur OG verbal forklaring** som én
leveranse.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK1000 er
**innføringssekvensens start** ved NTNU og er bredt, ikke dypt. Det skal gi et
fungerende grep om *begge* halvdeler og eksplisitt **peke framover** mot de
spesialiserte emnene der hvert tema fordypes — aldri gjenta deres dybde.
Konkret (se §7 for full tabell):

- **Formell konsument-/produsentteori** (Lagrange-nyttemaks, indifferenskurve/MSB,
  etterspørsel fra Cobb-Douglas, substitusjons-/inntektseffekt, isokvant/TSB,
  kostnadskurvefamilien MK/TGK/VGK/FGK, nedlegging med sunk cost) er **SOK1002s**
  domene — SØK1000 bygger det **ikke** ut. SØK1000 gjør *markedsanalyse*
  (tilbud = etterspørsel, velferd), ikke *optimeringsteori*. Der de møtes
  (marginalkostnad, tilbudskurve, elastisitet) kryssrefereres SOK1002.
- **Monopol- og markedsmakt-teori i formell/algebraisk form, oligopol/spillteori
  (Cournot/Nash), Pigou-avgift og fellesgoder i dybden, samfunnsøkonomisk
  overskudd som formelt apparat** hører til **SØK1011** (Markeder og markedssvikt).
  SØK1000 dekker monopol og eksternalitet **grafisk/verbalt på innføringsnivå**
  (MR = MC, effektivitetstap; SMC over MC, korrigerende avgift) og lenker til
  SØK1011 for videre dybde.
- **IS-RR-PK-apparatet, renteregel, detaljert Phillips-mekanisme, symbolsk
  komparativ statikk** hører til **ECON1310-nivå** makro. SØK1000 **stopper ved
  den enkle Keynes-modellen** (åpen og lukket) med multiplikator og enkel
  finans-/pengepolitikk. Phillips-kurven dekkes kvalitativt.
- **Ren matematikk** (derivasjon utover å tolke marginalstørrelser grafisk,
  finansmatematikk) hører til **SOK1001**. SØK1000 bruker kun å løse et lite
  lineært likningssystem, regne alternativkostnader/brøker og prosentvis endring.

Overlappet med UiOs **ECON1210** (mikro) og **ECON1310** (makro) er derimot
tematisk stort: mikro-halvdelen er «ECON1210-lite», makro-halvdelen er
«ECON1310-lite». Der forkunnskap eller videre dybde trengs, lenkes disse (og
SOK1002/SØK1011) fra Forkunnskaper-blokkene.

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Marked/mikro:** kvantum $Q$, pris $P$; etterspørsel $D$ = marginal
  betalingsvillighet **MWP** (marginal willingness to pay); tilbud $S$ =
  marginalkostnad **MC**; **konsumentoverskudd KO** (areal under $D$ over pris),
  **produsentoverskudd PO** (areal over $S$ under pris), **samfunnsøkonomisk
  overskudd SO** = KO + PO. Grensekostnad **MC**, gjennomsnittskostnad **AC**,
  grenseinntekt **MR**. Ved eksternaliteter: samfunnets marginalkostnad **SMC**
  og samfunnets marginale betalingsvillighet **SMWP**. Velferdsmaksimering:
  **SMWP = SMC** (i markedet uten eksternalitet: MWP = MC).
- **Makro/Keynes (åpen økonomi med offentlig sektor):**
  - $Y = C + I + G + X - Z$ (generalbudsjettbetingelsen / «økosirken»)
  - $C = A + c(Y - NT)$, med $A > 0$, $0 < c < 1$ (autonomt konsum + marginal
    konsumtilbøyelighet $c$)
  - $NT = tY$, $0 < t < 1$ (nettoskatter; endogen skatt)
  - $Z = zY$, $0 < z < 1$ (import; marginal importtilbøyelighet $z$)
  - $NX = X - Z$ (handelsbalansen / nettoeksport)
  - Løsning: $Y^* = \frac{1}{1 - c(1-t) + z}\,(A + I + G + X)$; multiplikator
    $= \frac{1}{1 - c(1-t) + z} > 1$
  - Lukket variant uten offentlig sektor: $Y = C + I$, $C = A + cY$ →
    multiplikator $\frac{1}{1-c}$.
  - Endogent: $Y, C, NT, Z$ (og $NX$). Eksogent: $I, G, X$ + parametrene
    $A, c, t, z$.
- **Handelsteori:** to land, to varer, arbeidskraft som eneste faktor;
  arbeidskraftbehov per enhet; **alternativkostnad** = helning på PMK;
  **PMK** (produksjonsmulighetskurve), **KMK** (konsummulighetskurve);
  verdensmarkedspris / relativt prisforhold. **Toll:** velferdsarealene
  $a$ (PO-økning), $c$ (tollinntekt), $b + d$ (netto samfunnsøkonomisk tap).

**Kritisk metoderegel (gjelder HELE boka):** SØK1000 er et grafisk/verbalt fag.
Tre faste sensorkrav gjelder overalt: **(a) figur OG verbal forklaring** er én
leveranse — ren tekst uten figur, eller en figur uten forklaring av mekanismen,
er halvt svar (analysens §4.1); **(b) bruk forutsetningene/mekanismen aktivt** —
FK-forutsetningene skal *brukes* til å begrunne likevekt og velferdsmaksimering
(ikke bare ramses opp), multiplikatoren skal *forklares* som ringvirkninger (ikke
bare skrives), alternativkostnaden skal *kobles* til komparativt fortrinn;
**(c) definisjonene forutsettes ikke kjent** — KO/PO/SO, MWP, MR, multiplikator,
alternativkostnad, arbeidsledighetstypene defineres eksplisitt. **Mekanismen bak
resultatet teller mer enn selve tallet.** **Kode-A-nyansen:** fra 2020 er alle
hjelpemidler tillatt, og sensor sier da eksplisitt at detaljert utledning av
modellen ikke kreves — det er **de økonomiske mekanismene og resonnementene** som
gir uttelling. Boka viser Keynes-modellen **både grafisk og analytisk**, og
understreker at metodefrihet respekteres (grafisk *eller* analytisk løsning gir
samme uttelling).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): grunnverktøyet i bunn,
deretter de to store søylene (mikro og makro) og signatursøylen (handel), til
slutt eksamenstreningen. Frekvensen styrer *omfanget* — mikro- og makro-søylene
er begge ~100 %-gjengangere (hver eksamen har minst én blokk fra hver), og
handelsteori har vært på hvert av de tre siste settene. De tre får derfor hver
sin fulle del med drillkapittel.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn den todelte mikro/makro-malen og avgrenser mot SOK1002/SØK1011/ECON1310/SOK1001. |
| 1 | Økonomisk tenkning og grunnverktøy | 2 | Alternativkostnad, marginaltenkning, lineære likningssystemer og prosentregning forutsettes aktivt i begge søyler (Keynes-løsning, komparative fortrinn, inflasjonsregning). Lavmatematisk, men metoden må sitte → eget lite fundament. |
| 2 | Mikro I: frikonkurransemarkedet, velferd og avgift | 8 | Frikonkurranse + KO/PO/SO ~85 % (ryggraden), velferdsmaksimering ~75 %, avgift ~65 % — grunnlaget hele mikro-oppgaven bygger på. Nivå 1 «perfekt» → 7 teorikapitler + drillkapittel. |
| 3 | Mikro II: monopol, eksternaliteter, elastisitet og markedsformer | 4 | Monopol ~60 %, eksternalitet/Pigou ~45 %, elastisitet ~45 %, markedsmakt/markedsformer ~40 % — roterer inn som del av mikro-blokken. Nivå 2 «kunne» → 4 kompakte kapitler (grafisk/verbalt; dybden er SØK1011). |
| 4 | Makro I: Keynes-modellen, multiplikator og finanspolitikk | 7 | Keynes-modellen ~75 % (makro-motoren), multiplikator ~70 %, finanspolitikk + handelsbalanse ~70 % (intern/ekstern balanse). Nivå 1 «perfekt» → 6 teorikapitler + drillkapittel. |
| 5 | Makro II: arbeidsledighet, penger, priser og Phillips | 4 | Arbeidsledighet ~55 %, pengepolitikk ~30 %, nasjonalregnskap/KPI ~20 %, Phillips ~25 % — mindre deloppgaver som differensierer karakteren. Nivå 2–3 «kunne/kjenne» → 4 kompakte kapitler. |
| 6 | Handelsteori og handelspolitikk (SØK1000-signatur) | 3 | Komparative fortrinn ~50 %, toll ~45 % — nesten unikt for SØK1000, i sterk vekst (V2022, H2023, V2024). Nivå 1 «perfekt» → 2 teorikapitler + drillkapittel. |
| 7 | Eksamenstrening | 5 | Begrepsdrill (~15 gjengangere) + sjangerkapittel for rådgiver-/anbefalingssjangeren (drøfting) + 3 komplette øvingseksamener som speiler malene (50/50, 25/25/50, 30/10/15/45). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger de tre
   drillkapitlene (2.8 mikro-markedsoppgaven, 4.7 Keynes-oppgaven, 6.3
   handelsoppgaven) inne i sine egne søyler, fordi hver eksamen ER kombinasjonen
   av disse tre sjangrene og de må drilles umiddelbart etter teorien. Del 7
   beholder begrepsdrillen, rådgiver-sjangerkapitlet og de tre øvingseksamenene.
2. DNA-en har «Del 1..N temadeler» generisk. Her er strukturen bevisst
   **todelt (mikro-søyle vs. makro-søyle) med en tredje signatursøyle (handel)**
   og et lavmatematisk grunnverktøy i bunn — dette speiler den ufravikelige
   mikro+makro-malen direkte og er bokas viktigste designgrep (jf. analysens §7).
3. SØK1000 er lavmatematisk. Grunnverktøyet (Del 1) er derfor lite (2 kapitler)
   og handler om økonomisk *tenkning* (alternativkostnad, marginalprinsipp) +
   det minimale regneapparatet (lineære likningssystemer, prosentregning), ikke
   om kalkulus. Metode-/verktøyprøvene i Del 1 er tilsvarende korte.
4. Handelsteori (Del 6) får en egen del til tross for at den kunne ligget under
   makro — fordi den er SØK1000-signatur, i sterk vekst, og metodisk selvstendig
   (alternativkostnad + PMK/KMK + tolltrekanter, ikke Keynes-apparatet).

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** frikonkurranse + velferd (KO/PO/SO), **B** avgift (fordeling + dødvektstap),
**C** eksternalitet + korrigerende avgift, **D** monopol, **E** markedsmakt/
markedsformer, **F** elastisitet, **G** komparative/absolutte fortrinn (PMK/KMK),
**H** toll/handelspolitikk, **I** Keynes-modellen med multiplikator, **J**
finanspolitikk + handelsbalanse, **K** arbeidsledighet (typer + virkemiddel),
**L** pengepolitikk/pengemarkedet, **M** nasjonalregnskap/prisindekser, **N**
rådgiver-/anbefalingssjanger. Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK1000

- **id:** `sok1000-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den ufravikelige mikro+makro-malen, temafrekvensene i begge spor, sjangerkatalogen A–N og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle ≈29 sett + 10 sensorveiledninger. Skal gjengi: (i) **formen**: 5 timers skriftlig skoleeksamen (09:00–14:00), karakter A–F, 15 studiepoeng; fra ca. 2019/2020 digital i Inspera (håndtegnede figurer lastes opp, 15–30 min ekstra); **hjelpemidler skiftet markant** — kode D (kun kalkulator) t.o.m. H2019, **kode A (alle hjelpemidler)** fra korona 2020 og framover, med eksplisitt KI-forbud fra V2024; faget er lavmatematisk, så kalkulatoren er nesten uten betydning; (ii) **den ufravikelige malen i 15 år**: hver eksamen prøver **både mikro og makro** — vanligst to-oppgavemalen 50/50 (én mikro + én makro), men også tre-oppgavevarianter (35/25/40, 25/25/50) og fire-oppgavevarianten V2024 (30/10/15/45); rekkefølge og vekt roterer, men dobbeltheten er konstant; (iii) **temafrekvens-tabellene** (mikro- og makro-spor hver for seg, fra analysen §2A/§2B): mikro — frikonkurranse + KO/PO/SO ~85 %, velferdsmaksimering (SMWP=SMC) ~75 %, avgift ~65 %, monopol ~60 %, eksternalitet/Pigou ~45 %, elastisitet ~45 %, markedsmakt/markedsformer ~40 %, tilbudskurve ~40 %, regulering/minstepris ~25 %, prisdiskriminering ~20 %; makro — Keynes-modellen med multiplikator ~75 %, multiplikatoreffekten ~70 %, finanspolitikk ~70 %, handelsbalanse/intern-ekstern balanse ~55 %, komparative fortrinn ~50 %, toll ~45 %, arbeidsledighet ~55 %, pengepolitikk ~30 %, Phillips ~25 %, nasjonalregnskap ~20 %; (iv) at oppgavene alltid pakkes i **aktualitet** (klima/CO₂-avgift på rødt kjøtt eller bensin, sukkeravgift, Vinmonopolet, korona-ledighet, strømpriser, Nortura/pølsemarked) men at modellen bak alltid er standarden; (v) **sensorens metaregler** (fra analysen §4): figur + verbal forklaring er én leveranse; forutsetningene/mekanismen skal *brukes*, ikke bare ramses opp; elastisitet skal *inn* der fordeling drøftes; multiplikatoren skal *forklares*; alternativkostnad er nøkkelen i handelsteori; kode-A-nyansen (mekanismen, ikke utledningen, teller fra 2020); definisjonene forutsettes ikke kjent; svar poengtert; (vi) **karakterskillene**: bunn (E–D) = riktig figur med riktige kurver + korrekt likevekt + korrekt Keynes-oppsett + hovedkonklusjon (SO maksimeres i FK, monopol gir tap, handel lønner seg, ekspansiv finanspolitikk øker BNP); midt (C) = komplett KO/PO/SO korrekt tegnet og begrunnet, korrekt utledet multiplikator, korrekt alternativkostnad og komparativt fortrinn, korrekt dødvektstap; topp (A/B) = **bruker forutsetningene aktivt**, kobler elastisitet til fordeling, ser **målkonflikten** intern/ekstern balanse, skiller fiskale fra korrigerende avgifter, ser importen som automatisk stabilisator, drøfter proteksjonismens gyldige argumenter mot frihandelsgevinsten, god disposisjon.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med typisk plassering: **mikro-blokken** bygges av A → B/C/D (+ E/F som innpakning eller egen deloppgave); **makro-blokken** bygges av I → J (+ K/L/M som mindre deloppgaver) **eller** av G → H (handelsteori-blokken); rådgiver-sjangeren (N) kan avslutte enten blokk. **Prognose for neste eksamen** (fra analysen §7): overveldende sannsynlig én mikro-blokk *og* én makro-blokk (2–4 oppgaver, 5 timer, kode A): mikro-blokk (størst vekt) = frikonkurransemarked → KO/PO/SO + velferdsmaksimering → et sjokk/inngrep (avgift, kostnadsøkning, eksternalitet eller monopol) → fordeling via elastisitet + dødvektstap → drøft/anbefal virkemiddel; makro-blokk = enten Keynes-modell (sett opp → determiner → løs grafisk+analytisk → multiplikator → finanspolitikk → handelsbalanse) **eller** handelsteori (komparative fortrinn med tallregning + PMK/KMK + toll/frihandelsdrøfting — het kandidat etter tre sett på rad); mulige mindre deloppgaver: arbeidsledighetstyper, nasjonalregnskap/inflasjon, pengepolitikk eller Phillips. Avslutt med **avgrensningen**: hva som IKKE er pensum/dybde her (SOK1002s formelle konsument-/produsentteori; SØK1011s formelle markedssvikt/oligopol; ECON1310-nivå IS-RR-PK; SOK1001s rene matte) — med kryssbok-lenker dit forkunnskap eller videre dybde trengs — og **leseplanen**: Del 1 er lett verktøy man må ha klart; Del 2 og Del 4 er «må perfekt» (de to søylene); Del 6 (handel) er «må perfekt» og i sterk vekst; Del 3 og Del 5 er «kunne/kjenne»; Del 7 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt at hver eksamen har minst én mikro- og én makro-blokk og 300 minutter — sett opp et tidsbudsjett» og «hvilke fem ferdigheter avgjør karakteren, og i hvilket kapittel drilles de?».
- **Typiske feil:** Metafeilene: beherske bare den ene halvdelen (kan ikke bestå godt — hver eksamen prøver begge); levere figur uten forklaring eller forklaring uten figur; pugge SOK1002-/SØK1011-/ECON1310-dybde som ikke er SØK1000-pensum; tro at kode-A betyr at modellen må utledes i detalj (det er mekanismen som teller fra 2020).
- **Quiz: 14 · Flashcards: 12** (eksamensform, frekvenser i begge spor, sjangerkatalog A–N, metaregler, avgrensning)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Økonomisk tenkning og grunnverktøy *(prioritet: forkunnskap — må sitte)*

> **Lavmatematisk-skille:** SØK1000 krever kun å løse et lite lineært
> likningssystem (Keynes-løsning), regne alternativkostnader og enkle brøker, og
> beregne prosentvis endring (inflasjon). Ingen Lagrange, ingen derivasjon utover
> å *tolke* marginalstørrelser grafisk. Hvert kapittel i Del 1 skal markere: dette
> er alt regneapparatet du trenger — det er den økonomiske *tolkningen* eksamen
> tester, ikke matematikken. Trenger studenten kalkulus, ligger det i
> [SOK1001 Matematikk for økonomer] (kryssbok-lenke, om boka finnes; ellers nevn).

#### Kapittel 1.1: Økonomisk tenkning: knapphet, alternativkostnad og marginalprinsippet

- **id:** `sok1000-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** teori (verktøy)
- **description:** De økonomiske grunnideene hele faget hviler på: knapphet og valg, alternativkostnad, marginaltenkning (grense- vs. gjennomsnittsstørrelse) og modeller som forenkling.
- **Eksamensbelegg:** Ikke et eget eksamenstema, men **forutsatt overalt**: alternativkostnad er selve nøkkelen i handelsteori (kap. 6.1), marginaltenkning ligger under MWP=MC-likevekten (kap. 2.2), MR=MC (kap. 3.1) og multiplikatorens ringvirkninger (kap. 4.4). Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** **Knapphet og valg:** ressurser er knappe → ethvert valg har en kostnad. **Alternativkostnad** = verdien av det beste alternativet man gir opp (skal defineres presist og skilles fra *utlegg*/regnskapsmessig kostnad — dette er kilden til feilene i handelsteori). **Marginalprinsippet:** økonomiske aktører tilpasser der marginal nytte/inntekt = marginal kostnad; skillet **marginal** (én ekstra enhet) vs. **gjennomsnitt** vs. **total** — og hvorfor beslutninger tas på marginen. **Positiv vs. normativ** økonomi (er/bør). **Modeller som forenkling** (ceteris paribus). Legg grunnlaget for at «MWP = MC», «MR = MC» og «lavest alternativkostnad = komparativt fortrinn» alle er samme marginale tankegang.
- **Oppgavesjangre:** Innøvingsoppgaver (byggekloss for A, D, G). Mønstereksempel: «En bonde kan bruke et jordstykke til poteter eller korn. Forklar hva alternativkostnaden ved å dyrke poteter er, og hvorfor den ikke er det samme som utgiftene til såpoteter.»
- **Typiske feil:** Forveksle alternativkostnad med utlegg/regnskapskostnad; blande marginal- og gjennomsnittsstørrelse; blande positiv og normativ analyse; tro at «kostnad» alltid betyr penger.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Regneverktøyet: lineære likningssystemer, brøk og prosentregning

- **id:** `sok1000-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-1-1`
- **Kapitteltype:** teori (verktøy)
- **description:** Det minimale regneapparatet SØK1000 faktisk krever: løse to likninger med to ukjente (grunnlaget for Keynes-løsningen), regne alternativkostnader/brøker, og beregne prosentvis endring (grunnlaget for inflasjon og elastisitet).
- **Eksamensbelegg:** Ikke et eget eksamenstema, men **forutsatt i hver regneoppgave**: Keynes-modellen løses ved innsetting i et lineært system (kap. 4.3), alternativkostnader er brøker (kap. 6.1), inflasjon og elastisitet er prosentvise endringer (kap. 5.3, 3.3). Fasitene regner dette uten kommentar. Prioritet: **forkunnskap** (må sitte).
- **Innholdskontrakt:** **Lineære likningssystemer:** løse to likninger med to ukjente ved innsetting/eliminasjon — vist på et Keynes-lite eksempel ($Y = C + I$, $C = A + cY$ → $Y = (A+I)/(1-c)$), slik at studenten kjenner igjen mønsteret. **Rette linjer:** stigningstall og skjæringspunkt (grunnlaget for D-, S-, budsjett- og AD-kurvene). **Brøk og forhold** (alternativkostnad som forhold mellom to størrelser). **Prosentregning:** prosentvis endring $\frac{\text{ny}-\text{gammel}}{\text{gammel}}\cdot 100\%$ (grunnlaget for inflasjon fra en KPI-tabell og for elastisitet), og forskjellen på prosentpoeng og prosent. **Areal av trekant og rektangel** (grunnlaget for KO/PO/SO, dødvektstap og tolltrekanter). Merk: alt dette er lavterskel; poenget er å frigjøre kapasitet til den økonomiske tolkningen.
- **Oppgavesjangre:** Byggekloss for I, M, F, G, A/B (arealregning). Mønstereksempel: «Løs likningssystemet $Y = C + 100$ og $C = 50 + 0{,}8Y$ for $Y$ og $C$, og forklar hva svaret betyr.»
- **Typiske feil:** Regnefeil i innsetting/eliminasjon; forveksle prosent og prosentpoeng; regne prosentvis endring fra feil basisår; feil arealformel (halv grunnlinje × høyde for trekant).
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 1:** 4 prøver (1.A alternativkostnad + marginal vs. gjennomsnitt, begreps- og tolkningsoppgaver; 1.B løse lineære likningssystemer på Keynes-lite oppsett; 1.C prosentregning — inflasjon og prosentvis endring, prosentpoeng vs. prosent; 1.D arealregning — trekant/rektangel som forberedelse til KO/PO/SO og tolltrekanter — korte verktøyprøver som ender på anvendelse).

---

### Del 2 — Mikro I: frikonkurransemarkedet, velferd og avgift *(prioritet: PERFEKT — mikro-blokkens ryggrad)*

#### Kapittel 2.1: Etterspørsel, tilbud og markedslikevekt

- **id:** `sok1000-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-1-1`
- **Kapitteltype:** teori
- **description:** Etterspørselskurven som marginal betalingsvillighet (MWP), tilbudskurven som marginalkostnad (MC), og hvorfor markedet «finner» likevekten der D = S — med FK-forutsetningene brukt aktivt.
- **Eksamensbelegg:** ~85 % frekvens — ryggraden i mikro-halvdelen og grunnlaget hele mikro-oppgaven bygger videre på (avgift, eksternalitet, monopol). Sensor honorerer at forutsetningene *brukes* til å begrunne likevekten. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Etterspørselskurven $D$** tolkes som **marginal betalingsvillighet (MWP)**: hvor mye den marginale kjøperen er villig til å betale for én enhet til; fallende (avtakende MWP). **Tilbudskurven $S$** tolkes som **marginalkostnad (MC)**: stigende. **Likevekt** der $D = S$ (MWP = MC): definer og forklar. **FK-forutsetningene** (mange små aktører, homogene goder, full informasjon, fri etablering/avvikling) — og **bruk dem aktivt** til å forklare *hvorfor* prisen presses mot likevekt: ved overskuddstilbud ($P$ over likevekt) presser konkurrerende selgere prisen ned; ved underskudd presses den opp. Pristakeratferd: hver aktør er så liten at den tar prisen som gitt. Komparativ statikk: skift i $D$ eller $S$ (f.eks. kostnadsøkning skifter $S$ opp) → ny likevekt, forklart i ord. Figurkrav: navngi akser ($Q$, $P$), $D$- og $S$-kurvene, likevektspunktet.
- **Oppgavesjangre:** A-fundament. Mønstereksempel: «Ta utgangspunkt i et frikonkurransemarked. Forklar med figur hvorfor markedet er i likevekt der tilbud møter etterspørsel, og bruk forutsetningene om frikonkurranse til å begrunne at prisen presses mot likevekten.»
- **Typiske feil:** Ramse opp forutsetningene uten å bruke dem (feilkatalog §5.1); glemme at $D$ = MWP og $S$ = MC (tolkningen som gir velferdsargumentet); uklar figur uten navngitte kurver/likevekt (§5.9); forveksle bevegelse langs kurven med skift i kurven.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Konsument-, produsent- og samfunnsøkonomisk overskudd (KO/PO/SO)

- **id:** `sok1000-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-2-1`
- **Kapitteltype:** teori
- **description:** Velferdsmålene som areal: KO (under D over pris), PO (over S under pris), SO = KO + PO — og hvorfor frikonkurranselikevekten maksimerer SO.
- **Eksamensbelegg:** ~85 % frekvens; areal-argumentet er selve grunnlaget for hele mikro-halvdelen. Velferdsmaksimering (SMWP = SMC) ~75 %, standard påstand som skal *begrunnes*. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Konsumentoverskudd KO** = differansen mellom betalingsvillighet og pris, summert over alle enheter = **areal under D-kurven over prislinjen**. **Produsentoverskudd PO** = differansen mellom pris og marginalkostnad = **areal over S-kurven under prislinjen**. **Samfunnsøkonomisk overskudd SO = KO + PO** = arealet mellom D og S opp til omsatt kvantum. **Velferdsmaksimering:** i FK-likevekten er SO maksimert fordi $MWP = MC$; forklar mekanismen: ved lavere kvantum ($Q < Q_0$) er $MWP > MC$ (en enhet til øker SO), ved høyere ($Q > Q_0$) er $MWP < MC$ (en enhet mindre øker SO) — bare i likevekten er det ingen gevinst igjen. Figurkrav: navngi KO, PO, og likevektskvantum/-pris. Presiser at velferdsmaksimering handler om *totalt* overskudd, ikke fordeling (bro til rådgiver-sjangeren N og til fordelingsdiskusjonen ved avgift).
- **Oppgavesjangre:** A. Mønstereksempel: «Definer konsument-, produsent- og samfunnsøkonomisk overskudd som areal i en figur, og begrunn hvorfor det samfunnsøkonomiske overskuddet er størst mulig i frikonkurranselikevekten.»
- **Typiske feil:** Bytte om KO og PO (arealene); definere SO uten å *begrunne* maksimeringen via MWP=MC (§5.1); glemme at det er marginalargumentet ($Q$ under → MWP>MC) som bærer; blande velferd (effektivitet) med fordeling.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.3: Bedriftens tilbudskurve og markedets tilbud

- **id:** `sok1000-2-3` · **number:** 2.3 · **estimatedMinutes:** 40 · **prerequisites:** `sok1000-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor pristakerbedriftens kortsiktige tilbudskurve er MC over AC-minimum, og hvordan bedriftenes tilbud summeres horisontalt til markedets tilbudskurve.
- **Eksamensbelegg:** ~40 % frekvens; forklarer *hvorfor* S-kurven ser ut som den gjør og kobler mikro-markedet til bedriftsnivået. Prioritet: **kunne** (nivå 2, del av perfekt-søylen). SOK1002 fordyper kostnadskurvefamilien — her holdes det på innføringsnivå.
- **Innholdskontrakt:** Pristakerbedriften tilpasser der **pris = marginalkostnad** ($P = MC$) så lenge den dekker de variable kostnadene; dens kortsiktige **tilbudskurve = MC-kurven over minimum av gjennomsnittskostnaden (AC-min)** (under AC-min lønner det seg ikke å produsere på kort sikt). **Horisontal summering:** legg sammen alle bedrifters tilbud ved hver pris → markedets tilbudskurve $S$ (stigende). Koble til likevekten i kap. 2.1 og PO i kap. 2.2. Merk: den formelle kostnadskurvefamilien (MK/TGK/VGK/FGK) og nedleggingsbetingelsen med sunk cost hører til [SOK1002] (kryssbok-lenke) — her holdes det grafisk/verbalt. Nevn kort AC, MC og at MC skjærer AC i AC-min (uten formell utledning).
- **Oppgavesjangre:** A-støtte. Mønstereksempel: «Forklar hvorfor en pristakerbedrifts tilbudskurve på kort sikt er lik marginalkostnadskurven over gjennomsnittskostnadens minimum, og hvordan vi kommer fram til markedets samlede tilbudskurve.»
- **Typiske feil:** Forveksle marginalkostnad og gjennomsnittskostnad; glemme AC-min-grensen; tro at markedstilbudet er summen *vertikalt* i stedet for horisontalt; dra inn sunk-cost-nedleggingsnyansen som hører til SOK1002.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.4: Avgift i markedet: pris, kvantum og fordeling

- **id:** `sok1000-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-2-2`, `sok1000-2-3`
- **Kapitteltype:** teori
- **description:** Hvordan en stykkavgift skifter tilbudskurven, hvordan ny likevekt gir høyere konsumentpris og lavere produsentpris, og hvordan byrden fordeles mellom kjøper og selger via elastisitet.
- **Eksamensbelegg:** ~65 % frekvens — den hyppigste «inngreps»-sjangeren i mikro-blokken. Sensor krever at **elastisiteten trekkes inn** når fordelingen forklares (ellers «vesentlig mangel»). Prioritet: **perfekt**.
- **Innholdskontrakt:** En **stykkavgift** (fast beløp per enhet) skifter tilbudskurven **opp parallelt** med avgiften. Ny likevekt: **høyere konsumentpris, lavere produsentpris, lavere kvantum**. **Fordelingen** (skatteinsidens) avhenger av *relativ elastisitet*: jo mer uelastisk etterspørselen er relativt til tilbudet, jo større andel bæres av konsumentene (helt uelastisk $D$ → hele avgiften på konsument; helt elastisk $D$ → hele på produsent). **Statens inntekt** = avgift × nytt kvantum (rektangel). Koble til kostnadsøkning: en generell kostnadsøkning virker som en avgift på tilbudssiden — samme fordelingslogikk (sensor belønner å se denne overføringen). Figurkrav: navngi opprinnelig og ny likevekt, konsument- og produsentpris, avgiftsbeløpet og statens inntektsrektangel. (Dødvektstapet og fiskal/korrigerende-skillet tas i 2.5.)
- **Oppgavesjangre:** B. Mønstereksempel: «Staten legger en avgift per enhet på et gode. Vis grafisk hvordan pris til konsument, pris til produsent og omsatt kvantum endres, og forklar — via etterspørselselastisiteten — hvordan avgiftsbyrden fordeles mellom kjøpere og selgere.»
- **Typiske feil:** Forklare fordelingen uten å nevne relativ elastisitet (feilkatalog §5.2, «vesentlig mangel»); skifte D i stedet for S; glemme at konsument- og produsentpris skiller seg med avgiftsbeløpet; regne statens inntekt på gammelt kvantum.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.5: Dødvektstap, fiskale og korrigerende avgifter

- **id:** `sok1000-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-2-4`
- **Kapitteltype:** teori
- **description:** Dødvektstapet ved en avgift som velferdstrekant, og det avgjørende skillet mellom fiskale avgifter (gir alltid tap) og korrigerende avgifter (kan øke SO).
- **Eksamensbelegg:** Følger avgiftssjangeren (~65 %) og er en toppkarakter-markør: «gir avgifter alltid effektivitetstap?». Prioritet: **perfekt**.
- **Innholdskontrakt:** **Dødvektstap** = tapet i SO når kvantum presses under det samfunnsøkonomisk optimale = **trekanten mellom D og S over det tapte kvantumet** (der $MWP > MC$ for enhetene som ikke lenger omsettes). **Fiskal avgift** (inntektsformål, ingen eksternalitet): flytter markedet *bort* fra optimum → **gir alltid dødvektstap**. **Korrigerende avgift** (retter opp en eksternalitet — se kap. 3.2): flytter markedet *mot* samfunnsoptimum → kan **øke SO** (fjerner et eksisterende tap). Understrek dette skillet eksplisitt — det er en gjenganger i toppsjiktet og en fast feilkilde. Figurkrav: navngi dødvektstapstrekanten og det tapte kvantumet. Bro til eksternalitet (kap. 3.2) og rådgiver-sjangeren (avgift vs. kvantumsregulering).
- **Oppgavesjangre:** B (velferdsdel). Mønstereksempel: «Gir en avgift alltid et effektivitetstap? Forklar med figur hvordan en fiskal avgift skaper et dødvektstap, og hvorfor en korrigerende avgift på en aktivitet med negative eksterne virkninger kan øke det samfunnsøkonomiske overskuddet i stedet.»
- **Typiske feil:** Anta at «avgifter alltid gir effektivitetstap» (feilkatalog §5.4 — blander fiskal og korrigerende); identifisere feil areal som dødvektstap; regne statens inntekt som et samfunnstap; glemme at dødvektstapet ligger over det *tapte* kvantumet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.6: Prisregulering: maksimalpris, minstepris og kvantumsregulering

- **id:** `sok1000-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `sok1000-2-2`
- **Kapitteltype:** teori
- **description:** Hvordan bindende prisgulv/pristak og kvoteregulering flytter markedet bort fra likevekt og skaper over-/underskudd og effektivitetstap.
- **Eksamensbelegg:** ~25 % frekvens (H2016 minstepris, H2021 kvoteregulering); differensierende deloppgave i mikro-blokken. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **Bindende maksimalpris (pristak)** under likevekt → etterspørsel > tilbud → **underskudd** (rasjonering, kø, svartebørs), lavere omsatt kvantum, effektivitetstap. **Bindende minstepris (prisgulv)** over likevekt → tilbud > etterspørsel → **overskudd** (f.eks. minstepris i landbruk), effektivitetstap. **Kvantumsregulering/kvote** som begrenser omsatt mengde → effektivitetstap ved binding, men kan være riktig virkemiddel ved eksternalitet (bro til CO₂-kvote, kap. 3.2). Understrek at *binding* er poenget (en ikke-bindende regulering har ingen effekt). Figurkrav: navngi over-/underskuddet og effektivitetstapet.
- **Oppgavesjangre:** A/B-variant. Mønstereksempel: «Myndighetene setter en minstepris over likevektsprisen i et marked. Vis grafisk virkningen på omsatt kvantum, forklar hvorfor det oppstår et overskuddstilbud, og illustrer effektivitetstapet.»
- **Typiske feil:** Blande maksimal- og minstepris (retning på over-/underskudd); glemme bindingskravet; ikke identifisere effektivitetstapet; forveksle kvantumsregulering med prisregulering.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.7: Anvendt markedsanalyse: sjokk, skift og aktuelle case

- **id:** `sok1000-2-7` · **number:** 2.7 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-2-5`
- **Kapitteltype:** teori (anvendelse)
- **description:** Å bruke marked + velferd på reelle sjokk (kostnadsøkning, etterspørselsskift) og aktuelle case (klima, mat, energi) — det som pakker inn hver mikro-oppgave.
- **Eksamensbelegg:** Aktualitet er *fast innpakning* i hver mikro-oppgave (strømpriser, matvarer, klima); modellen er standard, casen er ny hvert år. Dette kapitlet gjør studenten trygg på å oversette en «virkelig» historie til D/S-skift. Prioritet: **perfekt** (anvendelse av 2.1–2.5).
- **Innholdskontrakt:** Fast oppskrift for å oversette et sjokk til figur: 1) hvilken kurve skifter (D eller S)? 2) hvilken retning? 3) nytt likevektspunkt (pris/kvantum)? 4) mekanismen i ord; 5) velferdsvirkningen (KO/PO/SO, evt. dødvektstap). Anvendt på gjengangercase: **kostnadsøkning** (våtere somre → dyrere frukt/grønt → $S$ opp), **etterspørselsskift** (mote/inntekt), **strømpriser**, **matvaremarked** (Nortura/pølse). Poeng: at en kostnadsøkning fordeles som en avgift (elastisitet) — den sentrale overføringen sensor belønner. Behold det grafisk/verbalt; ingen ny teori, ren anvendelse.
- **Oppgavesjangre:** A + B (anvendt). Mønstereksempel: «Uvanlig vått vær øker produksjonskostnadene i markedet for grønnsaker. Vis grafisk hvordan pris og omsatt kvantum endres, og forklar via elastisitet hvordan kostnadsøkningen fordeles mellom produsenter og konsumenter.»
- **Typiske feil:** Skifte feil kurve eller feil retning; forveksle bevegelse langs kurven med skift; glemme velferdsvirkningen; ikke koble kostnadsøkningen til avgiftsfordelingen (den premierte overføringen).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 2.8: Drill: mikro-markedsoppgaven

- **id:** `sok1000-2-8` · **number:** 2.8 · **estimatedMinutes:** 85 · **prerequisites:** `sok1000-2-7`, `sok1000-2-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele mikro-blokken: fra et frikonkurransemarked til fullført A-besvarelse med KO/PO/SO, et inngrep (avgift/regulering) og velferdsvurdering.
- **Eksamensbelegg:** Dekker sjangrene A og B samlet — mikro-blokken som utgjør den største enkeltvekten i hvert sett (~40–50 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) tegn frikonkurransemarkedet, tolk $D$=MWP og $S$=MC, forklar likevekt med forutsetningene brukt aktivt; 2) definer og tegn KO/PO/SO, begrunn velferdsmaksimering (MWP=MC); 3) på et inngrep/sjokk (avgift, kostnadsøkning, minstepris/kvote): skift riktig kurve, finn ny likevekt, identifiser statens inntekt og **dødvektstapet**; 4) fordelingen via **elastisitet**; 5) skill fiskal fra korrigerende der relevant; 6) konkluder verbalt (evt. anbefaling, sjanger N). **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling: mekanismen bak likevekten, den aktive bruken av forutsetningene, elastisitet i fordelingen, korrekt dødvektstap). **10–14 oppgaver** på eksamensnivå som roterer case (klima/CO₂, matvarer, energi, Vinmonopol-lignende) × inngrep (avgift / kostnadsøkning / minstepris / kvote), alle med nyskrevne tall og med `solution` + `hints`.
- **Oppgavesjangre:** A, B (+ N). Mønstereksempel (full kjede): «(a) Tegn frikonkurransemarkedet for et gode og forklar likevekten med forutsetningene. (b) Definer KO/PO/SO og begrunn velferdsmaksimeringen. (c) Staten legger en avgift per enhet — vis virkningen på pris, kvantum, statens inntekt og dødvektstap, og forklar fordelingen via elastisitet. (d) Anbefal med begrunnelse om avgiften bør innføres.»
- **Typiske feil:** Hele mikro-repertoaret fra §5: forutsetninger uten aktiv bruk (§5.1), utelatt elastisitet i fordelingen (§5.2), fiskal/korrigerende-forveksling (§5.4), feil dødvektstap (§5.10), uklare figurer (§5.9).
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A frikonkurranse + KO/PO/SO + velferdsmaksimering med forutsetningene brukt aktivt, sjanger A; 2.B avgift — pris/kvantum/fordeling via elastisitet + dødvektstap + fiskal/korrigerende, sjanger B; 2.C prisregulering/kvantumsregulering + anvendt sjokk, sjanger A/B-variant; 2.D full mikro-markedsoppgave på eksamensnivå med inngrep og velferdsvurdering, sjanger A+B+N).

---

### Del 3 — Mikro II: monopol, eksternaliteter, elastisitet og markedsformer *(prioritet: KUNNE — roterer inn i mikro-blokken)*

#### Kapittel 3.1: Monopol: tilpasning og effektivitetstap

- **id:** `sok1000-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-2-2`
- **Kapitteltype:** teori
- **description:** Monopolistens grenseinntekt (MR) og MR=MC-tilpasning, hvorfor P > MC, og effektivitetstapet sammenlignet med frikonkurranse.
- **Eksamensbelegg:** ~60 % frekvens; grenseinntekten (MR) skal forklares grundig, og effektivitetstapet illustreres. Prioritet: **kunne** (nivå 2, høyfrekvent). Formell/algebraisk monopol og markedsmakt fordypes i [SØK1011] — her grafisk/verbalt på innføringsnivå.
- **Innholdskontrakt:** Monopolisten står overfor markedets **fallende etterspørselskurve** og velger kvantum der **grenseinntekt = grensekostnad (MR = MC)**, og setter prisen på D-kurven over dette kvantumet ($P > MC$). **Grenseinntekten MR** må forklares grundig: den ligger *under* D fordi prisen må senkes på *alle* enheter for å selge én til (pris-effekt + kvantum-effekt). Sammenlign med FK-likevekten: monopol gir **lavere kvantum, høyere pris** og et **effektivitetstap** (dødvektstap) fordi $MWP > MC$ ved monopolkvantumet. Illustrer profitt $= (P - AC)\cdot Q$. Hvorfor konkurransemyndighetene bryr seg. Figurkrav: navngi D, MR, MC, monopoltilpasning, FK-tilpasning, effektivitetstapet og profittrektangelet.
- **Oppgavesjangre:** D. Mønstereksempel: «En bedrift er eneste tilbyder i et marked. Forklar og illustrer hvordan pris og mengde bestemmes ved MR = MC, hvorfor prisen settes over marginalkostnaden, og hvorfor monopolet gir et samfunnsøkonomisk effektivitetstap sammenlignet med frikonkurranse.»
- **Typiske feil:** Sette grenseinntekt = pris (feilkatalog §5.8 — glemme at MR ligger under D); feil monopoltilpasning; glemme effektivitetstapet eller tegne det feil; blande profitt (areal) med effektivitetstap.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Eksterne virkninger og korrigerende (Pigou-)avgift

- **id:** `sok1000-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-2-5`
- **Kapitteltype:** teori
- **description:** Hvorfor en negativ eksternalitet gir for stor produksjon sett fra samfunnet, og hvordan en korrigerende avgift lik den marginale eksterne kostnaden gjenoppretter velferdsmaksimering.
- **Eksamensbelegg:** ~45 % frekvens; CO₂-avgift på kjøtt/bensin er en fast case. Kobler avgift (kap. 2.5) til markedssvikt. Prioritet: **kunne** (nivå 2). Formell markedssvikt (Coase, kvotemarked, fellesgoder i dybden) fordypes i [SØK1011].
- **Innholdskontrakt:** **Negativ eksternalitet:** samfunnets marginalkostnad **SMC** ligger over privat **MC** (differansen = marginal ekstern kostnad, f.eks. utslipp) → det uregulerte markedet produserer *for mye* (tilpasser på privat MC = MWP, ikke på SMC = SMWP) → SO reduseres, effektivitetstap. **Korrigerende (Pigou-)avgift** lik den marginale eksterne kostnaden *ved det optimale kvantumet* flytter tilpasningen til der $SMWP = SMC$ → maksimerer SO. Understrek at slike avgifter, i motsetning til fiskale (kap. 2.5), **fjerner** et effektivitetstap. Nevn kort **kvote** som alternativt virkemiddel (samme optimale kvantum, ulik fordeling — bro til rådgiver-sjangeren og til kap. 2.6). Positiv eksternalitet nevnes kort (for lite produksjon → subsidie). Figurkrav: navngi MC, SMC, D, markedskvantum, optimalt kvantum, avgiftsbeløpet og effektivitetstapet.
- **Oppgavesjangre:** C. Mønstereksempel: «Produksjon av et gode gir utslipp som skader samfunnet. Forklar med figur hvorfor det uregulerte markedet produserer for mye sett fra samfunnets side, og hvor stor en avgift må være for at det samfunnsøkonomiske overskuddet skal bli maksimert.»
- **Typiske feil:** Blande fiskal og korrigerende avgift (feilkatalog §5.4); sette avgiften lik den eksterne kostnaden i feil punkt (skal være ved optimalt kvantum); glemme at markedet tilpasser på privat MC; ikke illustrere effektivitetstapet ved markedsløsningen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Elastisitet: egenpris, kryss og inntekt

- **id:** `sok1000-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-2-4`, `sok1000-1-2`
- **Kapitteltype:** teori
- **description:** De tre etterspørselselastisitetene definert, tolket verbalt, og koblet til hvordan en avgift/kostnadsøkning fordeles og til klassifisering av goder.
- **Eksamensbelegg:** ~45 % frekvens; ofte koblet til SSB-estimater for matvarer som skal tolkes, og til fordelingen ved avgift (kap. 2.4). **Verbal tolkning kreves hver gang.** Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt:** **Egenpriselastisitet** = prosentvis endring i etterspurt mengde per prosents prisendring (negativ for vanlige goder; tallverdi $>1$ elastisk, $<1$ uelastisk). **Krysspriselastisitet** (positiv = substitutter, negativ = komplementer). **Inntektselastisitet** ($>0$ normalt, $<0$ mindreverdig; $0<E<1$ nødvendighetsgode, $E>1$ luksusgode). Koble egenpriselastisitet til **tilgang på substitutter** (flere substitutter → mer elastisk) og til budsjettandel. **Bruk elastisitet på fordeling:** jo mer uelastisk $D$ relativt til $S$, jo mer av en avgift/kostnadsøkning bæres av konsument (koble tilbake til kap. 2.4). **Obligatorisk verbal tolkning:** «en prisøkning på 1 % gir |ε| % lavere etterspørsel». Vurder om oppgitte empiriske estimater (mat/kjøttdeig vs. matvarer under ett) er forenlige med teori. Enkel tallregning fra en tabell kan kreves (koble til prosentregning, kap. 1.2). Merk: den formelle beregningen via deriverte og Slutsky-dekomponeringen er [SOK1002]-stoff — her holdes det på definisjons-/tolkningsnivå.
- **Oppgavesjangre:** F. Mønstereksempel: «Definer egenpriselastisiteten i etterspørselen, forklar hva det betyr at et gode er elastisk eller uelastisk, og forklar hvorfor kjøttdeig trolig har en annen elastisitet enn matvarer sett under ett.»
- **Typiske feil:** Oppgi tallet uten verbal tolkning (feilkatalog §5.3-analogt); forveksle elastisitet og stigningstall; feil fortegnstolkning (mindreverdig vs. luksus); glemme å koble elastisitet til fordelingen ved avgift.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.4: Markedsmakt og markedsformer

- **id:** `sok1000-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-3-1`
- **Kapitteltype:** teori
- **description:** Hva som gir markedsmakt, hvorfor pristaker og monopolist møter ulike etterspørselskurver, og hvordan differensiering/etableringshindre skaper makt — pluss prisdiskriminering kort.
- **Eksamensbelegg:** ~40 % frekvens (Nortura V2020, kaffebar V2019, Vinmonopol V2022); prisdiskriminering ~20 %. Prioritet: **kunne** (nivå 2). Oligopol/spillteori (Cournot/Nash) fordypes i [SØK1011] — nevnes kun kort her.
- **Innholdskontrakt:** Hvorfor en **frikonkurransebedrift** står overfor en *horisontal* (uendelig elastisk) etterspørselskurve (liten aktør, homogene goder, full info → pristaker), mens en **monopolist** står overfor markedets *fallende* kurve (eneste tilbyder, etableringshindre). Hva som gir **markedsmakt:** produktdifferensiering, merkevarer, lokalisering/avstand, reguleringer, stordriftsfordeler/etableringshindre. Vurder at en aktør kan ha makt i ett delmarked og møte konkurranse i et annet. **Prisdiskriminering** kort (ulik pris til ulike kjøpergrupper med ulik betalingsvillighet, når videresalg hindres). Mellomformer (monopolistisk konkurranse, oligopol) nevnes som spennet mellom FK og monopol → henvis til [SØK1011] for oligopol/spillteori-dybden. Figur: horisontal vs. fallende etterspørselskurve.
- **Oppgavesjangre:** E. Mønstereksempel: «Forklar forskjellen på etterspørselskurven en pristaker og en monopolist står overfor, og hvilke forutsetninger som skaper forskjellen. Nevn tiltak en bedrift kan bruke for å oppnå markedsmakt og ta høyere pris enn konkurrentene.»
- **Typiske feil:** Tro at pristakeren møter markedets fallende kurve (den møter en horisontal); blande kilder til markedsmakt; behandle oligopol formelt (hører til SØK1011); glemme betingelsen for prisdiskriminering (hindret videresalg).
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 3:** 4 prøver (3.A monopol — MR=MC, P>MC, effektivitetstap, profitt, sjanger D; 3.B eksternalitet + korrigerende avgift/kvote, sjanger C; 3.C elastisitet — de tre typene med verbal tolkning + kobling til fordeling, sjanger F; 3.D markedsmakt/markedsformer + prisdiskriminering, sjanger E).

---

### Del 4 — Makro I: Keynes-modellen, multiplikator og finanspolitikk *(prioritet: PERFEKT — makro-motoren)*

#### Kapittel 4.1: Makroøkonomiens kretsløp og nasjonalregnskapets størrelser

- **id:** `sok1000-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-1-1`
- **Kapitteltype:** teori
- **description:** Det makroøkonomiske kretsløpet («økosirken»), sammenhengen $Y = C + I + G + X - Z$, og de sentrale størrelsene BNP, konsum, investering, offentlig etterspørsel og nettoeksport.
- **Eksamensbelegg:** Ikke et eget tema, men **fundamentet for hele makro-blokken**: generalbudsjettbetingelsen er utgangspunktet for Keynes-modellen (~75 %). Prioritet: **perfekt** (fundament).
- **Innholdskontrakt:** **Kretsløpet:** husholdninger, bedrifter, offentlig sektor og utland — hvordan inntekt og etterspørsel sirkulerer. **Generalbudsjettbetingelsen** $Y = C + I + G + X - Z$: BNP fra etterspørselssiden; forklar hvert ledd — privat konsum $C$, investering $I$, offentlig etterspørsel $G$, eksport $X$, import $Z$; nettoeksport $NX = X - Z$. **Endogent vs. eksogent** (foregriper determineringen i 4.3): $Y, C, NT, Z$ bestemmes i modellen; $I, G, X$ og parametrene er gitt utenfra. Kort om at BNP også kan måles fra produksjons- og inntektssiden (samme størrelse). Understrek at Keynes-modellen er en **etterspørselsstyrt** kortsiktsmodell (ledig kapasitet → produksjonen tilpasser seg etterspørselen). Symbol- og formelliste er sentral her (alle makro-symbolene introduseres).
- **Oppgavesjangre:** I-fundament. Mønstereksempel: «Forklar hva sammenhengen $Y = C + I + G + X - Z$ uttrykker, og hva hvert ledd står for. Hvilke størrelser er endogene og hvilke er eksogene i en enkel Keynes-modell?»
- **Typiske feil:** Forveksle endogene og eksogene variabler (feilkatalog §5.12); glemme importleddet (trekkes fra); tro at BNP måles på bare én måte; blande makro-kretsløpet med et enkelt marked.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.2: Konsumfunksjonen, sparing og de autonome størrelsene

- **id:** `sok1000-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-4-1`
- **Kapitteltype:** teori
- **description:** Konsumfunksjonen $C = A + c(Y - NT)$, den marginale konsumtilbøyeligheten $c$, sparing, og skille mellom autonome og inntektsavhengige størrelser.
- **Eksamensbelegg:** Del av Keynes-oppsettet (~75 %); $c$ er nøkkelparameteren bak multiplikatoren. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Konsumfunksjonen** $C = A + c(Y - NT)$: **autonomt konsum** $A > 0$ (konsum uavhengig av inntekt) + konsum av **disponibel inntekt** $(Y - NT)$; **marginal konsumtilbøyelighet** $c$ ($0 < c < 1$) = hvor mye av én ekstra krone disponibel inntekt som konsumeres. **Sparing** som resten ($1 - c$ av marginal disponibel inntekt). **Nettoskatter** $NT = tY$ med skattesats $t$ (endogen skatt). **Import** $Z = zY$ med importtilbøyelighet $z$. Skill **autonome** størrelser ($A, I, G, X$ — nivåskift) fra **inntektsavhengige** (via $c, t, z$ — påvirker helningen på etterspørselen). Legg grunnlaget for at $c$, $t$ og $z$ sammen bestemmer multiplikatoren (lekkasjer). Tolk parameterne økonomisk (sensor krever definisjon av notasjonen).
- **Oppgavesjangre:** I-fundament. Mønstereksempel: «Forklar konsumfunksjonen $C = A + c(Y - NT)$. Hva betyr parameteren $c$, og hvordan henger den sammen med hvor mye husholdningene sparer av en ekstra krone?»
- **Typiske feil:** Definere $c$ som gjennomsnittlig i stedet for marginal konsumtilbøyelighet; glemme skatteleddet i disponibel inntekt; blande autonomt konsum $A$ med total konsum $C$; ikke definere parametrene (sensor etterspør notasjonen — §5.12).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Keynes-modellen: oppsett, determinering og løsning

- **id:** `sok1000-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok1000-4-2`, `sok1000-1-2`
- **Kapitteltype:** teori
- **description:** Å sette opp, determinere og løse Keynes-modellen — lukket og åpen — både analytisk (likevektsinntekten $Y^*$) og grafisk (45°-kryss / AD-kurve).
- **Eksamensbelegg:** ~75 % frekvens — kjernen i makro-blokken. Sensor: grafisk *eller* analytisk løsning godtas fullt ut; hele pakken (forutsetninger + notasjon + determinering + løsning) forventes i kode-D-årene, mens mekanismen teller mest i kode-A-årene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Sett opp modellen** (åpen med offentlig sektor): $Y = C + I + G + X - Z$; $C = A + c(Y - NT)$; $NT = tY$; $Z = zY$; forklar hver likning og angi endogent/eksogent. **Determinering:** like mange likninger som endogene variabler. **Analytisk løsning:** sett inn → $Y^* = \frac{1}{1 - c(1-t) + z}\,(A + I + G + X)$. **Lukket variant uten offentlig sektor:** $Y = C + I$, $C = A + cY$ → $Y^* = \frac{A + I}{1 - c}$ (vis den enkle utledningen fullstendig — den er byggeklossen). **Grafisk løsning:** samlet etterspørsel $AD = C + I + G + X - Z$ tegnet mot $Y$; **45°-linjen** ($AD = Y$); likevekt der AD-kurven skjærer 45°-linjen; forklar at over/under likevekt gir utilsiktet lager-oppbygging/-tapping som driver produksjonen mot likevekt. Vis at analytisk og grafisk gir samme $Y^*$. Talleksempel (lukket): $C = 50 + 0{,}8Y$, $I = 100$ → $Y^* = 750$. Figurkrav: navngi AD-kurven, 45°-linjen, likevektspunktet og aksene.
- **Oppgavesjangre:** I. Mønstereksempel: «Sett opp en lukket Keynes-modell uten offentlig sektor med $C = 40 + 0{,}75Y$ og $I = 60$. Determiner og løs modellen for likevektsinntekten både analytisk og grafisk med et 45°-diagram.»
- **Typiske feil:** Slurve med determinering/notasjon (feilkatalog §5.12); glemme å angi endogent/eksogent; feil i innsettingen (algebrafeil i multiplikatoren); tegne AD uten 45°-linjen; ikke forklare hvorfor likevekten er stabil (lager-mekanismen).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.4: Multiplikatoreffekten

- **id:** `sok1000-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-4-3`
- **Kapitteltype:** teori
- **description:** Hvorfor en endring i autonom etterspørsel gir en større endring i BNP — multiplikatoren forklart som ringvirkninger, og hvorfor skatt og import demper den.
- **Eksamensbelegg:** ~70 % frekvens. Sensor: multiplikatoren skal **forklares** (ringvirkningene), ikke bare skrives. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Multiplikatoren** $= \frac{1}{1 - c(1-t) + z}$ (åpen) og $\frac{1}{1-c}$ (lukket uten offentlig sektor). **Ringvirkningsforklaringen** (kjernen): økt autonom etterspørsel (f.eks. $\Delta I$) → økt produksjon og inntekt → økt konsum ($c$ av ekstra disponibel inntekt) → økt etterspørsel → økt inntekt … en avtagende, konvergerende geometrisk rekke (fordi $c < 1$). Multiplikatoren $> 1$ fordi førsterundeeffekten forsterkes. **Lekkasjene:** en del av hver ekstra inntektskrone lekker ut til **skatt** ($t$) og **import** ($z$) i stedet for å bli innenlandsk konsum → dette **demper** multiplikatoren (**automatiske stabilisatorer**). Regn: lukket $c = 0{,}8$ → multiplikator 5, så $\Delta I = 50$ gir $\Delta Y = 250$; med skatt/import blir tallet mindre. Understrek både førsterundeeffekten *og* ringvirkningene (glem ingen av dem). Figur/regning: den geometriske rekken.
- **Oppgavesjangre:** I. Mønstereksempel: «Forklar hva multiplikatoreffekten er og hvorfor multiplikatoren i en lukket modell uten offentlig sektor er større enn 1. Hvorfor blir multiplikatoren mindre når vi legger til endogene skatter og import?»
- **Typiske feil:** Bare den direkte effekten *eller* bare «multiplikatoren» uten førsterundeeffekten (feilkatalog §5.5); gjengi formelen uten å forklare ringvirkningene; glemme at skatt/import demper (automatiske stabilisatorer — §5.6); regnefeil i multiplikatoren.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.5: Finanspolitikk: ΔG, Δt og virkning på BNP

- **id:** `sok1000-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-4-4`
- **Kapitteltype:** teori
- **description:** Hvordan ekspansiv/kontraktiv finanspolitikk (endret offentlig etterspørsel eller skattesats) virker på BNP via multiplikatoren, illustrert i AD-diagrammet.
- **Eksamensbelegg:** ~70 % frekvens; ekspansiv finanspolitikk mot (Keynesiansk) arbeidsledighet er en fast anvendelse. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Ekspansiv finanspolitikk:** økt $G$ ($\Delta G > 0$) skifter AD-kurven **opp** (parallelt) → $Y^*$ øker med $\Delta G \times$ multiplikator; redusert skattesats ($\Delta t < 0$) gjør AD-kurven **brattere** (større $c(1-t)$) → $Y^*$ øker. **Kontraktiv** motsatt. Koble til **arbeidsledighet:** høyere $Y$ → høyere sysselsetting → lavere (Keynesiansk) ledighet (bro til kap. 5.1). Regn virkningen med multiplikatoren fra 4.4. Kort om **balansert-budsjett-multiplikator** (økt $G$ finansiert av økt skatt gir netto positiv effekt fordi $G$-effekten er sterkere enn skatteeffekten) — nevnes som pluss-poeng, ikke drilles tungt. Figurkrav: skift/dreiing av AD, ny likevekt, endring i $Y$.
- **Oppgavesjangre:** J. Mønstereksempel: «Økonomien er i en lavkonjunktur med ledig kapasitet. Vis i et AD-diagram hvordan en økning i offentlig etterspørsel virker på likevektsinntekten, og forklar via multiplikatoren hvorfor $Y$ øker mer enn økningen i $G$.»
- **Typiske feil:** Forveksle skift ($\Delta G$, parallelt) med dreiing ($\Delta t$, helning); glemme multiplikatoren i regningen; ikke koble til arbeidsledighet; tro at effekten er umiddelbar/uendelig (ledig kapasitet er forutsetningen).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.6: Åpen økonomi: handelsbalansen og intern/ekstern balanse

- **id:** `sok1000-4-6` · **number:** 4.6 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-4-5`
- **Kapitteltype:** teori
- **description:** Hvordan finanspolitikk og eksportsjokk virker på handelsbalansen (NX = X − Z), målkonflikten mellom intern og ekstern balanse, og importen som automatisk stabilisator.
- **Eksamensbelegg:** ~55 % frekvens; målkonflikten intern/ekstern balanse og «to motstridende effekter ved eksportfall» er toppkarakter-markører. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Handelsbalansen** $NX = X - Z = X - zY$: avhenger negativt av $Y$ (høyere $Y$ → mer import). **Ekspansiv finanspolitikk** øker $Y$ → øker importen → **svekker handelsbalansen**: dette er **målkonflikten** mellom **intern balanse** (full sysselsetting) og **ekstern balanse** (handelsbalanse i null) — man kan ikke uten videre nå begge med ett virkemiddel. **Eksportfall** ($\Delta X < 0$): to motstridende effekter på $NX$ — (i) den *direkte* effekten (lavere $X$ → svekker $NX$), (ii) den *indirekte* (lavere $X$ → lavere $Y$ via multiplikatoren → lavere import → styrker $NX$); den direkte **dominerer**, så $NX$ svekkes, men importfallet demper (**importen er en automatisk stabilisator**). Understrek at studenten skal *se begge* effektene. Nevn at valutakursens effekt på handelsbalansen er utenfor pensum (men å nevne det teller positivt). Figur/regning: virkningen på $Y$ og $NX$.
- **Oppgavesjangre:** J. Mønstereksempel: «Et land opplever et fall i eksporten. Bruk en åpen Keynes-modell til å analysere virkningen på BNP og handelsbalansen, forklar de to motstridende effektene på handelsbalansen, og drøft målkonflikten finanspolitikk står overfor.»
- **Typiske feil:** Glemme importen som automatisk stabilisator (feilkatalog §5.6); overse målkonflikten intern/ekstern (§5.7 — konkludere at ekspansiv finanspolitikk løser alt); bare se den direkte effekten av eksportfallet; blande NX med selve BNP.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.7: Drill: Keynes-oppgaven

- **id:** `sok1000-4-7` · **number:** 4.7 · **estimatedMinutes:** 90 · **prerequisites:** `sok1000-4-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele makro-Keynes-blokken: fra en gitt modell til fullført A-besvarelse med determinering, løsning (grafisk + analytisk), multiplikator, finanspolitikk og handelsbalanse.
- **Eksamensbelegg:** Dekker sjangrene I og J samlet — Keynes-blokken som er makro-motoren i ~75 % av settene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp modellen, forklar hver likning og angi endogent/eksogent; 2) determiner (tell likninger vs. endogene); 3) løs analytisk ($Y^*$) *og* grafisk (AD mot 45°-linje); 4) forklar multiplikatoren som ringvirkninger, identifiser lekkasjene; 5) på et virkemiddel/sjokk ($\Delta G$, $\Delta t$, $\Delta X$): finn ny $Y^*$, virkning på arbeidsledighet og handelsbalanse; 6) se målkonflikten intern/ekstern der åpen økonomi. **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling: mekanismen bak multiplikatoren, at metodefrihet respekteres, de to effektene ved eksportfall, målkonflikten). **10–14 oppgaver** på eksamensnivå som roterer modellvariant (lukket uten/med offentlig sektor, åpen) × virkemiddel (ΔG, Δt, ΔX, ΔI), alle med nyskrevne tall kalibrert til pene svar og med `solution` + `hints`.
- **Oppgavesjangre:** I, J. Mønstereksempel (full kjede): «Gitt en åpen Keynes-modell med oppgitte parametre: (a) sett opp og determiner modellen. (b) Løs for likevektsinntekten analytisk og grafisk. (c) Beregn og forklar multiplikatoren. (d) Myndighetene øker offentlig etterspørsel — finn virkningen på BNP, arbeidsledighet og handelsbalanse, og drøft målkonflikten.»
- **Typiske feil:** Hele makro-repertoaret fra §5: slurvet determinering/notasjon (§5.12), bare direkte effekt i multiplikatoren (§5.5), glemt automatisk stabilisator (§5.6), oversett målkonflikt (§5.7), figur uten forklaring (§5.9).
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A kretsløp + konsumfunksjon + oppsett/determinering av Keynes-modellen, sjanger I-fundament; 4.B løsning grafisk *og* analytisk + multiplikatoren forklart som ringvirkninger, sjanger I; 4.C finanspolitikk ΔG/Δt + virkning på BNP og arbeidsledighet, sjanger J; 4.D åpen økonomi — eksportfall/handelsbalanse + målkonflikten intern/ekstern på eksamensnivå, sjanger I+J).

---

### Del 5 — Makro II: arbeidsledighet, penger, priser og Phillips *(prioritet: KUNNE/KJENNE — differensierende deloppgaver)*

#### Kapittel 5.1: Arbeidsledighet: typer og virkemiddel

- **id:** `sok1000-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-4-5`
- **Kapitteltype:** teori
- **description:** Definisjon av arbeidsledighet (AKU vs. NAV), skillet mellom Keynesiansk ledighet og likevektsledighet (friksjon/struktur), og hvorfor typen avgjør riktig virkemiddel.
- **Eksamensbelegg:** ~55 % frekvens (korona-ledighet H2020 er en fast case). Poeng: type ledighet avgjør virkemiddel. Prioritet: **kunne** (nivå 2, høyfrekvent).
- **Innholdskontrakt:** **Arbeidsledighet** = ledige / arbeidsstyrke (definer arbeidsstyrke = sysselsatte + ledige); skill **AKU-ledighet** (SSBs arbeidskraftundersøkelse, alle jobbsøkende) fra **registrert (NAV-)ledighet** (registrert hos NAV). **Keynesiansk ledighet** = etterspørselssvikt, ledige ressurser (konjunkturledighet) → møtes med **etterspørselspolitikk** (ekspansiv finans-/pengepolitikk, bro til 4.5). **Likevektsledighet** = friksjonsledighet (jobbskifte-søk) + strukturledighet (mismatch kvalifikasjoner/geografi) → krever **strukturtiltak** (kvalifisering, arbeidsmarkedstiltak) og påvirkes lite av finanspolitikk. Kort om **likevektsledighet / arbeidsmarkedsmodell** (LF- og AJ-kurver, nivå 3) — finanspolitikk flytter den ikke nevneverdig. Nøkkelpoenget: å foreslå riktig virkemiddel til riktig ledighetstype.
- **Oppgavesjangre:** K. Mønstereksempel: «Forklar forskjellen på Keynesiansk arbeidsledighet og likevektsledighet, og begrunn hvorfor typen ledighet avgjør hvilke virkemidler som virker.»
- **Typiske feil:** Ikke skille ledighetstyper (feilkatalog §5.11 — foreslå finanspolitikk mot strukturledighet eller strukturtiltak mot Keynesiansk); blande AKU og NAV; regne ledighet av totalbefolkningen i stedet for arbeidsstyrken; tro at all ledighet kan fjernes med etterspørselspolitikk.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.2: Pengepolitikk og pengemarkedet

- **id:** `sok1000-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `sok1000-4-5`
- **Kapitteltype:** teori
- **description:** Pengemarkedet med vertikalt pengetilbud og fallende pengeetterspørsel, hvordan sentralbanken kan senke renten, og hvordan lavere rente øker aktivitetsnivået.
- **Eksamensbelegg:** ~30 % frekvens; ofte koblet til Keynes-modellen (rente → investeringer). Prioritet: **kjenne** (nivå 3, men gjennomgående).
- **Innholdskontrakt:** **Pengemarkedet:** **pengetilbud** vertikalt (styrt av sentralbanken); **pengeetterspørsel** fallende i renten (alternativkostnaden ved å holde penger stiger med renten); likevektsrenten der de møtes. **Ekspansiv pengepolitikk** = skift **ut** i pengetilbudet → **lavere rente** → **høyere investeringer** (billigere å låne) → økt samlet etterspørsel og BNP (koble til $I$ i Keynes-modellen, kap. 4.3). Kontraktiv motsatt. Kort om at Norge i praksis styrer renten direkte (styringsrente) heller enn pengemengden — men innføringsmodellen er tilbud/etterspørsel. Skill finans- (kap. 4.5) fra pengepolitikk. Figurkrav: navngi pengetilbud (vertikalt), pengeetterspørsel (fallende), renten, og skiftet ved ekspansiv politikk.
- **Oppgavesjangre:** L. Mønstereksempel: «Forklar med figur hvordan sentralbanken kan senke renten i pengemarkedet, og hvordan en lavere rente kan øke aktivitetsnivået i økonomien.»
- **Typiske feil:** Tegne pengetilbudet fallende (det er vertikalt); feil retning på rente-effekten; glemme koblingen rente → investeringer → BNP; blande penge- og finanspolitikk.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.3: Nasjonalregnskap og prisindekser

- **id:** `sok1000-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1000-4-1`, `sok1000-1-2`
- **Kapitteltype:** teori
- **description:** BNP, KPI og inflasjon, skillet KPI vs. BNP-deflator, løpende vs. faste priser, realrente — og enkel inflasjonsberegning fra en KPI-tabell.
- **Eksamensbelegg:** ~20 % frekvens (V2016 begrep, V2024 KPI-beregning + løpende/faste priser); differensierende deloppgave. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **BNP** (samlet verdiskaping). **KPI** (konsumprisindeksen) = prisen på en varekurv en gjennomsnittshusholdning kjøper (inkl. import). **Inflasjon** = prosentvis endring i KPI (koble til prosentregning, kap. 1.2); **deflasjon** (fallende priser). Skill **KPI** fra **BNP-deflatoren** (alle sektorer i BNP, ikke import). Skill BNP i **løpende priser** (påvirket av prisvekst) fra **faste priser** (volumendring, «realt» BNP) — realvekst vs. nominell vekst. **Realrente** ≈ nominell rente − inflasjon. **Enkel inflasjonsberegning** fra en oppgitt KPI-tabell (år-til-år prosentvis endring). Behold det på definisjons- og enkel-regne-nivå.
- **Oppgavesjangre:** M. Mønstereksempel: «Forklar hva konsumprisindeksen (KPI) er, beregn den årlige inflasjonen fra en gitt KPI-tabell, og forklar forskjellen på KPI og BNP-deflatoren.»
- **Typiske feil:** Forveksle KPI og BNP-deflator; blande løpende og faste priser (nominell vs. real); regne inflasjon fra feil basisår; forveksle prosentpoeng og prosent (§1.2-feil); glemme at realrente ≈ nominell − inflasjon.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: Phillips-kurven: inflasjon og ledighet på kort og lang sikt

- **id:** `sok1000-5-4` · **number:** 5.4 · **estimatedMinutes:** 40 · **prerequisites:** `sok1000-5-1`, `sok1000-5-3`
- **Kapitteltype:** teori
- **description:** Den negative kortsiktige sammenhengen mellom inflasjon og arbeidsledighet (Phillips-kurven), og hvorfor kurven er vertikal på lang sikt.
- **Eksamensbelegg:** ~25 % frekvens (H2010, V2015, V2020); kvalitativ drøfting, sjelden regning. Prioritet: **kjenne** (nivå 3). Den detaljerte Phillips-mekanismen og forventningsdannelsen hører til [ECON1310]-nivå.
- **Innholdskontrakt:** **Kortsiktig Phillips-kurve:** negativ sammenheng — lavere ledighet henger sammen med høyere inflasjon (en trade-off myndighetene på kort sikt kan «velge» langs). **Lang sikt:** kurven er **vertikal** ved likevektsledigheten (den naturlige ledigheten) — man kan ikke varig kjøpe lavere ledighet med høyere inflasjon; forsøk på det gir bare høyere inflasjon når forventningene tilpasser seg. Koble til likevektsledighet (kap. 5.1) og til at etterspørselspolitikk ikke flytter likevektsledigheten varig. Behold det kvalitativt/grafisk. Figur: kortsiktig fallende kurve + vertikal langsiktig kurve.
- **Oppgavesjangre:** M/K-variant (kvalitativ). Mønstereksempel: «Forklar hva Phillips-kurven uttrykker om sammenhengen mellom inflasjon og arbeidsledighet på kort sikt, og hvorfor de fleste økonomer mener kurven er vertikal på lang sikt.»
- **Typiske feil:** Tro at trade-offen holder også på lang sikt; forveksle bevegelse langs kurven med skift i kurven; blande Phillips-kurven med AD-kurven; glemme koblingen til likevektsledighet.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (5.A arbeidsledighet — definisjon (AKU/NAV) + typer + riktig virkemiddel, sjanger K; 5.B pengepolitikk/pengemarkedet + kobling til BNP, sjanger L; 5.C nasjonalregnskap — KPI/inflasjonsberegning + løpende/faste priser + BNP-deflator, sjanger M; 5.D Phillips-kurven kort/lang sikt + kobling til ledighet, kvalitativ).

---

### Del 6 — Handelsteori og handelspolitikk (SØK1000-signatur) *(prioritet: PERFEKT — i sterk vekst)*

#### Kapittel 6.1: Komparative og absolutte fortrinn: PMK, KMK og gevinst ved handel

- **id:** `sok1000-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `sok1000-1-1`, `sok1000-1-2`
- **Kapitteltype:** teori
- **description:** Absolutt vs. komparativt fortrinn via alternativkostnad, produksjons- og konsummulighetskurver (PMK/KMK), og hvorfor spesialisering og handel gir velferdsgevinst for begge land.
- **Eksamensbelegg:** ~50 % frekvens og i sterk vekst (V2022, H2023, V2024). Alternativkostnad er nøkkelen; komparativt fortrinn må ikke forveksles med absolutt. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Absolutt fortrinn** = produserer varen med minst ressursinnsats. **Komparativt fortrinn** = lavest **alternativkostnad** (koble til kap. 1.1). Med to land, to varer, arbeidskraft som eneste faktor: sett opp arbeidskraftbehov per enhet → regn ut alternativkostnadene → avgjør hvem som har komparativt fortrinn i hva. **PMK (produksjonsmulighetskurve)** for hvert land: helning = alternativkostnad (rett linje ved konstant alternativkostnad). **KMK (konsummulighetskurve)** ved handel: verdensmarkedsprisen (byttеforholdet) ligger *mellom* de to landenes relative priser, og KMK ligger *utenfor* PMK → utvidede konsummuligheter. Vis at handel gir **spesialisering, høyere total produksjon og velferdsgevinst for begge**. Fasit-kalibrering (kun for vanskelighetsgrad, ikke som oppgavetall): et land med absolutt fortrinn i begge varer kan likevel ha komparativt fortrinn i bare én. Figurkrav: navngi PMK, KMK, aksene (de to varene), spesialiseringspunktet.
- **Oppgavesjangre:** G. Mønstereksempel: «To land kan produsere varene X og Y med arbeidskraft som eneste faktor. Gitt arbeidskraftbehovene per enhet, avgjør hvem som har absolutt og komparativt fortrinn i hver vare, og forklar med produksjons- og konsummulighetskurver hvorfor handel lønner seg for begge land.»
- **Typiske feil:** Forveksle absolutt og komparativt fortrinn (feilkatalog §5.3 — glemme at komparativt = alternativkostnad); feil alternativkostnad (regne feil vei); tegne KMK innenfor PMK; sette verdensmarkedsprisen utenfor de to landenes prisspenn.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 6.2: Toll og handelspolitikk: velferdsanalyse

- **id:** `sok1000-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok1000-6-1`, `sok1000-2-2`
- **Kapitteltype:** teori
- **description:** Hvordan en importtoll i et lite land virker på pris, produksjon, konsum og import, de to effektivitetstapene (trekantene b og d), og argumentene for/mot proteksjonisme.
- **Eksamensbelegg:** ~45 % frekvens; tolltrekantene og skillet mellom de to effektivitetstapene er faste karakterskiller. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Utgangspunkt (lite land, frihandel):** verdensmarkedsprisen under innenlandsk likevektspris → import = $Q_D - Q_S$. **Importtoll** løfter innenlandsk pris → innenlandsk produksjon øker ($Q_S \to Q_S'$), konsum faller ($Q_D \to Q_D'$), import krymper. **Velferd:** PO øker (areal $a$), KO faller ($a + b + c + d$), staten får **tollinntekt** (areal $c$), og **netto samfunnsøkonomisk tap = $b + d$**: trekant $b$ = produksjonstapet (produserer for dyrt hjemme i stedet for å importere), trekant $d$ = konsumtapet (for lavt konsum). Understrek at studenten skal identifisere **begge** trekantene og at tollinntekten *ikke* er et samfunnstap. **Argumenter for proteksjonisme** (distrikt, kulturlandskap, matvaresikkerhet/sårbarhet, vinnere/tapere, nyetableringer) drøftet **mot** frihandelens effektivitetsgevinst — råstoff til rådgiver-sjangeren (N). Figurkrav: navngi verdensmarkedspris, innenlandsk pris med toll, $Q_S, Q_S', Q_D', Q_D$, og arealene $a, b, c, d$.
- **Oppgavesjangre:** H. Mønstereksempel: «Et lite land innfører toll på import av en vare der verdensmarkedsprisen er lavere enn den innenlandske likevektsprisen. Vis grafisk virkningen på innenlandsk produksjon, konsum og import, identifiser statens tollinntekt, og forklar de to effektivitetstapene tollen gir.»
- **Typiske feil:** Bare identifisere ett av de to effektivitetstapene (feilkatalog §5.10); regne tollinntekten ($c$) som et samfunnstap; feil på hvilke areal som er PO-økning vs. tap; glemme at frihandel gir størst SO (bro til kap. 2.2).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 6.3: Drill: handelsoppgaven

- **id:** `sok1000-6-3` · **number:** 6.3 · **estimatedMinutes:** 80 · **prerequisites:** `sok1000-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele handelsblokken: fra arbeidskraftbehov til komparativt fortrinn (PMK/KMK) og videre til toll med velferdstrekanter og proteksjonismedrøfting.
- **Eksamensbelegg:** Dekker sjangrene G og H samlet — handelsblokken som har vært på hvert av de siste tre settene og er en het kandidat igjen. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) fra arbeidskraftbehov → alternativkostnader → absolutt og komparativt fortrinn; 2) tegn PMK for begge land, finn spesialiseringsmønsteret; 3) verdensmarkedspris mellom de relative prisene → KMK → velferdsgevinst; 4) eller/i tillegg: toll i et lite land → pris/produksjon/konsum/import → arealene $a$ (PO), $c$ (tollinntekt), $b + d$ (tap); 5) drøft proteksjonisme mot frihandel og evt. anbefal (sjanger N). **Gjennomregnet eksamenscase med sensor-margnotater** (hva som gir uttelling: alternativkostnad korrekt regnet, begge tolltrekanter identifisert, tollinntekten ikke talt som tap, proteksjonismeargumentene balansert mot effektivitetsgevinsten). **10–14 oppgaver** på eksamensnivå som roterer mellom ren komparativt-fortrinn-regning (PMK/KMK), ren toll-velferdsanalyse, og kombinerte oppgaver, alle med nyskrevne tall og med `solution` + `hints`.
- **Oppgavesjangre:** G, H (+ N). Mønstereksempel (full kjede): «(a) Gitt arbeidskraftbehov for to land og to varer, avgjør absolutt og komparativt fortrinn. (b) Tegn PMK og KMK og forklar velferdsgevinsten ved handel. (c) Landet innfører toll på importvaren — vis velferdsvirkningen med arealene a–d. (d) Drøft og anbefal om tollen bør beholdes.»
- **Typiske feil:** Absolutt/komparativt-forveksling (§5.3); feil alternativkostnad; bare én tolltrekant (§5.10); tollinntekt som tap; usbalansert proteksjonismedrøfting; uklare figurer (§5.9).
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 6:** 4 prøver (6.A absolutt/komparativt fortrinn — alternativkostnad + hvem spesialiserer i hva, sjanger G; 6.B PMK/KMK + velferdsgevinst ved handel, sjanger G; 6.C toll — pris/produksjon/konsum/import + velferdstrekantene b og d + tollinntekt, sjanger H; 6.D full handelsoppgave på eksamensnivå inkl. proteksjonismedrøfting og anbefaling, sjanger G+H+N).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Begrepsdrill: hele SØK1000 på tvers

- **id:** `sok1000-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1000-6-3`
- **Kapitteltype:** teori (begrepsdrill)
- **description:** Rask drill av de ~15 begrepsgjengangerne på tvers av mikro, makro og handel — den samlende flashcard-banken før eksamen.
- **Eksamensbelegg:** Begrepsforklaringer inngår i mange sett (særlig V2016, V2020 som starter med begreper); denne samler dem. Prioritet: **perfekt** (repetisjon på tvers).
- **Innholdskontrakt:** Kompakt gjennomgang med presise definisjoner *og* mekanisme av de sentrale begrepene: **mikro** — frikonkurranse/forutsetninger, MWP, MC, KO/PO/SO, velferdsmaksimering (MWP=MC), dødvektstap, fiskal vs. korrigerende avgift, grenseinntekt (MR), effektivitetstap ved monopol, eksternalitet/SMC, elastisitet (egenpris/kryss/inntekt), markedsmakt; **makro** — generalbudsjettbetingelsen, konsumfunksjon/$c$, multiplikator, automatiske stabilisatorer, finanspolitikk, handelsbalanse, intern/ekstern balanse, arbeidsledighet (Keynesiansk/likevekts), pengepolitikk, KPI/inflasjon; **handel** — absolutt/komparativt fortrinn, alternativkostnad, PMK/KMK, tolltrekantene b/d. Hver som en kort «definisjon + hvorfor det gir uttelling». Denne delen er tung på **flashcards** (begrep ↔ definisjon/mekanisme).
- **Oppgavesjangre:** A–N (begrepsvariant). Mønstereksempel: «Forklar kort og presist hva et dødvektstap er, hvorfor en fiskal avgift skaper det, og hvorfor en korrigerende avgift ikke nødvendigvis gjør det.»
- **Typiske feil:** Definisjon uten mekanisme (C-svar); blande beslektede begreper (fiskal/korrigerende, absolutt/komparativt, AKU/NAV, KPI/deflator); pugge uten å kunne bruke begrepet i en oppgave.
- **Quiz: 24 · Flashcards: 70** (samlende begrepsbank på tvers av hele boka)

#### Kapittel 7.2: Sjanger: rådgiver- og anbefalingsoppgaven (drøfting)

- **id:** `sok1000-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1000-7-1`
- **Kapitteltype:** sjangerkapittel (drøfting — struktur lånt fra `DNA-drofting.md`)
- **description:** Hvordan man bygger en velbegrunnet anbefaling mellom økonomiske virkemidler — oppskrift, gjennomskrevet besvarelse og momentliste-oppgaver.
- **Eksamensbelegg:** Rådgiver-/anbefalingssjangeren (N) avslutter ofte en oppgave (CO₂-avgift vs. kvantumsreduksjon; beholde Vinmonopolet eller ikke) og krever en begrunnet konklusjon. Prioritet: **kunne** (sjangerhåndverk som løfter til topp).
- **Innholdskontrakt:** **Oppskrift (trinn-for-trinn):** 1) klargjør spørsmålet og virkemidlene; 2) analyser hvert alternativs virkning på effektivitet (KO/PO/SO, dødvektstap), 3) på fordeling (hvem vinner/taper — elastisitet), 4) på gjennomførbarhet/sideeffekter; 5) vei alternativene mot hverandre; 6) **konkluder** med en begrunnet anbefaling (i motsetning til ren analyse *kreves* her et valg). Understrek at anbefalingen skal *følge av* analysen, ikke være løsrevet synsing. **Gjennomskrevet A-besvarelse** med margkommentarer (hvor drøftingen løftes fra C til A: eksplisitt avveining, at man ser målkonflikter og fordelingseffekter, balansert behandling). Tidsbudsjett for sjangeren i en 5-timers eksamen. Lån drøftingsstrukturen fra `DNA-drofting.md` (oppskrift → gjennomskrevet besvarelse → momentliste-oppgaver).
- **Oppgavesjangre:** N. Mønstereksempel: «Myndighetene vurderer enten en avgift eller en pålagt mengdereduksjon for å redusere en aktivitet med negative eksterne virkninger. Sammenlign virkningene på konsument- og produsentoverskudd og på effektivitet, og anbefal ett av tiltakene med begrunnelse.»
- **Typiske feil:** Analysere uten å konkludere (sjangeren krever et valg); anbefale uten å begrunne fra analysen (løsrevet synsing); glemme fordelingseffektene; ensidig behandling av alternativene.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 7.3: Øvingseksamen 1 — standard 50/50 (mikro + makro)

- **id:** `sok1000-7-3` · **number:** 7.3 · **estimatedMinutes:** 90 · **prerequisites:** `sok1000-7-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet eksamenssett i 50/50-malen: én full mikro-markedsoppgave + én full makro-Keynes-oppgave, med A-besvarelse og poengfordeling.
- **Eksamensbelegg:** Speiler den vanligste to-oppgavemalen (V2019, H2018, V2022, H2016). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Oppgave 1 (mikro, 50 %):** frikonkurransemarked → KO/PO/SO → avgift/kostnadsøkning med fordeling (elastisitet) + dødvektstap → evt. anbefaling. **Oppgave 2 (makro, 50 %):** Keynes-modell → determiner/løs (grafisk + analytisk) → multiplikator → finanspolitikk + handelsbalanse/arbeidsledighet. Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse (figurbeskrivelser i ord + regning + verbal tolkning), med `tip`-notat om delpoeng/vekting og tidsbruk (5 timer, ~halvparten per oppgave).
- **Oppgavesjangre:** A/B + I/J (+ N). Nyskrevne tall og case.
- **Typiske feil:** (samlet fra §5 — vises i løsningsnotatene): utelatt elastisitet, feil dødvektstap, slurvet determinering, glemt automatisk stabilisator, figur uten forklaring.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 7.4: Øvingseksamen 2 — tredeling 25/25/50 (makro + handel + stor mikro)

- **id:** `sok1000-7-4` · **number:** 7.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok1000-7-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet sett i tredelingsmalen: multiplikator/makro + handelsteori + stor frikonkurranse-/velferdsoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler tre-oppgavemalen (H2023 25/25/50, H2017 35/25/40). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (makro, 25 %):** enkel Keynes/multiplikator + finanspolitikk. **Oppgave 2 (handel, 25 %):** komparative fortrinn (PMK/KMK) *eller* toll med velferdstrekanter. **Oppgave 3 (mikro, 50 %):** stor frikonkurranse-/velferdsoppgave med avgift/eksternalitet, fordeling og dødvektstap, avsluttet med anbefaling. Løsningsforslag som A-besvarelse per oppgave med delpoeng-notat.
- **Oppgavesjangre:** I/J + G/H + A/B/C (+ N). Nyskrevne tall og case.
- **Typiske feil:** (fra §5, i løsningsnotatene): absolutt/komparativt-forveksling, én tolltrekant, fiskal/korrigerende-blanding, utolkede tall.
- **Quiz: 12 · Flashcards: 6**

#### Kapittel 7.5: Øvingseksamen 3 — firedeling 30/10/15/45 (V2024-malen)

- **id:** `sok1000-7-5` · **number:** 7.5 · **estimatedMinutes:** 95 · **prerequisites:** `sok1000-7-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet sett i den mest oppdelte malen: handel + nasjonalregnskap/inflasjon + enkel Keynes + stor frikonkurranse-/velferdsoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler den mest oppdelte varianten (V2024 30/10/15/45), tydelig kalibrert for kode-A. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (handel, 30 %):** komparative fortrinn med tallregning + PMK/KMK. **Oppgave 2 (nasjonalregnskap, 10 %):** KPI-/inflasjonsberegning + løpende/faste priser. **Oppgave 3 (Keynes, 15 %):** enkel lukket modell med multiplikator. **Oppgave 4 (mikro, 45 %):** stor frikonkurranse-/velferdsoppgave med avgift/monopol, fordeling og dødvektstap. Løsningsforslag som A-besvarelse per oppgave; `tip`-notat understreker kode-A-nyansen (mekanismen, ikke utledningen, teller). Til sammen dekker de tre settene (7.3–7.5) sjangrene A–N minst én gang, og malene 50/50, 25/25/50 og 30/10/15/45.
- **Oppgavesjangre:** G + M + I + A/B/D (+ N). Nyskrevne tall og case.
- **Typiske feil:** (fra §5, i løsningsnotatene): hele repertoaret; understrek at hver eksamen prøver både mikro og makro — kandidaten må levere på begge søyler.
- **Quiz: 12 · Flashcards: 6**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av begrepsdrill + rådgiver-sjangerkapittel + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 14 | 12 | 0 |
| 1 | 1.1–1.2 | 18+16 = **34** | 20+14 = **34** | 4 |
| 2 | 2.1–2.8 | 20+22+16+22+20+16+18+16 = **150** | 24+22+16+22+20+16+16+10 = **146** | 4 |
| 3 | 3.1–3.4 | 20+20+20+18 = **78** | 22+20+20+18 = **80** | 4 |
| 4 | 4.1–4.7 | 18+16+24+22+20+22+16 = **138** | 20+18+22+20+18+20+10 = **128** | 4 |
| 5 | 5.1–5.4 | 18+16+18+16 = **68** | 20+16+18+16 = **70** | 4 |
| 6 | 6.1–6.3 | 24+22+16 = **62** | 24+22+12 = **58** | 4 |
| 7 | 7.1–7.5 | 24+16+12+12+12 = **76** | 70+14+6+6+6 = **102** | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **620 ≥ 500 ✓** | **630 ≥ 500 ✓** | **24 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler den ufravikelige mikro+makro-malen: de to hovedsøylene
(Del 2 mikro + Del 4 makro) står for 288 av 620 quiz og 274 av 630 flashcards —
og signatursøylen (Del 6 handel) 62/58 — nøyaktig de temaene som bærer
eksamenspoengene. Boka er et **lavmatematisk regnefag med tungt begrepsrepertoar
og markert drøftingselement**: quiz ligger godt over gulvet (tre drilltunge
søyler), og **flashcards er løftet klart over gulvet (630)** fordi definisjonene
faktisk må sitte — sensor forutsetter dem ikke kjent (KO/PO/SO, MWP/MC,
multiplikator, alternativkostnad, ledighetstypene, fiskal/korrigerende avgift),
med begrepsdrillen (7.1) som samlende flashcard-bank (70; totalt 630). Dette gir en høyere
flashcard-tetthet enn et rent regnefag, i tråd med audit-lærdommen om at
begrepsrike fag skal ligge over 500-gulvet.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + regning + verbal tolkning) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok1000-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Grunnverktøy** (korte verktøyprøver som ender på anvendelse)
1. Prøve 1.A (25 min): Alternativkostnad + marginal vs. gjennomsnitt, begreps-/tolkningsoppgaver.
2. Prøve 1.B (25 min): Løse lineære likningssystemer på Keynes-lite oppsett.
3. Prøve 1.C (25 min): Prosentregning — inflasjon og prosentvis endring, prosentpoeng vs. prosent.
4. Prøve 1.D (25 min): Arealregning — trekant/rektangel som forberedelse til KO/PO/SO og tolltrekanter.

**Del 2 — Mikro I: marked, velferd og avgift**
1. Prøve 2.A (40 min): Frikonkurranse + KO/PO/SO + velferdsmaksimering med forutsetningene brukt aktivt (sjanger A).
2. Prøve 2.B (45 min): Avgift — pris/kvantum/fordeling via elastisitet + dødvektstap + fiskal/korrigerende (sjanger B).
3. Prøve 2.C (40 min): Prisregulering/kvantumsregulering + anvendt markedssjokk (sjanger A/B-variant).
4. Prøve 2.D (60 min): Full mikro-markedsoppgave på eksamensnivå med inngrep og velferdsvurdering (sjanger A+B+N).

**Del 3 — Mikro II: monopol, eksternalitet, elastisitet, markedsformer**
1. Prøve 3.A (40 min): Monopol — MR=MC, P>MC, effektivitetstap, profitt (sjanger D).
2. Prøve 3.B (40 min): Eksternalitet + korrigerende avgift/kvote (sjanger C).
3. Prøve 3.C (35 min): Elastisitet — de tre typene med verbal tolkning + kobling til fordeling (sjanger F).
4. Prøve 3.D (40 min): Markedsmakt/markedsformer + prisdiskriminering (sjanger E).

**Del 4 — Makro I: Keynes, multiplikator, finanspolitikk**
1. Prøve 4.A (40 min): Kretsløp + konsumfunksjon + oppsett/determinering av Keynes-modellen (sjanger I-fundament).
2. Prøve 4.B (45 min): Løsning grafisk *og* analytisk + multiplikatoren forklart som ringvirkninger (sjanger I).
3. Prøve 4.C (40 min): Finanspolitikk ΔG/Δt + virkning på BNP og arbeidsledighet (sjanger J).
4. Prøve 4.D (60 min): Åpen økonomi — eksportfall/handelsbalanse + målkonflikten intern/ekstern (sjanger I+J).

**Del 5 — Makro II: ledighet, penger, priser, Phillips**
1. Prøve 5.A (40 min): Arbeidsledighet — definisjon (AKU/NAV) + typer + riktig virkemiddel (sjanger K).
2. Prøve 5.B (35 min): Pengepolitikk/pengemarkedet + kobling til BNP (sjanger L).
3. Prøve 5.C (40 min): Nasjonalregnskap — KPI/inflasjonsberegning + løpende/faste priser + BNP-deflator (sjanger M).
4. Prøve 5.D (35 min): Phillips-kurven kort/lang sikt + kobling til ledighet (kvalitativ).

**Del 6 — Handelsteori og handelspolitikk**
1. Prøve 6.A (40 min): Absolutt/komparativt fortrinn — alternativkostnad + spesialisering (sjanger G).
2. Prøve 6.B (40 min): PMK/KMK + velferdsgevinst ved handel (sjanger G).
3. Prøve 6.C (45 min): Toll — pris/produksjon/konsum/import + velferdstrekantene b og d + tollinntekt (sjanger H).
4. Prøve 6.D (55 min): Full handelsoppgave inkl. proteksjonismedrøfting og anbefaling (sjanger G+H+N).

### Øvingseksamener (3 komplette sett — se kap. 7.3–7.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.3) | Standard 50/50 (dominerende) | Oppg. 1 mikro 50 % (marked → KO/PO/SO → avgift m/elastisitet+dødvektstap) + oppg. 2 makro 50 % (Keynes → multiplikator → finanspolitikk+handelsbalanse) |
| Øvingseksamen 2 (kap. 7.4) | Tredeling 25/25/50 (H2023/H2017) | Oppg. 1 makro 25 % + oppg. 2 handel 25 % (komparativt fortrinn *eller* toll) + oppg. 3 mikro 50 % (velferd m/inngrep + anbefaling) |
| Øvingseksamen 3 (kap. 7.5) | Firedeling 30/10/15/45 (V2024) | Oppg. 1 handel 30 % + oppg. 2 nasjonalregnskap/inflasjon 10 % + oppg. 3 enkel Keynes 15 % + oppg. 4 stor mikro/velferd 45 % |

Til sammen dekker de tre settene sjangrene A–N minst én gang; hvert sett har
**både mikro og makro** (den ufravikelige malen), og malene 50/50, 25/25/50 og
30/10/15/45 er alle representert.

---

## 5. Feilkatalog (referert per kapittel som «feilkatalog §5.N»)

Nummereringen matcher analysens §5 slik at kapitlenes «Typiske feil»-blokker kan
referere presist:

1. **Ramse opp forutsetningene uten å bruke dem** (FK-likevekt/velferd).
2. **Utelate elastisitet i fordelingsanalysen** ved avgift/kostnadsøkning («vesentlig mangel»).
3. **Forveksle absolutt og komparativt fortrinn** (komparativt = alternativkostnad).
4. **Blande fiskale og korrigerende avgifter** («avgifter gir alltid tap»).
5. **Bare den direkte effekten i multiplikatoren** (glemme ringvirkningene, eller motsatt).
6. **Glemme importen som automatisk stabilisator** ved eksportfall.
7. **Overse målkonflikten intern/ekstern balanse.**
8. **Grenseinntekt = pris i monopol** (MR ligger under D).
9. **Uklare figurer** (kurver, likevekt, skift, areal ikke navngitt).
10. **Feil på tolltrekantene** (bare ett tap; tollinntekt som samfunnstap).
11. **Ikke skille ledighetstyper** (feil virkemiddel til feil ledighet).
12. **Determinering/notasjon slurves** (endogent/eksogent, parametere ikke definert).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1000` med alle 31
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK1000 Innføring i samfunnsøkonomi».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N, frekvenstallene i begge
   spor og avgrensningen (hva som er innføringsnivå her vs. dybde i
   SOK1002/SØK1011/ECON1310/SOK1001) som resten refererer til.
3. **Del 1** (grunnverktøyet) — alternativkostnad/marginaltenkning + det lille
   regneapparatet resten bruker.
4. **De tre søylene i avhengighetsrekkefølge**: Del 2 (mikro) → Del 3 (mikro
   utvidet) → Del 4 (makro) → Del 5 (makro utvidet) → Del 6 (handel). Én
   byggeagent per hel del (jf. fase 4-batching); Del 2 og Del 4 er 7–8 kapitler
   og kan splittes, men gi da hele delens kontrakter til begge agenter og flagg
   for konsistenssjekk (notasjon MWP/MC/KO/PO/SO, $Y$-notasjonen, grafisk+
   analytisk-parallellen). Drillkapitlet (2.8 / 4.7 / 6.3) bygges av samme agent
   som delen.
5. **Del 7 til slutt** (begrepsdrill + rådgiver-sjanger + 3 øvingseksamener
   gjenbruker alt); bygges av én agent som leser hele skjelettet.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1000-<del>-prove`, chapterNumber `<del>.P`), Del 1–6.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\frac`, `\\alpha`); ingen unicode-brøker; konsistent $Y, C, I, G, X, Z$,
      $A, c, t, z$, $NT, NX$, $Q, P$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok1000-filer — **påkrevd**:
      MWP (= etterspørsel/marginal betalingsvillighet), MC (= tilbud/
      marginalkostnad), KO/PO/SO, SMC/SMWP, MR, multiplikator
      $\frac{1}{1-c(1-t)+z}$, $Y=C+I+G+X-Z$, $NX=X-Z$, PMK/KMK, tolltrekantene
      $a/b/c/d$; **forbudt/uønsket som hovedstoff** (hører til andre bøker):
      Lagrange-nyttemaks, indifferenskurve/MSB, Cobb-Douglas-etterspørsel,
      substitusjons-/inntektseffekt (SOK1002); Cournot/Nash/oligopol,
      Samuelson-betingelse, formell Pigou-optimering i dybden (SØK1011);
      IS-RR-PK, renteregel, symbolsk komparativ statikk (ECON1310) — grep etter
      «Lagrange», «Cournot», «Nash», «IS-RR» skal gi **null treff** utenfor de
      avgrensende merknadene og kryssbok-lenkene.
- [ ] **Grafisk + analytisk parallelt**: Keynes-modellen (4.3, 4.7,
      øvingseksamenene) vises både grafisk (45°-kryss/AD) og analytisk ($Y^*$);
      grep-sjekk at både «45°»/«AD» og «$Y^*$»/«analytisk» forekommer.
- [ ] **Figur + verbal forklaring**: hvert eksempel/løsningsforslag med figur har
      både figurbeskrivelse i ord (akser, kurver, likevekt/tilpasning, areal
      navngitt) og verbal mekanismeforklaring; alle elastisiteter, multiplikatorer
      og fortegn tolkes verbalt.
- [ ] **Signatur-differensiatorer**: kap. 2.5 (fiskal/korrigerende),
      4.4 (ringvirkninger + lekkasjer), 4.6 (målkonflikt + automatisk
      stabilisator), 6.1 (alternativkostnad ≠ absolutt fortrinn), 6.2 (begge
      tolltrekanter) inneholder eksplisitt de temaene som skiller topp fra midt.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og
      formelliste-`collapsible` (per delkapittel — forklarer ALLE symboler brukt),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
      med `solution` + `hints`, repetisjons-`collapsible`; drillkapitlene (2.8,
      4.7, 6.3) har løsningsoppskrift + sensor-kommentert case + 10–14 oppgaver.
- [ ] **Quiz-sum ≥ 620 og flashcard-sum ≥ 630** per kvotetabellen (kontrollsummér
      mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og
      prøvene dekker samlet sjangrene A–N minst én gang, og både 50/50-,
      25/25/50- og 30/10/15/45-malen; hvert øvingssett har både mikro og makro.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster
      (bransjer, personer, land), egne formuleringer; ingen formuleringer fra
      reelle sett eller sensorveiledninger (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      kalibreringsverdiene fra reelle fasiter (f.eks. $C=50+0{,}8Y$, $I=100$ →
      $Y^*=750$) brukes kun til å velge vanskelighetsgrad; pensum refereres,
      aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot nabo-emnene (bred innføring vs. dybde)

SØK1000 er **innføringssekvensens start** ved NTNU og berører bredt det som
SOK1002, SØK1011 og ECON1310-nivå fordyper. Denne tabellen styrer hva SØK1000
bygger ut vs. hva den holder på innføringsnivå og kryssrefererer.

| Tema | SØK1000 (bygger ut) | Dybde ligger i |
|---|---|---|
| Frikonkurranse, KO/PO/SO, velferdsmaksimering, dødvektstap | **JA** — Del 2 (grafisk/verbalt, kjernen) | (unikt for innføringen; SOK1002 dekker det IKKE) |
| Avgift, fordeling via elastisitet, fiskal vs. korrigerende | **JA** — Del 2/3 | ECON1210 (overveltnings-delingsbrøk, ikke her) |
| Monopol, markedsmakt, eksternalitet, elastisitet | **JA** — Del 3, grafisk/verbalt på innføringsnivå | **SØK1011** (formell markedssvikt/oligopol) — lenk dit |
| Formell konsument-/produsentteori (Lagrange, MSB, etterspørsel fra Cobb-Douglas, SE/IE, isokvant/TSB, kostnadskurvefamilien, nedlegging m/sunk cost) | **NEI** — gjør *markedsanalyse*, ikke optimeringsteori | **SOK1002** — lenk til MC/tilbudskurve/elastisitet der forkunnskap trengs |
| Oligopol (Cournot/Bertrand/Stackelberg), spillteori (Nash), fellesgoder/Samuelson, Coase | **NEI** — nevnes kun som «går videre i…» | **SØK1011** — lenk dit |
| Keynes-modellen (åpen/lukket), multiplikator, finanspolitikk, handelsbalanse | **JA** — Del 4 (enkel modell, grafisk+analytisk) | ECON1310 (dypere, men SØK1000 stopper før IS-RR-PK) |
| Arbeidsledighet (typer/virkemiddel), pengepolitikk, KPI/inflasjon, Phillips | **JA** — Del 5 (kvalitativt/enkelt) | ECON1310 (detaljert Phillips, forventninger, renteregel) — lenk dit |
| IS-RR-PK, renteregel, symbolsk komparativ statikk, detaljert Phillips-mekanisme | **NEI** — utenfor innføringsnivået | **ECON1310** (UiO) — lenk dit |
| Komparative/absolutte fortrinn (PMK/KMK), toll/handelspolitikk (velferdstrekanter) | **JA** — Del 6 (SØK1000-signatur) | (nesten unikt for SØK1000 i denne serien) |
| Ren matematikk (derivasjon utover marginaltolkning, finansmatematikk) | **NEI** — lavmatematisk fag | **SOK1001** (Matte for økonomer) — lenk dit |

**Møtepunkter (kryssrefereres, ikke gjentas):** marginalkostnad,
tilbudskurven fra kostnadssiden, den formelle elastisitetsberegningen og
Slutsky-dekomponeringen forutsettes videreført i SOK1002; formell markedsmakt/
markedssvikt i SØK1011; dypere makro i ECON1310. SØK1000 lenker dit fra
Forkunnskaper-/«går videre i»-notatene, men gjentar aldri deres dybde. SØK1000s
egen rolle er **bredden**: å gi et fungerende grep om *begge* halvdeler av faget
og peke framover.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene
> (multiplikator $\frac{1}{1-c(1-t)+z}$, $Y^*=\frac{A+I}{1-c}$ i lukket variant,
> talleksemplet $C=50+0{,}8Y$, $I=100 \Rightarrow Y^*=750$, tolltrekantene
> $a/b/c/d$ med netto tap $b+d$) er faglige fakta uten verkshøyde og er bekreftet
> mot analysens §3/§6. Emnets **nedleggelse** (utfaset fra studieåret 2024/25,
> erstattet av SØK1020 mikro + SØK1021 makro; fortsatt eksamensrelevant for
> bachelor-planer fra 2023 eller tidligere) er dokumentert i analysens
> emnekode-merknad — boka bygges fordi emnet er **eksamensrelevant** og
> **ikke dekket** av de bygde SOK1002/SØK1011/SOK3500 (SØK1000 er den brede,
> lavmatematiske mikro+makro-innføringen; de tre andre er smalere/dypere). Den
> eksakte lærebokutgaven og kapittelnummereringen for pensumankere er *(verifiser)*
> — sensorveiledningene henviser til «lærebokas kapittel 17» for åpen Keynes-modell,
> men den eksakte utgaven er ikke entydig fastslått i analysen og bør sjekkes mot
> gjeldende emnebeskrivelse (SØK1020/SØK1021 har trolig annet pensum) før
> pensumankere skrives inn i kapitlene.

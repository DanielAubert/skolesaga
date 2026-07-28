# Bokskjelett: ECON4220 Microeconomics 3 — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (**7 ordinære sett H2019–H2025**; emnet går kun om høsten;
> **ingen sensorveiledning i arkivet** — alle sensorkrav og typiske feil er
> utledet av oppgavetekstene + fagkonvensjonen i Jehle & Reny, og er merket
> `(verifiser)` der de er svakest belagt). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre, aldri kopiere ordrett.
>
> **Nærmeste forbilde:** `docs/hoyskole-boker/econ2220/SKJELETT.md` (bevisdrevet
> mikro, spillteori, v3-format). ECON4220 er søsteremnet — men regimeskiftet
> peker **motsatt vei**: der ECON2220 droppet spillteorien og beholdt
> konsument/GE, har ECON4220 droppet den klassiske mikroen og gjort
> **spillteori + informasjonsøkonomi til HELE eksamen**.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ4220` |
| Tittel | **ECON4220 Microeconomics 3** |
| Institusjon | Universitetet i Oslo (UiO) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (bevisdrevet formell utledning — «Show that …»-fag) |
| Antall kapitler | **36** (2 eksamenskart/bevishåndverk + 30 tema/beredskap + 4 eksamenstrening) |
| Estimert totaltid | **2 690 min ≈ 45 timer** |
| Quiz totalt | **632** (krav ≥500) |
| Flashcards totalt | **692** (krav ≥500) |
| Forgjengerbøker | `econ2220` (Mikroøkonomi 2) og `econ1210` (Mikroøkonomi 1) — forkunnskapslenker peker dit |

**Pitch (ett avsnitt):** ECON4220-eksamen gjennomgikk et **regimeskifte fra og
med H2023**: den klassiske mikroteorien (konsument, produsent, generell likevekt)
som bar ~50 % av hvert sett H2019–H2022, er **borte fra alle tre sett H2023–H2025**,
og eksamen består nå utelukkende av **ikke-kooperativ spillteori og
informasjonsøkonomi** — normalform (rasjonaliserbarhet, blandet Nash),
ekstensivform (SPE, baklengs induksjon), **perfekt Bayesiansk likevekt med
separerende vs. samlende signalisering** (signaturoppgaven, 6/7 sett), auksjoner
(all-pay bar 90 % av H2024 alene) og en fast definisjonsåpning bygget på
**forfiningshierarkiet** NE ⊇ rasjonaliserbar, SPE, PBE. Emnet er **dobbeltkodet
ECON3220 (bachelor) / ECON4220 (master)** og deler eksamensoppgave;
masterkandidatene bedømmes **strengere på formell stringens** og på
informasjonsøkonomi-delene. Oppgaveteksten er **engelsk**; svar leveres
skandinavisk eller engelsk. Denne boka er kalibrert mot nettopp dette: den
driller **PBE-håndverket** (postulér profil → beliefs via Bayes på stien → frie
beliefs utenfor stien → verifisér sekvensiell rasjonalitet → forfining) til
A-nivå, driller blandet Nash og auksjonslikevekter, gir definisjonssjangeren
et eget forfiningshierarki-kapittel — og holder den klassiske mikroteorien ved
like i en **solid, men sekundær forsikringsblokk (Del 8)**, siden regimeskiftet
hviler på kun tre sett uten sensorbekreftelse og kan reverseres. Bokas
viktigste enkeltferdighet: **konstruere en komplett PBE og bevise/utlede et
resultat formelt** — «Show that …/Demonstrate that …» dominerer oppgaveverbene,
og master krever bevis, ikke bare svar.

**Kritisk to-kode-regel (gjelder HELE boka):** Emnet deles av ECON3220
(bachelor) og ECON4220 (master). Master bedømmes **strengere på formell
stringens**. Boka bygges for master (4220): hvert bevis/utledning føres fullt
ut. Der en deloppgave er «bachelor-mild» (kun intuisjon kreves), markeres det i
Eksamensvinkel-blokken slik at bachelorstudenten kan lese lettere, men
standardsvaret i boka er alltid det formelle. Denne to-kode-forskjellen er
utledet av emnebeskrivelsen, ikke av sensorveiledning → merk `(verifiser)` der
den påberopes som karakterkriterium.

**Kritisk regime-regel (gjelder HELE boka):** Del 1–7 (spillteori +
informasjonsøkonomi + valg under usikkerhet) er **regime B** — det gjeldende
regimet og bokas ryggrad. Del 8 (klassisk mikro: konsument/dualitet,
produsent, GE/velferd) er **regime A** — en **forsikringsblokk** som bar halve
eksamen H2019–H2022, men 0 % siden 2023. Regime B hviler på **kun 3 sett uten
sensorbekreftelse** → boka skal (i) prioritere regime B tungt i omfang og
drill, men (ii) beholde regime A som solid sekundær blokk fordi regimeskiftet
kan reverseres og bacheloravskygningen ECON3220 kan påvirke. Del 0 forklarer
denne balansen for studenten og merker den `(verifiser)`.

**Kritisk notasjonsregel (gjelder HELE boka):** Følg **Jehle & Reny, *Advanced
Microeconomic Theory* (3. utg., 2011)** — hovedreferansen settene siterer
direkte (Thm 9.1 auksjoner, §8.1.3 forsikring). NB: dette betyr at
**konsumgoder heter $x_1, x_2$** (ikke $c_1, c_2$ som i econ2220-boka — nevn
avviket i kap. 0.1 slik at studenter som leser begge bøker ikke forvirres).
Fast notasjon:
- **Spill:** spillere (informert $I$ / uinformert $U$; firmaer $1,2$ eller
  etablert $I$ / inntrenger $E$); typer $\theta$ med prior (f.eks.
  $\Pr(\text{high}) = \tfrac15$); beliefs $p, q$ på likevektsstien og posterior
  $\beta$ utenfor stien; blandede strategier $\sigma$; verdier/valuations
  $v_i \sim U[0,1]$; bud $b_i(v_i)$.
- **Konsument (regime A):** goder $x_1, x_2$; priser $p_1, p_2$; inntekt $m$;
  beholdning $\omega = (\omega_1, \omega_2)$; indirekte nytte $V(p,m)$;
  utgiftsfunksjon $e(p,u)$; Marshall $x_i(p,m)$; Hicks $h_i(p,u)$.
- **Produsent (regime A):** produktfunksjon $y \le f(z_1,z_2)$; faktorpriser
  $w_1, w_2$; betinget faktoretterspørsel $z_i(w,y)$; kostnadsfunksjon
  $c(w,y)$; profittfunksjon $\pi(p,w)$.
- **Usikkerhet:** vNM-nytte $v(y)$ med $v' > 0, v'' < 0$; forventet nytte $Eu$;
  sikkerhetsekvivalent $CE$; Arrow-Pratt $A(y) = -v''/v'$.

Nøkkelbetingelser i eksamens form: $MRS_{ij} = u'_i/u'_j = p_i/p_j$; Roy
$x_i = -(\partial V/\partial p_i)/(\partial V/\partial m)$; Shephard
$h_i = \partial e/\partial p_i$, $z_i = \partial c/\partial w_i$;
Jensen $E[v(X)] \le v(E[X])$; auksjon andrepris $b = v$ (svakt dominerende),
førstepris uniform $n=2$: $b(v) = v/2$; all-pay: $F$ uniform, forventet gevinst
0 i nedre støttegrense; forfining NE $\supseteq$ rasjonaliserbare, SPE = NE i
alle delspill, PBE = SPE + Bayes-konsistente beliefs.

**Kritisk sjangerregel — «Show that …» (gjelder HELE boka):** Oppgaveverbene
**«Show that …/Demonstrate that …/Verify that …» dominerer**. Sensor krever
**formell utledning/bevis, ikke bare svar** (utledet av åpen-bok-formatet +
master-koden — `(verifiser)`). Alle eksempler og løsningsforslag følger derfor
**bevismalen**: (i) oppgi hva som skal vises og hvilke antakelser/teoremer som
brukes; (ii) før argumentet steg for steg (algebra ELLER logisk deduksjon);
(iii) konkludér eksplisitt at det påståtte er vist, og tolk resultatet
økonomisk. **Vis egenskaper, ikke påstå dem**: «cannot be a cost function»
krever egenskapstest (homogenitet grad 1 / konkavitet i $w$); risikoaversjon
krever $v'' < 0$-argument + Jensen; rasjonaliserbarhet krever iterert
dominans-argument; en PBE krever eksplisitte beliefs + sekvensiell
rasjonalitet. Åpen bok ⇒ **presisjon, ikke gjengivelse**: å sitere et teorem
holder ikke, det skal *brukes* korrekt.

**Kritisk PBE-regel (gjelder Del 4 og alle signaliserings-/typespill):** PBE
konstrueres alltid etter **femstegsmalen** (kap. 4.1, presentert som en
theorem-/prosedyreblokk og gjentatt i hvert signaliseringskapittel): **(1)**
postulér en kandidatprofil (separerende *eller* samlende); **(2)** utled
beliefs *langs likevektsstien* via **Bayes**; **(3)** spesifisér frie, men
eksplisitte beliefs *utenfor stien*; **(4)** verifisér **sekvensiell
rasjonalitet** — ingen type har lønnsomt avvik gitt beliefs; **(5)** avgjør
**forfining** (finnes både separerende og samlende PBE? hvilken overlever
intuitive criterion / er mest rimelig?). Presisjonsfellen boka skal drepe: å
«støtte» en utgang med vilkårlige beliefs utenfor stien uten å sjekke
sekvensiell rasjonalitet — beliefs på stien er bundet av Bayes, kun beliefs
utenfor stien er frie.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer
*omfanget*. Sjangerbokstavene (A–L) er oppgavetype-katalogen fra analysen §3,
gjengitt i Del 0.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og bevishåndverk | 2 | Prioriteringsverktøyet + «Show that»-bevismalen som hele boka står på. Kjerne i studieguiden; begrunner regime B-vektingen og utelatelsene. |
| 1 | Normalformspill: Nash, rasjonaliserbarhet og blandet likevekt | 5 | Sjanger C+K, **5/7 sett**; fundament for alt. Rasjonaliserbarhet (iterert dominans, også blandet), blandet Nash via indifferensprinsippet, oligopol-NE (Cournot/differensiert Bertrand) → nivå 1 → 4 teori + drill. |
| 2 | Ekstensivform, delspill og SPE | 4 | Nivå 1; **prerequisite for PBE**. Spilltrær m/informasjonsmengder, SPE, baklengs induksjon, entry deterrence/troverdige trusler (observerbar) → 3 teori + drill. |
| 3 | Bayesianske spill og ufullstendig informasjon | 2 | Sjanger E, **2–3/7** (H2019, H2021); bro til PBE-caset og til auksjoner med privatverdier. Typer/priors/Harsanyi + BNE ex ante/interim → nivå 2 → 2 kap. |
| 4 | Perfekt Bayesiansk likevekt og signalisering | 7 | **SIGNATUREN.** Sjanger A+B, **6/7 sett**, kjernen i alle regime B-settene. PBE-femstegsmalen, separerende, samlende + forfining, entry deterrence m/typer (H2023), signaliseringsanvendelser (H2019/H2025), forfiningshierarki-/definisjonssjanger + drill → nivå 1, STØRST del → 6 teori/def + drill. |
| 5 | Auksjoner | 4 | Sjanger D, **3/7**, men bar **90 % av H2024** alene. Andrepris (sannferdig bud), førstepris/inntektsekvivalens (Thm 9.1), all-pay (CDF-konstruksjon) → nivå 1 → 3 teori + drill. |
| 6 | Valg under usikkerhet | 2 | Sjanger I, **2/7** (H2019, H2025) og **inngangsporten til H2025-signaliseringscaset**. Forventet nytte/Jensen/Arrow-Pratt + optimal investering m/komparativ statikk → nivå 2 → 2 kap. |
| 7 | Informasjonsøkonomi: ugunstig utvalg og moralsk hasard | 2 | Sjanger J, **1/7** (H2021, ren Jehle & Reny §8.1.3) + moralsk hasard/prinsipal-agent (**0/7**, står i emnebeskrivelsen). Høy verdi-per-side om den kommer → nivå 2/3 → 2 kap. m/drøftingsmodul. |
| 8 | Forsikringsblokk: klassisk mikroøkonomi (regime A) | 4 | Sjanger F+G+H, **4/7 men 0 % siden 2023**. Konsument/dualitet, produsentteori, GE/velferdsteoremene/Ramsey — bar halve eksamen H2019–22, deles med bachelor, kan returnere → nivå 3 «solid forsikring» → 4 kompakte kapitler. |
| 9 | Eksamenstrening | 4 | Åpen drøftingssjanger (regime B-hale, sjanger L) + 3 komplette øvingseksamener (2 regime B, 1 regime A/forsikring). |

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har to kapitler, ikke ett** (eksamenskart + eget bevishåndverks-
   kapittel). Begrunnelse: «Show that …/Demonstrate that …» dominerer
   oppgaveverbene i et dobbeltkodet master-emne; en eksplisitt bevismal er et
   selvstendig verktøy som resten av boka refererer til, ikke bare metastoff.
2. **Drillkapitlene ligger i temadelene sine** (1.5, 2.4, 4.7, 5.4), ikke
   samlet i siste del, fordi normalform, ekstensivform, PBE-caset og auksjoner
   er 3/7–6/7-gjengangere som må drilles rett etter teorien — Del 9 beholder
   den tverrgående drøftingssjangeren og øvingseksamenene.
3. **Del 4 (PBE + signalisering) er bevisst overdimensjonert til 7 kapitler**
   (DNA anbefaler splitt over ~7). Begrunnelse: dette er signaturoppgaven i
   6/7 sett og *hele* tyngdepunktet i regime B. Ved bygging skal delen
   **splittes på to agenter** (4.1–4.4 og 4.5–4.7), begge med HELE delens
   kontrakter, og flagges for konsistenssjekk (jf. PRODUKSJONSLOYPE fase 4).
4. **Forfiningshierarkiet (definisjonssjangeren) ligger som kapittel 4.6, ikke
   egen del**, selv om prompten lister det som eget makrosteg. Begrunnelse:
   definisjonssjangeren («definér NE/SPE/PBE og hvordan de henger sammen»)
   refererer til *alle* forfiningsnivåene — rasjonaliserbarhet (Del 1), SPE
   (Del 2) og PBE (Del 4.1–4.5) — og kan derfor først skrives som capstone
   ETTER PBE. En egen del med ett kapittel ville vært kunstig.
5. **Auksjoner er en egen nivå-1-del (Del 5), ikke gruppert med regime A-GE**
   slik prompten løst antydet. Begrunnelse: auksjoner er **regime B-kjerne**
   (bar 90 % av H2024) og hviler på Bayesianske spill (Del 3) + blandet Nash
   (Del 1), ikke på klassisk likevektsteori. Å legge dem i forsikringsblokken
   ville feilprioritert dem.
6. **Valg under usikkerhet (Del 6) og Bayesianske spill (Del 3) får egne
   deler** selv om prompten ikke listet dem eksplisitt. Begrunnelse:
   analysen §7 nivå 2 (punkt 5 og 6) krever begge; Del 6 er dessuten
   inngangsporten til H2025-signaliseringscaset (kap. 4.5), og Del 3 er
   prerequisite for både PBE-med-typer og privatverdi-auksjoner.
7. **Moralsk hasard/prinsipal-agent og mekanismedesign får ingen egne tunge
   kapitler** til tross for emnebeskrivelsen: de er **aldri testet som egne
   oppgaver** i de 7 arkivsettene. Moralsk hasard dekkes kompakt i kap. 7.2
   («bør kjenne til»); mekanismedesign nevnes kun i kap. 0.1 og 5.2. Denne
   utelatelsen begrunnes eksplisitt for studenten i kap. 0.1.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene refererer til
oppgavetype-katalogen (Del 0, fra analysen §3): **A** definisjon m/relasjonskart
(forfiningshierarki), **B** ekstensivform/SPE/PBE separerende vs. pooling
(signatur), **C** normalform rasjonaliserbarhet + blandet Nash, **D** auksjoner,
**E** Bayesianske spill/BNE, **F** konsumentteori/dualitet, **G** produsentteori,
**H** GE/velferd/skatt, **I** valg under usikkerhet, **J** ugunstig
utvalg/screening, **K** oligopol som spill, **L** åpen drøfting. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og bevishåndverk

#### Kapittel 0.1: Eksamenskartet: slik testes ECON4220

- **id:** `econ4220-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, regimeskiftet H2023, temafrekvensene, forfiningshierarkiet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 ordinære sett H2019–H2025. Skal gjengi: **(i) formen:** 3 timers digital skoleeksamen (Inspera), **åpen bok** (alle hjelpemidler → presisjon, ikke gjengivelse), fritekst + digitale skisseark (spilltrær m/informasjonsmengder, indifferenskurver, konkavitetskorde forventes tegnet), engelsk oppgavetekst / svar skandinavisk eller engelsk, karakter A–F, obligatorisk semesteroppgave må være godkjent; **oppgitte prosentvekter skal følges**, deloppgaver innad teller ofte likt («equal weight»). **(ii) to-koden:** ECON3220 (bachelor) / ECON4220 (master) deler oppgave; master bedømmes strengere på formell stringens og informasjonsøkonomi `(verifiser)`. **(iii) regimeskiftet H2023:** klassisk mikroteori (konsument/produsent/GE) bar ~50 % av hvert sett H2019–H2022, men **0 av 3 sett H2023–H2025**; spillteori + informasjonsøkonomi er nå HELE eksamen. **(iv) de to malene:** *bred mikro-mal* H2019–22 (P1 mikroteori 50 % + P2 spill/info 50 %) vs. *spill/info-mal* H2023–25 (4–7 tyngre oppgaver, fast definisjonsåpning ~10 %, ofte en åpen drøftingshale); vektingshistorikk H2023 10/10/10/20/10/30/10, H2024 10/20/40/30 (all-pay-tung), H2025 10/30/40/20 (signaliserings-tung). **(v) temafrekvens-tabellen** (7 sett): ekstensivform/SPE/PBE separerende vs. pooling **6/7 = 86 %** (kjernen), normalform rasjonaliserbarhet + blandet Nash **5/7**, definisjonsåpning m/forfiningshierarki **4/7 (3/3 i regime B)**, konsument/dualitet **4/7 (0 % siden 2023)**, GE/velferd **4/7 (0 % siden 2023)**, auksjoner **3/7 (90 % av H2024)**, produsentteori **3/7 (0 % siden 2023)**, Bayesianske spill/BNE **2–3/7**, valg under usikkerhet **2/7**, adverse selection/screening **1/7**, moralsk hasard/prinsipal-agent/mekanismedesign **aldri testet**. **(vi) sensorens metaregler** (utledet, ikke sensorbekreftet — `(verifiser)`): «Show that …» krever bevis/utledning ikke bare svar; beliefs skal spesifiseres, ikke antas; tegn det som bes om (figur er del av svaret); vis egenskaper, ikke påstå dem; følg vekting og «equal weight». **(vii) evidensadvarselen:** ingen sensorveiledning i arkivet; regime B hviler på 3 sett → boka bygges for regime B, men holder regime A som forsikring.
- **Innholdskontrakt:** Oppgavetype-katalogen **A–L** presenteres som studentens sjekkliste med frekvens per sjanger (A 4/7, B 6/7, C 5/7, D 3/7, E 2–3/7, F 4/7 [regime A], G 3/7 [regime A], H 4/7 [regime A], I 2/7, J 1/7, K 2/7, L ny hale regime B). **Begrunnelse for utelatelsene** (studenten skal slippe å lure): moralsk hasard/prinsipal-agent og mekanismedesign står i emnebeskrivelsen, men er aldri testet som egne oppgaver → behandles kompakt (kap. 7.2), ikke som kjerne; klassisk konsument/produsent/GE er 0 % siden 2023, men beholdes som Del 8-forsikring fordi regimeskiftet kan reverseres. **Prognose H2026** (moderat sikkerhet — `(verifiser)`): mest sannsynlig 4 tyngre oppgaver — (1) definisjonsåpning ~10 % (NE/SPE/PBE eller risiko/beliefs); (2) et normalform-/oligopol- *eller* auksjonsspill (blandet NE, all-pay eller førstepris); (3) et stort **PBE-case** 30–40 % (signalisering eller entry deterrence m/typer, separerende + pooling); (4) åpen drøftingshale om asymmetrisk informasjon/signalisering. Restrisiko: klassisk mikro returnerer som Problem 1. **Leseplan:** Del 1–5 «må perfekt» (spill + auksjoner), Del 6–7 «må kunne» (usikkerhet + info-økonomi), Del 8 «bør kjenne» (regime A-forsikring); regime A-kandidater / bachelor prioriterer Del 8 høyere.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 10/30/40/20 og 180 minutter — sett opp tidsbudsjett per oppgave når deloppgavene teller likt».
- **Typiske feil:** Metafeilene — levere svar der «Show that» krever bevis; pugge regime A på bekostning av PBE/auksjoner; behandle regimeskiftet som sikkert permanent (kun 3 sett); tro at åpen bok betyr at gjengivelse holder.
- **Quiz: 12 · Flashcards: 14** (form, regime, frekvenser, metaregler)

#### Kapittel 0.2: Bevishåndverket: å svare på «Show that …»

- **id:** `econ4220-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4220-0-1`
- **Kapitteltype:** metode (bevis/utledning)
- **description:** Den generelle svarmalen for «Show that …/Demonstrate that …/Verify that …»-oppgaver — bokas arbeidshest før spillteorien starter.
- **Eksamensbelegg:** Metakapittel uten egen frekvens, men pålagt av det dominerende oppgaveverbet: «Show that …/Demonstrate that …» i praktisk talt hver deloppgave, og master bedømmes strengere på formell stringens `(verifiser)`. Bevismalen brukes i ALLE senere kapitler (blandet Nash-eksistens, BNE, PBE-konstruksjon, auksjonslikevekt, egenskapstester, Jensen). Prioritet: **perfekt** (leses av alle først).
- **Innholdskontrakt:** **Bevismalen i tre steg** med intuisjon per steg: (1) oppgi *hva* som skal vises + hvilke antakelser/definisjoner/teoremer du støtter deg på (åpen bok ⇒ navngi teoremet presist — f.eks. «ved indifferensprinsippet …», «ved Bayes …», «ved Thm 9.1 …»); (2) før argumentet steg for steg — algebraisk utledning (FOC, envelope, implisitt derivasjon) ELLER logisk deduksjon (ingen lønnsom avvik ⇒ likevekt); (3) konkludér eksplisitt «altså er … vist» og tolk økonomisk. **De fire bevis-arketypene i emnet:** (a) **konstruktivt** («vis at en (BNE/PBE) finnes» → oppgi profilen og verifisér ingen avvik); (b) **egenskapstest** («vis at dette *ikke kan* være en kostnadsfunksjon» → test homogenitet/konkavitet; «vis risikoaversjon» → $v'' < 0$ + Jensen); (c) **karakterisering** («vis at likevektsbudet er $b(v)=v/2$» → sett opp forventet gevinst, deriver, løs FOC); (d) **ekvivalens/relasjon** («vis at NE ⊆ …» → to inklusjonsargumenter). **Presisjonsreglene:** vis egenskaper — ikke påstå dem; oppgi antakelser eksplisitt; tegn figuren som bes om og forklar den i ord (figur ledsager, aldri erstatter, utledningen); ved BNE/PBE: strategier UTEN beliefs er ufullstendige. **Notasjonsdisiplin:** følg Jehle & Reny-notasjonen (kap. 1s notasjonsregel).
- **Oppgavesjangre:** Fundament for alle sjangre. 4–5 «oversett kravet»-oppgaver: gitt en «Show that …»-formulering, identifisér hvilken av arketypene (a)–(d) den er, og skisser bevisstrukturen før du regner.
- **Typiske feil:** Levere sluttsvaret uten argumentet; sitere et teorem uten å bruke det; hoppe over antakelsene («i.i.d., symmetri, risikonøytralitet» for inntektsekvivalens); erstatte utledning med figur; påstå en egenskap uten test.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Normalformspill: Nash, rasjonaliserbarhet og blandet likevekt *(prioritet: PERFEKT — fundament, 5/7 sett)*

#### Kapittel 1.1: Normalform, Nash-likevekt og beste svar

- **id:** `econ4220-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-0-2`
- **Kapitteltype:** teori
- **description:** Normalformspillet, beste-svar-korrespondansen og Nash-likevekten (NE) presist definert — grunnmuren for alt annet.
- **Eksamensbelegg:** Sjanger C-fundament (5/7 sett). Beste-svar-funksjon og NE er byggeklosser i H2019/H2020/H2022 (3×3-matriser), H2021 (Cournot-BNE) og H2023 (differensiert Bertrand). Forkunnskap fra bachelor kan antas, men boka etablerer presis notasjon (Jehle & Reny). Prioritet: **perfekt**.
- **Innholdskontrakt:** Normalformspillet $\langle N, (S_i), (u_i)\rangle$: spillere, strategimengder, payoff-funksjoner. **Beste-svar-korrespondansen** $BR_i(s_{-i}) = \arg\max_{s_i} u_i(s_i, s_{-i})$. **Nash-likevekt definert presist:** en profil $s^*$ der $s_i^* \in BR_i(s_{-i}^*)$ for alle $i$ — ingen spiller har lønnsomt ensidig avvik. Beste-svar-metoden i matrisen (marker beste svar per rad/kolonne, NE der markeringene møtes). Standardeksempler: fangens dilemma, koordinasjonsspill, «matching pennies» (ingen ren NE → motiverer blandet). Kontinuerlige strategirom (forspill til Cournot/Bertrand kap. 1.4): NE via simultane FOC-er. Kort kobling til bachelor-repetisjon (lenk [Statisk spillteori: Nash, dominans og rasjonaliserbarhet](/econ2220/econ2220-7-1) som mykere inngang — `(verifiser lenke)`).
- **Oppgavesjangre:** C-fundament. Mønstereksempel (omskrevet): «To strømmetjenester velger samtidig mellom tre abonnementsnivåer. Sett opp payoff-matrisen fra teksten, finn alle rene Nash-likevekter ved beste-svar-analyse, og forklar presist hvorfor en profil er NE.»
- **Typiske feil:** Definere NE upresist («det beste for begge» — nei: gjensidig beste svar); blande NE med Pareto-optimalitet; finne bare én NE når flere finnes; glemme at matching-pennies-typer ikke har ren NE.
- **Quiz: 22 · Flashcards: 30**

#### Kapittel 1.2: Iterert dominans og rasjonaliserbarhet

- **id:** `econ4220-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-1-1`
- **Kapitteltype:** teori
- **description:** Iterert eliminasjon av strengt dominerte strategier, rasjonaliserbare strategier — og den kritiske dominansen ved blandede strategier.
- **Eksamensbelegg:** Sjanger C: «finn de rasjonaliserbare strategiene» er fast del av matriseoppgavene (H2019, H2020, H2022) og etterspørres eksplisitt i H2021 2b som del av regneoppgaven. Dokumentert presisjonskrav: dominans kan skje ved *blandede* strategier — en strategi som ikke domineres av noen ren strategi kan domineres av en blanding. Prioritet: **perfekt**.
- **Innholdskontrakt:** Strengt vs. svakt dominerte strategier; **iterert eliminasjon av strengt dominerte strategier** (IESDS) — vis rekkefølgen eksplisitt, og at resultatet er uavhengig av elimineringsrekkefølge for streng dominans. **Rasjonaliserbarhet:** strategier som overlever iterert eliminasjon (i to-spiller-spill sammenfaller rasjonaliserbare = overlever IESDS). **Dominans ved blandet strategi** (kjernepoenget, eget gjennomregnet eksempel): en ren strategi $s_i$ kan være strengt dominert av en blanding $\sigma_i$ selv om ingen ren strategi dominerer den — sett opp ulikheten $u_i(\sigma_i, s_{-i}) > u_i(s_i, s_{-i})$ for alle $s_{-i}$ og løs for miksesannsynlighetene. Relasjonen **NE ⊆ rasjonaliserbare strategier** (forspill til forfiningshierarkiet kap. 4.6). Skillet rasjonaliserbar (individuell rasjonalitet + felles kunnskap om rasjonalitet) vs. Nash (gjensidig konsistente forventninger).
- **Oppgavesjangre:** C. Mønstereksempel (omskrevet): «Gitt en 3×3-payoff-matrise: (a) finn de rasjonaliserbare strategiene ved iterert eliminasjon — sjekk også om en strategi domineres av en blanding; (b) forklar hvorfor mengden rasjonaliserbare strategier inneholder alle Nash-likevekter.»
- **Typiske feil:** Blande rasjonaliserbar og Nash; overse dominans ved blandet strategi (dokumentert felle); eliminere svakt dominerte som om de var strengt (rekkefølgeavhengig); stoppe elimineringen for tidlig.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 1.3: Blandet Nash-likevekt og indifferensprinsippet

- **id:** `econ4220-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4220-1-2`
- **Kapitteltype:** teori
- **description:** Blandede strategier, forventet payoff og indifferensprinsippet: velg *egne* sannsynligheter så *motparten* blir indifferent.
- **Eksamensbelegg:** Sjanger C: entydig blandet NE er standardkrav i 3×3-oppgavene (H2019, H2020, H2022); all-pay-auksjonen (H2024) er en blandet likevekt i kontinuerlig strategirom (kap. 5.3 bygger på dette). Dokumentert felle: å regne blandet NE fra *egne* gevinster i stedet for å gjøre motparten indifferent. Prioritet: **perfekt**.
- **Innholdskontrakt:** Blandet strategi $\sigma_i$ som sannsynlighetsfordeling over rene strategier; forventet payoff. **Indifferensprinsippet** (bokas kjerneoppskrift): i en blandet NE må hver spiller være **indifferent** mellom alle rene strategier hun spiller med positiv sannsynlighet — derfor bestemmes *dine* miksesannsynligheter av kravet om at *motparten* blir indifferent (ikke av dine egne gevinster). Steg for steg: identifisér støtten (hvilke rene strategier inngår); sett motpartens forventede payoff for hver ren strategi i støtten lik hverandre; løs for sannsynlighetene; verifisér at ingen utelatt strategi gir høyere payoff. **Eksistens:** Nash' teorem (endelig spill ⇒ minst én NE i blandede strategier) — oppgis som resultat, med intuisjon (Kakutani), ikke fullt bevis. Blandet NE i 2×2 (matching pennies) og i 3×3 med delvis støtte. Tolkning av blandet likevekt (uforutsigbarhet; populasjonstolkning).
- **Oppgavesjangre:** C. Mønstereksempel (omskrevet): «I et 2×2-spill mellom en angriper og en forsvarer finnes ingen ren NE. Finn den entydige blandede likevekten ved indifferensprinsippet, og forklar hvorfor forsvarerens sannsynligheter bestemmes av angriperens payoff-tall, ikke av forsvarerens egne.»
- **Typiske feil:** Regne miks fra egne gevinster (dokumentert felle); glemme å verifisere at utelatte strategier ikke lønner seg; feil støtte; behandle blandet NE som «tilfeldig valg» uten indifferensbegrunnelse.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 1.4: Oligopol som normalformspill: Cournot og differensiert Bertrand

- **id:** `econ4220-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-1-3`
- **Kapitteltype:** teori
- **description:** Kontinuerlige normalformspill: utled beste-svar-funksjonene fra profittfunksjonene og løs simultant for Nash-likevekten.
- **Eksamensbelegg:** Sjanger K: Cournot-BNE (H2021 — utled reaksjonsfunksjon fra profittfunksjonen, be eksplisitt om utledningen), differensiert Bertrand (H2023 — demonstrér oppgitt lukket løsning $p_I = \tfrac13(3 + 2c_I + c_E)$ og bruk den videre til fixed-cost-/entry-analyse). Prioritet: **perfekt** (nær knyttet til entry-caset i Del 2/4).
- **Innholdskontrakt:** **Cournot** (kvantumskonkurranse): invers etterspørsel $P(Q)$, profitt $\pi_i = P(q_i + q_j)q_i - c(q_i)$; **utled reaksjonsfunksjonen** $q_i = BR(q_j)$ eksplisitt fra FOC (vis utledningen — dokumentert krav); løs simultant for symmetrisk NE; koble til rasjonaliserbart sett (iterert eliminasjon konvergerer mot Cournot-punktet i lineær modell). **Differensiert Bertrand** (priskonkurranse med differensierte produkter): etterspørsel $q_i = a - p_i + \gamma p_j$; profitt; FOC → beste-svar i priser; løs simultant → **demonstrér den oppgitte lukkede løsningen** (bevismal-arketype (c) karakterisering). Bruk løsningen videre til fixed-cost-/inntjeningsanalyse (bro til entry deterrence, kap. 2.3). Sammenlikning Cournot vs. Bertrand (kort). **Bayesiansk Cournot** (bro til Del 3): når en bedrift er usikker på motpartens grensekostnad, blir dette et Bayesiansk spill (kap. 3.2 fullfører).
- **Oppgavesjangre:** K + C. Mønstereksempel (omskrevet): «To bedrifter konkurrerer i differensierte priser med etterspørsel $q_i = 10 - 2p_i + p_j$ og grensekostnad $c_i$. Utled beste-svar-funksjonene fra profittmaksimering, og demonstrér at likevektsprisene har den oppgitte formen. Bruk deretter likevektsprofitten til å avgjøre om en inntrenger med fast kostnad $F$ vil gå inn.»
- **Typiske feil:** Oppgi reaksjonsfunksjonen uten utledning (dokumentert krav om å vise den); derivere mhp. feil variabel; blande Cournot- og Bertrand-logikk; regne likevekt uten å sjekke at andreordensbetingelsen holder.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.5: Drill: normalformoppgaven

- **id:** `econ4220-1-5` · **number:** 1.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ4220-1-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på normalformoppgaven: fra matrise eller etterspørsel til rasjonaliserbart sett, blandet NE og oligopol-NE — full A-besvarelse.
- **Eksamensbelegg:** Dekker sjanger C (5/7) og K (2/7). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) les av spillet (matrise eller kontinuerlig); 2) IESDS → rasjonaliserbart sett (sjekk blandet dominans); 3) finn alle rene NE ved beste svar; 4) finn blandet NE via indifferensprinsippet (identifisér støtte → gjør motparten indifferent → verifisér); 5) for oligopol: utled reaksjonsfunksjoner → løs simultant; 6) konkludér og tolk. Gjennomregnet eksamenscase (3×3 + Cournot-variant) med sensor-margnotater (hva som gir uttelling: eksplisitt eliminering, indifferensligning satt opp riktig, utledet reaksjonsfunksjon). **10–14 oppgaver på eksamensnivå** som roterer: 2×2 vs. 3×3, ren + blandet NE, blandet-dominans-varianter, Cournot- og differensiert-Bertrand-varianter — nyskrevne tall og kontekster (auksjonshus, teleoperatører, flyselskaper).
- **Oppgavesjangre:** C, K i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Finn de rasjonaliserbare strategiene. (b) Finn alle rene NE. (c) Finn den blandede NE. (d) Reformuler som Cournot-spill og finn kvantumslikevekten.»
- **Typiske feil:** Hele §1-repertoaret samlet: blande rasjonaliserbar/Nash; miks fra egne gevinster; overse blandet dominans; oppgi reaksjonsfunksjon uten utledning.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A Nash + beste svar i matrise, sjanger C-fundament; 1.B iterert dominans + rasjonaliserbarhet inkl. blandet dominans, sjanger C; 1.C blandet NE via indifferensprinsippet + eksistens, sjanger C; 1.D oligopol-NE — Cournot- og differensiert-Bertrand-utledning på eksamensnivå, sjanger K).

---

### Del 2 — Ekstensivform, delspill og SPE *(prioritet: PERFEKT — prerequisite for PBE)*

#### Kapittel 2.1: Ekstensivform: spilltrær, informasjonsmengder og strategier

- **id:** `econ4220-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ4220-1-1`
- **Kapitteltype:** teori
- **description:** Spilltreet som modell: noder, handlinger, informasjonsmengder — og hvorfor en strategi er en komplett handlingsplan.
- **Eksamensbelegg:** Ekstensivform er byggeklossen i sjanger B (6/7 sett) — alle SPE-/PBE-oppgaver starter med et spilltre; H2023 (entry SPE + PBE m/typer), H2019/H2022/H2025 (signaliseringstrær). Digitale skisseark forventes til trærne (informasjonsmengder tegnes). Prioritet: **perfekt**.
- **Innholdskontrakt:** Ekstensivform: beslutningsnoder, handlingskanter, terminalnoder m/payoffs, spiller-tilordning; **informasjonsmengder** (hvilke noder en spiller ikke kan skille) — perfekt vs. ufullkommen informasjon; naturens trekk (chance nodes) som forspill til typer (Del 3). **Strategi = komplett plan** (én handling per informasjonsmengde) → **strategitelling med produktregelen** (antall strategier = produkt av handlingsvalg over informasjonsmengdene; regn typetall). **Delspill (subgame):** en node hvis informasjonsmengde er en singleton, med alt som følger, som utgjør et eget spill. Fra ekstensiv til normalform (payoff-matrisen til treet) og tilbake. Tegneregler for spilltrær m/informasjonsmengder (figurbeskrivelse i ord — del av svaret).
- **Oppgavesjangre:** B-fundament. Mønstereksempel (omskrevet): «Tegn spilltreet for et to-trinns marked der en inntrenger først velger inn/ut og den etablerte deretter svarer, men ikke observerer inntrengerens kapasitetsvalg. Marker informasjonsmengdene, tell hver spillers strategier, og identifisér delspillene.»
- **Typiske feil:** Feiltelle strategier (glemme produktregelen); kalle en node med ikke-singleton informasjonsmengde et delspill; blande handling og strategi; utelate informasjonsmengder i treet.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 2.2: Delspillperfekt likevekt og baklengs induksjon

- **id:** `econ4220-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-2-1`
- **Kapitteltype:** teori
- **description:** SPE som NE i alle delspill, baklengs induksjon i perfekt-informasjonsspill — og hvorfor ikke-troverdige trusler ryker.
- **Eksamensbelegg:** Sjanger B: SPE via baklengs induksjon er kjernen i H2023 Q4 (entry SPE, observerbar investering) og forstadiet til PBE i alle signaliseringssettene. Dokumentert skille: observerbar (SPE, «E går ikke inn») vs. uobserverbar investering (H2023 Q5 — likevekt der E går inn kan ikke utelukkes). Prioritet: **perfekt**.
- **Innholdskontrakt:** **SPE definert:** en strategiprofil som induserer en NE i *hvert* delspill. **Baklengs induksjon** i endelige perfekt-informasjonsspill: løs fra terminalnodene og oppover; Zermelos resultat (eksistens). **Ikke-troverdige trusler/løfter:** en NE kan hvile på en trussel spilleren ikke ville gjennomført om noden ble nådd — SPE eliminerer disse (gjennomregnet inntrengningsspill). **Stackelberg som SPE** (bro fra kap. 1.4): leder binder seg først, følgeren spiller beste svar; leders fordel. **Observerbarhets-skillet** (forberedelse til kap. 4.4): når et trekk er observerbart løses det med SPE; når det er skjult må vi til PBE (Del 4) — H2023-caset (observerbar entry deterrence Q4 vs. uobserverbar Q5) forhåndsvarsles her.
- **Oppgavesjangre:** B. Mønstereksempel (omskrevet): «En etablert bedrift kan bygge overkapasitet før en inntrenger bestemmer seg. Finn SPE ved baklengs induksjon når kapasiteten er observerbar, og konstruer en Nash-likevekt som ikke er delspill-perfekt — hva er den ikke-troverdige trusselen? Forklar hvorfor konklusjonen endres hvis kapasiteten er skjult.»
- **Typiske feil:** «Finne» SPE uten baklengs induksjon; beholde ikke-troverdige trusler; behandle skjult trekk som observerbart (dokumentert felle — krever PBE, ikke SPE); blande NE og SPE.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.3: Entry deterrence og troverdige forpliktelser

- **id:** `econ4220-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4220-2-2`, `econ4220-1-4`
- **Kapitteltype:** teori
- **description:** Inntrengningsspillet under fullstendig informasjon: forpliktelse, avskrekking og hvorfor en trussel må være i egeninteresse for å virke.
- **Eksamensbelegg:** Sjanger B/K: entry SPE med fast kostnad (H2023 Q3–Q4 — fixed-cost-analyse fra differensiert-Bertrand-profitten, entry SPE observerbar). Broen til den ufullstendige-informasjons-versjonen (kap. 4.4) — H2023 Q6. Prioritet: **perfekt**.
- **Innholdskontrakt:** Inntrengningsspillet: inntrenger velger inn/ut, etablert velger imøtekomme/kjempe; payoff-strukturen; SPE-utfallet under fullstendig informasjon (imøtekomme er troverdig ⇒ E går inn). **Forpliktelse (commitment):** irreversible investeringer (kapasitet, FoU) som endrer den etablertes fremtidige beste svar → gjør «kjempe» troverdig → avskrekker. Kobling til kap. 1.4: bruk likevektsprofitten fra differensiert Bertrand med fast kostnad $F$ til å avgjøre om inntrenger går inn. **Limit pricing** (kort) som forpliktelse. **Broen til ufullstendig informasjon:** når inntrenger er usikker på den etablertes kostnadstype, blir avskrekking et *signaliseringsproblem* — den etablerte kan «bløffe» aggressivt for å se lavkost ut (kap. 4.4 fullfører med PBE). Presis lesing av observerbarhet (SPE) vs. skjulthet (PBE).
- **Oppgavesjangre:** K + B (bro). Mønstereksempel (omskrevet): «En etablert operatør kan investere i et irreversibelt distribusjonsnett før en inntrenger velger inn/ut. Vis at investeringen kan gjøre 'priskrig' til et troverdig svar, og at inntrengeren derfor holder seg ute — mens en tom trussel om priskrig uten investering ikke avskrekker.»
- **Typiske feil:** Behandle en tom trussel som avskrekkende (uten forpliktelse); glemme at forpliktelsen må endre *fremtidig* beste svar; blande observerbar og skjult investering; regne entry-beslutningen uten å bruke likevektsprofitten fra kap. 1.4.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.4: Drill: ekstensivform-oppgaven

- **id:** `econ4220-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ4220-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på ekstensivform: fra spilltre til strategitelling, baklengs induksjon, SPE og troverdighetsanalyse.
- **Eksamensbelegg:** Dekker sjanger B (SPE-delen, forstadiet til 6/7) og K. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) tegn/les treet, marker informasjonsmengder; 2) tell strategier (produktregelen); 3) identifisér delspill; 4) baklengs induksjon → SPE; 5) konstruer en ikke-delspill-perfekt NE og pek på den ikke-troverdige trusselen; 6) analysér forpliktelse/observerbarhet. Gjennomregnet inntrengnings-/Stackelberg-case med sensor-margnotater. **8–12 oppgaver på eksamensnivå**: to- og tre-trinns spill, strategitelling-varianter, entry deterrence med fast kostnad, Stackelberg — nyskrevne tall.
- **Oppgavesjangre:** B (SPE), K. Mønstereksempel: full deloppgave-kjede tre → telling → SPE → troverdighet → observerbarhets-forbehold.
- **Typiske feil:** Strategitelling; ikke-troverdige trusler beholdt; SPE uten baklengs induksjon; observerbarhets-forvekslingen.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A ekstensivform + strategitelling + delspill-identifikasjon, sjanger B-fundament; 2.B SPE via baklengs induksjon + ikke-troverdig trussel, sjanger B; 2.C entry deterrence m/forpliktelse + fixed-cost fra Bertrand, sjanger K + B; 2.D blandet ekstensivform-prøve på eksamensnivå m/observerbarhets-skillet, sjanger B + K).

---

### Del 3 — Bayesianske spill og ufullstendig informasjon *(prioritet: KUNNE — 2–3/7, bro til PBE og auksjoner)*

#### Kapittel 3.1: Ufullstendig informasjon: typer, priors og Harsanyi-transformasjonen

- **id:** `econ4220-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ4220-1-3`
- **Kapitteltype:** teori
- **description:** Fra ufullstendig informasjon til Bayesiansk spill: typer, prior-fordelinger og naturens trekk som modelleringsknep.
- **Eksamensbelegg:** Sjanger E-fundament: H2019 (informert $I$ vs. uinformert $U$, 50/50-type), H2021 (firma 1 usikker på $c_2 \in \{12, 24\}$). Priors og typer er også grunnlaget for PBE-caset (Del 4) og privatverdi-auksjoner (Del 5). Prioritet: **kunne**.
- **Innholdskontrakt:** Ufullstendig informasjon (usikkerhet om payoffs) vs. ufullkommen informasjon (usikkerhet om trekk); **Harsanyi-transformasjonen:** modellér ufullstendig informasjon ved at *naturen* først trekker hver spillers **type** $\theta_i$ fra en **prior** som er felles kunnskap; hver spiller kjenner egen type, ikke motpartens. **Bayesiansk spill** $\langle N, (S_i), (\Theta_i), (p_i), (u_i)\rangle$. Beliefs som betingede fordelinger over motpartens type. Eksempel: en bedrift kjenner egen kostnad, ikke konkurrentens (to mulige verdier m/prior). Forventet payoff over motpartens type. Forberedelse til to løsningsmåter (kap. 3.2): ex ante (hver type som «egen spiller») og interim (hver type maksimerer forventet payoff).
- **Oppgavesjangre:** E-fundament. Mønstereksempel (omskrevet): «En leverandør kan ha lav eller høy kostnad (prior 60/40); konkurrenten kjenner ikke kostnaden. Modellér situasjonen som et Bayesiansk spill: angi typer, prior, strategirom og hvordan payoff avhenger av type.»
- **Typiske feil:** Behandle en type-avhengig strategi som om alle typer spiller likt; glemme at prioren er felles kunnskap; blande usikkerhet om payoff (type) og usikkerhet om trekk (informasjonsmengde).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Bayesiansk Nash-likevekt: ex ante og interim

- **id:** `econ4220-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-3-1`
- **Kapitteltype:** teori
- **description:** BNE i to ekvivalente formuleringer: hver type spiller beste svar mot forventningen over motpartens type.
- **Eksamensbelegg:** Sjanger E: H2019 (ex ante — informert/uinformert, sett opp Bayesiansk normalform, finn NE), H2021 g–j (interim — uinformert firmas forventede profitt, type-betinget beste svar for informert firma, løs BNE). Cournot under kostnadsusikkerhet. Prioritet: **kunne** (nær knyttet til PBE-caset og privatverdi-auksjoner).
- **Innholdskontrakt:** **BNE definert:** en profil av type-betingede strategier $s_i(\theta_i)$ der hver type spiller beste svar gitt beliefs om motpartens type. **Ex ante-formuleringen:** behandl hver type som en «egen spiller», sett opp Bayesiansk normalform, finn NE. **Interim-formuleringen:** hver type $\theta_i$ maksimerer $E_{\theta_{-i}}[u_i(s_i, s_{-i}(\theta_{-i}), \theta_i)]$ → type-betinget beste svar → påtving gjensidig konsistens → løs likningssystemet. **Gjennomregnet Bayesiansk Cournot** (fra kap. 1.4): firma 1 usikkert på firma 2s grensekostnad ($c_2 \in \{c_L, c_H\}$ m/prior); firma 2 spiller type-betinget kvantum, firma 1 forventet beste svar; løs de tre likningene. Ekvivalensen ex ante ↔ interim. Bro til PBE: i statiske Bayesianske spill er beliefs eksogene (prioren); i dynamiske spill oppdateres de (kap. 4).
- **Oppgavesjangre:** E. Mønstereksempel (omskrevet): «To bedrifter velger kvantum. Firma 2 har grensekostnad $c_L$ med sannsynlighet $\alpha$, ellers $c_H$; firma 1 kjenner ikke kostnaden. Utled firma 2s type-betingede beste svar og firma 1s forventede beste svar, og løs for den Bayesianske Nash-likevekten. Vis mellomregningene.»
- **Typiske feil:** Behandle alle typer likt; glemme å ta forventning over motpartens type; blande ex ante og interim uten å se ekvivalensen; regnefeil i likningssystemet.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 3:** 4 prøver (3.A modellér ufullstendig informasjon som Bayesiansk spill, sjanger E-fundament; 3.B BNE ex ante i diskret spill, sjanger E; 3.C BNE interim — Bayesiansk Cournot, sjanger E; 3.D blandet BNE-prøve på eksamensnivå, sjanger E + K).

---

### Del 4 — Perfekt Bayesiansk likevekt og signalisering *(prioritet: PERFEKT — SIGNATUREN, 6/7 sett)*

> **Byggemerknad:** Denne delen er bokas tyngdepunkt og skal splittes på to
> agenter ved bygging (4.1–4.4 og 4.5–4.7), begge med HELE delens kontrakter;
> flagg for konsistenssjekk (fase 6). PBE-femstegsmalen (kap. 4.1) skal gjentas
> som referanse i 4.2–4.5.

#### Kapittel 4.1: Perfekt Bayesiansk likevekt: beliefs og sekvensiell rasjonalitet

- **id:** `econ4220-4-1` · **number:** 4.1 · **estimatedMinutes:** 65 · **prerequisites:** `econ4220-2-2`, `econ4220-3-2`
- **Kapitteltype:** teori (kjerne — femstegsmalen)
- **description:** PBE presist: en profil PLUSS et beliefs-system, der beliefs følger Bayes på stien og strategiene er sekvensielt rasjonelle. Femstegsmalen etableres her.
- **Eksamensbelegg:** Sjanger B — kjernehåndverket i 6/7 sett. PBE-caset (postulér → Bayes-beliefs → sekvensiell rasjonalitet → forfining) er signaturen: H2019 (forsikring D/N), H2022 (separerende + pooling), H2023 Q6 (entry m/typer), H2025 Q3 (venturekapital). Definisjonsåpningen (H2023 Q1) ber om relasjonen NE/SPE/PBE. Prioritet: **perfekt** (bokas viktigste kapittel).
- **Innholdskontrakt:** **PBE definert:** et par (strategiprofil $\sigma$, beliefs-system $\mu$) slik at (i) strategiene er **sekvensielt rasjonelle** gitt beliefs (hver spiller spiller beste svar ved hver informasjonsmengde gitt $\mu$), og (ii) beliefs er **konsistente med Bayes** langs likevektsstien. **Femstegsmalen presentert som en theorem-/prosedyreblokk** (plattformens `theorem`-blokk, gjentas i 4.2–4.5): **(1)** postulér en kandidatprofil (separerende ELLER samlende); **(2)** utled beliefs på likevektsstien via **Bayes** $\mu(\theta \mid m) = \frac{p(\theta)\sigma(m\mid\theta)}{\sum_{\theta'} p(\theta')\sigma(m\mid\theta')}$; **(3)** spesifisér **frie, men eksplisitte** beliefs utenfor stien; **(4)** verifisér **sekvensiell rasjonalitet** — ingen type har lønnsomt avvik gitt beliefs og motpartens respons; **(5)** avgjør **forfining** (finnes flere PBE? intuitive criterion). **Relasjonen til SPE:** PBE forfiner SPE ved å legge til Bayes-konsistente beliefs (fullstendig forfiningskart i kap. 4.6). Kort, enkelt signaliseringstre som gjennomgående eksempel (to typer, to meldinger). Beliefs på stien = Bayes (bundet); utenfor stien = frie.
- **Oppgavesjangre:** B — full PBE-konstruksjon. Mønstereksempel (omskrevet): «I et signaliseringsspill med to sendertyper og to meldinger: postulér en separerende profil, utled mottakerens beliefs ved Bayes, spesifisér beliefs etter en avvikende melding, og verifisér at profilen er en PBE ved å sjekke at ingen type vil avvike.»
- **Typiske feil:** Spesifisere strategier uten beliefs (dokumentert #1-felle); sette vilkårlige beliefs utenfor stien for å «støtte» en utgang uten å sjekke sekvensiell rasjonalitet; oppdatere beliefs på stien i strid med Bayes; blande PBE og SPE.
- **Quiz: 24 · Flashcards: 30**

#### Kapittel 4.2: Separerende likevekt i signaliseringsspill

- **id:** `econ4220-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4220-4-1`
- **Kapitteltype:** teori
- **description:** Den separerende PBE: ulike typer sender ulike meldinger, mottaker lærer typen — kostbar signalisering à la Spence.
- **Eksamensbelegg:** Sjanger B: separerende PBE i H2019 (forsikring), H2022 (ren separerende), H2025 (venturekapital — entreprenøren over-investerer $x_H = x_L^0$). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Separerende profil:** hver type velger sin egen melding → mottaker slutter typen fullt ut (beliefs degenererte på stien). Betingelser for at separering er en PBE: **insentivkompatibilitet (IC)** for begge typer (ingen type vil imitere den andre) + mottakerens beste svar gitt full læring. **Single-crossing / kostbar signalisering:** signalet må være billigere for den «gode» typen (ellers ingen troverdig separering) — Spence-logikken (utdanning som signal). Gjennomregnet eksempel: to typer, kontinuerlig signalvalg, utled det separerende signalnivået fra bindende IC. **Venturekapital-varianten** (H2025): entreprenøren **over-investerer** $x_H = x_L^0$ for å skille seg — vis at akkurat-bindende IC bestemmer overinvesteringen. Beliefs utenfor stien og hvordan de opprettholder separering. Effektivitetstap ved kostbar signalisering (kort).
- **Oppgavesjangre:** B. Mønstereksempel (omskrevet): «En gründer med høy- eller lav-kvalitets prosjekt velger hvor mye egenkapital hun beholder som signal til investorer. Finn den separerende PBE: utled signalnivået fra insentivkompatibiliteten, og vis at høykvalitetstypen må over-investere relativt til fullinformasjons-nivået.»
- **Typiske feil:** Hoppe rett til separering uten IC-sjekk; glemme single-crossing (separering krever at signalet er relativt billigere for én type); feil beliefs utenfor stien; ikke vise at overinvesteringen følger av bindende IC.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.3: Samlende likevekt og forfining

- **id:** `econ4220-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4220-4-2`
- **Kapitteltype:** teori
- **description:** Den samlende (pooling) PBE: alle typer sender samme melding, mottaker lærer ingenting — og hvordan intuitive criterion kan luke ut urimelige likevekter.
- **Eksamensbelegg:** Sjanger B: pooling PBE i H2022 (ren pooling ved siden av separerende), H2023 Q6 (pooling ⇒ E går ikke inn), H2025 (pooling krever $\alpha\pi_H + (1-\alpha)\pi_L > \pi^V$). Dokumentert krav: vis at BÅDE separerende og samlende PBE kan finnes, og diskutér hvilken som er mest rimelig når oppgaven spør. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Samlende profil:** alle typer velger samme melding → beliefs på stien = prioren (ingen læring). Betingelser for pooling-PBE: ingen type vil avvike gitt (ugunstige) beliefs utenfor stien + mottakerens beste svar gitt prior-beliefs. **Eksistens av flere PBE:** samme spill kan ha både separerende og samlende PBE — vis begge (H2022-sjangeren). **Poolingbetingelsen** (H2025-varianten): pooling opprettholdes kun når $\alpha\pi_H + (1-\alpha)\pi_L > \pi^V$ — utled og tolk. **Forfining — intuitive criterion (Cho–Kreps):** eliminér pooling-likevekter der en avvikende melding bare kan lønne seg for én type, og mottaker derfor «burde» tro det er den typen — anvend på et eksempel. Når separering er «mest rimelig». Beliefs utenfor stien er nøkkelen: en pooling-PBE hviler på pessimistiske off-path-beliefs.
- **Oppgavesjangre:** B. Mønstereksempel (omskrevet): «I samme signaliseringsspill som forrige kapittel: finn en samlende PBE, angi hvilke beliefs utenfor stien som støtter den, og bruk intuitive criterion til å avgjøre om den overlever. Vis at det også finnes en separerende PBE, og drøft hvilken som er mest rimelig.»
- **Typiske feil:** Bare finne én likevektstype når begge finnes; støtte pooling med vilkårlige off-path-beliefs uten intuitive-criterion-sjekk; glemme poolingbetingelsen; ikke tolke hva ingen læring betyr økonomisk.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.4: Entry deterrence under ufullstendig informasjon

- **id:** `econ4220-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `econ4220-4-3`, `econ4220-2-3`
- **Kapitteltype:** teori
- **description:** Avskrekking som signaliseringsspill: den etablerte bedriftens type er skjult, og investering/pris blir et signal til inntrengeren.
- **Eksamensbelegg:** Sjanger B: H2023 Q6 (entry deterrence med to firmatyper — høykosttypen investerer aldri; separerende ⇒ E går inn mot høykost, pooling ⇒ E holder seg ute) — 30 % av settet. Kobler kap. 2.3 (observerbar, SPE) til den skjulte varianten (PBE). Prioritet: **perfekt**.
- **Innholdskontrakt:** Oppsettet: etablert bedrift med skjult kostnadstype (lav/høy); et førsteperiodes valg (pris/investering) som inntrengeren observerer før inn/ut-beslutningen. **Separerende PBE:** lavkosttypen investerer aggressivt, høykosttypen ikke → inntrengeren lærer typen og går inn mot høykost, holder seg ute mot lavkost. **Pooling PBE:** begge typer investerer aggressivt (høykosttypen «bløffer») → inntrengeren lærer ingenting og holder seg ute hvis forventet profitt ved inngang er negativ. Utled betingelsene for hver via femstegsmalen. **Kontrast til kap. 2.3** (observerbar type ⇒ ren SPE, «E går ikke inn»): med skjult type kan avskrekking oppstå via pooling *eller* bryte sammen via separering. Kobling til H2023 Q5 (uobserverbar investering ⇒ likevekt der E går inn kan ikke utelukkes).
- **Oppgavesjangre:** B. Mønstereksempel (omskrevet): «En etablert bedrift av ukjent kostnadstype setter en førsteperiodepris som en inntrenger observerer. Finn en separerende og en samlende PBE, og vis at avskrekking kun oppstår i pooling-likevekten der høykosttypen bløffer. Angi når inntrengeren holder seg ute.»
- **Typiske feil:** Behandle skjult type som observerbar (SPE i stedet for PBE); glemme høykosttypens bløff-insentiv i pooling; sette off-path-beliefs uten sekvensiell rasjonalitet; ikke skille separerende/pooling-utfallet for inntrengeren.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.5: Signaliseringsanvendelser: forsikring, venturekapital og markeder

- **id:** `econ4220-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-4-4`, `econ4220-6-1`
- **Kapitteltype:** teori (m/drøftingsmodul)
- **description:** PBE-caset anvendt: forsikring med selvrisiko (D/N), venturekapital-signalisering og oversettelsen til Spence-markeder — med den åpne drøftingshalen.
- **Eksamensbelegg:** Sjanger B + L: H2019 (forsikring D/N som signaliseringstre), H2025 Q3–Q4 (venturekapital + åpen drøfting: hvordan kostbar signalisering løser asymmetrisk informasjon i andre markeder). Prioritet: **perfekt** (regime B-hale). **Forkunnskap:** valg under usikkerhet (kap. 6.1) — H2025-caset bygger på forventet nytte; dette er en dokumentert forlengs-avhengighet (se avvik §2 punkt 6).
- **Innholdskontrakt:** **Forsikringssignalisering (H2019 D/N):** selvrisiko som selvseleksjonsmekanisme — modellér valget som signaliseringstre, finn separerende PBE (høyrisiko velger full dekning, lavrisiko selvrisiko). **Venturekapital (H2025):** entreprenørens investeringsnivå som signal; separerende PBE med overinvestering ($x_H = x_L^0$, kap. 4.2); poolingbetingelsen $\alpha\pi_H + (1-\alpha)\pi_L > \pi^V$ (kap. 4.3). **Drøftingsmodul (sjanger L — obligatorisk for dette kapitlet):** oversett venturekapital-/forsikringslogikken til andre markeder — utdanning (Spence), garantier, reklame som «money burning», arbeidsmarkedet; under hvilke betingelser vil den informerte parten dele informasjon (H2023 Q7); når lønner kostbar signalisering seg. **Strukturert teoribruk premieres** — ikke løse betraktninger `(verifiser)`. Svarmal for den åpne drøftingen: (i) identifisér informasjonsasymmetrien, (ii) hva er signalet og hvorfor er det troverdig (single-crossing), (iii) separerende vs. pooling-utfall, (iv) velferdsvurdering.
- **Oppgavesjangre:** B + L. Mønstereksempel (omskrevet): «Et forsikringsselskap tilbyr kontrakter med ulik selvrisiko til kunder med skjult risikotype. Modellér som signaliseringsspill, finn den separerende PBE, og drøft — med samme apparat — hvorfor arbeidsgivere verdsetter formell utdanning selv når den ikke øker produktiviteten.»
- **Typiske feil:** Løs drøfting uten teoriapparat; glemme single-crossing i oversettelsen; blande forsikrings- og venturekapital-parametrene; ikke koble til forventet nytte der oppgaven krever det.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.6: Forfiningshierarkiet og definisjonssjangeren

- **id:** `econ4220-4-6` · **number:** 4.6 · **estimatedMinutes:** 50 · **prerequisites:** `econ4220-4-1`, `econ4220-1-2`
- **Kapitteltype:** teori (definisjonssjanger — capstone)
- **description:** Hele forfiningskartet samlet: rasjonaliserbar ⊇ NE, SPE forfiner NE, PBE forfiner SPE — svarmalen for den faste definisjonsåpningen.
- **Eksamensbelegg:** Sjanger A: definisjonsåpningen er fast i regime B (3/3: H2023 Q1 «definér NE/SPE/PBE og relasjonen», H2024 Q1 auksjon/ren/blandet/NE, H2025 Q1 risiko/beliefs/PBE) — ~10 %, **gratis poeng** for den som kan hierarkiet presist. Dokumentert krav: fire løsrevne definisjoner uten relasjonen svarer ikke på spørsmålet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Forfiningshierarkiet samlet** (bevis-arketype (d) relasjon): **rasjonaliserbare strategier ⊇ NE** (enhver NE overlever iterert eliminasjon — kap. 1.2); **SPE forfiner NE** ved å kreve NE i *alle* delspill (fjerner ikke-troverdige trusler — kap. 2.2); **PBE forfiner SPE** ved å legge til Bayes-konsistente beliefs og sekvensiell rasjonalitet ved hver informasjonsmengde (kap. 4.1); **intuitive criterion** forfiner PBE videre (kap. 4.3). Hvert nivå: presis definisjon + intuisjon + ett minimalt eksempel som skiller nivået fra det forrige (en NE som ikke er SPE; en SPE som ikke er PBE-«rimelig»). **Definisjonssjangerens svarmal:** for hvert begrep — (i) formell definisjon i emnets notasjon, (ii) intuisjon i én setning, (iii) relasjonen til nabobegrepene (hva forfiner hva, og hvorfor). Også de andre definisjonstermene som er testet: ren/blandet strategi, rasjonaliserbar strategi, beste svar (H2024/H2021); risiko/risikoaversjon/beliefs (H2025 — lenk kap. 6.1). Relasjonskart-figur (i ord).
- **Oppgavesjangre:** A. Mønstereksempel (omskrevet): «Definér Nash-likevekt, delspillperfekt likevekt og perfekt Bayesiansk likevekt, og forklar presist hvordan de tre henger sammen. Gi et eksempel på en NE som ikke er delspillperfekt, og ett på en SPE som krever beliefs for å bli en PBE.»
- **Typiske feil:** Gi fire løsrevne definisjoner uten relasjonen (svarer ikke på spørsmålet); feil retning i forfiningen (tro NE forfiner SPE); definere PBE uten beliefs; hoppe over eksemplet som skiller nivåene.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 4.7: Drill: PBE-caset

- **id:** `econ4220-4-7` · **number:** 4.7 · **estimatedMinutes:** 100 · **prerequisites:** `econ4220-4-6`
- **Kapitteltype:** drill
- **description:** Signaturhåndverket drillet til A-nivå: fra signaliseringstre til komplett separerende OG samlende PBE med forfining — «i søvne».
- **Eksamensbelegg:** Dekker sjanger B (6/7, hele regime B-tyngdepunktet) + A (definisjonshalen). Det største enkeltemnet i faget. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (femstegsmalen operasjonalisert):** 1) les treet, angi typer/prior/meldinger; 2) postulér separerende profil → Bayes-beliefs på stien → frie beliefs utenfor → sjekk IC/sekvensiell rasjonalitet → konkludér om separerende PBE finnes; 3) gjenta for samlende profil (+ poolingbetingelse); 4) forfining (intuitive criterion, mest rimelig); 5) tolk økonomisk + eventuell drøftingshale. Gjennomregnet eksamenscase (entry-m/typer ELLER venturekapital) med sensor-margnotater ved hvert steg (Bayes brukt riktig, off-path-beliefs eksplisitte, ingen-avvik verifisert, forfining begrunnet). **12–16 oppgaver på eksamensnivå** som roterer: forsikring D/N, venturekapital, entry deterrence m/typer, arbeidsmarkedssignalisering, produktkvalitet/garanti — nyskrevne typer, priors, payoffs; hver ender med både separerende- og pooling-analyse.
- **Oppgavesjangre:** B (full kjede) + A. Mønstereksempel: full H2023/H2025-lengde deloppgave-kjede.
- **Typiske feil:** Hele §4-repertoaret: strategier uten beliefs; vilkårlige off-path-beliefs; bare én likevektstype; glemme poolingbetingelse/IC; hoppe over forfining.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A PBE-definisjon + femstegsmalen på et enkelt tre, sjanger B; 4.B separerende PBE m/IC og overinvestering, sjanger B; 4.C samlende PBE + intuitive criterion + begge finnes, sjanger B; 4.D full PBE-case på eksamensnivå — entry m/typer eller venturekapital med drøftingshale, sjanger B + A + L).

---

### Del 5 — Auksjoner *(prioritet: PERFEKT — 3/7, men 90 % av H2024)*

#### Kapittel 5.1: Andreprisauksjonen: sannferdig bud som dominerende strategi

- **id:** `econ4220-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ4220-3-1`
- **Kapitteltype:** teori
- **description:** Vickrey-auksjonen: at $b = v$ er svakt dominerende — og hvorfor det finnes andre, «rare» Bayesianske likevekter.
- **Eksamensbelegg:** Sjanger D: H2020 2B (andrepris — sannferdig bud dominerende; forklar hvorfor «rare» BNE der én byr 0 og en annen 1 også er likevekter). Prioritet: **perfekt**.
- **Innholdskontrakt:** Auksjonsformater (åpne/lukkede, første/andrepris) og privatverdimodellen ($v_i$ privat, i.i.d.). **Andreprisauksjonen:** vinneren betaler nest høyeste bud. **Vis at $b_i = v_i$ er svakt dominerende** (bevis-arketype (b)/(d)): sammenlikn med å by over og under egen verdi, case for case — aldri lønnsomt å avvike uansett motpartens bud. Tolkning: budet påvirker *om* du vinner, ikke *hva* du betaler → ingen grunn til å skjule verdien. **«Rare» BNE:** vis at asymmetriske profiler (én byr alltid høyt, en annen alltid 0) også er BNE — ingen har lønnsomt avvik gitt motpartens strategi (men de er ikke i dominerende strategier). Forventet inntekt for selger (forspill til inntektsekvivalens). Kobling til andrepris ≈ engelsk auksjon.
- **Oppgavesjangre:** D. Mønstereksempel (omskrevet): «I en andreprisauksjon med to budgivere og private verdier: vis at det å by egen verdi er svakt dominerende. Vis deretter at det også finnes en Bayesiansk Nash-likevekt der den ene alltid byr høyt og den andre alltid byr 0, og forklar hvorfor ingen har lønnsomt avvik.»
- **Typiske feil:** Påstå at sannferdig bud er *strengt* dominerende (det er svakt); ikke gjennomføre case-analysen (by over/under); overse at «rare» BNE ikke er i dominerende strategier; blande andrepris- og førsteprislogikk.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.2: Førsteprisauksjonen og inntektsekvivalens

- **id:** `econ4220-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-5-1`
- **Kapitteltype:** teori
- **description:** Bud under verdi i førstepris, det symmetriske likevektsbudet — og inntektsekvivalensteoremet (Jehle & Reny Thm 9.1).
- **Eksamensbelegg:** Sjanger D: H2022 2B (førstepris — budgivere byr under verdi; inntektsekvivalens; uniform $[0,1]$, $n=2$ ⇒ $b(v) = v/2$; samme forventede inntekt som andrepris). Jehle & Reny Thm 9.1 siteres direkte i settet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Førsteprisauksjonen:** vinneren betaler eget bud → avveining (høyere bud øker vinnersjansen, men senker gevinsten) → **bud under verdi**. **Utled det symmetriske likevektsbudet** (bevis-arketype (c)): sett opp forventet gevinst, anta symmetrisk økende $b(v)$, deriver/bruk envelope → for uniform $[0,1]$, $n=2$: $b(v) = v/2$; generelt $b(v) = E[\text{nest høyeste verdi} \mid \text{vinner}]$. **Inntektsekvivalensteoremet (Thm 9.1):** under risikonøytralitet, i.i.d. privatverdier og symmetri gir alle standard auksjonsformater samme forventede selgerinntekt — oppgi og *bruk* teoremet (åpen bok krever korrekt anvendelse, ikke bare sitat). Forutsetningene eksplisitt (kritisk — de brytes i all-pay/risikoaversjon). Verifisér ekvivalensen numerisk for uniform-eksemplet (førstepris og andrepris gir samme forventede inntekt). Mekanismedesign nevnes i én setning som overbygning (aldri testet — ikke tungt).
- **Oppgavesjangre:** D. Mønstereksempel (omskrevet): «To budgivere har verdier uniformt fordelt på $[0,1]$. Utled det symmetriske likevektsbudet i en førsteprisauksjon, og vis ved inntektsekvivalensteoremet at forventet selgerinntekt er den samme som i en andreprisauksjon. Oppgi teoremets forutsetninger.»
- **Typiske feil:** Glemme at budgivere byr *under* verdi (dokumentert felle); feilbruk av inntektsekvivalens (glemme risikonøytralitet/i.i.d./symmetri); regnefeil i envelope-utledningen; sitere Thm 9.1 uten å bruke det.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 5.3: All-pay-auksjonen: blandet likevekt og innsatskappløp

- **id:** `econ4220-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-5-2`, `econ4220-1-3`
- **Kapitteltype:** teori
- **description:** All-pay: alle betaler budet sitt. Ingen ren-strategi-likevekt ved kjente like verdier — blandet likevekt via CDF som gjør motparten indifferent.
- **Eksamensbelegg:** Sjanger D: H2024 Q2–Q4 (all-pay-auksjon — bar 90 % av settet, 20/40/30). Modellér innsatskappløp/lobbying som all-pay. Prioritet: **perfekt** (høyest enkeltvekt i ett sett).
- **Innholdskontrakt:** **All-pay-auksjonen:** alle budgivere betaler eget bud, kun høyeste vinner premien → modell for lobbying, patentkappløp, sport. **Kjente like verdier:** ingen ren-strategi-NE (any pure bid invites undercutting/overbidding) → **blandet likevekt** via CDF (bevis-arketype (a)/(c)): finn fordelingen $F$ som gjør motparten indifferent mellom alle bud i støtten; **null-gevinst-betingelsen** i nedre støttegrense (et bud på 0 vinner aldri men koster ikke → forventet gevinst 0 der) ⇒ for symmetrisk to-spiller: $F$ **uniform**, forventet innsats $v/2$. **Privatverdi-utvidelsen** (H2024 Q3–Q4): verdier uniformt $[0, \bar v]$ → symmetrisk likevekt via envelope/FOC; forventet innsats; **effekt av innsatstak** på effektivitet (drøftingsmodul). Total forventet innsats vs. premieverdi (rent-dissipation). Kobling til indifferensprinsippet (kap. 1.3) i kontinuerlig strategirom.
- **Oppgavesjangre:** D. Mønstereksempel (omskrevet): «To bedrifter bruker ressurser på lobbyvirksomhet for en kontrakt verdt $v$; begge betaler innsatsen uansett utfall. Vis at det ikke finnes ren-strategi-likevekt, finn den blandede likevekten ved å bestemme innsatsfordelingen som gjør motparten indifferent, og beregn forventet total innsats.»
- **Typiske feil:** Lete etter ren-strategi-likevekt (finnes ikke ved like verdier); glemme null-gevinst-betingelsen i nedre støttegrense (dokumentert felle); feil CDF; ikke koble til indifferensprinsippet.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.4: Drill: auksjonsoppgaven

- **id:** `econ4220-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ4220-5-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på auksjoner: andrepris (dominans), førstepris (envelope + inntektsekvivalens) og all-pay (CDF) i full A-besvarelse.
- **Eksamensbelegg:** Dekker sjanger D (3/7, men 90 % av H2024). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) identifisér formatet (første/andre/all-pay); 2) andrepris → vis dominans (case-analyse); 3) førstepris → utled $b(v)$ via envelope, bruk inntektsekvivalens (oppgi forutsetninger); 4) all-pay → ingen ren NE, finn CDF via indifferens + null-gevinst; 5) beregn forventet inntekt/innsats og tolk. Gjennomregnet all-pay-case (H2024-nivå) med sensor-margnotater. **10–14 oppgaver på eksamensnivå**: format-varianter, $n$-budgiver-generaliseringer, inntektssammenlikninger, innsatstak-drøfting — nyskrevne verdier og kontekster.
- **Oppgavesjangre:** D. Mønstereksempel: full deloppgave-kjede over de tre formatene med inntektssammenlikning.
- **Typiske feil:** Format-forvekslinger; bud over verdi i førstepris; null-gevinst-betingelsen glemt; inntektsekvivalens uten forutsetninger.
- **Quiz: 14 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A andrepris — dominans + «rare» BNE, sjanger D; 5.B førstepris — envelope-utledning + inntektsekvivalens m/forutsetninger, sjanger D; 5.C all-pay — blandet likevekt via CDF + null-gevinst, sjanger D; 5.D blandet auksjonsprøve på eksamensnivå m/inntektssammenlikning, sjanger D).

---

### Del 6 — Valg under usikkerhet *(prioritet: KUNNE — 2/7, inngangsport til H2025-signalisering)*

#### Kapittel 6.1: Forventet nytte, risikoaversjon og Jensens ulikhet

- **id:** `econ4220-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-0-2`
- **Kapitteltype:** teori
- **description:** vNM-nytte, konkavitet ⇔ risikoaversjon via Jensen, sikkerhetsekvivalent, risikopremie og Arrow-Pratt-målet.
- **Eksamensbelegg:** Sjanger I: H2019 1d (Arrow-Pratt), H2025 2A (konkavitet ⇒ risikoaversjon via Jensen; **konkavitetskorde eksplisitt krevd tegnet**). Inngangsporten til venturekapital-signaliseringen (kap. 4.5). Prioritet: **kunne** (nivå 2, men fundament for H2025-caset).
- **Innholdskontrakt:** **von Neumann–Morgenstern-nytte** $v(y)$ over pengeutfall; forventet nytte $Eu = E[v(X)]$. **Risikoaversjon ⇔ konkavitet** (bevis-arketype (b)): $v'' < 0$ ⇒ **Jensens ulikhet** $E[v(X)] \le v(E[X])$ — vis med korden under kurven (**figuren er del av svaret** — dokumentert H2025-krav); risikoavers agent foretrekker forventningsverdien fremfor lotteriet. **Sikkerhetsekvivalent** $CE$: $v(CE) = E[v(X)]$; **risikopremie** $= E[X] - CE > 0$ ved risikoaversjon. **Arrow-Pratt** absolutt risikoaversjon $A(y) = -v''/v'$ (H2019); relativ risikoaversjon; tolkning (avtakende ARA). Presisér: risikoaversjon følger av **konkavitet $v'' < 0$**, ikke av $v' > 0$ (dokumentert felle). Standard nyttefunksjoner (CARA, CRRA) kort.
- **Oppgavesjangre:** I. Mønstereksempel (omskrevet): «En agent med nyttefunksjon $v(y) = \sqrt{y}$ står overfor et lotteri som gir 100 eller 400 med lik sannsynlighet. Vis at agenten er risikoavers, beregn sikkerhetsekvivalenten og risikopremien, og illustrér Jensens ulikhet med en figur av konkavitetskorden.»
- **Typiske feil:** Utlede risikoaversjon fra $v' > 0$ i stedet for $v'' < 0$ (dokumentert felle); feil retning på Jensen; blande sikkerhetsekvivalent og risikopremie; glemme å tegne korden når den kreves.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 6.2: Optimal investering under usikkerhet og komparativ statikk

- **id:** `econ4220-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4220-6-1`
- **Kapitteltype:** teori
- **description:** Porteføljevalget: FOC for optimal risikabel investering og komparativ statikk via implisitt derivasjon av førsteordensbetingelsen.
- **Eksamensbelegg:** Sjanger I: H2025 2B (optimal investering — FOC $E[v' \cdot (\text{avkastning})] = 0$; komparativ statikk $\partial x^*/\partial\pi > 0$ via implisitt derivasjon). Prioritet: **kunne**.
- **Innholdskontrakt:** Porteføljeproblemet: fordel formue mellom sikker og risikabel eiendel (eller invester beløp $x$ i et usikkert prosjekt). **FOC** (bevis-arketype (c)): $\frac{d}{dx}E[v(\text{formue}(x))] = E[v' \cdot (\text{marginal avkastning})] = 0$ — utled og tolk (marginal forventet nytte av mer risiko = 0 i optimum). Andreordensbetingelsen (konkavitet). **Komparativ statikk via implisitt derivasjon av FOC:** hvordan endres $x^*$ når en parameter (forventet avkastning $\pi$, risiko, formue) endres — differensier FOC implisitt, fortegn fra andreordensbetingelsen; vis $\partial x^*/\partial\pi > 0$. Rollen til risikoaversjon (mer risikoavers ⇒ mindre i risikabel eiendel). Kobling til CARA/CRRA (formueseffekt på $x^*$).
- **Oppgavesjangre:** I. Mønstereksempel (omskrevet): «En investor plasserer beløp $x$ i et prosjekt med usikker avkastning. Utled førsteordensbetingelsen for optimal $x^*$, og vis ved implisitt derivasjon at $x^*$ øker når forventet avkastning øker. Angi hvilken betingelse som sikrer fortegnet.»
- **Typiske feil:** Feil FOC (glemme forventningen); komparativ statikk uten implisitt derivasjon; feil fortegn (glemme at andreordensbetingelsen bestemmer det); blande formue- og risikoeffekt.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (6.A forventet nytte + risikoaversjon via Jensen m/figur, sjanger I; 6.B sikkerhetsekvivalent + risikopremie + Arrow-Pratt, sjanger I; 6.C optimal investering — FOC + komparativ statikk, sjanger I; 6.D blandet usikkerhets-prøve på eksamensnivå m/kobling til signalisering, sjanger I + B).

---

### Del 7 — Informasjonsøkonomi: ugunstig utvalg og moralsk hasard *(prioritet: KUNNE/KJENNE — J 1/7, moralsk hasard aldri testet)*

#### Kapittel 7.1: Ugunstig utvalg og screening: Rothschild–Stiglitz

- **id:** `econ4220-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-4-3`, `econ4220-6-1`
- **Kapitteltype:** teori (m/drøftingsmodul)
- **description:** Forsikringsmarkedet med skjult risikotype: separerende screening-likevekt, når den ikke finnes — og markedskollaps à la Akerlof.
- **Eksamensbelegg:** Sjanger J: H2021 2B (Rothschild–Stiglitz — konkurrerende forsikrere; full forsikring til høyrisiko, delvis til lavrisiko *hvis den finnes*; separerende SPE finnes ikke når andelen lavrisiko $\alpha$ er stor nok; anvendelse på helseforsikring og ACA). Jehle & Reny §8.1.3 siteres direkte. Prioritet: **kunne** (høy verdi-per-side om den kommer).
- **Innholdskontrakt:** **Ugunstig utvalg (adverse selection):** skjult *type* (før kontrakt) → «lemons»-logikken (Akerlof, kort): gjennomsnittspris driver ut de gode → markedet kan kollapse. **Rothschild–Stiglitz forsikringsmodell:** konkurrerende forsikrere, kunder med skjult risikotype (høy/lav); kontrakter (premie, dekning). **Screening** (uinformert part tilbyr en meny som selvselekterer — motsatt av signalisering der den informerte handler): separerende likevekt gir **full forsikring til høyrisiko, delvis (rasjonert) til lavrisiko** slik at høyrisiko ikke vil imitere (IC). **Ikke-eksistens:** når andelen lavrisiko $\alpha$ er stor nok, kan en samlende (pooling) kontrakt bryte den separerende lønnsomt → ingen likevekt i ren strategi. Single-crossing i forsikringsdiagrammet. **Drøftingsmodul (sjanger L):** virkemidler mot ugunstig utvalg — obligatorisk forsikring (individual mandate), essential benefits (ACA); hvorfor de kan gjenopprette et marked. Kontrast screening (Del 7) vs. signalisering (Del 4): hvem handler først, den informerte eller uinformerte.
- **Oppgavesjangre:** J + L. Mønstereksempel (omskrevet): «Et forsikringsmarked har høy- og lavrisikokunder som kjenner egen risiko. Utled den separerende screening-likevekten, vis at lavrisiko får delvis dekning, og forklar hvorfor likevekten forsvinner når andelen lavrisiko er høy. Drøft hvordan et individuelt forsikringspåbud påvirker markedet.»
- **Typiske feil:** Blande screening (uinformert handler) og signalisering (informert handler); gi full forsikring til begge typer (bryter IC); hoppe over ikke-eksistens-tilfellet (dokumentert poeng); glemme single-crossing.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 7.2: Moralsk hasard og prinsipal-agent *(prioritet: KJENNE)*

- **id:** `econ4220-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4220-7-1`
- **Kapitteltype:** teori (beredskap/bør kjenne)
- **description:** Skjult handling: prinsipal-agent-problemet, insentivkontrakten og avveiningen mellom insentiver og risikodeling — kompakt, siden det aldri er testet.
- **Eksamensbelegg:** **Aldri testet som egen oppgave i noen av de 7 settene** (0/7), men står i emnebeskrivelsen. Behandles derfor kompakt («bør kjenne til») som forsikring mot at det dukker opp. Kontrast til adverse selection (skjult type) og til den generelle informasjonsøkonomien. Prioritet: **kjenne**. Merk `(verifiser)`: hele kapitlets eksamensrelevans er beredskap, ikke belegg.
- **Innholdskontrakt:** **Moralsk hasard (skjult handling, *etter* kontrakt):** agentens innsats er uobserverbar → insentivproblem. **Prinsipal-agent-modellen:** risikonøytral prinsipal, risikoavers agent; participation constraint (IR) + incentive compatibility (IC på handling). **Førstebeste** (observerbar innsats: full forsikring, effisient innsats) vs. **andrebeste** (skjult innsats: agenten bærer risiko for å få insentiv). Grunnavveiningen: **insentiver vs. risikodeling** — en flatere kontrakt gir bedre risikodeling men svakere innsats. Enkelt to-utfall-eksempel (utled insentivlønnen). Anvendelser (aksjeopsjoner, franchising, egenandel i forsikring). Kort — dette er en vedlikeholdsdose, ikke fordypning; mekanismedesign nevnes i én setning (aldri testet).
- **Oppgavesjangre:** J-beslektet (beredskap). Mønstereksempel (omskrevet): «En eier ansetter en leder hvis innsats ikke kan observeres. Sett opp prinsipal-agent-problemet med deltakelses- og insentivbetingelse, og forklar hvorfor den optimale kontrakten under skjult innsats lar lederen bære risiko — i motsetning til førstebeste.»
- **Typiske feil:** Blande moralsk hasard (skjult handling) med adverse selection (skjult type); gi full forsikring under skjult innsats (dreper insentivet); glemme deltakelsesbetingelsen; overinvestere lesetid her (det er beredskap).
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 7:** 4 prøver (7.A ugunstig utvalg + lemons-logikken, sjanger J-fundament; 7.B Rothschild–Stiglitz separerende screening + ikke-eksistens, sjanger J; 7.C signalisering vs. screening — hvem handler først + virkemidler, sjanger J + L; 7.D prinsipal-agent beredskapsprøve — insentiver vs. risikodeling, sjanger J).

---

### Del 8 — Forsikringsblokk: klassisk mikroøkonomi (regime A) *(prioritet: KJENNE — 4/7 men 0 % siden 2023)*

> **Regime-merknad:** Hele Del 8 er regime A — bar halve eksamen H2019–H2022,
> 0 % siden 2023. Beholdes som solid, men sekundær forsikring fordi
> regimeskiftet kan reverseres og deles med bachelor-ECON3220. Kompakt: hvert
> tema ett kapittel. Notasjon her: Jehle & Reny (goder $x_1, x_2$).

#### Kapittel 8.1: Konsumentteori og dualitet: Marshall, Hicks og Roy

- **id:** `econ4220-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-0-2`
- **Kapitteltype:** teori (regime A)
- **description:** Primal og dual: nyttemaksimering → indirekte nytte og Marshall; utgiftsminimering → utgiftsfunksjon og Hicks; Roys identitet knytter dem.
- **Eksamensbelegg:** Sjanger F: H2019 (utgiftsfunksjon, homogenitet, substitusjonselastisitet), H2020 (indirekte nytte fra Cobb-Douglas + verifisér Roy), H2021 (Marshall fra gitt $V$, $V \leftrightarrow e$), H2022 (utled og tolk $MRS_{ij} = p_i/p_j$). **4/7 men 0 % siden 2023.** Deles med bachelor. Prioritet: **kjenne**. Lenk forkunnskap [Konsumentteori: budsjettlinje, indifferenskurver og tilpasning](/econ1210/econ1210-7-1) `(verifiser lenke)`.
- **Innholdskontrakt:** **Primal:** $\max U(x)$ under budsjett → Marshall-etterspørsel $x_i(p,m)$ og **indirekte nytte** $V(p,m)$; egenskaper (homogen grad 0 i $(p,m)$, voksende i $m$, avtakende i $p_i$). **Dual:** $\min p\cdot x$ under $U \ge u$ → Hicks-etterspørsel $h_i(p,u)$ og **utgiftsfunksjon** $e(p,u)$; egenskaper (homogen grad 1 i $p$, konkav i $p$). **$MRS = p_i/p_j$** (utled og tolk — H2022). **Roys identitet** (bevis-arketype (c)/(d)): $x_i = -(\partial V/\partial p_i)/(\partial V/\partial m)$ — utled fra envelope; **Shephards lemma** $h_i = \partial e/\partial p_i$. **Dualiteten** $V(p, e(p,u)) = u$ og $e(p, V(p,m)) = m$ — invertér $V \leftrightarrow e$. Sjekk at Marshall og Hicks sammenfaller ved $u = V(p,m)$. Substitusjonselastisitet (H2019) kort.
- **Oppgavesjangre:** F. Mønstereksempel (omskrevet): «Gitt indirekte nyttefunksjon $V(p,m)$ for en Cobb-Douglas-konsument: utled Marshall-etterspørselen ved Roys identitet, finn utgiftsfunksjonen ved å invertere $V$, og verifisér at Hicks-etterspørselen fra Shephards lemma sammenfaller med Marshall ved riktig nyttenivå.»
- **Typiske feil:** Feil fortegn i Roys identitet (dokumentert felle); ikke verifisere at Marshall og Hicks sammenfaller; glemme homogenitets-/konkavitetsegenskapene; blande $V$ og $e$.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.2: Produsentteori: kostnadsfunksjonen og dens egenskaper

- **id:** `econ4220-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ4220-8-1`
- **Kapitteltype:** teori (regime A)
- **description:** Kostnadsminimering → betinget faktoretterspørsel og kostnadsfunksjon; egenskapstestene «kan dette være en kostnadsfunksjon?»; gjenskaping av teknologien.
- **Eksamensbelegg:** Sjanger G: H2019 (HydroP — produktfunksjon, kostnadsfunksjon, gjenskaping), H2020 1B (konkavitet-tolkning, tre «kan-ikke-være-kostnadsfunksjon»-tester, gjenskap produkt + profitt fra $c = y^2 w_1$), H2021 (betinget faktoretterspørsel + kostnadsfunksjon for $(z_1 z_2)^{1/4}$, profittfunksjon). **3/7 men 0 % siden 2023.** Prioritet: **kjenne**.
- **Innholdskontrakt:** Kostnadsminimering $\min w\cdot z$ under $f(z) \ge y$ (Lagrange) → **betinget faktoretterspørsel** $z_i(w,y)$ + **kostnadsfunksjon** $c(w,y)$. **Kostnadsfunksjonens egenskaper** (bevis-arketype (b) — «kan dette være en kostnadsfunksjon?»): homogen grad 1 i $w$, konkav i $w$, ikke-avtakende i $w$ og $y$ — test hver eksplisitt. **Shephards lemma** $z_i = \partial c/\partial w_i$; **Hotellings lemma** for profitt. **Gjenskaping:** fra kostnadsfunksjon tilbake til teknologi (via egenskaper) — men gjenskaper ikke alltid produktfunksjonen entydig (H2019). Profittmaksimering → tilbud + **profittfunksjon**; profittfunksjonens egenskaper (konveks i $p$, homogen grad 1). Skalautbytte via kostnadsfunksjonens form.
- **Oppgavesjangre:** G. Mønstereksempel (omskrevet): «Avgjør om $c(w_1, w_2, y) = y^2 \sqrt{w_1 w_2}$ kan være en kostnadsfunksjon ved å teste homogenitet, konkavitet og monotoni. Utled deretter den betingede faktoretterspørselen ved Shephards lemma, og finn profittfunksjonen.»
- **Typiske feil:** Påstå at en funksjon er/ikke er en kostnadsfunksjon uten egenskapstest (dokumentert krav); glemme homogenitet grad 1 / konkavitet i $w$; tro at gjenskaping alltid er entydig; blande betinget og ubetinget faktoretterspørsel.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.3: Generell likevekt, Pareto og velferdsteoremene

- **id:** `econ4220-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4220-8-1`
- **Kapitteltype:** teori (regime A)
- **description:** Walrasiansk likevekt i bytteøkonomien, Pareto-effektivitet, de to velferdsteoremene — med allokerings-snarveien når hintet gis.
- **Eksamensbelegg:** Sjanger H: H2019 (Walrasiansk likevekt i Deb–Frank-bytteøkonomi), H2020 (verifisér 1. velferdsteorems betingelser, GE via direkte-allokering-hint), H2021 (Bolt-firma + Carl — Pareto, kan (1,1) være Walrasiansk via 2. velferdsteorem), H2022 (bytteøkonomi, karakterisér likevekt). **4/7 men 0 % siden 2023.** Prioritet: **kjenne**. Lenk [Generell likevekt](/econ2220/econ2220-4-1) `(verifiser lenke)`.
- **Innholdskontrakt:** Bytteøkonomien (Edgeworth-boks), beholdninger, allokeringer. **Walrasiansk (konkurranse-)likevekt:** priser + allokering der alle markeder klareres (Walras' lov). **Pareto-effektivitet:** $MRS_A = MRS_B$ (= $MRT$ med produksjon). **1. velferdsteorem:** enhver Walrasiansk likevekt er Pareto-effektiv (betingelser: lokal umettelighet, ingen eksternaliteter). **2. velferdsteorem:** enhver Pareto-effektiv allokering kan realiseres som Walrasiansk likevekt etter passende omfordeling (krever konvekse preferanser). **Allokerings-snarveien** (H2020-hintet): når hintet gis, løs planleggerens Pareto-problem direkte ($MRS_A = MRS_B = MRT$) og påberop velferdsteoremene for å argumentere Walrasiansk — i stedet for å regne meretterspørsel. Prisbasert løsning (normalisér én pris, klarér markedet) som alternativ.
- **Oppgavesjangre:** H. Mønstereksempel (omskrevet): «I en bytteøkonomi med to konsumenter og to goder: finn den Walrasianske likevekten, vis at den er Pareto-effektiv (1. velferdsteorem), og bruk 2. velferdsteorem til å avgjøre om en gitt lik-deling kan støttes som likevekt etter omfordeling.»
- **Typiske feil:** Ikke bruke allokerings-snarveien når hintet gis; mangle $MRS_A = MRS_B$; kalle en individuell tilpasning «likevekt» (krever markedsklarering); glemme velferdsteoremenes forutsetninger (selvstendige poeng).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 8.4: Optimal skatt: Ramsey og invers-elastisitet-regelen

- **id:** `econ4220-8-4` · **number:** 8.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ4220-8-3`
- **Kapitteltype:** teori (regime A)
- **description:** Vridende skatt og effektivitetstap: Ramsey-regelen og hvorfor mindre priselastiske goder skal skattlegges hardere.
- **Eksamensbelegg:** Sjanger H (skatt-varianten): H2020 1C3 (invers-elastisitet-regelen for mat vs. etanol, tolkning uten å regne satsene). **1/7, 0 % siden 2023.** Prioritet: **kjenne** (letteste regime A-kapittel — kort).
- **Innholdskontrakt:** Vridende (stykk)skatt → effektivitetstap (dødvektstap) fordi relativpriser forvrenges. **Ramsey-problemet:** minimér samlet effektivitetstap gitt en inntektsmålsetting. **Invers-elastisitet-regelen:** optimal sats $\propto 1/\varepsilon$ — skattlegg mindre priselastiske goder hardere (mindre atferdsvridning per krone). Tolkning uten å regne satsene (H2020-sjangeren): hvorfor mat (uelastisk) vil bli hardere skattlagt enn et lett-substituerbart gode — og fordelingshensynet som motargument. Kobling til eksternaliteter/Pigou (kort — bor i econ1210). Denne regelen brukes til å *tolke*, sjelden til å regne.
- **Oppgavesjangre:** H (skatt). Mønstereksempel (omskrevet): «To goder skal skattlegges for å finansiere et gitt beløp; det ene er langt mer priselastisk enn det andre. Forklar med Ramsey/invers-elastisitet-regelen hvilket gode som bør ha høyest sats for å minimere effektivitetstapet, og hvilket fordelingshensyn som kan tale mot.»
- **Typiske feil:** Snu invers-elastisitet-regelen (skattlegge det elastiske hardest); regne satser der oppgaven ber om tolkning; glemme fordelingsmotargumentet; blande vridende og ikke-vridende (klumpsum) skatt.
- **Quiz: 18 · Flashcards: 18**

**Prøve-kvote Del 8:** 4 prøver (8.A dualitet — Roy + Shephard + $V \leftrightarrow e$, sjanger F; 8.B produsentteori — «kan dette være en kostnadsfunksjon?» + gjenskaping, sjanger G; 8.C generell likevekt + velferdsteoremene m/allokerings-snarvei, sjanger H; 8.D bred regime A-prøve på H2020/H2021-nivå m/skatt-tolkning, sjanger F+G+H).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Den åpne drøftingssjangeren

- **id:** `econ4220-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ4220-4-5`, `econ4220-7-1`
- **Kapitteltype:** sjangertrening (drøfting)
- **description:** Regime B-halen: den åpne drøftingsoppgaven om asymmetrisk informasjon og signalisering — strukturert teoribruk, ikke løse betraktninger.
- **Eksamensbelegg:** Sjanger L: ny fast hale i regime B — H2023 Q7 (under hvilke betingelser deler den informerte parten informasjon), H2025 Q4 (kostbar signalisering i venturekapital og analoge markeder: arbeidsmarked/utdanning à la Spence, garantier, reklame). Premierer strukturert teoribruk `(verifiser)`. Prioritet: **kunne**.
- **Innholdskontrakt:** **Svarmalen for åpen drøfting** (fra kap. 4.5, operasjonalisert): (i) identifisér informasjonsasymmetrien (skjult type/handling? hvem er informert?); (ii) angi signalet/screeningen og hvorfor det er troverdig (single-crossing/kostbarhet); (iii) separerende vs. pooling-utfall; (iv) velferds-/effektivitetsvurdering; (v) analoge markeder. **Case-bank:** informasjonsdeling mellom konkurrenter (H2023 Q7), utdanning som signal (Spence), garantier og produktkvalitet, reklame som «money burning», kredittrasjonering, brukthandel (lemons). Hvordan oversette et virkelig marked til det formelle apparatet. **Feil å unngå:** løse betraktninger uten modell; glemme å knytte til separerende/pooling; ikke vurdere velferd. Gjennomarbeidet eksempelbesvarelse (A-nivå) med margnotater om hva strukturert teoribruk ser ut som.
- **Oppgavesjangre:** L. Mønstereksempel (omskrevet): «Diskutér, med informasjonsøkonomisk teori, når en bedrift med privat informasjon om egen kvalitet vil velge å avsløre den frivillig — og når kostbar signalisering (garanti, reklame) er nødvendig. Trekk paralleller til minst ett annet marked.»
- **Typiske feil:** Synsing uten apparat; ingen kobling til separerende/pooling eller single-crossing; hoppe over velferdsvurderingen; svare på feil spørsmål.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 9.2: Øvingseksamen 1 — regime B (H2023-malen)

- **id:** `econ4220-9-2` · **number:** 9.2 · **estimatedMinutes:** 180 · **prerequisites:** `econ4220-9-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett regime B-sett i H2023-profil: definisjonsåpning, oligopol/Bertrand, entry SPE, PBE m/typer og drøftingshale.
- **Eksamensbelegg:** Speiler H2023-malen (7 oppgaver, vekting 10/10/10/20/10/30/10): definisjonsåpning m/forfiningshierarki, differensiert Bertrand-NE, fixed-cost-analyse, entry SPE (observerbar), uobserverbar entry, PBE med to firmatyper (30 %), åpen drøfting om informasjonsdeling. 3 timer, åpen bok, engelsk oppgavetekst.
- **Innholdskontrakt:** 4 Problems (konsolidert fra H2023s 7 deloppgaver til øvingsformat): **Problem 1** (10 %) definisjonsåpning NE/SPE/PBE + relasjon (sjanger A); **Problem 2** (30 %) differensiert Bertrand-NE + fixed-cost/entry SPE (sjanger K + B); **Problem 3** (40 %) entry deterrence med to kostnadstyper — separerende + pooling PBE, observerbar vs. skjult (sjanger B); **Problem 4** (20 %) åpen drøfting om informasjonsdeling (sjanger L). Løsningsforslag som A-besvarelser i `collapsible` per Problem, med vektings-`tip` og «Show that»-bevisføring. Nyskrevne tall/kontekster.
- **Oppgavesjangre:** A, K, B, L.
- **Typiske feil:** Definisjoner uten relasjon; Bertrand uten utledning; PBE uten beliefs; drøfting uten apparat; tidsstyring under 180 min.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2 — regime B (H2024/H2025-malen)

- **id:** `econ4220-9-3` · **number:** 9.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ4220-9-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett regime B-sett i H2024/H2025-profil: definisjonsåpning, all-pay-auksjon, forventet nytte og PBE-signalisering.
- **Eksamensbelegg:** Speiler H2024 (all-pay-tung, 10/20/40/30) og H2025 (signaliserings-tung, 10/30/40/20). Kombinerer de to nyeste settenes profil: definisjonsåpning + auksjon/usikkerhet + stort signaliserings-PBE + drøftingshale. 3 timer, åpen bok, engelsk.
- **Innholdskontrakt:** 4 Problems: **Problem 1** (10 %) definisjonsåpning — auksjon/ren/blandet strategi/NE eller risiko/beliefs/PBE (sjanger A); **Problem 2** (30 %) all-pay-auksjon — blandet likevekt via CDF, privatverdi-utvidelse, innsatstak (sjanger D); **Problem 3** (40 %) venturekapital-/arbeidsmarkeds-signalisering — separerende (overinvestering) + pooling PBE med forventet-nytte-inngang (sjanger B + I); **Problem 4** (20 %) drøfting av signalisering i andre markeder (sjanger L). Løsningsforslag som A-besvarelser i `collapsible`, vektings-`tip`. Nyskrevne parametre.
- **Oppgavesjangre:** A, D, B, I, L.
- **Typiske feil:** All-pay uten null-gevinst-betingelse; signalisering uten IC/beliefs; glemme forventet-nytte-koblingen; drøfting uten apparat.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3 — regime A (forsikring, H2020/H2021-malen)

- **id:** `econ4220-9-4` · **number:** 9.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ4220-9-3`
- **Kapitteltype:** øvingseksamen
- **description:** Forsikringssett hvis regimeskiftet reverseres: bred mikro-mal med klassisk teori (Problem 1) og spill/info (Problem 2), 50/50.
- **Eksamensbelegg:** Speiler den brede mikro-malen H2019–H2022 (P1 mikroteori 50 % + P2 spill/info 50 %) — beredskap mot at klassisk mikro returnerer (restrisiko i H2026-prognosen, `(verifiser)`). Bygger på Del 8 + Del 1–5. 3 timer, åpen bok, engelsk. Forord: «dette settet er forsikring — regime A har vært borte siden 2023.»
- **Innholdskontrakt:** 2 Problems à 50 %: **Problem 1** (mikroteori 50 %): konsument/dualitet (Roy/Shephard/$V\leftrightarrow e$, sjanger F) + produsent (kostnadsfunksjon-egenskaper, sjanger G) + generell likevekt/velferdsteoremene (sjanger H) — H2020/H2021-strukturen; **Problem 2** (spill/info 50 %): rasjonaliserbarhet + blandet NE (sjanger C) + auksjon (sjanger D) + PBE (sjanger B) — H2020/H2022-strukturen. Løsningsforslag som A-besvarelser i `collapsible`, vektings-`tip`. Nyskrevne tall.
- **Oppgavesjangre:** F, G, H, C, D, B.
- **Typiske feil:** Regime A-fellene (Roy-fortegn, egenskapstester glemt, allokerings-snarvei ubrukt) + regime B-fellene i én økt; tidsstyring over to like tunge Problems.
- **Quiz: 6 · Flashcards: 0**

**Prøve-kvote Del 9:** ingen egne prøver (delen består av sjangertrening + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 12+14 = **26** | 14+16 = **30** | 0 |
| 1 | 1.1–1.5 | 22+22+24+20+15 = **103** | 30+26+26+20+10 = **112** | 4 |
| 2 | 2.1–2.4 | 20+22+18+15 = **75** | 26+26+20+10 = **82** | 4 |
| 3 | 3.1–3.2 | 18+20 = **38** | 24+22 = **46** | 4 |
| 4 | 4.1–4.7 | 24+22+22+18+18+20+18 = **142** | 30+26+26+22+22+28+12 = **166** | 4 |
| 5 | 5.1–5.4 | 18+20+18+14 = **70** | 22+24+20+10 = **76** | 4 |
| 6 | 6.1–6.2 | 22+16 = **38** | 26+16 = **42** | 4 |
| 7 | 7.1–7.2 | 22+14 = **36** | 28+18 = **46** | 4 |
| 8 | 8.1–8.4 | 18+16+18+18 = **70** | 20+18+22+18 = **78** | 4 |
| 9 | 9.1–9.4 | 12+8+8+6 = **34** | 14+0+0+0 = **14** | 0 (3 øvingseksamener) |
| **Sum** | **36 kap.** | **632 ≥ 500 ✓** | **692 ≥ 500 ✓** | **32 + 3 ØE** |

Kontrollsum quiz: 26+103+75+38+142+70+38+36+70+34 = **632**.
Kontrollsum flashcards: 30+112+82+46+166+76+42+46+78+14 = **692**.

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
**Tetthetsbegrunnelse:** flashcard-summen (692) ligger bevisst godt over 500-gulvet
fordi (i) faget er **tospråklig** — hvert sentralt begrep krever kort/langside på
norsk OG engelsk (Nash equilibrium/Nash-likevekt, subgame perfect/delspillperfekt,
separating/separerende, pooling/samlende, incentive compatibility, single-crossing,
revenue equivalence/inntektsekvivalens, Bayesian Nash, sequential rationality osv.),
og (ii) det er **begrepstett** (spillteori + informasjonsøkonomi + klassisk mikro
har store, presise definisjonsapparater). Fordelingen speiler frekvens: Del 4
(PBE-signaturen) alene står for 142 quiz / 166 flashcards; regime B (Del 1–7) står
for 492 av 632 quiz; regime A-forsikringsblokken (Del 8) holdes bevisst kompakt (70/78).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse: bevis/utledning etter «Show that»-malen + økonomisk tolkning +
figurbeskrivelse i ord) og poengfordeling der deloppgavene teller likt (eksamens
regel). Omfang i minutter. Prøvene ligger i prøvekapitler per del
(`econ4220-<del>-prove`, chapterNumber `<del>.P`).

**Del 1 — Normalformspill:** 1.A Nash + beste svar i matrise (C-fundament); 1.B iterert dominans + rasjonaliserbarhet inkl. blandet dominans (C); 1.C blandet NE via indifferensprinsippet + eksistens (C); 1.D oligopol-NE — Cournot/differensiert Bertrand-utledning (K).

**Del 2 — Ekstensivform/SPE:** 2.A ekstensivform + strategitelling + delspill (B-fundament); 2.B SPE via baklengs induksjon + ikke-troverdig trussel (B); 2.C entry deterrence m/forpliktelse + fixed-cost fra Bertrand (K+B); 2.D blandet ekstensivform på eksamensnivå m/observerbarhets-skillet (B+K).

**Del 3 — Bayesianske spill:** 3.A modellér ufullstendig info som Bayesiansk spill (E-fundament); 3.B BNE ex ante diskret (E); 3.C BNE interim — Bayesiansk Cournot (E); 3.D blandet BNE på eksamensnivå (E+K).

**Del 4 — PBE og signalisering:** 4.A PBE-definisjon + femstegsmalen på enkelt tre (B); 4.B separerende PBE m/IC + overinvestering (B); 4.C samlende PBE + intuitive criterion + begge finnes (B); 4.D full PBE-case på eksamensnivå — entry m/typer eller venturekapital m/drøftingshale (B+A+L).

**Del 5 — Auksjoner:** 5.A andrepris — dominans + «rare» BNE (D); 5.B førstepris — envelope + inntektsekvivalens m/forutsetninger (D); 5.C all-pay — blandet likevekt via CDF + null-gevinst (D); 5.D blandet auksjonsprøve m/inntektssammenlikning (D).

**Del 6 — Valg under usikkerhet:** 6.A forventet nytte + risikoaversjon via Jensen m/figur (I); 6.B sikkerhetsekvivalent + risikopremie + Arrow-Pratt (I); 6.C optimal investering — FOC + komparativ statikk (I); 6.D blandet usikkerhets-prøve m/signaliserings-kobling (I+B).

**Del 7 — Informasjonsøkonomi:** 7.A ugunstig utvalg + lemons (J-fundament); 7.B Rothschild–Stiglitz separerende screening + ikke-eksistens (J); 7.C signalisering vs. screening + virkemidler (J+L); 7.D prinsipal-agent beredskapsprøve — insentiver vs. risikodeling (J).

**Del 8 — Regime A-forsikring:** 8.A dualitet — Roy + Shephard + $V\leftrightarrow e$ (F); 8.B produsentteori — «kan dette være en kostnadsfunksjon?» + gjenskaping (G); 8.C generell likevekt + velferdsteoremene m/allokerings-snarvei (H); 8.D bred regime A-prøve på H2020/H2021-nivå m/skatt-tolkning (F+G+H).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 9.2) | H2023-malen (regime B) | Definisjonsåpning 10 % + differensiert Bertrand/entry SPE 30 % + entry deterrence m/typer PBE 40 % + informasjonsdeling-drøfting 20 % (A, K, B, L) |
| Øvingseksamen 2 (kap. 9.3) | H2024/H2025-malen (regime B) | Definisjonsåpning 10 % + all-pay-auksjon 30 % + venturekapital-signalisering PBE 40 % + signaliserings-drøfting 20 % (A, D, B, I, L) |
| Øvingseksamen 3 (kap. 9.4) | Bred mikro-mal H2019–22 (regime A-forsikring) | Mikroteori 50 % (dualitet + produsent + GE/velferd) + spill/info 50 % (rasj./blandet NE + auksjon + PBE) (F, G, H, C, D, B) |

De tre settene dekker samlet sjangrene A–L. Regime B-settene (1–2) speiler de
*typiske* nåværende settene (DNA-regelen); regime A-settet (3) er eksplisitt
merket forsikring, siden klassisk mikro ikke har båret en oppgave siden 2022.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, åpen bok, engelsk oppgavetekst,
   digitale skisseark, A–F, dobbeltkodet ECON3220/ECON4220), regimeskiftet H2023,
   de to malene, vektingshistorikken og H2026-prognosen (fra kap. 0.1); egen boks
   om at master bedømmes strengere på formell stringens `(verifiser)`.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 1–5: normalform/rasjonaliserbarhet/blandet NE, ekstensivform/SPE,
   PBE-signaturen komplett, auksjoner), kunne (Del 6–7: valg under usikkerhet,
   ugunstig utvalg/screening, Bayesianske spill, drøftingssjangeren), kjenne
   (Del 8 regime A-forsikring: dualitet, produsentteori, GE/velferd/skatt; moralsk
   hasard) — og eksplisitt hvorfor moralsk hasard/prinsipal-agent og mekanismedesign
   IKKE prioriteres (aldri testet), og hvorfor regime A likevel beholdes (kan
   returnere; `(verifiser)`).
3. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene fra drillkapitlene
   (1.5, 2.4, 4.7, 5.4) og sjangertreningen (9.1) i kortform: **PBE-femstegsmalen**
   (postulér → Bayes-beliefs → frie off-path-beliefs → sekvensiell rasjonalitet →
   forfining) fremhevet som bokas kjernehåndverk; normalform-kjeden, auksjons-triaden
   (dominans/envelope/CDF), definisjonssjangerens svarmal (forfiningshierarkiet),
   drøftingssvarmalen.
4. **Bevis- og sensorreglene** — «Show that»-bevismalen (kap. 0.2) + metareglene
   (bevis ikke bare svar; beliefs spesifiseres ikke antas; tegn det som bes om;
   vis egenskaper ikke påstå dem; følg vekting/«equal weight»); alle merket
   `(verifiser)` siden ingen sensorveiledning finnes.
5. **Feilkatalogen** — de typiske feilene samlet (strategier uten beliefs;
   vilkårlige off-path-beliefs; blande rasjonaliserbar/Nash; blandet dominans
   oversett; miks fra egne gevinster; bud over verdi i førstepris; null-gevinst
   glemt i all-pay; risikoaversjon fra $v'$ ikke $v''$; Roy-fortegn; egenskapstest
   glemt; allokerings-snarvei ubrukt; definisjoner uten relasjon; screening vs.
   signalisering forvekslet; drøfting uten apparat), hver med henvisning til
   kapitlet som forebygger den.
6. **Formelark i emnets notasjon (Jehle & Reny)** — én side: forfiningskart
   (rasj. ⊇ NE, SPE, PBE); Bayes for beliefs; indifferensprinsippet; auksjon
   ($b=v$; $b(v)=v/2$; all-pay $F$ uniform); Jensen $E[v(X)]\le v(E[X])$;
   Arrow-Pratt $A=-v''/v'$; Roy/Shephard; velferdsteoremenes betingelser;
   Ramsey $\propto 1/\varepsilon$ — med markering av hva som skal *utledes aktivt*
   (blandet NE, BNE, PBE-konstruksjon, auksjonslikevekt, FOC-investering,
   dualitetsidentiteter) vs. kun brukes (Nash-eksistens, Thm 9.1-anvendelse).
7. **Figurbiblioteket** — standardfigurene i ord (spilltre m/informasjonsmengder;
   signaliseringstre separerende vs. pooling; konkavitetskorde/Jensen; all-pay-CDF;
   Edgeworth-boks; Rothschild–Stiglitz forsikringsdiagram m/single-crossing;
   indifferenskurver) med merkekravene per figur — og regelen om at figur alltid
   ledsager, aldri erstatter, utledningen.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 (spill-ryggraden, med PBE-drill tyngst) → 5 (auksjoner)
   → 6 → 7, deretter Del 8 (regime A) kun hvis tid / for bachelor; prøver
   underveis; øvingseksamenene de tre siste ukene under tidspress (180 min med
   tidsbudsjett per Problem siden deloppgavene teller likt); regime A-kandidater
   løfter Del 8 og øvingseksamen 3.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ4220` med alle 36
   kapitler + 8 prøvekapitler (id/number/title/description/estimatedMinutes/
   topics/prerequisites) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts` (eller
   `textbook-courses-hoyskole.ts` der econ1310/econ2220 ligger); `sectionNames`
   fra makrostruktur-tabellen (§2); wire under UiO i
   `src/app/trinn/hoyere/institusjoner.ts` som «ECON4220 Microeconomics 3».
2. **Del 0** (0.1–0.2) — etablerer sjangernavnene A–L, frekvenstallene og
   «Show that»-bevismalen som resten refererer til.
3. **Spill-ryggraden i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4.
   **Del 4 splittes på to agenter** (4.1–4.4 og 4.5–4.7), begge med HELE delens
   kontrakter + PBE-femstegsmalen; flagg for konsistenssjekk (fase 6).
4. Del 5 (auksjoner) → Del 6 (usikkerhet) → Del 7 (info-økonomi). NB:
   kap. 4.5 har forlengs-avhengighet til kap. 6.1 (forventet nytte) — bygg 6.1
   FØR 4.5 hvis mulig, eller la 4.5-agenten lese 6.1-kontrakten.
5. Del 8 (regime A-forsikring) — kompakt, kan bygges parallelt (uavhengig av
   spilldelene).
6. Del 9 til slutt (drøftingssjangeren + de tre øvingseksamenene gjenbruker alt);
   én agent som leser HELE skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del per byggekontraktens spesifikasjon.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\frac`, `\\mu`, `\\sigma`, `\\partial`, `\\theta`, `\\beta`); ingen
  unicode-brøker/subskript ($x_1$, aldri «x₁»); konsistent $\mu$ (beliefs),
  $\sigma$ (blandet strategi), $\theta$ (type), $\pi$ (profitt/prior).
- [ ] **Notasjonskonsistens (Jehle & Reny)**: tekstsøk over alle econ4220-filer —
  **påkrevd**: $x_1, x_2$ (konsumgoder), $p_1, p_2$, $m$, $\omega$, $V(p,m)$,
  $e(p,u)$, $h_i$, $z_i(w,y)$, $c(w,y)$, $v(y)$ (vNM), $\mu$/$\beta$ (beliefs),
  $\sigma$, $\theta$; **forbudte/mistenkte termer**: «$c_1$/$c_2$» som primær
  konsumnotasjon (kun i engangsmerknad i 0.1 om at econ2220-boka bruker det);
  «MSB/MTB/MTSB» (econ2220s norske forkortelser — dette faget bruker $MRS$ og
  Jehle & Reny-notasjon); norsk fagterminologi skal ha engelsk i parentes ved
  første forekomst (engelsk eksamen).
- [ ] **«Show that»-bevisføring overalt**: hvert eksempel/løsningsforslag med et
  «vis at»/«demonstrér»-krav inneholder full utledning ELLER logisk deduksjon
  (ikke bare svaret); egenskaper vises (aldri påstås); antakelser oppgis eksplisitt.
- [ ] **PBE-femstegsmalen**: hvert signaliserings-/typespill-kapittel (4.1–4.5,
  4.7, 7.1) fører beliefs eksplisitt (Bayes på stien, frie off-path), verifiserer
  sekvensiell rasjonalitet, og behandler BÅDE separerende og samlende der relevant.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet), Forkunnskaper-blokk med lenker + Symbol- og
  formelliste-`collapsible` (per delkapittel — ALLE symboler/formler brukt),
  Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 8–16 oppgaver; øvingseksamener har
  løsningsforslag i `collapsible` per Problem med vektings-`tip`; info-økonomi- og
  signaliseringskapitler (4.5, 7.1, 9.1) har en **drøftingsmodul** (sjanger L).
- [ ] **Kryssbok-lenker**: alle `/econ1210/...`- og `/econ2220/...`-lenker
  peker på id-er som finnes i respektive metadata — **verifiser mot registry før
  bygging**; econ1210/econ2220 er per nå kun skjelett, så hvis de ikke er bygget
  ved byggetidspunkt: uttrykk forkunnskapen i prosa uten død lenke (jf. Leserkrav
  «Lenk kun til kapitler som finnes»).
- [ ] **Quiz-sum ≥ 632 og flashcard-sum ≥ 692** per kvotetabellen (§3 er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–L minst én gang.
- [ ] **To-kode og regime `(verifiser)`**: alle steder som påberoper «master
  bedømmes strengere», «sensor krever», «typiske feil» eller behandler
  regimeskiftet som permanent, skal enten stå med `(verifiser)` eller være
  formulert som fagkonvensjon (Jehle & Reny) — det finnes INGEN sensorveiledning
  i arkivet. Regime A (Del 8) beholdes som forsikring, ikke nedprioriteres helt.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, case, parter,
  formuleringer; ingen formuleringer fra reelle sett (skjelettets mønstereksempler
  er selv omskrivninger og skal varieres videre); kalibreringsverdier fra arkivet
  (Bertrand-koeffisienter, priors som $\tfrac15$, uniform $[0,1]$, all-pay
  $Ee=v/2$) brukes kun til nivå-/sjangervalg — oppgavetallene skal være nye;
  Jehle & Reny refereres (Thm 9.1, §8.1.3), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
